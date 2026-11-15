export const __rspack_esm_ids = [703143]
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
            imageUrl: f,
            Icon: g,
            tooltipComponent: _,
            ...y
          } = e,
          [b, w] = (0, t.useState)(),
          v = !!(y.onPointerDown || y.onClick),
          x = null == h ? void 0 : l[h.split("").reduce((e, r) => e + r.charCodeAt(0), 0) % l.length],
          I = (0, a.jsx)(v ? "button" : "span", {
            className: (0, n.A)("Avatar-ZIKxFq", r),
            style: (0, s.mW)({
              "avatar-size": i,
              "avatar-background-color": null == x ? void 0 : `var(--color-avatar-${x})`,
              "avatar-text-color": null == x ? void 0 : "var(--color-avatar-foreground)",
            }),
            role: v ? void 0 : "presentation",
            "aria-label": v ? c : void 0,
            "data-color": d,
            "data-variant": m,
            type: v ? "button" : void 0,
            ...y,
            children:
              f && "error" !== b
                ? (0, a.jsx)(u, { status: b, url: f, onError: () => w("error"), onLoad: () => w("loaded") })
                : g
                  ? (0, a.jsx)(g, { className: "AvatarIcon-PmtHig" })
                  : o
                    ? (0, a.jsx)(p, { count: o })
                    : (0, a.jsx)("span", { className: "AvatarInitial-tg7FSE", children: c?.charAt(0).toUpperCase() }),
          })
        return c && _ ? (0, a.jsx)(_, { content: c, children: I }) : I
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
            { avatarUrl: o, colorKey: c, fadeIn: d, loading: u, loadingFallback: p, muted: h, name: m, size: f } = e,
            g = void 0 === f ? "md" : f,
            { isProfileVisible: _ } = (0, l.D)(),
            { src: y, isError: b } = (0, n._w)(_ ? o : null),
            w = _ && (u || (null != o && null == y && !b)) ? p : void 0
          return (
            i[0] !== c || i[1] !== d || i[2] !== p || i[3] !== h || i[4] !== m || i[5] !== g || i[6] !== y || i[7] !== w
              ? ((r = (0, a.jsx)(s.e, {
                  alt: "",
                  colorKey: c,
                  fadeIn: d,
                  fallback: w,
                  loadingFallback: p,
                  muted: h,
                  name: m,
                  size: g,
                  src: y,
                })),
                (i[0] = c),
                (i[1] = d),
                (i[2] = p),
                (i[3] = h),
                (i[4] = m),
                (i[5] = g),
                (i[6] = y),
                (i[7] = w),
                (i[8] = r))
              : (r = i[8]),
            r
          )
        },
      },
    )
  },
  TjgH(e, r, i) {
    var a = i("ABep"),
      t = i("QosV"),
      n = i("on57")
    let s = {
      catalog:
        "gap-2 rounded-full border border-subtle bg-surface px-3 py-1.5 text-sm leading-5 font-normal text-default",
      catalogDisabled:
        "gap-2 rounded-full border border-subtle bg-surface-tertiary px-3 py-1.5 text-sm leading-5 font-normal text-tertiary opacity-70",
      unread:
        "h-3.75 min-w-3.75 shrink-0 justify-center rounded-unread-badge bg-accent px-0.5 text-unread-badge text-on-accent tabular-nums select-none",
      count:
        "h-5 min-w-6 justify-center rounded-full bg-text/8 px-1.25 text-xs leading-4.5 font-semibold tracking-[0.3px] text-(--gray-750) tabular-nums",
      default: "bg-secondary-soft text-secondary-solid rounded-sm px-2 py-1 text-sm leading-none",
      info: "bg-text-info/10 text-info rounded-sm px-2 py-1 text-sm leading-none",
      infoPill: "rounded-full bg-info-soft px-3 py-1.5 text-xs font-medium text-info",
      outline:
        "rounded-sm border border-default bg-transparent px-2 py-1 text-xs leading-none font-medium text-secondary",
      outlinePill: "h-6 rounded-full border border-subtle px-2.5 text-xs leading-4 font-semibold text-secondary",
      identity:
        "max-w-full min-w-0 rounded-xl border border-default px-3 py-2 text-heading-lg leading-7 font-medium wrap-anywhere text-default select-text",
      neutral:
        "h-7 gap-1.5 rounded-full border border-default bg-surface-secondary px-2.5 text-sm leading-none font-medium whitespace-nowrap text-secondary",
      neutralCompact:
        "h-6 gap-1 rounded-md border border-default bg-surface-secondary px-2 text-xs leading-none font-medium whitespace-nowrap text-secondary",
      recipient:
        "h-7 gap-1.5 rounded-md bg-secondary-soft px-2 text-sm leading-none font-normal whitespace-nowrap text-default",
      offer:
        "min-h-5 gap-1 rounded-[6px] bg-chart-green/15 px-2.5 py-1 text-xs font-medium text-chart-green tabular-nums light:text-(color:--green-700)",
      promotion:
        "min-h-6 rounded-full bg-chart-purple/10 px-2.5 text-sm leading-none font-medium whitespace-nowrap text-chart-purple",
      success:
        "min-h-5 rounded-full bg-success-soft-alpha px-2 text-xs font-medium text-success-soft-alpha tabular-nums",
      warning: "min-h-5 rounded-full bg-warning-soft-alpha px-2 text-xs font-medium text-warning-soft-alpha",
      caution: "min-h-5 rounded-full bg-caution-soft-alpha px-2 text-xs font-medium text-caution-soft-alpha",
      danger: "min-h-5 rounded-full bg-danger-soft-alpha px-2 text-xs font-medium text-danger-soft-alpha",
      tip: "min-h-5 rounded-full bg-tip-soft px-2 text-xs leading-none font-medium text-tip",
      tipInset:
        "min-h-5 rounded-[calc(var(--radius-2xl)-var(--spacing)*2-1px)] bg-tip-soft px-2 text-xs leading-none font-medium text-tip",
      internal:
        "rounded-full bg-(--color-background-internal-badge) px-2.5 py-1 text-xs font-medium text-(--color-text-internal-badge)",
      reserve: "gap-1 rounded-full bg-chart-yellow/15 px-3 py-1 text-sm leading-5 font-semibold text-chart-yellow",
      recording: "h-5 rounded-sidebar-inset bg-text-info/10 px-1.5 text-info dark:bg-text-info/15",
    }
    i.d(
      r,
      {},
      {
        E: function (e) {
          let r,
            i,
            l,
            o = (0, t.c)(10),
            { ref: c, children: d, className: u, variant: p } = e,
            h = void 0 === p ? "default" : p,
            m = s[h]
          return (
            o[0] !== u || o[1] !== m
              ? ((r = (0, n.A)("inline-flex items-center", m, u)), (o[0] = u), (o[1] = m), (o[2] = r))
              : (r = o[2]),
            o[3] !== d || o[4] !== h
              ? ((i = "unread" === h ? (0, a.jsx)("span", { className: "text-cap-trim", children: d }) : d),
                (o[3] = d),
                (o[4] = h),
                (o[5] = i))
              : (i = o[5]),
            o[6] !== c || o[7] !== r || o[8] !== i
              ? ((l = (0, a.jsx)("span", { ref: c, className: r, children: i })),
                (o[6] = c),
                (o[7] = r),
                (o[8] = i),
                (o[9] = l))
              : (l = o[9]),
            l
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
      f = i("w5lF"),
      g = i("OAko"),
      _ = i("zKCW"),
      y = i("mUDD"),
      b = i("bVeK"),
      w = i("SGsN"),
      v = i("GaA7"),
      x = i("OWtl"),
      I = i("akkX"),
      A = i("wuZu"),
      S = i("IZAr"),
      R = i("JGmX"),
      E = i("FwqS"),
      L = i("jnsB"),
      C = i("CFGX"),
      T = i("LKbA"),
      q = i("rvFo"),
      k = i("eShZ"),
      j = i("uris"),
      M = i("xSOA"),
      N = i("Wf1j"),
      F = i("Yjer"),
      P = i("nqea")
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
      let s = (0, P.X1)(r, "state").slice(0, "folder" === r.resourceKind ? 3 : 5)
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
    var O = i("Te1l")
    function G(e) {
      let r,
        i,
        n,
        o,
        c,
        h,
        f,
        g,
        v,
        I,
        S,
        R,
        E,
        L,
        C = (0, t.c)(79),
        { analytics: k, api: G, canApprove: U, canDecide: $, disabled: W, isCurrentSession: Q, sharingScope: V } = e,
        X = (0, d.gh)(x.u),
        Z = (0, N.A)(),
        J = (0, l.jE)()
      C[0] !== k.shareSessionId || C[1] !== J || C[2] !== V
        ? ((r = () => (0, O.X)(J, V, "owner-access-requests", k.shareSessionId)),
          (C[0] = k.shareSessionId),
          (C[1] = J),
          (C[2] = V),
          (C[3] = r))
        : (r = C[3])
      let [ee] = (0, u.useState)(r),
        er = (0, u.useId)(),
        [ei, ea] = (0, u.useState)(!1),
        [et, en] = (0, u.useState)(z)
      ;(C[4] !== ee || C[5] !== V
        ? ((i = [...(0, P.X1)(V, "owner-access-requests"), "pages", ee]), (C[4] = ee), (C[5] = V), (C[6] = i))
        : (i = C[6]),
        C[7] !== G
          ? ((n = (e) => {
              let { pageParam: r, signal: i } = e
              return G.getOwnerAccessRequests({ cursor: r, signal: i })
            }),
            (C[7] = G),
            (C[8] = n))
          : (n = C[8]),
        C[9] !== $ || C[10] !== i || C[11] !== n
          ? ((o = {
              enabled: $,
              queryKey: i,
              queryFn: n,
              initialPageParam: null,
              getNextPageParam: Y,
              retry: !1,
              staleTime: q.D.THIRTY_SECONDS,
            }),
            (C[9] = $),
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
      C[13] !== k || C[14] !== X || C[15] !== V
        ? ((c = (e, r, i, a) => {
            let { decision: t, row: n } = e
            ;(0, F.aS)(X, k, {
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
              role: (0, F.qT)((0, P.rP)(n.request.requested_role_id, V.resourceKind)),
            })
          }),
          (C[13] = k),
          (C[14] = X),
          (C[15] = V),
          (C[16] = c))
        : (c = C[16])
      let eh = c
      ;(C[17] !== V ? ((h = (0, P.X1)(V, "state")), (C[17] = V), (C[18] = h)) : (h = C[18]),
        C[19] !== G || C[20] !== U || C[21] !== $ || C[22] !== Q
          ? ((f = (e) => {
              let { decision: r, row: i } = e
              if (!Q() || !$ || ("approve" === r && !U))
                throw Error("Library access-request decisions are not permitted")
              return G.decideAccessRequestGroup({ decision: r, recipient: i.recipient, requests: i.requests })
            }),
            (C[19] = G),
            (C[20] = U),
            (C[21] = $),
            (C[22] = Q),
            (C[23] = f))
          : (f = C[23]),
        C[24] !== Q || C[25] !== eh
          ? ((g = (e) => {
              let r = crypto.randomUUID()
              return (Q() && eh(e, "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_STARTED", r), r)
            }),
            (C[24] = Q),
            (C[25] = eh),
            (C[26] = g))
          : (g = C[26]),
        C[27] !== Q || C[28] !== eh || C[29] !== X
          ? ((I = (e, r, i) => {
              let { confirmedRequests: t, remainingRequests: n } = e
              if (!Q()) return
              let s = "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_SUCCEEDED"
              ;(n.length > 0 &&
                (s =
                  0 === t.length
                    ? "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_FAILED"
                    : "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_PARTIAL"),
                eh(r, s, i),
                en((e) => new Set([...e, ...t.map((e) => (0, P.d7)({ request: e, recipient: r.row.recipient }))])),
                n.length > 0 &&
                  (t.length > 0
                    ? X.get(w.Id).warning(
                        (0, a.jsx)(p.A, {
                          id: "librarySharing.requests.partial",
                          defaultMessage: "Some requests were updated. Review the remaining requests and try again",
                          description:
                            "Toast after only some duplicate Library access requests for one recipient were confirmed; unconfirmed requests stay visible",
                        }),
                      )
                    : X.get(w.Id).danger(
                        (0, a.jsx)(p.A, {
                          id: "librarySharing.requests.updateError",
                          defaultMessage: "Couldn't update this request. Try again",
                          description: "Error toast when approving or declining a Library access request fails",
                        }),
                        { errorAnalytics: { toastId: "librarySharing.requests.updateError" } },
                      )))
            }),
            (v = (e, r, i) => {
              Q() &&
                (eh(r, "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_FAILED", i, e),
                X.get(w.Id).danger(
                  (0, a.jsx)(p.A, {
                    id: "librarySharing.requests.updateError",
                    defaultMessage: "Couldn't update this request. Try again",
                    description: "Error toast when approving or declining a Library access request fails",
                  }),
                  { errorAnalytics: { toastId: "librarySharing.requests.updateError" } },
                ))
            }),
            (C[27] = Q),
            (C[28] = eh),
            (C[29] = X),
            (C[30] = v),
            (C[31] = I))
          : ((v = C[30]), (I = C[31])),
        C[32] !== Q || C[33] !== J || C[34] !== V
          ? ((S = () => {
              Q() && D(J, V, { includeShares: !0 })
            }),
            (C[32] = Q),
            (C[33] = J),
            (C[34] = V),
            (C[35] = S))
          : (S = C[35]),
        C[36] !== v || C[37] !== S || C[38] !== h || C[39] !== f || C[40] !== g || C[41] !== I
          ? ((R = {
              mutationKey: h,
              networkMode: "always",
              retry: !1,
              mutationFn: f,
              onMutate: g,
              onSuccess: I,
              onError: v,
              onSettled: S,
            }),
            (C[36] = v),
            (C[37] = S),
            (C[38] = h),
            (C[39] = f),
            (C[40] = g),
            (C[41] = I),
            (C[42] = R))
          : (R = C[42]))
      let { mutate: em, isPending: ef } = (0, M.n)(R)
      if (!$) return null
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
          C[44] !== Q || C[45] !== ep
            ? ((r = () => {
                Q() && ep()
              }),
              (C[44] = Q),
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
                children: (0, a.jsx)(_.l, {
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
        C[51] !== U ||
        C[52] !== $ ||
        C[53] !== es?.pages ||
        C[54] !== es?.pages.at ||
        C[55] !== es?.pages.flatMap ||
        C[56] !== W ||
        C[57] !== ei ||
        C[58] !== eu ||
        C[59] !== ed ||
        C[60] !== Z ||
        C[61] !== Q ||
        C[62] !== eo ||
        C[63] !== ef ||
        C[64] !== em ||
        C[65] !== ep ||
        C[66] !== er ||
        C[67] !== et ||
        C[68] !== V
      ) {
        L = Symbol.for("react.early_return_sentinel")
        e: {
          let e, r, i, t
          C[71] !== et
            ? ((e = (e) => {
                let [r, ...i] = e.requests.filter((r) => !et.has((0, P.d7)({ request: r, recipient: e.recipient })))
                return null == r ? [] : [{ ...e, request: r, requests: [r, ...i] }]
              }),
              (C[71] = et),
              (C[72] = e))
            : (e = C[72])
          let n = (0, P.qh)(es?.pages.flatMap(B) ?? []).flatMap(e),
            l = es?.pages.at(-1)?.next_cursor != null
          if (0 === n.length && !l) {
            L = null
            break e
          }
          C[73] !== es?.pages || C[74] !== es?.pages.flatMap
            ? ((r = new Map(es?.pages.flatMap(H))), (C[73] = es?.pages), (C[74] = es?.pages.flatMap), (C[75] = r))
            : (r = C[75])
          let o = r
          ;(C[76] !== ei
            ? ((i = () => ea(!ei)),
              (t = ei ? (0, a.jsx)(b.Aq_, {}) : (0, a.jsx)(b.uM3, {})),
              (C[76] = ei),
              (C[77] = i),
              (C[78] = t))
            : ((i = C[77]), (t = C[78])),
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
                            i = o.get((0, P.nD)(e.recipient)),
                            t = o.get((0, P.nD)(e.request.requester)),
                            n = i?.display_name ?? i?.email,
                            l = t?.display_name ?? t?.email,
                            c = new Set(e.requests.map(K)).size - 1,
                            d = (0, P.rP)(e.request.requested_role_id, V.resourceKind)
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
                              A.h,
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
                                      disabled: W || ef || !U || ("viewer" !== d && "editor" !== d),
                                      size: "sm",
                                      onClick: () => {
                                        Q() && $ && U && em({ decision: "approve", row: e })
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
                                      disabled: W || ef,
                                      size: "sm",
                                      onClick: () => {
                                        Q() && $ && em({ decision: "decline", row: e })
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
                              (0, P.M4)(e),
                            )
                          )
                        }),
                        l
                          ? (0, a.jsx)(s.$, {
                              size: "xl",
                              type: "button",
                              color: "secondary",
                              disabled: W || ef || eo,
                              loading: eo,
                              onClick: () => {
                                Q() && (ed ? eu() : ep())
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
        ;((C[51] = U),
          (C[52] = $),
          (C[53] = es?.pages),
          (C[54] = es?.pages.at),
          (C[55] = es?.pages.flatMap),
          (C[56] = W),
          (C[57] = ei),
          (C[58] = eu),
          (C[59] = ed),
          (C[60] = Z),
          (C[61] = Q),
          (C[62] = eo),
          (C[63] = ef),
          (C[64] = em),
          (C[65] = ep),
          (C[66] = er),
          (C[67] = et),
          (C[68] = V),
          (C[69] = E),
          (C[70] = L))
      } else ((E = C[69]), (L = C[70]))
      return L !== Symbol.for("react.early_return_sentinel") ? L : E
    }
    function K(e) {
      return (0, P.nD)(e.requester)
    }
    function H(e) {
      return e.principal_identities.map(U)
    }
    function U(e) {
      return [(0, P.nD)(e.principal), e]
    }
    function B(e) {
      return e.requests
    }
    function Y(e, r, i, a) {
      return null == e.next_cursor || a.includes(e.next_cursor) ? void 0 : e.next_cursor
    }
    function z() {
      return new Set()
    }
    var $ = i("TzhQ"),
      W = i("heYt"),
      Q = i("aoV0"),
      V = i("glqn"),
      X = i("slpy")
    function Z(e) {
      let r,
        i,
        s,
        l,
        o = (0, t.c)(18),
        { shares: c, effectiveAccess: d, resourceKind: u, renderActions: h, draftRoles: f } = e
      if (
        o[0] !== f ||
        o[1] !== d?.collaborators ||
        o[2] !== d?.collaborators.filter ||
        o[3] !== h ||
        o[4] !== u ||
        o[5] !== c.owner ||
        o[6] !== c.shares
      ) {
        s = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            t = d?.collaborators.filter((e) => {
              let { principal: r } = e
              return (
                ("user" === r.principal_type || "group" === r.principal_type) && (0, P.nD)(r) !== (0, P.nD)(c.owner)
              )
            }),
            l = new Map(t?.map(J)),
            g = new Set(),
            _ = c.shares.flatMap((e) => {
              let r = e.recipient
              if ("principal" === r.recipient_type) {
                let i = r.principal_type ?? "user",
                  a = `${i}:${r.principal_id}`
                return ("user" !== i && "group" !== i) || a === (0, P.nD)(c.owner)
                  ? []
                  : (g.add(a), [{ key: e.share_id, share: e, collaborator: l.get(a) }])
              }
              return [{ key: e.share_id, share: e }]
            })
          for (let e of t ?? []) {
            let r = (0, P.nD)(e.principal)
            g.has(r) || _.push({ key: `effective:${r}`, collaborator: e })
          }
          if (0 === _.length) {
            s = null
            break e
          }
          ;((r = "flex flex-col gap-1"),
            o[10] !== f || o[11] !== h || o[12] !== u || o[13] !== c
              ? ((e = (e) => {
                  let { key: r, share: i, collaborator: t } = e
                  if (f?.has(r) && null == f.get(r)) return null
                  let s =
                      t?.email ??
                      i?.recipient_email ??
                      (i?.recipient.recipient_type === "email" ? i.recipient.email : void 0),
                    l =
                      i?.status !== "pending" || c.owner.principal_id.includes("__")
                        ? t?.display_name || i?.recipient_display_name || s || void 0
                        : s || void 0,
                    o = (0, P.rP)(t?.role_id ?? i?.role_id ?? "", u),
                    d =
                      t?.principal.principal_type === "group" ||
                      (i?.recipient.recipient_type === "principal" && "group" === i.recipient.principal_type),
                    g = null
                  t?.inherited &&
                    (g =
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
                  let _ =
                    null != g || t?.group_source != null
                      ? (0, a.jsxs)("div", {
                          className: "flex flex-col",
                          children: [
                            g,
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
                    A.h,
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
                        content: _,
                        children:
                          null == h
                            ? (0, a.jsx)("span", {
                                className: "pe-2 text-sm text-tertiary",
                                tabIndex: null == _ ? void 0 : 0,
                                children: (0, a.jsx)(T.u, { permission: o }),
                              })
                            : (0, a.jsx)("span", {
                                className: "inline-flex",
                                tabIndex: null == _ ? void 0 : 0,
                                children: h({ key: r, share: i, collaborator: t, role: o, personName: l }),
                              }),
                      }),
                    },
                    r,
                  )
                }),
                (o[10] = f),
                (o[11] = h),
                (o[12] = u),
                (o[13] = c),
                (o[14] = e))
              : (e = o[14]),
            (i = _.map(e)))
        }
        ;((o[0] = f),
          (o[1] = d?.collaborators),
          (o[2] = d?.collaborators.filter),
          (o[3] = h),
          (o[4] = u),
          (o[5] = c.owner),
          (o[6] = c.shares),
          (o[7] = r),
          (o[8] = i),
          (o[9] = s))
      } else ((r = o[7]), (i = o[8]), (s = o[9]))
      return s !== Symbol.for("react.early_return_sentinel")
        ? s
        : (o[15] !== r || o[16] !== i
            ? ((l = (0, a.jsx)("div", { className: r, children: i })), (o[15] = r), (o[16] = i), (o[17] = l))
            : (l = o[17]),
          l)
    }
    function J(e) {
      return [(0, P.nD)(e.principal), e]
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
        f,
        g,
        _,
        y,
        b,
        v,
        I,
        A,
        S,
        R,
        E,
        L = (0, t.c)(92),
        {
          api: C,
          sharingScope: q,
          analytics: k,
          shares: j,
          effectiveAccess: N,
          allowedRoles: O,
          canChange: G,
          canRemove: K,
          canRemoveEffective: H,
          disabled: U,
          isCurrentSession: B,
          onStageChange: Y,
        } = e,
        z = (0, d.gh)(x.u),
        $ = (0, l.jE)(),
        [W, Q] = (0, u.useState)(null)
      L[0] === Symbol.for("react.memo_cache_sentinel") ? ((r = new Map()), (L[0] = r)) : (r = L[0])
      let [X, J] = (0, u.useState)(r)
      L[1] !== q ? ((i = (0, P.X1)(q, "shares")), (L[1] = q), (L[2] = i)) : (i = L[2])
      let ee = i
      L[3] !== q ? ((n = (0, P.X1)(q, "effective-access")), (L[3] = q), (L[4] = n)) : (n = L[4])
      let eo = n
      ;(L[5] !== q ? ((s = (0, P.X1)(q, "state")), (L[5] = q), (L[6] = s)) : (s = L[6]),
        L[7] !== O ||
        L[8] !== C ||
        L[9] !== G ||
        L[10] !== K ||
        L[11] !== H ||
        L[12] !== B ||
        L[13] !== j ||
        L[14] !== q.resourceKind
          ? ((o = async (e) => {
              let r = "direct" === e.kind ? e.desiredRole : e.preview.desired_role
              if (
                !B() ||
                (null != r && (!G || !O.includes(r))) ||
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
                        roleId: P.F2[q.resourceKind][e.desiredRole],
                        expectedInvitationId: e.share.share_id,
                      }),
                    }
            }),
            (L[7] = O),
            (L[8] = C),
            (L[9] = G),
            (L[10] = K),
            (L[11] = H),
            (L[12] = B),
            (L[13] = j),
            (L[14] = q.resourceKind),
            (L[15] = o))
          : (o = L[15]),
        L[16] !== k || L[17] !== B || L[18] !== $ || L[19] !== z || L[20] !== ee || L[21] !== q
          ? ((c = async (e) => {
              await $.cancelQueries({ queryKey: ee.slice(0, 5) })
              let r = crypto.randomUUID()
              return (
                B() &&
                  (0, F.aS)(z, k, {
                    ...ep(e, q),
                    outcome: "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_STARTED",
                    operationId: r,
                  }),
                r
              )
            }),
            (L[16] = k),
            (L[17] = B),
            (L[18] = $),
            (L[19] = z),
            (L[20] = ee),
            (L[21] = q),
            (L[22] = c))
          : (c = L[22]),
        L[23] !== k || L[24] !== eo || L[25] !== B || L[26] !== $ || L[27] !== z || L[28] !== ee || L[29] !== q
          ? ((h = async (e, r, i) => {
              if (!B()) return
              let t = "effective" === e.kind && !0 === e.result.partial_failure,
                n = "effective" === e.kind ? e.preview.mutations.find(es) : void 0,
                s = "direct" === e.kind && null == e.updatedShare ? e.share : void 0,
                l =
                  s?.status === "active" && "principal" === s.recipient.recipient_type
                    ? (0, P.nD)({
                        principal_type: s.recipient.principal_type ?? "user",
                        principal_id: s.recipient.principal_id,
                      })
                    : void 0,
                o = $.getQueryData(eo),
                c =
                  null != l &&
                  o?.complete === !0 &&
                  o.collaborators.every((e) => (0, P.nD)(e.principal) !== l || e.source?.invitation_id != null)
              if (
                (D($, null == n ? q : { ...q, resourceKind: "folder", libraryFileId: n.resource.resource_id }, {
                  includeShares:
                    t ||
                    ("effective" === e.kind &&
                      (1 !== e.preview.mutations.length || e.preview.mutations[0]?.invitation_id == null)),
                  preserveEffectiveAccess: c,
                }),
                await Promise.all([
                  "direct" === e.kind ||
                  (!t && 1 === e.preview.mutations.length && e.preview.mutations[0]?.invitation_id != null)
                    ? $.cancelQueries({ queryKey: ee, exact: !0 })
                    : void 0,
                  ("effective" === e.kind ? !t && e.result.effective_access.complete : null != e.updatedShare || c)
                    ? $.cancelQueries({ queryKey: eo, exact: !0 })
                    : void 0,
                ]),
                B())
              ) {
                if ("direct" === e.kind) {
                  if (
                    ($.setQueryData(ee, (r) =>
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
                    $.setQueryData(eo, (i) =>
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
                    $.setQueryData(eo, (e) =>
                      null == e
                        ? e
                        : {
                            ...e,
                            collaborators: e.collaborators.flatMap((e) =>
                              (0, P.nD)(e.principal) !== l
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
                  $.setQueryData(eo, e.result.effective_access)
                  let r = t || 1 !== e.preview.mutations.length ? void 0 : e.preview.mutations[0]
                  r?.invitation_id != null &&
                    $.setQueryData(ee, (e) =>
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
                ;(Q(null),
                  (0, F.aS)(z, k, {
                    ...ep(r, q),
                    outcome: t
                      ? "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_PARTIAL"
                      : "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_SUCCEEDED",
                    operationId: i,
                    succeededRecipientCount: t ? void 0 : 1,
                    failedRecipientCount: t ? 1 : void 0,
                  }),
                  t
                    ? z
                        .get(w.Id)
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
                        .get(w.Id)
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
            (L[23] = k),
            (L[24] = eo),
            (L[25] = B),
            (L[26] = $),
            (L[27] = z),
            (L[28] = ee),
            (L[29] = q),
            (L[30] = h))
          : (h = L[30]),
        L[31] !== k || L[32] !== B || L[33] !== $ || L[34] !== z || L[35] !== q
          ? ((m = (e, r, i) => {
              if (!B()) return
              ;(Q(null),
                (0, F.aS)(z, k, {
                  ...ep(r, q),
                  outcome: "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_FAILED",
                  operationId: i,
                  failedRecipientCount: 1,
                  error: (0, F.GE)(e),
                }),
                z
                  .get(w.Id)
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
              D($, null == t ? q : { ...q, resourceKind: "folder", libraryFileId: t.resource.resource_id }, {
                includeShares: !0,
              })
            }),
            (L[31] = k),
            (L[32] = B),
            (L[33] = $),
            (L[34] = z),
            (L[35] = q),
            (L[36] = m))
          : (m = L[36]),
        L[37] !== s || L[38] !== o || L[39] !== c || L[40] !== h || L[41] !== m
          ? ((f = {
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
            (L[42] = f))
          : (f = L[42]))
      let { mutateAsync: ec, isPending: ed } = (0, M.n)(f)
      L[43] !== ec || L[44] !== Y
        ? ((g = function (e, r) {
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
          (L[45] = g))
        : (g = L[45])
      let eu = g
      ;(L[46] !== q ? ((_ = (0, P.X1)(q, "state")), (L[46] = q), (L[47] = _)) : (_ = L[47]),
        L[48] !== C || L[49] !== G || L[50] !== H || L[51] !== B
          ? ((y = (e) => {
              let { collaborator: r, desiredRole: i } = e
              if (!B() || (null == i ? !H : !G))
                throw Error("Library inherited access management is no longer permitted")
              return C.previewAccessChange({ recipient: r.principal, desiredRole: i })
            }),
            (L[48] = C),
            (L[49] = G),
            (L[50] = H),
            (L[51] = B),
            (L[52] = y))
          : (y = L[52]),
        L[53] !== B || L[54] !== $ || L[55] !== ee || L[56] !== q.resourceKind || L[57] !== eu
          ? ((b = (e, r) => {
              let { key: i, personName: a } = r
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
                  Q({ key: i, personName: a, preview: e })
                else {
                  if (null != e.desired_role && 0 === e.mutations.length && "user" === e.recipient.principal_type) {
                    let r = $.getQueryData(ee)?.shares.find(
                      (r) =>
                        "active" === r.status &&
                        "principal" === r.recipient.recipient_type &&
                        (r.recipient.principal_type ?? "user") === "user" &&
                        r.recipient.principal_id === e.recipient.principal_id,
                    )
                    if (null != r && (0, P.rP)(r.role_id, q.resourceKind) !== e.desired_role)
                      return void eu(i, { kind: "direct", share: r, desiredRole: e.desired_role })
                  }
                  eu(i, { kind: "effective", preview: e })
                }
            }),
            (L[53] = B),
            (L[54] = $),
            (L[55] = ee),
            (L[56] = q.resourceKind),
            (L[57] = eu),
            (L[58] = b))
          : (b = L[58]),
        L[59] !== B || L[60] !== $ || L[61] !== z || L[62] !== q
          ? ((v = () => {
              B() &&
                (z
                  .get(w.Id)
                  .danger(
                    (0, a.jsx)(p.A, {
                      id: "librarySharing.collaborators.previewFailed",
                      defaultMessage: "Couldn't check how this change affects access. Try again",
                      description:
                        "Error toast when the Library sharing dialog cannot preview an inherited permission change; no access change has been applied",
                    }),
                    { errorAnalytics: { toastId: "librarySharing.collaborators.previewFailed" } },
                  ),
                D($, q))
            }),
            (L[59] = B),
            (L[60] = $),
            (L[61] = z),
            (L[62] = q),
            (L[63] = v))
          : (v = L[63]),
        L[64] !== _ || L[65] !== y || L[66] !== b || L[67] !== v
          ? ((I = { mutationKey: _, networkMode: "always", retry: !1, mutationFn: y, onSuccess: b, onError: v }),
            (L[64] = _),
            (L[65] = y),
            (L[66] = b),
            (L[67] = v),
            (L[68] = I))
          : (I = L[68]))
      let { mutate: eh, isPending: em } = (0, M.n)(I),
        ef = U || ed || em
      return (
        L[69] !== O ||
        L[70] !== ef ||
        L[71] !== G ||
        L[72] !== K ||
        L[73] !== H ||
        L[74] !== X ||
        L[75] !== eh ||
        L[76] !== q.accountUserId ||
        L[77] !== eu
          ? ((A = (e) => {
              let { key: r, share: i, collaborator: t, role: n, personName: s } = e,
                l = X.get(r) ?? n
              if (
                (t?.principal.principal_type === "user" && t.principal.principal_id === q.accountUserId) ||
                (i?.recipient.recipient_type === "principal" &&
                  (i.recipient.principal_type ?? "user") === "user" &&
                  i.recipient.principal_id === q.accountUserId)
              )
                return (0, a.jsx)("span", {
                  className: "pe-4 text-sm text-tertiary",
                  children: (0, a.jsx)(T.u, { permission: n }),
                })
              let o =
                  null != t &&
                  i?.status !== "pending" &&
                  (null == i || !0 === t.inherited || null != t.group_source || "editor" === n),
                c = o ? O.filter(ei) : O,
                d = (null != i && K) || (o && H)
              return (G && c.some((e) => e !== n)) || d
                ? (0, a.jsx)(V.e, {
                    indicatorVariant: "checkmark",
                    disabled: ef,
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
                      if (!ef && G && "unknown" !== e && e !== l) {
                        if (e === n) return void eu(r, null)
                        null != t && i?.status !== "pending" && ("viewer" === e || "editor" === e)
                          ? eh({ key: r, collaborator: t, desiredRole: e, personName: s })
                          : null != i && eu(r, { kind: "direct", share: i, desiredRole: e })
                      }
                    },
                    onRemoveAccess: d
                      ? () => {
                          !ef &&
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
            (L[69] = O),
            (L[70] = ef),
            (L[71] = G),
            (L[72] = K),
            (L[73] = H),
            (L[74] = X),
            (L[75] = eh),
            (L[76] = q.accountUserId),
            (L[77] = eu),
            (L[78] = A))
          : (A = L[78]),
        L[79] !== X || L[80] !== N || L[81] !== j || L[82] !== q.resourceKind || L[83] !== A
          ? ((S = (0, a.jsx)(Z, {
              shares: j,
              effectiveAccess: N,
              resourceKind: q.resourceKind,
              draftRoles: X,
              renderActions: A,
            })),
            (L[79] = X),
            (L[80] = N),
            (L[81] = j),
            (L[82] = q.resourceKind),
            (L[83] = A),
            (L[84] = S))
          : (S = L[84]),
        L[85] !== ed || L[86] !== W || L[87] !== eu
          ? ((R =
              null == W
                ? null
                : (0, a.jsx)(el, {
                    isPending: ed,
                    personName: W.personName,
                    preview: W.preview,
                    onCancel: () => Q(null),
                    onConfirm: () => {
                      ;(eu(W.key, { kind: "effective", preview: W.preview }), Q(null))
                    },
                  })),
            (L[85] = ed),
            (L[86] = W),
            (L[87] = eu),
            (L[88] = R))
          : (R = L[88]),
        L[89] !== S || L[90] !== R
          ? ((E = (0, a.jsxs)(a.Fragment, { children: [S, R] })), (L[89] = S), (L[90] = R), (L[91] = E))
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
        f,
        g,
        _,
        b,
        w,
        v,
        x = (0, t.c)(40),
        { isPending: I, personName: A, preview: S, onCancel: R, onConfirm: L } = e
      x[0] !== S.affects_other_descendants || x[1] !== S.mutations
        ? ((r = S.affects_other_descendants || S.mutations.some(ed)),
          (x[0] = S.affects_other_descendants),
          (x[1] = S.mutations),
          (x[2] = r))
        : (r = x[2])
      let C = r
      x[3] !== S.affects_other_group_members || x[4] !== S.mutations
        ? ((i = S.affects_other_group_members || S.mutations.some(ec)),
          (x[3] = S.affects_other_group_members),
          (x[4] = S.mutations),
          (x[5] = i))
        : (i = x[5])
      let T = i
      return (
        x[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)(p.A, {
              id: "librarySharing.collaborators.confirmTitle",
              defaultMessage: "Change shared access?",
              description:
                "Title of the confirmation dialog shown before a Library permission change affects parent folders or other members of a group",
            })),
            (x[6] = n))
          : (n = x[6]),
        x[7] !== A
          ? ((l =
              null == A
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
                    values: { personName: A },
                  })),
            (x[7] = A),
            (x[8] = l))
          : (l = x[8]),
        x[9] !== I || x[10] !== L
          ? ((o = () => {
              I || L()
            }),
            (x[9] = I),
            (x[10] = L),
            (x[11] = o))
          : (o = x[11]),
        x[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)(p.A, {
              id: "librarySharing.collaborators.cancelChange",
              defaultMessage: "Cancel",
              description: "Button for dismissing an inherited Library access confirmation without applying changes",
            })),
            (x[12] = c))
          : (c = x[12]),
        x[13] !== I
          ? ((d = (0, a.jsx)(Q.a.Close, {
              children: (0, a.jsx)(s.$, { size: "xl", color: "secondary", disabled: I, type: "button", children: c }),
            })),
            (x[13] = I),
            (x[14] = d))
          : (d = x[14]),
        x[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, a.jsx)(p.A, {
              id: "librarySharing.collaborators.stageChange",
              defaultMessage: "Continue",
              description:
                "Confirmation button staging the listed Library permission changes, including parent-folder or group effects; the user must still save the sharing dialog to apply them",
            })),
            (x[15] = u))
          : (u = x[15]),
        x[16] !== I
          ? ((h = (0, a.jsx)(s.$, {
              size: "xl",
              color: "primary",
              disabled: I,
              loading: I,
              type: "submit",
              children: u,
            })),
            (x[16] = I),
            (x[17] = h))
          : (h = x[17]),
        x[18] !== d || x[19] !== h
          ? ((m = (0, a.jsxs)(a.Fragment, { children: [d, h] })), (x[18] = d), (x[19] = h), (x[20] = m))
          : (m = x[20]),
        x[21] !== S.mutations ? ((f = S.mutations.map(eo)), (x[21] = S.mutations), (x[22] = f)) : (f = x[22]),
        x[23] !== f
          ? ((g = (0, a.jsx)("ul", { className: "flex flex-col gap-2", children: f })), (x[23] = f), (x[24] = g))
          : (g = x[24]),
        x[25] !== C
          ? ((_ = C
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
            (x[25] = C),
            (x[26] = _))
          : (_ = x[26]),
        x[27] !== T
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
            (x[27] = T),
            (x[28] = b))
          : (b = x[28]),
        x[29] !== g || x[30] !== _ || x[31] !== b
          ? ((w = (0, a.jsx)(y.OO, {
              children: (0, a.jsxs)("div", { className: "flex flex-col gap-3", children: [g, _, b] }),
            })),
            (x[29] = g),
            (x[30] = _),
            (x[31] = b),
            (x[32] = w))
          : (w = x[32]),
        x[33] !== I || x[34] !== R || x[35] !== m || x[36] !== w || x[37] !== l || x[38] !== o
          ? ((v = (0, a.jsx)(E.Ic, {
              title: n,
              subtitle: l,
              isDismissalDisabled: I,
              onClose: R,
              onSubmit: o,
              footer: m,
              children: w,
            })),
            (x[33] = I),
            (x[34] = R),
            (x[35] = m),
            (x[36] = w),
            (x[37] = l),
            (x[38] = o),
            (x[39] = v))
          : (v = x[39]),
        v
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
        `${e.resource.resource_type}:${e.resource.resource_id}:${(0, P.nD)(e.principal)}`,
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
                : (0, a.jsx)(T.u, { permission: (0, P.rP)(s, n) })),
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
        t = "direct" === e.kind ? (0, P.rP)(e.share.role_id, r.resourceKind) : (e.preview.current_role ?? void 0),
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
      ef = i("AEhU")
    function eg(e) {
      let r,
        i,
        n,
        s,
        o,
        c,
        m,
        f,
        g,
        b,
        v,
        I,
        A,
        S = (0, t.c)(59),
        {
          account: R,
          api: E,
          sharingScope: L,
          sharingState: T,
          shares: q,
          effectiveAccess: k,
          analytics: j,
          canInvite: N,
          disabled: O,
          isCurrentSession: G,
          onStageChange: K,
        } = e,
        H = (0, d.gh)(x.u),
        U = (0, l.jE)(),
        B = "workspace" === R.structure
      S[0] !== B ? ((r = { enabled: B }), (S[0] = B), (S[1] = r)) : (r = S[1])
      let { data: Y, isError: z } = (0, d._U)(h.Jk, L.accountId, r)
      S[2] !== R || S[3] !== Y || S[4] !== z
        ? ((i = (0, C.V)(R, Y, z)), (S[2] = R), (S[3] = Y), (S[4] = z), (S[5] = i))
        : (i = S[5])
      let $ = i,
        { canSearchMembers: W } = $,
        Q = null == q ? void 0 : (0, P.q4)(q.allowed_roles, L.resourceKind),
        [V, X] = (0, u.useState)()
      S[6] === Symbol.for("react.memo_cache_sentinel") ? ((n = []), (S[6] = n)) : (n = S[6])
      let [Z, J] = (0, u.useState)(n),
        ee = (0, eh.x)(Z.some(eI), V),
        er = Q?.includes(ee) ? ee : Q?.[0],
        [ei, ea] = (0, u.useState)("")
      S[7] !== k || S[8] !== Z || S[9] !== q || S[10] !== T
        ? (({ existingPrincipalKeys: o, existingEmails: s } = (0, ef.Hd)(T, q, k)),
          (c = (0, ef.Go)(Z, s, o)),
          (S[7] = k),
          (S[8] = Z),
          (S[9] = q),
          (S[10] = T),
          (S[11] = s),
          (S[12] = o),
          (S[13] = c))
        : ((s = S[11]), (o = S[12]), (c = S[13]))
      let et = c
      S[14] !== Q
        ? ((m = function (e, r) {
            let { recipient: i } = e,
              a = (0, eh.x)("principal" === i.recipient_type && "group" === i.principal_type, r)
            return Q?.includes(a) ? a : Q?.[0]
          }),
          (S[14] = Q),
          (S[15] = m))
        : (m = S[15])
      let en = m
      ;(S[16] !== L ? ((f = (0, P.X1)(L, "state")), (S[16] = L), (S[17] = f)) : (f = S[17]),
        S[18] !== E ||
        S[19] !== N ||
        S[20] !== W ||
        S[21] !== s ||
        S[22] !== o ||
        S[23] !== en ||
        S[24] !== G ||
        S[25] !== B ||
        S[26] !== L.resourceKind
          ? ((g = (e) => {
              let { invitees: r, role: i, explicitRole: a } = e,
                t = G() && N && (!B || W) && r.every(ex) && !(0, ef.Go)(r, s, o)
              return Promise.allSettled(
                r.map(async (e) => {
                  let { recipient: r } = e,
                    i = en(e, a)
                  if (!t || null == i) throw Error("Library invitations are no longer permitted")
                  return E.createShare({ recipient: r, roleId: P.F2[L.resourceKind][i] })
                }),
              ).then((e) => ({ results: e, role: i }))
            }),
            (S[18] = E),
            (S[19] = N),
            (S[20] = W),
            (S[21] = s),
            (S[22] = o),
            (S[23] = en),
            (S[24] = G),
            (S[25] = B),
            (S[26] = L.resourceKind),
            (S[27] = g))
          : (g = S[27]),
        S[28] !== j || S[29] !== G || S[30] !== H
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
                    recipientKind: (0, F.r6)(r.map(ev)),
                    role: (0, F.qT)(i),
                  }),
                a
              )
            }),
            (S[28] = j),
            (S[29] = G),
            (S[30] = H),
            (S[31] = b))
          : (b = S[31]))
      let { mutateAsync: es, isPending: el } = (0, M.n)({
          mutationKey: f,
          networkMode: "always",
          retry: !1,
          mutationFn: g,
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
                })(U, L)),
              await U.cancelQueries({ queryKey: (0, P.X1)(L, "shares"), exact: !0 }),
              !G())
            )
              return
            ;(U.setQueryData((0, P.X1)(L, "shares"), (e) =>
              null == e ? e : { ...e, shares: [...new Map([...e.shares, ...c].map(ew)).values()] },
            ),
              D(U, L, { includeShares: 0 === c.length, preserveLibraryBrowse: d }),
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
                ? H.get(w.Id).success(
                    (0, a.jsx)(p.A, {
                      id: "librarySharing.invite.sent",
                      defaultMessage: "{count, plural, one {Invitation sent} other {Invitations sent}}",
                      description:
                        "Toast after Library sharing invitations are confirmed by the backend; count is the number of invited people or groups",
                      values: { count: c.length },
                    }),
                  )
                : H.get(w.Id).danger(
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
        eo = O || el
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
                      return a.every(e_)
                    } catch {
                      return !1
                    }
                  },
                },
          ))
      }
      return (
        S[32] !== R.structure ||
        S[33] !== Q ||
        S[34] !== E ||
        S[35] !== W ||
        S[36] !== eo ||
        S[37] !== s ||
        S[38] !== o ||
        S[39] !== et ||
        S[40] !== ei ||
        S[41] !== $ ||
        S[42] !== er ||
        S[43] !== Z ||
        S[44] !== X ||
        S[45] !== q ||
        S[46] !== L.accountId ||
        S[47] !== L.accountUserId ||
        S[48] !== T ||
        S[49] !== ec
          ? ((v =
              ("personal" === R.structure || W) && (null == Q || null != er)
                ? (0, a.jsxs)(y.OO, {
                    children: [
                      (0, a.jsx)(em.h, {
                        accountId: L.accountId,
                        currentPrincipalId: L.accountUserId,
                        currentEmail: T.viewer.email ?? void 0,
                        ...$,
                        disabled: eo,
                        existingPrincipalKeys: o,
                        existingEmails: s,
                        shares: q,
                        query: ei,
                        onQueryChange: ea,
                        selected: Z,
                        resolveRecipient: E.resolveRecipient,
                        onChange: ec,
                        role: er,
                        allowedRoles: Q,
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
            (S[32] = R.structure),
            (S[33] = Q),
            (S[34] = E),
            (S[35] = W),
            (S[36] = eo),
            (S[37] = s),
            (S[38] = o),
            (S[39] = et),
            (S[40] = ei),
            (S[41] = $),
            (S[42] = er),
            (S[43] = Z),
            (S[44] = X),
            (S[45] = q),
            (S[46] = L.accountId),
            (S[47] = L.accountUserId),
            (S[48] = T),
            (S[49] = ec),
            (S[50] = v))
          : (v = S[50]),
        S[51] !== B || S[52] !== U || S[53] !== z || S[54] !== L.accountId
          ? ((I =
              B && z
                ? (0, a.jsx)(y.OO, {
                    children: (0, a.jsx)(_.l, {
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
                        U.invalidateQueries({ queryKey: ["accounts", "settings", L.accountId] })
                      },
                    }),
                  })
                : null),
            (S[51] = B),
            (S[52] = U),
            (S[53] = z),
            (S[54] = L.accountId),
            (S[55] = I))
          : (I = S[55]),
        S[56] !== v || S[57] !== I
          ? ((A = (0, a.jsxs)(a.Fragment, { children: [v, I] })), (S[56] = v), (S[57] = I), (S[58] = A))
          : (A = S[58]),
        A
      )
    }
    function e_(e) {
      return "fulfilled" === e.status
    }
    function ey(e) {
      let { recipient: r } = e
      return r
    }
    function eb(e) {
      return "rejected" === e.status
    }
    function ew(e) {
      return [e.share_id, e]
    }
    function ev(e) {
      let { recipient: r } = e
      return r
    }
    function ex(e) {
      return e.isValid
    }
    function eI(e) {
      let { recipient: r } = e
      return "principal" === r.recipient_type && "group" === r.principal_type
    }
    var eA = i("PItM")
    function eS(e) {
      let r,
        i,
        n,
        s,
        o,
        c,
        h,
        m,
        f,
        g,
        _,
        y,
        v,
        I,
        A = (0, t.c)(79),
        {
          allowedRoles: R,
          analytics: E,
          api: L,
          canInitiateSharing: C,
          canManage: q,
          disabled: j,
          permissionsPending: N,
          hasIndependentEditorAccess: O,
          isCurrentSession: G,
          isWorkspace: K,
          sharingScope: H,
          sharingState: U,
          workspaceName: B,
          onStageChange: Y,
        } = e,
        z = void 0 !== N && N,
        $ = (0, d.gh)(x.u),
        Q = (0, l.jE)(),
        X = (0, d.Ul)(!!C && W.Uw)
      A[0] !== H || A[1] !== U
        ? ((r = (0, P.Sq)({ sharingState: U, scope: H })), (A[0] = H), (A[1] = U), (A[2] = r))
        : (r = A[2])
      let Z = r,
        [J, ee] = (0, u.useState)(null),
        er = J ?? Z
      A[3] !== O || A[4] !== H.accountUserId || A[5] !== H.resourceKind
        ? ((i = (e) =>
            e.owner.principal.principal_id !== H.accountUserId &&
            "workspace" === e.link_access &&
            e.role_id === P.F2[H.resourceKind].editor &&
            !O),
          (A[3] = O),
          (A[4] = H.accountUserId),
          (A[5] = H.resourceKind),
          (A[6] = i))
        : (i = A[6])
      let ei = i
      A[7] !== R || A[8] !== X || A[9] !== q || A[10] !== K || A[11] !== ei || A[12] !== Z || A[13] !== U
        ? ((n = q && K && null != Z && R?.includes("viewer") === !0 && !ei(U) && (X || "workspace" === Z.mode)),
          (A[7] = R),
          (A[8] = X),
          (A[9] = q),
          (A[10] = K),
          (A[11] = ei),
          (A[12] = Z),
          (A[13] = U),
          (A[14] = n))
        : (n = A[14])
      let ea = n,
        et = R?.filter(eC)
      ;(A[15] !== H ? ((s = (0, P.X1)(H, "state")), (A[15] = H), (A[16] = s)) : (s = A[16]),
        A[17] !== R ||
        A[18] !== L ||
        A[19] !== ea ||
        A[20] !== C ||
        A[21] !== G ||
        A[22] !== Q ||
        A[23] !== ei ||
        A[24] !== $ ||
        A[25] !== H ||
        A[26] !== U
          ? ((o = (e) => {
              let { next: r, observedState: i } = e
              if (!G() || !ea || ("workspace" === r.mode && (!C || !$.get(W.Uw) || !R?.includes(r.role))))
                throw Error("Library link access management is not permitted")
              if (ei(Q.getQueryData((0, P.X1)(H, "state")) ?? U))
                throw Error("Library workspace access requires the owner")
              return L.updateLinkAccess({
                expectedOwner: i.owner.principal,
                linkAccess: r,
                expectedInvitationId: "workspace" === i.link_access ? (i.workspace_invitation_id ?? void 0) : void 0,
                expectedRoleId:
                  "collaborators_only" === r.mode && "workspace" === i.link_access ? (i.role_id ?? void 0) : void 0,
              })
            }),
            (A[17] = R),
            (A[18] = L),
            (A[19] = ea),
            (A[20] = C),
            (A[21] = G),
            (A[22] = Q),
            (A[23] = ei),
            (A[24] = $),
            (A[25] = H),
            (A[26] = U),
            (A[27] = o))
          : (o = A[27]),
        A[28] !== E || A[29] !== G || A[30] !== Q || A[31] !== $ || A[32] !== H
          ? ((c = async (e) => {
              let { next: r, observedState: i } = e
              await Q.cancelQueries({ queryKey: (0, P.X1)(H, "state") })
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
                  "workspace" === i.link_access ? (0, P.rP)(i.role_id ?? "", H.resourceKind) : void 0,
                ),
              }
              return (G() && (0, F.aS)($, E, { ...a, outcome: "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_STARTED" }), a)
            }),
            (h = (e, r, i) => {
              G() &&
                (Q.setQueryData((0, P.X1)(H, "state"), e),
                (0, F.aS)($, E, { ...i, outcome: "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_SUCCEEDED" }),
                $.get(w.Id).success(
                  (0, a.jsx)(p.A, {
                    id: "librarySharing.link.saved",
                    defaultMessage: "Link access updated",
                    description:
                      "Success toast after the Library backend confirms a change to a file or folder's workspace link access",
                  }),
                ),
                D(Q, H, { preserveState: !0 }))
            }),
            (A[28] = E),
            (A[29] = G),
            (A[30] = Q),
            (A[31] = $),
            (A[32] = H),
            (A[33] = c),
            (A[34] = h))
          : ((c = A[33]), (h = A[34])),
        A[35] !== E || A[36] !== G || A[37] !== Y || A[38] !== Q || A[39] !== $ || A[40] !== H
          ? ((m = async (e, r, i) => {
              let { observedState: t } = r
              if (!G() || (await D(Q, H), !G())) return
              let n = Q.getQueryData((0, P.X1)(H, "state")),
                s =
                  (e instanceof k.fk && 409 === e.responseStatus) ||
                  (null != n &&
                    (n.owner.principal.principal_id !== t.owner.principal.principal_id ||
                      n.link_access !== t.link_access ||
                      n.workspace_invitation_id !== t.workspace_invitation_id ||
                      n.role_id !== t.role_id))
              ;(s && (ee(null), Y("link", null)),
                (0, F.aS)($, E, {
                  ...i,
                  action: "CHATGPT_FILE_LIBRARY_SHARING_ACTION_CHANGE_LINK_ACCESS",
                  outcome: "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_FAILED",
                  error: (0, F.GE)(e),
                }),
                s
                  ? $.get(w.Id).danger(
                      (0, a.jsx)(p.A, {
                        id: "librarySharing.link.conflict",
                        defaultMessage: "Link access changed. Choose your setting again before saving",
                        description:
                          "Error toast after another sharing change invalidates a staged Library link-access choice; the user must choose again against refreshed permissions",
                      }),
                      { errorAnalytics: { toastId: "linkAccess.conflict" } },
                    )
                  : $.get(w.Id).danger(
                      e instanceof k.fk && "library_manage_access_would_lose_permission" === e.errorCode
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
            (A[35] = E),
            (A[36] = G),
            (A[37] = Y),
            (A[38] = Q),
            (A[39] = $),
            (A[40] = H),
            (A[41] = m))
          : (m = A[41]),
        A[42] !== s || A[43] !== o || A[44] !== c || A[45] !== h || A[46] !== m
          ? ((f = {
              mutationKey: s,
              networkMode: "always",
              retry: !1,
              mutationFn: o,
              onMutate: c,
              onSuccess: h,
              onError: m,
            }),
            (A[42] = s),
            (A[43] = o),
            (A[44] = c),
            (A[45] = h),
            (A[46] = m),
            (A[47] = f))
          : (f = A[47]))
      let { mutateAsync: en, isPending: es } = (0, M.n)(f)
      A[48] !== ea || A[49] !== j || A[50] !== G || A[51] !== en || A[52] !== Y || A[53] !== Z || A[54] !== U
        ? ((g = function (e) {
            if (!G() || j || !ea) return
            let r = e.mode === Z?.mode && ("workspace" !== e.mode || (Z?.mode === "workspace" && e.role === Z.role))
            ;(ee(r ? null : e),
              Y(
                "link",
                r
                  ? null
                  : { kind: "link", save: () => en({ next: e, observedState: U }).then(() => (ee(null), !0), eL) },
              ))
          }),
          (A[48] = ea),
          (A[49] = j),
          (A[50] = G),
          (A[51] = en),
          (A[52] = Y),
          (A[53] = Z),
          (A[54] = U),
          (A[55] = g))
        : (g = A[55])
      let el = g,
        eo = S.p
      A[56] !== ea ||
      A[57] !== X ||
      A[58] !== j ||
      A[59] !== es ||
      A[60] !== er ||
      A[61] !== z ||
      A[62] !== Z ||
      A[63] !== H.accountId ||
      A[64] !== el ||
      A[65] !== B
        ? ((_ =
            null != er
              ? (0, a.jsx)(eA.d, {
                  disabled: !ea || j || z || es,
                  options: [
                    { value: "collaborators_only", mode: "restricted", icon: (0, a.jsx)(b.esp, {}) },
                    { value: "workspace", mode: "workspace", icon: (0, a.jsx)(b.TGw, {}), hidden: !X },
                  ],
                  workspaceName: B,
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
          (A[56] = ea),
          (A[57] = X),
          (A[58] = j),
          (A[59] = es),
          (A[60] = er),
          (A[61] = z),
          (A[62] = Z),
          (A[63] = H.accountId),
          (A[64] = el),
          (A[65] = B),
          (A[66] = _))
        : (_ = A[66])
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
        A[67] !== ea || A[68] !== X || A[69] !== er || A[70] !== et
          ? ((y =
              er?.mode !== "workspace" || (ea && X && null != et && !(et.length < 2))
                ? null
                : (0, a.jsx)("span", {
                    className: "pe-2 text-sm text-tertiary",
                    children: (0, a.jsx)(T.u, { permission: er.role }),
                  })),
            (A[67] = ea),
            (A[68] = X),
            (A[69] = er),
            (A[70] = et),
            (A[71] = y))
          : (y = A[71]),
        A[72] !== _ || A[73] !== ec || A[74] !== y
          ? ((v = (0, a.jsxs)("div", {
              className: "flex items-center justify-between gap-3 text-sm",
              children: [_, ec, y],
            })),
            (A[72] = _),
            (A[73] = ec),
            (A[74] = y),
            (A[75] = v))
          : (v = A[75]),
        A[76] !== eo || A[77] !== v
          ? ((I = (0, a.jsx)(eo, { kind: "link", children: v })), (A[76] = eo), (A[77] = v), (A[78] = I))
          : (I = A[78]),
        I
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
    function eq(e) {
      let r,
        i,
        n,
        c,
        f,
        g,
        b,
        v,
        I,
        R,
        E,
        L,
        k,
        N,
        G,
        K,
        H,
        U,
        B,
        Y,
        z,
        $,
        W = (0, t.c)(91),
        {
          account: Q,
          analytics: V,
          api: X,
          canRequest: Z,
          children: J,
          disabled: ee,
          isCurrentSession: er,
          roster: ei,
          renderDialog: ea,
          sharingScope: et,
          sharingState: en,
        } = e,
        es = (0, d.gh)(x.u),
        el = (0, l.jE)()
      W[0] !== V.shareSessionId || W[1] !== el || W[2] !== et
        ? ((r = () => (0, O.X)(el, et, "requester-access-requests", V.shareSessionId)),
          (W[0] = V.shareSessionId),
          (W[1] = el),
          (W[2] = et),
          (W[3] = r))
        : (r = W[3])
      let [eo] = (0, u.useState)(r),
        ec = "workspace" === Q.structure,
        ed = ec && Z
      W[4] !== ed ? ((i = { enabled: ed }), (W[4] = ed), (W[5] = i)) : (i = W[5])
      let { data: eu, isError: ep } = (0, d._U)(h.Jk, et.accountId, i)
      W[6] !== Q || W[7] !== eu || W[8] !== ep
        ? ((n = (0, C.V)(Q, eu, ep)), (W[6] = Q), (W[7] = eu), (W[8] = ep), (W[9] = n))
        : (n = W[9])
      let eh = n,
        { canSearchMembers: eg } = eh,
        e_ = Z && (!ec || eg)
      ;(W[10] !== eo || W[11] !== et
        ? ((c = [...(0, P.X1)(et, "requester-access-requests"), "pages", eo]), (W[10] = eo), (W[11] = et), (W[12] = c))
        : (c = W[12]),
        W[13] !== X
          ? ((f = (e) => {
              let { pageParam: r, signal: i } = e
              return X.getRequesterAccessRequests({ cursor: r, signal: i })
            }),
            (W[13] = X),
            (W[14] = f))
          : (f = W[14]),
        W[15] !== e_ || W[16] !== c || W[17] !== f
          ? ((g = {
              enabled: e_,
              queryKey: c,
              queryFn: f,
              initialPageParam: null,
              getNextPageParam: ez,
              staleTime: q.D.THIRTY_SECONDS,
              retry: !1,
            }),
            (W[15] = e_),
            (W[16] = c),
            (W[17] = f),
            (W[18] = g))
          : (g = W[18]))
      let {
        data: ey,
        isError: eb,
        isFetching: ew,
        isSuccess: ev,
        hasNextPage: ex,
        fetchNextPage: eI,
        refetch: eA,
      } = (0, j.q)(g)
      W[19] !== e_ || W[20] !== ey || W[21] !== eb || W[22] !== ev || W[23] !== en.owner.principal
        ? ((b =
            e_ &&
            ev &&
            !eb &&
            ey?.pages.every((e) =>
              e.requests.every((e) => (0, P.nD)(e.resource_owner) === (0, P.nD)(en.owner.principal)),
            )
              ? ey
              : void 0),
          (W[19] = e_),
          (W[20] = ey),
          (W[21] = eb),
          (W[22] = ev),
          (W[23] = en.owner.principal),
          (W[24] = b))
        : (b = W[24])
      let eS = b,
        eR = eS?.pages.flatMap(eY)
      W[25] !== eS ? ((v = null != eS && eS.pages.at(-1)?.next_cursor == null), (W[25] = eS), (W[26] = v)) : (v = W[26])
      let eE = v,
        eL = new Map(eS?.pages.flatMap(eU)),
        eC = ei?.owner.principal_id === en.owner.principal.principal_id,
        eq =
          eC && ei?.collaborators.some(eH)
            ? (0, P.b3)(
                eR?.flatMap((e) =>
                  e.recipients.some(
                    (r) =>
                      "user" === r.principal_type &&
                      "satisfied" === (0, P.SK)(e, r) &&
                      !ei.collaborators.some((e) => {
                        let { principal: i } = e
                        return (0, P.nD)(i) === (0, P.nD)(r)
                      }),
                  )
                    ? [e.request_id]
                    : [],
                ) ?? [],
              )
            : [],
        {
          data: eB,
          isError: e$,
          isFetching: eW,
          isSuccess: eQ,
        } = (0, o.I)({
          enabled: e_ && eq.length > 0,
          queryKey: (0, P.X1)(et, "collaborators", eq),
          queryFn: (e) => {
            let { signal: r } = e
            return X.getCollaborators({ signal: r, accessRequestIds: eq })
          },
          staleTime: q.D.THIRTY_SECONDS,
          retry: !1,
        }),
        eV = eC ? ei : void 0
      eq.length > 0 && (eV = eQ && !e$ && eB?.owner.principal_id === en.owner.principal.principal_id ? eB : void 0)
      let [eX, eZ] = (0, u.useState)("viewer")
      W[27] === Symbol.for("react.memo_cache_sentinel") ? ((I = []), (W[27] = I)) : (I = W[27])
      let [eJ, e0] = (0, u.useState)(I),
        [e1, e2] = (0, u.useState)("")
      W[28] === Symbol.for("react.memo_cache_sentinel") ? ((R = []), (W[28] = R)) : (R = W[28])
      let [e3, e4] = (0, u.useState)(R),
        [e5, e6] = (0, u.useState)(eK),
        e7 = [...(eR ?? []), ...e3],
        e8 = e7.flatMap((e) => (e.requested_role_id === P.F2[et.resourceKind][eX] ? e.recipients : [])),
        e9 = new Set([
          (0, P.nD)(en.owner.principal),
          (0, P.nD)(en.viewer.principal),
          ...(eV?.collaborators.map(eG) ?? []),
          ...e8.map(P.nD),
        ]),
        re = new Set(
          [
            en.owner.email,
            en.viewer.email,
            ...(eV?.collaborators.map(eO) ?? []),
            ...e8.map((e) => eL.get((0, P.nD)(e))?.email),
            ...e5[eX],
          ].flatMap(eD),
        ),
        rr = (0, ef.Go)(eJ, re, e9)
      ;(W[29] !== et ? ((E = (0, P.X1)(et, "state")), (W[29] = et), (W[30] = E)) : (E = W[30]),
        W[31] !== X || W[32] !== e_ || W[33] !== er
          ? ((L = (e) => {
              let { invitees: r, role: i } = e
              if (!er() || !e_) throw Error("Library access requests are not permitted")
              return X.createAccessRequest({ recipients: r.map(eP), role: i })
            }),
            (W[31] = X),
            (W[32] = e_),
            (W[33] = er),
            (W[34] = L))
          : (L = W[34]),
        W[35] !== V || W[36] !== er || W[37] !== es
          ? ((k = (e) => {
              let { invitees: r, role: i } = e,
                a = crypto.randomUUID()
              return (
                er() &&
                  (0, F.aS)(es, V, {
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
            (W[35] = V),
            (W[36] = er),
            (W[37] = es),
            (W[38] = k))
          : (k = W[38]),
        W[39] !== V || W[40] !== er || W[41] !== el || W[42] !== es || W[43] !== et
          ? ((N = async (e, r, i) => {
              let { invitees: t, role: n } = r
              er() &&
                (e4((r) => [...r.filter((r) => r.request_id !== e.request_id || r.created_at !== e.created_at), e]),
                e6((e) => ({ ...e, [n]: new Set([...e[n], ...t.flatMap(eN)]) })),
                e0((e) => e.filter((e) => !t.some((r) => r.id === e.id))),
                (0, F.aS)(es, V, {
                  action: "CHATGPT_FILE_LIBRARY_SHARING_ACTION_REQUEST_ACCESS",
                  outcome: "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_SUCCEEDED",
                  operationId: i,
                  recipientCount: t.length,
                  recipientKind: (0, F.r6)(t.map(eM)),
                  succeededRecipientCount: t.length,
                  role: (0, F.qT)(n),
                }),
                es
                  .get(w.Id)
                  .success(
                    (0, a.jsx)(p.A, {
                      id: "librarySharing.request.sent",
                      defaultMessage: "Request sent to the owner",
                      description: "Success toast after a Library reader asks the owner to grant other people access",
                    }),
                  ),
                await D(el, et))
            }),
            (W[39] = V),
            (W[40] = er),
            (W[41] = el),
            (W[42] = es),
            (W[43] = et),
            (W[44] = N))
          : (N = W[44]),
        W[45] !== V || W[46] !== er || W[47] !== es
          ? ((G = (e, r, i) => {
              let { invitees: t, role: n } = r
              er() &&
                ((0, F.aS)(es, V, {
                  action: "CHATGPT_FILE_LIBRARY_SHARING_ACTION_REQUEST_ACCESS",
                  outcome: "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_FAILED",
                  operationId: i,
                  recipientCount: t.length,
                  recipientKind: (0, F.r6)(t.map(ej)),
                  failedRecipientCount: t.length,
                  role: (0, F.qT)(n),
                  error: (0, F.GE)(e),
                }),
                es
                  .get(w.Id)
                  .danger(
                    (0, a.jsx)(p.A, {
                      id: "librarySharing.request.failed",
                      defaultMessage: "Couldn't send the access request. Try again",
                      description:
                        "Error toast after submitting a Library access request fails; selected recipients remain available to retry",
                    }),
                    { errorAnalytics: { toastId: "librarySharing.request.failed" } },
                  ))
            }),
            (W[45] = V),
            (W[46] = er),
            (W[47] = es),
            (W[48] = G))
          : (G = W[48]),
        W[49] !== E || W[50] !== L || W[51] !== k || W[52] !== N || W[53] !== G
          ? ((K = {
              mutationKey: E,
              networkMode: "always",
              retry: !1,
              mutationFn: L,
              onMutate: k,
              onSuccess: N,
              onError: G,
            }),
            (W[49] = E),
            (W[50] = L),
            (W[51] = k),
            (W[52] = N),
            (W[53] = G),
            (W[54] = K))
          : (K = W[54]))
      let { mutate: ri, isPending: ra } = (0, M.n)(K),
        rt = ee || ra || ew || eW || !e_ || !eE || eV?.complete !== !0,
        rn = !rt && eJ.length > 0 && eJ.every(ek) && !rr,
        rs = new Map()
      for (let e of e7)
        for (let r of e.recipients) {
          let i = (0, P.d7)({ request: e, recipient: r }),
            a = rs.get(i)
          ;(null == a || "pending" === (0, P.SK)(a.request, r)) && rs.set(i, { request: e, recipient: r })
        }
      let rl = [...rs].filter((e) => {
          let [, r] = e,
            { recipient: i } = r
          return !eV?.collaborators.some((e) => {
            let { principal: r } = e
            return (0, P.nD)(r) === (0, P.nD)(i)
          })
        }),
        ro = eV?.collaborators.filter((e) => {
          let { principal: r } = e
          return (
            (0, P.nD)(r) !== (0, P.nD)(en.owner.principal) &&
            (0, P.nD)(r) !== (0, P.nD)(en.viewer.principal) &&
            !ei?.collaborators.some((e) => (0, P.nD)(e.principal) === (0, P.nD)(r))
          )
        })
      ;(W[55] !== rn || W[56] !== rt || W[57] !== er || W[58] !== ri || W[59] !== eX || W[60] !== eJ
        ? ((H = () => {
            er() && !rt && rn && (e2(""), ri({ invitees: eJ, role: eX }))
          }),
          (W[55] = rn),
          (W[56] = rt),
          (W[57] = er),
          (W[58] = ri),
          (W[59] = eX),
          (W[60] = eJ),
          (W[61] = H))
        : (H = W[61]),
        W[62] !== rn || W[63] !== e_ || W[64] !== ra
          ? ((U = e_
              ? (0, a.jsx)(s.$, {
                  type: "submit",
                  color: "primary",
                  size: "xl",
                  disabled: !rn,
                  loading: ra,
                  children: (0, a.jsx)(p.A, {
                    id: "librarySharing.requestInvite",
                    defaultMessage: "Invite",
                    description:
                      "Button asking a Library item's owner to grant selected people access; it does not grant permission immediately",
                  }),
                })
              : null),
            (W[62] = rn),
            (W[63] = e_),
            (W[64] = ra),
            (W[65] = U))
          : (U = W[65]))
      let rc = e_
          ? (0, a.jsxs)(y.OO, {
              className: "gap-4",
              children: [
                (0, a.jsx)(_.l, {
                  variant: "privacyNotice",
                  title: (0, a.jsx)(p.A, {
                    id: "librarySharing.request.approvalRequired",
                    defaultMessage: "Owner must approve invites first",
                    description: "Banner explaining that invitations require the Library owner's approval",
                  }),
                  content:
                    "viewer" === (0, P.rP)(en.viewer.role_id, et.resourceKind)
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
                  accountId: et.accountId,
                  currentPrincipalId: et.accountUserId,
                  currentEmail: en.viewer.email ?? void 0,
                  ...eh,
                  disabled: rt,
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
        rd =
          (e_ && (eb || (eq.length > 0 && (e$ || (eQ && eV?.complete !== !0))))) || (ec && Z && ep)
            ? (0, a.jsx)(y.OO, {
                children: (0, a.jsx)(_.l, {
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
                    er() &&
                      (D(el, et), ec && el.invalidateQueries({ queryKey: ["accounts", "settings", et.accountId] }))
                  },
                }),
              })
            : null
      W[66] !== ee ||
      W[67] !== eI ||
      W[68] !== eS ||
      W[69] !== ex ||
      W[70] !== eE ||
      W[71] !== ew ||
      W[72] !== er ||
      W[73] !== eA
        ? ((B =
            null == eS || eE
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
                      disabled: ee || ew,
                      loading: ew,
                      onClick: () => {
                        er() && (ex ? eI() : eA())
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
          (W[66] = ee),
          (W[67] = eI),
          (W[68] = eS),
          (W[69] = ex),
          (W[70] = eE),
          (W[71] = ew),
          (W[72] = er),
          (W[73] = eA),
          (W[74] = B))
        : (B = W[74])
      let ru = S.p,
        rp =
          null != eS
            ? ro?.map((e) =>
                (0, a.jsx)(
                  A.h,
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
                      children: (0, a.jsx)(T.u, { permission: (0, P.rP)(e.role_id, et.resourceKind) }),
                    }),
                  },
                  (0, P.nD)(e.principal),
                ),
              )
            : null,
        rh =
          null != eS
            ? rl.map((e) => {
                let [r, i] = e,
                  { request: t, recipient: n } = i,
                  s = eL.get((0, P.nD)(n))
                return (0, a.jsx)(
                  A.h,
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
                            values: { status: (0, P.SK)(t, n) },
                          }),
                        }),
                        (0, a.jsx)("span", {
                          className: "pe-2 text-sm text-tertiary",
                          children: (0, a.jsx)(T.u, { permission: (0, P.rP)(t.requested_role_id, et.resourceKind) }),
                        }),
                      ],
                    }),
                  },
                  r,
                )
              })
            : null
      return (
        W[75] !== ru || W[76] !== J || W[77] !== rp || W[78] !== rh
          ? ((Y = (0, a.jsxs)(ru, { children: [J, rp, rh] })),
            (W[75] = ru),
            (W[76] = J),
            (W[77] = rp),
            (W[78] = rh),
            (W[79] = Y))
          : (Y = W[79]),
        W[80] !== rd || W[81] !== B || W[82] !== Y
          ? ((z = (0, a.jsxs)(a.Fragment, { children: [rd, B, Y] })),
            (W[80] = rd),
            (W[81] = B),
            (W[82] = Y),
            (W[83] = z))
          : (z = W[83]),
        W[84] !== ra || W[85] !== ea || W[86] !== H || W[87] !== U || W[88] !== rc || W[89] !== z
          ? (($ = ea({ isPending: ra, onSubmit: H, footer: U, headerContent: rc, content: z })),
            (W[84] = ra),
            (W[85] = ea),
            (W[86] = H),
            (W[87] = U),
            (W[88] = rc),
            (W[89] = z),
            (W[90] = $))
          : ($ = W[90]),
        $
      )
    }
    function ek(e) {
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
    function eP(e) {
      let { recipient: r } = e
      return r
    }
    function eD(e) {
      return null == e ? [] : [e.trim().toLowerCase()]
    }
    function eO(e) {
      let { email: r } = e
      return r
    }
    function eG(e) {
      let { principal: r } = e
      return (0, P.nD)(r)
    }
    function eK() {
      return { viewer: new Set(), editor: new Set() }
    }
    function eH(e) {
      let { principal: r } = e
      return "group" === r.principal_type
    }
    function eU(e) {
      return e.principal_identities.map(eB)
    }
    function eB(e) {
      return [(0, P.nD)(e.principal), e]
    }
    function eY(e) {
      return e.requests
    }
    function ez(e, r, i, a) {
      return null == e.next_cursor || a.includes(e.next_cursor) ? void 0 : e.next_cursor
    }
    var e$ = i("URpD"),
      eW = i("t2SL"),
      eQ = i("jqgw")
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
          libraryFileId: f,
          resourceKind: b,
          sharedDirectoryId: w,
          shareSessionId: v,
          showOrganizationSharing: x,
          onClose: I,
        } = e,
        A = void 0 === x || x,
        { data: S, isLoading: R, isError: L, refetch: C } = (0, g.oV)()
      if (
        d[0] !== u ||
        d[1] !== S?.accounts ||
        d[2] !== m ||
        d[3] !== L ||
        d[4] !== R ||
        d[5] !== f ||
        d[6] !== I ||
        d[7] !== C ||
        d[8] !== b
      ) {
        o = Symbol.for("react.early_return_sentinel")
        e: {
          if (null == (i = S?.accounts?.find((e) => e.id === u)) || L) {
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
              d[17] !== I
                ? ((i = (0, a.jsx)(s.$, { size: "xl", type: "button", color: "secondary", onClick: I, children: r })),
                  (d[17] = I),
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
                    children: (0, a.jsx)(_.l, {
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
            libraryFileId: f,
            resourceKind: b,
          }),
            (r = eX),
            (l = JSON.stringify((0, P.X1)(n, "state"))))
        }
        ;((d[0] = u),
          (d[1] = S?.accounts),
          (d[2] = m),
          (d[3] = L),
          (d[4] = R),
          (d[5] = f),
          (d[6] = I),
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
          d[32] !== I ||
          d[33] !== v ||
          d[34] !== w ||
          d[35] !== n ||
          d[36] !== A ||
          d[37] !== l
            ? ((c = (0, a.jsx)(
                r,
                {
                  account: i,
                  authenticatedUserId: h,
                  fileName: m,
                  sharingScope: n,
                  sharedDirectoryId: w,
                  shareSessionId: v,
                  showOrganizationSharing: A,
                  onClose: I,
                },
                l,
              )),
              (d[28] = r),
              (d[29] = i),
              (d[30] = h),
              (d[31] = m),
              (d[32] = I),
              (d[33] = v),
              (d[34] = w),
              (d[35] = n),
              (d[36] = A),
              (d[37] = l),
              (d[38] = c))
            : (c = d[38]),
          c)
    }
    function eX(e) {
      let r,
        i,
        f,
        g,
        q,
        k,
        j,
        M,
        N,
        D,
        K,
        H,
        U,
        B,
        Y,
        z,
        Q,
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
        e_,
        ey,
        eb,
        ew,
        ev,
        ex = (0, t.c)(264),
        {
          account: eI,
          authenticatedUserId: eA,
          fileName: eR,
          sharingScope: eE,
          sharedDirectoryId: eL,
          shareSessionId: eC,
          showOrganizationSharing: eT,
          onClose: ek,
        } = e,
        ej = (0, d.gh)(x.u),
        eM = (0, l.jE)()
      ex[0] !== eM || ex[1] !== eE
        ? ((r = () =>
            new Set(
              eM
                .getQueryCache()
                .findAll({ queryKey: (0, P.X1)(eE) })
                .filter(e4)
                .map(e3),
            )),
          (ex[0] = eM),
          (ex[1] = eE),
          (ex[2] = r))
        : (r = ex[2])
      let [eN] = (0, u.useState)(r),
        eF = "workspace" === eI.structure
      ex[3] !== eF ? ((i = { enabled: eF }), (ex[3] = eF), (ex[4] = i)) : (i = ex[4])
      let { data: eP, isError: eD } = (0, d._U)(h.Jk, eE.accountId, i)
      ex[5] !== eI || ex[6] !== eP || ex[7] !== eD
        ? ((f = (0, C.V)(eI, eP, eD)), (ex[5] = eI), (ex[6] = eP), (ex[7] = eD), (ex[8] = f))
        : (f = ex[8])
      let { canSearchMembers: eO } = f,
        eG = (0, d.Ul)(W.Sz)
      ex[9] !== eA || ex[10] !== ej || ex[11] !== eE.accountId
        ? ((g = () => (0, e$.d)(ej, eE.accountId, eA) && ej.get(W.Ym)),
          (ex[9] = eA),
          (ex[10] = ej),
          (ex[11] = eE.accountId),
          (ex[12] = g))
        : (g = ex[12])
      let eK = g,
        eH = (0, u.useRef)(0),
        [eU, eB] = (0, u.useState)(0)
      ex[13] === Symbol.for("react.memo_cache_sentinel") ? ((q = new Map()), (ex[13] = q)) : (q = ex[13])
      let [eY, ez] = (0, u.useState)(q)
      ex[14] !== eK
        ? ((k = () => {
            if (!eK()) throw Error("Library sharing session changed")
          }),
          (ex[14] = eK),
          (ex[15] = k))
        : (k = ex[15])
      let eV = (0, $.m)({ scope: eE, assertCurrentScope: k }),
        eX = (0, O.O)(eE, eV).state,
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
      ex[16] !== eN || ex[17] !== e2 || ex[18] !== e6 || ex[19] !== e9 || ex[20] !== e8
        ? ((j = (e8 || eN.has("state")) && "paused" !== e9 && !e6 ? e2 : void 0),
          (ex[16] = eN),
          (ex[17] = e2),
          (ex[18] = e6),
          (ex[19] = e9),
          (ex[20] = e8),
          (ex[21] = j))
        : (j = ex[21])
      let rr = j,
        ri = (0, O.O)(eE, eV, rr),
        ra = rr?.owner.principal.principal_id === eE.accountUserId
      ex[22] !== ra || ex[23] !== eG || ex[24] !== eE || ex[25] !== rr
        ? ((M =
            eG &&
            (ra ||
              (0, P.Fp)({ sharingState: rr, scope: eE, legacyOwner: void 0, managementAvailable: eG })
                .canManageAccess)),
          (ex[22] = ra),
          (ex[23] = eG),
          (ex[24] = eE),
          (ex[25] = rr),
          (ex[26] = M))
        : (M = ex[26])
      let rt = M,
        rn = null != rr && rt
      ;(ex[27] !== eV || ex[28] !== eK || ex[29] !== ri.shares.queryFn || ex[30] !== rr
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
          (ex[27] = eV),
          (ex[28] = eK),
          (ex[29] = ri.shares.queryFn),
          (ex[30] = rr),
          (ex[31] = N))
        : (N = ex[31]),
        ex[32] !== ri.shares || ex[33] !== rn || ex[34] !== N
          ? ((D = { enabled: rn, ...ri.shares, staleTime: ri.shares.staleTime, queryFn: N }),
            (ex[32] = ri.shares),
            (ex[33] = rn),
            (ex[34] = N),
            (ex[35] = D))
          : (D = ex[35]))
      let { data: rs, isError: rl, isFetching: ro, isFetchedAfterMount: rc, fetchStatus: rd } = (0, o.I)(D)
      ex[36] !== eN || ex[37] !== rs || ex[38] !== rl || ex[39] !== rd || ex[40] !== rc || ex[41] !== rr
        ? ((K =
            (rc || eN.has("shares")) &&
            "paused" !== rd &&
            !rl &&
            rs?.owner.principal_id === rr?.owner.principal.principal_id
              ? rs
              : void 0),
          (ex[36] = eN),
          (ex[37] = rs),
          (ex[38] = rl),
          (ex[39] = rd),
          (ex[40] = rc),
          (ex[41] = rr),
          (ex[42] = K))
        : (K = ex[42])
      let ru = K,
        rp = ru?.owner
      ex[43] !== eG || ex[44] !== eE || ex[45] !== rr || ex[46] !== rp
        ? ((H = (0, P.Fp)({ sharingState: rr, scope: eE, legacyOwner: rp, managementAvailable: eG })),
          (ex[43] = eG),
          (ex[44] = eE),
          (ex[45] = rr),
          (ex[46] = rp),
          (ex[47] = H))
        : (H = ex[47])
      let { canInvite: rh, canManageAccess: rm } = H
      ex[48] !== rm || ex[49] !== ri.effectiveAccess
        ? ((U = { enabled: rm, ...ri.effectiveAccess, staleTime: ri.effectiveAccess.staleTime }),
          (ex[48] = rm),
          (ex[49] = ri.effectiveAccess),
          (ex[50] = U))
        : (U = ex[50])
      let { data: rf, isError: rg, error: r_, isFetching: ry, isFetchedAfterMount: rb, fetchStatus: rw } = (0, o.I)(U),
        rv = null != rr && !rt
      ex[51] !== ri.collaborators || ex[52] !== rv
        ? ((B = { enabled: rv, ...ri.collaborators, staleTime: ri.collaborators.staleTime }),
          (ex[51] = ri.collaborators),
          (ex[52] = rv),
          (ex[53] = B))
        : (B = ex[53])
      let { data: rx, isError: rI, error: rA, isFetching: rS, isFetchedAfterMount: rR, fetchStatus: rE } = (0, o.I)(B)
      ex[54] !== eN || ex[55] !== rx || ex[56] !== rI || ex[57] !== rE || ex[58] !== rR || ex[59] !== rr
        ? ((Y =
            !rI &&
            (rR || eN.has("collaborators")) &&
            "paused" !== rE &&
            rx?.owner.principal_id === rr?.owner.principal.principal_id),
          (ex[54] = eN),
          (ex[55] = rx),
          (ex[56] = rI),
          (ex[57] = rE),
          (ex[58] = rR),
          (ex[59] = rr),
          (ex[60] = Y))
        : (Y = ex[60])
      let rL = Y,
        rC = rL ? rx?.collaborators : void 0,
        rT = rr?.viewer.role_id ?? ""
      ex[61] !== eE.resourceKind || ex[62] !== rT
        ? ((z = (0, P.rP)(rT, eE.resourceKind)), (ex[61] = eE.resourceKind), (ex[62] = rT), (ex[63] = z))
        : (z = ex[63])
      let rq = z
      ex[64] !== eE.accountUserId || ex[65] !== eE.resourceKind || ex[66] !== rq || ex[67] !== rC
        ? ((Q =
            "viewer" === rq &&
            rC?.some((e) => {
              let { principal: r, role_id: i } = e
              return (
                "user" === r.principal_type &&
                r.principal_id === eE.accountUserId &&
                "commenter" === (0, P.rP)(i, eE.resourceKind)
              )
            })
              ? "commenter"
              : rq),
          (ex[64] = eE.accountUserId),
          (ex[65] = eE.resourceKind),
          (ex[66] = rq),
          (ex[67] = rC),
          (ex[68] = Q))
        : (Q = ex[68])
      let rk = Q
      ex[69] !== rf || ex[70] !== rg || ex[71] !== rw || ex[72] !== rb || ex[73] !== eN || ex[74] !== rr
        ? ((V =
            (rb || eN.has("effective-access")) &&
            "paused" !== rw &&
            !rg &&
            rf?.owner.principal_id === rr?.owner.principal.principal_id
              ? rf
              : void 0),
          (ex[69] = rf),
          (ex[70] = rg),
          (ex[71] = rw),
          (ex[72] = rb),
          (ex[73] = eN),
          (ex[74] = rr),
          (ex[75] = V))
        : (V = ex[75])
      let rj = V,
        [rM, rN] = (0, u.useState)(!1),
        [rF, rP] = (0, u.useState)(!1)
      ex[76] === Symbol.for("react.memo_cache_sentinel")
        ? ((X = (e, r) => {
            ez((i) => {
              let a = new Map(i)
              return (null == r ? a.delete(e) : a.set(e, r), a)
            })
          }),
          (ex[76] = X))
        : (X = ex[76])
      let rD = X
      ;(ex[77] !== eE ? ((Z = (0, P.X1)(eE, "state")), (ex[77] = eE), (ex[78] = Z)) : (Z = ex[78]),
        ex[79] !== Z ? ((J = { mutationKey: Z }), (ex[79] = Z), (ex[80] = J)) : (J = ex[80]))
      let rO = (0, c.l)(J),
        rG = rm && null != ru && null != rj && (rF || (!e7 && !ro && !ry)),
        rK = rG && rj?.complete === !0
      ex[81] !== eE.accountUserId || ex[82] !== rj?.collaborators || ex[83] !== rj?.collaborators.find
        ? ((er = rj?.collaborators.find((e) => {
            let { principal: r } = e
            return "user" === r.principal_type && r.principal_id === eE.accountUserId
          })),
          (ex[81] = eE.accountUserId),
          (ex[82] = rj?.collaborators),
          (ex[83] = rj?.collaborators.find),
          (ex[84] = er))
        : (er = ex[84])
      let rH = er
      ex[85] !== rH ||
      ex[86] !== ry ||
      ex[87] !== rF ||
      ex[88] !== eE.resourceKind ||
      ex[89] !== rr?.workspace_invitation_id ||
      ex[90] !== rj?.complete
        ? ((ei =
            (rF || !ry) &&
            rj?.complete === !0 &&
            null != rH &&
            (rH.direct_role_id === P.F2[eE.resourceKind].editor ||
              [rH.source, rH.group_source].some(
                (e) =>
                  null != e &&
                  e.invitation_id !== rr?.workspace_invitation_id &&
                  ("user" === e.principal.principal_type || "group" === e.principal.principal_type) &&
                  (("library_file" === e.resource.resource_type && e.role_id === P.F2.file.editor) ||
                    ("library_folder" === e.resource.resource_type && e.role_id === P.F2.folder.editor)),
              ))),
          (ex[85] = rH),
          (ex[86] = ry),
          (ex[87] = rF),
          (ex[88] = eE.resourceKind),
          (ex[89] = rr?.workspace_invitation_id),
          (ex[90] = rj?.complete),
          (ex[91] = ei))
        : (ei = ex[91])
      let rU = ei,
        rB = rO > 0 || rM || rF,
        rY = rB || e7 || ro || ry || rS
      if (
        ex[92] !== rh ||
        ex[93] !== rt ||
        ex[94] !== rK ||
        ex[95] !== eY ||
        ex[96] !== rf ||
        ex[97] !== ru ||
        ex[98] !== rr
      ) {
        let e = null == rr ? void 0 : (0, ef.Hd)(rr, ru, rf)
        ;((ea =
          !rt ||
          [...eY.values()].some(
            (r) =>
              "invite" === r.kind &&
              (!rh ||
                !rK ||
                null == e ||
                r.invitees.some(e0) ||
                (0, ef.Go)(r.invitees, e.existingEmails, e.existingPrincipalKeys)),
          )),
          (ex[92] = rh),
          (ex[93] = rt),
          (ex[94] = rK),
          (ex[95] = eY),
          (ex[96] = rf),
          (ex[97] = ru),
          (ex[98] = rr),
          (ex[99] = ea))
      } else ea = ex[99]
      let rz = ea
      ex[100] !== rY || ex[101] !== eY || ex[102] !== rz || ex[103] !== eK
        ? ((et = function () {
            if (!eK() || rY || rz || 0 === eY.size) return
            rP(!0)
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
            ).finally(() => rP(!1))
          }),
          (ex[100] = rY),
          (ex[101] = eY),
          (ex[102] = rz),
          (ex[103] = eK),
          (ex[104] = et))
        : (et = ex[104])
      let r$ = et,
        rW = null == rr ? void 0 : ra
      ex[105] !== eC || ex[106] !== eE || ex[107] !== rW
        ? ((en = { sharingScope: eE, shareSessionId: eC, isOwner: rW }),
          (ex[105] = eC),
          (ex[106] = eE),
          (ex[107] = rW),
          (ex[108] = en))
        : (en = ex[108])
      let rQ = en,
        rV = (0, u.useRef)(null),
        rX = null != rr
      ex[109] !== rQ || ex[110] !== eK || ex[111] !== ej
        ? ((es = () => {
            null == rV.current &&
              eK() &&
              ((rV.current = rQ), (0, F.aS)(ej, rQ, { action: "CHATGPT_FILE_LIBRARY_SHARING_ACTION_DIALOG_OPENED" }))
          }),
          (ex[109] = rQ),
          (ex[110] = eK),
          (ex[111] = ej),
          (ex[112] = es))
        : (es = ex[112])
      let rZ = (0, u.useEffectEvent)(es)
      ;(ex[113] !== rZ || ex[114] !== rX
        ? ((el = () => {
            rX && rZ()
          }),
          (ex[113] = rZ),
          (ex[114] = rX),
          (ex[115] = el))
        : (el = ex[115]),
        ex[116] !== rX ? ((eo = [rX]), (ex[116] = rX), (ex[117] = eo)) : (eo = ex[117]),
        (0, u.useEffect)(el, eo),
        ex[118] !== ej
          ? ((ec = () => () => {
              null != rV.current &&
                (0, F.aS)(ej, rV.current, { action: "CHATGPT_FILE_LIBRARY_SHARING_ACTION_DIALOG_CLOSED" })
            }),
            (ed = [ej]),
            (ex[118] = ej),
            (ex[119] = ec),
            (ex[120] = ed))
          : ((ec = ex[119]), (ed = ex[120])),
        (0, u.useEffect)(ec, ed),
        ex[121] !== rQ ||
        ex[122] !== rY ||
        ex[123] !== eK ||
        ex[124] !== eF ||
        ex[125] !== ej ||
        ex[126] !== eL ||
        ex[127] !== eE.accountId ||
        ex[128] !== eE.libraryFileId ||
        ex[129] !== eE.resourceKind ||
        ex[130] !== rr ||
        ex[131] !== rq
          ? ((eu = async function () {
              if (!eK() || null == rr || rY) return
              rN(!0)
              let e = crypto.randomUUID(),
                r = (0, F.qT)(rq)
              ;(0, F.aS)(ej, rQ, {
                action: "CHATGPT_FILE_LIBRARY_SHARING_ACTION_COPY_LINK",
                outcome: "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_STARTED",
                operationId: e,
                role: r,
              })
              let i = (0, eW.Rg)({
                libraryFileId: eE.libraryFileId,
                origin: (0, eQ.F)(),
                resourceKind: eE.resourceKind,
                sharedDirectoryId: eL,
                workspaceId: eF ? eE.accountId : void 0,
              })
              await Promise.resolve(v.appServices.clipboard.writeText(i.href))
                .then(() => {
                  eK() &&
                    ((0, F.aS)(ej, rQ, {
                      action: "CHATGPT_FILE_LIBRARY_SHARING_ACTION_COPY_LINK",
                      outcome: "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_SUCCEEDED",
                      operationId: e,
                      role: r,
                    }),
                    (0, I.o)(ej))
                })
                .catch((i) => {
                  eK() &&
                    ((0, F.aS)(ej, rQ, {
                      action: "CHATGPT_FILE_LIBRARY_SHARING_ACTION_COPY_LINK",
                      outcome: "CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_FAILED",
                      operationId: e,
                      role: r,
                      error: (0, F.GE)(i),
                    }),
                    ej
                      .get(w.Id)
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
            (ex[121] = rQ),
            (ex[122] = rY),
            (ex[123] = eK),
            (ex[124] = eF),
            (ex[125] = ej),
            (ex[126] = eL),
            (ex[127] = eE.accountId),
            (ex[128] = eE.libraryFileId),
            (ex[129] = eE.resourceKind),
            (ex[130] = rr),
            (ex[131] = rq),
            (ex[132] = eu))
          : (eu = ex[132]))
      let rJ = eu
      ex[133] !== rt ||
      ex[134] !== rf?.complete ||
      ex[135] !== rg ||
      ex[136] !== r_ ||
      ex[137] !== rb ||
      ex[138] !== rL ||
      ex[139] !== ra ||
      ex[140] !== rx?.complete ||
      ex[141] !== rI ||
      ex[142] !== rA ||
      ex[143] !== rR ||
      ex[144] !== rl
        ? ((ep = rt
            ? rl || (rg && !(ra && e5(r_))) || (rb && rf?.complete === !1)
            : !e5(rA) && (rI || (rR && (!rL || rx?.complete === !1)))),
          (ex[133] = rt),
          (ex[134] = rf?.complete),
          (ex[135] = rg),
          (ex[136] = r_),
          (ex[137] = rb),
          (ex[138] = rL),
          (ex[139] = ra),
          (ex[140] = rx?.complete),
          (ex[141] = rI),
          (ex[142] = rA),
          (ex[143] = rR),
          (ex[144] = rl),
          (ex[145] = ep))
        : (ep = ex[145])
      let r0 = ep,
        r1 = rt ? (null == ru && ro) || (null == rj && ry) : !rL && rS
      if (
        ex[146] !== r1 ||
        ex[147] !== rQ ||
        ex[148] !== eV ||
        ex[149] !== rh ||
        ex[150] !== rt ||
        ex[151] !== rG ||
        ex[152] !== rK ||
        ex[153] !== rY ||
        ex[154] !== eK ||
        ex[155] !== ra ||
        ex[156] !== ru ||
        ex[157] !== eE ||
        ex[158] !== rr ||
        ex[159] !== eT ||
        ex[160] !== rk ||
        ex[161] !== rj ||
        ex[162] !== rC
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
          ;(ex[164] !== rr.owner.avatar_url || ex[165] !== rr.owner.principal.principal_id || ex[166] !== c
            ? ((e = (0, a.jsx)(m.T, {
                size: "group",
                avatarUrl: rr.owner.avatar_url,
                colorKey: rr.owner.principal.principal_id,
                name: c,
              })),
              (ex[164] = rr.owner.avatar_url),
              (ex[165] = rr.owner.principal.principal_id),
              (ex[166] = c),
              (ex[167] = e))
            : (e = ex[167]),
            ex[168] !== rr.owner.display_name || ex[169] !== rr.owner.email
              ? ((r =
                  rr.owner.display_name ??
                  rr.owner.email ??
                  (0, a.jsx)(p.A, {
                    id: "librarySharing.ownerFallback",
                    defaultMessage: "Owner",
                    description: "Fallback display name for the owner of a shared Library file or folder",
                  })),
                (ex[168] = rr.owner.display_name),
                (ex[169] = rr.owner.email),
                (ex[170] = r))
              : (r = ex[170]),
            ex[171] === Symbol.for("react.memo_cache_sentinel")
              ? ((i = (0, a.jsx)("span", {
                  className: "pe-2 text-sm text-tertiary",
                  children: (0, a.jsx)(p.A, {
                    id: "librarySharing.owner",
                    defaultMessage: "Owner",
                    description: "Role label for the owner of a file or folder in the Library sharing dialog",
                  }),
                })),
                (ex[171] = i))
              : (i = ex[171]),
            ex[172] !== rr.owner.email || ex[173] !== e || ex[174] !== r
              ? ((t = (0, a.jsx)(A.h, { avatar: e, label: r, secondaryLabel: rr.owner.email, trailingContent: i })),
                (ex[172] = rr.owner.email),
                (ex[173] = e),
                (ex[174] = r),
                (ex[175] = t))
              : (t = ex[175]),
            ex[176] !== r1 || ex[177] !== eT
              ? ((s = r1 && !eT ? (0, a.jsx)(L.Az, {}) : null), (ex[176] = r1), (ex[177] = eT), (ex[178] = s))
              : (s = ex[178]),
            ex[179] !== r1 ||
            ex[180] !== rQ ||
            ex[181] !== eV ||
            ex[182] !== rh ||
            ex[183] !== rt ||
            ex[184] !== rG ||
            ex[185] !== rK ||
            ex[186] !== rY ||
            ex[187] !== eK ||
            ex[188] !== ru ||
            ex[189] !== eE ||
            ex[190] !== rj
              ? ((l =
                  !r1 && rt && null != ru
                    ? (0, a.jsx)(ee, {
                        api: eV,
                        sharingScope: eE,
                        analytics: rQ,
                        shares: ru,
                        effectiveAccess: rj,
                        allowedRoles: (0, P.q4)(ru.allowed_roles, eE.resourceKind),
                        canChange: rh && rK,
                        canRemove: rG,
                        canRemoveEffective: rK,
                        disabled: rY,
                        isCurrentSession: eK,
                        onStageChange: rD,
                      })
                    : null),
                (ex[179] = r1),
                (ex[180] = rQ),
                (ex[181] = eV),
                (ex[182] = rh),
                (ex[183] = rt),
                (ex[184] = rG),
                (ex[185] = rK),
                (ex[186] = rY),
                (ex[187] = eK),
                (ex[188] = ru),
                (ex[189] = eE),
                (ex[190] = rj),
                (ex[191] = l))
              : (l = ex[191]),
            ex[192] !== r1 ||
            ex[193] !== rt ||
            ex[194] !== ra ||
            ex[195] !== eE.accountUserId ||
            ex[196] !== eE.resourceKind ||
            ex[197] !== rr.owner.principal.principal_id ||
            ex[198] !== rr.viewer ||
            ex[199] !== rk ||
            ex[200] !== rC
              ? ((o =
                  r1 || rt
                    ? null
                    : (0, a.jsxs)(a.Fragment, {
                        children: [
                          ra
                            ? null
                            : (0, a.jsx)(A.h, {
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
                                  children: (0, a.jsx)(T.u, { permission: rk }),
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
                                A.h,
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
                                    children: (0, a.jsx)(T.u, { permission: (0, P.rP)(e.role_id, eE.resourceKind) }),
                                  }),
                                },
                                (0, P.nD)(e.principal),
                              ),
                            ),
                        ],
                      })),
                (ex[192] = r1),
                (ex[193] = rt),
                (ex[194] = ra),
                (ex[195] = eE.accountUserId),
                (ex[196] = eE.resourceKind),
                (ex[197] = rr.owner.principal.principal_id),
                (ex[198] = rr.viewer),
                (ex[199] = rk),
                (ex[200] = rC),
                (ex[201] = o))
              : (o = ex[201]),
            (eh = (0, a.jsxs)(a.Fragment, { children: [t, s, l, o] })))
        }
        ;((ex[146] = r1),
          (ex[147] = rQ),
          (ex[148] = eV),
          (ex[149] = rh),
          (ex[150] = rt),
          (ex[151] = rG),
          (ex[152] = rK),
          (ex[153] = rY),
          (ex[154] = eK),
          (ex[155] = ra),
          (ex[156] = ru),
          (ex[157] = eE),
          (ex[158] = rr),
          (ex[159] = eT),
          (ex[160] = rk),
          (ex[161] = rj),
          (ex[162] = rC),
          (ex[163] = eh))
      } else eh = ex[163]
      let r2 = null == rr || rY
      ;(ex[202] !== rJ
        ? ((em = () => {
            rJ()
          }),
          (ex[202] = rJ),
          (ex[203] = em))
        : (em = ex[203]),
        ex[204] === Symbol.for("react.memo_cache_sentinel")
          ? ((e_ = (0, a.jsx)(b.ibM, {})),
            (ey = (0, a.jsx)(p.A, {
              id: "librarySharing.copy",
              defaultMessage: "Copy link",
              description: "Button copying the canonical ChatGPT Library sharing link to this file or folder",
            })),
            (ex[204] = e_),
            (ex[205] = ey))
          : ((e_ = ex[204]), (ey = ex[205])),
        ex[206] !== rM || ex[207] !== r2 || ex[208] !== em
          ? ((eb = (0, a.jsxs)(s.$, {
              size: "xl",
              type: "button",
              color: "secondary",
              variant: "outline",
              disabled: r2,
              loading: rM,
              onClick: em,
              children: [e_, ey],
            })),
            (ex[206] = rM),
            (ex[207] = r2),
            (ex[208] = em),
            (ex[209] = eb))
          : (eb = ex[209]))
      let r3 = eb
      ex[210] !== eh ||
      ex[211] !== r1 ||
      ex[212] !== eI ||
      ex[213] !== rQ ||
      ex[214] !== eV ||
      ex[215] !== rh ||
      ex[216] !== rm ||
      ex[217] !== rt ||
      ex[218] !== rK ||
      ex[219] !== eO ||
      ex[220] !== r3 ||
      ex[221] !== rY ||
      ex[222] !== eY ||
      ex[223] !== eU ||
      ex[224] !== rz ||
      ex[225] !== ry ||
      ex[226] !== eR ||
      ex[227] !== r0 ||
      ex[228] !== rU ||
      ex[229] !== rB ||
      ex[230] !== eK ||
      ex[231] !== ra ||
      ex[232] !== eF ||
      ex[233] !== eG ||
      ex[234] !== ek ||
      ex[235] !== eM ||
      ex[236] !== re ||
      ex[237] !== r$ ||
      ex[238] !== rF ||
      ex[239] !== ru ||
      ex[240] !== ro ||
      ex[241] !== eE ||
      ex[242] !== rr ||
      ex[243] !== eT ||
      ex[244] !== e6 ||
      ex[245] !== e7 ||
      ex[246] !== rj
        ? ((ew = (e) =>
            (0, a.jsx)(E.$t, {
              isLoading: !e6 && null == rr,
              title:
                rt || ra || (eF && !eO) || rr?.capabilities?.can_request_access !== !0
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
                      eg,
                      {
                        account: eI,
                        api: eV,
                        sharingScope: eE,
                        sharingState: rr,
                        shares: ru,
                        effectiveAccess: rj,
                        analytics: rQ,
                        canInvite: rK,
                        disabled: rY,
                        isCurrentSession: eK,
                        onStageChange: rD,
                      },
                      eU,
                    ),
              isDismissalDisabled: rB || e?.isPending === !0,
              onSubmit: rt ? r$ : e?.onSubmit,
              footer:
                null == rr || rt || ra || 0 !== eY.size
                  ? (0, a.jsx)(R.r, {
                      onCancel: () => {
                        ;(ez(new Map()), eB(eJ))
                      },
                      onClose: ek,
                      isBusy: rB,
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
                                children: (0, a.jsx)(_.l, {
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
                                    eM.invalidateQueries({ queryKey: (0, P.X1)(eE) })
                                  },
                                }),
                              })
                            : null,
                          eT
                            ? (0, a.jsx)(a.Fragment, {
                                children: r1
                                  ? (0, a.jsx)(S.p, { kind: "link", children: (0, a.jsx)(L.gE, {}) })
                                  : (0, a.jsx)(eS, {
                                      allowedRoles: null == ru ? void 0 : (0, P.q4)(ru.allowed_roles, eE.resourceKind),
                                      analytics: rQ,
                                      api: eV,
                                      canInitiateSharing: rh,
                                      canManage: rm,
                                      disabled: rY,
                                      permissionsPending: rt && (ro || ry),
                                      hasIndependentEditorAccess: rU,
                                      isCurrentSession: eK,
                                      isWorkspace: eF,
                                      sharingScope: eE,
                                      sharingState: rr,
                                      workspaceName: eI.name?.trim() || void 0,
                                      onStageChange: rD,
                                    }),
                              })
                            : null,
                          null != e
                            ? e.content
                            : (0, a.jsx)(S.p, {
                                children: (0, a.jsx)("div", { className: "flex flex-col gap-3", children: eh }),
                              }),
                          ra && eG
                            ? (0, a.jsx)(G, {
                                analytics: rQ,
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
                      eU,
                    ),
            })),
          (ex[210] = eh),
          (ex[211] = r1),
          (ex[212] = eI),
          (ex[213] = rQ),
          (ex[214] = eV),
          (ex[215] = rh),
          (ex[216] = rm),
          (ex[217] = rt),
          (ex[218] = rK),
          (ex[219] = eO),
          (ex[220] = r3),
          (ex[221] = rY),
          (ex[222] = eY),
          (ex[223] = eU),
          (ex[224] = rz),
          (ex[225] = ry),
          (ex[226] = eR),
          (ex[227] = r0),
          (ex[228] = rU),
          (ex[229] = rB),
          (ex[230] = eK),
          (ex[231] = ra),
          (ex[232] = eF),
          (ex[233] = eG),
          (ex[234] = ek),
          (ex[235] = eM),
          (ex[236] = re),
          (ex[237] = r$),
          (ex[238] = rF),
          (ex[239] = ru),
          (ex[240] = ro),
          (ex[241] = eE),
          (ex[242] = rr),
          (ex[243] = eT),
          (ex[244] = e6),
          (ex[245] = e7),
          (ex[246] = rj),
          (ex[247] = ew))
        : (ew = ex[247])
      let r4 = ew
      return (
        ex[248] !== eh ||
        ex[249] !== eI ||
        ex[250] !== rQ ||
        ex[251] !== eV ||
        ex[252] !== rt ||
        ex[253] !== rY ||
        ex[254] !== eU ||
        ex[255] !== rL ||
        ex[256] !== eK ||
        ex[257] !== ra ||
        ex[258] !== r4 ||
        ex[259] !== rx ||
        ex[260] !== eE ||
        ex[261] !== rr ||
        ex[262] !== e7
          ? ((ev =
              null == rr || rt || ra
                ? r4(null)
                : (0, a.jsx)(
                    eq,
                    {
                      account: eI,
                      analytics: rQ,
                      api: eV,
                      canRequest: !e7 && rr.capabilities?.can_request_access === !0,
                      disabled: rY,
                      isCurrentSession: eK,
                      renderDialog: r4,
                      roster: rL ? rx : void 0,
                      sharingScope: eE,
                      sharingState: rr,
                      children: eh,
                    },
                    eU,
                  )),
            (ex[248] = eh),
            (ex[249] = eI),
            (ex[250] = rQ),
            (ex[251] = eV),
            (ex[252] = rt),
            (ex[253] = rY),
            (ex[254] = eU),
            (ex[255] = rL),
            (ex[256] = eK),
            (ex[257] = ra),
            (ex[258] = r4),
            (ex[259] = rx),
            (ex[260] = eE),
            (ex[261] = rr),
            (ex[262] = e7),
            (ex[263] = ev))
          : (ev = ex[263]),
        ev
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
      return "success" === e.state.status && !e.isStaleByTime(q.D.THIRTY_SECONDS)
    }
    function e5(e) {
      return (
        e instanceof k.fk &&
        404 === e.responseStatus &&
        "network" !== e.errorKind &&
        null == e.errorCode &&
        e.diagnosticError instanceof f.rX &&
        "Not Found" === e.diagnosticError.detail
      )
    }
  },
  nqea(e, r, i) {
    var a = i("ASxG")
    let t = {
        file: {
          viewer: "role-library-file-viewer",
          commenter: "role-library-file-commenter",
          editor: "role-library-file-editor",
        },
        folder: {
          viewer: "role-library-folder-viewer",
          commenter: "role-library-folder-commenter",
          editor: "role-library-folder-editor",
        },
      },
      n = a
        .object({
          direct_sharing_capabilities_version: a.literal(1).nullish(),
          can_invite: a.boolean().optional(),
          can_manage_access: a.boolean().optional(),
          can_request_access: a.boolean().optional(),
          can_manage_access_requests: a.boolean().optional(),
        })
        .optional()
    function s(e, r) {
      return (
        e.resource_type === ("file" === r.resourceKind ? "library_file" : "library_folder") &&
        e.resource_id === r.libraryFileId
      )
    }
    function l(e, r) {
      return (
        s(e.resource, r) &&
        "user" === e.owner.principal.principal_type &&
        "user" === e.viewer.principal.principal_type &&
        e.viewer.principal.principal_id === r.accountUserId
      )
    }
    function o(e, r = "file") {
      let i = t[r]
      return ["viewer", "commenter", "editor"].find((r) => i[r] === e)
    }
    function c(e) {
      return [...new Set(e)].sort().slice(0, 2)
    }
    function d(e) {
      return `${e.principal_type}:${e.principal_id}`
    }
    function u(e) {
      let r = new Set([
        ...e.decisions.map(({ recipient: e }) => d(e)),
        ...(e.already_satisfied_recipients ?? []).map(d),
      ])
      return e.recipients.filter((e) => !r.has(d(e)))
    }
    function p({ recipient: e, request: r }) {
      return JSON.stringify([r.request_id, r.created_at, d(e)])
    }
    function h({ recipient: e, request: r }) {
      return JSON.stringify([r.resource.resource_type, r.resource.resource_id, r.requested_role_id, d(e)])
    }
    i.d(
      r,
      {},
      {
        F2: t,
        Fp: function ({ sharingState: e, scope: r, legacyOwner: i, managementAvailable: a }) {
          let t = { canInvite: !1, canManageAccess: !1 }
          if (!a || null == e || 0 === r.accountUserId.length || !l(e, r)) return t
          let s = n.safeParse(e.capabilities)
          if (!s.success) return t
          let o = s.data ?? {}
          if (1 === o.direct_sharing_capabilities_version)
            return { canInvite: !0 === o.can_invite, canManageAccess: !0 === o.can_manage_access }
          if (o.can_invite || o.can_manage_access) return t
          let c =
            e.owner.principal.principal_id === r.accountUserId &&
            i?.principal_type === "user" &&
            i.principal_id === r.accountUserId
          return { canInvite: c, canManageAccess: c }
        },
        M4: h,
        SK: function (e, r) {
          let i = d(r),
            a = e.decisions.find((e) => d(e.recipient) === i)
          return null != a
            ? a.decision
            : e.already_satisfied_recipients?.some((e) => d(e) === i)
              ? "satisfied"
              : "pending"
        },
        Sq: function ({ scope: e, sharingState: r }) {
          if (null == r || !l(r, e)) return
          if ("collaborators_only" === r.link_access) return { mode: "collaborators_only" }
          if ("workspace" !== r.link_access || r.workspace_id !== e.accountId || null == r.role_id) return
          let i = o(r.role_id, e.resourceKind)
          return "viewer" === i || "editor" === i ? { mode: "workspace", role: i, workspaceId: e.accountId } : void 0
        },
        Sr: l,
        X1: function (e, r, i = []) {
          let a = ["library-sharing", e.accountId, e.accountUserId, e.resourceKind, e.libraryFileId]
          return null == r ? a : [...a, r, ...c(i)]
        },
        YB: u,
        b3: c,
        d7: p,
        nD: d,
        q4: function (e, r = "file") {
          return ["viewer", "commenter", "editor"].filter((i) => e.includes(t[r][i]))
        },
        qh: function (e) {
          let r = new Set(
              e.flatMap((e) =>
                [...e.decisions.map(({ recipient: e }) => e), ...(e.already_satisfied_recipients ?? [])].map((r) =>
                  p({ recipient: r, request: e }),
                ),
              ),
            ),
            i = new Map()
          for (let a of e)
            for (let e of u(a)) {
              if (r.has(p({ recipient: e, request: a }))) continue
              let t = h({ recipient: e, request: a }),
                n = i.get(t)
              null == n
                ? i.set(t, { recipient: e, request: a, requests: [a] })
                : n.requests.some((e) => e.request_id === a.request_id && e.created_at === a.created_at) ||
                  n.requests.push(a)
            }
          return [...i.values()].map(
            (e) => (
              e.requests.sort(
                (e, r) =>
                  Date.parse(r.created_at) - Date.parse(e.created_at) || e.request_id.localeCompare(r.request_id),
              ),
              { ...e, request: e.requests[0] }
            ),
          )
        },
        rP: o,
        t4: s,
      },
    )
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
      c = i("bVeK"),
      d = i("AOG7"),
      u = i("glqn"),
      p = i("ajGH"),
      h = i("LKbA"),
      m = i("rvFo"),
      f = i("GEsy"),
      g = i("AEhU")
    function _(e) {
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
        _ = (0, f.o)(h, 150)
      p[2] !== e.currentEmail || p[3] !== e.existingEmails || p[4] !== h
        ? ((i = (0, g.on)({ query: h, selected: [], currentEmail: e.currentEmail, existingEmails: e.existingEmails })),
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
      let w = b && h === _
      ;(p[15] !== e || p[16] !== h
        ? ((o = (r) => {
            let { signal: i } = r
            return e.resolveRecipient(h, AbortSignal.any([i, AbortSignal.timeout(7e3)]))
          }),
          (p[15] = e),
          (p[16] = h),
          (p[17] = o))
        : (o = p[17]),
        p[18] !== l || p[19] !== w || p[20] !== o
          ? ((c = { queryKey: l, enabled: w, staleTime: m.D.ONE_MINUTE, networkMode: "always", retry: !1, queryFn: o }),
            (p[18] = l),
            (p[19] = w),
            (p[20] = o),
            (p[21] = c))
          : (c = p[21]))
      let { data: v, isFetching: x, isError: A } = (0, n.I)(c)
      p[22] !== b || p[23] !== y || p[24] !== v?.eligible || p[25] !== _ || p[26] !== A || p[27] !== x || p[28] !== h
        ? ((d = b && !x && !A && h === _ && v?.eligible ? y : []),
          (p[22] = b),
          (p[23] = y),
          (p[24] = v?.eligible),
          (p[25] = _),
          (p[26] = A),
          (p[27] = x),
          (p[28] = h),
          (p[29] = d))
        : (d = p[29])
      let S = b && (x || h !== _)
      return (
        p[30] !== A || p[31] !== e || p[32] !== d || p[33] !== S
          ? ((u = (0, a.jsx)(I, { ...e, options: d, isLoading: S, searchFailed: A })),
            (p[30] = A),
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
        i,
        n,
        s,
        l,
        o,
        c,
        u,
        p,
        h,
        m = (0, t.c)(37),
        { data: f, isFetching: g, isPending: _, isError: y } = (0, d.Nv)(e.disabled ? "" : e.query),
        A = `user:${e.currentPrincipalId}`
      m[0] !== e.existingPrincipalKeys || m[1] !== A
        ? ((r = new Set([...e.existingPrincipalKeys, A])), (m[0] = e.existingPrincipalKeys), (m[1] = A), (m[2] = r))
        : (r = m[2])
      let S = r,
        R = e.currentEmail ?? ""
      m[3] !== e.existingEmails || m[4] !== R
        ? ((i = new Set([...e.existingEmails, R].map(x))), (m[3] = e.existingEmails), (m[4] = R), (m[5] = i))
        : (i = m[5])
      let E = i
      m[6] !== e.selected ? ((n = new Set(e.selected.map(v))), (m[6] = e.selected), (m[7] = n)) : (n = m[7])
      let L = n
      m[8] !== e.selected ? ((s = new Set(e.selected.flatMap(w))), (m[8] = e.selected), (m[9] = s)) : (s = m[9])
      let C = s
      if (
        m[10] !== E ||
        m[11] !== S ||
        m[12] !== e.shares?.shares ||
        m[13] !== e.shares?.shares.filter ||
        m[14] !== C ||
        m[15] !== L ||
        m[16] !== f
      ) {
        let r,
          i = e.shares?.shares.filter(b)
        for (let e of ((l = (e, r) => {
          let a
          return (
            S.has(`group:${e}`) &&
              (a = i?.some(
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
              accessStatus: a,
              recipient: { recipient_type: "principal", principal_type: "group", principal_id: e },
              isValid: !0,
            }
          )
        }),
        (o = []),
        m[19] !== f ? ((r = f ?? []), (m[19] = f), (m[20] = r)) : (r = m[20]),
        r)) {
          let r,
            a = `user:${e.account_user_id}`
          L.has(a) ||
            (null != e.email && C.has(e.email.trim().toLowerCase())) ||
            ((S.has(a) || (null != e.email && E.has(e.email.trim().toLowerCase()))) &&
              (r = i?.some((r) =>
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
              accessStatus: r,
              recipient: { recipient_type: "principal", principal_type: "user", principal_id: e.account_user_id },
              isValid: !0,
            }))
        }
        ;((m[10] = E),
          (m[11] = S),
          (m[12] = e.shares?.shares),
          (m[13] = e.shares?.shares.filter),
          (m[14] = C),
          (m[15] = L),
          (m[16] = f),
          (m[17] = l),
          (m[18] = o))
      } else ((l = m[17]), (o = m[18]))
      ;(m[21] !== l || m[22] !== e.allowGroups
        ? ((c = e.allowGroups ? (e) => l(e.id, e.name) : void 0), (m[21] = l), (m[22] = e.allowGroups), (m[23] = c))
        : (c = m[23]),
        m[24] !== l ? ((u = (e) => l(e.id, e.name)), (m[24] = l), (m[25] = u)) : (u = m[25]))
      let T = _ || g
      return (
        m[26] !== e.query || m[27] !== C
          ? ((p = "" !== e.query.trim() && C.has(e.query.trim().toLowerCase())),
            (m[26] = e.query),
            (m[27] = C),
            (m[28] = p))
          : (p = m[28]),
        m[29] !== o || m[30] !== e || m[31] !== c || m[32] !== u || m[33] !== T || m[34] !== p || m[35] !== y
          ? ((h = (0, a.jsx)(I, {
              ...e,
              getGroupRecipient: c,
              getTeamRecipient: u,
              options: o,
              isLoading: T,
              queryAlreadyAdded: p,
              searchFailed: y,
            })),
            (m[29] = o),
            (m[30] = e),
            (m[31] = c),
            (m[32] = u),
            (m[33] = T),
            (m[34] = p),
            (m[35] = y),
            (m[36] = h))
          : (h = m[36]),
        h
      )
    }
    function b(e) {
      return "pending" === e.status
    }
    function w(e) {
      return null == e.secondaryLabel ? [] : [e.secondaryLabel.trim().toLowerCase()]
    }
    function v(e) {
      return e.id
    }
    function x(e) {
      return e.trim().toLowerCase()
    }
    function I(e) {
      let r,
        i,
        n,
        c,
        d,
        m,
        f,
        g,
        _,
        y,
        b,
        w,
        v,
        x,
        I,
        C,
        T,
        q,
        k = (0, t.c)(61)
      k[0] !== e
        ? (({
            getGroupRecipient: r,
            getTeamRecipient: i,
            options: n,
            queryAlreadyAdded: d,
            searchFailed: m,
            isLoading: f,
            ...c
          } = e),
          (k[0] = e),
          (k[1] = r),
          (k[2] = i),
          (k[3] = n),
          (k[4] = c),
          (k[5] = d),
          (k[6] = m),
          (k[7] = f))
        : ((r = k[1]), (i = k[2]), (n = k[3]), (c = k[4]), (d = k[5]), (m = k[6]), (f = k[7]))
      let j = void 0 !== d && d,
        M = void 0 !== m && m,
        N = void 0 !== f && f,
        F = (0, l.A)(),
        P = (0, s.useId)(),
        D = c.selected.some(L),
        O = c.disabled || (c.isWorkspace && !c.canSearchMembers),
        G = null
      if (D) {
        let e
        ;(k[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(o.A, {
              id: "librarySharing.invite.invalidEmails",
              defaultMessage: "Remove invalid email addresses before inviting",
              description:
                "Inline error in the Library sharing dialog after invalid email addresses have become selected tokens; the user must remove those tokens before sending invitations",
            })),
            (k[8] = e))
          : (e = k[8]),
          (G = e))
      } else if (j) {
        let e
        ;(k[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(o.A, {
              id: "librarySharing.invite.alreadyAdded",
              defaultMessage: "This person already has access or is selected",
              description:
                "Inline feedback in the Library sharing dialog when an entered email belongs to the owner, an existing collaborator, or an already selected invitee",
            })),
            (k[9] = e))
          : (e = k[9]),
          (G = e))
      }
      k[10] !== G || k[11] !== P || k[12] !== c.ariaDescribedBy
        ? ((g = [c.ariaDescribedBy, null == G ? void 0 : P].filter(E).join(" ") || void 0),
          (k[10] = G),
          (k[11] = P),
          (k[12] = c.ariaDescribedBy),
          (k[13] = g))
        : (g = k[13])
      let K = g,
        H = null
      if (c.selected.length > 0 && null != c.role && null != c.allowedRoles) {
        let e
        ;(k[14] !== O || k[15] !== c.allowedRoles || k[16] !== c.onRoleChange || k[17] !== c.role
          ? ((e =
              c.allowedRoles.length > 1
                ? (0, a.jsx)(u.e, {
                    indicatorVariant: "checkmark",
                    variant: "inline",
                    renderLabel: R,
                    disabled: O,
                    options: c.allowedRoles.map(S),
                    value: c.role,
                    onChange: c.onRoleChange,
                  })
                : (0, a.jsx)("span", {
                    className: "text-tertiary",
                    children: (0, a.jsx)(h.u, { permission: c.role }),
                  })),
            (k[14] = O),
            (k[15] = c.allowedRoles),
            (k[16] = c.onRoleChange),
            (k[17] = c.role),
            (k[18] = e))
          : (e = k[18]),
          (H = e))
      }
      k[19] !== F
        ? ((_ = F.formatMessage({
            id: "librarySharing.invite.personalPlaceholder",
            defaultMessage: "Add emails",
            description:
              "Placeholder and accessible label in the Library sharing recipient input for personal accounts; users enter an email address and select a validated recipient",
          })),
          (k[19] = F),
          (k[20] = _))
        : (_ = k[20])
      let U = _
      k[21] !== F
        ? ((y = (e) =>
            F.formatMessage(
              {
                id: "librarySharing.invite.removeSelection",
                defaultMessage: "Remove {name} from the invitation",
                description:
                  "Accessible label of a selected Library sharing recipient's remove button; name is the person's display name, group name, or email address",
              },
              { name: e.label },
            )),
          (k[21] = F),
          (k[22] = y))
        : (y = k[22])
      let B = y
      return (
        k[23] !== U || k[24] !== c.isWorkspace
          ? ((b = c.isWorkspace ? void 0 : { people: U, peopleAndTeams: U }),
            (k[23] = U),
            (k[24] = c.isWorkspace),
            (k[25] = b))
          : (b = k[25]),
        k[26] !== n ? ((w = n?.map(A)), (k[26] = n), (k[27] = w)) : (w = k[27]),
        k[28] !== F || k[29] !== c.isWorkspace
          ? ((v = c.isWorkspace
              ? F.formatMessage({
                  id: "librarySharing.invite.searching",
                  defaultMessage: "Searching workspace members",
                  description:
                    "Accessible status while the Library sharing picker searches the current workspace for recipients",
                })
              : F.formatMessage({
                  id: "librarySharing.invite.searchingRecipients",
                  defaultMessage: "Searching for people",
                  description:
                    "Accessible status while the Library sharing picker checks whether the entered email is eligible for sharing",
                })),
            (k[28] = F),
            (k[29] = c.isWorkspace),
            (k[30] = v))
          : (v = k[30]),
        k[31] !== c.isWorkspace
          ? ((x = c.isWorkspace
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
            (k[31] = c.isWorkspace),
            (k[32] = x))
          : (x = k[32]),
        k[33] !== K ||
        k[34] !== O ||
        k[35] !== r ||
        k[36] !== B ||
        k[37] !== i ||
        k[38] !== N ||
        k[39] !== c.accountId ||
        k[40] !== c.onChange ||
        k[41] !== c.onQueryChange ||
        k[42] !== c.query ||
        k[43] !== c.selected ||
        k[44] !== H ||
        k[45] !== M ||
        k[46] !== x ||
        k[47] !== b ||
        k[48] !== w ||
        k[49] !== v
          ? ((I = (0, a.jsx)(p.B, {
              accountId: c.accountId,
              getTeamRecipient: i,
              getGroupRecipient: r,
              ariaDescribedBy: K,
              disabled: O,
              placeholder: b,
              selectedOptions: c.selected,
              getRemoveLabel: B,
              options: w,
              onChange: c.onChange,
              query: c.query,
              onQueryChange: c.onQueryChange,
              isLoading: N,
              searchFailed: M,
              loadingLabel: v,
              emptyMessage: x,
              trailingContent: H,
            })),
            (k[33] = K),
            (k[34] = O),
            (k[35] = r),
            (k[36] = B),
            (k[37] = i),
            (k[38] = N),
            (k[39] = c.accountId),
            (k[40] = c.onChange),
            (k[41] = c.onQueryChange),
            (k[42] = c.query),
            (k[43] = c.selected),
            (k[44] = H),
            (k[45] = M),
            (k[46] = x),
            (k[47] = b),
            (k[48] = w),
            (k[49] = v),
            (k[50] = I))
          : (I = k[50]),
        k[51] !== G || k[52] !== P
          ? ((C =
              null == G
                ? null
                : (0, a.jsx)("p", { id: P, className: "text-sm text-danger", role: "alert", children: G })),
            (k[51] = G),
            (k[52] = P),
            (k[53] = C))
          : (C = k[53]),
        k[54] !== c.canSearchMembers || k[55] !== c.isWorkspace
          ? ((T =
              c.isWorkspace && !c.canSearchMembers
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
            (k[54] = c.canSearchMembers),
            (k[55] = c.isWorkspace),
            (k[56] = T))
          : (T = k[56]),
        k[57] !== I || k[58] !== C || k[59] !== T
          ? ((q = (0, a.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col gap-2", children: [I, C, T] })),
            (k[57] = I),
            (k[58] = C),
            (k[59] = T),
            (k[60] = q))
          : (q = k[60]),
        q
      )
    }
    function A(e) {
      return {
        ...e,
        Icon: "principal" === e.recipient.recipient_type && "group" === e.recipient.principal_type ? c.oJq : void 0,
      }
    }
    function S(e) {
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
              ? ((r = e.isWorkspace ? (0, a.jsx)(I, { ...e }) : (0, a.jsx)(_, { ...e })), (i[3] = e), (i[4] = r))
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
  jqgw(e, r, i) {
    var a = i("t2SL")
    i.d(
      r,
      {},
      {
        F: function () {
          return a.G_
        },
      },
    )
  },
  t2SL(e, r, i) {
    var a = i("jgEm"),
      t = i("YJq6")
    let n = /^[A-Za-z0-9_-]+$/,
      s = /^(?:libfile_|libfile-)[A-Za-z0-9_-]+$/,
      l = "https://chatgpt.com"
    i.d(
      r,
      {},
      {
        G_: l,
        P0: function (e, r) {
          let i = new URLSearchParams(r)
          if ("1" !== i.get("review_access_requests")) return null
          let a = i.get("file_id")?.trim()
          if (null != a)
            return ("/library" === e || "/library/" === e) && s.test(a) ? { resourceId: a, resourceKind: "file" } : null
          let t = /^\/library\/d\/([^/]+)\/?$/.exec(e)
          if (null == t) return null
          try {
            let e = decodeURIComponent(t[1])
            return /^(?:[A-Fa-f0-9]{32}|(?:libdir_|libdir-)[A-Za-z0-9_-]+)$/.test(e)
              ? { resourceId: e, resourceKind: "folder" }
              : null
          } catch {
            return null
          }
        },
        Rg: function ({ libraryFileId: e, origin: r = l, resourceKind: i, sharedDirectoryId: t, workspaceId: n }) {
          let o = (0, a.A0)(t),
            c = o?.[0],
            d = "folder" === i ? e : o?.[1],
            u = c ?? ("folder" === i ? e : void 0),
            p = "/library"
          null != u &&
            null != d &&
            ((p = `/library/share/${encodeURIComponent(u)}`), d !== u && (p += `/${encodeURIComponent(d)}`))
          let h = "file" === i && s.test(e)
          h && (p = `${null == u ? "/library/share" : p}/${encodeURIComponent(e)}`)
          let m = new URL(p, r)
          return (
            "file" !== i || h || m.searchParams.set("file_id", e),
            m.searchParams.set("account_id", n ?? "personal"),
            m
          )
        },
        Vf: function (e, r) {
          let i = new URLSearchParams(r).get("file_id")?.trim() || null
          if (e.startsWith("/library/share/")) {
            let r,
              a = /^\/library\/share\/([^/]+)(?:\/([^/]+))?(?:\/([^/]+))?\/?$/.exec(e)
            if (null == a) return null
            try {
              r = a
                .slice(1)
                .filter((e) => null != e)
                .map(decodeURIComponent)
            } catch {
              return null
            }
            let l = (e) => s.test(e)
            if (!r.every((e) => n.test(e)) || r.slice(0, -1).some(l) || (3 === r.length && !l(r[2]))) return null
            let o = r[r.length - 1],
              c = l(o) ? o : i
            if (null != c && !n.test(c)) return null
            l(o) && r.pop()
            let d = r[0] ?? null,
              u = r.map((e) => (0, t.vO)(e).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/u, "")),
              p = r[1] ?? d,
              h = p
            return (
              null == p || /^libdir_fde[123]_/.test(p) || (h = `library:shared-directory:v1:${u[0]}.${u[1] ?? u[0]}`),
              { fileId: c, directoryId: h, folderResourceId: p }
            )
          }
          if (null == i || !n.test(i)) return null
          let l = null
          if (e.startsWith("/library/d/"))
            try {
              l = decodeURIComponent(e.slice(11))
            } catch {
              return null
            }
          else if ("/library" !== e && "/library/" !== e) return null
          return { fileId: i, directoryId: l, folderResourceId: (0, a.A0)(l)?.[1] ?? null }
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
          let { includeMemberCounts: f } = i,
            g = void 0 !== f && f,
            { accountId: _, authMethod: y } = (0, n.As)()
          m[2] !== e ? ((c = e.trim()), (m[2] = e), (m[3] = c)) : (c = m[3])
          let b = c,
            w = (0, o.o)(b, 150)
          ;(m[4] !== g ? ((d = g ? ["member-counts"] : []), (m[4] = g), (m[5] = d)) : (d = m[5]),
            m[6] !== _ || m[7] !== b || m[8] !== d
              ? ((u = ["workspace-groups", _, b, ...d]), (m[6] = _), (m[7] = b), (m[8] = d), (m[9] = u))
              : (u = m[9]))
          let v = ("chatgpt" === y || "chatgptAuthTokens" === y) && null != _ && b.length > 0 && b === w
          return (
            m[10] !== _ || m[11] !== g || m[12] !== b
              ? ((p = async (e) => {
                  let { signal: r } = e
                  if (null == _) throw Error("account id is required")
                  return (
                    await l.CodexRequest.safeGet("/accounts/{account_id}/groups", {
                      parameters: {
                        path: { account_id: _ },
                        query: { limit: 10, offset: 0, query: b, include_member_counts: g, include_total: !1 },
                      },
                      signal: AbortSignal.any([r, AbortSignal.timeout(15e3)]),
                    })
                  ).items
                }),
                (m[10] = _),
                (m[11] = g),
                (m[12] = b),
                (m[13] = p))
              : (p = m[13]),
            m[14] !== u || m[15] !== v || m[16] !== p
              ? ((h = {
                  queryKey: u,
                  enabled: v,
                  networkMode: "always",
                  refetchOnReconnect: !0,
                  retry: !1,
                  queryFn: p,
                  staleTime: s.D.ONE_MINUTE,
                }),
                (m[14] = u),
                (m[15] = v),
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
          let { includeProfilePhotos: f } = i,
            g = void 0 !== f && f,
            { accountId: _, authMethod: y } = (0, n.As)()
          m[2] !== e ? ((l = e.trim()), (m[2] = e), (m[3] = l)) : (l = m[3])
          let b = l,
            w = (0, o.o)(b, 150)
          ;(m[4] !== g ? ((c = g ? ["profile-photos"] : []), (m[4] = g), (m[5] = c)) : (c = m[5]),
            m[6] !== _ || m[7] !== b || m[8] !== c
              ? ((u = ["workspace-users", _, b, ...c]), (m[6] = _), (m[7] = b), (m[8] = c), (m[9] = u))
              : (u = m[9]))
          let v = ("chatgpt" === y || "chatgptAuthTokens" === y) && null != _ && b.length > 0 && b === w
          return (
            m[10] !== _ || m[11] !== g || m[12] !== b
              ? ((p = (e) => {
                  let { signal: r } = e
                  if (null == _) throw Error("account id is required")
                  return d(_, b, AbortSignal.any([r, AbortSignal.timeout(15e3)]), { includeProfilePhotos: g })
                }),
                (m[10] = _),
                (m[11] = g),
                (m[12] = b),
                (m[13] = p))
              : (p = m[13]),
            m[14] !== u || m[15] !== v || m[16] !== p
              ? ((h = {
                  queryKey: u,
                  enabled: v,
                  networkMode: "always",
                  refetchOnReconnect: !0,
                  retry: !1,
                  queryFn: p,
                  staleTime: s.D.ONE_MINUTE,
                }),
                (m[14] = u),
                (m[15] = v),
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
            f = m?.avatar
          return (
            c[3] !== u || c[4] !== f
              ? ((i = (0, a.jsx)(o.y, { avatar: f, size: u })), (c[3] = u), (c[4] = f), (c[5] = i))
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
              disabled: f,
              hasPendingAccessChange: g,
              hasPendingInvitees: _,
              isSaving: y,
              isBusy: b,
              isCancelDisabled: w,
              inviteLabel: v,
              saveLabel: x,
              variant: I,
              onCancel: A,
              onClose: S,
            } = e,
            R = void 0 === b ? y : b,
            E = void 0 === w ? R : w,
            L = void 0 === I ? "default" : I,
            C = g || _
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
          } else if (_) {
            let e
            ;(h[1] !== v
              ? ((e =
                  v ??
                  (0, a.jsx)(s.A, {
                    id: "shareDialog.primaryAction.invite",
                    defaultMessage: "Invite",
                    description: "Button label for inviting selected people or groups in a share dialog",
                  })),
                (h[1] = v),
                (h[2] = e))
              : (e = h[2]),
              (r = e))
          } else if (C) {
            let e
            ;(h[3] !== x
              ? ((e =
                  x ??
                  (0, a.jsx)(s.A, {
                    id: "shareDialog.primaryAction.save",
                    defaultMessage: "Save",
                    description: "Button label for saving a share dialog access change",
                  })),
                (h[3] = x),
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
            h[8] !== C || h[9] !== E || h[10] !== A || h[11] !== L
              ? ((o =
                  C &&
                  (0, a.jsx)(n.$, {
                    color: "secondary",
                    variant: "outline",
                    size: "xl",
                    gutterSize: "audienceReview" === L ? "sm" : void 0,
                    type: "button",
                    disabled: E,
                    onClick: A,
                    children: (0, a.jsx)(s.A, {
                      id: "shareDialog.primaryAction.cancel",
                      defaultMessage: "Cancel",
                      description: "Button label for cancelling staged changes in a share dialog",
                    }),
                  })),
                (h[8] = C),
                (h[9] = E),
                (h[10] = A),
                (h[11] = L),
                (h[12] = o))
              : (o = h[12]))
          let T = "audienceReview" === L ? "sm" : void 0,
            q = C ? "submit" : "button",
            k = y || R || (C && f),
            j = C ? void 0 : S
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
            h[18] !== y || h[19] !== c || h[20] !== d || h[21] !== T || h[22] !== q || h[23] !== k || h[24] !== j
              ? ((u = (0, a.jsxs)(n.$, {
                  color: "primary",
                  size: "xl",
                  gutterSize: T,
                  type: q,
                  disabled: k,
                  "aria-busy": y,
                  onClick: j,
                  children: [c, d],
                })),
                (h[18] = y),
                (h[19] = c),
                (h[20] = d),
                (h[21] = T),
                (h[22] = q),
                (h[23] = k),
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
      o = i("on57"),
      c = i("oyxz"),
      d = i("bVeK"),
      u = i("vtqG")
    function p(e) {
      return e.stopPropagation()
    }
    i.d(
      r,
      {},
      {
        e: function (e) {
          let r,
            i,
            h,
            m,
            f,
            g,
            _,
            y,
            b,
            w,
            v,
            x = (0, t.c)(48),
            {
              alignOffset: I,
              options: A,
              disabled: S,
              footer: R,
              indicatorVariant: E,
              renderLabel: L,
              mixed: C,
              opticallyAlign: T,
              removeLabel: q,
              sideOffset: k,
              size: j,
              variant: M,
              value: N,
              onChange: F,
              onRemoveAccess: P,
            } = e,
            D = void 0 !== S && S,
            O = void 0 === E ? "checkmark" : E,
            G = void 0 !== C && C,
            K = void 0 === M ? "default" : M,
            H = void 0 === j ? "sm" : j
          "field" === K ? (H = "xl") : "audienceReview" === K && (H = "lg")
          let U = "audienceReview" === K && u.A.permission
          x[0] !== U ? ((r = (0, o.A)(U, "enabled:text-default")), (x[0] = U), (x[1] = r)) : (r = x[1])
          let B = "field" === K ? "outline" : "ghost",
            Y = "field" !== K,
            z = "inline" === K ? "2xs" : void 0
          ;(x[2] !== G || x[3] !== L || x[4] !== N
            ? ((i = G
                ? (0, a.jsx)(c.A, {
                    id: "shareDialog.mixedRoles",
                    defaultMessage: "Mixed",
                    description: "Role selector label when selected sharing recipients have different permissions",
                  })
                : L(N)),
              (x[2] = G),
              (x[3] = L),
              (x[4] = N),
              (x[5] = i))
            : (i = x[5]),
            x[6] === Symbol.for("react.memo_cache_sentinel") ? ((h = (0, a.jsx)(d.Aq_, {})), (x[6] = h)) : (h = x[6]),
            x[7] !== D ||
            x[8] !== T ||
            x[9] !== z ||
            x[10] !== i ||
            x[11] !== r ||
            x[12] !== B ||
            x[13] !== Y ||
            x[14] !== H
              ? ((m = (0, a.jsxs)(n.$, {
                  className: r,
                  color: "secondary",
                  variant: B,
                  size: H,
                  iconSize: "sm",
                  pill: Y,
                  gutterSize: z,
                  opticallyAlign: T,
                  disabled: D,
                  children: [i, h],
                })),
                (x[7] = D),
                (x[8] = T),
                (x[9] = z),
                (x[10] = i),
                (x[11] = r),
                (x[12] = B),
                (x[13] = Y),
                (x[14] = H),
                (x[15] = m))
              : (m = x[15]),
            x[16] !== D || x[17] !== m
              ? ((f = (0, a.jsx)(s.W.Trigger, { disabled: D, children: m })), (x[16] = D), (x[17] = m), (x[18] = f))
              : (f = x[18]))
          let $ = G ? "" : N
          if (
            (x[19] !== F || x[20] !== A
              ? ((g = (e) => {
                  let r = A.find((r) => r.value === e)
                  null != r && F?.(r.value)
                }),
                (x[19] = F),
                (x[20] = A),
                (x[21] = g))
              : (g = x[21]),
            x[22] !== D || x[23] !== O || x[24] !== A || x[25] !== L)
          ) {
            let e
            ;(x[27] !== D || x[28] !== O || x[29] !== L
              ? ((e = (e) =>
                  (0, a.jsx)(
                    l.m,
                    {
                      content: e.tooltipText,
                      children: (0, a.jsx)(s.W.RadioItem, {
                        className: "hover:before:opacity-100",
                        indicatorVariant: O,
                        value: e.value,
                        disabled: D || e.disabled,
                        "aria-label": e.ariaLabel,
                        "aria-description": e.description,
                        children: (0, a.jsxs)("span", {
                          className: "flex max-w-64 min-w-0 flex-1 flex-col",
                          children: [
                            (0, a.jsx)("span", { children: L(e.value) }),
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
                (x[27] = D),
                (x[28] = O),
                (x[29] = L),
                (x[30] = e))
              : (e = x[30]),
              (_ = A.map(e)),
              (x[22] = D),
              (x[23] = O),
              (x[24] = A),
              (x[25] = L),
              (x[26] = _))
          } else _ = x[26]
          return (
            x[31] !== $ || x[32] !== g || x[33] !== _
              ? ((y = (0, a.jsx)(s.W.RadioGroup, { value: $, onChange: g, children: _ })),
                (x[31] = $),
                (x[32] = g),
                (x[33] = _),
                (x[34] = y))
              : (y = x[34]),
            x[35] !== D || x[36] !== P || x[37] !== q
              ? ((b =
                  null == P
                    ? null
                    : (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(s.W.Separator, {}),
                          (0, a.jsx)(s.W.Item, { color: "danger", disabled: D, onSelect: P, children: q }),
                        ],
                      })),
                (x[35] = D),
                (x[36] = P),
                (x[37] = q),
                (x[38] = b))
              : (b = x[38]),
            x[39] !== I || x[40] !== R || x[41] !== k || x[42] !== y || x[43] !== b
              ? ((w = (0, a.jsxs)(s.W.Content, {
                  align: "end",
                  alignOffset: I,
                  minWidth: "auto",
                  sideOffset: k,
                  children: [y, b, R],
                })),
                (x[39] = I),
                (x[40] = R),
                (x[41] = k),
                (x[42] = y),
                (x[43] = b),
                (x[44] = w))
              : (w = x[44]),
            x[45] !== f || x[46] !== w
              ? ((v = (0, a.jsx)("span", {
                  className: "inline-flex",
                  role: "presentation",
                  onMouseDown: p,
                  children: (0, a.jsxs)(s.W, { children: [f, w] }),
                })),
                (x[45] = f),
                (x[46] = w),
                (x[47] = v))
              : (v = x[47]),
            v
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
        f = new Map()
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
            m = f.get(t.id),
            g = m?.item.name
          ;(null == m ||
            o > m.match ||
            (!m.identified && s) ||
            (o === m.match && (!g || g.split("__")[0] === t.id) && t.name && t.name.split("__")[0] !== t.id)) &&
            f.set(t.id, { item: t, locality: m?.locality ?? e, match: o, identified: s })
        }
      return [...f.values()]
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
        f = new Map(),
        g = (e, r) => {
          let i = e.split("__")[0]
          f.set(i, Math.max(f.get(i) ?? 0, r))
        }
      for (let e of i.rosterUserIds ?? []) g(e, 5)
      for (let e of i.participants ?? []) {
        let r = null == e.lastActivityAtMs ? null : i.asOfMs - e.lastActivityAtMs
        g(e.id, null != r && r >= 0 && r <= 2592e6 ? 20 : 10)
      }
      for (let e of i.liveUserIds ?? []) g(e, 35)
      for (let e of i.threadUserIds ?? []) g(e, 50)
      let _ = o(h, e),
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
            _(a) - _(r) ||
            a.match - r.match ||
            (f.get(i) ?? 0) - (f.get(e) ?? 0) ||
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
              workspaceName: f,
              workspaceLabel: g,
              onChange: _,
            } = e,
            y = void 0 !== d && d
          if (c[0] !== p || c[1] !== f) {
            let e
            ;(c[3] !== f
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
                          null == f
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
            c[5] !== p || c[6] !== h || c[7] !== g || c[8] !== f
              ? ((i = (e) => {
                  let r = p.find((r) => r.value === e)
                  return null == r
                    ? null
                    : (0, a.jsx)(l, { mode: r.mode, restrictedLabel: h, workspaceName: f, workspaceLabel: g })
                }),
                (c[5] = p),
                (c[6] = h),
                (c[7] = g),
                (c[8] = f),
                (c[9] = i))
              : (i = c[9]),
            c[10] !== y || c[11] !== u || c[12] !== _ || c[13] !== r || c[14] !== i || c[15] !== m
              ? ((o = (0, a.jsx)(s.d, {
                  disabled: y,
                  footer: u,
                  iconVariant: "thumbnail",
                  options: r,
                  value: m,
                  renderLabel: i,
                  onChange: _,
                })),
                (c[10] = y),
                (c[11] = u),
                (c[12] = _),
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
      f = i("OAko"),
      g = i("LhhH"),
      _ = i("AOG7"),
      y = i("SPnB"),
      b = i("pyoT"),
      w = i("OWtl"),
      v = i("bQW7"),
      x = i("Rxyo"),
      I = i("rvFo")
    let A = (0, o.vU)(w.u, (e, { get: r, scope: i }) => {
      let a = r(y.PO),
        t = a.authenticatedUserId ?? null,
        n = r(y.chatGptAuthenticatedUserId$),
        s = r(y.kf),
        l =
          null != e &&
          a.authenticatedAccountId === e &&
          a.accountId === e &&
          null != t &&
          "loaded" === s.status &&
          "workspace" === s.structure &&
          r(x.y)
      return {
        enabled: l,
        queryKey: ["workspace-people-suggestions", e, t],
        staleTime: I.D.ONE_MINUTE,
        gcTime: I.D.ONE_MINUTE,
        retry: !1,
        networkMode: "always",
        queryFn: async ({ signal: r }) => {
          if (!l || null == e) throw Error("workspace suggestions are unavailable")
          let a = (0, b.watchSpaceAccount)(i, e, n, void 0, t),
            s = AbortSignal.any([r, a.signal, AbortSignal.timeout(15e3)])
          try {
            s.throwIfAborted()
            let r = await (0, _.AB)(e, "", s, { includeTotal: !1, limit: 20 })
            return (s.throwIfAborted(), (0, v.Jk)(r) ?? [])
          } finally {
            a.stop()
          }
        },
      }
    })
    var S = i("qCmE"),
      R = i("ENs9"),
      E = i("pLRu"),
      L = i("MFZ6"),
      C = i("CFGX"),
      T = i("LiNd")
    function q(e) {
      let r,
        i,
        n,
        s,
        u,
        g,
        y,
        b,
        w,
        x,
        I,
        q,
        G,
        K,
        H,
        U,
        B = (0, t.c)(59),
        {
          accountId: Y,
          ariaDescribedBy: z,
          disabled: $,
          emptyMessage: W,
          getRemoveLabel: Q,
          getGroupRecipient: V,
          getPersonRecipient: X,
          getTeamRecipient: Z,
          isLoading: J,
          loadingLabel: ee,
          options: er,
          dotOptions: ei,
          placeholder: ea,
          query: et,
          peopleQuery: en,
          recentOptions: es,
          suggestedOptions: el,
          suggestionsAsOf: eo,
          improvedSuggestions: ec,
          autoFocus: ed,
          searchFailed: eu,
          contextualPicks: ep,
          peopleFirst: eh,
          selectionDisplay: em,
          selectedOptions: ef,
          trailingContent: eg,
          onChange: e_,
          onQueryChange: ey,
        } = e,
        eb = void 0 === en ? et : en,
        ew = void 0 !== ec && ec,
        ev = void 0 === ed ? ew : ed,
        ex = void 0 === em ? "input" : em,
        eI = (0, d.A)(),
        [eA, eS] = (0, c.useState)(),
        { data: eR } = (0, f.oV)(),
        { accountId: eE } = (0, m.As)(),
        eL = eR?.accounts?.find((e) => e.id === Y),
        eC = (0, o._U)(p.w, Y ?? ""),
        eT = (eC && null != Z) || null != V || (ew && null != X)
      B[0] !== eT ? ((r = { enabled: eT }), (B[0] = eT), (B[1] = r)) : (r = B[1])
      let { data: eq, isError: ek } = (0, o._U)(h.Jk, Y ?? "", r),
        ej = null == eL ? void 0 : (0, C.V)(eL, eq, ek),
        eM = eE === Y && null != V && ej?.allowGroups === !0
      B[2] === Symbol.for("react.memo_cache_sentinel") ? ((i = { includeMemberCounts: !0 }), (B[2] = i)) : (i = B[2])
      let { data: eN, isError: eF, isPending: eP, isFetching: eD } = (0, _.Nc)(eM && !$ ? et : "", i),
        eO = eC && null != Z && ej?.canSearchMembers === !0,
        { data: eG, isError: eK, isLoading: eH } = (0, o._U)(p.l, Y ?? "", { enabled: eO && !$ }) ?? {}
      B[3] !== eO || B[4] !== eI || B[5] !== ea?.people || B[6] !== ea?.peopleAndTeams
        ? ((n = eO
            ? (ea?.peopleAndTeams ??
              eI.formatMessage({
                id: "shareRecipientPicker.peopleAndTeamsLabel",
                defaultMessage: "Add people or teams",
                description:
                  "Placeholder and accessible label for a sharing picker that can invite workspace people and teams",
              }))
            : (ea?.people ??
              eI.formatMessage({
                id: "shareRecipientPicker.peopleLabel",
                defaultMessage: "Add people",
                description:
                  "Placeholder and accessible label for a sharing picker that can invite people only because team discovery is unavailable",
              }))),
          (B[3] = eO),
          (B[4] = eI),
          (B[5] = ea?.people),
          (B[6] = ea?.peopleAndTeams),
          (B[7] = n))
        : (n = B[7])
      let eU = n,
        eB = et.trim().toLocaleLowerCase()
      B[8] !== eb ? ((s = eb.trim()), (B[8] = eb), (B[9] = s)) : (s = B[9])
      let eY = s,
        ez = null != ep,
        e$ = eh ?? ez,
        eW = eO && !eK ? (eG ?? []).map((e) => ({ team: e, recipient: Z(e) })) : [],
        eQ = new Set(ef.map(D)),
        eV =
          "" !== eB || $
            ? []
            : l()(
                (es ?? []).filter((e) => {
                  let { id: r, accessStatus: i } = e
                  return null == i && !eQ.has(r)
                }),
                "id",
              ).slice(0, 5),
        eX = new Set(eV.map(P))
      B[10] !== eI
        ? ((u = (e) => {
            let { team: r, recipient: i } = e
            return {
              ...i,
              isActorTeamMember: !0,
              secondaryLabel: (0, E.D)(eI, r.member_count),
              avatar: (0, a.jsx)(L.y, { avatar: r.avatar, size: "sm" }),
            }
          }),
          (B[10] = eI),
          (B[11] = u))
        : (u = B[11])
      let eZ = eW
          .filter((e) => {
            let { team: r } = e
            return ew || r.name.toLocaleLowerCase().includes(eB)
          })
          .map(u)
          .filter((e) => {
            let { id: r, accessStatus: i } = e
            return ("" !== eB || null == i) && !eQ.has(r) && (ew || !eX.has(r))
          }),
        eJ = new Set(eZ.map(F)),
        e0 =
          "" === eB || !eM || $ || eF
            ? []
            : l()(
                (eN ?? [])
                  .filter((e) => null == e.system_use_case && (ej?.allowScimGroups || !e.is_scim_managed))
                  .map((e) => ({
                    ...V(e),
                    secondaryLabel: (0, E.D)(eI, e.num_members),
                    avatar: (0, a.jsx)(S.K, { groupId: e.id, size: "sm" }),
                  }))
                  .filter((e) => {
                    let { id: r } = e
                    return (ew || !eJ.has(r)) && !eQ.has(r)
                  }),
                "id",
              ),
        e1 = (e) =>
          e?.filter((e) => {
            let { id: r } = e
            return !eJ.has(r) && !eQ.has(r) && !eX.has(r)
          }),
        e2 = "" === eY ? [] : (e1(er) ?? [])
      null != ep &&
        (e2 = (0, v.KZ)(
          eb,
          [...ep, er].map((e) => e1(e)?.map(N)),
        ).map(M))
      let e3 =
          0 === eV.length && 0 === eZ.length && 0 === e0.length
            ? void 0
            : [
                {
                  id: "recent",
                  label: eI.formatMessage({
                    id: "shareRecipientPicker.recent",
                    defaultMessage: "Recent",
                    description:
                      "Heading for people the user recently shared a Page or Space with, shown when the sharing search input is empty",
                  }),
                  options: eV.map(O),
                },
                {
                  id: "teams",
                  label:
                    "" === eB
                      ? eI.formatMessage({
                          id: "shareRecipientPicker.yourTeams",
                          defaultMessage: "Your teams",
                          description:
                            "Heading for the user's Teams suggested in the empty Library, Page, or Space sharing recipient picker",
                        })
                      : eI.formatMessage({
                          id: "shareRecipientPicker.teams",
                          defaultMessage: "Teams",
                          description: "Heading for matching Teams in Library, Page, or Space sharing search results",
                        }),
                  options: eZ.map(O),
                },
                {
                  id: "groups",
                  label: eI.formatMessage({
                    id: "shareRecipientPicker.groups",
                    defaultMessage: "Groups",
                    description: "Heading for matching administrative and SCIM groups in sharing search results",
                  }),
                  options: e0.map(O),
                },
                {
                  id: "people",
                  label: eI.formatMessage({
                    id: "shareRecipientPicker.people",
                    defaultMessage: "People",
                    description:
                      "Heading for people matching the workspace directory alongside Teams in the sharing recipient picker",
                  }),
                  options: e2.map(O),
                },
              ],
        e4 =
          ew && !$
            ? (0, T.s)(eb, [...(ep ?? []), eZ, el, es, e0, "" === eY ? void 0 : er], {
                selectedIds: eQ,
                suggestionsAsOf: eo,
              })
            : [],
        e5 =
          ew &&
          !$ &&
          "" === eB &&
          "" === eY &&
          null != X &&
          eE === Y &&
          ej?.canSearchMembers === !0 &&
          !J &&
          !eH &&
          e4.length < 10
      B[12] !== e5 ? ((g = { enabled: e5 }), (B[12] = e5), (B[13] = g)) : (g = B[13])
      let { data: e6, isEnabled: e7, isLoading: e8, isError: e9 } = (0, o._U)(A, Y ?? null, g),
        re = e5 && e7
      if (ew) {
        let e = re
          ? (0, T.s)(
              "",
              [
                e6?.flatMap((e) => {
                  let r = X?.(e)
                  return null == r ? [] : [r]
                }),
              ],
              { selectedIds: new Set([...eQ, ...e4.map(j)]), limit: 3 },
            )
          : []
        e3 = [
          {
            id: "suggested",
            label: eI.formatMessage({
              id: "shareRecipientPicker.suggested",
              defaultMessage: "Suggested",
              description: "Heading for people and groups ranked together as likely sharing recipients",
            }),
            options: [...e4, ...e].slice(0, 10).map(O),
          },
        ]
      }
      e$ && e3?.sort(k)
      let rr = eu && ("" !== eY || ez),
        ri = eO && eK,
        ra = "" !== eB && eM && eF,
        rt = rr || ri || ra,
        rn = (("" !== eY || ez) && J) || ("" !== eB && eM && (eP || eD)) || (eO && eH),
        rs = W
      ;("" === eB ? (rs = re && null != e6 && !e9 ? W : null) : rn ? (rs = ee) : (J || rt) && (rs = null),
        B[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (e) => {
              eS(e?.closest('[role="dialog"]') ?? null)
            }),
            (B[14] = y))
          : (y = B[14]))
      let rl = R.X,
        ro = !e$ || "user",
        rc = (ez && J && !rr) || (re && e8),
        rd = re && e9
      ;(B[15] !== ra || B[16] !== rc || B[17] !== rd || B[18] !== ri
        ? ((b = { peopleLoading: rc, peopleError: rd, groupsError: ra, teamsError: ri }),
          (B[15] = ra),
          (B[16] = rc),
          (B[17] = rd),
          (B[18] = ri),
          (B[19] = b))
        : (b = B[19]),
        B[20] !== ef || B[21] !== ex
          ? ((w = "external" === ex ? [] : ef.map(O)), (B[20] = ef), (B[21] = ex), (B[22] = w))
          : (w = B[22]),
        B[23] !== Q
          ? ((x = (e) => {
              let { recipient: r } = e
              return Q(r)
            }),
            (B[23] = Q),
            (B[24] = x))
          : (x = B[24]))
      let ru = e2.map(O),
        rp = ei
          ?.filter((e) => {
            let { id: r } = e
            return !eQ.has(r)
          })
          .map(O)
      return (
        B[25] !== e_ || B[26] !== ef
          ? ((I = (e) => {
              let { recipient: r } = e
              e_(l()([...ef, r], "id"))
            }),
            (q = (e) => {
              let { id: r } = e
              e_(ef.filter((e) => e.id !== r))
            }),
            (B[25] = e_),
            (B[26] = ef),
            (B[27] = I),
            (B[28] = q))
          : ((I = B[27]), (q = B[28])),
        B[29] !== ee || B[30] !== rn
          ? ((G = rn
              ? (0, a.jsx)("span", { className: "sr-only", role: "status", "aria-label": ee, children: ee })
              : null),
            (B[29] = ee),
            (B[30] = rn),
            (B[31] = G))
          : (G = B[31]),
        B[32] !== G || B[33] !== eg
          ? ((K = (0, a.jsxs)(a.Fragment, { children: [G, eg] })), (B[32] = G), (B[33] = eg), (B[34] = K))
          : (K = B[34]),
        B[35] !== rl ||
        B[36] !== z ||
        B[37] !== ev ||
        B[38] !== $ ||
        B[39] !== ew ||
        B[40] !== eU ||
        B[41] !== ey ||
        B[42] !== e3 ||
        B[43] !== eA ||
        B[44] !== et ||
        B[45] !== rs ||
        B[46] !== ro ||
        B[47] !== b ||
        B[48] !== w ||
        B[49] !== x ||
        B[50] !== ru ||
        B[51] !== rp ||
        B[52] !== I ||
        B[53] !== q ||
        B[54] !== K
          ? ((H = (0, a.jsx)(rl, {
              preserveHighlightOnItemsChange: ro,
              autoFocus: ev,
              waitForDialogEntrance: ew,
              preserveEmptyQueryOrder: ew,
              ariaLabel: eU,
              ariaDescribedBy: z,
              searchStatus: b,
              disabled: $,
              selectedOptions: w,
              getRemoveLabel: x,
              options: ru,
              dotOptions: rp,
              optionSections: e3,
              portalContainer: eA,
              query: et,
              onQueryChange: ey,
              showLoadingDropdown: !1,
              showSuggestionsOnFocus: !0,
              showSuggestionsOnQueryChange: ew,
              onSelectOption: I,
              onRemoveOption: q,
              placeholder: eU,
              trailingContent: K,
              emptyMessage: rs,
            })),
            (B[35] = rl),
            (B[36] = z),
            (B[37] = ev),
            (B[38] = $),
            (B[39] = ew),
            (B[40] = eU),
            (B[41] = ey),
            (B[42] = e3),
            (B[43] = eA),
            (B[44] = et),
            (B[45] = rs),
            (B[46] = ro),
            (B[47] = b),
            (B[48] = w),
            (B[49] = x),
            (B[50] = ru),
            (B[51] = rp),
            (B[52] = I),
            (B[53] = q),
            (B[54] = K),
            (B[55] = H))
          : (H = B[55]),
        B[56] !== y || B[57] !== H
          ? ((U = (0, a.jsx)("div", { ref: y, className: "flex min-w-0 flex-1 flex-col gap-2", children: H })),
            (B[56] = y),
            (B[57] = H),
            (B[58] = U))
          : (U = B[58]),
        U
      )
    }
    function k(e, r) {
      return "people" === e.id ? -1 : +("people" === r.id)
    }
    function j(e) {
      let { id: r } = e
      return r
    }
    function M(e) {
      let { recipient: r } = e
      return r
    }
    function N(e) {
      return { id: e.id, name: e.label, email: e.secondaryLabel, recipient: e }
    }
    function F(e) {
      let { id: r } = e
      return r
    }
    function P(e) {
      let { id: r } = e
      return r
    }
    function D(e) {
      let { id: r } = e
      return r
    }
    function O(e) {
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
                ? (0, a.jsx)(g.e, { alt: "", colorKey: e.colorKey, name: e.label, size: "sm", src: null })
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
        s: function (e, r, { selectedIds: i, suggestionsAsOf: s, limit: l = 10 }) {
          let o = e.trim(),
            c = new Map()
          for (let e of r)
            for (let r of e ?? []) {
              if (!r.id.startsWith("user:") && !r.id.startsWith("group:")) continue
              let e = (0, a.Z)(r.id, r.label, r.id.startsWith("user:") ? r.secondaryLabel : void 0),
                i = null != e,
                n = r.id.startsWith("user:") ? (0, a.Z)(r.id, r.secondaryLabel) : r.secondaryLabel,
                s = i && (e !== r.label || n !== r.secondaryLabel) ? { ...r, label: e, secondaryLabel: n } : r,
                l = i ? (0, t.f)({ name: e, email: r.id.startsWith("group:") ? void 0 : n }, o) : 0,
                d = c.get(r.id)
              null == d
                ? c.set(r.id, { item: s, match: l, identified: i })
                : c.set(r.id, {
                    item: {
                      ...(l > d.match || (!d.identified && i) ? s : d.item),
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
                    match: Math.max(d.match, l),
                    identified: d.identified || i,
                  })
            }
          return [...c.values()]
            .filter(
              ({ item: e, match: r, identified: a }) =>
                a && !i.has(e.id) && ("" === o ? null == e.accessStatus : r > 0),
            )
            .sort((e, r) => r.match - e.match || n(r.item, s) - n(e.item, s) || e.item.id.localeCompare(r.item.id))
            .slice(0, l)
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
      o = i("bVeK")
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
            [f, g] = (0, l.useState)(null),
            _ = p?.url,
            y = "large" === m ? o.ixU : o.oJq,
            b = "icon-sm"
          ;("large" === m ? (b = "size-12") : "sidebar" === m && (b = "icon-leading"),
            u[0] !== b
              ? ((r = (0, s.A)("flex shrink-0 items-center justify-center", b)), (u[0] = b), (u[1] = r))
              : (r = u[1]))
          let w = null == h ? void 0 : "img"
          ;(u[2] !== y || u[3] !== f || u[4] !== m || u[5] !== b || u[6] !== _
            ? ((i =
                null == _ || _ === f
                  ? (0, a.jsx)(y, { className: (0, s.A)("text-secondary", "sidebar" === m && "icon-leading") })
                  : (0, a.jsx)("img", {
                      className: (0, s.A)("object-contain", b),
                      alt: "",
                      draggable: !1,
                      onError: () => g(_),
                      src: _,
                    })),
              (u[2] = y),
              (u[3] = f),
              (u[4] = m),
              (u[5] = b),
              (u[6] = _),
              (u[7] = i))
            : (i = u[7]),
            u[8] !== h || u[9] !== r || u[10] !== w || u[11] !== i
              ? ((c = (0, a.jsx)("span", { className: r, role: w, "aria-label": h, children: i })),
                (u[8] = h),
                (u[9] = r),
                (u[10] = w),
                (u[11] = i),
                (u[12] = c))
              : (c = u[12]))
          let v = c
          return (
            u[13] !== v || u[14] !== h
              ? ((d = null == h ? v : (0, a.jsx)(n.m, { content: h, children: v })),
                (u[13] = v),
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
//# sourceMappingURL=703143.284f480a6e.js.map
