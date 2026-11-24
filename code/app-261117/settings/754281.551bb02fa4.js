export const __rspack_esm_ids = [754281]
export const __webpack_modules__ = {
  EIFV(e, t, n) {
    var s = n("ABep")
    ;(n("zd8w"),
      (t.A = (e) =>
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
  OXR4(e, t, n) {
    var s = n("ABep"),
      a = n("QosV"),
      l = n("on57"),
      i = n("GCsp"),
      r = n("aBXq")
    n.d(
      t,
      {},
      {
        J: function (e) {
          let t,
            n,
            o,
            c,
            d,
            m,
            u,
            p,
            f = (0, a.c)(29),
            {
              actions: g,
              children: v,
              collapsible: x,
              defaultOpen: h,
              disableContentInlineInset: j,
              count: b,
              id: y,
              onOpenChange: S,
              showDivider: E,
              title: A,
            } = e,
            w = void 0 === h || h,
            M = void 0 === E || E
          f[0] !== g || f[1] !== x
            ? ((t =
                null == g
                  ? null
                  : (0, s.jsx)("span", {
                      className: "flex items-center gap-2",
                      role: "presentation",
                      onClick: (e) => {
                        x && (e.preventDefault(), e.stopPropagation())
                      },
                      onKeyDown: (e) => {
                        x && e.stopPropagation()
                      },
                      children: g,
                    })),
              (f[0] = g),
              (f[1] = x),
              (f[2] = t))
            : (t = f[2])
          let C = t
          ;(f[3] !== x
            ? ((n = x
                ? (0, s.jsx)(i.A, {
                    className:
                      "icon-2xs -rotate-90 transition-transform group-open/section:rotate-0 motion-reduce:transition-none",
                  })
                : null),
              (f[3] = x),
              (f[4] = n))
            : (n = f[4]),
            f[5] !== n || f[6] !== A
              ? ((o = (0, s.jsxs)(s.Fragment, { children: [A, n] })), (f[5] = n), (f[6] = A), (f[7] = o))
              : (o = f[7]))
          let N = o,
            k = x ? "details" : "section"
          f[8] !== x || f[9] !== w || f[10] !== S
            ? ((c = x
                ? {
                    open: w,
                    onToggle: (e) => {
                      S?.(e.currentTarget.open)
                    },
                  }
                : {}),
              (f[8] = x),
              (f[9] = w),
              (f[10] = S),
              (f[11] = c))
            : (c = f[11])
          let P = c,
            _ = x ? "summary" : "div"
          f[12] !== C || f[13] !== b || f[14] !== N || f[15] !== M || f[16] !== _
            ? ((d = (0, s.jsx)(r.u, { action: C, as: _, count: b, showDivider: M, title: N })),
              (f[12] = C),
              (f[13] = b),
              (f[14] = N),
              (f[15] = M),
              (f[16] = _),
              (f[17] = d))
            : (d = f[17])
          let I = !(void 0 !== j && j) && "px-[var(--detail-page-inline-inset,0px)]"
          return (
            f[18] !== I ? ((m = (0, l.A)("flex flex-col gap-1", I)), (f[18] = I), (f[19] = m)) : (m = f[19]),
            f[20] !== v || f[21] !== m
              ? ((u = (0, s.jsx)("div", { className: m, children: v })), (f[20] = v), (f[21] = m), (f[22] = u))
              : (u = f[22]),
            f[23] !== k || f[24] !== y || f[25] !== P || f[26] !== u || f[27] !== d
              ? ((p = (0, s.jsxs)(k, {
                  ...P,
                  id: y,
                  className:
                    "group/section flex flex-col gap-4 [--sectioned-page-leading-inset:var(--detail-page-inline-inset,0px)]",
                  children: [d, u],
                })),
                (f[23] = k),
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
  aBXq(e, t, n) {
    var s = n("ABep"),
      a = n("QosV"),
      l = n("on57")
    n.d(
      t,
      {},
      {
        u: function (e) {
          let t,
            n,
            i,
            r,
            o,
            c,
            d,
            m = (0, a.c)(24),
            { action: u, as: p, count: f, size: g, showDivider: v, sticky: x, title: h } = e,
            j = void 0 === p ? "div" : p,
            b = void 0 === g ? "default" : g,
            y = "summary" === j && "cursor-interaction list-none marker:hidden",
            S =
              x &&
              "relative sticky top-0 z-10 bg-surface after:pointer-events-none after:absolute after:-inset-x-3 after:top-full after:h-2 after:bg-surface after:content-['']",
            E = (void 0 === v || v) && "border-b border-subtle"
          m[0] !== y || m[1] !== S || m[2] !== E
            ? ((t = (0, l.A)(
                "flex items-center justify-between gap-3 pe-0.5 pb-2 text-default [padding-inline-start:var(--sectioned-page-leading-inset,0.5rem)]",
                y,
                S,
                E,
              )),
              (m[0] = y),
              (m[1] = S),
              (m[2] = E),
              (m[3] = t))
            : (t = m[3])
          let A = t
          ;(m[4] !== f || m[5] !== b
            ? ((n =
                null == f
                  ? null
                  : (0, s.jsx)("span", {
                      className: (0, l.A)("text-tertiary", "compact" === b && "text-sm"),
                      children: f,
                    })),
              (m[4] = f),
              (m[5] = b),
              (m[6] = n))
            : (n = m[6]),
            m[7] !== n || m[8] !== h
              ? ((i = (0, s.jsxs)(s.Fragment, { children: [h, n] })), (m[7] = n), (m[8] = h), (m[9] = i))
              : (i = m[9]))
          let w = i,
            M = "summary" === j ? "span" : "h2",
            C = "summary" === j ? "span" : "div",
            N = "compact" === b ? "text-base" : "text-lg"
          return (
            m[10] !== N
              ? ((r = (0, l.A)("flex min-h-7 items-center gap-1.5 leading-6 font-medium", N)), (m[10] = N), (m[11] = r))
              : (r = m[11]),
            m[12] !== M || m[13] !== w || m[14] !== r
              ? ((o = (0, s.jsx)(M, { className: r, children: w })), (m[12] = M), (m[13] = w), (m[14] = r), (m[15] = o))
              : (o = m[15]),
            m[16] !== C || m[17] !== u
              ? ((c = null == u ? null : (0, s.jsx)(C, { className: "shrink-0", children: u })),
                (m[16] = C),
                (m[17] = u),
                (m[18] = c))
              : (c = m[18]),
            m[19] !== j || m[20] !== A || m[21] !== o || m[22] !== c
              ? ((d = (0, s.jsxs)(j, { className: A, "data-slot": "section-header", children: [o, c] })),
                (m[19] = j),
                (m[20] = A),
                (m[21] = o),
                (m[22] = c),
                (m[23] = d))
              : (d = m[23]),
            d
          )
        },
      },
    )
  },
  UtcH(e, t, n) {
    var s = n("ABep"),
      a = n("QosV"),
      l = n("yX0s"),
      i = n("on57"),
      r = n("zd8w"),
      o = n("Wf1j"),
      c = n("HOLv"),
      d = n("Sm6l")
    n.d(
      t,
      {},
      {
        V: function (e) {
          let t,
            n,
            m,
            u,
            p,
            f = (0, a.c)(17),
            { ancestors: g, current: v, textSm: x } = e,
            h = (0, o.A)()
          f[0] !== h
            ? ((t = h.formatMessage({ id: "toolbarBreadcrumb.label", defaultMessage: "Breadcrumb" })),
              (f[0] = h),
              (f[1] = t))
            : (t = f[1])
          let j = x ? "text-sm" : "text-base"
          if (
            (f[2] !== j
              ? ((n = (0, i.$)("flex min-w-0 items-center gap-1 text-codex-description", j)), (f[2] = j), (f[3] = n))
              : (n = f[3]),
            f[4] !== g || f[5] !== x)
          ) {
            let e
            ;(f[7] !== x
              ? ((e = (e, t) => {
                  let { id: n, ...a } = e,
                    o =
                      "content" in a
                        ? a.content
                        : (0, s.jsx)("span", { className: "min-w-0 truncate", children: a.label }),
                    m = o
                  if (!("content" in a)) {
                    let { label: e, ...t } = a,
                      n = { className: (0, i.$)("min-w-0", x && "text-sm"), color: "ghost", size: "toolbar" }
                    m =
                      null != t.to
                        ? (0, s.jsx)(d.z, { ...t, ...n, children: o })
                        : (0, s.jsx)(d.$, { ...n, onClick: t.onClick, children: o })
                  }
                  return (0, s.jsxs)(
                    r.Fragment,
                    { children: [t > 0 ? (0, s.jsx)(c.I, { className: "shrink-0", asset: l.q }) : null, m] },
                    n,
                  )
                }),
                (f[7] = x),
                (f[8] = e))
              : (e = f[8]),
              (m = g.map(e)),
              (f[4] = g),
              (f[5] = x),
              (f[6] = m))
          } else m = f[6]
          return (
            f[9] !== g.length || f[10] !== v
              ? ((u =
                  null != v
                    ? (0, s.jsxs)(s.Fragment, {
                        children: [
                          g.length > 0 ? (0, s.jsx)(c.I, { className: "shrink-0", asset: l.q }) : null,
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
            f[12] !== t || f[13] !== n || f[14] !== m || f[15] !== u
              ? ((p = (0, s.jsxs)("nav", { "aria-label": t, className: n, children: [m, u] })),
                (f[12] = t),
                (f[13] = n),
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
  KRgb(e, t, n) {
    var s = n("Qgfj")
    let a = [
      {
        value: "tool",
        message: (0, s.zR)({ id: "settings.localEnvironments.actions.icon.tool", defaultMessage: "Tool" }),
      },
      {
        value: "run",
        message: (0, s.zR)({ id: "settings.localEnvironments.actions.icon.run", defaultMessage: "Run" }),
      },
      {
        value: "debug",
        message: (0, s.zR)({ id: "settings.localEnvironments.actions.icon.debug", defaultMessage: "Debug" }),
      },
      {
        value: "test",
        message: (0, s.zR)({ id: "settings.localEnvironments.actions.icon.test", defaultMessage: "Test" }),
      },
    ]
    n.d(t, {}, { I: a })
  },
  zXOI(e, t, n) {
    var s = n("ABep"),
      a = n("QosV"),
      l = n("Yt87"),
      i = n("cH5S"),
      r = n("ZOYk"),
      o = n("I5kk"),
      c = n("VgQV"),
      d = n("sAXU"),
      m = n("zlDi"),
      u = n("kjko"),
      p = n("HOLv")
    let f = {
      tool: { 16: r.T, 20: o.w },
      run: { 16: m.k, 20: u.d },
      debug: { 16: c.c, 20: d.b },
      test: { 16: l.L, 20: i.o },
    }
    n.d(
      t,
      {},
      {
        M: function (e) {
          let t,
            n = (0, a.c)(3),
            { className: l, icon: i, size: r } = e,
            o = f[i][void 0 === r ? 20 : r]
          return (
            n[0] !== l || n[1] !== o
              ? ((t = (0, s.jsx)(p.I, { className: l, "aria-hidden": !1, asset: o })),
                (n[0] = l),
                (n[1] = o),
                (n[2] = t))
              : (t = n[2]),
            t
          )
        },
      },
    )
  },
  tNgt(e, t, n) {
    var s = n("DBCl")
    let a = /[\x00-\x08\x0b-\x1f\x7f]/,
      l = `cd "$CODEX_WORKTREE_PATH"
pip install -r requirements.txt
npm install
./run/setup.sh`,
      i = `docker compose down --remove-orphans
rm -rf .cache/tmp`,
      r = `python -m pip install -r requirements.txt
pnpm install`
    function o(e) {
      return { darwin: e?.darwin?.script ?? "", linux: e?.linux?.script ?? "", win32: e?.win32?.script ?? "" }
    }
    function c(e, t, n, a) {
      let l = s.jtP.flatMap((e) => {
        let t = a[e]
        return null == t || 0 === t.length ? [] : [{ platform: e, script: t }]
      })
      if (
        (("setup" === t || n.length > 0 || l.length > 0) && (e.push(""), e.push(`[${t}]`), e.push(`script = ${d(n)}`)),
        0 !== l.length)
      )
        for (let [n, s] of (e.push(""), l.entries()))
          (e.push(`[${t}.${s.platform}]`), e.push(`script = ${d(s.script)}`), n < l.length - 1 && e.push(""))
    }
    function d(e) {
      if (e.includes("\n") && !a.test(e)) {
        if (!e.includes("'''"))
          return `'''
${e}'''`
        let t = e.replace(/\\/g, "\\\\").replace(/"/g, '\\"')
        return `"""
${t}"""`
      }
      return JSON.stringify(e).replaceAll("", "\\u007f")
    }
    n.d(
      t,
      {},
      {
        GU: function ({
          version: e,
          name: t,
          setupScript: n,
          setupPlatformScripts: s,
          cleanupScript: a,
          cleanupPlatformScripts: l,
          actions: i,
        }) {
          let r = i.flatMap((e) => {
              let t = e.name.trim()
              return 0 === t.length || 0 === e.command.trim().length ? [] : [{ ...e, name: t }]
            }),
            o = []
          for (let i of (o.push("# THIS IS AUTOGENERATED. DO NOT EDIT MANUALLY"),
          o.push(`version = ${e}`),
          o.push(`name = ${d(t.trim())}`),
          c(o, "setup", n, s),
          c(o, "cleanup", a, l),
          r.length > 0 && o.push(""),
          r))
            (o.push("[[actions]]"),
              o.push(`name = ${d(i.name)}`),
              i.icon && o.push(`icon = ${d(i.icon)}`),
              o.push(`command = ${d(i.command)}`),
              i.platform && o.push(`platform = ${d(i.platform)}`),
              o.push(""))
          return `${o.join("\n").trimEnd()}
`
        },
        Ub: function () {
          return { id: crypto.randomUUID(), name: "", icon: "tool", command: "", platform: null }
        },
        XB: function (e, t = "default") {
          return "action" === e
            ? "npm run dev"
            : "win32" === t
              ? "setup" === e
                ? r
                : "docker compose down --remove-orphans"
              : "setup" === e
                ? l
                : i
        },
        YP: function (e) {
          return "defaultName" in e
            ? {
                actions: [],
                cleanupPlatformScripts: o(null),
                cleanupScript: "",
                name: e.defaultName,
                setupPlatformScripts: o(null),
                setupScript: "",
              }
            : {
                actions: (e.environment.actions ?? []).map((e) => ({
                  ...e,
                  id: crypto.randomUUID(),
                  platform: e.platform ?? null,
                })),
                cleanupPlatformScripts: o(e.environment.cleanup),
                cleanupScript: e.environment.cleanup?.script ?? "",
                name: e.environment.name,
                setupPlatformScripts: o(e.environment.setup),
                setupScript: e.environment.setup.script,
              }
        },
        Zh: function (e, t) {
          return null == t
            ? null
            : (("darwin" === t || "linux" === t || "win32" === t) && e.setupPlatformScripts[t]) || e.setupScript
        },
        ls: function (e, t) {
          return {
            incompleteActionIds: t.flatMap((e) =>
              e.name.trim().length > 0 == e.command.trim().length > 0 ? [] : [e.id],
            ),
            missingName: 0 === e.trim().length,
          }
        },
      },
    )
  },
  O8dD(e, t, n) {
    n.d(t, { I: () => U })
    var s = n("ABep"),
      a = n("QosV"),
      l = n("slpy"),
      i = n("wH14"),
      r = n("xSOA"),
      o = n("SZCv"),
      c = n.n(o),
      d = n("qmMi"),
      m = n("DBCl"),
      u = n("zd8w"),
      p = n("Wf1j"),
      f = n("oyxz"),
      g = n("Sm6l")
    n("la9L")
    var v = n("OXR4"),
      x = n("zLIa"),
      h = n("SGsN"),
      j = n("OReh"),
      b = n("cIfC"),
      y = n("MI1z"),
      S = n("C4bN"),
      E = n("nn0H"),
      A = n("gMec"),
      w = n("bqtn"),
      M = n("HOLv"),
      C = n("evwP"),
      N = n("zXOI"),
      k = n("KRgb"),
      P = n("tNgt"),
      _ = n("Tr6k"),
      I = n("gTr2"),
      L = n("BSnr"),
      $ = n("ZEx5")
    function R(e) {
      let t,
        n,
        i,
        r,
        o,
        c,
        d,
        m,
        u = (0, a.c)(33),
        { actions: v, dropdownDisabled: h, incompleteActionIds: j, onChange: b } = e,
        y = (0, p.A)()
      if (u[0] !== v || u[1] !== h || u[2] !== j || u[3] !== y || u[4] !== b) {
        let e, a, d, m, p
        u[11] !== y
          ? ((e = (e) => ({
              label: y.formatMessage(e.message),
              value: e.value,
              icon: (0, s.jsx)(N.M, { icon: e.value }),
            })),
            (u[11] = y),
            (u[12] = e))
          : (e = u[12])
        let S = k.I.map(e)
        u[13] !== v || u[14] !== b
          ? ((a = (e, t) => {
              b(v.map((n) => (n.id !== e ? n : { ...n, ...t })))
            }),
            (u[13] = v),
            (u[14] = b),
            (u[15] = a))
          : (a = u[15])
        let E = a
        ;((n = L.X),
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
            ? ((c = (0, s.jsx)(L.X.Header, {
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
          (t = L.X.Content),
          (i = "gap-1"),
          u[23] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = (0, s.jsx)("div", {
                className: "text-sm text-secondary",
                children: (0, s.jsx)(f.A, { ..._.n.actionsDescription }),
              })),
              (u[23] = r))
            : (r = u[23]),
          (o =
            0 === v.length
              ? (0, s.jsx)($.t, {
                  children: (0, s.jsx)(C.W, {
                    layout: "settings-row",
                    children: (0, s.jsx)(f.A, { ..._.n.actionsEmpty }),
                  }),
                })
              : (0, s.jsx)("div", {
                  className: "flex flex-col gap-3",
                  children: v.map((e) => {
                    let t = S.find((t) => t.value === (e.icon ?? "tool")) ?? S[0],
                      n = j.includes(e.id),
                      a = n && 0 === e.name.trim().length,
                      i = n && 0 === e.command.trim().length,
                      r = `local-env-action-name-error-${e.id}`,
                      o = `local-env-action-command-error-${e.id}`
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
                                  (0, s.jsx)(w.Ab, {
                                    align: "start",
                                    contentWidth: "icon",
                                    disabled: h,
                                    triggerButton: (0, s.jsx)(g.$, {
                                      id: `local-env-action-icon-${e.id}`,
                                      color: "secondary",
                                      uniform: !0,
                                      size: "toolbar",
                                      type: "button",
                                      "aria-label": t.label,
                                      children: t.icon,
                                    }),
                                    children: (0, s.jsx)(w.ms.RadioGroup, {
                                      value: t.value,
                                      children: S.map((t) =>
                                        (0, s.jsx)(
                                          w.ms.RadioItem,
                                          {
                                            value: t.value,
                                            onSelect: () => {
                                              E(e.id, { icon: t.value })
                                            },
                                            children: (0, s.jsxs)("span", {
                                              className: "flex items-center gap-2",
                                              children: [t.icon, (0, s.jsx)("span", { children: t.label })],
                                            }),
                                          },
                                          t.value,
                                        ),
                                      ),
                                    }),
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "flex-1",
                                    children: (0, s.jsx)(x.pd, {
                                      id: `local-env-action-name-${e.id}`,
                                      value: e.name,
                                      "aria-describedby": a ? r : void 0,
                                      "aria-invalid": a,
                                      onChange: (t) => {
                                        E(e.id, { name: t.target.value })
                                      },
                                    }),
                                  }),
                                ],
                              }),
                              a
                                ? (0, s.jsx)("div", {
                                    id: r,
                                    className: "text-xs text-danger",
                                    children: (0, s.jsx)(f.A, {
                                      id: "settings.localEnvironments.actions.item.nameRequired",
                                      defaultMessage: "Enter an action name",
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
                              (0, s.jsx)(x.TM, {
                                variant: "code",
                                id: `local-env-action-command-${e.id}`,
                                value: e.command,
                                placeholder: (0, P.XB)("action"),
                                rows: 4,
                                "aria-describedby": i ? o : void 0,
                                "aria-invalid": i,
                                onChange: (t) => {
                                  E(e.id, { command: t.target.value })
                                },
                              }),
                              i
                                ? (0, s.jsx)("div", {
                                    id: o,
                                    className: "text-xs text-danger",
                                    children: (0, s.jsx)(f.A, {
                                      id: "settings.localEnvironments.actions.item.commandRequired",
                                      defaultMessage: "Enter an action command",
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
                                    onSelect: (t) => {
                                      E(e.id, { platform: "all" === t ? null : t })
                                    },
                                    ariaLabel: y.formatMessage({
                                      id: "settings.localEnvironments.actions.item.platforms.selector",
                                      defaultMessage: "Action platform",
                                    }),
                                  }),
                                ],
                              }),
                              (0, s.jsx)("div", {
                                className: "flex justify-end sm:justify-center",
                                children: (0, s.jsx)(l.m, {
                                  content: (0, s.jsx)(f.A, {
                                    id: "settings.localEnvironments.actions.item.tooltip.delete",
                                    defaultMessage: "Delete",
                                  }),
                                  children: (0, s.jsx)(g.$, {
                                    color: "ghost",
                                    uniform: !0,
                                    size: "toolbar",
                                    type: "button",
                                    "aria-label": y.formatMessage({
                                      id: "settings.localEnvironments.actions.item.button.delete",
                                      defaultMessage: "Delete",
                                    }),
                                    onClick: () => {
                                      b(v.filter((t) => t.id !== e.id))
                                    },
                                    children: (0, s.jsx)(M.I, { "aria-hidden": !1, asset: A.N }),
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
          (u[1] = h),
          (u[2] = j),
          (u[3] = y),
          (u[4] = b),
          (u[5] = t),
          (u[6] = n),
          (u[7] = i),
          (u[8] = r),
          (u[9] = o),
          (u[10] = c))
      } else ((t = u[5]), (n = u[6]), (i = u[7]), (r = u[8]), (o = u[9]), (c = u[10]))
      return (
        u[24] !== t || u[25] !== i || u[26] !== r || u[27] !== o
          ? ((d = (0, s.jsxs)(t, { className: i, children: [r, o] })),
            (u[24] = t),
            (u[25] = i),
            (u[26] = r),
            (u[27] = o),
            (u[28] = d))
          : (d = u[28]),
        u[29] !== n || u[30] !== c || u[31] !== d
          ? ((m = (0, s.jsxs)(n, { children: [c, d] })), (u[29] = n), (u[30] = c), (u[31] = d), (u[32] = m))
          : (m = u[32]),
        m
      )
    }
    var z = n("lXzT"),
      V = n("xNQs"),
      T = n("DJRx"),
      D = n("OWtl"),
      O = n("AWNZ"),
      H = n("kfGJ"),
      F = n("Zt82")
    function B(e) {
      let t,
        n,
        l,
        i,
        r,
        o,
        c,
        d,
        m,
        g,
        v = (0, a.c)(37),
        { actions: h, draft: j, scriptType: b, simpleSetup: y, onScriptChange: S } = e,
        E = void 0 !== y && y,
        A = (0, p.A)(),
        [w, M] = (0, u.useState)("default"),
        C = "setup" === b
      t =
        "default" === w
          ? C
            ? j.setupScript
            : j.cleanupScript
          : C
            ? (j.setupPlatformScripts[w] ?? "")
            : (j.cleanupPlatformScripts[w] ?? "")
      let N = null
      if (!E && C) {
        let e
        ;(v[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(f.A, {
              id: "settings.localEnvironments.editor.setup.description",
              defaultMessage: "Runs at the project root on worktree creation",
            })),
            (v[0] = e))
          : (e = v[0]),
          (N = e))
      } else if (!C) {
        let e
        ;(v[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(f.A, { ..._.n.cleanupDescription })), (v[1] = e))
          : (e = v[1]),
          (N = e))
      }
      ;(v[2] !== C
        ? ((n = C ? (0, s.jsx)(f.A, { ..._.n.setupScript }) : (0, s.jsx)(f.A, { ..._.n.cleanupScript })),
          (v[2] = C),
          (v[3] = n))
        : (n = v[3]),
        v[4] !== h || v[5] !== N || v[6] !== n
          ? ((l = (0, s.jsx)(L.X.Header, { title: n, subtitle: N, actions: h })),
            (v[4] = h),
            (v[5] = N),
            (v[6] = n),
            (v[7] = l))
          : (l = v[7]),
        v[8] !== A || v[9] !== w || v[10] !== C || v[11] !== E
          ? ((i = E
              ? null
              : (0, s.jsx)(I.t, {
                  leadingOption: "default",
                  selectedId: w,
                  onSelect: M,
                  ariaLabel: C
                    ? A.formatMessage(_.n.setupPlatformSelector)
                    : A.formatMessage(_.n.cleanupPlatformSelector),
                })),
            (v[8] = A),
            (v[9] = w),
            (v[10] = C),
            (v[11] = E),
            (v[12] = i))
          : (i = v[12]))
      let k = `local-environment-${b}-script-${w}`
      return (
        v[13] !== A || v[14] !== C
          ? ((r = C
              ? A.formatMessage(_.n.setupScript)
              : A.formatMessage({
                  id: "settings.localEnvironments.environment.cleanup.input",
                  defaultMessage: "Cleanup script",
                })),
            (v[13] = A),
            (v[14] = C),
            (v[15] = r))
          : (r = v[15]),
        v[16] !== A || v[17] !== b || v[18] !== w || v[19] !== E
          ? ((o = E
              ? A.formatMessage({
                  id: "settings.localEnvironments.editor.simpleSetup.placeholder",
                  defaultMessage: "For example: npm install",
                })
              : (0, P.XB)(b, w)),
            (v[16] = A),
            (v[17] = b),
            (v[18] = w),
            (v[19] = E),
            (v[20] = o))
          : (o = v[20]),
        v[21] !== S || v[22] !== b || v[23] !== w
          ? ((c = (e) => {
              S(b, w, e.target.value)
            }),
            (v[21] = S),
            (v[22] = b),
            (v[23] = w),
            (v[24] = c))
          : (c = v[24]),
        v[25] !== t || v[26] !== k || v[27] !== r || v[28] !== o || v[29] !== c
          ? ((d = (0, s.jsx)(x.TM, {
              variant: "code",
              id: k,
              value: t,
              "aria-label": r,
              placeholder: o,
              rows: 6,
              onChange: c,
            })),
            (v[25] = t),
            (v[26] = k),
            (v[27] = r),
            (v[28] = o),
            (v[29] = c),
            (v[30] = d))
          : (d = v[30]),
        v[31] !== i || v[32] !== d
          ? ((m = (0, s.jsxs)(L.X.Content, { className: "gap-2", children: [i, d] })),
            (v[31] = i),
            (v[32] = d),
            (v[33] = m))
          : (m = v[33]),
        v[34] !== m || v[35] !== l
          ? ((g = (0, s.jsxs)(L.X, { children: [l, m] })), (v[34] = m), (v[35] = l), (v[36] = g))
          : (g = v[36]),
        g
      )
    }
    var X = n("BsEo")
    let Q = "local-environment-name-error"
    function U(e) {
      let t,
        n,
        o,
        A,
        w,
        M,
        C,
        N,
        k,
        I,
        U,
        q,
        G,
        J,
        K,
        ee,
        et,
        en = (0, a.c)(91),
        {
          hostId: es,
          workspaceRoot: ea,
          resolvedProject: el,
          configPath: ei,
          expectedRevision: er,
          initialEnvironment: eo,
          hasParseError: ec,
          hasReadError: ed,
          onDirtyChange: em,
          onDiscardConflict: eu,
          onRetryRead: ep,
          onSavingChange: ef,
          onSaved: eg,
          simpleSetup: ev,
        } = e,
        ex = void 0 !== ev && ev,
        eh = (0, d.gh)(D.u),
        ej = (0, p.A)(),
        { data: eb } = (0, S.a)()
      en[0] !== ei || en[1] !== er || en[2] !== ec || en[3] !== eo || en[4] !== ej || en[5] !== ea
        ? ((t = () => ({
            configPath: ei,
            draft: (0, P.YP)(
              null == eo
                ? { defaultName: (0, F.P)(ea) ?? ej.formatMessage(_.n.defaultEnvironmentName) }
                : { environment: eo },
            ),
            hasParseError: ec,
            revision: er,
            version: eo?.version ?? 1,
          })),
          (en[0] = ei),
          (en[1] = er),
          (en[2] = ec),
          (en[3] = eo),
          (en[4] = ej),
          (en[5] = ea),
          (en[6] = t))
        : (t = en[6])
      let [ey] = (0, u.useState)(t),
        { data: eS, error: eE, refetch: eA } = (0, y.f)(es),
        ew = eS?.codexHome
      en[7] !== ew || en[8] !== eS?.worktreesSegment || en[9] !== el?.isCodexWorktree || en[10] !== ea
        ? ((n = el?.isCodexWorktree === !0 || (null != ew && (0, m.n9x)(ea, ew, eS?.worktreesSegment))),
          (en[7] = ew),
          (en[8] = eS?.worktreesSegment),
          (en[9] = el?.isCodexWorktree),
          (en[10] = ea),
          (en[11] = n))
        : (n = en[11])
      let eM = n,
        eC = (0, H.Qz)(es),
        eN = (0, d.Ul)(T.AQ)
      ;(en[12] !== eC || en[13] !== ea
        ? ((o = { cwd: ea, hostConfig: eC }), (en[12] = eC), (en[13] = ea), (en[14] = o))
        : (o = en[14]),
        en[15] !== eN ? ((A = { retainRepoWatch: eN }), (en[15] = eN), (en[16] = A)) : (A = en[16]))
      let { data: ek, error: eP, refetch: e_ } = (0, b.E)(o, "local_environment_editor", A)
      en[17] !== es || en[18] !== ea
        ? ((w = { hostId: es, workspaceRoot: ea }), (en[17] = es), (en[18] = ea), (en[19] = w))
        : (w = en[19])
      let { updateSelection: eI } = (0, E.GF)(w)
      en[20] !== ek || en[21] !== eC || en[22] !== eh
        ? ((M = {
            onSuccess: (e, t) => {
              e.success && ek && (0, E.SH)(eh, ek, eC, t.value, "local_environment_editor")
            },
          }),
          (en[20] = ek),
          (en[21] = eC),
          (en[22] = eh),
          (en[23] = M))
        : (M = en[23])
      let eL = (0, j.JX)("set-config-value", eC, M),
        [e$, eR] = (0, u.useState)(null == ey.revision),
        [ez, eV] = (0, u.useState)(!1),
        eT = e$ && ((null == el && null != eE) || (eM && null != eP)),
        eD = !e$ || ((null != el || null != ew) && (!eM || ek?.root != null))
      ;(en[24] !== eM ||
      en[25] !== ey.configPath ||
      en[26] !== ey.revision ||
      en[27] !== ey.version ||
      en[28] !== ek?.root ||
      en[29] !== es ||
      en[30] !== e$ ||
      en[31] !== eh ||
      en[32] !== eL ||
      en[33] !== eI ||
      en[34] !== ea
        ? ((C = (e) =>
            (0, z.b)({
              configPath: ey.configPath,
              draft: e,
              expectedRevision: ey.revision,
              hostId: es,
              queryClient: eh.queryClient,
              selectEnvironment: e$
                ? (e) =>
                    (0, z.z)({
                      codexWorktree: eM,
                      configPath: e,
                      gitRoot: ek?.root ?? null,
                      selectForWorkspace: eI,
                      selectForWorktree: async (e, t) => {
                        let n = await eL
                          .mutateAsync({
                            root: e,
                            key: m.fRB,
                            operationSource: "local_environment_editor",
                            value: t,
                            scope: "worktree",
                          })
                          .catch(Y)
                        return n?.success === !0
                      },
                    })
                : void 0,
              version: ey.version,
              workspaceRoot: ea,
            })),
          (en[24] = eM),
          (en[25] = ey.configPath),
          (en[26] = ey.revision),
          (en[27] = ey.version),
          (en[28] = ek?.root),
          (en[29] = es),
          (en[30] = e$),
          (en[31] = eh),
          (en[32] = eL),
          (en[33] = eI),
          (en[34] = ea),
          (en[35] = C))
        : (C = en[35]),
        en[36] !== ef
          ? ((k = () => {
              ef?.(!0)
            }),
            (N = () => {
              ef?.(!1)
            }),
            (en[36] = ef),
            (en[37] = N),
            (en[38] = k))
          : ((N = en[37]), (k = en[38])),
        en[39] !== N || en[40] !== C || en[41] !== k
          ? ((I = { mutationFn: C, networkMode: "always", onMutate: k, onSettled: N }),
            (en[39] = N),
            (en[40] = C),
            (en[41] = k),
            (en[42] = I))
          : (I = en[42]))
      let eO = (0, r.n)(I)
      en[43] !== ey.draft || en[44] !== ey.hasParseError || en[45] !== ey.revision
        ? ((U = (e) => null == ey.revision || ey.hasParseError || !c()(e, ey.draft)),
          (en[43] = ey.draft),
          (en[44] = ey.hasParseError),
          (en[45] = ey.revision),
          (en[46] = U))
        : (U = en[46])
      let eH = U
      ;(en[47] !== eH ||
      en[48] !== ed ||
      en[49] !== ej ||
      en[50] !== eD ||
      en[51] !== e$ ||
      en[52] !== eu ||
      en[53] !== eg ||
      en[54] !== eb?.platform ||
      en[55] !== eO ||
      en[56] !== eh ||
      en[57] !== eT ||
      en[58] !== ex
        ? ((q = (e) => {
            let { value: t } = e
            eO.data?.type === "conflict"
              ? eu()
              : (ex && !(0, P.Zh)(t, eb?.platform)?.trim()) ||
                (null ==
                  Z({
                    hasChanges: eH(t),
                    isSelectionReady: eD,
                    readError: ed,
                    selectionError: eT,
                    isSaving: eO.isPending,
                    validation: (0, P.ls)(t.name, t.actions),
                  }) &&
                  eO.mutate(t, {
                    onSuccess: (e) => {
                      if ("invalid" !== e.type) {
                        if ("conflict" === e.type)
                          return void eh
                            .get(h.Id)
                            .danger(
                              ej.formatMessage({
                                id: "settings.localEnvironments.save.conflict",
                                defaultMessage:
                                  "This environment changed on disk. Discard your edits before saving again",
                              }),
                              { errorAnalytics: { toastId: "settings.localEnvironments.save.conflict" } },
                            )
                        ;(e$ && eR(!1),
                          "selection-failed" === e.type
                            ? eh
                                .get(h.Id)
                                .danger(
                                  ej.formatMessage({
                                    id: "settings.localEnvironments.save.selectionError",
                                    defaultMessage: "Saved the environment file, but could not select it",
                                  }),
                                  { errorAnalytics: { toastId: "settings.localEnvironments.save.selectionError" } },
                                )
                            : eh
                                .get(h.Id)
                                .success(
                                  ej.formatMessage({
                                    id: "settings.localEnvironments.save.success",
                                    defaultMessage: "Saved local environment",
                                  }),
                                ),
                          eg(e.configPath, "selection-failed" === e.type ? void 0 : t))
                      }
                    },
                  }))
          }),
          (en[47] = eH),
          (en[48] = ed),
          (en[49] = ej),
          (en[50] = eD),
          (en[51] = e$),
          (en[52] = eu),
          (en[53] = eg),
          (en[54] = eb?.platform),
          (en[55] = eO),
          (en[56] = eh),
          (en[57] = eT),
          (en[58] = ex),
          (en[59] = q))
        : (q = en[59]),
        en[60] !== ey.draft || en[61] !== q
          ? ((G = { defaultValues: ey.draft, onSubmit: q }), (en[60] = ey.draft), (en[61] = q), (en[62] = G))
          : (G = en[62]))
      let eF = (0, i.m)(G)
      return (
        en[63] !== eF
          ? ((J = (e) => {
              ;(e.preventDefault(), eF.handleSubmit())
            }),
            (en[63] = eF),
            (en[64] = J))
          : (J = en[64]),
        en[65] !== ez ||
        en[66] !== ey.draft ||
        en[67] !== ey.hasParseError ||
        en[68] !== ey.version ||
        en[69] !== eF ||
        en[70] !== eH ||
        en[71] !== ed ||
        en[72] !== eD ||
        en[73] !== em ||
        en[74] !== eu ||
        en[75] !== ep ||
        en[76] !== eb?.platform ||
        en[77] !== eA ||
        en[78] !== e_ ||
        en[79] !== eO.data?.type ||
        en[80] !== eO.error ||
        en[81] !== eO.isPending ||
        en[82] !== eT ||
        en[83] !== ex
          ? ((K = (e) => {
              let t = (e) => {
                  em?.(!c()(e, ey.draft))
                },
                n = (0, P.ls)(e.name, e.actions),
                a = Z({
                  hasChanges: eH(e),
                  isSelectionReady: eD,
                  readError: ed,
                  selectionError: eT,
                  isSaving: eO.isPending,
                  validation: n,
                }),
                i = eO.data?.type === "conflict",
                r = i
                  ? null
                  : (function (e) {
                      if (null == e) return null
                      switch (e) {
                        case "incomplete-action":
                          return (0, s.jsx)(f.A, {
                            id: "settings.localEnvironments.save.disabled.incompleteAction",
                            defaultMessage: "Add both a name and command for each action",
                          })
                        case "loading-project":
                          return (0, s.jsx)(f.A, {
                            id: "settings.localEnvironments.save.disabled.loadingProject",
                            defaultMessage: "Loading project information",
                          })
                        case "missing-name":
                          return (0, s.jsx)(f.A, {
                            id: "settings.localEnvironments.save.disabled.name",
                            defaultMessage: "Add an environment name to save",
                          })
                        case "no-changes":
                          return (0, s.jsx)(f.A, {
                            id: "settings.localEnvironments.save.disabled.noChanges",
                            defaultMessage: "No changes to save",
                          })
                        case "project-error":
                          return (0, s.jsx)(f.A, {
                            id: "settings.localEnvironments.save.disabled.projectError",
                            defaultMessage: "Retry loading project information to save",
                          })
                        case "read-error":
                          return (0, s.jsx)(f.A, {
                            id: "settings.localEnvironments.save.disabled.readError",
                            defaultMessage: "Retry loading the environment before saving",
                          })
                        case "saving":
                          return (0, s.jsx)(f.A, {
                            id: "settings.localEnvironments.save.disabled.saving",
                            defaultMessage: "Saving\u2026",
                          })
                      }
                    })(a),
                o = (n, s, a) => {
                  if ("default" === s) {
                    let s = "setup" === n ? "setupScript" : "cleanupScript",
                      l = { ...e, [s]: a }
                    ;(eF.setFieldValue(s, a), t(l))
                    return
                  }
                  let l = "setup" === n ? "setupPlatformScripts" : "cleanupPlatformScripts",
                    i = { ...e[l], [s]: a },
                    r = { ...e, [l]: i }
                  ;(eF.setFieldValue(l, i), t(r))
                },
                d = (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)($.t, {
                      children: (0, s.jsx)(O.ic, {
                        variant: "stacked",
                        label: (0, s.jsx)("label", {
                          htmlFor: "local-environment-name",
                          children: (0, s.jsx)(f.A, { ..._.n.environmentName }),
                        }),
                        control: (0, s.jsxs)("div", {
                          className: "flex flex-col gap-1",
                          children: [
                            (0, s.jsx)(x.pd, {
                              id: "local-environment-name",
                              value: e.name,
                              "aria-describedby": n.missingName ? Q : void 0,
                              "aria-invalid": n.missingName,
                              onChange: (n) => {
                                let s = n.target.value
                                ;(eF.setFieldValue("name", s), t({ ...e, name: s }))
                              },
                            }),
                            n.missingName
                              ? (0, s.jsx)("div", {
                                  id: Q,
                                  className: "text-xs text-danger",
                                  children: (0, s.jsx)(f.A, {
                                    id: "settings.localEnvironments.editor.nameRequired",
                                    defaultMessage: "Enter an environment name",
                                  }),
                                })
                              : null,
                          ],
                        }),
                      }),
                    }),
                    (0, s.jsx)(B, { actions: (0, s.jsx)(X.r, {}), draft: e, scriptType: "setup", onScriptChange: o }),
                    (0, s.jsx)(B, { draft: e, scriptType: "cleanup", onScriptChange: o }),
                    (0, s.jsx)(R, {
                      actions: e.actions,
                      dropdownDisabled: eO.isPending,
                      incompleteActionIds: n.incompleteActionIds,
                      onChange: (n) => {
                        ;(eF.setFieldValue("actions", n), t({ ...e, actions: n }))
                      },
                    }),
                    null,
                  ],
                })
              return (0, s.jsxs)("fieldset", {
                className: "contents",
                "aria-busy": eO.isPending || void 0,
                disabled: eO.isPending,
                children: [
                  (0, s.jsx)(L.X, {
                    children: (0, s.jsxs)(L.X.Content, {
                      className: "gap-[var(--padding-panel)]",
                      children: [
                        ey.hasParseError
                          ? (0, s.jsx)("div", {
                              className: "text-sm text-danger",
                              role: "alert",
                              children: (0, s.jsx)(f.A, { ...V.y.parseError }),
                            })
                          : null,
                        ed
                          ? (0, s.jsxs)("div", {
                              className: "flex items-center justify-between gap-3 text-sm text-danger",
                              role: "alert",
                              children: [
                                (0, s.jsx)("span", { children: (0, s.jsx)(f.A, { ...V.y.readError }) }),
                                (0, s.jsx)(g.$, {
                                  color: "secondary",
                                  size: "toolbar",
                                  type: "button",
                                  onClick: ep,
                                  children: (0, s.jsx)(f.A, { ...V.y.retry }),
                                }),
                              ],
                            })
                          : null,
                        eT
                          ? (0, s.jsx)($.t, {
                              children: (0, s.jsx)(O.ic, {
                                label: (0, s.jsx)("div", {
                                  className: "text-sm text-danger",
                                  children: (0, s.jsx)(f.A, {
                                    id: "settings.localEnvironments.projectInfo.error",
                                    defaultMessage: "Could not load project information",
                                  }),
                                }),
                                control: (0, s.jsx)(g.$, {
                                  color: "secondary",
                                  size: "toolbar",
                                  type: "button",
                                  onClick: () => {
                                    Promise.all([eA(), e_()])
                                  },
                                  children: (0, s.jsx)(f.A, {
                                    id: "settings.localEnvironments.projectInfo.retry",
                                    defaultMessage: "Retry",
                                  }),
                                }),
                              }),
                            })
                          : null,
                      ],
                    }),
                  }),
                  ex && !ez
                    ? (0, s.jsx)(B, { draft: e, scriptType: "setup", simpleSetup: !0, onScriptChange: o })
                    : null,
                  ex
                    ? (0, s.jsx)(v.J, {
                        collapsible: !0,
                        defaultOpen: !1,
                        title: (0, s.jsx)(f.A, {
                          id: "settings.localEnvironments.editor.advancedSetup",
                          defaultMessage: "Advanced options",
                        }),
                        onOpenChange: eV,
                        children: ez ? d : null,
                      })
                    : d,
                  i &&
                    (0, s.jsx)("div", {
                      className: "text-sm text-danger",
                      role: "alert",
                      children: (0, s.jsx)(f.A, {
                        id: "settings.localEnvironments.preview.saveConflict",
                        defaultMessage: "This environment changed on disk. Continuing will discard your unsaved edits",
                      }),
                    }),
                  !i &&
                    null != eO.error &&
                    (0, s.jsx)("div", {
                      className: "text-sm text-danger",
                      role: "alert",
                      children: (0, s.jsx)(f.A, {
                        id: "settings.localEnvironments.preview.saveFailure",
                        defaultMessage: "Could not save the environment. Try again",
                      }),
                    }),
                  (0, s.jsx)("div", {
                    className: "flex justify-end gap-2",
                    children: (0, s.jsx)(l.m, {
                      disabled: null == r,
                      content: r,
                      children: (0, s.jsx)("span", {
                        className: "inline-flex",
                        children: (0, s.jsxs)(g.$, {
                          "aria-busy": eO.isPending || void 0,
                          color: "primary",
                          size: "toolbar",
                          type: i ? "button" : "submit",
                          disabled: !i && (null != a || (ex && !(0, P.Zh)(e, eb?.platform)?.trim())),
                          loading: eO.isPending,
                          onClick: i
                            ? () => {
                                eu()
                              }
                            : void 0,
                          children: [
                            i &&
                              (0, s.jsx)(f.A, {
                                id: "settings.localEnvironments.preview.discardAndReload",
                                defaultMessage: "Discard edits",
                              }),
                            !i &&
                              null != eO.error &&
                              (0, s.jsx)(f.A, {
                                id: "settings.localEnvironments.preview.retrySave",
                                defaultMessage: "Retry save",
                              }),
                            !i && null == eO.error && ex
                              ? (0, s.jsx)(f.A, {
                                  id: "settings.localEnvironments.editor.saveSimpleSetup",
                                  defaultMessage: "Set up project",
                                })
                              : null,
                            i || null != eO.error || ex
                              ? null
                              : (0, s.jsx)(f.A, {
                                  id: "settings.localEnvironments.preview.save",
                                  defaultMessage: "Save",
                                }),
                          ],
                        }),
                      }),
                    }),
                  }),
                ],
              })
            }),
            (en[65] = ez),
            (en[66] = ey.draft),
            (en[67] = ey.hasParseError),
            (en[68] = ey.version),
            (en[69] = eF),
            (en[70] = eH),
            (en[71] = ed),
            (en[72] = eD),
            (en[73] = em),
            (en[74] = eu),
            (en[75] = ep),
            (en[76] = eb?.platform),
            (en[77] = eA),
            (en[78] = e_),
            (en[79] = eO.data?.type),
            (en[80] = eO.error),
            (en[81] = eO.isPending),
            (en[82] = eT),
            (en[83] = ex),
            (en[84] = K))
          : (K = en[84]),
        en[85] !== eF.Subscribe || en[86] !== K
          ? ((ee = (0, s.jsx)(eF.Subscribe, { selector: W, children: K })),
            (en[85] = eF.Subscribe),
            (en[86] = K),
            (en[87] = ee))
          : (ee = en[87]),
        en[88] !== J || en[89] !== ee
          ? ((et = (0, s.jsx)("form", {
              className: "flex flex-col gap-[var(--padding-panel)]",
              onSubmit: J,
              children: ee,
            })),
            (en[88] = J),
            (en[89] = ee),
            (en[90] = et))
          : (et = en[90]),
        et
      )
    }
    function W(e) {
      return e.values
    }
    function Y() {
      return null
    }
    function Z({ hasChanges: e, isSelectionReady: t, readError: n, selectionError: s, isSaving: a, validation: l }) {
      return a
        ? "saving"
        : t
          ? n
            ? "read-error"
            : l.missingName
              ? "missing-name"
              : l.incompleteActionIds.length > 0
                ? "incomplete-action"
                : e
                  ? null
                  : "no-changes"
          : s
            ? "project-error"
            : "loading-project"
    }
  },
  Tr6k(e, t, n) {
    let s = (0, n("Qgfj").YK)({
      actionPlatforms: { id: "settings.localEnvironments.actions.item.platforms", defaultMessage: "Platforms" },
      actionScript: { id: "settings.localEnvironments.actions.item.command", defaultMessage: "Action script" },
      actionName: { id: "settings.localEnvironments.actions.item.name", defaultMessage: "Name" },
      addAction: { id: "settings.localEnvironments.actions.add", defaultMessage: "Add action" },
      actionsDescription: {
        id: "settings.localEnvironments.environment.actions.description",
        defaultMessage: "These actions can run any command and will be displayed in the header",
      },
      actionsEmpty: {
        id: "settings.localEnvironments.actions.empty",
        defaultMessage: "Add an action to run commands from the local toolbar",
      },
      actionsTitle: { id: "settings.localEnvironments.actions.title", defaultMessage: "Actions" },
      cleanupPlatformSelector: {
        id: "settings.localEnvironments.environment.cleanup.platformSelector",
        defaultMessage: "Cleanup script platform",
      },
      cleanupDescription: {
        id: "settings.localEnvironments.environment.cleanup.description",
        defaultMessage: "Runs at the project root before worktree cleanup",
      },
      cleanupScript: { id: "settings.localEnvironments.environment.cleanup.title", defaultMessage: "Cleanup script" },
      defaultEnvironmentName: { id: "settings.localEnvironments.environment.defaultName", defaultMessage: "local" },
      environmentName: { id: "settings.localEnvironments.environment.name", defaultMessage: "Name" },
      setupPlatformSelector: {
        id: "settings.localEnvironments.environment.setup.platformSelector",
        defaultMessage: "Setup script platform",
      },
      setupScript: { id: "settings.localEnvironments.environment.setup", defaultMessage: "Setup script" },
    })
    n.d(t, {}, { n: s })
  },
  gTr2(e, t, n) {
    n.d(t, { t: () => c })
    var s = n("ABep"),
      a = n("QosV"),
      l = n("DBCl"),
      i = n("Wf1j"),
      r = n("EShr")
    let o = (0, n("Qgfj").YK)({
      all: { id: "settings.localEnvironments.actions.item.platforms.all", defaultMessage: "All platforms" },
      default: { id: "settings.localEnvironments.environment.script.default", defaultMessage: "Default" },
      darwin: { id: "settings.localEnvironments.actions.item.platforms.macos", defaultMessage: "macOS" },
      linux: { id: "settings.localEnvironments.actions.item.platforms.linux", defaultMessage: "Linux" },
      win32: { id: "settings.localEnvironments.actions.item.platforms.windows", defaultMessage: "Windows" },
    })
    function c(e) {
      let t,
        n,
        c,
        d = (0, a.c)(10),
        { leadingOption: m, selectedId: u, onSelect: p, ariaLabel: f } = e,
        g = (0, i.A)()
      d[0] !== m ? ((t = [m, ...l.jtP]), (d[0] = m), (d[1] = t)) : (t = d[1])
      let v = t
      return (
        d[2] !== g || d[3] !== v
          ? ((n = v.map((e) => {
              let t = g.formatMessage(o[e])
              return { id: e, label: t, ariaLabel: t }
            })),
            (d[2] = g),
            (d[3] = v),
            (d[4] = n))
          : (n = d[4]),
        d[5] !== f || d[6] !== p || d[7] !== u || d[8] !== n
          ? ((c = (0, s.jsx)(r.T, { selectedId: u, onSelect: p, ariaLabel: f, options: n })),
            (d[5] = f),
            (d[6] = p),
            (d[7] = u),
            (d[8] = n),
            (d[9] = c))
          : (c = d[9]),
        c
      )
    }
  },
  lXzT(e, t, n) {
    var s = n("GaA7"),
      a = n("Rxpj"),
      l = n("tNgt")
    n.d(
      t,
      {},
      {
        b: async function ({
          configPath: e,
          draft: t,
          expectedRevision: n,
          hostId: i,
          queryClient: r,
          selectEnvironment: o,
          version: c,
          workspaceRoot: d,
        }) {
          let m = (0, l.ls)(t.name, t.actions)
          if (m.missingName || m.incompleteActionIds.length > 0) return { type: "invalid" }
          let u = (0, l.GU)({ version: c, ...t }),
            p = s.appServices.localEnvironments
          if (null == p) throw Error("Local environments are not supported by this host.")
          let f = await p.saveConfig({ configPath: e, expectedRevision: n, hostId: i, raw: u }),
            g = f.configPath,
            v = (0, a._m)(r, i, [e, g], d)
          if ("conflict" === f.type) return { type: "conflict" }
          await v
          let x = await o?.(g)
          return { configPath: g, type: !1 === x ? "selection-failed" : "success" }
        },
        z: async function ({
          codexWorktree: e,
          configPath: t,
          gitRoot: n,
          selectForWorkspace: s,
          selectForWorktree: a,
        }) {
          return e ? null != n && a(n, t) : (s(t), !0)
        },
      },
    )
  },
  BsEo(e, t, n) {
    var s = n("ABep"),
      a = n("QosV"),
      l = n("DBCl"),
      i = n("oyxz"),
      r = n("Sm6l"),
      o = n("nzx4")
    function c(e) {
      let t,
        n,
        l,
        i = (0, a.c)(7),
        { variableName: r, description: o } = e
      return (
        i[0] !== o
          ? ((t = (0, s.jsx)("div", { className: "text-sm text-secondary", children: o })), (i[0] = o), (i[1] = t))
          : (t = i[1]),
        i[2] !== r
          ? ((n = (0, s.jsx)("div", {
              className:
                "overflow-x-auto rounded-md border border-background-primary-soft bg-secondary-soft-alpha px-2 py-1.5",
              children: (0, s.jsx)("code", {
                className: "block text-xs font-medium whitespace-nowrap text-default",
                children: r,
              }),
            })),
            (i[2] = r),
            (i[3] = n))
          : (n = i[3]),
        i[4] !== t || i[5] !== n
          ? ((l = (0, s.jsxs)("div", { className: "flex flex-col gap-0.5 rounded-lg px-2 py-1", children: [t, n] })),
            (i[4] = t),
            (i[5] = n),
            (i[6] = l))
          : (l = i[6]),
        l
      )
    }
    n.d(
      t,
      {},
      {
        r: function () {
          let e,
            t,
            n,
            d,
            m = (0, a.c)(4)
          return (
            m[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, s.jsx)(o.Wv, {
                  asChild: !0,
                  children: (0, s.jsx)(r.$, {
                    color: "secondary",
                    size: "toolbar",
                    className: "w-auto",
                    children: (0, s.jsx)(i.A, {
                      id: "settings.localEnvironments.environment.setup.envVars.button",
                      defaultMessage: "Variables",
                    }),
                  }),
                })),
                (m[0] = e))
              : (e = m[0]),
            m[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, s.jsx)(o.eO, {
                  className: "px-2 py-1 text-sm font-medium text-default",
                  children: (0, s.jsx)(i.A, {
                    id: "settings.localEnvironments.environment.setup.envVars.title",
                    defaultMessage: "Setup script environment variables",
                  }),
                })),
                (m[1] = t))
              : (t = m[1]),
            m[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = (0, s.jsx)(c, {
                  description: (0, s.jsx)(i.A, {
                    id: "settings.localEnvironments.environment.setup.envVars.sourcePath.description",
                    defaultMessage: "Source workspace path",
                  }),
                  variableName: l.l_T,
                })),
                (m[2] = n))
              : (n = m[2]),
            m[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((d = (0, s.jsxs)(o.AM, {
                  children: [
                    e,
                    (0, s.jsxs)(o.hl, {
                      align: "end",
                      className: "w-80 max-w-[min(20rem,var(--radix-popover-content-available-width))] gap-1",
                      children: [
                        t,
                        (0, s.jsxs)("div", {
                          className: "flex flex-col gap-1",
                          children: [
                            n,
                            (0, s.jsx)(c, {
                              variableName: l.eXE,
                              description: (0, s.jsx)(i.A, {
                                id: "settings.localEnvironments.environment.setup.envVars.worktreePath.description",
                                defaultMessage: "New worktree path",
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
  xNQs(e, t, n) {
    let s = (0, n("Qgfj").YK)({
      needsAttention: { id: "localEnvironment.needsAttention", defaultMessage: "Environment needs attention" },
      parseError: {
        id: "settings.localEnvironments.file.invalidEnvironmentWarning",
        defaultMessage: "This environment file is invalid. Saving will replace its contents",
      },
      readError: {
        id: "settings.localEnvironments.file.readFailure",
        defaultMessage: "Unable to load this environment file. Try again",
      },
      retry: { id: "settings.localEnvironments.retry", defaultMessage: "Retry" },
      setup: { id: "threadPage.runAction.environment.setup", defaultMessage: "Set up local environment" },
    })
    n.d(t, {}, { y: s })
  },
  Jl3I(e, t, n) {
    let s = (0, n("Qgfj").YK)({
        diffView: { id: "settings.general.cloudPreferences.diffView.label", defaultMessage: "Diff view" },
        diffViewDescription: {
          id: "settings.general.cloudPreferences.diffView.description",
          defaultMessage: "Choose how changes are shown in cloud chats",
        },
        unified: { id: "settings.general.cloudPreferences.diffView.unified", defaultMessage: "Unified" },
        split: { id: "settings.general.cloudPreferences.diffView.split", defaultMessage: "Split" },
        branchFormat: { id: "settings.general.cloudPreferences.branchFormat.title", defaultMessage: "Branch format" },
        placeholders: {
          id: "settings.general.cloudPreferences.branchFormat.availableTags",
          defaultMessage: "Available placeholders",
        },
      }),
      a = s.placeholders,
      l = [
        { id: "unified", title: s.unified },
        { id: "split", title: s.split },
      ],
      i = {
        diffView: {
          section: "cloud-settings",
          id: "cloud-diff-view",
          title: s.diffView,
          description: s.diffViewDescription,
          options: l.map(({ title: e }) => e),
        },
        branchFormat: { section: "cloud-settings", id: "cloud-branch-format", title: s.branchFormat, keywords: [a] },
      }
    n.d(t, {}, { Hm: a, aN: l, kN: i })
  },
  O1Cs(e, t, n) {
    var s = n("qmMi"),
      a = n("Qgfj"),
      l = n("SPnB"),
      i = n("eFn4"),
      r = n("GaA7"),
      o = n("OWtl"),
      c = n("jBHQ"),
      d = n("Jl3I")
    let m = { section: "codex-cloud", searchParams: { tab: "personal-vault" } },
      u = (0, a.YK)({
        createLegacy: { id: "settings.cloudEnvironments.create.action", defaultMessage: "Create environment" },
        create: { id: "settings.codexCloud.create", defaultMessage: "Create environment" },
        addProject: { id: "settings.localEnvironments.workspace.add", defaultMessage: "Add project" },
        vaultFilter: { id: "personalVault.filters", defaultMessage: "Vault entry type" },
        vaultImport: { id: "personalVault.importAction", defaultMessage: "Import" },
        vaultAdd: { id: "personalVault.addEntry", defaultMessage: "Add" },
        all: { id: "personalVault.filterAll", defaultMessage: "All types" },
        not_sensitive: { id: "personalVault.filterVariables", defaultMessage: "Environment Variables" },
        sensitive: { id: "personalVault.networkSecrets", defaultMessage: "Network secrets" },
      }),
      p = { all: u.all, not_sensitive: u.not_sensitive, sensitive: u.sensitive },
      f = {
        createLegacy: { section: "cloud-environments", id: "create-legacy-cloud-environment", title: u.createLegacy },
        create: { section: "codex-cloud", id: "create-cloud-environment", title: u.create },
        addProject: { section: "local-environments", id: "local-environment-add-project", title: u.addProject },
        vaultFilter: { ...m, id: "vault-entry-type", title: u.vaultFilter, options: Object.values(p) },
        vaultImport: { ...m, id: "import-personal-vault", title: u.vaultImport, keywords: [u.not_sensitive] },
        vaultAdd: { ...m, id: "add-personal-vault-entry", title: u.vaultAdd, keywords: [u.not_sensitive, u.sensitive] },
      },
      g = (0, s.un)(o.u, ({ get: e }) => {
        let t = [f.createLegacy]
        return (
          e(c.P, "375130565") &&
            t.push(
              ...Object.values(d.kN).map((e) => ({
                ...e,
                section: "cloud-environments",
                searchParams: { tab: "preferences" },
              })),
            ),
          t
        )
      }),
      v = (0, s.un)(o.u, ({ get: e }) => {
        if (!e(i.Py)) return []
        let t = [f.create]
        return (
          e(l.PO).authLoading ||
            null == e(l.chatGptAuthenticatedAccountId$) ||
            null == e(l.chatGptAuthenticatedUserId$) ||
            (t.push(f.vaultFilter, f.vaultAdd), r.appServices?.localPersonalSecrets != null && t.push(f.vaultImport)),
          t
        )
      }),
      x = (0, s.un)(o.u, ({ get: e }) =>
        e(c.P, "375130565") ? { ...f.addProject, section: "worktrees", searchParams: { tab: "environments" } } : null,
      )
    n.d(t, {}, { Ad: g, Sd: f, iJ: p, nZ: x, xz: v })
  },
  TlLQ(e, t, n) {
    var s = n("DBCl"),
      a = n("ASxG")
    let l = "local-environments/create",
      i = `/settings/${l}`,
      r = a.Ikc({
        hostId: a.YjP().min(1),
        returnTo: a
          .YjP()
          .startsWith("/")
          .refine((e) => !e.startsWith("//")),
      }),
      o = a.Ikc({
        configPath: a.YjP().min(1).nullable(),
        projectId: a.YjP().min(1).transform(s.Np8).optional(),
        workspaceRoot: a.YjP().min(1),
      })
    n.d(
      t,
      {},
      {
        FO: i,
        pN: function (e, t) {
          let n = r.safeParse(t),
            s = o.safeParse({
              configPath: e.get("configPath"),
              projectId: e.get("projectId") ?? void 0,
              workspaceRoot: e.get("workspaceRoot"),
            })
          return n.success && s.success ? { ...n.data, ...s.data } : null
        },
        q_: function ({ configPath: e, projectId: t, workspaceRoot: n }) {
          let s = new URLSearchParams({ workspaceRoot: n })
          return (null != e && s.set("configPath", e), null != t && s.set("projectId", t), `${i}?${s.toString()}`)
        },
        x0: l,
      },
    )
  },
  V39R(e, t, n) {
    n.d(t, { LocalEnvironmentsSettingsContent: () => eE })
    var s = n("ABep"),
      a = n("QosV"),
      l = n("cUQ9"),
      i = n("uteA"),
      r = n("qmMi"),
      o = n("DBCl"),
      c = n("zd8w"),
      d = n("Wf1j"),
      m = n("oyxz"),
      u = n("Ywss"),
      p = n("Sm6l"),
      f = n("HOLv"),
      g = n("UtcH"),
      v = n("Wbxh"),
      x = n("nn0H"),
      h = n("BQ8Y"),
      j = n("O8dD"),
      b = n("xNQs"),
      y = n("Zt82")
    function S(e, t) {
      return t?.label ?? (0, y.P)(e) ?? e
    }
    var E = n("pki7"),
      A = n("XsHM"),
      w = n("OWtl"),
      M = n("jxU8"),
      C = n("BSnr"),
      N = n("fHlE"),
      k = n("odCE"),
      P = n("AWNZ"),
      _ = n("QyE3"),
      I = n("ZEx5"),
      L = n("qUPv"),
      $ = n("SOLA"),
      R = n("kfGJ"),
      z = n("s6B0"),
      V = n("hZax"),
      T = n("hNt3"),
      D = n("pAJp"),
      O = n("aTcy"),
      H = n("Ot7V")
    function F() {
      let e,
        t = (0, a.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)("div", {
              className: "select-none",
              children: (0, s.jsx)(m.A, {
                id: "settings.localEnvironments.workspaceSelect.descriptionWithLink",
                defaultMessage:
                  "Local environments tell ChatGPT how to set up worktrees for a project. <learnMore>Learn more</learnMore>",
                values: { learnMore: B },
              }),
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    function B(e) {
      return (0, s.jsx)("a", {
        className: "inline-flex items-center gap-1 text-base text-link-primary!",
        href: O.pU,
        target: "_blank",
        rel: "noreferrer",
        onClick: X,
        children: e,
      })
    }
    function X(e) {
      ;(0, H.PQ)({ event: e, href: O.pU, initiator: "open_in_browser_bridge" })
    }
    var Q = n("TlLQ"),
      U = n("on57"),
      W = n("evwP"),
      Y = n("GCsp"),
      Z = n("zXOI"),
      q = n("la9L"),
      G = n("Tr6k"),
      J = n("gTr2")
    function K(e) {
      let t,
        n,
        l,
        i,
        r,
        u,
        p,
        f,
        g,
        v = (0, a.c)(29),
        { actions: x, lifecycle: h, scriptType: j } = e,
        b = (0, d.A)(),
        [y, S] = (0, c.useState)("default"),
        E = h?.script ?? "",
        A = "default" === y ? null : (h?.[y]?.script ?? ""),
        w = "" === A && E.length > 0,
        M = null == A || w ? E : A
      v[0] !== E.length || v[1] !== h
        ? ((t = E.length > 0 || o.jtP.some((e) => !!h?.[e]?.script)), (v[0] = E.length), (v[1] = h), (v[2] = t))
        : (t = v[2])
      let N = t,
        k = "setup" === j
      return (
        v[3] !== k
          ? ((n = k ? (0, s.jsx)(m.A, { ...G.n.setupScript }) : (0, s.jsx)(m.A, { ...G.n.cleanupScript })),
            (l = k
              ? (0, s.jsx)(m.A, {
                  id: "settings.localEnvironments.environment.setup.description",
                  defaultMessage: "This script runs on worktree creation",
                })
              : (0, s.jsx)(m.A, { ...G.n.cleanupDescription })),
            (v[3] = k),
            (v[4] = n),
            (v[5] = l))
          : ((n = v[4]), (l = v[5])),
        v[6] !== x || v[7] !== n || v[8] !== l
          ? ((i = (0, s.jsx)(C.X.Header, { title: n, subtitle: l, actions: x })),
            (v[6] = x),
            (v[7] = n),
            (v[8] = l),
            (v[9] = i))
          : (i = v[9]),
        v[10] !== N || v[11] !== b || v[12] !== y || v[13] !== k
          ? ((r = N
              ? (0, s.jsx)(J.t, {
                  leadingOption: "default",
                  selectedId: y,
                  onSelect: S,
                  ariaLabel: k
                    ? b.formatMessage(G.n.setupPlatformSelector)
                    : b.formatMessage(G.n.cleanupPlatformSelector),
                })
              : null),
            (v[10] = N),
            (v[11] = b),
            (v[12] = y),
            (v[13] = k),
            (v[14] = r))
          : (r = v[14]),
        v[15] !== y || v[16] !== w
          ? ((u =
              "default" !== y && w
                ? (0, s.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, s.jsx)(m.A, {
                      id: "settings.localEnvironments.environment.platformUsesDefault",
                      defaultMessage: "No platform override. Using the default script",
                    }),
                  })
                : null),
            (v[15] = y),
            (v[16] = w),
            (v[17] = u))
          : (u = v[17]),
        v[18] !== N || v[19] !== M || v[20] !== y
          ? ((p =
              M.length > 0
                ? (0, s.jsx)(q.CodeSnippet, {
                    language: "win32" === y ? "text" : "bash",
                    content: M,
                    shouldWrapCode: !0,
                    codeContainerClassName: "max-h-56",
                  })
                : (0, s.jsx)(I.t, {
                    variant: "secondary",
                    children: (0, s.jsx)(P.ic, {
                      label:
                        "default" !== y && N
                          ? (0, s.jsx)(m.A, {
                              id: "settings.localEnvironments.environment.platformScript.empty",
                              defaultMessage: "No script configured for this platform",
                            })
                          : (0, s.jsx)(m.A, {
                              id: "settings.localEnvironments.environment.script.empty",
                              defaultMessage: "No script configured",
                            }),
                      control: null,
                      size: "compact",
                    }),
                  })),
            (v[18] = N),
            (v[19] = M),
            (v[20] = y),
            (v[21] = p))
          : (p = v[21]),
        v[22] !== r || v[23] !== u || v[24] !== p
          ? ((f = (0, s.jsxs)(C.X.Content, { className: "gap-2", children: [r, u, p] })),
            (v[22] = r),
            (v[23] = u),
            (v[24] = p),
            (v[25] = f))
          : (f = v[25]),
        v[26] !== i || v[27] !== f
          ? ((g = (0, s.jsxs)(C.X, { className: "gap-2", children: [i, f] })), (v[26] = i), (v[27] = f), (v[28] = g))
          : (g = v[28]),
        g
      )
    }
    var ee = n("BsEo"),
      et = n("EjYe")
    function en(e) {
      let t,
        n,
        l,
        i = (0, a.c)(12),
        { configExists: r, initialEnvironment: o, hasParseError: c, hasReadError: d } = e,
        u = null != o,
        p = o?.actions
      return (
        i[0] !== r || i[1] !== c || i[2] !== u || i[3] !== d
          ? ((t =
              !u || c || d
                ? (0, s.jsx)(C.X, {
                    className: "gap-2",
                    children: (0, s.jsxs)(C.X.Content, {
                      children: [
                        r
                          ? null
                          : (0, s.jsx)(I.t, {
                              children: (0, s.jsx)(W.W, {
                                layout: "settings-row",
                                children: (0, s.jsx)(m.A, {
                                  id: "settings.localEnvironments.environment.empty",
                                  defaultMessage: "No local environment is configured for this project yet",
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
            (i[0] = r),
            (i[1] = c),
            (i[2] = u),
            (i[3] = d),
            (i[4] = t))
          : (t = i[4]),
        i[5] !== p || i[6] !== u || i[7] !== o
          ? ((n = u
              ? (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(K, { actions: (0, s.jsx)(ee.r, {}), lifecycle: o.setup, scriptType: "setup" }),
                    (0, s.jsx)(K, { lifecycle: o.cleanup, scriptType: "cleanup" }),
                    (0, s.jsxs)(C.X, {
                      className: "gap-2",
                      children: [
                        (0, s.jsx)(C.X.Header, {
                          title: (0, s.jsx)(m.A, {
                            id: "settings.localEnvironments.environment.actionsLabel",
                            defaultMessage: "Actions",
                          }),
                          subtitle: (0, s.jsx)(m.A, { ...G.n.actionsDescription }),
                        }),
                        (0, s.jsx)(C.X.Content, {
                          children: (0, s.jsx)(I.t, {
                            children:
                              null != p && p.length > 0
                                ? p.map(es)
                                : (0, s.jsx)(W.W, {
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
            (i[5] = p),
            (i[6] = u),
            (i[7] = o),
            (i[8] = n))
          : (n = i[8]),
        i[9] !== t || i[10] !== n
          ? ((l = (0, s.jsxs)(s.Fragment, { children: [t, n] })), (i[9] = t), (i[10] = n), (i[11] = l))
          : (l = i[11]),
        l
      )
    }
    function es(e, t) {
      return (0, s.jsx)(ea, { action: e }, `${e.name}-${t}`)
    }
    function ea(e) {
      let t,
        n,
        l,
        i,
        r,
        o,
        d,
        u = (0, a.c)(25),
        { action: f } = e,
        [g, v] = (0, c.useState)(!1),
        x = (0, c.useId)()
      if (u[0] !== f.command) {
        let e
        ;(u[2] === Symbol.for("react.memo_cache_sentinel") ? ((e = /\r?\n/), (u[2] = e)) : (e = u[2]),
          (t = f.command.trimEnd().split(e)),
          (u[0] = f.command),
          (u[1] = t))
      } else t = u[1]
      let h = t,
        j = h.length > 1
      u[3] !== f.command || u[4] !== j
        ? ((n = j
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
          (u[5] = n))
        : (n = u[5])
      let b = j && g,
        y = f.icon ?? "tool"
      return (
        u[6] !== y
          ? ((l = (0, s.jsx)("span", { className: "text-secondary", children: (0, s.jsx)(Z.M, { icon: y }) })),
            (u[6] = y),
            (u[7] = l))
          : (l = u[7]),
        u[8] !== h[0]
          ? ((i = (0, s.jsx)("code", { className: "font-mono text-wrap break-all", dir: "ltr", children: h[0] })),
            (u[8] = h[0]),
            (u[9] = i))
          : (i = u[9]),
        u[10] !== f.name || u[11] !== x || u[12] !== g || u[13] !== j
          ? ((r = j
              ? (0, s.jsxs)(p.$, {
                  "aria-controls": x,
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
                            values: { actionName: f.name },
                          })
                        : (0, s.jsx)(m.A, {
                            id: "settings.localEnvironments.environment.action.showCommand",
                            defaultMessage: "Show full command for {actionName}",
                            values: { actionName: f.name },
                          }),
                    }),
                    (0, s.jsx)(Y.A, {
                      "aria-hidden": !0,
                      className: (0, U.A)(
                        "icon-2xs shrink-0 text-tertiary transition-transform",
                        g ? "rotate-0" : "-rotate-90",
                      ),
                    }),
                  ],
                })
              : null),
            (u[10] = f.name),
            (u[11] = x),
            (u[12] = g),
            (u[13] = j),
            (u[14] = r))
          : (r = u[14]),
        u[15] !== f.name || u[16] !== l || u[17] !== i || u[18] !== r
          ? ((o = (0, s.jsx)(P.ic, { icon: l, label: f.name, description: i, control: r })),
            (u[15] = f.name),
            (u[16] = l),
            (u[17] = i),
            (u[18] = r),
            (u[19] = o))
          : (o = u[19]),
        u[20] !== x || u[21] !== n || u[22] !== b || u[23] !== o
          ? ((d = (0, s.jsx)(et.H, { content: n, contentId: x, expanded: b, children: o })),
            (u[20] = x),
            (u[21] = n),
            (u[22] = b),
            (u[23] = o),
            (u[24] = d))
          : (d = u[24]),
        d
      )
    }
    var el = n("slpy"),
      ei = n("qTvt"),
      er = n("ozCc"),
      eo = n("zKw6"),
      ec = n.n(eo),
      ed = n("RNul"),
      em = n("UxN3"),
      eu = n("EIFV"),
      ep = n("amCY"),
      ef = n("O1Cs"),
      eg = n("pO0d"),
      ev = n("bnxy")
    let ex = (0, n("Qgfj").YK)({
      selectProject: { id: "settings.localEnvironments.workspaceSelect.title", defaultMessage: "Select a project" },
      editEnvironment: { id: "settings.localEnvironments.environment.editAction", defaultMessage: "Edit" },
      createEnvironment: {
        id: "settings.localEnvironments.environment.create",
        defaultMessage: "Create local environment",
      },
    })
    function eh(e) {
      let t,
        n,
        l,
        i,
        r,
        o = (0, a.c)(17),
        {
          groups: c,
          hasError: d,
          hostId: u,
          isLoading: f,
          workspaceRoots: g,
          onAddWorkspace: v,
          onCreateEnvironment: x,
          onRetry: h,
          onSelectEnvironment: j,
        } = e
      return (
        o[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, s.jsx)(m.A, { ...ex.selectProject })), (o[0] = t))
          : (t = o[0]),
        o[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, s.jsx)(eg.Ct, { title: ef.Sd.addProject.title })), (o[1] = n))
          : (n = o[1]),
        o[2] !== v
          ? ((l = (0, s.jsx)(C.X.Header, {
              title: t,
              actions: (0, s.jsx)(eg.ek, {
                entry: ef.Sd.addProject,
                children: (0, s.jsx)(p.$, { color: "secondary", size: "toolbar", onClick: v, children: n }),
              }),
            })),
            (o[2] = v),
            (o[3] = l))
          : (l = o[3]),
        o[4] !== c ||
        o[5] !== d ||
        o[6] !== u ||
        o[7] !== f ||
        o[8] !== v ||
        o[9] !== x ||
        o[10] !== h ||
        o[11] !== j ||
        o[12] !== g
          ? ((i = (0, s.jsx)(C.X.Content, {
              children: (0, s.jsx)("div", {
                className: "flex flex-col gap-2",
                children: (0, s.jsx)(ej, {
                  groups: c,
                  hasError: d,
                  hostId: u,
                  isLoading: f,
                  workspaceRoots: g,
                  onAddWorkspace: v,
                  onCreateEnvironment: x,
                  onRetry: h,
                  onSelectEnvironment: j,
                }),
              }),
            })),
            (o[4] = c),
            (o[5] = d),
            (o[6] = u),
            (o[7] = f),
            (o[8] = v),
            (o[9] = x),
            (o[10] = h),
            (o[11] = j),
            (o[12] = g),
            (o[13] = i))
          : (i = o[13]),
        o[14] !== l || o[15] !== i
          ? ((r = (0, s.jsxs)(C.X, { children: [l, i] })), (o[14] = l), (o[15] = i), (o[16] = r))
          : (r = o[16]),
        r
      )
    }
    function ej(e) {
      let t,
        n,
        l,
        i,
        r,
        o,
        c = (0, a.c)(33),
        {
          groups: u,
          hasError: f,
          hostId: g,
          isLoading: v,
          workspaceRoots: x,
          onAddWorkspace: h,
          onCreateEnvironment: j,
          onRetry: y,
          onSelectEnvironment: S,
        } = e,
        E = (0, d.A)()
      if (
        c[0] !== u ||
        c[1] !== f ||
        c[2] !== g ||
        c[3] !== E ||
        c[4] !== v ||
        c[5] !== h ||
        c[6] !== j ||
        c[7] !== y ||
        c[8] !== S ||
        c[9] !== x
      ) {
        r = Symbol.for("react.early_return_sentinel")
        e: {
          let e = new Set()
          if (v) {
            let e
            ;(c[15] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, s.jsx)(k.j, {
                  children: (0, s.jsx)(m.A, {
                    id: "settings.localEnvironments.workspaceSelect.loading",
                    defaultMessage: "Loading projects\u2026",
                  }),
                })),
                (c[15] = e))
              : (e = c[15]),
              (r = e))
            break e
          }
          if (f) {
            let e, t, n, a
            ;(c[16] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, s.jsx)(m.A, { ...b.y.retry })), (c[16] = e))
              : (e = c[16]),
              c[17] !== y
                ? ((t = (0, s.jsx)(p.$, { color: "secondary", size: "toolbar", onClick: y, children: e })),
                  (c[17] = y),
                  (c[18] = t))
                : (t = c[18]),
              c[19] === Symbol.for("react.memo_cache_sentinel")
                ? ((n = (0, s.jsx)("span", {
                    className: "text-danger",
                    role: "alert",
                    children: (0, s.jsx)(m.A, {
                      id: "settings.localEnvironments.workspaceSelect.error",
                      defaultMessage: "Could not load projects",
                    }),
                  })),
                  (c[19] = n))
                : (n = c[19]),
              c[20] !== t
                ? ((a = (0, s.jsx)(I.t, { children: (0, s.jsx)(P.ic, { control: t, label: n }) })),
                  (c[20] = t),
                  (c[21] = a))
                : (a = c[21]),
              (r = a))
            break e
          }
          if (0 === x.length) {
            let e, t, n
            ;(c[22] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, s.jsx)(m.A, {
                  id: "settings.localEnvironments.workspaceSelect.empty",
                  defaultMessage: "No projects yet. Add one to configure local environments.",
                })),
                (c[22] = e))
              : (e = c[22]),
              c[23] === Symbol.for("react.memo_cache_sentinel")
                ? ((t = (0, s.jsx)(eg.Ct, { title: ef.Sd.addProject.title })), (c[23] = t))
                : (t = c[23]),
              c[24] !== h
                ? ((n = (0, s.jsx)(I.t, {
                    children: (0, s.jsxs)("div", {
                      className: "flex flex-col gap-3 p-3 text-sm text-secondary",
                      children: [
                        e,
                        (0, s.jsx)("div", {
                          children: (0, s.jsx)(p.$, { color: "primary", size: "toolbar", onClick: h, children: t }),
                        }),
                      ],
                    }),
                  })),
                  (c[24] = h),
                  (c[25] = n))
                : (n = c[25]),
              (r = n))
            break e
          }
          ;((t = "flex flex-col gap-3"),
            (n = "list"),
            c[26] !== E
              ? ((l = E.formatMessage({
                  id: "settings.localEnvironments.workspaceSelect.listLabel",
                  defaultMessage: "Available projects",
                })),
                (c[26] = E),
                (c[27] = l))
              : (l = c[27]),
            (i = x.map((t) => {
              let n = (0, ev.XH)(t),
                a = u.find((s) => !e.has(`${s.projectId}:${n}`) && null != s.path && (0, ev.y7)(s.path, t)) ?? null
              return (
                null != a && e.add(`${a.projectId}:${n}`),
                (0, s.jsx)(
                  eb,
                  { hostId: g, resolvedProject: a, workspaceRoot: t, onCreateEnvironment: j, onSelectEnvironment: S },
                  `${a?.projectId ?? "unassigned"}:${t}`,
                )
              )
            })))
        }
        ;((c[0] = u),
          (c[1] = f),
          (c[2] = g),
          (c[3] = E),
          (c[4] = v),
          (c[5] = h),
          (c[6] = j),
          (c[7] = y),
          (c[8] = S),
          (c[9] = x),
          (c[10] = t),
          (c[11] = n),
          (c[12] = l),
          (c[13] = i),
          (c[14] = r))
      } else ((t = c[10]), (n = c[11]), (l = c[12]), (i = c[13]), (r = c[14]))
      return r !== Symbol.for("react.early_return_sentinel")
        ? r
        : (c[28] !== t || c[29] !== n || c[30] !== l || c[31] !== i
            ? ((o = (0, s.jsx)("div", { className: t, role: n, "aria-label": l, children: i })),
              (c[28] = t),
              (c[29] = n),
              (c[30] = l),
              (c[31] = i),
              (c[32] = o))
            : (o = c[32]),
          o)
    }
    function eb(e) {
      let t,
        n,
        l,
        i,
        u,
        g,
        v,
        h,
        j,
        y,
        E = (0, a.c)(74),
        { hostId: A, resolvedProject: w, workspaceRoot: M, onCreateEnvironment: C, onSelectEnvironment: N } = e,
        k = (0, d.A)()
      E[0] !== A || E[1] !== M
        ? ((t = { hostId: A, workspaceRoot: M }), (E[0] = A), (E[1] = M), (E[2] = t))
        : (t = E[2])
      let { data: _, isLoading: L, isFetching: $, error: R, refetch: z } = (0, r._U)(x.Ly, t)
      E[3] !== _ ? ((n = void 0 === _ ? [] : _), (E[3] = _), (E[4] = n)) : (n = E[4])
      let V = n,
        [D, O] = (0, c.useState)(!1),
        H = `local-environment-inherited-${(0, c.useId)()}`
      E[5] !== w ? ((l = null == w ? void 0 : (0, o.Np8)(w.projectId)), (E[5] = w), (E[6] = l)) : (l = E[6])
      let F = l,
        B = !L && !$ && null == R
      if (
        E[7] !== B ||
        E[8] !== V ||
        E[9] !== R ||
        E[10] !== $ ||
        E[11] !== L ||
        E[12] !== H ||
        E[13] !== k ||
        E[14] !== C ||
        E[15] !== N ||
        E[16] !== F ||
        E[17] !== z ||
        E[18] !== w ||
        E[19] !== D ||
        E[20] !== M
      ) {
        let e,
          t,
          n,
          a,
          l,
          r,
          o,
          c,
          d,
          x,
          j,
          y,
          A,
          _,
          X,
          Q,
          W = B
            ? (function (e, t) {
                let n = [],
                  s = []
                for (let a of e) (0, ev.y7)(eS(a.configPath), t) ? n.push(a) : s.push(a)
                return { projectEnvironments: n, inheritedEnvironments: s }
              })(V, M)
            : null,
          Z = W?.projectEnvironments ?? [],
          q = W?.inheritedEnvironments ?? [],
          G = (0, T.Dz)(Z),
          J = w?.isCodexWorktree ? ep.A : eu.A
        E[26] !== R || E[27] !== $ || E[28] !== L || E[29] !== k || E[30] !== w || E[31] !== M
          ? ((r = S(M, w)),
            (n = w?.gitRepos[0]?.ownerRepo?.owner ?? null),
            (a = L || $),
            (t = null != R),
            (e = k.formatMessage(
              {
                id: "settings.localEnvironments.workspaceSelect.addLabel",
                defaultMessage: "Add environment to {projectName}",
              },
              { projectName: r },
            )),
            (l = k.formatMessage(
              { id: "settings.localEnvironments.workspaceSelect.openProject", defaultMessage: "Open {projectName}" },
              { projectName: r },
            )),
            (E[26] = R),
            (E[27] = $),
            (E[28] = L),
            (E[29] = k),
            (E[30] = w),
            (E[31] = M),
            (E[32] = e),
            (E[33] = t),
            (E[34] = n),
            (E[35] = a),
            (E[36] = l),
            (E[37] = r))
          : ((e = E[32]), (t = E[33]), (n = E[34]), (a = E[35]), (l = E[36]), (r = E[37]))
        let K = l
        E[38] !== B || E[39] !== V || E[40] !== M
          ? ((o = B ? (0, T.JT)(V, M) : null), (E[38] = B), (E[39] = V), (E[40] = M), (E[41] = o))
          : (o = E[41])
        let ee = o
        E[42] !== k
          ? ((c = k.formatMessage({
              id: "settings.localEnvironments.workspaceSelect.loadingLabel",
              defaultMessage: "Loading environment",
            })),
            (E[42] = k),
            (E[43] = c))
          : (c = E[43])
        let en = c
        E[44] !== k
          ? ((d = k.formatMessage({
              id: "settings.localEnvironments.workspaceSelect.errorLabel",
              defaultMessage: "Environment needs attention",
            })),
            (E[44] = k),
            (E[45] = d))
          : (d = E[45])
        let es = d
        E[46] !== k || E[47] !== D
          ? ((x = D
              ? k.formatMessage({
                  id: "settings.localEnvironments.workspaceSelect.inherited.hide",
                  defaultMessage: "Hide inherited environments",
                })
              : k.formatMessage({
                  id: "settings.localEnvironments.workspaceSelect.inherited.show",
                  defaultMessage: "Show inherited environments",
                })),
            (E[46] = k),
            (E[47] = D),
            (E[48] = x))
          : (x = E[48])
        let ea = x
        E[49] !== J
          ? ((j = (0, s.jsx)(J, { className: "icon-sm text-secondary" })), (E[49] = J), (E[50] = j))
          : (j = E[50])
        let ei = j
        E[51] !== r
          ? ((y = (0, s.jsx)("span", { className: "block truncate", children: r })), (E[51] = r), (E[52] = y))
          : (y = E[52])
        let eo = y,
          ec = null == ee
        ;(E[53] !== ee || E[54] !== C || E[55] !== F || E[56] !== M
          ? ((A = () => {
              null != ee && C(M, ee, F)
            }),
            (E[53] = ee),
            (E[54] = C),
            (E[55] = F),
            (E[56] = M),
            (E[57] = A))
          : (A = E[57]),
          E[58] === Symbol.for("react.memo_cache_sentinel")
            ? ((_ = (0, s.jsx)(f.I, { "aria-hidden": !1, asset: er.f })), (E[58] = _))
            : (_ = E[58]),
          E[59] !== e || E[60] !== ec || E[61] !== A
            ? ((X = (0, s.jsx)(p.$, {
                "aria-label": e,
                color: "secondary",
                disabled: ec,
                size: "toolbar",
                uniform: !0,
                onClick: A,
                children: _,
              })),
              (E[59] = e),
              (E[60] = ec),
              (E[61] = A),
              (E[62] = X))
            : (X = E[62]),
          E[63] !== e || E[64] !== X
            ? ((Q = (0, s.jsx)(el.m, { content: e, children: X })), (E[63] = e), (E[64] = X), (E[65] = Q))
            : (Q = E[65]))
        let em = Q
        ;((v = r),
          (h = "listitem"),
          (i = I.t),
          (u =
            null == G
              ? (0, s.jsx)(P.ic, { control: em, description: n, icon: ei, label: eo })
              : (0, s.jsx)(P.kG, {
                  actions: em,
                  ariaLabel: K,
                  description: n,
                  icon: ei,
                  label: eo,
                  onClick: () => {
                    N(M, G, F)
                  },
                })),
          (g = a
            ? (0, s.jsx)(P.ic, {
                control: null,
                icon: (0, s.jsx)(ed.y, { className: "icon-xs" }),
                label: en,
                size: "compact",
              })
            : t
              ? (0, s.jsx)(P.ic, {
                  control: (0, s.jsx)(p.$, {
                    color: "secondary",
                    size: "toolbar",
                    onClick: () => {
                      z()
                    },
                    children: (0, s.jsx)(m.A, { ...b.y.retry }),
                  }),
                  label: (0, s.jsx)("span", { className: "text-danger", role: "alert", children: es }),
                  size: "compact",
                })
              : (0, s.jsxs)(s.Fragment, {
                  children: [
                    Z.map((e) =>
                      (0, s.jsx)(
                        ey,
                        {
                          environment: e,
                          errorLabel: es,
                          onSelectEnvironment: () => {
                            N(M, e.configPath, F)
                          },
                        },
                        e.configPath,
                      ),
                    ),
                    q.length > 0
                      ? (0, s.jsx)(et.H, {
                          content: q.map((e) =>
                            (0, s.jsx)(
                              ey,
                              {
                                environment: e,
                                errorLabel: es,
                                sourceFolderName: (0, ev.Q0)(eS(e.configPath)),
                                onSelectEnvironment: () => {
                                  N(M, e.configPath, F)
                                },
                              },
                              e.configPath,
                            ),
                          ),
                          contentId: H,
                          expanded: D,
                          children: (0, s.jsx)(P.ic, {
                            control: (0, s.jsx)(p.$, {
                              "aria-controls": H,
                              "aria-expanded": D,
                              "aria-label": ea,
                              color: "ghost",
                              size: "icon",
                              uniform: !0,
                              onClick: () => {
                                O(!D)
                              },
                              children: (0, s.jsx)(Y.A, {
                                className: (0, U.A)(
                                  "icon-2xs text-tertiary transition-transform",
                                  D ? "rotate-0" : "-rotate-90",
                                ),
                              }),
                            }),
                            label: (0, s.jsx)(m.A, {
                              id: "settings.localEnvironments.workspaceSelect.inherited",
                              defaultMessage: "Inherited environments ({count})",
                              values: { count: q.length },
                            }),
                            size: "compact",
                          }),
                        })
                      : null,
                  ],
                })),
          (E[7] = B),
          (E[8] = V),
          (E[9] = R),
          (E[10] = $),
          (E[11] = L),
          (E[12] = H),
          (E[13] = k),
          (E[14] = C),
          (E[15] = N),
          (E[16] = F),
          (E[17] = z),
          (E[18] = w),
          (E[19] = D),
          (E[20] = M),
          (E[21] = i),
          (E[22] = u),
          (E[23] = g),
          (E[24] = v),
          (E[25] = h))
      } else ((i = E[21]), (u = E[22]), (g = E[23]), (v = E[24]), (h = E[25]))
      return (
        E[66] !== i || E[67] !== u || E[68] !== g
          ? ((j = (0, s.jsxs)(i, { children: [u, g] })), (E[66] = i), (E[67] = u), (E[68] = g), (E[69] = j))
          : (j = E[69]),
        E[70] !== v || E[71] !== h || E[72] !== j
          ? ((y = (0, s.jsx)("div", { "aria-label": v, role: h, children: j })),
            (E[70] = v),
            (E[71] = h),
            (E[72] = j),
            (E[73] = y))
          : (y = E[73]),
        y
      )
    }
    function ey(e) {
      let t,
        n,
        l,
        i,
        r,
        o,
        c = (0, a.c)(19),
        { environment: u, errorLabel: p, sourceFolderName: f, onSelectEnvironment: g } = e,
        v = (0, d.A)()
      c[0] !== u.configPath ? ((t = (0, ev.Q0)(u.configPath)), (c[0] = u.configPath), (c[1] = t)) : (t = c[1])
      let x = t,
        h = "success" === u.type && u.environment?.name != null && u.environment.name.length > 0,
        j = h ? u.environment.name : x,
        b = "error" === u.type,
        y = b || (h && x !== j) ? x : null,
        S = b ? x : j
      c[2] !== S || c[3] !== v || c[4] !== f
        ? ((n =
            null == f
              ? v.formatMessage(
                  {
                    id: "settings.localEnvironments.workspaceSelect.viewAction",
                    defaultMessage: "View {environmentName}",
                  },
                  { environmentName: S },
                )
              : v.formatMessage(
                  {
                    id: "settings.localEnvironments.workspaceSelect.viewInheritedAction",
                    defaultMessage: "View {environmentName} from {sourceFolderName}",
                  },
                  { environmentName: S, sourceFolderName: f },
                )),
          (c[2] = S),
          (c[3] = v),
          (c[4] = f),
          (c[5] = n))
        : (n = c[5])
      let E = n
      c[6] !== x || c[7] !== y || c[8] !== f
        ? ((l =
            null == f
              ? y
              : (0, s.jsx)(m.A, {
                  id: "settings.localEnvironments.workspaceSelect.inheritedSource",
                  defaultMessage: "From {sourceFolderName} \xb7 {fileName}",
                  values: { fileName: x, sourceFolderName: f },
                })),
          (c[6] = x),
          (c[7] = y),
          (c[8] = f),
          (c[9] = l))
        : (l = c[9])
      let A = b ? "text-danger" : void 0,
        w = b ? p : j
      return (
        c[10] !== A || c[11] !== w
          ? ((i = (0, s.jsx)("span", { className: A, children: w })), (c[10] = A), (c[11] = w), (c[12] = i))
          : (i = c[12]),
        c[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, s.jsx)(em.bF, {
              className: "-rotate-90 text-tertiary",
              "aria-hidden": !1,
              asset16: ei.K,
              legacyIcon: Y.A,
              legacyClassName: "icon-2xs",
            })),
            (c[13] = r))
          : (r = c[13]),
        c[14] !== g || c[15] !== l || c[16] !== i || c[17] !== E
          ? ((o = (0, s.jsx)(P.kG, { ariaLabel: E, description: l, label: i, onClick: g, trailing: r })),
            (c[14] = g),
            (c[15] = l),
            (c[16] = i),
            (c[17] = E),
            (c[18] = o))
          : (o = c[18]),
        o
      )
    }
    function eS(e) {
      let t = (0, ev.Fd)(e),
        n = ec().posix.dirname(t),
        s = ec().posix.dirname(n)
      return "environments" !== ec().posix.basename(n) || ".codex" !== ec().posix.basename(s)
        ? t
        : ec().posix.dirname(s)
    }
    function eE(e) {
      let t,
        n,
        y,
        A,
        M,
        _,
        O,
        H,
        B,
        X,
        U,
        W,
        Y,
        Z,
        q,
        G,
        J,
        K,
        ee,
        et,
        es,
        ea,
        el,
        ei,
        er,
        eo,
        ec = (0, a.c)(138),
        { settingsHostId: ed } = e,
        em = (0, r.gh)(w.u),
        eu = (0, V.Zj)("375130565"),
        ep = (0, d.A)(),
        [ef] = (0, u.ok)(),
        eg = (0, u.zy)(),
        ev = (0, u.Zp)(),
        ej = null != (0, u.RQ)(Q.FO)
      ec[0] !== ej || ec[1] !== eg || ec[2] !== ef
        ? ((t = ej ? (0, Q.pN)(ef, eg.state) : null), (ec[0] = ej), (ec[1] = eg), (ec[2] = ef), (ec[3] = t))
        : (t = ec[3])
      let eb = t,
        ey = eb?.hostId ?? ed,
        { error: eS, isFetching: eE, isLoading: eC, refetch: eN } = (0, r._U)(v.$B, o.Q2Y.LOCAL_PROJECTS),
        { error: ek, isFetching: eP, isLoading: e_, refetch: eI } = (0, r._U)(v.$B, o.Q2Y.REMOTE_PROJECTS),
        eL = (0, r.Ul)(z.bh),
        e$ = (0, N.j)(eL, ey),
        eR = e$.flatMap(ew),
        ez = ey === R.fI ? eC : e_,
        eV = ey === R.fI ? eE : eP,
        eT = ey === R.fI ? eS : ek
      ec[4] !== eb?.workspaceRoot || ec[5] !== ef
        ? ((n = eb?.workspaceRoot ?? ef.get("workspaceRoot")), (ec[4] = eb?.workspaceRoot), (ec[5] = ef), (ec[6] = n))
        : (n = ec[6])
      let [eD, eO] = (0, c.useState)(n)
      if (ec[7] !== eb?.projectId || ec[8] !== ef) {
        let e = ef.get("projectId")
        ;((y = c.useState),
          (A = eb?.projectId ?? (null == e ? null : (0, o.Np8)(e))),
          (ec[7] = eb?.projectId),
          (ec[8] = ef),
          (ec[9] = y),
          (ec[10] = A))
      } else ((y = ec[9]), (A = ec[10]))
      let [eH, eF] = y(A)
      ec[11] !== eb?.configPath || ec[12] !== ef
        ? ((M = eb?.configPath ?? ef.get("configPath")), (ec[11] = eb?.configPath), (ec[12] = ef), (ec[13] = M))
        : (M = ec[13])
      let [eB, eX] = (0, c.useState)(M)
      ec[14] !== eb || ec[15] !== ef
        ? ((_ = null != eb || "edit" === ef.get("mode")), (ec[14] = eb), (ec[15] = ef), (ec[16] = _))
        : (_ = ec[16])
      let [eQ, eU] = (0, c.useState)(_),
        eW = (0, c.useId)(),
        [eY, eZ] = (0, c.useState)(!1),
        [eq, eG] = (0, c.useState)(!1),
        [eJ, eK] = (0, c.useState)(null)
      ;(0, $.iv)(eW, eQ && (eY || eq))
      let [e0, e1] = (0, c.useState)(0),
        e2 = eD ?? null,
        e3 = null != e2 && (null != eb || eR.includes(e2) || null != eB) ? e2 : null,
        e6 = null != e3 ? (e$.find((e) => e.projectId === eH || (null == eH && e.path === e3)) ?? null) : null,
        e5 = null == e3
      ec[17] !== em || ec[18] !== ey
        ? ((O = () => {
            ey !== R.fI ? (0, E.vd)({ hostId: ey }) : (0, E.T6)(em, { openInNewChat: !1 })
          }),
          (ec[17] = em),
          (ec[18] = ey),
          (ec[19] = O))
        : (O = ec[19])
      let e4 = O
      ec[20] !== eN || ec[21] !== eI || ec[22] !== ey
        ? ((H = () => {
            ey === R.fI ? eN() : eI()
          }),
          (ec[20] = eN),
          (ec[21] = eI),
          (ec[22] = ey),
          (ec[23] = H))
        : (H = ec[23])
      let e7 = H
      ec[24] !== eZ || ec[25] !== eU || ec[26] !== eX
        ? ((B = () => {
            ;(eZ(!1), eF(null), eO(null), eX(null), eU(!1))
          }),
          (ec[24] = eZ),
          (ec[25] = eU),
          (ec[26] = eX),
          (ec[27] = B))
        : (B = ec[27])
      let e9 = B
      ec[28] !== eb || ec[29] !== ev || ec[30] !== eZ || ec[31] !== eU
        ? ((X = () => {
            ;(eZ(!1), null != eb) ? ev(eb.returnTo, { replace: !0 }) : eU(!1)
          }),
          (ec[28] = eb),
          (ec[29] = ev),
          (ec[30] = eZ),
          (ec[31] = eU),
          (ec[32] = X))
        : (X = ec[32])
      let e8 = X
      ec[33] !== eY || ec[34] !== eq || ec[35] !== eK
        ? ((U = (e) => {
            if (!eq) {
              if (eY) return void eK(() => e)
              e()
            }
          }),
          (ec[33] = eY),
          (ec[34] = eq),
          (ec[35] = eK),
          (ec[36] = U))
        : (U = ec[36])
      let te = U
      ec[37] !== eU || ec[38] !== eX
        ? ((W = (e, t, n) => {
            ;(eF(n ?? null), eO(e), eX(t), eU(!1))
          }),
          (ec[37] = eU),
          (ec[38] = eX),
          (ec[39] = W))
        : (W = ec[39])
      let tt = W
      ec[40] !== eU || ec[41] !== eX
        ? ((Y = (e, t, n) => {
            ;(eF(n ?? null), eO(e), eX(t), eU(!0))
          }),
          (ec[40] = eU),
          (ec[41] = eX),
          (ec[42] = Y))
        : (Y = ec[42])
      let tn = Y,
        {
          data: ts,
          isLoading: ta,
          isFetching: tl,
          error: ti,
          refetch: tr,
        } = (0, r._U)(x.Ly, { hostId: ey, workspaceRoot: e3 }),
        to = null != ts && !ta && !tl && null == ti
      ec[43] !== to || ec[44] !== ts
        ? ((Z = to ? (0, T.Dz)(ts) : null), (ec[43] = to), (ec[44] = ts), (ec[45] = Z))
        : (Z = ec[45])
      let tc = Z,
        td = null != eb && null == eb.configPath && to && null != e3 ? (0, T.JT)(ts, e3) : null,
        tm = eb?.configPath ?? td ?? (null == eb ? tc : null)
      eQ && null == eB && null != tm && eX(tm)
      let tu = eB ?? tm,
        tp = null != e3 && null != tu,
        tf = tu ?? ""
      ;(ec[46] !== ey || ec[47] !== tf
        ? ((q = { configPath: tf, hostId: ey }), (ec[46] = ey), (ec[47] = tf), (ec[48] = q))
        : (q = ec[48]),
        ec[49] !== tp ? ((G = { enabled: tp }), (ec[49] = tp), (ec[50] = G)) : (G = ec[50]))
      let { data: tg, isLoading: tv, error: tx, refetch: th } = (0, r._U)(h.R, q, G),
        tj = tg?.environment?.type === "success" ? tg.environment.environment : null,
        tb = tg?.environment?.type === "error",
        ty = null != tx,
        tS = null != ti || null != tx
      ec[51] !== th || ec[52] !== tr || ec[53] !== tu
        ? ((J = () => {
            null == tu ? tr() : Promise.all([tr(), th()])
          }),
          (ec[51] = th),
          (ec[52] = tr),
          (ec[53] = tu),
          (ec[54] = J))
        : (J = ec[54])
      let tE = J
      ec[55] !== th || ec[56] !== tr || ec[57] !== eZ
        ? ((K = async () => {
            tr()
            let e = await th()
            null != e.data && null == e.error && (eZ(!1), e1(eA))
          }),
          (ec[55] = th),
          (ec[56] = tr),
          (ec[57] = eZ),
          (ec[58] = K))
        : (K = ec[58])
      let tA = K
      ec[59] !== th || ec[60] !== eU || ec[61] !== eX
        ? ((ee = async () => {
            let e = await th()
            e.isSuccess && (eX(e.data.configPath), eU(!0))
          }),
          (ec[59] = th),
          (ec[60] = eU),
          (ec[61] = eX),
          (ec[62] = ee))
        : (ee = ec[62])
      let tw = ee,
        tM = ta || (tl && null == tu) || (tp && tv)
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
        let e, t
        return (
          ec[64] !== eu
            ? ((e = eu ? (0, s.jsx)(D.x, { selectedTab: "environments" }) : null), (ec[64] = eu), (ec[65] = e))
            : (e = ec[65]),
          ec[66] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, s.jsx)(F, {})), (ec[66] = t)) : (t = ec[66]),
          (0, s.jsx)(eM, {
            stickyControls: e,
            subtitle: t,
            children: (0, s.jsx)(eh, {
              groups: e$,
              hasError: null != eT,
              hostId: ey,
              isLoading: ez || (null != eT && eV),
              workspaceRoots: eR,
              onAddWorkspace: e4,
              onCreateEnvironment: tn,
              onRetry: e7,
              onSelectEnvironment: tt,
            }),
          })
        )
      }
      let tC = S(e3, e6)
      ec[67] !== eb || ec[68] !== e9 || ec[69] !== e8 || ec[70] !== eQ || ec[71] !== te || ec[72] !== tC
        ? ((et =
            null != eb
              ? (0, s.jsxs)(p.$, {
                  color: "ghost",
                  size: "toolbar",
                  onClick: () => te(e8),
                  children: [
                    (0, s.jsx)(f.I, { "aria-hidden": !1, asset: l.z }),
                    (0, s.jsx)(m.A, { id: "settings.localEnvironments.breadcrumb.back", defaultMessage: "Back" }),
                  ],
                })
              : (0, s.jsx)(g.V, {
                  ancestors: [
                    {
                      id: "environments",
                      label: (0, s.jsx)(m.A, {
                        id: "settings.localEnvironments.breadcrumb.root",
                        defaultMessage: "Environments",
                      }),
                      onClick: () => te(e9),
                    },
                    ...(eQ ? [{ id: "workspace", label: tC, onClick: () => te(e8) }] : []),
                  ],
                  current: eQ
                    ? (0, s.jsx)(m.A, { id: "settings.localEnvironments.breadcrumb.edit", defaultMessage: "edit" })
                    : tC,
                })),
          (ec[67] = eb),
          (ec[68] = e9),
          (ec[69] = e8),
          (ec[70] = eQ),
          (ec[71] = te),
          (ec[72] = tC),
          (ec[73] = et))
        : (et = ec[73])
      let tN = et
      if (tM) {
        let e, t
        return (
          ec[74] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)(k.j, {
                children: (0, s.jsx)(m.A, {
                  id: "settings.localEnvironments.loading.body",
                  defaultMessage: "Fetching your project configuration\u2026",
                }),
              })),
              (ec[74] = e))
            : (e = ec[74]),
          ec[75] !== tN
            ? ((t = (0, s.jsx)(eM, { backSlot: tN, children: e })), (ec[75] = tN), (ec[76] = t))
            : (t = ec[76]),
          t
        )
      }
      if (!tg || null == e3) {
        let e, t, n, a, l
        return (
          ec[77] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)(C.X.Header, {
                title: (0, s.jsx)(m.A, {
                  id: "settings.localEnvironments.unavailable.title",
                  defaultMessage: "Local environments unavailable",
                }),
              })),
              (ec[77] = e))
            : (e = ec[77]),
          ec[78] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, s.jsx)(m.A, {
                id: "settings.localEnvironments.unavailable.body",
                defaultMessage: "We could not load local environment settings for this project",
              })),
              (ec[78] = t))
            : (t = ec[78]),
          ec[79] !== tE || ec[80] !== tS
            ? ((n = tS
                ? (0, s.jsx)(p.$, {
                    color: "secondary",
                    size: "toolbar",
                    type: "button",
                    onClick: tE,
                    children: (0, s.jsx)(m.A, { ...b.y.retry }),
                  })
                : null),
              (ec[79] = tE),
              (ec[80] = tS),
              (ec[81] = n))
            : (n = ec[81]),
          ec[82] !== n
            ? ((a = (0, s.jsxs)(C.X, {
                children: [
                  e,
                  (0, s.jsx)(C.X.Content, {
                    children: (0, s.jsx)(I.t, { children: (0, s.jsx)(P.ic, { label: t, control: n }) }),
                  }),
                ],
              })),
              (ec[82] = n),
              (ec[83] = a))
            : (a = ec[83]),
          ec[84] !== tN || ec[85] !== a
            ? ((l = (0, s.jsx)(eM, { backSlot: tN, children: a })), (ec[84] = tN), (ec[85] = a), (ec[86] = l))
            : (l = ec[86]),
          l
        )
      }
      ec[87] !== tg.configPath || ec[88] !== tg.exists || ec[89] !== tw || ec[90] !== eU || ec[91] !== eX
        ? ((es = () => {
            tg.exists ? tw() : (eX(tg.configPath), eU(!0))
          }),
          (ec[87] = tg.configPath),
          (ec[88] = tg.exists),
          (ec[89] = tw),
          (ec[90] = eU),
          (ec[91] = eX),
          (ec[92] = es))
        : (es = ec[92])
      let tk = es
      if (eQ) {
        let e, t, n, a, l
        ec[93] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(m.A, {
              id: "settings.localEnvironments.edit.title",
              defaultMessage: "Edit local environment",
            })),
            (ec[93] = e))
          : (e = ec[93])
        let i = `${ey}:${tg.configPath}:${e0}`
        return (
          ec[94] !== tg.configPath ||
          ec[95] !== tg.revision ||
          ec[96] !== tA ||
          ec[97] !== e8 ||
          ec[98] !== tE ||
          ec[99] !== tb ||
          ec[100] !== ty ||
          ec[101] !== tj ||
          ec[102] !== e3 ||
          ec[103] !== ey ||
          ec[104] !== e6 ||
          ec[105] !== eZ ||
          ec[106] !== eG ||
          ec[107] !== i
            ? ((t = (0, s.jsx)(
                j.I,
                {
                  hostId: ey,
                  workspaceRoot: e3,
                  resolvedProject: e6,
                  configPath: tg.configPath,
                  expectedRevision: tg.revision,
                  initialEnvironment: tj,
                  hasParseError: tb,
                  hasReadError: ty,
                  onDirtyChange: eZ,
                  onDiscardConflict: tA,
                  onRetryRead: tE,
                  onSavingChange: eG,
                  onSaved: e8,
                },
                i,
              )),
              (ec[94] = tg.configPath),
              (ec[95] = tg.revision),
              (ec[96] = tA),
              (ec[97] = e8),
              (ec[98] = tE),
              (ec[99] = tb),
              (ec[100] = ty),
              (ec[101] = tj),
              (ec[102] = e3),
              (ec[103] = ey),
              (ec[104] = e6),
              (ec[105] = eZ),
              (ec[106] = eG),
              (ec[107] = i),
              (ec[108] = t))
            : (t = ec[108]),
          ec[109] !== eK ? ((n = () => eK(null)), (ec[109] = eK), (ec[110] = n)) : (n = ec[110]),
          ec[111] !== eJ || ec[112] !== n
            ? ((a = (0, s.jsx)(L.W, { pendingNavigation: eJ, onClearPendingNavigation: n })),
              (ec[111] = eJ),
              (ec[112] = n),
              (ec[113] = a))
            : (a = ec[113]),
          ec[114] !== tN || ec[115] !== t || ec[116] !== a
            ? ((l = (0, s.jsxs)(eM, { backSlot: tN, title: e, children: [t, a] })),
              (ec[114] = tN),
              (ec[115] = t),
              (ec[116] = a),
              (ec[117] = l))
            : (l = ec[117]),
          l
        )
      }
      ec[118] !== tg.exists || ec[119] !== ep
        ? ((ea = tg.exists
            ? ep.formatMessage({
                id: "settings.localEnvironments.environment.editLabel",
                defaultMessage: "Edit local environment",
              })
            : void 0),
          (ec[118] = tg.exists),
          (ec[119] = ep),
          (ec[120] = ea))
        : (ea = ec[120])
      let tP = tg.exists ? "secondary" : "primary"
      ;(ec[121] !== tg.exists
        ? ((el = tg.exists
            ? (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(f.I, { "aria-hidden": !1, asset: i.h }),
                  (0, s.jsx)(m.A, { ...ex.editEnvironment }),
                ],
              })
            : (0, s.jsx)(m.A, { ...ex.createEnvironment })),
          (ec[121] = tg.exists),
          (ec[122] = el))
        : (el = ec[122]),
        ec[123] !== tk || ec[124] !== ea || ec[125] !== tP || ec[126] !== el
          ? ((ei = (0, s.jsx)(p.$, { "aria-label": ea, color: tP, size: "toolbar", onClick: tk, children: el })),
            (ec[123] = tk),
            (ec[124] = ea),
            (ec[125] = tP),
            (ec[126] = el),
            (ec[127] = ei))
          : (ei = ec[127]))
      let t_ = tj?.name
      return (
        ec[128] !== tg.exists || ec[129] !== tb || ec[130] !== ty || ec[131] !== tj
          ? ((er = (0, s.jsx)(en, {
              configExists: tg.exists,
              initialEnvironment: tj,
              hasParseError: tb,
              hasReadError: ty,
            })),
            (ec[128] = tg.exists),
            (ec[129] = tb),
            (ec[130] = ty),
            (ec[131] = tj),
            (ec[132] = er))
          : (er = ec[132]),
        ec[133] !== tN || ec[134] !== ei || ec[135] !== t_ || ec[136] !== er
          ? ((eo = (0, s.jsx)(eM, { action: ei, backSlot: tN, title: t_, children: er })),
            (ec[133] = tN),
            (ec[134] = ei),
            (ec[135] = t_),
            (ec[136] = er),
            (ec[137] = eo))
          : (eo = ec[137]),
        eo
      )
    }
    function eA(e) {
      return e + 1
    }
    function ew(e) {
      return "local" === e.projectKind ? (0, A.l_)(e) : [e.path]
    }
    function eM(e) {
      let t,
        n,
        l = (0, a.c)(10),
        { action: i, backSlot: r, stickyControls: o, subtitle: c, title: d, children: m } = e,
        u = (0, V.Zj)("375130565")
      return (
        l[0] !== u || l[1] !== d
          ? ((t = void 0 === d ? (0, s.jsx)(_.s, { slug: u ? "worktrees" : "local-environments" }) : d),
            (l[0] = u),
            (l[1] = d),
            (l[2] = t))
          : (t = l[2]),
        l[3] !== i || l[4] !== r || l[5] !== m || l[6] !== o || l[7] !== c || l[8] !== t
          ? ((n = (0, s.jsx)(M.P, { action: i, title: t, subtitle: c, backSlot: r, stickyControls: o, children: m })),
            (l[3] = i),
            (l[4] = r),
            (l[5] = m),
            (l[6] = o),
            (l[7] = c),
            (l[8] = t),
            (l[9] = n))
          : (n = l[9]),
        n
      )
    }
  },
  qUPv(e, t, n) {
    var s = n("ABep"),
      a = n("QosV"),
      l = n("oyxz"),
      i = n("Sm6l"),
      r = n("JNtf"),
      o = n("mUDD")
    function c(e) {
      let t,
        n,
        c,
        d,
        m,
        u,
        p,
        f,
        g,
        v,
        x = (0, a.c)(19),
        { open: h, onKeepEditing: j, onDiscard: b } = e
      return (
        x[0] !== j
          ? ((t = (e) => {
              e || j()
            }),
            (x[0] = j),
            (x[1] = t))
          : (t = x[1]),
        x[2] !== b
          ? ((n = (e) => {
              ;(e.preventDefault(), b())
            }),
            (x[2] = b),
            (x[3] = n))
          : (n = x[3]),
        x[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, s.jsx)(r.L3, {
              children: (0, s.jsx)(l.A, {
                id: "settings.unsavedChanges.discardTitle",
                defaultMessage: "Discard changes?",
              }),
            })),
            (x[4] = c))
          : (c = x[4]),
        x[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, s.jsx)(o.OO, {
              children: (0, s.jsx)(o.c7, {
                title: c,
                subtitle: (0, s.jsx)(r.rr, {
                  children: (0, s.jsx)(l.A, {
                    id: "settings.unsavedChanges.discardDescription",
                    defaultMessage: "You have unsaved changes. If you leave now, your changes will be lost.",
                  }),
                }),
              }),
            })),
            (x[5] = d))
          : (d = x[5]),
        x[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, s.jsx)(l.A, { id: "settings.unsavedChanges.keepEditing", defaultMessage: "Keep editing" })),
            (x[6] = m))
          : (m = x[6]),
        x[7] !== j
          ? ((u = (0, s.jsx)(i.$, { color: "secondary", type: "button", onClick: j, children: m })),
            (x[7] = j),
            (x[8] = u))
          : (u = x[8]),
        x[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, s.jsx)(i.$, {
              color: "danger",
              type: "submit",
              children: (0, s.jsx)(l.A, { id: "settings.unsavedChanges.discard", defaultMessage: "Discard changes" }),
            })),
            (x[9] = p))
          : (p = x[9]),
        x[10] !== u
          ? ((f = (0, s.jsx)(o.OO, { children: (0, s.jsxs)(o.Es, { children: [u, p] }) })), (x[10] = u), (x[11] = f))
          : (f = x[11]),
        x[12] !== n || x[13] !== f
          ? ((g = (0, s.jsxs)(o.R4, { as: "form", onSubmit: n, children: [d, f] })),
            (x[12] = n),
            (x[13] = f),
            (x[14] = g))
          : (g = x[14]),
        x[15] !== h || x[16] !== t || x[17] !== g
          ? ((v = (0, s.jsx)(r.lG, { open: h, showDialogClose: !1, size: "compact", onOpenChange: t, children: g })),
            (x[15] = h),
            (x[16] = t),
            (x[17] = g),
            (x[18] = v))
          : (v = x[18]),
        v
      )
    }
    n.d(
      t,
      {},
      {
        W: function (e) {
          let t,
            n,
            l = (0, a.c)(7),
            { pendingNavigation: i, onClearPendingNavigation: r } = e,
            o = null != i
          return (
            l[0] !== r || l[1] !== i
              ? ((t = () => {
                  ;(r(), i?.())
                }),
                (l[0] = r),
                (l[1] = i),
                (l[2] = t))
              : (t = l[2]),
            l[3] !== r || l[4] !== o || l[5] !== t
              ? ((n = (0, s.jsx)(c, { open: o, onKeepEditing: r, onDiscard: t })),
                (l[3] = r),
                (l[4] = o),
                (l[5] = t),
                (l[6] = n))
              : (n = l[6]),
            n
          )
        },
      },
    )
  },
  zlDi(e, t, n) {
    let s = (0, n("ESTr").a)({
      name: "play-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 3.474609, y: 2.165039, width: 10.258774, height: 11.725586 },
        visualBounds: { x: 3.474609, y: 2.165039, width: 10.258774, height: 11.725586 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.474609, y: 2.165039, width: 10.258774, height: 11.725586 },
        center: { x: 8.603996, y: 8.027832 },
        insets: { top: 2.165039, right: 2.266617, bottom: 2.109375, left: 3.474609 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.603996, y: 8.027832 }, foreground: { x: 8.603996, y: 8.027832 } },
      },
      capabilities: ["icon"],
      body: '<path d="M4.33594 2.33289C4.80057 2.10819 5.39866 2.08949 5.90332 2.39735L12.9395 6.67957L13.0352 6.74207C13.9964 7.41933 13.9651 8.91629 12.9414 9.5409L12.9336 9.54579L5.89648 13.6639L5.89551 13.663C5.39251 13.9659 4.79815 13.9461 4.33594 13.7225C3.86641 13.4954 3.47443 13.0257 3.47461 12.3954V3.66004C3.47443 3.02975 3.8664 2.56008 4.33594 2.33289ZM4.52539 12.3954C4.52535 12.549 4.61423 12.6918 4.79297 12.7782C4.97639 12.8669 5.19331 12.8628 5.35742 12.7626L5.36621 12.7577L12.3945 8.64442C12.7798 8.40935 12.7791 7.81131 12.3936 7.57704L5.3584 3.29383L5.35742 3.29286C5.19331 3.1926 4.97638 3.1895 4.79297 3.27821C4.61448 3.36467 4.52535 3.50652 4.52539 3.66004V12.3954Z" fill="currentColor"/>',
    })
    n.d(t, {}, { k: s })
  },
}
//# sourceMappingURL=754281.551bb02fa4.js.map
