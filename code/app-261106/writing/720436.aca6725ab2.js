export const __rspack_esm_ids = [720436]
export const __webpack_modules__ = {
  Jaao(e, t, i) {
    var n = i("BhZP")
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
              let i = t[e]
              return Array.isArray(i) ? [[e, i.filter(d)]] : []
            }),
          )
        : Object.fromEntries(
            r.flatMap((t) => {
              var i, n
              let a,
                r = ((i = e),
                (n = t),
                "string" != typeof (a = i?.[n])
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
      let i = new Map(t.map((e) => [e.email.trim().toLowerCase(), e]))
      return e
        .split(",")
        .map((e) => e.trim())
        .filter((e) => e.length > 0)
        .map((e) => {
          let t = !s(e),
            n = i.get(e.toLowerCase())?.name?.trim()
          return { value: !t && null != n && n.length > 0 ? n : e, isInvalid: t }
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
    i.d(
      t,
      {},
      {
        CB: function (e, t) {
          if (u(e?.contacts)) {
            let i
            return (!Array.isArray((i = l(e)[t])) ? [] : i.filter(d)).map((e) => e.email).join(", ")
          }
          return "string" == typeof e?.[t] ? e[t] : ""
        },
        DA: function (e, t = []) {
          let i = new Map(t.map((e) => [e.email.trim().toLowerCase(), e])),
            n = [],
            a = []
          for (let t of e
            .split(",")
            .map((e) => e.trim())
            .filter((e) => e.length > 0)) {
            if (!s(t)) {
              a.push(t)
              continue
            }
            let e = i.get(t.toLowerCase())
            n.push(null == e ? { email: t } : { ...e, email: t })
          }
          return { recipients: n, unfinishedValue: a.join(", ") }
        },
        SW: s,
        Wu: function (e, t) {
          let i = (0, n.I$)(e.metadata),
            a = t.isOriginal ? i[0] : (0, n.Xc)(e.metadata, t),
            r = i.find((e) => null != o(e))
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
          let i = new Map(t.map((e) => [e.email.toLowerCase(), e]))
          return e
            .split(/[;,\n]+/)
            .map((e) => e.trim())
            .filter((e) => e.length > 0)
            .map((e) => {
              let t = i.get(e.toLowerCase())
              return null == t ? { email: e } : { ...t, email: e }
            })
        },
        m1: function (e, t) {
          let i = t?.ownerEmail?.trim().toLowerCase()
          if (null != i && 0 !== i.length) return e.find((e) => e.ownerEmail?.trim().toLowerCase() === i)?.id
        },
        mI: function (e, t) {
          let i = e.map((e) => e.email).join(", "),
            n = t.trim()
          return 0 === i.length ? n : 0 === n.length ? i : `${i}, ${n}`
        },
        py: function (e) {
          return Object.fromEntries(r.flatMap((t) => (e[t].length > 0 ? [[t, [...e[t]]]] : [])))
        },
        r6: l,
        tx: function (e, t, i) {
          let a = t.isOriginal ? (0, n.I$)(e.metadata)[0] : t,
            r = null == a ? void 0 : (0, n.k$)(e.metadata, { id: a.id, index: t.isOriginal ? 0 : t.index }, i)
          return { ...(t.isOriginal ? { subject: i } : {}), ...r }
        },
        vy: function ({ bcc: e, body: t, cc: i, includeCcAndBcc: n, provider: a, recipient: r, subject: o }) {
          let l = encodeURIComponent(t),
            s = encodeURIComponent(r),
            c = encodeURIComponent(o),
            d = n ? { encodedBcc: encodeURIComponent(e), encodedCc: encodeURIComponent(i) } : void 0
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
                null != d && i.length > 0 && (t += `?cc=${i}`),
                null != d && e.length > 0 && (t += `?bcc=${e}`),
                `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(t)}&subject=${c}&body=${l}`
              )
            }
            case "default":
              return `mailto:${r}?${null == d ? "" : `cc=${d.encodedCc}&bcc=${d.encodedBcc}&`}subject=${c}&body=${l}`
          }
        },
        yy: function ({ recipient: e, cc: t, bcc: i, contacts: n }) {
          let a = []
          for (let [i, r] of [
            [e, n.recipient ?? []],
            [t, n.cc ?? []],
          ])
            a.push(...c(i, r))
          let r = c(i, n.bcc ?? [])
          return (r.length > 0 && ((r[0] = { ...r[0], prefix: "Bcc: " }), a.push(...r)), a)
        },
      },
    )
  },
  ksPB(e, t, i) {
    var n,
      a =
        (((n = {}).CHATGPT_WRITING_BLOCK_SLIDES_DESTINATION_UNSPECIFIED =
          "CHATGPT_WRITING_BLOCK_SLIDES_DESTINATION_UNSPECIFIED"),
        (n.CHATGPT_WRITING_BLOCK_SLIDES_DESTINATION_SPACES = "CHATGPT_WRITING_BLOCK_SLIDES_DESTINATION_SPACES"),
        (n.CHATGPT_WRITING_BLOCK_SLIDES_DESTINATION_POWERPOINT = "CHATGPT_WRITING_BLOCK_SLIDES_DESTINATION_POWERPOINT"),
        (n.CHATGPT_WRITING_BLOCK_SLIDES_DESTINATION_GOOGLE_SLIDES =
          "CHATGPT_WRITING_BLOCK_SLIDES_DESTINATION_GOOGLE_SLIDES"),
        (n.UNRECOGNIZED = "UNRECOGNIZED"),
        n)
    i.d(
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
  sMeo(e, t, i) {
    var n = i("ABep"),
      a = i("QosV"),
      r = i("WXbs"),
      o = i("BibS")
    i.d(
      t,
      {},
      {
        s: function (e) {
          let t,
            i = (0, a.c)(2)
          return (
            i[0] !== e
              ? ((t = (0, n.jsx)(o.W, { ...e, content: r.SymbolBrowser })), (i[0] = e), (i[1] = t))
              : (t = i[1]),
            t
          )
        },
      },
    )
  },
  hdt5(e, t, i) {
    var n = i("ABep"),
      a = i("QosV"),
      r = i("zd8w"),
      o = i("sMeo")
    i.d(
      t,
      {},
      {
        c: function (e) {
          let t,
            i,
            l,
            s,
            c,
            d,
            u,
            p,
            m,
            b,
            f,
            g,
            h,
            v = (0, a.c)(31)
          v[0] !== e
            ? (({ query: t, keyboardTarget: i, onDismiss: l, ...s } = e),
              (v[0] = e),
              (v[1] = t),
              (v[2] = i),
              (v[3] = l),
              (v[4] = s))
            : ((t = v[1]), (i = v[2]), (l = v[3]), (s = v[4]))
          let x = (0, r.useRef)(null)
          v[5] !== t ? ((c = { inlineQuery: t, manualQuery: void 0 }), (v[5] = t), (v[6] = c)) : (c = v[6])
          let [w, y] = (0, r.useState)(c)
          ;(w.inlineQuery !== t && y({ inlineQuery: t, manualQuery: void 0 }),
            v[7] !== i || v[8] !== l
              ? ((d = (e) => {
                  e.target instanceof Node && !x.current?.contains(e.target) && !i.contains(e.target) && l()
                }),
                (v[7] = i),
                (v[8] = l),
                (v[9] = d))
              : (d = v[9]))
          let k = (0, r.useEffectEvent)(d)
          ;(v[10] !== k || v[11] !== i.ownerDocument
            ? ((u = () => {
                let e = i.ownerDocument,
                  t = (e) => k(e)
                return (e.addEventListener("pointerdown", t, !0), () => e.removeEventListener("pointerdown", t, !0))
              }),
              (v[10] = k),
              (v[11] = i.ownerDocument),
              (v[12] = u))
            : (u = v[12]),
            v[13] !== i ? ((p = [i]), (v[13] = i), (v[14] = p)) : (p = v[14]),
            (0, r.useEffect)(u, p),
            v[15] !== i || v[16] !== l
              ? ((m = (e) => {
                  !e.currentTarget.contains(e.relatedTarget) &&
                    !i.contains(e.relatedTarget) &&
                    i.ownerDocument.hasFocus() &&
                    l()
                }),
                (b = (e) => {
                  "Escape" !== e.key ||
                    e.nativeEvent.isComposing ||
                    (e.preventDefault(), e.stopPropagation(), l(), i.focus())
                }),
                (v[15] = i),
                (v[16] = l),
                (v[17] = m),
                (v[18] = b))
              : ((m = v[17]), (b = v[18])))
          let C = w.manualQuery ?? t,
            S = w.manualQuery ?? ""
          return (
            v[19] !== t ? ((f = (e) => y({ inlineQuery: t, manualQuery: e })), (v[19] = t), (v[20] = f)) : (f = v[20]),
            v[21] !== i || v[22] !== s || v[23] !== C || v[24] !== S || v[25] !== f
              ? ((g = (0, n.jsx)(o.s, {
                  ...s,
                  autoFocus: !1,
                  keyboardTarget: i,
                  query: C,
                  inputValue: S,
                  onQueryChange: f,
                })),
                (v[21] = i),
                (v[22] = s),
                (v[23] = C),
                (v[24] = S),
                (v[25] = f),
                (v[26] = g))
              : (g = v[26]),
            v[27] !== g || v[28] !== m || v[29] !== b
              ? ((h = (0, n.jsx)("div", { ref: x, role: "presentation", onBlur: m, onKeyDown: b, children: g })),
                (v[27] = g),
                (v[28] = m),
                (v[29] = b),
                (v[30] = h))
              : (h = v[30]),
            h
          )
        },
      },
    )
  },
  op0E(e, t, i) {
    i.d(t, { i: () => e4 })
    var n = i("ABep"),
      a = i("QosV"),
      r = i("qcpr"),
      o = i("zd8w"),
      l = i("slpy"),
      s = i("PePi"),
      c = i("WuTo"),
      d = i("BhZP"),
      u = i("Kh9O"),
      p = i("sSh9"),
      m = i("dZHD"),
      b = i("on57"),
      f = i("zTeN"),
      g = i("Hpb6"),
      h = i("Wf1j"),
      v = i("oyxz"),
      x = i("UBr4")
    i("Na0v")
    var w = i("bqtn"),
      y = i("Ot7V"),
      k = i("HOLv"),
      C = i("bVeK"),
      S = i("f38C"),
      j = i("ziRc"),
      A = i("hrTz"),
      E = i("hSWQ"),
      _ = i("xprp"),
      I = i("Zsk8"),
      M = i("aepO"),
      N = i("j9wQ"),
      B = i("g3YS"),
      D = i("jDom"),
      L = i("qqcG")
    function T(e) {
      let t,
        i,
        r,
        l,
        s,
        c,
        d,
        p,
        m,
        b,
        f,
        g,
        h,
        v,
        x,
        w = (0, a.c)(42)
      w[0] !== e
        ? (({ bufferStreamingContent: s, createEditor: t, onBeforeExternalContentUpdate: i, state: l, ...r } = e),
          (w[0] = e),
          (w[1] = t),
          (w[2] = i),
          (w[3] = r),
          (w[4] = l),
          (w[5] = s))
        : ((t = w[1]), (i = w[2]), (r = w[3]), (l = w[4]), (s = w[5]))
      let y = void 0 !== s && s
      if (w[6] !== l.displayedContent || w[7] !== l.externalContentUpdate) {
        let e = (0, u.o)()
        ;((c = null == l.externalContentUpdate ? l.displayedContent : e.serialize(e.parse(l.displayedContent))),
          (w[6] = l.displayedContent),
          (w[7] = l.externalContentUpdate),
          (w[8] = c))
      } else c = w[8]
      let k = c,
        C = l.editorView
      w[9] !== k || w[10] !== l
        ? ((d = (0, L.gK)(l, l.externalContentUpdate, k)), (w[9] = k), (w[10] = l), (w[11] = d))
        : (d = w[11])
      let S = d
      w[12] !== l.externalContentUpdate
        ? ((p = () => l.externalContentUpdate), (w[12] = l.externalContentUpdate), (w[13] = p))
        : (p = w[13])
      let j = (0, D.K)(p)
      w[14] !== i
        ? ((m = (e) => {
            i?.(e)
          }),
          (w[14] = i),
          (w[15] = m))
        : (m = w[15])
      let A = (0, D.K)(m),
        _ = (0, o.useRef)(null)
      w[16] !== t || w[17] !== j || w[18] !== A || w[19] !== l.isProseMirrorStoreShared || w[20] !== l.proseMirrorStore
        ? ((b = (e) => {
            let i = t({
              ...e,
              getExternalContentUpdate: j,
              onBeforeExternalContentUpdate: A,
              proseMirrorStore: l.isProseMirrorStoreShared ? l.proseMirrorStore : void 0,
            })
            return (
              (_.current = i),
              {
                ...i,
                destroy() {
                  ;(_.current === i && (_.current = null), i.destroy())
                },
              }
            )
          }),
          (w[16] = t),
          (w[17] = j),
          (w[18] = A),
          (w[19] = l.isProseMirrorStoreShared),
          (w[20] = l.proseMirrorStore),
          (w[21] = b))
        : (b = w[21])
      let I = (0, D.K)(b)
      w[22] !== C || w[23] !== k || w[24] !== l
        ? ((f = () => {
            let e = _.current
            e?.view === C && "unchanged" === (0, L.gK)(l, l.externalContentUpdate, k) && e.setMarkdown(k)
          }),
          (w[22] = C),
          (w[23] = k),
          (w[24] = l),
          (w[25] = f))
        : (f = w[25])
      let M = (0, o.useEffectEvent)(f)
      w[26] !== M
        ? ((g = () => {
            M()
          }),
          (w[26] = M),
          (w[27] = g))
        : (g = w[27])
      let N = l.externalContentUpdate?.key
      ;(w[28] !== C || w[29] !== k || w[30] !== N
        ? ((h = [k, C, N]), (w[28] = C), (w[29] = k), (w[30] = N), (w[31] = h))
        : (h = w[31]),
        (0, o.useEffect)(g, h))
      let T = y && null == l.externalContentUpdate,
        R = r.editorKey ?? ""
      return (
        w[32] !== I || w[33] !== r || w[34] !== l.proseMirrorStore || w[35] !== S
          ? ((v = (e) =>
              (0, n.jsx)(B.K, {
                ...r,
                createEditor: I,
                editable: !1 !== r.editable && "changed" !== S,
                markdown: e,
                proseMirrorStore: l.proseMirrorStore,
              })),
            (w[32] = I),
            (w[33] = r),
            (w[34] = l.proseMirrorStore),
            (w[35] = S),
            (w[36] = v))
          : (v = w[36]),
        w[37] !== k || w[38] !== T || w[39] !== R || w[40] !== v
          ? ((x = (0, n.jsx)(E.r, { enabled: T, streamId: R, text: k, children: v })),
            (w[37] = k),
            (w[38] = T),
            (w[39] = R),
            (w[40] = v),
            (w[41] = x))
          : (x = w[41]),
        x
      )
    }
    var R = i("OWtl"),
      O = i("qOyO"),
      P = i("AhlA"),
      U = i("v9AI")
    function $(e) {
      let t,
        i,
        n,
        r,
        l,
        s,
        c,
        d = (0, a.c)(24),
        { editorView: u, revision: p } = e,
        m = (0, f.gh)(R.u),
        b = (0, f.uO)(U.$, p.id),
        g = (0, f.Ul)(b.state$),
        h = (0, f.Ul)(P.mL)
      d[0] !== b || d[1] !== p || d[2] !== h
        ? ((t = () => {
            b.update(p, h)
          }),
          (d[0] = b),
          (d[1] = p),
          (d[2] = h),
          (d[3] = t))
        : (t = d[3])
      let v = (0, o.useEffectEvent)(t)
      return (
        d[4] !== v
          ? ((i = () => {
              v()
            }),
            (d[4] = v),
            (d[5] = i))
          : (i = d[5]),
        d[6] !== b ||
        d[7] !== p.id ||
        d[8] !== p.isComplete ||
        d[9] !== p.isStreaming ||
        d[10] !== p.previousMarkdown ||
        d[11] !== p.receivedMarkdown ||
        d[12] !== h
          ? ((n = [b, p.id, p.previousMarkdown, p.receivedMarkdown, p.isStreaming, p.isComplete, h]),
            (d[6] = b),
            (d[7] = p.id),
            (d[8] = p.isComplete),
            (d[9] = p.isStreaming),
            (d[10] = p.previousMarkdown),
            (d[11] = p.receivedMarkdown),
            (d[12] = h),
            (d[13] = n))
          : (n = d[13]),
        (0, o.useEffect)(i, n),
        d[14] !== u || d[15] !== p.id || d[16] !== g
          ? ((r = () => {
              null == u || u.isDestroyed || null == g || (0, O.Y2)(u, p.id, g)
            }),
            (l = [u, p.id, g]),
            (d[14] = u),
            (d[15] = p.id),
            (d[16] = g),
            (d[17] = r),
            (d[18] = l))
          : ((r = d[17]), (l = d[18])),
        (0, o.useEffect)(r, l),
        d[19] !== u || d[20] !== p.id || d[21] !== m
          ? ((s = () => {
              if (null == u || u.isDestroyed) return
              let e = () => {
                u.state.selection.empty || (0, U.F)(m, p.id)
              }
              return (
                u.dom.addEventListener("copy", e),
                () => {
                  ;(u.dom.removeEventListener("copy", e), (0, O.dY)(u))
                }
              )
            }),
            (c = [u, p.id, m]),
            (d[19] = u),
            (d[20] = p.id),
            (d[21] = m),
            (d[22] = s),
            (d[23] = c))
          : ((s = d[22]), (c = d[23])),
        (0, o.useEffect)(s, c),
        null
      )
    }
    function V(e, t) {
      return (
        e?.write_like_me_offer_policy === "automatic" && ("email" === t || "chat_message" === t || "social_post" === t)
      )
    }
    var z = i("s1zV"),
      W = i("Or4D"),
      F = i("ZaUy"),
      G = i("VE0a"),
      Q = i("Jaao"),
      K = i("LpCf")
    function q(e) {
      let t,
        i,
        r,
        l,
        s,
        c,
        d,
        u,
        p,
        m,
        f,
        g,
        h,
        v = (0, a.c)(48),
        {
          contacts: x,
          displayMode: w,
          isEditingDisabled: y,
          labels: k,
          renderRecipientRow: C,
          values: S,
          className: j,
          layout: A,
          renderSender: E,
        } = e,
        [_, I] = (0, o.useState)(!1),
        [M, N] = (0, o.useState)(!1),
        [B, D] = (0, o.useState)(!1),
        [L, T] = (0, o.useState)(!1),
        R = (0, o.useRef)(null),
        O = (0, o.useRef)(!1)
      v[0] !== w || v[1] !== _ || v[2] !== S.cc
        ? ((t = "plain_text" === w ? ee(S.cc) : _ || ee(S.cc)), (v[0] = w), (v[1] = _), (v[2] = S.cc), (v[3] = t))
        : (t = v[3])
      let P = t
      v[4] !== w || v[5] !== M || v[6] !== S.bcc
        ? ((i = "plain_text" === w ? ee(S.bcc) : M || ee(S.bcc)), (v[4] = w), (v[5] = M), (v[6] = S.bcc), (v[7] = i))
        : (i = v[7])
      let U = i,
        $ = P || U,
        V = "tokenized" === w && !B && !L
      ;(v[8] !== B
        ? ((r = () => {
            if (!B || !O.current) return
            let e = R.current?.ownerDocument.defaultView
            if (null != e)
              return et(e, () => {
                ;((O.current = !1),
                  R.current
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
              y || ((O.current = !0), D(!0))
            }),
            (v[11] = y),
            (v[12] = s))
          : (s = v[12]))
      let z = s
      v[13] !== w || v[14] !== L
        ? ((c = (e) => {
            let t = e.relatedTarget,
              i = e.currentTarget.ownerDocument,
              n = i.defaultView
            ;(null != n &&
              t instanceof n.Node &&
              (e.currentTarget.contains(t) ||
                (t instanceof n.Element && null != t.closest("[data-writing-block-email-recipient-popover]")))) ||
              O.current ||
              et(n, () => {
                let e = i.activeElement
                R.current?.contains(e) ||
                  (null != n &&
                    e instanceof n.Element &&
                    null != e.closest("[data-writing-block-email-recipient-popover]")) ||
                  ("tokenized" !== w || L || (I(!1), N(!1)), D(!1))
              })
          }),
          (v[13] = w),
          (v[14] = L),
          (v[15] = c))
        : (c = v[15])
      let W = c
      v[16] !== x || v[17] !== w || v[18] !== y || v[19] !== C || v[20] !== S
        ? ((d = (e, t, i) =>
            C({
              contacts: x[e] ?? [],
              displayMode: w,
              field: e,
              isEditingDisabled: y,
              label: t,
              trailingContent: i,
              value: S[e],
            })),
          (v[16] = x),
          (v[17] = w),
          (v[18] = y),
          (v[19] = C),
          (v[20] = S),
          (v[21] = d))
        : (d = v[21])
      let F = d,
        G =
          "standalone" === (void 0 === A ? "standalone" : A) &&
          "mb-[calc(var(--oai-wb-spacing)*3)] border-b [border-color:var(--oai-wb-divider)]"
      return (
        v[22] !== j || v[23] !== G
          ? ((u = (0, b.A)(
              "flex flex-col divide-y-[0.5px] divide-[color:var(--oai-wb-divider)] [&>:not(:last-child)]:py-[calc(var(--oai-wb-spacing)*0.5)]",
              G,
              j,
            )),
            (v[22] = j),
            (v[23] = G),
            (v[24] = u))
          : (u = v[24]),
        v[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = () => D(!0)), (m = { ...K.w }), (v[25] = p), (v[26] = m))
          : ((p = v[25]), (m = v[26])),
        v[27] !== w || v[28] !== V || v[29] !== E
          ? ((f = E?.({ displayMode: w, isCollapsed: V, onOpenChange: T })),
            (v[27] = w),
            (v[28] = V),
            (v[29] = E),
            (v[30] = f))
          : (f = v[30]),
        v[31] !== U ||
        v[32] !== P ||
        v[33] !== x ||
        v[34] !== w ||
        v[35] !== z ||
        v[36] !== V ||
        v[37] !== y ||
        v[38] !== k ||
        v[39] !== $ ||
        v[40] !== F ||
        v[41] !== S
          ? ((g = (0, n.jsx)("div", {
              className:
                "flex flex-col divide-y-[0.5px] divide-[color:var(--oai-wb-divider)] [&>*]:py-[calc(var(--oai-wb-spacing)*0.5)]",
              children: V
                ? (0, n.jsx)(Y, {
                    isEditingDisabled: y,
                    onActivate: z,
                    placeholder: k.recipientsPlaceholder,
                    segments: (0, Q.yy)({ ...S, contacts: x }),
                  })
                : (0, n.jsxs)(n.Fragment, {
                    children: [
                      F(
                        "recipient",
                        k.recipient,
                        "plain_text" === w
                          ? null
                          : (0, n.jsx)(H, {
                              className: "flex items-end gap-[calc(var(--oai-wb-spacing)*2)]",
                              disabled: $ || y,
                              hidden: $,
                              labels: k,
                              onBccClick: () => N(!0),
                              onCcClick: () => I(!0),
                              showBcc: !0,
                              showCc: !0,
                            }),
                      ),
                      P
                        ? F(
                            "cc",
                            k.cc,
                            "plain_text" === w
                              ? null
                              : (0, n.jsx)(H, {
                                  disabled: U || y,
                                  hidden: U,
                                  labels: k,
                                  onBccClick: () => N(!0),
                                  onCcClick: () => I(!0),
                                  showBcc: !0,
                                  showCc: !1,
                                }),
                          )
                        : null,
                      U
                        ? F(
                            "bcc",
                            k.bcc,
                            "plain_text" === w
                              ? null
                              : (0, n.jsx)(H, {
                                  disabled: P || y,
                                  hidden: P,
                                  labels: k,
                                  onBccClick: () => N(!0),
                                  onCcClick: () => I(!0),
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
            (v[35] = z),
            (v[36] = V),
            (v[37] = y),
            (v[38] = k),
            (v[39] = $),
            (v[40] = F),
            (v[41] = S),
            (v[42] = g))
          : (g = v[42]),
        v[43] !== W || v[44] !== u || v[45] !== f || v[46] !== g
          ? ((h = (0, n.jsxs)("div", {
              ref: R,
              className: u,
              onBlurCapture: W,
              onFocusCapture: p,
              style: m,
              children: [f, g],
            })),
            (v[43] = W),
            (v[44] = u),
            (v[45] = f),
            (v[46] = g),
            (v[47] = h))
          : (h = v[47]),
        h
      )
    }
    function H(e) {
      let t,
        i,
        r,
        o,
        l = (0, a.c)(18),
        { disabled: s, hidden: c, labels: d, onBccClick: u, onCcClick: p, showBcc: m, showCc: f, className: g } = e,
        h = !!c || void 0,
        v = c && "pointer-events-none invisible"
      return (
        l[0] !== g || l[1] !== v ? ((t = (0, b.A)(g, v)), (l[0] = g), (l[1] = v), (l[2] = t)) : (t = l[2]),
        l[3] !== s || l[4] !== d || l[5] !== p || l[6] !== f
          ? ((i = f
              ? (0, n.jsx)("button", {
                  className:
                    "disabled:cursor-default [color:var(--oai-wb-text-secondary)] hover:[color:var(--oai-wb-text-primary)] disabled:hover:[color:var(--oai-wb-text-secondary)]",
                  disabled: s,
                  onClick: p,
                  onPointerDown: J,
                  onTouchEnd: (e) => {
                    ;(e.stopPropagation(), p())
                  },
                  type: "button",
                  children: d.ccToggle,
                })
              : null),
            (l[3] = s),
            (l[4] = d),
            (l[5] = p),
            (l[6] = f),
            (l[7] = i))
          : (i = l[7]),
        l[8] !== s || l[9] !== d || l[10] !== u || l[11] !== m
          ? ((r = m
              ? (0, n.jsx)("button", {
                  className:
                    "disabled:cursor-default [color:var(--oai-wb-text-secondary)] hover:[color:var(--oai-wb-text-primary)] disabled:hover:[color:var(--oai-wb-text-secondary)]",
                  disabled: s,
                  onClick: u,
                  onPointerDown: Z,
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
            (l[11] = m),
            (l[12] = r))
          : (r = l[12]),
        l[13] !== h || l[14] !== t || l[15] !== i || l[16] !== r
          ? ((o = (0, n.jsxs)("div", { "aria-hidden": h, className: t, children: [i, r] })),
            (l[13] = h),
            (l[14] = t),
            (l[15] = i),
            (l[16] = r),
            (l[17] = o))
          : (o = l[17]),
        o
      )
    }
    function Z(e) {
      return e.preventDefault()
    }
    function J(e) {
      return e.preventDefault()
    }
    function Y(e) {
      let t,
        i,
        r,
        o,
        l = (0, a.c)(12),
        { isEditingDisabled: s, onActivate: c, placeholder: d, segments: u } = e
      l[0] !== d || l[1] !== u
        ? ((t =
            0 === u.length
              ? (0, n.jsx)("span", { className: "[color:var(--oai-wb-text-tertiary)]", children: d })
              : u.map(X)),
          (l[0] = d),
          (l[1] = u),
          (l[2] = t))
        : (t = l[2])
      let p = t
      if (s) {
        let e
        return (
          l[3] !== p
            ? ((e = (0, n.jsx)("div", {
                className:
                  "min-h-[calc(var(--oai-wb-spacing)*8)] w-full min-w-0 border-0 bg-transparent p-0 text-start text-base leading-[calc(var(--oai-wb-spacing)*8)] break-words [color:var(--oai-wb-text-primary)]",
                children: p,
              })),
              (l[3] = p),
              (l[4] = e))
            : (e = l[4]),
          e
        )
      }
      return (
        l[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, b.A)(
              "min-h-[calc(var(--oai-wb-spacing)*8)] w-full min-w-0 border-0 bg-transparent p-0 text-start text-base leading-[calc(var(--oai-wb-spacing)*8)] break-words [color:var(--oai-wb-text-primary)]",
              "cursor-text",
            )),
            (l[5] = i))
          : (i = l[5]),
        l[6] !== c
          ? ((r = (e) => {
              ;(e.preventDefault(), c())
            }),
            (l[6] = c),
            (l[7] = r))
          : (r = l[7]),
        l[8] !== p || l[9] !== c || l[10] !== r
          ? ((o = (0, n.jsx)("button", {
              className: i,
              onClick: c,
              onFocus: c,
              onMouseDown: r,
              type: "button",
              children: p,
            })),
            (l[8] = p),
            (l[9] = c),
            (l[10] = r),
            (l[11] = o))
          : (o = l[11]),
        o
      )
    }
    function X(e, t) {
      return (0, n.jsxs)(
        "span",
        {
          children: [
            t > 0 ? ", " : null,
            e.prefix,
            (0, n.jsx)("span", {
              className: (0, b.A)(
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
    function ee(e) {
      return e.trim().length > 0
    }
    function et(e, t) {
      if (null == e) return () => void 0
      if ("function" == typeof e.requestAnimationFrame) {
        let i = e.requestAnimationFrame(t)
        return () => e.cancelAnimationFrame(i)
      }
      let i = e.setTimeout(t, 0)
      return () => e.clearTimeout(i)
    }
    var ei = i("O5ge"),
      en = i("tILS"),
      ea = i("v7qY")
    function er(e) {
      let t,
        i,
        r,
        o,
        l,
        s,
        c,
        d = (0, a.c)(22)
      if (
        (d[0] !== e
          ? (({ displayMode: t, field: i, label: o, ...r } = e),
            (d[0] = e),
            (d[1] = t),
            (d[2] = i),
            (d[3] = r),
            (d[4] = o))
          : ((t = d[1]), (i = d[2]), (r = d[3]), (o = d[4])),
        "plain_text" === t)
      ) {
        let e, t, i, a
        return (
          d[5] !== o
            ? ((e = (0, n.jsx)("div", { className: "pt-0.5 leading-8 font-medium", children: o })),
              (d[5] = o),
              (d[6] = e))
            : (e = d[6]),
          d[7] !== r.value
            ? ((t = r.value.trim().length > 0 ? r.value : null), (d[7] = r.value), (d[8] = t))
            : (t = d[8]),
          d[9] !== t
            ? ((i = (0, n.jsx)("div", {
                className: "min-w-0 flex-1 pt-0.5 leading-8 break-words [color:var(--oai-wb-text-primary)]",
                children: t,
              })),
              (d[9] = t),
              (d[10] = i))
            : (i = d[10]),
          d[11] !== e || d[12] !== i
            ? ((a = (0, n.jsxs)("div", { className: "flex min-h-9 items-start gap-2", children: [e, i] })),
              (d[11] = e),
              (d[12] = i),
              (d[13] = a))
            : (a = d[13]),
          a
        )
      }
      return (
        d[14] !== o
          ? ((l = (0, n.jsx)("div", { className: "pt-0.5 leading-8 font-medium", children: o })),
            (d[14] = o),
            (d[15] = l))
          : (l = d[15]),
        d[16] !== i || d[17] !== r
          ? ((s = (0, n.jsx)(eo, { ...r, inputName: i })), (d[16] = i), (d[17] = r), (d[18] = s))
          : (s = d[18]),
        d[19] !== l || d[20] !== s
          ? ((c = (0, n.jsxs)("div", { className: "flex min-h-9 items-start gap-2", children: [l, s] })),
            (d[19] = l),
            (d[20] = s),
            (d[21] = c))
          : (c = d[21]),
        c
      )
    }
    function eo({
      avatarFallbackColors: e,
      contacts: t,
      copiedIcon: i,
      copyIcon: a,
      getContactsForQuery: r,
      getContactQueryStatus: l,
      inputName: s = "writing-block-email-recipient",
      isEditingDisabled: c,
      ariaLabels: d,
      loadingContacts: u,
      onCopyEmail: p,
      onMetadataChange: m,
      onContactSelected: f,
      onSearch: g,
      onValueChange: h,
      portalContainer: v,
      removeIcon: x,
      trailingContent: w,
      value: y,
    }) {
      let k = (0, o.useId)(),
        [C, S] = (0, o.useState)(() => ep(y, t)),
        [j, A] = (0, o.useState)(!1),
        [E, _] = (0, o.useState)(!1),
        [I, M] = (0, o.useState)(0),
        [N, B] = (0, o.useState)(null),
        D = (0, o.useRef)(null),
        L = (0, o.useRef)(!1),
        T = (0, o.useRef)(null),
        R = (0, o.useRef)(m),
        O = (0, o.useRef)(h),
        { refs: P, floatingStyles: U } = (0, ei.we)({
          middleware: [
            (0, ei.cY)({ alignmentAxis: -14, mainAxis: 8 }),
            (0, ei.UU)({ padding: 8 }),
            (0, ei.BN)({ padding: 8 }),
            (0, ei.Ej)({
              apply({ availableHeight: e, elements: t }) {
                t.floating.style.maxHeight = `${Math.max(0, e)}px`
              },
              padding: 8,
            }),
          ],
          placement: "bottom-start",
          strategy: "fixed",
          whileElementsMounted: en.ll,
        }),
        $ = P.reference
      ;((R.current = m), (O.current = h))
      let V = () => {
        null != T.current && (clearTimeout(T.current), (T.current = null))
      }
      ;((0, o.useEffect)(() => {
        L.current || S(ep(y, t))
      }, [t, y]),
        (0, o.useEffect)(() => V, []))
      let z = (e, t, i) => {
          let n,
            a,
            r = em(e)
          ;(S({ tokens: r, inputValue: t }),
            (n = (0, Q.mI)(r, t)),
            (a = (0, Q.kJ)(
              n,
              r.map((e) => e.contact ?? { email: e.email }),
            )),
            V(),
            i
              ? O.current(n)
              : (T.current = setTimeout(() => {
                  ;((T.current = null), O.current(n))
                }, 300)),
            R.current(n, a, i))
        },
        W = () => {
          let e = ep(C.inputValue)
          ;(z([...C.tokens, ...e.tokens], e.inputValue, !0), A(!0))
        },
        F = r(C.inputValue)
          .filter((e) => !C.tokens.some((t) => t.email.trim().toLowerCase() === e.email.trim().toLowerCase()))
          .slice(0, 7),
        G = l?.(C.inputValue) ?? "idle",
        q = ep(C.inputValue),
        H = "pending" === G,
        Z = !c && E && (F.length > 0 || H),
        J = Z ? `${k}-option-${I}` : void 0
      ;(0, o.useEffect)(() => {
        P.floating.current?.querySelector('[aria-selected="true"]')?.scrollIntoView?.({ block: "nearest" })
      }, [I, Z, F.length])
      let Y = (e) => {
          let t = { id: e.id ?? e.email, email: e.email, contact: e }
          ;(z([...C.tokens, t], "", !0), f?.(), g(""), _(!1), eu(D.current, () => $.current?.focus()))
        },
        X = $.current?.ownerDocument,
        ee = (v !== X?.body ? v : null) ?? $.current?.closest('dialog, [role="dialog"]') ?? X?.body
      return (0, n.jsxs)("div", {
        ref: D,
        className: "relative min-h-9 min-w-0 flex-1 [color:var(--oai-wb-text-primary)]",
        onBlurCapture: (e) => {
          let t = e.relatedTarget,
            i = e.currentTarget.ownerDocument.defaultView
          ;(!(
            null != i &&
            t instanceof i.Node &&
            (e.currentTarget.contains(t) ||
              (t instanceof i.Element && null != t.closest("[data-writing-block-email-recipient-popover]")))
          ) ||
            (t instanceof i.Element && null != t.closest('[data-recipient-row-trailing="true"]'))) &&
            eu(D.current, () => {
              let e = D.current?.ownerDocument.activeElement
              D.current?.contains(e ?? null) ||
                (null != i &&
                  e instanceof i.Element &&
                  null != e.closest("[data-writing-block-email-recipient-popover]")) ||
                ((L.current = !1), _(!1), B(null), W())
            })
        },
        onFocusCapture: () => {
          L.current = !0
        },
        onPointerDown: (e) => {
          let t = e.currentTarget.ownerDocument.defaultView
          null != t &&
            e.target instanceof t.Element &&
            null ==
              e.target.closest(
                '[data-recipient-row-trailing="true"], button, [role="button"], [role="option"], input',
              ) &&
            (e.preventDefault(), $.current?.focus())
        },
        children: [
          (0, n.jsxs)("div", {
            className: "flex min-h-9 cursor-text flex-wrap items-start gap-y-1 overflow-y-auto",
            children: [
              C.tokens.map((t, r) =>
                (0, n.jsx)(
                  es,
                  {
                    avatarFallbackColors: e,
                    copiedIcon: i,
                    copyIcon: a,
                    isEditingDisabled: c,
                    isOpen: !c && N === t.id,
                    ariaLabels: d,
                    onCopyEmail: p,
                    onOpenChange: (e) => B(e ? t.id : null),
                    onRemove: () => {
                      ;(z(
                        C.tokens.filter((e, t) => t !== r),
                        C.inputValue,
                        !0,
                      ),
                        eu(D.current, () => $.current?.focus()))
                    },
                    removeIcon: x,
                    token: t,
                  },
                  t.id,
                ),
              ),
              (0, n.jsx)("input", {
                ref: P.setReference,
                "aria-activedescendant": J,
                "aria-autocomplete": "list",
                "aria-controls": k,
                "aria-expanded": Z,
                "aria-label": d.input,
                role: "combobox",
                autoComplete: "off",
                className: (0, b.A)(
                  "m-0 mt-0.5 min-w-[2px] flex-1 border-none bg-transparent p-0 text-base leading-8 shadow-none ring-0 outline-hidden focus:border-transparent focus:shadow-none focus:ring-0 focus:outline-hidden focus-visible:ring-0 focus-visible:outline-hidden",
                  C.tokens.length > 0 && "ms-2",
                  j &&
                    q.inputValue.length > 0 &&
                    "[text-decoration-line:underline] [text-decoration-style:wavy] [text-decoration-thickness:1px] [text-decoration-color:var(--oai-wb-danger,var(--text-status-error))] [text-decoration-skip-ink:none]",
                ),
                disabled: c,
                name: s,
                onChange: (e) => {
                  let t = e.target.value
                  ;((L.current = !0), z(C.tokens, t, !1), g(t), _(!0), M(0))
                },
                onFocus: () => {
                  ;((L.current = !0), A(!1), _(!0), M(0), g(C.inputValue))
                },
                onKeyDown: (e) => {
                  if (!e.nativeEvent.isComposing) {
                    if ("ArrowDown" === e.key && F.length > 0) {
                      ;(e.preventDefault(), _(!0), M((e) => Math.min(e + 1, F.length - 1)))
                      return
                    }
                    if ("ArrowUp" === e.key && F.length > 0) {
                      ;(e.preventDefault(), M((e) => Math.max(e - 1, 0)))
                      return
                    }
                    if ("Enter" === e.key && E && null != F[I]) {
                      ;(e.preventDefault(), Y(F[I]))
                      return
                    }
                    if (("," === e.key || "Enter" === e.key) && q.tokens.length > 0) {
                      ;(e.preventDefault(), W(), g(""), _(!1))
                      return
                    }
                    if ("Backspace" === e.key && 0 === C.inputValue.length && C.tokens.length > 0)
                      return void z(C.tokens.slice(0, -1), "", !0)
                    "Escape" === e.key && (_(!1), B(null))
                  }
                },
                value: C.inputValue,
              }),
              null == w
                ? null
                : (0, n.jsx)("div", {
                    className: "flex min-h-9 items-start gap-2 pt-0.5",
                    "data-recipient-row-trailing": "true",
                    children: w,
                  }),
            ],
          }),
          Z && null != ee
            ? (0, n.jsx)(el, {
                className:
                  "z-[var(--wb-menu-z-index,70)] w-80 max-w-full rounded-2xl [background:var(--oai-wb-surface-primary)] shadow-[0_0_0_1px_hsla(0,0%,0%,0.1),0_4px_11px_hsla(0,0%,0%,0.1)]",
                container: ee,
                floatingRef: P.setFloating,
                style: { ...K.w, ...U },
                children: (0, n.jsx)("div", {
                  className: "max-h-[inherit] overflow-y-auto p-1",
                  "data-writing-block-email-recipient-popover": "",
                  id: k,
                  role: "listbox",
                  children:
                    H && 0 === F.length
                      ? (0, n.jsxs)("div", {
                          "aria-live": "polite",
                          className: "flex min-h-16 items-center gap-3 px-3 py-3 [color:var(--oai-wb-text-secondary)]",
                          role: "status",
                          children: [
                            (0, n.jsx)("span", {
                              "aria-hidden": "true",
                              className:
                                "size-5 animate-spin rounded-full border-2 border-current border-e-transparent",
                            }),
                            (0, n.jsx)("span", { children: u }),
                          ],
                        })
                      : F.map((t, i) =>
                          (0, n.jsxs)(
                            "button",
                            {
                              "aria-selected": i === I,
                              className: (0, b.A)(
                                "flex h-12 w-full cursor-pointer items-center gap-2 rounded-xl border-0 bg-transparent px-2 text-start",
                                i === I && "[background:var(--oai-wb-interactive-secondary-hover)]",
                              ),
                              id: `${k}-option-${i}`,
                              onClick: () => Y(t),
                              onMouseEnter: () => M(i),
                              onPointerDown: (e) => e.preventDefault(),
                              role: "option",
                              type: "button",
                              children: [
                                (0, n.jsx)(ec, { colors: e, contact: t, label: d.recipientAvatar, size: "suggestion" }),
                                (0, n.jsxs)("span", {
                                  className: "flex min-w-0 flex-col justify-center leading-tight",
                                  children: [
                                    (0, n.jsx)("span", { className: "truncate text-sm", children: t.email }),
                                    t.name?.trim()
                                      ? (0, n.jsx)("span", {
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
    function el(e) {
      let t,
        i,
        r,
        o,
        l,
        s = (0, a.c)(10)
      return (
        s[0] !== e
          ? (({ container: t, floatingRef: i, ...r } = e), (s[0] = e), (s[1] = t), (s[2] = i), (s[3] = r))
          : ((t = s[1]), (i = s[2]), (r = s[3])),
        s[4] !== i || s[5] !== r
          ? ((o = (0, n.jsx)("div", { ...r, ref: i })), (s[4] = i), (s[5] = r), (s[6] = o))
          : (o = s[6]),
        s[7] !== t || s[8] !== o ? ((l = (0, ea.createPortal)(o, t)), (s[7] = t), (s[8] = o), (s[9] = l)) : (l = s[9]),
        l
      )
    }
    function es({
      avatarFallbackColors: e,
      copiedIcon: t,
      copyIcon: i,
      isEditingDisabled: a,
      isOpen: r,
      ariaLabels: l,
      onCopyEmail: s,
      onOpenChange: c,
      onRemove: d,
      removeIcon: u,
      token: p,
    }) {
      let [m, f] = (0, o.useState)(!1),
        g = (0, o.useRef)(null),
        h = (0, o.useRef)(null),
        v = (0, o.useRef)(null),
        x = (0, o.useRef)(c)
      x.current = c
      let w = p.contact ?? { email: p.email },
        y = "string" == typeof w.id && "string" == typeof w.name,
        k = (w.name?.trim() ? w.name : null) ?? p.email,
        { refs: C, floatingStyles: S } = (0, ei.we)({
          middleware: [(0, ei.cY)(4), (0, ei.UU)(), (0, ei.BN)({ padding: 8 })],
          placement: "bottom-start",
          whileElementsMounted: en.ll,
        }),
        j = C.setReference,
        A = C.setFloating
      ;((0, o.useEffect)(
        () => () => {
          null != v.current && clearTimeout(v.current)
        },
        [],
      ),
        (0, o.useEffect)(() => {
          if (!r) return
          let e = g.current,
            t = h.current,
            i = e?.ownerDocument,
            n = i?.defaultView
          if (null == e || null == t || null == i || null == n) return
          let a = () => {
              x.current(!1)
            },
            o = (t) => {
              "Escape" === t.key && (t.preventDefault(), t.stopPropagation(), a(), e.focus())
            },
            l = (i) => {
              i.target instanceof n.Node && (e.contains(i.target) || t.contains(i.target) || a())
            }
          return (
            i.addEventListener("keydown", o),
            i.addEventListener("pointerdown", l, !0),
            () => {
              ;(i.removeEventListener("keydown", o), i.removeEventListener("pointerdown", l, !0))
            }
          )
        }, [r]))
      let E = (0, n.jsxs)("div", {
          className: "group/email flex min-w-0 items-center gap-1 [color:var(--oai-wb-text-secondary)]",
          children: [
            (0, n.jsx)("div", {
              className: (0, b.A)("min-w-0 truncate", y ? "text-lg" : "text-base"),
              children: p.email,
            }),
            null == s
              ? null
              : (0, n.jsx)("button", {
                  "aria-label": m ? l.copiedEmail : l.copyEmail,
                  className:
                    "shrink-0 rounded-md border-0 bg-transparent p-1 opacity-0 transition-opacity group-hover/email:opacity-100 focus-visible:opacity-100 hover:[background:var(--oai-wb-surface-secondary)] hover:[color:var(--oai-wb-text-primary)] focus-visible:[background:var(--oai-wb-surface-secondary)] focus-visible:[color:var(--oai-wb-text-primary)]",
                  onClick: (e) => {
                    null != s &&
                      (e.stopPropagation(),
                      Promise.resolve(s(p.email, e)).then(
                        () => {
                          ;(null != v.current && clearTimeout(v.current),
                            f(!0),
                            (v.current = setTimeout(() => {
                              ;((v.current = null), f(!1))
                            }, 2e3)))
                        },
                        () => void 0,
                      ))
                  },
                  type: "button",
                  children: m ? t : i,
                }),
          ],
        }),
        _ = g.current?.ownerDocument
      return (0, n.jsxs)("div", {
        className: (0, b.A)(
          "mx-0.5 mt-0.5 mb-0 inline-flex h-8 items-center gap-1 rounded-[24px] border bg-transparent pe-2 py-0 text-base [border-color:var(--oai-wb-divider)] data-[state=open]:[background:var(--oai-wb-divider)]",
          y ? "ps-1" : "ps-[9px]",
          a ? "cursor-default" : "cursor-pointer hover:[background:var(--oai-wb-interactive-secondary-hover)]",
        ),
        "data-state": r ? "open" : void 0,
        children: [
          (0, n.jsxs)("div", {
            ref: (e) => {
              ;((g.current = e), j(e))
            },
            "aria-disabled": a || void 0,
            "aria-expanded": r,
            "aria-haspopup": "dialog",
            "aria-label": k,
            className: (0, b.A)(
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
              y ? (0, n.jsx)(ec, { colors: e, contact: w, label: l.recipientAvatar, size: "chip" }) : null,
              (0, n.jsx)("span", { className: "min-w-0 truncate leading-5", children: k }),
            ],
          }),
          (0, n.jsx)("button", {
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
          r && null != _
            ? (0, ea.createPortal)(
                (0, n.jsx)("div", {
                  ref: (e) => {
                    ;((h.current = e), A(e))
                  },
                  "aria-label": k,
                  className: "z-[calc(var(--wb-menu-z-index,70)+1)] [font-family:var(--oai-wb-font-sans)]",
                  "data-writing-block-email-recipient-popover": "",
                  role: "dialog",
                  style: { ...K.w, ...S },
                  children: y
                    ? (0, n.jsxs)("div", {
                        className:
                          "flex w-[320px] items-center gap-4 rounded-2xl border p-5 [background:var(--oai-wb-surface-primary)] [border-color:var(--oai-wb-divider)] [box-shadow:0_8px_24px_rgba(0,0,0,0.08)]",
                        children: [
                          (0, n.jsx)(ec, { colors: e, contact: w, label: l.recipientAvatar, size: "large" }),
                          (0, n.jsxs)("div", {
                            className: "min-w-0",
                            children: [
                              (0, n.jsx)("div", { className: "truncate text-lg font-medium", children: w.name }),
                              E,
                            ],
                          }),
                        ],
                      })
                    : (0, n.jsx)("div", {
                        className:
                          "w-[260px] rounded-2xl border p-3 [background:var(--oai-wb-surface-primary)] [border-color:var(--oai-wb-divider)] [box-shadow:0_8px_24px_rgba(0,0,0,0.08)]",
                        children: E,
                      }),
                }),
                _.body,
              )
            : null,
        ],
      })
    }
    function ec(e) {
      let t,
        i,
        r,
        l,
        s,
        c = (0, a.c)(19),
        { colors: d, contact: u, label: p, size: m } = e,
        [f, g] = (0, o.useState)(!1),
        h = "large" === m ? "h-12 w-12 text-lg" : "suggestion" === m ? "h-7 w-7 text-sm" : "h-6 w-6 text-sm"
      if (null != u.avatar_url && !f) {
        let e, t, i
        return (
          c[0] !== h
            ? ((e = (0, b.A)("block shrink-0 rounded-full object-cover", h)), (c[0] = h), (c[1] = e))
            : (e = c[1]),
          c[2] === Symbol.for("react.memo_cache_sentinel") ? ((t = () => g(!0)), (c[2] = t)) : (t = c[2]),
          c[3] !== u.avatar_url || c[4] !== e
            ? ((i = (0, n.jsx)("img", {
                alt: "",
                className: e,
                onError: t,
                referrerPolicy: "no-referrer",
                src: u.avatar_url,
              })),
              (c[3] = u.avatar_url),
              (c[4] = e),
              (c[5] = i))
            : (i = c[5]),
          i
        )
      }
      c[6] !== d ? ((t = d?.length ? d : ["var(--oai-wb-accent)"]), (c[6] = d), (c[7] = t)) : (t = c[7])
      let v = t,
        x = u.email,
        w = Array.from(x).reduce(ed, 0)
      c[8] !== h
        ? ((i = (0, b.A)("flex shrink-0 items-center justify-center rounded-full font-medium text-white", h)),
          (c[8] = h),
          (c[9] = i))
        : (i = c[9])
      let y = v[w % v.length]
      return (
        c[10] !== y ? ((r = { backgroundColor: y }), (c[10] = y), (c[11] = r)) : (r = c[11]),
        c[12] !== x ? ((l = x.trim().charAt(0).toUpperCase() || "?"), (c[12] = x), (c[13] = l)) : (l = c[13]),
        c[14] !== p || c[15] !== i || c[16] !== r || c[17] !== l
          ? ((s = (0, n.jsx)("span", { "aria-label": p, className: i, role: "img", style: r, children: l })),
            (c[14] = p),
            (c[15] = i),
            (c[16] = r),
            (c[17] = l),
            (c[18] = s))
          : (s = c[18]),
        s
      )
    }
    function ed(e, t) {
      return e + t.charCodeAt(0)
    }
    function eu(e, t) {
      let i = e?.ownerDocument.defaultView
      i?.requestAnimationFrame == null ? setTimeout(t, 0) : i.requestAnimationFrame(t)
    }
    function ep(e, t = []) {
      let { recipients: i, unfinishedValue: n } = (0, Q.DA)(e, t)
      return { inputValue: n, tokens: em(i.map((e) => ({ id: e.email, email: e.email, contact: e }))) }
    }
    function em(e) {
      return e.map((e, t) => ({ ...e, id: `${e.email}::${t}` }))
    }
    function eb(e) {
      let t,
        i,
        r = (0, a.c)(30),
        {
          ariaLabels: o,
          avatarFallbackColors: l,
          contacts: s,
          displayMode: c,
          getContactsForQuery: d,
          getContactQueryStatus: u,
          icons: p,
          isEditingDisabled: m,
          labels: b,
          onContactSelected: f,
          onCopyEmail: g,
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
        r[10] !== p.copied ||
        r[11] !== p.copy ||
        r[12] !== p.remove ||
        r[13] !== m ||
        r[14] !== b.loadingContacts ||
        r[15] !== f ||
        r[16] !== g ||
        r[17] !== h ||
        r[18] !== v ||
        r[19] !== x ||
        r[20] !== w
          ? ((t = (e) => {
              let { contacts: t, displayMode: i, field: a, label: r, trailingContent: s, value: c } = e
              return (0, n.jsx)(er, {
                ariaLabels: {
                  copiedEmail: o.copiedEmail,
                  copyEmail: o.copyEmail,
                  input: "recipient" === a ? o.recipientInput : "cc" === a ? o.ccInput : o.bccInput,
                  recipientAvatar: o.recipientAvatar,
                  removeRecipient: o.removeRecipient,
                },
                avatarFallbackColors: l,
                contacts: t,
                copiedIcon: p.copied,
                copyIcon: p.copy,
                displayMode: i,
                field: a,
                getContactsForQuery: d,
                getContactQueryStatus: u,
                isEditingDisabled: m,
                label: r,
                loadingContacts: b.loadingContacts,
                onContactSelected: () => f?.(a),
                onCopyEmail: g,
                onMetadataChange: (e, t, i) => h(a, e, t, i),
                onSearch: v,
                onValueChange: (e) => x(a, e),
                portalContainer: w,
                removeIcon: p.remove,
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
            (r[10] = p.copied),
            (r[11] = p.copy),
            (r[12] = p.remove),
            (r[13] = m),
            (r[14] = b.loadingContacts),
            (r[15] = f),
            (r[16] = g),
            (r[17] = h),
            (r[18] = v),
            (r[19] = x),
            (r[20] = w),
            (r[21] = t))
          : (t = r[21]),
        r[22] !== s || r[23] !== c || r[24] !== m || r[25] !== b || r[26] !== y || r[27] !== t || r[28] !== k
          ? ((i = (0, n.jsx)(q, {
              contacts: s,
              displayMode: c,
              isEditingDisabled: m,
              labels: b,
              renderRecipientRow: t,
              renderSender: y,
              values: k,
            })),
            (r[22] = s),
            (r[23] = c),
            (r[24] = m),
            (r[25] = b),
            (r[26] = y),
            (r[27] = t),
            (r[28] = k),
            (r[29] = i))
          : (i = r[29]),
        i
      )
    }
    function ef(e) {
      let t,
        i,
        r,
        o,
        l,
        s,
        c,
        d,
        u,
        p,
        m,
        f,
        g = (0, a.c)(37),
        {
          isSubjectEditable: h,
          recipientFields: v,
          subject: x,
          subjectLabel: w,
          dividerClassName: y,
          recipientClassName: k,
          recipientStyle: C,
          subjectClassName: S,
          subjectPlaceholder: j,
          subjectStyle: A,
          onBlur: E,
          onSubjectChange: _,
        } = e
      g[0] !== _
        ? ((t = (e) => {
            _?.(e.target.value)
          }),
          (g[0] = _),
          (g[1] = t))
        : (t = g[1])
      let I = t,
        M = null != v
      g[2] !== M || g[3] !== k || g[4] !== v || g[5] !== C
        ? ((i = M
            ? (0, n.jsx)("div", {
                className: (0, b.A)("[&>:where(:not(:first-child))]:mt-0", k),
                style: { ...K.w, ...C },
                children: v,
              })
            : null),
          (g[2] = M),
          (g[3] = k),
          (g[4] = v),
          (g[5] = C),
          (g[6] = i))
        : (i = g[6])
      let N = M && "mt-1"
      ;(g[7] !== S || g[8] !== N
        ? ((r = (0, b.A)("pt-0 pb-3 leading-normal", N, S)), (g[7] = S), (g[8] = N), (g[9] = r))
        : (r = g[9]),
        g[10] !== A ? ((o = { ...K.w, ...A }), (g[10] = A), (g[11] = o)) : (o = g[11]))
      let B = !h
      g[12] !== I || g[13] !== E || g[14] !== x || g[15] !== w || g[16] !== j || g[17] !== B
        ? ((l = (0, n.jsx)("textarea", {
            "aria-label": w,
            className:
              "col-start-1 col-end-2 row-start-1 row-end-2 w-full min-w-0 resize-none overflow-hidden border-none bg-transparent p-0 break-words whitespace-pre-wrap placeholder:[color:var(--oai-wb-text-tertiary)] focus:border-transparent focus:ring-0 focus:outline-hidden",
            disabled: B,
            maxLength: 240,
            name: "subject",
            onBlur: E,
            onChange: I,
            onCopy: eg,
            placeholder: j,
            rows: 1,
            value: x,
          })),
          (g[12] = I),
          (g[13] = E),
          (g[14] = x),
          (g[15] = w),
          (g[16] = j),
          (g[17] = B),
          (g[18] = l))
        : (l = g[18])
      let D = `${x} `
      return (
        g[19] !== D
          ? ((s = (0, n.jsx)("span", {
              className:
                "invisible col-start-1 col-end-2 row-start-1 row-end-2 min-w-0 p-0 break-words whitespace-pre-wrap",
              children: D,
            })),
            (g[19] = D),
            (g[20] = s))
          : (s = g[20]),
        g[21] !== l || g[22] !== s
          ? ((c = (0, n.jsxs)("div", { className: "grid", children: [l, s] })), (g[21] = l), (g[22] = s), (g[23] = c))
          : (c = g[23]),
        g[24] !== c || g[25] !== r || g[26] !== o
          ? ((d = (0, n.jsx)("div", { className: r, style: o, children: c })),
            (g[24] = c),
            (g[25] = r),
            (g[26] = o),
            (g[27] = d))
          : (d = g[27]),
        g[28] !== y
          ? ((u = (0, b.A)("mx-4 my-0! border-t! [border-color:var(--oai-wb-divider)]! md:mx-5", y)),
            (g[28] = y),
            (g[29] = u))
          : (u = g[29]),
        g[30] === Symbol.for("react.memo_cache_sentinel") ? ((p = { ...K.w }), (g[30] = p)) : (p = g[30]),
        g[31] !== u ? ((m = (0, n.jsx)("hr", { className: u, style: p })), (g[31] = u), (g[32] = m)) : (m = g[32]),
        g[33] !== d || g[34] !== m || g[35] !== i
          ? ((f = (0, n.jsxs)(n.Fragment, { children: [i, d, m] })), (g[33] = d), (g[34] = m), (g[35] = i), (g[36] = f))
          : (f = g[36]),
        f
      )
    }
    function eg(e) {
      return e.stopPropagation()
    }
    var eh = i("F1DZ")
    let ev = [],
      ex = {},
      ew = [
        "var(--color-chart-blue)",
        "var(--color-chart-green)",
        "var(--color-chart-yellow)",
        "var(--color-chart-orange)",
        "var(--color-chart-purple)",
        "var(--color-chart-red)",
      ],
      ey = () => void 0,
      ek = () => ev
    function eC(e) {
      let t,
        i,
        r,
        l,
        s,
        c,
        d,
        u,
        p,
        m,
        b,
        f,
        g,
        v,
        x,
        w,
        y,
        C,
        S,
        j,
        A,
        E,
        _,
        I,
        M,
        N,
        B = (0, a.c)(89),
        {
          contacts: D,
          getContactsForQuery: L,
          isRecipientEditable: T,
          isSubjectEditable: R,
          metadata: O,
          onBlur: P,
          onRecipientChange: U,
          onRecipientMetadataChange: $,
          onSearch: V,
          onSubjectChange: z,
          renderSender: W,
          subjectKey: Q,
        } = e,
        K = void 0 === D ? ex : D,
        q = void 0 === L ? ek : L,
        H = void 0 === V ? ey : V,
        Z = (0, h.A)(),
        J = O?.bcc ?? "",
        Y = O?.cc ?? "",
        X = O?.recipient ?? ""
      B[0] !== J || B[1] !== Y || B[2] !== X
        ? ((t = { bcc: J, cc: Y, recipient: X }), (B[0] = J), (B[1] = Y), (B[2] = X), (B[3] = t))
        : (t = B[3])
      let ee = t
      B[4] === Symbol.for("react.memo_cache_sentinel") ? ((i = {}), (B[4] = i)) : (i = B[4])
      let [et, ei] = (0, o.useState)(i),
        en = et.bcc?.source === ee.bcc ? et.bcc.value : ee.bcc,
        ea = et.cc?.source === ee.cc ? et.cc.value : ee.cc,
        er = et.recipient?.source === ee.recipient ? et.recipient.value : ee.recipient
      B[5] !== ea || B[6] !== er || B[7] !== en
        ? ((r = { bcc: en, cc: ea, recipient: er }), (B[5] = ea), (B[6] = er), (B[7] = en), (B[8] = r))
        : (r = B[8])
      let eo = r
      B[9] !== ee
        ? ((l = (e, t) => {
            ei((i) => ({ ...i, [e]: { source: ee[e], value: t } }))
          }),
          (B[9] = ee),
          (B[10] = l))
        : (l = B[10])
      let el = l,
        es = O?.subject ?? "",
        [ec, ed] = (0, o.useState)(null),
        eu = ec?.key === Q && ec?.source === es ? ec.value : es
      B[11] !== z || B[12] !== es || B[13] !== Q
        ? ((s = (e) => {
            ;(ed({ key: Q, source: es, value: e }), z?.(e))
          }),
          (B[11] = z),
          (B[12] = es),
          (B[13] = Q),
          (B[14] = s))
        : (s = B[14])
      let ep = s
      ;(B[15] !== Z
        ? ((c = Z.formatMessage({
            id: "codex.writingBlock.email.recipient.field.bcc.label",
            defaultMessage: "Bcc",
            description:
              "Short field label for the blind-carbon-copy recipient line in a shared Codex Apps email writing block used by local Codex threads and Quick Chat. It appears to the left of the recipient input without punctuation; use the locale's standard abbreviation.",
          })),
          (B[15] = Z),
          (B[16] = c))
        : (c = B[16]),
        B[17] !== Z
          ? ((d = Z.formatMessage({
              id: "codex.writingBlock.email.recipient.toggle.bcc.label",
              defaultMessage: "Bcc",
              description:
                "Short button label that reveals the blind-carbon-copy recipient line in a shared Codex Apps email writing block used by local Codex threads and Quick Chat. Use the locale's standard abbreviation.",
            })),
            (B[17] = Z),
            (B[18] = d))
          : (d = B[18]),
        B[19] !== Z
          ? ((u = Z.formatMessage({
              id: "codex.writingBlock.email.recipient.field.cc.label",
              defaultMessage: "Cc",
              description:
                "Short field label for the carbon-copy recipient line in a shared Codex Apps email writing block used by local Codex threads and Quick Chat. It appears to the left of the recipient input without punctuation; use the locale's standard abbreviation.",
            })),
            (B[19] = Z),
            (B[20] = u))
          : (u = B[20]),
        B[21] !== Z
          ? ((p = Z.formatMessage({
              id: "codex.writingBlock.email.recipient.toggle.cc.label",
              defaultMessage: "Cc",
              description:
                "Short button label that reveals the carbon-copy recipient line in a shared Codex Apps email writing block used by local Codex threads and Quick Chat. Use the locale's standard abbreviation.",
            })),
            (B[21] = Z),
            (B[22] = p))
          : (p = B[22]),
        B[23] !== Z
          ? ((m = Z.formatMessage({
              id: "codex.writingBlock.email.recipient.field.to.label",
              defaultMessage: "To",
              description:
                "Short field label for the primary recipient line in a shared Codex Apps email writing block used by local Codex threads and Quick Chat. It appears to the left of the recipient input without punctuation; use the locale's standard email-client label.",
            })),
            (B[23] = Z),
            (B[24] = m))
          : (m = B[24]),
        B[25] !== Z
          ? ((b = Z.formatMessage({
              id: "codex.writingBlock.email.recipient.empty.placeholder",
              defaultMessage: "Recipients",
              description:
                "Placeholder in the collapsed recipient row of a shared Codex Apps email writing block used by local Codex threads and Quick Chat. It appears when the To, Cc, and Bcc fields are all empty.",
            })),
            (B[25] = Z),
            (B[26] = b))
          : (b = B[26]),
        B[27] !== c || B[28] !== d || B[29] !== u || B[30] !== p || B[31] !== m || B[32] !== b
          ? ((f = { bcc: c, bccToggle: d, cc: u, ccToggle: p, recipient: m, recipientsPlaceholder: b }),
            (B[27] = c),
            (B[28] = d),
            (B[29] = u),
            (B[30] = p),
            (B[31] = m),
            (B[32] = b),
            (B[33] = f))
          : (f = B[33]))
      let em = f
      B[34] !== Z
        ? ((g = Z.formatMessage({
            id: "codex.writingBlock.email.subject.field.label",
            defaultMessage: "Subject",
            description:
              "Short field label for the subject line in a shared Codex Apps email writing block used by local Codex threads and Quick Chat. The label may also prefix copied subject text.",
          })),
          (B[34] = Z),
          (B[35] = g))
        : (g = B[35])
      let eg = g
      ;(B[36] !== Z
        ? ((v = Z.formatMessage({
            id: "codex.writingBlock.email.recipient.input.ariaLabel.to",
            defaultMessage: "To recipients",
            description:
              "Accessible label for the To recipient input in a Codex Apps email writing block. Users type or select the primary email recipients here; this label is announced by assistive technology and is not visible.",
          })),
          (B[36] = Z),
          (B[37] = v))
        : (v = B[37]),
        B[38] !== Z
          ? ((x = Z.formatMessage({
              id: "codex.writingBlock.email.recipient.input.ariaLabel.cc",
              defaultMessage: "Cc recipients",
              description:
                "Accessible label for the Cc recipient input in a Codex Apps email writing block. Users type or select carbon-copy recipients here; this label is announced by assistive technology and is not visible.",
            })),
            (B[38] = Z),
            (B[39] = x))
          : (x = B[39]),
        B[40] !== Z
          ? ((w = Z.formatMessage({
              id: "codex.writingBlock.email.recipient.input.ariaLabel.bcc",
              defaultMessage: "Bcc recipients",
              description:
                "Accessible label for the Bcc recipient input in a Codex Apps email writing block. Users type or select blind-carbon-copy recipients here; this label is announced by assistive technology and is not visible.",
            })),
            (B[40] = Z),
            (B[41] = w))
          : (w = B[41]),
        B[42] !== Z
          ? ((y = Z.formatMessage({
              id: "codex.writingBlock.email.recipient.contact.copy.ariaLabel.copied",
              defaultMessage: "Copied email address",
              description:
                "Accessible confirmation label on a recipient contact card after the user copies its email address in a Codex Apps email writing block. It is not visible text.",
            })),
            (B[42] = Z),
            (B[43] = y))
          : (y = B[43]),
        B[44] !== Z
          ? ((C = Z.formatMessage({
              id: "codex.writingBlock.email.recipient.contact.copy.ariaLabel.action",
              defaultMessage: "Copy email address",
              description:
                "Accessible label for the button that copies a recipient's email address from a contact card in a Codex Apps email writing block. It is not visible text.",
            })),
            (B[44] = Z),
            (B[45] = C))
          : (C = B[45]),
        B[46] !== Z
          ? ((S = Z.formatMessage({
              id: "codex.writingBlock.email.recipient.contact.avatar.ariaLabel",
              defaultMessage: "Profile avatar",
              description:
                "Accessible label for a recipient's profile avatar in a Codex Apps email writing block contact chip or suggestion. It is not visible text.",
            })),
            (B[46] = Z),
            (B[47] = S))
          : (S = B[47]),
        B[48] !== v || B[49] !== x || B[50] !== w || B[51] !== y || B[52] !== C || B[53] !== S
          ? ((j = { recipient: v, cc: x, bcc: w, copiedEmail: y, copyEmail: C, recipientAvatar: S }),
            (B[48] = v),
            (B[49] = x),
            (B[50] = w),
            (B[51] = y),
            (B[52] = C),
            (B[53] = S),
            (B[54] = j))
          : (j = B[54]))
      let ev = j
      ;(B[55] !== Z
        ? ((A = (e) =>
            Z.formatMessage(
              {
                id: "codex.writingBlock.email.recipient.contact.remove.ariaLabel",
                defaultMessage: "Remove {recipient}",
                description:
                  "Accessible label for the button that removes a recipient chip from a Codex Apps email writing block. Placeholder {recipient} is the displayed contact name or email address; this label is not visible text.",
              },
              { recipient: e },
            )),
          (B[55] = Z),
          (B[56] = A))
        : (A = B[56]),
        B[57] !== ev.bcc ||
        B[58] !== ev.cc ||
        B[59] !== ev.copiedEmail ||
        B[60] !== ev.copyEmail ||
        B[61] !== ev.recipient ||
        B[62] !== ev.recipientAvatar ||
        B[63] !== A
          ? ((E = {
              bccInput: ev.bcc,
              ccInput: ev.cc,
              copiedEmail: ev.copiedEmail,
              copyEmail: ev.copyEmail,
              recipientAvatar: ev.recipientAvatar,
              recipientInput: ev.recipient,
              removeRecipient: A,
            }),
            (B[57] = ev.bcc),
            (B[58] = ev.cc),
            (B[59] = ev.copiedEmail),
            (B[60] = ev.copyEmail),
            (B[61] = ev.recipient),
            (B[62] = ev.recipientAvatar),
            (B[63] = A),
            (B[64] = E))
          : (E = B[64]))
      let eC = T ? "tokenized" : "plain_text"
      B[65] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = {
            copied: (0, n.jsx)(k.I, { "aria-hidden": !1, asset: F.G }),
            copy: (0, n.jsx)(k.I, { "aria-hidden": !1, asset: G.r }),
            remove: (0, n.jsx)(eh.A, { className: "icon-sm" }),
          }),
          (B[65] = _))
        : (_ = B[65])
      let ej = !T
      return (
        B[66] !== P || B[67] !== U || B[68] !== $
          ? ((I = (e, t, i, n) => {
              ;(n && U?.(e, t), $?.(e, t, i, n), n && P?.())
            }),
            (B[66] = P),
            (B[67] = U),
            (B[68] = $),
            (B[69] = I))
          : (I = B[69]),
        B[70] !== K ||
        B[71] !== q ||
        B[72] !== el ||
        B[73] !== H ||
        B[74] !== em ||
        B[75] !== eo ||
        B[76] !== W ||
        B[77] !== E ||
        B[78] !== eC ||
        B[79] !== ej ||
        B[80] !== I
          ? ((M = (0, n.jsx)(eb, {
              ariaLabels: E,
              avatarFallbackColors: ew,
              contacts: K,
              displayMode: eC,
              getContactsForQuery: q,
              icons: _,
              isEditingDisabled: ej,
              labels: em,
              onCopyEmail: eS,
              onMetadataChange: I,
              onSearch: H,
              onValueChange: el,
              renderSender: W,
              values: eo,
            })),
            (B[70] = K),
            (B[71] = q),
            (B[72] = el),
            (B[73] = H),
            (B[74] = em),
            (B[75] = eo),
            (B[76] = W),
            (B[77] = E),
            (B[78] = eC),
            (B[79] = ej),
            (B[80] = I),
            (B[81] = M))
          : (M = B[81]),
        B[82] !== ep || B[83] !== R || B[84] !== P || B[85] !== eu || B[86] !== eg || B[87] !== M
          ? ((N = (0, n.jsx)(ef, {
              isSubjectEditable: R,
              onBlur: P,
              onSubjectChange: ep,
              recipientClassName: "ps-4 pe-4 sm:ps-5 md:pe-5",
              recipientFields: M,
              subject: eu,
              subjectClassName: "ps-4 pe-3 sm:ps-5 sm:pe-2 md:pe-10",
              subjectLabel: eg,
              subjectPlaceholder: eg,
            })),
            (B[82] = ep),
            (B[83] = R),
            (B[84] = P),
            (B[85] = eu),
            (B[86] = eg),
            (B[87] = M),
            (B[88] = N))
          : (N = B[88]),
        N
      )
    }
    function eS(e, t) {
      return (0, M.E)(e, t)
    }
    var ej = i("q1q2"),
      eA = i("ixaN"),
      eE = i("wD9O"),
      e_ = i("hdt5")
    function eI(e) {
      let t,
        i,
        r,
        l,
        s,
        c,
        d,
        u,
        p,
        m,
        b,
        f,
        g,
        h,
        v,
        x,
        w,
        y,
        k = (0, a.c)(43),
        { editorView: C, suggestion: S } = e,
        j = (0, eE.dz)(),
        A = (0, o.useRef)(null)
      ;(k[0] !== S.mode
        ? ((t = () => {
            "picker" === S.mode && A.current?.focus()
          }),
          (i = [S.mode]),
          (k[0] = S.mode),
          (k[1] = t),
          (k[2] = i))
        : ((t = k[1]), (i = k[2])),
        (0, o.useEffect)(t, i),
        k[3] !== C || k[4] !== S.from
          ? ((r = {
              contextElement: C.dom,
              getBoundingClientRect() {
                if (!C.isDestroyed)
                  try {
                    let { left: e, bottom: t } = C.coordsAtPos(S.from)
                    return DOMRect.fromRect({ x: e, y: t })
                  } catch {}
                return C.dom.getBoundingClientRect()
              },
            }),
            (k[3] = C),
            (k[4] = S.from),
            (k[5] = r))
          : (r = k[5]))
      let E = r
      ;(k[6] !== E ? ((l = { reference: E }), (k[6] = E), (k[7] = l)) : (l = k[7]),
        k[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, ej.cY)(8)),
            (c = (0, ej.UU)({ padding: 8 })),
            (d = (0, ej.BN)({ padding: 8 })),
            (k[8] = s),
            (k[9] = c),
            (k[10] = d))
          : ((s = k[8]), (c = k[9]), (d = k[10])),
        k[11] !== j
          ? ((u = (0, ej.Ej)({
              padding: 8,
              apply(e) {
                let { availableHeight: t, availableWidth: i, elements: n } = e
                ;((n.floating.style.maxWidth = `${i}px`),
                  n.floating.style.setProperty("--autocomplete-overlay-available-height", `${t / j}px`))
              },
            })),
            (k[11] = j),
            (k[12] = u))
          : (u = k[12]),
        k[13] !== u ? ((p = [s, c, d, u]), (k[13] = u), (k[14] = p)) : (p = k[14]))
      let _ = !C.isDestroyed
      k[15] !== _ || k[16] !== l || k[17] !== p
        ? ((m = { elements: l, middleware: p, open: _, placement: "bottom-start", whileElementsMounted: en.ll }),
          (k[15] = _),
          (k[16] = l),
          (k[17] = p),
          (k[18] = m))
        : (m = k[18])
      let { floatingStyles: I, refs: M } = (0, ej.we)(m),
        { setFloating: N } = M
      if (C.isDestroyed) return null
      let B = 1 !== j ? j : void 0
      return (
        k[19] !== B ? ((b = { zoom: B }), (k[19] = B), (k[20] = b)) : (b = k[20]),
        k[21] === Symbol.for("react.memo_cache_sentinel") ? ((f = { emoji: {} }), (k[21] = f)) : (f = k[21]),
        k[22] !== C ? ((g = () => (0, eA.HU)(C)), (k[22] = C), (k[23] = g)) : (g = k[23]),
        k[24] !== C || k[25] !== S
          ? ((h = (e) => {
              "emoji" !== e.kind || C.isDestroyed || (C.focus(), (0, eA.te)(C, e.value, S))
            }),
            (k[24] = C),
            (k[25] = S),
            (k[26] = h))
          : (h = k[26]),
        k[27] !== C.dom || k[28] !== S.mode || k[29] !== S.query || k[30] !== g || k[31] !== h
          ? ((v = (0, n.jsx)(
              e_.c,
              { capabilities: f, keyboardTarget: C.dom, inputRef: A, query: S.query, onDismiss: g, onSelect: h },
              S.mode,
            )),
            (k[27] = C.dom),
            (k[28] = S.mode),
            (k[29] = S.query),
            (k[30] = g),
            (k[31] = h),
            (k[32] = v))
          : (v = k[32]),
        k[33] !== b || k[34] !== v
          ? ((x = (0, n.jsx)("div", { style: b, children: v })), (k[33] = b), (k[34] = v), (k[35] = x))
          : (x = k[35]),
        k[36] !== I || k[37] !== N || k[38] !== x
          ? ((w = (0, n.jsx)("div", {
              ref: N,
              className: "z-50",
              "data-writing-block-emoji-picker": !0,
              style: I,
              children: x,
            })),
            (k[36] = I),
            (k[37] = N),
            (k[38] = x),
            (k[39] = w))
          : (w = k[39]),
        k[40] !== C.dom.ownerDocument.body || k[41] !== w
          ? ((y = (0, ea.createPortal)(w, C.dom.ownerDocument.body)),
            (k[40] = C.dom.ownerDocument.body),
            (k[41] = w),
            (k[42] = y))
          : (y = k[42]),
        y
      )
    }
    var eM = i("DPfl"),
      eN = i("KL0B"),
      eB = i("OBAr"),
      eD = i("GTmQ")
    function eL(e) {
      let t,
        i,
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
              onMouseDown: eT,
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
          ? ((i = l.showRedoButton
              ? c({
                  action: "redo",
                  disabled: !0 === l.isInteractionDisabled || !l.canRedo,
                  label: s.redoButton,
                  onClick: l.onRedo,
                  onMouseDown: eT,
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
            (o[13] = i))
          : (i = o[13]),
        o[14] !== t || o[15] !== i
          ? ((r = (0, n.jsxs)(n.Fragment, { children: [t, i] })), (o[14] = t), (o[15] = i), (o[16] = r))
          : (r = o[16]),
        r
      )
    }
    function eT(e) {
      e.preventDefault()
    }
    var eR = i("Sm6l")
    function eO(e) {
      let t,
        i,
        r,
        l,
        s,
        c,
        d,
        u,
        p,
        m,
        b,
        f = (0, a.c)(41),
        { editorView: g, historySummary: v, isEditable: x, isInteractionDisabled: w, presentation: y } = e,
        k = (0, h.A)(),
        [C, S] = (0, o.useState)(null)
      f[0] !== k
        ? ((t = k.formatMessage({
            id: "codex.writingBlock.history.undo.button.tooltip",
            defaultMessage: "Undo",
            description:
              "Short tooltip for the Undo button in the header of a shared editable Codex Apps writing block used by local Codex threads and Quick Chat.",
          })),
          (f[0] = k),
          (f[1] = t))
        : (t = f[1])
      let j = t
      f[2] !== k
        ? ((i = k.formatMessage({
            id: "codex.writingBlock.history.undo.button.ariaLabel",
            defaultMessage: "Undo last edit",
            description:
              "Short accessible label for the Undo button in the header of a shared editable Codex Apps writing block used by local Codex threads and Quick Chat. Activating it restores the previous direct edit.",
          })),
          (f[2] = k),
          (f[3] = i))
        : (i = f[3])
      let A = i
      f[4] !== k
        ? ((r = k.formatMessage({
            id: "codex.writingBlock.history.redo.button.tooltip",
            defaultMessage: "Redo",
            description:
              "Short tooltip for the Redo button in the header of a shared editable Codex Apps writing block used by local Codex threads and Quick Chat.",
          })),
          (f[4] = k),
          (f[5] = r))
        : (r = f[5])
      let E = r
      f[6] !== k
        ? ((l = k.formatMessage({
            id: "codex.writingBlock.history.redo.button.ariaLabel",
            defaultMessage: "Redo last edit",
            description:
              "Short accessible label for the Redo button in the header of a shared editable Codex Apps writing block used by local Codex threads and Quick Chat. Activating it restores the direct edit that was most recently undone.",
          })),
          (f[6] = k),
          (f[7] = l))
        : (l = f[7])
      let _ = l
      f[8] !== g || f[9] !== x || f[10] !== w
        ? ((s = () => {
            x && !w && null != g && !g.isDestroyed && (0, eD.zT)(g.state, g.dispatch, g) && S(g)
          }),
          (f[8] = g),
          (f[9] = x),
          (f[10] = w),
          (f[11] = s))
        : (s = f[11])
      let I = s
      f[12] !== g || f[13] !== x || f[14] !== w
        ? ((c = () => {
            !x || w || null == g || g.isDestroyed || (0, eD.ZF)(g.state, g.dispatch, g)
          }),
          (f[12] = g),
          (f[13] = x),
          (f[14] = w),
          (f[15] = c))
        : (c = f[15])
      let M = c
      if ("viewer" === (void 0 === y ? "inline" : y)) {
        let e,
          t = !x || w
        return (
          f[16] !== M || f[17] !== I || f[18] !== v.canRedo || f[19] !== v.canUndo || f[20] !== t
            ? ((e = (0, n.jsx)(N.vI, { canRedo: v.canRedo, canUndo: v.canUndo, disabled: t, onRedo: M, onUndo: I })),
              (f[16] = M),
              (f[17] = I),
              (f[18] = v.canRedo),
              (f[19] = v.canUndo),
              (f[20] = t),
              (f[21] = e))
            : (e = f[21]),
          e
        )
      }
      if (!v.canUndo && !v.canRedo) return null
      let B = v.canUndo || v.canRedo,
        D = !x || w,
        L = v.canRedo || (null != C && C === g)
      return (
        f[22] !== M ||
        f[23] !== I ||
        f[24] !== v.canRedo ||
        f[25] !== v.canUndo ||
        f[26] !== L ||
        f[27] !== B ||
        f[28] !== D
          ? ((d = {
              canRedo: v.canRedo,
              canUndo: v.canUndo,
              hasSessionEdits: B,
              isInteractionDisabled: D,
              onRedo: M,
              onUndo: I,
              showRedoButton: L,
            }),
            (f[22] = M),
            (f[23] = I),
            (f[24] = v.canRedo),
            (f[25] = v.canUndo),
            (f[26] = L),
            (f[27] = B),
            (f[28] = D),
            (f[29] = d))
          : (d = f[29]),
        f[30] !== _ || f[31] !== E || f[32] !== A || f[33] !== j
          ? ((u = { redoButton: _, redoTooltip: E, undoButton: A, undoTooltip: j }),
            (f[30] = _),
            (f[31] = E),
            (f[32] = A),
            (f[33] = j),
            (f[34] = u))
          : (u = f[34]),
        f[35] !== d || f[36] !== u
          ? ((p = (0, n.jsx)(eL, { controls: d, labels: u, renderButton: eP })), (f[35] = d), (f[36] = u), (f[37] = p))
          : (p = f[37]),
        f[38] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, n.jsx)("div", { "aria-hidden": "true", className: "mx-1.5 h-3.5 w-px shrink-0 bg-border" })),
            (f[38] = m))
          : (m = f[38]),
        f[39] !== p
          ? ((b = (0, n.jsxs)("div", { className: "flex items-center", children: [p, m] })), (f[39] = p), (f[40] = b))
          : (b = f[40]),
        b
      )
    }
    function eP(e) {
      let { action: t, disabled: i, label: a, onClick: r, onMouseDown: o, tooltip: s } = e
      return (0, n.jsx)(l.m, {
        sideOffset: 0,
        content: s,
        children: (0, n.jsx)(eR.$, {
          "aria-label": a,
          color: "ghostActive",
          disabled: i,
          onClick: r,
          onMouseDown: o,
          size: "imageToolbar",
          uniform: !0,
          children: (0, n.jsx)(k.I, {
            className: (0, b.A)("redo" === t && "-scale-x-100"),
            "aria-hidden": !1,
            asset: eB.T,
          }),
        }),
      })
    }
    var eU = i("JIxO"),
      e$ = i("ozm1"),
      eV = i("ksPB")
    function ez({
      activeOptionId: e,
      ariaLabel: t,
      options: i,
      className: a,
      chevronIcon: r,
      disabled: l = !1,
      onOptionChange: s,
      placement: c = "body",
      renderMenu: d,
    }) {
      let u = (0, o.useRef)(null),
        p = (0, o.useId)(),
        m = (0, o.useRef)(null),
        f = (0, o.useRef)(!1),
        [g, h] = (0, o.useState)(!1),
        [v, x] = (0, o.useState)(!1),
        w = null != d,
        y = JSON.stringify(i.map((e) => e.id)),
        k = w && (g || v)
      if (
        ((0, o.useLayoutEffect)(() => {
          let e,
            t = u.current
          if (!w || null == t) return
          let i = () => {
            let i = t.scrollWidth > t.clientWidth
            i !== e &&
              ((e = i), (f.current = t.contains(document.activeElement) || m.current === document.activeElement), h(i))
          }
          if ((i(), "u" < typeof ResizeObserver)) return
          let n = new ResizeObserver(i)
          for (let e of (n.observe(t), t.children)) n.observe(e)
          return () => n.disconnect()
        }, [w, y]),
        (0, o.useLayoutEffect)(() => {
          if (!f.current) return
          f.current = !1
          let e = document.activeElement,
            t = requestAnimationFrame(() => {
              ;(document.activeElement === e || document.activeElement === document.body) &&
                (k ? m.current?.focus() : u.current?.querySelector('[aria-selected="true"]')?.focus())
            })
          return () => cancelAnimationFrame(t)
        }, [k]),
        0 === i.length)
      )
        return null
      let C = Math.max(
          0,
          i.findIndex((t) => t.id === e),
        ),
        S = i[C]
      return (0, n.jsxs)("div", {
        className: (0, b.A)(
          "relative min-w-0",
          "body" === c
            ? "px-[calc(var(--oai-wb-spacing)*4)] pt-[calc(var(--oai-wb-spacing)*2)] pb-0 [border-bottom:1px_solid_var(--oai-wb-divider)]"
            : "flex-[1_1_auto]",
          a,
        ),
        style: { ...K.w },
        children: [
          (0, n.jsx)("div", {
            "aria-label": t,
            "aria-hidden": k || void 0,
            className: (0, b.A)(
              "mx-[calc(var(--oai-wb-spacing)*-1)] flex min-w-0 gap-[var(--oai-wb-spacing)] overflow-x-auto overflow-y-hidden px-[var(--oai-wb-spacing)]",
              k && "invisible",
              "body" === c
                ? "mt-[calc(var(--oai-wb-spacing)*-1)] pt-[var(--oai-wb-spacing)] pb-[calc(var(--oai-wb-spacing)*2)]"
                : "my-[calc(var(--oai-wb-spacing)*-1)] py-[var(--oai-wb-spacing)]",
            ),
            inert: k || void 0,
            ref: u,
            role: "tablist",
            children: i.map((t, i) => {
              var a
              let r,
                o = t.id === e,
                d = l || !0 === t.disabled,
                u = !0 === t.isGenerating
              return (0, n.jsx)(
                "button",
                {
                  "aria-selected": o,
                  className: (0, b.A)(
                    "flex-[0_1_auto] rounded-full border-0 px-[calc(var(--oai-wb-spacing)*3)] whitespace-nowrap [font-family:inherit] [font-stretch:inherit] [font-style:inherit] [font-variant:inherit] font-medium first:ms-auto focus-visible:[outline:2px_solid_var(--oai-wb-focus)] focus-visible:[outline-offset:1px]",
                    "body" === c
                      ? "block h-[calc(var(--oai-wb-spacing)*7)] py-[calc(var(--oai-wb-spacing)*1.5)] text-[0.75rem] [align-items:normal]"
                      : "flex h-[calc(var(--oai-wb-spacing)*9)] items-center py-0 [font-size:var(--oai-wb-font-size)]",
                    "header" === c && 0 === i && "ms-auto",
                    d && u
                      ? "cursor-not-allowed [background:var(--oai-wb-surface-primary)] [color:var(--oai-wb-text-tertiary)]"
                      : (0, b.A)(
                          d ? "cursor-not-allowed opacity-50" : "cursor-pointer",
                          o
                            ? "[background:var(--oai-wb-surface-secondary)] [color:var(--oai-wb-text-primary)]"
                            : (0, b.A)(
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
                  children: (0, n.jsxs)("span", {
                    className: (0, b.A)(
                      "inline-flex items-center gap-[var(--oai-wb-spacing)]",
                      u && "cursor-not-allowed",
                      t.labelClassName,
                    ),
                    "data-testid": "writing-block-option-tab-label",
                    children: [
                      (0, n.jsx)("span", {
                        className: "inline-flex items-center text-[1.2em] leading-none",
                        children: eW(i),
                      }),
                      " ",
                      "string" == typeof t.label
                        ? (r = Array.from((a = t.label))).length <= 24
                          ? a
                          : `${r.slice(0, 23).join("").trimEnd()}…`
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
            (0, n.jsx)("div", {
              className: (0, b.A)(
                "absolute flex min-w-0 justify-end",
                "body" === c
                  ? "inset-x-[calc(var(--oai-wb-spacing)*4)] top-[calc(var(--oai-wb-spacing)*2)]"
                  : "inset-x-0 top-0",
              ),
              children: d({
                activeOptionId: e,
                disabled: l,
                options: i.map((e, t) => ({
                  ...e,
                  textValue: e.textValue ?? ("string" == typeof e.label ? e.label : void 0),
                  label: (0, n.jsxs)("span", {
                    className: "inline-flex max-w-full min-w-0 items-center gap-[var(--oai-wb-spacing)]",
                    style: K.w,
                    children: [
                      (0, n.jsx)("span", {
                        className: "inline-flex shrink-0 items-center text-[1.2em] leading-none",
                        children: eW(t),
                      }),
                      " ",
                      (0, n.jsx)("span", { className: "min-w-0 wrap-anywhere", children: e.label }),
                    ],
                  }),
                })),
                onOptionChange: s,
                onOpenChange: (e) => {
                  if (!e && !g) {
                    let e = document.activeElement
                    f.current = e === m.current || e?.closest('[role="menu"]') != null
                  }
                  x(e)
                },
                trigger: (0, n.jsxs)("button", {
                  "aria-label": t,
                  "aria-describedby": p,
                  "aria-busy": S?.isLoading,
                  className: (0, b.A)(
                    "flex max-w-full items-center gap-[var(--oai-wb-spacing)] rounded-full border-0 px-[calc(var(--oai-wb-spacing)*3)] [background:var(--oai-wb-surface-secondary)] [color:var(--oai-wb-text-primary)] [font-family:inherit] font-medium focus-visible:[outline:2px_solid_var(--oai-wb-focus)] focus-visible:[outline-offset:1px]",
                    "body" === c
                      ? "h-[calc(var(--oai-wb-spacing)*7)] text-[0.75rem]"
                      : "h-[calc(var(--oai-wb-spacing)*9)] [font-size:var(--oai-wb-font-size)]",
                    l ? "cursor-not-allowed opacity-50" : "cursor-pointer",
                  ),
                  disabled: l,
                  "data-loading": S?.isLoading || void 0,
                  ref: m,
                  type: "button",
                  children: [
                    (0, n.jsxs)("span", {
                      className: (0, b.A)(
                        "inline-flex min-w-0 items-center gap-[var(--oai-wb-spacing)]",
                        S?.labelClassName,
                      ),
                      id: p,
                      children: [
                        (0, n.jsx)("span", {
                          className: "inline-flex shrink-0 items-center text-[1.2em] leading-none",
                          children: eW(C),
                        }),
                        " ",
                        (0, n.jsx)("span", { className: "truncate", children: S?.label }),
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
    function eW(e) {
      let t = e + 1
      return t > 20 ? `${t}.` : String.fromCodePoint(9312 + e)
    }
    let eF = "__writing-block-original__"
    function eG(e) {
      let t,
        i,
        r,
        o,
        l,
        s,
        c,
        d = (0, a.c)(53),
        {
          actionOption: u,
          ariaLabel: p,
          className: m,
          chevronIcon: b,
          disabled: f,
          isLoadingOptions: g,
          loadingLabelClassName: h,
          loadingOptionLabel: v,
          onOptionClick: x,
          onSelectionChange: w,
          options: y,
          originalLabel: k,
          placement: C,
          primaryOptionLabel: S,
          selection: j,
          renderMenu: A,
        } = e,
        E = void 0 !== f && f,
        _ = void 0 !== g && g,
        I = void 0 === C ? "body" : C,
        M = S ?? y[0]?.label
      d[0] !== v || d[1] !== y || d[2] !== M
        ? ((t = null != v && (M === v || y.some((e) => e.label === v))), (d[0] = v), (d[1] = y), (d[2] = M), (d[3] = t))
        : (t = d[3])
      let N = t,
        B = _ && null != v && !N
      if (!(y.length > 0 || B || null != u || null != M)) return null
      d[4] !== _ || d[5] !== v || d[6] !== M
        ? ((i = eq(M, v, _)), (d[4] = _), (d[5] = v), (d[6] = M), (d[7] = i))
        : (i = d[7])
      let D = i,
        L = M ?? k,
        T = D ? h : void 0
      if (
        (d[8] !== D || d[9] !== L || d[10] !== T
          ? ((r = { id: eF, isLoading: D, label: L, labelClassName: T }),
            (d[8] = D),
            (d[9] = L),
            (d[10] = T),
            (d[11] = r))
          : (r = d[11]),
        d[12] !== u || d[13] !== _ || d[14] !== h || d[15] !== v || d[16] !== y || d[17] !== B || d[18] !== r)
      ) {
        let e
        if (
          (d[20] !== _ || d[21] !== h || d[22] !== v
            ? ((e = (e, t) => {
                let i = eq(e.label, v, _)
                return { id: eQ(e.id, t + 1), isLoading: i, label: e.label, labelClassName: i ? h : void 0 }
              }),
              (d[20] = _),
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
            i = u.isLoading
          d[27] !== u.id ? ((e = eK(u.id)), (d[27] = u.id), (d[28] = e)) : (e = d[28])
          let n = u.isLoading ? h : void 0
          ;(d[29] !== u.isLoading || d[30] !== u.label || d[31] !== e || d[32] !== n
            ? ((t = {
                disabled: i,
                id: e,
                isGenerating: u.isLoading,
                isLoading: u.isLoading,
                label: u.label,
                labelClassName: n,
              }),
              (d[29] = u.isLoading),
              (d[30] = u.label),
              (d[31] = e),
              (d[32] = n),
              (d[33] = t))
            : (t = d[33]),
            o.push(t))
        }
        ;((d[12] = u), (d[13] = _), (d[14] = h), (d[15] = v), (d[16] = y), (d[17] = B), (d[18] = r), (d[19] = o))
      } else o = d[19]
      d[34] !== u || d[35] !== j
        ? ((l = u?.isActive === !0 ? eK(u.id) : j.isOriginal ? eF : eQ(j.id, j.index)),
          (d[34] = u),
          (d[35] = j),
          (d[36] = l))
        : (l = d[36])
      let R = l
      return (
        d[37] !== u || d[38] !== x || d[39] !== w || d[40] !== y || d[41] !== M
          ? ((s = (e) => {
              if (null != u && e === eK(u.id)) return void u.onAction()
              if (e === eF) {
                let e = { isOriginal: !0 }
                ;(null != M && x?.({ index: 0, label: M, selection: e }), w(e))
                return
              }
              let t = y.findIndex((t, i) => eQ(t.id, i) === e),
                i = y[t]
              if (null == i || t < 1) return
              let n = { id: i.id, index: t, isOriginal: !1 }
              ;(x?.({ index: t, label: i.label, selection: n }), w(n))
            }),
            (d[37] = u),
            (d[38] = x),
            (d[39] = w),
            (d[40] = y),
            (d[41] = M),
            (d[42] = s))
          : (s = d[42]),
        d[43] !== R ||
        d[44] !== p ||
        d[45] !== b ||
        d[46] !== m ||
        d[47] !== E ||
        d[48] !== I ||
        d[49] !== A ||
        d[50] !== s ||
        d[51] !== o
          ? ((c = (0, n.jsx)(ez, {
              activeOptionId: R,
              ariaLabel: p,
              className: m,
              chevronIcon: b,
              disabled: E,
              onOptionChange: s,
              options: o,
              placement: I,
              renderMenu: A,
            })),
            (d[43] = R),
            (d[44] = p),
            (d[45] = b),
            (d[46] = m),
            (d[47] = E),
            (d[48] = I),
            (d[49] = A),
            (d[50] = s),
            (d[51] = o),
            (d[52] = c))
          : (c = d[52]),
        c
      )
    }
    function eQ(e, t) {
      return `${e}:${t}`
    }
    function eK(e) {
      return `__writing-block-action__:${e}`
    }
    function eq(e, t, i) {
      return i && null != e && null != t && t === e
    }
    var eH = i("yC2B"),
      eZ = i("yGJW")
    function eJ(e) {
      let t,
        i,
        r,
        o,
        l,
        s,
        c,
        u,
        p,
        m,
        g,
        v,
        x,
        y,
        k,
        S,
        j,
        A,
        E = (0, a.c)(76),
        {
          activeSectionId: _,
          isWriteLikeMeSubmitting: I,
          libraryFileId: M,
          metadata: N,
          onSelect: B,
          onWriteLikeMeAction: D,
          sections: L,
          content: T,
          variant: O,
        } = e,
        P = void 0 !== I && I,
        U = (0, f.gh)(R.u),
        $ = (0, h.A)()
      if (
        E[0] !== _ ||
        E[1] !== T ||
        E[2] !== $ ||
        E[3] !== P ||
        E[4] !== M ||
        E[5] !== N ||
        E[6] !== B ||
        E[7] !== D ||
        E[8] !== U ||
        E[9] !== L ||
        E[10] !== O
      ) {
        c = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            a,
            b,
            f,
            h,
            w,
            S = (0, d.I$)(N)
          ;(E[26] !== N || E[27] !== O ? ((e = V(N, O)), (E[26] = N), (E[27] = O), (E[28] = e)) : (e = E[28]),
            (i = e),
            (o = $.formatMessage({
              id: "codex.writingBlock.toneVariants.original",
              defaultMessage: "Original",
              description:
                "Short tab label above a writing block editor. Selecting it restores the original draft after a Write Like Me rewrite. Keep the label compact.",
            })))
          let j = S.findIndex(d.Vz),
            A = S[j],
            I = N?.[d.uV] === !0
          E[29] !== $
            ? ((a = $.formatMessage({
                id: "codex.writingBlock.toneVariants.writeLikeMe",
                defaultMessage: "Write Like Me",
                description:
                  "Short action label in the writing-style tabs above a Codex Apps writing-block editor. Selecting it rewrites the current draft using the signed-in user's saved personal writing style.",
              })),
              (E[29] = $),
              (E[30] = a))
            : (a = E[30])
          let R = a
          r = L?.flatMap((e) =>
            e.id === d.LL ? [{ ...e, tone: o }] : I || !(0, d.Vz)({ id: e.id, label: e.tone }) ? [e] : [],
          )
          let z = r?.findIndex((e) => e.id === _) ?? -1
          ;((l = z > 0 ? { id: _, index: z, isOriginal: !1 } : { isOriginal: !0 }),
            E[31] !== N ? ((b = (0, d.ie)(N)), (E[31] = N), (E[32] = b)) : (b = E[32]))
          let W = b
          E[33] !== W || E[34] !== N
            ? ((f = (0, d.UI)(N)), (h = W && (0, d.AL)(f)), (E[33] = W), (E[34] = N), (E[35] = f), (E[36] = h))
            : ((f = E[35]), (h = E[36]))
          let F = h
          E[37] !== S ||
          E[38] !== i ||
          E[39] !== T ||
          E[40] !== F ||
          E[41] !== I ||
          E[42] !== P ||
          E[43] !== D ||
          E[44] !== R ||
          E[45] !== A ||
          E[46] !== j
            ? ((w =
                null != D && !I && (null != A || F || i)
                  ? {
                      id: d.GK,
                      isActive: P,
                      isLoading: P || F,
                      label: R,
                      onAction: () => {
                        P ||
                          F ||
                          (null != A
                            ? D({ id: A.id, index: j })
                            : i &&
                              null != T &&
                              D(
                                { id: d.GK, index: 0 === S.length ? 1 : S.length },
                                0 === S.length ? { primaryOption: { id: d.LL, label: "Original", content: T } } : {},
                              ))
                      },
                    }
                  : void 0),
              (E[37] = S),
              (E[38] = i),
              (E[39] = T),
              (E[40] = F),
              (E[41] = I),
              (E[42] = P),
              (E[43] = D),
              (E[44] = R),
              (E[45] = A),
              (E[46] = j),
              (E[47] = w))
            : (w = E[47])
          let G = w
          if ((r?.length ?? 0) < 2 && null == G && !W) {
            c = null
            break e
          }
          ;((t = eG),
            (u = G),
            E[48] !== $
              ? ((p = $.formatMessage({
                  id: "codex.writingBlock.toneVariants.tabs.ariaLabel",
                  defaultMessage: "Writing style variants",
                  description:
                    "Accessible label for the tone-variant tabs in a shared Codex Apps writing block used by local Codex threads and Quick Chat. Selecting a tab switches the editor to a generated writing style variant.",
                })),
                (E[48] = $),
                (E[49] = p))
              : (p = E[49]),
            E[50] === Symbol.for("react.memo_cache_sentinel")
              ? ((m = (0, n.jsx)(C.Aq_, {})), (E[50] = m))
              : (m = E[50]),
            (g = P),
            (v = W),
            (x = F ? void 0 : f),
            E[51] !== M || E[52] !== U
              ? ((y = (e) => {
                  let { index: t, label: i } = e,
                    n = U.get(eZ.YV)
                  n.isChatgptBrowserReplacement &&
                    n.logProductEvent(eV.lq, { optionIndex: (0, e$.At)(t), optionLabel: i, libraryFileId: M })
                }),
                (E[51] = M),
                (E[52] = U),
                (E[53] = y))
              : (y = E[53]),
            (k = (e) => {
              let t = e.isOriginal ? r?.[0] : r?.[e.index]?.id === e.id ? r[e.index] : void 0
              null != t && B(t.id)
            }),
            (s = r?.map((e) => ({ id: e.id, label: (0, d.Vz)({ id: e.id, label: e.tone }) ? R : e.tone })) ?? []))
        }
        ;((E[0] = _),
          (E[1] = T),
          (E[2] = $),
          (E[3] = P),
          (E[4] = M),
          (E[5] = N),
          (E[6] = B),
          (E[7] = D),
          (E[8] = U),
          (E[9] = L),
          (E[10] = O),
          (E[11] = t),
          (E[12] = i),
          (E[13] = r),
          (E[14] = o),
          (E[15] = l),
          (E[16] = s),
          (E[17] = c),
          (E[18] = u),
          (E[19] = p),
          (E[20] = m),
          (E[21] = g),
          (E[22] = v),
          (E[23] = x),
          (E[24] = y),
          (E[25] = k))
      } else
        ((t = E[11]),
          (i = E[12]),
          (r = E[13]),
          (o = E[14]),
          (l = E[15]),
          (s = E[16]),
          (c = E[17]),
          (u = E[18]),
          (p = E[19]),
          (m = E[20]),
          (g = E[21]),
          (v = E[22]),
          (x = E[23]),
          (y = E[24]),
          (k = E[25]))
      if (c !== Symbol.for("react.early_return_sentinel")) return c
      let z = r?.[0]?.tone ?? o
      return (
        E[54] !== i || E[55] !== r?.[0]?.id || E[56] !== N || E[57] !== o
          ? ((S = r?.[0]?.id === d.LL ? o : ((0, d.d2)(N) ?? (i ? o : void 0))),
            (E[54] = i),
            (E[55] = r?.[0]?.id),
            (E[56] = N),
            (E[57] = o),
            (E[58] = S))
          : (S = E[58]),
        E[59] !== $.locale
          ? ((j = (e) => {
              let { activeOptionId: t, disabled: i, onOpenChange: a, onOptionChange: r, options: o, trigger: l } = e
              return (0, n.jsx)(w.Ab, {
                align: "end",
                contentWidth: "menuBounded",
                dir: (0, eH.b)($.locale),
                disabled: i,
                onOpenChange: a,
                triggerButton: l,
                children: (0, n.jsx)(w.ms.RadioGroup, {
                  value: t,
                  children: o.map((e) =>
                    (0, n.jsx)(
                      w.ms.RadioItem,
                      {
                        "aria-busy": e.isLoading,
                        "data-generating": e.isGenerating || void 0,
                        "data-loading": e.isLoading || void 0,
                        disabled: i || e.disabled,
                        onSelect: () => r(e.id),
                        textValue: e.textValue,
                        value: e.id,
                        children: (0, n.jsx)("span", {
                          className: (0, b.A)(e.labelClassName, e.isLoading && "loading-shimmer-pure-text"),
                          children: e.label,
                        }),
                      },
                      e.id,
                    ),
                  ),
                }),
              })
            }),
            (E[59] = $.locale),
            (E[60] = j))
          : (j = E[60]),
        E[61] !== t ||
        E[62] !== l ||
        E[63] !== s ||
        E[64] !== z ||
        E[65] !== S ||
        E[66] !== j ||
        E[67] !== u ||
        E[68] !== p ||
        E[69] !== m ||
        E[70] !== g ||
        E[71] !== v ||
        E[72] !== x ||
        E[73] !== y ||
        E[74] !== k
          ? ((A = (0, n.jsx)(t, {
              actionOption: u,
              ariaLabel: p,
              chevronIcon: m,
              disabled: g,
              isLoadingOptions: v,
              loadingOptionLabel: x,
              onOptionClick: y,
              onSelectionChange: k,
              options: s,
              originalLabel: z,
              placement: "header",
              primaryOptionLabel: S,
              renderMenu: j,
              selection: l,
            })),
            (E[61] = t),
            (E[62] = l),
            (E[63] = s),
            (E[64] = z),
            (E[65] = S),
            (E[66] = j),
            (E[67] = u),
            (E[68] = p),
            (E[69] = m),
            (E[70] = g),
            (E[71] = v),
            (E[72] = x),
            (E[73] = y),
            (E[74] = k),
            (E[75] = A))
          : (A = E[75]),
        A
      )
    }
    let eY = "writing-block-open-link-mode"
    function eX(e) {
      let t,
        i,
        r,
        g,
        y,
        I,
        B,
        D,
        L,
        R,
        O,
        P,
        U,
        F,
        G,
        Q,
        K,
        q,
        H,
        Z,
        J,
        Y,
        X,
        ee,
        et,
        ei = (0, a.c)(158),
        {
          placeholder: en,
          state: ea,
          actionsBeforeHistory: er,
          actionsAfterHistory: eo,
          actionsAfterCopy: el,
          actionsPresentation: es,
          bufferStreamingContent: ec,
          viewerDownloadControl: ed,
          viewerVersionHistoryMenuItem: eu,
          assistantRevision: ep,
          copyInteractionDisabled: em,
          createEditor: eb,
          editorKey: ef,
          editorOverlays: eg,
          editorRootRef: eh,
          emailMetadata: ev,
          emailRowsCapabilities: ex,
          editorInteractionDisabled: ew,
          fillAvailableHeight: ey,
          hideFormatToolbar: ek,
          hideSlashMenu: eS,
          historyInteractionDisabled: ej,
          headerLeadingContent: eA,
          isEditable: eE,
          isEditSelectionLoading: e_,
          isHeaderComposerOpen: eB,
          isMagicEditSubmitting: eD,
          isWriteLikeMeSubmitting: eL,
          libraryFileId: eT,
          metadataInteractionDisabled: eR,
          onBlur: eP,
          onAskForChanges: e$,
          onBeforeExternalContentUpdate: eV,
          onCancelEditSelection: ez,
          onContentChange: eW,
          onCopy: eF,
          onCopySuccess: eG,
          onCopyContentPrepared: eQ,
          onEditSelection: eK,
          onEditSelectionOpenChange: eq,
          onEditorEscape: eH,
          onEditorKeyDownCapture: eZ,
          onEditorPointerDownCapture: eX,
          onRecipientChange: e3,
          onSlashMenuExecute: e4,
          onSubjectChange: e5,
          onToneSectionSelect: e6,
          onWriteLikeMeAction: e7,
          renderFrame: e8,
          renderViewerMenu: e9,
          testId: te,
          title: tt,
          variant: ti,
          writingBlockMetadata: tn,
        } = e,
        ta = void 0 === es ? "inline" : es,
        tr = void 0 !== em && em,
        to = void 0 === eb ? W.P$ : eb,
        tl = void 0 !== ew && ew,
        ts = void 0 !== ey && ey,
        tc = void 0 !== ek && ek,
        td = void 0 !== eS && eS,
        tu = void 0 !== ej && ej,
        tp = void 0 !== e_ && e_,
        tm = void 0 !== eB && eB,
        tb = void 0 !== eD && eD,
        tf = void 0 !== eR && eR,
        tg = (0, h.A)(),
        th = (0, f.Ul)((0, c.k6)() ? j.RZ : j.nw) && !(0, c.j4)()
      ei[0] !== tg || ei[1] !== en
        ? ((t =
            en ??
            tg.formatMessage({
              id: "codex.writingBlock.editor.placeholder",
              defaultMessage: "Start writing",
              description:
                "Placeholder in an editable writing block shared by local Codex threads and Quick Chat. It prompts the user to begin entering the writing block's content.",
            })),
          (ei[0] = tg),
          (ei[1] = en),
          (ei[2] = t))
        : (t = ei[2])
      let tv = t,
        tx = ea.displayedContent,
        tw = `${ef ?? ""}
${ea.activeToneSectionId ?? ""}`,
        { editorView: ty, proseMirrorStore: tk } = ea
      ei[3] !== tk
        ? ((i = () => {
            let e = tk.getSnapshot().editorView
            return null == e || e.isDestroyed ? null : e.state.selection
          }),
          (ei[3] = tk),
          (ei[4] = i))
        : (i = ei[4])
      let tC = i,
        tS = (0, o.useSyncExternalStore)(tk.subscribe, tC, e2)
      ;(ei[5] !== tl || ei[6] !== ty || ei[7] !== eE || ei[8] !== th
        ? ((r = () => {
            if (null != ty && !ty.isDestroyed)
              return (ty.dom.classList.toggle(eY, !(0, c.j4)() && (th || !eE || tl)), () => ty.dom.classList.remove(eY))
          }),
          (g = [tl, ty, eE, th]),
          (ei[5] = tl),
          (ei[6] = ty),
          (ei[7] = eE),
          (ei[8] = th),
          (ei[9] = r),
          (ei[10] = g))
        : ((r = ei[9]), (g = ei[10])),
        (0, o.useEffect)(r, g),
        ei[11] !== ty || ei[12] !== tx || ei[13] !== eF || ei[14] !== eQ || ei[15] !== eG
          ? ((y = (e) => {
              var t
              let i, n
              e.stopPropagation()
              let a = null == ty ? null : (0, _.WW)(ty.dom)?.htmlText,
                r =
                  ((t = tx),
                  (i = ""),
                  (n = 0),
                  (0, u.o)()
                    .parse(t)
                    .descendants((e) => {
                      if ("hard_break" !== e.type.name) return
                      let { start: a, end: r } = e.attrs
                      if ("number" != typeof a || "number" != typeof r) return
                      let o = t.slice(a, r)
                      ;("\\\n" === o || "\\\r\n" === o) && ((i += t.slice(n, a)), (n = a + 1))
                    }),
                  i + t.slice(n))
              ;(eF?.(r),
                eQ?.(),
                (0, M.E)(null == a ? r : { "text/plain": r, "text/html": a }, e).then((e) => {
                  e && eG?.()
                }))
            }),
            (ei[11] = ty),
            (ei[12] = tx),
            (ei[13] = eF),
            (ei[14] = eQ),
            (ei[15] = eG),
            (ei[16] = y))
          : (y = ei[16]))
      let tj = y
      ;(ei[17] === Symbol.for("react.memo_cache_sentinel") ? ((I = (0, n.jsx)(C.Gn, {})), (ei[17] = I)) : (I = ei[17]),
        ei[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((B = (0, n.jsx)(v.A, {
              id: "copyButton.copy",
              defaultMessage: "Copy",
              description: "Text displayed when the content can be copied",
            })),
            (ei[18] = B))
          : (B = ei[18]),
        ei[19] !== tr || ei[20] !== tj
          ? ((D = (0, n.jsx)(w.ms.Item, { disabled: tr, leftIcon: I, onClick: tj, children: B })),
            (ei[19] = tr),
            (ei[20] = tj),
            (ei[21] = D))
          : (D = ei[21]))
      let tA = D
      ei[22] !== el || ei[23] !== tA
        ? ((L = (0, n.jsxs)(n.Fragment, { children: [tA, el] })), (ei[22] = el), (ei[23] = tA), (ei[24] = L))
        : (L = ei[24])
      let tE = L
      ei[25] !== tg
        ? ((R = tg.formatMessage({
            id: "codex.writingBlock.actions.moreActions",
            defaultMessage: "More actions",
            description:
              "Tooltip and accessible label for the overflow menu in an expanded Codex Apps writing block editor. The menu contains Copy and Download actions.",
          })),
          (ei[25] = tg),
          (ei[26] = R))
        : (R = ei[26])
      let t_ = R,
        tI = "viewer" === ta && "gap-2"
      ;(ei[27] !== tI ? ((O = (0, b.A)("flex items-center", tI)), (ei[27] = tI), (ei[28] = O)) : (O = ei[28]),
        ei[29] !== ta || ei[30] !== tr || ei[31] !== tj || ei[32] !== eT
          ? ((P = "viewer" === ta && null == eT && (0, n.jsx)(z.B, { isDisabled: tr, onCopy: tj, renderButton: e1 })),
            (ei[29] = ta),
            (ei[30] = tr),
            (ei[31] = tj),
            (ei[32] = eT),
            (ei[33] = P))
          : (P = ei[33]))
      let tM = "viewer" === ta ? "viewer" : "inline"
      ;(ei[34] !== ty || ei[35] !== tu || ei[36] !== eE || ei[37] !== ea.historySummary || ei[38] !== tM
        ? ((U = (0, n.jsx)(eO, {
            presentation: tM,
            editorView: ty,
            historySummary: ea.historySummary,
            isEditable: eE,
            isInteractionDisabled: tu,
          })),
          (ei[34] = ty),
          (ei[35] = tu),
          (ei[36] = eE),
          (ei[37] = ea.historySummary),
          (ei[38] = tM),
          (ei[39] = U))
        : (U = ei[39]),
        ei[40] !== el || ei[41] !== ta || ei[42] !== tr || ei[43] !== tE || ei[44] !== tj || ei[45] !== t_
          ? ((F =
              "viewer" !== ta &&
              (0, n.jsx)("div", {
                className: "flex items-center gap-1",
                children:
                  "menu" === ta
                    ? (0, n.jsx)(w.Ab, {
                        align: "end",
                        contentWidth: "menuBounded",
                        triggerButton: (0, n.jsx)(l.m, {
                          sideOffset: 0,
                          content: t_,
                          children: (0, n.jsx)(S.p, { label: t_ }),
                        }),
                        children: tE,
                      })
                    : (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(z.B, { isDisabled: tr, onCopy: tj }), el] }),
              })),
            (ei[40] = el),
            (ei[41] = ta),
            (ei[42] = tr),
            (ei[43] = tE),
            (ei[44] = tj),
            (ei[45] = t_),
            (ei[46] = F))
          : (F = ei[46]),
        ei[47] !== eo || ei[48] !== er || ei[49] !== O || ei[50] !== P || ei[51] !== U || ei[52] !== F
          ? ((G = (0, n.jsxs)("div", { className: O, children: [P, er, U, eo, F] })),
            (ei[47] = eo),
            (ei[48] = er),
            (ei[49] = O),
            (ei[50] = P),
            (ei[51] = U),
            (ei[52] = F),
            (ei[53] = G))
          : (G = ei[53]))
      let tN = null == eA ? void 0 : "!ps-0 !pe-2 !py-2"
      ;(ei[54] !== eL ||
      ei[55] !== eT ||
      ei[56] !== e6 ||
      ei[57] !== e7 ||
      ei[58] !== ea.activeToneSectionId ||
      ei[59] !== ea.displayedContent ||
      ei[60] !== ea.selectToneSection ||
      ei[61] !== ea.toneSections ||
      ei[62] !== ti ||
      ei[63] !== tn
        ? ((Q =
            (null != ea.toneSections && ea.toneSections.length > 0) || (0, d.ie)(tn) || (null != e7 && V(tn, ti))
              ? (0, n.jsx)(eJ, {
                  activeSectionId: ea.activeToneSectionId ?? ea.toneSections?.[0]?.id ?? "",
                  isWriteLikeMeSubmitting: eL,
                  libraryFileId: eT,
                  metadata: tn,
                  onSelect: e6 ?? ea.selectToneSection,
                  onWriteLikeMeAction: e7,
                  sections: ea.toneSections,
                  content: ea.displayedContent,
                  variant: ti,
                })
              : null),
          (ei[54] = eL),
          (ei[55] = eT),
          (ei[56] = e6),
          (ei[57] = e7),
          (ei[58] = ea.activeToneSectionId),
          (ei[59] = ea.displayedContent),
          (ei[60] = ea.selectToneSection),
          (ei[61] = ea.toneSections),
          (ei[62] = ti),
          (ei[63] = tn),
          (ei[64] = Q))
        : (Q = ei[64]),
        ei[65] !== el ||
        ei[66] !== ta ||
        ei[67] !== tA ||
        ei[68] !== eA ||
        ei[69] !== tg ||
        ei[70] !== eT ||
        ei[71] !== e9 ||
        ei[72] !== tt ||
        ei[73] !== eu
          ? ((K =
              "viewer" === ta
                ? (e9?.(tA) ??
                  (0, n.jsx)(N.jH, {
                    icon: (0, n.jsx)(k.I, { asset: s.g }),
                    libraryBreadcrumb: null == eT ? null : (0, n.jsx)(A.x, { libraryFileId: eT }),
                    tooltipBreadcrumb: null == eT ? null : (0, n.jsx)(A.x, { libraryFileId: eT, variant: "text" }),
                    title:
                      "string" == typeof tt
                        ? tt
                        : tg.formatMessage({
                            id: "codex.writingBlock.header.title.fallback",
                            defaultMessage: "Writing",
                            description:
                              "Short fallback title in the header of a writing block shared by local Codex threads and Quick Chat when the block does not provide a custom title.",
                          }),
                    children: (0, n.jsxs)(x.h, { libraryFileId: eT, versionHistoryAction: eu, children: [el, tA] }),
                  }))
                : eA),
            (ei[65] = el),
            (ei[66] = ta),
            (ei[67] = tA),
            (ei[68] = eA),
            (ei[69] = tg),
            (ei[70] = eT),
            (ei[71] = e9),
            (ei[72] = tt),
            (ei[73] = eu),
            (ei[74] = K))
          : (K = ei[74]))
      let tB = "viewer" === ta ? el : void 0,
        tD = "viewer" === ta ? eu : void 0,
        tL = "viewer" === ta ? tA : void 0
      ;(ei[75] !== tt || ei[76] !== ti
        ? ((q =
            tt ??
            ("email" === ti
              ? (0, n.jsx)(v.A, {
                  id: "codex.writingBlock.email.header.title.fallback",
                  defaultMessage: "Email",
                  description:
                    "Short fallback title in the header of an email writing block shared by local Codex threads and Quick Chat when the block does not provide a custom title.",
                })
              : (0, n.jsx)(v.A, {
                  id: "codex.writingBlock.header.title.fallback",
                  defaultMessage: "Writing",
                  description:
                    "Short fallback title in the header of a writing block shared by local Codex threads and Quick Chat when the block does not provide a custom title.",
                }))),
          (ei[75] = tt),
          (ei[76] = ti),
          (ei[77] = q))
        : (q = ei[77]),
        ei[78] !== tw ||
        ei[79] !== ev ||
        ei[80] !== ex ||
        ei[81] !== eE ||
        ei[82] !== tf ||
        ei[83] !== eP ||
        ei[84] !== e3 ||
        ei[85] !== e5 ||
        ei[86] !== ti
          ? ((H =
              "email" === ti
                ? (0, n.jsx)(eC, {
                    ...ex,
                    isRecipientEditable: eE && !tf && null != e3,
                    isSubjectEditable: eE && !tf && null != e5,
                    metadata: ev,
                    onBlur: eP,
                    onRecipientChange: e3,
                    onSubjectChange: e5,
                    subjectKey: tw,
                  })
                : null),
            (ei[78] = tw),
            (ei[79] = ev),
            (ei[80] = ex),
            (ei[81] = eE),
            (ei[82] = tf),
            (ei[83] = eP),
            (ei[84] = e3),
            (ei[85] = e5),
            (ei[86] = ti),
            (ei[87] = H))
          : (H = ei[87]),
        ei[88] !== ep ||
        ei[89] !== ec ||
        ei[90] !== to ||
        ei[91] !== tw ||
        ei[92] !== tl ||
        ei[93] !== ef ||
        ei[94] !== eg ||
        ei[95] !== eh ||
        ei[96] !== ty ||
        ei[97] !== ts ||
        ei[98] !== eE ||
        ei[99] !== tm ||
        ei[100] !== tb ||
        ei[101] !== eV ||
        ei[102] !== eP ||
        ei[103] !== eW ||
        ei[104] !== eH ||
        ei[105] !== eZ ||
        ei[106] !== eX ||
        ei[107] !== tv ||
        ei[108] !== ea ||
        ei[109] !== ti
          ? ((Z =
              null == ef
                ? (0, n.jsx)("div", {
                    className: (0, b.A)(p.p.root, "text-size-chat text-default [unicode-bidi:plaintext]"),
                    "data-markdown-copy-content": !0,
                    dir: "auto",
                    children: (0, n.jsx)(E.r, {
                      enabled: !0 === ec,
                      streamId: ea.activeToneSectionId ?? "",
                      text: ea.displayedContent,
                      children: e0,
                    }),
                  })
                : (0, n.jsxs)("div", {
                    ref: eh,
                    className: (0, b.A)("relative", ts && "flex grow flex-col"),
                    onKeyDownCapture: (e) => {
                      ;(eZ?.(e),
                        "Escape" === e.key &&
                          !e.defaultPrevented &&
                          null != eH &&
                          null != ty &&
                          (0, W.J)(ty) &&
                          (e.preventDefault(), e.stopPropagation(), eH()))
                    },
                    onPointerDownCapture: eX,
                    children: [
                      (0, n.jsx)("div", {
                        className: (0, b.A)(
                          "content-mUPWP6",
                          ts && "flex grow flex-col",
                          "slides" === ti && tb && "opacity-40",
                        ),
                        "aria-busy": ("slides" === ti && tb) || void 0,
                        "data-markdown-copy-content": !0,
                        dir: "auto",
                        children: (0, n.jsx)(T, {
                          bufferStreamingContent: ec,
                          ariaLabel: tv,
                          className: (0, b.A)(
                            "magic-edit-minimal",
                            ts && p.p.page,
                            tm && "header-magic-edit-composer-open",
                            tb && "magic-edit-submitting",
                          ),
                          createEditor: to,
                          editable: eE && !tl,
                          editorClassName: "leading-relaxed",
                          editorKey: tw,
                          onBlur: eP,
                          onBeforeExternalContentUpdate: eV,
                          onChange: (e) => {
                            eW?.(e, ea.activeToneSectionId)
                          },
                          placeholder: tv,
                          state: ea,
                        }),
                      }),
                      null == ep ? null : (0, n.jsx)($, { editorView: ty, revision: ep }),
                      eg,
                    ],
                  })),
            (ei[88] = ep),
            (ei[89] = ec),
            (ei[90] = to),
            (ei[91] = tw),
            (ei[92] = tl),
            (ei[93] = ef),
            (ei[94] = eg),
            (ei[95] = eh),
            (ei[96] = ty),
            (ei[97] = ts),
            (ei[98] = eE),
            (ei[99] = tm),
            (ei[100] = tb),
            (ei[101] = eV),
            (ei[102] = eP),
            (ei[103] = eW),
            (ei[104] = eH),
            (ei[105] = eZ),
            (ei[106] = eX),
            (ei[107] = tv),
            (ei[108] = ea),
            (ei[109] = ti),
            (ei[110] = Z))
          : (Z = ei[110]),
        ei[111] !== tl || ei[112] !== ty || ei[113] !== eE || ei[114] !== ea.emojiSuggestionState
          ? ((J =
              eE && !tl && null != ty && null != ea.emojiSuggestionState
                ? (0, n.jsx)(eI, { editorView: ty, suggestion: ea.emojiSuggestionState })
                : null),
            (ei[111] = tl),
            (ei[112] = ty),
            (ei[113] = eE),
            (ei[114] = ea.emojiSuggestionState),
            (ei[115] = J))
          : (J = ei[115]),
        ei[116] !== tl ||
        ei[117] !== ty ||
        ei[118] !== td ||
        ei[119] !== eE ||
        ei[120] !== e4 ||
        ei[121] !== ea.slashMenuState
          ? ((Y =
              !eE || tl || null == ty || td
                ? null
                : (0, n.jsx)(eN.Y, {
                    editorView: ty,
                    onExecute: (e, t) => {
                      let i = { commandId: e, query: t, view: ty }
                      null == e4 ? (0, W.r0)(i) : e4(i)
                    },
                    state: ea.slashMenuState,
                  })),
            (ei[116] = tl),
            (ei[117] = ty),
            (ei[118] = td),
            (ei[119] = eE),
            (ei[120] = e4),
            (ei[121] = ea.slashMenuState),
            (ei[122] = Y))
          : (Y = ei[122]),
        ei[123] !== ty ||
        ei[124] !== tc ||
        ei[125] !== tp ||
        ei[126] !== eE ||
        ei[127] !== th ||
        ei[128] !== e$ ||
        ei[129] !== ez ||
        ei[130] !== eK ||
        ei[131] !== eq ||
        ei[132] !== tS ||
        ei[133] !== ea.emojiSuggestionState ||
        ei[134] !== ea.proseMirrorStore ||
        ei[135] !== ea.selectionSummary
          ? ((X =
              !eE ||
              tc ||
              null == ty ||
              null != ea.emojiSuggestionState ||
              (ea.selectionSummary.isCollapsed && null == (0, m.Bp)(tS))
                ? null
                : (0, n.jsx)(eM.W, {
                    editorView: ty,
                    isEditSelectionLoading: tp,
                    isOpenLinkModifierPressed: th,
                    onAskForChanges: e$,
                    onCancelEditSelection: ez,
                    onEditSelection: eK,
                    onEditSelectionOpenChange: eq,
                    proseMirrorStore: ea.proseMirrorStore,
                  })),
            (ei[123] = ty),
            (ei[124] = tc),
            (ei[125] = tp),
            (ei[126] = eE),
            (ei[127] = th),
            (ei[128] = e$),
            (ei[129] = ez),
            (ei[130] = eK),
            (ei[131] = eq),
            (ei[132] = tS),
            (ei[133] = ea.emojiSuggestionState),
            (ei[134] = ea.proseMirrorStore),
            (ei[135] = ea.selectionSummary),
            (ei[136] = X))
          : (X = ei[136]),
        ei[137] !== tx ||
        ei[138] !== G ||
        ei[139] !== tN ||
        ei[140] !== Q ||
        ei[141] !== K ||
        ei[142] !== tB ||
        ei[143] !== tD ||
        ei[144] !== tL ||
        ei[145] !== q ||
        ei[146] !== H ||
        ei[147] !== Z ||
        ei[148] !== J ||
        ei[149] !== Y ||
        ei[150] !== X ||
        ei[151] !== te ||
        ei[152] !== ti ||
        ei[153] !== ed
          ? ((ee = (0, n.jsxs)(eU.$7, {
              viewerDownloadControl: ed,
              actions: G,
              "data-markdown-copy": "rich-block",
              "data-markdown-copy-text": tx,
              "data-testid": te,
              "data-writing-block-variant": ti,
              headerClassName: tN,
              inlineContent: Q,
              leadingContent: K,
              viewerMenuItems: tB,
              viewerVersionHistoryMenuItem: tD,
              viewerCopyMenuItem: tL,
              title: q,
              children: [H, Z, J, Y, X],
            })),
            (ei[137] = tx),
            (ei[138] = G),
            (ei[139] = tN),
            (ei[140] = Q),
            (ei[141] = K),
            (ei[142] = tB),
            (ei[143] = tD),
            (ei[144] = tL),
            (ei[145] = q),
            (ei[146] = H),
            (ei[147] = Z),
            (ei[148] = J),
            (ei[149] = Y),
            (ei[150] = X),
            (ei[151] = te),
            (ei[152] = ti),
            (ei[153] = ed),
            (ei[154] = ee))
          : (ee = ei[154]))
      let tT = ee
      return (
        ei[155] !== tT || ei[156] !== e8
          ? ((et = null == e8 ? tT : e8(tT.props)), (ei[155] = tT), (ei[156] = e8), (ei[157] = et))
          : (et = ei[157]),
        et
      )
    }
    function e0(e) {
      return (0, n.jsx)(e3, { text: e })
    }
    function e1(e) {
      return (0, n.jsx)(N.DW, { ...e, uniform: !0 })
    }
    function e2() {
      return null
    }
    function e3(e) {
      let t,
        i,
        r,
        o = (0, a.c)(5),
        { text: l } = e
      o[0] !== l
        ? ((t = (e) => {
            if (null == e) return
            let t = (0, u.o)().parse(l),
              i = g.ZF.fromSchema(t.type.schema).serializeFragment(t.content, { document: e.ownerDocument })
            for (let e of i.querySelectorAll("a[href]")) {
              let t = (0, I.G)(e.getAttribute("href") ?? "")
              if (null == t) {
                e.replaceWith(...e.childNodes)
                continue
              }
              let i = (e) => {
                e.defaultPrevented ||
                  e.button > 1 ||
                  (e.preventDefault(), (0, y.PQ)({ event: e, href: t, initiator: "open_in_browser_bridge" }))
              }
              ;(e.addEventListener("click", i), e.addEventListener("auxclick", i))
            }
            for (let e of i.querySelectorAll('input[type="checkbox"]')) e.disabled = !0
            e.replaceChildren(i)
          }),
          (o[0] = l),
          (o[1] = t))
        : (t = o[1])
      let s = t
      return (
        o[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, b.A)("ProseMirror", p.p.content, "leading-relaxed")), (o[2] = i))
          : (i = o[2]),
        o[3] !== s ? ((r = (0, n.jsx)("div", { ref: s, className: i })), (o[3] = s), (o[4] = r)) : (r = o[4]),
        r
      )
    }
    function e4(e) {
      let t,
        i,
        l,
        s,
        c,
        d,
        u,
        p,
        m,
        b,
        f,
        g = (0, a.c)(23)
      ;(g[0] !== e
        ? (({
            activeToneSectionId: t,
            content: i,
            externalContentUpdate: l,
            onToneSectionSelect: s,
            proseMirrorStore: c,
            render: d,
            toneSections: u,
            ...p
          } = e),
          (g[0] = e),
          (g[1] = t),
          (g[2] = i),
          (g[3] = l),
          (g[4] = s),
          (g[5] = c),
          (g[6] = d),
          (g[7] = u),
          (g[8] = p))
        : ((t = g[1]), (i = g[2]), (l = g[3]), (s = g[4]), (c = g[5]), (d = g[6]), (u = g[7]), (p = g[8])),
        g[9] !== t || g[10] !== i || g[11] !== l || g[12] !== s || g[13] !== c || g[14] !== u
          ? ((m = {
              activeToneSectionId: t,
              content: i,
              externalContentUpdate: l,
              onToneSectionSelect: s,
              proseMirrorStore: c,
              toneSections: u,
            }),
            (g[9] = t),
            (g[10] = i),
            (g[11] = l),
            (g[12] = s),
            (g[13] = c),
            (g[14] = u),
            (g[15] = m))
          : (m = g[15]))
      let h = (function (e) {
        let t,
          i,
          n,
          l = (0, a.c)(18),
          {
            activeToneSectionId: s,
            content: c,
            externalContentUpdate: d,
            onToneSectionSelect: u,
            proseMirrorStore: p,
            toneSections: m,
          } = e,
          [b] = (0, o.useState)(r.Gi),
          f = p ?? b,
          g = (0, r.xQ)(f),
          [h, v] = (0, o.useState)(m?.[0]?.id ?? null),
          x = s ?? h
        l[0] !== x || l[1] !== m
          ? ((t = m?.find((e) => e.id === x) ?? m?.[0]), (l[0] = x), (l[1] = m), (l[2] = t))
          : (t = l[2])
        let w = t,
          y = w?.id,
          k = w?.content ?? c,
          C = null != p
        return (
          l[3] !== w?.id || l[4] !== s || l[5] !== u || l[6] !== f
            ? ((i = (e) => {
                e !== w?.id && (f.setView(null), null == s && v(e), u?.(e))
              }),
              (l[3] = w?.id),
              (l[4] = s),
              (l[5] = u),
              (l[6] = f),
              (l[7] = i))
            : (i = l[7]),
          l[8] !== w ||
          l[9] !== d ||
          l[10] !== g ||
          l[11] !== f ||
          l[12] !== y ||
          l[13] !== k ||
          l[14] !== C ||
          l[15] !== i ||
          l[16] !== m
            ? ((n = {
                ...g,
                activeToneSection: w,
                activeToneSectionId: y,
                displayedContent: k,
                externalContentUpdate: d,
                isProseMirrorStoreShared: C,
                proseMirrorStore: f,
                selectToneSection: i,
                toneSections: m,
              }),
              (l[8] = w),
              (l[9] = d),
              (l[10] = g),
              (l[11] = f),
              (l[12] = y),
              (l[13] = k),
              (l[14] = C),
              (l[15] = i),
              (l[16] = m),
              (l[17] = n))
            : (n = l[17]),
          n
        )
      })(m)
      g[16] !== h || g[17] !== p
        ? ((b = (e) => (0, n.jsx)(eX, { ...p, ...e, state: h })), (g[16] = h), (g[17] = p), (g[18] = b))
        : (b = g[18])
      let v = b
      return (
        g[19] !== d || g[20] !== v || g[21] !== h
          ? ((f = d?.({ renderView: v, state: h }) ?? v()), (g[19] = d), (g[20] = v), (g[21] = h), (g[22] = f))
          : (f = g[22]),
        f
      )
    }
  },
  v9AI(e, t, i) {
    var n = i("Kh9O"),
      a = i("zTeN"),
      r = i("vNuC"),
      o = i("OWtl"),
      l = i("BUfb")
    let s = (0, a.T1)(o.u, (e, { signal: t, scope: i }) => {
      let a = t(null),
        o = null,
        s = null
      return {
        state$: a,
        update(e, t) {
          let c = i.get(a)
          if (c?.dismissed == null) {
            if (null != c && !c.isStreaming) {
              if (s !== e.receivedMarkdown && null != c.changes)
                try {
                  ;(e.receivedMarkdown.length > 2e4 ||
                    (0, l.$e)((0, n.o)().parse(e.receivedMarkdown)).text !== c.changes.text) &&
                    i.set(a, { ...c, dismissed: "error" })
                } catch {
                  i.set(a, { ...c, dismissed: "error" })
                }
              s = e.receivedMarkdown
              return
            }
            if (
              ((s = e.receivedMarkdown),
              (!e.isStreaming && !e.isComplete) || e.previousMarkdown.length + e.receivedMarkdown.length > 2e4)
            )
              return void i.set(a, {
                changes: null,
                isStreaming: !1,
                expiresAt: null,
                persistsUntilEdit: "until-first-edit" === t,
                dismissed: "error",
              })
            try {
              let s = (0, n.o)()
              o?.markdown !== e.previousMarkdown &&
                (o = { markdown: e.previousMarkdown, doc: s.parse(e.previousMarkdown) })
              let c = (0, l.Rn)({
                  previousDoc: o.doc,
                  receivedDoc: s.parse(e.isStreaming ? (0, r.J)(e.receivedMarkdown).markdown : e.receivedMarkdown),
                  isStreaming: e.isStreaming,
                  endsAtWordBoundary: /\s$/u.test(e.receivedMarkdown),
                }),
                d = e.isStreaming || null == c ? null : (0, l.V4)(c.text, t)
              i.set(a, {
                changes: c,
                isStreaming: e.isStreaming,
                expiresAt: null == d ? null : Date.now() + d,
                persistsUntilEdit: "until-first-edit" === t,
                dismissed: null,
              })
            } catch {
              i.set(a, {
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
          let t = i.get(a)
          null != t && null == t.dismissed && i.set(a, { ...t, dismissed: e })
        },
      }
    })
    i.d(
      t,
      {},
      {
        $: s,
        F: function (e, t) {
          let i = e.get(s, t),
            n = e.get(i.state$)
          null == n || n.persistsUntilEdit || i.dismiss("copy")
        },
      },
    )
  },
  s1zV(e, t, i) {
    var n = i("ABep"),
      a = i("QosV"),
      r = i("uuN8"),
      o = i("bVeK")
    i.d(
      t,
      {},
      {
        B: function (e) {
          let t,
            i,
            l = (0, a.c)(6),
            { className: s, isDisabled: c, onCopy: d, renderButton: u } = e
          return (
            l[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = { copy: (0, n.jsx)(o.Gn, {}), copied: (0, n.jsx)(o.jFs, {}) }), (l[0] = t))
              : (t = l[0]),
            l[1] !== s || l[2] !== c || l[3] !== d || l[4] !== u
              ? ((i = (0, n.jsx)(r.i, {
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
                (l[5] = i))
              : (i = l[5]),
            i
          )
        },
      },
    )
  },
}
//# sourceMappingURL=720436.aca6725ab2.js.map
