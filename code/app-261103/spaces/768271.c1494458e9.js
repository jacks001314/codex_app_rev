export const __rspack_esm_ids = [768271]
export const __webpack_modules__ = {
  LMw7(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      s = a("on57")
    a.d(
      t,
      {},
      {
        Q: function (e) {
          let t,
            a,
            i,
            o,
            l,
            c,
            d = (0, r.c)(12)
          d[0] !== e
            ? (({ children: t, className: a, tone: o, ...i } = e),
              (d[0] = e),
              (d[1] = t),
              (d[2] = a),
              (d[3] = i),
              (d[4] = o))
            : ((t = d[1]), (a = d[2]), (i = d[3]), (o = d[4]))
          let u = "danger" === (void 0 === o ? "secondary" : o) ? "text-chart-red" : "text-tertiary"
          return (
            d[5] !== a || d[6] !== u
              ? ((l = (0, s.A)(
                  "flex min-h-[var(--height-token-row)] items-center justify-center gap-2 py-row-y text-[length:var(--detail-row-font-size,var(--text-base))] leading-5",
                  u,
                  a,
                )),
                (d[5] = a),
                (d[6] = u),
                (d[7] = l))
              : (l = d[7]),
            d[8] !== t || d[9] !== i || d[10] !== l
              ? ((c = (0, n.jsx)("div", { className: l, ...i, children: t })),
                (d[8] = t),
                (d[9] = i),
                (d[10] = l),
                (d[11] = c))
              : (c = d[11]),
            c
          )
        },
      },
    )
  },
  V5qk(e, t, a) {
    a.d(t, { g: () => eg, l: () => ed })
    var n = a("ABep"),
      r = a("QosV"),
      s = a("zTeN"),
      i = a("zd8w"),
      o = a("oyxz"),
      l = a("OAko"),
      c = a("hwkA"),
      d = a("Wf1j"),
      u = a("HZfM"),
      p = a("SPnB"),
      g = a("ygO2"),
      h = a("LMw7"),
      f = a("mUDD"),
      m = a("SGsN"),
      _ = a("heYt"),
      v = a("mNPx"),
      b = a("UOwN"),
      x = a("Adh7"),
      y = a("cfLx"),
      w = a("pyoT"),
      I = a("OWtl"),
      j = a("wuZu"),
      S = a("FwqS"),
      A = a("glqn"),
      U = a("LKbA"),
      C = a("Zgpy")
    function q(e) {
      let t,
        a = (0, r.c)(12),
        { children: i, dialog: o, renderDialog: l, target: c } = e,
        d = (0, s.Ul)(C.Ek),
        u = (0, s.Ul)(_.v0),
        g = (0, s.Ul)(w.spaceAccountId$),
        h = (0, s.Ul)(p.chatGptAuthenticatedUserId$)
      if (!d || "unavailable" === u || null == g || null == h) {
        let e, t
        return (
          a[0] !== i ? ((e = i?.(null)), (a[0] = i), (a[1] = e)) : (e = a[1]),
          a[2] !== e ? ((t = (0, n.jsx)(n.Fragment, { children: e })), (a[2] = e), (a[3] = t)) : (t = a[3]),
          t
        )
      }
      let f = `${c.kind}:${c.id}`
      return (
        a[4] !== g || a[5] !== i || a[6] !== o || a[7] !== l || a[8] !== f || a[9] !== c || a[10] !== h
          ? ((t = (0, n.jsx)(M, { accountId: g, dialog: o, renderDialog: l, target: c, userId: h, children: i }, f)),
            (a[4] = g),
            (a[5] = i),
            (a[6] = o),
            (a[7] = l),
            (a[8] = f),
            (a[9] = c),
            (a[10] = h),
            (a[11] = t))
          : (t = a[11]),
        t
      )
    }
    function M(e) {
      let t,
        a,
        o = (0, r.c)(10)
      o[0] !== e.accountId || o[1] !== e.userId
        ? ((t = { accountId: e.accountId, userId: e.userId }), (o[0] = e.accountId), (o[1] = e.userId), (o[2] = t))
        : (t = o[2])
      let [l, c] = (0, i.useState)(t),
        d = (0, s.Ul)(_.v0)
      if (l.accountId !== e.accountId || l.userId !== e.userId) {
        if ("available" !== d) {
          let t, a
          return (
            o[3] !== e.children ? ((t = e.children?.(null)), (o[3] = e.children), (o[4] = t)) : (t = o[4]),
            o[5] !== t ? ((a = (0, n.jsx)(n.Fragment, { children: t })), (o[5] = t), (o[6] = a)) : (a = o[6]),
            a
          )
        }
        c({ accountId: e.accountId, userId: e.userId })
      }
      let u = `${e.accountId}:${e.userId}:${e.target.kind}:${e.target.id}`
      return (
        o[7] !== e || o[8] !== u ? ((a = (0, n.jsx)(P, { ...e }, u)), (o[7] = e), (o[8] = u), (o[9] = a)) : (a = o[9]),
        a
      )
    }
    function P(e) {
      let t,
        a,
        l,
        U,
        q,
        M,
        P,
        $,
        F,
        O,
        E,
        D,
        L,
        G,
        Q,
        z,
        H,
        B,
        V,
        W,
        Z,
        K,
        X = (0, r.c)(93),
        { accountId: Y, children: J, dialog: ee, renderDialog: et, target: ea, userId: en } = e,
        er = void 0 === et || et,
        es = (0, s.gh)(I.u),
        ei = (0, d.A)(),
        eo = (0, s.Ul)(_.v0),
        el = "available" === eo,
        [ec, ed] = (0, u.ok)(),
        eu = (0, u.zy)(),
        [ep, eg] = (0, i.useState)(!1),
        eh = ee?.onOpenChange ?? eg,
        ef = (0, i.useRef)(null),
        em = ee?.triggerRef ?? ef,
        e_ = (0, s._U)(C.TP, ea),
        [ev, eb] = (0, i.useState)(R)
      X[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = {}), (X[0] = t)) : (t = X[0])
      let [ex, ey] = (0, i.useState)(t),
        {
          data: ew,
          isError: eI,
          isPending: ej,
          refetch: eS,
          hasNextPage: eA,
          fetchNextPage: eU,
          isFetchingNextPage: eC,
        } = (0, s._U)(C.fo, ea)
      if (
        X[1] !== Y ||
        X[2] !== el ||
        X[3] !== ew?.pages ||
        X[4] !== ev ||
        X[5] !== ee?.open ||
        X[6] !== eA ||
        X[7] !== ei ||
        X[8] !== eI ||
        X[9] !== ej ||
        X[10] !== eu ||
        X[11] !== eo ||
        X[12] !== ep ||
        X[13] !== e_ ||
        X[14] !== eS ||
        X[15] !== ex ||
        X[16] !== es ||
        X[17] !== ec ||
        X[18] !== eh ||
        X[19] !== ed ||
        X[20] !== ea ||
        X[21] !== em ||
        X[22] !== en
      ) {
        let e,
          t = el && !eI ? ew?.pages.flatMap(T) : void 0,
          r = t?.flatMap(N).filter((e) => {
            let { request: t, recipient: a } = e,
              n = (0, C.fR)(t.request_id, t.created_at, a?.principal)
            return !ev.has(n) && !e_?.has(n)
          }),
          s = "loading" === eo || (el && ej),
          i = "error" === eo || (el && eI)
        ;((q = (ee?.open ?? ep) || "1" === ec.get("review_access_requests")),
          X[37] !== Y || X[38] !== ex || X[39] !== es || X[40] !== ea || X[41] !== en
            ? ((e = async (e, t) => {
                let { request: a, recipient: r } = e,
                  s = (0, C.fR)(a.request_id, a.created_at, r?.principal)
                eb((e) => new Set(e).add(s))
                try {
                  await (0, C.Ci)(
                    es,
                    ea,
                    "approve" === t
                      ? {
                          accountId: Y,
                          userId: en,
                          requestId: a.request_id,
                          requestCreatedAt: a.created_at,
                          recipient: r?.principal,
                          decision: t,
                          role: ex[s] ?? a.requested_role ?? "viewer",
                        }
                      : {
                          accountId: Y,
                          userId: en,
                          requestId: a.request_id,
                          requestCreatedAt: a.created_at,
                          recipient: r?.principal,
                          decision: t,
                        },
                  )
                } catch (e) {
                  if (e instanceof Error && "access_request_decision_pending" === e.message) return
                  ;(eb((e) => {
                    let t = new Set(e)
                    return (t.delete(s), t)
                  }),
                    es.get(w.spaceAccountId$) === Y &&
                      es.get(p.chatGptAuthenticatedUserId$) === en &&
                      es
                        .get(m.Id)
                        .danger(
                          (0, n.jsx)(o.A, {
                            id: "codex.pages.accessRequests.decisionError",
                            defaultMessage: "Could not update this access request. Try again",
                            description: "Error toast when granting or rejecting a Page or Space access request fails",
                          }),
                          {
                            errorAnalytics: {
                              toastId: "codex.pages.accessRequests.decisionError",
                              userFacingError: (0, v.jq)("pages.access-request.decide", e),
                            },
                          },
                        ))
                }
              }),
              (X[37] = Y),
              (X[38] = ex),
              (X[39] = es),
              (X[40] = ea),
              (X[41] = en),
              (X[42] = e))
            : (e = X[42]))
        let d = e
        ;((Q =
          null != r && r.length > 0
            ? (0, n.jsx)(g.$, {
                ref: (e) => (
                  (em.current = e),
                  () => {
                    em.current === e && (em.current = null)
                  }
                ),
                "aria-label": ei.formatMessage(
                  {
                    id: "codex.pages.accessRequests.activity",
                    defaultMessage: "Access requests{count, plural, =0 {} one { ({count})} other { ({count})}}",
                    description:
                      "Owner toolbar notification button with the number of loaded recipients awaiting access approval for the current Page or Space",
                  },
                  { count: r.length },
                ),
                color: "accent",
                radius: "full",
                size: "compact",
                uniform: !0,
                onClick: () => eh(!0),
                children: ei.formatNumber(r.length),
              })
            : null),
          (U = S.tQ),
          X[43] !== em.current
            ? ((M = (e) => {
                em.current?.isConnected && (e.preventDefault(), em.current.focus())
              }),
              (X[43] = em.current),
              (X[44] = M))
            : (M = X[44]),
          X[45] !== eu || X[46] !== ec || X[47] !== eh || X[48] !== ed
            ? ((P = () => {
                if ((eh(!1), ec.has("review_access_requests"))) {
                  let e = new URLSearchParams(ec)
                  ;(e.delete("review_access_requests"),
                    e.delete("review_access_requests_scope"),
                    ed(e, { replace: !0, state: eu.state }))
                }
              }),
              (X[45] = eu),
              (X[46] = ec),
              (X[47] = eh),
              (X[48] = ed),
              (X[49] = P))
            : (P = X[49]),
          (l = S.$t),
          X[50] === Symbol.for("react.memo_cache_sentinel")
            ? ((L = (0, n.jsx)(o.A, {
                id: "codex.pages.accessRequests.title",
                defaultMessage: "Manage access requests",
                description: "Title of the owner review dialog for pending access requests",
              })),
              (X[50] = L))
            : (L = X[50]))
        let u = "page" === ea.kind ? ea.id : void 0
        ;(X[51] !== u || X[52] !== ea.kind
          ? ((G = (0, n.jsx)(y.Z, { kind: ea.kind, pageId: u })), (X[51] = u), (X[52] = ea.kind), (X[53] = G))
          : (G = X[53]),
          (a = f.OO),
          X[54] !== s
            ? ((O = s
                ? (0, n.jsx)(h.Q, {
                    role: "status",
                    children: (0, n.jsx)(o.A, {
                      id: "codex.pages.accessRequests.loading",
                      defaultMessage: "Loading requests…",
                      description: "Loading pending access requests",
                    }),
                  })
                : null),
              (X[54] = s),
              (X[55] = O))
            : (O = X[55]),
          X[56] !== i || X[57] !== eo || X[58] !== eS || X[59] !== es
            ? ((E = i
                ? (0, n.jsxs)(h.Q, {
                    role: "alert",
                    tone: "danger",
                    children: [
                      (0, n.jsx)(o.A, {
                        id: "codex.pages.accessRequests.error",
                        defaultMessage: "Could not update access requests. Try again.",
                        description: "Recoverable failure loading access requests",
                      }),
                      (0, n.jsx)(g.$, {
                        color: "secondary",
                        size: "compact",
                        onClick: () => {
                          "error" === eo ? es.get(_.Qv).refetch() : eS()
                        },
                        children: (0, n.jsx)(o.A, {
                          id: "codex.pages.accessRequests.retry",
                          defaultMessage: "Try again",
                          description: "Reload access requests after failure",
                        }),
                      }),
                    ],
                  })
                : null),
              (X[56] = i),
              (X[57] = eo),
              (X[58] = eS),
              (X[59] = es),
              (X[60] = E))
            : (E = X[60]),
          (D =
            r?.length !== 0 || eA || i
              ? null
              : (0, n.jsx)(h.Q, {
                  children: (0, n.jsx)(o.A, {
                    id: "codex.pages.accessRequests.empty",
                    defaultMessage: "No pending requests",
                    description: "The current Page or Space has no outstanding access requests",
                  }),
                })),
          ($ = "flex flex-col gap-1"),
          (F = r?.map((e) => {
            let t,
              { request: a, recipient: r } = e,
              s = (0, C.fR)(a.request_id, a.created_at, r?.principal),
              i = r?.name ?? r?.email,
              l =
                r?.principal.principal_type === "user" && null != i
                  ? { accountUserId: r.principal.principal_id, name: i }
                  : null,
              u = null == r ? a.requester_email : r.email
            return (
              (t =
                null == r
                  ? (a.requester_name ??
                    a.requester_email ??
                    (0, n.jsx)(o.A, {
                      id: "codex.pages.accessRequests.unknownRequester",
                      defaultMessage: "Someone",
                      description: "Fallback name for an access requester whose name and email are unavailable",
                    }))
                  : null != l
                    ? l.name
                    : (0, n.jsx)(o.A, {
                        id: "codex.pages.accessRequests.recipientFallback",
                        defaultMessage: "{type, select, group {Group} other {Collaborator}}",
                        description:
                          "Fallback identity for an access-request beneficiary whose name and email are unavailable; type distinguishes a group from an individual collaborator",
                        values: { type: r.principal.principal_type },
                      })),
              (0, n.jsx)(
                j.h,
                {
                  avatar:
                    null == l
                      ? void 0
                      : (0, n.jsx)(b.Y, { accountUserId: l.accountUserId, name: l.name, size: "group" }),
                  renderIdentity:
                    null == l
                      ? void 0
                      : (e) =>
                          (0, n.jsx)(x.Ve, {
                            accountUserId: l.accountUserId,
                            label: l.name,
                            labelEmail: u,
                            children: e,
                          }),
                  avatarLabel: null == r ? (a.requester_name ?? void 0) : (i ?? void 0),
                  label: t,
                  secondaryLabel: null != u ? (0, n.jsx)("span", { className: "select-text", children: u }) : void 0,
                  stackActionsOnNarrow: !0,
                  trailingContent: (0, n.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      (0, n.jsx)(A.e, {
                        color: "primary",
                        size: "xl",
                        variant: "inline",
                        options:
                          r?.principal.principal_type === "group"
                            ? [{ value: "viewer" }, { value: "editor" }]
                            : [{ value: "viewer" }, { value: "commenter" }, { value: "editor" }],
                        value: ex[s] ?? a.requested_role ?? "viewer",
                        renderLabel: k,
                        onChange: (e) => ey({ ...ex, [s]: e }),
                      }),
                      (0, n.jsx)(c.$, {
                        "aria-label":
                          null == r
                            ? void 0
                            : ei.formatMessage(
                                {
                                  id: "codex.pages.accessRequests.rejectRecipient",
                                  defaultMessage:
                                    "{known, select, true {Deny access for {name}} other {Deny access request}}",
                                  description:
                                    "Accessible label for rejecting an access request for a beneficiary, identified by name or email when available",
                                },
                                { known: null != i, name: i },
                              ),
                        color: "primary",
                        size: "xl",
                        variant: "outline",
                        onClick: () => void d(e, "reject"),
                        children: (0, n.jsx)(o.A, {
                          id: "codex.pages.accessRequests.reject",
                          defaultMessage: "Deny",
                          description: "Reject this person's request without granting access",
                        }),
                      }),
                      (0, n.jsx)(c.$, {
                        "aria-label":
                          null == r
                            ? void 0
                            : ei.formatMessage(
                                {
                                  id: "codex.pages.accessRequests.grantRecipient",
                                  defaultMessage:
                                    "{known, select, true {Approve access for {name}} other {Approve access request}}",
                                  description:
                                    "Accessible label for granting the selected role to an access-request beneficiary, identified by name or email when available",
                                },
                                { known: null != i, name: i },
                              ),
                        color: "primary",
                        size: "xl",
                        onClick: () => void d(e, "approve"),
                        children: (0, n.jsx)(o.A, {
                          id: "codex.pages.accessRequests.grant",
                          defaultMessage: "Approve",
                          description: "Approve this request and grant the selected access role",
                        }),
                      }),
                    ],
                  }),
                },
                s,
              )
            )
          })),
          (X[1] = Y),
          (X[2] = el),
          (X[3] = ew?.pages),
          (X[4] = ev),
          (X[5] = ee?.open),
          (X[6] = eA),
          (X[7] = ei),
          (X[8] = eI),
          (X[9] = ej),
          (X[10] = eu),
          (X[11] = eo),
          (X[12] = ep),
          (X[13] = e_),
          (X[14] = eS),
          (X[15] = ex),
          (X[16] = es),
          (X[17] = ec),
          (X[18] = eh),
          (X[19] = ed),
          (X[20] = ea),
          (X[21] = em),
          (X[22] = en),
          (X[23] = a),
          (X[24] = l),
          (X[25] = U),
          (X[26] = q),
          (X[27] = M),
          (X[28] = P),
          (X[29] = $),
          (X[30] = F),
          (X[31] = O),
          (X[32] = E),
          (X[33] = D),
          (X[34] = L),
          (X[35] = G),
          (X[36] = Q))
      } else
        ((a = X[23]),
          (l = X[24]),
          (U = X[25]),
          (q = X[26]),
          (M = X[27]),
          (P = X[28]),
          ($ = X[29]),
          (F = X[30]),
          (O = X[31]),
          (E = X[32]),
          (D = X[33]),
          (L = X[34]),
          (G = X[35]),
          (Q = X[36]))
      ;(X[61] !== $ || X[62] !== F
        ? ((z = (0, n.jsx)("div", { className: $, children: F })), (X[61] = $), (X[62] = F), (X[63] = z))
        : (z = X[63]),
        X[64] !== el || X[65] !== eU || X[66] !== eA || X[67] !== eC
          ? ((H =
              el && eA
                ? (0, n.jsx)(g.$, {
                    color: "secondary",
                    loading: eC,
                    onClick: () => void eU(),
                    children: (0, n.jsx)(o.A, {
                      id: "codex.pages.accessRequests.more",
                      defaultMessage: "Load more",
                      description: "Load another page of pending access requests",
                    }),
                  })
                : null),
            (X[64] = el),
            (X[65] = eU),
            (X[66] = eA),
            (X[67] = eC),
            (X[68] = H))
          : (H = X[68]),
        X[69] !== a || X[70] !== z || X[71] !== H || X[72] !== O || X[73] !== E || X[74] !== D
          ? ((B = (0, n.jsxs)(a, { children: [O, E, D, z, H] })),
            (X[69] = a),
            (X[70] = z),
            (X[71] = H),
            (X[72] = O),
            (X[73] = E),
            (X[74] = D),
            (X[75] = B))
          : (B = X[75]),
        X[76] !== l || X[77] !== B || X[78] !== L || X[79] !== G
          ? ((V = (0, n.jsx)(l, { title: L, subtitle: G, children: B })),
            (X[76] = l),
            (X[77] = B),
            (X[78] = L),
            (X[79] = G),
            (X[80] = V))
          : (V = X[80]),
        X[81] !== U || X[82] !== M || X[83] !== P || X[84] !== V
          ? ((W = (0, n.jsx)(U, { onCloseAutoFocus: M, onClose: P, children: V })),
            (X[81] = U),
            (X[82] = M),
            (X[83] = P),
            (X[84] = V),
            (X[85] = W))
          : (W = X[85]))
      let eq = W
      X[86] !== J || X[87] !== Q ? ((Z = J?.(Q)), (X[86] = J), (X[87] = Q), (X[88] = Z)) : (Z = X[88])
      let eM = er && null == J ? Q : null,
        eP = er && q ? eq : null
      return (
        X[89] !== Z || X[90] !== eM || X[91] !== eP
          ? ((K = (0, n.jsxs)(n.Fragment, { children: [Z, eM, eP] })),
            (X[89] = Z),
            (X[90] = eM),
            (X[91] = eP),
            (X[92] = K))
          : (K = X[92]),
        K
      )
    }
    function k(e) {
      return (0, n.jsx)(U.u, { permission: e })
    }
    function N(e) {
      return null == e.recipients
        ? [{ request: e, recipient: void 0 }]
        : e.recipients.filter($).map((t) => ({ request: e, recipient: t }))
    }
    function $(e) {
      return "pending" === e.status
    }
    function T(e) {
      return e.requests
    }
    function R() {
      return new Set()
    }
    var F = a("pKVr"),
      O = a("Wj4L"),
      E = a("Um9I"),
      D = a("KQH2"),
      L = a("Y1D1"),
      G = a("slpy"),
      Q = a("BrEg"),
      z = a("hZax"),
      H = a("i1ww")
    function B(e) {
      let t,
        a,
        i,
        l,
        c,
        u,
        p = (0, r.c)(20),
        { pageId: g } = e,
        h = (0, s.gh)(I.u),
        f = (0, s.Ul)(w.spaceAccountId$)
      p[0] !== f || p[1] !== g ? ((t = { accountId: f, pageId: g }), (p[0] = f), (p[1] = g), (p[2] = t)) : (t = p[2])
      let m = t,
        _ = (0, s._U)(H.Io, m),
        v = (0, s._U)(H.$f, m),
        b = (0, z.Zj)("2621756053"),
        x = (0, d.A)()
      p[3] !== v || p[4] !== b || p[5] !== x
        ? ((a =
            b && v.enabled
              ? x.formatMessage({
                  id: "pages.presentation.stopFollowingChatGPT",
                  defaultMessage: "Stop following ChatGPT",
                  description:
                    "Accessible label for the ChatGPT avatar that returns presentation cursors to the header and stops following edits",
                })
              : x.formatMessage({
                  id: "pages.presentation.followChatGPT",
                  defaultMessage: "Follow ChatGPT",
                  description:
                    "Accessible label for the ChatGPT avatar that resumes following its edits in a presentation",
                })),
          (p[3] = v),
          (p[4] = b),
          (p[5] = x),
          (p[6] = a))
        : (a = p[6])
      let y = a,
        j = _ ? "border-blue" : void 0
      return (
        p[7] !== b || p[8] !== m || p[9] !== h
          ? ((i = () => h.set(H.$f, m, (e) => ({ ...e, enabled: !b || !e.enabled }))),
            (p[7] = b),
            (p[8] = m),
            (p[9] = h),
            (p[10] = i))
          : (i = p[10]),
        p[11] !== v || p[12] !== b
          ? ((l = (e) =>
              (0, n.jsx)(G.m, {
                content: (0, n.jsxs)("div", {
                  className: "flex flex-col items-center gap-1",
                  children: [
                    (0, n.jsx)(o.A, {
                      id: "pages.presentation.agentName",
                      defaultMessage: "ChatGPT",
                      description:
                        "Name of the agent in a presentation's collaborator facepile; do not translate ChatGPT",
                    }),
                    (0, n.jsx)("span", {
                      className: "opacity-60",
                      children:
                        b && v.enabled
                          ? (0, n.jsx)(o.A, {
                              id: "pages.presentation.clickToStopFollowing",
                              defaultMessage: "Click to stop following",
                              description:
                                "Tooltip instruction for returning ChatGPT's presentation cursors to the header and stopping automatic slide following",
                            })
                          : (0, n.jsx)(o.A, {
                              id: "pages.presentation.clickToFollow",
                              defaultMessage: "Click to follow",
                              description:
                                "Tooltip instruction for following ChatGPT's edits by clicking its avatar in a presentation",
                            }),
                    }),
                  ],
                }),
                children: e,
              })),
            (p[11] = v),
            (p[12] = b),
            (p[13] = l))
          : (l = p[13]),
        p[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, n.jsx)("span", {
              "data-presentation-creation-avatar": !0,
              className: "flex size-6 items-center justify-center rounded-full bg-black text-white",
              children: (0, n.jsx)(Q.A, { className: "size-4", "aria-hidden": "true" }),
            })),
            (p[14] = c))
          : (c = p[14]),
        p[15] !== y || p[16] !== j || p[17] !== i || p[18] !== l
          ? ((u = (0, n.jsx)(D.e, {
              ariaLabel: y,
              borderClassName: j,
              onClick: i,
              tooltip: y,
              renderTooltip: l,
              children: c,
            })),
            (p[15] = y),
            (p[16] = j),
            (p[17] = i),
            (p[18] = l),
            (p[19] = u))
          : (u = p[19]),
        u
      )
    }
    var V = a("HGub"),
      W = a("tzqa"),
      Z = a("CNwL")
    function K(e) {
      let t,
        a,
        s = (0, r.c)(11),
        { canShare: i, onLocate: o, onOpen: l, pageId: c, session: u, showPlaceholder: p } = e,
        g = void 0 !== p && p,
        h = (0, d.A)()
      return (
        s[0] !== h || s[1] !== o || s[2] !== l || s[3] !== c || s[4] !== g
          ? ((t = (e) =>
              (0, n.jsx)(Z.c, {
                pageId: c,
                collapsible: e[0]?.kind !== "presentationAgent",
                showPlaceholder: g,
                people: e.map((e) => {
                  let t
                  if ("presentationAgent" === e.kind)
                    return {
                      id: "presentation-creation-agent",
                      name: e.displayName,
                      avatar: (0, n.jsx)(B, { pageId: c }),
                    }
                  let a = "editing" === e.activity,
                    r = "hasAccess" !== e.activity
                  t = r
                    ? h.formatMessage(
                        {
                          id: "codex.space.page.collaborator.tooltip",
                          defaultMessage: "{name} is {editing, select, true {editing} other {viewing}}",
                          description:
                            "Tooltip over a collaborator avatar in a shared Page header; name is the collaborator's display name and editing indicates whether their cursor is active",
                        },
                        { editing: String(a), name: e.displayName },
                      )
                    : e.isCurrentUser
                      ? h.formatMessage(
                          {
                            id: "codex.space.page.collaborator.localAccessTooltip",
                            defaultMessage: "{name} (you)",
                            description:
                              "Tooltip over the signed-in person's avatar in a shared Page header when they are not active in another session; name is their display name",
                          },
                          { name: e.displayName },
                        )
                      : h.formatMessage(
                          {
                            id: "codex.space.page.collaborator.accessTooltip",
                            defaultMessage: "{name} has access",
                            description:
                              "Tooltip over the neutral avatar of a person who can access a shared Page but is not currently active in its document",
                          },
                          { name: e.displayName },
                        )
                  let s = a && !e.isCurrentUser && null != o,
                    i = s || null != l
                  return {
                    id: e.accountUserId,
                    name: e.displayName,
                    label: (0, n.jsx)(x.Ve, {
                      accountUserId: e.accountUserId,
                      label: e.displayName,
                      children: e.displayName,
                    }),
                    avatar: (0, n.jsx)(D.e, {
                      ariaLabel: s
                        ? h.formatMessage(
                            {
                              id: "codex.space.page.collaborator.locateLabel",
                              defaultMessage: "Go to {name}’s cursor",
                              description:
                                "Accessible label for a collaborator avatar button that scrolls to that person's cursor in a shared Page; name is the collaborator's display name",
                            },
                            { name: e.displayName },
                          )
                        : t,
                      borderClassName: a ? (0, V.C)(e.accountUserId).caret : void 0,
                      onClick: i
                        ? () => {
                            ;(s && o(e.accountUserId)) || l?.()
                          }
                        : void 0,
                      renderTooltip: (a) =>
                        (0, n.jsx)(x.Ve, {
                          accountUserId: e.accountUserId,
                          fallbackTooltip: t,
                          label: e.displayName,
                          triggerIsFocusable: i,
                          children: a,
                        }),
                      tooltip: t,
                      children: (0, n.jsx)(b.Y, {
                        accountUserId: e.accountUserId,
                        loadingFallback: (0, n.jsx)(L.T, {}),
                        muted: !r && !e.isCurrentUser,
                        name: e.displayName,
                      }),
                    }),
                  }
                }),
              })),
            (s[0] = h),
            (s[1] = o),
            (s[2] = l),
            (s[3] = c),
            (s[4] = g),
            (s[5] = t))
          : (t = s[5]),
        s[6] !== i || s[7] !== c || s[8] !== u || s[9] !== t
          ? ((a = (0, n.jsx)(W.d, { pageId: c, session: u, canShare: i, children: t })),
            (s[6] = i),
            (s[7] = c),
            (s[8] = u),
            (s[9] = t),
            (s[10] = a))
          : (a = s[10]),
        a
      )
    }
    var X = a("rpnz"),
      Y = a("xrkS"),
      J = a("HNZf"),
      ee = a("oPCO"),
      et = a("rH0R"),
      ea = a("gKie"),
      en = a("qsTb"),
      er = a("RiLw")
    function es(e) {
      let t,
        a,
        o,
        c,
        u,
        p,
        g = (0, r.c)(54),
        {
          canShare: h,
          children: f,
          dialog: m,
          renderDialog: v,
          onLocateCollaborator: b,
          pageId: x,
          session: y,
          presence: j,
          comments: S,
          showShareAction: A,
        } = e,
        U = void 0 === v || v,
        q = void 0 === j ? y : j,
        M = (0, s.gh)(I.u),
        P = (0, d.A)(),
        k = (0, s._U)(w.loadedSpacePageMetadata$, x),
        N = (0, s.Ul)(C.dt),
        $ = (0, s.Ul)(w.spaceAccountId$),
        { data: T, isError: R } = (0, l.oV)()
      g[0] !== $ || g[1] !== T?.accounts
        ? ((t = T?.accounts?.find((e) => e.id === $)), (g[0] = $), (g[1] = T?.accounts), (g[2] = t))
        : (t = g[2])
      let F = t,
        D = (0, s._U)(E.jy, x),
        L = (0, s._U)(E.G2, x)
      g[3] !== L || g[4] !== F?.structure || g[5] !== R || g[6] !== D || g[7] !== k || g[8] !== x || g[9] !== N
        ? ((a =
            N &&
            !(0, X.sD)(x) &&
            !R &&
            F?.structure === "workspace" &&
            (0, ee.U)(k) &&
            L?.can_read === !0 &&
            !1 === L.can_share &&
            "request_changes" !== D),
          (g[3] = L),
          (g[4] = F?.structure),
          (g[5] = R),
          (g[6] = D),
          (g[7] = k),
          (g[8] = x),
          (g[9] = N),
          (g[10] = a))
        : (a = g[10])
      let Q = a,
        [z, H] = (0, i.useState)(!1),
        B = m?.open ?? z,
        V = m?.onOpenChange ?? H
      g[11] !== Q || g[12] !== h || g[13] !== V || g[14] !== A
        ? ((o =
            (h || Q) && A
              ? () => {
                  V(!0)
                }
              : void 0),
          (g[11] = Q),
          (g[12] = h),
          (g[13] = V),
          (g[14] = A),
          (g[15] = o))
        : (o = g[15])
      let W = o
      if (
        g[16] !== h ||
        g[17] !== f ||
        g[18] !== m?.triggerRef ||
        g[19] !== P ||
        g[20] !== k ||
        g[21] !== b ||
        g[22] !== W ||
        g[23] !== x ||
        g[24] !== q ||
        g[25] !== M
      ) {
        let e,
          t,
          a,
          r,
          s = k?.access.can_read === !0 && (0, O.rr)(k)
        g[27] !== h || g[28] !== k || g[29] !== W || g[30] !== x || g[31] !== M
          ? ((e =
              null == W
                ? void 0
                : () => {
                    if ((et.PageSharingDialog.prefetch(), h && (0, ee.U)(k) && M.get(_.Sz))) {
                      M.query.fetch(J.e2, { type: "page", id: x }).catch(ei)
                      let e = M.query.getOptions(Y.G, { type: "page", id: x })
                      e.enabled && M.queryClient.prefetchQuery(e)
                    }
                  }),
            (g[27] = h),
            (g[28] = k),
            (g[29] = W),
            (g[30] = x),
            (g[31] = M),
            (g[32] = e))
          : (e = g[32])
        let i = e
        g[33] !== P
          ? ((t = P.formatMessage({
              id: "codex.space.page.share",
              defaultMessage: "Share",
              description:
                "Button in the shared Page header that opens its people and groups access dialog for an owner or editor",
            })),
            (g[33] = P),
            (g[34] = t))
          : (t = g[34])
        let o = t
        ;(g[35] !== m?.triggerRef || g[36] !== W || g[37] !== i || g[38] !== o
          ? ((a =
              null != W
                ? (0, n.jsx)(G.m, {
                    enabledWhen: "target-hidden",
                    content: o,
                    children: (0, n.jsx)(er.c, { ref: m?.triggerRef, "aria-label": o, onFocus: i, onClick: W }),
                  })
                : null),
            (g[35] = m?.triggerRef),
            (g[36] = W),
            (g[37] = i),
            (g[38] = o),
            (g[39] = a))
          : (a = g[39]),
          g[40] !== a ? ((r = (0, n.jsx)(n.Fragment, { children: a })), (g[40] = a), (g[41] = r)) : (r = g[41]),
          (c = f({
            controls: r,
            onShare: W,
            people:
              (null != q || s) &&
              (0, n.jsx)(K, { canShare: h, onLocate: b, onOpen: W, pageId: x, session: q, showPlaceholder: s }),
            prewarmSharing: i,
          })),
          (g[16] = h),
          (g[17] = f),
          (g[18] = m?.triggerRef),
          (g[19] = P),
          (g[20] = k),
          (g[21] = b),
          (g[22] = W),
          (g[23] = x),
          (g[24] = q),
          (g[25] = M),
          (g[26] = c))
      } else c = g[26]
      return (
        g[42] !== h ||
        g[43] !== S ||
        g[44] !== m?.onCloseAutoFocus ||
        g[45] !== W ||
        g[46] !== B ||
        g[47] !== x ||
        g[48] !== U ||
        g[49] !== V
          ? ((u =
              U && null != W && B
                ? (0, n.jsx)(et.PageSharingDialog, {
                    pageId: x,
                    comments: S,
                    requestAccess: !h,
                    onClose: () => V(!1),
                    onCloseAutoFocus: m?.onCloseAutoFocus,
                  })
                : null),
            (g[42] = h),
            (g[43] = S),
            (g[44] = m?.onCloseAutoFocus),
            (g[45] = W),
            (g[46] = B),
            (g[47] = x),
            (g[48] = U),
            (g[49] = V),
            (g[50] = u))
          : (u = g[50]),
        g[51] !== c || g[52] !== u
          ? ((p = (0, n.jsxs)(n.Fragment, { children: [c, u] })), (g[51] = c), (g[52] = u), (g[53] = p))
          : (p = g[53]),
        p
      )
    }
    function ei() {}
    function eo(e) {
      let t,
        a,
        c,
        u,
        p,
        g,
        h,
        f,
        m,
        v,
        b,
        x,
        y = (0, r.c)(49),
        { canShare: j, children: S, dialog: A, renderDialog: U, pageId: q, space: M } = e,
        P = void 0 === U || U,
        k = (0, s.gh)(I.u),
        N = (0, d.A)(),
        $ = (0, s.Ul)(C.dt),
        T = (0, s.Ul)(w.spaceAccountId$),
        { data: R, isError: F } = (0, l.oV)()
      y[0] !== T || y[1] !== R?.accounts
        ? ((t = R?.accounts?.find((e) => e.id === T)), (y[0] = T), (y[1] = R?.accounts), (y[2] = t))
        : (t = y[2])
      let O = t,
        D = (0, s._U)(w.loadedSpacePageMetadata$, M.root_page_id),
        [L, Q] = (0, i.useState)(!1),
        z = A?.open ?? L,
        H = A?.onOpenChange ?? Q,
        B = null == M.interaction_mode
      y[3] !== B ? ((a = { enabled: B }), (y[3] = B), (y[4] = a)) : (a = y[4])
      let { data: V } = (0, s._U)(w.spaceQuery$, M.id, a)
      ;(y[5] !== M.id ? ((c = { type: "space", id: M.id }), (y[5] = M.id), (y[6] = c)) : (c = y[6]),
        y[7] !== j ? ((u = { enabled: j }), (y[7] = j), (y[8] = u)) : (u = y[8]))
      let { data: W } = (0, s._U)(J.e2, c, u),
        Z = null != W && (0, J.TO)(W),
        K =
          $ &&
          !F &&
          O?.structure === "workspace" &&
          D?.drive_space_id === M.id &&
          !0 === D.access.can_read &&
          !1 === D.access.can_share
      y[9] !== K || y[10] !== j || y[11] !== V?.interaction_mode || y[12] !== k || y[13] !== H || y[14] !== M
        ? ((p =
            "request_changes" !== (0, E.wI)(M.interaction_mode, V?.interaction_mode) && (j || K)
              ? () => {
                  ;(0, ea.h)(k, M, () => H(!0))
                }
              : void 0),
          (y[9] = K),
          (y[10] = j),
          (y[11] = V?.interaction_mode),
          (y[12] = k),
          (y[13] = H),
          (y[14] = M),
          (y[15] = p))
        : (p = y[15])
      let X = p
      y[16] !== j || y[17] !== X || y[18] !== k || y[19] !== M.id
        ? ((g =
            null == X
              ? void 0
              : () => {
                  if ((et.vC.prefetch(), j && k.get(_.Sz))) {
                    k.query.fetch(J.e2, { type: "space", id: M.id }).catch(el)
                    let e = k.query.getOptions(Y.G, { type: "space", id: M.id })
                    e.enabled && k.queryClient.prefetchQuery(e)
                  }
                }),
          (y[16] = j),
          (y[17] = X),
          (y[18] = k),
          (y[19] = M.id),
          (y[20] = g))
        : (g = y[20])
      let ee = g
      y[21] !== N || y[22] !== M.name
        ? ((h = N.formatMessage(
            {
              id: "codex.space.share",
              defaultMessage: "Share {spaceName}",
              description: "Button in a Space root Page header that opens the Space sharing dialog",
            },
            { spaceName: M.name },
          )),
          (y[21] = N),
          (y[22] = M.name),
          (y[23] = h))
        : (h = y[23])
      let er = h
      ;(y[24] !== A?.triggerRef || y[25] !== X || y[26] !== ee || y[27] !== er
        ? ((f =
            null != X &&
            (0, n.jsx)(G.m, {
              enabledWhen: "target-hidden",
              content: er,
              children: (0, n.jsx)(en.DW, {
                ref: A?.triggerRef,
                "aria-label": er,
                onFocus: ee,
                onClick: X,
                children: (0, n.jsx)(o.A, {
                  id: "codex.space.overview.shareSpace",
                  defaultMessage: "Share Space",
                  description: "Button on the Space overview that shares the whole Space",
                }),
              }),
            })),
          (y[24] = A?.triggerRef),
          (y[25] = X),
          (y[26] = ee),
          (y[27] = er),
          (y[28] = f))
        : (f = y[28]),
        y[29] !== f ? ((m = (0, n.jsx)(n.Fragment, { children: f })), (y[29] = f), (y[30] = m)) : (m = y[30]))
      let es = m,
        ei = Z ? X : void 0
      return (
        y[31] !== S || y[32] !== es || y[33] !== X || y[34] !== ee || y[35] !== ei
          ? ((v = S({ controls: es, facepileOnOpen: ei, onShare: X, people: null, prewarmSharing: ee })),
            (y[31] = S),
            (y[32] = es),
            (y[33] = X),
            (y[34] = ee),
            (y[35] = ei),
            (y[36] = v))
          : (v = y[36]),
        y[37] !== j ||
        y[38] !== A?.onCloseAutoFocus ||
        y[39] !== X ||
        y[40] !== z ||
        y[41] !== q ||
        y[42] !== P ||
        y[43] !== H ||
        y[44] !== M
          ? ((b =
              P && null != X && z
                ? (0, n.jsx)(et.vC, {
                    pageId: q,
                    requestAccess: !j,
                    space: M,
                    onClose: () => H(!1),
                    onCloseAutoFocus: A?.onCloseAutoFocus,
                  })
                : null),
            (y[37] = j),
            (y[38] = A?.onCloseAutoFocus),
            (y[39] = X),
            (y[40] = z),
            (y[41] = q),
            (y[42] = P),
            (y[43] = H),
            (y[44] = M),
            (y[45] = b))
          : (b = y[45]),
        y[46] !== v || y[47] !== b
          ? ((x = (0, n.jsxs)(n.Fragment, { children: [v, b] })), (y[46] = v), (y[47] = b), (y[48] = x))
          : (x = y[48]),
        x
      )
    }
    function el() {}
    var ec = a("pZQ9")
    function ed(e) {
      let t,
        a = (0, r.c)(10),
        i = (0, s._U)(w.loadedSpacePageMetadata$, e.pageId)
      if (e.disabled) {
        let t, r, s
        return (
          a[0] !== i || a[1] !== e.pageId
            ? ((t =
                i?.access.can_read === !0 && (0, O.rr)(i)
                  ? (0, n.jsx)(Z.c, { pageId: e.pageId, people: [], showPlaceholder: !0 })
                  : null),
              (a[0] = i),
              (a[1] = e.pageId),
              (a[2] = t))
            : (t = a[2]),
          a[3] !== e.children || a[4] !== t
            ? ((r = e.children({
                accessRequestReview: null,
                controls: null,
                onShare: void 0,
                people: t,
                prewarmSharing: void 0,
                requestEditAccess: null,
              })),
              (a[3] = e.children),
              (a[4] = t),
              (a[5] = r))
            : (r = a[5]),
          a[6] !== r ? ((s = (0, n.jsx)(n.Fragment, { children: r })), (a[6] = r), (a[7] = s)) : (s = a[7]),
          s
        )
      }
      return (a[8] !== e ? ((t = (0, n.jsx)(eu, { ...e })), (a[8] = e), (a[9] = t)) : (t = a[9]), t)
    }
    function eu(e) {
      let t,
        a,
        i,
        o,
        l = (0, r.c)(35),
        {
          canShare: c,
          children: d,
          dialog: u,
          accessRequestDialog: p,
          editAccessDialog: g,
          renderDialog: h,
          isOwner: f,
          onLocateCollaborator: m,
          pageId: _,
          session: v,
          presence: b,
          comments: x,
        } = e,
        y = void 0 === b ? v : b,
        { data: I, isError: j } = (0, s.Ul)(w.spacesQuery$),
        { space: S, isDriveBacked: A } = (0, s._U)(w.spacePageContext$, _),
        U = (0, s._U)(w.loadedSpacePageMetadata$, _)
      l[0] !== p ||
      l[1] !== A ||
      l[2] !== f ||
      l[3] !== U?.drive_scope ||
      l[4] !== U?.parent ||
      l[5] !== _ ||
      l[6] !== h ||
      l[7] !== S
        ? ((t = (e) => {
            let t = null,
              a = { dialog: p, renderDialog: h, children: null == p ? void 0 : e }
            return (
              S?.root_page_id === _
                ? (t = (0, n.jsx)(eg, { ...a, spaceId: S.id }))
                : f &&
                  !0 === A &&
                  (U?.drive_scope === "personal" || U?.parent != null || null != S) &&
                  (t = (0, n.jsx)(q, { ...a, target: { kind: "page", id: _ } })),
              null == p || null == t ? e(t) : t
            )
          }),
          (l[0] = p),
          (l[1] = A),
          (l[2] = f),
          (l[3] = U?.drive_scope),
          (l[4] = U?.parent),
          (l[5] = _),
          (l[6] = h),
          (l[7] = S),
          (l[8] = t))
        : (t = l[8])
      let C = t
      l[9] !== c ||
      l[10] !== d ||
      l[11] !== x ||
      l[12] !== u ||
      l[13] !== A ||
      l[14] !== j ||
      l[15] !== U ||
      l[16] !== m ||
      l[17] !== _ ||
      l[18] !== y ||
      l[19] !== C ||
      l[20] !== h ||
      l[21] !== v ||
      l[22] !== S ||
      l[23] !== I
        ? ((a = (e) =>
            S?.root_page_id === _
              ? (0, n.jsx)(eo, {
                  canShare: c,
                  dialog: u,
                  renderDialog: h,
                  pageId: _,
                  space: S,
                  children: (t) => {
                    let { controls: a, facepileOnOpen: r, onShare: s, prewarmSharing: i } = t,
                      o = U?.access.can_read === !0 && (0, O.rr)(U)
                    return C((t) =>
                      d({
                        accessRequestReview: t,
                        controls: (0, n.jsxs)(n.Fragment, { children: [a, t] }),
                        onShare: s,
                        requestEditAccess: e,
                        people:
                          (null != y || o) &&
                          (0, n.jsx)(K, {
                            canShare: !1,
                            onLocate: m,
                            onOpen: r,
                            pageId: _,
                            session: y,
                            showPlaceholder: o,
                          }),
                        prewarmSharing: i,
                      }),
                    )
                  },
                })
              : (0, n.jsx)(es, {
                  canShare: c && null != A,
                  dialog: u,
                  renderDialog: h,
                  onLocateCollaborator: m,
                  pageId: _,
                  presence: y,
                  comments: x,
                  session: v,
                  showShareAction: !0 === A || (!1 === A && (null != I || j)),
                  children: (t) =>
                    C((a) =>
                      d({
                        ...t,
                        requestEditAccess: e,
                        accessRequestReview: a,
                        controls: (0, n.jsxs)(n.Fragment, { children: [t.controls, a] }),
                      }),
                    ),
                })),
          (l[9] = c),
          (l[10] = d),
          (l[11] = x),
          (l[12] = u),
          (l[13] = A),
          (l[14] = j),
          (l[15] = U),
          (l[16] = m),
          (l[17] = _),
          (l[18] = y),
          (l[19] = C),
          (l[20] = h),
          (l[21] = v),
          (l[22] = S),
          (l[23] = I),
          (l[24] = a))
        : (a = l[24])
      let M = a,
        P = !0 === A
      return (
        l[25] !== _ || l[26] !== S
          ? ((i = S?.root_page_id === _ ? { kind: "space", id: S.id } : { kind: "page", id: _ }),
            (l[25] = _),
            (l[26] = S),
            (l[27] = i))
          : (i = l[27]),
        l[28] !== g || l[29] !== _ || l[30] !== h || l[31] !== M || l[32] !== P || l[33] !== i
          ? ((o = (0, n.jsx)(
              ep,
              { dialog: g, isDriveBacked: P, pageId: _, renderDialog: h, target: i, children: M },
              _,
            )),
            (l[28] = g),
            (l[29] = _),
            (l[30] = h),
            (l[31] = M),
            (l[32] = P),
            (l[33] = i),
            (l[34] = o))
          : (o = l[34]),
        o
      )
    }
    function ep(e) {
      let t,
        a,
        c,
        d,
        u,
        p,
        g = (0, r.c)(23),
        { children: h, dialog: f, isDriveBacked: m, pageId: _, renderDialog: v, target: b } = e,
        x = void 0 === v || v,
        y = (0, s._U)(w.loadedSpacePageMetadata$, _),
        I = (0, s._U)(E.mS, _),
        j = (0, s.Ul)(C.dt),
        S = (0, s.Ul)(w.spaceAccountId$),
        { data: A, isError: U } = (0, l.oV)(),
        q = A?.accounts?.find((e) => e.id === S),
        [M, P] = (0, i.useState)(!1),
        k = f?.open ?? M,
        N = f?.onOpenChange ?? P
      if (
        !m ||
        !j ||
        U ||
        !(0, C.BI)(q) ||
        y?.access.can_read !== !0 ||
        !1 !== y.access.can_write ||
        !1 !== y.access.can_share ||
        I.loading ||
        "request_changes" === I.mode
      ) {
        let e, t
        return (
          g[0] !== h ? ((e = h(null)), (g[0] = h), (g[1] = e)) : (e = g[1]),
          g[2] !== e ? ((t = (0, n.jsx)(n.Fragment, { children: e })), (g[2] = e), (g[3] = t)) : (t = g[3]),
          t
        )
      }
      let $ = f?.triggerRef
      return (
        g[4] !== N ? ((t = () => N(!0)), (g[4] = N), (g[5] = t)) : (t = g[5]),
        g[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, n.jsx)(o.A, {
              id: "codex.pages.requestEditAccess.button",
              defaultMessage: "Request edit access",
              description: "Button for a Page viewer or commenter to ask the owner for a higher role",
            })),
            (g[6] = a))
          : (a = g[6]),
        g[7] !== $ || g[8] !== t
          ? ((c = (0, n.jsx)(ec.DW, { ref: $, onClick: t, children: a })), (g[7] = $), (g[8] = t), (g[9] = c))
          : (c = g[9]),
        g[10] !== h || g[11] !== c ? ((d = h(c)), (g[10] = h), (g[11] = c), (g[12] = d)) : (d = g[12]),
        g[13] !== f?.onCloseAutoFocus || g[14] !== k || g[15] !== _ || g[16] !== x || g[17] !== N || g[18] !== b
          ? ((u =
              x && k
                ? (0, n.jsx)(et.cH, {
                    target: b,
                    pageId: _,
                    onClose: () => N(!1),
                    onCloseAutoFocus: f?.onCloseAutoFocus,
                  })
                : null),
            (g[13] = f?.onCloseAutoFocus),
            (g[14] = k),
            (g[15] = _),
            (g[16] = x),
            (g[17] = N),
            (g[18] = b),
            (g[19] = u))
          : (u = g[19]),
        g[20] !== d || g[21] !== u
          ? ((p = (0, n.jsxs)(n.Fragment, { children: [d, u] })), (g[20] = d), (g[21] = u), (g[22] = p))
          : (p = g[22]),
        p
      )
    }
    function eg(e) {
      let t,
        a = (0, r.c)(6),
        { children: i, dialog: o, renderDialog: l, spaceId: c } = e,
        d = (0, s._U)(F.t5, c)
      return (
        a[0] !== i || a[1] !== o || a[2] !== d?.isOwner || a[3] !== l || a[4] !== c
          ? ((t =
              d?.isOwner === !0
                ? (0, n.jsx)(q, { target: { kind: "space", id: c }, dialog: o, renderDialog: l, children: i })
                : (0, n.jsx)(n.Fragment, { children: i?.(null) })),
            (a[0] = i),
            (a[1] = o),
            (a[2] = d?.isOwner),
            (a[3] = l),
            (a[4] = c),
            (a[5] = t))
          : (t = a[5]),
        t
      )
    }
  },
  F0H9(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      s = a("zTeN"),
      i = a("zd8w"),
      o = a("oyxz"),
      l = a("HZfM"),
      c = a("ASxG"),
      d = a("SPnB"),
      u = a("Ghh3"),
      p = a("w5lF"),
      g = a("ygO2"),
      h = a("GO7r"),
      f = a("Bbed"),
      m = a("UxN3"),
      _ = a("OoIX"),
      v = a("e1xH"),
      b = a("SEOK"),
      x = a("Zgkx"),
      y = a("pyoT"),
      w = a("OWtl"),
      I = a("eShZ")
    let j = (0, f._)(async () => (await a.e(561703).then(a.bind(a, "S5bf"))).PageImportDialogForHost),
      S = c.object({
        code: c.enum(["notion_connection_required", "notion_connection_selection_required", "notion_reauth_required"]),
        retryable: c.literal(!1),
        app_id: c.string().min(1),
        connections: c.array(c.object({ link_id: c.string().min(1), label: c.string(), reauth_required: c.boolean() })),
      }),
      A = c.object({
        import_id: c.string().min(1),
        status: c.enum(["pending", "completed", "failed"]),
        page_id: c.string().min(1).nullable().optional(),
        warnings: c.array(c.string()).optional(),
        error: c.object({ code: c.string(), retryable: c.boolean() }).nullable().optional(),
      })
    function U(e) {
      let t,
        a,
        f,
        U,
        C = (0, r.c)(15),
        { accountId: q, userId: M, space: P, navigation: k } = e,
        N = (0, s.gh)(w.u),
        $ = (0, l.Zp)(),
        T = (0, l.zy)(),
        [R, F] = (0, i.useState)(!1),
        [O, E] = (0, i.useState)(null),
        [D, L] = (0, i.useState)(null)
      return (
        C[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = () => {
              ;(E(null), L(null), F(!0))
            }),
            (C[0] = t))
          : (t = C[0]),
        C[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, n.jsxs)(g.$, {
              color: "ghostActive",
              size: "toolbar",
              radius: "full",
              onClick: t,
              children: [
                (0, n.jsx)(m.b5, { icon: { 16: h.MxM, 20: h.vHO } }),
                (0, n.jsx)(o.A, {
                  id: "codex.pages.import.action",
                  defaultMessage: "Import",
                  description: "Open the dialog to import content as a new Page in this Space",
                }),
              ],
            })),
            (C[1] = a))
          : (a = C[1]),
        C[2] !== q ||
        C[3] !== T ||
        C[4] !== $ ||
        C[5] !== k ||
        C[6] !== R ||
        C[7] !== D ||
        C[8] !== O ||
        C[9] !== N ||
        C[10] !== P ||
        C[11] !== M
          ? ((f = R
              ? (0, n.jsx)(i.Suspense, {
                  fallback: null,
                  children: (0, n.jsx)(j, {
                    onClose: () => F(!1),
                    onImport: async (e, t) => {
                      let a = () => {
                        t.throwIfAborted()
                        let e = N.query.getData(y.spacePageAncestryQuery$, P.root_page_id)
                        if (
                          N.get(y.spaceAccountId$) !== q ||
                          N.get(d.o8) !== M ||
                          !N.get(v.W2) ||
                          e?.metadata.access.can_write !== !0 ||
                          null != e.metadata.deleted_at ||
                          N.query.getData(y.spaceQuery$, P.id)?.interaction_mode === "request_changes"
                        )
                          throw Error("page_import_unavailable")
                        ;(0, _.Jx)(N, P.root_page_id)
                      }
                      try {
                        let n
                        a()
                        let r =
                          O?.provider === e.provider &&
                          O.format === e.format &&
                          O.content === e.content &&
                          ("url" === O.format ? O.link_id : void 0) === ("url" === e.format ? e.link_id : void 0)
                            ? O
                            : { ...e, parent_page_id: P.root_page_id }
                        E(r)
                        let s = {
                            additionalHeaders: { ...x.w, "ChatGPT-Account-ID": q },
                            expectedIdentity: { accountId: q, userId: M },
                            assertRequestCurrent: a,
                            signal: t,
                            retry: "never",
                            expectedErrorStatuses: [400, 403, 404, 409, 413, 422, 503],
                          },
                          i = r === O ? D : null
                        if (null == i) {
                          L(null)
                          let e =
                            "url" === r.format
                              ? await u.Request.safePost("/pages/import/jobs", {
                                  ...s,
                                  requestBody: r,
                                  signal: AbortSignal.any([t, AbortSignal.timeout(6e4)]),
                                })
                              : await u.Request.safePost("/pages/import", { ...s, requestBody: r })
                          ;(a(), "import_id" in e ? ((i = c.string().min(1).parse(e.import_id)), L(i)) : (n = e))
                        }
                        if (null != i)
                          for (;;) {
                            a()
                            let e = A.parse(
                              await u.Request.safeGet("/pages/import/jobs/{import_id}", {
                                ...s,
                                parameters: { path: { import_id: i } },
                                cache: "no-store",
                                signal: AbortSignal.any([t, AbortSignal.timeout(1e4)]),
                              }),
                            )
                            if ((a(), e.import_id !== i)) return "failed"
                            if ("failed" === e.status) {
                              if ((L(null), E(null), e.error?.code === "notion_source_unverifiable"))
                                return "unverifiable"
                              if (e.error?.code === "notion_source_forbidden") return "source_rejected"
                              return "failed"
                            }
                            if ("completed" === e.status) {
                              let t = c.string().min(1).parse(e.page_id)
                              if (
                                ((n = await u.Request.safeGet("/pages/{page_id}", {
                                  ...s,
                                  parameters: {
                                    path: { page_id: t },
                                    query: { include_content: !0, include_document_bootstrap: !0 },
                                  },
                                  cache: "no-store",
                                })),
                                a(),
                                n.metadata.page_id !== t)
                              )
                                return "failed"
                              break
                            }
                            await new Promise((e) => {
                              let a = () => {
                                  ;(clearTimeout(n), t.removeEventListener("abort", a), e())
                                },
                                n = setTimeout(a, 2e3)
                              ;(t.addEventListener("abort", a, { once: !0 }), t.aborted && a())
                            })
                          }
                        if (null == n) return "failed"
                        return (
                          a(),
                          (0, y.cacheCreatedSpacePage)(N, q, n),
                          F(!1),
                          null != k
                            ? k.onOpenPage(n.metadata.page_id)
                            : await $(`/space/${n.metadata.page_id}`, {
                                state: {
                                  ...(0, b.$)(T, q, n.metadata.page_id),
                                  spaceSidebarAccountId: q,
                                  spaceSidebarRootPageId: P.root_page_id,
                                },
                              }),
                          "imported"
                        )
                      } catch (e) {
                        if (e instanceof I.fk) {
                          if (409 === e.status && e.diagnosticError instanceof p.rX) {
                            let t = S.safeParse(e.diagnosticError.json)
                            if (t.success) return { kind: "connection", connection: t.data }
                          }
                          if ("notion_source_unverifiable" === e.errorCode) return "unverifiable"
                          if ("notion_source_forbidden" === e.errorCode) return "source_rejected"
                          if (413 === e.status) return "too_large"
                          if (400 === e.status || 422 === e.status) return "unsupported"
                          if (403 === e.status || 404 === e.status) return "rejected"
                        }
                        return "failed"
                      }
                    },
                  }),
                })
              : null),
            (C[2] = q),
            (C[3] = T),
            (C[4] = $),
            (C[5] = k),
            (C[6] = R),
            (C[7] = D),
            (C[8] = O),
            (C[9] = N),
            (C[10] = P),
            (C[11] = M),
            (C[12] = f))
          : (f = C[12]),
        C[13] !== f ? ((U = (0, n.jsxs)(n.Fragment, { children: [a, f] })), (C[13] = f), (C[14] = U)) : (U = C[14]),
        U
      )
    }
    a.d(
      t,
      {},
      {
        B: function (e) {
          let t,
            a = (0, r.c)(6),
            { space: i, isActive: o, navigation: l } = e,
            c = (0, s.Ul)(y.spaceAccountId$),
            u = (0, s.Ul)(d.o8),
            p = (0, s.Ul)(v.W2),
            g = (0, s._U)(_.m2, i.root_page_id),
            { data: h, isError: f } = (0, s._U)(y.spacePageAncestryQuery$, i.root_page_id)
          if (
            !p ||
            !o ||
            null == c ||
            null == u ||
            null != g ||
            f ||
            h?.metadata.access.can_write !== !0 ||
            null != h.metadata.deleted_at ||
            "request_changes" === i.interaction_mode
          )
            return null
          let m = `${c}:${u}:${i.id}:${i.root_page_id}`
          return (
            a[0] !== c || a[1] !== l || a[2] !== i || a[3] !== m || a[4] !== u
              ? ((t = (0, n.jsx)(U, { accountId: c, userId: u, space: i, navigation: l }, m)),
                (a[0] = c),
                (a[1] = l),
                (a[2] = i),
                (a[3] = m),
                (a[4] = u),
                (a[5] = t))
              : (t = a[5]),
            t
          )
        },
      },
    )
  },
  H2BV(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      s = a("zTeN"),
      i = a("Wf1j"),
      o = a("oyxz"),
      l = a("HZfM"),
      c = a("E8Sp"),
      d = a("ygO2"),
      u = a("bqtn"),
      p = a("GO7r"),
      g = a("UxN3"),
      h = a("SGsN"),
      f = a("HFg1"),
      m = a("OWtl"),
      _ = a("khOd"),
      v = a("n8vi"),
      b = a("OoIX"),
      x = a("vWM6"),
      y = a("rpnz"),
      w = a("e1xH"),
      I = a("cGL0"),
      j = a("pyoT"),
      S = a("SEOK")
    a.d(
      t,
      {},
      {
        SpaceCreateMenu: function (e) {
          let t,
            a,
            A,
            U,
            C,
            q,
            M,
            P,
            k = (0, r.c)(33),
            { open: N, onOpenChange: $, space: T } = e,
            R = (0, s.gh)(m.u),
            F = (0, i.A)(),
            O = (0, l.Zp)(),
            E = (0, l.zy)(),
            D = (0, s.Ul)(w.q),
            L = (0, s.Ul)(_.GB),
            G = (0, s.Ul)(y.ut),
            Q = (0, s._U)(b.m2, T?.root_page_id),
            z = null != T
          k[0] !== z ? ((t = { enabled: z }), (k[0] = z), (k[1] = t)) : (t = k[1])
          let { data: H, isError: B } = (0, s._U)(j.spacePageAncestryQuery$, T?.root_page_id ?? "", t),
            V =
              null == Q &&
              (null == T || (!B && H?.metadata.access.can_write === !0 && "request_changes" !== T.interaction_mode)),
            W = V && !G ? x.o : void 0
          k[2] !== D ? ((a = D.includes("granola_whiteboard")), (k[2] = D), (k[3] = a)) : (a = k[3])
          let Z = a
          k[4] !== D ? ((A = D.includes("granola_workbook")), (k[4] = D), (k[5] = A)) : (A = k[5])
          let K = A
          k[6] !== D ? ((U = D.includes("granola_presentation")), (k[6] = D), (k[7] = U)) : (U = k[7])
          let X = U
          k[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((C = (0, n.jsx)(o.A, {
                id: "space.create.comingSoon",
                defaultMessage: "Coming soon",
                description: "Label for native Space content types that cannot be created yet",
              })),
              (k[8] = C))
            : (C = k[8])
          let Y = C
          k[9] !== F || k[10] !== E || k[11] !== O || k[12] !== R || k[13] !== T
            ? ((q = () => {
                let e = performance.now()
                if (!(0, b.pF)(R, T?.root_page_id)) return
                let t = R.get(j.spaceAccountId$),
                  a = (0, v.startSpacePageCreation)(R, { typingStartedAtMs: e, parentPageId: T?.root_page_id })
                ;(O(`/space/${a.pageId}`, {
                  state: {
                    ...(0, S.$)(E, t, a.pageId),
                    focusPageTitle: !0,
                    spaceSidebarAccountId: null != T || "/space/personal" === E.pathname ? t : void 0,
                    spaceSidebarRootPageId: T?.root_page_id,
                    spaceSidebarPersonal: (null == T && "/space/personal" === E.pathname) || void 0,
                  },
                }),
                  a.completion.catch(() => {
                    R.get(j.spaceAccountId$) === t &&
                      R.get(c.gM).pathname === `/space/${a.pageId}` &&
                      R.get(h.Id).danger(
                        F.formatMessage({
                          id: "codex.space.page.createError",
                          defaultMessage: "Could not create page",
                          description: "Toast displayed when creating a shared Page fails",
                        }),
                        { errorAnalytics: { toastId: "codex.space.page.createError" } },
                      )
                  }))
              }),
              (k[9] = F),
              (k[10] = E),
              (k[11] = O),
              (k[12] = R),
              (k[13] = T),
              (k[14] = q))
            : (q = k[14])
          let J = q
          k[15] !== V ||
          k[16] !== Z ||
          k[17] !== K ||
          k[18] !== X ||
          k[19] !== J ||
          k[20] !== G ||
          k[21] !== $ ||
          k[22] !== N ||
          k[23] !== W ||
          k[24] !== R ||
          k[25] !== T?.root_page_id
            ? ((M = (e) =>
                (0, n.jsxs)(u.Ab, {
                  open: N,
                  onOpenChange: $,
                  align: "end",
                  contentWidth: "menu",
                  triggerButton: e,
                  children: [
                    (0, n.jsx)(u.ms.Item, {
                      disabled: G || !V,
                      leftIcon: (0, n.jsx)(g.b5, { icon: { 16: p.oQS, 20: p.hXV } }),
                      onFocus: W,
                      onPointerEnter: W,
                      onPointerDown: W,
                      onSelect: J,
                      children: (0, n.jsx)(o.A, {
                        id: "space.list.newPage",
                        defaultMessage: "Page",
                        description: "Create a Page from the Space home menu",
                      }),
                    }),
                    Z &&
                      (0, n.jsx)(u.ms.Item, {
                        disabled: !V || G,
                        leftIcon: (0, n.jsx)(g.b5, { icon: { 16: p.AdO, 20: p.jX_ } }),
                        onSelect: () => void (0, I.Y)(R, "granola_whiteboard", T?.root_page_id),
                        children: (0, n.jsx)(o.A, {
                          id: "space.create.canvas",
                          defaultMessage: "Canvas",
                          description: "Native Canvas content type in the Space creation menu",
                        }),
                      }),
                    (0, n.jsx)(u.ms.Item, {
                      disabled: !V || !K || G,
                      leftIcon: (0, n.jsx)(g.b5, { icon: f.Q.spreadsheet }),
                      rightText: K ? void 0 : Y,
                      onSelect: () => void (0, I.Y)(R, "granola_workbook", T?.root_page_id),
                      children: (0, n.jsx)(o.A, {
                        id: "space.create.sheets",
                        defaultMessage: "Sheet",
                        description: "Native Sheets content type in the Space creation menu",
                      }),
                    }),
                    (0, n.jsx)(u.ms.Item, {
                      disabled: !V || !X || G,
                      leftIcon: (0, n.jsx)(g.b5, { icon: f.Q.presentation }),
                      rightText: X ? void 0 : Y,
                      onSelect: () => void (0, I.Y)(R, "granola_presentation", T?.root_page_id),
                      children: (0, n.jsx)(o.A, {
                        id: "space.create.slides",
                        defaultMessage: "Slides",
                        description: "Native presentation content type in the Space creation menu",
                      }),
                    }),
                  ],
                })),
              (k[15] = V),
              (k[16] = Z),
              (k[17] = K),
              (k[18] = X),
              (k[19] = J),
              (k[20] = G),
              (k[21] = $),
              (k[22] = N),
              (k[23] = W),
              (k[24] = R),
              (k[25] = T?.root_page_id),
              (k[26] = M))
            : (M = k[26])
          let ee = M
          return (
            k[27] !== V || k[28] !== G || k[29] !== ee || k[30] !== L || k[31] !== T
              ? ((P = ee(
                  null == T
                    ? (0, n.jsxs)(d.$, {
                        disabled: G || !V,
                        color: "primary",
                        size: "toolbar",
                        radius: L ? "full" : "default",
                        children: [
                          (0, n.jsx)(p.xFs, {}),
                          (0, n.jsx)(o.A, {
                            id: "space.list.new",
                            defaultMessage: "Create",
                            description: "Open creation choices on the Space home page",
                          }),
                        ],
                      })
                    : (0, n.jsxs)(d.$, {
                        color: "primary",
                        size: "pageAction",
                        radius: "full",
                        disabled: G || !V,
                        children: [
                          (0, n.jsx)(o.A, {
                            id: "space.home.create.new",
                            defaultMessage: "New",
                            description:
                              "Button that opens the menu to create a page, spreadsheet, or presentation in the current Space",
                          }),
                          (0, n.jsx)(p.Aq_, {}),
                        ],
                      }),
                )),
                (k[27] = V),
                (k[28] = G),
                (k[29] = ee),
                (k[30] = L),
                (k[31] = T),
                (k[32] = P))
              : (P = k[32]),
            P
          )
        },
      },
    )
  },
  i1ww(e, t, a) {
    var n = a("SRbQ"),
      r = a("SZCv"),
      s = a.n(r),
      i = a("zTeN"),
      o = a("Dgwo"),
      l = a("vdpW"),
      c = a("b0N7"),
      d = a("SPnB"),
      u = a("OWtl"),
      p = a("OMIV"),
      g = a("pyoT")
    let h = (0, i.bD)(u.u, (e) => ({ enabled: !0, slideId: null, heading: null }), void 0, { autoDispose: 6e4 }),
      f = (0, i.bD)(u.u, (e) => null, void 0, { autoDispose: 6e4 }),
      m = (0, i.i1)(
        u.u,
        (e, { get: t }) => {
          let a = t(f, e)
          return null == a
            ? null
            : (t(l.M, { hostId: a.hostId, threadId: a.threadId })?.find((e) => t(l.RN, e) === a.turnId) ?? null)
        },
        { isEqual: s() },
      ),
      _ = (0, i.i1)(u.u, (e, { get: t }) => "inProgress" === t(l.OM, t(m, e))),
      v = (0, i.bD)(u.u, (e) => 0, void 0, { autoDispose: 6e4 }),
      b = (0, i.i1)(u.u, (e, { get: t }) => t(v, e) > 0)
    function x(e, t, a) {
      if (s()(e.get(f, t), a)) return
      let n = e.get(d.chatGptAuthenticatedUserId$),
        r = { hostId: a.hostId, threadId: a.threadId }
      ;(e.set(f, t, a), e.set(h, t, (e) => ({ ...e, slideId: null, heading: null })))
      let i = e.watch(({ get: s }) => {
        s(l.Ct, r)
        let o = s(l.OM, s(m, t)),
          u = s(l.fl, r),
          p = s(c.Z, s(m, t))
        ;(null != p && e.set(h, t, (e) => (e.heading === p ? e : { ...e, heading: p })),
          (s(f, t) !== a ||
            s(g.spaceAccountId$) !== t.accountId ||
            s(d.chatGptAuthenticatedUserId$) !== n ||
            "missing" === u ||
            "unavailable" === u ||
            "error" === u ||
            (null != o && "inProgress" !== o)) &&
            queueMicrotask(() => {
              ;(i(),
                e.get(f, t) === a &&
                  (e.set(f, t, null),
                  (e.get(g.spaceAccountId$) !== t.accountId || e.get(d.chatGptAuthenticatedUserId$) !== n) &&
                    e.set(h, t, { enabled: !1, slideId: null, heading: null })))
            }))
      })
    }
    a.d(
      t,
      {},
      {
        $f: h,
        Gw: x,
        Io: b,
        L0: m,
        N6: v,
        QK: async function (e, t, a) {
          let r = { stack: [], error: void 0, hasError: !1 }
          try {
            if (!e.get(p.JW, "821992342") || e.get(g.spaceAccountId$) !== t.accountId) return
            let s = e.get(d.chatGptAuthenticatedUserId$),
              i = (0, n.mS)(r, await (0, o.V)(e, a.hostId).getThreadExecutionState(a.threadId), !1)
            i?.activeTurnId != null &&
              i.inProgress &&
              e.get(p.JW, "821992342") &&
              e.get(g.spaceAccountId$) === t.accountId &&
              e.get(d.chatGptAuthenticatedUserId$) === s &&
              x(e, t, { ...a, turnId: i.activeTurnId })
          } catch (e) {
            ;((r.error = e), (r.hasError = !0))
          } finally {
            ;(0, n.hk)(r)
          }
        },
        XO: _,
        aQ: f,
      },
    )
  },
  HGub(e, t, a) {
    var n = a("BD7c")
    let r = {
      blue: {
        color: "var(--color-content-blue)",
        caret: "border-content-blue",
        label: "bg-content-blue",
        selection: "bg-content-blue/15",
      },
      purple: {
        color: "var(--color-content-purple)",
        caret: "border-content-purple",
        label: "bg-content-purple",
        selection: "bg-content-purple/15",
      },
      green: {
        color: "var(--color-content-green)",
        caret: "border-content-green",
        label: "bg-content-green",
        selection: "bg-content-green/15",
      },
      yellow: {
        color: "var(--color-content-yellow)",
        caret: "border-content-yellow",
        label: "bg-content-yellow",
        selection: "bg-content-yellow/15",
      },
      red: {
        color: "var(--color-content-red)",
        caret: "border-content-red",
        label: "bg-content-red",
        selection: "bg-content-red/15",
      },
    }
    a.d(
      t,
      {},
      {
        C: function (e, t = 0) {
          return r[(0, n.$)(e, t)]
        },
      },
    )
  },
  tzqa(e, t, a) {
    a.d(t, { d: () => w, Z: () => A })
    var n = a("ABep"),
      r = a("QosV"),
      s = a("SZCv"),
      i = a.n(s),
      o = a("zTeN"),
      l = a("zd8w"),
      c = a("SPnB"),
      d = a("BD7c"),
      u = a("HNZf"),
      p = a("LNpE"),
      g = a("i1ww"),
      h = a("oXsw"),
      f = a("rTPf")
    function m() {
      return { collaborators: [] }
    }
    function _(e, t) {
      if ("reset" === t.type) return m()
      let a = new Map(e.collaborators.map((e) => [e.accountUserId, e])),
        n = new Map(t.collaborators.map((e) => [e.accountUserId, e])),
        r = t.collaborators
          .filter((e) => {
            let t = a.get(e.accountUserId)
            return null == t || t.editing !== e.editing
          })
          .sort((e, t) => e.displayName.localeCompare(t.displayName)),
        s = e.collaborators.flatMap((e) => {
          let t = n.get(e.accountUserId)
          return t?.editing === e.editing ? [t] : []
        }),
        o = [...r, ...s],
        l = [...o.filter((e) => e.editing), ...o.filter((e) => !e.editing)]
      return i()(e.collaborators, l) ? e : { collaborators: l }
    }
    var v = a("pyoT"),
      b = a("OWtl"),
      x = a("ISnp"),
      y = a("hZax")
    function w(e) {
      let t,
        a,
        n,
        s,
        i,
        d,
        h,
        f,
        b,
        x,
        w,
        A = (0, r.c)(33),
        { canShare: U, pageId: C, session: q, children: P } = e,
        k = (0, o.Ul)(v.spaceAccountId$),
        N = (0, y.Zj)("821992342")
      A[0] !== k || A[1] !== C ? ((t = { accountId: k, pageId: C }), (A[0] = k), (A[1] = C), (A[2] = t)) : (t = A[2])
      let $ = (0, o._U)(!!N && g.XO, t)
      A[3] !== q ? ((a = () => q?.getSnapshot().collaborators ?? null), (A[3] = q), (A[4] = a)) : (a = A[4])
      let T = a
      A[5] !== q ? ((n = () => q?.getSnapshot().commentActor ?? null), (A[5] = q), (A[6] = n)) : (n = A[6])
      let R = n
      A[7] !== q ? ((s = () => q?.getServerSnapshot().collaborators ?? null), (A[7] = q), (A[8] = s)) : (s = A[8])
      let F = (0, l.useSyncExternalStore)(null == q ? M : q.subscribe, T, s)
      A[9] !== F || A[10] !== q
        ? ((i = () => ({
            session: q,
            source: F,
            order: null == F ? m() : _(m(), { type: "snapshot", collaborators: F }),
          })),
          (A[9] = F),
          (A[10] = q),
          (A[11] = i))
        : (i = A[11])
      let [O, E] = (0, l.useState)(i)
      ;((O.session !== q || O.source !== F) &&
        E({
          session: q,
          source: F,
          order:
            null == F
              ? m()
              : _(O.session === q ? O.order : m(), {
                  type: O.session === q ? "presence" : "snapshot",
                  collaborators: F,
                }),
        }),
        A[12] !== q ? ((d = () => q?.getServerSnapshot().commentActor ?? null), (A[12] = q), (A[13] = d)) : (d = A[13]))
      let D = (0, l.useSyncExternalStore)(null == q ? M : q.subscribe, R, d),
        L = (0, o.Ul)(c.Kw) ?? D?.accountUserId
      A[14] !== C ? ((h = { type: "page", id: C }), (A[14] = C), (A[15] = h)) : (h = A[15])
      let G = U && null != q
      A[16] !== G ? ((f = { enabled: G }), (A[16] = G), (A[17] = f)) : (f = A[17])
      let { data: Q } = (0, o._U)(u.e2, h, f),
        z = (0, o.Ul)(c.chatGptAuthenticatedUserId$)
      ;(A[18] !== C ? ((b = { type: "page", id: C }), (A[18] = C), (A[19] = b)) : (b = A[19]),
        A[20] !== k || A[21] !== b || A[22] !== z
          ? ((x = { accountId: k, userId: z, target: b }), (A[20] = k), (A[21] = b), (A[22] = z), (A[23] = x))
          : (x = A[23]))
      let H = x,
        B = (0, o.uO)(p.C, H),
        V = (0, o.Ul)(B.pendingChanges$),
        W = (0, o._U)(p.y, H),
        Z = U ? Q : void 0
      if (
        A[24] !== W ||
        A[25] !== $ ||
        A[26] !== P ||
        A[27] !== O.order.collaborators ||
        A[28] !== L ||
        A[29] !== D ||
        A[30] !== V ||
        A[31] !== Z
      ) {
        let e = new Map(
            O.order.collaborators.map((e) => [
              e.accountUserId.split("__")[0],
              {
                kind: "person",
                accountUserId: e.accountUserId,
                displayName: e.displayName,
                activity: e.editing ? "editing" : "viewing",
                isCurrentUser: e.accountUserId.split("__")[0] === L?.split("__")[0],
              },
            ]),
          ),
          t = D?.accountUserId.split("__")[0]
        if (
          (null == D ||
            null == t ||
            t !== L?.split("__")[0] ||
            e.has(t) ||
            e.set(t, { ...D, kind: "person", activity: "hasAccess", isCurrentUser: !0 }),
          null != Z)
        ) {
          let t = Z.owner.principal_id,
            a = t.split("__")[0],
            n = L?.split("__")[0] === t.split("__")[0],
            r = (n ? D?.displayName : void 0) ?? Z.owner_display_name
          null == r ||
            e.has(a) ||
            e.set(a, { accountUserId: t, kind: "person", displayName: r, activity: "hasAccess", isCurrentUser: n })
          let s = new Map(Z.shares.map(S))
          for (let { change: e, share: t } of W)
            "remove" === e.action
              ? s.delete(e.shareId)
              : s.set(t.share_id, {
                  ...t,
                  status: "active",
                  recipient_display_name:
                    t.recipient_display_name ?? ("invite" === e.action ? e.invitee?.label : void 0),
                })
          for (let e of V)
            "remove" === e.action
              ? s.delete(e.shareId)
              : "invite" === e.action &&
                s.set((0, u.hk)(e.recipient), {
                  share_id: (0, u.hk)(e.recipient),
                  recipient: e.recipient,
                  role_id: e.roleId,
                  inviter: Z.owner,
                  status: "active",
                  recipient_display_name: e.invitee?.label,
                })
          for (let t of s.values()) {
            let a = t.recipient
            "active" !== t.status ||
              "principal" !== a.recipient_type ||
              "user" !== a.principal_type ||
              e.has(a.principal_id.split("__")[0]) ||
              e.set(a.principal_id.split("__")[0], {
                accountUserId: a.principal_id,
                kind: "person",
                displayName: t.recipient_display_name ?? a.principal_id,
                activity: "hasAccess",
                isCurrentUser: L?.split("__")[0] === a.principal_id.split("__")[0],
              })
          }
        }
        let a = [...e.entries()].map(j).sort(I)
        ;($ && a.unshift({ kind: "presentationAgent", displayName: "ChatGPT" }),
          (w = P(a)),
          (A[24] = W),
          (A[25] = $),
          (A[26] = P),
          (A[27] = O.order.collaborators),
          (A[28] = L),
          (A[29] = D),
          (A[30] = V),
          (A[31] = Z),
          (A[32] = w))
      } else w = A[32]
      return w
    }
    function I(e, t) {
      return Number(t.isCurrentUser) - Number(e.isCurrentUser)
    }
    function j(e) {
      let [t, a] = e
      return { ...a, personId: t, cursorColor: (0, d.$)(t) }
    }
    function S(e) {
      return [e.share_id, e]
    }
    function A(e) {
      let t,
        a,
        s,
        i,
        o = (0, r.c)(8)
      return (
        o[0] !== e ? (({ onChange: t, ...a } = e), (o[0] = e), (o[1] = t), (o[2] = a)) : ((t = o[1]), (a = o[2])),
        o[3] !== t ? ((s = (e) => (0, n.jsx)(C, { entries: e, onChange: t })), (o[3] = t), (o[4] = s)) : (s = o[4]),
        o[5] !== a || o[6] !== s
          ? ((i = (0, n.jsx)(w, { ...a, children: s })), (o[5] = a), (o[6] = s), (o[7] = i))
          : (i = o[7]),
        i
      )
    }
    let U = (0, o.i1)(b.u, (e, { get: t }) => new Map(e.map((e) => [e, t(f.tg, e)])))
    function C(e) {
      let t,
        a,
        n,
        s,
        c,
        d,
        u,
        p,
        g = (0, r.c)(22),
        { entries: f, onChange: m } = e
      g[0] !== f ? ((t = f.flatMap(q)), (g[0] = f), (g[1] = t)) : (t = g[1])
      let _ = t,
        { isProfileVisible: v } = (0, x.D)()
      g[2] !== v || g[3] !== _ ? ((a = v ? _ : []), (g[2] = v), (g[3] = _), (g[4] = a)) : (a = g[4])
      let b = (0, o._U)(h.H, a)
      g[5] !== v || g[6] !== _ || g[7] !== b
        ? ((n = v ? _.filter((e) => e !== b.accountUserId || null == b.url) : []),
          (g[5] = v),
          (g[6] = _),
          (g[7] = b),
          (g[8] = n))
        : (n = g[8])
      let y = (0, o._U)(U, n)
      if (g[9] !== y || g[10] !== f || g[11] !== b) {
        let e
        ;(g[13] !== y || g[14] !== b
          ? ((e = (e) => {
              if ("presentationAgent" === e.kind) return e
              let t = e.accountUserId === b.accountUserId ? b.url : null
              return { ...e, avatarURL: t ?? y.get(e.accountUserId) ?? null }
            }),
            (g[13] = y),
            (g[14] = b),
            (g[15] = e))
          : (e = g[15]),
          (s = f.map(e)),
          (g[9] = y),
          (g[10] = f),
          (g[11] = b),
          (g[12] = s))
      } else s = g[12]
      let w = s,
        I = (0, l.useRef)(null)
      return (
        g[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = () => () => {
              I.current = null
            }),
            (d = []),
            (g[16] = c),
            (g[17] = d))
          : ((c = g[16]), (d = g[17])),
        (0, l.useLayoutEffect)(c, d),
        g[18] !== m || g[19] !== w
          ? ((u = () => {
              ;(I.current?.publish === m && i()(I.current.entries, w)) ||
                ((I.current = { entries: w, publish: m }), m(w))
            }),
            (p = [m, w]),
            (g[18] = m),
            (g[19] = w),
            (g[20] = u),
            (g[21] = p))
          : ((u = g[20]), (p = g[21])),
        (0, l.useLayoutEffect)(u, p),
        null
      )
    }
    function q(e) {
      return "person" === e.kind ? [e.accountUserId] : []
    }
    function M() {
      return () => {}
    }
  },
  gKie(e, t, a) {
    var n = a("e1xH"),
      r = a("Um9I"),
      s = a("pyoT")
    a.d(
      t,
      {},
      {
        h: function (e, t, a) {
          null != e.get(s.spaceAccountId$) &&
            e.get(n.pagesEnabled$) &&
            "request_changes" !==
              (0, r.wI)(
                t.interaction_mode,
                e.query.getData(s.spaceQuery$, t.id)?.interaction_mode,
                e.query.getData(s.spacesQuery$)?.items.find((e) => e.id === t.id)?.interaction_mode,
              ) &&
            a()
        },
      },
    )
  },
  gGnN(e, t, a) {
    a.a(e, async function (e, n) {
      try {
        var r = a("ABep"),
          s = a("QosV"),
          i = a("T0Rc"),
          o = a("zTeN"),
          l = a("WoME"),
          c = a("G4E3"),
          d = a("zd8w"),
          u = a("oyxz"),
          p = a("Wf1j"),
          g = a("HZfM"),
          h = a("SPnB"),
          f = a("ygO2"),
          m = a("FrrB"),
          _ = a("Bbed"),
          v = a("Fmx8"),
          b = a("XmDk"),
          x = a("Oj9r"),
          y = a("V3rO"),
          w = a("dN0a"),
          I = a("rvFo"),
          j = a("eShZ"),
          S = a("geYU"),
          A = a("z0yV"),
          U = a("u3mM"),
          C = a("V5qk"),
          q = a("F0H9"),
          M = a("H2BV"),
          P = a("dTlo"),
          k = a("aFW8"),
          N = a("vnV1"),
          $ = a("HhD2"),
          T = a("pyoT"),
          R = a("EWUC"),
          F = a("Annu"),
          O = a("BGUL"),
          E = a("KuR4"),
          D = e([b])
        b = (D.then ? (await D)() : D)[0]
        let z = (0, _._)(async () => (await a.e(403528).then(a.bind(a, "HpTl"))).PageEditor, {
          fallback: (e) => e.loadingFallback ?? (0, r.jsx)(U.I, { ...e }),
        })
        function L(e) {
          let t,
            a,
            n,
            l,
            c,
            p,
            h,
            _ = (0, s.c)(47),
            {
              onSelectionToolbarMount: b,
              routeContext: x,
              threadContext: y,
              isActive: w,
              isVisible: U,
              navigation: C,
              panelTabId: q,
              spaceId: M,
            } = e,
            $ = (0, g.zy)(),
            R = (0, o.Ul)(v.yr)
          _[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { enabled: !1 }), (_[0] = t)) : (t = _[0])
          let { data: O } = (0, o._U)(T.spaceQuery$, M, t),
            E = (0, o._U)(A.yR, M),
            D = (0, g.KC)(),
            L = null == q ? D : void 0
          _[1] !== L ? ((a = () => ({ activation: L, start: Date.now() })), (_[1] = L), (_[2] = a)) : (a = _[2])
          let Q = a,
            [z, H] = (0, d.useState)(Q)
          z.activation !== L && H(Q)
          let B = E.enabled && U
          _[3] !== E || _[4] !== B
            ? ((n = { ...E, gcTime: I.D.FIVE_MINUTES, staleTime: E.staleTime, enabled: B }),
              (_[3] = E),
              (_[4] = B),
              (_[5] = n))
            : (n = _[5])
          let { data: V, dataUpdatedAt: W, error: Z, isError: K, fetchStatus: X, refetch: Y } = (0, i.I)(n),
            J = W > z.start - I.D.FIVE_MINUTES
          _[6] !== Z
            ? ((l = Z instanceof j.fk && [403, 404, 410].includes(Z.status)), (_[6] = Z), (_[7] = l))
            : (l = _[7])
          let ee = l,
            et = K && "idle" === X && (null == V || ee || !J)
          ;(_[8] !== Z || _[9] !== et || _[10] !== U || _[11] !== M
            ? ((c = () => {
                U && et && P.W.collectionFailed(M, void 0, Z)
              }),
              (p = [U, et, M, Z]),
              (_[8] = Z),
              (_[9] = et),
              (_[10] = U),
              (_[11] = M),
              (_[12] = c),
              (_[13] = p))
            : ((c = _[12]), (p = _[13])),
            (0, d.useLayoutEffect)(c, p))
          let [ea, en] = (0, d.useState)(V?.backing_type)
          if ((null != V && ea !== V.backing_type && en(V.backing_type), !U)) return null
          if ((0, N.ae)(Z)) {
            let e
            return (
              _[14] !== Y
                ? ((e = (0, r.jsx)(k.m, { onRetry: () => void Y() })), (_[14] = Y), (_[15] = e))
                : (e = _[15]),
              e
            )
          }
          if (et && ee) {
            let e,
              t,
              a,
              n = null == C
            _[16] !== M ? ((e = { kind: "space", id: M }), (_[16] = M), (_[17] = e)) : (e = _[17])
            let s = null == ea ? void 0 : "drive" === ea
            return (
              _[18] !== Y ? ((t = () => void Y()), (_[18] = Y), (_[19] = t)) : (t = _[19]),
              _[20] !== s || _[21] !== t || _[22] !== n || _[23] !== e
                ? ((a = (0, r.jsx)(S.O, { recoverWorkspace: n, target: e, canRequestAccess: s, onRetry: t })),
                  (_[20] = s),
                  (_[21] = t),
                  (_[22] = n),
                  (_[23] = e),
                  (_[24] = a))
                : (a = _[24]),
              a
            )
          }
          if (et) {
            let e, t, a, n
            return (
              _[25] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, r.jsx)(u.A, {
                    id: "codex.space.openError",
                    defaultMessage: "Could not open space",
                    description:
                      "Error shown when the current account cannot load a Space. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
                  })),
                  (_[25] = e))
                : (e = _[25]),
              _[26] !== Y ? ((t = () => void Y()), (_[26] = Y), (_[27] = t)) : (t = _[27]),
              _[28] === Symbol.for("react.memo_cache_sentinel")
                ? ((a = (0, r.jsx)(u.A, {
                    id: "codex.space.page.retry",
                    defaultMessage: "Try again",
                    description: "Button that retries loading shared Pages after a failure",
                  })),
                  (_[28] = a))
                : (a = _[28]),
              _[29] !== t
                ? ((n = (0, r.jsx)(m.A, {
                    title: e,
                    actions: (0, r.jsx)(f.$, { color: "secondary", onClick: t, children: a }),
                  })),
                  (_[29] = t),
                  (_[30] = n))
                : (n = _[30]),
              n
            )
          }
          if (null == V || !J || (K && ee)) {
            let e,
              t,
              a = $.state?.createdSpaceId === M ? (V ?? O) : void 0,
              n = a?.name,
              s = "pages" === new URLSearchParams($.search).get("view") ? "pages" : "overview"
            _[31] !== a
              ? ((e =
                  a?.symbol?.kind === "icon"
                    ? { emoji: a.symbol.value, theme: a.symbol.color }
                    : (a?.appearance ?? void 0)),
                (_[31] = a),
                (_[32] = e))
              : (e = _[32])
            let i = $.state?.createdSpaceId === M ? "list" : (R.viewMode ?? "list")
            return (
              _[33] !== M || _[34] !== e || _[35] !== i || _[36] !== n || _[37] !== s
                ? ((t = (0, r.jsx)(F.r, { name: n, spaceId: M, view: s, appearance: e, viewMode: i })),
                  (_[33] = M),
                  (_[34] = e),
                  (_[35] = i),
                  (_[36] = n),
                  (_[37] = s),
                  (_[38] = t))
                : (t = _[38]),
              t
            )
          }
          return (
            _[39] !== V || _[40] !== w || _[41] !== C || _[42] !== b || _[43] !== q || _[44] !== x || _[45] !== y
              ? ((h = (0, r.jsx)(G, {
                  onSelectionToolbarMount: b,
                  routeContext: x,
                  threadContext: y,
                  isActive: w,
                  navigation: C,
                  panelTabId: q,
                  space: V,
                })),
                (_[39] = V),
                (_[40] = w),
                (_[41] = C),
                (_[42] = b),
                (_[43] = q),
                (_[44] = x),
                (_[45] = y),
                (_[46] = h))
              : (h = _[46]),
            h
          )
        }
        function G(e) {
          let t,
            a,
            n,
            i,
            u,
            f,
            m,
            _,
            b,
            w,
            I,
            j,
            S,
            A,
            U,
            k,
            N,
            R,
            D = (0, s.c)(93),
            {
              onSelectionToolbarMount: L,
              routeContext: G,
              threadContext: H,
              isActive: B,
              navigation: V,
              panelTabId: W,
              space: Z,
            } = e,
            K = void 0 === B || B,
            X = (0, o.gh)(v.oD)
          P.W.bindSpaceRoot(Z.id, Z.root_page_id)
          let Y = (0, g.zy)(),
            J = `page://${Z.root_page_id}${Y.hash}`
          D[0] !== J ? ((t = (0, c.I0)(J)), (D[0] = J), (D[1] = t)) : (t = D[1])
          let ee = t,
            et = (0, g.Zp)()
          ;(D[2] !== K || D[3] !== X || D[4] !== Z.id
            ? ((a = () => {
                if (!K) return
                let e = () => {
                  "visible" === document.visibilityState && document.hasFocus() && (0, $.Nw)(X, Z.id)
                }
                return (
                  e(),
                  window.addEventListener("focus", e),
                  document.addEventListener("visibilitychange", e),
                  () => {
                    ;(window.removeEventListener("focus", e), document.removeEventListener("visibilitychange", e))
                  }
                )
              }),
              (n = [K, X, Z.id]),
              (D[2] = K),
              (D[3] = X),
              (D[4] = Z.id),
              (D[5] = a),
              (D[6] = n))
            : ((a = D[5]), (n = D[6])),
            (0, d.useEffect)(a, n))
          let ea = (0, p.A)(),
            en = (0, o.Ul)(T.spaceAccountId$),
            er = (0, o.Ul)(h.chatGptAuthenticatedUserId$),
            es = (0, o.Ul)(h.Kw)
          D[7] !== en || D[8] !== es || D[9] !== Z.id || D[10] !== er
            ? ((i = JSON.stringify([er, en, es, Z.id])),
              (D[7] = en),
              (D[8] = es),
              (D[9] = Z.id),
              (D[10] = er),
              (D[11] = i))
            : (i = D[11])
          let ei = i,
            [eo, el] = (0, d.useState)(""),
            ec = eo
          ;(null == V && (ec = Y.state?.spaceHomeSearch?.identity === ei ? Y.state.spaceHomeSearch.query : ""),
            D[12] === Symbol.for("react.memo_cache_sentinel") ? ((u = { overrides: {} }), (D[12] = u)) : (u = D[12]))
          let [ed, eu] = (0, d.useState)(u),
            ep = (0, o.Ul)(v.yr),
            eg = Y.state?.createdSpaceId === Z.id ? "list" : (ep.viewMode ?? "list"),
            { data: eh, isError: ef } = (0, o._U)(T.spacePageAncestryQuery$, Z.root_page_id),
            em = new URLSearchParams(Y.search).get("view"),
            e_ = "pages" === em || ("overview" !== em && "" !== ec.trim()) ? "pages" : "overview",
            [ev, eb] = (0, d.useState)(e_),
            ex = null == V ? e_ : ev,
            ey = Y.state?.spaceHomeNavigation
          D[13] !== ei || D[14] !== Y || D[15] !== V || D[16] !== ey
            ? ((f = null == V && ey?.identity === ei && ey.href === (0, g.AO)(Y) ? ey.key : Y.key),
              (D[13] = ei),
              (D[14] = Y),
              (D[15] = V),
              (D[16] = ey),
              (D[17] = f))
            : (f = D[17])
          let ew = f,
            [eI, ej] = (0, d.useState)("pages" === ex)
          ;("pages" !== ex || eI || ej(!0),
            D[18] !== ei ||
            D[19] !== Y.hash ||
            D[20] !== Y.pathname ||
            D[21] !== Y.search ||
            D[22] !== Y.state ||
            D[23] !== et ||
            D[24] !== V ||
            D[25] !== ew
              ? ((m = function (e, t) {
                  if (null != V) {
                    ;(eb(e), null != t && el(t))
                    return
                  }
                  let a = new URLSearchParams(Y.search)
                  a.set("view", e)
                  let n = { pathname: Y.pathname, search: a.toString(), hash: Y.hash }
                  et(n, {
                    replace: null != t,
                    preventScrollReset: !0,
                    state: {
                      ...Y.state,
                      spaceHomeNavigation: null == t ? { identity: ei, href: (0, g.AO)(n), key: ew } : void 0,
                      ...(null == t ? {} : { spaceHomeSearch: { identity: ei, query: t } }),
                    },
                  })
                }),
                (D[18] = ei),
                (D[19] = Y.hash),
                (D[20] = Y.pathname),
                (D[21] = Y.search),
                (D[22] = Y.state),
                (D[23] = et),
                (D[24] = V),
                (D[25] = ew),
                (D[26] = m))
              : (m = D[26]))
          let eS = m
          D[27] !== ea || D[28] !== Z.name
            ? ((_ = ea.formatMessage(
                {
                  id: "space.teamHome.search",
                  defaultMessage: "Search in {name}",
                  description: "Search field scoped to the named team space",
                },
                { name: Z.name },
              )),
              (D[27] = ea),
              (D[28] = Z.name),
              (D[29] = _))
            : (_ = D[29])
          let eA = _,
            eU = (0, d.useRef)(null),
            [eC, eq] = (0, d.useState)(null),
            [eM, eP] = (0, d.useState)(null)
          D[30] !== ed ||
          D[31] !== eI ||
          D[32] !== K ||
          D[33] !== Y ||
          D[34] !== et ||
          D[35] !== V ||
          D[36] !== L ||
          D[37] !== eh ||
          D[38] !== ef ||
          D[39] !== X ||
          D[40] !== ec ||
          D[41] !== eA ||
          D[42] !== eu ||
          D[43] !== Z ||
          D[44] !== eM ||
          D[45] !== eS ||
          D[46] !== ex ||
          D[47] !== eg
            ? ((b = (e, t, a) =>
                (0, r.jsxs)("div", {
                  className: "flex min-h-0 flex-1 flex-col",
                  children: [
                    (0, r.jsxs)(E.M, {
                      loading: void 0 !== a && a,
                      title: t,
                      view: ex,
                      viewMode: eg,
                      showTabs: !ef && eh?.metadata.access.can_read === !0 && null == eh.metadata.deleted_at,
                      onSelectView: eS,
                      overviewControls: (0, r.jsx)("div", { ref: eq }),
                      onViewModeChange: (e) => {
                        ;((0, v.me)(X, { viewMode: e }),
                          Y.state?.createdSpaceId === Z.id &&
                            et(Y, {
                              replace: !0,
                              preventScrollReset: !0,
                              state: { ...Y.state, createdSpaceId: void 0 },
                            }))
                      },
                      searchQuery: ec,
                      searchLabel: eA,
                      onSearchQueryChange: (e) => {
                        eS("" === e.trim() ? ex : "pages", e)
                      },
                      actions: (0, r.jsxs)(o.Ui, {
                        scope: v.oD,
                        value: X.getOwnValue(v.oD),
                        children: [
                          ef || null == eh
                            ? null
                            : (0, r.jsxs)(r.Fragment, {
                                children: [
                                  (0, r.jsx)(q.B, { space: Z, isActive: K, navigation: V }),
                                  (0, r.jsx)(C.g, { renderDialog: K, spaceId: Z.id }),
                                ],
                              }),
                          (0, r.jsx)(M.SpaceCreateMenu, { space: Z }),
                        ],
                      }),
                      children: [
                        eI &&
                          (0, r.jsx)(d.Activity, {
                            mode: "pages" === ex ? "visible" : "hidden",
                            children: (0, r.jsxs)("div", {
                              ref: eU,
                              className:
                                "vertical-scroll-fade-mask-top [container-type:size] scrollbar-on-hover min-h-0 flex-1 scrollbar-stable overflow-x-hidden overflow-y-auto",
                              children: [
                                (0, r.jsx)("div", {
                                  className: "mx-auto w-full max-w-(--page-content-max-width) px-14 pb-panel",
                                  children: (0, r.jsx)(o.Ui, {
                                    scope: v.oD,
                                    value: X.getOwnValue(v.oD),
                                    children: (0, r.jsx)(O.k, {
                                      onSelectionToolbarMount: K ? L : void 0,
                                      isActive: K,
                                      toolbarContainer: eM,
                                      scrollContainerRef: eU,
                                      navigation: V,
                                      space: Z,
                                      search: ec.trim().toLocaleLowerCase(),
                                      viewMode: eg,
                                      expansion: {
                                        ...ed,
                                        rootPageId: Z.root_page_id,
                                        onToggle: (e, t) =>
                                          eu((a) => ({ ...a, overrides: { ...a.overrides, [e]: t } })),
                                      },
                                    }),
                                  }),
                                }),
                                (0, r.jsx)(Q, {}),
                              ],
                            }),
                          }),
                        (0, r.jsx)(d.Activity, {
                          mode: "overview" === ex ? "visible" : "hidden",
                          children: (0, r.jsx)("div", {
                            className: "relative flex min-h-0 flex-1 flex-col",
                            children: e,
                          }),
                        }),
                      ],
                    }),
                    (0, r.jsx)("div", { ref: eP }),
                  ],
                })),
              (D[30] = ed),
              (D[31] = eI),
              (D[32] = K),
              (D[33] = Y),
              (D[34] = et),
              (D[35] = V),
              (D[36] = L),
              (D[37] = eh),
              (D[38] = ef),
              (D[39] = X),
              (D[40] = ec),
              (D[41] = eA),
              (D[42] = eu),
              (D[43] = Z),
              (D[44] = eM),
              (D[45] = eS),
              (D[46] = ex),
              (D[47] = eg),
              (D[48] = b))
            : (b = D[48])
          let ek = b
          D[49] !== K || D[50] !== et || D[51] !== V || D[52] !== W || D[53] !== Z.root_page_id
            ? ((w =
                null == W
                  ? { pageId: Z.root_page_id, surface: "route" }
                  : {
                      pageId: Z.root_page_id,
                      surface: "side-panel",
                      panelTarget: null,
                      isActive: K,
                      onOpenPage: (e, t) => {
                        null != V ? V.onOpenPage(e, t) : et(`/space/${e}`)
                      },
                    }),
              (D[49] = K),
              (D[50] = et),
              (D[51] = V),
              (D[52] = W),
              (D[53] = Z.root_page_id),
              (D[54] = w))
            : (w = D[54])
          let eN = w,
            e$ = K && null == V && null,
            eT = ee?.kind === "page" ? ee.blockId : void 0
          D[55] !== Y.search || D[56] !== ew
            ? ((I = (0, l.g1)(Y.search, ew)), (D[55] = Y.search), (D[56] = ew), (D[57] = I))
            : (I = D[57])
          let eR = "overview" === ex,
            eF = "overview" === ex
          ;(D[58] !== eS || D[59] !== ex
            ? ((j = "overview" === ex ? () => eS("pages") : void 0), (D[58] = eS), (D[59] = ex), (D[60] = j))
            : (j = D[60]),
            D[61] !== eC || D[62] !== ex
              ? ((S = "overview" === ex ? { trailing: eC } : void 0), (D[61] = eC), (D[62] = ex), (D[63] = S))
              : (S = D[63]))
          let eO = null == W ? "route" : "side-panel"
          return (
            D[64] !== ek ? ((A = (e, t) => ek(e, t, !0)), (D[64] = ek), (D[65] = A)) : (A = D[65]),
            D[66] !== K || D[67] !== W || D[68] !== Z || D[69] !== eO || D[70] !== A
              ? ((U = (0, r.jsx)(F.m, { space: Z, surface: eO, panelTabId: W, renderContent: A, showComposer: K })),
                (D[66] = K),
                (D[67] = W),
                (D[68] = Z),
                (D[69] = eO),
                (D[70] = A),
                (D[71] = U))
              : (U = D[71]),
            D[72] !== eN ||
            D[73] !== K ||
            D[74] !== ew ||
            D[75] !== W ||
            D[76] !== ek ||
            D[77] !== Z ||
            D[78] !== eT ||
            D[79] !== I ||
            D[80] !== eR ||
            D[81] !== eF ||
            D[82] !== j ||
            D[83] !== S ||
            D[84] !== U
              ? ((k = (0, r.jsx)(z, {
                  ...eN,
                  blockId: eT,
                  blockNavigationKey: ew,
                  navigationTarget: I,
                  space: Z,
                  panelTabId: W,
                  isActive: K,
                  isVisible: eR,
                  hideDocumentHeading: !0,
                  contentAlignment: "start",
                  showDocumentControls: eF,
                  onShowContent: j,
                  showInsertControls: !1,
                  showSubpages: !1,
                  documentControlsContainers: S,
                  composerEnabled: K,
                  renderContent: ek,
                  loadingFallback: U,
                  recoverWorkspace: !1,
                })),
                (D[72] = eN),
                (D[73] = K),
                (D[74] = ew),
                (D[75] = W),
                (D[76] = ek),
                (D[77] = Z),
                (D[78] = eT),
                (D[79] = I),
                (D[80] = eR),
                (D[81] = eF),
                (D[82] = j),
                (D[83] = S),
                (D[84] = U),
                (D[85] = k))
              : (k = D[85]),
            D[86] !== G || D[87] !== e$ || D[88] !== k
              ? ((N = (0, r.jsxs)(o.Ui, { scope: x.GD, value: G, children: [e$, k] })),
                (D[86] = G),
                (D[87] = e$),
                (D[88] = k),
                (D[89] = N))
              : (N = D[89]),
            D[90] !== N || D[91] !== H
              ? ((R = (0, r.jsx)(o.Ui, { scope: y.l7, value: H, children: N })), (D[90] = N), (D[91] = H), (D[92] = R))
              : (R = D[92]),
            R
          )
        }
        function Q() {
          let e,
            t = (0, s.c)(2),
            a = (0, o.Ul)(w.LT)
          return (
            t[0] !== a
              ? ((e = (0, r.jsx)("div", { "aria-hidden": !0, className: "shrink-0", style: { height: a } })),
                (t[0] = a),
                (t[1] = e))
              : (e = t[1]),
            e
          )
        }
        ;(a.d(
          t,
          {},
          {
            TeamSpaceHome: function (e) {
              let t,
                a,
                n,
                i,
                l = (0, s.c)(18),
                { isActive: c, spaceId: d, isVisible: u, navigation: p, panelTabId: f } = e,
                m = void 0 === c || c,
                _ = void 0 === u || u,
                v = (0, o.gh)(x.GD),
                w = (0, o.Ul)(T.spaceAccountId$),
                I = (0, o.Ul)(h.chatGptAuthenticatedUserId$),
                j = (0, o.Ul)(h.Kw),
                { spaceId: S } = (0, g.g)(),
                A = d ?? S
              if (null == w || null == A) {
                let e
                return (
                  l[0] === Symbol.for("react.memo_cache_sentinel")
                    ? ((e = (0, r.jsx)(F.r, {})), (l[0] = e))
                    : (e = l[0]),
                  e
                )
              }
              let U = `${I}:${w}:${j}:${A}`
              return (
                l[1] !== f || l[2] !== v
                  ? ((t = () => (0, R.E)(v, f ?? null)), (l[1] = f), (l[2] = v), (l[3] = t))
                  : (t = l[3]),
                l[4] !== v ? ((a = v.getOwnValue(x.GD)), (l[4] = v), (l[5] = a)) : (a = l[5]),
                l[6] !== v ? ((n = v.getOwnValue(y.l7)), (l[6] = v), (l[7] = n)) : (n = l[7]),
                l[8] !== m ||
                l[9] !== _ ||
                l[10] !== p ||
                l[11] !== f ||
                l[12] !== A ||
                l[13] !== U ||
                l[14] !== t ||
                l[15] !== a ||
                l[16] !== n
                  ? ((i = (0, r.jsx)(b.$, {
                      embedded: !0,
                      children: (0, r.jsx)(
                        L,
                        {
                          onSelectionToolbarMount: t,
                          routeContext: a,
                          threadContext: n,
                          isActive: m,
                          isVisible: _,
                          navigation: p,
                          panelTabId: f,
                          spaceId: A,
                        },
                        U,
                      ),
                    })),
                    (l[8] = m),
                    (l[9] = _),
                    (l[10] = p),
                    (l[11] = f),
                    (l[12] = A),
                    (l[13] = U),
                    (l[14] = t),
                    (l[15] = a),
                    (l[16] = n),
                    (l[17] = i))
                  : (i = l[17]),
                i
              )
            },
          },
        ),
          n())
      } catch (e) {
        n(e)
      }
    })
  },
  BGUL(e, t, a) {
    a.d(t, { k: () => B })
    var n = a("ABep"),
      r = a("QosV"),
      s = a("uris"),
      i = a("on57"),
      o = a("i5ac"),
      l = a.n(o),
      c = a("zTeN"),
      d = a("DBCl"),
      u = a("zd8w"),
      p = a("v7qY"),
      g = a("oyxz"),
      h = a("SPnB"),
      f = a("Ghh3"),
      m = a("wZQ4"),
      _ = a("Fmx8"),
      v = a("LcBG"),
      b = a("QufO"),
      x = a("FBu8"),
      y = a("lbUx"),
      w = a("Wg4b"),
      I = a("NCaE"),
      j = a("LVlF"),
      S = a("OWtl"),
      A = a("OMIV"),
      U = a("rvFo"),
      C = a("PVyj"),
      q = a("lASr"),
      M = a("oNDa"),
      P = a("HQhH"),
      k = a("aV3j"),
      N = a("apD6"),
      $ = a("hVOg"),
      T = a("jAir"),
      R = a("sX33"),
      F = a("Gmh8"),
      O = a("vpOl"),
      E = a("pyoT"),
      D = a("eShZ")
    let L = (0, c.i1)(S.u, ({ spaceId: e, limit: t }, { get: a }) => {
      let n = a(E.spaceCollectionQuery$, e),
        r = new Map(
          n.data?.pages.items.filter((e) => e.access.can_read && null == e.deleted_at).map((e) => [e.page_id, e]),
        ),
        s = [],
        i = n.isPending,
        o = !1,
        l = 0
      for (let e of r.values()) {
        if (!0 !== e.has_children || e.page_id === n.data?.space.root_page_id) continue
        if (r.size >= t) {
          o = !0
          break
        }
        let c = a(F.Hk, e.page_id, { enabled: !1 }).isFetching,
          d = a(F.Hk, e.page_id, { enabled: c || l < 6 })
        for (let t of ((d.isPending || d.isFetching) && l++,
        (i = i || d.isPending),
        d.isError && s.push(e.page_id),
        d.error instanceof D.fk && [403, 404, 410].includes(d.error.status) ? [] : (d.data?.items ?? [])))
          t.access.can_read && null == t.deleted_at && r.set(t.page_id, t)
      }
      return { pages: [...r.values()], hasMore: o, pending: i, failedIds: s }
    })
    var G = a("D7Ms")
    let Q = (0, c.A4)(
      S.u,
      (e, { scope: t }) => H(t.queryClient, z(t.queryClient, e), e),
      (e, { scope: t, set: a }) => {
        let n = z(t.queryClient, e),
          r = () => a(H(t.queryClient, n, e))
        if ((r(), 0 !== n.length))
          return t.queryClient.getQueryCache().subscribe((e) => {
            ;("updated" === e.type || "removed" === e.type) &&
              n.some((t) => (0, G.MK)({ queryKey: t, exact: !0 }, e.query)) &&
              r()
          })
      },
      {
        autoDispose: !0,
        isEqual: (e, t) =>
          e === t || (null != e && null != t && e.length === t.length && e.every((e, a) => e === t[a])),
      },
    )
    function z(e, t) {
      return t.search && null != t.accountId
        ? e
            .getQueryCache()
            .findAll({ queryKey: [...T.OX, t.accountId, t.userId, t.accountUserId, t.spaceId] })
            .filter((e) => {
              let a = e.queryKey.at(-1)
              return "success" === e.state.status && "string" == typeof a && "" !== a && a !== t.search
            })
            .sort((e, t) => t.state.dataUpdatedAt - e.state.dataUpdatedAt)
            .map((e) => e.queryKey)
        : []
    }
    function H(e, t, a) {
      if (0 === t.length) return
      let n = new Map()
      for (let r of t) {
        let t = e.getQueryState(r)
        if (t?.status !== "success") continue
        for (let e of t.data?.pages ?? []) for (let t of e.items) n.has(t.page_id) || n.set(t.page_id, t)
        let s = r.at(-1),
          i = t.data?.pages.at(-1)
        if ("string" == typeof s && a.search.includes(s) && null != i && null == i.next_cursor) break
      }
      return [...n.values()].filter(
        (e) =>
          e.drive_space_id === a.spaceId &&
          null == e.deleted_at &&
          e.access.can_read &&
          (e.title ?? "").toLocaleLowerCase().includes(a.search),
      )
    }
    function B(e) {
      let t,
        a,
        o,
        p,
        w,
        I,
        j,
        D,
        G,
        z,
        H,
        B,
        J,
        ee,
        et,
        ea,
        en,
        er,
        es,
        ei,
        eo,
        el = (0, r.c)(94),
        {
          navigation: ec,
          space: ed,
          search: eu,
          viewMode: ep,
          expansion: eg,
          scrollContainerRef: eh,
          toolbarContainer: ef,
          onSelectionToolbarMount: em,
          isActive: e_,
        } = e,
        ev = (0, c.gh)(S.u),
        eb = (0, c._U)(A.JW, "1241844879"),
        ex = eb ? N.M : q.Q,
        ey = (0, c.Ul)(E.spaceAccountId$),
        ew = (0, c.Ul)(h.chatGptAuthenticatedUserId$),
        eI = (0, c.Ul)(h.Kw)
      el[0] !== ey || el[1] !== ew
        ? ((t = { accountId: ey, userId: ew }), (el[0] = ey), (el[1] = ew), (el[2] = t))
        : (t = el[2])
      let ej = (0, c._U)(C.aP, t),
        eS = (0, c.Ul)(k.V)
      el[3] !== ed.id || el[4] !== ed.root_page_id
        ? ((a = (e) => e.drive_space_id === ed.id && e.page_id !== ed.root_page_id),
          (el[3] = ed.id),
          (el[4] = ed.root_page_id),
          (el[5] = a))
        : (a = el[5])
      let eA = (0, C.uq)({ items: eS.pages.filter(a) }, ej).items,
        eU = new Set("" === eu ? eA.map(X) : []),
        [eC, eq] = (0, u.useState)(1),
        eM = "grid" === ep && "" === eu,
        eP = eC * (eM ? 12 : 50),
        ek = (0, c.Ul)(eM ? b.s : null) ?? void 0
      el[6] !== ed.id || el[7] !== eP
        ? ((o = { spaceId: ed.id, limit: eP }), (el[6] = ed.id), (el[7] = eP), (el[8] = o))
        : (o = el[8])
      let eN = (0, c._U)(eM ? L : null, o),
        e$ = "" !== eu && "drive" === ed.backing_type,
        eT = e$ ? eu : ""
      el[9] !== ey || el[10] !== eI || el[11] !== ed.id || el[12] !== eT || el[13] !== ew
        ? ((p = { accountId: ey, userId: ew, accountUserId: eI, spaceId: ed.id, search: eT }),
          (el[9] = ey),
          (el[10] = eI),
          (el[11] = ed.id),
          (el[12] = eT),
          (el[13] = ew),
          (el[14] = p))
        : (p = el[14])
      let eR = (0, c._U)(Q, p),
        eF = !e$
      el[15] !== eF ? ((w = { enabled: eF }), (el[15] = eF), (el[16] = w)) : (w = el[16])
      let { data: eO, isPending: eE, isError: eD, refetch: eL } = (0, c._U)(E.spaceCollectionQuery$, ed.id, w),
        { data: eG, isPending: eQ, isError: ez, refetch: eH } = (0, c._U)(E.spacePageAncestryQuery$, ed.root_page_id),
        eB = e$ && null != ey
      ;(el[17] !== ey || el[18] !== eI || el[19] !== eu || el[20] !== ed.id || el[21] !== ew
        ? ((I = [...T.OX, ey, ew, eI, ed.id, eu]),
          (el[17] = ey),
          (el[18] = eI),
          (el[19] = eu),
          (el[20] = ed.id),
          (el[21] = ew),
          (el[22] = I))
        : (I = el[22]),
        el[23] !== ey || el[24] !== eI || el[25] !== ev || el[26] !== eu || el[27] !== ed.id || el[28] !== ew
          ? ((j = (e) => {
              let { pageParam: t, signal: a } = e
              if (null == ey) throw Error("space_account_unavailable")
              let n = (0, E.watchSpaceAccount)(ev, ey, ew, eI),
                r = AbortSignal.any([a, n.signal]),
                s = [],
                i = ev.get(T.e$, { accountId: ey, userId: ew })
              return (
                i.add(s),
                Promise.resolve()
                  .then(async () => {
                    r.throwIfAborted()
                    let e = await (0, d._qC)(
                      f.Request.safeGet("/spaces/{space_id}/pages", {
                        parameters: { path: { space_id: ed.id }, query: { query: eu, cursor: t || void 0, limit: 50 } },
                        signal: r,
                      }),
                      r,
                    )
                    if ((r.throwIfAborted(), e.items.some((e) => e.drive_space_id !== ed.id)))
                      throw Error("space_page_membership_mismatch")
                    return {
                      ...e,
                      items: e.items.flatMap((e) => {
                        let t = e
                        for (let e of s) {
                          if (null == t) break
                          t = e(t)
                        }
                        return null == t ? [] : [t]
                      }),
                    }
                  })
                  .finally(() => {
                    ;(i.delete(s), n.stop())
                  })
              )
            }),
            (el[23] = ey),
            (el[24] = eI),
            (el[25] = ev),
            (el[26] = eu),
            (el[27] = ed.id),
            (el[28] = ew),
            (el[29] = j))
          : (j = el[29]),
        el[30] !== e$ || el[31] !== j || el[32] !== eB || el[33] !== I
          ? ((D = {
              subscribed: e$,
              enabled: eB,
              queryKey: I,
              initialPageParam: "",
              queryFn: j,
              getNextPageParam: K,
              retry: !1,
              staleTime: U.D.THIRTY_SECONDS,
            }),
            (el[30] = e$),
            (el[31] = j),
            (el[32] = eB),
            (el[33] = I),
            (el[34] = D))
          : (D = el[34]))
      let {
          data: eV,
          isPending: eW,
          isError: eZ,
          refetch: eK,
          fetchNextPage: eX,
          hasNextPage: eY,
          isFetchingNextPage: eJ,
        } = (0, s.q)(D),
        e0 = (0, c.Ul)("" === eu ? R.Hn : null),
        e1 = e$ && (eW || eY),
        e2 = eV?.pages.flatMap(Z),
        e3 = new Map(e2?.map(W)),
        e4 = eR?.flatMap((e) => {
          let t = e3.get(e.page_id)
          return null != t ? (e3.delete(e.page_id), [t]) : e1 ? [e] : []
        }),
        e5 = "" !== eu && null != eG && (eG.metadata.title ?? ed.name).toLocaleLowerCase().includes(eu),
        e6 = null != e2 || e4?.length || e5 ? [...(e4 ?? []), ...e3.values()] : void 0,
        e8 = e$ ? e6 : (eN?.pages ?? eO?.pages.items),
        e7 =
          null == e8 || null == e0
            ? e8
            : [
                ...e8.filter((e) => e.page_id !== e0.page.page_id),
                ...(e0.page.drive_space_id === ed.id &&
                null != e0.page.parent &&
                "page_id" in e0.page.parent &&
                e0.page.parent.page_id === ed.root_page_id
                  ? [e0.page]
                  : []),
              ],
        e9 = ez || (e$ ? eZ : eD),
        te = (eN?.failedIds.length ?? 0) > 0,
        tt =
          e9 || null == e7 || null == eG
            ? void 0
            : (0, C.uq)(
                {
                  items: l()(
                    [...(e5 ? [eG.metadata] : []), ...("list" === ep && "" === eu ? [...e7].sort(O.i3) : e7)],
                    "page_id",
                  ),
                },
                ej,
              ).items.filter(
                (e) =>
                  ("" !== eu || e.page_id !== ed.root_page_id) &&
                  null == e.deleted_at &&
                  e.access.can_read &&
                  !eU.has(e.page_id) &&
                  (e$ || (e.title ?? "").toLocaleLowerCase().includes(eu)),
              ),
        ta = eQ || (eN?.pending ?? (e$ ? eW : eE)),
        tn = e1 && tt?.length === 0
      el[35] !== ep
        ? ((G =
            "grid" === ep
              ? (0, n.jsx)(v.oH, { square: !0 })
              : (0, n.jsx)("div", {
                  className: "-mx-[var(--padding-row-cell-x,var(--padding-row-x))]",
                  children: (0, n.jsx)(x.b, { rowCount: 3, treeDepth: 0 }),
                })),
          (el[35] = ep),
          (el[36] = G))
        : (G = el[36])
      let tr = G,
        ts = e$ ? "search" : eP,
        ti = e$ ? eY : eN?.hasMore === !0 || (tt?.length ?? 0) > eP,
        to = e$ && eJ
      ;(el[37] !== eX || el[38] !== e$
        ? ((z = () => {
            e$ ? eX() : eq(V)
          }),
          (el[37] = eX),
          (el[38] = e$),
          (el[39] = z))
        : (z = el[39]),
        el[40] !== ts || el[41] !== ti || el[42] !== to || el[43] !== z
          ? ((H = (0, n.jsx)(
              m.D,
              { loadingPlaceholder: null, hasNextPage: ti, isFetchingNextPage: to, onLoadNextPage: z },
              ts,
            )),
            (el[40] = ts),
            (el[41] = ti),
            (el[42] = to),
            (el[43] = z),
            (el[44] = H))
          : (H = el[44]))
      let tl = e1 && !tn && "list" === ep ? tr : null
      el[45] !== H || el[46] !== tl
        ? ((B = (0, n.jsxs)(n.Fragment, { children: [H, tl] })), (el[45] = H), (el[46] = tl), (el[47] = B))
        : (B = el[47])
      let tc = B
      el[48] !== ed.id ? ((J = { embedded: !0, visitId: ed.id }), (el[48] = ed.id), (el[49] = J)) : (J = el[49])
      let td = !ta && null != tt,
        tu = eM ? !e9 && !te && ((tt?.length ?? 0) > 0 || !ta) : void 0,
        tp = e9 || te
      el[50] !== e_ || el[51] !== ed.id || el[52] !== ed.root_page_id || el[53] !== td || el[54] !== tu || el[55] !== tp
        ? ((ee = (0, n.jsx)($.B, {
            spaceId: ed.id,
            rootPageId: ed.root_page_id,
            ready: td,
            uiReady: tu,
            failed: tp,
            creationActive: e_,
            active: e_,
          })),
          (el[50] = e_),
          (el[51] = ed.id),
          (el[52] = ed.root_page_id),
          (el[53] = td),
          (el[54] = tu),
          (el[55] = tp),
          (el[56] = ee))
        : (ee = el[56])
      let tg =
          eU.size > 0
            ? (0, n.jsx)(P.N, {
                pins: { pages: eA, pending: !1, failed: eS.failed.filter((e) => eA.some((t) => t.page_id === e)) },
                animate: !1,
                renderContentItem: (e, t, a, r) =>
                  "page" in e
                    ? (0, n.jsx)(ex, {
                        navigation: ec,
                        page: e.page,
                        parentSpace: ed,
                        viewMode: t,
                        libraryPresentation: !0,
                        reorderAction: r,
                      })
                    : null,
              })
            : null,
        th = ("grid" === ep || e9 || te) && "gap-8"
      el[57] !== th
        ? ((et = (0, i.A)("flex min-h-0 flex-1 flex-col", th)), (el[57] = th), (el[58] = et))
        : (et = el[58])
      let tf = y.b,
        tm = !e9 && ta && (null == tt || (eM && 0 === tt.length)),
        t_ = null != tt && (tt.length > 0 || tn || (0 === eU.size && (!e$ || !eY)))
      ;(el[59] !== te || el[60] !== e9
        ? ((ea =
            e9 || te
              ? (0, n.jsx)(g.A, {
                  id: "space.teamHome.pagesError",
                  defaultMessage: "Could not load all pages",
                  description: "Error when the team space page list or its scoped search could not finish loading",
                })
              : void 0),
          (el[59] = te),
          (el[60] = e9),
          (el[61] = ea))
        : (ea = el[61]),
        el[62] !== eN?.failedIds || el[63] !== eL || el[64] !== eK || el[65] !== eH || el[66] !== ev || el[67] !== e$
          ? ((en = () => {
              for (let e of (eH(), eN?.failedIds ?? [])) ev.get(F.Hk, e).refetch()
              e$ ? eK() : eL()
            }),
            (el[62] = eN?.failedIds),
            (el[63] = eL),
            (el[64] = eK),
            (el[65] = eH),
            (el[66] = ev),
            (el[67] = e$),
            (el[68] = en))
          : (en = el[68]))
      let tv = tn ? void 0 : tc,
        tb = tn
          ? (0, n.jsxs)("div", { className: "flex min-h-0 flex-1 flex-col", children: [tc, tr] })
          : (0, n.jsx)(M.Y, {
              structuredGridEnabled: ek,
              selectable: eb,
              isSearchResult: "" !== eu,
              navigation: ec,
              expansion: "" === eu ? { ...eg, moveDisplay: e0 } : { ...eg, rootPageId: void 0 },
              groupByParent: "" === eu,
              reserveDisclosureSpace: !0,
              showSource: !1,
              pages: tt?.slice(0, e$ ? void 0 : eP).map((e) => ({ page: e, parentSpace: ed })),
              viewMode: ep,
              gridLoading: e1,
              emptyTitle:
                "" === eu
                  ? (0, n.jsx)(g.A, {
                      id: "space.teamHome.noPages",
                      defaultMessage: "No pages yet",
                      description: "Empty state for a Space with no Pages when no search is active",
                    })
                  : (0, n.jsx)(g.A, {
                      id: "space.teamHome.noMatchingPages",
                      defaultMessage: "No matching pages",
                      description: "No Pages in this team space match the search",
                    }),
            })
      return (
        el[69] !== tf ||
        el[70] !== tr ||
        el[71] !== ek ||
        el[72] !== tm ||
        el[73] !== t_ ||
        el[74] !== ea ||
        el[75] !== en ||
        el[76] !== tv ||
        el[77] !== tb ||
        el[78] !== ep
          ? ((er = (0, n.jsx)(tf, {
              structuredGridEnabled: ek,
              loading: tm,
              hasData: t_,
              viewMode: ep,
              squareLoading: !0,
              listLoading: tr,
              error: ea,
              onRetry: en,
              pagination: tv,
              children: tb,
            })),
            (el[69] = tf),
            (el[70] = tr),
            (el[71] = ek),
            (el[72] = tm),
            (el[73] = t_),
            (el[74] = ea),
            (el[75] = en),
            (el[76] = tv),
            (el[77] = tb),
            (el[78] = ep),
            (el[79] = er))
          : (er = el[79]),
        el[80] !== et || el[81] !== er
          ? ((es = (0, n.jsx)("div", { className: et, children: er })), (el[80] = et), (el[81] = er), (el[82] = es))
          : (es = el[82]),
        el[83] !== ee || el[84] !== tg || el[85] !== es
          ? ((ei = (0, n.jsxs)("div", {
              className: "flex min-h-0 flex-1 flex-col gap-8 pt-2",
              children: [ee, tg, es],
            })),
            (el[83] = ee),
            (el[84] = tg),
            (el[85] = es),
            (el[86] = ei))
          : (ei = el[86]),
        el[87] !== Y || el[88] !== em || el[89] !== eh || el[90] !== eb || el[91] !== ei || el[92] !== ef
          ? ((eo = (0, n.jsx)(Y, {
              onSelectionToolbarMount: em,
              enabled: eb,
              scrollContainerRef: eh,
              toolbarContainer: ef,
              children: ei,
            })),
            (el[87] = Y),
            (el[88] = em),
            (el[89] = eh),
            (el[90] = eb),
            (el[91] = ei),
            (el[92] = ef),
            (el[93] = eo))
          : (eo = el[93]),
        (0, n.jsx)(c.Ui, {
          scope: _.vn,
          value: J,
          children: (0, n.jsx)(c.Ui, {
            scope: _.Qy,
            value: {
              basePath: `/spaces/${ed.id}`,
              directoryId: null,
              tab: "all",
              search: eu,
              categories: [],
              sources: [],
              includePages: !0,
              defaultViewMode: "list",
              selectionPages: eb
                ? {
                    items: tt ?? [],
                    pinned: "" === eu ? eA : [],
                    viewMode: ep,
                    visibleCount: e$ ? void 0 : eP,
                    expandedPageKeys: eg.overrides,
                    rootPageId: ed.root_page_id,
                  }
                : void 0,
            },
            children: eo,
          }),
        })
      )
    }
    function V(e) {
      return e + 1
    }
    function W(e) {
      return [e.page_id, e]
    }
    function Z(e) {
      return e.items
    }
    function K(e) {
      return e.next_cursor ?? void 0
    }
    function X(e) {
      return e.page_id
    }
    function Y(e) {
      let t,
        a,
        s,
        o,
        l,
        d = (0, r.c)(17),
        { onSelectionToolbarMount: u, enabled: g, children: h, scrollContainerRef: f, toolbarContainer: m } = e,
        _ = (0, c.Ul)(I.CO)
      if (!g) {
        let e
        return (d[0] !== h ? ((e = (0, n.jsx)(n.Fragment, { children: h })), (d[0] = h), (d[1] = e)) : (e = d[1]), e)
      }
      let v = _ && "pb-24"
      return (
        d[2] !== v ? ((t = (0, i.A)("flex min-h-0 flex-1 flex-col", v)), (d[2] = v), (d[3] = t)) : (t = d[3]),
        d[4] !== h || d[5] !== f
          ? ((a = (0, n.jsx)(w.G, { scrollContainerRef: f, children: h })), (d[4] = h), (d[5] = f), (d[6] = a))
          : (a = d[6]),
        d[7] !== t || d[8] !== a
          ? ((s = (0, n.jsx)("div", { className: t, children: a })), (d[7] = t), (d[8] = a), (d[9] = s))
          : (s = d[9]),
        d[10] !== u || d[11] !== f || d[12] !== m
          ? ((o = null != m ? (0, p.createPortal)((0, n.jsx)(j.l, { scrollContainerRef: f, onMount: u }), m) : null),
            (d[10] = u),
            (d[11] = f),
            (d[12] = m),
            (d[13] = o))
          : (o = d[13]),
        d[14] !== s || d[15] !== o
          ? ((l = (0, n.jsxs)(n.Fragment, { children: [s, o] })), (d[14] = s), (d[15] = o), (d[16] = l))
          : (l = d[16]),
        l
      )
    }
  },
}
//# sourceMappingURL=768271.c1494458e9.js.map
