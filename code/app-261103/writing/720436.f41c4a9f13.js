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
    i.d(
      t,
      {},
      {
        Nw: { $type: "protobuf_analytics_events.v1.ChatgptWritingBlocksSaveAsPageButtonClicked" },
        lq: { $type: "protobuf_analytics_events.v1.ChatgptWritingBlockOptionSelected" },
      },
    )
  },
  sMeo(e, t, i) {
    var n = i("ABep"),
      a = i("QosV"),
      r = i("mNg4"),
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
            j = w.manualQuery ?? ""
          return (
            v[19] !== t ? ((f = (e) => y({ inlineQuery: t, manualQuery: e })), (v[19] = t), (v[20] = f)) : (f = v[20]),
            v[21] !== i || v[22] !== s || v[23] !== C || v[24] !== j || v[25] !== f
              ? ((g = (0, n.jsx)(o.s, {
                  ...s,
                  autoFocus: !1,
                  keyboardTarget: i,
                  query: C,
                  inputValue: j,
                  onQueryChange: f,
                })),
                (v[21] = i),
                (v[22] = s),
                (v[23] = C),
                (v[24] = j),
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
      s = i("UwnX"),
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
    i("uw7z")
    var w = i("bqtn"),
      y = i("Ot7V"),
      k = i("HOLv"),
      C = i("GO7r"),
      j = i("f38C"),
      S = i("ziRc"),
      A = i("hrTz"),
      M = i("hSWQ"),
      E = i("xprp"),
      _ = i("Zsk8"),
      B = i("aepO"),
      N = i("pZQ9"),
      I = i("g3YS"),
      D = i("bIvi"),
      R = i("qqcG")
    function L(e) {
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
        ? ((d = (0, R.gK)(l, l.externalContentUpdate, k)), (w[9] = k), (w[10] = l), (w[11] = d))
        : (d = w[11])
      let j = d
      w[12] !== l.externalContentUpdate
        ? ((p = () => l.externalContentUpdate), (w[12] = l.externalContentUpdate), (w[13] = p))
        : (p = w[13])
      let S = (0, D.K)(p)
      w[14] !== i
        ? ((m = (e) => {
            i?.(e)
          }),
          (w[14] = i),
          (w[15] = m))
        : (m = w[15])
      let A = (0, D.K)(m),
        E = (0, o.useRef)(null)
      w[16] !== t || w[17] !== S || w[18] !== A || w[19] !== l.isProseMirrorStoreShared || w[20] !== l.proseMirrorStore
        ? ((b = (e) => {
            let i = t({
              ...e,
              getExternalContentUpdate: S,
              onBeforeExternalContentUpdate: A,
              proseMirrorStore: l.isProseMirrorStoreShared ? l.proseMirrorStore : void 0,
            })
            return (
              (E.current = i),
              {
                ...i,
                destroy() {
                  ;(E.current === i && (E.current = null), i.destroy())
                },
              }
            )
          }),
          (w[16] = t),
          (w[17] = S),
          (w[18] = A),
          (w[19] = l.isProseMirrorStoreShared),
          (w[20] = l.proseMirrorStore),
          (w[21] = b))
        : (b = w[21])
      let _ = (0, D.K)(b)
      w[22] !== C || w[23] !== k || w[24] !== l
        ? ((f = () => {
            let e = E.current
            e?.view === C && "unchanged" === (0, R.gK)(l, l.externalContentUpdate, k) && e.setMarkdown(k)
          }),
          (w[22] = C),
          (w[23] = k),
          (w[24] = l),
          (w[25] = f))
        : (f = w[25])
      let B = (0, o.useEffectEvent)(f)
      w[26] !== B
        ? ((g = () => {
            B()
          }),
          (w[26] = B),
          (w[27] = g))
        : (g = w[27])
      let N = l.externalContentUpdate?.key
      ;(w[28] !== C || w[29] !== k || w[30] !== N
        ? ((h = [k, C, N]), (w[28] = C), (w[29] = k), (w[30] = N), (w[31] = h))
        : (h = w[31]),
        (0, o.useEffect)(g, h))
      let L = y && null == l.externalContentUpdate,
        T = r.editorKey ?? ""
      return (
        w[32] !== _ || w[33] !== r || w[34] !== l.proseMirrorStore || w[35] !== j
          ? ((v = (e) =>
              (0, n.jsx)(I.K, {
                ...r,
                createEditor: _,
                editable: !1 !== r.editable && "changed" !== j,
                markdown: e,
                proseMirrorStore: l.proseMirrorStore,
              })),
            (w[32] = _),
            (w[33] = r),
            (w[34] = l.proseMirrorStore),
            (w[35] = j),
            (w[36] = v))
          : (v = w[36]),
        w[37] !== k || w[38] !== L || w[39] !== T || w[40] !== v
          ? ((x = (0, n.jsx)(M.r, { enabled: L, streamId: T, text: k, children: v })),
            (w[37] = k),
            (w[38] = L),
            (w[39] = T),
            (w[40] = v),
            (w[41] = x))
          : (x = w[41]),
        x
      )
    }
    var T = i("OWtl"),
      U = i("qOyO"),
      O = i("AhlA"),
      $ = i("v9AI")
    function V(e) {
      let t,
        i,
        n,
        r,
        l,
        s,
        c,
        d = (0, a.c)(24),
        { editorView: u, revision: p } = e,
        m = (0, f.gh)(T.u),
        b = (0, f.uO)($.$, p.id),
        g = (0, f.Ul)(b.state$),
        h = (0, f.Ul)(O.mL)
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
              null == u || u.isDestroyed || null == g || (0, U.Y2)(u, p.id, g)
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
                u.state.selection.empty || (0, $.F)(m, p.id)
              }
              return (
                u.dom.addEventListener("copy", e),
                () => {
                  ;(u.dom.removeEventListener("copy", e), (0, U.dY)(u))
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
    function P(e, t) {
      return (
        e?.write_like_me_offer_policy === "automatic" && ("email" === t || "chat_message" === t || "social_post" === t)
      )
    }
    var z = i("s1zV"),
      F = i("Or4D"),
      Q = i("Ks4B"),
      W = i("x0Bm"),
      q = i("Jaao"),
      K = i("LpCf")
    function G(e) {
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
          values: j,
          className: S,
          layout: A,
          renderSender: M,
        } = e,
        [E, _] = (0, o.useState)(!1),
        [B, N] = (0, o.useState)(!1),
        [I, D] = (0, o.useState)(!1),
        [R, L] = (0, o.useState)(!1),
        T = (0, o.useRef)(null),
        U = (0, o.useRef)(!1)
      v[0] !== w || v[1] !== E || v[2] !== j.cc
        ? ((t = "plain_text" === w ? ee(j.cc) : E || ee(j.cc)), (v[0] = w), (v[1] = E), (v[2] = j.cc), (v[3] = t))
        : (t = v[3])
      let O = t
      v[4] !== w || v[5] !== B || v[6] !== j.bcc
        ? ((i = "plain_text" === w ? ee(j.bcc) : B || ee(j.bcc)), (v[4] = w), (v[5] = B), (v[6] = j.bcc), (v[7] = i))
        : (i = v[7])
      let $ = i,
        V = O || $,
        P = "tokenized" === w && !I && !R
      ;(v[8] !== I
        ? ((r = () => {
            if (!I || !U.current) return
            let e = T.current?.ownerDocument.defaultView
            if (null != e)
              return et(e, () => {
                ;((U.current = !1),
                  T.current
                    ?.querySelector("[data-writing-block-email-recipient-input], .react-select__input input, input")
                    ?.focus())
              })
          }),
          (l = [I]),
          (v[8] = I),
          (v[9] = r),
          (v[10] = l))
        : ((r = v[9]), (l = v[10])),
        (0, o.useEffect)(r, l),
        v[11] !== y
          ? ((s = () => {
              y || ((U.current = !0), D(!0))
            }),
            (v[11] = y),
            (v[12] = s))
          : (s = v[12]))
      let z = s
      v[13] !== w || v[14] !== R
        ? ((c = (e) => {
            let t = e.relatedTarget,
              i = e.currentTarget.ownerDocument,
              n = i.defaultView
            ;(null != n &&
              t instanceof n.Node &&
              (e.currentTarget.contains(t) ||
                (t instanceof n.Element && null != t.closest("[data-writing-block-email-recipient-popover]")))) ||
              U.current ||
              et(n, () => {
                let e = i.activeElement
                T.current?.contains(e) ||
                  (null != n &&
                    e instanceof n.Element &&
                    null != e.closest("[data-writing-block-email-recipient-popover]")) ||
                  ("tokenized" !== w || R || (_(!1), N(!1)), D(!1))
              })
          }),
          (v[13] = w),
          (v[14] = R),
          (v[15] = c))
        : (c = v[15])
      let F = c
      v[16] !== x || v[17] !== w || v[18] !== y || v[19] !== C || v[20] !== j
        ? ((d = (e, t, i) =>
            C({
              contacts: x[e] ?? [],
              displayMode: w,
              field: e,
              isEditingDisabled: y,
              label: t,
              trailingContent: i,
              value: j[e],
            })),
          (v[16] = x),
          (v[17] = w),
          (v[18] = y),
          (v[19] = C),
          (v[20] = j),
          (v[21] = d))
        : (d = v[21])
      let Q = d,
        W =
          "standalone" === (void 0 === A ? "standalone" : A) &&
          "mb-[calc(var(--oai-wb-spacing)*3)] border-b [border-color:var(--oai-wb-divider)]"
      return (
        v[22] !== S || v[23] !== W
          ? ((u = (0, b.A)(
              "flex flex-col divide-y-[0.5px] divide-[color:var(--oai-wb-divider)] [&>:not(:last-child)]:py-[calc(var(--oai-wb-spacing)*0.5)]",
              W,
              S,
            )),
            (v[22] = S),
            (v[23] = W),
            (v[24] = u))
          : (u = v[24]),
        v[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = () => D(!0)), (m = { ...K.w }), (v[25] = p), (v[26] = m))
          : ((p = v[25]), (m = v[26])),
        v[27] !== w || v[28] !== P || v[29] !== M
          ? ((f = M?.({ displayMode: w, isCollapsed: P, onOpenChange: L })),
            (v[27] = w),
            (v[28] = P),
            (v[29] = M),
            (v[30] = f))
          : (f = v[30]),
        v[31] !== $ ||
        v[32] !== O ||
        v[33] !== x ||
        v[34] !== w ||
        v[35] !== z ||
        v[36] !== P ||
        v[37] !== y ||
        v[38] !== k ||
        v[39] !== V ||
        v[40] !== Q ||
        v[41] !== j
          ? ((g = (0, n.jsx)("div", {
              className:
                "flex flex-col divide-y-[0.5px] divide-[color:var(--oai-wb-divider)] [&>*]:py-[calc(var(--oai-wb-spacing)*0.5)]",
              children: P
                ? (0, n.jsx)(Y, {
                    isEditingDisabled: y,
                    onActivate: z,
                    placeholder: k.recipientsPlaceholder,
                    segments: (0, q.yy)({ ...j, contacts: x }),
                  })
                : (0, n.jsxs)(n.Fragment, {
                    children: [
                      Q(
                        "recipient",
                        k.recipient,
                        "plain_text" === w
                          ? null
                          : (0, n.jsx)(Z, {
                              className: "flex items-end gap-[calc(var(--oai-wb-spacing)*2)]",
                              disabled: V || y,
                              hidden: V,
                              labels: k,
                              onBccClick: () => N(!0),
                              onCcClick: () => _(!0),
                              showBcc: !0,
                              showCc: !0,
                            }),
                      ),
                      O
                        ? Q(
                            "cc",
                            k.cc,
                            "plain_text" === w
                              ? null
                              : (0, n.jsx)(Z, {
                                  disabled: $ || y,
                                  hidden: $,
                                  labels: k,
                                  onBccClick: () => N(!0),
                                  onCcClick: () => _(!0),
                                  showBcc: !0,
                                  showCc: !1,
                                }),
                          )
                        : null,
                      $
                        ? Q(
                            "bcc",
                            k.bcc,
                            "plain_text" === w
                              ? null
                              : (0, n.jsx)(Z, {
                                  disabled: O || y,
                                  hidden: O,
                                  labels: k,
                                  onBccClick: () => N(!0),
                                  onCcClick: () => _(!0),
                                  showBcc: !1,
                                  showCc: !0,
                                }),
                          )
                        : null,
                    ],
                  }),
            })),
            (v[31] = $),
            (v[32] = O),
            (v[33] = x),
            (v[34] = w),
            (v[35] = z),
            (v[36] = P),
            (v[37] = y),
            (v[38] = k),
            (v[39] = V),
            (v[40] = Q),
            (v[41] = j),
            (v[42] = g))
          : (g = v[42]),
        v[43] !== F || v[44] !== u || v[45] !== f || v[46] !== g
          ? ((h = (0, n.jsxs)("div", {
              ref: T,
              className: u,
              onBlurCapture: F,
              onFocusCapture: p,
              style: m,
              children: [f, g],
            })),
            (v[43] = F),
            (v[44] = u),
            (v[45] = f),
            (v[46] = g),
            (v[47] = h))
          : (h = v[47]),
        h
      )
    }
    function Z(e) {
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
                  onPointerDown: H,
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
    function H(e) {
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
        d = (0, a.c)(20)
      if (d[0] !== e) {
        o = Symbol.for("react.early_return_sentinel")
        e: {
          let { displayMode: a, field: l, label: s, ...c } = e
          if (((t = l), (r = s), (i = c), "plain_text" === a)) {
            let e, t, a
            d[5] !== r
              ? ((e = (0, n.jsx)("div", { className: "pt-0.5 leading-8 font-medium", children: r })),
                (d[5] = r),
                (d[6] = e))
              : (e = d[6])
            let l = i.value.trim().length > 0 ? i.value : null
            ;(d[7] !== l
              ? ((t = (0, n.jsx)("div", {
                  className: "min-w-0 flex-1 pt-0.5 leading-8 break-words [color:var(--oai-wb-text-primary)]",
                  children: l,
                })),
                (d[7] = l),
                (d[8] = t))
              : (t = d[8]),
              d[9] !== e || d[10] !== t
                ? ((a = (0, n.jsxs)("div", { className: "flex min-h-9 items-start gap-2", children: [e, t] })),
                  (d[9] = e),
                  (d[10] = t),
                  (d[11] = a))
                : (a = d[11]),
              (o = a))
            break e
          }
        }
        ;((d[0] = e), (d[1] = t), (d[2] = i), (d[3] = r), (d[4] = o))
      } else ((t = d[1]), (i = d[2]), (r = d[3]), (o = d[4]))
      return o !== Symbol.for("react.early_return_sentinel")
        ? o
        : (d[12] !== r
            ? ((l = (0, n.jsx)("div", { className: "pt-0.5 leading-8 font-medium", children: r })),
              (d[12] = r),
              (d[13] = l))
            : (l = d[13]),
          d[14] !== t || d[15] !== i
            ? ((s = (0, n.jsx)(eo, { ...i, inputName: t })), (d[14] = t), (d[15] = i), (d[16] = s))
            : (s = d[16]),
          d[17] !== l || d[18] !== s
            ? ((c = (0, n.jsxs)("div", { className: "flex min-h-9 items-start gap-2", children: [l, s] })),
              (d[17] = l),
              (d[18] = s),
              (d[19] = c))
            : (c = d[19]),
          c)
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
        [C, j] = (0, o.useState)(() => ep(y, t)),
        [S, A] = (0, o.useState)(!1),
        [M, E] = (0, o.useState)(!1),
        [_, B] = (0, o.useState)(0),
        [N, I] = (0, o.useState)(null),
        D = (0, o.useRef)(null),
        R = (0, o.useRef)(!1),
        L = (0, o.useRef)(null),
        T = (0, o.useRef)(m),
        U = (0, o.useRef)(h),
        { refs: O, floatingStyles: $ } = (0, ei.we)({
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
        V = O.reference
      ;((T.current = m), (U.current = h))
      let P = () => {
        null != L.current && (clearTimeout(L.current), (L.current = null))
      }
      ;((0, o.useEffect)(() => {
        R.current || j(ep(y, t))
      }, [t, y]),
        (0, o.useEffect)(() => P, []))
      let z = (e, t, i) => {
          let n,
            a,
            r = em(e)
          ;(j({ tokens: r, inputValue: t }),
            (n = (0, q.mI)(r, t)),
            (a = (0, q.kJ)(
              n,
              r.map((e) => e.contact ?? { email: e.email }),
            )),
            P(),
            i
              ? U.current(n)
              : (L.current = setTimeout(() => {
                  ;((L.current = null), U.current(n))
                }, 300)),
            T.current(n, a, i))
        },
        F = () => {
          let e = ep(C.inputValue)
          ;(z([...C.tokens, ...e.tokens], e.inputValue, !0), A(!0))
        },
        Q = r(C.inputValue)
          .filter((e) => !C.tokens.some((t) => t.email.trim().toLowerCase() === e.email.trim().toLowerCase()))
          .slice(0, 7),
        W = l?.(C.inputValue) ?? "idle",
        G = ep(C.inputValue),
        Z = "pending" === W,
        H = !c && M && (Q.length > 0 || Z),
        J = H ? `${k}-option-${_}` : void 0
      ;(0, o.useEffect)(() => {
        O.floating.current?.querySelector('[aria-selected="true"]')?.scrollIntoView?.({ block: "nearest" })
      }, [_, H, Q.length])
      let Y = (e) => {
          let t = { id: e.id ?? e.email, email: e.email, contact: e }
          ;(z([...C.tokens, t], "", !0), f?.(), g(""), E(!1), eu(D.current, () => V.current?.focus()))
        },
        X = V.current?.ownerDocument,
        ee = (v !== X?.body ? v : null) ?? V.current?.closest('dialog, [role="dialog"]') ?? X?.body
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
                ((R.current = !1), E(!1), I(null), F())
            })
        },
        onFocusCapture: () => {
          R.current = !0
        },
        onPointerDown: (e) => {
          let t = e.currentTarget.ownerDocument.defaultView
          null != t &&
            e.target instanceof t.Element &&
            null ==
              e.target.closest(
                '[data-recipient-row-trailing="true"], button, [role="button"], [role="option"], input',
              ) &&
            (e.preventDefault(), V.current?.focus())
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
                    onOpenChange: (e) => I(e ? t.id : null),
                    onRemove: () => {
                      ;(z(
                        C.tokens.filter((e, t) => t !== r),
                        C.inputValue,
                        !0,
                      ),
                        eu(D.current, () => V.current?.focus()))
                    },
                    removeIcon: x,
                    token: t,
                  },
                  t.id,
                ),
              ),
              (0, n.jsx)("input", {
                ref: O.setReference,
                "aria-activedescendant": J,
                "aria-autocomplete": "list",
                "aria-controls": k,
                "aria-expanded": H,
                "aria-label": d.input,
                role: "combobox",
                autoComplete: "off",
                className: (0, b.A)(
                  "m-0 mt-0.5 min-w-[2px] flex-1 border-none bg-transparent p-0 text-base leading-8 shadow-none ring-0 outline-hidden focus:border-transparent focus:shadow-none focus:ring-0 focus:outline-hidden focus-visible:ring-0 focus-visible:outline-hidden",
                  C.tokens.length > 0 && "ms-2",
                  S &&
                    G.inputValue.length > 0 &&
                    "[text-decoration-line:underline] [text-decoration-style:wavy] [text-decoration-thickness:1px] [text-decoration-color:var(--oai-wb-danger,var(--text-status-error))] [text-decoration-skip-ink:none]",
                ),
                disabled: c,
                name: s,
                onChange: (e) => {
                  let t = e.target.value
                  ;((R.current = !0), z(C.tokens, t, !1), g(t), E(!0), B(0))
                },
                onFocus: () => {
                  ;((R.current = !0), A(!1), E(!0), B(0), g(C.inputValue))
                },
                onKeyDown: (e) => {
                  if (!e.nativeEvent.isComposing) {
                    if ("ArrowDown" === e.key && Q.length > 0) {
                      ;(e.preventDefault(), E(!0), B((e) => Math.min(e + 1, Q.length - 1)))
                      return
                    }
                    if ("ArrowUp" === e.key && Q.length > 0) {
                      ;(e.preventDefault(), B((e) => Math.max(e - 1, 0)))
                      return
                    }
                    if ("Enter" === e.key && M && null != Q[_]) {
                      ;(e.preventDefault(), Y(Q[_]))
                      return
                    }
                    if (("," === e.key || "Enter" === e.key) && G.tokens.length > 0) {
                      ;(e.preventDefault(), F(), g(""), E(!1))
                      return
                    }
                    if ("Backspace" === e.key && 0 === C.inputValue.length && C.tokens.length > 0)
                      return void z(C.tokens.slice(0, -1), "", !0)
                    "Escape" === e.key && (E(!1), I(null))
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
          H && null != ee
            ? (0, n.jsx)(el, {
                className:
                  "z-[var(--wb-menu-z-index,70)] w-80 max-w-full rounded-2xl [background:var(--oai-wb-surface-primary)] shadow-[0_0_0_1px_hsla(0,0%,0%,0.1),0_4px_11px_hsla(0,0%,0%,0.1)]",
                container: ee,
                floatingRef: O.setFloating,
                style: { ...K.w, ...$ },
                children: (0, n.jsx)("div", {
                  className: "max-h-[inherit] overflow-y-auto p-1",
                  "data-writing-block-email-recipient-popover": "",
                  id: k,
                  role: "listbox",
                  children:
                    Z && 0 === Q.length
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
                      : Q.map((t, i) =>
                          (0, n.jsxs)(
                            "button",
                            {
                              "aria-selected": i === _,
                              className: (0, b.A)(
                                "flex h-12 w-full cursor-pointer items-center gap-2 rounded-xl border-0 bg-transparent px-2 text-start",
                                i === _ && "[background:var(--oai-wb-interactive-secondary-hover)]",
                              ),
                              id: `${k}-option-${i}`,
                              onClick: () => Y(t),
                              onMouseEnter: () => B(i),
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
        { refs: C, floatingStyles: j } = (0, ei.we)({
          middleware: [(0, ei.cY)(4), (0, ei.UU)(), (0, ei.BN)({ padding: 8 })],
          placement: "bottom-start",
          whileElementsMounted: en.ll,
        }),
        S = C.setReference,
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
      let M = (0, n.jsxs)("div", {
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
        E = g.current?.ownerDocument
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
              ;((g.current = e), S(e))
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
          r && null != E
            ? (0, ea.createPortal)(
                (0, n.jsx)("div", {
                  ref: (e) => {
                    ;((h.current = e), A(e))
                  },
                  "aria-label": k,
                  className: "z-[calc(var(--wb-menu-z-index,70)+1)] [font-family:var(--oai-wb-font-sans)]",
                  "data-writing-block-email-recipient-popover": "",
                  role: "dialog",
                  style: { ...K.w, ...j },
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
                              M,
                            ],
                          }),
                        ],
                      })
                    : (0, n.jsx)("div", {
                        className:
                          "w-[260px] rounded-2xl border p-3 [background:var(--oai-wb-surface-primary)] [border-color:var(--oai-wb-divider)] [box-shadow:0_8px_24px_rgba(0,0,0,0.08)]",
                        children: M,
                      }),
                }),
                E.body,
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
      let { recipients: i, unfinishedValue: n } = (0, q.DA)(e, t)
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
          ? ((i = (0, n.jsx)(G, {
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
          subjectClassName: j,
          subjectPlaceholder: S,
          subjectStyle: A,
          onBlur: M,
          onSubjectChange: E,
        } = e
      g[0] !== E
        ? ((t = (e) => {
            E?.(e.target.value)
          }),
          (g[0] = E),
          (g[1] = t))
        : (t = g[1])
      let _ = t,
        B = null != v
      g[2] !== B || g[3] !== k || g[4] !== v || g[5] !== C
        ? ((i = B
            ? (0, n.jsx)("div", {
                className: (0, b.A)("[&>:where(:not(:first-child))]:mt-0", k),
                style: { ...K.w, ...C },
                children: v,
              })
            : null),
          (g[2] = B),
          (g[3] = k),
          (g[4] = v),
          (g[5] = C),
          (g[6] = i))
        : (i = g[6])
      let N = B && "mt-1"
      ;(g[7] !== j || g[8] !== N
        ? ((r = (0, b.A)("pt-0 pb-3 leading-normal", N, j)), (g[7] = j), (g[8] = N), (g[9] = r))
        : (r = g[9]),
        g[10] !== A ? ((o = { ...K.w, ...A }), (g[10] = A), (g[11] = o)) : (o = g[11]))
      let I = !h
      g[12] !== _ || g[13] !== M || g[14] !== x || g[15] !== w || g[16] !== S || g[17] !== I
        ? ((l = (0, n.jsx)("textarea", {
            "aria-label": w,
            className:
              "col-start-1 col-end-2 row-start-1 row-end-2 w-full min-w-0 resize-none overflow-hidden border-none bg-transparent p-0 break-words whitespace-pre-wrap placeholder:[color:var(--oai-wb-text-tertiary)] focus:border-transparent focus:ring-0 focus:outline-hidden",
            disabled: I,
            maxLength: 240,
            name: "subject",
            onBlur: M,
            onChange: _,
            onCopy: eg,
            placeholder: S,
            rows: 1,
            value: x,
          })),
          (g[12] = _),
          (g[13] = M),
          (g[14] = x),
          (g[15] = w),
          (g[16] = S),
          (g[17] = I),
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
    var eh = i("w0X6")
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
        j,
        S,
        A,
        M,
        E,
        _,
        B,
        N,
        I = (0, a.c)(89),
        {
          contacts: D,
          getContactsForQuery: R,
          isRecipientEditable: L,
          isSubjectEditable: T,
          metadata: U,
          onBlur: O,
          onRecipientChange: $,
          onRecipientMetadataChange: V,
          onSearch: P,
          onSubjectChange: z,
          renderSender: F,
          subjectKey: q,
        } = e,
        K = void 0 === D ? ex : D,
        G = void 0 === R ? ek : R,
        Z = void 0 === P ? ey : P,
        H = (0, h.A)(),
        J = U?.bcc ?? "",
        Y = U?.cc ?? "",
        X = U?.recipient ?? ""
      I[0] !== J || I[1] !== Y || I[2] !== X
        ? ((t = { bcc: J, cc: Y, recipient: X }), (I[0] = J), (I[1] = Y), (I[2] = X), (I[3] = t))
        : (t = I[3])
      let ee = t
      I[4] === Symbol.for("react.memo_cache_sentinel") ? ((i = {}), (I[4] = i)) : (i = I[4])
      let [et, ei] = (0, o.useState)(i),
        en = et.bcc?.source === ee.bcc ? et.bcc.value : ee.bcc,
        ea = et.cc?.source === ee.cc ? et.cc.value : ee.cc,
        er = et.recipient?.source === ee.recipient ? et.recipient.value : ee.recipient
      I[5] !== ea || I[6] !== er || I[7] !== en
        ? ((r = { bcc: en, cc: ea, recipient: er }), (I[5] = ea), (I[6] = er), (I[7] = en), (I[8] = r))
        : (r = I[8])
      let eo = r
      I[9] !== ee
        ? ((l = (e, t) => {
            ei((i) => ({ ...i, [e]: { source: ee[e], value: t } }))
          }),
          (I[9] = ee),
          (I[10] = l))
        : (l = I[10])
      let el = l,
        es = U?.subject ?? "",
        [ec, ed] = (0, o.useState)(null),
        eu = ec?.key === q && ec?.source === es ? ec.value : es
      I[11] !== z || I[12] !== es || I[13] !== q
        ? ((s = (e) => {
            ;(ed({ key: q, source: es, value: e }), z?.(e))
          }),
          (I[11] = z),
          (I[12] = es),
          (I[13] = q),
          (I[14] = s))
        : (s = I[14])
      let ep = s
      ;(I[15] !== H
        ? ((c = H.formatMessage({
            id: "codex.writingBlock.email.recipient.field.bcc.label",
            defaultMessage: "Bcc",
            description:
              "Short field label for the blind-carbon-copy recipient line in a shared Codex Apps email writing block used by local Codex threads and Quick Chat. It appears to the left of the recipient input without punctuation; use the locale's standard abbreviation.",
          })),
          (I[15] = H),
          (I[16] = c))
        : (c = I[16]),
        I[17] !== H
          ? ((d = H.formatMessage({
              id: "codex.writingBlock.email.recipient.toggle.bcc.label",
              defaultMessage: "Bcc",
              description:
                "Short button label that reveals the blind-carbon-copy recipient line in a shared Codex Apps email writing block used by local Codex threads and Quick Chat. Use the locale's standard abbreviation.",
            })),
            (I[17] = H),
            (I[18] = d))
          : (d = I[18]),
        I[19] !== H
          ? ((u = H.formatMessage({
              id: "codex.writingBlock.email.recipient.field.cc.label",
              defaultMessage: "Cc",
              description:
                "Short field label for the carbon-copy recipient line in a shared Codex Apps email writing block used by local Codex threads and Quick Chat. It appears to the left of the recipient input without punctuation; use the locale's standard abbreviation.",
            })),
            (I[19] = H),
            (I[20] = u))
          : (u = I[20]),
        I[21] !== H
          ? ((p = H.formatMessage({
              id: "codex.writingBlock.email.recipient.toggle.cc.label",
              defaultMessage: "Cc",
              description:
                "Short button label that reveals the carbon-copy recipient line in a shared Codex Apps email writing block used by local Codex threads and Quick Chat. Use the locale's standard abbreviation.",
            })),
            (I[21] = H),
            (I[22] = p))
          : (p = I[22]),
        I[23] !== H
          ? ((m = H.formatMessage({
              id: "codex.writingBlock.email.recipient.field.to.label",
              defaultMessage: "To",
              description:
                "Short field label for the primary recipient line in a shared Codex Apps email writing block used by local Codex threads and Quick Chat. It appears to the left of the recipient input without punctuation; use the locale's standard email-client label.",
            })),
            (I[23] = H),
            (I[24] = m))
          : (m = I[24]),
        I[25] !== H
          ? ((b = H.formatMessage({
              id: "codex.writingBlock.email.recipient.empty.placeholder",
              defaultMessage: "Recipients",
              description:
                "Placeholder in the collapsed recipient row of a shared Codex Apps email writing block used by local Codex threads and Quick Chat. It appears when the To, Cc, and Bcc fields are all empty.",
            })),
            (I[25] = H),
            (I[26] = b))
          : (b = I[26]),
        I[27] !== c || I[28] !== d || I[29] !== u || I[30] !== p || I[31] !== m || I[32] !== b
          ? ((f = { bcc: c, bccToggle: d, cc: u, ccToggle: p, recipient: m, recipientsPlaceholder: b }),
            (I[27] = c),
            (I[28] = d),
            (I[29] = u),
            (I[30] = p),
            (I[31] = m),
            (I[32] = b),
            (I[33] = f))
          : (f = I[33]))
      let em = f
      I[34] !== H
        ? ((g = H.formatMessage({
            id: "codex.writingBlock.email.subject.field.label",
            defaultMessage: "Subject",
            description:
              "Short field label for the subject line in a shared Codex Apps email writing block used by local Codex threads and Quick Chat. The label may also prefix copied subject text.",
          })),
          (I[34] = H),
          (I[35] = g))
        : (g = I[35])
      let eg = g
      ;(I[36] !== H
        ? ((v = H.formatMessage({
            id: "codex.writingBlock.email.recipient.input.ariaLabel.to",
            defaultMessage: "To recipients",
            description:
              "Accessible label for the To recipient input in a Codex Apps email writing block. Users type or select the primary email recipients here; this label is announced by assistive technology and is not visible.",
          })),
          (I[36] = H),
          (I[37] = v))
        : (v = I[37]),
        I[38] !== H
          ? ((x = H.formatMessage({
              id: "codex.writingBlock.email.recipient.input.ariaLabel.cc",
              defaultMessage: "Cc recipients",
              description:
                "Accessible label for the Cc recipient input in a Codex Apps email writing block. Users type or select carbon-copy recipients here; this label is announced by assistive technology and is not visible.",
            })),
            (I[38] = H),
            (I[39] = x))
          : (x = I[39]),
        I[40] !== H
          ? ((w = H.formatMessage({
              id: "codex.writingBlock.email.recipient.input.ariaLabel.bcc",
              defaultMessage: "Bcc recipients",
              description:
                "Accessible label for the Bcc recipient input in a Codex Apps email writing block. Users type or select blind-carbon-copy recipients here; this label is announced by assistive technology and is not visible.",
            })),
            (I[40] = H),
            (I[41] = w))
          : (w = I[41]),
        I[42] !== H
          ? ((y = H.formatMessage({
              id: "codex.writingBlock.email.recipient.contact.copy.ariaLabel.copied",
              defaultMessage: "Copied email address",
              description:
                "Accessible confirmation label on a recipient contact card after the user copies its email address in a Codex Apps email writing block. It is not visible text.",
            })),
            (I[42] = H),
            (I[43] = y))
          : (y = I[43]),
        I[44] !== H
          ? ((C = H.formatMessage({
              id: "codex.writingBlock.email.recipient.contact.copy.ariaLabel.action",
              defaultMessage: "Copy email address",
              description:
                "Accessible label for the button that copies a recipient's email address from a contact card in a Codex Apps email writing block. It is not visible text.",
            })),
            (I[44] = H),
            (I[45] = C))
          : (C = I[45]),
        I[46] !== H
          ? ((j = H.formatMessage({
              id: "codex.writingBlock.email.recipient.contact.avatar.ariaLabel",
              defaultMessage: "Profile avatar",
              description:
                "Accessible label for a recipient's profile avatar in a Codex Apps email writing block contact chip or suggestion. It is not visible text.",
            })),
            (I[46] = H),
            (I[47] = j))
          : (j = I[47]),
        I[48] !== v || I[49] !== x || I[50] !== w || I[51] !== y || I[52] !== C || I[53] !== j
          ? ((S = { recipient: v, cc: x, bcc: w, copiedEmail: y, copyEmail: C, recipientAvatar: j }),
            (I[48] = v),
            (I[49] = x),
            (I[50] = w),
            (I[51] = y),
            (I[52] = C),
            (I[53] = j),
            (I[54] = S))
          : (S = I[54]))
      let ev = S
      ;(I[55] !== H
        ? ((A = (e) =>
            H.formatMessage(
              {
                id: "codex.writingBlock.email.recipient.contact.remove.ariaLabel",
                defaultMessage: "Remove {recipient}",
                description:
                  "Accessible label for the button that removes a recipient chip from a Codex Apps email writing block. Placeholder {recipient} is the displayed contact name or email address; this label is not visible text.",
              },
              { recipient: e },
            )),
          (I[55] = H),
          (I[56] = A))
        : (A = I[56]),
        I[57] !== ev.bcc ||
        I[58] !== ev.cc ||
        I[59] !== ev.copiedEmail ||
        I[60] !== ev.copyEmail ||
        I[61] !== ev.recipient ||
        I[62] !== ev.recipientAvatar ||
        I[63] !== A
          ? ((M = {
              bccInput: ev.bcc,
              ccInput: ev.cc,
              copiedEmail: ev.copiedEmail,
              copyEmail: ev.copyEmail,
              recipientAvatar: ev.recipientAvatar,
              recipientInput: ev.recipient,
              removeRecipient: A,
            }),
            (I[57] = ev.bcc),
            (I[58] = ev.cc),
            (I[59] = ev.copiedEmail),
            (I[60] = ev.copyEmail),
            (I[61] = ev.recipient),
            (I[62] = ev.recipientAvatar),
            (I[63] = A),
            (I[64] = M))
          : (M = I[64]))
      let eC = L ? "tokenized" : "plain_text"
      I[65] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = {
            copied: (0, n.jsx)(k.I, { "aria-hidden": !1, asset: Q.G }),
            copy: (0, n.jsx)(k.I, { "aria-hidden": !1, asset: W.r }),
            remove: (0, n.jsx)(eh.A, { className: "icon-sm" }),
          }),
          (I[65] = E))
        : (E = I[65])
      let eS = !L
      return (
        I[66] !== O || I[67] !== $ || I[68] !== V
          ? ((_ = (e, t, i, n) => {
              ;(n && $?.(e, t), V?.(e, t, i, n), n && O?.())
            }),
            (I[66] = O),
            (I[67] = $),
            (I[68] = V),
            (I[69] = _))
          : (_ = I[69]),
        I[70] !== K ||
        I[71] !== G ||
        I[72] !== el ||
        I[73] !== Z ||
        I[74] !== em ||
        I[75] !== eo ||
        I[76] !== F ||
        I[77] !== M ||
        I[78] !== eC ||
        I[79] !== eS ||
        I[80] !== _
          ? ((B = (0, n.jsx)(eb, {
              ariaLabels: M,
              avatarFallbackColors: ew,
              contacts: K,
              displayMode: eC,
              getContactsForQuery: G,
              icons: E,
              isEditingDisabled: eS,
              labels: em,
              onCopyEmail: ej,
              onMetadataChange: _,
              onSearch: Z,
              onValueChange: el,
              renderSender: F,
              values: eo,
            })),
            (I[70] = K),
            (I[71] = G),
            (I[72] = el),
            (I[73] = Z),
            (I[74] = em),
            (I[75] = eo),
            (I[76] = F),
            (I[77] = M),
            (I[78] = eC),
            (I[79] = eS),
            (I[80] = _),
            (I[81] = B))
          : (B = I[81]),
        I[82] !== ep || I[83] !== T || I[84] !== O || I[85] !== eu || I[86] !== eg || I[87] !== B
          ? ((N = (0, n.jsx)(ef, {
              isSubjectEditable: T,
              onBlur: O,
              onSubjectChange: ep,
              recipientClassName: "ps-4 pe-4 sm:ps-5 md:pe-5",
              recipientFields: B,
              subject: eu,
              subjectClassName: "ps-4 pe-3 sm:ps-5 sm:pe-2 md:pe-10",
              subjectLabel: eg,
              subjectPlaceholder: eg,
            })),
            (I[82] = ep),
            (I[83] = T),
            (I[84] = O),
            (I[85] = eu),
            (I[86] = eg),
            (I[87] = B),
            (I[88] = N))
          : (N = I[88]),
        N
      )
    }
    function ej(e, t) {
      return (0, B.E)(e, t)
    }
    var eS = i("q1q2"),
      eA = i("ixaN"),
      eM = i("wD9O"),
      eE = i("hdt5")
    function e_(e) {
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
        { editorView: C, suggestion: j } = e,
        S = (0, eM.dz)(),
        A = (0, o.useRef)(null)
      ;(k[0] !== j.mode
        ? ((t = () => {
            "picker" === j.mode && A.current?.focus()
          }),
          (i = [j.mode]),
          (k[0] = j.mode),
          (k[1] = t),
          (k[2] = i))
        : ((t = k[1]), (i = k[2])),
        (0, o.useEffect)(t, i),
        k[3] !== C || k[4] !== j.from
          ? ((r = {
              contextElement: C.dom,
              getBoundingClientRect() {
                if (!C.isDestroyed)
                  try {
                    let { left: e, bottom: t } = C.coordsAtPos(j.from)
                    return DOMRect.fromRect({ x: e, y: t })
                  } catch {}
                return C.dom.getBoundingClientRect()
              },
            }),
            (k[3] = C),
            (k[4] = j.from),
            (k[5] = r))
          : (r = k[5]))
      let M = r
      ;(k[6] !== M ? ((l = { reference: M }), (k[6] = M), (k[7] = l)) : (l = k[7]),
        k[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, eS.cY)(8)),
            (c = (0, eS.UU)({ padding: 8 })),
            (d = (0, eS.BN)({ padding: 8 })),
            (k[8] = s),
            (k[9] = c),
            (k[10] = d))
          : ((s = k[8]), (c = k[9]), (d = k[10])),
        k[11] !== S
          ? ((u = (0, eS.Ej)({
              padding: 8,
              apply(e) {
                let { availableHeight: t, availableWidth: i, elements: n } = e
                ;((n.floating.style.maxWidth = `${i}px`),
                  n.floating.style.setProperty("--autocomplete-overlay-available-height", `${t / S}px`))
              },
            })),
            (k[11] = S),
            (k[12] = u))
          : (u = k[12]),
        k[13] !== u ? ((p = [s, c, d, u]), (k[13] = u), (k[14] = p)) : (p = k[14]))
      let E = !C.isDestroyed
      k[15] !== E || k[16] !== l || k[17] !== p
        ? ((m = { elements: l, middleware: p, open: E, placement: "bottom-start", whileElementsMounted: en.ll }),
          (k[15] = E),
          (k[16] = l),
          (k[17] = p),
          (k[18] = m))
        : (m = k[18])
      let { floatingStyles: _, refs: B } = (0, eS.we)(m),
        { setFloating: N } = B
      if (C.isDestroyed) return null
      let I = 1 !== S ? S : void 0
      return (
        k[19] !== I ? ((b = { zoom: I }), (k[19] = I), (k[20] = b)) : (b = k[20]),
        k[21] === Symbol.for("react.memo_cache_sentinel") ? ((f = { emoji: {} }), (k[21] = f)) : (f = k[21]),
        k[22] !== C ? ((g = () => (0, eA.HU)(C)), (k[22] = C), (k[23] = g)) : (g = k[23]),
        k[24] !== C || k[25] !== j
          ? ((h = (e) => {
              "emoji" !== e.kind || C.isDestroyed || (C.focus(), (0, eA.te)(C, e.value, j))
            }),
            (k[24] = C),
            (k[25] = j),
            (k[26] = h))
          : (h = k[26]),
        k[27] !== C.dom || k[28] !== j.mode || k[29] !== j.query || k[30] !== g || k[31] !== h
          ? ((v = (0, n.jsx)(
              eE.c,
              { capabilities: f, keyboardTarget: C.dom, inputRef: A, query: j.query, onDismiss: g, onSelect: h },
              j.mode,
            )),
            (k[27] = C.dom),
            (k[28] = j.mode),
            (k[29] = j.query),
            (k[30] = g),
            (k[31] = h),
            (k[32] = v))
          : (v = k[32]),
        k[33] !== b || k[34] !== v
          ? ((x = (0, n.jsx)("div", { style: b, children: v })), (k[33] = b), (k[34] = v), (k[35] = x))
          : (x = k[35]),
        k[36] !== _ || k[37] !== N || k[38] !== x
          ? ((w = (0, n.jsx)("div", {
              ref: N,
              className: "z-50",
              "data-writing-block-emoji-picker": !0,
              style: _,
              children: x,
            })),
            (k[36] = _),
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
    var eB = i("s6ST"),
      eN = i("KL0B"),
      eI = i("J7pV"),
      eD = i("GTmQ")
    function eR(e) {
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
              onMouseDown: eL,
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
                  onMouseDown: eL,
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
    function eL(e) {
      e.preventDefault()
    }
    var eT = i("ygO2")
    function eU(e) {
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
        [C, j] = (0, o.useState)(null)
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
      let S = t
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
      let M = r
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
      let E = l
      f[8] !== g || f[9] !== x || f[10] !== w
        ? ((s = () => {
            x && !w && null != g && !g.isDestroyed && (0, eD.zT)(g.state, g.dispatch, g) && j(g)
          }),
          (f[8] = g),
          (f[9] = x),
          (f[10] = w),
          (f[11] = s))
        : (s = f[11])
      let _ = s
      f[12] !== g || f[13] !== x || f[14] !== w
        ? ((c = () => {
            !x || w || null == g || g.isDestroyed || (0, eD.ZF)(g.state, g.dispatch, g)
          }),
          (f[12] = g),
          (f[13] = x),
          (f[14] = w),
          (f[15] = c))
        : (c = f[15])
      let B = c
      if ("viewer" === (void 0 === y ? "inline" : y)) {
        let e,
          t = !x || w
        return (
          f[16] !== B || f[17] !== _ || f[18] !== v.canRedo || f[19] !== v.canUndo || f[20] !== t
            ? ((e = (0, n.jsx)(N.vI, { canRedo: v.canRedo, canUndo: v.canUndo, disabled: t, onRedo: B, onUndo: _ })),
              (f[16] = B),
              (f[17] = _),
              (f[18] = v.canRedo),
              (f[19] = v.canUndo),
              (f[20] = t),
              (f[21] = e))
            : (e = f[21]),
          e
        )
      }
      if (!v.canUndo && !v.canRedo) return null
      let I = v.canUndo || v.canRedo,
        D = !x || w,
        R = v.canRedo || (null != C && C === g)
      return (
        f[22] !== B ||
        f[23] !== _ ||
        f[24] !== v.canRedo ||
        f[25] !== v.canUndo ||
        f[26] !== R ||
        f[27] !== I ||
        f[28] !== D
          ? ((d = {
              canRedo: v.canRedo,
              canUndo: v.canUndo,
              hasSessionEdits: I,
              isInteractionDisabled: D,
              onRedo: B,
              onUndo: _,
              showRedoButton: R,
            }),
            (f[22] = B),
            (f[23] = _),
            (f[24] = v.canRedo),
            (f[25] = v.canUndo),
            (f[26] = R),
            (f[27] = I),
            (f[28] = D),
            (f[29] = d))
          : (d = f[29]),
        f[30] !== E || f[31] !== M || f[32] !== A || f[33] !== S
          ? ((u = { redoButton: E, redoTooltip: M, undoButton: A, undoTooltip: S }),
            (f[30] = E),
            (f[31] = M),
            (f[32] = A),
            (f[33] = S),
            (f[34] = u))
          : (u = f[34]),
        f[35] !== d || f[36] !== u
          ? ((p = (0, n.jsx)(eR, { controls: d, labels: u, renderButton: eO })), (f[35] = d), (f[36] = u), (f[37] = p))
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
    function eO(e) {
      let { action: t, disabled: i, label: a, onClick: r, onMouseDown: o, tooltip: s } = e
      return (0, n.jsx)(l.m, {
        sideOffset: 0,
        content: s,
        children: (0, n.jsx)(eT.$, {
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
            asset: eI.T,
          }),
        }),
      })
    }
    var e$ = i("JIxO"),
      eV = i("ozm1"),
      eP = i("ksPB")
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
        j = i[C]
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
                        children: eF(i),
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
                        children: eF(t),
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
                  "aria-busy": j?.isLoading,
                  className: (0, b.A)(
                    "flex max-w-full items-center gap-[var(--oai-wb-spacing)] rounded-full border-0 px-[calc(var(--oai-wb-spacing)*3)] [background:var(--oai-wb-surface-secondary)] [color:var(--oai-wb-text-primary)] [font-family:inherit] font-medium focus-visible:[outline:2px_solid_var(--oai-wb-focus)] focus-visible:[outline-offset:1px]",
                    "body" === c
                      ? "h-[calc(var(--oai-wb-spacing)*7)] text-[0.75rem]"
                      : "h-[calc(var(--oai-wb-spacing)*9)] [font-size:var(--oai-wb-font-size)]",
                    l ? "cursor-not-allowed opacity-50" : "cursor-pointer",
                  ),
                  disabled: l,
                  "data-loading": j?.isLoading || void 0,
                  ref: m,
                  type: "button",
                  children: [
                    (0, n.jsxs)("span", {
                      className: (0, b.A)(
                        "inline-flex min-w-0 items-center gap-[var(--oai-wb-spacing)]",
                        j?.labelClassName,
                      ),
                      id: p,
                      children: [
                        (0, n.jsx)("span", {
                          className: "inline-flex shrink-0 items-center text-[1.2em] leading-none",
                          children: eF(C),
                        }),
                        " ",
                        (0, n.jsx)("span", { className: "truncate", children: j?.label }),
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
    function eF(e) {
      let t = e + 1
      return t > 20 ? `${t}.` : String.fromCodePoint(9312 + e)
    }
    let eQ = "__writing-block-original__"
    function eW(e) {
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
          primaryOptionLabel: j,
          selection: S,
          renderMenu: A,
        } = e,
        M = void 0 !== f && f,
        E = void 0 !== g && g,
        _ = void 0 === C ? "body" : C,
        B = j ?? y[0]?.label
      d[0] !== v || d[1] !== y || d[2] !== B
        ? ((t = null != v && (B === v || y.some((e) => e.label === v))), (d[0] = v), (d[1] = y), (d[2] = B), (d[3] = t))
        : (t = d[3])
      let N = t,
        I = E && null != v && !N
      if (!(y.length > 0 || I || null != u || null != B)) return null
      d[4] !== E || d[5] !== v || d[6] !== B
        ? ((i = eG(B, v, E)), (d[4] = E), (d[5] = v), (d[6] = B), (d[7] = i))
        : (i = d[7])
      let D = i,
        R = B ?? k,
        L = D ? h : void 0
      if (
        (d[8] !== D || d[9] !== R || d[10] !== L
          ? ((r = { id: eQ, isLoading: D, label: R, labelClassName: L }),
            (d[8] = D),
            (d[9] = R),
            (d[10] = L),
            (d[11] = r))
          : (r = d[11]),
        d[12] !== u || d[13] !== E || d[14] !== h || d[15] !== v || d[16] !== y || d[17] !== I || d[18] !== r)
      ) {
        let e
        if (
          (d[20] !== E || d[21] !== h || d[22] !== v
            ? ((e = (e, t) => {
                let i = eG(e.label, v, E)
                return { id: eq(e.id, t + 1), isLoading: i, label: e.label, labelClassName: i ? h : void 0 }
              }),
              (d[20] = E),
              (d[21] = h),
              (d[22] = v),
              (d[23] = e))
            : (e = d[23]),
          (o = [r, ...y.slice(1).map(e)]),
          I)
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
        ;((d[12] = u), (d[13] = E), (d[14] = h), (d[15] = v), (d[16] = y), (d[17] = I), (d[18] = r), (d[19] = o))
      } else o = d[19]
      d[34] !== u || d[35] !== S
        ? ((l = u?.isActive === !0 ? eK(u.id) : S.isOriginal ? eQ : eq(S.id, S.index)),
          (d[34] = u),
          (d[35] = S),
          (d[36] = l))
        : (l = d[36])
      let T = l
      return (
        d[37] !== u || d[38] !== x || d[39] !== w || d[40] !== y || d[41] !== B
          ? ((s = (e) => {
              if (null != u && e === eK(u.id)) return void u.onAction()
              if (e === eQ) {
                let e = { isOriginal: !0 }
                ;(null != B && x?.({ index: 0, label: B, selection: e }), w(e))
                return
              }
              let t = y.findIndex((t, i) => eq(t.id, i) === e),
                i = y[t]
              if (null == i || t < 1) return
              let n = { id: i.id, index: t, isOriginal: !1 }
              ;(x?.({ index: t, label: i.label, selection: n }), w(n))
            }),
            (d[37] = u),
            (d[38] = x),
            (d[39] = w),
            (d[40] = y),
            (d[41] = B),
            (d[42] = s))
          : (s = d[42]),
        d[43] !== T ||
        d[44] !== p ||
        d[45] !== b ||
        d[46] !== m ||
        d[47] !== M ||
        d[48] !== _ ||
        d[49] !== A ||
        d[50] !== s ||
        d[51] !== o
          ? ((c = (0, n.jsx)(ez, {
              activeOptionId: T,
              ariaLabel: p,
              className: m,
              chevronIcon: b,
              disabled: M,
              onOptionChange: s,
              options: o,
              placement: _,
              renderMenu: A,
            })),
            (d[43] = T),
            (d[44] = p),
            (d[45] = b),
            (d[46] = m),
            (d[47] = M),
            (d[48] = _),
            (d[49] = A),
            (d[50] = s),
            (d[51] = o),
            (d[52] = c))
          : (c = d[52]),
        c
      )
    }
    function eq(e, t) {
      return `${e}:${t}`
    }
    function eK(e) {
      return `__writing-block-action__:${e}`
    }
    function eG(e, t, i) {
      return i && null != e && null != t && t === e
    }
    var eZ = i("yC2B"),
      eH = i("yGJW")
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
        j,
        S,
        A,
        M = (0, a.c)(76),
        {
          activeSectionId: E,
          isWriteLikeMeSubmitting: _,
          libraryFileId: B,
          metadata: N,
          onSelect: I,
          onWriteLikeMeAction: D,
          sections: R,
          content: L,
          variant: U,
        } = e,
        O = void 0 !== _ && _,
        $ = (0, f.gh)(T.u),
        V = (0, h.A)()
      if (
        M[0] !== E ||
        M[1] !== L ||
        M[2] !== V ||
        M[3] !== O ||
        M[4] !== B ||
        M[5] !== N ||
        M[6] !== I ||
        M[7] !== D ||
        M[8] !== $ ||
        M[9] !== R ||
        M[10] !== U
      ) {
        c = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            a,
            b,
            f,
            h,
            w,
            j = (0, d.I$)(N)
          ;(M[26] !== N || M[27] !== U ? ((e = P(N, U)), (M[26] = N), (M[27] = U), (M[28] = e)) : (e = M[28]),
            (i = e),
            (o = V.formatMessage({
              id: "codex.writingBlock.toneVariants.original",
              defaultMessage: "Original",
              description:
                "Short tab label above a writing block editor. Selecting it restores the original draft after a Write Like Me rewrite. Keep the label compact.",
            })))
          let S = j.findIndex(d.Vz),
            A = j[S],
            _ = N?.[d.uV] === !0
          M[29] !== V
            ? ((a = V.formatMessage({
                id: "codex.writingBlock.toneVariants.writeLikeMe",
                defaultMessage: "Write Like Me",
                description:
                  "Short action label in the writing-style tabs above a Codex Apps writing-block editor. Selecting it rewrites the current draft using the signed-in user's saved personal writing style.",
              })),
              (M[29] = V),
              (M[30] = a))
            : (a = M[30])
          let T = a
          r = R?.flatMap((e) =>
            e.id === d.LL ? [{ ...e, tone: o }] : _ || !(0, d.Vz)({ id: e.id, label: e.tone }) ? [e] : [],
          )
          let z = r?.findIndex((e) => e.id === E) ?? -1
          ;((l = z > 0 ? { id: E, index: z, isOriginal: !1 } : { isOriginal: !0 }),
            M[31] !== N ? ((b = (0, d.ie)(N)), (M[31] = N), (M[32] = b)) : (b = M[32]))
          let F = b
          M[33] !== F || M[34] !== N
            ? ((f = (0, d.UI)(N)), (h = F && (0, d.AL)(f)), (M[33] = F), (M[34] = N), (M[35] = f), (M[36] = h))
            : ((f = M[35]), (h = M[36]))
          let Q = h
          M[37] !== j ||
          M[38] !== i ||
          M[39] !== L ||
          M[40] !== Q ||
          M[41] !== _ ||
          M[42] !== O ||
          M[43] !== D ||
          M[44] !== T ||
          M[45] !== A ||
          M[46] !== S
            ? ((w =
                null != D && !_ && (null != A || Q || i)
                  ? {
                      id: d.GK,
                      isActive: O,
                      isLoading: O || Q,
                      label: T,
                      onAction: () => {
                        O ||
                          Q ||
                          (null != A
                            ? D({ id: A.id, index: S })
                            : i &&
                              null != L &&
                              D(
                                { id: d.GK, index: 0 === j.length ? 1 : j.length },
                                0 === j.length ? { primaryOption: { id: d.LL, label: "Original", content: L } } : {},
                              ))
                      },
                    }
                  : void 0),
              (M[37] = j),
              (M[38] = i),
              (M[39] = L),
              (M[40] = Q),
              (M[41] = _),
              (M[42] = O),
              (M[43] = D),
              (M[44] = T),
              (M[45] = A),
              (M[46] = S),
              (M[47] = w))
            : (w = M[47])
          let W = w
          if ((r?.length ?? 0) < 2 && null == W && !F) {
            c = null
            break e
          }
          ;((t = eW),
            (u = W),
            M[48] !== V
              ? ((p = V.formatMessage({
                  id: "codex.writingBlock.toneVariants.tabs.ariaLabel",
                  defaultMessage: "Writing style variants",
                  description:
                    "Accessible label for the tone-variant tabs in a shared Codex Apps writing block used by local Codex threads and Quick Chat. Selecting a tab switches the editor to a generated writing style variant.",
                })),
                (M[48] = V),
                (M[49] = p))
              : (p = M[49]),
            M[50] === Symbol.for("react.memo_cache_sentinel")
              ? ((m = (0, n.jsx)(C.Aq_, {})), (M[50] = m))
              : (m = M[50]),
            (g = O),
            (v = F),
            (x = Q ? void 0 : f),
            M[51] !== B || M[52] !== $
              ? ((y = (e) => {
                  let { index: t, label: i } = e,
                    n = $.get(eH.YV)
                  n.isChatgptBrowserReplacement &&
                    n.logProductEvent(eP.lq, { optionIndex: (0, eV.At)(t), optionLabel: i, libraryFileId: B })
                }),
                (M[51] = B),
                (M[52] = $),
                (M[53] = y))
              : (y = M[53]),
            (k = (e) => {
              let t = e.isOriginal ? r?.[0] : r?.[e.index]?.id === e.id ? r[e.index] : void 0
              null != t && I(t.id)
            }),
            (s = r?.map((e) => ({ id: e.id, label: (0, d.Vz)({ id: e.id, label: e.tone }) ? T : e.tone })) ?? []))
        }
        ;((M[0] = E),
          (M[1] = L),
          (M[2] = V),
          (M[3] = O),
          (M[4] = B),
          (M[5] = N),
          (M[6] = I),
          (M[7] = D),
          (M[8] = $),
          (M[9] = R),
          (M[10] = U),
          (M[11] = t),
          (M[12] = i),
          (M[13] = r),
          (M[14] = o),
          (M[15] = l),
          (M[16] = s),
          (M[17] = c),
          (M[18] = u),
          (M[19] = p),
          (M[20] = m),
          (M[21] = g),
          (M[22] = v),
          (M[23] = x),
          (M[24] = y),
          (M[25] = k))
      } else
        ((t = M[11]),
          (i = M[12]),
          (r = M[13]),
          (o = M[14]),
          (l = M[15]),
          (s = M[16]),
          (c = M[17]),
          (u = M[18]),
          (p = M[19]),
          (m = M[20]),
          (g = M[21]),
          (v = M[22]),
          (x = M[23]),
          (y = M[24]),
          (k = M[25]))
      if (c !== Symbol.for("react.early_return_sentinel")) return c
      let z = r?.[0]?.tone ?? o
      return (
        M[54] !== i || M[55] !== r?.[0]?.id || M[56] !== N || M[57] !== o
          ? ((j = r?.[0]?.id === d.LL ? o : ((0, d.d2)(N) ?? (i ? o : void 0))),
            (M[54] = i),
            (M[55] = r?.[0]?.id),
            (M[56] = N),
            (M[57] = o),
            (M[58] = j))
          : (j = M[58]),
        M[59] !== V.locale
          ? ((S = (e) => {
              let { activeOptionId: t, disabled: i, onOpenChange: a, onOptionChange: r, options: o, trigger: l } = e
              return (0, n.jsx)(w.Ab, {
                align: "end",
                contentWidth: "menuBounded",
                dir: (0, eZ.b)(V.locale),
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
            (M[59] = V.locale),
            (M[60] = S))
          : (S = M[60]),
        M[61] !== t ||
        M[62] !== l ||
        M[63] !== s ||
        M[64] !== z ||
        M[65] !== j ||
        M[66] !== S ||
        M[67] !== u ||
        M[68] !== p ||
        M[69] !== m ||
        M[70] !== g ||
        M[71] !== v ||
        M[72] !== x ||
        M[73] !== y ||
        M[74] !== k
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
              primaryOptionLabel: j,
              renderMenu: S,
              selection: l,
            })),
            (M[61] = t),
            (M[62] = l),
            (M[63] = s),
            (M[64] = z),
            (M[65] = j),
            (M[66] = S),
            (M[67] = u),
            (M[68] = p),
            (M[69] = m),
            (M[70] = g),
            (M[71] = v),
            (M[72] = x),
            (M[73] = y),
            (M[74] = k),
            (M[75] = A))
          : (A = M[75]),
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
        _,
        I,
        D,
        R,
        T,
        U,
        O,
        $,
        Q,
        W,
        q,
        K,
        G,
        Z,
        H,
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
          hideSlashMenu: ej,
          historyInteractionDisabled: eS,
          headerLeadingContent: eA,
          isEditable: eM,
          isEditSelectionLoading: eE,
          isHeaderComposerOpen: eI,
          isMagicEditSubmitting: eD,
          isWriteLikeMeSubmitting: eR,
          libraryFileId: eL,
          metadataInteractionDisabled: eT,
          onBlur: eO,
          onAskForChanges: eV,
          onBeforeExternalContentUpdate: eP,
          onCancelEditSelection: ez,
          onContentChange: eF,
          onCopy: eQ,
          onCopySuccess: eW,
          onCopyContentPrepared: eq,
          onEditSelection: eK,
          onEditSelectionOpenChange: eG,
          onEditorEscape: eZ,
          onEditorKeyDownCapture: eH,
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
        to = void 0 === eb ? F.P$ : eb,
        tl = void 0 !== ew && ew,
        ts = void 0 !== ey && ey,
        tc = void 0 !== ek && ek,
        td = void 0 !== ej && ej,
        tu = void 0 !== eS && eS,
        tp = void 0 !== eE && eE,
        tm = void 0 !== eI && eI,
        tb = void 0 !== eD && eD,
        tf = void 0 !== eT && eT,
        tg = (0, h.A)(),
        th = (0, f.Ul)((0, c.k6)() ? S.RZ : S.nw) && !(0, c.j4)()
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
        tj = (0, o.useSyncExternalStore)(tk.subscribe, tC, e2)
      ;(ei[5] !== tl || ei[6] !== ty || ei[7] !== eM || ei[8] !== th
        ? ((r = () => {
            if (null != ty && !ty.isDestroyed)
              return (ty.dom.classList.toggle(eY, !(0, c.j4)() && (th || !eM || tl)), () => ty.dom.classList.remove(eY))
          }),
          (g = [tl, ty, eM, th]),
          (ei[5] = tl),
          (ei[6] = ty),
          (ei[7] = eM),
          (ei[8] = th),
          (ei[9] = r),
          (ei[10] = g))
        : ((r = ei[9]), (g = ei[10])),
        (0, o.useEffect)(r, g),
        ei[11] !== ty || ei[12] !== tx || ei[13] !== eQ || ei[14] !== eq || ei[15] !== eW
          ? ((y = (e) => {
              var t
              let i, n
              e.stopPropagation()
              let a = null == ty ? null : (0, E.WW)(ty.dom)?.htmlText,
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
              ;(eQ?.(r),
                eq?.(),
                (0, B.E)(null == a ? r : { "text/plain": r, "text/html": a }, e).then((e) => {
                  e && eW?.()
                }))
            }),
            (ei[11] = ty),
            (ei[12] = tx),
            (ei[13] = eQ),
            (ei[14] = eq),
            (ei[15] = eW),
            (ei[16] = y))
          : (y = ei[16]))
      let tS = y
      ;(ei[17] === Symbol.for("react.memo_cache_sentinel") ? ((_ = (0, n.jsx)(C.Gn, {})), (ei[17] = _)) : (_ = ei[17]),
        ei[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = (0, n.jsx)(v.A, {
              id: "copyButton.copy",
              defaultMessage: "Copy",
              description: "Text displayed when the content can be copied",
            })),
            (ei[18] = I))
          : (I = ei[18]),
        ei[19] !== tr || ei[20] !== tS
          ? ((D = (0, n.jsx)(w.ms.Item, { disabled: tr, leftIcon: _, onClick: tS, children: I })),
            (ei[19] = tr),
            (ei[20] = tS),
            (ei[21] = D))
          : (D = ei[21]))
      let tA = D
      ei[22] !== el || ei[23] !== tA
        ? ((R = (0, n.jsxs)(n.Fragment, { children: [tA, el] })), (ei[22] = el), (ei[23] = tA), (ei[24] = R))
        : (R = ei[24])
      let tM = R
      ei[25] !== tg
        ? ((T = tg.formatMessage({
            id: "codex.writingBlock.actions.moreActions",
            defaultMessage: "More actions",
            description:
              "Tooltip and accessible label for the overflow menu in an expanded Codex Apps writing block editor. The menu contains Copy and Download actions.",
          })),
          (ei[25] = tg),
          (ei[26] = T))
        : (T = ei[26])
      let tE = T,
        t_ = "viewer" === ta && "gap-2"
      ;(ei[27] !== t_ ? ((U = (0, b.A)("flex items-center", t_)), (ei[27] = t_), (ei[28] = U)) : (U = ei[28]),
        ei[29] !== ta || ei[30] !== tr || ei[31] !== tS || ei[32] !== eL
          ? ((O = "viewer" === ta && null == eL && (0, n.jsx)(z.B, { isDisabled: tr, onCopy: tS, renderButton: e1 })),
            (ei[29] = ta),
            (ei[30] = tr),
            (ei[31] = tS),
            (ei[32] = eL),
            (ei[33] = O))
          : (O = ei[33]))
      let tB = "viewer" === ta ? "viewer" : "inline"
      ;(ei[34] !== ty || ei[35] !== tu || ei[36] !== eM || ei[37] !== ea.historySummary || ei[38] !== tB
        ? (($ = (0, n.jsx)(eU, {
            presentation: tB,
            editorView: ty,
            historySummary: ea.historySummary,
            isEditable: eM,
            isInteractionDisabled: tu,
          })),
          (ei[34] = ty),
          (ei[35] = tu),
          (ei[36] = eM),
          (ei[37] = ea.historySummary),
          (ei[38] = tB),
          (ei[39] = $))
        : ($ = ei[39]),
        ei[40] !== el || ei[41] !== ta || ei[42] !== tr || ei[43] !== tM || ei[44] !== tS || ei[45] !== tE
          ? ((Q =
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
                          content: tE,
                          children: (0, n.jsx)(j.p, { label: tE }),
                        }),
                        children: tM,
                      })
                    : (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(z.B, { isDisabled: tr, onCopy: tS }), el] }),
              })),
            (ei[40] = el),
            (ei[41] = ta),
            (ei[42] = tr),
            (ei[43] = tM),
            (ei[44] = tS),
            (ei[45] = tE),
            (ei[46] = Q))
          : (Q = ei[46]),
        ei[47] !== eo || ei[48] !== er || ei[49] !== U || ei[50] !== O || ei[51] !== $ || ei[52] !== Q
          ? ((W = (0, n.jsxs)("div", { className: U, children: [O, er, $, eo, Q] })),
            (ei[47] = eo),
            (ei[48] = er),
            (ei[49] = U),
            (ei[50] = O),
            (ei[51] = $),
            (ei[52] = Q),
            (ei[53] = W))
          : (W = ei[53]))
      let tN = null == eA ? void 0 : "!ps-0 !pe-2 !py-2"
      ;(ei[54] !== eR ||
      ei[55] !== eL ||
      ei[56] !== e6 ||
      ei[57] !== e7 ||
      ei[58] !== ea.activeToneSectionId ||
      ei[59] !== ea.displayedContent ||
      ei[60] !== ea.selectToneSection ||
      ei[61] !== ea.toneSections ||
      ei[62] !== ti ||
      ei[63] !== tn
        ? ((q =
            (null != ea.toneSections && ea.toneSections.length > 0) || (0, d.ie)(tn) || (null != e7 && P(tn, ti))
              ? (0, n.jsx)(eJ, {
                  activeSectionId: ea.activeToneSectionId ?? ea.toneSections?.[0]?.id ?? "",
                  isWriteLikeMeSubmitting: eR,
                  libraryFileId: eL,
                  metadata: tn,
                  onSelect: e6 ?? ea.selectToneSection,
                  onWriteLikeMeAction: e7,
                  sections: ea.toneSections,
                  content: ea.displayedContent,
                  variant: ti,
                })
              : null),
          (ei[54] = eR),
          (ei[55] = eL),
          (ei[56] = e6),
          (ei[57] = e7),
          (ei[58] = ea.activeToneSectionId),
          (ei[59] = ea.displayedContent),
          (ei[60] = ea.selectToneSection),
          (ei[61] = ea.toneSections),
          (ei[62] = ti),
          (ei[63] = tn),
          (ei[64] = q))
        : (q = ei[64]),
        ei[65] !== el ||
        ei[66] !== ta ||
        ei[67] !== tA ||
        ei[68] !== eA ||
        ei[69] !== tg ||
        ei[70] !== eL ||
        ei[71] !== e9 ||
        ei[72] !== tt ||
        ei[73] !== eu
          ? ((K =
              "viewer" === ta
                ? (e9?.(tA) ??
                  (0, n.jsx)(N.jH, {
                    icon: (0, n.jsx)(k.I, { asset: s.g }),
                    libraryBreadcrumb: null == eL ? null : (0, n.jsx)(A.x, { libraryFileId: eL }),
                    tooltipBreadcrumb: null == eL ? null : (0, n.jsx)(A.x, { libraryFileId: eL, variant: "text" }),
                    title:
                      "string" == typeof tt
                        ? tt
                        : tg.formatMessage({
                            id: "codex.writingBlock.header.title.fallback",
                            defaultMessage: "Writing",
                            description:
                              "Short fallback title in the header of a writing block shared by local Codex threads and Quick Chat when the block does not provide a custom title.",
                          }),
                    children: (0, n.jsxs)(x.h, { libraryFileId: eL, versionHistoryAction: eu, children: [el, tA] }),
                  }))
                : eA),
            (ei[65] = el),
            (ei[66] = ta),
            (ei[67] = tA),
            (ei[68] = eA),
            (ei[69] = tg),
            (ei[70] = eL),
            (ei[71] = e9),
            (ei[72] = tt),
            (ei[73] = eu),
            (ei[74] = K))
          : (K = ei[74]))
      let tI = "viewer" === ta ? el : void 0,
        tD = "viewer" === ta ? eu : void 0,
        tR = "viewer" === ta ? tA : void 0
      ;(ei[75] !== tt || ei[76] !== ti
        ? ((G =
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
          (ei[77] = G))
        : (G = ei[77]),
        ei[78] !== tw ||
        ei[79] !== ev ||
        ei[80] !== ex ||
        ei[81] !== eM ||
        ei[82] !== tf ||
        ei[83] !== eO ||
        ei[84] !== e3 ||
        ei[85] !== e5 ||
        ei[86] !== ti
          ? ((Z =
              "email" === ti
                ? (0, n.jsx)(eC, {
                    ...ex,
                    isRecipientEditable: eM && !tf && null != e3,
                    isSubjectEditable: eM && !tf && null != e5,
                    metadata: ev,
                    onBlur: eO,
                    onRecipientChange: e3,
                    onSubjectChange: e5,
                    subjectKey: tw,
                  })
                : null),
            (ei[78] = tw),
            (ei[79] = ev),
            (ei[80] = ex),
            (ei[81] = eM),
            (ei[82] = tf),
            (ei[83] = eO),
            (ei[84] = e3),
            (ei[85] = e5),
            (ei[86] = ti),
            (ei[87] = Z))
          : (Z = ei[87]),
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
        ei[98] !== eM ||
        ei[99] !== tm ||
        ei[100] !== tb ||
        ei[101] !== eP ||
        ei[102] !== eO ||
        ei[103] !== eF ||
        ei[104] !== eZ ||
        ei[105] !== eH ||
        ei[106] !== eX ||
        ei[107] !== tv ||
        ei[108] !== ea ||
        ei[109] !== ti
          ? ((H =
              null == ef
                ? (0, n.jsx)("div", {
                    className: (0, b.A)(p.p.root, "text-size-chat text-default [unicode-bidi:plaintext]"),
                    "data-markdown-copy-content": !0,
                    dir: "auto",
                    children: (0, n.jsx)(M.r, {
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
                      ;(eH?.(e),
                        "Escape" === e.key &&
                          !e.defaultPrevented &&
                          null != eZ &&
                          null != ty &&
                          (0, F.J)(ty) &&
                          (e.preventDefault(), e.stopPropagation(), eZ()))
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
                        children: (0, n.jsx)(L, {
                          bufferStreamingContent: ec,
                          ariaLabel: tv,
                          className: (0, b.A)(
                            "magic-edit-minimal",
                            ts && p.p.page,
                            tm && "header-magic-edit-composer-open",
                            tb && "magic-edit-submitting",
                          ),
                          createEditor: to,
                          editable: eM && !tl,
                          editorClassName: "leading-relaxed",
                          editorKey: tw,
                          onBlur: eO,
                          onBeforeExternalContentUpdate: eP,
                          onChange: (e) => {
                            eF?.(e, ea.activeToneSectionId)
                          },
                          placeholder: tv,
                          state: ea,
                        }),
                      }),
                      null == ep ? null : (0, n.jsx)(V, { editorView: ty, revision: ep }),
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
            (ei[98] = eM),
            (ei[99] = tm),
            (ei[100] = tb),
            (ei[101] = eP),
            (ei[102] = eO),
            (ei[103] = eF),
            (ei[104] = eZ),
            (ei[105] = eH),
            (ei[106] = eX),
            (ei[107] = tv),
            (ei[108] = ea),
            (ei[109] = ti),
            (ei[110] = H))
          : (H = ei[110]),
        ei[111] !== tl || ei[112] !== ty || ei[113] !== eM || ei[114] !== ea.emojiSuggestionState
          ? ((J =
              eM && !tl && null != ty && null != ea.emojiSuggestionState
                ? (0, n.jsx)(e_, { editorView: ty, suggestion: ea.emojiSuggestionState })
                : null),
            (ei[111] = tl),
            (ei[112] = ty),
            (ei[113] = eM),
            (ei[114] = ea.emojiSuggestionState),
            (ei[115] = J))
          : (J = ei[115]),
        ei[116] !== tl ||
        ei[117] !== ty ||
        ei[118] !== td ||
        ei[119] !== eM ||
        ei[120] !== e4 ||
        ei[121] !== ea.slashMenuState
          ? ((Y =
              !eM || tl || null == ty || td
                ? null
                : (0, n.jsx)(eN.Y, {
                    editorView: ty,
                    onExecute: (e, t) => {
                      let i = { commandId: e, query: t, view: ty }
                      null == e4 ? (0, F.r0)(i) : e4(i)
                    },
                    state: ea.slashMenuState,
                  })),
            (ei[116] = tl),
            (ei[117] = ty),
            (ei[118] = td),
            (ei[119] = eM),
            (ei[120] = e4),
            (ei[121] = ea.slashMenuState),
            (ei[122] = Y))
          : (Y = ei[122]),
        ei[123] !== ty ||
        ei[124] !== tc ||
        ei[125] !== tp ||
        ei[126] !== eM ||
        ei[127] !== th ||
        ei[128] !== eV ||
        ei[129] !== ez ||
        ei[130] !== eK ||
        ei[131] !== eG ||
        ei[132] !== tj ||
        ei[133] !== ea.emojiSuggestionState ||
        ei[134] !== ea.proseMirrorStore ||
        ei[135] !== ea.selectionSummary
          ? ((X =
              !eM ||
              tc ||
              null == ty ||
              null != ea.emojiSuggestionState ||
              (ea.selectionSummary.isCollapsed && null == (0, m.Bp)(tj))
                ? null
                : (0, n.jsx)(eB.W, {
                    editorView: ty,
                    isEditSelectionLoading: tp,
                    isOpenLinkModifierPressed: th,
                    onAskForChanges: eV,
                    onCancelEditSelection: ez,
                    onEditSelection: eK,
                    onEditSelectionOpenChange: eG,
                    proseMirrorStore: ea.proseMirrorStore,
                  })),
            (ei[123] = ty),
            (ei[124] = tc),
            (ei[125] = tp),
            (ei[126] = eM),
            (ei[127] = th),
            (ei[128] = eV),
            (ei[129] = ez),
            (ei[130] = eK),
            (ei[131] = eG),
            (ei[132] = tj),
            (ei[133] = ea.emojiSuggestionState),
            (ei[134] = ea.proseMirrorStore),
            (ei[135] = ea.selectionSummary),
            (ei[136] = X))
          : (X = ei[136]),
        ei[137] !== tx ||
        ei[138] !== W ||
        ei[139] !== tN ||
        ei[140] !== q ||
        ei[141] !== K ||
        ei[142] !== tI ||
        ei[143] !== tD ||
        ei[144] !== tR ||
        ei[145] !== G ||
        ei[146] !== Z ||
        ei[147] !== H ||
        ei[148] !== J ||
        ei[149] !== Y ||
        ei[150] !== X ||
        ei[151] !== te ||
        ei[152] !== ti ||
        ei[153] !== ed
          ? ((ee = (0, n.jsxs)(e$.$7, {
              viewerDownloadControl: ed,
              actions: W,
              "data-markdown-copy": "rich-block",
              "data-markdown-copy-text": tx,
              "data-testid": te,
              "data-writing-block-variant": ti,
              headerClassName: tN,
              inlineContent: q,
              leadingContent: K,
              viewerMenuItems: tI,
              viewerVersionHistoryMenuItem: tD,
              viewerCopyMenuItem: tR,
              title: G,
              children: [Z, H, J, Y, X],
            })),
            (ei[137] = tx),
            (ei[138] = W),
            (ei[139] = tN),
            (ei[140] = q),
            (ei[141] = K),
            (ei[142] = tI),
            (ei[143] = tD),
            (ei[144] = tR),
            (ei[145] = G),
            (ei[146] = Z),
            (ei[147] = H),
            (ei[148] = J),
            (ei[149] = Y),
            (ei[150] = X),
            (ei[151] = te),
            (ei[152] = ti),
            (ei[153] = ed),
            (ei[154] = ee))
          : (ee = ei[154]))
      let tL = ee
      return (
        ei[155] !== tL || ei[156] !== e8
          ? ((et = null == e8 ? tL : e8(tL.props)), (ei[155] = tL), (ei[156] = e8), (ei[157] = et))
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
              let t = (0, _.G)(e.getAttribute("href") ?? "")
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
      o = i("GO7r")
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
//# sourceMappingURL=720436.f41c4a9f13.js.map
