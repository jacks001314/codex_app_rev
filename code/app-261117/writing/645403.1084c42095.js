export const __rspack_esm_ids = [645403]
export const __webpack_modules__ = {
  BPFy(e, t, n) {
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
        K: function ({ currentMessageId: e, isLastNodeInMessage: t, mapping: n, messageId: i, writingBlockIndex: l }) {
          if (null == n || null == e) return "conversation_unavailable"
          if (null == i) return "missing_message_id"
          if (0 !== l) return "not_primary_writing_block"
          if (!t) return "not_last_node_in_message"
          let s = n[i]
          if (s?.message == null) return "message_not_found"
          if (s.message.author?.role !== "assistant") return "invalid_source_message"
          let a = e,
            r = new Set()
          for (; null != a && !r.has(a);) {
            if (a === i) return null
            r.add(a)
            let e = n[a],
              t = e?.message?.metadata?.writing_blocks
            if (e?.message?.author?.role === "user" || (null != t && Object.keys(t).length > 0)) break
            a = e?.parent ?? null
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
            let l = "title" in i && "string" == typeof i.title ? i.title.trim() : ""
            if ((n.push({ prompt: t, sourceIndex: e, title: l || t }), 3 === n.length)) break
          }
          return n
        },
      },
    )
  },
  wxDG(e, t, n) {
    n.d(t, { t: () => u })
    var i = n("Kwur"),
      l = n("heoH"),
      s = n("LhrG"),
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
    async function o(e, t, n) {
      if (null == e) return null
      try {
        let i = await (0, l.C)(e, {
          additionalHeaders: { "ChatGPT-Account-ID": t },
          expectedErrorStatuses: [403, 404],
          signal: n,
        })
        return (n.throwIfAborted(), { id: e, title: i.title ?? null })
      } catch {
        return (n.throwIfAborted(), null)
      }
    }
    function d(e) {
      let t = e?.display_name?.trim() || e?.email?.trim()
      return null == t ? null : { kind: "person", name: t }
    }
    function c(e) {
      return "fulfilled" === e.status ? e.value : null
    }
    function u({ accountId: e, source: t, userId: n }) {
      return {
        enabled: null != e,
        queryFn: ({ signal: l }) => {
          if (null == e) throw Error("Cannot fetch file info without an account")
          return (async function (e, t, n, l) {
            if ("library" === e.identity.type) {
              let n = e.identity.libraryFileId
              return null != (0, a.AG)(n)
                ? r(e, n, await o(e.conversationId, t, l))
                : (async function (e, t, n, l) {
                    var a, r, u
                    let m = await (0, s.F)(t, n, l)
                    l.throwIfAborted()
                    let f = m.access_kind,
                      g = e.conversationId ?? m.origination_thread_id,
                      p = { "ChatGPT-Account-ID": n },
                      [h, _, b, y] = await Promise.allSettled([
                        "mounted" === f
                          ? Promise.resolve(null)
                          : i.Request.safeGet("/files/library/files/{library_file_id}/sharing-state", {
                              parameters: { path: { library_file_id: t }, query: { include_profile_photos: !1 } },
                              additionalHeaders: p,
                              expectedErrorStatuses: [403, 404],
                              signal: l,
                            }),
                        "mounted" === f
                          ? Promise.resolve(null)
                          : i.Request.safeGet("/files/library/files/{library_file_id}/versions", {
                              parameters: { path: { library_file_id: t }, query: { limit: 1 } },
                              additionalHeaders: p,
                              expectedErrorStatuses: [403, 404],
                              signal: l,
                            }),
                        "shared" === f
                          ? i.Request.safeGet("/files/library/shared/files/{library_file_id}/access", {
                              parameters: { path: { library_file_id: t } },
                              additionalHeaders: p,
                              expectedErrorStatuses: [403, 404],
                              signal: l,
                            })
                          : Promise.resolve(null),
                        o(g, n, l),
                      ])
                    l.throwIfAborted()
                    let x = c(h),
                      v = c(_)?.items[0] ?? null,
                      w = c(b),
                      S = d(x?.owner ?? null)
                    return {
                      access:
                        ((a = f),
                        (r = x),
                        (u = w?.can_edit),
                        null != r &&
                        r.viewer.principal.principal_type === r.owner.principal.principal_type &&
                        r.viewer.principal.principal_id === r.owner.principal.principal_id
                          ? "owner"
                          : r?.viewer.role_id.includes("editor") || !0 === u
                            ? "editor"
                            : "owned" === a
                              ? "owner"
                              : "shared" !== a || (null == r && null == u)
                                ? null
                                : "viewer"),
                      conversation: c(y),
                      createdAt: m.record_creation_time ?? m.file_upload_time ?? e.createdAt ?? null,
                      createdBy: S,
                      externalAccount: m.external_account ?? e.externalAccount ?? null,
                      fileExtension: m.file_extension ?? null,
                      libraryFileMetadata: "image" === m.library_file_category ? m : void 0,
                      libraryFileId: t,
                      mimeType: m.mime_type ?? e.mimeType ?? null,
                      name: ("kind" in m ? m.name : m.file_name) || e.name,
                      parentDirectoryId: ("kind" in m ? m.parent_directory_id : m.directory_id) ?? null,
                      sizeBytes: m.file_size_bytes ?? e.sizeBytes ?? null,
                      sourceUrl: m.cloud_doc_url ?? e.sourceUrl,
                      updatedAt: v?.version_created_at ?? m.updated_at ?? m.file_upload_time ?? e.updatedAt ?? null,
                      updatedBy: (function (e, t, n) {
                        let i = e?.version_provenance
                        if (null == i) return null
                        if ("agent" === i.actor) return { kind: "chatgpt" }
                        let l = i.actor_id?.trim()
                        if (null != l && null != t) {
                          if (l === t.owner.principal.principal_id) return d(t.owner)
                          if (l === t.viewer.principal.principal_id) return d(t.viewer) ?? { kind: "you" }
                        }
                        let s = i.actor_display_name?.trim() || i.actor_email?.trim()
                        return null != s
                          ? { kind: "person", name: s }
                          : "create" === i.action && null != n
                            ? n
                            : { kind: "collaborator" }
                      })(v, x, S),
                    }
                  })(e, n, t, l)
            }
            let [u, m] = await Promise.all([
              i.Request.safeGet("/files/{file_id}", {
                parameters: { path: { file_id: e.identity.fileId }, query: { gizmo_id: e.gizmoId } },
                additionalHeaders: { "ChatGPT-Account-ID": t },
                signal: l,
              }).catch((t) => {
                if ((l.throwIfAborted(), null == e.sourceUrl && null == e.externalAccount)) throw t
                return null
              }),
              o(e.conversationId, t, l),
            ])
            if ((l.throwIfAborted(), null == u)) return r(e, null, m)
            let f = null != n && u.owner_id === n,
              g = f ? { kind: "you" } : null
            return {
              access: f ? "owner" : "viewer",
              conversation: m,
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
          })(t, e, n, l)
        },
        queryKey: ["chatgpt-file-preview-file-info", e, n, t],
        refetchOnWindowFocus: !1,
        retry: !1,
        staleTime: 3e4,
      }
    }
  },
  UBr4(e, t, n) {
    n.d(t, { h: () => A })
    var i = n("ABep"),
      l = n("QosV"),
      s = n("bqtn"),
      a = n("Bbed"),
      r = n("yQRo"),
      o = n("TGnH"),
      d = n("Pq1H"),
      c = n("qmMi"),
      u = n("oyxz"),
      m = n("SPnB"),
      f = n("UxN3"),
      g = n("OWtl"),
      p = n("Vc45"),
      h = n("wxDG")
    function _(e) {
      let t,
        n,
        a,
        d,
        m,
        h,
        _ = (0, l.c)(12),
        { ownerId: y, source: x } = e,
        v = (0, c.gh)(g.u)
      return (
        _[0] !== x ? ((t = (0, i.jsx)(b, { source: x })), (_[0] = x), (_[1] = t)) : (t = _[1]),
        _[2] !== y || _[3] !== v
          ? ((n = () => {
              ;(0, p.hj)(v, y, "file-info")
            }),
            (_[2] = y),
            (_[3] = v),
            (_[4] = n))
          : (n = _[4]),
        _[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, i.jsx)(s.ms.ItemIcon, {
              children: (0, i.jsx)(f.b5, { icon: { assets: { 16: r.c, 20: o.b } } }),
            })),
            (d = (0, i.jsx)(u.A, { id: "chatgptFilePreview.fileInfo.menuItem", defaultMessage: "File info" })),
            (_[5] = a),
            (_[6] = d))
          : ((a = _[5]), (d = _[6])),
        _[7] !== n
          ? ((m = (0, i.jsxs)(s.ms.Item, { onSelect: n, children: [a, d] })), (_[7] = n), (_[8] = m))
          : (m = _[8]),
        _[9] !== t || _[10] !== m
          ? ((h = (0, i.jsxs)(i.Fragment, { children: [t, m] })), (_[9] = t), (_[10] = m), (_[11] = h))
          : (h = _[11]),
        h
      )
    }
    function b(e) {
      let t,
        n = (0, l.c)(4),
        { source: i } = e,
        s = (0, c.gh)(g.u),
        a = (0, c.Ul)(m.chatGptAuthenticatedAccountId$),
        r = (0, c.Ul)(m.chatGptAuthenticatedUserId$)
      return (
        n[0] !== a || n[1] !== i || n[2] !== r
          ? ((t = (0, h.t)({ accountId: a, source: i, userId: r })), (n[0] = a), (n[1] = i), (n[2] = r), (n[3] = t))
          : (t = n[3]),
        (0, d.f)(t, s.queryClient),
        null
      )
    }
    var y = n("Y0Sw"),
      x = n("JW1J"),
      v = n("E8Sp"),
      w = n("xmjg"),
      S = n("O8Pw"),
      k = n("tl2n")
    function I(e) {
      let t,
        n,
        a,
        r,
        o,
        d = (0, l.c)(16),
        { libraryFileId: m, disabled: p, onSelect: h } = e,
        _ = (0, c.gh)(g.u),
        { pathname: b } = (0, c.Ul)(v.gM),
        I = (0, S.Tq)(),
        j = (0, S.o0)()
      return !(0, c.Ul)(k.$7) ||
        "/library" === b ||
        b?.startsWith("/library/") ||
        "/space" === b ||
        b?.startsWith("/space/")
        ? null
        : (d[0] !== j ? ((t = j({ 16: y.Y, 20: x.V }, { 16: w.Z, 20: w.e })), (d[0] = j), (d[1] = t)) : (t = d[1]),
          d[2] !== t ? ((n = (0, i.jsx)(f.b5, { icon: { assets: t } })), (d[2] = t), (d[3] = n)) : (n = d[3]),
          d[4] !== m || d[5] !== j || d[6] !== h || d[7] !== _
            ? ((a = () => {
                ;(h?.(),
                  (0, v.oo)(_, j(`/library/file/${encodeURIComponent(m)}`, `/space/file/${encodeURIComponent(m)}`)))
              }),
              (d[4] = m),
              (d[5] = j),
              (d[6] = h),
              (d[7] = _),
              (d[8] = a))
            : (a = d[8]),
          d[9] !== I
            ? ((r = I
                ? (0, i.jsx)(u.A, { id: "artifactViewer.openInLibrary.space", defaultMessage: "Open in Space" })
                : (0, i.jsx)(u.A, { id: "artifactViewer.openInLibrary", defaultMessage: "Open in Library" })),
              (d[9] = I),
              (d[10] = r))
            : (r = d[10]),
          d[11] !== p || d[12] !== n || d[13] !== a || d[14] !== r
            ? ((o = (0, i.jsx)(s.ms.Item, { disabled: p, leftIcon: n, onSelect: a, children: r })),
              (d[11] = p),
              (d[12] = n),
              (d[13] = a),
              (d[14] = r),
              (d[15] = o))
            : (o = d[15]),
          o)
    }
    let j = (0, a._)(async () => (await n.e(460679).then(n.bind(n, "hieE"))).LibraryFilePreviewVersionHistory)
    function A(e) {
      let t,
        n,
        a,
        r,
        o,
        d,
        c = (0, l.c)(23),
        {
          children: u,
          favoriteAction: m,
          file: f,
          fileInfoOwnerId: g,
          fileInfoSource: h,
          libraryFileId: b,
          openInLibraryDisabled: y,
          onOpenLibrary: x,
          versionHistoryAction: v,
        } = e,
        w = b ?? f?.libraryFileId
      c[0] !== g || c[1] !== h
        ? ((t = null == h ? void 0 : (g ?? (0, p.xd)(h))), (c[0] = g), (c[1] = h), (c[2] = t))
        : (t = c[2])
      let S = t,
        k = null != S || null != w || null != m || null != v || null != f
      return k || null != u
        ? (c[3] !== S || c[4] !== h
            ? ((n = null == S || null == h ? null : (0, i.jsx)(_, { ownerId: S, source: h })),
              (c[3] = S),
              (c[4] = h),
              (c[5] = n))
            : (n = c[5]),
          c[6] !== w || c[7] !== x || c[8] !== y
            ? ((a = null == w ? null : (0, i.jsx)(I, { disabled: y, libraryFileId: w, onSelect: x })),
              (c[6] = w),
              (c[7] = x),
              (c[8] = y),
              (c[9] = a))
            : (a = c[9]),
          c[10] !== f || c[11] !== v
            ? ((r = v ?? (null == f ? null : (0, i.jsx)(j, { file: f }))), (c[10] = f), (c[11] = v), (c[12] = r))
            : (r = c[12]),
          c[13] !== u || c[14] !== k
            ? ((o = k && null != u ? (0, i.jsx)(s.ms.Separator, { className: "last:hidden" }) : null),
              (c[13] = u),
              (c[14] = k),
              (c[15] = o))
            : (o = c[15]),
          c[16] !== u || c[17] !== m || c[18] !== n || c[19] !== a || c[20] !== r || c[21] !== o
            ? ((d = (0, i.jsxs)(i.Fragment, { children: [n, a, m, r, o, u] })),
              (c[16] = u),
              (c[17] = m),
              (c[18] = n),
              (c[19] = a),
              (c[20] = r),
              (c[21] = o),
              (c[22] = d))
            : (d = c[22]),
          d)
        : null
    }
  },
  YDoP(e, t, n) {
    var i = n("qmMi"),
      l = n("tSEg")
    let s = (0, i.z8)("LibraryFileVersionHistoryScope", { key: ({ id: e }) => e, parent: l.GD }),
      a = (0, i.vP)(s, null)
    n.d(t, {}, { _: a, s: s })
  },
  D1oM(e, t, n) {
    var i = n("ABep"),
      l = n("QosV"),
      s = n("on57"),
      a = n("K4Cx"),
      r = n("zd8w"),
      o = n("bVeK"),
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
            m,
            f,
            g,
            p,
            h,
            _,
            b,
            y,
            x,
            v = (0, l.c)(40),
            { disabled: w, layout: S, onSelect: k, suggestions: I } = e,
            j = (0, r.useRef)(null),
            A = (0, r.useRef)(null),
            [C, M] = (0, r.useState)(null),
            E = (0, d.I)(),
            B = "responsive" === S
          v[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = () => {
                let e = j.current,
                  t = A.current
                if (null == e || null == t) return
                let n = e.getBoundingClientRect().width
                if (0 === n || "column" === getComputedStyle(e).flexDirection) return void M(null)
                let i = 1 / 0,
                  l = -1 / 0,
                  s = 0
                for (let e of t.children) {
                  let t = e.getBoundingClientRect()
                  if (((i = Math.min(i, t.left)), (l = Math.max(l, t.right)), s > 0 && l - i > n + 0.5)) break
                  s++
                }
                M(s)
              }),
              (v[0] = t))
            : (t = v[0])
          let L = t,
            N = (0, c.wY)(L),
            T = (0, c.wY)(L)
          v[1] !== N
            ? ((n = (e) => {
                ;((j.current = e), N(e), L())
              }),
              (v[1] = N),
              (v[2] = n))
            : (n = v[2])
          let O = B
            ? "flex-col items-start sm:flex-row sm:items-center sm:gap-3"
            : "items-center gap-3 text-sm text-secondary"
          if (
            (v[3] !== O ? ((m = (0, s.A)("flex min-w-0", O)), (v[3] = O), (v[4] = m)) : (m = v[4]),
            v[5] !== w || v[6] !== k || v[7] !== E || v[8] !== B || v[9] !== I || v[10] !== C)
          ) {
            let e
            ;(v[12] !== w || v[13] !== k || v[14] !== E || v[15] !== B
              ? ((e = (e, t) => {
                  let { key: n, label: l } = e
                  return (0, i.jsxs)(
                    a.P.button,
                    {
                      className: (0, s.A)(
                        "relative flex min-w-0 max-w-full items-center gap-1 rounded-xs border-0 bg-transparent p-0 text-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text",
                        B
                          ? "min-h-11 w-full select-none after:absolute after:inset-x-0 after:top-1/2 after:h-full after:min-h-8 after:-translate-y-1/2 sm:min-h-0 sm:w-auto sm:shrink-0 sm:gap-1.5 pointer-coarse:after:min-h-11"
                          : "shrink-0",
                        w ? "cursor-default" : "group/suggested-followup cursor-interaction",
                        !w && (B ? "hover:text-(color:--link-primary-text-color-hover)" : "hover:text-default"),
                      ),
                      animate: B ? { opacity: 1, y: 0 } : void 0,
                      "aria-disabled": w,
                      initial: !!B && !E && { opacity: 0, y: -4 },
                      layout: B && !E,
                      transition: { duration: 0.18 * !E, ease: "easeOut" },
                      type: "button",
                      onClick: () => {
                        w || k(t)
                      },
                      children: [
                        (0, i.jsx)(o.se0, {
                          "aria-hidden": "true",
                          "data-rtl-flip": B ? void 0 : "",
                          className: B
                            ? "shrink-0 transition-transform duration-basic ease-out motion-safe:group-hover/suggested-followup:translate-x-0.5"
                            : "icon-sm shrink-0",
                        }),
                        (0, i.jsx)("span", {
                          className: (0, s.A)("min-w-0 wrap-anywhere whitespace-normal", B && "sm:truncate"),
                          children: l,
                        }),
                      ],
                    },
                    n,
                  )
                }),
                (v[12] = w),
                (v[13] = k),
                (v[14] = E),
                (v[15] = B),
                (v[16] = e))
              : (e = v[16]),
              (f = I.slice(0, C ?? I.length).map(e)),
              (v[5] = w),
              (v[6] = k),
              (v[7] = E),
              (v[8] = B),
              (v[9] = I),
              (v[10] = C),
              (v[11] = f))
          } else f = v[11]
          ;(v[17] !== n || v[18] !== m || v[19] !== f
            ? ((g = (0, i.jsx)("div", { ref: n, className: m, children: f })),
              (v[17] = n),
              (v[18] = m),
              (v[19] = f),
              (v[20] = g))
            : (g = v[20]),
            v[21] !== I ? ((p = JSON.stringify(I.map(u))), (v[21] = I), (v[22] = p)) : (p = v[22]),
            v[23] !== T
              ? ((h = (e) => {
                  ;((A.current = e), T(e), L())
                }),
                (v[23] = T),
                (v[24] = h))
              : (h = v[24]))
          let P = B ? "hidden sm:flex" : "flex text-sm"
          if (
            (v[25] !== P
              ? ((_ = (0, s.A)("pointer-events-none invisible absolute start-0 top-0 w-max items-center gap-3", P)),
                (v[25] = P),
                (v[26] = _))
              : (_ = v[26]),
            v[27] !== B || v[28] !== I)
          ) {
            let e
            ;(v[30] !== B
              ? ((e = (e) => {
                  let { key: t, label: n } = e
                  return (0, i.jsxs)(
                    "div",
                    {
                      className: (0, s.A)("flex shrink-0 items-center", B ? "gap-1.5" : "gap-1"),
                      children: [
                        (0, i.jsx)(o.se0, { className: B ? void 0 : "icon-sm", "data-rtl-flip": B ? void 0 : "" }),
                        (0, i.jsx)("span", { className: "whitespace-nowrap", children: n }),
                      ],
                    },
                    t,
                  )
                }),
                (v[30] = B),
                (v[31] = e))
              : (e = v[31]),
              (b = I.map(e)),
              (v[27] = B),
              (v[28] = I),
              (v[29] = b))
          } else b = v[29]
          return (
            v[32] !== _ || v[33] !== b || v[34] !== p || v[35] !== h
              ? ((y = (0, i.jsx)("div", { ref: h, "aria-hidden": "true", className: _, children: b }, p)),
                (v[32] = _),
                (v[33] = b),
                (v[34] = p),
                (v[35] = h),
                (v[36] = y))
              : (y = v[36]),
            v[37] !== y || v[38] !== g
              ? ((x = (0, i.jsxs)(i.Fragment, { children: [g, y] })), (v[37] = y), (v[38] = g), (v[39] = x))
              : (x = v[39]),
            x
          )
        },
      },
    )
  },
  LhrG(e, t, n) {
    var i = n("tFxw"),
      l = n("D7Ms"),
      s = n("Kwur"),
      a = n("eShZ"),
      r = n("jgEm"),
      o = n("MExO")
    async function d(e, t, n) {
      let l,
        d = (0, o.CN)(e)
      if (null != d) {
        n.throwIfAborted()
        let l = await s.Request.safePost("/files/library/mounted/{provider_key}/file_metadata", {
          parameters: { path: { provider_key: d.provider } },
          requestBody: { file_id: e },
          additionalHeaders: { "ChatGPT-Account-ID": t },
          expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 429, 502, 503, 504],
          signal: n,
        })
        n.throwIfAborted()
        let a = (0, o.CN)(l.file_id)
        if (
          l.file_id !== e &&
          ((0, i.YO)(e)?.encodedAccountKey != null || a?.provider !== d.provider || a.nativeFileId !== d.nativeFileId)
        )
          throw Error("Provider file metadata does not match the requested file")
        return {
          id: l.file_id,
          kind: "file",
          name: l.name,
          parent_directory_id: null,
          access_kind: "mounted",
          mime_type: l.mime_type,
          file_size_bytes: l.file_size_bytes,
        }
      }
      let c = {
        parameters: { path: { library_file_id: e } },
        additionalHeaders: { "ChatGPT-Account-ID": t },
        expectedErrorStatuses: [403, 404],
        signal: n,
      }
      if ((n.throwIfAborted(), /^libfile_fde[123]_/.test(e))) {
        let t = await s.Request.safeGet("/files/library/files/{library_file_id}/node", c)
        return (n.throwIfAborted(), (0, r.U9)(t, e))
      }
      try {
        let e = await s.Request.safeGet("/files/library/files/{library_file_id}", c)
        return (n.throwIfAborted(), e)
      } catch (e) {
        if (!(e instanceof a.FetchError) || (403 !== e.status && 404 !== e.status)) throw e
      }
      n.throwIfAborted()
      try {
        if (
          ((l = await s.Request.safeGet("/files/library/files/{library_file_id}/node", c)),
          n.throwIfAborted(),
          "owned" === l.access_kind && "image" === l.library_file_category && null == l.library_artifact_type)
        ) {
          let e = await s.Request.safeGet("/files/library/files/{library_file_id}/versions", {
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
        if (!(o instanceof a.FetchError) || (403 !== o.status && 404 !== o.status)) throw o
        let t = null,
          i = new Set()
        do {
          n.throwIfAborted()
          let l = await s.Request.safePost("/files/library", {
            requestBody: { cursor: t, limit: 100, include_hidden_files: !0, include_saved_entities: !0 },
            additionalHeaders: c.additionalHeaders,
            expectedErrorStatuses: [403, 404],
            signal: n,
          })
          n.throwIfAborted()
          let a = l.items.find((t) => t.id === e)
          if (null != a) return a
          if (null == (t = l.cursor ?? null) || i.has(t)) break
          i.add(t)
        } while (null != t)
        if (null != l) return (0, r.U9)(l, e)
        throw o
      }
    }
    n.d(
      t,
      {},
      {
        F: d,
        h: function (e, t, n) {
          return {
            queryKey: ["library-api", e, t, "file", n],
            queryFn: null != n && null != e ? ({ signal: t }) => d(n, e, t) : l.hT,
            gcTime: 0,
            staleTime: 0,
            retry: !1,
            refetchOnWindowFocus: !1,
          }
        },
      },
    )
  },
  zTAs(e, t, n) {
    var i = n("BhZP"),
      l = n("CL6A"),
      s = n("wDWo"),
      a = n("ASxG")
    let r = a.YOg(a._H3({ content: a.YjP() }))
    function o(e, { contentReferences: t, isStreaming: n }) {
      return (0, s.EQ)(e, { content_references: t }, { isStreaming: n })
    }
    function d(e, t) {
      let n = e
      for (let i of ["options", "style_variants"]) {
        let l = r.safeParse(e?.[i])
        l.success && (n = { ...n, [i]: l.data.map((e) => ({ ...e, content: o(e.content, t) })) })
      }
      return n
    }
    n.d(
      t,
      {},
      {
        Io: o,
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
                    return (0, l.vV)((0, l.PV)(e.matched_text, { isStreaming: !0 })) ?? void 0
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
            : { ...e, content: o(e.content, t), metadata: d(e.metadata, t) }
        },
      },
    )
  },
  WS0s(e, t, n) {
    n.d(t, { p: () => tO })
    var i = n("ABep"),
      l = n("QosV"),
      s = n("zPtR"),
      a = n("mBJV"),
      r = n("ksPB"),
      o = n("ozCc"),
      d = n("kmbx"),
      c = n("BhZP"),
      u = n("Kh9O"),
      m = n("qmMi"),
      f = n("zd8w"),
      g = n("oyxz"),
      p = n("IDNd"),
      h = n("Kwur"),
      _ = n("hieE"),
      b = n("jEN2"),
      y = n("HOLv"),
      x = n("Bbed"),
      v = n("O8Pw"),
      w = n("tl2n"),
      S = n("nlNF"),
      k = n("yGJW"),
      I = n("OWtl"),
      j = n("hZax"),
      A = n("bIvi"),
      C = n("j9wQ"),
      M = n("Or4D"),
      E = n("r1fP"),
      B = n("slpy"),
      L = n("Tp04"),
      N = n("eZRG"),
      T = n("nKPQ"),
      O = n("DTiH"),
      P = n("BchX"),
      R = n("D7Ms"),
      D = n("T0Rc"),
      F = n("on57"),
      G = n("Wf1j"),
      q = n("Ywss"),
      U = n("SPnB"),
      W = n("Sm6l"),
      V = n("bqtn"),
      H = n("bVeK"),
      z = n("RNul"),
      $ = n("suct"),
      K = n("K4Cx"),
      Y = n("hlVK"),
      Z = n("RNtx"),
      J = n("T1PX"),
      Q = n("V8uZ"),
      X = n("ASxG"),
      ee = n("h6ff"),
      et = n("Nwp9"),
      en = n("pyOZ")
    let ei = "writing-block-save-as-page",
      el = "writing_block_save_as_page",
      es = X.Ikc({ title: X.YjP().trim().min(1).max(200), description: X.YjP().trim().min(1).max(1e3) }),
      ea = (0, et.m3)("writing-block-save-as-page-beacon-seen-v1", {}),
      er = (0, m.un)(I.u, ({ get: e }) => {
        let t = e(U.chatGptAuthenticatedAccountId$),
          n = e(U.o8)
        return null != t && null != n ? { accountId: t, userId: n, key: JSON.stringify([t, n]) } : null
      }),
      eo = (0, m.un)(I.u, ({ get: e }) => {
        let t = e(er)
        return null != t && e(en.aJ) ? !0 === e(ea)[t.key] : void 0
      }),
      ed = (0, m.vU)(I.u, ({ identity: e, locale: t }, { get: n }) => ({
        queryKey: [ei, e?.key, t],
        enabled: null != e && n(en.aJ) && !n(ea)[e.key],
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
            l = ee.th.safeParse(i.surfaces[ei])
          if (
            !l.success ||
            l.data.beacon_id !== el ||
            l.data.ui_info.container_id !== el ||
            0 !== l.data.action_items.length
          )
            return null
          let s = es.safeParse(l.data.custom_fields)
          return s.success ? { beacon: l.data, ...s.data } : null
        },
      }))
    var ec = "reveal-DpiM90",
      eu = "title-Nx5xpW"
    function em(e) {
      let t,
        n,
        s,
        a,
        r,
        d,
        c,
        u,
        m,
        g,
        p,
        h,
        _,
        b,
        x,
        v,
        w,
        S,
        k = (0, l.c)(58),
        { children: I, disabled: j, editorView: A, isSaving: M, onSave: E, saveLabel: L } = e,
        N = (0, J.I)(),
        [O, P] = (0, f.useState)(null),
        [R, D] = (0, f.useState)(null)
      ;(k[0] !== O || k[1] !== A?.dom || k[2] !== R
        ? ((t = (e) => {
            let t = A?.dom,
              n = () => queueMicrotask(e)
            return (
              t?.addEventListener("focus", e),
              t?.addEventListener("blur", n),
              O?.addEventListener("mousedown", eg),
              O?.addEventListener("focus", e),
              O?.addEventListener("blur", n),
              R?.addEventListener("mousedown", eg),
              R?.addEventListener("focusin", e),
              R?.addEventListener("focusout", n),
              () => {
                ;(t?.removeEventListener("focus", e),
                  t?.removeEventListener("blur", n),
                  O?.removeEventListener("mousedown", eg),
                  O?.removeEventListener("focus", e),
                  O?.removeEventListener("blur", n),
                  R?.removeEventListener("mousedown", eg),
                  R?.removeEventListener("focusin", e),
                  R?.removeEventListener("focusout", n))
              }
            )
          }),
          (k[0] = O),
          (k[1] = A?.dom),
          (k[2] = R),
          (k[3] = t))
        : (t = k[3]),
        k[4] !== O || k[5] !== A || k[6] !== R
          ? ((n = () =>
              A?.hasFocus()
                ? "editor"
                : O?.ownerDocument.activeElement === O
                  ? "button"
                  : R?.contains(R.ownerDocument.activeElement)
                    ? "promo"
                    : null),
            (k[4] = O),
            (k[5] = A),
            (k[6] = R),
            (k[7] = n))
          : (n = k[7]),
        k[8] !== t || k[9] !== n
          ? ((s = { subscribe: t, getSnapshot: n }), (k[8] = t), (k[9] = n), (k[10] = s))
          : (s = k[10]))
      let G = s,
        q = (0, f.useSyncExternalStore)(G.subscribe, G.getSnapshot, ef),
        U = null != q || M,
        W = 0.15 * !N
      k[11] !== W ? ((a = { duration: W, ease: Q.Wu }), (k[11] = W), (k[12] = a)) : (a = k[12])
      let V = a
      k[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = (0, F.A)(eu, "min-w-0 overflow-hidden")), (k[13] = r))
        : (r = k[13])
      let H = M || void 0,
        z = j || M
      k[14] !== E ? ((d = (e) => E(0 === e.detail)), (k[14] = E), (k[15] = d)) : (d = k[15])
      let Y = U ? "default" : "ghost",
        Z = U ? "save" : "title",
        X = U && "gap-2"
      ;(k[16] !== X ? ((c = (0, F.A)("flex min-w-0 items-center", X)), (k[16] = X), (k[17] = c)) : (c = k[17]),
        k[18] !== N ? ((u = !N && { opacity: 0 }), (k[18] = N), (k[19] = u)) : (u = k[19]),
        k[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = { opacity: 1 }), (g = { opacity: 0 }), (k[20] = m), (k[21] = g))
          : ((m = k[20]), (g = k[21])),
        k[22] !== M || k[23] !== U
          ? ((p = U && !M ? (0, i.jsx)(y.I, { asset: o.f }) : null), (k[22] = M), (k[23] = U), (k[24] = p))
          : (p = k[24]),
        k[25] !== j || k[26] !== U
          ? ((h = U
              ? null
              : (0, i.jsx)("span", {
                  className: (0, F.A)(ec, !j && "text-tertiary"),
                  children: (0, i.jsx)("span", {
                    className: "min-w-0 overflow-hidden",
                    children: (0, i.jsx)("span", {
                      className: "flex items-center pe-1.5",
                      children: (0, i.jsx)(y.I, { asset: T.i }),
                    }),
                  }),
                })),
            (k[25] = j),
            (k[26] = U),
            (k[27] = h))
          : (h = k[27]))
      let ee = U ? L : I
      return (
        k[28] !== ee
          ? ((_ = (0, i.jsx)("span", { className: "min-w-0 truncate", children: ee })), (k[28] = ee), (k[29] = _))
          : (_ = k[29]),
        k[30] !== Z || k[31] !== c || k[32] !== u || k[33] !== p || k[34] !== h || k[35] !== _ || k[36] !== V
          ? ((b = (0, i.jsx)($.N, {
              initial: !1,
              mode: "popLayout",
              children: (0, i.jsxs)(
                K.P.span,
                {
                  "aria-hidden": !0,
                  className: c,
                  initial: u,
                  animate: m,
                  exit: g,
                  transition: V,
                  children: [p, h, _],
                },
                Z,
              ),
            })),
            (k[30] = Z),
            (k[31] = c),
            (k[32] = u),
            (k[33] = p),
            (k[34] = h),
            (k[35] = _),
            (k[36] = V),
            (k[37] = b))
          : (b = k[37]),
        k[38] !== M || k[39] !== L || k[40] !== Y || k[41] !== b || k[42] !== H || k[43] !== z || k[44] !== d
          ? ((x = (0, i.jsx)(C.DW, {
              ref: P,
              className: r,
              "aria-label": L,
              "aria-busy": H,
              disabled: z,
              loading: M,
              onClick: d,
              variant: Y,
              children: b,
            })),
            (k[38] = M),
            (k[39] = L),
            (k[40] = Y),
            (k[41] = b),
            (k[42] = H),
            (k[43] = z),
            (k[44] = d),
            (k[45] = x))
          : (x = k[45]),
        k[46] !== L || k[47] !== U || k[48] !== x
          ? ((v = (0, i.jsx)(B.m, { disabled: U, content: L, children: x })),
            (k[46] = L),
            (k[47] = U),
            (k[48] = x),
            (k[49] = v))
          : (v = k[49]),
        k[50] !== O || k[51] !== j || k[52] !== q || k[53] !== M
          ? ((w =
              null == q || null == O || j || M
                ? null
                : (0, i.jsx)(ep, { button: O, isEditorFocused: "editor" === q, onDialogChange: D })),
            (k[50] = O),
            (k[51] = j),
            (k[52] = q),
            (k[53] = M),
            (k[54] = w))
          : (w = k[54]),
        k[55] !== v || k[56] !== w
          ? ((S = (0, i.jsxs)(i.Fragment, { children: [v, w] })), (k[55] = v), (k[56] = w), (k[57] = S))
          : (S = k[57]),
        S
      )
    }
    function ef() {
      return null
    }
    function eg(e) {
      0 === e.button && e.preventDefault()
    }
    function ep(e) {
      let t,
        n = (0, l.c)(5),
        { button: s, isEditorFocused: a, onDialogChange: r } = e,
        o = (0, m.Ul)(er)
      return (
        n[0] !== s || n[1] !== o || n[2] !== a || n[3] !== r
          ? ((t =
              null == o
                ? null
                : (0, i.jsx)(eh, { button: s, identity: o, isEditorFocused: a, onDialogChange: r }, o.key)),
            (n[0] = s),
            (n[1] = o),
            (n[2] = a),
            (n[3] = r),
            (n[4] = t))
          : (t = n[4]),
        t
      )
    }
    function eh(e) {
      let t,
        n,
        s,
        a,
        r,
        o,
        d = (0, l.c)(25),
        { button: c, identity: u, isEditorFocused: g, onDialogChange: p } = e,
        h = (0, m.gh)(I.u),
        _ = (0, f.useId)(),
        { locale: b } = (0, G.A)(),
        [y, x] = (0, f.useState)(!1),
        [v, w] = (0, f.useState)(!1),
        S = (0, f.useRef)(!1),
        k = g || y
      ;(d[0] !== u || d[1] !== b ? ((t = { identity: u, locale: b }), (d[0] = u), (d[1] = b), (d[2] = t)) : (t = d[2]),
        d[3] !== k ? ((n = { enabled: k }), (d[3] = k), (d[4] = n)) : (n = d[4]))
      let { data: j, isFetching: A, isError: C } = (0, m._U)(ed, t, n),
        M = (0, m.Ul)(eo)
      return !k || null == j || A || C || v || (!1 !== M && !y)
        ? null
        : (d[5] !== u || d[6] !== j.beacon || d[7] !== h
            ? ((s = () => {
                S.current ||
                  h.get(er)?.key !== u.key ||
                  ((S.current = !0), w(!0), (0, Y.Zy)({ beacon: j.beacon, eventType: "dismiss", expectedIdentity: u }))
              }),
              (d[5] = u),
              (d[6] = j.beacon),
              (d[7] = h),
              (d[8] = s))
            : (s = d[8]),
          d[9] !== c || d[10] !== u || d[11] !== p || d[12] !== j.beacon || d[13] !== h || d[14] !== y
            ? ((a = (e) => {
                if ((p(e?.closest('[role="dialog"]') ?? null), null == e)) return
                let t = (e) => {
                  e.defaultPrevented ||
                    S.current ||
                    h.get(er)?.key !== u.key ||
                    ((S.current = !0), w(!0), (0, Y.Zy)({ beacon: j.beacon, eventType: "click", expectedIdentity: u }))
                }
                if ((c.addEventListener("click", t), !y && !1 === h.get(eo))) {
                  var n
                  ;(x(!0),
                    (n = j.beacon),
                    h.get(er)?.key === u.key &&
                      !1 === h.get(eo) &&
                      (h.set(ea, (e) => ({ ...e, [u.key]: !0 })),
                      (0, Y.Zy)({ beacon: n, eventType: "view", expectedIdentity: u })))
                }
                return () => {
                  ;(c.removeEventListener("click", t), p(null))
                }
              }),
              (d[9] = c),
              (d[10] = u),
              (d[11] = p),
              (d[12] = j.beacon),
              (d[13] = h),
              (d[14] = y),
              (d[15] = a))
            : (a = d[15]),
          d[16] !== j.title || d[17] !== a
            ? ((r = (0, i.jsx)("span", { ref: a, children: j.title })), (d[16] = j.title), (d[17] = a), (d[18] = r))
            : (r = d[18]),
          d[19] !== c || d[20] !== _ || d[21] !== j.description || d[22] !== s || d[23] !== r
            ? ((o = (0, i.jsx)(Z.m, {
                id: _,
                align: "start",
                anchor: c,
                body: j.description,
                onDismiss: s,
                side: "top",
                title: r,
              })),
              (d[19] = c),
              (d[20] = _),
              (d[21] = j.description),
              (d[22] = s),
              (d[23] = r),
              (d[24] = o))
            : (o = d[24]),
          o)
    }
    function e_(e) {
      let t,
        n,
        s,
        a,
        r,
        o,
        d = (0, l.c)(46),
        {
          children: c,
          disabled: u,
          downloadMenu: m,
          editorView: f,
          libraryFileId: p,
          onLibraryClick: h,
          onOpenVersionHistory: _,
          onSave: b,
          isSaving: x,
          saveConfirmation: w,
          saveToPage: S,
        } = e,
        k = void 0 === f ? null : f,
        I = (0, v.Tq)(),
        j = (0, G.A)()
      if (S) {
        let e
        ;(d[0] !== j || d[1] !== x
          ? ((e = x
              ? j.formatMessage({ id: "codex.writingBlock.page.saving", defaultMessage: "Creating Page" })
              : j.formatMessage({ id: "codex.writingBlock.page.save", defaultMessage: "Save as Page" })),
            (d[0] = j),
            (d[1] = x),
            (d[2] = e))
          : (e = d[2]),
          (t = e))
      } else if (x && I) {
        let e
        ;(d[3] !== j
          ? ((e = j.formatMessage({
              id: "codex.writingBlock.inlineLibrary.addingToLibrary.space",
              defaultMessage: "Adding to Space",
            })),
            (d[3] = j),
            (d[4] = e))
          : (e = d[4]),
          (t = e))
      } else if (x) {
        let e
        ;(d[5] !== j
          ? ((e = j.formatMessage({
              id: "codex.writingBlock.inlineLibrary.addingToLibrary",
              defaultMessage: "Adding to Library",
            })),
            (d[5] = j),
            (d[6] = e))
          : (e = d[6]),
          (t = e))
      } else if (I) {
        let e
        ;(d[7] !== j
          ? ((e = j.formatMessage({
              id: "codex.writingBlock.inlineLibrary.save.space",
              defaultMessage: "Add to Space",
            })),
            (d[7] = j),
            (d[8] = e))
          : (e = d[8]),
          (t = e))
      } else {
        let e
        ;(d[9] !== j
          ? ((e = j.formatMessage({ id: "codex.writingBlock.inlineLibrary.save", defaultMessage: "Add to Library" })),
            (d[9] = j),
            (d[10] = e))
          : (e = d[10]),
          (t = e))
      }
      return (
        d[11] !== c || d[12] !== u || d[13] !== m || d[14] !== p || d[15] !== h || d[16] !== _ || d[17] !== w
          ? ((n = p
              ? (0, i.jsxs)(V.Ab, {
                  align: "start",
                  contentWidth: "menuBounded",
                  triggerButton: (0, i.jsxs)(W.$, {
                    ref: (e) => {
                      "keyboard" === w &&
                        null != e &&
                        e.ownerDocument.activeElement === e.ownerDocument.body &&
                        e.focus({ preventScroll: !0 })
                    },
                    className: (0, F.A)(eu, "min-w-0"),
                    color: "ghostOutline",
                    radius: "full",
                    size: "dialogGhost",
                    children: [
                      (0, i.jsx)(y.I, { asset: P.g }),
                      (0, i.jsxs)("span", {
                        className: "flex min-w-0 items-center gap-0.5",
                        children: [
                          (0, i.jsx)("span", { className: "min-w-0 truncate", children: c }),
                          (0, i.jsx)(y.I, { className: "chevron-RGwrqT", asset: L.U }),
                        ],
                      }),
                    ],
                  }),
                  children: [
                    (0, i.jsx)(eb, { libraryFileId: p, onLibraryClick: h, children: c }),
                    m,
                    null != _
                      ? (0, i.jsx)(V.ms.Item, {
                          disabled: u,
                          onSelect: _,
                          leftIconAsset: N.t,
                          children: (0, i.jsx)(g.A, {
                            id: "codex.writingBlock.inlineLibrary.versionHistory",
                            defaultMessage: "Version history",
                          }),
                        })
                      : null,
                  ],
                })
              : null),
            (d[11] = c),
            (d[12] = u),
            (d[13] = m),
            (d[14] = p),
            (d[15] = h),
            (d[16] = _),
            (d[17] = w),
            (d[18] = n))
          : (n = d[18]),
        d[19] !== c ||
        d[20] !== u ||
        d[21] !== k ||
        d[22] !== x ||
        d[23] !== p ||
        d[24] !== b ||
        d[25] !== t ||
        d[26] !== S
          ? ((s =
              !p && null != b && S
                ? (0, i.jsx)(em, { disabled: u, editorView: k, isSaving: x, onSave: b, saveLabel: t, children: c })
                : null),
            (d[19] = c),
            (d[20] = u),
            (d[21] = k),
            (d[22] = x),
            (d[23] = p),
            (d[24] = b),
            (d[25] = t),
            (d[26] = S),
            (d[27] = s))
          : (s = d[27]),
        d[28] !== c ||
        d[29] !== u ||
        d[30] !== x ||
        d[31] !== I ||
        d[32] !== p ||
        d[33] !== b ||
        d[34] !== t ||
        d[35] !== S
          ? ((a =
              p || null == b || S
                ? null
                : (0, i.jsx)(B.m, {
                    content: (0, i.jsxs)("span", {
                      className: "flex items-center gap-1",
                      children: [I ? (0, i.jsx)(H.Mpc, {}) : (0, i.jsx)(H.baR, {}), t],
                    }),
                    children: (0, i.jsx)(W.$, {
                      className: (0, F.A)(eu, "min-w-0 px-3"),
                      "aria-label": t,
                      "aria-busy": x || void 0,
                      color: "ghost",
                      disabled: u || x,
                      radius: "full",
                      size: "imageToolbar",
                      onClick: (e) => b(0 === e.detail),
                      children: (0, i.jsxs)("span", {
                        className: "flex min-w-0 items-center",
                        children: [
                          (0, i.jsx)("span", {
                            className: ec,
                            children: (0, i.jsx)("span", {
                              className: "min-w-0 overflow-hidden",
                              children: (0, i.jsx)("span", {
                                className: "flex items-center pe-1.5",
                                children: x
                                  ? (0, i.jsx)(z.y, { as: "span", className: "size-5" })
                                  : (0, i.jsx)(y.I, { asset: T.i }),
                              }),
                            }),
                          }),
                          (0, i.jsx)("span", { className: "min-w-0 truncate", children: c }),
                        ],
                      }),
                    }),
                  })),
            (d[28] = c),
            (d[29] = u),
            (d[30] = x),
            (d[31] = I),
            (d[32] = p),
            (d[33] = b),
            (d[34] = t),
            (d[35] = S),
            (d[36] = a))
          : (a = d[36]),
        d[37] !== c || d[38] !== p || d[39] !== b
          ? ((r =
              p || null != b
                ? null
                : (0, i.jsx)("span", { className: "min-w-0 truncate px-3 py-2 text-tertiary", children: c })),
            (d[37] = c),
            (d[38] = p),
            (d[39] = b),
            (d[40] = r))
          : (r = d[40]),
        d[41] !== n || d[42] !== s || d[43] !== a || d[44] !== r
          ? ((o = (0, i.jsxs)("div", {
              className: "ms-2 flex min-w-0 grow items-center text-sm font-normal select-none",
              children: [n, s, a, r],
            })),
            (d[41] = n),
            (d[42] = s),
            (d[43] = a),
            (d[44] = r),
            (d[45] = o))
          : (o = d[45]),
        o
      )
    }
    function eb(e) {
      let t,
        n,
        s,
        a,
        r,
        o,
        d,
        c,
        u,
        f,
        p,
        _,
        b,
        x = (0, l.c)(38),
        { children: w, libraryFileId: S, onLibraryClick: k } = e,
        I = (0, m.Ul)(U.chatGptAuthenticatedAccountId$),
        j = (0, m.Ul)(U.chatGptAuthenticatedUserId$),
        A = (0, v.Tq)(),
        C = A ? "/space/files" : "/library",
        M = (0, q.Zp)()
      ;(x[0] !== I || x[1] !== S || x[2] !== j
        ? ((t = ["library-api", I, j, "note-location", S]), (x[0] = I), (x[1] = S), (x[2] = j), (x[3] = t))
        : (t = x[3]),
        x[4] !== I || x[5] !== S
          ? ((n =
              null == I
                ? R.hT
                : async (e) => {
                    let { signal: t } = e,
                      n = {
                        additionalHeaders: { "ChatGPT-Account-ID": I },
                        expectedErrorStatuses: [403, 404],
                        signal: t,
                      },
                      i = await h.Request.safeGet("/files/library/files/{library_file_id}", {
                        ...n,
                        parameters: { path: { library_file_id: S } },
                      })
                    return null == i.directory_id
                      ? []
                      : (
                          await h.Request.safeGet("/files/library/directories/path", {
                            ...n,
                            parameters: { query: { directory_id: i.directory_id } },
                          })
                        ).items.filter(ey)
                  }),
            (x[4] = I),
            (x[5] = S),
            (x[6] = n))
          : (n = x[6]))
      let E = null != I && null != k
      x[7] !== t || x[8] !== n || x[9] !== E
        ? ((s = { queryKey: t, queryFn: n, enabled: E, staleTime: 0, retry: !1 }),
          (x[7] = t),
          (x[8] = n),
          (x[9] = E),
          (x[10] = s))
        : (s = x[10])
      let { data: B } = (0, D.I)(s)
      ;(x[11] !== A
        ? ((a = {
            id: null,
            name: A
              ? (0, i.jsx)(g.A, { id: "codex.writingBlock.inlineLibrary.location.space", defaultMessage: "Space" })
              : (0, i.jsx)(g.A, { id: "codex.writingBlock.inlineLibrary.location", defaultMessage: "Library" }),
          }),
          (x[11] = A),
          (x[12] = a))
        : (a = x[12]),
        x[13] !== B ? ((r = B ?? []), (x[13] = B), (x[14] = r)) : (r = x[14]),
        x[15] !== a || x[16] !== r ? ((o = [a, ...r]), (x[15] = a), (x[16] = r), (x[17] = o)) : (o = x[17]))
      let L = o
      return (
        x[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, i.jsx)("span", {
              className: "flex h-lh items-center",
              children: (0, i.jsx)(y.I, { asset: O.D }),
            })),
            (x[18] = d))
          : (d = x[18]),
        x[19] !== w
          ? ((c = (0, i.jsx)("span", { className: "truncate text-default", children: w })), (x[19] = w), (x[20] = c))
          : (c = x[20]),
        x[21] !== L || x[22] !== C || x[23] !== M || x[24] !== k
          ? ((u = (0, i.jsx)("div", {
              className: "flex flex-wrap items-center gap-1 text-xs leading-dense text-tertiary",
              children: L.map((e, t) =>
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
                        disabled: null == k,
                        onSelect: () => {
                          ;(k?.(), M(null == e.id ? C : `${C}/d/${encodeURIComponent(e.id)}`))
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
            (x[21] = L),
            (x[22] = C),
            (x[23] = M),
            (x[24] = k),
            (x[25] = u))
          : (u = x[25]),
        x[26] !== u || x[27] !== c
          ? ((f = (0, i.jsxs)("div", {
              className: "flex min-w-0 gap-2 px-row-x py-row-y",
              children: [d, (0, i.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col", children: [c, u] })],
            })),
            (x[26] = u),
            (x[27] = c),
            (x[28] = f))
          : (f = x[28]),
        x[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, i.jsx)(V.ms.Separator, {})), (x[29] = p))
          : (p = x[29]),
        x[30] !== A || x[31] !== C || x[32] !== M || x[33] !== k
          ? ((_ =
              null != k
                ? (0, i.jsxs)(V.ms.Item, {
                    onSelect: () => {
                      ;(k(), M(C))
                    },
                    children: [
                      (0, i.jsx)(V.ms.ItemIcon, {
                        size: "md",
                        children: A ? (0, i.jsx)(H.Mpc, {}) : (0, i.jsx)(H.baR, {}),
                      }),
                      A
                        ? (0, i.jsx)(g.A, {
                            id: "codex.writingBlock.inlineLibrary.openLibrary.space",
                            defaultMessage: "Open in Space",
                          })
                        : (0, i.jsx)(g.A, {
                            id: "codex.writingBlock.inlineLibrary.openLibrary",
                            defaultMessage: "Open in Library",
                          }),
                    ],
                  })
                : null),
            (x[30] = A),
            (x[31] = C),
            (x[32] = M),
            (x[33] = k),
            (x[34] = _))
          : (_ = x[34]),
        x[35] !== f || x[36] !== _
          ? ((b = (0, i.jsxs)(i.Fragment, { children: [f, p, _] })), (x[35] = f), (x[36] = _), (x[37] = b))
          : (b = x[37]),
        b
      )
    }
    function ey(e) {
      return !e.is_root
    }
    var ex = n("jplb"),
      ev = n("Vrnh"),
      ew = n("Haiv"),
      eS = n("QhQG"),
      ek = n("AxFa"),
      eI = n("SGsN"),
      ej = n("rO8L"),
      eA = n("BA9i"),
      eC = n("H7Ld"),
      eM = n("cLdu"),
      eE = n("nf3G")
    let eB = (0, et.m3)("writing-block-presentation-format", "spaces", {
        coerceStoredValue: (e) => ("google-slides" === e || "powerpoint" === e ? e : "spaces"),
      }),
      eL = {
        spaces: "CHATGPT_WRITING_BLOCK_SLIDES_DESTINATION_SPACES",
        powerpoint: "CHATGPT_WRITING_BLOCK_SLIDES_DESTINATION_POWERPOINT",
        "google-slides": "CHATGPT_WRITING_BLOCK_SLIDES_DESTINATION_GOOGLE_SLIDES",
      }
    function eN(e) {
      let t,
        n,
        s,
        a,
        o,
        d,
        c,
        u,
        p,
        h,
        _,
        b,
        x,
        v,
        w,
        S,
        j,
        A,
        C,
        M,
        E,
        B,
        L,
        N = (0, l.c)(61),
        {
          analyticsConversationId: T,
          content: O,
          conversationId: P,
          disabled: R,
          onSubmittingChange: D,
          writingBlockId: F,
        } = e,
        q = (0, m.gh)(I.u),
        U = (0, G.A)(),
        W = (0, m.Ul)(eE.threadCwd$),
        $ = (0, m.Ul)(eE.threadHostId$),
        K = (0, m.Ul)(eB)
      N[0] !== $ ? ((t = { hostId: $ }), (N[0] = $), (N[1] = t)) : (t = N[1])
      let Y = (0, ej.J)(t)
      ;(N[2] !== W ? ((n = null == W ? void 0 : [W]), (N[2] = W), (N[3] = n)) : (n = N[3]),
        N[4] !== $ || N[5] !== Y || N[6] !== n
          ? ((s = { enabled: Y, hostId: $, resolveActiveRoots: !0, roots: n }),
            (N[4] = $),
            (N[5] = Y),
            (N[6] = n),
            (N[7] = s))
          : (s = N[7]))
      let { data: Z, isLoading: J } = (0, eM.Kj)(s)
      N[8] !== Z || N[9] !== Y ? ((a = Y ? Z?.find(eT) : void 0), (N[8] = Z), (N[9] = Y), (N[10] = a)) : (a = N[10])
      let Q = a,
        [X, ee] = (0, f.useState)(!1)
      N[11] !== T ||
      N[12] !== P ||
      N[13] !== K ||
      N[14] !== U ||
      N[15] !== D ||
      N[16] !== K ||
      N[17] !== Q ||
      N[18] !== q ||
      N[19] !== F
        ? ((o = () => {
            ;((0, k.yy)(q, r.kV, {
              conversationId: T,
              writingBlockId: F,
              selectedDestination: eL[K],
              destination: eL[K],
            }),
              ee(!0),
              D(!0))
            let e = U.formatMessage({
                id: "codex.writingBlock.slides.create.promptWithOutlineAbove",
                defaultMessage: "make a presentation with the outline above",
              }),
              t =
                null == Q ? e : (0, eC.KH)({ defaultPrompt: e, pluginDisplayName: (0, ew.V)(Q), pluginId: Q.plugin.id })
            ;(0, eS.d)({
              scope: q,
              additionalContext: (0, ev.w1)({ slidesOutline: { writingBlockId: F, destination: K } }),
              turnTrigger: "slides_outline",
              model: void 0,
              prompt: t,
              threadId: P,
              thinking: void 0,
            })
              .catch(() => {
                q.get(eI.Id).danger(
                  U.formatMessage({
                    id: "codex.writingBlock.slides.create.error",
                    defaultMessage: "Couldn\u2019t create slides from the presentation outline",
                  }),
                  { errorAnalytics: { toastId: "codex.writingBlock.slides.create.error" } },
                )
              })
              .finally(() => {
                ;(ee(!1), D(!1))
              })
          }),
          (N[11] = T),
          (N[12] = P),
          (N[13] = K),
          (N[14] = U),
          (N[15] = D),
          (N[16] = K),
          (N[17] = Q),
          (N[18] = q),
          (N[19] = F),
          (N[20] = o))
        : (o = N[20])
      let et = o
      N[21] !== O || N[22] !== R || N[23] !== J || N[24] !== X
        ? ((d = R || X || J || 0 === O.trim().length), (N[21] = O), (N[22] = R), (N[23] = J), (N[24] = X), (N[25] = d))
        : (d = N[25])
      let en = d
      N[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = {
            spaces: (0, i.jsx)(g.A, {
              id: "codex.writingBlock.slides.create.spacesButton",
              defaultMessage: "Create presentation",
            }),
            "google-slides": (0, i.jsx)(g.A, {
              id: "codex.writingBlock.slides.create.googleSlidesButton",
              defaultMessage: "Create Google Slides",
            }),
            powerpoint: (0, i.jsx)(g.A, {
              id: "codex.writingBlock.slides.create.powerPointButton",
              defaultMessage: "Create PowerPoint",
            }),
          }),
          (N[26] = c))
        : (c = N[26])
      let ei = c[K]
      return (
        N[27] !== U
          ? ((u = U.formatMessage({
              id: "codex.writingBlock.slides.create.chooseFormat",
              defaultMessage: "Choose presentation format",
            })),
            (N[27] = U),
            (N[28] = u))
          : (u = N[28]),
        N[29] === Symbol.for("react.memo_cache_sentinel") ? ((p = (0, i.jsx)(H.AdV, {})), (N[29] = p)) : (p = N[29]),
        N[30] !== q ? ((h = () => q.set(eB, "spaces")), (N[30] = q), (N[31] = h)) : (h = N[31]),
        N[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, i.jsx)(g.A, { id: "codex.writingBlock.slides.create.spacesOption", defaultMessage: "Spaces" })),
            (N[32] = _))
          : (_ = N[32]),
        N[33] !== h
          ? ((b = (0, i.jsx)(V.ms.RadioItem, { icon: p, onSelect: h, value: "spaces", children: _ })),
            (N[33] = h),
            (N[34] = b))
          : (b = N[34]),
        N[35] === Symbol.for("react.memo_cache_sentinel") ? ((x = (0, i.jsx)(H.xxq, {})), (N[35] = x)) : (x = N[35]),
        N[36] !== q ? ((v = () => q.set(eB, "powerpoint")), (N[36] = q), (N[37] = v)) : (v = N[37]),
        N[38] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, i.jsx)(g.A, {
              id: "codex.writingBlock.slides.create.powerPointOption",
              defaultMessage: "PowerPoint",
            })),
            (N[38] = w))
          : (w = N[38]),
        N[39] !== v
          ? ((S = (0, i.jsx)(V.ms.RadioItem, { icon: x, onSelect: v, value: "powerpoint", children: w })),
            (N[39] = v),
            (N[40] = S))
          : (S = N[40]),
        N[41] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (0, i.jsx)(y.I, { asset: ex.m })), (N[41] = j))
          : (j = N[41]),
        N[42] !== q ? ((A = () => q.set(eB, "google-slides")), (N[42] = q), (N[43] = A)) : (A = N[43]),
        N[44] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, i.jsx)(g.A, {
              id: "codex.writingBlock.slides.create.googleSlidesOption",
              defaultMessage: "Google Slides",
            })),
            (N[44] = C))
          : (C = N[44]),
        N[45] !== A
          ? ((M = (0, i.jsx)(V.ms.RadioItem, { icon: j, onSelect: A, value: "google-slides", children: C })),
            (N[45] = A),
            (N[46] = M))
          : (M = N[46]),
        N[47] !== K || N[48] !== b || N[49] !== S || N[50] !== M
          ? ((E = (0, i.jsxs)(V.ms.RadioGroup, { value: K, children: [b, S, M] })),
            (N[47] = K),
            (N[48] = b),
            (N[49] = S),
            (N[50] = M),
            (N[51] = E))
          : (E = N[51]),
        N[52] !== X ? ((B = X && (0, i.jsx)(z.y, { className: "icon-xs" })), (N[52] = X), (N[53] = B)) : (B = N[53]),
        N[54] !== et || N[55] !== ei || N[56] !== en || N[57] !== E || N[58] !== B || N[59] !== u
          ? ((L = (0, i.jsxs)(ek._, {
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
              dropdownContent: E,
              children: [B, ei],
            })),
            (N[54] = et),
            (N[55] = ei),
            (N[56] = en),
            (N[57] = E),
            (N[58] = B),
            (N[59] = u),
            (N[60] = L))
          : (L = N[60]),
        L
      )
    }
    function eT(e) {
      return e.plugin.enabled && "DISABLED_BY_ADMIN" !== e.plugin.availability && (0, eA.ho)(e)
    }
    function eO(e) {
      let t = e.replace(/^[ \t]{0,3}((`|~)\2{2,})[^\n]*(?:\n[\s\S]*?(?:^[ \t]{0,3}\1\2*[ \t]*$|(?![\s\S]))|$)/gmu, ""),
        n = t.match(/^[ \t]{0,3}(?:#{1,6}\s+)?(?:\*\*)?slide\s+#?\d+\b/gimu)
      if (null != n) return n.length
      let i = (e) => {
          let t = e.map((e) => e[1].replace(/\t/gu, "    ").length),
            n = Math.min(...t)
          return t.filter((e) => e === n).length
        },
        l = Array.from(t.matchAll(/^([ \t]*)\d+[.)]\s+\*\*/gmu))
      if (l.length > 0) return i(l)
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
      let a = Array.from(t.matchAll(/^([ \t]*)(?:\d+[.)]|[-+*])\s+/gmu))
      return a.length > 0 ? i(a) : Number(t.trim().length > 0)
    }
    var eP = n("SEZW"),
      eR = n("YAOF"),
      eD = n("v7qY"),
      eF = n("Qgfj"),
      eG = n("nsuH"),
      eq = n("HgLj")
    function eU(e) {
      let t,
        n,
        s,
        a,
        r,
        o,
        d,
        c,
        u,
        m,
        p,
        h,
        _,
        b,
        x,
        v,
        w,
        S,
        k,
        I,
        j,
        A,
        C,
        M,
        E,
        B,
        L,
        N,
        T,
        O,
        P,
        R = (0, l.c)(109),
        {
          disabled: D,
          isOpen: q,
          onOpenChange: U,
          onSubmittingChange: V,
          onSlideCountChange: Y,
          onCancel: Z,
          slideCount: X,
        } = e,
        ee = (0, G.A)(),
        [et, en] = (0, f.useState)(!1),
        [ei, el] = (0, f.useState)(!1),
        es = (0, J.I)(),
        ea = (0, f.useRef)(null),
        er = (0, f.useRef)(null),
        eo = (0, f.useRef)(null),
        ed = (0, f.useRef)(!1),
        [ec, eu] = (0, f.useState)()
      R[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (e, t) => {
            eu(t.clientWidth)
          }),
          (R[0] = t))
        : (t = R[0])
      let em = (0, eG.wY)(t),
        ef = Math.max(1, X),
        [eg, ep] = (0, f.useState)(Math.max(20, ef + 10)),
        [eh, e_] = (0, f.useState)(!1),
        [eb, ey] = (0, f.useState)(ef),
        ex = et || ei || (!D && (q ?? eh)),
        ev = 0.15 * !es
      if (ei) {
        let e
        ;(R[1] !== ee
          ? ((e = ee.formatMessage({
              id: "codex.writingBlock.slides.slideCount.updated",
              defaultMessage: "Slide count updated",
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
            })),
            (R[5] = ee),
            (R[6] = e))
          : (e = R[6]),
          (n = e))
      }
      R[7] !== ef || R[8] !== q || R[9] !== U
        ? ((s = (e) => {
            ;(el(!1), e && (ep(Math.max(20, ef + 10)), ey(ef)), null == q && e_(e), U?.(e))
          }),
          (R[7] = ef),
          (R[8] = q),
          (R[9] = U),
          (R[10] = s))
        : (s = R[10])
      let ew = s
      R[11] !== ew
        ? ((a = () => {
            let e = ed.current
            ;((0, eD.flushSync)(() => ew(!1)), e && er.current?.focus())
          }),
          (R[11] = ew),
          (R[12] = a))
        : (a = R[12])
      let eS = a
      R[13] !== et || R[14] !== ew
        ? ((r = (e) => {
            null != ea.current && !e.composedPath().includes(ea.current) && ((ed.current = !1), et || ew(!1))
          }),
          (R[13] = et),
          (R[14] = ew),
          (R[15] = r))
        : (r = R[15])
      let ek = (0, f.useEffectEvent)(r)
      ;(R[16] !== ek || R[17] !== ex
        ? ((o = () => {
            if (!ex) return
            let e = ea.current?.ownerDocument
            if (null == e) return
            let t = (e) => {
              ed.current = null != ea.current && e.composedPath().includes(ea.current)
            }
            return (
              e.addEventListener("focusin", t),
              e.addEventListener("pointerdown", ek, !0),
              () => {
                ;(e.removeEventListener("focusin", t), e.removeEventListener("pointerdown", ek, !0))
              }
            )
          }),
          (R[16] = ek),
          (R[17] = ex),
          (R[18] = o))
        : (o = R[18]),
        R[19] !== ex ? ((d = [ex]), (R[19] = ex), (R[20] = d)) : (d = R[20]),
        (0, f.useEffect)(o, d),
        R[21] !== em ? ((c = (0, eq.P)(ea, em)), (R[21] = em), (R[22] = c)) : (c = R[22]))
      let eI = (D || et) && "opacity-40"
      R[23] !== eI
        ? ((u = (0, F.A)("relative flex h-9 w-72 max-w-full min-w-0 items-center select-none sm:w-80", eI)),
          (R[23] = eI),
          (R[24] = u))
        : (u = R[24])
      let ej = ex && "pointer-events-none"
      R[25] !== ej
        ? ((m = (0, F.A)(
            "group/slide-count relative flex h-full min-w-0 shrink-0 cursor-interaction items-center rounded-full px-3 text-sm font-medium text-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring disabled:cursor-default",
            ej,
          )),
          (R[25] = ej),
          (R[26] = m))
        : (m = R[26])
      let eA = ex || void 0,
        eC = D || et
      R[27] !== ew
        ? ((p = () => {
            ;((0, eD.flushSync)(() => ew(!0)), eo.current?.focus())
          }),
          (R[27] = ew),
          (R[28] = p))
        : (p = R[28])
      let eM = ex ? -1 : void 0,
        eE = !ex && !D && "group-hover/slide-count:bg-secondary-ghost-hover"
      R[29] !== eE
        ? ((h = (0, F.A)(
            "pointer-events-none absolute inset-y-0 start-0 rounded-full border border-default bg-surface",
            eE,
          )),
          (R[29] = eE),
          (R[30] = h))
        : (h = R[30])
      let eB = ex ? ec : "100%"
      ;(R[31] !== eB ? ((_ = { width: eB }), (R[31] = eB), (R[32] = _)) : (_ = R[32]),
        R[33] !== es ? ((b = es ? { duration: 0 } : Q.RH), (R[33] = es), (R[34] = b)) : (b = R[34]),
        R[35] !== h || R[36] !== _ || R[37] !== b
          ? ((x = (0, i.jsx)(K.P.span, { className: h, animate: _, initial: !1, transition: b })),
            (R[35] = h),
            (R[36] = _),
            (R[37] = b),
            (R[38] = x))
          : (x = R[38]),
        R[39] === Symbol.for("react.memo_cache_sentinel") ? ((v = (0, i.jsx)(H.AdV, {})), (R[39] = v)) : (v = R[39]),
        R[40] !== eg || R[41] !== ex || R[42] !== X
          ? ((w = (0, i.jsx)("span", {
              "aria-hidden": !0,
              className: "invisible col-start-1 row-start-1",
              children: ex ? (0, i.jsx)(eF.Gr, { value: eg }) : (0, i.jsx)(g.A, { ...eV, values: { count: X } }),
            })),
            (R[40] = eg),
            (R[41] = ex),
            (R[42] = X),
            (R[43] = w))
          : (w = R[43]))
      let eL = +!!ex
      R[44] !== eL ? ((S = { opacity: eL }), (R[44] = eL), (R[45] = S)) : (S = R[45])
      let eN = ex ? 0 : ev
      ;(R[46] !== ev || R[47] !== eN
        ? ((k = { duration: ev, delay: eN }), (R[46] = ev), (R[47] = eN), (R[48] = k))
        : (k = R[48]),
        R[49] !== eb ? ((I = (0, i.jsx)(eF.Gr, { value: eb })), (R[49] = eb), (R[50] = I)) : (I = R[50]),
        R[51] !== S || R[52] !== k || R[53] !== I
          ? ((j = (0, i.jsx)(K.P.span, {
              className: "col-start-1 row-start-1",
              animate: S,
              initial: !1,
              transition: k,
              "aria-hidden": !0,
              children: I,
            })),
            (R[51] = S),
            (R[52] = k),
            (R[53] = I),
            (R[54] = j))
          : (j = R[54]))
      let eT = +!ex
      R[55] !== eT ? ((A = { opacity: eT }), (R[55] = eT), (R[56] = A)) : (A = R[56])
      let eO = ex ? 0 : ev
      ;(R[57] !== ev || R[58] !== eO
        ? ((C = { duration: ev, delay: eO }), (R[57] = ev), (R[58] = eO), (R[59] = C))
        : (C = R[59]),
        R[60] !== X ? ((M = (0, i.jsx)(g.A, { ...eV, values: { count: X } })), (R[60] = X), (R[61] = M)) : (M = R[61]),
        R[62] !== ex || R[63] !== A || R[64] !== C || R[65] !== M
          ? ((E = (0, i.jsx)(K.P.span, {
              className: "absolute inset-y-0 start-0 whitespace-nowrap",
              animate: A,
              initial: !1,
              transition: C,
              "aria-hidden": ex,
              children: M,
            })),
            (R[62] = ex),
            (R[63] = A),
            (R[64] = C),
            (R[65] = M),
            (R[66] = E))
          : (E = R[66]),
        R[67] !== w || R[68] !== j || R[69] !== E
          ? ((B = (0, i.jsxs)("span", {
              className: "relative flex items-center gap-1.5",
              children: [
                v,
                (0, i.jsxs)("span", { className: "relative grid text-start tabular-nums", children: [w, j, E] }),
              ],
            })),
            (R[67] = w),
            (R[68] = j),
            (R[69] = E),
            (R[70] = B))
          : (B = R[70]),
        R[71] !== ex ||
        R[72] !== m ||
        R[73] !== eA ||
        R[74] !== eC ||
        R[75] !== p ||
        R[76] !== eM ||
        R[77] !== x ||
        R[78] !== B
          ? ((L = (0, i.jsxs)("button", {
              ref: er,
              className: m,
              "aria-expanded": ex,
              "aria-hidden": eA,
              disabled: eC,
              onClick: p,
              type: "button",
              tabIndex: eM,
              children: [x, B],
            })),
            (R[71] = ex),
            (R[72] = m),
            (R[73] = eA),
            (R[74] = eC),
            (R[75] = p),
            (R[76] = eM),
            (R[77] = x),
            (R[78] = B),
            (R[79] = L))
          : (L = R[79]))
      let eU = !ex,
        eH = !ex
      return (
        R[80] !== n ||
        R[81] !== D ||
        R[82] !== eb ||
        R[83] !== ev ||
        R[84] !== eS ||
        R[85] !== ee ||
        R[86] !== et ||
        R[87] !== ei ||
        R[88] !== eg ||
        R[89] !== Z ||
        R[90] !== Y ||
        R[91] !== V ||
        R[92] !== ex ||
        R[93] !== ew ||
        R[94] !== es ||
        R[95] !== X
          ? ((N =
              ex &&
              (0, i.jsxs)(K.P.div, {
                className: "relative flex h-full min-w-0 flex-1 items-center gap-2 pe-1.5",
                animate: { opacity: 1 },
                initial: { opacity: 0 },
                exit: { opacity: 0, transition: { duration: ev, delay: 0 } },
                transition: { duration: ev, delay: ev, ease: Q.Wu },
                onKeyDownCapture: (e) => {
                  if ("Escape" === e.key) {
                    if ((e.preventDefault(), e.stopPropagation(), et)) return void Z?.()
                    ;((0, eD.flushSync)(() => ew(!1)), er.current?.focus())
                  }
                },
                children: [
                  (0, i.jsxs)(eR.bL, {
                    className: "relative flex h-6 min-w-0 flex-1 touch-none items-center",
                    disabled: !ex || D || et || ei,
                    max: eg,
                    min: 1,
                    onValueChange: (e) => {
                      let [t] = e
                      null != t && ey(t)
                    },
                    step: 1,
                    value: [eb],
                    children: [
                      (0, i.jsx)(eR.CC, {
                        className: "relative h-4 grow overflow-hidden rounded-full bg-text/5",
                        children: (0, i.jsx)("span", {
                          className:
                            "pointer-events-none absolute inset-x-2 inset-y-0 flex items-center justify-between",
                          children: Array.from({ length: Math.min(eg, 20) }, eW),
                        }),
                      }),
                      (0, i.jsx)(eR.zi, {
                        ref: eo,
                        "aria-label": ee.formatMessage({
                          id: "codex.writingBlock.slides.slideCount.slider",
                          defaultMessage: "Number of presentation slides",
                        }),
                        "aria-valuetext": ee.formatMessage(
                          {
                            id: "codex.writingBlock.slides.slideCount.value",
                            defaultMessage: "{count, plural, one {# slide} other {# slides}}",
                          },
                          { count: eb },
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
                    disabled: ei || (et ? null == Z : !ex || D || eb === X),
                    onClick: () => {
                      et
                        ? Z?.()
                        : ((ed.current = ea.current?.contains(ea.current.ownerDocument.activeElement) ?? !1),
                          en(!0),
                          V?.(!0),
                          Y(eb)
                            .finally(() => {
                              ;(0, eD.flushSync)(() => {
                                ;(en(!1), V?.(!1))
                              })
                            })
                            .then((e) => {
                              e && (es ? eS() : el(!0))
                            }))
                    },
                    radius: "full",
                    size: "compact",
                    uniform: !0,
                    children: [
                      ei &&
                        (0, i.jsx)(K.P.span, {
                          animate: { opacity: [0, 1, 1] },
                          initial: { opacity: 0 },
                          onAnimationComplete: eS,
                          transition: { duration: 0.3 },
                          children: (0, i.jsx)(H.yIE, {}),
                        }),
                      !ei && et && (0, i.jsx)(z.y, { className: "icon-xs" }),
                      !ei && !et && (0, i.jsx)(y.I, { asset: eP.l }),
                    ],
                  }),
                ],
              })),
            (R[80] = n),
            (R[81] = D),
            (R[82] = eb),
            (R[83] = ev),
            (R[84] = eS),
            (R[85] = ee),
            (R[86] = et),
            (R[87] = ei),
            (R[88] = eg),
            (R[89] = Z),
            (R[90] = Y),
            (R[91] = V),
            (R[92] = ex),
            (R[93] = ew),
            (R[94] = es),
            (R[95] = X),
            (R[96] = N))
          : (N = R[96]),
        R[97] !== N
          ? ((T = (0, i.jsx)($.N, { initial: !1, mode: "popLayout", children: N })), (R[97] = N), (R[98] = T))
          : (T = R[98]),
        R[99] !== eU || R[100] !== eH || R[101] !== T
          ? ((O = (0, i.jsx)("div", { className: "contents", "aria-hidden": eU, inert: eH, children: T })),
            (R[99] = eU),
            (R[100] = eH),
            (R[101] = T),
            (R[102] = O))
          : (O = R[102]),
        R[103] !== et || R[104] !== L || R[105] !== O || R[106] !== c || R[107] !== u
          ? ((P = (0, i.jsxs)("div", { ref: c, className: u, "aria-busy": et, children: [L, O] })),
            (R[103] = et),
            (R[104] = L),
            (R[105] = O),
            (R[106] = c),
            (R[107] = u),
            (R[108] = P))
          : (P = R[108]),
        P
      )
    }
    function eW(e, t) {
      return (0, i.jsx)("span", { "aria-hidden": !0, className: "size-1 shrink-0 rounded-full bg-text/20" }, t)
    }
    let eV = (0, eF.zR)({
      id: "codex.writingBlock.slides.slideCount.button",
      defaultMessage: "{count, plural, one {# slide} other {# slides}}",
    })
    var eH = n("sOcu"),
      ez = n("Ot7V"),
      e$ = n("WGRC"),
      eK = n("ripK")
    function eY(e) {
      let t,
        n,
        s,
        a,
        r,
        o,
        d,
        c,
        u,
        p,
        _,
        b,
        y = (0, l.c)(54),
        {
          appearance: x,
          content: v,
          isDisabled: w,
          messageId: S,
          onBeforeExport: k,
          renderAsSubmenu: j,
          serverConversationId: A,
          title: M,
          writingBlockIndex: E,
        } = e,
        L = void 0 === x ? "inline" : x,
        N = void 0 !== j && j,
        T = (0, m.gh)(I.u),
        O = (0, G.A)(),
        [P, R] = (0, f.useState)(!1)
      y[0] !== O
        ? ((t = O.formatMessage({ id: "codex.writingBlock.download.label", defaultMessage: "Download" })),
          (y[0] = O),
          (y[1] = t))
        : (t = y[1])
      let D = t,
        F = null != A && null != S && null != E
      y[2] !== v || y[3] !== M
        ? ((n = () => {
            let e = (M ?? "writing-block").replaceAll("/", "-").replaceAll("\\", "-").trim(),
              t = /\.md$/i.test(e) ? e : `${e || "writing-block"}.md`
            ;(0, eK.W)(new Blob(["function" == typeof v ? v() : v], { type: "text/markdown;charset=utf-8" }), t)
          }),
          (y[2] = v),
          (y[3] = M),
          (y[4] = n))
        : (n = y[4])
      let q = n
      y[5] !== O || y[6] !== S || y[7] !== k || y[8] !== T || y[9] !== A || y[10] !== E
        ? ((s = (e) => {
            null != A &&
              null != S &&
              null != E &&
              (R(!0),
              Promise.resolve(k?.())
                .then(() =>
                  h.Request.safePost("/export_doc/writing_block/file", {
                    requestBody: { conversation_id: A, export_type: e, index: E, message_id: S },
                  }),
                )
                .then(eZ)
                .catch(() => {
                  T.get(eI.Id).danger(
                    O.formatMessage({ id: "codex.writingBlock.download.error", defaultMessage: "Download failed" }),
                    { errorAnalytics: { toastId: "codex.writingBlock.download.error" } },
                  )
                })
                .finally(() => R(!1)))
          }),
          (y[5] = O),
          (y[6] = S),
          (y[7] = k),
          (y[8] = T),
          (y[9] = A),
          (y[10] = E),
          (y[11] = s))
        : (s = y[11])
      let U = s,
        $ = w || P
      ;(y[12] !== q || y[13] !== N
        ? ((a = (e) => {
            ;(N && e.preventDefault(), q())
          }),
          (y[12] = q),
          (y[13] = N),
          (y[14] = a))
        : (a = y[14]),
        y[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, i.jsx)(V.ms.ItemIcon, {
              size: "md",
              children: (0, i.jsx)(e$.B, {
                className: "size-5",
                "aria-hidden": !0,
                fileName: void 0,
                mimeType: "text/markdown",
              }),
            })),
            (o = (0, i.jsx)(g.A, { id: "codex.writingBlock.download.markdown", defaultMessage: "Markdown document" })),
            (y[15] = r),
            (y[16] = o))
          : ((r = y[15]), (o = y[16])),
        y[17] !== $ || y[18] !== a
          ? ((d = (0, i.jsxs)(V.ms.Item, { disabled: $, onSelect: a, children: [r, o] })),
            (y[17] = $),
            (y[18] = a),
            (y[19] = d))
          : (d = y[19]),
        y[20] !== F || y[21] !== U || y[22] !== w || y[23] !== P || y[24] !== N
          ? ((c = F
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsxs)(V.ms.Item, {
                      disabled: w || P,
                      onSelect: (e) => {
                        ;(N && e.preventDefault(), U("pdf"))
                      },
                      children: [
                        (0, i.jsx)(V.ms.ItemIcon, {
                          size: "md",
                          children: (0, i.jsx)(e$.B, {
                            className: "size-5",
                            "aria-hidden": !0,
                            fileName: void 0,
                            mimeType: "application/pdf",
                          }),
                        }),
                        (0, i.jsx)(g.A, { id: "codex.writingBlock.download.pdf", defaultMessage: "PDF document" }),
                      ],
                    }),
                    (0, i.jsxs)(V.ms.Item, {
                      disabled: w || P,
                      onSelect: (e) => {
                        ;(N && e.preventDefault(), U("docx"))
                      },
                      children: [
                        (0, i.jsx)(V.ms.ItemIcon, {
                          size: "md",
                          children: (0, i.jsx)(e$.B, {
                            className: "size-5",
                            "aria-hidden": !0,
                            fileName: void 0,
                            mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                          }),
                        }),
                        (0, i.jsx)(g.A, { id: "codex.writingBlock.download.word", defaultMessage: "Microsoft Word" }),
                      ],
                    }),
                  ],
                })
              : null),
            (y[20] = F),
            (y[21] = U),
            (y[22] = w),
            (y[23] = P),
            (y[24] = N),
            (y[25] = c))
          : (c = y[25]),
        y[26] !== d || y[27] !== c
          ? ((u = (0, i.jsxs)(i.Fragment, { children: [d, c] })), (y[26] = d), (y[27] = c), (y[28] = u))
          : (u = y[28]))
      let K = u
      if (N) {
        let e
        if (!F) {
          let e
          return (
            y[29] !== D || y[30] !== q || y[31] !== w
              ? ((e = (0, i.jsx)(V.ms.Item, { disabled: w, leftIconAsset: eH.r, onSelect: q, children: D })),
                (y[29] = D),
                (y[30] = q),
                (y[31] = w),
                (y[32] = e))
              : (e = y[32]),
            e
          )
        }
        let t = w || P,
          n = P ? void 0 : eH.r,
          l = P ? "size-5" : void 0
        return (
          y[33] !== D || y[34] !== K || y[35] !== t || y[36] !== n || y[37] !== l
            ? ((e = (0, i.jsx)(V.ms.FlyoutSubmenuItem, {
                ariaLabel: D,
                contentWidth: "menuBounded",
                disabled: t,
                label: D,
                leftIconAsset: n,
                leftIconClassName: l,
                LeftIcon: z.y,
                children: K,
              })),
              (y[33] = D),
              (y[34] = K),
              (y[35] = t),
              (y[36] = n),
              (y[37] = l),
              (y[38] = e))
            : (e = y[38]),
          e
        )
      }
      ;(y[39] !== L || y[40] !== F || y[41] !== D || y[42] !== q || y[43] !== w || y[44] !== P
        ? ((p =
            "viewer" === L
              ? (0, i.jsx)(C.DW, {
                  "aria-label": D,
                  disabled: w || P,
                  onClick: F ? void 0 : q,
                  uniform: !0,
                  children: P ? (0, i.jsx)(z.y, { className: "size-5" }) : (0, i.jsx)(H.vHO, {}),
                })
              : (0, i.jsx)(W.$, {
                  "aria-label": D,
                  color: "ghostActive",
                  disabled: w || P,
                  onClick: F ? void 0 : q,
                  size: "imageToolbar",
                  uniform: !0,
                  children: P ? (0, i.jsx)(z.y, { className: "size-5" }) : (0, i.jsx)(H.vHO, {}),
                })),
          (y[39] = L),
          (y[40] = F),
          (y[41] = D),
          (y[42] = q),
          (y[43] = w),
          (y[44] = P),
          (y[45] = p))
        : (p = y[45]),
        y[46] !== D || y[47] !== p
          ? ((_ = (0, i.jsx)(B.m, { sideOffset: 0, content: D, children: p })), (y[46] = D), (y[47] = p), (y[48] = _))
          : (_ = y[48]))
      let Y = _
      if (!F) return Y
      let Z = "viewer" === L ? C.OZ : V.Ab,
        J = w || P
      return (
        y[49] !== Z || y[50] !== Y || y[51] !== K || y[52] !== J
          ? ((b = (0, i.jsx)(Z, {
              align: "end",
              contentWidth: "menuBounded",
              disabled: J,
              triggerButton: Y,
              children: K,
            })),
            (y[49] = Z),
            (y[50] = Y),
            (y[51] = K),
            (y[52] = J),
            (y[53] = b))
          : (b = y[53]),
        b
      )
    }
    function eZ(e) {
      ;(0, ez.E0)({ href: e.download_url, initiator: "open_in_browser_bridge", openTarget: "external-browser" })
    }
    var eJ = n("Jaao")
    let eQ = "inProgressSendId",
      eX = "senderLinkId",
      e1 = /<([^<>]+)>/
    function e0(e) {
      let t = [],
        n = new Set()
      for (let i of e6(e)) {
        let e = i.toLowerCase()
        !(0, eJ.SW)(i) || n.has(e) || (n.add(e), t.push(i))
      }
      return t
    }
    function e2(e) {
      return e6(e).some((e) => !(0, eJ.SW)(e))
    }
    function e3({ to: e, cc: t, bcc: n }) {
      return e.length > 0 || t.length > 0 || n.length > 0
    }
    function e4(e) {
      return "sending_in_progress" === e.kind || "polling_final" === e.kind
    }
    function e5(e) {
      return e?.isSent === !0
    }
    function e7(e) {
      return (function (e) {
        if (null == e || "object" != typeof e) return
        let { type: t, referenceMessageId: n, provider: i } = e
        if ("reply" !== t || "string" != typeof n || "string" != typeof i) return
        let l = n.trim(),
          s = i.trim()
        if (0 !== l.length && ("gmail" === s || "outlook" === s)) return { type: t, referenceMessageId: l, provider: s }
      })(e?.emailAction)
    }
    function e6(e) {
      let t = []
      for (let n of e.split(/[;,\n]+/)) {
        let e = n.trim()
        0 !== e.length && t.push(e.match(e1)?.[1]?.trim() ?? e)
      }
      return t
    }
    var e8 = n("rGp2"),
      e9 = n("ysXj"),
      te = n("Ov1H"),
      tt = n("MmET"),
      tn = n("BPFy")
    function ti(e) {
      let t,
        n,
        s,
        a,
        r,
        o,
        d,
        c,
        u,
        m,
        f,
        p,
        h,
        _,
        b,
        x,
        v,
        w,
        S,
        k,
        I,
        j,
        A,
        C,
        M,
        E,
        L = (0, l.c)(57),
        { disabled: N, onOpen: T } = e,
        O = void 0 !== N && N,
        P = (0, G.A)()
      L[0] !== P
        ? ((t = P.formatMessage({
            id: "chatgptConversations.writingBlock.email.open.tooltip",
            defaultMessage: "Open in email",
          })),
          (L[0] = P),
          (L[1] = t))
        : (t = L[1])
      let R = t
      L[2] !== P
        ? ((n = P.formatMessage({
            id: "chatgptConversations.writingBlock.email.open.dropdown.ariaLabel",
            defaultMessage: "Open email in app",
          })),
          (L[2] = P),
          (L[3] = n))
        : (n = L[3])
      let D = n
      return (
        L[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, i.jsx)(y.I, { "aria-hidden": !1, asset: e9.f })), (L[4] = s))
          : (s = L[4]),
        L[5] !== O || L[6] !== D
          ? ((a = (0, i.jsx)(W.$, {
              "aria-label": D,
              color: "ghostActive",
              disabled: O,
              size: "imageToolbar",
              uniform: !0,
              children: s,
            })),
            (L[5] = O),
            (L[6] = D),
            (L[7] = a))
          : (a = L[7]),
        L[8] !== R || L[9] !== a
          ? ((r = (0, i.jsx)(B.m, { sideOffset: 0, content: R, children: a })), (L[8] = R), (L[9] = a), (L[10] = r))
          : (r = L[10]),
        L[11] !== P
          ? ((o = P.formatMessage({
              id: "chatgptConversations.writingBlock.email.open.option.gmail.ariaLabel",
              defaultMessage: "Open email using Gmail",
            })),
            (L[11] = P),
            (L[12] = o))
          : (o = L[12]),
        L[13] !== T ? ((d = () => T("gmail")), (L[13] = T), (L[14] = d)) : (d = L[14]),
        L[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, i.jsx)(V.ms.ItemIcon, { size: "md", children: (0, i.jsx)(te.A, { className: "icon-sm" }) })),
            (c = (0, i.jsx)(g.A, {
              id: "chatgptConversations.writingBlock.email.open.option.gmail.label",
              defaultMessage: "Gmail",
            })),
            (L[15] = c),
            (L[16] = u))
          : ((c = L[15]), (u = L[16])),
        L[17] !== o || L[18] !== d
          ? ((m = (0, i.jsxs)(V.ms.Item, { "aria-label": o, onSelect: d, children: [u, c] })),
            (L[17] = o),
            (L[18] = d),
            (L[19] = m))
          : (m = L[19]),
        L[20] !== P
          ? ((f = P.formatMessage({
              id: "chatgptConversations.writingBlock.email.open.option.outlook.ariaLabel",
              defaultMessage: "Open email using Outlook",
            })),
            (L[20] = P),
            (L[21] = f))
          : (f = L[21]),
        L[22] !== T ? ((p = () => T("outlook")), (L[22] = T), (L[23] = p)) : (p = L[23]),
        L[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, i.jsx)(V.ms.ItemIcon, { size: "md", children: (0, i.jsx)(tn.A, { className: "icon-sm" }) })),
            (_ = (0, i.jsx)(g.A, {
              id: "chatgptConversations.writingBlock.email.open.option.outlook.label",
              defaultMessage: "Outlook",
            })),
            (L[24] = h),
            (L[25] = _))
          : ((h = L[24]), (_ = L[25])),
        L[26] !== f || L[27] !== p
          ? ((b = (0, i.jsxs)(V.ms.Item, { "aria-label": f, onSelect: p, children: [h, _] })),
            (L[26] = f),
            (L[27] = p),
            (L[28] = b))
          : (b = L[28]),
        L[29] !== P
          ? ((x = P.formatMessage({
              id: "chatgptConversations.writingBlock.email.open.option.default.ariaLabel",
              defaultMessage: "Open email using default email app",
            })),
            (L[29] = P),
            (L[30] = x))
          : (x = L[30]),
        L[31] !== T ? ((v = () => T("default")), (L[31] = T), (L[32] = v)) : (v = L[32]),
        L[33] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, i.jsx)(V.ms.ItemIcon, { size: "md", children: (0, i.jsx)(tt.A, { className: "icon-sm" }) })),
            (S = (0, i.jsx)(g.A, {
              id: "chatgptConversations.writingBlock.email.open.option.default.label",
              defaultMessage: "Default email app",
            })),
            (L[33] = w),
            (L[34] = S))
          : ((w = L[33]), (S = L[34])),
        L[35] !== x || L[36] !== v
          ? ((k = (0, i.jsxs)(V.ms.Item, { "aria-label": x, onSelect: v, children: [w, S] })),
            (L[35] = x),
            (L[36] = v),
            (L[37] = k))
          : (k = L[37]),
        L[38] !== O || L[39] !== m || L[40] !== b || L[41] !== k || L[42] !== r
          ? ((I = (0, i.jsx)("div", {
              className: "hidden md:block",
              children: (0, i.jsxs)(V.Ab, {
                align: "end",
                contentWidth: "menuBounded",
                disabled: O,
                triggerButton: r,
                children: [m, b, k],
              }),
            })),
            (L[38] = O),
            (L[39] = m),
            (L[40] = b),
            (L[41] = k),
            (L[42] = r),
            (L[43] = I))
          : (I = L[43]),
        L[44] !== T ? ((j = () => T("default")), (L[44] = T), (L[45] = j)) : (j = L[45]),
        L[46] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = (0, i.jsx)(y.I, { "aria-hidden": !1, asset: e9.f })), (L[46] = A))
          : (A = L[46]),
        L[47] !== O || L[48] !== R || L[49] !== j
          ? ((C = (0, i.jsx)(W.$, {
              "aria-label": R,
              color: "ghostActive",
              disabled: O,
              onClick: j,
              size: "imageToolbar",
              uniform: !0,
              children: A,
            })),
            (L[47] = O),
            (L[48] = R),
            (L[49] = j),
            (L[50] = C))
          : (C = L[50]),
        L[51] !== R || L[52] !== C
          ? ((M = (0, i.jsx)("div", {
              className: "md:hidden",
              children: (0, i.jsx)(B.m, { sideOffset: 0, content: R, children: C }),
            })),
            (L[51] = R),
            (L[52] = C),
            (L[53] = M))
          : (M = L[53]),
        L[54] !== I || L[55] !== M
          ? ((E = (0, i.jsxs)(i.Fragment, { children: [I, M] })), (L[54] = I), (L[55] = M), (L[56] = E))
          : (E = L[56]),
        E
      )
    }
    let tl = { gmail: "https://www.googleapis.com/auth/gmail.modify", outlook: "mail.send" }
    function ts(e) {
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
              var i, l, s, a
              let r, o, d, c, u, m, f, g, p, h
              return "list" === t.type.name || "ordered_list" === t.type.name
                ? ((i = t),
                  (l = n),
                  (r = []),
                  (o = "number" == typeof i.attrs.startingNumber ? i.attrs.startingNumber : 1),
                  i.forEach((t, n, s) => {
                    let a = "ordered_list" === i.type.name ? `${o + s}. ` : "- ",
                      d = "task_list_item" === t.type.name ? `[${!0 === t.attrs.checked ? "x" : " "}] ` : "",
                      c = " ".repeat(a.length + d.length),
                      u = ""
                    ;(t.forEach((t, n, i) => {
                      let s = e(t, l).replaceAll(
                        "\n",
                        `
${c}`,
                      )
                      if (0 === i) {
                        u = s
                        return
                      }
                      let a = "list" === t.type.name || "ordered_list" === t.type.name ? "\n" : "\n\n"
                      u += `${a}${c}${s}`
                    }),
                      r.push(`${a}${d}${u}`))
                  }),
                  r.join("\n"))
                : t.isTextblock
                  ? ((s = t),
                    (a = n),
                    (m = ""),
                    (f = ""),
                    (g = !1),
                    (p = (e) => {
                      let t = c,
                        n = u
                      ;(null != t &&
                        null != n &&
                        (0 === t || /\s/.test(m[t - 1] ?? "")) &&
                        (null == e || /^\s/.test(e)) &&
                        (m = m.slice(0, t) + m.slice(t + 1, n) + m.slice(n + 1)),
                        (c = void 0),
                        (u = void 0))
                    }),
                    (h = () => {
                      if (null == d) return
                      let e = f === d || d === `mailto:${f}` || d === `http://${f}`
                      ;(e && m.endsWith("<") && (c = m.length - 1),
                        e ? (m += g ? `<${f}>` : f) : (m += `${f} (${d})`),
                        (d = void 0),
                        (f = ""),
                        (g = !1))
                    }),
                    s.descendants((e) => {
                      if ("hard_break" === e.type.name) {
                        ;(h(), p("\n"), (m += "\n"))
                        return
                      }
                      if (!e.isText) return
                      let t = e.text ?? ""
                      null != u && p(t)
                      let n = e.marks.find((e) => "link" === e.type.name)?.attrs.href,
                        i = "string" == typeof n ? n : void 0
                      if (i !== d) {
                        ;(h(), (d = i))
                        let t = e.marks.find((e) => "startend" === e.type.name)?.attrs,
                          n = "number" == typeof t?.start ? t.start : void 0,
                          l = "number" == typeof t?.end ? t.end : void 0
                        g =
                          null != n &&
                          null != l &&
                          "<" === a[n - 1] &&
                          ">" === a[l] &&
                          ((n > 1 && !/\s/.test(a[n - 2] ?? "")) || (l + 1 < a.length && !/\s/.test(a[l + 1] ?? "")))
                      }
                      null == d
                        ? null != c && t.startsWith(">")
                          ? ((u = m.length), (m += t), t.length > 1 && p(t.slice(1)))
                          : ((m += t), (c = void 0))
                        : (f += t)
                    }),
                    h(),
                    p(),
                    m)
                  : tr(t, n)
            })(e, t),
          )
        }),
        n.join("\n\n")
      )
    }
    var to = n("ClXH"),
      td = n("KB18")
    let tc = (0, f.forwardRef)(function (e, t) {
      let n,
        s,
        a,
        r,
        o,
        d,
        c,
        u,
        m,
        g,
        p,
        h,
        _,
        b,
        y = (0, l.c)(31)
      y[0] !== e
        ? (({ "aria-disabled": n, className: s, icon: a, label: r, onClick: o, status: c, type: u, ...d } = e),
          (y[0] = e),
          (y[1] = n),
          (y[2] = s),
          (y[3] = a),
          (y[4] = r),
          (y[5] = o),
          (y[6] = d),
          (y[7] = c),
          (y[8] = u))
        : ((n = y[1]), (s = y[2]), (a = y[3]), (r = y[4]), (o = y[5]), (d = y[6]), (c = y[7]), (u = y[8]))
      let x = void 0 === c ? "ready" : c,
        v = void 0 === u ? "button" : u,
        w = "sent" === x,
        S = (0, f.useRef)(null)
      ;(y[9] !== w
        ? ((m = () => {
            let e = S.current
            w && null != e && e.ownerDocument.activeElement === e && e.blur()
          }),
          (g = [w]),
          (y[9] = w),
          (y[10] = m),
          (y[11] = g))
        : ((m = y[10]), (g = y[11])),
        (0, f.useEffect)(m, g))
      let k = !!w || n,
        I = w
          ? "ms-1 flex size-9 cursor-default items-center justify-center rounded-full"
          : "ms-1 flex h-9 items-center rounded-[24px] pe-3 text-sm font-medium hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
      y[12] !== s || y[13] !== I ? ((p = (0, F.A)(I, s)), (y[12] = s), (y[13] = I), (y[14] = p)) : (p = y[14])
      let j = w ? tu : o
      y[15] !== t
        ? ((h = (e) => {
            ;((S.current = e), "function" == typeof t ? t(e) : null != t && (t.current = e))
          }),
          (y[15] = t),
          (y[16] = h))
        : (h = y[16])
      let A = w ? -1 : d.tabIndex
      return (
        y[17] !== a || y[18] !== w || y[19] !== r
          ? ((_ = w
              ? a
              : (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)("span", {
                      className: "flex size-8 shrink-0 items-center justify-center ps-1",
                      children: a,
                    }),
                    (0, i.jsx)("span", { children: r }),
                  ],
                })),
            (y[17] = a),
            (y[18] = w),
            (y[19] = r),
            (y[20] = _))
          : (_ = y[20]),
        y[21] !== d ||
        y[22] !== x ||
        y[23] !== A ||
        y[24] !== _ ||
        y[25] !== k ||
        y[26] !== p ||
        y[27] !== j ||
        y[28] !== h ||
        y[29] !== v
          ? ((b = (0, i.jsx)("button", {
              ...d,
              "aria-disabled": k,
              className: p,
              "data-writing-block-email-send-status": x,
              onClick: j,
              ref: h,
              tabIndex: A,
              type: v,
              children: _,
            })),
            (y[21] = d),
            (y[22] = x),
            (y[23] = A),
            (y[24] = _),
            (y[25] = k),
            (y[26] = p),
            (y[27] = j),
            (y[28] = h),
            (y[29] = v),
            (y[30] = b))
          : (b = y[30]),
        b
      )
    })
    function tu(e) {
      e.preventDefault()
    }
    function tm(e) {
      let t,
        n,
        s,
        a,
        r,
        o,
        d,
        c,
        u = (0, l.c)(57),
        {
          bcc: m,
          cc: f,
          emailSendState: p,
          isPersistedSent: h,
          isLoadingSenderAccounts: _,
          onConnect: b,
          onSend: x,
          onUndoSend: v,
          recipient: w,
          selectedSenderAccount: S,
        } = e,
        k = (0, G.A)(),
        I = h || "success_sent" === p.kind,
        j = e4(p),
        A = "sending_in_progress" === p.kind && p.undoAvailable
      if (I) {
        let e, t, n, l
        u[0] !== k
          ? ((e = k.formatMessage({ id: "chatgptConversations.writingBlock.emailSent", defaultMessage: "Sent" })),
            (u[0] = k),
            (u[1] = e))
          : (e = u[1])
        let s = e
        return (
          u[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, i.jsx)(y.I, { "aria-hidden": !1, asset: to.G })), (u[2] = t))
            : (t = u[2]),
          u[3] !== s
            ? ((n = (0, i.jsx)(tc, {
                "aria-label": s,
                className: "border border-transparent bg-text/5 text-default no-drag focus:outline-none",
                icon: t,
                status: "sent",
              })),
              (u[3] = s),
              (u[4] = n))
            : (n = u[4]),
          u[5] !== s || u[6] !== n
            ? ((l = (0, i.jsx)(B.m, { content: s, children: n })), (u[5] = s), (u[6] = n), (u[7] = l))
            : (l = u[7]),
          l
        )
      }
      if (j) {
        let e, t
        if (A) {
          let e, t, n
          u[8] !== k
            ? ((e = k.formatMessage({
                id: "chatgptConversations.writingBlock.emailUndoSend",
                defaultMessage: "Undo send",
              })),
              (u[8] = k),
              (u[9] = e))
            : (e = u[9])
          let l = e
          return (
            u[10] !== p.sendId || u[11] !== v
              ? ((t = () => v(p.sendId)), (u[10] = p.sendId), (u[11] = v), (u[12] = t))
              : (t = u[12]),
            u[13] !== t || u[14] !== l
              ? ((n = (0, i.jsx)(W.$, { color: "secondary", onClick: t, size: "composer", children: l })),
                (u[13] = t),
                (u[14] = l),
                (u[15] = n))
              : (n = u[15]),
            n
          )
        }
        return (
          u[16] !== k
            ? ((e = k.formatMessage({
                id: "chatgptConversations.writingBlock.emailSending",
                defaultMessage: "Sending",
              })),
              (u[16] = k),
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
      if (_) {
        let e, t
        u[20] !== k
          ? ((e = k.formatMessage({
              id: "chatgptConversations.writingBlock.emailAccountsLoading",
              defaultMessage: "Loading email accounts",
            })),
            (u[20] = k),
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
      if (null == S) {
        let e, t
        return (
          u[24] !== k
            ? ((e = k.formatMessage({
                id: "chatgptConversations.writingBlock.emailConnect",
                defaultMessage: "Connect email",
              })),
              (u[24] = k),
              (u[25] = e))
            : (e = u[25]),
          u[26] !== b || u[27] !== e
            ? ((t = (0, i.jsx)(W.$, { color: "secondary", onClick: b, size: "composer", children: e })),
              (u[26] = b),
              (u[27] = e),
              (u[28] = t))
            : (t = u[28]),
          t
        )
      }
      if (S.needsReconnect) {
        let e, t
        return (
          u[29] !== k
            ? ((e = k.formatMessage({
                id: "chatgptConversations.writingBlock.emailReconnect",
                defaultMessage: "Reconnect email",
              })),
              (u[29] = k),
              (u[30] = e))
            : (e = u[30]),
          u[31] !== b || u[32] !== e
            ? ((t = (0, i.jsx)(W.$, { color: "secondary", onClick: b, size: "composer", children: e })),
              (u[31] = b),
              (u[32] = e),
              (u[33] = t))
            : (t = u[33]),
          t
        )
      }
      u[34] !== m || u[35] !== f || u[36] !== w
        ? ((t = e3({ to: e0(w), cc: e0(f), bcc: e0(m) })), (u[34] = m), (u[35] = f), (u[36] = w), (u[37] = t))
        : (t = u[37])
      let C = t
      u[38] !== k || u[39] !== S.label
        ? ((n = k.formatMessage(
            { id: "chatgptConversations.writingBlock.emailSendAs", defaultMessage: "Send as {email}" },
            { email: S.label },
          )),
          (u[38] = k),
          (u[39] = S.label),
          (u[40] = n))
        : (n = u[40])
      let M = n
      u[41] !== k
        ? ((s = k.formatMessage({ id: "chatgptConversations.writingBlock.emailSend", defaultMessage: "Send" })),
          (u[41] = k),
          (u[42] = s))
        : (s = u[42])
      let E = s
      u[43] !== C || u[44] !== M
        ? ((a = C
            ? M
            : (0, i.jsx)(g.A, {
                id: "chatgptConversations.writingBlock.emailSendMissingRecipients",
                defaultMessage: "Add at least one valid email recipient before sending.",
              })),
          (u[43] = C),
          (u[44] = M),
          (u[45] = a))
        : (a = u[45])
      let L = !C
      return (
        u[46] !== x ? ((r = () => x(crypto.randomUUID())), (u[46] = x), (u[47] = r)) : (r = u[47]),
        u[48] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, i.jsx)(y.I, { "aria-hidden": !1, asset: td.S })), (u[48] = o))
          : (o = u[48]),
        u[49] !== M || u[50] !== L || u[51] !== r || u[52] !== E
          ? ((d = (0, i.jsxs)(W.$, {
              "aria-label": M,
              color: "accentAction",
              disabled: L,
              onClick: r,
              size: "toolbar",
              children: [o, E],
            })),
            (u[49] = M),
            (u[50] = L),
            (u[51] = r),
            (u[52] = E),
            (u[53] = d))
          : (d = u[53]),
        u[54] !== a || u[55] !== d
          ? ((c = (0, i.jsx)(B.m, { content: a, children: d })), (u[54] = a), (u[55] = d), (u[56] = c))
          : (c = u[56]),
        c
      )
    }
    var tf = n("oJ0f")
    function tg(e) {
      let t,
        n,
        s,
        a,
        r = (0, l.c)(17),
        {
          accounts: o,
          chevronIcon: d,
          displayMode: c,
          isDisabled: u,
          isSelectable: m,
          onChange: f,
          onOpenChange: g,
          renderMenu: p,
          selectedAccount: h,
          selectorAriaLabel: _,
          senderLabel: b,
        } = e,
        y = "tokenized" === c && m
      r[0] !== o ||
      r[1] !== d ||
      r[2] !== u ||
      r[3] !== f ||
      r[4] !== g ||
      r[5] !== p ||
      r[6] !== h ||
      r[7] !== _ ||
      r[8] !== y
        ? ((t = y
            ? p({
                accounts: o,
                isDisabled: u,
                onChange: f,
                onOpenChange: g,
                selectedAccount: h,
                trigger: (0, i.jsxs)("button", {
                  "aria-label": _,
                  className:
                    "inline-flex min-w-0 items-baseline gap-1 bg-transparent px-0 py-0 text-start leading-8 disabled:cursor-default",
                  disabled: u,
                  type: "button",
                  children: [
                    (0, i.jsx)("span", {
                      className: "truncate text-base leading-8 [color:var(--oai-wb-text-primary)]",
                      children: h.label,
                    }),
                    d,
                  ],
                }),
              })
            : (0, i.jsx)("div", {
                className: "leading-8 break-words [color:var(--oai-wb-text-primary)]",
                children: h.label,
              })),
          (r[0] = o),
          (r[1] = d),
          (r[2] = u),
          (r[3] = f),
          (r[4] = g),
          (r[5] = p),
          (r[6] = h),
          (r[7] = _),
          (r[8] = y),
          (r[9] = t))
        : (t = r[9])
      let x = t
      return (
        r[10] !== b
          ? ((n = (0, i.jsx)("div", { className: "font-medium", children: b })), (r[10] = b), (r[11] = n))
          : (n = r[11]),
        r[12] !== x
          ? ((s = (0, i.jsx)("div", { className: "min-w-0 flex-1", children: x })), (r[12] = x), (r[13] = s))
          : (s = r[13]),
        r[14] !== n || r[15] !== s
          ? ((a = (0, i.jsxs)("div", { className: "flex items-center gap-2", children: [n, s] })),
            (r[14] = n),
            (r[15] = s),
            (r[16] = a))
          : (a = r[16]),
        a
      )
    }
    function tp(e) {
      let t,
        n,
        s,
        a,
        r = (0, l.c)(13),
        { accounts: o, displayMode: d, isDisabled: c, onChange: u, onOpenChange: m, selectedAccount: f } = e,
        p = (0, G.A)()
      r[0] !== p
        ? ((t = p.formatMessage({
            id: "chatgptConversations.writingBlock.email.sender.selector.ariaLabel",
            defaultMessage: "Select the email account to send from",
          })),
          (r[0] = p),
          (r[1] = t))
        : (t = r[1])
      let h = t
      r[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = (0, i.jsx)(g.A, {
            id: "chatgptConversations.writingBlock.email.sender.field.label",
            defaultMessage: "From",
          })),
          (r[2] = n))
        : (n = r[2])
      let _ = n
      r[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = (0, i.jsx)(y.I, { className: "shrink-0 self-center text-default", "aria-hidden": !1, asset: tf.c })),
          (r[3] = s))
        : (s = r[3])
      let b = o.length > 1
      return (
        r[4] !== o || r[5] !== d || r[6] !== c || r[7] !== u || r[8] !== m || r[9] !== f || r[10] !== h || r[11] !== b
          ? ((a = (0, i.jsx)(tg, {
              accounts: o,
              chevronIcon: s,
              displayMode: d,
              isDisabled: c,
              isSelectable: b,
              onChange: u,
              onOpenChange: m,
              renderMenu: th,
              selectedAccount: f,
              selectorAriaLabel: h,
              senderLabel: _,
            })),
            (r[4] = o),
            (r[5] = d),
            (r[6] = c),
            (r[7] = u),
            (r[8] = m),
            (r[9] = f),
            (r[10] = h),
            (r[11] = b),
            (r[12] = a))
          : (a = r[12]),
        a
      )
    }
    function th(e) {
      let { accounts: t, isDisabled: n, onChange: l, onOpenChange: s, selectedAccount: a, trigger: r } = e
      return (0, i.jsx)(V.Ab, {
        align: "start",
        contentWidth: "menuBounded",
        disabled: n,
        onOpenChange: s,
        triggerButton: r,
        children: t.map((e) =>
          (0, i.jsxs)(
            V.ms.Item,
            {
              onSelect: () => l(e.id),
              rightIcon: e.id === a.id ? (0, i.jsx)(y.I, { "aria-hidden": !1, asset: to.G }) : null,
              children: [
                (0, i.jsx)(V.ms.ItemIcon, {
                  size: "md",
                  children:
                    "gmail" === e.provider
                      ? (0, i.jsx)(te.A, { className: "icon-sm" })
                      : (0, i.jsx)(tn.A, { className: "icon-sm" }),
                }),
                e.label,
              ],
            },
            e.id,
          ),
        ),
      })
    }
    let t_ = { pollIntervalMs: 1500, pollMaxAttempts: 5 }
    var tb = n("rvFo"),
      ty = n("GEsy")
    let tx = [],
      tv = "connector_2128aebfecb84f64a069897515042a44",
      tw = "connector_4aaab2856305417b993eca9a216aaf6e"
    async function tS(e) {
      return (
        await h.Request.safeGet("/aip/connectors/{connector_id}", {
          surface: "writing_blocks",
          additionalHeaders: { "OAI-Product-Sku": "CODEX" },
          parameters: { path: { connector_id: e }, query: { include_actions: !0 } },
        })
      ).actions.some((e) => "send_email" === e.name.trim().toLowerCase() && !1 !== e.is_enabled)
    }
    var tk = n("NhqU"),
      tI = n("zLIa"),
      tj = n("OMIV")
    let tA = (0, et.m3)("1594900112-hidden-until", null)
    function tC(e) {
      let t,
        n,
        s,
        a,
        r,
        o,
        d,
        c,
        u,
        p,
        _,
        b,
        x,
        v,
        w,
        S,
        k,
        j,
        A,
        C,
        M = (0, l.c)(42),
        {
          initialFeedbackText: E,
          initialOpen: B,
          messageId: L,
          serverConversationId: N,
          userEditedWritingBlock: T,
          writingBlockId: O,
        } = e,
        P = (0, m.gh)(I.u),
        R = (0, G.A)(),
        D = (0, m._U)(tj.JW, "1594900112"),
        F = (0, m.Ul)(tA),
        [q] = (0, f.useState)(tE),
        [U, H] = (0, f.useState)(void 0 === E ? "" : E),
        [z, $] = (0, f.useState)(void 0 !== B && B),
        K = (0, f.useRef)(null)
      if (
        (M[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = () => () => {
              null != K.current && clearTimeout(K.current)
            }),
            (n = []),
            (M[0] = t),
            (M[1] = n))
          : ((t = M[0]), (n = M[1])),
        (0, f.useEffect)(t, n),
        !D || (null != F && F > q))
      )
        return null
      ;(M[2] !== R
        ? ((s = R.formatMessage({ id: "codex.writingBlock.feedback.trigger", defaultMessage: "What is this?" })),
          (M[2] = R),
          (M[3] = s))
        : (s = M[3]),
        M[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = () => {
              K.current = setTimeout(() => $(!0), 500)
            }),
            (r = () => {
              null != K.current && (clearTimeout(K.current), (K.current = null))
            }),
            (o = (0, i.jsx)(g.A, {
              id: "codex.writingBlock.feedback.visibleTrigger",
              defaultMessage: "What is this?",
            })),
            (d = (0, i.jsx)(y.I, { asset: tk.c })),
            (M[4] = a),
            (M[5] = r),
            (M[6] = o),
            (M[7] = d))
          : ((a = M[4]), (r = M[5]), (o = M[6]), (d = M[7])),
        M[8] !== s
          ? ((c = (0, i.jsxs)(W.$, {
              "aria-label": s,
              color: "ghost",
              size: "compact",
              onMouseEnter: a,
              onMouseLeave: r,
              children: [o, d],
            })),
            (M[8] = s),
            (M[9] = c))
          : (c = M[9]),
        M[10] !== U || M[11] !== R || M[12] !== L || M[13] !== P || M[14] !== N || M[15] !== T || M[16] !== O
          ? ((u = (e) => {
              e.preventDefault()
              let t = U.trim()
              t &&
                (h.Request.safePost("/conversation/message/writing-blocks/feedback", {
                  requestBody: {
                    conversation_id: N,
                    feedback: t,
                    message_id: L,
                    user_edited_writing_block: T,
                    writing_block_id: O,
                  },
                }).catch(tM),
                P.get(eI.Id).success(
                  R.formatMessage({
                    id: "codex.writingBlock.feedback.submitted",
                    defaultMessage: "Your feedback has been submitted",
                  }),
                ),
                P.set(tA, Date.now() + 6048e5),
                H(""),
                $(!1))
            }),
            (M[10] = U),
            (M[11] = R),
            (M[12] = L),
            (M[13] = P),
            (M[14] = N),
            (M[15] = T),
            (M[16] = O),
            (M[17] = u))
          : (u = M[17]),
        M[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, i.jsx)("div", {
              className: "text-sm font-semibold text-default",
              children: (0, i.jsx)(g.A, {
                id: "codex.writingBlock.feedback.title",
                defaultMessage: "This is a writing block, a new feature we\u2019re testing",
              }),
            })),
            (M[18] = p))
          : (p = M[18]),
        M[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, i.jsx)("div", {
              className: "text-xs text-secondary",
              children: (0, i.jsx)(g.A, {
                id: "codex.writingBlock.feedback.description",
                defaultMessage:
                  "Tell us what\u2019s working and what\u2019s not. The more specific the feedback, the better",
              }),
            })),
            (M[19] = _))
          : (_ = M[19]),
        M[20] !== R
          ? ((b = R.formatMessage({
              id: "codex.writingBlock.feedback.inputLabel",
              defaultMessage: "Additional feedback",
            })),
            (M[20] = R),
            (M[21] = b))
          : (b = M[21]),
        M[22] !== R
          ? ((x = R.formatMessage({
              id: "codex.writingBlock.feedback.placeholder",
              defaultMessage: "What did you like or dislike?",
            })),
            (M[22] = R),
            (M[23] = x))
          : (x = M[23]),
        M[24] === Symbol.for("react.memo_cache_sentinel") ? ((v = (e) => H(e.target.value)), (M[24] = v)) : (v = M[24]),
        M[25] !== U || M[26] !== b || M[27] !== x
          ? ((w = (0, i.jsx)(tI.TM, {
              "aria-label": b,
              autoFocus: !0,
              name: "writing-block-feedback",
              placeholder: x,
              rows: 3,
              value: U,
              onChange: v,
            })),
            (M[25] = U),
            (M[26] = b),
            (M[27] = x),
            (M[28] = w))
          : (w = M[28]),
        M[29] !== U ? ((S = U.trim()), (M[29] = U), (M[30] = S)) : (S = M[30]))
      let Y = 0 === S.length
      return (
        M[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = (0, i.jsx)(g.A, { id: "codex.writingBlock.feedback.submit", defaultMessage: "Share feedback" })),
            (M[31] = k))
          : (k = M[31]),
        M[32] !== Y
          ? ((j = (0, i.jsx)(W.$, { disabled: Y, size: "compact", type: "submit", children: k })),
            (M[32] = Y),
            (M[33] = j))
          : (j = M[33]),
        M[34] !== u || M[35] !== w || M[36] !== j
          ? ((A = (0, i.jsxs)("form", { className: "flex flex-col gap-3 p-2", onSubmit: u, children: [p, _, w, j] })),
            (M[34] = u),
            (M[35] = w),
            (M[36] = j),
            (M[37] = A))
          : (A = M[37]),
        M[38] !== z || M[39] !== c || M[40] !== A
          ? ((C = (0, i.jsx)("div", {
              className: "flex justify-end px-3",
              children: (0, i.jsx)(V.Ab, {
                align: "end",
                contentWidth: "menuBounded",
                onOpenChange: $,
                open: z,
                triggerButton: c,
                children: A,
              }),
            })),
            (M[38] = z),
            (M[39] = c),
            (M[40] = A),
            (M[41] = C))
          : (C = M[41]),
        C
      )
    }
    function tM() {}
    function tE() {
      return Date.now()
    }
    var tB = n("D1oM")
    function tL(e) {
      let t,
        n,
        s,
        a,
        r,
        o,
        u,
        m,
        g,
        p,
        h,
        _,
        b,
        y,
        x,
        v,
        w = (0, l.c)(43),
        { ineligibilityReason: S, isDisabled: k, metadata: I, onFollowupClick: j, onSelect: A } = e,
        [C, M] = (0, f.useState)(!1),
        [E, B] = (0, f.useState)(!1),
        L = (0, J.I)()
      if (w[0] !== E || w[1] !== S || w[2] !== k || w[3] !== C || w[4] !== I || w[5] !== L) {
        _ = Symbol.for("react.early_return_sentinel")
        e: {
          if (((a = (0, d.o)(I)), (s = k || C), null != S || E || 0 === a.length || (0, c._F)(I))) {
            _ = null
            break e
          }
          ;((n = K.P.div),
            (m = "relative mb-4 min-w-0 overflow-visible px-3 sm:-mt-6 sm:overflow-hidden"),
            w[18] === Symbol.for("react.memo_cache_sentinel")
              ? ((g = { height: "auto", opacity: 1, y: 0 }), (w[18] = g))
              : (g = w[18]),
            w[19] !== L ? ((p = !L && { height: 0, opacity: 0, y: -8 }), (w[19] = L), (w[20] = p)) : (p = w[20]))
          let e = 0.2 * !L
          ;(w[21] !== e ? ((h = { duration: e, ease: "easeOut" }), (w[21] = e), (w[22] = h)) : (h = w[22]),
            (u =
              "relative min-w-0 px-3 text-base leading-relaxed text-default sm:rounded-b-3xl sm:bg-secondary-soft-alpha sm:pt-4.5 sm:pb-2.5"),
            (t = tB.U),
            (r = "responsive"),
            (o = a.map(tN)))
        }
        ;((w[0] = E),
          (w[1] = S),
          (w[2] = k),
          (w[3] = C),
          (w[4] = I),
          (w[5] = L),
          (w[6] = t),
          (w[7] = n),
          (w[8] = s),
          (w[9] = a),
          (w[10] = r),
          (w[11] = o),
          (w[12] = u),
          (w[13] = m),
          (w[14] = g),
          (w[15] = p),
          (w[16] = h),
          (w[17] = _))
      } else
        ((t = w[6]),
          (n = w[7]),
          (s = w[8]),
          (a = w[9]),
          (r = w[10]),
          (o = w[11]),
          (u = w[12]),
          (m = w[13]),
          (g = w[14]),
          (p = w[15]),
          (h = w[16]),
          (_ = w[17]))
      return _ !== Symbol.for("react.early_return_sentinel")
        ? _
        : (w[23] !== j || w[24] !== A || w[25] !== a
            ? ((b = (e) => {
                ;(j?.(e + 1, a.length),
                  M(!0),
                  A(a[e].prompt).then((e) => {
                    ;(M(!1), e && B(!0))
                  }))
              }),
              (w[23] = j),
              (w[24] = A),
              (w[25] = a),
              (w[26] = b))
            : (b = w[26]),
          w[27] !== t || w[28] !== s || w[29] !== r || w[30] !== o || w[31] !== b
            ? ((y = (0, i.jsx)(t, { layout: r, suggestions: o, disabled: s, onSelect: b })),
              (w[27] = t),
              (w[28] = s),
              (w[29] = r),
              (w[30] = o),
              (w[31] = b),
              (w[32] = y))
            : (y = w[32]),
          w[33] !== y || w[34] !== u
            ? ((x = (0, i.jsx)("div", { className: u, children: y })), (w[33] = y), (w[34] = u), (w[35] = x))
            : (x = w[35]),
          w[36] !== n || w[37] !== x || w[38] !== m || w[39] !== g || w[40] !== p || w[41] !== h
            ? ((v = (0, i.jsx)(n, { className: m, animate: g, initial: p, transition: h, children: x })),
              (w[36] = n),
              (w[37] = x),
              (w[38] = m),
              (w[39] = g),
              (w[40] = p),
              (w[41] = h),
              (w[42] = v))
            : (v = w[42]),
          v)
    }
    function tN(e) {
      let { sourceIndex: t, title: n } = e
      return { key: t, label: n }
    }
    var tT = n("vQRL")
    function tO(e) {
      let t,
        n,
        x,
        B,
        L,
        N,
        T,
        O,
        P,
        F,
        q,
        U,
        W,
        V,
        H,
        z,
        $,
        K,
        Y,
        Z = (0, l.c)(281),
        {
          conversationId: J,
          context: Q,
          editorKey: X,
          emailMetadata: ee,
          serverConversationId: et,
          enableAiTools: en,
          isExpanded: ei,
          isReadOnly: el,
          librarySaveControls: es,
          isStreaming: ea,
          messageId: er,
          copyTurnToClipboardMessageId: eo,
          onBeforeDocumentExport: ed,
          onAskForChanges: ec,
          onEmailMetadataChange: eu,
          onOpenVersionHistory: em,
          onSuggestedFollowup: ef,
          renderFrame: eg,
          showMagicEditAction: ep,
          suppressCopyTurnToClipboardAnalytics: eh,
          suggestedFollowupIneligibilityReason: eb,
          title: ey,
          userEditedWritingBlock: ex,
          variant: ev,
          writingBlockId: ew,
          writingBlockIndex: eS,
        } = e,
        ek = void 0 !== ei && ei,
        ej = void 0 !== el && el,
        eA = void 0 === eo ? er : eo,
        eC = void 0 !== ep && ep,
        eM = void 0 !== ex && ex,
        eE = (0, m.gh)(I.u),
        eB = (0, f.useContext)(p.Gc),
        eL = (0, f.useRef)(null),
        eT = et ?? J
      ;(Z[0] !== eT || Z[1] !== ea || Z[2] !== eB || Z[3] !== eE || Z[4] !== ev || Z[5] !== ew
        ? ((t = () => {
            let e = eL.current
            if ("slides" === ev && eB && !ea && null != e && null != eT && null != ew) {
              var t, n
              let i, l, s, a, o, d
              return (
                (t = e),
                (n = () => {
                  ;(0, k.yy)(eE, r.kD, { conversationId: eT, writingBlockId: ew })
                }),
                (i = t.ownerDocument),
                (l = !1),
                (s = !1),
                (a = () => {
                  ;((s = !0), d.disconnect(), i.removeEventListener("visibilitychange", o))
                }),
                (o = () => {
                  !s && l && "visible" === i.visibilityState && t.isConnected && (a(), n())
                }),
                (d = new IntersectionObserver((e) => {
                  ;((l = e.some((e) => e.isIntersecting)), o())
                })).observe(t),
                i.addEventListener("visibilitychange", o),
                a
              )
            }
          }),
          (n = [eT, ea, eB, eE, ev, ew]),
          (Z[0] = eT),
          (Z[1] = ea),
          (Z[2] = eB),
          (Z[3] = eE),
          (Z[4] = ev),
          (Z[5] = ew),
          (Z[6] = t),
          (Z[7] = n))
        : ((t = Z[6]), (n = Z[7])),
        (0, f.useEffect)(t, n))
      let eP = (0, v.Tq)(),
        eR = (0, j.Ou)("3737772469")
      Z[8] === Symbol.for("react.memo_cache_sentinel") ? ((x = { disableExposureLog: !0 }), (Z[8] = x)) : (x = Z[8])
      let eD = (0, j.Ou)("3408900824", x),
        eF = (0, m.Ul)(S.x2),
        eG = (0, j.Zj)("3220935388") || eR.get("inline_header_library_enabled", !1),
        eq = (0, m.Ul)(w.$7),
        eW = (0, f.useRef)(!1),
        eV = (0, f.useRef)(void 0)
      ;(Z[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = () => () => eV.current?.()), (B = []), (Z[9] = B), (Z[10] = L))
        : ((B = Z[9]), (L = Z[10])),
        (0, f.useEffect)(L, B))
      let [eH, e$] = (0, f.useState)(!1),
        [eK, eZ] = (0, f.useState)(!1),
        { renderView: e1, state: e6 } = Q,
        e9 = null != X && !ea && !ej
      ;(Z[11] !== er || Z[12] !== eE || Z[13] !== et
        ? ((N = (e) => {
            null != et && null != er && (0, k.yy)(eE, a.Aws, { conversationId: et, messageId: er, provider: e })
          }),
          (Z[11] = er),
          (Z[12] = eE),
          (Z[13] = et),
          (Z[14] = N))
        : (N = Z[14]),
        Z[15] !== ee ||
        Z[16] !== e9 ||
        Z[17] !== eu ||
        Z[18] !== e6.displayedContent ||
        Z[19] !== N ||
        Z[20] !== ev ||
        Z[21] !== ew
          ? ((T = {
              bodyMarkdown: e6.displayedContent,
              emailMetadata: ee,
              isPersistedAndComplete: e9,
              onEmailMetadataChange: eu,
              onOpenEmail: N,
              variant: ev,
              writingBlockId: ew,
            }),
            (Z[15] = ee),
            (Z[16] = e9),
            (Z[17] = eu),
            (Z[18] = e6.displayedContent),
            (Z[19] = N),
            (Z[20] = ev),
            (Z[21] = ew),
            (Z[22] = T))
          : (T = Z[22]))
      let te = (function (e) {
          let t,
            n,
            s,
            a,
            r,
            o,
            d,
            c,
            u,
            g,
            p = (0, l.c)(60),
            {
              bodyMarkdown: _,
              emailMetadata: b,
              isPersistedAndComplete: y,
              onEmailMetadataChange: x,
              onOpenEmail: v,
              variant: w,
              writingBlockId: S,
            } = e,
            k = "email" === w,
            j = b?.bcc ?? "",
            C = b?.cc ?? "",
            M = k && y,
            E = b?.writingBlockMetadata,
            B = b?.recipient ?? "",
            L = b?.subject ?? "",
            N = k ? S : void 0
          p[0] !== _ ||
          p[1] !== x ||
          p[2] !== j ||
          p[3] !== C ||
          p[4] !== M ||
          p[5] !== E ||
          p[6] !== B ||
          p[7] !== L ||
          p[8] !== N
            ? ((t = {
                bcc: j,
                bodyMarkdown: _,
                cc: C,
                enabled: M,
                metadata: E,
                onMetadataChange: x,
                recipient: B,
                subject: L,
                writingBlockId: N,
              }),
              (p[0] = _),
              (p[1] = x),
              (p[2] = j),
              (p[3] = C),
              (p[4] = M),
              (p[5] = E),
              (p[6] = B),
              (p[7] = L),
              (p[8] = N),
              (p[9] = t))
            : (t = p[9])
          let {
              emailAccounts: T,
              emailSendState: O,
              getContactsForQuery: P,
              isLoadingSenderAccounts: F,
              searchContacts: q,
              selectedSenderAccount: U,
              selectSenderAccount: W,
              sendEmail: V,
              undoEmailSend: H,
            } = (function ({
              bcc: e,
              bodyMarkdown: t,
              cc: n,
              enabled: i,
              metadata: s,
              onMetadataChange: a,
              recipient: r,
              subject: o,
              writingBlockId: d,
            }) {
              let c,
                u,
                g = (0, G.A)(),
                p = (0, m.gh)(I.u),
                { data: _, isLoading: b } = (0, D.I)({
                  queryKey: ["chatgpt", "writing-block-email-accounts"],
                  queryFn: async () => {
                    let [e, t, n] = await Promise.all([
                        h.Request.safePost("/aip/connectors/links/list_accessible", {
                          surface: "writing_blocks",
                          requestBody: { principals: [], link_refresh_strategy: "BLOCKING" },
                        }),
                        tS(tv).catch(() => !1),
                        tS(tw).catch(() => !1),
                      ]),
                      i = t
                        ? e.links.filter((e) => e.connector_id === tv).map((e) => ({ link: e, provider: "gmail" }))
                        : [],
                      l = n
                        ? e.links.filter((e) => e.connector_id === tw).map((e) => ({ link: e, provider: "outlook" }))
                        : []
                    return {
                      contactsLinks: e.links.filter(
                        (e) => "connector_c0f748249d6a42aea4b00fd375570ded" === e.connector_id,
                      ),
                      emailAccounts: [...i, ...l]
                        .flatMap(({ link: e, provider: t }) =>
                          null != e && e.scopes.some((e) => e.trim().toLowerCase() === tl[t])
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
                            l = i || e.ownerName?.trim() || e.name.trim() || void 0
                          return null == l
                            ? []
                            : [{ id: e.id, label: l, needsReconnect: t, ownerEmail: i, provider: n }]
                        }),
                    }
                  },
                  enabled: i,
                  retry: !1,
                  staleTime: tb.D.FIVE_MINUTES,
                }),
                y = _?.emailAccounts,
                x = "string" == typeof (c = s?.[eQ]) && c.length > 0 ? c : null,
                v = e5(s),
                w = "string" == typeof (u = s?.[eX]) ? u : void 0,
                S = e7(s),
                k = y?.find((e) => e.id === w) ?? y?.find((e) => e.provider === S?.provider) ?? y?.[0],
                j = (0, A.K)((e) => {
                  a?.(e)
                }),
                C = (0, A.K)((e) => {
                  j({ [eX]: e })
                }),
                { getContactsForQuery: M, searchContacts: E } = (function (e) {
                  let t,
                    n,
                    i,
                    s,
                    a,
                    r,
                    o,
                    d = (0, l.c)(23),
                    { contactsLinkId: c, enabled: u } = e,
                    [m, g] = (0, f.useState)("")
                  d[0] !== m ? ((t = m.trim()), (d[0] = m), (d[1] = t)) : (t = d[1])
                  let p = t,
                    _ = (0, ty.o)(p, 200)
                  d[2] !== c || d[3] !== _ || d[4] !== u
                    ? ((n = u && null != c && _.length > 0 && !(0, eJ.SW)(_)),
                      (d[2] = c),
                      (d[3] = _),
                      (d[4] = u),
                      (d[5] = n))
                    : (n = d[5])
                  let b = n
                  ;(d[6] !== c || d[7] !== _
                    ? ((i =
                        null == c
                          ? R.hT
                          : () =>
                              (async function (e, t) {
                                let n = await h.Request.safePost("/aip/connectors/google_contacts/search_contacts", {
                                  surface: "writing_blocks",
                                  requestBody: { limit: 10, link_id: e, query: t },
                                })
                                return (0, eJ.jy)(n.contacts)
                              })(c, _)),
                      (d[6] = c),
                      (d[7] = _),
                      (d[8] = i))
                    : (i = d[8]),
                    d[9] !== c || d[10] !== _
                      ? ((s = ["chatgpt", "writing-block-email-contacts", c, _]), (d[9] = c), (d[10] = _), (d[11] = s))
                      : (s = d[11]),
                    d[12] !== b || d[13] !== i || d[14] !== s
                      ? ((a = { enabled: b, queryFn: i, queryKey: s, retry: !1, staleTime: tb.D.FIVE_MINUTES }),
                        (d[12] = b),
                        (d[13] = i),
                        (d[14] = s),
                        (d[15] = a))
                      : (a = d[15]))
                  let { data: y } = (0, D.I)(a)
                  d[16] === Symbol.for("react.memo_cache_sentinel")
                    ? ((r = (e) => {
                        g(e)
                      }),
                      (d[16] = r))
                    : (r = d[16])
                  let x = r
                  return (
                    d[17] !== y || d[18] !== c || d[19] !== _ || d[20] !== u || d[21] !== p
                      ? ((o = {
                          getContactsForQuery: (e) => {
                            let t = e.trim()
                            return u && null != c && t.length > 0 && t === p && _ === p && !(0, eJ.SW)(t)
                              ? (y ?? tx)
                              : tx
                          },
                          searchContacts: x,
                        }),
                        (d[17] = y),
                        (d[18] = c),
                        (d[19] = _),
                        (d[20] = u),
                        (d[21] = p),
                        (d[22] = o))
                      : (o = d[22]),
                    o
                  )
                })({
                  contactsLinkId: (0, eJ.m1)(
                    (_?.contactsLinks ?? []).map((e) => ({ id: e.id, ownerEmail: e.owner_profile?.email })),
                    k,
                  ),
                  enabled: i,
                }),
                B = (0, A.K)((e) => {
                  p.get(eI.Id).danger(
                    "undo_failed" === e.kind
                      ? g.formatMessage({
                          id: "chatgptConversations.writingBlock.emailUndoFailed",
                          defaultMessage: "Couldn't undo sending this email",
                        })
                      : g.formatMessage({
                          id: "chatgptConversations.writingBlock.emailSendFailed",
                          defaultMessage: "Couldn't send this email",
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
                  sendEmail: L,
                  state: N,
                  undoEmailSend: T,
                } = (function (e) {
                  let t = (0, f.useRef)(e)
                  t.current = e
                  let [n, i] = (0, f.useState)({ kind: "idle" }),
                    l = (0, f.useRef)(n)
                  ;(0, f.useEffect)(() => {
                    l.current = n
                  }, [n])
                  let s = (0, f.useCallback)((e, n = {}) => {
                      t.current.onEvent?.({ name: e, metadata: n })
                    }, []),
                    a = (0, f.useCallback)((e) => {
                      t.current.onFailure?.(e)
                    }, []),
                    r = (0, f.useCallback)((e, n) => {
                      t.current.onSendIdChange?.(e, n)
                    }, [])
                  ;(0, f.useEffect)(() => {
                    e.isAvailable &&
                      !e.emailVersionSent &&
                      null != e.initialSendId &&
                      i((t) =>
                        "idle" === t.kind
                          ? { kind: "polling_final", sendId: e.initialSendId, pollSource: "initial_send_id" }
                          : t,
                      )
                  }, [e.emailVersionSent, e.initialSendId, e.isAvailable])
                  let o = (0, f.useCallback)((e) => {
                      let n = t.current,
                        s = n.selectedSenderAccount
                      !n.isAvailable ||
                        null == s ||
                        n.emailVersionSent ||
                        e4(l.current) ||
                        i((t) =>
                          e4(t)
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
                    d = (0, f.useCallback)(
                      (e) => {
                        let n = t.current
                        if (!n.isAvailable) return
                        let r = l.current,
                          o = (n.now ?? Date.now)()
                        if (
                          (s("undo_clicked", {
                            send_id: e,
                            client_now_ms: String(o),
                            document_visibility_state: n.getVisibilityState?.() ?? "unknown",
                            undo_available: "sending_in_progress" === r.kind ? String(r.undoAvailable) : "false",
                            unsend_expires_at_ms:
                              "sending_in_progress" === r.kind && null != r.unsendExpiresAtMs
                                ? String(Math.round(r.unsendExpiresAtMs))
                                : "unknown",
                            undo_remaining_ms:
                              "sending_in_progress" === r.kind && null != r.unsendExpiresAtMs
                                ? String(Math.round(r.unsendExpiresAtMs - o))
                                : "unknown",
                          }),
                          "polling_final" === r.kind)
                        ) {
                          ;(s("undo_failed", { send_id: e, reason_code: "undo_not_allowed_in_polling_final" }),
                            a({ kind: "undo_failed" }))
                          return
                        }
                        if ("sending_in_progress" !== r.kind) {
                          ;(s("undo_failed", { send_id: e, reason_code: "undo_not_in_progress_state" }),
                            a({ kind: "undo_failed" }))
                          return
                        }
                        if (r.sendId !== e) {
                          ;(s("undo_failed", { send_id: r.sendId, reason_code: "undo_send_id_mismatch" }),
                            a({ kind: "undo_failed" }))
                          return
                        }
                        r.undoRequestInFlight ||
                          i((t) =>
                            "sending_in_progress" !== t.kind || t.sendId !== e || t.undoRequestInFlight
                              ? t
                              : { ...t, undoRequested: !0, undoRequestInFlight: t.undoAvailable },
                          )
                      },
                      [s, a],
                    ),
                    c = "sending_in_progress" === n.kind ? n.clientSendId : null
                  ;(0, f.useEffect)(() => {
                    let e = l.current
                    if (
                      null == c ||
                      "sending_in_progress" !== e.kind ||
                      e.clientSendId !== c ||
                      e.undoAvailable ||
                      null != e.unsendExpiresAtMs
                    )
                      return
                    r(e.sendId, e.selectedSenderAccount.id)
                    let n = !1,
                      o = (t, n) => {
                        "sending_in_progress" === l.current.kind &&
                          l.current.clientSendId === c &&
                          (i({ kind: "idle" }),
                          r(null),
                          s("send_failed", {
                            send_id: e.sendId,
                            sender_provider: e.selectedSenderAccount.provider,
                            sender_link_id: e.selectedSenderAccount.id,
                            reason_code: t,
                            ...(null == n ? {} : { error_message: n }),
                          }),
                          a({ kind: "send_failed", detail: t, ...(null == n ? {} : { errorMessage: n }) }))
                      }
                    return (
                      (async () => {
                        let d = (function ({
                          sendId: e,
                          selectedSenderAccount: t,
                          recipient: n,
                          cc: i,
                          bcc: l,
                          subject: s,
                          body: a,
                          sourceId: r,
                          sourceType: o,
                          emailAction: d,
                        }) {
                          let c = e0(n),
                            u = e0(i),
                            m = e0(l)
                          return null != d && d.provider !== t.provider
                            ? {
                                status: "error",
                                error: "provider_mismatch",
                                errorMessage: `Selected ${t.provider} sender cannot reply to a ${d.provider} message.`,
                              }
                            : !(function ({ to: e, cc: t, bcc: n }) {
                                  return e2(e) || e2(t) || e2(n)
                                })({ to: n, cc: i, bcc: l })
                              ? e3({ to: c, cc: u, bcc: m })
                                ? {
                                    status: "success",
                                    request: {
                                      send_id: e,
                                      link_id: t.id,
                                      to: c,
                                      cc: u,
                                      bcc: m,
                                      subject: s,
                                      body: a,
                                      ...(null == r ? {} : { source_id: r }),
                                      ...(null == o ? {} : { source_type: o }),
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
                        if ("error" === d.status) return void o(d.error, d.errorMessage)
                        let u = t.current,
                          m = u.monotonicNow ?? (() => ("u" < typeof performance ? Date.now() : performance.now())),
                          f = m(),
                          g = await u.transport.sendEmail(d.request)
                        if (n) return
                        if ("error" === g.status) return void o("send_request_error", g.errorMessage)
                        let p = (t.current.now ?? Date.now)(),
                          h = g.data.sendId,
                          _ = Date.parse(g.data.unsendExpiresAt)
                        ;(s("send_response_received", {
                          send_id: h,
                          send_request_elapsed_ms: String(Math.round(m() - f)),
                          unsend_expires_at: g.data.unsendExpiresAt,
                          unsend_expires_at_ms: String(Math.round(_)),
                          undo_remaining_ms: String(Math.round(_ - p)),
                          client_now_ms: String(p),
                        }),
                          h !== e.clientSendId &&
                            s("send_id_mismatch", {
                              send_id: e.sendId,
                              reason_code: "send_id_mismatch_client_vs_server",
                              client_send_id: e.clientSendId,
                              server_send_id: h,
                            }))
                        let b = !Number.isFinite(_) || _ <= p
                        b &&
                          "sending_in_progress" === l.current.kind &&
                          l.current.clientSendId === c &&
                          l.current.undoRequested &&
                          a({ kind: "undo_failed" })
                        let y = l.current
                        "sending_in_progress" === y.kind &&
                          y.clientSendId === c &&
                          (b
                            ? i({ kind: "polling_final", sendId: h, pollSource: "active_send" })
                            : (i({
                                ...y,
                                sendId: h,
                                undoAvailable: !0,
                                undoRequestInFlight: y.undoRequested || y.undoRequestInFlight,
                                unsendExpiresAtMs: _,
                              }),
                              r(h, e.selectedSenderAccount.id)))
                      })(),
                      () => {
                        n = !0
                      }
                    )
                  }, [c, s, a, r])
                  let u =
                    "sending_in_progress" === n.kind && n.undoRequested && n.undoAvailable && n.undoRequestInFlight
                      ? n.sendId
                      : null
                  ;(0, f.useEffect)(() => {
                    if (null == u) return
                    let e = !1
                    return (
                      (async () => {
                        let n = await t.current.transport.unsendEmail({ send_id: u })
                        e ||
                          "sending_in_progress" !== l.current.kind ||
                          l.current.sendId !== u ||
                          ("success" === n.status
                            ? (s("undo_success", { send_id: u }), i({ kind: "success_unsent" }), r(null))
                            : (s("undo_failed", {
                                send_id: u,
                                reason_code: "undo_request_error",
                                ...(null == n.errorMessage ? {} : { error_message: n.errorMessage }),
                              }),
                              i({ kind: "polling_final", sendId: u, pollSource: "active_send" }),
                              a({ kind: "undo_failed" })))
                      })(),
                      () => {
                        e = !0
                      }
                    )
                  }, [s, a, r, u])
                  let m =
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
                  ;(0, f.useEffect)(() => {
                    if (null != m && null != g) {
                      var e, n
                      let l
                      return (
                        (e = g),
                        (n = t.current.now ?? Date.now),
                        (l = setTimeout(
                          () => {
                            i((e) =>
                              "sending_in_progress" !== e.kind || e.sendId !== m || e.undoRequestInFlight
                                ? e
                                : { kind: "polling_final", sendId: m, pollSource: "active_send" },
                            )
                          },
                          Math.max(e - n(), 0),
                        )),
                        () => clearTimeout(l)
                      )
                    }
                  }, [m, g])
                  let p = "polling_final" === n.kind ? n.sendId : null,
                    h = "polling_final" === n.kind ? n.pollSource : null
                  return ((0, f.useEffect)(() => {
                    if (null == p) return
                    let e = t.current.pollingTiming ?? t_,
                      n = !1
                    return (
                      (async () => {
                        let o = await (async () => {
                          for (let i = 0; i < e.pollMaxAttempts; i++) {
                            if (n) return { outcome: "cancelled" }
                            let l = await t.current.transport.getEmailStatus({ send_id: p })
                            if (
                              (s("poll_attempt", {
                                send_id: p,
                                attempt_number: String(i + 1),
                                poll_source: h ?? "null",
                                request_status: l.requestStatus,
                                ...("success" === l.requestStatus ? { email_status: l.emailStatus } : {}),
                                ...(null == l.errorMessage ? {} : { error_message: l.errorMessage }),
                              }),
                              "success" === l.requestStatus)
                            ) {
                              if ("sent" === l.emailStatus)
                                return {
                                  outcome: "send_success",
                                  ...(null == l.sentEmail ? {} : { sentEmail: l.sentEmail }),
                                }
                              if ("send_failed" === l.emailStatus)
                                return {
                                  outcome: "send_failed",
                                  reasonCode: "poll_status_send_failed",
                                  errorMessage: l.errorMessage,
                                }
                              if ("unsent" === l.emailStatus) return { outcome: "undo_success" }
                            }
                            await (function (e) {
                              return new Promise((t) => setTimeout(t, e))
                            })(e.pollIntervalMs)
                          }
                          return { outcome: "send_failed", reasonCode: "poll_exhausted" }
                        })()
                        "cancelled" !== o.outcome &&
                          "polling_final" === l.current.kind &&
                          l.current.sendId === p &&
                          ("send_success" === o.outcome
                            ? (s("send_success", { send_id: p }),
                              i({ kind: "idle" }),
                              r(null),
                              t.current.markEmailVersionSent?.(o.sentEmail))
                            : "send_failed" === o.outcome
                              ? (s("send_failed", {
                                  send_id: p,
                                  reason_code: o.reasonCode,
                                  ...(null == o.errorMessage ? {} : { error_message: o.errorMessage }),
                                }),
                                i({ kind: "idle" }),
                                r(null),
                                a({
                                  kind: "send_failed",
                                  ...(null == o.errorMessage ? {} : { errorMessage: o.errorMessage }),
                                }))
                              : (s("undo_success", { send_id: p }), i({ kind: "success_unsent" }), r(null)))
                      })(),
                      () => {
                        n = !0
                      }
                    )
                  }, [s, h, a, r, p]),
                  e.isAvailable)
                    ? { sendEmail: o, undoEmailSend: d, state: e.emailVersionSent ? { kind: "success_sent" } : n }
                    : { sendEmail: () => void 0, undoEmailSend: () => void 0, state: { kind: "idle" } }
                })({
                  isAvailable: i && (null != k || null != x),
                  selectedSenderAccount: k,
                  recipient: r,
                  cc: n,
                  bcc: e,
                  subject: o,
                  body: i ? ts(t) : "",
                  emailVersionSent: v,
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
                  sourceId: d,
                  sourceType: null == d ? void 0 : "email_writing_block",
                  emailAction: S,
                  markEmailVersionSent: () => {
                    j({ isSent: !0, [eQ]: null })
                  },
                  onSendIdChange: (e, t) => {
                    j({ [eQ]: e, ...(null == t ? {} : { [eX]: t }) })
                  },
                  onFailure: B,
                  getVisibilityState: () => document.visibilityState,
                })
              return {
                emailAccounts: y,
                emailSendState: N,
                getContactsForQuery: M,
                isLoadingSenderAccounts: b,
                searchContacts: E,
                selectedSenderAccount: k,
                selectSenderAccount: C,
                sendEmail: L,
                undoEmailSend: T,
              }
            })(t),
            z = b?.writingBlockMetadata
          p[10] !== z ? ((n = e5(z)), (p[10] = z), (p[11] = n)) : (n = p[11])
          let $ = n
          if (p[12] !== $ || p[13] !== O || p[14] !== k) {
            var K
            ;((s = k && ($ || e4((K = O)) || "success_sent" === K.kind)),
              (p[12] = $),
              (p[13] = O),
              (p[14] = k),
              (p[15] = s))
          } else s = p[15]
          let Y = s,
            Z = y && !Y,
            J = b?.writingBlockMetadata
          p[16] !== J ? ((a = (0, eJ.r6)(J)), (p[16] = J), (p[17] = a)) : (a = p[17])
          let Q = a
          p[18] !== x || p[19] !== Q
            ? ((r = (e, t, n, i) => {
                i &&
                  x?.({
                    contacts: (0, eJ.py)({
                      recipient: "recipient" === e ? n : (Q.recipient ?? []),
                      cc: "cc" === e ? n : (Q.cc ?? []),
                      bcc: "bcc" === e ? n : (Q.bcc ?? []),
                    }),
                  })
              }),
              (p[18] = x),
              (p[19] = Q),
              (p[20] = r))
            : (r = p[20])
          let X = r
          p[21] !== _ ||
          p[22] !== $ ||
          p[23] !== b?.bcc ||
          p[24] !== b?.cc ||
          p[25] !== b?.recipient ||
          p[26] !== b?.subject ||
          p[27] !== v
            ? ((o = (e) => {
                ;($ || v(e),
                  (0, ez.E0)({
                    href: (0, eJ.vy)({
                      bcc: b?.bcc ?? "",
                      body: ts(_),
                      cc: b?.cc ?? "",
                      includeCcAndBcc: !0,
                      provider: e,
                      recipient: b?.recipient ?? "",
                      subject: b?.subject ?? "",
                    }),
                    initiator: "open_in_browser_bridge",
                    openTarget: "external-browser",
                  }))
              }),
              (p[21] = _),
              (p[22] = $),
              (p[23] = b?.bcc),
              (p[24] = b?.cc),
              (p[25] = b?.recipient),
              (p[26] = b?.subject),
              (p[27] = v),
              (p[28] = o))
            : (o = p[28])
          let ee = o
          p[29] !== b?.writingBlockMetadata || p[30] !== U?.provider
            ? ((d = () => {
                let e = U?.provider ?? e7(b?.writingBlockMetadata)?.provider ?? "gmail"
                ;(0, ez.E0)({
                  href: (0, e8.Cj)(
                    { id: "outlook" === e ? tw : tv, installUrl: null, name: "outlook" === e ? "Outlook" : "Gmail" },
                    { connectorId: "outlook" === e ? tw : tv, oauthReferrer: "writing_email" },
                  ),
                  initiator: "open_in_browser_bridge",
                  openTarget: "external-browser",
                })
              }),
              (p[29] = b?.writingBlockMetadata),
              (p[30] = U?.provider),
              (p[31] = d))
            : (d = p[31])
          let et = d
          return (
            p[32] !== $ ||
            p[33] !== b?.bcc ||
            p[34] !== b?.cc ||
            p[35] !== b?.recipient ||
            p[36] !== O ||
            p[37] !== et ||
            p[38] !== ee ||
            p[39] !== k ||
            p[40] !== F ||
            p[41] !== y ||
            p[42] !== U ||
            p[43] !== V ||
            p[44] !== H
              ? ((c = k
                  ? (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(ti, { disabled: !y, onOpen: ee }),
                        (0, i.jsx)(tm, {
                          bcc: b?.bcc ?? "",
                          cc: b?.cc ?? "",
                          emailSendState: O,
                          isPersistedSent: $,
                          isLoadingSenderAccounts: F,
                          onConnect: et,
                          onSend: V,
                          onUndoSend: H,
                          recipient: b?.recipient ?? "",
                          selectedSenderAccount: U,
                        }),
                      ],
                    })
                  : null),
                (p[32] = $),
                (p[33] = b?.bcc),
                (p[34] = b?.cc),
                (p[35] = b?.recipient),
                (p[36] = O),
                (p[37] = et),
                (p[38] = ee),
                (p[39] = k),
                (p[40] = F),
                (p[41] = y),
                (p[42] = U),
                (p[43] = V),
                (p[44] = H),
                (p[45] = c))
              : (c = p[45]),
            p[46] !== T ||
            p[47] !== P ||
            p[48] !== X ||
            p[49] !== Z ||
            p[50] !== k ||
            p[51] !== Q ||
            p[52] !== q ||
            p[53] !== W ||
            p[54] !== U
              ? ((u = k
                  ? {
                      contacts: Q,
                      getContactsForQuery: P,
                      onRecipientMetadataChange: X,
                      onSearch: q,
                      renderSender: (e) => {
                        let { displayMode: t, isCollapsed: n, onOpenChange: l } = e
                        return null != U && null != T && (T.length > 1 || !n)
                          ? (0, i.jsx)(tp, {
                              accounts: T,
                              displayMode: t,
                              isDisabled: !Z,
                              onChange: W,
                              onOpenChange: l,
                              selectedAccount: U,
                            })
                          : null
                      },
                    }
                  : void 0),
                (p[46] = T),
                (p[47] = P),
                (p[48] = X),
                (p[49] = Z),
                (p[50] = k),
                (p[51] = Q),
                (p[52] = q),
                (p[53] = W),
                (p[54] = U),
                (p[55] = u))
              : (u = p[55]),
            p[56] !== Y || p[57] !== c || p[58] !== u
              ? ((g = { actions: c, emailRowsCapabilities: u, isLocked: Y }),
                (p[56] = Y),
                (p[57] = c),
                (p[58] = u),
                (p[59] = g))
              : (g = p[59]),
            g
          )
        })(T),
        tt = "slides" === ev && (eH || ee?.writingBlockMetadata?.artifact_generation_completed === !0),
        tn = e9 && !te.isLocked && !tt && !es?.isSaving,
        tr = ee?.writingBlockMetadata
      Z[23] !== tr ? ((O = (0, d.o)(tr)), (Z[23] = tr), (Z[24] = O)) : (O = Z[24])
      let to = O.length,
        td = ee?.writingBlockMetadata
      Z[25] !== td ? ((P = (0, c._F)(td)), (Z[25] = td), (Z[26] = P)) : (P = Z[26])
      let tc = P
      ;(Z[27] !== te.isLocked ||
      Z[28] !== to ||
      Z[29] !== tc ||
      Z[30] !== ek ||
      Z[31] !== ea ||
      Z[32] !== er ||
      Z[33] !== eE ||
      Z[34] !== et ||
      Z[35] !== eb ||
      Z[36] !== ev ||
      Z[37] !== ew
        ? ((F = () => {
            if (
              eW.current ||
              ek ||
              0 === to ||
              ea ||
              null == er ||
              null == et ||
              "conversation_unavailable" === eb ||
              "message_not_found" === eb
            )
              return
            eW.current = !0
            let e = null == eb && !tc && !te.isLocked,
              t = te.isLocked
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
                  })(eb)
            ;(0, k.yy)(eE, a.zQG, {
              conversationId: et,
              followupCount: (0, s.At)(to),
              messageId: er,
              notShownReason: e ? void 0 : t,
              outcome: e
                ? "CHATGPT_WRITING_BLOCK_SUGGESTED_FOLLOWUPS_RENDER_OUTCOME_TYPE_SHOWN"
                : "CHATGPT_WRITING_BLOCK_SUGGESTED_FOLLOWUPS_RENDER_OUTCOME_TYPE_NOT_SHOWN",
              variant: ev,
              writingBlockId: ew,
            })
          }),
          (q = [te.isLocked, to, tc, ek, ea, er, eE, et, eb, ev, ew]),
          (Z[27] = te.isLocked),
          (Z[28] = to),
          (Z[29] = tc),
          (Z[30] = ek),
          (Z[31] = ea),
          (Z[32] = er),
          (Z[33] = eE),
          (Z[34] = et),
          (Z[35] = eb),
          (Z[36] = ev),
          (Z[37] = ew),
          (Z[38] = F),
          (Z[39] = q))
        : ((F = Z[38]), (q = Z[39])),
        (0, f.useEffect)(F, q))
      let tu = en ?? null != et
      ;(Z[40] !== er || Z[41] !== eE || Z[42] !== et || Z[43] !== ev || Z[44] !== ew
        ? ((U = (e) => {
            let { checked: t } = e
            null != et &&
              null != er &&
              (0, k.yy)(eE, a.OMo, {
                checked: String(t),
                messageId: er,
                metricValue: (0, s.At)(+!!t),
                threadId: et,
                variant: ev,
                writingBlockId: ew,
              })
          }),
          (Z[40] = er),
          (Z[41] = eE),
          (Z[42] = et),
          (Z[43] = ev),
          (Z[44] = ew),
          (Z[45] = U))
        : (U = Z[45]),
        Z[46] !== ee || Z[47] !== eu || Z[48] !== e6 || Z[49] !== ev
          ? ((W = (e, t, n) => {
              if (null == eu) return !1
              let i = "email" === ev && ee?.subject != null ? { type: "email", subject: ee.subject } : void 0,
                l = (0, c.zl)(ee?.writingBlockMetadata, e, t)
              if (null == l && null != n) {
                let s = (0, c.I$)(ee?.writingBlockMetadata),
                  a = n.primaryOption ? [{ ...n.primaryOption, variant: i ?? n.primaryOption.variant }, ...s] : s
                if (e.index !== a.length || e.index < 1 || a.some((t) => t.id === e.id)) return !1
                l = { options: [...a, { id: e.id, label: e.id, content: t }] }
              }
              return (
                null != l && null != i && (l = (0, c.k$)(l, e, i.subject)),
                null != l && (eu({ ...l, [c.e4]: e.id, [c.uV]: !0 }), e6.selectToneSection(e.id), !0)
              )
            }),
            (Z[46] = ee),
            (Z[47] = eu),
            (Z[48] = e6),
            (Z[49] = ev),
            (Z[50] = W))
          : (W = Z[50]),
        Z[51] !== tn ||
        Z[52] !== er ||
        Z[53] !== et ||
        Z[54] !== eC ||
        Z[55] !== e6.editorView ||
        Z[56] !== e6.generatePluginState ||
        Z[57] !== tu ||
        Z[58] !== U ||
        Z[59] !== W ||
        Z[60] !== ev ||
        Z[61] !== ew ||
        Z[62] !== eS
          ? ((V = {
              editorView: e6.editorView,
              enableAiTools: tu,
              generatePluginState: e6.generatePluginState,
              isEditable: tn,
              messageId: er,
              onTaskCheckboxToggled: U,
              onWriteLikeMeResult: W,
              serverConversationId: et,
              showMagicEditAction: eC,
              variant: ev,
              writingBlockId: ew,
              writingBlockIndex: eS,
            }),
            (Z[51] = tn),
            (Z[52] = er),
            (Z[53] = et),
            (Z[54] = eC),
            (Z[55] = e6.editorView),
            (Z[56] = e6.generatePluginState),
            (Z[57] = tu),
            (Z[58] = U),
            (Z[59] = W),
            (Z[60] = ev),
            (Z[61] = ew),
            (Z[62] = eS),
            (Z[63] = V))
          : (V = Z[63]))
      let {
          cancelPendingAiRequests: tf,
          createEditor: tg,
          editorOverlays: th,
          editorRootRef: tk,
          hasPendingAiEdits: tI,
          headerMagicEditAction: tj,
          isGenerateInputOpen: tA,
          isHeaderComposerOpen: tM,
          isHeaderInteractionDisabled: tE,
          isHistoryInteractionDisabled: tB,
          isEditorInteractionDisabled: tN,
          isWriteLikeMeSubmitting: tO,
          magicEdit: tF,
          onEditSelection: tG,
          onEditorKeyDownCapture: tq,
          onEditorPointerDownCapture: tU,
          onWriteLikeMeAction: tW,
          previewEngine: tV,
          resetAiTools: tH,
          resetGeneratePrompt: tz,
          submitHeaderMagicEdit: t$,
        } = (0, E.J)(V),
        tK = tE || eK,
        tY = tB || eK,
        tZ = tN || eK,
        tJ = tF.isLoading && "toolbar" === tF.magicEditSubmissionSource
      Z[64] !== ec || Z[65] !== tV
        ? ((H = (e) => {
            let t = ec?.(e, () => {
              e.isDestroyed || tV.unpinMagicEditSelection(e)
            })
            null != t && ((eV.current = t), tV.pinMagicEditSelection(e))
          }),
          (Z[64] = ec),
          (Z[65] = tV),
          (Z[66] = H))
        : (H = Z[66])
      let tQ = (0, A.K)(H),
        tX = tj
      if ("slides" === ev && null != J) {
        let e, t
        ;(Z[67] !== eT ||
        Z[68] !== tn ||
        Z[69] !== tM ||
        Z[70] !== tY ||
        Z[71] !== tH ||
        Z[72] !== eE ||
        Z[73] !== e6.displayedContent ||
        Z[74] !== t$ ||
        Z[75] !== ew
          ? ((e = tM
              ? null
              : (0, i.jsx)(eU, {
                  disabled: !tn || tY || 0 === e6.displayedContent.trim().length,
                  onCancel: tH,
                  onSubmittingChange: eZ,
                  onSlideCountChange: (e) => (
                    null != eT &&
                      null != ew &&
                      (0, k.yy)(eE, r.Lq, {
                        conversationId: eT,
                        writingBlockId: ew,
                        previousSlideCount: (0, s.At)(eO(e6.displayedContent)),
                        requestedSlideCount: (0, s.At)(e),
                      }),
                    t$(
                      `Revise this presentation outline to exactly ${e} slides total. Preserve the user's manual edits, presentation title, topic, key facts, caveats, and logical flow. Number slides consecutively using "## Slide N: <title>" headings, with 2\u{2013}3 concise dash bullets per content slide and relevant links to sources, images, or charts. Preserve existing URLs and keep each link with the slide it supports. For a multi-slide outline, include a title slide unless the user explicitly requested otherwise: "## Slide 1 (Title): <presentation title>" with only an optional subtitle, counted toward the total. For a one-slide outline, omit the title slide. Combine closely related ideas when reducing slides; split complex ideas or add meaningful sections when expanding. Do not add filler or invent facts, sources, or URLs. Return only the revised outline body; do not add a writing-block wrapper or generate files.`,
                      { applyImmediately: !0 },
                    ).catch(tD)
                  ),
                  slideCount: eO(e6.displayedContent),
                })),
            (Z[67] = eT),
            (Z[68] = tn),
            (Z[69] = tM),
            (Z[70] = tY),
            (Z[71] = tH),
            (Z[72] = eE),
            (Z[73] = e6.displayedContent),
            (Z[74] = t$),
            (Z[75] = ew),
            (Z[76] = e))
          : (e = Z[76]),
          Z[77] !== e
            ? ((t = (0, i.jsx)("div", {
                ref: eL,
                className: "flex min-h-9 min-w-0 grow items-center gap-3 px-2",
                children: e,
              })),
              (Z[77] = e),
              (Z[78] = t))
            : (t = Z[78]),
          (tX = t))
      } else if (!ek && "email" !== ev && !tc && (eG || es?.saveToPage)) {
        let e,
          t,
          n,
          l,
          s,
          a,
          r = !e9 || tK || tY
        Z[79] !== tK ||
        Z[80] !== e9 ||
        Z[81] !== er ||
        Z[82] !== ed ||
        Z[83] !== et ||
        Z[84] !== e6.displayedContent ||
        Z[85] !== ey ||
        Z[86] !== ev ||
        Z[87] !== eS
          ? ((e =
              "document" === ev
                ? (0, i.jsx)(eY, {
                    content: e6.displayedContent,
                    isDisabled: !e9 || tK,
                    messageId: er,
                    onBeforeExport: ed,
                    renderAsSubmenu: !0,
                    serverConversationId: et,
                    title: ey,
                    writingBlockIndex: eS,
                  })
                : void 0),
            (Z[79] = tK),
            (Z[80] = e9),
            (Z[81] = er),
            (Z[82] = ed),
            (Z[83] = et),
            (Z[84] = e6.displayedContent),
            (Z[85] = ey),
            (Z[86] = ev),
            (Z[87] = eS),
            (Z[88] = e))
          : (e = Z[88])
        let o = "document" === ev ? em : void 0,
          d = es?.libraryFileId,
          c = es?.isSaving,
          m = es?.saveConfirmation,
          f = es?.saveToPage
        ;(Z[89] !== eq || Z[90] !== ed
          ? ((t = eq
              ? () => {
                  ed?.().catch(tR)
                }
              : void 0),
            (Z[89] = eq),
            (Z[90] = ed),
            (Z[91] = t))
          : (t = Z[91]),
          Z[92] !== eq || Z[93] !== es || Z[94] !== e6.displayedContent || Z[95] !== e6.editorView
            ? ((n =
                (eq || es?.saveToPage) && "" !== e6.displayedContent.trim() && es?.onSave != null
                  ? (e) => {
                      let t = e6.editorView
                      es.onSave?.(
                        null == t || t.isDestroyed ? e6.displayedContent : (0, u.o)().serialize(t.state.doc),
                        e,
                      )
                    }
                  : void 0),
              (Z[92] = eq),
              (Z[93] = es),
              (Z[94] = e6.displayedContent),
              (Z[95] = e6.editorView),
              (Z[96] = n))
            : (n = Z[96]))
        let p = es?.libraryFileId || r || es?.isSaving ? void 0 : "text-tertiary"
        ;(Z[97] !== es?.saveToPage || Z[98] !== ey
          ? ((l =
              ey ||
              (es?.saveToPage
                ? (0, i.jsx)(g.A, { id: "codex.writingBlock.header.title.untitled", defaultMessage: "Untitled" })
                : (0, i.jsx)(g.A, { id: "codex.writingBlock.header.title.fallback", defaultMessage: "Writing" }))),
            (Z[97] = es?.saveToPage),
            (Z[98] = ey),
            (Z[99] = l))
          : (l = Z[99]),
          Z[100] !== p || Z[101] !== l
            ? ((s = (0, i.jsx)("span", { className: p, children: l })), (Z[100] = p), (Z[101] = l), (Z[102] = s))
            : (s = Z[102]),
          Z[103] !== r ||
          Z[104] !== e6.editorView ||
          Z[105] !== e ||
          Z[106] !== o ||
          Z[107] !== d ||
          Z[108] !== c ||
          Z[109] !== m ||
          Z[110] !== f ||
          Z[111] !== t ||
          Z[112] !== n ||
          Z[113] !== s
            ? ((a = (0, i.jsx)(e_, {
                editorView: e6.editorView,
                disabled: r,
                downloadMenu: e,
                onOpenVersionHistory: o,
                libraryFileId: d,
                isSaving: c,
                saveConfirmation: m,
                saveToPage: f,
                onLibraryClick: t,
                onSave: n,
                children: s,
              })),
              (Z[103] = r),
              (Z[104] = e6.editorView),
              (Z[105] = e),
              (Z[106] = o),
              (Z[107] = d),
              (Z[108] = c),
              (Z[109] = m),
              (Z[110] = f),
              (Z[111] = t),
              (Z[112] = n),
              (Z[113] = s),
              (Z[114] = a))
            : (a = Z[114]),
          (tX = a))
      }
      if (
        Z[115] !== tf ||
        Z[116] !== J ||
        Z[117] !== eA ||
        Z[118] !== tg ||
        Z[119] !== th ||
        Z[120] !== tk ||
        Z[121] !== te.actions ||
        Z[122] !== te.emailRowsCapabilities ||
        Z[123] !== ee?.writingBlockMetadata ||
        Z[124] !== tQ ||
        Z[125] !== tc ||
        Z[126] !== tI ||
        Z[127] !== tX ||
        Z[128] !== eG ||
        Z[129] !== eH ||
        Z[130] !== tJ ||
        Z[131] !== tn ||
        Z[132] !== tZ ||
        Z[133] !== ek ||
        Z[134] !== tA ||
        Z[135] !== tM ||
        Z[136] !== tK ||
        Z[137] !== tY ||
        Z[138] !== e9 ||
        Z[139] !== ej ||
        Z[140] !== eK ||
        Z[141] !== tt ||
        Z[142] !== eP ||
        Z[143] !== ea ||
        Z[144] !== tO ||
        Z[145] !== eq ||
        Z[146] !== es ||
        Z[147] !== tF ||
        Z[148] !== er ||
        Z[149] !== ec ||
        Z[150] !== ed ||
        Z[151] !== tG ||
        Z[152] !== tq ||
        Z[153] !== tU ||
        Z[154] !== em ||
        Z[155] !== tW ||
        Z[156] !== tV ||
        Z[157] !== eg ||
        Z[158] !== e1 ||
        Z[159] !== tH ||
        Z[160] !== tz ||
        Z[161] !== eE ||
        Z[162] !== et ||
        Z[163] !== e6 ||
        Z[164] !== eh ||
        Z[165] !== ey ||
        Z[166] !== ev ||
        Z[167] !== ew ||
        Z[168] !== eS
      ) {
        let e, t, n, l, s, r, d, c, m, f, p, x, v
        if (ek && (eq || es?.saveToPage) && !es?.libraryFileId && es?.onSave != null) {
          let t, n, l, s
          if (es.saveToPage) {
            let e
            ;(Z[170] !== es.isSaving
              ? ((e = es.isSaving
                  ? (0, i.jsx)(g.A, { id: "codex.writingBlock.page.saving", defaultMessage: "Creating Page" })
                  : (0, i.jsx)(g.A, { id: "codex.writingBlock.page.save", defaultMessage: "Save as Page" })),
                (Z[170] = es.isSaving),
                (Z[171] = e))
              : (e = Z[171]),
              (t = e))
          } else if (es.isSaving && eP) {
            let e
            ;(Z[172] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(g.A, {
                  id: "codex.writingBlock.viewer.savingToLibrary.space",
                  defaultMessage: "Adding to Space",
                })),
                (Z[172] = e))
              : (e = Z[172]),
              (t = e))
          } else if (es.isSaving) {
            let e
            ;(Z[173] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(g.A, {
                  id: "codex.writingBlock.viewer.savingToLibrary",
                  defaultMessage: "Adding to Library",
                })),
                (Z[173] = e))
              : (e = Z[173]),
              (t = e))
          } else if (eP) {
            let e
            ;(Z[174] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(g.A, {
                  id: "codex.writingBlock.viewer.saveToLibrary.space",
                  defaultMessage: "Add to Space",
                })),
                (Z[174] = e))
              : (e = Z[174]),
              (t = e))
          } else {
            let e
            ;(Z[175] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(g.A, {
                  id: "codex.writingBlock.viewer.saveToLibrary",
                  defaultMessage: "Add to Library",
                })),
                (Z[175] = e))
              : (e = Z[175]),
              (t = e))
          }
          ;(Z[176] !== tn || Z[177] !== tK || Z[178] !== e6.displayedContent
            ? ((n = !tn || tK || "" === e6.displayedContent.trim()),
              (Z[176] = tn),
              (Z[177] = tK),
              (Z[178] = e6.displayedContent),
              (Z[179] = n))
            : (n = Z[179]),
            Z[180] !== es || Z[181] !== e6.displayedContent || Z[182] !== e6.editorView
              ? ((l = (e) => {
                  let t = e6.editorView
                  es.onSave?.(
                    null == t || t.isDestroyed ? e6.displayedContent : (0, u.o)().serialize(t.state.doc),
                    0 === e.detail,
                  )
                }),
                (Z[180] = es),
                (Z[181] = e6.displayedContent),
                (Z[182] = e6.editorView),
                (Z[183] = l))
              : (l = Z[183]),
            Z[184] !== es.isSaving
              ? ((s = es.isSaving ? null : (0, i.jsx)(y.I, { asset: o.f })), (Z[184] = es.isSaving), (Z[185] = s))
              : (s = Z[185]),
            (e = (0, i.jsxs)(C.DW, {
              "aria-busy": es.isSaving || void 0,
              loading: es.isSaving,
              disabled: n,
              onClick: l,
              children: [s, t],
            })))
        }
        ;(Z[186] !== ek ||
        Z[187] !== tK ||
        Z[188] !== e9 ||
        Z[189] !== er ||
        Z[190] !== ed ||
        Z[191] !== et ||
        Z[192] !== e6.displayedContent ||
        Z[193] !== ey ||
        Z[194] !== ev ||
        Z[195] !== eS
          ? ((t =
              ek && "document" === ev
                ? (0, i.jsx)(eY, {
                    appearance: "viewer",
                    content: e6.displayedContent,
                    isDisabled: !e9 || tK,
                    messageId: er,
                    onBeforeExport: ed,
                    serverConversationId: et,
                    title: ey,
                    writingBlockIndex: eS,
                  })
                : null),
            (Z[186] = ek),
            (Z[187] = tK),
            (Z[188] = e9),
            (Z[189] = er),
            (Z[190] = ed),
            (Z[191] = et),
            (Z[192] = e6.displayedContent),
            (Z[193] = ey),
            (Z[194] = ev),
            (Z[195] = eS),
            (Z[196] = t))
          : (t = Z[196]),
          Z[197] !== ek || Z[198] !== tY || Z[199] !== e9 || Z[200] !== em || Z[201] !== ev
            ? ((n =
                ek && "document" === ev && null != em ? (0, i.jsx)(_.h, { disabled: !e9 || tY, onSelect: em }) : null),
              (Z[197] = ek),
              (Z[198] = tY),
              (Z[199] = e9),
              (Z[200] = em),
              (Z[201] = ev),
              (Z[202] = n))
            : (n = Z[202]),
          Z[203] !== tc ||
          Z[204] !== eG ||
          Z[205] !== ek ||
          Z[206] !== tK ||
          Z[207] !== e9 ||
          Z[208] !== eq ||
          Z[209] !== es?.libraryFileId ||
          Z[210] !== er ||
          Z[211] !== ed ||
          Z[212] !== et ||
          Z[213] !== e6.displayedContent ||
          Z[214] !== ey ||
          Z[215] !== ev ||
          Z[216] !== eS
            ? ((l =
                "document" !== ev || ek || es?.libraryFileId == null || (eG && eq && !tc)
                  ? null
                  : (0, i.jsx)(eY, {
                      content: e6.displayedContent,
                      isDisabled: !e9 || tK,
                      messageId: er,
                      onBeforeExport: ed,
                      serverConversationId: et,
                      title: ey,
                      writingBlockIndex: eS,
                    })),
              (Z[203] = tc),
              (Z[204] = eG),
              (Z[205] = ek),
              (Z[206] = tK),
              (Z[207] = e9),
              (Z[208] = eq),
              (Z[209] = es?.libraryFileId),
              (Z[210] = er),
              (Z[211] = ed),
              (Z[212] = et),
              (Z[213] = e6.displayedContent),
              (Z[214] = ey),
              (Z[215] = ev),
              (Z[216] = eS),
              (Z[217] = l))
            : (l = Z[217]),
          Z[218] !== te.actions || Z[219] !== ej
            ? ((s =
                null != te.actions &&
                (0, i.jsx)("fieldset", { className: "contents", disabled: ej, children: te.actions })),
              (Z[218] = te.actions),
              (Z[219] = ej),
              (Z[220] = s))
            : (s = Z[220]),
          Z[221] !== J ||
          Z[222] !== tY ||
          Z[223] !== e9 ||
          Z[224] !== tt ||
          Z[225] !== et ||
          Z[226] !== e6.displayedContent ||
          Z[227] !== ev ||
          Z[228] !== ew
            ? ((r =
                "slides" === ev && null != J && null != ew
                  ? (0, i.jsx)(eN, {
                      analyticsConversationId: et ?? J,
                      content: e6.displayedContent,
                      conversationId: J,
                      disabled: !e9 || tt || tY,
                      onSubmittingChange: e$,
                      writingBlockId: ew,
                    })
                  : null),
              (Z[221] = J),
              (Z[222] = tY),
              (Z[223] = e9),
              (Z[224] = tt),
              (Z[225] = et),
              (Z[226] = e6.displayedContent),
              (Z[227] = ev),
              (Z[228] = ew),
              (Z[229] = r))
            : (r = Z[229]),
          Z[230] !== l || Z[231] !== s || Z[232] !== r
            ? ((d = (0, i.jsxs)(i.Fragment, { children: [l, s, r] })),
              (Z[230] = l),
              (Z[231] = s),
              (Z[232] = r),
              (Z[233] = d))
            : (d = Z[233]),
          Z[234] !== tF
            ? ((c = () => {
                "toolbar" === tF.magicEditSubmissionSource && tF.cancelMagicEdit()
              }),
              (Z[234] = tF),
              (Z[235] = c))
            : (c = Z[235]),
          Z[236] !== tV || Z[237] !== e6.editorView
            ? ((m = (e) => {
                let t = e6.editorView
                null == t || t.isDestroyed || (e ? tV.pinMagicEditSelection(t) : tV.unpinMagicEditSelection(t))
              }),
              (Z[236] = tV),
              (Z[237] = e6.editorView),
              (Z[238] = m))
            : (m = Z[238]),
          Z[239] !== er || Z[240] !== eE || Z[241] !== et || Z[242] !== ev || Z[243] !== ew || Z[244] !== eS
            ? ((f = (e) => {
                null != et &&
                  null != er &&
                  ((0, k.yy)(eE, a.DBq, {
                    conversationId: et,
                    messageId: er,
                    variant: ev,
                    writingBlockId: ew,
                    writingBlockIndex: null == eS ? void 0 : String(eS),
                  }),
                  h.Request.safePost("/conversation/implicit_message_feedback", {
                    requestBody: {
                      conversation_id: et,
                      message_id: er,
                      source: "mouse",
                      location: "writing-block",
                      feedback: { feedback_type: "copy", selected_text_length: e.length },
                    },
                  }).catch(tP))
              }),
              (Z[239] = er),
              (Z[240] = eE),
              (Z[241] = et),
              (Z[242] = ev),
              (Z[243] = ew),
              (Z[244] = eS),
              (Z[245] = f))
            : (f = Z[245]),
          Z[246] !== eA || Z[247] !== eE || Z[248] !== et || Z[249] !== eh
            ? ((p = () => {}), (Z[246] = eA), (Z[247] = eE), (Z[248] = et), (Z[249] = eh), (Z[250] = p))
            : (p = Z[250]),
          Z[251] !== tz
            ? ((x = (e) => {
                ;(0, M.r0)(e, tz)
              }),
              (Z[251] = tz),
              (Z[252] = x))
            : (x = Z[252]),
          Z[253] !== tH || Z[254] !== e6
            ? ((v = (e) => {
                e !== e6.activeToneSectionId && (tH(), e6.selectToneSection(e))
              }),
              (Z[253] = tH),
              (Z[254] = e6),
              (Z[255] = v))
            : (v = Z[255]),
          (z = e1({
            actionsPresentation: ek ? "viewer" : "inline",
            viewerDownloadControl: t,
            ...(tK ? { copyInteractionDisabled: !0 } : {}),
            viewerVersionHistoryMenuItem: n,
            actionsAfterCopy: d,
            createEditor: tg,
            editorOverlays: th,
            editorRootRef: tk,
            editorInteractionDisabled: tZ,
            onBeforeExternalContentUpdate: tH,
            emailRowsCapabilities: te.emailRowsCapabilities,
            hideFormatToolbar: tM || tA || (tZ && !tJ),
            hideSlashMenu: tA,
            headerLeadingContent: tX,
            historyInteractionDisabled: tY || tt,
            isEditable: tn,
            isEditSelectionLoading: tJ,
            isHeaderComposerOpen: tM,
            isMagicEditSubmitting: tF.isLoading || eK,
            isWriteLikeMeSubmitting: tO,
            metadataInteractionDisabled: tY,
            onCancelEditSelection: c,
            onAskForChanges: null == ec ? void 0 : tQ,
            onEditSelection: tG,
            onEditSelectionOpenChange: m,
            onCopy: f,
            onEditorEscape: !ek || ea || tI ? void 0 : b.xJ,
            onCopyContentPrepared: p,
            onEditorKeyDownCapture: tq,
            onEditorPointerDownCapture: tU,
            onWriteLikeMeAction: tW,
            onSlashMenuExecute: x,
            onToneSectionSelect: v,
            renderFrame: null == eg ? void 0 : (t) => eg({ ...t, viewerTitleControl: e }, tI || eH, tf),
            writingBlockMetadata: ee?.writingBlockMetadata,
          })),
          (Z[115] = tf),
          (Z[116] = J),
          (Z[117] = eA),
          (Z[118] = tg),
          (Z[119] = th),
          (Z[120] = tk),
          (Z[121] = te.actions),
          (Z[122] = te.emailRowsCapabilities),
          (Z[123] = ee?.writingBlockMetadata),
          (Z[124] = tQ),
          (Z[125] = tc),
          (Z[126] = tI),
          (Z[127] = tX),
          (Z[128] = eG),
          (Z[129] = eH),
          (Z[130] = tJ),
          (Z[131] = tn),
          (Z[132] = tZ),
          (Z[133] = ek),
          (Z[134] = tA),
          (Z[135] = tM),
          (Z[136] = tK),
          (Z[137] = tY),
          (Z[138] = e9),
          (Z[139] = ej),
          (Z[140] = eK),
          (Z[141] = tt),
          (Z[142] = eP),
          (Z[143] = ea),
          (Z[144] = tO),
          (Z[145] = eq),
          (Z[146] = es),
          (Z[147] = tF),
          (Z[148] = er),
          (Z[149] = ec),
          (Z[150] = ed),
          (Z[151] = tG),
          (Z[152] = tq),
          (Z[153] = tU),
          (Z[154] = em),
          (Z[155] = tW),
          (Z[156] = tV),
          (Z[157] = eg),
          (Z[158] = e1),
          (Z[159] = tH),
          (Z[160] = tz),
          (Z[161] = eE),
          (Z[162] = et),
          (Z[163] = e6),
          (Z[164] = eh),
          (Z[165] = ey),
          (Z[166] = ev),
          (Z[167] = ew),
          (Z[168] = eS),
          (Z[169] = z))
      } else z = Z[169]
      let t1 = z,
        t0 =
          (((eF?.hash === "" && null != et && null != er && (0, tT.Mi)({ threadId: et, messageId: er })) ||
            (eD.get("footer_experiment_enabled", !1) && tn && !tK && null == eb && (0 === to || tc))) &&
            !ek &&
            0 === eS &&
            null != et,
          null)
      return (
        Z[256] !== ee?.writingBlockMetadata ||
        Z[257] !== tc ||
        Z[258] !== tn ||
        Z[259] !== ek ||
        Z[260] !== tK ||
        Z[261] !== er ||
        Z[262] !== ef ||
        Z[263] !== eE ||
        Z[264] !== et ||
        Z[265] !== eb ||
        Z[266] !== ev ||
        Z[267] !== ew ||
        Z[268] !== eS
          ? (($ =
              ek || tc || null == ef || 0 !== eS
                ? null
                : (0, i.jsx)(tL, {
                    ineligibilityReason: eb,
                    isDisabled: !tn || tK,
                    metadata: ee?.writingBlockMetadata,
                    onFollowupClick: (e, t) => {
                      null != et &&
                        null != er &&
                        (0, k.yy)(eE, a.F6J, {
                          conversationId: et,
                          followupCount: (0, s.At)(t),
                          followupPosition: (0, s.At)(e),
                          messageId: er,
                          variant: ev,
                          writingBlockId: ew,
                        })
                    },
                    onSelect: ef,
                  })),
            (Z[256] = ee?.writingBlockMetadata),
            (Z[257] = tc),
            (Z[258] = tn),
            (Z[259] = ek),
            (Z[260] = tK),
            (Z[261] = er),
            (Z[262] = ef),
            (Z[263] = eE),
            (Z[264] = et),
            (Z[265] = eb),
            (Z[266] = ev),
            (Z[267] = ew),
            (Z[268] = eS),
            (Z[269] = $))
          : ($ = Z[269]),
        Z[270] !== ek || Z[271] !== er || Z[272] !== et || Z[273] !== eM || Z[274] !== ew
          ? ((K =
              ek || null == et || null == er || null == ew
                ? null
                : (0, i.jsx)(tC, {
                    messageId: er,
                    serverConversationId: et,
                    userEditedWritingBlock: eM,
                    writingBlockId: ew,
                  })),
            (Z[270] = ek),
            (Z[271] = er),
            (Z[272] = et),
            (Z[273] = eM),
            (Z[274] = ew),
            (Z[275] = K))
          : (K = Z[275]),
        Z[276] !== t0 || Z[277] !== $ || Z[278] !== K || Z[279] !== t1
          ? ((Y = (0, i.jsxs)(i.Fragment, { children: [t1, t0, $, K] })),
            (Z[276] = t0),
            (Z[277] = $),
            (Z[278] = K),
            (Z[279] = t1),
            (Z[280] = Y))
          : (Y = Z[280]),
        Y
      )
    }
    function tP() {}
    function tR() {}
    function tD() {
      return !1
    }
    ;(0, x._)(
      async () => (await Promise.all([n.e(967847), n.e(112878)]).then(n.bind(n, "btKb"))).WritingStyleUpsellFooter,
    )
  },
  vQRL(e, t, n) {
    var i = n("ASxG")
    let l = "writing-style-footer-checkout",
      s = "oai/apps/contextualUpsellId",
      a = i.Ikc({
        id: i.YjP(),
        userId: i.YjP(),
        accountId: i.YjP(),
        threadId: i.YjP(),
        messageId: i.YjP(),
        createdAt: i.aig(),
        originKey: i.YjP(),
        stage: i.k5n(["opening", "pricing", "checkout", "success", "returning"]),
        context: i.YjP().nullable(),
      })
    function r(e) {
      let t
      return (
        d()?.stage === "returning" &&
        null != (t = d()) &&
        ["userId", "accountId", "threadId", "messageId"].every((n) => void 0 === e[n] || t[n] === e[n])
      )
    }
    function o(e) {
      try {
        let t = d()
        if (null == e || t?.id !== e) return
        ;(sessionStorage.removeItem(l), c(t.context))
      } catch {}
    }
    function d() {
      try {
        let e = a.safeParse(JSON.parse(sessionStorage.getItem(l) ?? "null")),
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
      .Ikc({
        source: i.YjP().optional(),
        checkoutReturnLocation: i
          .Ikc({ pathname: i.YjP(), hash: i.YjP(), state: i.Ikc({ source: i.YjP().optional() }).nullable().optional() })
          .optional(),
        checkoutRequest: i.Ikc({ plan_name: i.YjP().optional() }).optional(),
      })
      .nullable(),
      n.d(
        t,
        {},
        {
          FJ: function (e, t, n) {
            o(d()?.id ?? null)
            try {
              let i = localStorage.getItem(s)
              n({ upsellContextId: "work", sourceThreadId: e.threadId })
              let a = localStorage.getItem(s)
              if (null == a || a === i) return null
              let r = {
                ...e,
                id: crypto.randomUUID(),
                createdAt: Date.now(),
                originKey: t.key,
                stage: "opening",
                context: a,
              }
              if (
                (function (e) {
                  try {
                    return (sessionStorage.setItem(l, JSON.stringify(e)), !0)
                  } catch {
                    return !1
                  }
                })(r)
              )
                return r.id
              return (c(a), null)
            } catch {
              return null
            }
          },
          MF: o,
          Mi: r,
          aO: function (e) {
            return !!r(e) && (o(d()?.id ?? null), null == d())
          },
        },
      ))
  },
  oJ0f(e, t, n) {
    let i = (0, n("ESTr").a)({
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
  Tp04(e, t, n) {
    let i = (0, n("ESTr").a)({
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
  KB18(e, t, n) {
    let i = (0, n("ESTr").a)({
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
  Q4cg(e, t, n) {
    let i = (0, n("ESTr").a)({
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
//# sourceMappingURL=645403.1084c42095.js.map
