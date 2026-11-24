export const __rspack_esm_ids = [698453]
export const __webpack_modules__ = {
  GpIR(e, r) {
    r.A = { inviteInput: "inviteInput-f4u0EM", permission: "permission-grp2pW" }
  },
  kOeh(e, r, t) {
    t.d(r, { e: () => o })
    var i = t("ABep"),
      a = t("zd8w"),
      n = t("on57"),
      l = t("fZ4G")
    let s = ["blue", "red", "green", "light-blue", "yellow", "gray", "orange"],
      o = (e) => {
        let r = d(e.imageUrl)
        return (0, a.createElement)(c, { ...e, imageUrl: r, key: r })
      },
      c = (e) => {
        let {
            className: r,
            size: t,
            overflowCount: o,
            name: c,
            color: d = "secondary",
            colorFrom: m,
            variant: h = "soft",
            imageUrl: f,
            Icon: _,
            tooltipComponent: g,
            ...y
          } = e,
          [v, b] = (0, a.useState)(),
          x = !!(y.onPointerDown || y.onClick),
          I = null == m ? void 0 : s[m.split("").reduce((e, r) => e + r.charCodeAt(0), 0) % s.length],
          A = (0, i.jsx)(x ? "button" : "span", {
            className: (0, n.A)("Avatar-ZIKxFq", r),
            style: (0, l.mW)({
              "avatar-size": t,
              "avatar-background-color": null == I ? void 0 : `var(--color-avatar-${I})`,
              "avatar-text-color": null == I ? void 0 : "var(--color-avatar-foreground)",
            }),
            role: x ? void 0 : "presentation",
            "aria-label": x ? c : void 0,
            "data-color": d,
            "data-variant": h,
            type: x ? "button" : void 0,
            ...y,
            children:
              f && "error" !== v
                ? (0, i.jsx)(u, { status: v, url: f, onError: () => b("error"), onLoad: () => b("loaded") })
                : _
                  ? (0, i.jsx)(_, { className: "AvatarIcon-PmtHig" })
                  : o
                    ? (0, i.jsx)(p, { count: o })
                    : (0, i.jsx)("span", { className: "AvatarInitial-tg7FSE", children: c?.charAt(0).toUpperCase() }),
          })
        return c && g ? (0, i.jsx)(g, { content: c, children: A }) : A
      },
      d = (e) => {
        if (e && !(e.includes("gravatar.com") && e.includes("cdn.auth0.com"))) return e
      },
      u = ({ url: e, status: r, onLoad: t, onError: a }) =>
        (0, i.jsx)("span", {
          className: "AvatarImageContainer-ewDD1N",
          children: (0, i.jsx)("img", {
            src: e,
            className: "AvatarImage-x8OSwL",
            "data-loaded": "loaded" === r ? "" : void 0,
            onLoad: t,
            onError: a,
            alt: "",
            role: "presentation",
          }),
        }),
      p = ({ count: e }) => {
        let r = new Intl.NumberFormat("en", { notation: "compact", compactDisplay: "short", maximumFractionDigits: 0 })
          .format(e)
          .toLocaleLowerCase()
        return (0, i.jsxs)("span", {
          className: "AvatarOverflowCount-xv6Nxk",
          "data-letter-count": r.length,
          children: [(0, i.jsx)("span", { className: "AvatarOverflowCountSymbol-IYYkRt", children: "+" }), r],
        })
      }
  },
  iFq6(e, r, t) {
    var i = t("qmMi"),
      a = t("OWtl"),
      n = t("nvO1")
    let l = (0, i.i1)(a.u, (e, { get: r }) => r(n.rN, e)),
      s = (0, i.i1)(a.u, (e, { get: r }) => {
        if (r(l, e)) {
          let { data: t, isError: i, isLoading: a } = r(n.IB, e)
          return { data: t?.filter((r) => r.workspace_id === e), isError: i, isLoading: a }
        }
        return null
      })
    t.d(r, {}, { l: s, w: l })
  },
  Yjer(e, r, t) {
    var i = t("dSuP"),
      a = t("T8X0"),
      n = t("yGJW"),
      l = t("eShZ")
    function s(e) {
      return "email" === e.recipient_type
        ? "CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_EMAIL"
        : "group" === e.principal_type
          ? "CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_GROUP"
          : "CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_USER"
    }
    t.d(
      r,
      {},
      {
        GE: function (e) {
          if (!(e instanceof l.FetchError)) return
          let r = e.responseStatus,
            t = "network" === e.errorKind || null == r,
            i = null != e.errorCode && /^[a-z0-9_-]{1,64}$/i.test(e.errorCode) ? e.errorCode : void 0,
            a = i?.toLowerCase()
          return {
            type: t
              ? "CHATGPT_FILE_LIBRARY_ERROR_TYPE_NETWORK_ERROR"
              : 507 === r || a?.includes("storage_limit") || a?.includes("quota")
                ? "CHATGPT_FILE_LIBRARY_ERROR_TYPE_STORAGE_LIMIT"
                : 404 === r ||
                    a?.includes("missing_library_file") ||
                    a?.includes("library_file_not_found") ||
                    "file_not_found" === a ||
                    "file_expired" === a
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
            code: i,
            httpStatus: !t && Number.isInteger(r) && r >= 100 && r <= 599 ? r : void 0,
          }
        },
        aS: function (e, r, t) {
          let l
          ;(null != r.isOwner &&
            (l = r.isOwner
              ? "CHATGPT_FILE_LIBRARY_SHARING_ACTOR_OWNER"
              : "CHATGPT_FILE_LIBRARY_SHARING_ACTOR_RECIPIENT"),
            (0, n.yy)(e, i.j6, {
              ...t,
              actor: l,
              resourceKind:
                "file" === r.sharingScope.resourceKind
                  ? "CHATGPT_FILE_LIBRARY_SHARING_RESOURCE_KIND_FILE"
                  : "CHATGPT_FILE_LIBRARY_SHARING_RESOURCE_KIND_FOLDER",
              libraryFileId: "file" === r.sharingScope.resourceKind ? r.sharingScope.libraryFileId : void 0,
              folderId: "folder" === r.sharingScope.resourceKind ? r.sharingScope.libraryFileId : void 0,
              shareSessionId: r.shareSessionId,
              productExperience: e.get(a.G$),
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
          let t = s(r)
          return e.every((e) => s(e) === t) ? t : "CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_MIXED"
        },
      },
    )
  },
  TzhQ(e, r, t) {
    var i = t("DBCl"),
      a = t("Kwur"),
      n = t("nqea")
    t.d(
      r,
      {},
      {
        m: function ({ scope: e, assertCurrentScope: r }) {
          let t =
              "file" === e.resourceKind
                ? "/files/library/files/{library_file_id}"
                : "/files/library/directories/{directory_id}",
            l =
              "file" === e.resourceKind
                ? { parameters: { path: { library_file_id: e.libraryFileId } } }
                : { parameters: { path: { directory_id: e.libraryFileId } } },
            s =
              "file" === e.resourceKind
                ? { parameters: { path: { library_file_id: e.libraryFileId }, query: { include_profile_photos: !0 } } }
                : { parameters: { path: { directory_id: e.libraryFileId }, query: { include_profile_photos: !0 } } }
          function o() {
            if ((r(), 0 === e.accountId.length || 0 === e.accountUserId.length || 0 === e.libraryFileId.length))
              throw Error("Library sharing account scope is unavailable")
          }
          async function c(r, t) {
            ;(o(), t?.throwIfAborted())
            let i = { ...(0, a.Zj)(), "ChatGPT-Account-Id": e.accountId }
            ;(o(), t?.throwIfAborted())
            let n = await r({ additionalHeaders: i, signal: t })
            return (o(), t?.throwIfAborted(), n)
          }
          function d(r, t) {
            if (
              !(0, n.t4)(r.resource, e) ||
              "user" !== r.owner.principal_type ||
              0 === r.owner.principal_id.length ||
              (0, n.nD)(r.owner) !== (0, n.nD)(t)
            )
              throw Error("Invalid Library effective-access owner or resource scope")
          }
          function u(r, t) {
            let i = r[t]
            if (!(0, n.t4)(r.resource, e) || "user" !== i.principal_type || i.principal_id !== e.accountUserId)
              throw Error("Invalid Library access-request response scope")
            let a = new Set(r.recipients.map(n.nD)),
              l = new Set(r.decisions.map(({ recipient: e }) => (0, n.nD)(e)))
            for (let e of r.already_satisfied_recipients ?? []) {
              let r = (0, n.nD)(e)
              if (!a.has(r) || l.has(r)) throw Error("Invalid Library access-request terminal history")
              l.add(r)
            }
          }
          async function p(r, { cursor: i, signal: n } = {}) {
            let l = await c(
              (n) =>
                a.Request.safeGet("requester" === r ? `${t}/access-requests/mine` : `${t}/access-requests`, {
                  ...n,
                  ...("file" === e.resourceKind
                    ? {
                        parameters: {
                          path: { library_file_id: e.libraryFileId },
                          query: { cursor: i, include_profile_photos: !0 },
                        },
                      }
                    : {
                        parameters: {
                          path: { directory_id: e.libraryFileId },
                          query: { cursor: i, include_profile_photos: !0 },
                        },
                      }),
                }),
              n,
            )
            for (let e of l.requests) u(e, r)
            return l
          }
          return {
            resolveRecipient: (e, r) =>
              (0, i._qC)(
                c((r) => a.Request.safePost("/sharing/recipients/resolve", { ...r, requestBody: { email: e } }), r),
                r,
              ),
            async getSharingState(r) {
              let i = await c((e) => a.Request.safeGet(`${t}/sharing-state`, { ...e, ...s }), r)
              if (!(0, n.Sr)(i, e)) throw Error("Invalid Library sharing-state response scope")
              return i
            },
            async getShares(r, i) {
              let l,
                s,
                o = [],
                d = new Set()
              do {
                if (
                  ((s = await c(
                    (r) =>
                      a.Request.safeGet(`${t}/shares`, {
                        ...r,
                        ...("file" === e.resourceKind
                          ? {
                              parameters: {
                                path: { library_file_id: e.libraryFileId },
                                query: { cursor: l, include_profile_photos: !0 },
                              },
                            }
                          : {
                              parameters: {
                                path: { directory_id: e.libraryFileId },
                                query: { cursor: l, include_profile_photos: !0 },
                              },
                            }),
                      }),
                    i,
                  )),
                  !(0, n.t4)(s.resource, e) ||
                    "user" !== s.owner.principal_type ||
                    0 === s.owner.principal_id.length ||
                    (0, n.nD)(s.owner) !== (0, n.nD)(r) ||
                    s.shares.some((r) => !(0, n.t4)(r.resource, e)))
                )
                  throw Error("Invalid Library shares owner or resource scope")
                if (null != s.next_cursor) {
                  if (d.has(s.next_cursor)) throw Error("Repeated Library shares cursor")
                  d.add(s.next_cursor)
                }
                ;(o.push(...s.shares), (l = s.next_cursor))
              } while (null != l)
              return { ...s, shares: o }
            },
            async getEffectiveAccess(e, r) {
              let i = await c((e) => a.Request.safeGet(`${t}/effective-access`, { ...e, ...s }), r)
              return (d(i, e), i)
            },
            async getCollaborators({ accessRequestIds: r = [], signal: i } = {}) {
              let l = (0, n.b3)(r),
                o = await c(
                  (e) =>
                    a.Request.safeGet(`${t}/collaborators`, {
                      ...e,
                      additionalHeaders:
                        0 === l.length
                          ? e.additionalHeaders
                          : { ...e.additionalHeaders, "x-oai-library-access-request-ids": l.join(",") },
                      ...s,
                    }),
                  i,
                )
              if (!(0, n.t4)(o.resource, e) || "user" !== o.owner.principal_type || 0 === o.owner.principal_id.length)
                throw Error("Invalid Library collaborators response scope")
              return o
            },
            async createShare({ expectedInvitationId: r, recipient: i, roleId: l }) {
              let s = (0, n.rP)(l, e.resourceKind)
              if (null == s) throw Error("Invalid Library sharing role")
              let o = await c((l) =>
                a.Request.safePost(
                  `${t}/shares`,
                  "file" === e.resourceKind
                    ? {
                        ...l,
                        parameters: { path: { library_file_id: e.libraryFileId } },
                        requestBody: { expected_invitation_id: r, recipient: i, role_id: n.F2.file[s] },
                      }
                    : {
                        ...l,
                        parameters: { path: { directory_id: e.libraryFileId } },
                        requestBody: { expected_invitation_id: r, recipient: i, role_id: n.F2.folder[s] },
                      },
                ),
              )
              if (
                !(0, n.t4)(o.resource, e) ||
                o.role_id !== l ||
                ("principal" === i.recipient_type &&
                  ("principal" !== o.recipient.recipient_type ||
                    o.recipient.principal_id !== i.principal_id ||
                    (o.recipient.principal_type ?? "user") !== (i.principal_type ?? "user")))
              )
                throw Error("Invalid Library invitation response scope")
              return o
            },
            async removeShare(r) {
              let i = r.recipient
              if (!(0, n.t4)(r.resource, e)) throw Error("Library share removal is no longer available")
              if (
                "principal" === i.recipient_type &&
                null != i.principal_type &&
                "user" !== i.principal_type &&
                "group" !== i.principal_type
              )
                throw Error("Invalid Library share removal recipient")
              let l = "principal" === i.recipient_type && "group" === i.principal_type ? "group" : "user",
                s =
                  "principal" === i.recipient_type
                    ? {
                        recipient_principal_type: l,
                        recipient_principal_id: i.principal_id,
                        expected_status: r.status,
                        expected_role_id: r.role_id,
                      }
                    : void 0
              await c((i) =>
                a.Request.safeDelete(`${t}/shares/{share_id}`, {
                  ...i,
                  ...("file" === e.resourceKind
                    ? { parameters: { path: { library_file_id: e.libraryFileId, share_id: r.share_id }, query: s } }
                    : { parameters: { path: { directory_id: e.libraryFileId, share_id: r.share_id }, query: s } }),
                }),
              )
            },
            async updateLinkAccess({ expectedOwner: r, expectedInvitationId: i, expectedRoleId: l, linkAccess: s }) {
              if ("workspace" === s.mode && s.workspaceId !== e.accountId)
                throw Error("Library link sharing workspace is outside the account scope")
              let o = await c((r) =>
                  a.Request.safePatch(
                    `${t}/sharing-state`,
                    "file" === e.resourceKind
                      ? {
                          ...r,
                          parameters: { path: { library_file_id: e.libraryFileId } },
                          requestBody:
                            "workspace" === s.mode
                              ? {
                                  expected_invitation_id: i,
                                  link_access: "workspace",
                                  workspace_id: s.workspaceId,
                                  role_id: n.F2.file[s.role],
                                }
                              : { expected_invitation_id: i, expected_role_id: l, link_access: "collaborators_only" },
                        }
                      : {
                          ...r,
                          parameters: { path: { directory_id: e.libraryFileId } },
                          requestBody:
                            "workspace" === s.mode
                              ? {
                                  expected_invitation_id: i,
                                  link_access: "workspace",
                                  workspace_id: s.workspaceId,
                                  role_id: n.F2.folder[s.role],
                                }
                              : { expected_invitation_id: i, expected_role_id: l, link_access: "collaborators_only" },
                        },
                  ),
                ),
                d = (0, n.Sq)({ scope: e, sharingState: o })
              if (
                (0, n.nD)(o.owner.principal) !== (0, n.nD)(r) ||
                d?.mode !== s.mode ||
                ("workspace" === s.mode &&
                  ("workspace" !== d.mode || d.workspaceId !== s.workspaceId || d.role !== s.role))
              )
                throw Error("Library link access change was not confirmed")
              return o
            },
            async previewAccessChange({ recipient: r, desiredRole: i }) {
              let s = await c((e) =>
                a.Request.safePost(`${t}/access-change/preview`, {
                  ...e,
                  ...l,
                  requestBody: { recipient: { recipient_type: "principal", ...r }, desired_role: i },
                }),
              )
              if (!(0, n.t4)(s.resource, e) || (0, n.nD)(s.recipient) !== (0, n.nD)(r) || s.desired_role !== i)
                throw Error("Invalid Library access-change preview scope")
              return s
            },
            async applyAccessChange(r, i) {
              if (!(0, n.t4)(r.resource, e)) throw Error("Invalid Library access-change confirmation scope")
              let s = await c((e) =>
                a.Request.safePost(`${t}/access-change/apply`, {
                  ...e,
                  ...l,
                  requestBody: {
                    recipient: { recipient_type: "principal", ...r.recipient },
                    desired_role: r.desired_role,
                    fingerprint: r.fingerprint,
                  },
                }),
              )
              return (d(s.effective_access, i), s)
            },
            getOwnerAccessRequests: (e) => p("resource_owner", e),
            getRequesterAccessRequests: (e) => p("requester", e),
            async createAccessRequest({ recipients: r, role: i }) {
              let l = n.F2[e.resourceKind][i],
                s = await c((l) =>
                  a.Request.safePost(
                    `${t}/access-requests`,
                    "file" === e.resourceKind
                      ? {
                          ...l,
                          parameters: { path: { library_file_id: e.libraryFileId } },
                          requestBody: { recipients: r, requested_role_id: n.F2.file[i] },
                        }
                      : {
                          ...l,
                          parameters: { path: { directory_id: e.libraryFileId } },
                          requestBody: { recipients: r, requested_role_id: n.F2.folder[i] },
                        },
                  ),
                )
              if ((u(s, "requester"), s.requested_role_id !== l))
                throw Error("Invalid Library access-request role response")
              if (
                r.some(
                  (e) =>
                    "principal" === e.recipient_type &&
                    !s.recipients.some(
                      (r) => r.principal_id === e.principal_id && r.principal_type === (e.principal_type ?? "user"),
                    ),
                )
              )
                throw Error("Invalid Library access-request recipient response")
              return s
            },
            async decideAccessRequestGroup({ decision: r, recipient: i, requests: l }) {
              let s = l[0]
              if (null == s) throw Error("Invalid Library access-request group")
              let d = (0, n.M4)({ recipient: i, request: s }),
                p = new Set()
              for (let e of l) {
                if (
                  (u(e, "resource_owner"),
                  p.has(e.request_id) ||
                    (0, n.M4)({ recipient: i, request: e }) !== d ||
                    !(0, n.YB)(e).some((e) => (0, n.nD)(e) === (0, n.nD)(i)))
                )
                  throw Error("Invalid Library access-request group")
                p.add(e.request_id)
              }
              let m = []
              for (let s of l)
                try {
                  let l = await (async function ({ decision: r, recipient: i, requestId: l }) {
                    let s = await c((n) =>
                      a.Request.safePost(`${t}/access-requests/{request_id}/${r}`, {
                        ...n,
                        ...("file" === e.resourceKind
                          ? { parameters: { path: { library_file_id: e.libraryFileId, request_id: l } } }
                          : { parameters: { path: { directory_id: e.libraryFileId, request_id: l } } }),
                        requestBody: { recipient: { recipient_type: "principal", ...i } },
                      }),
                    )
                    if (
                      (u(s, "resource_owner"),
                      s.request_id !== l ||
                        !s.decisions.some(
                          (t) =>
                            (0, n.nD)(t.recipient) === (0, n.nD)(i) &&
                            t.decision === ("approve" === r ? "approved" : "declined") &&
                            "user" === t.decided_by.principal_type &&
                            t.decided_by.principal_id === e.accountUserId,
                        ))
                    )
                      throw Error("Library access-request decision was not confirmed")
                    return s
                  })({ decision: r, recipient: i, requestId: s.request_id })
                  if (
                    l.created_at !== s.created_at ||
                    (0, n.nD)(l.requester) !== (0, n.nD)(s.requester) ||
                    (0, n.M4)({ recipient: i, request: l }) !== d
                  )
                    throw Error("Invalid Library access-request generation response")
                  m.push(l)
                } catch {
                  o()
                  break
                }
              return { confirmedRequests: m, remainingRequests: l.slice(m.length) }
            },
          }
        },
      },
    )
  },
  gaC8(e, r, t) {
    t.d(r, { LibraryShareDialogBody: () => eX })
    var i = t("ABep"),
      a = t("QosV"),
      n = t("kOeh"),
      l = t("hwkA"),
      s = t("irkb"),
      o = t("T0Rc"),
      c = t("cE8H"),
      d = t("qmMi"),
      u = t("zd8w"),
      p = t("oyxz"),
      m = t("eFn4"),
      h = t("SgPg"),
      f = t("w5lF"),
      _ = t("OAko"),
      g = t("MM0V"),
      y = t("mUDD"),
      v = t("bVeK"),
      b = t("SGsN"),
      x = t("GaA7"),
      I = t("OWtl"),
      A = t("akkX"),
      w = t("wuZu"),
      S = t("IZAr"),
      R = t("JGmX"),
      E = t("FwqS"),
      C = t("jnsB"),
      j = t("CFGX"),
      T = t("LKbA"),
      L = t("rvFo"),
      M = t("eShZ"),
      q = t("uris"),
      k = t("xSOA"),
      N = t("Wf1j"),
      F = t("Yjer"),
      D = t("nqea")
    async function O(
      e,
      r,
      {
        includeShares: t = !1,
        preserveLibraryBrowse: i = !1,
        preserveEffectiveAccess: a = !1,
        preserveState: n = !1,
      } = {},
    ) {
      let l = (0, D.X1)(r, "state").slice(0, "folder" === r.resourceKind ? 3 : 5)
      e.invalidateQueries({ queryKey: l, predicate: (e) => "badge" === e.queryKey[5] })
      let s = e.invalidateQueries({
        queryKey: l,
        predicate: (e) =>
          "badge" !== e.queryKey[5] &&
          (t || "shares" !== e.queryKey[5]) &&
          (!n || e.queryKey[3] !== r.resourceKind || e.queryKey[4] !== r.libraryFileId || "state" !== e.queryKey[5]) &&
          (!a ||
            e.queryKey[3] !== r.resourceKind ||
            e.queryKey[4] !== r.libraryFileId ||
            "effective-access" !== e.queryKey[5]),
      })
      ;(e.invalidateQueries({ queryKey: ["appgen-library-cloud-files", r.accountId] }),
        e.invalidateQueries({
          queryKey: ["library-api", r.accountId],
          predicate: ({ queryKey: e }) => !i || "browse" !== e[3],
        }),
        await s)
    }
    var K = t("Te1l")
    function P(e) {
      let r,
        t,
        n,
        o,
        c,
        m,
        f,
        _,
        x,
        A,
        S,
        R,
        E,
        C,
        j = (0, a.c)(79),
        { analytics: M, api: P, canApprove: U, canDecide: Q, disabled: $, isCurrentSession: W, sharingScope: V } = e,
        X = (0, d.gh)(I.u),
        Z = (0, N.A)(),
        J = (0, s.jE)()
      j[0] !== M.shareSessionId || j[1] !== J || j[2] !== V
        ? ((r = () => (0, K.X)(J, V, "owner-access-requests", M.shareSessionId)),
          (j[0] = M.shareSessionId),
          (j[1] = J),
          (j[2] = V),
          (j[3] = r))
        : (r = j[3])
      let [ee] = (0, u.useState)(r),
        er = (0, u.useId)(),
        [et, ei] = (0, u.useState)(!1),
        [ea, en] = (0, u.useState)(z)
      ;(j[4] !== ee || j[5] !== V
        ? ((t = [...(0, D.X1)(V, "owner-access-requests"), "pages", ee]), (j[4] = ee), (j[5] = V), (j[6] = t))
        : (t = j[6]),
        j[7] !== P
          ? ((n = (e) => {
              let { pageParam: r, signal: t } = e
              return P.getOwnerAccessRequests({ cursor: r, signal: t })
            }),
            (j[7] = P),
            (j[8] = n))
          : (n = j[8]),
        j[9] !== Q || j[10] !== t || j[11] !== n
          ? ((o = {
              enabled: Q,
              queryKey: t,
              queryFn: n,
              initialPageParam: null,
              getNextPageParam: Y,
              retry: !1,
              staleTime: L.D.THIRTY_SECONDS,
            }),
            (j[9] = Q),
            (j[10] = t),
            (j[11] = n),
            (j[12] = o))
          : (o = j[12]))
      let {
        data: el,
        isError: es,
        isFetching: eo,
        isSuccess: ec,
        hasNextPage: ed,
        fetchNextPage: eu,
        refetch: ep,
      } = (0, q.q)(o)
      j[13] !== M || j[14] !== X || j[15] !== V
        ? ((c = (e, r, t, i) => {
            let { decision: a, row: n } = e
            ;(0, F.aS)(X, M, {
              action:
                "approve" === a
                  ? "CHATGPT_FILE_LIBRARY_SHARING_ACTION_APPROVE_ACCESS_REQUEST"
                  : "CHATGPT_FILE_LIBRARY_SHARING_ACTION_DECLINE_ACCESS_REQUEST",
              outcome: r,
              operationId: t,
              error: (0, F.GE)(i),
              recipientKind:
                "group" === n.recipient.principal_type
                  ? "CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_GROUP"
                  : "CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_USER",
              recipientCount: 1,
              role: (0, F.qT)((0, D.rP)(n.request.requested_role_id, V.resourceKind)),
            })
          }),
          (j[13] = M),
          (j[14] = X),
          (j[15] = V),
          (j[16] = c))
        : (c = j[16])
      let em = c
      ;(j[17] !== V ? ((m = (0, D.X1)(V, "state")), (j[17] = V), (j[18] = m)) : (m = j[18]),
        j[19] !== P || j[20] !== U || j[21] !== Q || j[22] !== W
          ? ((f = (e) => {
              let { decision: r, row: t } = e
              if (!W() || !Q || ("approve" === r && !U))
                throw Error("Library access-request decisions are not permitted")
              return P.decideAccessRequestGroup({ decision: r, recipient: t.recipient, requests: t.requests })
            }),
            (j[19] = P),
            (j[20] = U),
            (j[21] = Q),
            (j[22] = W),
            (j[23] = f))
          : (f = j[23]),
        j[24] !== W || j[25] !== em
          ? ((_ = (e) => {
              let r = crypto.randomUUID()
              return (W() && em(e, "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_STARTED", r), r)
            }),
            (j[24] = W),
            (j[25] = em),
            (j[26] = _))
          : (_ = j[26]),
        j[27] !== W || j[28] !== em || j[29] !== X
          ? ((A = (e, r, t) => {
              let { confirmedRequests: a, remainingRequests: n } = e
              if (!W()) return
              let l = "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_SUCCEEDED"
              ;(n.length > 0 &&
                (l =
                  0 === a.length
                    ? "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_FAILED"
                    : "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_PARTIAL"),
                em(r, l, t),
                en((e) => new Set([...e, ...a.map((e) => (0, D.d7)({ request: e, recipient: r.row.recipient }))])),
                n.length > 0 &&
                  (a.length > 0
                    ? X.get(b.Id).warning(
                        (0, i.jsx)(p.A, {
                          id: "librarySharing.requests.partial",
                          defaultMessage: "Some requests were updated. Review the remaining requests and try again",
                        }),
                      )
                    : X.get(b.Id).danger(
                        (0, i.jsx)(p.A, {
                          id: "librarySharing.requests.updateError",
                          defaultMessage: "Couldn't update this request. Try again",
                        }),
                        { errorAnalytics: { toastId: "librarySharing.requests.updateError" } },
                      )))
            }),
            (x = (e, r, t) => {
              W() &&
                (em(r, "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_FAILED", t, e),
                X.get(b.Id).danger(
                  (0, i.jsx)(p.A, {
                    id: "librarySharing.requests.updateError",
                    defaultMessage: "Couldn't update this request. Try again",
                  }),
                  { errorAnalytics: { toastId: "librarySharing.requests.updateError" } },
                ))
            }),
            (j[27] = W),
            (j[28] = em),
            (j[29] = X),
            (j[30] = x),
            (j[31] = A))
          : ((x = j[30]), (A = j[31])),
        j[32] !== W || j[33] !== J || j[34] !== V
          ? ((S = () => {
              W() && O(J, V, { includeShares: !0 })
            }),
            (j[32] = W),
            (j[33] = J),
            (j[34] = V),
            (j[35] = S))
          : (S = j[35]),
        j[36] !== x || j[37] !== S || j[38] !== m || j[39] !== f || j[40] !== _ || j[41] !== A
          ? ((R = {
              mutationKey: m,
              networkMode: "always",
              retry: !1,
              mutationFn: f,
              onMutate: _,
              onSuccess: A,
              onError: x,
              onSettled: S,
            }),
            (j[36] = x),
            (j[37] = S),
            (j[38] = m),
            (j[39] = f),
            (j[40] = _),
            (j[41] = A),
            (j[42] = R))
          : (R = j[42]))
      let { mutate: eh, isPending: ef } = (0, k.n)(R)
      if (!Q) return null
      if (es) {
        let e, r, t, a
        return (
          j[43] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(p.A, {
                id: "librarySharing.requests.loadError",
                defaultMessage: "Couldn't load requests to share",
              })),
              (j[43] = e))
            : (e = j[43]),
          j[44] !== W || j[45] !== ep
            ? ((r = () => {
                W() && ep()
              }),
              (j[44] = W),
              (j[45] = ep),
              (j[46] = r))
            : (r = j[46]),
          j[47] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, i.jsx)(p.A, { id: "librarySharing.requests.retry", defaultMessage: "Retry" })), (j[47] = t))
            : (t = j[47]),
          j[48] !== eo || j[49] !== r
            ? ((a = (0, i.jsx)(y.OO, {
                children: (0, i.jsx)(g.l, {
                  type: "error",
                  role: "alert",
                  content: e,
                  isPrimaryCtaDisabled: eo,
                  onPrimaryCtaClick: r,
                  primaryCtaText: t,
                }),
              })),
              (j[48] = eo),
              (j[49] = r),
              (j[50] = a))
            : (a = j[50]),
          a
        )
      }
      if (!ec) return null
      if (
        j[51] !== U ||
        j[52] !== Q ||
        j[53] !== el?.pages ||
        j[54] !== el?.pages.at ||
        j[55] !== el?.pages.flatMap ||
        j[56] !== $ ||
        j[57] !== et ||
        j[58] !== eu ||
        j[59] !== ed ||
        j[60] !== Z ||
        j[61] !== W ||
        j[62] !== eo ||
        j[63] !== ef ||
        j[64] !== eh ||
        j[65] !== ep ||
        j[66] !== er ||
        j[67] !== ea ||
        j[68] !== V
      ) {
        C = Symbol.for("react.early_return_sentinel")
        e: {
          let e, r, t, a
          j[71] !== ea
            ? ((e = (e) => {
                let [r, ...t] = e.requests.filter((r) => !ea.has((0, D.d7)({ request: r, recipient: e.recipient })))
                return null == r ? [] : [{ ...e, request: r, requests: [r, ...t] }]
              }),
              (j[71] = ea),
              (j[72] = e))
            : (e = j[72])
          let n = (0, D.qh)(el?.pages.flatMap(B) ?? []).flatMap(e),
            s = el?.pages.at(-1)?.next_cursor != null
          if (0 === n.length && !s) {
            C = null
            break e
          }
          j[73] !== el?.pages || j[74] !== el?.pages.flatMap
            ? ((r = new Map(el?.pages.flatMap(H))), (j[73] = el?.pages), (j[74] = el?.pages.flatMap), (j[75] = r))
            : (r = j[75])
          let o = r
          ;(j[76] !== et
            ? ((t = () => ei(!et)),
              (a = et ? (0, i.jsx)(v.Aq_, {}) : (0, i.jsx)(v.uM3, {})),
              (j[76] = et),
              (j[77] = t),
              (j[78] = a))
            : ((t = j[77]), (a = j[78])),
            (E = (0, i.jsxs)(y.OO, {
              children: [
                (0, i.jsxs)(l.$, {
                  "aria-controls": er,
                  "aria-expanded": et,
                  color: "secondary",
                  variant: "ghost",
                  size: "sm",
                  onClick: t,
                  children: [
                    a,
                    (0, i.jsx)(p.A, {
                      id: "librarySharing.requests.heading",
                      defaultMessage: "Requests to share ({count, number})",
                      values: { count: n.length },
                    }),
                  ],
                }),
                et
                  ? (0, i.jsxs)("div", {
                      id: er,
                      className: "flex flex-col gap-3",
                      children: [
                        n.map((e) => {
                          let r,
                            t = o.get((0, D.nD)(e.recipient)),
                            a = o.get((0, D.nD)(e.request.requester)),
                            n = t?.display_name ?? t?.email,
                            s = a?.display_name ?? a?.email,
                            c = new Set(e.requests.map(G)).size - 1,
                            d = (0, D.rP)(e.request.requested_role_id, V.resourceKind)
                          return (
                            (r =
                              a?.display_name != null && null != a.email
                                ? (0, i.jsx)(p.A, {
                                    id: "librarySharing.requests.requestedByWithEmail",
                                    defaultMessage:
                                      "Requested by {name} ({email}){otherCount, plural, =0 {} one { and # other} other { and # others}}",
                                    values: { name: a.display_name, email: a.email, otherCount: c },
                                  })
                                : null != s
                                  ? (0, i.jsx)(p.A, {
                                      id: "librarySharing.requests.requestedBy",
                                      defaultMessage:
                                        "Requested by {name}{otherCount, plural, =0 {} one { and # other} other { and # others}}",
                                      values: { name: s, otherCount: c },
                                    })
                                  : (0, i.jsx)(p.A, {
                                      id: "librarySharing.requests.requestedByUnknown",
                                      defaultMessage:
                                        "Requested by a collaborator{otherCount, plural, =0 {} one { and # other} other { and # others}}",
                                      values: { otherCount: c },
                                    })),
                            (0, i.jsx)(
                              w.h,
                              {
                                avatar: (0, i.jsx)(h.T, {
                                  avatarUrl: t?.avatar_url,
                                  colorKey: e.recipient.principal_id,
                                  name: n ?? null,
                                  size: "sm",
                                }),
                                label:
                                  n ??
                                  (0, i.jsx)(p.A, {
                                    id: "librarySharing.requests.recipientFallback",
                                    defaultMessage: "Collaborator",
                                  }),
                                secondaryLabel: (0, i.jsxs)(i.Fragment, {
                                  children: [
                                    t?.email == null ? null : (0, i.jsx)("div", { children: t.email }),
                                    (0, i.jsx)("div", { children: r }),
                                  ],
                                }),
                                size: "compact",
                                trailingContent: (0, i.jsxs)("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    (0, i.jsx)("span", {
                                      className: "text-sm text-codex-description",
                                      children: (0, i.jsx)(T.u, { permission: d }),
                                    }),
                                    (0, i.jsx)(l.$, {
                                      "aria-label":
                                        null == n
                                          ? Z.formatMessage({
                                              id: "librarySharing.requests.approveUnknownLabel",
                                              defaultMessage: "Approve access request",
                                            })
                                          : Z.formatMessage(
                                              {
                                                id: "librarySharing.requests.approveLabel",
                                                defaultMessage: "Approve access for {name}",
                                              },
                                              { name: n },
                                            ),
                                      color: "secondary",
                                      disabled: $ || ef || !U || ("viewer" !== d && "editor" !== d),
                                      size: "sm",
                                      onClick: () => {
                                        W() && Q && U && eh({ decision: "approve", row: e })
                                      },
                                      children: (0, i.jsx)(p.A, {
                                        id: "librarySharing.requests.approve",
                                        defaultMessage: "Approve",
                                      }),
                                    }),
                                    (0, i.jsx)(l.$, {
                                      "aria-label":
                                        null == n
                                          ? Z.formatMessage({
                                              id: "librarySharing.requests.declineUnknownLabel",
                                              defaultMessage: "Decline access request",
                                            })
                                          : Z.formatMessage(
                                              {
                                                id: "librarySharing.requests.declineLabel",
                                                defaultMessage: "Decline access for {name}",
                                              },
                                              { name: n },
                                            ),
                                      color: "secondary",
                                      variant: "ghost",
                                      disabled: $ || ef,
                                      size: "sm",
                                      onClick: () => {
                                        W() && Q && eh({ decision: "decline", row: e })
                                      },
                                      children: (0, i.jsx)(p.A, {
                                        id: "librarySharing.requests.decline",
                                        defaultMessage: "Decline",
                                      }),
                                    }),
                                  ],
                                }),
                              },
                              (0, D.M4)(e),
                            )
                          )
                        }),
                        s
                          ? (0, i.jsx)(l.$, {
                              size: "xl",
                              type: "button",
                              color: "secondary",
                              disabled: $ || ef || eo,
                              loading: eo,
                              onClick: () => {
                                W() && (ed ? eu() : ep())
                              },
                              children: (0, i.jsx)(p.A, {
                                id: "librarySharing.requests.loadMore",
                                defaultMessage: "Load more requests",
                              }),
                            })
                          : null,
                      ],
                    })
                  : null,
              ],
            })))
        }
        ;((j[51] = U),
          (j[52] = Q),
          (j[53] = el?.pages),
          (j[54] = el?.pages.at),
          (j[55] = el?.pages.flatMap),
          (j[56] = $),
          (j[57] = et),
          (j[58] = eu),
          (j[59] = ed),
          (j[60] = Z),
          (j[61] = W),
          (j[62] = eo),
          (j[63] = ef),
          (j[64] = eh),
          (j[65] = ep),
          (j[66] = er),
          (j[67] = ea),
          (j[68] = V),
          (j[69] = E),
          (j[70] = C))
      } else ((E = j[69]), (C = j[70]))
      return C !== Symbol.for("react.early_return_sentinel") ? C : E
    }
    function G(e) {
      return (0, D.nD)(e.requester)
    }
    function H(e) {
      return e.principal_identities.map(U)
    }
    function U(e) {
      return [(0, D.nD)(e.principal), e]
    }
    function B(e) {
      return e.requests
    }
    function Y(e, r, t, i) {
      return null == e.next_cursor || i.includes(e.next_cursor) ? void 0 : e.next_cursor
    }
    function z() {
      return new Set()
    }
    var Q = t("TzhQ"),
      $ = t("heYt"),
      W = t("aoV0"),
      V = t("glqn"),
      X = t("slpy")
    function Z(e) {
      let r,
        t,
        l,
        s,
        o = (0, a.c)(19),
        { shares: c, effectiveAccess: d, resourceKind: u, renderActions: m, draftRoles: f } = e
      if (
        o[0] !== f ||
        o[1] !== d?.collaborators ||
        o[2] !== d?.collaborators.filter ||
        o[3] !== m ||
        o[4] !== u ||
        o[5] !== c.owner ||
        o[6] !== c.shares
      ) {
        l = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            a,
            s = d?.collaborators.filter((e) => {
              let { principal: r } = e
              return (
                ("user" === r.principal_type || "group" === r.principal_type) && (0, D.nD)(r) !== (0, D.nD)(c.owner)
              )
            }),
            _ = new Map(s?.map(J)),
            g = new Set(),
            y = c.shares.flatMap((e) => {
              let r = e.recipient
              if ("principal" === r.recipient_type) {
                let t = r.principal_type ?? "user",
                  i = `${t}:${r.principal_id}`
                return ("user" !== t && "group" !== t) || i === (0, D.nD)(c.owner)
                  ? []
                  : (g.add(i), [{ key: e.share_id, share: e, collaborator: _.get(i) }])
              }
              return [{ key: e.share_id, share: e }]
            })
          for (let e of s ?? []) {
            let r = (0, D.nD)(e.principal)
            g.has(r) || y.push({ key: `effective:${r}`, collaborator: e })
          }
          o[10] !== f
            ? ((e = (e) => {
                let { key: r } = e
                return !f?.has(r) || null != f.get(r)
              }),
              (o[10] = f),
              (o[11] = e))
            : (e = o[11])
          let b = y.filter(e)
          if (0 === b.length) {
            l = null
            break e
          }
          ;((r = "flex flex-col gap-1"),
            o[12] !== m || o[13] !== u || o[14] !== c
              ? ((a = (e) => {
                  let { key: r, share: t, collaborator: a } = e,
                    l =
                      a?.email ??
                      t?.recipient_email ??
                      (t?.recipient.recipient_type === "email" ? t.recipient.email : void 0),
                    s =
                      t?.status !== "pending" || c.owner.principal_id.includes("__")
                        ? a?.display_name || t?.recipient_display_name || l || void 0
                        : l || void 0,
                    o = (0, D.rP)(a?.role_id ?? t?.role_id ?? "", u),
                    d =
                      a?.principal.principal_type === "group" ||
                      (t?.recipient.recipient_type === "principal" && "group" === t.recipient.principal_type),
                    f = null
                  a?.inherited &&
                    (f =
                      a.source?.resource_display_name == null
                        ? (0, i.jsx)(p.A, {
                            id: "librarySharing.collaborators.inheritedUnnamed",
                            defaultMessage: "Inherited from a parent folder",
                          })
                        : (0, i.jsx)(p.A, {
                            id: "librarySharing.collaborators.inherited",
                            defaultMessage: "Inherited from {folderName}",
                            values: { folderName: a.source.resource_display_name },
                          }))
                  let _ =
                    null != f || a?.group_source != null
                      ? (0, i.jsxs)("div", {
                          className: "flex flex-col",
                          children: [
                            f,
                            a?.group_source != null
                              ? (0, i.jsx)(p.A, {
                                  id: "librarySharing.collaborators.groupAccess",
                                  defaultMessage: "Access through a group",
                                })
                              : null,
                          ],
                        })
                      : null
                  return (0, i.jsx)(
                    w.h,
                    {
                      avatar: d
                        ? (0, i.jsx)(n.e, { size: 28, Icon: v.oJq })
                        : (0, i.jsx)(h.T, {
                            size: "group",
                            avatarUrl: a?.avatar_url ?? t?.recipient_avatar_url,
                            colorKey:
                              a?.principal.principal_id ??
                              (t?.recipient.recipient_type === "principal"
                                ? t.recipient.principal_id
                                : l?.toLowerCase()),
                            name: s ?? null,
                          }),
                      label:
                        s ??
                        (0, i.jsx)(p.A, { id: "librarySharing.collaborators.unnamed", defaultMessage: "Collaborator" }),
                      secondaryLabel: (0, i.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                          null != l && l !== s ? (0, i.jsx)("span", { children: l }) : null,
                          t?.status === "pending"
                            ? (0, i.jsx)(p.A, {
                                id: "librarySharing.collaborators.inviteSent",
                                defaultMessage: "Invite sent",
                              })
                            : null,
                        ],
                      }),
                      trailingContent: (0, i.jsx)(X.m, {
                        content: _,
                        children:
                          null == m
                            ? (0, i.jsx)("span", {
                                className: "pe-2 text-sm text-tertiary",
                                tabIndex: null == _ ? void 0 : 0,
                                children: (0, i.jsx)(T.u, { permission: o }),
                              })
                            : (0, i.jsx)("span", {
                                className: "inline-flex",
                                tabIndex: null == _ ? void 0 : 0,
                                children: m({ key: r, share: t, collaborator: a, role: o, personName: s }),
                              }),
                      }),
                    },
                    r,
                  )
                }),
                (o[12] = m),
                (o[13] = u),
                (o[14] = c),
                (o[15] = a))
              : (a = o[15]),
            (t = b.map(a)))
        }
        ;((o[0] = f),
          (o[1] = d?.collaborators),
          (o[2] = d?.collaborators.filter),
          (o[3] = m),
          (o[4] = u),
          (o[5] = c.owner),
          (o[6] = c.shares),
          (o[7] = r),
          (o[8] = t),
          (o[9] = l))
      } else ((r = o[7]), (t = o[8]), (l = o[9]))
      return l !== Symbol.for("react.early_return_sentinel")
        ? l
        : (o[16] !== r || o[17] !== t
            ? ((s = (0, i.jsx)("div", { className: r, children: t })), (o[16] = r), (o[17] = t), (o[18] = s))
            : (s = o[18]),
          s)
    }
    function J(e) {
      return [(0, D.nD)(e.principal), e]
    }
    function ee(e) {
      let r,
        t,
        n,
        l,
        o,
        c,
        m,
        h,
        f,
        _,
        g,
        y,
        v,
        x,
        A,
        w,
        S,
        R,
        E,
        C = (0, a.c)(92),
        {
          api: j,
          sharingScope: L,
          analytics: M,
          shares: q,
          effectiveAccess: N,
          allowedRoles: K,
          canChange: P,
          canRemove: G,
          canRemoveEffective: H,
          disabled: U,
          isCurrentSession: B,
          onStageChange: Y,
        } = e,
        z = (0, d.gh)(I.u),
        Q = (0, s.jE)(),
        [$, W] = (0, u.useState)(null)
      C[0] === Symbol.for("react.memo_cache_sentinel") ? ((r = new Map()), (C[0] = r)) : (r = C[0])
      let [X, J] = (0, u.useState)(r)
      C[1] !== L ? ((t = (0, D.X1)(L, "shares")), (C[1] = L), (C[2] = t)) : (t = C[2])
      let ee = t
      C[3] !== L ? ((n = (0, D.X1)(L, "effective-access")), (C[3] = L), (C[4] = n)) : (n = C[4])
      let eo = n
      ;(C[5] !== L ? ((l = (0, D.X1)(L, "state")), (C[5] = L), (C[6] = l)) : (l = C[6]),
        C[7] !== K ||
        C[8] !== j ||
        C[9] !== P ||
        C[10] !== G ||
        C[11] !== H ||
        C[12] !== B ||
        C[13] !== q ||
        C[14] !== L.resourceKind
          ? ((o = async (e) => {
              let r = "direct" === e.kind ? e.desiredRole : e.preview.desired_role
              if (
                !B() ||
                (null != r && (!P || !K.includes(r))) ||
                (null == r && "effective" === e.kind && !H) ||
                (null == r && "direct" === e.kind && !G)
              )
                throw Error("Library access management is no longer permitted")
              return "effective" === e.kind
                ? { kind: "effective", preview: e.preview, result: await j.applyAccessChange(e.preview, q.owner) }
                : null == e.desiredRole
                  ? (await j.removeShare(e.share), { kind: "direct", share: e.share, updatedShare: null })
                  : {
                      kind: "direct",
                      share: e.share,
                      updatedShare: await j.createShare({
                        recipient: e.share.recipient,
                        roleId: D.F2[L.resourceKind][e.desiredRole],
                        expectedInvitationId: e.share.share_id,
                      }),
                    }
            }),
            (C[7] = K),
            (C[8] = j),
            (C[9] = P),
            (C[10] = G),
            (C[11] = H),
            (C[12] = B),
            (C[13] = q),
            (C[14] = L.resourceKind),
            (C[15] = o))
          : (o = C[15]),
        C[16] !== M || C[17] !== B || C[18] !== Q || C[19] !== z || C[20] !== ee || C[21] !== L
          ? ((c = async (e) => {
              await Q.cancelQueries({ queryKey: ee.slice(0, 5) })
              let r = crypto.randomUUID()
              return (
                B() &&
                  (0, F.aS)(z, M, {
                    ...ep(e, L),
                    outcome: "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_STARTED",
                    operationId: r,
                  }),
                r
              )
            }),
            (C[16] = M),
            (C[17] = B),
            (C[18] = Q),
            (C[19] = z),
            (C[20] = ee),
            (C[21] = L),
            (C[22] = c))
          : (c = C[22]),
        C[23] !== M || C[24] !== eo || C[25] !== B || C[26] !== Q || C[27] !== z || C[28] !== ee || C[29] !== L
          ? ((m = async (e, r, t) => {
              if (!B()) return
              let a = "effective" === e.kind && !0 === e.result.partial_failure,
                n = "effective" === e.kind ? e.preview.mutations.find(el) : void 0,
                l = "direct" === e.kind && null == e.updatedShare ? e.share : void 0,
                s =
                  l?.status === "active" && "principal" === l.recipient.recipient_type
                    ? (0, D.nD)({
                        principal_type: l.recipient.principal_type ?? "user",
                        principal_id: l.recipient.principal_id,
                      })
                    : void 0,
                o = Q.getQueryData(eo),
                c =
                  null != s &&
                  o?.complete === !0 &&
                  o.collaborators.every((e) => (0, D.nD)(e.principal) !== s || e.source?.invitation_id != null)
              if (
                (O(Q, null == n ? L : { ...L, resourceKind: "folder", libraryFileId: n.resource.resource_id }, {
                  includeShares:
                    a ||
                    ("effective" === e.kind &&
                      (1 !== e.preview.mutations.length || e.preview.mutations[0]?.invitation_id == null)),
                  preserveEffectiveAccess: c,
                }),
                await Promise.all([
                  "direct" === e.kind ||
                  (!a && 1 === e.preview.mutations.length && e.preview.mutations[0]?.invitation_id != null)
                    ? Q.cancelQueries({ queryKey: ee, exact: !0 })
                    : void 0,
                  ("effective" === e.kind ? !a && e.result.effective_access.complete : null != e.updatedShare || c)
                    ? Q.cancelQueries({ queryKey: eo, exact: !0 })
                    : void 0,
                ]),
                B())
              ) {
                if ("direct" === e.kind) {
                  if (
                    (Q.setQueryData(ee, (r) =>
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
                    Q.setQueryData(eo, (t) =>
                      null == t
                        ? t
                        : {
                            ...t,
                            collaborators: t.collaborators.map((t) =>
                              t.source?.invitation_id === e.share.share_id &&
                              !0 !== t.inherited &&
                              null == t.group_source
                                ? {
                                    ...t,
                                    role_id: r.role_id,
                                    direct_role_id: r.role_id,
                                    source: { ...t.source, role_id: r.role_id },
                                  }
                                : t,
                            ),
                          },
                    )
                  }
                  c &&
                    null != l &&
                    Q.setQueryData(eo, (e) =>
                      null == e
                        ? e
                        : {
                            ...e,
                            collaborators: e.collaborators.flatMap((e) =>
                              (0, D.nD)(e.principal) !== s
                                ? [e]
                                : e.source?.invitation_id === l.share_id && !0 !== e.inherited && null == e.group_source
                                  ? []
                                  : (!0 === e.inherited || null != e.group_source) && e.direct_role_id === l.role_id
                                    ? [{ ...e, direct_role_id: null }]
                                    : [e],
                            ),
                          },
                    )
                } else {
                  Q.setQueryData(eo, e.result.effective_access)
                  let r = a || 1 !== e.preview.mutations.length ? void 0 : e.preview.mutations[0]
                  r?.invitation_id != null &&
                    Q.setQueryData(ee, (e) =>
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
                ;(W(null),
                  (0, F.aS)(z, M, {
                    ...ep(r, L),
                    outcome: a
                      ? "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_PARTIAL"
                      : "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_SUCCEEDED",
                    operationId: t,
                    succeededRecipientCount: a ? void 0 : 1,
                    failedRecipientCount: a ? 1 : void 0,
                  }),
                  a
                    ? z
                        .get(b.Id)
                        .warning(
                          (0, i.jsx)(p.A, {
                            id: "librarySharing.collaborators.partialChange",
                            defaultMessage:
                              "Some access changes couldn't be applied. Review the current permissions before trying again",
                          }),
                        )
                    : z
                        .get(b.Id)
                        .success(
                          (0, i.jsx)(p.A, {
                            id: "librarySharing.collaborators.updated",
                            defaultMessage: "Access updated",
                          }),
                        ))
              }
            }),
            (C[23] = M),
            (C[24] = eo),
            (C[25] = B),
            (C[26] = Q),
            (C[27] = z),
            (C[28] = ee),
            (C[29] = L),
            (C[30] = m))
          : (m = C[30]),
        C[31] !== M || C[32] !== B || C[33] !== Q || C[34] !== z || C[35] !== L
          ? ((h = (e, r, t) => {
              if (!B()) return
              ;(W(null),
                (0, F.aS)(z, M, {
                  ...ep(r, L),
                  outcome: "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_FAILED",
                  operationId: t,
                  failedRecipientCount: 1,
                  error: (0, F.GE)(e),
                }),
                z
                  .get(b.Id)
                  .danger(
                    (0, i.jsx)(p.A, {
                      id: "librarySharing.collaborators.updateFailed",
                      defaultMessage: "Couldn't update access. Review the current permissions and try again",
                    }),
                    { errorAnalytics: { toastId: "librarySharing.collaborators.updateFailed" } },
                  ))
              let a = "effective" === r.kind ? r.preview.mutations.find(en) : void 0
              O(Q, null == a ? L : { ...L, resourceKind: "folder", libraryFileId: a.resource.resource_id }, {
                includeShares: !0,
              })
            }),
            (C[31] = M),
            (C[32] = B),
            (C[33] = Q),
            (C[34] = z),
            (C[35] = L),
            (C[36] = h))
          : (h = C[36]),
        C[37] !== l || C[38] !== o || C[39] !== c || C[40] !== m || C[41] !== h
          ? ((f = {
              mutationKey: l,
              networkMode: "always",
              retry: !1,
              mutationFn: o,
              onMutate: c,
              onSuccess: m,
              onError: h,
            }),
            (C[37] = l),
            (C[38] = o),
            (C[39] = c),
            (C[40] = m),
            (C[41] = h),
            (C[42] = f))
          : (f = C[42]))
      let { mutateAsync: ec, isPending: ed } = (0, k.n)(f)
      C[43] !== ec || C[44] !== Y
        ? ((_ = function (e, r) {
            ;(J((t) => {
              let i = new Map(t)
              return (
                null == r ? i.delete(e) : i.set(e, "direct" === r.kind ? r.desiredRole : r.preview.desired_role),
                i
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
                          .then(ea, ei)
                          .finally(() => {
                            ;(J((r) => {
                              let t = new Map(r)
                              return (t.delete(e), t)
                            }),
                              Y(`collaborator:${e}`, null))
                          }),
                    },
              ))
          }),
          (C[43] = ec),
          (C[44] = Y),
          (C[45] = _))
        : (_ = C[45])
      let eu = _
      ;(C[46] !== L ? ((g = (0, D.X1)(L, "state")), (C[46] = L), (C[47] = g)) : (g = C[47]),
        C[48] !== j || C[49] !== P || C[50] !== H || C[51] !== B
          ? ((y = (e) => {
              let { collaborator: r, desiredRole: t } = e
              if (!B() || (null == t ? !H : !P))
                throw Error("Library inherited access management is no longer permitted")
              return j.previewAccessChange({ recipient: r.principal, desiredRole: t })
            }),
            (C[48] = j),
            (C[49] = P),
            (C[50] = H),
            (C[51] = B),
            (C[52] = y))
          : (y = C[52]),
        C[53] !== B || C[54] !== Q || C[55] !== ee || C[56] !== L.resourceKind || C[57] !== eu
          ? ((v = (e, r) => {
              let { key: t, personName: i } = r
              if (B())
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
                  W({ key: t, personName: i, preview: e })
                else {
                  if (null != e.desired_role && 0 === e.mutations.length && "user" === e.recipient.principal_type) {
                    let r = Q.getQueryData(ee)?.shares.find(
                      (r) =>
                        "active" === r.status &&
                        "principal" === r.recipient.recipient_type &&
                        (r.recipient.principal_type ?? "user") === "user" &&
                        r.recipient.principal_id === e.recipient.principal_id,
                    )
                    if (null != r && (0, D.rP)(r.role_id, L.resourceKind) !== e.desired_role)
                      return void eu(t, { kind: "direct", share: r, desiredRole: e.desired_role })
                  }
                  eu(t, { kind: "effective", preview: e })
                }
            }),
            (C[53] = B),
            (C[54] = Q),
            (C[55] = ee),
            (C[56] = L.resourceKind),
            (C[57] = eu),
            (C[58] = v))
          : (v = C[58]),
        C[59] !== B || C[60] !== Q || C[61] !== z || C[62] !== L
          ? ((x = () => {
              B() &&
                (z
                  .get(b.Id)
                  .danger(
                    (0, i.jsx)(p.A, {
                      id: "librarySharing.collaborators.previewFailed",
                      defaultMessage: "Couldn't check how this change affects access. Try again",
                    }),
                    { errorAnalytics: { toastId: "librarySharing.collaborators.previewFailed" } },
                  ),
                O(Q, L))
            }),
            (C[59] = B),
            (C[60] = Q),
            (C[61] = z),
            (C[62] = L),
            (C[63] = x))
          : (x = C[63]),
        C[64] !== g || C[65] !== y || C[66] !== v || C[67] !== x
          ? ((A = { mutationKey: g, networkMode: "always", retry: !1, mutationFn: y, onSuccess: v, onError: x }),
            (C[64] = g),
            (C[65] = y),
            (C[66] = v),
            (C[67] = x),
            (C[68] = A))
          : (A = C[68]))
      let { mutate: em, isPending: eh } = (0, k.n)(A),
        ef = U || ed || eh
      return (
        C[69] !== K ||
        C[70] !== ef ||
        C[71] !== P ||
        C[72] !== G ||
        C[73] !== H ||
        C[74] !== X ||
        C[75] !== em ||
        C[76] !== L.accountUserId ||
        C[77] !== eu
          ? ((w = (e) => {
              let { key: r, share: t, collaborator: a, role: n, personName: l } = e,
                s = X.get(r) ?? n
              if (
                (a?.principal.principal_type === "user" && a.principal.principal_id === L.accountUserId) ||
                (t?.recipient.recipient_type === "principal" &&
                  (t.recipient.principal_type ?? "user") === "user" &&
                  t.recipient.principal_id === L.accountUserId)
              )
                return (0, i.jsx)("span", {
                  className: "pe-4 text-sm text-tertiary",
                  children: (0, i.jsx)(T.u, { permission: n }),
                })
              let o =
                  null != a &&
                  t?.status !== "pending" &&
                  (null == t || !0 === a.inherited || null != a.group_source || "editor" === n),
                c = o ? K.filter(et) : K,
                d = (null != t && G) || (o && H)
              return (P && c.some((e) => e !== n)) || d
                ? (0, i.jsx)(V.e, {
                    indicatorVariant: "checkmark",
                    disabled: ef,
                    options: c.map((e) => ({ value: e, disabled: !P })),
                    renderLabel: er,
                    removeLabel: (0, i.jsx)(p.A, {
                      id: "librarySharing.collaborators.remove",
                      defaultMessage: "Remove access",
                    }),
                    value: s ?? "unknown",
                    variant: "inline",
                    onChange: (e) => {
                      if (!ef && P && "unknown" !== e && e !== s) {
                        if (e === n) return void eu(r, null)
                        null != a && t?.status !== "pending" && ("viewer" === e || "editor" === e)
                          ? em({ key: r, collaborator: a, desiredRole: e, personName: l })
                          : null != t && eu(r, { kind: "direct", share: t, desiredRole: e })
                      }
                    },
                    onRemoveAccess: d
                      ? () => {
                          !ef &&
                            (H && o
                              ? em({ key: r, collaborator: a, desiredRole: null, personName: l })
                              : null != t && G && eu(r, { kind: "direct", share: t, desiredRole: null }))
                        }
                      : void 0,
                  })
                : (0, i.jsx)("span", {
                    className: "pe-4 text-sm text-tertiary",
                    children: (0, i.jsx)(T.u, { permission: s }),
                  })
            }),
            (C[69] = K),
            (C[70] = ef),
            (C[71] = P),
            (C[72] = G),
            (C[73] = H),
            (C[74] = X),
            (C[75] = em),
            (C[76] = L.accountUserId),
            (C[77] = eu),
            (C[78] = w))
          : (w = C[78]),
        C[79] !== X || C[80] !== N || C[81] !== q || C[82] !== L.resourceKind || C[83] !== w
          ? ((S = (0, i.jsx)(Z, {
              shares: q,
              effectiveAccess: N,
              resourceKind: L.resourceKind,
              draftRoles: X,
              renderActions: w,
            })),
            (C[79] = X),
            (C[80] = N),
            (C[81] = q),
            (C[82] = L.resourceKind),
            (C[83] = w),
            (C[84] = S))
          : (S = C[84]),
        C[85] !== ed || C[86] !== $ || C[87] !== eu
          ? ((R =
              null == $
                ? null
                : (0, i.jsx)(es, {
                    isPending: ed,
                    personName: $.personName,
                    preview: $.preview,
                    onCancel: () => W(null),
                    onConfirm: () => {
                      ;(eu($.key, { kind: "effective", preview: $.preview }), W(null))
                    },
                  })),
            (C[85] = ed),
            (C[86] = $),
            (C[87] = eu),
            (C[88] = R))
          : (R = C[88]),
        C[89] !== S || C[90] !== R
          ? ((E = (0, i.jsxs)(i.Fragment, { children: [S, R] })), (C[89] = S), (C[90] = R), (C[91] = E))
          : (E = C[91]),
        E
      )
    }
    function er(e) {
      return (0, i.jsx)(T.u, { permission: "unknown" === e ? void 0 : e })
    }
    function et(e) {
      return "viewer" === e || "editor" === e
    }
    function ei() {
      return !1
    }
    function ea(e) {
      return "effective" !== e.kind || !0 !== e.result.partial_failure
    }
    function en(e) {
      return "library_folder" === e.resource.resource_type
    }
    function el(e) {
      return "library_folder" === e.resource.resource_type
    }
    function es(e) {
      let r,
        t,
        n,
        s,
        o,
        c,
        d,
        u,
        m,
        h,
        f,
        _,
        g,
        v,
        b,
        x,
        I = (0, a.c)(40),
        { isPending: A, personName: w, preview: S, onCancel: R, onConfirm: C } = e
      I[0] !== S.affects_other_descendants || I[1] !== S.mutations
        ? ((r = S.affects_other_descendants || S.mutations.some(ed)),
          (I[0] = S.affects_other_descendants),
          (I[1] = S.mutations),
          (I[2] = r))
        : (r = I[2])
      let j = r
      I[3] !== S.affects_other_group_members || I[4] !== S.mutations
        ? ((t = S.affects_other_group_members || S.mutations.some(ec)),
          (I[3] = S.affects_other_group_members),
          (I[4] = S.mutations),
          (I[5] = t))
        : (t = I[5])
      let T = t
      return (
        I[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, i.jsx)(p.A, {
              id: "librarySharing.collaborators.confirmTitle",
              defaultMessage: "Change shared access?",
            })),
            (I[6] = n))
          : (n = I[6]),
        I[7] !== w
          ? ((s =
              null == w
                ? (0, i.jsx)(p.A, {
                    id: "librarySharing.collaborators.confirmDescriptionUnknown",
                    defaultMessage: "Review all access changes before continuing",
                  })
                : (0, i.jsx)(p.A, {
                    id: "librarySharing.collaborators.confirmDescription",
                    defaultMessage: "Review all access changes for {personName} before continuing",
                    values: { personName: w },
                  })),
            (I[7] = w),
            (I[8] = s))
          : (s = I[8]),
        I[9] !== A || I[10] !== C
          ? ((o = () => {
              A || C()
            }),
            (I[9] = A),
            (I[10] = C),
            (I[11] = o))
          : (o = I[11]),
        I[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, i.jsx)(p.A, { id: "librarySharing.collaborators.cancelChange", defaultMessage: "Cancel" })),
            (I[12] = c))
          : (c = I[12]),
        I[13] !== A
          ? ((d = (0, i.jsx)(W.a.Close, {
              children: (0, i.jsx)(l.$, { size: "xl", color: "secondary", disabled: A, type: "button", children: c }),
            })),
            (I[13] = A),
            (I[14] = d))
          : (d = I[14]),
        I[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, i.jsx)(p.A, { id: "librarySharing.collaborators.stageChange", defaultMessage: "Continue" })),
            (I[15] = u))
          : (u = I[15]),
        I[16] !== A
          ? ((m = (0, i.jsx)(l.$, {
              size: "xl",
              color: "primary",
              disabled: A,
              loading: A,
              type: "submit",
              children: u,
            })),
            (I[16] = A),
            (I[17] = m))
          : (m = I[17]),
        I[18] !== d || I[19] !== m
          ? ((h = (0, i.jsxs)(i.Fragment, { children: [d, m] })), (I[18] = d), (I[19] = m), (I[20] = h))
          : (h = I[20]),
        I[21] !== S.mutations ? ((f = S.mutations.map(eo)), (I[21] = S.mutations), (I[22] = f)) : (f = I[22]),
        I[23] !== f
          ? ((_ = (0, i.jsx)("ul", { className: "flex flex-col gap-2", children: f })), (I[23] = f), (I[24] = _))
          : (_ = I[24]),
        I[25] !== j
          ? ((g = j
              ? (0, i.jsx)("p", {
                  className: "text-sm text-codex-description",
                  children: (0, i.jsx)(p.A, {
                    id: "librarySharing.collaborators.descendantImpact",
                    defaultMessage: "This also changes access to other files and folders inside the affected folders",
                  }),
                })
              : null),
            (I[25] = j),
            (I[26] = g))
          : (g = I[26]),
        I[27] !== T
          ? ((v = T
              ? (0, i.jsx)("p", {
                  className: "text-sm text-codex-description",
                  children: (0, i.jsx)(p.A, {
                    id: "librarySharing.collaborators.groupImpact",
                    defaultMessage: "This also changes access for other people in the affected groups",
                  }),
                })
              : null),
            (I[27] = T),
            (I[28] = v))
          : (v = I[28]),
        I[29] !== _ || I[30] !== g || I[31] !== v
          ? ((b = (0, i.jsx)(y.OO, {
              children: (0, i.jsxs)("div", { className: "flex flex-col gap-3", children: [_, g, v] }),
            })),
            (I[29] = _),
            (I[30] = g),
            (I[31] = v),
            (I[32] = b))
          : (b = I[32]),
        I[33] !== A || I[34] !== R || I[35] !== h || I[36] !== b || I[37] !== s || I[38] !== o
          ? ((x = (0, i.jsx)(E.Ic, {
              title: n,
              subtitle: s,
              isDismissalDisabled: A,
              onClose: R,
              onSubmit: o,
              footer: h,
              children: b,
            })),
            (I[33] = A),
            (I[34] = R),
            (I[35] = h),
            (I[36] = b),
            (I[37] = s),
            (I[38] = o),
            (I[39] = x))
          : (x = I[39]),
        x
      )
    }
    function eo(e) {
      let r = "library_folder" === e.resource.resource_type ? "folder" : "file"
      return (0, i.jsxs)(
        "li",
        {
          className: "flex justify-between gap-3",
          children: [
            (0, i.jsx)("span", {
              className: "min-w-0 truncate",
              children:
                e.resource_display_name ??
                (0, i.jsx)(p.A, { id: "librarySharing.collaborators.unnamedResource", defaultMessage: "Shared item" }),
            }),
            (0, i.jsxs)("span", {
              className: "shrink-0 text-codex-description",
              children: [
                (0, i.jsx)(eu, { roleId: e.old_role_id, resourceKind: r }),
                (0, i.jsx)("span", {
                  className: "mx-1",
                  children: (0, i.jsx)(p.A, {
                    id: "librarySharing.collaborators.roleChangeSeparator",
                    defaultMessage: "\u2192",
                  }),
                }),
                (0, i.jsx)(eu, { roleId: e.new_role_id, resourceKind: r }),
              ],
            }),
          ],
        },
        `${e.resource.resource_type}:${e.resource.resource_id}:${(0, D.nD)(e.principal)}`,
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
        t = (0, a.c)(3),
        { resourceKind: n, roleId: l } = e
      return (
        t[0] !== n || t[1] !== l
          ? ((r =
              null == l
                ? (0, i.jsx)(p.A, { id: "librarySharing.collaborators.noAccess", defaultMessage: "No access" })
                : (0, i.jsx)(T.u, { permission: (0, D.rP)(l, n) })),
            (t[0] = n),
            (t[1] = l),
            (t[2] = r))
          : (r = t[2]),
        r
      )
    }
    function ep(e, r) {
      let t = "direct" === e.kind ? e.share.recipient : e.preview.recipient,
        i = "direct" === e.kind ? e.desiredRole : e.preview.desired_role,
        a = "direct" === e.kind ? (0, D.rP)(e.share.role_id, r.resourceKind) : (e.preview.current_role ?? void 0),
        n = "CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_USER"
      return (
        "recipient_type" in t && "email" === t.recipient_type
          ? (n = "CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_EMAIL")
          : "principal_type" in t &&
            "group" === t.principal_type &&
            (n = "CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_GROUP"),
        {
          action:
            null == i
              ? "CHATGPT_FILE_LIBRARY_SHARING_ACTION_REMOVE_COLLABORATOR"
              : "CHATGPT_FILE_LIBRARY_SHARING_ACTION_CHANGE_ROLE",
          recipientKind: n,
          recipientCount: 1,
          role: (0, F.qT)(i ?? a),
          previousRole: (0, F.qT)("direct" === e.kind && null == i ? void 0 : a),
        }
      )
    }
    var em = t("Yqxh"),
      eh = t("aRS8"),
      ef = t("AEhU")
    function e_(e) {
      let r,
        t,
        n,
        l,
        o,
        c,
        h,
        f,
        _,
        v,
        x,
        A,
        w,
        S = (0, a.c)(59),
        {
          account: R,
          api: E,
          sharingScope: C,
          sharingState: T,
          shares: L,
          effectiveAccess: M,
          analytics: q,
          canInvite: N,
          disabled: K,
          isCurrentSession: P,
          onStageChange: G,
        } = e,
        H = (0, d.gh)(I.u),
        U = (0, s.jE)(),
        B = "workspace" === R.structure
      S[0] !== B ? ((r = { enabled: B }), (S[0] = B), (S[1] = r)) : (r = S[1])
      let { data: Y, isError: z } = (0, d._U)(m.Jk, C.accountId, r)
      S[2] !== R || S[3] !== Y || S[4] !== z
        ? ((t = (0, j.V)(R, Y, z)), (S[2] = R), (S[3] = Y), (S[4] = z), (S[5] = t))
        : (t = S[5])
      let Q = t,
        { canSearchMembers: $ } = Q,
        W = null == L ? void 0 : (0, D.q4)(L.allowed_roles, C.resourceKind),
        [V, X] = (0, u.useState)()
      S[6] === Symbol.for("react.memo_cache_sentinel") ? ((n = []), (S[6] = n)) : (n = S[6])
      let [Z, J] = (0, u.useState)(n),
        ee = (0, em.x)(Z.some(eA), V),
        er = W?.includes(ee) ? ee : W?.[0],
        [et, ei] = (0, u.useState)("")
      S[7] !== M || S[8] !== Z || S[9] !== L || S[10] !== T
        ? (({ existingPrincipalKeys: o, existingEmails: l } = (0, ef.Hd)(T, L, M)),
          (c = (0, ef.Go)(Z, l, o)),
          (S[7] = M),
          (S[8] = Z),
          (S[9] = L),
          (S[10] = T),
          (S[11] = l),
          (S[12] = o),
          (S[13] = c))
        : ((l = S[11]), (o = S[12]), (c = S[13]))
      let ea = c
      S[14] !== W
        ? ((h = function (e, r) {
            let { recipient: t } = e,
              i = (0, em.x)("principal" === t.recipient_type && "group" === t.principal_type, r)
            return W?.includes(i) ? i : W?.[0]
          }),
          (S[14] = W),
          (S[15] = h))
        : (h = S[15])
      let en = h
      ;(S[16] !== C ? ((f = (0, D.X1)(C, "state")), (S[16] = C), (S[17] = f)) : (f = S[17]),
        S[18] !== E ||
        S[19] !== N ||
        S[20] !== $ ||
        S[21] !== l ||
        S[22] !== o ||
        S[23] !== en ||
        S[24] !== P ||
        S[25] !== B ||
        S[26] !== C.resourceKind
          ? ((_ = (e) => {
              let { invitees: r, role: t, explicitRole: i } = e,
                a = P() && N && (!B || $) && r.every(eI) && !(0, ef.Go)(r, l, o)
              return Promise.allSettled(
                r.map(async (e) => {
                  let { recipient: r } = e,
                    t = en(e, i)
                  if (!a || null == t) throw Error("Library invitations are no longer permitted")
                  return E.createShare({ recipient: r, roleId: D.F2[C.resourceKind][t] })
                }),
              ).then((e) => ({ results: e, role: t }))
            }),
            (S[18] = E),
            (S[19] = N),
            (S[20] = $),
            (S[21] = l),
            (S[22] = o),
            (S[23] = en),
            (S[24] = P),
            (S[25] = B),
            (S[26] = C.resourceKind),
            (S[27] = _))
          : (_ = S[27]),
        S[28] !== q || S[29] !== P || S[30] !== H
          ? ((v = (e) => {
              let { invitees: r, role: t } = e,
                i = crypto.randomUUID()
              return (
                P() &&
                  (0, F.aS)(H, q, {
                    action: "CHATGPT_FILE_LIBRARY_SHARING_ACTION_INVITE",
                    outcome: "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_STARTED",
                    operationId: i,
                    recipientCount: r.length,
                    recipientKind: (0, F.r6)(r.map(ex)),
                    role: (0, F.qT)(t),
                  }),
                i
              )
            }),
            (S[28] = q),
            (S[29] = P),
            (S[30] = H),
            (S[31] = v))
          : (v = S[31]))
      let { mutateAsync: el, isPending: es } = (0, k.n)({
          mutationKey: f,
          networkMode: "always",
          retry: !1,
          mutationFn: _,
          onMutate: v,
          onSuccess: async (e, r, t) => {
            let { results: a, role: n } = e,
              { invitees: l, explicitRole: s } = r
            if (!P()) return
            let o = new Set(a.flatMap((e, r) => ("rejected" === e.status ? [l[r].id] : []))),
              c = a.flatMap((e, r) =>
                "fulfilled" === e.status
                  ? [
                      {
                        ...e.value,
                        recipient_display_name: e.value.recipient_display_name ?? l[r].label,
                        recipient_email: e.value.recipient_email ?? l[r].secondaryLabel,
                      },
                    ]
                  : [],
              ),
              d = "file" === C.resourceKind && c.length > 0
            if (
              (d &&
                (await (async function (e, r) {
                  if ("file" !== r.resourceKind) return
                  let t = {
                      queryKey: ["library-api", r.accountId],
                      predicate: ({ queryKey: e }) => e[2] === r.accountUserId && "browse" === e[3],
                    },
                    i = e.cancelQueries(t)
                  ;(e.setQueriesData(t, (e) => {
                    if (null == e) return e
                    let t = !1,
                      i = e.pages.map((e) => ({
                        ...e,
                        items: e.items.map((e) =>
                          "file" !== e.node.kind || e.node.id !== r.libraryFileId || !0 === e.node.is_shared
                            ? e
                            : ((t = !0), { ...e, node: { ...e.node, is_shared: !0 } }),
                        ),
                      }))
                    return t ? { ...e, pages: i } : e
                  }),
                    await i)
                })(U, C)),
              await U.cancelQueries({ queryKey: (0, D.X1)(C, "shares"), exact: !0 }),
              !P())
            )
              return
            ;(U.setQueryData((0, D.X1)(C, "shares"), (e) =>
              null == e ? e : { ...e, shares: [...new Map([...e.shares, ...c].map(eb)).values()] },
            ),
              O(U, C, { includeShares: 0 === c.length, preserveLibraryBrowse: d }),
              X(o.size > 0 ? s : void 0),
              ei(""),
              ec(
                l.filter((e) => o.has(e.id)),
                s,
              ))
            let u = "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_SUCCEEDED"
            o.size > 0 &&
              (u =
                0 === c.length
                  ? "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_FAILED"
                  : "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_PARTIAL")
            let m = a.find(ev)
            ;((0, F.aS)(H, q, {
              action: "CHATGPT_FILE_LIBRARY_SHARING_ACTION_INVITE",
              outcome: u,
              operationId: t,
              recipientCount: l.length,
              recipientKind: (0, F.r6)(l.map(ey)),
              succeededRecipientCount: c.length,
              failedRecipientCount: o.size,
              role: (0, F.qT)(n),
              error: (0, F.GE)(m?.reason instanceof Error ? m.reason : void 0),
            }),
              0 === o.size
                ? H.get(b.Id).success(
                    (0, i.jsx)(p.A, {
                      id: "librarySharing.invite.sent",
                      defaultMessage: "{count, plural, one {Invitation sent} other {Invitations sent}}",
                      values: { count: c.length },
                    }),
                  )
                : H.get(b.Id).danger(
                    (0, i.jsx)(p.A, {
                      id: "librarySharing.invite.failed",
                      defaultMessage:
                        "{count, plural, one {One invitation failed} other {# invitations failed}}. Failed recipients are still selected so you can try again",
                      values: { count: o.size },
                    }),
                    { errorAnalytics: { toastId: "librarySharing.invite.failed" } },
                  ))
          },
        }),
        eo = K || es
      function ec(e, r) {
        ;(J(e),
          G(
            "invite",
            0 === e.length
              ? null
              : {
                  kind: "invite",
                  invitees: e,
                  save: async () => {
                    try {
                      let t = e.map((e) => en(e, r ?? V)),
                        { results: i } = await el({
                          invitees: e,
                          explicitRole: r ?? V,
                          role: t.every((e) => e === t[0]) ? t[0] : void 0,
                        })
                      return i.every(eg)
                    } catch {
                      return !1
                    }
                  },
                },
          ))
      }
      return (
        S[32] !== R.structure ||
        S[33] !== W ||
        S[34] !== E ||
        S[35] !== $ ||
        S[36] !== eo ||
        S[37] !== l ||
        S[38] !== o ||
        S[39] !== ea ||
        S[40] !== et ||
        S[41] !== Q ||
        S[42] !== er ||
        S[43] !== Z ||
        S[44] !== X ||
        S[45] !== L ||
        S[46] !== C.accountId ||
        S[47] !== C.accountUserId ||
        S[48] !== T ||
        S[49] !== ec
          ? ((x =
              ("personal" === R.structure || $) && (null == W || null != er)
                ? (0, i.jsxs)(y.OO, {
                    children: [
                      (0, i.jsx)(eh.h, {
                        accountId: C.accountId,
                        currentPrincipalId: C.accountUserId,
                        currentEmail: T.viewer.email ?? void 0,
                        ...Q,
                        disabled: eo,
                        existingPrincipalKeys: o,
                        existingEmails: l,
                        shares: L,
                        query: et,
                        onQueryChange: ei,
                        selected: Z,
                        resolveRecipient: E.resolveRecipient,
                        onChange: ec,
                        role: er,
                        allowedRoles: W,
                        onRoleChange: (e) => {
                          ;(X(e), ec(Z, e))
                        },
                      }),
                      ea
                        ? (0, i.jsx)("p", {
                            className: "text-sm text-danger",
                            role: "alert",
                            children: (0, i.jsx)(p.A, {
                              id: "librarySharing.invite.alreadyAdded",
                              defaultMessage: "This person already has access or is selected",
                            }),
                          })
                        : null,
                    ],
                  })
                : null),
            (S[32] = R.structure),
            (S[33] = W),
            (S[34] = E),
            (S[35] = $),
            (S[36] = eo),
            (S[37] = l),
            (S[38] = o),
            (S[39] = ea),
            (S[40] = et),
            (S[41] = Q),
            (S[42] = er),
            (S[43] = Z),
            (S[44] = X),
            (S[45] = L),
            (S[46] = C.accountId),
            (S[47] = C.accountUserId),
            (S[48] = T),
            (S[49] = ec),
            (S[50] = x))
          : (x = S[50]),
        S[51] !== B || S[52] !== U || S[53] !== z || S[54] !== C.accountId
          ? ((A =
              B && z
                ? (0, i.jsx)(y.OO, {
                    children: (0, i.jsx)(g.l, {
                      type: "error",
                      role: "alert",
                      content: (0, i.jsx)(p.A, {
                        id: "librarySharing.access.incomplete",
                        defaultMessage: "Couldn't load all access details. Some sharing actions are unavailable",
                      }),
                      primaryCtaText: (0, i.jsx)(p.A, { id: "librarySharing.retry", defaultMessage: "Retry" }),
                      onPrimaryCtaClick: () => {
                        U.invalidateQueries({ queryKey: ["accounts", "settings", C.accountId] })
                      },
                    }),
                  })
                : null),
            (S[51] = B),
            (S[52] = U),
            (S[53] = z),
            (S[54] = C.accountId),
            (S[55] = A))
          : (A = S[55]),
        S[56] !== x || S[57] !== A
          ? ((w = (0, i.jsxs)(i.Fragment, { children: [x, A] })), (S[56] = x), (S[57] = A), (S[58] = w))
          : (w = S[58]),
        w
      )
    }
    function eg(e) {
      return "fulfilled" === e.status
    }
    function ey(e) {
      let { recipient: r } = e
      return r
    }
    function ev(e) {
      return "rejected" === e.status
    }
    function eb(e) {
      return [e.share_id, e]
    }
    function ex(e) {
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
    var ew = t("PItM")
    function eS(e) {
      let r,
        t,
        n,
        l,
        o,
        c,
        m,
        h,
        f,
        _,
        g,
        y,
        x,
        A,
        w = (0, a.c)(79),
        {
          allowedRoles: R,
          analytics: E,
          api: C,
          canInitiateSharing: j,
          canManage: L,
          disabled: q,
          permissionsPending: N,
          hasIndependentEditorAccess: K,
          isCurrentSession: P,
          isWorkspace: G,
          sharingScope: H,
          sharingState: U,
          workspaceName: B,
          onStageChange: Y,
        } = e,
        z = void 0 !== N && N,
        Q = (0, d.gh)(I.u),
        W = (0, s.jE)(),
        X = (0, d.Ul)(!!j && $.Uw)
      w[0] !== H || w[1] !== U
        ? ((r = (0, D.Sq)({ sharingState: U, scope: H })), (w[0] = H), (w[1] = U), (w[2] = r))
        : (r = w[2])
      let Z = r,
        [J, ee] = (0, u.useState)(null),
        er = J ?? Z
      w[3] !== K || w[4] !== H.accountUserId || w[5] !== H.resourceKind
        ? ((t = (e) =>
            e.owner.principal.principal_id !== H.accountUserId &&
            "workspace" === e.link_access &&
            e.role_id === D.F2[H.resourceKind].editor &&
            !K),
          (w[3] = K),
          (w[4] = H.accountUserId),
          (w[5] = H.resourceKind),
          (w[6] = t))
        : (t = w[6])
      let et = t
      w[7] !== R || w[8] !== X || w[9] !== L || w[10] !== G || w[11] !== et || w[12] !== Z || w[13] !== U
        ? ((n = L && G && null != Z && R?.includes("viewer") === !0 && !et(U) && (X || "workspace" === Z.mode)),
          (w[7] = R),
          (w[8] = X),
          (w[9] = L),
          (w[10] = G),
          (w[11] = et),
          (w[12] = Z),
          (w[13] = U),
          (w[14] = n))
        : (n = w[14])
      let ei = n,
        ea = R?.filter(ej)
      ;(w[15] !== H ? ((l = (0, D.X1)(H, "state")), (w[15] = H), (w[16] = l)) : (l = w[16]),
        w[17] !== R ||
        w[18] !== C ||
        w[19] !== ei ||
        w[20] !== j ||
        w[21] !== P ||
        w[22] !== W ||
        w[23] !== et ||
        w[24] !== Q ||
        w[25] !== H ||
        w[26] !== U
          ? ((o = (e) => {
              let { next: r, observedState: t } = e
              if (!P() || !ei || ("workspace" === r.mode && (!j || !Q.get($.Uw) || !R?.includes(r.role))))
                throw Error("Library link access management is not permitted")
              if (et(W.getQueryData((0, D.X1)(H, "state")) ?? U))
                throw Error("Library workspace access requires the owner")
              return C.updateLinkAccess({
                expectedOwner: t.owner.principal,
                linkAccess: r,
                expectedInvitationId: "workspace" === t.link_access ? (t.workspace_invitation_id ?? void 0) : void 0,
                expectedRoleId:
                  "collaborators_only" === r.mode && "workspace" === t.link_access ? (t.role_id ?? void 0) : void 0,
              })
            }),
            (w[17] = R),
            (w[18] = C),
            (w[19] = ei),
            (w[20] = j),
            (w[21] = P),
            (w[22] = W),
            (w[23] = et),
            (w[24] = Q),
            (w[25] = H),
            (w[26] = U),
            (w[27] = o))
          : (o = w[27]),
        w[28] !== E || w[29] !== P || w[30] !== W || w[31] !== Q || w[32] !== H
          ? ((c = async (e) => {
              let { next: r, observedState: t } = e
              await W.cancelQueries({ queryKey: (0, D.X1)(H, "state") })
              let i = {
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
                  "workspace" === t.link_access ? (0, D.rP)(t.role_id ?? "", H.resourceKind) : void 0,
                ),
              }
              return (P() && (0, F.aS)(Q, E, { ...i, outcome: "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_STARTED" }), i)
            }),
            (m = (e, r, t) => {
              P() &&
                (W.setQueryData((0, D.X1)(H, "state"), e),
                (0, F.aS)(Q, E, { ...t, outcome: "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_SUCCEEDED" }),
                Q.get(b.Id).success(
                  (0, i.jsx)(p.A, { id: "librarySharing.link.saved", defaultMessage: "Link access updated" }),
                ),
                O(W, H, { preserveState: !0 }))
            }),
            (w[28] = E),
            (w[29] = P),
            (w[30] = W),
            (w[31] = Q),
            (w[32] = H),
            (w[33] = c),
            (w[34] = m))
          : ((c = w[33]), (m = w[34])),
        w[35] !== E || w[36] !== P || w[37] !== Y || w[38] !== W || w[39] !== Q || w[40] !== H
          ? ((h = async (e, r, t) => {
              let { observedState: a } = r
              if (!P() || (await O(W, H), !P())) return
              let n = W.getQueryData((0, D.X1)(H, "state")),
                l =
                  (e instanceof M.FetchError && 409 === e.responseStatus) ||
                  (null != n &&
                    (n.owner.principal.principal_id !== a.owner.principal.principal_id ||
                      n.link_access !== a.link_access ||
                      n.workspace_invitation_id !== a.workspace_invitation_id ||
                      n.role_id !== a.role_id))
              ;(l && (ee(null), Y("link", null)),
                (0, F.aS)(Q, E, {
                  ...t,
                  action: "CHATGPT_FILE_LIBRARY_SHARING_ACTION_CHANGE_LINK_ACCESS",
                  outcome: "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_FAILED",
                  error: (0, F.GE)(e),
                }),
                l
                  ? Q.get(b.Id).danger(
                      (0, i.jsx)(p.A, {
                        id: "librarySharing.link.conflict",
                        defaultMessage: "Link access changed. Choose your setting again before saving",
                      }),
                      { errorAnalytics: { toastId: "linkAccess.conflict" } },
                    )
                  : Q.get(b.Id).danger(
                      e instanceof M.FetchError && "library_manage_access_would_lose_permission" === e.errorCode
                        ? (0, i.jsx)(p.A, {
                            id: "librarySharing.link.wouldLoseAccess",
                            defaultMessage:
                              "You can\u2019t make a change that reduces your own access. Ask the owner to make it.",
                          })
                        : (0, i.jsx)(p.A, {
                            id: "librarySharing.link.failed",
                            defaultMessage: "Couldn't update link access. Try again",
                          }),
                      { errorAnalytics: { toastId: "linkAccess.onError" } },
                    ))
            }),
            (w[35] = E),
            (w[36] = P),
            (w[37] = Y),
            (w[38] = W),
            (w[39] = Q),
            (w[40] = H),
            (w[41] = h))
          : (h = w[41]),
        w[42] !== l || w[43] !== o || w[44] !== c || w[45] !== m || w[46] !== h
          ? ((f = {
              mutationKey: l,
              networkMode: "always",
              retry: !1,
              mutationFn: o,
              onMutate: c,
              onSuccess: m,
              onError: h,
            }),
            (w[42] = l),
            (w[43] = o),
            (w[44] = c),
            (w[45] = m),
            (w[46] = h),
            (w[47] = f))
          : (f = w[47]))
      let { mutateAsync: en, isPending: el } = (0, k.n)(f)
      w[48] !== ei || w[49] !== q || w[50] !== P || w[51] !== en || w[52] !== Y || w[53] !== Z || w[54] !== U
        ? ((_ = function (e) {
            if (!P() || q || !ei) return
            let r = e.mode === Z?.mode && ("workspace" !== e.mode || (Z?.mode === "workspace" && e.role === Z.role))
            ;(ee(r ? null : e),
              Y(
                "link",
                r
                  ? null
                  : { kind: "link", save: () => en({ next: e, observedState: U }).then(() => (ee(null), !0), eC) },
              ))
          }),
          (w[48] = ei),
          (w[49] = q),
          (w[50] = P),
          (w[51] = en),
          (w[52] = Y),
          (w[53] = Z),
          (w[54] = U),
          (w[55] = _))
        : (_ = w[55])
      let es = _,
        eo = S.p
      w[56] !== ei ||
      w[57] !== X ||
      w[58] !== q ||
      w[59] !== el ||
      w[60] !== er ||
      w[61] !== z ||
      w[62] !== Z ||
      w[63] !== H.accountId ||
      w[64] !== es ||
      w[65] !== B
        ? ((g =
            null != er
              ? (0, i.jsx)(ew.d, {
                  disabled: !ei || q || z || el,
                  options: [
                    { value: "collaborators_only", mode: "restricted", icon: (0, i.jsx)(v.esp, {}) },
                    { value: "workspace", mode: "workspace", icon: (0, i.jsx)(v.TGw, {}), hidden: !X },
                  ],
                  workspaceName: B,
                  value: er.mode,
                  onChange:
                    ei || z
                      ? (e) => {
                          q ||
                            el ||
                            e === er.mode ||
                            ("collaborators_only" === e
                              ? es({ mode: e })
                              : X &&
                                es({
                                  mode: e,
                                  role: Z?.mode === "workspace" ? Z.role : "viewer",
                                  workspaceId: H.accountId,
                                }))
                        }
                      : void 0,
                })
              : (0, i.jsx)("span", {
                  className: "text-tertiary",
                  children: (0, i.jsx)(p.A, {
                    id: "librarySharing.link.unavailable",
                    defaultMessage: "Link access unavailable",
                  }),
                })),
          (w[56] = ei),
          (w[57] = X),
          (w[58] = q),
          (w[59] = el),
          (w[60] = er),
          (w[61] = z),
          (w[62] = Z),
          (w[63] = H.accountId),
          (w[64] = es),
          (w[65] = B),
          (w[66] = g))
        : (g = w[66])
      let ec =
        er?.mode === "workspace" && ei && X && null != ea && ea.length > 1
          ? (0, i.jsx)(V.e, {
              indicatorVariant: "checkmark",
              disabled: q || el,
              options: ea.map(eE),
              renderLabel: eR,
              value: er.role,
              variant: "inline",
              onChange: (e) => {
                q || el || !X || ("viewer" !== e && "editor" !== e) || e === er.role || es({ ...er, role: e })
              },
            })
          : null
      return (
        w[67] !== ei || w[68] !== X || w[69] !== er || w[70] !== ea
          ? ((y =
              er?.mode !== "workspace" || (ei && X && null != ea && !(ea.length < 2))
                ? null
                : (0, i.jsx)("span", {
                    className: "pe-2 text-sm text-tertiary",
                    children: (0, i.jsx)(T.u, { permission: er.role }),
                  })),
            (w[67] = ei),
            (w[68] = X),
            (w[69] = er),
            (w[70] = ea),
            (w[71] = y))
          : (y = w[71]),
        w[72] !== g || w[73] !== ec || w[74] !== y
          ? ((x = (0, i.jsxs)("div", {
              className: "flex min-h-9 items-center justify-between gap-3 text-sm",
              children: [g, ec, y],
            })),
            (w[72] = g),
            (w[73] = ec),
            (w[74] = y),
            (w[75] = x))
          : (x = w[75]),
        w[76] !== eo || w[77] !== x
          ? ((A = (0, i.jsx)(eo, { kind: "link", children: x })), (w[76] = eo), (w[77] = x), (w[78] = A))
          : (A = w[78]),
        A
      )
    }
    function eR(e) {
      return (0, i.jsx)(T.u, { permission: e })
    }
    function eE(e) {
      return { value: e }
    }
    function eC() {
      return !1
    }
    function ej(e) {
      return "viewer" === e || "editor" === e
    }
    var eT = t("eErK"),
      eL = t("TjgH")
    function eM(e) {
      let r,
        t,
        n,
        c,
        f,
        _,
        v,
        x,
        A,
        R,
        E,
        C,
        M,
        N,
        P,
        G,
        H,
        U,
        B,
        Y,
        z,
        Q,
        $ = (0, a.c)(91),
        {
          account: W,
          analytics: V,
          api: X,
          canRequest: Z,
          children: J,
          disabled: ee,
          isCurrentSession: er,
          roster: et,
          renderDialog: ei,
          sharingScope: ea,
          sharingState: en,
        } = e,
        el = (0, d.gh)(I.u),
        es = (0, s.jE)()
      $[0] !== V.shareSessionId || $[1] !== es || $[2] !== ea
        ? ((r = () => (0, K.X)(es, ea, "requester-access-requests", V.shareSessionId)),
          ($[0] = V.shareSessionId),
          ($[1] = es),
          ($[2] = ea),
          ($[3] = r))
        : (r = $[3])
      let [eo] = (0, u.useState)(r),
        ec = "workspace" === W.structure,
        ed = ec && Z
      $[4] !== ed ? ((t = { enabled: ed }), ($[4] = ed), ($[5] = t)) : (t = $[5])
      let { data: eu, isError: ep } = (0, d._U)(m.Jk, ea.accountId, t)
      $[6] !== W || $[7] !== eu || $[8] !== ep
        ? ((n = (0, j.V)(W, eu, ep)), ($[6] = W), ($[7] = eu), ($[8] = ep), ($[9] = n))
        : (n = $[9])
      let em = n,
        { canSearchMembers: e_ } = em,
        eg = Z && (!ec || e_)
      ;($[10] !== eo || $[11] !== ea
        ? ((c = [...(0, D.X1)(ea, "requester-access-requests"), "pages", eo]), ($[10] = eo), ($[11] = ea), ($[12] = c))
        : (c = $[12]),
        $[13] !== X
          ? ((f = (e) => {
              let { pageParam: r, signal: t } = e
              return X.getRequesterAccessRequests({ cursor: r, signal: t })
            }),
            ($[13] = X),
            ($[14] = f))
          : (f = $[14]),
        $[15] !== eg || $[16] !== c || $[17] !== f
          ? ((_ = {
              enabled: eg,
              queryKey: c,
              queryFn: f,
              initialPageParam: null,
              getNextPageParam: eQ,
              staleTime: L.D.THIRTY_SECONDS,
              retry: !1,
            }),
            ($[15] = eg),
            ($[16] = c),
            ($[17] = f),
            ($[18] = _))
          : (_ = $[18]))
      let {
        data: ey,
        isError: ev,
        isFetching: eb,
        isSuccess: ex,
        hasNextPage: eI,
        fetchNextPage: eA,
        refetch: ew,
      } = (0, q.q)(_)
      $[19] !== eg || $[20] !== ey || $[21] !== ev || $[22] !== ex || $[23] !== en.owner.principal
        ? ((v =
            eg &&
            ex &&
            !ev &&
            ey?.pages.every((e) =>
              e.requests.every((e) => (0, D.nD)(e.resource_owner) === (0, D.nD)(en.owner.principal)),
            )
              ? ey
              : void 0),
          ($[19] = eg),
          ($[20] = ey),
          ($[21] = ev),
          ($[22] = ex),
          ($[23] = en.owner.principal),
          ($[24] = v))
        : (v = $[24])
      let eS = v,
        eR = eS?.pages.flatMap(ez)
      $[25] !== eS ? ((x = null != eS && eS.pages.at(-1)?.next_cursor == null), ($[25] = eS), ($[26] = x)) : (x = $[26])
      let eE = x,
        eC = new Map(eS?.pages.flatMap(eB)),
        ej = et?.owner.principal_id === en.owner.principal.principal_id,
        eT =
          ej && et?.collaborators.some(eU)
            ? (0, D.b3)(
                eR?.flatMap((e) =>
                  e.recipients.some(
                    (r) =>
                      "user" === r.principal_type &&
                      "satisfied" === (0, D.SK)(e, r) &&
                      !et.collaborators.some((e) => {
                        let { principal: t } = e
                        return (0, D.nD)(t) === (0, D.nD)(r)
                      }),
                  )
                    ? [e.request_id]
                    : [],
                ) ?? [],
              )
            : [],
        {
          data: eM,
          isError: eY,
          isFetching: e$,
          isSuccess: eW,
        } = (0, o.I)({
          enabled: eg && eT.length > 0,
          queryKey: (0, D.X1)(ea, "collaborators", eT),
          queryFn: (e) => {
            let { signal: r } = e
            return X.getCollaborators({ signal: r, accessRequestIds: eT })
          },
          staleTime: L.D.THIRTY_SECONDS,
          retry: !1,
        }),
        eV = ej ? et : void 0
      eT.length > 0 && (eV = eW && !eY && eM?.owner.principal_id === en.owner.principal.principal_id ? eM : void 0)
      let [eX, eZ] = (0, u.useState)("viewer")
      $[27] === Symbol.for("react.memo_cache_sentinel") ? ((A = []), ($[27] = A)) : (A = $[27])
      let [eJ, e0] = (0, u.useState)(A),
        [e1, e2] = (0, u.useState)("")
      $[28] === Symbol.for("react.memo_cache_sentinel") ? ((R = []), ($[28] = R)) : (R = $[28])
      let [e3, e4] = (0, u.useState)(R),
        [e5, e6] = (0, u.useState)(eH),
        e7 = [...(eR ?? []), ...e3],
        e8 = e7.flatMap((e) => (e.requested_role_id === D.F2[ea.resourceKind][eX] ? e.recipients : [])),
        e9 = new Set([
          (0, D.nD)(en.owner.principal),
          (0, D.nD)(en.viewer.principal),
          ...(eV?.collaborators.map(eG) ?? []),
          ...e8.map(D.nD),
        ]),
        re = new Set(
          [
            en.owner.email,
            en.viewer.email,
            ...(eV?.collaborators.map(eP) ?? []),
            ...e8.map((e) => eC.get((0, D.nD)(e))?.email),
            ...e5[eX],
          ].flatMap(eK),
        ),
        rr = (0, ef.Go)(eJ, re, e9)
      ;($[29] !== ea ? ((E = (0, D.X1)(ea, "state")), ($[29] = ea), ($[30] = E)) : (E = $[30]),
        $[31] !== X || $[32] !== eg || $[33] !== er
          ? ((C = (e) => {
              let { invitees: r, role: t } = e
              if (!er() || !eg) throw Error("Library access requests are not permitted")
              return X.createAccessRequest({ recipients: r.map(eO), role: t })
            }),
            ($[31] = X),
            ($[32] = eg),
            ($[33] = er),
            ($[34] = C))
          : (C = $[34]),
        $[35] !== V || $[36] !== er || $[37] !== el
          ? ((M = (e) => {
              let { invitees: r, role: t } = e,
                i = crypto.randomUUID()
              return (
                er() &&
                  (0, F.aS)(el, V, {
                    action: "CHATGPT_FILE_LIBRARY_SHARING_ACTION_REQUEST_ACCESS",
                    outcome: "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_STARTED",
                    operationId: i,
                    recipientCount: r.length,
                    recipientKind: (0, F.r6)(r.map(eD)),
                    role: (0, F.qT)(t),
                  }),
                i
              )
            }),
            ($[35] = V),
            ($[36] = er),
            ($[37] = el),
            ($[38] = M))
          : (M = $[38]),
        $[39] !== V || $[40] !== er || $[41] !== es || $[42] !== el || $[43] !== ea
          ? ((N = async (e, r, t) => {
              let { invitees: a, role: n } = r
              er() &&
                (e4((r) => [...r.filter((r) => r.request_id !== e.request_id || r.created_at !== e.created_at), e]),
                e6((e) => ({ ...e, [n]: new Set([...e[n], ...a.flatMap(eF)]) })),
                e0((e) => e.filter((e) => !a.some((r) => r.id === e.id))),
                (0, F.aS)(el, V, {
                  action: "CHATGPT_FILE_LIBRARY_SHARING_ACTION_REQUEST_ACCESS",
                  outcome: "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_SUCCEEDED",
                  operationId: t,
                  recipientCount: a.length,
                  recipientKind: (0, F.r6)(a.map(eN)),
                  succeededRecipientCount: a.length,
                  role: (0, F.qT)(n),
                }),
                el
                  .get(b.Id)
                  .success(
                    (0, i.jsx)(p.A, { id: "librarySharing.request.sent", defaultMessage: "Request sent to the owner" }),
                  ),
                await O(es, ea))
            }),
            ($[39] = V),
            ($[40] = er),
            ($[41] = es),
            ($[42] = el),
            ($[43] = ea),
            ($[44] = N))
          : (N = $[44]),
        $[45] !== V || $[46] !== er || $[47] !== el
          ? ((P = (e, r, t) => {
              let { invitees: a, role: n } = r
              er() &&
                ((0, F.aS)(el, V, {
                  action: "CHATGPT_FILE_LIBRARY_SHARING_ACTION_REQUEST_ACCESS",
                  outcome: "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_FAILED",
                  operationId: t,
                  recipientCount: a.length,
                  recipientKind: (0, F.r6)(a.map(ek)),
                  failedRecipientCount: a.length,
                  role: (0, F.qT)(n),
                  error: (0, F.GE)(e),
                }),
                el
                  .get(b.Id)
                  .danger(
                    (0, i.jsx)(p.A, {
                      id: "librarySharing.request.failed",
                      defaultMessage: "Couldn't send the access request. Try again",
                    }),
                    { errorAnalytics: { toastId: "librarySharing.request.failed" } },
                  ))
            }),
            ($[45] = V),
            ($[46] = er),
            ($[47] = el),
            ($[48] = P))
          : (P = $[48]),
        $[49] !== E || $[50] !== C || $[51] !== M || $[52] !== N || $[53] !== P
          ? ((G = {
              mutationKey: E,
              networkMode: "always",
              retry: !1,
              mutationFn: C,
              onMutate: M,
              onSuccess: N,
              onError: P,
            }),
            ($[49] = E),
            ($[50] = C),
            ($[51] = M),
            ($[52] = N),
            ($[53] = P),
            ($[54] = G))
          : (G = $[54]))
      let { mutate: rt, isPending: ri } = (0, k.n)(G),
        ra = ee || ri || eb || e$ || !eg || !eE || eV?.complete !== !0,
        rn = !ra && eJ.length > 0 && eJ.every(eq) && !rr,
        rl = new Map()
      for (let e of e7)
        for (let r of e.recipients) {
          let t = (0, D.d7)({ request: e, recipient: r }),
            i = rl.get(t)
          ;(null == i || "pending" === (0, D.SK)(i.request, r)) && rl.set(t, { request: e, recipient: r })
        }
      let rs = [...rl].filter((e) => {
          let [, r] = e,
            { recipient: t } = r
          return !eV?.collaborators.some((e) => {
            let { principal: r } = e
            return (0, D.nD)(r) === (0, D.nD)(t)
          })
        }),
        ro = eV?.collaborators.filter((e) => {
          let { principal: r } = e
          return (
            (0, D.nD)(r) !== (0, D.nD)(en.owner.principal) &&
            (0, D.nD)(r) !== (0, D.nD)(en.viewer.principal) &&
            !et?.collaborators.some((e) => (0, D.nD)(e.principal) === (0, D.nD)(r))
          )
        })
      ;($[55] !== rn || $[56] !== ra || $[57] !== er || $[58] !== rt || $[59] !== eX || $[60] !== eJ
        ? ((H = () => {
            er() && !ra && rn && (e2(""), rt({ invitees: eJ, role: eX }))
          }),
          ($[55] = rn),
          ($[56] = ra),
          ($[57] = er),
          ($[58] = rt),
          ($[59] = eX),
          ($[60] = eJ),
          ($[61] = H))
        : (H = $[61]),
        $[62] !== rn || $[63] !== eg || $[64] !== ri
          ? ((U = eg
              ? (0, i.jsx)(l.$, {
                  type: "submit",
                  color: "primary",
                  size: "xl",
                  disabled: !rn,
                  loading: ri,
                  children: (0, i.jsx)(p.A, { id: "librarySharing.requestInvite", defaultMessage: "Invite" }),
                })
              : null),
            ($[62] = rn),
            ($[63] = eg),
            ($[64] = ri),
            ($[65] = U))
          : (U = $[65]))
      let rc = eg
          ? (0, i.jsxs)(y.OO, {
              className: "gap-4",
              children: [
                (0, i.jsx)(g.l, {
                  variant: "privacyNotice",
                  title: (0, i.jsx)(p.A, {
                    id: "librarySharing.request.approvalRequired",
                    defaultMessage: "Owner must approve invites first",
                  }),
                  content:
                    "viewer" === (0, D.rP)(en.viewer.role_id, ea.resourceKind)
                      ? (0, i.jsx)(p.A, {
                          id: "librarySharing.request.viewerRestriction",
                          defaultMessage: "You\u2019re a viewer and can\u2019t manage access",
                        })
                      : (0, i.jsx)(p.A, {
                          id: "librarySharing.request.recipientRestriction",
                          defaultMessage: "You don\u2019t have permission to manage access",
                        }),
                }),
                (0, i.jsx)(eh.h, {
                  accountId: ea.accountId,
                  currentPrincipalId: ea.accountUserId,
                  currentEmail: en.viewer.email ?? void 0,
                  ...em,
                  disabled: ra,
                  existingPrincipalKeys: e9,
                  existingEmails: re,
                  query: e1,
                  onQueryChange: e2,
                  selected: eJ,
                  resolveRecipient: X.resolveRecipient,
                  onChange: e0,
                  role: eX,
                  allowedRoles: ["viewer", "editor"],
                  onRoleChange: (e) => {
                    "commenter" !== e && eZ(e)
                  },
                }),
                rr
                  ? (0, i.jsx)("p", {
                      className: "text-sm text-danger",
                      role: "alert",
                      children: (0, i.jsx)(p.A, {
                        id: "librarySharing.invite.alreadyAdded",
                        defaultMessage: "This person already has access or is selected",
                      }),
                    })
                  : null,
              ],
            })
          : null,
        rd =
          (eg && (ev || (eT.length > 0 && (eY || (eW && eV?.complete !== !0))))) || (ec && Z && ep)
            ? (0, i.jsx)(y.OO, {
                children: (0, i.jsx)(g.l, {
                  type: "error",
                  role: "alert",
                  content: (0, i.jsx)(p.A, {
                    id: "librarySharing.access.incomplete",
                    defaultMessage: "Couldn't load all access details. Some sharing actions are unavailable",
                  }),
                  primaryCtaText: (0, i.jsx)(p.A, { id: "librarySharing.retry", defaultMessage: "Retry" }),
                  onPrimaryCtaClick: () => {
                    er() &&
                      (O(es, ea), ec && es.invalidateQueries({ queryKey: ["accounts", "settings", ea.accountId] }))
                  },
                }),
              })
            : null
      $[66] !== ee ||
      $[67] !== eA ||
      $[68] !== eS ||
      $[69] !== eI ||
      $[70] !== eE ||
      $[71] !== eb ||
      $[72] !== er ||
      $[73] !== ew
        ? ((B =
            null == eS || eE
              ? null
              : (0, i.jsxs)(y.OO, {
                  children: [
                    (0, i.jsx)("p", {
                      className: "text-sm text-tertiary",
                      children: (0, i.jsx)(p.A, {
                        id: "librarySharing.request.historyIncomplete",
                        defaultMessage: "Load the remaining requests before sending another request",
                      }),
                    }),
                    (0, i.jsx)(l.$, {
                      size: "xl",
                      type: "button",
                      color: "secondary",
                      disabled: ee || eb,
                      loading: eb,
                      onClick: () => {
                        er() && (eI ? eA() : ew())
                      },
                      children: (0, i.jsx)(p.A, {
                        id: "librarySharing.request.loadMoreHistory",
                        defaultMessage: "Load requests",
                      }),
                    }),
                  ],
                })),
          ($[66] = ee),
          ($[67] = eA),
          ($[68] = eS),
          ($[69] = eI),
          ($[70] = eE),
          ($[71] = eb),
          ($[72] = er),
          ($[73] = ew),
          ($[74] = B))
        : (B = $[74])
      let ru = S.p,
        rp =
          null != eS
            ? ro?.map((e) =>
                (0, i.jsx)(
                  w.h,
                  {
                    avatar: (0, i.jsx)(h.T, {
                      size: "group",
                      avatarUrl: e.avatar_url,
                      colorKey: e.principal.principal_id,
                      name: e.display_name ?? e.email ?? null,
                    }),
                    label:
                      e.display_name ??
                      e.email ??
                      (0, i.jsx)(p.A, { id: "librarySharing.collaboratorFallback", defaultMessage: "Collaborator" }),
                    secondaryLabel: e.email,
                    trailingContent: (0, i.jsx)("span", {
                      className: "text-sm text-tertiary",
                      children: (0, i.jsx)(T.u, { permission: (0, D.rP)(e.role_id, ea.resourceKind) }),
                    }),
                  },
                  (0, D.nD)(e.principal),
                ),
              )
            : null,
        rm =
          null != eS
            ? rs.map((e) => {
                let [r, t] = e,
                  { request: a, recipient: n } = t,
                  l = eC.get((0, D.nD)(n))
                return (0, i.jsx)(
                  w.h,
                  {
                    avatar: (0, i.jsx)("span", {
                      className: "opacity-50",
                      children: (0, i.jsx)(h.T, {
                        size: "group",
                        avatarUrl: l?.avatar_url,
                        colorKey: n.principal_id,
                        name: l?.display_name ?? l?.email ?? null,
                      }),
                    }),
                    label: (0, i.jsx)("span", {
                      className: "opacity-50",
                      children:
                        l?.display_name ??
                        l?.email ??
                        (0, i.jsx)(p.A, { id: "librarySharing.requestedPerson", defaultMessage: "Requested person" }),
                    }),
                    secondaryLabel:
                      l?.email == null ? void 0 : (0, i.jsx)("span", { className: "opacity-50", children: l.email }),
                    trailingContent: (0, i.jsxs)("div", {
                      className: "flex shrink-0 items-center gap-3",
                      children: [
                        (0, i.jsx)(eL.E, {
                          className: "whitespace-nowrap",
                          children: (0, i.jsx)(p.A, {
                            id: "librarySharing.request.status",
                            defaultMessage:
                              "{status, select, approved {Approved} declined {Declined} satisfied {Already had access} other {Pending}}",
                            values: { status: (0, D.SK)(a, n) },
                          }),
                        }),
                        (0, i.jsx)("span", {
                          className: "pe-2 text-sm text-tertiary",
                          children: (0, i.jsx)(T.u, { permission: (0, D.rP)(a.requested_role_id, ea.resourceKind) }),
                        }),
                      ],
                    }),
                  },
                  r,
                )
              })
            : null
      return (
        $[75] !== ru || $[76] !== J || $[77] !== rp || $[78] !== rm
          ? ((Y = (0, i.jsxs)(ru, { children: [J, rp, rm] })),
            ($[75] = ru),
            ($[76] = J),
            ($[77] = rp),
            ($[78] = rm),
            ($[79] = Y))
          : (Y = $[79]),
        $[80] !== rd || $[81] !== B || $[82] !== Y
          ? ((z = (0, i.jsxs)(i.Fragment, { children: [rd, B, Y] })),
            ($[80] = rd),
            ($[81] = B),
            ($[82] = Y),
            ($[83] = z))
          : (z = $[83]),
        $[84] !== ri || $[85] !== ei || $[86] !== H || $[87] !== U || $[88] !== rc || $[89] !== z
          ? ((Q = ei({ isPending: ri, onSubmit: H, footer: U, headerContent: rc, content: z })),
            ($[84] = ri),
            ($[85] = ei),
            ($[86] = H),
            ($[87] = U),
            ($[88] = rc),
            ($[89] = z),
            ($[90] = Q))
          : (Q = $[90]),
        Q
      )
    }
    function eq(e) {
      return e.isValid
    }
    function ek(e) {
      let { recipient: r } = e
      return r
    }
    function eN(e) {
      let { recipient: r } = e
      return r
    }
    function eF(e) {
      let { recipient: r } = e
      return "email" === r.recipient_type ? [r.email.trim().toLowerCase()] : []
    }
    function eD(e) {
      let { recipient: r } = e
      return r
    }
    function eO(e) {
      let { recipient: r } = e
      return r
    }
    function eK(e) {
      return null == e ? [] : [e.trim().toLowerCase()]
    }
    function eP(e) {
      let { email: r } = e
      return r
    }
    function eG(e) {
      let { principal: r } = e
      return (0, D.nD)(r)
    }
    function eH() {
      return { viewer: new Set(), editor: new Set() }
    }
    function eU(e) {
      let { principal: r } = e
      return "group" === r.principal_type
    }
    function eB(e) {
      return e.principal_identities.map(eY)
    }
    function eY(e) {
      return [(0, D.nD)(e.principal), e]
    }
    function ez(e) {
      return e.requests
    }
    function eQ(e, r, t, i) {
      return null == e.next_cursor || i.includes(e.next_cursor) ? void 0 : e.next_cursor
    }
    var e$ = t("URpD"),
      eW = t("t2SL"),
      eV = t("jqgw")
    function eX(e) {
      let r,
        t,
        n,
        s,
        o,
        c,
        d = (0, a.c)(42),
        {
          accountId: u,
          authenticatedUserId: m,
          fileName: h,
          libraryFileId: f,
          loadingAccessRows: v,
          resourceKind: b,
          sharedDirectoryId: x,
          shareSessionId: I,
          showOrganizationSharing: A,
          onClose: w,
        } = e,
        S = void 0 === A || A,
        { data: R, isLoading: C, isError: j, refetch: T } = (0, _.oV)()
      if (
        d[0] !== u ||
        d[1] !== R?.accounts ||
        d[2] !== h ||
        d[3] !== j ||
        d[4] !== C ||
        d[5] !== f ||
        d[6] !== v ||
        d[7] !== w ||
        d[8] !== T ||
        d[9] !== b
      ) {
        o = Symbol.for("react.early_return_sentinel")
        e: {
          if (null == (t = R?.accounts?.find((e) => e.id === u)) || j) {
            let e, r, t, a, n, s, c
            ;(d[15] !== h
              ? ((e = (0, i.jsx)(p.A, {
                  id: "librarySharing.fileTitle",
                  defaultMessage: "Share {fileName}",
                  values: { fileName: h },
                })),
                (d[15] = h),
                (d[16] = e))
              : (e = d[16]),
              d[17] === Symbol.for("react.memo_cache_sentinel")
                ? ((r = (0, i.jsx)(p.A, { id: "librarySharing.close", defaultMessage: "Close" })), (d[17] = r))
                : (r = d[17]),
              d[18] !== w
                ? ((t = (0, i.jsx)(l.$, { size: "xl", type: "button", color: "secondary", onClick: w, children: r })),
                  (d[18] = w),
                  (d[19] = t))
                : (t = d[19]),
              d[20] === Symbol.for("react.memo_cache_sentinel")
                ? ((a = (0, i.jsx)(p.A, {
                    id: "librarySharing.sessionUnavailable",
                    defaultMessage: "Sharing is unavailable in this session. Reopen the dialog in the original account",
                  })),
                  (n = (0, i.jsx)(p.A, { id: "librarySharing.retry", defaultMessage: "Retry" })),
                  (d[20] = a),
                  (d[21] = n))
                : ((a = d[20]), (n = d[21])),
              d[22] !== T
                ? ((s = (0, i.jsx)(y.OO, {
                    children: (0, i.jsx)(g.l, {
                      type: "error",
                      role: "alert",
                      content: a,
                      primaryCtaText: n,
                      onPrimaryCtaClick: () => void T(),
                    }),
                  })),
                  (d[22] = T),
                  (d[23] = s))
                : (s = d[23]),
              d[24] !== C || d[25] !== v || d[26] !== e || d[27] !== t || d[28] !== s
                ? ((c = (0, i.jsx)(E.$t, { isLoading: C, loadingAccessRows: v, title: e, footer: t, children: s })),
                  (d[24] = C),
                  (d[25] = v),
                  (d[26] = e),
                  (d[27] = t),
                  (d[28] = s),
                  (d[29] = c))
                : (c = d[29]),
              (o = c))
            break e
          }
          ;((n = {
            accountId: u,
            accountUserId: "personal" === t.structure ? t.account_user_id.split("__")[0] : t.account_user_id,
            libraryFileId: f,
            resourceKind: b,
          }),
            (r = eZ),
            (s = JSON.stringify((0, D.X1)(n, "state"))))
        }
        ;((d[0] = u),
          (d[1] = R?.accounts),
          (d[2] = h),
          (d[3] = j),
          (d[4] = C),
          (d[5] = f),
          (d[6] = v),
          (d[7] = w),
          (d[8] = T),
          (d[9] = b),
          (d[10] = r),
          (d[11] = t),
          (d[12] = n),
          (d[13] = s),
          (d[14] = o))
      } else ((r = d[10]), (t = d[11]), (n = d[12]), (s = d[13]), (o = d[14]))
      return o !== Symbol.for("react.early_return_sentinel")
        ? o
        : (d[30] !== r ||
          d[31] !== t ||
          d[32] !== m ||
          d[33] !== h ||
          d[34] !== v ||
          d[35] !== w ||
          d[36] !== I ||
          d[37] !== x ||
          d[38] !== n ||
          d[39] !== S ||
          d[40] !== s
            ? ((c = (0, i.jsx)(
                r,
                {
                  account: t,
                  authenticatedUserId: m,
                  fileName: h,
                  loadingAccessRows: v,
                  sharingScope: n,
                  sharedDirectoryId: x,
                  shareSessionId: I,
                  showOrganizationSharing: S,
                  onClose: w,
                },
                s,
              )),
              (d[30] = r),
              (d[31] = t),
              (d[32] = m),
              (d[33] = h),
              (d[34] = v),
              (d[35] = w),
              (d[36] = I),
              (d[37] = x),
              (d[38] = n),
              (d[39] = S),
              (d[40] = s),
              (d[41] = c))
            : (c = d[41]),
          c)
    }
    function eZ(e) {
      let r,
        t,
        f,
        _,
        L,
        M,
        q,
        k,
        N,
        O,
        G,
        H,
        U,
        B,
        Y,
        z,
        W,
        V,
        X,
        Z,
        J,
        er,
        et,
        ei,
        ea,
        en,
        el,
        es,
        eo,
        ec,
        ed,
        eu,
        ep,
        em,
        eh,
        eg,
        ey,
        ev,
        eb,
        ex,
        eI = (0, a.c)(257),
        {
          account: eA,
          authenticatedUserId: ew,
          fileName: eR,
          loadingAccessRows: eE,
          sharingScope: eC,
          sharedDirectoryId: ej,
          shareSessionId: eL,
          showOrganizationSharing: eq,
          onClose: ek,
        } = e,
        eN = (0, d.gh)(I.u),
        eF = (0, s.jE)()
      eI[0] !== eF || eI[1] !== eC
        ? ((r = () =>
            new Set(
              eF
                .getQueryCache()
                .findAll({ queryKey: (0, D.X1)(eC) })
                .filter(e5)
                .map(e4),
            )),
          (eI[0] = eF),
          (eI[1] = eC),
          (eI[2] = r))
        : (r = eI[2])
      let [eD] = (0, u.useState)(r),
        eO = "workspace" === eA.structure
      eI[3] !== eO ? ((t = { enabled: eO }), (eI[3] = eO), (eI[4] = t)) : (t = eI[4])
      let { data: eK, isError: eP } = (0, d._U)(m.Jk, eC.accountId, t)
      eI[5] !== eA || eI[6] !== eK || eI[7] !== eP
        ? ((f = (0, j.V)(eA, eK, eP)), (eI[5] = eA), (eI[6] = eK), (eI[7] = eP), (eI[8] = f))
        : (f = eI[8])
      let { canSearchMembers: eG } = f,
        eH = (0, d.Ul)($.Sz)
      eI[9] !== ew || eI[10] !== eN || eI[11] !== eC.accountId
        ? ((_ = () => (0, e$.d)(eN, eC.accountId, ew) && eN.get($.Ym)),
          (eI[9] = ew),
          (eI[10] = eN),
          (eI[11] = eC.accountId),
          (eI[12] = _))
        : (_ = eI[12])
      let eU = _,
        eB = (0, u.useRef)(0),
        [eY, ez] = (0, u.useState)(0)
      eI[13] === Symbol.for("react.memo_cache_sentinel") ? ((L = new Map()), (eI[13] = L)) : (L = eI[13])
      let [eQ, eX] = (0, u.useState)(L)
      eI[14] !== eU
        ? ((M = () => {
            if (!eU()) throw Error("Library sharing session changed")
          }),
          (eI[14] = eU),
          (eI[15] = M))
        : (M = eI[15])
      let eZ = (0, Q.m)({ scope: eC, assertCurrentScope: M }),
        e3 = (0, K.O)(eC, eZ).state,
        {
          data: e7,
          isError: e8,
          isFetching: e9,
          isFetchedAfterMount: re,
          fetchStatus: rr,
          refetch: rt,
        } = (0, o.I)({
          ...e3,
          staleTime: e3.staleTime,
          queryFn: async (e) => {
            let { signal: r } = e
            try {
              return await eZ.getSharingState(r)
            } catch (e) {
              throw (!r.aborted && eU() && ((eB.current = eB.current + 1), eX(new Map())), e)
            }
          },
        })
      eI[16] !== eD || eI[17] !== e7 || eI[18] !== e8 || eI[19] !== rr || eI[20] !== re
        ? ((q = (re || eD.has("state")) && "paused" !== rr && !e8 ? e7 : void 0),
          (eI[16] = eD),
          (eI[17] = e7),
          (eI[18] = e8),
          (eI[19] = rr),
          (eI[20] = re),
          (eI[21] = q))
        : (q = eI[21])
      let ri = q,
        ra = (0, K.O)(eC, eZ, ri),
        rn = ri?.owner.principal.principal_id === eC.accountUserId
      eI[22] !== rn || eI[23] !== eH || eI[24] !== eC || eI[25] !== ri
        ? ((k =
            eH &&
            (rn ||
              (0, D.Fp)({ sharingState: ri, scope: eC, legacyOwner: void 0, managementAvailable: eH })
                .canManageAccess)),
          (eI[22] = rn),
          (eI[23] = eH),
          (eI[24] = eC),
          (eI[25] = ri),
          (eI[26] = k))
        : (k = eI[26])
      let rl = k,
        rs = null != ri && rl
      ;(eI[27] !== eZ || eI[28] !== eU || eI[29] !== ra.shares.queryFn || eI[30] !== ri
        ? ((N =
            null == ri
              ? ra.shares.queryFn
              : async (e) => {
                  let { signal: r } = e
                  try {
                    return await eZ.getShares(ri.owner.principal, r)
                  } catch (e) {
                    throw (!r.aborted && eU() && ((eB.current = eB.current + 1), eX(e2)), e)
                  }
                }),
          (eI[27] = eZ),
          (eI[28] = eU),
          (eI[29] = ra.shares.queryFn),
          (eI[30] = ri),
          (eI[31] = N))
        : (N = eI[31]),
        eI[32] !== ra.shares || eI[33] !== rs || eI[34] !== N
          ? ((O = { enabled: rs, ...ra.shares, staleTime: ra.shares.staleTime, queryFn: N }),
            (eI[32] = ra.shares),
            (eI[33] = rs),
            (eI[34] = N),
            (eI[35] = O))
          : (O = eI[35]))
      let { data: ro, isError: rc, isFetching: rd, isFetchedAfterMount: ru, fetchStatus: rp } = (0, o.I)(O)
      eI[36] !== eD || eI[37] !== ro || eI[38] !== rc || eI[39] !== rp || eI[40] !== ru || eI[41] !== ri
        ? ((G =
            (ru || eD.has("shares")) &&
            "paused" !== rp &&
            !rc &&
            ro?.owner.principal_id === ri?.owner.principal.principal_id
              ? ro
              : void 0),
          (eI[36] = eD),
          (eI[37] = ro),
          (eI[38] = rc),
          (eI[39] = rp),
          (eI[40] = ru),
          (eI[41] = ri),
          (eI[42] = G))
        : (G = eI[42])
      let rm = G,
        rh = rm?.owner
      eI[43] !== eH || eI[44] !== eC || eI[45] !== ri || eI[46] !== rh
        ? ((H = (0, D.Fp)({ sharingState: ri, scope: eC, legacyOwner: rh, managementAvailable: eH })),
          (eI[43] = eH),
          (eI[44] = eC),
          (eI[45] = ri),
          (eI[46] = rh),
          (eI[47] = H))
        : (H = eI[47])
      let { canInvite: rf, canManageAccess: r_ } = H
      eI[48] !== r_ || eI[49] !== ra.effectiveAccess
        ? ((U = { enabled: r_, ...ra.effectiveAccess, staleTime: ra.effectiveAccess.staleTime }),
          (eI[48] = r_),
          (eI[49] = ra.effectiveAccess),
          (eI[50] = U))
        : (U = eI[50])
      let { data: rg, isError: ry, error: rv, isFetching: rb, isFetchedAfterMount: rx, fetchStatus: rI } = (0, o.I)(U),
        rA = null != ri && !rl
      eI[51] !== ra.collaborators || eI[52] !== rA
        ? ((B = { enabled: rA, ...ra.collaborators, staleTime: ra.collaborators.staleTime }),
          (eI[51] = ra.collaborators),
          (eI[52] = rA),
          (eI[53] = B))
        : (B = eI[53])
      let { data: rw, isError: rS, error: rR, isFetching: rE, isFetchedAfterMount: rC, fetchStatus: rj } = (0, o.I)(B)
      eI[54] !== eD || eI[55] !== rw || eI[56] !== rS || eI[57] !== rj || eI[58] !== rC || eI[59] !== ri
        ? ((Y =
            !rS &&
            (rC || eD.has("collaborators")) &&
            "paused" !== rj &&
            rw?.owner.principal_id === ri?.owner.principal.principal_id),
          (eI[54] = eD),
          (eI[55] = rw),
          (eI[56] = rS),
          (eI[57] = rj),
          (eI[58] = rC),
          (eI[59] = ri),
          (eI[60] = Y))
        : (Y = eI[60])
      let rT = Y,
        rL = rT ? rw?.collaborators : void 0,
        rM = ri?.viewer.role_id ?? ""
      eI[61] !== eC.resourceKind || eI[62] !== rM
        ? ((z = (0, D.rP)(rM, eC.resourceKind)), (eI[61] = eC.resourceKind), (eI[62] = rM), (eI[63] = z))
        : (z = eI[63])
      let rq = z
      eI[64] !== eC.accountUserId || eI[65] !== eC.resourceKind || eI[66] !== rq || eI[67] !== rL
        ? ((W =
            "viewer" === rq &&
            rL?.some((e) => {
              let { principal: r, role_id: t } = e
              return (
                "user" === r.principal_type &&
                r.principal_id === eC.accountUserId &&
                "commenter" === (0, D.rP)(t, eC.resourceKind)
              )
            })
              ? "commenter"
              : rq),
          (eI[64] = eC.accountUserId),
          (eI[65] = eC.resourceKind),
          (eI[66] = rq),
          (eI[67] = rL),
          (eI[68] = W))
        : (W = eI[68])
      let rk = W
      eI[69] !== rg || eI[70] !== ry || eI[71] !== rI || eI[72] !== rx || eI[73] !== eD || eI[74] !== ri
        ? ((V =
            (rx || eD.has("effective-access")) &&
            "paused" !== rI &&
            !ry &&
            rg?.owner.principal_id === ri?.owner.principal.principal_id
              ? rg
              : void 0),
          (eI[69] = rg),
          (eI[70] = ry),
          (eI[71] = rI),
          (eI[72] = rx),
          (eI[73] = eD),
          (eI[74] = ri),
          (eI[75] = V))
        : (V = eI[75])
      let rN = V,
        [rF, rD] = (0, u.useState)(!1),
        [rO, rK] = (0, u.useState)(!1)
      eI[76] === Symbol.for("react.memo_cache_sentinel")
        ? ((X = (e, r) => {
            eX((t) => {
              let i = new Map(t)
              return (null == r ? i.delete(e) : i.set(e, r), i)
            })
          }),
          (eI[76] = X))
        : (X = eI[76])
      let rP = X
      ;(eI[77] !== eC ? ((Z = (0, D.X1)(eC, "state")), (eI[77] = eC), (eI[78] = Z)) : (Z = eI[78]),
        eI[79] !== Z ? ((J = { mutationKey: Z }), (eI[79] = Z), (eI[80] = J)) : (J = eI[80]))
      let rG = (0, c.l)(J),
        rH = r_ && null != rm && null != rN && (rO || (!e9 && !rd && !rb)),
        rU = rH && rN?.complete === !0
      eI[81] !== eC.accountUserId || eI[82] !== rN?.collaborators || eI[83] !== rN?.collaborators.find
        ? ((er = rN?.collaborators.find((e) => {
            let { principal: r } = e
            return "user" === r.principal_type && r.principal_id === eC.accountUserId
          })),
          (eI[81] = eC.accountUserId),
          (eI[82] = rN?.collaborators),
          (eI[83] = rN?.collaborators.find),
          (eI[84] = er))
        : (er = eI[84])
      let rB = er
      eI[85] !== rB ||
      eI[86] !== rb ||
      eI[87] !== rO ||
      eI[88] !== eC.resourceKind ||
      eI[89] !== ri?.workspace_invitation_id ||
      eI[90] !== rN?.complete
        ? ((et =
            (rO || !rb) &&
            rN?.complete === !0 &&
            null != rB &&
            (rB.direct_role_id === D.F2[eC.resourceKind].editor ||
              [rB.source, rB.group_source].some(
                (e) =>
                  null != e &&
                  e.invitation_id !== ri?.workspace_invitation_id &&
                  ("user" === e.principal.principal_type || "group" === e.principal.principal_type) &&
                  (("library_file" === e.resource.resource_type && e.role_id === D.F2.file.editor) ||
                    ("library_folder" === e.resource.resource_type && e.role_id === D.F2.folder.editor)),
              ))),
          (eI[85] = rB),
          (eI[86] = rb),
          (eI[87] = rO),
          (eI[88] = eC.resourceKind),
          (eI[89] = ri?.workspace_invitation_id),
          (eI[90] = rN?.complete),
          (eI[91] = et))
        : (et = eI[91])
      let rY = et,
        rz = rG > 0 || rF || rO,
        rQ = rz || e9 || rd || rb || rE
      if (
        eI[92] !== rf ||
        eI[93] !== rl ||
        eI[94] !== rU ||
        eI[95] !== eQ ||
        eI[96] !== rg ||
        eI[97] !== rm ||
        eI[98] !== ri
      ) {
        let e = null == ri ? void 0 : (0, ef.Hd)(ri, rm, rg)
        ;((ei =
          !rl ||
          [...eQ.values()].some(
            (r) =>
              "invite" === r.kind &&
              (!rf ||
                !rU ||
                null == e ||
                r.invitees.some(e1) ||
                (0, ef.Go)(r.invitees, e.existingEmails, e.existingPrincipalKeys)),
          )),
          (eI[92] = rf),
          (eI[93] = rl),
          (eI[94] = rU),
          (eI[95] = eQ),
          (eI[96] = rg),
          (eI[97] = rm),
          (eI[98] = ri),
          (eI[99] = ei))
      } else ei = eI[99]
      let r$ = ei
      eI[100] !== rQ || eI[101] !== eQ || eI[102] !== r$ || eI[103] !== eU
        ? ((ea = function () {
            if (!eU() || rQ || r$ || 0 === eQ.size) return
            rK(!0)
            let e = eB.current
            ;(async function (e, r, t) {
              for (let [i, a] of [...e].sort(([, e], [, r]) => Number("link" === e.kind) - Number("link" === r.kind))) {
                if (!r() || !(await a.save())) return !1
                t(i, a)
              }
              return r()
            })(
              eQ,
              () => eU() && eB.current === e,
              (e, r) => {
                eX((t) => {
                  if (t.get(e) !== r) return t
                  let i = new Map(t)
                  return (i.delete(e), i)
                })
              },
            ).finally(() => rK(!1))
          }),
          (eI[100] = rQ),
          (eI[101] = eQ),
          (eI[102] = r$),
          (eI[103] = eU),
          (eI[104] = ea))
        : (ea = eI[104])
      let rW = ea,
        rV = null == ri ? void 0 : rn
      eI[105] !== eL || eI[106] !== eC || eI[107] !== rV
        ? ((en = { sharingScope: eC, shareSessionId: eL, isOwner: rV }),
          (eI[105] = eL),
          (eI[106] = eC),
          (eI[107] = rV),
          (eI[108] = en))
        : (en = eI[108])
      let rX = en,
        rZ = (0, u.useRef)(null),
        rJ = null != ri
      eI[109] !== rX || eI[110] !== eU || eI[111] !== eN
        ? ((el = () => {
            null == rZ.current &&
              eU() &&
              ((rZ.current = rX), (0, F.aS)(eN, rX, { action: "CHATGPT_FILE_LIBRARY_SHARING_ACTION_DIALOG_OPENED" }))
          }),
          (eI[109] = rX),
          (eI[110] = eU),
          (eI[111] = eN),
          (eI[112] = el))
        : (el = eI[112])
      let r0 = (0, u.useEffectEvent)(el)
      ;(eI[113] !== r0 || eI[114] !== rJ
        ? ((es = () => {
            rJ && r0()
          }),
          (eI[113] = r0),
          (eI[114] = rJ),
          (eI[115] = es))
        : (es = eI[115]),
        eI[116] !== rJ ? ((eo = [rJ]), (eI[116] = rJ), (eI[117] = eo)) : (eo = eI[117]),
        (0, u.useEffect)(es, eo),
        eI[118] !== eN
          ? ((ec = () => () => {
              null != rZ.current &&
                (0, F.aS)(eN, rZ.current, { action: "CHATGPT_FILE_LIBRARY_SHARING_ACTION_DIALOG_CLOSED" })
            }),
            (ed = [eN]),
            (eI[118] = eN),
            (eI[119] = ec),
            (eI[120] = ed))
          : ((ec = eI[119]), (ed = eI[120])),
        (0, u.useEffect)(ec, ed),
        eI[121] !== rX ||
        eI[122] !== rQ ||
        eI[123] !== eU ||
        eI[124] !== eO ||
        eI[125] !== eN ||
        eI[126] !== ej ||
        eI[127] !== eC.accountId ||
        eI[128] !== eC.libraryFileId ||
        eI[129] !== eC.resourceKind ||
        eI[130] !== ri ||
        eI[131] !== rq
          ? ((eu = async function () {
              if (!eU() || null == ri || rQ) return
              rD(!0)
              let e = crypto.randomUUID(),
                r = (0, F.qT)(rq)
              ;(0, F.aS)(eN, rX, {
                action: "CHATGPT_FILE_LIBRARY_SHARING_ACTION_COPY_LINK",
                outcome: "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_STARTED",
                operationId: e,
                role: r,
              })
              let t = (0, eW.Rg)({
                libraryFileId: eC.libraryFileId,
                origin: (0, eV.F)(),
                resourceKind: eC.resourceKind,
                sharedDirectoryId: ej,
                workspaceId: eO ? eC.accountId : void 0,
              })
              await Promise.resolve(x.appServices.clipboard.writeText(t.href))
                .then(() => {
                  eU() &&
                    ((0, F.aS)(eN, rX, {
                      action: "CHATGPT_FILE_LIBRARY_SHARING_ACTION_COPY_LINK",
                      outcome: "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_SUCCEEDED",
                      operationId: e,
                      role: r,
                    }),
                    (0, A.o)(eN))
                })
                .catch((t) => {
                  eU() &&
                    ((0, F.aS)(eN, rX, {
                      action: "CHATGPT_FILE_LIBRARY_SHARING_ACTION_COPY_LINK",
                      outcome: "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_FAILED",
                      operationId: e,
                      role: r,
                      error: (0, F.GE)(t),
                    }),
                    eN
                      .get(b.Id)
                      .danger(
                        (0, i.jsx)(p.A, {
                          id: "librarySharing.copy.failed",
                          defaultMessage: "Couldn't copy the link. Try again",
                        }),
                        { errorAnalytics: { toastId: "librarySharing.copy.failed" } },
                      ))
                })
                .finally(() => rD(!1))
            }),
            (eI[121] = rX),
            (eI[122] = rQ),
            (eI[123] = eU),
            (eI[124] = eO),
            (eI[125] = eN),
            (eI[126] = ej),
            (eI[127] = eC.accountId),
            (eI[128] = eC.libraryFileId),
            (eI[129] = eC.resourceKind),
            (eI[130] = ri),
            (eI[131] = rq),
            (eI[132] = eu))
          : (eu = eI[132]))
      let r1 = eu
      eI[133] !== rl ||
      eI[134] !== rg?.complete ||
      eI[135] !== ry ||
      eI[136] !== rv ||
      eI[137] !== rx ||
      eI[138] !== rT ||
      eI[139] !== rn ||
      eI[140] !== rw?.complete ||
      eI[141] !== rS ||
      eI[142] !== rR ||
      eI[143] !== rC ||
      eI[144] !== rc
        ? ((ep = rl
            ? rc || (ry && !(rn && e6(rv))) || (rx && rg?.complete === !1)
            : !e6(rR) && (rS || (rC && (!rT || rw?.complete === !1)))),
          (eI[133] = rl),
          (eI[134] = rg?.complete),
          (eI[135] = ry),
          (eI[136] = rv),
          (eI[137] = rx),
          (eI[138] = rT),
          (eI[139] = rn),
          (eI[140] = rw?.complete),
          (eI[141] = rS),
          (eI[142] = rR),
          (eI[143] = rC),
          (eI[144] = rc),
          (eI[145] = ep))
        : (ep = eI[145])
      let r2 = ep,
        r3 = rl ? (null == rm && rd) || (null == rN && rb) : !rT && rE
      if (
        eI[146] !== r3 ||
        eI[147] !== rX ||
        eI[148] !== eZ ||
        eI[149] !== rf ||
        eI[150] !== rl ||
        eI[151] !== rH ||
        eI[152] !== rU ||
        eI[153] !== rQ ||
        eI[154] !== eU ||
        eI[155] !== rn ||
        eI[156] !== rm ||
        eI[157] !== eC ||
        eI[158] !== ri ||
        eI[159] !== rk ||
        eI[160] !== rN ||
        eI[161] !== rL
      ) {
        if (((em = null), null != ri)) {
          let e, r, t, a
          ;(eI[163] !== rn ||
          eI[164] !== ri.owner.avatar_url ||
          eI[165] !== ri.owner.display_name ||
          eI[166] !== ri.owner.email ||
          eI[167] !== ri.owner.principal.principal_id
            ? ((e = (0, i.jsx)(eT.Nm, {
                userId: ri.owner.principal.principal_id,
                isSelf: rn,
                name: ri.owner.display_name,
                email: ri.owner.email,
                avatarUrl: ri.owner.avatar_url,
              })),
              (eI[163] = rn),
              (eI[164] = ri.owner.avatar_url),
              (eI[165] = ri.owner.display_name),
              (eI[166] = ri.owner.email),
              (eI[167] = ri.owner.principal.principal_id),
              (eI[168] = e))
            : (e = eI[168]),
            eI[169] !== r3 ? ((r = r3 ? (0, i.jsx)(eT.MY, {}) : null), (eI[169] = r3), (eI[170] = r)) : (r = eI[170]),
            eI[171] !== r3 ||
            eI[172] !== rX ||
            eI[173] !== eZ ||
            eI[174] !== rf ||
            eI[175] !== rl ||
            eI[176] !== rH ||
            eI[177] !== rU ||
            eI[178] !== rQ ||
            eI[179] !== eU ||
            eI[180] !== rm ||
            eI[181] !== eC ||
            eI[182] !== rN
              ? ((t =
                  !r3 && rl && null != rm
                    ? (0, i.jsx)(ee, {
                        api: eZ,
                        sharingScope: eC,
                        analytics: rX,
                        shares: rm,
                        effectiveAccess: rN,
                        allowedRoles: (0, D.q4)(rm.allowed_roles, eC.resourceKind),
                        canChange: rf && rU,
                        canRemove: rH,
                        canRemoveEffective: rU,
                        disabled: rQ,
                        isCurrentSession: eU,
                        onStageChange: rP,
                      })
                    : null),
                (eI[171] = r3),
                (eI[172] = rX),
                (eI[173] = eZ),
                (eI[174] = rf),
                (eI[175] = rl),
                (eI[176] = rH),
                (eI[177] = rU),
                (eI[178] = rQ),
                (eI[179] = eU),
                (eI[180] = rm),
                (eI[181] = eC),
                (eI[182] = rN),
                (eI[183] = t))
              : (t = eI[183]),
            eI[184] !== r3 ||
            eI[185] !== rl ||
            eI[186] !== rn ||
            eI[187] !== eC.accountUserId ||
            eI[188] !== eC.resourceKind ||
            eI[189] !== ri.owner.principal.principal_id ||
            eI[190] !== ri.viewer ||
            eI[191] !== rk ||
            eI[192] !== rL
              ? ((a =
                  r3 || rl
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                        children: [
                          rn
                            ? null
                            : (0, i.jsx)(w.h, {
                                avatar: (0, i.jsx)(h.T, {
                                  size: "group",
                                  avatarUrl: ri.viewer.avatar_url,
                                  colorKey: ri.viewer.principal.principal_id,
                                  name: ri.viewer.display_name ?? ri.viewer.email ?? null,
                                }),
                                label: (0, i.jsx)(p.A, { id: "librarySharing.viewerSelf", defaultMessage: "You" }),
                                secondaryLabel: ri.viewer.email,
                                trailingContent: (0, i.jsx)("span", {
                                  className: "pe-2 text-sm text-tertiary",
                                  children: (0, i.jsx)(T.u, { permission: rk }),
                                }),
                              }),
                          rL
                            ?.filter((e) => {
                              let { principal: r } = e
                              return (
                                r.principal_id !== eC.accountUserId &&
                                r.principal_id !== ri.owner.principal.principal_id
                              )
                            })
                            .map((e) =>
                              (0, i.jsx)(
                                w.h,
                                {
                                  avatar:
                                    "group" === e.principal.principal_type
                                      ? (0, i.jsx)(n.e, { size: 28, Icon: v.oJq })
                                      : (0, i.jsx)(h.T, {
                                          size: "group",
                                          avatarUrl: e.avatar_url,
                                          colorKey: e.principal.principal_id,
                                          name: e.display_name ?? e.email ?? null,
                                        }),
                                  label:
                                    e.display_name ??
                                    e.email ??
                                    (0, i.jsx)(p.A, {
                                      id: "librarySharing.collaboratorFallback",
                                      defaultMessage: "Collaborator",
                                    }),
                                  secondaryLabel: e.email,
                                  trailingContent: (0, i.jsx)("span", {
                                    className: "pe-2 text-sm text-tertiary",
                                    children: (0, i.jsx)(T.u, { permission: (0, D.rP)(e.role_id, eC.resourceKind) }),
                                  }),
                                },
                                (0, D.nD)(e.principal),
                              ),
                            ),
                        ],
                      })),
                (eI[184] = r3),
                (eI[185] = rl),
                (eI[186] = rn),
                (eI[187] = eC.accountUserId),
                (eI[188] = eC.resourceKind),
                (eI[189] = ri.owner.principal.principal_id),
                (eI[190] = ri.viewer),
                (eI[191] = rk),
                (eI[192] = rL),
                (eI[193] = a))
              : (a = eI[193]),
            (em = (0, i.jsxs)(i.Fragment, { children: [e, r, t, a] })))
        }
        ;((eI[146] = r3),
          (eI[147] = rX),
          (eI[148] = eZ),
          (eI[149] = rf),
          (eI[150] = rl),
          (eI[151] = rH),
          (eI[152] = rU),
          (eI[153] = rQ),
          (eI[154] = eU),
          (eI[155] = rn),
          (eI[156] = rm),
          (eI[157] = eC),
          (eI[158] = ri),
          (eI[159] = rk),
          (eI[160] = rN),
          (eI[161] = rL),
          (eI[162] = em))
      } else em = eI[162]
      let r4 = null == ri || rQ
      ;(eI[194] !== r1
        ? ((eh = () => {
            r1()
          }),
          (eI[194] = r1),
          (eI[195] = eh))
        : (eh = eI[195]),
        eI[196] === Symbol.for("react.memo_cache_sentinel")
          ? ((eg = (0, i.jsx)(v.ibM, {})),
            (ey = (0, i.jsx)(p.A, { id: "librarySharing.copy", defaultMessage: "Copy link" })),
            (eI[196] = eg),
            (eI[197] = ey))
          : ((eg = eI[196]), (ey = eI[197])),
        eI[198] !== rF || eI[199] !== r4 || eI[200] !== eh
          ? ((ev = (0, i.jsxs)(l.$, {
              size: "xl",
              type: "button",
              color: "secondary",
              variant: "outline",
              disabled: r4,
              loading: rF,
              onClick: eh,
              children: [eg, ey],
            })),
            (eI[198] = rF),
            (eI[199] = r4),
            (eI[200] = eh),
            (eI[201] = ev))
          : (ev = eI[201]))
      let r5 = ev
      eI[202] !== em ||
      eI[203] !== r3 ||
      eI[204] !== eA ||
      eI[205] !== rX ||
      eI[206] !== eZ ||
      eI[207] !== rf ||
      eI[208] !== r_ ||
      eI[209] !== rl ||
      eI[210] !== rU ||
      eI[211] !== eG ||
      eI[212] !== r5 ||
      eI[213] !== rQ ||
      eI[214] !== eQ ||
      eI[215] !== eY ||
      eI[216] !== r$ ||
      eI[217] !== rb ||
      eI[218] !== eR ||
      eI[219] !== r2 ||
      eI[220] !== rY ||
      eI[221] !== rz ||
      eI[222] !== eU ||
      eI[223] !== rn ||
      eI[224] !== eO ||
      eI[225] !== eE ||
      eI[226] !== eH ||
      eI[227] !== ek ||
      eI[228] !== eF ||
      eI[229] !== rt ||
      eI[230] !== rW ||
      eI[231] !== rO ||
      eI[232] !== rm ||
      eI[233] !== rd ||
      eI[234] !== eC ||
      eI[235] !== ri ||
      eI[236] !== eq ||
      eI[237] !== e8 ||
      eI[238] !== e9 ||
      eI[239] !== rN
        ? ((eb = (e) =>
            (0, i.jsx)(E.$t, {
              isLoading: !e8 && null == ri,
              loadingAccessRows: eE,
              title:
                rl || rn || (eO && !eG) || ri?.capabilities?.can_request_access !== !0
                  ? (0, i.jsx)(p.A, {
                      id: "librarySharing.fileTitle",
                      defaultMessage: "Share {fileName}",
                      values: { fileName: eR },
                    })
                  : (0, i.jsx)(p.A, {
                      id: "librarySharing.requestTitle",
                      defaultMessage: "Request to share {fileName}",
                      values: { fileName: eR },
                    }),
              headerContent:
                null != e
                  ? e.headerContent
                  : null != ri &&
                    rf &&
                    (0, i.jsx)(
                      e_,
                      {
                        account: eA,
                        api: eZ,
                        sharingScope: eC,
                        sharingState: ri,
                        shares: rm,
                        effectiveAccess: rN,
                        analytics: rX,
                        canInvite: rU,
                        disabled: rQ,
                        isCurrentSession: eU,
                        onStageChange: rP,
                      },
                      eY,
                    ),
              isDismissalDisabled: rz || e?.isPending === !0,
              onSubmit: rl ? rW : e?.onSubmit,
              footer:
                null == ri || rl || rn || 0 !== eQ.size
                  ? (0, i.jsx)(R.r, {
                      onCancel: () => {
                        ;(eX(new Map()), ez(e0))
                      },
                      onClose: ek,
                      isBusy: rz,
                      disabled: rQ || r$,
                      hasPendingAccessChange: eQ.size > 0,
                      hasPendingInvitees: [...eQ.values()].some(eJ),
                      isSaving: rO,
                      copyLink: r5,
                    })
                  : (0, i.jsxs)(i.Fragment, {
                      children: [(0, i.jsx)("div", { className: "me-auto", children: r5 }), e?.footer],
                    }),
              children:
                null == ri
                  ? (0, i.jsx)(y.OO, {
                      className: e8 ? void 0 : "flex-1 justify-center",
                      children: (0, i.jsx)(C.DN, {
                        isLoading: !e8,
                        onRetry: () => {
                          rt()
                        },
                      }),
                    })
                  : (0, i.jsxs)(
                      "div",
                      {
                        className: "flex flex-col",
                        children: [
                          r2
                            ? (0, i.jsx)(y.OO, {
                                children: (0, i.jsx)(g.l, {
                                  type: "error",
                                  role: "alert",
                                  content: (0, i.jsx)(p.A, {
                                    id: "librarySharing.access.incomplete",
                                    defaultMessage:
                                      "Couldn't load all access details. Some sharing actions are unavailable",
                                  }),
                                  primaryCtaText: (0, i.jsx)(p.A, {
                                    id: "librarySharing.retry",
                                    defaultMessage: "Retry",
                                  }),
                                  onPrimaryCtaClick: () => {
                                    eF.invalidateQueries({ queryKey: (0, D.X1)(eC) })
                                  },
                                }),
                              })
                            : null,
                          eq
                            ? (0, i.jsx)(i.Fragment, {
                                children: r3
                                  ? (0, i.jsx)(S.p, { kind: "link", children: (0, i.jsx)(C.gE, {}) })
                                  : (0, i.jsx)(eS, {
                                      allowedRoles: null == rm ? void 0 : (0, D.q4)(rm.allowed_roles, eC.resourceKind),
                                      analytics: rX,
                                      api: eZ,
                                      canInitiateSharing: rf,
                                      canManage: r_,
                                      disabled: rQ,
                                      permissionsPending: rl && (rd || rb),
                                      hasIndependentEditorAccess: rY,
                                      isCurrentSession: eU,
                                      isWorkspace: eO,
                                      sharingScope: eC,
                                      sharingState: ri,
                                      workspaceName: eA.name?.trim() || void 0,
                                      onStageChange: rP,
                                    }),
                              })
                            : null,
                          null != e
                            ? e.content
                            : (0, i.jsx)(S.p, {
                                children: (0, i.jsx)("div", { className: "flex flex-col gap-3", children: em }),
                              }),
                          rn && eH
                            ? (0, i.jsx)(P, {
                                analytics: rX,
                                api: eZ,
                                canApprove: rf && rU,
                                canDecide: !e9 && ri.capabilities?.can_manage_access_requests === !0,
                                disabled: rQ,
                                isCurrentSession: eU,
                                sharingScope: eC,
                              })
                            : null,
                        ],
                      },
                      eY,
                    ),
            })),
          (eI[202] = em),
          (eI[203] = r3),
          (eI[204] = eA),
          (eI[205] = rX),
          (eI[206] = eZ),
          (eI[207] = rf),
          (eI[208] = r_),
          (eI[209] = rl),
          (eI[210] = rU),
          (eI[211] = eG),
          (eI[212] = r5),
          (eI[213] = rQ),
          (eI[214] = eQ),
          (eI[215] = eY),
          (eI[216] = r$),
          (eI[217] = rb),
          (eI[218] = eR),
          (eI[219] = r2),
          (eI[220] = rY),
          (eI[221] = rz),
          (eI[222] = eU),
          (eI[223] = rn),
          (eI[224] = eO),
          (eI[225] = eE),
          (eI[226] = eH),
          (eI[227] = ek),
          (eI[228] = eF),
          (eI[229] = rt),
          (eI[230] = rW),
          (eI[231] = rO),
          (eI[232] = rm),
          (eI[233] = rd),
          (eI[234] = eC),
          (eI[235] = ri),
          (eI[236] = eq),
          (eI[237] = e8),
          (eI[238] = e9),
          (eI[239] = rN),
          (eI[240] = eb))
        : (eb = eI[240])
      let r6 = eb
      return (
        eI[241] !== em ||
        eI[242] !== eA ||
        eI[243] !== rX ||
        eI[244] !== eZ ||
        eI[245] !== rl ||
        eI[246] !== rQ ||
        eI[247] !== eY ||
        eI[248] !== rT ||
        eI[249] !== eU ||
        eI[250] !== rn ||
        eI[251] !== r6 ||
        eI[252] !== rw ||
        eI[253] !== eC ||
        eI[254] !== ri ||
        eI[255] !== e9
          ? ((ex =
              null == ri || rl || rn
                ? r6(null)
                : (0, i.jsx)(
                    eM,
                    {
                      account: eA,
                      analytics: rX,
                      api: eZ,
                      canRequest: !e9 && ri.capabilities?.can_request_access === !0,
                      disabled: rQ,
                      isCurrentSession: eU,
                      renderDialog: r6,
                      roster: rT ? rw : void 0,
                      sharingScope: eC,
                      sharingState: ri,
                      children: em,
                    },
                    eY,
                  )),
            (eI[241] = em),
            (eI[242] = eA),
            (eI[243] = rX),
            (eI[244] = eZ),
            (eI[245] = rl),
            (eI[246] = rQ),
            (eI[247] = eY),
            (eI[248] = rT),
            (eI[249] = eU),
            (eI[250] = rn),
            (eI[251] = r6),
            (eI[252] = rw),
            (eI[253] = eC),
            (eI[254] = ri),
            (eI[255] = e9),
            (eI[256] = ex))
          : (ex = eI[256]),
        ex
      )
    }
    function eJ(e) {
      return "invite" === e.kind
    }
    function e0(e) {
      return e + 1
    }
    function e1(e) {
      return !e.isValid
    }
    function e2(e) {
      return new Map([...e].filter(e3))
    }
    function e3(e) {
      let [, r] = e
      return "collaborator" !== r.kind
    }
    function e4(e) {
      return e.queryKey.at(-1)
    }
    function e5(e) {
      return "success" === e.state.status && !e.isStaleByTime(L.D.THIRTY_SECONDS)
    }
    function e6(e) {
      return (
        e instanceof M.FetchError &&
        404 === e.responseStatus &&
        "network" !== e.errorKind &&
        null == e.errorCode &&
        e.diagnosticError instanceof f.rX &&
        "Not Found" === e.diagnosticError.detail
      )
    }
  },
  Te1l(e, r, t) {
    var i = t("HY2m"),
      a = t("D7Ms"),
      n = t("rvFo"),
      l = t("nqea")
    t.d(
      r,
      {},
      {
        O: function (e, r, t) {
          let s = { refetchOnMount: () => !!i.t.isOnline() || "always", retry: !1 }
          return {
            state: {
              ...s,
              queryKey: (0, l.X1)(e, "state"),
              queryFn: ({ signal: e }) => r.getSharingState(e),
              staleTime: (e) => ("error" === e.state.status ? 0 : n.D.THIRTY_SECONDS),
            },
            shares: {
              ...s,
              queryKey: (0, l.X1)(e, "shares"),
              queryFn: null == t ? a.hT : ({ signal: e }) => r.getShares(t.owner.principal, e),
              staleTime: (e) => ("error" === e.state.status ? 0 : n.D.THIRTY_SECONDS),
            },
            effectiveAccess: {
              ...s,
              queryKey: (0, l.X1)(e, "effective-access"),
              queryFn: null == t ? a.hT : ({ signal: e }) => r.getEffectiveAccess(t.owner.principal, e),
              staleTime: (e) => ("error" === e.state.status ? 0 : n.D.THIRTY_SECONDS),
            },
            collaborators: {
              ...s,
              queryKey: (0, l.X1)(e, "collaborators"),
              queryFn: ({ signal: e }) => r.getCollaborators({ signal: e }),
              staleTime: (e) => ("error" === e.state.status ? 0 : n.D.THIRTY_SECONDS),
            },
          }
        },
        X: function (e, r, t, i) {
          let a = [...(0, l.X1)(r, t), "pages"],
            s = e
              .getQueryCache()
              .findAll({ queryKey: a })
              .filter(
                (e) =>
                  e.queryKey.length === a.length + 1 &&
                  "success" === e.state.status &&
                  "idle" === e.state.fetchStatus &&
                  !e.isStaleByTime(n.D.THIRTY_SECONDS),
              )
              .sort((e, r) => r.state.dataUpdatedAt - e.state.dataUpdatedAt)[0],
            o = s?.queryKey.at(-1)
          return "string" == typeof o ? o : i
        },
      },
    )
  },
  aRS8(e, r, t) {
    var i = t("ABep"),
      a = t("QosV"),
      n = t("T0Rc"),
      l = t("zd8w"),
      s = t("Wf1j"),
      o = t("oyxz"),
      c = t("bVeK"),
      d = t("AOG7"),
      u = t("glqn"),
      p = t("ajGH"),
      m = t("LKbA"),
      h = t("rvFo"),
      f = t("GEsy"),
      _ = t("AEhU")
    function g(e) {
      let r,
        t,
        l,
        s,
        o,
        c,
        d,
        u,
        p = (0, a.c)(35)
      p[0] !== e.query ? ((r = e.query.trim().toLowerCase()), (p[0] = e.query), (p[1] = r)) : (r = p[1])
      let m = r,
        g = (0, f.o)(m, 150)
      p[2] !== e.currentEmail || p[3] !== e.existingEmails || p[4] !== m
        ? ((t = (0, _.on)({ query: m, selected: [], currentEmail: e.currentEmail, existingEmails: e.existingEmails })),
          (p[2] = e.currentEmail),
          (p[3] = e.existingEmails),
          (p[4] = m),
          (p[5] = t))
        : (t = p[5])
      let y = t.selected
      p[6] !== y || p[7] !== e.disabled || p[8] !== e.selected || p[9] !== m
        ? ((l =
            !e.disabled &&
            1 === y.length &&
            y[0]?.isValid === !0 &&
            y[0].label === m &&
            !e.selected.some((e) => {
              let { id: r } = e
              return r === y[0]?.id
            })),
          (p[6] = y),
          (p[7] = e.disabled),
          (p[8] = e.selected),
          (p[9] = m),
          (p[10] = l))
        : (l = p[10])
      let v = l
      p[11] !== e.accountId || p[12] !== e.currentPrincipalId || p[13] !== m
        ? ((s = ["library-sharing-recipient", e.accountId, e.currentPrincipalId, m]),
          (p[11] = e.accountId),
          (p[12] = e.currentPrincipalId),
          (p[13] = m),
          (p[14] = s))
        : (s = p[14])
      let b = v && m === g
      ;(p[15] !== e || p[16] !== m
        ? ((o = (r) => {
            let { signal: t } = r
            return e.resolveRecipient(m, AbortSignal.any([t, AbortSignal.timeout(7e3)]))
          }),
          (p[15] = e),
          (p[16] = m),
          (p[17] = o))
        : (o = p[17]),
        p[18] !== s || p[19] !== b || p[20] !== o
          ? ((c = { queryKey: s, enabled: b, staleTime: h.D.ONE_MINUTE, networkMode: "always", retry: !1, queryFn: o }),
            (p[18] = s),
            (p[19] = b),
            (p[20] = o),
            (p[21] = c))
          : (c = p[21]))
      let { data: x, isFetching: I, isError: w } = (0, n.I)(c)
      p[22] !== v || p[23] !== y || p[24] !== x?.eligible || p[25] !== g || p[26] !== w || p[27] !== I || p[28] !== m
        ? ((d = v && !I && !w && m === g && x?.eligible ? y : []),
          (p[22] = v),
          (p[23] = y),
          (p[24] = x?.eligible),
          (p[25] = g),
          (p[26] = w),
          (p[27] = I),
          (p[28] = m),
          (p[29] = d))
        : (d = p[29])
      let S = v && (I || m !== g)
      return (
        p[30] !== w || p[31] !== e || p[32] !== d || p[33] !== S
          ? ((u = (0, i.jsx)(A, { ...e, options: d, isLoading: S, searchFailed: w })),
            (p[30] = w),
            (p[31] = e),
            (p[32] = d),
            (p[33] = S),
            (p[34] = u))
          : (u = p[34]),
        u
      )
    }
    function y(e) {
      let r,
        t,
        n,
        l,
        s,
        o,
        c,
        u,
        p,
        m,
        h = (0, a.c)(37),
        { data: f, isFetching: _, isPending: g, isError: y } = (0, d.Nv)(e.disabled ? "" : e.query),
        w = `user:${e.currentPrincipalId}`
      h[0] !== e.existingPrincipalKeys || h[1] !== w
        ? ((r = new Set([...e.existingPrincipalKeys, w])), (h[0] = e.existingPrincipalKeys), (h[1] = w), (h[2] = r))
        : (r = h[2])
      let S = r,
        R = e.currentEmail ?? ""
      h[3] !== e.existingEmails || h[4] !== R
        ? ((t = new Set([...e.existingEmails, R].map(I))), (h[3] = e.existingEmails), (h[4] = R), (h[5] = t))
        : (t = h[5])
      let E = t
      h[6] !== e.selected ? ((n = new Set(e.selected.map(x))), (h[6] = e.selected), (h[7] = n)) : (n = h[7])
      let C = n
      h[8] !== e.selected ? ((l = new Set(e.selected.flatMap(b))), (h[8] = e.selected), (h[9] = l)) : (l = h[9])
      let j = l
      if (
        h[10] !== E ||
        h[11] !== S ||
        h[12] !== e.shares?.shares ||
        h[13] !== e.shares?.shares.filter ||
        h[14] !== j ||
        h[15] !== C ||
        h[16] !== f
      ) {
        let r,
          t = e.shares?.shares.filter(v)
        for (let e of ((s = (e, r) => {
          let i
          return (
            S.has(`group:${e}`) &&
              (i = t?.some(
                (r) =>
                  "principal" === r.recipient.recipient_type &&
                  "group" === r.recipient.principal_type &&
                  r.recipient.principal_id === e,
              )
                ? "pending"
                : "existing"),
            {
              id: `group:${e}`,
              label: r,
              accessStatus: i,
              recipient: { recipient_type: "principal", principal_type: "group", principal_id: e },
              isValid: !0,
            }
          )
        }),
        (o = []),
        h[19] !== f ? ((r = f ?? []), (h[19] = f), (h[20] = r)) : (r = h[20]),
        r)) {
          let r,
            i = `user:${e.account_user_id}`
          C.has(i) ||
            (null != e.email && j.has(e.email.trim().toLowerCase())) ||
            ((S.has(i) || (null != e.email && E.has(e.email.trim().toLowerCase()))) &&
              (r = t?.some((r) =>
                "principal" === r.recipient.recipient_type
                  ? (r.recipient.principal_type ?? "user") === "user" && r.recipient.principal_id === e.account_user_id
                  : r.recipient.email.trim().toLowerCase() === e.email?.trim().toLowerCase(),
              )
                ? "pending"
                : "existing"),
            o.push({
              id: i,
              colorKey: e.account_user_id,
              label: e.name || e.email || e.account_user_id,
              secondaryLabel: e.email ?? void 0,
              accessStatus: r,
              recipient: { recipient_type: "principal", principal_type: "user", principal_id: e.account_user_id },
              isValid: !0,
            }))
        }
        ;((h[10] = E),
          (h[11] = S),
          (h[12] = e.shares?.shares),
          (h[13] = e.shares?.shares.filter),
          (h[14] = j),
          (h[15] = C),
          (h[16] = f),
          (h[17] = s),
          (h[18] = o))
      } else ((s = h[17]), (o = h[18]))
      ;(h[21] !== s || h[22] !== e.allowGroups
        ? ((c = e.allowGroups ? (e) => s(e.id, e.name) : void 0), (h[21] = s), (h[22] = e.allowGroups), (h[23] = c))
        : (c = h[23]),
        h[24] !== s ? ((u = (e) => s(e.id, e.name)), (h[24] = s), (h[25] = u)) : (u = h[25]))
      let T = g || _
      return (
        h[26] !== e.query || h[27] !== j
          ? ((p = "" !== e.query.trim() && j.has(e.query.trim().toLowerCase())),
            (h[26] = e.query),
            (h[27] = j),
            (h[28] = p))
          : (p = h[28]),
        h[29] !== o || h[30] !== e || h[31] !== c || h[32] !== u || h[33] !== T || h[34] !== p || h[35] !== y
          ? ((m = (0, i.jsx)(A, {
              ...e,
              getGroupRecipient: c,
              getTeamRecipient: u,
              options: o,
              isLoading: T,
              queryAlreadyAdded: p,
              searchFailed: y,
            })),
            (h[29] = o),
            (h[30] = e),
            (h[31] = c),
            (h[32] = u),
            (h[33] = T),
            (h[34] = p),
            (h[35] = y),
            (h[36] = m))
          : (m = h[36]),
        m
      )
    }
    function v(e) {
      return "pending" === e.status
    }
    function b(e) {
      return null == e.secondaryLabel ? [] : [e.secondaryLabel.trim().toLowerCase()]
    }
    function x(e) {
      return e.id
    }
    function I(e) {
      return e.trim().toLowerCase()
    }
    function A(e) {
      let r,
        t,
        n,
        c,
        d,
        h,
        f,
        _,
        g,
        y,
        v,
        b,
        x,
        I,
        A,
        j,
        T,
        L,
        M = (0, a.c)(61)
      M[0] !== e
        ? (({
            getGroupRecipient: r,
            getTeamRecipient: t,
            options: n,
            queryAlreadyAdded: d,
            searchFailed: h,
            isLoading: f,
            ...c
          } = e),
          (M[0] = e),
          (M[1] = r),
          (M[2] = t),
          (M[3] = n),
          (M[4] = c),
          (M[5] = d),
          (M[6] = h),
          (M[7] = f))
        : ((r = M[1]), (t = M[2]), (n = M[3]), (c = M[4]), (d = M[5]), (h = M[6]), (f = M[7]))
      let q = void 0 !== d && d,
        k = void 0 !== h && h,
        N = void 0 !== f && f,
        F = (0, s.A)(),
        D = (0, l.useId)(),
        O = c.selected.some(C),
        K = c.disabled || (c.isWorkspace && !c.canSearchMembers),
        P = null
      if (O) {
        let e
        ;(M[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(o.A, {
              id: "librarySharing.invite.invalidEmails",
              defaultMessage: "Remove invalid email addresses before inviting",
            })),
            (M[8] = e))
          : (e = M[8]),
          (P = e))
      } else if (q) {
        let e
        ;(M[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(o.A, {
              id: "librarySharing.invite.alreadyAdded",
              defaultMessage: "This person already has access or is selected",
            })),
            (M[9] = e))
          : (e = M[9]),
          (P = e))
      }
      M[10] !== P || M[11] !== D || M[12] !== c.ariaDescribedBy
        ? ((_ = [c.ariaDescribedBy, null == P ? void 0 : D].filter(E).join(" ") || void 0),
          (M[10] = P),
          (M[11] = D),
          (M[12] = c.ariaDescribedBy),
          (M[13] = _))
        : (_ = M[13])
      let G = _,
        H = null
      if (c.selected.length > 0 && null != c.role && null != c.allowedRoles) {
        let e
        ;(M[14] !== K || M[15] !== c.allowedRoles || M[16] !== c.onRoleChange || M[17] !== c.role
          ? ((e =
              c.allowedRoles.length > 1
                ? (0, i.jsx)(u.e, {
                    indicatorVariant: "checkmark",
                    variant: "inline",
                    renderLabel: R,
                    disabled: K,
                    options: c.allowedRoles.map(S),
                    value: c.role,
                    onChange: c.onRoleChange,
                  })
                : (0, i.jsx)("span", {
                    className: "text-tertiary",
                    children: (0, i.jsx)(m.u, { permission: c.role }),
                  })),
            (M[14] = K),
            (M[15] = c.allowedRoles),
            (M[16] = c.onRoleChange),
            (M[17] = c.role),
            (M[18] = e))
          : (e = M[18]),
          (H = e))
      }
      M[19] !== F
        ? ((g = F.formatMessage({ id: "librarySharing.invite.personalPlaceholder", defaultMessage: "Add emails" })),
          (M[19] = F),
          (M[20] = g))
        : (g = M[20])
      let U = g
      M[21] !== F
        ? ((y = (e) =>
            F.formatMessage(
              { id: "librarySharing.invite.removeSelection", defaultMessage: "Remove {name} from the invitation" },
              { name: e.label },
            )),
          (M[21] = F),
          (M[22] = y))
        : (y = M[22])
      let B = y
      return (
        M[23] !== U || M[24] !== c.isWorkspace
          ? ((v = c.isWorkspace ? void 0 : { people: U, peopleAndTeams: U }),
            (M[23] = U),
            (M[24] = c.isWorkspace),
            (M[25] = v))
          : (v = M[25]),
        M[26] !== n ? ((b = n?.map(w)), (M[26] = n), (M[27] = b)) : (b = M[27]),
        M[28] !== F || M[29] !== c.isWorkspace
          ? ((x = c.isWorkspace
              ? F.formatMessage({
                  id: "librarySharing.invite.searching",
                  defaultMessage: "Searching workspace members",
                })
              : F.formatMessage({
                  id: "librarySharing.invite.searchingRecipients",
                  defaultMessage: "Searching for people",
                })),
            (M[28] = F),
            (M[29] = c.isWorkspace),
            (M[30] = x))
          : (x = M[30]),
        M[31] !== c.isWorkspace
          ? ((I = c.isWorkspace
              ? (0, i.jsx)(o.A, {
                  id: "librarySharing.invite.noWorkspaceMatches",
                  defaultMessage: "No matching people or teams",
                })
              : (0, i.jsx)(o.A, {
                  id: "librarySharing.invite.noEligibleRecipient",
                  defaultMessage: "No matching recipients",
                })),
            (M[31] = c.isWorkspace),
            (M[32] = I))
          : (I = M[32]),
        M[33] !== G ||
        M[34] !== K ||
        M[35] !== r ||
        M[36] !== B ||
        M[37] !== t ||
        M[38] !== N ||
        M[39] !== c.accountId ||
        M[40] !== c.onChange ||
        M[41] !== c.onQueryChange ||
        M[42] !== c.query ||
        M[43] !== c.selected ||
        M[44] !== H ||
        M[45] !== k ||
        M[46] !== I ||
        M[47] !== v ||
        M[48] !== b ||
        M[49] !== x
          ? ((A = (0, i.jsx)(p.B, {
              accountId: c.accountId,
              getTeamRecipient: t,
              getGroupRecipient: r,
              ariaDescribedBy: G,
              disabled: K,
              placeholder: v,
              selectedOptions: c.selected,
              getRemoveLabel: B,
              options: b,
              onChange: c.onChange,
              query: c.query,
              onQueryChange: c.onQueryChange,
              isLoading: N,
              searchFailed: k,
              loadingLabel: x,
              emptyMessage: I,
              trailingContent: H,
            })),
            (M[33] = G),
            (M[34] = K),
            (M[35] = r),
            (M[36] = B),
            (M[37] = t),
            (M[38] = N),
            (M[39] = c.accountId),
            (M[40] = c.onChange),
            (M[41] = c.onQueryChange),
            (M[42] = c.query),
            (M[43] = c.selected),
            (M[44] = H),
            (M[45] = k),
            (M[46] = I),
            (M[47] = v),
            (M[48] = b),
            (M[49] = x),
            (M[50] = A))
          : (A = M[50]),
        M[51] !== P || M[52] !== D
          ? ((j =
              null == P
                ? null
                : (0, i.jsx)("p", { id: D, className: "text-sm text-danger", role: "alert", children: P })),
            (M[51] = P),
            (M[52] = D),
            (M[53] = j))
          : (j = M[53]),
        M[54] !== c.canSearchMembers || M[55] !== c.isWorkspace
          ? ((T =
              c.isWorkspace && !c.canSearchMembers
                ? (0, i.jsx)("p", {
                    className: "text-sm text-codex-description",
                    children: (0, i.jsx)(o.A, {
                      id: "librarySharing.invite.searchRestricted",
                      defaultMessage: "Your workspace doesn't allow searching for members",
                    }),
                  })
                : null),
            (M[54] = c.canSearchMembers),
            (M[55] = c.isWorkspace),
            (M[56] = T))
          : (T = M[56]),
        M[57] !== A || M[58] !== j || M[59] !== T
          ? ((L = (0, i.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col gap-2", children: [A, j, T] })),
            (M[57] = A),
            (M[58] = j),
            (M[59] = T),
            (M[60] = L))
          : (L = M[60]),
        L
      )
    }
    function w(e) {
      return {
        ...e,
        Icon: "principal" === e.recipient.recipient_type && "group" === e.recipient.principal_type ? c.oJq : void 0,
      }
    }
    function S(e) {
      return { value: e }
    }
    function R(e) {
      return (0, i.jsx)(m.u, { permission: e })
    }
    function E(e) {
      return null != e
    }
    function C(e) {
      return !e.isValid
    }
    t.d(
      r,
      {},
      {
        h: function (e) {
          let r,
            t = (0, a.c)(5)
          if (e.isWorkspace && e.canSearchMembers) {
            let r,
              a = `${e.accountId}:${e.allowGroups}`
            return (
              t[0] !== e || t[1] !== a
                ? ((r = (0, i.jsx)(y, { ...e }, a)), (t[0] = e), (t[1] = a), (t[2] = r))
                : (r = t[2]),
              r
            )
          }
          return (
            t[3] !== e
              ? ((r = e.isWorkspace ? (0, i.jsx)(A, { ...e }) : (0, i.jsx)(g, { ...e })), (t[3] = e), (t[4] = r))
              : (r = t[4]),
            r
          )
        },
      },
    )
  },
  AEhU(e, r, t) {
    var i = t("ASxG"),
      a = t("nqea")
    let n = /[\s,;]+/,
      l = i.Rpp()
    t.d(
      r,
      {},
      {
        Go: function (e, r, t) {
          return e.some(({ recipient: e, secondaryLabel: i }) =>
            "email" === e.recipient_type
              ? r.has(e.email.trim().toLowerCase())
              : t.has(`${e.principal_type ?? "user"}:${e.principal_id}`) ||
                (null != i && r.has(i.trim().toLowerCase())),
          )
        },
        Hd: function (e, r, t) {
          return {
            existingPrincipalKeys: new Set([
              (0, a.nD)(e.owner.principal),
              (0, a.nD)(e.viewer.principal),
              ...(r?.shares.flatMap((e) =>
                "principal" === e.recipient.recipient_type
                  ? [`${e.recipient.principal_type ?? "user"}:${e.recipient.principal_id}`]
                  : [],
              ) ?? []),
              ...(t?.collaborators.map(({ principal: e }) => (0, a.nD)(e)) ?? []),
            ]),
            existingEmails: new Set(
              [
                e.owner.email,
                e.viewer.email,
                ...(r?.shares.map((e) =>
                  "email" === e.recipient.recipient_type ? e.recipient.email : e.recipient_email,
                ) ?? []),
                ...(t?.collaborators.map(({ email: e }) => e) ?? []),
              ].flatMap((e) => (null == e ? [] : [e.trim().toLowerCase()])),
            ),
          }
        },
        on: function ({ query: e, selected: r, currentEmail: t, existingEmails: i }) {
          let a = [...r],
            s = new Set([...i, t ?? ""].map((e) => e.trim().toLowerCase())),
            o = new Set(r.map((e) => e.id)),
            c = !1
          for (let r of e.split(n)) {
            let e = r.trim().toLowerCase()
            if ("" === e) continue
            let t = `email:${e}`
            if (s.has(e) || o.has(t)) {
              c = !0
              continue
            }
            ;(o.add(t),
              a.push({
                id: t,
                label: e,
                recipient: { recipient_type: "email", email: e },
                isValid: l.safeParse(e).success,
              }))
          }
          return { selected: a, rejectedExisting: c }
        },
      },
    )
  },
  jqgw(e, r, t) {
    var i = t("t2SL")
    t.d(
      r,
      {},
      {
        F: function () {
          return i.G_
        },
      },
    )
  },
  AOG7(e, r, t) {
    var i = t("QosV"),
      a = t("T0Rc"),
      n = t("UOa8"),
      l = t("rvFo"),
      s = t("kK7d"),
      o = t("GEsy"),
      c = t("eShZ")
    async function d(e, r, t, { includeProfilePhotos: i = !1, includeTotal: a, limit: n = 10 } = {}) {
      return (
        await s.CodexRequest.safeGet("/accounts/{account_id}/users", {
          parameters: {
            path: { account_id: e },
            query: { limit: n, offset: 0, query: r, include_profile_photos: i, include_total: a },
          },
          signal: t,
        })
      ).items
    }
    t.d(
      r,
      {},
      {
        AB: d,
        C4: async function (e, r, t) {
          let i = r.trim().toLowerCase(),
            a = await d(e, i, t)
          return a.find((e) => e.email?.trim().toLowerCase() === i)?.account_user_id
        },
        Nc: function (e, r) {
          let t,
            c,
            d,
            u,
            p,
            m,
            h = (0, i.c)(18)
          h[0] !== r ? ((t = void 0 === r ? {} : r), (h[0] = r), (h[1] = t)) : (t = h[1])
          let { includeMemberCounts: f } = t,
            _ = void 0 !== f && f,
            { accountId: g, authMethod: y } = (0, n.As)()
          h[2] !== e ? ((c = e.trim()), (h[2] = e), (h[3] = c)) : (c = h[3])
          let v = c,
            b = (0, o.o)(v, 150)
          ;(h[4] !== _ ? ((d = _ ? ["member-counts"] : []), (h[4] = _), (h[5] = d)) : (d = h[5]),
            h[6] !== g || h[7] !== v || h[8] !== d
              ? ((u = ["workspace-groups", g, v, ...d]), (h[6] = g), (h[7] = v), (h[8] = d), (h[9] = u))
              : (u = h[9]))
          let x = ("chatgpt" === y || "chatgptAuthTokens" === y) && null != g && v.length > 0 && v === b
          return (
            h[10] !== g || h[11] !== _ || h[12] !== v
              ? ((p = async (e) => {
                  let { signal: r } = e
                  if (null == g) throw Error("account id is required")
                  return (
                    await s.CodexRequest.safeGet("/accounts/{account_id}/groups", {
                      parameters: {
                        path: { account_id: g },
                        query: { limit: 10, offset: 0, query: v, include_member_counts: _, include_total: !1 },
                      },
                      signal: AbortSignal.any([r, AbortSignal.timeout(15e3)]),
                    })
                  ).items
                }),
                (h[10] = g),
                (h[11] = _),
                (h[12] = v),
                (h[13] = p))
              : (p = h[13]),
            h[14] !== u || h[15] !== x || h[16] !== p
              ? ((m = {
                  queryKey: u,
                  enabled: x,
                  networkMode: "always",
                  refetchOnReconnect: !0,
                  retry: !1,
                  queryFn: p,
                  staleTime: l.D.ONE_MINUTE,
                }),
                (h[14] = u),
                (h[15] = x),
                (h[16] = p),
                (h[17] = m))
              : (m = h[17]),
            (0, a.I)(m)
          )
        },
        Nv: function (e, r) {
          let t,
            s,
            c,
            u,
            p,
            m,
            h = (0, i.c)(18)
          h[0] !== r ? ((t = void 0 === r ? {} : r), (h[0] = r), (h[1] = t)) : (t = h[1])
          let { includeProfilePhotos: f } = t,
            _ = void 0 !== f && f,
            { accountId: g, authMethod: y } = (0, n.As)()
          h[2] !== e ? ((s = e.trim()), (h[2] = e), (h[3] = s)) : (s = h[3])
          let v = s,
            b = (0, o.o)(v, 150)
          ;(h[4] !== _ ? ((c = _ ? ["profile-photos"] : []), (h[4] = _), (h[5] = c)) : (c = h[5]),
            h[6] !== g || h[7] !== v || h[8] !== c
              ? ((u = ["workspace-users", g, v, ...c]), (h[6] = g), (h[7] = v), (h[8] = c), (h[9] = u))
              : (u = h[9]))
          let x = ("chatgpt" === y || "chatgptAuthTokens" === y) && null != g && v.length > 0 && v === b
          return (
            h[10] !== g || h[11] !== _ || h[12] !== v
              ? ((p = (e) => {
                  let { signal: r } = e
                  if (null == g) throw Error("account id is required")
                  return d(g, v, AbortSignal.any([r, AbortSignal.timeout(15e3)]), { includeProfilePhotos: _ })
                }),
                (h[10] = g),
                (h[11] = _),
                (h[12] = v),
                (h[13] = p))
              : (p = h[13]),
            h[14] !== u || h[15] !== x || h[16] !== p
              ? ((m = {
                  queryKey: u,
                  enabled: x,
                  networkMode: "always",
                  refetchOnReconnect: !0,
                  retry: !1,
                  queryFn: p,
                  staleTime: l.D.ONE_MINUTE,
                }),
                (h[14] = u),
                (h[15] = x),
                (h[16] = p),
                (h[17] = m))
              : (m = h[17]),
            (0, a.I)(m)
          )
        },
        We: async function (e, r, t) {
          try {
            return (
              await s.CodexRequest.safeGet("/spaces/people", {
                parameters: { query: { account_id: e, query: r, limit: 10, offset: 0 } },
                signal: t,
              })
            ).items
          } catch (e) {
            if (!(e instanceof c.FetchError && 404 === e.status)) throw e
          }
          return d(e, r, t)
        },
      },
    )
  },
  Yqxh(e, r, t) {
    t.d(
      r,
      {},
      {
        x: function (e, r) {
          return r ?? (e ? "editor" : "viewer")
        },
      },
    )
  },
  qCmE(e, r, t) {
    var i = t("ABep"),
      a = t("QosV"),
      n = t("qmMi"),
      l = t("iFq6"),
      s = t("UOa8"),
      o = t("MFZ6")
    t.d(
      r,
      {},
      {
        K: function (e) {
          let r,
            t,
            c = (0, a.c)(6),
            { groupId: d, size: u } = e,
            { accountId: p } = (0, s.As)(),
            { data: m } = (0, n._U)(l.l, p ?? "", { enabled: null != p }) ?? {}
          c[0] !== d || c[1] !== m ? ((r = m?.find((e) => e.id === d)), (c[0] = d), (c[1] = m), (c[2] = r)) : (r = c[2])
          let h = r,
            f = h?.avatar
          return (
            c[3] !== u || c[4] !== f
              ? ((t = (0, i.jsx)(o.y, { avatar: f, size: u })), (c[3] = u), (c[4] = f), (c[5] = t))
              : (t = c[5]),
            t
          )
        },
      },
    )
  },
  ENs9(e, r, t) {
    var i = t("ABep"),
      a = t("QosV"),
      n = t("i1uX"),
      l = t("on57"),
      s = t("qmMi"),
      o = t("zd8w"),
      c = t("oyxz"),
      d = t("Wf1j"),
      u = t("LhhH"),
      p = t("Sm6l"),
      m = t("bqtn"),
      h = t("bVeK"),
      f = t("nzx4"),
      _ = t("RNul"),
      g = t("UxN3"),
      y = t("g7Qx"),
      v = t("SziE"),
      b = t("i7fz"),
      x = t("v7NL"),
      I = t("HzoD"),
      A = t("Rxyo"),
      w = t("GpIR")
    function S(e) {
      e.preventDefault()
    }
    function R(e) {
      e.preventDefault()
    }
    function E(e) {
      return e.id
    }
    function C(e) {
      return null == e.disabledReason
    }
    function j(e) {
      return e.id
    }
    function T(e) {
      return e.options
    }
    function L(e, r) {
      return [e, r]
    }
    function M(e) {
      return e.id
    }
    function q(e) {
      return e.id
    }
    function k() {
      return !1
    }
    function N() {}
    function F(e) {
      return e.options
    }
    function D(e) {
      let r,
        t,
        n,
        l,
        s,
        o = (0, a.c)(16),
        { disabled: c, isOpen: u, listboxId: m, onClearSelection: f, onToggleOptions: _ } = e,
        g = (0, d.A)()
      ;(o[0] !== c || o[1] !== g || o[2] !== f
        ? ((r =
            null != f
              ? (0, i.jsx)(p.$, {
                  "aria-label": g.formatMessage({
                    id: "shareInviteAutocomplete.clearSelections",
                    defaultMessage: "Clear selections",
                  }),
                  color: "ghostTertiary",
                  size: "iconCircle",
                  disabled: c,
                  onClick: f,
                  children: (0, i.jsx)(h.Gmf, {}),
                })
              : null),
          (o[0] = c),
          (o[1] = g),
          (o[2] = f),
          (o[3] = r))
        : (r = o[3]),
        o[4] !== g
          ? ((t = g.formatMessage({ id: "shareInviteAutocomplete.toggleOptions", defaultMessage: "Toggle options" })),
            (o[4] = g),
            (o[5] = t))
          : (t = o[5]))
      let y = u ? m : void 0
      return (
        o[6] === Symbol.for("react.memo_cache_sentinel") ? ((n = (0, i.jsx)(h.Aq_, {})), (o[6] = n)) : (n = o[6]),
        o[7] !== c || o[8] !== u || o[9] !== _ || o[10] !== t || o[11] !== y
          ? ((l = (0, i.jsx)(p.$, {
              "aria-label": t,
              "aria-expanded": u,
              "aria-controls": y,
              "aria-haspopup": "listbox",
              color: "ghostTertiary",
              size: "iconCircle",
              disabled: c,
              onClick: _,
              children: n,
            })),
            (o[7] = c),
            (o[8] = u),
            (o[9] = _),
            (o[10] = t),
            (o[11] = y),
            (o[12] = l))
          : (l = o[12]),
        o[13] !== r || o[14] !== l
          ? ((s = (0, i.jsxs)(i.Fragment, { children: [r, l] })), (o[13] = r), (o[14] = l), (o[15] = s))
          : (s = o[15]),
        s
      )
    }
    function O(e) {
      let r,
        t,
        n = (0, a.c)(10),
        {
          disabled: l,
          highlightedIndex: s,
          listboxId: o,
          optionSections: c,
          selectedOptionIds: d,
          variant: u,
          getItemProps: p,
        } = e
      return (
        n[0] !== l || n[1] !== p || n[2] !== s || n[3] !== o || n[4] !== c || n[5] !== d || n[6] !== u
          ? ((r = c.flatMap((e, r) => {
              if (0 === e.options.length) return []
              let t = c.slice(0, r).reduce(K, 0)
              return [
                (0, i.jsxs)(
                  "div",
                  {
                    className: "flex flex-col",
                    children: [
                      e.label &&
                        (0, i.jsx)("div", {
                          className: "px-2 pt-2 pb-1 text-xs font-medium text-codex-description",
                          children: e.label,
                        }),
                      e.options.map((e, r) =>
                        (0, i.jsx)(
                          P,
                          {
                            listboxId: o,
                            highlightedIndex: s,
                            index: t + r,
                            option: e,
                            selected: d?.has(e.id),
                            variant: u,
                            disabled: l,
                            getItemProps: p,
                          },
                          e.id,
                        ),
                      ),
                    ],
                  },
                  e.id,
                ),
              ]
            })),
            (n[0] = l),
            (n[1] = p),
            (n[2] = s),
            (n[3] = o),
            (n[4] = c),
            (n[5] = d),
            (n[6] = u),
            (n[7] = r))
          : (r = n[7]),
        n[8] !== r ? ((t = (0, i.jsx)(i.Fragment, { children: r })), (n[8] = r), (n[9] = t)) : (t = n[9]),
        t
      )
    }
    function K(e, r) {
      return e + r.options.length
    }
    function P(e) {
      let r,
        t,
        n,
        s,
        o,
        c,
        d,
        p,
        m,
        f,
        _,
        g = (0, a.c)(47),
        {
          disabled: v,
          highlightedIndex: b,
          index: x,
          listboxId: I,
          option: A,
          selected: w,
          variant: S,
          getItemProps: R,
        } = e,
        E = A.Icon,
        C = A.avatar
      if (null == C && (null != A.imageUrl || (null == E && null != A.colorKey))) {
        let e,
          r = A.imageUrl ?? null
        ;(g[0] !== A.colorKey || g[1] !== A.label || g[2] !== r
          ? ((e = (0, i.jsx)(u.e, { alt: "", colorKey: A.colorKey, name: A.label, size: "sm", src: r })),
            (g[0] = A.colorKey),
            (g[1] = A.label),
            (g[2] = r),
            (g[3] = e))
          : (e = g[3]),
          (C = e))
      } else if (null == C && null != E) {
        let e
        ;(g[4] !== E
          ? ((e = (0, i.jsx)(E, { "aria-hidden": !0, className: "icon-sm mt-0.5 shrink-0" })), (g[4] = E), (g[5] = e))
          : (e = g[5]),
          (C = e))
      }
      let j = null == I ? void 0 : `${I}-option-${encodeURIComponent(A.id)}`,
        T = "select" === S ? -1 : void 0
      g[6] !== R || g[7] !== x || g[8] !== A.disabledReason
        ? ((r = null == A.disabledReason ? R(x) : {}), (g[6] = R), (g[7] = x), (g[8] = A.disabledReason), (g[9] = r))
        : (r = g[9])
      let L = w ?? x === b,
        M = v || null != A.disabledReason,
        q = "select" === S ? "items-center px-3 py-2" : "items-start px-2 py-1.5",
        k = (v || null != A.disabledReason) && "opacity-50",
        N = x === b && "bg-secondary-ghost-hover"
      ;(g[10] !== q || g[11] !== k || g[12] !== N
        ? ((t = (0, l.A)(
            "cursor-interaction flex w-full gap-2 rounded-sm text-start disabled:cursor-not-allowed",
            q,
            k,
            N,
          )),
          (g[10] = q),
          (g[11] = k),
          (g[12] = N),
          (g[13] = t))
        : (t = g[13]),
        g[14] !== w || g[15] !== S
          ? ((n = "select" === S && (w ? (0, i.jsx)(h.xch, {}) : (0, i.jsx)(h.XNe, {}))),
            (g[14] = w),
            (g[15] = S),
            (g[16] = n))
          : (n = g[16]))
      let F = C,
        D = "select" === S ? "text-base" : "text-sm"
      ;(g[17] !== D ? ((s = (0, l.A)("text-default", D)), (g[17] = D), (g[18] = s)) : (s = g[18]),
        g[19] !== A.label || g[20] !== s
          ? ((o = (0, i.jsx)("span", { className: s, children: A.label })), (g[19] = A.label), (g[20] = s), (g[21] = o))
          : (o = g[21]),
        g[22] !== A.secondaryLabel
          ? ((c =
              null == A.secondaryLabel
                ? null
                : (0, i.jsx)("span", { className: "text-sm text-codex-description", children: A.secondaryLabel })),
            (g[22] = A.secondaryLabel),
            (g[23] = c))
          : (c = g[23]),
        g[24] !== o || g[25] !== c
          ? ((d = (0, i.jsxs)("span", { className: "flex min-w-0 flex-1 flex-col", children: [o, c] })),
            (g[24] = o),
            (g[25] = c),
            (g[26] = d))
          : (d = g[26]),
        g[27] !== A.disabledReason
          ? ((p =
              null == A.disabledReason
                ? null
                : (0, i.jsx)("span", {
                    className: "shrink-0 self-center text-end text-sm text-codex-description",
                    children: A.disabledReason,
                  })),
            (g[27] = A.disabledReason),
            (g[28] = p))
          : (p = g[28]),
        g[29] !== w || g[30] !== S
          ? ((m = w && "select" !== S ? (0, i.jsx)(y.A, { "aria-hidden": !0, className: "icon-sm shrink-0" }) : null),
            (g[29] = w),
            (g[30] = S),
            (g[31] = m))
          : (m = g[31]),
        g[32] !== C ||
        g[33] !== j ||
        g[34] !== n ||
        g[35] !== d ||
        g[36] !== p ||
        g[37] !== m ||
        g[38] !== T ||
        g[39] !== r ||
        g[40] !== L ||
        g[41] !== M ||
        g[42] !== t
          ? ((f = (0, i.jsxs)("button", {
              id: j,
              tabIndex: T,
              type: "button",
              ...r,
              "aria-selected": L,
              disabled: M,
              className: t,
              role: "option",
              children: [n, F, d, p, m],
            })),
            (g[32] = C),
            (g[33] = j),
            (g[34] = n),
            (g[35] = d),
            (g[36] = p),
            (g[37] = m),
            (g[38] = T),
            (g[39] = r),
            (g[40] = L),
            (g[41] = M),
            (g[42] = t),
            (g[43] = f))
          : (f = g[43]))
      let O = f
      return (
        g[44] !== A || g[45] !== O
          ? ((_ = A.renderIdentity?.(O, "option") ?? O), (g[44] = A), (g[45] = O), (g[46] = _))
          : (_ = g[46]),
        _
      )
    }
    t.d(
      r,
      {},
      {
        X: function (e) {
          let r,
            t,
            d,
            u,
            y,
            K,
            G,
            H,
            U,
            B,
            Y,
            z,
            Q,
            $,
            W,
            V,
            X,
            Z,
            J,
            ee,
            er,
            et,
            ei,
            ea,
            en,
            el,
            es,
            eo,
            ec,
            ed,
            eu = (0, a.c)(200),
            {
              preserveHighlightOnItemsChange: ep,
              ariaDescribedBy: em,
              ariaInvalid: eh,
              ariaLabel: ef,
              autoFocus: e_,
              waitForDialogEntrance: eg,
              preserveEmptyQueryOrder: ey,
              clearQueryOnSelect: ev,
              disabled: eb,
              emptyMessage: ex,
              getRemoveLabel: eI,
              getOptionError: eA,
              leadingContent: ew,
              loadingLabel: eS,
              loadingSize: eR,
              options: eE,
              dotOptions: eC,
              optionSections: ej,
              placeholder: eT,
              portalContainer: eL,
              query: eM,
              searchFailed: eq,
              searchStatus: ek,
              selectedOptionIds: eN,
              selectedOptions: eF,
              showLoadingDropdown: eD,
              showSuggestionsOnFocus: eO,
              showSuggestionsOnQueryChange: eK,
              size: eP,
              trailingContent: eG,
              variant: eH,
              onClearSelection: eU,
              onEscape: eB,
              onBlur: eY,
              onKeyDown: ez,
              onPaste: eQ,
              onQueryChange: e$,
              onRemoveOption: eW,
              onSelectOption: eV,
            } = e,
            eX = void 0 === ep || ep,
            eZ = void 0 !== e_ && e_,
            eJ = void 0 !== ey && ey,
            e0 = void 0 === ev || ev,
            e1 = void 0 !== eb && eb,
            e2 = void 0 === eR ? "default" : eR
          eu[0] !== eF ? ((r = void 0 === eF ? [] : eF), (eu[0] = eF), (eu[1] = r)) : (r = eu[1])
          let e3 = r,
            e4 = void 0 === eD || eD,
            e5 = void 0 !== eO && eO,
            e6 = void 0 !== eK && eK,
            e7 = void 0 === eP ? "medium" : eP,
            e8 = void 0 === eH ? "field" : eH,
            e9 = (0, o.useRef)(null),
            re = (0, o.useRef)(!1)
          ;(eu[2] !== eZ || eu[3] !== e1
            ? ((t = () => {
                if (!eZ || e1 || re.current) return
                let e = e9.current
                if (
                  null == e ||
                  null != e.closest('[data-exiting], [data-exiting-active], [role="dialog"][data-state="closed"]')
                )
                  return
                let r = e.closest('[role="dialog"]'),
                  t = e.ownerDocument.activeElement
                if (null != r && !r.contains(t)) {
                  let t = (t) => {
                    e.disabled ||
                      ((re.current = !0),
                      t.target === r &&
                        null ==
                          e.closest('[data-exiting], [data-exiting-active], [role="dialog"][data-state="closed"]') &&
                        e.focus({ preventScroll: !0 }))
                  }
                  return (
                    r.addEventListener("focusin", t, { once: !0 }),
                    () => {
                      r.removeEventListener("focusin", t)
                    }
                  )
                }
                ;((re.current = !0),
                  ((null != r && t === r) || (null == r && t === e.ownerDocument.body)) &&
                    e.focus({ preventScroll: !0 }))
              }),
              (d = [eZ, e1]),
              (eu[2] = eZ),
              (eu[3] = e1),
              (eu[4] = t),
              (eu[5] = d))
            : ((t = eu[4]), (d = eu[5])),
            (0, o.useEffect)(t, d))
          let rr = (function (e, r, t) {
              if (!t?.length) return e
              let a = new Map(t.map((e) => [e.id, e])),
                n = (
                  e ?? [
                    {
                      id: "people",
                      label: (0, i.jsx)(c.A, { id: "shareInviteAutocomplete.people", defaultMessage: "People" }),
                      options: r ?? [],
                    },
                  ]
                ).map((e) => ({ ...e, options: e.options.filter(({ id: e }) => !a.has(e)) })),
                l = n.findIndex((e) => "people" === e.id)
              return (
                n.splice(l < 0 ? n.length : l + 1, 0, {
                  id: "dots",
                  label: (0, i.jsx)(c.A, { id: "shareInviteAutocomplete.dots", defaultMessage: "Dots" }),
                  options: [...a.values()],
                }),
                n
              )
            })(ej, eE, eC),
            rt = (0, o.useRef)(null),
            [ri, ra] = (0, o.useState)(null),
            rn = (0, o.useId)(),
            rl = "menu" !== e8 && ("select" === e8 || null != eE || null != rr || e4 || e5) ? rn : void 0,
            [rs, ro] = (0, o.useState)(!1),
            [rc, rd] = (0, o.useState)(!1),
            [ru, rp] = (0, o.useState)(null),
            rm = rr?.flatMap(F) ?? eE,
            rh = ek?.peopleError || ek?.peopleLoading || ek?.groupsError || ek?.teamsError || ek?.teamsLoading,
            rf =
              "menu" === e8
                ? rh || null != rm || (e4 && eM.trim().length > 0)
                : !e1 &&
                  !rc &&
                  (eM.trim().length > 0 || (e5 && rs)) &&
                  (rh || (e4 && null == rm) || (null != rm && (rm.length > 0 || null != ex))),
            r_ = void 0 !== eg && eg && rf
          eu[6] !== r_ || eu[7] !== eL
            ? ((u = (e) => {
                if (!r_ || null == eL) return N
                let r = new MutationObserver(e)
                for (let e = eL; null != e; e = e.parentElement)
                  r.observe(e, {
                    attributes: !0,
                    attributeFilter: ["data-entering", "data-entering-active", "data-exiting", "data-exiting-active"],
                  })
                return () => r.disconnect()
              }),
              (eu[6] = r_),
              (eu[7] = eL),
              (eu[8] = u))
            : (u = eu[8])
          let rg = u
          eu[9] !== r_ || eu[10] !== eL
            ? ((y = () =>
                r_ &&
                (void 0 === eL ||
                  eL?.closest("[data-entering], [data-entering-active], [data-exiting], [data-exiting-active]") !=
                    null)),
              (eu[9] = r_),
              (eu[10] = eL),
              (eu[11] = y))
            : (y = eu[11])
          let ry = y,
            rv = (0, o.useSyncExternalStore)(rg, ry, k),
            rb = rf && !rv,
            rx = (0, s.Ul)(!!rb && A.y)
          eu[12] !== rb || eu[13] !== eJ || eu[14] !== eM
            ? ((K = eJ && rb && "" === eM.trim()), (eu[12] = rb), (eu[13] = eJ), (eu[14] = eM), (eu[15] = K))
            : (K = eu[15])
          let rI = K,
            rA = rI ? ru : null
          if (null != rA && null != rm) {
            let e = new Set(rm.map(q)),
              r = new Set(rA)
            rA = [...rA.filter((r) => e.has(r)), ...rm.filter((e) => !r.has(e.id)).map(M)]
          }
          null != ru && (null == rA || ru.length !== rA.length || ru.some((e, r) => e !== rA?.[r])) && rp(rA)
          let rw = new Map(rA?.map(L)),
            rS =
              null == rA
                ? rr
                : rr?.map((e) => ({
                    ...e,
                    options: e.options.toSorted((e, r) => (rw.get(e.id) ?? 0) - (rw.get(r.id) ?? 0)),
                  })),
            rR = rS?.flatMap(T) ?? (null == rA ? rm : rm?.toSorted((e, r) => (rw.get(e.id) ?? 0) - (rw.get(r.id) ?? 0)))
          eu[16] !== ru || eu[17] !== rR || eu[18] !== rI || eu[19] !== rp
            ? ((G = () => {
                rI && null == ru && null != rR && rp(rR.map(j))
              }),
              (eu[16] = ru),
              (eu[17] = rR),
              (eu[18] = rI),
              (eu[19] = rp),
              (eu[20] = G))
            : (G = eu[20])
          let rE = G,
            rC = 0
          ;(null != rR || rh || (rC = "compact" === e2 ? 4 : 16),
            eu[21] !== rR ? ((H = rR?.filter(C)), (eu[21] = rR), (eu[22] = H)) : (H = eu[22]))
          let rj = H
          eu[23] !== eB || eu[24] !== e$ || eu[25] !== ro || eu[26] !== rp
            ? ((U = () => {
                ;(ro(!1), rp(null), e$(""), eB?.())
              }),
              (eu[23] = eB),
              (eu[24] = e$),
              (eu[25] = ro),
              (eu[26] = rp),
              (eu[27] = U))
            : (U = eu[27])
          let rT = U,
            rL = "user" === eX ? eM : void 0,
            rM = rb && !e1
          ;(eu[28] !== e0 ||
          eu[29] !== e$ ||
          eu[30] !== eV ||
          eu[31] !== ro ||
          eu[32] !== rp ||
          eu[33] !== e5 ||
          eu[34] !== e8
            ? ((B = (e) => {
                null == e.disabledReason &&
                  (eV(e), rp(null), e0 && e$(""), e9.current?.focus(), ro("select" === e8 && e5))
              }),
              (eu[28] = e0),
              (eu[29] = e$),
              (eu[30] = eV),
              (eu[31] = ro),
              (eu[32] = rp),
              (eu[33] = e5),
              (eu[34] = e8),
              (eu[35] = B))
            : (B = eu[35]),
            eu[36] !== rT || eu[37] !== eX || eu[38] !== rj || eu[39] !== rL || eu[40] !== rM || eu[41] !== B
              ? ((Y = {
                  highlightResetKey: rL,
                  items: rj,
                  getItemKey: E,
                  preserveHighlightOnItemsChange: eX,
                  isActive: rM,
                  onSelect: B,
                  onEscape: rT,
                }),
                (eu[36] = rT),
                (eu[37] = eX),
                (eu[38] = rj),
                (eu[39] = rL),
                (eu[40] = rM),
                (eu[41] = B),
                (eu[42] = Y))
              : (Y = eu[42]))
          let { highlightedIndex: rq, listRef: rk, getInputProps: rN, getItemProps: rF } = (0, x.C)(Y),
            rD = rb && !e1 ? rj?.[rq] : void 0
          eu[43] !== rD?.id || eu[44] !== rR
            ? ((z = rR?.findIndex((e) => e.id === rD?.id) ?? -1), (eu[43] = rD?.id), (eu[44] = rR), (eu[45] = z))
            : (z = eu[45])
          let rO = z
          eu[46] !== rF || eu[47] !== rR || eu[48] !== rE || eu[49] !== rj
            ? ((Q = (e) => rF(rj?.findIndex((r) => r.id === rR?.[e]?.id) ?? -1, { onMouseMove: rE })),
              (eu[46] = rF),
              (eu[47] = rR),
              (eu[48] = rE),
              (eu[49] = rj),
              (eu[50] = Q))
            : (Q = eu[50])
          let rK = Q,
            rP = null
          if (rb) {
            if (null == rR) {
              let e,
                r,
                t = null == eS ? void 0 : "status"
              ;(eu[51] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, i.jsx)(_.y, { className: "icon-xs" })), (eu[51] = e))
                : (e = eu[51]),
                eu[52] !== eS || eu[53] !== t
                  ? ((r = (0, i.jsx)("div", {
                      "aria-label": eS,
                      className: "flex flex-1 items-center justify-center text-codex-description",
                      role: t,
                      children: e,
                    })),
                    (eu[52] = eS),
                    (eu[53] = t),
                    (eu[54] = r))
                  : (r = eu[54]),
                (rP = r))
            } else if (0 === rR.length) {
              let e
              ;(eu[55] !== ex
                ? ((e = (0, i.jsx)(m.ms.Message, { compact: !0, children: ex })), (eu[55] = ex), (eu[56] = e))
                : (e = eu[56]),
                (rP = e))
            } else if (null == rS) {
              let e
              if (
                eu[57] !== e1 ||
                eu[58] !== rK ||
                eu[59] !== rO ||
                eu[60] !== rR ||
                eu[61] !== rl ||
                eu[62] !== eN ||
                eu[63] !== e8
              ) {
                let r
                ;(eu[65] !== e1 || eu[66] !== rK || eu[67] !== rO || eu[68] !== rl || eu[69] !== eN || eu[70] !== e8
                  ? ((r = (e, r) =>
                      (0, i.jsx)(
                        P,
                        {
                          listboxId: rl,
                          highlightedIndex: rO,
                          index: r,
                          option: e,
                          selected: eN?.has(e.id),
                          variant: e8,
                          disabled: e1,
                          getItemProps: rK,
                        },
                        e.id,
                      )),
                    (eu[65] = e1),
                    (eu[66] = rK),
                    (eu[67] = rO),
                    (eu[68] = rl),
                    (eu[69] = eN),
                    (eu[70] = e8),
                    (eu[71] = r))
                  : (r = eu[71]),
                  (e = rR.map(r)),
                  (eu[57] = e1),
                  (eu[58] = rK),
                  (eu[59] = rO),
                  (eu[60] = rR),
                  (eu[61] = rl),
                  (eu[62] = eN),
                  (eu[63] = e8),
                  (eu[64] = e))
              } else e = eu[64]
              rP = e
            } else {
              let e
              ;(eu[72] !== e1 ||
              eu[73] !== rS ||
              eu[74] !== rK ||
              eu[75] !== rO ||
              eu[76] !== rl ||
              eu[77] !== eN ||
              eu[78] !== e8
                ? ((e = (0, i.jsx)(O, {
                    listboxId: rl,
                    highlightedIndex: rO,
                    optionSections: rS,
                    selectedOptionIds: eN,
                    variant: e8,
                    disabled: e1,
                    getItemProps: rK,
                  })),
                  (eu[72] = e1),
                  (eu[73] = rS),
                  (eu[74] = rK),
                  (eu[75] = rO),
                  (eu[76] = rl),
                  (eu[77] = eN),
                  (eu[78] = e8),
                  (eu[79] = e))
                : (e = eu[79]),
                (rP = e))
            }
            if (void 0 !== eq && eq) {
              let e, r
              eu[80] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, i.jsx)(m.ms.Message, {
                    compact: !0,
                    children: (0, i.jsx)("span", {
                      role: "alert",
                      children: (0, i.jsx)(c.A, {
                        id: "shareInviteAutocomplete.searchFailed",
                        defaultMessage: "Couldn't search for people or groups. Try again",
                      }),
                    }),
                  })),
                  (eu[80] = e))
                : (e = eu[80])
              let t = (rR?.length ?? 0) > 0 ? rP : null
              ;(eu[81] !== t
                ? ((r = (0, i.jsxs)(i.Fragment, { children: [e, t] })), (eu[81] = t), (eu[82] = r))
                : (r = eu[82]),
                (rP = r))
            }
            if (rh) {
              let e,
                r,
                t = (rR?.length ?? 0) > 0 ? rP : null
              ;(eu[83] !== ek ? ((e = (0, i.jsx)(I.I, { ...ek })), (eu[83] = ek), (eu[84] = e)) : (e = eu[84]),
                eu[85] !== t || eu[86] !== e
                  ? ((r = (0, i.jsxs)(i.Fragment, { children: [t, e] })), (eu[85] = t), (eu[86] = e), (eu[87] = r))
                  : (r = eu[87]),
                (rP = r))
            }
          }
          ;(eu[88] !== e1 || eu[89] !== eA || eu[90] !== eI || eu[91] !== eW || eu[92] !== e3 || eu[93] !== e8
            ? (($ =
                "menu" !== e8
                  ? e3.map((e) =>
                      (0, i.jsxs)(
                        "span",
                        {
                          "aria-invalid": eA?.(e) != null || void 0,
                          className: (0, l.A)(
                            "inline-flex min-w-0 items-center",
                            "select" === e8 && "gap-2 rounded-xs bg-text/10 px-3 py-1 text-sm text-default",
                            "select" !== e8 && "gap-1 rounded-md px-1 py-[1px] text-sm",
                            "select" !== e8 &&
                              (eA?.(e) == null
                                ? "bg-secondary-soft text-secondary-solid"
                                : "bg-danger-soft text-danger-soft"),
                          ),
                          title: eA?.(e),
                          children: [
                            e.renderIdentity?.(
                              (0, i.jsx)("span", { className: "truncate", children: e.chipLabel ?? e.label }),
                              "selection",
                            ) ?? (0, i.jsx)("span", { className: "truncate", children: e.chipLabel ?? e.label }),
                            null != eI && null != eW
                              ? (0, i.jsx)(p.$, {
                                  "aria-label": eI(e),
                                  color: "ghostTertiary",
                                  disabled: e1,
                                  size: "inline",
                                  onClick: () => eW(e),
                                  children:
                                    "select" === e8
                                      ? (0, i.jsx)(h.Gmf, {})
                                      : (0, i.jsx)(g.bF, {
                                          legacyIcon: v.A,
                                          asset16: n.Q,
                                          legacyClassName: "icon-2xs",
                                          "aria-hidden": !0,
                                        }),
                                })
                              : null,
                          ],
                        },
                        e.id,
                      ),
                    )
                  : null),
              (eu[88] = e1),
              (eu[89] = eA),
              (eu[90] = eI),
              (eu[91] = eW),
              (eu[92] = e3),
              (eu[93] = e8),
              (eu[94] = $))
            : ($ = eu[94]),
            eu[95] !== rb || eu[96] !== ez || eu[97] !== eW || eu[98] !== eM || eu[99] !== e3
              ? ((W = (e) => {
                  if (
                    (ez?.(e),
                    !e.defaultPrevented &&
                      "" === eM &&
                      ("Backspace" === e.key || "Delete" === e.key) &&
                      !(0, b.X)(e.nativeEvent))
                  ) {
                    let r = e3.at(-1)
                    null != r && null != eW && (e.preventDefault(), eW(r))
                  }
                  rb && "Enter" === e.key && e.preventDefault()
                }),
                (eu[95] = rb),
                (eu[96] = ez),
                (eu[97] = eW),
                (eu[98] = eM),
                (eu[99] = e3),
                (eu[100] = W))
              : (W = eu[100]),
            eu[101] !== rN || eu[102] !== W
              ? ((V = rN({ onKeyDown: W })), (eu[101] = rN), (eu[102] = W), (eu[103] = V))
              : (V = eu[103]),
            eu[104] !== rE || eu[105] !== rx
              ? ((X = (e) => {
                  e.nativeEvent.isComposing ||
                    (rx && 229 === e.nativeEvent.keyCode) ||
                    (("ArrowDown" === e.key ||
                      "ArrowUp" === e.key ||
                      (e.ctrlKey && ("n" === e.key || "p" === e.key))) &&
                      rE())
                }),
                (eu[104] = rE),
                (eu[105] = rx),
                (eu[106] = X))
              : (X = eu[106]))
          let rG = null == rl ? void 0 : "combobox",
            rH = null == rl ? void 0 : "list",
            rU = null == rl ? void 0 : rb,
            rB = rb ? rl : void 0,
            rY = null == rl || null == rD ? void 0 : `${rl}-option-${encodeURIComponent(rD.id)}`,
            rz = "audienceReview" === e7 && w.A.inviteInput,
            rQ = "select" === e8 ? "field-sizing-content min-w-2" : "min-w-[min(100%,9rem)]"
          eu[107] !== rz || eu[108] !== rQ
            ? ((Z = (0, l.A)("flex-1 bg-transparent outline-none placeholder:text-tertiary", rz, rQ)),
              (eu[107] = rz),
              (eu[108] = rQ),
              (eu[109] = Z))
            : (Z = eu[109])
          let r$ = "menu" === e8 || 0 === e3.length ? eT : void 0
          ;(eu[110] !== rv || eu[111] !== eY || eu[112] !== ro || eu[113] !== rd
            ? ((J = (e) => {
                ;(rv && (rd(!0), ro(!1)), eY?.(e))
              }),
              (eu[110] = rv),
              (eu[111] = eY),
              (eu[112] = ro),
              (eu[113] = rd),
              (eu[114] = J))
            : (J = eu[114]),
            eu[115] !== ro || eu[116] !== rd || eu[117] !== e5
              ? ((ee = () => {
                  ;(rd(!1), ro(e5))
                }),
                (er = () => {
                  ;(rd(!1), ro(e5))
                }),
                (eu[115] = ro),
                (eu[116] = rd),
                (eu[117] = e5),
                (eu[118] = ee),
                (eu[119] = er))
              : ((ee = eu[118]), (er = eu[119])),
            eu[120] !== e$ ||
            eu[121] !== ro ||
            eu[122] !== rd ||
            eu[123] !== rp ||
            eu[124] !== e5 ||
            eu[125] !== e6 ||
            eu[126] !== e8
              ? ((et = (e) => {
                  ;(rp(null), rd(!1), ro(("select" === e8 || e6) && e5), e$(e.currentTarget.value))
                }),
                (eu[120] = e$),
                (eu[121] = ro),
                (eu[122] = rd),
                (eu[123] = rp),
                (eu[124] = e5),
                (eu[125] = e6),
                (eu[126] = e8),
                (eu[127] = et))
              : (et = eu[127]),
            eu[128] !== em ||
            eu[129] !== eh ||
            eu[130] !== ef ||
            eu[131] !== eZ ||
            eu[132] !== e1 ||
            eu[133] !== eQ ||
            eu[134] !== eM ||
            eu[135] !== V ||
            eu[136] !== X ||
            eu[137] !== rG ||
            eu[138] !== rH ||
            eu[139] !== rU ||
            eu[140] !== rB ||
            eu[141] !== rY ||
            eu[142] !== Z ||
            eu[143] !== r$ ||
            eu[144] !== J ||
            eu[145] !== ee ||
            eu[146] !== er ||
            eu[147] !== et
              ? ((ei = (0, i.jsx)("input", {
                  ...V,
                  ref: e9,
                  autoFocus: eZ,
                  onKeyDownCapture: X,
                  "aria-describedby": em,
                  "aria-invalid": eh,
                  role: rG,
                  "aria-autocomplete": rH,
                  "aria-expanded": rU,
                  "aria-controls": rB,
                  "aria-activedescendant": rY,
                  "aria-label": ef,
                  className: Z,
                  disabled: e1,
                  placeholder: r$,
                  value: eM,
                  onBlur: J,
                  onFocus: ee,
                  onClick: er,
                  onPaste: eQ,
                  onChange: et,
                })),
                (eu[128] = em),
                (eu[129] = eh),
                (eu[130] = ef),
                (eu[131] = eZ),
                (eu[132] = e1),
                (eu[133] = eQ),
                (eu[134] = eM),
                (eu[135] = V),
                (eu[136] = X),
                (eu[137] = rG),
                (eu[138] = rH),
                (eu[139] = rU),
                (eu[140] = rB),
                (eu[141] = rY),
                (eu[142] = Z),
                (eu[143] = r$),
                (eu[144] = J),
                (eu[145] = ee),
                (eu[146] = er),
                (eu[147] = et),
                (eu[148] = ei))
              : (ei = eu[148]),
            eu[149] !== $ || eu[150] !== ei
              ? ((ea = (0, i.jsxs)(i.Fragment, { children: [$, ei] })), (eu[149] = $), (eu[150] = ei), (eu[151] = ea))
              : (ea = eu[151]))
          let rW = ea
          eu[152] !== ra
            ? ((en = (e) => {
                ;((rt.current = e), ra(e?.closest("[data-share-dialog-suggestions-boundary]") ?? null))
              }),
              (eu[152] = ra),
              (eu[153] = en))
            : (en = eu[153])
          let rV =
            "field" === e8 &&
            "max-h-64 gap-1 overflow-y-auto border border-secondary-outline bg-primary-soft focus-within:border-ring"
          ;(eu[154] !== e1 || eu[155] !== e7 || eu[156] !== rV || eu[157] !== e8
            ? ((el = (0, l.A)(
                "flex w-full items-center text-base text-default",
                rV,
                "field" === e8 &&
                  {
                    medium: "min-h-9 rounded-md px-3 py-1",
                    large: "min-h-12 rounded-lg px-4 py-1",
                    audienceReview: "min-h-11 rounded-lg px-3 py-2",
                  }[e7],
                "field" === e8 && e1 && "cursor-default opacity-50",
                "menu" === e8 && "h-11 gap-1 border-b border-default px-3",
                "select" === e8 &&
                  "min-h-12 gap-2 rounded border border-secondary-outline bg-primary-soft px-4 py-1 focus-within:border-text",
              )),
              (eu[154] = e1),
              (eu[155] = e7),
              (eu[156] = rV),
              (eu[157] = e8),
              (eu[158] = el))
            : (el = eu[158]),
            eu[159] !== e1 ||
            eu[160] !== rn ||
            eu[161] !== rW ||
            eu[162] !== rb ||
            eu[163] !== ew ||
            eu[164] !== eU ||
            eu[165] !== e$ ||
            eu[166] !== e3 ||
            eu[167] !== ro ||
            eu[168] !== rd ||
            eu[169] !== e8
              ? ((es =
                  "select" === e8
                    ? (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsxs)("div", {
                            className: "flex min-w-0 flex-1 flex-wrap items-center gap-2",
                            children: [ew, rW],
                          }),
                          (0, i.jsx)(D, {
                            disabled: e1,
                            isOpen: rb,
                            listboxId: rn,
                            onClearSelection:
                              e3.length > 0 && null != eU
                                ? () => {
                                    ;(eU(), e$(""), e9.current?.focus())
                                  }
                                : void 0,
                            onToggleOptions: () => {
                              ;(e9.current?.focus(), rd(rb), ro(!rb), e$(""))
                            },
                          }),
                        ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                        children: [
                          ew,
                          (0, i.jsx)("div", {
                            className: "flex min-w-0 flex-1 flex-wrap items-center gap-1",
                            children: rW,
                          }),
                        ],
                      })),
                (eu[159] = e1),
                (eu[160] = rn),
                (eu[161] = rW),
                (eu[162] = rb),
                (eu[163] = ew),
                (eu[164] = eU),
                (eu[165] = e$),
                (eu[166] = e3),
                (eu[167] = ro),
                (eu[168] = rd),
                (eu[169] = e8),
                (eu[170] = es))
              : (es = eu[170]))
          let rX = "select" === e8 ? eG : null
          ;(eu[171] !== eG || eu[172] !== e8
            ? ((eo =
                "select" !== e8 && null != eG
                  ? (0, i.jsx)("div", { className: "shrink-0 self-start", children: eG })
                  : null),
              (eu[171] = eG),
              (eu[172] = e8),
              (eu[173] = eo))
            : (eo = eu[173]),
            eu[174] !== en || eu[175] !== el || eu[176] !== es || eu[177] !== rX || eu[178] !== eo
              ? ((ec = (0, i.jsxs)("div", { ref: en, className: el, children: [es, rX, eo] })),
                (eu[174] = en),
                (eu[175] = el),
                (eu[176] = es),
                (eu[177] = rX),
                (eu[178] = eo),
                (eu[179] = ec))
              : (ec = eu[179]))
          let rZ = ec
          return (
            eu[180] !== ef ||
            eu[181] !== ri ||
            eu[182] !== rZ ||
            eu[183] !== rT ||
            eu[184] !== rh ||
            eu[185] !== rR ||
            eu[186] !== rb ||
            eu[187] !== rk ||
            eu[188] !== rl ||
            eu[189] !== e2 ||
            eu[190] !== rC ||
            eu[191] !== rP ||
            eu[192] !== eL ||
            eu[193] !== eN ||
            eu[194] !== ro ||
            eu[195] !== rd ||
            eu[196] !== rp ||
            eu[197] !== rx ||
            eu[198] !== e8
              ? ((ed = (0, i.jsx)("div", {
                  children:
                    "menu" !== e8
                      ? (0, i.jsxs)(f.AM, {
                          modal: !1,
                          open: rb,
                          onOpenChange: (e) => {
                            e || (rp(null), rd(!0), ro(!1))
                          },
                          children: [
                            (0, i.jsx)(f.dT, { asChild: !0, children: rZ }),
                            rb
                              ? (0, i.jsx)(f.hl, {
                                  id: rl,
                                  align: "start",
                                  "aria-label": null == rl ? void 0 : ef,
                                  "aria-multiselectable": ("select" === e8 && null != eN) || void 0,
                                  role: "listbox",
                                  collisionBoundary: rx ? (ri ?? void 0) : void 0,
                                  size: "anchor",
                                  variant: "select" === e8 ? "default" : "menu",
                                  opaque: !0,
                                  portalContainer: eL,
                                  style: {
                                    ...(null == eL ? {} : { maxWidth: "var(--radix-popover-content-available-width)" }),
                                    maxHeight:
                                      "min(16rem, var(--radix-popover-content-available-height), calc(100vh - 16px))",
                                    minHeight:
                                      rC > 0
                                        ? `min(${rC}rem, var(--radix-popover-content-available-height), calc(100vh - 16px))`
                                        : void 0,
                                  },
                                  onCloseAutoFocus: R,
                                  onEscapeKeyDown: (e) => {
                                    ;(e.stopPropagation(), (0, b.X)(e) || rT(), e9.current?.focus())
                                  },
                                  onInteractOutside: (e) => {
                                    ;(e.target === e9.current ||
                                      ("select" === e8 &&
                                        e.target instanceof Node &&
                                        rt.current?.contains(e.target))) &&
                                      e.preventDefault()
                                  },
                                  onOpenAutoFocus: S,
                                  children: (0, i.jsx)("div", {
                                    ref: rk,
                                    className: (0, l.A)(
                                      "min-h-0 overflow-y-auto",
                                      rx && "overscroll-contain",
                                      null == rR && !rh && "flex flex-1 flex-col",
                                    ),
                                    children: rP,
                                  }),
                                })
                              : null,
                          ],
                        })
                      : (0, i.jsxs)(i.Fragment, {
                          children: [
                            rZ,
                            rb
                              ? (0, i.jsx)("div", {
                                  className: "w-full overflow-hidden bg-surface-elevated-secondary",
                                  children: (0, i.jsx)("div", {
                                    ref: rk,
                                    className: (0, l.A)(
                                      "flex max-h-64 flex-col overflow-y-auto p-1",
                                      null == rR && !rh && ("compact" === e2 ? "min-h-16" : "min-h-64"),
                                    ),
                                    role: "listbox",
                                    children: rP,
                                  }),
                                })
                              : null,
                          ],
                        }),
                })),
                (eu[180] = ef),
                (eu[181] = ri),
                (eu[182] = rZ),
                (eu[183] = rT),
                (eu[184] = rh),
                (eu[185] = rR),
                (eu[186] = rb),
                (eu[187] = rk),
                (eu[188] = rl),
                (eu[189] = e2),
                (eu[190] = rC),
                (eu[191] = rP),
                (eu[192] = eL),
                (eu[193] = eN),
                (eu[194] = ro),
                (eu[195] = rd),
                (eu[196] = rp),
                (eu[197] = rx),
                (eu[198] = e8),
                (eu[199] = ed))
              : (ed = eu[199]),
            ed
          )
        },
      },
    )
  },
  Vzcd(e, r, t) {
    var i = t("ABep"),
      a = t("QosV"),
      n = t("hwkA"),
      l = t("oyxz"),
      s = t("RNul")
    t.d(
      r,
      {},
      {
        r: function (e) {
          let r,
            t,
            o,
            c,
            d,
            u,
            p,
            m = (0, a.c)(30),
            {
              copyLink: h,
              disabled: f,
              hasPendingAccessChange: _,
              hasPendingInvitees: g,
              isSaving: y,
              isBusy: v,
              isCancelDisabled: b,
              inviteLabel: x,
              saveLabel: I,
              variant: A,
              onCancel: w,
              onClose: S,
            } = e,
            R = void 0 === v ? y : v,
            E = void 0 === b ? R : b,
            C = void 0 === A ? "default" : A,
            j = _ || g
          if (y) {
            let e
            ;(m[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(l.A, { id: "shareDialog.primaryAction.saving", defaultMessage: "Saving" })),
                (m[0] = e))
              : (e = m[0]),
              (r = e))
          } else if (g) {
            let e
            ;(m[1] !== x
              ? ((e = x ?? (0, i.jsx)(l.A, { id: "shareDialog.primaryAction.invite", defaultMessage: "Invite" })),
                (m[1] = x),
                (m[2] = e))
              : (e = m[2]),
              (r = e))
          } else if (j) {
            let e
            ;(m[3] !== I
              ? ((e = I ?? (0, i.jsx)(l.A, { id: "shareDialog.primaryAction.save", defaultMessage: "Save" })),
                (m[3] = I),
                (m[4] = e))
              : (e = m[4]),
              (r = e))
          } else {
            let e
            ;(m[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(l.A, { id: "shareDialog.done", defaultMessage: "Done" })), (m[5] = e))
              : (e = m[5]),
              (r = e))
          }
          ;(m[6] !== h
            ? ((t = (0, i.jsx)("div", { className: "me-auto", children: h })), (m[6] = h), (m[7] = t))
            : (t = m[7]),
            m[8] !== j || m[9] !== E || m[10] !== w || m[11] !== C
              ? ((o =
                  j &&
                  (0, i.jsx)(n.$, {
                    color: "secondary",
                    variant: "outline",
                    size: "xl",
                    gutterSize: "audienceReview" === C ? "sm" : void 0,
                    type: "button",
                    disabled: E,
                    onClick: w,
                    children: (0, i.jsx)(l.A, { id: "shareDialog.primaryAction.cancel", defaultMessage: "Cancel" }),
                  })),
                (m[8] = j),
                (m[9] = E),
                (m[10] = w),
                (m[11] = C),
                (m[12] = o))
              : (o = m[12]))
          let T = "audienceReview" === C ? "sm" : void 0,
            L = j ? "submit" : "button",
            M = y || R || (j && f),
            q = j ? void 0 : S
          return (
            m[13] !== y || m[14] !== r
              ? ((c = y ? (0, i.jsx)("span", { role: "status", children: r }) : r),
                (m[13] = y),
                (m[14] = r),
                (m[15] = c))
              : (c = m[15]),
            m[16] !== y
              ? ((d = y && (0, i.jsx)(s.y, { className: "icon-2xs" })), (m[16] = y), (m[17] = d))
              : (d = m[17]),
            m[18] !== y || m[19] !== c || m[20] !== d || m[21] !== T || m[22] !== L || m[23] !== M || m[24] !== q
              ? ((u = (0, i.jsxs)(n.$, {
                  color: "primary",
                  size: "xl",
                  gutterSize: T,
                  type: L,
                  disabled: M,
                  "aria-busy": y,
                  onClick: q,
                  children: [c, d],
                })),
                (m[18] = y),
                (m[19] = c),
                (m[20] = d),
                (m[21] = T),
                (m[22] = L),
                (m[23] = M),
                (m[24] = q),
                (m[25] = u))
              : (u = m[25]),
            m[26] !== u || m[27] !== t || m[28] !== o
              ? ((p = (0, i.jsxs)(i.Fragment, { children: [t, o, u] })),
                (m[26] = u),
                (m[27] = t),
                (m[28] = o),
                (m[29] = p))
              : (p = m[29]),
            p
          )
        },
      },
    )
  },
  aAsK(e, r, t) {
    var i = t("ABep"),
      a = t("QosV"),
      n = t("hwkA"),
      l = t("IUMq"),
      s = t("slpy"),
      o = t("on57"),
      c = t("oyxz"),
      d = t("bVeK"),
      u = t("GpIR")
    function p(e) {
      return e.stopPropagation()
    }
    t.d(
      r,
      {},
      {
        e: function (e) {
          let r,
            t,
            m,
            h,
            f,
            _,
            g,
            y,
            v,
            b,
            x,
            I = (0, a.c)(48),
            {
              alignOffset: A,
              options: w,
              disabled: S,
              footer: R,
              indicatorVariant: E,
              renderLabel: C,
              mixed: j,
              opticallyAlign: T,
              removeLabel: L,
              sideOffset: M,
              size: q,
              variant: k,
              value: N,
              onChange: F,
              onRemoveAccess: D,
            } = e,
            O = void 0 !== S && S,
            K = void 0 === E ? "checkmark" : E,
            P = void 0 !== j && j,
            G = void 0 === k ? "default" : k,
            H = void 0 === q ? "sm" : q
          "field" === G ? (H = "xl") : "audienceReview" === G && (H = "lg")
          let U = "audienceReview" === G && u.A.permission
          I[0] !== U ? ((r = (0, o.A)(U, "enabled:text-default")), (I[0] = U), (I[1] = r)) : (r = I[1])
          let B = "field" === G ? "outline" : "ghost",
            Y = "field" !== G,
            z = "inline" === G ? "2xs" : void 0
          ;(I[2] !== P || I[3] !== C || I[4] !== N
            ? ((t = P ? (0, i.jsx)(c.A, { id: "shareDialog.mixedRoles", defaultMessage: "Mixed" }) : C(N)),
              (I[2] = P),
              (I[3] = C),
              (I[4] = N),
              (I[5] = t))
            : (t = I[5]),
            I[6] === Symbol.for("react.memo_cache_sentinel") ? ((m = (0, i.jsx)(d.Aq_, {})), (I[6] = m)) : (m = I[6]),
            I[7] !== O ||
            I[8] !== T ||
            I[9] !== z ||
            I[10] !== t ||
            I[11] !== r ||
            I[12] !== B ||
            I[13] !== Y ||
            I[14] !== H
              ? ((h = (0, i.jsxs)(n.$, {
                  className: r,
                  color: "secondary",
                  variant: B,
                  size: H,
                  iconSize: "sm",
                  pill: Y,
                  gutterSize: z,
                  opticallyAlign: T,
                  disabled: O,
                  children: [t, m],
                })),
                (I[7] = O),
                (I[8] = T),
                (I[9] = z),
                (I[10] = t),
                (I[11] = r),
                (I[12] = B),
                (I[13] = Y),
                (I[14] = H),
                (I[15] = h))
              : (h = I[15]),
            I[16] !== O || I[17] !== h
              ? ((f = (0, i.jsx)(l.W.Trigger, { disabled: O, children: h })), (I[16] = O), (I[17] = h), (I[18] = f))
              : (f = I[18]))
          let Q = P ? "" : N
          if (
            (I[19] !== F || I[20] !== w
              ? ((_ = (e) => {
                  let r = w.find((r) => r.value === e)
                  null != r && F?.(r.value)
                }),
                (I[19] = F),
                (I[20] = w),
                (I[21] = _))
              : (_ = I[21]),
            I[22] !== O || I[23] !== K || I[24] !== w || I[25] !== C)
          ) {
            let e
            ;(I[27] !== O || I[28] !== K || I[29] !== C
              ? ((e = (e) =>
                  (0, i.jsx)(
                    s.m,
                    {
                      content: e.tooltipText,
                      children: (0, i.jsx)(l.W.RadioItem, {
                        className: "hover:before:opacity-100",
                        indicatorVariant: K,
                        value: e.value,
                        disabled: O || e.disabled,
                        "aria-label": e.ariaLabel,
                        "aria-description": e.description,
                        children: (0, i.jsxs)("span", {
                          className: "flex max-w-64 min-w-0 flex-1 flex-col",
                          children: [
                            (0, i.jsx)("span", { children: C(e.value) }),
                            null == e.description
                              ? null
                              : (0, i.jsx)("span", {
                                  className: "text-sm text-pretty whitespace-normal text-secondary",
                                  children: e.description,
                                }),
                          ],
                        }),
                      }),
                    },
                    e.value,
                  )),
                (I[27] = O),
                (I[28] = K),
                (I[29] = C),
                (I[30] = e))
              : (e = I[30]),
              (g = w.map(e)),
              (I[22] = O),
              (I[23] = K),
              (I[24] = w),
              (I[25] = C),
              (I[26] = g))
          } else g = I[26]
          return (
            I[31] !== Q || I[32] !== _ || I[33] !== g
              ? ((y = (0, i.jsx)(l.W.RadioGroup, { value: Q, onChange: _, children: g })),
                (I[31] = Q),
                (I[32] = _),
                (I[33] = g),
                (I[34] = y))
              : (y = I[34]),
            I[35] !== O || I[36] !== D || I[37] !== L
              ? ((v =
                  null == D
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)(l.W.Separator, {}),
                          (0, i.jsx)(l.W.Item, { color: "danger", disabled: O, onSelect: D, children: L }),
                        ],
                      })),
                (I[35] = O),
                (I[36] = D),
                (I[37] = L),
                (I[38] = v))
              : (v = I[38]),
            I[39] !== A || I[40] !== R || I[41] !== M || I[42] !== y || I[43] !== v
              ? ((b = (0, i.jsxs)(l.W.Content, {
                  align: "end",
                  alignOffset: A,
                  minWidth: "auto",
                  sideOffset: M,
                  children: [y, v, R],
                })),
                (I[39] = A),
                (I[40] = R),
                (I[41] = M),
                (I[42] = y),
                (I[43] = v),
                (I[44] = b))
              : (b = I[44]),
            I[45] !== f || I[46] !== b
              ? ((x = (0, i.jsx)("span", {
                  className: "inline-flex",
                  role: "presentation",
                  onMouseDown: p,
                  children: (0, i.jsxs)(l.W, { children: [f, b] }),
                })),
                (I[45] = f),
                (I[46] = b),
                (I[47] = x))
              : (x = I[47]),
            x
          )
        },
      },
    )
  },
  bQW7(e, r, t) {
    var i = t("S4d4"),
      a = t("CMOE")
    function n(e, r) {
      if (!r || r.includes("@") || !e.email) return !1
      let t = e.email.toLowerCase(),
        [i, n] = t.split("@")
      if (!n || !r.split(" ").some((e) => n.includes(e))) return !1
      let l = e.name?.toLowerCase() === t ? null : e.name
      return (
        !e.profile_username?.toLowerCase().startsWith(r) &&
        (0, a.f)(e, r) > 0 &&
        0 === (0, a.f)({ name: l, email: i }, r)
      )
    }
    function l(
      e,
      r,
      {
        currentUserId: t,
        limit: i = 10,
        includeUnknownNames: s = !1,
        excludeDomainOnlyMatches: c = !1,
        requireIdentified: u = !1,
        directoryMatches: p,
        mentionCounts: m,
      } = {},
    ) {
      let h = e.trim().toLowerCase().replace(/\s+/gu, " "),
        f = o(m, e),
        _ = new Map()
      for (let [e, t] of [...r, p].entries())
        for (let r of t ?? []) {
          let i = u ? d(r) : r,
            l = i ?? r
          if (c && n(l, h)) continue
          let s = null != i,
            o = s
              ? (function (e, r) {
                  if ("" === r) return 0
                  let t = e.name?.trim().toLowerCase().replace(/\s+/gu, " ") ?? "",
                    i = e.email?.trim().toLowerCase() ?? ""
                  return 4 === (0, a.f)(e, r)
                    ? 5
                    : t.startsWith(r)
                      ? 4
                      : t.split(" ").some((e) => e.startsWith(r))
                        ? 3
                        : i.startsWith(r)
                          ? 2
                          : Number(r.split(" ").every((e) => t.includes(e)) || i.includes(r))
                })(l, h) || Number(t === p)
              : 0,
            m = _.get(l.id),
            f = m?.item.name
          ;(null == m ||
            o > m.match ||
            (!m.identified && s) ||
            (o === m.match && (!f || f.split("__")[0] === l.id) && l.name && l.name.split("__")[0] !== l.id)) &&
            _.set(l.id, { item: l, locality: m?.locality ?? e, match: o, identified: s })
        }
      return [..._.values()]
        .filter(
          ({ item: e, match: r, identified: i }) =>
            i && ("" === h ? e.id !== t?.split("__")[0] : r > 0 || (s && null == e.name)),
        )
        .sort(
          (e, r) =>
            Number(5 === r.match) - Number(5 === e.match) ||
            f(r) - f(e) ||
            e.locality - r.locality ||
            r.match - e.match ||
            (e.item.name || e.item.email || e.item.id).localeCompare(r.item.name || r.item.email || r.item.id) ||
            e.item.id.localeCompare(r.item.id),
        )
        .slice(0, i)
        .map(({ item: e }) => e)
    }
    function s(
      e,
      r,
      t,
      {
        currentUserId: i,
        limit: l = 10,
        includeUnknownNames: d = !1,
        excludeDomainOnlyMatches: u = !1,
        directoryMatches: p,
        recentPeople: m,
        mentionCounts: h,
      } = {},
    ) {
      let f = e.trim().toLowerCase().replace(/\s+/gu, " "),
        _ = (function (e) {
          let r = new Map()
          if (null == e) return r
          let t = (e, t) => {
            let i = e.split("__")[0]
            r.set(i, Math.max(r.get(i) ?? 0, t))
          }
          for (let r of e.rosterUserIds ?? []) t(r, 5)
          for (let r of e.participants ?? []) {
            let i = null == r.lastActivityAtMs ? null : e.asOfMs - r.lastActivityAtMs
            t(r.id, null != i && i >= 0 && i <= 2592e6 ? 20 : 10)
          }
          for (let r of e.liveUserIds ?? []) t(r, 35)
          for (let r of e.threadUserIds ?? []) t(r, 50)
          return r
        })(t),
        g = new Map(m?.map((e, r) => [e.id.split("__")[0], r])),
        y = o(h, e),
        v = new Map()
      for (let t of [...r, m, p])
        for (let r of (d ? t : c(t)) ?? []) {
          if (u && n(r, f)) continue
          let i = r.id.split("__")[0],
            l = (0, a.f)(r, e) || Number(t === p),
            s = v.get(i)
          ;(null == s ||
            l > s.match ||
            (l === s.match &&
              (!s.item.name || s.item.name.split("__")[0] === i) &&
              r.name &&
              r.name.split("__")[0] !== i)) &&
            v.set(i, { item: r, match: l })
        }
      let b = "" === e.trim(),
        x = (e, r) => r >= 2 && (g.has(e) || _.has(e))
      return [...v.entries()]
        .filter(([e, { item: r, match: t }]) => (b ? e !== i?.split("__")[0] : t > 0 || (d && null == r.name)))
        .sort(
          ([e, r], [t, i]) =>
            Number(4 === i.match) - Number(4 === r.match) ||
            y(i) - y(r) ||
            (g.size > 0 ? Number(x(t, i.match)) - Number(x(e, r.match)) : 0) ||
            i.match - r.match ||
            (_.get(t) ?? 0) - (_.get(e) ?? 0) ||
            (g.get(e) ?? g.size) - (g.get(t) ?? g.size) ||
            e.localeCompare(t),
        )
        .slice(0, l)
        .map(([, { item: e }]) => e)
    }
    function o(e, r) {
      let t = "" === r.trim()
      return ({ item: r, match: i }) => (t || i >= 2 ? (e?.get(r.account_user_id ?? r.id) ?? 0) : 0)
    }
    function c(e) {
      return e?.flatMap((e) => {
        let r = d(e)
        return null == r ? [] : [r]
      })
    }
    function d(e) {
      let r = e.account_user_id ?? e.id,
        t = (0, i.Z)(r, e.name, e.email)
      if (null == t || null != e.deactivated_time) return
      let a = (0, i.Z)(r, e.email) ?? null
      return t === e.name && a === e.email ? e : { ...e, name: t, email: a }
    }
    t.d(
      r,
      {},
      {
        Jk: c,
        KZ: l,
        oy: s,
        pW: function (e, r, t, i) {
          return null != t || i.recentPeople?.length ? s(e, r, t, i) : l(e, r, i)
        },
      },
    )
  },
  S4d4(e, r, t) {
    t.d(
      r,
      {},
      {
        Z: function (e, r, t) {
          let i = (e) => {
              let r = e.trim().replace(/^(?:user|group):/u, "")
              return r.includes("@") ? r : r.split("__")[0]
            },
            a = i(e)
          if (a && r?.trim() !== "<Redacted>")
            return [r?.trim(), t?.trim()].find((e) => {
              if (!e || "<Redacted>" === e) return !1
              let r = i(e)
              return (
                r !== a &&
                !/^(?:[0-9a-f]{32}|[0-9a-f]{40}|[0-9a-f]{64})$/iu.test(r) &&
                !/^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/iu.test(r) &&
                !/^(?:user|group)-(?:[a-z0-9]{24}|[0-9a-f]{32})$/iu.test(r)
              )
            })
        },
      },
    )
  },
  CMOE(e, r, t) {
    function i(e) {
      return e.trim().toLowerCase().replace(/\s+/gu, " ")
    }
    t.d(
      r,
      {},
      {
        f: function (e, r) {
          let t = i(r)
          if ("" === t) return 0
          let a = i(e.name ?? ""),
            n = i(e.email ?? ""),
            l = t.normalize("NFC"),
            s = n.normalize("NFC")
          if (
            l === a.normalize("NFC") ||
            l === s ||
            l === s.split("@")[0] ||
            l === i(e.profile_username ?? "").normalize("NFC")
          )
            return 4
          let o = t.split(" "),
            c = a.split(" ")
          return o.every((e) => c.includes(e))
            ? 3
            : o.every((e) => c.some((r) => r.startsWith(e)) || n.startsWith(e))
              ? 2
              : +!!o.every((e) => a.includes(e) || n.includes(e))
        },
      },
    )
  },
  HzoD(e, r, t) {
    var i = t("ABep"),
      a = t("QosV"),
      n = t("oyxz"),
      l = t("bqtn")
    t.d(
      r,
      {},
      {
        I: function (e) {
          let r,
            t,
            s,
            o,
            c,
            d,
            u = (0, a.c)(17),
            {
              peopleError: p,
              peopleLoading: m,
              peopleLoadingLabel: h,
              groupsError: f,
              teamsError: _,
              teamsLoading: g,
            } = e
          return p || m || f || _ || g
            ? (u[0] !== p
                ? ((r = p
                    ? (0, i.jsx)(l.ms.Message, {
                        compact: !0,
                        role: "status",
                        children: (0, i.jsx)(n.A, {
                          id: "shareRecipientSearchStatus.peopleError",
                          defaultMessage: "Couldn't load people",
                        }),
                      })
                    : null),
                  (u[0] = p),
                  (u[1] = r))
                : (r = u[1]),
              u[2] !== m || u[3] !== h
                ? ((t = m
                    ? (0, i.jsx)(l.ms.Message, {
                        compact: !0,
                        role: "status",
                        children:
                          h ??
                          (0, i.jsx)(n.A, {
                            id: "shareRecipientSearchStatus.peopleLoading",
                            defaultMessage: "Loading people\u2026",
                          }),
                      })
                    : null),
                  (u[2] = m),
                  (u[3] = h),
                  (u[4] = t))
                : (t = u[4]),
              u[5] !== f
                ? ((s = f
                    ? (0, i.jsx)(l.ms.Message, {
                        compact: !0,
                        role: "status",
                        children: (0, i.jsx)(n.A, {
                          id: "shareRecipientSearchStatus.groupsError",
                          defaultMessage: "Couldn't load groups",
                        }),
                      })
                    : null),
                  (u[5] = f),
                  (u[6] = s))
                : (s = u[6]),
              u[7] !== _
                ? ((o = _
                    ? (0, i.jsx)(l.ms.Message, {
                        compact: !0,
                        role: "status",
                        children: (0, i.jsx)(n.A, {
                          id: "shareRecipientSearchStatus.teamsError",
                          defaultMessage: "Couldn't load teams",
                        }),
                      })
                    : null),
                  (u[7] = _),
                  (u[8] = o))
                : (o = u[8]),
              u[9] !== g
                ? ((c = g
                    ? (0, i.jsx)(l.ms.Message, {
                        compact: !0,
                        role: "status",
                        children: (0, i.jsx)(n.A, {
                          id: "shareRecipientSearchStatus.teamsLoading",
                          defaultMessage: "Loading your teams\u2026",
                        }),
                      })
                    : null),
                  (u[9] = g),
                  (u[10] = c))
                : (c = u[10]),
              u[11] !== r || u[12] !== t || u[13] !== s || u[14] !== o || u[15] !== c
                ? ((d = (0, i.jsxs)(i.Fragment, { children: [r, t, s, o, c] })),
                  (u[11] = r),
                  (u[12] = t),
                  (u[13] = s),
                  (u[14] = o),
                  (u[15] = c),
                  (u[16] = d))
                : (d = u[16]),
              d)
            : null
        },
      },
    )
  },
  PItM(e, r, t) {
    var i = t("ABep"),
      a = t("QosV"),
      n = t("oyxz"),
      l = t("YYxE")
    function s(e) {
      let r = (0, a.c)(10),
        { mode: t, restrictedLabel: l, workspaceName: s, workspaceLabel: o } = e
      switch (t) {
        case "workspace": {
          let e, t
          return (
            r[0] !== o || r[1] !== s
              ? ((e = o ?? s ?? (0, i.jsx)(n.A, { id: "librarySharing.workspace", defaultMessage: "Workspace" })),
                (r[0] = o),
                (r[1] = s),
                (r[2] = e))
              : (e = r[2]),
            r[3] !== e ? ((t = (0, i.jsx)(i.Fragment, { children: e })), (r[3] = e), (r[4] = t)) : (t = r[4]),
            t
          )
        }
        case "link": {
          let e
          return (
            r[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(n.A, {
                  id: "codex.space.shareDialog.accessLink",
                  defaultMessage: "Anyone with the link",
                })),
                (r[5] = e))
              : (e = r[5]),
            e
          )
        }
        case "restricted": {
          let e, t
          return (
            r[6] !== l
              ? ((e =
                  l ??
                  (0, i.jsx)(n.A, { id: "librarySharing.link.collaborators", defaultMessage: "Only those invited" })),
                (r[6] = l),
                (r[7] = e))
              : (e = r[7]),
            r[8] !== e ? ((t = (0, i.jsx)(i.Fragment, { children: e })), (r[8] = e), (r[9] = t)) : (t = r[9]),
            t
          )
        }
      }
    }
    t.d(
      r,
      {},
      {
        d: function (e) {
          let r,
            t,
            o,
            c = (0, a.c)(17),
            {
              disabled: d,
              footer: u,
              options: p,
              restrictedLabel: m,
              value: h,
              workspaceName: f,
              workspaceLabel: _,
              onChange: g,
            } = e,
            y = void 0 !== d && d
          if (c[0] !== p || c[1] !== f) {
            let e
            ;(c[3] !== f
              ? ((e = (e) => {
                  let r
                  return (
                    "restricted" === e.mode
                      ? (r = (0, i.jsx)(n.A, {
                          id: "librarySharing.link.collaboratorsDescription",
                          defaultMessage: "People who already have access can use this link",
                        }))
                      : "workspace" === e.mode &&
                        (r =
                          null == f
                            ? (0, i.jsx)(n.A, {
                                id: "librarySharing.link.unnamedWorkspaceDescription",
                                defaultMessage: "Anyone in this workspace with the link",
                              })
                            : (0, i.jsx)(n.A, {
                                id: "librarySharing.link.workspaceDescription",
                                defaultMessage: "Anyone at {workspaceName} with the link",
                                values: { workspaceName: f },
                              })),
                    { ...e, description: r }
                  )
                }),
                (c[3] = f),
                (c[4] = e))
              : (e = c[4]),
              (r = p.map(e)),
              (c[0] = p),
              (c[1] = f),
              (c[2] = r))
          } else r = c[2]
          return (
            c[5] !== p || c[6] !== m || c[7] !== _ || c[8] !== f
              ? ((t = (e) => {
                  let r = p.find((r) => r.value === e)
                  return null == r
                    ? null
                    : (0, i.jsx)(s, { mode: r.mode, restrictedLabel: m, workspaceName: f, workspaceLabel: _ })
                }),
                (c[5] = p),
                (c[6] = m),
                (c[7] = _),
                (c[8] = f),
                (c[9] = t))
              : (t = c[9]),
            c[10] !== y || c[11] !== u || c[12] !== g || c[13] !== r || c[14] !== t || c[15] !== h
              ? ((o = (0, i.jsx)(l.d, {
                  disabled: y,
                  footer: u,
                  iconVariant: "thumbnail",
                  options: r,
                  value: h,
                  renderLabel: t,
                  onChange: g,
                })),
                (c[10] = y),
                (c[11] = u),
                (c[12] = g),
                (c[13] = r),
                (c[14] = t),
                (c[15] = h),
                (c[16] = o))
              : (o = c[16]),
            o
          )
        },
      },
    )
  },
  JGmX(e, r, t) {
    var i = t("Vzcd")
    t.d(r, { r: () => i.r })
  },
  glqn(e, r, t) {
    var i = t("aAsK")
    t.d(r, { e: () => i.e })
  },
  ajGH(e, r, t) {
    t.d(r, { B: () => M })
    var i = t("ABep"),
      a = t("QosV"),
      n = t("kOeh"),
      l = t("i5ac"),
      s = t.n(l),
      o = t("qmMi"),
      c = t("zd8w"),
      d = t("Wf1j"),
      u = t("oyxz"),
      p = t("iFq6"),
      m = t("eFn4"),
      h = t("UOa8"),
      f = t("OAko"),
      _ = t("LhhH"),
      g = t("AOG7"),
      y = t("SPnB"),
      v = t("tv8P"),
      b = t("OWtl"),
      x = t("bQW7"),
      I = t("Rxyo"),
      A = t("rvFo")
    let w = (0, o.vU)(b.u, (e, { get: r, scope: t }) => {
      let i = r(y.PO),
        a = i.authenticatedUserId ?? null,
        n = r(y.chatGptAuthenticatedUserId$),
        l = r(y.kf),
        s =
          null != e &&
          i.authenticatedAccountId === e &&
          i.accountId === e &&
          null != a &&
          "loaded" === l.status &&
          "workspace" === l.structure &&
          r(I.y)
      return {
        enabled: s,
        queryKey: ["workspace-people-suggestions", e, a],
        staleTime: A.D.ONE_MINUTE,
        gcTime: A.D.ONE_MINUTE,
        retry: !1,
        networkMode: "always",
        queryFn: async ({ signal: r }) => {
          if (!s || null == e) throw Error("workspace suggestions are unavailable")
          let i = (0, v.watchSpaceAccount)(t, e, n, void 0, a),
            l = AbortSignal.any([r, i.signal, AbortSignal.timeout(15e3)])
          try {
            l.throwIfAborted()
            let r = await (0, g.AB)(e, "", l, { includeTotal: !1, limit: 20 })
            return (l.throwIfAborted(), (0, x.Jk)(r) ?? [])
          } finally {
            i.stop()
          }
        },
      }
    })
    var S = t("qCmE"),
      R = t("ENs9"),
      E = t("pLRu"),
      C = t("CMOE"),
      j = t("MFZ6"),
      T = t("CFGX"),
      L = t("LiNd")
    function M(e) {
      let r,
        t,
        n,
        l,
        u,
        _,
        y,
        v,
        b,
        I,
        A,
        M,
        U,
        B,
        Y,
        z,
        Q = (0, a.c)(61),
        {
          accountId: $,
          ariaDescribedBy: W,
          disabled: V,
          emptyMessage: X,
          getRemoveLabel: Z,
          getGroupRecipient: J,
          getPersonRecipient: ee,
          getTeamRecipient: er,
          isLoading: et,
          loadingLabel: ei,
          options: ea,
          visitedOptions: en,
          dotOptions: el,
          placeholder: es,
          query: eo,
          peopleQuery: ec,
          recentOptions: ed,
          suggestedOptions: eu,
          suggestionsAsOf: ep,
          improvedSuggestions: em,
          autoFocus: eh,
          searchFailed: ef,
          contextualPicks: e_,
          peopleFirst: eg,
          selectionDisplay: ey,
          selectedOptions: ev,
          trailingContent: eb,
          onChange: ex,
          onQueryChange: eI,
        } = e,
        eA = void 0 === ec ? eo : ec,
        ew = void 0 !== em && em,
        eS = void 0 === eh ? ew : eh,
        eR = void 0 === ey ? "input" : ey,
        eE = (0, d.A)(),
        [eC, ej] = (0, c.useState)(),
        { data: eT } = (0, f.oV)(),
        { accountId: eL } = (0, h.As)(),
        eM = eT?.accounts?.find((e) => e.id === $),
        eq = (0, o._U)(p.w, $ ?? ""),
        ek = (eq && null != er) || null != J || (ew && null != ee)
      Q[0] !== ek ? ((r = { enabled: ek }), (Q[0] = ek), (Q[1] = r)) : (r = Q[1])
      let { data: eN, isError: eF } = (0, o._U)(m.Jk, $ ?? "", r),
        eD = null == eM ? void 0 : (0, T.V)(eM, eN, eF),
        eO = eL === $ && null != J && eD?.allowGroups === !0
      Q[2] === Symbol.for("react.memo_cache_sentinel") ? ((t = { includeMemberCounts: !0 }), (Q[2] = t)) : (t = Q[2])
      let { data: eK, isError: eP, isPending: eG, isFetching: eH } = (0, g.Nc)(eO && !V ? eo : "", t),
        eU = eq && null != er && eD?.canSearchMembers === !0,
        { data: eB, isError: eY, isLoading: ez } = (0, o._U)(p.l, $ ?? "", { enabled: eU && !V }) ?? {}
      Q[3] !== eU || Q[4] !== eE || Q[5] !== es?.people || Q[6] !== es?.peopleAndTeams
        ? ((n = eU
            ? (es?.peopleAndTeams ??
              eE.formatMessage({
                id: "shareRecipientPicker.peopleAndTeamsLabel",
                defaultMessage: "Add people or teams",
              }))
            : (es?.people ??
              eE.formatMessage({ id: "shareRecipientPicker.peopleLabel", defaultMessage: "Add people" }))),
          (Q[3] = eU),
          (Q[4] = eE),
          (Q[5] = es?.people),
          (Q[6] = es?.peopleAndTeams),
          (Q[7] = n))
        : (n = Q[7])
      let eQ = n,
        e$ = eo.trim().toLocaleLowerCase()
      Q[8] !== eA ? ((l = eA.trim()), (Q[8] = eA), (Q[9] = l)) : (l = Q[9])
      let eW = l,
        eV = null != e_,
        eX = eg ?? eV,
        eZ = eU && !eY ? (eB ?? []).map((e) => ({ team: e, recipient: er(e) })) : [],
        eJ = new Set(ev.map(G)),
        e0 =
          "" !== e$ || V
            ? []
            : s()(
                (ed ?? []).filter((e) => {
                  let { id: r, accessStatus: t } = e
                  return null == t && !eJ.has(r)
                }),
                "id",
              ).slice(0, 5),
        e1 = new Set(e0.map(P))
      Q[10] !== eE
        ? ((u = (e) => {
            let { team: r, recipient: t } = e
            return {
              ...t,
              isActorTeamMember: !0,
              secondaryLabel: (0, E.D)(eE, r.member_count),
              avatar: (0, i.jsx)(j.y, { avatar: r.avatar, size: "sm" }),
            }
          }),
          (Q[10] = eE),
          (Q[11] = u))
        : (u = Q[11])
      let e2 = eZ
          .filter((e) => {
            let { team: r } = e
            return ew || r.name.toLocaleLowerCase().includes(e$)
          })
          .map(u)
          .filter((e) => {
            let { id: r, accessStatus: t } = e
            return ("" !== e$ || null == t) && !eJ.has(r) && (ew || !e1.has(r))
          }),
        e3 = new Set(e2.map(K)),
        e4 =
          "" === e$ || !eO || V || eP
            ? []
            : s()(
                (eK ?? [])
                  .filter((e) => null == e.system_use_case && (eD?.allowScimGroups || !e.is_scim_managed))
                  .map((e) => ({
                    ...J(e),
                    secondaryLabel: (0, E.D)(eE, e.num_members),
                    avatar: (0, i.jsx)(S.K, { groupId: e.id, size: "sm" }),
                  }))
                  .filter((e) => {
                    let { id: r } = e
                    return (ew || !e3.has(r)) && !eJ.has(r)
                  }),
                "id",
              ),
        e5 = (e) =>
          e?.filter((e) => {
            let { id: r } = e
            return !e3.has(r) && !eJ.has(r) && !e1.has(r)
          }),
        e6 = "" === eW ? [] : (e5(ea) ?? [])
      if (null != e_)
        e6 = (0, x.KZ)(
          eA,
          [...e_, ea].map((e) => e5(e)?.map(O)),
        ).map(D)
      else if ("" !== eW) {
        let e
        ;(Q[12] !== eA
          ? ((e = (e, r) =>
              Number(4 === (0, C.f)({ name: r.label, email: r.secondaryLabel }, eA)) -
              Number(4 === (0, C.f)({ name: e.label, email: e.secondaryLabel }, eA))),
            (Q[12] = eA),
            (Q[13] = e))
          : (e = Q[13]),
          e6.sort(e))
      }
      let e7 =
          0 === e0.length && 0 === e2.length && 0 === e4.length
            ? void 0
            : [
                {
                  id: "recent",
                  label: eE.formatMessage({ id: "shareRecipientPicker.recent", defaultMessage: "Recent" }),
                  options: e0.map(H),
                },
                {
                  id: "teams",
                  label:
                    "" === e$
                      ? eE.formatMessage({ id: "shareRecipientPicker.yourTeams", defaultMessage: "Your teams" })
                      : eE.formatMessage({ id: "shareRecipientPicker.teams", defaultMessage: "Teams" }),
                  options: e2.map(H),
                },
                {
                  id: "groups",
                  label: eE.formatMessage({ id: "shareRecipientPicker.groups", defaultMessage: "Groups" }),
                  options: e4.map(H),
                },
                {
                  id: "people",
                  label: eE.formatMessage({ id: "shareRecipientPicker.people", defaultMessage: "People" }),
                  options: e6.map(H),
                },
              ],
        e8 =
          ew && !V
            ? (0, L.s)(eA, [...(e_ ?? []), e2, eu, ed, e4, "" === eW ? void 0 : ea], {
                selectedIds: eJ,
                suggestionsAsOf: ep,
              })
            : [],
        e9 =
          ew &&
          !V &&
          "" === e$ &&
          "" === eW &&
          null != ee &&
          eL === $ &&
          eD?.canSearchMembers === !0 &&
          !et &&
          !ez &&
          e8.length < 10
      Q[14] !== e9 ? ((_ = { enabled: e9 }), (Q[14] = e9), (Q[15] = _)) : (_ = Q[15])
      let { data: re, isEnabled: rr, isLoading: rt, isError: ri } = (0, o._U)(w, $ ?? null, _),
        ra = e9 && rr
      if (ew) {
        let e = ra
          ? (0, L.s)(
              "",
              [
                re?.flatMap((e) => {
                  let r = ee?.(e)
                  return null == r ? [] : [r]
                }),
              ],
              { selectedIds: new Set([...eJ, ...e8.map(F)]), limit: 3 },
            )
          : []
        e7 = [
          {
            id: "suggested",
            label: eE.formatMessage({ id: "shareRecipientPicker.suggested", defaultMessage: "Suggested" }),
            options: [...e8, ...e].slice(0, 10).map(H),
          },
        ]
      }
      if ((eX && e7?.sort(N), !V && eW && en?.length)) {
        let e = new Set([...(e7?.flatMap(k) ?? e6), ...(el ?? [])].map(q)),
          r = (0, L.s)(eA, [en], { selectedIds: new Set([...e, ...eJ]), limit: Math.min(3, Math.max(0, 10 - e.size)) })
        r.length &&
          (null == e7
            ? (e6 = [...e6, ...r])
            : ew
              ? e7[0].options.push(...r.map(H))
              : e7.push({ id: "visited", label: "", options: r.map(H) }))
      }
      let rn = ef && ("" !== eW || eV),
        rl = eU && eY,
        rs = "" !== e$ && eO && eP,
        ro = rn || rl || rs,
        rc = (("" !== eW || eV) && et) || ("" !== e$ && eO && (eG || eH)) || (eU && ez),
        rd = X
      ;("" === e$ ? (rd = ra && null != re && !ri ? X : null) : rc ? (rd = ei) : (et || ro) && (rd = null),
        Q[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (e) => {
              ej(e?.closest('[role="dialog"]') ?? null)
            }),
            (Q[16] = y))
          : (y = Q[16]))
      let ru = R.X,
        rp = !eX || "user",
        rm = (eV && et && !rn) || (ra && rt),
        rh = ra && ri
      ;(Q[17] !== rs || Q[18] !== rm || Q[19] !== rh || Q[20] !== rl
        ? ((v = { peopleLoading: rm, peopleError: rh, groupsError: rs, teamsError: rl }),
          (Q[17] = rs),
          (Q[18] = rm),
          (Q[19] = rh),
          (Q[20] = rl),
          (Q[21] = v))
        : (v = Q[21]),
        Q[22] !== ev || Q[23] !== eR
          ? ((b = "external" === eR ? [] : ev.map(H)), (Q[22] = ev), (Q[23] = eR), (Q[24] = b))
          : (b = Q[24]),
        Q[25] !== Z
          ? ((I = (e) => {
              let { recipient: r } = e
              return Z(r)
            }),
            (Q[25] = Z),
            (Q[26] = I))
          : (I = Q[26]))
      let rf = e6.map(H),
        r_ = el
          ?.filter((e) => {
            let { id: r } = e
            return !eJ.has(r)
          })
          .map(H)
      return (
        Q[27] !== ex || Q[28] !== ev
          ? ((A = (e) => {
              let { recipient: r } = e
              ex(s()([...ev, r], "id"))
            }),
            (M = (e) => {
              let { id: r } = e
              ex(ev.filter((e) => e.id !== r))
            }),
            (Q[27] = ex),
            (Q[28] = ev),
            (Q[29] = A),
            (Q[30] = M))
          : ((A = Q[29]), (M = Q[30])),
        Q[31] !== ei || Q[32] !== rc
          ? ((U = rc
              ? (0, i.jsx)("span", { className: "sr-only", role: "status", "aria-label": ei, children: ei })
              : null),
            (Q[31] = ei),
            (Q[32] = rc),
            (Q[33] = U))
          : (U = Q[33]),
        Q[34] !== U || Q[35] !== eb
          ? ((B = (0, i.jsxs)(i.Fragment, { children: [U, eb] })), (Q[34] = U), (Q[35] = eb), (Q[36] = B))
          : (B = Q[36]),
        Q[37] !== ru ||
        Q[38] !== W ||
        Q[39] !== eS ||
        Q[40] !== V ||
        Q[41] !== ew ||
        Q[42] !== eQ ||
        Q[43] !== eI ||
        Q[44] !== e7 ||
        Q[45] !== eC ||
        Q[46] !== eo ||
        Q[47] !== rd ||
        Q[48] !== rp ||
        Q[49] !== v ||
        Q[50] !== b ||
        Q[51] !== I ||
        Q[52] !== rf ||
        Q[53] !== r_ ||
        Q[54] !== A ||
        Q[55] !== M ||
        Q[56] !== B
          ? ((Y = (0, i.jsx)(ru, {
              preserveHighlightOnItemsChange: rp,
              autoFocus: eS,
              waitForDialogEntrance: ew,
              preserveEmptyQueryOrder: ew,
              ariaLabel: eQ,
              ariaDescribedBy: W,
              searchStatus: v,
              disabled: V,
              selectedOptions: b,
              getRemoveLabel: I,
              options: rf,
              dotOptions: r_,
              optionSections: e7,
              portalContainer: eC,
              query: eo,
              onQueryChange: eI,
              showLoadingDropdown: !1,
              showSuggestionsOnFocus: !0,
              showSuggestionsOnQueryChange: ew,
              onSelectOption: A,
              onRemoveOption: M,
              placeholder: eQ,
              trailingContent: B,
              emptyMessage: rd,
            })),
            (Q[37] = ru),
            (Q[38] = W),
            (Q[39] = eS),
            (Q[40] = V),
            (Q[41] = ew),
            (Q[42] = eQ),
            (Q[43] = eI),
            (Q[44] = e7),
            (Q[45] = eC),
            (Q[46] = eo),
            (Q[47] = rd),
            (Q[48] = rp),
            (Q[49] = v),
            (Q[50] = b),
            (Q[51] = I),
            (Q[52] = rf),
            (Q[53] = r_),
            (Q[54] = A),
            (Q[55] = M),
            (Q[56] = B),
            (Q[57] = Y))
          : (Y = Q[57]),
        Q[58] !== y || Q[59] !== Y
          ? ((z = (0, i.jsx)("div", { ref: y, className: "flex min-w-0 flex-1 flex-col gap-2", children: Y })),
            (Q[58] = y),
            (Q[59] = Y),
            (Q[60] = z))
          : (z = Q[60]),
        z
      )
    }
    function q(e) {
      let { id: r } = e
      return r
    }
    function k(e) {
      return e.options
    }
    function N(e, r) {
      return "people" === e.id ? -1 : +("people" === r.id)
    }
    function F(e) {
      let { id: r } = e
      return r
    }
    function D(e) {
      let { recipient: r } = e
      return r
    }
    function O(e) {
      return { id: e.id, name: e.label, email: e.secondaryLabel, recipient: e }
    }
    function K(e) {
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
    function H(e) {
      let r
      return (
        "pending" === e.accessStatus
          ? (r = (0, i.jsx)(u.A, {
              id: "shareRecipientPicker.invitationPending",
              defaultMessage: "Invitation pending",
            }))
          : "existing" === e.accessStatus &&
            (r = (0, i.jsx)(u.A, {
              id: "shareRecipientPicker.alreadyHasAccess",
              defaultMessage: "Already has access",
            })),
        {
          id: e.id,
          label: e.label,
          secondaryLabel: e.secondaryLabel,
          avatar: (0, i.jsx)("span", {
            "aria-hidden": "true",
            children:
              e.avatar ??
              (null == e.Icon
                ? (0, i.jsx)(_.e, { alt: "", colorKey: e.colorKey, name: e.label, size: "sm", src: null })
                : (0, i.jsx)(n.e, { name: e.label, colorFrom: e.id, Icon: e.Icon })),
          }),
          disabledReason: r,
          recipient: e,
        }
      )
    }
  },
  CFGX(e, r, t) {
    var i = t("vw1R")
    t.d(
      r,
      {},
      {
        V: function (e, r, t) {
          let a = "workspace" === e.structure,
            n = (0, i.o)(e.plan_type),
            l =
              a &&
              (!n ||
                "account-owner" === e.account_user_role ||
                "account-admin" === e.account_user_role ||
                (!t && r?.permissions?.includes("chatgpt.workspace.member.role.view") === !0))
          return {
            isWorkspace: a,
            canSearchMembers: l,
            allowGroups: n && l,
            allowScimGroups: !t && r?.beta_settings?.allow_scim_group_sharing_for_projects_and_gpts !== !1,
          }
        },
      },
    )
  },
  LiNd(e, r, t) {
    var i = t("S4d4"),
      a = t("CMOE")
    function n(e, r) {
      let t = e.suggestion,
        i = t?.same_work_independent_occasions30d ?? 0,
        a = 0
      i >= 3 ? (a = 60) : 2 === i ? (a = 45) : 1 === i && (a = 30)
      let n = t?.last_shared_at != null && null != r ? (Date.parse(r) - Date.parse(t.last_shared_at)) / 864e5 : 0 / 0,
        l = 0
      return (
        n >= 0 && n <= 7 ? (l = 20) : n > 7 && n <= 30 ? (l = 10) : n > 30 && n <= 90 && (l = 3),
        Math.max(a, Math.min(25, l + 5 * ((t?.share_days30d ?? 0) >= 3))) +
          (e.id.startsWith("group:") && (!0 === e.isActorTeamMember || t?.is_actor_team_member === !0) ? 5 : 0)
      )
    }
    t.d(
      r,
      {},
      {
        s: function (e, r, { selectedIds: t, suggestionsAsOf: l, limit: s = 10 }) {
          let o = e.trim(),
            c = new Map()
          for (let e of r)
            for (let r of e ?? []) {
              if (!r.id.startsWith("user:") && !r.id.startsWith("group:")) continue
              let e = (0, i.Z)(r.id, r.label, r.id.startsWith("user:") ? r.secondaryLabel : void 0),
                t = null != e,
                n = r.id.startsWith("user:") ? (0, i.Z)(r.id, r.secondaryLabel) : r.secondaryLabel,
                l = t && (e !== r.label || n !== r.secondaryLabel) ? { ...r, label: e, secondaryLabel: n } : r,
                s = t ? (0, a.f)({ name: e, email: r.id.startsWith("group:") ? void 0 : n }, o) : 0,
                d = c.get(r.id)
              null == d
                ? c.set(r.id, { item: l, match: s, identified: t })
                : c.set(r.id, {
                    item: {
                      ...(s > d.match || (!d.identified && t) ? l : d.item),
                      accessStatus: d.item.accessStatus ?? r.accessStatus,
                      isActorTeamMember: d.item.isActorTeamMember || r.isActorTeamMember,
                      suggestion:
                        null == d.item.suggestion
                          ? r.suggestion
                          : {
                              ...d.item.suggestion,
                              sources: [...new Set([...d.item.suggestion.sources, ...(r.suggestion?.sources ?? [])])],
                            },
                    },
                    match: Math.max(d.match, s),
                    identified: d.identified || t,
                  })
            }
          return [...c.values()]
            .filter(
              ({ item: e, match: r, identified: i }) =>
                i && !t.has(e.id) && ("" === o ? null == e.accessStatus : r > 0),
            )
            .sort((e, r) => r.match - e.match || n(r.item, l) - n(e.item, l) || e.item.id.localeCompare(r.item.id))
            .slice(0, s)
            .map(({ item: e }) => e)
        },
      },
    )
  },
  LKbA(e, r, t) {
    var i = t("ABep"),
      a = t("QosV"),
      n = t("oyxz")
    t.d(
      r,
      {},
      {
        u: function (e) {
          let r = (0, a.c)(5),
            { permission: t } = e
          switch (t) {
            case "viewer": {
              let e
              return (
                r[0] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(n.A, { id: "shareDialog.role.viewer", defaultMessage: "Viewer" })), (r[0] = e))
                  : (e = r[0]),
                e
              )
            }
            case "commenter": {
              let e
              return (
                r[1] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(n.A, { id: "shareDialog.role.commenter", defaultMessage: "Commenter" })),
                    (r[1] = e))
                  : (e = r[1]),
                e
              )
            }
            case "editor": {
              let e
              return (
                r[2] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(n.A, { id: "shareDialog.role.editor", defaultMessage: "Editor" })), (r[2] = e))
                  : (e = r[2]),
                e
              )
            }
            case "owner": {
              let e
              return (
                r[3] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(n.A, { id: "shareDialog.role.owner", defaultMessage: "Owner" })), (r[3] = e))
                  : (e = r[3]),
                e
              )
            }
            case void 0: {
              let e
              return (
                r[4] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(n.A, { id: "shareDialog.role.unknown", defaultMessage: "Unknown access" })),
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
  MFZ6(e, r, t) {
    var i = t("ABep"),
      a = t("QosV"),
      n = t("on57"),
      l = t("oyQi")
    t.d(
      r,
      {},
      {
        y: function (e) {
          let r,
            t,
            s,
            o = (0, a.c)(7),
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
            o[2] !== c ? ((t = (0, i.jsx)(l.n, { avatar: c, size: "small" })), (o[2] = c), (o[3] = t)) : (t = o[3]),
            o[4] !== r || o[5] !== t
              ? ((s = (0, i.jsx)("span", { className: r, children: t })), (o[4] = r), (o[5] = t), (o[6] = s))
              : (s = o[6]),
            s
          )
        },
      },
    )
  },
  oyQi(e, r, t) {
    var i = t("ABep"),
      a = t("QosV"),
      n = t("slpy"),
      l = t("on57"),
      s = t("zd8w"),
      o = t("bVeK")
    t.d(
      r,
      {},
      {
        n: function (e) {
          let r,
            t,
            c,
            d,
            u = (0, a.c)(16),
            { avatar: p, name: m, size: h } = e,
            [f, _] = (0, s.useState)(null),
            g = p?.url,
            y = "large" === h ? o.ixU : o.oJq,
            v = "icon-sm"
          ;("large" === h ? (v = "size-12") : "sidebar" === h && (v = "icon-leading"),
            u[0] !== v
              ? ((r = (0, l.A)("flex shrink-0 items-center justify-center", v)), (u[0] = v), (u[1] = r))
              : (r = u[1]))
          let b = null == m ? void 0 : "img"
          ;(u[2] !== y || u[3] !== f || u[4] !== h || u[5] !== v || u[6] !== g
            ? ((t =
                null == g || g === f
                  ? (0, i.jsx)(y, { className: (0, l.A)("text-secondary", "sidebar" === h && "icon-leading") })
                  : (0, i.jsx)("img", {
                      className: (0, l.A)("object-contain", v),
                      alt: "",
                      draggable: !1,
                      onError: () => _(g),
                      src: g,
                    })),
              (u[2] = y),
              (u[3] = f),
              (u[4] = h),
              (u[5] = v),
              (u[6] = g),
              (u[7] = t))
            : (t = u[7]),
            u[8] !== m || u[9] !== r || u[10] !== b || u[11] !== t
              ? ((c = (0, i.jsx)("span", { className: r, role: b, "aria-label": m, children: t })),
                (u[8] = m),
                (u[9] = r),
                (u[10] = b),
                (u[11] = t),
                (u[12] = c))
              : (c = u[12]))
          let x = c
          return (
            u[13] !== x || u[14] !== m
              ? ((d = null == m ? x : (0, i.jsx)(n.m, { content: m, children: x })),
                (u[13] = x),
                (u[14] = m),
                (u[15] = d))
              : (d = u[15]),
            d
          )
        },
      },
    )
  },
  v7NL(e, r, t) {
    var i = t("QosV"),
      a = t("zd8w"),
      n = t("jDEJ"),
      l = t("bIvi")
    function s(e) {
      ;("function" == typeof e.preventDefault && e.preventDefault(),
        "function" == typeof e.stopPropagation && e.stopPropagation())
    }
    t.d(
      r,
      {},
      {
        C: function (e) {
          let r,
            t,
            o,
            c,
            d,
            u,
            p,
            m,
            h,
            f,
            _,
            g,
            y,
            v,
            b,
            x,
            I,
            A,
            w = (0, i.c)(72),
            {
              items: S,
              isActive: R,
              getItemKey: E,
              onSelect: C,
              onHighlight: j,
              onEscape: T,
              autoHighlightFirst: L,
              clearHighlightOnMouseLeave: M,
              captureWindowKeydown: q,
              keyboardEventTarget: k,
              keyboardVariant: N,
              selectOnSpace: F,
              preserveHighlightOnItemsChange: D,
              numberShortcutCount: O,
              selectOnTab: K,
              requireKeyboardNavigationForSelection: P,
              shouldHandleKeyDown: G,
              highlightResetKey: H,
            } = e,
            U = void 0 === L || L,
            B = void 0 !== M && M,
            Y = void 0 !== q && q,
            z = void 0 === N ? "default" : N,
            Q = void 0 !== D && D,
            $ = void 0 === O ? 0 : O,
            W = void 0 !== K && K,
            V = void 0 !== P && P
          w[0] === Symbol.for("react.memo_cache_sentinel") ? ((r = (0, n.Z)()), (w[0] = r)) : (r = w[0])
          let X = r,
            Z = (0, a.useRef)(null),
            J = (0, a.useRef)(null),
            ee = (0, a.useRef)(!1),
            er = (0, a.useRef)(!1),
            et = (0, a.useRef)(null),
            ei = null == S ? 0 : S.length,
            [ea, en] = (0, a.useState)(U && ei > 0 ? 0 : -1),
            el = R && ea >= 0 && ea < ei ? (S?.[ea] ?? null) : null
          w[1] !== E || w[2] !== el
            ? ((t = null == el ? null : (E?.(el) ?? el)), (w[1] = E), (w[2] = el), (w[3] = t))
            : (t = w[3])
          let es = t
          w[4] !== S || w[5] !== j
            ? ((o = (e) => {
                j?.(S?.[e] ?? null, e)
              }),
              (w[4] = S),
              (w[5] = j),
              (w[6] = o))
            : (o = w[6])
          let eo = (0, a.useEffectEvent)(o)
          ;(w[7] !== U ||
          w[8] !== E ||
          w[9] !== H ||
          w[10] !== ea ||
          w[11] !== R ||
          w[12] !== S ||
          w[13] !== ei ||
          w[14] !== Q
            ? ((c = () => {
                let e = et.current?.items,
                  r = null != et.current && et.current.highlightResetKey !== H
                ;(!R || r) && (er.current = !1)
                let t = !0 === Q || ("user" === Q && er.current),
                  i =
                    null == H || "user" === Q
                      ? null != e && (r || null == S || e.length !== ei || e.some((e, r) => e !== S[r]))
                      : null != et.current && et.current.highlightResetKey !== H
                if (((et.current = { items: S, highlightResetKey: H }), !R || 0 === ei)) {
                  ;((ee.current = !1), -1 !== ea && en(-1))
                  return
                }
                if (ea >= 0 && ea < ei && ((t && null == E) || !i)) return
                let a = e?.[ea],
                  n = t && null != E && null != a ? (S?.findIndex((e) => E(e) === E(a)) ?? -1) : -1,
                  l = U ? 0 : -1
                ;(n >= 0 ? (l = n) : i && (ee.current = !1), ea !== l && en(l))
              }),
              (d = [U, E, H, ea, R, S, ei, Q]),
              (w[7] = U),
              (w[8] = E),
              (w[9] = H),
              (w[10] = ea),
              (w[11] = R),
              (w[12] = S),
              (w[13] = ei),
              (w[14] = Q),
              (w[15] = c),
              (w[16] = d))
            : ((c = w[15]), (d = w[16])),
            (0, a.useEffect)(c, d),
            w[17] !== ea || w[18] !== es || w[19] !== eo
              ? ((u = () => {
                  null == es ? eo(-1) : eo(ea)
                }),
                (w[17] = ea),
                (w[18] = es),
                (w[19] = eo),
                (w[20] = u))
              : (u = w[20]),
            w[21] !== ea || w[22] !== es ? ((p = [ea, es]), (w[21] = ea), (w[22] = es), (w[23] = p)) : (p = w[23]),
            (0, a.useEffect)(u, p),
            w[24] !== ea || w[25] !== R || w[26] !== ei
              ? ((m = () => {
                  let e = J.current === ea
                  if (((J.current = null), !R || e || ea < 0 || ea >= ei)) return
                  let r = Z.current
                  if (!r) return
                  let t = r.querySelectorAll('[data-list-navigation-item="true"]').item(ea)
                  t?.scrollIntoView({ block: "nearest" })
                }),
                (h = [ea, R, ei]),
                (w[24] = ea),
                (w[25] = R),
                (w[26] = ei),
                (w[27] = m),
                (w[28] = h))
              : ((m = w[27]), (h = w[28])),
            (0, a.useEffect)(m, h),
            w[29] !== S || w[30] !== ei || w[31] !== C
              ? ((f = (e) => {
                  let r = null != S && e >= 0 && e < ei ? S[e] : void 0
                  r && ((ee.current = !1), en(e), C(r, e))
                }),
                (w[29] = S),
                (w[30] = ei),
                (w[31] = C),
                (w[32] = f))
              : (f = w[32]))
          let ec = (0, l.K)(f)
          w[33] !== ea || w[34] !== R || w[35] !== ei
            ? ((_ = (e) => {
                ;((ee.current = !1),
                  R && e >= 0 && e < ei && (er.current = !0),
                  R && e >= 0 && e < ei && e !== ea && ((J.current = e), en(e)))
              }),
              (w[33] = ea),
              (w[34] = R),
              (w[35] = ei),
              (w[36] = _))
            : (_ = w[36])
          let ed = (0, l.K)(_)
          w[37] !== ei
            ? ((g = (e) => {
                ;((ee.current = !0),
                  (er.current = !0),
                  (J.current = null),
                  en((r) => {
                    if (0 === ei) return -1
                    if (r < 0) return e >= 0 ? 0 : ei - 1
                    if (ei <= 0) return -1
                    let t = (r + e) % ei
                    return t < 0 ? t + ei : t
                  }))
              }),
              (w[37] = ei),
              (w[38] = g))
            : (g = w[38])
          let eu = g
          w[39] !== U ||
          w[40] !== ea ||
          w[41] !== el ||
          w[42] !== R ||
          w[43] !== ei ||
          w[44] !== z ||
          w[45] !== eu ||
          w[46] !== $ ||
          w[47] !== T ||
          w[48] !== V ||
          w[49] !== ec ||
          w[50] !== F ||
          w[51] !== W ||
          w[52] !== G
            ? ((y = (e) => {
                if (!R) return !1
                let r = "nativeEvent" in e ? e.nativeEvent : e
                if (G?.(r) === !1 || r.isComposing || 229 === r.keyCode) return !1
                let { key: t } = e
                if (0 === ei) return "Escape" === t && !!T && (T(), s(e), !0)
                if ("ArrowDown" === t || (X && e.ctrlKey && "n" === t)) return (eu(1), s(e), !0)
                if ("ArrowUp" === t || (X && e.ctrlKey && "p" === t)) return (eu(-1), s(e), !0)
                if ($ > 0 && !e.ctrlKey && !e.metaKey && !e.altKey && /^[1-3]$/.test(t) && Number(t) <= Math.min($, ei))
                  return (ec(Number(t) - 1), s(e), !0)
                if (
                  !e.altKey &&
                  !e.ctrlKey &&
                  !e.metaKey &&
                  !e.shiftKey &&
                  ("Enter" === t ||
                    ((W || "chatgpt" === z) && "Tab" === t) ||
                    ("chatgpt" === z && " " === t && null != el && F?.(el)))
                ) {
                  if (V && !ee.current) return !1
                  let r = ea >= 0 ? ea : U ? 0 : -1
                  return r >= 0 && r < ei && (ec(r), s(e), !0)
                }
                return "Escape" === t
                  ? !!T && (T(), s(e), !0)
                  : (!V ||
                      (1 !== t.length && "Backspace" !== t && "Delete" !== t) ||
                      e.metaKey ||
                      e.ctrlKey ||
                      e.altKey ||
                      ((ee.current = !1), en(-1)),
                    !1)
              }),
              (w[39] = U),
              (w[40] = ea),
              (w[41] = el),
              (w[42] = R),
              (w[43] = ei),
              (w[44] = z),
              (w[45] = eu),
              (w[46] = $),
              (w[47] = T),
              (w[48] = V),
              (w[49] = ec),
              (w[50] = F),
              (w[51] = W),
              (w[52] = G),
              (w[53] = y))
            : (y = w[53])
          let ep = y
          ;(w[54] !== Y || w[55] !== ep || w[56] !== R || w[57] !== k || w[58] !== V
            ? ((v = () => {
                if (!Y || !R) return
                let e = (e) => {
                    ep(e)
                  },
                  r = () => {
                    ;((ee.current = !1), en(-1))
                  },
                  t = k ?? window
                return (
                  t.addEventListener("keydown", e, !0),
                  V &&
                    (t.addEventListener("beforeinput", r, !0),
                    t.addEventListener("compositionstart", r, !0),
                    t.addEventListener("paste", r, !0)),
                  () => {
                    ;(t.removeEventListener("keydown", e, !0),
                      t.removeEventListener("beforeinput", r, !0),
                      t.removeEventListener("compositionstart", r, !0),
                      t.removeEventListener("paste", r, !0))
                  }
                )
              }),
              (b = [Y, ep, R, k, V]),
              (w[54] = Y),
              (w[55] = ep),
              (w[56] = R),
              (w[57] = k),
              (w[58] = V),
              (w[59] = v),
              (w[60] = b))
            : ((v = w[59]), (b = w[60])),
            (0, a.useEffect)(v, b),
            w[61] !== ep
              ? ((x = (e) => {
                  let r = void 0 === e ? {} : e
                  return {
                    onKeyDown: (e) => {
                      ep(e) || r.onKeyDown?.(e)
                    },
                  }
                }),
                (w[61] = ep),
                (w[62] = x))
              : (x = w[62]))
          let em = x
          w[63] !== B || w[64] !== ed || w[65] !== ec
            ? ((I = (e, r) => {
                let t = void 0 === r ? {} : r
                return {
                  onClick: (r) => {
                    ;(ec(e), t.onClick?.(r))
                  },
                  onMouseMove: (r) => {
                    ;(ed(e), t.onMouseMove?.(r))
                  },
                  onMouseLeave: () => {
                    B && ((ee.current = !1), en(-1))
                  },
                  "data-list-navigation-item": "true",
                }
              }),
              (w[63] = B),
              (w[64] = ed),
              (w[65] = ec),
              (w[66] = I))
            : (I = w[66])
          let eh = I
          return (
            w[67] !== em || w[68] !== eh || w[69] !== ep || w[70] !== ea
              ? ((A = {
                  highlightedIndex: ea,
                  setHighlightedIndex: en,
                  listRef: Z,
                  handleKeyDown: ep,
                  getInputProps: em,
                  getItemProps: eh,
                }),
                (w[67] = em),
                (w[68] = eh),
                (w[69] = ep),
                (w[70] = ea),
                (w[71] = A))
              : (A = w[71]),
            A
          )
        },
      },
    )
  },
  GEsy(e, r, t) {
    var i = t("QosV"),
      a = t("zd8w")
    t.d(
      r,
      {},
      {
        o: function (e, r) {
          let t,
            n,
            l = (0, i.c)(4),
            [s, o] = (0, a.useState)(e)
          return (
            l[0] !== r || l[1] !== e
              ? ((t = () => {
                  let t = window.setTimeout(() => o(e), r)
                  return () => window.clearTimeout(t)
                }),
                (n = [e, r]),
                (l[0] = r),
                (l[1] = e),
                (l[2] = t),
                (l[3] = n))
              : ((t = l[2]), (n = l[3])),
            (0, a.useEffect)(t, n),
            s
          )
        },
      },
    )
  },
}
//# sourceMappingURL=698453.8f3dfd0e9a.js.map
