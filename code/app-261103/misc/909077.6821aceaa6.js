export const __rspack_esm_ids = [909077]
export const __webpack_modules__ = {
  kOeh(e, r, i) {
    i.d(r, { e: () => o })
    var a = i("ABep"),
      t = i("zd8w"),
      n = i("on57"),
      s = i("fZ4G")
    let l = ["blue", "red", "green", "light-blue", "yellow", "gray", "orange"],
      o = (e) => {
        let r = d(e.imageUrl)
        return (0, t.createElement)(c, { ...e, imageUrl: r, key: r })
      },
      c = (e) => {
        let {
            className: r,
            size: i,
            overflowCount: o,
            name: c,
            color: d = "secondary",
            colorFrom: h,
            variant: m = "soft",
            imageUrl: _,
            Icon: f,
            tooltipComponent: g,
            ...y
          } = e,
          [b, v] = (0, t.useState)(),
          w = !!(y.onPointerDown || y.onClick),
          I = null == h ? void 0 : l[h.split("").reduce((e, r) => e + r.charCodeAt(0), 0) % l.length],
          A = (0, a.jsx)(w ? "button" : "span", {
            className: (0, n.A)("Avatar-ZIKxFq", r),
            style: (0, s.mW)({
              "avatar-size": i,
              "avatar-background-color": null == I ? void 0 : `var(--color-avatar-${I})`,
              "avatar-text-color": null == I ? void 0 : "var(--color-avatar-foreground)",
            }),
            role: w ? void 0 : "presentation",
            "aria-label": w ? c : void 0,
            "data-color": d,
            "data-variant": m,
            type: w ? "button" : void 0,
            ...y,
            children:
              _ && "error" !== b
                ? (0, a.jsx)(u, { status: b, url: _, onError: () => v("error"), onLoad: () => v("loaded") })
                : f
                  ? (0, a.jsx)(f, { className: "AvatarIcon-PmtHig" })
                  : o
                    ? (0, a.jsx)(p, { count: o })
                    : (0, a.jsx)("span", { className: "AvatarInitial-tg7FSE", children: c?.charAt(0).toUpperCase() }),
          })
        return c && g ? (0, a.jsx)(g, { content: c, children: A }) : A
      },
      d = (e) => {
        if (e && !(e.includes("gravatar.com") && e.includes("cdn.auth0.com"))) return e
      },
      u = ({ url: e, status: r, onLoad: i, onError: t }) =>
        (0, a.jsx)("span", {
          className: "AvatarImageContainer-ewDD1N",
          children: (0, a.jsx)("img", {
            src: e,
            className: "AvatarImage-x8OSwL",
            "data-loaded": "loaded" === r ? "" : void 0,
            onLoad: i,
            onError: t,
            alt: "",
            role: "presentation",
          }),
        }),
      p = ({ count: e }) => {
        let r = new Intl.NumberFormat("en", { notation: "compact", compactDisplay: "short", maximumFractionDigits: 0 })
          .format(e)
          .toLocaleLowerCase()
        return (0, a.jsxs)("span", {
          className: "AvatarOverflowCount-xv6Nxk",
          "data-letter-count": r.length,
          children: [(0, a.jsx)("span", { className: "AvatarOverflowCountSymbol-IYYkRt", children: "+" }), r],
        })
      }
  },
  iFq6(e, r, i) {
    var a = i("zTeN"),
      t = i("OWtl"),
      n = i("nvO1")
    let s = (0, a.i1)(t.u, (e, { get: r }) => r(n.rN, e)),
      l = (0, a.i1)(t.u, (e, { get: r }) => {
        if (r(s, e)) {
          let { data: i, isError: a, isLoading: t } = r(n.IB, e)
          return { data: i?.filter((r) => r.workspace_id === e), isError: a, isLoading: t }
        }
        return null
      })
    i.d(r, {}, { l: l, w: s })
  },
  SgPg(e, r, i) {
    var a = i("ABep"),
      t = i("QosV"),
      n = i("JIuM"),
      s = i("LhhH"),
      l = i("ISnp")
    i.d(
      r,
      {},
      {
        T: function (e) {
          let r,
            i = (0, t.c)(9),
            { avatarUrl: o, colorKey: c, fadeIn: d, loading: u, loadingFallback: p, muted: h, name: m, size: _ } = e,
            f = void 0 === _ ? "md" : _,
            { isProfileVisible: g } = (0, l.D)(),
            { src: y, isError: b } = (0, n._w)(g ? o : null),
            v = g && (u || (null != o && null == y && !b)) ? p : void 0
          return (
            i[0] !== c || i[1] !== d || i[2] !== p || i[3] !== h || i[4] !== m || i[5] !== f || i[6] !== y || i[7] !== v
              ? ((r = (0, a.jsx)(s.e, {
                  alt: "",
                  colorKey: c,
                  fadeIn: d,
                  fallback: v,
                  loadingFallback: p,
                  muted: h,
                  name: m,
                  size: f,
                  src: y,
                })),
                (i[0] = c),
                (i[1] = d),
                (i[2] = p),
                (i[3] = h),
                (i[4] = m),
                (i[5] = f),
                (i[6] = y),
                (i[7] = v),
                (i[8] = r))
              : (r = i[8]),
            r
          )
        },
      },
    )
  },
  Yjer(e, r, i) {
    var a = i("dSuP"),
      t = i("T8X0"),
      n = i("yGJW"),
      s = i("eShZ")
    function l(e) {
      return "email" === e.recipient_type
        ? "CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_EMAIL"
        : "group" === e.principal_type
          ? "CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_GROUP"
          : "CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_USER"
    }
    i.d(
      r,
      {},
      {
        GE: function (e) {
          if (!(e instanceof s.fk)) return
          let r = e.responseStatus,
            i = "network" === e.errorKind || null == r,
            a = null != e.errorCode && /^[a-z0-9_-]{1,64}$/i.test(e.errorCode) ? e.errorCode : void 0,
            t = a?.toLowerCase()
          return {
            type: i
              ? "CHATGPT_FILE_LIBRARY_ERROR_TYPE_NETWORK_ERROR"
              : 507 === r || t?.includes("storage_limit") || t?.includes("quota")
                ? "CHATGPT_FILE_LIBRARY_ERROR_TYPE_STORAGE_LIMIT"
                : 404 === r ||
                    t?.includes("missing_library_file") ||
                    t?.includes("library_file_not_found") ||
                    "file_not_found" === t ||
                    "file_expired" === t
                  ? "CHATGPT_FILE_LIBRARY_ERROR_TYPE_MISSING_LIBRARY_FILE"
                  : 408 === r || 504 === r
                    ? "CHATGPT_FILE_LIBRARY_ERROR_TYPE_TIMEOUT"
                    : 401 === r || 403 === r
                      ? "CHATGPT_FILE_LIBRARY_ERROR_TYPE_AUTH_ERROR"
                      : 429 === r
                        ? "CHATGPT_FILE_LIBRARY_ERROR_TYPE_RATE_LIMITED"
                        : r >= 500
                          ? "CHATGPT_FILE_LIBRARY_ERROR_TYPE_SERVER_ERROR"
                          : r >= 400
                            ? "CHATGPT_FILE_LIBRARY_ERROR_TYPE_BAD_REQUEST"
                            : "CHATGPT_FILE_LIBRARY_ERROR_TYPE_INVALID_RESPONSE",
            code: a,
            httpStatus: !i && Number.isInteger(r) && r >= 100 && r <= 599 ? r : void 0,
          }
        },
        aS: function (e, r, i) {
          let s
          ;(null != r.isOwner &&
            (s = r.isOwner
              ? "CHATGPT_FILE_LIBRARY_SHARING_ACTOR_OWNER"
              : "CHATGPT_FILE_LIBRARY_SHARING_ACTOR_RECIPIENT"),
            (0, n.yy)(e, a.j6, {
              ...i,
              actor: s,
              resourceKind:
                "file" === r.sharingScope.resourceKind
                  ? "CHATGPT_FILE_LIBRARY_SHARING_RESOURCE_KIND_FILE"
                  : "CHATGPT_FILE_LIBRARY_SHARING_RESOURCE_KIND_FOLDER",
              libraryFileId: "file" === r.sharingScope.resourceKind ? r.sharingScope.libraryFileId : void 0,
              folderId: "folder" === r.sharingScope.resourceKind ? r.sharingScope.libraryFileId : void 0,
              shareSessionId: r.shareSessionId,
              productExperience: e.get(t.G$),
            }))
        },
        qT: function (e) {
          switch (e) {
            case "viewer":
              return "CHATGPT_FILE_LIBRARY_SHARING_ROLE_VIEWER"
            case "editor":
              return "CHATGPT_FILE_LIBRARY_SHARING_ROLE_EDITOR"
            case "commenter":
              return "CHATGPT_FILE_LIBRARY_SHARING_ROLE_COMMENTER"
            case void 0:
              return
          }
        },
        r6: function (e) {
          let r = e[0]
          if (null == r) return "CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_MIXED"
          let i = l(r)
          return e.every((e) => l(e) === i) ? i : "CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_MIXED"
        },
      },
    )
  },
  TzhQ(e, r, i) {
    var a = i("DBCl"),
      t = i("Ghh3"),
      n = i("nqea")
    i.d(
      r,
      {},
      {
        m: function ({ scope: e, assertCurrentScope: r }) {
          let i =
              "file" === e.resourceKind
                ? "/files/library/files/{library_file_id}"
                : "/files/library/directories/{directory_id}",
            s =
              "file" === e.resourceKind
                ? { parameters: { path: { library_file_id: e.libraryFileId } } }
                : { parameters: { path: { directory_id: e.libraryFileId } } },
            l =
              "file" === e.resourceKind
                ? { parameters: { path: { library_file_id: e.libraryFileId }, query: { include_profile_photos: !0 } } }
                : { parameters: { path: { directory_id: e.libraryFileId }, query: { include_profile_photos: !0 } } }
          function o() {
            if ((r(), 0 === e.accountId.length || 0 === e.accountUserId.length || 0 === e.libraryFileId.length))
              throw Error("Library sharing account scope is unavailable")
          }
          async function c(r, i) {
            ;(o(), i?.throwIfAborted())
            let a = { ...(0, t.Zj)(), "ChatGPT-Account-Id": e.accountId }
            ;(o(), i?.throwIfAborted())
            let n = await r({ additionalHeaders: a, signal: i })
            return (o(), i?.throwIfAborted(), n)
          }
          function d(r, i) {
            if (
              !(0, n.t4)(r.resource, e) ||
              "user" !== r.owner.principal_type ||
              0 === r.owner.principal_id.length ||
              (0, n.nD)(r.owner) !== (0, n.nD)(i)
            )
              throw Error("Invalid Library effective-access owner or resource scope")
          }
          function u(r, i) {
            let a = r[i]
            if (!(0, n.t4)(r.resource, e) || "user" !== a.principal_type || a.principal_id !== e.accountUserId)
              throw Error("Invalid Library access-request response scope")
            let t = new Set(r.recipients.map(n.nD)),
              s = new Set(r.decisions.map(({ recipient: e }) => (0, n.nD)(e)))
            for (let e of r.already_satisfied_recipients ?? []) {
              let r = (0, n.nD)(e)
              if (!t.has(r) || s.has(r)) throw Error("Invalid Library access-request terminal history")
              s.add(r)
            }
          }
          async function p(r, { cursor: a, signal: n } = {}) {
            let s = await c(
              (n) =>
                t.Request.safeGet("requester" === r ? `${i}/access-requests/mine` : `${i}/access-requests`, {
                  ...n,
                  ...("file" === e.resourceKind
                    ? {
                        parameters: {
                          path: { library_file_id: e.libraryFileId },
                          query: { cursor: a, include_profile_photos: !0 },
                        },
                      }
                    : {
                        parameters: {
                          path: { directory_id: e.libraryFileId },
                          query: { cursor: a, include_profile_photos: !0 },
                        },
                      }),
                }),
              n,
            )
            for (let e of s.requests) u(e, r)
            return s
          }
          return {
            resolveRecipient: (e, r) =>
              (0, a._qC)(
                c((r) => t.Request.safePost("/sharing/recipients/resolve", { ...r, requestBody: { email: e } }), r),
                r,
              ),
            async getSharingState(r) {
              let a = await c((e) => t.Request.safeGet(`${i}/sharing-state`, { ...e, ...l }), r)
              if (!(0, n.Sr)(a, e)) throw Error("Invalid Library sharing-state response scope")
              return a
            },
            async getShares(r, a) {
              let s,
                l,
                o = [],
                d = new Set()
              do {
                if (
                  ((l = await c(
                    (r) =>
                      t.Request.safeGet(`${i}/shares`, {
                        ...r,
                        ...("file" === e.resourceKind
                          ? {
                              parameters: {
                                path: { library_file_id: e.libraryFileId },
                                query: { cursor: s, include_profile_photos: !0 },
                              },
                            }
                          : {
                              parameters: {
                                path: { directory_id: e.libraryFileId },
                                query: { cursor: s, include_profile_photos: !0 },
                              },
                            }),
                      }),
                    a,
                  )),
                  !(0, n.t4)(l.resource, e) ||
                    "user" !== l.owner.principal_type ||
                    0 === l.owner.principal_id.length ||
                    (0, n.nD)(l.owner) !== (0, n.nD)(r) ||
                    l.shares.some((r) => !(0, n.t4)(r.resource, e)))
                )
                  throw Error("Invalid Library shares owner or resource scope")
                if (null != l.next_cursor) {
                  if (d.has(l.next_cursor)) throw Error("Repeated Library shares cursor")
                  d.add(l.next_cursor)
                }
                ;(o.push(...l.shares), (s = l.next_cursor))
              } while (null != s)
              return { ...l, shares: o }
            },
            async getEffectiveAccess(e, r) {
              let a = await c((e) => t.Request.safeGet(`${i}/effective-access`, { ...e, ...l }), r)
              return (d(a, e), a)
            },
            async getCollaborators({ accessRequestIds: r = [], signal: a } = {}) {
              let s = (0, n.b3)(r),
                o = await c(
                  (e) =>
                    t.Request.safeGet(`${i}/collaborators`, {
                      ...e,
                      additionalHeaders:
                        0 === s.length
                          ? e.additionalHeaders
                          : { ...e.additionalHeaders, "x-oai-library-access-request-ids": s.join(",") },
                      ...l,
                    }),
                  a,
                )
              if (!(0, n.t4)(o.resource, e) || "user" !== o.owner.principal_type || 0 === o.owner.principal_id.length)
                throw Error("Invalid Library collaborators response scope")
              return o
            },
            async createShare({ expectedInvitationId: r, recipient: a, roleId: s }) {
              let l = (0, n.rP)(s, e.resourceKind)
              if (null == l) throw Error("Invalid Library sharing role")
              let o = await c((s) =>
                t.Request.safePost(
                  `${i}/shares`,
                  "file" === e.resourceKind
                    ? {
                        ...s,
                        parameters: { path: { library_file_id: e.libraryFileId } },
                        requestBody: { expected_invitation_id: r, recipient: a, role_id: n.F2.file[l] },
                      }
                    : {
                        ...s,
                        parameters: { path: { directory_id: e.libraryFileId } },
                        requestBody: { expected_invitation_id: r, recipient: a, role_id: n.F2.folder[l] },
                      },
                ),
              )
              if (
                !(0, n.t4)(o.resource, e) ||
                o.role_id !== s ||
                ("principal" === a.recipient_type &&
                  ("principal" !== o.recipient.recipient_type ||
                    o.recipient.principal_id !== a.principal_id ||
                    (o.recipient.principal_type ?? "user") !== (a.principal_type ?? "user")))
              )
                throw Error("Invalid Library invitation response scope")
              return o
            },
            async removeShare(r) {
              let a = r.recipient
              if (!(0, n.t4)(r.resource, e)) throw Error("Library share removal is no longer available")
              if (
                "principal" === a.recipient_type &&
                null != a.principal_type &&
                "user" !== a.principal_type &&
                "group" !== a.principal_type
              )
                throw Error("Invalid Library share removal recipient")
              let s = "principal" === a.recipient_type && "group" === a.principal_type ? "group" : "user",
                l =
                  "principal" === a.recipient_type
                    ? {
                        recipient_principal_type: s,
                        recipient_principal_id: a.principal_id,
                        expected_status: r.status,
                        expected_role_id: r.role_id,
                      }
                    : void 0
              await c((a) =>
                t.Request.safeDelete(`${i}/shares/{share_id}`, {
                  ...a,
                  ...("file" === e.resourceKind
                    ? { parameters: { path: { library_file_id: e.libraryFileId, share_id: r.share_id }, query: l } }
                    : { parameters: { path: { directory_id: e.libraryFileId, share_id: r.share_id }, query: l } }),
                }),
              )
            },
            async updateLinkAccess({ expectedOwner: r, expectedInvitationId: a, expectedRoleId: s, linkAccess: l }) {
              if ("workspace" === l.mode && l.workspaceId !== e.accountId)
                throw Error("Library link sharing workspace is outside the account scope")
              let o = await c((r) =>
                  t.Request.safePatch(
                    `${i}/sharing-state`,
                    "file" === e.resourceKind
                      ? {
                          ...r,
                          parameters: { path: { library_file_id: e.libraryFileId } },
                          requestBody:
                            "workspace" === l.mode
                              ? {
                                  expected_invitation_id: a,
                                  link_access: "workspace",
                                  workspace_id: l.workspaceId,
                                  role_id: n.F2.file[l.role],
                                }
                              : { expected_invitation_id: a, expected_role_id: s, link_access: "collaborators_only" },
                        }
                      : {
                          ...r,
                          parameters: { path: { directory_id: e.libraryFileId } },
                          requestBody:
                            "workspace" === l.mode
                              ? {
                                  expected_invitation_id: a,
                                  link_access: "workspace",
                                  workspace_id: l.workspaceId,
                                  role_id: n.F2.folder[l.role],
                                }
                              : { expected_invitation_id: a, expected_role_id: s, link_access: "collaborators_only" },
                        },
                  ),
                ),
                d = (0, n.Sq)({ scope: e, sharingState: o })
              if (
                (0, n.nD)(o.owner.principal) !== (0, n.nD)(r) ||
                d?.mode !== l.mode ||
                ("workspace" === l.mode &&
                  ("workspace" !== d.mode || d.workspaceId !== l.workspaceId || d.role !== l.role))
              )
                throw Error("Library link access change was not confirmed")
              return o
            },
            async previewAccessChange({ recipient: r, desiredRole: a }) {
              let l = await c((e) =>
                t.Request.safePost(`${i}/access-change/preview`, {
                  ...e,
                  ...s,
                  requestBody: { recipient: { recipient_type: "principal", ...r }, desired_role: a },
                }),
              )
              if (!(0, n.t4)(l.resource, e) || (0, n.nD)(l.recipient) !== (0, n.nD)(r) || l.desired_role !== a)
                throw Error("Invalid Library access-change preview scope")
              return l
            },
            async applyAccessChange(r, a) {
              if (!(0, n.t4)(r.resource, e)) throw Error("Invalid Library access-change confirmation scope")
              let l = await c((e) =>
                t.Request.safePost(`${i}/access-change/apply`, {
                  ...e,
                  ...s,
                  requestBody: {
                    recipient: { recipient_type: "principal", ...r.recipient },
                    desired_role: r.desired_role,
                    fingerprint: r.fingerprint,
                  },
                }),
              )
              return (d(l.effective_access, a), l)
            },
            getOwnerAccessRequests: (e) => p("resource_owner", e),
            getRequesterAccessRequests: (e) => p("requester", e),
            async createAccessRequest({ recipients: r, role: a }) {
              let s = n.F2[e.resourceKind][a],
                l = await c((s) =>
                  t.Request.safePost(
                    `${i}/access-requests`,
                    "file" === e.resourceKind
                      ? {
                          ...s,
                          parameters: { path: { library_file_id: e.libraryFileId } },
                          requestBody: { recipients: r, requested_role_id: n.F2.file[a] },
                        }
                      : {
                          ...s,
                          parameters: { path: { directory_id: e.libraryFileId } },
                          requestBody: { recipients: r, requested_role_id: n.F2.folder[a] },
                        },
                  ),
                )
              if ((u(l, "requester"), l.requested_role_id !== s))
                throw Error("Invalid Library access-request role response")
              if (
                r.some(
                  (e) =>
                    "principal" === e.recipient_type &&
                    !l.recipients.some(
                      (r) => r.principal_id === e.principal_id && r.principal_type === (e.principal_type ?? "user"),
                    ),
                )
              )
                throw Error("Invalid Library access-request recipient response")
              return l
            },
            async decideAccessRequestGroup({ decision: r, recipient: a, requests: s }) {
              let l = s[0]
              if (null == l) throw Error("Invalid Library access-request group")
              let d = (0, n.M4)({ recipient: a, request: l }),
                p = new Set()
              for (let e of s) {
                if (
                  (u(e, "resource_owner"),
                  p.has(e.request_id) ||
                    (0, n.M4)({ recipient: a, request: e }) !== d ||
                    !(0, n.YB)(e).some((e) => (0, n.nD)(e) === (0, n.nD)(a)))
                )
                  throw Error("Invalid Library access-request group")
                p.add(e.request_id)
              }
              let h = []
              for (let l of s)
                try {
                  let s = await (async function ({ decision: r, recipient: a, requestId: s }) {
                    let l = await c((n) =>
                      t.Request.safePost(`${i}/access-requests/{request_id}/${r}`, {
                        ...n,
                        ...("file" === e.resourceKind
                          ? { parameters: { path: { library_file_id: e.libraryFileId, request_id: s } } }
                          : { parameters: { path: { directory_id: e.libraryFileId, request_id: s } } }),
                        requestBody: { recipient: { recipient_type: "principal", ...a } },
                      }),
                    )
                    if (
                      (u(l, "resource_owner"),
                      l.request_id !== s ||
                        !l.decisions.some(
                          (i) =>
                            (0, n.nD)(i.recipient) === (0, n.nD)(a) &&
                            i.decision === ("approve" === r ? "approved" : "declined") &&
                            "user" === i.decided_by.principal_type &&
                            i.decided_by.principal_id === e.accountUserId,
                        ))
                    )
                      throw Error("Library access-request decision was not confirmed")
                    return l
                  })({ decision: r, recipient: a, requestId: l.request_id })
                  if (
                    s.created_at !== l.created_at ||
                    (0, n.nD)(s.requester) !== (0, n.nD)(l.requester) ||
                    (0, n.M4)({ recipient: a, request: s }) !== d
                  )
                    throw Error("Invalid Library access-request generation response")
                  h.push(s)
                } catch {
                  o()
                  break
                }
              return { confirmedRequests: h, remainingRequests: s.slice(h.length) }
            },
          }
        },
      },
    )
  },
  gaC8(e, r, i) {
    i.d(r, { LibraryShareDialogBody: () => eV })
    var a = i("ABep"),
      t = i("QosV"),
      n = i("kOeh"),
      s = i("hwkA"),
      l = i("irkb"),
      o = i("T0Rc"),
      c = i("cE8H"),
      d = i("zTeN"),
      u = i("zd8w"),
      p = i("oyxz"),
      h = i("eFn4"),
      m = i("SgPg"),
      _ = i("w5lF"),
      f = i("OAko"),
      g = i("zKCW"),
      y = i("mUDD"),
      b = i("GO7r"),
      v = i("SGsN"),
      w = i("GaA7"),
      I = i("OWtl"),
      A = i("akkX"),
      S = i("wuZu"),
      x = i("IZAr"),
      R = i("JGmX"),
      E = i("FwqS"),
      L = i("jnsB"),
      C = i("CFGX"),
      T = i("LKbA"),
      k = i("rvFo"),
      q = i("eShZ"),
      j = i("uris"),
      M = i("xSOA"),
      N = i("Wf1j"),
      F = i("Yjer"),
      O = i("nqea")
    async function D(
      e,
      r,
      {
        includeShares: i = !1,
        preserveLibraryBrowse: a = !1,
        preserveEffectiveAccess: t = !1,
        preserveState: n = !1,
      } = {},
    ) {
      let s = (0, O.X1)(r, "state").slice(0, "folder" === r.resourceKind ? 3 : 5)
      e.invalidateQueries({ queryKey: s, predicate: (e) => "badge" === e.queryKey[5] })
      let l = e.invalidateQueries({
        queryKey: s,
        predicate: (e) =>
          "badge" !== e.queryKey[5] &&
          (i || "shares" !== e.queryKey[5]) &&
          (!n || e.queryKey[3] !== r.resourceKind || e.queryKey[4] !== r.libraryFileId || "state" !== e.queryKey[5]) &&
          (!t ||
            e.queryKey[3] !== r.resourceKind ||
            e.queryKey[4] !== r.libraryFileId ||
            "effective-access" !== e.queryKey[5]),
      })
      ;(e.invalidateQueries({ queryKey: ["appgen-library-cloud-files", r.accountId] }),
        e.invalidateQueries({
          queryKey: ["library-api", r.accountId],
          predicate: ({ queryKey: e }) => !a || "browse" !== e[3],
        }),
        await l)
    }
    var P = i("Te1l")
    function G(e) {
      let r,
        i,
        n,
        o,
        c,
        h,
        _,
        f,
        w,
        A,
        x,
        R,
        E,
        L,
        C = (0, t.c)(76),
        { analytics: q, api: G, canApprove: B, canDecide: W, disabled: Q, isCurrentSession: $, sharingScope: V } = e,
        X = (0, d.gh)(I.u),
        Z = (0, N.A)(),
        J = (0, l.jE)()
      C[0] !== q.shareSessionId || C[1] !== J || C[2] !== V
        ? ((r = () => (0, P.X)(J, V, "owner-access-requests", q.shareSessionId)),
          (C[0] = q.shareSessionId),
          (C[1] = J),
          (C[2] = V),
          (C[3] = r))
        : (r = C[3])
      let [ee] = (0, u.useState)(r),
        er = (0, u.useId)(),
        [ei, ea] = (0, u.useState)(!1),
        [et, en] = (0, u.useState)(z)
      ;(C[4] !== ee || C[5] !== V
        ? ((i = [...(0, O.X1)(V, "owner-access-requests"), "pages", ee]), (C[4] = ee), (C[5] = V), (C[6] = i))
        : (i = C[6]),
        C[7] !== G
          ? ((n = (e) => {
              let { pageParam: r, signal: i } = e
              return G.getOwnerAccessRequests({ cursor: r, signal: i })
            }),
            (C[7] = G),
            (C[8] = n))
          : (n = C[8]),
        C[9] !== W || C[10] !== i || C[11] !== n
          ? ((o = {
              enabled: W,
              queryKey: i,
              queryFn: n,
              initialPageParam: null,
              getNextPageParam: Y,
              retry: !1,
              staleTime: k.D.THIRTY_SECONDS,
            }),
            (C[9] = W),
            (C[10] = i),
            (C[11] = n),
            (C[12] = o))
          : (o = C[12]))
      let {
        data: es,
        isError: el,
        isFetching: eo,
        isSuccess: ec,
        hasNextPage: ed,
        fetchNextPage: eu,
        refetch: ep,
      } = (0, j.q)(o)
      C[13] !== q || C[14] !== X || C[15] !== V
        ? ((c = (e, r, i, a) => {
            let { decision: t, row: n } = e
            ;(0, F.aS)(X, q, {
              action:
                "approve" === t
                  ? "CHATGPT_FILE_LIBRARY_SHARING_ACTION_APPROVE_ACCESS_REQUEST"
                  : "CHATGPT_FILE_LIBRARY_SHARING_ACTION_DECLINE_ACCESS_REQUEST",
              outcome: r,
              operationId: i,
              error: (0, F.GE)(a),
              recipientKind:
                "group" === n.recipient.principal_type
                  ? "CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_GROUP"
                  : "CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_USER",
              recipientCount: 1,
              role: (0, F.qT)((0, O.rP)(n.request.requested_role_id, V.resourceKind)),
            })
          }),
          (C[13] = q),
          (C[14] = X),
          (C[15] = V),
          (C[16] = c))
        : (c = C[16])
      let eh = c
      ;(C[17] !== V ? ((h = (0, O.X1)(V, "state")), (C[17] = V), (C[18] = h)) : (h = C[18]),
        C[19] !== G || C[20] !== B || C[21] !== W || C[22] !== $
          ? ((_ = (e) => {
              let { decision: r, row: i } = e
              if (!$() || !W || ("approve" === r && !B))
                throw Error("Library access-request decisions are not permitted")
              return G.decideAccessRequestGroup({ decision: r, recipient: i.recipient, requests: i.requests })
            }),
            (C[19] = G),
            (C[20] = B),
            (C[21] = W),
            (C[22] = $),
            (C[23] = _))
          : (_ = C[23]),
        C[24] !== $ || C[25] !== eh
          ? ((f = (e) => {
              let r = crypto.randomUUID()
              return ($() && eh(e, "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_STARTED", r), r)
            }),
            (C[24] = $),
            (C[25] = eh),
            (C[26] = f))
          : (f = C[26]),
        C[27] !== $ || C[28] !== eh || C[29] !== X
          ? ((A = (e, r, i) => {
              let { confirmedRequests: t, remainingRequests: n } = e
              if (!$()) return
              let s = "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_SUCCEEDED"
              ;(n.length > 0 &&
                (s =
                  0 === t.length
                    ? "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_FAILED"
                    : "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_PARTIAL"),
                eh(r, s, i),
                en((e) => new Set([...e, ...t.map((e) => (0, O.d7)({ request: e, recipient: r.row.recipient }))])),
                n.length > 0 &&
                  (t.length > 0
                    ? X.get(v.Id).warning(
                        (0, a.jsx)(p.A, {
                          id: "librarySharing.requests.partial",
                          defaultMessage: "Some requests were updated. Review the remaining requests and try again",
                          description:
                            "Toast after only some duplicate Library access requests for one recipient were confirmed; unconfirmed requests stay visible",
                        }),
                      )
                    : X.get(v.Id).danger(
                        (0, a.jsx)(p.A, {
                          id: "librarySharing.requests.updateError",
                          defaultMessage: "Couldn't update this request. Try again",
                          description: "Error toast when approving or declining a Library access request fails",
                        }),
                        { errorAnalytics: { toastId: "librarySharing.requests.updateError" } },
                      )))
            }),
            (w = (e, r, i) => {
              $() &&
                (eh(r, "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_FAILED", i, e),
                X.get(v.Id).danger(
                  (0, a.jsx)(p.A, {
                    id: "librarySharing.requests.updateError",
                    defaultMessage: "Couldn't update this request. Try again",
                    description: "Error toast when approving or declining a Library access request fails",
                  }),
                  { errorAnalytics: { toastId: "librarySharing.requests.updateError" } },
                ))
            }),
            (C[27] = $),
            (C[28] = eh),
            (C[29] = X),
            (C[30] = w),
            (C[31] = A))
          : ((w = C[30]), (A = C[31])),
        C[32] !== $ || C[33] !== J || C[34] !== V
          ? ((x = () => {
              $() && D(J, V, { includeShares: !0 })
            }),
            (C[32] = $),
            (C[33] = J),
            (C[34] = V),
            (C[35] = x))
          : (x = C[35]),
        C[36] !== w || C[37] !== x || C[38] !== h || C[39] !== _ || C[40] !== f || C[41] !== A
          ? ((R = {
              mutationKey: h,
              networkMode: "always",
              retry: !1,
              mutationFn: _,
              onMutate: f,
              onSuccess: A,
              onError: w,
              onSettled: x,
            }),
            (C[36] = w),
            (C[37] = x),
            (C[38] = h),
            (C[39] = _),
            (C[40] = f),
            (C[41] = A),
            (C[42] = R))
          : (R = C[42]))
      let { mutate: em, isPending: e_ } = (0, M.n)(R)
      if (!W) return null
      if (el) {
        let e, r, i, t
        return (
          C[43] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(p.A, {
                id: "librarySharing.requests.loadError",
                defaultMessage: "Couldn't load requests to share",
                description:
                  "Error shown in the Library share dialog when the owner's pending access requests fail to load",
              })),
              (C[43] = e))
            : (e = C[43]),
          C[44] !== $ || C[45] !== ep
            ? ((r = () => {
                $() && ep()
              }),
              (C[44] = $),
              (C[45] = ep),
              (C[46] = r))
            : (r = C[46]),
          C[47] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = (0, a.jsx)(p.A, {
                id: "librarySharing.requests.retry",
                defaultMessage: "Retry",
                description: "Button to retry loading pending Library access requests",
              })),
              (C[47] = i))
            : (i = C[47]),
          C[48] !== eo || C[49] !== r
            ? ((t = (0, a.jsx)(y.OO, {
                children: (0, a.jsx)(g.l, {
                  type: "error",
                  role: "alert",
                  content: e,
                  isPrimaryCtaDisabled: eo,
                  onPrimaryCtaClick: r,
                  primaryCtaText: i,
                }),
              })),
              (C[48] = eo),
              (C[49] = r),
              (C[50] = t))
            : (t = C[50]),
          t
        )
      }
      if (!ec) return null
      if (
        C[51] !== B ||
        C[52] !== W ||
        C[53] !== es?.pages ||
        C[54] !== Q ||
        C[55] !== ei ||
        C[56] !== eu ||
        C[57] !== ed ||
        C[58] !== Z ||
        C[59] !== $ ||
        C[60] !== eo ||
        C[61] !== e_ ||
        C[62] !== em ||
        C[63] !== ep ||
        C[64] !== er ||
        C[65] !== et ||
        C[66] !== V
      ) {
        L = Symbol.for("react.early_return_sentinel")
        e: {
          let e, r, i, t
          C[69] !== et
            ? ((e = (e) => {
                let [r, ...i] = e.requests.filter((r) => !et.has((0, O.d7)({ request: r, recipient: e.recipient })))
                return null == r ? [] : [{ ...e, request: r, requests: [r, ...i] }]
              }),
              (C[69] = et),
              (C[70] = e))
            : (e = C[70])
          let n = (0, O.qh)(es?.pages.flatMap(U) ?? []).flatMap(e),
            l = es?.pages.at(-1)?.next_cursor != null
          if (0 === n.length && !l) {
            L = null
            break e
          }
          C[71] !== es?.pages ? ((r = new Map(es?.pages.flatMap(H))), (C[71] = es?.pages), (C[72] = r)) : (r = C[72])
          let o = r
          ;(C[73] !== ei
            ? ((i = () => ea(!ei)),
              (t = ei ? (0, a.jsx)(b.Aq_, {}) : (0, a.jsx)(b.uM3, {})),
              (C[73] = ei),
              (C[74] = i),
              (C[75] = t))
            : ((i = C[74]), (t = C[75])),
            (E = (0, a.jsxs)(y.OO, {
              children: [
                (0, a.jsxs)(s.$, {
                  "aria-controls": er,
                  "aria-expanded": ei,
                  color: "secondary",
                  variant: "ghost",
                  size: "sm",
                  onClick: i,
                  children: [
                    t,
                    (0, a.jsx)(p.A, {
                      id: "librarySharing.requests.heading",
                      defaultMessage: "Requests to share ({count, number})",
                      description:
                        "Expandable section in the Library share dialog for an owner to approve or decline requested access; count is the number of pending recipient-and-role groups",
                      values: { count: n.length },
                    }),
                  ],
                }),
                ei
                  ? (0, a.jsxs)("div", {
                      id: er,
                      className: "flex flex-col gap-3",
                      children: [
                        n.map((e) => {
                          let r,
                            i = o.get((0, O.nD)(e.recipient)),
                            t = o.get((0, O.nD)(e.request.requester)),
                            n = i?.display_name ?? i?.email,
                            l = t?.display_name ?? t?.email,
                            c = new Set(e.requests.map(K)).size - 1,
                            d = (0, O.rP)(e.request.requested_role_id, V.resourceKind)
                          return (
                            (r =
                              t?.display_name != null && null != t.email
                                ? (0, a.jsx)(p.A, {
                                    id: "librarySharing.requests.requestedByWithEmail",
                                    defaultMessage:
                                      "Requested by {name} ({email}){otherCount, plural, =0 {} one { and # other} other { and # others}}",
                                    description:
                                      "Supporting text under a Library access-request recipient; name and email identify the most recent requester and otherCount counts other people requesting the same role for this recipient",
                                    values: { name: t.display_name, email: t.email, otherCount: c },
                                  })
                                : null != l
                                  ? (0, a.jsx)(p.A, {
                                      id: "librarySharing.requests.requestedBy",
                                      defaultMessage:
                                        "Requested by {name}{otherCount, plural, =0 {} one { and # other} other { and # others}}",
                                      description:
                                        "Supporting text under a Library access-request recipient when the requester has only a name or email; name identifies the latest requester and otherCount counts other requesters for the same recipient and role",
                                      values: { name: l, otherCount: c },
                                    })
                                  : (0, a.jsx)(p.A, {
                                      id: "librarySharing.requests.requestedByUnknown",
                                      defaultMessage:
                                        "Requested by a collaborator{otherCount, plural, =0 {} one { and # other} other { and # others}}",
                                      description:
                                        "Supporting text under a Library access-request recipient when the latest requester's identity is unavailable; otherCount counts other requesters for the same recipient and role",
                                      values: { otherCount: c },
                                    })),
                            (0, a.jsx)(
                              S.h,
                              {
                                avatar: (0, a.jsx)(m.T, {
                                  avatarUrl: i?.avatar_url,
                                  colorKey: e.recipient.principal_id,
                                  name: n ?? null,
                                  size: "sm",
                                }),
                                label:
                                  n ??
                                  (0, a.jsx)(p.A, {
                                    id: "librarySharing.requests.recipientFallback",
                                    defaultMessage: "Collaborator",
                                    description:
                                      "Fallback name for a Library access-request recipient whose name and email are unavailable",
                                  }),
                                secondaryLabel: (0, a.jsxs)(a.Fragment, {
                                  children: [
                                    i?.email == null ? null : (0, a.jsx)("div", { children: i.email }),
                                    (0, a.jsx)("div", { children: r }),
                                  ],
                                }),
                                size: "compact",
                                trailingContent: (0, a.jsxs)("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    (0, a.jsx)("span", {
                                      className: "text-sm text-codex-description",
                                      children: (0, a.jsx)(T.u, { permission: d }),
                                    }),
                                    (0, a.jsx)(s.$, {
                                      "aria-label":
                                        null == n
                                          ? Z.formatMessage({
                                              id: "librarySharing.requests.approveUnknownLabel",
                                              defaultMessage: "Approve access request",
                                              description:
                                                "Accessible label for approving requested Library access when the recipient's name and email are unavailable",
                                            })
                                          : Z.formatMessage(
                                              {
                                                id: "librarySharing.requests.approveLabel",
                                                defaultMessage: "Approve access for {name}",
                                                description:
                                                  "Accessible label for approving requested Library access; name identifies the recipient",
                                              },
                                              { name: n },
                                            ),
                                      color: "secondary",
                                      disabled: Q || e_ || !B || ("viewer" !== d && "editor" !== d),
                                      size: "sm",
                                      onClick: () => {
                                        $() && W && B && em({ decision: "approve", row: e })
                                      },
                                      children: (0, a.jsx)(p.A, {
                                        id: "librarySharing.requests.approve",
                                        defaultMessage: "Approve",
                                        description: "Button for approving a recipient's requested Library access",
                                      }),
                                    }),
                                    (0, a.jsx)(s.$, {
                                      "aria-label":
                                        null == n
                                          ? Z.formatMessage({
                                              id: "librarySharing.requests.declineUnknownLabel",
                                              defaultMessage: "Decline access request",
                                              description:
                                                "Accessible label for declining requested Library access when the recipient's name and email are unavailable",
                                            })
                                          : Z.formatMessage(
                                              {
                                                id: "librarySharing.requests.declineLabel",
                                                defaultMessage: "Decline access for {name}",
                                                description:
                                                  "Accessible label for declining requested Library access; name identifies the recipient",
                                              },
                                              { name: n },
                                            ),
                                      color: "secondary",
                                      variant: "ghost",
                                      disabled: Q || e_,
                                      size: "sm",
                                      onClick: () => {
                                        $() && W && em({ decision: "decline", row: e })
                                      },
                                      children: (0, a.jsx)(p.A, {
                                        id: "librarySharing.requests.decline",
                                        defaultMessage: "Decline",
                                        description: "Button for declining a recipient's requested Library access",
                                      }),
                                    }),
                                  ],
                                }),
                              },
                              (0, O.M4)(e),
                            )
                          )
                        }),
                        l
                          ? (0, a.jsx)(s.$, {
                              size: "xl",
                              type: "button",
                              color: "secondary",
                              disabled: Q || e_ || eo,
                              loading: eo,
                              onClick: () => {
                                $() && (ed ? eu() : ep())
                              },
                              children: (0, a.jsx)(p.A, {
                                id: "librarySharing.requests.loadMore",
                                defaultMessage: "Load more requests",
                                description:
                                  "Button loading another page of pending access requests in the Library owner's sharing dialog",
                              }),
                            })
                          : null,
                      ],
                    })
                  : null,
              ],
            })))
        }
        ;((C[51] = B),
          (C[52] = W),
          (C[53] = es?.pages),
          (C[54] = Q),
          (C[55] = ei),
          (C[56] = eu),
          (C[57] = ed),
          (C[58] = Z),
          (C[59] = $),
          (C[60] = eo),
          (C[61] = e_),
          (C[62] = em),
          (C[63] = ep),
          (C[64] = er),
          (C[65] = et),
          (C[66] = V),
          (C[67] = E),
          (C[68] = L))
      } else ((E = C[67]), (L = C[68]))
      return L !== Symbol.for("react.early_return_sentinel") ? L : E
    }
    function K(e) {
      return (0, O.nD)(e.requester)
    }
    function H(e) {
      return e.principal_identities.map(B)
    }
    function B(e) {
      return [(0, O.nD)(e.principal), e]
    }
    function U(e) {
      return e.requests
    }
    function Y(e, r, i, a) {
      return null == e.next_cursor || a.includes(e.next_cursor) ? void 0 : e.next_cursor
    }
    function z() {
      return new Set()
    }
    var W = i("TzhQ"),
      Q = i("heYt"),
      $ = i("aoV0"),
      V = i("glqn"),
      X = i("slpy")
    function Z(e) {
      let r,
        i,
        s,
        l,
        o = (0, t.c)(17),
        { shares: c, effectiveAccess: d, resourceKind: u, renderActions: h, draftRoles: _ } = e
      if (
        o[0] !== _ ||
        o[1] !== d?.collaborators ||
        o[2] !== h ||
        o[3] !== u ||
        o[4] !== c.owner ||
        o[5] !== c.shares
      ) {
        s = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            t = d?.collaborators.filter((e) => {
              let { principal: r } = e
              return (
                ("user" === r.principal_type || "group" === r.principal_type) && (0, O.nD)(r) !== (0, O.nD)(c.owner)
              )
            }),
            l = new Map(t?.map(J)),
            f = new Set(),
            g = c.shares.flatMap((e) => {
              let r = e.recipient
              if ("principal" === r.recipient_type) {
                let i = r.principal_type ?? "user",
                  a = `${i}:${r.principal_id}`
                return ("user" !== i && "group" !== i) || a === (0, O.nD)(c.owner)
                  ? []
                  : (f.add(a), [{ key: e.share_id, share: e, collaborator: l.get(a) }])
              }
              return [{ key: e.share_id, share: e }]
            })
          for (let e of t ?? []) {
            let r = (0, O.nD)(e.principal)
            f.has(r) || g.push({ key: `effective:${r}`, collaborator: e })
          }
          if (0 === g.length) {
            s = null
            break e
          }
          ;((r = "flex flex-col gap-1"),
            o[9] !== _ || o[10] !== h || o[11] !== u || o[12] !== c
              ? ((e = (e) => {
                  let { key: r, share: i, collaborator: t } = e
                  if (_?.has(r) && null == _.get(r)) return null
                  let s =
                      t?.email ??
                      i?.recipient_email ??
                      (i?.recipient.recipient_type === "email" ? i.recipient.email : void 0),
                    l =
                      i?.status !== "pending" || c.owner.principal_id.includes("__")
                        ? t?.display_name || i?.recipient_display_name || s || void 0
                        : s || void 0,
                    o = (0, O.rP)(t?.role_id ?? i?.role_id ?? "", u),
                    d =
                      t?.principal.principal_type === "group" ||
                      (i?.recipient.recipient_type === "principal" && "group" === i.recipient.principal_type),
                    f = null
                  t?.inherited &&
                    (f =
                      t.source?.resource_display_name == null
                        ? (0, a.jsx)(p.A, {
                            id: "librarySharing.collaborators.inheritedUnnamed",
                            defaultMessage: "Inherited from a parent folder",
                            description:
                              "Tooltip on the role of a Library collaborator who has inherited access from a parent folder whose display name is unavailable",
                          })
                        : (0, a.jsx)(p.A, {
                            id: "librarySharing.collaborators.inherited",
                            defaultMessage: "Inherited from {folderName}",
                            description:
                              "Tooltip on the role of a Library collaborator who has inherited access; folderName is the parent folder's display name",
                            values: { folderName: t.source.resource_display_name },
                          }))
                  let g =
                    null != f || t?.group_source != null
                      ? (0, a.jsxs)("div", {
                          className: "flex flex-col",
                          children: [
                            f,
                            t?.group_source != null
                              ? (0, a.jsx)(p.A, {
                                  id: "librarySharing.collaborators.groupAccess",
                                  defaultMessage: "Access through a group",
                                  description:
                                    "Tooltip on the role of a Library collaborator whose access comes from membership of a shared group",
                                })
                              : null,
                          ],
                        })
                      : null
                  return (0, a.jsx)(
                    S.h,
                    {
                      avatar: d
                        ? (0, a.jsx)(n.e, { size: 28, Icon: b.oJq })
                        : (0, a.jsx)(m.T, {
                            size: "group",
                            avatarUrl: t?.avatar_url ?? i?.recipient_avatar_url,
                            colorKey:
                              t?.principal.principal_id ??
                              (i?.recipient.recipient_type === "principal"
                                ? i.recipient.principal_id
                                : s?.toLowerCase()),
                            name: l ?? null,
                          }),
                      label:
                        l ??
                        (0, a.jsx)(p.A, {
                          id: "librarySharing.collaborators.unnamed",
                          defaultMessage: "Collaborator",
                          description:
                            "Fallback display name for a person or group with access in the Library sharing dialog when the server has not supplied a name or email",
                        }),
                      secondaryLabel: (0, a.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                          null != s && s !== l ? (0, a.jsx)("span", { children: s }) : null,
                          i?.status === "pending"
                            ? (0, a.jsx)(p.A, {
                                id: "librarySharing.collaborators.inviteSent",
                                defaultMessage: "Invite sent",
                                description:
                                  "Status below a pending Library collaborator's email address; their invitation has been sent but not yet accepted",
                              })
                            : null,
                        ],
                      }),
                      trailingContent: (0, a.jsx)(X.m, {
                        content: g,
                        children:
                          null == h
                            ? (0, a.jsx)("span", {
                                className: "pe-2 text-sm text-tertiary",
                                tabIndex: null == g ? void 0 : 0,
                                children: (0, a.jsx)(T.u, { permission: o }),
                              })
                            : (0, a.jsx)("span", {
                                className: "inline-flex",
                                tabIndex: null == g ? void 0 : 0,
                                children: h({ key: r, share: i, collaborator: t, role: o, personName: l }),
                              }),
                      }),
                    },
                    r,
                  )
                }),
                (o[9] = _),
                (o[10] = h),
                (o[11] = u),
                (o[12] = c),
                (o[13] = e))
              : (e = o[13]),
            (i = g.map(e)))
        }
        ;((o[0] = _),
          (o[1] = d?.collaborators),
          (o[2] = h),
          (o[3] = u),
          (o[4] = c.owner),
          (o[5] = c.shares),
          (o[6] = r),
          (o[7] = i),
          (o[8] = s))
      } else ((r = o[6]), (i = o[7]), (s = o[8]))
      return s !== Symbol.for("react.early_return_sentinel")
        ? s
        : (o[14] !== r || o[15] !== i
            ? ((l = (0, a.jsx)("div", { className: r, children: i })), (o[14] = r), (o[15] = i), (o[16] = l))
            : (l = o[16]),
          l)
    }
    function J(e) {
      return [(0, O.nD)(e.principal), e]
    }
    function ee(e) {
      let r,
        i,
        n,
        s,
        o,
        c,
        h,
        m,
        _,
        f,
        g,
        y,
        b,
        w,
        A,
        S,
        x,
        R,
        E,
        L = (0, t.c)(92),
        {
          api: C,
          sharingScope: k,
          analytics: q,
          shares: j,
          effectiveAccess: N,
          allowedRoles: P,
          canChange: G,
          canRemove: K,
          canRemoveEffective: H,
          disabled: B,
          isCurrentSession: U,
          onStageChange: Y,
        } = e,
        z = (0, d.gh)(I.u),
        W = (0, l.jE)(),
        [Q, $] = (0, u.useState)(null)
      L[0] === Symbol.for("react.memo_cache_sentinel") ? ((r = new Map()), (L[0] = r)) : (r = L[0])
      let [X, J] = (0, u.useState)(r)
      L[1] !== k ? ((i = (0, O.X1)(k, "shares")), (L[1] = k), (L[2] = i)) : (i = L[2])
      let ee = i
      L[3] !== k ? ((n = (0, O.X1)(k, "effective-access")), (L[3] = k), (L[4] = n)) : (n = L[4])
      let eo = n
      ;(L[5] !== k ? ((s = (0, O.X1)(k, "state")), (L[5] = k), (L[6] = s)) : (s = L[6]),
        L[7] !== P ||
        L[8] !== C ||
        L[9] !== G ||
        L[10] !== K ||
        L[11] !== H ||
        L[12] !== U ||
        L[13] !== j ||
        L[14] !== k.resourceKind
          ? ((o = async (e) => {
              let r = "direct" === e.kind ? e.desiredRole : e.preview.desired_role
              if (
                !U() ||
                (null != r && (!G || !P.includes(r))) ||
                (null == r && "effective" === e.kind && !H) ||
                (null == r && "direct" === e.kind && !K)
              )
                throw Error("Library access management is no longer permitted")
              return "effective" === e.kind
                ? { kind: "effective", preview: e.preview, result: await C.applyAccessChange(e.preview, j.owner) }
                : null == e.desiredRole
                  ? (await C.removeShare(e.share), { kind: "direct", share: e.share, updatedShare: null })
                  : {
                      kind: "direct",
                      share: e.share,
                      updatedShare: await C.createShare({
                        recipient: e.share.recipient,
                        roleId: O.F2[k.resourceKind][e.desiredRole],
                        expectedInvitationId: e.share.share_id,
                      }),
                    }
            }),
            (L[7] = P),
            (L[8] = C),
            (L[9] = G),
            (L[10] = K),
            (L[11] = H),
            (L[12] = U),
            (L[13] = j),
            (L[14] = k.resourceKind),
            (L[15] = o))
          : (o = L[15]),
        L[16] !== q || L[17] !== U || L[18] !== W || L[19] !== z || L[20] !== ee || L[21] !== k
          ? ((c = async (e) => {
              await W.cancelQueries({ queryKey: ee.slice(0, 5) })
              let r = crypto.randomUUID()
              return (
                U() &&
                  (0, F.aS)(z, q, {
                    ...ep(e, k),
                    outcome: "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_STARTED",
                    operationId: r,
                  }),
                r
              )
            }),
            (L[16] = q),
            (L[17] = U),
            (L[18] = W),
            (L[19] = z),
            (L[20] = ee),
            (L[21] = k),
            (L[22] = c))
          : (c = L[22]),
        L[23] !== q || L[24] !== eo || L[25] !== U || L[26] !== W || L[27] !== z || L[28] !== ee || L[29] !== k
          ? ((h = async (e, r, i) => {
              if (!U()) return
              let t = "effective" === e.kind && !0 === e.result.partial_failure,
                n = "effective" === e.kind ? e.preview.mutations.find(es) : void 0,
                s = "direct" === e.kind && null == e.updatedShare ? e.share : void 0,
                l =
                  s?.status === "active" && "principal" === s.recipient.recipient_type
                    ? (0, O.nD)({
                        principal_type: s.recipient.principal_type ?? "user",
                        principal_id: s.recipient.principal_id,
                      })
                    : void 0,
                o = W.getQueryData(eo),
                c =
                  null != l &&
                  o?.complete === !0 &&
                  o.collaborators.every((e) => (0, O.nD)(e.principal) !== l || e.source?.invitation_id != null)
              if (
                (D(W, null == n ? k : { ...k, resourceKind: "folder", libraryFileId: n.resource.resource_id }, {
                  includeShares:
                    t ||
                    ("effective" === e.kind &&
                      (1 !== e.preview.mutations.length || e.preview.mutations[0]?.invitation_id == null)),
                  preserveEffectiveAccess: c,
                }),
                await Promise.all([
                  "direct" === e.kind ||
                  (!t && 1 === e.preview.mutations.length && e.preview.mutations[0]?.invitation_id != null)
                    ? W.cancelQueries({ queryKey: ee, exact: !0 })
                    : void 0,
                  ("effective" === e.kind ? !t && e.result.effective_access.complete : null != e.updatedShare || c)
                    ? W.cancelQueries({ queryKey: eo, exact: !0 })
                    : void 0,
                ]),
                U())
              ) {
                if ("direct" === e.kind) {
                  if (
                    (W.setQueryData(ee, (r) =>
                      null == r
                        ? r
                        : {
                            ...r,
                            shares: r.shares.flatMap((r) =>
                              r.share_id !== e.share.share_id
                                ? [r]
                                : null == e.updatedShare
                                  ? []
                                  : [
                                      {
                                        ...r,
                                        ...e.updatedShare,
                                        recipient_display_name:
                                          e.updatedShare.recipient_display_name ?? r.recipient_display_name,
                                        recipient_email: e.updatedShare.recipient_email ?? r.recipient_email,
                                      },
                                    ],
                            ),
                          },
                    ),
                    null != e.updatedShare)
                  ) {
                    let r = e.updatedShare
                    W.setQueryData(eo, (i) =>
                      null == i
                        ? i
                        : {
                            ...i,
                            collaborators: i.collaborators.map((i) =>
                              i.source?.invitation_id === e.share.share_id &&
                              !0 !== i.inherited &&
                              null == i.group_source
                                ? {
                                    ...i,
                                    role_id: r.role_id,
                                    direct_role_id: r.role_id,
                                    source: { ...i.source, role_id: r.role_id },
                                  }
                                : i,
                            ),
                          },
                    )
                  }
                  c &&
                    null != s &&
                    W.setQueryData(eo, (e) =>
                      null == e
                        ? e
                        : {
                            ...e,
                            collaborators: e.collaborators.flatMap((e) =>
                              (0, O.nD)(e.principal) !== l
                                ? [e]
                                : e.source?.invitation_id === s.share_id && !0 !== e.inherited && null == e.group_source
                                  ? []
                                  : (!0 === e.inherited || null != e.group_source) && e.direct_role_id === s.role_id
                                    ? [{ ...e, direct_role_id: null }]
                                    : [e],
                            ),
                          },
                    )
                } else {
                  W.setQueryData(eo, e.result.effective_access)
                  let r = t || 1 !== e.preview.mutations.length ? void 0 : e.preview.mutations[0]
                  r?.invitation_id != null &&
                    W.setQueryData(ee, (e) =>
                      null == e
                        ? e
                        : {
                            ...e,
                            shares: e.shares.flatMap((e) =>
                              e.share_id !== r.invitation_id
                                ? [e]
                                : null == r.new_role_id
                                  ? []
                                  : [{ ...e, role_id: r.new_role_id }],
                            ),
                          },
                    )
                }
                ;($(null),
                  (0, F.aS)(z, q, {
                    ...ep(r, k),
                    outcome: t
                      ? "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_PARTIAL"
                      : "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_SUCCEEDED",
                    operationId: i,
                    succeededRecipientCount: t ? void 0 : 1,
                    failedRecipientCount: t ? 1 : void 0,
                  }),
                  t
                    ? z
                        .get(v.Id)
                        .warning(
                          (0, a.jsx)(p.A, {
                            id: "librarySharing.collaborators.partialChange",
                            defaultMessage:
                              "Some access changes couldn't be applied. Review the current permissions before trying again",
                            description:
                              "Warning toast after the Library backend reports a partially applied inherited or group access change; the user must review refreshed permissions before retrying",
                          }),
                        )
                    : z
                        .get(v.Id)
                        .success(
                          (0, a.jsx)(p.A, {
                            id: "librarySharing.collaborators.updated",
                            defaultMessage: "Access updated",
                            description:
                              "Success toast after the backend confirms a Library collaborator's role change or removal",
                          }),
                        ))
              }
            }),
            (L[23] = q),
            (L[24] = eo),
            (L[25] = U),
            (L[26] = W),
            (L[27] = z),
            (L[28] = ee),
            (L[29] = k),
            (L[30] = h))
          : (h = L[30]),
        L[31] !== q || L[32] !== U || L[33] !== W || L[34] !== z || L[35] !== k
          ? ((m = (e, r, i) => {
              if (!U()) return
              ;($(null),
                (0, F.aS)(z, q, {
                  ...ep(r, k),
                  outcome: "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_FAILED",
                  operationId: i,
                  failedRecipientCount: 1,
                  error: (0, F.GE)(e),
                }),
                z
                  .get(v.Id)
                  .danger(
                    (0, a.jsx)(p.A, {
                      id: "librarySharing.collaborators.updateFailed",
                      defaultMessage: "Couldn't update access. Review the current permissions and try again",
                      description:
                        "Error toast when changing or removing a Library collaborator's access fails; current permissions are reloaded before a new attempt",
                    }),
                    { errorAnalytics: { toastId: "librarySharing.collaborators.updateFailed" } },
                  ))
              let t = "effective" === r.kind ? r.preview.mutations.find(en) : void 0
              D(W, null == t ? k : { ...k, resourceKind: "folder", libraryFileId: t.resource.resource_id }, {
                includeShares: !0,
              })
            }),
            (L[31] = q),
            (L[32] = U),
            (L[33] = W),
            (L[34] = z),
            (L[35] = k),
            (L[36] = m))
          : (m = L[36]),
        L[37] !== s || L[38] !== o || L[39] !== c || L[40] !== h || L[41] !== m
          ? ((_ = {
              mutationKey: s,
              networkMode: "always",
              retry: !1,
              mutationFn: o,
              onMutate: c,
              onSuccess: h,
              onError: m,
            }),
            (L[37] = s),
            (L[38] = o),
            (L[39] = c),
            (L[40] = h),
            (L[41] = m),
            (L[42] = _))
          : (_ = L[42]))
      let { mutateAsync: ec, isPending: ed } = (0, M.n)(_)
      L[43] !== ec || L[44] !== Y
        ? ((f = function (e, r) {
            ;(J((i) => {
              let a = new Map(i)
              return (
                null == r ? a.delete(e) : a.set(e, "direct" === r.kind ? r.desiredRole : r.preview.desired_role),
                a
              )
            }),
              Y(
                `collaborator:${e}`,
                null == r
                  ? null
                  : {
                      kind: "collaborator",
                      save: () =>
                        ec(r)
                          .then(et, ea)
                          .finally(() => {
                            ;(J((r) => {
                              let i = new Map(r)
                              return (i.delete(e), i)
                            }),
                              Y(`collaborator:${e}`, null))
                          }),
                    },
              ))
          }),
          (L[43] = ec),
          (L[44] = Y),
          (L[45] = f))
        : (f = L[45])
      let eu = f
      ;(L[46] !== k ? ((g = (0, O.X1)(k, "state")), (L[46] = k), (L[47] = g)) : (g = L[47]),
        L[48] !== C || L[49] !== G || L[50] !== H || L[51] !== U
          ? ((y = (e) => {
              let { collaborator: r, desiredRole: i } = e
              if (!U() || (null == i ? !H : !G))
                throw Error("Library inherited access management is no longer permitted")
              return C.previewAccessChange({ recipient: r.principal, desiredRole: i })
            }),
            (L[48] = C),
            (L[49] = G),
            (L[50] = H),
            (L[51] = U),
            (L[52] = y))
          : (y = L[52]),
        L[53] !== U || L[54] !== W || L[55] !== ee || L[56] !== k.resourceKind || L[57] !== eu
          ? ((b = (e, r) => {
              let { key: i, personName: a } = r
              if (U())
                if (
                  !0 === e.affects_other_descendants ||
                  !0 === e.affects_other_group_members ||
                  e.mutations.some(
                    (r) =>
                      r.resource.resource_type !== e.resource.resource_type ||
                      r.resource.resource_id !== e.resource.resource_id ||
                      !0 === r.affects_other_descendants ||
                      !0 === r.affects_other_group_members,
                  )
                )
                  $({ key: i, personName: a, preview: e })
                else {
                  if (null != e.desired_role && 0 === e.mutations.length && "user" === e.recipient.principal_type) {
                    let r = W.getQueryData(ee)?.shares.find(
                      (r) =>
                        "active" === r.status &&
                        "principal" === r.recipient.recipient_type &&
                        (r.recipient.principal_type ?? "user") === "user" &&
                        r.recipient.principal_id === e.recipient.principal_id,
                    )
                    if (null != r && (0, O.rP)(r.role_id, k.resourceKind) !== e.desired_role)
                      return void eu(i, { kind: "direct", share: r, desiredRole: e.desired_role })
                  }
                  eu(i, { kind: "effective", preview: e })
                }
            }),
            (L[53] = U),
            (L[54] = W),
            (L[55] = ee),
            (L[56] = k.resourceKind),
            (L[57] = eu),
            (L[58] = b))
          : (b = L[58]),
        L[59] !== U || L[60] !== W || L[61] !== z || L[62] !== k
          ? ((w = () => {
              U() &&
                (z
                  .get(v.Id)
                  .danger(
                    (0, a.jsx)(p.A, {
                      id: "librarySharing.collaborators.previewFailed",
                      defaultMessage: "Couldn't check how this change affects access. Try again",
                      description:
                        "Error toast when the Library sharing dialog cannot preview an inherited permission change; no access change has been applied",
                    }),
                    { errorAnalytics: { toastId: "librarySharing.collaborators.previewFailed" } },
                  ),
                D(W, k))
            }),
            (L[59] = U),
            (L[60] = W),
            (L[61] = z),
            (L[62] = k),
            (L[63] = w))
          : (w = L[63]),
        L[64] !== g || L[65] !== y || L[66] !== b || L[67] !== w
          ? ((A = { mutationKey: g, networkMode: "always", retry: !1, mutationFn: y, onSuccess: b, onError: w }),
            (L[64] = g),
            (L[65] = y),
            (L[66] = b),
            (L[67] = w),
            (L[68] = A))
          : (A = L[68]))
      let { mutate: eh, isPending: em } = (0, M.n)(A),
        e_ = B || ed || em
      return (
        L[69] !== P ||
        L[70] !== e_ ||
        L[71] !== G ||
        L[72] !== K ||
        L[73] !== H ||
        L[74] !== X ||
        L[75] !== eh ||
        L[76] !== k.accountUserId ||
        L[77] !== eu
          ? ((S = (e) => {
              let { key: r, share: i, collaborator: t, role: n, personName: s } = e,
                l = X.get(r) ?? n
              if (
                (t?.principal.principal_type === "user" && t.principal.principal_id === k.accountUserId) ||
                (i?.recipient.recipient_type === "principal" &&
                  (i.recipient.principal_type ?? "user") === "user" &&
                  i.recipient.principal_id === k.accountUserId)
              )
                return (0, a.jsx)("span", {
                  className: "pe-4 text-sm text-tertiary",
                  children: (0, a.jsx)(T.u, { permission: n }),
                })
              let o =
                  null != t &&
                  i?.status !== "pending" &&
                  (null == i || !0 === t.inherited || null != t.group_source || "editor" === n),
                c = o ? P.filter(ei) : P,
                d = (null != i && K) || (o && H)
              return (G && c.some((e) => e !== n)) || d
                ? (0, a.jsx)(V.e, {
                    indicatorVariant: "checkmark",
                    disabled: e_,
                    options: c.map((e) => ({ value: e, disabled: !G })),
                    renderLabel: er,
                    removeLabel: (0, a.jsx)(p.A, {
                      id: "librarySharing.collaborators.remove",
                      defaultMessage: "Remove access",
                      description: "Menu item for removing a collaborator's access to a Library file or folder",
                    }),
                    value: l ?? "unknown",
                    variant: "inline",
                    onChange: (e) => {
                      if (!e_ && G && "unknown" !== e && e !== l) {
                        if (e === n) return void eu(r, null)
                        null != t && i?.status !== "pending" && ("viewer" === e || "editor" === e)
                          ? eh({ key: r, collaborator: t, desiredRole: e, personName: s })
                          : null != i && eu(r, { kind: "direct", share: i, desiredRole: e })
                      }
                    },
                    onRemoveAccess: d
                      ? () => {
                          !e_ &&
                            (H && o
                              ? eh({ key: r, collaborator: t, desiredRole: null, personName: s })
                              : null != i && K && eu(r, { kind: "direct", share: i, desiredRole: null }))
                        }
                      : void 0,
                  })
                : (0, a.jsx)("span", {
                    className: "pe-4 text-sm text-tertiary",
                    children: (0, a.jsx)(T.u, { permission: l }),
                  })
            }),
            (L[69] = P),
            (L[70] = e_),
            (L[71] = G),
            (L[72] = K),
            (L[73] = H),
            (L[74] = X),
            (L[75] = eh),
            (L[76] = k.accountUserId),
            (L[77] = eu),
            (L[78] = S))
          : (S = L[78]),
        L[79] !== X || L[80] !== N || L[81] !== j || L[82] !== k.resourceKind || L[83] !== S
          ? ((x = (0, a.jsx)(Z, {
              shares: j,
              effectiveAccess: N,
              resourceKind: k.resourceKind,
              draftRoles: X,
              renderActions: S,
            })),
            (L[79] = X),
            (L[80] = N),
            (L[81] = j),
            (L[82] = k.resourceKind),
            (L[83] = S),
            (L[84] = x))
          : (x = L[84]),
        L[85] !== ed || L[86] !== Q || L[87] !== eu
          ? ((R =
              null == Q
                ? null
                : (0, a.jsx)(el, {
                    isPending: ed,
                    personName: Q.personName,
                    preview: Q.preview,
                    onCancel: () => $(null),
                    onConfirm: () => {
                      ;(eu(Q.key, { kind: "effective", preview: Q.preview }), $(null))
                    },
                  })),
            (L[85] = ed),
            (L[86] = Q),
            (L[87] = eu),
            (L[88] = R))
          : (R = L[88]),
        L[89] !== x || L[90] !== R
          ? ((E = (0, a.jsxs)(a.Fragment, { children: [x, R] })), (L[89] = x), (L[90] = R), (L[91] = E))
          : (E = L[91]),
        E
      )
    }
    function er(e) {
      return (0, a.jsx)(T.u, { permission: "unknown" === e ? void 0 : e })
    }
    function ei(e) {
      return "viewer" === e || "editor" === e
    }
    function ea() {
      return !1
    }
    function et(e) {
      return "effective" !== e.kind || !0 !== e.result.partial_failure
    }
    function en(e) {
      return "library_folder" === e.resource.resource_type
    }
    function es(e) {
      return "library_folder" === e.resource.resource_type
    }
    function el(e) {
      let r,
        i,
        n,
        l,
        o,
        c,
        d,
        u,
        h,
        m,
        _,
        f,
        g,
        b,
        v,
        w,
        I = (0, t.c)(40),
        { isPending: A, personName: S, preview: x, onCancel: R, onConfirm: L } = e
      I[0] !== x.affects_other_descendants || I[1] !== x.mutations
        ? ((r = x.affects_other_descendants || x.mutations.some(ed)),
          (I[0] = x.affects_other_descendants),
          (I[1] = x.mutations),
          (I[2] = r))
        : (r = I[2])
      let C = r
      I[3] !== x.affects_other_group_members || I[4] !== x.mutations
        ? ((i = x.affects_other_group_members || x.mutations.some(ec)),
          (I[3] = x.affects_other_group_members),
          (I[4] = x.mutations),
          (I[5] = i))
        : (i = I[5])
      let T = i
      return (
        I[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)(p.A, {
              id: "librarySharing.collaborators.confirmTitle",
              defaultMessage: "Change shared access?",
              description:
                "Title of the confirmation dialog shown before a Library permission change affects parent folders or other members of a group",
            })),
            (I[6] = n))
          : (n = I[6]),
        I[7] !== S
          ? ((l =
              null == S
                ? (0, a.jsx)(p.A, {
                    id: "librarySharing.collaborators.confirmDescriptionUnknown",
                    defaultMessage: "Review all access changes before continuing",
                    description:
                      "Body of the inherited Library access confirmation when the collaborator's name and email are unavailable; affected resources are listed below",
                  })
                : (0, a.jsx)(p.A, {
                    id: "librarySharing.collaborators.confirmDescription",
                    defaultMessage: "Review all access changes for {personName} before continuing",
                    description:
                      "Body of the inherited Library access confirmation; personName is the collaborator whose effective access is being changed, and the affected resources are listed below",
                    values: { personName: S },
                  })),
            (I[7] = S),
            (I[8] = l))
          : (l = I[8]),
        I[9] !== A || I[10] !== L
          ? ((o = () => {
              A || L()
            }),
            (I[9] = A),
            (I[10] = L),
            (I[11] = o))
          : (o = I[11]),
        I[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)(p.A, {
              id: "librarySharing.collaborators.cancelChange",
              defaultMessage: "Cancel",
              description: "Button for dismissing an inherited Library access confirmation without applying changes",
            })),
            (I[12] = c))
          : (c = I[12]),
        I[13] !== A
          ? ((d = (0, a.jsx)($.a.Close, {
              children: (0, a.jsx)(s.$, { size: "xl", color: "secondary", disabled: A, type: "button", children: c }),
            })),
            (I[13] = A),
            (I[14] = d))
          : (d = I[14]),
        I[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, a.jsx)(p.A, {
              id: "librarySharing.collaborators.stageChange",
              defaultMessage: "Continue",
              description:
                "Confirmation button staging the listed Library permission changes, including parent-folder or group effects; the user must still save the sharing dialog to apply them",
            })),
            (I[15] = u))
          : (u = I[15]),
        I[16] !== A
          ? ((h = (0, a.jsx)(s.$, {
              size: "xl",
              color: "primary",
              disabled: A,
              loading: A,
              type: "submit",
              children: u,
            })),
            (I[16] = A),
            (I[17] = h))
          : (h = I[17]),
        I[18] !== d || I[19] !== h
          ? ((m = (0, a.jsxs)(a.Fragment, { children: [d, h] })), (I[18] = d), (I[19] = h), (I[20] = m))
          : (m = I[20]),
        I[21] !== x.mutations ? ((_ = x.mutations.map(eo)), (I[21] = x.mutations), (I[22] = _)) : (_ = I[22]),
        I[23] !== _
          ? ((f = (0, a.jsx)("ul", { className: "flex flex-col gap-2", children: _ })), (I[23] = _), (I[24] = f))
          : (f = I[24]),
        I[25] !== C
          ? ((g = C
              ? (0, a.jsx)("p", {
                  className: "text-sm text-codex-description",
                  children: (0, a.jsx)(p.A, {
                    id: "librarySharing.collaborators.descendantImpact",
                    defaultMessage: "This also changes access to other files and folders inside the affected folders",
                    description:
                      "Warning in the Library inherited access confirmation that changing a parent folder's permissions also changes access to its descendants",
                  }),
                })
              : null),
            (I[25] = C),
            (I[26] = g))
          : (g = I[26]),
        I[27] !== T
          ? ((b = T
              ? (0, a.jsx)("p", {
                  className: "text-sm text-codex-description",
                  children: (0, a.jsx)(p.A, {
                    id: "librarySharing.collaborators.groupImpact",
                    defaultMessage: "This also changes access for other people in the affected groups",
                    description:
                      "Warning in the Library permission confirmation that changing a group grant affects other members of that group",
                  }),
                })
              : null),
            (I[27] = T),
            (I[28] = b))
          : (b = I[28]),
        I[29] !== f || I[30] !== g || I[31] !== b
          ? ((v = (0, a.jsx)(y.OO, {
              children: (0, a.jsxs)("div", { className: "flex flex-col gap-3", children: [f, g, b] }),
            })),
            (I[29] = f),
            (I[30] = g),
            (I[31] = b),
            (I[32] = v))
          : (v = I[32]),
        I[33] !== A || I[34] !== R || I[35] !== m || I[36] !== v || I[37] !== l || I[38] !== o
          ? ((w = (0, a.jsx)(E.Ic, {
              title: n,
              subtitle: l,
              isDismissalDisabled: A,
              onClose: R,
              onSubmit: o,
              footer: m,
              children: v,
            })),
            (I[33] = A),
            (I[34] = R),
            (I[35] = m),
            (I[36] = v),
            (I[37] = l),
            (I[38] = o),
            (I[39] = w))
          : (w = I[39]),
        w
      )
    }
    function eo(e) {
      let r = "library_folder" === e.resource.resource_type ? "folder" : "file"
      return (0, a.jsxs)(
        "li",
        {
          className: "flex justify-between gap-3",
          children: [
            (0, a.jsx)("span", {
              className: "min-w-0 truncate",
              children:
                e.resource_display_name ??
                (0, a.jsx)(p.A, {
                  id: "librarySharing.collaborators.unnamedResource",
                  defaultMessage: "Shared item",
                  description:
                    "Fallback resource label in the Library inherited access confirmation when the server does not provide the file or folder name",
                }),
            }),
            (0, a.jsxs)("span", {
              className: "shrink-0 text-codex-description",
              children: [
                (0, a.jsx)(eu, { roleId: e.old_role_id, resourceKind: r }),
                (0, a.jsx)("span", {
                  className: "mx-1",
                  children: (0, a.jsx)(p.A, {
                    id: "librarySharing.collaborators.roleChangeSeparator",
                    defaultMessage: "→",
                    description:
                      "Arrow between the separate previous and new permission labels in the Library access-change confirmation. Point from the old permission to the new one in your language's reading direction; the interface adds spacing.",
                  }),
                }),
                (0, a.jsx)(eu, { roleId: e.new_role_id, resourceKind: r }),
              ],
            }),
          ],
        },
        `${e.resource.resource_type}:${e.resource.resource_id}:${(0, O.nD)(e.principal)}`,
      )
    }
    function ec(e) {
      return e.affects_other_group_members
    }
    function ed(e) {
      return e.affects_other_descendants
    }
    function eu(e) {
      let r,
        i = (0, t.c)(3),
        { resourceKind: n, roleId: s } = e
      return (
        i[0] !== n || i[1] !== s
          ? ((r =
              null == s
                ? (0, a.jsx)(p.A, {
                    id: "librarySharing.collaborators.noAccess",
                    defaultMessage: "No access",
                    description:
                      "Permission value in the Library access-change confirmation when no role existed before the change or access will be removed",
                  })
                : (0, a.jsx)(T.u, { permission: (0, O.rP)(s, n) })),
            (i[0] = n),
            (i[1] = s),
            (i[2] = r))
          : (r = i[2]),
        r
      )
    }
    function ep(e, r) {
      let i = "direct" === e.kind ? e.share.recipient : e.preview.recipient,
        a = "direct" === e.kind ? e.desiredRole : e.preview.desired_role,
        t = "direct" === e.kind ? (0, O.rP)(e.share.role_id, r.resourceKind) : (e.preview.current_role ?? void 0),
        n = "CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_USER"
      return (
        "recipient_type" in i && "email" === i.recipient_type
          ? (n = "CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_EMAIL")
          : "principal_type" in i &&
            "group" === i.principal_type &&
            (n = "CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_GROUP"),
        {
          action:
            null == a
              ? "CHATGPT_FILE_LIBRARY_SHARING_ACTION_REMOVE_COLLABORATOR"
              : "CHATGPT_FILE_LIBRARY_SHARING_ACTION_CHANGE_ROLE",
          recipientKind: n,
          recipientCount: 1,
          role: (0, F.qT)(a ?? t),
          previousRole: (0, F.qT)("direct" === e.kind && null == a ? void 0 : t),
        }
      )
    }
    var eh = i("Yqxh"),
      em = i("aRS8"),
      e_ = i("AEhU")
    function ef(e) {
      let r,
        i,
        n,
        s,
        o,
        c,
        m,
        _,
        f,
        b,
        w,
        A,
        S,
        x = (0, t.c)(59),
        {
          account: R,
          api: E,
          sharingScope: L,
          sharingState: T,
          shares: k,
          effectiveAccess: q,
          analytics: j,
          canInvite: N,
          disabled: P,
          isCurrentSession: G,
          onStageChange: K,
        } = e,
        H = (0, d.gh)(I.u),
        B = (0, l.jE)(),
        U = "workspace" === R.structure
      x[0] !== U ? ((r = { enabled: U }), (x[0] = U), (x[1] = r)) : (r = x[1])
      let { data: Y, isError: z } = (0, d._U)(h.Jk, L.accountId, r)
      x[2] !== R || x[3] !== Y || x[4] !== z
        ? ((i = (0, C.V)(R, Y, z)), (x[2] = R), (x[3] = Y), (x[4] = z), (x[5] = i))
        : (i = x[5])
      let W = i,
        { canSearchMembers: Q } = W,
        $ = null == k ? void 0 : (0, O.q4)(k.allowed_roles, L.resourceKind),
        [V, X] = (0, u.useState)()
      x[6] === Symbol.for("react.memo_cache_sentinel") ? ((n = []), (x[6] = n)) : (n = x[6])
      let [Z, J] = (0, u.useState)(n),
        ee = (0, eh.x)(Z.some(eA), V),
        er = $?.includes(ee) ? ee : $?.[0],
        [ei, ea] = (0, u.useState)("")
      x[7] !== q || x[8] !== Z || x[9] !== k || x[10] !== T
        ? (({ existingPrincipalKeys: o, existingEmails: s } = (0, e_.Hd)(T, k, q)),
          (c = (0, e_.Go)(Z, s, o)),
          (x[7] = q),
          (x[8] = Z),
          (x[9] = k),
          (x[10] = T),
          (x[11] = s),
          (x[12] = o),
          (x[13] = c))
        : ((s = x[11]), (o = x[12]), (c = x[13]))
      let et = c
      x[14] !== $
        ? ((m = function (e, r) {
            let { recipient: i } = e,
              a = (0, eh.x)("principal" === i.recipient_type && "group" === i.principal_type, r)
            return $?.includes(a) ? a : $?.[0]
          }),
          (x[14] = $),
          (x[15] = m))
        : (m = x[15])
      let en = m
      ;(x[16] !== L ? ((_ = (0, O.X1)(L, "state")), (x[16] = L), (x[17] = _)) : (_ = x[17]),
        x[18] !== E ||
        x[19] !== N ||
        x[20] !== Q ||
        x[21] !== s ||
        x[22] !== o ||
        x[23] !== en ||
        x[24] !== G ||
        x[25] !== U ||
        x[26] !== L.resourceKind
          ? ((f = (e) => {
              let { invitees: r, role: i, explicitRole: a } = e,
                t = G() && N && (!U || Q) && r.every(eI) && !(0, e_.Go)(r, s, o)
              return Promise.allSettled(
                r.map(async (e) => {
                  let { recipient: r } = e,
                    i = en(e, a)
                  if (!t || null == i) throw Error("Library invitations are no longer permitted")
                  return E.createShare({ recipient: r, roleId: O.F2[L.resourceKind][i] })
                }),
              ).then((e) => ({ results: e, role: i }))
            }),
            (x[18] = E),
            (x[19] = N),
            (x[20] = Q),
            (x[21] = s),
            (x[22] = o),
            (x[23] = en),
            (x[24] = G),
            (x[25] = U),
            (x[26] = L.resourceKind),
            (x[27] = f))
          : (f = x[27]),
        x[28] !== j || x[29] !== G || x[30] !== H
          ? ((b = (e) => {
              let { invitees: r, role: i } = e,
                a = crypto.randomUUID()
              return (
                G() &&
                  (0, F.aS)(H, j, {
                    action: "CHATGPT_FILE_LIBRARY_SHARING_ACTION_INVITE",
                    outcome: "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_STARTED",
                    operationId: a,
                    recipientCount: r.length,
                    recipientKind: (0, F.r6)(r.map(ew)),
                    role: (0, F.qT)(i),
                  }),
                a
              )
            }),
            (x[28] = j),
            (x[29] = G),
            (x[30] = H),
            (x[31] = b))
          : (b = x[31]))
      let { mutateAsync: es, isPending: el } = (0, M.n)({
          mutationKey: _,
          networkMode: "always",
          retry: !1,
          mutationFn: f,
          onMutate: b,
          onSuccess: async (e, r, i) => {
            let { results: t, role: n } = e,
              { invitees: s, explicitRole: l } = r
            if (!G()) return
            let o = new Set(t.flatMap((e, r) => ("rejected" === e.status ? [s[r].id] : []))),
              c = t.flatMap((e, r) =>
                "fulfilled" === e.status
                  ? [
                      {
                        ...e.value,
                        recipient_display_name: e.value.recipient_display_name ?? s[r].label,
                        recipient_email: e.value.recipient_email ?? s[r].secondaryLabel,
                      },
                    ]
                  : [],
              ),
              d = "file" === L.resourceKind && c.length > 0
            if (
              (d &&
                (await (async function (e, r) {
                  if ("file" !== r.resourceKind) return
                  let i = {
                      queryKey: ["library-api", r.accountId],
                      predicate: ({ queryKey: e }) => e[2] === r.accountUserId && "browse" === e[3],
                    },
                    a = e.cancelQueries(i)
                  ;(e.setQueriesData(i, (e) => {
                    if (null == e) return e
                    let i = !1,
                      a = e.pages.map((e) => ({
                        ...e,
                        items: e.items.map((e) =>
                          "file" !== e.node.kind || e.node.id !== r.libraryFileId || !0 === e.node.is_shared
                            ? e
                            : ((i = !0), { ...e, node: { ...e.node, is_shared: !0 } }),
                        ),
                      }))
                    return i ? { ...e, pages: a } : e
                  }),
                    await a)
                })(B, L)),
              await B.cancelQueries({ queryKey: (0, O.X1)(L, "shares"), exact: !0 }),
              !G())
            )
              return
            ;(B.setQueryData((0, O.X1)(L, "shares"), (e) =>
              null == e ? e : { ...e, shares: [...new Map([...e.shares, ...c].map(ev)).values()] },
            ),
              D(B, L, { includeShares: 0 === c.length, preserveLibraryBrowse: d }),
              X(o.size > 0 ? l : void 0),
              ea(""),
              ec(
                s.filter((e) => o.has(e.id)),
                l,
              ))
            let u = "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_SUCCEEDED"
            o.size > 0 &&
              (u =
                0 === c.length
                  ? "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_FAILED"
                  : "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_PARTIAL")
            let h = t.find(eb)
            ;((0, F.aS)(H, j, {
              action: "CHATGPT_FILE_LIBRARY_SHARING_ACTION_INVITE",
              outcome: u,
              operationId: i,
              recipientCount: s.length,
              recipientKind: (0, F.r6)(s.map(ey)),
              succeededRecipientCount: c.length,
              failedRecipientCount: o.size,
              role: (0, F.qT)(n),
              error: (0, F.GE)(h?.reason instanceof Error ? h.reason : void 0),
            }),
              0 === o.size
                ? H.get(v.Id).success(
                    (0, a.jsx)(p.A, {
                      id: "librarySharing.invite.sent",
                      defaultMessage: "{count, plural, one {Invitation sent} other {Invitations sent}}",
                      description:
                        "Toast after Library sharing invitations are confirmed by the backend; count is the number of invited people or groups",
                      values: { count: c.length },
                    }),
                  )
                : H.get(v.Id).danger(
                    (0, a.jsx)(p.A, {
                      id: "librarySharing.invite.failed",
                      defaultMessage:
                        "{count, plural, one {One invitation failed} other {# invitations failed}}. Failed recipients are still selected so you can try again",
                      description:
                        "Toast after some or all Library invitations fail; count is only the failed invitations, which remain selected for retry",
                      values: { count: o.size },
                    }),
                    { errorAnalytics: { toastId: "librarySharing.invite.failed" } },
                  ))
          },
        }),
        eo = P || el
      function ec(e, r) {
        ;(J(e),
          K(
            "invite",
            0 === e.length
              ? null
              : {
                  kind: "invite",
                  invitees: e,
                  save: async () => {
                    try {
                      let i = e.map((e) => en(e, r ?? V)),
                        { results: a } = await es({
                          invitees: e,
                          explicitRole: r ?? V,
                          role: i.every((e) => e === i[0]) ? i[0] : void 0,
                        })
                      return a.every(eg)
                    } catch {
                      return !1
                    }
                  },
                },
          ))
      }
      return (
        x[32] !== R.structure ||
        x[33] !== $ ||
        x[34] !== E ||
        x[35] !== Q ||
        x[36] !== eo ||
        x[37] !== s ||
        x[38] !== o ||
        x[39] !== et ||
        x[40] !== ei ||
        x[41] !== W ||
        x[42] !== er ||
        x[43] !== Z ||
        x[44] !== X ||
        x[45] !== k ||
        x[46] !== L.accountId ||
        x[47] !== L.accountUserId ||
        x[48] !== T ||
        x[49] !== ec
          ? ((w =
              ("personal" === R.structure || Q) && (null == $ || null != er)
                ? (0, a.jsxs)(y.OO, {
                    children: [
                      (0, a.jsx)(em.h, {
                        accountId: L.accountId,
                        currentPrincipalId: L.accountUserId,
                        currentEmail: T.viewer.email ?? void 0,
                        ...W,
                        disabled: eo,
                        existingPrincipalKeys: o,
                        existingEmails: s,
                        shares: k,
                        query: ei,
                        onQueryChange: ea,
                        selected: Z,
                        resolveRecipient: E.resolveRecipient,
                        onChange: ec,
                        role: er,
                        allowedRoles: $,
                        onRoleChange: (e) => {
                          ;(X(e), ec(Z, e))
                        },
                      }),
                      et
                        ? (0, a.jsx)("p", {
                            className: "text-sm text-danger",
                            role: "alert",
                            children: (0, a.jsx)(p.A, {
                              id: "librarySharing.invite.alreadyAdded",
                              defaultMessage: "This person already has access or is selected",
                              description:
                                "Validation error when a Library invite includes an existing collaborator or duplicate recipient",
                            }),
                          })
                        : null,
                    ],
                  })
                : null),
            (x[32] = R.structure),
            (x[33] = $),
            (x[34] = E),
            (x[35] = Q),
            (x[36] = eo),
            (x[37] = s),
            (x[38] = o),
            (x[39] = et),
            (x[40] = ei),
            (x[41] = W),
            (x[42] = er),
            (x[43] = Z),
            (x[44] = X),
            (x[45] = k),
            (x[46] = L.accountId),
            (x[47] = L.accountUserId),
            (x[48] = T),
            (x[49] = ec),
            (x[50] = w))
          : (w = x[50]),
        x[51] !== U || x[52] !== B || x[53] !== z || x[54] !== L.accountId
          ? ((A =
              U && z
                ? (0, a.jsx)(y.OO, {
                    children: (0, a.jsx)(g.l, {
                      type: "error",
                      role: "alert",
                      content: (0, a.jsx)(p.A, {
                        id: "librarySharing.access.incomplete",
                        defaultMessage: "Couldn't load all access details. Some sharing actions are unavailable",
                        description:
                          "Error when collaborators, inherited permissions, or workspace policy cannot be fully loaded; unsafe permission actions remain disabled",
                      }),
                      primaryCtaText: (0, a.jsx)(p.A, {
                        id: "librarySharing.retry",
                        defaultMessage: "Retry",
                        description: "Button retrying a failed Library sharing data request",
                      }),
                      onPrimaryCtaClick: () => {
                        B.invalidateQueries({ queryKey: ["accounts", "settings", L.accountId] })
                      },
                    }),
                  })
                : null),
            (x[51] = U),
            (x[52] = B),
            (x[53] = z),
            (x[54] = L.accountId),
            (x[55] = A))
          : (A = x[55]),
        x[56] !== w || x[57] !== A
          ? ((S = (0, a.jsxs)(a.Fragment, { children: [w, A] })), (x[56] = w), (x[57] = A), (x[58] = S))
          : (S = x[58]),
        S
      )
    }
    function eg(e) {
      return "fulfilled" === e.status
    }
    function ey(e) {
      let { recipient: r } = e
      return r
    }
    function eb(e) {
      return "rejected" === e.status
    }
    function ev(e) {
      return [e.share_id, e]
    }
    function ew(e) {
      let { recipient: r } = e
      return r
    }
    function eI(e) {
      return e.isValid
    }
    function eA(e) {
      let { recipient: r } = e
      return "principal" === r.recipient_type && "group" === r.principal_type
    }
    var eS = i("PItM")
    function ex(e) {
      let r,
        i,
        n,
        s,
        o,
        c,
        h,
        m,
        _,
        f,
        g,
        y,
        w,
        A,
        S = (0, t.c)(79),
        {
          allowedRoles: R,
          analytics: E,
          api: L,
          canInitiateSharing: C,
          canManage: k,
          disabled: j,
          permissionsPending: N,
          hasIndependentEditorAccess: P,
          isCurrentSession: G,
          isWorkspace: K,
          sharingScope: H,
          sharingState: B,
          workspaceName: U,
          onStageChange: Y,
        } = e,
        z = void 0 !== N && N,
        W = (0, d.gh)(I.u),
        $ = (0, l.jE)(),
        X = (0, d.Ul)(!!C && Q.Uw)
      S[0] !== H || S[1] !== B
        ? ((r = (0, O.Sq)({ sharingState: B, scope: H })), (S[0] = H), (S[1] = B), (S[2] = r))
        : (r = S[2])
      let Z = r,
        [J, ee] = (0, u.useState)(null),
        er = J ?? Z
      S[3] !== P || S[4] !== H.accountUserId || S[5] !== H.resourceKind
        ? ((i = (e) =>
            e.owner.principal.principal_id !== H.accountUserId &&
            "workspace" === e.link_access &&
            e.role_id === O.F2[H.resourceKind].editor &&
            !P),
          (S[3] = P),
          (S[4] = H.accountUserId),
          (S[5] = H.resourceKind),
          (S[6] = i))
        : (i = S[6])
      let ei = i
      S[7] !== R || S[8] !== X || S[9] !== k || S[10] !== K || S[11] !== ei || S[12] !== Z || S[13] !== B
        ? ((n = k && K && null != Z && R?.includes("viewer") === !0 && !ei(B) && (X || "workspace" === Z.mode)),
          (S[7] = R),
          (S[8] = X),
          (S[9] = k),
          (S[10] = K),
          (S[11] = ei),
          (S[12] = Z),
          (S[13] = B),
          (S[14] = n))
        : (n = S[14])
      let ea = n,
        et = R?.filter(eC)
      ;(S[15] !== H ? ((s = (0, O.X1)(H, "state")), (S[15] = H), (S[16] = s)) : (s = S[16]),
        S[17] !== R ||
        S[18] !== L ||
        S[19] !== ea ||
        S[20] !== C ||
        S[21] !== G ||
        S[22] !== $ ||
        S[23] !== ei ||
        S[24] !== W ||
        S[25] !== H ||
        S[26] !== B
          ? ((o = (e) => {
              let { next: r, observedState: i } = e
              if (!G() || !ea || ("workspace" === r.mode && (!C || !W.get(Q.Uw) || !R?.includes(r.role))))
                throw Error("Library link access management is not permitted")
              if (ei($.getQueryData((0, O.X1)(H, "state")) ?? B))
                throw Error("Library workspace access requires the owner")
              return L.updateLinkAccess({
                expectedOwner: i.owner.principal,
                linkAccess: r,
                expectedInvitationId: "workspace" === i.link_access ? (i.workspace_invitation_id ?? void 0) : void 0,
                expectedRoleId:
                  "collaborators_only" === r.mode && "workspace" === i.link_access ? (i.role_id ?? void 0) : void 0,
              })
            }),
            (S[17] = R),
            (S[18] = L),
            (S[19] = ea),
            (S[20] = C),
            (S[21] = G),
            (S[22] = $),
            (S[23] = ei),
            (S[24] = W),
            (S[25] = H),
            (S[26] = B),
            (S[27] = o))
          : (o = S[27]),
        S[28] !== E || S[29] !== G || S[30] !== $ || S[31] !== W || S[32] !== H
          ? ((c = async (e) => {
              let { next: r, observedState: i } = e
              await $.cancelQueries({ queryKey: (0, O.X1)(H, "state") })
              let a = {
                action: "CHATGPT_FILE_LIBRARY_SHARING_ACTION_CHANGE_LINK_ACCESS",
                operationId: crypto.randomUUID(),
                linkAccess:
                  "workspace" === r.mode
                    ? "CHATGPT_FILE_LIBRARY_SHARING_LINK_ACCESS_WORKSPACE"
                    : "CHATGPT_FILE_LIBRARY_SHARING_LINK_ACCESS_COLLABORATORS_ONLY",
                recipientKind:
                  "workspace" === r.mode ? "CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_WORKSPACE" : void 0,
                role: (0, F.qT)("workspace" === r.mode ? r.role : void 0),
                previousRole: (0, F.qT)(
                  "workspace" === i.link_access ? (0, O.rP)(i.role_id ?? "", H.resourceKind) : void 0,
                ),
              }
              return (G() && (0, F.aS)(W, E, { ...a, outcome: "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_STARTED" }), a)
            }),
            (h = (e, r, i) => {
              G() &&
                ($.setQueryData((0, O.X1)(H, "state"), e),
                (0, F.aS)(W, E, { ...i, outcome: "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_SUCCEEDED" }),
                W.get(v.Id).success(
                  (0, a.jsx)(p.A, {
                    id: "librarySharing.link.saved",
                    defaultMessage: "Link access updated",
                    description:
                      "Success toast after the Library backend confirms a change to a file or folder's workspace link access",
                  }),
                ),
                D($, H, { preserveState: !0 }))
            }),
            (S[28] = E),
            (S[29] = G),
            (S[30] = $),
            (S[31] = W),
            (S[32] = H),
            (S[33] = c),
            (S[34] = h))
          : ((c = S[33]), (h = S[34])),
        S[35] !== E || S[36] !== G || S[37] !== Y || S[38] !== $ || S[39] !== W || S[40] !== H
          ? ((m = async (e, r, i) => {
              let { observedState: t } = r
              if (!G() || (await D($, H), !G())) return
              let n = $.getQueryData((0, O.X1)(H, "state")),
                s =
                  (e instanceof q.fk && 409 === e.responseStatus) ||
                  (null != n &&
                    (n.owner.principal.principal_id !== t.owner.principal.principal_id ||
                      n.link_access !== t.link_access ||
                      n.workspace_invitation_id !== t.workspace_invitation_id ||
                      n.role_id !== t.role_id))
              ;(s && (ee(null), Y("link", null)),
                (0, F.aS)(W, E, {
                  ...i,
                  action: "CHATGPT_FILE_LIBRARY_SHARING_ACTION_CHANGE_LINK_ACCESS",
                  outcome: "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_FAILED",
                  error: (0, F.GE)(e),
                }),
                s
                  ? W.get(v.Id).danger(
                      (0, a.jsx)(p.A, {
                        id: "librarySharing.link.conflict",
                        defaultMessage: "Link access changed. Choose your setting again before saving",
                        description:
                          "Error toast after another sharing change invalidates a staged Library link-access choice; the user must choose again against refreshed permissions",
                      }),
                      { errorAnalytics: { toastId: "linkAccess.conflict" } },
                    )
                  : W.get(v.Id).danger(
                      e instanceof q.fk && "library_manage_access_would_lose_permission" === e.errorCode
                        ? (0, a.jsx)(p.A, {
                            id: "librarySharing.link.wouldLoseAccess",
                            defaultMessage:
                              "You can’t make a change that reduces your own access. Ask the owner to make it.",
                            description:
                              "Error toast when a Library workspace link change would reduce the current editor's own access; the owner must make this change",
                          })
                        : (0, a.jsx)(p.A, {
                            id: "librarySharing.link.failed",
                            defaultMessage: "Couldn't update link access. Try again",
                            description:
                              "Error toast when saving workspace link access for a Library file or folder fails; the prior access policy remains in place",
                          }),
                      { errorAnalytics: { toastId: "linkAccess.onError" } },
                    ))
            }),
            (S[35] = E),
            (S[36] = G),
            (S[37] = Y),
            (S[38] = $),
            (S[39] = W),
            (S[40] = H),
            (S[41] = m))
          : (m = S[41]),
        S[42] !== s || S[43] !== o || S[44] !== c || S[45] !== h || S[46] !== m
          ? ((_ = {
              mutationKey: s,
              networkMode: "always",
              retry: !1,
              mutationFn: o,
              onMutate: c,
              onSuccess: h,
              onError: m,
            }),
            (S[42] = s),
            (S[43] = o),
            (S[44] = c),
            (S[45] = h),
            (S[46] = m),
            (S[47] = _))
          : (_ = S[47]))
      let { mutateAsync: en, isPending: es } = (0, M.n)(_)
      S[48] !== ea || S[49] !== j || S[50] !== G || S[51] !== en || S[52] !== Y || S[53] !== Z || S[54] !== B
        ? ((f = function (e) {
            if (!G() || j || !ea) return
            let r = e.mode === Z?.mode && ("workspace" !== e.mode || (Z?.mode === "workspace" && e.role === Z.role))
            ;(ee(r ? null : e),
              Y(
                "link",
                r
                  ? null
                  : { kind: "link", save: () => en({ next: e, observedState: B }).then(() => (ee(null), !0), eL) },
              ))
          }),
          (S[48] = ea),
          (S[49] = j),
          (S[50] = G),
          (S[51] = en),
          (S[52] = Y),
          (S[53] = Z),
          (S[54] = B),
          (S[55] = f))
        : (f = S[55])
      let el = f,
        eo = x.p
      S[56] !== ea ||
      S[57] !== X ||
      S[58] !== j ||
      S[59] !== es ||
      S[60] !== er ||
      S[61] !== z ||
      S[62] !== Z ||
      S[63] !== H.accountId ||
      S[64] !== el ||
      S[65] !== U
        ? ((g =
            null != er
              ? (0, a.jsx)(eS.d, {
                  disabled: !ea || j || z || es,
                  options: [
                    { value: "collaborators_only", mode: "restricted", icon: (0, a.jsx)(b.esp, {}) },
                    { value: "workspace", mode: "workspace", icon: (0, a.jsx)(b.TGw, {}), hidden: !X },
                  ],
                  workspaceName: U,
                  value: er.mode,
                  onChange:
                    ea || z
                      ? (e) => {
                          j ||
                            es ||
                            e === er.mode ||
                            ("collaborators_only" === e
                              ? el({ mode: e })
                              : X &&
                                el({
                                  mode: e,
                                  role: Z?.mode === "workspace" ? Z.role : "viewer",
                                  workspaceId: H.accountId,
                                }))
                        }
                      : void 0,
                })
              : (0, a.jsx)("span", {
                  className: "text-tertiary",
                  children: (0, a.jsx)(p.A, {
                    id: "librarySharing.link.unavailable",
                    defaultMessage: "Link access unavailable",
                    description:
                      "Shown when the backend's Library link-access policy cannot safely be interpreted; this does not claim the file is private",
                  }),
                })),
          (S[56] = ea),
          (S[57] = X),
          (S[58] = j),
          (S[59] = es),
          (S[60] = er),
          (S[61] = z),
          (S[62] = Z),
          (S[63] = H.accountId),
          (S[64] = el),
          (S[65] = U),
          (S[66] = g))
        : (g = S[66])
      let ec =
        er?.mode === "workspace" && ea && X && null != et && et.length > 1
          ? (0, a.jsx)(V.e, {
              indicatorVariant: "checkmark",
              disabled: j || es,
              options: et.map(eE),
              renderLabel: eR,
              value: er.role,
              variant: "inline",
              onChange: (e) => {
                j || es || !X || ("viewer" !== e && "editor" !== e) || e === er.role || el({ ...er, role: e })
              },
            })
          : null
      return (
        S[67] !== ea || S[68] !== X || S[69] !== er || S[70] !== et
          ? ((y =
              er?.mode !== "workspace" || (ea && X && null != et && !(et.length < 2))
                ? null
                : (0, a.jsx)("span", {
                    className: "pe-2 text-sm text-tertiary",
                    children: (0, a.jsx)(T.u, { permission: er.role }),
                  })),
            (S[67] = ea),
            (S[68] = X),
            (S[69] = er),
            (S[70] = et),
            (S[71] = y))
          : (y = S[71]),
        S[72] !== g || S[73] !== ec || S[74] !== y
          ? ((w = (0, a.jsxs)("div", {
              className: "flex items-center justify-between gap-3 text-sm",
              children: [g, ec, y],
            })),
            (S[72] = g),
            (S[73] = ec),
            (S[74] = y),
            (S[75] = w))
          : (w = S[75]),
        S[76] !== eo || S[77] !== w
          ? ((A = (0, a.jsx)(eo, { kind: "link", children: w })), (S[76] = eo), (S[77] = w), (S[78] = A))
          : (A = S[78]),
        A
      )
    }
    function eR(e) {
      return (0, a.jsx)(T.u, { permission: e })
    }
    function eE(e) {
      return { value: e }
    }
    function eL() {
      return !1
    }
    function eC(e) {
      return "viewer" === e || "editor" === e
    }
    var eT = i("TjgH")
    function ek(e) {
      let r,
        i,
        n,
        c,
        _,
        f,
        b,
        w,
        A,
        R,
        E,
        L,
        q,
        N,
        G,
        K = (0, t.c)(60),
        {
          account: H,
          analytics: B,
          api: U,
          canRequest: Y,
          children: z,
          disabled: W,
          isCurrentSession: Q,
          roster: $,
          renderDialog: V,
          sharingScope: X,
          sharingState: Z,
        } = e,
        J = (0, d.gh)(I.u),
        ee = (0, l.jE)()
      K[0] !== B.shareSessionId || K[1] !== ee || K[2] !== X
        ? ((r = () => (0, P.X)(ee, X, "requester-access-requests", B.shareSessionId)),
          (K[0] = B.shareSessionId),
          (K[1] = ee),
          (K[2] = X),
          (K[3] = r))
        : (r = K[3])
      let [er] = (0, u.useState)(r),
        ei = "workspace" === H.structure,
        ea = ei && Y
      K[4] !== ea ? ((i = { enabled: ea }), (K[4] = ea), (K[5] = i)) : (i = K[5])
      let { data: et, isError: en } = (0, d._U)(h.Jk, X.accountId, i),
        es = (0, C.V)(H, et, en),
        { canSearchMembers: el } = es,
        eo = Y && (!ei || el)
      K[6] !== U
        ? ((n = (e) => {
            let { pageParam: r, signal: i } = e
            return U.getRequesterAccessRequests({ cursor: r, signal: i })
          }),
          (K[6] = U),
          (K[7] = n))
        : (n = K[7])
      let {
          data: ec,
          isError: ed,
          isFetching: eu,
          isSuccess: ep,
          hasNextPage: eh,
          fetchNextPage: ef,
          refetch: eg,
        } = (0, j.q)({
          enabled: eo,
          queryKey: [...(0, O.X1)(X, "requester-access-requests"), "pages", er],
          queryFn: n,
          initialPageParam: null,
          getNextPageParam: ez,
          staleTime: k.D.THIRTY_SECONDS,
          retry: !1,
        }),
        ey =
          eo &&
          ep &&
          !ed &&
          ec?.pages.every((e) => e.requests.every((e) => (0, O.nD)(e.resource_owner) === (0, O.nD)(Z.owner.principal)))
            ? ec
            : void 0,
        eb = ey?.pages.flatMap(eY)
      K[8] !== ey ? ((c = null != ey && ey.pages.at(-1)?.next_cursor == null), (K[8] = ey), (K[9] = c)) : (c = K[9])
      let ev = c,
        ew = new Map(ey?.pages.flatMap(eB)),
        eI = $?.owner.principal_id === Z.owner.principal.principal_id,
        eA =
          eI && $?.collaborators.some(eH)
            ? (0, O.b3)(
                eb?.flatMap((e) =>
                  e.recipients.some(
                    (r) =>
                      "user" === r.principal_type &&
                      "satisfied" === (0, O.SK)(e, r) &&
                      !$.collaborators.some((e) => {
                        let { principal: i } = e
                        return (0, O.nD)(i) === (0, O.nD)(r)
                      }),
                  )
                    ? [e.request_id]
                    : [],
                ) ?? [],
              )
            : [],
        {
          data: eS,
          isError: ex,
          isFetching: eR,
          isSuccess: eE,
        } = (0, o.I)({
          enabled: eo && eA.length > 0,
          queryKey: (0, O.X1)(X, "collaborators", eA),
          queryFn: (e) => {
            let { signal: r } = e
            return U.getCollaborators({ signal: r, accessRequestIds: eA })
          },
          staleTime: k.D.THIRTY_SECONDS,
          retry: !1,
        }),
        eL = eI ? $ : void 0
      eA.length > 0 && (eL = eE && !ex && eS?.owner.principal_id === Z.owner.principal.principal_id ? eS : void 0)
      let [eC, ek] = (0, u.useState)("viewer")
      K[10] === Symbol.for("react.memo_cache_sentinel") ? ((_ = []), (K[10] = _)) : (_ = K[10])
      let [eU, eW] = (0, u.useState)(_),
        [eQ, e$] = (0, u.useState)("")
      K[11] === Symbol.for("react.memo_cache_sentinel") ? ((f = []), (K[11] = f)) : (f = K[11])
      let [eV, eX] = (0, u.useState)(f),
        [eZ, eJ] = (0, u.useState)(eK),
        e0 = [...(eb ?? []), ...eV],
        e1 = e0.flatMap((e) => (e.requested_role_id === O.F2[X.resourceKind][eC] ? e.recipients : [])),
        e2 = new Set([
          (0, O.nD)(Z.owner.principal),
          (0, O.nD)(Z.viewer.principal),
          ...(eL?.collaborators.map(eG) ?? []),
          ...e1.map(O.nD),
        ]),
        e3 = new Set(
          [
            Z.owner.email,
            Z.viewer.email,
            ...(eL?.collaborators.map(eP) ?? []),
            ...e1.map((e) => ew.get((0, O.nD)(e))?.email),
            ...eZ[eC],
          ].flatMap(eD),
        ),
        e4 = (0, e_.Go)(eU, e3, e2)
      ;(K[12] !== X ? ((b = (0, O.X1)(X, "state")), (K[12] = X), (K[13] = b)) : (b = K[13]),
        K[14] !== B || K[15] !== Q || K[16] !== J
          ? ((w = (e) => {
              let { invitees: r, role: i } = e,
                a = crypto.randomUUID()
              return (
                Q() &&
                  (0, F.aS)(J, B, {
                    action: "CHATGPT_FILE_LIBRARY_SHARING_ACTION_REQUEST_ACCESS",
                    outcome: "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_STARTED",
                    operationId: a,
                    recipientCount: r.length,
                    recipientKind: (0, F.r6)(r.map(eF)),
                    role: (0, F.qT)(i),
                  }),
                a
              )
            }),
            (K[14] = B),
            (K[15] = Q),
            (K[16] = J),
            (K[17] = w))
          : (w = K[17]),
        K[18] !== B || K[19] !== Q || K[20] !== ee || K[21] !== J || K[22] !== X
          ? ((A = async (e, r, i) => {
              let { invitees: t, role: n } = r
              Q() &&
                (eX((r) => [...r.filter((r) => r.request_id !== e.request_id || r.created_at !== e.created_at), e]),
                eJ((e) => ({ ...e, [n]: new Set([...e[n], ...t.flatMap(eN)]) })),
                eW((e) => e.filter((e) => !t.some((r) => r.id === e.id))),
                (0, F.aS)(J, B, {
                  action: "CHATGPT_FILE_LIBRARY_SHARING_ACTION_REQUEST_ACCESS",
                  outcome: "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_SUCCEEDED",
                  operationId: i,
                  recipientCount: t.length,
                  recipientKind: (0, F.r6)(t.map(eM)),
                  succeededRecipientCount: t.length,
                  role: (0, F.qT)(n),
                }),
                J.get(v.Id).success(
                  (0, a.jsx)(p.A, {
                    id: "librarySharing.request.sent",
                    defaultMessage: "Request sent to the owner",
                    description: "Success toast after a Library reader asks the owner to grant other people access",
                  }),
                ),
                await D(ee, X))
            }),
            (K[18] = B),
            (K[19] = Q),
            (K[20] = ee),
            (K[21] = J),
            (K[22] = X),
            (K[23] = A))
          : (A = K[23]),
        K[24] !== B || K[25] !== Q || K[26] !== J
          ? ((R = (e, r, i) => {
              let { invitees: t, role: n } = r
              Q() &&
                ((0, F.aS)(J, B, {
                  action: "CHATGPT_FILE_LIBRARY_SHARING_ACTION_REQUEST_ACCESS",
                  outcome: "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_FAILED",
                  operationId: i,
                  recipientCount: t.length,
                  recipientKind: (0, F.r6)(t.map(ej)),
                  failedRecipientCount: t.length,
                  role: (0, F.qT)(n),
                  error: (0, F.GE)(e),
                }),
                J.get(v.Id).danger(
                  (0, a.jsx)(p.A, {
                    id: "librarySharing.request.failed",
                    defaultMessage: "Couldn't send the access request. Try again",
                    description:
                      "Error toast after submitting a Library access request fails; selected recipients remain available to retry",
                  }),
                  { errorAnalytics: { toastId: "librarySharing.request.failed" } },
                ))
            }),
            (K[24] = B),
            (K[25] = Q),
            (K[26] = J),
            (K[27] = R))
          : (R = K[27]))
      let { mutate: e5, isPending: e6 } = (0, M.n)({
          mutationKey: b,
          networkMode: "always",
          retry: !1,
          mutationFn: (e) => {
            let { invitees: r, role: i } = e
            if (!Q() || !eo) throw Error("Library access requests are not permitted")
            return U.createAccessRequest({ recipients: r.map(eO), role: i })
          },
          onMutate: w,
          onSuccess: A,
          onError: R,
        }),
        e7 = W || e6 || eu || eR || !eo || !ev || eL?.complete !== !0,
        e8 = !e7 && eU.length > 0 && eU.every(eq) && !e4,
        e9 = new Map()
      for (let e of e0)
        for (let r of e.recipients) {
          let i = (0, O.d7)({ request: e, recipient: r }),
            a = e9.get(i)
          ;(null == a || "pending" === (0, O.SK)(a.request, r)) && e9.set(i, { request: e, recipient: r })
        }
      let re = [...e9].filter((e) => {
          let [, r] = e,
            { recipient: i } = r
          return !eL?.collaborators.some((e) => {
            let { principal: r } = e
            return (0, O.nD)(r) === (0, O.nD)(i)
          })
        }),
        rr = eL?.collaborators.filter((e) => {
          let { principal: r } = e
          return (
            (0, O.nD)(r) !== (0, O.nD)(Z.owner.principal) &&
            (0, O.nD)(r) !== (0, O.nD)(Z.viewer.principal) &&
            !$?.collaborators.some((e) => (0, O.nD)(e.principal) === (0, O.nD)(r))
          )
        })
      K[28] !== e8 || K[29] !== e7 || K[30] !== Q || K[31] !== e5 || K[32] !== eC || K[33] !== eU
        ? ((E = () => {
            Q() && !e7 && e8 && (e$(""), e5({ invitees: eU, role: eC }))
          }),
          (K[28] = e8),
          (K[29] = e7),
          (K[30] = Q),
          (K[31] = e5),
          (K[32] = eC),
          (K[33] = eU),
          (K[34] = E))
        : (E = K[34])
      let ri = eo
          ? (0, a.jsx)(s.$, {
              type: "submit",
              color: "primary",
              size: "xl",
              disabled: !e8,
              loading: e6,
              children: (0, a.jsx)(p.A, {
                id: "librarySharing.requestInvite",
                defaultMessage: "Invite",
                description:
                  "Button asking a Library item's owner to grant selected people access; it does not grant permission immediately",
              }),
            })
          : null,
        ra = eo
          ? (0, a.jsxs)(y.OO, {
              className: "gap-4",
              children: [
                (0, a.jsx)(g.l, {
                  variant: "privacyNotice",
                  title: (0, a.jsx)(p.A, {
                    id: "librarySharing.request.approvalRequired",
                    defaultMessage: "Owner must approve invites first",
                    description: "Banner explaining that invitations require the Library owner's approval",
                  }),
                  content:
                    "viewer" === (0, O.rP)(Z.viewer.role_id, X.resourceKind)
                      ? (0, a.jsx)(p.A, {
                          id: "librarySharing.request.viewerRestriction",
                          defaultMessage: "You’re a viewer and can’t manage access",
                          description: "Explanation that a Library viewer cannot manage sharing permissions",
                        })
                      : (0, a.jsx)(p.A, {
                          id: "librarySharing.request.recipientRestriction",
                          defaultMessage: "You don’t have permission to manage access",
                          description:
                            "Explanation that the current Library collaborator cannot manage sharing permissions",
                        }),
                }),
                (0, a.jsx)(em.h, {
                  accountId: X.accountId,
                  currentPrincipalId: X.accountUserId,
                  currentEmail: Z.viewer.email ?? void 0,
                  ...es,
                  disabled: e7,
                  existingPrincipalKeys: e2,
                  existingEmails: e3,
                  query: eQ,
                  onQueryChange: e$,
                  selected: eU,
                  resolveRecipient: U.resolveRecipient,
                  onChange: eW,
                  role: eC,
                  allowedRoles: ["viewer", "editor"],
                  onRoleChange: (e) => {
                    "commenter" !== e && ek(e)
                  },
                }),
                e4
                  ? (0, a.jsx)("p", {
                      className: "text-sm text-danger",
                      role: "alert",
                      children: (0, a.jsx)(p.A, {
                        id: "librarySharing.invite.alreadyAdded",
                        defaultMessage: "This person already has access or is selected",
                        description:
                          "Validation error when a Library invite includes an existing collaborator or duplicate recipient",
                      }),
                    })
                  : null,
              ],
            })
          : null,
        rt =
          (eo && (ed || (eA.length > 0 && (ex || (eE && eL?.complete !== !0))))) || (ei && Y && en)
            ? (0, a.jsx)(y.OO, {
                children: (0, a.jsx)(g.l, {
                  type: "error",
                  role: "alert",
                  content: (0, a.jsx)(p.A, {
                    id: "librarySharing.access.incomplete",
                    defaultMessage: "Couldn't load all access details. Some sharing actions are unavailable",
                    description:
                      "Error when collaborators, inherited permissions, or workspace policy cannot be fully loaded; unsafe permission actions remain disabled",
                  }),
                  primaryCtaText: (0, a.jsx)(p.A, {
                    id: "librarySharing.retry",
                    defaultMessage: "Retry",
                    description: "Button retrying a failed Library sharing data request",
                  }),
                  onPrimaryCtaClick: () => {
                    Q() && (D(ee, X), ei && ee.invalidateQueries({ queryKey: ["accounts", "settings", X.accountId] }))
                  },
                }),
              })
            : null
      K[35] !== W ||
      K[36] !== ef ||
      K[37] !== ey ||
      K[38] !== eh ||
      K[39] !== ev ||
      K[40] !== eu ||
      K[41] !== Q ||
      K[42] !== eg
        ? ((L =
            null == ey || ev
              ? null
              : (0, a.jsxs)(y.OO, {
                  children: [
                    (0, a.jsx)("p", {
                      className: "text-sm text-tertiary",
                      children: (0, a.jsx)(p.A, {
                        id: "librarySharing.request.historyIncomplete",
                        defaultMessage: "Load the remaining requests before sending another request",
                        description:
                          "Explanation when additional Library access-request history must load to avoid requesting the same access twice",
                      }),
                    }),
                    (0, a.jsx)(s.$, {
                      size: "xl",
                      type: "button",
                      color: "secondary",
                      disabled: W || eu,
                      loading: eu,
                      onClick: () => {
                        Q() && (eh ? ef() : eg())
                      },
                      children: (0, a.jsx)(p.A, {
                        id: "librarySharing.request.loadMoreHistory",
                        defaultMessage: "Load requests",
                        description:
                          "Button loading the next page of the viewer's access-request history in a Library sharing dialog",
                      }),
                    }),
                  ],
                })),
          (K[35] = W),
          (K[36] = ef),
          (K[37] = ey),
          (K[38] = eh),
          (K[39] = ev),
          (K[40] = eu),
          (K[41] = Q),
          (K[42] = eg),
          (K[43] = L))
        : (L = K[43])
      let rn = x.p,
        rs =
          null != ey
            ? rr?.map((e) =>
                (0, a.jsx)(
                  S.h,
                  {
                    avatar: (0, a.jsx)(m.T, {
                      size: "group",
                      avatarUrl: e.avatar_url,
                      colorKey: e.principal.principal_id,
                      name: e.display_name ?? e.email ?? null,
                    }),
                    label:
                      e.display_name ??
                      e.email ??
                      (0, a.jsx)(p.A, {
                        id: "librarySharing.collaboratorFallback",
                        defaultMessage: "Collaborator",
                        description: "Fallback display name when a Library collaborator has no returned name or email",
                      }),
                    secondaryLabel: e.email,
                    trailingContent: (0, a.jsx)("span", {
                      className: "text-sm text-tertiary",
                      children: (0, a.jsx)(T.u, { permission: (0, O.rP)(e.role_id, X.resourceKind) }),
                    }),
                  },
                  (0, O.nD)(e.principal),
                ),
              )
            : null,
        rl =
          null != ey
            ? re.map((e) => {
                let [r, i] = e,
                  { request: t, recipient: n } = i,
                  s = ew.get((0, O.nD)(n))
                return (0, a.jsx)(
                  S.h,
                  {
                    avatar: (0, a.jsx)("span", {
                      className: "opacity-50",
                      children: (0, a.jsx)(m.T, {
                        size: "group",
                        avatarUrl: s?.avatar_url,
                        colorKey: n.principal_id,
                        name: s?.display_name ?? s?.email ?? null,
                      }),
                    }),
                    label: (0, a.jsx)("span", {
                      className: "opacity-50",
                      children:
                        s?.display_name ??
                        s?.email ??
                        (0, a.jsx)(p.A, {
                          id: "librarySharing.requestedPerson",
                          defaultMessage: "Requested person",
                          description: "Fallback name for a person included in a Library access request",
                        }),
                    }),
                    secondaryLabel:
                      s?.email == null ? void 0 : (0, a.jsx)("span", { className: "opacity-50", children: s.email }),
                    trailingContent: (0, a.jsxs)("div", {
                      className: "flex shrink-0 items-center gap-3",
                      children: [
                        (0, a.jsx)(eT.E, {
                          className: "whitespace-nowrap",
                          children: (0, a.jsx)(p.A, {
                            id: "librarySharing.request.status",
                            defaultMessage:
                              "{status, select, approved {Approved} declined {Declined} satisfied {Already had access} other {Pending}}",
                            description:
                              "Status of a Library access request for a recipient; status is approved, declined, satisfied (access already existed), or pending",
                            values: { status: (0, O.SK)(t, n) },
                          }),
                        }),
                        (0, a.jsx)("span", {
                          className: "pe-2 text-sm text-tertiary",
                          children: (0, a.jsx)(T.u, { permission: (0, O.rP)(t.requested_role_id, X.resourceKind) }),
                        }),
                      ],
                    }),
                  },
                  r,
                )
              })
            : null
      return (
        K[44] !== rn || K[45] !== z || K[46] !== rs || K[47] !== rl
          ? ((q = (0, a.jsxs)(rn, { children: [z, rs, rl] })),
            (K[44] = rn),
            (K[45] = z),
            (K[46] = rs),
            (K[47] = rl),
            (K[48] = q))
          : (q = K[48]),
        K[49] !== rt || K[50] !== L || K[51] !== q
          ? ((N = (0, a.jsxs)(a.Fragment, { children: [rt, L, q] })),
            (K[49] = rt),
            (K[50] = L),
            (K[51] = q),
            (K[52] = N))
          : (N = K[52]),
        K[53] !== e6 || K[54] !== V || K[55] !== E || K[56] !== ri || K[57] !== ra || K[58] !== N
          ? ((G = V({ isPending: e6, onSubmit: E, footer: ri, headerContent: ra, content: N })),
            (K[53] = e6),
            (K[54] = V),
            (K[55] = E),
            (K[56] = ri),
            (K[57] = ra),
            (K[58] = N),
            (K[59] = G))
          : (G = K[59]),
        G
      )
    }
    function eq(e) {
      return e.isValid
    }
    function ej(e) {
      let { recipient: r } = e
      return r
    }
    function eM(e) {
      let { recipient: r } = e
      return r
    }
    function eN(e) {
      let { recipient: r } = e
      return "email" === r.recipient_type ? [r.email.trim().toLowerCase()] : []
    }
    function eF(e) {
      let { recipient: r } = e
      return r
    }
    function eO(e) {
      let { recipient: r } = e
      return r
    }
    function eD(e) {
      return null == e ? [] : [e.trim().toLowerCase()]
    }
    function eP(e) {
      let { email: r } = e
      return r
    }
    function eG(e) {
      let { principal: r } = e
      return (0, O.nD)(r)
    }
    function eK() {
      return { viewer: new Set(), editor: new Set() }
    }
    function eH(e) {
      let { principal: r } = e
      return "group" === r.principal_type
    }
    function eB(e) {
      return e.principal_identities.map(eU)
    }
    function eU(e) {
      return [(0, O.nD)(e.principal), e]
    }
    function eY(e) {
      return e.requests
    }
    function ez(e, r, i, a) {
      return null == e.next_cursor || a.includes(e.next_cursor) ? void 0 : e.next_cursor
    }
    var eW = i("URpD"),
      eQ = i("t2SL"),
      e$ = i("jqgw")
    function eV(e) {
      let r,
        i,
        n,
        l,
        o,
        c,
        d = (0, t.c)(39),
        {
          accountId: u,
          authenticatedUserId: h,
          fileName: m,
          libraryFileId: _,
          resourceKind: b,
          sharedDirectoryId: v,
          shareSessionId: w,
          showOrganizationSharing: I,
          onClose: A,
        } = e,
        S = void 0 === I || I,
        { data: x, isLoading: R, isError: L, refetch: C } = (0, f.oV)()
      if (
        d[0] !== u ||
        d[1] !== x?.accounts ||
        d[2] !== m ||
        d[3] !== L ||
        d[4] !== R ||
        d[5] !== _ ||
        d[6] !== A ||
        d[7] !== C ||
        d[8] !== b
      ) {
        o = Symbol.for("react.early_return_sentinel")
        e: {
          if (null == (i = x?.accounts?.find((e) => e.id === u)) || L) {
            let e, r, i, t, n, l, c
            ;(d[14] !== m
              ? ((e = (0, a.jsx)(p.A, {
                  id: "librarySharing.fileTitle",
                  defaultMessage: "Share {fileName}",
                  description: "Title of the Library file or folder sharing dialog; fileName is the item's title",
                  values: { fileName: m },
                })),
                (d[14] = m),
                (d[15] = e))
              : (e = d[15]),
              d[16] === Symbol.for("react.memo_cache_sentinel")
                ? ((r = (0, a.jsx)(p.A, {
                    id: "librarySharing.close",
                    defaultMessage: "Close",
                    description: "Button closing the Library sharing dialog",
                  })),
                  (d[16] = r))
                : (r = d[16]),
              d[17] !== A
                ? ((i = (0, a.jsx)(s.$, { size: "xl", type: "button", color: "secondary", onClick: A, children: r })),
                  (d[17] = A),
                  (d[18] = i))
                : (i = d[18]),
              d[19] === Symbol.for("react.memo_cache_sentinel")
                ? ((t = (0, a.jsx)(p.A, {
                    id: "librarySharing.sessionUnavailable",
                    defaultMessage: "Sharing is unavailable in this session. Reopen the dialog in the original account",
                    description:
                      "Error when an open Library sharing dialog no longer matches the authenticated account, or required account information is unavailable; no file data is shown",
                  })),
                  (n = (0, a.jsx)(p.A, {
                    id: "librarySharing.retry",
                    defaultMessage: "Retry",
                    description: "Button retrying a failed Library sharing data request",
                  })),
                  (d[19] = t),
                  (d[20] = n))
                : ((t = d[19]), (n = d[20])),
              d[21] !== C
                ? ((l = (0, a.jsx)(y.OO, {
                    children: (0, a.jsx)(g.l, {
                      type: "error",
                      role: "alert",
                      content: t,
                      primaryCtaText: n,
                      onPrimaryCtaClick: () => void C(),
                    }),
                  })),
                  (d[21] = C),
                  (d[22] = l))
                : (l = d[22]),
              d[23] !== R || d[24] !== e || d[25] !== i || d[26] !== l
                ? ((c = (0, a.jsx)(E.$t, { isLoading: R, title: e, footer: i, children: l })),
                  (d[23] = R),
                  (d[24] = e),
                  (d[25] = i),
                  (d[26] = l),
                  (d[27] = c))
                : (c = d[27]),
              (o = c))
            break e
          }
          ;((n = {
            accountId: u,
            accountUserId: "personal" === i.structure ? i.account_user_id.split("__")[0] : i.account_user_id,
            libraryFileId: _,
            resourceKind: b,
          }),
            (r = eX),
            (l = JSON.stringify((0, O.X1)(n, "state"))))
        }
        ;((d[0] = u),
          (d[1] = x?.accounts),
          (d[2] = m),
          (d[3] = L),
          (d[4] = R),
          (d[5] = _),
          (d[6] = A),
          (d[7] = C),
          (d[8] = b),
          (d[9] = r),
          (d[10] = i),
          (d[11] = n),
          (d[12] = l),
          (d[13] = o))
      } else ((r = d[9]), (i = d[10]), (n = d[11]), (l = d[12]), (o = d[13]))
      return o !== Symbol.for("react.early_return_sentinel")
        ? o
        : (d[28] !== r ||
          d[29] !== i ||
          d[30] !== h ||
          d[31] !== m ||
          d[32] !== A ||
          d[33] !== w ||
          d[34] !== v ||
          d[35] !== n ||
          d[36] !== S ||
          d[37] !== l
            ? ((c = (0, a.jsx)(
                r,
                {
                  account: i,
                  authenticatedUserId: h,
                  fileName: m,
                  sharingScope: n,
                  sharedDirectoryId: v,
                  shareSessionId: w,
                  showOrganizationSharing: S,
                  onClose: A,
                },
                l,
              )),
              (d[28] = r),
              (d[29] = i),
              (d[30] = h),
              (d[31] = m),
              (d[32] = A),
              (d[33] = w),
              (d[34] = v),
              (d[35] = n),
              (d[36] = S),
              (d[37] = l),
              (d[38] = c))
            : (c = d[38]),
          c)
    }
    function eX(e) {
      let r,
        i,
        _,
        f,
        k,
        q,
        j,
        M,
        N,
        D,
        K,
        H,
        B,
        U,
        Y,
        z,
        $,
        V,
        X,
        Z,
        J,
        er,
        ei,
        ea,
        et,
        en,
        es,
        el,
        eo,
        ec,
        ed,
        eu,
        ep,
        eh,
        em,
        eg,
        ey,
        eb,
        ev,
        ew,
        eI = (0, t.c)(263),
        {
          account: eA,
          authenticatedUserId: eS,
          fileName: eR,
          sharingScope: eE,
          sharedDirectoryId: eL,
          shareSessionId: eC,
          showOrganizationSharing: eT,
          onClose: eq,
        } = e,
        ej = (0, d.gh)(I.u),
        eM = (0, l.jE)()
      eI[0] !== eM || eI[1] !== eE
        ? ((r = () =>
            new Set(
              eM
                .getQueryCache()
                .findAll({ queryKey: (0, O.X1)(eE) })
                .filter(e4)
                .map(e3),
            )),
          (eI[0] = eM),
          (eI[1] = eE),
          (eI[2] = r))
        : (r = eI[2])
      let [eN] = (0, u.useState)(r),
        eF = "workspace" === eA.structure
      eI[3] !== eF ? ((i = { enabled: eF }), (eI[3] = eF), (eI[4] = i)) : (i = eI[4])
      let { data: eO, isError: eD } = (0, d._U)(h.Jk, eE.accountId, i)
      eI[5] !== eA || eI[6] !== eO || eI[7] !== eD
        ? ((_ = (0, C.V)(eA, eO, eD)), (eI[5] = eA), (eI[6] = eO), (eI[7] = eD), (eI[8] = _))
        : (_ = eI[8])
      let { canSearchMembers: eP } = _,
        eG = (0, d.Ul)(Q.Sz)
      eI[9] !== eS || eI[10] !== ej || eI[11] !== eE.accountId
        ? ((f = () => (0, eW.d)(ej, eE.accountId, eS) && ej.get(Q.Ym)),
          (eI[9] = eS),
          (eI[10] = ej),
          (eI[11] = eE.accountId),
          (eI[12] = f))
        : (f = eI[12])
      let eK = f,
        eH = (0, u.useRef)(0),
        [eB, eU] = (0, u.useState)(0)
      eI[13] === Symbol.for("react.memo_cache_sentinel") ? ((k = new Map()), (eI[13] = k)) : (k = eI[13])
      let [eY, ez] = (0, u.useState)(k)
      eI[14] !== eK
        ? ((q = () => {
            if (!eK()) throw Error("Library sharing session changed")
          }),
          (eI[14] = eK),
          (eI[15] = q))
        : (q = eI[15])
      let eV = (0, W.m)({ scope: eE, assertCurrentScope: q }),
        eX = (0, P.O)(eE, eV).state,
        {
          data: e2,
          isError: e6,
          isFetching: e7,
          isFetchedAfterMount: e8,
          fetchStatus: e9,
          refetch: re,
        } = (0, o.I)({
          ...eX,
          staleTime: eX.staleTime,
          queryFn: async (e) => {
            let { signal: r } = e
            try {
              return await eV.getSharingState(r)
            } catch (e) {
              throw (!r.aborted && eK() && ((eH.current = eH.current + 1), ez(new Map())), e)
            }
          },
        })
      eI[16] !== eN || eI[17] !== e2 || eI[18] !== e6 || eI[19] !== e9 || eI[20] !== e8
        ? ((j = (e8 || eN.has("state")) && "paused" !== e9 && !e6 ? e2 : void 0),
          (eI[16] = eN),
          (eI[17] = e2),
          (eI[18] = e6),
          (eI[19] = e9),
          (eI[20] = e8),
          (eI[21] = j))
        : (j = eI[21])
      let rr = j,
        ri = (0, P.O)(eE, eV, rr),
        ra = rr?.owner.principal.principal_id === eE.accountUserId
      eI[22] !== ra || eI[23] !== eG || eI[24] !== eE || eI[25] !== rr
        ? ((M =
            eG &&
            (ra ||
              (0, O.Fp)({ sharingState: rr, scope: eE, legacyOwner: void 0, managementAvailable: eG })
                .canManageAccess)),
          (eI[22] = ra),
          (eI[23] = eG),
          (eI[24] = eE),
          (eI[25] = rr),
          (eI[26] = M))
        : (M = eI[26])
      let rt = M,
        rn = null != rr && rt
      ;(eI[27] !== eV || eI[28] !== eK || eI[29] !== ri.shares.queryFn || eI[30] !== rr
        ? ((N =
            null == rr
              ? ri.shares.queryFn
              : async (e) => {
                  let { signal: r } = e
                  try {
                    return await eV.getShares(rr.owner.principal, r)
                  } catch (e) {
                    throw (!r.aborted && eK() && ((eH.current = eH.current + 1), ez(e1)), e)
                  }
                }),
          (eI[27] = eV),
          (eI[28] = eK),
          (eI[29] = ri.shares.queryFn),
          (eI[30] = rr),
          (eI[31] = N))
        : (N = eI[31]),
        eI[32] !== ri.shares || eI[33] !== rn || eI[34] !== N
          ? ((D = { enabled: rn, ...ri.shares, staleTime: ri.shares.staleTime, queryFn: N }),
            (eI[32] = ri.shares),
            (eI[33] = rn),
            (eI[34] = N),
            (eI[35] = D))
          : (D = eI[35]))
      let { data: rs, isError: rl, isFetching: ro, isFetchedAfterMount: rc, fetchStatus: rd } = (0, o.I)(D)
      eI[36] !== eN || eI[37] !== rs || eI[38] !== rl || eI[39] !== rd || eI[40] !== rc || eI[41] !== rr?.owner
        ? ((K =
            (rc || eN.has("shares")) &&
            "paused" !== rd &&
            !rl &&
            rs?.owner.principal_id === rr?.owner.principal.principal_id
              ? rs
              : void 0),
          (eI[36] = eN),
          (eI[37] = rs),
          (eI[38] = rl),
          (eI[39] = rd),
          (eI[40] = rc),
          (eI[41] = rr?.owner),
          (eI[42] = K))
        : (K = eI[42])
      let ru = K,
        rp = ru?.owner
      eI[43] !== eG || eI[44] !== eE || eI[45] !== rr || eI[46] !== rp
        ? ((H = (0, O.Fp)({ sharingState: rr, scope: eE, legacyOwner: rp, managementAvailable: eG })),
          (eI[43] = eG),
          (eI[44] = eE),
          (eI[45] = rr),
          (eI[46] = rp),
          (eI[47] = H))
        : (H = eI[47])
      let { canInvite: rh, canManageAccess: rm } = H
      eI[48] !== rm || eI[49] !== ri.effectiveAccess
        ? ((B = { enabled: rm, ...ri.effectiveAccess, staleTime: ri.effectiveAccess.staleTime }),
          (eI[48] = rm),
          (eI[49] = ri.effectiveAccess),
          (eI[50] = B))
        : (B = eI[50])
      let { data: r_, isError: rf, error: rg, isFetching: ry, isFetchedAfterMount: rb, fetchStatus: rv } = (0, o.I)(B),
        rw = null != rr && !rt
      eI[51] !== ri.collaborators || eI[52] !== rw
        ? ((U = { enabled: rw, ...ri.collaborators, staleTime: ri.collaborators.staleTime }),
          (eI[51] = ri.collaborators),
          (eI[52] = rw),
          (eI[53] = U))
        : (U = eI[53])
      let { data: rI, isError: rA, error: rS, isFetching: rx, isFetchedAfterMount: rR, fetchStatus: rE } = (0, o.I)(U)
      eI[54] !== eN || eI[55] !== rI?.owner || eI[56] !== rA || eI[57] !== rE || eI[58] !== rR || eI[59] !== rr?.owner
        ? ((Y =
            !rA &&
            (rR || eN.has("collaborators")) &&
            "paused" !== rE &&
            rI?.owner.principal_id === rr?.owner.principal.principal_id),
          (eI[54] = eN),
          (eI[55] = rI?.owner),
          (eI[56] = rA),
          (eI[57] = rE),
          (eI[58] = rR),
          (eI[59] = rr?.owner),
          (eI[60] = Y))
        : (Y = eI[60])
      let rL = Y,
        rC = rL ? rI?.collaborators : void 0,
        rT = rr?.viewer.role_id ?? ""
      eI[61] !== eE.resourceKind || eI[62] !== rT
        ? ((z = (0, O.rP)(rT, eE.resourceKind)), (eI[61] = eE.resourceKind), (eI[62] = rT), (eI[63] = z))
        : (z = eI[63])
      let rk = z
      eI[64] !== eE.accountUserId || eI[65] !== eE.resourceKind || eI[66] !== rk || eI[67] !== rC
        ? (($ =
            "viewer" === rk &&
            rC?.some((e) => {
              let { principal: r, role_id: i } = e
              return (
                "user" === r.principal_type &&
                r.principal_id === eE.accountUserId &&
                "commenter" === (0, O.rP)(i, eE.resourceKind)
              )
            })
              ? "commenter"
              : rk),
          (eI[64] = eE.accountUserId),
          (eI[65] = eE.resourceKind),
          (eI[66] = rk),
          (eI[67] = rC),
          (eI[68] = $))
        : ($ = eI[68])
      let rq = $
      eI[69] !== r_ || eI[70] !== rf || eI[71] !== rv || eI[72] !== rb || eI[73] !== eN || eI[74] !== rr?.owner
        ? ((V =
            (rb || eN.has("effective-access")) &&
            "paused" !== rv &&
            !rf &&
            r_?.owner.principal_id === rr?.owner.principal.principal_id
              ? r_
              : void 0),
          (eI[69] = r_),
          (eI[70] = rf),
          (eI[71] = rv),
          (eI[72] = rb),
          (eI[73] = eN),
          (eI[74] = rr?.owner),
          (eI[75] = V))
        : (V = eI[75])
      let rj = V,
        [rM, rN] = (0, u.useState)(!1),
        [rF, rO] = (0, u.useState)(!1)
      eI[76] === Symbol.for("react.memo_cache_sentinel")
        ? ((X = (e, r) => {
            ez((i) => {
              let a = new Map(i)
              return (null == r ? a.delete(e) : a.set(e, r), a)
            })
          }),
          (eI[76] = X))
        : (X = eI[76])
      let rD = X
      ;(eI[77] !== eE ? ((Z = (0, O.X1)(eE, "state")), (eI[77] = eE), (eI[78] = Z)) : (Z = eI[78]),
        eI[79] !== Z ? ((J = { mutationKey: Z }), (eI[79] = Z), (eI[80] = J)) : (J = eI[80]))
      let rP = (0, c.l)(J),
        rG = rm && null != ru && null != rj && (rF || (!e7 && !ro && !ry)),
        rK = rG && rj?.complete === !0
      eI[81] !== eE.accountUserId || eI[82] !== rj?.collaborators
        ? ((er = rj?.collaborators.find((e) => {
            let { principal: r } = e
            return "user" === r.principal_type && r.principal_id === eE.accountUserId
          })),
          (eI[81] = eE.accountUserId),
          (eI[82] = rj?.collaborators),
          (eI[83] = er))
        : (er = eI[83])
      let rH = er
      eI[84] !== rH ||
      eI[85] !== ry ||
      eI[86] !== rF ||
      eI[87] !== eE.resourceKind ||
      eI[88] !== rr?.workspace_invitation_id ||
      eI[89] !== rj?.complete
        ? ((ei =
            (rF || !ry) &&
            rj?.complete === !0 &&
            null != rH &&
            (rH.direct_role_id === O.F2[eE.resourceKind].editor ||
              [rH.source, rH.group_source].some(
                (e) =>
                  null != e &&
                  e.invitation_id !== rr?.workspace_invitation_id &&
                  ("user" === e.principal.principal_type || "group" === e.principal.principal_type) &&
                  (("library_file" === e.resource.resource_type && e.role_id === O.F2.file.editor) ||
                    ("library_folder" === e.resource.resource_type && e.role_id === O.F2.folder.editor)),
              ))),
          (eI[84] = rH),
          (eI[85] = ry),
          (eI[86] = rF),
          (eI[87] = eE.resourceKind),
          (eI[88] = rr?.workspace_invitation_id),
          (eI[89] = rj?.complete),
          (eI[90] = ei))
        : (ei = eI[90])
      let rB = ei,
        rU = rP > 0 || rM || rF,
        rY = rU || e7 || ro || ry || rx
      if (
        eI[91] !== rh ||
        eI[92] !== rt ||
        eI[93] !== rK ||
        eI[94] !== eY ||
        eI[95] !== r_ ||
        eI[96] !== ru ||
        eI[97] !== rr
      ) {
        let e = null == rr ? void 0 : (0, e_.Hd)(rr, ru, r_)
        ;((ea =
          !rt ||
          [...eY.values()].some(
            (r) =>
              "invite" === r.kind &&
              (!rh ||
                !rK ||
                null == e ||
                r.invitees.some(e0) ||
                (0, e_.Go)(r.invitees, e.existingEmails, e.existingPrincipalKeys)),
          )),
          (eI[91] = rh),
          (eI[92] = rt),
          (eI[93] = rK),
          (eI[94] = eY),
          (eI[95] = r_),
          (eI[96] = ru),
          (eI[97] = rr),
          (eI[98] = ea))
      } else ea = eI[98]
      let rz = ea
      eI[99] !== rY || eI[100] !== eY || eI[101] !== rz || eI[102] !== eK
        ? ((et = function () {
            if (!eK() || rY || rz || 0 === eY.size) return
            rO(!0)
            let e = eH.current
            ;(async function (e, r, i) {
              for (let [a, t] of [...e].sort(([, e], [, r]) => Number("link" === e.kind) - Number("link" === r.kind))) {
                if (!r() || !(await t.save())) return !1
                i(a, t)
              }
              return r()
            })(
              eY,
              () => eK() && eH.current === e,
              (e, r) => {
                ez((i) => {
                  if (i.get(e) !== r) return i
                  let a = new Map(i)
                  return (a.delete(e), a)
                })
              },
            ).finally(() => rO(!1))
          }),
          (eI[99] = rY),
          (eI[100] = eY),
          (eI[101] = rz),
          (eI[102] = eK),
          (eI[103] = et))
        : (et = eI[103])
      let rW = et,
        rQ = null == rr ? void 0 : ra
      eI[104] !== eC || eI[105] !== eE || eI[106] !== rQ
        ? ((en = { sharingScope: eE, shareSessionId: eC, isOwner: rQ }),
          (eI[104] = eC),
          (eI[105] = eE),
          (eI[106] = rQ),
          (eI[107] = en))
        : (en = eI[107])
      let r$ = en,
        rV = (0, u.useRef)(null),
        rX = null != rr
      eI[108] !== r$ || eI[109] !== eK || eI[110] !== ej
        ? ((es = () => {
            null == rV.current &&
              eK() &&
              ((rV.current = r$), (0, F.aS)(ej, r$, { action: "CHATGPT_FILE_LIBRARY_SHARING_ACTION_DIALOG_OPENED" }))
          }),
          (eI[108] = r$),
          (eI[109] = eK),
          (eI[110] = ej),
          (eI[111] = es))
        : (es = eI[111])
      let rZ = (0, u.useEffectEvent)(es)
      ;(eI[112] !== rZ || eI[113] !== rX
        ? ((el = () => {
            rX && rZ()
          }),
          (eI[112] = rZ),
          (eI[113] = rX),
          (eI[114] = el))
        : (el = eI[114]),
        eI[115] !== rX ? ((eo = [rX]), (eI[115] = rX), (eI[116] = eo)) : (eo = eI[116]),
        (0, u.useEffect)(el, eo),
        eI[117] !== ej
          ? ((ec = () => () => {
              null != rV.current &&
                (0, F.aS)(ej, rV.current, { action: "CHATGPT_FILE_LIBRARY_SHARING_ACTION_DIALOG_CLOSED" })
            }),
            (ed = [ej]),
            (eI[117] = ej),
            (eI[118] = ec),
            (eI[119] = ed))
          : ((ec = eI[118]), (ed = eI[119])),
        (0, u.useEffect)(ec, ed),
        eI[120] !== r$ ||
        eI[121] !== rY ||
        eI[122] !== eK ||
        eI[123] !== eF ||
        eI[124] !== ej ||
        eI[125] !== eL ||
        eI[126] !== eE.accountId ||
        eI[127] !== eE.libraryFileId ||
        eI[128] !== eE.resourceKind ||
        eI[129] !== rr ||
        eI[130] !== rk
          ? ((eu = async function () {
              if (!eK() || null == rr || rY) return
              rN(!0)
              let e = crypto.randomUUID(),
                r = (0, F.qT)(rk)
              ;(0, F.aS)(ej, r$, {
                action: "CHATGPT_FILE_LIBRARY_SHARING_ACTION_COPY_LINK",
                outcome: "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_STARTED",
                operationId: e,
                role: r,
              })
              let i = (0, eQ.Rg)({
                libraryFileId: eE.libraryFileId,
                origin: (0, e$.F)(),
                resourceKind: eE.resourceKind,
                sharedDirectoryId: eL,
                workspaceId: eF ? eE.accountId : void 0,
              })
              await Promise.resolve(w.appServices.clipboard.writeText(i.href))
                .then(() => {
                  eK() &&
                    ((0, F.aS)(ej, r$, {
                      action: "CHATGPT_FILE_LIBRARY_SHARING_ACTION_COPY_LINK",
                      outcome: "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_SUCCEEDED",
                      operationId: e,
                      role: r,
                    }),
                    (0, A.o)(ej))
                })
                .catch((i) => {
                  eK() &&
                    ((0, F.aS)(ej, r$, {
                      action: "CHATGPT_FILE_LIBRARY_SHARING_ACTION_COPY_LINK",
                      outcome: "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_FAILED",
                      operationId: e,
                      role: r,
                      error: (0, F.GE)(i),
                    }),
                    ej
                      .get(v.Id)
                      .danger(
                        (0, a.jsx)(p.A, {
                          id: "librarySharing.copy.failed",
                          defaultMessage: "Couldn't copy the link. Try again",
                          description:
                            "Error toast when checking current Library access or writing the share link to the clipboard fails",
                        }),
                        { errorAnalytics: { toastId: "librarySharing.copy.failed" } },
                      ))
                })
                .finally(() => rN(!1))
            }),
            (eI[120] = r$),
            (eI[121] = rY),
            (eI[122] = eK),
            (eI[123] = eF),
            (eI[124] = ej),
            (eI[125] = eL),
            (eI[126] = eE.accountId),
            (eI[127] = eE.libraryFileId),
            (eI[128] = eE.resourceKind),
            (eI[129] = rr),
            (eI[130] = rk),
            (eI[131] = eu))
          : (eu = eI[131]))
      let rJ = eu
      eI[132] !== rt ||
      eI[133] !== r_?.complete ||
      eI[134] !== rf ||
      eI[135] !== rg ||
      eI[136] !== rb ||
      eI[137] !== rL ||
      eI[138] !== ra ||
      eI[139] !== rI?.complete ||
      eI[140] !== rA ||
      eI[141] !== rS ||
      eI[142] !== rR ||
      eI[143] !== rl
        ? ((ep = rt
            ? rl || (rf && !(ra && e5(rg))) || (rb && r_?.complete === !1)
            : !e5(rS) && (rA || (rR && (!rL || rI?.complete === !1)))),
          (eI[132] = rt),
          (eI[133] = r_?.complete),
          (eI[134] = rf),
          (eI[135] = rg),
          (eI[136] = rb),
          (eI[137] = rL),
          (eI[138] = ra),
          (eI[139] = rI?.complete),
          (eI[140] = rA),
          (eI[141] = rS),
          (eI[142] = rR),
          (eI[143] = rl),
          (eI[144] = ep))
        : (ep = eI[144])
      let r0 = ep,
        r1 = rt ? (null == ru && ro) || (null == rj && ry) : !rL && rx
      if (
        eI[145] !== r1 ||
        eI[146] !== r$ ||
        eI[147] !== eV ||
        eI[148] !== rh ||
        eI[149] !== rt ||
        eI[150] !== rG ||
        eI[151] !== rK ||
        eI[152] !== rY ||
        eI[153] !== eK ||
        eI[154] !== ra ||
        eI[155] !== ru ||
        eI[156] !== eE ||
        eI[157] !== rr ||
        eI[158] !== eT ||
        eI[159] !== rq ||
        eI[160] !== rj ||
        eI[161] !== rC
      ) {
        if (((eh = null), null != rr)) {
          let e,
            r,
            i,
            t,
            s,
            l,
            o,
            c = rr.owner.display_name ?? rr.owner.email ?? null
          ;(eI[163] !== rr.owner.avatar_url || eI[164] !== rr.owner.principal.principal_id || eI[165] !== c
            ? ((e = (0, a.jsx)(m.T, {
                size: "group",
                avatarUrl: rr.owner.avatar_url,
                colorKey: rr.owner.principal.principal_id,
                name: c,
              })),
              (eI[163] = rr.owner.avatar_url),
              (eI[164] = rr.owner.principal.principal_id),
              (eI[165] = c),
              (eI[166] = e))
            : (e = eI[166]),
            eI[167] !== rr.owner.display_name || eI[168] !== rr.owner.email
              ? ((r =
                  rr.owner.display_name ??
                  rr.owner.email ??
                  (0, a.jsx)(p.A, {
                    id: "librarySharing.ownerFallback",
                    defaultMessage: "Owner",
                    description: "Fallback display name for the owner of a shared Library file or folder",
                  })),
                (eI[167] = rr.owner.display_name),
                (eI[168] = rr.owner.email),
                (eI[169] = r))
              : (r = eI[169]),
            eI[170] === Symbol.for("react.memo_cache_sentinel")
              ? ((i = (0, a.jsx)("span", {
                  className: "pe-2 text-sm text-tertiary",
                  children: (0, a.jsx)(p.A, {
                    id: "librarySharing.owner",
                    defaultMessage: "Owner",
                    description: "Role label for the owner of a file or folder in the Library sharing dialog",
                  }),
                })),
                (eI[170] = i))
              : (i = eI[170]),
            eI[171] !== rr.owner.email || eI[172] !== e || eI[173] !== r
              ? ((t = (0, a.jsx)(S.h, { avatar: e, label: r, secondaryLabel: rr.owner.email, trailingContent: i })),
                (eI[171] = rr.owner.email),
                (eI[172] = e),
                (eI[173] = r),
                (eI[174] = t))
              : (t = eI[174]),
            eI[175] !== r1 || eI[176] !== eT
              ? ((s = r1 && !eT ? (0, a.jsx)(L.Az, {}) : null), (eI[175] = r1), (eI[176] = eT), (eI[177] = s))
              : (s = eI[177]),
            eI[178] !== r1 ||
            eI[179] !== r$ ||
            eI[180] !== eV ||
            eI[181] !== rh ||
            eI[182] !== rt ||
            eI[183] !== rG ||
            eI[184] !== rK ||
            eI[185] !== rY ||
            eI[186] !== eK ||
            eI[187] !== ru ||
            eI[188] !== eE ||
            eI[189] !== rj
              ? ((l =
                  !r1 && rt && null != ru
                    ? (0, a.jsx)(ee, {
                        api: eV,
                        sharingScope: eE,
                        analytics: r$,
                        shares: ru,
                        effectiveAccess: rj,
                        allowedRoles: (0, O.q4)(ru.allowed_roles, eE.resourceKind),
                        canChange: rh && rK,
                        canRemove: rG,
                        canRemoveEffective: rK,
                        disabled: rY,
                        isCurrentSession: eK,
                        onStageChange: rD,
                      })
                    : null),
                (eI[178] = r1),
                (eI[179] = r$),
                (eI[180] = eV),
                (eI[181] = rh),
                (eI[182] = rt),
                (eI[183] = rG),
                (eI[184] = rK),
                (eI[185] = rY),
                (eI[186] = eK),
                (eI[187] = ru),
                (eI[188] = eE),
                (eI[189] = rj),
                (eI[190] = l))
              : (l = eI[190]),
            eI[191] !== r1 ||
            eI[192] !== rt ||
            eI[193] !== ra ||
            eI[194] !== eE.accountUserId ||
            eI[195] !== eE.resourceKind ||
            eI[196] !== rr.owner.principal.principal_id ||
            eI[197] !== rr.viewer ||
            eI[198] !== rq ||
            eI[199] !== rC
              ? ((o =
                  r1 || rt
                    ? null
                    : (0, a.jsxs)(a.Fragment, {
                        children: [
                          ra
                            ? null
                            : (0, a.jsx)(S.h, {
                                avatar: (0, a.jsx)(m.T, {
                                  size: "group",
                                  avatarUrl: rr.viewer.avatar_url,
                                  colorKey: rr.viewer.principal.principal_id,
                                  name: rr.viewer.display_name ?? rr.viewer.email ?? null,
                                }),
                                label: (0, a.jsx)(p.A, {
                                  id: "librarySharing.viewerSelf",
                                  defaultMessage: "You",
                                  description: "Label for the currently signed-in reader in the Library sharing dialog",
                                }),
                                secondaryLabel: rr.viewer.email,
                                trailingContent: (0, a.jsx)("span", {
                                  className: "pe-2 text-sm text-tertiary",
                                  children: (0, a.jsx)(T.u, { permission: rq }),
                                }),
                              }),
                          rC
                            ?.filter((e) => {
                              let { principal: r } = e
                              return (
                                r.principal_id !== eE.accountUserId &&
                                r.principal_id !== rr.owner.principal.principal_id
                              )
                            })
                            .map((e) =>
                              (0, a.jsx)(
                                S.h,
                                {
                                  avatar:
                                    "group" === e.principal.principal_type
                                      ? (0, a.jsx)(n.e, { size: 28, Icon: b.oJq })
                                      : (0, a.jsx)(m.T, {
                                          size: "group",
                                          avatarUrl: e.avatar_url,
                                          colorKey: e.principal.principal_id,
                                          name: e.display_name ?? e.email ?? null,
                                        }),
                                  label:
                                    e.display_name ??
                                    e.email ??
                                    (0, a.jsx)(p.A, {
                                      id: "librarySharing.collaboratorFallback",
                                      defaultMessage: "Collaborator",
                                      description:
                                        "Fallback display name when a Library collaborator has no returned name or email",
                                    }),
                                  secondaryLabel: e.email,
                                  trailingContent: (0, a.jsx)("span", {
                                    className: "pe-2 text-sm text-tertiary",
                                    children: (0, a.jsx)(T.u, { permission: (0, O.rP)(e.role_id, eE.resourceKind) }),
                                  }),
                                },
                                (0, O.nD)(e.principal),
                              ),
                            ),
                        ],
                      })),
                (eI[191] = r1),
                (eI[192] = rt),
                (eI[193] = ra),
                (eI[194] = eE.accountUserId),
                (eI[195] = eE.resourceKind),
                (eI[196] = rr.owner.principal.principal_id),
                (eI[197] = rr.viewer),
                (eI[198] = rq),
                (eI[199] = rC),
                (eI[200] = o))
              : (o = eI[200]),
            (eh = (0, a.jsxs)(a.Fragment, { children: [t, s, l, o] })))
        }
        ;((eI[145] = r1),
          (eI[146] = r$),
          (eI[147] = eV),
          (eI[148] = rh),
          (eI[149] = rt),
          (eI[150] = rG),
          (eI[151] = rK),
          (eI[152] = rY),
          (eI[153] = eK),
          (eI[154] = ra),
          (eI[155] = ru),
          (eI[156] = eE),
          (eI[157] = rr),
          (eI[158] = eT),
          (eI[159] = rq),
          (eI[160] = rj),
          (eI[161] = rC),
          (eI[162] = eh))
      } else eh = eI[162]
      let r2 = null == rr || rY
      ;(eI[201] !== rJ
        ? ((em = () => {
            rJ()
          }),
          (eI[201] = rJ),
          (eI[202] = em))
        : (em = eI[202]),
        eI[203] === Symbol.for("react.memo_cache_sentinel")
          ? ((eg = (0, a.jsx)(b.ibM, {})),
            (ey = (0, a.jsx)(p.A, {
              id: "librarySharing.copy",
              defaultMessage: "Copy link",
              description: "Button copying the canonical ChatGPT Library sharing link to this file or folder",
            })),
            (eI[203] = eg),
            (eI[204] = ey))
          : ((eg = eI[203]), (ey = eI[204])),
        eI[205] !== rM || eI[206] !== r2 || eI[207] !== em
          ? ((eb = (0, a.jsxs)(s.$, {
              size: "xl",
              type: "button",
              color: "secondary",
              variant: "outline",
              disabled: r2,
              loading: rM,
              onClick: em,
              children: [eg, ey],
            })),
            (eI[205] = rM),
            (eI[206] = r2),
            (eI[207] = em),
            (eI[208] = eb))
          : (eb = eI[208]))
      let r3 = eb
      eI[209] !== eh ||
      eI[210] !== r1 ||
      eI[211] !== eA ||
      eI[212] !== r$ ||
      eI[213] !== eV ||
      eI[214] !== rh ||
      eI[215] !== rm ||
      eI[216] !== rt ||
      eI[217] !== rK ||
      eI[218] !== eP ||
      eI[219] !== r3 ||
      eI[220] !== rY ||
      eI[221] !== eY ||
      eI[222] !== eB ||
      eI[223] !== rz ||
      eI[224] !== ry ||
      eI[225] !== eR ||
      eI[226] !== r0 ||
      eI[227] !== rB ||
      eI[228] !== rU ||
      eI[229] !== eK ||
      eI[230] !== ra ||
      eI[231] !== eF ||
      eI[232] !== eG ||
      eI[233] !== eq ||
      eI[234] !== eM ||
      eI[235] !== re ||
      eI[236] !== rW ||
      eI[237] !== rF ||
      eI[238] !== ru ||
      eI[239] !== ro ||
      eI[240] !== eE ||
      eI[241] !== rr ||
      eI[242] !== eT ||
      eI[243] !== e6 ||
      eI[244] !== e7 ||
      eI[245] !== rj
        ? ((ev = (e) =>
            (0, a.jsx)(E.$t, {
              isLoading: !e6 && null == rr,
              title:
                rt || ra || (eF && !eP) || rr?.capabilities?.can_request_access !== !0
                  ? (0, a.jsx)(p.A, {
                      id: "librarySharing.fileTitle",
                      defaultMessage: "Share {fileName}",
                      description: "Title of the Library file or folder sharing dialog; fileName is the item's title",
                      values: { fileName: eR },
                    })
                  : (0, a.jsx)(p.A, {
                      id: "librarySharing.requestTitle",
                      defaultMessage: "Request to share {fileName}",
                      description: "Title for a collaborator requesting the owner's approval to share a Library item",
                      values: { fileName: eR },
                    }),
              headerContent:
                null != e
                  ? e.headerContent
                  : null != rr &&
                    rh &&
                    (0, a.jsx)(
                      ef,
                      {
                        account: eA,
                        api: eV,
                        sharingScope: eE,
                        sharingState: rr,
                        shares: ru,
                        effectiveAccess: rj,
                        analytics: r$,
                        canInvite: rK,
                        disabled: rY,
                        isCurrentSession: eK,
                        onStageChange: rD,
                      },
                      eB,
                    ),
              isDismissalDisabled: rU || e?.isPending === !0,
              onSubmit: rt ? rW : e?.onSubmit,
              footer:
                null == rr || rt || ra || 0 !== eY.size
                  ? (0, a.jsx)(R.r, {
                      onCancel: () => {
                        ;(ez(new Map()), eU(eJ))
                      },
                      onClose: eq,
                      isBusy: rU,
                      disabled: rY || rz,
                      hasPendingAccessChange: eY.size > 0,
                      hasPendingInvitees: [...eY.values()].some(eZ),
                      isSaving: rF,
                      copyLink: r3,
                    })
                  : (0, a.jsxs)(a.Fragment, {
                      children: [(0, a.jsx)("div", { className: "me-auto", children: r3 }), e?.footer],
                    }),
              children:
                null == rr
                  ? (0, a.jsx)(y.OO, {
                      className: e6 ? void 0 : "flex-1 justify-center",
                      children: (0, a.jsx)(L.DN, {
                        isLoading: !e6,
                        onRetry: () => {
                          re()
                        },
                      }),
                    })
                  : (0, a.jsxs)(
                      "div",
                      {
                        className: "flex flex-col",
                        children: [
                          r0
                            ? (0, a.jsx)(y.OO, {
                                children: (0, a.jsx)(g.l, {
                                  type: "error",
                                  role: "alert",
                                  content: (0, a.jsx)(p.A, {
                                    id: "librarySharing.access.incomplete",
                                    defaultMessage:
                                      "Couldn't load all access details. Some sharing actions are unavailable",
                                    description:
                                      "Error when collaborators, inherited permissions, or workspace policy cannot be fully loaded; unsafe permission actions remain disabled",
                                  }),
                                  primaryCtaText: (0, a.jsx)(p.A, {
                                    id: "librarySharing.retry",
                                    defaultMessage: "Retry",
                                    description: "Button retrying a failed Library sharing data request",
                                  }),
                                  onPrimaryCtaClick: () => {
                                    eM.invalidateQueries({ queryKey: (0, O.X1)(eE) })
                                  },
                                }),
                              })
                            : null,
                          eT
                            ? (0, a.jsx)(a.Fragment, {
                                children: r1
                                  ? (0, a.jsx)(x.p, { kind: "link", children: (0, a.jsx)(L.gE, {}) })
                                  : (0, a.jsx)(ex, {
                                      allowedRoles: null == ru ? void 0 : (0, O.q4)(ru.allowed_roles, eE.resourceKind),
                                      analytics: r$,
                                      api: eV,
                                      canInitiateSharing: rh,
                                      canManage: rm,
                                      disabled: rY,
                                      permissionsPending: rt && (ro || ry),
                                      hasIndependentEditorAccess: rB,
                                      isCurrentSession: eK,
                                      isWorkspace: eF,
                                      sharingScope: eE,
                                      sharingState: rr,
                                      workspaceName: eA.name?.trim() || void 0,
                                      onStageChange: rD,
                                    }),
                              })
                            : null,
                          null != e
                            ? e.content
                            : (0, a.jsx)(x.p, {
                                children: (0, a.jsx)("div", { className: "flex flex-col gap-3", children: eh }),
                              }),
                          ra && eG
                            ? (0, a.jsx)(G, {
                                analytics: r$,
                                api: eV,
                                canApprove: rh && rK,
                                canDecide: !e7 && rr.capabilities?.can_manage_access_requests === !0,
                                disabled: rY,
                                isCurrentSession: eK,
                                sharingScope: eE,
                              })
                            : null,
                        ],
                      },
                      eB,
                    ),
            })),
          (eI[209] = eh),
          (eI[210] = r1),
          (eI[211] = eA),
          (eI[212] = r$),
          (eI[213] = eV),
          (eI[214] = rh),
          (eI[215] = rm),
          (eI[216] = rt),
          (eI[217] = rK),
          (eI[218] = eP),
          (eI[219] = r3),
          (eI[220] = rY),
          (eI[221] = eY),
          (eI[222] = eB),
          (eI[223] = rz),
          (eI[224] = ry),
          (eI[225] = eR),
          (eI[226] = r0),
          (eI[227] = rB),
          (eI[228] = rU),
          (eI[229] = eK),
          (eI[230] = ra),
          (eI[231] = eF),
          (eI[232] = eG),
          (eI[233] = eq),
          (eI[234] = eM),
          (eI[235] = re),
          (eI[236] = rW),
          (eI[237] = rF),
          (eI[238] = ru),
          (eI[239] = ro),
          (eI[240] = eE),
          (eI[241] = rr),
          (eI[242] = eT),
          (eI[243] = e6),
          (eI[244] = e7),
          (eI[245] = rj),
          (eI[246] = ev))
        : (ev = eI[246])
      let r4 = ev
      return (
        eI[247] !== eh ||
        eI[248] !== eA ||
        eI[249] !== r$ ||
        eI[250] !== eV ||
        eI[251] !== rt ||
        eI[252] !== rY ||
        eI[253] !== eB ||
        eI[254] !== rL ||
        eI[255] !== eK ||
        eI[256] !== ra ||
        eI[257] !== r4 ||
        eI[258] !== rI ||
        eI[259] !== eE ||
        eI[260] !== rr ||
        eI[261] !== e7
          ? ((ew =
              null == rr || rt || ra
                ? r4(null)
                : (0, a.jsx)(
                    ek,
                    {
                      account: eA,
                      analytics: r$,
                      api: eV,
                      canRequest: !e7 && rr.capabilities?.can_request_access === !0,
                      disabled: rY,
                      isCurrentSession: eK,
                      renderDialog: r4,
                      roster: rL ? rI : void 0,
                      sharingScope: eE,
                      sharingState: rr,
                      children: eh,
                    },
                    eB,
                  )),
            (eI[247] = eh),
            (eI[248] = eA),
            (eI[249] = r$),
            (eI[250] = eV),
            (eI[251] = rt),
            (eI[252] = rY),
            (eI[253] = eB),
            (eI[254] = rL),
            (eI[255] = eK),
            (eI[256] = ra),
            (eI[257] = r4),
            (eI[258] = rI),
            (eI[259] = eE),
            (eI[260] = rr),
            (eI[261] = e7),
            (eI[262] = ew))
          : (ew = eI[262]),
        ew
      )
    }
    function eZ(e) {
      return "invite" === e.kind
    }
    function eJ(e) {
      return e + 1
    }
    function e0(e) {
      return !e.isValid
    }
    function e1(e) {
      return new Map([...e].filter(e2))
    }
    function e2(e) {
      let [, r] = e
      return "collaborator" !== r.kind
    }
    function e3(e) {
      return e.queryKey.at(-1)
    }
    function e4(e) {
      return "success" === e.state.status && !e.isStaleByTime(k.D.THIRTY_SECONDS)
    }
    function e5(e) {
      return (
        e instanceof q.fk &&
        404 === e.responseStatus &&
        "network" !== e.errorKind &&
        null == e.errorCode &&
        e.diagnosticError instanceof _.rX &&
        "Not Found" === e.diagnosticError.detail
      )
    }
  },
  Te1l(e, r, i) {
    var a = i("HY2m"),
      t = i("D7Ms"),
      n = i("rvFo"),
      s = i("nqea")
    i.d(
      r,
      {},
      {
        O: function (e, r, i) {
          let l = { refetchOnMount: () => !!a.t.isOnline() || "always", retry: !1 }
          return {
            state: {
              ...l,
              queryKey: (0, s.X1)(e, "state"),
              queryFn: ({ signal: e }) => r.getSharingState(e),
              staleTime: (e) => ("error" === e.state.status ? 0 : n.D.THIRTY_SECONDS),
            },
            shares: {
              ...l,
              queryKey: (0, s.X1)(e, "shares"),
              queryFn: null == i ? t.hT : ({ signal: e }) => r.getShares(i.owner.principal, e),
              staleTime: (e) => ("error" === e.state.status ? 0 : n.D.THIRTY_SECONDS),
            },
            effectiveAccess: {
              ...l,
              queryKey: (0, s.X1)(e, "effective-access"),
              queryFn: null == i ? t.hT : ({ signal: e }) => r.getEffectiveAccess(i.owner.principal, e),
              staleTime: (e) => ("error" === e.state.status ? 0 : n.D.THIRTY_SECONDS),
            },
            collaborators: {
              ...l,
              queryKey: (0, s.X1)(e, "collaborators"),
              queryFn: ({ signal: e }) => r.getCollaborators({ signal: e }),
              staleTime: (e) => ("error" === e.state.status ? 0 : n.D.THIRTY_SECONDS),
            },
          }
        },
        X: function (e, r, i, a) {
          let t = [...(0, s.X1)(r, i), "pages"],
            l = e
              .getQueryCache()
              .findAll({ queryKey: t })
              .filter(
                (e) =>
                  e.queryKey.length === t.length + 1 &&
                  "success" === e.state.status &&
                  "idle" === e.state.fetchStatus &&
                  !e.isStaleByTime(n.D.THIRTY_SECONDS),
              )
              .sort((e, r) => r.state.dataUpdatedAt - e.state.dataUpdatedAt)[0],
            o = l?.queryKey.at(-1)
          return "string" == typeof o ? o : a
        },
      },
    )
  },
  aRS8(e, r, i) {
    var a = i("ABep"),
      t = i("QosV"),
      n = i("T0Rc"),
      s = i("zd8w"),
      l = i("Wf1j"),
      o = i("oyxz"),
      c = i("GO7r"),
      d = i("AOG7"),
      u = i("glqn"),
      p = i("ajGH"),
      h = i("LKbA"),
      m = i("rvFo"),
      _ = i("GEsy"),
      f = i("AEhU")
    function g(e) {
      let r,
        i,
        s,
        l,
        o,
        c,
        d,
        u,
        p = (0, t.c)(35)
      p[0] !== e.query ? ((r = e.query.trim().toLowerCase()), (p[0] = e.query), (p[1] = r)) : (r = p[1])
      let h = r,
        g = (0, _.o)(h, 150)
      p[2] !== e.currentEmail || p[3] !== e.existingEmails || p[4] !== h
        ? ((i = (0, f.on)({ query: h, selected: [], currentEmail: e.currentEmail, existingEmails: e.existingEmails })),
          (p[2] = e.currentEmail),
          (p[3] = e.existingEmails),
          (p[4] = h),
          (p[5] = i))
        : (i = p[5])
      let y = i.selected
      p[6] !== y || p[7] !== e.disabled || p[8] !== e.selected || p[9] !== h
        ? ((s =
            !e.disabled &&
            1 === y.length &&
            y[0]?.isValid === !0 &&
            y[0].label === h &&
            !e.selected.some((e) => {
              let { id: r } = e
              return r === y[0]?.id
            })),
          (p[6] = y),
          (p[7] = e.disabled),
          (p[8] = e.selected),
          (p[9] = h),
          (p[10] = s))
        : (s = p[10])
      let b = s
      p[11] !== e.accountId || p[12] !== e.currentPrincipalId || p[13] !== h
        ? ((l = ["library-sharing-recipient", e.accountId, e.currentPrincipalId, h]),
          (p[11] = e.accountId),
          (p[12] = e.currentPrincipalId),
          (p[13] = h),
          (p[14] = l))
        : (l = p[14])
      let v = b && h === g
      ;(p[15] !== e || p[16] !== h
        ? ((o = (r) => {
            let { signal: i } = r
            return e.resolveRecipient(h, AbortSignal.any([i, AbortSignal.timeout(7e3)]))
          }),
          (p[15] = e),
          (p[16] = h),
          (p[17] = o))
        : (o = p[17]),
        p[18] !== l || p[19] !== v || p[20] !== o
          ? ((c = { queryKey: l, enabled: v, staleTime: m.D.ONE_MINUTE, networkMode: "always", retry: !1, queryFn: o }),
            (p[18] = l),
            (p[19] = v),
            (p[20] = o),
            (p[21] = c))
          : (c = p[21]))
      let { data: w, isFetching: I, isError: S } = (0, n.I)(c)
      p[22] !== b || p[23] !== y || p[24] !== w?.eligible || p[25] !== g || p[26] !== S || p[27] !== I || p[28] !== h
        ? ((d = b && !I && !S && h === g && w?.eligible ? y : []),
          (p[22] = b),
          (p[23] = y),
          (p[24] = w?.eligible),
          (p[25] = g),
          (p[26] = S),
          (p[27] = I),
          (p[28] = h),
          (p[29] = d))
        : (d = p[29])
      let x = b && (I || h !== g)
      return (
        p[30] !== S || p[31] !== e || p[32] !== d || p[33] !== x
          ? ((u = (0, a.jsx)(A, { ...e, options: d, isLoading: x, searchFailed: S })),
            (p[30] = S),
            (p[31] = e),
            (p[32] = d),
            (p[33] = x),
            (p[34] = u))
          : (u = p[34]),
        u
      )
    }
    function y(e) {
      let r,
        i,
        n,
        s,
        l,
        o,
        c,
        u,
        p,
        h,
        m = (0, t.c)(34),
        { data: _, isFetching: f, isPending: g, isError: y } = (0, d.Nv)(e.disabled ? "" : e.query),
        S = `user:${e.currentPrincipalId}`
      m[0] !== e.existingPrincipalKeys || m[1] !== S
        ? ((r = new Set([...e.existingPrincipalKeys, S])), (m[0] = e.existingPrincipalKeys), (m[1] = S), (m[2] = r))
        : (r = m[2])
      let x = r,
        R = e.currentEmail ?? ""
      m[3] !== e.existingEmails || m[4] !== R
        ? ((i = new Set([...e.existingEmails, R].map(I))), (m[3] = e.existingEmails), (m[4] = R), (m[5] = i))
        : (i = m[5])
      let E = i
      m[6] !== e.selected ? ((n = new Set(e.selected.map(w))), (m[6] = e.selected), (m[7] = n)) : (n = m[7])
      let L = n
      m[8] !== e.selected ? ((s = new Set(e.selected.flatMap(v))), (m[8] = e.selected), (m[9] = s)) : (s = m[9])
      let C = s
      if (m[10] !== E || m[11] !== x || m[12] !== e.shares?.shares || m[13] !== C || m[14] !== L || m[15] !== _) {
        let r = e.shares?.shares.filter(b)
        for (let e of ((l = (e, i) => {
          let a
          return (
            x.has(`group:${e}`) &&
              (a = r?.some(
                (r) =>
                  "principal" === r.recipient.recipient_type &&
                  "group" === r.recipient.principal_type &&
                  r.recipient.principal_id === e,
              )
                ? "pending"
                : "existing"),
            {
              id: `group:${e}`,
              label: i,
              accessStatus: a,
              recipient: { recipient_type: "principal", principal_type: "group", principal_id: e },
              isValid: !0,
            }
          )
        }),
        (o = []),
        _ ?? [])) {
          let i,
            a = `user:${e.account_user_id}`
          L.has(a) ||
            (null != e.email && C.has(e.email.trim().toLowerCase())) ||
            ((x.has(a) || (null != e.email && E.has(e.email.trim().toLowerCase()))) &&
              (i = r?.some((r) =>
                "principal" === r.recipient.recipient_type
                  ? (r.recipient.principal_type ?? "user") === "user" && r.recipient.principal_id === e.account_user_id
                  : r.recipient.email.trim().toLowerCase() === e.email?.trim().toLowerCase(),
              )
                ? "pending"
                : "existing"),
            o.push({
              id: a,
              colorKey: e.account_user_id,
              label: e.name || e.email || e.account_user_id,
              secondaryLabel: e.email ?? void 0,
              accessStatus: i,
              recipient: { recipient_type: "principal", principal_type: "user", principal_id: e.account_user_id },
              isValid: !0,
            }))
        }
        ;((m[10] = E),
          (m[11] = x),
          (m[12] = e.shares?.shares),
          (m[13] = C),
          (m[14] = L),
          (m[15] = _),
          (m[16] = l),
          (m[17] = o))
      } else ((l = m[16]), (o = m[17]))
      ;(m[18] !== l || m[19] !== e.allowGroups
        ? ((c = e.allowGroups ? (e) => l(e.id, e.name) : void 0), (m[18] = l), (m[19] = e.allowGroups), (m[20] = c))
        : (c = m[20]),
        m[21] !== l ? ((u = (e) => l(e.id, e.name)), (m[21] = l), (m[22] = u)) : (u = m[22]))
      let T = g || f
      return (
        m[23] !== e.query || m[24] !== C
          ? ((p = "" !== e.query.trim() && C.has(e.query.trim().toLowerCase())),
            (m[23] = e.query),
            (m[24] = C),
            (m[25] = p))
          : (p = m[25]),
        m[26] !== o || m[27] !== e || m[28] !== c || m[29] !== u || m[30] !== T || m[31] !== p || m[32] !== y
          ? ((h = (0, a.jsx)(A, {
              ...e,
              getGroupRecipient: c,
              getTeamRecipient: u,
              options: o,
              isLoading: T,
              queryAlreadyAdded: p,
              searchFailed: y,
            })),
            (m[26] = o),
            (m[27] = e),
            (m[28] = c),
            (m[29] = u),
            (m[30] = T),
            (m[31] = p),
            (m[32] = y),
            (m[33] = h))
          : (h = m[33]),
        h
      )
    }
    function b(e) {
      return "pending" === e.status
    }
    function v(e) {
      return null == e.secondaryLabel ? [] : [e.secondaryLabel.trim().toLowerCase()]
    }
    function w(e) {
      return e.id
    }
    function I(e) {
      return e.trim().toLowerCase()
    }
    function A(e) {
      let r,
        i,
        n,
        c,
        d,
        m,
        _,
        f,
        g,
        y,
        b = (0, t.c)(44),
        {
          getGroupRecipient: v,
          getTeamRecipient: w,
          options: I,
          queryAlreadyAdded: A,
          searchFailed: C,
          isLoading: T,
          ...k
        } = e,
        q = void 0 !== C && C,
        j = void 0 !== T && T,
        M = (0, l.A)(),
        N = (0, s.useId)(),
        F = k.selected.some(L),
        O = k.disabled || (k.isWorkspace && !k.canSearchMembers),
        D = null
      if (F) {
        let e
        ;(b[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(o.A, {
              id: "librarySharing.invite.invalidEmails",
              defaultMessage: "Remove invalid email addresses before inviting",
              description:
                "Inline error in the Library sharing dialog after invalid email addresses have become selected tokens; the user must remove those tokens before sending invitations",
            })),
            (b[0] = e))
          : (e = b[0]),
          (D = e))
      } else if (void 0 !== A && A) {
        let e
        ;(b[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(o.A, {
              id: "librarySharing.invite.alreadyAdded",
              defaultMessage: "This person already has access or is selected",
              description:
                "Inline feedback in the Library sharing dialog when an entered email belongs to the owner, an existing collaborator, or an already selected invitee",
            })),
            (b[1] = e))
          : (e = b[1]),
          (D = e))
      }
      let P = [k.ariaDescribedBy, null == D ? void 0 : N].filter(E).join(" ") || void 0,
        G = null
      ;(k.selected.length > 0 &&
        null != k.role &&
        null != k.allowedRoles &&
        (G =
          k.allowedRoles.length > 1
            ? (0, a.jsx)(u.e, {
                indicatorVariant: "checkmark",
                variant: "inline",
                renderLabel: R,
                disabled: O,
                options: k.allowedRoles.map(x),
                value: k.role,
                onChange: k.onRoleChange,
              })
            : (0, a.jsx)("span", { className: "text-tertiary", children: (0, a.jsx)(h.u, { permission: k.role }) })),
        b[2] !== M
          ? ((r = M.formatMessage({
              id: "librarySharing.invite.personalPlaceholder",
              defaultMessage: "Add emails",
              description:
                "Placeholder and accessible label in the Library sharing recipient input for personal accounts; users enter an email address and select a validated recipient",
            })),
            (b[2] = M),
            (b[3] = r))
          : (r = b[3]))
      let K = r
      b[4] !== M
        ? ((i = (e) =>
            M.formatMessage(
              {
                id: "librarySharing.invite.removeSelection",
                defaultMessage: "Remove {name} from the invitation",
                description:
                  "Accessible label of a selected Library sharing recipient's remove button; name is the person's display name, group name, or email address",
              },
              { name: e.label },
            )),
          (b[4] = M),
          (b[5] = i))
        : (i = b[5])
      let H = i
      return (
        b[6] !== K || b[7] !== k.isWorkspace
          ? ((n = k.isWorkspace ? void 0 : { people: K, peopleAndTeams: K }),
            (b[6] = K),
            (b[7] = k.isWorkspace),
            (b[8] = n))
          : (n = b[8]),
        b[9] !== I ? ((c = I?.map(S)), (b[9] = I), (b[10] = c)) : (c = b[10]),
        b[11] !== M || b[12] !== k.isWorkspace
          ? ((d = k.isWorkspace
              ? M.formatMessage({
                  id: "librarySharing.invite.searching",
                  defaultMessage: "Searching workspace members",
                  description:
                    "Accessible status while the Library sharing picker searches the current workspace for recipients",
                })
              : M.formatMessage({
                  id: "librarySharing.invite.searchingRecipients",
                  defaultMessage: "Searching for people",
                  description:
                    "Accessible status while the Library sharing picker checks whether the entered email is eligible for sharing",
                })),
            (b[11] = M),
            (b[12] = k.isWorkspace),
            (b[13] = d))
          : (d = b[13]),
        b[14] !== k.isWorkspace
          ? ((m = k.isWorkspace
              ? (0, a.jsx)(o.A, {
                  id: "librarySharing.invite.noWorkspaceMatches",
                  defaultMessage: "No matching people or teams",
                  description:
                    "Empty search result in the Library sharing dialog; only members and eligible groups of the current workspace can be invited",
                })
              : (0, a.jsx)(o.A, {
                  id: "librarySharing.invite.noEligibleRecipient",
                  defaultMessage: "No matching recipients",
                  description:
                    "Empty result when the email entered in the personal Library sharing dialog is not eligible for sharing",
                })),
            (b[14] = k.isWorkspace),
            (b[15] = m))
          : (m = b[15]),
        b[16] !== P ||
        b[17] !== O ||
        b[18] !== v ||
        b[19] !== H ||
        b[20] !== w ||
        b[21] !== j ||
        b[22] !== k.accountId ||
        b[23] !== k.onChange ||
        b[24] !== k.onQueryChange ||
        b[25] !== k.query ||
        b[26] !== k.selected ||
        b[27] !== G ||
        b[28] !== q ||
        b[29] !== n ||
        b[30] !== c ||
        b[31] !== d ||
        b[32] !== m
          ? ((_ = (0, a.jsx)(p.B, {
              accountId: k.accountId,
              getTeamRecipient: w,
              getGroupRecipient: v,
              ariaDescribedBy: P,
              disabled: O,
              placeholder: n,
              selectedOptions: k.selected,
              getRemoveLabel: H,
              options: c,
              onChange: k.onChange,
              query: k.query,
              onQueryChange: k.onQueryChange,
              isLoading: j,
              searchFailed: q,
              loadingLabel: d,
              emptyMessage: m,
              trailingContent: G,
            })),
            (b[16] = P),
            (b[17] = O),
            (b[18] = v),
            (b[19] = H),
            (b[20] = w),
            (b[21] = j),
            (b[22] = k.accountId),
            (b[23] = k.onChange),
            (b[24] = k.onQueryChange),
            (b[25] = k.query),
            (b[26] = k.selected),
            (b[27] = G),
            (b[28] = q),
            (b[29] = n),
            (b[30] = c),
            (b[31] = d),
            (b[32] = m),
            (b[33] = _))
          : (_ = b[33]),
        b[34] !== D || b[35] !== N
          ? ((f =
              null == D
                ? null
                : (0, a.jsx)("p", { id: N, className: "text-sm text-danger", role: "alert", children: D })),
            (b[34] = D),
            (b[35] = N),
            (b[36] = f))
          : (f = b[36]),
        b[37] !== k.canSearchMembers || b[38] !== k.isWorkspace
          ? ((g =
              k.isWorkspace && !k.canSearchMembers
                ? (0, a.jsx)("p", {
                    className: "text-sm text-codex-description",
                    children: (0, a.jsx)(o.A, {
                      id: "librarySharing.invite.searchRestricted",
                      defaultMessage: "Your workspace doesn't allow searching for members",
                      description:
                        "Explanation below the disabled recipient input in the Library sharing dialog when workspace policy prevents member search",
                    }),
                  })
                : null),
            (b[37] = k.canSearchMembers),
            (b[38] = k.isWorkspace),
            (b[39] = g))
          : (g = b[39]),
        b[40] !== _ || b[41] !== f || b[42] !== g
          ? ((y = (0, a.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col gap-2", children: [_, f, g] })),
            (b[40] = _),
            (b[41] = f),
            (b[42] = g),
            (b[43] = y))
          : (y = b[43]),
        y
      )
    }
    function S(e) {
      return {
        ...e,
        Icon: "principal" === e.recipient.recipient_type && "group" === e.recipient.principal_type ? c.oJq : void 0,
      }
    }
    function x(e) {
      return { value: e }
    }
    function R(e) {
      return (0, a.jsx)(h.u, { permission: e })
    }
    function E(e) {
      return null != e
    }
    function L(e) {
      return !e.isValid
    }
    i.d(
      r,
      {},
      {
        h: function (e) {
          let r,
            i = (0, t.c)(5)
          if (e.isWorkspace && e.canSearchMembers) {
            let r,
              t = `${e.accountId}:${e.allowGroups}`
            return (
              i[0] !== e || i[1] !== t
                ? ((r = (0, a.jsx)(y, { ...e }, t)), (i[0] = e), (i[1] = t), (i[2] = r))
                : (r = i[2]),
              r
            )
          }
          return (
            i[3] !== e
              ? ((r = e.isWorkspace ? (0, a.jsx)(A, { ...e }) : (0, a.jsx)(g, { ...e })), (i[3] = e), (i[4] = r))
              : (r = i[4]),
            r
          )
        },
      },
    )
  },
  AEhU(e, r, i) {
    var a = i("ASxG"),
      t = i("nqea")
    let n = /[\s,;]+/,
      s = a.email()
    i.d(
      r,
      {},
      {
        Go: function (e, r, i) {
          return e.some(({ recipient: e, secondaryLabel: a }) =>
            "email" === e.recipient_type
              ? r.has(e.email.trim().toLowerCase())
              : i.has(`${e.principal_type ?? "user"}:${e.principal_id}`) ||
                (null != a && r.has(a.trim().toLowerCase())),
          )
        },
        Hd: function (e, r, i) {
          return {
            existingPrincipalKeys: new Set([
              (0, t.nD)(e.owner.principal),
              (0, t.nD)(e.viewer.principal),
              ...(r?.shares.flatMap((e) =>
                "principal" === e.recipient.recipient_type
                  ? [`${e.recipient.principal_type ?? "user"}:${e.recipient.principal_id}`]
                  : [],
              ) ?? []),
              ...(i?.collaborators.map(({ principal: e }) => (0, t.nD)(e)) ?? []),
            ]),
            existingEmails: new Set(
              [
                e.owner.email,
                e.viewer.email,
                ...(r?.shares.map((e) =>
                  "email" === e.recipient.recipient_type ? e.recipient.email : e.recipient_email,
                ) ?? []),
                ...(i?.collaborators.map(({ email: e }) => e) ?? []),
              ].flatMap((e) => (null == e ? [] : [e.trim().toLowerCase()])),
            ),
          }
        },
        on: function ({ query: e, selected: r, currentEmail: i, existingEmails: a }) {
          let t = [...r],
            l = new Set([...a, i ?? ""].map((e) => e.trim().toLowerCase())),
            o = new Set(r.map((e) => e.id)),
            c = !1
          for (let r of e.split(n)) {
            let e = r.trim().toLowerCase()
            if ("" === e) continue
            let i = `email:${e}`
            if (l.has(e) || o.has(i)) {
              c = !0
              continue
            }
            ;(o.add(i),
              t.push({
                id: i,
                label: e,
                recipient: { recipient_type: "email", email: e },
                isValid: s.safeParse(e).success,
              }))
          }
          return { selected: t, rejectedExisting: c }
        },
      },
    )
  },
  AOG7(e, r, i) {
    var a = i("QosV"),
      t = i("T0Rc"),
      n = i("EOo5"),
      s = i("rvFo"),
      l = i("HFSu"),
      o = i("GEsy"),
      c = i("eShZ")
    async function d(e, r, i, { includeProfilePhotos: a = !1, includeTotal: t, limit: n = 10 } = {}) {
      return (
        await l.CodexRequest.safeGet("/accounts/{account_id}/users", {
          parameters: {
            path: { account_id: e },
            query: { limit: n, offset: 0, query: r, include_profile_photos: a, include_total: t },
          },
          signal: i,
        })
      ).items
    }
    i.d(
      r,
      {},
      {
        AB: d,
        C4: async function (e, r, i) {
          let a = r.trim().toLowerCase(),
            t = await d(e, a, i)
          return t.find((e) => e.email?.trim().toLowerCase() === a)?.account_user_id
        },
        Nc: function (e, r) {
          let i,
            c,
            d,
            u,
            p,
            h,
            m = (0, a.c)(18)
          m[0] !== r ? ((i = void 0 === r ? {} : r), (m[0] = r), (m[1] = i)) : (i = m[1])
          let { includeMemberCounts: _ } = i,
            f = void 0 !== _ && _,
            { accountId: g, authMethod: y } = (0, n.As)()
          m[2] !== e ? ((c = e.trim()), (m[2] = e), (m[3] = c)) : (c = m[3])
          let b = c,
            v = (0, o.o)(b, 150)
          ;(m[4] !== f ? ((d = f ? ["member-counts"] : []), (m[4] = f), (m[5] = d)) : (d = m[5]),
            m[6] !== g || m[7] !== b || m[8] !== d
              ? ((u = ["workspace-groups", g, b, ...d]), (m[6] = g), (m[7] = b), (m[8] = d), (m[9] = u))
              : (u = m[9]))
          let w = ("chatgpt" === y || "chatgptAuthTokens" === y) && null != g && b.length > 0 && b === v
          return (
            m[10] !== g || m[11] !== f || m[12] !== b
              ? ((p = async (e) => {
                  let { signal: r } = e
                  if (null == g) throw Error("account id is required")
                  return (
                    await l.CodexRequest.safeGet("/accounts/{account_id}/groups", {
                      parameters: {
                        path: { account_id: g },
                        query: { limit: 10, offset: 0, query: b, include_member_counts: f, include_total: !1 },
                      },
                      signal: AbortSignal.any([r, AbortSignal.timeout(15e3)]),
                    })
                  ).items
                }),
                (m[10] = g),
                (m[11] = f),
                (m[12] = b),
                (m[13] = p))
              : (p = m[13]),
            m[14] !== u || m[15] !== w || m[16] !== p
              ? ((h = {
                  queryKey: u,
                  enabled: w,
                  networkMode: "always",
                  refetchOnReconnect: !0,
                  retry: !1,
                  queryFn: p,
                  staleTime: s.D.ONE_MINUTE,
                }),
                (m[14] = u),
                (m[15] = w),
                (m[16] = p),
                (m[17] = h))
              : (h = m[17]),
            (0, t.I)(h)
          )
        },
        Nv: function (e, r) {
          let i,
            l,
            c,
            u,
            p,
            h,
            m = (0, a.c)(18)
          m[0] !== r ? ((i = void 0 === r ? {} : r), (m[0] = r), (m[1] = i)) : (i = m[1])
          let { includeProfilePhotos: _ } = i,
            f = void 0 !== _ && _,
            { accountId: g, authMethod: y } = (0, n.As)()
          m[2] !== e ? ((l = e.trim()), (m[2] = e), (m[3] = l)) : (l = m[3])
          let b = l,
            v = (0, o.o)(b, 150)
          ;(m[4] !== f ? ((c = f ? ["profile-photos"] : []), (m[4] = f), (m[5] = c)) : (c = m[5]),
            m[6] !== g || m[7] !== b || m[8] !== c
              ? ((u = ["workspace-users", g, b, ...c]), (m[6] = g), (m[7] = b), (m[8] = c), (m[9] = u))
              : (u = m[9]))
          let w = ("chatgpt" === y || "chatgptAuthTokens" === y) && null != g && b.length > 0 && b === v
          return (
            m[10] !== g || m[11] !== f || m[12] !== b
              ? ((p = async (e) => {
                  let { signal: r } = e
                  if (null == g) throw Error("account id is required")
                  return d(g, b, AbortSignal.any([r, AbortSignal.timeout(15e3)]), { includeProfilePhotos: f })
                }),
                (m[10] = g),
                (m[11] = f),
                (m[12] = b),
                (m[13] = p))
              : (p = m[13]),
            m[14] !== u || m[15] !== w || m[16] !== p
              ? ((h = {
                  queryKey: u,
                  enabled: w,
                  networkMode: "always",
                  refetchOnReconnect: !0,
                  retry: !1,
                  queryFn: p,
                  staleTime: s.D.ONE_MINUTE,
                }),
                (m[14] = u),
                (m[15] = w),
                (m[16] = p),
                (m[17] = h))
              : (h = m[17]),
            (0, t.I)(h)
          )
        },
        We: async function (e, r, i) {
          try {
            return (
              await l.CodexRequest.safeGet("/spaces/people", {
                parameters: { query: { account_id: e, query: r, limit: 10, offset: 0 } },
                signal: i,
              })
            ).items
          } catch (e) {
            if (!(e instanceof c.fk && 404 === e.status)) throw e
          }
          return d(e, r, i)
        },
      },
    )
  },
  Yqxh(e, r, i) {
    i.d(
      r,
      {},
      {
        x: function (e, r) {
          return r ?? (e ? "editor" : "viewer")
        },
      },
    )
  },
  qCmE(e, r, i) {
    var a = i("ABep"),
      t = i("QosV"),
      n = i("zTeN"),
      s = i("iFq6"),
      l = i("EOo5"),
      o = i("MFZ6")
    i.d(
      r,
      {},
      {
        K: function (e) {
          let r,
            i,
            c = (0, t.c)(6),
            { groupId: d, size: u } = e,
            { accountId: p } = (0, l.As)(),
            { data: h } = (0, n._U)(s.l, p ?? "", { enabled: null != p }) ?? {}
          c[0] !== d || c[1] !== h ? ((r = h?.find((e) => e.id === d)), (c[0] = d), (c[1] = h), (c[2] = r)) : (r = c[2])
          let m = r,
            _ = m?.avatar
          return (
            c[3] !== u || c[4] !== _
              ? ((i = (0, a.jsx)(o.y, { avatar: _, size: u })), (c[3] = u), (c[4] = _), (c[5] = i))
              : (i = c[5]),
            i
          )
        },
      },
    )
  },
  Vzcd(e, r, i) {
    var a = i("ABep"),
      t = i("QosV"),
      n = i("hwkA"),
      s = i("oyxz"),
      l = i("RNul")
    i.d(
      r,
      {},
      {
        r: function (e) {
          let r,
            i,
            o,
            c,
            d,
            u,
            p,
            h = (0, t.c)(30),
            {
              copyLink: m,
              disabled: _,
              hasPendingAccessChange: f,
              hasPendingInvitees: g,
              isSaving: y,
              isBusy: b,
              isCancelDisabled: v,
              inviteLabel: w,
              saveLabel: I,
              variant: A,
              onCancel: S,
              onClose: x,
            } = e,
            R = void 0 === b ? y : b,
            E = void 0 === v ? R : v,
            L = void 0 === A ? "default" : A,
            C = f || g
          if (y) {
            let e
            ;(h[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(s.A, {
                  id: "shareDialog.primaryAction.saving",
                  defaultMessage: "Saving",
                  description: "Button label while a share dialog saves permissions or invites",
                })),
                (h[0] = e))
              : (e = h[0]),
              (r = e))
          } else if (g) {
            let e
            ;(h[1] !== w
              ? ((e =
                  w ??
                  (0, a.jsx)(s.A, {
                    id: "shareDialog.primaryAction.invite",
                    defaultMessage: "Invite",
                    description: "Button label for inviting selected people or groups in a share dialog",
                  })),
                (h[1] = w),
                (h[2] = e))
              : (e = h[2]),
              (r = e))
          } else if (C) {
            let e
            ;(h[3] !== I
              ? ((e =
                  I ??
                  (0, a.jsx)(s.A, {
                    id: "shareDialog.primaryAction.save",
                    defaultMessage: "Save",
                    description: "Button label for saving a share dialog access change",
                  })),
                (h[3] = I),
                (h[4] = e))
              : (e = h[4]),
              (r = e))
          } else {
            let e
            ;(h[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(s.A, {
                  id: "shareDialog.done",
                  defaultMessage: "Done",
                  description: "Button closing the sharing dialog when there are no unsaved changes",
                })),
                (h[5] = e))
              : (e = h[5]),
              (r = e))
          }
          ;(h[6] !== m
            ? ((i = (0, a.jsx)("div", { className: "me-auto", children: m })), (h[6] = m), (h[7] = i))
            : (i = h[7]),
            h[8] !== C || h[9] !== E || h[10] !== S || h[11] !== L
              ? ((o =
                  C &&
                  (0, a.jsx)(n.$, {
                    color: "secondary",
                    variant: "outline",
                    size: "xl",
                    gutterSize: "audienceReview" === L ? "sm" : void 0,
                    type: "button",
                    disabled: E,
                    onClick: S,
                    children: (0, a.jsx)(s.A, {
                      id: "shareDialog.primaryAction.cancel",
                      defaultMessage: "Cancel",
                      description: "Button label for cancelling staged changes in a share dialog",
                    }),
                  })),
                (h[8] = C),
                (h[9] = E),
                (h[10] = S),
                (h[11] = L),
                (h[12] = o))
              : (o = h[12]))
          let T = "audienceReview" === L ? "sm" : void 0,
            k = C ? "submit" : "button",
            q = y || R || (C && _),
            j = C ? void 0 : x
          return (
            h[13] !== y || h[14] !== r
              ? ((c = y ? (0, a.jsx)("span", { role: "status", children: r }) : r),
                (h[13] = y),
                (h[14] = r),
                (h[15] = c))
              : (c = h[15]),
            h[16] !== y
              ? ((d = y && (0, a.jsx)(l.y, { className: "icon-2xs" })), (h[16] = y), (h[17] = d))
              : (d = h[17]),
            h[18] !== y || h[19] !== c || h[20] !== d || h[21] !== T || h[22] !== k || h[23] !== q || h[24] !== j
              ? ((u = (0, a.jsxs)(n.$, {
                  color: "primary",
                  size: "xl",
                  gutterSize: T,
                  type: k,
                  disabled: q,
                  "aria-busy": y,
                  onClick: j,
                  children: [c, d],
                })),
                (h[18] = y),
                (h[19] = c),
                (h[20] = d),
                (h[21] = T),
                (h[22] = k),
                (h[23] = q),
                (h[24] = j),
                (h[25] = u))
              : (u = h[25]),
            h[26] !== u || h[27] !== i || h[28] !== o
              ? ((p = (0, a.jsxs)(a.Fragment, { children: [i, o, u] })),
                (h[26] = u),
                (h[27] = i),
                (h[28] = o),
                (h[29] = p))
              : (p = h[29]),
            p
          )
        },
      },
    )
  },
  aAsK(e, r, i) {
    var a = i("ABep"),
      t = i("QosV"),
      n = i("hwkA"),
      s = i("IUMq"),
      l = i("slpy"),
      o = i("oyxz"),
      c = i("GO7r"),
      d = i("DfN3")
    function u(e) {
      return e.stopPropagation()
    }
    i.d(
      r,
      {},
      {
        e: function (e) {
          let r,
            i,
            p,
            h,
            m,
            _,
            f,
            g,
            y,
            b,
            v = (0, t.c)(47),
            {
              alignOffset: w,
              color: I,
              options: A,
              disabled: S,
              footer: x,
              indicatorVariant: R,
              renderLabel: E,
              mixed: L,
              opticallyAlign: C,
              removeLabel: T,
              sideOffset: k,
              size: q,
              variant: j,
              value: M,
              onChange: N,
              onRemoveAccess: F,
            } = e,
            O = void 0 !== S && S,
            D = void 0 === R ? "checkmark" : R,
            P = void 0 !== L && L,
            G = void 0 === j ? "default" : j,
            K = void 0 === q ? "sm" : q
          "field" === G ? (K = "xl") : "audienceReview" === G && (K = "lg")
          let H = "audienceReview" === G ? d.A.permission : void 0,
            B = "field" === G || void 0 === I ? "primary" : I,
            U = "field" === G ? "outline" : "ghost",
            Y = "field" !== G,
            z = "inline" === G ? "2xs" : void 0
          ;(v[0] !== P || v[1] !== E || v[2] !== M
            ? ((r = P
                ? (0, a.jsx)(o.A, {
                    id: "shareDialog.mixedRoles",
                    defaultMessage: "Mixed",
                    description: "Role selector label when selected sharing recipients have different permissions",
                  })
                : E(M)),
              (v[0] = P),
              (v[1] = E),
              (v[2] = M),
              (v[3] = r))
            : (r = v[3]),
            v[4] === Symbol.for("react.memo_cache_sentinel") ? ((i = (0, a.jsx)(c.Aq_, {})), (v[4] = i)) : (i = v[4]),
            v[5] !== O ||
            v[6] !== C ||
            v[7] !== Y ||
            v[8] !== z ||
            v[9] !== r ||
            v[10] !== H ||
            v[11] !== B ||
            v[12] !== U ||
            v[13] !== K
              ? ((p = (0, a.jsxs)(n.$, {
                  className: H,
                  color: B,
                  variant: U,
                  size: K,
                  iconSize: "sm",
                  pill: Y,
                  gutterSize: z,
                  opticallyAlign: C,
                  disabled: O,
                  children: [r, i],
                })),
                (v[5] = O),
                (v[6] = C),
                (v[7] = Y),
                (v[8] = z),
                (v[9] = r),
                (v[10] = H),
                (v[11] = B),
                (v[12] = U),
                (v[13] = K),
                (v[14] = p))
              : (p = v[14]),
            v[15] !== O || v[16] !== p
              ? ((h = (0, a.jsx)(s.W.Trigger, { disabled: O, children: p })), (v[15] = O), (v[16] = p), (v[17] = h))
              : (h = v[17]))
          let W = P ? "" : M
          if (
            (v[18] !== N || v[19] !== A
              ? ((m = (e) => {
                  let r = A.find((r) => r.value === e)
                  null != r && N?.(r.value)
                }),
                (v[18] = N),
                (v[19] = A),
                (v[20] = m))
              : (m = v[20]),
            v[21] !== O || v[22] !== D || v[23] !== A || v[24] !== E)
          ) {
            let e
            ;(v[26] !== O || v[27] !== D || v[28] !== E
              ? ((e = (e) =>
                  (0, a.jsx)(
                    l.m,
                    {
                      content: e.tooltipText,
                      children: (0, a.jsx)(s.W.RadioItem, {
                        className: "hover:before:opacity-100",
                        indicatorVariant: D,
                        value: e.value,
                        disabled: O || e.disabled,
                        "aria-label": e.ariaLabel,
                        "aria-description": e.description,
                        children: (0, a.jsxs)("span", {
                          className: "flex max-w-64 min-w-0 flex-1 flex-col",
                          children: [
                            (0, a.jsx)("span", { children: E(e.value) }),
                            null == e.description
                              ? null
                              : (0, a.jsx)("span", {
                                  className: "text-sm text-pretty whitespace-normal text-secondary",
                                  children: e.description,
                                }),
                          ],
                        }),
                      }),
                    },
                    e.value,
                  )),
                (v[26] = O),
                (v[27] = D),
                (v[28] = E),
                (v[29] = e))
              : (e = v[29]),
              (_ = A.map(e)),
              (v[21] = O),
              (v[22] = D),
              (v[23] = A),
              (v[24] = E),
              (v[25] = _))
          } else _ = v[25]
          return (
            v[30] !== W || v[31] !== m || v[32] !== _
              ? ((f = (0, a.jsx)(s.W.RadioGroup, { value: W, onChange: m, children: _ })),
                (v[30] = W),
                (v[31] = m),
                (v[32] = _),
                (v[33] = f))
              : (f = v[33]),
            v[34] !== O || v[35] !== F || v[36] !== T
              ? ((g =
                  null == F
                    ? null
                    : (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(s.W.Separator, {}),
                          (0, a.jsx)(s.W.Item, { color: "danger", disabled: O, onSelect: F, children: T }),
                        ],
                      })),
                (v[34] = O),
                (v[35] = F),
                (v[36] = T),
                (v[37] = g))
              : (g = v[37]),
            v[38] !== w || v[39] !== x || v[40] !== k || v[41] !== f || v[42] !== g
              ? ((y = (0, a.jsxs)(s.W.Content, {
                  align: "end",
                  alignOffset: w,
                  minWidth: "auto",
                  sideOffset: k,
                  children: [f, g, x],
                })),
                (v[38] = w),
                (v[39] = x),
                (v[40] = k),
                (v[41] = f),
                (v[42] = g),
                (v[43] = y))
              : (y = v[43]),
            v[44] !== h || v[45] !== y
              ? ((b = (0, a.jsx)("span", {
                  className: "inline-flex",
                  role: "presentation",
                  onMouseDown: u,
                  children: (0, a.jsxs)(s.W, { children: [h, y] }),
                })),
                (v[44] = h),
                (v[45] = y),
                (v[46] = b))
              : (b = v[46]),
            b
          )
        },
      },
    )
  },
  bQW7(e, r, i) {
    var a = i("S4d4"),
      t = i("CMOE")
    function n(e, r) {
      if (!r || r.includes("@") || !e.email) return !1
      let i = e.email.toLowerCase(),
        [a, n] = i.split("@")
      if (!n || !r.split(" ").some((e) => n.includes(e))) return !1
      let s = e.name?.toLowerCase() === i ? null : e.name
      return (
        !e.profile_username?.toLowerCase().startsWith(r) &&
        (0, t.f)(e, r) > 0 &&
        0 === (0, t.f)({ name: s, email: a }, r)
      )
    }
    function s(
      e,
      r,
      {
        currentUserId: i,
        limit: a = 10,
        includeUnknownNames: t = !1,
        excludeDomainOnlyMatches: l = !1,
        requireIdentified: c = !1,
        directoryMatches: u,
        mentionCounts: p,
      } = {},
    ) {
      let h = e.trim().toLowerCase().replace(/\s+/gu, " "),
        m = o(p, e),
        _ = new Map()
      for (let [e, i] of [...r, u].entries())
        for (let r of i ?? []) {
          let a = c ? d(r) : r,
            t = a ?? r
          if (l && n(t, h)) continue
          let s = null != a,
            o = s
              ? (function (e, r, i) {
                  if ("" === r) return 0
                  let a = e.name?.trim().toLowerCase().replace(/\s+/gu, " ") ?? "",
                    t = e.email?.trim().toLowerCase() ?? ""
                  return (a === r && (i || r.includes(" "))) || t === r
                    ? 5
                    : a.startsWith(r)
                      ? 4
                      : a.split(" ").some((e) => e.startsWith(r))
                        ? 3
                        : t.startsWith(r)
                          ? 2
                          : Number(r.split(" ").every((e) => a.includes(e)) || t.includes(r))
                })(t, h, !!p?.size) || Number(i === u)
              : 0,
            m = _.get(t.id),
            f = m?.item.name
          ;(null == m ||
            o > m.match ||
            (!m.identified && s) ||
            (o === m.match && (!f || f.split("__")[0] === t.id) && t.name && t.name.split("__")[0] !== t.id)) &&
            _.set(t.id, { item: t, locality: m?.locality ?? e, match: o, identified: s })
        }
      return [..._.values()]
        .filter(
          ({ item: e, match: r, identified: a }) =>
            a && ("" === h ? e.id !== i?.split("__")[0] : r > 0 || (t && null == e.name)),
        )
        .sort(
          (e, r) =>
            Number(5 === r.match) - Number(5 === e.match) ||
            m(r) - m(e) ||
            e.locality - r.locality ||
            r.match - e.match ||
            (e.item.name || e.item.email || e.item.id).localeCompare(r.item.name || r.item.email || r.item.id) ||
            e.item.id.localeCompare(r.item.id),
        )
        .slice(0, a)
        .map(({ item: e }) => e)
    }
    function l(
      e,
      r,
      i,
      {
        currentUserId: a,
        limit: s = 10,
        includeUnknownNames: d = !1,
        excludeDomainOnlyMatches: u = !1,
        directoryMatches: p,
        mentionCounts: h,
      } = {},
    ) {
      let m = e.trim().toLowerCase().replace(/\s+/gu, " "),
        _ = new Map(),
        f = (e, r) => {
          let i = e.split("__")[0]
          _.set(i, Math.max(_.get(i) ?? 0, r))
        }
      for (let e of i.rosterUserIds ?? []) f(e, 5)
      for (let e of i.participants ?? []) {
        let r = null == e.lastActivityAtMs ? null : i.asOfMs - e.lastActivityAtMs
        f(e.id, null != r && r >= 0 && r <= 2592e6 ? 20 : 10)
      }
      for (let e of i.liveUserIds ?? []) f(e, 35)
      for (let e of i.threadUserIds ?? []) f(e, 50)
      let g = o(h, e),
        y = new Map()
      for (let i of [...r, p])
        for (let r of (d ? i : c(i)) ?? []) {
          if (u && n(r, m)) continue
          let a = r.id.split("__")[0],
            s = (0, t.f)(r, e) || Number(i === p),
            l = y.get(a)
          ;(null == l ||
            s > l.match ||
            (s === l.match &&
              (!l.item.name || l.item.name.split("__")[0] === a) &&
              r.name &&
              r.name.split("__")[0] !== a)) &&
            y.set(a, { item: r, match: s })
        }
      let b = "" === e.trim()
      return [...y.entries()]
        .filter(([e, { item: r, match: i }]) => (b ? e !== a?.split("__")[0] : i > 0 || (d && null == r.name)))
        .sort(
          ([e, r], [i, a]) =>
            Number(4 === a.match) - Number(4 === r.match) ||
            g(a) - g(r) ||
            a.match - r.match ||
            (_.get(i) ?? 0) - (_.get(e) ?? 0) ||
            e.localeCompare(i),
        )
        .slice(0, s)
        .map(([, { item: e }]) => e)
    }
    function o(e, r) {
      let i = "" === r.trim()
      return ({ item: r, match: a }) => (i || a >= 2 ? (e?.get(r.account_user_id ?? r.id) ?? 0) : 0)
    }
    function c(e) {
      return e?.flatMap((e) => {
        let r = d(e)
        return null == r ? [] : [r]
      })
    }
    function d(e) {
      let r = e.account_user_id ?? e.id,
        i = (0, a.Z)(r, e.name, e.email)
      if (null == i || null != e.deactivated_time) return
      let t = (0, a.Z)(r, e.email) ?? null
      return i === e.name && t === e.email ? e : { ...e, name: i, email: t }
    }
    i.d(
      r,
      {},
      {
        Jk: c,
        KZ: s,
        oy: l,
        pW: function (e, r, i, a) {
          return null == i ? s(e, r, a) : l(e, r, i, a)
        },
      },
    )
  },
  S4d4(e, r, i) {
    i.d(
      r,
      {},
      {
        Z: function (e, r, i) {
          let a = (e) => {
              let r = e.trim().replace(/^(?:user|group):/u, "")
              return r.includes("@") ? r : r.split("__")[0]
            },
            t = a(e)
          if (t && r?.trim() !== "<Redacted>")
            return [r?.trim(), i?.trim()].find((e) => {
              if (!e || "<Redacted>" === e) return !1
              let r = a(e)
              return (
                r !== t &&
                !/^(?:[0-9a-f]{32}|[0-9a-f]{40}|[0-9a-f]{64})$/iu.test(r) &&
                !/^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/iu.test(r) &&
                !/^(?:user|group)-(?:[a-z0-9]{24}|[0-9a-f]{32})$/iu.test(r)
              )
            })
        },
      },
    )
  },
  CMOE(e, r, i) {
    function a(e) {
      return e.trim().toLowerCase().replace(/\s+/gu, " ")
    }
    i.d(
      r,
      {},
      {
        f: function (e, r) {
          let i = a(r)
          if ("" === i) return 0
          let t = a(e.name ?? ""),
            n = a(e.email ?? "")
          if (i === t || i === n) return 4
          let s = i.split(" "),
            l = t.split(" ")
          return s.every((e) => l.includes(e))
            ? 3
            : s.every((e) => l.some((r) => r.startsWith(e)) || n.startsWith(e))
              ? 2
              : +!!s.every((e) => t.includes(e) || n.includes(e))
        },
      },
    )
  },
  PItM(e, r, i) {
    var a = i("ABep"),
      t = i("QosV"),
      n = i("oyxz"),
      s = i("YYxE")
    function l(e) {
      let r = (0, t.c)(10),
        { mode: i, restrictedLabel: s, workspaceName: l, workspaceLabel: o } = e
      switch (i) {
        case "workspace": {
          let e, i
          return (
            r[0] !== o || r[1] !== l
              ? ((e =
                  o ??
                  l ??
                  (0, a.jsx)(n.A, {
                    id: "librarySharing.workspace",
                    defaultMessage: "Workspace",
                    description: "Fallback current workspace name in the Library link-access menu",
                  })),
                (r[0] = o),
                (r[1] = l),
                (r[2] = e))
              : (e = r[2]),
            r[3] !== e ? ((i = (0, a.jsx)(a.Fragment, { children: e })), (r[3] = e), (r[4] = i)) : (i = r[4]),
            i
          )
        }
        case "link": {
          let e
          return (
            r[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(n.A, {
                  id: "codex.space.shareDialog.accessLink",
                  defaultMessage: "Anyone with the link",
                  description:
                    "General-access setting that allows anyone with the Space link to access it, shown only when the server explicitly permits link sharing",
                })),
                (r[5] = e))
              : (e = r[5]),
            e
          )
        }
        case "restricted": {
          let e, i
          return (
            r[6] !== s
              ? ((e =
                  s ??
                  (0, a.jsx)(n.A, {
                    id: "librarySharing.link.collaborators",
                    defaultMessage: "Only those invited",
                    description:
                      "Library share dialog link-access option restricting a file or folder to people who already have access",
                  })),
                (r[6] = s),
                (r[7] = e))
              : (e = r[7]),
            r[8] !== e ? ((i = (0, a.jsx)(a.Fragment, { children: e })), (r[8] = e), (r[9] = i)) : (i = r[9]),
            i
          )
        }
      }
    }
    i.d(
      r,
      {},
      {
        d: function (e) {
          let r,
            i,
            o,
            c = (0, t.c)(17),
            {
              disabled: d,
              footer: u,
              options: p,
              restrictedLabel: h,
              value: m,
              workspaceName: _,
              workspaceLabel: f,
              onChange: g,
            } = e,
            y = void 0 !== d && d
          if (c[0] !== p || c[1] !== _) {
            let e
            ;(c[3] !== _
              ? ((e = (e) => {
                  let r
                  return (
                    "restricted" === e.mode
                      ? (r = (0, a.jsx)(n.A, {
                          id: "librarySharing.link.collaboratorsDescription",
                          defaultMessage: "People who already have access can use this link",
                          description:
                            "Explanation of the Collaborators only option in the sharing link-access menu; existing access includes direct invitations and access inherited from a parent, group, or workspace",
                        }))
                      : "workspace" === e.mode &&
                        (r =
                          null == _
                            ? (0, a.jsx)(n.A, {
                                id: "librarySharing.link.unnamedWorkspaceDescription",
                                defaultMessage: "Anyone in this workspace with the link",
                                description:
                                  "Explanation of workspace-wide link access when the current workspace's display name is unavailable",
                              })
                            : (0, a.jsx)(n.A, {
                                id: "librarySharing.link.workspaceDescription",
                                defaultMessage: "Anyone at {workspaceName} with the link",
                                description:
                                  "Explanation of workspace-wide link access in the Library share menu; workspaceName is the current workspace's display name",
                                values: { workspaceName: _ },
                              })),
                    { ...e, description: r }
                  )
                }),
                (c[3] = _),
                (c[4] = e))
              : (e = c[4]),
              (r = p.map(e)),
              (c[0] = p),
              (c[1] = _),
              (c[2] = r))
          } else r = c[2]
          return (
            c[5] !== p || c[6] !== h || c[7] !== f || c[8] !== _
              ? ((i = (e) => {
                  let r = p.find((r) => r.value === e)
                  return null == r
                    ? null
                    : (0, a.jsx)(l, { mode: r.mode, restrictedLabel: h, workspaceName: _, workspaceLabel: f })
                }),
                (c[5] = p),
                (c[6] = h),
                (c[7] = f),
                (c[8] = _),
                (c[9] = i))
              : (i = c[9]),
            c[10] !== y || c[11] !== u || c[12] !== g || c[13] !== r || c[14] !== i || c[15] !== m
              ? ((o = (0, a.jsx)(s.d, {
                  disabled: y,
                  footer: u,
                  iconVariant: "thumbnail",
                  options: r,
                  value: m,
                  renderLabel: i,
                  onChange: g,
                })),
                (c[10] = y),
                (c[11] = u),
                (c[12] = g),
                (c[13] = r),
                (c[14] = i),
                (c[15] = m),
                (c[16] = o))
              : (o = c[16]),
            o
          )
        },
      },
    )
  },
  JGmX(e, r, i) {
    var a = i("Vzcd")
    i.d(r, { r: () => a.r })
  },
  glqn(e, r, i) {
    var a = i("aAsK")
    i.d(r, { e: () => a.e })
  },
  ajGH(e, r, i) {
    i.d(r, { B: () => q })
    var a = i("ABep"),
      t = i("QosV"),
      n = i("kOeh"),
      s = i("i5ac"),
      l = i.n(s),
      o = i("zTeN"),
      c = i("zd8w"),
      d = i("Wf1j"),
      u = i("oyxz"),
      p = i("iFq6"),
      h = i("eFn4"),
      m = i("EOo5"),
      _ = i("OAko"),
      f = i("LhhH"),
      g = i("GO7r"),
      y = i("AOG7"),
      b = i("SPnB"),
      v = i("pyoT"),
      w = i("OWtl"),
      I = i("bQW7"),
      A = i("Rxyo"),
      S = i("rvFo")
    let x = (0, o.vU)(w.u, (e, { get: r, scope: i }) => {
      let a = r(b.PO),
        t = a.authenticatedUserId ?? null,
        n = r(b.chatGptAuthenticatedUserId$),
        s = r(b.kf),
        l =
          null != e &&
          a.authenticatedAccountId === e &&
          a.accountId === e &&
          null != t &&
          "loaded" === s.status &&
          "workspace" === s.structure &&
          r(A.y)
      return {
        enabled: l,
        queryKey: ["workspace-people-suggestions", e, t],
        staleTime: S.D.ONE_MINUTE,
        gcTime: S.D.ONE_MINUTE,
        retry: !1,
        networkMode: "always",
        queryFn: async ({ signal: r }) => {
          if (!l || null == e) throw Error("workspace suggestions are unavailable")
          let a = (0, v.watchSpaceAccount)(i, e, n, void 0, t),
            s = AbortSignal.any([r, a.signal, AbortSignal.timeout(15e3)])
          try {
            s.throwIfAborted()
            let r = await (0, y.AB)(e, "", s, { includeTotal: !1, limit: 20 })
            return (s.throwIfAborted(), (0, I.Jk)(r) ?? [])
          } finally {
            a.stop()
          }
        },
      }
    })
    var R = i("qCmE"),
      E = i("ENs9"),
      L = i("pLRu"),
      C = i("MFZ6"),
      T = i("CFGX"),
      k = i("LiNd")
    function q(e) {
      let r,
        i,
        n,
        s,
        u,
        f,
        b,
        v,
        w,
        A,
        S,
        q,
        H,
        B = (0, t.c)(37),
        {
          accountId: U,
          ariaDescribedBy: Y,
          disabled: z,
          emptyMessage: W,
          getRemoveLabel: Q,
          getGroupRecipient: $,
          getPersonRecipient: V,
          getTeamRecipient: X,
          isLoading: Z,
          loadingLabel: J,
          options: ee,
          dotOptions: er,
          placeholder: ei,
          query: ea,
          peopleQuery: et,
          recentOptions: en,
          suggestedOptions: es,
          suggestionsAsOf: el,
          improvedSuggestions: eo,
          autoFocus: ec,
          searchFailed: ed,
          contextualPicks: eu,
          currentSpaceId: ep,
          moveDisabled: eh,
          peopleFirst: em,
          selectionDisplay: e_,
          selectedOptions: ef,
          trailingContent: eg,
          onChange: ey,
          onQueryChange: eb,
          onMoveToSpace: ev,
        } = e,
        ew = void 0 === et ? ea : et,
        eI = void 0 !== eo && eo,
        eA = void 0 === ec ? eI : ec,
        eS = void 0 === e_ ? "input" : e_,
        ex = (0, d.A)(),
        [eR, eE] = (0, c.useState)(),
        { data: eL } = (0, _.oV)(),
        { accountId: eC } = (0, m.As)(),
        eT = eL?.accounts?.find((e) => e.id === U),
        ek = (0, o._U)(p.w, U ?? ""),
        eq = (ek && null != X) || null != $ || (eI && null != V)
      B[0] !== eq ? ((r = { enabled: eq }), (B[0] = eq), (B[1] = r)) : (r = B[1])
      let { data: ej, isError: eM } = (0, o._U)(h.Jk, U ?? "", r),
        eN = null == eT ? void 0 : (0, T.V)(eT, ej, eM),
        eF = eC === U && null != $ && eN?.allowGroups === !0
      B[2] === Symbol.for("react.memo_cache_sentinel") ? ((i = { includeMemberCounts: !0 }), (B[2] = i)) : (i = B[2])
      let { data: eO, isError: eD, isPending: eP, isFetching: eG } = (0, y.Nc)(eF && !z ? ea : "", i),
        eK = ek && null != X && eN?.canSearchMembers === !0,
        { data: eH, isError: eB, isLoading: eU } = (0, o._U)(p.l, U ?? "", { enabled: eK && !z }) ?? {}
      B[3] !== eK || B[4] !== ex || B[5] !== ei?.people || B[6] !== ei?.peopleAndTeams
        ? ((n = eK
            ? (ei?.peopleAndTeams ??
              ex.formatMessage({
                id: "shareRecipientPicker.peopleAndTeamsLabel",
                defaultMessage: "Add people or teams",
                description:
                  "Placeholder and accessible label for a sharing picker that can invite workspace people and teams",
              }))
            : (ei?.people ??
              ex.formatMessage({
                id: "shareRecipientPicker.peopleLabel",
                defaultMessage: "Add people",
                description:
                  "Placeholder and accessible label for a sharing picker that can invite people only because team discovery is unavailable",
              }))),
          (B[3] = eK),
          (B[4] = ex),
          (B[5] = ei?.people),
          (B[6] = ei?.peopleAndTeams),
          (B[7] = n))
        : (n = B[7])
      let eY = n,
        ez = ea.trim().toLocaleLowerCase()
      B[8] !== ew ? ((s = ew.trim()), (B[8] = ew), (B[9] = s)) : (s = B[9])
      let eW = s,
        eQ = null != eu,
        e$ = em ?? eQ,
        eV = eK && !eB ? (eH ?? []).map((e) => ({ team: e, recipient: X(e) })) : [],
        eX = new Set(ef.map(G)),
        eZ = new Map()
      for (let { team: e, recipient: r } of eV)
        eI &&
          e.workspace_id === U &&
          "available" === e.team_space_status &&
          null != e.team_space_id &&
          (e.team_space_id === ep ? eX.add(r.id) : null != ev && eZ.set(r.id, e))
      let eJ = (e) => {
          let r = eZ.get(e.id),
            i = r?.team_space_id
          return {
            ...K(e),
            secondaryAction:
              null != ev && null != i && null != r
                ? {
                    label: ex.formatMessage(
                      {
                        id: "shareRecipientPicker.moveToSpace",
                        defaultMessage: "Move to {name}",
                        description:
                          "Accessible label and tooltip for moving the current Page into a team's Space; name is the team's name. Opens the existing move confirmation.",
                      },
                      { name: r.name },
                    ),
                    icon: (0, a.jsx)(g.WHt, {}),
                    disabled: z || eh,
                    onClick: () => ev(i),
                  }
                : void 0,
          }
        },
        e0 =
          "" !== ez || z
            ? []
            : l()(
                (en ?? []).filter((e) => {
                  let { id: r, accessStatus: i } = e
                  return (null == i || eZ.has(r)) && !eX.has(r)
                }),
                "id",
              ).slice(0, 5),
        e1 = new Set(e0.map(P))
      B[10] !== ex
        ? ((u = (e) => {
            let { team: r, recipient: i } = e
            return {
              ...i,
              isActorTeamMember: !0,
              secondaryLabel: (0, L.D)(ex, r.member_count),
              avatar: (0, a.jsx)(C.y, { avatar: r.avatar, size: "sm" }),
            }
          }),
          (B[10] = ex),
          (B[11] = u))
        : (u = B[11])
      let e2 = eV
          .filter((e) => {
            let { team: r } = e
            return eI || r.name.toLocaleLowerCase().includes(ez)
          })
          .map(u)
          .filter((e) => {
            let { id: r, accessStatus: i } = e
            return ("" !== ez || null == i || eZ.has(r)) && !eX.has(r) && (eI || !e1.has(r))
          }),
        e3 = new Set(e2.map(D)),
        e4 =
          "" === ez || !eF || z || eD
            ? []
            : l()(
                (eO ?? [])
                  .filter((e) => null == e.system_use_case && (eN?.allowScimGroups || !e.is_scim_managed))
                  .map((e) => ({
                    ...$(e),
                    secondaryLabel: (0, L.D)(ex, e.num_members),
                    avatar: (0, a.jsx)(R.K, { groupId: e.id, size: "sm" }),
                  }))
                  .filter((e) => {
                    let { id: r } = e
                    return (eI || !e3.has(r)) && !eX.has(r)
                  }),
                "id",
              ),
        e5 = (e) =>
          e?.filter((e) => {
            let { id: r } = e
            return !e3.has(r) && !eX.has(r) && !e1.has(r)
          }),
        e6 = "" === eW ? [] : (e5(ee) ?? [])
      null != eu &&
        (e6 = (0, I.KZ)(
          ew,
          [...eu, ee].map((e) => e5(e)?.map(O)),
        ).map(F))
      let e7 =
          0 === e0.length && 0 === e2.length && 0 === e4.length
            ? void 0
            : [
                {
                  id: "recent",
                  label: ex.formatMessage({
                    id: "shareRecipientPicker.recent",
                    defaultMessage: "Recent",
                    description:
                      "Heading for people the user recently shared a Page or Space with, shown when the sharing search input is empty",
                  }),
                  options: e0.map(eJ),
                },
                {
                  id: "teams",
                  label:
                    "" === ez
                      ? ex.formatMessage({
                          id: "shareRecipientPicker.yourTeams",
                          defaultMessage: "Your teams",
                          description:
                            "Heading for the user's Teams suggested in the empty Library, Page, or Space sharing recipient picker",
                        })
                      : ex.formatMessage({
                          id: "shareRecipientPicker.teams",
                          defaultMessage: "Teams",
                          description: "Heading for matching Teams in Library, Page, or Space sharing search results",
                        }),
                  options: e2.map(eJ),
                },
                {
                  id: "groups",
                  label: ex.formatMessage({
                    id: "shareRecipientPicker.groups",
                    defaultMessage: "Groups",
                    description: "Heading for matching administrative and SCIM groups in sharing search results",
                  }),
                  options: e4.map(eJ),
                },
                {
                  id: "people",
                  label: ex.formatMessage({
                    id: "shareRecipientPicker.people",
                    defaultMessage: "People",
                    description:
                      "Heading for people matching the workspace directory alongside Teams in the sharing recipient picker",
                  }),
                  options: e6.map(eJ),
                },
              ],
        e8 =
          eI && !z
            ? (0, k.s)(ew, [...(eu ?? []), e2, es, en, e4, "" === eW ? void 0 : ee], {
                selectedIds: eX,
                moveDestinationIds: new Set(eZ.keys()),
                suggestionsAsOf: el,
              })
            : [],
        e9 =
          eI &&
          !z &&
          "" === ez &&
          "" === eW &&
          null != V &&
          eC === U &&
          eN?.canSearchMembers === !0 &&
          !Z &&
          !eU &&
          e8.length < 10
      B[12] !== e9 ? ((f = { enabled: e9 }), (B[12] = e9), (B[13] = f)) : (f = B[13])
      let {
          data: re,
          isEnabled: rr,
          isLoading: ri,
          isError: ra,
          isStale: rt,
          fetchStatus: rn,
        } = (0, o._U)(x, U ?? null, f),
        rs = e9 && rr
      if (eI) {
        let e = rs
          ? (0, k.s)(
              "",
              [
                re?.flatMap((e) => {
                  let r = V?.(e)
                  return null == r ? [] : [r]
                }),
              ],
              { selectedIds: new Set([...eX, ...e8.map(N)]), limit: 3 },
            )
          : []
        e7 = [
          {
            id: "suggested",
            label: ex.formatMessage({
              id: "shareRecipientPicker.suggested",
              defaultMessage: "Suggested",
              description: "Heading for people and groups ranked together as likely sharing recipients",
            }),
            options: [...e8, ...e].slice(0, 10).map(eJ),
          },
        ]
      }
      e$ && e7?.sort(M)
      let rl = ed && ("" !== eW || eQ),
        ro = eK && eB,
        rc = "" !== ez && eF && eD,
        rd = rl || ro || rc,
        ru = (("" !== eW || eQ) && Z) || ("" !== ez && eF && (eP || eG)) || (eK && eU),
        rp = W
      return (
        "" === ez ? (rp = rs && null != re && !ra ? W : null) : ru ? (rp = J) : (Z || rd) && (rp = null),
        B[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (e) => {
              eE(e?.closest('[role="dialog"]') ?? null)
            }),
            (B[14] = b))
          : (b = B[14]),
        B[15] !== ef || B[16] !== eS
          ? ((v = "external" === eS ? [] : ef.map(K)), (B[15] = ef), (B[16] = eS), (B[17] = v))
          : (v = B[17]),
        B[18] !== Q
          ? ((w = (e) => {
              let { recipient: r } = e
              return Q(r)
            }),
            (B[18] = Q),
            (B[19] = w))
          : (w = B[19]),
        B[20] !== ey || B[21] !== ef || B[22] !== rs || B[23] !== re || B[24] !== ra || B[25] !== rn || B[26] !== rt
          ? ((A = (e) => {
              let { recipient: r } = e
              ey(l()([...ef, r], "id"), !rs || ra || rt || "idle" !== rn ? void 0 : re?.map(j))
            }),
            (B[20] = ey),
            (B[21] = ef),
            (B[22] = rs),
            (B[23] = re),
            (B[24] = ra),
            (B[25] = rn),
            (B[26] = rt),
            (B[27] = A))
          : (A = B[27]),
        B[28] !== ey || B[29] !== ef
          ? ((S = (e) => {
              let { id: r } = e
              ey(ef.filter((e) => e.id !== r))
            }),
            (B[28] = ey),
            (B[29] = ef),
            (B[30] = S))
          : (S = B[30]),
        B[31] !== J || B[32] !== ru
          ? ((q = ru
              ? (0, a.jsx)("span", { className: "sr-only", role: "status", "aria-label": J, children: J })
              : null),
            (B[31] = J),
            (B[32] = ru),
            (B[33] = q))
          : (q = B[33]),
        B[34] !== q || B[35] !== eg
          ? ((H = (0, a.jsxs)(a.Fragment, { children: [q, eg] })), (B[34] = q), (B[35] = eg), (B[36] = H))
          : (H = B[36]),
        (0, a.jsx)("div", {
          ref: b,
          className: "flex min-w-0 flex-1 flex-col gap-2",
          children: (0, a.jsx)(E.X, {
            preserveHighlightOnItemsChange: !e$ || "user",
            autoFocus: eA,
            waitForDialogEntrance: eI,
            preserveEmptyQueryOrder: eI,
            ariaLabel: eY,
            ariaDescribedBy: Y,
            searchStatus: {
              peopleLoading: (eQ && Z && !rl) || (rs && ri),
              peopleError: rs && ra,
              groupsError: rc,
              teamsError: ro,
            },
            disabled: z,
            selectedOptions: v,
            getRemoveLabel: w,
            options: e6.map(eJ),
            dotOptions: er
              ?.filter((e) => {
                let { id: r } = e
                return !eX.has(r)
              })
              .map(K),
            optionSections: e7,
            portalContainer: eR,
            query: ea,
            onQueryChange: eb,
            showLoadingDropdown: !1,
            showSuggestionsOnFocus: !0,
            showSuggestionsOnQueryChange: eI,
            onSelectOption: A,
            onRemoveOption: S,
            placeholder: eY,
            trailingContent: H,
            emptyMessage: rp,
          }),
        })
      )
    }
    function j(e) {
      return e.account_user_id
    }
    function M(e, r) {
      return "people" === e.id ? -1 : +("people" === r.id)
    }
    function N(e) {
      let { id: r } = e
      return r
    }
    function F(e) {
      let { recipient: r } = e
      return r
    }
    function O(e) {
      return { id: e.id, name: e.label, email: e.secondaryLabel, recipient: e }
    }
    function D(e) {
      let { id: r } = e
      return r
    }
    function P(e) {
      let { id: r } = e
      return r
    }
    function G(e) {
      let { id: r } = e
      return r
    }
    function K(e) {
      let r
      return (
        "pending" === e.accessStatus
          ? (r = (0, a.jsx)(u.A, {
              id: "shareRecipientPicker.invitationPending",
              defaultMessage: "Invitation pending",
              description:
                "Disabled sharing search result for a person or group with an invitation awaiting acceptance",
            }))
          : "existing" === e.accessStatus &&
            (r = (0, a.jsx)(u.A, {
              id: "shareRecipientPicker.alreadyHasAccess",
              defaultMessage: "Already has access",
              description: "Disabled sharing search result for an owner or existing person or group collaborator",
            })),
        {
          id: e.id,
          label: e.label,
          secondaryLabel: e.secondaryLabel,
          avatar: (0, a.jsx)("span", {
            "aria-hidden": "true",
            children:
              e.avatar ??
              (null == e.Icon
                ? (0, a.jsx)(f.e, { alt: "", colorKey: e.colorKey, name: e.label, size: "sm", src: null })
                : (0, a.jsx)(n.e, { name: e.label, colorFrom: e.id, Icon: e.Icon })),
          }),
          disabledReason: r,
          recipient: e,
        }
      )
    }
  },
  CFGX(e, r, i) {
    var a = i("vw1R")
    i.d(
      r,
      {},
      {
        V: function (e, r, i) {
          let t = "workspace" === e.structure,
            n = (0, a.o)(e.plan_type),
            s =
              t &&
              (!n ||
                "account-owner" === e.account_user_role ||
                "account-admin" === e.account_user_role ||
                (!i && r?.permissions?.includes("chatgpt.workspace.member.role.view") === !0))
          return {
            isWorkspace: t,
            canSearchMembers: s,
            allowGroups: n && s,
            allowScimGroups: !i && r?.beta_settings?.allow_scim_group_sharing_for_projects_and_gpts !== !1,
          }
        },
      },
    )
  },
  LiNd(e, r, i) {
    var a = i("S4d4"),
      t = i("CMOE")
    function n(e, r) {
      let i = e.suggestion,
        a = i?.same_work_independent_occasions30d ?? 0,
        t = 0
      a >= 3 ? (t = 60) : 2 === a ? (t = 45) : 1 === a && (t = 30)
      let n = i?.last_shared_at != null && null != r ? (Date.parse(r) - Date.parse(i.last_shared_at)) / 864e5 : 0 / 0,
        s = 0
      return (
        n >= 0 && n <= 7 ? (s = 20) : n > 7 && n <= 30 ? (s = 10) : n > 30 && n <= 90 && (s = 3),
        Math.max(t, Math.min(25, s + 5 * ((i?.share_days30d ?? 0) >= 3))) +
          (e.id.startsWith("group:") && (!0 === e.isActorTeamMember || i?.is_actor_team_member === !0) ? 5 : 0)
      )
    }
    i.d(
      r,
      {},
      {
        s: function (e, r, { selectedIds: i, moveDestinationIds: s, suggestionsAsOf: l, limit: o = 10 }) {
          let c = e.trim(),
            d = new Map()
          for (let e of r)
            for (let r of e ?? []) {
              if (!r.id.startsWith("user:") && !r.id.startsWith("group:")) continue
              let e = (0, a.Z)(r.id, r.label, r.id.startsWith("user:") ? r.secondaryLabel : void 0),
                i = null != e,
                n = r.id.startsWith("user:") ? (0, a.Z)(r.id, r.secondaryLabel) : r.secondaryLabel,
                s = i && (e !== r.label || n !== r.secondaryLabel) ? { ...r, label: e, secondaryLabel: n } : r,
                l = i ? (0, t.f)({ name: e, email: r.id.startsWith("group:") ? void 0 : n }, c) : 0,
                o = d.get(r.id)
              null == o
                ? d.set(r.id, { item: s, match: l, identified: i })
                : d.set(r.id, {
                    item: {
                      ...(l > o.match || (!o.identified && i) ? s : o.item),
                      accessStatus: o.item.accessStatus ?? r.accessStatus,
                      isActorTeamMember: o.item.isActorTeamMember || r.isActorTeamMember,
                      suggestion:
                        null == o.item.suggestion
                          ? r.suggestion
                          : {
                              ...o.item.suggestion,
                              sources: [...new Set([...o.item.suggestion.sources, ...(r.suggestion?.sources ?? [])])],
                            },
                    },
                    match: Math.max(o.match, l),
                    identified: o.identified || i,
                  })
            }
          return [...d.values()]
            .filter(
              ({ item: e, match: r, identified: a }) =>
                a && !i.has(e.id) && ("" === c ? null == e.accessStatus || s?.has(e.id) : r > 0),
            )
            .sort((e, r) => r.match - e.match || n(r.item, l) - n(e.item, l) || e.item.id.localeCompare(r.item.id))
            .slice(0, o)
            .map(({ item: e }) => e)
        },
      },
    )
  },
  LKbA(e, r, i) {
    var a = i("ABep"),
      t = i("QosV"),
      n = i("oyxz")
    i.d(
      r,
      {},
      {
        u: function (e) {
          let r = (0, t.c)(5),
            { permission: i } = e
          switch (i) {
            case "viewer": {
              let e
              return (
                r[0] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(n.A, {
                      id: "shareDialog.role.viewer",
                      defaultMessage: "Viewer",
                      description: "Sharing permission for someone who can view content but cannot change it",
                    })),
                    (r[0] = e))
                  : (e = r[0]),
                e
              )
            }
            case "commenter": {
              let e
              return (
                r[1] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(n.A, {
                      id: "shareDialog.role.commenter",
                      defaultMessage: "Commenter",
                      description: "Sharing permission for someone who can view and comment without editing content",
                    })),
                    (r[1] = e))
                  : (e = r[1]),
                e
              )
            }
            case "editor": {
              let e
              return (
                r[2] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(n.A, {
                      id: "shareDialog.role.editor",
                      defaultMessage: "Editor",
                      description: "Sharing permission for someone who can edit content",
                    })),
                    (r[2] = e))
                  : (e = r[2]),
                e
              )
            }
            case "owner": {
              let e
              return (
                r[3] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(n.A, {
                      id: "shareDialog.role.owner",
                      defaultMessage: "Owner",
                      description: "Sharing permission identifying someone who owns content and controls its access",
                    })),
                    (r[3] = e))
                  : (e = r[3]),
                e
              )
            }
            case void 0: {
              let e
              return (
                r[4] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(n.A, {
                      id: "shareDialog.role.unknown",
                      defaultMessage: "Unknown access",
                      description:
                        "Sharing permission whose role is not recognized; do not imply that the person has Viewer access",
                    })),
                    (r[4] = e))
                  : (e = r[4]),
                e
              )
            }
          }
        },
      },
    )
  },
  MFZ6(e, r, i) {
    var a = i("ABep"),
      t = i("QosV"),
      n = i("on57"),
      s = i("oyQi")
    i.d(
      r,
      {},
      {
        y: function (e) {
          let r,
            i,
            l,
            o = (0, t.c)(7),
            { avatar: c, size: d } = e,
            u = void 0 === d ? "md" : d
          return (
            o[0] !== u
              ? ((r = (0, n.A)(
                  "flex shrink-0 items-center justify-center rounded-full bg-secondary-soft",
                  { xs: "icon-sm", sm: "size-6", md: "size-7" }[u],
                )),
                (o[0] = u),
                (o[1] = r))
              : (r = o[1]),
            o[2] !== c ? ((i = (0, a.jsx)(s.n, { avatar: c, size: "small" })), (o[2] = c), (o[3] = i)) : (i = o[3]),
            o[4] !== r || o[5] !== i
              ? ((l = (0, a.jsx)("span", { className: r, children: i })), (o[4] = r), (o[5] = i), (o[6] = l))
              : (l = o[6]),
            l
          )
        },
      },
    )
  },
  oyQi(e, r, i) {
    var a = i("ABep"),
      t = i("QosV"),
      n = i("slpy"),
      s = i("on57"),
      l = i("zd8w"),
      o = i("GO7r")
    i.d(
      r,
      {},
      {
        n: function (e) {
          let r,
            i,
            c,
            d,
            u = (0, t.c)(16),
            { avatar: p, name: h, size: m } = e,
            [_, f] = (0, l.useState)(null),
            g = p?.url,
            y = "large" === m ? o.ixU : o.oJq,
            b = "icon-sm"
          ;("large" === m ? (b = "size-12") : "sidebar" === m && (b = "icon-leading"),
            u[0] !== b
              ? ((r = (0, s.A)("flex shrink-0 items-center justify-center", b)), (u[0] = b), (u[1] = r))
              : (r = u[1]))
          let v = null == h ? void 0 : "img"
          ;(u[2] !== y || u[3] !== _ || u[4] !== m || u[5] !== b || u[6] !== g
            ? ((i =
                null == g || g === _
                  ? (0, a.jsx)(y, { className: (0, s.A)("text-secondary", "sidebar" === m && "icon-leading") })
                  : (0, a.jsx)("img", {
                      className: (0, s.A)("object-contain", b),
                      alt: "",
                      draggable: !1,
                      onError: () => f(g),
                      src: g,
                    })),
              (u[2] = y),
              (u[3] = _),
              (u[4] = m),
              (u[5] = b),
              (u[6] = g),
              (u[7] = i))
            : (i = u[7]),
            u[8] !== h || u[9] !== r || u[10] !== v || u[11] !== i
              ? ((c = (0, a.jsx)("span", { className: r, role: v, "aria-label": h, children: i })),
                (u[8] = h),
                (u[9] = r),
                (u[10] = v),
                (u[11] = i),
                (u[12] = c))
              : (c = u[12]))
          let w = c
          return (
            u[13] !== w || u[14] !== h
              ? ((d = null == h ? w : (0, a.jsx)(n.m, { content: h, children: w })),
                (u[13] = w),
                (u[14] = h),
                (u[15] = d))
              : (d = u[15]),
            d
          )
        },
      },
    )
  },
}
//# sourceMappingURL=909077.6821aceaa6.js.map
