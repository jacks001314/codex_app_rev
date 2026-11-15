export const __rspack_esm_ids = [754281]
export const __webpack_modules__ = {
  FpNC(e, n, t) {
    var s = t("ABep")
    ;(t("zd8w"),
      (n.A = (e) =>
        (0, s.jsxs)("svg", {
          width: 16,
          height: 16,
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, s.jsx)("path", {
              d: "M8.66724 8.1416C8.95692 8.14191 9.19165 8.37723 9.19165 8.66699C9.19152 8.95664 8.95684 9.19208 8.66724 9.19238H6.00024C5.71038 9.19238 5.47499 8.95683 5.47485 8.66699C5.47485 8.37704 5.71029 8.1416 6.00024 8.1416H8.66724Z",
              fill: "currentColor",
            }),
            (0, s.jsx)("path", {
              d: "M10.0002 5.47461C10.29 5.47474 10.5256 5.71019 10.5256 6C10.5256 6.28987 10.2901 6.52526 10.0002 6.52539H6.00024C5.71029 6.52539 5.47485 6.28995 5.47485 6C5.47492 5.71011 5.71034 5.47461 6.00024 5.47461H10.0002Z",
              fill: "currentColor",
            }),
            (0, s.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M10.9944 1.83691C12.3887 1.83718 13.5198 2.96795 13.5198 4.3623V11.6475C13.5197 13.0418 12.3886 14.1716 10.9944 14.1719H5.02075C3.62628 14.1719 2.49544 13.0419 2.49536 11.6475V11.1924H2.33325C2.04338 11.1924 1.80799 10.9568 1.80786 10.667C1.80786 10.377 2.0433 10.1416 2.33325 10.1416H2.49536V8.52539H2.33325C2.0433 8.52539 1.80786 8.28995 1.80786 8C1.80793 7.71011 2.04334 7.47461 2.33325 7.47461H2.49536V5.85938H2.33325C2.04347 5.85938 1.80813 5.62371 1.80786 5.33398C1.80786 5.04403 2.0433 4.80859 2.33325 4.80859H2.49536V4.3623C2.49536 2.96779 3.62623 1.83691 5.02075 1.83691H10.9944ZM5.02075 2.8877C4.20613 2.8877 3.54614 3.54768 3.54614 4.3623V4.80859H3.66626C3.95621 4.80859 4.19165 5.04403 4.19165 5.33398C4.19139 5.62371 3.95605 5.85938 3.66626 5.85938H3.54614V7.47461H3.66626C3.95617 7.47461 4.19158 7.71011 4.19165 8C4.19165 8.28995 3.95621 8.52539 3.66626 8.52539H3.54614V10.1416H3.66626C3.95621 10.1416 4.19165 10.377 4.19165 10.667C4.19152 10.9568 3.95613 11.1924 3.66626 11.1924H3.54614V11.6475C3.54622 12.462 4.20618 13.1221 5.02075 13.1221H10.9944C11.8087 13.1218 12.4689 12.4619 12.469 11.6475V4.3623C12.469 3.54785 11.8088 2.88796 10.9944 2.8877H5.02075Z",
              fill: "currentColor",
            }),
          ],
        })))
  },
  OXR4(e, n, t) {
    var s = t("ABep"),
      i = t("QosV"),
      a = t("on57"),
      o = t("Yakm"),
      l = t("aBXq")
    t.d(
      n,
      {},
      {
        J: function (e) {
          let n,
            t,
            r,
            c,
            d,
            m,
            u,
            p,
            f = (0, i.c)(29),
            {
              actions: g,
              children: v,
              collapsible: h,
              defaultOpen: x,
              disableContentInlineInset: j,
              count: b,
              id: y,
              onOpenChange: w,
              showDivider: E,
              title: S,
            } = e,
            A = void 0 === x || x,
            N = void 0 === E || E
          f[0] !== g || f[1] !== h
            ? ((n =
                null == g
                  ? null
                  : (0, s.jsx)("span", {
                      className: "flex items-center gap-2",
                      role: "presentation",
                      onClick: (e) => {
                        h && (e.preventDefault(), e.stopPropagation())
                      },
                      onKeyDown: (e) => {
                        h && e.stopPropagation()
                      },
                      children: g,
                    })),
              (f[0] = g),
              (f[1] = h),
              (f[2] = n))
            : (n = f[2])
          let M = n
          ;(f[3] !== h
            ? ((t = h
                ? (0, s.jsx)(o.A, {
                    className:
                      "icon-2xs -rotate-90 transition-transform group-open/section:rotate-0 motion-reduce:transition-none",
                  })
                : null),
              (f[3] = h),
              (f[4] = t))
            : (t = f[4]),
            f[5] !== t || f[6] !== S
              ? ((r = (0, s.jsxs)(s.Fragment, { children: [S, t] })), (f[5] = t), (f[6] = S), (f[7] = r))
              : (r = f[7]))
          let k = r,
            C = h ? "details" : "section"
          f[8] !== h || f[9] !== A || f[10] !== w
            ? ((c = h
                ? {
                    open: A,
                    onToggle: (e) => {
                      w?.(e.currentTarget.open)
                    },
                  }
                : {}),
              (f[8] = h),
              (f[9] = A),
              (f[10] = w),
              (f[11] = c))
            : (c = f[11])
          let P = c,
            _ = h ? "summary" : "div"
          f[12] !== M || f[13] !== b || f[14] !== k || f[15] !== N || f[16] !== _
            ? ((d = (0, s.jsx)(l.u, { action: M, as: _, count: b, showDivider: N, title: k })),
              (f[12] = M),
              (f[13] = b),
              (f[14] = k),
              (f[15] = N),
              (f[16] = _),
              (f[17] = d))
            : (d = f[17])
          let I = !(void 0 !== j && j) && "px-[var(--detail-page-inline-inset,0px)]"
          return (
            f[18] !== I ? ((m = (0, a.A)("flex flex-col gap-1", I)), (f[18] = I), (f[19] = m)) : (m = f[19]),
            f[20] !== v || f[21] !== m
              ? ((u = (0, s.jsx)("div", { className: m, children: v })), (f[20] = v), (f[21] = m), (f[22] = u))
              : (u = f[22]),
            f[23] !== C || f[24] !== y || f[25] !== P || f[26] !== u || f[27] !== d
              ? ((p = (0, s.jsxs)(C, {
                  ...P,
                  id: y,
                  className:
                    "group/section flex flex-col gap-4 [--sectioned-page-leading-inset:var(--detail-page-inline-inset,0px)]",
                  children: [d, u],
                })),
                (f[23] = C),
                (f[24] = y),
                (f[25] = P),
                (f[26] = u),
                (f[27] = d),
                (f[28] = p))
              : (p = f[28]),
            p
          )
        },
      },
    )
  },
  aBXq(e, n, t) {
    var s = t("ABep"),
      i = t("QosV"),
      a = t("on57")
    t.d(
      n,
      {},
      {
        u: function (e) {
          let n,
            t,
            o,
            l,
            r,
            c,
            d,
            m = (0, i.c)(24),
            { action: u, as: p, count: f, size: g, showDivider: v, sticky: h, title: x } = e,
            j = void 0 === p ? "div" : p,
            b = void 0 === g ? "default" : g,
            y = "summary" === j && "cursor-interaction list-none marker:hidden",
            w =
              h &&
              "relative sticky top-0 z-10 bg-surface after:pointer-events-none after:absolute after:-inset-x-3 after:top-full after:h-2 after:bg-surface after:content-['']",
            E = (void 0 === v || v) && "border-b border-subtle"
          m[0] !== y || m[1] !== w || m[2] !== E
            ? ((n = (0, a.A)(
                "flex items-center justify-between gap-3 pe-0.5 pb-2 text-default [padding-inline-start:var(--sectioned-page-leading-inset,0.5rem)]",
                y,
                w,
                E,
              )),
              (m[0] = y),
              (m[1] = w),
              (m[2] = E),
              (m[3] = n))
            : (n = m[3])
          let S = n
          ;(m[4] !== f || m[5] !== b
            ? ((t =
                null == f
                  ? null
                  : (0, s.jsx)("span", {
                      className: (0, a.A)("text-tertiary", "compact" === b && "text-sm"),
                      children: f,
                    })),
              (m[4] = f),
              (m[5] = b),
              (m[6] = t))
            : (t = m[6]),
            m[7] !== t || m[8] !== x
              ? ((o = (0, s.jsxs)(s.Fragment, { children: [x, t] })), (m[7] = t), (m[8] = x), (m[9] = o))
              : (o = m[9]))
          let A = o,
            N = "summary" === j ? "span" : "h2",
            M = "summary" === j ? "span" : "div",
            k = "compact" === b ? "text-base" : "text-lg"
          return (
            m[10] !== k
              ? ((l = (0, a.A)("flex min-h-7 items-center gap-1.5 leading-6 font-medium", k)), (m[10] = k), (m[11] = l))
              : (l = m[11]),
            m[12] !== N || m[13] !== A || m[14] !== l
              ? ((r = (0, s.jsx)(N, { className: l, children: A })), (m[12] = N), (m[13] = A), (m[14] = l), (m[15] = r))
              : (r = m[15]),
            m[16] !== M || m[17] !== u
              ? ((c = null == u ? null : (0, s.jsx)(M, { className: "shrink-0", children: u })),
                (m[16] = M),
                (m[17] = u),
                (m[18] = c))
              : (c = m[18]),
            m[19] !== j || m[20] !== S || m[21] !== r || m[22] !== c
              ? ((d = (0, s.jsxs)(j, { className: S, "data-slot": "section-header", children: [r, c] })),
                (m[19] = j),
                (m[20] = S),
                (m[21] = r),
                (m[22] = c),
                (m[23] = d))
              : (d = m[23]),
            d
          )
        },
      },
    )
  },
  UtcH(e, n, t) {
    var s = t("ABep"),
      i = t("QosV"),
      a = t("tb30"),
      o = t("on57"),
      l = t("zd8w"),
      r = t("Wf1j"),
      c = t("HOLv"),
      d = t("Sm6l")
    t.d(
      n,
      {},
      {
        V: function (e) {
          let n,
            t,
            m,
            u,
            p,
            f = (0, i.c)(17),
            { ancestors: g, current: v, textSm: h } = e,
            x = (0, r.A)()
          f[0] !== x
            ? ((n = x.formatMessage({
                id: "toolbarBreadcrumb.label",
                defaultMessage: "Breadcrumb",
                description: "Accessible label for toolbar breadcrumb navigation",
              })),
              (f[0] = x),
              (f[1] = n))
            : (n = f[1])
          let j = h ? "text-sm" : "text-base"
          if (
            (f[2] !== j
              ? ((t = (0, o.$)("flex min-w-0 items-center gap-1 text-codex-description", j)), (f[2] = j), (f[3] = t))
              : (t = f[3]),
            f[4] !== g || f[5] !== h)
          ) {
            let e
            ;(f[7] !== h
              ? ((e = (e, n) => {
                  let { id: t, ...i } = e,
                    r =
                      "content" in i
                        ? i.content
                        : (0, s.jsx)("span", { className: "min-w-0 truncate", children: i.label }),
                    m = r
                  if (!("content" in i)) {
                    let { label: e, ...n } = i,
                      t = { className: (0, o.$)("min-w-0", h && "text-sm"), color: "ghost", size: "toolbar" }
                    m =
                      null != n.to
                        ? (0, s.jsx)(d.z, { ...n, ...t, children: r })
                        : (0, s.jsx)(d.$, { ...t, onClick: n.onClick, children: r })
                  }
                  return (0, s.jsxs)(
                    l.Fragment,
                    { children: [n > 0 ? (0, s.jsx)(c.I, { className: "shrink-0", asset: a.q }) : null, m] },
                    t,
                  )
                }),
                (f[7] = h),
                (f[8] = e))
              : (e = f[8]),
              (m = g.map(e)),
              (f[4] = g),
              (f[5] = h),
              (f[6] = m))
          } else m = f[6]
          return (
            f[9] !== g.length || f[10] !== v
              ? ((u =
                  null != v
                    ? (0, s.jsxs)(s.Fragment, {
                        children: [
                          g.length > 0 ? (0, s.jsx)(c.I, { className: "shrink-0", asset: a.q }) : null,
                          (0, s.jsx)("span", {
                            "aria-current": "page",
                            className:
                              "flex h-token-button-composer min-w-0 flex-auto items-center truncate px-2 text-default",
                            children: v,
                          }),
                        ],
                      })
                    : null),
                (f[9] = g.length),
                (f[10] = v),
                (f[11] = u))
              : (u = f[11]),
            f[12] !== n || f[13] !== t || f[14] !== m || f[15] !== u
              ? ((p = (0, s.jsxs)("nav", { "aria-label": n, className: t, children: [m, u] })),
                (f[12] = n),
                (f[13] = t),
                (f[14] = m),
                (f[15] = u),
                (f[16] = p))
              : (p = f[16]),
            p
          )
        },
      },
    )
  },
  KRgb(e, n, t) {
    var s = t("Qgfj")
    let i = [
      {
        value: "tool",
        message: (0, s.zR)({
          id: "settings.localEnvironments.actions.icon.tool",
          defaultMessage: "Tool",
          description: "Tool icon label for local environment actions",
        }),
      },
      {
        value: "run",
        message: (0, s.zR)({
          id: "settings.localEnvironments.actions.icon.run",
          defaultMessage: "Run",
          description: "Run icon label for local environment actions",
        }),
      },
      {
        value: "debug",
        message: (0, s.zR)({
          id: "settings.localEnvironments.actions.icon.debug",
          defaultMessage: "Debug",
          description: "Debug icon label for local environment actions",
        }),
      },
      {
        value: "test",
        message: (0, s.zR)({
          id: "settings.localEnvironments.actions.icon.test",
          defaultMessage: "Test",
          description: "Test icon label for local environment actions",
        }),
      },
    ]
    t.d(n, {}, { I: i })
  },
  zXOI(e, n, t) {
    var s = t("ABep"),
      i = t("QosV"),
      a = t("HZWG"),
      o = t("egqC"),
      l = t("uZvu"),
      r = t("QN6Y"),
      c = t("mAQp"),
      d = t("ndNs"),
      m = t("XOOh"),
      u = t("hYDM"),
      p = t("HOLv")
    let f = {
      tool: { 16: l.T, 20: r.w },
      run: { 16: m.k, 20: u.d },
      debug: { 16: c.c, 20: d.b },
      test: { 16: a.L, 20: o.o },
    }
    t.d(
      n,
      {},
      {
        M: function (e) {
          let n,
            t = (0, i.c)(3),
            { className: a, icon: o, size: l } = e,
            r = f[o][void 0 === l ? 20 : l]
          return (
            t[0] !== a || t[1] !== r
              ? ((n = (0, s.jsx)(p.I, { className: a, "aria-hidden": !1, asset: r })),
                (t[0] = a),
                (t[1] = r),
                (t[2] = n))
              : (n = t[2]),
            n
          )
        },
      },
    )
  },
  tNgt(e, n, t) {
    var s = t("DBCl")
    let i = /[\x00-\x08\x0b-\x1f\x7f]/,
      a = `cd "$CODEX_WORKTREE_PATH"
pip install -r requirements.txt
npm install
./run/setup.sh`,
      o = `docker compose down --remove-orphans
rm -rf .cache/tmp`,
      l = `python -m pip install -r requirements.txt
pnpm install`
    function r(e) {
      return { darwin: e?.darwin?.script ?? "", linux: e?.linux?.script ?? "", win32: e?.win32?.script ?? "" }
    }
    function c(e, n, t, i) {
      let a = s.jtP.flatMap((e) => {
        let n = i[e]
        return null == n || 0 === n.length ? [] : [{ platform: e, script: n }]
      })
      if (
        (("setup" === n || t.length > 0 || a.length > 0) && (e.push(""), e.push(`[${n}]`), e.push(`script = ${d(t)}`)),
        0 !== a.length)
      )
        for (let [t, s] of (e.push(""), a.entries()))
          (e.push(`[${n}.${s.platform}]`), e.push(`script = ${d(s.script)}`), t < a.length - 1 && e.push(""))
    }
    function d(e) {
      if (e.includes("\n") && !i.test(e)) {
        if (!e.includes("'''"))
          return `'''
${e}'''`
        let n = e.replace(/\\/g, "\\\\").replace(/"/g, '\\"')
        return `"""
${n}"""`
      }
      return JSON.stringify(e).replaceAll("", "\\u007f")
    }
    t.d(
      n,
      {},
      {
        GU: function ({
          version: e,
          name: n,
          setupScript: t,
          setupPlatformScripts: s,
          cleanupScript: i,
          cleanupPlatformScripts: a,
          actions: o,
        }) {
          let l = o.flatMap((e) => {
              let n = e.name.trim()
              return 0 === n.length || 0 === e.command.trim().length ? [] : [{ ...e, name: n }]
            }),
            r = []
          for (let o of (r.push("# THIS IS AUTOGENERATED. DO NOT EDIT MANUALLY"),
          r.push(`version = ${e}`),
          r.push(`name = ${d(n.trim())}`),
          c(r, "setup", t, s),
          c(r, "cleanup", i, a),
          l.length > 0 && r.push(""),
          l))
            (r.push("[[actions]]"),
              r.push(`name = ${d(o.name)}`),
              o.icon && r.push(`icon = ${d(o.icon)}`),
              r.push(`command = ${d(o.command)}`),
              o.platform && r.push(`platform = ${d(o.platform)}`),
              r.push(""))
          return `${r.join("\n").trimEnd()}
`
        },
        Ub: function () {
          return { id: crypto.randomUUID(), name: "", icon: "tool", command: "", platform: null }
        },
        XB: function (e, n = "default") {
          return "action" === e
            ? "npm run dev"
            : "win32" === n
              ? "setup" === e
                ? l
                : "docker compose down --remove-orphans"
              : "setup" === e
                ? a
                : o
        },
        YP: function (e) {
          return "defaultName" in e
            ? {
                actions: [],
                cleanupPlatformScripts: r(null),
                cleanupScript: "",
                name: e.defaultName,
                setupPlatformScripts: r(null),
                setupScript: "",
              }
            : {
                actions: (e.environment.actions ?? []).map((e) => ({
                  ...e,
                  id: crypto.randomUUID(),
                  platform: e.platform ?? null,
                })),
                cleanupPlatformScripts: r(e.environment.cleanup),
                cleanupScript: e.environment.cleanup?.script ?? "",
                name: e.environment.name,
                setupPlatformScripts: r(e.environment.setup),
                setupScript: e.environment.setup.script,
              }
        },
        Zh: function (e, n) {
          return null == n
            ? null
            : (("darwin" === n || "linux" === n || "win32" === n) && e.setupPlatformScripts[n]) || e.setupScript
        },
        ls: function (e, n) {
          return {
            incompleteActionIds: n.flatMap((e) =>
              e.name.trim().length > 0 == e.command.trim().length > 0 ? [] : [e.id],
            ),
            missingName: 0 === e.trim().length,
          }
        },
      },
    )
  },
  O8dD(e, n, t) {
    t.d(n, { I: () => Q })
    var s = t("ABep"),
      i = t("QosV"),
      a = t("slpy"),
      o = t("wH14"),
      l = t("xSOA"),
      r = t("SZCv"),
      c = t.n(r),
      d = t("zTeN"),
      m = t("DBCl"),
      u = t("zd8w"),
      p = t("Wf1j"),
      f = t("oyxz"),
      g = t("Sm6l")
    t("la9L")
    var v = t("OXR4"),
      h = t("zLIa"),
      x = t("SGsN"),
      j = t("OReh"),
      b = t("cIfC"),
      y = t("MI1z"),
      w = t("C4bN"),
      E = t("nn0H"),
      S = t("lpl9"),
      A = t("bqtn"),
      N = t("HOLv"),
      M = t("evwP"),
      k = t("zXOI"),
      C = t("KRgb"),
      P = t("tNgt"),
      _ = t("Tr6k"),
      I = t("gTr2"),
      T = t("BSnr"),
      L = t("ZEx5")
    function R(e) {
      let n,
        t,
        o,
        l,
        r,
        c,
        d,
        m,
        u = (0, i.c)(33),
        { actions: v, dropdownDisabled: x, incompleteActionIds: j, onChange: b } = e,
        y = (0, p.A)()
      if (u[0] !== v || u[1] !== x || u[2] !== j || u[3] !== y || u[4] !== b) {
        let e, i, d, m, p
        u[11] !== y
          ? ((e = (e) => ({
              label: y.formatMessage(e.message),
              value: e.value,
              icon: (0, s.jsx)(k.M, { icon: e.value }),
            })),
            (u[11] = y),
            (u[12] = e))
          : (e = u[12])
        let w = C.I.map(e)
        u[13] !== v || u[14] !== b
          ? ((i = (e, n) => {
              b(v.map((t) => (t.id !== e ? t : { ...t, ...n })))
            }),
            (u[13] = v),
            (u[14] = b),
            (u[15] = i))
          : (i = u[15])
        let E = i
        ;((t = T.X),
          u[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((d = (0, s.jsx)(f.A, { ..._.n.actionsTitle })), (u[16] = d))
            : (d = u[16]),
          u[17] !== v || u[18] !== b
            ? ((m = () => {
                b([...v, (0, P.Ub)()])
              }),
              (u[17] = v),
              (u[18] = b),
              (u[19] = m))
            : (m = u[19]),
          u[20] === Symbol.for("react.memo_cache_sentinel")
            ? ((p = (0, s.jsx)(f.A, { ..._.n.addAction })), (u[20] = p))
            : (p = u[20]),
          u[21] !== m
            ? ((c = (0, s.jsx)(T.X.Header, {
                title: d,
                actions: (0, s.jsx)(g.$, {
                  color: "secondary",
                  size: "toolbar",
                  type: "button",
                  onClick: m,
                  children: p,
                }),
              })),
              (u[21] = m),
              (u[22] = c))
            : (c = u[22]),
          (n = T.X.Content),
          (o = "gap-1"),
          u[23] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = (0, s.jsx)("div", {
                className: "text-sm text-secondary",
                children: (0, s.jsx)(f.A, { ..._.n.actionsDescription }),
              })),
              (u[23] = l))
            : (l = u[23]),
          (r =
            0 === v.length
              ? (0, s.jsx)(L.t, {
                  children: (0, s.jsx)(M.W, {
                    layout: "settings-row",
                    children: (0, s.jsx)(f.A, { ..._.n.actionsEmpty }),
                  }),
                })
              : (0, s.jsx)("div", {
                  className: "flex flex-col gap-3",
                  children: v.map((e) => {
                    let n = w.find((n) => n.value === (e.icon ?? "tool")) ?? w[0],
                      t = j.includes(e.id),
                      i = t && 0 === e.name.trim().length,
                      o = t && 0 === e.command.trim().length,
                      l = `local-env-action-name-error-${e.id}`,
                      r = `local-env-action-command-error-${e.id}`
                    return (0, s.jsxs)(
                      "div",
                      {
                        className: "flex flex-col gap-3 rounded-lg border border-default bg-primary-soft p-3",
                        children: [
                          (0, s.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [
                              (0, s.jsx)("label", {
                                className: "text-xs font-medium tracking-wide text-secondary uppercase",
                                htmlFor: `local-env-action-name-${e.id}`,
                                children: (0, s.jsx)(f.A, { ..._.n.actionName }),
                              }),
                              (0, s.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  (0, s.jsx)(A.Ab, {
                                    align: "start",
                                    contentWidth: "icon",
                                    disabled: x,
                                    triggerButton: (0, s.jsx)(g.$, {
                                      id: `local-env-action-icon-${e.id}`,
                                      color: "secondary",
                                      uniform: !0,
                                      size: "toolbar",
                                      type: "button",
                                      "aria-label": n.label,
                                      children: n.icon,
                                    }),
                                    children: (0, s.jsx)(A.ms.RadioGroup, {
                                      value: n.value,
                                      children: w.map((n) =>
                                        (0, s.jsx)(
                                          A.ms.RadioItem,
                                          {
                                            value: n.value,
                                            onSelect: () => {
                                              E(e.id, { icon: n.value })
                                            },
                                            children: (0, s.jsxs)("span", {
                                              className: "flex items-center gap-2",
                                              children: [n.icon, (0, s.jsx)("span", { children: n.label })],
                                            }),
                                          },
                                          n.value,
                                        ),
                                      ),
                                    }),
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "flex-1",
                                    children: (0, s.jsx)(h.pd, {
                                      id: `local-env-action-name-${e.id}`,
                                      value: e.name,
                                      "aria-describedby": i ? l : void 0,
                                      "aria-invalid": i,
                                      onChange: (n) => {
                                        E(e.id, { name: n.target.value })
                                      },
                                    }),
                                  }),
                                ],
                              }),
                              i
                                ? (0, s.jsx)("div", {
                                    id: l,
                                    className: "text-xs text-danger",
                                    children: (0, s.jsx)(f.A, {
                                      id: "settings.localEnvironments.actions.item.nameRequired",
                                      defaultMessage: "Enter an action name",
                                      description: "Inline validation for a missing local environment action name",
                                    }),
                                  })
                                : null,
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [
                              (0, s.jsx)("label", {
                                className: "text-xs font-medium tracking-wide text-secondary uppercase",
                                htmlFor: `local-env-action-command-${e.id}`,
                                children: (0, s.jsx)(f.A, { ..._.n.actionScript }),
                              }),
                              (0, s.jsx)(h.TM, {
                                variant: "code",
                                id: `local-env-action-command-${e.id}`,
                                value: e.command,
                                placeholder: (0, P.XB)("action"),
                                rows: 4,
                                "aria-describedby": o ? r : void 0,
                                "aria-invalid": o,
                                onChange: (n) => {
                                  E(e.id, { command: n.target.value })
                                },
                              }),
                              o
                                ? (0, s.jsx)("div", {
                                    id: r,
                                    className: "text-xs text-danger",
                                    children: (0, s.jsx)(f.A, {
                                      id: "settings.localEnvironments.actions.item.commandRequired",
                                      defaultMessage: "Enter an action command",
                                      description: "Inline validation for a missing local environment action command",
                                    }),
                                  })
                                : null,
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                            children: [
                              (0, s.jsxs)("div", {
                                className: "flex min-w-0 flex-col gap-2",
                                children: [
                                  (0, s.jsx)("div", {
                                    className: "text-xs font-medium tracking-wide text-secondary uppercase",
                                    children: (0, s.jsx)(f.A, { ..._.n.actionPlatforms }),
                                  }),
                                  (0, s.jsx)(I.t, {
                                    leadingOption: "all",
                                    selectedId: e.platform ?? "all",
                                    onSelect: (n) => {
                                      E(e.id, { platform: "all" === n ? null : n })
                                    },
                                    ariaLabel: y.formatMessage({
                                      id: "settings.localEnvironments.actions.item.platforms.selector",
                                      defaultMessage: "Action platform",
                                      description: "Aria label for the local environment action platform selector",
                                    }),
                                  }),
                                ],
                              }),
                              (0, s.jsx)("div", {
                                className: "flex justify-end sm:justify-center",
                                children: (0, s.jsx)(a.m, {
                                  content: (0, s.jsx)(f.A, {
                                    id: "settings.localEnvironments.actions.item.tooltip.delete",
                                    defaultMessage: "Delete",
                                    description: "Tooltip for removing a local environment action",
                                  }),
                                  children: (0, s.jsx)(g.$, {
                                    color: "ghost",
                                    uniform: !0,
                                    size: "toolbar",
                                    type: "button",
                                    "aria-label": y.formatMessage({
                                      id: "settings.localEnvironments.actions.item.button.delete",
                                      defaultMessage: "Delete",
                                      description: "Label for removing a local environment action",
                                    }),
                                    onClick: () => {
                                      b(v.filter((n) => n.id !== e.id))
                                    },
                                    children: (0, s.jsx)(N.I, { "aria-hidden": !1, asset: S.N }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      },
                      e.id,
                    )
                  }),
                })),
          (u[0] = v),
          (u[1] = x),
          (u[2] = j),
          (u[3] = y),
          (u[4] = b),
          (u[5] = n),
          (u[6] = t),
          (u[7] = o),
          (u[8] = l),
          (u[9] = r),
          (u[10] = c))
      } else ((n = u[5]), (t = u[6]), (o = u[7]), (l = u[8]), (r = u[9]), (c = u[10]))
      return (
        u[24] !== n || u[25] !== o || u[26] !== l || u[27] !== r
          ? ((d = (0, s.jsxs)(n, { className: o, children: [l, r] })),
            (u[24] = n),
            (u[25] = o),
            (u[26] = l),
            (u[27] = r),
            (u[28] = d))
          : (d = u[28]),
        u[29] !== t || u[30] !== c || u[31] !== d
          ? ((m = (0, s.jsxs)(t, { children: [c, d] })), (u[29] = t), (u[30] = c), (u[31] = d), (u[32] = m))
          : (m = u[32]),
        m
      )
    }
    var $ = t("lXzT"),
      z = t("xNQs"),
      D = t("DJRx"),
      B = t("OWtl"),
      H = t("AWNZ"),
      O = t("kfGJ"),
      X = t("Zt82")
    function F(e) {
      let n,
        t,
        a,
        o,
        l,
        r,
        c,
        d,
        m,
        g,
        v = (0, i.c)(37),
        { actions: x, draft: j, scriptType: b, simpleSetup: y, onScriptChange: w } = e,
        E = void 0 !== y && y,
        S = (0, p.A)(),
        [A, N] = (0, u.useState)("default"),
        M = "setup" === b
      n =
        "default" === A
          ? M
            ? j.setupScript
            : j.cleanupScript
          : M
            ? (j.setupPlatformScripts[A] ?? "")
            : (j.cleanupPlatformScripts[A] ?? "")
      let k = null
      if (!E && M) {
        let e
        ;(v[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(f.A, {
              id: "settings.localEnvironments.editor.setup.description",
              defaultMessage: "Runs at the project root on worktree creation",
              description: "Description for environment setup script summary",
            })),
            (v[0] = e))
          : (e = v[0]),
          (k = e))
      } else if (!M) {
        let e
        ;(v[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(f.A, { ..._.n.cleanupDescription })), (v[1] = e))
          : (e = v[1]),
          (k = e))
      }
      ;(v[2] !== M
        ? ((t = M ? (0, s.jsx)(f.A, { ..._.n.setupScript }) : (0, s.jsx)(f.A, { ..._.n.cleanupScript })),
          (v[2] = M),
          (v[3] = t))
        : (t = v[3]),
        v[4] !== x || v[5] !== k || v[6] !== t
          ? ((a = (0, s.jsx)(T.X.Header, { title: t, subtitle: k, actions: x })),
            (v[4] = x),
            (v[5] = k),
            (v[6] = t),
            (v[7] = a))
          : (a = v[7]),
        v[8] !== S || v[9] !== A || v[10] !== M || v[11] !== E
          ? ((o = E
              ? null
              : (0, s.jsx)(I.t, {
                  leadingOption: "default",
                  selectedId: A,
                  onSelect: N,
                  ariaLabel: M
                    ? S.formatMessage(_.n.setupPlatformSelector)
                    : S.formatMessage(_.n.cleanupPlatformSelector),
                })),
            (v[8] = S),
            (v[9] = A),
            (v[10] = M),
            (v[11] = E),
            (v[12] = o))
          : (o = v[12]))
      let C = `local-environment-${b}-script-${A}`
      return (
        v[13] !== S || v[14] !== M
          ? ((l = M
              ? S.formatMessage(_.n.setupScript)
              : S.formatMessage({
                  id: "settings.localEnvironments.environment.cleanup.input",
                  defaultMessage: "Cleanup script",
                  description: "Accessible label for the local environment cleanup script input",
                })),
            (v[13] = S),
            (v[14] = M),
            (v[15] = l))
          : (l = v[15]),
        v[16] !== S || v[17] !== b || v[18] !== A || v[19] !== E
          ? ((r = E
              ? S.formatMessage({
                  id: "settings.localEnvironments.editor.simpleSetup.placeholder",
                  defaultMessage: "For example: npm install",
                  description: "Example setup script placeholder for the compact local environment creation dialog",
                })
              : (0, P.XB)(b, A)),
            (v[16] = S),
            (v[17] = b),
            (v[18] = A),
            (v[19] = E),
            (v[20] = r))
          : (r = v[20]),
        v[21] !== w || v[22] !== b || v[23] !== A
          ? ((c = (e) => {
              w(b, A, e.target.value)
            }),
            (v[21] = w),
            (v[22] = b),
            (v[23] = A),
            (v[24] = c))
          : (c = v[24]),
        v[25] !== n || v[26] !== C || v[27] !== l || v[28] !== r || v[29] !== c
          ? ((d = (0, s.jsx)(h.TM, {
              variant: "code",
              id: C,
              value: n,
              "aria-label": l,
              placeholder: r,
              rows: 6,
              onChange: c,
            })),
            (v[25] = n),
            (v[26] = C),
            (v[27] = l),
            (v[28] = r),
            (v[29] = c),
            (v[30] = d))
          : (d = v[30]),
        v[31] !== o || v[32] !== d
          ? ((m = (0, s.jsxs)(T.X.Content, { className: "gap-2", children: [o, d] })),
            (v[31] = o),
            (v[32] = d),
            (v[33] = m))
          : (m = v[33]),
        v[34] !== m || v[35] !== a
          ? ((g = (0, s.jsxs)(T.X, { children: [a, m] })), (v[34] = m), (v[35] = a), (v[36] = g))
          : (g = v[36]),
        g
      )
    }
    var W = t("BsEo")
    let V = "local-environment-name-error"
    function Q(e) {
      let n,
        t,
        r,
        S,
        A,
        N,
        M,
        k,
        C,
        I,
        Q,
        Y,
        G,
        J,
        K,
        ee,
        en,
        et = (0, i.c)(91),
        {
          hostId: es,
          workspaceRoot: ei,
          resolvedProject: ea,
          configPath: eo,
          expectedRevision: el,
          initialEnvironment: er,
          hasParseError: ec,
          hasReadError: ed,
          onDirtyChange: em,
          onDiscardConflict: eu,
          onRetryRead: ep,
          onSavingChange: ef,
          onSaved: eg,
          simpleSetup: ev,
        } = e,
        eh = void 0 !== ev && ev,
        ex = (0, d.gh)(B.u),
        ej = (0, p.A)(),
        { data: eb } = (0, w.a)()
      et[0] !== eo || et[1] !== el || et[2] !== ec || et[3] !== er || et[4] !== ej || et[5] !== ei
        ? ((n = () => ({
            configPath: eo,
            draft: (0, P.YP)(
              null == er
                ? { defaultName: (0, X.P)(ei) ?? ej.formatMessage(_.n.defaultEnvironmentName) }
                : { environment: er },
            ),
            hasParseError: ec,
            revision: el,
            version: er?.version ?? 1,
          })),
          (et[0] = eo),
          (et[1] = el),
          (et[2] = ec),
          (et[3] = er),
          (et[4] = ej),
          (et[5] = ei),
          (et[6] = n))
        : (n = et[6])
      let [ey] = (0, u.useState)(n),
        { data: ew, error: eE, refetch: eS } = (0, y.f)(es),
        eA = ew?.codexHome
      et[7] !== eA || et[8] !== ew?.worktreesSegment || et[9] !== ea?.isCodexWorktree || et[10] !== ei
        ? ((t = ea?.isCodexWorktree === !0 || (null != eA && (0, m.n9x)(ei, eA, ew?.worktreesSegment))),
          (et[7] = eA),
          (et[8] = ew?.worktreesSegment),
          (et[9] = ea?.isCodexWorktree),
          (et[10] = ei),
          (et[11] = t))
        : (t = et[11])
      let eN = t,
        eM = (0, O.Qz)(es),
        ek = (0, d.Ul)(D.AQ)
      ;(et[12] !== eM || et[13] !== ei
        ? ((r = { cwd: ei, hostConfig: eM }), (et[12] = eM), (et[13] = ei), (et[14] = r))
        : (r = et[14]),
        et[15] !== ek ? ((S = { retainRepoWatch: ek }), (et[15] = ek), (et[16] = S)) : (S = et[16]))
      let { data: eC, error: eP, refetch: e_ } = (0, b.E)(r, "local_environment_editor", S)
      et[17] !== es || et[18] !== ei
        ? ((A = { hostId: es, workspaceRoot: ei }), (et[17] = es), (et[18] = ei), (et[19] = A))
        : (A = et[19])
      let { updateSelection: eI } = (0, E.GF)(A)
      et[20] !== eC || et[21] !== eM || et[22] !== ex
        ? ((N = {
            onSuccess: (e, n) => {
              e.success && eC && (0, E.SH)(ex, eC, eM, n.value, "local_environment_editor")
            },
          }),
          (et[20] = eC),
          (et[21] = eM),
          (et[22] = ex),
          (et[23] = N))
        : (N = et[23])
      let eT = (0, j.JX)("set-config-value", eM, N),
        [eL, eR] = (0, u.useState)(null == ey.revision),
        [e$, ez] = (0, u.useState)(!1),
        eD = eL && ((null == ea && null != eE) || (eN && null != eP)),
        eB = !eL || ((null != ea || null != eA) && (!eN || eC?.root != null))
      ;(et[24] !== eN ||
      et[25] !== ey.configPath ||
      et[26] !== ey.revision ||
      et[27] !== ey.version ||
      et[28] !== eC?.root ||
      et[29] !== es ||
      et[30] !== eL ||
      et[31] !== ex ||
      et[32] !== eT ||
      et[33] !== eI ||
      et[34] !== ei
        ? ((M = (e) =>
            (0, $.b)({
              configPath: ey.configPath,
              draft: e,
              expectedRevision: ey.revision,
              hostId: es,
              queryClient: ex.queryClient,
              selectEnvironment: eL
                ? (e) =>
                    (0, $.z)({
                      codexWorktree: eN,
                      configPath: e,
                      gitRoot: eC?.root ?? null,
                      selectForWorkspace: eI,
                      selectForWorktree: async (e, n) => {
                        let t = await eT
                          .mutateAsync({
                            root: e,
                            key: m.fRB,
                            operationSource: "local_environment_editor",
                            value: n,
                            scope: "worktree",
                          })
                          .catch(Z)
                        return t?.success === !0
                      },
                    })
                : void 0,
              version: ey.version,
              workspaceRoot: ei,
            })),
          (et[24] = eN),
          (et[25] = ey.configPath),
          (et[26] = ey.revision),
          (et[27] = ey.version),
          (et[28] = eC?.root),
          (et[29] = es),
          (et[30] = eL),
          (et[31] = ex),
          (et[32] = eT),
          (et[33] = eI),
          (et[34] = ei),
          (et[35] = M))
        : (M = et[35]),
        et[36] !== ef
          ? ((C = () => {
              ef?.(!0)
            }),
            (k = () => {
              ef?.(!1)
            }),
            (et[36] = ef),
            (et[37] = k),
            (et[38] = C))
          : ((k = et[37]), (C = et[38])),
        et[39] !== k || et[40] !== M || et[41] !== C
          ? ((I = { mutationFn: M, networkMode: "always", onMutate: C, onSettled: k }),
            (et[39] = k),
            (et[40] = M),
            (et[41] = C),
            (et[42] = I))
          : (I = et[42]))
      let eH = (0, l.n)(I)
      et[43] !== ey.draft || et[44] !== ey.hasParseError || et[45] !== ey.revision
        ? ((Q = (e) => null == ey.revision || ey.hasParseError || !c()(e, ey.draft)),
          (et[43] = ey.draft),
          (et[44] = ey.hasParseError),
          (et[45] = ey.revision),
          (et[46] = Q))
        : (Q = et[46])
      let eO = Q
      ;(et[47] !== eO ||
      et[48] !== ed ||
      et[49] !== ej ||
      et[50] !== eB ||
      et[51] !== eL ||
      et[52] !== eu ||
      et[53] !== eg ||
      et[54] !== eb?.platform ||
      et[55] !== eH ||
      et[56] !== ex ||
      et[57] !== eD ||
      et[58] !== eh
        ? ((Y = (e) => {
            let { value: n } = e
            eH.data?.type === "conflict"
              ? eu()
              : (eh && !(0, P.Zh)(n, eb?.platform)?.trim()) ||
                (null ==
                  q({
                    hasChanges: eO(n),
                    isSelectionReady: eB,
                    readError: ed,
                    selectionError: eD,
                    isSaving: eH.isPending,
                    validation: (0, P.ls)(n.name, n.actions),
                  }) &&
                  eH.mutate(n, {
                    onSuccess: (e) => {
                      if ("invalid" !== e.type) {
                        if ("conflict" === e.type)
                          return void ex
                            .get(x.Id)
                            .danger(
                              ej.formatMessage({
                                id: "settings.localEnvironments.save.conflict",
                                defaultMessage:
                                  "This environment changed on disk. Discard your edits before saving again",
                                description: "Error toast shown when an environment changed after the editor loaded it",
                              }),
                              { errorAnalytics: { toastId: "settings.localEnvironments.save.conflict" } },
                            )
                        ;(eL && eR(!1),
                          "selection-failed" === e.type
                            ? ex
                                .get(x.Id)
                                .danger(
                                  ej.formatMessage({
                                    id: "settings.localEnvironments.save.selectionError",
                                    defaultMessage: "Saved the environment file, but could not select it",
                                    description:
                                      "Error toast shown when a new local environment cannot be selected after saving",
                                  }),
                                  { errorAnalytics: { toastId: "settings.localEnvironments.save.selectionError" } },
                                )
                            : ex
                                .get(x.Id)
                                .success(
                                  ej.formatMessage({
                                    id: "settings.localEnvironments.save.success",
                                    defaultMessage: "Saved local environment",
                                    description: "Toast shown when local environment is saved",
                                  }),
                                ),
                          eg(e.configPath, "selection-failed" === e.type ? void 0 : n))
                      }
                    },
                  }))
          }),
          (et[47] = eO),
          (et[48] = ed),
          (et[49] = ej),
          (et[50] = eB),
          (et[51] = eL),
          (et[52] = eu),
          (et[53] = eg),
          (et[54] = eb?.platform),
          (et[55] = eH),
          (et[56] = ex),
          (et[57] = eD),
          (et[58] = eh),
          (et[59] = Y))
        : (Y = et[59]),
        et[60] !== ey.draft || et[61] !== Y
          ? ((G = { defaultValues: ey.draft, onSubmit: Y }), (et[60] = ey.draft), (et[61] = Y), (et[62] = G))
          : (G = et[62]))
      let eX = (0, o.m)(G)
      return (
        et[63] !== eX
          ? ((J = (e) => {
              ;(e.preventDefault(), eX.handleSubmit())
            }),
            (et[63] = eX),
            (et[64] = J))
          : (J = et[64]),
        et[65] !== e$ ||
        et[66] !== ey.draft ||
        et[67] !== ey.hasParseError ||
        et[68] !== ey.version ||
        et[69] !== eX ||
        et[70] !== eO ||
        et[71] !== ed ||
        et[72] !== eB ||
        et[73] !== em ||
        et[74] !== eu ||
        et[75] !== ep ||
        et[76] !== eb?.platform ||
        et[77] !== eS ||
        et[78] !== e_ ||
        et[79] !== eH.data?.type ||
        et[80] !== eH.error ||
        et[81] !== eH.isPending ||
        et[82] !== eD ||
        et[83] !== eh
          ? ((K = (e) => {
              let n = (e) => {
                  em?.(!c()(e, ey.draft))
                },
                t = (0, P.ls)(e.name, e.actions),
                i = q({
                  hasChanges: eO(e),
                  isSelectionReady: eB,
                  readError: ed,
                  selectionError: eD,
                  isSaving: eH.isPending,
                  validation: t,
                }),
                o = eH.data?.type === "conflict",
                l = o
                  ? null
                  : (function (e) {
                      if (null == e) return null
                      switch (e) {
                        case "incomplete-action":
                          return (0, s.jsx)(f.A, {
                            id: "settings.localEnvironments.save.disabled.incompleteAction",
                            defaultMessage: "Add both a name and command for each action",
                            description: "Tooltip shown when save is disabled because an action is incomplete",
                          })
                        case "loading-project":
                          return (0, s.jsx)(f.A, {
                            id: "settings.localEnvironments.save.disabled.loadingProject",
                            defaultMessage: "Loading project information",
                            description: "Tooltip shown when save is disabled while project information loads",
                          })
                        case "missing-name":
                          return (0, s.jsx)(f.A, {
                            id: "settings.localEnvironments.save.disabled.name",
                            defaultMessage: "Add an environment name to save",
                            description: "Tooltip shown when save is disabled because the name is missing",
                          })
                        case "no-changes":
                          return (0, s.jsx)(f.A, {
                            id: "settings.localEnvironments.save.disabled.noChanges",
                            defaultMessage: "No changes to save",
                            description: "Tooltip shown when save is disabled because there are no changes",
                          })
                        case "project-error":
                          return (0, s.jsx)(f.A, {
                            id: "settings.localEnvironments.save.disabled.projectError",
                            defaultMessage: "Retry loading project information to save",
                            description:
                              "Tooltip shown when save is disabled because project information failed to load",
                          })
                        case "read-error":
                          return (0, s.jsx)(f.A, {
                            id: "settings.localEnvironments.save.disabled.readError",
                            defaultMessage: "Retry loading the environment before saving",
                            description:
                              "Tooltip shown when save is disabled because the environment could not be read",
                          })
                        case "saving":
                          return (0, s.jsx)(f.A, {
                            id: "settings.localEnvironments.save.disabled.saving",
                            defaultMessage: "Saving…",
                            description: "Tooltip shown when save is disabled because a save is already in progress",
                          })
                      }
                    })(i),
                r = (t, s, i) => {
                  if ("default" === s) {
                    let s = "setup" === t ? "setupScript" : "cleanupScript",
                      a = { ...e, [s]: i }
                    ;(eX.setFieldValue(s, i), n(a))
                    return
                  }
                  let a = "setup" === t ? "setupPlatformScripts" : "cleanupPlatformScripts",
                    o = { ...e[a], [s]: i },
                    l = { ...e, [a]: o }
                  ;(eX.setFieldValue(a, o), n(l))
                },
                d = (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(L.t, {
                      children: (0, s.jsx)(H.ic, {
                        variant: "stacked",
                        label: (0, s.jsx)("label", {
                          htmlFor: "local-environment-name",
                          children: (0, s.jsx)(f.A, { ..._.n.environmentName }),
                        }),
                        control: (0, s.jsxs)("div", {
                          className: "flex flex-col gap-1",
                          children: [
                            (0, s.jsx)(h.pd, {
                              id: "local-environment-name",
                              value: e.name,
                              "aria-describedby": t.missingName ? V : void 0,
                              "aria-invalid": t.missingName,
                              onChange: (t) => {
                                let s = t.target.value
                                ;(eX.setFieldValue("name", s), n({ ...e, name: s }))
                              },
                            }),
                            t.missingName
                              ? (0, s.jsx)("div", {
                                  id: V,
                                  className: "text-xs text-danger",
                                  children: (0, s.jsx)(f.A, {
                                    id: "settings.localEnvironments.editor.nameRequired",
                                    defaultMessage: "Enter an environment name",
                                    description: "Inline validation for a missing local environment name",
                                  }),
                                })
                              : null,
                          ],
                        }),
                      }),
                    }),
                    (0, s.jsx)(F, { actions: (0, s.jsx)(W.r, {}), draft: e, scriptType: "setup", onScriptChange: r }),
                    (0, s.jsx)(F, { draft: e, scriptType: "cleanup", onScriptChange: r }),
                    (0, s.jsx)(R, {
                      actions: e.actions,
                      dropdownDisabled: eH.isPending,
                      incompleteActionIds: t.incompleteActionIds,
                      onChange: (t) => {
                        ;(eX.setFieldValue("actions", t), n({ ...e, actions: t }))
                      },
                    }),
                    null,
                  ],
                })
              return (0, s.jsxs)("fieldset", {
                className: "contents",
                "aria-busy": eH.isPending || void 0,
                disabled: eH.isPending,
                children: [
                  (0, s.jsx)(T.X, {
                    children: (0, s.jsxs)(T.X.Content, {
                      className: "gap-[var(--padding-panel)]",
                      children: [
                        ey.hasParseError
                          ? (0, s.jsx)("div", {
                              className: "text-sm text-danger",
                              role: "alert",
                              children: (0, s.jsx)(f.A, { ...z.y.parseError }),
                            })
                          : null,
                        ed
                          ? (0, s.jsxs)("div", {
                              className: "flex items-center justify-between gap-3 text-sm text-danger",
                              role: "alert",
                              children: [
                                (0, s.jsx)("span", { children: (0, s.jsx)(f.A, { ...z.y.readError }) }),
                                (0, s.jsx)(g.$, {
                                  color: "secondary",
                                  size: "toolbar",
                                  type: "button",
                                  onClick: ep,
                                  children: (0, s.jsx)(f.A, { ...z.y.retry }),
                                }),
                              ],
                            })
                          : null,
                        eD
                          ? (0, s.jsx)(L.t, {
                              children: (0, s.jsx)(H.ic, {
                                label: (0, s.jsx)("div", {
                                  className: "text-sm text-danger",
                                  children: (0, s.jsx)(f.A, {
                                    id: "settings.localEnvironments.projectInfo.error",
                                    defaultMessage: "Could not load project information",
                                    description:
                                      "Error shown when project information required to save an environment cannot be loaded",
                                  }),
                                }),
                                control: (0, s.jsx)(g.$, {
                                  color: "secondary",
                                  size: "toolbar",
                                  type: "button",
                                  onClick: () => {
                                    Promise.all([eS(), e_()])
                                  },
                                  children: (0, s.jsx)(f.A, {
                                    id: "settings.localEnvironments.projectInfo.retry",
                                    defaultMessage: "Retry",
                                    description: "Button label to retry loading project information",
                                  }),
                                }),
                              }),
                            })
                          : null,
                      ],
                    }),
                  }),
                  eh && !e$
                    ? (0, s.jsx)(F, { draft: e, scriptType: "setup", simpleSetup: !0, onScriptChange: r })
                    : null,
                  eh
                    ? (0, s.jsx)(v.J, {
                        collapsible: !0,
                        defaultOpen: !1,
                        title: (0, s.jsx)(f.A, {
                          id: "settings.localEnvironments.editor.advancedSetup",
                          defaultMessage: "Advanced options",
                          description: "Collapsible section containing the complete manual local environment editor",
                        }),
                        onOpenChange: ez,
                        children: e$ ? d : null,
                      })
                    : d,
                  o &&
                    (0, s.jsx)("div", {
                      className: "text-sm text-danger",
                      role: "alert",
                      children: (0, s.jsx)(f.A, {
                        id: "settings.localEnvironments.preview.saveConflict",
                        defaultMessage: "This environment changed on disk. Continuing will discard your unsaved edits",
                        description:
                          "Warning shown when resolving an environment save conflict will discard the current draft",
                      }),
                    }),
                  !o &&
                    null != eH.error &&
                    (0, s.jsx)("div", {
                      className: "text-sm text-danger",
                      role: "alert",
                      children: (0, s.jsx)(f.A, {
                        id: "settings.localEnvironments.preview.saveFailure",
                        defaultMessage: "Could not save the environment. Try again",
                        description: "Error message when saving a local environment file fails with guidance to retry",
                      }),
                    }),
                  (0, s.jsx)("div", {
                    className: "flex justify-end gap-2",
                    children: (0, s.jsx)(a.m, {
                      disabled: null == l,
                      content: l,
                      children: (0, s.jsx)("span", {
                        className: "inline-flex",
                        children: (0, s.jsxs)(g.$, {
                          "aria-busy": eH.isPending || void 0,
                          color: "primary",
                          size: "toolbar",
                          type: o ? "button" : "submit",
                          disabled: !o && (null != i || (eh && !(0, P.Zh)(e, eb?.platform)?.trim())),
                          loading: eH.isPending,
                          onClick: o
                            ? () => {
                                eu()
                              }
                            : void 0,
                          children: [
                            o &&
                              (0, s.jsx)(f.A, {
                                id: "settings.localEnvironments.preview.discardAndReload",
                                defaultMessage: "Discard edits",
                                description: "Button label to discard unsaved environment edits after a save conflict",
                              }),
                            !o &&
                              null != eH.error &&
                              (0, s.jsx)(f.A, {
                                id: "settings.localEnvironments.preview.retrySave",
                                defaultMessage: "Retry save",
                                description: "Button label to retry saving a local environment file",
                              }),
                            !o && null == eH.error && eh
                              ? (0, s.jsx)(f.A, {
                                  id: "settings.localEnvironments.editor.saveSimpleSetup",
                                  defaultMessage: "Set up project",
                                  description:
                                    "Button that saves and activates a reusable local environment from the compact setup-script dialog",
                                })
                              : null,
                            o || null != eH.error || eh
                              ? null
                              : (0, s.jsx)(f.A, {
                                  id: "settings.localEnvironments.preview.save",
                                  defaultMessage: "Save",
                                  description: "Save button label for local environment file",
                                }),
                          ],
                        }),
                      }),
                    }),
                  }),
                ],
              })
            }),
            (et[65] = e$),
            (et[66] = ey.draft),
            (et[67] = ey.hasParseError),
            (et[68] = ey.version),
            (et[69] = eX),
            (et[70] = eO),
            (et[71] = ed),
            (et[72] = eB),
            (et[73] = em),
            (et[74] = eu),
            (et[75] = ep),
            (et[76] = eb?.platform),
            (et[77] = eS),
            (et[78] = e_),
            (et[79] = eH.data?.type),
            (et[80] = eH.error),
            (et[81] = eH.isPending),
            (et[82] = eD),
            (et[83] = eh),
            (et[84] = K))
          : (K = et[84]),
        et[85] !== eX.Subscribe || et[86] !== K
          ? ((ee = (0, s.jsx)(eX.Subscribe, { selector: U, children: K })),
            (et[85] = eX.Subscribe),
            (et[86] = K),
            (et[87] = ee))
          : (ee = et[87]),
        et[88] !== J || et[89] !== ee
          ? ((en = (0, s.jsx)("form", {
              className: "flex flex-col gap-[var(--padding-panel)]",
              onSubmit: J,
              children: ee,
            })),
            (et[88] = J),
            (et[89] = ee),
            (et[90] = en))
          : (en = et[90]),
        en
      )
    }
    function U(e) {
      return e.values
    }
    function Z() {
      return null
    }
    function q({ hasChanges: e, isSelectionReady: n, readError: t, selectionError: s, isSaving: i, validation: a }) {
      return i
        ? "saving"
        : n
          ? t
            ? "read-error"
            : a.missingName
              ? "missing-name"
              : a.incompleteActionIds.length > 0
                ? "incomplete-action"
                : e
                  ? null
                  : "no-changes"
          : s
            ? "project-error"
            : "loading-project"
    }
  },
  Tr6k(e, n, t) {
    let s = (0, t("Qgfj").YK)({
      actionPlatforms: {
        id: "settings.localEnvironments.actions.item.platforms",
        defaultMessage: "Platforms",
        description: "Label for local environment action platforms",
      },
      actionScript: {
        id: "settings.localEnvironments.actions.item.command",
        defaultMessage: "Action script",
        description: "Label for local environment action script",
      },
      actionName: {
        id: "settings.localEnvironments.actions.item.name",
        defaultMessage: "Name",
        description: "Label for local environment action name",
      },
      addAction: {
        id: "settings.localEnvironments.actions.add",
        defaultMessage: "Add action",
        description: "Button label to add a local environment action",
      },
      actionsDescription: {
        id: "settings.localEnvironments.environment.actions.description",
        defaultMessage: "These actions can run any command and will be displayed in the header",
        description: "Description for local environment actions summary",
      },
      actionsEmpty: {
        id: "settings.localEnvironments.actions.empty",
        defaultMessage: "Add an action to run commands from the local toolbar",
        description: "Empty state for local environment actions",
      },
      actionsTitle: {
        id: "settings.localEnvironments.actions.title",
        defaultMessage: "Actions",
        description: "Title for local environment actions section",
      },
      cleanupPlatformSelector: {
        id: "settings.localEnvironments.environment.cleanup.platformSelector",
        defaultMessage: "Cleanup script platform",
        description: "Accessible label for the cleanup script platform selector",
      },
      cleanupDescription: {
        id: "settings.localEnvironments.environment.cleanup.description",
        defaultMessage: "Runs at the project root before worktree cleanup",
        description: "Description for the cleanup script input",
      },
      cleanupScript: {
        id: "settings.localEnvironments.environment.cleanup.title",
        defaultMessage: "Cleanup script",
        description: "Title for the local environment cleanup script section",
      },
      defaultEnvironmentName: {
        id: "settings.localEnvironments.environment.defaultName",
        defaultMessage: "local",
        description: "Fallback name for a local environment",
      },
      environmentName: {
        id: "settings.localEnvironments.environment.name",
        defaultMessage: "Name",
        description: "Label for a local environment name",
      },
      setupPlatformSelector: {
        id: "settings.localEnvironments.environment.setup.platformSelector",
        defaultMessage: "Setup script platform",
        description: "Accessible label for the setup script platform selector",
      },
      setupScript: {
        id: "settings.localEnvironments.environment.setup",
        defaultMessage: "Setup script",
        description: "Label for a local environment setup script",
      },
    })
    t.d(n, {}, { n: s })
  },
  gTr2(e, n, t) {
    t.d(n, { t: () => c })
    var s = t("ABep"),
      i = t("QosV"),
      a = t("DBCl"),
      o = t("Wf1j"),
      l = t("EShr")
    let r = (0, t("Qgfj").YK)({
      all: {
        id: "settings.localEnvironments.actions.item.platforms.all",
        defaultMessage: "All platforms",
        description: "Label for an action available on every platform",
      },
      default: {
        id: "settings.localEnvironments.environment.script.default",
        defaultMessage: "Default",
        description: "Label for default local environment lifecycle script",
      },
      darwin: {
        id: "settings.localEnvironments.actions.item.platforms.macos",
        defaultMessage: "macOS",
        description: "Label for macOS platform toggle",
      },
      linux: {
        id: "settings.localEnvironments.actions.item.platforms.linux",
        defaultMessage: "Linux",
        description: "Label for Linux platform toggle",
      },
      win32: {
        id: "settings.localEnvironments.actions.item.platforms.windows",
        defaultMessage: "Windows",
        description: "Label for Windows platform toggle",
      },
    })
    function c(e) {
      let n,
        t,
        c,
        d = (0, i.c)(10),
        { leadingOption: m, selectedId: u, onSelect: p, ariaLabel: f } = e,
        g = (0, o.A)()
      d[0] !== m ? ((n = [m, ...a.jtP]), (d[0] = m), (d[1] = n)) : (n = d[1])
      let v = n
      return (
        d[2] !== g || d[3] !== v
          ? ((t = v.map((e) => {
              let n = g.formatMessage(r[e])
              return { id: e, label: n, ariaLabel: n }
            })),
            (d[2] = g),
            (d[3] = v),
            (d[4] = t))
          : (t = d[4]),
        d[5] !== f || d[6] !== p || d[7] !== u || d[8] !== t
          ? ((c = (0, s.jsx)(l.T, { selectedId: u, onSelect: p, ariaLabel: f, options: t })),
            (d[5] = f),
            (d[6] = p),
            (d[7] = u),
            (d[8] = t),
            (d[9] = c))
          : (c = d[9]),
        c
      )
    }
  },
  lXzT(e, n, t) {
    var s = t("GaA7"),
      i = t("Rxpj"),
      a = t("tNgt")
    t.d(
      n,
      {},
      {
        b: async function ({
          configPath: e,
          draft: n,
          expectedRevision: t,
          hostId: o,
          queryClient: l,
          selectEnvironment: r,
          version: c,
          workspaceRoot: d,
        }) {
          let m = (0, a.ls)(n.name, n.actions)
          if (m.missingName || m.incompleteActionIds.length > 0) return { type: "invalid" }
          let u = (0, a.GU)({ version: c, ...n }),
            p = s.appServices.localEnvironments
          if (null == p) throw Error("Local environments are not supported by this host.")
          let f = await p.saveConfig({ configPath: e, expectedRevision: t, hostId: o, raw: u }),
            g = f.configPath,
            v = (0, i._m)(l, o, [e, g], d)
          if ("conflict" === f.type) return { type: "conflict" }
          await v
          let h = await r?.(g)
          return { configPath: g, type: !1 === h ? "selection-failed" : "success" }
        },
        z: async function ({
          codexWorktree: e,
          configPath: n,
          gitRoot: t,
          selectForWorkspace: s,
          selectForWorktree: i,
        }) {
          return e ? null != t && i(t, n) : (s(n), !0)
        },
      },
    )
  },
  BsEo(e, n, t) {
    var s = t("ABep"),
      i = t("QosV"),
      a = t("DBCl"),
      o = t("oyxz"),
      l = t("Sm6l"),
      r = t("nzx4")
    function c(e) {
      let n,
        t,
        a,
        o = (0, i.c)(7),
        { variableName: l, description: r } = e
      return (
        o[0] !== r
          ? ((n = (0, s.jsx)("div", { className: "text-sm text-secondary", children: r })), (o[0] = r), (o[1] = n))
          : (n = o[1]),
        o[2] !== l
          ? ((t = (0, s.jsx)("div", {
              className:
                "overflow-x-auto rounded-md border border-background-primary-soft bg-secondary-soft-alpha px-2 py-1.5",
              children: (0, s.jsx)("code", {
                className: "block text-xs font-medium whitespace-nowrap text-default",
                children: l,
              }),
            })),
            (o[2] = l),
            (o[3] = t))
          : (t = o[3]),
        o[4] !== n || o[5] !== t
          ? ((a = (0, s.jsxs)("div", { className: "flex flex-col gap-0.5 rounded-lg px-2 py-1", children: [n, t] })),
            (o[4] = n),
            (o[5] = t),
            (o[6] = a))
          : (a = o[6]),
        a
      )
    }
    t.d(
      n,
      {},
      {
        r: function () {
          let e,
            n,
            t,
            d,
            m = (0, i.c)(4)
          return (
            m[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, s.jsx)(r.Wv, {
                  asChild: !0,
                  children: (0, s.jsx)(l.$, {
                    color: "secondary",
                    size: "toolbar",
                    className: "w-auto",
                    children: (0, s.jsx)(o.A, {
                      id: "settings.localEnvironments.environment.setup.envVars.button",
                      defaultMessage: "Variables",
                      description: "Button label that opens the setup env vars popover",
                    }),
                  }),
                })),
                (m[0] = e))
              : (e = m[0]),
            m[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = (0, s.jsx)(r.eO, {
                  className: "px-2 py-1 text-sm font-medium text-default",
                  children: (0, s.jsx)(o.A, {
                    id: "settings.localEnvironments.environment.setup.envVars.title",
                    defaultMessage: "Setup script environment variables",
                    description: "Title for the setup env vars popover",
                  }),
                })),
                (m[1] = n))
              : (n = m[1]),
            m[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, s.jsx)(c, {
                  description: (0, s.jsx)(o.A, {
                    id: "settings.localEnvironments.environment.setup.envVars.sourcePath.description",
                    defaultMessage: "Source workspace path",
                    description: "Description for the source workspace setup env var",
                  }),
                  variableName: a.l_T,
                })),
                (m[2] = t))
              : (t = m[2]),
            m[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((d = (0, s.jsxs)(r.AM, {
                  children: [
                    e,
                    (0, s.jsxs)(r.hl, {
                      align: "end",
                      className: "w-80 max-w-[min(20rem,var(--radix-popover-content-available-width))] gap-1",
                      children: [
                        n,
                        (0, s.jsxs)("div", {
                          className: "flex flex-col gap-1",
                          children: [
                            t,
                            (0, s.jsx)(c, {
                              variableName: a.eXE,
                              description: (0, s.jsx)(o.A, {
                                id: "settings.localEnvironments.environment.setup.envVars.worktreePath.description",
                                defaultMessage: "New worktree path",
                                description: "Description for the worktree setup env var",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })),
                (m[3] = d))
              : (d = m[3]),
            d
          )
        },
      },
    )
  },
  xNQs(e, n, t) {
    let s = (0, t("Qgfj").YK)({
      needsAttention: {
        id: "localEnvironment.needsAttention",
        defaultMessage: "Environment needs attention",
        description: "Message shown when local environment files need to be repaired in Settings",
      },
      parseError: {
        id: "settings.localEnvironments.file.invalidEnvironmentWarning",
        defaultMessage: "This environment file is invalid. Saving will replace its contents",
        description: "Warning that saving an invalid local environment file will replace it",
      },
      readError: {
        id: "settings.localEnvironments.file.readFailure",
        defaultMessage: "Unable to load this environment file. Try again",
        description: "Read error for a local environment file with guidance to retry",
      },
      retry: {
        id: "settings.localEnvironments.retry",
        defaultMessage: "Retry",
        description: "Button label to retry loading local environment data",
      },
      setup: {
        id: "threadPage.runAction.environment.setup",
        defaultMessage: "Set up local environment",
        description: "Accessible label for setting up a local environment from a thread",
      },
    })
    t.d(n, {}, { y: s })
  },
  TlLQ(e, n, t) {
    var s = t("DBCl"),
      i = t("ASxG")
    let a = "local-environments/create",
      o = `/settings/${a}`,
      l = i.object({
        hostId: i.string().min(1),
        returnTo: i
          .string()
          .startsWith("/")
          .refine((e) => !e.startsWith("//")),
      }),
      r = i.object({
        configPath: i.string().min(1).nullable(),
        projectId: i.string().min(1).transform(s.Np8).optional(),
        workspaceRoot: i.string().min(1),
      })
    t.d(
      n,
      {},
      {
        FO: o,
        pN: function (e, n) {
          let t = l.safeParse(n),
            s = r.safeParse({
              configPath: e.get("configPath"),
              projectId: e.get("projectId") ?? void 0,
              workspaceRoot: e.get("workspaceRoot"),
            })
          return t.success && s.success ? { ...t.data, ...s.data } : null
        },
        q_: function ({ configPath: e, projectId: n, workspaceRoot: t }) {
          let s = new URLSearchParams({ workspaceRoot: t })
          return (null != e && s.set("configPath", e), null != n && s.set("projectId", n), `${o}?${s.toString()}`)
        },
        x0: a,
      },
    )
  },
  V39R(e, n, t) {
    t.d(n, { LocalEnvironmentsSettingsContent: () => ey })
    var s = t("ABep"),
      i = t("QosV"),
      a = t("AWRU"),
      o = t("QxwI"),
      l = t("zTeN"),
      r = t("DBCl"),
      c = t("zd8w"),
      d = t("Wf1j"),
      m = t("oyxz"),
      u = t("HZfM"),
      p = t("Sm6l"),
      f = t("HOLv"),
      g = t("UtcH"),
      v = t("Wbxh"),
      h = t("nn0H"),
      x = t("BQ8Y"),
      j = t("O8dD"),
      b = t("xNQs"),
      y = t("Zt82")
    function w(e, n) {
      return n?.label ?? (0, y.P)(e) ?? e
    }
    var E = t("pki7"),
      S = t("XsHM"),
      A = t("OWtl"),
      N = t("jxU8"),
      M = t("BSnr"),
      k = t("fHlE"),
      C = t("odCE"),
      P = t("AWNZ"),
      _ = t("QyE3"),
      I = t("ZEx5"),
      T = t("qUPv"),
      L = t("SOLA"),
      R = t("kfGJ"),
      $ = t("s6B0"),
      z = t("hZax"),
      D = t("hNt3"),
      B = t("pAJp"),
      H = t("aTcy"),
      O = t("Ot7V")
    function X() {
      let e,
        n = (0, i.c)(1)
      return (
        n[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)("div", {
              className: "select-none",
              children: (0, s.jsx)(m.A, {
                id: "settings.localEnvironments.workspaceSelect.descriptionWithLink",
                defaultMessage:
                  "Local environments tell ChatGPT how to set up worktrees for a project. <learnMore>Learn more</learnMore>",
                description:
                  "Explanatory text for local environments in Worktrees settings. Local environments configure project worktree setup on the user's machine. The learnMore tag links to the environments guide.",
                values: { learnMore: F },
              }),
            })),
            (n[0] = e))
          : (e = n[0]),
        e
      )
    }
    function F(e) {
      return (0, s.jsx)("a", {
        className: "inline-flex items-center gap-1 text-base text-link-primary!",
        href: H.pU,
        target: "_blank",
        rel: "noreferrer",
        onClick: W,
        children: e,
      })
    }
    function W(e) {
      ;(0, O.PQ)({ event: e, href: H.pU, initiator: "open_in_browser_bridge" })
    }
    var V = t("TlLQ"),
      Q = t("on57"),
      U = t("evwP"),
      Z = t("Yakm"),
      q = t("zXOI"),
      Y = t("la9L"),
      G = t("Tr6k"),
      J = t("gTr2")
    function K(e) {
      let n,
        t,
        a,
        o,
        l,
        u,
        p,
        f,
        g,
        v = (0, i.c)(29),
        { actions: h, lifecycle: x, scriptType: j } = e,
        b = (0, d.A)(),
        [y, w] = (0, c.useState)("default"),
        E = x?.script ?? "",
        S = "default" === y ? null : (x?.[y]?.script ?? ""),
        A = "" === S && E.length > 0,
        N = null == S || A ? E : S
      v[0] !== E.length || v[1] !== x
        ? ((n = E.length > 0 || r.jtP.some((e) => !!x?.[e]?.script)), (v[0] = E.length), (v[1] = x), (v[2] = n))
        : (n = v[2])
      let k = n,
        C = "setup" === j
      return (
        v[3] !== C
          ? ((t = C ? (0, s.jsx)(m.A, { ...G.n.setupScript }) : (0, s.jsx)(m.A, { ...G.n.cleanupScript })),
            (a = C
              ? (0, s.jsx)(m.A, {
                  id: "settings.localEnvironments.environment.setup.description",
                  defaultMessage: "This script runs on worktree creation",
                  description: "Description for environment setup script summary",
                })
              : (0, s.jsx)(m.A, { ...G.n.cleanupDescription })),
            (v[3] = C),
            (v[4] = t),
            (v[5] = a))
          : ((t = v[4]), (a = v[5])),
        v[6] !== h || v[7] !== t || v[8] !== a
          ? ((o = (0, s.jsx)(M.X.Header, { title: t, subtitle: a, actions: h })),
            (v[6] = h),
            (v[7] = t),
            (v[8] = a),
            (v[9] = o))
          : (o = v[9]),
        v[10] !== k || v[11] !== b || v[12] !== y || v[13] !== C
          ? ((l = k
              ? (0, s.jsx)(J.t, {
                  leadingOption: "default",
                  selectedId: y,
                  onSelect: w,
                  ariaLabel: C
                    ? b.formatMessage(G.n.setupPlatformSelector)
                    : b.formatMessage(G.n.cleanupPlatformSelector),
                })
              : null),
            (v[10] = k),
            (v[11] = b),
            (v[12] = y),
            (v[13] = C),
            (v[14] = l))
          : (l = v[14]),
        v[15] !== y || v[16] !== A
          ? ((u =
              "default" !== y && A
                ? (0, s.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, s.jsx)(m.A, {
                      id: "settings.localEnvironments.environment.platformUsesDefault",
                      defaultMessage: "No platform override. Using the default script",
                      description: "Message shown when a platform uses the default local environment script",
                    }),
                  })
                : null),
            (v[15] = y),
            (v[16] = A),
            (v[17] = u))
          : (u = v[17]),
        v[18] !== k || v[19] !== N || v[20] !== y
          ? ((p =
              N.length > 0
                ? (0, s.jsx)(Y.CodeSnippet, {
                    language: "win32" === y ? "text" : "bash",
                    content: N,
                    shouldWrapCode: !0,
                    codeContainerClassName: "max-h-56",
                  })
                : (0, s.jsx)(I.t, {
                    variant: "secondary",
                    children: (0, s.jsx)(P.ic, {
                      label:
                        "default" !== y && k
                          ? (0, s.jsx)(m.A, {
                              id: "settings.localEnvironments.environment.platformScript.empty",
                              defaultMessage: "No script configured for this platform",
                              description: "Empty state for a local environment platform script",
                            })
                          : (0, s.jsx)(m.A, {
                              id: "settings.localEnvironments.environment.script.empty",
                              defaultMessage: "No script configured",
                              description: "Empty state for a local environment script",
                            }),
                      control: null,
                      size: "compact",
                    }),
                  })),
            (v[18] = k),
            (v[19] = N),
            (v[20] = y),
            (v[21] = p))
          : (p = v[21]),
        v[22] !== l || v[23] !== u || v[24] !== p
          ? ((f = (0, s.jsxs)(M.X.Content, { className: "gap-2", children: [l, u, p] })),
            (v[22] = l),
            (v[23] = u),
            (v[24] = p),
            (v[25] = f))
          : (f = v[25]),
        v[26] !== o || v[27] !== f
          ? ((g = (0, s.jsxs)(M.X, { className: "gap-2", children: [o, f] })), (v[26] = o), (v[27] = f), (v[28] = g))
          : (g = v[28]),
        g
      )
    }
    var ee = t("BsEo"),
      en = t("EjYe")
    function et(e) {
      let n,
        t,
        a,
        o = (0, i.c)(12),
        { configExists: l, initialEnvironment: r, hasParseError: c, hasReadError: d } = e,
        u = null != r,
        p = r?.actions
      return (
        o[0] !== l || o[1] !== c || o[2] !== u || o[3] !== d
          ? ((n =
              !u || c || d
                ? (0, s.jsx)(M.X, {
                    className: "gap-2",
                    children: (0, s.jsxs)(M.X.Content, {
                      children: [
                        l
                          ? null
                          : (0, s.jsx)(I.t, {
                              children: (0, s.jsx)(U.W, {
                                layout: "settings-row",
                                children: (0, s.jsx)(m.A, {
                                  id: "settings.localEnvironments.environment.empty",
                                  defaultMessage: "No local environment is configured for this project yet",
                                  description: "Empty state when no local environment is configured",
                                }),
                              }),
                            }),
                        c
                          ? (0, s.jsx)("div", {
                              className: "mt-2 text-sm text-danger",
                              children: (0, s.jsx)(m.A, { ...b.y.parseError }),
                            })
                          : null,
                        d
                          ? (0, s.jsx)("div", {
                              className: "mt-2 text-sm text-danger",
                              children: (0, s.jsx)(m.A, { ...b.y.readError }),
                            })
                          : null,
                      ],
                    }),
                  })
                : null),
            (o[0] = l),
            (o[1] = c),
            (o[2] = u),
            (o[3] = d),
            (o[4] = n))
          : (n = o[4]),
        o[5] !== p || o[6] !== u || o[7] !== r
          ? ((t = u
              ? (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(K, { actions: (0, s.jsx)(ee.r, {}), lifecycle: r.setup, scriptType: "setup" }),
                    (0, s.jsx)(K, { lifecycle: r.cleanup, scriptType: "cleanup" }),
                    (0, s.jsxs)(M.X, {
                      className: "gap-2",
                      children: [
                        (0, s.jsx)(M.X.Header, {
                          title: (0, s.jsx)(m.A, {
                            id: "settings.localEnvironments.environment.actionsLabel",
                            defaultMessage: "Actions",
                            description: "Label for actions count in local environment summary",
                          }),
                          subtitle: (0, s.jsx)(m.A, { ...G.n.actionsDescription }),
                        }),
                        (0, s.jsx)(M.X.Content, {
                          children: (0, s.jsx)(I.t, {
                            children:
                              null != p && p.length > 0
                                ? p.map(es)
                                : (0, s.jsx)(U.W, {
                                    layout: "settings-row",
                                    children: (0, s.jsx)(m.A, { ...G.n.actionsEmpty }),
                                  }),
                          }),
                        }),
                      ],
                    }),
                  ],
                })
              : null),
            (o[5] = p),
            (o[6] = u),
            (o[7] = r),
            (o[8] = t))
          : (t = o[8]),
        o[9] !== n || o[10] !== t
          ? ((a = (0, s.jsxs)(s.Fragment, { children: [n, t] })), (o[9] = n), (o[10] = t), (o[11] = a))
          : (a = o[11]),
        a
      )
    }
    function es(e, n) {
      return (0, s.jsx)(ei, { action: e }, `${e.name}-${n}`)
    }
    function ei(e) {
      let n,
        t,
        a,
        o,
        l,
        r,
        d,
        u = (0, i.c)(25),
        { action: f } = e,
        [g, v] = (0, c.useState)(!1),
        h = (0, c.useId)()
      if (u[0] !== f.command) {
        let e
        ;(u[2] === Symbol.for("react.memo_cache_sentinel") ? ((e = /\r?\n/), (u[2] = e)) : (e = u[2]),
          (n = f.command.trimEnd().split(e)),
          (u[0] = f.command),
          (u[1] = n))
      } else n = u[1]
      let x = n,
        j = x.length > 1
      u[3] !== f.command || u[4] !== j
        ? ((t = j
            ? (0, s.jsx)(P.ic, {
                label: null,
                control: (0, s.jsx)("code", {
                  className: "block w-full font-mono text-xs break-all whitespace-pre-wrap",
                  dir: "ltr",
                  children: f.command,
                }),
                variant: "nested",
              })
            : null),
          (u[3] = f.command),
          (u[4] = j),
          (u[5] = t))
        : (t = u[5])
      let b = j && g,
        y = f.icon ?? "tool"
      return (
        u[6] !== y
          ? ((a = (0, s.jsx)("span", { className: "text-secondary", children: (0, s.jsx)(q.M, { icon: y }) })),
            (u[6] = y),
            (u[7] = a))
          : (a = u[7]),
        u[8] !== x[0]
          ? ((o = (0, s.jsx)("code", { className: "font-mono text-wrap break-all", dir: "ltr", children: x[0] })),
            (u[8] = x[0]),
            (u[9] = o))
          : (o = u[9]),
        u[10] !== f.name || u[11] !== h || u[12] !== g || u[13] !== j
          ? ((l = j
              ? (0, s.jsxs)(p.$, {
                  "aria-controls": h,
                  "aria-expanded": g,
                  color: "ghost",
                  size: "icon",
                  uniform: !0,
                  onClick: () => {
                    v(!g)
                  },
                  children: [
                    (0, s.jsx)("span", {
                      className: "sr-only",
                      children: g
                        ? (0, s.jsx)(m.A, {
                            id: "settings.localEnvironments.environment.action.hideCommand",
                            defaultMessage: "Hide full command for {actionName}",
                            description: "Accessible label for collapsing a local environment action command",
                            values: { actionName: f.name },
                          })
                        : (0, s.jsx)(m.A, {
                            id: "settings.localEnvironments.environment.action.showCommand",
                            defaultMessage: "Show full command for {actionName}",
                            description: "Accessible label for expanding a local environment action command",
                            values: { actionName: f.name },
                          }),
                    }),
                    (0, s.jsx)(Z.A, {
                      "aria-hidden": !0,
                      className: (0, Q.A)(
                        "icon-2xs shrink-0 text-tertiary transition-transform",
                        g ? "rotate-0" : "-rotate-90",
                      ),
                    }),
                  ],
                })
              : null),
            (u[10] = f.name),
            (u[11] = h),
            (u[12] = g),
            (u[13] = j),
            (u[14] = l))
          : (l = u[14]),
        u[15] !== f.name || u[16] !== a || u[17] !== o || u[18] !== l
          ? ((r = (0, s.jsx)(P.ic, { icon: a, label: f.name, description: o, control: l })),
            (u[15] = f.name),
            (u[16] = a),
            (u[17] = o),
            (u[18] = l),
            (u[19] = r))
          : (r = u[19]),
        u[20] !== h || u[21] !== t || u[22] !== b || u[23] !== r
          ? ((d = (0, s.jsx)(en.H, { content: t, contentId: h, expanded: b, children: r })),
            (u[20] = h),
            (u[21] = t),
            (u[22] = b),
            (u[23] = r),
            (u[24] = d))
          : (d = u[24]),
        d
      )
    }
    var ea = t("slpy"),
      eo = t("LXO4"),
      el = t("O8pf"),
      er = t("zKw6"),
      ec = t.n(er),
      ed = t("RNul"),
      em = t("UxN3"),
      eu = t("FpNC"),
      ep = t("Tigz"),
      ef = t("bnxy")
    let eg = (0, t("Qgfj").YK)({
      selectProject: {
        id: "settings.localEnvironments.workspaceSelect.title",
        defaultMessage: "Select a project",
        description: "Title for the workspace selection step",
      },
      editEnvironment: {
        id: "settings.localEnvironments.environment.editAction",
        defaultMessage: "Edit",
        description: "Button label to edit a local environment",
      },
      createEnvironment: {
        id: "settings.localEnvironments.environment.create",
        defaultMessage: "Create local environment",
        description: "Button label to create a local environment",
      },
    })
    function ev(e) {
      let n,
        t,
        a,
        o,
        l,
        r = (0, i.c)(17),
        {
          groups: c,
          hasError: d,
          hostId: u,
          isLoading: f,
          workspaceRoots: g,
          onAddWorkspace: v,
          onCreateEnvironment: h,
          onRetry: x,
          onSelectEnvironment: j,
        } = e
      return (
        r[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, s.jsx)(m.A, { ...eg.selectProject })), (r[0] = n))
          : (n = r[0]),
        r[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, s.jsx)(m.A, {
              id: "settings.localEnvironments.workspace.add",
              defaultMessage: "Add project",
              description: "Button label to add a new workspace",
            })),
            (r[1] = t))
          : (t = r[1]),
        r[2] !== v
          ? ((a = (0, s.jsx)(M.X.Header, {
              title: n,
              actions: (0, s.jsx)(p.$, { color: "secondary", size: "toolbar", onClick: v, children: t }),
            })),
            (r[2] = v),
            (r[3] = a))
          : (a = r[3]),
        r[4] !== c ||
        r[5] !== d ||
        r[6] !== u ||
        r[7] !== f ||
        r[8] !== v ||
        r[9] !== h ||
        r[10] !== x ||
        r[11] !== j ||
        r[12] !== g
          ? ((o = (0, s.jsx)(M.X.Content, {
              children: (0, s.jsx)("div", {
                className: "flex flex-col gap-2",
                children: (0, s.jsx)(eh, {
                  groups: c,
                  hasError: d,
                  hostId: u,
                  isLoading: f,
                  workspaceRoots: g,
                  onAddWorkspace: v,
                  onCreateEnvironment: h,
                  onRetry: x,
                  onSelectEnvironment: j,
                }),
              }),
            })),
            (r[4] = c),
            (r[5] = d),
            (r[6] = u),
            (r[7] = f),
            (r[8] = v),
            (r[9] = h),
            (r[10] = x),
            (r[11] = j),
            (r[12] = g),
            (r[13] = o))
          : (o = r[13]),
        r[14] !== a || r[15] !== o
          ? ((l = (0, s.jsxs)(M.X, { children: [a, o] })), (r[14] = a), (r[15] = o), (r[16] = l))
          : (l = r[16]),
        l
      )
    }
    function eh(e) {
      let n,
        t,
        a,
        o,
        l,
        r,
        c = (0, i.c)(33),
        {
          groups: u,
          hasError: f,
          hostId: g,
          isLoading: v,
          workspaceRoots: h,
          onAddWorkspace: x,
          onCreateEnvironment: j,
          onRetry: y,
          onSelectEnvironment: w,
        } = e,
        E = (0, d.A)()
      if (
        c[0] !== u ||
        c[1] !== f ||
        c[2] !== g ||
        c[3] !== E ||
        c[4] !== v ||
        c[5] !== x ||
        c[6] !== j ||
        c[7] !== y ||
        c[8] !== w ||
        c[9] !== h
      ) {
        l = Symbol.for("react.early_return_sentinel")
        e: {
          let e = new Set()
          if (v) {
            let e
            ;(c[15] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, s.jsx)(C.j, {
                  children: (0, s.jsx)(m.A, {
                    id: "settings.localEnvironments.workspaceSelect.loading",
                    defaultMessage: "Loading projects…",
                    description: "Loading message while workspace options are fetched",
                  }),
                })),
                (c[15] = e))
              : (e = c[15]),
              (l = e))
            break e
          }
          if (f) {
            let e, n, t, i
            ;(c[16] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, s.jsx)(m.A, { ...b.y.retry })), (c[16] = e))
              : (e = c[16]),
              c[17] !== y
                ? ((n = (0, s.jsx)(p.$, { color: "secondary", size: "toolbar", onClick: y, children: e })),
                  (c[17] = y),
                  (c[18] = n))
                : (n = c[18]),
              c[19] === Symbol.for("react.memo_cache_sentinel")
                ? ((t = (0, s.jsx)("span", {
                    className: "text-danger",
                    role: "alert",
                    children: (0, s.jsx)(m.A, {
                      id: "settings.localEnvironments.workspaceSelect.error",
                      defaultMessage: "Could not load projects",
                      description: "Error shown when local environment projects cannot be loaded",
                    }),
                  })),
                  (c[19] = t))
                : (t = c[19]),
              c[20] !== n
                ? ((i = (0, s.jsx)(I.t, { children: (0, s.jsx)(P.ic, { control: n, label: t }) })),
                  (c[20] = n),
                  (c[21] = i))
                : (i = c[21]),
              (l = i))
            break e
          }
          if (0 === h.length) {
            let e, n, t
            ;(c[22] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, s.jsx)(m.A, {
                  id: "settings.localEnvironments.workspaceSelect.empty",
                  defaultMessage: "No projects yet. Add one to configure local environments.",
                  description: "Empty state when no workspace roots are available",
                })),
                (c[22] = e))
              : (e = c[22]),
              c[23] === Symbol.for("react.memo_cache_sentinel")
                ? ((n = (0, s.jsx)(m.A, {
                    id: "settings.localEnvironments.workspace.add",
                    defaultMessage: "Add project",
                    description: "Button label to add a new workspace",
                  })),
                  (c[23] = n))
                : (n = c[23]),
              c[24] !== x
                ? ((t = (0, s.jsx)(I.t, {
                    children: (0, s.jsxs)("div", {
                      className: "flex flex-col gap-3 p-3 text-sm text-secondary",
                      children: [
                        e,
                        (0, s.jsx)("div", {
                          children: (0, s.jsx)(p.$, { color: "primary", size: "toolbar", onClick: x, children: n }),
                        }),
                      ],
                    }),
                  })),
                  (c[24] = x),
                  (c[25] = t))
                : (t = c[25]),
              (l = t))
            break e
          }
          ;((n = "flex flex-col gap-3"),
            (t = "list"),
            c[26] !== E
              ? ((a = E.formatMessage({
                  id: "settings.localEnvironments.workspaceSelect.listLabel",
                  defaultMessage: "Available projects",
                  description: "Aria label for the workspace selection list",
                })),
                (c[26] = E),
                (c[27] = a))
              : (a = c[27]),
            (o = h.map((n) => {
              let t = (0, ef.XH)(n),
                i = u.find((s) => !e.has(`${s.projectId}:${t}`) && null != s.path && (0, ef.y7)(s.path, n)) ?? null
              return (
                null != i && e.add(`${i.projectId}:${t}`),
                (0, s.jsx)(
                  ex,
                  { hostId: g, resolvedProject: i, workspaceRoot: n, onCreateEnvironment: j, onSelectEnvironment: w },
                  `${i?.projectId ?? "unassigned"}:${n}`,
                )
              )
            })))
        }
        ;((c[0] = u),
          (c[1] = f),
          (c[2] = g),
          (c[3] = E),
          (c[4] = v),
          (c[5] = x),
          (c[6] = j),
          (c[7] = y),
          (c[8] = w),
          (c[9] = h),
          (c[10] = n),
          (c[11] = t),
          (c[12] = a),
          (c[13] = o),
          (c[14] = l))
      } else ((n = c[10]), (t = c[11]), (a = c[12]), (o = c[13]), (l = c[14]))
      return l !== Symbol.for("react.early_return_sentinel")
        ? l
        : (c[28] !== n || c[29] !== t || c[30] !== a || c[31] !== o
            ? ((r = (0, s.jsx)("div", { className: n, role: t, "aria-label": a, children: o })),
              (c[28] = n),
              (c[29] = t),
              (c[30] = a),
              (c[31] = o),
              (c[32] = r))
            : (r = c[32]),
          r)
    }
    function ex(e) {
      let n,
        t,
        a,
        o,
        u,
        g,
        v,
        x,
        j,
        y,
        E = (0, i.c)(74),
        { hostId: S, resolvedProject: A, workspaceRoot: N, onCreateEnvironment: M, onSelectEnvironment: k } = e,
        C = (0, d.A)()
      E[0] !== S || E[1] !== N
        ? ((n = { hostId: S, workspaceRoot: N }), (E[0] = S), (E[1] = N), (E[2] = n))
        : (n = E[2])
      let { data: _, isLoading: T, isFetching: L, error: R, refetch: $ } = (0, l._U)(h.Ly, n)
      E[3] !== _ ? ((t = void 0 === _ ? [] : _), (E[3] = _), (E[4] = t)) : (t = E[4])
      let z = t,
        [B, H] = (0, c.useState)(!1),
        O = `local-environment-inherited-${(0, c.useId)()}`
      E[5] !== A ? ((a = null == A ? void 0 : (0, r.Np8)(A.projectId)), (E[5] = A), (E[6] = a)) : (a = E[6])
      let X = a,
        F = !T && !L && null == R
      if (
        E[7] !== F ||
        E[8] !== z ||
        E[9] !== R ||
        E[10] !== L ||
        E[11] !== T ||
        E[12] !== O ||
        E[13] !== C ||
        E[14] !== M ||
        E[15] !== k ||
        E[16] !== X ||
        E[17] !== $ ||
        E[18] !== A ||
        E[19] !== B ||
        E[20] !== N
      ) {
        let e,
          n,
          t,
          i,
          a,
          l,
          r,
          c,
          d,
          h,
          j,
          y,
          S,
          _,
          W,
          V,
          U = F
            ? (function (e, n) {
                let t = [],
                  s = []
                for (let i of e) (0, ef.y7)(eb(i.configPath), n) ? t.push(i) : s.push(i)
                return { projectEnvironments: t, inheritedEnvironments: s }
              })(z, N)
            : null,
          q = U?.projectEnvironments ?? [],
          Y = U?.inheritedEnvironments ?? [],
          G = (0, D.Dz)(q),
          J = A?.isCodexWorktree ? ep.A : eu.A
        E[26] !== R || E[27] !== L || E[28] !== T || E[29] !== C || E[30] !== A || E[31] !== N
          ? ((l = w(N, A)),
            (t = A?.gitRepos[0]?.ownerRepo?.owner ?? null),
            (i = T || L),
            (n = null != R),
            (e = C.formatMessage(
              {
                id: "settings.localEnvironments.workspaceSelect.addLabel",
                defaultMessage: "Add environment to {projectName}",
                description: "Aria label for add environment button",
              },
              { projectName: l },
            )),
            (a = C.formatMessage(
              {
                id: "settings.localEnvironments.workspaceSelect.openProject",
                defaultMessage: "Open {projectName}",
                description: "Aria label for opening a project's default environment",
              },
              { projectName: l },
            )),
            (E[26] = R),
            (E[27] = L),
            (E[28] = T),
            (E[29] = C),
            (E[30] = A),
            (E[31] = N),
            (E[32] = e),
            (E[33] = n),
            (E[34] = t),
            (E[35] = i),
            (E[36] = a),
            (E[37] = l))
          : ((e = E[32]), (n = E[33]), (t = E[34]), (i = E[35]), (a = E[36]), (l = E[37]))
        let K = a
        E[38] !== F || E[39] !== z || E[40] !== N
          ? ((r = F ? (0, D.JT)(z, N) : null), (E[38] = F), (E[39] = z), (E[40] = N), (E[41] = r))
          : (r = E[41])
        let ee = r
        E[42] !== C
          ? ((c = C.formatMessage({
              id: "settings.localEnvironments.workspaceSelect.loadingLabel",
              defaultMessage: "Loading environment",
              description: "Label for environment row while loading",
            })),
            (E[42] = C),
            (E[43] = c))
          : (c = E[43])
        let et = c
        E[44] !== C
          ? ((d = C.formatMessage({
              id: "settings.localEnvironments.workspaceSelect.errorLabel",
              defaultMessage: "Environment needs attention",
              description: "Label for environment row when environment data fails",
            })),
            (E[44] = C),
            (E[45] = d))
          : (d = E[45])
        let es = d
        E[46] !== C || E[47] !== B
          ? ((h = B
              ? C.formatMessage({
                  id: "settings.localEnvironments.workspaceSelect.inherited.hide",
                  defaultMessage: "Hide inherited environments",
                  description: "Aria label for hiding inherited local environments",
                })
              : C.formatMessage({
                  id: "settings.localEnvironments.workspaceSelect.inherited.show",
                  defaultMessage: "Show inherited environments",
                  description: "Aria label for showing inherited local environments",
                })),
            (E[46] = C),
            (E[47] = B),
            (E[48] = h))
          : (h = E[48])
        let ei = h
        E[49] !== J
          ? ((j = (0, s.jsx)(J, { className: "icon-sm text-secondary" })), (E[49] = J), (E[50] = j))
          : (j = E[50])
        let eo = j
        E[51] !== l
          ? ((y = (0, s.jsx)("span", { className: "block truncate", children: l })), (E[51] = l), (E[52] = y))
          : (y = E[52])
        let er = y,
          ec = null == ee
        ;(E[53] !== ee || E[54] !== M || E[55] !== X || E[56] !== N
          ? ((S = () => {
              null != ee && M(N, ee, X)
            }),
            (E[53] = ee),
            (E[54] = M),
            (E[55] = X),
            (E[56] = N),
            (E[57] = S))
          : (S = E[57]),
          E[58] === Symbol.for("react.memo_cache_sentinel")
            ? ((_ = (0, s.jsx)(f.I, { "aria-hidden": !1, asset: el.f })), (E[58] = _))
            : (_ = E[58]),
          E[59] !== e || E[60] !== ec || E[61] !== S
            ? ((W = (0, s.jsx)(p.$, {
                "aria-label": e,
                color: "secondary",
                disabled: ec,
                size: "toolbar",
                uniform: !0,
                onClick: S,
                children: _,
              })),
              (E[59] = e),
              (E[60] = ec),
              (E[61] = S),
              (E[62] = W))
            : (W = E[62]),
          E[63] !== e || E[64] !== W
            ? ((V = (0, s.jsx)(ea.m, { content: e, children: W })), (E[63] = e), (E[64] = W), (E[65] = V))
            : (V = E[65]))
        let em = V
        ;((v = l),
          (x = "listitem"),
          (o = I.t),
          (u =
            null == G
              ? (0, s.jsx)(P.ic, { control: em, description: t, icon: eo, label: er })
              : (0, s.jsx)(P.kG, {
                  actions: em,
                  ariaLabel: K,
                  description: t,
                  icon: eo,
                  label: er,
                  onClick: () => {
                    k(N, G, X)
                  },
                })),
          (g = i
            ? (0, s.jsx)(P.ic, {
                control: null,
                icon: (0, s.jsx)(ed.y, { className: "icon-xs" }),
                label: et,
                size: "compact",
              })
            : n
              ? (0, s.jsx)(P.ic, {
                  control: (0, s.jsx)(p.$, {
                    color: "secondary",
                    size: "toolbar",
                    onClick: () => {
                      $()
                    },
                    children: (0, s.jsx)(m.A, { ...b.y.retry }),
                  }),
                  label: (0, s.jsx)("span", { className: "text-danger", role: "alert", children: es }),
                  size: "compact",
                })
              : (0, s.jsxs)(s.Fragment, {
                  children: [
                    q.map((e) =>
                      (0, s.jsx)(
                        ej,
                        {
                          environment: e,
                          errorLabel: es,
                          onSelectEnvironment: () => {
                            k(N, e.configPath, X)
                          },
                        },
                        e.configPath,
                      ),
                    ),
                    Y.length > 0
                      ? (0, s.jsx)(en.H, {
                          content: Y.map((e) =>
                            (0, s.jsx)(
                              ej,
                              {
                                environment: e,
                                errorLabel: es,
                                sourceFolderName: (0, ef.Q0)(eb(e.configPath)),
                                onSelectEnvironment: () => {
                                  k(N, e.configPath, X)
                                },
                              },
                              e.configPath,
                            ),
                          ),
                          contentId: O,
                          expanded: B,
                          children: (0, s.jsx)(P.ic, {
                            control: (0, s.jsx)(p.$, {
                              "aria-controls": O,
                              "aria-expanded": B,
                              "aria-label": ei,
                              color: "ghost",
                              size: "icon",
                              uniform: !0,
                              onClick: () => {
                                H(!B)
                              },
                              children: (0, s.jsx)(Z.A, {
                                className: (0, Q.A)(
                                  "icon-2xs text-tertiary transition-transform",
                                  B ? "rotate-0" : "-rotate-90",
                                ),
                              }),
                            }),
                            label: (0, s.jsx)(m.A, {
                              id: "settings.localEnvironments.workspaceSelect.inherited",
                              defaultMessage: "Inherited environments ({count})",
                              description: "Accordion label for local environments inherited from parent folders",
                              values: { count: Y.length },
                            }),
                            size: "compact",
                          }),
                        })
                      : null,
                  ],
                })),
          (E[7] = F),
          (E[8] = z),
          (E[9] = R),
          (E[10] = L),
          (E[11] = T),
          (E[12] = O),
          (E[13] = C),
          (E[14] = M),
          (E[15] = k),
          (E[16] = X),
          (E[17] = $),
          (E[18] = A),
          (E[19] = B),
          (E[20] = N),
          (E[21] = o),
          (E[22] = u),
          (E[23] = g),
          (E[24] = v),
          (E[25] = x))
      } else ((o = E[21]), (u = E[22]), (g = E[23]), (v = E[24]), (x = E[25]))
      return (
        E[66] !== o || E[67] !== u || E[68] !== g
          ? ((j = (0, s.jsxs)(o, { children: [u, g] })), (E[66] = o), (E[67] = u), (E[68] = g), (E[69] = j))
          : (j = E[69]),
        E[70] !== v || E[71] !== x || E[72] !== j
          ? ((y = (0, s.jsx)("div", { "aria-label": v, role: x, children: j })),
            (E[70] = v),
            (E[71] = x),
            (E[72] = j),
            (E[73] = y))
          : (y = E[73]),
        y
      )
    }
    function ej(e) {
      let n,
        t,
        a,
        o,
        l,
        r,
        c = (0, i.c)(19),
        { environment: u, errorLabel: p, sourceFolderName: f, onSelectEnvironment: g } = e,
        v = (0, d.A)()
      c[0] !== u.configPath ? ((n = (0, ef.Q0)(u.configPath)), (c[0] = u.configPath), (c[1] = n)) : (n = c[1])
      let h = n,
        x = "success" === u.type && u.environment?.name != null && u.environment.name.length > 0,
        j = x ? u.environment.name : h,
        b = "error" === u.type,
        y = b || (x && h !== j) ? h : null,
        w = b ? h : j
      c[2] !== w || c[3] !== v || c[4] !== f
        ? ((t =
            null == f
              ? v.formatMessage(
                  {
                    id: "settings.localEnvironments.workspaceSelect.viewAction",
                    defaultMessage: "View {environmentName}",
                    description: "Action label to view a local environment",
                  },
                  { environmentName: w },
                )
              : v.formatMessage(
                  {
                    id: "settings.localEnvironments.workspaceSelect.viewInheritedAction",
                    defaultMessage: "View {environmentName} from {sourceFolderName}",
                    description: "Action label to view a local environment inherited from a parent folder",
                  },
                  { environmentName: w, sourceFolderName: f },
                )),
          (c[2] = w),
          (c[3] = v),
          (c[4] = f),
          (c[5] = t))
        : (t = c[5])
      let E = t
      c[6] !== h || c[7] !== y || c[8] !== f
        ? ((a =
            null == f
              ? y
              : (0, s.jsx)(m.A, {
                  id: "settings.localEnvironments.workspaceSelect.inheritedSource",
                  defaultMessage: "From {sourceFolderName} · {fileName}",
                  description: "Description identifying the source folder and file for an inherited local environment",
                  values: { fileName: h, sourceFolderName: f },
                })),
          (c[6] = h),
          (c[7] = y),
          (c[8] = f),
          (c[9] = a))
        : (a = c[9])
      let S = b ? "text-danger" : void 0,
        A = b ? p : j
      return (
        c[10] !== S || c[11] !== A
          ? ((o = (0, s.jsx)("span", { className: S, children: A })), (c[10] = S), (c[11] = A), (c[12] = o))
          : (o = c[12]),
        c[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, s.jsx)(em.bF, {
              className: "-rotate-90 text-tertiary",
              "aria-hidden": !1,
              asset16: eo.K,
              legacyIcon: Z.A,
              legacyClassName: "icon-2xs",
            })),
            (c[13] = l))
          : (l = c[13]),
        c[14] !== g || c[15] !== a || c[16] !== o || c[17] !== E
          ? ((r = (0, s.jsx)(P.kG, { ariaLabel: E, description: a, label: o, onClick: g, trailing: l })),
            (c[14] = g),
            (c[15] = a),
            (c[16] = o),
            (c[17] = E),
            (c[18] = r))
          : (r = c[18]),
        r
      )
    }
    function eb(e) {
      let n = (0, ef.Fd)(e),
        t = ec().posix.dirname(n),
        s = ec().posix.dirname(t)
      return "environments" !== ec().posix.basename(t) || ".codex" !== ec().posix.basename(s)
        ? n
        : ec().posix.dirname(s)
    }
    function ey(e) {
      let n,
        t,
        y,
        S,
        N,
        _,
        H,
        O,
        F,
        W,
        Q,
        U,
        Z,
        q,
        Y,
        G,
        J,
        K,
        ee,
        en,
        es,
        ei,
        ea,
        eo,
        el,
        er,
        ec = (0, i.c)(138),
        { settingsHostId: ed } = e,
        em = (0, l.gh)(A.u),
        eu = (0, z.Zj)("375130565"),
        ep = (0, d.A)(),
        [ef] = (0, u.ok)(),
        eh = (0, u.zy)(),
        ex = (0, u.Zp)(),
        ej = null != (0, u.RQ)(V.FO)
      ec[0] !== ej || ec[1] !== eh || ec[2] !== ef
        ? ((n = ej ? (0, V.pN)(ef, eh.state) : null), (ec[0] = ej), (ec[1] = eh), (ec[2] = ef), (ec[3] = n))
        : (n = ec[3])
      let eb = n,
        ey = eb?.hostId ?? ed,
        { error: eA, isFetching: eN, isLoading: eM, refetch: ek } = (0, l._U)(v.$B, r.Q2Y.LOCAL_PROJECTS),
        { error: eC, isFetching: eP, isLoading: e_, refetch: eI } = (0, l._U)(v.$B, r.Q2Y.REMOTE_PROJECTS),
        eT = (0, l.Ul)($.bh),
        eL = (0, k.j)(eT, ey),
        eR = eL.flatMap(eE),
        e$ = ey === R.fI ? eM : e_,
        ez = ey === R.fI ? eN : eP,
        eD = ey === R.fI ? eA : eC
      ec[4] !== eb?.workspaceRoot || ec[5] !== ef
        ? ((t = eb?.workspaceRoot ?? ef.get("workspaceRoot")), (ec[4] = eb?.workspaceRoot), (ec[5] = ef), (ec[6] = t))
        : (t = ec[6])
      let [eB, eH] = (0, c.useState)(t)
      if (ec[7] !== eb?.projectId || ec[8] !== ef) {
        let e = ef.get("projectId")
        ;((y = c.useState),
          (S = eb?.projectId ?? (null == e ? null : (0, r.Np8)(e))),
          (ec[7] = eb?.projectId),
          (ec[8] = ef),
          (ec[9] = y),
          (ec[10] = S))
      } else ((y = ec[9]), (S = ec[10]))
      let [eO, eX] = y(S)
      ec[11] !== eb?.configPath || ec[12] !== ef
        ? ((N = eb?.configPath ?? ef.get("configPath")), (ec[11] = eb?.configPath), (ec[12] = ef), (ec[13] = N))
        : (N = ec[13])
      let [eF, eW] = (0, c.useState)(N)
      ec[14] !== eb || ec[15] !== ef
        ? ((_ = null != eb || "edit" === ef.get("mode")), (ec[14] = eb), (ec[15] = ef), (ec[16] = _))
        : (_ = ec[16])
      let [eV, eQ] = (0, c.useState)(_),
        eU = (0, c.useId)(),
        [eZ, eq] = (0, c.useState)(!1),
        [eY, eG] = (0, c.useState)(!1),
        [eJ, eK] = (0, c.useState)(null)
      ;(0, L.iv)(eU, eV && (eZ || eY))
      let [e0, e1] = (0, c.useState)(0),
        e2 = eB ?? null,
        e3 = null != e2 && (null != eb || eR.includes(e2) || null != eF) ? e2 : null,
        e6 = null != e3 ? (eL.find((e) => e.projectId === eO || (null == eO && e.path === e3)) ?? null) : null,
        e5 = null == e3
      ec[17] !== em || ec[18] !== ey
        ? ((H = () => {
            ey !== R.fI ? (0, E.vd)({ hostId: ey }) : (0, E.T6)(em, { openInNewChat: !1 })
          }),
          (ec[17] = em),
          (ec[18] = ey),
          (ec[19] = H))
        : (H = ec[19])
      let e4 = H
      ec[20] !== ek || ec[21] !== eI || ec[22] !== ey
        ? ((O = () => {
            ey === R.fI ? ek() : eI()
          }),
          (ec[20] = ek),
          (ec[21] = eI),
          (ec[22] = ey),
          (ec[23] = O))
        : (O = ec[23])
      let e8 = O
      ec[24] !== eq || ec[25] !== eQ || ec[26] !== eW
        ? ((F = () => {
            ;(eq(!1), eX(null), eH(null), eW(null), eQ(!1))
          }),
          (ec[24] = eq),
          (ec[25] = eQ),
          (ec[26] = eW),
          (ec[27] = F))
        : (F = ec[27])
      let e7 = F
      ec[28] !== eb || ec[29] !== ex || ec[30] !== eq || ec[31] !== eQ
        ? ((W = () => {
            ;(eq(!1), null != eb) ? ex(eb.returnTo, { replace: !0 }) : eQ(!1)
          }),
          (ec[28] = eb),
          (ec[29] = ex),
          (ec[30] = eq),
          (ec[31] = eQ),
          (ec[32] = W))
        : (W = ec[32])
      let e9 = W
      ec[33] !== eZ || ec[34] !== eY || ec[35] !== eK
        ? ((Q = (e) => {
            if (!eY) {
              if (eZ) return void eK(() => e)
              e()
            }
          }),
          (ec[33] = eZ),
          (ec[34] = eY),
          (ec[35] = eK),
          (ec[36] = Q))
        : (Q = ec[36])
      let ne = Q
      ec[37] !== eQ || ec[38] !== eW
        ? ((U = (e, n, t) => {
            ;(eX(t ?? null), eH(e), eW(n), eQ(!1))
          }),
          (ec[37] = eQ),
          (ec[38] = eW),
          (ec[39] = U))
        : (U = ec[39])
      let nn = U
      ec[40] !== eQ || ec[41] !== eW
        ? ((Z = (e, n, t) => {
            ;(eX(t ?? null), eH(e), eW(n), eQ(!0))
          }),
          (ec[40] = eQ),
          (ec[41] = eW),
          (ec[42] = Z))
        : (Z = ec[42])
      let nt = Z,
        {
          data: ns,
          isLoading: ni,
          isFetching: na,
          error: no,
          refetch: nl,
        } = (0, l._U)(h.Ly, { hostId: ey, workspaceRoot: e3 }),
        nr = null != ns && !ni && !na && null == no
      ec[43] !== nr || ec[44] !== ns
        ? ((q = nr ? (0, D.Dz)(ns) : null), (ec[43] = nr), (ec[44] = ns), (ec[45] = q))
        : (q = ec[45])
      let nc = q,
        nd = null != eb && null == eb.configPath && nr && null != e3 ? (0, D.JT)(ns, e3) : null,
        nm = eb?.configPath ?? nd ?? (null == eb ? nc : null)
      eV && null == eF && null != nm && eW(nm)
      let nu = eF ?? nm,
        np = null != e3 && null != nu,
        nf = nu ?? ""
      ;(ec[46] !== ey || ec[47] !== nf
        ? ((Y = { configPath: nf, hostId: ey }), (ec[46] = ey), (ec[47] = nf), (ec[48] = Y))
        : (Y = ec[48]),
        ec[49] !== np ? ((G = { enabled: np }), (ec[49] = np), (ec[50] = G)) : (G = ec[50]))
      let { data: ng, isLoading: nv, error: nh, refetch: nx } = (0, l._U)(x.R, Y, G),
        nj = ng?.environment?.type === "success" ? ng.environment.environment : null,
        nb = ng?.environment?.type === "error",
        ny = null != nh,
        nw = null != no || null != nh
      ec[51] !== nx || ec[52] !== nl || ec[53] !== nu
        ? ((J = () => {
            null == nu ? nl() : Promise.all([nl(), nx()])
          }),
          (ec[51] = nx),
          (ec[52] = nl),
          (ec[53] = nu),
          (ec[54] = J))
        : (J = ec[54])
      let nE = J
      ec[55] !== nx || ec[56] !== nl || ec[57] !== eq
        ? ((K = async () => {
            nl()
            let e = await nx()
            null != e.data && null == e.error && (eq(!1), e1(ew))
          }),
          (ec[55] = nx),
          (ec[56] = nl),
          (ec[57] = eq),
          (ec[58] = K))
        : (K = ec[58])
      let nS = K
      ec[59] !== nx || ec[60] !== eQ || ec[61] !== eW
        ? ((ee = async () => {
            let e = await nx()
            e.isSuccess && (eW(e.data.configPath), eQ(!0))
          }),
          (ec[59] = nx),
          (ec[60] = eQ),
          (ec[61] = eW),
          (ec[62] = ee))
        : (ee = ec[62])
      let nA = ee,
        nN = ni || (na && null == nu) || (np && nv)
      if (ej && null == eb) {
        let e
        return (
          ec[63] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)(u.C5, { to: "/settings/local-environments", replace: !0 })), (ec[63] = e))
            : (e = ec[63]),
          e
        )
      }
      if (e5) {
        let e, n
        return (
          ec[64] !== eu
            ? ((e = eu ? (0, s.jsx)(B.x, { selectedTab: "environments" }) : null), (ec[64] = eu), (ec[65] = e))
            : (e = ec[65]),
          ec[66] === Symbol.for("react.memo_cache_sentinel") ? ((n = (0, s.jsx)(X, {})), (ec[66] = n)) : (n = ec[66]),
          (0, s.jsx)(eS, {
            stickyControls: e,
            subtitle: n,
            children: (0, s.jsx)(ev, {
              groups: eL,
              hasError: null != eD,
              hostId: ey,
              isLoading: e$ || (null != eD && ez),
              workspaceRoots: eR,
              onAddWorkspace: e4,
              onCreateEnvironment: nt,
              onRetry: e8,
              onSelectEnvironment: nn,
            }),
          })
        )
      }
      let nM = w(e3, e6)
      ec[67] !== eb || ec[68] !== e7 || ec[69] !== e9 || ec[70] !== eV || ec[71] !== ne || ec[72] !== nM
        ? ((en =
            null != eb
              ? (0, s.jsxs)(p.$, {
                  color: "ghost",
                  size: "toolbar",
                  onClick: () => ne(e9),
                  children: [
                    (0, s.jsx)(f.I, { "aria-hidden": !1, asset: a.z }),
                    (0, s.jsx)(m.A, {
                      id: "settings.localEnvironments.breadcrumb.back",
                      defaultMessage: "Back",
                      description: "Button label to return from local environment creation",
                    }),
                  ],
                })
              : (0, s.jsx)(g.V, {
                  ancestors: [
                    {
                      id: "environments",
                      label: (0, s.jsx)(m.A, {
                        id: "settings.localEnvironments.breadcrumb.root",
                        defaultMessage: "Environments",
                        description: "Breadcrumb label for the local environments page",
                      }),
                      onClick: () => ne(e7),
                    },
                    ...(eV ? [{ id: "workspace", label: nM, onClick: () => ne(e9) }] : []),
                  ],
                  current: eV
                    ? (0, s.jsx)(m.A, {
                        id: "settings.localEnvironments.breadcrumb.edit",
                        defaultMessage: "edit",
                        description: "Breadcrumb label for local environment edit mode",
                      })
                    : nM,
                })),
          (ec[67] = eb),
          (ec[68] = e7),
          (ec[69] = e9),
          (ec[70] = eV),
          (ec[71] = ne),
          (ec[72] = nM),
          (ec[73] = en))
        : (en = ec[73])
      let nk = en
      if (nN) {
        let e, n
        return (
          ec[74] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)(C.j, {
                children: (0, s.jsx)(m.A, {
                  id: "settings.localEnvironments.loading.body",
                  defaultMessage: "Fetching your project configuration…",
                  description: "Loading state body for local environments settings",
                }),
              })),
              (ec[74] = e))
            : (e = ec[74]),
          ec[75] !== nk
            ? ((n = (0, s.jsx)(eS, { backSlot: nk, children: e })), (ec[75] = nk), (ec[76] = n))
            : (n = ec[76]),
          n
        )
      }
      if (!ng || null == e3) {
        let e, n, t, i, a
        return (
          ec[77] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)(M.X.Header, {
                title: (0, s.jsx)(m.A, {
                  id: "settings.localEnvironments.unavailable.title",
                  defaultMessage: "Local environments unavailable",
                  description: "Title for missing local environment config state",
                }),
              })),
              (ec[77] = e))
            : (e = ec[77]),
          ec[78] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, s.jsx)(m.A, {
                id: "settings.localEnvironments.unavailable.body",
                defaultMessage: "We could not load local environment settings for this project",
                description: "Body text for missing local environment config state",
              })),
              (ec[78] = n))
            : (n = ec[78]),
          ec[79] !== nE || ec[80] !== nw
            ? ((t = nw
                ? (0, s.jsx)(p.$, {
                    color: "secondary",
                    size: "toolbar",
                    type: "button",
                    onClick: nE,
                    children: (0, s.jsx)(m.A, { ...b.y.retry }),
                  })
                : null),
              (ec[79] = nE),
              (ec[80] = nw),
              (ec[81] = t))
            : (t = ec[81]),
          ec[82] !== t
            ? ((i = (0, s.jsxs)(M.X, {
                children: [
                  e,
                  (0, s.jsx)(M.X.Content, {
                    children: (0, s.jsx)(I.t, { children: (0, s.jsx)(P.ic, { label: n, control: t }) }),
                  }),
                ],
              })),
              (ec[82] = t),
              (ec[83] = i))
            : (i = ec[83]),
          ec[84] !== nk || ec[85] !== i
            ? ((a = (0, s.jsx)(eS, { backSlot: nk, children: i })), (ec[84] = nk), (ec[85] = i), (ec[86] = a))
            : (a = ec[86]),
          a
        )
      }
      ec[87] !== ng.configPath || ec[88] !== ng.exists || ec[89] !== nA || ec[90] !== eQ || ec[91] !== eW
        ? ((es = () => {
            ng.exists ? nA() : (eW(ng.configPath), eQ(!0))
          }),
          (ec[87] = ng.configPath),
          (ec[88] = ng.exists),
          (ec[89] = nA),
          (ec[90] = eQ),
          (ec[91] = eW),
          (ec[92] = es))
        : (es = ec[92])
      let nC = es
      if (eV) {
        let e, n, t, i, a
        ec[93] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(m.A, {
              id: "settings.localEnvironments.edit.title",
              defaultMessage: "Edit local environment",
              description: "Title for the local environment editor",
            })),
            (ec[93] = e))
          : (e = ec[93])
        let o = `${ey}:${ng.configPath}:${e0}`
        return (
          ec[94] !== ng.configPath ||
          ec[95] !== ng.revision ||
          ec[96] !== nS ||
          ec[97] !== e9 ||
          ec[98] !== nE ||
          ec[99] !== nb ||
          ec[100] !== ny ||
          ec[101] !== nj ||
          ec[102] !== e3 ||
          ec[103] !== ey ||
          ec[104] !== e6 ||
          ec[105] !== eq ||
          ec[106] !== eG ||
          ec[107] !== o
            ? ((n = (0, s.jsx)(
                j.I,
                {
                  hostId: ey,
                  workspaceRoot: e3,
                  resolvedProject: e6,
                  configPath: ng.configPath,
                  expectedRevision: ng.revision,
                  initialEnvironment: nj,
                  hasParseError: nb,
                  hasReadError: ny,
                  onDirtyChange: eq,
                  onDiscardConflict: nS,
                  onRetryRead: nE,
                  onSavingChange: eG,
                  onSaved: e9,
                },
                o,
              )),
              (ec[94] = ng.configPath),
              (ec[95] = ng.revision),
              (ec[96] = nS),
              (ec[97] = e9),
              (ec[98] = nE),
              (ec[99] = nb),
              (ec[100] = ny),
              (ec[101] = nj),
              (ec[102] = e3),
              (ec[103] = ey),
              (ec[104] = e6),
              (ec[105] = eq),
              (ec[106] = eG),
              (ec[107] = o),
              (ec[108] = n))
            : (n = ec[108]),
          ec[109] !== eK ? ((t = () => eK(null)), (ec[109] = eK), (ec[110] = t)) : (t = ec[110]),
          ec[111] !== eJ || ec[112] !== t
            ? ((i = (0, s.jsx)(T.W, { pendingNavigation: eJ, onClearPendingNavigation: t })),
              (ec[111] = eJ),
              (ec[112] = t),
              (ec[113] = i))
            : (i = ec[113]),
          ec[114] !== nk || ec[115] !== n || ec[116] !== i
            ? ((a = (0, s.jsxs)(eS, { backSlot: nk, title: e, children: [n, i] })),
              (ec[114] = nk),
              (ec[115] = n),
              (ec[116] = i),
              (ec[117] = a))
            : (a = ec[117]),
          a
        )
      }
      ec[118] !== ng.exists || ec[119] !== ep
        ? ((ei = ng.exists
            ? ep.formatMessage({
                id: "settings.localEnvironments.environment.editLabel",
                defaultMessage: "Edit local environment",
                description: "Accessible label for editing a local environment",
              })
            : void 0),
          (ec[118] = ng.exists),
          (ec[119] = ep),
          (ec[120] = ei))
        : (ei = ec[120])
      let nP = ng.exists ? "secondary" : "primary"
      ;(ec[121] !== ng.exists
        ? ((ea = ng.exists
            ? (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(f.I, { "aria-hidden": !1, asset: o.h }),
                  (0, s.jsx)(m.A, { ...eg.editEnvironment }),
                ],
              })
            : (0, s.jsx)(m.A, { ...eg.createEnvironment })),
          (ec[121] = ng.exists),
          (ec[122] = ea))
        : (ea = ec[122]),
        ec[123] !== nC || ec[124] !== ei || ec[125] !== nP || ec[126] !== ea
          ? ((eo = (0, s.jsx)(p.$, { "aria-label": ei, color: nP, size: "toolbar", onClick: nC, children: ea })),
            (ec[123] = nC),
            (ec[124] = ei),
            (ec[125] = nP),
            (ec[126] = ea),
            (ec[127] = eo))
          : (eo = ec[127]))
      let n_ = nj?.name
      return (
        ec[128] !== ng.exists || ec[129] !== nb || ec[130] !== ny || ec[131] !== nj
          ? ((el = (0, s.jsx)(et, {
              configExists: ng.exists,
              initialEnvironment: nj,
              hasParseError: nb,
              hasReadError: ny,
            })),
            (ec[128] = ng.exists),
            (ec[129] = nb),
            (ec[130] = ny),
            (ec[131] = nj),
            (ec[132] = el))
          : (el = ec[132]),
        ec[133] !== nk || ec[134] !== eo || ec[135] !== n_ || ec[136] !== el
          ? ((er = (0, s.jsx)(eS, { action: eo, backSlot: nk, title: n_, children: el })),
            (ec[133] = nk),
            (ec[134] = eo),
            (ec[135] = n_),
            (ec[136] = el),
            (ec[137] = er))
          : (er = ec[137]),
        er
      )
    }
    function ew(e) {
      return e + 1
    }
    function eE(e) {
      return "local" === e.projectKind ? (0, S.l_)(e) : [e.path]
    }
    function eS(e) {
      let n,
        t,
        a = (0, i.c)(10),
        { action: o, backSlot: l, stickyControls: r, subtitle: c, title: d, children: m } = e,
        u = (0, z.Zj)("375130565")
      return (
        a[0] !== u || a[1] !== d
          ? ((n = void 0 === d ? (0, s.jsx)(_.s, { slug: u ? "worktrees" : "local-environments" }) : d),
            (a[0] = u),
            (a[1] = d),
            (a[2] = n))
          : (n = a[2]),
        a[3] !== o || a[4] !== l || a[5] !== m || a[6] !== r || a[7] !== c || a[8] !== n
          ? ((t = (0, s.jsx)(N.P, { action: o, title: n, subtitle: c, backSlot: l, stickyControls: r, children: m })),
            (a[3] = o),
            (a[4] = l),
            (a[5] = m),
            (a[6] = r),
            (a[7] = c),
            (a[8] = n),
            (a[9] = t))
          : (t = a[9]),
        t
      )
    }
  },
  qUPv(e, n, t) {
    var s = t("ABep"),
      i = t("QosV"),
      a = t("oyxz"),
      o = t("Sm6l"),
      l = t("JNtf"),
      r = t("mUDD")
    t.d(
      n,
      {},
      {
        W: function (e) {
          let n,
            t,
            c,
            d,
            m,
            u,
            p,
            f,
            g,
            v,
            h = (0, i.c)(20),
            { pendingNavigation: x, onClearPendingNavigation: j } = e,
            b = null != x
          return (
            h[0] !== j
              ? ((n = (e) => {
                  e || j()
                }),
                (h[0] = j),
                (h[1] = n))
              : (n = h[1]),
            h[2] !== j || h[3] !== x
              ? ((t = (e) => {
                  ;(e.preventDefault(), j(), x?.())
                }),
                (h[2] = j),
                (h[3] = x),
                (h[4] = t))
              : (t = h[4]),
            h[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((c = (0, s.jsx)(l.L3, {
                  children: (0, s.jsx)(a.A, {
                    id: "settings.unsavedChanges.discardTitle",
                    defaultMessage: "Discard changes?",
                    description: "Title for the confirmation dialog shown before leaving Settings with unsaved changes",
                  }),
                })),
                (h[5] = c))
              : (c = h[5]),
            h[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((d = (0, s.jsx)(r.OO, {
                  children: (0, s.jsx)(r.c7, {
                    title: c,
                    subtitle: (0, s.jsx)(l.rr, {
                      children: (0, s.jsx)(a.A, {
                        id: "settings.unsavedChanges.discardDescription",
                        defaultMessage: "You have unsaved changes. If you leave now, your changes will be lost.",
                        description:
                          "Description for the confirmation dialog shown before leaving Settings with unsaved changes",
                      }),
                    }),
                  }),
                })),
                (h[6] = d))
              : (d = h[6]),
            h[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((m = (0, s.jsx)(a.A, {
                  id: "settings.unsavedChanges.keepEditing",
                  defaultMessage: "Keep editing",
                  description: "Button label for returning to Settings instead of discarding unsaved changes",
                })),
                (h[7] = m))
              : (m = h[7]),
            h[8] !== j
              ? ((u = (0, s.jsx)(o.$, { color: "secondary", type: "button", onClick: j, children: m })),
                (h[8] = j),
                (h[9] = u))
              : (u = h[9]),
            h[10] === Symbol.for("react.memo_cache_sentinel")
              ? ((p = (0, s.jsx)(o.$, {
                  color: "danger",
                  type: "submit",
                  children: (0, s.jsx)(a.A, {
                    id: "settings.unsavedChanges.discard",
                    defaultMessage: "Discard changes",
                    description: "Button label for discarding unsaved Settings changes",
                  }),
                })),
                (h[10] = p))
              : (p = h[10]),
            h[11] !== u
              ? ((f = (0, s.jsx)(r.OO, { children: (0, s.jsxs)(r.Es, { children: [u, p] }) })),
                (h[11] = u),
                (h[12] = f))
              : (f = h[12]),
            h[13] !== t || h[14] !== f
              ? ((g = (0, s.jsxs)(r.R4, { as: "form", onSubmit: t, children: [d, f] })),
                (h[13] = t),
                (h[14] = f),
                (h[15] = g))
              : (g = h[15]),
            h[16] !== b || h[17] !== g || h[18] !== n
              ? ((v = (0, s.jsx)(l.lG, {
                  open: b,
                  showDialogClose: !1,
                  size: "compact",
                  onOpenChange: n,
                  children: g,
                })),
                (h[16] = b),
                (h[17] = g),
                (h[18] = n),
                (h[19] = v))
              : (v = h[19]),
            v
          )
        },
      },
    )
  },
}
//# sourceMappingURL=754281.8f03aad724.js.map
