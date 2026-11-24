export const __rspack_esm_ids = [40994]
export const __webpack_modules__ = {
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
            colorFrom: m,
            variant: h = "soft",
            imageUrl: g,
            Icon: f,
            tooltipComponent: _,
            ...y
          } = e,
          [v, x] = (0, r.useState)(),
          b = !!(y.onPointerDown || y.onClick),
          w = null == m ? void 0 : l[m.split("").reduce((e, t) => e + t.charCodeAt(0), 0) % l.length],
          k = (0, a.jsx)(b ? "button" : "span", {
            className: (0, n.A)("Avatar-ZIKxFq", t),
            style: (0, s.mW)({
              "avatar-size": i,
              "avatar-background-color": null == w ? void 0 : `var(--color-avatar-${w})`,
              "avatar-text-color": null == w ? void 0 : "var(--color-avatar-foreground)",
            }),
            role: b ? void 0 : "presentation",
            "aria-label": b ? c : void 0,
            "data-color": d,
            "data-variant": h,
            type: b ? "button" : void 0,
            ...y,
            children:
              g && "error" !== v
                ? (0, a.jsx)(u, { status: v, url: g, onError: () => x("error"), onLoad: () => x("loaded") })
                : f
                  ? (0, a.jsx)(f, { className: "AvatarIcon-PmtHig" })
                  : o
                    ? (0, a.jsx)(p, { count: o })
                    : (0, a.jsx)("span", { className: "AvatarInitial-tg7FSE", children: c?.charAt(0).toUpperCase() }),
          })
        return c && _ ? (0, a.jsx)(_, { content: c, children: k }) : k
      },
      d = (e) => {
        if (e && !(e.includes("gravatar.com") && e.includes("cdn.auth0.com"))) return e
      },
      u = ({ url: e, status: t, onLoad: i, onError: r }) =>
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
      p = ({ count: e }) => {
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
    var a = i("qmMi"),
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
      u = i("glqn"),
      p = i("ajGH"),
      m = i("LKbA"),
      h = i("rvFo"),
      g = i("GEsy"),
      f = i("AEhU")
    function _(e) {
      let t,
        i,
        s,
        l,
        o,
        c,
        d,
        u,
        p = (0, r.c)(35)
      p[0] !== e.query ? ((t = e.query.trim().toLowerCase()), (p[0] = e.query), (p[1] = t)) : (t = p[1])
      let m = t,
        _ = (0, g.o)(m, 150)
      p[2] !== e.currentEmail || p[3] !== e.existingEmails || p[4] !== m
        ? ((i = (0, f.on)({ query: m, selected: [], currentEmail: e.currentEmail, existingEmails: e.existingEmails })),
          (p[2] = e.currentEmail),
          (p[3] = e.existingEmails),
          (p[4] = m),
          (p[5] = i))
        : (i = p[5])
      let y = i.selected
      p[6] !== y || p[7] !== e.disabled || p[8] !== e.selected || p[9] !== m
        ? ((s =
            !e.disabled &&
            1 === y.length &&
            y[0]?.isValid === !0 &&
            y[0].label === m &&
            !e.selected.some((e) => {
              let { id: t } = e
              return t === y[0]?.id
            })),
          (p[6] = y),
          (p[7] = e.disabled),
          (p[8] = e.selected),
          (p[9] = m),
          (p[10] = s))
        : (s = p[10])
      let v = s
      p[11] !== e.accountId || p[12] !== e.currentPrincipalId || p[13] !== m
        ? ((l = ["library-sharing-recipient", e.accountId, e.currentPrincipalId, m]),
          (p[11] = e.accountId),
          (p[12] = e.currentPrincipalId),
          (p[13] = m),
          (p[14] = l))
        : (l = p[14])
      let x = v && m === _
      ;(p[15] !== e || p[16] !== m
        ? ((o = (t) => {
            let { signal: i } = t
            return e.resolveRecipient(m, AbortSignal.any([i, AbortSignal.timeout(7e3)]))
          }),
          (p[15] = e),
          (p[16] = m),
          (p[17] = o))
        : (o = p[17]),
        p[18] !== l || p[19] !== x || p[20] !== o
          ? ((c = { queryKey: l, enabled: x, staleTime: h.D.ONE_MINUTE, networkMode: "always", retry: !1, queryFn: o }),
            (p[18] = l),
            (p[19] = x),
            (p[20] = o),
            (p[21] = c))
          : (c = p[21]))
      let { data: b, isFetching: w, isError: j } = (0, n.I)(c)
      p[22] !== v || p[23] !== y || p[24] !== b?.eligible || p[25] !== _ || p[26] !== j || p[27] !== w || p[28] !== m
        ? ((d = v && !w && !j && m === _ && b?.eligible ? y : []),
          (p[22] = v),
          (p[23] = y),
          (p[24] = b?.eligible),
          (p[25] = _),
          (p[26] = j),
          (p[27] = w),
          (p[28] = m),
          (p[29] = d))
        : (d = p[29])
      let S = v && (w || m !== _)
      return (
        p[30] !== j || p[31] !== e || p[32] !== d || p[33] !== S
          ? ((u = (0, a.jsx)(k, { ...e, options: d, isLoading: S, searchFailed: j })),
            (p[30] = j),
            (p[31] = e),
            (p[32] = d),
            (p[33] = S),
            (p[34] = u))
          : (u = p[34]),
        u
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
        u,
        p,
        m,
        h = (0, r.c)(37),
        { data: g, isFetching: f, isPending: _, isError: y } = (0, d.Nv)(e.disabled ? "" : e.query),
        j = `user:${e.currentPrincipalId}`
      h[0] !== e.existingPrincipalKeys || h[1] !== j
        ? ((t = new Set([...e.existingPrincipalKeys, j])), (h[0] = e.existingPrincipalKeys), (h[1] = j), (h[2] = t))
        : (t = h[2])
      let S = t,
        A = e.currentEmail ?? ""
      h[3] !== e.existingEmails || h[4] !== A
        ? ((i = new Set([...e.existingEmails, A].map(w))), (h[3] = e.existingEmails), (h[4] = A), (h[5] = i))
        : (i = h[5])
      let M = i
      h[6] !== e.selected ? ((n = new Set(e.selected.map(b))), (h[6] = e.selected), (h[7] = n)) : (n = h[7])
      let C = n
      h[8] !== e.selected ? ((s = new Set(e.selected.flatMap(x))), (h[8] = e.selected), (h[9] = s)) : (s = h[9])
      let I = s
      if (
        h[10] !== M ||
        h[11] !== S ||
        h[12] !== e.shares?.shares ||
        h[13] !== e.shares?.shares.filter ||
        h[14] !== I ||
        h[15] !== C ||
        h[16] !== g
      ) {
        let t,
          i = e.shares?.shares.filter(v)
        for (let e of ((l = (e, t) => {
          let a
          return (
            S.has(`group:${e}`) &&
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
        h[19] !== g ? ((t = g ?? []), (h[19] = g), (h[20] = t)) : (t = h[20]),
        t)) {
          let t,
            a = `user:${e.account_user_id}`
          C.has(a) ||
            (null != e.email && I.has(e.email.trim().toLowerCase())) ||
            ((S.has(a) || (null != e.email && M.has(e.email.trim().toLowerCase()))) &&
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
        ;((h[10] = M),
          (h[11] = S),
          (h[12] = e.shares?.shares),
          (h[13] = e.shares?.shares.filter),
          (h[14] = I),
          (h[15] = C),
          (h[16] = g),
          (h[17] = l),
          (h[18] = o))
      } else ((l = h[17]), (o = h[18]))
      ;(h[21] !== l || h[22] !== e.allowGroups
        ? ((c = e.allowGroups ? (e) => l(e.id, e.name) : void 0), (h[21] = l), (h[22] = e.allowGroups), (h[23] = c))
        : (c = h[23]),
        h[24] !== l ? ((u = (e) => l(e.id, e.name)), (h[24] = l), (h[25] = u)) : (u = h[25]))
      let q = _ || f
      return (
        h[26] !== e.query || h[27] !== I
          ? ((p = "" !== e.query.trim() && I.has(e.query.trim().toLowerCase())),
            (h[26] = e.query),
            (h[27] = I),
            (h[28] = p))
          : (p = h[28]),
        h[29] !== o || h[30] !== e || h[31] !== c || h[32] !== u || h[33] !== q || h[34] !== p || h[35] !== y
          ? ((m = (0, a.jsx)(k, {
              ...e,
              getGroupRecipient: c,
              getTeamRecipient: u,
              options: o,
              isLoading: q,
              queryAlreadyAdded: p,
              searchFailed: y,
            })),
            (h[29] = o),
            (h[30] = e),
            (h[31] = c),
            (h[32] = u),
            (h[33] = q),
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
    function x(e) {
      return null == e.secondaryLabel ? [] : [e.secondaryLabel.trim().toLowerCase()]
    }
    function b(e) {
      return e.id
    }
    function w(e) {
      return e.trim().toLowerCase()
    }
    function k(e) {
      let t,
        i,
        n,
        c,
        d,
        h,
        g,
        f,
        _,
        y,
        v,
        x,
        b,
        w,
        k,
        I,
        q,
        E,
        O = (0, r.c)(61)
      O[0] !== e
        ? (({
            getGroupRecipient: t,
            getTeamRecipient: i,
            options: n,
            queryAlreadyAdded: d,
            searchFailed: h,
            isLoading: g,
            ...c
          } = e),
          (O[0] = e),
          (O[1] = t),
          (O[2] = i),
          (O[3] = n),
          (O[4] = c),
          (O[5] = d),
          (O[6] = h),
          (O[7] = g))
        : ((t = O[1]), (i = O[2]), (n = O[3]), (c = O[4]), (d = O[5]), (h = O[6]), (g = O[7]))
      let L = void 0 !== d && d,
        N = void 0 !== h && h,
        R = void 0 !== g && g,
        $ = (0, l.A)(),
        P = (0, s.useId)(),
        U = c.selected.some(C),
        D = c.disabled || (c.isWorkspace && !c.canSearchMembers),
        T = null
      if (U) {
        let e
        ;(O[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(o.A, {
              id: "librarySharing.invite.invalidEmails",
              defaultMessage: "Remove invalid email addresses before inviting",
            })),
            (O[8] = e))
          : (e = O[8]),
          (T = e))
      } else if (L) {
        let e
        ;(O[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(o.A, {
              id: "librarySharing.invite.alreadyAdded",
              defaultMessage: "This person already has access or is selected",
            })),
            (O[9] = e))
          : (e = O[9]),
          (T = e))
      }
      O[10] !== T || O[11] !== P || O[12] !== c.ariaDescribedBy
        ? ((f = [c.ariaDescribedBy, null == T ? void 0 : P].filter(M).join(" ") || void 0),
          (O[10] = T),
          (O[11] = P),
          (O[12] = c.ariaDescribedBy),
          (O[13] = f))
        : (f = O[13])
      let F = f,
        W = null
      if (c.selected.length > 0 && null != c.role && null != c.allowedRoles) {
        let e
        ;(O[14] !== D || O[15] !== c.allowedRoles || O[16] !== c.onRoleChange || O[17] !== c.role
          ? ((e =
              c.allowedRoles.length > 1
                ? (0, a.jsx)(u.e, {
                    indicatorVariant: "checkmark",
                    variant: "inline",
                    renderLabel: A,
                    disabled: D,
                    options: c.allowedRoles.map(S),
                    value: c.role,
                    onChange: c.onRoleChange,
                  })
                : (0, a.jsx)("span", {
                    className: "text-tertiary",
                    children: (0, a.jsx)(m.u, { permission: c.role }),
                  })),
            (O[14] = D),
            (O[15] = c.allowedRoles),
            (O[16] = c.onRoleChange),
            (O[17] = c.role),
            (O[18] = e))
          : (e = O[18]),
          (W = e))
      }
      O[19] !== $
        ? ((_ = $.formatMessage({ id: "librarySharing.invite.personalPlaceholder", defaultMessage: "Add emails" })),
          (O[19] = $),
          (O[20] = _))
        : (_ = O[20])
      let z = _
      O[21] !== $
        ? ((y = (e) =>
            $.formatMessage(
              { id: "librarySharing.invite.removeSelection", defaultMessage: "Remove {name} from the invitation" },
              { name: e.label },
            )),
          (O[21] = $),
          (O[22] = y))
        : (y = O[22])
      let G = y
      return (
        O[23] !== z || O[24] !== c.isWorkspace
          ? ((v = c.isWorkspace ? void 0 : { people: z, peopleAndTeams: z }),
            (O[23] = z),
            (O[24] = c.isWorkspace),
            (O[25] = v))
          : (v = O[25]),
        O[26] !== n ? ((x = n?.map(j)), (O[26] = n), (O[27] = x)) : (x = O[27]),
        O[28] !== $ || O[29] !== c.isWorkspace
          ? ((b = c.isWorkspace
              ? $.formatMessage({
                  id: "librarySharing.invite.searching",
                  defaultMessage: "Searching workspace members",
                })
              : $.formatMessage({
                  id: "librarySharing.invite.searchingRecipients",
                  defaultMessage: "Searching for people",
                })),
            (O[28] = $),
            (O[29] = c.isWorkspace),
            (O[30] = b))
          : (b = O[30]),
        O[31] !== c.isWorkspace
          ? ((w = c.isWorkspace
              ? (0, a.jsx)(o.A, {
                  id: "librarySharing.invite.noWorkspaceMatches",
                  defaultMessage: "No matching people or teams",
                })
              : (0, a.jsx)(o.A, {
                  id: "librarySharing.invite.noEligibleRecipient",
                  defaultMessage: "No matching recipients",
                })),
            (O[31] = c.isWorkspace),
            (O[32] = w))
          : (w = O[32]),
        O[33] !== F ||
        O[34] !== D ||
        O[35] !== t ||
        O[36] !== G ||
        O[37] !== i ||
        O[38] !== R ||
        O[39] !== c.accountId ||
        O[40] !== c.onChange ||
        O[41] !== c.onQueryChange ||
        O[42] !== c.query ||
        O[43] !== c.selected ||
        O[44] !== W ||
        O[45] !== N ||
        O[46] !== w ||
        O[47] !== v ||
        O[48] !== x ||
        O[49] !== b
          ? ((k = (0, a.jsx)(p.B, {
              accountId: c.accountId,
              getTeamRecipient: i,
              getGroupRecipient: t,
              ariaDescribedBy: F,
              disabled: D,
              placeholder: v,
              selectedOptions: c.selected,
              getRemoveLabel: G,
              options: x,
              onChange: c.onChange,
              query: c.query,
              onQueryChange: c.onQueryChange,
              isLoading: R,
              searchFailed: N,
              loadingLabel: b,
              emptyMessage: w,
              trailingContent: W,
            })),
            (O[33] = F),
            (O[34] = D),
            (O[35] = t),
            (O[36] = G),
            (O[37] = i),
            (O[38] = R),
            (O[39] = c.accountId),
            (O[40] = c.onChange),
            (O[41] = c.onQueryChange),
            (O[42] = c.query),
            (O[43] = c.selected),
            (O[44] = W),
            (O[45] = N),
            (O[46] = w),
            (O[47] = v),
            (O[48] = x),
            (O[49] = b),
            (O[50] = k))
          : (k = O[50]),
        O[51] !== T || O[52] !== P
          ? ((I =
              null == T
                ? null
                : (0, a.jsx)("p", { id: P, className: "text-sm text-danger", role: "alert", children: T })),
            (O[51] = T),
            (O[52] = P),
            (O[53] = I))
          : (I = O[53]),
        O[54] !== c.canSearchMembers || O[55] !== c.isWorkspace
          ? ((q =
              c.isWorkspace && !c.canSearchMembers
                ? (0, a.jsx)("p", {
                    className: "text-sm text-codex-description",
                    children: (0, a.jsx)(o.A, {
                      id: "librarySharing.invite.searchRestricted",
                      defaultMessage: "Your workspace doesn't allow searching for members",
                    }),
                  })
                : null),
            (O[54] = c.canSearchMembers),
            (O[55] = c.isWorkspace),
            (O[56] = q))
          : (q = O[56]),
        O[57] !== k || O[58] !== I || O[59] !== q
          ? ((E = (0, a.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col gap-2", children: [k, I, q] })),
            (O[57] = k),
            (O[58] = I),
            (O[59] = q),
            (O[60] = E))
          : (E = O[60]),
        E
      )
    }
    function j(e) {
      return {
        ...e,
        Icon: "principal" === e.recipient.recipient_type && "group" === e.recipient.principal_type ? c.oJq : void 0,
      }
    }
    function S(e) {
      return { value: e }
    }
    function A(e) {
      return (0, a.jsx)(m.u, { permission: e })
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
      s = a.Rpp()
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
    i.d(t, { k: () => p })
    var a = i("ABep"),
      r = i("DBCl"),
      n = i("amW0"),
      s = i("jTFC"),
      l = i("q3j5"),
      o = i("QosV"),
      c = i("qmMi"),
      d = i("oz6U")
    function u(e) {
      let t,
        i,
        r = (0, o.c)(8),
        { className: n, conversationId: l, profile: u } = e,
        p = (0, c._U)(d.Hx, l),
        m = p?.avatar ?? null
      return (
        r[0] !== n || r[1] !== u
          ? ((t = (0, a.jsx)(s.qv, { className: n, profile: u })), (r[0] = n), (r[1] = u), (r[2] = t))
          : (t = r[2]),
        r[3] !== n || r[4] !== l || r[5] !== m || r[6] !== t
          ? ((i = (0, a.jsx)(s.Xm, { className: n, avatar: m, identity: l, animated: !1, loadingFallback: t })),
            (r[3] = n),
            (r[4] = l),
            (r[5] = m),
            (r[6] = t),
            (r[7] = i))
          : (i = r[7]),
        i
      )
    }
    function p(e, t, i) {
      let o,
        c = "shared" === e.scope || null == e.active_root_thread_id ? null : (0, r.JXB)(e.active_root_thread_id)
      return (
        (o = e.is_workspace_admin_dot
          ? (0, a.jsx)(s.Xm, { className: i, avatar: "bow-tie", useSavedAvatar: !1, animated: !1 })
          : null == c
            ? (0, a.jsx)(s.QR, { className: i, profile: e })
            : (0, a.jsx)(u, { className: i, conversationId: c, profile: e })),
        { conversationId: c, title: (0, l.x)(e.display_name) ? t.formatMessage(n.z) : e.display_name, icon: o }
      )
    }
  },
  btiy(e, t, i) {
    var a = i("qmMi"),
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
      l = i("qmMi"),
      o = i("DBCl"),
      c = i("zd8w"),
      d = i("oyxz"),
      u = i("eKNk"),
      p = i("SPnB"),
      m = i("eFn4"),
      h = i("Kwur"),
      g = i("OAko"),
      f = i("LhhH"),
      _ = i("TjgH"),
      y = i("MM0V"),
      v = i("mUDD"),
      x = i("SGsN"),
      b = i("z0yV"),
      w = i("EqWS"),
      k = i("tv8P"),
      j = i("OWtl"),
      S = i("wuZu"),
      A = i("IZAr"),
      M = i("jnsB"),
      C = i("glqn"),
      I = i("CFGX"),
      q = i("LKbA"),
      E = i("rvFo"),
      O = i("eShZ"),
      L = i("hwkA"),
      N = i("cfLx"),
      R = i("LxX1"),
      $ = i("FwqS")
    function P(e) {
      let t,
        i,
        n,
        s,
        o,
        c,
        u,
        p,
        m,
        h,
        g = (0, r.c)(37),
        {
          target: f,
          pageId: _,
          requestFor: y,
          onClose: v,
          onRequestClose: x,
          onSubmit: b,
          isPending: w,
          isQueued: j,
          linkButton: S,
          children: A,
        } = e,
        M = void 0 !== w && w,
        C = void 0 !== j && j,
        I = (0, l._U)(k.loadedSpacePageMetadata$, "self" === y ? _ : null)
      g[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, a.jsx)(d.A, { id: "codex.pages.requestShare.send", defaultMessage: "Send request" })), (g[0] = t))
        : (t = g[0])
      let q = t
      if ("self" === y) {
        let e
        ;(g[1] !== M || g[2] !== C
          ? ((e =
              C || M
                ? (0, a.jsx)(d.A, { id: "codex.pages.requestAccess.sending", defaultMessage: "Sending\u2026" })
                : (0, a.jsx)(d.A, { id: "codex.pages.requestAccess.send", defaultMessage: "Send" })),
            (g[1] = M),
            (g[2] = C),
            (g[3] = e))
          : (e = g[3]),
          (q = e))
      }
      ;(g[4] !== y || g[5] !== f.id || g[6] !== f.kind
        ? ((i =
            "self" === y
              ? (0, a.jsx)(d.A, { id: "codex.pages.requestAccess.title", defaultMessage: "Request access" })
              : (0, a.jsx)(R.r, { kind: f.kind, id: f.id, action: "ask" })),
          (g[4] = y),
          (g[5] = f.id),
          (g[6] = f.kind),
          (g[7] = i))
        : (i = g[7]),
        g[8] !== I?.document_type || g[9] !== _ || g[10] !== y || g[11] !== f.kind
          ? ((n =
              "self" === y
                ? (0, a.jsx)(d.A, {
                    id: "codex.pages.requestAccess.descriptionByKind.byDocumentType",
                    defaultMessage:
                      "{kind, select, space {Your request will be sent to the space owner} other {{documentType, select, granola_presentation {Your request will be sent to the slide owner} granola_workbook {Your request will be sent to the sheet owner} other {Your request will be sent to the page owner}}}}",
                    values: { documentType: I?.document_type ?? "page", kind: f.kind },
                  })
                : (0, a.jsx)(N.Z, { kind: f.kind, pageId: _ })),
            (g[8] = I?.document_type),
            (g[9] = _),
            (g[10] = y),
            (g[11] = f.kind),
            (g[12] = n))
          : (n = g[12]),
        g[13] !== b ? ((s = () => b?.()), (g[13] = b), (g[14] = s)) : (s = g[14]),
        g[15] !== S
          ? ((o = (0, a.jsx)("div", { className: "me-auto", children: S })), (g[15] = S), (g[16] = o))
          : (o = g[16]),
        g[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)(d.A, { id: "shareDialog.primaryAction.cancel", defaultMessage: "Cancel" })), (g[17] = c))
          : (c = g[17]),
        g[18] !== M || g[19] !== v
          ? ((u = (0, a.jsx)(L.$, {
              color: "secondary",
              variant: "outline",
              size: "xl",
              type: "button",
              disabled: M,
              onClick: v,
              children: c,
            })),
            (g[18] = M),
            (g[19] = v),
            (g[20] = u))
          : (u = g[20]))
      let E = null == b || M || C,
        O = M && "self" !== y
      return (
        g[21] !== q || g[22] !== E || g[23] !== O
          ? ((p = (0, a.jsx)(L.$, {
              color: "primary",
              disabledTone: "dimmed",
              size: "xl",
              type: "submit",
              disabled: E,
              loading: O,
              children: q,
            })),
            (g[21] = q),
            (g[22] = E),
            (g[23] = O),
            (g[24] = p))
          : (p = g[24]),
        g[25] !== p || g[26] !== o || g[27] !== u
          ? ((m = (0, a.jsxs)(a.Fragment, { children: [o, u, p] })), (g[25] = p), (g[26] = o), (g[27] = u), (g[28] = m))
          : (m = g[28]),
        g[29] !== A || g[30] !== M || g[31] !== x || g[32] !== m || g[33] !== i || g[34] !== n || g[35] !== s
          ? ((h = (0, a.jsx)($.$t, {
              title: i,
              subtitle: n,
              isDismissalDisabled: M,
              onRequestClose: x,
              onSubmit: s,
              footer: m,
              children: A,
            })),
            (g[29] = A),
            (g[30] = M),
            (g[31] = x),
            (g[32] = m),
            (g[33] = i),
            (g[34] = n),
            (g[35] = s),
            (g[36] = h))
          : (h = g[36]),
        h
      )
    }
    var U = i("Zgpy")
    function D(e) {
      let t,
        i = (0, r.c)(3),
        n = (0, l.Ul)(k.spaceAccountId$),
        s = (0, l.Ul)(p.chatGptAuthenticatedUserId$),
        o = `${n}:${s}:${e.target.kind}:${e.target.id}:${e.pageId}:${e.requestFor}`
      return (
        i[0] !== e || i[1] !== o ? ((t = (0, a.jsx)(T, { ...e }, o)), (i[0] = e), (i[1] = o), (i[2] = t)) : (t = i[2]),
        t
      )
    }
    function T(e) {
      let t,
        i,
        L,
        N,
        R,
        $,
        D,
        T,
        ei,
        ea,
        er,
        en,
        es,
        el,
        eo,
        ec,
        ed,
        eu,
        ep,
        em,
        eh,
        eg,
        ef,
        e_,
        ey,
        ev = (0, r.c)(89),
        { target: ex, pageId: eb, requestFor: ew, rosterLoaded: ek, copyLinkSpaceId: ej, others: eS, onClose: eA } = e,
        eM = (0, l.gh)(j.u),
        eC = (0, l.Ul)(k.spaceAccountId$),
        eI = (0, l.Ul)(p.chatGptAuthenticatedUserId$),
        eq = (0, l.Ul)(U.dt),
        { data: eE, isError: eO, refetch: eL } = (0, g.oV)(),
        eN = eE?.accounts?.find((e) => e.id === eC),
        eR = eq && "others" === ew && eN?.structure === "workspace"
      ev[0] !== eR ? ((t = { enabled: eR }), (ev[0] = eR), (ev[1] = t)) : (t = ev[1])
      let { data: e$, isError: eP, refetch: eU } = (0, l._U)(m.Jk, eC ?? "", t),
        eD = null == eN ? void 0 : (0, I.V)(eN, e$, eP),
        eT = eq && !eO && null != eC && null != eI && ("self" === ew ? (0, U.BI)(eN) : eN?.structure === "workspace"),
        eF = eT && "others" === ew && null != eS && null != e$ && !eP && eD?.canSearchMembers === !0
      ev[2] === Symbol.for("react.memo_cache_sentinel") ? ((i = new AbortController()), (ev[2] = i)) : (i = ev[2])
      let eW = (0, c.useRef)(i)
      ;(ev[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = () => {
            let e = new AbortController()
            return ((eW.current = e), () => e.abort())
          }),
          (N = []),
          (ev[3] = L),
          (ev[4] = N))
        : ((L = ev[3]), (N = ev[4])),
        (0, c.useLayoutEffect)(L, N))
      let [ez, eG] = (0, c.useState)("viewer"),
        eQ = (0, l._U)(k.loadedSpacePageMetadata$, "self" === ew ? eb : null)?.access,
        eK = []
      eQ?.can_read &&
        !1 === eQ.can_write &&
        !1 === eQ.can_share &&
        (!1 === eQ.can_comment && eK.push("commenter"), eK.push("editor"))
      let [eB, eY] = (0, c.useState)("self" === ew ? "editor" : void 0),
        [eH, eV] = (0, c.useState)(),
        [eZ, eX] = (0, c.useState)(!1),
        eJ = (0, c.useRef)(null)
      ev[5] === Symbol.for("react.memo_cache_sentinel") ? ((R = []), (ev[5] = R)) : (R = ev[5])
      let [e0, e1] = (0, c.useState)(R),
        [e2, e3] = (0, c.useState)("")
      ev[6] !== eC || ev[7] !== ex.id || ev[8] !== ex.kind || ev[9] !== eI
        ? (($ = ["space", "submitted-access", eI, eC, ex.kind, ex.id]),
          (ev[6] = eC),
          (ev[7] = ex.id),
          (ev[8] = ex.kind),
          (ev[9] = eI),
          (ev[10] = $))
        : ($ = ev[10])
      let e4 = $
      ev[11] !== e4 || ev[12] !== eM
        ? ((D = () => (eM.queryClient.getQueryData(e4) ?? []).filter(X)), (ev[11] = e4), (ev[12] = eM), (ev[13] = D))
        : (D = ev[13])
      let { data: e5 } = (0, n.I)({
        queryKey: e4,
        enabled: eT,
        networkMode: "always",
        staleTime: 0,
        gcTime: E.D.ONE_MINUTE,
        refetchOnMount: "always",
        queryFn: D,
        refetchInterval: Z,
      })
      ev[14] !== e5 ? ((T = void 0 === e5 ? [] : e5), (ev[14] = e5), (ev[15] = T)) : (T = ev[15])
      let e6 = T
      ev[16] !== eC || ev[17] !== ex.id || ev[18] !== ex.kind || ev[19] !== eI
        ? ((ei = ["space", "requested-access", eI, eC, ex.kind, ex.id]),
          (ev[16] = eC),
          (ev[17] = ex.id),
          (ev[18] = ex.kind),
          (ev[19] = eI),
          (ev[20] = ei))
        : (ei = ev[20])
      let e7 = ei
      ev[21] !== eC || ev[22] !== ew || ev[23] !== eM || ev[24] !== eI
        ? ((ea = function () {
            let e = eM.queryClient.getQueryState(["accounts", "check"]),
              t = e?.data?.accounts?.find((e) => e.id === eC)
            return (
              e?.status === "success" &&
              null != eC &&
              null != eI &&
              eM.get(k.spaceAccountId$) === eC &&
              eM.get(p.chatGptAuthenticatedUserId$) === eI &&
              eM.get(U.dt) &&
              ("self" === ew ? (0, U.BI)(t) : t?.structure === "workspace")
            )
          }),
          (ev[21] = eC),
          (ev[22] = ew),
          (ev[23] = eM),
          (ev[24] = eI),
          (ev[25] = ea))
        : (ea = ev[25])
      let e8 = ea
      ev[26] !== eC ||
      ev[27] !== e8 ||
      ev[28] !== eb ||
      ev[29] !== e4 ||
      ev[30] !== eM ||
      ev[31] !== ex ||
      ev[32] !== eI
        ? ((er = async (e) => {
            let { signal: t } = e
            if (null == eC || null == eI || !e8()) throw Error("pages_disabled")
            let i = (0, k.watchSpaceAccount)(eM, eC, eI),
              a = AbortSignal.any([t, eW.current.signal, i.signal])
            return (async function (e, t) {
              let i,
                a = [],
                r = new Set()
              for (let n = 0; n < 20; n += 1) {
                t.throwIfAborted()
                let n = await (0, o._qC)(
                  "page" === e.kind
                    ? h.Request.safeGet("/pages/{page_id}/access-requests/requested", {
                        parameters: { path: { page_id: e.id }, query: { cursor: i, limit: 100 } },
                        signal: t,
                      })
                    : h.Request.safeGet("/spaces/v2/{space_id}/access-requests/requested", {
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
            })(ex, a)
              .then(async (e) => {
                a.throwIfAborted()
                let t = eM.get(k.loadedSpacePageMetadata$, eb)?.access,
                  i = "viewer"
                if (
                  (t?.can_write ? (i = "editor") : t?.can_comment && (i = "commenter"),
                  null != e.current_role && null != t && e.current_role !== i)
                ) {
                  let [e] = await (0, o._qC)(
                    Promise.allSettled([
                      eM.get(k.spacePageQuery$, eb).refetch({ throwOnError: !0 }),
                      "space" === ex.kind ? eM.get(b.s, ex.id).refetch({ throwOnError: !0 }) : void 0,
                    ]),
                    a,
                  )
                  if ((a.throwIfAborted(), "fulfilled" === e.status && null != e.value.data)) {
                    let t = e.value.data.metadata
                    ;(0, w.oC)(eM, eC, (e) => (e.page_id === eb ? { ...e, access: t.access } : e), void 0)
                  }
                }
                let r = new Set(e.requests.flatMap(V))
                return (
                  eM.queryClient.setQueryData(e4, (e) =>
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
                    e instanceof O.FetchError &&
                    [401, 403, 404, 410].includes(e.status) &&
                    eM.queryClient.setQueryData(e4, []),
                  e
                )
              })
              .finally(i.stop)
          }),
          (ev[26] = eC),
          (ev[27] = e8),
          (ev[28] = eb),
          (ev[29] = e4),
          (ev[30] = eM),
          (ev[31] = ex),
          (ev[32] = eI),
          (ev[33] = er))
        : (er = ev[33])
      let {
          data: e9,
          isFetching: te,
          isError: tt,
          isFetchedAfterMount: ti,
          refetch: ta,
        } = (0, n.I)({
          queryKey: e7,
          enabled: eT,
          staleTime: 0,
          gcTime: 0,
          retry: !1,
          refetchOnMount: "always",
          refetchOnWindowFocus: "always",
          queryFn: er,
        }),
        tr = eT && ti && !tt ? e9 : void 0,
        tn = tr?.requestable_roles?.filter(H)
      ev[34] !== tr?.requests ? ((en = tr?.requests ?? []), (ev[34] = tr?.requests), (ev[35] = en)) : (en = ev[35])
      let ts = [...en, ...e6],
        tl = null != eB && null != tr ? J(tr, ts, eB) : void 0,
        to =
          ("pending" === eH ? tl?.status : eH) ??
          (null != eB && null != tn && tn.length > 0 && !tn.includes(eB) ? "unavailable" : void 0),
        tc = null != eB && null != tr && tl?.blocker == null,
        td = new Set(
          ts
            .filter((e) => (e.requested_role ?? "viewer") === ez)
            .flatMap(Y)
            .map(B),
        ),
        tu = Math.max(0, 100 - td.size - (eB === ez && tc ? 1 : 0))
      ev[36] !== tr
        ? ((es = (null == tr ? [] : [tr.owner, tr.requester]).map(K)), (ev[36] = tr), (ev[37] = es))
        : (es = ev[37])
      let tp = new Set([...td, ...es]),
        tm = e0.flatMap((e) => {
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
            if ((null == eN && (await (0, o._qC)(eL({ cancelRefetch: !1 }), t)), t.aborted || !e8())) return !1
            let r = eM.queryClient.getQueryCache().find({ queryKey: e7, exact: !0 })
            if (null == r || "error" === r.state.status) return !1
            let n = r.state.data
            if (null == tr || "idle" !== r.state.fetchStatus) {
              let e
              ;(null != r.promise && (eT || "idle" !== r.state.fetchStatus)) || ta({ cancelRefetch: !1 })
              do {
                if (null == (e = r.promise) || t.aborted) return !1
                n = await (0, o._qC)(e, t).catch(Q)
              } while (r.promise !== e)
            }
            if (null == n || t.aborted || !e8()) return !1
            let s = eM.queryClient.getQueryData(e4) ?? [],
              { blocker: l } = J(n, [...n.requests, ...s], e)
            if (null != l) return (eV(l), !1)
            ;((a = n.requester),
              (eJ.current = "submitting"),
              eX(!1),
              (i = await (async function (e, t, i, a) {
                a.throwIfAborted()
                let r = (0, u.l)(
                  e,
                  "access_request_command",
                  { resource_kind: t.kind, decision: "request_self", completion_mode: "submitted" },
                  a,
                )
                try {
                  let e = await (0, o._qC)(
                    "page" === t.kind
                      ? h.Request.safePost("/pages/{page_id}/access-requests/for-self", {
                          parameters: { path: { page_id: t.id } },
                          requestBody: i,
                          signal: a,
                        })
                      : h.Request.safePost("/spaces/v2/{space_id}/access-requests/for-self", {
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
              })(eM, ex, { role: e }, t)))
          } else {
            if (!eF || !e8() || null == tr || 0 === e0.length || e0.length !== tm.length || tm.length > tu)
              throw Error("access_request_not_permitted")
            i = await (async function (e, t, i, a) {
              a.throwIfAborted()
              let r = (0, u.l)(
                e,
                "access_request_command",
                { resource_kind: t.kind, decision: "request_others", completion_mode: "submitted" },
                a,
              )
              try {
                let e = await (0, o._qC)(
                  "page" === t.kind
                    ? h.Request.safePost("/pages/{page_id}/access-requests/for-others", {
                        parameters: { path: { page_id: t.id } },
                        requestBody: i,
                        signal: a,
                      })
                    : h.Request.safePost("/spaces/v2/{space_id}/access-requests/for-others", {
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
            })(eM, ex, { recipients: tm, role: ez }, t)
          }
          if (
            (t.throwIfAborted(),
            eM.get(k.spaceAccountId$) !== eC || eM.get(p.chatGptAuthenticatedUserId$) !== eI || !eM.get(U.dt))
          )
            throw Error("pages_disabled")
          null != e ? eY(void 0) : (e1([]), e3(""))
          let r = Date.now() + E.D.ONE_MINUTE
          eM.queryClient.setQueryData(e4, (e) => [...(void 0 === e ? [] : e), { ...i, expiresAt: r }])
          let n = (0, u.l)(
            eM,
            "access_request_refresh",
            { resource_kind: ex.kind, decision: "request", completion_mode: "submitted" },
            eW.current.signal,
          )
          ta().then(
            (e) => n(e.isError ? "failure" : "success"),
            () => n("failure"),
          )
          let s = i.recipients?.find((e) => {
            let { principal: t } = e
            return null != a && t.principal_type === a.principal_type && t.principal_id === a.principal_id
          })
          return null == s || "pending" === s.status || (eV(s.status), !1)
        }
      ;(ev[38] !== eC || ev[39] !== eM || ev[40] !== th || ev[41] !== eI
        ? ((el = async (e) => {
            if (null == eC || null == eI) throw Error("access_request_not_permitted")
            let t = (0, k.watchSpaceAccount)(eM, eC, eI),
              i = AbortSignal.any([eW.current.signal, t.signal, ...(null == e ? [] : [e.signal])])
            return th(e?.role, i)
              .catch((e) => {
                if (i.aborted) return !1
                throw e
              })
              .finally(t.stop)
          }),
          (ev[38] = eC),
          (ev[39] = eM),
          (ev[40] = th),
          (ev[41] = eI),
          (ev[42] = el))
        : (el = ev[42]),
        ev[43] === Symbol.for("react.memo_cache_sentinel")
          ? ((eo = (e, t, i) => {
              null != i && ((eJ.current = null), eX(!1))
            }),
            (ev[43] = eo))
          : (eo = ev[43]),
        ev[44] !== eC || ev[45] !== ew || ev[46] !== eM || ev[47] !== eI
          ? ((ec = (e) => {
              e &&
                !eW.current.signal.aborted &&
                eM.get(k.spaceAccountId$) === eC &&
                eM.get(p.chatGptAuthenticatedUserId$) === eI &&
                eM.get(U.dt) &&
                eM
                  .get(x.Id)
                  .success(
                    "self" === ew
                      ? (0, a.jsx)(d.A, { id: "codex.pages.requestAccess.pending", defaultMessage: "Request pending" })
                      : (0, a.jsx)(d.A, { id: "codex.pages.requestShare.sent", defaultMessage: "Request submitted" }),
                  )
            }),
            (ev[44] = eC),
            (ev[45] = ew),
            (ev[46] = eM),
            (ev[47] = eI),
            (ev[48] = ec))
          : (ec = ev[48]),
        ev[49] !== el || ev[50] !== ec
          ? ((ed = { retry: !1, networkMode: "always", mutationFn: el, onSettled: eo, onSuccess: ec }),
            (ev[49] = el),
            (ev[50] = ec),
            (ev[51] = ed))
          : (ed = ev[51]))
      let { mutate: tg, isPending: tf, isError: t_ } = (0, s.n)(ed),
        ty = !eT || null == tr || te || tf,
        tv =
          !ty &&
          (null != eB || e0.length > 0) &&
          (null == eB || tc) &&
          (0 === e0.length || (eF && e0.length <= tu && tm.length === e0.length)),
        tx = !tt && !eO && (te || null == eN),
        tb = "self" === ew && null != eB && !tf && (null != tr ? tc : eq && tx && eK.includes(eB))
      ev[52] === Symbol.for("react.memo_cache_sentinel")
        ? ((eu = function () {
            return "submitting" === eJ.current ? "deny" : (eJ.current?.abort(), "allow")
          }),
          (ev[52] = eu))
        : (eu = ev[52])
      let tw = eu
      if ("self" === ew) {
        if (tb && null != eB) {
          let e
          ;(ev[53] !== tg || ev[54] !== eB
            ? ((e = () => {
                if (null != eJ.current) return
                let e = new AbortController()
                ;((eJ.current = e),
                  eV(void 0),
                  eX(!0),
                  tg({ role: eB, signal: AbortSignal.any([e.signal, eW.current.signal]) }))
              }),
              (ev[53] = tg),
              (ev[54] = eB),
              (ev[55] = e))
            : (e = ev[55]),
            (ep = e))
        }
      } else if (tv) {
        let e
        ;(ev[56] !== tg ? ((e = () => tg(void 0)), (ev[56] = tg), (ev[57] = e)) : (e = ev[57]), (ep = e))
      }
      let tk = new Map()
      for (let e of ts)
        for (let t of e.recipients ?? []) {
          let i = et(e, t)
          ;(tk.get(i)?.recipient.status !== "pending" && tk.has(i)) || tk.set(i, { request: e, recipient: t })
        }
      let tj = [...tk].filter(G)
      ev[58] !== eA || ev[59] !== tw
        ? ((em = () => {
            "allow" === tw() && eA()
          }),
          (ev[58] = eA),
          (ev[59] = tw),
          (ev[60] = em))
        : (em = ev[60])
      let tS = tf && !eZ
      ev[61] !== ej || ev[62] !== tf || ev[63] !== eS || ev[64] !== eb
        ? ((eh = null != eS && (0, a.jsx)(eS.LinkButton, { pageId: eb, spaceId: ej, disabled: tf })),
          (ev[61] = ej),
          (ev[62] = tf),
          (ev[63] = eS),
          (ev[64] = eb),
          (ev[65] = eh))
        : (eh = ev[65])
      let tA =
        "self" === ew &&
        (null == tr ? tx : null != tn && null != tr.current_role) &&
        (0, a.jsx)(a.Fragment, {
          children:
            tn?.length === 0 && tr?.current_role != null
              ? (0, a.jsx)(q.u, { permission: tr.current_role })
              : (0, a.jsx)(C.e, {
                  variant: "field",
                  value: eB ?? "editor",
                  disabled: tf || eZ || 0 === (tn ?? eK).length,
                  options: (tn ?? eK).map((e) => {
                    let t = null == tr ? void 0 : J(tr, ts, e)
                    return {
                      value: e,
                      disabled: t?.blocker != null,
                      tooltipText: t?.full ? (0, a.jsx)(ee, { notice: "full" }) : void 0,
                    }
                  }),
                  renderLabel: z,
                  onChange: (e) => {
                    ;(eV(void 0), eY(e))
                  },
                }),
        })
      ev[66] !== to
        ? ((eg =
            null != to &&
            (0, a.jsx)(y.l, { type: "warning", role: "status", content: (0, a.jsx)(ee, { notice: to }) })),
          (ev[66] = to),
          (ev[67] = eg))
        : (eg = ev[67])
      let tM =
        null == tr || null == eC
          ? ("self" !== ew || !tx) &&
            (0, a.jsx)(M.DN, {
              isLoading: tx,
              onRetry: () => {
                ;(eL(), eU(), eT && ta())
              },
            })
          : (0, a.jsxs)(a.Fragment, {
              children: [
                "others" === ew &&
                  (0, a.jsx)(y.l, {
                    variant: "privacyNotice",
                    title: (0, a.jsx)(d.A, {
                      id: "codex.pages.requestShare.approvalRequired",
                      defaultMessage: "Owner must approve access first",
                    }),
                    content: (0, a.jsx)(d.A, {
                      id: "codex.pages.requestShare.accessManagedDescription",
                      defaultMessage: "You can\u2019t manage access",
                    }),
                  }),
                eF &&
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(eS.RecipientPicker, {
                        accountId: eC,
                        currentPrincipalId: tr.requester.principal_id,
                        currentEmail: void 0,
                        isWorkspace: !0,
                        canSearchMembers: eD?.canSearchMembers === !0,
                        allowGroups: eD?.allowGroups === !0,
                        disabled: ty,
                        existingPrincipalKeys: tp,
                        existingEmails: new Set(),
                        query: e2,
                        onQueryChange: e3,
                        selected: e0,
                        onChange: (e) => {
                          ;(e1(e), "commenter" === ez && e.some(W) && eG("viewer"))
                        },
                        role: ez,
                        allowedRoles: e0.some(F) ? ["viewer", "editor"] : ["viewer", "commenter", "editor"],
                        onRoleChange: eG,
                      }),
                      (0 === tu || e0.length > tu) &&
                        (0, a.jsx)(y.l, {
                          type: "warning",
                          role: "status",
                          content: (0, a.jsx)(d.A, {
                            id: "codex.pages.requestShare.capacity",
                            defaultMessage:
                              "You can request each role for up to 100 people or groups; {remaining, plural, =0 {you\u2019ve reached this role\u2019s limit} one {select at most # more recipient} other {select at most # more recipients}}",
                            values: { remaining: tu },
                          }),
                        }),
                    ],
                  }),
                "others" === ew && (eP || null == e$) && (0, a.jsx)(M.DN, { isLoading: !eP, onRetry: () => void eU() }),
                t_ &&
                  (0, a.jsx)(y.l, {
                    type: "error",
                    role: "alert",
                    content: (0, a.jsx)(d.A, {
                      id: "codex.pages.requestShare.failed",
                      defaultMessage: "Couldn\u2019t send the access request. Try again",
                    }),
                  }),
              ],
            })
      ev[68] !== tA || ev[69] !== eg || ev[70] !== tM
        ? ((ef = (0, a.jsxs)(v.OO, { className: "gap-4", children: [tA, eg, tM] })),
          (ev[68] = tA),
          (ev[69] = eg),
          (ev[70] = tM),
          (ev[71] = ef))
        : (ef = ev[71])
      let tC =
        null != eS && (0, a.jsx)(eS.Access, { rosterLoaded: ek, target: ex, workspaceName: eN?.name?.trim() || void 0 })
      return (
        ev[72] !== tr || ev[73] !== tj
          ? ((e_ =
              null != tr &&
              tj.length > 0 &&
              (0, a.jsx)(A.p, {
                title: (0, a.jsx)(d.A, {
                  id: "codex.pages.requestShare.requestsHeading",
                  defaultMessage: "Your requests",
                }),
                children: tj.map((e) => {
                  let [t, i] = e,
                    { request: r, recipient: n } = i
                  return (0, a.jsx)(
                    S.h,
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
                          n.principal.principal_id === tr.requester.principal_id &&
                          n.principal.principal_type === tr.requester.principal_type
                            ? (0, a.jsx)(d.A, { id: "codex.pages.requestShare.you", defaultMessage: "You" })
                            : (n.name ??
                              n.email ??
                              (0, a.jsx)(d.A, {
                                id: "codex.pages.requestShare.person",
                                defaultMessage: "Requested person",
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
            (ev[72] = tr),
            (ev[73] = tj),
            (ev[74] = e_))
          : (e_ = ev[74]),
        ev[75] !== P ||
        ev[76] !== eZ ||
        ev[77] !== ep ||
        ev[78] !== eb ||
        ev[79] !== tw ||
        ev[80] !== ew ||
        ev[81] !== em ||
        ev[82] !== tS ||
        ev[83] !== eh ||
        ev[84] !== ef ||
        ev[85] !== tC ||
        ev[86] !== e_ ||
        ev[87] !== ex
          ? ((ey = (0, a.jsxs)(P, {
              target: ex,
              pageId: eb,
              requestFor: ew,
              onClose: em,
              onRequestClose: tw,
              onSubmit: ep,
              isQueued: eZ,
              isPending: tS,
              linkButton: eh,
              children: [ef, tC, e_],
            })),
            (ev[75] = P),
            (ev[76] = eZ),
            (ev[77] = ep),
            (ev[78] = eb),
            (ev[79] = tw),
            (ev[80] = ew),
            (ev[81] = em),
            (ev[82] = tS),
            (ev[83] = eh),
            (ev[84] = ef),
            (ev[85] = tC),
            (ev[86] = e_),
            (ev[87] = ex),
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
    function Q() {}
    function K(e) {
      return `${e.principal_type}:${e.principal_id}`
    }
    function B(e) {
      let { principal: t } = e
      return `${t.principal_type}:${t.principal_id}`
    }
    function Y(e) {
      return e.recipients ?? []
    }
    function H(e) {
      return "commenter" === e || "editor" === e
    }
    function V(e) {
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
  RH0H(e, t, i) {
    i.d(t, { k: () => e3 })
    var a = i("ABep"),
      r = i("QosV"),
      n = i("hwkA"),
      s = i("T0Rc"),
      l = i("HY2m"),
      o = i("xSOA"),
      c = i("cE8H"),
      d = i("KUdL"),
      u = i.n(d),
      p = i("i5ac"),
      m = i.n(p),
      h = i("qmMi"),
      g = i("zd8w"),
      f = i("oyxz"),
      _ = i("Wf1j"),
      y = i("Qgfj"),
      v = i("Ywss"),
      x = i("XQrv"),
      b = i("PFjh"),
      w = i("SPnB"),
      k = i("AOHi"),
      j = i("Kwur"),
      S = i("OAko"),
      A = i("MM0V"),
      M = i("mUDD"),
      C = i("SGsN"),
      I = i("heYt"),
      q = i("nqea"),
      E = i("McR2"),
      O = i("imTH"),
      L = i("btiy"),
      N = i("DBCl"),
      R = i("rpnz"),
      $ = i("e1xH"),
      P = i("tv8P"),
      U = i("OWtl")
    let D = (0, h.vU)(U.u, (e, { get: t, scope: i }) => {
      let a = t(P.spaceAccountId$),
        r = t(w.chatGptAuthenticatedUserId$)
      return {
        enabled: t($.pagesEnabled$) && ("page" !== e.kind || !(0, R.sD)(e.id)) && null != a && null != r,
        queryKey: ["space", "library-shares", r, a, { type: e.kind, id: e.id, readOnly: !0 }],
        gcTime: 0,
        staleTime: 0,
        retry: !1,
        queryFn: async ({ signal: t }) => {
          if (
            ("page" === e.kind && (0, P.assertServerSpacePageId)(e.id),
            null == a || null == r || !i.get($.pagesEnabled$))
          )
            throw Error("pages_disabled")
          let n = (0, P.watchSpaceAccount)(i, a, r),
            s = AbortSignal.any([t, n.signal])
          try {
            let t,
              i,
              a = new Map(),
              r = new Set()
            for (let n = 0; n < 20; n += 1) {
              s.throwIfAborted()
              let n = await (0, N._qC)(
                "page" === e.kind
                  ? j.Request.safeGet("/pages/{page_id}/shares", {
                      parameters: {
                        path: { page_id: e.id },
                        query: { read_only: !0, cursor: t, limit: 100, include_inherited_access: null == t || void 0 },
                      },
                      signal: s,
                    })
                  : j.Request.safeGet("/spaces/v2/{space_id}/shares", {
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
    var T = i("aRS8"),
      F = i("bVeK"),
      W = i("akkX"),
      z = i("M14h")
    function G(e) {
      let t,
        i,
        s,
        l,
        o = (0, r.c)(12),
        { disabled: c, pageId: d, spaceId: u } = e,
        p = (0, h.gh)(U.u),
        m = (0, h._U)(z.Xw, d),
        [_, y] = (0, g.useState)(!1),
        v = c || null == d
      return (
        o[0] !== _ || o[1] !== m || o[2] !== d || o[3] !== p || o[4] !== u
          ? ((t = () => {
              let e = p.get(w.chatGptAuthenticatedAccountId$)
              null != e &&
                null != d &&
                !_ &&
                p.get($.pagesEnabled$) &&
                (y(!0),
                (0, z.LE)(p, m, void 0, { spaceId: u }).then((t) => {
                  ;(y(!1), t && p.get($.pagesEnabled$) && p.get(w.chatGptAuthenticatedAccountId$) === e && (0, W.o)(p))
                }))
            }),
            (o[0] = _),
            (o[1] = m),
            (o[2] = d),
            (o[3] = p),
            (o[4] = u),
            (o[5] = t))
          : (t = o[5]),
        o[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, a.jsx)(F.ibM, {})),
            (s = (0, a.jsx)(f.A, { id: "codex.pages.sharing.copyLink", defaultMessage: "Copy link" })),
            (o[6] = i),
            (o[7] = s))
          : ((i = o[6]), (s = o[7])),
        o[8] !== _ || o[9] !== v || o[10] !== t
          ? ((l = (0, a.jsxs)(n.$, {
              color: "secondary",
              variant: "outline",
              disabled: v,
              loading: _,
              size: "xl",
              type: "button",
              onClick: t,
              children: [i, s],
            })),
            (o[8] = _),
            (o[9] = v),
            (o[10] = t),
            (o[11] = l))
          : (l = o[11]),
        l
      )
    }
    var Q = i("SgPg"),
      K = i("TjgH"),
      B = i("HNZf"),
      Y = i("Erws"),
      H = i("wuZu"),
      V = i("LKbA"),
      Z = i("t6WW")
    function X(e) {
      let t,
        i,
        n,
        s,
        l,
        o = (0, r.c)(20),
        { pageId: c, inheritedAccess: d, loadMissingAppearance: u } = e,
        p = void 0 === u || u,
        { space: g } = (0, h._U)(P.spacePageContext$, c),
        f = d?.complete ? d.sources : void 0
      o[0] !== f || o[1] !== g
        ? ((t =
            g?.backing_type === "drive" &&
            "" !== g.name.trim() &&
            f?.some((e) => e.source?.kind === "space" && e.source.id === g.id)
              ? g
              : null),
          (o[0] = f),
          (o[1] = g),
          (o[2] = t))
        : (t = o[2])
      let _ = t
      o[3] !== f || o[4] !== _?.id
        ? ((i = f?.filter((e) => e.source?.kind === "space" && e.source.id === _?.id)),
          (o[3] = f),
          (o[4] = _?.id),
          (o[5] = i))
        : (i = o[5])
      let y = i
      if (
        (o[6] !== p || o[7] !== _ || o[8] !== y
          ? ((n = null != _ && (0, a.jsx)(ee, { space: _, grants: y?.length ? y : void 0, loadMissingAppearance: p })),
            (o[6] = p),
            (o[7] = _),
            (o[8] = y),
            (o[9] = n))
          : (n = o[9]),
        o[10] !== f || o[11] !== p || o[12] !== _?.id)
      ) {
        let e
        ;(o[14] !== f || o[15] !== p
          ? ((e = (e) =>
              (0, a.jsx)(
                J,
                {
                  spaceId: e.id,
                  loadMissingAppearance: p,
                  grants: f?.filter((t) => t.source?.kind === "space" && t.source.id === e.id),
                },
                e.id,
              )),
            (o[14] = f),
            (o[15] = p),
            (o[16] = e))
          : (e = o[16]),
          (s = m()(
            f?.flatMap((e) => (e.source?.kind === "space" && e.source.id !== _?.id ? [e.source] : [])),
            "id",
          ).map(e)),
          (o[10] = f),
          (o[11] = p),
          (o[12] = _?.id),
          (o[13] = s))
      } else s = o[13]
      return (
        o[17] !== n || o[18] !== s
          ? ((l = (0, a.jsxs)(a.Fragment, { children: [n, s] })), (o[17] = n), (o[18] = s), (o[19] = l))
          : (l = o[19]),
        l
      )
    }
    function J(e) {
      let t,
        i,
        n,
        s,
        l = (0, r.c)(10),
        { spaceId: o, grants: c, loadMissingAppearance: d } = e
      l[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { enabled: !1 }), (l[0] = t)) : (t = l[0])
      let { data: u, error: p } = (0, h._U)(P.spaceQuery$, o, t)
      l[1] === Symbol.for("react.memo_cache_sentinel") ? ((i = { enabled: !1 }), (l[1] = i)) : (i = l[1])
      let { data: m } = (0, h.Ul)(P.spacesQuery$, i)
      if (null != p) return null
      l[2] !== u || l[3] !== o || l[4] !== m
        ? ((n = u ?? m?.items.find((e) => e.id === o)), (l[2] = u), (l[3] = o), (l[4] = m), (l[5] = n))
        : (n = l[5])
      let g = n
      return null == g
        ? null
        : (l[6] !== c || l[7] !== d || l[8] !== g
            ? ((s = (0, a.jsx)(ee, { space: g, grants: c, loadMissingAppearance: d })),
              (l[6] = c),
              (l[7] = d),
              (l[8] = g),
              (l[9] = s))
            : (s = l[9]),
          s)
    }
    function ee(e) {
      let t,
        i,
        n,
        s,
        l,
        o = (0, r.c)(15),
        { space: c, grants: d, loadMissingAppearance: u } = e,
        p = d?.[0]?.role
      return (
        o[0] !== u || o[1] !== c.id
          ? ((t = (0, a.jsx)(Z.O, { spaceId: c.id, variant: "avatar", loadMissingAppearance: u })),
            (o[0] = u),
            (o[1] = c.id),
            (o[2] = t))
          : (t = o[2]),
        o[3] !== c.name
          ? ((i = (0, a.jsx)(f.A, {
              id: "codex.pages.sharing.spacePeople",
              defaultMessage: "People in {spaceName}",
              values: { spaceName: c.name },
            })),
            (o[3] = c.name),
            (o[4] = i))
          : (i = o[4]),
        o[5] !== d
          ? ((n =
              null != d &&
              (0, a.jsx)(f.A, {
                id: "codex.pages.sharing.inheritedSpaceAccess",
                defaultMessage: "Access inherited from this space",
              })),
            (o[5] = d),
            (o[6] = n))
          : (n = o[6]),
        o[7] !== d || o[8] !== p
          ? ((s = (0, a.jsx)("span", {
              className: "pe-2 text-sm text-tertiary",
              children:
                null != p && d?.every((e) => e.role === p)
                  ? (0, a.jsx)(V.u, { permission: p })
                  : (0, a.jsx)(f.A, { id: "codex.space.page.shareDialog.spaceAccess", defaultMessage: "Has access" }),
            })),
            (o[7] = d),
            (o[8] = p),
            (o[9] = s))
          : (s = o[9]),
        o[10] !== t || o[11] !== i || o[12] !== n || o[13] !== s
          ? ((l = (0, a.jsx)(H.h, { avatar: t, label: i, secondaryLabel: n, trailingContent: s })),
            (o[10] = t),
            (o[11] = i),
            (o[12] = n),
            (o[13] = s),
            (o[14] = l))
          : (l = o[14]),
        l
      )
    }
    var et = i("dEsd"),
      ei = i("IZAr"),
      ea = i("jnsB"),
      er = i("KbJc")
    let en = {
      RecipientPicker: T.h,
      LinkButton: G,
      Access: function (e) {
        let t,
          i,
          l,
          o,
          c,
          d,
          u,
          p,
          m,
          g,
          y,
          v,
          x,
          b,
          k,
          j,
          S,
          A,
          C,
          I,
          E,
          O = (0, r.c)(79),
          { target: L, rosterLoaded: N, workspaceName: R } = e,
          P = void 0 !== N && N,
          T = (0, h.gh)(U.u),
          W = (0, _.A)(),
          z = (0, h.Ul)(w.chatGptAuthenticatedUserId$),
          G = (0, h.Ul)($.pagesEnabled$)
        O[0] !== T.query || O[1] !== L
          ? ((t = T.query.getOptions(D, L)), (O[0] = T.query), (O[1] = L), (O[2] = t))
          : (t = O[2])
        let Z = !P && "always"
        O[3] !== t || O[4] !== Z
          ? ((i = { ...t, refetchOnMount: Z, staleTime: 0 }), (O[3] = t), (O[4] = Z), (O[5] = i))
          : (i = O[5])
        let { data: J, isError: ee, isFetching: er, isFetchedAfterMount: en, refetch: es } = (0, s.I)(i, T.queryClient)
        if (!G || null == z) return null
        if (ee || (!P && !en) || null == J) {
          let e,
            t,
            i = !ee && er
          return (
            O[6] !== es ? ((e = () => void es()), (O[6] = es), (O[7] = e)) : (e = O[7]),
            O[8] !== i || O[9] !== e
              ? ((t = (0, a.jsx)(M.OO, { children: (0, a.jsx)(ea.DN, { isLoading: i, onRetry: e }) })),
                (O[8] = i),
                (O[9] = e),
                (O[10] = t))
              : (t = O[10]),
            t
          )
        }
        O[11] !== z ? ((l = z.split("__")), (O[11] = z), (O[12] = l)) : (l = O[12])
        let el = l[0]
        O[13] !== W || O[14] !== J.owner_display_name
          ? ((o =
              J.owner_display_name?.trim() ||
              W.formatMessage({ id: "shareDialog.role.owner", defaultMessage: "Owner" })),
            (O[13] = W),
            (O[14] = J.owner_display_name),
            (O[15] = o))
          : (o = O[15])
        let eo = o
        O[16] !== W
          ? ((c = W.formatMessage({ id: "codex.space.driveSharing.self", defaultMessage: "You" })),
            (O[16] = W),
            (O[17] = c))
          : (c = O[17])
        let ec = c
        ;(J.caller_permissions.includes("library_folder.write")
          ? (d = "editor")
          : J.caller_permissions.includes("library_file.comment")
            ? (d = "commenter")
            : J.caller_permissions.includes("library_folder.read") && (d = "viewer"),
          O[18] !== J ? ((u = (0, Y.Ql)(J)), (O[18] = J), (O[19] = u)) : (u = O[19]))
        let ed = u
        if (
          O[20] !== ed ||
          O[21] !== es ||
          O[22] !== J.inherited_access ||
          O[23] !== J.inherited_workspace_link_access?.complete ||
          O[24] !== J.shares ||
          O[25] !== J.workspace_id ||
          O[26] !== R
        ) {
          let e, t
          O[31] !== ed || O[32] !== J.shares || O[33] !== J.workspace_id
            ? ((e = (e) =>
                e === ed ||
                J.shares.some(
                  (t) =>
                    "active" === t.status &&
                    "principal" === t.recipient.recipient_type &&
                    "workspace" === t.recipient.principal_type &&
                    t.recipient.principal_id === J.workspace_id &&
                    t.role_id === e,
                )),
              (O[31] = ed),
              (O[32] = J.shares),
              (O[33] = J.workspace_id),
              (O[34] = e))
            : (e = O[34])
          let i = Y.DT.findLast(e)
          ;((m = J.inherited_access),
            O[35] !== R
              ? ((t =
                  null == R
                    ? (0, a.jsx)(f.A, {
                        id: "codex.pages.sharing.workspaceLink.audience.unnamedWorkspace.label",
                        defaultMessage: "Anyone in this workspace",
                      })
                    : (0, a.jsx)(f.A, {
                        id: "codex.pages.sharing.workspaceLink.audience.namedWorkspace.label",
                        defaultMessage: "Anyone at {workspaceName}",
                        values: { workspaceName: R },
                      })),
                (O[35] = R),
                (O[36] = t))
              : (t = O[36]))
          let r = t
          ;((p = ei.p),
            (y = "link"),
            (g =
              J.inherited_workspace_link_access?.complete !== !0
                ? (0, a.jsxs)("div", {
                    className: "flex items-center justify-between gap-3",
                    children: [
                      (0, a.jsx)("p", {
                        className: "text-sm text-secondary select-none",
                        children: (0, a.jsx)(f.A, {
                          id: "codex.pages.sharing.workspaceLink.unknown.helpText",
                          defaultMessage: "Couldn\u2019t load link access",
                        }),
                      }),
                      (0, a.jsx)(n.$, {
                        color: "secondary",
                        variant: "ghost",
                        size: "sm",
                        onClick: () => void es(),
                        children: (0, a.jsx)(f.A, {
                          id: "codex.pages.sharing.workspaceLink.retry.action",
                          defaultMessage: "Retry",
                        }),
                      }),
                    ],
                  })
                : (0, a.jsx)(H.h, {
                    avatar: null == i ? (0, a.jsx)(F.$Rp, {}) : (0, a.jsx)(F.MEe, {}),
                    label:
                      null == i
                        ? (0, a.jsx)(f.A, {
                            id: "codex.pages.sharing.onlyInvited",
                            defaultMessage: "Only those invited",
                          })
                        : r,
                    trailingContent:
                      null != i &&
                      (0, a.jsx)("span", {
                        className: "pe-2 text-sm text-tertiary",
                        children: (0, a.jsx)(V.u, { permission: (0, q.rP)(i, "folder") }),
                      }),
                  })),
            (O[20] = ed),
            (O[21] = es),
            (O[22] = J.inherited_access),
            (O[23] = J.inherited_workspace_link_access?.complete),
            (O[24] = J.shares),
            (O[25] = J.workspace_id),
            (O[26] = R),
            (O[27] = p),
            (O[28] = m),
            (O[29] = g),
            (O[30] = y))
        } else ((p = O[27]), (m = O[28]), (g = O[29]), (y = O[30]))
        O[37] !== p || O[38] !== g || O[39] !== y
          ? ((v = (0, a.jsx)(p, { kind: y, children: g })), (O[37] = p), (O[38] = g), (O[39] = y), (O[40] = v))
          : (v = O[40])
        let eu = `owner:${J.owner.principal_id}`
        if (
          (O[41] === Symbol.for("react.memo_cache_sentinel")
            ? ((x = (0, a.jsx)("span", {
                className: "pe-2 text-sm text-tertiary",
                children: (0, a.jsx)(V.u, { permission: "owner" }),
              })),
              (O[41] = x))
            : (x = O[41]),
          O[42] !== eo || O[43] !== J.owner.principal_id
            ? ((b = (0, a.jsx)(H.h, { colorKey: J.owner.principal_id, label: eo, trailingContent: x })),
              (O[42] = eo),
              (O[43] = J.owner.principal_id),
              (O[44] = b))
            : (b = O[44]),
          O[45] !== eo || O[46] !== eu || O[47] !== b
            ? ((k = { id: eu, label: eo, isOwner: !0, row: b }), (O[45] = eo), (O[46] = eu), (O[47] = b), (O[48] = k))
            : (k = O[48]),
          O[49] !== el || O[50] !== ec || O[51] !== d || O[52] !== J.owner.principal_id || O[53] !== z
            ? ((j =
                J.owner.principal_id.split("__")[0] === el
                  ? []
                  : [
                      {
                        id: `self:${z}`,
                        label: ec,
                        isSelf: !0,
                        row: (0, a.jsx)(H.h, {
                          colorKey: z,
                          label: ec,
                          trailingContent: (0, a.jsx)("span", {
                            className: "pe-2 text-sm text-tertiary",
                            children: (0, a.jsx)(V.u, { permission: d }),
                          }),
                        }),
                      },
                    ]),
              (O[49] = el),
              (O[50] = ec),
              (O[51] = d),
              (O[52] = J.owner.principal_id),
              (O[53] = z),
              (O[54] = j))
            : (j = O[54]),
          O[55] !== W ||
            O[56] !== el ||
            O[57] !== J.owner.principal_id ||
            O[58] !== J.shares ||
            O[59] !== k ||
            O[60] !== j)
        ) {
          let e, t
          ;(O[62] !== el || O[63] !== J.owner.principal_id
            ? ((e = (e) =>
                ("active" === e.status || "pending" === e.status) &&
                ("principal" !== e.recipient.recipient_type ||
                  ("workspace" !== e.recipient.principal_type &&
                    ("user" !== e.recipient.principal_type ||
                      (e.recipient.principal_id !== J.owner.principal_id &&
                        e.recipient.principal_id.split("__")[0] !== el))))),
              (O[62] = el),
              (O[63] = J.owner.principal_id),
              (O[64] = e))
            : (e = O[64]),
            O[65] !== W
              ? ((t = (e) => {
                  let t = e.recipient_email ?? ("email" === e.recipient.recipient_type ? e.recipient.email : null),
                    i =
                      e.recipient_display_name?.trim() ||
                      t ||
                      W.formatMessage({ id: "codex.pages.requestShare.collaborator", defaultMessage: "Collaborator" })
                  return {
                    id: e.share_id,
                    label: i,
                    isTeam: "principal" === e.recipient.recipient_type && "group" === e.recipient.principal_type,
                    row: (0, a.jsx)(H.h, {
                      avatar: (0, a.jsx)(Q.T, {
                        avatarUrl: "active" === e.status ? e.recipient_avatar_url : null,
                        colorKey: (0, B.hk)(e.recipient),
                        name: i,
                        size: "group",
                      }),
                      label: i,
                      secondaryLabel: t !== i ? t : void 0,
                      trailingContent: (0, a.jsxs)("div", {
                        className: "flex shrink-0 items-center gap-3",
                        children: [
                          "pending" === e.status &&
                            (0, a.jsx)(K.E, {
                              className: "whitespace-nowrap",
                              children: (0, a.jsx)(f.A, {
                                id: "codex.pages.requestShare.invitationPending",
                                defaultMessage: "Pending",
                              }),
                            }),
                          (0, a.jsx)("span", {
                            className: "pe-2 text-sm text-tertiary",
                            children: (0, a.jsx)(V.u, { permission: (0, q.rP)(e.role_id, "folder") }),
                          }),
                        ],
                      }),
                    }),
                  }
                }),
                (O[65] = W),
                (O[66] = t))
              : (t = O[66]),
            (S = (0, a.jsx)(et.M, { entries: [k, ...j, ...J.shares.filter(e).map(t)] })),
            (O[55] = W),
            (O[56] = el),
            (O[57] = J.owner.principal_id),
            (O[58] = J.shares),
            (O[59] = k),
            (O[60] = j),
            (O[61] = S))
        } else S = O[61]
        let ep = "page" === L.kind ? L.id : null
        return (
          O[67] !== m || O[68] !== ep
            ? ((A = (0, a.jsx)(X, { pageId: ep, inheritedAccess: m })), (O[67] = m), (O[68] = ep), (O[69] = A))
            : (A = O[69]),
          O[70] !== m?.complete
            ? ((C =
                m?.complete !== !0 &&
                (0, a.jsx)("p", {
                  className: "text-sm text-secondary select-none",
                  children: (0, a.jsx)(f.A, {
                    id: "codex.pages.requestShare.inheritedIncomplete",
                    defaultMessage: "Some inherited access could not be loaded",
                  }),
                })),
              (O[70] = m?.complete),
              (O[71] = C))
            : (C = O[71]),
          O[72] !== S || O[73] !== A || O[74] !== C
            ? ((I = (0, a.jsxs)(ei.p, { children: [S, A, C] })), (O[72] = S), (O[73] = A), (O[74] = C), (O[75] = I))
            : (I = O[75]),
          O[76] !== v || O[77] !== I
            ? ((E = (0, a.jsxs)(a.Fragment, { children: [v, I] })), (O[76] = v), (O[77] = I), (O[78] = E))
            : (E = O[78]),
          E
        )
      },
    }
    function es(e) {
      let t,
        i,
        n,
        s = (0, r.c)(7)
      s[0] !== e ? (({ requestFor: i, ...t } = e), (s[0] = e), (s[1] = t), (s[2] = i)) : ((t = s[1]), (i = s[2]))
      let l = void 0 === i ? "others" : i,
        o = "others" === l ? en : void 0
      return (
        s[3] !== t || s[4] !== l || s[5] !== o
          ? ((n = (0, a.jsx)(er.RequestShareForm, { ...t, requestFor: l, others: o })),
            (s[3] = t),
            (s[4] = l),
            (s[5] = o),
            (s[6] = n))
          : (n = s[6]),
        n
      )
    }
    var el = i("Wj4L"),
      eo = i("QUw8"),
      ec = i("UOwN"),
      ed = i("tcwr"),
      eu = i("rTPf"),
      ep = i("tdE2"),
      em = i("QBk8"),
      eh = i("yGJW"),
      eg = i("NRR1"),
      ef = i("Bktt"),
      e_ = i("cfLx"),
      ey = i("DHW4"),
      ev = i("jScN"),
      ex = i("WFY2")
    function eb(e, t, i, a, r, n) {
      null != a &&
        ex.v.info("Pages sharing phase", {
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
    function ek(e) {
      return null == e ? "unknown" : 0 === e ? "empty" : e <= 10 ? "1_10" : e <= 100 ? "11_100" : "101_plus"
    }
    function ej(e, t) {
      return { "sharing.attempt_id": t, "sharing.backing_type": e.backing_type, "sharing.target_type": e.target_type }
    }
    var eS = i("GP5B"),
      eA = i("LxX1"),
      eM = i("dJBt"),
      eC = i("Yqxh"),
      eI = i("qCmE"),
      eq = i("JGmX"),
      eE = i("glqn"),
      eO = i("ajGH"),
      eL = i("Rxyo"),
      eN = i("OMIV"),
      eR = i("Wuyk"),
      e$ = i("rvFo"),
      eP = i("GEsy"),
      eU = i("eShZ"),
      eD = i("Sm6l"),
      eT = i("JNtf")
    function eF(e) {
      let t,
        i,
        n,
        s,
        l,
        o,
        c,
        d,
        u,
        p,
        m,
        g = (0, r.c)(25),
        { target: _, teamName: y, onCancel: v, onConfirm: x } = e,
        b = (0, h._U)(P.loadedSpacePageMetadata$, "page" === _.type ? _.id : null)
      ;(g[0] !== v
        ? ((t = (e) => {
            e || v()
          }),
          (g[0] = v),
          (g[1] = t))
        : (t = g[1]),
        g[2] !== x
          ? ((i = (e) => {
              ;(e.preventDefault(), e.stopPropagation(), x())
            }),
            (g[2] = x),
            (g[3] = i))
          : (i = g[3]),
        g[4] !== y
          ? ((n = (0, a.jsx)(eT.L3, {
              className: "text-heading-lg leading-7 font-semibold wrap-anywhere select-none",
              variant: "promotional",
              children: y
                ? (0, a.jsx)(f.A, {
                    id: "codex.space.driveSharing.reduceTeamAccessTitle",
                    defaultMessage: "Change access for the \u2018{teamName}\u2019 team?",
                    values: { teamName: y },
                  })
                : (0, a.jsx)(f.A, {
                    id: "codex.space.driveSharing.reduceAccessTitle",
                    defaultMessage: "Change access?",
                  }),
            })),
            (g[4] = y),
            (g[5] = n))
          : (n = g[5]))
      let w = b?.document_type ?? "page"
      return (
        g[6] !== w || g[7] !== _.type
          ? ((s = (0, a.jsx)(eT.rr, {
              className: "text-onboarding-body text-secondary select-none",
              children: (0, a.jsx)(f.A, {
                id: "codex.space.driveSharing.reduceOwnEditingAccessDescription.byDocumentType",
                defaultMessage:
                  "You may lose editing access to this {kind, select, page {{documentType, select, granola_presentation {slide} granola_workbook {sheet} other {page}}} entry {item} other {space}} and items that inherit access from it. Do you want to continue?",
                values: { documentType: w, kind: _.type },
              }),
            })),
            (g[6] = w),
            (g[7] = _.type),
            (g[8] = s))
          : (s = g[8]),
        g[9] !== n || g[10] !== s
          ? ((l = (0, a.jsxs)("div", { className: "flex flex-col gap-4", children: [n, s] })),
            (g[9] = n),
            (g[10] = s),
            (g[11] = l))
          : (l = g[11]),
        g[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, a.jsx)(eD.$, {
              className: "w-full",
              color: "primary",
              size: "promotionalAction",
              type: "submit",
              children: (0, a.jsx)(f.A, {
                id: "codex.space.driveSharing.confirmReduceAccess",
                defaultMessage: "Update access",
              }),
            })),
            (g[12] = o))
          : (o = g[12]),
        g[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)(f.A, { id: "codex.space.driveSharing.cancelReduceAccess", defaultMessage: "Cancel" })),
            (g[13] = c))
          : (c = g[13]),
        g[14] !== v
          ? ((d = (0, a.jsxs)(M.Es, {
              className: "flex-col",
              children: [
                o,
                (0, a.jsx)(eD.$, {
                  className: "w-full",
                  color: "ghostSecondary",
                  size: "promotionalLink",
                  type: "button",
                  onClick: v,
                  children: c,
                }),
              ],
            })),
            (g[14] = v),
            (g[15] = d))
          : (d = g[15]),
        g[16] !== l || g[17] !== d
          ? ((u = (0, a.jsxs)("div", {
              className: "flex flex-col gap-8 p-6 pt-14 text-center sm:p-10",
              children: [l, d],
            })),
            (g[16] = l),
            (g[17] = d),
            (g[18] = u))
          : (u = g[18]),
        g[19] !== u || g[20] !== i
          ? ((p = (0, a.jsx)(M.R4, { as: "form", variant: "chatgpt", onSubmit: i, children: u })),
            (g[19] = u),
            (g[20] = i),
            (g[21] = p))
          : (p = g[21]),
        g[22] !== t || g[23] !== p
          ? ((m = (0, a.jsx)(eT.lG, {
              open: !0,
              variant: "centeredText",
              size: "feature",
              onOpenChange: t,
              children: p,
            })),
            (g[22] = t),
            (g[23] = p),
            (g[24] = m))
          : (m = g[24]),
        m
      )
    }
    function eW(e) {
      let t,
        i,
        n,
        s,
        l,
        o,
        c,
        d,
        u,
        p,
        m,
        h,
        _ = (0, r.c)(22),
        { getFallbackFocus: y, onCancel: v, onDiscard: x } = e,
        b = (0, g.useRef)(null)
      return (
        _[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = () => {
              b.current =
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
                let t = b.current?.isConnected ? b.current : y?.()
                null != t && (e.preventDefault(), t.focus({ preventScroll: !0 }))
              },
              onEscapeKeyDown: ez,
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
        _[5] !== x
          ? ((s = (e) => {
              ;(e.preventDefault(), e.stopPropagation(), x())
            }),
            (_[5] = x),
            (_[6] = s))
          : (s = _[6]),
        _[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, a.jsx)(eT.L3, {
              children: (0, a.jsx)(f.A, {
                id: "codex.pages.sharing.discardChanges.title",
                defaultMessage: "Discard sharing changes?",
              }),
            })),
            (_[7] = l))
          : (l = _[7]),
        _[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, a.jsx)(M.OO, {
              children: (0, a.jsx)(M.c7, {
                title: l,
                subtitle: (0, a.jsx)(eT.rr, {
                  children: (0, a.jsx)(f.A, {
                    id: "codex.pages.sharing.discardChanges.description",
                    defaultMessage: "Your sharing changes haven\u2019t been saved",
                  }),
                }),
              }),
            })),
            (_[8] = o))
          : (o = _[8]),
        _[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)(f.A, {
              id: "codex.pages.sharing.discardChanges.keepEditing",
              defaultMessage: "Keep editing",
            })),
            (_[9] = c))
          : (c = _[9]),
        _[10] !== v
          ? ((d = (0, a.jsx)(eD.$, { color: "secondary", type: "button", onClick: v, children: c })),
            (_[10] = v),
            (_[11] = d))
          : (d = _[11]),
        _[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, a.jsx)(eD.$, {
              color: "danger",
              type: "submit",
              children: (0, a.jsx)(f.A, {
                id: "codex.pages.sharing.discardChanges.discard",
                defaultMessage: "Discard changes",
              }),
            })),
            (_[12] = u))
          : (u = _[12]),
        _[13] !== d
          ? ((p = (0, a.jsx)(M.OO, { children: (0, a.jsxs)(M.Es, { children: [d, u] }) })), (_[13] = d), (_[14] = p))
          : (p = _[14]),
        _[15] !== p || _[16] !== s
          ? ((m = (0, a.jsxs)(M.R4, { as: "form", onSubmit: s, children: [o, p] })),
            (_[15] = p),
            (_[16] = s),
            (_[17] = m))
          : (m = _[17]),
        _[18] !== m || _[19] !== i || _[20] !== n
          ? ((h = (0, a.jsx)(eT.lG, {
              open: !0,
              showDialogClose: !1,
              size: "compact",
              contentProps: i,
              onOpenChange: n,
              children: m,
            })),
            (_[18] = m),
            (_[19] = i),
            (_[20] = n),
            (_[21] = h))
          : (h = _[21]),
        h
      )
    }
    function ez(e) {
      return e.stopPropagation()
    }
    var eG = i("Adh7")
    function eQ(e) {
      let t,
        i,
        n,
        s,
        l,
        o,
        c,
        d,
        u,
        p = (0, r.c)(21)
      return (
        p[0] !== e
          ? (({ accountUserId: t, avatar: i, label: n, labelSuffix: s, ...l } = e),
            (p[0] = e),
            (p[1] = t),
            (p[2] = i),
            (p[3] = n),
            (p[4] = s),
            (p[5] = l))
          : ((t = p[1]), (i = p[2]), (n = p[3]), (s = p[4]), (l = p[5])),
        p[6] !== t || p[7] !== i || p[8] !== n
          ? ((o = (0, a.jsx)(eG.c$, { accountUserId: t, label: n, variant: "avatar", children: i })),
            (p[6] = t),
            (p[7] = i),
            (p[8] = n),
            (p[9] = o))
          : (o = p[9]),
        p[10] !== t || p[11] !== n
          ? ((c = (0, a.jsx)(eG.c$, { accountUserId: t, label: n, children: n })),
            (p[10] = t),
            (p[11] = n),
            (p[12] = c))
          : (c = p[12]),
        p[13] !== s || p[14] !== c
          ? ((d = (0, a.jsxs)(a.Fragment, { children: [c, s] })), (p[13] = s), (p[14] = c), (p[15] = d))
          : (d = p[15]),
        p[16] !== n || p[17] !== l || p[18] !== o || p[19] !== d
          ? ((u = (0, a.jsx)(H.h, { ...l, avatar: o, avatarLabel: n, label: d })),
            (p[16] = n),
            (p[17] = l),
            (p[18] = o),
            (p[19] = d),
            (p[20] = u))
          : (u = p[20]),
        u
      )
    }
    var eK = i("xrkS"),
      eB = i("LNpE"),
      eY = i("IUMq"),
      eH = i("PItM")
    function eV(e) {
      let t,
        i,
        s,
        l,
        o,
        c,
        d,
        u,
        p = (0, r.c)(62),
        {
          sharing: m,
          supportsCommenter: g,
          loading: _,
          directRole: y,
          hasDirectOverride: x,
          disabled: b,
          isWorkspace: w,
          workspaceName: k,
          newSharingPaused: j,
          workspaceLinkSharingAvailable: S,
          onChange: A,
          onRetry: M,
          onClose: C,
        } = e,
        I = void 0 !== _ && _,
        E = void 0 !== j && j,
        O = (0, v.Zp)()
      if (!(0, h.Ul)($.i$)) return null
      let L = m.inherited_workspace_link_access,
        N = w && L?.complete !== !0
      if (
        p[0] !== y ||
        p[1] !== b ||
        p[2] !== x ||
        p[3] !== L?.sources ||
        p[4] !== L?.sources.filter ||
        p[5] !== w ||
        p[6] !== I ||
        p[7] !== O ||
        p[8] !== E ||
        p[9] !== A ||
        p[10] !== C ||
        p[11] !== M ||
        p[12] !== m ||
        p[13] !== g ||
        p[14] !== N ||
        p[15] !== S ||
        p[16] !== k
      ) {
        let e,
          r,
          d,
          u,
          h,
          _,
          v,
          j = (0, Y.Ql)(m),
          R = null == j ? void 0 : (0, q.rP)(j, "folder"),
          $ = L?.sources.filter((e) => e.role === R),
          P = ($?.find(e0) ?? $?.[0])?.source
        null != P &&
          (e =
            "entry" === P.kind
              ? `/space/d/${encodeURIComponent(`libdir_${P.id}`)}`
              : `/${"page" === P.kind ? "space" : "spaces"}/${encodeURIComponent(P.id)}`)
        let U =
            null == j
              ? void 0
              : (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(eY.W.Separator, {}),
                    (0, a.jsx)(eY.W.Item, {
                      children: (0, a.jsx)("span", {
                        className: "flex max-w-64 min-w-0 flex-1 flex-col",
                        children: (0, a.jsx)(eY.W.Description, {
                          children:
                            null == k
                              ? (0, a.jsx)(f.A, {
                                  id: "codex.pages.sharing.workspaceLink.minimum.unnamedWorkspace.helpText",
                                  defaultMessage:
                                    "People in your workspace can still {role, select, viewer {view} commenter {comment} other {edit}} through {kind, select, space {this space} page {a parent page} other {a parent}}",
                                  values: { role: R, kind: P?.kind },
                                })
                              : (0, a.jsx)(f.A, {
                                  id: "codex.pages.sharing.workspaceLink.minimum.namedWorkspace.helpText",
                                  defaultMessage:
                                    "People at {workspaceName} can still {role, select, viewer {view} commenter {comment} other {edit}} through {kind, select, space {this space} page {a parent page} other {a parent}}",
                                  values: { workspaceName: k, role: R, kind: P?.kind },
                                }),
                        }),
                      }),
                    }),
                    null != e &&
                      (0, a.jsx)(eY.W.Item, {
                        onSelect: () => {
                          ;(C(), O(e))
                        },
                        children: (0, a.jsx)(f.A, {
                          id: "codex.pages.sharing.workspaceLink.source.open.label",
                          defaultMessage:
                            "{kind, select, space {Open space} entry {Open parent folder} other {Open parent page}}",
                          values: { kind: P?.kind },
                        }),
                      }),
                  ],
                }),
          D = Y.DT.findLast((e) => e === y || e === j),
          T = Y.DT.filter(
            (e) => (g || "role-library-folder-commenter" !== e) && (m.allowed_roles.includes(e) || e === j),
          ).map((e) => ({
            value: e,
            disabled:
              !S ||
              (E && Y.DT.indexOf(e) > Y.DT.findIndex((e) => e === y)) ||
              (null != j && Y.DT.indexOf(e) < Y.DT.indexOf(j)),
          }))
        ;((t = ei.p),
          (o = "link"),
          p[23] !== I || p[24] !== M || p[25] !== N
            ? ((c =
                N &&
                !I &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex items-center justify-between gap-3",
                      children: [
                        (0, a.jsx)("p", {
                          className: "text-sm text-secondary select-none",
                          children: (0, a.jsx)(f.A, {
                            id: "codex.pages.sharing.workspaceLink.unknown.helpText",
                            defaultMessage: "Couldn\u2019t load link access",
                          }),
                        }),
                        (0, a.jsx)(n.$, {
                          color: "secondary",
                          variant: "ghost",
                          size: "sm",
                          onClick: M,
                          children: (0, a.jsx)(f.A, {
                            id: "codex.pages.sharing.workspaceLink.retry.action",
                            defaultMessage: "Retry",
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsx)("p", {
                      className: "text-xs text-secondary select-none",
                      children: (0, a.jsx)(f.A, {
                        id: "codex.pages.sharing.workspaceLink.direct.heading",
                        defaultMessage: "Set on this page",
                      }),
                    }),
                  ],
                })),
              (p[23] = I),
              (p[24] = M),
              (p[25] = N),
              (p[26] = c))
            : (c = p[26]),
          (i = "flex items-center justify-between gap-3"),
          p[27] !== N
            ? ((r = N
                ? (0, a.jsx)(f.A, {
                    id: "codex.pages.sharing.workspaceLink.noDirect.label",
                    defaultMessage: "No workspace link",
                  })
                : (0, a.jsx)(f.A, { id: "codex.pages.sharing.onlyInvited", defaultMessage: "Only those invited" })),
              (p[27] = N),
              (p[28] = r))
            : (r = p[28]))
        let W = b || N
        p[29] === Symbol.for("react.memo_cache_sentinel") ? ((d = (0, a.jsx)(F.$Rp, {})), (p[29] = d)) : (d = p[29])
        let z = null != j
        p[30] !== z
          ? ((u = { value: "restricted", mode: "restricted", icon: d, disabled: z }), (p[30] = z), (p[31] = u))
          : (u = p[31])
        let G = w
          ? [{ value: "workspace", mode: "workspace", icon: (0, a.jsx)(F.MEe, {}), disabled: T.every(eJ), hidden: !S }]
          : []
        p[32] !== u || p[33] !== G ? ((h = [u, ...G]), (p[32] = u), (p[33] = G), (p[34] = h)) : (h = p[34])
        let Q = null == D ? "restricted" : "workspace"
        ;(p[35] !== k
          ? ((_ =
              null == k
                ? (0, a.jsx)(f.A, {
                    id: "codex.pages.sharing.workspaceLink.audience.unnamedWorkspace.label",
                    defaultMessage: "Anyone in this workspace",
                  })
                : (0, a.jsx)(f.A, {
                    id: "codex.pages.sharing.workspaceLink.audience.namedWorkspace.label",
                    defaultMessage: "Anyone at {workspaceName}",
                    values: { workspaceName: k },
                  })),
            (p[35] = k),
            (p[36] = _))
          : (_ = p[36]),
          p[37] !== y || p[38] !== b || p[39] !== j || p[40] !== A || p[41] !== T || p[42] !== N
            ? ((v = (e) => {
                !N &&
                  !b &&
                  ("restricted" === e
                    ? null == j && A(null)
                    : null == j && T.some(eX) && A(T.find((e) => e.value === y)?.value ?? T[0]?.value ?? null))
              }),
              (p[37] = y),
              (p[38] = b),
              (p[39] = j),
              (p[40] = A),
              (p[41] = T),
              (p[42] = N),
              (p[43] = v))
            : (v = p[43]),
          p[44] !== U ||
          p[45] !== h ||
          p[46] !== Q ||
          p[47] !== _ ||
          p[48] !== v ||
          p[49] !== r ||
          p[50] !== W ||
          p[51] !== k
            ? ((s = (0, a.jsx)(eH.d, {
                restrictedLabel: r,
                disabled: W,
                footer: U,
                options: h,
                value: Q,
                workspaceName: k,
                workspaceLabel: _,
                onChange: v,
              })),
              (p[44] = U),
              (p[45] = h),
              (p[46] = Q),
              (p[47] = _),
              (p[48] = v),
              (p[49] = r),
              (p[50] = W),
              (p[51] = k),
              (p[52] = s))
            : (s = p[52]),
          (l =
            null != D &&
            (S || (null != j && x)
              ? (0, a.jsx)(eE.e, {
                  disabled: b || N,
                  footer: U,
                  variant: "inline",
                  options: T,
                  value: D,
                  renderLabel: eZ,
                  onChange: (e) => {
                    !N && !b && T.some((t) => t.value === e && !t.disabled) && A(e === j ? null : e)
                  },
                  removeLabel: (0, a.jsx)(f.A, {
                    id: "codex.pages.sharing.workspaceLink.source.useAccess.action",
                    defaultMessage:
                      "{kind, select, space {Use space access} page {Use parent page access} other {Use parent access}} ({role, select, viewer {Viewer} commenter {Commenter} editor {Editor} other {Owner}})",
                    values: { kind: P?.kind, role: R },
                  }),
                  onRemoveAccess: null != j && x ? () => A(null) : void 0,
                })
              : (0, a.jsx)(V.u, { permission: (0, q.rP)(D, "folder") }))),
          (p[0] = y),
          (p[1] = b),
          (p[2] = x),
          (p[3] = L?.sources),
          (p[4] = L?.sources.filter),
          (p[5] = w),
          (p[6] = I),
          (p[7] = O),
          (p[8] = E),
          (p[9] = A),
          (p[10] = C),
          (p[11] = M),
          (p[12] = m),
          (p[13] = g),
          (p[14] = N),
          (p[15] = S),
          (p[16] = k),
          (p[17] = t),
          (p[18] = i),
          (p[19] = s),
          (p[20] = l),
          (p[21] = o),
          (p[22] = c))
      } else ((t = p[17]), (i = p[18]), (s = p[19]), (l = p[20]), (o = p[21]), (c = p[22]))
      return (
        p[53] !== i || p[54] !== s || p[55] !== l
          ? ((d = (0, a.jsxs)("div", { className: i, children: [s, l] })),
            (p[53] = i),
            (p[54] = s),
            (p[55] = l),
            (p[56] = d))
          : (d = p[56]),
        p[57] !== t || p[58] !== o || p[59] !== c || p[60] !== d
          ? ((u = (0, a.jsxs)(t, { kind: o, children: [c, d] })),
            (p[57] = t),
            (p[58] = o),
            (p[59] = c),
            (p[60] = d),
            (p[61] = u))
          : (u = p[61]),
        u
      )
    }
    function eZ(e) {
      return (0, a.jsx)(V.u, { permission: (0, q.rP)(e, "folder") })
    }
    function eX(e) {
      return !e.disabled
    }
    function eJ(e) {
      return e.disabled
    }
    function e0(e) {
      return null != e.source
    }
    let e1 = ["role-library-folder-viewer", "role-library-folder-commenter", "role-library-folder-editor"],
      e2 = (0, h.i1)(U.u, (e, { get: t }) => {
        let i = t(P.loadedSpacePageMetadata$, e)
        return "granola_presentation" !== (null == i ? "page" : (0, el.th)(i))
      })
    function e3(e) {
      let t,
        i,
        n,
        l,
        o,
        c,
        d,
        u,
        p = (0, r.c)(54),
        {
          target: m,
          pageId: g,
          itemName: _,
          copyLink: y,
          loadingAccessRows: v,
          comments: x,
          additionalSettings: b,
          copyLinkSpaceId: k,
          requestAccess: j,
          confirmRequestOwner: S,
          onClose: A,
        } = e,
        M = void 0 !== j && j,
        C = (0, h.gh)(U.u),
        q = (0, h.Ul)(P.spaceAccountId$),
        E = (0, h.Ul)(w.chatGptAuthenticatedUserId$),
        O = (0, h.Ul)(I.v0)
      p[0] !== C.query ? ((t = C.query.getOptions(I.Qv)), (p[0] = C.query), (p[1] = t)) : (t = p[1])
      let L = t
      ;(p[2] !== L
        ? ((i = { ...L, staleTime: L.staleTime, refetchOnMount: "always" }), (p[2] = L), (p[3] = i))
        : (i = p[3]),
        (0, s.I)(i, C.queryClient))
      let N = (0, h.Ul)(w.Kw),
        R = M && void 0 !== S && S && "page" === m.type && m.id === g
      p[4] !== C.query || p[5] !== m.id || p[6] !== m.type
        ? ((n = C.query.getOptions(D, { kind: "space" === m.type ? "space" : "page", id: m.id })),
          (p[4] = C.query),
          (p[5] = m.id),
          (p[6] = m.type),
          (p[7] = n))
        : (n = p[7])
      let $ = n,
        T = R && $.enabled
      p[8] !== $ || p[9] !== T
        ? ((l = { ...$, enabled: T, staleTime: $.staleTime, refetchOnMount: "always" }),
          (p[8] = $),
          (p[9] = T),
          (p[10] = l))
        : (l = p[10])
      let F = (0, s.I)(l, C.queryClient)
      if (null == q || null == E) return null
      p[11] !== _ || p[12] !== m.id || p[13] !== m.type
        ? ((o =
            "entry" === m.type
              ? (0, a.jsx)(f.A, {
                  id: "librarySharing.fileTitle",
                  defaultMessage: "Share {fileName}",
                  values: { fileName: _ },
                })
              : (0, a.jsx)(eA.r, { kind: m.type, id: m.id })),
          (p[11] = _),
          (p[12] = m.id),
          (p[13] = m.type),
          (p[14] = o))
        : (o = p[14])
      let W = o
      p[15] !== g || p[16] !== m.type
        ? ((c = "entry" !== m.type && null != g ? (0, a.jsx)(e_.Z, { kind: m.type, pageId: g }) : void 0),
          (p[15] = g),
          (p[16] = m.type),
          (p[17] = c))
        : (c = p[17])
      let z = c
      p[18] !== y || p[19] !== k || p[20] !== g
        ? ((d = y ?? (null != g ? (0, a.jsx)(G, { pageId: g, spaceId: k }) : void 0)),
          (p[18] = y),
          (p[19] = k),
          (p[20] = g),
          (p[21] = d))
        : (d = p[21])
      let Q = d
      if (R && (F.isError || null == F.data || !F.isFetchedAfterMount)) {
        let e, t
        return (
          p[22] !== F
            ? ((e = !F.isFetching && (0, a.jsx)(ea.DN, { isLoading: !1, onRetry: () => void F.refetch() })),
              (p[22] = F),
              (p[23] = e))
            : (e = p[23]),
          p[24] !== F.isFetching || p[25] !== e || p[26] !== W
            ? ((t = (0, a.jsx)(e_.U, { title: W, isLoading: F.isFetching, children: e })),
              (p[24] = F.isFetching),
              (p[25] = e),
              (p[26] = W),
              (p[27] = t))
            : (t = p[27]),
          t
        )
      }
      let K =
        R &&
        F.data?.owner.principal_type === "user" &&
        (F.data.owner.principal_id === (N ?? `${E.split("__")[0]}__${q}`) ||
          (!F.data.owner.principal_id.includes("__") && F.data.owner.principal_id === E.split("__")[0]))
      if (M && !K && "entry" !== m.type && null != g) {
        let e,
          t,
          i = `${q}:${E}:${m.type}:${m.id}`
        return (
          p[28] !== m.id || p[29] !== m.type
            ? ((e = { kind: m.type, id: m.id }), (p[28] = m.id), (p[29] = m.type), (p[30] = e))
            : (e = p[30]),
          p[31] !== k || p[32] !== A || p[33] !== g || p[34] !== R || p[35] !== i || p[36] !== e
            ? ((t = (0, a.jsx)(es, { target: e, pageId: g, copyLinkSpaceId: k, rosterLoaded: R, onClose: A }, i)),
              (p[31] = k),
              (p[32] = A),
              (p[33] = g),
              (p[34] = R),
              (p[35] = i),
              (p[36] = e),
              (p[37] = t))
            : (t = p[37]),
          t
        )
      }
      if ("unavailable" === O) {
        let e
        return (
          p[38] !== Q || p[39] !== A || p[40] !== z || p[41] !== W
            ? ((e = (0, a.jsx)(e4, { title: W, subtitle: z, copyLink: Q, onClose: A })),
              (p[38] = Q),
              (p[39] = A),
              (p[40] = z),
              (p[41] = W),
              (p[42] = e))
            : (e = p[42]),
          e
        )
      }
      let B = `${q}:${E}:${m.type}:${m.id}`
      return (
        p[43] !== b ||
        p[44] !== x ||
        p[45] !== Q ||
        p[46] !== v ||
        p[47] !== A ||
        p[48] !== g ||
        p[49] !== z ||
        p[50] !== B ||
        p[51] !== m ||
        p[52] !== W
          ? ((u = (0, a.jsx)(
              e5,
              {
                comments: x,
                additionalSettings: b,
                target: m,
                pageId: g,
                title: W,
                subtitle: z,
                copyLink: Q,
                loadingAccessRows: v,
                onClose: A,
              },
              B,
            )),
            (p[43] = b),
            (p[44] = x),
            (p[45] = Q),
            (p[46] = v),
            (p[47] = A),
            (p[48] = g),
            (p[49] = z),
            (p[50] = B),
            (p[51] = m),
            (p[52] = W),
            (p[53] = u))
          : (u = p[53]),
        u
      )
    }
    function e4(e) {
      let t,
        i,
        n,
        s,
        l,
        o = (0, r.c)(21),
        {
          title: c,
          subtitle: d,
          copyLink: u,
          loadingAccessRows: p,
          onClose: m,
          onRequestClose: g,
          onPortalContainerChange: _,
          confirmation: y,
        } = e,
        v = (0, h.gh)(U.u),
        x = (0, h.Ul)(I.v0)
      o[0] !== m || o[1] !== g
        ? ((t = () => {
            g?.() !== "deny" && m()
          }),
          (o[0] = m),
          (o[1] = g),
          (o[2] = t))
        : (t = o[2])
      let b = t,
        w = "loading" === x,
        k = "unavailable" === x ? null : u
      return (
        o[3] !== b || o[4] !== k
          ? ((i = (0, a.jsx)(eq.r, {
              onCancel: b,
              onClose: b,
              hasPendingAccessChange: !1,
              hasPendingInvitees: !1,
              isSaving: !1,
              copyLink: k,
            })),
            (o[3] = b),
            (o[4] = k),
            (o[5] = i))
          : (i = o[5]),
        o[6] !== y || o[7] !== i
          ? ((n = (0, a.jsxs)(a.Fragment, { children: [i, y] })), (o[6] = y), (o[7] = i), (o[8] = n))
          : (n = o[8]),
        o[9] !== v || o[10] !== x
          ? ((s = (0, a.jsx)(M.OO, {
              children:
                "unavailable" === x
                  ? (0, a.jsx)(A.l, {
                      role: "status",
                      content: (0, a.jsx)(f.A, {
                        id: "codex.space.driveSharing.managementUnavailable",
                        defaultMessage:
                          "Your admin has turned off sharing for your account. Ask your admin to enable sharing.",
                      }),
                    })
                  : (0, a.jsx)(ea.DN, {
                      isLoading: "loading" === x,
                      onRetry: () => {
                        v.get(I.Qv).refetch()
                      },
                    }),
            })),
            (o[9] = v),
            (o[10] = x),
            (o[11] = s))
          : (s = o[11]),
        o[12] !== p ||
        o[13] !== _ ||
        o[14] !== g ||
        o[15] !== d ||
        o[16] !== w ||
        o[17] !== n ||
        o[18] !== s ||
        o[19] !== c
          ? ((l = (0, a.jsx)(e_.U, {
              isLoading: w,
              loadingAccessRows: p,
              title: c,
              subtitle: d,
              onRequestClose: g,
              onPortalContainerChange: _,
              footer: n,
              children: s,
            })),
            (o[12] = p),
            (o[13] = _),
            (o[14] = g),
            (o[15] = d),
            (o[16] = w),
            (o[17] = n),
            (o[18] = s),
            (o[19] = c),
            (o[20] = l))
          : (l = o[20]),
        l
      )
    }
    function e5(e) {
      let t,
        i,
        d,
        p,
        y,
        x,
        N,
        R,
        D,
        T,
        F,
        W,
        z,
        G,
        Q,
        K,
        H,
        Z,
        J,
        ee,
        er,
        en,
        es,
        el,
        eu,
        ex,
        eA,
        eD,
        eT,
        ez,
        eG,
        eY,
        eH,
        eZ,
        eX,
        eJ,
        e0,
        e3,
        e5,
        tI,
        tq,
        tE,
        tO,
        tL,
        tN,
        tR,
        t$,
        tP,
        tU,
        tD,
        tT,
        tF,
        tW,
        tz,
        tG,
        tQ,
        tK,
        tB,
        tY,
        tH,
        tV,
        tZ,
        tX,
        tJ,
        t0,
        t1,
        t2,
        t3,
        t4,
        t5 = (0, r.c)(253),
        {
          target: t6,
          pageId: t7,
          title: t8,
          subtitle: t9,
          copyLink: ie,
          loadingAccessRows: it,
          comments: ii,
          additionalSettings: ia,
          onClose: ir,
        } = e,
        is = (0, h.gh)(U.u),
        il = (0, _.A)(),
        { data: io } = (0, S.oV)(),
        ic = (0, h.Ul)($.pagesEnabled$),
        id = "entry" === t6.type || ic,
        iu = (0, h.Ul)(I.v0),
        ip = (0, h.Ul)(I.Uw),
        im = (0, h.Ul)(P.spaceAccountId$),
        ih = (0, h.Ul)(w.chatGptAuthenticatedUserId$),
        ig = io?.accounts?.find((e) => e.id === im && "workspace" === e.structure),
        i_ = { ...t6, includeInheritedAccess: !0, inheritedOnly: !0 }
      t5[0] !== is.query || t5[1] !== t6
        ? ((t = is.query.getOptions(B.e2, t6)), (t5[0] = is.query), (t5[1] = t6), (t5[2] = t))
        : (t = t5[2])
      let iy = t
      t5[3] !== im || t5[4] !== t6 || t5[5] !== ih
        ? ((i = { accountId: im, userId: ih, target: t6 }), (t5[3] = im), (t5[4] = t6), (t5[5] = ih), (t5[6] = i))
        : (i = t5[6])
      let iv = (0, h.uO)(eB.C, i),
        ix = (0, h.Ul)(iv.unconfirmed$),
        ib = (0, h.Ul)(iv.acceptedPageChanges$)
      t5[7] !== im || t5[8] !== t6 || t5[9] !== ih
        ? ((d = { accountId: im, userId: ih, target: t6 }), (t5[7] = im), (t5[8] = t6), (t5[9] = ih), (t5[10] = d))
        : (d = t5[10])
      let iw = (0, h._U)(eB.y, d),
        ik = (0, h.Ul)(iv.completedSpaceChanges$),
        ij = id && "available" === iu && null != im && null != ih
      ;(t5[11] !== ik
        ? ((p = () => (!(ik.length > 0) && !!l.t.isOnline()) || "always"), (t5[11] = ik), (t5[12] = p))
        : (p = t5[12]),
        t5[13] !== iy || t5[14] !== ij || t5[15] !== p
          ? ((y = { ...iy, enabled: ij, staleTime: e$.D.THIRTY_SECONDS, refetchOnMount: p }),
            (t5[13] = iy),
            (t5[14] = ij),
            (t5[15] = p),
            (t5[16] = y))
          : (y = t5[16]))
      let { data: iS, isPending: iA, fetchStatus: iM, isStale: iC, isError: iI, error: iq, refetch: iE } = (0, s.I)(y),
        [iO, iL] = (0, g.useState)(),
        iN = is.query.getOptions(B.e2, i_),
        iR = id && "available" === iu && iy.enabled && null != iS && !iI
      ;(t5[17] !== t6.type
        ? ((x = "page" === t6.type && { refetchOnMount: "always" }), (t5[17] = t6.type), (t5[18] = x))
        : (x = t5[18]),
        t5[19] !== iN || t5[20] !== iR || t5[21] !== x
          ? ((N = { ...iN, enabled: iR, staleTime: e$.D.THIRTY_SECONDS, ...x, refetchOnWindowFocus: !1 }),
            (t5[19] = iN),
            (t5[20] = iR),
            (t5[21] = x),
            (t5[22] = N))
          : (N = t5[22]))
      let {
          data: i$,
          isSuccess: iP,
          isPending: iU,
          isFetchedAfterMount: iD,
          error: iT,
          isStale: iF,
          fetchStatus: iW,
          refetch: iz,
        } = (0, s.I)(N),
        iG = iP && !iF && "idle" === iW ? i$ : void 0,
        iQ = iP && "idle" === iW ? i$.inherited_workspace_link_access : void 0
      t5[23] !== iG?.inherited_workspace_link_access || t5[24] !== iQ
        ? ((R = iG?.inherited_workspace_link_access ?? (iQ && { ...iQ, sources: iQ.sources.map(tw) })),
          (t5[23] = iG?.inherited_workspace_link_access),
          (t5[24] = iQ),
          (t5[25] = R))
        : (R = t5[25])
      let iK = R,
        iB = iA || "paused" === iM || (iC && "idle" !== iM)
      t5[26] !== iS || t5[27] !== iI || t5[28] !== iA || t5[29] !== iu || t5[30] !== t6.type
        ? ((D =
            "available" === iu && !iA && !iI && ("page" === t6.type || (null != iS && (0, B.TO)(iS))) ? iS : void 0),
          (t5[26] = iS),
          (t5[27] = iI),
          (t5[28] = iA),
          (t5[29] = iu),
          (t5[30] = t6.type),
          (t5[31] = D))
        : (D = t5[31])
      let iY = D
      t5[32] !== iY ? ((T = (0, eS.x)(iY)), (t5[32] = iY), (t5[33] = T)) : (T = t5[33])
      let iH = T,
        iV = !id || [iq, iT].some(tb),
        iZ = iG?.inherited_access
      if ("page" === t6.type) {
        let e = iO
        if (iV) e = "denied"
        else if ("denied" !== e && iY && iD && iG) {
          let t = iG.inherited_access
          e = t?.complete ? t : void 0
        }
        ;(e !== iO && iL(e),
          (iZ = "denied" === e ? void 0 : e),
          void 0 === e &&
            iY &&
            !iD &&
            "fetching" === iW &&
            iP &&
            i$.workspace_id === iY.workspace_id &&
            i$.inherited_access?.complete &&
            (F = i$.inherited_access))
      }
      iY || (iZ = void 0)
      let iX = null == iY ? null : (0, B.f9)(iY),
        iJ = ih?.split("__")[0],
        i0 = iX?.principal_id.split("__")[0]
      t5[34] !== il || t5[35] !== i_ || t5[36] !== is || t5[37] !== t6
        ? ((W = function (e, t) {
            if ((0, eS.d)(t))
              return void is
                .get(C.Id)
                .danger(
                  "invite" === e.action
                    ? il.formatMessage({
                        id: "codex.pages.sharing.paused.invite",
                        defaultMessage: "Your invitation wasn\u2019t sent. New sharing is temporarily paused.",
                      })
                    : il.formatMessage({
                        id: "codex.pages.sharing.paused.update",
                        defaultMessage: "New sharing is temporarily paused. Try again later.",
                      }),
                  { errorAnalytics: { toastId: "sharingDialog.mutate.paused" } },
                )
            let i = t instanceof eU.FetchError && 409 === t.status ? (0, k.pZ)(t) : null,
              a =
                (t instanceof Error && "space_sharing_inherited_access" === t.message) ||
                "This recipient already inherits this access from an ancestor. Edit sharing at that source." === i ||
                i?.startsWith("This recipient already inherits equal or stronger access"),
              r = is.get(B.e2, i_),
              n =
                a && r.isSuccess && !r.isStale && "idle" === r.fetchStatus && "available" === is.get(I.v0)
                  ? tk(
                      r.data,
                      "invite" === e.action
                        ? e.recipient
                        : is.query.getData(B.e2, t6)?.shares.find((t) => t.share_id === e.shareId)?.recipient,
                    )
                  : void 0
            is.get(C.Id).danger(
              null != n
                ? il.formatMessage(
                    {
                      id: "codex.space.driveSharing.inheritedAccessConflictSource",
                      defaultMessage:
                        "This recipient already has access through {kind, select, page {a parent page} entry {a parent folder} other {the space}}",
                    },
                    { kind: n.kind },
                  )
                : (!a && i) || il.formatMessage(tC.saveError),
              { errorAnalytics: { toastId: "sharingDialog.mutate.saveError" } },
            )
          }),
          (t5[34] = il),
          (t5[35] = i_),
          (t5[36] = is),
          (t5[37] = t6),
          (t5[38] = W))
        : (W = t5[38])
      let i1 = W
      ;(t5[39] !== im || t5[40] !== ih
        ? ((z = ["space", "save-library-sharing", ih, im]), (t5[39] = im), (t5[40] = ih), (t5[41] = z))
        : (z = t5[41]),
        t5[42] !== im || t5[43] !== is || t5[44] !== i1 || t5[45] !== t6.type || t5[46] !== ih
          ? ((G = async (e) => {
              let {
                changes: t,
                signal: i,
                telemetry: a,
                initialSharing: r,
                workspaceChangeIndex: n,
                workspaceChange: s,
              } = e
              i.throwIfAborted()
              let l = await (0, B.X5)(
                is,
                t,
                a,
                r,
                i,
                void 0,
                (e, t) => {
                  t.catch((t) => {
                    is.get(P.spaceAccountId$) === im &&
                      is.get(w.chatGptAuthenticatedUserId$) === ih &&
                      ("entry" === t6.type || is.get($.pagesEnabled$)) &&
                      !(t instanceof Error && "AbortError" === t.name) &&
                      i1(e, t)
                  })
                },
                void 0,
                s,
              )
              i.aborted || is.queryClient.invalidateQueries({ queryKey: ["pages-sharing-recent-recipients", im, ih] })
              let o = l[n],
                c = !1
              if (
                !i.aborted &&
                ("entry" === t6.type || is.get($.pagesEnabled$)) &&
                o?.status === "rejected" &&
                ((o.reason instanceof eU.FetchError && [403, 404].includes(o.reason.status)) ||
                  (o.reason instanceof Error && "sharing_access_unavailable" === o.reason.message))
              ) {
                let { data: e, isSuccess: t } = await is.get(I.Qv).refetch()
                c =
                  t &&
                  e?.includes("library_sharing_management_available") === !0 &&
                  !e.includes("library_workspace_link_sharing_available")
              }
              return { results: l, workspaceSharingDisabled: c }
            }),
            (t5[42] = im),
            (t5[43] = is),
            (t5[44] = i1),
            (t5[45] = t6.type),
            (t5[46] = ih),
            (t5[47] = G))
          : (G = t5[47]),
        t5[48] !== z || t5[49] !== G
          ? ((Q = { mutationKey: z, mutationFn: G, networkMode: "always" }), (t5[48] = z), (t5[49] = G), (t5[50] = Q))
          : (Q = t5[50]))
      let i2 = (0, o.n)(Q, is.queryClient)
      t5[51] !== im || t5[52] !== ih
        ? ((K = {
            filters: { mutationKey: ["space", "save-library-sharing", ih, im], status: "pending", exact: !0 },
            select: tx,
          }),
          (t5[51] = im),
          (t5[52] = ih),
          (t5[53] = K))
        : (K = t5[53])
      let i3 = (0, c.S)(K, is.queryClient)
      t5[54] !== t6.id || t5[55] !== t6.type
        ? ((H = (e) => (e?.changes ?? []).filter((e) => e.target.type === t6.type && e.target.id === t6.id)),
          (t5[54] = t6.id),
          (t5[55] = t6.type),
          (t5[56] = H))
        : (H = t5[56])
      let i4 = i3.flatMap(H)
      t5[57] === Symbol.for("react.memo_cache_sentinel")
        ? ((Z = { draft: new Map(), invitees: [] }), (t5[57] = Z))
        : (Z = t5[57])
      let [i5, i6] = (0, g.useState)(Z),
        { draft: i7, invitees: i8 } = i5,
        [i9, ae] = (0, g.useState)(null),
        [at, ai] = (0, g.useState)(!1),
        [aa, ar] = (0, g.useState)(!1),
        an = (0, g.useRef)(null),
        as = (0, g.useRef)(null),
        al = (0, g.useRef)(!1),
        ao = (0, g.useRef)(null),
        ac = (0, g.useRef)(null),
        ad = (0, g.useRef)(null)
      ;(t5[58] !== is || t5[59] !== t6.type
        ? ((J = () => {
            var e, t
            let i, a, r, n, s, l, o, c
            if ("entry" === t6.type) return
            let d =
              ((e = (0, b.dj)(is)),
              (t = { target_type: t6.type, backing_type: "drive" }),
              (i = crypto.randomUUID()),
              (a = (0, ev.m7)({ attributes: ej(t, i), name: "pages.sharing.attempt" })),
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
                  var u, p, m, h, g, f, _, y
                  let v,
                    x = performance.now(),
                    b = {
                      ...t,
                      operation: a,
                      phase: n,
                      retry_ordinal: l,
                      search_mode: o,
                      ...(null == d ? {} : { recipient_lookup_scope: d }),
                    },
                    w = {
                      backingType: t.backing_type,
                      operation: a,
                      phase: n,
                      retryOrdinal: l,
                      searchMode: o,
                      targetType: t.target_type,
                      ...(null == d ? {} : { recipientLookupScope: d }),
                    }
                  e.count("codex_pages", "sharing_phase_started", b)
                  let k =
                      ((u = r),
                      (p = t),
                      (m = i),
                      (h = a),
                      (g = n),
                      (f = l),
                      (_ = o),
                      (y = d),
                      null == u
                        ? null
                        : (0, ev.m7)({
                            attributes: {
                              ...ej(p, m),
                              "sharing.operation": h,
                              "sharing.phase": g,
                              "sharing.retry_ordinal": f,
                              "sharing.search_mode": _,
                              ...(null == y ? {} : { "sharing.recipient_lookup_scope": y }),
                            },
                            name: `pages.sharing.${g}`,
                            trace: u,
                          })),
                    j =
                      k?.trace ??
                      (function (e) {
                        let t = e?.traceparent.split("-")[1]
                        if (null != t)
                          return {
                            traceparent: `00-${t}-${[...crypto.getRandomValues(new Uint8Array(8))].map((e) => e.toString(16).padStart(2, "0")).join("")}-01`,
                            tracestate: e?.tracestate,
                          }
                      })(r),
                    S = !1
                  ;((s += 1), eb("started", w, i, j))
                  let A = (t, a, r, n) => {
                      var l
                      if (S) return
                      ;((S = !0), (s -= 1))
                      let o = Math.max(0, performance.now() - x),
                        d = {
                          ...b,
                          ambiguous_commit: r ? "true" : "false",
                          outcome: t,
                          reason: a,
                          roster_size_bucket: ek(n),
                        }
                      ;(e.count("codex_pages", "sharing_phase_result", d),
                        e.hist("codex_pages", "sharing_phase_latency_ms", d, o),
                        eb(
                          "finished",
                          { ...w, ambiguousCommit: r, outcome: t, reason: a, rosterSizeBucket: ek(n) },
                          i,
                          j,
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
                    })(j)
                  return {
                    requestOptions:
                      null == M
                        ? {}
                        : {
                            additionalHeaders: M,
                            onResponseHeaders: (e) => {
                              null != (v = e.get("x-request-id") ?? void 0) &&
                                eb("request_correlated", w, i, j, void 0, v)
                            },
                          },
                    complete: (e) => A("success", "none", !1, e),
                    fail: (e, t = !1) => A("failure", e, t),
                    cancel: (e = "dialog_closed", t = !1) => A("cancelled", e, t),
                  }
                },
              })
            return (
              (as.current = d),
              (ao.current = d.startPhase({
                operation: "read_current_access",
                phase: "current_access",
                retryOrdinal: d.nextRetryOrdinal("current_access"),
                searchMode: "none",
              })),
              () => {
                ;(ao.current?.cancel(), ac.current?.cancel(), d.dispose(), as.current === d && (as.current = null))
              }
            )
          }),
          (t5[58] = is),
          (t5[59] = t6.type),
          (t5[60] = J))
        : (J = t5[60]),
        t5[61] !== is || t5[62] !== t6.id || t5[63] !== t6.type
          ? ((ee = [is, t6.id, t6.type]), (t5[61] = is), (t5[62] = t6.id), (t5[63] = t6.type), (t5[64] = ee))
          : (ee = t5[64]),
        (0, g.useLayoutEffect)(J, ee),
        t5[65] === Symbol.for("react.memo_cache_sentinel")
          ? ((er = () => () => {
              ad.current?.cancel()
            }),
            (t5[65] = er))
          : (er = t5[65]),
        t5[66] !== im || t5[67] !== id || t5[68] !== t6.id || t5[69] !== t6.type || t5[70] !== ih
          ? ((en = [im, ih, t6.id, t6.type, id]),
            (t5[66] = im),
            (t5[67] = id),
            (t5[68] = t6.id),
            (t5[69] = t6.type),
            (t5[70] = ih),
            (t5[71] = en))
          : (en = t5[71]),
        (0, g.useLayoutEffect)(er, en))
      let [au, ap] = (0, g.useState)(""),
        am = (0, g.useRef)(null),
        [ah, ag] = (0, g.useState)(),
        af = (0, g.useRef)("role-library-folder-viewer"),
        a_ = (0, h._U)(e2, "page" === t6.type ? (t7 ?? null) : null),
        ay = "entry" === t6.type || a_,
        av = iY?.allowed_roles.filter((e) => "role-library-folder-commenter" !== e || ay)
      t5[72] !== id || t5[73] !== iI || t5[74] !== iB || t5[75] !== iu || t5[76] !== iY
        ? ((es = id && !iB && "available" === iu && !iI && null != iY && (0, B.TO)(iY)),
          (t5[72] = id),
          (t5[73] = iI),
          (t5[74] = iB),
          (t5[75] = iu),
          (t5[76] = iY),
          (t5[77] = es))
        : (es = t5[77])
      let ax = es,
        ab = (0, h.Ul)(!!ax && "entry" !== t6.type && eL.A),
        aw = (0, h._U)(eN.JW, "2832056708"),
        ak = (0, h._U)(eN.JW, "2259660874") && "entry" !== t6.type,
        aj = "entry" !== t6.type && ax && !iH && iY?.workspace_id !== void 0
      t5[78] !== aj ? ((el = { enabled: aj }), (t5[78] = aj), (t5[79] = el)) : (el = t5[79])
      let { data: aS, isError: aA, isFetching: aM, fetchStatus: aC } = (0, h._U)(eK.G, t6, el),
        aI = ax && !iH ? tS(au) : ""
      t5[80] !== iY
        ? ((eu = "unknown"),
          iY?.workspace_id !== void 0 && (eu = null == iY.workspace_id ? "consumer_email" : "workspace_directory"),
          (t5[80] = iY),
          (t5[81] = eu))
        : (eu = t5[81])
      let aq = !iH && "workspace_directory" === eu,
        aE = ax && aq && "page" === t6.type && t6.id === t7 && null != ii,
        aO = (0, g.useSyncExternalStore)(
          aE ? ii.subscribe : ep.aW,
          aE ? ii.getSnapshot : ep.tb,
          ii?.getServerSnapshot ?? ep.tb,
        ),
        aL =
          "entry" !== t6.type && ax && aq && null != iY
            ? {
                ...t6,
                sharing: iY,
                query: aI,
                commenters: (0, ep.Qk)(aO),
                excludeUserIds: [
                  iY.owner.principal_id,
                  ...(null == iX ? [] : [iX.principal_id]),
                  ...(null == ih ? [] : [ih]),
                  ...iY.shares.flatMap(tv),
                  ...i8.flatMap(ty),
                ].map(t_),
              }
            : null,
        aN = (0, h._U)(ed.K, aL),
        aR = "space" === t6.type && "workspace_directory" === eu ? tA(aI) : null,
        a$ = aR ?? aI,
        aP = (0, eP.o)(a$, 150),
        aU = (0, h.Ul)(iY?.workspace_id != null && iY.workspace_id === im ? O.e : null),
        aD = ax && "entry" !== t6.type ? iY?.workspace_id : null
      t5[82] !== aI || t5[83] !== aD
        ? ((ex = { workspaceId: aD, query: aI }), (t5[82] = aI), (t5[83] = aD), (t5[84] = ex))
        : (ex = t5[84])
      let aT = (0, h._U)(L.$, ex)
      ;(t5[85] !== aI || t5[86] !== iY?.workspace_id || t5[87] !== aR
        ? ((eA = null == aR ? aI : { workspaceId: iY?.workspace_id, email: aR }),
          (t5[85] = aI),
          (t5[86] = iY?.workspace_id),
          (t5[87] = aR),
          (t5[88] = eA))
        : (eA = t5[88]),
        t5[89] !== im || t5[90] !== eA || t5[91] !== t6.id || t5[92] !== t6.type || t5[93] !== ih
          ? ((eD = {
              queryKey: ["pages-sharing-recipients", im, ih, t6.type, t6.id, eA],
              networkMode: "always",
              retry: eR.kh,
            }),
            (t5[89] = im),
            (t5[90] = eA),
            (t5[91] = t6.id),
            (t5[92] = t6.type),
            (t5[93] = ih),
            (t5[94] = eD))
          : (eD = t5[94]))
      let aF = eD
      t5[95] !== t6.id || t5[96] !== t6.type
        ? ((eT = function (e, t) {
            return j.Request.safePost("/pages/sharing/recipients", {
              requestBody: {
                entry_id: "entry" === t6.type ? t6.id : void 0,
                page_id: "page" === t6.type ? t6.id : void 0,
                space_id: "space" === t6.type ? t6.id : void 0,
                query: e,
                limit: 10,
              },
              signal: AbortSignal.any([t, AbortSignal.timeout(15e3)]),
            })
          }),
          (t5[95] = t6.id),
          (t5[96] = t6.type),
          (t5[97] = eT))
        : (eT = t5[97])
      let aW = eT
      t5[98] !== aI || t5[99] !== aW
        ? ((ez = (e) => {
            let { signal: t } = e
            return aW(aI, t)
          }),
          (t5[98] = aI),
          (t5[99] = aW),
          (t5[100] = ez))
        : (ez = t5[100])
      let az = ax && aI.length > 0 && a$ === aP
      t5[101] !== aF || t5[102] !== ez || t5[103] !== az
        ? ((eG = { ...aF, refetchOnReconnect: !0, staleTime: e$.D.ONE_MINUTE, queryFn: ez, enabled: az }),
          (t5[101] = aF),
          (t5[102] = ez),
          (t5[103] = az),
          (t5[104] = eG))
        : (eG = t5[104])
      let { data: aG, isPending: aQ, isFetching: aK, isError: aB, failureCount: aY } = (0, s.I)(eG)
      t5[105] !== aI || t5[106] !== aF || t5[107] !== is.queryClient || t5[108] !== aW || t5[109] !== aR
        ? ((eY = function (e) {
            if ((ap(e), null == aR)) return
            let t = tS(e)
            if (t === aI || tA(t) !== aR) return
            let i = is.queryClient.getQueryState(aF.queryKey)
            i?.fetchStatus === "idle" &&
              "pending" !== i.status &&
              is.queryClient.prefetchQuery({
                ...aF,
                staleTime: "error" === i.status ? 0 : e$.D.ONE_MINUTE,
                queryFn: (e) => {
                  let { signal: i } = e
                  return aW(t, i)
                },
              })
          }),
          (t5[105] = aI),
          (t5[106] = aF),
          (t5[107] = is.queryClient),
          (t5[108] = aW),
          (t5[109] = aR),
          (t5[110] = eY))
        : (eY = t5[110])
      let aH = eY
      t5[111] !== aG?.items || t5[112] !== aG?.items.filter
        ? ((eH = aG?.items.filter(tf)), (t5[111] = aG?.items), (t5[112] = aG?.items.filter), (t5[113] = eH))
        : (eH = t5[113])
      let aV = eH
      t5[114] !== aB || t5[115] !== aG?.unavailable_types
        ? ((eZ = aB || aG?.unavailable_types?.includes("user")),
          (t5[114] = aB),
          (t5[115] = aG?.unavailable_types),
          (t5[116] = eZ))
        : (eZ = t5[116])
      let aZ = eZ,
        aX = aZ || aY > 0,
        aJ = (0, h._U)(
          eo.matchingVisitedPeople$,
          "entry" !== t6.type && ax && aq && iY?.workspace_id === im && (aQ || ab) && !aX ? aI : "",
        ),
        a0 = ax && aI.length > 0 && (aQ || aK)
      ;(t5[117] !== iI || t5[118] !== iB || t5[119] !== iY
        ? ((eX = () => {
            if (iB) {
              if (null == ao.current) {
                let e = as.current
                ao.current =
                  e?.startPhase({
                    operation: "read_current_access",
                    phase: "current_access",
                    retryOrdinal: e.nextRetryOrdinal("current_access") ?? "initial",
                    searchMode: "none",
                  }) ?? null
              }
              return
            }
            let e = ao.current
            null != e &&
              ((ao.current = null), iI || null == iY ? e.fail("access_failed") : e.complete(iY.shares.length + 1))
          }),
          (eJ = [iI, iB, iY]),
          (t5[117] = iI),
          (t5[118] = iB),
          (t5[119] = iY),
          (t5[120] = eX),
          (t5[121] = eJ))
        : ((eX = t5[120]), (eJ = t5[121])),
        (0, g.useLayoutEffect)(eX, eJ),
        t5[122] !== eu
          ? ((e0 = () =>
              as.current?.startPhase({
                operation: "recipient_lookup",
                phase: "recipient_lookup",
                retryOrdinal: "initial",
                searchMode: "text_query",
                recipientLookupScope: eu,
              }) ?? null),
            (t5[122] = eu),
            (t5[123] = e0))
          : (e0 = t5[123]))
      let a1 = (0, g.useEffectEvent)(e0)
      ;(t5[124] !== aI || t5[125] !== a1
        ? ((e3 = () => {
            ;(ac.current?.cancel("superseded"), (ac.current = 0 === aI.length ? null : a1()))
          }),
          (t5[124] = aI),
          (t5[125] = a1),
          (t5[126] = e3))
        : (e3 = t5[126]),
        t5[127] !== aI ? ((e5 = [aI]), (t5[127] = aI), (t5[128] = e5)) : (e5 = t5[128]),
        (0, g.useLayoutEffect)(e3, e5),
        t5[129] !== a0 || t5[130] !== aI || t5[131] !== aV?.length || t5[132] !== aZ
          ? ((tI = () => {
              let e = ac.current
              null == e ||
                0 === aI.length ||
                a0 ||
                ((ac.current = null), aZ ? e.fail("search_failed") : e.complete(aV?.length ?? 0))
            }),
            (t5[129] = a0),
            (t5[130] = aI),
            (t5[131] = aV?.length),
            (t5[132] = aZ),
            (t5[133] = tI))
          : (tI = t5[133]))
      let a2 = aV?.length
      if (
        (t5[134] !== a0 || t5[135] !== aI || t5[136] !== a2 || t5[137] !== aZ
          ? ((tq = [a0, aI, a2, aZ]), (t5[134] = a0), (t5[135] = aI), (t5[136] = a2), (t5[137] = aZ), (t5[138] = tq))
          : (tq = t5[138]),
        (0, g.useLayoutEffect)(tI, tq),
        null == im || null == ih || !id)
      )
        return null
      t5[139] !== i7.size || t5[140] !== i8
        ? ((tE = () => (i7.size > 0 || i8.length > 0 ? (ar(!0), "deny") : "allow")),
          (t5[139] = i7.size),
          (t5[140] = i8),
          (t5[141] = tE))
        : (tE = t5[141])
      let a3 = tE
      t5[142] === Symbol.for("react.memo_cache_sentinel")
        ? ((tO = (e) => {
            an.current = e
          }),
          (t5[142] = tO))
        : (tO = t5[142])
      let a4 = tO
      t5[143] !== aa || t5[144] !== ir
        ? ((tL = aa
            ? (0, a.jsx)(eW, {
                getFallbackFocus: () => an.current?.closest('[role="dialog"]') ?? null,
                onCancel: () => ar(!1),
                onDiscard: ir,
              })
            : null),
          (t5[143] = aa),
          (t5[144] = ir),
          (t5[145] = tL))
        : (tL = t5[145])
      let a5 = tL
      if ("available" !== iu) {
        let e
        return (
          t5[146] !== ie ||
          t5[147] !== a5 ||
          t5[148] !== it ||
          t5[149] !== ir ||
          t5[150] !== a3 ||
          t5[151] !== a4 ||
          t5[152] !== t9 ||
          t5[153] !== t8
            ? ((e = (0, a.jsx)(e4, {
                title: t8,
                subtitle: t9,
                copyLink: ie,
                loadingAccessRows: it,
                onClose: ir,
                onRequestClose: a3,
                onPortalContainerChange: a4,
                confirmation: a5,
              })),
              (t5[146] = ie),
              (t5[147] = a5),
              (t5[148] = it),
              (t5[149] = ir),
              (t5[150] = a3),
              (t5[151] = a4),
              (t5[152] = t9),
              (t5[153] = t8),
              (t5[154] = e))
            : (e = t5[154]),
          e
        )
      }
      let a6 = i4.length > 0
      t5[155] !== iY?.shares || t5[156] !== iY?.shares.some
        ? ((tN = (e) => !iY?.shares.some((t) => (0, B.hk)(t.recipient) === (0, B.hk)(e.share.recipient))),
          (t5[155] = iY?.shares),
          (t5[156] = iY?.shares.some),
          (t5[157] = tN))
        : (tN = t5[157])
      let a7 = [...i4, ...ib.filter(tN).map(tg)].filter(th)
      t5[158] !== ib || t5[159] !== i7 || t5[160] !== iY?.shares || t5[161] !== iY?.shares.some
        ? ((tR = [...i7.values()].some(
            (e) =>
              "invite" === e.action &&
              ib.some((t) => "invite" === t.change.action && (0, B.hk)(t.share.recipient) === (0, B.hk)(e.recipient)) &&
              !iY?.shares.some((t) => (0, B.hk)(t.recipient) === (0, B.hk)(e.recipient)),
          )),
          (t5[158] = ib),
          (t5[159] = i7),
          (t5[160] = iY?.shares),
          (t5[161] = iY?.shares.some),
          (t5[162] = tR))
        : (tR = t5[162])
      let a8 = tR,
        a9 = e1.filter((e) => av?.includes(e)).map(tm)
      t5[163] !== iY?.shares || t5[164] !== iY?.shares.find
        ? ((t$ = function (e, t) {
            let i = iY?.shares.find((t) => t.share_id === e)
            return i?.status !== "active" || e1.indexOf(t) > e1.findIndex((e) => e === i.role_id)
          }),
          (t5[163] = iY?.shares),
          (t5[164] = iY?.shares.find),
          (t5[165] = t$))
        : (t$ = t5[165])
      let re = t$
      t5[166] !== i7 || t5[167] !== i8 || t5[168] !== re || t5[169] !== iH
        ? ((tP =
            iH &&
            (i8.length > 0 ||
              [...i7.values()].some(
                (e) => "invite" === e.action || ("update" === e.action && re(e.shareId, e.roleId)),
              ))),
          (t5[166] = i7),
          (t5[167] = i8),
          (t5[168] = re),
          (t5[169] = iH),
          (t5[170] = tP))
        : (tP = t5[170])
      let rt = tP,
        ri = new Map(iY?.shares.map(tp))
      for (let { change: e, share: t } of [...ik, ...iw]) {
        if (null == iY) break
        if ("remove" === e.action) {
          ri.delete(e.shareId)
          continue
        }
        let i = ri.get(t.share_id)
        if (null == i && [...ri.values()].some((e) => (0, B.hk)(e.recipient) === (0, B.hk)(t.recipient))) continue
        let a = "invite" === e.action ? e.invitee : void 0
        ri.set(t.share_id, {
          ...t,
          ...i,
          role_id: e.roleId,
          recipient_display_name: i?.recipient_display_name ?? t.recipient_display_name ?? a?.label,
          recipient_email: i?.recipient_email ?? t.recipient_email ?? a?.secondaryLabel,
          recipient_avatar_url: i?.recipient_avatar_url ?? t.recipient_avatar_url,
        })
      }
      let ra = new Set()
      for (let e of [...[...i7.values()].filter(tu), ...i4])
        if ("invite" === e.action && null != iY) {
          let t = (0, B.hk)(e.recipient),
            i = [...ri.values()].find((e) => (0, B.hk)(e.recipient) === t),
            a = i?.share_id ?? e.invitee?.id ?? t
          ;(ri.set(a, {
            ...i,
            share_id: a,
            inviter: i?.inviter ?? iY.owner,
            recipient: e.recipient,
            role_id: e.roleId,
            status: i?.status ?? "pending",
            recipient_display_name: i?.recipient_display_name ?? e.invitee?.label,
            recipient_email: i?.recipient_email ?? e.invitee?.secondaryLabel,
          }),
            i4.includes(e) && ra.add(a))
        } else if ("remove" === e.action) (ri.delete(e.shareId), ra.add(e.shareId))
        else if ("update" === e.action) {
          let t = ri.get(e.shareId)
          ;(null != t && ri.set(e.shareId, { ...t, role_id: e.roleId }), ra.add(e.shareId))
        }
      let rr = [...ri.values()].find(
        (e) =>
          "principal" === e.recipient.recipient_type &&
          "workspace" === e.recipient.principal_type &&
          e.recipient.principal_id === im,
      )
      if (t5[171] !== iw || t5[172] !== iY) {
        let e
        ;(t5[174] !== iY
          ? ((e = (e) => !iY?.shares.some((t) => t.share_id === e.share.share_id)), (t5[174] = iY), (t5[175] = e))
          : (e = t5[175]),
          (tU = new Set(iw.filter(e).map(td))),
          (t5[171] = iw),
          (t5[172] = iY),
          (t5[173] = tU))
      } else tU = t5[173]
      let rn = tU
      t5[176] !== ib || t5[177] !== im || t5[178] !== iY
        ? ((tD = (e) => {
            let t =
              "invite" === e.action
                ? e.recipient
                : (iY?.shares.find((t) => t.share_id === e.shareId)?.recipient ??
                  ib.find((t) => t.share.share_id === e.shareId)?.share.recipient)
            return t?.recipient_type === "principal" && "workspace" === t.principal_type && t.principal_id === im
          }),
          (t5[176] = ib),
          (t5[177] = im),
          (t5[178] = iY),
          (t5[179] = tD))
        : (tD = t5[179])
      let rs = i4.some(tD),
        rl = i7.get("workspace"),
        ro = rl?.action === "remove" ? null : (rl?.roleId ?? rr?.role_id),
        rc = null != rl && iY?.workspace_id != null && (!iP || !(0, Y.kH)(i$, rl)),
        rd = rc && 1 === i7.size && 0 === i8.length,
        ru = new Map()
      for (let [e, t] of i7) {
        let i =
          "invite" === t.action
            ? ([...ri.values()].find((e) => (0, B.hk)(e.recipient) === (0, B.hk)(t.recipient))?.share_id ?? e)
            : t.shareId
        ru.set(i, { key: e, change: t })
      }
      let rp = [...ri.values()].filter(
          (e) =>
            e !== rr &&
            ru.get(e.share_id)?.change.action !== "remove" &&
            ("principal" !== e.recipient.recipient_type ||
              "user" !== e.recipient.principal_type ||
              (e.recipient.principal_id.split("__")[0] !== ih?.split("__")[0] &&
                e.recipient.principal_id.split("__")[0] !== iY?.owner.principal_id.split("__")[0])),
        ),
        rm = rp.find((e) => (0, B.hk)(e.recipient) === `user:${iX?.principal_id}`),
        rh =
          "page" === t6.type &&
          !iU &&
          "fetching" !== iW &&
          !iZ?.complete &&
          ("idle" !== iW || !iP || !i$.inherited_access?.complete)
      t5[180] !== i$ || t5[181] !== iP || t5[182] !== iY
        ? ((tT = null != iY && iP && i$.workspace_id === iY.workspace_id ? (0, Y.Ql)(i$) : void 0),
          (t5[180] = i$),
          (t5[181] = iP),
          (t5[182] = iY),
          (t5[183] = tT))
        : (tT = t5[183])
      let rg = tT,
        rf = ak && iY?.workspace_id === im ? e1.findLast((e) => e === ro || e === rg) : void 0,
        r_ = function (e) {
          let t = ah ?? rf ?? q.F2.folder[(0, eC.x)(e.some(tc))]
          return av?.includes(t) ? t : (e1.find((e) => av?.includes(e)) ?? t)
        },
        ry = r_(i8)
      t5[184] === Symbol.for("react.memo_cache_sentinel")
        ? ((tF = function (e) {
            ;((af.current = e ?? "role-library-folder-viewer"), ag(e))
          }),
          (t5[184] = tF))
        : (tF = t5[184])
      let rv = tF,
        rx = [...ri.values()].find(
          (e) =>
            "principal" === e.recipient.recipient_type &&
            "user" === e.recipient.principal_type &&
            e.recipient.principal_id.split("__")[0] === ih?.split("__")[0],
        ),
        rb =
          rx?.recipient.recipient_type === "principal" && "user" === rx.recipient.principal_type
            ? rx.recipient.principal_id
            : (ig?.account_user_id ?? null)
      t5[185] !== il ? ((tW = il.formatMessage(tC.self)), (t5[185] = il), (t5[186] = tW)) : (tW = t5[186])
      let rw = tW
      iY?.caller_permissions.includes("library_folder.write")
        ? (tz = "editor")
        : iY?.caller_permissions.includes("library_file.comment")
          ? (tz = "commenter")
          : iY?.caller_permissions.includes("library_folder.read") && (tz = "viewer")
      let rk = iY?.shares.filter((e) => ru.get(e.share_id)?.change.action === "remove"),
        rj = new Map([...ri.values()].map(to))
      for (let e of (t5[187] !== iY?.shares
        ? ((tG = iY?.shares ?? []), (t5[187] = iY?.shares), (t5[188] = tG))
        : (tG = t5[188]),
      tG))
        ra.has(e.share_id) && rj.set((0, B.hk)(e.recipient), "existing")
      t5[189] !== r_
        ? ((tQ = function (e) {
            ;(i6((t) => ({ ...t, invitees: e })), (af.current = r_(e)))
          }),
          (t5[189] = r_),
          (t5[190] = tQ))
        : (tQ = t5[190])
      let rS = tQ,
        rA = function (e, t) {
          return {
            id: `group:${e}`,
            label: t,
            accessStatus: rj.get(`group:${e}`),
            avatar: (0, a.jsx)(eI.K, { groupId: e, size: "sm" }),
            recipient: { recipient_type: "principal", principal_type: "group", principal_id: e },
          }
        },
        rM = function (e, t, i) {
          let a = `user:${e}`
          return {
            id: a,
            colorKey: e,
            label: iY?.workspace_id == null ? (i ?? aI) : t,
            secondaryLabel: i ?? void 0,
            accessStatus:
              e === iY?.owner.principal_id || e.split("__")[0] === ih?.split("__")[0] ? "existing" : rj.get(a),
            recipient: { recipient_type: "principal", principal_type: "user", principal_id: e },
          }
        },
        rC = aq
          ? aN.picks.map((e) =>
              e
                .filter((e) => !rj.has(`user:${e.account_user_id}`))
                .map((e) => rM(e.account_user_id, e.name ?? e.email ?? e.account_user_id, e.email)),
            )
          : void 0,
        rI = aV
          ?.map((e) => rM(e.id, e.display_name, e.detail))
          .filter((e) => !i8.some((t) => t.id === e.id) && ("" !== aI || null == e.accessStatus)),
        rq = aJ.map((e) => rM(e.account_user_id, e.name ?? e.email ?? e.account_user_id, e.email)),
        rE = aT.map((e) => {
          let { accountUserId: t, ...i } = e
          return { ...rM(t, i.label, null), ...i }
        }),
        rO =
          "entry" !== t6.type &&
          ax &&
          (ab ? aS?.suggestions == null : aw) &&
          iY?.workspace_id !== void 0 &&
          !aA &&
          (!aM || ab) &&
          "paused" !== aC
            ? aS?.items
                .filter(
                  (e) =>
                    (!ab || "user" === e.type || "workspace_group" === e.type) &&
                    (null != iY.workspace_id || ("user" === e.type && !!e.detail?.trim())),
                )
                .map((e) =>
                  "workspace_group" === e.type ? rA(e.id, e.display_name) : rM(e.id, e.display_name, e.detail),
                )
                .filter((e) => null == tk(iG, e.recipient))
            : void 0,
        rL =
          "entry" !== t6.type && ax && ab && iY?.workspace_id !== void 0 && !aA && "paused" !== aC
            ? aS?.suggestions
                ?.filter(
                  (e) =>
                    ("user" === e.type || "workspace_group" === e.type) &&
                    (null != iY.workspace_id || ("user" === e.type && !!e.detail?.trim())),
                )
                .map((e) => ({
                  ...("user" === e.type ? rM(e.id, e.display_name, e.detail) : rA(e.id, e.display_name)),
                  suggestion: e,
                }))
                .filter((e) => null == tk(iY, e.recipient))
            : void 0
      t5[191] === Symbol.for("react.memo_cache_sentinel")
        ? ((tK = function (e, t) {
            i6((i) => {
              let a = new Map(i.draft)
              return (null == t ? a.delete(e) : a.set(e, t), { ...i, draft: a })
            })
          }),
          (t5[191] = tK))
        : (tK = t5[191])
      let rN = tK
      t5[192] !== iY
        ? ((tB = function (e) {
            let t = iY?.shares.find((t) =>
              "invite" === e.action
                ? null != e.invitee && (0, B.hk)(t.recipient) === (0, B.hk)(e.recipient)
                : t.share_id === e.shareId,
            )
            return t?.role_id === "role-library-folder-editor" &&
              "principal" === t.recipient.recipient_type &&
              ("group" === t.recipient.principal_type || "workspace" === t.recipient.principal_type) &&
              ("remove" === e.action || "role-library-folder-editor" !== e.roleId)
              ? t
              : void 0
          }),
          (t5[192] = iY),
          (t5[193] = tB))
        : (tB = t5[193])
      let rR = tB,
        r$ = [...i7.values()].map(rR).filter(tl),
        rP = 1 === r$.length ? r$[0] : void 0,
        rU = (e) => {
          let t, i, a
          if (
            !ax ||
            "available" !== is.get(I.v0) ||
            a6 ||
            rt ||
            a8 ||
            rd ||
            (0 === i7.size && 0 === i8.length) ||
            (i8.length > 0 && !a9.some((e) => e.value === ry)) ||
            is.get(P.spaceAccountId$) !== im ||
            is.get(w.chatGptAuthenticatedUserId$) !== ih
          )
            return
          if (
            !(void 0 !== e && e) &&
            iY?.owner.principal_id.split("__")[0] !== ih.split("__")[0] &&
            (rx?.status !== "active" || "role-library-folder-editor" !== rx.role_id) &&
            r$.length > 0
          )
            return void ai(!0)
          let r = !1,
            n = (0, P.watchSpaceAccount)(is, im, ih),
            s = n.signal,
            l = new Map(i7)
          for (let [e, t] of l) {
            if ("invite" !== t.action || null == t.invitee) continue
            let i = iY?.shares.find((e) => (0, B.hk)(e.recipient) === (0, B.hk)(t.recipient))
            null != i &&
              (l.delete(e), l.set(i.share_id, { action: "update", shareId: i.share_id, roleId: t.roleId, target: t6 }))
          }
          for (let e of i8)
            l.set(e.id, { action: "invite", recipient: e.recipient, invitee: e, roleId: ak ? ry : r_([e]), target: t6 })
          let o = u()(
            [...l],
            (e) => {
              let [, t] = e
              return !!rR(t)
            },
            ts,
            tn,
          )
          ad.current?.cancel("superseded")
          let c =
            "entry" === t6.type
              ? void 0
              : (function (e, t, i, a, r = []) {
                  let n,
                    s = performance.now(),
                    l = [...new Set(r)].map((i) =>
                      (0, ey.r)(e, {
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
                    u = !1,
                    p = !1,
                    m = i?.telemetry.nextRetryOrdinal("confirmation"),
                    h = new Set(),
                    g = (e) => {
                      if (("mutation" === e && (p = !0), null == i || null == m)) return null
                      let t = i.telemetry.startPhase({
                          operation: i.operation,
                          phase: e,
                          retryOrdinal: m,
                          searchMode: "none",
                        }),
                        a = { measurement: t, phase: e }
                      return (
                        h.add(a),
                        {
                          requestOptions: t.requestOptions,
                          complete: (e) => {
                            ;(h.delete(a), t.complete(e))
                          },
                          fail: (i, r) => {
                            ;(h.delete(a), "roster_refresh" !== e && (n = i), t.fail(i, r))
                          },
                          cancel: (e, i) => {
                            ;(h.delete(a), t.cancel(e, i))
                          },
                        }
                      )
                    },
                    f = g("durable_completion"),
                    _ = (i, a) => {
                      if (u) return
                      ;((u = !0),
                        clearTimeout(x),
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
                    x = setTimeout(() => _("timeout", "deadline"), 3e4)
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
                        for (let t of (a?.(e ? "partially_confirmed" : "unknown"), h))
                          "durable_completion" !== t.phase &&
                            "roster_refresh" !== t.phase &&
                            (t.measurement.fail(ew(t.phase), p && "preflight" !== t.phase),
                            (n = ew(t.phase)),
                            h.delete(t))
                        ;(f?.fail(n ?? (p ? "request_failed" : "preflight_failed"), p),
                          _(e ? "partial_failure" : "failure", "save_failed"))
                      },
                      cancel: (e = "dialog_closed") => {
                        if ("dialog_closed" === e || "context_changed" === e) for (let e of l) e.dispose()
                        else if ("superseded" === e) for (let e of l) e.finish("superseded")
                        if ("dialog_closed" !== e && "superseded" !== e) {
                          for (let t of h) (t.measurement.cancel(e, p), h.delete(t))
                          a?.("cancelled")
                        }
                        _("cancelled", e)
                      },
                      startPhase: g,
                    }
                  )
                })(
                  (0, b.dj)(is),
                  { target_type: t6.type, backing_type: "drive" },
                  null == as.current ? void 0 : { operation: "permission_mutation", telemetry: as.current },
                  ((i =
                    null == (t = is.get(eg.DO)) ? null : (0, eg.hI)(is, t, void 0, is.get(w.PO).accountUserId ?? null)),
                  (a = !1),
                  i?.signal.addEventListener("abort", () => i.stop(), { once: !0 }),
                  (e) => {
                    if (!a && ((a = !0), i?.stop(), null != i && !i.signal.aborted))
                      try {
                        ;(0, eh.yy)(is, em.CodexSpacesSharingChangeCompleted, {
                          target:
                            "page" === t6.type
                              ? em.CodexSpacesCreationTarget.CODEX_SPACES_CREATION_TARGET_PAGE
                              : em.CodexSpacesCreationTarget.CODEX_SPACES_CREATION_TARGET_SPACE,
                          operation: {
                            permission_mutation:
                              em.CodexSpacesSharingOperation.CODEX_SPACES_SHARING_OPERATION_PERMISSIONS,
                            link_policy_mutation:
                              em.CodexSpacesSharingOperation.CODEX_SPACES_SHARING_OPERATION_LINK_POLICY,
                            mixed_mutation: em.CodexSpacesSharingOperation.CODEX_SPACES_SHARING_OPERATION_MIXED,
                          }.permission_mutation,
                          outcome: {
                            confirmed: em.CodexSpacesSharingOutcome.CODEX_SPACES_SHARING_OUTCOME_CONFIRMED,
                            unknown: em.CodexSpacesSharingOutcome.CODEX_SPACES_SHARING_OUTCOME_UNKNOWN,
                            partially_confirmed:
                              em.CodexSpacesSharingOutcome.CODEX_SPACES_SHARING_OUTCOME_PARTIALLY_CONFIRMED,
                            cancelled: em.CodexSpacesSharingOutcome.CODEX_SPACES_SHARING_OUTCOME_CANCELLED,
                          }[e],
                          ...("page" === t6.type ? (0, ef.UZ)(is, t6.id) : { spaceId: t6.id }),
                        })
                      } catch {}
                  }),
                  o.map((e) => {
                    let [, t] = e
                    return "remove" === t.action
                      ? "revoke_access"
                      : "update" === t.action
                        ? "change_role"
                        : "space" === t6.type
                          ? "invite_space"
                          : "share_page"
                  }),
                )
          ad.current = c ?? null
          let d = () => {
            ;(c?.complete(), ae({ id: crypto.randomUUID(), measurement: c, changes: o.map(tr) }))
          }
          ;(i6({ draft: new Map(), invitees: [] }),
            ap(""),
            null != am.current && am.current.scrollIntoView({ block: "start" }))
          let p = (e) => {
              let { data: t, isSuccess: i } = is.get(B.e2, t6),
                { queryKey: a } = is.query.snapshot(B.e2, t6)
              return i && is.queryClient.getQueryState(a)?.isInvalidated === !1
                ? e.filter((e) => {
                    let [, i] = e
                    return (
                      "invite" !== i.action ||
                      !t.shares.some((e) => (0, B.hk)(e.recipient) === (0, B.hk)(i.recipient) && e.role_id === i.roleId)
                    )
                  })
                : e
            },
            m = (e) => {
              let t = ak || af.current !== ry
              i6((i) => {
                let a = new Map(i.draft)
                for (let [i, r] of e) ("invite" !== r.action || i7.has(i) || t) && !a.has(i) && a.set(i, r)
                return {
                  draft: a,
                  invitees: t
                    ? i.invitees
                    : [
                        ...i.invitees,
                        ...i8.filter(
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
          i2.mutateAsync({
            changes: o.map(ta),
            signal: s,
            telemetry: c,
            initialSharing: 0 !== i4.length || al.current ? void 0 : iY,
            workspaceChange: iY?.workspace_id != null ? rl : void 0,
            workspaceChangeIndex: o.findIndex(ti),
          })
            .then((e) => {
              let { results: t, workspaceSharingDisabled: i } = e
              if ((t.some(tt) && (al.current = !0), s.aborted || !("entry" === t6.type || is.get($.pagesEnabled$))))
                return void c?.cancel("context_changed")
              let a = p(o.filter((e, i) => "rejected" === t[i].status)),
                n = i && a.some(te)
              if (((r = a.length < o.length), a.length > 0)) {
                if ((m(n ? a.filter(e9) : a), c?.fail(r), n))
                  return void is
                    .get(C.Id)
                    .danger(
                      il.formatMessage({
                        id: "codex.space.driveSharing.workspaceLinksUnavailable",
                        defaultMessage:
                          "Your admin has turned off workspace-link sharing for your account. Ask your admin to enable workspace links.",
                      }),
                      { errorAnalytics: { toastId: "sharingDialog.mutate.saveError" } },
                    )
                let e = a[0][1],
                  i = t[o.indexOf(a[0])]
                i1(e, "rejected" === i.status ? i.reason : null)
              } else d()
            })
            .catch(() => {
              if (((al.current = !0), !s.aborted && ("entry" === t6.type || is.get($.pagesEnabled$)))) {
                let e = p(o)
                if (0 === e.length) return void d()
                ;(m(e),
                  c?.fail(r || e.length < o.length),
                  is
                    .get(C.Id)
                    .danger(il.formatMessage(tC.saveError), {
                      errorAnalytics: { toastId: "sharingDialog.mutate.saveError" },
                    }))
              } else c?.cancel("context_changed")
            })
            .finally(() => n.stop())
        },
        rD = e_.U,
        rT =
          iA || iI || null == iY
            ? null
            : (0, a.jsxs)(M.OO, {
                className: "gap-2",
                children: [
                  iH &&
                    (0, a.jsx)(A.l, {
                      role: "status",
                      primaryCtaText: (0, a.jsx)(f.A, {
                        id: "codex.pages.sharing.paused.check",
                        defaultMessage: "Check again",
                      }),
                      onPrimaryCtaClick: () => void iE(),
                      content: (0, a.jsx)(f.A, {
                        id: "codex.pages.sharing.paused.notice",
                        defaultMessage:
                          "New sharing is temporarily paused. People who already have access can still open this {kind, select, space {space} other {page}}. Try again later.",
                        values: { kind: t6.type },
                      }),
                    }),
                  (0, B.TO)(iY) &&
                    (0, a.jsx)(eO.B, {
                      accountId: im,
                      autoFocus: !1,
                      disabled: !ax || iH,
                      getGroupRecipient: null == ig ? void 0 : (e) => rA(e.id, e.name),
                      getTeamRecipient: null == ig ? void 0 : (e) => rA(e.id, e.name),
                      getPersonRecipient: aq
                        ? (e) => {
                            let t = rM(e.account_user_id, e.name ?? e.email ?? e.account_user_id, e.email)
                            return null == tk(iG, t.recipient) ? t : void 0
                          }
                        : void 0,
                      isLoading: (ab && "" === aI && aM) || (!aX && !aN.isError && (a0 || aN.isLoading)),
                      searchFailed: aX || aN.isError,
                      contextualPicks: rC,
                      loadingLabel: il.formatMessage({
                        id: "codex.space.driveSharing.searching",
                        defaultMessage: "Searching for people or teams",
                      }),
                      emptyMessage: (0, a.jsx)(f.A, {
                        id: "codex.space.driveSharing.noMatchingRecipients",
                        defaultMessage: "No matching people or teams",
                      }),
                      query: au,
                      peopleQuery: aI,
                      options: rI,
                      visitedOptions: rq,
                      dotOptions: rE,
                      recentOptions: rO,
                      suggestedOptions: rL,
                      suggestionsAsOf: aS?.suggestions_as_of,
                      improvedSuggestions: ab,
                      getRemoveLabel: (e) =>
                        il.formatMessage(
                          { id: "shareDialog.removeInvitee", defaultMessage: "Remove {name} from the invitation" },
                          { name: e.label },
                        ),
                      selectedOptions: i8,
                      trailingContent:
                        i8.length > 0 &&
                        (0, a.jsx)(eE.e, {
                          disabled: !ax || iH,
                          options: a9,
                          value: ry,
                          variant: "inline",
                          renderLabel: e8,
                          onChange: rv,
                        }),
                      onQueryChange: aH,
                      onChange: rS,
                    }),
                ],
              })
      ;(t5[194] !== rU ? ((tY = () => rU()), (t5[194] = rU), (t5[195] = tY)) : (tY = t5[195]),
        t5[196] === Symbol.for("react.memo_cache_sentinel")
          ? ((tH = () => {
              ;(i6({ draft: new Map(), invitees: [] }), rv(void 0), ap(""))
            }),
            (t5[196] = tH))
          : (tH = t5[196]))
      let rF = i7.size > 0,
        rW = i8.length > 0
      ;(t5[197] === Symbol.for("react.memo_cache_sentinel")
        ? ((tV = (0, a.jsx)(f.A, { id: "codex.pages.sharing.share", defaultMessage: "Share" })), (t5[197] = tV))
        : (tV = t5[197]),
        t5[198] !== ax ||
        t5[199] !== rt ||
        t5[200] !== a8 ||
        t5[201] !== i8.length ||
        t5[202] !== a6 ||
        t5[203] !== rd ||
        t5[204] !== ry ||
        t5[205] !== a9
          ? ((tZ = a6 || rt || a8 || rd || !ax || (i8.length > 0 && !a9.some((e) => e.value === ry))),
            (t5[198] = ax),
            (t5[199] = rt),
            (t5[200] = a8),
            (t5[201] = i8.length),
            (t5[202] = a6),
            (t5[203] = rd),
            (t5[204] = ry),
            (t5[205] = a9),
            (t5[206] = tZ))
          : (tZ = t5[206]),
        t5[207] !== ie || t5[208] !== ir || t5[209] !== rF || t5[210] !== rW || t5[211] !== tZ
          ? ((tX = (0, a.jsx)(eq.r, {
              onCancel: tH,
              onClose: ir,
              hasPendingAccessChange: rF,
              hasPendingInvitees: rW,
              inviteLabel: tV,
              isSaving: !1,
              disabled: tZ,
              copyLink: ie,
            })),
            (t5[207] = ie),
            (t5[208] = ir),
            (t5[209] = rF),
            (t5[210] = rW),
            (t5[211] = tZ),
            (t5[212] = tX))
          : (tX = t5[212]),
        t5[213] !== a5 || t5[214] !== tX
          ? ((tJ = (0, a.jsxs)(a.Fragment, { children: [tX, a5] })), (t5[213] = a5), (t5[214] = tX), (t5[215] = tJ))
          : (tJ = t5[215]))
      let rz =
        at &&
        ax &&
        (0, a.jsx)(eF, {
          target: t6,
          teamName:
            (rP?.recipient.recipient_type === "principal" &&
              "group" === rP.recipient.principal_type &&
              rP.recipient_display_name?.trim()) ||
            void 0,
          onCancel: () => ai(!1),
          onConfirm: () => {
            ;(ai(!1), rU(!0))
          },
        })
      ;(t5[216] !== iv || t5[217] !== ix.length
        ? ((t0 =
            ix.length > 0 &&
            (0, a.jsx)(M.OO, {
              children: (0, a.jsx)(A.l, {
                role: "status",
                content: (0, a.jsx)(f.A, {
                  id: "codex.space.driveSharing.confirmationUnknown",
                  defaultMessage: "We couldn\u2019t confirm these sharing changes yet",
                }),
                primaryCtaText: (0, a.jsx)(f.A, {
                  id: "codex.space.driveSharing.checkAgain",
                  defaultMessage: "Check again",
                }),
                onPrimaryCtaClick: () => iv.checkAgain(),
              }),
            })),
          (t5[216] = iv),
          (t5[217] = ix.length),
          (t5[218] = t0))
        : (t0 = t5[218]),
        t5[219] !== ik.length || t5[220] !== iE
          ? ((t1 =
              ik.length > 0 &&
              (0, a.jsx)(M.OO, {
                children: (0, a.jsx)(A.l, {
                  role: "status",
                  content: (0, a.jsx)(f.A, {
                    id: "codex.space.driveSharing.completedAwaitingRoster",
                    defaultMessage: "Changes saved. The permissions list hasn\u2019t refreshed yet",
                  }),
                  primaryCtaText: (0, a.jsx)(f.A, {
                    id: "codex.space.driveSharing.refreshSpacePermissions",
                    defaultMessage: "Refresh permissions",
                  }),
                  onPrimaryCtaClick: () => void iE(),
                }),
              })),
            (t5[219] = ik.length),
            (t5[220] = iE),
            (t5[221] = t1))
          : (t1 = t5[221]),
        t5[222] !== iI || t5[223] !== iA || t5[224] !== iE || t5[225] !== iY
          ? ((t2 =
              (iA || iI || null == iY) &&
              (0, a.jsx)(M.OO, {
                children: (0, a.jsx)(ea.DN, {
                  isLoading: iA,
                  onRetry: () => {
                    ;(i6({ draft: new Map(), invitees: [] }), ap(""), iE())
                  },
                }),
              })),
            (t5[222] = iI),
            (t5[223] = iA),
            (t5[224] = iE),
            (t5[225] = iY),
            (t5[226] = t2))
          : (t2 = t5[226]))
      let rG =
        !iA &&
        !iI &&
        null != iY &&
        (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(eV, {
              sharing: { ...iY, inherited_workspace_link_access: iK },
              loading: iU || "fetching" === iW,
              supportsCommenter: ay,
              isWorkspace: null != iY.workspace_id || null != ig,
              directRole: ro,
              hasDirectOverride: (null != rr || rl?.action === "invite") && rl?.action !== "remove",
              disabled: !ax || rs || (null != rr && rn.has(rr.share_id)),
              workspaceName: ig?.name?.trim() || void 0,
              newSharingPaused: iH,
              workspaceLinkSharingAvailable: ip,
              onChange: (e) => {
                e !== (rr?.role_id ?? null) || ib.some((e) => e.share.share_id === rr?.share_id)
                  ? null == e
                    ? rN("workspace", null == rr ? null : { action: "remove", shareId: rr.share_id, target: t6 })
                    : rN(
                        "workspace",
                        null == rr
                          ? {
                              action: "invite",
                              recipient: { recipient_type: "principal", principal_type: "workspace", principal_id: im },
                              roleId: e,
                              target: t6,
                            }
                          : { action: "update", shareId: rr.share_id, roleId: e, target: t6 },
                      )
                  : rN("workspace", null)
              },
              onRetry: () => void iz(),
              onClose: ir,
            }),
            rc &&
              iG?.inherited_workspace_link_access?.complete &&
              (0, a.jsx)(M.OO, {
                children: (0, a.jsx)("p", {
                  className: "text-sm text-secondary",
                  children: (0, a.jsx)(f.A, {
                    id: "codex.pages.sharing.workspaceLink.changed.helpText",
                    defaultMessage: "Parent access changed. Choose a higher role or use parent access before saving",
                  }),
                }),
              }),
            (0, a.jsx)(ei.p, {
              children: (0, a.jsxs)("div", {
                ref: am,
                className: "flex flex-col gap-1",
                children: [
                  (0, a.jsx)(et.M, {
                    entries: [
                      ...(null == iX || null != rm
                        ? []
                        : [
                            {
                              id: iX.principal_id,
                              label: il.formatMessage(tC.owner),
                              isOwner: !0,
                              row: (0, a.jsx)(tM, {
                                accountUserId: iX.principal_id,
                                displayName: iX.display_name,
                                permission: "owner",
                              }),
                            },
                          ]),
                      ...(iY.owner.principal_id !== iX?.principal_id && iY.owner.principal_id.split("__")[0] !== iJ
                        ? [
                            {
                              id: iY.owner.principal_id,
                              label: iY.owner_display_name ?? "",
                              row: (0, a.jsx)(tM, {
                                accountUserId: iY.owner.principal_id,
                                displayName: iY.owner_display_name,
                                permission: "editor",
                              }),
                            },
                          ]
                        : []),
                      ...(i0 === iJ
                        ? []
                        : [
                            {
                              id: `self:${ih}`,
                              label: il.formatMessage(tC.self),
                              isSelf: !0,
                              row: (0, a.jsx)(eQ, {
                                accountUserId: rb,
                                avatar: (0, a.jsx)(ec.Y, { accountUserId: ih, name: rw, size: "group" }),
                                label: rw,
                                secondaryLabel: rx?.status === "pending" ? (0, a.jsx)(f.A, { ...tC.pending }) : void 0,
                                trailingContent: (0, a.jsx)("span", {
                                  className: "pe-2 text-sm text-tertiary",
                                  children: (0, a.jsx)(V.u, { permission: tz }),
                                }),
                              }),
                            },
                          ]),
                      ...rp.map((e) => {
                        let t = a7.find((t) => (0, B.hk)(t.recipient) === (0, B.hk)(e.recipient)),
                          { key: i, change: r } = ru.get(e.share_id) ?? {
                            key: t?.invitee?.id ?? e.share_id,
                            change: void 0,
                          },
                          n = aU?.find(
                            (t) =>
                              "principal" === e.recipient.recipient_type &&
                              "user" === e.recipient.principal_type &&
                              t.service_account_account_user_id === e.recipient.principal_id,
                          ),
                          s =
                            null == iY.workspace_id && "pending" === e.status
                              ? (e.recipient_email ??
                                ("email" === e.recipient.recipient_type
                                  ? e.recipient.email
                                  : il.formatMessage(tC.pending)))
                              : (e.recipient_display_name ??
                                e.recipient_email ??
                                ("email" === e.recipient.recipient_type
                                  ? e.recipient.email
                                  : e.recipient.principal_id)),
                          l = !ra.has(e.share_id) && r?.action !== "invite" && "pending" === e.status,
                          o = e.recipient_email ?? void 0
                        l
                          ? (o = il.formatMessage(tC.pending))
                          : (null != n || null != e.recipient_dot_id) &&
                            (o = (0, a.jsx)(f.A, {
                              id: "sharing.dotLabel",
                              defaultMessage: "{dot}",
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
                          u = (0, E.xF)(n) ?? ("active" === e.status && null != d ? e.recipient_avatar_url : null),
                          p = e === rm
                        return {
                          id: e.share_id,
                          label: s,
                          isOwner: p,
                          isTeam: null != c,
                          row: (0, a.jsx)(eQ, {
                            accountUserId: d,
                            avatar:
                              null != c
                                ? (0, a.jsx)(eI.K, { groupId: c })
                                : (0, a.jsx)(ec.Y, { accountUserId: d, avatarUrl: u, name: s, size: "group" }),
                            label: s,
                            labelSuffix: p
                              ? (0, a.jsx)("span", {
                                  className: "ms-2 font-normal text-token-text-tertiary",
                                  children: il.formatMessage(tC.owner),
                                })
                              : void 0,
                            secondaryLabel: o,
                            team: null == c || l ? void 0 : { accountId: im, groupId: c },
                            trailingContent: (0, a.jsx)(eE.e, {
                              disabled: !ax || !(0, B.wX)(iY, e.recipient, ih, im),
                              variant: "inline",
                              options: iH ? a9.map((t) => ({ ...t, disabled: re(e.share_id, t.value) })) : a9,
                              value: null != r && "remove" !== r.action ? r.roleId : e.role_id,
                              renderLabel: e7,
                              onChange: (a) => {
                                let n = a9.find((e) => e.value === a)?.value
                                if (null != n) {
                                  let a = r?.action === "invite" ? r : t
                                  if (null != a)
                                    return void rN(
                                      i,
                                      n === (t?.roleId ?? iY.shares.find((t) => t.share_id === e.share_id)?.role_id)
                                        ? null
                                        : { ...a, roleId: n },
                                    )
                                  rN(
                                    i,
                                    n !== e.role_id ||
                                      ik.some((t) => t.share.share_id === e.share_id) ||
                                      ib.some((t) => t.share.share_id === e.share_id)
                                      ? { action: "update", roleId: n, shareId: e.share_id, target: t6 }
                                      : null,
                                  )
                                }
                              },
                              removeLabel: (0, a.jsx)(f.A, {
                                id: "codex.space.driveSharing.remove",
                                defaultMessage: "Remove access",
                              }),
                              onRemoveAccess:
                                ra.has(e.share_id) || rn.has(e.share_id) || null != t
                                  ? void 0
                                  : () =>
                                      rN(
                                        i,
                                        r?.action !== "invite" || iY.shares.some((t) => t.share_id === e.share_id)
                                          ? { action: "remove", shareId: e.share_id, target: t6 }
                                          : null,
                                      ),
                            }),
                          }),
                        }
                      }),
                    ],
                  }),
                  (0, a.jsx)(X, {
                    pageId: "page" === t6.type ? (t7 ?? null) : null,
                    inheritedAccess: iZ ?? F,
                    loadMissingAppearance: null == F,
                  }),
                  rh &&
                    (0, a.jsxs)("div", {
                      className: "flex items-center justify-between gap-3 text-sm text-secondary",
                      role: "status",
                      children: [
                        (0, a.jsx)(f.A, {
                          id: "codex.pages.sharing.inheritedAccess.unavailable",
                          defaultMessage: "Couldn\u2019t verify inherited access",
                        }),
                        (0, a.jsx)(n.$, {
                          size: "sm",
                          color: "secondary",
                          variant: "ghost",
                          disabled: "paused" === iW,
                          onClick: () => void iz(),
                          children: (0, a.jsx)(f.A, {
                            id: "codex.pages.sharing.inheritedAccess.refresh",
                            defaultMessage: "Refresh inherited access",
                          }),
                        }),
                      ],
                    }),
                ],
              }),
            }),
            ia,
            m()(rk, e6).map((e) => {
              let t = tj(iZ, e.recipient),
                i = e.recipient_display_name?.trim() || e.recipient_email?.trim()
              return null != t && i
                ? (0, a.jsx)(
                    M.OO,
                    {
                      children: (0, a.jsx)("p", {
                        className: "text-xs text-secondary select-none",
                        children: (0, a.jsx)(f.A, {
                          id: "codex.space.driveSharing.remainingAccess",
                          defaultMessage:
                            "{name} will still have access through <source>{kind, select, page {a parent page} entry {a parent folder} other {the space}}</source>",
                          values: {
                            name: i,
                            kind: t.kind,
                            source: (e) =>
                              (0, a.jsx)(v.N_, {
                                className: "cursor-interaction text-link-primary! underline underline-offset-2",
                                to:
                                  "entry" === t.kind
                                    ? `/space/d/${encodeURIComponent(`libdir_${t.id}`)}`
                                    : `/${"page" === t.kind ? "space" : "spaces"}/${encodeURIComponent(t.id)}`,
                                onClick: ir,
                                children: e,
                              }),
                          },
                        }),
                      }),
                    },
                    (0, B.hk)(e.recipient),
                  )
                : null
            }),
          ],
        })
      return (
        t5[227] !== ik.length ||
        t5[228] !== i9 ||
        t5[229] !== iI ||
        t5[230] !== iA ||
        t5[231] !== a6 ||
        t5[232] !== i4 ||
        t5[233] !== iY
          ? ((t3 =
              i9?.measurement != null &&
              !a6 &&
              0 === ik.length &&
              !iA &&
              !iI &&
              0 === i4.length &&
              null != iY &&
              i9.changes.every((e) => {
                if ("invite" === e.action)
                  return iY.shares.some(
                    (t) => (0, B.hk)(t.recipient) === (0, B.hk)(e.recipient) && t.role_id === e.roleId,
                  )
                let t = iY.shares.find((t) => t.share_id === e.shareId)
                return "remove" === e.action ? null == t : t?.role_id === e.roleId
              }) &&
              (0, a.jsx)(eM.X, { requireVisibleAtPaint: !0, onPaint: i9.measurement.paintOpportunity }, i9.id)),
            (t5[227] = ik.length),
            (t5[228] = i9),
            (t5[229] = iI),
            (t5[230] = iA),
            (t5[231] = a6),
            (t5[232] = i4),
            (t5[233] = iY),
            (t5[234] = t3))
          : (t3 = t5[234]),
        t5[235] !== rD ||
        t5[236] !== ab ||
        t5[237] !== iA ||
        t5[238] !== it ||
        t5[239] !== a3 ||
        t5[240] !== a4 ||
        t5[241] !== t9 ||
        t5[242] !== rT ||
        t5[243] !== tY ||
        t5[244] !== tJ ||
        t5[245] !== rz ||
        t5[246] !== t0 ||
        t5[247] !== t1 ||
        t5[248] !== t2 ||
        t5[249] !== rG ||
        t5[250] !== t3 ||
        t5[251] !== t8
          ? ((t4 = (0, a.jsxs)(rD, {
              containSuggestions: ab,
              headerContent: rT,
              isLoading: iA,
              loadingAccessRows: it,
              onSubmit: tY,
              onRequestClose: a3,
              onPortalContainerChange: a4,
              title: t8,
              subtitle: t9,
              footer: tJ,
              children: [rz, t0, t1, t2, rG, t3],
            })),
            (t5[235] = rD),
            (t5[236] = ab),
            (t5[237] = iA),
            (t5[238] = it),
            (t5[239] = a3),
            (t5[240] = a4),
            (t5[241] = t9),
            (t5[242] = rT),
            (t5[243] = tY),
            (t5[244] = tJ),
            (t5[245] = rz),
            (t5[246] = t0),
            (t5[247] = t1),
            (t5[248] = t2),
            (t5[249] = rG),
            (t5[250] = t3),
            (t5[251] = t8),
            (t5[252] = t4))
          : (t4 = t5[252]),
        t4
      )
    }
    function e6(e) {
      return (0, B.hk)(e.recipient)
    }
    function e7(e) {
      return (0, a.jsx)(V.u, { permission: (0, q.rP)(e, "folder") })
    }
    function e8(e) {
      return (0, a.jsx)(V.u, { permission: (0, q.rP)(e, "folder") })
    }
    function e9(e) {
      let [t] = e
      return "workspace" !== t
    }
    function te(e) {
      let [t] = e
      return "workspace" === t
    }
    function tt(e) {
      return "rejected" === e.status
    }
    function ti(e) {
      let [t, i] = e
      return "workspace" === t && "remove" !== i.action
    }
    function ta(e) {
      let [, t] = e
      return t
    }
    function tr(e) {
      let [, t] = e
      return t
    }
    function tn(e) {
      let [, t] = e
      return "invite" !== t.action
    }
    function ts(e) {
      let [t] = e
      return "workspace" === t
    }
    function tl(e) {
      return null != e
    }
    function to(e) {
      return [(0, B.hk)(e.recipient), "pending" === e.status ? "pending" : "existing"]
    }
    function tc(e) {
      return "group" === e.recipient.principal_type
    }
    function td(e) {
      return e.share.share_id
    }
    function tu(e) {
      return "invite" === e.action && null != e.invitee
    }
    function tp(e) {
      return [e.share_id, e]
    }
    function tm(e) {
      return { value: e }
    }
    function th(e) {
      return "invite" === e.action
    }
    function tg(e) {
      let { change: t } = e
      return t
    }
    function tf(e) {
      return "user" === e.type
    }
    function t_(e) {
      return e.split("__")[0]
    }
    function ty(e) {
      let { recipient: t } = e
      return "user" === t.principal_type ? [t.principal_id] : []
    }
    function tv(e) {
      let { recipient: t } = e
      return "principal" === t.recipient_type && "user" === t.principal_type ? [t.principal_id] : []
    }
    function tx(e) {
      return e.state.variables
    }
    function tb(e) {
      return e instanceof eU.FetchError && [403, 404].includes(e.status)
    }
    function tw(e) {
      let { role: t } = e
      return { role: t, source: null }
    }
    function tk(e, t) {
      return tj(e?.inherited_access, t)
    }
    function tj(e, t) {
      if (e?.complete && t?.recipient_type === "principal")
        return e.sources.find((e) => null != e.recipient && null != e.source && (0, B.hk)(e.recipient) === (0, B.hk)(t))
          ?.source
    }
    function tS(e) {
      return e.trim().replace(/^@/u, "")
    }
    function tA(e) {
      if (e.length > 254 || !x.email.test(e)) return null
      let t = e.slice(e.indexOf("@") + 1)
      return !x.domain.test(t) || /(?:^|\.)..--/.test(t) || /\.(?:arpa|invalid|local|localhost|onion|test)$/i.test(t)
        ? null
        : e.toLowerCase()
    }
    function tM(e) {
      let t,
        i,
        n,
        s,
        l,
        o = (0, r.c)(19),
        { accountUserId: c, displayName: d, permission: u } = e,
        p = (0, _.A)()
      o[0] !== d ? ((t = d?.trim() || null), (o[0] = d), (o[1] = t)) : (t = o[1])
      let m = t,
        g = (0, h._U)(eu.ik, null == m ? c : null),
        { data: f } = (0, h._U)(eu.Ks, c)
      o[2] !== g || o[3] !== p || o[4] !== u || o[5] !== f?.email || o[6] !== m
        ? ((i = m ?? g ?? f?.email ?? p.formatMessage("owner" === u ? tC.owner : tC.person)),
          (o[2] = g),
          (o[3] = p),
          (o[4] = u),
          (o[5] = f?.email),
          (o[6] = m),
          (o[7] = i))
        : (i = o[7])
      let y = i
      o[8] !== c || o[9] !== y
        ? ((n = (0, a.jsx)(ec.Y, { accountUserId: c, name: y, size: "group" })), (o[8] = c), (o[9] = y), (o[10] = n))
        : (n = o[10])
      let v = f?.email
      return (
        o[11] !== u
          ? ((s = (0, a.jsx)("span", {
              className: "pe-2 text-sm text-tertiary",
              children: (0, a.jsx)(V.u, { permission: u }),
            })),
            (o[11] = u),
            (o[12] = s))
          : (s = o[12]),
        o[13] !== c || o[14] !== y || o[15] !== n || o[16] !== v || o[17] !== s
          ? ((l = (0, a.jsx)(eQ, { accountUserId: c, avatar: n, label: y, secondaryLabel: v, trailingContent: s })),
            (o[13] = c),
            (o[14] = y),
            (o[15] = n),
            (o[16] = v),
            (o[17] = s),
            (o[18] = l))
          : (l = o[18]),
        l
      )
    }
    let tC = (0, y.YK)({
      person: { id: "codex.space.driveSharing.person", defaultMessage: "Person" },
      self: { id: "codex.space.driveSharing.self", defaultMessage: "You" },
      owner: { id: "codex.space.driveSharing.owner", defaultMessage: "Owner" },
      pending: { id: "codex.space.driveSharing.pending", defaultMessage: "Invitation pending" },
      saveError: { id: "codex.space.librarySharing.saveError", defaultMessage: "Could not update sharing" },
    })
  },
  QUw8(e, t, i) {
    i.r(t)
    var a = i("qmMi"),
      r = i("SPnB"),
      n = i("NRR1"),
      s = i("rTPf"),
      l = i("OWtl"),
      o = i("bQW7"),
      c = i("CMOE")
    let d = (0, a.bD)(l.u, (e) => []),
      u = (0, a.i1)(l.u, (e, { get: t }) => {
        let i = t(n.DO),
          a = t(r.chatGptAuthenticatedUserId$)
        return e && i && a ? t(d, { accountId: i, userId: a }).filter((t) => (0, c.f)(t, e) > 0) : []
      })
    i.d(
      t,
      {},
      {
        matchingVisitedPeople$: u,
        rememberVisitedPeople: async function (e, t) {
          let i = e.get(n.DO),
            a = e.get(r.chatGptAuthenticatedUserId$)
          if (!i || !a) return
          let l = { accountId: i, userId: a },
            c = "page-mention-visits-v1:" + JSON.stringify([i, a]),
            u = []
          try {
            let e = JSON.parse(localStorage.getItem(c) ?? "[]")
            Array.isArray(e) && (u = e.filter((e) => "string" == typeof e).slice(0, 50))
          } catch {}
          let p = [...new Set(t ?? u)]
            .filter(
              (t) =>
                t.split("__")[0] !== a.split("__")[0] &&
                t.endsWith("__" + i.toLowerCase()) &&
                !0 === e.query.getOptions(s.Ks, t).enabled,
            )
            .slice(0, 50)
          if (!p.length) return
          if (t)
            try {
              localStorage.setItem(c, JSON.stringify([...new Set([...p, ...u])].slice(0, 50)))
            } catch {}
          let m = await Promise.all(
            p.map(async (t) => {
              try {
                let i = await e.query.fetch(s.Ks, t)
                return i?.account_user_id === t ? i : null
              } catch {
                return null
              }
            }),
          )
          if (e.get(n.DO) !== i || e.get(r.chatGptAuthenticatedUserId$) !== a) return
          let h = (0, o.Jk)(m.filter((e) => null != e)) ?? [],
            g = new Set(p)
          e.set(d, l, [...h, ...e.get(d, l).filter((e) => !g.has(e.account_user_id))].slice(0, 50))
        },
        visitedPeople$: d,
      },
    )
  },
  tcwr(e, t, i) {
    var a = i("qmMi"),
      r = i("SPnB"),
      n = i("rpnz"),
      s = i("HNZf"),
      l = i("e1xH"),
      o = i("tv8P"),
      c = i("OWtl"),
      d = i("bQW7"),
      u = i("Rxyo"),
      p = i("rTPf")
    let m = (0, a.i1)(c.u, (e, { get: t }) => {
      let i = t(o.spaceAccountId$)
      if (null == e || "entry" === e.type || null == i || !t(l.pagesEnabled$))
        return { picks: [], isLoading: !1, isError: !1 }
      let a = t(r.chatGptAuthenticatedUserId$),
        c = t(r.kf),
        m = t(u.y),
        h = [],
        g = new Map(),
        f = [],
        _ = [],
        y = "space" === e.type,
        v = !1,
        x = !1
      if ("space" === e.type) f.push({ type: "space", id: e.id })
      else if ((S(e.commenters), !(0, n.sD)(e.id))) {
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
            ((v = ((!m || void 0 === e.data) && e.isFetching) || v), (x = e.isError || x), null == e.data || e.isError)
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
        ;(_.push(...r.map((e) => e.id.split("__")[0])), S(r))
      }
      for (let e of g.values()) {
        let a = e.account_user_id ?? `${e.id}__${i.toLowerCase()}`,
          { data: r } = t(p.Ks, a, { enabled: !1 })
        ;(r?.id === e.id &&
          r.account_user_id === a &&
          ((e.name = e.name ?? r.name), (e.email = e.email ?? r.email), (e.avatar_url = e.avatar_url ?? r.avatar_url)),
          void 0 !== r && (e.name = e.name ?? ""))
      }
      let b = null == e.mentionContext ? void 0 : { ...e.mentionContext, rosterUserIds: _ },
        w = { currentUserId: a, limit: 20, includeUnknownNames: !0 },
        k = null == b ? (0, d.KZ)(e.query ?? "", h, w) : (0, d.oy)(e.query ?? "", h, b, w),
        j = new Map()
      for (let e of k) {
        if (
          null != e.account_user_id &&
          (null != e.name || null != e.email) &&
          (j.set(e.id, { ...e, account_user_id: e.account_user_id }), null != e.name)
        )
          continue
        let r = e.account_user_id ?? `${e.id}__${i.toLowerCase()}`,
          n = t(p.Ks, r)
        ;((v =
          (n.isPending && null != a && "loaded" === c.status && "workspace" === c.structure) ||
          ((!m || void 0 === n.data) && n.isFetching) ||
          v),
          (x = n.isError || x),
          n.data?.id === e.id &&
            n.data.account_user_id === r &&
            j.set(e.id, {
              ...n.data,
              name: n.data.name || e.name,
              email: n.data.email ?? e.email,
              avatar_url: n.data.avatar_url ?? e.avatar_url,
            }))
      }
      return {
        mentionContext: b,
        picks: h.map((e) =>
          e.flatMap(({ id: e }) => {
            let t = j.get(e)
            return null == t ? [] : [t]
          }),
        ),
        isLoading: v,
        isError: x,
      }
      function S(t) {
        let i = []
        for (let a of (h.push(i), t ?? [])) {
          let t = a.id.split("__")[0]
          if (e?.excludeUserIds?.includes(t)) continue
          let r = g.get(t)
          if (null != r)
            ((r.account_user_id = r.account_user_id ?? a.account_user_id),
              (r.name = r.name ?? a.name),
              (r.email = r.email ?? a.email),
              (r.avatar_url = r.avatar_url ?? a.avatar_url))
          else {
            let e = { ...a, id: t }
            ;(g.set(t, e), i.push(e))
          }
        }
      }
    })
    i.d(t, {}, { K: m })
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
      n = i("qmMi"),
      s = i("iFq6"),
      l = i("UOa8"),
      o = i("MFZ6")
    i.d(
      t,
      {},
      {
        K: function (e) {
          let t,
            i,
            c = (0, r.c)(6),
            { groupId: d, size: u } = e,
            { accountId: p } = (0, l.As)(),
            { data: m } = (0, n._U)(s.l, p ?? "", { enabled: null != p }) ?? {}
          c[0] !== d || c[1] !== m ? ((t = m?.find((e) => e.id === d)), (c[0] = d), (c[1] = m), (c[2] = t)) : (t = c[2])
          let h = t,
            g = h?.avatar
          return (
            c[3] !== u || c[4] !== g
              ? ((i = (0, a.jsx)(o.y, { avatar: g, size: u })), (c[3] = u), (c[4] = g), (c[5] = i))
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
            u,
            p,
            m = (0, r.c)(30),
            {
              copyLink: h,
              disabled: g,
              hasPendingAccessChange: f,
              hasPendingInvitees: _,
              isSaving: y,
              isBusy: v,
              isCancelDisabled: x,
              inviteLabel: b,
              saveLabel: w,
              variant: k,
              onCancel: j,
              onClose: S,
            } = e,
            A = void 0 === v ? y : v,
            M = void 0 === x ? A : x,
            C = void 0 === k ? "default" : k,
            I = f || _
          if (y) {
            let e
            ;(m[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(s.A, { id: "shareDialog.primaryAction.saving", defaultMessage: "Saving" })),
                (m[0] = e))
              : (e = m[0]),
              (t = e))
          } else if (_) {
            let e
            ;(m[1] !== b
              ? ((e = b ?? (0, a.jsx)(s.A, { id: "shareDialog.primaryAction.invite", defaultMessage: "Invite" })),
                (m[1] = b),
                (m[2] = e))
              : (e = m[2]),
              (t = e))
          } else if (I) {
            let e
            ;(m[3] !== w
              ? ((e = w ?? (0, a.jsx)(s.A, { id: "shareDialog.primaryAction.save", defaultMessage: "Save" })),
                (m[3] = w),
                (m[4] = e))
              : (e = m[4]),
              (t = e))
          } else {
            let e
            ;(m[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(s.A, { id: "shareDialog.done", defaultMessage: "Done" })), (m[5] = e))
              : (e = m[5]),
              (t = e))
          }
          ;(m[6] !== h
            ? ((i = (0, a.jsx)("div", { className: "me-auto", children: h })), (m[6] = h), (m[7] = i))
            : (i = m[7]),
            m[8] !== I || m[9] !== M || m[10] !== j || m[11] !== C
              ? ((o =
                  I &&
                  (0, a.jsx)(n.$, {
                    color: "secondary",
                    variant: "outline",
                    size: "xl",
                    gutterSize: "audienceReview" === C ? "sm" : void 0,
                    type: "button",
                    disabled: M,
                    onClick: j,
                    children: (0, a.jsx)(s.A, { id: "shareDialog.primaryAction.cancel", defaultMessage: "Cancel" }),
                  })),
                (m[8] = I),
                (m[9] = M),
                (m[10] = j),
                (m[11] = C),
                (m[12] = o))
              : (o = m[12]))
          let q = "audienceReview" === C ? "sm" : void 0,
            E = I ? "submit" : "button",
            O = y || A || (I && g),
            L = I ? void 0 : S
          return (
            m[13] !== y || m[14] !== t
              ? ((c = y ? (0, a.jsx)("span", { role: "status", children: t }) : t),
                (m[13] = y),
                (m[14] = t),
                (m[15] = c))
              : (c = m[15]),
            m[16] !== y
              ? ((d = y && (0, a.jsx)(l.y, { className: "icon-2xs" })), (m[16] = y), (m[17] = d))
              : (d = m[17]),
            m[18] !== y || m[19] !== c || m[20] !== d || m[21] !== q || m[22] !== E || m[23] !== O || m[24] !== L
              ? ((u = (0, a.jsxs)(n.$, {
                  color: "primary",
                  size: "xl",
                  gutterSize: q,
                  type: E,
                  disabled: O,
                  "aria-busy": y,
                  onClick: L,
                  children: [c, d],
                })),
                (m[18] = y),
                (m[19] = c),
                (m[20] = d),
                (m[21] = q),
                (m[22] = E),
                (m[23] = O),
                (m[24] = L),
                (m[25] = u))
              : (u = m[25]),
            m[26] !== u || m[27] !== i || m[28] !== o
              ? ((p = (0, a.jsxs)(a.Fragment, { children: [i, o, u] })),
                (m[26] = u),
                (m[27] = i),
                (m[28] = o),
                (m[29] = p))
              : (p = m[29]),
            p
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
        includeUnknownNames: l = !1,
        excludeDomainOnlyMatches: c = !1,
        requireIdentified: u = !1,
        directoryMatches: p,
        mentionCounts: m,
      } = {},
    ) {
      let h = e.trim().toLowerCase().replace(/\s+/gu, " "),
        g = o(m, e),
        f = new Map()
      for (let [e, i] of [...t, p].entries())
        for (let t of i ?? []) {
          let a = u ? d(t) : t,
            s = a ?? t
          if (c && n(s, h)) continue
          let l = null != a,
            o = l
              ? (function (e, t) {
                  if ("" === t) return 0
                  let i = e.name?.trim().toLowerCase().replace(/\s+/gu, " ") ?? "",
                    a = e.email?.trim().toLowerCase() ?? ""
                  return 4 === (0, r.f)(e, t)
                    ? 5
                    : i.startsWith(t)
                      ? 4
                      : i.split(" ").some((e) => e.startsWith(t))
                        ? 3
                        : a.startsWith(t)
                          ? 2
                          : Number(t.split(" ").every((e) => i.includes(e)) || a.includes(t))
                })(s, h) || Number(i === p)
              : 0,
            m = f.get(s.id),
            g = m?.item.name
          ;(null == m ||
            o > m.match ||
            (!m.identified && l) ||
            (o === m.match && (!g || g.split("__")[0] === s.id) && s.name && s.name.split("__")[0] !== s.id)) &&
            f.set(s.id, { item: s, locality: m?.locality ?? e, match: o, identified: l })
        }
      return [...f.values()]
        .filter(
          ({ item: e, match: t, identified: a }) =>
            a && ("" === h ? e.id !== i?.split("__")[0] : t > 0 || (l && null == e.name)),
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
        excludeDomainOnlyMatches: u = !1,
        directoryMatches: p,
        recentPeople: m,
        mentionCounts: h,
      } = {},
    ) {
      let g = e.trim().toLowerCase().replace(/\s+/gu, " "),
        f = (function (e) {
          let t = new Map()
          if (null == e) return t
          let i = (e, i) => {
            let a = e.split("__")[0]
            t.set(a, Math.max(t.get(a) ?? 0, i))
          }
          for (let t of e.rosterUserIds ?? []) i(t, 5)
          for (let t of e.participants ?? []) {
            let a = null == t.lastActivityAtMs ? null : e.asOfMs - t.lastActivityAtMs
            i(t.id, null != a && a >= 0 && a <= 2592e6 ? 20 : 10)
          }
          for (let t of e.liveUserIds ?? []) i(t, 35)
          for (let t of e.threadUserIds ?? []) i(t, 50)
          return t
        })(i),
        _ = new Map(m?.map((e, t) => [e.id.split("__")[0], t])),
        y = o(h, e),
        v = new Map()
      for (let i of [...t, m, p])
        for (let t of (d ? i : c(i)) ?? []) {
          if (u && n(t, g)) continue
          let a = t.id.split("__")[0],
            s = (0, r.f)(t, e) || Number(i === p),
            l = v.get(a)
          ;(null == l ||
            s > l.match ||
            (s === l.match &&
              (!l.item.name || l.item.name.split("__")[0] === a) &&
              t.name &&
              t.name.split("__")[0] !== a)) &&
            v.set(a, { item: t, match: s })
        }
      let x = "" === e.trim(),
        b = (e, t) => t >= 2 && (_.has(e) || f.has(e))
      return [...v.entries()]
        .filter(([e, { item: t, match: i }]) => (x ? e !== a?.split("__")[0] : i > 0 || (d && null == t.name)))
        .sort(
          ([e, t], [i, a]) =>
            Number(4 === a.match) - Number(4 === t.match) ||
            y(a) - y(t) ||
            (_.size > 0 ? Number(b(i, a.match)) - Number(b(e, t.match)) : 0) ||
            a.match - t.match ||
            (f.get(i) ?? 0) - (f.get(e) ?? 0) ||
            (_.get(e) ?? _.size) - (_.get(i) ?? _.size) ||
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
          return null != i || a.recentPeople?.length ? l(e, t, i, a) : s(e, t, a)
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
            n = a(e.email ?? ""),
            s = i.normalize("NFC"),
            l = n.normalize("NFC")
          if (
            s === r.normalize("NFC") ||
            s === l ||
            s === l.split("@")[0] ||
            s === a(e.profile_username ?? "").normalize("NFC")
          )
            return 4
          let o = i.split(" "),
            c = r.split(" ")
          return o.every((e) => c.includes(e))
            ? 3
            : o.every((e) => c.some((t) => t.startsWith(e)) || n.startsWith(e))
              ? 2
              : +!!o.every((e) => r.includes(e) || n.includes(e))
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
              ? ((e = o ?? l ?? (0, a.jsx)(n.A, { id: "librarySharing.workspace", defaultMessage: "Workspace" })),
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
                  (0, a.jsx)(n.A, { id: "librarySharing.link.collaborators", defaultMessage: "Only those invited" })),
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
              footer: u,
              options: p,
              restrictedLabel: m,
              value: h,
              workspaceName: g,
              workspaceLabel: f,
              onChange: _,
            } = e,
            y = void 0 !== d && d
          if (c[0] !== p || c[1] !== g) {
            let e
            ;(c[3] !== g
              ? ((e = (e) => {
                  let t
                  return (
                    "restricted" === e.mode
                      ? (t = (0, a.jsx)(n.A, {
                          id: "librarySharing.link.collaboratorsDescription",
                          defaultMessage: "People who already have access can use this link",
                        }))
                      : "workspace" === e.mode &&
                        (t =
                          null == g
                            ? (0, a.jsx)(n.A, {
                                id: "librarySharing.link.unnamedWorkspaceDescription",
                                defaultMessage: "Anyone in this workspace with the link",
                              })
                            : (0, a.jsx)(n.A, {
                                id: "librarySharing.link.workspaceDescription",
                                defaultMessage: "Anyone at {workspaceName} with the link",
                                values: { workspaceName: g },
                              })),
                    { ...e, description: t }
                  )
                }),
                (c[3] = g),
                (c[4] = e))
              : (e = c[4]),
              (t = p.map(e)),
              (c[0] = p),
              (c[1] = g),
              (c[2] = t))
          } else t = c[2]
          return (
            c[5] !== p || c[6] !== m || c[7] !== f || c[8] !== g
              ? ((i = (e) => {
                  let t = p.find((t) => t.value === e)
                  return null == t
                    ? null
                    : (0, a.jsx)(l, { mode: t.mode, restrictedLabel: m, workspaceName: g, workspaceLabel: f })
                }),
                (c[5] = p),
                (c[6] = m),
                (c[7] = f),
                (c[8] = g),
                (c[9] = i))
              : (i = c[9]),
            c[10] !== y || c[11] !== u || c[12] !== _ || c[13] !== t || c[14] !== i || c[15] !== h
              ? ((o = (0, a.jsx)(s.d, {
                  disabled: y,
                  footer: u,
                  iconVariant: "thumbnail",
                  options: t,
                  value: h,
                  renderLabel: i,
                  onChange: _,
                })),
                (c[10] = y),
                (c[11] = u),
                (c[12] = _),
                (c[13] = t),
                (c[14] = i),
                (c[15] = h),
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
    i.d(t, { B: () => O })
    var a = i("ABep"),
      r = i("QosV"),
      n = i("kOeh"),
      s = i("i5ac"),
      l = i.n(s),
      o = i("qmMi"),
      c = i("zd8w"),
      d = i("Wf1j"),
      u = i("oyxz"),
      p = i("iFq6"),
      m = i("eFn4"),
      h = i("UOa8"),
      g = i("OAko"),
      f = i("LhhH"),
      _ = i("AOG7"),
      y = i("SPnB"),
      v = i("tv8P"),
      x = i("OWtl"),
      b = i("bQW7"),
      w = i("Rxyo"),
      k = i("rvFo")
    let j = (0, o.vU)(x.u, (e, { get: t, scope: i }) => {
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
          t(w.y)
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
            return (s.throwIfAborted(), (0, b.Jk)(t) ?? [])
          } finally {
            a.stop()
          }
        },
      }
    })
    var S = i("qCmE"),
      A = i("ENs9"),
      M = i("pLRu"),
      C = i("CMOE"),
      I = i("MFZ6"),
      q = i("CFGX"),
      E = i("LiNd")
    function O(e) {
      let t,
        i,
        n,
        s,
        u,
        f,
        y,
        v,
        x,
        w,
        k,
        O,
        z,
        G,
        Q,
        K,
        B = (0, r.c)(61),
        {
          accountId: Y,
          ariaDescribedBy: H,
          disabled: V,
          emptyMessage: Z,
          getRemoveLabel: X,
          getGroupRecipient: J,
          getPersonRecipient: ee,
          getTeamRecipient: et,
          isLoading: ei,
          loadingLabel: ea,
          options: er,
          visitedOptions: en,
          dotOptions: es,
          placeholder: el,
          query: eo,
          peopleQuery: ec,
          recentOptions: ed,
          suggestedOptions: eu,
          suggestionsAsOf: ep,
          improvedSuggestions: em,
          autoFocus: eh,
          searchFailed: eg,
          contextualPicks: ef,
          peopleFirst: e_,
          selectionDisplay: ey,
          selectedOptions: ev,
          trailingContent: ex,
          onChange: eb,
          onQueryChange: ew,
        } = e,
        ek = void 0 === ec ? eo : ec,
        ej = void 0 !== em && em,
        eS = void 0 === eh ? ej : eh,
        eA = void 0 === ey ? "input" : ey,
        eM = (0, d.A)(),
        [eC, eI] = (0, c.useState)(),
        { data: eq } = (0, g.oV)(),
        { accountId: eE } = (0, h.As)(),
        eO = eq?.accounts?.find((e) => e.id === Y),
        eL = (0, o._U)(p.w, Y ?? ""),
        eN = (eL && null != et) || null != J || (ej && null != ee)
      B[0] !== eN ? ((t = { enabled: eN }), (B[0] = eN), (B[1] = t)) : (t = B[1])
      let { data: eR, isError: e$ } = (0, o._U)(m.Jk, Y ?? "", t),
        eP = null == eO ? void 0 : (0, q.V)(eO, eR, e$),
        eU = eE === Y && null != J && eP?.allowGroups === !0
      B[2] === Symbol.for("react.memo_cache_sentinel") ? ((i = { includeMemberCounts: !0 }), (B[2] = i)) : (i = B[2])
      let { data: eD, isError: eT, isPending: eF, isFetching: eW } = (0, _.Nc)(eU && !V ? eo : "", i),
        ez = eL && null != et && eP?.canSearchMembers === !0,
        { data: eG, isError: eQ, isLoading: eK } = (0, o._U)(p.l, Y ?? "", { enabled: ez && !V }) ?? {}
      B[3] !== ez || B[4] !== eM || B[5] !== el?.people || B[6] !== el?.peopleAndTeams
        ? ((n = ez
            ? (el?.peopleAndTeams ??
              eM.formatMessage({
                id: "shareRecipientPicker.peopleAndTeamsLabel",
                defaultMessage: "Add people or teams",
              }))
            : (el?.people ??
              eM.formatMessage({ id: "shareRecipientPicker.peopleLabel", defaultMessage: "Add people" }))),
          (B[3] = ez),
          (B[4] = eM),
          (B[5] = el?.people),
          (B[6] = el?.peopleAndTeams),
          (B[7] = n))
        : (n = B[7])
      let eB = n,
        eY = eo.trim().toLocaleLowerCase()
      B[8] !== ek ? ((s = ek.trim()), (B[8] = ek), (B[9] = s)) : (s = B[9])
      let eH = s,
        eV = null != ef,
        eZ = e_ ?? eV,
        eX = ez && !eQ ? (eG ?? []).map((e) => ({ team: e, recipient: et(e) })) : [],
        eJ = new Set(ev.map(F)),
        e0 =
          "" !== eY || V
            ? []
            : l()(
                (ed ?? []).filter((e) => {
                  let { id: t, accessStatus: i } = e
                  return null == i && !eJ.has(t)
                }),
                "id",
              ).slice(0, 5),
        e1 = new Set(e0.map(T))
      B[10] !== eM
        ? ((u = (e) => {
            let { team: t, recipient: i } = e
            return {
              ...i,
              isActorTeamMember: !0,
              secondaryLabel: (0, M.D)(eM, t.member_count),
              avatar: (0, a.jsx)(I.y, { avatar: t.avatar, size: "sm" }),
            }
          }),
          (B[10] = eM),
          (B[11] = u))
        : (u = B[11])
      let e2 = eX
          .filter((e) => {
            let { team: t } = e
            return ej || t.name.toLocaleLowerCase().includes(eY)
          })
          .map(u)
          .filter((e) => {
            let { id: t, accessStatus: i } = e
            return ("" !== eY || null == i) && !eJ.has(t) && (ej || !e1.has(t))
          }),
        e3 = new Set(e2.map(D)),
        e4 =
          "" === eY || !eU || V || eT
            ? []
            : l()(
                (eD ?? [])
                  .filter((e) => null == e.system_use_case && (eP?.allowScimGroups || !e.is_scim_managed))
                  .map((e) => ({
                    ...J(e),
                    secondaryLabel: (0, M.D)(eM, e.num_members),
                    avatar: (0, a.jsx)(S.K, { groupId: e.id, size: "sm" }),
                  }))
                  .filter((e) => {
                    let { id: t } = e
                    return (ej || !e3.has(t)) && !eJ.has(t)
                  }),
                "id",
              ),
        e5 = (e) =>
          e?.filter((e) => {
            let { id: t } = e
            return !e3.has(t) && !eJ.has(t) && !e1.has(t)
          }),
        e6 = "" === eH ? [] : (e5(er) ?? [])
      if (null != ef)
        e6 = (0, b.KZ)(
          ek,
          [...ef, er].map((e) => e5(e)?.map(U)),
        ).map(P)
      else if ("" !== eH) {
        let e
        ;(B[12] !== ek
          ? ((e = (e, t) =>
              Number(4 === (0, C.f)({ name: t.label, email: t.secondaryLabel }, ek)) -
              Number(4 === (0, C.f)({ name: e.label, email: e.secondaryLabel }, ek))),
            (B[12] = ek),
            (B[13] = e))
          : (e = B[13]),
          e6.sort(e))
      }
      let e7 =
          0 === e0.length && 0 === e2.length && 0 === e4.length
            ? void 0
            : [
                {
                  id: "recent",
                  label: eM.formatMessage({ id: "shareRecipientPicker.recent", defaultMessage: "Recent" }),
                  options: e0.map(W),
                },
                {
                  id: "teams",
                  label:
                    "" === eY
                      ? eM.formatMessage({ id: "shareRecipientPicker.yourTeams", defaultMessage: "Your teams" })
                      : eM.formatMessage({ id: "shareRecipientPicker.teams", defaultMessage: "Teams" }),
                  options: e2.map(W),
                },
                {
                  id: "groups",
                  label: eM.formatMessage({ id: "shareRecipientPicker.groups", defaultMessage: "Groups" }),
                  options: e4.map(W),
                },
                {
                  id: "people",
                  label: eM.formatMessage({ id: "shareRecipientPicker.people", defaultMessage: "People" }),
                  options: e6.map(W),
                },
              ],
        e8 =
          ej && !V
            ? (0, E.s)(ek, [...(ef ?? []), e2, eu, ed, e4, "" === eH ? void 0 : er], {
                selectedIds: eJ,
                suggestionsAsOf: ep,
              })
            : [],
        e9 =
          ej &&
          !V &&
          "" === eY &&
          "" === eH &&
          null != ee &&
          eE === Y &&
          eP?.canSearchMembers === !0 &&
          !ei &&
          !eK &&
          e8.length < 10
      B[14] !== e9 ? ((f = { enabled: e9 }), (B[14] = e9), (B[15] = f)) : (f = B[15])
      let { data: te, isEnabled: tt, isLoading: ti, isError: ta } = (0, o._U)(j, Y ?? null, f),
        tr = e9 && tt
      if (ej) {
        let e = tr
          ? (0, E.s)(
              "",
              [
                te?.flatMap((e) => {
                  let t = ee?.(e)
                  return null == t ? [] : [t]
                }),
              ],
              { selectedIds: new Set([...eJ, ...e8.map($)]), limit: 3 },
            )
          : []
        e7 = [
          {
            id: "suggested",
            label: eM.formatMessage({ id: "shareRecipientPicker.suggested", defaultMessage: "Suggested" }),
            options: [...e8, ...e].slice(0, 10).map(W),
          },
        ]
      }
      if ((eZ && e7?.sort(R), !V && eH && en?.length)) {
        let e = new Set([...(e7?.flatMap(N) ?? e6), ...(es ?? [])].map(L)),
          t = (0, E.s)(ek, [en], { selectedIds: new Set([...e, ...eJ]), limit: Math.min(3, Math.max(0, 10 - e.size)) })
        t.length &&
          (null == e7
            ? (e6 = [...e6, ...t])
            : ej
              ? e7[0].options.push(...t.map(W))
              : e7.push({ id: "visited", label: "", options: t.map(W) }))
      }
      let tn = eg && ("" !== eH || eV),
        ts = ez && eQ,
        tl = "" !== eY && eU && eT,
        to = tn || ts || tl,
        tc = (("" !== eH || eV) && ei) || ("" !== eY && eU && (eF || eW)) || (ez && eK),
        td = Z
      ;("" === eY ? (td = tr && null != te && !ta ? Z : null) : tc ? (td = ea) : (ei || to) && (td = null),
        B[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (e) => {
              eI(e?.closest('[role="dialog"]') ?? null)
            }),
            (B[16] = y))
          : (y = B[16]))
      let tu = A.X,
        tp = !eZ || "user",
        tm = (eV && ei && !tn) || (tr && ti),
        th = tr && ta
      ;(B[17] !== tl || B[18] !== tm || B[19] !== th || B[20] !== ts
        ? ((v = { peopleLoading: tm, peopleError: th, groupsError: tl, teamsError: ts }),
          (B[17] = tl),
          (B[18] = tm),
          (B[19] = th),
          (B[20] = ts),
          (B[21] = v))
        : (v = B[21]),
        B[22] !== ev || B[23] !== eA
          ? ((x = "external" === eA ? [] : ev.map(W)), (B[22] = ev), (B[23] = eA), (B[24] = x))
          : (x = B[24]),
        B[25] !== X
          ? ((w = (e) => {
              let { recipient: t } = e
              return X(t)
            }),
            (B[25] = X),
            (B[26] = w))
          : (w = B[26]))
      let tg = e6.map(W),
        tf = es
          ?.filter((e) => {
            let { id: t } = e
            return !eJ.has(t)
          })
          .map(W)
      return (
        B[27] !== eb || B[28] !== ev
          ? ((k = (e) => {
              let { recipient: t } = e
              eb(l()([...ev, t], "id"))
            }),
            (O = (e) => {
              let { id: t } = e
              eb(ev.filter((e) => e.id !== t))
            }),
            (B[27] = eb),
            (B[28] = ev),
            (B[29] = k),
            (B[30] = O))
          : ((k = B[29]), (O = B[30])),
        B[31] !== ea || B[32] !== tc
          ? ((z = tc
              ? (0, a.jsx)("span", { className: "sr-only", role: "status", "aria-label": ea, children: ea })
              : null),
            (B[31] = ea),
            (B[32] = tc),
            (B[33] = z))
          : (z = B[33]),
        B[34] !== z || B[35] !== ex
          ? ((G = (0, a.jsxs)(a.Fragment, { children: [z, ex] })), (B[34] = z), (B[35] = ex), (B[36] = G))
          : (G = B[36]),
        B[37] !== tu ||
        B[38] !== H ||
        B[39] !== eS ||
        B[40] !== V ||
        B[41] !== ej ||
        B[42] !== eB ||
        B[43] !== ew ||
        B[44] !== e7 ||
        B[45] !== eC ||
        B[46] !== eo ||
        B[47] !== td ||
        B[48] !== tp ||
        B[49] !== v ||
        B[50] !== x ||
        B[51] !== w ||
        B[52] !== tg ||
        B[53] !== tf ||
        B[54] !== k ||
        B[55] !== O ||
        B[56] !== G
          ? ((Q = (0, a.jsx)(tu, {
              preserveHighlightOnItemsChange: tp,
              autoFocus: eS,
              waitForDialogEntrance: ej,
              preserveEmptyQueryOrder: ej,
              ariaLabel: eB,
              ariaDescribedBy: H,
              searchStatus: v,
              disabled: V,
              selectedOptions: x,
              getRemoveLabel: w,
              options: tg,
              dotOptions: tf,
              optionSections: e7,
              portalContainer: eC,
              query: eo,
              onQueryChange: ew,
              showLoadingDropdown: !1,
              showSuggestionsOnFocus: !0,
              showSuggestionsOnQueryChange: ej,
              onSelectOption: k,
              onRemoveOption: O,
              placeholder: eB,
              trailingContent: G,
              emptyMessage: td,
            })),
            (B[37] = tu),
            (B[38] = H),
            (B[39] = eS),
            (B[40] = V),
            (B[41] = ej),
            (B[42] = eB),
            (B[43] = ew),
            (B[44] = e7),
            (B[45] = eC),
            (B[46] = eo),
            (B[47] = td),
            (B[48] = tp),
            (B[49] = v),
            (B[50] = x),
            (B[51] = w),
            (B[52] = tg),
            (B[53] = tf),
            (B[54] = k),
            (B[55] = O),
            (B[56] = G),
            (B[57] = Q))
          : (Q = B[57]),
        B[58] !== y || B[59] !== Q
          ? ((K = (0, a.jsx)("div", { ref: y, className: "flex min-w-0 flex-1 flex-col gap-2", children: Q })),
            (B[58] = y),
            (B[59] = Q),
            (B[60] = K))
          : (K = B[60]),
        K
      )
    }
    function L(e) {
      let { id: t } = e
      return t
    }
    function N(e) {
      return e.options
    }
    function R(e, t) {
      return "people" === e.id ? -1 : +("people" === t.id)
    }
    function $(e) {
      let { id: t } = e
      return t
    }
    function P(e) {
      let { recipient: t } = e
      return t
    }
    function U(e) {
      return { id: e.id, name: e.label, email: e.secondaryLabel, recipient: e }
    }
    function D(e) {
      let { id: t } = e
      return t
    }
    function T(e) {
      let { id: t } = e
      return t
    }
    function F(e) {
      let { id: t } = e
      return t
    }
    function W(e) {
      let t
      return (
        "pending" === e.accessStatus
          ? (t = (0, a.jsx)(u.A, {
              id: "shareRecipientPicker.invitationPending",
              defaultMessage: "Invitation pending",
            }))
          : "existing" === e.accessStatus &&
            (t = (0, a.jsx)(u.A, {
              id: "shareRecipientPicker.alreadyHasAccess",
              defaultMessage: "Already has access",
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
            u = void 0 === d ? "md" : d
          return (
            o[0] !== u
              ? ((t = (0, n.A)(
                  "flex shrink-0 items-center justify-center rounded-full bg-secondary-soft",
                  { xs: "icon-sm", sm: "size-6", md: "size-7" }[u],
                )),
                (o[0] = u),
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
    var a = i("DNn3")
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
//# sourceMappingURL=40994.879eff8806.js.map
