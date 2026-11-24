export const __rspack_esm_ids = [864349]
export const __webpack_modules__ = {
  TonS(e, t, a) {
    var o = a("ABep")
    ;(a("zd8w"),
      (t.A = (e) =>
        (0, o.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, o.jsx)("path", {
            d: "M9.33467 16.6663V4.93978L4.6374 9.63704L4.1667 9.16634L3.69599 8.69661L9.52998 2.86263L9.63447 2.77767C9.8925 2.60753 10.2433 2.63564 10.4704 2.86263L16.3034 8.69661L16.3884 8.80111C16.5588 9.05922 16.5306 9.40982 16.3034 9.63704C16.0762 9.86414 15.7255 9.89242 15.4675 9.722L15.363 9.63704L10.6647 4.9388V16.6663C10.6647 17.0336 10.367 17.3314 9.99971 17.3314C9.63259 17.3312 9.33467 17.0335 9.33467 16.6663ZM4.6374 9.63704C4.3777 9.89674 3.95569 9.89674 3.69599 9.63704C3.43657 9.37744 3.43668 8.95628 3.69599 8.69661L4.6374 9.63704Z",
            fill: "currentColor",
          }),
        })))
  },
  tgbB(e, t, a) {
    var o = a("cC4N"),
      n = a("FIIj"),
      c = a("IgxH"),
      i = a("iiZm")
    function d(e) {
      let t = (0, i.WE)(e),
        a = e.normalize("NFC"),
        o = a === e ? t : (0, i.WE)(a),
        n = (e) => o(e.normalize("NFC"))
      return {
        score: t,
        scoreCanonical: n,
        scoreBranch: r(t),
        scoreProjectLabel: r(n),
        scoreCwd: r(n),
        scoreTitle: (e, a = e.searchTitle) => ("local" === e.kind ? n(a) : t(a)),
      }
    }
    function s(e, { score: t, scoreBranch: a, scoreProjectLabel: o, scoreCwd: n, scoreTitle: c }, i) {
      let d = c(e)
      if (d > 0) return { fieldPriority: 0, score: d, value: e.searchTitle }
      let r = (function (e, t) {
        if (null == e) return null
        switch (e.kind) {
          case "contentMatch":
            return m(e.snippet, t, 1)
          case "branchMatch":
            return m(e.branch, t, 2)
        }
      })(e.searchPreview, t)
      if (null != r) return r
      switch (e.kind) {
        case "local":
          return (
            (i.length >= 8 && e.threadId.toLowerCase().startsWith(i) ? m(e.threadId, t, 0) : null) ??
            m(e.branch, a, 2) ??
            m(e.projectLabel ?? "", o, 3) ??
            m(e.cwd, n, 3)
          )
        case "dot":
          return { fieldPriority: 1, score: 0, value: null }
        case "chatgpt":
          return null
      }
    }
    function r(e) {
      let t,
        a = 0
      return (o) => (o !== t && ((a = e(o)), (t = o)), a)
    }
    function l(e, t) {
      let a = e.match.fieldPriority - t.match.fieldPriority
      if (0 !== a) return a
      let o = t.match.score - e.match.score
      return 0 !== o ? o : t.result.updatedAt - e.result.updatedAt
    }
    function m(e, t, a) {
      let o = t(e)
      return 0 === o ? null : { fieldPriority: a, score: o, value: e }
    }
    a.d(
      t,
      {},
      {
        C4: d,
        Wn: function (e, t) {
          let a,
            o = e.trim(),
            n = [],
            c = t <= 0 || 0 === o.length ? null : d(o),
            i = o.toLowerCase()
          return {
            add(e, o) {
              if (null == c) return
              let d = void 0 === o ? s(e, c, i) : o
              if (null == d) return
              let r = { result: e, match: d }
              n.length < t
                ? n.push(r)
                : (null == a &&
                    (a = (function (e) {
                      let t = 0
                      for (let a = 1; a < e.length; a += 1) 0 > l(e[t], e[a]) && (t = a)
                      return t
                    })(n)),
                  0 > l(r, n[a]) && ((n[a] = r), (a = void 0)))
            },
            results: () => [...n].sort(l).map(({ result: e }) => e),
          }
        },
        gA: s,
        lF: function (e) {
          let t = (0, c.h)(e).replace(/\uE200(?:filecite|cite)\uE202[^\uE200\uE201]*$/, ""),
            a = "",
            i = 0,
            d = []
          for (let e = 0; e < t.length; e++) {
            let o,
              c = t[e]
            if ("\\" === c) {
              e++
              continue
            }
            if ("\n" === c || "\r" === c) {
              d.length = 0
              continue
            }
            if ("[" === c) {
              d.push(e)
              continue
            }
            if ("]" !== c) continue
            let s = d.pop()
            if (null == s) continue
            let r = t.startsWith("(<sandbox:", e + 1),
              l = r ? "(<sandbox:" : "(sandbox:"
            if (!t.startsWith(l, e + 1)) continue
            let m = e + 1 + l.length
            if (r) {
              let e = t.slice(m).search(/[>\r\n]/)
              ;((o = e < 0 ? t.length : m + e), ">" === t[o] && o++)
            } else o = (0, n.mT)(t, m).endIndex
            ")" === t[o] && o++
            let u = "!" === t[s - 1] ? s - 1 : s
            ;((a += t.slice(i, u) + t.slice(s + 1, e)), (i = o), (d.length = 0), (e = o - 1))
          }
          return (function (e) {
            if (!/[\\*_]|<\/?u>/i.test(e)) return e
            let t = "",
              a = 0
            function n(o, n) {
              ;((t += e.slice(a, o)), (a = n))
            }
            return (
              (0, o.Y)(e).children.forEach(function t(a) {
                let o = a.position?.start.offset,
                  c = a.position?.end.offset
                if (null == o || null == c) return
                let i = 0
                if (
                  ("strong" === a.type ? (i = 2) : "emphasis" === a.type && (i = 1),
                  i > 0 ? n(o, o + i) : "html" === a.type && /^<\/?u>$/i.test(a.value) && n(o, c),
                  "text" === a.type && a.value !== e.slice(o, c))
                )
                  for (let t of e.slice(o, c).matchAll(/\\[!-/:-@[-`{-~]/g)) n(o + t.index, o + t.index + 1)
                ;("children" in a && a.children.forEach(t), i > 0 && n(c - i, c))
              }),
              t + e.slice(a)
            )
          })(a + t.slice(i))
            .replace(/[ \t]{2,}/g, " ")
            .trim()
        },
        lU: function (e, t) {
          let a = [],
            o = new Map()
          for (let n of e) {
            let e = t(n),
              c = o.get(e)
            if (null == c) {
              ;(o.set(e, a.length), a.push(n))
              continue
            }
            let i = a[c]
            null == i.searchPreview && null != n.searchPreview && (a[c] = { ...i, searchPreview: n.searchPreview })
          }
          return a
        },
      },
    )
  },
  SgPg(e, t, a) {
    var o = a("ABep"),
      n = a("QosV"),
      c = a("JIuM"),
      i = a("LhhH"),
      d = a("ISnp")
    a.d(
      t,
      {},
      {
        T: function (e) {
          let t,
            a = (0, n.c)(10),
            {
              avatarUrl: s,
              colorKey: r,
              fadeIn: l,
              initialsAppearance: m,
              loading: u,
              loadingFallback: p,
              muted: g,
              name: h,
              size: f,
            } = e,
            x = void 0 === f ? "md" : f,
            { isProfileVisible: M } = (0, d.D)(),
            { src: v, isError: y } = (0, c._w)(M ? s : null),
            b = M && (u || (null != s && null == v && !y)) ? p : void 0
          return (
            a[0] !== r ||
            a[1] !== l ||
            a[2] !== m ||
            a[3] !== p ||
            a[4] !== g ||
            a[5] !== h ||
            a[6] !== x ||
            a[7] !== v ||
            a[8] !== b
              ? ((t = (0, o.jsx)(i.e, {
                  alt: "",
                  colorKey: r,
                  fadeIn: l,
                  initialsAppearance: m,
                  fallback: b,
                  loadingFallback: p,
                  muted: g,
                  name: h,
                  size: x,
                  src: v,
                })),
                (a[0] = r),
                (a[1] = l),
                (a[2] = m),
                (a[3] = p),
                (a[4] = g),
                (a[5] = h),
                (a[6] = x),
                (a[7] = v),
                (a[8] = b),
                (a[9] = t))
              : (t = a[9]),
            t
          )
        },
      },
    )
  },
  oN3O(e, t, a) {
    var o = a("qmMi"),
      n = a("OWtl")
    let c = (0, o.z8)("ChatPickerScope", { parent: n.u })
    a.d(t, {}, { R: c })
  },
  klMk(e, t, a) {
    var o = a("ABep"),
      n = a("QosV"),
      c = a("on57"),
      i = a("qmMi"),
      d = a("oyxz"),
      s = a("ZZgR"),
      r = a("bVeK"),
      l = a("oN3O")
    function m(e) {
      let t,
        a,
        i,
        d = (0, n.c)(10),
        { children: s, description: r, disabledReason: l } = e
      if (!l && !r) {
        let e
        return (d[0] !== s ? ((e = (0, o.jsx)(o.Fragment, { children: s })), (d[0] = s), (d[1] = e)) : (e = d[1]), e)
      }
      return (
        d[2] !== s
          ? ((t = (0, o.jsx)("span", { className: "truncate", children: s })), (d[2] = s), (d[3] = t))
          : (t = d[3]),
        d[4] !== r || d[5] !== l
          ? ((a =
              l || r
                ? (0, o.jsx)("span", {
                    className: (0, c.A)("truncate text-sm text-codex-description", null != l && "shrink-0"),
                    children: l ?? r,
                  })
                : null),
            (d[4] = r),
            (d[5] = l),
            (d[6] = a))
          : (a = d[6]),
        d[7] !== t || d[8] !== a
          ? ((i = (0, o.jsxs)("span", { className: "flex min-w-0 items-center gap-1", children: [t, a] })),
            (d[7] = t),
            (d[8] = a),
            (d[9] = i))
          : (i = d[9]),
        i
      )
    }
    a.d(
      t,
      {},
      {
        B: function (e) {
          let t,
            a,
            c,
            i = (0, n.c)(8),
            { disabled: l, disabledReason: u, onClick: p } = e
          return (
            i[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, o.jsx)(d.A, { id: "floatingComposer.newChat", defaultMessage: "New chat" })), (i[0] = t))
              : (t = i[0]),
            i[1] !== u ? ((a = (0, o.jsx)(m, { disabledReason: u, children: t })), (i[1] = u), (i[2] = a)) : (a = i[2]),
            i[3] !== l || i[4] !== u || i[5] !== p || i[6] !== a
              ? ((c = (0, o.jsx)(s.G.Button, {
                  "aria-description": u,
                  LeftIcon: r.JSV,
                  disabled: l,
                  tooltipText: u,
                  onClick: p,
                  children: a,
                })),
                (i[3] = l),
                (i[4] = u),
                (i[5] = p),
                (i[6] = a),
                (i[7] = c))
              : (c = i[7]),
            c
          )
        },
        U: function (e) {
          let t,
            a,
            c,
            d,
            u,
            p,
            g,
            h = (0, n.c)(19)
          h[0] !== e
            ? (({ children: t, description: a, disabledReason: c, ...d } = e),
              (h[0] = e),
              (h[1] = t),
              (h[2] = a),
              (h[3] = c),
              (h[4] = d))
            : ((t = h[1]), (a = h[2]), (c = h[3]), (d = h[4]))
          let { showChatIcons: f } = (0, i.gh)(l.R).value,
            x = f ? r.OHc : void 0
          h[5] !== t || h[6] !== c
            ? ((u = null == c ? t : (0, o.jsxs)(o.Fragment, { children: [t, (0, o.jsx)("br", {}), c] })),
              (h[5] = t),
              (h[6] = c),
              (h[7] = u))
            : (u = h[7])
          let M = null == c ? "trigger-overflows" : "always"
          return (
            h[8] !== t || h[9] !== a || h[10] !== c
              ? ((p = (0, o.jsx)(m, { description: a, disabledReason: c, children: t })),
                (h[8] = t),
                (h[9] = a),
                (h[10] = c),
                (h[11] = p))
              : (p = h[11]),
            h[12] !== c || h[13] !== d || h[14] !== x || h[15] !== u || h[16] !== M || h[17] !== p
              ? ((g = (0, o.jsx)(s.G.Item, {
                  ...d,
                  "aria-description": c,
                  LeftIcon: x,
                  tooltipText: u,
                  tooltipOpenWhen: M,
                  children: p,
                })),
                (h[12] = c),
                (h[13] = d),
                (h[14] = x),
                (h[15] = u),
                (h[16] = M),
                (h[17] = p),
                (h[18] = g))
              : (g = h[18]),
            g
          )
        },
      },
    )
  },
  YKiz(e, t, a) {
    let o = (0, a("Qgfj").YK)({
      related: { id: "floatingComposer.chatPicker.related", defaultMessage: "Related chats" },
      recent: { id: "floatingComposer.chatPicker.recent", defaultMessage: "Recent" },
      sourcePending: { id: "spacesWorkspace.chat.sourcePending", defaultMessage: "Current chat is busy" },
      targetPending: { id: "spacesWorkspace.chat.targetPending", defaultMessage: "This chat is busy" },
      actionPending: { id: "spacesWorkspace.chat.actionPending", defaultMessage: "Chat action in progress" },
    })
    a.d(t, {}, { x: o })
  },
  mzLv(e, t, a) {
    a.d(
      t,
      {},
      {
        Q: function (e) {
          return `chatgpt:${e}`
        },
        s: function (e, t) {
          return "local" === t ? e : `${e}:${t}`
        },
      },
    )
  },
  Aoej(e, t, a) {
    var o = a("DBCl"),
      n = a("SPnB"),
      c = a("g2p6"),
      i = a("Zyn0"),
      d = a("X6Vn"),
      s = a("UxLW"),
      r = a("DIdv"),
      l = a("nlNF"),
      m = a("V1hw")
    a.d(
      t,
      {},
      {
        g: async function (e, t, u) {
          let p = e.get(l.x2),
            g = e.get(c.Sk),
            h = e.get(n.chatGptAuthenticatedAccountId$),
            f = e.get(n.chatGptAuthenticatedUserId$),
            x = t.payload
          if (
            null == h ||
            !e.get(n.f4) ||
            "library" !== t.source_type ||
            !("library_item_id" in x) ||
            "native_shared" === (0, i.j)(x) ||
            "shared" === x.access_kind
          )
            return
          let M = (0, m.T)(x)
          if (null == M && "native" !== (0, i.j)(x)) return
          let v =
            null == M && "image" === (0, r.CR)(x) && (0, o.cb0)({ name: x.file_name, type: x.mime_type })
              ? await a.e(338281).then(a.bind(a, "CIm5"))
              : await Promise.all([
                  a.e(222773),
                  a.e(648165),
                  a.e(579325),
                  a.e(712262),
                  a.e(978338),
                  a.e(904485),
                  a.e(923712),
                  a.e(322496),
                  a.e(53010),
                  a.e(652500),
                  a.e(164460),
                  a.e(877652),
                  a.e(214739),
                  a.e(678690),
                  a.e(947437),
                  a.e(901175),
                  a.e(377960),
                  a.e(752862),
                  a.e(150547),
                  a.e(255843),
                  a.e(153694),
                  a.e(679632),
                  a.e(810979),
                  a.e(921241),
                  a.e(583579),
                  a.e(433661),
                  a.e(529755),
                  a.e(631141),
                  a.e(293398),
                  a.e(203414),
                  a.e(716574),
                  a.e(92253),
                  a.e(866709),
                  a.e(486890),
                  a.e(172184),
                  a.e(417402),
                  a.e(887074),
                  a.e(95962),
                  a.e(79584),
                  a.e(178155),
                  a.e(576312),
                  a.e(839700),
                  a.e(441809),
                  a.e(76344),
                  a.e(208433),
                  a.e(896482),
                  a.e(664496),
                  a.e(429508),
                  a.e(490915),
                  a.e(473403),
                  a.e(806265),
                  a.e(431390),
                  a.e(779181),
                  a.e(577949),
                  a.e(664556),
                  a.e(59412),
                  a.e(286075),
                  a.e(757458),
                  a.e(158491),
                  a.e(923720),
                  a.e(533219),
                  a.e(944744),
                  a.e(787805),
                  a.e(999152),
                  a.e(461115),
                  a.e(681261),
                  a.e(358869),
                ]).then(a.bind(a, "OTYU"))
          if (
            e.get(c.Sk) !== g ||
            e.get(n.chatGptAuthenticatedAccountId$) !== h ||
            e.get(n.chatGptAuthenticatedUserId$) !== f ||
            !e.get(n.f4) ||
            e.get(l.x2)?.key !== p?.key
          )
            return
          let y = {
            externalAccount: x.external_account,
            parentDirectoryId: x.parent_directory_id,
            fileExtension: x.file_extension,
            libraryArtifactType: x.library_artifact_type,
            originationThreadId: x.origination_thread_id,
            id: x.library_item_id,
            fileId: M ?? x.file_id,
            provider: (0, s.AG)(M) ?? void 0,
            sourceUrl: x.cloud_doc_url ?? void 0,
            gizmoId: x.gizmo_id,
            name: x.file_name,
            category: x.library_file_category,
            mimeType: x.mime_type ?? null,
            sizeBytes: x.file_size_bytes ?? null,
            modifiedAt: null == t.update_time ? null : new Date(1e3 * t.update_time).toISOString(),
          }
          "openChatGptSearchImagePreview" in v
            ? await v.openChatGptSearchImagePreview(e, y, u)
            : (0, d.qf)(e, v.ChatGptSearchFilePreview, {
                accountId: g,
                authenticatedAccountId: h,
                canFavorite: null == M && "chat_message_snapshot" !== x.library_artifact_type,
                file: y,
                userId: f,
              })
        },
      },
    )
  },
  WVWQ(e, t, a) {
    a.d(t, { j: () => b, I: () => y })
    var o = a("AGyq"),
      n = a("Qgfj"),
      c = a("CTWI")
    function i(e) {
      return { title: e.formatMessage(d.title), description: e.formatMessage(d.description) }
    }
    let d = (0, n.YK)({
      title: { id: "codex.command.composer.captureAppshot", defaultMessage: "Capture appshot" },
      description: {
        id: "codex.commandDescription.composer.captureAppshot",
        defaultMessage: "Capture an appshot for the active composer",
      },
    })
    function s(e) {
      return {
        title: e.formatMessage({ id: "codex.command.openOrbit.dot", defaultMessage: "Open your dot" }),
        description: e.formatMessage({
          id: "codex.commandDescription.openOrbit.dot",
          defaultMessage: "Open your dot conversation",
        }),
      }
    }
    function r(e) {
      return {
        title: e.formatMessage({
          id: "codex.command.focusPageBlockControls",
          defaultMessage: "Focus content controls",
        }),
        description: e.formatMessage({
          id: "codex.commandDescription.focusPageBlockControls",
          defaultMessage: "Move keyboard focus from the Page editor to the current content's controls",
        }),
      }
    }
    let l = (0, n.YK)({
        endCallDescription: {
          id: "codex.commandDescription.realtimeVoice.endCall",
          defaultMessage: "End the active Voice Chat",
        },
        endCallTitle: { id: "codex.command.realtimeVoice.endCall", defaultMessage: "End Voice Chat" },
        realtimeVoiceDescription: {
          id: "codex.commandDescription.realtimeVoice",
          defaultMessage: "Start a Voice Chat from anywhere on desktop",
        },
        realtimeVoiceTitle: { id: "codex.command.realtimeVoice", defaultMessage: "Voice Chat hotkey" },
        toggleMicrophoneMuteDescription: {
          id: "codex.commandDescription.realtimeVoice.toggleMicrophoneMute",
          defaultMessage: "Mute or unmute your microphone during a Voice Chat",
        },
        toggleMicrophoneMuteTitle: {
          id: "codex.command.realtimeVoice.toggleMicrophoneMute",
          defaultMessage: "Toggle Voice Chat microphone",
        },
        toggleOutputMuteDescription: {
          id: "codex.commandDescription.realtimeVoice.toggleOutputMute",
          defaultMessage: "Mute or unmute Voice Chat audio",
        },
        toggleOutputMuteTitle: {
          id: "codex.command.realtimeVoice.toggleOutputMute",
          defaultMessage: "Toggle Voice Chat audio",
        },
      }),
      m = {
        realtimeVoice: { description: l.realtimeVoiceDescription, title: l.realtimeVoiceTitle },
        "realtimeVoice.endCall": { description: l.endCallDescription, title: l.endCallTitle },
        "realtimeVoice.toggleMicrophoneMute": {
          description: l.toggleMicrophoneMuteDescription,
          title: l.toggleMicrophoneMuteTitle,
        },
        "realtimeVoice.toggleOutputMute": {
          description: l.toggleOutputMuteDescription,
          title: l.toggleOutputMuteTitle,
        },
      }
    function u(e) {
      return Object.hasOwn(m, e)
    }
    let p = (0, n.YK)({
        title: { id: "codex.command.importExternalAgent", defaultMessage: "Import from other AI apps" },
        description: {
          id: "codex.commandDescription.importExternalAgent",
          defaultMessage: "Import from other AI apps",
        },
      }),
      g = (0, n.YK)({
        title: { id: "codex.command.personalitySettings", defaultMessage: "Personality" },
        description: {
          id: "codex.commandDescription.personalitySettings",
          defaultMessage: "Adjust tone and response style",
        },
      }),
      h = (0, n.zR)({ id: "codex.command.showMiniOverlay", defaultMessage: "Show Mini" }),
      f = (0, n.YK)({
        "codex.command.importPrismToLocal": {
          id: "codex.command.importPrismToLocal",
          defaultMessage: "Import from Prism\u2026",
        },
        "codex.commandMenuTitle.toggleFileTreePanel": {
          id: "codex.commandMenuTitle.toggleFileTreePanel",
          defaultMessage: "Toggle navigation panel",
        },
        "codex.command.meetings.takeNotes": {
          id: "codex.command.meetings.takeNotes",
          defaultMessage: "Meetings: Take notes",
        },
        "codex.command.screenshotToCurrentChat": {
          id: "codex.command.screenshotToCurrentChat",
          defaultMessage: "Screenshot selection to current chat",
        },
        "codex.command.screenshotToNewChat": {
          id: "codex.command.screenshotToNewChat",
          defaultMessage: "Screenshot selection to new chat",
        },
        "codex.command.artifacts.selectTool": {
          id: "codex.command.artifacts.selectTool",
          defaultMessage: "Artifacts: Select",
        },
        "codex.command.artifacts.handTool": {
          id: "codex.command.artifacts.handTool",
          defaultMessage: "Artifacts: Pan",
        },
        "codex.command.canvas.prompt": { id: "codex.command.canvas.prompt", defaultMessage: "Canvas: Ask ChatGPT" },
        "codex.command.artifacts.rectangleTool": {
          id: "codex.command.artifacts.rectangleTool",
          defaultMessage: "Artifacts: Rectangle",
        },
        "codex.command.artifacts.circleTool": {
          id: "codex.command.artifacts.circleTool",
          defaultMessage: "Artifacts: Circle",
        },
        "codex.command.artifacts.arrowTool": {
          id: "codex.command.artifacts.arrowTool",
          defaultMessage: "Artifacts: Arrow",
        },
        "codex.command.artifacts.lineTool": {
          id: "codex.command.artifacts.lineTool",
          defaultMessage: "Artifacts: Line",
        },
        "codex.command.artifacts.textTool": {
          id: "codex.command.artifacts.textTool",
          defaultMessage: "Artifacts: Text",
        },
        "codex.command.artifacts.noteTool": {
          id: "codex.command.artifacts.noteTool",
          defaultMessage: "Artifacts: Note",
        },
        "codex.command.page.addComment": { id: "codex.command.page.addComment", defaultMessage: "Add Page comment" },
        "codex.command.page.formatNumberedList": {
          id: "codex.command.page.formatNumberedList",
          defaultMessage: "Numbered list",
        },
        "codex.command.page.formatBulletedList": {
          id: "codex.command.page.formatBulletedList",
          defaultMessage: "Bulleted list",
        },
        "codex.command.page.formatChecklist": { id: "codex.command.page.formatChecklist", defaultMessage: "Checklist" },
        "codex.command.newThread": { id: "codex.command.newThread", defaultMessage: "New chat" },
        "codex.command.newProjectlessTask": {
          id: "codex.command.newProjectlessTask",
          defaultMessage: "New standalone chat",
        },
        "codex.command.temporaryChat": { id: "codex.command.temporaryChat", defaultMessage: "New Temporary Chat" },
        "codex.command.openThreadInNewWindow": {
          id: "codex.command.openThreadInNewWindow",
          defaultMessage: "Open in new window",
        },
        "codex.command.archiveThread": { id: "codex.command.archiveThread", defaultMessage: "Archive chat" },
        "codex.command.deleteOrbit": { id: "codex.command.deleteOrbit", defaultMessage: "Delete {dot}" },
        "codex.command.deleteChat": { id: "codex.command.deleteChat", defaultMessage: "Delete chat" },
        "codex.command.markThreadUnread": { id: "codex.command.markThreadUnread", defaultMessage: "Mark as unread" },
        "codex.command.toggleThreadPin": { id: "codex.command.toggleThreadPin", defaultMessage: "Toggle pin" },
        "codex.command.copyPageLink": { id: "codex.command.copyPageLink", defaultMessage: "Copy document link" },
        "codex.command.copyConversationMarkdown": {
          id: "codex.command.copyConversationMarkdown",
          defaultMessage: "Copy as Markdown",
        },
        "codex.command.copyLastCodeBlock": {
          id: "codex.command.copyLastCodeBlock",
          defaultMessage: "Copy last code block",
        },
        "codex.command.openSideChat": { id: "codex.command.openSideChat", defaultMessage: "Open side chat" },
        "codex.command.focusMainChat": { id: "codex.command.focusMainChat", defaultMessage: "Focus main chat" },
        "codex.command.focusSideChat": { id: "codex.command.focusSideChat", defaultMessage: "Focus side chat" },
        "codex.command.openControlWindow": {
          id: "codex.command.openControlWindow",
          defaultMessage: "Open control window",
        },
        "codex.command.toggleDebugModal": {
          id: "codex.command.toggleDebugModal",
          defaultMessage: "Toggle debug panel",
        },
        "codex.command.undoAppAction": { id: "codex.command.undoAppAction", defaultMessage: "Undo last action" },
        "codex.command.redoAppAction": { id: "codex.command.redoAppAction", defaultMessage: "Redo last action" },
        "codex.command.reopenClosedTab": {
          id: "codex.command.reopenClosedTab",
          defaultMessage: "Reopen closed panel tab",
        },
        "codex.command.composer.openModelPicker": {
          id: "codex.command.composer.openModelPicker",
          defaultMessage: "Select effort",
        },
        "codex.command.composer.openRecentModels": {
          id: "codex.command.composer.openRecentModels",
          defaultMessage: "Open recent models",
        },
        "codex.command.composer.openProjectPicker": {
          id: "codex.command.composer.openProjectPicker",
          defaultMessage: "Open project picker",
        },
        "codex.command.composer.toggleDictation": {
          id: "codex.command.composer.toggleDictation",
          defaultMessage: "Toggle dictation",
        },
        "codex.command.composer.startVoiceMode": {
          id: "codex.command.composer.startVoiceMode",
          defaultMessage: "Toggle voice chat",
        },
        "codex.command.composer.submit": { id: "codex.command.composer.submit", defaultMessage: "Send message" },
        "codex.command.browser.toggleAnnotationMode": {
          id: "codex.command.browser.toggleAnnotationMode",
          defaultMessage: "Toggle annotation mode",
        },
        "codex.command.browser.bookmarkPage": {
          id: "codex.command.browser.bookmarkPage",
          defaultMessage: "Bookmark page",
        },
        "codex.command.presentation.editLink": {
          id: "codex.command.presentation.editLink",
          defaultMessage: "Add or edit slide link",
        },
        "codex.command.presentation.duplicateSelection": {
          id: "codex.command.presentation.duplicateSelection",
          defaultMessage: "Duplicate presentation selection",
        },
        "codex.command.artifact.sendAnnotations": {
          id: "codex.command.artifact.sendAnnotations",
          defaultMessage: "Send annotations",
        },
        "codex.command.composer.submitInBackground": {
          id: "codex.command.composer.submitInBackground",
          defaultMessage: "Send message in background",
        },
        "codex.command.composer.steer": { id: "codex.command.composer.steer", defaultMessage: "Steer prompt" },
        "codex.command.composer.queue": { id: "codex.command.composer.queue", defaultMessage: "Queue prompt" },
        "codex.command.composer.clear": { id: "codex.command.composer.clear", defaultMessage: "Clear prompt" },
        "codex.command.composer.addPhotos": { id: "codex.command.composer.addPhotos", defaultMessage: "Add photos" },
        "codex.command.composer.addFiles": {
          id: "codex.command.composer.addFiles",
          defaultMessage: "Attach files and folders",
        },
        "codex.command.composer.toggleFastMode": {
          id: "codex.command.composer.toggleFastMode",
          defaultMessage: "Cycle speed",
        },
        "codex.command.composer.increaseReasoningEffort": {
          id: "codex.command.composer.increaseReasoningEffort",
          defaultMessage: "Increase reasoning effort",
        },
        "codex.command.composer.decreaseReasoningEffort": {
          id: "codex.command.composer.decreaseReasoningEffort",
          defaultMessage: "Decrease reasoning effort",
        },
        "codex.command.composer.cycleReasoningEffort": {
          id: "codex.command.composer.cycleReasoningEffort",
          defaultMessage: "Cycle reasoning effort",
        },
        "codex.command.composer.togglePlanMode": {
          id: "codex.command.composer.togglePlanMode",
          defaultMessage: "Toggle plan mode",
        },
        "codex.command.composer.toggleWorktreeMode": {
          id: "codex.command.composer.toggleWorktreeMode",
          defaultMessage: "Toggle Local/Worktree",
        },
        "codex.command.composer.cycleHost": { id: "codex.command.composer.cycleHost", defaultMessage: "Cycle host" },
        "codex.command.composer.toggleWorkRunLocation": {
          id: "codex.command.composer.toggleWorkRunLocation",
          defaultMessage: "Toggle Cloud/Local",
        },
        "codex.command.approval.approve": { id: "codex.command.approval.approve", defaultMessage: "Approve request" },
        "codex.command.approval.decline": { id: "codex.command.approval.decline", defaultMessage: "Decline request" },
        "codex.command.git.commit": { id: "codex.command.git.commit", defaultMessage: "Commit or push" },
        "codex.command.git.createPullRequest": {
          id: "codex.command.git.createPullRequest",
          defaultMessage: "Create PR",
        },
        "codex.command.git.createDraftPullRequest": {
          id: "codex.command.git.createDraftPullRequest",
          defaultMessage: "Create draft PR",
        },
        "codex.command.git.createBranch": { id: "codex.command.git.createBranch", defaultMessage: "Create branch" },
        "codex.command.git.mergePullRequest": { id: "codex.command.git.mergePullRequest", defaultMessage: "Merge PR" },
        "codex.command.git.openPullRequest": {
          id: "codex.command.git.openPullRequest",
          defaultMessage: "Open PR on GitHub",
        },
        "codex.command.git.toggleBlame": { id: "codex.command.git.toggleBlame", defaultMessage: "Toggle Git blame" },
        "codex.command.forkThread": { id: "codex.command.forkThread", defaultMessage: "Branch chat" },
        "codex.command.showMiniOverlay": { id: "codex.command.showMiniOverlay", defaultMessage: "Show Mini" },
        "codex.command.searchChats": { id: "codex.command.searchChats", defaultMessage: "Switch chat\u2026" },
        "codex.command.searchChatsPrevious": {
          id: "codex.command.searchChatsPrevious",
          defaultMessage: "Switch chat (previous)\u2026",
        },
        "codex.command.togglePriorityFilter": {
          id: "codex.command.togglePriorityFilter",
          defaultMessage: "Toggle activity view",
        },
        "codex.command.nextThreadNeedingAttention": {
          id: "codex.command.nextThreadNeedingAttention",
          defaultMessage: "Next chat needing attention",
        },
        "codex.command.previousThread": { id: "codex.command.previousThread", defaultMessage: "Previous sidebar item" },
        "codex.command.previousTab": { id: "codex.command.previousTab", defaultMessage: "Previous tab" },
        "codex.command.previousRecentThread": {
          id: "codex.command.previousRecentThread",
          defaultMessage: "Previous recently viewed chat",
        },
        "codex.command.nextThread": { id: "codex.command.nextThread", defaultMessage: "Next sidebar item" },
        "codex.command.nextTab": { id: "codex.command.nextTab", defaultMessage: "Next tab" },
        "codex.command.nextRecentThread": {
          id: "codex.command.nextRecentThread",
          defaultMessage: "Next recently viewed chat",
        },
        "codex.command.recentThread1": { id: "codex.command.recentThread1", defaultMessage: "Go to recent chat 1" },
        "codex.command.recentThread2": { id: "codex.command.recentThread2", defaultMessage: "Go to recent chat 2" },
        "codex.command.recentThread3": { id: "codex.command.recentThread3", defaultMessage: "Go to recent chat 3" },
        "codex.command.recentThread4": { id: "codex.command.recentThread4", defaultMessage: "Go to recent chat 4" },
        "codex.command.recentThread5": { id: "codex.command.recentThread5", defaultMessage: "Go to recent chat 5" },
        "codex.command.recentThread6": { id: "codex.command.recentThread6", defaultMessage: "Go to recent chat 6" },
        "codex.command.switchToChat": { id: "codex.command.switchToChat", defaultMessage: "Switch to Chat" },
        "codex.command.switchToWork": { id: "codex.command.switchToWork", defaultMessage: "Switch to Work" },
        "codex.command.switchToCodex": { id: "codex.command.switchToCodex", defaultMessage: "Switch to Codex" },
        "codex.command.settings": { id: "codex.command.settings", defaultMessage: "Settings" },
        "codex.command.codexMicroSettings": {
          id: "codex.command.codexMicroSettings",
          defaultMessage: "Codex Micro setup",
        },
        "codex.command.mcpSettings": { id: "codex.command.mcpSettings", defaultMessage: "MCP" },
        "codex.command.keyboardShortcuts": {
          id: "codex.command.keyboardShortcuts",
          defaultMessage: "Keyboard shortcuts",
        },
        "codex.command.showKeyboardShortcuts": {
          id: "codex.command.showKeyboardShortcuts",
          defaultMessage: "Show keyboard shortcuts",
        },
        "codex.command.clearAllUnreads": { id: "codex.command.clearAllUnreads", defaultMessage: "Clear all unreads" },
        "codex.command.manageTasks": { id: "codex.command.manageTasks", defaultMessage: "Manage scheduled tasks" },
        "codex.command.forceReloadSkills": {
          id: "codex.command.forceReloadSkills",
          defaultMessage: "Force reload skills",
        },
        "codex.command.openSkills": { id: "codex.command.openSkills", defaultMessage: "Go to skills" },
        "codex.command.newProject": { id: "codex.command.newProject", defaultMessage: "New project" },
        "codex.command.openFolder": { id: "codex.command.openFolder", defaultMessage: "Open folder" },
        "codex.command.toggleSidebar": { id: "codex.command.toggleSidebar", defaultMessage: "Toggle sidebar" },
        "codex.command.toggleBottomPanel": {
          id: "codex.command.toggleBottomPanel",
          defaultMessage: "Toggle bottom panel",
        },
        "codex.command.togglePinnedSummary": {
          id: "codex.command.togglePinnedSummary",
          defaultMessage: "Toggle pinned summary",
        },
        "codex.command.toggleTerminal": { id: "codex.command.toggleTerminal", defaultMessage: "Open terminal" },
        "codex.command.newTab": { id: "codex.command.newTab", defaultMessage: "New tab" },
        "codex.command.closeOtherTabs": { id: "codex.command.closeOtherTabs", defaultMessage: "Close other tabs" },
        "codex.command.showWorkspaceTabView": { id: "codex.command.showWorkspaceTabView", defaultMessage: "Full view" },
        "codex.command.stepWorkspaceLayout": {
          id: "codex.command.stepWorkspaceLayout",
          defaultMessage: "Cycle workspace layout",
        },
        "codex.command.openReviewTab": { id: "codex.command.openReviewTab", defaultMessage: "Open Changes tab" },
        "codex.command.toggleReviewTab": { id: "codex.command.toggleReviewTab", defaultMessage: "Toggle Changes" },
        "codex.command.toggleReviewPanel": {
          id: "codex.command.toggleReviewPanel",
          defaultMessage: "Toggle Changes panel",
        },
        "codex.command.file.goToDefinition": {
          id: "codex.command.file.goToDefinition",
          defaultMessage: "Go to definition",
        },
        "codex.command.file.findReferences": {
          id: "codex.command.file.findReferences",
          defaultMessage: "Find references",
        },
        "codex.command.file.navigateBack": {
          id: "codex.command.file.navigateBack",
          defaultMessage: "Go back in file navigation",
        },
        "codex.command.file.navigateForward": {
          id: "codex.command.file.navigateForward",
          defaultMessage: "Go forward in file navigation",
        },
        "codex.command.findInThread": { id: "codex.command.findInThread", defaultMessage: "Find" },
        "codex.command.goToLine": { id: "codex.command.goToLine", defaultMessage: "Go to line" },
        "codex.command.focusBrowserAddressBar": {
          id: "codex.command.focusBrowserAddressBar",
          defaultMessage: "Focus browser address bar",
        },
        "codex.command.navigateBrowserBack": {
          id: "codex.command.navigateBrowserBack",
          defaultMessage: "Browser back",
        },
        "codex.command.navigateBrowserForward": {
          id: "codex.command.navigateBrowserForward",
          defaultMessage: "Browser forward",
        },
        "codex.command.navigateBack": { id: "codex.command.navigateBack", defaultMessage: "Back" },
        "codex.command.navigateForward": { id: "codex.command.navigateForward", defaultMessage: "Forward" },
        "codex.command.logOut": { id: "codex.command.logOut", defaultMessage: "Log out" },
        "codex.command.feedback": { id: "codex.command.feedback", defaultMessage: "Feedback" },
        "codex.command.environmentAction1": {
          id: "codex.command.environmentAction1",
          defaultMessage: "Environment action 1",
        },
        "codex.command.environmentAction2": {
          id: "codex.command.environmentAction2",
          defaultMessage: "Environment action 2",
        },
        "codex.command.environmentAction3": {
          id: "codex.command.environmentAction3",
          defaultMessage: "Environment action 3",
        },
        "codex.command.environmentAction4": {
          id: "codex.command.environmentAction4",
          defaultMessage: "Environment action 4",
        },
        "codex.command.environmentAction5": {
          id: "codex.command.environmentAction5",
          defaultMessage: "Environment action 5",
        },
        "codex.command.environmentAction6": {
          id: "codex.command.environmentAction6",
          defaultMessage: "Environment action 6",
        },
        "codex.command.environmentAction7": {
          id: "codex.command.environmentAction7",
          defaultMessage: "Environment action 7",
        },
        "codex.command.environmentAction8": {
          id: "codex.command.environmentAction8",
          defaultMessage: "Environment action 8",
        },
        "codex.command.environmentAction9": {
          id: "codex.command.environmentAction9",
          defaultMessage: "Environment action 9",
        },
        "codex.command.globalDictationHold": {
          id: "codex.command.globalDictationHold",
          defaultMessage: "Dictation shortcut",
        },
        "codex.command.globalDictationSingleTap": {
          id: "codex.command.globalDictationSingleTap",
          defaultMessage: "Single-tap dictation",
        },
        "codex.command.spotlightSearch": { id: "codex.command.spotlightSearch", defaultMessage: "Spotlight search" },
        "codex.command.notchVoice": { id: "codex.command.notchVoice", defaultMessage: "Voice in Mini" },
        "codex.command.toggleNotch": { id: "codex.command.toggleNotch", defaultMessage: "Toggle Notch" },
        "codex.command.focusTab1": { id: "codex.command.focusTab1", defaultMessage: "Focus tab 1" },
        "codex.command.focusTab2": { id: "codex.command.focusTab2", defaultMessage: "Focus tab 2" },
        "codex.command.focusTab3": { id: "codex.command.focusTab3", defaultMessage: "Focus tab 3" },
        "codex.command.focusTab4": { id: "codex.command.focusTab4", defaultMessage: "Focus tab 4" },
        "codex.command.focusTab5": { id: "codex.command.focusTab5", defaultMessage: "Focus tab 5" },
        "codex.command.focusTab6": { id: "codex.command.focusTab6", defaultMessage: "Focus tab 6" },
        "codex.command.focusTab7": { id: "codex.command.focusTab7", defaultMessage: "Focus tab 7" },
        "codex.command.focusTab8": { id: "codex.command.focusTab8", defaultMessage: "Focus tab 8" },
        "codex.command.focusTab9": { id: "codex.command.focusTab9", defaultMessage: "Focus tab 9" },
        "codex.command.thread1": { id: "codex.command.thread1", defaultMessage: "Go to chat 1" },
        "codex.command.thread2": { id: "codex.command.thread2", defaultMessage: "Go to chat 2" },
        "codex.command.thread3": { id: "codex.command.thread3", defaultMessage: "Go to chat 3" },
        "codex.command.thread4": { id: "codex.command.thread4", defaultMessage: "Go to chat 4" },
        "codex.command.thread5": { id: "codex.command.thread5", defaultMessage: "Go to chat 5" },
        "codex.command.thread6": { id: "codex.command.thread6", defaultMessage: "Go to chat 6" },
        "codex.command.thread7": { id: "codex.command.thread7", defaultMessage: "Go to chat 7" },
        "codex.command.thread8": { id: "codex.command.thread8", defaultMessage: "Go to chat 8" },
        "codex.command.thread9": { id: "codex.command.thread9", defaultMessage: "Go to chat 9" },
      }),
      x = { ...f, "codex.command.importExternalAgent": p.title, "codex.command.personalitySettings": g.title },
      M = (0, n.YK)({
        "codex.commandMenuTitle.newThread": { id: "codex.commandMenuTitle.newThread", defaultMessage: "New Chat" },
        "codex.commandMenuTitle.newProjectlessTask": {
          id: "codex.commandMenuTitle.newProjectlessTask",
          defaultMessage: "New standalone chat",
        },
        "codex.commandMenuTitle.openThreadInNewWindow": {
          id: "codex.commandMenuTitle.openThreadInNewWindow",
          defaultMessage: "Open in New Window",
        },
        "codex.commandMenuTitle.archiveThread": {
          id: "codex.commandMenuTitle.archiveThread",
          defaultMessage: "Archive chat",
        },
        "codex.commandMenuTitle.toggleThreadPin": {
          id: "codex.commandMenuTitle.toggleThreadPin",
          defaultMessage: "Pin/unpin chat",
        },
        "codex.commandMenuTitle.previousThread": {
          id: "codex.commandMenuTitle.previousThread",
          defaultMessage: "Previous Sidebar Item",
        },
        "codex.commandMenuTitle.nextThread": {
          id: "codex.commandMenuTitle.nextThread",
          defaultMessage: "Next Sidebar Item",
        },
        "codex.commandMenuTitle.settings": { id: "codex.commandMenuTitle.settings", defaultMessage: "Settings\u2026" },
        "codex.commandMenuTitle.showKeyboardShortcuts": {
          id: "codex.commandMenuTitle.showKeyboardShortcuts",
          defaultMessage: "Keyboard Shortcuts",
        },
        "codex.commandMenuTitle.newProject": {
          id: "codex.commandMenuTitle.newProject",
          defaultMessage: "New Project\u2026",
        },
        "codex.commandMenuTitle.openFolder": {
          id: "codex.commandMenuTitle.openFolder",
          defaultMessage: "Open Folder\u2026",
        },
        "codex.commandMenuTitle.toggleSidebar": {
          id: "codex.commandMenuTitle.toggleSidebar",
          defaultMessage: "Toggle Sidebar",
        },
        "codex.commandMenuTitle.toggleBottomPanel": {
          id: "codex.commandMenuTitle.toggleBottomPanel",
          defaultMessage: "Toggle Bottom Panel",
        },
        "codex.commandMenuTitle.togglePinnedSummary": {
          id: "codex.commandMenuTitle.togglePinnedSummary",
          defaultMessage: "Toggle Pinned Summary",
        },
        "codex.commandMenuTitle.toggleTerminal": {
          id: "codex.commandMenuTitle.toggleTerminal",
          defaultMessage: "Open Terminal",
        },
        "codex.commandMenuTitle.newTab": { id: "codex.commandMenuTitle.newTab", defaultMessage: "New tab" },
        "codex.commandMenuTitle.toggleReviewPanel": {
          id: "codex.commandMenuTitle.toggleReviewPanel",
          defaultMessage: "Toggle Changes Panel",
        },
        "codex.commandMenuTitle.findInThread": { id: "codex.commandMenuTitle.findInThread", defaultMessage: "Find" },
        "codex.commandMenuTitle.focusBrowserAddressBar": {
          id: "codex.commandMenuTitle.focusBrowserAddressBar",
          defaultMessage: "Focus Browser Address Bar",
        },
        "codex.commandMenuTitle.navigateBack": { id: "codex.commandMenuTitle.navigateBack", defaultMessage: "Back" },
        "codex.commandMenuTitle.navigateForward": {
          id: "codex.commandMenuTitle.navigateForward",
          defaultMessage: "Forward",
        },
        "codex.commandMenuTitle.logOut": { id: "codex.commandMenuTitle.logOut", defaultMessage: "Log Out" },
        "codex.commandMenuTitle.thread1": { id: "codex.commandMenuTitle.thread1", defaultMessage: "Go to Chat 1" },
        "codex.commandMenuTitle.thread2": { id: "codex.commandMenuTitle.thread2", defaultMessage: "Go to Chat 2" },
        "codex.commandMenuTitle.thread3": { id: "codex.commandMenuTitle.thread3", defaultMessage: "Go to Chat 3" },
        "codex.commandMenuTitle.thread4": { id: "codex.commandMenuTitle.thread4", defaultMessage: "Go to Chat 4" },
        "codex.commandMenuTitle.thread5": { id: "codex.commandMenuTitle.thread5", defaultMessage: "Go to Chat 5" },
        "codex.commandMenuTitle.thread6": { id: "codex.commandMenuTitle.thread6", defaultMessage: "Go to Chat 6" },
        "codex.commandMenuTitle.thread7": { id: "codex.commandMenuTitle.thread7", defaultMessage: "Go to Chat 7" },
        "codex.commandMenuTitle.thread8": { id: "codex.commandMenuTitle.thread8", defaultMessage: "Go to Chat 8" },
        "codex.commandMenuTitle.thread9": { id: "codex.commandMenuTitle.thread9", defaultMessage: "Go to Chat 9" },
        "codex.commandMenuTitle.copyConversationPath": {
          id: "codex.commandMenuTitle.copyConversationPath",
          defaultMessage: "Copy conversation path",
        },
        "codex.commandMenuTitle.copyDeeplink": {
          id: "codex.commandMenuTitle.copyDeeplink",
          defaultMessage: "Copy deeplink",
        },
        "codex.commandMenuTitle.copyWorkingDirectory": {
          id: "codex.commandMenuTitle.copyWorkingDirectory",
          defaultMessage: "Copy working directory",
        },
        "codex.commandMenuTitle.closeTab": { id: "codex.commandMenuTitle.closeTab", defaultMessage: "Close Tab" },
        "codex.commandMenuTitle.closeWindow": { id: "codex.commandMenuTitle.closeWindow", defaultMessage: "Close" },
        "codex.commandMenuTitle.reloadBrowserPage": {
          id: "codex.commandMenuTitle.reloadBrowserPage",
          defaultMessage: "Reload Browser Page",
        },
        "codex.commandMenuTitle.hardReloadBrowserPage": {
          id: "codex.commandMenuTitle.hardReloadBrowserPage",
          defaultMessage: "Force Reload Browser Page",
        },
        "codex.commandMenuTitle.newWindow": { id: "codex.commandMenuTitle.newWindow", defaultMessage: "New Window" },
        "codex.commandMenuTitle.openCommandMenu": {
          id: "codex.commandMenuTitle.openCommandMenu",
          defaultMessage: "Open command menu",
        },
        "codex.commandMenuTitle.searchChats": {
          id: "codex.commandMenuTitle.searchChats",
          defaultMessage: "Search Chats\u2026",
        },
        "codex.commandMenuTitle.searchFiles": {
          id: "codex.commandMenuTitle.searchFiles",
          defaultMessage: "Search Files\u2026",
        },
        "codex.commandMenuTitle.renameThread": {
          id: "codex.commandMenuTitle.renameThread",
          defaultMessage: "Rename chat",
        },
        "codex.commandMenuTitle.toggleFileTreePanel": f["codex.commandMenuTitle.toggleFileTreePanel"],
        "codex.commandMenuTitle.toggleTraceRecording": {
          id: "codex.commandMenuTitle.toggleTraceRecording",
          defaultMessage: "Start Trace Recording",
        },
      }),
      v = {
        ...(0, n.YK)({
          "codex.commandDescription.importPrismToLocal": {
            id: "codex.commandDescription.importPrismToLocal",
            defaultMessage: "Edit and compile a local copy of your Prism project",
          },
          "codex.commandDescription.meetings.takeNotes": {
            id: "codex.commandDescription.meetings.takeNotes",
            defaultMessage: "Start taking notes with Meetings on this device",
          },
          "codex.commandDescription.screenshotToCurrentChat": {
            id: "codex.commandDescription.screenshotToCurrentChat",
            defaultMessage: "Select a screen area and attach its image to the current chat without sending",
          },
          "codex.commandDescription.screenshotToNewChat": {
            id: "codex.commandDescription.screenshotToNewChat",
            defaultMessage: "Select a screen area and attach its image to a new chat without sending",
          },
          "codex.commandDescription.artifacts.selectTool": {
            id: "codex.commandDescription.artifacts.selectTool",
            defaultMessage: "Select and move artifact elements",
          },
          "codex.commandDescription.artifacts.handTool": {
            id: "codex.commandDescription.artifacts.handTool",
            defaultMessage: "Pan the artifact viewport",
          },
          "codex.commandDescription.canvas.prompt": {
            id: "codex.commandDescription.canvas.prompt",
            defaultMessage: "Open a Canvas prompt at the pointer",
          },
          "codex.commandDescription.artifacts.rectangleTool": {
            id: "codex.commandDescription.artifacts.rectangleTool",
            defaultMessage: "Add rectangles to Canvas, Slides, or Sheets",
          },
          "codex.commandDescription.artifacts.circleTool": {
            id: "codex.commandDescription.artifacts.circleTool",
            defaultMessage: "Add circles and ovals to Canvas, Slides, or Sheets",
          },
          "codex.commandDescription.artifacts.arrowTool": {
            id: "codex.commandDescription.artifacts.arrowTool",
            defaultMessage: "Add arrows to Canvas, Slides, or Sheets",
          },
          "codex.commandDescription.artifacts.lineTool": {
            id: "codex.commandDescription.artifacts.lineTool",
            defaultMessage: "Add lines to Canvas, Slides, or Sheets",
          },
          "codex.commandDescription.artifacts.textTool": {
            id: "codex.commandDescription.artifacts.textTool",
            defaultMessage: "Add text to Canvas, Slides, or Sheets",
          },
          "codex.commandDescription.artifacts.noteTool": {
            id: "codex.commandDescription.artifacts.noteTool",
            defaultMessage: "Place sticky notes on the Canvas",
          },
          "codex.commandDescription.page.addComment": {
            id: "codex.commandDescription.page.addComment",
            defaultMessage: "Comment on selected Page content or the word at the cursor",
          },
          "codex.commandDescription.page.formatNumberedList": {
            id: "codex.commandDescription.page.formatNumberedList",
            defaultMessage: "Format the selected Page text as a numbered list",
          },
          "codex.commandDescription.page.formatBulletedList": {
            id: "codex.commandDescription.page.formatBulletedList",
            defaultMessage: "Format the selected Page text as a bulleted list",
          },
          "codex.commandDescription.page.formatChecklist": {
            id: "codex.commandDescription.page.formatChecklist",
            defaultMessage: "Toggle checklist formatting for the selected Page text",
          },
          "codex.commandDescription.newThread": {
            id: "codex.commandDescription.newThread",
            defaultMessage: "Start a new chat",
          },
          "codex.commandDescription.newProjectlessTask": {
            id: "codex.commandDescription.newProjectlessTask",
            defaultMessage: "Start a new chat outside of any project",
          },
          "codex.commandDescription.temporaryChat": {
            id: "codex.commandDescription.temporaryChat",
            defaultMessage: "Start a chat that won't appear in history",
          },
          "codex.commandDescription.openThreadInNewWindow": {
            id: "codex.commandDescription.openThreadInNewWindow",
            defaultMessage: "Open the current chat in a new window",
          },
          "codex.commandDescription.archiveThread": {
            id: "codex.commandDescription.archiveThread",
            defaultMessage: "Archive the current chat",
          },
          "codex.commandDescription.deleteOrbit": {
            id: "codex.commandDescription.deleteOrbit",
            defaultMessage: "Confirm deletion of your {dot}",
          },
          "codex.commandDescription.deleteChat": {
            id: "codex.commandDescription.deleteChat",
            defaultMessage: "Confirm deletion of the current chat",
          },
          "codex.commandDescription.markThreadUnread": {
            id: "codex.commandDescription.markThreadUnread",
            defaultMessage: "Mark the current chat as unread",
          },
          "codex.commandDescription.toggleThreadPin": {
            id: "codex.commandDescription.toggleThreadPin",
            defaultMessage: "Pin or unpin the current chat",
          },
          "codex.commandDescription.copyPageLink": {
            id: "codex.commandDescription.copyPageLink",
            defaultMessage: "Copy the current document\u2019s link to the clipboard",
          },
          "codex.commandDescription.copyConversationMarkdown": {
            id: "codex.commandDescription.copyConversationMarkdown",
            defaultMessage: "Copy the current chat as Markdown",
          },
          "codex.commandDescription.copyLastCodeBlock": {
            id: "codex.commandDescription.copyLastCodeBlock",
            defaultMessage: "Copy the last assistant code block in the current chat",
          },
          "codex.commandDescription.openSideChat": {
            id: "codex.commandDescription.openSideChat",
            defaultMessage: "Open the current chat in a side chat",
          },
          "codex.commandDescription.focusMainChat": {
            id: "codex.commandDescription.focusMainChat",
            defaultMessage: "Move keyboard focus to the main chat composer",
          },
          "codex.commandDescription.focusSideChat": {
            id: "codex.commandDescription.focusSideChat",
            defaultMessage: "Move keyboard focus to an open side chat composer",
          },
          "codex.commandDescription.openControlWindow": {
            id: "codex.commandDescription.openControlWindow",
            defaultMessage: "Open the voice chat control window",
          },
          "codex.commandDescription.toggleDebugModal": {
            id: "codex.commandDescription.toggleDebugModal",
            defaultMessage: "Show or hide the internal debug panel",
          },
          "codex.commandDescription.undoAppAction": {
            id: "codex.commandDescription.undoAppAction",
            defaultMessage: "Undo the most recent app action",
          },
          "codex.commandDescription.redoAppAction": {
            id: "codex.commandDescription.redoAppAction",
            defaultMessage: "Redo the most recently undone app action",
          },
          "codex.commandDescription.reopenClosedTab": {
            id: "codex.commandDescription.reopenClosedTab",
            defaultMessage: "Reopen the most recently closed panel tab",
          },
          "codex.commandDescription.composer.openModelPicker": {
            id: "codex.commandDescription.composer.openModelPicker",
            defaultMessage: "Open the composer controls for model effort",
          },
          "codex.commandDescription.composer.openRecentModels": {
            id: "codex.commandDescription.composer.openRecentModels",
            defaultMessage: "Open recently used model, effort, and speed combinations",
          },
          "codex.commandDescription.composer.openProjectPicker": {
            id: "codex.commandDescription.composer.openProjectPicker",
            defaultMessage: "Open the composer project picker",
          },
          "codex.commandDescription.composer.toggleDictation": {
            id: "codex.commandDescription.composer.toggleDictation",
            defaultMessage: "Start or stop dictation in the chat composer",
          },
          "codex.commandDescription.composer.startVoiceMode": {
            id: "codex.commandDescription.composer.startVoiceMode",
            defaultMessage: "Start or stop voice chat",
          },
          "codex.commandDescription.composer.submit": {
            id: "codex.commandDescription.composer.submit",
            defaultMessage: "Send the current composer message",
          },
          "codex.commandDescription.browser.toggleAnnotationMode": {
            id: "codex.commandDescription.browser.toggleAnnotationMode",
            defaultMessage: "Enter or leave annotation mode in the browser",
          },
          "codex.commandDescription.browser.bookmarkPage": {
            id: "codex.commandDescription.browser.bookmarkPage",
            defaultMessage: "Save or edit the current browser page in bookmarks",
          },
          "codex.commandDescription.presentation.editLink": {
            id: "codex.commandDescription.presentation.editLink",
            defaultMessage: "Add or edit a link in the current slide selection",
          },
          "codex.commandDescription.presentation.duplicateSelection": {
            id: "codex.commandDescription.presentation.duplicateSelection",
            defaultMessage: "Make a copy of the selected objects on the current slide",
          },
          "codex.commandDescription.artifact.sendAnnotations": {
            id: "codex.commandDescription.artifact.sendAnnotations",
            defaultMessage: "Send pending annotations in the focused artifact",
          },
          "codex.commandDescription.composer.submitInBackground": {
            id: "codex.commandDescription.composer.submitInBackground",
            defaultMessage: "Send the current composer message without opening its chat",
          },
          "codex.commandDescription.composer.steer": {
            id: "codex.commandDescription.composer.steer",
            defaultMessage: "Submit the current composer prompt as a steering message",
          },
          "codex.commandDescription.composer.queue": {
            id: "codex.commandDescription.composer.queue",
            defaultMessage: "Submit the current composer prompt as a queued message",
          },
          "codex.commandDescription.composer.clear": {
            id: "codex.commandDescription.composer.clear",
            defaultMessage: "Clear the current composer prompt",
          },
          "codex.commandDescription.composer.addPhotos": {
            id: "codex.commandDescription.composer.addPhotos",
            defaultMessage: "Add photos to the active composer",
          },
          "codex.commandDescription.composer.addFiles": {
            id: "codex.commandDescription.composer.addFiles",
            defaultMessage: "Attach files and folders to the active composer",
          },
          "codex.commandDescription.composer.toggleFastMode": {
            id: "codex.commandDescription.composer.toggleFastMode",
            defaultMessage: "Cycle through available speeds: Standard, Fast, and Ultrafast",
          },
          "codex.commandDescription.composer.increaseReasoningEffort": {
            id: "codex.commandDescription.composer.increaseReasoningEffort",
            defaultMessage: "Increase the current composer reasoning effort",
          },
          "codex.commandDescription.composer.decreaseReasoningEffort": {
            id: "codex.commandDescription.composer.decreaseReasoningEffort",
            defaultMessage: "Decrease the current composer reasoning effort",
          },
          "codex.commandDescription.composer.cycleReasoningEffort": {
            id: "codex.commandDescription.composer.cycleReasoningEffort",
            defaultMessage: "Cycle through composer reasoning effort options",
          },
          "codex.commandDescription.composer.togglePlanMode": {
            id: "codex.commandDescription.composer.togglePlanMode",
            defaultMessage: "Turn plan mode on or off in the current composer",
          },
          "codex.commandDescription.composer.toggleWorktreeMode": {
            id: "codex.commandDescription.composer.toggleWorktreeMode",
            defaultMessage: "Switch the current composer between local and a new worktree",
          },
          "codex.commandDescription.composer.cycleHost": {
            id: "codex.commandDescription.composer.cycleHost",
            defaultMessage: "Cycle the new chat between this computer and available remote machines",
          },
          "codex.commandDescription.composer.toggleWorkRunLocation": {
            id: "codex.commandDescription.composer.toggleWorkRunLocation",
            defaultMessage: "Switch ChatGPT Work between cloud and local execution",
          },
          "codex.commandDescription.approval.approve": {
            id: "codex.commandDescription.approval.approve",
            defaultMessage: "Approve the active request",
          },
          "codex.commandDescription.approval.decline": {
            id: "codex.commandDescription.approval.decline",
            defaultMessage: "Decline the active request",
          },
          "codex.commandDescription.git.commit": {
            id: "codex.commandDescription.git.commit",
            defaultMessage: "Open commit or push options",
          },
          "codex.commandDescription.git.createPullRequest": {
            id: "codex.commandDescription.git.createPullRequest",
            defaultMessage: "Open pull request creation options",
          },
          "codex.commandDescription.git.createDraftPullRequest": {
            id: "codex.commandDescription.git.createDraftPullRequest",
            defaultMessage: "Open draft pull request creation options",
          },
          "codex.commandDescription.git.createBranch": {
            id: "codex.commandDescription.git.createBranch",
            defaultMessage: "Open branch creation options",
          },
          "codex.commandDescription.git.mergePullRequest": {
            id: "codex.commandDescription.git.mergePullRequest",
            defaultMessage: "Open pull request merge options",
          },
          "codex.commandDescription.git.openPullRequest": {
            id: "codex.commandDescription.git.openPullRequest",
            defaultMessage: "Open the pull request linked to the current chat",
          },
          "codex.commandDescription.git.toggleBlame": {
            id: "codex.commandDescription.git.toggleBlame",
            defaultMessage: "Show or hide author and commit details for the active editor line",
          },
          "codex.commandDescription.forkThread": {
            id: "codex.commandDescription.forkThread",
            defaultMessage: "Branch the current chat",
          },
          "codex.commandDescription.showMiniOverlay": {
            id: "codex.commandDescription.showMiniOverlay",
            defaultMessage: "Show Mini from anywhere",
          },
          "codex.commandDescription.nextThreadNeedingAttention": {
            id: "codex.commandDescription.nextThreadNeedingAttention",
            defaultMessage: "Switch to the next chat awaiting input or with unread activity",
          },
          "codex.commandDescription.previousThread": {
            id: "codex.commandDescription.previousThread",
            defaultMessage: "Switch to the previous sidebar item",
          },
          "codex.commandDescription.previousTab": {
            id: "codex.commandDescription.previousTab",
            defaultMessage: "Switch to the previous tab",
          },
          "codex.commandDescription.previousRecentThread": {
            id: "codex.commandDescription.previousRecentThread",
            defaultMessage: "Cycle to the previous recently viewed chat",
          },
          "codex.commandDescription.nextThread": {
            id: "codex.commandDescription.nextThread",
            defaultMessage: "Switch to the next sidebar item",
          },
          "codex.commandDescription.nextTab": {
            id: "codex.commandDescription.nextTab",
            defaultMessage: "Switch to the next tab",
          },
          "codex.commandDescription.nextRecentThread": {
            id: "codex.commandDescription.nextRecentThread",
            defaultMessage: "Cycle to the next recently viewed chat",
          },
          "codex.commandDescription.recentThreadSlot": {
            id: "codex.commandDescription.recentThreadSlot",
            defaultMessage: "Open the recently updated chat in this shortcut slot",
          },
          "codex.commandDescription.switchToChat": {
            id: "codex.commandDescription.switchToChat",
            defaultMessage: "Switch to Chat",
          },
          "codex.commandDescription.switchToWork": {
            id: "codex.commandDescription.switchToWork",
            defaultMessage: "Switch to Work",
          },
          "codex.commandDescription.switchToCodex": {
            id: "codex.commandDescription.switchToCodex",
            defaultMessage: "Switch to Codex",
          },
          "codex.commandDescription.settings": {
            id: "codex.commandDescription.settings",
            defaultMessage: "Open {appName} settings",
          },
          "codex.commandDescription.codexMicroSettings": {
            id: "codex.commandDescription.codexMicroSettings",
            defaultMessage: "Open Codex Micro setup",
          },
          "codex.commandDescription.mcpSettings": {
            id: "codex.commandDescription.mcpSettings",
            defaultMessage: "Configure MCP servers",
          },
          "codex.commandDescription.keyboardShortcuts": {
            id: "codex.commandDescription.keyboardShortcuts",
            defaultMessage: "Customize keyboard shortcuts",
          },
          "codex.commandDescription.showKeyboardShortcuts": {
            id: "codex.commandDescription.showKeyboardShortcuts",
            defaultMessage: "Show the shortcuts available right now",
          },
          "codex.commandDescription.clearAllUnreads": {
            id: "codex.commandDescription.clearAllUnreads",
            defaultMessage: "Mark all chats and scheduled task updates as read",
          },
          "codex.commandDescription.manageTasks": {
            id: "codex.commandDescription.manageTasks",
            defaultMessage: "Open the list of scheduled tasks",
          },
          "codex.commandDescription.forceReloadSkills": {
            id: "codex.commandDescription.forceReloadSkills",
            defaultMessage: "Refresh the skill catalog for the current context",
          },
          "codex.commandDescription.openSkills": {
            id: "codex.commandDescription.openSkills",
            defaultMessage: "Browse installed and recommended skills",
          },
          "codex.commandDescription.newProject": {
            id: "codex.commandDescription.newProject",
            defaultMessage: "Create a project",
          },
          "codex.commandDescription.openFolder": {
            id: "codex.commandDescription.openFolder",
            defaultMessage: "Add a local project to {appName}",
          },
          "codex.commandDescription.toggleSidebar": {
            id: "codex.commandDescription.toggleSidebar",
            defaultMessage: "Show or hide the sidebar",
          },
          "codex.commandDescription.toggleBottomPanel": {
            id: "codex.commandDescription.toggleBottomPanel",
            defaultMessage: "Show or hide the bottom panel",
          },
          "codex.commandDescription.togglePinnedSummary": {
            id: "codex.commandDescription.togglePinnedSummary",
            defaultMessage: "Show or hide the pinned summary",
          },
          "codex.commandDescription.toggleTerminal": {
            id: "codex.commandDescription.toggleTerminal",
            defaultMessage: "Open the terminal panel",
          },
          "codex.commandDescription.newTab": {
            id: "codex.commandDescription.newTab",
            defaultMessage: "Open a new tab",
          },
          "codex.commandDescription.closeOtherTabs": {
            id: "codex.commandDescription.closeOtherTabs",
            defaultMessage: "Close all tabs except the active tab",
          },
          "codex.commandDescription.showWorkspaceTabView": {
            id: "codex.commandDescription.showWorkspaceTabView",
            defaultMessage: "Enter or exit full view",
          },
          "codex.commandDescription.stepWorkspaceLayout": {
            id: "codex.commandDescription.stepWorkspaceLayout",
            defaultMessage: "Step from full view to split view, hide tabs, or show tabs beside Chat",
          },
          "codex.commandDescription.openReviewTab": {
            id: "codex.commandDescription.openReviewTab",
            defaultMessage: "Open the Changes tab",
          },
          "codex.commandDescription.toggleReviewTab": {
            id: "codex.commandDescription.toggleReviewTab",
            defaultMessage: "Show or hide Changes for the current Git-backed chat",
          },
          "codex.commandDescription.toggleReviewPanel": {
            id: "codex.commandDescription.toggleReviewPanel",
            defaultMessage: "Show or hide Changes for the current chat",
          },
          "codex.commandDescription.file.goToDefinition": {
            id: "codex.commandDescription.file.goToDefinition",
            defaultMessage: "Open the definition of the selected file symbol",
          },
          "codex.commandDescription.file.findReferences": {
            id: "codex.commandDescription.file.findReferences",
            defaultMessage: "Find references to the selected file symbol",
          },
          "codex.commandDescription.file.navigateBack": {
            id: "codex.commandDescription.file.navigateBack",
            defaultMessage: "Return to the previous file location",
          },
          "codex.commandDescription.file.navigateForward": {
            id: "codex.commandDescription.file.navigateForward",
            defaultMessage: "Return to the next file location",
          },
          "codex.commandDescription.findInThread": {
            id: "codex.commandDescription.findInThread",
            defaultMessage: "Search the current chat",
          },
          "codex.commandDescription.goToLine": {
            id: "codex.commandDescription.goToLine",
            defaultMessage: "Go to a line in the current file",
          },
          "codex.commandDescription.focusBrowserAddressBar": {
            id: "codex.commandDescription.focusBrowserAddressBar",
            defaultMessage: "Focus the in-app browser address bar",
          },
          "codex.commandDescription.navigateBrowserBack": {
            id: "codex.commandDescription.navigateBrowserBack",
            defaultMessage: "Go back in browser history",
          },
          "codex.commandDescription.navigateBrowserForward": {
            id: "codex.commandDescription.navigateBrowserForward",
            defaultMessage: "Go forward in browser history",
          },
          "codex.commandDescription.navigateBack": {
            id: "codex.commandDescription.navigateBack",
            defaultMessage: "Go back in navigation history",
          },
          "codex.commandDescription.navigateForward": {
            id: "codex.commandDescription.navigateForward",
            defaultMessage: "Go forward in navigation history",
          },
          "codex.commandDescription.logOut": {
            id: "codex.commandDescription.logOut",
            defaultMessage: "Sign out of {appName}",
          },
          "codex.commandDescription.feedback": {
            id: "codex.commandDescription.feedback",
            defaultMessage: "Send product feedback to the ChatGPT team",
          },
          "codex.commandDescription.environmentActionSlot": {
            id: "codex.commandDescription.environmentActionSlot",
            defaultMessage: "Run the environment action in this shortcut slot",
          },
          "codex.commandDescription.spotlightSearch": {
            id: "codex.commandDescription.spotlightSearch",
            defaultMessage: "Open Spotlight search from anywhere on desktop",
          },
          "codex.commandDescription.notchVoice": {
            id: "codex.commandDescription.notchVoice",
            defaultMessage: "Start voice in Mini or show the ongoing call",
          },
          "codex.commandDescription.toggleNotch": {
            id: "codex.commandDescription.toggleNotch",
            defaultMessage: "Expand or collapse the notch from anywhere",
          },
          "codex.commandDescription.globalDictationHold": {
            id: "codex.commandDescription.globalDictationHold",
            defaultMessage: "Hold to dictate, release to finish. Double-tap for hands-free, tap to finish.",
          },
          "codex.commandDescription.globalDictationSingleTap": {
            id: "codex.commandDescription.globalDictationSingleTap",
            defaultMessage: "Press once to start, again to finish",
          },
          "codex.commandDescription.copyConversationPath": {
            id: "codex.commandDescription.copyConversationPath",
            defaultMessage: "Copy the current chat path",
          },
          "codex.commandDescription.copyDeeplink": {
            id: "codex.commandDescription.copyDeeplink",
            defaultMessage: "Copy a deeplink to the current chat",
          },
          "codex.commandDescription.copyWorkingDirectory": {
            id: "codex.commandDescription.copyWorkingDirectory",
            defaultMessage: "Copy the current chat working directory",
          },
          "codex.commandDescription.closeTab": {
            id: "codex.commandDescription.closeTab",
            defaultMessage: "Close the active tab",
          },
          "codex.commandDescription.closeWindow": {
            id: "codex.commandDescription.closeWindow",
            defaultMessage: "Close the active window",
          },
          "codex.commandDescription.reloadBrowserPage": {
            id: "codex.commandDescription.reloadBrowserPage",
            defaultMessage: "Reload the active browser page",
          },
          "codex.commandDescription.hardReloadBrowserPage": {
            id: "codex.commandDescription.hardReloadBrowserPage",
            defaultMessage: "Force reload the active browser page",
          },
          "codex.commandDescription.newWindow": {
            id: "codex.commandDescription.newWindow",
            defaultMessage: "Open a new window",
          },
          "codex.commandDescription.openCommandMenu": {
            id: "codex.commandDescription.openCommandMenu",
            defaultMessage: "Open the command menu",
          },
          "codex.commandDescription.searchChats": {
            id: "codex.commandDescription.searchChats",
            defaultMessage: "Search and switch to a chat",
          },
          "codex.commandDescription.searchChatsPrevious": {
            id: "codex.commandDescription.searchChatsPrevious",
            defaultMessage: "Open the chat picker and cycle backward through chats",
          },
          "codex.commandDescription.togglePriorityFilter": {
            id: "codex.commandDescription.togglePriorityFilter",
            defaultMessage: "Turn the sidebar activity view on or off",
          },
          "codex.commandDescription.searchFiles": {
            id: "codex.commandDescription.searchFiles",
            defaultMessage: "Search files",
          },
          "codex.commandDescription.renameThread": {
            id: "codex.commandDescription.renameThread",
            defaultMessage: "Rename the current chat",
          },
          "codex.commandDescription.toggleFileTreePanel": {
            id: "codex.commandDescription.toggleFileTreePanel",
            defaultMessage: "Show or hide a page's navigation, or the code viewer's file tree",
          },
          "codex.commandDescription.toggleTraceRecording": {
            id: "codex.commandDescription.toggleTraceRecording",
            defaultMessage: "Start or stop trace recording",
          },
          "codex.commandDescription.focusTab": {
            id: "codex.commandDescription.focusTab",
            defaultMessage: "Focus the tab at this position in the chat tab strip",
          },
          "codex.commandDescription.threadSlot": {
            id: "codex.commandDescription.threadSlot",
            defaultMessage: "Open the visible chat in this shortcut slot",
          },
        }),
        "codex.commandDescription.importExternalAgent": p.description,
        "codex.commandDescription.personalitySettings": g.description,
      }
    function y(e, t, a = !1) {
      if ("openOrbit" === e.id) return s(t).title
      if ("focusPageBlockControls" === e.id) return r(t).title
      if ("openAvatarOverlay" === e.id && a) return t.formatMessage(h)
      if ("composer.captureAppshot" === e.id) return i(t).title
      if ("titleIntlId" in e) {
        var o
        let a
        return w(x, e.titleIntlId)
          ? t.formatMessage(x[e.titleIntlId], { dot: "dot" })
          : null == (a = u((o = e.id)) ? m[o] : null)
            ? ""
            : t.formatMessage(a.title)
      }
      return t.formatMessage(M[e.electron.menuTitleIntlId])
    }
    function b(e, t, a, n = !1) {
      var d
      let l
      if ("openOrbit" === e.id) return s(t)
      if ("focusPageBlockControls" === e.id) return r(t)
      if ("composer.captureAppshot" === e.id) return i(t)
      if ("toggleSidePanel" === e.id)
        return {
          title:
            a?.title ??
            t.formatMessage({
              id: "codex.command.toggleWorkspaceTabs",
              defaultMessage: "Switch between Chat and tabs",
            }),
          description:
            a?.description ??
            t.formatMessage({
              id: "codex.commandDescription.toggleWorkspaceTabs",
              defaultMessage: "Switch between Chat and tabs in full view, or show or hide tabs in split view",
            }),
        }
      let p = (0, o.yF)(e)
          ? w(v, e.descriptionIntlId)
            ? t.formatMessage(v[e.descriptionIntlId], { appName: c.C, dot: "dot" })
            : null == (l = u((d = e.id)) ? m[d] : null)
              ? ""
              : t.formatMessage(l.description)
          : "",
        g = a?.title ?? y(e, t)
      return ("openAvatarOverlay" === e.id && n && (g = y(e, t, !0)), { title: g, description: a?.description ?? p })
    }
    function w(e, t) {
      return Object.hasOwn(e, t)
    }
  },
  vnLQ(e, t, a) {
    var o = a("QosV"),
      n = a("SZCv"),
      c = a.n(n),
      i = a("qmMi"),
      d = a("DBCl"),
      s = a("Ehlj"),
      r = a("tgbB"),
      l = a("UlKW"),
      m = a("t162"),
      u = a("CfsC"),
      p = a("tl5a"),
      g = a("AqHb"),
      h = a("nIa3"),
      f = a("JQtI"),
      x = a("gdZA"),
      M = a("TYK1"),
      v = a("kx7U"),
      y = a("OWtl"),
      b = a("V3rO"),
      w = a("kfGJ"),
      T = a("r6TF"),
      C = a("d6Ff"),
      S = a("QGyr"),
      k = a("TWTg"),
      D = a("mzLv"),
      P = a("fmZS")
    let _ = (0, i.un)(y.u, ({ get: e }) =>
        (e(v.u8) ?? [])
          .filter(({ hostId: t }) => "connected" === e(p.y2, t))
          .map(({ hostId: e }) => e)
          .sort((e, t) => e.localeCompare(t)),
      ),
      I = (0, i.un)(y.u, ({ get: e }) => [w.fI, ...e(_)].filter((t) => (0, s.JF)(e(u.B, t), "attachedThreadSearch"))),
      A = (0, i.un)(y.u, ({ get: e }) => new Set([w.fI, d.iwv, ...e(_)])),
      N = (0, i.un)(y.u, ({ get: e }) => ({
        conversationsMeta: (0, T.ZI)(e, e(T.Tv)).flatMap((e) =>
          "local" === e.kind && null != e.summary ? [e.summary] : [],
        ),
        hostIds: e(A),
        projectLabelByThreadKey: e(S.o4),
      })),
      j = []
    function E(e, t) {
      if (t.isAeonThread && q(e, t.hostId, t.threadId)) return null
      let a = e(x.$P, { hostId: t.hostId, threadId: t.conversationId })
      return null == a ? t : { ...t, title: a, searchTitle: a }
    }
    function R(e, t) {
      return (
        t.has(e.hostId ?? w.fI) &&
        e.threadSource !== l.kM &&
        (null == e.source || "string" == typeof e.source || !("subAgent" in e.source))
      )
    }
    function O(e, t, a) {
      let o = e.cwd ?? "",
        n = null == t || e.title?.trim() ? t : ((0, m.uw)(t, 60) ?? ""),
        c = (t ?? o) || e.conversationId,
        i = (0, d.JXB)(e.conversationId),
        s = (0, C.z3)(i)
      return {
        kind: "local",
        threadKey: s,
        conversationId: i,
        hostId: e.hostId ?? w.fI,
        threadId: e.conversationId,
        title: n,
        searchTitle: c,
        cwd: o,
        workspaceKind: e.workspaceKind,
        branch: e.gitInfo?.branch ?? "",
        projectLabel: a?.get(s),
        hasUnreadTurn: e.hasUnreadTurn,
        isAeonThread: "durable" === (0, h.d)(e.hostId ?? w.fI, e.mode) && (0, f.N)(e.threadStartKind, e.threadSource),
        updatedAt: e.recencyAt ?? e.updatedAt,
        searchPreview: null,
      }
    }
    function B(e) {
      switch (e.kind) {
        case "local":
          return (0, D.s)(e.threadKey, e.hostId)
        case "chatgpt":
          return (0, D.Q)(e.conversationId)
        case "dot":
          return `dot:${e.item.id}`
      }
    }
    function F(e) {
      let t = (0, d.JXB)(e.threadId)
      return {
        kind: "local",
        threadKey: (0, C.z3)(t),
        conversationId: t,
        hostId: e.hostId,
        attachedToThreadId: e.attachedToThreadId,
        threadId: e.threadId,
        title: e.title,
        searchTitle: e.title,
        cwd: e.cwd,
        branch: "",
        hasUnreadTurn: !1,
        isAeonThread: "durable" === (0, h.d)(e.hostId) && (0, f.N)(e.threadStartKind, e.threadSource),
        updatedAt: e.updatedAt,
        searchPreview: e.searchPreview,
      }
    }
    function L(e) {
      if ("local" === e.kind) return (0, P.Q7)(e.hostId, e.conversationId)
    }
    function q(e, t, a) {
      if ("durable" !== (0, g._)(t)) return !1
      let { data: o } = e(M.cloudAeonByThreadId$, (0, d.JXB)(a))
      return o?.active_root_thread_id != null && o.active_root_thread_id !== a
    }
    a.d(
      t,
      {},
      {
        EI: function ({ loadedChatSearchResults: e, chatGptResults: t, isChatSelectable: a, limit: o }) {
          return (0, r.lU)([...e, ...t], B)
            .filter(a)
            .sort((e, t) => t.updatedAt - e.updatedAt)
            .slice(0, o)
        },
        LU: B,
        MQ: function (e, t, a, o) {
          if (void 0 !== e.matchContext) return e.matchContext === a || e.matchContext === o ? null : e.matchContext
          if (!t) return null
          let n = (0, r.C4)(t),
            c = "local" === e.kind ? n.scoreCanonical : n.score
          return n.scoreTitle(e, a) > 0 || c(o) > 0 ? null : ((0, r.gA)(e, n, t.toLowerCase())?.value ?? null)
        },
        N6: function ({
          asyncResults: e,
          chatGptResults: t = [],
          isChatSelectable: a,
          loadedChatSearchResults: o,
          limit: n,
          query: c,
        }) {
          if (0 === c.trim().length || n <= 0) return []
          let i = (0, r.lU)([...o, ...t, ...e.filter((e) => e.threadSource !== l.kM).map(F)], B),
            d = (0, r.Wn)(c, n)
          for (let e of i) a?.(e) !== !1 && d.add(e)
          return d.results()
        },
        T0: function (e, t) {
          var a
          let n,
            d = (0, o.c)(3),
            s = (0, i.Ul)(void 0 === t || t ? N : void 0)
          d[0] !== e || d[1] !== s
            ? ((n =
                null == s
                  ? void 0
                  : ((a = { ...s, conversationsMeta: [...(e ?? []), ...s.conversationsMeta] }),
                    (0, i.un)(
                      y.u,
                      ({ get: e }) =>
                        (function ({
                          conversationsMeta: e,
                          getSearchTitle: t,
                          hostIds: a,
                          projectLabelByThreadKey: o,
                        }) {
                          return e.filter((e) => R(e, a)).map((e) => O(e, t(e), o))
                        })({ ...a, getSearchTitle: (t) => (0, k.D)(e, t) }).flatMap((t) => E(e, t) ?? []),
                      { isEqual: c() },
                    ))),
              (d[0] = e),
              (d[1] = s),
              (d[2] = n))
            : (n = d[2])
          let r = n
          return (0, i.Ul)(r) ?? j
        },
        er: _,
        hM: function (e, t) {
          let a = (0, T.oB)(e, t),
            o = a?.summary
          return null != o && R(o, e(A)) ? E(e, O(o, (0, k.D)(e, o), e(S.o4))) : null
        },
        hv: function ({ excludedThreadKeys: e, loadedChatSearchResults: t, limit: a, pinnedThreadIds: o }) {
          if (a <= 0) return { pinnedResults: [], recentResults: [] }
          let n = (0, r.lU)(t, B).filter((t) => !e?.has(t.threadKey)),
            c = new Map()
          for (let e of n) {
            let t = (0, C.PK)(e.threadKey)
            if (null != t) {
              let a = c.get(t)
              null == a ? c.set(t, [e]) : a.push(e)
            }
          }
          let i = new Set(o),
            d = o.flatMap((e) => c.get(e) ?? []),
            s = n
              .filter((e) => {
                let t = (0, C.PK)(e.threadKey)
                return null == t || !i.has(t)
              })
              .sort((e, t) => t.updatedAt - e.updatedAt)
          return { pinnedResults: d.slice(0, a), recentResults: s.slice(0, Math.max(a - d.length, 0)) }
        },
        oB: function (e, t) {
          if ("chatgpt" === e.kind) return null
          if (void 0 !== e.matchContext || null != e.searchPreview || "local" !== e.kind) return e.searchPreview
          let a = t.trim()
          if (0 === a.length) return null
          let { score: o, scoreTitle: n } = (0, r.C4)(a)
          return n(e) > 0 || 0 === o(e.branch) ? null : { kind: "branchMatch", branch: e.branch }
        },
        qw: function ({
          currentThreadKey: e,
          loadedChatSearchResults: t,
          limit: a,
          recentThreadKeys: o,
          unreadThreadKeys: n,
          visibleThreadKeys: c,
        }) {
          if (a <= 0) return []
          let i = (0, r.lU)(t, B),
            s = new Map(),
            l = new Map()
          for (let e of i) {
            ;(s.set(e.threadKey, e), s.set(L(e), e))
            let t = l.get(e.threadKey)
            if ((null == t ? l.set(e.threadKey, [e]) : t.push(e), "local" === e.kind)) {
              let t = (0, b.Uw)(e.conversationId)
              ;(0, d.L$F)(t) && s.set((0, C.z3)(t), e)
            }
          }
          let m = [],
            u = new Set(),
            p = (t) => {
              if (null == t) return
              if (null != c && !c.has(t.threadKey)) {
                if ("local" !== t.kind) return
                let e = (0, b.Uw)(t.conversationId)
                if (!(0, d.L$F)(e) || !c.has((0, C.z3)(e))) return
              }
              let o = L(t)
              o === e || u.has(o) || m.length === a || (u.add(o), m.push(t))
            },
            g = (e) => {
              p(s.get(e))
            }
          for (let e of n) {
            let t = s.get(e)
            null != t &&
              l.get(t.threadKey)?.forEach((e) => {
                p({ ...e, hasUnreadTurn: !0 })
              })
          }
          for (let e of o) g(e)
          for (let e of i.sort((e, t) => t.updatedAt - e.updatedAt)) p(e)
          return m
        },
        rb: I,
        xH: function (e) {
          return (0, i.un)(
            y.u,
            ({ get: t }) =>
              e.filter((e) => !(0, f.N)(e.threadStartKind, e.threadSource) || !q(t, e.hostId, e.threadId)),
            { isEqual: c() },
          )
        },
      },
    )
  },
  pUz1(e, t, a) {
    a.d(t, { UnifiedSearchDialog: () => aA })
    var o = a("ABep"),
      n = a("QosV"),
      c = a("cUQ9"),
      i = a("qhiJ"),
      d = a("zd8w")
    a("eRxB")
    var s = a("Wf1j"),
      r = a("HOLv"),
      l = a("zkPp"),
      m = a("bIvi"),
      u = a("AGyq"),
      p = a("HFi9"),
      g = a.n(p),
      h = a("qmMi"),
      f = a("v7qY"),
      x = a("oyxz"),
      M = a("Qgfj"),
      v = a("Ywss"),
      y = a("ChYf"),
      b = a("tl5a"),
      w = a("QcW8"),
      T = a("gbrq"),
      C = a("eFn4"),
      S = a("sSHx"),
      k = a("QLtS"),
      D = a("kZDS"),
      P = a("Bbed"),
      _ = a("JM0a"),
      I = a("ubby"),
      A = a("AXK1"),
      N = a("KhRo"),
      j = a("e1xH"),
      E = a("QBk8"),
      R = a("DBCl"),
      O = a("SPnB"),
      B = a("Kwur"),
      F = a("mCnp"),
      L = a("Aoej"),
      q = a("CoxM"),
      G = a("V1hw"),
      U = a("Ypxw"),
      $ = a("ANKV"),
      W = a("zc1h"),
      K = a("xA4p"),
      V = a("wQlV"),
      z = a("lFyd"),
      Y = a("iiZm"),
      Z = a("Ot7V"),
      H = a("bVeK"),
      Q = a("SGsN"),
      J = a("uNsz"),
      X = a("tl2n"),
      ee = a("TCFx"),
      et = a("yeKA"),
      ea = a("jrp4"),
      eo = a("nlNF"),
      en = a("yGJW"),
      ec = a("tSEg"),
      ei = a("khOd"),
      ed = a("soaw"),
      es = a("PVyj"),
      er = a("BkbV"),
      el = a("tUjg"),
      em = a("idI8"),
      eu = a("BIx6"),
      ep = a("uqg3"),
      eg = a("ZsYZ"),
      eh = a("tv8P"),
      ef = a("nDmq"),
      ex = a("NnV7"),
      eM = a("ZPSN")
    function ev(e) {
      let t,
        a = (0, n.c)(4),
        { close: c, searchEventLogger: i } = e,
        d = (0, h.Ul)(j.pagesEnabled$)
      return (
        a[0] !== c || a[1] !== d || a[2] !== i
          ? ((t = d ? (0, o.jsx)(ey, { close: c, searchEventLogger: i }) : null),
            (a[0] = c),
            (a[1] = d),
            (a[2] = i),
            (a[3] = t))
          : (t = a[3]),
        t
      )
    }
    function ey(e) {
      let t,
        a,
        c,
        r,
        l,
        m,
        u,
        p,
        g,
        f,
        M,
        y = (0, n.c)(65),
        { close: b, searchEventLogger: w } = e,
        T = (0, h.gh)(ec.GD),
        C = (0, s.A)(),
        S = (0, ed.a)(),
        k = (0, v.Zp)(),
        P = (0, v.zy)(),
        _ = (0, i.wo)(eD),
        I = (0, h.Ul)($.YC),
        A = "pages" === I ? "pages" : "all",
        N = "root" === I,
        [R, J] = (0, d.useState)(null),
        ea = R?.query === _ ? R.limit : 20
      N && (ea = 5)
      let er = (0, h.Ul)(eh.spaceAccountId$),
        ef = (0, h.Ul)(O.chatGptAuthenticatedUserId$)
      y[0] !== er || y[1] !== ef
        ? ((t = { accountId: er, userId: ef }), (y[0] = er), (y[1] = ef), (y[2] = t))
        : (t = y[2])
      let ev = (0, h._U)(es.aP, t),
        ey = (0, h.Ul)(eM.Wr),
        eI = (0, h.Ul)(ei.GB),
        eA = (0, h.Ul)(eI ? eg.IF : null),
        eN = (0, h.Ul)(X.$7),
        ej = (0, h.Ul)(j.gG),
        eE = (0, h.Ul)(ej && _.length > 0 ? eu.Y : null),
        eR = ej && _.length > 0
      y[3] !== _ || y[4] !== w || y[5] !== A || y[6] !== eR
        ? ((a = { enabled: eR, eventLogger: w, limit: 40, search: _, searchFilter: A, searchScope: "palette" }),
          (y[3] = _),
          (y[4] = w),
          (y[5] = A),
          (y[6] = eR),
          (y[7] = a))
        : (a = y[7])
      let eO = (0, F.P)(a),
        eB = eO.isSearching,
        eF = (0, Y.WE)(_),
        eL = eE
          ?.map((e) => ({ page: e, score: eF(e.title.trim() || C.formatMessage((0, ex._Y)(e.documentType))) }))
          .filter(ek)
          .sort(eS)
          .map(eC)
      if (0 === _.length)
        c = eI
          ? eA
              ?.filter((e) => {
                let { file: t } = e
                return "pages" !== I || null == t
              })
              .slice(0, 20)
              .flatMap(eT)
          : ey?.slice(0, 20).map(ew)
      else {
        c = []
        let e = new Set()
        for (let t of eO.searchItems)
          if ("conversation" !== t.source_type && "dot_messages" !== t.source_type)
            if ("space_page" === t.payload.kind) {
              if (e.has(t.payload.page_id)) continue
              ;(e.add(t.payload.page_id),
                c.push({
                  kind: "page",
                  searchItem: t,
                  page: { pageId: t.payload.page_id, title: t.title, searchPayload: t.payload },
                }))
            } else {
              let e = (0, U.W)(t, _, "", eN)
              null != e && c.push({ kind: "search", result: e })
            }
        for (let t of eL ?? []) e.has(t.pageId) || c.push({ kind: "page", page: t })
      }
      ev.length > 0 && (c = c?.filter((e) => "page" !== e.kind || !ev.some((t) => t.pageIds.has(e.page.pageId))))
      let eq = c?.slice(0, ea),
        { groupRef: eG, prepareSelection: eU } = (0, V.K)(_, eq?.length ?? 0),
        e$ = _.length > 0 && ((c?.length ?? 0) > ea || eO.hasNextPage),
        eW = !!eq?.length
      if ((0 === _.length && !eW) || (_.length > 0 && !ej)) return null
      let eK = !eW && "error" === eO.nextSpaceSourceStatus && eO.hasNextPage,
        eV = eO.contentSearchError || eK
      if (!eW && !eB && !eV) {
        let e
        if (N) return null
        if (eO.hasNextPage && "ok" === eO.nextSpaceSourceStatus) {
          let e, t, a, n
          return (
            y[8] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, K._X)("page:continue")), (y[8] = e))
              : (e = y[8]),
            y[9] !== C
              ? ((t = C.formatMessage({
                  id: "codex.space.page.commandMenu.continueSearch",
                  defaultMessage: "Continue searching",
                })),
                (y[9] = C),
                (y[10] = t))
              : (t = y[10]),
            y[11] !== t ? ((a = { id: "page:continue", value: e, title: t }), (y[11] = t), (y[12] = a)) : (a = y[12]),
            y[13] !== eO.loadNextPage || y[14] !== a
              ? ((n = (0, o.jsx)(W.K, { row: a, onSelect: eO.loadNextPage })),
                (y[13] = eO.loadNextPage),
                (y[14] = a),
                (y[15] = n))
              : (n = y[15]),
            n
          )
        }
        return (
          y[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, o.jsx)(i.uB.Empty, {
                "data-command-menu-search-state": !0,
                children: (0, o.jsx)(x.A, { id: "codex.commandMenu.noResults", defaultMessage: "No matches" }),
              })),
              (y[16] = e))
            : (e = y[16]),
          e
        )
      }
      y[17] !== _ || y[18] !== w || y[19] !== A || y[20] !== eO.localSearchItems || y[21] !== eO.queryIdentity
        ? ((r = (e, t) => {
            null != e &&
              w?.logResultOpen({
                item: e,
                globalIndex: t,
                queryIdentity: eO.queryIdentity,
                isLocalResult: eO.localSearchItems.includes(e),
                openInNewTab: !1,
                search: _,
                searchFilter: A,
                searchScope: "all",
              })
          }),
          (y[17] = _),
          (y[18] = w),
          (y[19] = A),
          (y[20] = eO.localSearchItems),
          (y[21] = eO.queryIdentity),
          (y[22] = r))
        : (r = y[22])
      let ez = r
      y[23] !== b || y[24] !== S || y[25] !== P || y[26] !== k || y[27] !== T
        ? ((l = (e) => {
            let t = () => {
              ;(0, ep.openSpacePageSidePanelTab)(T, e.pageId, { title: e.title, openSource: "discovery" }).opened && b()
            }
            if (null == e.searchPayload) return void t()
            let a = T.get(eh.spaceAccountId$),
              n = T.get(O.chatGptAuthenticatedAccountId$),
              c = T.get(O.chatGptAuthenticatedUserId$),
              i = T.get(eo.x2)?.key,
              d = () =>
                T.get(eh.spaceAccountId$) === a &&
                T.get(O.chatGptAuthenticatedAccountId$) === n &&
                T.get(O.chatGptAuthenticatedUserId$) === c &&
                T.get(j.gG) &&
                S() &&
                T.get(eo.x2)?.key === i
            ;(0, em.openGlobalSearchSpacePage)(T, k, P, e.searchPayload, d, t).catch(() => {
              d() &&
                T.get(Q.Id).danger((0, o.jsx)(x.A, { ...el.h.pageOpenFailed }), {
                  errorAnalytics: { toastId: "codex.chatGptSearch.pageOpenFailed" },
                })
            })
          }),
          (y[23] = b),
          (y[24] = S),
          (y[25] = P),
          (y[26] = k),
          (y[27] = T),
          (y[28] = l))
        : (l = y[28])
      let eY = l
      y[29] !== b || y[30] !== k || y[31] !== T || y[32] !== eO.localSearchItems
        ? ((m = (e) => {
            let t = e.item.rawItem
            ;("space" !== t.source_type && (0, q._h)(T, t, !0, eO.localSearchItems.includes(t)),
              b(),
              null == e.href || ("library_item_id" in t.payload && null != (0, G.T)(t.payload))
                ? (0, L.g)(T, t, k).catch(() => {
                    T.get(Q.Id).danger(
                      (0, o.jsx)(x.A, {
                        id: "codex.chatGptSearch.previewFailed",
                        defaultMessage: "Unable to open file preview",
                      }),
                      { errorAnalytics: { toastId: "codex.chatGptSearch.previewFailed" } },
                    )
                  })
                : /^https?:\/\//i.test(e.href)
                  ? (0, Z.E0)({ href: e.href, initiator: "mcp_app_resource" })
                  : k(e.href))
          }),
          (y[29] = b),
          (y[30] = k),
          (y[31] = T),
          (y[32] = eO.localSearchItems),
          (y[33] = m))
        : (m = y[33])
      let eZ = m,
        eH = i.uB,
        eQ = eB && !eW,
        eJ = eB || void 0
      ;(y[34] !== eW || y[35] !== I
        ? ((u = eW
            ? (0, o.jsx)(D.z, {
                children:
                  "pages" === I
                    ? (0, o.jsx)(x.A, { id: "codex.space.page.commandMenu.heading", defaultMessage: "Pages" })
                    : (0, o.jsx)(x.A, { id: "codex.space.commandMenu.heading", defaultMessage: "Space" }),
              })
            : void 0),
          (y[34] = eW),
          (y[35] = I),
          (y[36] = u))
        : (u = y[36]),
        y[37] !== eB
          ? ((p = eB
              ? (0, o.jsx)("span", {
                  className: "sr-only",
                  role: "status",
                  children: (0, o.jsx)(x.A, {
                    id: "codex.space.page.commandMenu.loading",
                    defaultMessage: "Searching Space\u2026",
                  }),
                })
              : null),
            (y[37] = eB),
            (y[38] = p))
          : (p = y[38]))
      let eX = eq?.map((e, t) => {
        if ("page" === e.kind) {
          let { page: a } = e
          return (0, o.jsx)(
            e_,
            {
              page: a,
              children: (n) => {
                let { icon: c, title: i } = n
                return (0, o.jsx)(W.K, {
                  row: {
                    id: a.pageId,
                    value: (0, K._X)(`page:${a.pageId}`),
                    "aria-label": i,
                    title: i,
                    titleTooltipContent: i,
                    leftAccessory: c,
                  },
                  onSelect: () => {
                    ;(ez(e.searchItem, t),
                      (0, en.yy)(T, E.CodexSpacesPageOpenRequested, {
                        referrer: E.CodexSpacesPageOpenReferrer.CODEX_SPACES_PAGE_OPEN_REFERRER_COMMAND_PALETTE,
                      }),
                      eY(a))
                  },
                })
              },
            },
            a.pageId,
          )
        }
        if ("file" === e.kind || "site" === e.kind) {
          let { file: t } = e,
            a = () => {
              ;(b(),
                "site" === e.kind
                  ? (0, Z.E0)({ href: e.href, initiator: "sites_library" })
                  : k(`/space/file/${encodeURIComponent(t.node.id)}`),
                B.Request.safePost("/files/library/files/{library_file_id}/opened", {
                  parameters: { path: { library_file_id: t.node.id } },
                }).catch(eb))
            }
          return "site" === e.kind
            ? (0, o.jsx)(eP, { file: t, onSelect: a }, t.node.id)
            : (0, o.jsx)(
                W.K,
                {
                  row: {
                    id: t.node.id,
                    value: (0, K._X)(`file:${t.node.id}`),
                    title: t.node.name,
                    leftAccessory: (0, o.jsx)(et.p, {
                      fileName: t.node.name,
                      fileExtension: t.node.file_extension,
                      libraryArtifactType: t.node.library_artifact_type,
                      mimeType: t.node.mime_type ?? void 0,
                      provider: (0, ee.oh)(t.node.id),
                      style: "message-inline",
                    }),
                  },
                  onSelect: a,
                },
                t.node.id,
              )
        }
        let { result: a } = e,
          { item: n } = a,
          c = (0, o.jsx)(H.Z1A, {})
        return (
          "library_file" === n.kind
            ? (c = (0, o.jsx)(et.p, {
                fileName: n.fileName,
                fileExtension: n.fileExtension,
                libraryArtifactType: n.libraryArtifactType,
                mimeType: n.mimeType ?? void 0,
                provider: n.libraryProvider,
                style: "message-inline",
              }))
            : "site" === n.kind
              ? (c = (0, o.jsx)(H.q_r, {}))
              : ("library_folder" === n.kind || "project" === n.kind) && (c = (0, o.jsx)(H.efV, {})),
          (0, o.jsx)(
            W.K,
            {
              row: {
                id: `${n.rawItem.source_key}:${n.rawItem.id}`,
                value: (0, K._X)(`space:${n.rawItem.source_key}:${n.rawItem.id}`),
                title: n.title,
                leftAccessory: c,
              },
              onSelect: () => {
                ;(ez(n.rawItem, t), eZ(a))
              },
            },
            `${n.rawItem.source_key}:${n.rawItem.id}`,
          )
        )
      })
      return (
        y[39] !== C ||
        y[40] !== _.length ||
        y[41] !== eK ||
        y[42] !== eV ||
        y[43] !== eO.loadNextPage ||
        y[44] !== eO.retryContentSearch
          ? ((g =
              _.length > 0 && eV
                ? (0, o.jsx)(W.K, {
                    onSelect: eK ? eO.loadNextPage : eO.retryContentSearch,
                    row: {
                      id: "page:retry",
                      value: (0, K._X)("page:retry"),
                      title: C.formatMessage({
                        id: "codex.space.page.commandMenu.error",
                        defaultMessage: "Could not search Space",
                      }),
                      description: C.formatMessage({
                        id: "codex.space.page.commandMenu.retry",
                        defaultMessage: "Retry",
                      }),
                    },
                  })
                : null),
            (y[39] = C),
            (y[40] = _.length),
            (y[41] = eK),
            (y[42] = eV),
            (y[43] = eO.loadNextPage),
            (y[44] = eO.retryContentSearch),
            (y[45] = g))
          : (g = y[45]),
        y[46] !== e$ ||
        y[47] !== eW ||
        y[48] !== N ||
        y[49] !== ea ||
        y[50] !== eU ||
        y[51] !== _ ||
        y[52] !== c ||
        y[53] !== eO
          ? ((f =
              eW && e$ && !N
                ? (0, o.jsx)(z.X, {
                    section: "pages",
                    disabled: (c?.length ?? 0) <= ea && eO.isFetchingNextPage,
                    onSelect: () => {
                      ;(eU(), J({ query: _, limit: ea + 5 }), (c?.length ?? 0) <= ea + 5 && eO.loadNextPage())
                    },
                  })
                : null),
            (y[46] = e$),
            (y[47] = eW),
            (y[48] = N),
            (y[49] = ea),
            (y[50] = eU),
            (y[51] = _),
            (y[52] = c),
            (y[53] = eO),
            (y[54] = f))
          : (f = y[54]),
        y[55] !== eG ||
        y[56] !== eJ ||
        y[57] !== u ||
        y[58] !== p ||
        y[59] !== eX ||
        y[60] !== g ||
        y[61] !== f ||
        y[62] !== eH.Group ||
        y[63] !== eQ
          ? ((M = (0, o.jsxs)(eH.Group, {
              ref: eG,
              className: "relative flex flex-col gap-1 select-none",
              forceMount: eQ,
              "data-command-menu-loading": eJ,
              "data-command-menu-search-section": "pages",
              heading: u,
              children: [p, eX, g, f],
            })),
            (y[55] = eG),
            (y[56] = eJ),
            (y[57] = u),
            (y[58] = p),
            (y[59] = eX),
            (y[60] = g),
            (y[61] = f),
            (y[62] = eH.Group),
            (y[63] = eQ),
            (y[64] = M))
          : (M = y[64]),
        M
      )
    }
    function eb() {}
    function ew(e) {
      return { kind: "page", page: e }
    }
    function eT(e) {
      let { id: t, file: a } = e
      if (null == a) return [{ kind: "page", page: { pageId: t, title: "" } }]
      if ((0, J.K$)(a)) {
        let e = a.node.site_metadata?.live_url
        return e && (0, R.q$v)(e) ? [{ kind: "site", file: a, href: e }] : []
      }
      return [{ kind: "file", file: a }]
    }
    function eC(e) {
      let { page: t } = e
      return t
    }
    function eS(e, t) {
      return t.score - e.score
    }
    function ek(e) {
      let { score: t } = e
      return t > 0
    }
    function eD(e) {
      return e.search.trim()
    }
    function eP(e) {
      let t,
        a,
        c,
        i,
        d = (0, n.c)(10),
        { file: s, onSelect: r } = e,
        l = (0, h._U)(ea.g, s),
        m = s.node.id,
        u = `site:${s.node.id}`
      return (
        d[0] !== u ? ((t = (0, K._X)(u)), (d[0] = u), (d[1] = t)) : (t = d[1]),
        d[2] === Symbol.for("react.memo_cache_sentinel") ? ((a = (0, o.jsx)(H.q_r, {})), (d[2] = a)) : (a = d[2]),
        d[3] !== s.node.id || d[4] !== t || d[5] !== l
          ? ((c = { id: m, value: t, title: l, leftAccessory: a }),
            (d[3] = s.node.id),
            (d[4] = t),
            (d[5] = l),
            (d[6] = c))
          : (c = d[6]),
        d[7] !== r || d[8] !== c
          ? ((i = (0, o.jsx)(W.K, { row: c, onSelect: r })), (d[7] = r), (d[8] = c), (d[9] = i))
          : (i = d[9]),
        i
      )
    }
    function e_(e) {
      let t,
        a,
        c = (0, n.c)(12),
        { page: i, children: d } = e,
        r = (0, s.A)(),
        l = (0, h._U)(er.j, i.pageId),
        m = l?.document_type ?? i.documentType,
        u = l?.namespace
      c[0] !== m || c[1] !== r || c[2] !== l?.title || c[3] !== i.title
        ? ((t = (l?.title ?? i.title).trim() || r.formatMessage((0, ex._Y)(m))),
          (c[0] = m),
          (c[1] = r),
          (c[2] = l?.title),
          (c[3] = i.title),
          (c[4] = t))
        : (t = c[4])
      let p = l?.symbol
      return (
        c[5] !== d || c[6] !== m || c[7] !== i.pageId || c[8] !== u || c[9] !== t || c[10] !== p
          ? ((a = (0, o.jsx)(ef.s, {
              pageId: i.pageId,
              documentType: m,
              namespace: u,
              title: t,
              symbol: p,
              children: d,
            })),
            (c[5] = d),
            (c[6] = m),
            (c[7] = i.pageId),
            (c[8] = u),
            (c[9] = t),
            (c[10] = p),
            (c[11] = a))
          : (a = c[11]),
        a
      )
    }
    var eI = a("OY5W"),
      eA = a("GaA7"),
      eN = a("fnPc"),
      ej = a("kfGJ"),
      eE = a("preB"),
      eR = a("pasN"),
      eO = a("hZax"),
      eB = a("XXJV"),
      eF = a("Bc5r"),
      eL = a("C2qB"),
      eq = a("S99C"),
      eG = a("WVWQ"),
      eU = a("q3HK")
    function e$(e) {
      if ("F6" !== e.key || e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey || e.nativeEvent.isComposing)
        return !1
      let t = e.currentTarget.closest("[cmdk-root]:has([cmdk-input])"),
        a = t?.querySelector("[cmdk-input]"),
        o =
          e.currentTarget === a
            ? t?.querySelector(
                '[data-search-options] :is(input, button, select, textarea, a[href], [tabindex="0"]):not([disabled]):not([tabindex="-1"])',
              )
            : a
      return null != o && (e.preventDefault(), o.focus(), !0)
    }
    var eW = a("RU3e"),
      eK = a("XYHU"),
      eV = a("tO3J"),
      ez = a("n5iL"),
      eY = a("EFj1")
    function eZ(e) {
      let t,
        a,
        c,
        i,
        s = (0, n.c)(12),
        { commandIds: r, onRunCommand: l } = e,
        m = !0 === (0, h.Ul)(eW.$O),
        p = (0, h.Ul)(ez.nH),
        g = (0, h.Ul)(eK.IU),
        f = (0, h.Ul)(eq.W)
      s[0] !== f || s[1] !== r || s[2] !== p || s[3] !== g
        ? ((t = [...new Set([...u.dM, ...r, "settings", "keyboardShortcuts"])].flatMap((e) => {
            let t = (0, u.hF)(e)
            return null == t || (0, u.uL)(t) || !(0, u.mg)(t, f)
              ? []
              : (0, ez.Dq)(e, p, g).map((t) => {
                  let { accelerator: a } = t
                  return { commandId: e, accelerator: a }
                })
          })),
          (s[0] = f),
          (s[1] = r),
          (s[2] = p),
          (s[3] = g),
          (s[4] = t))
        : (t = s[4])
      let x = t
      return (
        s[5] !== x
          ? ((a = () => (eA.appServices.spotlight?.setShortcutAccelerators(x.map(eQ)), eH)),
            (c = [x]),
            (s[5] = x),
            (s[6] = a),
            (s[7] = c))
          : ((a = s[6]), (c = s[7])),
        (0, d.useEffect)(a, c),
        s[8] !== m || s[9] !== l || s[10] !== x
          ? ((i = (0, o.jsx)(o.Fragment, {
              children: x.map((e) => {
                let { commandId: t, accelerator: a } = e
                return (0, o.jsx)(eJ, { commandId: t, accelerator: a, isFocused: m, onRunCommand: l }, `${t}:${a}`)
              }),
            })),
            (s[8] = m),
            (s[9] = l),
            (s[10] = x),
            (s[11] = i))
          : (i = s[11]),
        i
      )
    }
    function eH() {
      eA.appServices.spotlight?.setShortcutAccelerators([])
    }
    function eQ(e) {
      let { accelerator: t } = e
      return t
    }
    function eJ(e) {
      let t,
        a,
        o,
        c,
        i,
        d,
        s,
        r = (0, n.c)(17),
        { accelerator: l, commandId: m, isFocused: p, onRunCommand: g } = e
      r[0] !== m ? ((t = u.dM.includes(m)), (r[0] = m), (r[1] = t)) : (t = r[1])
      let h = t
      r[2] !== m || r[3] !== g ? ((a = () => g(m)), (r[2] = m), (r[3] = g), (r[4] = a)) : (a = r[4])
      let f = p && !h
      return (
        r[5] !== f ? ((o = { enabled: f }), (r[5] = f), (r[6] = o)) : (o = r[6]),
        (0, eY.K)(m, a, o),
        r[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = /(?:^|\+)(?:CmdOrCtrl|Cmd|Command|Ctrl|Control|Alt|Option)\+/), (r[7] = c))
          : (c = r[7]),
        r[8] !== l ? ((i = c.test(l.split(" ")[0] ?? "")), (r[8] = l), (r[9] = i)) : (i = r[9]),
        r[10] !== m
          ? ((d = (e) => {
              e.isComposing || e.defaultPrevented || ((0, eU.W7)(m, e) && e.preventDefault())
            }),
            (r[10] = m),
            (r[11] = d))
          : (d = r[11]),
        r[12] !== l || r[13] !== p || r[14] !== i || r[15] !== d
          ? ((s = { accelerator: l, enabled: p, allowWithinEditable: i, onKeyDown: d }),
            (r[12] = l),
            (r[13] = p),
            (r[14] = i),
            (r[15] = d),
            (r[16] = s))
          : (s = r[16]),
        (0, eV.EE)(s),
        null
      )
    }
    var eX = a("tuXZ"),
      e0 = a("Z7bw"),
      e1 = a("SEZW"),
      e2 = a("IDFw"),
      e3 = a("RVZl"),
      e4 = a("Ln8V"),
      e6 = a("g0N6"),
      e5 = a("da4y"),
      e8 = a("ZOYk"),
      e9 = a("Nol6"),
      e7 = a("F1Bc"),
      te = a("H3J8"),
      tt = a("RAYK"),
      ta = a("Ojs0"),
      to = a("mDpF"),
      tn = a("KykS"),
      tc = a("Y8C6"),
      ti = a("NTNj"),
      td = a("Yjyx"),
      ts = a("Qa3e"),
      tr = a("cbDT"),
      tl = a("on57"),
      tm = a("NFGs"),
      tu = a.n(tm),
      tp = a("nRNm"),
      tg = a("iURv"),
      th = a("TonS"),
      tf = a("z7xo"),
      tx = a("R7kA")
    let tM = {
      newTask: { asset: tc.f },
      newProjectlessTask: { asset: tc.f },
      openThreadInNewWindow: { asset: tr.v },
      archiveThread: { asset: eX.u },
      toggleThreadPin: { asset: ta.F },
      openControlWindow: { asset: te.y },
      undoAppAction: { asset: e2.K },
      "git.openPullRequest": tf.A,
      openAvatarOverlay: { asset: e6.$ },
      searchChats: { asset: e7.Y },
      importExternalAgent: { asset: e0.Y },
      keyboardShortcuts: { asset: e8.T },
      manageTasks: H.QC9,
      forceReloadSkills: { asset: e3.S },
      openSkills: { asset: tn.S },
      openFolder: { asset: e5.Y },
      toggleSidebar: { asset: to.s },
      togglePinnedSummary: { asset: e9.E },
      toggleTerminal: { asset: ts.K },
      newTab: { asset: td.I },
      stepWorkspaceLayout: { asset: to.s },
      openReviewTab: { asset: ti.L },
      toggleSidePanel: { asset: to.s },
      findInThread: { asset: e7.Y },
      navigateBack: { asset: c.z },
      navigateForward: function (e) {
        let t,
          a,
          c = (0, n.c)(4),
          { className: i } = e
        return (
          c[0] !== i ? ((t = (0, tl.A)(i, "-scale-x-100")), (c[0] = i), (c[1] = t)) : (t = c[1]),
          c[2] !== t ? ((a = (0, o.jsx)(tg.A, { className: t })), (c[2] = t), (c[3] = a)) : (a = c[3]),
          a
        )
      },
      previousThread: { asset: e1.l },
      nextThread: function (e) {
        let t,
          a,
          c = (0, n.c)(4),
          { className: i } = e
        return (
          c[0] !== i ? ((t = (0, tl.A)(i, "rotate-180")), (c[0] = i), (c[1] = t)) : (t = c[1]),
          c[2] !== t ? ((a = (0, o.jsx)(th.A, { className: t })), (c[2] = t), (c[3] = a)) : (a = c[3]),
          a
        )
      },
      logOut: { asset: tt.z },
      feedback: { asset: e4.R },
    }
    function tv(e) {
      let t,
        a,
        c,
        d,
        s,
        l,
        m,
        u,
        p,
        g,
        h,
        x,
        M,
        v = (0, n.c)(42),
        {
          close: y,
          command: b,
          description: w,
          icon: T,
          onOpenChatSearch: C,
          onRunCommand: S,
          originElement: k,
          originPanel: D,
          searchKeywords: P,
          title: _,
        } = e,
        I = (0, i.wo)(ty)
      if (
        (v[0] !== P ? ((t = P ?? []), (v[0] = P), (v[1] = t)) : (t = v[1]),
        v[2] !== b.id || v[3] !== w || v[4] !== T || v[5] !== I || v[6] !== t || v[7] !== _)
      ) {
        let e = [w, ...t],
          n = (0, Y.WE)(I),
          i = 0 === n(_) ? tu()(e, n) : void 0,
          g = T ?? tM[b.id] ?? H.h2I
        if ("asset" in g) {
          let e
          ;(v[16] !== g.asset
            ? ((e = (0, o.jsx)(r.I, { className: "shrink-0", asset: g.asset, "aria-hidden": !1 })),
              (v[16] = g.asset),
              (v[17] = e))
            : (e = v[17]),
            (d = e))
        } else if (g === H.QC9) {
          let e
          ;(v[18] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, o.jsx)(H.QC9, {})), (v[18] = e))
            : (e = v[18]),
            (d = e))
        } else if (g === H.h2I) {
          let e
          ;(v[19] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, o.jsx)(H.h2I, {})), (v[19] = e))
            : (e = v[19]),
            (d = e))
        } else a = g
        ;((c = W.K),
          (s = b.id),
          (l = _),
          (m = e),
          (u = _),
          (p = null == i || 0 === n(i) ? void 0 : (0, o.jsx)(tp._, { text: i, query: I, shouldAdjustStart: !0 })),
          (v[2] = b.id),
          (v[3] = w),
          (v[4] = T),
          (v[5] = I),
          (v[6] = t),
          (v[7] = _),
          (v[8] = a),
          (v[9] = c),
          (v[10] = d),
          (v[11] = s),
          (v[12] = l),
          (v[13] = m),
          (v[14] = u),
          (v[15] = p))
      } else ((a = v[8]), (c = v[9]), (d = v[10]), (s = v[11]), (l = v[12]), (m = v[13]), (u = v[14]), (p = v[15]))
      return (
        v[20] !== b.id ? ((g = (0, o.jsx)(tx.M, { commandId: b.id })), (v[20] = b.id), (v[21] = g)) : (g = v[21]),
        v[22] !== a ||
        v[23] !== d ||
        v[24] !== s ||
        v[25] !== l ||
        v[26] !== m ||
        v[27] !== u ||
        v[28] !== p ||
        v[29] !== g
          ? ((h = {
              id: s,
              value: l,
              keywords: m,
              title: u,
              secondaryContent: p,
              LeftIcon: a,
              leftAccessory: d,
              rightAccessory: g,
            }),
            (v[22] = a),
            (v[23] = d),
            (v[24] = s),
            (v[25] = l),
            (v[26] = m),
            (v[27] = u),
            (v[28] = p),
            (v[29] = g),
            (v[30] = h))
          : (h = v[30]),
        v[31] !== y || v[32] !== b.id || v[33] !== C || v[34] !== S || v[35] !== k || v[36] !== D
          ? ((x = () => {
              if (null != S) return void S(b.id)
              if ("canvas.prompt" === b.id || "toggleFileTreePanel" === b.id) {
                if (
                  ((0, f.flushSync)(y),
                  k instanceof HTMLElement &&
                    k.isConnected &&
                    (k.focus({ preventScroll: !0 }),
                    k.ownerDocument.activeElement === k && (0, eU.d1)(b.id, "command_menu")))
                )
                  return
                ;(null != D || "toggleFileTreePanel" === b.id) &&
                  (0, eU.d1)(b.id, "command_menu", { originPanel: D ?? void 0 })
                return
              }
              if ("previousThread" === b.id || "nextThread" === b.id) {
                ;((0, f.flushSync)(y), (0, eU.d1)(b.id, "command_menu"))
                return
              }
              ;("searchChats" === b.id && C(), (0, eU.d1)(b.id, "command_menu"), "searchChats" !== b.id && y())
            }),
            (v[31] = y),
            (v[32] = b.id),
            (v[33] = C),
            (v[34] = S),
            (v[35] = k),
            (v[36] = D),
            (v[37] = x))
          : (x = v[37]),
        v[38] !== c || v[39] !== h || v[40] !== x
          ? ((M = (0, o.jsx)(c, { row: h, onSelect: x })), (v[38] = c), (v[39] = h), (v[40] = x), (v[41] = M))
          : (M = v[41]),
        M
      )
    }
    function ty(e) {
      return e.search
    }
    var tb = a("slpy"),
      tw = a("pLGj"),
      tT = a("SZCv"),
      tC = a.n(tT),
      tS = a("mkNg"),
      tk = a("MgeM"),
      tD = a("OWtl"),
      tP = a("n5oN"),
      t_ = a("tYGo")
    let tI = (0, h.SZ)(
      tD.u,
      () => tS.p.getOpenTabs(),
      ({ set: e }) =>
        tS.p.subscribe(() => {
          e(tS.p.getOpenTabs())
        }),
      { isEqual: tC() },
    )
    function tA(e) {
      let t,
        a,
        c,
        i,
        s,
        r = (0, n.c)(18),
        { request: l, session: m } = e,
        u = (0, v.zy)(),
        p = (0, v.Zp)(),
        g = l.query.trim(),
        [f, M] = (0, d.useState)(null),
        y = f?.query === g ? f.limit : 10,
        b = (0, h.Ul)(
          (0, h.un)(
            tD.u,
            (e) => {
              let { get: t } = e
              return g
                ? t(tI).filter((e) =>
                    (0, tw.lR7)(
                      {
                        title: `${e.title}
${e.pageTitle}`,
                        url: e.url,
                      },
                      g,
                    ),
                  )
                : []
            },
            { isEqual: tC() },
          ),
        )
      return (
        r[0] !== y || r[1] !== b ? ((t = b.slice(0, y)), (r[0] = y), (r[1] = b), (r[2] = t)) : (t = r[2]),
        r[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, o.jsx)(x.A, { id: "codex.commandMenu.browserTabs", defaultMessage: "Browser tabs" })), (r[3] = a))
          : (a = r[3]),
        r[4] !== u || r[5] !== p || r[6] !== m
          ? ((c = (e) => {
              ;(m.close(),
                (0, tk.uu)(e.conversationId, { active: !0, browserTabId: e.browserTabId, mode: "activate" }),
                `${u.pathname}${u.search}` !== e.ownerRoutePath && p(e.ownerRoutePath))
            }),
            (r[4] = u),
            (r[5] = p),
            (r[6] = m),
            (r[7] = c))
          : (c = r[7]),
        r[8] !== y || r[9] !== g || r[10] !== M || r[11] !== b.length
          ? ((i = b.length > y ? { load: () => M({ query: g, limit: y + 10 }) } : void 0),
            (r[8] = y),
            (r[9] = g),
            (r[10] = M),
            (r[11] = b.length),
            (r[12] = i))
          : (i = r[12]),
        r[13] !== g || r[14] !== t || r[15] !== c || r[16] !== i
          ? ((s = (0, o.jsx)(t_.Y, {
              id: "browser-tabs",
              snapshot: { items: t, selectionKey: g, heading: a, row: tN, open: c, more: i },
            })),
            (r[13] = g),
            (r[14] = t),
            (r[15] = c),
            (r[16] = i),
            (r[17] = s))
          : (s = r[17]),
        s
      )
    }
    function tN(e) {
      return {
        id: `${e.conversationId}\0${e.browserTabId}`,
        "aria-label": e.title || e.url,
        value: (0, K._X)(`browser-tab:${JSON.stringify([e.conversationId, e.browserTabId])}`),
        title: e.title || e.url,
        description: e.url,
        titleTooltipContent: e.title || e.url,
        descriptionTooltipContent: e.url,
        leftAccessory: (0, o.jsx)(H.ZEl, {}),
        rightAccessory: (0, o.jsx)(tj, { ownerRoutePath: e.ownerRoutePath }),
      }
    }
    function tj(e) {
      let t,
        a,
        c = (0, n.c)(5),
        { ownerRoutePath: i } = e,
        d = (0, h._U)(tP.m, i)
      return d?.trim()
        ? (c[0] !== d
            ? ((t = (0, o.jsx)("span", {
                className: "block w-24 truncate text-end text-sm text-codex-description",
                children: d,
              })),
              (c[0] = d),
              (c[1] = t))
            : (t = c[1]),
          c[2] !== t || c[3] !== d
            ? ((a = (0, o.jsx)(tb.m, { content: d, enabledWhen: "target-overflows", children: t })),
              (c[2] = t),
              (c[3] = d),
              (c[4] = a))
            : (a = c[4]),
          a)
        : null
    }
    var tE = a("E8Sp"),
      tR = a("Itrj"),
      tO = a("imTH"),
      tB = a("liTb"),
      tF = a("uQ1J")
    a("vXFM")
    var tL = a("JzX8")
    let tq = (0, h.un)(tD.u, ({ get: e }) => ({
      heading: tL.n.orbitsTitle,
      profiles: e(tO.Tr)?.filter((e) => e.is_primary),
    }))
    function tG(e) {
      let t,
        a,
        c,
        d,
        r = (0, n.c)(21),
        { close: l, onNavigate: m } = e,
        u = (0, h.gh)(tD.u),
        { heading: p, profiles: g } = (0, h.Ul)(tq),
        f = (0, s.A)()
      if (!g?.length) return null
      r[0] !== p || r[1] !== f ? ((t = f.formatMessage(p)), (r[0] = p), (r[1] = f), (r[2] = t)) : (t = r[2])
      let x = t
      if (
        (r[3] !== x ? ((a = (0, o.jsx)(D.z, { children: x })), (r[3] = x), (r[4] = a)) : (a = r[4]),
        r[5] !== l || r[6] !== f || r[7] !== x || r[8] !== m || r[9] !== g || r[10] !== u)
      ) {
        let e
        ;(r[12] !== l || r[13] !== f || r[14] !== x || r[15] !== m || r[16] !== u
          ? ((e = (e) => {
              let { title: t, icon: a } = (0, tF.k)(e, f, "icon-leading"),
                n = (0, tB.xP)(e.id)
              return (0, o.jsx)(
                tR.y,
                {
                  value: n,
                  keywords: [t, x],
                  title: t,
                  leftAccessory: a,
                  onSelect: () => {
                    null != m ? m(n) : (l(), (0, tE.oo)(u, n))
                  },
                },
                e.id,
              )
            }),
            (r[12] = l),
            (r[13] = f),
            (r[14] = x),
            (r[15] = m),
            (r[16] = u),
            (r[17] = e))
          : (e = r[17]),
          (c = g.map(e)),
          (r[5] = l),
          (r[6] = f),
          (r[7] = x),
          (r[8] = m),
          (r[9] = g),
          (r[10] = u),
          (r[11] = c))
      } else c = r[11]
      return (
        r[18] !== a || r[19] !== c
          ? ((d = (0, o.jsx)(i.uB.Group, { className: "flex flex-col gap-1", heading: a, children: c })),
            (r[18] = a),
            (r[19] = c),
            (r[20] = d))
          : (d = r[20]),
        d
      )
    }
    var tU = a("pbIy"),
      t$ = a("VatZ"),
      tW = a("wZQ4"),
      tK = a("IrSO"),
      tV = a("mSaF"),
      tz = a("GEsy"),
      tY = a("BIlk"),
      tZ = a("bWRV"),
      tH = a("Fk6e"),
      tQ = a("Nz3U"),
      tJ = a("gLoR"),
      tX = a("V7ra")
    function t0(e) {
      let t,
        a,
        c,
        d,
        r,
        l,
        m,
        u,
        p,
        g,
        f,
        M = (0, n.c)(48)
      M[0] !== e
        ? (({ mode: t, scrollRef: c, ...a } = e), (M[0] = e), (M[1] = t), (M[2] = a), (M[3] = c))
        : ((t = M[1]), (a = M[2]), (c = M[3]))
      let v = (0, s.A)(),
        y = (0, tz.o)(a.search, 150),
        b = a.search !== y
      M[4] !== t || M[5] !== a.search || M[6] !== b
        ? ((d = { mode: t, search: a.search, debouncing: b }), (M[4] = t), (M[5] = a.search), (M[6] = b), (M[7] = d))
        : (d = M[7])
      let {
          members: w,
          showSearchResults: T,
          isLoading: C,
          isError: S,
          hasLoadedResults: k,
          isSearching: P,
          hasNextPage: _,
          isFetchingNextPage: I,
          isFetchNextPageError: A,
          fetchNextPage: N,
        } = (0, h._U)(eI.kL, d),
        j = "workspace" === t && !k,
        E = (0, h._U)(tH.Iq, T && j && !S ? a.search : "")
      M[8] !== j || M[9] !== E || M[10] !== w
        ? ((r = j ? E.flatMap(t1) : w), (M[8] = j), (M[9] = E), (M[10] = w), (M[11] = r))
        : (r = M[11])
      let R = r,
        O = "workspace" === t && T,
        B = C || S || R.length > 0
      if (
        (M[12] !== a.search || M[13] !== a.searchEventLogger || M[14] !== O || M[15] !== B
          ? ((l = { enabled: O, pending: B, search: a.search, searchEventLogger: a.searchEventLogger }),
            (M[12] = a.search),
            (M[13] = a.searchEventLogger),
            (M[14] = O),
            (M[15] = B),
            (M[16] = l))
          : (l = M[16]),
        (0, tZ.I)(l),
        !T)
      )
        return null
      M[17] !== a.search.length
        ? ((m = 0 === a.search.length && (0, o.jsx)(D.z, { children: (0, o.jsx)(x.A, { ...tJ.RE }) })),
          (M[17] = a.search.length),
          (M[18] = m))
        : (m = M[18])
      let F = m
      if (P && 0 === R.length) {
        let e, t, a
        return (
          M[19] !== v
            ? ((e = v.formatMessage({
                id: "codex.commandMenu.peopleSearchLoading",
                defaultMessage: "Searching people\u2026",
              })),
              (M[19] = v),
              (M[20] = e))
            : (e = M[20]),
          M[21] !== e
            ? ((t = (0, o.jsx)(i.uB.Loading, { className: "sr-only", "data-command-menu-loading": "true", label: e })),
              (M[21] = e),
              (M[22] = t))
            : (t = M[22]),
          M[23] !== F || M[24] !== t
            ? ((a = (0, o.jsxs)(o.Fragment, { children: [F, t] })), (M[23] = F), (M[24] = t), (M[25] = a))
            : (a = M[25]),
          a
        )
      }
      if (!R.length && !_ && !A) {
        let e, t
        return (
          M[26] !== S
            ? ((e = (0, o.jsx)(i.uB.Empty, {
                "data-command-menu-search-state": !0,
                children: S
                  ? (0, o.jsx)(x.A, {
                      id: "codex.commandMenu.peopleSearchError",
                      defaultMessage: "Could not search people",
                    })
                  : (0, o.jsx)(x.A, { id: "codex.commandMenu.peopleSearchEmpty", defaultMessage: "No people found" }),
              })),
              (M[26] = S),
              (M[27] = e))
            : (e = M[27]),
          M[28] !== F || M[29] !== e
            ? ((t = (0, o.jsxs)(o.Fragment, { children: [F, e] })), (M[28] = F), (M[29] = e), (M[30] = t))
            : (t = M[30]),
          t
        )
      }
      return (
        M[31] !== j || M[32] !== P || M[33] !== R || M[34] !== a
          ? ((u = (0, o.jsx)(t3, { ...a, tab: "people", loading: P, members: R, isLocalResult: j })),
            (M[31] = j),
            (M[32] = P),
            (M[33] = R),
            (M[34] = a),
            (M[35] = u))
          : (u = M[35]),
        M[36] !== N || M[37] !== _ || M[38] !== I || M[39] !== c
          ? ((p = (0, o.jsx)(tW.D, {
              hasNextPage: _,
              loadingPlaceholder: null,
              isFetchingNextPage: I,
              rootMargin: "0px 0px 520px 0px",
              rootRef: c,
              onLoadNextPage: N,
            })),
            (M[36] = N),
            (M[37] = _),
            (M[38] = I),
            (M[39] = c),
            (M[40] = p))
          : (p = M[40]),
        M[41] !== N || M[42] !== A
          ? ((g =
              A &&
              (0, o.jsx)(D.M, {
                onSelect: N,
                children: (0, o.jsx)(x.A, {
                  id: "profile.workspaceSearch.paginationRetry",
                  defaultMessage: "Couldn\u2019t load more profiles. Try again",
                }),
              })),
            (M[41] = N),
            (M[42] = A),
            (M[43] = g))
          : (g = M[43]),
        M[44] !== g || M[45] !== u || M[46] !== p
          ? ((f = (0, o.jsxs)(o.Fragment, { children: [u, p, g] })), (M[44] = g), (M[45] = u), (M[46] = p), (M[47] = f))
          : (f = M[47]),
        f
      )
    }
    function t1(e) {
      let t = e.profile_url?.trim()
      return t ? [{ member: e, profileUrl: t }] : []
    }
    function t2(e) {
      let t,
        a = (0, n.c)(7),
        { members: c, isSearching: i, isLocalResult: d } = (0, tY.t)(e.search, !0, e.searchEventLogger)
      if (0 === c.length) {
        let e
        return (
          a[0] !== i
            ? ((e = i ? (0, o.jsx)("span", { hidden: !0, "data-command-menu-loading": "true" }) : null),
              (a[0] = i),
              (a[1] = e))
            : (e = a[1]),
          e
        )
      }
      return (
        a[2] !== d || a[3] !== i || a[4] !== c || a[5] !== e
          ? ((t = (0, o.jsx)(t3, { ...e, tab: "all", loading: i, members: c, isLocalResult: d })),
            (a[2] = d),
            (a[3] = i),
            (a[4] = c),
            (a[5] = e),
            (a[6] = t))
          : (t = a[6]),
        t
      )
    }
    function t3(e) {
      let t,
        a,
        c,
        d,
        r = (0, n.c)(34),
        { close: l, isLocalResult: m, loading: u, members: p, search: g, searchEventLogger: f, tab: M } = e,
        y = (0, h.gh)(ec.GD),
        b = (0, s.A)(),
        w = (0, v.Zp)()
      r[0] !== m || r[1] !== p.length || r[2] !== g || r[3] !== f || r[4] !== M
        ? ((t = (e, t) => {
            f.logWorkspaceMemberResult({
              action: e,
              accountUserId: t,
              isLocalResult: m,
              resultCount: p.length,
              search: g,
              tab: M,
            })
          }),
          (r[0] = m),
          (r[1] = p.length),
          (r[2] = g),
          (r[3] = f),
          (r[4] = M),
          (r[5] = t))
        : (t = r[5])
      let T = t,
        C = u || void 0
      if (
        (r[6] !== g || r[7] !== M
          ? ((a = (0, o.jsx)(D.z, {
              children:
                "people" === M && 0 === g.length
                  ? (0, o.jsx)(x.A, { ...tJ.RE })
                  : (0, o.jsx)(x.A, { id: "codex.commandMenu.peopleSearchGroup", defaultMessage: "People" }),
            })),
            (r[6] = g),
            (r[7] = M),
            (r[8] = a))
          : (a = r[8]),
        r[9] !== l ||
          r[10] !== b ||
          r[11] !== m ||
          r[12] !== T ||
          r[13] !== p ||
          r[14] !== w ||
          r[15] !== y ||
          r[16] !== g ||
          r[17] !== f ||
          r[18] !== M)
      ) {
        let e
        ;(r[20] !== l ||
        r[21] !== b ||
        r[22] !== m ||
        r[23] !== T ||
        r[24] !== w ||
        r[25] !== y ||
        r[26] !== g ||
        r[27] !== f ||
        r[28] !== M
          ? ((e = (e) => {
              let { member: t, profileUrl: a } = e,
                n = "account_user_id" in t ? t.account_user_id : null,
                c = n ?? a,
                i = { id: c, value: (0, K._X)(`person:${c}`), ...(0, tX.n)(t, b) }
              return (0, o.jsx)(
                D.M,
                {
                  onSelect: () => {
                    let e = (0, tV.y)(y, "all" === M ? "command_menu_all" : "command_menu_people")
                    ;("account_user_id" in t ? ((0, tH.B5)(y, t, m), T("open", t.account_user_id)) : (0, tK.H)(y, t),
                      f.closeSession("result-open"),
                      w(a, { state: e }),
                      l())
                  },
                  value: i.value,
                  children: (0, o.jsx)(tQ.I, {
                    member: t,
                    row: i,
                    onResult: null == n ? void 0 : (e) => T(e, n),
                    query: g,
                  }),
                },
                i.id,
              )
            }),
            (r[20] = l),
            (r[21] = b),
            (r[22] = m),
            (r[23] = T),
            (r[24] = w),
            (r[25] = y),
            (r[26] = g),
            (r[27] = f),
            (r[28] = M),
            (r[29] = e))
          : (e = r[29]),
          (c = p.map(e)),
          (r[9] = l),
          (r[10] = b),
          (r[11] = m),
          (r[12] = T),
          (r[13] = p),
          (r[14] = w),
          (r[15] = y),
          (r[16] = g),
          (r[17] = f),
          (r[18] = M),
          (r[19] = c))
      } else c = r[19]
      return (
        r[30] !== C || r[31] !== a || r[32] !== c
          ? ((d = (0, o.jsx)(i.uB.Group, {
              className: "flex flex-col gap-1 select-none",
              "data-command-menu-loading": C,
              "data-command-menu-search-section": "people",
              heading: a,
              children: c,
            })),
            (r[30] = C),
            (r[31] = a),
            (r[32] = c),
            (r[33] = d))
          : (d = r[33]),
        d
      )
    }
    var t4 = a("ZOtJ"),
      t6 = a("vF5L")
    let t5 = (0, P._)(
        async () =>
          (await Promise.all([a.e(559869), a.e(109399)]).then(a.bind(a, "UTF2")))
            .VisibleSettingsUnifiedSearchSectionItems,
      ),
      t8 = ["newTask", "openFolder"]
    function t9(e) {
      let t,
        a,
        c,
        r,
        l,
        m,
        p,
        M,
        P,
        E,
        R,
        O,
        B,
        F,
        L,
        q,
        G,
        U,
        W,
        V,
        z,
        Y,
        Z,
        H,
        Q,
        J = (0, n.c)(120),
        {
          close: X,
          originElement: ee,
          search: et,
          searchEventLogger: ea,
          setSearch: eo,
          standaloneWindow: en,
          children: ei,
          focusInput: ed,
          resultsListRef: es,
        } = e,
        er = (0, h.gh)(ec.GD),
        [el] = (0, d.useState)(K.X),
        em = (0, v.zy)(),
        eu = "space" === (0, eE.IT)(em),
        ep = (0, s.A)()
      J[0] !== ee ? ((t = () => (void 0 === ee ? (0, t4.Jl)() : ee)), (J[0] = ee), (J[1] = t)) : (t = J[1])
      let [eg] = (0, d.useState)(t)
      J[2] !== eg || J[3] !== er
        ? ((a = () => {
            let e = eg
              ?.closest("[data-app-shell-tab-panel-controller]")
              ?.getAttribute("data-app-shell-tab-panel-controller")
            return "bottom" === e || "right" === e
              ? e
              : (0, eB.AU)(er.get(w.J8), { bottom: er.get(T.lN), right: er.get(T.SZ) && er.get(T.yN) })
          }),
          (J[2] = eg),
          (J[3] = er),
          (J[4] = a))
        : (a = J[4])
      let [eh] = (0, d.useState)(a),
        { selectedHostId: ef } = (0, eN.D8)(),
        ex = (0, eF.M0)(),
        eM = (0, N.N)((0, h.Ul)(tU.vH)),
        ey = (0, h.Ul)(eR.l)
      J[5] === Symbol.for("react.memo_cache_sentinel") ? ((c = { name: "chatgpt" }), (J[5] = c)) : (c = J[5])
      let eb = (0, h._U)(y.G, c).isCapable
      J[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = { parameter: "command_menu_people_tab" }), (J[6] = r))
        : (r = J[6])
      let ew = (0, h._U)(eb ? eI.Jb : null, r)
      J[7] === Symbol.for("react.memo_cache_sentinel") ? ((l = { name: "automations.local" }), (J[7] = l)) : (l = J[7])
      let eT = (0, h._U)(y.G, l).isCapable,
        eC = (0, h.Ul)(S.B).isCapable,
        eS = (0, h.Ul)(C.ph),
        ek = (0, h.Ul)(eq.W),
        eD = (0, h.Ul)(t6.tu),
        eP = "local-thread" === er.value.routeKind ? er.value : null,
        e_ = (0, h._U)(b.qX, eP?.conversationId ?? null)
      J[8] !== e_ || J[9] !== eP
        ? ((m = null == eP ? null : { hostId: eP.hostId ?? e_, threadId: eP.conversationId }),
          (J[8] = e_),
          (J[9] = eP),
          (J[10] = m))
        : (m = J[10])
      let eW = (0, h._U)(A.K, m),
        eK = (0, h.Ul)(T.gU),
        eV = (0, h.Ul)(t6.m$),
        ez = (0, h.Ul)($.YC),
        eY = "people" === ez && null == ew ? "root" : ez,
        eH = "root" === eY || "actions" === eY ? (eV.at(-1) ?? null) : null,
        eQ = (0, h.Ul)("files" === eY || "text" === eY ? _.H : null)
      J[11] !== eY || J[12] !== eQ?.hostId || J[13] !== eQ?.roots
        ? ((p = JSON.stringify([eY, eQ?.hostId, eQ?.roots])),
          (J[11] = eY),
          (J[12] = eQ?.hostId),
          (J[13] = eQ?.roots),
          (J[14] = p))
        : (p = J[14])
      let eJ = p,
        eX =
          (0, h.Ul)("text" === eY ? I.n : null)?.find((e) => e.key === JSON.stringify([eQ?.hostId, eQ?.projectRoots]))
            ?.fileMask ?? ""
      J[15] !== eX || J[16] !== eY || J[17] !== eJ
        ? ((M = () => {
            let e = ""
            return ("chats" === eY && (e = $.u), { key: eJ, value: e, fileMask: eX })
          }),
          (J[15] = eX),
          (J[16] = eY),
          (J[17] = eJ),
          (J[18] = M))
        : (M = J[18])
      let [e0, e1] = (0, d.useState)(M)
      e0.key !== eJ
        ? e1({ key: eJ, value: "chats" === eY ? $.u : "", fileMask: eX })
        : e0.fileMask !== eX && e1({ ...e0, fileMask: eX, value: "" === et.trim() ? e0.value : (0, K._X)("text:0") })
      let e2 = (0, h.Ul)(k.k),
        e3 = (0, eO.Zj)("1532120159")
      J[19] === Symbol.for("react.memo_cache_sentinel") ? ((P = { name: "browser.in-app" }), (J[19] = P)) : (P = J[19])
      let e4 = (0, h._U)(y.G, P).isCapable,
        e6 = (0, eO.Zj)("2717023667"),
        e5 = (0, eO.Zj)("2171042036"),
        e8 = "local" === (0, ej.Qz)(ef).kind,
        e9 = null != en
      J[20] !== eb || J[21] !== eS || J[22] !== ek || J[23] !== e9 || J[24] !== ey
        ? ((E = (e) =>
            (!e9 || !e.isWorkspaceScoped) &&
            ("codex" === ey || !e.modes?.some(ah)) &&
            af(e.unifiedSearchFeature, { canUseChatGpt: eb, codexFeaturesAllowed: eS }) &&
            (0, u.bn)(e.requiredAccess, ek)),
          (J[20] = eb),
          (J[21] = eS),
          (J[22] = ek),
          (J[23] = e9),
          (J[24] = ey),
          (J[25] = E))
        : (E = J[25])
      let e7 = eM.filter(E)
      J[26] !== eY
        ? ((R = (e) => e.modes?.includes(eY) ?? ("root" === eY || "actions" === eY)), (J[26] = eY), (J[27] = R))
        : (R = J[27])
      let te = e7.filter(R),
        tt = et.trim(),
        ta = {
          root: ax.unifiedSearchPlaceholder,
          chats: ax.chatSearchPlaceholder,
          people: ax.peopleSearchPlaceholder,
          pages: ax.pageSearchPlaceholder,
          space: ax.spaceSearchPlaceholder,
          actions: ax.actionSearchPlaceholder,
          files: ax.fileSearchPlaceholder,
          text: ax.fileSearchPlaceholder,
        },
        to = eH?.searchPlaceholder ?? ep.formatMessage(ta[eY]),
        tn = (0, h.Ul)(j.pagesEnabled$),
        tc = (0, h.Ul)(!e9 && j.gG),
        ti = $.v3.filter((e) =>
          "people" === e
            ? !e9 && null != ew
            : "space" === e || "pages" === e
              ? !e9 && tn && ("pages" !== e || tc)
              : ("files" !== e && "text" !== e) ||
                (!e9 &&
                  ("text" !== e || null != eA.appServices.workspaceSearch) &&
                  e7.some((t) => t.modes?.includes(e))),
        )
      J[28] !== ed || J[29] !== er || J[30] !== et || J[31] !== eo
        ? ((O = (e) => {
            ;(er.set($.ek, null), er.set(t6.m$, []), er.set($.YC, e), eo(et), ed())
          }),
          (J[28] = ed),
          (J[29] = er),
          (J[30] = et),
          (J[31] = eo),
          (J[32] = O))
        : (O = J[32])
      let td = O,
        ts = "root" === eY ? [] : te.filter(ag).map(ap)
      J[33] !== e4 ||
      J[34] !== eb ||
      J[35] !== eC ||
      J[36] !== eS ||
      J[37] !== ek ||
      J[38] !== e5 ||
      J[39] !== eW ||
      J[40] !== eK ||
      J[41] !== e9 ||
      J[42] !== eT ||
      J[43] !== eD
        ? ((B = u.zQ.filter(
            (e) =>
              !(
                !(0, u.Ix)(e) ||
                (e9 && "workspace" === e.unifiedSearchGroupKey && "openFolder" !== e.id) ||
                !(0, u.mg)(e, ek) ||
                !af(e.unifiedSearchFeature, { canUseChatGpt: eb, codexFeaturesAllowed: eS }) ||
                ("toggleSidebar" === e.id && !eK) ||
                ("manageTasks" === e.id && !eT && !eC) ||
                ("newTab" === e.id && !e4) ||
                ("openControlWindow" === e.id && !e5) ||
                "settings" === e.id ||
                "mcpSettings" === e.id ||
                "personalitySettings" === e.id ||
                "keyboardShortcuts" === e.id ||
                ("archiveThread" === e.id && (eW || (0, t6.ZJ)(eD, "deleteOrbit") > 0))
              ) &&
              (!!(0, eU.Zu)(e.id) || 0 !== (0, t6.ZJ)(eD, e.id)),
          )),
          (J[33] = e4),
          (J[34] = eb),
          (J[35] = eC),
          (J[36] = eS),
          (J[37] = ek),
          (J[38] = e5),
          (J[39] = eW),
          (J[40] = eK),
          (J[41] = e9),
          (J[42] = eT),
          (J[43] = eD),
          (J[44] = B))
        : (B = J[44])
      let tr = B
      J[45] !== eo
        ? ((F = () => {
            eo("")
          }),
          (J[45] = eo),
          (J[46] = F))
        : (F = J[46])
      let tl = F
      J[47] !== tl || J[48] !== X || J[49] !== eY || J[50] !== et || J[51] !== eo
        ? ((L = (e) =>
            (0, o.jsx)(
              d.Fragment,
              { children: e.results?.({ query: et, mode: eY }, { close: X, clearSearch: tl, setSearch: eo }) },
              e.id,
            )),
          (J[47] = tl),
          (J[48] = X),
          (J[49] = eY),
          (J[50] = et),
          (J[51] = eo),
          (J[52] = L))
        : (L = J[52])
      let tm = L
      J[53] !== tl || J[54] !== eV || J[55] !== er
        ? ((q = () => {
            ;(er.set(t6.m$, eV.slice(0, -1)), tl())
          }),
          (J[53] = tl),
          (J[54] = eV),
          (J[55] = er),
          (J[56] = q))
        : (q = J[56])
      let tu = q
      J[57] !== e2 ||
      J[58] !== eb ||
      J[59] !== X ||
      J[60] !== ep ||
      J[61] !== e3 ||
      J[62] !== eg ||
      J[63] !== eh ||
      J[64] !== eD ||
      J[65] !== ea ||
      J[66] !== en?.onRunCommand
        ? ((G = (e) => {
            let t = "openAvatarOverlay" === e.id && e2,
              a = (0, t6.iG)(eD, e.id),
              n = (0, eG.j)(e, ep, a, e3),
              c = n.title
            "openAvatarOverlay" === e.id && e3
              ? (c = e2
                  ? ep.formatMessage({ id: "codex.command.hideMiniOverlay", defaultMessage: "Hide Mini" })
                  : ep.formatMessage({ id: "codex.command.showMiniOverlay", defaultMessage: "Show Mini" }))
              : "openAvatarOverlay" === e.id &&
                (c = t
                  ? ep.formatMessage(ax.tuckAwayPet)
                  : ep.formatMessage({ id: "codex.command.wakeMiniOverlay", defaultMessage: "Wake Mini" }))
            let i = t ? ep.formatMessage(ax.tuckAwayPetDescription) : n.description
            return (0, o.jsx)(
              tv,
              {
                command: e,
                close: X,
                description: i,
                icon: a?.icon,
                originElement: eg,
                originPanel: eh,
                onRunCommand: en?.onRunCommand,
                onOpenChatSearch: () => {
                  eb && ea.openSession()
                },
                searchKeywords:
                  "openAvatarOverlay" === e.id
                    ? [n.title, ep.formatMessage(ax.tuckAwayPet), ep.formatMessage(ax.petSearchAlias)]
                    : void 0,
                title: c,
              },
              e.id,
            )
          }),
          (J[57] = e2),
          (J[58] = eb),
          (J[59] = X),
          (J[60] = ep),
          (J[61] = e3),
          (J[62] = eg),
          (J[63] = eh),
          (J[64] = eD),
          (J[65] = ea),
          (J[66] = en?.onRunCommand),
          (J[67] = G))
        : (G = J[67])
      let tp = G,
        tg = [],
        th = te.filter(au),
        tf = "chats" === eY,
        tx = "people" === eY,
        tM = "files" === eY,
        ty = "text" === eY,
        tb = "space" === eY || "pages" === eY,
        tw = th.length > 0 || tf || tx || tM || ty || tb,
        tT = "root" === eY && null == eH && !tw,
        tC = tT && 0 === tt.length,
        tS = tC ? "chats" : eY
      J[68] !== et || J[69] !== tS ? ((U = (0, K.ks)(tS, et)), (J[68] = et), (J[69] = tS), (J[70] = U)) : (U = J[70])
      let tk = U,
        tD = tT ? te.filter((e) => !e.modes?.some(am) && (!tC || "suggested" === e.groupKey)) : te,
        tP =
          tC || (tf && 0 === tt.length)
            ? (0, o.jsx)(o.Fragment, {
                children: (0, o.jsx)(eL.Br, {
                  close: X,
                  navigateToLocalConversation: ex,
                  onSelectResult: en?.onSelectResult,
                }),
              })
            : null
      J[71] !== tk ||
      J[72] !== X ||
      J[73] !== tw ||
      J[74] !== ex ||
      J[75] !== et ||
      J[76] !== ea ||
      J[77] !== tC ||
      J[78] !== en
        ? ((W =
            tw || null == tk
              ? null
              : (0, o.jsx)(
                  eL.UnifiedSearchChatContent,
                  {
                    close: X,
                    navigateToLocalConversation: ex,
                    presentation: tC ? "focused" : "quick",
                    searchPlan: tk,
                    search: et,
                    searchEventLogger: ea,
                    onSelectResult: en?.onSelectResult,
                    onStartNewConversation: null == en ? void 0 : () => en.onRunCommand("newTask"),
                  },
                  "group-chat-search-results",
                )),
          (J[71] = tk),
          (J[72] = X),
          (J[73] = tw),
          (J[74] = ex),
          (J[75] = et),
          (J[76] = ea),
          (J[77] = tC),
          (J[78] = en),
          (J[79] = W))
        : (W = J[79])
      let t_ = W
      J[80] !== X || J[81] !== tT || J[82] !== tb || J[83] !== ea || J[84] !== en
        ? ((V =
            (tT || tb) && null == en
              ? (0, o.jsx)(o.Fragment, { children: (0, o.jsx)(ev, { close: X, searchEventLogger: ea }) })
              : null),
          (J[80] = X),
          (J[81] = tT),
          (J[82] = tb),
          (J[83] = ea),
          (J[84] = en),
          (J[85] = V))
        : (V = J[85])
      let tI = V,
        tN = 0 === tt.length,
        tj = []
      if (tN && !tw)
        for (let e of t8) {
          let t = tr.find((t) => t.id === e)
          t && tj.push(t)
        }
      J[86] !== tC || J[87] !== tN
        ? ((z = (e) => !tC && (!tN || !t8.includes(e.id))), (J[86] = tC), (J[87] = tN), (J[88] = z))
        : (z = J[88])
      let tE = tr.filter(z),
        tR = (0, K.w0)(tt, tE.some(al)),
        tO = tw ? [] : tD.filter(ar).map(tm)
      if (tb) null != tI && tg.push(tI)
      else if (tf && 0 === tt.length && null == en) null != tP && tg.push(tP)
      else if (tf && null != tk && null == en)
        tg.push(
          (0, o.jsx)(
            eL.ql,
            { close: X, navigateToLocalConversation: ex, pageSize: tk.maxResults, search: tt, searchEventLogger: ea },
            "group-threads",
          ),
        )
      else if (tf && null != tk) {
        let e,
          t,
          a = en?.onSelectResult
        ;(J[89] !== en
          ? ((e = null == en ? void 0 : () => en.onRunCommand("newTask")), (J[89] = en), (J[90] = e))
          : (e = J[90]),
          J[91] !== tk || J[92] !== X || J[93] !== ex || J[94] !== et || J[95] !== ea || J[96] !== a || J[97] !== e
            ? ((t = (0, o.jsx)(
                eL.UnifiedSearchChatContent,
                {
                  close: X,
                  navigateToLocalConversation: ex,
                  presentation: "focused",
                  searchPlan: tk,
                  search: et,
                  searchEventLogger: ea,
                  onSelectResult: a,
                  onStartNewConversation: e,
                },
                "group-threads",
              )),
              (J[91] = tk),
              (J[92] = X),
              (J[93] = ex),
              (J[94] = et),
              (J[95] = ea),
              (J[96] = a),
              (J[97] = e),
              (J[98] = t))
            : (t = J[98]),
          tg.push(t))
      } else if (tw) {
        let e = tM || ty ? te : th
        tg.push(...e.map(tm))
      } else tg.push(...tD.filter(as).map(tm))
      if (!tw && (tj.length > 0 || tO.length > 0)) {
        let e, t
        ;(J[99] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, o.jsx)(D.z, {
              children: (0, o.jsx)(x.A, { id: "codex.commandMenu.suggestedGroup", defaultMessage: "Quick actions" }),
            })),
            (J[99] = e))
          : (e = J[99]),
          J[100] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = { gap: "var(--spacing)" }), (J[100] = t))
            : (t = J[100]),
          tg.push(
            (0, o.jsxs)(
              i.uB.Group,
              { heading: e, className: "flex flex-col", style: t, children: [tj.map(tp), tO] },
              "group-suggested",
            ),
          ))
      }
      J[101] !== X || J[102] !== eS || J[103] !== e8 || J[104] !== ef || J[105] !== tC || J[106] !== en?.onNavigate
        ? ((Y =
            eS && !tC
              ? (0, o.jsx)(o.Fragment, {
                  children: (0, o.jsx)(t5, {
                    close: X,
                    isSelectedHostLocal: e8,
                    selectedHostId: ef,
                    onNavigate: en?.onNavigate,
                  }),
                })
              : null),
          (J[101] = X),
          (J[102] = eS),
          (J[103] = e8),
          (J[104] = ef),
          (J[105] = tC),
          (J[106] = en?.onNavigate),
          (J[107] = Y))
        : (Y = J[107])
      let tB = Y
      tw || null == tB || tR || tg.push(tB)
      let tF = g()(tE, ad)
      for (let e of (tw || tg.push((0, o.jsx)(i.uB.Group, { children: tF[""]?.map(tp) }, "ungrouped-actions")), u.tU)) {
        if (tw) break
        let t = tF[e],
          a = tD.filter((t) => t.groupKey === e).map(tm)
        ;(t?.length || 0 !== a.length) &&
          (tg.push(
            (0, o.jsxs)(
              i.uB.Group,
              {
                heading: (0, o.jsx)(D.z, { children: (0, o.jsx)(x.A, { ...ax[e] }) }),
                className: "flex flex-col",
                style: { gap: "var(--spacing)" },
                children: [a, t?.map(tp)],
              },
              `group-${e}`,
            ),
          ),
          tR && "configure" === e && null != tB && tg.push(tB))
      }
      if ((tw || tg.push(...tD.filter(ai).map(tm)), tx && null != ew)) {
        let e
        ;(J[108] !== X || J[109] !== ew || J[110] !== es || J[111] !== ea || J[112] !== tt
          ? ((e = (0, o.jsx)(
              t0,
              { mode: ew, scrollRef: es, close: X, search: tt, searchEventLogger: ea },
              "group-people-search",
            )),
            (J[108] = X),
            (J[109] = ew),
            (J[110] = es),
            (J[111] = ea),
            (J[112] = tt),
            (J[113] = e))
          : (e = J[113]),
          tg.push(e))
      }
      let tL = tT
          ? {
              actions: tg,
              pages: [],
              space: [tI],
              chats: [tP, tC ? null : t_],
              files: te.filter(ac).map(tm),
              text: te.filter(an).map(tm),
            }
          : null,
        tq = $.v3.filter(ao)
      ;(tC &&
        (tq = eu ? ["actions", "space", "chats", "files", "text"] : ["actions", "chats", "space", "files", "text"]),
        J[114] !== eX || J[115] !== eJ
          ? ((Z = (e) => e1({ key: eJ, value: e, fileMask: eX })), (J[114] = eX), (J[115] = eJ), (J[116] = Z))
          : (Z = J[116]))
      let tW = {
        value: e0.value,
        loop: tf && 0 === tt.length && !e9,
        shouldFilter: !tM && !ty && !tf && !tx && !tb,
        filter: el,
        label: ep.formatMessage(t$.b.dialogTitle),
        onValueChange: Z,
      }
      ty ? (H = 256) : tx && "personal" === ew && (H = 100)
      let tK = {
        autoFocus: null != en,
        "aria-description":
          0 === ts.length
            ? void 0
            : ep.formatMessage({
                id: "codex.commandMenu.searchKeyboardHint",
                defaultMessage: "Tab switches search; F6 focuses search options",
              }),
        maxLength: H,
        placeholder: to,
        value: et,
        onValueChange: (e) => {
          ;((0, t6.ks)(er, eY, e), (0, f.flushSync)(() => eo(e)))
          let t = (0, K.ks)(eY, e)
          ;(eb && t?.includeContentResults && (tf || (null == eH && !tw)) && ea.openSession(),
            tf && e1({ key: eJ, value: $.u, fileMask: eX }))
        },
        onKeyDown: (e) => {
          if (!e$(e)) {
            if (
              "Enter" === e.key &&
              !e.defaultPrevented &&
              !e.nativeEvent.isComposing &&
              229 !== e.nativeEvent.keyCode &&
              (tM || ("root" === eY && !tw)) &&
              null == eH
            ) {
              let t = Array.from(
                e.currentTarget.closest("[cmdk-root]")?.querySelectorAll('[cmdk-item]:not([aria-disabled="true"])') ??
                  [],
              ).filter(aa)
              t.some(at) || (e.preventDefault(), t[0]?.click())
            }
            null != eH ||
              "Tab" !== e.key ||
              e.defaultPrevented ||
              e.altKey ||
              e.ctrlKey ||
              e.metaKey ||
              e.nativeEvent.isComposing ||
              (e.preventDefault(), td(ti[(ti.indexOf(eY) + (e.shiftKey ? -1 : 1) + ti.length) % ti.length]))
          }
        },
      }
      tW.onKeyDown =
        null != en
          ? (e) => {
              "Escape" !== e.key || e.nativeEvent.isComposing || (e.preventDefault(), null != eH ? tu() : X())
            }
          : ae
      let tV = null
      return (
        (tM || ty) && (0 === te.length || eQ?.roots.length === 0)
          ? (tV = "choose-folder")
          : tf || tx || null != tk || tM || ty || tb || (tV = "no-matches"),
        J[117] !== tr || J[118] !== en
          ? ((Q = null == en ? null : (0, o.jsx)(eZ, { commandIds: tr.map(t7), onRunCommand: en.onRunCommand })),
            (J[117] = tr),
            (J[118] = en),
            (J[119] = Q))
          : (Q = J[119]),
        ei({
          commandProps: tW,
          shortcuts: Q,
          controls: { inputProps: tK, controls: 0 === ts.length ? null : ts, mode: eY, modes: ti, onSelect: td },
          results:
            null == tL
              ? tg
              : (0, o.jsxs)(o.Fragment, {
                  children: [
                    tq.map((e) => (0, o.jsx)("div", { children: tL[e] }, e)),
                    (0, o.jsx)(o.Fragment, {
                      children: (0, o.jsx)("div", {
                        children: (0, o.jsx)(tG, { close: X, onNavigate: en?.onNavigate }),
                      }),
                    }),
                    (0, o.jsx)("div", {
                      children:
                        null == en && e4 && e6
                          ? (0, o.jsx)(tA, { request: { query: et, mode: eY }, session: { close: X } })
                          : null,
                    }),
                    null == en && eb ? (0, o.jsx)(t2, { close: X, search: tt, searchEventLogger: ea }) : null,
                  ],
                }),
          selectionKey: eJ,
          emptyState: tV,
          page: null == eH ? null : { title: eH.title, accessory: th[0]?.pageAccessory, onBack: tu },
        })
      )
    }
    function t7(e) {
      let { id: t } = e
      return t
    }
    function ae(e) {
      e.target instanceof Node && !e.target.isConnected && e.stopPropagation()
    }
    function at(e) {
      return "true" === e.getAttribute("aria-selected")
    }
    function aa(e) {
      return null == e.closest("[hidden], [inert]")
    }
    function ao(e) {
      return "root" !== e && "people" !== e
    }
    function an(e) {
      return e.modes?.includes("text")
    }
    function ac(e) {
      return e.modes?.includes("files")
    }
    function ai(e) {
      return null == e.groupKey && (e.order ?? 0) >= 0
    }
    function ad(e) {
      return e.unifiedSearchGroupKey ?? ""
    }
    function as(e) {
      return null == e.groupKey && (e.order ?? 0) < 0
    }
    function ar(e) {
      return "suggested" === e.groupKey
    }
    function al(e) {
      return "importExternalAgent" === e.id && "configure" === e.unifiedSearchGroupKey
    }
    function am(e) {
      return "files" === e || "text" === e
    }
    function au(e) {
      return e.exclusive
    }
    function ap(e) {
      return (0, o.jsx)(d.Fragment, { children: e.controls }, e.id)
    }
    function ag(e) {
      return null != e.controls
    }
    function ah(e) {
      return "files" === e || "text" === e
    }
    function af(e, { canUseChatGpt: t, codexFeaturesAllowed: a }) {
      switch (e) {
        case void 0:
          return !0
        case "chatgpt":
          return t
        case "codex":
          return a
      }
    }
    let ax = (0, M.YK)({
      thread: { id: "codex.commandGroup.thread", defaultMessage: "Chat" },
      navigation: { id: "codex.commandGroup.navigation", defaultMessage: "Navigation" },
      panels: { id: "codex.commandGroup.panels", defaultMessage: "Panels" },
      workspace: { id: "codex.commandGroup.workspace", defaultMessage: "Project" },
      configure: { id: "codex.commandGroup.configure", defaultMessage: "Configure" },
      app: { id: "codex.commandGroup.app", defaultMessage: "App" },
      skills: { id: "codex.commandGroup.skills", defaultMessage: "Skills" },
      spaceSearchPlaceholder: { id: "codex.commandMenu.spaceSearchPlaceholder", defaultMessage: "Search Space" },
      pageSearchPlaceholder: { id: "codex.commandMenu.pageSearchPlaceholder", defaultMessage: "Search pages" },
      chatSearchPlaceholder: { id: "codex.commandMenu.chatSearchPlaceholder", defaultMessage: "Search chats" },
      peopleSearchPlaceholder: { id: "codex.commandMenu.peopleSearchPlaceholder", defaultMessage: "Search people" },
      fileSearchPlaceholder: { id: "codex.commandMenu.fileSearchPlaceholder", defaultMessage: "Search files" },
      actionSearchPlaceholder: { id: "codex.commandMenu.actionSearchPlaceholder", defaultMessage: "Search actions" },
      unifiedSearchPlaceholder: { id: "codex.commandMenu.unifiedSearchPlaceholder", defaultMessage: "Search ChatGPT" },
      tuckAwayPet: { id: "codex.command.hideMiniOverlay", defaultMessage: "Hide Mini" },
      tuckAwayPetDescription: { id: "codex.commandDescription.tuckAwayMiniOverlay", defaultMessage: "Tuck away Mini" },
      petSearchAlias: { id: "codex.commandMenu.miniPetSearchAlias", defaultMessage: "pet pets" },
    })
    var aM = a("BrP7"),
      av = a("zLIa"),
      ay = a("ea2v"),
      ab = a("ryOs")
    let aw = new Set(["ArrowDown", "ArrowUp", "Home", "End", "Enter"]),
      aT = new Set(["j", "k", "n", "p"])
    function aC(e) {
      let t,
        a,
        c,
        d,
        r,
        l = (0, n.c)(21),
        { children: m, controls: u, host: p, inputProps: g, mode: f, modes: x, onSelect: M, showTabs: v } = e,
        y = (0, h.gh)(tD.u)
      l[0] !== y
        ? ((t = (e) => {
            if (null != e) return () => (0, ay.Ji)(y, e)
          }),
          (l[0] = y),
          (l[1] = t))
        : (t = l[1])
      let b = t,
        w = (0, s.A)()
      return (
        l[2] !== b || l[3] !== p || l[4] !== g || l[5] !== y
          ? ((a =
              null == p
                ? (0, o.jsx)(av.pd, {
                    ref: b,
                    variant: "search",
                    focusRing: !1,
                    onInputCapture: (e) => (0, ay.gu)(y, e.currentTarget, e.nativeEvent, g.value ?? ""),
                    onKeyDownCapture: (e) => (0, ab.d)(y, e.currentTarget, e.nativeEvent),
                  })
                : (0, o.jsx)(ak, { host: p })),
            (l[2] = b),
            (l[3] = p),
            (l[4] = g),
            (l[5] = y),
            (l[6] = a))
          : (a = l[6]),
        l[7] !== g || l[8] !== a
          ? ((c = (0, o.jsx)(i.uB.Input, { ...g, asChild: !0, children: a })), (l[7] = g), (l[8] = a), (l[9] = c))
          : (c = l[9]),
        l[10] !== u || l[11] !== w || l[12] !== f || l[13] !== x || l[14] !== M || l[15] !== v
          ? ((d =
              v &&
              (0, o.jsxs)("div", {
                className:
                  "flex min-w-0 shrink-0 items-center gap-2 overflow-x-auto border-t border-default py-1 pe-2 select-none",
                children: [
                  (0, o.jsx)(aM.t, {
                    ariaLabel: w.formatMessage({ id: "codex.commandMenu.searchScopes", defaultMessage: "Search in" }),
                    className: "shrink-0",
                    onSelect: M,
                    selectedKey: f,
                    tabs: x.map(aS),
                    variant: "search",
                  }),
                  null == u
                    ? null
                    : (0, o.jsx)("div", {
                        className: "ms-auto flex min-w-0 shrink-0 items-center justify-end gap-2",
                        "data-search-options": !0,
                        role: "toolbar",
                        tabIndex: -1,
                        "aria-label": w.formatMessage({
                          id: "codex.commandMenu.searchOptions",
                          defaultMessage: "Search options",
                        }),
                        onKeyDown: e$,
                        children: u,
                      }),
                ],
              })),
            (l[10] = u),
            (l[11] = w),
            (l[12] = f),
            (l[13] = x),
            (l[14] = M),
            (l[15] = v),
            (l[16] = d))
          : (d = l[16]),
        l[17] !== m || l[18] !== c || l[19] !== d
          ? ((r = (0, o.jsxs)(o.Fragment, { children: [c, m, d] })), (l[17] = m), (l[18] = c), (l[19] = d), (l[20] = r))
          : (r = l[20]),
        r
      )
    }
    function aS(e) {
      return { key: e, name: (0, o.jsx)(x.A, { ...aP[e] }) }
    }
    function ak(e) {
      let t,
        a,
        c,
        i,
        s,
        r,
        l,
        u,
        p,
        g,
        h,
        x = (0, n.c)(19)
      if (x[0] !== e) {
        let { host: o, onChange: n, onKeyDown: d, value: s, ...r } = e
        ;((a = o), (c = n), (i = d), (t = r), (x[0] = e), (x[1] = t), (x[2] = a), (x[3] = c), (x[4] = i))
      } else ((t = x[1]), (a = x[2]), (c = x[3]), (i = x[4]))
      let [M] = (0, d.useState)(aD),
        v = (0, d.useRef)(null)
      x[5] !== c ? ((s = (e) => c?.(e)), (x[5] = c), (x[6] = s)) : (s = x[6])
      let y = (0, m.K)(s)
      x[7] !== i
        ? ((r = (e) => {
            if (
              (i?.(e),
              e.defaultPrevented || e.nativeEvent.isComposing || !(aw.has(e.key) || (e.ctrlKey && aT.has(e.key))))
            )
              return
            let t = new KeyboardEvent("keydown", e.nativeEvent)
            v.current?.dispatchEvent(t) === !1 && e.preventDefault()
          }),
          (x[7] = i),
          (x[8] = r))
        : (r = x[8])
      let b = (0, m.K)(r)
      x[9] !== t || x[10] !== y || x[11] !== b
        ? ((l = { ...t, onChange: y, onKeyDown: b }), (x[9] = t), (x[10] = y), (x[11] = b), (x[12] = l))
        : (l = x[12])
      let w = l,
        [T, C] = (0, d.useState)(w)
      return (
        tC()(T, w) || C(w),
        x[13] !== T ? ((u = () => T), (p = [T]), (x[13] = T), (x[14] = u), (x[15] = p)) : ((u = x[14]), (p = x[15])),
        (0, d.useImperativeHandle)(a.setInputProps, u, p),
        x[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, o.jsx)("span", { ref: v })), (x[16] = g))
          : (g = x[16]),
        x[17] !== M ? ((h = (0, f.createPortal)(g, M)), (x[17] = M), (x[18] = h)) : (h = x[18]),
        h
      )
    }
    function aD() {
      return document.createDocumentFragment()
    }
    let aP = (0, M.YK)({
      root: { id: "codex.commandMenu.scope.everywhere", defaultMessage: "All" },
      chats: { id: "codex.commandMenu.scope.chats", defaultMessage: "Chats" },
      people: { id: "codex.commandMenu.scope.people", defaultMessage: "People" },
      space: { id: "codex.commandMenu.scope.space", defaultMessage: "Space" },
      actions: { id: "codex.commandMenu.scope.actions", defaultMessage: "Actions" },
      pages: { id: "codex.commandMenu.scope.pages", defaultMessage: "Pages" },
      files: { id: "codex.commandMenu.scope.files", defaultMessage: "Files" },
      text: { id: "codex.commandMenu.scope.text", defaultMessage: "Text" },
    })
    var a_ = a("RNul")
    function aI(e) {
      let t,
        a,
        c,
        d,
        s,
        r = (0, n.c)(12),
        { children: l, emptyState: m, listRef: u } = e
      return (
        r[0] !== m
          ? ((t =
              "choose-folder" === m &&
              (0, o.jsx)("div", {
                "data-cmdk-empty": !0,
                "data-command-menu-search-state": !0,
                children: (0, o.jsx)(x.A, {
                  id: "codex.commandMenu.chooseSearchFolder",
                  defaultMessage: "Choose a folder to search files",
                }),
              })),
            (r[0] = m),
            (r[1] = t))
          : (t = r[1]),
        r[2] !== m
          ? ((a =
              "no-matches" === m &&
              (0, o.jsx)(i.uB.Empty, {
                "data-command-menu-search-state": !0,
                children: (0, o.jsx)(x.A, { id: "codex.commandMenu.noResults", defaultMessage: "No matches" }),
              })),
            (r[2] = m),
            (r[3] = a))
          : (a = r[3]),
        r[4] !== l || r[5] !== u || r[6] !== t || r[7] !== a
          ? ((c = (0, o.jsxs)(i.uB.List, { ref: u, children: [l, t, a] })),
            (r[4] = l),
            (r[5] = u),
            (r[6] = t),
            (r[7] = a),
            (r[8] = c))
          : (c = r[8]),
        r[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, o.jsx)("span", {
              "aria-hidden": !0,
              className: "pointer-events-none absolute end-4 top-4 hidden text-secondary",
              "data-command-menu-search-loading": !0,
              children: (0, o.jsx)(a_.y, { as: "span", className: "icon-sm" }),
            })),
            (r[9] = d))
          : (d = r[9]),
        r[10] !== c ? ((s = (0, o.jsxs)(o.Fragment, { children: [c, d] })), (r[10] = c), (r[11] = s)) : (s = r[11]),
        s
      )
    }
    function aA(e) {
      let t,
        a,
        u,
        p,
        g = (0, n.c)(13),
        h = (0, s.A)(),
        f = (0, d.useRef)(null),
        x = (0, d.useRef)(null)
      g[0] !== e
        ? ((t = (t) => {
            ;((x.current = t), e.inputRef(t))
          }),
          (g[0] = e),
          (g[1] = t))
        : (t = g[1])
      let M = (0, m.K)(t)
      return (
        g[2] !== e.host?.input
          ? ((a = () => (e.host?.input ?? x).current?.focus()), (g[2] = e.host?.input), (g[3] = a))
          : (a = g[3]),
        g[4] !== h || g[5] !== e.host || g[6] !== e.standaloneWindow || g[7] !== M
          ? ((u = (t) =>
              (0, o.jsxs)(i.uB, {
                ...t.commandProps,
                "data-command-menu-variant": null == e.standaloneWindow ? void 0 : "standalone",
                className: null == e.host || null != e.standaloneWindow ? void 0 : "contents!",
                children: [
                  t.shortcuts,
                  (0, o.jsxs)(aC, {
                    ...t.controls,
                    showTabs: null == t.page,
                    host: e.host,
                    inputProps: { ...t.controls.inputProps, ref: null == e.host ? M : void 0 },
                    children: [
                      null == t.page
                        ? null
                        : (0, o.jsx)(l.fy, {
                            ariaLabel: h.formatMessage({
                              id: "codex.commandMenu.backToCommands",
                              defaultMessage: "Back to commands",
                            }),
                            density: "row",
                            icon: (0, o.jsx)(r.I, { asset: c.z }),
                            isSelected: !1,
                            title: (0, o.jsx)("span", { title: t.page.title, children: t.page.title }),
                            rightText: t.page.accessory,
                            showDivider: !1,
                            onSelect: (e) => {
                              ;(e.stopPropagation(), t.page?.onBack())
                            },
                          }),
                      (0, o.jsx)(aI, { listRef: f, emptyState: t.emptyState, children: t.results }, t.selectionKey),
                    ],
                  }),
                ],
              })),
            (g[4] = h),
            (g[5] = e.host),
            (g[6] = e.standaloneWindow),
            (g[7] = M),
            (g[8] = u))
          : (u = g[8]),
        g[9] !== e || g[10] !== a || g[11] !== u
          ? ((p = (0, o.jsx)(t9, { ...e, resultsListRef: f, focusInput: a, children: u })),
            (g[9] = e),
            (g[10] = a),
            (g[11] = u),
            (g[12] = p))
          : (p = g[12]),
        p
      )
    }
  },
  BIlk(e, t, a) {
    var o = a("QosV"),
      n = a("qmMi"),
      c = a("OY5W"),
      i = a("OWtl"),
      d = a("GEsy"),
      s = a("bWRV"),
      r = a("Fk6e"),
      l = a("gLoR")
    let m = (0, n.i1)(i.u, (e, { get: t }) => {
      if (null == e) return { members: [], isLoading: !1, isSearching: !1, isError: !1, isLocalResult: !1 }
      let { mode: a, search: o, debouncing: n } = e
      if ("personal" === a) {
        let { members: e, isLoading: a, isError: i, refetch: d } = t(c.DG, { search: o, debouncing: n, limit: 5 })
        return { members: e.slice(0, 5), isLoading: a, isSearching: a, isError: i, refetch: d, isLocalResult: !1 }
      }
      let i = n ? null : t(r.O, o),
        d = i?.data?.items
      return {
        members: (d ?? (i?.isError ? [] : t(r.Iq, o)))
          .flatMap((e) => {
            let t = e.profile_url?.trim()
            return t ? [{ member: e, profileUrl: t }] : []
          })
          .slice(0, 5),
        isLoading: n || i?.isLoading === !0,
        isSearching: o.length <= 256 && t(l.hl) && (n || i?.isFetching === !0),
        isError: i?.isError === !0,
        refetch: i?.refetch,
        isLocalResult: null == d,
      }
    })
    a.d(
      t,
      {},
      {
        t: function (e, t, a) {
          let i,
            r,
            l,
            u = (0, o.c)(10)
          u[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = { parameter: "command_menu_all_tab" }), (u[0] = i))
            : (i = u[0])
          let p = (0, n._U)(t && e.length >= 2 ? c.Jb : null, i),
            g = (0, d.o)(null == p ? null : e, 150)
          u[1] !== g || u[2] !== p || u[3] !== e
            ? ((r = null == p ? null : { mode: p, search: e, debouncing: e !== g }),
              (u[1] = g),
              (u[2] = p),
              (u[3] = e),
              (u[4] = r))
            : (r = u[4])
          let h = (0, n._U)(m, r),
            f = "workspace" === p,
            x = h.isLoading || h.isError || h.members.length > 0
          return (
            u[5] !== e || u[6] !== a || u[7] !== f || u[8] !== x
              ? ((l = { enabled: f, pending: x, search: e, searchEventLogger: a }),
                (u[5] = e),
                (u[6] = a),
                (u[7] = f),
                (u[8] = x),
                (u[9] = l))
              : (l = u[9]),
            (0, s.I)(l),
            h
          )
        },
      },
    )
  },
  bWRV(e, t, a) {
    var o = a("QosV"),
      n = a("zd8w")
    a.d(
      t,
      {},
      {
        I: function (e) {
          let t,
            a,
            c,
            i,
            d = (0, o.c)(11),
            { enabled: s, pending: r, search: l, searchEventLogger: m } = e
          ;(d[0] !== s || d[1] !== r || d[2] !== l || d[3] !== m
            ? ((t = () => {
                s && m.trackWorkspaceMemberSearch(l, r, r ? void 0 : 0)
              }),
              (a = [s, r, l, m]),
              (d[0] = s),
              (d[1] = r),
              (d[2] = l),
              (d[3] = m),
              (d[4] = t),
              (d[5] = a))
            : ((t = d[4]), (a = d[5])),
            (0, n.useLayoutEffect)(t, a),
            d[6] !== s || d[7] !== l || d[8] !== m
              ? ((c = () => {
                  if (s) return () => m.trackWorkspaceMemberSearch(l, !1)
                }),
                (i = [s, l, m]),
                (d[6] = s),
                (d[7] = l),
                (d[8] = m),
                (d[9] = c),
                (d[10] = i))
              : ((c = d[9]), (i = d[10])),
            (0, n.useLayoutEffect)(c, i))
        },
      },
    )
  },
  Fk6e(e, t, a) {
    var o = a("D7Ms"),
      n = a("SZCv"),
      c = a.n(n),
      i = a("qmMi"),
      d = a("ASxG"),
      s = a("SPnB"),
      r = a("eFn4"),
      l = a("Kwur"),
      m = a("rTPf"),
      u = a("tv8P"),
      p = a("OWtl"),
      g = a("kpIY"),
      h = a("Nwp9"),
      f = a("rvFo")
    let x = (0, i.un)(p.u, ({ get: e }) => {
        let t = e(s.m0)
        if ("allowed" !== t.status || !("accountId" in t) || "workspace" !== t.accountStructure) return null
        let { data: a } = e(r.Jk, t.accountId)
        return a?.member_profiles_enabled !== !1 && a?.member_profiles_sharing === "workspace" ? t.accountId : null
      }),
      M = d.Ikc({
        id: d.YjP().min(1),
        account_user_id: d.YjP().min(1),
        avatar_url: d
          .OZ5({ protocol: /^https$/ })
          .nullable()
          .catch(null),
        name: d.YjP().nullable().default(null),
        profile_username: d.YjP().min(1),
        profile_url: d.YjP().regex(/^\/(?:w\/[^/\\?#]+\/|u\/)[^/\\?#]+$/),
      }),
      v = d.g1P(d.YjP(), d.L5J()),
      y = d.Ikc({ member: M, openedAt: d.aig(), confirmedAt: d.aig() }),
      b = (0, h.Kn)((e) => e, void 0),
      w = (0, i.bD)(p.u, (e) => !1, {
        onMount(e, { key: t }) {
          let a = t - Date.now()
          if (a <= 0) return void e(!0)
          let o = setTimeout(() => e(!0), a)
          return () => clearTimeout(o)
        },
      }),
      T = (0, i.un)(p.u, ({ get: e }) => {
        let t = e(x),
          a = e(s.o8)
        return null != t &&
          t === e(s.chatGptAuthenticatedAccountId$) &&
          null != a &&
          a === e(s.chatGptAuthenticatedUserId$)
          ? `workspace-member-search-opens-v1:${JSON.stringify([t, a])}`
          : null
      }),
      C = (0, i.i1)(p.u, (e, { get: t }) => {
        let a = e.trim().toLowerCase()
        if (!a || "@" === a || a.length > 256) return []
        let o = t(T)
        return null == o
          ? []
          : Object.values(v.safeParse(t(b, o)).data ?? {})
              .reverse()
              .flatMap((e) => {
                let o = y.safeParse(e).data
                if (!o || !S(o.member, a)) return []
                let n = o.confirmedAt + 864e5
                return Date.now() < n && !t(w, n) ? [o] : []
              })
              .sort((e, t) => t.openedAt - e.openedAt)
              .slice(0, 5)
              .map(({ member: e }) => ({ ...e, email: null }))
      })
    function S(e, t) {
      return !!e.name?.toLowerCase().includes(t) || e.profile_username.toLowerCase().startsWith(t.replace(/^@/, ""))
    }
    let k = (0, i.vU)(p.u, (e, { get: t, scope: a }) => {
        let n = t(x),
          c = t(s.o8),
          i = e.trim()
        return {
          queryKey: ["workspace-member-search", n, c, i],
          queryFn:
            null == n || null == c || 0 === i.length || i.length > 256
              ? o.hT
              : ({ signal: e }) => P({ scope: a, accountId: n, limit: 10, offset: 0, query: i, signal: e, userId: c }),
          staleTime: f.D.ONE_MINUTE,
          retry: !1,
        }
      }),
      D = (0, i.N3)(p.u, (e, { get: t, scope: a }) => {
        let n = t(x),
          c = t(s.o8),
          i = e.trim()
        return {
          queryKey: ["workspace-member-search-pages", n, c, i],
          initialPageParam: 0,
          queryFn:
            null == n || null == c || 0 === i.length || i.length > 256
              ? o.hT
              : ({ pageParam: e, signal: t }) =>
                  P({ scope: a, accountId: n, limit: 20, offset: e, query: i, signal: t, userId: c }),
          getNextPageParam: (e) => (e.has_more ? e.offset + e.limit : void 0),
          staleTime: f.D.ONE_MINUTE,
          retry: !1,
        }
      })
    async function P({ scope: e, accountId: t, limit: a, offset: o, query: n, signal: i, userId: d }) {
      let r = e.get(T),
        p = null == r ? void 0 : (0, g.TB)(r),
        h = await l.Request.safeGet("/spaces/people", {
          expectedIdentity: { accountId: t, userId: d },
          parameters: {
            query: { account_id: t, include_profile_details: !0, profiles_only: !0, query: n, limit: a, offset: o },
          },
          expectedErrorStatuses: [403, 404],
          signal: i,
        })
      if ((i.throwIfAborted(), e.get(u.spaceAccountId$) === t && e.get(s.chatGptAuthenticatedUserId$) === d))
        for (let t of (null != p &&
          null != r &&
          e.get(T) === r &&
          (function (e, t, a, o) {
            let n = v.safeParse(t).data
            if (!n) return
            let i = v.safeParse((0, g.TB)(e)).data,
              d = {}
            for (let [e, t] of Object.entries(n)) {
              let n = y.safeParse(t).data,
                s = i?.[e],
                r = y.safeParse(s).data
              if (!r || !n || r.confirmedAt !== n.confirmedAt || !c()(r.member, n.member)) continue
              let l = o.items.find((t) => t.account_user_id === e)
              if (l) {
                let t = M.safeParse(l).data
                t
                  ? (d[e] = { expectedValue: s, value: { ...r, member: t, confirmedAt: Date.now() }, updateOnly: !0 })
                  : (d[e] = { delete: !0, expectedValue: s })
              } else
                0 === o.offset &&
                  !o.has_more &&
                  "@" !== a &&
                  S(r.member, a.toLowerCase()) &&
                  (d[e] = { delete: !0, expectedValue: s })
            }
            Object.keys(d).length > 0 && (0, g.EG)(e, { entries: d })
          })(r, p, n, h),
        h.items))
          t.avatar_url && e.query.setData(m.Ks, t.account_user_id, (e) => ({ ...e, ...t }))
      return h
    }
    a.d(
      t,
      {},
      {
        B5: function (e, t, a = !1) {
          let o = e.get(T),
            n = M.safeParse(t).data
          if (null == o || null == n) return
          let c = Date.now(),
            i = n.account_user_id,
            d = { value: { member: n, openedAt: c, confirmedAt: c } }
          if (a) {
            let e = v.safeParse((0, g.TB)(o)).data?.[i],
              t = y.safeParse(e).data
            if (!t) return
            d = { expectedValue: e, value: { ...t, openedAt: c } }
          }
          ;(0, g.EG)(o, { entries: { [i]: d }, maxEntries: 5, timestampField: "openedAt" })
        },
        CD: x,
        Iq: C,
        O: k,
        k1: D,
      },
    )
  },
  Nz3U(e, t, a) {
    var o = a("ABep"),
      n = a("QosV"),
      c = a("zd8w"),
      i = a("Wf1j"),
      d = a("SgPg"),
      s = a("LhhH"),
      r = a("X3K1"),
      l = a("hlYN"),
      m = a("N0P0"),
      u = a("V7ra")
    a.d(
      t,
      {},
      {
        I: function (e) {
          let t,
            a,
            p,
            g,
            h,
            f,
            x,
            M,
            v,
            y,
            b,
            w,
            T,
            C = (0, n.c)(42),
            { avatarSize: S, member: k, onResult: D, query: P, row: _ } = e,
            I = void 0 === S ? "md" : S,
            A = (0, i.A)(),
            N = (0, c.useRef)(null),
            j = "account_user_id" in k,
            E = j ? k.account_user_id : (k.username ?? void 0),
            R = null != D
          C[0] !== D ? ((t = (e) => D?.(e)), (C[0] = D), (C[1] = t)) : (t = C[1])
          let O = (0, c.useEffectEvent)(t)
          ;(C[2] !== R || C[3] !== O
            ? ((a = () => {
                R && O("received")
              }),
              (C[2] = R),
              (C[3] = O),
              (C[4] = a))
            : (a = C[4]),
            C[5] !== R || C[6] !== k || C[7] !== P
              ? ((p = [R, k, P]), (C[5] = R), (C[6] = k), (C[7] = P), (C[8] = p))
              : (p = C[8]),
            (0, c.useLayoutEffect)(a, p),
            C[9] !== R || C[10] !== O
              ? ((g = () => {
                  let e
                  if (!R) return
                  let t = N.current
                  if (null == t || "u" < typeof IntersectionObserver) return
                  let a = window.setTimeout(() => {
                    e = (0, m.D)(t, () => O("impression"))
                  }, 250)
                  return () => {
                    ;(window.clearTimeout(a), e?.())
                  }
                }),
                (C[9] = R),
                (C[10] = O),
                (C[11] = g))
              : (g = C[11]),
            C[12] !== E || C[13] !== R || C[14] !== P
              ? ((h = [R, E, P]), (C[12] = E), (C[13] = R), (C[14] = P), (C[15] = h))
              : (h = C[15]),
            (0, c.useLayoutEffect)(g, h),
            C[16] !== A || C[17] !== k || C[18] !== _
              ? ((f = _ ?? (0, u.n)(k, A)), (C[16] = A), (C[17] = k), (C[18] = _), (C[19] = f))
              : (f = C[19]))
          let { title: B, description: F } = f,
            L = j ? k.avatar_url : k.profile_picture_url
          return (
            C[20] === Symbol.for("react.memo_cache_sentinel")
              ? ((x = (0, o.jsx)("span", {
                  className: "size-full overflow-hidden rounded-full",
                  children: (0, o.jsx)(r.X, { as: "span", size: "fill" }),
                })),
                (C[20] = x))
              : (x = C[20]),
            C[21] !== I
              ? ((M = (0, o.jsx)(s.e, { alt: "", fallbackIcon: x, name: null, size: I, src: null })),
                (C[21] = I),
                (C[22] = M))
              : (M = C[22]),
            C[23] !== I || C[24] !== E || C[25] !== B || C[26] !== M || C[27] !== L
              ? ((v = (0, o.jsx)(d.T, { avatarUrl: L, colorKey: E, loadingFallback: M, name: B, size: I })),
                (C[23] = I),
                (C[24] = E),
                (C[25] = B),
                (C[26] = M),
                (C[27] = L),
                (C[28] = v))
              : (v = C[28]),
            C[29] !== B || C[30] !== P
              ? ((y = (0, o.jsx)("span", {
                  className: "truncate text-sm leading-5 text-default",
                  children: (0, o.jsx)(l.D, { highlightClassName: "font-semibold text-default", query: P, text: B }),
                })),
                (C[29] = B),
                (C[30] = P),
                (C[31] = y))
              : (y = C[31]),
            C[32] !== B || C[33] !== P || C[34] !== F
              ? ((b =
                  F && F !== B
                    ? (0, o.jsx)("span", {
                        className: "truncate text-xs text-secondary",
                        children: (0, o.jsx)(l.D, {
                          highlightClassName: "font-medium text-default",
                          query: P,
                          text: F,
                        }),
                      })
                    : null),
                (C[32] = B),
                (C[33] = P),
                (C[34] = F),
                (C[35] = b))
              : (b = C[35]),
            C[36] !== y || C[37] !== b
              ? ((w = (0, o.jsxs)("span", {
                  ref: N,
                  className: "flex min-w-0 flex-1 flex-col gap-0.5 select-none",
                  children: [y, b],
                })),
                (C[36] = y),
                (C[37] = b),
                (C[38] = w))
              : (w = C[38]),
            C[39] !== v || C[40] !== w
              ? ((T = (0, o.jsxs)(o.Fragment, { children: [v, w] })), (C[39] = v), (C[40] = w), (C[41] = T))
              : (T = C[41]),
            T
          )
        },
      },
    )
  },
  gLoR(e, t, a) {
    var o = a("i5ac"),
      n = a.n(o),
      c = a("qmMi"),
      i = a("Qgfj"),
      d = a("SPnB"),
      s = a("OWtl"),
      r = a("UR81"),
      l = a("Fk6e")
    let m = (0, i.zR)({ id: "profile.workspaceSearch.resultsLabel", defaultMessage: "Explore profiles" }),
      u = (0, c.un)(s.u, ({ get: e }) => null != e(l.CD) && null != e(d.o8)),
      p = (0, c.un)(s.u, ({ get: e }) => {
        let t = e(d.e0)
        return null != t && "unknown" !== t && !(0, r.J8)(t) && e(u)
      }),
      g = (0, c.i1)(s.u, ({ search: e, debouncing: t }, { get: a }) => {
        let o = null != e && (e.length > 0 || a(p)),
          c = e || "@",
          i = o && !t && c.length <= 256 ? a(l.k1, c) : null,
          d = n()(
            i?.data?.pages.flatMap(({ items: e }) =>
              e.flatMap((e) => {
                let t = e.profile_url?.trim()
                return t ? [{ member: e, profileUrl: t }] : []
              }),
            ) ?? [],
            ({ member: e }) => e.account_user_id,
          )
        return {
          members: d,
          hasLoadedResults: i?.data != null,
          showSearchResults: o,
          isLoading: o && (t || (0 === d.length && null != i && (i.isPending || i.isFetching))),
          isError: i?.isError === !0 && null == i.data,
          hasNextPage: i?.hasNextPage === !0 && !i.isFetchNextPageError,
          isSearching:
            o &&
            c.length <= 256 &&
            a(u) &&
            (t || i?.isFetching === !0 || (i?.isPending === !0 && "idle" === i.fetchStatus)),
          isFetchingNextPage: i?.isFetchingNextPage === !0,
          isFetchNextPageError: i?.isFetchNextPageError === !0,
          fetchNextPage: () => {
            i?.fetchNextPage()
          },
        }
      })
    a.d(
      t,
      {},
      {
        E8: g,
        RE: m,
        Vh: function (e) {
          e.get(p) &&
            null == e.query.getData(l.k1, "@") &&
            e.queryClient.prefetchInfiniteQuery({ ...e.query.getOptions(l.k1, "@"), pages: 1 })
        },
        hl: u,
      },
    )
  },
  V7ra(e, t, a) {
    a.d(
      t,
      {},
      {
        n: function (e, t) {
          let a = "account_user_id" in e,
            o = a ? e.email?.trim() : null,
            n = (a ? e.profile_username : e.username)?.trim(),
            c = n
              ? t.formatMessage({ id: "profile.usernameValue", defaultMessage: "@{username}" }, { username: n })
              : null,
            i =
              (a ? e.name : e.display_name)?.trim() ||
              o ||
              c ||
              t.formatMessage({ id: "codex.commandMenu.unnamedWorkspaceMember", defaultMessage: "Workspace member" }),
            d = c ?? o ?? void 0
          return { title: i, description: d === i ? void 0 : d }
        },
      },
    )
  },
  nRNm(e, t, a) {
    var o = a("ABep"),
      n = a("QosV"),
      c = a("zd8w"),
      i = a("iiZm")
    a.d(
      t,
      {},
      {
        _: function (e) {
          let t,
            a,
            d,
            s,
            r,
            l = (0, n.c)(21),
            { text: m, query: u, shouldAdjustStart: p, fragments: g } = e,
            h = void 0 !== p && p
          l[0] !== u || l[1] !== g || l[2] !== m
            ? ((t = void 0 === g ? (0, i.d7)(m, u) : g), (l[0] = u), (l[1] = g), (l[2] = m), (l[3] = t))
            : (t = l[3])
          let f = t
          if (null == f || 0 === f.length) {
            let e
            return (
              l[4] !== m ? ((e = (0, o.jsx)(o.Fragment, { children: m })), (l[4] = m), (l[5] = e)) : (e = l[5]),
              e
            )
          }
          l[6] !== f[0] || l[7] !== h || l[8] !== m
            ? ((a = h ? f[0].startOffset - Array.from(m.slice(0, f[0].startOffset)).slice(-8).join("").length : 0),
              (l[6] = f[0]),
              (l[7] = h),
              (l[8] = m),
              (l[9] = a))
            : (a = l[9])
          let x = a,
            M = x > 0 ? "\u2026" : ""
          return (
            l[10] !== f || l[11] !== m || l[12] !== x
              ? ((d = f.map((e, t) => {
                  let { startOffset: a, endOffset: n } = e
                  return (0, o.jsxs)(
                    c.Fragment,
                    {
                      children: [
                        m.slice(0 === t ? x : f[t - 1].endOffset, a),
                        (0, o.jsx)("span", { className: "text-default", children: m.slice(a, n) }),
                      ],
                    },
                    a,
                  )
                })),
                (l[10] = f),
                (l[11] = m),
                (l[12] = x),
                (l[13] = d))
              : (d = l[13]),
            l[14] !== f || l[15] !== m
              ? ((s = m.slice(f[f.length - 1].endOffset)), (l[14] = f), (l[15] = m), (l[16] = s))
              : (s = l[16]),
            l[17] !== M || l[18] !== d || l[19] !== s
              ? ((r = (0, o.jsxs)("span", { className: "text-codex-description", children: [M, d, s] })),
                (l[17] = M),
                (l[18] = d),
                (l[19] = s),
                (l[20] = r))
              : (r = l[20]),
            r
          )
        },
      },
    )
  },
  BrP7(e, t, a) {
    a.d(t, { t: () => w })
    var o = a("ABep"),
      n = a("QosV"),
      c = a("i1uX"),
      i = a("on57"),
      d = a("IjbW"),
      s = a("K4Cx"),
      r = a("zd8w"),
      l = a("UxN3"),
      m = a("SziE"),
      u = a("hZax"),
      p = a("Sm6l")
    let g = {
      medium: { icon: "size-9", caption: "w-9" },
      large: { icon: "size-10", caption: "w-10" },
      xl: { icon: "size-12", caption: "w-12" },
    }
    function h(e) {
      let t,
        a,
        c,
        d,
        s,
        r,
        l,
        m,
        u,
        h,
        f,
        x,
        M = (0, n.c)(26)
      M[0] !== e
        ? (({ children: t, icon: a, size: d, surface: s, labelVisibility: r, ...c } = e),
          (M[0] = e),
          (M[1] = t),
          (M[2] = a),
          (M[3] = c),
          (M[4] = d),
          (M[5] = s),
          (M[6] = r))
        : ((t = M[1]), (a = M[2]), (c = M[3]), (d = M[4]), (s = M[5]), (r = M[6]))
      let v = void 0 === s ? "elevated" : s,
        y = void 0 === r ? "visible" : r,
        b = "large" === d && "visible" === y && "pb-1.5"
      M[7] !== b ? ((l = (0, i.A)("group/labeled-icon flex-col gap-1.5", b)), (M[7] = b), (M[8] = l)) : (l = M[8])
      let w = "elevated" === v ? "border shadow-xs" : "border-hairline",
        T = g[d]
      ;(M[9] !== w || M[10] !== T.icon
        ? ((m = (0, i.A)(
            "flex items-center justify-center rounded-full border-default bg-surface text-default group-not-aria-selected/labeled-icon:group-not-disabled/labeled-icon:group-not-aria-disabled/labeled-icon:group-hover/labeled-icon:bg-secondary-ghost-hover group-focus-visible/labeled-icon:ring-2 group-focus-visible/labeled-icon:ring-ring group-aria-selected/labeled-icon:border-transparent group-aria-selected/labeled-icon:bg-accent-solid group-aria-selected/labeled-icon:text-accent-solid",
            w,
            T.icon,
          )),
          (M[9] = w),
          (M[10] = T.icon),
          (M[11] = m))
        : (m = M[11]),
        M[12] !== a || M[13] !== m
          ? ((u = (0, o.jsx)("span", { className: m, children: a })), (M[12] = a), (M[13] = m), (M[14] = u))
          : (u = M[14]))
      let C = "hidden" === y ? "sr-only" : "text-center text-sm leading-4 whitespace-normal",
        S = "visible" === y && g[d].caption
      return (
        M[15] !== S || M[16] !== C ? ((h = (0, i.A)(C, S)), (M[15] = S), (M[16] = C), (M[17] = h)) : (h = M[17]),
        M[18] !== t || M[19] !== h
          ? ((f = (0, o.jsx)("span", { className: h, children: t })), (M[18] = t), (M[19] = h), (M[20] = f))
          : (f = M[20]),
        M[21] !== c || M[22] !== f || M[23] !== l || M[24] !== u
          ? ((x = (0, o.jsxs)(p.$, {
              ...c,
              className: l,
              color: "ghostTertiary",
              size: "inline",
              focusRing: "none",
              children: [u, f],
            })),
            (M[21] = c),
            (M[22] = f),
            (M[23] = l),
            (M[24] = u),
            (M[25] = x))
          : (x = M[25]),
        x
      )
    }
    let f = "flex min-w-0 gap-1.5 rounded-md py-1 font-medium",
      x = {
        closeButtonClassName: "flex h-7 w-5 items-center justify-center",
        itemClassName: "shrink-0",
        listClassName: "flex min-w-0 items-center gap-0.5",
        segmentedEdges: !1,
        selectedClassName: "bg-surface-secondary text-default",
        selectionIndicator: null,
        tabButtonClassName: `${f} px-2`,
        unselectedTextClassName: "text-secondary",
        unselectedClassName: "hover:bg-surface-secondary",
      },
      M = "flex min-w-0 gap-1.5 rounded-full ring-inset",
      v = {
        ...x,
        listClassName: "-ms-3 flex min-w-0 items-center gap-1",
        selectedClassName: "bg-text/5 text-default",
        tabButtonClassName: `${M} min-h-9 px-3 leading-5 font-normal`,
        unselectedClassName: "hover:bg-secondary-ghost-hover",
      },
      y = {
        ...x,
        listClassName: "flex min-w-0 items-center",
        selectedClassName: "bg-secondary-ghost-hover text-default font-medium",
        tabButtonClassName: "flex min-w-0 rounded-full px-4 py-2.25 leading-5 ring-inset",
        unselectedClassName: "font-normal hover:bg-secondary-ghost-hover hover:text-default",
      },
      b = {
        text: {
          ...x,
          listClassName: "flex min-w-0 items-center justify-center gap-5",
          tabButtonClassName: "flex min-h-9 min-w-0 items-center font-medium",
          selectedClassName: "text-default font-semibold",
          unselectedTextClassName: "text-tertiary",
          unselectedClassName: "hover:text-default",
        },
        segmented: {
          closeButtonClassName: "px-1",
          itemClassName: "flex-1",
          listClassName: "border-default flex items-center rounded-lg border",
          segmentedEdges: !0,
          selectedClassName: "bg-text-emphasis/25 text-default",
          selectionIndicator: null,
          tabButtonClassName: "relative flex-1 rounded-none px-4 py-1.5 font-medium",
          unselectedTextClassName: "text-secondary",
          unselectedClassName: "hover:bg-text-emphasis/5",
        },
        toolbar: x,
        settings: { ...x, tabButtonClassName: `${f} button-toolbar` },
        search: {
          ...x,
          textSizeClassName: "text-base",
          listClassName: "flex min-w-0 items-center gap-px",
          selectedClassName: "bg-secondary-ghost-hover text-default",
          unselectedTextClassName: "text-tertiary",
          unselectedClassName: "hover:bg-secondary-ghost-hover",
          tabButtonClassName:
            "flex h-8 min-w-0 gap-1.5 rounded-[calc(var(--radius-2xl)-var(--spacing)-1px)] px-3 font-medium",
        },
        inset: {
          ...x,
          listClassName:
            "inline-flex min-w-0 max-w-full items-center gap-0.5 rounded-[10px] bg-surface-secondary/92 p-0.5",
        },
        page: {
          ...x,
          listClassName: "-ms-2 flex min-w-0 items-center gap-2",
          tabButtonClassName: `${x.tabButtonClassName} ring-inset`,
        },
        pill: {
          ...x,
          listClassName: "flex min-w-0 items-center gap-1",
          selectedClassName: "bg-text/5 text-default ring-1 ring-border-strong",
          tabButtonClassName:
            "flex min-w-0 gap-1.5 rounded-full border border-transparent px-4 py-2 font-medium ring-inset",
          unselectedTextClassName: "text-tertiary",
          unselectedClassName: "hover:bg-secondary-ghost-hover",
        },
        choice: { ...x, listClassName: "flex min-w-0 flex-wrap items-center gap-2" },
        filter: v,
        sectionFilter: {
          ...v,
          listClassName: "flex max-w-full min-w-0 flex-wrap items-center gap-2",
          tabButtonClassName: `${M} min-h-9 px-4 py-2 font-medium @lg:min-h-9.5 @lg:py-2.25`,
          textSizeClassName: "text-[0.9375rem]/5 @lg:text-[0.875rem]/5",
        },
        compactFilter: {
          ...v,
          listClassName: "flex min-w-0 items-center gap-1",
          tabButtonClassName: `${M} min-h-8 px-3 py-1.5 font-medium`,
          textSizeClassName: "text-[0.875rem]/5",
        },
        editor: {
          ...x,
          listClassName: "-ms-3 flex min-w-0 items-center gap-1 md:ms-0 md:gap-0",
          selectedClassName: "bg-text/5 text-default",
          tabButtonClassName:
            "flex min-h-9 min-w-0 gap-1.5 rounded-full px-3 leading-5 font-normal ring-inset md:min-h-9.5 md:px-4",
          unselectedClassName: "hover:bg-secondary-ghost-hover",
        },
        browse: {
          ...x,
          listClassName: "flex min-w-0 items-center gap-1",
          selectedClassName: "bg-secondary-ghost-hover text-default",
          tabButtonClassName:
            "flex h-9 min-w-0 rounded-full border border-transparent px-4 py-0 font-medium ring-inset",
          unselectedClassName: "hover:bg-background-secondary-ghost-hover/50 hover:text-default",
        },
        directory: {
          ...x,
          listClassName: "flex min-w-0 max-w-full items-center gap-0 p-px",
          selectedClassName: "bg-secondary-ghost-hover text-default",
          tabButtonClassName:
            "flex h-9 min-w-0 rounded-full border border-transparent px-4 py-0 text-sm leading-5 font-medium ring-inset",
          unselectedClassName: "hover:bg-secondary-ghost-hover",
        },
        segmentedPill: y,
        segmentedPillMuted: {
          ...y,
          unselectedTextClassName: "text-tertiary",
          unselectedClassName: "font-normal hover:bg-secondary-ghost-hover hover:text-default dark:text-text/50",
        },
        profile: {
          ...x,
          itemClassName: "flex-1",
          listClassName: "flex min-w-0 items-center",
          selectedClassName: "bg-secondary-ghost-hover text-default",
          tabButtonClassName:
            "flex h-9 w-full min-w-0 justify-center rounded-full border border-transparent px-3 py-0 font-medium",
          unselectedClassName: "hover:text-default",
        },
        icon: { ...x, listClassName: "flex max-w-full min-w-0 flex-wrap items-start justify-center gap-x-8 gap-y-2" },
        underline: {
          closeButtonClassName: "px-1",
          itemClassName: "shrink-0 pb-2",
          listClassName: "border-default flex min-w-0 items-start gap-8 border-b",
          segmentedEdges: !1,
          selectedClassName: "text-default",
          selectionIndicator: "underline",
          tabButtonClassName: "flex min-w-0 gap-1.5 font-medium",
          unselectedTextClassName: "text-secondary",
          unselectedClassName: "hover:text-default",
        },
      }
    function w(e) {
      let t,
        a = (0, n.c)(39),
        {
          tabs: d,
          selectedKey: s,
          onSelect: g,
          onTabClick: f,
          onTabHover: x,
          className: M,
          fill: v,
          scrollable: y,
          tabListRef: w,
          variant: S,
          ariaLabel: k,
          ariaLabelledBy: D,
          activationMode: P,
          animateSelection: _,
          dividerBefore: I,
        } = e,
        A = void 0 !== v && v,
        N = void 0 !== y && y,
        j = void 0 === S ? "segmented" : S,
        E = void 0 === P ? "automatic" : P,
        R = (0, r.useId)(),
        O = b[j],
        B = "inset" === j || "choice" === j,
        F = (0, u.Zj)(!B && "icon" !== j && "text-secondary" === O.unselectedTextClassName && "1244723012"),
        L = void 0 !== _ && _ && ("segmentedPill" === j || "segmentedPillMuted" === j),
        q = L ? "text-default font-medium" : O.selectedClassName
      if (
        a[0] !== E ||
        a[1] !== L ||
        a[2] !== k ||
        a[3] !== D ||
        a[4] !== M ||
        a[5] !== I ||
        a[6] !== A ||
        a[7] !== g ||
        a[8] !== f ||
        a[9] !== x ||
        a[10] !== O.closeButtonClassName ||
        a[11] !== O.itemClassName ||
        a[12] !== O.listClassName ||
        a[13] !== O.segmentedEdges ||
        a[14] !== O.selectionIndicator ||
        a[15] !== O.tabButtonClassName ||
        a[16] !== O.textSizeClassName ||
        a[17] !== O.unselectedClassName ||
        a[18] !== O.unselectedTextClassName ||
        a[19] !== N ||
        a[20] !== q ||
        a[21] !== s ||
        a[22] !== R ||
        a[23] !== w ||
        a[24] !== d ||
        a[25] !== F ||
        a[26] !== B ||
        a[27] !== j
      ) {
        let e,
          n,
          r = (0, i.A)(F ? "text-tertiary" : O.unselectedTextClassName, O.unselectedClassName),
          u = B ? p.$ : "button",
          v = A && "w-full",
          y = N && "hide-scrollbar overflow-x-auto overflow-y-hidden"
        ;(a[29] !== M || a[30] !== O.listClassName || a[31] !== v || a[32] !== y
          ? ((e = (0, i.A)(O.listClassName, v, y, M)),
            (a[29] = M),
            (a[30] = O.listClassName),
            (a[31] = v),
            (a[32] = y),
            (a[33] = e))
          : (e = a[33]),
          a[34] !== E || a[35] !== g || a[36] !== N || a[37] !== d
            ? ((n = (e) => {
                let t
                if (
                  e.altKey ||
                  e.ctrlKey ||
                  e.metaKey ||
                  e.shiftKey ||
                  !["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)
                )
                  return
                let a = Array.from(e.currentTarget.querySelectorAll('[role="tab"]')),
                  o = a.findIndex((t) => t === e.target)
                if (o < 0 || 0 === a.length) return
                ;(e.preventDefault(), e.stopPropagation())
                let n = "rtl" === getComputedStyle(e.currentTarget).direction
                ;((t =
                  "Home" === e.key
                    ? 0
                    : "End" === e.key
                      ? a.length - 1
                      : (o + (e.key === (n ? "ArrowLeft" : "ArrowRight") ? 1 : -1) + a.length) % a.length),
                  a[t]?.focus(),
                  N && a[t]?.scrollIntoView({ block: "nearest", inline: "nearest" }))
                let c = d[t]
                null != c && "automatic" === E && g(c.key, e.timeStamp)
              }),
              (a[34] = E),
              (a[35] = g),
              (a[36] = N),
              (a[37] = d),
              (a[38] = n))
            : (n = a[38]),
          (t = (0, o.jsx)("div", {
            ref: w,
            role: "tablist",
            tabIndex: -1,
            "aria-label": k,
            "aria-labelledby": D,
            className: e,
            onWheel: N ? T : void 0,
            onKeyDown: n,
            children: d.map((e, t) => {
              let a,
                n,
                p = e.key === s,
                M = p ? q : r,
                v = 0 === t,
                y = t === d.length - 1,
                b = {
                  id: null == e.panelId ? void 0 : `${e.panelId}-tab`,
                  type: "button",
                  role: "tab",
                  "aria-controls": e.panelId,
                  "aria-label": e.ariaLabel,
                  "aria-selected": p,
                  tabIndex: p ? 0 : -1,
                  onPointerEnter: null == x ? void 0 : () => x(e.key),
                  onClick: (t) => {
                    ;((p && "manual" !== E) || g(e.key, t.timeStamp), f?.(e.key))
                  },
                }
              return (
                "inset" === j
                  ? ((a = p ? "segmentedInsetSelected" : "ghost"), (n = "compact"))
                  : "choice" === j && ((a = p ? "choiceSelected" : "outlineGhost"), (n = "dialogAction")),
                (0, o.jsxs)(
                  "div",
                  {
                    className: (0, i.A)(
                      "relative flex min-w-0 items-center",
                      O.itemClassName,
                      A && "flex-1",
                      null != e.onClose && "group/tab",
                    ),
                    children: [
                      v || e.key !== I
                        ? null
                        : (0, o.jsx)("span", { "aria-hidden": !0, className: "mx-2 h-4 w-px shrink-0 bg-border" }),
                      "icon" === j
                        ? (0, o.jsx)(h, { ...b, icon: e.icon, size: "large", children: e.name })
                        : (0, o.jsxs)(u, {
                            ...b,
                            className: (0, i.A)(
                              A && "min-w-0 flex-1 justify-center",
                              L && "relative isolate",
                              !B && [
                                "cursor-interaction items-center select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
                                O.textSizeClassName ?? "text-sm",
                                O.tabButtonClassName,
                                N && "ring-inset",
                                O.segmentedEdges && v && "rounded-l-md",
                                O.segmentedEdges && y && "rounded-r-md",
                                "browse" === j && e.highlighted
                                  ? ["bg-yellow/15 text-yellow light:text-default", p && "ring-1 ring-border-strong"]
                                  : M,
                              ],
                            ),
                            color: a,
                            radius: "choice" === j ? "full" : void 0,
                            size: n,
                            children: [
                              L && p ? (0, o.jsx)(C, { layoutId: R }) : null,
                              null != e.icon
                                ? (0, o.jsx)("span", {
                                    "aria-hidden": "true",
                                    className: "icon-xs flex shrink-0 items-center justify-center",
                                    children: e.icon,
                                  })
                                : null,
                              A ? (0, o.jsx)("span", { className: "truncate", children: e.name }) : e.name,
                            ],
                          }),
                      "underline" === O.selectionIndicator && p
                        ? (0, o.jsx)("div", { className: "absolute inset-x-0 bottom-[-1px] h-px bg-neutral-solid" })
                        : null,
                      null != e.onClose
                        ? (0, o.jsx)("button", {
                            type: "button",
                            "aria-label": e.closeLabel,
                            className: (0, i.A)(
                              "cursor-interaction text-tertiary hover:text-default",
                              O.closeButtonClassName,
                            ),
                            onClick: e.onClose,
                            children: (0, o.jsx)(l.bF, {
                              "aria-hidden": !1,
                              asset16: c.Q,
                              legacyIcon: m.A,
                              legacyClassName: "icon-2xs",
                            }),
                          })
                        : null,
                      O.segmentedEdges && !y
                        ? (0, o.jsx)("div", { className: "h-full w-px self-stretch bg-border" })
                        : null,
                    ],
                  },
                  e.key,
                )
              )
            }),
          })),
          (a[0] = E),
          (a[1] = L),
          (a[2] = k),
          (a[3] = D),
          (a[4] = M),
          (a[5] = I),
          (a[6] = A),
          (a[7] = g),
          (a[8] = f),
          (a[9] = x),
          (a[10] = O.closeButtonClassName),
          (a[11] = O.itemClassName),
          (a[12] = O.listClassName),
          (a[13] = O.segmentedEdges),
          (a[14] = O.selectionIndicator),
          (a[15] = O.tabButtonClassName),
          (a[16] = O.textSizeClassName),
          (a[17] = O.unselectedClassName),
          (a[18] = O.unselectedTextClassName),
          (a[19] = N),
          (a[20] = q),
          (a[21] = s),
          (a[22] = R),
          (a[23] = w),
          (a[24] = d),
          (a[25] = F),
          (a[26] = B),
          (a[27] = j),
          (a[28] = t))
      } else t = a[28]
      return t
    }
    function T(e) {
      let t = e.deltaX || e.deltaY
      0 !== t && (e.currentTarget.scrollLeft = e.currentTarget.scrollLeft + t)
    }
    function C(e) {
      let t,
        a,
        c = (0, n.c)(5),
        { layoutId: i } = e,
        r = 0.25 * !(0, d.I)()
      return (
        c[0] !== r ? ((t = { type: "spring", duration: r, bounce: 0 }), (c[0] = r), (c[1] = t)) : (t = c[1]),
        c[2] !== i || c[3] !== t
          ? ((a = (0, o.jsx)(s.P.span, {
              "aria-hidden": !0,
              layoutId: i,
              initial: !1,
              className: "absolute inset-0 -z-10 rounded-full bg-secondary-ghost-hover",
              transition: t,
            })),
            (c[2] = i),
            (c[3] = t),
            (c[4] = a))
          : (a = c[4]),
        a
      )
    }
  },
  pYUv(e, t, a) {
    var o = a("zKw6"),
      n = a.n(o),
      c = a("DBCl"),
      i = a("bnxy")
    a.d(
      t,
      {},
      {
        $e: function (e) {
          return e.filter((t, a) => {
            let o = n().posix.normalize((0, i.XH)(t))
            return e.every((e, t) => {
              if (t === a) return !0
              let c = n().posix.normalize((0, i.XH)(e))
              return c === o ? t > a : !o.startsWith("/" === c ? c : `${c}/`)
            })
          })
        },
        Bw: function ({
          codexHome: e,
          executionCwd: t,
          isWorktreeMode: a,
          projectRootPaths: o,
          workspaceBrowserRoot: n,
        }) {
          return null != t && (a || (0, c.n9x)(t, e ?? void 0))
            ? [t, ...(0, c.gYy)(o)]
            : o.length > 0
              ? o
              : null == n
                ? []
                : [n]
        },
        pK: function ({
          activeWorkspaceRootPaths: e,
          executionRootPaths: t,
          isProjectless: a,
          isWorktreeMode: o,
          readThreadToolAvailable: n,
        }) {
          if (n) return o ? t : a ? [] : [...e, ...t]
        },
      },
    )
  },
  JM0a(e, t, a) {
    a.d(t, { l: () => p, H: () => u })
    var o = a("qmMi"),
      n = a("ANKV"),
      c = a("WiNP"),
      i = a("aqTO"),
      d = a("tSEg"),
      s = a("nf3G"),
      r = a("pYUv")
    let l = (0, o.un)(d.GD, ({ get: e, scope: t }) => {
        let a = e(c.V8, {
          conversationId: "local-thread" === t.value.routeKind ? t.value.conversationId : null,
          hostId: e(s.threadHostId$),
        })?.data?.latestWorktree
        return null == a ? (0, r.$e)(e(i.Xi)) : [a.workspaceRoot]
      }),
      m = (0, o.vP)(d.GD, null),
      u = (0, o.un)(d.GD, ({ get: e }) => {
        let t = e(s.threadHostId$),
          a = e(l),
          o = e(m),
          c = o?.projectKey === JSON.stringify([t, a]) ? o.target : null,
          i = "root" !== e(n.YC) ? c : null
        return {
          selectedHostId: c?.hostId ?? t,
          hostId: i?.hostId ?? t,
          roots: null == i ? a : [i.root],
          directory: i?.root ?? null,
          projectRoots: null != i && i.hostId !== t ? [i.root] : a,
        }
      })
    function p(e, t) {
      e.set(m, null == t ? null : { projectKey: JSON.stringify([e.get(s.threadHostId$), e.get(l)]), target: t })
    }
  },
  ubby(e, t, a) {
    var o = a("SRbQ"),
      n = a("qmMi"),
      c = a("GaA7"),
      i = a("OWtl")
    let d = (0, a("Nwp9").m3)("files-content-search-history", []),
      s = (0, n.A4)(
        i.u,
        (e) => ({ matches: [], loading: e.query.trim().length > 0, limited: !1, error: null }),
        (e, { set: t }) => {
          let a,
            n = c.appServices.workspaceSearch
          if (!e.query.trim() || null == n) return
          let i = !1,
            d = setTimeout(() => {
              ;(async () => {
                let c = { stack: [], error: void 0, hasError: !1 }
                try {
                  let d = (0, o.mS)(c, await n.search(e), !1)
                  if (i) return void (await d.cancel())
                  a = d.getReader()
                  let s = []
                  try {
                    for (;;) {
                      let { done: e, value: o } = await a.read()
                      if (e || i) break
                      "match" === o.type
                        ? (s.push(o.match), t({ matches: [...s], loading: !0, limited: !1, error: null }))
                        : t({
                            matches: s,
                            loading: !1,
                            limited: "done" === o.type && o.limited,
                            error: "error" === o.type ? o.code : null,
                          })
                    }
                  } finally {
                    ;(a.releaseLock(), (a = void 0))
                  }
                } catch (e) {
                  ;((c.error = e), (c.hasError = !0))
                } finally {
                  ;(0, o.hk)(c)
                }
              })().catch(() => {
                i || t({ matches: [], loading: !1, limited: !1, error: "search-failed" })
              })
            }, 50)
          return () => {
            ;((i = !0), clearTimeout(d), a?.cancel().catch(() => {}))
          }
        },
        { autoDispose: !0 },
      )
    a.d(t, {}, { P: s, n: d })
  },
  DIdv(e, t, a) {
    var o = a("w7Qu"),
      n = a("bWX0")
    let c = /^external-gdrive:file:([A-Za-z0-9_-]+)$/u,
      i = new Map([
        ["application/vnd.google-apps.document", "document"],
        ["application/vnd.google-apps.presentation", "presentation"],
        ["application/vnd.google-apps.spreadsheet", "spreadsheets"],
        ["application/vnd.openxmlformats-officedocument.presentationml.presentation", "presentation"],
        ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "spreadsheets"],
        ["application/vnd.openxmlformats-officedocument.wordprocessingml.document", "document"],
      ]),
      d = new Set([
        "c",
        "conf",
        "cpp",
        "css",
        "go",
        "h",
        "hpp",
        "java",
        "js",
        "json",
        "jsonl",
        "jsx",
        "log",
        "py",
        "rb",
        "rs",
        "sh",
        "ts",
        "tsx",
        "txt",
        "xml",
        "yaml",
        "yml",
      ]),
      s = new Set([
        "application/javascript",
        "application/json",
        "application/ld+json",
        "application/x-javascript",
        "application/x-ndjson",
        "application/xml",
        "application/yaml",
        "application/yml",
        "text/javascript",
      ]),
      r = new Map([
        ["application/x-ipynb+json", "ipynb"],
        ["application/vnd.ms-excel.sheet.macroenabled.12", "xlsx"],
        ["application/vnd.openxmlformats-officedocument.presentationml.presentation", "pptx"],
        ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "xlsx"],
        ["application/vnd.openxmlformats-officedocument.wordprocessingml.document", "docx"],
        ["text/csv", "csv"],
        ["text/tab-separated-values", "tsv"],
      ])
    function l(e) {
      let t = m(e)
      if (null != t) {
        let e = r.get(t)
        if (null != e) return e
      }
      let a = (null == e.file_extension ? null : (0, o.Yg)(`file.${e.file_extension}`)) ?? (0, o.Yg)(e.file_name)
      switch (a) {
        case "csv":
        case "docx":
        case "ipynb":
        case "pptx":
        case "tsv":
        case "xlsx":
          return a
        case "pdf":
        case "tex":
        case null:
          return null
      }
    }
    function m(e) {
      return e.mime_type?.split(";")[0]?.trim().toLowerCase() || null
    }
    a.d(
      t,
      {},
      {
        CR: function (e, { canStreamVideo: t = !1 } = {}) {
          var a, o, c, i
          let r, u, p
          if ("deep_research_report" === e.library_artifact_type) return "deep-research"
          let g = e.file_extension ? `${e.file_name}.${e.file_extension}` : e.file_name
          if (t && ("video" === e.library_file_category || m(e)?.startsWith("video/") || /\.(?:mp4|webm)$/iu.test(g)))
            return "video"
          if (((r = m((a = e))), "image" === a.library_file_category || r?.startsWith("image/") === !0)) return "image"
          if (
            ((u = m((o = e))), "pdf" === o.library_file_category || "application/pdf" === u || (0, n.ZH)(o.file_name))
          )
            return "pdf"
          if (null != l(e)) return "artifact"
          if ((0, n.e$)(g) || "text/markdown" === m(e)) return "markdown"
          let h = (0, n.Zo)(g)
          return "html" === h || "htm" === h || "text/html" === m(e)
            ? "html"
            : ((c = e),
                (i = h),
                (p = m(c)),
                "text" === c.library_file_category ||
                  p?.startsWith("text/") === !0 ||
                  (null != p && s.has(p)) ||
                  (null != i && d.has(i)))
              ? "text"
              : "unsupported"
        },
        FE: l,
        gv: function ({ fileId: e, mimeType: t, sourceUrl: a }) {
          let o = c.exec(e)?.[1],
            n = t?.split(";")[0]?.trim().toLowerCase(),
            d = null == n ? void 0 : i.get(n)
          if (null == o || null == d) return null
          let s = `https://docs.google.com/${d}/d/${o}/preview`
          if (null == a) return s
          if (!URL.canParse(a)) return null
          let r = new URL(a),
            l = r.searchParams.get("resourcekey")
          return null == l
            ? s
            : "https://docs.google.com" !== r.origin && "https://drive.google.com" !== r.origin
              ? null
              : `${s}?${new URLSearchParams({ resourcekey: l })}`
        },
      },
    )
  },
  N8b3(e, t, a) {
    a.d(t, { Yn: () => k, TA: () => D, WT: () => P })
    var o = a("qmMi"),
      n = a("DBCl"),
      c = a("PFjh"),
      i = a("E8Sp"),
      d = a("SPnB"),
      s = a("SGsN"),
      r = a("svjy"),
      l = a("mNPx"),
      m = a("e1xH"),
      u = a("BkKO"),
      p = a("tv8P"),
      g = a("yGJW"),
      h = a("H2L8"),
      f = a("OWtl"),
      x = a("kK7d"),
      M = a("eShZ"),
      v = a("NRR1"),
      y = a("jGsJ"),
      b = a("OoIX"),
      w = a("HNZf"),
      T = a("D550"),
      C = a("PzpM")
    let S = (0, o.bD)(f.u, (e) => void 0),
      k = (0, o.i1)(f.u, (e, { get: t }) => {
        let a = t(S, e)
        return a?.accountId === t(p.spaceAccountId$) && a?.userId === t(d.chatGptAuthenticatedUserId$) ? a : void 0
      }),
      D = (0, o.un)(f.u, ({ get: e }) =>
        e(C.z$).flatMap((t) => {
          let a = e(k, t.localPageId)
          return a?.response != null && "error" !== a.status
            ? []
            : [
                {
                  id: t.localPageId,
                  name: t.name,
                  title: t.name,
                  backingType: t.backingType,
                  serverSpaceId: t.space?.spaceId,
                  status: a?.status ?? "error",
                },
              ]
        }),
      )
    function P(e, { name: t, createSpace: o, invitations: f = [], appearance: D, resume: _ }) {
      let I,
        A,
        N = e.get(p.spaceAccountId$),
        j = e.get(d.chatGptAuthenticatedUserId$),
        E = e.get(d.o8)
      if (null == N) throw Error("space_account_unavailable")
      if (null != _ && (_.accountId !== N || _.userId !== j || null == _.space)) throw Error("space_setup_unavailable")
      let R = e.get(d.PO).accountUserId,
        O = _?.localPageId ?? `local-page-${crypto.randomUUID()}`
      null == _ &&
        (0, C.Bz)(e, {
          accountId: N,
          userId: j,
          localPageId: O,
          name: t,
          backingType: "drive",
          rootInitialization: "server",
          appearance: D,
          invitations: f.map((e) => ({ ...e, status: "pending" })),
        })
      let B = (0, T.a)((0, c.dj)(e), performance.now(), "space", { surface: "electron", emit: (t) => (0, y.V)(e, t) }),
        F = _?.space,
        L = !1,
        q = new AbortController(),
        G = () => e.get(C.z$).find((e) => e.localPageId === O),
        U = (a) => {
          let o = { localPageId: O, accountId: N, userId: j, name: t, status: a, response: I, metrics: B, retry: $ }
          ;(e.set(S, O, o), null != I && e.set(S, I.id, o))
        },
        $ = () => {
          if (null != A) return A
          if (L || q.signal.aborted || null == G())
            return Promise.reject(new DOMException("Space creation cancelled", "AbortError"))
          let c = (0, p.watchSpaceAccount)(e, N, j, R, E),
            f = AbortSignal.any([q.signal, c.signal]),
            y = e.watch(({ get: e }) => {
              e(C.z$).some((e) => e.localPageId === O) || q.abort()
            }),
            T = async () => {
              f.throwIfAborted()
              try {
                let a
                ;(null == F
                  ? ((a = await o(f)), B.creationRequestSucceeded())
                  : (a = await e
                      .get(p.createSpaceMutation$)
                      .mutateAsync({ requestBody: { name: t }, existingSpace: F, signal: f })),
                  f.throwIfAborted(),
                  (I = a),
                  (F = { spaceId: a.id, rootPageId: a.root_page_id }),
                  B.savedIdentity())
              } catch (a) {
                if (
                  (f.throwIfAborted(),
                  null != F &&
                    a instanceof M.FetchError &&
                    ((404 === a.status && "space_not_found" === a.errorCode) || 410 === a.status) &&
                    (await (async function (e, t) {
                      let a,
                        o = new Set()
                      for (;;) {
                        t.throwIfAborted()
                        let n = await x.CodexRequest.safeGet("/spaces/v2", {
                          parameters: { query: { status: "archived", limit: 50, cursor: a } },
                          signal: t,
                        })
                        if (
                          (t.throwIfAborted(),
                          n.items.some(
                            (t) => t.id === e.spaceId && t.root_page_id === e.rootPageId && null != t.deleted_at,
                          ))
                        )
                          return !0
                        if (null == (a = n.next_cursor ?? void 0) || o.has(a)) return !1
                        o.add(a)
                      }
                    })(F, f)))
                ) {
                  ;(f.throwIfAborted(),
                    y(),
                    B.cancel("creation_unavailable"),
                    (0, p.evictCachedDriveSpacePages)(e, F.spaceId, N),
                    (0, C.pu)(e, O),
                    e.set(S, O, void 0),
                    e.get(k, F.spaceId)?.localPageId === O && e.set(S, F.spaceId, void 0),
                    e
                      .get(s.Id)
                      .info(
                        e
                          .get(r.g)
                          .formatMessage({
                            id: "space.teamHome.setupUnavailable",
                            defaultMessage: "This space is no longer available",
                            description: "Shown when an unfinished Space can no longer be opened.",
                          }),
                      ))
                  return
                }
                F = (0, p.pendingSpaceInitialization)(a) ?? F
                let t = G()
                throw (
                  null != F
                    ? (B.savedIdentity(), null != t && (0, C.$q)(e, { ...t, space: F }))
                    : (a instanceof M.FetchError &&
                        a.status >= 400 &&
                        a.status < 500 &&
                        ![408, 499].includes(a.status)) ||
                      (L = !0),
                  B.fail((0, b.XY)(a)),
                  a
                )
              }
              let c = G(),
                i = null != c && !0 !== c.rootInitialized && "server" !== c.rootInitialization
              ;(null != c && (0, C.$q)(e, { ...c, space: F, rootInitialized: !i }),
                (0, p.cacheCreatedSpace)(e, N, I),
                e.query.setData(p.spaceQuery$, I.id, I),
                i || B.rootInitialized(I.root_page_id),
                await e.when(
                  ({ get: e }) =>
                    f.aborted ||
                    !e(C.z$).some((e) => e.localPageId === O) ||
                    e(p.spaceAccountId$) !== N ||
                    e(d.chatGptAuthenticatedUserId$) !== j ||
                    (void 0 !== R && e(v.jv) !== R) ||
                    e(v.$M) !== E ||
                    !e(m.pagesEnabled$) ||
                    e(u.LM)?.some((e) => e.id === I?.id) === !0,
                ),
                f.throwIfAborted(),
                U("creating"))
              let l = G()?.appearance,
                g = (0, n._R3)(l?.emoji),
                T = null == g ? null : { kind: "icon", value: g, color: (0, h.sj)(l?.theme) ?? "black" }
              if (i || null != T) {
                let { completeSpaceRootSetup: t } = await Promise.all([a.e(753405), a.e(193172), a.e(708398)]).then(
                  a.bind(a, "PluF"),
                )
                f.throwIfAborted()
                let o = await t(e, I, T, i, f)
                ;(f.throwIfAborted(),
                  (I = {
                    ...(e.query.getData(p.spaceQuery$, I.id) ?? I),
                    symbol: o,
                    can_edit_appearance: null == o && I.can_edit_appearance,
                  }),
                  e.query.setData(p.spaceQuery$, I.id, I),
                  (0, p.cacheCreatedSpace)(e, N, I))
                let n = G()
                ;(null != n && (0, C.$q)(e, { ...n, rootInitialized: !0 }), i && B.rootInitialized(I.root_page_id))
              }
              if (null == T && null != l && !0 === I.can_edit_appearance) {
                let t = await x.CodexRequest.safePatch("/spaces/v2/{space_id}/appearance", {
                  parameters: { path: { space_id: I.id } },
                  requestBody: l,
                  signal: f,
                })
                ;(f.throwIfAborted(),
                  (I = { ...(e.query.getData(p.spaceQuery$, I.id) ?? I), appearance: t }),
                  e.query.setData(p.spaceQuery$, I.id, I),
                  (0, p.cacheCreatedSpace)(e, N, I))
              }
              let D = G()
              null != D && (0, C.$q)(e, { ...D, appearance: void 0 })
              let P = G()?.invitations ?? [],
                _ = P.filter((e) => "shared" !== e.status)
              if (_.length > 0) {
                let t = await (async function (e, t, a, o, c) {
                  if ((o.throwIfAborted(), 0 === a.length)) return []
                  let i = { type: "space", id: t },
                    s = a.map(({ recipient: e, label: t, secondaryLabel: a, roleId: o }) => ({
                      action: "invite",
                      target: i,
                      recipient: e,
                      roleId: o,
                      invitee: { id: (0, w.hk)(e), label: t, secondaryLabel: a },
                    })),
                    r = new Map(),
                    l = new Set(),
                    m = (e) => {
                      if (o.aborted || l.has(e)) return
                      l.add(e)
                      let t = s.indexOf(e)
                      c?.(t, r.get(e) ?? a[t].recipient)
                    },
                    u = []
                  if (
                    (await e.queryClient
                      .getMutationCache()
                      .build(e.queryClient, {
                        mutationKey: [
                          "space",
                          "save-library-sharing",
                          e.get(d.chatGptAuthenticatedUserId$),
                          e.get(p.spaceAccountId$),
                        ],
                        networkMode: "always",
                        mutationFn: async ({ changes: t }) => {
                          ;(o.throwIfAborted(),
                            await (0, w.X5)(
                              e,
                              t,
                              void 0,
                              void 0,
                              o,
                              (e, t) => r.set(e, t.recipient),
                              (e, t) => {
                                u.push(
                                  t.then(
                                    () => m(e),
                                    () => void 0,
                                  ),
                                )
                              },
                              (e, t) => {
                                ;(r.set(e, t.recipient), m(e))
                              },
                            ))
                        },
                      })
                      .execute({ changes: s }),
                    await (0, n._qC)(Promise.all(u), o),
                    o.throwIfAborted(),
                    l.size < s.length)
                  )
                    try {
                      let t = await (0, w.gv)(e, i, o, !0)
                      ;(o.throwIfAborted(),
                        (0, w.TO)(t) &&
                          s.forEach((e, o) => {
                            let n = r.get(e) ?? a[o].recipient
                            t.shares.some((e) => (0, w.je)(e, n) && e.role_id === a[o].roleId) && m(e)
                          }))
                    } catch {
                      o.throwIfAborted()
                    }
                  return a.map((e, t) => {
                    let a = r.get(s[t]) ?? e.recipient
                    return { ...e, recipient: a, status: l.has(s[t]) ? "shared" : "failed" }
                  })
                })(e, I.id, _, f, (t, a) => {
                  if (f.aborted) return
                  let o = G()
                  if (null != o) {
                    let n = P.indexOf(_[t])
                    ;(0, C.$q)(e, {
                      ...o,
                      invitations: o.invitations.map((e, t) =>
                        t === n ? { ...e, recipient: a, status: "shared" } : e,
                      ),
                    })
                  }
                })
                f.throwIfAborted()
                let a = G()
                if (
                  (null != a && (0, C.$q)(e, { ...a, invitations: [...P.filter((e) => "shared" === e.status), ...t] }),
                  t.some((e) => "failed" === e.status))
                )
                  throw Error("space_creation_invitations_incomplete")
              }
              ;(y(), (0, C.FT)(e, O), U("created"))
            }
          return (
            U("creating"),
            (A = Promise.resolve()
              .then(() =>
                null == navigator.locks
                  ? T()
                  : navigator.locks.request(`space-setup:${JSON.stringify([N, j, O])}`, { signal: f }, T),
              )
              .catch((t) => {
                if (f.aborted)
                  throw (
                    q.abort(),
                    e.set(S, O, void 0),
                    null != I && e.set(S, I.id, void 0),
                    B.cancel(c.signal.aborted ? "account_changed" : "explicit_cancel"),
                    t
                  )
                throw (
                  L ? e.set(S, O, void 0) : U("error"),
                  (0, b.XY)(t) || (0, l.ZD)(e.get(g.YV), "pages.space.create", t),
                  B.fail(),
                  (() => {
                    let { pathname: t, search: a } = e.get(i.gM)
                    e.get(p.spaceAccountId$) === N &&
                      e.get(d.chatGptAuthenticatedUserId$) === j &&
                      ("/spaces/new" !== t || new URLSearchParams(a).get("creation") !== O) &&
                      e
                        .get(s.Id)
                        .warning(
                          e
                            .get(r.g)
                            .formatMessage({
                              id: "codex.space.sidebar.spaceSetupNeedsAttention",
                              defaultMessage: "Space setup needs attention",
                              description:
                                "Toast displayed when a shared Space setup needs retry or recovery. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
                            }),
                        )
                  })(),
                  t
                )
              })
              .finally(() => {
                ;(y(), c.stop(), (A = void 0))
              }))
          )
        }
      return ($().catch(() => {}), O)
    }
  },
  tUjg(e, t, a) {
    let o = (0, a("Qgfj").YK)({
      pageOpenFailed: { id: "codex.chatGptSearch.pageOpenFailed", defaultMessage: "Unable to open this page" },
      dialogDescriptionWithSpaces: {
        id: "codex.chatGptSearch.dialogDescriptionWithSpaces",
        defaultMessage: "Search your chats, projects, images, documents, and spaces",
      },
      spaceFile: { id: "codex.chatGptSearch.spaceFile", defaultMessage: "File in Space" },
    })
    a.d(t, {}, { h: o })
  },
  idI8(e, t, a) {
    var o = a("Wj4L"),
      n = a("mXik"),
      c = a("r9ga"),
      i = a("gc8z"),
      d = a("tv8P")
    a.d(
      t,
      {},
      {
        openGlobalSearchSpacePage: async function (e, t, a, s, r, l) {
          if (!r()) return
          let m = e.get(d.spaceAccountId$)
          if (null == m) return
          let u = e.get(d.loadedSpacePageMetadata$, s.page_id)
          ;(u?.access.can_read === !1 && (0, i.V)(e, s.page_id),
            (null == l && (0, c.Nk)(e, t, a, s.page_id, {})) ||
              (0, n.U)(e, t, a, m, s.page_id, {
                onOpenPage: l,
                rememberCollectionOrigin: !1,
                pagePreview:
                  u?.access.can_read &&
                  null == u.deleted_at &&
                  null == u.site_project_id &&
                  !1 !== u.display_metadata_included &&
                  "page" === (0, o.th)(u) &&
                  null != u.title
                    ? { title: u.title, documentType: "page", textPageCard: { symbol: u.symbol } }
                    : void 0,
              }))
        },
      },
    )
  },
  mXik(e, t, a) {
    var o = a("zd8w"),
      n = a("E8Sp"),
      c = a("SPnB"),
      i = a("r9ga"),
      d = a("SEOK")
    a.d(
      t,
      {},
      {
        U: function (
          e,
          t,
          a,
          s,
          r,
          { rootPageId: l, personal: m = !1, rememberCollectionOrigin: u = !0, pagePreview: p, onOpenPage: g } = {},
        ) {
          if (null != g) return void (null == p ? g(r) : g(r, { pagePreview: p }))
          let h = e.get(c.chatGptAuthenticatedUserId$),
            f = null != p && null != s && null != h ? { ...p, accountId: s, userId: h, pageId: r } : void 0,
            x = (o, c) =>
              (0, n.VK)(
                e,
                t,
                o,
                "string" == typeof o && (u || null != f)
                  ? {
                      ...c,
                      ...(null != f && { flushSync: !0 }),
                      state: {
                        ...c?.state,
                        ...(u && { pageListOrigin: { accountId: s, pageId: r, pathname: o, location: a } }),
                        ...(null != f && { pagePreview: f }),
                      },
                    }
                  : c,
              )
          if (null != l) (0, i.C_)(e, x, a, s, l, r)
          else if (m) (0, i.Kt)(e, x, s, r)
          else {
            let t = (0, i.mI)(e, r),
              n = {
                state: {
                  ...(0, d.$)(a, s, r, t),
                  sidebarArea: "space",
                  spaceSidebarAccountId: s,
                  sidebarPrimaryContent: !0,
                },
              }
            ;(0, o.startTransition)(() => {
              x(t, n)
            })
          }
        },
      },
    )
  },
  rTPf(e, t, a) {
    var o = a("CpsU"),
      n = a.n(o),
      c = a("qmMi"),
      i = a("DBCl"),
      d = a("SPnB"),
      s = a("Kwur"),
      r = a("tv8P"),
      l = a("AOG7"),
      m = a("OWtl"),
      u = a("Wuyk"),
      p = a("rvFo")
    let g = (0, c.T1)(m.u, ({ accountId: e, userId: t, namesOnly: a = !1 }, { scope: o }) => {
        let c = null
        return (d, l) => {
          l.throwIfAborted()
          let m = (0, i.udX)()
          if (c?.account?.signal.aborted || null == c) {
            let i = { lookups: [{ accountUserId: d, signal: l, result: m }] }
            c = i
            let u = (0, r.watchSpaceAccount)(o, e, t)
            ;((i.account = u),
              setTimeout(() => {
                c === i && (c = null)
                let t = i.lookups.filter((e) => !e.signal.aborted || (e.result.reject(e.signal.reason), !1))
                Promise.all(
                  n()(t, 50).map(async (t) => {
                    try {
                      u.signal.throwIfAborted()
                      let o = await s.Request.safeGet("/spaces/people", {
                        parameters: {
                          query: {
                            account_id: e,
                            ...(a ? { names_only: !0 } : { include_profile_details: !0 }),
                            account_user_ids: t.map((e) => e.accountUserId),
                            limit: t.length,
                          },
                        },
                        signal: u.signal,
                      })
                      for (let e of (u.signal.throwIfAborted(), t))
                        e.result.resolve(o.items.find((t) => t.account_user_id === e.accountUserId) ?? null)
                    } catch (e) {
                      for (let a of t) a.result.reject(e)
                    }
                  }),
                ).finally(u.stop)
              }, 0))
          } else c.lookups.push({ accountUserId: d, signal: l, result: m })
          return m.promise
        }
      }),
      h = (0, c.vU)(m.u, (e, { get: t }) => {
        let a = t(r.spaceAccountId$),
          o = t(d.chatGptAuthenticatedUserId$),
          n = t(d.kf),
          c = null == a ? null : t(g, { accountId: a, userId: o })
        return {
          enabled: null != a && null != o && "loaded" === n.status && "workspace" === n.structure,
          queryKey: ["space-person", a, o, e],
          staleTime: 3e5,
          retry: u.kh,
          refetchOnMount: !0,
          queryFn: async ({ signal: t }) => {
            if (null == c) throw Error("account id is required")
            let a = await c(e, t)
            return (t.throwIfAborted(), a)
          },
        }
      }),
      f = (0, c.vU)(m.u, (e, { get: t }) => {
        let a = t(r.spaceAccountId$),
          o = t(d.chatGptAuthenticatedUserId$),
          n = t(d.kf),
          c =
            "loaded" === n.status
              ? "workspace" === n.structure
              : "workspace" === n.structureAtLogin && a === t(d.chatGptAuthenticatedAccountId$)
        return {
          enabled: null != a && null != o && c,
          queryKey: ["space-person-name", a, o, e],
          staleTime: 3e5,
          retry: !1,
          queryFn: async ({ signal: n }) => {
            if (null == a) return null
            let c = t(g, { accountId: a, userId: o, namesOnly: !0 }),
              i = await c(e, n)
            return (n.throwIfAborted(), i?.name?.trim() || null)
          },
        }
      }),
      x = (0, c.i1)(m.u, (e, { get: t }) => {
        if (null == e) return null
        let a = t(h, e, { enabled: !1 }).data?.name?.trim()
        if (a) return a
        let o = t(f, e)
        return o.isError ? t(h, e).data?.name?.trim() || null : (o.data ?? null)
      }),
      M = (0, c.vU)(m.u, (e, { get: t, scope: a }) => {
        let o = t(r.spaceAccountId$),
          n = t(d.chatGptAuthenticatedUserId$)
        return {
          enabled: null != o && e.length > 0,
          queryKey: ["space-people", o, n, e],
          staleTime: p.D.THIRTY_SECONDS,
          gcTime: p.D.ONE_MINUTE,
          retry: u.kh,
          refetchOnMount: !0,
          queryFn: async ({ signal: t }) => {
            if (
              (await new Promise((e, a) => {
                let o = () => {
                    ;(clearTimeout(n), a(new DOMException("Aborted", "AbortError")))
                  },
                  n = setTimeout(() => {
                    ;(t.removeEventListener("abort", o), e())
                  }, 150)
                ;(t.addEventListener("abort", o, { once: !0 }), t.aborted && o())
              }),
              null == o)
            )
              throw Error("account id is required")
            let c = (0, r.watchSpaceAccount)(a, o, n),
              i = AbortSignal.any([t, c.signal])
            try {
              i.throwIfAborted()
              let t = await (0, l.We)(o, e, i)
              for (let e of (i.throwIfAborted(), t)) {
                let t = a.query.snapshot(h, e.account_user_id),
                  o = t.getData(),
                  n = e.profile_username === o?.profile_username,
                  c = {
                    ...o,
                    ...e,
                    name: e.name ?? o?.name ?? null,
                    profile_username: n ? o?.profile_username : null,
                    profile_url: n ? o?.profile_url : null,
                  }
                ;((c.avatar_url = c.avatar_url ?? o?.avatar_url),
                  t.setData(c, { updatedAt: n ? (a.queryClient.getQueryState(t.queryKey)?.dataUpdatedAt ?? 0) : 0 }))
              }
              return t.map((e) => ({ ...e, name: e.name ?? null }))
            } finally {
              c.stop()
            }
          },
        }
      }),
      v = (0, c.i1)(m.u, (e, { get: t }) =>
        null == e || null == t(r.spaceAccountId$) ? null : (t(h, e).data?.avatar_url ?? null),
      ),
      y = (0, c.i1)(m.u, (e, { get: t }) => (null == e ? null : t(h, e).data?.name?.trim() || null))
    a.d(t, {}, { DC: M, Ks: h, ik: y, tg: v, xW: x })
  },
  ZsYZ(e, t, a) {
    var o = a("SZCv"),
      n = a.n(o),
      c = a("qmMi"),
      i = a("RaBo"),
      d = a("SPnB"),
      s = a("OWtl"),
      r = a("khOd"),
      l = a("OMIV"),
      m = a("eShZ"),
      u = a("PVyj"),
      p = a("N8b3"),
      g = a("e1xH"),
      h = a("jAir"),
      f = a("MdGo"),
      x = a("MvVt"),
      M = a("RGBC"),
      v = a("BkKO"),
      y = a("tv8P")
    let b = (0, c.un)(s.u, ({ get: e }) => (e(y.spacesQuery$).data?.items ?? e(v.LM))?.map((e) => e.root_page_id), {
        isEqual: n(),
      }),
      w = (0, c.un)(s.u, ({ get: e }) => e(p.TA).map(({ id: e }) => e), { isEqual: n() }),
      T = (0, c.un)(
        s.u,
        ({ get: e }) => {
          if (!e(r.GB)) return
          let t = e(b),
            a = e(u.aP, { accountId: e(y.spaceAccountId$), userId: e(d.chatGptAuthenticatedUserId$) }),
            o = e(l.JW, "2881922323") && "available" === e(i.ND),
            n = new Set([
              ...(t ?? []),
              ...e(M.ug),
              ...e(y.pinnedSpacePageIds$),
              ...e(w),
              ...(0 === a.length ? [] : (0, u.p9)(e(y.visibleSpacePages$)?.items ?? [], a)),
            ]),
            c = e(x.QI)
          return c
            ?.filter(({ id: t, file: a, page: c }) => {
              if (null != a) {
                if ("site" !== a.node.library_artifact_type) return !0
                let e = a.node.site_metadata
                return o && e?.status === "active" && !!e.live_url && null == a.node.trashed_at
              }
              if (n.has(t) || c?.is_space_root) return !1
              let i = e(y.inMemorySpacePageMetadata$, t),
                d = e(f.rk, { source: { kind: "catalog" }, pageId: t }) ?? i
              return (
                !i?.is_space_root &&
                !d?.is_space_root &&
                (null == d || (null == d.deleted_at && d.access.can_read && (e(g.bd) || null == d.site_project_id)))
              )
            })
            .map(({ id: e, file: t }) => ({ id: e, file: t }))
        },
        { isEqual: n() },
      ),
      C = (0, c.i1)(s.u, (e, { get: t }) => t(x.QI)?.find((t) => t.id === e)?.pageTitle),
      S = (0, c.i1)(
        s.u,
        (e, { get: t }) => {
          let a = t(x.QI)?.find((t) => t.id === e)?.page,
            { data: o, error: n, errorUpdatedAt: c } = t(y.spacePageAncestryQuery$, e, { enabled: null == a }),
            i = t(x.rC, { enabled: !1 }).dataUpdatedAt
          if (n instanceof m.FetchError && [403, 404, 410].includes(n.status) && (null != a || c >= i)) return
          let d = o?.metadata.access.can_read
              ? o.metadata
              : (t(f.rk, { source: { kind: "catalog" }, pageId: e }) ?? o?.metadata),
            s = null != a && (null == d || (d.access.can_read && null == d.deleted_at && (0, h.gN)(a, d))) ? a : d
          if (null != s && null == s.deleted_at && s.access.can_read && (t(g.bd) || null == s.site_project_id)) return s
        },
        { isEqual: n() },
      ),
      k = (0, c.un)(
        s.u,
        ({ get: e }) =>
          e(x.QI)?.some(({ id: t, file: a, page: o }) => {
            if (null != a || null != o) return !1
            let n = e(f.rk, { source: { kind: "catalog" }, pageId: t }) ?? e(y.inMemorySpacePageMetadata$, t)
            if (null != n) return null != n.deleted_at || !n.access.can_read
            let { error: c, errorUpdatedAt: i } = e(y.spacePageAncestryQuery$, t, { enabled: !1 })
            return (
              c instanceof m.FetchError &&
              [403, 404, 410].includes(c.status) &&
              i > 0 &&
              e(x.rC, { enabled: !1 }).dataUpdatedAt > i
            )
          }) ?? !1,
      ),
      D = (0, c.i1)(
        s.u,
        (e, { get: t }) => {
          let a = t(y.spacesQuery$)
          return {
            hasCatalogTree: null != a.data || null != t(y.spacePageTreeSpaces$),
            hasPages: e && null != t(y.visibleSpacePages$),
            hasSpaces: null != a.data,
            spacesError: a.isError,
          }
        },
        { isEqual: n() },
      )
    a.d(t, {}, { $L: S, E7: D, IF: T, Ri: C, cl: k })
  },
  OY5W(e, t, a) {
    var o = a("D7Ms"),
      n = a("i5ac"),
      c = a.n(n),
      i = a("qmMi"),
      d = a("SPnB"),
      s = a("Kwur"),
      r = a("Fk6e"),
      l = a("gLoR"),
      m = a("OWtl"),
      u = a("O666")
    let p = (0, i.un)(m.u, ({ get: e }) => {
        let t = e(d.m0),
          a = e(d.o8)
        return "allowed" === t.status && "accountId" in t && "personal" === t.accountStructure && null != a
          ? { accountId: t.accountId, userId: a }
          : null
      }),
      g = (0, i.i1)(m.u, (e, { get: t }) => {
        let a = t(r.CD)
        if (("profile_page" === e.parameter && e.workspaceId !== a) || (null == a && null == t(p))) return null
        let o = null == a ? "personal" : "workspace"
        return t(u.H$, { layer: "personal" === o ? "1643588614" : "1030612179", parameter: e.parameter }) ? o : null
      }),
      h = (0, i.N3)(m.u, ({ query: e, limit: t }, { get: a }) => {
        let n = a(p)
        return {
          queryKey: ["public-profile-search-pages", n, e, t],
          initialPageParam: 0,
          queryFn:
            null == n
              ? o.hT
              : ({ pageParam: a, signal: o }) =>
                  s.Request.safeGet("/profiles/", {
                    expectedIdentity: n,
                    parameters: { query: { query: e, limit: t, offset: a } },
                    signal: o,
                  }),
          getNextPageParam: (e) => (e.has_more ? e.offset + e.limit : void 0),
          staleTime: 0,
          gcTime: 0,
          refetchOnMount: "always",
          retry: !1,
        }
      }),
      f = (0, i.i1)(m.u, ({ search: e, debouncing: t, limit: a }, { get: o }) => {
        let n = null != e && e.length > 0 && "@" !== e && e.length <= 100,
          i = n && !t ? o(h, { query: e, limit: a }) : null,
          d = i?.isFetchingNextPage === !0,
          s = i?.isFetchNextPageError === !0,
          r = n && (null == i || i.isPending || ("idle" !== i.fetchStatus && !d)),
          l = i?.isError === !0 && !s,
          m = r || l ? [] : (i?.data?.pages.flatMap((e) => e.items) ?? [])
        return {
          members: c()(
            m.flatMap((e) => (e.username ? [{ member: e, profileUrl: `/u/${encodeURIComponent(e.username)}` }] : [])),
            ({ member: e }) => e.username?.toLowerCase(),
          ),
          showSearchResults: n,
          hasLoadedResults: i?.data != null,
          isLoading: r,
          isError: l,
          isSearching: r || d,
          hasNextPage: i?.hasNextPage === !0 && !s && !r && !l,
          isFetchingNextPage: d,
          isFetchNextPageError: s,
          fetchNextPage: () => {
            i?.fetchNextPage()
          },
          refetch: i?.refetch,
        }
      }),
      x = (0, i.i1)(m.u, ({ mode: e, search: t, debouncing: a }, { get: o }) =>
        o("workspace" === e ? l.E8 : f, { search: t, debouncing: a }),
      )
    a.d(t, {}, { DG: f, Jb: g, kL: x, n5: p })
  },
  IrSO(e, t, a) {
    var o = a("qmMi"),
      n = a("ASxG"),
      c = a("SPnB"),
      i = a("Fk6e"),
      d = a("OWtl"),
      s = a("kpIY"),
      r = a("Nwp9"),
      l = a("OY5W")
    let m = n.Ikc({
        id: n.YjP().min(1),
        account_user_id: n.YjP().min(1),
        email: n.YjP().nullable(),
        name: n.YjP().nullable(),
        avatar_url: n.YjP().nullable().optional(),
        profile_username: n.YjP().nullable().optional(),
        profile_url: n.YjP().trim().min(1),
      }),
      u = n.Ikc({
        username: n.YjP().trim().min(1),
        display_name: n.YjP().nullable().optional(),
        profile_picture_url: n.YjP().nullable().optional(),
      }),
      p = n.g1P(n.YjP(), n.L5J()),
      g = (0, o.i1)(d.u, (e, { get: t }) => {
        if ("personal" === e) {
          let e = t(l.n5)
          return null == e
            ? null
            : `personal-profile-search-recent-profiles-v1:${JSON.stringify([e.userId, e.accountId])}`
        }
        let a = t(i.CD),
          o = t(c.o8)
        return null == a || null == o ? null : `workspace-member-search-recent-profiles-v1:${JSON.stringify([o, a])}`
      }),
      h = (0, r.Kn)((e) => e, void 0),
      f = (0, o.i1)(d.u, (e, { get: t }) => {
        let a = null == e ? null : t(g, e)
        if (null == a) return []
        let o = p.safeParse(t(h, a)).data,
          n = "workspace" === e ? m : u
        return Object.values(o ?? {})
          .reverse()
          .flatMap((e) => {
            let t = n.safeParse(e).data
            return null == t
              ? []
              : [
                  {
                    member: t,
                    profileUrl: "account_user_id" in t ? t.profile_url : `/u/${encodeURIComponent(t.username)}`,
                  },
                ]
          })
          .slice(0, 3)
      })
    a.d(
      t,
      {},
      {
        H: function (e, t) {
          let a = "account_user_id" in t,
            o = e.get(g, a ? "workspace" : "personal"),
            n = (a ? m : u).safeParse(t).data
          if (null == o || null == n) return
          let c = "account_user_id" in n ? n.account_user_id : `@${n.username.toLowerCase()}`
          ;(0, s.EG)(o, { entries: { [c]: { value: n } }, maxEntries: 10 })
        },
        P: f,
      },
    )
  },
  mSaF(e, t, a) {
    var o = a("iRMi"),
      n = a("yGJW")
    let c = {
      command_menu_all: o.CodexProfileViewEntryPoint.CODEX_PROFILE_VIEW_ENTRY_POINT_COMMAND_MENU_ALL,
      command_menu_people: o.CodexProfileViewEntryPoint.CODEX_PROFILE_VIEW_ENTRY_POINT_COMMAND_MENU_PEOPLE,
      profile_search: o.CodexProfileViewEntryPoint.CODEX_PROFILE_VIEW_ENTRY_POINT_PROFILE_SEARCH,
    }
    a.d(
      t,
      {},
      {
        y: function (e, t) {
          return ((0, n.yy)(e, o.CodexProfilePageEntrypointClicked, { source: t }), { profileEntryPoint: c[t] })
        },
      },
    )
  },
  AOG7(e, t, a) {
    var o = a("QosV"),
      n = a("T0Rc"),
      c = a("UOa8"),
      i = a("rvFo"),
      d = a("kK7d"),
      s = a("GEsy"),
      r = a("eShZ")
    async function l(e, t, a, { includeProfilePhotos: o = !1, includeTotal: n, limit: c = 10 } = {}) {
      return (
        await d.CodexRequest.safeGet("/accounts/{account_id}/users", {
          parameters: {
            path: { account_id: e },
            query: { limit: c, offset: 0, query: t, include_profile_photos: o, include_total: n },
          },
          signal: a,
        })
      ).items
    }
    a.d(
      t,
      {},
      {
        AB: l,
        C4: async function (e, t, a) {
          let o = t.trim().toLowerCase(),
            n = await l(e, o, a)
          return n.find((e) => e.email?.trim().toLowerCase() === o)?.account_user_id
        },
        Nc: function (e, t) {
          let a,
            r,
            l,
            m,
            u,
            p,
            g = (0, o.c)(18)
          g[0] !== t ? ((a = void 0 === t ? {} : t), (g[0] = t), (g[1] = a)) : (a = g[1])
          let { includeMemberCounts: h } = a,
            f = void 0 !== h && h,
            { accountId: x, authMethod: M } = (0, c.As)()
          g[2] !== e ? ((r = e.trim()), (g[2] = e), (g[3] = r)) : (r = g[3])
          let v = r,
            y = (0, s.o)(v, 150)
          ;(g[4] !== f ? ((l = f ? ["member-counts"] : []), (g[4] = f), (g[5] = l)) : (l = g[5]),
            g[6] !== x || g[7] !== v || g[8] !== l
              ? ((m = ["workspace-groups", x, v, ...l]), (g[6] = x), (g[7] = v), (g[8] = l), (g[9] = m))
              : (m = g[9]))
          let b = ("chatgpt" === M || "chatgptAuthTokens" === M) && null != x && v.length > 0 && v === y
          return (
            g[10] !== x || g[11] !== f || g[12] !== v
              ? ((u = async (e) => {
                  let { signal: t } = e
                  if (null == x) throw Error("account id is required")
                  return (
                    await d.CodexRequest.safeGet("/accounts/{account_id}/groups", {
                      parameters: {
                        path: { account_id: x },
                        query: { limit: 10, offset: 0, query: v, include_member_counts: f, include_total: !1 },
                      },
                      signal: AbortSignal.any([t, AbortSignal.timeout(15e3)]),
                    })
                  ).items
                }),
                (g[10] = x),
                (g[11] = f),
                (g[12] = v),
                (g[13] = u))
              : (u = g[13]),
            g[14] !== m || g[15] !== b || g[16] !== u
              ? ((p = {
                  queryKey: m,
                  enabled: b,
                  networkMode: "always",
                  refetchOnReconnect: !0,
                  retry: !1,
                  queryFn: u,
                  staleTime: i.D.ONE_MINUTE,
                }),
                (g[14] = m),
                (g[15] = b),
                (g[16] = u),
                (g[17] = p))
              : (p = g[17]),
            (0, n.I)(p)
          )
        },
        Nv: function (e, t) {
          let a,
            d,
            r,
            m,
            u,
            p,
            g = (0, o.c)(18)
          g[0] !== t ? ((a = void 0 === t ? {} : t), (g[0] = t), (g[1] = a)) : (a = g[1])
          let { includeProfilePhotos: h } = a,
            f = void 0 !== h && h,
            { accountId: x, authMethod: M } = (0, c.As)()
          g[2] !== e ? ((d = e.trim()), (g[2] = e), (g[3] = d)) : (d = g[3])
          let v = d,
            y = (0, s.o)(v, 150)
          ;(g[4] !== f ? ((r = f ? ["profile-photos"] : []), (g[4] = f), (g[5] = r)) : (r = g[5]),
            g[6] !== x || g[7] !== v || g[8] !== r
              ? ((m = ["workspace-users", x, v, ...r]), (g[6] = x), (g[7] = v), (g[8] = r), (g[9] = m))
              : (m = g[9]))
          let b = ("chatgpt" === M || "chatgptAuthTokens" === M) && null != x && v.length > 0 && v === y
          return (
            g[10] !== x || g[11] !== f || g[12] !== v
              ? ((u = (e) => {
                  let { signal: t } = e
                  if (null == x) throw Error("account id is required")
                  return l(x, v, AbortSignal.any([t, AbortSignal.timeout(15e3)]), { includeProfilePhotos: f })
                }),
                (g[10] = x),
                (g[11] = f),
                (g[12] = v),
                (g[13] = u))
              : (u = g[13]),
            g[14] !== m || g[15] !== b || g[16] !== u
              ? ((p = {
                  queryKey: m,
                  enabled: b,
                  networkMode: "always",
                  refetchOnReconnect: !0,
                  retry: !1,
                  queryFn: u,
                  staleTime: i.D.ONE_MINUTE,
                }),
                (g[14] = m),
                (g[15] = b),
                (g[16] = u),
                (g[17] = p))
              : (p = g[17]),
            (0, n.I)(p)
          )
        },
        We: async function (e, t, a) {
          try {
            return (
              await d.CodexRequest.safeGet("/spaces/people", {
                parameters: { query: { account_id: e, query: t, limit: 10, offset: 0 } },
                signal: a,
              })
            ).items
          } catch (e) {
            if (!(e instanceof r.FetchError && 404 === e.status)) throw e
          }
          return l(e, t, a)
        },
      },
    )
  },
  g0N6(e, t, a) {
    let o = (0, a("ESTr").a)({
      name: "circle-person-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.474609, y: 1.474609, width: 13.050781, height: 13.050781 },
        visualBounds: { x: 1.474609, y: 1.474609, width: 13.050781, height: 13.050781 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "circular",
        bounds: { x: 1.474609, y: 1.474609, width: 13.050781, height: 13.050781 },
        center: { x: 8, y: 8 },
        insets: { top: 1.474609, right: 1.47461, bottom: 1.47461, left: 1.474609 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8, y: 8 }, foreground: { x: 8, y: 8 } },
      },
      capabilities: ["icon"],
      body: '<path d="M8 4.1416C9.39452 4.1416 10.5254 5.27247 10.5254 6.66699C10.5251 8.06129 9.39436 9.19238 8 9.19238C6.60564 9.19238 5.47487 8.06129 5.47461 6.66699C5.47461 5.27247 6.60548 4.1416 8 4.1416ZM8 5.19238C7.18538 5.19238 6.52539 5.85237 6.52539 6.66699C6.52565 7.48139 7.18554 8.1416 8 8.1416C8.81446 8.1416 9.47435 7.48139 9.47461 6.66699C9.47461 5.85237 8.81462 5.19238 8 5.19238Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M8 1.47461C11.6037 1.47461 14.5254 4.39634 14.5254 8C14.5254 11.6037 11.6037 14.5254 8 14.5254C4.39634 14.5254 1.47461 11.6037 1.47461 8C1.47461 4.39634 4.39634 1.47461 8 1.47461ZM8 11.1924C6.82222 11.1925 5.78204 11.7791 5.15332 12.6768C5.98281 13.1827 6.95721 13.4746 8 13.4746C9.04297 13.4746 10.0171 13.1819 10.8467 12.6758C10.2178 11.7786 9.17734 11.1925 8 11.1924ZM8 2.52539C4.97624 2.52539 2.52539 4.97624 2.52539 8C2.52539 9.60307 3.21462 11.0447 4.3125 12.0459C5.13249 10.8944 6.47756 10.1417 8 10.1416C9.52227 10.1417 10.8667 10.8946 11.6865 12.0459C12.7847 11.0447 13.4746 9.60333 13.4746 8C13.4746 4.97624 11.0238 2.52539 8 2.52539Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    a.d(t, {}, { $: o })
  },
  Nol6(e, t, a) {
    let o = (0, a("ESTr").a)({
      name: "list-circle-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.365234, y: 2.139648, width: 13.160156, height: 11.728516 },
        visualBounds: { x: 1.365234, y: 2.139648, width: 13.160156, height: 11.728516 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.365234, y: 2.139648, width: 13.160156, height: 11.728516 },
        center: { x: 7.945312, y: 8.003906 },
        insets: { top: 2.139648, right: 1.47461, bottom: 2.131836, left: 1.365234 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.945312, y: 8.003906 }, foreground: { x: 7.945312, y: 8.003906 } },
      },
      capabilities: ["icon"],
      body: '<path d="M3.89062 8.81738C5.28506 8.81738 6.41588 9.94837 6.41602 11.3428C6.41602 12.7373 5.28514 13.8682 3.89062 13.8682C2.49611 13.8682 1.36523 12.7373 1.36523 11.3428C1.36537 9.94837 2.49619 8.81738 3.89062 8.81738ZM3.89062 9.86816C3.07609 9.86816 2.41615 10.5283 2.41602 11.3428C2.41602 12.1574 3.076 12.8174 3.89062 12.8174C4.70525 12.8174 5.36523 12.1574 5.36523 11.3428C5.3651 10.5283 4.70516 9.86816 3.89062 9.86816Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M14 10.8174C14.2898 10.8174 14.5253 11.053 14.5254 11.3428C14.5254 11.6327 14.2899 11.8681 14 11.8682H8.66699C8.37704 11.8682 8.1416 11.6327 8.1416 11.3428C8.14173 11.0529 8.37712 10.8174 8.66699 10.8174H14Z" fill="currentColor"/> <path d="M3.89062 2.13965C5.28514 2.13965 6.41602 3.27052 6.41602 4.66504C6.41602 6.05956 5.28514 7.19043 3.89062 7.19043C2.49611 7.19043 1.36523 6.05956 1.36523 4.66504C1.36523 3.27052 2.49611 2.13965 3.89062 2.13965ZM3.89062 3.19043C3.076 3.19043 2.41602 3.85042 2.41602 4.66504C2.41602 5.47966 3.076 6.13965 3.89062 6.13965C4.70525 6.13965 5.36523 5.47966 5.36523 4.66504C5.36523 3.85042 4.70525 3.19043 3.89062 3.19043Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M14 4.13965C14.2899 4.13971 14.5254 4.37513 14.5254 4.66504C14.5254 4.95495 14.2899 5.19036 14 5.19043H8.66699C8.37704 5.19043 8.1416 4.95499 8.1416 4.66504C8.1416 4.37509 8.37704 4.13965 8.66699 4.13965H14Z" fill="currentColor"/>',
    })
    a.d(t, {}, { E: o })
  },
}
//# sourceMappingURL=864349.a618a3ad07.js.map
