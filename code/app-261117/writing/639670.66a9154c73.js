export const __rspack_esm_ids = [639670]
export const __webpack_modules__ = {
  Jaao(e, t, n) {
    var i = n("BhZP")
    let a =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
      r = ["recipient", "cc", "bcc"]
    function o(e) {
      return e?.variant?.type === "email" ? e.variant.subject : void 0
    }
    function l(e) {
      let t = e?.contacts
      return u(t)
        ? Object.fromEntries(
            r.flatMap((e) => {
              let n = t[e]
              return Array.isArray(n) ? [[e, n.filter(d)]] : []
            }),
          )
        : Object.fromEntries(
            r.flatMap((t) => {
              var n, i
              let a,
                r = ((n = e),
                (i = t),
                "string" != typeof (a = n?.[i])
                  ? []
                  : a
                      .split(/[;,\n]+/)
                      .map((e) => e.trim())
                      .filter((e) => e.length > 0)).map((e) => ({ email: e }))
              return r.length > 0 ? [[t, r]] : []
            }),
          )
    }
    function s(e) {
      return a.test(e)
    }
    function c(e, t) {
      let n = new Map(t.map((e) => [e.email.trim().toLowerCase(), e]))
      return e
        .split(",")
        .map((e) => e.trim())
        .filter((e) => e.length > 0)
        .map((e) => {
          let t = !s(e),
            i = n.get(e.toLowerCase())?.name?.trim()
          return { value: !t && null != i && i.length > 0 ? i : e, isInvalid: t }
        })
    }
    function d(e) {
      return (
        "object" == typeof e &&
        null != e &&
        "string" == typeof Reflect.get(e, "email") &&
        (null == Reflect.get(e, "id") || "string" == typeof Reflect.get(e, "id")) &&
        (null == Reflect.get(e, "name") || "string" == typeof Reflect.get(e, "name")) &&
        (null == Reflect.get(e, "avatar_url") || "string" == typeof Reflect.get(e, "avatar_url"))
      )
    }
    function u(e) {
      return "object" == typeof e && null != e && !Array.isArray(e)
    }
    n.d(
      t,
      {},
      {
        CB: function (e, t) {
          if (u(e?.contacts)) {
            let n
            return (!Array.isArray((n = l(e)[t])) ? [] : n.filter(d)).map((e) => e.email).join(", ")
          }
          return "string" == typeof e?.[t] ? e[t] : ""
        },
        DA: function (e, t = []) {
          let n = new Map(t.map((e) => [e.email.trim().toLowerCase(), e])),
            i = [],
            a = []
          for (let t of e
            .split(",")
            .map((e) => e.trim())
            .filter((e) => e.length > 0)) {
            if (!s(t)) {
              a.push(t)
              continue
            }
            let e = n.get(t.toLowerCase())
            i.push(null == e ? { email: t } : { ...e, email: t })
          }
          return { recipients: i, unfinishedValue: a.join(", ") }
        },
        SW: s,
        Wu: function (e, t) {
          let n = (0, i.I$)(e.metadata),
            a = t.isOriginal ? n[0] : (0, i.Xc)(e.metadata, t),
            r = n.find((e) => null != o(e))
          return String(o(a) ?? e.metadata?.subject ?? o(r) ?? e.title ?? "")
        },
        jy: function (e) {
          return e.flatMap((e) => {
            let t = e.email?.trim()
            return null == t || 0 === t.length
              ? []
              : [
                  {
                    email: t,
                    id: e.id?.trim() || void 0,
                    name: e.name?.trim() || void 0,
                    avatar_url: e.photo_url?.trim() || void 0,
                  },
                ]
          })
        },
        kJ: function (e, t) {
          let n = new Map(t.map((e) => [e.email.toLowerCase(), e]))
          return e
            .split(/[;,\n]+/)
            .map((e) => e.trim())
            .filter((e) => e.length > 0)
            .map((e) => {
              let t = n.get(e.toLowerCase())
              return null == t ? { email: e } : { ...t, email: e }
            })
        },
        m1: function (e, t) {
          let n = t?.ownerEmail?.trim().toLowerCase()
          if (null != n && 0 !== n.length) return e.find((e) => e.ownerEmail?.trim().toLowerCase() === n)?.id
        },
        mI: function (e, t) {
          let n = e.map((e) => e.email).join(", "),
            i = t.trim()
          return 0 === n.length ? i : 0 === i.length ? n : `${n}, ${i}`
        },
        py: function (e) {
          return Object.fromEntries(r.flatMap((t) => (e[t].length > 0 ? [[t, [...e[t]]]] : [])))
        },
        r6: l,
        tx: function (e, t, n) {
          let a = t.isOriginal ? (0, i.I$)(e.metadata)[0] : t,
            r = null == a ? void 0 : (0, i.k$)(e.metadata, { id: a.id, index: t.isOriginal ? 0 : t.index }, n)
          return { ...(t.isOriginal ? { subject: n } : {}), ...r }
        },
        vy: function ({ bcc: e, body: t, cc: n, includeCcAndBcc: i, provider: a, recipient: r, subject: o }) {
          let l = encodeURIComponent(t),
            s = encodeURIComponent(r),
            c = encodeURIComponent(o),
            d = i ? { encodedBcc: encodeURIComponent(e), encodedCc: encodeURIComponent(n) } : void 0
          switch (a) {
            case "gmail":
              return [
                "https://mail.google.com/mail/u/0/?tf=cm",
                `to=${s}`,
                ...(null == d ? [] : [`cc=${d.encodedCc}`, `bcc=${d.encodedBcc}`]),
                `su=${c}`,
                `body=${l}`,
              ].join("&")
            case "outlook": {
              let t = r
              return (
                null != d && n.length > 0 && (t += `?cc=${n}`),
                null != d && e.length > 0 && (t += `?bcc=${e}`),
                `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(t)}&subject=${c}&body=${l}`
              )
            }
            case "default":
              return `mailto:${r}?${null == d ? "" : `cc=${d.encodedCc}&bcc=${d.encodedBcc}&`}subject=${c}&body=${l}`
          }
        },
        yy: function ({ recipient: e, cc: t, bcc: n, contacts: i }) {
          let a = []
          for (let [n, r] of [
            [e, i.recipient ?? []],
            [t, i.cc ?? []],
          ])
            a.push(...c(n, r))
          let r = c(n, i.bcc ?? [])
          return (r.length > 0 && ((r[0] = { ...r[0], prefix: "Bcc: " }), a.push(...r)), a)
        },
      },
    )
  },
  ksPB(e, t, n) {
    var i,
      a =
        (((i = {}).CHATGPT_WRITING_BLOCK_SLIDES_DESTINATION_UNSPECIFIED =
          "CHATGPT_WRITING_BLOCK_SLIDES_DESTINATION_UNSPECIFIED"),
        (i.CHATGPT_WRITING_BLOCK_SLIDES_DESTINATION_SPACES = "CHATGPT_WRITING_BLOCK_SLIDES_DESTINATION_SPACES"),
        (i.CHATGPT_WRITING_BLOCK_SLIDES_DESTINATION_POWERPOINT = "CHATGPT_WRITING_BLOCK_SLIDES_DESTINATION_POWERPOINT"),
        (i.CHATGPT_WRITING_BLOCK_SLIDES_DESTINATION_GOOGLE_SLIDES =
          "CHATGPT_WRITING_BLOCK_SLIDES_DESTINATION_GOOGLE_SLIDES"),
        (i.UNRECOGNIZED = "UNRECOGNIZED"),
        i)
    n.d(
      t,
      {},
      {
        $H: a,
        Lq: { $type: "protobuf_analytics_events.v1.ChatgptWritingBlockSlidesCountChangeSubmitted" },
        Nw: { $type: "protobuf_analytics_events.v1.ChatgptWritingBlocksSaveAsPageButtonClicked" },
        kD: { $type: "protobuf_analytics_events.v1.ChatgptWritingBlockSlidesShown" },
        kV: { $type: "protobuf_analytics_events.v1.ChatgptWritingBlockSlidesCreateClicked" },
        lq: { $type: "protobuf_analytics_events.v1.ChatgptWritingBlockOptionSelected" },
      },
    )
  },
  CeUM(e, t, n) {
    n.d(t, { i: () => tk })
    var i = n("ABep"),
      a = n("QosV"),
      r = n("qcpr"),
      o = n("zd8w"),
      l = n("slpy"),
      s = n("BchX"),
      c = n("WuTo"),
      d = n("Kh9O"),
      u = n("BhZP"),
      m = n("sSh9"),
      p = n("dZHD"),
      f = n("on57"),
      g = n("qmMi"),
      b = n("Hpb6"),
      h = n("Wf1j"),
      v = n("oyxz"),
      x = n("TUMj"),
      w = n("UBr4")
    n("c1qP")
    var y = n("bqtn"),
      k = n("g25Y"),
      C = n("Ot7V"),
      M = n("rDNg"),
      j = n("HOLv"),
      S = n("bVeK"),
      _ = n("X6Vn"),
      E = n("f38C"),
      A = n("ziRc"),
      N = n("hrTz"),
      L = n("hSWQ"),
      B = n("xprp"),
      I = n("Zsk8"),
      D = n("WAdu"),
      R = n("OWtl"),
      T = n("aepO"),
      O = n("j9wQ"),
      P = n("g3YS"),
      U = n("bIvi"),
      z = n("qqcG")
    function $(e) {
      let t,
        n,
        r,
        l,
        s,
        c,
        u,
        m,
        p,
        f,
        g,
        b,
        h,
        v,
        x,
        w = (0, a.c)(42)
      w[0] !== e
        ? (({ bufferStreamingContent: s, createEditor: t, onBeforeExternalContentUpdate: n, state: l, ...r } = e),
          (w[0] = e),
          (w[1] = t),
          (w[2] = n),
          (w[3] = r),
          (w[4] = l),
          (w[5] = s))
        : ((t = w[1]), (n = w[2]), (r = w[3]), (l = w[4]), (s = w[5]))
      let y = void 0 !== s && s
      if (w[6] !== l.displayedContent || w[7] !== l.externalContentUpdate) {
        let e = (0, d.o)()
        ;((c = null == l.externalContentUpdate ? l.displayedContent : e.serialize(e.parse(l.displayedContent))),
          (w[6] = l.displayedContent),
          (w[7] = l.externalContentUpdate),
          (w[8] = c))
      } else c = w[8]
      let k = c,
        C = l.editorView
      w[9] !== k || w[10] !== l
        ? ((u = (0, z.gK)(l, l.externalContentUpdate, k)), (w[9] = k), (w[10] = l), (w[11] = u))
        : (u = w[11])
      let M = u
      w[12] !== l.externalContentUpdate
        ? ((m = () => l.externalContentUpdate), (w[12] = l.externalContentUpdate), (w[13] = m))
        : (m = w[13])
      let j = (0, U.K)(m)
      w[14] !== n
        ? ((p = (e) => {
            n?.(e)
          }),
          (w[14] = n),
          (w[15] = p))
        : (p = w[15])
      let S = (0, U.K)(p),
        _ = (0, o.useRef)(null)
      w[16] !== t || w[17] !== j || w[18] !== S || w[19] !== l.isProseMirrorStoreShared || w[20] !== l.proseMirrorStore
        ? ((f = (e) => {
            let n = t({
              ...e,
              getExternalContentUpdate: j,
              onBeforeExternalContentUpdate: S,
              proseMirrorStore: l.isProseMirrorStoreShared ? l.proseMirrorStore : void 0,
            })
            return (
              (_.current = n),
              {
                ...n,
                destroy() {
                  ;(_.current === n && (_.current = null), n.destroy())
                },
              }
            )
          }),
          (w[16] = t),
          (w[17] = j),
          (w[18] = S),
          (w[19] = l.isProseMirrorStoreShared),
          (w[20] = l.proseMirrorStore),
          (w[21] = f))
        : (f = w[21])
      let E = (0, U.K)(f)
      w[22] !== C || w[23] !== k || w[24] !== l
        ? ((g = () => {
            let e = _.current
            e?.view === C && "unchanged" === (0, z.gK)(l, l.externalContentUpdate, k) && e.setMarkdown(k)
          }),
          (w[22] = C),
          (w[23] = k),
          (w[24] = l),
          (w[25] = g))
        : (g = w[25])
      let A = (0, o.useEffectEvent)(g)
      w[26] !== A
        ? ((b = () => {
            A()
          }),
          (w[26] = A),
          (w[27] = b))
        : (b = w[27])
      let N = l.externalContentUpdate?.key
      ;(w[28] !== C || w[29] !== k || w[30] !== N
        ? ((h = [k, C, N]), (w[28] = C), (w[29] = k), (w[30] = N), (w[31] = h))
        : (h = w[31]),
        (0, o.useEffect)(b, h))
      let B = y && null == l.externalContentUpdate,
        I = r.editorKey ?? ""
      return (
        w[32] !== E || w[33] !== r || w[34] !== l.proseMirrorStore || w[35] !== M
          ? ((v = (e) =>
              (0, i.jsx)(P.K, {
                ...r,
                createEditor: E,
                editable: !1 !== r.editable && "changed" !== M,
                markdown: e,
                proseMirrorStore: l.proseMirrorStore,
              })),
            (w[32] = E),
            (w[33] = r),
            (w[34] = l.proseMirrorStore),
            (w[35] = M),
            (w[36] = v))
          : (v = w[36]),
        w[37] !== k || w[38] !== B || w[39] !== I || w[40] !== v
          ? ((x = (0, i.jsx)(L.r, { enabled: B, streamId: I, text: k, children: v })),
            (w[37] = k),
            (w[38] = B),
            (w[39] = I),
            (w[40] = v),
            (w[41] = x))
          : (x = w[41]),
        x
      )
    }
    var V = n("qOyO"),
      F = n("AhlA"),
      W = n("v9AI")
    function G(e) {
      let t,
        n,
        i,
        r,
        l,
        s,
        c,
        d = (0, a.c)(24),
        { editorView: u, revision: m } = e,
        p = (0, g.gh)(R.u),
        f = (0, g.uO)(W.$, m.id),
        b = (0, g.Ul)(f.state$),
        h = (0, g.Ul)(F.mL)
      d[0] !== f || d[1] !== m || d[2] !== h
        ? ((t = () => {
            f.update(m, h)
          }),
          (d[0] = f),
          (d[1] = m),
          (d[2] = h),
          (d[3] = t))
        : (t = d[3])
      let v = (0, o.useEffectEvent)(t)
      return (
        d[4] !== v
          ? ((n = () => {
              v()
            }),
            (d[4] = v),
            (d[5] = n))
          : (n = d[5]),
        d[6] !== f ||
        d[7] !== m.id ||
        d[8] !== m.isComplete ||
        d[9] !== m.isStreaming ||
        d[10] !== m.previousMarkdown ||
        d[11] !== m.receivedMarkdown ||
        d[12] !== h
          ? ((i = [f, m.id, m.previousMarkdown, m.receivedMarkdown, m.isStreaming, m.isComplete, h]),
            (d[6] = f),
            (d[7] = m.id),
            (d[8] = m.isComplete),
            (d[9] = m.isStreaming),
            (d[10] = m.previousMarkdown),
            (d[11] = m.receivedMarkdown),
            (d[12] = h),
            (d[13] = i))
          : (i = d[13]),
        (0, o.useEffect)(n, i),
        d[14] !== u || d[15] !== m.id || d[16] !== b
          ? ((r = () => {
              null == u || u.isDestroyed || null == b || (0, V.Y2)(u, m.id, b)
            }),
            (l = [u, m.id, b]),
            (d[14] = u),
            (d[15] = m.id),
            (d[16] = b),
            (d[17] = r),
            (d[18] = l))
          : ((r = d[17]), (l = d[18])),
        (0, o.useEffect)(r, l),
        d[19] !== u || d[20] !== m.id || d[21] !== p
          ? ((s = () => {
              if (null == u || u.isDestroyed) return
              let e = () => {
                u.state.selection.empty || (0, W.F)(p, m.id)
              }
              return (
                u.dom.addEventListener("copy", e),
                () => {
                  ;(u.dom.removeEventListener("copy", e), (0, V.dY)(u))
                }
              )
            }),
            (c = [u, m.id, p]),
            (d[19] = u),
            (d[20] = m.id),
            (d[21] = p),
            (d[22] = s),
            (d[23] = c))
          : ((s = d[22]), (c = d[23])),
        (0, o.useEffect)(s, c),
        null
      )
    }
    function K(e, t) {
      return (
        e?.write_like_me_offer_policy === "automatic" && ("email" === t || "chat_message" === t || "social_post" === t)
      )
    }
    var q = n("s1zV"),
      H = n("Or4D"),
      Z = n("ClXH"),
      J = n("a3wQ"),
      Q = n("Jaao"),
      Y = n("LpCf")
    function X(e) {
      let t,
        n,
        r,
        l,
        s,
        c,
        d,
        u,
        m,
        p,
        g,
        b,
        h,
        v = (0, a.c)(48),
        {
          contacts: x,
          displayMode: w,
          isEditingDisabled: y,
          labels: k,
          renderRecipientRow: C,
          values: M,
          className: j,
          layout: S,
          renderSender: _,
        } = e,
        [E, A] = (0, o.useState)(!1),
        [N, L] = (0, o.useState)(!1),
        [B, I] = (0, o.useState)(!1),
        [D, R] = (0, o.useState)(!1),
        T = (0, o.useRef)(null),
        O = (0, o.useRef)(!1)
      v[0] !== w || v[1] !== E || v[2] !== M.cc
        ? ((t = "plain_text" === w ? er(M.cc) : E || er(M.cc)), (v[0] = w), (v[1] = E), (v[2] = M.cc), (v[3] = t))
        : (t = v[3])
      let P = t
      v[4] !== w || v[5] !== N || v[6] !== M.bcc
        ? ((n = "plain_text" === w ? er(M.bcc) : N || er(M.bcc)), (v[4] = w), (v[5] = N), (v[6] = M.bcc), (v[7] = n))
        : (n = v[7])
      let U = n,
        z = P || U,
        $ = "tokenized" === w && !B && !D
      ;(v[8] !== B
        ? ((r = () => {
            if (!B || !O.current) return
            let e = T.current?.ownerDocument.defaultView
            if (null != e)
              return eo(e, () => {
                ;((O.current = !1),
                  T.current
                    ?.querySelector("[data-writing-block-email-recipient-input], .react-select__input input, input")
                    ?.focus())
              })
          }),
          (l = [B]),
          (v[8] = B),
          (v[9] = r),
          (v[10] = l))
        : ((r = v[9]), (l = v[10])),
        (0, o.useEffect)(r, l),
        v[11] !== y
          ? ((s = () => {
              y || ((O.current = !0), I(!0))
            }),
            (v[11] = y),
            (v[12] = s))
          : (s = v[12]))
      let V = s
      v[13] !== w || v[14] !== D
        ? ((c = (e) => {
            let t = e.relatedTarget,
              n = e.currentTarget.ownerDocument,
              i = n.defaultView
            ;(null != i &&
              t instanceof i.Node &&
              (e.currentTarget.contains(t) ||
                (t instanceof i.Element && null != t.closest("[data-writing-block-email-recipient-popover]")))) ||
              O.current ||
              eo(i, () => {
                let e = n.activeElement
                T.current?.contains(e) ||
                  (null != i &&
                    e instanceof i.Element &&
                    null != e.closest("[data-writing-block-email-recipient-popover]")) ||
                  ("tokenized" !== w || D || (A(!1), L(!1)), I(!1))
              })
          }),
          (v[13] = w),
          (v[14] = D),
          (v[15] = c))
        : (c = v[15])
      let F = c
      v[16] !== x || v[17] !== w || v[18] !== y || v[19] !== C || v[20] !== M
        ? ((d = (e, t, n) =>
            C({
              contacts: x[e] ?? [],
              displayMode: w,
              field: e,
              isEditingDisabled: y,
              label: t,
              trailingContent: n,
              value: M[e],
            })),
          (v[16] = x),
          (v[17] = w),
          (v[18] = y),
          (v[19] = C),
          (v[20] = M),
          (v[21] = d))
        : (d = v[21])
      let W = d,
        G =
          "standalone" === (void 0 === S ? "standalone" : S) &&
          "mb-[calc(var(--oai-wb-spacing)*3)] border-b [border-color:var(--oai-wb-divider)]"
      return (
        v[22] !== j || v[23] !== G
          ? ((u = (0, f.A)(
              "flex flex-col divide-y-[0.5px] divide-[color:var(--oai-wb-divider)] [&>:not(:last-child)]:py-[calc(var(--oai-wb-spacing)*0.5)]",
              G,
              j,
            )),
            (v[22] = j),
            (v[23] = G),
            (v[24] = u))
          : (u = v[24]),
        v[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = () => I(!0)), (p = { ...Y.w }), (v[25] = m), (v[26] = p))
          : ((m = v[25]), (p = v[26])),
        v[27] !== w || v[28] !== $ || v[29] !== _
          ? ((g = _?.({ displayMode: w, isCollapsed: $, onOpenChange: R })),
            (v[27] = w),
            (v[28] = $),
            (v[29] = _),
            (v[30] = g))
          : (g = v[30]),
        v[31] !== U ||
        v[32] !== P ||
        v[33] !== x ||
        v[34] !== w ||
        v[35] !== V ||
        v[36] !== $ ||
        v[37] !== y ||
        v[38] !== k ||
        v[39] !== z ||
        v[40] !== W ||
        v[41] !== M
          ? ((b = (0, i.jsx)("div", {
              className:
                "flex flex-col divide-y-[0.5px] divide-[color:var(--oai-wb-divider)] [&>*]:py-[calc(var(--oai-wb-spacing)*0.5)]",
              children: $
                ? (0, i.jsx)(ei, {
                    isEditingDisabled: y,
                    onActivate: V,
                    placeholder: k.recipientsPlaceholder,
                    segments: (0, Q.yy)({ ...M, contacts: x }),
                  })
                : (0, i.jsxs)(i.Fragment, {
                    children: [
                      W(
                        "recipient",
                        k.recipient,
                        "plain_text" === w
                          ? null
                          : (0, i.jsx)(ee, {
                              className: "flex items-end gap-[calc(var(--oai-wb-spacing)*2)]",
                              disabled: z || y,
                              hidden: z,
                              labels: k,
                              onBccClick: () => L(!0),
                              onCcClick: () => A(!0),
                              showBcc: !0,
                              showCc: !0,
                            }),
                      ),
                      P
                        ? W(
                            "cc",
                            k.cc,
                            "plain_text" === w
                              ? null
                              : (0, i.jsx)(ee, {
                                  disabled: U || y,
                                  hidden: U,
                                  labels: k,
                                  onBccClick: () => L(!0),
                                  onCcClick: () => A(!0),
                                  showBcc: !0,
                                  showCc: !1,
                                }),
                          )
                        : null,
                      U
                        ? W(
                            "bcc",
                            k.bcc,
                            "plain_text" === w
                              ? null
                              : (0, i.jsx)(ee, {
                                  disabled: P || y,
                                  hidden: P,
                                  labels: k,
                                  onBccClick: () => L(!0),
                                  onCcClick: () => A(!0),
                                  showBcc: !1,
                                  showCc: !0,
                                }),
                          )
                        : null,
                    ],
                  }),
            })),
            (v[31] = U),
            (v[32] = P),
            (v[33] = x),
            (v[34] = w),
            (v[35] = V),
            (v[36] = $),
            (v[37] = y),
            (v[38] = k),
            (v[39] = z),
            (v[40] = W),
            (v[41] = M),
            (v[42] = b))
          : (b = v[42]),
        v[43] !== F || v[44] !== u || v[45] !== g || v[46] !== b
          ? ((h = (0, i.jsxs)("div", {
              ref: T,
              className: u,
              onBlurCapture: F,
              onFocusCapture: m,
              style: p,
              children: [g, b],
            })),
            (v[43] = F),
            (v[44] = u),
            (v[45] = g),
            (v[46] = b),
            (v[47] = h))
          : (h = v[47]),
        h
      )
    }
    function ee(e) {
      let t,
        n,
        r,
        o,
        l = (0, a.c)(18),
        { disabled: s, hidden: c, labels: d, onBccClick: u, onCcClick: m, showBcc: p, showCc: g, className: b } = e,
        h = !!c || void 0,
        v = c && "pointer-events-none invisible"
      return (
        l[0] !== b || l[1] !== v ? ((t = (0, f.A)(b, v)), (l[0] = b), (l[1] = v), (l[2] = t)) : (t = l[2]),
        l[3] !== s || l[4] !== d || l[5] !== m || l[6] !== g
          ? ((n = g
              ? (0, i.jsx)("button", {
                  className:
                    "disabled:cursor-default [color:var(--oai-wb-text-secondary)] hover:[color:var(--oai-wb-text-primary)] disabled:hover:[color:var(--oai-wb-text-secondary)]",
                  disabled: s,
                  onClick: m,
                  onPointerDown: en,
                  onTouchEnd: (e) => {
                    ;(e.stopPropagation(), m())
                  },
                  type: "button",
                  children: d.ccToggle,
                })
              : null),
            (l[3] = s),
            (l[4] = d),
            (l[5] = m),
            (l[6] = g),
            (l[7] = n))
          : (n = l[7]),
        l[8] !== s || l[9] !== d || l[10] !== u || l[11] !== p
          ? ((r = p
              ? (0, i.jsx)("button", {
                  className:
                    "disabled:cursor-default [color:var(--oai-wb-text-secondary)] hover:[color:var(--oai-wb-text-primary)] disabled:hover:[color:var(--oai-wb-text-secondary)]",
                  disabled: s,
                  onClick: u,
                  onPointerDown: et,
                  onTouchEnd: (e) => {
                    ;(e.stopPropagation(), u())
                  },
                  type: "button",
                  children: d.bccToggle,
                })
              : null),
            (l[8] = s),
            (l[9] = d),
            (l[10] = u),
            (l[11] = p),
            (l[12] = r))
          : (r = l[12]),
        l[13] !== h || l[14] !== t || l[15] !== n || l[16] !== r
          ? ((o = (0, i.jsxs)("div", { "aria-hidden": h, className: t, children: [n, r] })),
            (l[13] = h),
            (l[14] = t),
            (l[15] = n),
            (l[16] = r),
            (l[17] = o))
          : (o = l[17]),
        o
      )
    }
    function et(e) {
      return e.preventDefault()
    }
    function en(e) {
      return e.preventDefault()
    }
    function ei(e) {
      let t,
        n,
        r,
        o,
        l = (0, a.c)(12),
        { isEditingDisabled: s, onActivate: c, placeholder: d, segments: u } = e
      l[0] !== d || l[1] !== u
        ? ((t =
            0 === u.length
              ? (0, i.jsx)("span", { className: "[color:var(--oai-wb-text-tertiary)]", children: d })
              : u.map(ea)),
          (l[0] = d),
          (l[1] = u),
          (l[2] = t))
        : (t = l[2])
      let m = t
      if (s) {
        let e
        return (
          l[3] !== m
            ? ((e = (0, i.jsx)("div", {
                className:
                  "min-h-[calc(var(--oai-wb-spacing)*8)] w-full min-w-0 border-0 bg-transparent p-0 text-start text-base leading-[calc(var(--oai-wb-spacing)*8)] break-words [color:var(--oai-wb-text-primary)]",
                children: m,
              })),
              (l[3] = m),
              (l[4] = e))
            : (e = l[4]),
          e
        )
      }
      return (
        l[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, f.A)(
              "min-h-[calc(var(--oai-wb-spacing)*8)] w-full min-w-0 border-0 bg-transparent p-0 text-start text-base leading-[calc(var(--oai-wb-spacing)*8)] break-words [color:var(--oai-wb-text-primary)]",
              "cursor-text",
            )),
            (l[5] = n))
          : (n = l[5]),
        l[6] !== c
          ? ((r = (e) => {
              ;(e.preventDefault(), c())
            }),
            (l[6] = c),
            (l[7] = r))
          : (r = l[7]),
        l[8] !== m || l[9] !== c || l[10] !== r
          ? ((o = (0, i.jsx)("button", {
              className: n,
              onClick: c,
              onFocus: c,
              onMouseDown: r,
              type: "button",
              children: m,
            })),
            (l[8] = m),
            (l[9] = c),
            (l[10] = r),
            (l[11] = o))
          : (o = l[11]),
        o
      )
    }
    function ea(e, t) {
      return (0, i.jsxs)(
        "span",
        {
          children: [
            t > 0 ? ", " : null,
            e.prefix,
            (0, i.jsx)("span", {
              className: (0, f.A)(
                e.isInvalid &&
                  "[text-decoration-color:var(--oai-wb-danger,var(--text-status-error))] [text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:wavy] [text-decoration-thickness:1px]",
              ),
              children: e.value,
            }),
          ],
        },
        `${e.prefix ?? ""}${e.value}-${t}`,
      )
    }
    function er(e) {
      return e.trim().length > 0
    }
    function eo(e, t) {
      if (null == e) return () => void 0
      if ("function" == typeof e.requestAnimationFrame) {
        let n = e.requestAnimationFrame(t)
        return () => e.cancelAnimationFrame(n)
      }
      let n = e.setTimeout(t, 0)
      return () => e.clearTimeout(n)
    }
    var el = n("O5ge"),
      es = n("tILS"),
      ec = n("v7qY")
    function ed(e) {
      let t,
        n,
        r,
        o,
        l,
        s,
        c,
        d = (0, a.c)(22)
      if (
        (d[0] !== e
          ? (({ displayMode: t, field: n, label: o, ...r } = e),
            (d[0] = e),
            (d[1] = t),
            (d[2] = n),
            (d[3] = r),
            (d[4] = o))
          : ((t = d[1]), (n = d[2]), (r = d[3]), (o = d[4])),
        "plain_text" === t)
      ) {
        let e, t, n, a
        return (
          d[5] !== o
            ? ((e = (0, i.jsx)("div", { className: "pt-0.5 leading-8 font-medium", children: o })),
              (d[5] = o),
              (d[6] = e))
            : (e = d[6]),
          d[7] !== r.value
            ? ((t = r.value.trim().length > 0 ? r.value : null), (d[7] = r.value), (d[8] = t))
            : (t = d[8]),
          d[9] !== t
            ? ((n = (0, i.jsx)("div", {
                className: "min-w-0 flex-1 pt-0.5 leading-8 break-words [color:var(--oai-wb-text-primary)]",
                children: t,
              })),
              (d[9] = t),
              (d[10] = n))
            : (n = d[10]),
          d[11] !== e || d[12] !== n
            ? ((a = (0, i.jsxs)("div", { className: "flex min-h-9 items-start gap-2", children: [e, n] })),
              (d[11] = e),
              (d[12] = n),
              (d[13] = a))
            : (a = d[13]),
          a
        )
      }
      return (
        d[14] !== o
          ? ((l = (0, i.jsx)("div", { className: "pt-0.5 leading-8 font-medium", children: o })),
            (d[14] = o),
            (d[15] = l))
          : (l = d[15]),
        d[16] !== n || d[17] !== r
          ? ((s = (0, i.jsx)(eu, { ...r, inputName: n })), (d[16] = n), (d[17] = r), (d[18] = s))
          : (s = d[18]),
        d[19] !== l || d[20] !== s
          ? ((c = (0, i.jsxs)("div", { className: "flex min-h-9 items-start gap-2", children: [l, s] })),
            (d[19] = l),
            (d[20] = s),
            (d[21] = c))
          : (c = d[21]),
        c
      )
    }
    function eu({
      avatarFallbackColors: e,
      contacts: t,
      copiedIcon: n,
      copyIcon: a,
      getContactsForQuery: r,
      getContactQueryStatus: l,
      inputName: s = "writing-block-email-recipient",
      isEditingDisabled: c,
      ariaLabels: d,
      loadingContacts: u,
      onCopyEmail: m,
      onMetadataChange: p,
      onContactSelected: g,
      onSearch: b,
      onValueChange: h,
      portalContainer: v,
      removeIcon: x,
      trailingContent: w,
      value: y,
    }) {
      let k = (0, o.useId)(),
        [C, M] = (0, o.useState)(() => eh(y, t)),
        [j, S] = (0, o.useState)(!1),
        [_, E] = (0, o.useState)(!1),
        [A, N] = (0, o.useState)(0),
        [L, B] = (0, o.useState)(null),
        I = (0, o.useRef)(null),
        D = (0, o.useRef)(!1),
        R = (0, o.useRef)(null),
        T = (0, o.useRef)(p),
        O = (0, o.useRef)(h),
        { refs: P, floatingStyles: U } = (0, el.we)({
          middleware: [
            (0, el.cY)({ alignmentAxis: -14, mainAxis: 8 }),
            (0, el.UU)({ padding: 8 }),
            (0, el.BN)({ padding: 8 }),
            (0, el.Ej)({
              apply({ availableHeight: e, elements: t }) {
                t.floating.style.maxHeight = `${Math.max(0, e)}px`
              },
              padding: 8,
            }),
          ],
          placement: "bottom-start",
          strategy: "fixed",
          whileElementsMounted: es.ll,
        }),
        z = P.reference
      ;((T.current = p), (O.current = h))
      let $ = () => {
        null != R.current && (clearTimeout(R.current), (R.current = null))
      }
      ;((0, o.useEffect)(() => {
        D.current || M(eh(y, t))
      }, [t, y]),
        (0, o.useEffect)(() => $, []))
      let V = (e, t, n) => {
          let i,
            a,
            r = ev(e)
          ;(M({ tokens: r, inputValue: t }),
            (i = (0, Q.mI)(r, t)),
            (a = (0, Q.kJ)(
              i,
              r.map((e) => e.contact ?? { email: e.email }),
            )),
            $(),
            n
              ? O.current(i)
              : (R.current = setTimeout(() => {
                  ;((R.current = null), O.current(i))
                }, 300)),
            T.current(i, a, n))
        },
        F = () => {
          let e = eh(C.inputValue)
          ;(V([...C.tokens, ...e.tokens], e.inputValue, !0), S(!0))
        },
        W = r(C.inputValue)
          .filter((e) => !C.tokens.some((t) => t.email.trim().toLowerCase() === e.email.trim().toLowerCase()))
          .slice(0, 7),
        G = l?.(C.inputValue) ?? "idle",
        K = eh(C.inputValue),
        q = "pending" === G,
        H = !c && _ && (W.length > 0 || q),
        Z = H ? `${k}-option-${A}` : void 0
      ;(0, o.useEffect)(() => {
        P.floating.current?.querySelector('[aria-selected="true"]')?.scrollIntoView?.({ block: "nearest" })
      }, [A, H, W.length])
      let J = (e) => {
          let t = { id: e.id ?? e.email, email: e.email, contact: e }
          ;(V([...C.tokens, t], "", !0), g?.(), b(""), E(!1), eb(I.current, () => z.current?.focus()))
        },
        X = z.current?.ownerDocument,
        ee = (v !== X?.body ? v : null) ?? z.current?.closest('dialog, [role="dialog"]') ?? X?.body
      return (0, i.jsxs)("div", {
        ref: I,
        className: "relative min-h-9 min-w-0 flex-1 [color:var(--oai-wb-text-primary)]",
        onBlurCapture: (e) => {
          let t = e.relatedTarget,
            n = e.currentTarget.ownerDocument.defaultView
          ;(!(
            null != n &&
            t instanceof n.Node &&
            (e.currentTarget.contains(t) ||
              (t instanceof n.Element && null != t.closest("[data-writing-block-email-recipient-popover]")))
          ) ||
            (t instanceof n.Element && null != t.closest('[data-recipient-row-trailing="true"]'))) &&
            eb(I.current, () => {
              let e = I.current?.ownerDocument.activeElement
              I.current?.contains(e ?? null) ||
                (null != n &&
                  e instanceof n.Element &&
                  null != e.closest("[data-writing-block-email-recipient-popover]")) ||
                ((D.current = !1), E(!1), B(null), F())
            })
        },
        onFocusCapture: () => {
          D.current = !0
        },
        onPointerDown: (e) => {
          let t = e.currentTarget.ownerDocument.defaultView
          null != t &&
            e.target instanceof t.Element &&
            null ==
              e.target.closest(
                '[data-recipient-row-trailing="true"], button, [role="button"], [role="option"], input',
              ) &&
            (e.preventDefault(), z.current?.focus())
        },
        children: [
          (0, i.jsxs)("div", {
            className: "flex min-h-9 cursor-text flex-wrap items-start gap-y-1 overflow-y-auto",
            children: [
              C.tokens.map((t, r) =>
                (0, i.jsx)(
                  ep,
                  {
                    avatarFallbackColors: e,
                    copiedIcon: n,
                    copyIcon: a,
                    isEditingDisabled: c,
                    isOpen: !c && L === t.id,
                    ariaLabels: d,
                    onCopyEmail: m,
                    onOpenChange: (e) => B(e ? t.id : null),
                    onRemove: () => {
                      ;(V(
                        C.tokens.filter((e, t) => t !== r),
                        C.inputValue,
                        !0,
                      ),
                        eb(I.current, () => z.current?.focus()))
                    },
                    removeIcon: x,
                    token: t,
                  },
                  t.id,
                ),
              ),
              (0, i.jsx)("input", {
                ref: P.setReference,
                "aria-activedescendant": Z,
                "aria-autocomplete": "list",
                "aria-controls": k,
                "aria-expanded": H,
                "aria-label": d.input,
                role: "combobox",
                autoComplete: "off",
                className: (0, f.A)(
                  "m-0 mt-0.5 min-w-[2px] flex-1 border-none bg-transparent p-0 text-base leading-8 shadow-none ring-0 outline-hidden focus:border-transparent focus:shadow-none focus:ring-0 focus:outline-hidden focus-visible:ring-0 focus-visible:outline-hidden",
                  C.tokens.length > 0 && "ms-2",
                  j &&
                    K.inputValue.length > 0 &&
                    "[text-decoration-line:underline] [text-decoration-style:wavy] [text-decoration-thickness:1px] [text-decoration-color:var(--oai-wb-danger,var(--text-status-error))] [text-decoration-skip-ink:none]",
                ),
                disabled: c,
                name: s,
                onChange: (e) => {
                  let t = e.target.value
                  ;((D.current = !0), V(C.tokens, t, !1), b(t), E(!0), N(0))
                },
                onFocus: () => {
                  ;((D.current = !0), S(!1), E(!0), N(0), b(C.inputValue))
                },
                onKeyDown: (e) => {
                  if (!e.nativeEvent.isComposing) {
                    if ("ArrowDown" === e.key && W.length > 0) {
                      ;(e.preventDefault(), E(!0), N((e) => Math.min(e + 1, W.length - 1)))
                      return
                    }
                    if ("ArrowUp" === e.key && W.length > 0) {
                      ;(e.preventDefault(), N((e) => Math.max(e - 1, 0)))
                      return
                    }
                    if ("Enter" === e.key && _ && null != W[A]) {
                      ;(e.preventDefault(), J(W[A]))
                      return
                    }
                    if (("," === e.key || "Enter" === e.key) && K.tokens.length > 0) {
                      ;(e.preventDefault(), F(), b(""), E(!1))
                      return
                    }
                    if ("Backspace" === e.key && 0 === C.inputValue.length && C.tokens.length > 0)
                      return void V(C.tokens.slice(0, -1), "", !0)
                    "Escape" === e.key && (E(!1), B(null))
                  }
                },
                value: C.inputValue,
              }),
              null == w
                ? null
                : (0, i.jsx)("div", {
                    className: "flex min-h-9 items-start gap-2 pt-0.5",
                    "data-recipient-row-trailing": "true",
                    children: w,
                  }),
            ],
          }),
          H && null != ee
            ? (0, i.jsx)(em, {
                className:
                  "z-[var(--wb-menu-z-index,70)] w-80 max-w-full rounded-2xl [background:var(--oai-wb-surface-primary)] shadow-[0_0_0_1px_hsla(0,0%,0%,0.1),0_4px_11px_hsla(0,0%,0%,0.1)]",
                container: ee,
                floatingRef: P.setFloating,
                style: { ...Y.w, ...U },
                children: (0, i.jsx)("div", {
                  className: "max-h-[inherit] overflow-y-auto p-1",
                  "data-writing-block-email-recipient-popover": "",
                  id: k,
                  role: "listbox",
                  children:
                    q && 0 === W.length
                      ? (0, i.jsxs)("div", {
                          "aria-live": "polite",
                          className: "flex min-h-16 items-center gap-3 px-3 py-3 [color:var(--oai-wb-text-secondary)]",
                          role: "status",
                          children: [
                            (0, i.jsx)("span", {
                              "aria-hidden": "true",
                              className:
                                "size-5 animate-spin rounded-full border-2 border-current border-e-transparent",
                            }),
                            (0, i.jsx)("span", { children: u }),
                          ],
                        })
                      : W.map((t, n) =>
                          (0, i.jsxs)(
                            "button",
                            {
                              "aria-selected": n === A,
                              className: (0, f.A)(
                                "flex h-12 w-full cursor-pointer items-center gap-2 rounded-xl border-0 bg-transparent px-2 text-start",
                                n === A && "[background:var(--oai-wb-interactive-secondary-hover)]",
                              ),
                              id: `${k}-option-${n}`,
                              onClick: () => J(t),
                              onMouseEnter: () => N(n),
                              onPointerDown: (e) => e.preventDefault(),
                              role: "option",
                              type: "button",
                              children: [
                                (0, i.jsx)(ef, { colors: e, contact: t, label: d.recipientAvatar, size: "suggestion" }),
                                (0, i.jsxs)("span", {
                                  className: "flex min-w-0 flex-col justify-center leading-tight",
                                  children: [
                                    (0, i.jsx)("span", { className: "truncate text-sm", children: t.email }),
                                    t.name?.trim()
                                      ? (0, i.jsx)("span", {
                                          className: "truncate text-xs [color:var(--oai-wb-text-secondary)]",
                                          children: t.name,
                                        })
                                      : null,
                                  ],
                                }),
                              ],
                            },
                            t.id ?? t.email,
                          ),
                        ),
                }),
              })
            : null,
        ],
      })
    }
    function em(e) {
      let t,
        n,
        r,
        o,
        l,
        s = (0, a.c)(10)
      return (
        s[0] !== e
          ? (({ container: t, floatingRef: n, ...r } = e), (s[0] = e), (s[1] = t), (s[2] = n), (s[3] = r))
          : ((t = s[1]), (n = s[2]), (r = s[3])),
        s[4] !== n || s[5] !== r
          ? ((o = (0, i.jsx)("div", { ...r, ref: n })), (s[4] = n), (s[5] = r), (s[6] = o))
          : (o = s[6]),
        s[7] !== t || s[8] !== o ? ((l = (0, ec.createPortal)(o, t)), (s[7] = t), (s[8] = o), (s[9] = l)) : (l = s[9]),
        l
      )
    }
    function ep({
      avatarFallbackColors: e,
      copiedIcon: t,
      copyIcon: n,
      isEditingDisabled: a,
      isOpen: r,
      ariaLabels: l,
      onCopyEmail: s,
      onOpenChange: c,
      onRemove: d,
      removeIcon: u,
      token: m,
    }) {
      let [p, g] = (0, o.useState)(!1),
        b = (0, o.useRef)(null),
        h = (0, o.useRef)(null),
        v = (0, o.useRef)(null),
        x = (0, o.useRef)(c)
      x.current = c
      let w = m.contact ?? { email: m.email },
        y = "string" == typeof w.id && "string" == typeof w.name,
        k = (w.name?.trim() ? w.name : null) ?? m.email,
        { refs: C, floatingStyles: M } = (0, el.we)({
          middleware: [(0, el.cY)(4), (0, el.UU)(), (0, el.BN)({ padding: 8 })],
          placement: "bottom-start",
          whileElementsMounted: es.ll,
        }),
        j = C.setReference,
        S = C.setFloating
      ;((0, o.useEffect)(
        () => () => {
          null != v.current && clearTimeout(v.current)
        },
        [],
      ),
        (0, o.useEffect)(() => {
          if (!r) return
          let e = b.current,
            t = h.current,
            n = e?.ownerDocument,
            i = n?.defaultView
          if (null == e || null == t || null == n || null == i) return
          let a = () => {
              x.current(!1)
            },
            o = (t) => {
              "Escape" === t.key && (t.preventDefault(), t.stopPropagation(), a(), e.focus())
            },
            l = (n) => {
              n.target instanceof i.Node && (e.contains(n.target) || t.contains(n.target) || a())
            }
          return (
            n.addEventListener("keydown", o),
            n.addEventListener("pointerdown", l, !0),
            () => {
              ;(n.removeEventListener("keydown", o), n.removeEventListener("pointerdown", l, !0))
            }
          )
        }, [r]))
      let _ = (0, i.jsxs)("div", {
          className: "group/email flex min-w-0 items-center gap-1 [color:var(--oai-wb-text-secondary)]",
          children: [
            (0, i.jsx)("div", {
              className: (0, f.A)("min-w-0 truncate", y ? "text-lg" : "text-base"),
              children: m.email,
            }),
            null == s
              ? null
              : (0, i.jsx)("button", {
                  "aria-label": p ? l.copiedEmail : l.copyEmail,
                  className:
                    "shrink-0 rounded-md border-0 bg-transparent p-1 opacity-0 transition-opacity group-hover/email:opacity-100 focus-visible:opacity-100 hover:[background:var(--oai-wb-surface-secondary)] hover:[color:var(--oai-wb-text-primary)] focus-visible:[background:var(--oai-wb-surface-secondary)] focus-visible:[color:var(--oai-wb-text-primary)]",
                  onClick: (e) => {
                    null != s &&
                      (e.stopPropagation(),
                      Promise.resolve(s(m.email, e)).then(
                        () => {
                          ;(null != v.current && clearTimeout(v.current),
                            g(!0),
                            (v.current = setTimeout(() => {
                              ;((v.current = null), g(!1))
                            }, 2e3)))
                        },
                        () => void 0,
                      ))
                  },
                  type: "button",
                  children: p ? t : n,
                }),
          ],
        }),
        E = b.current?.ownerDocument
      return (0, i.jsxs)("div", {
        className: (0, f.A)(
          "mx-0.5 mt-0.5 mb-0 inline-flex h-8 items-center gap-1 rounded-[24px] border bg-transparent pe-2 py-0 text-base [border-color:var(--oai-wb-divider)] data-[state=open]:[background:var(--oai-wb-divider)]",
          y ? "ps-1" : "ps-[9px]",
          a ? "cursor-default" : "cursor-pointer hover:[background:var(--oai-wb-interactive-secondary-hover)]",
        ),
        "data-state": r ? "open" : void 0,
        children: [
          (0, i.jsxs)("div", {
            ref: (e) => {
              ;((b.current = e), j(e))
            },
            "aria-disabled": a || void 0,
            "aria-expanded": r,
            "aria-haspopup": "dialog",
            "aria-label": k,
            className: (0, f.A)(
              "flex min-w-0 items-center",
              y ? "gap-1.5" : "gap-1",
              a ? "cursor-default" : "cursor-pointer",
            ),
            onClick: () => {
              a || c(!r)
            },
            onKeyDown: (e) => {
              a || ("Enter" !== e.key && " " !== e.key) || (e.preventDefault(), c(!r))
            },
            role: "button",
            tabIndex: a ? -1 : 0,
            children: [
              y ? (0, i.jsx)(ef, { colors: e, contact: w, label: l.recipientAvatar, size: "chip" }) : null,
              (0, i.jsx)("span", { className: "min-w-0 truncate leading-5", children: k }),
            ],
          }),
          (0, i.jsx)("button", {
            "aria-label": l.removeRecipient(k),
            className: "inline-flex cursor-pointer items-center border-0 bg-transparent p-0 disabled:cursor-default",
            disabled: a,
            onClick: (e) => {
              ;(e.stopPropagation(), a || d())
            },
            onPointerDown: (e) => e.stopPropagation(),
            type: "button",
            children: u,
          }),
          r && null != E
            ? (0, ec.createPortal)(
                (0, i.jsx)("div", {
                  ref: (e) => {
                    ;((h.current = e), S(e))
                  },
                  "aria-label": k,
                  className: "z-[calc(var(--wb-menu-z-index,70)+1)] [font-family:var(--oai-wb-font-sans)]",
                  "data-writing-block-email-recipient-popover": "",
                  role: "dialog",
                  style: { ...Y.w, ...M },
                  children: y
                    ? (0, i.jsxs)("div", {
                        className:
                          "flex w-[320px] items-center gap-4 rounded-2xl border p-5 [background:var(--oai-wb-surface-primary)] [border-color:var(--oai-wb-divider)] [box-shadow:0_8px_24px_rgba(0,0,0,0.08)]",
                        children: [
                          (0, i.jsx)(ef, { colors: e, contact: w, label: l.recipientAvatar, size: "large" }),
                          (0, i.jsxs)("div", {
                            className: "min-w-0",
                            children: [
                              (0, i.jsx)("div", { className: "truncate text-lg font-medium", children: w.name }),
                              _,
                            ],
                          }),
                        ],
                      })
                    : (0, i.jsx)("div", {
                        className:
                          "w-[260px] rounded-2xl border p-3 [background:var(--oai-wb-surface-primary)] [border-color:var(--oai-wb-divider)] [box-shadow:0_8px_24px_rgba(0,0,0,0.08)]",
                        children: _,
                      }),
                }),
                E.body,
              )
            : null,
        ],
      })
    }
    function ef(e) {
      let t,
        n,
        r,
        l,
        s,
        c = (0, a.c)(19),
        { colors: d, contact: u, label: m, size: p } = e,
        [g, b] = (0, o.useState)(!1),
        h = "large" === p ? "h-12 w-12 text-lg" : "suggestion" === p ? "h-7 w-7 text-sm" : "h-6 w-6 text-sm"
      if (null != u.avatar_url && !g) {
        let e, t, n
        return (
          c[0] !== h
            ? ((e = (0, f.A)("block shrink-0 rounded-full object-cover", h)), (c[0] = h), (c[1] = e))
            : (e = c[1]),
          c[2] === Symbol.for("react.memo_cache_sentinel") ? ((t = () => b(!0)), (c[2] = t)) : (t = c[2]),
          c[3] !== u.avatar_url || c[4] !== e
            ? ((n = (0, i.jsx)("img", {
                alt: "",
                className: e,
                onError: t,
                referrerPolicy: "no-referrer",
                src: u.avatar_url,
              })),
              (c[3] = u.avatar_url),
              (c[4] = e),
              (c[5] = n))
            : (n = c[5]),
          n
        )
      }
      c[6] !== d ? ((t = d?.length ? d : ["var(--oai-wb-accent)"]), (c[6] = d), (c[7] = t)) : (t = c[7])
      let v = t,
        x = u.email,
        w = Array.from(x).reduce(eg, 0)
      c[8] !== h
        ? ((n = (0, f.A)("flex shrink-0 items-center justify-center rounded-full font-medium text-white", h)),
          (c[8] = h),
          (c[9] = n))
        : (n = c[9])
      let y = v[w % v.length]
      return (
        c[10] !== y ? ((r = { backgroundColor: y }), (c[10] = y), (c[11] = r)) : (r = c[11]),
        c[12] !== x ? ((l = x.trim().charAt(0).toUpperCase() || "?"), (c[12] = x), (c[13] = l)) : (l = c[13]),
        c[14] !== m || c[15] !== n || c[16] !== r || c[17] !== l
          ? ((s = (0, i.jsx)("span", { "aria-label": m, className: n, role: "img", style: r, children: l })),
            (c[14] = m),
            (c[15] = n),
            (c[16] = r),
            (c[17] = l),
            (c[18] = s))
          : (s = c[18]),
        s
      )
    }
    function eg(e, t) {
      return e + t.charCodeAt(0)
    }
    function eb(e, t) {
      let n = e?.ownerDocument.defaultView
      n?.requestAnimationFrame == null ? setTimeout(t, 0) : n.requestAnimationFrame(t)
    }
    function eh(e, t = []) {
      let { recipients: n, unfinishedValue: i } = (0, Q.DA)(e, t)
      return { inputValue: i, tokens: ev(n.map((e) => ({ id: e.email, email: e.email, contact: e }))) }
    }
    function ev(e) {
      return e.map((e, t) => ({ ...e, id: `${e.email}::${t}` }))
    }
    function ex(e) {
      let t,
        n,
        r = (0, a.c)(30),
        {
          ariaLabels: o,
          avatarFallbackColors: l,
          contacts: s,
          displayMode: c,
          getContactsForQuery: d,
          getContactQueryStatus: u,
          icons: m,
          isEditingDisabled: p,
          labels: f,
          onContactSelected: g,
          onCopyEmail: b,
          onMetadataChange: h,
          onSearch: v,
          onValueChange: x,
          portalContainer: w,
          renderSender: y,
          values: k,
        } = e
      return (
        r[0] !== o.bccInput ||
        r[1] !== o.ccInput ||
        r[2] !== o.copiedEmail ||
        r[3] !== o.copyEmail ||
        r[4] !== o.recipientAvatar ||
        r[5] !== o.recipientInput ||
        r[6] !== o.removeRecipient ||
        r[7] !== l ||
        r[8] !== u ||
        r[9] !== d ||
        r[10] !== m.copied ||
        r[11] !== m.copy ||
        r[12] !== m.remove ||
        r[13] !== p ||
        r[14] !== f.loadingContacts ||
        r[15] !== g ||
        r[16] !== b ||
        r[17] !== h ||
        r[18] !== v ||
        r[19] !== x ||
        r[20] !== w
          ? ((t = (e) => {
              let { contacts: t, displayMode: n, field: a, label: r, trailingContent: s, value: c } = e
              return (0, i.jsx)(ed, {
                ariaLabels: {
                  copiedEmail: o.copiedEmail,
                  copyEmail: o.copyEmail,
                  input: "recipient" === a ? o.recipientInput : "cc" === a ? o.ccInput : o.bccInput,
                  recipientAvatar: o.recipientAvatar,
                  removeRecipient: o.removeRecipient,
                },
                avatarFallbackColors: l,
                contacts: t,
                copiedIcon: m.copied,
                copyIcon: m.copy,
                displayMode: n,
                field: a,
                getContactsForQuery: d,
                getContactQueryStatus: u,
                isEditingDisabled: p,
                label: r,
                loadingContacts: f.loadingContacts,
                onContactSelected: () => g?.(a),
                onCopyEmail: b,
                onMetadataChange: (e, t, n) => h(a, e, t, n),
                onSearch: v,
                onValueChange: (e) => x(a, e),
                portalContainer: w,
                removeIcon: m.remove,
                trailingContent: s,
                value: c,
              })
            }),
            (r[0] = o.bccInput),
            (r[1] = o.ccInput),
            (r[2] = o.copiedEmail),
            (r[3] = o.copyEmail),
            (r[4] = o.recipientAvatar),
            (r[5] = o.recipientInput),
            (r[6] = o.removeRecipient),
            (r[7] = l),
            (r[8] = u),
            (r[9] = d),
            (r[10] = m.copied),
            (r[11] = m.copy),
            (r[12] = m.remove),
            (r[13] = p),
            (r[14] = f.loadingContacts),
            (r[15] = g),
            (r[16] = b),
            (r[17] = h),
            (r[18] = v),
            (r[19] = x),
            (r[20] = w),
            (r[21] = t))
          : (t = r[21]),
        r[22] !== s || r[23] !== c || r[24] !== p || r[25] !== f || r[26] !== y || r[27] !== t || r[28] !== k
          ? ((n = (0, i.jsx)(X, {
              contacts: s,
              displayMode: c,
              isEditingDisabled: p,
              labels: f,
              renderRecipientRow: t,
              renderSender: y,
              values: k,
            })),
            (r[22] = s),
            (r[23] = c),
            (r[24] = p),
            (r[25] = f),
            (r[26] = y),
            (r[27] = t),
            (r[28] = k),
            (r[29] = n))
          : (n = r[29]),
        n
      )
    }
    function ew(e) {
      let t,
        n,
        r,
        o,
        l,
        s,
        c,
        d,
        u,
        m,
        p,
        g,
        b = (0, a.c)(37),
        {
          isSubjectEditable: h,
          recipientFields: v,
          subject: x,
          subjectLabel: w,
          dividerClassName: y,
          recipientClassName: k,
          recipientStyle: C,
          subjectClassName: M,
          subjectPlaceholder: j,
          subjectStyle: S,
          onBlur: _,
          onSubjectChange: E,
        } = e
      b[0] !== E
        ? ((t = (e) => {
            E?.(e.target.value)
          }),
          (b[0] = E),
          (b[1] = t))
        : (t = b[1])
      let A = t,
        N = null != v
      b[2] !== N || b[3] !== k || b[4] !== v || b[5] !== C
        ? ((n = N
            ? (0, i.jsx)("div", {
                className: (0, f.A)("[&>:where(:not(:first-child))]:mt-0", k),
                style: { ...Y.w, ...C },
                children: v,
              })
            : null),
          (b[2] = N),
          (b[3] = k),
          (b[4] = v),
          (b[5] = C),
          (b[6] = n))
        : (n = b[6])
      let L = N && "mt-1"
      ;(b[7] !== M || b[8] !== L
        ? ((r = (0, f.A)("pt-0 pb-3 leading-normal", L, M)), (b[7] = M), (b[8] = L), (b[9] = r))
        : (r = b[9]),
        b[10] !== S ? ((o = { ...Y.w, ...S }), (b[10] = S), (b[11] = o)) : (o = b[11]))
      let B = !h
      b[12] !== A || b[13] !== _ || b[14] !== x || b[15] !== w || b[16] !== j || b[17] !== B
        ? ((l = (0, i.jsx)("textarea", {
            "aria-label": w,
            className:
              "col-start-1 col-end-2 row-start-1 row-end-2 w-full min-w-0 resize-none overflow-hidden border-none bg-transparent p-0 break-words whitespace-pre-wrap placeholder:[color:var(--oai-wb-text-tertiary)] focus:border-transparent focus:ring-0 focus:outline-hidden",
            disabled: B,
            maxLength: 240,
            name: "subject",
            onBlur: _,
            onChange: A,
            onCopy: ey,
            placeholder: j,
            rows: 1,
            value: x,
          })),
          (b[12] = A),
          (b[13] = _),
          (b[14] = x),
          (b[15] = w),
          (b[16] = j),
          (b[17] = B),
          (b[18] = l))
        : (l = b[18])
      let I = `${x} `
      return (
        b[19] !== I
          ? ((s = (0, i.jsx)("span", {
              className:
                "invisible col-start-1 col-end-2 row-start-1 row-end-2 min-w-0 p-0 break-words whitespace-pre-wrap",
              children: I,
            })),
            (b[19] = I),
            (b[20] = s))
          : (s = b[20]),
        b[21] !== l || b[22] !== s
          ? ((c = (0, i.jsxs)("div", { className: "grid", children: [l, s] })), (b[21] = l), (b[22] = s), (b[23] = c))
          : (c = b[23]),
        b[24] !== c || b[25] !== r || b[26] !== o
          ? ((d = (0, i.jsx)("div", { className: r, style: o, children: c })),
            (b[24] = c),
            (b[25] = r),
            (b[26] = o),
            (b[27] = d))
          : (d = b[27]),
        b[28] !== y
          ? ((u = (0, f.A)("mx-4 my-0! border-t! [border-color:var(--oai-wb-divider)]! md:mx-5", y)),
            (b[28] = y),
            (b[29] = u))
          : (u = b[29]),
        b[30] === Symbol.for("react.memo_cache_sentinel") ? ((m = { ...Y.w }), (b[30] = m)) : (m = b[30]),
        b[31] !== u ? ((p = (0, i.jsx)("hr", { className: u, style: m })), (b[31] = u), (b[32] = p)) : (p = b[32]),
        b[33] !== d || b[34] !== p || b[35] !== n
          ? ((g = (0, i.jsxs)(i.Fragment, { children: [n, d, p] })), (b[33] = d), (b[34] = p), (b[35] = n), (b[36] = g))
          : (g = b[36]),
        g
      )
    }
    function ey(e) {
      return e.stopPropagation()
    }
    var ek = n("SziE")
    let eC = [],
      eM = {},
      ej = [
        "var(--color-chart-blue)",
        "var(--color-chart-green)",
        "var(--color-chart-yellow)",
        "var(--color-chart-orange)",
        "var(--color-chart-purple)",
        "var(--color-chart-red)",
      ],
      eS = () => void 0,
      e_ = () => eC
    function eE(e) {
      let t,
        n,
        r,
        l,
        s,
        c,
        d,
        u,
        m,
        p,
        f,
        g,
        b,
        v,
        x,
        w,
        y,
        k,
        C,
        M,
        S,
        _,
        E,
        A,
        N,
        L,
        B = (0, a.c)(89),
        {
          contacts: I,
          getContactsForQuery: D,
          isRecipientEditable: R,
          isSubjectEditable: T,
          metadata: O,
          onBlur: P,
          onRecipientChange: U,
          onRecipientMetadataChange: z,
          onSearch: $,
          onSubjectChange: V,
          renderSender: F,
          subjectKey: W,
        } = e,
        G = void 0 === I ? eM : I,
        K = void 0 === D ? e_ : D,
        q = void 0 === $ ? eS : $,
        H = (0, h.A)(),
        Q = O?.bcc ?? "",
        Y = O?.cc ?? "",
        X = O?.recipient ?? ""
      B[0] !== Q || B[1] !== Y || B[2] !== X
        ? ((t = { bcc: Q, cc: Y, recipient: X }), (B[0] = Q), (B[1] = Y), (B[2] = X), (B[3] = t))
        : (t = B[3])
      let ee = t
      B[4] === Symbol.for("react.memo_cache_sentinel") ? ((n = {}), (B[4] = n)) : (n = B[4])
      let [et, en] = (0, o.useState)(n),
        ei = et.bcc?.source === ee.bcc ? et.bcc.value : ee.bcc,
        ea = et.cc?.source === ee.cc ? et.cc.value : ee.cc,
        er = et.recipient?.source === ee.recipient ? et.recipient.value : ee.recipient
      B[5] !== ea || B[6] !== er || B[7] !== ei
        ? ((r = { bcc: ei, cc: ea, recipient: er }), (B[5] = ea), (B[6] = er), (B[7] = ei), (B[8] = r))
        : (r = B[8])
      let eo = r
      B[9] !== ee
        ? ((l = (e, t) => {
            en((n) => ({ ...n, [e]: { source: ee[e], value: t } }))
          }),
          (B[9] = ee),
          (B[10] = l))
        : (l = B[10])
      let el = l,
        es = O?.subject ?? "",
        [ec, ed] = (0, o.useState)(null),
        eu = ec?.key === W && ec?.source === es ? ec.value : es
      B[11] !== V || B[12] !== es || B[13] !== W
        ? ((s = (e) => {
            ;(ed({ key: W, source: es, value: e }), V?.(e))
          }),
          (B[11] = V),
          (B[12] = es),
          (B[13] = W),
          (B[14] = s))
        : (s = B[14])
      let em = s
      ;(B[15] !== H
        ? ((c = H.formatMessage({ id: "codex.writingBlock.email.recipient.field.bcc.label", defaultMessage: "Bcc" })),
          (B[15] = H),
          (B[16] = c))
        : (c = B[16]),
        B[17] !== H
          ? ((d = H.formatMessage({
              id: "codex.writingBlock.email.recipient.toggle.bcc.label",
              defaultMessage: "Bcc",
            })),
            (B[17] = H),
            (B[18] = d))
          : (d = B[18]),
        B[19] !== H
          ? ((u = H.formatMessage({ id: "codex.writingBlock.email.recipient.field.cc.label", defaultMessage: "Cc" })),
            (B[19] = H),
            (B[20] = u))
          : (u = B[20]),
        B[21] !== H
          ? ((m = H.formatMessage({ id: "codex.writingBlock.email.recipient.toggle.cc.label", defaultMessage: "Cc" })),
            (B[21] = H),
            (B[22] = m))
          : (m = B[22]),
        B[23] !== H
          ? ((p = H.formatMessage({ id: "codex.writingBlock.email.recipient.field.to.label", defaultMessage: "To" })),
            (B[23] = H),
            (B[24] = p))
          : (p = B[24]),
        B[25] !== H
          ? ((f = H.formatMessage({
              id: "codex.writingBlock.email.recipient.empty.placeholder",
              defaultMessage: "Recipients",
            })),
            (B[25] = H),
            (B[26] = f))
          : (f = B[26]),
        B[27] !== c || B[28] !== d || B[29] !== u || B[30] !== m || B[31] !== p || B[32] !== f
          ? ((g = { bcc: c, bccToggle: d, cc: u, ccToggle: m, recipient: p, recipientsPlaceholder: f }),
            (B[27] = c),
            (B[28] = d),
            (B[29] = u),
            (B[30] = m),
            (B[31] = p),
            (B[32] = f),
            (B[33] = g))
          : (g = B[33]))
      let ep = g
      B[34] !== H
        ? ((b = H.formatMessage({ id: "codex.writingBlock.email.subject.field.label", defaultMessage: "Subject" })),
          (B[34] = H),
          (B[35] = b))
        : (b = B[35])
      let ef = b
      ;(B[36] !== H
        ? ((v = H.formatMessage({
            id: "codex.writingBlock.email.recipient.input.ariaLabel.to",
            defaultMessage: "To recipients",
          })),
          (B[36] = H),
          (B[37] = v))
        : (v = B[37]),
        B[38] !== H
          ? ((x = H.formatMessage({
              id: "codex.writingBlock.email.recipient.input.ariaLabel.cc",
              defaultMessage: "Cc recipients",
            })),
            (B[38] = H),
            (B[39] = x))
          : (x = B[39]),
        B[40] !== H
          ? ((w = H.formatMessage({
              id: "codex.writingBlock.email.recipient.input.ariaLabel.bcc",
              defaultMessage: "Bcc recipients",
            })),
            (B[40] = H),
            (B[41] = w))
          : (w = B[41]),
        B[42] !== H
          ? ((y = H.formatMessage({
              id: "codex.writingBlock.email.recipient.contact.copy.ariaLabel.copied",
              defaultMessage: "Copied email address",
            })),
            (B[42] = H),
            (B[43] = y))
          : (y = B[43]),
        B[44] !== H
          ? ((k = H.formatMessage({
              id: "codex.writingBlock.email.recipient.contact.copy.ariaLabel.action",
              defaultMessage: "Copy email address",
            })),
            (B[44] = H),
            (B[45] = k))
          : (k = B[45]),
        B[46] !== H
          ? ((C = H.formatMessage({
              id: "codex.writingBlock.email.recipient.contact.avatar.ariaLabel",
              defaultMessage: "Profile avatar",
            })),
            (B[46] = H),
            (B[47] = C))
          : (C = B[47]),
        B[48] !== v || B[49] !== x || B[50] !== w || B[51] !== y || B[52] !== k || B[53] !== C
          ? ((M = { recipient: v, cc: x, bcc: w, copiedEmail: y, copyEmail: k, recipientAvatar: C }),
            (B[48] = v),
            (B[49] = x),
            (B[50] = w),
            (B[51] = y),
            (B[52] = k),
            (B[53] = C),
            (B[54] = M))
          : (M = B[54]))
      let eg = M
      ;(B[55] !== H
        ? ((S = (e) =>
            H.formatMessage(
              {
                id: "codex.writingBlock.email.recipient.contact.remove.ariaLabel",
                defaultMessage: "Remove {recipient}",
              },
              { recipient: e },
            )),
          (B[55] = H),
          (B[56] = S))
        : (S = B[56]),
        B[57] !== eg.bcc ||
        B[58] !== eg.cc ||
        B[59] !== eg.copiedEmail ||
        B[60] !== eg.copyEmail ||
        B[61] !== eg.recipient ||
        B[62] !== eg.recipientAvatar ||
        B[63] !== S
          ? ((_ = {
              bccInput: eg.bcc,
              ccInput: eg.cc,
              copiedEmail: eg.copiedEmail,
              copyEmail: eg.copyEmail,
              recipientAvatar: eg.recipientAvatar,
              recipientInput: eg.recipient,
              removeRecipient: S,
            }),
            (B[57] = eg.bcc),
            (B[58] = eg.cc),
            (B[59] = eg.copiedEmail),
            (B[60] = eg.copyEmail),
            (B[61] = eg.recipient),
            (B[62] = eg.recipientAvatar),
            (B[63] = S),
            (B[64] = _))
          : (_ = B[64]))
      let eb = R ? "tokenized" : "plain_text"
      B[65] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = {
            copied: (0, i.jsx)(j.I, { "aria-hidden": !1, asset: Z.G }),
            copy: (0, i.jsx)(j.I, { "aria-hidden": !1, asset: J.r }),
            remove: (0, i.jsx)(ek.A, { className: "icon-sm" }),
          }),
          (B[65] = E))
        : (E = B[65])
      let eh = !R
      return (
        B[66] !== P || B[67] !== U || B[68] !== z
          ? ((A = (e, t, n, i) => {
              ;(i && U?.(e, t), z?.(e, t, n, i), i && P?.())
            }),
            (B[66] = P),
            (B[67] = U),
            (B[68] = z),
            (B[69] = A))
          : (A = B[69]),
        B[70] !== G ||
        B[71] !== K ||
        B[72] !== el ||
        B[73] !== q ||
        B[74] !== ep ||
        B[75] !== eo ||
        B[76] !== F ||
        B[77] !== _ ||
        B[78] !== eb ||
        B[79] !== eh ||
        B[80] !== A
          ? ((N = (0, i.jsx)(ex, {
              ariaLabels: _,
              avatarFallbackColors: ej,
              contacts: G,
              displayMode: eb,
              getContactsForQuery: K,
              icons: E,
              isEditingDisabled: eh,
              labels: ep,
              onCopyEmail: eA,
              onMetadataChange: A,
              onSearch: q,
              onValueChange: el,
              renderSender: F,
              values: eo,
            })),
            (B[70] = G),
            (B[71] = K),
            (B[72] = el),
            (B[73] = q),
            (B[74] = ep),
            (B[75] = eo),
            (B[76] = F),
            (B[77] = _),
            (B[78] = eb),
            (B[79] = eh),
            (B[80] = A),
            (B[81] = N))
          : (N = B[81]),
        B[82] !== em || B[83] !== T || B[84] !== P || B[85] !== eu || B[86] !== ef || B[87] !== N
          ? ((L = (0, i.jsx)(ew, {
              isSubjectEditable: T,
              onBlur: P,
              onSubjectChange: em,
              recipientClassName: "ps-4 pe-4 sm:ps-5 md:pe-5",
              recipientFields: N,
              subject: eu,
              subjectClassName: "ps-4 pe-3 sm:ps-5 sm:pe-2 md:pe-10",
              subjectLabel: ef,
              subjectPlaceholder: ef,
            })),
            (B[82] = em),
            (B[83] = T),
            (B[84] = P),
            (B[85] = eu),
            (B[86] = ef),
            (B[87] = N),
            (B[88] = L))
          : (L = B[88]),
        L
      )
    }
    function eA(e, t) {
      return (0, T.lW)(e, t)
    }
    var eN = n("q1q2"),
      eL = n("ixaN"),
      eB = n("wD9O"),
      eI = n("hdt5")
    function eD(e) {
      let t,
        n,
        r,
        l,
        s,
        c,
        d,
        u,
        m,
        p,
        f,
        g,
        b,
        h,
        v,
        x,
        w,
        y,
        k = (0, a.c)(43),
        { editorView: C, suggestion: M } = e,
        j = (0, eB.dz)(),
        S = (0, o.useRef)(null)
      ;(k[0] !== M.mode
        ? ((t = () => {
            "picker" === M.mode && S.current?.focus()
          }),
          (n = [M.mode]),
          (k[0] = M.mode),
          (k[1] = t),
          (k[2] = n))
        : ((t = k[1]), (n = k[2])),
        (0, o.useEffect)(t, n),
        k[3] !== C || k[4] !== M.from
          ? ((r = {
              contextElement: C.dom,
              getBoundingClientRect() {
                if (!C.isDestroyed)
                  try {
                    let { left: e, bottom: t } = C.coordsAtPos(M.from)
                    return DOMRect.fromRect({ x: e, y: t })
                  } catch {}
                return C.dom.getBoundingClientRect()
              },
            }),
            (k[3] = C),
            (k[4] = M.from),
            (k[5] = r))
          : (r = k[5]))
      let _ = r
      ;(k[6] !== _ ? ((l = { reference: _ }), (k[6] = _), (k[7] = l)) : (l = k[7]),
        k[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, eN.cY)(8)),
            (c = (0, eN.UU)({ padding: 8 })),
            (d = (0, eN.BN)({ padding: 8 })),
            (k[8] = s),
            (k[9] = c),
            (k[10] = d))
          : ((s = k[8]), (c = k[9]), (d = k[10])),
        k[11] !== j
          ? ((u = (0, eN.Ej)({
              padding: 8,
              apply(e) {
                let { availableHeight: t, availableWidth: n, elements: i } = e
                ;((i.floating.style.maxWidth = `${n}px`),
                  i.floating.style.setProperty("--autocomplete-overlay-available-height", `${t / j}px`))
              },
            })),
            (k[11] = j),
            (k[12] = u))
          : (u = k[12]),
        k[13] !== u ? ((m = [s, c, d, u]), (k[13] = u), (k[14] = m)) : (m = k[14]))
      let E = !C.isDestroyed
      k[15] !== E || k[16] !== l || k[17] !== m
        ? ((p = { elements: l, middleware: m, open: E, placement: "bottom-start", whileElementsMounted: es.ll }),
          (k[15] = E),
          (k[16] = l),
          (k[17] = m),
          (k[18] = p))
        : (p = k[18])
      let { floatingStyles: A, refs: N } = (0, eN.we)(p),
        { setFloating: L } = N
      if (C.isDestroyed) return null
      let B = 1 !== j ? j : void 0
      return (
        k[19] !== B ? ((f = { zoom: B }), (k[19] = B), (k[20] = f)) : (f = k[20]),
        k[21] === Symbol.for("react.memo_cache_sentinel") ? ((g = { emoji: {} }), (k[21] = g)) : (g = k[21]),
        k[22] !== C ? ((b = () => (0, eL.HU)(C)), (k[22] = C), (k[23] = b)) : (b = k[23]),
        k[24] !== C || k[25] !== M
          ? ((h = (e) => {
              "emoji" !== e.kind || C.isDestroyed || (C.focus(), (0, eL.te)(C, e.value, M))
            }),
            (k[24] = C),
            (k[25] = M),
            (k[26] = h))
          : (h = k[26]),
        k[27] !== C.dom || k[28] !== M.mode || k[29] !== M.query || k[30] !== b || k[31] !== h
          ? ((v = (0, i.jsx)(
              eI.c,
              { capabilities: g, keyboardTarget: C.dom, inputRef: S, query: M.query, onDismiss: b, onSelect: h },
              M.mode,
            )),
            (k[27] = C.dom),
            (k[28] = M.mode),
            (k[29] = M.query),
            (k[30] = b),
            (k[31] = h),
            (k[32] = v))
          : (v = k[32]),
        k[33] !== f || k[34] !== v
          ? ((x = (0, i.jsx)("div", { style: f, children: v })), (k[33] = f), (k[34] = v), (k[35] = x))
          : (x = k[35]),
        k[36] !== A || k[37] !== L || k[38] !== x
          ? ((w = (0, i.jsx)("div", {
              ref: L,
              className: "z-50",
              "data-writing-block-emoji-picker": !0,
              style: A,
              children: x,
            })),
            (k[36] = A),
            (k[37] = L),
            (k[38] = x),
            (k[39] = w))
          : (w = k[39]),
        k[40] !== C.dom.ownerDocument.body || k[41] !== w
          ? ((y = (0, ec.createPortal)(w, C.dom.ownerDocument.body)),
            (k[40] = C.dom.ownerDocument.body),
            (k[41] = w),
            (k[42] = y))
          : (y = k[42]),
        y
      )
    }
    var eR = n("Vsx4"),
      eT = n("ESTr")
    let eO = (0, eT.a)({
      name: "text-bold-sm-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 4.740234, y: 3.859375, width: 6.520508, height: 8.28125 },
        visualBounds: { x: 4.740234, y: 3.859375, width: 6.520508, height: 8.28125 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 4.740234, y: 3.859375, width: 6.520508, height: 8.28125 },
        center: { x: 8.000488, y: 8 },
        insets: { top: 3.859375, right: 4.739258, bottom: 3.859375, left: 4.740234 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.000488, y: 8 }, foreground: { x: 8.000488, y: 8 } },
      },
      capabilities: ["icon"],
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M8.34961 3.85938C9.13365 3.85944 9.76011 4.06005 10.1885 4.4082C10.6145 4.75447 10.8534 5.25393 10.8535 5.875C10.8535 6.75237 10.1941 7.56721 9.33789 7.69531L9.25293 7.70801V7.79785L9.3457 7.80469C10.457 7.88936 11.2607 8.74906 11.2607 9.81348C11.2606 10.5323 10.9902 11.1102 10.5059 11.5098C10.0193 11.911 9.30718 12.1406 8.41406 12.1406H5.53223C5.27226 12.1406 5.07799 12.0615 4.94824 11.9268C4.81803 11.7915 4.74023 11.587 4.74023 11.3115V4.68262C4.74023 4.41032 4.81801 4.20688 4.94824 4.07227C5.07803 3.93825 5.2724 3.8594 5.53223 3.85938H8.34961ZM6.32422 11.0176H7.95996C8.48546 11.0175 8.90672 10.9069 9.19824 10.6777C9.49371 10.4453 9.64258 10.1022 9.64258 9.67188C9.64255 9.24862 9.48767 8.91298 9.18457 8.68652C8.88584 8.46356 8.45463 8.35547 7.91797 8.35547H6.32422V11.0176ZM6.32422 7.38574H7.70508C8.19328 7.38574 8.59198 7.27919 8.87012 7.06738C9.15188 6.85272 9.2998 6.53787 9.2998 6.15137C9.29973 5.78557 9.16997 5.4881 8.91992 5.28418C8.67247 5.08262 8.31892 4.98243 7.88867 4.98242H6.32422V7.38574Z" fill="currentColor"/>',
    })
    var eP = n("f6KK")
    let eU = new eP.hs("writing-block-collaborative-sync")
    new WeakMap()
    var ez = n("Sm6l"),
      e$ = n("jqmc")
    let eV = (0, eT.a)({
      name: "unlink-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 0.807983, y: 0.808105, width: 14.383911, height: 14.383789 },
        visualBounds: { x: 0.807983, y: 0.808105, width: 14.383911, height: 14.383789 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 0.807983, y: 0.808105, width: 14.383911, height: 14.383789 },
        center: { x: 7.999939, y: 8 },
        insets: { top: 0.808105, right: 0.808106, bottom: 0.808106, left: 0.807983 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.999939, y: 8 }, foreground: { x: 7.999939, y: 8 } },
      },
      capabilities: ["icon"],
      body: '<path d="M11.2064 12.8237C11.4875 12.7538 11.7729 12.9254 11.8431 13.2065L12.1761 14.5395C12.2463 14.8206 12.0753 15.1058 11.7943 15.1763C11.5132 15.2465 11.2281 15.0754 11.1576 14.7944L10.8236 13.4604C10.7536 13.1793 10.9253 12.894 11.2064 12.8237Z" fill="currentColor"/> <path d="M3.76989 6.19872C3.97475 5.99386 4.30701 5.9932 4.51208 6.19775C4.7171 6.40277 4.7171 6.73588 4.51208 6.94091L3.60876 7.84423C2.42943 9.02363 2.40763 10.9535 3.72692 12.2729C5.04627 13.5922 6.97522 13.5702 8.15465 12.3911L9.05895 11.4868C9.26396 11.2819 9.59712 11.2819 9.80212 11.4868C10.0071 11.6918 10.007 12.0249 9.80212 12.23L8.89782 13.1343C7.28633 14.7454 4.6908 14.723 2.98376 13.0161C1.27678 11.309 1.25518 8.7135 2.86657 7.10204L3.76989 6.19872Z" fill="currentColor"/> <path d="M13.4603 10.8237L14.7943 11.1577C15.0753 11.2282 15.2464 11.5133 15.1761 11.7944C15.1057 12.0754 14.8205 12.2464 14.5394 12.1763L13.2064 11.8433C12.9253 11.773 12.7536 11.4876 12.8236 11.2065C12.8939 10.9254 13.1792 10.7537 13.4603 10.8237Z" fill="currentColor"/> <path d="M6.53649 8.72216C6.7415 8.51715 7.07365 8.51717 7.27868 8.72216C7.48323 8.92722 7.48355 9.25948 7.27868 9.46435L6.37145 10.3716C6.16658 10.5764 5.83433 10.5761 5.62926 10.3716C5.42428 10.1665 5.42425 9.8344 5.62926 9.62939L6.53649 8.72216Z" fill="currentColor"/> <path d="M7.10192 2.86669C8.71338 1.2553 11.3088 1.2769 13.016 2.98388C14.7229 4.69092 14.7453 7.28645 13.1341 8.89794L12.2298 9.80224C12.0248 10.0072 11.6917 10.0072 11.4867 9.80224C11.2818 9.59724 11.2818 9.26408 11.4867 9.05907L12.391 8.15478C13.57 6.97534 13.592 5.04639 12.2728 3.72704C10.9534 2.40775 9.0235 2.42955 7.84411 3.60888L6.94079 4.5122C6.73576 4.71722 6.40265 4.71722 6.19762 4.5122C5.99308 4.30713 5.99374 3.97488 6.1986 3.77001L7.10192 2.86669Z" fill="currentColor"/> <path d="M9.62926 5.62939C9.83428 5.42437 10.1664 5.4244 10.3715 5.62939C10.576 5.83445 10.5763 6.16671 10.3715 6.37157L9.46422 7.2788C9.25936 7.48367 8.9271 7.48336 8.72204 7.2788C8.51705 7.07377 8.51702 6.74163 8.72204 6.53661L9.62926 5.62939Z" fill="currentColor"/> <path d="M1.46032 3.82372L2.7943 4.15771C3.07531 4.22824 3.24642 4.51329 3.17614 4.79442C3.10569 5.07543 2.82052 5.24639 2.53942 5.17626L1.20641 4.84325C0.925309 4.77298 0.753648 4.48764 0.8236 4.20653C0.893884 3.9254 1.17918 3.7537 1.46032 3.82372Z" fill="currentColor"/> <path d="M4.20641 0.823722C4.48752 0.75377 4.77286 0.925431 4.84313 1.20653L5.17614 2.53954C5.24627 2.82064 5.07531 3.10582 4.7943 3.17626C4.51317 3.24654 4.22811 3.07543 4.15758 2.79442L3.8236 1.46044C3.75358 1.1793 3.92527 0.894006 4.20641 0.823722Z" fill="currentColor"/>',
    })
    var eF = n("uuN8")
    function eW(e) {
      let t,
        n,
        r,
        o,
        l,
        s,
        c,
        d,
        u,
        m,
        p,
        f,
        g,
        b,
        x,
        w,
        y = (0, a.c)(50),
        { editorView: k, link: M, onEdit: _ } = e,
        E = (0, h.A)()
      ;(y[0] !== k.state.doc || y[1] !== M.from || y[2] !== M.to
        ? ((t = k.state.doc.textBetween(M.from, M.to)),
          (y[0] = k.state.doc),
          (y[1] = M.from),
          (y[2] = M.to),
          (y[3] = t))
        : (t = y[3]),
        y[4] !== k.state.doc || y[5] !== M.from || y[6] !== M.href || y[7] !== M.to || y[8] !== t
          ? ((n = t === M.href),
            k.state.doc.nodesBetween(M.from, M.to, (e) => {
              n = n || e.marks.some(eK)
            }),
            (y[4] = k.state.doc),
            (y[5] = M.from),
            (y[6] = M.href),
            (y[7] = M.to),
            (y[8] = t),
            (y[9] = n))
          : (n = y[9]),
        y[10] !== M.href
          ? ((r = M.href.length > 34 ? `${M.href.slice(0, 34)}\u{2026}` : M.href), (y[10] = M.href), (y[11] = r))
          : (r = y[11]))
      let A = r
      return (
        y[12] !== k ||
        y[13] !== E ||
        y[14] !== n ||
        y[15] !== M.from ||
        y[16] !== M.href ||
        y[17] !== M.to ||
        y[18] !== A ||
        y[19] !== _
          ? ((o =
              !n &&
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)("span", {
                    className: "max-w-56 truncate px-2 text-xs text-secondary select-none",
                    title: M.href,
                    children: A,
                  }),
                  (0, i.jsx)(ez.$, {
                    color: "ghostActive",
                    size: "toolbar",
                    "aria-label": E.formatMessage({
                      id: "codex.writingBlock.format.editExistingLink",
                      defaultMessage: "Edit link",
                    }),
                    uniform: !0,
                    onClick: _,
                    children: (0, i.jsx)(S.Npl, {}),
                  }),
                  (0, i.jsx)(ez.$, {
                    color: "ghostActive",
                    size: "toolbar",
                    "aria-label": E.formatMessage({
                      id: "codex.writingBlock.format.removeLink",
                      defaultMessage: "Remove link",
                    }),
                    uniform: !0,
                    onClick: () => {
                      let e = k.state.schema.marks.link
                      null != e && (k.dispatch(k.state.tr.removeMark(M.from, M.to, e)), k.focus())
                    },
                    children: (0, i.jsx)(j.I, { asset: eV }),
                  }),
                  (0, i.jsx)("div", { "aria-hidden": !0, className: "mx-1 h-3 w-px shrink-0 bg-border" }),
                ],
              })),
            (y[12] = k),
            (y[13] = E),
            (y[14] = n),
            (y[15] = M.from),
            (y[16] = M.href),
            (y[17] = M.to),
            (y[18] = A),
            (y[19] = _),
            (y[20] = o))
          : (o = y[20]),
        y[21] !== M.from || y[22] !== M.href || y[23] !== M.to
          ? ((l = JSON.stringify([M.href, M.from, M.to])),
            (y[21] = M.from),
            (y[22] = M.href),
            (y[23] = M.to),
            (y[24] = l))
          : (l = y[24]),
        y[25] !== E
          ? ((s = E.formatMessage({ id: "codex.writingBlock.format.copyLink", defaultMessage: "Copy link" })),
            (y[25] = E),
            (y[26] = s))
          : (s = y[26]),
        y[27] !== E
          ? ((c = E.formatMessage({ id: "codex.writingBlock.format.copyLinkLabel", defaultMessage: "Copy" })),
            (y[27] = E),
            (y[28] = c))
          : (c = y[28]),
        y[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = { copy: (0, i.jsx)(S.R3B, {}), copied: (0, i.jsx)(S.ALZ, {}) }), (y[29] = d))
          : (d = y[29]),
        y[30] !== M.href ? ((u = (e) => (0, T.lW)(M.href, e)), (y[30] = M.href), (y[31] = u)) : (u = y[31]),
        y[32] !== l || y[33] !== s || y[34] !== c || y[35] !== u
          ? ((m = (0, i.jsx)(eF.i, { ariaLabel: s, buttonText: c, icons: d, onCopy: u, renderButton: eG }, l)),
            (y[32] = l),
            (y[33] = s),
            (y[34] = c),
            (y[35] = u),
            (y[36] = m))
          : (m = y[36]),
        y[37] !== E
          ? ((p = E.formatMessage({ id: "codex.writingBlock.format.openLink", defaultMessage: "Open link" })),
            (y[37] = E),
            (y[38] = p))
          : (p = y[38]),
        y[39] !== M.href
          ? ((f = (e) => {
              ;(0, C.PQ)({ event: e, href: M.href, initiator: "open_in_browser_bridge" })
            }),
            (y[39] = M.href),
            (y[40] = f))
          : (f = y[40]),
        y[41] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, i.jsx)(S.GRR, {})),
            (b = (0, i.jsx)(v.A, { id: "codex.writingBlock.format.openLinkLabel", defaultMessage: "Open" })),
            (y[41] = g),
            (y[42] = b))
          : ((g = y[41]), (b = y[42])),
        y[43] !== p || y[44] !== f
          ? ((x = (0, i.jsxs)(ez.$, {
              color: "ghostActive",
              size: "toolbar",
              "aria-label": p,
              onClick: f,
              children: [g, b],
            })),
            (y[43] = p),
            (y[44] = f),
            (y[45] = x))
          : (x = y[45]),
        y[46] !== x || y[47] !== o || y[48] !== m
          ? ((w = (0, i.jsxs)(i.Fragment, { children: [o, m, x] })), (y[46] = x), (y[47] = o), (y[48] = m), (y[49] = w))
          : (w = y[49]),
        w
      )
    }
    function eG(e) {
      return (0, i.jsx)(ez.$, { ...e, color: "ghostActive", size: "toolbar" })
    }
    function eK(e) {
      return "link" === e.type.name && !0 === e.attrs.isAutolink
    }
    function eq(e) {
      let t,
        n,
        l,
        s,
        c,
        d,
        u,
        m,
        f,
        g,
        b,
        x,
        w,
        k,
        C,
        M,
        j,
        _,
        E,
        A,
        N,
        L = (0, a.c)(86),
        {
          editable: B,
          editorView: I,
          isEditSelectionLoading: D,
          isOpenLinkModifierPressed: R,
          onAskForChanges: T,
          onCancelEditSelection: O,
          onEditSelection: P,
          onEditSelectionOpenChange: U,
          proseMirrorStore: z,
          trailingActions: $,
        } = e,
        V = void 0 === B || B,
        F = void 0 !== D && D,
        W = (0, h.A)(),
        G = (0, eB.dz)(),
        [K, q] = (0, o.useState)("actions"),
        [H, J] = (0, o.useState)(""),
        [Q, Y] = (0, o.useState)(null),
        [X, ee] = (0, o.useState)(!0),
        et = (0, r.iJ)(z) ?? null
      L[0] !== et ? ((t = (0, p.Bp)(et)), (L[0] = et), (L[1] = t)) : (t = L[1])
      let en = t,
        ei = Q?.from ?? en?.from ?? et?.from,
        ea = Q?.to ?? en?.to ?? et?.to
      L[2] !== I.state || L[3] !== et
        ? ((n = et instanceof eP.nh && "writing_block_image" === et.node.type.name && null != eU.get(I.state)),
          (L[2] = I.state),
          (L[3] = et),
          (L[4] = n))
        : (n = L[4])
      let er = n,
        eo = X && !er && !I.isDestroyed && null != ei && null != ea && ei !== ea
      L[5] !== I || L[6] !== ei || L[7] !== ea
        ? ((l = {
            contextElement: I.dom,
            getBoundingClientRect() {
              if (null != ei && null != ea && !I.isDestroyed)
                try {
                  let e = I.coordsAtPos(ei),
                    t = I.coordsAtPos(ea),
                    n = Math.min(e.left, t.left),
                    i = Math.max(e.right, t.right),
                    a = Math.min(e.top, t.top),
                    r = Math.max(e.bottom, t.bottom)
                  return DOMRect.fromRect({ height: r - a, width: i - n, x: n, y: a })
                } catch {}
              return I.dom.getBoundingClientRect()
            },
          }),
          (L[5] = I),
          (L[6] = ei),
          (L[7] = ea),
          (L[8] = l))
        : (l = L[8])
      let el = l
      ;(L[9] !== el ? ((s = { reference: el }), (L[9] = el), (L[10] = s)) : (s = L[10]),
        L[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = [
              (0, eN.cY)(8),
              (0, eN.UU)({ padding: 8 }),
              (0, eN.BN)({ padding: 8 }),
              (0, eN.Ej)({
                padding: 8,
                apply(e) {
                  let { availableWidth: t, elements: n } = e
                  n.floating.style.maxWidth = `${t}px`
                },
              }),
            ]),
            (L[11] = c))
          : (c = L[11]),
        L[12] !== eo || L[13] !== s
          ? ((d = { elements: s, middleware: c, open: eo, placement: "top", whileElementsMounted: es.ll }),
            (L[12] = eo),
            (L[13] = s),
            (L[14] = d))
          : (d = L[14]))
      let { floatingStyles: ed, refs: eu } = (0, eN.we)(d),
        { floating: em, setFloating: ep } = eu
      L[15] !== I || L[16] !== K || L[17] !== U
        ? ((u = (e) => {
            ;("edit" === K && U?.(!1), Y(null), J(""), q("actions"), (void 0 === e || e) && !I.isDestroyed && I.focus())
          }),
          (L[15] = I),
          (L[16] = K),
          (L[17] = U),
          (L[18] = u))
        : (u = L[18])
      let ef = u
      L[19] !== ef || L[20] !== K || L[21] !== O
        ? ((m = (e) => {
            ;("edit" === K && O?.(), ef(e))
          }),
          (L[19] = ef),
          (L[20] = K),
          (L[21] = O),
          (L[22] = m))
        : (m = L[22])
      let eg = m
      L[23] !== eg || L[24] !== I.dom || L[25] !== em
        ? ((f = (e) => {
            ;(e instanceof Node &&
              (I.dom.contains(e) ||
                em.current?.contains(e) ||
                (e instanceof Element && null != e.closest('[role="menu"]')))) ||
              (eg(!1), ee(!1))
          }),
          (L[23] = eg),
          (L[24] = I.dom),
          (L[25] = em),
          (L[26] = f))
        : (f = L[26])
      let eb = f
      L[27] !== eb
        ? ((g = (e) => {
            eb(e.relatedTarget)
          }),
          (L[27] = eb),
          (L[28] = g))
        : (g = L[28])
      let eh = (0, o.useEffectEvent)(g)
      L[29] !== eg || L[30] !== em || L[31] !== K
        ? ((b = (e) => {
            "actions" === K ||
              !(e.target instanceof Node) ||
              em.current?.contains(e.target) ||
              (e.target instanceof Element && null != e.target.closest('[role="menu"]')) ||
              eg(!1)
          }),
          (L[29] = eg),
          (L[30] = em),
          (L[31] = K),
          (L[32] = b))
        : (b = L[32])
      let ev = (0, o.useEffectEvent)(b)
      if (
        (L[33] !== I.dom || L[34] !== eh || L[35] !== ev
          ? ((x = () => {
              let e = (e) => {
                  eh(e)
                },
                t = (e) => {
                  ev(e)
                },
                n = () => ee(!0),
                i = I.dom.ownerDocument
              return (
                I.dom.addEventListener("focusout", e),
                I.dom.addEventListener("focusin", n),
                i.addEventListener("pointerdown", t),
                () => {
                  ;(I.dom.removeEventListener("focusout", e),
                    I.dom.removeEventListener("focusin", n),
                    i.removeEventListener("pointerdown", t))
                }
              )
            }),
            (L[33] = I.dom),
            (L[34] = eh),
            (L[35] = ev),
            (L[36] = x))
          : (x = L[36]),
        L[37] !== I ? ((w = [I]), (L[37] = I), (L[38] = w)) : (w = L[38]),
        (0, o.useEffect)(x, w),
        !eo || null == ei || null == ea || ("actions" === K && null != en && void 0 !== R && R))
      )
        return null
      L[39] !== en?.href || L[40] !== ei || L[41] !== U || L[42] !== ea
        ? ((k = (e) => {
            ;(Y({ from: ei, to: ea }), J("link" === e ? (en?.href ?? "") : ""), q(e), "edit" === e && U?.(!0))
          }),
          (L[39] = en?.href),
          (L[40] = ei),
          (L[41] = U),
          (L[42] = ea),
          (L[43] = k))
        : (k = L[43])
      let ex = k,
        ew = "link" === K
      if (ew) {
        let e
        ;(L[44] !== W
          ? ((e = W.formatMessage({ id: "codex.writingBlock.format.saveLink", defaultMessage: "Save link" })),
            (L[44] = W),
            (L[45] = e))
          : (e = L[45]),
          (C = e))
      } else if (F) {
        let e
        ;(L[46] !== W
          ? ((e = W.formatMessage({ id: "codex.writingBlock.format.cancelEdit", defaultMessage: "Cancel" })),
            (L[46] = W),
            (L[47] = e))
          : (e = L[47]),
          (C = e))
      } else {
        let e
        ;(L[48] !== W
          ? ((e = W.formatMessage({
              id: "codex.writingBlock.format.submitEdit",
              defaultMessage: "Submit edit instruction",
            })),
            (L[48] = W),
            (L[49] = e))
          : (e = L[49]),
          (C = e))
      }
      L[50] !== eb ? ((M = (e) => eb(e.relatedTarget)), (L[50] = eb), (L[51] = M)) : (M = L[51])
      let ey = 1 !== G ? G : void 0
      return (
        L[52] !== ey ? ((j = { zoom: ey }), (L[52] = ey), (L[53] = j)) : (j = L[53]),
        L[54] !== en ||
        L[55] !== ef ||
        L[56] !== eg ||
        L[57] !== V ||
        L[58] !== I ||
        L[59] !== ei ||
        L[60] !== W ||
        L[61] !== F ||
        L[62] !== ew ||
        L[63] !== K ||
        L[64] !== T ||
        L[65] !== O ||
        L[66] !== P ||
        L[67] !== U ||
        L[68] !== ex ||
        L[69] !== et?.ranges ||
        L[70] !== C ||
        L[71] !== ea ||
        L[72] !== $ ||
        L[73] !== H
          ? ((_ =
              "actions" !== K && V
                ? (0, i.jsxs)("form", {
                    "aria-busy": !ew && F,
                    className:
                      "pointer-events-auto flex w-96 max-w-full items-center gap-1.5 rounded-full border border-default bg-surface p-1 ps-3.5 font-sans shadow-lg",
                    onKeyDown: (e) => {
                      ;(e.stopPropagation(),
                        "Escape" !== e.key || e.nativeEvent.isComposing || (e.preventDefault(), eg(!0)))
                    },
                    onSubmit: (e) => {
                      e.preventDefault()
                      let t = H.trim()
                      if (!t || (!ew && F)) return
                      if (!ew) {
                        ;(U?.(!0),
                          P?.(t, { from: ei, to: ea }).then((e) => {
                            e && !I.isDestroyed && ef()
                          }))
                        return
                      }
                      let n = (0, eR.xz)(t),
                        i = I.state.schema.marks.link
                      null != n &&
                        null != i &&
                        (I.dispatch(
                          I.state.tr
                            .setSelection(eP.U3.create(I.state.doc, ei, ea))
                            .removeMark(ei, ea, i)
                            .addMark(ei, ea, i.create({ href: n })),
                        ),
                        ef())
                    },
                    children: [
                      (0, i.jsx)("input", {
                        "aria-label": ew
                          ? W.formatMessage({ id: "codex.writingBlock.format.linkInput", defaultMessage: "Link URL" })
                          : W.formatMessage({
                              id: "codex.writingBlock.format.editInput",
                              defaultMessage: "Edit instruction",
                            }),
                        autoComplete: "off",
                        autoFocus: !0,
                        className:
                          "min-w-0 flex-1 bg-transparent text-sm text-default outline-none placeholder:text-codex-description",
                        name: ew ? "writing-block-link" : "writing-block-edit",
                        placeholder: ew
                          ? W.formatMessage({
                              id: "codex.writingBlock.format.linkPlaceholder",
                              defaultMessage: "Paste a link\u2026",
                            })
                          : W.formatMessage({
                              id: "codex.writingBlock.format.editPlaceholder",
                              defaultMessage: "Describe the edit\u2026",
                            }),
                        required: !0,
                        readOnly: !ew && F,
                        value: H,
                        onChange: (e) => J(e.target.value),
                      }),
                      (0, i.jsx)(ez.$, {
                        "aria-label": C,
                        color: "primary",
                        disabled: !F && 0 === H.trim().length,
                        onClick:
                          !ew && F
                            ? (e) => {
                                ;(e.preventDefault(), O?.())
                              }
                            : void 0,
                        size: "composerSm",
                        type: !ew && F ? "button" : "submit",
                        uniform: !0,
                        children: !ew && F ? (0, i.jsx)(S.Gmf, {}) : (0, i.jsx)(S.npO, {}),
                      }),
                    ],
                  })
                : (0, i.jsxs)(e$.iU, {
                    variant: V ? "formatting" : "segmented",
                    children: [
                      !V && $,
                      V && null != en && (0, i.jsx)(eW, { editorView: I, link: en, onEdit: () => ex("link") }),
                      V &&
                        null == en &&
                        (0, i.jsxs)(i.Fragment, {
                          children: [
                            null != T &&
                              (0, i.jsx)(ez.$, {
                                color: "ghostActive",
                                size: "formatToolbar",
                                onClick: () => {
                                  ;(I.dispatch(I.state.tr.setSelection(eP.U3.create(I.state.doc, ei, ea))), T(I))
                                },
                                children: (0, i.jsx)(v.A, {
                                  id: "codex.writingBlock.format.askForChanges",
                                  defaultMessage: "Ask for changes",
                                }),
                              }),
                            null == T &&
                              null != P &&
                              (0, i.jsx)(ez.$, {
                                color: "ghostActive",
                                size: "formatToolbar",
                                onClick: () => ex("edit"),
                                children: (0, i.jsx)(v.A, {
                                  id: "codex.writingBlock.format.askForSelectionEdit",
                                  defaultMessage: "Ask for changes",
                                }),
                              }),
                            (null != T || null != P) &&
                              (0, i.jsx)("div", { "aria-hidden": !0, className: "mx-1 h-3 w-px shrink-0 bg-border" }),
                            (0, i.jsx)(p.uL, {
                              actions: ["link", "bold", "italic"],
                              editorView: I,
                              labels: {
                                bold: W.formatMessage({ id: "codex.writingBlock.format.bold", defaultMessage: "Bold" }),
                                code: W.formatMessage({ id: "codex.writingBlock.format.code", defaultMessage: "Code" }),
                                italic: W.formatMessage({
                                  id: "codex.writingBlock.format.italic",
                                  defaultMessage: "Italic",
                                }),
                                link: W.formatMessage({ id: "codex.writingBlock.format.link", defaultMessage: "Link" }),
                              },
                              onEditLink: () => ex("link"),
                              ranges: et?.ranges,
                              renderAction: eZ,
                              trailingActions: (0, i.jsxs)(i.Fragment, {
                                children: [
                                  (0, i.jsx)(p.ji, {
                                    editorView: I,
                                    labels: {
                                      checklist: W.formatMessage({
                                        id: "codex.writingBlock.format.textStyle.checklist",
                                        defaultMessage: "Checklist",
                                      }),
                                      heading1: W.formatMessage({
                                        id: "codex.writingBlock.format.textStyle.heading1",
                                        defaultMessage: "Heading 1",
                                      }),
                                      heading2: W.formatMessage({
                                        id: "codex.writingBlock.format.textStyle.heading2",
                                        defaultMessage: "Heading 2",
                                      }),
                                      heading3: W.formatMessage({
                                        id: "codex.writingBlock.format.textStyle.heading3",
                                        defaultMessage: "Heading 3",
                                      }),
                                      orderedList: W.formatMessage({
                                        id: "codex.writingBlock.format.textStyle.numberedList",
                                        defaultMessage: "Numbered list",
                                      }),
                                      paragraph: W.formatMessage({
                                        id: "codex.writingBlock.format.textStyle.text",
                                        defaultMessage: "Text",
                                      }),
                                      unorderedList: W.formatMessage({
                                        id: "codex.writingBlock.format.textStyle.bulletedList",
                                        defaultMessage: "Bulleted list",
                                      }),
                                    },
                                    renderMenu: (e) => {
                                      let { activeStyle: t, options: n } = e
                                      return (0, i.jsx)(y.Ab, {
                                        align: "start",
                                        contentWidth: "menuBounded",
                                        onOpenChange: (e) => {
                                          Y(e ? { from: ei, to: ea } : null)
                                        },
                                        triggerButton: (0, i.jsxs)(ez.$, {
                                          "aria-label": W.formatMessage({
                                            id: "codex.writingBlock.format.textStyles",
                                            defaultMessage: "Text styles",
                                          }),
                                          color: "ghostActive",
                                          size: "formatToolbar",
                                          onMouseDown: eH,
                                          children: [n.find((e) => e.style === t)?.label, (0, i.jsx)(S.IIN, {})],
                                        }),
                                        children: n.map((e) => {
                                          let { isActive: t, label: n, onSelect: a, style: r } = e
                                          return (0, i.jsx)(
                                            y.ms.Item,
                                            {
                                              "aria-checked": t,
                                              rightIconAsset: t ? Z.G : void 0,
                                              role: "menuitemradio",
                                              onSelect: () => {
                                                ;(I.dispatch(
                                                  I.state.tr.setSelection(eP.U3.create(I.state.doc, ei, ea)),
                                                ),
                                                  a())
                                              },
                                              children: n,
                                            },
                                            r,
                                          )
                                        }),
                                      })
                                    },
                                  }),
                                  $,
                                ],
                              }),
                            }),
                          ],
                        }),
                    ],
                  })),
            (L[54] = en),
            (L[55] = ef),
            (L[56] = eg),
            (L[57] = V),
            (L[58] = I),
            (L[59] = ei),
            (L[60] = W),
            (L[61] = F),
            (L[62] = ew),
            (L[63] = K),
            (L[64] = T),
            (L[65] = O),
            (L[66] = P),
            (L[67] = U),
            (L[68] = ex),
            (L[69] = et?.ranges),
            (L[70] = C),
            (L[71] = ea),
            (L[72] = $),
            (L[73] = H),
            (L[74] = _))
          : (_ = L[74]),
        L[75] !== j || L[76] !== _
          ? ((E = (0, i.jsx)("div", { style: j, children: _ })), (L[75] = j), (L[76] = _), (L[77] = E))
          : (E = L[77]),
        L[78] !== ed || L[79] !== ep || L[80] !== M || L[81] !== E
          ? ((A = (0, i.jsx)("div", { ref: ep, className: "z-50", style: ed, onBlur: M, children: E })),
            (L[78] = ed),
            (L[79] = ep),
            (L[80] = M),
            (L[81] = E),
            (L[82] = A))
          : (A = L[82]),
        L[83] !== I.dom.ownerDocument.body || L[84] !== A
          ? ((N = (0, ec.createPortal)(A, I.dom.ownerDocument.body)),
            (L[83] = I.dom.ownerDocument.body),
            (L[84] = A),
            (L[85] = N))
          : (N = L[85]),
        N
      )
    }
    function eH(e) {
      return e.preventDefault()
    }
    function eZ(e) {
      let { action: t, isActive: n, label: a, onClick: r } = e
      return (0, i.jsxs)(ez.$, {
        "aria-label": a,
        "aria-pressed": n,
        color: n ? "accentSubtle" : "ghostActive",
        size: "formatToolbarIcon",
        onClick: r,
        children: [
          "link" === t && (0, i.jsx)(S.ibM, {}),
          "bold" === t && (0, i.jsx)(j.I, { asset: eO }),
          "italic" === t && (0, i.jsx)(S.rDm, {}),
        ],
      })
    }
    var eJ = n("jAmA"),
      eQ = n("hMk6")
    function eY(e) {
      let t,
        n,
        r,
        l,
        s,
        c,
        d,
        u,
        m,
        p,
        g,
        b,
        h,
        v,
        x,
        w = (0, a.c)(70),
        {
          dispatch: y,
          labels: k,
          state: C,
          classNames: M,
          disabledOptionIds: j,
          floatingRef: S,
          style: _,
          unstyled: E,
        } = e,
        A = void 0 !== E && E,
        N = (0, o.useRef)(null)
      w[0] !== C ? ((t = (0, eJ.D5)(C)), (w[0] = C), (w[1] = t)) : (t = w[1])
      let L = t
      ;(C?.visibleOptionIds,
        w[2] !== C?.visibleOptionIds
          ? ((n = C?.visibleOptionIds ?? []), (w[2] = C?.visibleOptionIds), (w[3] = n))
          : (n = w[3]))
      let B = n,
        I = C?.highlightedOptionId ?? null
      w[4] !== j ? ((r = new Set(j)), (w[4] = j), (w[5] = r)) : (r = w[5])
      let D = r
      w[6] === Symbol.for("react.memo_cache_sentinel") ? ((l = new Map((0, eQ.Lc)().map(e0))), (w[6] = l)) : (l = w[6])
      let R = l
      w[7] !== I ? ((s = null == I ? null : R.get(I)), (w[7] = I), (w[8] = s)) : (s = w[8])
      let T = s
      w[9] !== D || w[10] !== T?.disabled || w[11] !== I || w[12] !== B
        ? ((c =
            null == I || T?.disabled === !0 || D.has(I)
              ? (B.find((e) => {
                  let t = R.get(e)
                  return t?.disabled !== !0 && !D.has(e)
                }) ?? null)
              : I),
          (w[9] = D),
          (w[10] = T?.disabled),
          (w[11] = I),
          (w[12] = B),
          (w[13] = c))
        : (c = w[13])
      let O = c
      if (w[14] !== B) {
        let e
        ;(w[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (e) => {
              let t = R.get(e)
              return null == t ? [] : [t]
            }),
            (w[16] = e))
          : (e = w[16]),
          (d = B.flatMap(e)),
          (w[14] = B),
          (w[15] = d))
      } else d = w[15]
      let P = d
      w[17] !== y
        ? ((u = () => {
            y({ type: "close" })
          }),
          (w[17] = y),
          (w[18] = u))
        : (u = w[18])
      let U = u
      w[19] !== y
        ? ((m = (e) => {
            y({ type: "highlight", commandId: e })
          }),
          (w[19] = y),
          (w[20] = m))
        : (m = w[20])
      let z = m
      w[21] !== y
        ? ((p = (e) => {
            y({ type: "execute", commandId: e })
          }),
          (w[21] = y),
          (w[22] = p))
        : (p = w[22])
      let $ = p
      if (
        (w[23] !== U || w[24] !== L || w[25] !== P.length
          ? ((g = () => {
              L && 0 === P.length && U()
            }),
            (b = [U, L, P.length]),
            (w[23] = U),
            (w[24] = L),
            (w[25] = P.length),
            (w[26] = g),
            (w[27] = b))
          : ((g = w[26]), (b = w[27])),
        (0, o.useEffect)(g, b),
        w[28] !== U ||
        w[29] !== D ||
        w[30] !== y ||
        w[31] !== $ ||
        w[32] !== z ||
        w[33] !== O ||
        w[34] !== L ||
        w[35] !== B
          ? ((h = () => {
              if (!L) return
              let e = N.current?.ownerDocument,
                t = e?.defaultView,
                n = t?.Node
              if (null == e || null == t || null == n) return
              let i = (e) => {
                  if (e.isComposing || 229 === e.keyCode) return
                  if ("Escape" === e.key) {
                    ;(e.preventDefault(), e.stopPropagation(), U())
                    return
                  }
                  if ("ArrowUp" === e.key || "ArrowDown" === e.key) {
                    ;(e.preventDefault(), e.stopPropagation())
                    let t = N.current
                    if (null != t && e.target instanceof n && t.contains(e.target)) {
                      let n = Array.from(t.querySelectorAll('button[role="menuitem"]:not(:disabled)')),
                        i = n.findIndex((t) => t.contains(e.target))
                      if (n.length > 0) {
                        let t = "ArrowUp" === e.key ? -1 : 1,
                          a = i >= 0 ? (i + t + n.length) % n.length : "ArrowUp" === e.key ? n.length - 1 : 0
                        n[a]?.focus()
                        return
                      }
                    }
                    let i = B.filter((e) => {
                      let t = R.get(e)
                      return t?.disabled !== !0 && !D.has(e)
                    })
                    if (i.length !== B.length) {
                      if (0 === i.length) return
                      let t = null == O ? -1 : i.indexOf(O),
                        n = "ArrowUp" === e.key ? -1 : 1,
                        a = t >= 0 ? (t + n + i.length) % i.length : "ArrowUp" === e.key ? i.length - 1 : 0
                      z(i[a])
                      return
                    }
                    y({ type: "navigate", direction: "ArrowUp" === e.key ? "previous" : "next" })
                    return
                  }
                  if ("Enter" !== e.key) return
                  let t = N.current
                  ;(null != t && e.target instanceof n && t.contains(e.target)) ||
                    (e.preventDefault(), e.stopPropagation(), null != O && $(O))
                },
                a = (e) => {
                  let t = N.current
                  null != t && e.target instanceof n && (t.contains(e.target) || U())
                },
                r = (e) => {
                  let t = N.current
                  ;(null != t && e.target instanceof n && t.contains(e.target)) || U()
                }
              return (
                e.addEventListener("keydown", i, !0),
                e.addEventListener("pointerdown", a, !0),
                e.addEventListener("focusin", r, !0),
                t.addEventListener("blur", U),
                () => {
                  ;(e.removeEventListener("keydown", i, !0),
                    e.removeEventListener("pointerdown", a, !0),
                    e.removeEventListener("focusin", r, !0),
                    t.removeEventListener("blur", U))
                }
              )
            }),
            (v = [U, D, y, $, z, O, L, R, B]),
            (w[28] = U),
            (w[29] = D),
            (w[30] = y),
            (w[31] = $),
            (w[32] = z),
            (w[33] = O),
            (w[34] = L),
            (w[35] = B),
            (w[36] = h),
            (w[37] = v))
          : ((h = w[36]), (v = w[37])),
        (0, o.useEffect)(h, v),
        !L)
      )
        return null
      if (
        w[38] !== M?.disabledItem ||
        w[39] !== M?.highlightedItem ||
        w[40] !== M?.item ||
        w[41] !== M?.menu ||
        w[42] !== M?.separator ||
        w[43] !== D ||
        w[44] !== $ ||
        w[45] !== S ||
        w[46] !== z ||
        w[47] !== O ||
        w[48] !== k ||
        w[49] !== _ ||
        w[50] !== A ||
        w[51] !== P
      ) {
        let e,
          t,
          n,
          a,
          r = P.find(e1) ?? null,
          o = P.filter(eX)
        w[53] !== M?.disabledItem ||
        w[54] !== M?.highlightedItem ||
        w[55] !== M?.item ||
        w[56] !== D ||
        w[57] !== $ ||
        w[58] !== z ||
        w[59] !== O ||
        w[60] !== k ||
        w[61] !== A
          ? ((e = (e) => {
              let t = e.disabled || D.has(e.id),
                n = e.id === O,
                a = () => {
                  t || (z(e.id), $(e.id))
                }
              return (0, i.jsx)(
                "button",
                {
                  "aria-disabled": t ? "true" : void 0,
                  className: (0, f.A)(
                    !A &&
                      "rounded-[calc(var(--oai-wb-spacing)*2.5)] border-0 px-[calc(var(--oai-wb-spacing)*2.5)] py-[calc(var(--oai-wb-spacing)*1.5)] text-start [color:inherit] [font-family:inherit] [font-stretch:inherit] [font-style:inherit] [font-variant:inherit] [line-height:inherit] [font-size:var(--oai-wb-font-size)] focus-visible:[background:var(--oai-wb-surface-secondary)] focus-visible:[outline:none]",
                    !A &&
                      (n ? "[background:var(--oai-wb-surface-secondary)] [outline:none]" : "[background:transparent]"),
                    !A && !t && "hover:[background:var(--oai-wb-surface-secondary)] hover:[outline:none]",
                    !A && t && "cursor-not-allowed opacity-50",
                    M?.item,
                    t ? M?.disabledItem : void 0,
                    n ? M?.highlightedItem : void 0,
                  ),
                  "data-highlighted": n ? "true" : void 0,
                  disabled: t,
                  onClick: a,
                  onFocus: () => z(e.id),
                  onMouseEnter: () => z(e.id),
                  onPointerDown: (e) => {
                    ;(e.preventDefault(), e.stopPropagation(), a())
                  },
                  role: "menuitem",
                  type: "button",
                  children: k[e.id],
                },
                e.id,
              )
            }),
            (w[53] = M?.disabledItem),
            (w[54] = M?.highlightedItem),
            (w[55] = M?.item),
            (w[56] = D),
            (w[57] = $),
            (w[58] = z),
            (w[59] = O),
            (w[60] = k),
            (w[61] = A),
            (w[62] = e))
          : (e = w[62])
        let l = e,
          s = k.menu,
          c =
            !A &&
            "absolute z-[var(--wb-menu-z-index,70)] flex w-max min-w-[10rem] flex-col gap-[var(--oai-wb-spacing)] rounded-[calc(var(--oai-wb-spacing)*4)] p-[calc(var(--oai-wb-spacing)*1.5)] [background:var(--oai-wb-surface-primary)] [border:1px_solid_var(--oai-wb-divider)] [color:var(--oai-wb-text-primary)] [box-shadow:var(--oai-wb-shadow-lg)]",
          d = M?.menu
        ;(w[63] !== c || w[64] !== d ? ((t = (0, f.A)(c, d)), (w[63] = c), (w[64] = d), (w[65] = t)) : (t = w[65]),
          w[66] !== S
            ? ((n = (e) => {
                ;((N.current = e), S?.(e))
              }),
              (w[66] = S),
              (w[67] = n))
            : (n = w[67]),
          w[68] !== _ ? ((a = { ...Y.w, ..._ }), (w[68] = _), (w[69] = a)) : (a = w[69]),
          (x = (0, i.jsxs)("div", {
            "aria-label": s,
            className: t,
            ref: n,
            role: "menu",
            style: a,
            tabIndex: -1,
            children: [
              null == r ? null : l(r),
              null != r && o.length > 0
                ? (0, i.jsx)("div", {
                    "aria-hidden": !0,
                    className: (0, f.A)(!A && "w-full [border-top:1px_solid_var(--oai-wb-divider)]", M?.separator),
                    role: "separator",
                  })
                : null,
              o.map(l),
            ],
          })),
          (w[38] = M?.disabledItem),
          (w[39] = M?.highlightedItem),
          (w[40] = M?.item),
          (w[41] = M?.menu),
          (w[42] = M?.separator),
          (w[43] = D),
          (w[44] = $),
          (w[45] = S),
          (w[46] = z),
          (w[47] = O),
          (w[48] = k),
          (w[49] = _),
          (w[50] = A),
          (w[51] = P),
          (w[52] = x))
      } else x = w[52]
      return x
    }
    function eX(e) {
      return "generate" !== e.id
    }
    function e1(e) {
      return "generate" === e.id
    }
    function e0(e) {
      return [e.id, e]
    }
    var e2 = n("Lhpx")
    function e3(e) {
      let t,
        n,
        r,
        o,
        l,
        s,
        c,
        d,
        u,
        m,
        p,
        f,
        g,
        b,
        v,
        x,
        w,
        y,
        k,
        C,
        M,
        j,
        S,
        _,
        E,
        A,
        N = (0, a.c)(74),
        { editorView: L, state: B, onExecute: I } = e,
        D = (0, h.A)(),
        R = (0, eB.dz)(),
        T = B?.anchorPos,
        O = !L.isDestroyed && B?.anchorPos != null && null != B.triggerPos,
        P = L.dom.ownerDocument
      N[0] !== T || N[1] !== L
        ? ((t = {
            contextElement: L.dom,
            getBoundingClientRect() {
              if (null != T && !L.isDestroyed)
                try {
                  let { bottom: e, left: t } = L.coordsAtPos(T)
                  return e4(t, e)
                } catch {}
              let e = L.dom.getBoundingClientRect()
              return e4(e.left, e.bottom)
            },
          }),
          (N[0] = T),
          (N[1] = L),
          (N[2] = t))
        : (t = N[2])
      let U = t
      ;(N[3] !== U ? ((n = { reference: U }), (N[3] = U), (N[4] = n)) : (n = N[4]),
        N[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = [(0, eN.cY)(8), (0, eN.UU)({ padding: 8 }), (0, eN.BN)({ padding: 8 })]), (N[5] = r))
          : (r = N[5]),
        N[6] !== O || N[7] !== n
          ? ((o = { elements: n, middleware: r, open: O, placement: "bottom-start", whileElementsMounted: es.ll }),
            (N[6] = O),
            (N[7] = n),
            (N[8] = o))
          : (o = N[8]))
      let { floatingStyles: z, refs: $ } = (0, eN.we)(o),
        { setFloating: V } = $
      if (!O) return null
      ;(N[9] !== D
        ? ((l = D.formatMessage({
            id: "codex.writingBlock.slashMenu.option.checklist.label",
            defaultMessage: "Checklist",
          })),
          (N[9] = D),
          (N[10] = l))
        : (l = N[10]),
        N[11] !== D
          ? ((s = D.formatMessage({
              id: "codex.writingBlock.slashMenu.option.columnDelete.label",
              defaultMessage: "Delete column",
            })),
            (N[11] = D),
            (N[12] = s))
          : (s = N[12]),
        N[13] !== D
          ? ((c = D.formatMessage({
              id: "codex.writingBlock.slashMenu.option.columnLeft.label",
              defaultMessage: "Add column left",
            })),
            (N[13] = D),
            (N[14] = c))
          : (c = N[14]),
        N[15] !== D
          ? ((d = D.formatMessage({
              id: "codex.writingBlock.slashMenu.option.columnRight.label",
              defaultMessage: "Add column right",
            })),
            (N[15] = D),
            (N[16] = d))
          : (d = N[16]),
        N[17] !== D
          ? ((u = D.formatMessage({
              id: "codex.writingBlock.slashMenu.option.divider.label",
              defaultMessage: "Divider",
            })),
            (N[17] = D),
            (N[18] = u))
          : (u = N[18]),
        N[19] !== D
          ? ((m = D.formatMessage({ id: "codex.writingBlock.slashMenu.option.emoji.label", defaultMessage: "Emoji" })),
            (N[19] = D),
            (N[20] = m))
          : (m = N[20]),
        N[21] !== D
          ? ((p = D.formatMessage({
              id: "codex.writingBlock.slashMenu.option.generate.label",
              defaultMessage: "Generate text",
            })),
            (N[21] = D),
            (N[22] = p))
          : (p = N[22]),
        N[23] !== D
          ? ((f = D.formatMessage({
              id: "codex.writingBlock.slashMenu.option.heading1.label",
              defaultMessage: "Heading 1",
            })),
            (N[23] = D),
            (N[24] = f))
          : (f = N[24]),
        N[25] !== D
          ? ((g = D.formatMessage({
              id: "codex.writingBlock.slashMenu.option.heading2.label",
              defaultMessage: "Heading 2",
            })),
            (N[25] = D),
            (N[26] = g))
          : (g = N[26]),
        N[27] !== D
          ? ((b = D.formatMessage({
              id: "codex.writingBlock.slashMenu.option.heading3.label",
              defaultMessage: "Heading 3",
            })),
            (N[27] = D),
            (N[28] = b))
          : (b = N[28]),
        N[29] !== D
          ? ((v = D.formatMessage({
              id: "codex.writingBlock.slashMenu.menu.ariaLabel",
              defaultMessage: "Insert options",
            })),
            (N[29] = D),
            (N[30] = v))
          : (v = N[30]),
        N[31] !== D
          ? ((x = D.formatMessage({
              id: "codex.writingBlock.slashMenu.option.orderedList.label",
              defaultMessage: "Numbered list",
            })),
            (N[31] = D),
            (N[32] = x))
          : (x = N[32]),
        N[33] !== D
          ? ((w = D.formatMessage({
              id: "codex.writingBlock.slashMenu.option.paragraph.label",
              defaultMessage: "Text",
            })),
            (N[33] = D),
            (N[34] = w))
          : (w = N[34]),
        N[35] !== D
          ? ((y = D.formatMessage({ id: "codex.writingBlock.slashMenu.option.table.label", defaultMessage: "Table" })),
            (N[35] = D),
            (N[36] = y))
          : (y = N[36]),
        N[37] !== D
          ? ((k = D.formatMessage({
              id: "codex.writingBlock.slashMenu.option.unorderedList.label",
              defaultMessage: "Bulleted list",
            })),
            (N[37] = D),
            (N[38] = k))
          : (k = N[38]),
        N[39] !== u ||
        N[40] !== m ||
        N[41] !== p ||
        N[42] !== f ||
        N[43] !== g ||
        N[44] !== b ||
        N[45] !== v ||
        N[46] !== x ||
        N[47] !== w ||
        N[48] !== y ||
        N[49] !== k ||
        N[50] !== l ||
        N[51] !== s ||
        N[52] !== c ||
        N[53] !== d
          ? ((C = {
              checklist: l,
              columnDelete: s,
              columnLeft: c,
              columnRight: d,
              divider: u,
              emoji: m,
              generate: p,
              heading1: f,
              heading2: g,
              heading3: b,
              menu: v,
              orderedList: x,
              paragraph: w,
              table: y,
              unorderedList: k,
            }),
            (N[39] = u),
            (N[40] = m),
            (N[41] = p),
            (N[42] = f),
            (N[43] = g),
            (N[44] = b),
            (N[45] = v),
            (N[46] = x),
            (N[47] = w),
            (N[48] = y),
            (N[49] = k),
            (N[50] = l),
            (N[51] = s),
            (N[52] = c),
            (N[53] = d),
            (N[54] = C))
          : (C = N[54]))
      let F = C
      N[55] !== L || N[56] !== I || N[57] !== B
        ? ((M = (e) => {
            "execute" === e.type ? I(e.commandId, B.query) : L.dispatch(L.state.tr.setMeta(eJ.FY, e))
          }),
          (N[55] = L),
          (N[56] = I),
          (N[57] = B),
          (N[58] = M))
        : (M = N[58])
      let W = M
      N[59] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = {
            disabledItem: "cursor-default opacity-50",
            item: "no-drag cursor-interaction rounded-lg border-0 bg-transparent px-[var(--padding-row-x)] py-[var(--padding-row-y)] text-start text-sm text-default outline-hidden data-[highlighted]:bg-secondary-ghost-hover",
            menu: `z-50 m-px flex w-fit min-w-40 flex-col overflow-y-auto px-1 py-1 select-none ${(0, e2.MX)("menu")}`,
            separator: "mx-[var(--padding-row-x)] my-1 h-px bg-border",
          }),
          (N[59] = j))
        : (j = N[59])
      let G = 1 !== R ? R : void 0
      return (
        N[60] !== G ? ((S = { position: "static", zoom: G }), (N[60] = G), (N[61] = S)) : (S = N[61]),
        N[62] !== W || N[63] !== F || N[64] !== B || N[65] !== S
          ? ((_ = (0, i.jsx)(eY, { classNames: j, dispatch: W, labels: F, state: B, style: S, unstyled: !0 })),
            (N[62] = W),
            (N[63] = F),
            (N[64] = B),
            (N[65] = S),
            (N[66] = _))
          : (_ = N[66]),
        N[67] !== z || N[68] !== V || N[69] !== _
          ? ((E = (0, i.jsx)("div", { ref: V, className: "z-50", style: z, children: _ })),
            (N[67] = z),
            (N[68] = V),
            (N[69] = _),
            (N[70] = E))
          : (E = N[70]),
        N[71] !== P.body || N[72] !== E
          ? ((A = (0, ec.createPortal)(E, P.body)), (N[71] = P.body), (N[72] = E), (N[73] = A))
          : (A = N[73]),
        A
      )
    }
    function e4(e, t) {
      return { bottom: t, height: 0, left: e, right: e, top: t, width: 0, x: e, y: t, toJSON: () => ({}) }
    }
    var e5 = n("UAmo"),
      e7 = n("GTmQ")
    function e6(e) {
      let t,
        n,
        r,
        o = (0, a.c)(17),
        { controls: l, labels: s, renderButton: c } = e
      if (!l.hasSessionEdits || !0 === l.hasActivePreview) return null
      let d = !0 === l.isInteractionDisabled || !l.canUndo
      return (
        o[0] !== l.onUndo || o[1] !== s.undoButton || o[2] !== s.undoTooltip || o[3] !== c || o[4] !== d
          ? ((t = c({
              action: "undo",
              disabled: d,
              label: s.undoButton,
              onClick: l.onUndo,
              onMouseDown: e8,
              tooltip: s.undoTooltip,
            })),
            (o[0] = l.onUndo),
            (o[1] = s.undoButton),
            (o[2] = s.undoTooltip),
            (o[3] = c),
            (o[4] = d),
            (o[5] = t))
          : (t = o[5]),
        o[6] !== l.canRedo ||
        o[7] !== l.isInteractionDisabled ||
        o[8] !== l.onRedo ||
        o[9] !== l.showRedoButton ||
        o[10] !== s.redoButton ||
        o[11] !== s.redoTooltip ||
        o[12] !== c
          ? ((n = l.showRedoButton
              ? c({
                  action: "redo",
                  disabled: !0 === l.isInteractionDisabled || !l.canRedo,
                  label: s.redoButton,
                  onClick: l.onRedo,
                  onMouseDown: e8,
                  tooltip: s.redoTooltip,
                })
              : null),
            (o[6] = l.canRedo),
            (o[7] = l.isInteractionDisabled),
            (o[8] = l.onRedo),
            (o[9] = l.showRedoButton),
            (o[10] = s.redoButton),
            (o[11] = s.redoTooltip),
            (o[12] = c),
            (o[13] = n))
          : (n = o[13]),
        o[14] !== t || o[15] !== n
          ? ((r = (0, i.jsxs)(i.Fragment, { children: [t, n] })), (o[14] = t), (o[15] = n), (o[16] = r))
          : (r = o[16]),
        r
      )
    }
    function e8(e) {
      e.preventDefault()
    }
    function e9(e) {
      let t,
        n,
        r,
        l,
        s,
        c,
        d,
        u,
        m,
        p,
        f,
        g = (0, a.c)(41),
        { editorView: b, historySummary: v, isEditable: x, isInteractionDisabled: w, presentation: y } = e,
        k = (0, h.A)(),
        [C, M] = (0, o.useState)(null)
      g[0] !== k
        ? ((t = k.formatMessage({ id: "codex.writingBlock.history.undo.button.tooltip", defaultMessage: "Undo" })),
          (g[0] = k),
          (g[1] = t))
        : (t = g[1])
      let j = t
      g[2] !== k
        ? ((n = k.formatMessage({
            id: "codex.writingBlock.history.undo.button.ariaLabel",
            defaultMessage: "Undo last edit",
          })),
          (g[2] = k),
          (g[3] = n))
        : (n = g[3])
      let S = n
      g[4] !== k
        ? ((r = k.formatMessage({ id: "codex.writingBlock.history.redo.button.tooltip", defaultMessage: "Redo" })),
          (g[4] = k),
          (g[5] = r))
        : (r = g[5])
      let _ = r
      g[6] !== k
        ? ((l = k.formatMessage({
            id: "codex.writingBlock.history.redo.button.ariaLabel",
            defaultMessage: "Redo last edit",
          })),
          (g[6] = k),
          (g[7] = l))
        : (l = g[7])
      let E = l
      g[8] !== b || g[9] !== x || g[10] !== w
        ? ((s = () => {
            x && !w && null != b && !b.isDestroyed && (0, e7.zT)(b.state, b.dispatch, b) && M(b)
          }),
          (g[8] = b),
          (g[9] = x),
          (g[10] = w),
          (g[11] = s))
        : (s = g[11])
      let A = s
      g[12] !== b || g[13] !== x || g[14] !== w
        ? ((c = () => {
            !x || w || null == b || b.isDestroyed || (0, e7.ZF)(b.state, b.dispatch, b)
          }),
          (g[12] = b),
          (g[13] = x),
          (g[14] = w),
          (g[15] = c))
        : (c = g[15])
      let N = c
      if ("viewer" === (void 0 === y ? "inline" : y)) {
        let e,
          t = !x || w
        return (
          g[16] !== N || g[17] !== A || g[18] !== v.canRedo || g[19] !== v.canUndo || g[20] !== t
            ? ((e = (0, i.jsx)(O.vI, { canRedo: v.canRedo, canUndo: v.canUndo, disabled: t, onRedo: N, onUndo: A })),
              (g[16] = N),
              (g[17] = A),
              (g[18] = v.canRedo),
              (g[19] = v.canUndo),
              (g[20] = t),
              (g[21] = e))
            : (e = g[21]),
          e
        )
      }
      if (!v.canUndo && !v.canRedo) return null
      let L = v.canUndo || v.canRedo,
        B = !x || w,
        I = v.canRedo || (null != C && C === b)
      return (
        g[22] !== N ||
        g[23] !== A ||
        g[24] !== v.canRedo ||
        g[25] !== v.canUndo ||
        g[26] !== I ||
        g[27] !== L ||
        g[28] !== B
          ? ((d = {
              canRedo: v.canRedo,
              canUndo: v.canUndo,
              hasSessionEdits: L,
              isInteractionDisabled: B,
              onRedo: N,
              onUndo: A,
              showRedoButton: I,
            }),
            (g[22] = N),
            (g[23] = A),
            (g[24] = v.canRedo),
            (g[25] = v.canUndo),
            (g[26] = I),
            (g[27] = L),
            (g[28] = B),
            (g[29] = d))
          : (d = g[29]),
        g[30] !== E || g[31] !== _ || g[32] !== S || g[33] !== j
          ? ((u = { redoButton: E, redoTooltip: _, undoButton: S, undoTooltip: j }),
            (g[30] = E),
            (g[31] = _),
            (g[32] = S),
            (g[33] = j),
            (g[34] = u))
          : (u = g[34]),
        g[35] !== d || g[36] !== u
          ? ((m = (0, i.jsx)(e6, { controls: d, labels: u, renderButton: te })), (g[35] = d), (g[36] = u), (g[37] = m))
          : (m = g[37]),
        g[38] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, i.jsx)("div", { "aria-hidden": "true", className: "mx-1.5 h-3.5 w-px shrink-0 bg-border" })),
            (g[38] = p))
          : (p = g[38]),
        g[39] !== m
          ? ((f = (0, i.jsxs)("div", { className: "flex items-center", children: [m, p] })), (g[39] = m), (g[40] = f))
          : (f = g[40]),
        f
      )
    }
    function te(e) {
      let { action: t, disabled: n, label: a, onClick: r, onMouseDown: o, tooltip: s } = e
      return (0, i.jsx)(l.m, {
        sideOffset: 0,
        content: s,
        children: (0, i.jsx)(ez.$, {
          "aria-label": a,
          color: "ghostActive",
          disabled: n,
          onClick: r,
          onMouseDown: o,
          size: "imageToolbar",
          uniform: !0,
          children: (0, i.jsx)(j.I, {
            className: (0, f.A)("redo" === t && "-scale-x-100"),
            "aria-hidden": !1,
            asset: e5.T,
          }),
        }),
      })
    }
    var tt = n("JIxO"),
      tn = n("zPtR"),
      ti = n("ksPB")
    function ta({
      activeOptionId: e,
      ariaLabel: t,
      options: n,
      className: a,
      chevronIcon: r,
      disabled: l = !1,
      onOptionChange: s,
      placement: c = "body",
      renderMenu: d,
    }) {
      let u = (0, o.useRef)(null),
        m = (0, o.useId)(),
        p = (0, o.useRef)(null),
        g = (0, o.useRef)(!1),
        [b, h] = (0, o.useState)(!1),
        [v, x] = (0, o.useState)(!1),
        w = null != d,
        y = JSON.stringify(n.map((e) => e.id)),
        k = w && (b || v)
      if (
        ((0, o.useLayoutEffect)(() => {
          let e,
            t = u.current
          if (!w || null == t) return
          let n = () => {
            let n = t.scrollWidth > t.clientWidth
            n !== e &&
              ((e = n), (g.current = t.contains(document.activeElement) || p.current === document.activeElement), h(n))
          }
          if ((n(), "u" < typeof ResizeObserver)) return
          let i = new ResizeObserver(n)
          for (let e of (i.observe(t), t.children)) i.observe(e)
          return () => i.disconnect()
        }, [w, y]),
        (0, o.useLayoutEffect)(() => {
          if (!g.current) return
          g.current = !1
          let e = document.activeElement,
            t = requestAnimationFrame(() => {
              ;(document.activeElement === e || document.activeElement === document.body) &&
                (k ? p.current?.focus() : u.current?.querySelector('[aria-selected="true"]')?.focus())
            })
          return () => cancelAnimationFrame(t)
        }, [k]),
        0 === n.length)
      )
        return null
      let C = Math.max(
          0,
          n.findIndex((t) => t.id === e),
        ),
        M = n[C]
      return (0, i.jsxs)("div", {
        className: (0, f.A)(
          "relative min-w-0",
          "body" === c
            ? "px-[calc(var(--oai-wb-spacing)*4)] pt-[calc(var(--oai-wb-spacing)*2)] pb-0 [border-bottom:1px_solid_var(--oai-wb-divider)]"
            : "flex-[1_1_auto]",
          a,
        ),
        style: { ...Y.w },
        children: [
          (0, i.jsx)("div", {
            "aria-label": t,
            "aria-hidden": k || void 0,
            className: (0, f.A)(
              "mx-[calc(var(--oai-wb-spacing)*-1)] flex min-w-0 gap-[var(--oai-wb-spacing)] overflow-x-auto overflow-y-hidden px-[var(--oai-wb-spacing)]",
              k && "invisible",
              "body" === c
                ? "mt-[calc(var(--oai-wb-spacing)*-1)] pt-[var(--oai-wb-spacing)] pb-[calc(var(--oai-wb-spacing)*2)]"
                : "my-[calc(var(--oai-wb-spacing)*-1)] py-[var(--oai-wb-spacing)]",
            ),
            inert: k || void 0,
            ref: u,
            role: "tablist",
            children: n.map((t, n) => {
              var a
              let r,
                o = t.id === e,
                d = l || !0 === t.disabled,
                u = !0 === t.isGenerating
              return (0, i.jsx)(
                "button",
                {
                  "aria-selected": o,
                  className: (0, f.A)(
                    "flex-[0_1_auto] rounded-full border-0 px-[calc(var(--oai-wb-spacing)*3)] whitespace-nowrap [font-family:inherit] [font-stretch:inherit] [font-style:inherit] [font-variant:inherit] font-medium first:ms-auto focus-visible:[outline:2px_solid_var(--oai-wb-focus)] focus-visible:[outline-offset:1px]",
                    "body" === c
                      ? "block h-[calc(var(--oai-wb-spacing)*7)] py-[calc(var(--oai-wb-spacing)*1.5)] text-[0.75rem] [align-items:normal]"
                      : "flex h-[calc(var(--oai-wb-spacing)*9)] items-center py-0 [font-size:var(--oai-wb-font-size)]",
                    "header" === c && 0 === n && "ms-auto",
                    d && u
                      ? "cursor-not-allowed [background:var(--oai-wb-surface-primary)] [color:var(--oai-wb-text-tertiary)]"
                      : (0, f.A)(
                          d ? "cursor-not-allowed opacity-50" : "cursor-pointer",
                          o
                            ? "[background:var(--oai-wb-surface-secondary)] [color:var(--oai-wb-text-primary)]"
                            : (0, f.A)(
                                "[background:transparent] [color:var(--oai-wb-text-tertiary)]",
                                !d &&
                                  "hover:[background:var(--oai-wb-surface-secondary)] hover:[color:var(--oai-wb-text-primary)]",
                              ),
                        ),
                    t.className,
                  ),
                  "data-active": o ? "true" : void 0,
                  "data-generating": t.isGenerating ? "true" : void 0,
                  "data-loading": t.isLoading ? "true" : void 0,
                  disabled: d,
                  onClick: () => s(t.id),
                  role: "tab",
                  type: "button",
                  children: (0, i.jsxs)("span", {
                    className: (0, f.A)(
                      "inline-flex items-center gap-[var(--oai-wb-spacing)]",
                      u && "cursor-not-allowed",
                      t.labelClassName,
                    ),
                    "data-testid": "writing-block-option-tab-label",
                    children: [
                      (0, i.jsx)("span", {
                        className: "inline-flex items-center text-[1.2em] leading-none",
                        children: tr(n),
                      }),
                      " ",
                      "string" == typeof t.label
                        ? (r = Array.from((a = t.label))).length <= 24
                          ? a
                          : `${r.slice(0, 23).join("").trimEnd()}\u{2026}`
                        : t.label,
                    ],
                  }),
                },
                t.id,
              )
            }),
          }),
          k &&
            null != d &&
            (0, i.jsx)("div", {
              className: (0, f.A)(
                "absolute flex min-w-0 justify-end",
                "body" === c
                  ? "inset-x-[calc(var(--oai-wb-spacing)*4)] top-[calc(var(--oai-wb-spacing)*2)]"
                  : "inset-x-0 top-0",
              ),
              children: d({
                activeOptionId: e,
                disabled: l,
                options: n.map((e, t) => ({
                  ...e,
                  textValue: e.textValue ?? ("string" == typeof e.label ? e.label : void 0),
                  label: (0, i.jsxs)("span", {
                    className: "inline-flex max-w-full min-w-0 items-center gap-[var(--oai-wb-spacing)]",
                    style: Y.w,
                    children: [
                      (0, i.jsx)("span", {
                        className: "inline-flex shrink-0 items-center text-[1.2em] leading-none",
                        children: tr(t),
                      }),
                      " ",
                      (0, i.jsx)("span", { className: "min-w-0 wrap-anywhere", children: e.label }),
                    ],
                  }),
                })),
                onOptionChange: s,
                onOpenChange: (e) => {
                  if (!e && !b) {
                    let e = document.activeElement
                    g.current = e === p.current || e?.closest('[role="menu"]') != null
                  }
                  x(e)
                },
                trigger: (0, i.jsxs)("button", {
                  "aria-label": t,
                  "aria-describedby": m,
                  "aria-busy": M?.isLoading,
                  className: (0, f.A)(
                    "flex max-w-full items-center gap-[var(--oai-wb-spacing)] rounded-full border-0 px-[calc(var(--oai-wb-spacing)*3)] [background:var(--oai-wb-surface-secondary)] [color:var(--oai-wb-text-primary)] [font-family:inherit] font-medium focus-visible:[outline:2px_solid_var(--oai-wb-focus)] focus-visible:[outline-offset:1px]",
                    "body" === c
                      ? "h-[calc(var(--oai-wb-spacing)*7)] text-[0.75rem]"
                      : "h-[calc(var(--oai-wb-spacing)*9)] [font-size:var(--oai-wb-font-size)]",
                    l ? "cursor-not-allowed opacity-50" : "cursor-pointer",
                  ),
                  disabled: l,
                  "data-loading": M?.isLoading || void 0,
                  ref: p,
                  type: "button",
                  children: [
                    (0, i.jsxs)("span", {
                      className: (0, f.A)(
                        "inline-flex min-w-0 items-center gap-[var(--oai-wb-spacing)]",
                        M?.labelClassName,
                      ),
                      id: m,
                      children: [
                        (0, i.jsx)("span", {
                          className: "inline-flex shrink-0 items-center text-[1.2em] leading-none",
                          children: tr(C),
                        }),
                        " ",
                        (0, i.jsx)("span", { className: "truncate", children: M?.label }),
                      ],
                    }),
                    r,
                  ],
                }),
              }),
            }),
        ],
      })
    }
    function tr(e) {
      let t = e + 1
      return t > 20 ? `${t}.` : String.fromCodePoint(9312 + e)
    }
    let to = "__writing-block-original__"
    function tl(e) {
      let t,
        n,
        r,
        o,
        l,
        s,
        c,
        d = (0, a.c)(53),
        {
          actionOption: u,
          ariaLabel: m,
          className: p,
          chevronIcon: f,
          disabled: g,
          isLoadingOptions: b,
          loadingLabelClassName: h,
          loadingOptionLabel: v,
          onOptionClick: x,
          onSelectionChange: w,
          options: y,
          originalLabel: k,
          placement: C,
          primaryOptionLabel: M,
          selection: j,
          renderMenu: S,
        } = e,
        _ = void 0 !== g && g,
        E = void 0 !== b && b,
        A = void 0 === C ? "body" : C,
        N = M ?? y[0]?.label
      d[0] !== v || d[1] !== y || d[2] !== N
        ? ((t = null != v && (N === v || y.some((e) => e.label === v))), (d[0] = v), (d[1] = y), (d[2] = N), (d[3] = t))
        : (t = d[3])
      let L = t,
        B = E && null != v && !L
      if (!(y.length > 0 || B || null != u || null != N)) return null
      d[4] !== E || d[5] !== v || d[6] !== N
        ? ((n = td(N, v, E)), (d[4] = E), (d[5] = v), (d[6] = N), (d[7] = n))
        : (n = d[7])
      let I = n,
        D = N ?? k,
        R = I ? h : void 0
      if (
        (d[8] !== I || d[9] !== D || d[10] !== R
          ? ((r = { id: to, isLoading: I, label: D, labelClassName: R }),
            (d[8] = I),
            (d[9] = D),
            (d[10] = R),
            (d[11] = r))
          : (r = d[11]),
        d[12] !== u || d[13] !== E || d[14] !== h || d[15] !== v || d[16] !== y || d[17] !== B || d[18] !== r)
      ) {
        let e
        if (
          (d[20] !== E || d[21] !== h || d[22] !== v
            ? ((e = (e, t) => {
                let n = td(e.label, v, E)
                return { id: ts(e.id, t + 1), isLoading: n, label: e.label, labelClassName: n ? h : void 0 }
              }),
              (d[20] = E),
              (d[21] = h),
              (d[22] = v),
              (d[23] = e))
            : (e = d[23]),
          (o = [r, ...y.slice(1).map(e)]),
          B)
        ) {
          let e
          ;(d[24] !== h || d[25] !== v
            ? ((e = {
                disabled: !0,
                id: "__writing-block-generating__",
                isGenerating: !0,
                isLoading: !0,
                label: v,
                labelClassName: h,
              }),
              (d[24] = h),
              (d[25] = v),
              (d[26] = e))
            : (e = d[26]),
            o.push(e))
        }
        if (null != u) {
          let e,
            t,
            n = u.isLoading
          d[27] !== u.id ? ((e = tc(u.id)), (d[27] = u.id), (d[28] = e)) : (e = d[28])
          let i = u.isLoading ? h : void 0
          ;(d[29] !== u.isLoading || d[30] !== u.label || d[31] !== e || d[32] !== i
            ? ((t = {
                disabled: n,
                id: e,
                isGenerating: u.isLoading,
                isLoading: u.isLoading,
                label: u.label,
                labelClassName: i,
              }),
              (d[29] = u.isLoading),
              (d[30] = u.label),
              (d[31] = e),
              (d[32] = i),
              (d[33] = t))
            : (t = d[33]),
            o.push(t))
        }
        ;((d[12] = u), (d[13] = E), (d[14] = h), (d[15] = v), (d[16] = y), (d[17] = B), (d[18] = r), (d[19] = o))
      } else o = d[19]
      d[34] !== u || d[35] !== j
        ? ((l = u?.isActive === !0 ? tc(u.id) : j.isOriginal ? to : ts(j.id, j.index)),
          (d[34] = u),
          (d[35] = j),
          (d[36] = l))
        : (l = d[36])
      let T = l
      return (
        d[37] !== u || d[38] !== x || d[39] !== w || d[40] !== y || d[41] !== N
          ? ((s = (e) => {
              if (null != u && e === tc(u.id)) return void u.onAction()
              if (e === to) {
                let e = { isOriginal: !0 }
                ;(null != N && x?.({ index: 0, label: N, selection: e }), w(e))
                return
              }
              let t = y.findIndex((t, n) => ts(t.id, n) === e),
                n = y[t]
              if (null == n || t < 1) return
              let i = { id: n.id, index: t, isOriginal: !1 }
              ;(x?.({ index: t, label: n.label, selection: i }), w(i))
            }),
            (d[37] = u),
            (d[38] = x),
            (d[39] = w),
            (d[40] = y),
            (d[41] = N),
            (d[42] = s))
          : (s = d[42]),
        d[43] !== T ||
        d[44] !== m ||
        d[45] !== f ||
        d[46] !== p ||
        d[47] !== _ ||
        d[48] !== A ||
        d[49] !== S ||
        d[50] !== s ||
        d[51] !== o
          ? ((c = (0, i.jsx)(ta, {
              activeOptionId: T,
              ariaLabel: m,
              className: p,
              chevronIcon: f,
              disabled: _,
              onOptionChange: s,
              options: o,
              placement: A,
              renderMenu: S,
            })),
            (d[43] = T),
            (d[44] = m),
            (d[45] = f),
            (d[46] = p),
            (d[47] = _),
            (d[48] = A),
            (d[49] = S),
            (d[50] = s),
            (d[51] = o),
            (d[52] = c))
          : (c = d[52]),
        c
      )
    }
    function ts(e, t) {
      return `${e}:${t}`
    }
    function tc(e) {
      return `__writing-block-action__:${e}`
    }
    function td(e, t, n) {
      return n && null != e && null != t && t === e
    }
    var tu = n("yC2B"),
      tm = n("yGJW")
    function tp(e) {
      let t,
        n,
        r,
        o,
        l,
        s,
        c,
        d,
        m,
        p,
        b,
        v,
        x,
        w,
        k,
        C,
        M,
        j,
        _,
        E = (0, a.c)(78),
        {
          activeSectionId: A,
          isWriteLikeMeSubmitting: N,
          libraryFileId: L,
          metadata: B,
          onSelect: I,
          onWriteLikeMeAction: D,
          sections: T,
          content: O,
          variant: P,
        } = e,
        U = void 0 !== N && N,
        z = (0, g.gh)(R.u),
        $ = (0, h.A)()
      if (
        E[0] !== A ||
        E[1] !== O ||
        E[2] !== $ ||
        E[3] !== U ||
        E[4] !== L ||
        E[5] !== B ||
        E[6] !== I ||
        E[7] !== D ||
        E[8] !== z ||
        E[9] !== T ||
        E[10] !== P
      ) {
        d = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            a,
            f,
            g,
            h,
            y,
            M = (0, u.I$)(B)
          ;(E[27] !== B || E[28] !== P ? ((e = K(B, P)), (E[27] = B), (E[28] = P), (E[29] = e)) : (e = E[29]),
            (n = e),
            (o = $.formatMessage({ id: "codex.writingBlock.toneVariants.original", defaultMessage: "Original" })))
          let j = M.findIndex(u.Vz),
            _ = M[j],
            N = B?.[u.uV] === !0
          E[30] !== $
            ? ((a = $.formatMessage({
                id: "codex.writingBlock.toneVariants.writeLikeMe",
                defaultMessage: "Write Like Me",
              })),
              (E[30] = $),
              (E[31] = a))
            : (a = E[31])
          let R = a
          r = T?.flatMap((e) =>
            e.id === u.LL ? [{ ...e, tone: o }] : N || !(0, u.Vz)({ id: e.id, label: e.tone }) ? [e] : [],
          )
          let V = r?.findIndex((e) => e.id === A) ?? -1
          ;((l = V > 0 ? { id: A, index: V, isOriginal: !1 } : { isOriginal: !0 }),
            E[32] !== B ? ((f = (0, u.ie)(B)), (E[32] = B), (E[33] = f)) : (f = E[33]))
          let F = f
          E[34] !== F || E[35] !== B
            ? ((g = (0, u.UI)(B)), (h = F && (0, u.AL)(g)), (E[34] = F), (E[35] = B), (E[36] = g), (E[37] = h))
            : ((g = E[36]), (h = E[37]))
          let W = h
          E[38] !== M ||
          E[39] !== n ||
          E[40] !== O ||
          E[41] !== W ||
          E[42] !== N ||
          E[43] !== U ||
          E[44] !== D ||
          E[45] !== R ||
          E[46] !== _ ||
          E[47] !== j
            ? ((y =
                null != D && !N && (null != _ || W || n)
                  ? {
                      id: u.GK,
                      isActive: U,
                      isLoading: U || W,
                      label: R,
                      onAction: () => {
                        U ||
                          W ||
                          (null != _
                            ? D({ id: _.id, index: j })
                            : n &&
                              null != O &&
                              D(
                                { id: u.GK, index: 0 === M.length ? 1 : M.length },
                                0 === M.length ? { primaryOption: { id: u.LL, label: "Original", content: O } } : {},
                              ))
                      },
                    }
                  : void 0),
              (E[38] = M),
              (E[39] = n),
              (E[40] = O),
              (E[41] = W),
              (E[42] = N),
              (E[43] = U),
              (E[44] = D),
              (E[45] = R),
              (E[46] = _),
              (E[47] = j),
              (E[48] = y))
            : (y = E[48])
          let G = y
          if ((r?.length ?? 0) < 2 && null == G && !F) {
            d = null
            break e
          }
          ;((t = tl),
            (m = G),
            E[49] !== $
              ? ((p = $.formatMessage({
                  id: "codex.writingBlock.toneVariants.tabs.ariaLabel",
                  defaultMessage: "Writing style variants",
                })),
                (E[49] = $),
                (E[50] = p))
              : (p = E[50]),
            E[51] === Symbol.for("react.memo_cache_sentinel")
              ? ((b = (0, i.jsx)(S.Aq_, {})), (E[51] = b))
              : (b = E[51]),
            (v = "in-data-[conversation-print]:hidden"),
            (x = U),
            (w = F),
            (k = W ? void 0 : g),
            E[52] !== L || E[53] !== z
              ? ((C = (e) => {
                  let { index: t, label: n } = e,
                    i = z.get(tm.YV)
                  i.isChatgptBrowserReplacement &&
                    i.logProductEvent(ti.lq, { optionIndex: (0, tn.At)(t), optionLabel: n, libraryFileId: L })
                }),
                (E[52] = L),
                (E[53] = z),
                (E[54] = C))
              : (C = E[54]),
            (s = (e) => {
              let t = e.isOriginal ? r?.[0] : r?.[e.index]?.id === e.id ? r[e.index] : void 0
              null != t && I(t.id)
            }),
            (c = r?.map((e) => ({ id: e.id, label: (0, u.Vz)({ id: e.id, label: e.tone }) ? R : e.tone })) ?? []))
        }
        ;((E[0] = A),
          (E[1] = O),
          (E[2] = $),
          (E[3] = U),
          (E[4] = L),
          (E[5] = B),
          (E[6] = I),
          (E[7] = D),
          (E[8] = z),
          (E[9] = T),
          (E[10] = P),
          (E[11] = t),
          (E[12] = n),
          (E[13] = r),
          (E[14] = o),
          (E[15] = l),
          (E[16] = s),
          (E[17] = c),
          (E[18] = d),
          (E[19] = m),
          (E[20] = p),
          (E[21] = b),
          (E[22] = v),
          (E[23] = x),
          (E[24] = w),
          (E[25] = k),
          (E[26] = C))
      } else
        ((t = E[11]),
          (n = E[12]),
          (r = E[13]),
          (o = E[14]),
          (l = E[15]),
          (s = E[16]),
          (c = E[17]),
          (d = E[18]),
          (m = E[19]),
          (p = E[20]),
          (b = E[21]),
          (v = E[22]),
          (x = E[23]),
          (w = E[24]),
          (k = E[25]),
          (C = E[26]))
      if (d !== Symbol.for("react.early_return_sentinel")) return d
      let V = r?.[0]?.tone ?? o
      return (
        E[55] !== n || E[56] !== r?.[0]?.id || E[57] !== B || E[58] !== o
          ? ((M = r?.[0]?.id === u.LL ? o : ((0, u.d2)(B) ?? (n ? o : void 0))),
            (E[55] = n),
            (E[56] = r?.[0]?.id),
            (E[57] = B),
            (E[58] = o),
            (E[59] = M))
          : (M = E[59]),
        E[60] !== $.locale
          ? ((j = (e) => {
              let { activeOptionId: t, disabled: n, onOpenChange: a, onOptionChange: r, options: o, trigger: l } = e
              return (0, i.jsx)(y.Ab, {
                align: "end",
                contentWidth: "menuBounded",
                dir: (0, tu.b)($.locale),
                disabled: n,
                onOpenChange: a,
                triggerButton: l,
                children: (0, i.jsx)(y.ms.RadioGroup, {
                  value: t,
                  children: o.map((e) =>
                    (0, i.jsx)(
                      y.ms.RadioItem,
                      {
                        "aria-busy": e.isLoading,
                        "data-generating": e.isGenerating || void 0,
                        "data-loading": e.isLoading || void 0,
                        disabled: n || e.disabled,
                        onSelect: () => r(e.id),
                        textValue: e.textValue,
                        value: e.id,
                        children: (0, i.jsx)("span", {
                          className: (0, f.A)(e.labelClassName, e.isLoading && "loading-shimmer-pure-text"),
                          children: e.label,
                        }),
                      },
                      e.id,
                    ),
                  ),
                }),
              })
            }),
            (E[60] = $.locale),
            (E[61] = j))
          : (j = E[61]),
        E[62] !== t ||
        E[63] !== l ||
        E[64] !== s ||
        E[65] !== c ||
        E[66] !== V ||
        E[67] !== M ||
        E[68] !== j ||
        E[69] !== m ||
        E[70] !== p ||
        E[71] !== b ||
        E[72] !== v ||
        E[73] !== x ||
        E[74] !== w ||
        E[75] !== k ||
        E[76] !== C
          ? ((_ = (0, i.jsx)(t, {
              actionOption: m,
              ariaLabel: p,
              chevronIcon: b,
              className: v,
              disabled: x,
              isLoadingOptions: w,
              loadingOptionLabel: k,
              onOptionClick: C,
              onSelectionChange: s,
              options: c,
              originalLabel: V,
              placement: "header",
              primaryOptionLabel: M,
              renderMenu: j,
              selection: l,
            })),
            (E[62] = t),
            (E[63] = l),
            (E[64] = s),
            (E[65] = c),
            (E[66] = V),
            (E[67] = M),
            (E[68] = j),
            (E[69] = m),
            (E[70] = p),
            (E[71] = b),
            (E[72] = v),
            (E[73] = x),
            (E[74] = w),
            (E[75] = k),
            (E[76] = C),
            (E[77] = _))
          : (_ = E[77]),
        _
      )
    }
    let tf = "writing-block-open-link-mode"
    function tg(e) {
      let t,
        n,
        b,
        x,
        k,
        C,
        M,
        _,
        I,
        D,
        R,
        P,
        U,
        z,
        V,
        F,
        W,
        Z,
        J,
        Q,
        Y,
        X,
        ee,
        et,
        en = (0, a.c)(157),
        {
          placeholder: ei,
          state: ea,
          actionsBeforeHistory: er,
          actionsAfterHistory: eo,
          actionsAfterCopy: el,
          actionsPresentation: es,
          bufferStreamingContent: ec,
          viewerDownloadControl: ed,
          viewerVersionHistoryMenuItem: eu,
          assistantRevision: em,
          copyInteractionDisabled: ep,
          createEditor: ef,
          editorKey: eg,
          editorOverlays: eb,
          editorRootRef: eh,
          emailMetadata: ev,
          emailRowsCapabilities: ex,
          editorInteractionDisabled: ew,
          fillAvailableHeight: ey,
          hideFormatToolbar: ek,
          hideSlashMenu: eC,
          historyInteractionDisabled: eM,
          headerLeadingContent: ej,
          isEditable: eS,
          isEditSelectionLoading: e_,
          isHeaderComposerOpen: eA,
          isMagicEditSubmitting: eN,
          isWriteLikeMeSubmitting: eL,
          libraryFileId: eB,
          metadataInteractionDisabled: eI,
          onBlur: eR,
          onAskForChanges: eT,
          onBeforeExternalContentUpdate: eO,
          onCancelEditSelection: eP,
          onContentChange: eU,
          onCopy: ez,
          onCopySuccess: e$,
          onCopyContentPrepared: eV,
          onEditSelection: eF,
          onEditSelectionOpenChange: eW,
          onEditorEscape: eG,
          onEditorKeyDownCapture: eK,
          onEditorPointerDownCapture: eH,
          onRecipientChange: eZ,
          onSlashMenuExecute: eJ,
          onSubjectChange: eQ,
          onToneSectionSelect: eY,
          onWriteLikeMeAction: eX,
          renderFrame: e1,
          renderViewerMenu: e0,
          testId: e2,
          title: e4,
          variant: e5,
          writingBlockMetadata: e7,
        } = e,
        e6 = void 0 === es ? "inline" : es,
        e8 = void 0 !== ep && ep,
        te = void 0 === ef ? H.P$ : ef,
        tn = void 0 !== ew && ew,
        ti = void 0 !== ey && ey,
        ta = void 0 !== ek && ek,
        tr = void 0 !== eC && eC,
        to = void 0 !== eM && eM,
        tl = void 0 !== e_ && e_,
        ts = void 0 !== eA && eA,
        tc = void 0 !== eN && eN,
        td = void 0 !== eI && eI,
        tu = (0, h.A)(),
        tm = (0, g.Ul)((0, c.k6)() ? A.RZ : A.nw) && !(0, c.j4)()
      en[0] !== tu || en[1] !== ei
        ? ((t =
            ei ?? tu.formatMessage({ id: "codex.writingBlock.editor.placeholder", defaultMessage: "Start writing" })),
          (en[0] = tu),
          (en[1] = ei),
          (en[2] = t))
        : (t = en[2])
      let tg = t,
        tv = ea.displayedContent,
        tx = `${eg ?? ""}
${ea.activeToneSectionId ?? ""}`,
        { editorView: tw, proseMirrorStore: tk } = ea,
        tC = (0, r.iJ)(tk) ?? null
      ;(en[3] !== tn || en[4] !== tw || en[5] !== eS || en[6] !== tm
        ? ((n = () => {
            if (null != tw && !tw.isDestroyed)
              return (tw.dom.classList.toggle(tf, !(0, c.j4)() && (tm || !eS || tn)), () => tw.dom.classList.remove(tf))
          }),
          (b = [tn, tw, eS, tm]),
          (en[3] = tn),
          (en[4] = tw),
          (en[5] = eS),
          (en[6] = tm),
          (en[7] = n),
          (en[8] = b))
        : ((n = en[7]), (b = en[8])),
        (0, o.useEffect)(n, b),
        en[9] !== ec || en[10] !== tw || en[11] !== tv || en[12] !== ez || en[13] !== eV || en[14] !== e$
          ? ((x = (e) => {
              var t
              let n, i
              e.stopPropagation()
              let a = (0, d.o)().parse(tv),
                r = ty(
                  e.currentTarget.ownerDocument.implementation.createHTMLDocument().body,
                  ec ? a : (tw?.state.doc ?? a),
                ),
                o = (0, B.WW)(r)?.htmlText,
                l =
                  ((t = tv),
                  (n = ""),
                  (i = 0),
                  a.descendants((e) => {
                    if ("hard_break" !== e.type.name) return
                    let { start: a, end: r } = e.attrs
                    if ("number" != typeof a || "number" != typeof r) return
                    let o = t.slice(a, r)
                    ;("\\\n" === o || "\\\r\n" === o) && ((n += t.slice(i, a)), (i = a + 1))
                  }),
                  n + t.slice(i))
              ;(ez?.(l),
                eV?.(),
                (0, T.lW)(null == o ? l : { "text/plain": l, "text/html": o }, e).then((e) => {
                  e && e$?.()
                }))
            }),
            (en[9] = ec),
            (en[10] = tw),
            (en[11] = tv),
            (en[12] = ez),
            (en[13] = eV),
            (en[14] = e$),
            (en[15] = x))
          : (x = en[15]))
      let tM = x
      ;(en[16] === Symbol.for("react.memo_cache_sentinel") ? ((k = (0, i.jsx)(S.Gn, {})), (en[16] = k)) : (k = en[16]),
        en[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, i.jsx)(v.A, { id: "copyButton.copy", defaultMessage: "Copy" })), (en[17] = C))
          : (C = en[17]),
        en[18] !== e8 || en[19] !== tM
          ? ((M = (0, i.jsx)(y.ms.Item, { disabled: e8, leftIcon: k, onClick: tM, children: C })),
            (en[18] = e8),
            (en[19] = tM),
            (en[20] = M))
          : (M = en[20]))
      let tj = M
      en[21] !== el || en[22] !== tj
        ? ((_ = (0, i.jsxs)(i.Fragment, { children: [tj, el] })), (en[21] = el), (en[22] = tj), (en[23] = _))
        : (_ = en[23])
      let tS = _
      en[24] !== tu
        ? ((I = tu.formatMessage({ id: "codex.writingBlock.actions.moreActions", defaultMessage: "More actions" })),
          (en[24] = tu),
          (en[25] = I))
        : (I = en[25])
      let t_ = I,
        tE = "viewer" === e6 && "gap-2"
      ;(en[26] !== tE
        ? ((D = (0, f.A)("flex items-center in-data-[conversation-print]:hidden", tE)), (en[26] = tE), (en[27] = D))
        : (D = en[27]),
        en[28] !== e6 || en[29] !== e8 || en[30] !== tM || en[31] !== eB
          ? ((R = "viewer" === e6 && null == eB && (0, i.jsx)(q.B, { isDisabled: e8, onCopy: tM, renderButton: th })),
            (en[28] = e6),
            (en[29] = e8),
            (en[30] = tM),
            (en[31] = eB),
            (en[32] = R))
          : (R = en[32]))
      let tA = "viewer" === e6 ? "viewer" : "inline"
      ;(en[33] !== tw || en[34] !== to || en[35] !== eS || en[36] !== ea.historySummary || en[37] !== tA
        ? ((P = (0, i.jsx)(e9, {
            presentation: tA,
            editorView: tw,
            historySummary: ea.historySummary,
            isEditable: eS,
            isInteractionDisabled: to,
          })),
          (en[33] = tw),
          (en[34] = to),
          (en[35] = eS),
          (en[36] = ea.historySummary),
          (en[37] = tA),
          (en[38] = P))
        : (P = en[38]),
        en[39] !== el || en[40] !== e6 || en[41] !== e8 || en[42] !== tS || en[43] !== tM || en[44] !== t_
          ? ((U =
              "viewer" !== e6 &&
              (0, i.jsx)("div", {
                className: "flex items-center gap-1",
                children:
                  "menu" === e6
                    ? (0, i.jsx)(y.Ab, {
                        align: "end",
                        contentWidth: "menuBounded",
                        triggerButton: (0, i.jsx)(l.m, {
                          sideOffset: 0,
                          content: t_,
                          children: (0, i.jsx)(E.p, { label: t_ }),
                        }),
                        children: tS,
                      })
                    : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(q.B, { isDisabled: e8, onCopy: tM }), el] }),
              })),
            (en[39] = el),
            (en[40] = e6),
            (en[41] = e8),
            (en[42] = tS),
            (en[43] = tM),
            (en[44] = t_),
            (en[45] = U))
          : (U = en[45]),
        en[46] !== eo || en[47] !== er || en[48] !== D || en[49] !== R || en[50] !== P || en[51] !== U
          ? ((z = (0, i.jsxs)("div", { className: D, children: [R, er, P, eo, U] })),
            (en[46] = eo),
            (en[47] = er),
            (en[48] = D),
            (en[49] = R),
            (en[50] = P),
            (en[51] = U),
            (en[52] = z))
          : (z = en[52]))
      let tN = null == ej ? void 0 : "!ps-0 !pe-2 !py-2"
      ;(en[53] !== eL ||
      en[54] !== eB ||
      en[55] !== eY ||
      en[56] !== eX ||
      en[57] !== ea.activeToneSectionId ||
      en[58] !== ea.displayedContent ||
      en[59] !== ea.selectToneSection ||
      en[60] !== ea.toneSections ||
      en[61] !== e5 ||
      en[62] !== e7
        ? ((V =
            (null != ea.toneSections && ea.toneSections.length > 0) || (0, u.ie)(e7) || (null != eX && K(e7, e5))
              ? (0, i.jsx)(tp, {
                  activeSectionId: ea.activeToneSectionId ?? ea.toneSections?.[0]?.id ?? "",
                  isWriteLikeMeSubmitting: eL,
                  libraryFileId: eB,
                  metadata: e7,
                  onSelect: eY ?? ea.selectToneSection,
                  onWriteLikeMeAction: eX,
                  sections: ea.toneSections,
                  content: ea.displayedContent,
                  variant: e5,
                })
              : null),
          (en[53] = eL),
          (en[54] = eB),
          (en[55] = eY),
          (en[56] = eX),
          (en[57] = ea.activeToneSectionId),
          (en[58] = ea.displayedContent),
          (en[59] = ea.selectToneSection),
          (en[60] = ea.toneSections),
          (en[61] = e5),
          (en[62] = e7),
          (en[63] = V))
        : (V = en[63]),
        en[64] !== el ||
        en[65] !== e6 ||
        en[66] !== tj ||
        en[67] !== ej ||
        en[68] !== tu ||
        en[69] !== eB ||
        en[70] !== e0 ||
        en[71] !== e4 ||
        en[72] !== eu
          ? ((F =
              "viewer" === e6
                ? (e0?.(tj) ??
                  (0, i.jsx)(O.jH, {
                    icon: (0, i.jsx)(j.I, { asset: s.g }),
                    libraryBreadcrumb: null == eB ? null : (0, i.jsx)(N.x, { libraryFileId: eB }),
                    tooltipBreadcrumb: null == eB ? null : (0, i.jsx)(N.x, { libraryFileId: eB, variant: "text" }),
                    title:
                      "string" == typeof e4
                        ? e4
                        : tu.formatMessage({
                            id: "codex.writingBlock.header.title.fallback",
                            defaultMessage: "Writing",
                          }),
                    children: (0, i.jsxs)(w.h, { libraryFileId: eB, versionHistoryAction: eu, children: [el, tj] }),
                  }))
                : ej),
            (en[64] = el),
            (en[65] = e6),
            (en[66] = tj),
            (en[67] = ej),
            (en[68] = tu),
            (en[69] = eB),
            (en[70] = e0),
            (en[71] = e4),
            (en[72] = eu),
            (en[73] = F))
          : (F = en[73]))
      let tL = "viewer" === e6 ? el : void 0,
        tB = "viewer" === e6 ? eu : void 0,
        tI = "viewer" === e6 ? tj : void 0
      ;(en[74] !== e4 || en[75] !== e5
        ? ((W =
            e4 ??
            ("email" === e5
              ? (0, i.jsx)(v.A, { id: "codex.writingBlock.email.header.title.fallback", defaultMessage: "Email" })
              : (0, i.jsx)(v.A, { id: "codex.writingBlock.header.title.fallback", defaultMessage: "Writing" }))),
          (en[74] = e4),
          (en[75] = e5),
          (en[76] = W))
        : (W = en[76]),
        en[77] !== tx ||
        en[78] !== ev ||
        en[79] !== ex ||
        en[80] !== eS ||
        en[81] !== td ||
        en[82] !== eR ||
        en[83] !== eZ ||
        en[84] !== eQ ||
        en[85] !== e5
          ? ((Z =
              "email" === e5
                ? (0, i.jsx)(eE, {
                    ...ex,
                    isRecipientEditable: eS && !td && null != eZ,
                    isSubjectEditable: eS && !td && null != eQ,
                    metadata: ev,
                    onBlur: eR,
                    onRecipientChange: eZ,
                    onSubjectChange: eQ,
                    subjectKey: tx,
                  })
                : null),
            (en[77] = tx),
            (en[78] = ev),
            (en[79] = ex),
            (en[80] = eS),
            (en[81] = td),
            (en[82] = eR),
            (en[83] = eZ),
            (en[84] = eQ),
            (en[85] = e5),
            (en[86] = Z))
          : (Z = en[86]),
        en[87] !== em ||
        en[88] !== ec ||
        en[89] !== te ||
        en[90] !== tx ||
        en[91] !== tn ||
        en[92] !== eg ||
        en[93] !== eb ||
        en[94] !== eh ||
        en[95] !== tw ||
        en[96] !== ti ||
        en[97] !== eS ||
        en[98] !== ts ||
        en[99] !== tc ||
        en[100] !== eO ||
        en[101] !== eR ||
        en[102] !== eU ||
        en[103] !== eG ||
        en[104] !== eK ||
        en[105] !== eH ||
        en[106] !== tg ||
        en[107] !== ea ||
        en[108] !== e5
          ? ((J =
              null == eg
                ? (0, i.jsx)("div", {
                    ref: B.KQ,
                    className: (0, f.A)(m.p.root, "text-size-chat text-default [unicode-bidi:plaintext]"),
                    "data-markdown-copy-content": !0,
                    dir: "auto",
                    children: (0, i.jsx)(L.r, {
                      enabled: !0 === ec,
                      streamId: ea.activeToneSectionId ?? "",
                      text: ea.displayedContent,
                      children: tb,
                    }),
                  })
                : (0, i.jsxs)("div", {
                    ref: eh,
                    className: (0, f.A)("relative", ti && "flex grow flex-col"),
                    onKeyDownCapture: (e) => {
                      ;(eK?.(e),
                        "Escape" === e.key &&
                          !e.defaultPrevented &&
                          null != eG &&
                          null != tw &&
                          (0, H.J)(tw) &&
                          (e.preventDefault(), e.stopPropagation(), eG()))
                    },
                    onPointerDownCapture: eH,
                    children: [
                      (0, i.jsx)("div", {
                        className: (0, f.A)(
                          "content-mUPWP6",
                          ti && "flex grow flex-col",
                          "slides" === e5 && tc && "opacity-40",
                        ),
                        "aria-busy": ("slides" === e5 && tc) || void 0,
                        "data-markdown-copy-content": !0,
                        dir: "auto",
                        children: (0, i.jsx)($, {
                          bufferStreamingContent: ec,
                          ariaLabel: tg,
                          className: (0, f.A)(
                            "magic-edit-minimal",
                            ti && m.p.page,
                            ts && "header-magic-edit-composer-open",
                            tc && "magic-edit-submitting",
                          ),
                          createEditor: te,
                          editable: eS && !tn,
                          editorClassName: "leading-relaxed",
                          editorKey: tx,
                          onBlur: eR,
                          onBeforeExternalContentUpdate: eO,
                          onChange: (e) => {
                            eU?.(e, ea.activeToneSectionId)
                          },
                          placeholder: tg,
                          state: ea,
                        }),
                      }),
                      null == em ? null : (0, i.jsx)(G, { editorView: tw, revision: em }),
                      eb,
                    ],
                  })),
            (en[87] = em),
            (en[88] = ec),
            (en[89] = te),
            (en[90] = tx),
            (en[91] = tn),
            (en[92] = eg),
            (en[93] = eb),
            (en[94] = eh),
            (en[95] = tw),
            (en[96] = ti),
            (en[97] = eS),
            (en[98] = ts),
            (en[99] = tc),
            (en[100] = eO),
            (en[101] = eR),
            (en[102] = eU),
            (en[103] = eG),
            (en[104] = eK),
            (en[105] = eH),
            (en[106] = tg),
            (en[107] = ea),
            (en[108] = e5),
            (en[109] = J))
          : (J = en[109]),
        en[110] !== tn || en[111] !== tw || en[112] !== eS || en[113] !== ea.emojiSuggestionState
          ? ((Q =
              eS && !tn && null != tw && null != ea.emojiSuggestionState
                ? (0, i.jsx)(eD, { editorView: tw, suggestion: ea.emojiSuggestionState })
                : null),
            (en[110] = tn),
            (en[111] = tw),
            (en[112] = eS),
            (en[113] = ea.emojiSuggestionState),
            (en[114] = Q))
          : (Q = en[114]),
        en[115] !== tn ||
        en[116] !== tw ||
        en[117] !== tr ||
        en[118] !== eS ||
        en[119] !== eJ ||
        en[120] !== ea.slashMenuState
          ? ((Y =
              !eS || tn || null == tw || tr
                ? null
                : (0, i.jsx)(e3, {
                    editorView: tw,
                    onExecute: (e, t) => {
                      let n = { commandId: e, query: t, view: tw }
                      null == eJ ? (0, H.r0)(n) : eJ(n)
                    },
                    state: ea.slashMenuState,
                  })),
            (en[115] = tn),
            (en[116] = tw),
            (en[117] = tr),
            (en[118] = eS),
            (en[119] = eJ),
            (en[120] = ea.slashMenuState),
            (en[121] = Y))
          : (Y = en[121]),
        en[122] !== tw ||
        en[123] !== ta ||
        en[124] !== tl ||
        en[125] !== eS ||
        en[126] !== tm ||
        en[127] !== eT ||
        en[128] !== eP ||
        en[129] !== eF ||
        en[130] !== eW ||
        en[131] !== tC ||
        en[132] !== ea.emojiSuggestionState ||
        en[133] !== ea.proseMirrorStore ||
        en[134] !== ea.selectionSummary
          ? ((X =
              !eS ||
              ta ||
              null == tw ||
              null != ea.emojiSuggestionState ||
              (ea.selectionSummary.isCollapsed && null == (0, p.Bp)(tC))
                ? null
                : (0, i.jsx)(eq, {
                    editorView: tw,
                    isEditSelectionLoading: tl,
                    isOpenLinkModifierPressed: tm,
                    onAskForChanges: eT,
                    onCancelEditSelection: eP,
                    onEditSelection: eF,
                    onEditSelectionOpenChange: eW,
                    proseMirrorStore: ea.proseMirrorStore,
                  })),
            (en[122] = tw),
            (en[123] = ta),
            (en[124] = tl),
            (en[125] = eS),
            (en[126] = tm),
            (en[127] = eT),
            (en[128] = eP),
            (en[129] = eF),
            (en[130] = eW),
            (en[131] = tC),
            (en[132] = ea.emojiSuggestionState),
            (en[133] = ea.proseMirrorStore),
            (en[134] = ea.selectionSummary),
            (en[135] = X))
          : (X = en[135]),
        en[136] !== tv ||
        en[137] !== z ||
        en[138] !== tN ||
        en[139] !== V ||
        en[140] !== F ||
        en[141] !== tL ||
        en[142] !== tB ||
        en[143] !== tI ||
        en[144] !== W ||
        en[145] !== Z ||
        en[146] !== J ||
        en[147] !== Q ||
        en[148] !== Y ||
        en[149] !== X ||
        en[150] !== e2 ||
        en[151] !== e5 ||
        en[152] !== ed
          ? ((ee = (0, i.jsxs)(tt.$7, {
              viewerDownloadControl: ed,
              actions: z,
              "data-markdown-copy": "rich-block",
              "data-markdown-copy-text": tv,
              "data-testid": e2,
              "data-writing-block-variant": e5,
              headerClassName: tN,
              inlineContent: V,
              leadingContent: F,
              viewerMenuItems: tL,
              viewerVersionHistoryMenuItem: tB,
              viewerCopyMenuItem: tI,
              title: W,
              children: [Z, J, Q, Y, X],
            })),
            (en[136] = tv),
            (en[137] = z),
            (en[138] = tN),
            (en[139] = V),
            (en[140] = F),
            (en[141] = tL),
            (en[142] = tB),
            (en[143] = tI),
            (en[144] = W),
            (en[145] = Z),
            (en[146] = J),
            (en[147] = Q),
            (en[148] = Y),
            (en[149] = X),
            (en[150] = e2),
            (en[151] = e5),
            (en[152] = ed),
            (en[153] = ee))
          : (ee = en[153]))
      let tD = ee
      return (
        en[154] !== tD || en[155] !== e1
          ? ((et = null == e1 ? tD : e1(tD.props)), (en[154] = tD), (en[155] = e1), (en[156] = et))
          : (et = en[156]),
        et
      )
    }
    function tb(e) {
      return (0, i.jsx)(tv, { text: e })
    }
    function th(e) {
      return (0, i.jsx)(O.DW, { ...e, uniform: !0 })
    }
    function tv(e) {
      let t,
        n,
        r,
        l = (0, a.c)(7),
        { text: s } = e,
        c = (0, g.gh)(R.u),
        u = (0, x.Rn)(),
        p = (0, o.useContext)(D.c),
        b = u?.shouldBlockExternalEgress === !0 || "restricted" === p
      l[0] !== b || l[1] !== c || l[2] !== s
        ? ((t = (e) => {
            null != e &&
              ty(e, (0, d.o)().parse(s), (e, t) => {
                let n = (n) => {
                  n.defaultPrevented ||
                    n.button > 1 ||
                    (n.preventDefault(),
                    b && (0, M.i)(t)
                      ? (0, _.qf)(c, k.ExternalLinkConfirmationDialog, {
                          ...(0, C.kg)({
                            event: {
                              altKey: n.altKey,
                              button: n.button,
                              ctrlKey: n.ctrlKey,
                              currentTarget: e,
                              metaKey: n.metaKey,
                              shiftKey: n.shiftKey,
                              target: n.target,
                            },
                            href: t,
                            initiator: "open_in_browser_bridge",
                          }),
                          href: (0, M.f)(t),
                          initiator: "open_in_browser_bridge",
                        })
                      : (0, C.PQ)({ event: n, href: t, initiator: "open_in_browser_bridge" }))
                }
                ;(e.addEventListener("click", n),
                  e.addEventListener("auxclick", n),
                  b && (0, M.i)(t) && (e.addEventListener("contextmenu", tw), e.addEventListener("dragstart", tx)))
              })
          }),
          (l[0] = b),
          (l[1] = c),
          (l[2] = s),
          (l[3] = t))
        : (t = l[3])
      let h = t
      return (
        l[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, f.A)("ProseMirror", m.p.content, "leading-relaxed")), (l[4] = n))
          : (n = l[4]),
        l[5] !== h ? ((r = (0, i.jsx)("div", { ref: h, className: n })), (l[5] = h), (l[6] = r)) : (r = l[6]),
        r
      )
    }
    function tx(e) {
      return e.preventDefault()
    }
    function tw(e) {
      return e.preventDefault()
    }
    function ty(e, t, n) {
      let i = b.ZF.fromSchema(t.type.schema).serializeFragment(t.content, { document: e.ownerDocument })
      for (let e of i.querySelectorAll("a[href]")) {
        let t = (0, I.G)(e.getAttribute("href") ?? "")
        if (null == t) {
          e.replaceWith(...e.childNodes)
          continue
        }
        n?.(e, t)
      }
      for (let e of i.querySelectorAll('input[type="checkbox"]')) e.disabled = !0
      return (e.replaceChildren(i), e)
    }
    function tk(e) {
      let t,
        n,
        l,
        s,
        c,
        d,
        u,
        m,
        p,
        f,
        g,
        b = (0, a.c)(23)
      ;(b[0] !== e
        ? (({
            activeToneSectionId: t,
            content: n,
            externalContentUpdate: l,
            onToneSectionSelect: s,
            proseMirrorStore: c,
            render: d,
            toneSections: u,
            ...m
          } = e),
          (b[0] = e),
          (b[1] = t),
          (b[2] = n),
          (b[3] = l),
          (b[4] = s),
          (b[5] = c),
          (b[6] = d),
          (b[7] = u),
          (b[8] = m))
        : ((t = b[1]), (n = b[2]), (l = b[3]), (s = b[4]), (c = b[5]), (d = b[6]), (u = b[7]), (m = b[8])),
        b[9] !== t || b[10] !== n || b[11] !== l || b[12] !== s || b[13] !== c || b[14] !== u
          ? ((p = {
              activeToneSectionId: t,
              content: n,
              externalContentUpdate: l,
              onToneSectionSelect: s,
              proseMirrorStore: c,
              toneSections: u,
            }),
            (b[9] = t),
            (b[10] = n),
            (b[11] = l),
            (b[12] = s),
            (b[13] = c),
            (b[14] = u),
            (b[15] = p))
          : (p = b[15]))
      let h = (function (e) {
        let t,
          n,
          i,
          l = (0, a.c)(18),
          {
            activeToneSectionId: s,
            content: c,
            externalContentUpdate: d,
            onToneSectionSelect: u,
            proseMirrorStore: m,
            toneSections: p,
          } = e,
          [f] = (0, o.useState)(r.Gi),
          g = m ?? f,
          b = (0, r.TP)(g),
          [h, v] = (0, o.useState)(p?.[0]?.id ?? null),
          x = s ?? h
        l[0] !== x || l[1] !== p
          ? ((t = p?.find((e) => e.id === x) ?? p?.[0]), (l[0] = x), (l[1] = p), (l[2] = t))
          : (t = l[2])
        let w = t,
          y = w?.id,
          k = w?.content ?? c,
          C = null != m
        return (
          l[3] !== w?.id || l[4] !== s || l[5] !== u || l[6] !== g
            ? ((n = (e) => {
                e !== w?.id && (g.setView(null), null == s && v(e), u?.(e))
              }),
              (l[3] = w?.id),
              (l[4] = s),
              (l[5] = u),
              (l[6] = g),
              (l[7] = n))
            : (n = l[7]),
          l[8] !== w ||
          l[9] !== d ||
          l[10] !== b ||
          l[11] !== g ||
          l[12] !== y ||
          l[13] !== k ||
          l[14] !== C ||
          l[15] !== n ||
          l[16] !== p
            ? ((i = {
                ...b,
                activeToneSection: w,
                activeToneSectionId: y,
                displayedContent: k,
                externalContentUpdate: d,
                isProseMirrorStoreShared: C,
                proseMirrorStore: g,
                selectToneSection: n,
                toneSections: p,
              }),
              (l[8] = w),
              (l[9] = d),
              (l[10] = b),
              (l[11] = g),
              (l[12] = y),
              (l[13] = k),
              (l[14] = C),
              (l[15] = n),
              (l[16] = p),
              (l[17] = i))
            : (i = l[17]),
          i
        )
      })(p)
      b[16] !== h || b[17] !== m
        ? ((f = (e) => (0, i.jsx)(tg, { ...m, ...e, state: h })), (b[16] = h), (b[17] = m), (b[18] = f))
        : (f = b[18])
      let v = f
      return (
        b[19] !== d || b[20] !== v || b[21] !== h
          ? ((g = d?.({ renderView: v, state: h }) ?? v()), (b[19] = d), (b[20] = v), (b[21] = h), (b[22] = g))
          : (g = b[22]),
        g
      )
    }
  },
  v9AI(e, t, n) {
    var i = n("Kh9O"),
      a = n("qmMi"),
      r = n("vNuC"),
      o = n("OWtl"),
      l = n("BUfb")
    let s = (0, a.T1)(o.u, (e, { signal: t, scope: n }) => {
      let a = t(null),
        o = null,
        s = null
      return {
        state$: a,
        update(e, t) {
          let c = n.get(a)
          if (c?.dismissed == null) {
            if (null != c && !c.isStreaming) {
              if (s !== e.receivedMarkdown && null != c.changes)
                try {
                  ;(e.receivedMarkdown.length > 2e4 ||
                    (0, l.$e)((0, i.o)().parse(e.receivedMarkdown)).text !== c.changes.text) &&
                    n.set(a, { ...c, dismissed: "error" })
                } catch {
                  n.set(a, { ...c, dismissed: "error" })
                }
              s = e.receivedMarkdown
              return
            }
            if (
              ((s = e.receivedMarkdown),
              (!e.isStreaming && !e.isComplete) || e.previousMarkdown.length + e.receivedMarkdown.length > 2e4)
            )
              return void n.set(a, {
                changes: null,
                isStreaming: !1,
                expiresAt: null,
                persistsUntilEdit: "until-first-edit" === t,
                dismissed: "error",
              })
            try {
              let s = (0, i.o)()
              o?.markdown !== e.previousMarkdown &&
                (o = { markdown: e.previousMarkdown, doc: s.parse(e.previousMarkdown) })
              let c = (0, l.Rn)({
                  previousDoc: o.doc,
                  receivedDoc: s.parse(e.isStreaming ? (0, r.J)(e.receivedMarkdown).markdown : e.receivedMarkdown),
                  isStreaming: e.isStreaming,
                  endsAtWordBoundary: /\s$/u.test(e.receivedMarkdown),
                }),
                d = e.isStreaming || null == c ? null : (0, l.V4)(c.text, t)
              n.set(a, {
                changes: c,
                isStreaming: e.isStreaming,
                expiresAt: null == d ? null : Date.now() + d,
                persistsUntilEdit: "until-first-edit" === t,
                dismissed: null,
              })
            } catch {
              n.set(a, {
                changes: null,
                isStreaming: !1,
                expiresAt: null,
                persistsUntilEdit: "until-first-edit" === t,
                dismissed: "error",
              })
            }
          }
        },
        dismiss(e) {
          let t = n.get(a)
          null != t && null == t.dismissed && n.set(a, { ...t, dismissed: e })
        },
      }
    })
    n.d(
      t,
      {},
      {
        $: s,
        F: function (e, t) {
          let n = e.get(s, t),
            i = e.get(n.state$)
          null == i || i.persistsUntilEdit || n.dismiss("copy")
        },
      },
    )
  },
  s1zV(e, t, n) {
    var i = n("ABep"),
      a = n("QosV"),
      r = n("uuN8"),
      o = n("bVeK")
    n.d(
      t,
      {},
      {
        B: function (e) {
          let t,
            n,
            l = (0, a.c)(6),
            { className: s, isDisabled: c, onCopy: d, renderButton: u } = e
          return (
            l[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = { copy: (0, i.jsx)(o.Gn, {}), copied: (0, i.jsx)(o.jFs, {}) }), (l[0] = t))
              : (t = l[0]),
            l[1] !== s || l[2] !== c || l[3] !== d || l[4] !== u
              ? ((n = (0, i.jsx)(r.i, {
                  className: s,
                  icons: t,
                  isDisabled: c,
                  iconOnly: !0,
                  renderButton: u,
                  tooltipSideOffset: 0,
                  variant: "toolbar",
                  onCopy: d,
                })),
                (l[1] = s),
                (l[2] = c),
                (l[3] = d),
                (l[4] = u),
                (l[5] = n))
              : (n = l[5]),
            n
          )
        },
      },
    )
  },
  JIxO(e, t, n) {
    n.d(t, { $f: () => b, $7: () => p, JT: () => g })
    var i = n("ABep"),
      a = n("QosV"),
      r = n("on57"),
      o = n("zd8w"),
      l = n("LpCf")
    let s = (0, o.forwardRef)(function (e, t) {
        let n,
          o,
          s,
          c,
          d,
          u,
          m,
          p,
          f,
          g,
          b,
          h,
          v,
          x,
          w,
          y,
          k,
          C,
          M,
          j,
          S,
          _,
          E,
          A,
          N,
          L,
          B = (0, a.c)(53)
        return (
          B[0] !== e
            ? (({
                className: u,
                backgroundProps: n,
                backgroundStyle: o,
                borderProps: s,
                borderStyle: c,
                children: d,
                style: p,
                ...m
              } = e),
              (B[0] = e),
              (B[1] = n),
              (B[2] = o),
              (B[3] = s),
              (B[4] = c),
              (B[5] = d),
              (B[6] = u),
              (B[7] = m),
              (B[8] = p))
            : ((n = B[1]), (o = B[2]), (s = B[3]), (c = B[4]), (d = B[5]), (u = B[6]), (m = B[7]), (p = B[8])),
          B[9] !== n ? ((f = n ?? {}), (B[9] = n), (B[10] = f)) : (f = B[10]),
          B[11] !== f
            ? (({ className: g, style: b, ...h } = f), (B[11] = f), (B[12] = g), (B[13] = b), (B[14] = h))
            : ((g = B[12]), (b = B[13]), (h = B[14])),
          B[15] !== s ? ((v = s ?? {}), (B[15] = s), (B[16] = v)) : (v = B[16]),
          B[17] !== v
            ? (({ className: x, style: w, ...y } = v), (B[17] = v), (B[18] = x), (B[19] = w), (B[20] = y))
            : ((x = B[18]), (w = B[19]), (y = B[20])),
          B[21] !== u
            ? ((k = (0, r.A)(
                "group/writing-block-surface relative isolate w-full min-w-0 overflow-clip rounded-[var(--oai-wb-radius)] [box-shadow:var(--oai-wb-shadow)] [color:var(--oai-wb-text-primary)] [contain:inline-size] [font-family:var(--oai-wb-font-sans)]",
                u,
              )),
              (B[21] = u),
              (B[22] = k))
            : (k = B[22]),
          B[23] !== p ? ((C = { ...l.w, ...p }), (B[23] = p), (B[24] = C)) : (C = B[24]),
          B[25] !== g
            ? ((M = (0, r.A)(
                "pointer-events-none absolute inset-0 rounded-[inherit]",
                "z-[-1] [background:var(--oai-wb-surface-primary)]",
                g,
              )),
              (B[25] = g),
              (B[26] = M))
            : (M = B[26]),
          B[27] !== b || B[28] !== o ? ((j = { ...b, ...o }), (B[27] = b), (B[28] = o), (B[29] = j)) : (j = B[29]),
          B[30] !== h || B[31] !== M || B[32] !== j
            ? ((S = (0, i.jsx)("div", { ...h, "aria-hidden": !0, className: M, style: j })),
              (B[30] = h),
              (B[31] = M),
              (B[32] = j),
              (B[33] = S))
            : (S = B[33]),
          B[34] !== d
            ? ((_ = (0, i.jsx)("div", { className: "relative z-[1]", children: d })), (B[34] = d), (B[35] = _))
            : (_ = B[35]),
          B[36] !== x
            ? ((E = (0, r.A)(
                "pointer-events-none absolute inset-0 rounded-[inherit]",
                "z-[2] [box-shadow:inset_0_0_0_1px_var(--oai-wb-border)] group-hover/writing-block-surface:[box-shadow:inset_0_0_0_1px_var(--oai-wb-border-hover)]",
                x,
              )),
              (B[36] = x),
              (B[37] = E))
            : (E = B[37]),
          B[38] !== w || B[39] !== c ? ((A = { ...w, ...c }), (B[38] = w), (B[39] = c), (B[40] = A)) : (A = B[40]),
          B[41] !== y || B[42] !== A || B[43] !== E
            ? ((N = (0, i.jsx)("div", { ...y, "aria-hidden": !0, className: E, style: A })),
              (B[41] = y),
              (B[42] = A),
              (B[43] = E),
              (B[44] = N))
            : (N = B[44]),
          B[45] !== m || B[46] !== t || B[47] !== N || B[48] !== k || B[49] !== C || B[50] !== S || B[51] !== _
            ? ((L = (0, i.jsxs)("div", {
                className: k,
                "data-oai-writing-block-surface": "",
                ref: t,
                style: C,
                ...m,
                children: [S, _, N],
              })),
              (B[45] = m),
              (B[46] = t),
              (B[47] = N),
              (B[48] = k),
              (B[49] = C),
              (B[50] = S),
              (B[51] = _),
              (B[52] = L))
            : (L = B[52]),
          L
        )
      }),
      c = (0, o.forwardRef)(function (e, t) {
        let n,
          o,
          s,
          c,
          d,
          u,
          m,
          p,
          f,
          g,
          b,
          h,
          v,
          x,
          w = (0, a.c)(29)
        return (
          w[0] !== e
            ? (({ className: o, actions: n, inlineContent: s, leadingContent: c, title: m, style: u, ...d } = e),
              (w[0] = e),
              (w[1] = n),
              (w[2] = o),
              (w[3] = s),
              (w[4] = c),
              (w[5] = d),
              (w[6] = u),
              (w[7] = m))
            : ((n = w[1]), (o = w[2]), (s = w[3]), (c = w[4]), (d = w[5]), (u = w[6]), (m = w[7])),
          w[8] !== o
            ? ((p = (0, r.A)(
                "flex min-w-0 select-none items-center gap-[calc(var(--oai-wb-spacing)*2)] px-[calc(var(--oai-wb-spacing)*4)] py-[calc(var(--oai-wb-spacing)*2.5)]",
                o,
              )),
              (w[8] = o),
              (w[9] = p))
            : (p = w[9]),
          w[10] !== u ? ((f = { ...l.w, ...u }), (w[10] = u), (w[11] = f)) : (f = w[11]),
          w[12] !== c || w[13] !== m
            ? ((g =
                c ??
                (0, i.jsx)("div", {
                  className:
                    "min-w-0 flex-[0_1_auto] overflow-hidden text-ellipsis whitespace-nowrap [color:var(--oai-wb-text-secondary)] [font-size:var(--oai-wb-font-size)] font-medium",
                  children: m,
                })),
              (w[12] = c),
              (w[13] = m),
              (w[14] = g))
            : (g = w[14]),
          w[15] !== s
            ? ((b = null == s ? null : (0, i.jsx)("div", { className: "min-w-0 flex-[1_1_auto]", children: s })),
              (w[15] = s),
              (w[16] = b))
            : (b = w[16]),
          w[17] !== g || w[18] !== b
            ? ((h = (0, i.jsxs)("div", {
                className: "flex min-w-0 flex-[1_1_auto] items-center gap-[calc(var(--oai-wb-spacing)*2)]",
                children: [g, b],
              })),
              (w[17] = g),
              (w[18] = b),
              (w[19] = h))
            : (h = w[19]),
          w[20] !== n
            ? ((v =
                null == n
                  ? null
                  : (0, i.jsx)("div", {
                      className: "flex flex-[0_0_auto] items-center gap-[var(--oai-wb-spacing)]",
                      children: n,
                    })),
              (w[20] = n),
              (w[21] = v))
            : (v = w[21]),
          w[22] !== d || w[23] !== t || w[24] !== p || w[25] !== f || w[26] !== h || w[27] !== v
            ? ((x = (0, i.jsxs)("header", { className: p, ref: t, style: f, ...d, children: [h, v] })),
              (w[22] = d),
              (w[23] = t),
              (w[24] = p),
              (w[25] = f),
              (w[26] = h),
              (w[27] = v),
              (w[28] = x))
            : (x = w[28]),
          x
        )
      }),
      d = (0, o.forwardRef)(function (e, t) {
        let n,
          r,
          o,
          l,
          d,
          u,
          m,
          p,
          f,
          g,
          b = (0, a.c)(21)
        return (
          b[0] !== e
            ? (({
                className: o,
                actions: n,
                children: r,
                headerClassName: l,
                inlineContent: d,
                leadingContent: u,
                title: p,
                ...m
              } = e),
              (b[0] = e),
              (b[1] = n),
              (b[2] = r),
              (b[3] = o),
              (b[4] = l),
              (b[5] = d),
              (b[6] = u),
              (b[7] = m),
              (b[8] = p))
            : ((n = b[1]), (r = b[2]), (o = b[3]), (l = b[4]), (d = b[5]), (u = b[6]), (m = b[7]), (p = b[8])),
          b[9] !== n || b[10] !== l || b[11] !== d || b[12] !== u || b[13] !== p
            ? ((f = (0, i.jsx)(c, { actions: n, className: l, inlineContent: d, leadingContent: u, title: p })),
              (b[9] = n),
              (b[10] = l),
              (b[11] = d),
              (b[12] = u),
              (b[13] = p),
              (b[14] = f))
            : (f = b[14]),
          b[15] !== r || b[16] !== o || b[17] !== m || b[18] !== t || b[19] !== f
            ? ((g = (0, i.jsxs)(s, { className: o, ref: t, ...m, children: [f, r] })),
              (b[15] = r),
              (b[16] = o),
              (b[17] = m),
              (b[18] = t),
              (b[19] = f),
              (b[20] = g))
            : (g = b[20]),
          g
        )
      })
    var u = "editorControls-fA0_fZ"
    let m =
      "[--wb-surface-primary:color-mix(in_srgb,var(--color-surface-elevated-secondary)_86%,var(--color-surface))] [--wb-accent:var(--color-accent)] [--wb-interactive-background:var(--color-background-secondary-ghost-hover)] [--wb-on-accent:var(--color-text-on-accent)] [--wb-selection:var(--color-background-text-selection)] [--wb-font-size:var(--codex-chat-font-size,0.875rem)]"
    function p(e) {
      let t,
        n,
        o,
        l,
        s,
        c,
        p,
        g,
        b,
        h,
        v,
        x,
        w,
        y = (0, a.c)(27)
      if (y[0] !== e) {
        let {
          actions: i,
          className: a,
          headerActions: r,
          headerClassName: d,
          inlineContent: u,
          inlineControlsAppearance: m,
          leadingContent: f,
          status: b,
          viewerCopyMenuItem: h,
          viewerDownloadControl: v,
          viewerEditingControls: x,
          viewerMenuItems: w,
          viewerVersionHistoryMenuItem: k,
          viewerPrimaryAction: C,
          viewerTitleControl: M,
          ...j
        } = e
        ;((t = i),
          (n = a),
          (o = r),
          (l = d),
          (s = u),
          (c = f),
          (g = b),
          (p = j),
          (y[0] = e),
          (y[1] = t),
          (y[2] = n),
          (y[3] = o),
          (y[4] = l),
          (y[5] = s),
          (y[6] = c),
          (y[7] = p),
          (y[8] = g))
      } else ((t = y[1]), (n = y[2]), (o = y[3]), (l = y[4]), (s = y[5]), (c = y[6]), (p = y[7]), (g = y[8]))
      ;(y[9] !== t || y[10] !== o ? ((b = t ?? o?.map(f)), (y[9] = t), (y[10] = o), (y[11] = b)) : (b = y[11]),
        y[12] !== n
          ? ((h = (0, r.A)("frame-aD2tvA", u, "z-10 clear-both my-4", m, n)), (y[12] = n), (y[13] = h))
          : (h = y[13]))
      let k = null == c && "ps-5"
      return (
        y[14] !== l || y[15] !== k
          ? ((v = (0, r.A)("header-rXCNwJ", "sticky z-10 pe-2 pt-2 pb-2 [--wb-font-size:var(--text-sm)]", k, l)),
            (y[14] = l),
            (y[15] = k),
            (y[16] = v))
          : (v = y[16]),
        y[17] !== s || y[18] !== g
          ? ((x = null == g ? s : (0, i.jsxs)(i.Fragment, { children: [g, s] })), (y[17] = s), (y[18] = g), (y[19] = x))
          : (x = y[19]),
        y[20] !== c || y[21] !== p || y[22] !== b || y[23] !== h || y[24] !== v || y[25] !== x
          ? ((w = (0, i.jsx)(d, {
              actions: b,
              className: h,
              headerClassName: v,
              inlineContent: x,
              leadingContent: c,
              ...p,
            })),
            (y[20] = c),
            (y[21] = p),
            (y[22] = b),
            (y[23] = h),
            (y[24] = v),
            (y[25] = x),
            (y[26] = w))
          : (w = y[26]),
        w
      )
    }
    function f(e) {
      let { id: t, content: n } = e
      return (0, i.jsx)(o.Fragment, { children: n }, t)
    }
    function g(e) {
      let t,
        n,
        o,
        l,
        c = (0, a.c)(8)
      return (
        c[0] !== e ? (({ className: t, ...n } = e), (c[0] = e), (c[1] = t), (c[2] = n)) : ((t = c[1]), (n = c[2])),
        c[3] !== t ? ((o = (0, r.A)(u, m, t)), (c[3] = t), (c[4] = o)) : (o = c[4]),
        c[5] !== n || c[6] !== o
          ? ((l = (0, i.jsx)(s, { className: o, ...n })), (c[5] = n), (c[6] = o), (c[7] = l))
          : (l = c[7]),
        l
      )
    }
    function b(e) {
      let t,
        n,
        o,
        l,
        s = (0, a.c)(8)
      return (
        s[0] !== e ? (({ className: t, ...n } = e), (s[0] = e), (s[1] = t), (s[2] = n)) : ((t = s[1]), (n = s[2])),
        s[3] !== t ? ((o = (0, r.A)("editorRegion-y_pd0L", u, m, t)), (s[3] = t), (s[4] = o)) : (o = s[4]),
        s[5] !== n || s[6] !== o
          ? ((l = (0, i.jsx)("div", { className: o, ...n })), (s[5] = n), (s[6] = o), (s[7] = l))
          : (l = s[7]),
        l
      )
    }
  },
}
//# sourceMappingURL=639670.66a9154c73.js.map
