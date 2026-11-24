export const __rspack_esm_ids = [771643]
export const __webpack_modules__ = {
  iFq6(e, t, r) {
    var l = r("qmMi"),
      a = r("OWtl"),
      n = r("nvO1")
    let i = (0, l.i1)(a.u, (e, { get: t }) => t(n.rN, e)),
      s = (0, l.i1)(a.u, (e, { get: t }) => {
        if (t(i, e)) {
          let { data: r, isError: l, isLoading: a } = t(n.IB, e)
          return { data: r?.filter((t) => t.workspace_id === e), isError: l, isLoading: a }
        }
        return null
      })
    r.d(t, {}, { l: s, w: i })
  },
  YIB6(e, t, r) {
    var l = r("D1a9"),
      a = r("g6BY"),
      n = r("kaKF")
    let i = l.cr.define([
      { tag: a._A.comment, class: n.A.Comment },
      { tag: a._A.meta, class: "text-codex-syntax-name" },
      { tag: [a._A.keyword, a._A.definitionKeyword, a._A.modifier, a._A.operator], class: "text-codex-syntax-keyword" },
      { tag: [a._A.heading, a._A.contentSeparator], class: "text-codex-syntax-attribute" },
      { tag: a._A.deleted, class: "text-codex-syntax-error" },
      { tag: [a._A.bool, a._A.null, a._A.atom, a._A.self, a._A.number], class: "text-codex-syntax-literal" },
      { tag: [a._A.string, a._A.regexp, a._A.special(a._A.string)], class: "text-codex-syntax-string" },
      {
        tag: [a._A.standard(a._A.variableName), a._A.standard(a._A.propertyName), a._A.className],
        class: "text-codex-syntax-literal",
      },
      {
        tag: [
          a._A.variableName,
          a._A.special(a._A.variableName),
          a._A.typeName,
          a._A.function(a._A.variableName),
          a._A.definition(a._A.variableName),
        ],
        class: "text-codex-syntax-variable",
      },
      { tag: a._A.attributeName, class: "text-codex-syntax-attribute" },
      {
        tag: [a._A.labelName, a._A.tagName, a._A.definition(a._A.tagName), a._A.angleBracket],
        class: "text-codex-syntax-name",
      },
      { tag: [a._A.link, a._A.url], class: "text-codex-syntax-name underline" },
      { tag: [a._A.invalid, a._A.escape], class: "text-codex-syntax-error underline" },
    ])
    r.d(t, {}, { h: i })
  },
  mgWT(e, t, r) {
    var l = r("D1a9"),
      a = r("Eq25")
    let n = () =>
        r
          .e(798603)
          .then(r.bind(r, "FPNN"))
          .then((e) => c(e.shell)),
      i = {
        bash: n,
        zsh: n,
        swift: () =>
          r
            .e(576272)
            .then(r.bind(r, "pPUJ"))
            .then((e) => c(e.swift)),
        css: () =>
          r
            .e(88385)
            .then(r.bind(r, "jMGu"))
            .then((e) => e.css()),
        html: () =>
          Promise.all([r.e(877652), r.e(490915), r.e(685166)])
            .then(r.bind(r, "jx1G"))
            .then((e) => e.html()),
        javascript: () =>
          Promise.all([r.e(877652), r.e(490915)])
            .then(r.bind(r, "W1q6"))
            .then((e) => e.javascript({ jsx: !0, typescript: !1 })),
        typescript: () =>
          Promise.all([r.e(877652), r.e(490915)])
            .then(r.bind(r, "W1q6"))
            .then((e) => e.javascript({ jsx: !0, typescript: !0 })),
        json: () =>
          r
            .e(681333)
            .then(r.bind(r, "zC4G"))
            .then((e) => e.json()),
        python: () =>
          Promise.all([r.e(65723), r.e(894805)])
            .then(r.bind(r, "csEL"))
            .then((e) => e.python()),
        sql: () =>
          Promise.all([r.e(65723), r.e(788683)])
            .then(r.bind(r, "H8sT"))
            .then((e) => e.sql()),
        go: () =>
          Promise.all([r.e(65723), r.e(863895)])
            .then(r.bind(r, "WMXD"))
            .then((e) => e.go()),
        yaml: () =>
          r
            .e(284994)
            .then(r.bind(r, "S8oS"))
            .then((e) => e.yaml()),
        java: () =>
          Promise.all([r.e(652809), r.e(795891)])
            .then(r.bind(r, "y2nb"))
            .then((e) => e.java()),
        rust: () =>
          Promise.all([r.e(644049), r.e(682360)])
            .then(r.bind(r, "aKEY"))
            .then((e) => e.rust()),
        cpp: () =>
          r
            .e(279069)
            .then(r.bind(r, "ti6D"))
            .then((e) => e.cpp()),
        php: () =>
          Promise.all([r.e(877652), r.e(490915), r.e(968296)])
            .then(r.bind(r, "PzRQ"))
            .then((e) => e.php()),
        xml: () =>
          r
            .e(883815)
            .then(r.bind(r, "R2qw"))
            .then((e) => e.xml()),
        vue: () =>
          Promise.all([r.e(877652), r.e(490915), r.e(470470)])
            .then(r.bind(r, "NvfO"))
            .then((e) => e.vue()),
        ruby: () =>
          r
            .e(348295)
            .then(r.bind(r, "NJ1J"))
            .then((e) => c(e.ruby)),
        haskell: () =>
          r
            .e(776169)
            .then(r.bind(r, "FfQP"))
            .then((e) => c(e.haskell)),
        kotlin: () =>
          r
            .e(777107)
            .then(r.bind(r, "jwCX"))
            .then((e) => c(e.kotlin)),
        csharp: () =>
          r
            .e(777107)
            .then(r.bind(r, "jwCX"))
            .then((e) => c(e.csharp)),
        vb: () =>
          r
            .e(156475)
            .then(r.bind(r, "Kyj0"))
            .then((e) => c(e.vb)),
        c: () =>
          r
            .e(777107)
            .then(r.bind(r, "jwCX"))
            .then((e) => c(e.c)),
        objectivec: () =>
          r
            .e(777107)
            .then(r.bind(r, "jwCX"))
            .then((e) => c(e.objectiveC)),
        r: () =>
          r
            .e(873055)
            .then(r.bind(r, "aYRy"))
            .then((e) => c(e.r)),
        lua: () =>
          r
            .e(585707)
            .then(r.bind(r, "uFDv"))
            .then((e) => c(e.lua)),
        dart: () =>
          r
            .e(777107)
            .then(r.bind(r, "jwCX"))
            .then((e) => c(e.dart)),
        scala: () =>
          r
            .e(777107)
            .then(r.bind(r, "jwCX"))
            .then((e) => c(e.scala)),
        perl: () =>
          r
            .e(427280)
            .then(r.bind(r, "qUgp"))
            .then((e) => c(e.perl)),
        commonlisp: () =>
          r
            .e(878328)
            .then(r.bind(r, "kLa7"))
            .then((e) => c(e.commonLisp)),
        clojure: () =>
          r
            .e(490485)
            .then(r.bind(r, "FXFX"))
            .then((e) => c(e.clojure)),
        ocaml: () =>
          r
            .e(62785)
            .then(r.bind(r, "j11Z"))
            .then((e) => c(e.oCaml)),
        powershell: () =>
          r
            .e(376912)
            .then(r.bind(r, "Cwth"))
            .then((e) => c(e.powerShell)),
        verilog: () =>
          r
            .e(949351)
            .then(r.bind(r, "Jpn8"))
            .then((e) => c(e.verilog)),
        dockerfile: () =>
          r
            .e(973595)
            .then(r.bind(r, "xdPb"))
            .then((e) => c(e.dockerFile)),
      },
      s = (0, a.x)(() =>
        Promise.all([r.e(999152), r.e(883697)])
          .then(r.bind(r, "agJ3"))
          .catch(() => null),
      ),
      o = new Map(),
      d = new Map()
    function c(e) {
      return new l.Yy(l.Tg.define(e))
    }
    r.d(
      t,
      {},
      {
        AN: function (e) {
          if (o.has(e)) return Promise.resolve(o.get(e) ?? null)
          let t = d.get(e)
          if (null != t) return t
          if (!Object.hasOwn(i, e)) return Promise.resolve(null)
          let r = Promise.resolve(i[e]())
            .then((t) => (o.set(e, t), t))
            .catch(() => null)
            .finally(() => {
              d.delete(e)
            })
          return (d.set(e, r), r)
        },
        M_: function (e) {
          return o.get(e) ?? null
        },
        hl: function (e) {
          return Object.hasOwn(i, e)
        },
        r5: s,
      },
    )
  },
  CtJU(e, t, r) {
    var l = r("ABep"),
      a = r("QosV"),
      n = r("on57")
    r.d(
      t,
      {},
      {
        l: function (e) {
          let t,
            r,
            i,
            s,
            o,
            d = (0, a.c)(17),
            { align: c, children: u, className: p, hideLabelWhenNarrow: f, icon: h, label: m, spacing: g } = e,
            b = void 0 !== f && f,
            y = "relaxed" === (void 0 === g ? "default" : g) ? "py-3 last:pb-0" : "py-row-y",
            x = b ? "grid-cols-[auto_minmax(0,1fr)]" : "grid-cols-1",
            w =
              "start" === (void 0 === c ? "center" : c)
                ? "items-start"
                : b
                  ? "items-center"
                  : "items-start [@container_(min-width:24rem)]:items-center"
          return (
            d[0] !== p || d[1] !== y || d[2] !== x || d[3] !== w
              ? ((t = (0, n.A)(
                  "grid min-h-[var(--height-token-row)] gap-x-3 gap-y-0.5 text-[length:var(--detail-row-font-size,var(--text-base))] leading-5 [@container_(min-width:24rem)]:grid-cols-[var(--detail-property-label-width,120px)_minmax(0,1fr)]",
                  y,
                  x,
                  w,
                  p,
                )),
                (d[0] = p),
                (d[1] = y),
                (d[2] = x),
                (d[3] = w),
                (d[4] = t))
              : (t = d[4]),
            d[5] !== b || d[6] !== m
              ? ((r = b
                  ? (0, l.jsx)("span", { className: "sr-only [@container_(min-width:24rem)]:not-sr-only", children: m })
                  : m),
                (d[5] = b),
                (d[6] = m),
                (d[7] = r))
              : (r = d[7]),
            d[8] !== h || d[9] !== r
              ? ((i = (0, l.jsxs)("dt", {
                  className: "flex min-w-0 items-center gap-2 wrap-anywhere text-codex-description",
                  children: [h, r],
                })),
                (d[8] = h),
                (d[9] = r),
                (d[10] = i))
              : (i = d[10]),
            d[11] !== u
              ? ((s = (0, l.jsx)("dd", {
                  className: "m-0 flex min-w-0 items-center wrap-anywhere text-default",
                  children: u,
                })),
                (d[11] = u),
                (d[12] = s))
              : (s = d[12]),
            d[13] !== s || d[14] !== t || d[15] !== i
              ? ((o = (0, l.jsxs)("div", { className: t, children: [i, s] })),
                (d[13] = s),
                (d[14] = t),
                (d[15] = i),
                (d[16] = o))
              : (o = d[16]),
            o
          )
        },
      },
    )
  },
  hlym(e, t, r) {
    var l = r("tO3J")
    r.d(
      t,
      {},
      {
        k: function (e, t) {
          e.defaultPrevented ||
            !(0, l.eg)(e.nativeEvent, "CmdOrCtrl+S") ||
            (e.target instanceof Node &&
              e.currentTarget.contains(e.target) &&
              (e.preventDefault(), e.stopPropagation(), e.repeat || t()))
        },
      },
    )
  },
  EGS2(e, t, r) {
    var l = r("eFn4"),
      a = r("Kwur"),
      n = r("Gdjn"),
      i = r("MX6A"),
      s = r("Q8aV"),
      o = r("svjy"),
      d = r("ripK"),
      c = r("j5ZC"),
      u = r("TlTE"),
      p = r("Wjli")
    r.d(
      t,
      {},
      {
        OD: async function (e, t) {
          if (t.id === u.x1) return (0, c.startSkillCreatorChat)(e)
          let r = e.get(p.Jp),
            a = "allowed" === e.get(l.lN).status && (0, u.Dc)(t, "tpp") ? "tpp" : "chat"
          return (
            null != r &&
            !0 === e.get(p.Zf) &&
            null == (0, u.sV)(t, e.get(p.YE)) &&
            !!(0, u.Dc)(t, a) &&
            !!(0, u.eN)(t, e.get(p.Vq)) &&
            (!!(t.enabled || e.query.getData(p.rR, "installed")?.some((e) => e.id === t.id)) ||
              !!(await (0, p.eJ)(e, t, !0))) &&
            e.get(p.Jp)?.accountId === r.accountId &&
            e.get(p.Jp)?.userId === r.userId &&
            ((0, s.startNewConversation)(e, {
              codexAppMode: "tpp" === a ? "work" : "chat",
              prefillChatGptSystemHints: ["reason"],
              prefillPrompt:
                (0, i.xR)(`@${(0, u.Fj)(t)}`, (0, n.z6)(t.id, r)) +
                " " +
                e
                  .get(o.g)
                  .formatMessage(
                    {
                      id: "browserSkills.tryPrompt",
                      defaultMessage:
                        "I just added the \u201C{name}\u201D skill. Let's explore what it does with an example. Make up a realistic user prompt and then use the full Skill end to end.",
                      description: "Prompt prefilled when the user tries a skill in a new conversation",
                    },
                    { name: (0, u.Fj)(t) },
                  ),
            }),
            !0)
          )
        },
        _d: async function (e, t) {
          let r = e.get(p.Jp)
          if (null == r || !0 !== e.get(p.Zf) || !t.sediment_id || t.permissions?.can_export === !1) return
          let l = await a.Request.getResponse("/hazelnuts/{hazelnut_id}/export", {
              additionalHeaders: { "ChatGPT-Account-ID": r.accountId },
              parameters: { path: { hazelnut_id: t.id } },
            }),
            n = await l.blob()
          e.get(p.Jp)?.accountId === r.accountId && e.get(p.Jp)?.userId === r.userId && (0, d.W)(n, `${t.name}.zip`)
        },
        hp: async function (e, t) {
          let r = e.get(p.Jp)
          if (
            null == r ||
            !0 !== e.get(p.Zf) ||
            (t.permissions?.can_delete !== !0 && (null == r.userId || t.creator_id !== r.userId))
          )
            throw Error("Skill deletion is unavailable")
          await a.Request.safeDelete("/hazelnuts/{hazelnut_id}", {
            additionalHeaders: { "ChatGPT-Account-ID": r.accountId },
            parameters: { path: { hazelnut_id: t.id } },
          })
          let l = ["browser-skills", r.accountId, r.userId]
          ;(await e.queryClient.cancelQueries({ queryKey: l }),
            e.queryClient.setQueriesData({ queryKey: [...l, "collection"] }, (e) => e?.filter((e) => e.id !== t.id)),
            e.queryClient.removeQueries({ queryKey: [...l, "detail", t.id] }))
        },
      },
    )
  },
  j5ZC(e, t, r) {
    var l = r("MVHH"),
      a = r("ASxG"),
      n = r("eFn4"),
      i = r("Kwur"),
      s = r("Gdjn"),
      o = r("MX6A"),
      d = r("Q8aV"),
      c = r("svjy"),
      u = r("yGJW"),
      p = r("eShZ"),
      f = r("TlTE"),
      h = r("Wjli")
    function m(e) {
      if (!(e instanceof p.FetchError) || 409 !== e.status) return null
      try {
        let { detail: t } = a
          .Ikc({
            detail: a.Ikc({
              code: a.euz("hazelnut_duplicate_name"),
              resolution: a.k5n(["UPDATE_EXISTING", "FORCE_CREATE"]).optional(),
              updateable: a.zMY().optional(),
            }),
          })
          .parse(JSON.parse(e.message))
        return t.resolution ?? (t.updateable ? "UPDATE_EXISTING" : null)
      } catch {
        return null
      }
    }
    r.d(
      t,
      {},
      {
        Z: async function (e, t, { applyResolution: r = !1, createdWithChat: a = !1 } = {}) {
          let n = e.get(h.Jp),
            s = a && !r
          if (null == n || !e.get(s ? h.Vq : h.oo)) return { status: "error", reason: "permission" }
          if (!/\.(zip|skill)$/i.test(t.name) && "skill.md" !== t.name.toLowerCase())
            return { status: "error", reason: "type" }
          if (t.size > e.get(h.bi)) return { status: "error", reason: "size" }
          let o = new FormData()
          ;(o.append("file", t),
            s && o.append("created_with_chat", "true"),
            r && (o.append("apply_resolution", "true"), o.append("force_update", "true")))
          try {
            let { hazelnuts: t } = await i.Request.safePost("/hazelnuts/uploads/create", {
              additionalHeaders: { "ChatGPT-Account-ID": n.accountId },
              requestBody: o,
              expectedErrorStatuses: [400, 401, 403, 409, 413, 422],
            })
            if (0 === t.length) return { status: "error", reason: "empty" }
            let r = await Promise.all(
                t.map(async (t) => {
                  if (
                    null != t.permissions ||
                    e.get(h.Jp)?.accountId !== n.accountId ||
                    e.get(h.Jp)?.userId !== n.userId
                  )
                    return t
                  try {
                    return await i.Request.safeGet("/hazelnuts/{hazelnut_id}", {
                      additionalHeaders: { "ChatGPT-Account-ID": n.accountId },
                      expectedErrorStatuses: [401, 403, 404],
                      parameters: { path: { hazelnut_id: t.id }, query: { include_permissions: !0 } },
                    })
                  } catch {
                    return t
                  }
                }),
              ),
              a = ["browser-skills", n.accountId, n.userId]
            for (let t of (await e.queryClient.cancelQueries({ queryKey: a }),
            e.queryClient.setQueriesData({ queryKey: [...a, "collection"] }, (e) =>
              e?.map((e) => r.find((t) => t.id === e.id) ?? e),
            ),
            ["created", "installed"])) {
              let l = r.filter((e) => "created" === t || e.enabled)
              e.queryClient.setQueryData([...a, "collection", t], (e) => [
                ...(e?.filter((e) => !r.some((t) => t.id === e.id)) ?? []),
                ...l,
              ])
            }
            for (let t of r)
              e.queryClient.setQueryData([...a, "detail", t.id], t, null == t.permissions ? { updatedAt: 0 } : void 0)
            if (e.get(h.Jp)?.accountId !== n.accountId || e.get(h.Jp)?.userId !== n.userId)
              return { status: "accountChanged" }
            return ((0, u.yy)(e, l.b7, { hazelnutId: t[0].id }), { status: "complete", skills: r })
          } catch (e) {
            if (e instanceof p.FetchError) {
              if (401 === e.status || 403 === e.status) return { status: "error", reason: "permission" }
              if (413 === e.status) return { status: "error", reason: "size" }
              if (409 === e.status && !r) {
                let t = m(e)
                if (null != t) return { status: "conflict", resolution: t }
              }
            }
            return { status: "error", reason: "failed" }
          }
        },
        b: m,
        startSkillCreatorChat: async function (e, t, r) {
          let l = e.get(h.Jp)
          if (null == l || !e.get(h.Vq) || r?.() === !1) return !1
          let a = (await e.query.getOrFetch(h.rR, "installed")).find((e) => e.id === f.x1),
            i = "allowed" === e.get(n.lN).status ? "tpp" : "chat"
          if (
            r?.() === !1 ||
            null == a ||
            !(0, f.Dc)(a, i) ||
            null != (0, f.sV)(a, e.get(h.YE)) ||
            !e.get(h.Vq) ||
            e.get(h.Jp)?.accountId !== l.accountId ||
            e.get(h.Jp)?.userId !== l.userId
          )
            return !1
          let u = (0, o.xR)("@skill-creator", (0, s.z6)(a.id, l)),
            p = !1
          return (
            (0, d.startNewConversation)(e, {
              onNavigate: () => {
                p = !0
              },
              codexAppMode: "tpp" === i ? "work" : "chat",
              prefillChatGptSystemHints: ["reason"],
              prefillPrompt:
                null == t
                  ? e
                      .get(c.g)
                      .formatMessage(
                        {
                          id: "browserSkills.createChatPrompt",
                          defaultMessage:
                            "Use {skillCreator} to help me create a skill. Keep it conversational, and start by asking what the skill should do.",
                        },
                        { skillCreator: u },
                      )
                  : e.get(c.g).formatMessage(t, { skillCreator: u }),
            }),
            p
          )
        },
      },
    )
  },
  gGkp(e, t, r) {
    var l = r("ABep"),
      a = r("QosV"),
      n = r("oyxz"),
      i = r("Sm6l"),
      s = r("JNtf"),
      o = r("mUDD")
    r.d(
      t,
      {},
      {
        w: function (e) {
          let t,
            r,
            d,
            c,
            u,
            p,
            f,
            h,
            m,
            g,
            b = (0, a.c)(23),
            { resolution: y, disabled: x, onCancel: w, onConfirm: _ } = e
          return (
            b[0] !== _
              ? ((t = (e) => {
                  ;(e.preventDefault(), e.stopPropagation(), _())
                }),
                (b[0] = _),
                (b[1] = t))
              : (t = b[1]),
            b[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((r = (0, l.jsx)(s.L3, {
                  children: (0, l.jsx)(n.A, {
                    id: "browserSkills.duplicateTitle",
                    defaultMessage: "Skill already exists",
                  }),
                })),
                (b[2] = r))
              : (r = b[2]),
            b[3] !== y
              ? ((d = (0, l.jsx)(o.OO, {
                  children: (0, l.jsx)(o.c7, {
                    title: r,
                    subtitle: (0, l.jsx)(s.rr, {
                      children:
                        "UPDATE_EXISTING" === y
                          ? (0, l.jsx)(n.A, {
                              id: "browserSkills.uploadReplacePrompt",
                              defaultMessage:
                                "A skill with this name already exists. Replace the first skill you own with this name?",
                            })
                          : (0, l.jsx)(n.A, {
                              id: "browserSkills.uploadCreateAnywayPrompt",
                              defaultMessage: "A skill with this name already exists. Create this skill anyway?",
                            }),
                    }),
                  }),
                })),
                (b[3] = y),
                (b[4] = d))
              : (d = b[4]),
            b[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((c = (0, l.jsx)(n.A, { id: "browserSkills.uploadCancel", defaultMessage: "Cancel" })), (b[5] = c))
              : (c = b[5]),
            b[6] !== w
              ? ((u = (0, l.jsx)(i.$, { type: "button", color: "outline", onClick: w, children: c })),
                (b[6] = w),
                (b[7] = u))
              : (u = b[7]),
            b[8] !== y
              ? ((p =
                  "UPDATE_EXISTING" === y
                    ? (0, l.jsx)(n.A, { id: "browserSkills.uploadReplace", defaultMessage: "Replace existing" })
                    : (0, l.jsx)(n.A, { id: "browserSkills.uploadCreateAnyway", defaultMessage: "Create anyway" })),
                (b[8] = y),
                (b[9] = p))
              : (p = b[9]),
            b[10] !== x || b[11] !== p
              ? ((f = (0, l.jsx)(i.$, { type: "submit", color: "primary", disabled: x, children: p })),
                (b[10] = x),
                (b[11] = p),
                (b[12] = f))
              : (f = b[12]),
            b[13] !== u || b[14] !== f
              ? ((h = (0, l.jsx)(o.OO, { children: (0, l.jsxs)(o.Es, { children: [u, f] }) })),
                (b[13] = u),
                (b[14] = f),
                (b[15] = h))
              : (h = b[15]),
            b[16] !== t || b[17] !== d || b[18] !== h
              ? ((m = (0, l.jsxs)(o.R4, { as: "form", size: "viewport", onSubmit: t, children: [d, h] })),
                (b[16] = t),
                (b[17] = d),
                (b[18] = h),
                (b[19] = m))
              : (m = b[19]),
            b[20] !== w || b[21] !== m
              ? ((g = (0, l.jsx)(s.lG, { open: !0, variant: "chatgpt", onOpenChange: w, children: m })),
                (b[20] = w),
                (b[21] = m),
                (b[22] = g))
              : (g = b[22]),
            g
          )
        },
      },
    )
  },
  EOSE(e, t, r) {
    r.d(t, { BrowserSkillEditor: () => en })
    var l = r("ABep"),
      a = r("QosV"),
      n = r("qmMi"),
      i = r("zd8w"),
      s = r("Wf1j"),
      o = r("oyxz"),
      d = r("Qgfj"),
      c = r("Ywss"),
      u = r("tZ5S"),
      p = r("NycP"),
      f = r("Sm6l"),
      h = r("CtJU"),
      m = r("bVeK"),
      g = r("RNul"),
      b = r("zLIa"),
      y = r("SGsN"),
      x = r("bWX0"),
      w = r("OWtl"),
      _ = r("ZEx5"),
      k = r("WGha"),
      v = r("EGS2"),
      j = r("j5ZC"),
      S = r("gGkp"),
      A = r("TlTE"),
      I = r("OZHl"),
      C = r("Wjli"),
      M = r("MVHH"),
      E = r("tC4W"),
      D = r("Kwur"),
      q = r("yGJW"),
      P = r("eShZ"),
      z = r("mv2N")
    let N = (0, n.vU)(w.u, (e, { get: t }) => {
      let r = t(C.Jp)
      return {
        queryKey: ["browser-skills", r?.accountId, r?.userId, "editor", e],
        enabled: null != r && !0 === t(C.Zf),
        staleTime: 0,
        refetchOnMount: !0,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
        queryFn: async ({ signal: t }) => {
          if (null == r) throw Error("Skills account unavailable")
          let l = await D.Request.safeGet("/hazelnuts/{hazelnut_id}", {
              additionalHeaders: { "ChatGPT-Account-ID": r.accountId },
              parameters: { path: { hazelnut_id: e }, query: { include_permissions: !0 } },
              expectedErrorStatuses: [403, 404],
              signal: t,
            }),
            a = Object.keys(l.files).find((e) => "skill.md" === e.toLowerCase())
          if (null == a || l.permissions?.can_read === !1) throw Error("Skill instructions unavailable")
          let { skill: n, bytes: i } = await (0, z.M)(r.accountId, l, a, t),
            s = new TextDecoder()
              .decode(i)
              .replace(/^\uFEFF/, "")
              .replace(/^---\s*\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/, ""),
            o = await Promise.all(
              Object.entries(n.files)
                .filter(([e]) => e !== a)
                .map(async ([e, l]) => ({
                  id: e,
                  path: e,
                  source: n.sediment_id
                    ? { kind: "stored", reference: { file_id: n.sediment_id, path: e, range: l } }
                    : {
                        kind: "local",
                        file: new File([(await (0, z.M)(r.accountId, n, e, t)).bytes], e.split("/").at(-1) ?? e),
                      },
                })),
            )
          return { skill: n, draft: { name: n.name, description: n.description, instructions: s, files: o } }
        },
      }
    })
    function T(e) {
      if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(e.name) || e.name.length > 64) return "name"
      if (!e.instructions.trim()) return "instructions"
      if (e.description.length > 500) return "description"
      let t = new Set(["skill.md"])
      for (let { path: r } of e.files) {
        let e = r.split("/")
        if (
          !r.trim() ||
          r !== r.trim() ||
          /[\\:]/.test(r) ||
          Array.from(r).some((e) => 32 > e.charCodeAt(0)) ||
          e.some((e) => !e || "." === e || ".." === e) ||
          t.has(r.toLowerCase())
        )
          return "paths"
        t.add(r.toLowerCase())
      }
      return null
    }
    function R(e) {
      return (
        "text" === e.source.kind ||
        /\.(md|txt|json|yaml|yml|toml|csv|ts|tsx|js|jsx|py|sh|css|html|xml|svg|sql|r)$/i.test(e.path)
      )
    }
    async function F(e, t, r, l) {
      if ("local" === t.source.kind) return t.source.file
      if ("text" === t.source.kind) return new Blob([t.source.content])
      let a = e.get(C.Jp)
      if (null == a || null == r) throw Error("Skill file unavailable")
      let { bytes: n } = await (0, z.M)(a.accountId, r, t.source.reference.path, l)
      return new Blob([n])
    }
    var K = r("bqtn"),
      L = r("i7fz"),
      O = r("V7pv"),
      G = r("ripK"),
      J = r("kcrg")
    function W(e) {
      let t,
        r,
        d,
        c,
        u,
        p,
        h,
        g,
        b,
        y,
        x,
        w,
        _,
        k = (0, a.c)(86),
        { files: v, skill: j, disabled: S, selectedId: A, onChange: I, onSelect: M } = e,
        E = (0, s.A)(),
        D = (0, n.Ul)(C.oo),
        q = (0, i.useRef)(null),
        P = (0, i.useRef)(null),
        [z, N] = (0, i.useState)(!1),
        [T, R] = (0, i.useState)(B),
        [F, L] = (0, i.useState)(null),
        [G, W] = (0, i.useState)(null)
      if (
        k[0] !== D ||
        k[1] !== T ||
        k[2] !== S ||
        k[3] !== F ||
        k[4] !== G ||
        k[5] !== v ||
        k[6] !== E ||
        k[7] !== I ||
        k[8] !== M ||
        k[9] !== A ||
        k[10] !== j ||
        k[11] !== z
      ) {
        let e, a, n, i, s, w, _, C, B, Q, H, V, Y, X, ee, et, er
        k[23] !== F ? ((e = (e) => e.id === F), (k[23] = F), (k[24] = e)) : (e = k[24])
        let el = v.find(e),
          ea = (e) => {
            if (S || !el) return null
            let t = el.path.split("/").at(-1),
              r = e ? `${e}/${t}` : t
            return !r || v.some((e) => e.path.toLowerCase() === r.toLowerCase()) ? null : r
          },
          en = (e, t) => {
            if (null != F) {
              if ((e.stopPropagation(), null == ea(t))) {
                e.dataTransfer.dropEffect = "none"
                return
              }
              ;(e.preventDefault(), (e.dataTransfer.dropEffect = "move"), W(t))
            }
          },
          ei = (e, t) => {
            if (null == F) return
            ;(e.preventDefault(), e.stopPropagation())
            let r = ea(t)
            ;(null != r &&
              (I(v.map((e) => (e.id === F ? { ...e, path: r } : e))), R((e) => new Set([...e].filter((e) => e !== t)))),
              L(null),
              W(null))
          }
        k[25] !== D || k[26] !== S || k[27] !== v || k[28] !== I
          ? ((a = (e, t) => {
              if (!e || S || !D) return
              let r = Array.from(e)
              r.some($)
                ? N(!0)
                : (N(!1),
                  I([
                    ...v,
                    ...r.map((e) => ({
                      id: crypto.randomUUID(),
                      path: t ? e.webkitRelativePath.split("/").slice(1).join("/") : e.name,
                      source: { kind: "local", file: e },
                    })),
                  ]))
            }),
            (k[25] = D),
            (k[26] = S),
            (k[27] = v),
            (k[28] = I),
            (k[29] = a))
          : (a = k[29])
        let es = a
        ;((b = "flex flex-col gap-3"),
          k[30] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, l.jsx)("h2", {
                className: "text-base font-medium select-none",
                children: (0, l.jsx)(o.A, { id: "browserSkills.editor.files", defaultMessage: "Files" }),
              })),
              (k[30] = n))
            : (n = k[30]),
          k[31] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = (0, l.jsx)(m.WgN, {})),
              (s = (0, l.jsx)(o.A, { id: "browserSkills.editor.upload", defaultMessage: "Upload" })),
              (k[31] = i),
              (k[32] = s))
            : ((i = k[31]), (s = k[32])),
          k[33] !== S
            ? ((w = (0, l.jsxs)(f.$, {
                type: "button",
                color: "outline",
                size: "dialog",
                disabled: S,
                children: [i, s],
              })),
              (k[33] = S),
              (k[34] = w))
            : (w = k[34]),
          k[35] !== v || k[36] !== I || k[37] !== M
            ? ((_ = () => {
                let e = "untitled.txt",
                  t = 1
                for (; v.some((t) => t.path.toLowerCase() === e);) e = `untitled-${t++}.txt`
                let r = { id: crypto.randomUUID(), path: e, source: { kind: "text", content: "" } }
                ;(I([...v, r]), M(r))
              }),
              (k[35] = v),
              (k[36] = I),
              (k[37] = M),
              (k[38] = _))
            : (_ = k[38]),
          k[39] === Symbol.for("react.memo_cache_sentinel")
            ? ((C = (0, l.jsx)(o.A, { id: "browserSkills.editor.newFile", defaultMessage: "New text file" })),
              (k[39] = C))
            : (C = k[39]),
          k[40] !== _
            ? ((B = (0, l.jsx)(K.ms.Item, { onSelect: _, children: C })), (k[40] = _), (k[41] = B))
            : (B = k[41]),
          k[42] !== D
            ? ((Q = D
                ? (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)(K.ms.Item, {
                        onSelect: () => q.current?.click(),
                        children: (0, l.jsx)(o.A, {
                          id: "browserSkills.editor.addFiles",
                          defaultMessage: "Upload files",
                        }),
                      }),
                      (0, l.jsx)(K.ms.Item, {
                        onSelect: () => P.current?.click(),
                        children: (0, l.jsx)(o.A, {
                          id: "browserSkills.editor.addFolder",
                          defaultMessage: "Upload folder",
                        }),
                      }),
                    ],
                  })
                : null),
              (k[42] = D),
              (k[43] = Q))
            : (Q = k[43]),
          k[44] !== w || k[45] !== B || k[46] !== Q
            ? ((y = (0, l.jsxs)("div", {
                className: "flex items-center justify-between gap-2",
                children: [n, (0, l.jsxs)(K.Ab, { align: "end", triggerButton: w, children: [B, Q] })],
              })),
              (k[44] = w),
              (k[45] = B),
              (k[46] = Q),
              (k[47] = y))
            : (y = k[47]),
          k[48] !== E ? ((H = E.formatMessage(Z.fileInput)), (k[48] = E), (k[49] = H)) : (H = k[49]),
          k[50] !== es
            ? ((V = (e) => {
                ;(es(e.target.files, !1), (e.target.value = ""))
              }),
              (k[50] = es),
              (k[51] = V))
            : (V = k[51]),
          k[52] !== H || k[53] !== V
            ? ((x = (0, l.jsx)("input", {
                ref: q,
                hidden: !0,
                type: "file",
                multiple: !0,
                "aria-label": H,
                onChange: V,
              })),
              (k[52] = H),
              (k[53] = V),
              (k[54] = x))
            : (x = k[54]),
          k[55] === Symbol.for("react.memo_cache_sentinel")
            ? ((Y = (e) => {
                ;((P.current = e), e?.setAttribute("webkitdirectory", ""))
              }),
              (k[55] = Y))
            : (Y = k[55]),
          k[56] !== E ? ((X = E.formatMessage(Z.folderInput)), (k[56] = E), (k[57] = X)) : (X = k[57]),
          k[58] !== es
            ? ((ee = (e) => {
                ;(es(e.target.files, !0), (e.target.value = ""))
              }),
              (k[58] = es),
              (k[59] = ee))
            : (ee = k[59]),
          k[60] !== X || k[61] !== ee
            ? ((r = (0, l.jsx)("input", {
                ref: Y,
                hidden: !0,
                type: "file",
                multiple: !0,
                "aria-label": X,
                onChange: ee,
              })),
              (k[60] = X),
              (k[61] = ee),
              (k[62] = r))
            : (r = k[62]),
          k[63] !== z
            ? ((d = z
                ? (0, l.jsx)("p", {
                    role: "alert",
                    children: (0, l.jsx)(o.A, {
                      id: "browserSkills.editor.fileTooLarge",
                      defaultMessage: "Choose files no larger than 25 MB each",
                    }),
                  })
                : null),
              (k[63] = z),
              (k[64] = d))
            : (d = k[64]),
          (t = "flex min-h-0 flex-col"),
          (c = (e) => en(e, "")),
          k[65] === Symbol.for("react.memo_cache_sentinel")
            ? ((u = (e) => {
                ;(e.relatedTarget instanceof Node && e.currentTarget.contains(e.relatedTarget)) || W(null)
              }),
              (k[65] = u))
            : (u = k[65]),
          (p = (e) => ei(e, "")),
          k[66] === Symbol.for("react.memo_cache_sentinel")
            ? ((et = (0, l.jsx)(m.Z1A, {})), (k[66] = et))
            : (et = k[66]))
        let eo = null == A || "" === G
        ;(k[67] !== M ? ((er = () => M(null)), (k[67] = M), (k[68] = er)) : (er = k[68]),
          k[69] !== eo || k[70] !== er
            ? ((h = (0, l.jsx)(O.H, { label: "SKILL.md", icon: et, isActive: eo, onPress: er })),
              (k[69] = eo),
              (k[70] = er),
              (k[71] = h))
            : (h = k[71]),
          (g = (0, J.n)(v, T).map((e) =>
            "folder" === e.kind
              ? (0, l.jsx)(
                  O.H,
                  {
                    label: (0, l.jsxs)("span", {
                      className: "flex items-center gap-2",
                      children: [(0, l.jsx)(m.efV, {}), e.name],
                    }),
                    ariaLabel: e.path,
                    ariaExpanded: !T.has(e.path),
                    icon: T.has(e.path) ? (0, l.jsx)(m.uM3, {}) : (0, l.jsx)(m.Aq_, {}),
                    indentLevel: e.depth,
                    isActive: G === e.path,
                    onPress: () =>
                      R((t) => {
                        let r = new Set(t)
                        return (r.has(e.path) ? r.delete(e.path) : r.add(e.path), r)
                      }),
                    onDragOver: (t) => en(t, e.path),
                    onDrop: (t) => ei(t, e.path),
                  },
                  `folder:${e.path}`,
                )
              : (0, l.jsx)(
                  U,
                  {
                    file: e.file,
                    depth: e.depth,
                    skill: j,
                    disabled: S,
                    selected: A === e.file.id,
                    onSelect: () => M(e.file),
                    onDragStart: (t) => {
                      ;(L(e.file.id),
                        (t.dataTransfer.effectAllowed = "move"),
                        t.dataTransfer.setData("text/plain", e.file.path))
                    },
                    onDragEnd: () => {
                      ;(L(null), W(null))
                    },
                    onChange: (t) => I(v.map((r) => (r.id === e.file.id ? t : r))),
                    onRemove: () => {
                      ;(A === e.file.id && M(null), I(v.filter((t) => t.id !== e.file.id)))
                    },
                  },
                  e.file.id,
                ),
          )),
          (k[0] = D),
          (k[1] = T),
          (k[2] = S),
          (k[3] = F),
          (k[4] = G),
          (k[5] = v),
          (k[6] = E),
          (k[7] = I),
          (k[8] = M),
          (k[9] = A),
          (k[10] = j),
          (k[11] = z),
          (k[12] = t),
          (k[13] = r),
          (k[14] = d),
          (k[15] = c),
          (k[16] = u),
          (k[17] = p),
          (k[18] = h),
          (k[19] = g),
          (k[20] = b),
          (k[21] = y),
          (k[22] = x))
      } else
        ((t = k[12]),
          (r = k[13]),
          (d = k[14]),
          (c = k[15]),
          (u = k[16]),
          (p = k[17]),
          (h = k[18]),
          (g = k[19]),
          (b = k[20]),
          (y = k[21]),
          (x = k[22]))
      return (
        k[72] !== t || k[73] !== c || k[74] !== u || k[75] !== p || k[76] !== h || k[77] !== g
          ? ((w = (0, l.jsxs)("div", { className: t, onDragOver: c, onDragLeave: u, onDrop: p, children: [h, g] })),
            (k[72] = t),
            (k[73] = c),
            (k[74] = u),
            (k[75] = p),
            (k[76] = h),
            (k[77] = g),
            (k[78] = w))
          : (w = k[78]),
        k[79] !== r || k[80] !== d || k[81] !== w || k[82] !== b || k[83] !== y || k[84] !== x
          ? ((_ = (0, l.jsxs)("section", { className: b, children: [y, x, r, d, w] })),
            (k[79] = r),
            (k[80] = d),
            (k[81] = w),
            (k[82] = b),
            (k[83] = y),
            (k[84] = x),
            (k[85] = _))
          : (_ = k[85]),
        _
      )
    }
    function $(e) {
      return e.size > 0x1900000
    }
    function B() {
      return new Set()
    }
    function U(e) {
      let t,
        r,
        d,
        c,
        u,
        p,
        h = (0, a.c)(25),
        {
          file: g,
          depth: y,
          skill: x,
          disabled: _,
          selected: k,
          onSelect: v,
          onChange: j,
          onRemove: S,
          onDragStart: A,
          onDragEnd: I,
        } = e,
        M = (0, n.gh)(w.u),
        E = (0, s.A)(),
        [D, q] = (0, i.useState)(!1),
        [P, z] = (0, i.useState)(!1),
        [N, T] = (0, i.useState)(!1),
        R = (0, i.useRef)(null)
      ;(h[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => () => R.current?.abort()), (r = []), (h[0] = t), (h[1] = r))
        : ((t = h[0]), (r = h[1])),
        (0, i.useEffect)(t, r),
        h[2] !== g || h[3] !== M || h[4] !== x
          ? ((d = () => {
              let e = M.get(C.Jp)
              if (null == e || null != R.current) return
              let t = new AbortController()
              ;((R.current = t),
                z(!0),
                T(!1),
                F(M, g, x, t.signal)
                  .then((r) => {
                    t.signal.aborted ||
                      M.get(C.Jp)?.accountId !== e.accountId ||
                      M.get(C.Jp)?.userId !== e.userId ||
                      (0, G.W)(r, g.path.split("/").at(-1) ?? g.path)
                  })
                  .catch(() => {
                    t.signal.aborted || T(!0)
                  })
                  .finally(() => {
                    ;((R.current = null), z(!1))
                  }))
            }),
            (h[2] = g),
            (h[3] = M),
            (h[4] = x),
            (h[5] = d))
          : (d = h[5]))
      let J = d
      return (
        h[6] !== y ||
        h[7] !== _ ||
        h[8] !== J ||
        h[9] !== g ||
        h[10] !== E ||
        h[11] !== j ||
        h[12] !== I ||
        h[13] !== A ||
        h[14] !== S ||
        h[15] !== v ||
        h[16] !== P ||
        h[17] !== D ||
        h[18] !== k
          ? ((c = D
              ? (0, l.jsx)(b.pd, {
                  autoFocus: !0,
                  value: g.path,
                  disabled: _,
                  "aria-label": E.formatMessage(Z.filePath),
                  onChange: (e) => j({ ...g, path: e.target.value }),
                  onBlur: () => q(!1),
                  onKeyPress: L.u,
                  onKeyDown: (e) => {
                    ;(0, L.X)(e.nativeEvent) ||
                      (("Enter" === e.key || "Escape" === e.key) && (e.preventDefault(), e.stopPropagation(), q(!1)))
                  },
                })
              : (0, l.jsx)(O.H, {
                  label: g.path.split("/").at(-1),
                  ariaLabel: g.path,
                  icon: (0, l.jsx)(m.Z1A, {}),
                  indentLevel: y,
                  isActive: k,
                  onPress: v,
                  draggable: !_,
                  onDragStart: A,
                  onDragEnd: I,
                  actions: (0, l.jsx)("div", {
                    className: "pointer-events-auto",
                    role: "presentation",
                    onClick: V,
                    onKeyDown: H,
                    onPointerDown: Q,
                    children: (0, l.jsxs)(K.Ab, {
                      align: "end",
                      triggerButton: (0, l.jsx)(f.$, {
                        type: "button",
                        color: "ghostActive",
                        size: "iconCircle",
                        disabled: P,
                        "aria-label": E.formatMessage(Z.fileActions, { path: g.path }),
                        children: (0, l.jsx)(m.l0Y, {}),
                      }),
                      children: [
                        _
                          ? null
                          : (0, l.jsx)(K.ms.Item, {
                              leftIcon: (0, l.jsx)(m.aRI, {}),
                              onSelect: () => q(!0),
                              children: (0, l.jsx)(o.A, {
                                id: "browserSkills.editor.renameFile",
                                defaultMessage: "Rename",
                              }),
                            }),
                        (0, l.jsx)(K.ms.Item, {
                          leftIcon: (0, l.jsx)(m.EYt, {}),
                          onSelect: J,
                          children: (0, l.jsx)(o.A, {
                            id: "browserSkills.editor.downloadFile",
                            defaultMessage: "Download",
                          }),
                        }),
                        _
                          ? null
                          : (0, l.jsx)(K.ms.Item, {
                              leftIcon: (0, l.jsx)(m.zwW, {}),
                              onSelect: S,
                              children: (0, l.jsx)(o.A, {
                                id: "browserSkills.editor.removeFile",
                                defaultMessage: "Remove",
                              }),
                            }),
                      ],
                    }),
                  }),
                })),
            (h[6] = y),
            (h[7] = _),
            (h[8] = J),
            (h[9] = g),
            (h[10] = E),
            (h[11] = j),
            (h[12] = I),
            (h[13] = A),
            (h[14] = S),
            (h[15] = v),
            (h[16] = P),
            (h[17] = D),
            (h[18] = k),
            (h[19] = c))
          : (c = h[19]),
        h[20] !== N
          ? ((u = N
              ? (0, l.jsx)("p", {
                  role: "alert",
                  children: (0, l.jsx)(o.A, {
                    id: "browserSkills.editor.readFileFailed",
                    defaultMessage: "Couldn't open this file. Try again.",
                  }),
                })
              : null),
            (h[20] = N),
            (h[21] = u))
          : (u = h[21]),
        h[22] !== c || h[23] !== u
          ? ((p = (0, l.jsxs)(l.Fragment, { children: [c, u] })), (h[22] = c), (h[23] = u), (h[24] = p))
          : (p = h[24]),
        p
      )
    }
    function Q(e) {
      return e.stopPropagation()
    }
    function H(e) {
      ;("Enter" === e.key || " " === e.key) && e.stopPropagation()
    }
    function V(e) {
      return e.stopPropagation()
    }
    let Z = (0, d.YK)({
      fileInput: { id: "browserSkills.editor.fileInput", defaultMessage: "Supporting files" },
      folderInput: { id: "browserSkills.editor.folderInput", defaultMessage: "Supporting folder" },
      filePath: { id: "browserSkills.editor.filePath", defaultMessage: "File path" },
      fileActions: { id: "browserSkills.editor.fileActions", defaultMessage: "Actions for {path}" },
    })
    var Y = r("JNtf"),
      X = r("mUDD"),
      ee = r("FrrB"),
      et = r("hlym"),
      er = r("odCE")
    function el(e) {
      let t,
        r,
        n,
        i,
        s,
        d,
        c,
        u,
        p,
        h = (0, a.c)(21),
        { title: g, actions: b, children: y, onClose: x, onSubmit: w } = e
      return (
        h[0] !== w
          ? ((t = (e) => {
              ;(e.preventDefault(), w?.())
            }),
            (r = w ? (e) => (0, et.k)(e, w) : void 0),
            (h[0] = w),
            (h[1] = t),
            (h[2] = r))
          : ((t = h[1]), (r = h[2])),
        h[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, l.jsx)(m.z_d, {})),
            (i = (0, l.jsx)(o.A, { id: "browserSkills.editor.back", defaultMessage: "Back" })),
            (h[3] = n),
            (h[4] = i))
          : ((n = h[3]), (i = h[4])),
        h[5] !== x
          ? ((s = (0, l.jsxs)(f.$, {
              type: "button",
              color: "ghostActive",
              size: "dialog",
              onClick: x,
              children: [n, i],
            })),
            (h[5] = x),
            (h[6] = s))
          : (s = h[6]),
        h[7] !== g
          ? ((d = (0, l.jsx)(Y.L3, { className: "sr-only", children: g })), (h[7] = g), (h[8] = d))
          : (d = h[8]),
        h[9] !== b || h[10] !== s || h[11] !== d
          ? ((c = (0, l.jsxs)("header", {
              className:
                "flex items-center justify-between gap-3 border-b border-default bg-surface-secondary px-3 py-3",
              children: [s, d, b],
            })),
            (h[9] = b),
            (h[10] = s),
            (h[11] = d),
            (h[12] = c))
          : (c = h[12]),
        h[13] !== y || h[14] !== t || h[15] !== r || h[16] !== c
          ? ((u = (0, l.jsxs)(X.R4, {
              className: "bg-surface text-default",
              as: "form",
              size: "full",
              variant: "chatgpt",
              onSubmit: t,
              onKeyDown: r,
              children: [c, y],
            })),
            (h[13] = y),
            (h[14] = t),
            (h[15] = r),
            (h[16] = c),
            (h[17] = u))
          : (u = h[17]),
        h[18] !== x || h[19] !== u
          ? ((p = (0, l.jsx)(Y.lG, {
              open: !0,
              unstyledContent: !0,
              viewportSized: !0,
              showDialogClose: !1,
              contentClassName: "h-full w-full",
              onOpenChange: x,
              children: u,
            })),
            (h[18] = x),
            (h[19] = u),
            (h[20] = p))
          : (p = h[20]),
        p
      )
    }
    function ea(e) {
      let t,
        r,
        n,
        i,
        s,
        d = (0, a.c)(11),
        { failure: c, onClose: u, onRetry: p } = e
      return (
        d[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, l.jsx)(o.A, { id: "browserSkills.editor.title", defaultMessage: "Skill editor" })), (d[0] = t))
          : (t = d[0]),
        d[1] !== c
          ? ((r = c
              ? (0, l.jsx)("p", {
                  role: "alert",
                  children:
                    "access" === c
                      ? (0, l.jsx)(o.A, {
                          id: "browserSkills.editor.accessDenied",
                          defaultMessage: "Skills aren't available for this account",
                        })
                      : (0, l.jsx)(o.A, {
                          id: "browserSkills.editor.loadFailed",
                          defaultMessage: "Couldn't load this skill for editing",
                        }),
                })
              : (0, l.jsx)(er.j, {
                  children: (0, l.jsx)(o.A, {
                    id: "browserSkills.editor.loading",
                    defaultMessage: "Loading skill\u2026",
                  }),
                })),
            (d[1] = c),
            (d[2] = r))
          : (r = d[2]),
        d[3] !== p
          ? ((n = p
              ? (0, l.jsx)(f.$, {
                  type: "button",
                  color: "secondary",
                  onClick: p,
                  children: (0, l.jsx)(o.A, { id: "browserSkills.editor.retry", defaultMessage: "Retry" }),
                })
              : null),
            (d[3] = p),
            (d[4] = n))
          : (n = d[4]),
        d[5] !== r || d[6] !== n
          ? ((i = (0, l.jsx)(ee.A, { layout: "page", title: null, description: r, actions: n })),
            (d[5] = r),
            (d[6] = n),
            (d[7] = i))
          : (i = d[7]),
        d[8] !== u || d[9] !== i
          ? ((s = (0, l.jsx)(el, { title: t, onClose: u, children: i })), (d[8] = u), (d[9] = i), (d[10] = s))
          : (s = d[10]),
        s
      )
    }
    function en() {
      let e,
        t,
        r = (0, a.c)(13),
        { skillId: i } = (0, c.g)(),
        s = (0, n.Ul)(C.Jp),
        o = (0, n.Ul)(C.Zf),
        d = (0, c.Zp)()
      r[0] !== d
        ? ((e = () => {
            d("/skills", { state: { initialTab: "skills" } })
          }),
          (r[0] = d),
          (r[1] = e))
        : (e = r[1])
      let u = e
      if (!0 !== o || null == s) {
        let e,
          a = null == o ? void 0 : "access"
        ;(r[2] !== u || r[3] !== a
          ? ((e = (0, l.jsx)(ea, { failure: a, onClose: u })), (r[2] = u), (r[3] = a), (r[4] = e))
          : (e = r[4]),
          (t = e))
      } else if (i) {
        let e,
          a = `${s.accountId}:${s.userId}:${i}`
        ;(r[5] !== u || r[6] !== i || r[7] !== a
          ? ((e = (0, l.jsx)(ei, { skillId: i, onClose: u }, a)), (r[5] = u), (r[6] = i), (r[7] = a), (r[8] = e))
          : (e = r[8]),
          (t = e))
      } else {
        let e,
          a,
          n = `${s.accountId}:${s.userId}`
        ;(r[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = { name: "", description: "", instructions: "", files: [] }), (r[9] = e))
          : (e = r[9]),
          r[10] !== u || r[11] !== n
            ? ((a = (0, l.jsx)(es, { initialDraft: e, onClose: u }, n)), (r[10] = u), (r[11] = n), (r[12] = a))
            : (a = r[12]),
          (t = a))
      }
      return t
    }
    function ei(e) {
      let t,
        r,
        i = (0, a.c)(11),
        { skillId: s, onClose: o } = e,
        { data: d, isError: c, isFetching: u, refetch: p } = (0, n._U)(N, s)
      if (d && !u && !c) {
        let e
        return (
          i[0] !== d.draft || i[1] !== d.skill || i[2] !== o
            ? ((e = (0, l.jsx)(es, { skill: d.skill, initialDraft: d.draft, onClose: o })),
              (i[0] = d.draft),
              (i[1] = d.skill),
              (i[2] = o),
              (i[3] = e))
            : (e = i[3]),
          e
        )
      }
      let f = c ? "load" : void 0
      return (
        i[4] !== c || i[5] !== p ? ((t = c ? () => void p() : void 0), (i[4] = c), (i[5] = p), (i[6] = t)) : (t = i[6]),
        i[7] !== o || i[8] !== f || i[9] !== t
          ? ((r = (0, l.jsx)(ea, { failure: f, onClose: o, onRetry: t })),
            (i[7] = o),
            (i[8] = f),
            (i[9] = t),
            (i[10] = r))
          : (r = i[10]),
        r
      )
    }
    function es(e) {
      let t,
        r,
        d,
        z,
        K,
        L,
        O,
        G,
        J,
        $,
        B,
        U,
        Q,
        H,
        V,
        Z,
        Y,
        X,
        ee,
        et,
        er,
        ea,
        en,
        ei,
        es,
        ef,
        eh,
        em,
        eg,
        eb,
        ey,
        ex,
        ew,
        e_,
        ek,
        ev,
        ej,
        eS,
        eA,
        eI,
        eC,
        eM,
        eE,
        eD,
        eq,
        eP = (0, a.c)(160),
        { skill: ez, initialDraft: eN, onClose: eT } = e,
        eR = (0, n.gh)(w.u),
        eF = (0, s.A)(),
        eK = (0, c.Zp)(),
        eL = (0, n.Ul)(C.Jp),
        eO = (0, n.Ul)(C.Vq),
        eG = (0, i.useContext)(c.hf),
        [eJ, eW] = (0, i.useState)(eN),
        [e$, eB] = (0, i.useState)(eN),
        [eU, eQ] = (0, i.useState)(!1),
        [eH, eV] = (0, i.useState)(!1),
        [eZ, eY] = (0, i.useState)(!1),
        [eX, e0] = (0, i.useState)(!1),
        [e1, e2] = (0, i.useState)(!1),
        [e4, e5] = (0, i.useState)(null),
        [e3, e7] = (0, i.useState)(!1),
        e6 = (0, i.useId)(),
        [e8, e9] = (0, i.useState)(null)
      if (eP[0] !== e$.files || eP[1] !== e8?.id) {
        let e
        ;(eP[4] !== e8?.id ? ((e = (e) => e.id === e8?.id), (eP[4] = e8?.id), (eP[5] = e)) : (e = eP[5]),
          (r = null != (t = e$.files.find(e)) && "svg" === (0, x.Zo)(t.path)),
          (eP[0] = e$.files),
          (eP[1] = e8?.id),
          (eP[2] = t),
          (eP[3] = r))
      } else ((t = eP[2]), (r = eP[3]))
      let te = r,
        tt = (0, i.useRef)(null),
        tr = (0, i.useRef)(null),
        tl = (0, i.useRef)(!1)
      eP[6] !== eO || eP[7] !== eL?.userId || eP[8] !== ez
        ? ((d = ez ? (0, A.wu)(ez, eL?.userId) : eO), (eP[6] = eO), (eP[7] = eL?.userId), (eP[8] = ez), (eP[9] = d))
        : (d = eP[9])
      let ta = d
      eP[10] !== e$ ? ((z = T(e$)), (eP[10] = e$), (eP[11] = z)) : (z = eP[11])
      let tn = z,
        ti = e$.description.length > 500,
        ts = tn ?? (e1 ? "save" : null)
      eP[12] !== eJ.description ||
      eP[13] !== eJ.files ||
      eP[14] !== eJ.instructions ||
      eP[15] !== eJ.name ||
      eP[16] !== e$.description ||
      eP[17] !== e$.files ||
      eP[18] !== e$.instructions ||
      eP[19] !== e$.name
        ? ((K =
            e$.name !== eJ.name ||
            e$.description !== eJ.description ||
            e$.instructions !== eJ.instructions ||
            e$.files.length !== eJ.files.length ||
            e$.files.some((e, t) => e.path !== eJ.files[t].path || e.source !== eJ.files[t].source)),
          (eP[12] = eJ.description),
          (eP[13] = eJ.files),
          (eP[14] = eJ.instructions),
          (eP[15] = eJ.name),
          (eP[16] = e$.description),
          (eP[17] = e$.files),
          (eP[18] = e$.instructions),
          (eP[19] = e$.name),
          (eP[20] = K))
        : (K = eP[20])
      let to = K,
        td = to || eU
      eP[21] !== eR || eP[22] !== ez
        ? ((L = (e) => {
            if ((tt.current?.abort(), null == e)) return void e9(null)
            if ("text" === e.source.kind || !R(e))
              return void e9({ id: e.id, status: "ready", content: "text" === e.source.kind ? e.source.content : null })
            let t = new AbortController()
            ;((tt.current = t),
              e9({ id: e.id, content: null, status: "loading" }),
              F(eR, e, ez, t.signal)
                .then(ec)
                .then((r) => {
                  t.signal.aborted || e9({ id: e.id, content: r, status: "ready" })
                })
                .catch(() => {
                  t.signal.aborted || e9({ id: e.id, content: null, status: "error" })
                }))
          }),
          (eP[21] = eR),
          (eP[22] = ez),
          (eP[23] = L))
        : (L = eP[23])
      let tc = L
      ;(eP[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = () => () => {
            ;(tr.current?.abort(), tt.current?.abort())
          }),
          (G = []),
          (eP[24] = O),
          (eP[25] = G))
        : ((O = eP[24]), (G = eP[25])),
        (0, i.useEffect)(O, G),
        eP[26] !== td
          ? ((J = () => {
              if (td)
                return (
                  window.addEventListener("beforeunload", ed),
                  () => window.removeEventListener("beforeunload", ed)
                )
            }),
            ($ = [td]),
            (eP[26] = td),
            (eP[27] = J),
            (eP[28] = $))
          : ((J = eP[27]), ($ = eP[28])),
        (0, i.useEffect)(J, $),
        eP[29] !== td || eP[30] !== eT
          ? ((B = () => {
              td ? e7(!0) : eT()
            }),
            (eP[29] = td),
            (eP[30] = eT),
            (eP[31] = B))
          : (B = eP[31]))
      let tu = B
      eP[32] !== ta ||
      eP[33] !== e$ ||
      eP[34] !== eF ||
      eP[35] !== eK ||
      eP[36] !== eR ||
      eP[37] !== ez ||
      eP[38] !== tn
        ? ((U = (e) => {
            let t = void 0 !== e && e
            if (!ta || null != tr.current || (e2(!1), tn)) return
            let r = new AbortController()
            ;((tr.current = r),
              eQ(!0),
              e5(null),
              (async function (e, t, r, l, a) {
                let n,
                  i = e.get(C.Jp)
                if (null == i || !0 !== e.get(C.Zf) || (r ? !(0, A.wu)(r, i.userId) : !e.get(C.Vq)) || null != T(t))
                  throw Error("Skill draft cannot be saved")
                let s = {
                    id: r?.id,
                    name: t.name,
                    display_name: r?.display_name,
                    description: t.description,
                    instructions: t.instructions,
                    apply_resolution: l,
                    files: [],
                    file_contents: [],
                  },
                  o = () => e.get(C.Jp)?.accountId === i.accountId && e.get(C.Jp)?.userId === i.userId
                if (t.files.some(({ source: e }) => "local" === e.kind) && !e.get(C.oo))
                  throw Error("Skill upload permission required")
                s.file_contents = t.files.flatMap(({ path: e, source: t }) =>
                  "text" === t.kind ? [{ path: e, content: t.content }] : [],
                )
                let d = await Promise.all(
                  t.files.map(async ({ path: t, source: r }) => {
                    if ((a.throwIfAborted(), !o() || "text" === r.kind)) return null
                    if ("stored" === r.kind) return { ...r.reference, path: t }
                    let { uploads: l } = await D.Request.safePost("/hazelnuts/draft/uploads", {
                        additionalHeaders: { "ChatGPT-Account-ID": i.accountId },
                        requestBody: {
                          files: [{ filename: r.file.name, content_type: r.file.type || "application/octet-stream" }],
                        },
                        signal: a,
                      }),
                      n = l[0]
                    if (null == n) throw Error("Skill upload unavailable")
                    return o() &&
                      (await (0, E.uploadChatGptFileBytes)(e, {
                        file: r.file,
                        fileId: n.file_id,
                        fileName: r.file.name,
                        contentType: r.file.type || "application/octet-stream",
                        uploadUrl: n.upload_url,
                        signal: a,
                      }),
                      o())
                      ? (await D.Request.safePost("/hazelnuts/uploads/finish", {
                          additionalHeaders: { "ChatGPT-Account-ID": i.accountId },
                          requestBody: { file_id: n.file_id },
                          signal: a,
                        }),
                        { file_id: n.file_id, path: t })
                      : null
                  }),
                )
                if (((s.files = d.filter((e) => null != e)), a.throwIfAborted(), !o())) return null
                try {
                  n = await D.Request.safePost("/hazelnuts/draft", {
                    additionalHeaders: { "ChatGPT-Account-ID": i.accountId },
                    requestBody: s,
                    expectedErrorStatuses: [400, 401, 403, 404, 409, 413, 422],
                    signal: a,
                  })
                } catch (c) {
                  if (
                    !(c instanceof P.FetchError) ||
                    404 !== c.status ||
                    !r?.sediment_id ||
                    !t.files.some(({ source: e }) => "stored" === e.kind && e.reference.file_id === r.sediment_id)
                  )
                    throw c
                  if ((a.throwIfAborted(), !o())) return null
                  let e = await D.Request.safeGet("/hazelnuts/{hazelnut_id}", {
                    additionalHeaders: { "ChatGPT-Account-ID": i.accountId },
                    parameters: { path: { hazelnut_id: r.id }, query: { include_permissions: !0 } },
                    expectedErrorStatuses: [403, 404],
                    signal: a,
                  })
                  if ((a.throwIfAborted(), !o())) return null
                  if (
                    !e.sediment_id ||
                    e.sediment_id === r.sediment_id ||
                    e.permissions?.can_read === !1 ||
                    !(0, A.wu)(e, i.userId)
                  )
                    throw c
                  let l = d.map((l, a) => {
                    let { source: n } = t.files[a]
                    if ("stored" !== n.kind || n.reference.file_id !== r.sediment_id) return l
                    let i = e.files[n.reference.path]
                    if (null == i) throw c
                    return { file_id: e.sediment_id, path: t.files[a].path, range: i }
                  })
                  n = await D.Request.safePost("/hazelnuts/draft", {
                    additionalHeaders: { "ChatGPT-Account-ID": i.accountId },
                    requestBody: { ...s, files: l.filter((e) => null != e) },
                    expectedErrorStatuses: [400, 401, 403, 404, 409, 413, 422],
                    signal: a,
                  })
                }
                let c = n.hazelnuts[0]
                if (null == c) throw Error("Skill save returned no skill")
                let u = { ...c, permissions: c.permissions ?? r?.permissions },
                  p = ["browser-skills", i.accountId, i.userId]
                for (let t of (await e.queryClient.cancelQueries({ queryKey: p }),
                e.queryClient.setQueriesData({ queryKey: [...p, "collection"] }, (e) =>
                  e?.map((e) => (e.id === u.id ? u : e)),
                ),
                ["created", "installed"]))
                  ("created" === t ? u.creator_id === i.userId : u.enabled) &&
                    e.queryClient.setQueryData([...p, "collection", t], (e) => [
                      ...(e?.filter((e) => e.id !== u.id) ?? []),
                      u,
                    ])
                return (e.queryClient.setQueryData([...p, "detail", u.id], u),
                await e.queryClient.invalidateQueries({ queryKey: [...p, "editor", u.id], refetchType: "none" }),
                o())
                  ? ((0, q.yy)(e, r ? M.Qz : M.kI, { hazelnutId: u.id }), u)
                  : null
              })(eR, e$, ez, t, r.signal)
                .then((e) => {
                  if (null == e || r.signal.aborted) return
                  let t = {
                    ...e$,
                    name: e.name,
                    description: e.description,
                    files: e$.files.map((t) =>
                      "text" !== t.source.kind && e.sediment_id && e.files[t.path]
                        ? {
                            ...t,
                            source: {
                              kind: "stored",
                              reference: { file_id: e.sediment_id, path: t.path, range: e.files[t.path] },
                            },
                          }
                        : t,
                    ),
                  }
                  ;(eB(t),
                    eW(t),
                    eR.query.setData(N, e.id, { skill: e, draft: t }),
                    eR
                      .get(y.Id)
                      .success(eF.formatMessage({ id: "browserSkills.editor.saved", defaultMessage: "Skill saved" })),
                    e.id !== ez?.id &&
                      ((tl.current = !0),
                      eK(`/skills/editor/${encodeURIComponent(e.id)}`, {
                        replace: !0,
                        state: { initialTab: "skills" },
                      })))
                })
                .catch((e) => {
                  if (r.signal.aborted) return
                  let l = t ? null : (0, j.b)(e)
                  l ? e5(l) : e2(!0)
                })
                .finally(() => {
                  ;((tr.current = null), eQ(!1))
                }))
          }),
          (eP[32] = ta),
          (eP[33] = e$),
          (eP[34] = eF),
          (eP[35] = eK),
          (eP[36] = eR),
          (eP[37] = ez),
          (eP[38] = tn),
          (eP[39] = U))
        : (U = eP[39])
      let tp = U,
        tf = e$.instructions
      ;(t && (tf = "text" === t.source.kind ? t.source.content : (e8?.content ?? "")),
        eP[40] !== eT
          ? ((Q = () => {
              ;((tl.current = !0), tr.current?.abort(), eT())
            }),
            (eP[40] = eT),
            (eP[41] = Q))
          : (Q = eP[41]))
      let th = Q
      ;(eP[42] !== ez
        ? ((H = ez
            ? (0, l.jsx)(o.A, { id: "browserSkills.editor.editTitle", defaultMessage: "Edit skill" })
            : (0, l.jsx)(o.A, { id: "browserSkills.editor.createTitle", defaultMessage: "Create skill" })),
          (eP[42] = ez),
          (eP[43] = H))
        : (H = eP[43]),
        eP[44] !== eL?.isWorkspace || eP[45] !== eU || eP[46] !== ez
          ? ((V =
              ez && eL?.isWorkspace
                ? (0, l.jsxs)(f.$, {
                    type: "button",
                    color: "outline",
                    size: "dialogAction",
                    disabled: eU,
                    onClick: () => e0(!0),
                    children: [
                      (0, l.jsx)(m._Ui, {}),
                      (0, l.jsx)(o.A, { id: "browserSkills.share", defaultMessage: "Share" }),
                    ],
                  })
                : null),
            (eP[44] = eL?.isWorkspace),
            (eP[45] = eU),
            (eP[46] = ez),
            (eP[47] = V))
          : (V = eP[47]))
      let tm = eU || !ez?.sediment_id || ez.permissions?.can_export === !1
      ;(eP[48] !== eH || eP[49] !== eR || eP[50] !== ez
        ? ((Z = () => {
            ez &&
              !eH &&
              (eV(!0),
              eY(!1),
              (0, v._d)(eR, ez)
                .catch(() => eY(!0))
                .finally(() => eV(!1)))
          }),
          (eP[48] = eH),
          (eP[49] = eR),
          (eP[50] = ez),
          (eP[51] = Z))
        : (Z = eP[51]),
        eP[52] === Symbol.for("react.memo_cache_sentinel")
          ? ((Y = (0, l.jsx)(m.EYt, {})),
            (X = (0, l.jsx)(o.A, { id: "browserSkills.editor.downloadSkill", defaultMessage: "Download skill" })),
            (eP[52] = Y),
            (eP[53] = X))
          : ((Y = eP[52]), (X = eP[53])),
        eP[54] !== eH || eP[55] !== tm || eP[56] !== Z
          ? ((ee = (0, l.jsxs)(f.$, {
              type: "button",
              color: "outline",
              size: "dialogAction",
              loading: eH,
              disabled: tm,
              onClick: Z,
              children: [Y, X],
            })),
            (eP[54] = eH),
            (eP[55] = tm),
            (eP[56] = Z),
            (eP[57] = ee))
          : (ee = eP[57]))
      let tg = !ta || eU || null != tn || (null != ez && !to)
      ;(eP[58] !== ez
        ? ((et = ez
            ? (0, l.jsx)(o.A, { id: "browserSkills.editor.save", defaultMessage: "Save changes" })
            : (0, l.jsx)(o.A, { id: "browserSkills.editor.create", defaultMessage: "Create" })),
          (eP[58] = ez),
          (eP[59] = et))
        : (et = eP[59]),
        eP[60] !== eU || eP[61] !== tg || eP[62] !== et
          ? ((er = (0, l.jsx)(f.$, {
              type: "submit",
              color: "primary",
              size: "dialogAction",
              loading: eU,
              disabled: tg,
              children: et,
            })),
            (eP[60] = eU),
            (eP[61] = tg),
            (eP[62] = et),
            (eP[63] = er))
          : (er = eP[63]),
        eP[64] !== V || eP[65] !== ee || eP[66] !== er
          ? ((ea = (0, l.jsxs)("div", {
              className: "flex flex-wrap items-center justify-end gap-2",
              children: [V, ee, er],
            })),
            (eP[64] = V),
            (eP[65] = ee),
            (eP[66] = er),
            (eP[67] = ea))
          : (ea = eP[67]),
        eP[68] !== tp ? ((en = () => tp()), (eP[68] = tp), (eP[69] = en)) : (en = eP[69]))
      let tb = t?.id ?? null,
        ty = !ta || eU
      return (
        eP[70] !== e$
          ? ((ei = (e) => {
              ;(eB({ ...e$, files: e }), e5(null))
            }),
            (eP[70] = e$),
            (eP[71] = ei))
          : (ei = eP[71]),
        eP[72] !== e$.files || eP[73] !== tc || eP[74] !== ez || eP[75] !== tb || eP[76] !== ty || eP[77] !== ei
          ? ((es = (0, l.jsx)("aside", {
              className: "w-full shrink-0 border-e border-default bg-surface-secondary p-5 md:w-80 md:overflow-y-auto",
              children: (0, l.jsx)(W, {
                selectedId: tb,
                onSelect: tc,
                files: e$.files,
                skill: ez,
                disabled: ty,
                onChange: ei,
              }),
            })),
            (eP[72] = e$.files),
            (eP[73] = tc),
            (eP[74] = ez),
            (eP[75] = tb),
            (eP[76] = ty),
            (eP[77] = ei),
            (eP[78] = es))
          : (es = eP[78]),
        eP[79] !== ta
          ? ((ef = ta
              ? null
              : (0, l.jsx)("p", {
                  role: "alert",
                  children: (0, l.jsx)(o.A, {
                    id: "browserSkills.editor.readOnly",
                    defaultMessage: "You don't have permission to edit this skill",
                  }),
                })),
            (eP[79] = ta),
            (eP[80] = ef))
          : (ef = eP[80]),
        eP[81] !== ta ||
        eP[82] !== ti ||
        eP[83] !== e$ ||
        eP[84] !== e6 ||
        eP[85] !== eF ||
        eP[86] !== eU ||
        eP[87] !== t
          ? ((eh =
              null == t
                ? (0, l.jsx)(_.t, {
                    dividers: !1,
                    children: (0, l.jsxs)("dl", {
                      className: "@container p-4",
                      children: [
                        (0, l.jsx)(h.l, {
                          label: (0, l.jsx)("label", {
                            htmlFor: `${e6}-name`,
                            children: (0, l.jsx)(o.A, { id: "browserSkills.editor.name", defaultMessage: "Name" }),
                          }),
                          children: (0, l.jsx)(b.pd, {
                            id: `${e6}-name`,
                            autoFocus: !0,
                            value: e$.name,
                            placeholder: eF.formatMessage({
                              id: "browserSkills.editor.namePlaceholder",
                              defaultMessage: "your-skill-name",
                            }),
                            maxLength: 64,
                            disabled: !ta || eU,
                            onChange: (e) => {
                              ;(eB({ ...e$, name: e.target.value }), e5(null))
                            },
                          }),
                        }),
                        (0, l.jsx)(h.l, {
                          label: (0, l.jsx)("label", {
                            htmlFor: `${e6}-description`,
                            children: (0, l.jsx)(o.A, {
                              id: "browserSkills.editor.description",
                              defaultMessage: "Description",
                            }),
                          }),
                          children: (0, l.jsxs)("div", {
                            className: "flex w-full flex-col gap-2",
                            children: [
                              (0, l.jsx)(b.TM, {
                                id: `${e6}-description`,
                                variant: "settings",
                                autoResize: !0,
                                rows: 1,
                                maxLength: 500,
                                value: e$.description,
                                "aria-invalid": ti,
                                "aria-describedby": `${e6}-description-count${ti ? ` ${e6}-description-error` : ""}`,
                                placeholder: eF.formatMessage({
                                  id: "browserSkills.editor.descriptionPlaceholder",
                                  defaultMessage: "Describe what the skill does",
                                }),
                                disabled: !ta || eU,
                                onChange: (e) => eB({ ...e$, description: e.target.value }),
                              }),
                              (0, l.jsx)("p", {
                                id: `${e6}-description-count`,
                                className: "text-xs text-secondary",
                                children: (0, l.jsx)(o.A, {
                                  id: "browserSkills.editor.descriptionCharacterCount",
                                  defaultMessage: "{count, number} / {limit, number} characters",
                                  values: { count: e$.description.length, limit: 500 },
                                }),
                              }),
                              ti
                                ? (0, l.jsx)("p", {
                                    id: `${e6}-description-error`,
                                    role: "alert",
                                    children: (0, l.jsx)(o.A, { ...ep.description, values: { limit: 500 } }),
                                  })
                                : null,
                            ],
                          }),
                        }),
                      ],
                    }),
                  })
                : null),
            (eP[81] = ta),
            (eP[82] = ti),
            (eP[83] = e$),
            (eP[84] = e6),
            (eP[85] = eF),
            (eP[86] = eU),
            (eP[87] = t),
            (eP[88] = eh))
          : (eh = eP[88]),
        eP[89] === Symbol.for("react.memo_cache_sentinel")
          ? ((em = (0, l.jsx)("h2", {
              className: "sr-only",
              children: (0, l.jsx)(o.A, { id: "browserSkills.editor.instructions", defaultMessage: "Instructions" }),
            })),
            (eP[89] = em))
          : (em = eP[89]),
        eP[90] !== t || eP[91] !== e8?.status
          ? ((eg = t && e8?.status === "loading" ? (0, l.jsx)(g.y, {}) : null),
            (eP[90] = t),
            (eP[91] = e8?.status),
            (eP[92] = eg))
          : (eg = eP[92]),
        eP[93] !== tc || eP[94] !== t || eP[95] !== e8?.status
          ? ((eb =
              t && e8?.status === "error"
                ? (0, l.jsxs)("div", {
                    role: "alert",
                    children: [
                      (0, l.jsx)(o.A, {
                        id: "browserSkills.editor.fileLoadFailed",
                        defaultMessage: "Couldn't load this file",
                      }),
                      (0, l.jsx)(f.$, {
                        type: "button",
                        color: "secondary",
                        onClick: () => tc(t),
                        children: (0, l.jsx)(o.A, { id: "browserSkills.editor.retry", defaultMessage: "Retry" }),
                      }),
                    ],
                  })
                : null),
            (eP[93] = tc),
            (eP[94] = t),
            (eP[95] = e8?.status),
            (eP[96] = eb))
          : (eb = eP[96]),
        eP[97] !== t
          ? ((ey =
              t && !R(t)
                ? (0, l.jsx)("p", {
                    className: "text-secondary",
                    children: (0, l.jsx)(o.A, {
                      id: "browserSkills.editor.downloadToView",
                      defaultMessage: "Use the file menu to download and view this file",
                    }),
                  })
                : null),
            (eP[97] = t),
            (eP[98] = ey))
          : (ey = eP[98]),
        eP[99] !== tf || eP[100] !== te || eP[101] !== t || eP[102] !== e8?.status
          ? ((ex =
              te && e8?.status === "ready"
                ? (0, l.jsx)("div", {
                    className: "flex flex-1 items-center justify-center overflow-auto p-3 text-sm",
                    children: (0, l.jsx)(
                      p.t,
                      {
                        className: "max-h-96 w-full",
                        alt: t.path,
                        svgString: tf,
                        onError: () => {
                          e9({ id: t.id, content: null, status: "error" })
                        },
                      },
                      t.id,
                    ),
                  })
                : null),
            (eP[99] = tf),
            (eP[100] = te),
            (eP[101] = t),
            (eP[102] = e8?.status),
            (eP[103] = ex))
          : (ex = eP[103]),
        eP[104] !== ta ||
        eP[105] !== e$ ||
        eP[106] !== tf ||
        eP[107] !== eF ||
        eP[108] !== te ||
        eP[109] !== eU ||
        eP[110] !== t ||
        eP[111] !== e8
          ? ((ew =
              te || (null != t && (e8?.status !== "ready" || null == e8.content))
                ? null
                : (0, l.jsx)("div", {
                    className: "min-h-0 flex-1",
                    inert: !ta || eU,
                    children: (0, l.jsx)(
                      u.ChatGptCodeBlockEditor,
                      {
                        code: tf,
                        placeholder:
                          null == t
                            ? eF.formatMessage({
                                id: "browserSkills.editor.instructionsPlaceholder",
                                defaultMessage: "Write skill instructions\u2026",
                              })
                            : void 0,
                        language: null == t ? "markdown" : t.path.split(".").at(-1),
                        wrapLines: !0,
                        onBlur: eo,
                        onChange: (e) => {
                          ta &&
                            !eU &&
                            eB(
                              null == t
                                ? { ...e$, instructions: e }
                                : {
                                    ...e$,
                                    files: e$.files.map((r) =>
                                      r.id === t.id ? { ...r, source: { kind: "text", content: e } } : r,
                                    ),
                                  },
                            )
                        },
                      },
                      t?.id ?? "SKILL.md",
                    ),
                  })),
            (eP[104] = ta),
            (eP[105] = e$),
            (eP[106] = tf),
            (eP[107] = eF),
            (eP[108] = te),
            (eP[109] = eU),
            (eP[110] = t),
            (eP[111] = e8),
            (eP[112] = ew))
          : (ew = eP[112]),
        eP[113] !== eg || eP[114] !== eb || eP[115] !== ey || eP[116] !== ex || eP[117] !== ew
          ? ((e_ = (0, l.jsxs)("section", {
              className: "flex min-h-0 flex-1 flex-col gap-2",
              children: [em, eg, eb, ey, ex, ew],
            })),
            (eP[113] = eg),
            (eP[114] = eb),
            (eP[115] = ey),
            (eP[116] = ex),
            (eP[117] = ew),
            (eP[118] = e_))
          : (e_ = eP[118]),
        eP[119] !== ts || eP[120] !== t
          ? ((ek =
              ts && ("description" !== ts || null != t)
                ? (0, l.jsx)("p", { role: "alert", children: (0, l.jsx)(o.A, { ...ep[ts], values: { limit: 500 } }) })
                : null),
            (eP[119] = ts),
            (eP[120] = t),
            (eP[121] = ek))
          : (ek = eP[121]),
        eP[122] !== eZ
          ? ((ev = eZ
              ? (0, l.jsx)("p", {
                  role: "alert",
                  children: (0, l.jsx)(o.A, {
                    id: "browserSkills.editor.downloadFailed",
                    defaultMessage: "Couldn't download this skill. Try again.",
                  }),
                })
              : null),
            (eP[122] = eZ),
            (eP[123] = ev))
          : (ev = eP[123]),
        eP[124] !== ef || eP[125] !== eh || eP[126] !== e_ || eP[127] !== ek || eP[128] !== ev
          ? ((ej = (0, l.jsxs)("main", {
              className: "flex min-w-0 flex-1 flex-col gap-4 p-5 md:overflow-y-auto",
              children: [ef, eh, e_, ek, ev],
            })),
            (eP[124] = ef),
            (eP[125] = eh),
            (eP[126] = e_),
            (eP[127] = ek),
            (eP[128] = ev),
            (eP[129] = ej))
          : (ej = eP[129]),
        eP[130] !== es || eP[131] !== ej
          ? ((eS = (0, l.jsxs)("div", {
              className: "flex min-h-0 flex-1 flex-col overflow-y-auto md:flex-row md:overflow-hidden",
              children: [es, ej],
            })),
            (eP[130] = es),
            (eP[131] = ej),
            (eP[132] = eS))
          : (eS = eP[132]),
        eP[133] !== tu || eP[134] !== H || eP[135] !== ea || eP[136] !== en || eP[137] !== eS
          ? ((eA = (0, l.jsx)(el, { title: H, actions: ea, onClose: tu, onSubmit: en, children: eS })),
            (eP[133] = tu),
            (eP[134] = H),
            (eP[135] = ea),
            (eP[136] = en),
            (eP[137] = eS),
            (eP[138] = eA))
          : (eA = eP[138]),
        eP[139] !== eX || eP[140] !== ez
          ? ((eI = eX && ez ? (0, l.jsx)(I.V, { skill: ez, onClose: () => e0(!1) }) : null),
            (eP[139] = eX),
            (eP[140] = ez),
            (eP[141] = eI))
          : (eI = eP[141]),
        eP[142] !== ta || eP[143] !== e4 || eP[144] !== tp || eP[145] !== eU
          ? ((eC = e4
              ? (0, l.jsx)(S.w, {
                  resolution: e4,
                  disabled: eU || !ta,
                  onCancel: () => e5(null),
                  onConfirm: () => tp(!0),
                })
              : null),
            (eP[142] = ta),
            (eP[143] = e4),
            (eP[144] = tp),
            (eP[145] = eU),
            (eP[146] = eC))
          : (eC = eP[146]),
        eP[147] === Symbol.for("react.memo_cache_sentinel") ? ((eM = () => e7(!1)), (eP[147] = eM)) : (eM = eP[147]),
        eP[148] !== e3 || eP[149] !== th
          ? ((eE = (0, l.jsx)(k.D, { open: e3, onCancel: eM, onConfirm: th })),
            (eP[148] = e3),
            (eP[149] = th),
            (eP[150] = eE))
          : (eE = eP[150]),
        eP[151] !== eG || eP[152] !== td
          ? ((eD = eG
              ? (0, l.jsx)(eu, { shouldBlock: () => !tl.current && td, onDiscard: () => tr.current?.abort() })
              : null),
            (eP[151] = eG),
            (eP[152] = td),
            (eP[153] = eD))
          : (eD = eP[153]),
        eP[154] !== eA || eP[155] !== eI || eP[156] !== eC || eP[157] !== eE || eP[158] !== eD
          ? ((eq = (0, l.jsxs)(l.Fragment, { children: [eA, eI, eC, eE, eD] })),
            (eP[154] = eA),
            (eP[155] = eI),
            (eP[156] = eC),
            (eP[157] = eE),
            (eP[158] = eD),
            (eP[159] = eq))
          : (eq = eP[159]),
        eq
      )
    }
    function eo() {}
    function ed(e) {
      e.preventDefault()
    }
    function ec(e) {
      return e.text()
    }
    function eu(e) {
      let t,
        r = (0, a.c)(3),
        { shouldBlock: n, onDiscard: i } = e,
        s = (0, c.KP)(n)
      return (
        r[0] !== s || r[1] !== i
          ? ((t =
              "blocked" === s.state
                ? (0, l.jsx)(k.D, {
                    open: !0,
                    onCancel: () => s.reset(),
                    onConfirm: () => {
                      ;(i(), s.proceed())
                    },
                  })
                : null),
            (r[0] = s),
            (r[1] = i),
            (r[2] = t))
          : (t = r[2]),
        t
      )
    }
    let ep = (0, d.YK)({
      name: {
        id: "browserSkills.editor.invalidName",
        defaultMessage: "Use up to 64 lowercase letters, numbers, and single hyphens between words",
      },
      instructions: {
        id: "browserSkills.editor.missingInstructions",
        defaultMessage: "Add instructions before saving",
      },
      description: {
        id: "browserSkills.editor.descriptionLimit",
        defaultMessage: "Description must be {limit, number} characters or fewer",
      },
      paths: {
        id: "browserSkills.editor.invalidPaths",
        defaultMessage: "Give each file a unique relative path. SKILL.md is reserved for instructions.",
      },
      save: {
        id: "browserSkills.editor.saveFailed",
        defaultMessage: "Couldn't save this skill. Your edits are still here; try again.",
      },
    })
  },
  kcrg(e, t, r) {
    r.d(
      t,
      {},
      {
        n: function (e, t) {
          let r = new Map([["", []]])
          for (let t of e) {
            let e = t.path.split("/"),
              l = ""
            for (let t = 0; t < e.length - 1; t++) {
              let a = e[t],
                n = l ? `${l}/${a}` : a
              ;(r.has(n) || (r.set(n, []), r.get(l)?.push({ kind: "folder", path: n, name: a, depth: t })), (l = n))
            }
            r.get(l)?.push({ kind: "file", file: t, depth: e.length - 1 })
          }
          let l = [],
            a = (e) => {
              let n = r.get(e)
              for (let e of (n?.sort((e, t) => {
                if (e.kind !== t.kind) return "folder" === e.kind ? -1 : 1
                let r = "folder" === e.kind ? e.name : e.file.path,
                  l = "folder" === t.kind ? t.name : t.file.path
                return r.localeCompare(l, void 0, { numeric: !0, sensitivity: "base" })
              }),
              n ?? []))
                (l.push(e), "folder" !== e.kind || t.has(e.path) || a(e.path))
            }
          return (a(""), l)
        },
      },
    )
  },
  mv2N(e, t, r) {
    var l = r("qmMi"),
      a = r("Kwur"),
      n = r("OWtl"),
      i = r("eShZ"),
      s = r("GDNt"),
      o = r("Wjli")
    let d = (0, l.vU)(n.u, ({ skill: e, path: t }, { get: r }) => {
      let l = r(o.Jp)
      return {
        queryKey: ["browser-skills", l?.accountId, l?.userId, "file", e.id, e.sediment_id, e.check_sum_hash, t],
        enabled: null != l && !0 === r(o.Zf) && e.permissions?.can_read !== !1,
        staleTime: 3e5,
        queryFn: async ({ signal: r }) => {
          if (null == l) throw Error("Skills account unavailable")
          let { bytes: a } = await c(l.accountId, e, t, r)
          return new TextDecoder().decode(a)
        },
      }
    })
    async function c(e, t, r, l) {
      try {
        return { skill: t, bytes: await u(e, t, r, l) }
      } catch (s) {
        if (!t.sediment_id || !(s instanceof i.FetchError) || 404 !== s.status) throw s
        l?.throwIfAborted()
        let n = await a.Request.safeGet("/hazelnuts/{hazelnut_id}", {
          additionalHeaders: { "ChatGPT-Account-ID": e },
          expectedErrorStatuses: [403, 404],
          parameters: { path: { hazelnut_id: t.id }, query: { include_permissions: !0 } },
          signal: l,
        })
        if (!n.sediment_id || n.sediment_id === t.sediment_id || n.permissions?.can_read === !1 || null == n.files[r])
          throw s
        return { skill: n, bytes: await u(e, n, r, l) }
      }
    }
    async function u(e, t, r, l) {
      if (!t.sediment_id)
        return (
          await s._n
            .getInstance()
            .fetch(`/hazelnuts/${encodeURIComponent(t.id)}/files/download`, {
              method: "POST",
              headers: { ...(0, a.Zj)(), "ChatGPT-Account-ID": e, "Content-Type": "application/json" },
              body: JSON.stringify({ path: r }),
              signal: l,
            })
        ).arrayBuffer()
      let n = t.files[r]
      if (null == n) throw Error("Skill file is missing")
      if (0 === n.length) return new ArrayBuffer(0)
      let { download_url: i } = await a.Request.safePost("/hazelnuts/{hazelnut_id}/files/get_download_link", {
        additionalHeaders: { "ChatGPT-Account-ID": e },
        parameters: { path: { hazelnut_id: t.id } },
        requestBody: { file_id: t.sediment_id },
        expectedErrorStatuses: [403, 404],
        signal: l,
      })
      if (!i) throw Error("Skill download URL is missing")
      let o = await s._n
          .getInstance()
          .fetch(i, { headers: { Range: `bytes=${n.start}-${n.start + n.length - 1}` }, signal: l }),
        d = await o.arrayBuffer()
      if (206 === o.status) {
        let e = o.headers.get("Content-Range")
        if (null != e) {
          let t = /^bytes (\d+)-(\d+)\/(?:\d+|\*)$/iu.exec(e)
          if (null == t || Number(t[1]) !== n.start || Number(t[2]) !== n.start + n.length - 1)
            throw Error("Mismatched skill file range")
        }
      } else if (200 === o.status) d = d.slice(n.start, n.start + n.length)
      else throw Error("Unexpected skill file response")
      if (d.byteLength !== n.length) throw Error("Incomplete skill file")
      return d
    }
    r.d(t, {}, { A: d, M: c })
  },
  TlTE(e, t, r) {
    let l = "system_699a14cbc6e4819181b9a89478de1733"
    function a(e, t) {
      if (!(Date.parse(e.updated_at) > Date.parse(t.enabledFrom)) || "approved" === e.safety_check_status) return null
      let r = e.safety_scan?.risk_score
      return null == r || Number.isNaN(r)
        ? null
        : r >= t.blockedScore
          ? "blocked"
          : r >= t.warningScore
            ? "needsReview"
            : null
    }
    function n(e, t) {
      return !e.surfaces?.length || e.surfaces.includes(t)
    }
    function i(e, t) {
      return e.id !== l || t
    }
    r.d(
      t,
      {},
      {
        Dc: n,
        Fj: function (e) {
          return e.display_name?.trim() || e.name
        },
        K: function (e, t, r, l) {
          return e.enabled && e.permissions?.can_read !== !1 && n(e, t) && i(e, r) && null == a(e, l)
        },
        eN: i,
        sV: a,
        wu: function (e, t) {
          return (
            !e.id.startsWith("system_") && (e.permissions?.can_write ?? (null != e.creator_id && e.creator_id === t))
          )
        },
        x1: l,
      },
    )
  },
  OZHl(e, t, r) {
    var l = r("ABep"),
      a = r("QosV"),
      n = r("qmMi"),
      i = r("zd8w"),
      s = r("Wf1j"),
      o = r("oyxz"),
      d = r("iFq6"),
      c = r("Kwur"),
      u = r("OAko"),
      p = r("Sm6l"),
      f = r("mUDD"),
      h = r("bVeK"),
      m = r("RNul"),
      g = r("AOG7"),
      b = r("OWtl"),
      y = r("Q81u"),
      x = r("iJG7"),
      w = r("Srj8"),
      _ = r("ENs9"),
      k = r("wuZu"),
      v = r("FGv0"),
      j = r("TlTE"),
      S = r("Wjli")
    function A(e) {
      return !e.success
    }
    function I(e) {
      return e.target
    }
    function C(e) {
      return { id: `group:${e.id}`, label: e.name, target: { principal_type: "group", principal_id: e.id } }
    }
    function M(e) {
      return { id: `group:${e.id}`, label: e.name, target: { principal_type: "group", principal_id: e.id } }
    }
    function E(e) {
      return {
        id: `user:${e.account_user_id}`,
        colorKey: e.account_user_id,
        label: e.name || e.email || e.account_user_id,
        secondaryLabel: e.email ?? void 0,
        target: { principal_type: "user", principal_id: e.account_user_id },
      }
    }
    r.d(
      t,
      {},
      {
        V: function (e) {
          let t,
            r,
            D,
            q,
            P,
            z,
            N,
            T,
            R,
            F,
            K,
            L,
            O,
            G,
            J,
            W,
            $,
            B,
            U = (0, a.c)(99),
            { skill: Q, onClose: H } = e,
            V = (0, n.gh)(b.u),
            Z = (0, s.A)(),
            Y = (0, n.Ul)(S.Jp),
            X = (0, n.Ul)(S.R),
            { data: ee } = (0, u.YL)(),
            { data: et, isError: er, refetch: el } = (0, n._U)(S.WT, Q.id),
            { data: ea } = (0, n._U)(S.n1, Q.id)
          U[0] !== et?.principals ||
          U[1] !== et?.principals.find ||
          U[2] !== Q.creator_id ||
          U[3] !== Q.creator_name ||
          U[4] !== ea?.creator_name
            ? ((t =
                et?.principals.find((e) => "user" === e.principal_type && e.principal_id === Q.creator_id)?.name ||
                ea?.creator_name ||
                Q.creator_name),
              (U[0] = et?.principals),
              (U[1] = et?.principals.find),
              (U[2] = Q.creator_id),
              (U[3] = Q.creator_name),
              (U[4] = ea?.creator_name),
              (U[5] = t))
            : (t = U[5])
          let en = t,
            [ei, es] = (0, i.useState)("")
          U[6] === Symbol.for("react.memo_cache_sentinel") ? ((r = []), (U[6] = r)) : (r = U[6])
          let [eo, ed] = (0, i.useState)(r),
            [ec, eu] = (0, i.useState)(!1),
            [ep, ef] = (0, i.useState)(!1),
            [eh, em] = (0, i.useState)(!1),
            [eg, eb] = (0, i.useState)(null),
            ey = et?.workspace_access_state ?? "restricted",
            ex = X.individuals && Q.permissions?.can_share === !0,
            ew = X.workspace && Q.permissions?.can_share_workspace === !0,
            e_ = X.enableWorkspace && Q.permissions?.can_enable_share === !0,
            ek = ex && "restricted" === ey ? ei : "",
            { data: ev, isError: ej } = (0, g.Nv)(ek),
            { data: eS, isError: eA } = (0, g.Nc)(ek),
            { data: eI, isError: eC } =
              (0, n._U)(d.l, Y?.accountId ?? "", { enabled: ex && "restricted" === ey }) ?? {},
            eM = ee?.id === Y?.accountId ? ee?.name : void 0
          U[7] !== ey ||
          U[8] !== ex ||
          U[9] !== et ||
          U[10] !== eS ||
          U[11] !== ek ||
          U[12] !== eo ||
          U[13] !== Q.creator_id ||
          U[14] !== eI ||
          U[15] !== eC ||
          U[16] !== ev
            ? ((D =
                null == ev && null == eS && null == eI
                  ? void 0
                  : [
                      ...(ev?.map(E) ?? []),
                      ...(eS?.map(M) ?? []),
                      ...(ex && "restricted" === ey && !eC
                        ? (eI ?? [])
                            .filter(
                              (e) =>
                                !eS?.some((t) => t.id === e.id) &&
                                e.name.toLocaleLowerCase().includes(ek.trim().toLocaleLowerCase()),
                            )
                            .map(C)
                        : []),
                    ].filter(
                      (e) =>
                        !eo.some((t) => t.id === e.id) &&
                        ("user" !== e.target.principal_type || e.target.principal_id !== Q.creator_id) &&
                        !et?.principals.some(
                          (t) =>
                            t.principal_type === e.target.principal_type && t.principal_id === e.target.principal_id,
                        ),
                    )),
              (U[7] = ey),
              (U[8] = ex),
              (U[9] = et),
              (U[10] = eS),
              (U[11] = ek),
              (U[12] = eo),
              (U[13] = Q.creator_id),
              (U[14] = eI),
              (U[15] = eC),
              (U[16] = ev),
              (U[17] = D))
            : (D = U[17])
          let eE = D
          U[18] !== Y || U[19] !== ec || U[20] !== V
            ? ((q = async (e) => {
                if (
                  !ec &&
                  null != Y &&
                  !0 === V.get(S.Zf) &&
                  V.get(S.Jp)?.accountId === Y.accountId &&
                  V.get(S.Jp)?.userId === Y.userId
                ) {
                  ;(eu(!0), ef(!1))
                  try {
                    await e()
                  } catch {
                    ef(!0)
                  }
                  eu(!1)
                }
              }),
              (U[18] = Y),
              (U[19] = ec),
              (U[20] = V),
              (U[21] = q))
            : (q = U[21])
          let eD = q,
            eq = Y?.accountId ?? ""
          U[22] !== eq ? ((P = { "ChatGPT-Account-ID": eq }), (U[22] = eq), (U[23] = P)) : (P = U[23])
          let eP = P
          U[24] !== Q.id ? ((z = { hazelnut_id: Q.id }), (U[24] = Q.id), (U[25] = z)) : (z = U[25])
          let ez = z
          U[26] !== ey || U[27] !== ex || U[28] !== eP || U[29] !== ez || U[30] !== el || U[31] !== eD || U[32] !== eo
            ? ((N = () => {
                ex &&
                  "restricted" === ey &&
                  0 !== eo.length &&
                  eD(async () => {
                    let e = await c.Request.safePost("/hazelnuts/{hazelnut_id}/share", {
                      additionalHeaders: eP,
                      parameters: { path: ez },
                      requestBody: { targets: eo.map(I) },
                    })
                    await el()
                    let t = e.attempts.filter(A)
                    if (
                      (ed(
                        eo.filter((e) =>
                          t.some(
                            (t) =>
                              t.principal_type === e.target.principal_type && t.principal_id === e.target.principal_id,
                          ),
                        ),
                      ),
                      t.length > 0)
                    )
                      throw Error("Some skill invitations failed")
                  })
              }),
              (U[26] = ey),
              (U[27] = ex),
              (U[28] = eP),
              (U[29] = ez),
              (U[30] = el),
              (U[31] = eD),
              (U[32] = eo),
              (U[33] = N))
            : (N = U[33])
          let eN = N
          U[34] !== eM
            ? ((T = (e) =>
                "restricted" === e
                  ? (0, l.jsx)(o.A, { id: "browserSkills.sharing.invited", defaultMessage: "Only those invited" })
                  : "enabled" === e
                    ? eM
                      ? (0, l.jsx)(o.A, {
                          id: "browserSkills.sharing.enabled",
                          defaultMessage: "Installed for everyone at {workspaceName}",
                          values: { workspaceName: eM },
                        })
                      : (0, l.jsx)(o.A, {
                          id: "browserSkills.sharing.enabledFallback",
                          defaultMessage: "Installed for everyone in your workspace",
                        })
                    : eM
                      ? (0, l.jsx)(o.A, {
                          id: "browserSkills.sharing.workspace",
                          defaultMessage: "Anyone at {workspaceName}",
                          values: { workspaceName: eM },
                        })
                      : (0, l.jsx)(o.A, {
                          id: "browserSkills.sharing.workspaceFallback",
                          defaultMessage: "Anyone in your workspace",
                        })),
              (U[34] = eM),
              (U[35] = T))
            : (T = U[35])
          let eT = T
          return (
            U[36] !== Q ? ((R = (0, j.Fj)(Q)), (U[36] = Q), (U[37] = R)) : (R = U[37]),
            U[38] !== R
              ? ((F = (0, l.jsx)(o.A, {
                  id: "browserSkills.sharing.namedSkillTitle",
                  defaultMessage: "Share {name}",
                  values: { name: R },
                })),
                (U[38] = R),
                (U[39] = F))
              : (F = U[39]),
            U[40] === Symbol.for("react.memo_cache_sentinel")
              ? ((K = (0, l.jsx)(o.A, { id: "browserSkills.sharing.cancel", defaultMessage: "Cancel" })), (U[40] = K))
              : (K = U[40]),
            U[41] !== H || U[42] !== ec
              ? ((L = (0, l.jsx)(
                  p.$,
                  { type: "button", color: "secondary", size: "detailAction", disabled: ec, onClick: H, children: K },
                  "cancel",
                )),
                (U[41] = H),
                (U[42] = ec),
                (U[43] = L))
              : (L = U[43]),
            U[44] !== ey ||
            U[45] !== ex ||
            U[46] !== eh ||
            U[47] !== et ||
            U[48] !== er ||
            U[49] !== ec ||
            U[50] !== eD ||
            U[51] !== eo.length ||
            U[52] !== Q.id
              ? ((O =
                  eo.length > 0
                    ? (0, l.jsx)(
                        p.$,
                        {
                          type: "submit",
                          color: "primary",
                          size: "detailAction",
                          loading: ec,
                          disabled: !ex || "restricted" !== ey || null == et || er,
                          children: (0, l.jsx)(o.A, { id: "browserSkills.sharing.invite", defaultMessage: "Invite" }),
                        },
                        "invite",
                      )
                    : (0, l.jsxs)(
                        p.$,
                        {
                          type: "button",
                          color: "primary",
                          size: "detailAction",
                          disabled: ec,
                          onClick: () =>
                            void eD(async () => {
                              let e = new URL("/skills", window.location.origin)
                              if ((e.searchParams.set("skill_id", Q.id), !(await (0, v.y2)(e.toString()))))
                                throw Error("Could not copy skill link")
                              em(!0)
                            }),
                          children: [
                            (0, l.jsx)(h.DIB, {}),
                            eh
                              ? (0, l.jsx)(o.A, { id: "browserSkills.sharing.copied", defaultMessage: "Link copied" })
                              : (0, l.jsx)(o.A, { id: "browserSkills.sharing.copy", defaultMessage: "Copy link" }),
                          ],
                        },
                        "copy-link",
                      )),
                (U[44] = ey),
                (U[45] = ex),
                (U[46] = eh),
                (U[47] = et),
                (U[48] = er),
                (U[49] = ec),
                (U[50] = eD),
                (U[51] = eo.length),
                (U[52] = Q.id),
                (U[53] = O))
              : (O = U[53]),
            U[54] !== L || U[55] !== O ? ((G = [L, O]), (U[54] = L), (U[55] = O), (U[56] = G)) : (G = U[56]),
            U[57] !== ep || U[58] !== er || U[59] !== el
              ? ((J =
                  ep || er
                    ? (0, l.jsxs)(f.OO, {
                        children: [
                          (0, l.jsx)("p", {
                            role: "alert",
                            children: (0, l.jsx)(o.A, {
                              id: "browserSkills.sharing.error",
                              defaultMessage: "Couldn't update or load sharing. Please try again.",
                            }),
                          }),
                          er
                            ? (0, l.jsx)(p.$, {
                                onClick: () => void el(),
                                children: (0, l.jsx)(o.A, { id: "browserSkills.retry", defaultMessage: "Retry" }),
                              })
                            : null,
                        ],
                      })
                    : null),
                (U[57] = ep),
                (U[58] = er),
                (U[59] = el),
                (U[60] = J))
              : (J = U[60]),
            U[61] !== et || U[62] !== er
              ? ((W = null != et || er ? null : (0, l.jsx)(f.OO, { children: (0, l.jsx)(m.y, {}) })),
                (U[61] = et),
                (U[62] = er),
                (U[63] = W))
              : (W = U[63]),
            U[64] !== ey ||
            U[65] !== e_ ||
            U[66] !== ex ||
            U[67] !== ew ||
            U[68] !== en ||
            U[69] !== et ||
            U[70] !== eA ||
            U[71] !== eP ||
            U[72] !== Y?.accountId ||
            U[73] !== Y?.userId ||
            U[74] !== Z ||
            U[75] !== er ||
            U[76] !== eE ||
            U[77] !== ez ||
            U[78] !== ec ||
            U[79] !== eg ||
            U[80] !== ei ||
            U[81] !== el ||
            U[82] !== eT ||
            U[83] !== eD ||
            U[84] !== V ||
            U[85] !== eo ||
            U[86] !== Q.creator_id ||
            U[87] !== eC ||
            U[88] !== ej
              ? (($ =
                  null == et || er
                    ? null
                    : (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)(f.OO, {
                            children: (0, l.jsx)(_.X, {
                              ariaLabel: Z.formatMessage({
                                id: "browserSkills.sharing.people",
                                defaultMessage: "Add people or groups",
                              }),
                              placeholder: Z.formatMessage({
                                id: "browserSkills.sharing.people",
                                defaultMessage: "Add people or groups",
                              }),
                              emptyMessage: (0, l.jsx)(o.A, {
                                id: "browserSkills.sharing.noMatches",
                                defaultMessage: "No people or groups found",
                              }),
                              disabled: !ex || ec || "restricted" !== ey,
                              query: ei,
                              options: eE,
                              searchFailed: ej || eA || eC,
                              selectedOptions: eo,
                              portalContainer: eg,
                              onQueryChange: es,
                              onSelectOption: (e) => ed([...eo, e]),
                              onRemoveOption: (e) => ed(eo.filter((t) => t.id !== e.id)),
                              getRemoveLabel: (e) =>
                                Z.formatMessage(
                                  { id: "browserSkills.sharing.removeRecipient", defaultMessage: "Remove {name}" },
                                  { name: e.label },
                                ),
                            }),
                          }),
                          (0, l.jsxs)(x.p, {
                            children: [
                              (0, l.jsx)(y.d, {
                                disabled: ec || (!ew && !e_),
                                value: ey,
                                renderLabel: eT,
                                options: [
                                  {
                                    value: "restricted",
                                    icon: (0, l.jsx)(h.$Rp, {}),
                                    disabled: !ew && "restricted" !== ey,
                                  },
                                  { value: "discoverable", icon: (0, l.jsx)(h.MEe, {}), disabled: !ew },
                                  { value: "enabled", icon: (0, l.jsx)(h.TlE, {}), hidden: !e_ },
                                ],
                                onChange: (e) => {
                                  ;("enabled" !== e || e_) &&
                                    ("enabled" === e || ew) &&
                                    eD(async () => {
                                      ;(await c.Request.safePost("/hazelnuts/{hazelnut_id}/workspace-access", {
                                        additionalHeaders: eP,
                                        parameters: { path: ez },
                                        requestBody: { state: e },
                                      }),
                                        "restricted" !== e && ed([]),
                                        await Promise.all([
                                          el(),
                                          V.queryClient.invalidateQueries({
                                            queryKey: ["browser-skills", Y?.accountId, Y?.userId, "collection"],
                                          }),
                                        ]))
                                    })
                                },
                              }),
                              ex || ew || e_
                                ? null
                                : (0, l.jsx)("p", {
                                    className: "text-sm text-codex-description",
                                    children: (0, l.jsx)(o.A, {
                                      id: "browserSkills.sharing.disabled",
                                      defaultMessage: "Sharing is disabled by workspace settings",
                                    }),
                                  }),
                              (0, l.jsx)(k.h, {
                                colorKey: Q.creator_id,
                                label: en || Q.creator_id,
                                secondaryLabel: (0, l.jsx)(o.A, {
                                  id: "browserSkills.sharing.owner",
                                  defaultMessage: "Owner",
                                }),
                                trailingContent: null,
                              }),
                              et.principals
                                .filter(
                                  (e) =>
                                    ("user" === e.principal_type || "group" === e.principal_type) &&
                                    ("user" !== e.principal_type || e.principal_id !== Q.creator_id),
                                )
                                .map((e) =>
                                  (0, l.jsx)(
                                    k.h,
                                    {
                                      colorKey: "user" === e.principal_type ? e.principal_id : void 0,
                                      label: e.name,
                                      trailingContent: ex
                                        ? (0, l.jsx)(p.$, {
                                            color: "ghost",
                                            disabled: ec,
                                            onClick: () => {
                                              let t = e.principal_type
                                              ;("user" === t || "group" === t) &&
                                                eD(async () => {
                                                  if (
                                                    !(
                                                      await c.Request.safeDelete("/hazelnuts/{hazelnut_id}/share", {
                                                        additionalHeaders: eP,
                                                        parameters: { path: ez },
                                                        requestBody: {
                                                          principal_type: t,
                                                          principal_id: e.principal_id,
                                                        },
                                                      })
                                                    ).success
                                                  )
                                                    throw Error("Could not remove skill access")
                                                  await el()
                                                })
                                            },
                                            children: (0, l.jsx)(o.A, {
                                              id: "browserSkills.sharing.remove",
                                              defaultMessage: "Remove",
                                            }),
                                          })
                                        : null,
                                    },
                                    `${e.principal_type}:${e.principal_id}`,
                                  ),
                                ),
                            ],
                          }),
                        ],
                      })),
                (U[64] = ey),
                (U[65] = e_),
                (U[66] = ex),
                (U[67] = ew),
                (U[68] = en),
                (U[69] = et),
                (U[70] = eA),
                (U[71] = eP),
                (U[72] = Y?.accountId),
                (U[73] = Y?.userId),
                (U[74] = Z),
                (U[75] = er),
                (U[76] = eE),
                (U[77] = ez),
                (U[78] = ec),
                (U[79] = eg),
                (U[80] = ei),
                (U[81] = el),
                (U[82] = eT),
                (U[83] = eD),
                (U[84] = V),
                (U[85] = eo),
                (U[86] = Q.creator_id),
                (U[87] = eC),
                (U[88] = ej),
                (U[89] = $))
              : ($ = U[89]),
            U[90] !== eN ||
            U[91] !== H ||
            U[92] !== ec ||
            U[93] !== F ||
            U[94] !== G ||
            U[95] !== J ||
            U[96] !== W ||
            U[97] !== $
              ? ((B = (0, l.jsxs)(w.I, {
                  title: F,
                  onClose: H,
                  onPortalContainerChange: eb,
                  isDismissalDisabled: ec,
                  onSubmit: eN,
                  footer: G,
                  children: [J, W, $],
                })),
                (U[90] = eN),
                (U[91] = H),
                (U[92] = ec),
                (U[93] = F),
                (U[94] = G),
                (U[95] = J),
                (U[96] = W),
                (U[97] = $),
                (U[98] = B))
              : (B = U[98]),
            B
          )
        },
      },
    )
  },
  Wjli(e, t, r) {
    var l = r("qmMi"),
      a = r("ASxG"),
      n = r("OiCI"),
      i = r("SPnB"),
      s = r("eFn4"),
      o = r("Kwur"),
      d = r("OWtl"),
      c = r("OMIV"),
      u = r("TlTE")
    let p = (0, l.un)(d.u, ({ get: e }) => (e(c.RS) ? null : (e(c.M9)?.getDynamicConfig("3553340571") ?? null))),
      f = (0, l.un)(d.u, ({ get: e }) => {
        let t = e(c.RS) ? null : e(c.M9)?.getDynamicConfig("73506792"),
          r = a.aig().int().positive().safeParse(t?.get("max_skill_upload_bytes"))
        return r.success ? r.data : 0x1900000
      }),
      h = (0, l.un)(d.u, ({ get: e }) => {
        let t = e(i.PO),
          r = e(n.tT)
        return t.authLoading ||
          t.accountLoading ||
          "chatgpt" !== t.authMethod ||
          null == r ||
          t.accountId !== r ||
          t.authenticatedAccountId !== r
          ? null
          : { accountId: r, userId: t.userId, isWorkspace: "workspace" === t.accountStructure }
      }),
      m = (0, l.un)(d.u, ({ get: e }) => {
        let t = e(p),
          r = e(h)
        if (null == t || null == r) return null
        if (!t.get("enable_api", !1)) return !1
        if (!r.isWorkspace) return !0
        let l = e(c.JW, "1355972088")
        if (l && !t.get("skills_rbac_enabled", !1)) return !0
        let { data: a, isLoading: n, isError: i } = e(s.Jk, r.accountId)
        return n
          ? null
          : l
            ? !i && null != a && a.permissions?.includes("chatgpt.workspace.skills.access") === !0
            : (a?.beta_settings.skills ?? !0)
      }),
      g = (0, l.un)(d.u, ({ get: e }) => {
        let t = e(p),
          r = a.KCZ([a.aig(), a.YjP()]).transform(Number).pipe(a.aig())
        return {
          enabledFrom: t?.get("enable_safety_filter_date", "") ?? "",
          warningScore: r.catch(2).parse(t?.get("hazelnut_min_warning_safety_score")),
          blockedScore: r.catch(5).parse(t?.get("hazelnut_min_blocked_safety_score")),
        }
      }),
      b = (0, l.un)(d.u, ({ get: e }) => {
        if (!0 !== e(m)) return !1
        let t = e(h),
          r = e(p)
        return (
          !(t?.isWorkspace && e(c.JW, "1355972088") && r?.get("skills_rbac_enabled", !1) && e(c.JW, "2711242789")) ||
          e(s.Jk, t.accountId).data?.permissions?.includes("chatgpt.workspace.skills.create") === !0
        )
      }),
      y = (0, l.un)(d.u, ({ get: e }) => {
        if (!0 !== e(m)) return !1
        let t = e(h),
          r = e(p)
        return (
          !(
            t?.isWorkspace &&
            r?.get("enable_additional_rbac_permissions", !1) &&
            e(c.JW, "1355972088") &&
            r.get("skills_rbac_enabled", !1)
          ) || e(s.Jk, t.accountId).data?.permissions?.includes("chatgpt.workspace.skills.upload") === !0
        )
      }),
      x = (0, l.un)(d.u, ({ get: e }) => e(h)?.isWorkspace === !0 && e(p)?.get("skills_rbac_enabled", !1) === !0),
      w = (0, l.vU)(d.u, (e, { get: t }) => {
        let r = t(h),
          l = "workspace-shared" === e || "shared-personal" === e
        return {
          queryKey: ["browser-skills", r?.accountId, r?.userId, "collection", e],
          enabled: !0 === t(m) && null != r && (!l || r.isWorkspace) && ("shared-personal" !== e || t(x)),
          staleTime: 3e5,
          queryFn: async () => {
            if (null == r) throw Error("Skills account unavailable")
            return (
              await o.Request.safeGet("/hazelnuts", {
                additionalHeaders: { "ChatGPT-Account-ID": r.accountId },
                parameters: { query: { scope: e, include_permissions: "workspace-shared" !== e } },
              })
            ).hazelnuts
          },
        }
      }),
      _ = (0, l.i1)(d.u, (e, { get: t }) => {
        if (!t(b)) return null
        let r = t(w, "installed"),
          l = r.data?.find(({ id: e }) => e === u.x1)
        return r.isSuccess &&
          null != l &&
          l.enabled &&
          (0, u.Dc)(l, "work" === e ? "tpp" : "chat") &&
          null == (0, u.sV)(l, t(g))
          ? l
          : null
      }),
      k = (0, l.i1)(d.u, (e, { get: t }) => {
        let r = t(_, e)
        return null == r || t(w, "installed").isFetching ? null : r
      }),
      v = (0, l.vU)(d.u, (e, { get: t }) => {
        let r = t(h)
        return {
          queryKey: ["browser-skills", r?.accountId, r?.userId, "detail", e],
          enabled: !0 === t(m) && null != r,
          staleTime: 3e5,
          refetchOnMount: !0,
          queryFn: () => {
            if (null == r) throw Error("Skills account unavailable")
            return o.Request.safeGet("/hazelnuts/{hazelnut_id}", {
              additionalHeaders: { "ChatGPT-Account-ID": r.accountId },
              expectedErrorStatuses: [403, 404],
              parameters: { path: { hazelnut_id: e }, query: { include_permissions: !0 } },
            })
          },
        }
      }),
      j = (0, l.un)(d.u, ({ get: e }) => {
        let t = e(h),
          r = e(p),
          l = e(c.JW, "1355972088"),
          a = t?.isWorkspace ? e(s.Jk, t.accountId).data?.permissions : void 0,
          n = !l || a?.includes("chatgpt.workspace.skills.share") === !0,
          i =
            n &&
            (!l ||
              !r?.get("enable_additional_rbac_permissions", !1) ||
              a?.includes("chatgpt.workspace.skills.share_workspace") === !0)
        return {
          individuals: t?.isWorkspace === !0 && r?.get("skills_rbac_enabled", !1) === !0 && n,
          workspace: t?.isWorkspace === !0 && i,
          enableWorkspace:
            t?.isWorkspace === !0 && i && (!l || a?.includes("chatgpt.workspace.skills.access_share") === !0),
        }
      }),
      S = (0, l.un)(d.u, ({ get: e }) => {
        let t = e(m)
        if (!0 !== t) return t
        let r = e(h)
        return (
          !!r?.isWorkspace && (e(c.JW, "1355972088") && e(s.Jk, r.accountId).isPending ? null : e(b) && e(j).workspace)
        )
      }),
      A = (0, l.vU)(d.u, (e, { get: t }) => {
        let r = t(h)
        return {
          queryKey: ["browser-skills", r?.accountId, r?.userId, "shares", e],
          enabled: r?.isWorkspace === !0 && !0 === t(m),
          staleTime: 6e4,
          queryFn: () => {
            if (null == r) throw Error("Skills account unavailable")
            return o.Request.safeGet("/hazelnuts/{hazelnut_id}/share", {
              additionalHeaders: { "ChatGPT-Account-ID": r.accountId },
              parameters: { path: { hazelnut_id: e } },
            })
          },
        }
      })
    r.d(
      t,
      {},
      {
        F_: S,
        Jp: h,
        PB: k,
        R: j,
        Vq: b,
        WT: A,
        YE: g,
        Zf: m,
        bi: f,
        eJ: async function (e, t, r) {
          let l = e.get(h)
          if (null == l || !0 !== e.get(m) || (!r && t.id.startsWith("system_"))) return !1
          let a = r && null == t.permissions ? await e.query.getOrFetch(v, t.id) : t
          await o.Request.safePost("/hazelnuts/{hazelnut_id}/status", {
            additionalHeaders: { "ChatGPT-Account-ID": l.accountId },
            parameters: { path: { hazelnut_id: t.id } },
            requestBody: { enabled: r },
          })
          let n = ["browser-skills", l.accountId, l.userId]
          return (
            await e.queryClient.cancelQueries({ queryKey: n }),
            e.queryClient.setQueriesData({ queryKey: [...n, "collection"] }, (e) =>
              e?.map((e) => (e.id === t.id ? { ...e, enabled: r } : e)),
            ),
            e.queryClient.setQueryData([...n, "collection", "installed"], (e) =>
              r ? [...(e?.filter((e) => e.id !== t.id) ?? []), { ...a, enabled: r }] : e?.filter((e) => e.id !== t.id),
            ),
            e.queryClient.setQueryData([...n, "detail", t.id], (e) => (null == e ? void 0 : { ...e, enabled: r })),
            e.get(h)?.accountId === l.accountId && e.get(h)?.userId === l.userId
          )
        },
        h9: x,
        hx: async function (e, t) {
          let r = e.get(h)
          if (null == r || !0 !== e.get(m)) return
          let l = await o.Request.safePatch("/hazelnuts/{hazelnut_id}", {
              additionalHeaders: { "ChatGPT-Account-ID": r.accountId },
              parameters: { path: { hazelnut_id: t.id } },
              requestBody: { safety_check_status: "approved" },
            }),
            a = ["browser-skills", r.accountId, r.userId]
          ;(await e.queryClient.cancelQueries({ queryKey: a }),
            e.queryClient.setQueriesData({ queryKey: [...a, "collection"] }, (e) =>
              e?.map((e) => (e.id === t.id ? l : e)),
            ),
            e.queryClient.setQueryData([...a, "detail", t.id], l))
        },
        n1: v,
        oo: y,
        rR: w,
        sy: _,
      },
    )
  },
  odCE(e, t, r) {
    var l = r("ABep"),
      a = r("QosV"),
      n = r("oyxz"),
      i = r("RNul")
    r.d(
      t,
      {},
      {
        j: function (e) {
          let t,
            r,
            s,
            o = (0, a.c)(5),
            { children: d } = e
          return (
            o[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, l.jsx)(i.y, { className: "icon-xs shrink-0 text-secondary" })), (o[0] = t))
              : (t = o[0]),
            o[1] !== d
              ? ((r =
                  void 0 === d
                    ? (0, l.jsx)(n.A, { id: "settings.panel.loading", defaultMessage: "Loading settings\u2026" })
                    : d),
                (o[1] = d),
                (o[2] = r))
              : (r = o[2]),
            o[3] !== r
              ? ((s = (0, l.jsxs)("div", {
                  className: "flex items-center gap-2 py-2 text-sm text-secondary",
                  role: "status",
                  children: [t, (0, l.jsx)("span", { className: "text-balance", children: r })],
                })),
                (o[3] = r),
                (o[4] = s))
              : (s = o[4]),
            s
          )
        },
      },
    )
  },
  bZug(e, t, r) {
    r.d(
      t,
      {},
      {
        r: "flex flex-col [&>*:not(:last-child)]:relative [&>*:not(:last-child)]:after:pointer-events-none [&>*:not(:last-child)]:after:absolute [&>*:not(:last-child)]:after:inset-x-4 [&>*:not(:last-child)]:after:bottom-0 [&>*:not(:last-child)]:after:h-px [&>*:not(:last-child)]:after:bg-border [&>*:not(:last-child)]:after:content-['']",
        s: "flex flex-col [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-border",
      },
    )
  },
  ZEx5(e, t, r) {
    r.d(t, { t: () => s })
    var l = r("ABep"),
      a = r("QosV"),
      n = r("on57"),
      i = r("bZug")
    function s(e) {
      let t,
        r,
        s,
        o = (0, a.c)(19),
        { children: d, className: c, contentOverflow: u, dividers: p, variant: f, decoration: h } = e,
        m = void 0 === p || p,
        g = void 0 === f ? "default" : f,
        b = "default" === g || "boxed" === g,
        y = "flat" === g || "rows" === g ? i.s : i.r,
        x = m ? y : "flex flex-col",
        w = "recommendation" === g && "rounded-[20px]",
        _ = "recommendation" !== g && "flat" !== g && "rows" !== g && "outlinedLarge" !== g && "rounded-2xl",
        k = "outlinedLarge" === g && "rounded-[30px] border border-default bg-transparent",
        v = "daybreak" === h && "daybreak-VsXdEH",
        j = "visible" === u ? "overflow-visible" : "overflow-hidden",
        S =
          b &&
          "border border-default [--settings-surface-background:initial] group-data-[density=compact]/settings:border-0 group-data-[density=compact]/settings:ring-1 group-data-[density=compact]/settings:ring-inset group-data-[density=compact]/settings:ring-border"
      return (
        o[0] !== c ||
        o[1] !== u ||
        o[2] !== m ||
        o[3] !== x ||
        o[4] !== w ||
        o[5] !== _ ||
        o[6] !== k ||
        o[7] !== v ||
        o[8] !== j ||
        o[9] !== S ||
        o[10] !== g
          ? ((t = (0, n.A)(
              x,
              "[--settings-row-padding-inline:initial]",
              w,
              _,
              k,
              v,
              j,
              S,
              "default" === g && [
                "[[data-settings-panel]_&]:rounded-none [[data-settings-panel]_&]:border-0 [[data-settings-panel]_&]:ring-0 [[data-settings-panel]_&]:[--settings-row-padding-inline:0px] [[data-settings-panel]_&]:[--settings-surface-background:transparent]",
                null == u && "[[data-settings-panel]_&]:overflow-visible",
                m && "[[data-settings-panel]_&>*:not(:last-child)]:after:inset-x-0",
              ],
              "metered" === g && "ring-1 ring-inset ring-border-subtle",
              "secondary" === g && "bg-surface-secondary/92",
              "muted" === g && "bg-(--color-background-neutral-soft-alpha)/50 dark:bg-background-neutral-soft-alpha",
              "form" === g &&
                "border border-subtle bg-surface dark:bg-surface-secondary/92 group-data-[density=form]/settings:border-default group-data-[density=form]/settings:bg-transparent dark:group-data-[density=form]/settings:bg-transparent group-data-[density=form]/settings:[&>*:not(:last-child)]:after:inset-x-5 group-data-[density=form]/settings:[&>*:not(:last-child)]:after:h-px group-data-[density=form]/settings:[&>*:not(:last-child)]:after:bg-border-subtle",
              "outlined" === g && "border border-subtle bg-transparent",
              "flat" === g &&
                "relative bg-transparent before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-border before:content-[''] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-border after:content-['']",
              "input" === g && "border border-primary-outline bg-primary-soft",
              "recommendation" === g && "border border-default bg-secondary-soft dark:bg-transparent",
              c,
            )),
            (o[0] = c),
            (o[1] = u),
            (o[2] = m),
            (o[3] = x),
            (o[4] = w),
            (o[5] = _),
            (o[6] = k),
            (o[7] = v),
            (o[8] = j),
            (o[9] = S),
            (o[10] = g),
            (o[11] = t))
          : (t = o[11]),
        o[12] !== b || o[13] !== g
          ? ((r =
              b || "metered" === g
                ? {
                    backgroundColor: b
                      ? "var(--settings-surface-background, var(--color-background-panel, var(--color-background-neutral-soft-alpha)))"
                      : "var(--color-background-panel, var(--color-background-neutral-soft-alpha))",
                  }
                : void 0),
            (o[12] = b),
            (o[13] = g),
            (o[14] = r))
          : (r = o[14]),
        o[15] !== d || o[16] !== t || o[17] !== r
          ? ((s = (0, l.jsx)("div", { className: t, style: r, children: d })),
            (o[15] = d),
            (o[16] = t),
            (o[17] = r),
            (o[18] = s))
          : (s = o[18]),
        s
      )
    }
  },
  FGv0(e, t, r) {
    var l = r("GaA7"),
      a = r("WFY2")
    let n = "text/plain"
    async function i(e) {
      try {
        return (await l.appServices.clipboard.writeText(e), !0)
      } catch (e) {
        a.v.warning("chatgpt_conversation_share_clipboard_write_failed", {
          safe: { method: "host" },
          sensitive: { error: e },
        })
      }
      let t = window.navigator.clipboard
      if (null == t) return !1
      let r = globalThis.ClipboardItem
      if (null != r && "function" == typeof t.write) {
        let l = new Blob([e], { type: n })
        try {
          return (await t.write([new r({ [n]: l })]), !0)
        } catch (e) {
          a.v.warning("chatgpt_conversation_share_clipboard_write_failed", {
            safe: { method: "clipboard-item" },
            sensitive: { error: e },
          })
        }
      }
      if ("function" != typeof t.writeText) return !1
      try {
        return (await t.writeText(e), !0)
      } catch (e) {
        return (
          a.v.warning("chatgpt_conversation_share_clipboard_write_failed", {
            safe: { method: "write-text" },
            sensitive: { error: e },
          }),
          !1
        )
      }
    }
    r.d(
      t,
      {},
      {
        Xm: async function (e, t) {
          let r = await e
          return (t?.throwIfAborted(), i(r))
        },
        y2: i,
      },
    )
  },
  v7NL(e, t, r) {
    var l = r("QosV"),
      a = r("zd8w"),
      n = r("jDEJ"),
      i = r("bIvi")
    function s(e) {
      ;("function" == typeof e.preventDefault && e.preventDefault(),
        "function" == typeof e.stopPropagation && e.stopPropagation())
    }
    r.d(
      t,
      {},
      {
        C: function (e) {
          let t,
            r,
            o,
            d,
            c,
            u,
            p,
            f,
            h,
            m,
            g,
            b,
            y,
            x,
            w,
            _,
            k,
            v,
            j = (0, l.c)(72),
            {
              items: S,
              isActive: A,
              getItemKey: I,
              onSelect: C,
              onHighlight: M,
              onEscape: E,
              autoHighlightFirst: D,
              clearHighlightOnMouseLeave: q,
              captureWindowKeydown: P,
              keyboardEventTarget: z,
              keyboardVariant: N,
              selectOnSpace: T,
              preserveHighlightOnItemsChange: R,
              numberShortcutCount: F,
              selectOnTab: K,
              requireKeyboardNavigationForSelection: L,
              shouldHandleKeyDown: O,
              highlightResetKey: G,
            } = e,
            J = void 0 === D || D,
            W = void 0 !== q && q,
            $ = void 0 !== P && P,
            B = void 0 === N ? "default" : N,
            U = void 0 !== R && R,
            Q = void 0 === F ? 0 : F,
            H = void 0 !== K && K,
            V = void 0 !== L && L
          j[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, n.Z)()), (j[0] = t)) : (t = j[0])
          let Z = t,
            Y = (0, a.useRef)(null),
            X = (0, a.useRef)(null),
            ee = (0, a.useRef)(!1),
            et = (0, a.useRef)(!1),
            er = (0, a.useRef)(null),
            el = null == S ? 0 : S.length,
            [ea, en] = (0, a.useState)(J && el > 0 ? 0 : -1),
            ei = A && ea >= 0 && ea < el ? (S?.[ea] ?? null) : null
          j[1] !== I || j[2] !== ei
            ? ((r = null == ei ? null : (I?.(ei) ?? ei)), (j[1] = I), (j[2] = ei), (j[3] = r))
            : (r = j[3])
          let es = r
          j[4] !== S || j[5] !== M
            ? ((o = (e) => {
                M?.(S?.[e] ?? null, e)
              }),
              (j[4] = S),
              (j[5] = M),
              (j[6] = o))
            : (o = j[6])
          let eo = (0, a.useEffectEvent)(o)
          ;(j[7] !== J ||
          j[8] !== I ||
          j[9] !== G ||
          j[10] !== ea ||
          j[11] !== A ||
          j[12] !== S ||
          j[13] !== el ||
          j[14] !== U
            ? ((d = () => {
                let e = er.current?.items,
                  t = null != er.current && er.current.highlightResetKey !== G
                ;(!A || t) && (et.current = !1)
                let r = !0 === U || ("user" === U && et.current),
                  l =
                    null == G || "user" === U
                      ? null != e && (t || null == S || e.length !== el || e.some((e, t) => e !== S[t]))
                      : null != er.current && er.current.highlightResetKey !== G
                if (((er.current = { items: S, highlightResetKey: G }), !A || 0 === el)) {
                  ;((ee.current = !1), -1 !== ea && en(-1))
                  return
                }
                if (ea >= 0 && ea < el && ((r && null == I) || !l)) return
                let a = e?.[ea],
                  n = r && null != I && null != a ? (S?.findIndex((e) => I(e) === I(a)) ?? -1) : -1,
                  i = J ? 0 : -1
                ;(n >= 0 ? (i = n) : l && (ee.current = !1), ea !== i && en(i))
              }),
              (c = [J, I, G, ea, A, S, el, U]),
              (j[7] = J),
              (j[8] = I),
              (j[9] = G),
              (j[10] = ea),
              (j[11] = A),
              (j[12] = S),
              (j[13] = el),
              (j[14] = U),
              (j[15] = d),
              (j[16] = c))
            : ((d = j[15]), (c = j[16])),
            (0, a.useEffect)(d, c),
            j[17] !== ea || j[18] !== es || j[19] !== eo
              ? ((u = () => {
                  null == es ? eo(-1) : eo(ea)
                }),
                (j[17] = ea),
                (j[18] = es),
                (j[19] = eo),
                (j[20] = u))
              : (u = j[20]),
            j[21] !== ea || j[22] !== es ? ((p = [ea, es]), (j[21] = ea), (j[22] = es), (j[23] = p)) : (p = j[23]),
            (0, a.useEffect)(u, p),
            j[24] !== ea || j[25] !== A || j[26] !== el
              ? ((f = () => {
                  let e = X.current === ea
                  if (((X.current = null), !A || e || ea < 0 || ea >= el)) return
                  let t = Y.current
                  if (!t) return
                  let r = t.querySelectorAll('[data-list-navigation-item="true"]').item(ea)
                  r?.scrollIntoView({ block: "nearest" })
                }),
                (h = [ea, A, el]),
                (j[24] = ea),
                (j[25] = A),
                (j[26] = el),
                (j[27] = f),
                (j[28] = h))
              : ((f = j[27]), (h = j[28])),
            (0, a.useEffect)(f, h),
            j[29] !== S || j[30] !== el || j[31] !== C
              ? ((m = (e) => {
                  let t = null != S && e >= 0 && e < el ? S[e] : void 0
                  t && ((ee.current = !1), en(e), C(t, e))
                }),
                (j[29] = S),
                (j[30] = el),
                (j[31] = C),
                (j[32] = m))
              : (m = j[32]))
          let ed = (0, i.K)(m)
          j[33] !== ea || j[34] !== A || j[35] !== el
            ? ((g = (e) => {
                ;((ee.current = !1),
                  A && e >= 0 && e < el && (et.current = !0),
                  A && e >= 0 && e < el && e !== ea && ((X.current = e), en(e)))
              }),
              (j[33] = ea),
              (j[34] = A),
              (j[35] = el),
              (j[36] = g))
            : (g = j[36])
          let ec = (0, i.K)(g)
          j[37] !== el
            ? ((b = (e) => {
                ;((ee.current = !0),
                  (et.current = !0),
                  (X.current = null),
                  en((t) => {
                    if (0 === el) return -1
                    if (t < 0) return e >= 0 ? 0 : el - 1
                    if (el <= 0) return -1
                    let r = (t + e) % el
                    return r < 0 ? r + el : r
                  }))
              }),
              (j[37] = el),
              (j[38] = b))
            : (b = j[38])
          let eu = b
          j[39] !== J ||
          j[40] !== ea ||
          j[41] !== ei ||
          j[42] !== A ||
          j[43] !== el ||
          j[44] !== B ||
          j[45] !== eu ||
          j[46] !== Q ||
          j[47] !== E ||
          j[48] !== V ||
          j[49] !== ed ||
          j[50] !== T ||
          j[51] !== H ||
          j[52] !== O
            ? ((y = (e) => {
                if (!A) return !1
                let t = "nativeEvent" in e ? e.nativeEvent : e
                if (O?.(t) === !1 || t.isComposing || 229 === t.keyCode) return !1
                let { key: r } = e
                if (0 === el) return "Escape" === r && !!E && (E(), s(e), !0)
                if ("ArrowDown" === r || (Z && e.ctrlKey && "n" === r)) return (eu(1), s(e), !0)
                if ("ArrowUp" === r || (Z && e.ctrlKey && "p" === r)) return (eu(-1), s(e), !0)
                if (Q > 0 && !e.ctrlKey && !e.metaKey && !e.altKey && /^[1-3]$/.test(r) && Number(r) <= Math.min(Q, el))
                  return (ed(Number(r) - 1), s(e), !0)
                if (
                  !e.altKey &&
                  !e.ctrlKey &&
                  !e.metaKey &&
                  !e.shiftKey &&
                  ("Enter" === r ||
                    ((H || "chatgpt" === B) && "Tab" === r) ||
                    ("chatgpt" === B && " " === r && null != ei && T?.(ei)))
                ) {
                  if (V && !ee.current) return !1
                  let t = ea >= 0 ? ea : J ? 0 : -1
                  return t >= 0 && t < el && (ed(t), s(e), !0)
                }
                return "Escape" === r
                  ? !!E && (E(), s(e), !0)
                  : (!V ||
                      (1 !== r.length && "Backspace" !== r && "Delete" !== r) ||
                      e.metaKey ||
                      e.ctrlKey ||
                      e.altKey ||
                      ((ee.current = !1), en(-1)),
                    !1)
              }),
              (j[39] = J),
              (j[40] = ea),
              (j[41] = ei),
              (j[42] = A),
              (j[43] = el),
              (j[44] = B),
              (j[45] = eu),
              (j[46] = Q),
              (j[47] = E),
              (j[48] = V),
              (j[49] = ed),
              (j[50] = T),
              (j[51] = H),
              (j[52] = O),
              (j[53] = y))
            : (y = j[53])
          let ep = y
          ;(j[54] !== $ || j[55] !== ep || j[56] !== A || j[57] !== z || j[58] !== V
            ? ((x = () => {
                if (!$ || !A) return
                let e = (e) => {
                    ep(e)
                  },
                  t = () => {
                    ;((ee.current = !1), en(-1))
                  },
                  r = z ?? window
                return (
                  r.addEventListener("keydown", e, !0),
                  V &&
                    (r.addEventListener("beforeinput", t, !0),
                    r.addEventListener("compositionstart", t, !0),
                    r.addEventListener("paste", t, !0)),
                  () => {
                    ;(r.removeEventListener("keydown", e, !0),
                      r.removeEventListener("beforeinput", t, !0),
                      r.removeEventListener("compositionstart", t, !0),
                      r.removeEventListener("paste", t, !0))
                  }
                )
              }),
              (w = [$, ep, A, z, V]),
              (j[54] = $),
              (j[55] = ep),
              (j[56] = A),
              (j[57] = z),
              (j[58] = V),
              (j[59] = x),
              (j[60] = w))
            : ((x = j[59]), (w = j[60])),
            (0, a.useEffect)(x, w),
            j[61] !== ep
              ? ((_ = (e) => {
                  let t = void 0 === e ? {} : e
                  return {
                    onKeyDown: (e) => {
                      ep(e) || t.onKeyDown?.(e)
                    },
                  }
                }),
                (j[61] = ep),
                (j[62] = _))
              : (_ = j[62]))
          let ef = _
          j[63] !== W || j[64] !== ec || j[65] !== ed
            ? ((k = (e, t) => {
                let r = void 0 === t ? {} : t
                return {
                  onClick: (t) => {
                    ;(ed(e), r.onClick?.(t))
                  },
                  onMouseMove: (t) => {
                    ;(ec(e), r.onMouseMove?.(t))
                  },
                  onMouseLeave: () => {
                    W && ((ee.current = !1), en(-1))
                  },
                  "data-list-navigation-item": "true",
                }
              }),
              (j[63] = W),
              (j[64] = ec),
              (j[65] = ed),
              (j[66] = k))
            : (k = j[66])
          let eh = k
          return (
            j[67] !== ef || j[68] !== eh || j[69] !== ep || j[70] !== ea
              ? ((v = {
                  highlightedIndex: ea,
                  setHighlightedIndex: en,
                  listRef: Y,
                  handleKeyDown: ep,
                  getInputProps: ef,
                  getItemProps: eh,
                }),
                (j[67] = ef),
                (j[68] = eh),
                (j[69] = ep),
                (j[70] = ea),
                (j[71] = v))
              : (v = j[71]),
            v
          )
        },
      },
    )
  },
  GEsy(e, t, r) {
    var l = r("QosV"),
      a = r("zd8w")
    r.d(
      t,
      {},
      {
        o: function (e, t) {
          let r,
            n,
            i = (0, l.c)(4),
            [s, o] = (0, a.useState)(e)
          return (
            i[0] !== t || i[1] !== e
              ? ((r = () => {
                  let r = window.setTimeout(() => o(e), t)
                  return () => window.clearTimeout(r)
                }),
                (n = [e, t]),
                (i[0] = t),
                (i[1] = e),
                (i[2] = r),
                (i[3] = n))
              : ((r = i[2]), (n = i[3])),
            (0, a.useEffect)(r, n),
            s
          )
        },
      },
    )
  },
  WGha(e, t, r) {
    var l = r("ABep"),
      a = r("QosV"),
      n = r("oyxz"),
      i = r("Sm6l"),
      s = r("JNtf"),
      o = r("mUDD")
    r.d(
      t,
      {},
      {
        D: function (e) {
          let t,
            r,
            d,
            c,
            u,
            p,
            f,
            h,
            m,
            g,
            b = (0, a.c)(18),
            { onCancel: y, onConfirm: x, open: w } = e
          return w
            ? (b[0] !== y
                ? ((t = (e) => {
                    e || y()
                  }),
                  (b[0] = y),
                  (b[1] = t))
                : (t = b[1]),
              b[2] !== x
                ? ((r = (e) => {
                    ;(e.preventDefault(), x())
                  }),
                  (b[2] = x),
                  (b[3] = r))
                : (r = b[3]),
              b[4] === Symbol.for("react.memo_cache_sentinel")
                ? ((d = (0, l.jsx)(s.L3, {
                    children: (0, l.jsx)(n.A, {
                      id: "codex.writingBlock.confirmCloseTitle",
                      defaultMessage: "Close editor?",
                    }),
                  })),
                  (b[4] = d))
                : (d = b[4]),
              b[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((c = (0, l.jsx)(o.OO, {
                    children: (0, l.jsx)(o.c7, {
                      title: d,
                      subtitle: (0, l.jsx)(s.rr, {
                        children: (0, l.jsx)(n.A, {
                          id: "codex.writingBlock.confirmClosePendingEdits",
                          defaultMessage: "You have pending edits - are you sure you want to close?",
                        }),
                      }),
                    }),
                  })),
                  (b[5] = c))
                : (c = b[5]),
              b[6] === Symbol.for("react.memo_cache_sentinel")
                ? ((u = (0, l.jsx)(n.A, { id: "codex.writingBlock.confirmCloseCancel", defaultMessage: "Cancel" })),
                  (b[6] = u))
                : (u = b[6]),
              b[7] !== y
                ? ((p = (0, l.jsx)(i.$, { color: "outline", onClick: y, type: "button", children: u })),
                  (b[7] = y),
                  (b[8] = p))
                : (p = b[8]),
              b[9] === Symbol.for("react.memo_cache_sentinel")
                ? ((f = (0, l.jsx)(i.$, {
                    color: "primary",
                    type: "submit",
                    children: (0, l.jsx)(n.A, {
                      id: "codex.writingBlock.confirmCloseConfirm",
                      defaultMessage: "Close",
                    }),
                  })),
                  (b[9] = f))
                : (f = b[9]),
              b[10] !== p
                ? ((h = (0, l.jsx)(o.OO, { children: (0, l.jsxs)(o.Es, { children: [p, f] }) })),
                  (b[10] = p),
                  (b[11] = h))
                : (h = b[11]),
              b[12] !== r || b[13] !== h
                ? ((m = (0, l.jsxs)(o.R4, { as: "form", onSubmit: r, children: [c, h] })),
                  (b[12] = r),
                  (b[13] = h),
                  (b[14] = m))
                : (m = b[14]),
              b[15] !== t || b[16] !== m
                ? ((g = (0, l.jsx)(s.lG, { open: !0, onOpenChange: t, size: "compact", children: m })),
                  (b[15] = t),
                  (b[16] = m),
                  (b[17] = g))
                : (g = b[17]),
              g)
            : null
        },
      },
    )
  },
}
//# sourceMappingURL=771643.297732358d.js.map
