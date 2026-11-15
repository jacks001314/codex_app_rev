export const __rspack_esm_ids = [193968]
export const __webpack_modules__ = {
  Mjk1(e, t, i) {
    e.exports = i.p + "assets/666b6a909293.svg"
  },
  W03Y(e, t, i) {
    e.exports = i.p + "assets/713c4292a1d8.svg"
  },
  kOeh(e, t, i) {
    i.d(t, { e: () => o })
    var a = i("ABep"),
      r = i("zd8w"),
      n = i("on57"),
      s = i("fZ4G")
    let l = ["blue", "red", "green", "light-blue", "yellow", "gray", "orange"],
      o = (e) => {
        let t = d(e.imageUrl)
        return (0, r.createElement)(c, { ...e, imageUrl: t, key: t })
      },
      c = (e) => {
        let {
            className: t,
            size: i,
            overflowCount: o,
            name: c,
            color: d = "secondary",
            colorFrom: h,
            variant: g = "soft",
            imageUrl: m,
            Icon: f,
            tooltipComponent: _,
            ...y
          } = e,
          [v, b] = (0, r.useState)(),
          w = !!(y.onPointerDown || y.onClick),
          x = null == h ? void 0 : l[h.split("").reduce((e, t) => e + t.charCodeAt(0), 0) % l.length],
          k = (0, a.jsx)(w ? "button" : "span", {
            className: (0, n.A)("Avatar-ZIKxFq", t),
            style: (0, s.mW)({
              "avatar-size": i,
              "avatar-background-color": null == x ? void 0 : `var(--color-avatar-${x})`,
              "avatar-text-color": null == x ? void 0 : "var(--color-avatar-foreground)",
            }),
            role: w ? void 0 : "presentation",
            "aria-label": w ? c : void 0,
            "data-color": d,
            "data-variant": g,
            type: w ? "button" : void 0,
            ...y,
            children:
              m && "error" !== v
                ? (0, a.jsx)(p, { status: v, url: m, onError: () => b("error"), onLoad: () => b("loaded") })
                : f
                  ? (0, a.jsx)(f, { className: "AvatarIcon-PmtHig" })
                  : o
                    ? (0, a.jsx)(u, { count: o })
                    : (0, a.jsx)("span", { className: "AvatarInitial-tg7FSE", children: c?.charAt(0).toUpperCase() }),
          })
        return c && _ ? (0, a.jsx)(_, { content: c, children: k }) : k
      },
      d = (e) => {
        if (e && !(e.includes("gravatar.com") && e.includes("cdn.auth0.com"))) return e
      },
      p = ({ url: e, status: t, onLoad: i, onError: r }) =>
        (0, a.jsx)("span", {
          className: "AvatarImageContainer-ewDD1N",
          children: (0, a.jsx)("img", {
            src: e,
            className: "AvatarImage-x8OSwL",
            "data-loaded": "loaded" === t ? "" : void 0,
            onLoad: i,
            onError: r,
            alt: "",
            role: "presentation",
          }),
        }),
      u = ({ count: e }) => {
        let t = new Intl.NumberFormat("en", { notation: "compact", compactDisplay: "short", maximumFractionDigits: 0 })
          .format(e)
          .toLocaleLowerCase()
        return (0, a.jsxs)("span", {
          className: "AvatarOverflowCount-xv6Nxk",
          "data-letter-count": t.length,
          children: [(0, a.jsx)("span", { className: "AvatarOverflowCountSymbol-IYYkRt", children: "+" }), t],
        })
      }
  },
  iFq6(e, t, i) {
    var a = i("zTeN"),
      r = i("OWtl"),
      n = i("nvO1")
    let s = (0, a.i1)(r.u, (e, { get: t }) => t(n.rN, e)),
      l = (0, a.i1)(r.u, (e, { get: t }) => {
        if (t(s, e)) {
          let { data: i, isError: a, isLoading: r } = t(n.IB, e)
          return { data: i?.filter((t) => t.workspace_id === e), isError: a, isLoading: r }
        }
        return null
      })
    i.d(t, {}, { l: l, w: s })
  },
  aRS8(e, t, i) {
    var a = i("ABep"),
      r = i("QosV"),
      n = i("T0Rc"),
      s = i("zd8w"),
      l = i("Wf1j"),
      o = i("oyxz"),
      c = i("bVeK"),
      d = i("AOG7"),
      p = i("glqn"),
      u = i("ajGH"),
      h = i("LKbA"),
      g = i("rvFo"),
      m = i("GEsy"),
      f = i("AEhU")
    function _(e) {
      let t,
        i,
        s,
        l,
        o,
        c,
        d,
        p,
        u = (0, r.c)(35)
      u[0] !== e.query ? ((t = e.query.trim().toLowerCase()), (u[0] = e.query), (u[1] = t)) : (t = u[1])
      let h = t,
        _ = (0, m.o)(h, 150)
      u[2] !== e.currentEmail || u[3] !== e.existingEmails || u[4] !== h
        ? ((i = (0, f.on)({ query: h, selected: [], currentEmail: e.currentEmail, existingEmails: e.existingEmails })),
          (u[2] = e.currentEmail),
          (u[3] = e.existingEmails),
          (u[4] = h),
          (u[5] = i))
        : (i = u[5])
      let y = i.selected
      u[6] !== y || u[7] !== e.disabled || u[8] !== e.selected || u[9] !== h
        ? ((s =
            !e.disabled &&
            1 === y.length &&
            y[0]?.isValid === !0 &&
            y[0].label === h &&
            !e.selected.some((e) => {
              let { id: t } = e
              return t === y[0]?.id
            })),
          (u[6] = y),
          (u[7] = e.disabled),
          (u[8] = e.selected),
          (u[9] = h),
          (u[10] = s))
        : (s = u[10])
      let v = s
      u[11] !== e.accountId || u[12] !== e.currentPrincipalId || u[13] !== h
        ? ((l = ["library-sharing-recipient", e.accountId, e.currentPrincipalId, h]),
          (u[11] = e.accountId),
          (u[12] = e.currentPrincipalId),
          (u[13] = h),
          (u[14] = l))
        : (l = u[14])
      let b = v && h === _
      ;(u[15] !== e || u[16] !== h
        ? ((o = (t) => {
            let { signal: i } = t
            return e.resolveRecipient(h, AbortSignal.any([i, AbortSignal.timeout(7e3)]))
          }),
          (u[15] = e),
          (u[16] = h),
          (u[17] = o))
        : (o = u[17]),
        u[18] !== l || u[19] !== b || u[20] !== o
          ? ((c = { queryKey: l, enabled: b, staleTime: g.D.ONE_MINUTE, networkMode: "always", retry: !1, queryFn: o }),
            (u[18] = l),
            (u[19] = b),
            (u[20] = o),
            (u[21] = c))
          : (c = u[21]))
      let { data: w, isFetching: x, isError: S } = (0, n.I)(c)
      u[22] !== v || u[23] !== y || u[24] !== w?.eligible || u[25] !== _ || u[26] !== S || u[27] !== x || u[28] !== h
        ? ((d = v && !x && !S && h === _ && w?.eligible ? y : []),
          (u[22] = v),
          (u[23] = y),
          (u[24] = w?.eligible),
          (u[25] = _),
          (u[26] = S),
          (u[27] = x),
          (u[28] = h),
          (u[29] = d))
        : (d = u[29])
      let j = v && (x || h !== _)
      return (
        u[30] !== S || u[31] !== e || u[32] !== d || u[33] !== j
          ? ((p = (0, a.jsx)(k, { ...e, options: d, isLoading: j, searchFailed: S })),
            (u[30] = S),
            (u[31] = e),
            (u[32] = d),
            (u[33] = j),
            (u[34] = p))
          : (p = u[34]),
        p
      )
    }
    function y(e) {
      let t,
        i,
        n,
        s,
        l,
        o,
        c,
        p,
        u,
        h,
        g = (0, r.c)(37),
        { data: m, isFetching: f, isPending: _, isError: y } = (0, d.Nv)(e.disabled ? "" : e.query),
        S = `user:${e.currentPrincipalId}`
      g[0] !== e.existingPrincipalKeys || g[1] !== S
        ? ((t = new Set([...e.existingPrincipalKeys, S])), (g[0] = e.existingPrincipalKeys), (g[1] = S), (g[2] = t))
        : (t = g[2])
      let j = t,
        A = e.currentEmail ?? ""
      g[3] !== e.existingEmails || g[4] !== A
        ? ((i = new Set([...e.existingEmails, A].map(x))), (g[3] = e.existingEmails), (g[4] = A), (g[5] = i))
        : (i = g[5])
      let M = i
      g[6] !== e.selected ? ((n = new Set(e.selected.map(w))), (g[6] = e.selected), (g[7] = n)) : (n = g[7])
      let C = n
      g[8] !== e.selected ? ((s = new Set(e.selected.flatMap(b))), (g[8] = e.selected), (g[9] = s)) : (s = g[9])
      let I = s
      if (
        g[10] !== M ||
        g[11] !== j ||
        g[12] !== e.shares?.shares ||
        g[13] !== e.shares?.shares.filter ||
        g[14] !== I ||
        g[15] !== C ||
        g[16] !== m
      ) {
        let t,
          i = e.shares?.shares.filter(v)
        for (let e of ((l = (e, t) => {
          let a
          return (
            j.has(`group:${e}`) &&
              (a = i?.some(
                (t) =>
                  "principal" === t.recipient.recipient_type &&
                  "group" === t.recipient.principal_type &&
                  t.recipient.principal_id === e,
              )
                ? "pending"
                : "existing"),
            {
              id: `group:${e}`,
              label: t,
              accessStatus: a,
              recipient: { recipient_type: "principal", principal_type: "group", principal_id: e },
              isValid: !0,
            }
          )
        }),
        (o = []),
        g[19] !== m ? ((t = m ?? []), (g[19] = m), (g[20] = t)) : (t = g[20]),
        t)) {
          let t,
            a = `user:${e.account_user_id}`
          C.has(a) ||
            (null != e.email && I.has(e.email.trim().toLowerCase())) ||
            ((j.has(a) || (null != e.email && M.has(e.email.trim().toLowerCase()))) &&
              (t = i?.some((t) =>
                "principal" === t.recipient.recipient_type
                  ? (t.recipient.principal_type ?? "user") === "user" && t.recipient.principal_id === e.account_user_id
                  : t.recipient.email.trim().toLowerCase() === e.email?.trim().toLowerCase(),
              )
                ? "pending"
                : "existing"),
            o.push({
              id: a,
              colorKey: e.account_user_id,
              label: e.name || e.email || e.account_user_id,
              secondaryLabel: e.email ?? void 0,
              accessStatus: t,
              recipient: { recipient_type: "principal", principal_type: "user", principal_id: e.account_user_id },
              isValid: !0,
            }))
        }
        ;((g[10] = M),
          (g[11] = j),
          (g[12] = e.shares?.shares),
          (g[13] = e.shares?.shares.filter),
          (g[14] = I),
          (g[15] = C),
          (g[16] = m),
          (g[17] = l),
          (g[18] = o))
      } else ((l = g[17]), (o = g[18]))
      ;(g[21] !== l || g[22] !== e.allowGroups
        ? ((c = e.allowGroups ? (e) => l(e.id, e.name) : void 0), (g[21] = l), (g[22] = e.allowGroups), (g[23] = c))
        : (c = g[23]),
        g[24] !== l ? ((p = (e) => l(e.id, e.name)), (g[24] = l), (g[25] = p)) : (p = g[25]))
      let q = _ || f
      return (
        g[26] !== e.query || g[27] !== I
          ? ((u = "" !== e.query.trim() && I.has(e.query.trim().toLowerCase())),
            (g[26] = e.query),
            (g[27] = I),
            (g[28] = u))
          : (u = g[28]),
        g[29] !== o || g[30] !== e || g[31] !== c || g[32] !== p || g[33] !== q || g[34] !== u || g[35] !== y
          ? ((h = (0, a.jsx)(k, {
              ...e,
              getGroupRecipient: c,
              getTeamRecipient: p,
              options: o,
              isLoading: q,
              queryAlreadyAdded: u,
              searchFailed: y,
            })),
            (g[29] = o),
            (g[30] = e),
            (g[31] = c),
            (g[32] = p),
            (g[33] = q),
            (g[34] = u),
            (g[35] = y),
            (g[36] = h))
          : (h = g[36]),
        h
      )
    }
    function v(e) {
      return "pending" === e.status
    }
    function b(e) {
      return null == e.secondaryLabel ? [] : [e.secondaryLabel.trim().toLowerCase()]
    }
    function w(e) {
      return e.id
    }
    function x(e) {
      return e.trim().toLowerCase()
    }
    function k(e) {
      let t,
        i,
        n,
        c,
        d,
        g,
        m,
        f,
        _,
        y,
        v,
        b,
        w,
        x,
        k,
        I,
        q,
        E,
        L = (0, r.c)(61)
      L[0] !== e
        ? (({
            getGroupRecipient: t,
            getTeamRecipient: i,
            options: n,
            queryAlreadyAdded: d,
            searchFailed: g,
            isLoading: m,
            ...c
          } = e),
          (L[0] = e),
          (L[1] = t),
          (L[2] = i),
          (L[3] = n),
          (L[4] = c),
          (L[5] = d),
          (L[6] = g),
          (L[7] = m))
        : ((t = L[1]), (i = L[2]), (n = L[3]), (c = L[4]), (d = L[5]), (g = L[6]), (m = L[7]))
      let P = void 0 !== d && d,
        N = void 0 !== g && g,
        O = void 0 !== m && m,
        T = (0, l.A)(),
        R = (0, s.useId)(),
        $ = c.selected.some(C),
        D = c.disabled || (c.isWorkspace && !c.canSearchMembers),
        U = null
      if ($) {
        let e
        ;(L[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(o.A, {
              id: "librarySharing.invite.invalidEmails",
              defaultMessage: "Remove invalid email addresses before inviting",
              description:
                "Inline error in the Library sharing dialog after invalid email addresses have become selected tokens; the user must remove those tokens before sending invitations",
            })),
            (L[8] = e))
          : (e = L[8]),
          (U = e))
      } else if (P) {
        let e
        ;(L[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(o.A, {
              id: "librarySharing.invite.alreadyAdded",
              defaultMessage: "This person already has access or is selected",
              description:
                "Inline feedback in the Library sharing dialog when an entered email belongs to the owner, an existing collaborator, or an already selected invitee",
            })),
            (L[9] = e))
          : (e = L[9]),
          (U = e))
      }
      L[10] !== U || L[11] !== R || L[12] !== c.ariaDescribedBy
        ? ((f = [c.ariaDescribedBy, null == U ? void 0 : R].filter(M).join(" ") || void 0),
          (L[10] = U),
          (L[11] = R),
          (L[12] = c.ariaDescribedBy),
          (L[13] = f))
        : (f = L[13])
      let F = f,
        W = null
      if (c.selected.length > 0 && null != c.role && null != c.allowedRoles) {
        let e
        ;(L[14] !== D || L[15] !== c.allowedRoles || L[16] !== c.onRoleChange || L[17] !== c.role
          ? ((e =
              c.allowedRoles.length > 1
                ? (0, a.jsx)(p.e, {
                    indicatorVariant: "checkmark",
                    variant: "inline",
                    renderLabel: A,
                    disabled: D,
                    options: c.allowedRoles.map(j),
                    value: c.role,
                    onChange: c.onRoleChange,
                  })
                : (0, a.jsx)("span", {
                    className: "text-tertiary",
                    children: (0, a.jsx)(h.u, { permission: c.role }),
                  })),
            (L[14] = D),
            (L[15] = c.allowedRoles),
            (L[16] = c.onRoleChange),
            (L[17] = c.role),
            (L[18] = e))
          : (e = L[18]),
          (W = e))
      }
      L[19] !== T
        ? ((_ = T.formatMessage({
            id: "librarySharing.invite.personalPlaceholder",
            defaultMessage: "Add emails",
            description:
              "Placeholder and accessible label in the Library sharing recipient input for personal accounts; users enter an email address and select a validated recipient",
          })),
          (L[19] = T),
          (L[20] = _))
        : (_ = L[20])
      let z = _
      L[21] !== T
        ? ((y = (e) =>
            T.formatMessage(
              {
                id: "librarySharing.invite.removeSelection",
                defaultMessage: "Remove {name} from the invitation",
                description:
                  "Accessible label of a selected Library sharing recipient's remove button; name is the person's display name, group name, or email address",
              },
              { name: e.label },
            )),
          (L[21] = T),
          (L[22] = y))
        : (y = L[22])
      let G = y
      return (
        L[23] !== z || L[24] !== c.isWorkspace
          ? ((v = c.isWorkspace ? void 0 : { people: z, peopleAndTeams: z }),
            (L[23] = z),
            (L[24] = c.isWorkspace),
            (L[25] = v))
          : (v = L[25]),
        L[26] !== n ? ((b = n?.map(S)), (L[26] = n), (L[27] = b)) : (b = L[27]),
        L[28] !== T || L[29] !== c.isWorkspace
          ? ((w = c.isWorkspace
              ? T.formatMessage({
                  id: "librarySharing.invite.searching",
                  defaultMessage: "Searching workspace members",
                  description:
                    "Accessible status while the Library sharing picker searches the current workspace for recipients",
                })
              : T.formatMessage({
                  id: "librarySharing.invite.searchingRecipients",
                  defaultMessage: "Searching for people",
                  description:
                    "Accessible status while the Library sharing picker checks whether the entered email is eligible for sharing",
                })),
            (L[28] = T),
            (L[29] = c.isWorkspace),
            (L[30] = w))
          : (w = L[30]),
        L[31] !== c.isWorkspace
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
            (L[31] = c.isWorkspace),
            (L[32] = x))
          : (x = L[32]),
        L[33] !== F ||
        L[34] !== D ||
        L[35] !== t ||
        L[36] !== G ||
        L[37] !== i ||
        L[38] !== O ||
        L[39] !== c.accountId ||
        L[40] !== c.onChange ||
        L[41] !== c.onQueryChange ||
        L[42] !== c.query ||
        L[43] !== c.selected ||
        L[44] !== W ||
        L[45] !== N ||
        L[46] !== x ||
        L[47] !== v ||
        L[48] !== b ||
        L[49] !== w
          ? ((k = (0, a.jsx)(u.B, {
              accountId: c.accountId,
              getTeamRecipient: i,
              getGroupRecipient: t,
              ariaDescribedBy: F,
              disabled: D,
              placeholder: v,
              selectedOptions: c.selected,
              getRemoveLabel: G,
              options: b,
              onChange: c.onChange,
              query: c.query,
              onQueryChange: c.onQueryChange,
              isLoading: O,
              searchFailed: N,
              loadingLabel: w,
              emptyMessage: x,
              trailingContent: W,
            })),
            (L[33] = F),
            (L[34] = D),
            (L[35] = t),
            (L[36] = G),
            (L[37] = i),
            (L[38] = O),
            (L[39] = c.accountId),
            (L[40] = c.onChange),
            (L[41] = c.onQueryChange),
            (L[42] = c.query),
            (L[43] = c.selected),
            (L[44] = W),
            (L[45] = N),
            (L[46] = x),
            (L[47] = v),
            (L[48] = b),
            (L[49] = w),
            (L[50] = k))
          : (k = L[50]),
        L[51] !== U || L[52] !== R
          ? ((I =
              null == U
                ? null
                : (0, a.jsx)("p", { id: R, className: "text-sm text-danger", role: "alert", children: U })),
            (L[51] = U),
            (L[52] = R),
            (L[53] = I))
          : (I = L[53]),
        L[54] !== c.canSearchMembers || L[55] !== c.isWorkspace
          ? ((q =
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
            (L[54] = c.canSearchMembers),
            (L[55] = c.isWorkspace),
            (L[56] = q))
          : (q = L[56]),
        L[57] !== k || L[58] !== I || L[59] !== q
          ? ((E = (0, a.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col gap-2", children: [k, I, q] })),
            (L[57] = k),
            (L[58] = I),
            (L[59] = q),
            (L[60] = E))
          : (E = L[60]),
        E
      )
    }
    function S(e) {
      return {
        ...e,
        Icon: "principal" === e.recipient.recipient_type && "group" === e.recipient.principal_type ? c.oJq : void 0,
      }
    }
    function j(e) {
      return { value: e }
    }
    function A(e) {
      return (0, a.jsx)(h.u, { permission: e })
    }
    function M(e) {
      return null != e
    }
    function C(e) {
      return !e.isValid
    }
    i.d(
      t,
      {},
      {
        h: function (e) {
          let t,
            i = (0, r.c)(5)
          if (e.isWorkspace && e.canSearchMembers) {
            let t,
              r = `${e.accountId}:${e.allowGroups}`
            return (
              i[0] !== e || i[1] !== r
                ? ((t = (0, a.jsx)(y, { ...e }, r)), (i[0] = e), (i[1] = r), (i[2] = t))
                : (t = i[2]),
              t
            )
          }
          return (
            i[3] !== e
              ? ((t = e.isWorkspace ? (0, a.jsx)(k, { ...e }) : (0, a.jsx)(_, { ...e })), (i[3] = e), (i[4] = t))
              : (t = i[4]),
            t
          )
        },
      },
    )
  },
  AEhU(e, t, i) {
    var a = i("ASxG"),
      r = i("nqea")
    let n = /[\s,;]+/,
      s = a.email()
    i.d(
      t,
      {},
      {
        Go: function (e, t, i) {
          return e.some(({ recipient: e, secondaryLabel: a }) =>
            "email" === e.recipient_type
              ? t.has(e.email.trim().toLowerCase())
              : i.has(`${e.principal_type ?? "user"}:${e.principal_id}`) ||
                (null != a && t.has(a.trim().toLowerCase())),
          )
        },
        Hd: function (e, t, i) {
          return {
            existingPrincipalKeys: new Set([
              (0, r.nD)(e.owner.principal),
              (0, r.nD)(e.viewer.principal),
              ...(t?.shares.flatMap((e) =>
                "principal" === e.recipient.recipient_type
                  ? [`${e.recipient.principal_type ?? "user"}:${e.recipient.principal_id}`]
                  : [],
              ) ?? []),
              ...(i?.collaborators.map(({ principal: e }) => (0, r.nD)(e)) ?? []),
            ]),
            existingEmails: new Set(
              [
                e.owner.email,
                e.viewer.email,
                ...(t?.shares.map((e) =>
                  "email" === e.recipient.recipient_type ? e.recipient.email : e.recipient_email,
                ) ?? []),
                ...(i?.collaborators.map(({ email: e }) => e) ?? []),
              ].flatMap((e) => (null == e ? [] : [e.trim().toLowerCase()])),
            ),
          }
        },
        on: function ({ query: e, selected: t, currentEmail: i, existingEmails: a }) {
          let r = [...t],
            l = new Set([...a, i ?? ""].map((e) => e.trim().toLowerCase())),
            o = new Set(t.map((e) => e.id)),
            c = !1
          for (let t of e.split(n)) {
            let e = t.trim().toLowerCase()
            if ("" === e) continue
            let i = `email:${e}`
            if (l.has(e) || o.has(i)) {
              c = !0
              continue
            }
            ;(o.add(i),
              r.push({
                id: i,
                label: e,
                recipient: { recipient_type: "email", email: e },
                isValid: s.safeParse(e).success,
              }))
          }
          return { selected: r, rejectedExisting: c }
        },
      },
    )
  },
  uQ1J(e, t, i) {
    i.d(t, { k: () => u })
    var a = i("ABep"),
      r = i("DBCl"),
      n = i("amW0"),
      s = i("jTFC"),
      l = i("q3j5"),
      o = i("QosV"),
      c = i("zTeN"),
      d = i("oz6U")
    function p(e) {
      let t,
        i,
        r = (0, o.c)(5),
        { className: n, conversationId: l } = e,
        p = (0, c._U)(d.Hx, l),
        u = p?.avatar ?? null
      return (
        r[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, a.jsx)(a.Fragment, {})), (r[0] = t)) : (t = r[0]),
        r[1] !== n || r[2] !== l || r[3] !== u
          ? ((i = (0, a.jsx)(s.Xm, { className: n, avatar: u, identity: l, animated: !1, loadingFallback: t })),
            (r[1] = n),
            (r[2] = l),
            (r[3] = u),
            (r[4] = i))
          : (i = r[4]),
        i
      )
    }
    function u(e, t, i) {
      let o = "shared" === e.scope || null == e.active_root_thread_id ? null : (0, r.JXB)(e.active_root_thread_id),
        c = (0, a.jsx)(a.Fragment, {})
      return (
        "shared" === e.scope
          ? (c = (0, a.jsx)(s.QR, { className: i, profile: e }))
          : null != o && (c = (0, a.jsx)(p, { className: i, conversationId: o })),
        { conversationId: o, title: (0, l.x)(e.display_name) ? t.formatMessage(n.z) : e.display_name, icon: c }
      )
    }
  },
  btiy(e, t, i) {
    var a = i("zTeN"),
      r = i("SPnB"),
      n = i("svjy"),
      s = i("imTH"),
      l = i("uQ1J"),
      o = i("OWtl")
    let c = (0, a.i1)(o.u, ({ workspaceId: e, query: t }, { get: i }) => {
      let a = t.trim().replace(/^@/u, "").toLocaleLowerCase()
      if (!a || null == e || e !== i(r.chatGptAuthenticatedAccountId$)) return []
      let o = i(n.g)
      return i(s.e).flatMap((e) => {
        let t = e.service_account_account_user_id
        if (null == t) return []
        let { title: i, icon: r } = (0, l.k)(e, o, "size-5")
        return i.toLocaleLowerCase().includes(a)
          ? [
              {
                id: `user:${t}`,
                accountUserId: t,
                label: i,
                avatar: r,
                secondaryLabel: o.formatMessage(
                  {
                    id: "sharing.dotLabel",
                    defaultMessage: "{dot}",
                    description:
                      "Label below an agent's name in a team member list or sharing dialog. {dot} is the untranslated product term Dot.",
                  },
                  { dot: "Dot" },
                ),
              },
            ]
          : []
      })
    })
    i.d(t, {}, { $: c })
  },
  KbJc(e, t, i) {
    i.d(t, { RequestShareForm: () => D })
    var a = i("ABep"),
      r = i("QosV"),
      n = i("T0Rc"),
      s = i("xSOA"),
      l = i("zTeN"),
      o = i("DBCl"),
      c = i("zd8w"),
      d = i("oyxz"),
      p = i("eKNk"),
      u = i("SPnB"),
      h = i("eFn4"),
      g = i("Ghh3"),
      m = i("OAko"),
      f = i("LhhH"),
      _ = i("TjgH"),
      y = i("zKCW"),
      v = i("mUDD"),
      b = i("SGsN"),
      w = i("z0yV"),
      x = i("EqWS"),
      k = i("pyoT"),
      S = i("OWtl"),
      j = i("wuZu"),
      A = i("IZAr"),
      M = i("jnsB"),
      C = i("glqn"),
      I = i("CFGX"),
      q = i("LKbA"),
      E = i("rvFo"),
      L = i("eShZ"),
      P = i("hwkA"),
      N = i("cfLx"),
      O = i("LxX1"),
      T = i("FwqS")
    function R(e) {
      let t,
        i,
        n,
        s,
        o,
        c,
        p,
        u,
        h,
        g,
        m = (0, r.c)(37),
        {
          target: f,
          pageId: _,
          requestFor: y,
          onClose: v,
          onRequestClose: b,
          onSubmit: w,
          isPending: x,
          isQueued: S,
          linkButton: j,
          children: A,
        } = e,
        M = void 0 !== x && x,
        C = void 0 !== S && S,
        I = (0, l._U)(k.loadedSpacePageMetadata$, "self" === y ? _ : null)
      m[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, a.jsx)(d.A, {
            id: "codex.pages.requestShare.send",
            defaultMessage: "Send request",
            description:
              "Button asking a Page or Space owner to approve your selected access and any selected people or groups",
          })),
          (m[0] = t))
        : (t = m[0])
      let q = t
      if ("self" === y) {
        let e
        ;(m[1] !== M || m[2] !== C
          ? ((e =
              C || M
                ? (0, a.jsx)(d.A, {
                    id: "codex.pages.requestAccess.sending",
                    defaultMessage: "Sending…",
                    description: "Button label while checking and sending a higher access request",
                  })
                : (0, a.jsx)(d.A, {
                    id: "codex.pages.requestAccess.send",
                    defaultMessage: "Send",
                    description: "Button sending a request for a higher Page or Space role to its owner",
                  })),
            (m[1] = M),
            (m[2] = C),
            (m[3] = e))
          : (e = m[3]),
          (q = e))
      }
      ;(m[4] !== y || m[5] !== f.id || m[6] !== f.kind
        ? ((i =
            "self" === y
              ? (0, a.jsx)(d.A, {
                  id: "codex.pages.requestAccess.title",
                  defaultMessage: "Request access",
                  description: "Title of the dialog for requesting a higher Page or Space role for yourself",
                })
              : (0, a.jsx)(O.r, { kind: f.kind, id: f.id, action: "ask" })),
          (m[4] = y),
          (m[5] = f.id),
          (m[6] = f.kind),
          (m[7] = i))
        : (i = m[7]),
        m[8] !== I?.document_type || m[9] !== _ || m[10] !== y || m[11] !== f.kind
          ? ((n =
              "self" === y
                ? (0, a.jsx)(d.A, {
                    id: "codex.pages.requestAccess.descriptionByKind.byDocumentType",
                    defaultMessage:
                      "{kind, select, space {Your request will be sent to the space owner} other {{documentType, select, granola_presentation {Your request will be sent to the slide owner} granola_workbook {Your request will be sent to the sheet owner} other {Your request will be sent to the page owner}}}}",
                    description:
                      "Explains that higher access requires approval from the owner of the selected Page or Space; kind identifies the resource receiving the request. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation. documentType selects slide, sheet, or page for the current document.",
                    values: { documentType: I?.document_type ?? "page", kind: f.kind },
                  })
                : (0, a.jsx)(N.Z, { kind: f.kind, pageId: _ })),
            (m[8] = I?.document_type),
            (m[9] = _),
            (m[10] = y),
            (m[11] = f.kind),
            (m[12] = n))
          : (n = m[12]),
        m[13] !== w ? ((s = () => w?.()), (m[13] = w), (m[14] = s)) : (s = m[14]),
        m[15] !== j
          ? ((o = (0, a.jsx)("div", { className: "me-auto", children: j })), (m[15] = j), (m[16] = o))
          : (o = m[16]),
        m[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)(d.A, {
              id: "shareDialog.primaryAction.cancel",
              defaultMessage: "Cancel",
              description: "Button label for cancelling staged changes in a share dialog",
            })),
            (m[17] = c))
          : (c = m[17]),
        m[18] !== M || m[19] !== v
          ? ((p = (0, a.jsx)(P.$, {
              color: "secondary",
              variant: "outline",
              size: "xl",
              type: "button",
              disabled: M,
              onClick: v,
              children: c,
            })),
            (m[18] = M),
            (m[19] = v),
            (m[20] = p))
          : (p = m[20]))
      let E = null == w || M || C,
        L = M && "self" !== y
      return (
        m[21] !== q || m[22] !== E || m[23] !== L
          ? ((u = (0, a.jsx)(P.$, {
              color: "primary",
              disabledTone: "dimmed",
              size: "xl",
              type: "submit",
              disabled: E,
              loading: L,
              children: q,
            })),
            (m[21] = q),
            (m[22] = E),
            (m[23] = L),
            (m[24] = u))
          : (u = m[24]),
        m[25] !== u || m[26] !== o || m[27] !== p
          ? ((h = (0, a.jsxs)(a.Fragment, { children: [o, p, u] })), (m[25] = u), (m[26] = o), (m[27] = p), (m[28] = h))
          : (h = m[28]),
        m[29] !== A || m[30] !== M || m[31] !== b || m[32] !== h || m[33] !== i || m[34] !== n || m[35] !== s
          ? ((g = (0, a.jsx)(T.$t, {
              title: i,
              subtitle: n,
              isDismissalDisabled: M,
              onRequestClose: b,
              onSubmit: s,
              footer: h,
              children: A,
            })),
            (m[29] = A),
            (m[30] = M),
            (m[31] = b),
            (m[32] = h),
            (m[33] = i),
            (m[34] = n),
            (m[35] = s),
            (m[36] = g))
          : (g = m[36]),
        g
      )
    }
    var $ = i("Zgpy")
    function D(e) {
      let t,
        i = (0, r.c)(3),
        n = (0, l.Ul)(k.spaceAccountId$),
        s = (0, l.Ul)(u.chatGptAuthenticatedUserId$),
        o = `${n}:${s}:${e.target.kind}:${e.target.id}:${e.pageId}:${e.requestFor}`
      return (
        i[0] !== e || i[1] !== o ? ((t = (0, a.jsx)(U, { ...e }, o)), (i[0] = e), (i[1] = o), (i[2] = t)) : (t = i[2]),
        t
      )
    }
    function U(e) {
      let t,
        i,
        P,
        N,
        O,
        T,
        D,
        U,
        ei,
        ea,
        er,
        en,
        es,
        el,
        eo,
        ec,
        ed,
        ep,
        eu,
        eh,
        eg,
        em,
        ef,
        e_,
        ey,
        ev = (0, r.c)(89),
        { target: eb, pageId: ew, requestFor: ex, copyLinkSpaceId: ek, others: eS, onClose: ej } = e,
        eA = (0, l.gh)(S.u),
        eM = (0, l.Ul)(k.spaceAccountId$),
        eC = (0, l.Ul)(u.chatGptAuthenticatedUserId$),
        eI = (0, l.Ul)($.dt),
        { data: eq, isError: eE, refetch: eL } = (0, m.oV)(),
        eP = eq?.accounts?.find((e) => e.id === eM),
        eN = eI && "others" === ex && eP?.structure === "workspace"
      ev[0] !== eN ? ((t = { enabled: eN }), (ev[0] = eN), (ev[1] = t)) : (t = ev[1])
      let { data: eO, isError: eT, refetch: eR } = (0, l._U)(h.Jk, eM ?? "", t),
        e$ = null == eP ? void 0 : (0, I.V)(eP, eO, eT),
        eD = eI && !eE && null != eM && null != eC && ("self" === ex ? (0, $.BI)(eP) : eP?.structure === "workspace"),
        eU = eD && "others" === ex && null != eS && null != eO && !eT && e$?.canSearchMembers === !0
      ev[2] === Symbol.for("react.memo_cache_sentinel") ? ((i = new AbortController()), (ev[2] = i)) : (i = ev[2])
      let eF = (0, c.useRef)(i)
      ;(ev[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = () => {
            let e = new AbortController()
            return ((eF.current = e), () => e.abort())
          }),
          (N = []),
          (ev[3] = P),
          (ev[4] = N))
        : ((P = ev[3]), (N = ev[4])),
        (0, c.useLayoutEffect)(P, N))
      let [eW, ez] = (0, c.useState)("viewer"),
        eG = (0, l._U)(k.loadedSpacePageMetadata$, "self" === ex ? ew : null)?.access,
        eK = []
      eG?.can_read &&
        !1 === eG.can_write &&
        !1 === eG.can_share &&
        (!1 === eG.can_comment && eK.push("commenter"), eK.push("editor"))
      let [eB, eQ] = (0, c.useState)("self" === ex ? "editor" : void 0),
        [eH, eV] = (0, c.useState)(),
        [eY, eZ] = (0, c.useState)(!1),
        eX = (0, c.useRef)(null)
      ev[5] === Symbol.for("react.memo_cache_sentinel") ? ((O = []), (ev[5] = O)) : (O = ev[5])
      let [eJ, e0] = (0, c.useState)(O),
        [e1, e2] = (0, c.useState)("")
      ev[6] !== eM || ev[7] !== eb.id || ev[8] !== eb.kind || ev[9] !== eC
        ? ((T = ["space", "submitted-access", eC, eM, eb.kind, eb.id]),
          (ev[6] = eM),
          (ev[7] = eb.id),
          (ev[8] = eb.kind),
          (ev[9] = eC),
          (ev[10] = T))
        : (T = ev[10])
      let e3 = T
      ev[11] !== e3 || ev[12] !== eA
        ? ((D = () => (eA.queryClient.getQueryData(e3) ?? []).filter(X)), (ev[11] = e3), (ev[12] = eA), (ev[13] = D))
        : (D = ev[13])
      let { data: e4 } = (0, n.I)({
        queryKey: e3,
        enabled: eD,
        networkMode: "always",
        staleTime: 0,
        gcTime: E.D.ONE_MINUTE,
        refetchOnMount: "always",
        queryFn: D,
        refetchInterval: Z,
      })
      ev[14] !== e4 ? ((U = void 0 === e4 ? [] : e4), (ev[14] = e4), (ev[15] = U)) : (U = ev[15])
      let e5 = U
      ev[16] !== eM || ev[17] !== eb.id || ev[18] !== eb.kind || ev[19] !== eC
        ? ((ei = ["space", "requested-access", eC, eM, eb.kind, eb.id]),
          (ev[16] = eM),
          (ev[17] = eb.id),
          (ev[18] = eb.kind),
          (ev[19] = eC),
          (ev[20] = ei))
        : (ei = ev[20])
      let e6 = ei
      ev[21] !== eM || ev[22] !== ex || ev[23] !== eA || ev[24] !== eC
        ? ((ea = function () {
            let e = eA.queryClient.getQueryState(["accounts", "check"]),
              t = e?.data?.accounts?.find((e) => e.id === eM)
            return (
              e?.status === "success" &&
              null != eM &&
              null != eC &&
              eA.get(k.spaceAccountId$) === eM &&
              eA.get(u.chatGptAuthenticatedUserId$) === eC &&
              eA.get($.dt) &&
              ("self" === ex ? (0, $.BI)(t) : t?.structure === "workspace")
            )
          }),
          (ev[21] = eM),
          (ev[22] = ex),
          (ev[23] = eA),
          (ev[24] = eC),
          (ev[25] = ea))
        : (ea = ev[25])
      let e7 = ea
      ev[26] !== eM ||
      ev[27] !== e7 ||
      ev[28] !== ew ||
      ev[29] !== e3 ||
      ev[30] !== eA ||
      ev[31] !== eb ||
      ev[32] !== eC
        ? ((er = async (e) => {
            let { signal: t } = e
            if (null == eM || null == eC || !e7()) throw Error("pages_disabled")
            let i = (0, k.watchSpaceAccount)(eA, eM, eC),
              a = AbortSignal.any([t, eF.current.signal, i.signal])
            return (async function (e, t) {
              let i,
                a = [],
                r = new Set()
              for (let n = 0; n < 20; n += 1) {
                t.throwIfAborted()
                let n = await (0, o._qC)(
                  "page" === e.kind
                    ? g.Request.safeGet("/pages/{page_id}/access-requests/requested", {
                        parameters: { path: { page_id: e.id }, query: { cursor: i, limit: 100 } },
                        signal: t,
                      })
                    : g.Request.safeGet("/spaces/v2/{space_id}/access-requests/requested", {
                        parameters: { path: { space_id: e.id }, query: { cursor: i, limit: 100 } },
                        signal: t,
                      }),
                  t,
                )
                if ((t.throwIfAborted(), a.push(...n.requests), null == n.next_cursor)) return { ...n, requests: a }
                if (r.has(n.next_cursor)) throw Error("access_request_cursor_repeated")
                ;((i = n.next_cursor), r.add(i))
              }
              throw Error("access_request_pagination_limit_exceeded")
            })(eb, a)
              .then(async (e) => {
                a.throwIfAborted()
                let t = eA.get(k.loadedSpacePageMetadata$, ew)?.access,
                  i = "viewer"
                if (
                  (t?.can_write ? (i = "editor") : t?.can_comment && (i = "commenter"),
                  null != e.current_role && null != t && e.current_role !== i)
                ) {
                  let [e] = await (0, o._qC)(
                    Promise.allSettled([
                      eA.get(k.spacePageQuery$, ew).refetch({ throwOnError: !0 }),
                      "space" === eb.kind ? eA.get(w.sB, eb.id).refetch({ throwOnError: !0 }) : void 0,
                    ]),
                    a,
                  )
                  if ((a.throwIfAborted(), "fulfilled" === e.status && null != e.value.data)) {
                    let t = e.value.data.metadata
                    ;(0, x.oC)(eA, eM, (e) => (e.page_id === ew ? { ...e, access: t.access } : e), void 0)
                  }
                }
                let r = new Set(e.requests.flatMap(Y))
                return (
                  eA.queryClient.setQueryData(e3, (e) =>
                    e?.flatMap((e) => {
                      let t = e.recipients?.filter((t) => !r.has(et(e, t)))
                      return t?.length ? [{ ...e, recipients: t }] : []
                    }),
                  ),
                  e
                )
              })
              .catch((e) => {
                throw (
                  !a.aborted &&
                    e instanceof L.fk &&
                    [401, 403, 404, 410].includes(e.status) &&
                    eA.queryClient.setQueryData(e3, []),
                  e
                )
              })
              .finally(i.stop)
          }),
          (ev[26] = eM),
          (ev[27] = e7),
          (ev[28] = ew),
          (ev[29] = e3),
          (ev[30] = eA),
          (ev[31] = eb),
          (ev[32] = eC),
          (ev[33] = er))
        : (er = ev[33])
      let {
          data: e8,
          isFetching: e9,
          isError: te,
          isFetchedAfterMount: tt,
          refetch: ti,
        } = (0, n.I)({
          queryKey: e6,
          enabled: eD,
          staleTime: 0,
          gcTime: 0,
          retry: !1,
          refetchOnMount: "always",
          refetchOnWindowFocus: "always",
          queryFn: er,
        }),
        ta = eD && tt && !te ? e8 : void 0,
        tr = ta?.requestable_roles?.filter(V)
      ev[34] !== ta?.requests ? ((en = ta?.requests ?? []), (ev[34] = ta?.requests), (ev[35] = en)) : (en = ev[35])
      let tn = [...en, ...e5],
        ts = null != eB && null != ta ? J(ta, tn, eB) : void 0,
        tl =
          ("pending" === eH ? ts?.status : eH) ??
          (null != eB && null != tr && tr.length > 0 && !tr.includes(eB) ? "unavailable" : void 0),
        to = null != eB && null != ta && ts?.blocker == null,
        tc = new Set(
          tn
            .filter((e) => (e.requested_role ?? "viewer") === eW)
            .flatMap(H)
            .map(Q),
        ),
        td = Math.max(0, 100 - tc.size - (eB === eW && to ? 1 : 0))
      ev[36] !== ta
        ? ((es = (null == ta ? [] : [ta.owner, ta.requester]).map(B)), (ev[36] = ta), (ev[37] = es))
        : (es = ev[37])
      let tp = new Set([...tc, ...es]),
        tu = eJ.flatMap((e) => {
          let { recipient: t } = e
          return "principal" !== t.recipient_type ||
            ("user" !== t.principal_type && "group" !== t.principal_type) ||
            tp.has(`${t.principal_type}:${t.principal_id}`)
            ? []
            : [{ principal_type: t.principal_type, principal_id: t.principal_id }]
        }),
        th = async function (e, t) {
          let i, a
          if (null != e) {
            if ((null == eP && (await (0, o._qC)(eL({ cancelRefetch: !1 }), t)), t.aborted || !e7())) return !1
            let r = eA.queryClient.getQueryCache().find({ queryKey: e6, exact: !0 })
            if (null == r || "error" === r.state.status) return !1
            let n = r.state.data
            if (null == ta || "idle" !== r.state.fetchStatus) {
              let e
              ;(null != r.promise && (eD || "idle" !== r.state.fetchStatus)) || ti({ cancelRefetch: !1 })
              do {
                if (null == (e = r.promise) || t.aborted) return !1
                n = await (0, o._qC)(e, t).catch(K)
              } while (r.promise !== e)
            }
            if (null == n || t.aborted || !e7()) return !1
            let s = eA.queryClient.getQueryData(e3) ?? [],
              { blocker: l } = J(n, [...n.requests, ...s], e)
            if (null != l) return (eV(l), !1)
            ;((a = n.requester),
              (eX.current = "submitting"),
              eZ(!1),
              (i = await (async function (e, t, i, a) {
                a.throwIfAborted()
                let r = (0, p.l)(
                  e,
                  "access_request_command",
                  { resource_kind: t.kind, decision: "request_self", completion_mode: "submitted" },
                  a,
                )
                try {
                  let e = await (0, o._qC)(
                    "page" === t.kind
                      ? g.Request.safePost("/pages/{page_id}/access-requests/for-self", {
                          parameters: { path: { page_id: t.id } },
                          requestBody: i,
                          signal: a,
                        })
                      : g.Request.safePost("/spaces/v2/{space_id}/access-requests/for-self", {
                          parameters: { path: { space_id: t.id } },
                          requestBody: i,
                          signal: a,
                        }),
                    a,
                  )
                  return (a.throwIfAborted(), r("success"), e)
                } finally {
                  r(a.aborted ? "canceled" : "failure")
                }
              })(eA, eb, { role: e }, t)))
          } else {
            if (!eU || !e7() || null == ta || 0 === eJ.length || eJ.length !== tu.length || tu.length > td)
              throw Error("access_request_not_permitted")
            i = await (async function (e, t, i, a) {
              a.throwIfAborted()
              let r = (0, p.l)(
                e,
                "access_request_command",
                { resource_kind: t.kind, decision: "request_others", completion_mode: "submitted" },
                a,
              )
              try {
                let e = await (0, o._qC)(
                  "page" === t.kind
                    ? g.Request.safePost("/pages/{page_id}/access-requests/for-others", {
                        parameters: { path: { page_id: t.id } },
                        requestBody: i,
                        signal: a,
                      })
                    : g.Request.safePost("/spaces/v2/{space_id}/access-requests/for-others", {
                        parameters: { path: { space_id: t.id } },
                        requestBody: i,
                        signal: a,
                      }),
                  a,
                )
                return (a.throwIfAborted(), r("success"), e)
              } finally {
                r(a.aborted ? "canceled" : "failure")
              }
            })(eA, eb, { recipients: tu, role: eW }, t)
          }
          if (
            (t.throwIfAborted(),
            eA.get(k.spaceAccountId$) !== eM || eA.get(u.chatGptAuthenticatedUserId$) !== eC || !eA.get($.dt))
          )
            throw Error("pages_disabled")
          null != e ? eQ(void 0) : (e0([]), e2(""))
          let r = Date.now() + E.D.ONE_MINUTE
          eA.queryClient.setQueryData(e3, (e) => [...(void 0 === e ? [] : e), { ...i, expiresAt: r }])
          let n = (0, p.l)(
            eA,
            "access_request_refresh",
            { resource_kind: eb.kind, decision: "request", completion_mode: "submitted" },
            eF.current.signal,
          )
          ti().then(
            (e) => n(e.isError ? "failure" : "success"),
            () => n("failure"),
          )
          let s = i.recipients?.find((e) => {
            let { principal: t } = e
            return null != a && t.principal_type === a.principal_type && t.principal_id === a.principal_id
          })
          return null == s || "pending" === s.status || (eV(s.status), !1)
        }
      ;(ev[38] !== eM || ev[39] !== eA || ev[40] !== th || ev[41] !== eC
        ? ((el = async (e) => {
            if (null == eM || null == eC) throw Error("access_request_not_permitted")
            let t = (0, k.watchSpaceAccount)(eA, eM, eC),
              i = AbortSignal.any([eF.current.signal, t.signal, ...(null == e ? [] : [e.signal])])
            return th(e?.role, i)
              .catch((e) => {
                if (i.aborted) return !1
                throw e
              })
              .finally(t.stop)
          }),
          (ev[38] = eM),
          (ev[39] = eA),
          (ev[40] = th),
          (ev[41] = eC),
          (ev[42] = el))
        : (el = ev[42]),
        ev[43] === Symbol.for("react.memo_cache_sentinel")
          ? ((eo = (e, t, i) => {
              null != i && ((eX.current = null), eZ(!1))
            }),
            (ev[43] = eo))
          : (eo = ev[43]),
        ev[44] !== eM || ev[45] !== ex || ev[46] !== eA || ev[47] !== eC
          ? ((ec = (e) => {
              e &&
                !eF.current.signal.aborted &&
                eA.get(k.spaceAccountId$) === eM &&
                eA.get(u.chatGptAuthenticatedUserId$) === eC &&
                eA.get($.dt) &&
                eA
                  .get(b.Id)
                  .success(
                    "self" === ex
                      ? (0, a.jsx)(d.A, {
                          id: "codex.pages.requestAccess.pending",
                          defaultMessage: "Request pending",
                          description: "Confirmation that your request is awaiting the owner's decision",
                        })
                      : (0, a.jsx)(d.A, {
                          id: "codex.pages.requestShare.sent",
                          defaultMessage: "Request submitted",
                          description:
                            "Success toast after asking a Page or Space owner to change your access or grant other people access; access has not yet been granted",
                        }),
                  )
            }),
            (ev[44] = eM),
            (ev[45] = ex),
            (ev[46] = eA),
            (ev[47] = eC),
            (ev[48] = ec))
          : (ec = ev[48]),
        ev[49] !== el || ev[50] !== ec
          ? ((ed = { retry: !1, networkMode: "always", mutationFn: el, onSettled: eo, onSuccess: ec }),
            (ev[49] = el),
            (ev[50] = ec),
            (ev[51] = ed))
          : (ed = ev[51]))
      let { mutate: tg, isPending: tm, isError: tf } = (0, s.n)(ed),
        t_ = !eD || null == ta || e9 || tm,
        ty =
          !t_ &&
          (null != eB || eJ.length > 0) &&
          (null == eB || to) &&
          (0 === eJ.length || (eU && eJ.length <= td && tu.length === eJ.length)),
        tv = !te && !eE && (e9 || null == eP),
        tb = "self" === ex && null != eB && !tm && (null != ta ? to : eI && tv && eK.includes(eB))
      ev[52] === Symbol.for("react.memo_cache_sentinel")
        ? ((ep = function () {
            return "submitting" === eX.current ? "deny" : (eX.current?.abort(), "allow")
          }),
          (ev[52] = ep))
        : (ep = ev[52])
      let tw = ep
      if ("self" === ex) {
        if (tb && null != eB) {
          let e
          ;(ev[53] !== tg || ev[54] !== eB
            ? ((e = () => {
                if (null != eX.current) return
                let e = new AbortController()
                ;((eX.current = e),
                  eV(void 0),
                  eZ(!0),
                  tg({ role: eB, signal: AbortSignal.any([e.signal, eF.current.signal]) }))
              }),
              (ev[53] = tg),
              (ev[54] = eB),
              (ev[55] = e))
            : (e = ev[55]),
            (eu = e))
        }
      } else if (ty) {
        let e
        ;(ev[56] !== tg ? ((e = () => tg(void 0)), (ev[56] = tg), (ev[57] = e)) : (e = ev[57]), (eu = e))
      }
      let tx = new Map()
      for (let e of tn)
        for (let t of e.recipients ?? []) {
          let i = et(e, t)
          ;(tx.get(i)?.recipient.status !== "pending" && tx.has(i)) || tx.set(i, { request: e, recipient: t })
        }
      let tk = [...tx].filter(G)
      ev[58] !== ej || ev[59] !== tw
        ? ((eh = () => {
            "allow" === tw() && ej()
          }),
          (ev[58] = ej),
          (ev[59] = tw),
          (ev[60] = eh))
        : (eh = ev[60])
      let tS = tm && !eY
      ev[61] !== ek || ev[62] !== tm || ev[63] !== eS || ev[64] !== ew
        ? ((eg = null != eS && (0, a.jsx)(eS.LinkButton, { pageId: ew, spaceId: ek, disabled: tm })),
          (ev[61] = ek),
          (ev[62] = tm),
          (ev[63] = eS),
          (ev[64] = ew),
          (ev[65] = eg))
        : (eg = ev[65])
      let tj =
        "self" === ex &&
        (null == ta ? tv : null != tr && null != ta.current_role) &&
        (0, a.jsx)(a.Fragment, {
          children:
            tr?.length === 0 && ta?.current_role != null
              ? (0, a.jsx)(q.u, { permission: ta.current_role })
              : (0, a.jsx)(C.e, {
                  variant: "field",
                  value: eB ?? "editor",
                  disabled: tm || eY || 0 === (tr ?? eK).length,
                  options: (tr ?? eK).map((e) => {
                    let t = null == ta ? void 0 : J(ta, tn, e)
                    return {
                      value: e,
                      disabled: t?.blocker != null,
                      tooltipText: t?.full ? (0, a.jsx)(ee, { notice: "full" }) : void 0,
                    }
                  }),
                  renderLabel: z,
                  onChange: (e) => {
                    ;(eV(void 0), eQ(e))
                  },
                }),
        })
      ev[66] !== tl
        ? ((em =
            null != tl &&
            (0, a.jsx)(y.l, { type: "warning", role: "status", content: (0, a.jsx)(ee, { notice: tl }) })),
          (ev[66] = tl),
          (ev[67] = em))
        : (em = ev[67])
      let tA =
        null == ta || null == eM
          ? ("self" !== ex || !tv) &&
            (0, a.jsx)(M.DN, {
              isLoading: tv,
              onRetry: () => {
                ;(eL(), eR(), eD && ti())
              },
            })
          : (0, a.jsxs)(a.Fragment, {
              children: [
                "others" === ex &&
                  (0, a.jsx)(y.l, {
                    variant: "privacyNotice",
                    title: (0, a.jsx)(d.A, {
                      id: "codex.pages.requestShare.approvalRequired",
                      defaultMessage: "Owner must approve access first",
                      description:
                        "Banner explaining that a Page or Space viewer's own access changes and invitations require the owner's approval",
                    }),
                    content: (0, a.jsx)(d.A, {
                      id: "codex.pages.requestShare.accessManagedDescription",
                      defaultMessage: "You can’t manage access",
                      description:
                        "Explains that the current person must ask the owner to grant others access when sharing management is unavailable, without assuming their document role",
                    }),
                  }),
                eU &&
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(eS.RecipientPicker, {
                        accountId: eM,
                        currentPrincipalId: ta.requester.principal_id,
                        currentEmail: void 0,
                        isWorkspace: !0,
                        canSearchMembers: e$?.canSearchMembers === !0,
                        allowGroups: e$?.allowGroups === !0,
                        disabled: t_,
                        existingPrincipalKeys: tp,
                        existingEmails: new Set(),
                        query: e1,
                        onQueryChange: e2,
                        selected: eJ,
                        onChange: (e) => {
                          ;(e0(e), "commenter" === eW && e.some(W) && ez("viewer"))
                        },
                        role: eW,
                        allowedRoles: eJ.some(F) ? ["viewer", "editor"] : ["viewer", "commenter", "editor"],
                        onRoleChange: ez,
                      }),
                      (0 === td || eJ.length > td) &&
                        (0, a.jsx)(y.l, {
                          type: "warning",
                          role: "status",
                          content: (0, a.jsx)(d.A, {
                            id: "codex.pages.requestShare.capacity",
                            defaultMessage:
                              "You can request each role for up to 100 people or groups; {remaining, plural, =0 {you’ve reached this role’s limit} one {select at most # more recipient} other {select at most # more recipients}}",
                            description:
                              "Explains the cumulative access-request limit for the currently selected role, counting pending and resolved recipients from earlier requests",
                            values: { remaining: td },
                          }),
                        }),
                    ],
                  }),
                "others" === ex && (eT || null == eO) && (0, a.jsx)(M.DN, { isLoading: !eT, onRetry: () => void eR() }),
                tf &&
                  (0, a.jsx)(y.l, {
                    type: "error",
                    role: "alert",
                    content: (0, a.jsx)(d.A, {
                      id: "codex.pages.requestShare.failed",
                      defaultMessage: "Couldn’t send the access request. Try again",
                      description:
                        "Error after asking a Page or Space owner to grant access; unsent requests are retained for retry",
                    }),
                  }),
              ],
            })
      ev[68] !== tj || ev[69] !== em || ev[70] !== tA
        ? ((ef = (0, a.jsxs)(v.OO, { className: "gap-4", children: [tj, em, tA] })),
          (ev[68] = tj),
          (ev[69] = em),
          (ev[70] = tA),
          (ev[71] = ef))
        : (ef = ev[71])
      let tM = null != eS && (0, a.jsx)(eS.Access, { target: eb, workspaceName: eP?.name?.trim() || void 0 })
      return (
        ev[72] !== ta || ev[73] !== tk
          ? ((e_ =
              null != ta &&
              tk.length > 0 &&
              (0, a.jsx)(A.p, {
                title: (0, a.jsx)(d.A, {
                  id: "codex.pages.requestShare.requestsHeading",
                  defaultMessage: "Your requests",
                  description:
                    "Heading above access requests you have sent that are still waiting for the Page or Space owner's approval",
                }),
                children: tk.map((e) => {
                  let [t, i] = e,
                    { request: r, recipient: n } = i
                  return (0, a.jsx)(
                    j.h,
                    {
                      avatar: (0, a.jsx)("span", {
                        className: "opacity-50",
                        children: (0, a.jsx)(f.e, {
                          alt: "",
                          colorKey: n.principal.principal_id,
                          name: n.name ?? n.email ?? "",
                          size: "group",
                          src: null,
                        }),
                      }),
                      label: (0, a.jsx)("span", {
                        className: "opacity-50",
                        children:
                          n.principal.principal_id === ta.requester.principal_id &&
                          n.principal.principal_type === ta.requester.principal_type
                            ? (0, a.jsx)(d.A, {
                                id: "codex.pages.requestShare.you",
                                defaultMessage: "You",
                                description:
                                  "Label identifying you as the beneficiary of a request for higher Page or Space access",
                              })
                            : (n.name ??
                              n.email ??
                              (0, a.jsx)(d.A, {
                                id: "codex.pages.requestShare.person",
                                defaultMessage: "Requested person",
                                description:
                                  "Fallback label when an access request recipient has no available display name or email",
                              })),
                      }),
                      secondaryLabel:
                        null == n.email ? void 0 : (0, a.jsx)("span", { className: "opacity-50", children: n.email }),
                      trailingContent: (0, a.jsxs)("div", {
                        className: "flex shrink-0 items-center gap-3",
                        children: [
                          (0, a.jsx)(_.E, {
                            className: "whitespace-nowrap",
                            children: (0, a.jsx)(d.A, {
                              id: "shareDialog.pendingApproval",
                              defaultMessage: "Pending approval",
                              description:
                                "Status of a request waiting for the resource owner's approval to grant access",
                            }),
                          }),
                          (0, a.jsx)("span", {
                            className: "text-sm text-tertiary",
                            children: (0, a.jsx)(q.u, { permission: r.requested_role ?? "viewer" }),
                          }),
                        ],
                      }),
                    },
                    t,
                  )
                }),
              })),
            (ev[72] = ta),
            (ev[73] = tk),
            (ev[74] = e_))
          : (e_ = ev[74]),
        ev[75] !== R ||
        ev[76] !== eY ||
        ev[77] !== eu ||
        ev[78] !== ew ||
        ev[79] !== tw ||
        ev[80] !== ex ||
        ev[81] !== eh ||
        ev[82] !== tS ||
        ev[83] !== eg ||
        ev[84] !== ef ||
        ev[85] !== tM ||
        ev[86] !== e_ ||
        ev[87] !== eb
          ? ((ey = (0, a.jsxs)(R, {
              target: eb,
              pageId: ew,
              requestFor: ex,
              onClose: eh,
              onRequestClose: tw,
              onSubmit: eu,
              isQueued: eY,
              isPending: tS,
              linkButton: eg,
              children: [ef, tM, e_],
            })),
            (ev[75] = R),
            (ev[76] = eY),
            (ev[77] = eu),
            (ev[78] = ew),
            (ev[79] = tw),
            (ev[80] = ex),
            (ev[81] = eh),
            (ev[82] = tS),
            (ev[83] = eg),
            (ev[84] = ef),
            (ev[85] = tM),
            (ev[86] = e_),
            (ev[87] = eb),
            (ev[88] = ey))
          : (ey = ev[88]),
        ey
      )
    }
    function F(e) {
      let { recipient: t } = e
      return "principal" === t.recipient_type && "group" === t.principal_type
    }
    function W(e) {
      let { recipient: t } = e
      return "principal" === t.recipient_type && "group" === t.principal_type
    }
    function z(e) {
      return (0, a.jsx)(q.u, { permission: e })
    }
    function G(e) {
      let [, t] = e,
        { recipient: i } = t
      return "pending" === i.status
    }
    function K() {}
    function B(e) {
      return `${e.principal_type}:${e.principal_id}`
    }
    function Q(e) {
      let { principal: t } = e
      return `${t.principal_type}:${t.principal_id}`
    }
    function H(e) {
      return e.recipients ?? []
    }
    function V(e) {
      return "commenter" === e || "editor" === e
    }
    function Y(e) {
      return (e.recipients ?? []).map((t) => et(e, t))
    }
    function Z(e) {
      var t
      let { state: i } = e
      return ((t = i.data), !!t?.length && Math.max(1, Math.min(...t.map(({ expiresAt: e }) => e)) - Date.now()))
    }
    function X(e) {
      let { expiresAt: t } = e
      return t > Date.now()
    }
    function J(e, t, i) {
      let a,
        r = new Set()
      for (let n of t)
        if (n.requested_role === i)
          for (let t of n.recipients ?? []) {
            let { principal: i } = t
            ;(r.add(`${i.principal_type}:${i.principal_id}`),
              i.principal_type === e.requester.principal_type &&
                i.principal_id === e.requester.principal_id &&
                (a = t.status))
          }
      let n = r.size >= 100,
        s = a
      return (
        null == s &&
          (n
            ? (s = "full")
            : (null != e.current_role && e.current_role !== i && e.requestable_roles?.includes(i)) ||
              (s = "unavailable")),
        { status: a, full: n, blocker: s }
      )
    }
    function ee(e) {
      let t = (0, r.c)(5),
        { notice: i } = e
      switch (i) {
        case "pending": {
          let e
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(d.A, {
                  id: "codex.pages.requestAccess.alreadyPending",
                  defaultMessage: "Your request is already pending.",
                  description: "The role was requested earlier and still awaits owner approval",
                })),
                (t[0] = e))
              : (e = t[0]),
            e
          )
        }
        case "declined": {
          let e
          return (
            t[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(d.A, {
                  id: "codex.pages.requestAccess.declined",
                  defaultMessage: "Your request for this role was declined.",
                  description: "A previous request for the same role was declined",
                })),
                (t[1] = e))
              : (e = t[1]),
            e
          )
        }
        case "approved":
        case "satisfied": {
          let e
          return (
            t[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(d.A, {
                  id: "codex.pages.requestAccess.alreadyResolved",
                  defaultMessage: "Your previous request for this role has been resolved.",
                  description: "The owner's earlier decision already resolved this higher-access request",
                })),
                (t[2] = e))
              : (e = t[2]),
            e
          )
        }
        case "full": {
          let e
          return (
            t[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(d.A, {
                  id: "codex.pages.requestShare.selfCapacity",
                  defaultMessage: "Request limit reached for this role",
                  description:
                    "Explains why you cannot request a higher Page or Space role when your previous requests for that role already include 100 people or groups",
                })),
                (t[3] = e))
              : (e = t[3]),
            e
          )
        }
        case "unavailable": {
          let e
          return (
            t[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(d.A, {
                  id: "codex.pages.requestAccess.roleUnavailable",
                  defaultMessage: "You can no longer request this role.",
                  description: "The selected role is no longer available after checking the person's current access",
                })),
                (t[4] = e))
              : (e = t[4]),
            e
          )
        }
      }
    }
    function et(e, { principal: t }) {
      return `${e.request_id}:${e.created_at}:${t.principal_type}:${t.principal_id}`
    }
  },
  nmLP(e, t, i) {
    i.d(t, { k: () => eZ })
    var a = i("ABep"),
      r = i("QosV"),
      n = i("T0Rc"),
      s = i("HY2m"),
      l = i("xSOA"),
      o = i("cE8H"),
      c = i("KUdL"),
      d = i.n(c),
      p = i("i5ac"),
      u = i.n(p),
      h = i("zTeN"),
      g = i("zd8w"),
      m = i("oyxz"),
      f = i("Wf1j"),
      _ = i("Qgfj"),
      y = i("HZfM"),
      v = i("PFjh"),
      b = i("SPnB"),
      w = i("AOHi"),
      x = i("Ghh3"),
      k = i("OAko"),
      S = i("zKCW"),
      j = i("mUDD"),
      A = i("SGsN"),
      M = i("heYt"),
      C = i("nqea"),
      I = i("tLM7"),
      q = i("imTH"),
      E = i("btiy"),
      L = i("aRS8"),
      P = i("hwkA"),
      N = i("bVeK"),
      O = i("OWtl"),
      T = i("akkX"),
      R = i("e1xH"),
      $ = i("M14h")
    function D(e) {
      let t,
        i,
        n,
        s,
        l = (0, r.c)(12),
        { disabled: o, pageId: c, spaceId: d } = e,
        p = (0, h.gh)(O.u),
        u = (0, h._U)($.Xw, c),
        [f, _] = (0, g.useState)(!1),
        y = o || null == c
      return (
        l[0] !== f || l[1] !== u || l[2] !== c || l[3] !== p || l[4] !== d
          ? ((t = () => {
              let e = p.get(b.chatGptAuthenticatedAccountId$)
              null != e &&
                null != c &&
                !f &&
                p.get(R.pagesEnabled$) &&
                (_(!0),
                (0, $.LE)(p, u, void 0, { spaceId: d }).then((t) => {
                  ;(_(!1), t && p.get(R.pagesEnabled$) && p.get(b.chatGptAuthenticatedAccountId$) === e && (0, T.o)(p))
                }))
            }),
            (l[0] = f),
            (l[1] = u),
            (l[2] = c),
            (l[3] = p),
            (l[4] = d),
            (l[5] = t))
          : (t = l[5]),
        l[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, a.jsx)(N.ibM, {})),
            (n = (0, a.jsx)(m.A, {
              id: "codex.pages.sharing.copyLink",
              defaultMessage: "Copy link",
              description:
                "Button in Page and Space sharing dialogs that copies the Page or Space homepage URL without changing access",
            })),
            (l[6] = i),
            (l[7] = n))
          : ((i = l[6]), (n = l[7])),
        l[8] !== f || l[9] !== y || l[10] !== t
          ? ((s = (0, a.jsxs)(P.$, {
              color: "secondary",
              variant: "outline",
              disabled: y,
              loading: f,
              size: "xl",
              type: "button",
              onClick: t,
              children: [i, n],
            })),
            (l[8] = f),
            (l[9] = y),
            (l[10] = t),
            (l[11] = s))
          : (s = l[11]),
        s
      )
    }
    var U = i("SgPg"),
      F = i("TjgH"),
      W = i("HNZf"),
      z = i("Erws"),
      G = i("wuZu"),
      K = i("LKbA"),
      B = i("DWyQ"),
      Q = i("pyoT")
    function H(e) {
      let t,
        i,
        n,
        s,
        l,
        o = (0, r.c)(17),
        { pageId: c, inheritedAccess: d } = e,
        { space: p } = (0, h._U)(Q.spacePageContext$, c),
        g = d?.complete ? d.sources : void 0
      o[0] !== g || o[1] !== p
        ? ((t =
            p?.backing_type === "drive" &&
            "" !== p.name.trim() &&
            g?.some((e) => e.source?.kind === "space" && e.source.id === p.id)
              ? p
              : null),
          (o[0] = g),
          (o[1] = p),
          (o[2] = t))
        : (t = o[2])
      let m = t
      o[3] !== g || o[4] !== m?.id
        ? ((i = g?.filter((e) => e.source?.kind === "space" && e.source.id === m?.id)),
          (o[3] = g),
          (o[4] = m?.id),
          (o[5] = i))
        : (i = o[5])
      let f = i
      if (
        (o[6] !== m || o[7] !== f
          ? ((n = null != m && (0, a.jsx)(Y, { space: m, grants: f?.length ? f : void 0 })),
            (o[6] = m),
            (o[7] = f),
            (o[8] = n))
          : (n = o[8]),
        o[9] !== g || o[10] !== m?.id)
      ) {
        let e
        ;(o[12] !== g
          ? ((e = (e) =>
              (0, a.jsx)(
                V,
                { spaceId: e.id, grants: g?.filter((t) => t.source?.kind === "space" && t.source.id === e.id) },
                e.id,
              )),
            (o[12] = g),
            (o[13] = e))
          : (e = o[13]),
          (s = u()(
            g?.flatMap((e) => (e.source?.kind === "space" && e.source.id !== m?.id ? [e.source] : [])),
            "id",
          ).map(e)),
          (o[9] = g),
          (o[10] = m?.id),
          (o[11] = s))
      } else s = o[11]
      return (
        o[14] !== n || o[15] !== s
          ? ((l = (0, a.jsxs)(a.Fragment, { children: [n, s] })), (o[14] = n), (o[15] = s), (o[16] = l))
          : (l = o[16]),
        l
      )
    }
    function V(e) {
      let t,
        i,
        n,
        s,
        l = (0, r.c)(9),
        { spaceId: o, grants: c } = e
      l[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { enabled: !1 }), (l[0] = t)) : (t = l[0])
      let { data: d, error: p } = (0, h._U)(Q.spaceQuery$, o, t)
      l[1] === Symbol.for("react.memo_cache_sentinel") ? ((i = { enabled: !1 }), (l[1] = i)) : (i = l[1])
      let { data: u } = (0, h.Ul)(Q.spacesQuery$, i)
      if (null != p) return null
      l[2] !== d || l[3] !== o || l[4] !== u
        ? ((n = d ?? u?.items.find((e) => e.id === o)), (l[2] = d), (l[3] = o), (l[4] = u), (l[5] = n))
        : (n = l[5])
      let g = n
      return null == g
        ? null
        : (l[6] !== c || l[7] !== g
            ? ((s = (0, a.jsx)(Y, { space: g, grants: c })), (l[6] = c), (l[7] = g), (l[8] = s))
            : (s = l[8]),
          s)
    }
    function Y(e) {
      let t,
        i,
        n,
        s,
        l,
        o = (0, r.c)(14),
        { space: c, grants: d } = e,
        p = d?.[0]?.role
      return (
        o[0] !== c.id
          ? ((t = (0, a.jsx)(B.O, { spaceId: c.id, variant: "avatar" })), (o[0] = c.id), (o[1] = t))
          : (t = o[1]),
        o[2] !== c.name
          ? ((i = (0, a.jsx)(m.A, {
              id: "codex.pages.sharing.spacePeople",
              defaultMessage: "People in {spaceName}",
              description: "Uneditable access row for members of a Space whose permissions apply to this Page",
              values: { spaceName: c.name },
            })),
            (o[2] = c.name),
            (o[3] = i))
          : (i = o[3]),
        o[4] !== d
          ? ((n =
              null != d &&
              (0, a.jsx)(m.A, {
                id: "codex.pages.sharing.inheritedSpaceAccess",
                defaultMessage: "Access inherited from this space",
                description:
                  "Secondary text explaining why Space members can access a Page; the server does not provide a member count. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
              })),
            (o[4] = d),
            (o[5] = n))
          : (n = o[5]),
        o[6] !== d || o[7] !== p
          ? ((s = (0, a.jsx)("span", {
              className: "pe-2 text-sm text-tertiary",
              children:
                null != p && d?.every((e) => e.role === p)
                  ? (0, a.jsx)(K.u, { permission: p })
                  : (0, a.jsx)(m.A, {
                      id: "codex.space.page.shareDialog.spaceAccess",
                      defaultMessage: "Has access",
                      description: "Permission label for the uneditable Space-wide access row in a Page sharing dialog",
                    }),
            })),
            (o[6] = d),
            (o[7] = p),
            (o[8] = s))
          : (s = o[8]),
        o[9] !== t || o[10] !== i || o[11] !== n || o[12] !== s
          ? ((l = (0, a.jsx)(G.h, { avatar: t, label: i, secondaryLabel: n, trailingContent: s })),
            (o[9] = t),
            (o[10] = i),
            (o[11] = n),
            (o[12] = s),
            (o[13] = l))
          : (l = o[13]),
        l
      )
    }
    var Z = i("dEsd"),
      X = i("IZAr"),
      J = i("jnsB"),
      ee = i("DBCl"),
      et = i("rpnz")
    let ei = (0, h.vU)(O.u, (e, { get: t, scope: i }) => {
      let a = t(Q.spaceAccountId$),
        r = t(b.chatGptAuthenticatedUserId$)
      return {
        enabled: t(R.pagesEnabled$) && ("page" !== e.kind || !(0, et.sD)(e.id)) && null != a && null != r,
        queryKey: ["space", "library-shares", r, a, { type: e.kind, id: e.id, readOnly: !0 }],
        gcTime: 0,
        staleTime: 0,
        retry: !1,
        queryFn: async ({ signal: t }) => {
          if (
            ("page" === e.kind && (0, Q.assertServerSpacePageId)(e.id),
            null == a || null == r || !i.get(R.pagesEnabled$))
          )
            throw Error("pages_disabled")
          let n = (0, Q.watchSpaceAccount)(i, a, r),
            s = AbortSignal.any([t, n.signal])
          try {
            let t,
              i,
              a = new Map(),
              r = new Set()
            for (let n = 0; n < 20; n += 1) {
              s.throwIfAborted()
              let n = await (0, ee._qC)(
                "page" === e.kind
                  ? x.Request.safeGet("/pages/{page_id}/shares", {
                      parameters: {
                        path: { page_id: e.id },
                        query: { read_only: !0, cursor: t, limit: 100, include_inherited_access: null == t || void 0 },
                      },
                      signal: s,
                    })
                  : x.Request.safeGet("/spaces/v2/{space_id}/shares", {
                      parameters: {
                        path: { space_id: e.id },
                        query: { read_only: !0, cursor: t, limit: 100, include_inherited_access: null == t || void 0 },
                      },
                      signal: s,
                    }),
                s,
              )
              for (let e of (s.throwIfAborted(), (i = i ?? n), n.shares)) a.set(e.share_id, e)
              if (null == n.next_cursor)
                return {
                  ...n,
                  shares: [...a.values()],
                  inherited_access: i.inherited_access,
                  inherited_workspace_link_access: i.inherited_workspace_link_access,
                }
              if (r.has(n.next_cursor)) throw Error("space_sharing_cursor_repeated")
              ;((t = n.next_cursor), r.add(t))
            }
            throw Error("space_sharing_pagination_limit_exceeded")
          } finally {
            n.stop()
          }
        },
      }
    })
    var ea = i("KbJc")
    let er = {
      RecipientPicker: L.h,
      LinkButton: D,
      Access: function (e) {
        let t,
          i,
          s,
          l,
          o,
          c,
          d,
          p,
          u,
          g,
          _,
          y,
          v,
          w,
          x,
          k,
          S,
          A,
          M,
          I,
          q,
          E = (0, r.c)(78),
          { target: L, workspaceName: T } = e,
          $ = (0, h.gh)(O.u),
          D = (0, f.A)(),
          B = (0, h.Ul)(b.chatGptAuthenticatedUserId$),
          Q = (0, h.Ul)(R.pagesEnabled$)
        ;(E[0] !== $.query || E[1] !== L
          ? ((t = $.query.getOptions(ei, L)), (E[0] = $.query), (E[1] = L), (E[2] = t))
          : (t = E[2]),
          E[3] !== t ? ((i = { ...t, refetchOnMount: "always", staleTime: 0 }), (E[3] = t), (E[4] = i)) : (i = E[4]))
        let { data: V, isError: Y, isFetching: ee, isFetchedAfterMount: et, refetch: ea } = (0, n.I)(i, $.queryClient)
        if (!Q || null == B) return null
        if (Y || !et || null == V) {
          let e,
            t,
            i = !Y && ee
          return (
            E[5] !== ea ? ((e = () => void ea()), (E[5] = ea), (E[6] = e)) : (e = E[6]),
            E[7] !== i || E[8] !== e
              ? ((t = (0, a.jsx)(j.OO, { children: (0, a.jsx)(J.DN, { isLoading: i, onRetry: e }) })),
                (E[7] = i),
                (E[8] = e),
                (E[9] = t))
              : (t = E[9]),
            t
          )
        }
        E[10] !== B ? ((s = B.split("__")), (E[10] = B), (E[11] = s)) : (s = E[11])
        let er = s[0]
        E[12] !== D || E[13] !== V.owner_display_name
          ? ((l =
              V.owner_display_name?.trim() ||
              D.formatMessage({
                id: "shareDialog.role.owner",
                defaultMessage: "Owner",
                description: "Sharing permission identifying someone who owns content and controls its access",
              })),
            (E[12] = D),
            (E[13] = V.owner_display_name),
            (E[14] = l))
          : (l = E[14])
        let en = l
        E[15] !== D
          ? ((o = D.formatMessage({
              id: "codex.space.driveSharing.self",
              defaultMessage: "You",
              description: "Label for the currently signed-in person in the Page or Space sharing dialog",
            })),
            (E[15] = D),
            (E[16] = o))
          : (o = E[16])
        let es = o
        ;(V.caller_permissions.includes("library_folder.write")
          ? (c = "editor")
          : V.caller_permissions.includes("library_file.comment")
            ? (c = "commenter")
            : V.caller_permissions.includes("library_folder.read") && (c = "viewer"),
          E[17] !== V ? ((d = (0, z.Ql)(V)), (E[17] = V), (E[18] = d)) : (d = E[18]))
        let el = d
        if (
          E[19] !== el ||
          E[20] !== ea ||
          E[21] !== V.inherited_access ||
          E[22] !== V.inherited_workspace_link_access?.complete ||
          E[23] !== V.shares ||
          E[24] !== V.workspace_id ||
          E[25] !== T
        ) {
          let e, t
          E[30] !== el || E[31] !== V.shares || E[32] !== V.workspace_id
            ? ((e = (e) =>
                e === el ||
                V.shares.some(
                  (t) =>
                    "active" === t.status &&
                    "principal" === t.recipient.recipient_type &&
                    "workspace" === t.recipient.principal_type &&
                    t.recipient.principal_id === V.workspace_id &&
                    t.role_id === e,
                )),
              (E[30] = el),
              (E[31] = V.shares),
              (E[32] = V.workspace_id),
              (E[33] = e))
            : (e = E[33])
          let i = z.DT.findLast(e)
          ;((u = V.inherited_access),
            E[34] !== T
              ? ((t =
                  null == T
                    ? (0, a.jsx)(m.A, {
                        id: "codex.pages.sharing.workspaceLink.audience.unnamedWorkspace.label",
                        defaultMessage: "Anyone in this workspace",
                        description:
                          "Workspace-wide link-access option in Page and Space sharing when the organization name is unavailable. This identifies who can open the link.",
                      })
                    : (0, a.jsx)(m.A, {
                        id: "codex.pages.sharing.workspaceLink.audience.namedWorkspace.label",
                        defaultMessage: "Anyone at {workspaceName}",
                        description:
                          "Workspace-wide link-access option in Page and Space sharing. WorkspaceName is the organization name, such as Acme. This identifies who can open the link.",
                        values: { workspaceName: T },
                      })),
                (E[34] = T),
                (E[35] = t))
              : (t = E[35]))
          let r = t
          ;((p = X.p),
            (g = "link"),
            (_ =
              V.inherited_workspace_link_access?.complete !== !0
                ? (0, a.jsxs)("div", {
                    className: "flex items-center justify-between gap-3",
                    children: [
                      (0, a.jsx)("p", {
                        className: "text-sm text-secondary select-none",
                        children: (0, a.jsx)(m.A, {
                          id: "codex.pages.sharing.workspaceLink.unknown.helpText",
                          defaultMessage: "Couldn’t load link access",
                          description:
                            "Warning in Page and Space sharing when effective workspace link access could not be verified. Retry refreshes the read. This does not mean access is restricted.",
                        }),
                      }),
                      (0, a.jsx)(P.$, {
                        color: "secondary",
                        variant: "ghost",
                        size: "sm",
                        onClick: () => void ea(),
                        children: (0, a.jsx)(m.A, {
                          id: "codex.pages.sharing.workspaceLink.retry.action",
                          defaultMessage: "Retry",
                          description:
                            "Button beside a link-access loading error in Page and Space sharing. Retries reading permissions without submitting a change.",
                        }),
                      }),
                    ],
                  })
                : (0, a.jsx)(G.h, {
                    avatar: null == i ? (0, a.jsx)(N.$Rp, {}) : (0, a.jsx)(N.MEe, {}),
                    label:
                      null == i
                        ? (0, a.jsx)(m.A, {
                            id: "codex.pages.sharing.onlyInvited",
                            defaultMessage: "Only those invited",
                            description: "Page and Space link-access option limiting access to existing collaborators",
                          })
                        : r,
                    trailingContent:
                      null != i &&
                      (0, a.jsx)("span", {
                        className: "pe-2 text-sm text-tertiary",
                        children: (0, a.jsx)(K.u, { permission: (0, C.rP)(i, "folder") }),
                      }),
                  })),
            (E[19] = el),
            (E[20] = ea),
            (E[21] = V.inherited_access),
            (E[22] = V.inherited_workspace_link_access?.complete),
            (E[23] = V.shares),
            (E[24] = V.workspace_id),
            (E[25] = T),
            (E[26] = p),
            (E[27] = u),
            (E[28] = g),
            (E[29] = _))
        } else ((p = E[26]), (u = E[27]), (g = E[28]), (_ = E[29]))
        E[36] !== p || E[37] !== g || E[38] !== _
          ? ((y = (0, a.jsx)(p, { kind: g, children: _ })), (E[36] = p), (E[37] = g), (E[38] = _), (E[39] = y))
          : (y = E[39])
        let eo = `owner:${V.owner.principal_id}`
        if (
          (E[40] === Symbol.for("react.memo_cache_sentinel")
            ? ((v = (0, a.jsx)("span", {
                className: "pe-2 text-sm text-tertiary",
                children: (0, a.jsx)(K.u, { permission: "owner" }),
              })),
              (E[40] = v))
            : (v = E[40]),
          E[41] !== en || E[42] !== V.owner.principal_id
            ? ((w = (0, a.jsx)(G.h, { colorKey: V.owner.principal_id, label: en, trailingContent: v })),
              (E[41] = en),
              (E[42] = V.owner.principal_id),
              (E[43] = w))
            : (w = E[43]),
          E[44] !== en || E[45] !== eo || E[46] !== w
            ? ((x = { id: eo, label: en, isOwner: !0, row: w }), (E[44] = en), (E[45] = eo), (E[46] = w), (E[47] = x))
            : (x = E[47]),
          E[48] !== er || E[49] !== es || E[50] !== c || E[51] !== V.owner.principal_id || E[52] !== B
            ? ((k =
                V.owner.principal_id.split("__")[0] === er
                  ? []
                  : [
                      {
                        id: `self:${B}`,
                        label: es,
                        isSelf: !0,
                        row: (0, a.jsx)(G.h, {
                          colorKey: B,
                          label: es,
                          trailingContent: (0, a.jsx)("span", {
                            className: "pe-2 text-sm text-tertiary",
                            children: (0, a.jsx)(K.u, { permission: c }),
                          }),
                        }),
                      },
                    ]),
              (E[48] = er),
              (E[49] = es),
              (E[50] = c),
              (E[51] = V.owner.principal_id),
              (E[52] = B),
              (E[53] = k))
            : (k = E[53]),
          E[54] !== D ||
            E[55] !== er ||
            E[56] !== V.owner.principal_id ||
            E[57] !== V.shares ||
            E[58] !== x ||
            E[59] !== k)
        ) {
          let e, t
          ;(E[61] !== er || E[62] !== V.owner.principal_id
            ? ((e = (e) =>
                ("active" === e.status || "pending" === e.status) &&
                ("principal" !== e.recipient.recipient_type ||
                  ("workspace" !== e.recipient.principal_type &&
                    ("user" !== e.recipient.principal_type ||
                      (e.recipient.principal_id !== V.owner.principal_id &&
                        e.recipient.principal_id.split("__")[0] !== er))))),
              (E[61] = er),
              (E[62] = V.owner.principal_id),
              (E[63] = e))
            : (e = E[63]),
            E[64] !== D
              ? ((t = (e) => {
                  let t = e.recipient_email ?? ("email" === e.recipient.recipient_type ? e.recipient.email : null),
                    i =
                      e.recipient_display_name?.trim() ||
                      t ||
                      D.formatMessage({
                        id: "codex.pages.requestShare.collaborator",
                        defaultMessage: "Collaborator",
                        description:
                          "Fallback for a Page or Space collaborator whose display name and email are not available; never show a private identifier instead",
                      })
                  return {
                    id: e.share_id,
                    label: i,
                    isTeam: "principal" === e.recipient.recipient_type && "group" === e.recipient.principal_type,
                    row: (0, a.jsx)(G.h, {
                      avatar: (0, a.jsx)(U.T, {
                        avatarUrl: "active" === e.status ? e.recipient_avatar_url : null,
                        colorKey: (0, W.hk)(e.recipient),
                        name: i,
                        size: "group",
                      }),
                      label: i,
                      secondaryLabel: t !== i ? t : void 0,
                      trailingContent: (0, a.jsxs)("div", {
                        className: "flex shrink-0 items-center gap-3",
                        children: [
                          "pending" === e.status &&
                            (0, a.jsx)(F.E, {
                              className: "whitespace-nowrap",
                              children: (0, a.jsx)(m.A, {
                                id: "codex.pages.requestShare.invitationPending",
                                defaultMessage: "Pending",
                                description:
                                  "Status of an invitation already issued by a Page or Space sharing manager, waiting for the recipient to accept. Unlike Pending approval, the owner has already authorized this invitation.",
                              }),
                            }),
                          (0, a.jsx)("span", {
                            className: "pe-2 text-sm text-tertiary",
                            children: (0, a.jsx)(K.u, { permission: (0, C.rP)(e.role_id, "folder") }),
                          }),
                        ],
                      }),
                    }),
                  }
                }),
                (E[64] = D),
                (E[65] = t))
              : (t = E[65]),
            (S = (0, a.jsx)(Z.M, { entries: [x, ...k, ...V.shares.filter(e).map(t)] })),
            (E[54] = D),
            (E[55] = er),
            (E[56] = V.owner.principal_id),
            (E[57] = V.shares),
            (E[58] = x),
            (E[59] = k),
            (E[60] = S))
        } else S = E[60]
        let ec = "page" === L.kind ? L.id : null
        return (
          E[66] !== u || E[67] !== ec
            ? ((A = (0, a.jsx)(H, { pageId: ec, inheritedAccess: u })), (E[66] = u), (E[67] = ec), (E[68] = A))
            : (A = E[68]),
          E[69] !== u?.complete
            ? ((M =
                u?.complete !== !0 &&
                (0, a.jsx)("p", {
                  className: "text-sm text-secondary select-none",
                  children: (0, a.jsx)(m.A, {
                    id: "codex.pages.requestShare.inheritedIncomplete",
                    defaultMessage: "Some inherited access could not be loaded",
                    description:
                      "Warning below the visible Page or Space collaborators when the server cannot return a complete inherited-access projection; the visible list is not exhaustive",
                  }),
                })),
              (E[69] = u?.complete),
              (E[70] = M))
            : (M = E[70]),
          E[71] !== S || E[72] !== A || E[73] !== M
            ? ((I = (0, a.jsxs)(X.p, { children: [S, A, M] })), (E[71] = S), (E[72] = A), (E[73] = M), (E[74] = I))
            : (I = E[74]),
          E[75] !== I || E[76] !== y
            ? ((q = (0, a.jsxs)(a.Fragment, { children: [y, I] })), (E[75] = I), (E[76] = y), (E[77] = q))
            : (q = E[77]),
          q
        )
      },
    }
    function en(e) {
      let t,
        i,
        n,
        s = (0, r.c)(7)
      s[0] !== e ? (({ requestFor: i, ...t } = e), (s[0] = e), (s[1] = t), (s[2] = i)) : ((t = s[1]), (i = s[2]))
      let l = void 0 === i ? "others" : i,
        o = "others" === l ? er : void 0
      return (
        s[3] !== t || s[4] !== l || s[5] !== o
          ? ((n = (0, a.jsx)(ea.RequestShareForm, { ...t, requestFor: l, others: o })),
            (s[3] = t),
            (s[4] = l),
            (s[5] = o),
            (s[6] = n))
          : (n = s[6]),
        n
      )
    }
    var es = i("Wj4L"),
      el = i("UOwN"),
      eo = i("tcwr"),
      ec = i("Adh7"),
      ed = i("rTPf"),
      ep = i("tdE2"),
      eu = i("QBk8"),
      eh = i("yGJW"),
      eg = i("NRR1"),
      em = i("Bktt"),
      ef = i("cfLx"),
      e_ = i("DHW4"),
      ey = i("jScN"),
      ev = i("WFY2")
    function eb(e, t, i, a, r, n) {
      null != a &&
        ev.v.info("Pages sharing phase", {
          safe: { ...t, buildFlavor: "prod", ...(null == r ? {} : { durationMs: r }), host: "electron", state: e },
          sensitive: { attemptId: i, ...(null == n ? {} : { requestId: n }), traceId: a.traceparent.split("-")[1] },
        })
    }
    function ew(e) {
      switch (e) {
        case "current_access":
          return "access_failed"
        case "recipient_lookup":
          return "search_failed"
        case "preflight":
          return "preflight_failed"
        case "mutation":
          return "request_failed"
        case "durable_completion":
        case "roster_refresh":
        case "required_reconciliation":
          return "reconciliation_failed"
      }
    }
    function ex(e) {
      return null == e ? "unknown" : 0 === e ? "empty" : e <= 10 ? "1_10" : e <= 100 ? "11_100" : "101_plus"
    }
    function ek(e, t) {
      return { "sharing.attempt_id": t, "sharing.backing_type": e.backing_type, "sharing.target_type": e.target_type }
    }
    var eS = i("LxX1"),
      ej = i("dJBt"),
      eA = i("Yqxh"),
      eM = i("qCmE"),
      eC = i("JGmX"),
      eI = i("glqn"),
      eq = i("ajGH"),
      eE = i("Rxyo"),
      eL = i("OMIV"),
      eP = i("Wuyk"),
      eN = i("rvFo"),
      eO = i("GEsy"),
      eT = i("eShZ"),
      eR = i("Sm6l"),
      e$ = i("JNtf")
    function eD(e) {
      let t,
        i,
        n,
        s,
        l,
        o,
        c,
        d,
        p,
        u,
        g,
        f = (0, r.c)(25),
        { target: _, teamName: y, onCancel: v, onConfirm: b } = e,
        w = (0, h._U)(Q.loadedSpacePageMetadata$, "page" === _.type ? _.id : null)
      ;(f[0] !== v
        ? ((t = (e) => {
            e || v()
          }),
          (f[0] = v),
          (f[1] = t))
        : (t = f[1]),
        f[2] !== b
          ? ((i = (e) => {
              ;(e.preventDefault(), e.stopPropagation(), b())
            }),
            (f[2] = b),
            (f[3] = i))
          : (i = f[3]),
        f[4] !== y
          ? ((n = (0, a.jsx)(e$.L3, {
              className: "text-heading-lg leading-7 font-semibold wrap-anywhere select-none",
              variant: "promotional",
              children: y
                ? (0, a.jsx)(m.A, {
                    id: "codex.space.driveSharing.reduceTeamAccessTitle",
                    defaultMessage: "Change access for the ‘{teamName}’ team?",
                    description:
                      "Confirmation title before reducing one Team's Editor access to a Page or Space. teamName is the Team's display name. The current user may lose editing access.",
                    values: { teamName: y },
                  })
                : (0, a.jsx)(m.A, {
                    id: "codex.space.driveSharing.reduceAccessTitle",
                    defaultMessage: "Change access?",
                    description:
                      "Confirmation title before reducing Editor access to a Page or Space for a workspace, multiple Teams, or a Team whose display name is unavailable. The current user may lose editing access.",
                  }),
            })),
            (f[4] = y),
            (f[5] = n))
          : (n = f[5]))
      let x = w?.document_type ?? "page"
      return (
        f[6] !== x || f[7] !== _.type
          ? ((s = (0, a.jsx)(e$.rr, {
              className: "text-onboarding-body text-secondary select-none",
              children: (0, a.jsx)(m.A, {
                id: "codex.space.driveSharing.reduceOwnEditingAccessDescription.byDocumentType",
                defaultMessage:
                  "You may lose editing access to this {kind, select, page {{documentType, select, granola_presentation {slide} granola_workbook {sheet} other {page}}} entry {item} other {space}} and items that inherit access from it. Do you want to continue?",
                description:
                  "Warning before reducing or removing Team or workspace Editor access to a Page or Space, selected by kind. The current user may lose their own editing access. The server does not identify every source of their access or return an affected-item count. documentType selects slide, sheet, or page for the current document.",
                values: { documentType: x, kind: _.type },
              }),
            })),
            (f[6] = x),
            (f[7] = _.type),
            (f[8] = s))
          : (s = f[8]),
        f[9] !== n || f[10] !== s
          ? ((l = (0, a.jsxs)("div", { className: "flex flex-col gap-4", children: [n, s] })),
            (f[9] = n),
            (f[10] = s),
            (f[11] = l))
          : (l = f[11]),
        f[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, a.jsx)(eR.$, {
              className: "w-full",
              color: "primary",
              size: "promotionalAction",
              type: "submit",
              children: (0, a.jsx)(m.A, {
                id: "codex.space.driveSharing.confirmReduceAccess",
                defaultMessage: "Update access",
                description:
                  "Confirm saving the pending Page or Space sharing changes after a warning about possible loss of the current user's editing access",
              }),
            })),
            (f[12] = o))
          : (o = f[12]),
        f[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)(m.A, {
              id: "codex.space.driveSharing.cancelReduceAccess",
              defaultMessage: "Cancel",
              description:
                "Close the access reduction warning without saving; keep the pending sharing changes in the Page or Space sharing dialog",
            })),
            (f[13] = c))
          : (c = f[13]),
        f[14] !== v
          ? ((d = (0, a.jsxs)(j.Es, {
              className: "flex-col",
              children: [
                o,
                (0, a.jsx)(eR.$, {
                  className: "w-full",
                  color: "ghostSecondary",
                  size: "promotionalLink",
                  type: "button",
                  onClick: v,
                  children: c,
                }),
              ],
            })),
            (f[14] = v),
            (f[15] = d))
          : (d = f[15]),
        f[16] !== l || f[17] !== d
          ? ((p = (0, a.jsxs)("div", {
              className: "flex flex-col gap-8 p-6 pt-14 text-center sm:p-10",
              children: [l, d],
            })),
            (f[16] = l),
            (f[17] = d),
            (f[18] = p))
          : (p = f[18]),
        f[19] !== p || f[20] !== i
          ? ((u = (0, a.jsx)(j.R4, { as: "form", variant: "chatgpt", onSubmit: i, children: p })),
            (f[19] = p),
            (f[20] = i),
            (f[21] = u))
          : (u = f[21]),
        f[22] !== t || f[23] !== u
          ? ((g = (0, a.jsx)(e$.lG, {
              open: !0,
              variant: "centeredText",
              size: "feature",
              onOpenChange: t,
              children: u,
            })),
            (f[22] = t),
            (f[23] = u),
            (f[24] = g))
          : (g = f[24]),
        g
      )
    }
    function eU(e) {
      let t,
        i,
        n,
        s,
        l,
        o,
        c,
        d,
        p,
        u,
        h,
        f,
        _ = (0, r.c)(22),
        { getFallbackFocus: y, onCancel: v, onDiscard: b } = e,
        w = (0, g.useRef)(null)
      return (
        _[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = () => {
              w.current =
                document.activeElement instanceof HTMLElement && document.activeElement !== document.body
                  ? document.activeElement
                  : null
            }),
            (_[0] = t))
          : (t = _[0]),
        _[1] !== y
          ? ((i = {
              shouldStopPointerDownPropagation: !1,
              onOpenAutoFocus: t,
              onCloseAutoFocus: (e) => {
                let t = w.current?.isConnected ? w.current : y?.()
                null != t && (e.preventDefault(), t.focus({ preventScroll: !0 }))
              },
              onEscapeKeyDown: eF,
            }),
            (_[1] = y),
            (_[2] = i))
          : (i = _[2]),
        _[3] !== v
          ? ((n = (e) => {
              e || v()
            }),
            (_[3] = v),
            (_[4] = n))
          : (n = _[4]),
        _[5] !== b
          ? ((s = (e) => {
              ;(e.preventDefault(), e.stopPropagation(), b())
            }),
            (_[5] = b),
            (_[6] = s))
          : (s = _[6]),
        _[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, a.jsx)(e$.L3, {
              children: (0, a.jsx)(m.A, {
                id: "codex.pages.sharing.discardChanges.title",
                defaultMessage: "Discard sharing changes?",
                description:
                  "Confirmation title when closing sharing with unsaved permission changes or selected recipients",
              }),
            })),
            (_[7] = l))
          : (l = _[7]),
        _[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, a.jsx)(j.OO, {
              children: (0, a.jsx)(j.c7, {
                title: l,
                subtitle: (0, a.jsx)(e$.rr, {
                  children: (0, a.jsx)(m.A, {
                    id: "codex.pages.sharing.discardChanges.description",
                    defaultMessage: "Your sharing changes haven’t been saved",
                    description:
                      "Warning that closing sharing will discard unsaved permission changes and selected recipients",
                  }),
                }),
              }),
            })),
            (_[8] = o))
          : (o = _[8]),
        _[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)(m.A, {
              id: "codex.pages.sharing.discardChanges.keepEditing",
              defaultMessage: "Keep editing",
              description: "Dismiss the warning and return to sharing with all unsaved changes preserved",
            })),
            (_[9] = c))
          : (c = _[9]),
        _[10] !== v
          ? ((d = (0, a.jsx)(eR.$, { color: "secondary", type: "button", onClick: v, children: c })),
            (_[10] = v),
            (_[11] = d))
          : (d = _[11]),
        _[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, a.jsx)(eR.$, {
              color: "danger",
              type: "submit",
              children: (0, a.jsx)(m.A, {
                id: "codex.pages.sharing.discardChanges.discard",
                defaultMessage: "Discard changes",
                description:
                  "Close sharing and discard unsaved permission changes and selected recipients without saving them",
              }),
            })),
            (_[12] = p))
          : (p = _[12]),
        _[13] !== d
          ? ((u = (0, a.jsx)(j.OO, { children: (0, a.jsxs)(j.Es, { children: [d, p] }) })), (_[13] = d), (_[14] = u))
          : (u = _[14]),
        _[15] !== u || _[16] !== s
          ? ((h = (0, a.jsxs)(j.R4, { as: "form", onSubmit: s, children: [o, u] })),
            (_[15] = u),
            (_[16] = s),
            (_[17] = h))
          : (h = _[17]),
        _[18] !== h || _[19] !== i || _[20] !== n
          ? ((f = (0, a.jsx)(e$.lG, {
              open: !0,
              showDialogClose: !1,
              size: "compact",
              contentProps: i,
              onOpenChange: n,
              children: h,
            })),
            (_[18] = h),
            (_[19] = i),
            (_[20] = n),
            (_[21] = f))
          : (f = _[21]),
        f
      )
    }
    function eF(e) {
      return e.stopPropagation()
    }
    var eW = i("xrkS"),
      ez = i("LNpE"),
      eG = i("IUMq"),
      eK = i("PItM")
    function eB(e) {
      let t,
        i,
        n,
        s,
        l,
        o,
        c,
        d,
        p,
        u,
        h,
        g,
        f,
        _ = (0, r.c)(77),
        {
          sharing: v,
          supportsCommenter: b,
          loading: w,
          directRole: x,
          hasDirectOverride: k,
          disabled: S,
          isWorkspace: j,
          workspaceName: A,
          workspaceLinkSharingAvailable: M,
          onChange: I,
          onRetry: q,
          onClose: E,
        } = e,
        L = void 0 !== w && w,
        O = (0, y.Zp)(),
        T = v.inherited_workspace_link_access,
        R = j && T?.complete !== !0
      if (
        _[0] !== x ||
        _[1] !== S ||
        _[2] !== k ||
        _[3] !== T?.sources ||
        _[4] !== T?.sources.filter ||
        _[5] !== j ||
        _[6] !== L ||
        _[7] !== O ||
        _[8] !== I ||
        _[9] !== E ||
        _[10] !== q ||
        _[11] !== v ||
        _[12] !== b ||
        _[13] !== R ||
        _[14] !== M ||
        _[15] !== A
      ) {
        let e,
          r,
          h,
          g,
          f,
          y,
          w,
          $ = null == (n = (0, z.Ql)(v)) ? void 0 : (0, C.rP)(n, "folder"),
          D = T?.sources.filter((e) => e.role === $),
          U = (D?.find(eH) ?? D?.[0])?.source
        null != U &&
          (l =
            "entry" === U.kind
              ? `/space/d/${encodeURIComponent(`libdir_${U.id}`)}`
              : `/${"page" === U.kind ? "space" : "spaces"}/${encodeURIComponent(U.id)}`)
        let F =
          null == n
            ? void 0
            : (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(eG.W.Separator, {}),
                  (0, a.jsx)(eG.W.Item, {
                    children: (0, a.jsx)("span", {
                      className: "flex max-w-64 min-w-0 flex-1 flex-col",
                      children: (0, a.jsx)(eG.W.Description, {
                        children:
                          null == A
                            ? (0, a.jsx)(m.A, {
                                id: "codex.pages.sharing.workspaceLink.minimum.unnamedWorkspace.helpText",
                                defaultMessage:
                                  "People in your workspace can still {role, select, viewer {view} commenter {comment} other {edit}} through {kind, select, space {this space} page {a parent page} other {a parent}}",
                                description:
                                  "Visible explanation inside Page and Space link-access menus for disabled lower-access options. The parent sets minimum access. Role is viewer, commenter, or editor. Kind identifies a disclosed space or parent page; other means the source is hidden. The workspace name is unavailable.",
                                values: { role: $, kind: U?.kind },
                              })
                            : (0, a.jsx)(m.A, {
                                id: "codex.pages.sharing.workspaceLink.minimum.namedWorkspace.helpText",
                                defaultMessage:
                                  "People at {workspaceName} can still {role, select, viewer {view} commenter {comment} other {edit}} through {kind, select, space {this space} page {a parent page} other {a parent}}",
                                description:
                                  "Visible explanation inside Page and Space link-access menus for disabled lower-access options. WorkspaceName is the organization name. The parent sets minimum access. Role is viewer, commenter, or editor. Kind identifies a disclosed space or parent page; other means the source is hidden.",
                                values: { workspaceName: A, role: $, kind: U?.kind },
                              }),
                      }),
                    }),
                  }),
                  null != l &&
                    (0, a.jsx)(eG.W.Item, {
                      onSelect: () => {
                        ;(E(), O(l))
                      },
                      children: (0, a.jsx)(m.A, {
                        id: "codex.pages.sharing.workspaceLink.source.open.label",
                        defaultMessage:
                          "{kind, select, space {Open space} entry {Open parent folder} other {Open parent page}}",
                        description:
                          "Menu link in Page and Space sharing that opens a readable ancestor resource where the user can access its normal sharing controls. Kind is space or page. It does not edit permissions.",
                        values: { kind: U?.kind },
                      }),
                    }),
                ],
              })
        ;((i = (0, a.jsx)(m.A, {
          id: "codex.pages.sharing.workspaceLink.source.attribution.label",
          defaultMessage: "{kind, select, space {From space} page {From parent page} other {From parent}}",
          description:
            "Short attribution below effective workspace link access in Page and Space sharing. Kind identifies the ancestor supplying the displayed role. Other means the source is undisclosed and cannot be linked. Hidden when the page has a stronger direct grant.",
          values: { kind: U?.kind },
        })),
          (s = z.DT.findLast((e) => e === x || e === n)))
        let W = z.DT.filter(
          (e) => (b || "role-library-folder-commenter" !== e) && (v.allowed_roles.includes(e) || e === n),
        ).map((e) => ({ value: e, disabled: !M || (null != n && z.DT.indexOf(e) < z.DT.indexOf(n)) }))
        ;((t = X.p),
          (p = "link"),
          _[26] !== L || _[27] !== q || _[28] !== R
            ? ((u =
                R &&
                !L &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex items-center justify-between gap-3",
                      children: [
                        (0, a.jsx)("p", {
                          className: "text-sm text-secondary select-none",
                          children: (0, a.jsx)(m.A, {
                            id: "codex.pages.sharing.workspaceLink.unknown.helpText",
                            defaultMessage: "Couldn’t load link access",
                            description:
                              "Warning in Page and Space sharing when effective workspace link access could not be verified. Retry refreshes the read. This does not mean access is restricted.",
                          }),
                        }),
                        (0, a.jsx)(P.$, {
                          color: "secondary",
                          variant: "ghost",
                          size: "sm",
                          onClick: q,
                          children: (0, a.jsx)(m.A, {
                            id: "codex.pages.sharing.workspaceLink.retry.action",
                            defaultMessage: "Retry",
                            description:
                              "Button beside a link-access loading error in Page and Space sharing. Retries reading permissions without submitting a change.",
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsx)("p", {
                      className: "text-xs text-secondary select-none",
                      children: (0, a.jsx)(m.A, {
                        id: "codex.pages.sharing.workspaceLink.direct.heading",
                        defaultMessage: "Set on this page",
                        description:
                          "Label above the known direct link-access setting when parent access could not be loaded. It describes only the setting on this page, including a Space home page, not all effective access.",
                      }),
                    }),
                  ],
                })),
              (_[26] = L),
              (_[27] = q),
              (_[28] = R),
              (_[29] = u))
            : (u = _[29]),
          (o = "flex items-center justify-between gap-3"),
          _[30] !== R
            ? ((e = R
                ? (0, a.jsx)(m.A, {
                    id: "codex.pages.sharing.workspaceLink.noDirect.label",
                    defaultMessage: "No workspace link",
                    description:
                      "Disabled link-access label under Set on this page in Page and Space sharing when no direct workspace grant exists and parent access is unknown. It does not mean the page is private.",
                  })
                : (0, a.jsx)(m.A, {
                    id: "codex.pages.sharing.onlyInvited",
                    defaultMessage: "Only those invited",
                    description: "Page and Space link-access option limiting access to existing collaborators",
                  })),
              (_[30] = R),
              (_[31] = e))
            : (e = _[31]))
        let G = S || R
        _[32] === Symbol.for("react.memo_cache_sentinel") ? ((r = (0, a.jsx)(N.$Rp, {})), (_[32] = r)) : (r = _[32])
        let B = null != n
        ;(_[33] !== B
          ? ((h = { value: "restricted", mode: "restricted", icon: r, disabled: B }), (_[33] = B), (_[34] = h))
          : (h = _[34]),
          _[35] !== j || _[36] !== W || _[37] !== M
            ? ((g = j
                ? [
                    {
                      value: "workspace",
                      mode: "workspace",
                      icon: (0, a.jsx)(N.MEe, {}),
                      disabled: 0 === W.length,
                      hidden: !M,
                    },
                  ]
                : []),
              (_[35] = j),
              (_[36] = W),
              (_[37] = M),
              (_[38] = g))
            : (g = _[38]),
          _[39] !== h || _[40] !== g ? ((f = [h, ...g]), (_[39] = h), (_[40] = g), (_[41] = f)) : (f = _[41]))
        let Q = null == s ? "restricted" : "workspace"
        ;(_[42] !== A
          ? ((y =
              null == A
                ? (0, a.jsx)(m.A, {
                    id: "codex.pages.sharing.workspaceLink.audience.unnamedWorkspace.label",
                    defaultMessage: "Anyone in this workspace",
                    description:
                      "Workspace-wide link-access option in Page and Space sharing when the organization name is unavailable. This identifies who can open the link.",
                  })
                : (0, a.jsx)(m.A, {
                    id: "codex.pages.sharing.workspaceLink.audience.namedWorkspace.label",
                    defaultMessage: "Anyone at {workspaceName}",
                    description:
                      "Workspace-wide link-access option in Page and Space sharing. WorkspaceName is the organization name, such as Acme. This identifies who can open the link.",
                    values: { workspaceName: A },
                  })),
            (_[42] = A),
            (_[43] = y))
          : (y = _[43]),
          _[44] !== x || _[45] !== S || _[46] !== n || _[47] !== I || _[48] !== W || _[49] !== R
            ? ((w = (e) => {
                R ||
                  S ||
                  ("restricted" === e
                    ? null == n && I(null)
                    : null == n && I(W.find((e) => e.value === x)?.value ?? W[0]?.value ?? null))
              }),
              (_[44] = x),
              (_[45] = S),
              (_[46] = n),
              (_[47] = I),
              (_[48] = W),
              (_[49] = R),
              (_[50] = w))
            : (w = _[50]),
          _[51] !== F ||
          _[52] !== f ||
          _[53] !== Q ||
          _[54] !== y ||
          _[55] !== w ||
          _[56] !== e ||
          _[57] !== G ||
          _[58] !== A
            ? ((c = (0, a.jsx)(eK.d, {
                restrictedLabel: e,
                disabled: G,
                footer: F,
                options: f,
                value: Q,
                workspaceName: A,
                workspaceLabel: y,
                onChange: w,
              })),
              (_[51] = F),
              (_[52] = f),
              (_[53] = Q),
              (_[54] = y),
              (_[55] = w),
              (_[56] = e),
              (_[57] = G),
              (_[58] = A),
              (_[59] = c))
            : (c = _[59]),
          (d =
            null != s &&
            (M || (null != n && k)
              ? (0, a.jsx)(eI.e, {
                  disabled: S || R,
                  footer: F,
                  variant: "inline",
                  options: W,
                  value: s,
                  renderLabel: eQ,
                  onChange: (e) => {
                    !R && !S && W.some((t) => t.value === e && !t.disabled) && I(e === n ? null : e)
                  },
                  removeLabel: (0, a.jsx)(m.A, {
                    id: "codex.pages.sharing.workspaceLink.source.useAccess.action",
                    defaultMessage:
                      "{kind, select, space {Use space access} page {Use parent page access} other {Use parent access}} ({role, select, viewer {Viewer} commenter {Commenter} editor {Editor} other {Owner}})",
                    description:
                      "Menu action in Page and Space link sharing that removes only the direct workspace grant and uses the parent's access. Kind identifies a disclosed space or parent page; other means an undisclosed ancestor. Role is the resulting minimum role. Keep the action concise.",
                    values: { kind: U?.kind, role: $ },
                  }),
                  onRemoveAccess: null != n && k ? () => I(null) : void 0,
                })
              : (0, a.jsx)(K.u, { permission: (0, C.rP)(s, "folder") }))),
          (_[0] = x),
          (_[1] = S),
          (_[2] = k),
          (_[3] = T?.sources),
          (_[4] = T?.sources.filter),
          (_[5] = j),
          (_[6] = L),
          (_[7] = O),
          (_[8] = I),
          (_[9] = E),
          (_[10] = q),
          (_[11] = v),
          (_[12] = b),
          (_[13] = R),
          (_[14] = M),
          (_[15] = A),
          (_[16] = t),
          (_[17] = i),
          (_[18] = n),
          (_[19] = s),
          (_[20] = l),
          (_[21] = o),
          (_[22] = c),
          (_[23] = d),
          (_[24] = p),
          (_[25] = u))
      } else
        ((t = _[16]),
          (i = _[17]),
          (n = _[18]),
          (s = _[19]),
          (l = _[20]),
          (o = _[21]),
          (c = _[22]),
          (d = _[23]),
          (p = _[24]),
          (u = _[25]))
      return (
        _[60] !== o || _[61] !== c || _[62] !== d
          ? ((h = (0, a.jsxs)("div", { className: o, children: [c, d] })),
            (_[60] = o),
            (_[61] = c),
            (_[62] = d),
            (_[63] = h))
          : (h = _[63]),
        _[64] !== i || _[65] !== n || _[66] !== E || _[67] !== s || _[68] !== l || _[69] !== R
          ? ((g =
              !R &&
              null != n &&
              s === n &&
              (0, a.jsx)("p", {
                className: "text-xs text-secondary select-none",
                children:
                  null == l
                    ? i
                    : (0, a.jsx)(y.N_, {
                        className: "cursor-interaction text-link-primary! underline underline-offset-2",
                        to: l,
                        onClick: E,
                        children: i,
                      }),
              })),
            (_[64] = i),
            (_[65] = n),
            (_[66] = E),
            (_[67] = s),
            (_[68] = l),
            (_[69] = R),
            (_[70] = g))
          : (g = _[70]),
        _[71] !== t || _[72] !== p || _[73] !== u || _[74] !== h || _[75] !== g
          ? ((f = (0, a.jsxs)(t, { kind: p, children: [u, h, g] })),
            (_[71] = t),
            (_[72] = p),
            (_[73] = u),
            (_[74] = h),
            (_[75] = g),
            (_[76] = f))
          : (f = _[76]),
        f
      )
    }
    function eQ(e) {
      return (0, a.jsx)(K.u, { permission: (0, C.rP)(e, "folder") })
    }
    function eH(e) {
      return null != e.source
    }
    let eV = ["role-library-folder-viewer", "role-library-folder-commenter", "role-library-folder-editor"],
      eY = (0, h.i1)(O.u, (e, { get: t }) => {
        let i = t(Q.loadedSpacePageMetadata$, e)
        return "granola_presentation" !== (null == i ? "page" : (0, es.th)(i))
      })
    function eZ(e) {
      let t,
        i,
        s,
        l,
        o,
        c,
        d = (0, r.c)(38),
        {
          target: p,
          pageId: u,
          itemName: g,
          copyLink: f,
          comments: _,
          copyLinkSpaceId: y,
          requestAccess: v,
          onClose: w,
        } = e,
        x = (0, h.gh)(O.u),
        k = (0, h.Ul)(Q.spaceAccountId$),
        S = (0, h.Ul)(b.chatGptAuthenticatedUserId$),
        j = (0, h.Ul)(M.v0)
      d[0] !== x.query ? ((t = x.query.getOptions(M.Qv)), (d[0] = x.query), (d[1] = t)) : (t = d[1])
      let A = t
      if (
        (d[2] !== A
          ? ((i = { ...A, staleTime: A.staleTime, refetchOnMount: "always" }), (d[2] = A), (d[3] = i))
          : (i = d[3]),
        (0, n.I)(i, x.queryClient),
        null == k || null == S)
      )
        return null
      d[4] !== g || d[5] !== p.id || d[6] !== p.type
        ? ((s =
            "entry" === p.type
              ? (0, a.jsx)(m.A, {
                  id: "librarySharing.fileTitle",
                  defaultMessage: "Share {fileName}",
                  description: "Title of the Library file or folder sharing dialog; fileName is the item's title",
                  values: { fileName: g },
                })
              : (0, a.jsx)(eS.r, { kind: p.type, id: p.id })),
          (d[4] = g),
          (d[5] = p.id),
          (d[6] = p.type),
          (d[7] = s))
        : (s = d[7])
      let C = s
      d[8] !== u || d[9] !== p.type
        ? ((l = "entry" !== p.type && null != u ? (0, a.jsx)(ef.Z, { kind: p.type, pageId: u }) : void 0),
          (d[8] = u),
          (d[9] = p.type),
          (d[10] = l))
        : (l = d[10])
      let I = l
      d[11] !== f || d[12] !== y || d[13] !== u
        ? ((o = f ?? (null != u ? (0, a.jsx)(D, { pageId: u, spaceId: y }) : void 0)),
          (d[11] = f),
          (d[12] = y),
          (d[13] = u),
          (d[14] = o))
        : (o = d[14])
      let q = o
      if (void 0 !== v && v && "entry" !== p.type && null != u) {
        let e,
          t,
          i = `${k}:${S}:${p.type}:${p.id}`
        return (
          d[15] !== p.id || d[16] !== p.type
            ? ((e = { kind: p.type, id: p.id }), (d[15] = p.id), (d[16] = p.type), (d[17] = e))
            : (e = d[17]),
          d[18] !== y || d[19] !== w || d[20] !== u || d[21] !== i || d[22] !== e
            ? ((t = (0, a.jsx)(en, { target: e, pageId: u, copyLinkSpaceId: y, onClose: w }, i)),
              (d[18] = y),
              (d[19] = w),
              (d[20] = u),
              (d[21] = i),
              (d[22] = e),
              (d[23] = t))
            : (t = d[23]),
          t
        )
      }
      if ("unavailable" === j) {
        let e
        return (
          d[24] !== q || d[25] !== w || d[26] !== I || d[27] !== C
            ? ((e = (0, a.jsx)(eX, { title: C, subtitle: I, copyLink: q, onClose: w })),
              (d[24] = q),
              (d[25] = w),
              (d[26] = I),
              (d[27] = C),
              (d[28] = e))
            : (e = d[28]),
          e
        )
      }
      let E = `${k}:${S}:${p.type}:${p.id}`
      return (
        d[29] !== _ ||
        d[30] !== q ||
        d[31] !== w ||
        d[32] !== u ||
        d[33] !== I ||
        d[34] !== E ||
        d[35] !== p ||
        d[36] !== C
          ? ((c = (0, a.jsx)(
              eJ,
              { comments: _, target: p, pageId: u, title: C, subtitle: I, copyLink: q, onClose: w },
              E,
            )),
            (d[29] = _),
            (d[30] = q),
            (d[31] = w),
            (d[32] = u),
            (d[33] = I),
            (d[34] = E),
            (d[35] = p),
            (d[36] = C),
            (d[37] = c))
          : (c = d[37]),
        c
      )
    }
    function eX(e) {
      let t,
        i,
        n,
        s,
        l,
        o = (0, r.c)(20),
        {
          title: c,
          subtitle: d,
          copyLink: p,
          onClose: u,
          onRequestClose: g,
          onPortalContainerChange: f,
          confirmation: _,
        } = e,
        y = (0, h.gh)(O.u),
        v = (0, h.Ul)(M.v0)
      o[0] !== u || o[1] !== g
        ? ((t = () => {
            g?.() !== "deny" && u()
          }),
          (o[0] = u),
          (o[1] = g),
          (o[2] = t))
        : (t = o[2])
      let b = t,
        w = "loading" === v,
        x = "unavailable" === v ? null : p
      return (
        o[3] !== b || o[4] !== x
          ? ((i = (0, a.jsx)(eC.r, {
              onCancel: b,
              onClose: b,
              hasPendingAccessChange: !1,
              hasPendingInvitees: !1,
              isSaving: !1,
              copyLink: x,
            })),
            (o[3] = b),
            (o[4] = x),
            (o[5] = i))
          : (i = o[5]),
        o[6] !== _ || o[7] !== i
          ? ((n = (0, a.jsxs)(a.Fragment, { children: [i, _] })), (o[6] = _), (o[7] = i), (o[8] = n))
          : (n = o[8]),
        o[9] !== y || o[10] !== v
          ? ((s = (0, a.jsx)(j.OO, {
              children:
                "unavailable" === v
                  ? (0, a.jsx)(S.l, {
                      role: "status",
                      content: (0, a.jsx)(m.A, {
                        id: "codex.space.driveSharing.managementUnavailable",
                        defaultMessage:
                          "Your admin has turned off sharing for your account. Ask your admin to enable sharing.",
                        description:
                          "The selected account's admin has disabled managing Page or Space permissions; ask the admin to enable sharing",
                      }),
                    })
                  : (0, a.jsx)(J.DN, {
                      isLoading: "loading" === v,
                      onRetry: () => {
                        y.get(M.Qv).refetch()
                      },
                    }),
            })),
            (o[9] = y),
            (o[10] = v),
            (o[11] = s))
          : (s = o[11]),
        o[12] !== f || o[13] !== g || o[14] !== d || o[15] !== w || o[16] !== n || o[17] !== s || o[18] !== c
          ? ((l = (0, a.jsx)(ef.U, {
              isLoading: w,
              title: c,
              subtitle: d,
              onRequestClose: g,
              onPortalContainerChange: f,
              footer: n,
              children: s,
            })),
            (o[12] = f),
            (o[13] = g),
            (o[14] = d),
            (o[15] = w),
            (o[16] = n),
            (o[17] = s),
            (o[18] = c),
            (o[19] = l))
          : (l = o[19]),
        l
      )
    }
    function eJ(e) {
      let t,
        i,
        c,
        p,
        _,
        L,
        P,
        N,
        T,
        $,
        D,
        U,
        F,
        B,
        V,
        Y,
        ee,
        et,
        ei,
        ea,
        er,
        en,
        es,
        ed,
        ev,
        eS,
        eR,
        e$,
        eF,
        eG,
        eK,
        eQ,
        eH,
        eZ,
        eJ,
        tv,
        tb,
        tw,
        tx,
        tk,
        tS,
        tj,
        tA,
        tM,
        tC,
        tI,
        tq,
        tE,
        tL,
        tP,
        tN,
        tO,
        tT,
        tR,
        t$,
        tD,
        tU,
        tF,
        tW,
        tz,
        tG,
        tK = (0, r.c)(226),
        { target: tB, pageId: tQ, title: tH, subtitle: tV, copyLink: tY, comments: tZ, onClose: tX } = e,
        tJ = (0, h.gh)(O.u),
        t0 = (0, f.A)(),
        { data: t1 } = (0, k.oV)(),
        t2 = (0, h.Ul)(R.pagesEnabled$),
        t3 = "entry" === tB.type || t2,
        t4 = (0, h.Ul)(M.v0),
        t5 = (0, h.Ul)(M.Uw),
        t6 = (0, h.Ul)(Q.spaceAccountId$),
        t7 = (0, h.Ul)(b.chatGptAuthenticatedUserId$),
        t8 = t1?.accounts?.find((e) => e.id === t6 && "workspace" === e.structure),
        t9 = { ...tB, includeInheritedAccess: !0, inheritedOnly: !0 }
      tK[0] !== tJ.query || tK[1] !== tB
        ? ((t = tJ.query.getOptions(W.e2, tB)), (tK[0] = tJ.query), (tK[1] = tB), (tK[2] = t))
        : (t = tK[2])
      let ie = t
      tK[3] !== t6 || tK[4] !== tB || tK[5] !== t7
        ? ((i = { accountId: t6, userId: t7, target: tB }), (tK[3] = t6), (tK[4] = tB), (tK[5] = t7), (tK[6] = i))
        : (i = tK[6])
      let it = (0, h.uO)(ez.C, i),
        ii = (0, h.Ul)(it.unconfirmed$),
        ia = (0, h.Ul)(it.acceptedPageChanges$)
      tK[7] !== t6 || tK[8] !== tB || tK[9] !== t7
        ? ((c = { accountId: t6, userId: t7, target: tB }), (tK[7] = t6), (tK[8] = tB), (tK[9] = t7), (tK[10] = c))
        : (c = tK[10])
      let ir = (0, h._U)(ez.y, c),
        is = (0, h.Ul)(it.completedSpaceChanges$),
        il = t3 && "available" === t4 && null != t6 && null != t7
      ;(tK[11] !== is
        ? ((p = () => (!(is.length > 0) && !!s.t.isOnline()) || "always"), (tK[11] = is), (tK[12] = p))
        : (p = tK[12]),
        tK[13] !== ie || tK[14] !== il || tK[15] !== p
          ? ((_ = { ...ie, enabled: il, staleTime: eN.D.THIRTY_SECONDS, refetchOnMount: p }),
            (tK[13] = ie),
            (tK[14] = il),
            (tK[15] = p),
            (tK[16] = _))
          : (_ = tK[16]))
      let { data: io, isPending: ic, fetchStatus: id, isStale: ip, isError: iu, refetch: ih } = (0, n.I)(_),
        ig = tJ.query.getOptions(W.e2, t9),
        im = t3 && "available" === t4 && ie.enabled && null != io && !iu
      tK[17] !== ig || tK[18] !== im
        ? ((L = { ...ig, enabled: im, staleTime: eN.D.THIRTY_SECONDS, refetchOnWindowFocus: !1 }),
          (tK[17] = ig),
          (tK[18] = im),
          (tK[19] = L))
        : (L = tK[19])
      let { data: i_, isSuccess: iy, isPending: iv, isStale: ib, fetchStatus: iw, refetch: ix } = (0, n.I)(L),
        ik = iy && !ib && "idle" === iw ? i_ : void 0,
        iS = iy && "idle" === iw ? i_.inherited_workspace_link_access : void 0
      tK[20] !== ik?.inherited_workspace_link_access || tK[21] !== iS
        ? ((P = ik?.inherited_workspace_link_access ?? (iS && { ...iS, sources: iS.sources.map(tm) })),
          (tK[20] = ik?.inherited_workspace_link_access),
          (tK[21] = iS),
          (tK[22] = P))
        : (P = tK[22])
      let ij = P,
        iA = ic || "paused" === id || (ip && "idle" !== id)
      tK[23] !== io || tK[24] !== iu || tK[25] !== ic || tK[26] !== t4 || tK[27] !== tB.type
        ? ((N =
            "available" === t4 && !ic && !iu && ("page" === tB.type || (null != io && (0, W.TO)(io))) ? io : void 0),
          (tK[23] = io),
          (tK[24] = iu),
          (tK[25] = ic),
          (tK[26] = t4),
          (tK[27] = tB.type),
          (tK[28] = N))
        : (N = tK[28])
      let iM = N,
        iC = null == iM ? null : (0, W.f9)(iM),
        iI = t7?.split("__")[0],
        iq = iC?.principal_id.split("__")[0]
      tK[29] !== t0 || tK[30] !== t9 || tK[31] !== tJ || tK[32] !== tB
        ? ((T = function (e, t) {
            let i = t instanceof eT.fk && 409 === t.status ? (0, w.pZ)(t) : null,
              a =
                (t instanceof Error && "space_sharing_inherited_access" === t.message) ||
                "This recipient already inherits this access from an ancestor. Edit sharing at that source." === i ||
                i?.startsWith("This recipient already inherits equal or stronger access"),
              r = tJ.get(W.e2, t9),
              n =
                a && r.isSuccess && !r.isStale && "idle" === r.fetchStatus && "available" === tJ.get(M.v0)
                  ? tf(
                      r.data,
                      "invite" === e.action
                        ? e.recipient
                        : tJ.query.getData(W.e2, tB)?.shares.find((t) => t.share_id === e.shareId)?.recipient,
                    )
                  : void 0
            tJ.get(A.Id).danger(
              null != n
                ? t0.formatMessage(
                    {
                      id: "codex.space.driveSharing.inheritedAccessConflictSource",
                      defaultMessage:
                        "This recipient already has access through {kind, select, page {a parent page} entry {a parent folder} other {the space}}",
                      description:
                        "An inherited-access rejection with a source authorized for disclosure. Kind identifies the ancestor Page or Space; no recipient identity or source title is exposed. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
                    },
                    { kind: n.kind },
                  )
                : (!a && i) || t0.formatMessage(ty.saveError),
              { errorAnalytics: { toastId: "sharingDialog.mutate.saveError" } },
            )
          }),
          (tK[29] = t0),
          (tK[30] = t9),
          (tK[31] = tJ),
          (tK[32] = tB),
          (tK[33] = T))
        : (T = tK[33])
      let iE = T
      ;(tK[34] !== t6 || tK[35] !== t7
        ? (($ = ["space", "save-library-sharing", t7, t6]), (tK[34] = t6), (tK[35] = t7), (tK[36] = $))
        : ($ = tK[36]),
        tK[37] !== t6 || tK[38] !== tJ || tK[39] !== iE || tK[40] !== tB.type || tK[41] !== t7
          ? ((D = async (e) => {
              let {
                changes: t,
                signal: i,
                telemetry: a,
                initialSharing: r,
                workspaceChangeIndex: n,
                workspaceChange: s,
              } = e
              i.throwIfAborted()
              let l = await (0, W.X5)(
                tJ,
                t,
                a,
                r,
                i,
                void 0,
                (e, t) => {
                  t.catch((t) => {
                    tJ.get(Q.spaceAccountId$) === t6 &&
                      tJ.get(b.chatGptAuthenticatedUserId$) === t7 &&
                      ("entry" === tB.type || tJ.get(R.pagesEnabled$)) &&
                      !(t instanceof Error && "AbortError" === t.name) &&
                      iE(e, t)
                  })
                },
                void 0,
                s,
              )
              i.aborted || tJ.queryClient.invalidateQueries({ queryKey: ["pages-sharing-recent-recipients", t6, t7] })
              let o = l[n],
                c = !1
              if (
                !i.aborted &&
                ("entry" === tB.type || tJ.get(R.pagesEnabled$)) &&
                o?.status === "rejected" &&
                ((o.reason instanceof eT.fk && [403, 404].includes(o.reason.status)) ||
                  (o.reason instanceof Error && "sharing_access_unavailable" === o.reason.message))
              ) {
                let { data: e, isSuccess: t } = await tJ.get(M.Qv).refetch()
                c =
                  t &&
                  e?.includes("library_sharing_management_available") === !0 &&
                  !e.includes("library_workspace_link_sharing_available")
              }
              return { results: l, workspaceSharingDisabled: c }
            }),
            (tK[37] = t6),
            (tK[38] = tJ),
            (tK[39] = iE),
            (tK[40] = tB.type),
            (tK[41] = t7),
            (tK[42] = D))
          : (D = tK[42]),
        tK[43] !== $ || tK[44] !== D
          ? ((U = { mutationKey: $, mutationFn: D, networkMode: "always" }), (tK[43] = $), (tK[44] = D), (tK[45] = U))
          : (U = tK[45]))
      let iL = (0, l.n)(U, tJ.queryClient)
      tK[46] !== t6 || tK[47] !== t7
        ? ((F = {
            filters: { mutationKey: ["space", "save-library-sharing", t7, t6], status: "pending", exact: !0 },
            select: tg,
          }),
          (tK[46] = t6),
          (tK[47] = t7),
          (tK[48] = F))
        : (F = tK[48])
      let iP = (0, o.S)(F, tJ.queryClient)
      tK[49] !== tB.id || tK[50] !== tB.type
        ? ((B = (e) => (e?.changes ?? []).filter((e) => e.target.type === tB.type && e.target.id === tB.id)),
          (tK[49] = tB.id),
          (tK[50] = tB.type),
          (tK[51] = B))
        : (B = tK[51])
      let iN = iP.flatMap(B)
      tK[52] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = { draft: new Map(), invitees: [] }), (tK[52] = V))
        : (V = tK[52])
      let [iO, iT] = (0, g.useState)(V),
        { draft: iR, invitees: i$ } = iO,
        [iD, iU] = (0, g.useState)(null),
        [iF, iW] = (0, g.useState)(!1),
        [iz, iG] = (0, g.useState)(!1),
        iK = (0, g.useRef)(null),
        iB = (0, g.useRef)(null),
        iQ = (0, g.useRef)(!1),
        iH = (0, g.useRef)(null),
        iV = (0, g.useRef)(null),
        iY = (0, g.useRef)(null)
      ;(tK[53] !== tJ || tK[54] !== tB.type
        ? ((Y = () => {
            var e, t
            let i, a, r, n, s, l, o, c
            if ("entry" === tB.type) return
            let d =
              ((e = (0, v.dj)(tJ)),
              (t = { target_type: tB.type, backing_type: "drive" }),
              (i = crypto.randomUUID()),
              (a = (0, ey.m7)({ attributes: ek(t, i), name: "pages.sharing.attempt" })),
              (r = a?.trace ?? void 0),
              (n = { current_access: 0, confirmation: 0 }),
              (s = 0),
              (l = !1),
              (o = !1),
              (c = () => {
                l && 0 === s && !o && ((o = !0), a?.finish(void 0, { outcome: "expected", reason: "dialog_closed" }))
              }),
              {
                dispose: () => {
                  ;((l = !0), c())
                },
                nextRetryOrdinal: (e) => {
                  var t
                  let i = 0 === (t = n[e]) ? "initial" : 1 === t ? "retry_1" : "retry_2_plus"
                  return ((n[e] += 1), i)
                },
                startPhase: ({ operation: a, phase: n, retryOrdinal: l, searchMode: o, recipientLookupScope: d }) => {
                  var p, u, h, g, m, f, _, y
                  let v,
                    b = performance.now(),
                    w = {
                      ...t,
                      operation: a,
                      phase: n,
                      retry_ordinal: l,
                      search_mode: o,
                      ...(null == d ? {} : { recipient_lookup_scope: d }),
                    },
                    x = {
                      backingType: t.backing_type,
                      operation: a,
                      phase: n,
                      retryOrdinal: l,
                      searchMode: o,
                      targetType: t.target_type,
                      ...(null == d ? {} : { recipientLookupScope: d }),
                    }
                  e.count("codex_pages", "sharing_phase_started", w)
                  let k =
                      ((p = r),
                      (u = t),
                      (h = i),
                      (g = a),
                      (m = n),
                      (f = l),
                      (_ = o),
                      (y = d),
                      null == p
                        ? null
                        : (0, ey.m7)({
                            attributes: {
                              ...ek(u, h),
                              "sharing.operation": g,
                              "sharing.phase": m,
                              "sharing.retry_ordinal": f,
                              "sharing.search_mode": _,
                              ...(null == y ? {} : { "sharing.recipient_lookup_scope": y }),
                            },
                            name: `pages.sharing.${m}`,
                            trace: p,
                          })),
                    S =
                      k?.trace ??
                      (function (e) {
                        let t = e?.traceparent.split("-")[1]
                        if (null != t)
                          return {
                            traceparent: `00-${t}-${[...crypto.getRandomValues(new Uint8Array(8))].map((e) => e.toString(16).padStart(2, "0")).join("")}-01`,
                            tracestate: e?.tracestate,
                          }
                      })(r),
                    j = !1
                  ;((s += 1), eb("started", x, i, S))
                  let A = (t, a, r, n) => {
                      var l
                      if (j) return
                      ;((j = !0), (s -= 1))
                      let o = Math.max(0, performance.now() - b),
                        d = {
                          ...w,
                          ambiguous_commit: r ? "true" : "false",
                          outcome: t,
                          reason: a,
                          roster_size_bucket: ex(n),
                        }
                      ;(e.count("codex_pages", "sharing_phase_result", d),
                        e.hist("codex_pages", "sharing_phase_latency_ms", d, o),
                        eb(
                          "finished",
                          { ...x, ambiguousCommit: r, outcome: t, reason: a, rosterSizeBucket: ex(n) },
                          i,
                          S,
                          o,
                          v,
                        ),
                        k?.finish(void 0, {
                          outcome: "success" === (l = t) ? "success" : "cancelled" === l ? "aborted" : "failure",
                          reason: a,
                        }),
                        c())
                    },
                    M = (function (e) {
                      if (null != e)
                        return {
                          traceparent: e.traceparent,
                          ...(null == e.tracestate ? {} : { tracestate: e.tracestate }),
                        }
                    })(S)
                  return {
                    requestOptions:
                      null == M
                        ? {}
                        : {
                            additionalHeaders: M,
                            onResponseHeaders: (e) => {
                              null != (v = e.get("x-request-id") ?? void 0) &&
                                eb("request_correlated", x, i, S, void 0, v)
                            },
                          },
                    complete: (e) => A("success", "none", !1, e),
                    fail: (e, t = !1) => A("failure", e, t),
                    cancel: (e = "dialog_closed", t = !1) => A("cancelled", e, t),
                  }
                },
              })
            return (
              (iB.current = d),
              (iH.current = d.startPhase({
                operation: "read_current_access",
                phase: "current_access",
                retryOrdinal: d.nextRetryOrdinal("current_access"),
                searchMode: "none",
              })),
              () => {
                ;(iH.current?.cancel(), iV.current?.cancel(), d.dispose(), iB.current === d && (iB.current = null))
              }
            )
          }),
          (tK[53] = tJ),
          (tK[54] = tB.type),
          (tK[55] = Y))
        : (Y = tK[55]),
        tK[56] !== tJ || tK[57] !== tB.id || tK[58] !== tB.type
          ? ((ee = [tJ, tB.id, tB.type]), (tK[56] = tJ), (tK[57] = tB.id), (tK[58] = tB.type), (tK[59] = ee))
          : (ee = tK[59]),
        (0, g.useLayoutEffect)(Y, ee),
        tK[60] === Symbol.for("react.memo_cache_sentinel")
          ? ((et = () => () => {
              iY.current?.cancel()
            }),
            (tK[60] = et))
          : (et = tK[60]),
        tK[61] !== t6 || tK[62] !== t3 || tK[63] !== tB.id || tK[64] !== tB.type || tK[65] !== t7
          ? ((ei = [t6, t7, tB.id, tB.type, t3]),
            (tK[61] = t6),
            (tK[62] = t3),
            (tK[63] = tB.id),
            (tK[64] = tB.type),
            (tK[65] = t7),
            (tK[66] = ei))
          : (ei = tK[66]),
        (0, g.useLayoutEffect)(et, ei))
      let [iZ, iX] = (0, g.useState)(""),
        iJ = (0, g.useRef)(null),
        [i0, i1] = (0, g.useState)(),
        i2 = (0, g.useRef)("role-library-folder-viewer"),
        i3 = (0, h._U)(eY, "page" === tB.type ? (tQ ?? null) : null),
        i4 = "entry" === tB.type || i3,
        i5 = iM?.allowed_roles.filter((e) => "role-library-folder-commenter" !== e || i4)
      tK[67] !== t3 || tK[68] !== iu || tK[69] !== iA || tK[70] !== t4 || tK[71] !== iM
        ? ((ea = t3 && !iA && "available" === t4 && !iu && null != iM && (0, W.TO)(iM)),
          (tK[67] = t3),
          (tK[68] = iu),
          (tK[69] = iA),
          (tK[70] = t4),
          (tK[71] = iM),
          (tK[72] = ea))
        : (ea = tK[72])
      let i6 = ea,
        i7 = (0, h.Ul)(!!i6 && "entry" !== tB.type && eE.A),
        i8 = (0, h._U)(eL.JW, "2832056708"),
        i9 = (0, h._U)(eL.JW, "2259660874") && "entry" !== tB.type,
        ae = "entry" !== tB.type && i6 && iM?.workspace_id !== void 0
      tK[73] !== ae ? ((er = { enabled: ae }), (tK[73] = ae), (tK[74] = er)) : (er = tK[74])
      let { data: at, isError: ai, isFetching: aa, fetchStatus: ar } = (0, h._U)(eW.G, tB, er)
      tK[75] !== i6 || tK[76] !== iZ
        ? ((en = i6 ? iZ.trim().replace(/^@/u, "") : ""), (tK[75] = i6), (tK[76] = iZ), (tK[77] = en))
        : (en = tK[77])
      let an = en
      tK[78] !== iM
        ? ((es = "unknown"),
          iM?.workspace_id !== void 0 && (es = null == iM.workspace_id ? "consumer_email" : "workspace_directory"),
          (tK[78] = iM),
          (tK[79] = es))
        : (es = tK[79])
      let as = "workspace_directory" === es,
        al = i6 && as && "page" === tB.type && tB.id === tQ && null != tZ,
        ao = (0, g.useSyncExternalStore)(
          al ? tZ.subscribe : ep.aW,
          al ? tZ.getSnapshot : ep.tb,
          tZ?.getServerSnapshot ?? ep.tb,
        ),
        ac =
          "entry" !== tB.type && i6 && as && null != iM
            ? {
                ...tB,
                sharing: iM,
                query: an,
                commenters: (0, ep.Qk)(ao),
                excludeUserIds: [
                  iM.owner.principal_id,
                  ...(null == iC ? [] : [iC.principal_id]),
                  ...(null == t7 ? [] : [t7]),
                  ...iM.shares.flatMap(th),
                  ...i$.flatMap(tu),
                ].map(tp),
              }
            : null,
        ad = (0, h._U)(eo.K, ac),
        ap = (0, eO.o)(an, 150),
        au = (0, h.Ul)(iM?.workspace_id != null && iM.workspace_id === t6 ? q.e : null),
        ah = i6 && "entry" !== tB.type ? iM?.workspace_id : null
      tK[80] !== an || tK[81] !== ah
        ? ((ed = { workspaceId: ah, query: an }), (tK[80] = an), (tK[81] = ah), (tK[82] = ed))
        : (ed = tK[82])
      let ag = (0, h._U)(E.$, ed)
      tK[83] !== t6 || tK[84] !== an || tK[85] !== tB.id || tK[86] !== tB.type || tK[87] !== t7
        ? ((ev = ["pages-sharing-recipients", t6, t7, tB.type, tB.id, an]),
          (tK[83] = t6),
          (tK[84] = an),
          (tK[85] = tB.id),
          (tK[86] = tB.type),
          (tK[87] = t7),
          (tK[88] = ev))
        : (ev = tK[88])
      let am = i6 && an.length > 0 && an === ap
      ;(tK[89] !== an || tK[90] !== tB.id || tK[91] !== tB.type
        ? ((eS = (e) => {
            let { signal: t } = e
            return x.Request.safePost("/pages/sharing/recipients", {
              requestBody: {
                entry_id: "entry" === tB.type ? tB.id : void 0,
                page_id: "page" === tB.type ? tB.id : void 0,
                space_id: "space" === tB.type ? tB.id : void 0,
                query: an,
                limit: 10,
              },
              signal: AbortSignal.any([t, AbortSignal.timeout(15e3)]),
            })
          }),
          (tK[89] = an),
          (tK[90] = tB.id),
          (tK[91] = tB.type),
          (tK[92] = eS))
        : (eS = tK[92]),
        tK[93] !== ev || tK[94] !== am || tK[95] !== eS
          ? ((eR = {
              queryKey: ev,
              enabled: am,
              networkMode: "always",
              refetchOnReconnect: !0,
              retry: eP.kh,
              staleTime: eN.D.ONE_MINUTE,
              queryFn: eS,
            }),
            (tK[93] = ev),
            (tK[94] = am),
            (tK[95] = eS),
            (tK[96] = eR))
          : (eR = tK[96]))
      let { data: af, isPending: a_, isFetching: ay, isError: av, failureCount: ab } = (0, n.I)(eR)
      tK[97] !== af?.items || tK[98] !== af?.items.filter
        ? ((e$ = af?.items.filter(td)), (tK[97] = af?.items), (tK[98] = af?.items.filter), (tK[99] = e$))
        : (e$ = tK[99])
      let aw = e$
      tK[100] !== av || tK[101] !== af?.unavailable_types
        ? ((eF = av || af?.unavailable_types?.includes("user")),
          (tK[100] = av),
          (tK[101] = af?.unavailable_types),
          (tK[102] = eF))
        : (eF = tK[102])
      let ax = eF,
        ak = ax || ab > 0,
        aS = i6 && an.length > 0 && (a_ || ay)
      ;(tK[103] !== iu || tK[104] !== iA || tK[105] !== iM
        ? ((eG = () => {
            if (iA) {
              if (null == iH.current) {
                let e = iB.current
                iH.current =
                  e?.startPhase({
                    operation: "read_current_access",
                    phase: "current_access",
                    retryOrdinal: e.nextRetryOrdinal("current_access") ?? "initial",
                    searchMode: "none",
                  }) ?? null
              }
              return
            }
            let e = iH.current
            null != e &&
              ((iH.current = null), iu || null == iM ? e.fail("access_failed") : e.complete(iM.shares.length + 1))
          }),
          (eK = [iu, iA, iM]),
          (tK[103] = iu),
          (tK[104] = iA),
          (tK[105] = iM),
          (tK[106] = eG),
          (tK[107] = eK))
        : ((eG = tK[106]), (eK = tK[107])),
        (0, g.useLayoutEffect)(eG, eK),
        tK[108] !== es
          ? ((eQ = () =>
              iB.current?.startPhase({
                operation: "recipient_lookup",
                phase: "recipient_lookup",
                retryOrdinal: "initial",
                searchMode: "text_query",
                recipientLookupScope: es,
              }) ?? null),
            (tK[108] = es),
            (tK[109] = eQ))
          : (eQ = tK[109]))
      let aj = (0, g.useEffectEvent)(eQ)
      ;(tK[110] !== an.length || tK[111] !== aj
        ? ((eH = () => {
            ;(iV.current?.cancel("superseded"), (iV.current = 0 === an.length ? null : aj()))
          }),
          (tK[110] = an.length),
          (tK[111] = aj),
          (tK[112] = eH))
        : (eH = tK[112]),
        tK[113] !== an ? ((eZ = [an]), (tK[113] = an), (tK[114] = eZ)) : (eZ = tK[114]),
        (0, g.useLayoutEffect)(eH, eZ),
        tK[115] !== aS || tK[116] !== an.length || tK[117] !== aw?.length || tK[118] !== ax
          ? ((eJ = () => {
              let e = iV.current
              null == e ||
                0 === an.length ||
                aS ||
                ((iV.current = null), ax ? e.fail("search_failed") : e.complete(aw?.length ?? 0))
            }),
            (tK[115] = aS),
            (tK[116] = an.length),
            (tK[117] = aw?.length),
            (tK[118] = ax),
            (tK[119] = eJ))
          : (eJ = tK[119]))
      let aA = aw?.length
      if (
        (tK[120] !== aS || tK[121] !== an || tK[122] !== aA || tK[123] !== ax
          ? ((tv = [aS, an, aA, ax]), (tK[120] = aS), (tK[121] = an), (tK[122] = aA), (tK[123] = ax), (tK[124] = tv))
          : (tv = tK[124]),
        (0, g.useLayoutEffect)(eJ, tv),
        null == t6 || null == t7 || !t3)
      )
        return null
      tK[125] !== iR.size || tK[126] !== i$
        ? ((tb = () => (iR.size > 0 || i$.length > 0 ? (iG(!0), "deny") : "allow")),
          (tK[125] = iR.size),
          (tK[126] = i$),
          (tK[127] = tb))
        : (tb = tK[127])
      let aM = tb
      tK[128] === Symbol.for("react.memo_cache_sentinel")
        ? ((tw = (e) => {
            iK.current = e
          }),
          (tK[128] = tw))
        : (tw = tK[128])
      let aC = tw
      tK[129] !== iz || tK[130] !== tX
        ? ((tx = iz
            ? (0, a.jsx)(eU, {
                getFallbackFocus: () => iK.current?.closest('[role="dialog"]') ?? null,
                onCancel: () => iG(!1),
                onDiscard: tX,
              })
            : null),
          (tK[129] = iz),
          (tK[130] = tX),
          (tK[131] = tx))
        : (tx = tK[131])
      let aI = tx
      if ("available" !== t4) {
        let e
        return (
          tK[132] !== tY ||
          tK[133] !== aI ||
          tK[134] !== tX ||
          tK[135] !== aM ||
          tK[136] !== aC ||
          tK[137] !== tV ||
          tK[138] !== tH
            ? ((e = (0, a.jsx)(eX, {
                title: tH,
                subtitle: tV,
                copyLink: tY,
                onClose: tX,
                onRequestClose: aM,
                onPortalContainerChange: aC,
                confirmation: aI,
              })),
              (tK[132] = tY),
              (tK[133] = aI),
              (tK[134] = tX),
              (tK[135] = aM),
              (tK[136] = aC),
              (tK[137] = tV),
              (tK[138] = tH),
              (tK[139] = e))
            : (e = tK[139]),
          e
        )
      }
      let aq = iN.length > 0
      tK[140] !== iM?.shares || tK[141] !== iM?.shares.some
        ? ((tk = (e) => !iM?.shares.some((t) => (0, W.hk)(t.recipient) === (0, W.hk)(e.share.recipient))),
          (tK[140] = iM?.shares),
          (tK[141] = iM?.shares.some),
          (tK[142] = tk))
        : (tk = tK[142])
      let aE = [...iN, ...ia.filter(tk).map(tc)].filter(to)
      tK[143] !== ia || tK[144] !== iR || tK[145] !== iM?.shares || tK[146] !== iM?.shares.some
        ? ((tS = [...iR.values()].some(
            (e) =>
              "invite" === e.action &&
              ia.some((t) => "invite" === t.change.action && (0, W.hk)(t.share.recipient) === (0, W.hk)(e.recipient)) &&
              !iM?.shares.some((t) => (0, W.hk)(t.recipient) === (0, W.hk)(e.recipient)),
          )),
          (tK[143] = ia),
          (tK[144] = iR),
          (tK[145] = iM?.shares),
          (tK[146] = iM?.shares.some),
          (tK[147] = tS))
        : (tS = tK[147])
      let aL = tS,
        aP = eV.filter((e) => i5?.includes(e)).map(tl),
        aN = new Map(iM?.shares.map(ts))
      for (let { change: e, share: t } of [...is, ...ir]) {
        if (null == iM) break
        if ("remove" === e.action) {
          aN.delete(e.shareId)
          continue
        }
        let i = aN.get(t.share_id)
        if (null == i && [...aN.values()].some((e) => (0, W.hk)(e.recipient) === (0, W.hk)(t.recipient))) continue
        let a = "invite" === e.action ? e.invitee : void 0
        aN.set(t.share_id, {
          ...t,
          ...i,
          role_id: e.roleId,
          recipient_display_name: i?.recipient_display_name ?? t.recipient_display_name ?? a?.label,
          recipient_email: i?.recipient_email ?? t.recipient_email ?? a?.secondaryLabel,
          recipient_avatar_url: i?.recipient_avatar_url ?? t.recipient_avatar_url,
        })
      }
      let aO = new Set()
      for (let e of [...[...iR.values()].filter(tn), ...iN])
        if ("invite" === e.action && null != iM) {
          let t = (0, W.hk)(e.recipient),
            i = [...aN.values()].find((e) => (0, W.hk)(e.recipient) === t),
            a = i?.share_id ?? e.invitee?.id ?? t
          ;(aN.set(a, {
            ...i,
            share_id: a,
            inviter: i?.inviter ?? iM.owner,
            recipient: e.recipient,
            role_id: e.roleId,
            status: i?.status ?? "pending",
            recipient_display_name: i?.recipient_display_name ?? e.invitee?.label,
            recipient_email: i?.recipient_email ?? e.invitee?.secondaryLabel,
          }),
            iN.includes(e) && aO.add(a))
        } else if ("remove" === e.action) (aN.delete(e.shareId), aO.add(e.shareId))
        else if ("update" === e.action) {
          let t = aN.get(e.shareId)
          ;(null != t && aN.set(e.shareId, { ...t, role_id: e.roleId }), aO.add(e.shareId))
        }
      let aT = [...aN.values()].find(
        (e) =>
          "principal" === e.recipient.recipient_type &&
          "workspace" === e.recipient.principal_type &&
          e.recipient.principal_id === t6,
      )
      if (tK[148] !== ir || tK[149] !== iM) {
        let e
        ;(tK[151] !== iM
          ? ((e = (e) => !iM?.shares.some((t) => t.share_id === e.share.share_id)), (tK[151] = iM), (tK[152] = e))
          : (e = tK[152]),
          (tj = new Set(ir.filter(e).map(tr))),
          (tK[148] = ir),
          (tK[149] = iM),
          (tK[150] = tj))
      } else tj = tK[150]
      let aR = tj
      tK[153] !== ia || tK[154] !== t6 || tK[155] !== iM
        ? ((tA = (e) => {
            let t =
              "invite" === e.action
                ? e.recipient
                : (iM?.shares.find((t) => t.share_id === e.shareId)?.recipient ??
                  ia.find((t) => t.share.share_id === e.shareId)?.share.recipient)
            return t?.recipient_type === "principal" && "workspace" === t.principal_type && t.principal_id === t6
          }),
          (tK[153] = ia),
          (tK[154] = t6),
          (tK[155] = iM),
          (tK[156] = tA))
        : (tA = tK[156])
      let a$ = iN.some(tA),
        aD = iR.get("workspace"),
        aU = aD?.action === "remove" ? null : (aD?.roleId ?? aT?.role_id),
        aF = null != aD && iM?.workspace_id != null && (!iy || !(0, z.kH)(i_, aD)),
        aW = aF && 1 === iR.size && 0 === i$.length,
        az = new Map()
      for (let [e, t] of iR) {
        let i =
          "invite" === t.action
            ? ([...aN.values()].find((e) => (0, W.hk)(e.recipient) === (0, W.hk)(t.recipient))?.share_id ?? e)
            : t.shareId
        az.set(i, { key: e, change: t })
      }
      let aG = [...aN.values()].filter(
          (e) =>
            e !== aT &&
            az.get(e.share_id)?.change.action !== "remove" &&
            ("principal" !== e.recipient.recipient_type ||
              "user" !== e.recipient.principal_type ||
              (e.recipient.principal_id.split("__")[0] !== t7?.split("__")[0] &&
                e.recipient.principal_id.split("__")[0] !== iM?.owner.principal_id.split("__")[0])),
        ),
        aK = aG.find((e) => (0, W.hk)(e.recipient) === `user:${iC?.principal_id}`),
        aB = null != iM ? ik?.inherited_access : void 0
      tK[157] !== i_ || tK[158] !== iy || tK[159] !== iM
        ? ((tM = null != iM && iy && i_.workspace_id === iM.workspace_id ? (0, z.Ql)(i_) : void 0),
          (tK[157] = i_),
          (tK[158] = iy),
          (tK[159] = iM),
          (tK[160] = tM))
        : (tM = tK[160])
      let aQ = tM,
        aH = i9 && iM?.workspace_id === t6 ? eV.findLast((e) => e === aU || e === aQ) : void 0,
        aV = function (e) {
          let t = i0 ?? aH ?? C.F2.folder[(0, eA.x)(e.some(ta))]
          return i5?.includes(t) ? t : (eV.find((e) => i5?.includes(e)) ?? t)
        },
        aY = aV(i$)
      tK[161] === Symbol.for("react.memo_cache_sentinel")
        ? ((tC = function (e) {
            ;((i2.current = e ?? "role-library-folder-viewer"), i1(e))
          }),
          (tK[161] = tC))
        : (tC = tK[161])
      let aZ = tC,
        aX = [...aN.values()].find(
          (e) =>
            "principal" === e.recipient.recipient_type &&
            "user" === e.recipient.principal_type &&
            e.recipient.principal_id.split("__")[0] === t7?.split("__")[0],
        ),
        aJ =
          aX?.recipient.recipient_type === "principal" && "user" === aX.recipient.principal_type
            ? aX.recipient.principal_id
            : (t8?.account_user_id ?? null)
      iM?.caller_permissions.includes("library_folder.write")
        ? (tI = "editor")
        : iM?.caller_permissions.includes("library_file.comment")
          ? (tI = "commenter")
          : iM?.caller_permissions.includes("library_folder.read") && (tI = "viewer")
      let a0 = iM?.shares.filter((e) => az.get(e.share_id)?.change.action === "remove"),
        a1 = new Map([...aN.values()].map(ti))
      for (let e of (tK[162] !== iM?.shares
        ? ((tq = iM?.shares ?? []), (tK[162] = iM?.shares), (tK[163] = tq))
        : (tq = tK[163]),
      tq))
        aO.has(e.share_id) && a1.set((0, W.hk)(e.recipient), "existing")
      tK[164] !== aV
        ? ((tE = function (e) {
            ;(iT((t) => ({ ...t, invitees: e })), (i2.current = aV(e)))
          }),
          (tK[164] = aV),
          (tK[165] = tE))
        : (tE = tK[165])
      let a2 = tE,
        a3 = function (e, t) {
          return {
            id: `group:${e}`,
            label: t,
            accessStatus: a1.get(`group:${e}`),
            avatar: (0, a.jsx)(eM.K, { groupId: e, size: "sm" }),
            recipient: { recipient_type: "principal", principal_type: "group", principal_id: e },
          }
        },
        a4 = function (e, t, i) {
          let a = `user:${e}`
          return {
            id: a,
            colorKey: e,
            label: iM?.workspace_id == null ? (i ?? an) : t,
            secondaryLabel: i ?? void 0,
            accessStatus:
              e === iM?.owner.principal_id || e.split("__")[0] === t7?.split("__")[0] ? "existing" : a1.get(a),
            recipient: { recipient_type: "principal", principal_type: "user", principal_id: e },
          }
        },
        a5 = as
          ? ad.picks.map((e) =>
              e
                .filter((e) => !a1.has(`user:${e.account_user_id}`))
                .map((e) => a4(e.account_user_id, e.name ?? e.email ?? e.account_user_id, e.email)),
            )
          : void 0,
        a6 = aw
          ?.map((e) => a4(e.id, e.display_name, e.detail))
          .filter((e) => !i$.some((t) => t.id === e.id) && ("" !== an || null == e.accessStatus)),
        a7 = ag.map((e) => {
          let { accountUserId: t, ...i } = e
          return { ...a4(t, i.label, null), ...i }
        }),
        a8 =
          "entry" !== tB.type &&
          i6 &&
          (i7 ? at?.suggestions == null : i8) &&
          iM?.workspace_id !== void 0 &&
          !ai &&
          (!aa || i7) &&
          "paused" !== ar
            ? at?.items
                .filter(
                  (e) =>
                    (!i7 || "user" === e.type || "workspace_group" === e.type) &&
                    (null != iM.workspace_id || ("user" === e.type && !!e.detail?.trim())),
                )
                .map((e) =>
                  "workspace_group" === e.type ? a3(e.id, e.display_name) : a4(e.id, e.display_name, e.detail),
                )
                .filter((e) => null == tf(ik, e.recipient))
            : void 0,
        a9 =
          "entry" !== tB.type && i6 && i7 && iM?.workspace_id !== void 0 && !ai && "paused" !== ar
            ? at?.suggestions
                ?.filter(
                  (e) =>
                    ("user" === e.type || "workspace_group" === e.type) &&
                    (null != iM.workspace_id || ("user" === e.type && !!e.detail?.trim())),
                )
                .map((e) => ({
                  ...("user" === e.type ? a4(e.id, e.display_name, e.detail) : a3(e.id, e.display_name)),
                  suggestion: e,
                }))
                .filter((e) => null == tf(iM, e.recipient))
            : void 0
      tK[166] === Symbol.for("react.memo_cache_sentinel")
        ? ((tL = function (e, t) {
            iT((i) => {
              let a = new Map(i.draft)
              return (null == t ? a.delete(e) : a.set(e, t), { ...i, draft: a })
            })
          }),
          (tK[166] = tL))
        : (tL = tK[166])
      let re = tL
      tK[167] !== iM
        ? ((tP = function (e) {
            let t = iM?.shares.find((t) =>
              "invite" === e.action
                ? null != e.invitee && (0, W.hk)(t.recipient) === (0, W.hk)(e.recipient)
                : t.share_id === e.shareId,
            )
            return t?.role_id === "role-library-folder-editor" &&
              "principal" === t.recipient.recipient_type &&
              ("group" === t.recipient.principal_type || "workspace" === t.recipient.principal_type) &&
              ("remove" === e.action || "role-library-folder-editor" !== e.roleId)
              ? t
              : void 0
          }),
          (tK[167] = iM),
          (tK[168] = tP))
        : (tP = tK[168])
      let rt = tP,
        ri = [...iR.values()].map(rt).filter(tt),
        ra = 1 === ri.length ? ri[0] : void 0,
        rr = (e) => {
          let t, i, a
          if (
            !i6 ||
            "available" !== tJ.get(M.v0) ||
            aq ||
            aL ||
            aW ||
            (0 === iR.size && 0 === i$.length) ||
            (i$.length > 0 && !aP.some((e) => e.value === aY)) ||
            tJ.get(Q.spaceAccountId$) !== t6 ||
            tJ.get(b.chatGptAuthenticatedUserId$) !== t7
          )
            return
          if (
            !(void 0 !== e && e) &&
            iM?.owner.principal_id.split("__")[0] !== t7.split("__")[0] &&
            (aX?.status !== "active" || "role-library-folder-editor" !== aX.role_id) &&
            ri.length > 0
          )
            return void iW(!0)
          let r = !1,
            n = (0, Q.watchSpaceAccount)(tJ, t6, t7),
            s = n.signal,
            l = new Map(iR)
          for (let [e, t] of l) {
            if ("invite" !== t.action || null == t.invitee) continue
            let i = iM?.shares.find((e) => (0, W.hk)(e.recipient) === (0, W.hk)(t.recipient))
            null != i &&
              (l.delete(e), l.set(i.share_id, { action: "update", shareId: i.share_id, roleId: t.roleId, target: tB }))
          }
          for (let e of i$)
            l.set(e.id, { action: "invite", recipient: e.recipient, invitee: e, roleId: i9 ? aY : aV([e]), target: tB })
          let o = d()(
            [...l],
            (e) => {
              let [, t] = e
              return !!rt(t)
            },
            te,
            e9,
          )
          iY.current?.cancel("superseded")
          let c =
            "entry" === tB.type
              ? void 0
              : (function (e, t, i, a, r = []) {
                  let n,
                    s = performance.now(),
                    l = [...new Set(r)].map((i) =>
                      (0, e_.r)(e, {
                        action: i,
                        documentType: t.target_type,
                        backingType: t.backing_type,
                        completionMilestone: "ui_confirmed",
                        startedAtMs: s,
                      }),
                    ),
                    o = !1,
                    c = [],
                    d = !1,
                    p = !1,
                    u = !1,
                    h = i?.telemetry.nextRetryOrdinal("confirmation"),
                    g = new Set(),
                    m = (e) => {
                      if (("mutation" === e && (u = !0), null == i || null == h)) return null
                      let t = i.telemetry.startPhase({
                          operation: i.operation,
                          phase: e,
                          retryOrdinal: h,
                          searchMode: "none",
                        }),
                        a = { measurement: t, phase: e }
                      return (
                        g.add(a),
                        {
                          requestOptions: t.requestOptions,
                          complete: (e) => {
                            ;(g.delete(a), t.complete(e))
                          },
                          fail: (i, r) => {
                            ;(g.delete(a), "roster_refresh" !== e && (n = i), t.fail(i, r))
                          },
                          cancel: (e, i) => {
                            ;(g.delete(a), t.cancel(e, i))
                          },
                        }
                      )
                    },
                    f = m("durable_completion"),
                    _ = (i, a) => {
                      if (p) return
                      ;((p = !0),
                        clearTimeout(b),
                        document.removeEventListener("visibilitychange", y),
                        document.removeEventListener("freeze", v),
                        window.removeEventListener("pagehide", v, !0))
                      let r = Math.max(0, performance.now() - s),
                        n = { ...t, outcome: i, reason: a, completion_mode: o ? "submitted" : "completed" }
                      for (let t of ("visible" !== document.visibilityState
                        ? ((n.outcome = "excluded"), (n.reason = "backgrounded"))
                        : "excluded" !== i && r >= 3e4 && ((n.outcome = "timeout"), (n.reason = "deadline")),
                      e.count("codex_pages", "sharing_change_result", n),
                      l))
                        "timeout" === n.outcome || "excluded" === n.outcome
                          ? t.finish(n.outcome)
                          : "failure" === n.outcome
                            ? t.finish("failure")
                            : "partial_failure" === n.outcome
                              ? t.finish("unobserved")
                              : "cancelled" === n.outcome &&
                                ("superseded" === a
                                  ? t.finish("superseded")
                                  : "no_changes" === a
                                    ? t.finish("excluded")
                                    : t.finish("unobserved"))
                      "success" === n.outcome && e.hist("codex_pages", "sharing_change_latency_ms", n, r)
                    },
                    y = () => {
                      "visible" !== document.visibilityState && _("excluded", "backgrounded")
                    },
                    v = () => _("excluded", "suspended"),
                    b = setTimeout(() => _("timeout", "deadline"), 3e4)
                  return (
                    document.addEventListener("visibilitychange", y),
                    document.addEventListener("freeze", v),
                    window.addEventListener("pagehide", v, !0),
                    e.count("codex_pages", "sharing_change_started", t),
                    y(),
                    {
                      markSubmitted: () => {
                        for (let e of l)
                          try {
                            e.milestone("operation_accepted")
                          } catch {}
                      },
                      markAccepted: (e) => {
                        for (let e of ((o = !0), l)) e.milestone("operation_accepted")
                        null == e ? f?.cancel("accepted_only", !0) : c.push(e)
                      },
                      complete: () => {
                        for (let e of ((d = !o), l)) o ? e.finish("unobserved") : e.milestone("operation_committed")
                        ;(a?.(o ? "unknown" : "confirmed"),
                          c.length > 0
                            ? Promise.allSettled(c).then((e) => {
                                let t = e.find((e) => "rejected" === e.status)
                                t?.reason instanceof Error && "AbortError" === t.reason.name
                                  ? f?.cancel("context_changed", !0)
                                  : null != t
                                    ? f?.fail("request_failed", !0)
                                    : f?.complete()
                              })
                            : f?.complete(),
                          _("success", "none"))
                      },
                      paintOpportunity: () => {
                        if (d) for (let e of l) e.milestone("ui_confirmed")
                      },
                      fail: (e = !1) => {
                        for (let t of (a?.(e ? "partially_confirmed" : "unknown"), g))
                          "durable_completion" !== t.phase &&
                            "roster_refresh" !== t.phase &&
                            (t.measurement.fail(ew(t.phase), u && "preflight" !== t.phase),
                            (n = ew(t.phase)),
                            g.delete(t))
                        ;(f?.fail(n ?? (u ? "request_failed" : "preflight_failed"), u),
                          _(e ? "partial_failure" : "failure", "save_failed"))
                      },
                      cancel: (e = "dialog_closed") => {
                        if ("dialog_closed" === e || "context_changed" === e) for (let e of l) e.dispose()
                        else if ("superseded" === e) for (let e of l) e.finish("superseded")
                        if ("dialog_closed" !== e && "superseded" !== e) {
                          for (let t of g) (t.measurement.cancel(e, u), g.delete(t))
                          a?.("cancelled")
                        }
                        _("cancelled", e)
                      },
                      startPhase: m,
                    }
                  )
                })(
                  (0, v.dj)(tJ),
                  { target_type: tB.type, backing_type: "drive" },
                  null == iB.current ? void 0 : { operation: "permission_mutation", telemetry: iB.current },
                  ((i =
                    null == (t = tJ.get(eg.DO)) ? null : (0, eg.hI)(tJ, t, void 0, tJ.get(b.PO).accountUserId ?? null)),
                  (a = !1),
                  i?.signal.addEventListener("abort", () => i.stop(), { once: !0 }),
                  (e) => {
                    if (!a && ((a = !0), i?.stop(), null != i && !i.signal.aborted))
                      try {
                        ;(0, eh.yy)(tJ, eu.CodexSpacesSharingChangeCompleted, {
                          target:
                            "page" === tB.type
                              ? eu.CodexSpacesCreationTarget.CODEX_SPACES_CREATION_TARGET_PAGE
                              : eu.CodexSpacesCreationTarget.CODEX_SPACES_CREATION_TARGET_SPACE,
                          operation: {
                            permission_mutation:
                              eu.CodexSpacesSharingOperation.CODEX_SPACES_SHARING_OPERATION_PERMISSIONS,
                            link_policy_mutation:
                              eu.CodexSpacesSharingOperation.CODEX_SPACES_SHARING_OPERATION_LINK_POLICY,
                            mixed_mutation: eu.CodexSpacesSharingOperation.CODEX_SPACES_SHARING_OPERATION_MIXED,
                          }.permission_mutation,
                          outcome: {
                            confirmed: eu.CodexSpacesSharingOutcome.CODEX_SPACES_SHARING_OUTCOME_CONFIRMED,
                            unknown: eu.CodexSpacesSharingOutcome.CODEX_SPACES_SHARING_OUTCOME_UNKNOWN,
                            partially_confirmed:
                              eu.CodexSpacesSharingOutcome.CODEX_SPACES_SHARING_OUTCOME_PARTIALLY_CONFIRMED,
                            cancelled: eu.CodexSpacesSharingOutcome.CODEX_SPACES_SHARING_OUTCOME_CANCELLED,
                          }[e],
                          ...("page" === tB.type ? (0, em.UZ)(tJ, tB.id) : { spaceId: tB.id }),
                        })
                      } catch {}
                  }),
                  o.map((e) => {
                    let [, t] = e
                    return "remove" === t.action
                      ? "revoke_access"
                      : "update" === t.action
                        ? "change_role"
                        : "space" === tB.type
                          ? "invite_space"
                          : "share_page"
                  }),
                )
          iY.current = c ?? null
          let p = () => {
            ;(c?.complete(), iU({ id: crypto.randomUUID(), measurement: c, changes: o.map(e8) }))
          }
          ;(iT({ draft: new Map(), invitees: [] }),
            iX(""),
            null != iJ.current && iJ.current.scrollIntoView({ block: "start" }))
          let u = (e) => {
              let { data: t, isSuccess: i } = tJ.get(W.e2, tB),
                { queryKey: a } = tJ.query.snapshot(W.e2, tB)
              return i && tJ.queryClient.getQueryState(a)?.isInvalidated === !1
                ? e.filter((e) => {
                    let [, i] = e
                    return (
                      "invite" !== i.action ||
                      !t.shares.some((e) => (0, W.hk)(e.recipient) === (0, W.hk)(i.recipient) && e.role_id === i.roleId)
                    )
                  })
                : e
            },
            h = (e) => {
              let t = i9 || i2.current !== aY
              iT((i) => {
                let a = new Map(i.draft)
                for (let [i, r] of e) ("invite" !== r.action || iR.has(i) || t) && !a.has(i) && a.set(i, r)
                return {
                  draft: a,
                  invitees: t
                    ? i.invitees
                    : [
                        ...i.invitees,
                        ...i$.filter(
                          (t) =>
                            e.some((e) => {
                              let [i] = e
                              return i === t.id
                            }) &&
                            !a.has(t.id) &&
                            !i.invitees.some((e) => e.id === t.id),
                        ),
                      ],
                }
              })
            }
          iL.mutateAsync({
            changes: o.map(e7),
            signal: s,
            telemetry: c,
            initialSharing: 0 !== iN.length || iQ.current ? void 0 : iM,
            workspaceChange: iM?.workspace_id != null ? aD : void 0,
            workspaceChangeIndex: o.findIndex(e6),
          })
            .then((e) => {
              let { results: t, workspaceSharingDisabled: i } = e
              if ((t.some(e5) && (iQ.current = !0), s.aborted || !("entry" === tB.type || tJ.get(R.pagesEnabled$))))
                return void c?.cancel("context_changed")
              let a = u(o.filter((e, i) => "rejected" === t[i].status)),
                n = i && a.some(e4)
              if (((r = a.length < o.length), a.length > 0)) {
                if ((h(n ? a.filter(e3) : a), c?.fail(r), n))
                  return void tJ
                    .get(A.Id)
                    .danger(
                      t0.formatMessage({
                        id: "codex.space.driveSharing.workspaceLinksUnavailable",
                        defaultMessage:
                          "Your admin has turned off workspace-link sharing for your account. Ask your admin to enable workspace links.",
                        description:
                          "A Page or Space workspace-link change failed and refreshed account policy confirms workspace links are disabled. Named-recipient sharing is still allowed.",
                      }),
                      { errorAnalytics: { toastId: "sharingDialog.mutate.saveError" } },
                    )
                let e = a[0][1],
                  i = t[o.indexOf(a[0])]
                iE(e, "rejected" === i.status ? i.reason : null)
              } else p()
            })
            .catch(() => {
              if (((iQ.current = !0), !s.aborted && ("entry" === tB.type || tJ.get(R.pagesEnabled$)))) {
                let e = u(o)
                if (0 === e.length) return void p()
                ;(h(e),
                  c?.fail(r || e.length < o.length),
                  tJ
                    .get(A.Id)
                    .danger(t0.formatMessage(ty.saveError), {
                      errorAnalytics: { toastId: "sharingDialog.mutate.saveError" },
                    }))
              } else c?.cancel("context_changed")
            })
            .finally(() => n.stop())
        },
        rn = ef.U,
        rs =
          ic || iu || null == iM
            ? null
            : (0, a.jsx)(j.OO, {
                className: "gap-2",
                children:
                  (0, W.TO)(iM) &&
                  (0, a.jsx)(eq.B, {
                    accountId: t6,
                    autoFocus: !1,
                    disabled: !i6,
                    getGroupRecipient: null == t8 ? void 0 : (e) => a3(e.id, e.name),
                    getTeamRecipient: null == t8 ? void 0 : (e) => a3(e.id, e.name),
                    getPersonRecipient: as
                      ? (e) => {
                          let t = a4(e.account_user_id, e.name ?? e.email ?? e.account_user_id, e.email)
                          return null == tf(ik, t.recipient) ? t : void 0
                        }
                      : void 0,
                    isLoading: (i7 && "" === an && aa) || (!ak && !ad.isError && (aS || ad.isLoading)),
                    searchFailed: ak || ad.isError,
                    contextualPicks: a5,
                    loadingLabel: t0.formatMessage({
                      id: "codex.space.driveSharing.searching",
                      defaultMessage: "Searching for people or teams",
                      description:
                        "Status while recipient searches in Library-backed Page or Space sharing are loading",
                    }),
                    emptyMessage: (0, a.jsx)(m.A, {
                      id: "codex.space.driveSharing.noMatchingRecipients",
                      defaultMessage: "No matching people or teams",
                      description:
                        "Empty workspace member and group search in the Library Page or Space sharing dialog",
                    }),
                    query: iZ,
                    peopleQuery: an,
                    options: a6,
                    dotOptions: a7,
                    recentOptions: a8,
                    suggestedOptions: a9,
                    suggestionsAsOf: at?.suggestions_as_of,
                    improvedSuggestions: i7,
                    getRemoveLabel: (e) =>
                      t0.formatMessage(
                        {
                          id: "shareDialog.removeInvitee",
                          defaultMessage: "Remove {name} from the invitation",
                          description:
                            "Accessible label for removing a selected person or group from a sharing invitation; name is the recipient's display name",
                        },
                        { name: e.label },
                      ),
                    selectedOptions: i$,
                    trailingContent:
                      i$.length > 0 &&
                      (0, a.jsx)(eI.e, {
                        disabled: !i6,
                        options: aP,
                        value: aY,
                        variant: "inline",
                        renderLabel: e2,
                        onChange: aZ,
                      }),
                    onQueryChange: iX,
                    onChange: a2,
                  }),
              })
      ;(tK[169] !== rr ? ((tN = () => rr()), (tK[169] = rr), (tK[170] = tN)) : (tN = tK[170]),
        tK[171] === Symbol.for("react.memo_cache_sentinel")
          ? ((tO = () => {
              ;(iT({ draft: new Map(), invitees: [] }), aZ(void 0), iX(""))
            }),
            (tK[171] = tO))
          : (tO = tK[171]))
      let rl = iR.size > 0,
        ro = i$.length > 0
      ;(tK[172] === Symbol.for("react.memo_cache_sentinel")
        ? ((tT = (0, a.jsx)(m.A, {
            id: "codex.pages.sharing.share",
            defaultMessage: "Share",
            description: "Button granting the selected recipients access to the Page or Space",
          })),
          (tK[172] = tT))
        : (tT = tK[172]),
        tK[173] !== i6 ||
        tK[174] !== aL ||
        tK[175] !== i$.length ||
        tK[176] !== aq ||
        tK[177] !== aW ||
        tK[178] !== aY ||
        tK[179] !== aP
          ? ((tR = aq || aL || aW || !i6 || (i$.length > 0 && !aP.some((e) => e.value === aY))),
            (tK[173] = i6),
            (tK[174] = aL),
            (tK[175] = i$.length),
            (tK[176] = aq),
            (tK[177] = aW),
            (tK[178] = aY),
            (tK[179] = aP),
            (tK[180] = tR))
          : (tR = tK[180]),
        tK[181] !== tY || tK[182] !== tX || tK[183] !== rl || tK[184] !== ro || tK[185] !== tR
          ? ((t$ = (0, a.jsx)(eC.r, {
              onCancel: tO,
              onClose: tX,
              hasPendingAccessChange: rl,
              hasPendingInvitees: ro,
              inviteLabel: tT,
              isSaving: !1,
              disabled: tR,
              copyLink: tY,
            })),
            (tK[181] = tY),
            (tK[182] = tX),
            (tK[183] = rl),
            (tK[184] = ro),
            (tK[185] = tR),
            (tK[186] = t$))
          : (t$ = tK[186]),
        tK[187] !== aI || tK[188] !== t$
          ? ((tD = (0, a.jsxs)(a.Fragment, { children: [t$, aI] })), (tK[187] = aI), (tK[188] = t$), (tK[189] = tD))
          : (tD = tK[189]))
      let rc =
        iF &&
        i6 &&
        (0, a.jsx)(eD, {
          target: tB,
          teamName:
            (ra?.recipient.recipient_type === "principal" &&
              "group" === ra.recipient.principal_type &&
              ra.recipient_display_name?.trim()) ||
            void 0,
          onCancel: () => iW(!1),
          onConfirm: () => {
            ;(iW(!1), rr(!0))
          },
        })
      ;(tK[190] !== it || tK[191] !== ii.length
        ? ((tU =
            ii.length > 0 &&
            (0, a.jsx)(j.OO, {
              children: (0, a.jsx)(S.l, {
                role: "status",
                content: (0, a.jsx)(m.A, {
                  id: "codex.space.driveSharing.confirmationUnknown",
                  defaultMessage: "We couldn’t confirm these sharing changes yet",
                  description:
                    "A sharing change was accepted but its completion could not be confirmed; it stays pending, and Check again checks the same operation without resubmitting it",
                }),
                primaryCtaText: (0, a.jsx)(m.A, {
                  id: "codex.space.driveSharing.checkAgain",
                  defaultMessage: "Check again",
                  description: "Check the status of previously accepted sharing changes without submitting them again",
                }),
                onPrimaryCtaClick: () => it.checkAgain(),
              }),
            })),
          (tK[190] = it),
          (tK[191] = ii.length),
          (tK[192] = tU))
        : (tU = tK[192]),
        tK[193] !== is.length || tK[194] !== ih
          ? ((tF =
              is.length > 0 &&
              (0, a.jsx)(j.OO, {
                children: (0, a.jsx)(S.l, {
                  role: "status",
                  content: (0, a.jsx)(m.A, {
                    id: "codex.space.driveSharing.completedAwaitingRoster",
                    defaultMessage: "Changes saved. The permissions list hasn’t refreshed yet",
                    description:
                      "The Space sharing command completed, but the visible permissions list may still show older access while its refresh is pending or failed",
                  }),
                  primaryCtaText: (0, a.jsx)(m.A, {
                    id: "codex.space.driveSharing.refreshSpacePermissions",
                    defaultMessage: "Refresh permissions",
                    description:
                      "Refresh the current Space permissions after a completed sharing change without submitting it again",
                  }),
                  onPrimaryCtaClick: () => void ih(),
                }),
              })),
            (tK[193] = is.length),
            (tK[194] = ih),
            (tK[195] = tF))
          : (tF = tK[195]),
        tK[196] !== iu || tK[197] !== ic || tK[198] !== ih || tK[199] !== iM
          ? ((tW =
              (ic || iu || null == iM) &&
              (0, a.jsx)(j.OO, {
                children: (0, a.jsx)(J.DN, {
                  isLoading: ic,
                  onRetry: () => {
                    ;(iT({ draft: new Map(), invitees: [] }), iX(""), ih())
                  },
                }),
              })),
            (tK[196] = iu),
            (tK[197] = ic),
            (tK[198] = ih),
            (tK[199] = iM),
            (tK[200] = tW))
          : (tW = tK[200]))
      let rd =
        !ic &&
        !iu &&
        null != iM &&
        (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(eB, {
              sharing: { ...iM, inherited_workspace_link_access: ij },
              loading: iv || "fetching" === iw,
              supportsCommenter: i4,
              isWorkspace: null != iM.workspace_id || null != t8,
              directRole: aU,
              hasDirectOverride: (null != aT || aD?.action === "invite") && aD?.action !== "remove",
              disabled: !i6 || a$ || (null != aT && aR.has(aT.share_id)),
              workspaceName: t8?.name?.trim() || void 0,
              workspaceLinkSharingAvailable: t5,
              onChange: (e) => {
                e !== (aT?.role_id ?? null) || ia.some((e) => e.share.share_id === aT?.share_id)
                  ? null == e
                    ? re("workspace", null == aT ? null : { action: "remove", shareId: aT.share_id, target: tB })
                    : re(
                        "workspace",
                        null == aT
                          ? {
                              action: "invite",
                              recipient: { recipient_type: "principal", principal_type: "workspace", principal_id: t6 },
                              roleId: e,
                              target: tB,
                            }
                          : { action: "update", shareId: aT.share_id, roleId: e, target: tB },
                      )
                  : re("workspace", null)
              },
              onRetry: () => void ix(),
              onClose: tX,
            }),
            aF &&
              ik?.inherited_workspace_link_access?.complete &&
              (0, a.jsx)(j.OO, {
                children: (0, a.jsx)("p", {
                  className: "text-sm text-secondary",
                  children: (0, a.jsx)(m.A, {
                    id: "codex.pages.sharing.workspaceLink.changed.helpText",
                    defaultMessage: "Parent access changed. Choose a higher role or use parent access before saving",
                    description:
                      "Page and Space sharing warning when a pending direct workspace role is now covered by an ancestor grant. The user must revise the link-access draft before saving.",
                  }),
                }),
              }),
            (0, a.jsx)(X.p, {
              children: (0, a.jsxs)("div", {
                ref: iJ,
                className: "flex flex-col gap-1",
                children: [
                  (0, a.jsx)(Z.M, {
                    entries: [
                      ...(null == iC || null != aK
                        ? []
                        : [
                            {
                              id: iC.principal_id,
                              label: t0.formatMessage(ty.owner),
                              isOwner: !0,
                              row: (0, a.jsx)(t_, {
                                accountUserId: iC.principal_id,
                                displayName: iC.display_name,
                                permission: "owner",
                              }),
                            },
                          ]),
                      ...(iM.owner.principal_id !== iC?.principal_id && iM.owner.principal_id.split("__")[0] !== iI
                        ? [
                            {
                              id: iM.owner.principal_id,
                              label: iM.owner_display_name ?? "",
                              row: (0, a.jsx)(t_, {
                                accountUserId: iM.owner.principal_id,
                                displayName: iM.owner_display_name,
                                permission: "editor",
                              }),
                            },
                          ]
                        : []),
                      ...(iq === iI
                        ? []
                        : [
                            {
                              id: `self:${t7}`,
                              label: t0.formatMessage(ty.self),
                              isSelf: !0,
                              row: (0, a.jsx)(G.h, {
                                avatar: (0, a.jsx)(el.Y, {
                                  accountUserId: t7,
                                  name: t0.formatMessage(ty.self),
                                  size: "group",
                                }),
                                label: (0, a.jsx)(m.A, { ...ty.self }),
                                renderIdentity: (e, t) =>
                                  (0, a.jsx)(ec.Ve, {
                                    inShareDialog: !0,
                                    accountUserId: aJ,
                                    label: t0.formatMessage(ty.self),
                                    triggerDescriptionId: t,
                                    children: e,
                                  }),
                                secondaryLabel: aX?.status === "pending" ? (0, a.jsx)(m.A, { ...ty.pending }) : void 0,
                                trailingContent: (0, a.jsx)("span", {
                                  className: "pe-2 text-sm text-tertiary",
                                  children: (0, a.jsx)(K.u, { permission: tI }),
                                }),
                              }),
                            },
                          ]),
                      ...aG.map((e) => {
                        let t = aE.find((t) => (0, W.hk)(t.recipient) === (0, W.hk)(e.recipient)),
                          { key: i, change: r } = az.get(e.share_id) ?? {
                            key: t?.invitee?.id ?? e.share_id,
                            change: void 0,
                          },
                          n = au?.find(
                            (t) =>
                              "principal" === e.recipient.recipient_type &&
                              "user" === e.recipient.principal_type &&
                              t.service_account_account_user_id === e.recipient.principal_id,
                          ),
                          s =
                            null == iM.workspace_id && "pending" === e.status
                              ? (e.recipient_email ??
                                ("email" === e.recipient.recipient_type
                                  ? e.recipient.email
                                  : t0.formatMessage(ty.pending)))
                              : (e.recipient_display_name ??
                                e.recipient_email ??
                                ("email" === e.recipient.recipient_type
                                  ? e.recipient.email
                                  : e.recipient.principal_id)),
                          l = !aO.has(e.share_id) && r?.action !== "invite" && "pending" === e.status,
                          o = e.recipient_email ?? void 0
                        l
                          ? (o = t0.formatMessage(ty.pending))
                          : (null != n || null != e.recipient_dot_id) &&
                            (o = (0, a.jsx)(m.A, {
                              id: "sharing.dotLabel",
                              defaultMessage: "{dot}",
                              description:
                                "Label below an agent's name in a team member list or sharing dialog. {dot} is the untranslated product term Dot.",
                              values: { dot: "Dot" },
                            }))
                        let c =
                            "principal" === e.recipient.recipient_type && "group" === e.recipient.principal_type
                              ? e.recipient.principal_id
                              : null,
                          d =
                            "principal" === e.recipient.recipient_type && "user" === e.recipient.principal_type
                              ? e.recipient.principal_id
                              : null,
                          p = (0, I.xF)(n) ?? ("active" === e.status && null != d ? e.recipient_avatar_url : null),
                          u = e === aK
                        return {
                          id: e.share_id,
                          label: s,
                          isOwner: u,
                          isTeam: null != c,
                          row: (0, a.jsx)(G.h, {
                            avatar:
                              null != c
                                ? (0, a.jsx)(eM.K, { groupId: c })
                                : (0, a.jsx)(el.Y, { accountUserId: d, avatarUrl: p, name: s, size: "group" }),
                            label: u
                              ? (0, a.jsxs)(a.Fragment, {
                                  children: [
                                    s,
                                    (0, a.jsx)("span", {
                                      className: "ms-2 font-normal text-token-text-tertiary",
                                      children: t0.formatMessage(ty.owner),
                                    }),
                                  ],
                                })
                              : s,
                            renderIdentity:
                              null != c
                                ? void 0
                                : (t, i) =>
                                    (0, a.jsx)(ec.Ve, {
                                      inShareDialog: !0,
                                      accountUserId: d,
                                      avatarUrl: p,
                                      label: s,
                                      labelEmail: e.recipient_email,
                                      triggerDescriptionId: l ? i : void 0,
                                      children: t,
                                    }),
                            secondaryLabel: o,
                            team: null == c || l ? void 0 : { accountId: t6, groupId: c },
                            trailingContent: (0, a.jsx)(eI.e, {
                              disabled: !i6 || !(0, W.wX)(iM, e.recipient, t7, t6),
                              variant: "inline",
                              options: aP,
                              value: null != r && "remove" !== r.action ? r.roleId : e.role_id,
                              renderLabel: e1,
                              onChange: (a) => {
                                let n = aP.find((e) => e.value === a)?.value
                                if (null != n) {
                                  let a = r?.action === "invite" ? r : t
                                  if (null != a)
                                    return void re(
                                      i,
                                      n === (t?.roleId ?? iM.shares.find((t) => t.share_id === e.share_id)?.role_id)
                                        ? null
                                        : { ...a, roleId: n },
                                    )
                                  re(
                                    i,
                                    n !== e.role_id ||
                                      is.some((t) => t.share.share_id === e.share_id) ||
                                      ia.some((t) => t.share.share_id === e.share_id)
                                      ? { action: "update", roleId: n, shareId: e.share_id, target: tB }
                                      : null,
                                  )
                                }
                              },
                              removeLabel: (0, a.jsx)(m.A, {
                                id: "codex.space.driveSharing.remove",
                                defaultMessage: "Remove access",
                                description:
                                  "Menu command that removes only the direct grant or pending invitation on this Page or Space; inherited access can remain",
                              }),
                              onRemoveAccess:
                                aO.has(e.share_id) || aR.has(e.share_id) || null != t
                                  ? void 0
                                  : () =>
                                      re(
                                        i,
                                        r?.action !== "invite" || iM.shares.some((t) => t.share_id === e.share_id)
                                          ? { action: "remove", shareId: e.share_id, target: tB }
                                          : null,
                                      ),
                            }),
                          }),
                        }
                      }),
                    ],
                  }),
                  (0, a.jsx)(H, { pageId: "page" === tB.type ? (tQ ?? null) : null, inheritedAccess: aB }),
                ],
              }),
            }),
            u()(a0, e0).map((e) => {
              let t = tf(ik, e.recipient),
                i = e.recipient_display_name?.trim() || e.recipient_email?.trim()
              return null != t && i
                ? (0, a.jsx)(
                    j.OO,
                    {
                      children: (0, a.jsx)("p", {
                        className: "text-xs text-secondary select-none",
                        children: (0, a.jsx)(m.A, {
                          id: "codex.space.driveSharing.remainingAccess",
                          defaultMessage:
                            "{name} will still have access through <source>{kind, select, page {a parent page} entry {a parent folder} other {the space}}</source>",
                          description:
                            "Hint for a staged removal. Name is the recipient; source links to the authorized parent Page or Space where they retain access. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
                          values: {
                            name: i,
                            kind: t.kind,
                            source: (e) =>
                              (0, a.jsx)(y.N_, {
                                className: "cursor-interaction text-link-primary! underline underline-offset-2",
                                to:
                                  "entry" === t.kind
                                    ? `/space/d/${encodeURIComponent(`libdir_${t.id}`)}`
                                    : `/${"page" === t.kind ? "space" : "spaces"}/${encodeURIComponent(t.id)}`,
                                onClick: tX,
                                children: e,
                              }),
                          },
                        }),
                      }),
                    },
                    (0, W.hk)(e.recipient),
                  )
                : null
            }),
          ],
        })
      return (
        tK[201] !== is.length ||
        tK[202] !== iD ||
        tK[203] !== iu ||
        tK[204] !== ic ||
        tK[205] !== aq ||
        tK[206] !== iN ||
        tK[207] !== iM
          ? ((tz =
              iD?.measurement != null &&
              !aq &&
              0 === is.length &&
              !ic &&
              !iu &&
              0 === iN.length &&
              null != iM &&
              iD.changes.every((e) => {
                if ("invite" === e.action)
                  return iM.shares.some(
                    (t) => (0, W.hk)(t.recipient) === (0, W.hk)(e.recipient) && t.role_id === e.roleId,
                  )
                let t = iM.shares.find((t) => t.share_id === e.shareId)
                return "remove" === e.action ? null == t : t?.role_id === e.roleId
              }) &&
              (0, a.jsx)(ej.X, { requireVisibleAtPaint: !0, onPaint: iD.measurement.paintOpportunity }, iD.id)),
            (tK[201] = is.length),
            (tK[202] = iD),
            (tK[203] = iu),
            (tK[204] = ic),
            (tK[205] = aq),
            (tK[206] = iN),
            (tK[207] = iM),
            (tK[208] = tz))
          : (tz = tK[208]),
        tK[209] !== rn ||
        tK[210] !== i7 ||
        tK[211] !== ic ||
        tK[212] !== aM ||
        tK[213] !== aC ||
        tK[214] !== tV ||
        tK[215] !== rs ||
        tK[216] !== tN ||
        tK[217] !== tD ||
        tK[218] !== rc ||
        tK[219] !== tU ||
        tK[220] !== tF ||
        tK[221] !== tW ||
        tK[222] !== rd ||
        tK[223] !== tz ||
        tK[224] !== tH
          ? ((tG = (0, a.jsxs)(rn, {
              containSuggestions: i7,
              headerContent: rs,
              isLoading: ic,
              onSubmit: tN,
              onRequestClose: aM,
              onPortalContainerChange: aC,
              title: tH,
              subtitle: tV,
              footer: tD,
              children: [rc, tU, tF, tW, rd, tz],
            })),
            (tK[209] = rn),
            (tK[210] = i7),
            (tK[211] = ic),
            (tK[212] = aM),
            (tK[213] = aC),
            (tK[214] = tV),
            (tK[215] = rs),
            (tK[216] = tN),
            (tK[217] = tD),
            (tK[218] = rc),
            (tK[219] = tU),
            (tK[220] = tF),
            (tK[221] = tW),
            (tK[222] = rd),
            (tK[223] = tz),
            (tK[224] = tH),
            (tK[225] = tG))
          : (tG = tK[225]),
        tG
      )
    }
    function e0(e) {
      return (0, W.hk)(e.recipient)
    }
    function e1(e) {
      return (0, a.jsx)(K.u, { permission: (0, C.rP)(e, "folder") })
    }
    function e2(e) {
      return (0, a.jsx)(K.u, { permission: (0, C.rP)(e, "folder") })
    }
    function e3(e) {
      let [t] = e
      return "workspace" !== t
    }
    function e4(e) {
      let [t] = e
      return "workspace" === t
    }
    function e5(e) {
      return "rejected" === e.status
    }
    function e6(e) {
      let [t, i] = e
      return "workspace" === t && "remove" !== i.action
    }
    function e7(e) {
      let [, t] = e
      return t
    }
    function e8(e) {
      let [, t] = e
      return t
    }
    function e9(e) {
      let [, t] = e
      return "invite" !== t.action
    }
    function te(e) {
      let [t] = e
      return "workspace" === t
    }
    function tt(e) {
      return null != e
    }
    function ti(e) {
      return [(0, W.hk)(e.recipient), "pending" === e.status ? "pending" : "existing"]
    }
    function ta(e) {
      return "group" === e.recipient.principal_type
    }
    function tr(e) {
      return e.share.share_id
    }
    function tn(e) {
      return "invite" === e.action && null != e.invitee
    }
    function ts(e) {
      return [e.share_id, e]
    }
    function tl(e) {
      return { value: e }
    }
    function to(e) {
      return "invite" === e.action
    }
    function tc(e) {
      let { change: t } = e
      return t
    }
    function td(e) {
      return "user" === e.type
    }
    function tp(e) {
      return e.split("__")[0]
    }
    function tu(e) {
      let { recipient: t } = e
      return "user" === t.principal_type ? [t.principal_id] : []
    }
    function th(e) {
      let { recipient: t } = e
      return "principal" === t.recipient_type && "user" === t.principal_type ? [t.principal_id] : []
    }
    function tg(e) {
      return e.state.variables
    }
    function tm(e) {
      let { role: t } = e
      return { role: t, source: null }
    }
    function tf(e, t) {
      if (e?.inherited_access?.complete && t?.recipient_type === "principal")
        return e.inherited_access.sources.find(
          (e) => null != e.recipient && null != e.source && (0, W.hk)(e.recipient) === (0, W.hk)(t),
        )?.source
    }
    function t_(e) {
      let t,
        i,
        n,
        s,
        l,
        o,
        c = (0, r.c)(23),
        { accountUserId: d, displayName: p, permission: u } = e,
        g = (0, f.A)()
      c[0] !== p ? ((t = p?.trim() || null), (c[0] = p), (c[1] = t)) : (t = c[1])
      let m = t,
        _ = (0, h._U)(ed.ik, null == m ? d : null),
        { data: y } = (0, h._U)(ed.Ks, d)
      c[2] !== _ || c[3] !== g || c[4] !== u || c[5] !== y?.email || c[6] !== m
        ? ((i = m ?? _ ?? y?.email ?? g.formatMessage("owner" === u ? ty.owner : ty.person)),
          (c[2] = _),
          (c[3] = g),
          (c[4] = u),
          (c[5] = y?.email),
          (c[6] = m),
          (c[7] = i))
        : (i = c[7])
      let v = i
      ;(c[8] !== d || c[9] !== v
        ? ((n = (0, a.jsx)(el.Y, { accountUserId: d, name: v, size: "group" })), (c[8] = d), (c[9] = v), (c[10] = n))
        : (n = c[10]),
        c[11] !== d || c[12] !== v || c[13] !== y?.email
          ? ((s = (e) =>
              (0, a.jsx)(ec.Ve, { inShareDialog: !0, accountUserId: d, label: v, labelEmail: y?.email, children: e })),
            (c[11] = d),
            (c[12] = v),
            (c[13] = y?.email),
            (c[14] = s))
          : (s = c[14]))
      let b = y?.email
      return (
        c[15] !== u
          ? ((l = (0, a.jsx)("span", {
              className: "pe-2 text-sm text-tertiary",
              children: (0, a.jsx)(K.u, { permission: u }),
            })),
            (c[15] = u),
            (c[16] = l))
          : (l = c[16]),
        c[17] !== v || c[18] !== n || c[19] !== s || c[20] !== b || c[21] !== l
          ? ((o = (0, a.jsx)(G.h, { avatar: n, label: v, renderIdentity: s, secondaryLabel: b, trailingContent: l })),
            (c[17] = v),
            (c[18] = n),
            (c[19] = s),
            (c[20] = b),
            (c[21] = l),
            (c[22] = o))
          : (o = c[22]),
        o
      )
    }
    let ty = (0, _.YK)({
      person: {
        id: "codex.space.driveSharing.person",
        defaultMessage: "Person",
        description: "Fallback when a sharing roster member has no visible name or email",
      },
      self: {
        id: "codex.space.driveSharing.self",
        defaultMessage: "You",
        description: "Label for the currently signed-in person in the Page or Space sharing dialog",
      },
      owner: {
        id: "codex.space.driveSharing.owner",
        defaultMessage: "Owner",
        description:
          "Label identifying the original owner in the Library Page or Space sharing dialog; ownership cannot be reassigned here",
      },
      pending: {
        id: "codex.space.driveSharing.pending",
        defaultMessage: "Invitation pending",
        description:
          "Membership status beneath a person who has been invited to a Page or Space and has not accepted yet",
      },
      saveError: {
        id: "codex.space.librarySharing.saveError",
        defaultMessage: "Could not update sharing",
        description: "Toast shown when inviting, changing a role, or revoking a Page or Space collaborator fails",
      },
    })
  },
  tcwr(e, t, i) {
    var a = i("zTeN"),
      r = i("SPnB"),
      n = i("rpnz"),
      s = i("HNZf"),
      l = i("e1xH"),
      o = i("pyoT"),
      c = i("OWtl"),
      d = i("bQW7"),
      p = i("Rxyo"),
      u = i("rTPf")
    let h = (0, a.i1)(c.u, (e, { get: t }) => {
      let i = t(o.spaceAccountId$)
      if (null == e || "entry" === e.type || null == i || !t(l.pagesEnabled$))
        return { picks: [], isLoading: !1, isError: !1 }
      let a = t(r.chatGptAuthenticatedUserId$),
        c = t(r.kf),
        h = t(p.y),
        g = [],
        m = new Map(),
        f = [],
        _ = [],
        y = "space" === e.type,
        v = !1,
        b = !1
      if ("space" === e.type) f.push({ type: "space", id: e.id })
      else if ((j(e.commenters), !(0, n.sD)(e.id))) {
        let i = t(o.spacePageId$, e.id),
          a = t(o.loadedSpacePageMetadata$, i),
          r = t(o.spacePageContext$, i)
        if (((y = a?.access.can_share === !0), r.isDriveBacked)) {
          f.push({ type: "page", id: i })
          let e = a?.drive_space_id ?? r.space?.id
          null != e && f.push({ type: "space", id: e })
        }
      }
      for (let i of f) {
        let a = i.type === e.type && i.id === e.id ? e.sharing : void 0
        if (null == a) {
          let e = t(s.e2, i, { enabled: y })
          if (
            ((v = ((!h || void 0 === e.data) && e.isFetching) || v), (b = e.isError || b), null == e.data || e.isError)
          )
            continue
          a = e.data
        }
        let r = [],
          n = null == a.workspace_id && void 0 !== a.workspace_id
        if ("user" === a.owner.principal_type) {
          let e = a.owner.principal_id
          r.push({
            id: e,
            account_user_id: n || e.includes("__") ? e : void 0,
            name: a.owner_display_name ?? null,
            email: null,
          })
        }
        for (let e of a.shares) {
          if (
            "active" !== e.status ||
            "principal" !== e.recipient.recipient_type ||
            "user" !== e.recipient.principal_type
          )
            continue
          let t = e.recipient.principal_id
          r.push({
            id: t,
            account_user_id: n || t.includes("__") ? t : void 0,
            name: e.recipient_display_name ?? null,
            email: e.recipient_email ?? null,
            avatar_url: e.recipient_avatar_url,
          })
        }
        ;(_.push(...r.map((e) => e.id.split("__")[0])), j(r))
      }
      for (let e of m.values()) {
        let a = e.account_user_id ?? `${e.id}__${i.toLowerCase()}`,
          { data: r } = t(u.Ks, a, { enabled: !1 })
        ;(r?.id === e.id &&
          r.account_user_id === a &&
          ((e.name = e.name ?? r.name), (e.email = e.email ?? r.email), (e.avatar_url = e.avatar_url ?? r.avatar_url)),
          void 0 !== r && (e.name = e.name ?? ""))
      }
      let w = null == e.mentionContext ? void 0 : { ...e.mentionContext, rosterUserIds: _ },
        x = { currentUserId: a, limit: 20, includeUnknownNames: !0 },
        k = null == w ? (0, d.KZ)(e.query ?? "", g, x) : (0, d.oy)(e.query ?? "", g, w, x),
        S = new Map()
      for (let e of k) {
        if (
          null != e.account_user_id &&
          (null != e.name || null != e.email) &&
          (S.set(e.id, { ...e, account_user_id: e.account_user_id }), null != e.name)
        )
          continue
        let r = e.account_user_id ?? `${e.id}__${i.toLowerCase()}`,
          n = t(u.Ks, r)
        ;((v =
          (n.isPending && null != a && "loaded" === c.status && "workspace" === c.structure) ||
          ((!h || void 0 === n.data) && n.isFetching) ||
          v),
          (b = n.isError || b),
          n.data?.id === e.id &&
            n.data.account_user_id === r &&
            S.set(e.id, {
              ...n.data,
              name: n.data.name || e.name,
              email: n.data.email ?? e.email,
              avatar_url: n.data.avatar_url ?? e.avatar_url,
            }))
      }
      return {
        mentionContext: w,
        picks: g.map((e) =>
          e.flatMap(({ id: e }) => {
            let t = S.get(e)
            return null == t ? [] : [t]
          }),
        ),
        isLoading: v,
        isError: b,
      }
      function j(t) {
        let i = []
        for (let a of (g.push(i), t ?? [])) {
          let t = a.id.split("__")[0]
          if (e?.excludeUserIds?.includes(t)) continue
          let r = m.get(t)
          if (null != r)
            ((r.account_user_id = r.account_user_id ?? a.account_user_id),
              (r.name = r.name ?? a.name),
              (r.email = r.email ?? a.email),
              (r.avatar_url = r.avatar_url ?? a.avatar_url))
          else {
            let e = { ...a, id: t }
            ;(m.set(t, e), i.push(e))
          }
        }
      }
    })
    i.d(t, {}, { K: h })
  },
  tdE2(e, t, i) {
    var a = i("LPKZ"),
      r = i.n(a)
    function n(e) {
      if (null == e) return
      let t = new Map()
      for (let i of e)
        for (let e of i.messages) {
          if (null != e.deletedAt || "agent" === e.authorType) continue
          let { id: i, displayName: a } = e.author,
            r = i.split("__")[0]
          t.has(r) || t.set(r, { id: r, account_user_id: i, name: a === i || a === r ? null : a, email: null })
        }
      return [...t.values()]
    }
    i.d(
      t,
      {},
      {
        Fx: function (e) {
          let t = new Map()
          for (let i of e ?? [])
            for (let e of i.messages) {
              if (null != e.deletedAt || "agent" === e.authorType) continue
              let i = e.author.id.split("__")[0],
                a = [e.createdAt, e.editedAt].flatMap((e) =>
                  null != e && Number.isFinite(Date.parse(e)) ? [Date.parse(e)] : [],
                ),
                r = t.get(i)?.lastActivityAtMs
              t.set(i, { id: i, lastActivityAtMs: 0 === a.length ? (r ?? null) : Math.max(r ?? -1 / 0, ...a) })
            }
          return [...t.values()]
        },
        Qk: n,
        aW: () => r(),
        fC: function (e) {
          let t = n(null == e ? void 0 : [e])
          return [t?.slice(0, 1), t?.slice(1)]
        },
        tb: () => void 0,
      },
    )
  },
  dEsd(e, t, i) {
    var a = i("ABep"),
      r = i("QosV"),
      n = i("zd8w"),
      s = i("Wf1j")
    function l(e) {
      return (0, a.jsx)(n.Fragment, { children: e.row }, e.id)
    }
    i.d(
      t,
      {},
      {
        M: function (e) {
          let t,
            i,
            n = (0, r.c)(7),
            { entries: o } = e,
            { locale: c } = (0, s.A)()
          if (n[0] !== o || n[1] !== c) {
            let e
            ;(n[3] !== c
              ? ((e = (e, t) =>
                  Number(!!e.isTeam) - Number(!!t.isTeam) ||
                  Number(!!t.isOwner) - Number(!!e.isOwner) ||
                  Number(!!t.isSelf) - Number(!!e.isSelf) ||
                  e.label.localeCompare(t.label, c, { sensitivity: "base" })),
                (n[3] = c),
                (n[4] = e))
              : (e = n[4]),
              (t = o.toSorted(e).map(l)),
              (n[0] = o),
              (n[1] = c),
              (n[2] = t))
          } else t = n[2]
          return (n[5] !== t ? ((i = (0, a.jsx)(a.Fragment, { children: t })), (n[5] = t), (n[6] = i)) : (i = n[6]), i)
        },
      },
    )
  },
  Yqxh(e, t, i) {
    i.d(
      t,
      {},
      {
        x: function (e, t) {
          return t ?? (e ? "editor" : "viewer")
        },
      },
    )
  },
  qCmE(e, t, i) {
    var a = i("ABep"),
      r = i("QosV"),
      n = i("zTeN"),
      s = i("iFq6"),
      l = i("EOo5"),
      o = i("MFZ6")
    i.d(
      t,
      {},
      {
        K: function (e) {
          let t,
            i,
            c = (0, r.c)(6),
            { groupId: d, size: p } = e,
            { accountId: u } = (0, l.As)(),
            { data: h } = (0, n._U)(s.l, u ?? "", { enabled: null != u }) ?? {}
          c[0] !== d || c[1] !== h ? ((t = h?.find((e) => e.id === d)), (c[0] = d), (c[1] = h), (c[2] = t)) : (t = c[2])
          let g = t,
            m = g?.avatar
          return (
            c[3] !== p || c[4] !== m
              ? ((i = (0, a.jsx)(o.y, { avatar: m, size: p })), (c[3] = p), (c[4] = m), (c[5] = i))
              : (i = c[5]),
            i
          )
        },
      },
    )
  },
  Vzcd(e, t, i) {
    var a = i("ABep"),
      r = i("QosV"),
      n = i("hwkA"),
      s = i("oyxz"),
      l = i("RNul")
    i.d(
      t,
      {},
      {
        r: function (e) {
          let t,
            i,
            o,
            c,
            d,
            p,
            u,
            h = (0, r.c)(30),
            {
              copyLink: g,
              disabled: m,
              hasPendingAccessChange: f,
              hasPendingInvitees: _,
              isSaving: y,
              isBusy: v,
              isCancelDisabled: b,
              inviteLabel: w,
              saveLabel: x,
              variant: k,
              onCancel: S,
              onClose: j,
            } = e,
            A = void 0 === v ? y : v,
            M = void 0 === b ? A : b,
            C = void 0 === k ? "default" : k,
            I = f || _
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
              (t = e))
          } else if (_) {
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
              (t = e))
          } else if (I) {
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
              (t = e))
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
              (t = e))
          }
          ;(h[6] !== g
            ? ((i = (0, a.jsx)("div", { className: "me-auto", children: g })), (h[6] = g), (h[7] = i))
            : (i = h[7]),
            h[8] !== I || h[9] !== M || h[10] !== S || h[11] !== C
              ? ((o =
                  I &&
                  (0, a.jsx)(n.$, {
                    color: "secondary",
                    variant: "outline",
                    size: "xl",
                    gutterSize: "audienceReview" === C ? "sm" : void 0,
                    type: "button",
                    disabled: M,
                    onClick: S,
                    children: (0, a.jsx)(s.A, {
                      id: "shareDialog.primaryAction.cancel",
                      defaultMessage: "Cancel",
                      description: "Button label for cancelling staged changes in a share dialog",
                    }),
                  })),
                (h[8] = I),
                (h[9] = M),
                (h[10] = S),
                (h[11] = C),
                (h[12] = o))
              : (o = h[12]))
          let q = "audienceReview" === C ? "sm" : void 0,
            E = I ? "submit" : "button",
            L = y || A || (I && m),
            P = I ? void 0 : j
          return (
            h[13] !== y || h[14] !== t
              ? ((c = y ? (0, a.jsx)("span", { role: "status", children: t }) : t),
                (h[13] = y),
                (h[14] = t),
                (h[15] = c))
              : (c = h[15]),
            h[16] !== y
              ? ((d = y && (0, a.jsx)(l.y, { className: "icon-2xs" })), (h[16] = y), (h[17] = d))
              : (d = h[17]),
            h[18] !== y || h[19] !== c || h[20] !== d || h[21] !== q || h[22] !== E || h[23] !== L || h[24] !== P
              ? ((p = (0, a.jsxs)(n.$, {
                  color: "primary",
                  size: "xl",
                  gutterSize: q,
                  type: E,
                  disabled: L,
                  "aria-busy": y,
                  onClick: P,
                  children: [c, d],
                })),
                (h[18] = y),
                (h[19] = c),
                (h[20] = d),
                (h[21] = q),
                (h[22] = E),
                (h[23] = L),
                (h[24] = P),
                (h[25] = p))
              : (p = h[25]),
            h[26] !== p || h[27] !== i || h[28] !== o
              ? ((u = (0, a.jsxs)(a.Fragment, { children: [i, o, p] })),
                (h[26] = p),
                (h[27] = i),
                (h[28] = o),
                (h[29] = u))
              : (u = h[29]),
            u
          )
        },
      },
    )
  },
  bQW7(e, t, i) {
    var a = i("S4d4"),
      r = i("CMOE")
    function n(e, t) {
      if (!t || t.includes("@") || !e.email) return !1
      let i = e.email.toLowerCase(),
        [a, n] = i.split("@")
      if (!n || !t.split(" ").some((e) => n.includes(e))) return !1
      let s = e.name?.toLowerCase() === i ? null : e.name
      return (
        !e.profile_username?.toLowerCase().startsWith(t) &&
        (0, r.f)(e, t) > 0 &&
        0 === (0, r.f)({ name: s, email: a }, t)
      )
    }
    function s(
      e,
      t,
      {
        currentUserId: i,
        limit: a = 10,
        includeUnknownNames: r = !1,
        excludeDomainOnlyMatches: l = !1,
        requireIdentified: c = !1,
        directoryMatches: p,
        mentionCounts: u,
      } = {},
    ) {
      let h = e.trim().toLowerCase().replace(/\s+/gu, " "),
        g = o(u, e),
        m = new Map()
      for (let [e, i] of [...t, p].entries())
        for (let t of i ?? []) {
          let a = c ? d(t) : t,
            r = a ?? t
          if (l && n(r, h)) continue
          let s = null != a,
            o = s
              ? (function (e, t, i) {
                  if ("" === t) return 0
                  let a = e.name?.trim().toLowerCase().replace(/\s+/gu, " ") ?? "",
                    r = e.email?.trim().toLowerCase() ?? ""
                  return (a === t && (i || t.includes(" "))) || r === t
                    ? 5
                    : a.startsWith(t)
                      ? 4
                      : a.split(" ").some((e) => e.startsWith(t))
                        ? 3
                        : r.startsWith(t)
                          ? 2
                          : Number(t.split(" ").every((e) => a.includes(e)) || r.includes(t))
                })(r, h, !!u?.size) || Number(i === p)
              : 0,
            g = m.get(r.id),
            f = g?.item.name
          ;(null == g ||
            o > g.match ||
            (!g.identified && s) ||
            (o === g.match && (!f || f.split("__")[0] === r.id) && r.name && r.name.split("__")[0] !== r.id)) &&
            m.set(r.id, { item: r, locality: g?.locality ?? e, match: o, identified: s })
        }
      return [...m.values()]
        .filter(
          ({ item: e, match: t, identified: a }) =>
            a && ("" === h ? e.id !== i?.split("__")[0] : t > 0 || (r && null == e.name)),
        )
        .sort(
          (e, t) =>
            Number(5 === t.match) - Number(5 === e.match) ||
            g(t) - g(e) ||
            e.locality - t.locality ||
            t.match - e.match ||
            (e.item.name || e.item.email || e.item.id).localeCompare(t.item.name || t.item.email || t.item.id) ||
            e.item.id.localeCompare(t.item.id),
        )
        .slice(0, a)
        .map(({ item: e }) => e)
    }
    function l(
      e,
      t,
      i,
      {
        currentUserId: a,
        limit: s = 10,
        includeUnknownNames: d = !1,
        excludeDomainOnlyMatches: p = !1,
        directoryMatches: u,
        mentionCounts: h,
      } = {},
    ) {
      let g = e.trim().toLowerCase().replace(/\s+/gu, " "),
        m = new Map(),
        f = (e, t) => {
          let i = e.split("__")[0]
          m.set(i, Math.max(m.get(i) ?? 0, t))
        }
      for (let e of i.rosterUserIds ?? []) f(e, 5)
      for (let e of i.participants ?? []) {
        let t = null == e.lastActivityAtMs ? null : i.asOfMs - e.lastActivityAtMs
        f(e.id, null != t && t >= 0 && t <= 2592e6 ? 20 : 10)
      }
      for (let e of i.liveUserIds ?? []) f(e, 35)
      for (let e of i.threadUserIds ?? []) f(e, 50)
      let _ = o(h, e),
        y = new Map()
      for (let i of [...t, u])
        for (let t of (d ? i : c(i)) ?? []) {
          if (p && n(t, g)) continue
          let a = t.id.split("__")[0],
            s = (0, r.f)(t, e) || Number(i === u),
            l = y.get(a)
          ;(null == l ||
            s > l.match ||
            (s === l.match &&
              (!l.item.name || l.item.name.split("__")[0] === a) &&
              t.name &&
              t.name.split("__")[0] !== a)) &&
            y.set(a, { item: t, match: s })
        }
      let v = "" === e.trim()
      return [...y.entries()]
        .filter(([e, { item: t, match: i }]) => (v ? e !== a?.split("__")[0] : i > 0 || (d && null == t.name)))
        .sort(
          ([e, t], [i, a]) =>
            Number(4 === a.match) - Number(4 === t.match) ||
            _(a) - _(t) ||
            a.match - t.match ||
            (m.get(i) ?? 0) - (m.get(e) ?? 0) ||
            e.localeCompare(i),
        )
        .slice(0, s)
        .map(([, { item: e }]) => e)
    }
    function o(e, t) {
      let i = "" === t.trim()
      return ({ item: t, match: a }) => (i || a >= 2 ? (e?.get(t.account_user_id ?? t.id) ?? 0) : 0)
    }
    function c(e) {
      return e?.flatMap((e) => {
        let t = d(e)
        return null == t ? [] : [t]
      })
    }
    function d(e) {
      let t = e.account_user_id ?? e.id,
        i = (0, a.Z)(t, e.name, e.email)
      if (null == i || null != e.deactivated_time) return
      let r = (0, a.Z)(t, e.email) ?? null
      return i === e.name && r === e.email ? e : { ...e, name: i, email: r }
    }
    i.d(
      t,
      {},
      {
        Jk: c,
        KZ: s,
        oy: l,
        pW: function (e, t, i, a) {
          return null == i ? s(e, t, a) : l(e, t, i, a)
        },
      },
    )
  },
  S4d4(e, t, i) {
    i.d(
      t,
      {},
      {
        Z: function (e, t, i) {
          let a = (e) => {
              let t = e.trim().replace(/^(?:user|group):/u, "")
              return t.includes("@") ? t : t.split("__")[0]
            },
            r = a(e)
          if (r && t?.trim() !== "<Redacted>")
            return [t?.trim(), i?.trim()].find((e) => {
              if (!e || "<Redacted>" === e) return !1
              let t = a(e)
              return (
                t !== r &&
                !/^(?:[0-9a-f]{32}|[0-9a-f]{40}|[0-9a-f]{64})$/iu.test(t) &&
                !/^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/iu.test(t) &&
                !/^(?:user|group)-(?:[a-z0-9]{24}|[0-9a-f]{32})$/iu.test(t)
              )
            })
        },
      },
    )
  },
  CMOE(e, t, i) {
    function a(e) {
      return e.trim().toLowerCase().replace(/\s+/gu, " ")
    }
    i.d(
      t,
      {},
      {
        f: function (e, t) {
          let i = a(t)
          if ("" === i) return 0
          let r = a(e.name ?? ""),
            n = a(e.email ?? "")
          if (i === r || i === n) return 4
          let s = i.split(" "),
            l = r.split(" ")
          return s.every((e) => l.includes(e))
            ? 3
            : s.every((e) => l.some((t) => t.startsWith(e)) || n.startsWith(e))
              ? 2
              : +!!s.every((e) => r.includes(e) || n.includes(e))
        },
      },
    )
  },
  PItM(e, t, i) {
    var a = i("ABep"),
      r = i("QosV"),
      n = i("oyxz"),
      s = i("YYxE")
    function l(e) {
      let t = (0, r.c)(10),
        { mode: i, restrictedLabel: s, workspaceName: l, workspaceLabel: o } = e
      switch (i) {
        case "workspace": {
          let e, i
          return (
            t[0] !== o || t[1] !== l
              ? ((e =
                  o ??
                  l ??
                  (0, a.jsx)(n.A, {
                    id: "librarySharing.workspace",
                    defaultMessage: "Workspace",
                    description: "Fallback current workspace name in the Library link-access menu",
                  })),
                (t[0] = o),
                (t[1] = l),
                (t[2] = e))
              : (e = t[2]),
            t[3] !== e ? ((i = (0, a.jsx)(a.Fragment, { children: e })), (t[3] = e), (t[4] = i)) : (i = t[4]),
            i
          )
        }
        case "link": {
          let e
          return (
            t[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(n.A, {
                  id: "codex.space.shareDialog.accessLink",
                  defaultMessage: "Anyone with the link",
                  description:
                    "General-access setting that allows anyone with the Space link to access it, shown only when the server explicitly permits link sharing",
                })),
                (t[5] = e))
              : (e = t[5]),
            e
          )
        }
        case "restricted": {
          let e, i
          return (
            t[6] !== s
              ? ((e =
                  s ??
                  (0, a.jsx)(n.A, {
                    id: "librarySharing.link.collaborators",
                    defaultMessage: "Only those invited",
                    description:
                      "Library share dialog link-access option restricting a file or folder to people who already have access",
                  })),
                (t[6] = s),
                (t[7] = e))
              : (e = t[7]),
            t[8] !== e ? ((i = (0, a.jsx)(a.Fragment, { children: e })), (t[8] = e), (t[9] = i)) : (i = t[9]),
            i
          )
        }
      }
    }
    i.d(
      t,
      {},
      {
        d: function (e) {
          let t,
            i,
            o,
            c = (0, r.c)(17),
            {
              disabled: d,
              footer: p,
              options: u,
              restrictedLabel: h,
              value: g,
              workspaceName: m,
              workspaceLabel: f,
              onChange: _,
            } = e,
            y = void 0 !== d && d
          if (c[0] !== u || c[1] !== m) {
            let e
            ;(c[3] !== m
              ? ((e = (e) => {
                  let t
                  return (
                    "restricted" === e.mode
                      ? (t = (0, a.jsx)(n.A, {
                          id: "librarySharing.link.collaboratorsDescription",
                          defaultMessage: "People who already have access can use this link",
                          description:
                            "Explanation of the Collaborators only option in the sharing link-access menu; existing access includes direct invitations and access inherited from a parent, group, or workspace",
                        }))
                      : "workspace" === e.mode &&
                        (t =
                          null == m
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
                                values: { workspaceName: m },
                              })),
                    { ...e, description: t }
                  )
                }),
                (c[3] = m),
                (c[4] = e))
              : (e = c[4]),
              (t = u.map(e)),
              (c[0] = u),
              (c[1] = m),
              (c[2] = t))
          } else t = c[2]
          return (
            c[5] !== u || c[6] !== h || c[7] !== f || c[8] !== m
              ? ((i = (e) => {
                  let t = u.find((t) => t.value === e)
                  return null == t
                    ? null
                    : (0, a.jsx)(l, { mode: t.mode, restrictedLabel: h, workspaceName: m, workspaceLabel: f })
                }),
                (c[5] = u),
                (c[6] = h),
                (c[7] = f),
                (c[8] = m),
                (c[9] = i))
              : (i = c[9]),
            c[10] !== y || c[11] !== p || c[12] !== _ || c[13] !== t || c[14] !== i || c[15] !== g
              ? ((o = (0, a.jsx)(s.d, {
                  disabled: y,
                  footer: p,
                  iconVariant: "thumbnail",
                  options: t,
                  value: g,
                  renderLabel: i,
                  onChange: _,
                })),
                (c[10] = y),
                (c[11] = p),
                (c[12] = _),
                (c[13] = t),
                (c[14] = i),
                (c[15] = g),
                (c[16] = o))
              : (o = c[16]),
            o
          )
        },
      },
    )
  },
  JGmX(e, t, i) {
    var a = i("Vzcd")
    i.d(t, { r: () => a.r })
  },
  ajGH(e, t, i) {
    i.d(t, { B: () => E })
    var a = i("ABep"),
      r = i("QosV"),
      n = i("kOeh"),
      s = i("i5ac"),
      l = i.n(s),
      o = i("zTeN"),
      c = i("zd8w"),
      d = i("Wf1j"),
      p = i("oyxz"),
      u = i("iFq6"),
      h = i("eFn4"),
      g = i("EOo5"),
      m = i("OAko"),
      f = i("LhhH"),
      _ = i("AOG7"),
      y = i("SPnB"),
      v = i("pyoT"),
      b = i("OWtl"),
      w = i("bQW7"),
      x = i("Rxyo"),
      k = i("rvFo")
    let S = (0, o.vU)(b.u, (e, { get: t, scope: i }) => {
      let a = t(y.PO),
        r = a.authenticatedUserId ?? null,
        n = t(y.chatGptAuthenticatedUserId$),
        s = t(y.kf),
        l =
          null != e &&
          a.authenticatedAccountId === e &&
          a.accountId === e &&
          null != r &&
          "loaded" === s.status &&
          "workspace" === s.structure &&
          t(x.y)
      return {
        enabled: l,
        queryKey: ["workspace-people-suggestions", e, r],
        staleTime: k.D.ONE_MINUTE,
        gcTime: k.D.ONE_MINUTE,
        retry: !1,
        networkMode: "always",
        queryFn: async ({ signal: t }) => {
          if (!l || null == e) throw Error("workspace suggestions are unavailable")
          let a = (0, v.watchSpaceAccount)(i, e, n, void 0, r),
            s = AbortSignal.any([t, a.signal, AbortSignal.timeout(15e3)])
          try {
            s.throwIfAborted()
            let t = await (0, _.AB)(e, "", s, { includeTotal: !1, limit: 20 })
            return (s.throwIfAborted(), (0, w.Jk)(t) ?? [])
          } finally {
            a.stop()
          }
        },
      }
    })
    var j = i("qCmE"),
      A = i("ENs9"),
      M = i("pLRu"),
      C = i("MFZ6"),
      I = i("CFGX"),
      q = i("LiNd")
    function E(e) {
      let t,
        i,
        n,
        s,
        p,
        f,
        y,
        v,
        b,
        x,
        k,
        E,
        U,
        F,
        W,
        z,
        G = (0, r.c)(59),
        {
          accountId: K,
          ariaDescribedBy: B,
          disabled: Q,
          emptyMessage: H,
          getRemoveLabel: V,
          getGroupRecipient: Y,
          getPersonRecipient: Z,
          getTeamRecipient: X,
          isLoading: J,
          loadingLabel: ee,
          options: et,
          dotOptions: ei,
          placeholder: ea,
          query: er,
          peopleQuery: en,
          recentOptions: es,
          suggestedOptions: el,
          suggestionsAsOf: eo,
          improvedSuggestions: ec,
          autoFocus: ed,
          searchFailed: ep,
          contextualPicks: eu,
          peopleFirst: eh,
          selectionDisplay: eg,
          selectedOptions: em,
          trailingContent: ef,
          onChange: e_,
          onQueryChange: ey,
        } = e,
        ev = void 0 === en ? er : en,
        eb = void 0 !== ec && ec,
        ew = void 0 === ed ? eb : ed,
        ex = void 0 === eg ? "input" : eg,
        ek = (0, d.A)(),
        [eS, ej] = (0, c.useState)(),
        { data: eA } = (0, m.oV)(),
        { accountId: eM } = (0, g.As)(),
        eC = eA?.accounts?.find((e) => e.id === K),
        eI = (0, o._U)(u.w, K ?? ""),
        eq = (eI && null != X) || null != Y || (eb && null != Z)
      G[0] !== eq ? ((t = { enabled: eq }), (G[0] = eq), (G[1] = t)) : (t = G[1])
      let { data: eE, isError: eL } = (0, o._U)(h.Jk, K ?? "", t),
        eP = null == eC ? void 0 : (0, I.V)(eC, eE, eL),
        eN = eM === K && null != Y && eP?.allowGroups === !0
      G[2] === Symbol.for("react.memo_cache_sentinel") ? ((i = { includeMemberCounts: !0 }), (G[2] = i)) : (i = G[2])
      let { data: eO, isError: eT, isPending: eR, isFetching: e$ } = (0, _.Nc)(eN && !Q ? er : "", i),
        eD = eI && null != X && eP?.canSearchMembers === !0,
        { data: eU, isError: eF, isLoading: eW } = (0, o._U)(u.l, K ?? "", { enabled: eD && !Q }) ?? {}
      G[3] !== eD || G[4] !== ek || G[5] !== ea?.people || G[6] !== ea?.peopleAndTeams
        ? ((n = eD
            ? (ea?.peopleAndTeams ??
              ek.formatMessage({
                id: "shareRecipientPicker.peopleAndTeamsLabel",
                defaultMessage: "Add people or teams",
                description:
                  "Placeholder and accessible label for a sharing picker that can invite workspace people and teams",
              }))
            : (ea?.people ??
              ek.formatMessage({
                id: "shareRecipientPicker.peopleLabel",
                defaultMessage: "Add people",
                description:
                  "Placeholder and accessible label for a sharing picker that can invite people only because team discovery is unavailable",
              }))),
          (G[3] = eD),
          (G[4] = ek),
          (G[5] = ea?.people),
          (G[6] = ea?.peopleAndTeams),
          (G[7] = n))
        : (n = G[7])
      let ez = n,
        eG = er.trim().toLocaleLowerCase()
      G[8] !== ev ? ((s = ev.trim()), (G[8] = ev), (G[9] = s)) : (s = G[9])
      let eK = s,
        eB = null != eu,
        eQ = eh ?? eB,
        eH = eD && !eF ? (eU ?? []).map((e) => ({ team: e, recipient: X(e) })) : [],
        eV = new Set(em.map($)),
        eY =
          "" !== eG || Q
            ? []
            : l()(
                (es ?? []).filter((e) => {
                  let { id: t, accessStatus: i } = e
                  return null == i && !eV.has(t)
                }),
                "id",
              ).slice(0, 5),
        eZ = new Set(eY.map(R))
      G[10] !== ek
        ? ((p = (e) => {
            let { team: t, recipient: i } = e
            return {
              ...i,
              isActorTeamMember: !0,
              secondaryLabel: (0, M.D)(ek, t.member_count),
              avatar: (0, a.jsx)(C.y, { avatar: t.avatar, size: "sm" }),
            }
          }),
          (G[10] = ek),
          (G[11] = p))
        : (p = G[11])
      let eX = eH
          .filter((e) => {
            let { team: t } = e
            return eb || t.name.toLocaleLowerCase().includes(eG)
          })
          .map(p)
          .filter((e) => {
            let { id: t, accessStatus: i } = e
            return ("" !== eG || null == i) && !eV.has(t) && (eb || !eZ.has(t))
          }),
        eJ = new Set(eX.map(T)),
        e0 =
          "" === eG || !eN || Q || eT
            ? []
            : l()(
                (eO ?? [])
                  .filter((e) => null == e.system_use_case && (eP?.allowScimGroups || !e.is_scim_managed))
                  .map((e) => ({
                    ...Y(e),
                    secondaryLabel: (0, M.D)(ek, e.num_members),
                    avatar: (0, a.jsx)(j.K, { groupId: e.id, size: "sm" }),
                  }))
                  .filter((e) => {
                    let { id: t } = e
                    return (eb || !eJ.has(t)) && !eV.has(t)
                  }),
                "id",
              ),
        e1 = (e) =>
          e?.filter((e) => {
            let { id: t } = e
            return !eJ.has(t) && !eV.has(t) && !eZ.has(t)
          }),
        e2 = "" === eK ? [] : (e1(et) ?? [])
      null != eu &&
        (e2 = (0, w.KZ)(
          ev,
          [...eu, et].map((e) => e1(e)?.map(O)),
        ).map(N))
      let e3 =
          0 === eY.length && 0 === eX.length && 0 === e0.length
            ? void 0
            : [
                {
                  id: "recent",
                  label: ek.formatMessage({
                    id: "shareRecipientPicker.recent",
                    defaultMessage: "Recent",
                    description:
                      "Heading for people the user recently shared a Page or Space with, shown when the sharing search input is empty",
                  }),
                  options: eY.map(D),
                },
                {
                  id: "teams",
                  label:
                    "" === eG
                      ? ek.formatMessage({
                          id: "shareRecipientPicker.yourTeams",
                          defaultMessage: "Your teams",
                          description:
                            "Heading for the user's Teams suggested in the empty Library, Page, or Space sharing recipient picker",
                        })
                      : ek.formatMessage({
                          id: "shareRecipientPicker.teams",
                          defaultMessage: "Teams",
                          description: "Heading for matching Teams in Library, Page, or Space sharing search results",
                        }),
                  options: eX.map(D),
                },
                {
                  id: "groups",
                  label: ek.formatMessage({
                    id: "shareRecipientPicker.groups",
                    defaultMessage: "Groups",
                    description: "Heading for matching administrative and SCIM groups in sharing search results",
                  }),
                  options: e0.map(D),
                },
                {
                  id: "people",
                  label: ek.formatMessage({
                    id: "shareRecipientPicker.people",
                    defaultMessage: "People",
                    description:
                      "Heading for people matching the workspace directory alongside Teams in the sharing recipient picker",
                  }),
                  options: e2.map(D),
                },
              ],
        e4 =
          eb && !Q
            ? (0, q.s)(ev, [...(eu ?? []), eX, el, es, e0, "" === eK ? void 0 : et], {
                selectedIds: eV,
                suggestionsAsOf: eo,
              })
            : [],
        e5 =
          eb &&
          !Q &&
          "" === eG &&
          "" === eK &&
          null != Z &&
          eM === K &&
          eP?.canSearchMembers === !0 &&
          !J &&
          !eW &&
          e4.length < 10
      G[12] !== e5 ? ((f = { enabled: e5 }), (G[12] = e5), (G[13] = f)) : (f = G[13])
      let { data: e6, isEnabled: e7, isLoading: e8, isError: e9 } = (0, o._U)(S, K ?? null, f),
        te = e5 && e7
      if (eb) {
        let e = te
          ? (0, q.s)(
              "",
              [
                e6?.flatMap((e) => {
                  let t = Z?.(e)
                  return null == t ? [] : [t]
                }),
              ],
              { selectedIds: new Set([...eV, ...e4.map(P)]), limit: 3 },
            )
          : []
        e3 = [
          {
            id: "suggested",
            label: ek.formatMessage({
              id: "shareRecipientPicker.suggested",
              defaultMessage: "Suggested",
              description: "Heading for people and groups ranked together as likely sharing recipients",
            }),
            options: [...e4, ...e].slice(0, 10).map(D),
          },
        ]
      }
      eQ && e3?.sort(L)
      let tt = ep && ("" !== eK || eB),
        ti = eD && eF,
        ta = "" !== eG && eN && eT,
        tr = tt || ti || ta,
        tn = (("" !== eK || eB) && J) || ("" !== eG && eN && (eR || e$)) || (eD && eW),
        ts = H
      ;("" === eG ? (ts = te && null != e6 && !e9 ? H : null) : tn ? (ts = ee) : (J || tr) && (ts = null),
        G[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (e) => {
              ej(e?.closest('[role="dialog"]') ?? null)
            }),
            (G[14] = y))
          : (y = G[14]))
      let tl = A.X,
        to = !eQ || "user",
        tc = (eB && J && !tt) || (te && e8),
        td = te && e9
      ;(G[15] !== ta || G[16] !== tc || G[17] !== td || G[18] !== ti
        ? ((v = { peopleLoading: tc, peopleError: td, groupsError: ta, teamsError: ti }),
          (G[15] = ta),
          (G[16] = tc),
          (G[17] = td),
          (G[18] = ti),
          (G[19] = v))
        : (v = G[19]),
        G[20] !== em || G[21] !== ex
          ? ((b = "external" === ex ? [] : em.map(D)), (G[20] = em), (G[21] = ex), (G[22] = b))
          : (b = G[22]),
        G[23] !== V
          ? ((x = (e) => {
              let { recipient: t } = e
              return V(t)
            }),
            (G[23] = V),
            (G[24] = x))
          : (x = G[24]))
      let tp = e2.map(D),
        tu = ei
          ?.filter((e) => {
            let { id: t } = e
            return !eV.has(t)
          })
          .map(D)
      return (
        G[25] !== e_ || G[26] !== em
          ? ((k = (e) => {
              let { recipient: t } = e
              e_(l()([...em, t], "id"))
            }),
            (E = (e) => {
              let { id: t } = e
              e_(em.filter((e) => e.id !== t))
            }),
            (G[25] = e_),
            (G[26] = em),
            (G[27] = k),
            (G[28] = E))
          : ((k = G[27]), (E = G[28])),
        G[29] !== ee || G[30] !== tn
          ? ((U = tn
              ? (0, a.jsx)("span", { className: "sr-only", role: "status", "aria-label": ee, children: ee })
              : null),
            (G[29] = ee),
            (G[30] = tn),
            (G[31] = U))
          : (U = G[31]),
        G[32] !== U || G[33] !== ef
          ? ((F = (0, a.jsxs)(a.Fragment, { children: [U, ef] })), (G[32] = U), (G[33] = ef), (G[34] = F))
          : (F = G[34]),
        G[35] !== tl ||
        G[36] !== B ||
        G[37] !== ew ||
        G[38] !== Q ||
        G[39] !== eb ||
        G[40] !== ez ||
        G[41] !== ey ||
        G[42] !== e3 ||
        G[43] !== eS ||
        G[44] !== er ||
        G[45] !== ts ||
        G[46] !== to ||
        G[47] !== v ||
        G[48] !== b ||
        G[49] !== x ||
        G[50] !== tp ||
        G[51] !== tu ||
        G[52] !== k ||
        G[53] !== E ||
        G[54] !== F
          ? ((W = (0, a.jsx)(tl, {
              preserveHighlightOnItemsChange: to,
              autoFocus: ew,
              waitForDialogEntrance: eb,
              preserveEmptyQueryOrder: eb,
              ariaLabel: ez,
              ariaDescribedBy: B,
              searchStatus: v,
              disabled: Q,
              selectedOptions: b,
              getRemoveLabel: x,
              options: tp,
              dotOptions: tu,
              optionSections: e3,
              portalContainer: eS,
              query: er,
              onQueryChange: ey,
              showLoadingDropdown: !1,
              showSuggestionsOnFocus: !0,
              showSuggestionsOnQueryChange: eb,
              onSelectOption: k,
              onRemoveOption: E,
              placeholder: ez,
              trailingContent: F,
              emptyMessage: ts,
            })),
            (G[35] = tl),
            (G[36] = B),
            (G[37] = ew),
            (G[38] = Q),
            (G[39] = eb),
            (G[40] = ez),
            (G[41] = ey),
            (G[42] = e3),
            (G[43] = eS),
            (G[44] = er),
            (G[45] = ts),
            (G[46] = to),
            (G[47] = v),
            (G[48] = b),
            (G[49] = x),
            (G[50] = tp),
            (G[51] = tu),
            (G[52] = k),
            (G[53] = E),
            (G[54] = F),
            (G[55] = W))
          : (W = G[55]),
        G[56] !== y || G[57] !== W
          ? ((z = (0, a.jsx)("div", { ref: y, className: "flex min-w-0 flex-1 flex-col gap-2", children: W })),
            (G[56] = y),
            (G[57] = W),
            (G[58] = z))
          : (z = G[58]),
        z
      )
    }
    function L(e, t) {
      return "people" === e.id ? -1 : +("people" === t.id)
    }
    function P(e) {
      let { id: t } = e
      return t
    }
    function N(e) {
      let { recipient: t } = e
      return t
    }
    function O(e) {
      return { id: e.id, name: e.label, email: e.secondaryLabel, recipient: e }
    }
    function T(e) {
      let { id: t } = e
      return t
    }
    function R(e) {
      let { id: t } = e
      return t
    }
    function $(e) {
      let { id: t } = e
      return t
    }
    function D(e) {
      let t
      return (
        "pending" === e.accessStatus
          ? (t = (0, a.jsx)(p.A, {
              id: "shareRecipientPicker.invitationPending",
              defaultMessage: "Invitation pending",
              description:
                "Disabled sharing search result for a person or group with an invitation awaiting acceptance",
            }))
          : "existing" === e.accessStatus &&
            (t = (0, a.jsx)(p.A, {
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
          disabledReason: t,
          recipient: e,
        }
      )
    }
  },
  CFGX(e, t, i) {
    var a = i("vw1R")
    i.d(
      t,
      {},
      {
        V: function (e, t, i) {
          let r = "workspace" === e.structure,
            n = (0, a.o)(e.plan_type),
            s =
              r &&
              (!n ||
                "account-owner" === e.account_user_role ||
                "account-admin" === e.account_user_role ||
                (!i && t?.permissions?.includes("chatgpt.workspace.member.role.view") === !0))
          return {
            isWorkspace: r,
            canSearchMembers: s,
            allowGroups: n && s,
            allowScimGroups: !i && t?.beta_settings?.allow_scim_group_sharing_for_projects_and_gpts !== !1,
          }
        },
      },
    )
  },
  LiNd(e, t, i) {
    var a = i("S4d4"),
      r = i("CMOE")
    function n(e, t) {
      let i = e.suggestion,
        a = i?.same_work_independent_occasions30d ?? 0,
        r = 0
      a >= 3 ? (r = 60) : 2 === a ? (r = 45) : 1 === a && (r = 30)
      let n = i?.last_shared_at != null && null != t ? (Date.parse(t) - Date.parse(i.last_shared_at)) / 864e5 : 0 / 0,
        s = 0
      return (
        n >= 0 && n <= 7 ? (s = 20) : n > 7 && n <= 30 ? (s = 10) : n > 30 && n <= 90 && (s = 3),
        Math.max(r, Math.min(25, s + 5 * ((i?.share_days30d ?? 0) >= 3))) +
          (e.id.startsWith("group:") && (!0 === e.isActorTeamMember || i?.is_actor_team_member === !0) ? 5 : 0)
      )
    }
    i.d(
      t,
      {},
      {
        s: function (e, t, { selectedIds: i, suggestionsAsOf: s, limit: l = 10 }) {
          let o = e.trim(),
            c = new Map()
          for (let e of t)
            for (let t of e ?? []) {
              if (!t.id.startsWith("user:") && !t.id.startsWith("group:")) continue
              let e = (0, a.Z)(t.id, t.label, t.id.startsWith("user:") ? t.secondaryLabel : void 0),
                i = null != e,
                n = t.id.startsWith("user:") ? (0, a.Z)(t.id, t.secondaryLabel) : t.secondaryLabel,
                s = i && (e !== t.label || n !== t.secondaryLabel) ? { ...t, label: e, secondaryLabel: n } : t,
                l = i ? (0, r.f)({ name: e, email: t.id.startsWith("group:") ? void 0 : n }, o) : 0,
                d = c.get(t.id)
              null == d
                ? c.set(t.id, { item: s, match: l, identified: i })
                : c.set(t.id, {
                    item: {
                      ...(l > d.match || (!d.identified && i) ? s : d.item),
                      accessStatus: d.item.accessStatus ?? t.accessStatus,
                      isActorTeamMember: d.item.isActorTeamMember || t.isActorTeamMember,
                      suggestion:
                        null == d.item.suggestion
                          ? t.suggestion
                          : {
                              ...d.item.suggestion,
                              sources: [...new Set([...d.item.suggestion.sources, ...(t.suggestion?.sources ?? [])])],
                            },
                    },
                    match: Math.max(d.match, l),
                    identified: d.identified || i,
                  })
            }
          return [...c.values()]
            .filter(
              ({ item: e, match: t, identified: a }) =>
                a && !i.has(e.id) && ("" === o ? null == e.accessStatus : t > 0),
            )
            .sort((e, t) => t.match - e.match || n(t.item, s) - n(e.item, s) || e.item.id.localeCompare(t.item.id))
            .slice(0, l)
            .map(({ item: e }) => e)
        },
      },
    )
  },
  MFZ6(e, t, i) {
    var a = i("ABep"),
      r = i("QosV"),
      n = i("on57"),
      s = i("oyQi")
    i.d(
      t,
      {},
      {
        y: function (e) {
          let t,
            i,
            l,
            o = (0, r.c)(7),
            { avatar: c, size: d } = e,
            p = void 0 === d ? "md" : d
          return (
            o[0] !== p
              ? ((t = (0, n.A)(
                  "flex shrink-0 items-center justify-center rounded-full bg-secondary-soft",
                  { xs: "icon-sm", sm: "size-6", md: "size-7" }[p],
                )),
                (o[0] = p),
                (o[1] = t))
              : (t = o[1]),
            o[2] !== c ? ((i = (0, a.jsx)(s.n, { avatar: c, size: "small" })), (o[2] = c), (o[3] = i)) : (i = o[3]),
            o[4] !== t || o[5] !== i
              ? ((l = (0, a.jsx)("span", { className: t, children: i })), (o[4] = t), (o[5] = i), (o[6] = l))
              : (l = o[6]),
            l
          )
        },
      },
    )
  },
  dQD8(e, t, i) {
    var a = i("IGZ3")
    let r = { some: 0, all: 1 }
    i.d(
      t,
      {},
      {
        l: function (e, t, { root: i, margin: n, amount: s = "some" } = {}) {
          let l = (0, a.K)(e),
            o = new WeakMap(),
            c = new IntersectionObserver(
              (e) => {
                e.forEach((e) => {
                  let i = o.get(e.target)
                  if (!!i !== e.isIntersecting)
                    if (e.isIntersecting) {
                      let i = t(e.target, e)
                      "function" == typeof i ? o.set(e.target, i) : c.unobserve(e.target)
                    } else "function" == typeof i && (i(e), o.delete(e.target))
                })
              },
              { root: i, rootMargin: n, threshold: "number" == typeof s ? s : r[s] },
            )
          return (l.forEach((e) => c.observe(e)), () => c.disconnect())
        },
      },
    )
  },
  mEbU(e, t, i) {
    var a = i("zd8w"),
      r = i("dQD8")
    i.d(
      t,
      {},
      {
        W: function (e, { root: t, margin: i, amount: n, once: s = !1, initial: l = !1 } = {}) {
          let [o, c] = (0, a.useState)(l)
          return (
            (0, a.useEffect)(() => {
              if (!e.current || (s && o)) return
              let a = { root: (t && t.current) || void 0, margin: i, amount: n }
              return (0, r.l)(e.current, () => (c(!0), s ? void 0 : () => c(!1)), a)
            }, [t, e, i, s, n]),
            o
          )
        },
      },
    )
  },
}
//# sourceMappingURL=193968.72ba701589.js.map
