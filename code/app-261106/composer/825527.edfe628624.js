export const __rspack_esm_ids = [825527]
export const __webpack_modules__ = {
  uaLq(e, t, o) {
    o.d(t, { I: () => eu })
    var l = o("ABep"),
      n = o("QosV"),
      s = o("iRMi"),
      r = o("slpy"),
      a = o("O8pf"),
      c = o("Mf8R"),
      i = o("on57"),
      d = o("zTeN"),
      u = o("zd8w"),
      m = o("Wf1j"),
      p = o("oyxz"),
      h = o("HZfM"),
      f = o("ChYf"),
      g = o("oYYx"),
      j = o("Ko9s"),
      x = o("x4uR"),
      I = o("uZMB"),
      v = o("WLgA"),
      w = o("j9xU"),
      k = o("jEN2"),
      C = o("ZZgR"),
      b = o("bqtn"),
      S = o("HOLv"),
      y = o("xHg4"),
      M = o("Yakm"),
      A = o("nlNF"),
      U = o("yGJW"),
      P = o("uTrt"),
      N = o("ElU1"),
      R = o("Uc3f"),
      _ = o("gBBC"),
      L = o("smUZ"),
      T = o("pki7"),
      D = o("gLQa"),
      O = o("a8ri"),
      F = o("WVuR"),
      E = o("IV6l"),
      B = o("XsHM"),
      Z = o("KjMy"),
      G = o("ROI2"),
      W = o("UN1G"),
      z = o("Rvqv"),
      H = o("YYX4"),
      K = o("TByi"),
      Q = o("KxVC"),
      V = o("bnxy")
    function Y(e) {
      let t,
        o,
        s,
        r,
        c,
        i,
        d,
        m,
        h = (0, n.c)(35),
        {
          children: f,
          groups: g,
          selectedProjectIds: j,
          onRequestClose: x,
          onSelectProjectId: I,
          keepOpenOnSelect: v,
          projectlessActionLabel: w,
          onSelectProjectless: k,
          footerItems: b,
          onAddLocalProject: S,
          onAddRemoteProject: y,
          emptyMessage: M,
        } = e,
        A = void 0 !== v && v,
        U = null != k && null != w,
        [P, N] = (0, u.useState)("")
      ;(h[0] !== P
        ? ((t = (e) => [e.label, e.gitRepos[0]?.rootFolder, (0, W.uQ)(P) ? e.path : void 0, e.hostDisplayName]),
          (h[0] = P),
          (h[1] = t))
        : (t = h[1]),
        h[2] !== g || h[3] !== P || h[4] !== t
          ? ((o = (0, H.V)(g, P, t)), (h[2] = g), (h[3] = P), (h[4] = t), (h[5] = o))
          : (o = h[5]))
      let R = o
      h[6] !== g
        ? ((s = new Map()),
          g.forEach((e) => {
            if (null == e.path) return
            let t = s.get(e.label)
            null == t ? s.set(e.label, [e.path]) : t.push(e.path)
          }),
          (h[6] = g),
          (h[7] = s))
        : (s = h[7])
      let _ = U || null != b || null != S || U || null != y,
        L = R.length > 0
      return (
        h[8] !== s
          ? ((r = (e) => {
              let t = s.get(e.label) ?? []
              return t.length > 1 && null != e.path ? (0, V.LN)(e.path, t) : void 0
            }),
            (h[8] = s),
            (h[9] = r))
          : (r = h[9]),
        h[10] !== A || h[11] !== x || h[12] !== I
          ? ((c = (e) => {
              ;(I(e.projectId), A || x?.())
            }),
            (h[10] = A),
            (h[11] = x),
            (h[12] = I),
            (h[13] = c))
          : (c = h[13]),
        h[14] !== R || h[15] !== j || h[16] !== r || h[17] !== c
          ? ((i = (0, l.jsx)(K.O, {
              groups: R,
              selectedProjectIds: j,
              getProjectDetails: q,
              getProjectTooltipText: r,
              onSelectProject: c,
            })),
            (h[14] = R),
            (h[15] = j),
            (h[16] = r),
            (h[17] = c),
            (h[18] = i))
          : (i = h[18]),
        h[19] !== U ||
        h[20] !== b ||
        h[21] !== S ||
        h[22] !== y ||
        h[23] !== x ||
        h[24] !== k ||
        h[25] !== w ||
        h[26] !== _
          ? ((d = _
              ? (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(l.Fragment, {
                      children: y
                        ? (0, l.jsx)(C.G.Action, {
                            leftIconAsset: Z.b,
                            onClick: () => {
                              ;(y(), x?.())
                            },
                            children: (0, l.jsx)(p.A, {
                              id: "composer.localCwdDropdown.newRemoteProject",
                              defaultMessage: "New remote project",
                              description: "Menu item that opens the remote project setup dialog",
                            }),
                          })
                        : null,
                    }),
                    (0, l.jsx)(l.Fragment, {
                      children: (0, l.jsxs)(l.Fragment, {
                        children: [
                          b,
                          S
                            ? (0, l.jsx)(C.G.Action, {
                                leftIconAsset: a.f,
                                onClick: () => {
                                  ;(S(), x?.())
                                },
                                children: y
                                  ? (0, l.jsx)(p.A, {
                                      id: "composer.localCwdDropdown.addLocalWorkspaceRoot",
                                      defaultMessage: "Add local project",
                                      description:
                                        "Menu item that opens the local folder picker in the electron app when a remote project can also be added",
                                    })
                                  : (0, l.jsx)(p.A, {
                                      id: "composer.localCwdDropdown.addWorkspaceRoot",
                                      defaultMessage: "Add new project",
                                      description:
                                        "Menu item that opens the project picker in the electron app when only local projects can be added",
                                    }),
                              })
                            : null,
                        ],
                      }),
                    }),
                    (0, l.jsx)(l.Fragment, {
                      children: U
                        ? (0, l.jsx)(C.G.Action, {
                            leftIconAsset: G.Q,
                            onClick: () => {
                              ;(k(), x?.())
                            },
                            children: w,
                          })
                        : null,
                    }),
                  ],
                })
              : null),
            (h[19] = U),
            (h[20] = b),
            (h[21] = S),
            (h[22] = y),
            (h[23] = x),
            (h[24] = k),
            (h[25] = w),
            (h[26] = _),
            (h[27] = d))
          : (d = h[27]),
        h[28] !== f || h[29] !== M || h[30] !== P || h[31] !== L || h[32] !== i || h[33] !== d
          ? ((m = (0, l.jsx)(z.G, {
              searchQuery: P,
              onSearchQueryChange: N,
              hasProjectItems: L,
              projectItems: i,
              emptyMessage: M,
              footerItems: d,
              children: f,
            })),
            (h[28] = f),
            (h[29] = M),
            (h[30] = P),
            (h[31] = L),
            (h[32] = i),
            (h[33] = d),
            (h[34] = m))
          : (m = h[34]),
        m
      )
    }
    function q(e) {
      let t = e.gitRepos[0]?.rootFolder,
        o = null != t && t !== e.label
      return (0, l.jsxs)(l.Fragment, {
        children: [
          "remote" === e.projectKind && e.hostId
            ? (0, l.jsx)(Q.z, { className: "icon-2xs shrink-0", hostId: e.hostId })
            : null,
          null != e.hostDisplayName
            ? (0, l.jsx)("span", { className: "truncate text-sm text-codex-description", children: e.hostDisplayName })
            : null,
          o ? (0, l.jsx)("span", { className: "truncate text-sm text-codex-description", children: t }) : null,
        ],
      })
    }
    var J = o("PIwo"),
      X = o("AzNg"),
      $ = o("GaA7"),
      ee = o("OWtl"),
      et = o("ndjw"),
      eo = o("kfGJ"),
      el = o("XyS0"),
      en = o("woUV"),
      es = o("hZax"),
      er = o("nlQE"),
      ea = o("zx49"),
      ec = o("BWQt")
    let ei = (0, d.un)(ee.u, ({ get: e }) => {
        let t = e(en.x),
          o = e(et.Gv)
        return t.map((t) => {
          let l = "local" === t.projectKind ? (0, D._z)(t.projectId, o, e(F.d)) : void 0
          if (null == l) return t
          let n = e(x.jf, l).data?.gizmo.display.name.trim()
          return n ? { ...t, label: n } : t
        })
      }),
      ed = (0, d.un)(
        ee.u,
        ({ get: e }) =>
          e(O.l) &&
          $.appServices?.projectChatGptProvisioning != null &&
          null != e(F.d) &&
          e(f.G, { name: "chatgpt" }).isCapable,
      )
    function eu(e) {
      let t,
        o,
        f,
        x,
        O,
        Z,
        G,
        W,
        z,
        H,
        K,
        Q,
        V,
        q,
        $,
        en,
        eu,
        em,
        ep,
        eh,
        ef,
        eg,
        ej,
        ex,
        eI,
        ev,
        ew,
        ek,
        eC = (0, n.c)(144),
        {
          activeProjectIdOverride: eb,
          hostId: eS,
          allowProjectCreation: ey,
          allowLocalProjects: eM,
          allowLocalProjectActions: eA,
          allowRemoteProjects: eU,
          disabled: eP,
          hideLabel: eN,
          onProjectSelected: eR,
          variant: e_,
          isOpen: eL,
          onOpenChange: eT,
          shortcut: eD,
          triggerButton: eO,
          menuContentOnly: eF,
        } = e,
        eE = void 0 === ey || ey,
        eB = void 0 === eM || eM,
        eZ = void 0 === eA ? eB : eA,
        eG = void 0 === eU || eU,
        eW = void 0 !== eP && eP,
        ez = void 0 !== eN && eN,
        eH = void 0 === e_ ? "default" : e_,
        eK = (0, d.gh)(ee.u),
        eQ = (0, es.Zj)("2163293173") && void 0 !== eF && eF,
        eV = (0, m.A)(),
        eY = (0, h.zy)(),
        eq = (0, h.Zp)(),
        [eJ, eX] = (0, u.useState)(!1),
        e$ = "home" === eH,
        e0 = (0, u.useRef)(!1),
        e1 = (0, u.useRef)(!1),
        e2 = (0, y.e)(),
        e3 = (0, d.Ul)(et.Gv),
        e4 = (0, d.Ul)(F.d),
        e5 = (0, d.Ul)(ed) && eB && !e2
      eC[0] !== e5 ? ((t = { enabled: e5 }), (eC[0] = e5), (eC[1] = t)) : (t = eC[1])
      let e6 = (0, d.Ul)(I.Ds, t),
        e7 = (0, d.Ul)(ei)
      eC[2] !== eB || eC[3] !== eG || eC[4] !== eS
        ? ((o = (e) => !(0, el.Vm)(e) && ("local" === e.projectKind ? eB : eG && (null == eS || e.hostId === eS))),
          (eC[2] = eB),
          (eC[3] = eG),
          (eC[4] = eS),
          (eC[5] = o))
        : (o = eC[5])
      let e8 = e7.filter(o),
        e9 = new Set()
      if (e5)
        for (let e of e6.projects) {
          let t = e.gizmo.id
          if (null != (0, D.Wd)(t, e3, e4)) continue
          e9.add(t)
          let o = e7.find((e) => "local" === e.projectKind && e.projectId === t),
            l = {
              ...o,
              projectId: t,
              projectKind: "local",
              label: e.gizmo.display.name.trim() || t,
              gitRepos: o?.gitRepos ?? [],
              isCodexWorktree: o?.isCodexWorktree ?? !1,
            },
            n = e8.findIndex((e) => e.projectId === t)
          ;-1 === n ? e8.push(l) : (e8[n] = l)
        }
      let te = (0, J.Ik)(),
        tt = void 0 !== eb,
        to = !e2,
        { selectedRemoteProject: tl, selectedRemoteProjectId: tn } = (0, X.QL)(),
        { remoteConnections: ts } = (0, J.mw)(),
        tr = (0, g.g)(ts),
        ta = (0, d.Ul)(et.c_),
        tc = (0, d.Ul)(et.Gt),
        ti = (0, d.Ul)(et.Ro)
      ;((0, d.Ul)(w.F6),
        eC[6] !== eE || eC[7] !== eG || eC[8] !== tr || eC[9] !== eS || eC[10] !== e2 || eC[11] !== te
          ? ((f = eE && eG && te && !e2 && tr.some((e) => null == eS || e.hostId === eS)),
            (eC[6] = eE),
            (eC[7] = eG),
            (eC[8] = tr),
            (eC[9] = eS),
            (eC[10] = e2),
            (eC[11] = te),
            (eC[12] = f))
          : (f = eC[12]))
      let td = f
      eC[13] !== eY || eC[14] !== eq || eC[15] !== eR || eC[16] !== eK
        ? ((x = (e) => {
            ;(null != eR ? ((0, R.J)(eK, (0, _.av)(e)), eR((0, _.av)(e))) : (0, _.yN)(eK, e), (0, L.n)(eK, eq, eY, e))
          }),
          (eC[13] = eY),
          (eC[14] = eq),
          (eC[15] = eR),
          (eC[16] = eK),
          (eC[17] = x))
        : (x = eC[17])
      let tu = x,
        tm = (e) => {
          ;(0, U.yy)(eK, s.CodexAppWorkspaceRootSelected, {})
          let t = e8.find((t) => t.projectId === e)
          if (null != t) {
            if (e9.has(e)) {
              let o = eK.get(A.x2)
              ;(0, j.selectChatGptProjectForLocalTask)(eK, { projectId: e, projectName: t.label }).then((t) => {
                if (null == t || eK.get(A.x2) !== o) return
                eR?.((0, _.av)({ projectKind: "local", projectId: t.projectId }))
                let l = new URLSearchParams(eY.search),
                  n = (0, v.vl)(eY.pathname)
                ;((null != n && n !== e) || ("/projects" === eY.pathname && l.has("projectId"))) &&
                  (l.delete("projectId"),
                  l.delete("hostId"),
                  eq({ pathname: "/", search: l.toString(), hash: eY.hash }, { replace: !0, state: eY.state }))
              })
              return
            }
            tu(t)
          }
        }
      eC[18] !== eS || eC[19] !== eR || eC[20] !== eK
        ? ((O = (e) => {
            ;(0, U.yy)(eK, s.CodexAppWorkspaceRootAddClicked, {})
            let t = eK.get(A.x2)
            ;(0, T.gG)(eK, {
              device: e,
              hostId: "remote" === e ? eS : void 0,
              onProjectCreated:
                null == eR
                  ? void 0
                  : (e) => {
                      eK.get(A.x2) === t && eR(e)
                    },
            })
          }),
          (eC[18] = eS),
          (eC[19] = eR),
          (eC[20] = eK),
          (eC[21] = O))
        : (O = eC[21])
      let tp = O
      eC[22] !== tp
        ? ((Z = (e) => {
            if (e0.current) {
              ;((e0.current = !1), e.preventDefault(), tp("local"))
              return
            }
            e1.current && ((e1.current = !1), e.preventDefault(), (0, k.xJ)())
          }),
          (eC[22] = tp),
          (eC[23] = Z))
        : (Z = eC[23])
      let th = Z
      eC[24] !== tu || eC[25] !== eS || eC[26] !== eK
        ? ((G = () => {
            ;((0, U.yy)(eK, s.CodexAppWorkspaceRootSelected, {}), (0, R.J)(eK, null, eS ?? eo.fI), tu(null))
          }),
          (eC[24] = tu),
          (eC[25] = eS),
          (eC[26] = eK),
          (eC[27] = G))
        : (G = eC[27])
      let tf = G,
        tg = tc?.type === "local" ? tc.projectId : null
      if ((tt ? (tg = eb) : eG && (tg = tn ?? tg), null != tg && !e2 && tg !== tn)) {
        let e
        ;(eC[28] !== tg || eC[29] !== e4 || eC[30] !== e3
          ? ((e = (0, D.Wd)(tg, e3, e4) ?? tg), (eC[28] = tg), (eC[29] = e4), (eC[30] = e3), (eC[31] = e))
          : (e = eC[31]),
          (tg = e))
      }
      let tj = null == tg && to,
        tx = to && null != tg && !0,
        tI = eL ?? eJ
      eC[32] !== eT
        ? ((W = (e) => {
            ;(eX(e), eT?.(e))
          }),
          (eC[32] = eT),
          (eC[33] = W))
        : (W = eC[33])
      let tv = W,
        tw = eE && eZ && "home" === eH && 0 === e8.length && !e5 && !e2
      if (ti || (!tt && null == ta && null == ta && !tw && null == tn)) return null
      let tk =
          null == tg
            ? null
            : (function ({ activeProjectId: e, projects: t, remoteConnections: o, selectedRemoteProject: l }) {
                let n = t.find((t) => t.projectId === e) ?? null
                if (null != n) return n
                if (null == l || l.id !== e) return null
                let s = o.find((e) => e.hostId === l.hostId) ?? null
                return {
                  projectId: l.id,
                  projectKind: "remote",
                  hostId: l.hostId,
                  hostDisplayName: s?.displayName ?? null,
                  label: l.label,
                  path: l.remotePath,
                  gitRepos: [],
                  isCodexWorktree: !1,
                }
              })({
                activeProjectId: tg,
                projects: e8,
                remoteConnections: ts,
                selectedRemoteProject: null == eS || (eG && tl?.hostId === eS) ? tl : null,
              }),
        tC = null == eO && "hero" !== eH && tk?.projectKind === "local" ? (0, B.l_)(tk) : void 0,
        tb = (0, l.jsx)(P.O, {
          className: "icon-xs shrink-0",
          remoteHostId: tk?.hostId,
          isRemoteProject: tk?.projectKind === "remote",
        }),
        tS =
          null == tg
            ? null
            : (0, l.jsx)(N.h, {
                className: "icon-xs",
                fallbackIcon: tb,
                isRemoteProject: tk?.projectKind === "remote",
                markerClassName: "size-4",
                projectId: tg,
                remoteHostId: tk?.hostId,
              }),
        ty = tk?.hostDisplayName != null ? `${tk.label} \xb7 ${tk.hostDisplayName}` : (tk?.label ?? tk?.path ?? null),
        tM =
          tk?.label ??
          (tj && e$
            ? (0, l.jsx)(p.A, {
                id: "composer.localCwdDropdown.noProject",
                defaultMessage: "Choose project",
                description: "Home utility bar value shown when no project is selected",
              })
            : tj
              ? (0, l.jsx)(p.A, {
                  id: "composer.localCwdDropdown.chooseProject",
                  defaultMessage: "Choose project",
                  description: "Home page button label shown when no project is selected",
                })
              : (0, l.jsx)(p.A, {
                  id: "composer.localCwdDropdown.noActiveRoot",
                  defaultMessage: "Select your project",
                  description: "Shown when no active root is selected",
                })),
        tA = tj ? "tertiary" : "primary"
      eC[34] !== tg || eC[35] !== eV
        ? ((z =
            null == tg
              ? eV.formatMessage({
                  id: "composer.localCwdDropdown.selectProjectTooltip",
                  defaultMessage: "Select a project to run your chat in",
                  description: "Tooltip for the home page project selector when no project is selected",
                })
              : eV.formatMessage({
                  id: "composer.localCwdDropdown.changeProjectTooltip",
                  defaultMessage: "Change the project for this chat",
                  description: "Tooltip for the home page project selector when a project is selected",
                })),
          (eC[34] = tg),
          (eC[35] = eV),
          (eC[36] = z))
        : (z = eC[36])
      let tU = z,
        tP =
          null == ty
            ? eV.formatMessage({
                id: "composer.localCwdDropdown.chooseProjectAccessibleLabel",
                defaultMessage: "Choose project",
                description: "Accessible label for the home page project selector when no project is selected",
              })
            : eV.formatMessage(
                {
                  id: "composer.localCwdDropdown.changeProjectAccessibleLabel",
                  defaultMessage: "Change project: {projectName}",
                  description: "Accessible label for the home page project selector when a project is selected",
                },
                { projectName: ty },
              )
      eC[37] !== ty || eC[38] !== tj
        ? ((H =
            ty ??
            (tj
              ? (0, l.jsx)(p.A, {
                  id: "composer.localCwdDropdown.newChat",
                  defaultMessage: "New chat",
                  description: "Label shown when no project is selected in the electron app",
                })
              : (0, l.jsx)(p.A, {
                  id: "composer.localCwdDropdown.noActiveRoot",
                  defaultMessage: "Select your project",
                  description: "Shown when no active root is selected",
                }))),
          (eC[37] = ty),
          (eC[38] = tj),
          (eC[39] = H))
        : (H = eC[39])
      let tN = H
      ;(eC[40] !== tv
        ? ((K = () => {
            ;((e0.current = !0), tv(!1))
          }),
          (eC[40] = tv),
          (eC[41] = K))
        : (K = eC[41]),
        eC[42] === Symbol.for("react.memo_cache_sentinel")
          ? ((Q = (0, l.jsx)(p.A, {
              id: "composer.localCwdDropdown.newProject",
              defaultMessage: "New project",
              description: "Menu item that opens the local project creation flow from the composer project picker",
            })),
            (eC[42] = Q))
          : (Q = eC[42]),
        eC[43] !== K
          ? ((V = (0, l.jsx)(C.G.Action, { leftIconAsset: a.f, onClick: K, children: Q })), (eC[43] = K), (eC[44] = V))
          : (V = eC[44]))
      let tR = V
      ;((q = tj ? (0, l.jsx)(S.I, { className: "shrink-0", "aria-hidden": !1, asset: c.f }) : (tS ?? tb)),
        eC[45] !== q || eC[46] !== tN || eC[47] !== tx || eC[48] !== ez || eC[49] !== eD
          ? (($ = () =>
              (0, l.jsx)(r.m, {
                shortcut: eD,
                content: (0, l.jsx)(p.A, {
                  id: "composer.localCwdDropdown.tooltip",
                  defaultMessage: "Select project",
                  description: "Tooltip for the active project selector in the composer footer",
                }),
                children: (0, l.jsx)(ea.P, {
                  className: "min-w-0",
                  "data-composer-navigation-target": "workspace-project",
                  categoryLabel: null,
                  collapse: "none",
                  icon: (0, l.jsx)("span", { "data-clear-selector-icon": tx || void 0, children: q }),
                  indicator: "chevron",
                  value: ez ? null : tN,
                  valueClassName: "max-w-[240px] text-start",
                }),
              })),
            (eC[45] = q),
            (eC[46] = tN),
            (eC[47] = tx),
            (eC[48] = ez),
            (eC[49] = eD),
            (eC[50] = $))
          : ($ = eC[50]))
      let t_ = $,
        tL = "default"
      ;(e$ || null != tk || null != eD || (tL = "target-hidden"),
        eC[51] !== tN || eC[52] !== eW
          ? ((en = () =>
              (0, l.jsxs)("button", {
                className: (0, i.A)(
                  "heading-xl text-tertiary ms-2 -mt-1 flex min-w-0 items-center gap-1 font-normal transition-colors duration-basic hover:text-default select-none",
                  eW ? "cursor-default opacity-60" : "cursor-interaction",
                ),
                type: "button",
                disabled: eW,
                children: [
                  (0, l.jsx)("span", {
                    className: "inline-flex max-w-[420px] min-w-0 items-center",
                    children: (0, l.jsx)("span", { className: "min-w-0 truncate", children: tN }),
                  }),
                  (0, l.jsx)(M.A, { className: "icon-sm mt-1 shrink-0 self-center text-tertiary" }),
                ],
              })),
            (eC[51] = tN),
            (eC[52] = eW),
            (eC[53] = en))
          : (en = eC[53]))
      let tT = en
      if (tw && !eQ) {
        let e, t
        if (!td && null == eO) {
          let e, t
          eC[54] !== tp
            ? ((e = (e) => {
                e && tp("local")
              }),
              (eC[54] = tp),
              (eC[55] = e))
            : (e = eC[55])
          let o = tS ?? tb
          return (
            eC[56] !== eW ||
            eC[57] !== th ||
            eC[58] !== tA ||
            eC[59] !== tU ||
            eC[60] !== tL ||
            eC[61] !== tP ||
            eC[62] !== tM ||
            eC[63] !== e ||
            eC[64] !== o ||
            eC[65] !== e$
              ? ((t = (0, l.jsx)(ec.j, {
                  "aria-label": tP,
                  contentWidth: "menu",
                  disabled: eW,
                  foreground: tA,
                  menuOpen: !1,
                  onCloseAutoFocus: th,
                  onOpenChange: e,
                  icon: o,
                  subtleHover: e$,
                  tooltipContent: tU,
                  tooltipOpenWhen: tL,
                  value: tM,
                  children: null,
                })),
                (eC[56] = eW),
                (eC[57] = th),
                (eC[58] = tA),
                (eC[59] = tU),
                (eC[60] = tL),
                (eC[61] = tP),
                (eC[62] = tM),
                (eC[63] = e),
                (eC[64] = o),
                (eC[65] = e$),
                (eC[66] = t))
              : (t = eC[66]),
            t
          )
        }
        let o =
          eO ??
          (0, l.jsx)(r.m, {
            enabledWhen: tL,
            content: tU,
            children: (0, l.jsx)(ea.P, {
              tooltipEnabledWhen: tL,
              "aria-label": tP,
              categoryLabel: null,
              collapse: "xs",
              disabled: eW,
              foreground: tA,
              icon: tS ?? tb,
              indicator: "none",
              value: tM,
            }),
          })
        return (
          eC[67] !== eZ || eC[68] !== tp
            ? ((e = (e) => {
                e && (eZ ? tp("local") : tp("remote"))
              }),
              (eC[67] = eZ),
              (eC[68] = tp),
              (eC[69] = e))
            : (e = eC[69]),
          eC[70] !== o || eC[71] !== e
            ? ((t = (0, l.jsx)(b.Ab, { open: !1, onOpenChange: e, triggerButton: o, children: null })),
              (eC[70] = o),
              (eC[71] = e),
              (eC[72] = t))
            : (t = eC[72]),
          t
        )
      }
      if (e5 && e6.isLoading) {
        let e
        ;(eC[73] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)(p.A, {
              id: "chatgptConversations.composer.projectSelector.loading",
              defaultMessage: "Loading projects…",
              description: "Loading message for the cloud project section of the composer project picker",
            })),
            (eC[73] = e))
          : (e = eC[73]),
          (eu = e))
      } else if (e5 && e6.isError) {
        let e
        ;(eC[74] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)(p.A, {
              id: "chatgptConversations.composer.projectSelector.error",
              defaultMessage: "Projects couldn't be loaded",
              description: "Error message for the cloud project section of the composer project picker",
            })),
            (eC[74] = e))
          : (e = eC[74]),
          (eu = e))
      }
      ;(eC[75] !== tg ? ((em = tg ? [tg] : []), (eC[75] = tg), (eC[76] = em)) : (em = eC[76]),
        eC[77] !== tv ? ((ep = () => tv(!1)), (eC[77] = tv), (eC[78] = ep)) : (ep = eC[78]),
        eC[79] !== tm
          ? ((eh = (e) => {
              ;((e1.current = !0), tm(e))
            }),
            (eC[79] = tm),
            (eC[80] = eh))
          : (eh = eC[80]),
        eC[81] === Symbol.for("react.memo_cache_sentinel")
          ? ((ef = (0, l.jsx)(p.A, {
              id: "composer.localCwdDropdown.clearProject",
              defaultMessage: "Don't work in a project",
              description: "Menu item that clears the selected project and starts projectless tasks",
            })),
            (eC[81] = ef))
          : (ef = eC[81]))
      let tD = tx ? tf : void 0,
        tO = eE && eZ ? tR : null
      ;(eC[82] !== td || eC[83] !== tp
        ? ((eg = td ? () => tp("remote") : void 0), (eC[82] = td), (eC[83] = tp), (eC[84] = eg))
        : (eg = eC[84]),
        eC[85] !== eu ||
        eC[86] !== e8 ||
        eC[87] !== em ||
        eC[88] !== ep ||
        eC[89] !== eh ||
        eC[90] !== tD ||
        eC[91] !== tO ||
        eC[92] !== eg
          ? ((ej = (0, l.jsx)(Y, {
              groups: e8,
              selectedProjectIds: em,
              onRequestClose: ep,
              onSelectProjectId: eh,
              projectlessActionLabel: ef,
              onSelectProjectless: tD,
              footerItems: tO,
              onAddRemoteProject: eg,
              emptyMessage: eu,
            })),
            (eC[85] = eu),
            (eC[86] = e8),
            (eC[87] = em),
            (eC[88] = ep),
            (eC[89] = eh),
            (eC[90] = tD),
            (eC[91] = tO),
            (eC[92] = eg),
            (eC[93] = ej))
          : (ej = eC[93]))
      let tF = ej
      if (eQ) return tF
      if ("home" === eH && null == eO) {
        let e, t, o, n
        eC[94] !== tx || eC[95] !== tf || eC[96] !== eV
          ? ((e = tx
              ? {
                  label: eV.formatMessage({
                    id: "composer.localCwdDropdown.clearProject",
                    defaultMessage: "Don't work in a project",
                    description: "Menu item that clears the selected project and starts projectless tasks",
                  }),
                  onClear: tf,
                }
              : void 0),
            (eC[94] = tx),
            (eC[95] = tf),
            (eC[96] = eV),
            (eC[97] = e))
          : (e = eC[97])
        let s = tS ?? tb
        return (
          eC[98] !== eW ||
          eC[99] !== tF ||
          eC[100] !== tv ||
          eC[101] !== th ||
          eC[102] !== tA ||
          eC[103] !== tU ||
          eC[104] !== tL ||
          eC[105] !== tP ||
          eC[106] !== tM ||
          eC[107] !== tI ||
          eC[108] !== e ||
          eC[109] !== s ||
          eC[110] !== e$
            ? ((t = (0, l.jsx)(ec.j, {
                "aria-label": tP,
                disabled: eW,
                foreground: tA,
                menuOpen: tI,
                clearAction: e,
                onCloseAutoFocus: th,
                onOpenChange: tv,
                icon: s,
                subtleHover: e$,
                tooltipContent: tU,
                tooltipOpenWhen: tL,
                value: tM,
                children: tF,
              })),
              (eC[98] = eW),
              (eC[99] = tF),
              (eC[100] = tv),
              (eC[101] = th),
              (eC[102] = tA),
              (eC[103] = tU),
              (eC[104] = tL),
              (eC[105] = tP),
              (eC[106] = tM),
              (eC[107] = tI),
              (eC[108] = e),
              (eC[109] = s),
              (eC[110] = e$),
              (eC[111] = t))
            : (t = eC[111]),
          eC[112] !== tC ? ((o = tC && (0, l.jsx)(E.v, { roots: tC })), (eC[112] = tC), (eC[113] = o)) : (o = eC[113]),
          eC[114] !== t || eC[115] !== o
            ? ((n = (0, l.jsxs)(l.Fragment, { children: [t, o] })), (eC[114] = t), (eC[115] = o), (eC[116] = n))
            : (n = eC[116]),
          n
        )
      }
      let tE = "hero" === eH ? "center" : "start"
      ;(eC[117] !== t_ || eC[118] !== tT || eC[119] !== eO || eC[120] !== eH
        ? ((ex = eO ?? ("hero" === eH ? tT() : t_())),
          (eC[117] = t_),
          (eC[118] = tT),
          (eC[119] = eO),
          (eC[120] = eH),
          (eC[121] = ex))
        : (ex = eC[121]),
        eC[122] !== eW ||
        eC[123] !== tF ||
        eC[124] !== tv ||
        eC[125] !== th ||
        eC[126] !== tI ||
        eC[127] !== tE ||
        eC[128] !== ex
          ? ((eI = (0, l.jsx)(C.A, {
              open: tI,
              onOpenChange: tv,
              onCloseAutoFocus: th,
              side: "top",
              align: tE,
              disabled: eW,
              triggerButton: ex,
              contentWidth: "workspace",
              contentMaxHeight: "tall",
              children: tF,
            })),
            (eC[122] = eW),
            (eC[123] = tF),
            (eC[124] = tv),
            (eC[125] = th),
            (eC[126] = tI),
            (eC[127] = tE),
            (eC[128] = ex),
            (eC[129] = eI))
          : (eI = eC[129]))
      let tB = eI
      return (
        eC[130] !== tx ||
        eC[131] !== eW ||
        eC[132] !== tB ||
        eC[133] !== tf ||
        eC[134] !== eV ||
        eC[135] !== tI ||
        eC[136] !== eO ||
        eC[137] !== eH
          ? ((ev =
              "default" === eH && tx && null == eO
                ? (0, l.jsx)(er.H, {
                    clearLabel: eV.formatMessage({
                      id: "composer.localCwdDropdown.clearProject",
                      defaultMessage: "Don't work in a project",
                      description: "Menu item that clears the selected project and starts projectless tasks",
                    }),
                    disabled: eW,
                    menuOpen: tI,
                    onClear: tf,
                    children: tB,
                  })
                : tB),
            (eC[130] = tx),
            (eC[131] = eW),
            (eC[132] = tB),
            (eC[133] = tf),
            (eC[134] = eV),
            (eC[135] = tI),
            (eC[136] = eO),
            (eC[137] = eH),
            (eC[138] = ev))
          : (ev = eC[138]),
        eC[139] !== tC ? ((ew = tC && (0, l.jsx)(E.v, { roots: tC })), (eC[139] = tC), (eC[140] = ew)) : (ew = eC[140]),
        eC[141] !== ev || eC[142] !== ew
          ? ((ek = (0, l.jsxs)(l.Fragment, { children: [ev, ew] })), (eC[141] = ev), (eC[142] = ew), (eC[143] = ek))
          : (ek = eC[143]),
        ek
      )
    }
  },
  zrLs(e, t, o) {
    o.d(t, { i: () => eC })
    var l = o("ABep"),
      n = o("zTeN"),
      s = o("OMIV"),
      r = o("QosV"),
      a = o("KUdL"),
      c = o.n(a),
      i = o("zd8w"),
      d = o("Wf1j"),
      u = o("oyxz"),
      m = o("HZfM"),
      p = o("fHsr"),
      h = o("tl5a"),
      f = o("j9xU"),
      g = o("bqtn"),
      j = o("bVeK"),
      x = o("nluz"),
      I = o("GrNd"),
      v = o("m8VT"),
      w = o("pki7"),
      k = o("wsIu"),
      C = o("kdqP"),
      b = o("kx7U"),
      S = o("Sd8U"),
      y = o("o4oB"),
      M = o("ndjw"),
      A = o("kfGJ"),
      U = o("knz1"),
      P = o("TSib"),
      N = o("eyOG"),
      R = o("w487"),
      _ = o("AVEN"),
      L = o("ckTT"),
      T = o("Tfl2"),
      D = o("ypxs"),
      O = o("uZvu"),
      F = o("KjMy"),
      E = o("LMc0"),
      B = o("fOeo"),
      Z = o("Qgfj"),
      G = o("Lhpx"),
      W = o("HOLv"),
      z = o("UlP1"),
      H = o("T9N0"),
      K = o("o2hF"),
      Q = o("tz0P"),
      V = o("OWtl"),
      Y = o("Oj9r"),
      q = o("fnPc"),
      J = o("nlQE"),
      X = o("zx49"),
      $ = o("EH2H")
    let ee = (e, t) => {
        let o = (0, G.ZQ)(e) ?? "top",
          l = "top" === o ? e.ownerDocument.defaultView?.visualViewport : void 0,
          n = e.getBoundingClientRect().top - e.ownerDocument.documentElement.getBoundingClientRect().top
        return { side: o, align: "start", sideOffset: null == l ? 1 : Math.max(1, (n - l.pageTop - l.height + 6) / t) }
      },
      et = (0, n.un)(V.u, ({ get: e }) => !e(b.kj) && e(b.u8)?.length === 0)
    function eo(e) {
      let t,
        o,
        s,
        a,
        c,
        p,
        h,
        f,
        x,
        I,
        v,
        w = (0, r.c)(71),
        {
          selection: k,
          presentation: C,
          onLocalSelected: b,
          localDisabledReason: S,
          onRemoteSelected: M,
          cloud: U,
          remoteItems: P,
          remoteItemsEmpty: N,
          open: R,
          onOpenChange: _,
          disabled: L,
          modal: Z,
          hideExecutionSelector: G,
          onCloseAutoFocus: V,
        } = e,
        eo = void 0 === C ? "inline" : C,
        er = void 0 !== G && G,
        ea = (0, n.gh)(Y.GD),
        ec = (0, d.A)(),
        ei = (0, m.Zp)(),
        [ed, eu] = (0, i.useState)(""),
        [em, ep] = (0, i.useState)(!1),
        eh = (0, i.useRef)(!1),
        ef = (0, i.useRef)(null),
        eg = (0, i.useRef)(null),
        ej = k.kind,
        ex = "cloud" === ej && null == k.name && U?.defaultSelected === !0
      w[0] !== U?.onBlankSelected || w[1] !== ec || w[2] !== ed
        ? ((t = ec.formatMessage(es.defaultEnvironment)),
          (o = U?.onBlankSelected != null && t.toLocaleLowerCase().includes(ed.trim().toLocaleLowerCase())),
          (w[0] = U?.onBlankSelected),
          (w[1] = ec),
          (w[2] = ed),
          (w[3] = t),
          (w[4] = o))
        : ((t = w[3]), (o = w[4]))
      let eI = o,
        ev = L || ("cloud" === ej && null == b && null == P),
        ew = (0, n.Ul)(null == N && "remote" === ej && "target" === R ? et : null),
        ek = "remote" === ej && (N ?? ew)
      w[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = (0, l.jsx)(u.A, {
            id: "composer.newTask.thisComputer",
            defaultMessage: "This computer",
            description: "Run a new task on this computer",
          })),
          (w[5] = s))
        : (s = w[5])
      let eC = s
      w[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = (0, l.jsx)(u.A, {
            id: "composer.newTask.cloud",
            defaultMessage: "Cloud",
            description: "Cloud execution environments for a new task",
          })),
          (w[6] = a))
        : (a = w[6])
      let eb = a
      w[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = (0, l.jsx)(u.A, {
            id: "composer.newTask.remote",
            defaultMessage: "Remote",
            description: "Remote machines for running a new task",
          })),
          (w[7] = c))
        : (c = w[7])
      let eS = c,
        ey = B.g,
        eM = eC
      ;("cloud" === ej ? ((ey = T.f), (eM = eb)) : "remote" === ej && ((ey = F.b), (eM = eS)),
        w[8] !== U?.computerItems || w[9] !== ec || w[10] !== ej
          ? ((p =
              "remote" === ej || U?.computerItems != null
                ? ec.formatMessage({
                    id: "composer.newTask.remoteComputer",
                    defaultMessage: "Select computer",
                    description: "Picker for the remote computer that will run a new task",
                  })
                : ec.formatMessage({
                    id: "composer.newTask.cloudEnvironment",
                    defaultMessage: "Select environment",
                    description: "Picker for the cloud environment that will run a new task",
                  })),
            (w[8] = U?.computerItems),
            (w[9] = ec),
            (w[10] = ej),
            (w[11] = p))
          : (p = w[11]))
      let eA = p,
        eU = k.name
      if (null == eU)
        if ("remote" === ej) {
          let e
          ;(w[12] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)(u.A, {
                id: "composer.newTask.chooseRemote",
                defaultMessage: "Choose remote",
                description: "Prompt in the execution picker when no remote computer is selected",
              })),
              (w[12] = e))
            : (e = w[12]),
            (eU = e))
        } else if (ex) {
          let e
          ;(w[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)(u.A, { ...es.defaultEnvironment })), (w[13] = e))
            : (e = w[13]),
            (eU = e))
        } else {
          let e
          ;(w[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)(u.A, {
                id: "composer.newTask.chooseEnvironment",
                defaultMessage: "Choose environment",
                description: "Prompt in the execution picker when no cloud environment is selected",
              })),
              (w[14] = e))
            : (e = w[14]),
            (eU = e))
        }
      if ("remote" === ej) {
        let e
        ;(w[15] !== ec
          ? ((e = ec.formatMessage({
              id: "composer.newTask.searchRemotes",
              defaultMessage: "Search remote computers",
              description: "Search field in the new task remote computer picker",
            })),
            (w[15] = ec),
            (w[16] = e))
          : (e = w[16]),
          (h = e))
      } else if (U?.computerItems != null) {
        let e
        ;(w[17] !== ec
          ? ((e = ec.formatMessage({
              id: "composer.newTask.searchComputers",
              defaultMessage: "Search computers",
              description: "Search field in the new task team computer picker",
            })),
            (w[17] = ec),
            (w[18] = e))
          : (e = w[18]),
          (h = e))
      } else {
        let e
        ;(w[19] !== ec
          ? ((e = ec.formatMessage({
              id: "composer.newTask.searchEnvironments",
              defaultMessage: "Search environments",
              description: "Search field in the new task cloud environment picker",
            })),
            (w[19] = ec),
            (w[20] = e))
          : (e = w[20]),
          (h = e))
      }
      w[21] !== U || w[22] !== ej || w[23] !== _ || w[24] !== ea
        ? ((f = function (e, t) {
            ;("target" === e && "cloud" === ej && null != U && null == U.computerItems && (0, Q.Nb)(ea).catch(en),
              eu(""),
              _((o) => (null == e && null != t && o !== t ? o : e)))
          }),
          (w[21] = U),
          (w[22] = ej),
          (w[23] = _),
          (w[24] = ea),
          (w[25] = f))
        : (f = w[25])
      let eP = f
      return (
        w[26] !== U ||
        w[27] !== ev ||
        w[28] !== er ||
        w[29] !== ey ||
        w[30] !== ec ||
        w[31] !== ej ||
        w[32] !== eM ||
        w[33] !== S ||
        w[34] !== Z ||
        w[35] !== V ||
        w[36] !== b ||
        w[37] !== M ||
        w[38] !== R ||
        w[39] !== eo ||
        w[40] !== P ||
        w[41] !== k.kind ||
        w[42] !== k.name ||
        w[43] !== eP
          ? ((x = er
              ? null
              : (0, l.jsxs)(g.Ab, {
                  disabled: ev,
                  modal: Z,
                  open: "location" === R,
                  onOpenChange: (e) => eP(e ? "location" : null, "location"),
                  onCloseAutoFocus: (e) => {
                    ;("target" === R && e.preventDefault(), V?.(e))
                  },
                  side: "top",
                  align: "start",
                  contentWidth: "panel",
                  triggerButton: (0, l.jsx)(X.P, {
                    ref: ef,
                    "aria-label": ec.formatMessage({
                      id: "composer.newTask.workIn",
                      defaultMessage: "Work in",
                      description: "Menu for choosing where a new task executes",
                    }),
                    disabled: ev,
                    categoryLabel: null,
                    presentation: "settings" === eo ? "menu" : eo,
                    menuCategoryLabel:
                      "settings" === eo
                        ? (0, l.jsx)($.X, {})
                        : (0, l.jsx)(u.A, {
                            id: "composer.newTask.options.computer",
                            defaultMessage: "Computer",
                            description: "Label for the computer selector in the compact task options menu",
                          }),
                    collapse: "xs",
                    icon: (0, l.jsx)(W.I, { asset: ey, alignment: "primary" }),
                    indicator: "chevron",
                    value: eM,
                    valueClassName: "max-w-40",
                  }),
                  children: [
                    (0, l.jsx)(g.ms.SectionLabel, {
                      children: (0, l.jsx)(u.A, {
                        id: "composer.newTask.workIn",
                        defaultMessage: "Work in",
                        description: "Menu for choosing where a new task executes",
                      }),
                    }),
                    null != b
                      ? (0, l.jsx)(g.ms.Item, {
                          LeftIcon: j.gkn,
                          RightIcon: "local" === k.kind ? j.ALZ : void 0,
                          disabled: null != S,
                          tooltipText: S,
                          onSelect: "local" === ej ? void 0 : b,
                          children: eC,
                        })
                      : null,
                    null != U
                      ? (0, l.jsx)(g.ms.Item, {
                          LeftIcon: j.LL7,
                          RightIcon: "cloud" === k.kind ? j.ALZ : void 0,
                          onSelect: "cloud" === ej && null != k.name ? void 0 : (U.onDefaultSelected ?? U.onSelected),
                          children: eb,
                        })
                      : null,
                    null != P
                      ? (0, l.jsx)(g.ms.Item, {
                          LeftIcon: j.ZEl,
                          RightIcon: "remote" === k.kind ? j.ALZ : void 0,
                          onSelect: "remote" === ej && null != k.name ? void 0 : M,
                          children: eS,
                        })
                      : null,
                  ],
                })),
            (w[26] = U),
            (w[27] = ev),
            (w[28] = er),
            (w[29] = ey),
            (w[30] = ec),
            (w[31] = ej),
            (w[32] = eM),
            (w[33] = S),
            (w[34] = Z),
            (w[35] = V),
            (w[36] = b),
            (w[37] = M),
            (w[38] = R),
            (w[39] = eo),
            (w[40] = P),
            (w[41] = k.kind),
            (w[42] = k.name),
            (w[43] = eP),
            (w[44] = x))
          : (x = w[44]),
        w[45] !== U ||
        w[46] !== em ||
        w[47] !== t ||
        w[48] !== L ||
        w[49] !== ex ||
        w[50] !== ek ||
        w[51] !== ej ||
        w[52] !== Z ||
        w[53] !== ei ||
        w[54] !== V ||
        w[55] !== R ||
        w[56] !== eo ||
        w[57] !== P ||
        w[58] !== ea ||
        w[59] !== h ||
        w[60] !== ed ||
        w[61] !== k.kind ||
        w[62] !== k.name ||
        w[63] !== eP ||
        w[64] !== eI ||
        w[65] !== eA ||
        w[66] !== eU
          ? ((I =
              "local" !== ej && ("cloud" !== ej || U?.allowEnvironments !== !1)
                ? (0, l.jsx)(J.H, {
                    clearLabel: t,
                    disabled: L,
                    menuOpen: null != R,
                    onClear: "cloud" === ej && null != k.name && "inline" === eo ? U?.onBlankSelected : void 0,
                    children: (0, l.jsxs)(g.Ab, {
                      disabled: L,
                      modal: Z,
                      open: "target" === R,
                      onOpenChange: (e) => {
                        ;(e || !em) && eP(e ? "target" : null, "target")
                      },
                      onInteractOutside: (e) => {
                        em && e.preventDefault()
                      },
                      onOpenAutoFocus: (e) => {
                        if (!(e.target instanceof HTMLElement)) return
                        let t = eh.current ? e.target : e.target.querySelector("input")
                        null != t && (t.focus({ preventScroll: !0 }), e.preventDefault())
                      },
                      onCloseAutoFocus: (e) => {
                        ;("location" === R && e.preventDefault(), V?.(e))
                        let t = ef.current
                        !e.defaultPrevented &&
                          !eg.current?.isConnected &&
                          t?.isConnected &&
                          !t.disabled &&
                          t.ownerDocument.activeElement === t.ownerDocument.body &&
                          (e.preventDefault(), t.focus({ preventScroll: !0 }))
                      },
                      side: "top",
                      align: "start",
                      getPlacement: ee,
                      contentWidth: "panel",
                      triggerButton: (0, l.jsx)(X.P, {
                        ref: eg,
                        "aria-label": eA,
                        onPointerDownCapture: (e) => {
                          eh.current = "touch" === e.pointerType
                        },
                        onKeyDownCapture: () => {
                          eh.current = !1
                        },
                        disabled: L,
                        categoryLabel: null,
                        presentation: "settings" === eo ? "menu" : eo,
                        collapse: "xs",
                        icon: (0, l.jsx)("span", {
                          className: "inline-flex shrink-0",
                          "data-clear-selector-icon": !0,
                          children: (0, l.jsx)(W.I, {
                            className: ex ? void 0 : "translate-y-px",
                            asset: ex ? D.n : E.t,
                            alignment: "primary",
                          }),
                        }),
                        indicator: "chevron",
                        value: eU,
                        valueClassName: "max-w-40",
                      }),
                      children: [
                        ek
                          ? null
                          : (0, l.jsxs)("div", {
                              className: "contents",
                              ref: el,
                              children: [
                                (0, l.jsx)(g.ms.SearchInput, {
                                  autoFocus: !1,
                                  "aria-label": h,
                                  placeholder: h,
                                  value: ed,
                                  onChange: (e) => eu(e.target.value),
                                }),
                                (0, l.jsx)(g.ms.Separator, {}),
                              ],
                            }),
                        "remote" === ej ? P?.(ed) : null,
                        "cloud" === ej ? U?.computerItems?.(ed, ep) : null,
                        "cloud" === ej && null != U && null == U.computerItems
                          ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                eI
                                  ? (0, l.jsx)(g.ms.Item, {
                                      leftIconAsset: D.n,
                                      RightIcon: ex ? j.ALZ : void 0,
                                      onSelect: U.onBlankSelected,
                                      children: t,
                                    })
                                  : null,
                                (0, l.jsx)(z.g, {
                                  children: (0, l.jsx)(K.i, {
                                    searchQuery: ed,
                                    showEmptyState: !eI,
                                    isSelectionActive: "cloud" === k.kind,
                                    selection: U.environmentSelection,
                                    onSelected: U.onSelected,
                                  }),
                                }),
                                (0, l.jsx)(g.ms.Separator, {}),
                                (0, l.jsx)(g.ms.Item, {
                                  LeftIcon: j.xFs,
                                  onSelect: () => (0, H.h)(ea, { project: ea.get(y.S) }),
                                  children: (0, l.jsx)(u.A, {
                                    id: "composer.newTask.createEnvironment",
                                    defaultMessage: "Create environment",
                                    description: "Create a cloud execution environment",
                                  }),
                                }),
                                (0, l.jsx)(l.Fragment, {
                                  children: (0, l.jsx)(g.ms.Item, {
                                    leftIconAsset: O.T,
                                    onSelect: () => {
                                      ;(eP(null), (0, q.a)(ea, A.fI), ei("/settings/local-environments"))
                                    },
                                    children: (0, l.jsx)(u.A, {
                                      id: "composer.newTask.manageEnvironments",
                                      defaultMessage: "Manage environments",
                                      description: "Menu action that opens the Cloud environments settings page",
                                    }),
                                  }),
                                }),
                              ],
                            })
                          : null,
                      ],
                    }),
                  })
                : null),
            (w[45] = U),
            (w[46] = em),
            (w[47] = t),
            (w[48] = L),
            (w[49] = ex),
            (w[50] = ek),
            (w[51] = ej),
            (w[52] = Z),
            (w[53] = ei),
            (w[54] = V),
            (w[55] = R),
            (w[56] = eo),
            (w[57] = P),
            (w[58] = ea),
            (w[59] = h),
            (w[60] = ed),
            (w[61] = k.kind),
            (w[62] = k.name),
            (w[63] = eP),
            (w[64] = eI),
            (w[65] = eA),
            (w[66] = eU),
            (w[67] = I))
          : (I = w[67]),
        w[68] !== I || w[69] !== x
          ? ((v = (0, l.jsxs)(l.Fragment, { children: [x, I] })), (w[68] = I), (w[69] = x), (w[70] = v))
          : (v = w[70]),
        v
      )
    }
    function el(e) {
      if (null != e)
        return () => {
          let t = e.querySelector("input")
          null != t && t === t.ownerDocument.activeElement && g.ms.focusMenuItem(t, "next")
        }
    }
    function en() {}
    let es = (0, Z.YK)({
      defaultEnvironment: {
        id: "composer.newTask.blankEnvironment",
        defaultMessage: "Default environment",
        description:
          "Menu option and selected value when a new cloud chat will use a default environment without a saved configuration",
      },
    })
    var er = o("arTB"),
      ea = o("iRaF"),
      ec = o("pJpO"),
      ei = o("Cybu")
    function ed(e) {
      let t,
        o,
        s,
        a,
        c,
        h,
        v,
        w,
        b,
        T,
        D = (0, r.c)(55),
        { presentation: O } = e,
        F = void 0 === O ? "inline" : O,
        E = (0, n.gh)(S.PR),
        B = (0, d.A)(),
        Z = (0, m.Zp)(),
        G = (0, n.Ul)(L.XO),
        W = (0, n.Ul)(L.m4),
        z = (0, n.Ul)(f.s8),
        H = (0, n.Ul)(y.S),
        K = (0, n._U)(M.g, H),
        Q = (0, n.Ul)(null),
        V = (0, n.Ul)(null),
        Y = null == Q && z && H?.type === "remote",
        q = (0, n.Ul)(ec.tS),
        J = (0, n.Ul)(ec.PF),
        X = (0, n.Ul)(er.H$),
        $ = q?.hostId ?? (Y && X?.kind === "remote" ? X.hostId : null),
        ee = (0, n._U)(M.fm, $ ?? A.fI),
        et = (0, n.Ul)(L.G8),
        el = (0, n.Ul)(f.Vy),
        en = (0, n.Ul)(ec.Os),
        es = (0, n._U)(et && null == Q ? x.NU : null, H),
        ei = (0, n._U)(et && null == Q ? x.IC : null, H),
        ed = (0, n._U)(null, { accountId: Q?.accountId ?? "", teamId: Q?.teamId ?? "" })?.data,
        eu = (0, n._U)(x.y_, H),
        ep = (0, n.Ul)(ec.aZ)
      ;(D[0] !== E
        ? ((t = () => () => {
            ;(0, I.B6)(E)
          }),
          (o = [E]),
          (D[0] = E),
          (D[1] = t),
          (D[2] = o))
        : ((t = D[1]), (o = D[2])),
        (0, i.useEffect)(t, o),
        D[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = { kind: (0, L.CC)() ? "local" : "cloud" }), (D[3] = s))
          : (s = D[3]))
      let eh = s
      if (en) {
        let e,
          t = null == Q ? eu?.name : void 0
        if (null != Q && !V && 0 === Q.environmentIds.length) {
          let e
          ;(D[4] !== B
            ? ((e = B.formatMessage({
                id: "composer.newTask.noTeamComputer",
                defaultMessage: "No computer",
                description:
                  "Selected value in the new team chat computer picker when chatting without a connected computer",
              })),
              (D[4] = B),
              (D[5] = e))
            : (e = D[5]),
            (t = e))
        }
        if (null != Q && null == t) {
          let e,
            o = Q.environmentIds
          ;(D[6] !== o?.[0] || D[7] !== o?.length || D[8] !== B || D[9] !== ed
            ? ((e =
                (o?.length ?? 0) > 1
                  ? B.formatMessage(
                      {
                        id: "composer.newTask.selectedExecutors",
                        defaultMessage: "{count} computers",
                        description: "Number of registered computers selected for a new Cloud task",
                      },
                      { count: o?.length },
                    )
                  : ed?.find((e) => e.environmentId === o?.[0])?.displayName),
              (D[6] = o?.[0]),
              (D[7] = o?.length),
              (D[8] = B),
              (D[9] = ed),
              (D[10] = e))
            : (e = D[10]),
            (t = e))
        }
        ;(D[11] !== t ? ((e = { kind: "cloud", name: t }), (D[11] = t), (D[12] = e)) : (e = D[12]), (eh = e))
      } else if (J) {
        let e,
          t = ee.id === $ ? ee.display_name : void 0
        ;(D[13] !== t ? ((e = { kind: "remote", name: t }), (D[13] = t), (D[14] = e)) : (e = D[14]), (eh = e))
      }
      D[15] !== K[0] || D[16] !== E
        ? ((a = function (e) {
            e || ((0, I.B6)(E), (0, ec.CQ)(E, null))
            let t = K[0],
              o = (0, U.zp)({ hostId: A.fI, cwd: t })
            ;(e
              ? ((0, _.f)(E), (0, P.pX)(E, "local"))
              : (0, P.GY)(E, o, null == o ? "local" : ((0, U.IA)(E, o) ?? "local")),
              (0, er.CL)(E, { kind: e ? "cloud" : "local" }))
          }),
          (D[15] = K[0]),
          (D[16] = E),
          (D[17] = a))
        : (a = D[17])
      let eg = a
      D[18] !== E || D[19] !== eg
        ? ((c = () => {
            let { workspaces: e, isPending: t } = E.get(ec.Yj),
              o = e.filter((e) => null == E.get(C.e, e.hostId))
            if (t || 0 === e.length) return
            if (0 === o.length) {
              ;(0, L.CC)() && E.get(ec.PF) && eg(!1)
              return
            }
            let l = E.get(ec.tS)?.hostId,
              n = o[o.findIndex((e) => e.hostId === l) + 1] ?? ((0, L.CC)() ? void 0 : o[0])
            null == n ? eg(!1) : ((0, I.B6)(E), (0, ec.CQ)(E, n.hostId), ef(E, n.hostId, n.rootPaths[0]))
          }),
          (D[18] = E),
          (D[19] = eg),
          (D[20] = c))
        : (c = D[20])
      let ej = G && !Y && !en
      return (
        D[21] !== ej ? ((h = { enabled: ej }), (D[21] = ej), (D[22] = h)) : (h = D[22]),
        (0, R.Kr)("composer.cycleHost", c, h),
        D[23] !== es ||
        D[24] !== et ||
        D[25] !== el ||
        D[26] !== ei ||
        D[27] !== Z ||
        D[28] !== ep ||
        D[29] !== F ||
        D[30] !== H ||
        D[31] !== G ||
        D[32] !== Y ||
        D[33] !== E ||
        D[34] !== eg ||
        D[35] !== eh ||
        D[36] !== W ||
        D[37] !== Q
          ? ((v = Y
              ? null
              : (0, l.jsx)(eo, {
                  presentation: F,
                  selection: eh,
                  hideExecutionSelector: null != Q,
                  disabled: !(0, L.CC)() && !et && !(G && null == Q),
                  open: ep,
                  onOpenChange: (e) => E.set(ec.aZ, "function" == typeof e ? e(E.get(ec.aZ)) : e),
                  onLocalSelected: (0, L.CC)() ? () => eg(!1) : void 0,
                  onRemoteSelected: G
                    ? () => {
                        ;((0, I.B6)(E),
                          (0, ec.It)(E).then((e) => {
                            let t = E.get(ec.tS)?.workspace
                            e && null != t && ef(E, t.hostId, t.rootPaths[0])
                          }))
                      }
                    : void 0,
                  cloud: et
                    ? {
                        defaultSelected: !0 === es && (null == H || !0 === ei),
                        allowEnvironments: null != Q || el,
                        computerItems: void 0,
                        onSelected: () => eg(!0),
                        onBlankSelected: es ? () => (0, ea.ZR)(E, H) : void 0,
                        onDefaultSelected: () => {
                          ;(eg(!0), el && null == Q && !E.get(x.IC, H) && (0, I.vE)(E))
                        },
                      }
                    : void 0,
                  remoteItems: G
                    ? (e) =>
                        (0, l.jsxs)(l.Fragment, {
                          children: [
                            (0, l.jsx)(k.Y, {
                              className: "vertical-scroll-fade-mask [--edge-fade-distance:1.5rem]",
                              children: (0, l.jsx)(em, { searchQuery: e }),
                            }),
                            null != W
                              ? (0, l.jsxs)(l.Fragment, {
                                  children: [
                                    (0, l.jsx)(g.ms.Separator, {}),
                                    (0, l.jsx)(g.ms.Item, {
                                      LeftIcon: j.xFs,
                                      onSelect: () => void Z(W),
                                      children: (0, l.jsx)(u.A, {
                                        id: "composer.newTask.addComputer",
                                        defaultMessage: "Add computer",
                                        description: "Open connection settings to add a remote computer",
                                      }),
                                    }),
                                  ],
                                })
                              : null,
                          ],
                        })
                    : void 0,
                })),
            (D[23] = es),
            (D[24] = et),
            (D[25] = el),
            (D[26] = ei),
            (D[27] = Z),
            (D[28] = ep),
            (D[29] = F),
            (D[30] = H),
            (D[31] = G),
            (D[32] = Y),
            (D[33] = E),
            (D[34] = eg),
            (D[35] = eh),
            (D[36] = W),
            (D[37] = Q),
            (D[38] = v))
          : (v = D[38]),
        D[39] !== en || D[40] !== G || D[41] !== $ || D[42] !== Y || D[43] !== K[0] || D[44] !== eh
          ? ((w =
              !en && G && null != $ && Y
                ? (0, l.jsx)(N.R, {
                    hostId: $,
                    connectionDisplayName: eh.name ?? null,
                    projectPath: K[0] ?? null,
                    showDisabledState: !0,
                  })
                : null),
            (D[39] = en),
            (D[40] = G),
            (D[41] = $),
            (D[42] = Y),
            (D[43] = K[0]),
            (D[44] = eh),
            (D[45] = w))
          : (w = D[45]),
        D[46] !== en || D[47] !== G || D[48] !== $ || D[49] !== Y
          ? ((b = en || !G || null == $ || Y ? null : (0, l.jsx)(p.r0, { hostId: $, showDisabledState: !0 })),
            (D[46] = en),
            (D[47] = G),
            (D[48] = $),
            (D[49] = Y),
            (D[50] = b))
          : (b = D[50]),
        D[51] !== w || D[52] !== b || D[53] !== v
          ? ((T = (0, l.jsxs)(l.Fragment, { children: [v, w, b] })), (D[51] = w), (D[52] = b), (D[53] = v), (D[54] = T))
          : (T = D[54]),
        T
      )
    }
    function eu(e) {
      let t,
        o = (0, r.c)(2),
        { hostId: s } = e,
        a = (0, n._U)(h.y2, s)
      return (o[0] !== a ? ((t = (0, l.jsx)(p.Tn, { state: a })), (o[0] = a), (o[1] = t)) : (t = o[1]), t)
    }
    function em(e) {
      let t,
        o,
        s = (0, r.c)(8),
        { searchQuery: a } = e,
        i = (0, m.Zp)(),
        d = (0, n.Ul)(L.m4),
        p = (0, n.Ul)(b.u8),
        h = (0, n.Ul)(f.s8),
        j = (0, n.Ul)(y.S),
        x = (0, n.Ul)(ec.tS),
        I = p?.filter((e) => e.autoConnect && (!h || j?.type !== "remote" || e.hostId === x?.hostId)),
        w = (0, n._U)(ei.P5, "ssh"),
        k = a.trim().toLocaleLowerCase(),
        C =
          null == I
            ? void 0
            : c()(I, (e) => {
                let t = w.indexOf(e.hostId)
                return t < 0 ? 1 / 0 : t
              }).filter((e) => (e.displayName ?? e.hostId).toLocaleLowerCase().includes(k)),
        S = null == I ? (0, l.jsx)(v.h, {}) : null
      s[0] !== p?.length
        ? ((t =
            p?.length === 0
              ? (0, l.jsx)(g.ms.Message, {
                  compact: !0,
                  children: (0, l.jsx)(u.A, {
                    id: "composer.newTask.noComputers",
                    defaultMessage: "No remote computers added",
                    description: "No remote computers are configured in this app",
                  }),
                })
              : null),
          (s[0] = p?.length),
          (s[1] = t))
        : (t = s[1])
      let M =
          null != d && null != p && p.length > 0 && I?.length === 0
            ? (0, l.jsx)(g.ms.Item, {
                onSelect: () => void i(d),
                children: (0, l.jsx)(u.A, {
                  id: "composer.newTask.enableComputers",
                  defaultMessage: "Enable computers in Settings",
                  description: "Open connection settings when all configured remote computers are disabled",
                }),
              })
            : null,
        A =
          null != I && I.length > 0 && C?.length === 0
            ? (0, l.jsx)(g.ms.Message, {
                compact: !0,
                children: (0, l.jsx)(u.A, {
                  id: "composer.newTask.noMatchingRemotes",
                  defaultMessage: "No matching remote computers",
                  description: "No available remote computers match the task picker search",
                }),
              })
            : null,
        U = C?.map(ep)
      return (
        s[2] !== S || s[3] !== t || s[4] !== M || s[5] !== A || s[6] !== U
          ? ((o = (0, l.jsxs)(l.Fragment, { children: [S, t, M, A, U] })),
            (s[2] = S),
            (s[3] = t),
            (s[4] = M),
            (s[5] = A),
            (s[6] = U),
            (s[7] = o))
          : (o = s[7]),
        o
      )
    }
    function ep(e) {
      return (0, l.jsx)(eh, { connection: e }, e.hostId)
    }
    function eh(e) {
      let t,
        o,
        s,
        a,
        c,
        i = (0, r.c)(25),
        { connection: d } = e,
        m = (0, n.gh)(S.PR),
        { workspaces: p, isPending: f } = (0, n.Ul)(ec.Yj),
        x = (0, n.Ul)(ec.tS),
        v = (0, n._U)(h.y2, d.hostId),
        k = (0, n._U)(C.e, d.hostId)
      if (i[0] !== d.hostId || i[1] !== p) {
        let e
        ;(i[3] !== d.hostId ? ((e = (e) => e.hostId === d.hostId), (i[3] = d.hostId), (i[4] = e)) : (e = i[4]),
          (t = p.find(e)),
          (i[0] = d.hostId),
          (i[1] = p),
          (i[2] = t))
      } else t = i[2]
      let b = t,
        y = "connected" === v && !f && null == b
      if (null == b)
        if ("disconnected" === v || "error" === v) {
          let e
          ;(i[5] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)(u.A, {
                id: "composer.newTask.computerOffline",
                defaultMessage: "Computer is offline",
                description: "Remote computer is not connected",
              })),
              (i[5] = e))
            : (e = i[5]),
            (o = e))
        } else if (f) {
          let e
          ;(i[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)(u.A, {
                id: "composer.newTask.checkingFolders",
                defaultMessage: "Checking project folders…",
                description: "Matching the project folders on this remote computer",
              })),
              (i[6] = e))
            : (e = i[6]),
            (o = e))
        } else {
          let e
          ;(i[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)(u.A, {
                id: "composer.newTask.addProjectFolder",
                defaultMessage: "Add matching project folder…",
                description: "Open the existing remote project setup to add a checkout matching this project",
              })),
              (i[7] = e))
            : (e = i[7]),
            (o = e))
        }
      let M = null != k || (null == b && !y),
        A = null != k,
        U = null != k ? "w-56 text-start" : void 0,
        P = k ?? void 0
      i[8] !== d.hostId ? ((s = (0, l.jsx)(eu, { hostId: d.hostId })), (i[8] = d.hostId), (i[9] = s)) : (s = i[9])
      let N = x?.hostId === d.hostId ? j.ALZ : void 0
      i[10] !== d.hostId || i[11] !== m || i[12] !== b
        ? ((a = () => {
            null == b
              ? (0, w.vd)({ hostId: d.hostId, setActive: !1 })
              : ((0, I.B6)(m), (0, ec.CQ)(m, b.hostId), ef(m, b.hostId, b.rootPaths[0]))
          }),
          (i[10] = d.hostId),
          (i[11] = m),
          (i[12] = b),
          (i[13] = a))
        : (a = i[13])
      let R = d.displayName ?? d.hostId
      return (
        i[14] !== k ||
        i[15] !== o ||
        i[16] !== M ||
        i[17] !== A ||
        i[18] !== U ||
        i[19] !== P ||
        i[20] !== s ||
        i[21] !== N ||
        i[22] !== a ||
        i[23] !== R
          ? ((c = (0, l.jsx)(g.ms.Item, {
              disabled: M,
              focusableWhenDisabled: A,
              tooltipText: k,
              tooltipTextClassName: U,
              "aria-description": P,
              leftIcon: s,
              RightIcon: N,
              SubText: o,
              onSelect: a,
              children: R,
            })),
            (i[14] = k),
            (i[15] = o),
            (i[16] = M),
            (i[17] = A),
            (i[18] = U),
            (i[19] = P),
            (i[20] = s),
            (i[21] = N),
            (i[22] = a),
            (i[23] = R),
            (i[24] = c))
          : (c = i[24]),
        c
      )
    }
    function ef(e, t, o) {
      let l = (0, U.zp)({ hostId: t, cwd: o ?? null })
      ;(0, P.GY)(e, l, null == l ? "local" : ((0, U.IA)(e, l) ?? "local"))
    }
    var eg = o("OM3m"),
      ej = o("Uc3f"),
      ex = o("gBBC"),
      eI = o("smUZ"),
      ev = o("Qg8B")
    function ew(e) {
      let t,
        o,
        s,
        a,
        c,
        u,
        p,
        h,
        g,
        j,
        v,
        w,
        k,
        U,
        P,
        N = (0, r.c)(73),
        { onProjectChange: _, presentation: T } = e,
        D = void 0 === T ? "inline" : T,
        O = (0, n.gh)(S.PR),
        F = (0, d.A)(),
        E = (0, m.Zp)(),
        B = (0, m.zy)(),
        Z = (0, n.Ul)(L.XO),
        G = (0, n.Ul)(y.S),
        W = (0, n.Ul)(null),
        z = (0, n.Ul)(null),
        H = (0, n.Ul)(ec.PF),
        K = (0, n.Ul)(er.H$),
        Q = K?.kind === "remote" ? K.hostId : null,
        V = (0, n._U)(M.fm, Q ?? A.fI),
        Y = (0, n.Ul)(L.G8),
        q = (0, n.Ul)(f.Vy),
        J = (0, n.Ul)(ec.Os),
        X = (0, n.Ul)(L.k5),
        $ = (0, n._U)(X && J && null == W ? eg.Ij : null, G),
        ee = (0, n.Ul)(!!Y && null == W && x._z),
        et = (0, n._U)(null, { accountId: W?.accountId ?? "", teamId: W?.teamId ?? "" })?.data,
        eo = (0, n._U)(x.y_, G),
        el = (0, n._U)(x.FD, G),
        en = (0, n.Ul)(null)?.data,
        es = (0, n.Ul)(ec.aZ)
      ;(N[0] !== O
        ? ((t = () => () => (0, I.B6)(O)), (o = [O]), (N[0] = O), (N[1] = t), (N[2] = o))
        : ((t = N[1]), (o = N[2])),
        (0, i.useEffect)(t, o),
        N[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = { kind: (0, L.CC)() ? "local" : "cloud" }), (N[3] = s))
          : (s = N[3]))
      let ei = s
      if (J) {
        let e = null == W ? eo?.name : void 0,
          t = W?.environmentIds ?? el,
          o = null == W ? en : et
        if (null != W && null == e) {
          let l
          ;(N[4] !== o || N[5] !== t[0] || N[6] !== t.length || N[7] !== F
            ? ((l =
                t.length > 1
                  ? F.formatMessage(
                      {
                        id: "composer.newTask.selectedExecutors",
                        defaultMessage: "{count} computers",
                        description: "Number of registered computers selected for a new Cloud task",
                      },
                      { count: t.length },
                    )
                  : o?.find((e) => e.environmentId === t[0])?.displayName),
              (N[4] = o),
              (N[5] = t[0]),
              (N[6] = t.length),
              (N[7] = F),
              (N[8] = l))
            : (l = N[8]),
            (e = l))
        }
        if ((null != W || (X && $?.length === 0 && null == eo)) && 0 === t.length) {
          let e
          ;(N[9] === Symbol.for("react.memo_cache_sentinel") ? ((e = { kind: "no-computer" }), (N[9] = e)) : (e = N[9]),
            (ei = e))
        } else if (null != W || (null == eo && t.length > 0)) {
          let l, n
          ;(N[10] !== o || N[11] !== t
            ? ((l = t.length > 0 && t.every((e) => o?.some((t) => t.environmentId === e && "connected" === t.status))),
              (N[10] = o),
              (N[11] = t),
              (N[12] = l))
            : (l = N[12]),
            N[13] !== e || N[14] !== l
              ? ((n = { kind: "computer", name: e, connected: l }), (N[13] = e), (N[14] = l), (N[15] = n))
              : (n = N[15]),
            (ei = n))
        } else {
          let t
          ;(N[16] !== e ? ((t = { kind: "cloud", name: e }), (N[16] = e), (N[17] = t)) : (t = N[17]), (ei = t))
        }
      } else if (H) {
        let e,
          t = Q ?? void 0,
          o = V.id === Q ? V.display_name : void 0
        ;(N[18] !== t || N[19] !== o
          ? ((e = { kind: "remote", hostId: t, name: o }), (N[18] = t), (N[19] = o), (N[20] = e))
          : (e = N[20]),
          (ei = e))
      }
      N[21] !== B || N[22] !== E || N[23] !== _ || N[24] !== O
        ? ((a = (e) => {
            ;(null != _ ? ((0, ej.J)(O, (0, ex.av)(e)), _((0, ex.av)(e))) : (0, ex.yN)(O, e), (0, eI.n)(O, E, B, e))
          }),
          (N[21] = B),
          (N[22] = E),
          (N[23] = _),
          (N[24] = O),
          (N[25] = a))
        : (a = N[25])
      let ed = a
      N[26] !== ed || N[27] !== O
        ? ((c = (e) => {
            ;(0, ea.JR)(O, e, ed)
          }),
          (N[26] = ed),
          (N[27] = O),
          (N[28] = c))
        : (c = N[28])
      let eu = c
      N[29] !== O || N[30] !== eu
        ? ((u = () => {
            let e = O.get(b.u8)?.filter(ek)
            if (null == e || 0 === e.length) return
            let t = e.filter((e) => null == O.get(C.e, e.hostId)),
              o = O.get(er.H$)
            if (0 === t.length) {
              o?.kind === "remote" && (0, L.CC)() && eu(A.fI)
              return
            }
            let l = o?.kind === "remote" ? o.hostId : A.fI,
              n = t[t.findIndex((e) => e.hostId === l) + 1] ?? ((0, L.CC)() ? void 0 : t[0])
            eu(n?.hostId ?? A.fI)
          }),
          (N[29] = O),
          (N[30] = eu),
          (N[31] = u))
        : (u = N[31])
      let em = Z && null == W && !J
      if (
        (N[32] !== em ? ((p = { enabled: em }), (N[32] = em), (N[33] = p)) : (p = N[33]),
        (0, R.Kr)("composer.cycleHost", u, p),
        ee)
      ) {
        let e
        ;(N[34] !== ed || N[35] !== O
          ? ((e = () => {
              ;((0, ea.yX)(O, () => ed(null)), (0, ea.ZR)(O))
            }),
            (N[34] = ed),
            (N[35] = O),
            (N[36] = e))
          : (e = N[36]),
          (h = e))
      } else if (
        null != W &&
        !z &&
        W.environmentIds.length > 0 &&
        W.environmentIds.every((e) => et?.some((t) => t.environmentId === e && "connected" === t.status))
      ) {
        let e
        ;(N[37] !== O ? ((e = () => (0, er.CL)(O, { kind: "cloud" }, null)), (N[37] = O), (N[38] = e)) : (e = N[38]),
          (h = e))
      }
      N[39] !== Y || N[40] !== Z || N[41] !== W
        ? ((g = !(0, L.CC)() && !Y && !(Z && null == W)), (N[39] = Y), (N[40] = Z), (N[41] = W), (N[42] = g))
        : (g = N[42])
      let ep = null == es ? null : "location"
      ;(N[43] !== O ? ((j = (e) => O.set(ec.aZ, e)), (N[43] = O), (N[44] = j)) : (j = N[44]),
        N[45] !== eu || N[46] !== W
          ? ((v = null == W && (0, L.CC)() ? () => eu(A.fI) : void 0), (N[45] = eu), (N[46] = W), (N[47] = v))
          : (v = N[47]),
        N[48] !== ed ||
        N[49] !== Y ||
        N[50] !== q ||
        N[51] !== ee ||
        N[52] !== E ||
        N[53] !== h ||
        N[54] !== O ||
        N[55] !== W
          ? ((w = Y
              ? {
                  onDefaultSelected: h,
                  onBlankSelected: ee
                    ? () => {
                        ;((0, ea.yX)(O, () => ed(null)), (0, ea.ZR)(O))
                      }
                    : void 0,
                  allowEnvironments: null == W && q,
                  computerItems: void 0,
                  onManageComputers:
                    null != W
                      ? () => {
                          ;(O.set(ec.aZ, null), E(`/settings/teams/${encodeURIComponent(W.teamId)}?tab=shared`))
                        }
                      : void 0,
                  onBeforeSelected: () => (0, ea.yX)(O, () => ed(null)),
                  onSelected: () => (0, er.CL)(O, { kind: "cloud" }, null),
                }
              : void 0),
            (N[48] = ed),
            (N[49] = Y),
            (N[50] = q),
            (N[51] = ee),
            (N[52] = E),
            (N[53] = h),
            (N[54] = O),
            (N[55] = W),
            (N[56] = w))
          : (w = N[56]))
      let eh = Z && null == W ? eu : void 0
      return (
        N[57] !== D ||
        N[58] !== ei ||
        N[59] !== g ||
        N[60] !== ep ||
        N[61] !== j ||
        N[62] !== v ||
        N[63] !== w ||
        N[64] !== eh
          ? ((k = (0, l.jsx)(ev.r, {
              selection: ei,
              presentation: D,
              disabled: g,
              open: ep,
              onOpenChange: j,
              onLocalSelected: v,
              cloud: w,
              onRemoteSelected: eh,
            })),
            (N[57] = D),
            (N[58] = ei),
            (N[59] = g),
            (N[60] = ep),
            (N[61] = j),
            (N[62] = v),
            (N[63] = w),
            (N[64] = eh),
            (N[65] = k))
          : (k = N[65]),
        N[66] !== D || N[67] !== ei || N[68] !== W
          ? ((U = null), (N[66] = D), (N[67] = ei), (N[68] = W), (N[69] = U))
          : (U = N[69]),
        N[70] !== k || N[71] !== U
          ? ((P = (0, l.jsxs)(l.Fragment, { children: [k, U] })), (N[70] = k), (N[71] = U), (N[72] = P))
          : (P = N[72]),
        P
      )
    }
    function ek(e) {
      return e.autoConnect
    }
    function eC(e) {
      let { onProjectChange: t, presentation: o } = e,
        r = void 0 === o ? "inline" : o
      return (0, n._U)(s.JW, "1678134557")
        ? (0, l.jsx)(ew, { onProjectChange: t, presentation: r })
        : (0, l.jsx)(ed, { presentation: r })
    }
  },
  eyOG(e, t, o) {
    var l = o("ABep"),
      n = o("QosV"),
      s = o("slpy"),
      r = o("fHsr"),
      a = o("GFhl")
    o.d(
      t,
      {},
      {
        R: function (e) {
          let t,
            o,
            c,
            i,
            d = (0, n.c)(12),
            { hostId: u, connectionDisplayName: m, projectPath: p, showDisabledState: h } = e
          if (null == u) return null
          let f = null == p,
            g = m ?? u
          return (
            d[0] !== g
              ? ((t = (0, l.jsx)(a.O, { className: "max-w-40 truncate select-none", collapse: "sm", children: g })),
                (d[0] = g),
                (d[1] = t))
              : (t = d[1]),
            d[2] !== p || d[3] !== f || d[4] !== t
              ? ((o = (0, l.jsx)(s.m, { content: p, disabled: f, children: t })),
                (d[2] = p),
                (d[3] = f),
                (d[4] = t),
                (d[5] = o))
              : (o = d[5]),
            d[6] !== u || d[7] !== h
              ? ((c = (0, l.jsx)(r.r0, { hostId: u, showDisabledState: h })), (d[6] = u), (d[7] = h), (d[8] = c))
              : (c = d[8]),
            d[9] !== o || d[10] !== c
              ? ((i = (0, l.jsxs)(a.O, {
                  collapse: "none",
                  "data-composer-footer-layout": "inline",
                  children: [o, c],
                })),
                (d[9] = o),
                (d[10] = c),
                (d[11] = i))
              : (i = d[11]),
            i
          )
        },
      },
    )
  },
  Rvqv(e, t, o) {
    var l = o("ABep"),
      n = o("QosV"),
      s = o("zd8w"),
      r = o("Wf1j"),
      a = o("oyxz"),
      c = o("ZZgR"),
      i = o("bqtn"),
      d = o("wsIu")
    o.d(
      t,
      {},
      {
        G: function (e) {
          let t,
            o,
            u,
            m,
            p,
            h,
            f,
            g = (0, n.c)(31),
            {
              children: j,
              emptyMessage: x,
              showEmptyState: I,
              showSearch: v,
              footerItems: w,
              headerItems: k,
              hasProjectItems: C,
              projectItems: b,
              searchLabel: S,
              searchQuery: y,
              status: M,
              onSearchQueryChange: A,
            } = e,
            U = void 0 === I || I,
            P = void 0 === v || v,
            N = (0, r.A)(),
            [R, _] = (0, s.useState)(!1)
          ;(C && R && _(!1),
            g[0] !== N || g[1] !== S
              ? ((t =
                  S ??
                  N.formatMessage({
                    id: "composer.localCwdDropdown.searchPlaceholder",
                    defaultMessage: "Search projects",
                    description: "Placeholder for searching the project dropdown",
                  })),
                (g[0] = N),
                (g[1] = S),
                (g[2] = t))
              : (t = g[2]))
          let L = t,
            T = P ? void 0 : 0
          return (
            g[3] !== R || g[4] !== C || g[5] !== A || g[6] !== L || g[7] !== y || g[8] !== P
              ? ((o = P
                  ? (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)(c.G.Input, {
                          placeholder: L,
                          value: y,
                          onKeyDown: (e) => {
                            ;(("ArrowDown" === e.key || "ArrowUp" === e.key) && _(!C),
                              "Enter" !== e.key || C || "" === y.trim() || R || e.preventDefault())
                          },
                          onValueChange: (e) => {
                            ;(_(!1), A(e))
                          },
                        }),
                        (0, l.jsx)(i.ms.Separator, {}),
                      ],
                    })
                  : null),
                (g[3] = R),
                (g[4] = C),
                (g[5] = A),
                (g[6] = L),
                (g[7] = y),
                (g[8] = P),
                (g[9] = o))
              : (o = g[9]),
            g[10] !== x || g[11] !== C || g[12] !== U || g[13] !== M
              ? ((u =
                  !C && null == M && U
                    ? (0, l.jsx)(i.ms.Message, {
                        compact: !0,
                        children:
                          x ??
                          (0, l.jsx)(a.A, {
                            id: "composer.localCwdDropdown.noProjectsFound",
                            defaultMessage: "No projects found",
                            description: "Shown when searching for projects returns no results",
                          }),
                      })
                    : null),
                (g[10] = x),
                (g[11] = C),
                (g[12] = U),
                (g[13] = M),
                (g[14] = u))
              : (u = g[14]),
            g[15] !== b || g[16] !== M || g[17] !== u
              ? ((m = (0, l.jsxs)(d.Y, {
                  className: "vertical-scroll-fade-mask [--edge-fade-distance:1.5rem]",
                  children: [b, M, u],
                })),
                (g[15] = b),
                (g[16] = M),
                (g[17] = u),
                (g[18] = m))
              : (m = g[18]),
            g[19] !== w
              ? ((p =
                  null != w
                    ? (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)(i.ms.Separator, {}),
                          (0, l.jsx)(i.ms.Section, { className: "flex flex-col", children: w }),
                        ],
                      })
                    : null),
                (g[19] = w),
                (g[20] = p))
              : (p = g[20]),
            g[21] !== j || g[22] !== k || g[23] !== m || g[24] !== p
              ? ((h = (0, l.jsxs)(c.G.List, { children: [k, m, j, p] })),
                (g[21] = j),
                (g[22] = k),
                (g[23] = m),
                (g[24] = p),
                (g[25] = h))
              : (h = g[25]),
            g[26] !== L || g[27] !== T || g[28] !== o || g[29] !== h
              ? ((f = (0, l.jsxs)(c.G.Root, { label: L, tabIndex: T, children: [o, h] })),
                (g[26] = L),
                (g[27] = T),
                (g[28] = o),
                (g[29] = h),
                (g[30] = f))
              : (f = g[30]),
            f
          )
        },
      },
    )
  },
  TByi(e, t, o) {
    var l = o("ABep"),
      n = o("QosV"),
      s = o("ZaUy"),
      r = o("ZZgR"),
      a = o("uTrt"),
      c = o("ElU1")
    o.d(
      t,
      {},
      {
        O: function (e) {
          let t,
            o,
            i = (0, n.c)(13),
            { groups: d, selectedProjectIds: u, getProjectDetails: m, getProjectTooltipText: p, onSelectProject: h } = e
          if (i[0] !== m || i[1] !== p || i[2] !== d || i[3] !== h || i[4] !== u) {
            let e
            ;(i[6] !== m || i[7] !== p || i[8] !== h || i[9] !== u
              ? ((e = (e) => {
                  let t = (0, l.jsx)(a.O, {
                    className: "icon-xs",
                    remoteHostId: e.hostId,
                    isRemoteProject: "remote" === e.projectKind,
                  })
                  return (0, l.jsx)(
                    r.G.Item,
                    {
                      icon: (0, l.jsx)(c.h, {
                        className: "icon-xs",
                        fallbackIcon: t,
                        isRemoteProject: "remote" === e.projectKind,
                        markerClassName: "size-4",
                        projectId: e.projectId,
                        remoteHostId: e.hostId,
                      }),
                      value: e.projectId,
                      rightIconAsset: u.includes(e.projectId) ? s.G : void 0,
                      tooltipText: p?.(e),
                      tooltipAlign: "center",
                      onSelect: () => {
                        h(e)
                      },
                      children: (0, l.jsxs)("div", {
                        className: "flex min-w-0 items-center gap-1",
                        children: [(0, l.jsx)("span", { className: "truncate", children: e.label }), m?.(e)],
                      }),
                    },
                    e.projectId,
                  )
                }),
                (i[6] = m),
                (i[7] = p),
                (i[8] = h),
                (i[9] = u),
                (i[10] = e))
              : (e = i[10]),
              (t = d.map(e)),
              (i[0] = m),
              (i[1] = p),
              (i[2] = d),
              (i[3] = h),
              (i[4] = u),
              (i[5] = t))
          } else t = i[5]
          return (
            i[11] !== t ? ((o = (0, l.jsx)(l.Fragment, { children: t })), (i[11] = t), (i[12] = o)) : (o = i[12]),
            o
          )
        },
      },
    )
  },
  TlLQ(e, t, o) {
    var l = o("DBCl"),
      n = o("ASxG")
    let s = "local-environments/create",
      r = `/settings/${s}`,
      a = n.object({
        hostId: n.string().min(1),
        returnTo: n
          .string()
          .startsWith("/")
          .refine((e) => !e.startsWith("//")),
      }),
      c = n.object({
        configPath: n.string().min(1).nullable(),
        projectId: n.string().min(1).transform(l.Np8).optional(),
        workspaceRoot: n.string().min(1),
      })
    o.d(
      t,
      {},
      {
        FO: r,
        pN: function (e, t) {
          let o = a.safeParse(t),
            l = c.safeParse({
              configPath: e.get("configPath"),
              projectId: e.get("projectId") ?? void 0,
              workspaceRoot: e.get("workspaceRoot"),
            })
          return o.success && l.success ? { ...o.data, ...l.data } : null
        },
        q_: function ({ configPath: e, projectId: t, workspaceRoot: o }) {
          let l = new URLSearchParams({ workspaceRoot: o })
          return (null != e && l.set("configPath", e), null != t && l.set("projectId", t), `${r}?${l.toString()}`)
        },
        x0: s,
      },
    )
  },
}
//# sourceMappingURL=825527.edfe628624.js.map
