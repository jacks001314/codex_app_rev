export const __rspack_esm_ids = [356876]
export const __webpack_modules__ = {
  tdzF(e, t, a) {
    var s = a("ABep"),
      l = a("QosV"),
      i = a("on57"),
      n = a("qmMi"),
      r = a("zd8w"),
      c = a("oyxz"),
      d = a("Wf1j"),
      o = a("Qgfj"),
      m = a("Sm6l"),
      u = a("JNtf"),
      x = a("bVeK"),
      y = a("BrP7"),
      f = a("OWtl"),
      h = a("Nw18"),
      b = a("Pmvo"),
      g = a("YsvR")
    let _ = "flex min-h-0 min-w-0 flex-col gap-3 text-start [@container_contact-setup_(height<10rem)]:overflow-y-auto",
      p = "min-w-0 flex-1 [@container_contact-setup_(min-height:10rem)]:overflow-y-auto"
    function j(e) {
      let t,
        a = (0, l.c)(2),
        { onAccessLost: s } = e
      return (a[0] !== s ? ((t = [s]), (a[0] = s), (a[1] = t)) : (t = a[1]), (0, r.useLayoutEffect)(s, t), null)
    }
    function v(e) {
      let t,
        a,
        o,
        x,
        v,
        S,
        A,
        k,
        M,
        N,
        C,
        $,
        I,
        O,
        T,
        L,
        U,
        q,
        R,
        z,
        E,
        F,
        P,
        K,
        Q,
        W = (0, l.c)(71)
      W[0] !== e
        ? (({ onBlock: o, onAccessLost: a, ...t } = e), (W[0] = e), (W[1] = t), (W[2] = a), (W[3] = o))
        : ((t = W[1]), (a = W[2]), (o = W[3]))
      let Y = (0, n.gh)(f.u),
        V = (0, d.A)(),
        J = (0, r.useId)(),
        [G, H] = (0, r.useState)(null),
        X = (0, r.useRef)(null)
      ;(W[4] !== J || W[5] !== Y.queryClient
        ? ((x = () => () => {
            Y.queryClient.removeQueries({ queryKey: ["dot-email-activity", J] })
          }),
          (W[4] = J),
          (W[5] = Y.queryClient),
          (W[6] = x))
        : (x = W[6]),
        W[7] !== J || W[8] !== Y ? ((v = [Y, J]), (W[7] = J), (W[8] = Y), (W[9] = v)) : (v = W[9]),
        (0, r.useLayoutEffect)(x, v),
        W[10] !== G
          ? ((S = () => {
              null == G && null != X.current && (X.current.focus({ preventScroll: !0 }), (X.current = null))
            }),
            (A = [G]),
            (W[10] = G),
            (W[11] = S),
            (W[12] = A))
          : ((S = W[11]), (A = W[12])),
        (0, r.useLayoutEffect)(S, A),
        W[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = (e, t) => {
              ;((X.current = t), H(e))
            }),
            (W[13] = k))
          : (k = W[13]))
      let Z = k,
        [ee, et] = (0, r.useState)("inbox")
      W[14] !== ee || W[15] !== t || W[16] !== J
        ? ((M = { ...t, dialogId: J, folder: ee }), (W[14] = ee), (W[15] = t), (W[16] = J), (W[17] = M))
        : (M = W[17])
      let { data: ea, error: es, isError: el, isPending: ei, refetch: en } = (0, n._U)(g.Oz, M)
      if (el && "retry" !== (0, h.qk)(es)) {
        let e
        return (W[18] !== a ? ((e = (0, s.jsx)(j, { onAccessLost: a })), (W[18] = a), (W[19] = e)) : (e = W[19]), e)
      }
      if (W[20] !== ea || W[21] !== ee || W[22] !== el || W[23] !== ei || W[24] !== o || W[25] !== en) {
        if (ei) N = (0, s.jsx)(b.n, { kind: "recent", centerInDialog: !0 })
        else if (el) {
          let e, t, a, l
          ;(W[27] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)("p", {
                role: "alert",
                children: (0, s.jsx)(c.A, {
                  id: "restricted.aeon.email.activity.loadError",
                  defaultMessage: "Couldn\u2019t load recent email.",
                }),
              })),
              (W[27] = e))
            : (e = W[27]),
            W[28] !== en ? ((t = () => void en()), (W[28] = en), (W[29] = t)) : (t = W[29]),
            W[30] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (0, s.jsx)(c.A, { id: "restricted.aeon.email.activity.retry", defaultMessage: "Try again" })),
                (W[30] = a))
              : (a = W[30]),
            W[31] !== t ? ((l = (0, s.jsx)(m.$, { onClick: t, children: a })), (W[31] = t), (W[32] = l)) : (l = W[32]),
            (N = (0, s.jsxs)("div", { className: "flex flex-col items-start gap-2", children: [e, l] })))
        } else N = (0, s.jsx)(w, { data: ea, folder: ee, onOpen: Z, onBlock: o })
        ;((W[20] = ea), (W[21] = ee), (W[22] = el), (W[23] = ei), (W[24] = o), (W[25] = en), (W[26] = N))
      } else N = W[26]
      W[33] !== ee || W[34] !== t || W[35] !== a || W[36] !== J || W[37] !== G
        ? ((C =
            null != G
              ? (0, s.jsx)(B, {
                  mailbox: t,
                  dialogId: J,
                  onAccessLost: a,
                  message: G,
                  folder: ee,
                  onBack: () => H(null),
                })
              : null),
          (W[33] = ee),
          (W[34] = t),
          (W[35] = a),
          (W[36] = J),
          (W[37] = G),
          (W[38] = C))
        : (C = W[38])
      let er = null != G
      ;(W[39] === Symbol.for("react.memo_cache_sentinel") ? (($ = (0, i.A)(_, "h-full")), (W[39] = $)) : ($ = W[39]),
        W[40] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = (0, s.jsx)(u.rr, {
              className: "text-sm text-secondary [@container_contact-setup_(height<10rem)]:sr-only",
              children: (0, s.jsx)(c.A, {
                id: "restricted.aeon.email.activity.limit",
                defaultMessage: "Each tab shows up to 20 recent emails",
              }),
            })),
            (W[40] = I))
          : (I = W[40]),
        W[41] !== V
          ? ((O = V.formatMessage({ id: "restricted.aeon.email.activity.folders", defaultMessage: "Email folders" })),
            (W[41] = V),
            (W[42] = O))
          : (O = W[42]))
      let ec = `${J}-inbox`
      ;(W[43] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = (0, s.jsx)(c.A, { ...D.received })), (W[43] = T))
        : (T = W[43]),
        W[44] !== ec ? ((L = { key: "inbox", panelId: ec, name: T }), (W[44] = ec), (W[45] = L)) : (L = W[45]))
      let ed = `${J}-sent`
      return (
        W[46] === Symbol.for("react.memo_cache_sentinel")
          ? ((U = (0, s.jsx)(c.A, { ...D.outgoing })), (W[46] = U))
          : (U = W[46]),
        W[47] !== ed ? ((q = { key: "sent", panelId: ed, name: U }), (W[47] = ed), (W[48] = q)) : (q = W[48]),
        W[49] !== L || W[50] !== q ? ((R = [L, q]), (W[49] = L), (W[50] = q), (W[51] = R)) : (R = W[51]),
        W[52] !== ee || W[53] !== O || W[54] !== R
          ? ((z = (0, s.jsx)(y.t, {
              activationMode: "manual",
              ariaLabel: O,
              selectedKey: ee,
              onSelect: et,
              tabs: R,
              variant: "segmentedPill",
            })),
            (W[52] = ee),
            (W[53] = O),
            (W[54] = R),
            (W[55] = z))
          : (z = W[55]),
        W[56] === Symbol.for("react.memo_cache_sentinel") ? ((E = ["inbox", "sent"]), (W[56] = E)) : (E = W[56]),
        W[57] !== N || W[58] !== ee || W[59] !== ei || W[60] !== J
          ? ((F = E.map((e) =>
              (0, s.jsx)(
                "div",
                {
                  id: `${J}-${e}`,
                  role: "tabpanel",
                  "aria-labelledby": `${J}-${e}-tab`,
                  hidden: e !== ee,
                  tabIndex: 0,
                  className: (0, i.A)(p, ei && "content-center"),
                  children: e === ee ? N : null,
                },
                e,
              ),
            )),
            (W[57] = N),
            (W[58] = ee),
            (W[59] = ei),
            (W[60] = J),
            (W[61] = F))
          : (F = W[61]),
        W[62] !== z || W[63] !== F
          ? ((P = (0, s.jsxs)("div", { className: $, children: [I, z, F] })), (W[62] = z), (W[63] = F), (W[64] = P))
          : (P = W[64]),
        W[65] !== P || W[66] !== er
          ? ((K = (0, s.jsx)("div", { hidden: er, className: "min-h-0 flex-1", children: P })),
            (W[65] = P),
            (W[66] = er),
            (W[67] = K))
          : (K = W[67]),
        W[68] !== K || W[69] !== C
          ? ((Q = (0, s.jsxs)(s.Fragment, { children: [C, K] })), (W[68] = K), (W[69] = C), (W[70] = Q))
          : (Q = W[70]),
        Q
      )
    }
    function w(e) {
      let t,
        a = (0, l.c)(5),
        { data: i, folder: n, onOpen: r, onBlock: d } = e
      return (
        a[0] !== i.messages || a[1] !== n || a[2] !== d || a[3] !== r
          ? ((t =
              0 === i.messages.length
                ? (0, s.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, s.jsx)(c.A, { ...("inbox" === n ? D.emptyReceived : D.emptyOutgoing) }),
                  })
                : (0, s.jsx)("ul", {
                    className: "divide-y divide-border",
                    children: i.messages.map((e) =>
                      (0, s.jsx)(S, { message: e, folder: n, onOpen: r, onBlock: d }, e.id),
                    ),
                  })),
            (a[0] = i.messages),
            (a[1] = n),
            (a[2] = d),
            (a[3] = r),
            (a[4] = t))
          : (t = a[4]),
        t
      )
    }
    function S(e) {
      let t,
        a,
        i,
        n,
        r,
        o,
        u,
        y,
        f = (0, l.c)(24),
        { message: h, folder: b, onOpen: g, onBlock: _ } = e,
        p = (0, d.A)(),
        j = h.sender_address,
        v = "inbox" === b && h.headers_available && h.can_block_sender && j
      return (
        f[0] !== h || f[1] !== g
          ? ((t = (e) => g(h, e.currentTarget)), (f[0] = h), (f[1] = g), (f[2] = t))
          : (t = f[2]),
        f[3] !== b || f[4] !== h
          ? ((a = (0, s.jsx)("span", {
              className: "flex min-w-0 flex-col gap-1",
              children: (0, s.jsx)(A, { message: h, folder: b }),
            })),
            (f[3] = b),
            (f[4] = h),
            (f[5] = a))
          : (a = f[5]),
        f[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, s.jsx)(x.uM3, { className: "shrink-0 text-tertiary", "aria-hidden": "true" })), (f[6] = i))
          : (i = f[6]),
        f[7] !== a
          ? ((n = (0, s.jsxs)("span", {
              className: "col-span-full flex min-w-0 items-center justify-between gap-2",
              children: [a, i],
            })),
            (f[7] = a),
            (f[8] = n))
          : (n = f[8]),
        f[9] !== b || f[10] !== h
          ? ((r = (0, s.jsx)(N, { message: h, folder: b })), (f[9] = b), (f[10] = h), (f[11] = r))
          : (r = f[11]),
        f[12] !== t || f[13] !== n || f[14] !== r
          ? ((o = (0, s.jsxs)("button", {
              type: "button",
              onClick: t,
              className:
                "col-span-full row-span-2 row-start-1 grid min-w-0 grid-cols-subgrid grid-rows-subgrid items-center gap-x-2 gap-y-1 rounded-lg px-2 py-2 text-start hover:bg-surface-secondary",
              children: [n, r],
            })),
            (f[12] = t),
            (f[13] = n),
            (f[14] = r),
            (f[15] = o))
          : (o = f[15]),
        f[16] !== v || f[17] !== p || f[18] !== _ || f[19] !== j
          ? ((u = v
              ? (0, s.jsx)(m.$, {
                  className: "col-start-2 row-start-2 self-center",
                  color: "ghostSecondary",
                  size: "compact",
                  "aria-label": p.formatMessage(D.blockSenderAddress, { sender: j }),
                  onClick: () => _(j),
                  children: (0, s.jsx)(c.A, { ...D.blockSender }),
                })
              : null),
            (f[16] = v),
            (f[17] = p),
            (f[18] = _),
            (f[19] = j),
            (f[20] = u))
          : (u = f[20]),
        f[21] !== o || f[22] !== u
          ? ((y = (0, s.jsxs)("li", {
              className: "grid min-w-0 grid-cols-[minmax(0,1fr)_auto] py-1",
              children: [o, u],
            })),
            (f[21] = o),
            (f[22] = u),
            (f[23] = y))
          : (y = f[23]),
        y
      )
    }
    function A(e) {
      let t,
        a,
        i,
        n,
        r = (0, l.c)(24),
        { message: o, folder: m, detail: u } = e,
        x = (0, d.A)()
      if (null == u && !o.headers_available) {
        let e
        return (
          r[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)("span", {
                className: "text-sm text-secondary",
                children: (0, s.jsx)(c.A, { ...D.headersUnavailable }),
              })),
              (r[0] = e))
            : (e = r[0]),
          e
        )
      }
      let y = null != u ? u.from_address : o.sender_address,
        f = u ?? o,
        h = null != u || "inbox" === m,
        b = null != u || "sent" === m
      if (
        r[1] !== m ||
        r[2] !== f.bcc_addresses ||
        r[3] !== f.cc_addresses ||
        r[4] !== f.subject ||
        r[5] !== f.to_addresses ||
        r[6] !== x ||
        r[7] !== y ||
        r[8] !== b ||
        r[9] !== h
      ) {
        let e,
          l = [
            { label: D.from, addresses: h ? [y || x.formatMessage(D.unknownSender)] : [] },
            { label: D.to, addresses: b ? f.to_addresses : [] },
            { label: D.cc, addresses: b ? f.cc_addresses : [] },
            { label: D.bcc, addresses: "sent" === m ? f.bcc_addresses : [] },
          ]
        ;(r[12] !== f.subject || r[13] !== x
          ? ((e = f.subject || x.formatMessage(D.noSubject)), (r[12] = f.subject), (r[13] = x), (r[14] = e))
          : (e = r[14]),
          r[15] !== e
            ? ((t = (0, s.jsx)("span", {
                className: "font-medium wrap-anywhere select-text",
                children: (0, s.jsx)("bdi", { children: e }),
              })),
              (r[15] = e),
              (r[16] = t))
            : (t = r[16]),
          (a = l.filter(M).map(k)),
          (r[1] = m),
          (r[2] = f.bcc_addresses),
          (r[3] = f.cc_addresses),
          (r[4] = f.subject),
          (r[5] = f.to_addresses),
          (r[6] = x),
          (r[7] = y),
          (r[8] = b),
          (r[9] = h),
          (r[10] = t),
          (r[11] = a))
      } else ((t = r[10]), (a = r[11]))
      return (
        r[17] !== f.recipients_truncated || r[18] !== b
          ? ((i =
              b && f.recipients_truncated
                ? (0, s.jsx)("span", {
                    className: "text-sm text-secondary",
                    children: (0, s.jsx)(c.A, { ...D.recipientsTruncated }),
                  })
                : null),
            (r[17] = f.recipients_truncated),
            (r[18] = b),
            (r[19] = i))
          : (i = r[19]),
        r[20] !== t || r[21] !== a || r[22] !== i
          ? ((n = (0, s.jsxs)(s.Fragment, { children: [t, a, i] })), (r[20] = t), (r[21] = a), (r[22] = i), (r[23] = n))
          : (n = r[23]),
        n
      )
    }
    function k(e) {
      let { label: t, addresses: a } = e
      return (0, s.jsx)(
        "span",
        {
          className: "text-sm wrap-anywhere text-secondary select-text",
          children: (0, s.jsx)(c.A, {
            ...t,
            values: { addresses: (0, s.jsx)("bdi", { children: a.join(", ") }, "addresses") },
          }),
        },
        t.id,
      )
    }
    function M(e) {
      let { addresses: t } = e
      return t.length > 0
    }
    function N(e) {
      let t,
        a,
        i,
        n,
        r = (0, l.c)(12),
        { message: o, folder: m } = e,
        u = (0, d.A)(),
        x = o.created_at
      return (
        r[0] !== u || r[1] !== o.created_at
          ? ((t = u.formatDate(o.created_at, { dateStyle: "medium", timeStyle: "short" })),
            (r[0] = u),
            (r[1] = o.created_at),
            (r[2] = t))
          : (t = r[2]),
        r[3] !== o.created_at || r[4] !== t
          ? ((a = (0, s.jsx)("time", { dateTime: x, children: t })), (r[3] = o.created_at), (r[4] = t), (r[5] = a))
          : (a = r[5]),
        r[6] !== m || r[7] !== o.delivery_state
          ? ((i =
              "sent" === m
                ? (0, s.jsx)(c.A, { ...D.deliveryState, values: { state: o.delivery_state ?? "unknown" } })
                : null),
            (r[6] = m),
            (r[7] = o.delivery_state),
            (r[8] = i))
          : (i = r[8]),
        r[9] !== a || r[10] !== i
          ? ((n = (0, s.jsxs)("span", {
              className: "flex flex-wrap gap-x-3 gap-y-1 text-xs text-secondary",
              children: [a, i],
            })),
            (r[9] = a),
            (r[10] = i),
            (r[11] = n))
          : (n = r[11]),
        n
      )
    }
    function B(e) {
      let t,
        a,
        d,
        o,
        u,
        y,
        f,
        v,
        w,
        S = (0, l.c)(59),
        { mailbox: k, dialogId: M, onAccessLost: B, message: $, folder: I, onBack: O } = e,
        T = (0, r.useId)()
      S[0] !== M || S[1] !== k || S[2] !== $.id || S[3] !== T
        ? ((t = { ...k, dialogId: M, messageId: $.id, openId: T }),
          (S[0] = M),
          (S[1] = k),
          (S[2] = $.id),
          (S[3] = T),
          (S[4] = t))
        : (t = S[4])
      let { data: L, error: U, isPending: q, isFetching: R, refetch: z } = (0, n._U)(g.zL, t)
      S[5] !== U ? ((a = (0, h.qk)(U)), (S[5] = U), (S[6] = a)) : (a = S[6])
      let E = a
      if ("mailbox" === E) {
        let e
        return (S[7] !== B ? ((e = (0, s.jsx)(j, { onAccessLost: B })), (S[7] = B), (S[8] = e)) : (e = S[8]), e)
      }
      let F = null
      if (q || (R && null != U)) {
        let e
        ;(S[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(b.n, { kind: "message", centerInDialog: !0 })), (S[9] = e))
          : (e = S[9]),
          (F = e))
      } else if (null != U) {
        let e,
          t,
          a,
          l = "message" === E ? D.unavailableDetail : D.failedDetail
        ;(S[10] !== l
          ? ((e = (0, s.jsx)("p", { role: "alert", children: (0, s.jsx)(c.A, { ...l }) })), (S[10] = l), (S[11] = e))
          : (e = S[11]),
          S[12] !== E || S[13] !== z
            ? ((t =
                "retry" === E &&
                (0, s.jsx)(m.$, { onClick: () => void z(), children: (0, s.jsx)(c.A, { ...D.retryDetail }) })),
              (S[12] = E),
              (S[13] = z),
              (S[14] = t))
            : (t = S[14]),
          S[15] !== e || S[16] !== t
            ? ((a = (0, s.jsxs)(s.Fragment, { children: [e, t] })), (S[15] = e), (S[16] = t), (S[17] = a))
            : (a = S[17]),
          (F = a))
      } else if (null != L) {
        let e, t, a, l, i, n, r, d, o
        ;(S[18] !== L || S[19] !== I || S[20] !== $
          ? ((e = (0, s.jsx)(A, { message: $, folder: I, detail: L })),
            (S[18] = L),
            (S[19] = I),
            (S[20] = $),
            (S[21] = e))
          : (e = S[21]),
          S[22] !== I || S[23] !== $
            ? ((t = (0, s.jsx)(N, { message: $, folder: I })), (S[22] = I), (S[23] = $), (S[24] = t))
            : (t = S[24]),
          S[25] !== e || S[26] !== t
            ? ((a = (0, s.jsxs)("header", { className: "flex min-w-0 flex-col gap-1", children: [e, t] })),
              (S[25] = e),
              (S[26] = t),
              (S[27] = a))
            : (a = S[27]),
          S[28] !== L.body_text || S[29] !== L.body_text_truncated
            ? ((l =
                L.body_text_truncated &&
                (0, s.jsx)("p", {
                  className: "text-sm text-secondary",
                  children: (0, s.jsx)(c.A, { ...(L.body_text ? D.shortenedBody : D.incompleteBody) }),
                })),
              (S[28] = L.body_text),
              (S[29] = L.body_text_truncated),
              (S[30] = l))
            : (l = S[30]),
          S[31] !== L.body_text
            ? ((i =
                L.body_text &&
                (0, s.jsx)("p", {
                  dir: "auto",
                  className: "wrap-anywhere whitespace-pre-wrap select-text",
                  children: L.body_text,
                })),
              (S[31] = L.body_text),
              (S[32] = i))
            : (i = S[32]),
          S[33] !== L.body_text || S[34] !== L.body_text_truncated
            ? ((n =
                !L.body_text &&
                !L.body_text_truncated &&
                (0, s.jsx)("p", {
                  className: "text-sm text-secondary",
                  children: (0, s.jsx)(c.A, { ...D.emptyBody }),
                })),
              (S[33] = L.body_text),
              (S[34] = L.body_text_truncated),
              (S[35] = n))
            : (n = S[35]),
          S[36] !== l || S[37] !== i || S[38] !== n
            ? ((r = (0, s.jsxs)("div", {
                className: "flex min-w-0 flex-col gap-2 border-t border-default pt-3",
                children: [l, i, n],
              })),
              (S[36] = l),
              (S[37] = i),
              (S[38] = n),
              (S[39] = r))
            : (r = S[39]),
          S[40] !== L.attachment_names || S[41] !== L.attachments_truncated || S[42] !== I
            ? ((d =
                (L.attachment_names.length > 0 || L.attachments_truncated) &&
                (0, s.jsxs)("section", {
                  className: "flex min-w-0 flex-col gap-1 border-t border-default pt-3 text-sm",
                  children: [
                    (0, s.jsx)("h3", { className: "font-medium", children: (0, s.jsx)(c.A, { ...D.attachments }) }),
                    (0, s.jsx)("ul", { children: L.attachment_names.map(C) }),
                    L.attachments_truncated &&
                      (0, s.jsx)("p", {
                        className: "text-secondary",
                        children: (0, s.jsx)(c.A, { ...D.shortenedAttachments }),
                      }),
                    "inbox" === I &&
                      L.attachment_names.length > 0 &&
                      (0, s.jsx)("p", {
                        className: "text-secondary",
                        children: (0, s.jsx)(c.A, { ...D.attachmentPreview, values: { dot: "dot" } }),
                      }),
                  ],
                })),
              (S[40] = L.attachment_names),
              (S[41] = L.attachments_truncated),
              (S[42] = I),
              (S[43] = d))
            : (d = S[43]),
          S[44] !== d || S[45] !== a || S[46] !== r
            ? ((o = (0, s.jsxs)("article", { className: "flex w-full min-w-0 flex-col gap-3", children: [a, r, d] })),
              (S[44] = d),
              (S[45] = a),
              (S[46] = r),
              (S[47] = o))
            : (o = S[47]),
          (F = o))
      }
      return (
        S[48] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, i.A)(_, "flex-1 items-start")), (S[48] = d))
          : (d = S[48]),
        S[49] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, s.jsx)(x.tOb, { "aria-hidden": "true" })),
            (u = (0, s.jsx)(c.A, { ...D.back })),
            (S[49] = o),
            (S[50] = u))
          : ((o = S[49]), (u = S[50])),
        S[51] !== O
          ? ((y = (0, s.jsxs)(m.$, {
              autoFocus: !0,
              color: "ghostSecondary",
              size: "compact",
              onClick: O,
              children: [o, u],
            })),
            (S[51] = O),
            (S[52] = y))
          : (y = S[52]),
        S[53] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, i.A)(p, "flex w-full flex-col items-start gap-3")), (S[53] = f))
          : (f = S[53]),
        S[54] !== F ? ((v = (0, s.jsx)("div", { className: f, children: F })), (S[54] = F), (S[55] = v)) : (v = S[55]),
        S[56] !== y || S[57] !== v
          ? ((w = (0, s.jsxs)("div", { className: d, children: [y, v] })), (S[56] = y), (S[57] = v), (S[58] = w))
          : (w = S[58]),
        w
      )
    }
    function C(e, t) {
      return (0, s.jsx)(
        "li",
        { className: "wrap-anywhere select-text", children: (0, s.jsx)("bdi", { children: e }) },
        `${t}:${e}`,
      )
    }
    let D = (0, o.YK)({
      back: { id: "orbit.email.activity.back", defaultMessage: "Back" },
      mailboxUnavailable: {
        id: "orbit.email.activity.mailboxUnavailable",
        defaultMessage: "This mailbox is no longer available",
      },
      unavailableDetail: {
        id: "orbit.email.activity.unavailableDetail",
        defaultMessage: "This email is no longer available",
      },
      failedDetail: { id: "orbit.email.activity.failedDetail", defaultMessage: "Couldn\u2019t load this email" },
      retryDetail: { id: "orbit.email.activity.retryDetail", defaultMessage: "Try again" },
      emptyBody: { id: "orbit.email.activity.emptyBody", defaultMessage: "No message text" },
      shortenedBody: { id: "orbit.email.activity.shortenedBody", defaultMessage: "Only part of this email is shown" },
      incompleteBody: {
        id: "orbit.email.activity.incompleteBody",
        defaultMessage: "Couldn\u2019t show the message text",
      },
      attachments: { id: "orbit.email.activity.attachments", defaultMessage: "Attachments" },
      shortenedAttachments: {
        id: "orbit.email.activity.shortenedAttachments",
        defaultMessage: "Some attachment names may be shortened or missing from this view",
      },
      attachmentPreview: {
        id: "orbit.email.activity.previewAttachmentsWithDot",
        defaultMessage: "You can ask your {dot} to preview supported attachments",
      },
      received: { id: "restricted.aeon.email.activity.received", defaultMessage: "Received" },
      outgoing: { id: "restricted.aeon.email.activity.outgoing", defaultMessage: "Outgoing" },
      emptyReceived: {
        id: "restricted.aeon.email.activity.emptyReceived",
        defaultMessage: "No recent received email.",
      },
      emptyOutgoing: {
        id: "restricted.aeon.email.activity.emptyOutgoing",
        defaultMessage: "No recent outgoing emails",
      },
      noSubject: { id: "restricted.aeon.email.activity.noSubject", defaultMessage: "(No subject)" },
      from: { id: "restricted.aeon.email.activity.from", defaultMessage: "From: {addresses}" },
      unknownSender: { id: "restricted.aeon.email.activity.unknownSender", defaultMessage: "Unknown sender" },
      to: { id: "restricted.aeon.email.activity.to", defaultMessage: "To: {addresses}" },
      cc: { id: "restricted.aeon.email.activity.cc", defaultMessage: "Cc: {addresses}" },
      bcc: { id: "restricted.aeon.email.activity.bcc", defaultMessage: "Bcc: {addresses}" },
      recipientsTruncated: {
        id: "restricted.aeon.email.activity.recipientsTruncated",
        defaultMessage: "Some recipients aren\u2019t shown",
      },
      headersUnavailable: {
        id: "restricted.aeon.email.activity.headersUnavailable",
        defaultMessage: "Couldn\u2019t load the subject or addresses",
      },
      deliveryState: {
        id: "restricted.aeon.email.activity.deliveryState",
        defaultMessage:
          "{state, select, queued {Sent} delivered {Sent} failed {Couldn\u2019t send} bounced {Couldn\u2019t deliver} complained {Reported as spam} suppressed {Delivery blocked} other {Status unknown}}",
      },
      blockSender: { id: "restricted.aeon.email.activity.blockSender", defaultMessage: "Block sender" },
      blockSenderAddress: {
        id: "restricted.aeon.email.activity.blockSenderAddress",
        defaultMessage: "Block sender {sender}",
      },
    })
    a.d(
      t,
      {},
      {
        RecentEmailDialogBody: function (e) {
          let t,
            a = (0, l.c)(3),
            [i, n] = (0, r.useState)(!1)
          return (
            a[0] !== i || a[1] !== e
              ? ((t = i
                  ? (0, s.jsx)(u.rr, { role: "alert", children: (0, s.jsx)(c.A, { ...D.mailboxUnavailable }) })
                  : (0, s.jsx)(v, { ...e, onAccessLost: () => n(!0) })),
                (a[0] = i),
                (a[1] = e),
                (a[2] = t))
              : (t = a[2]),
            t
          )
        },
      },
    )
  },
}
//# sourceMappingURL=356876.10d9c55373.js.map
