export const __rspack_esm_ids = [227484]
export const __webpack_modules__ = {
  zbrB(e, t, o) {
    var l = o("ABep"),
      n = o("QosV"),
      s = o("MVHH"),
      r = o("zTeN"),
      a = o("HZfM"),
      c = o("ChYf"),
      i = o("eFn4"),
      d = o("jEN2"),
      u = o("ad0f"),
      p = o("nlNF"),
      m = o("yGJW"),
      h = o("gBBC"),
      f = o("pki7"),
      g = o("gLQa"),
      j = o("a8ri"),
      x = o("WVuR"),
      v = o("Js4A"),
      I = o("OWtl"),
      w = o("ndjw"),
      C = o("pasN"),
      k = o("Ko9s"),
      b = o("wVX4"),
      S = o("hYhU"),
      y = o("uZMB"),
      M = o("W1Np"),
      A = o("WLgA"),
      U = o("xEXG"),
      P = o("jAnS")
    function T(e) {
      let t,
        o,
        c,
        i,
        d = (0, n.c)(14)
      d[0] !== e ? (({ forceGlobalMemory: t, ...o } = e), (d[0] = e), (d[1] = t), (d[2] = o)) : ((t = d[1]), (o = d[2]))
      let p = (0, r.gh)(I.u),
        { pathname: h, search: f } = (0, a.zy)(),
        g = (0, U.e)()
      return (
        d[3] !== t || d[4] !== h || d[5] !== g || d[6] !== o || d[7] !== p || d[8] !== f
          ? ((c =
              "allowed" === g
                ? () => {
                    ;(0, M.v)(
                      p,
                      (e) => {
                        ;((o.variant ?? "composer") === "composer" &&
                          (0, u.n)(h) &&
                          !(0, P.CV)(f) &&
                          (0, m.yy)(p, s.QW, {
                            action: "CHATGPT_WEB_HOME_COMPOSER_PROJECT_SELECTION_ACTION_PROJECT_SELECTED",
                            entrySurface: "composer_footer",
                          }),
                          o.onProjectChange(e.gizmo.id, e.gizmo.display.name.trim() || e.gizmo.id))
                      },
                      { allowLocalProjectCreation: !1, forceGlobalMemory: t, onCloseAutoFocus: L },
                    )
                  }
                : void 0),
            (d[3] = t),
            (d[4] = h),
            (d[5] = g),
            (d[6] = o),
            (d[7] = p),
            (d[8] = f),
            (d[9] = c))
          : (c = d[9]),
        d[10] !== t || d[11] !== o || d[12] !== c
          ? ((i = (0, l.jsx)(S.u, { ...o, workCloudOnly: t, onCreateProject: c })),
            (d[10] = t),
            (d[11] = o),
            (d[12] = c),
            (d[13] = i))
          : (i = d[13]),
        i
      )
    }
    function L(e) {
      ;(e.preventDefault(), (0, d.xJ)())
    }
    function N(e) {
      let t,
        o,
        d,
        T,
        L,
        N,
        R,
        O,
        D,
        E,
        B,
        G,
        F,
        W,
        z,
        H,
        Z,
        V,
        Q = (0, n.c)(86),
        {
          projectId: K,
          projectName: J,
          projectlessTriggerLabel: X,
          presentation: Y,
          menuOpen: q,
          menuContentOnly: $,
          onMenuOpenChange: ee,
          shortcut: et,
          subtleHover: eo,
          triggerButton: el,
          variant: en,
        } = e,
        es = (0, r.gh)(I.u),
        er = (0, a.Zp)(),
        { pathname: ea, search: ec } = (0, a.zy)(),
        ei = (0, r.Ul)(w.Gv),
        ed = (0, r.Ul)(x.d)
      Q[0] !== ea ? ((t = (0, A.vl)(ea)), (Q[0] = ea), (Q[1] = t)) : (t = Q[1])
      let eu = t,
        ep = (0, r.Ul)(j.l),
        em = ep && null != eu,
        eh = (0, r.Ul)(y.jo),
        ef = (0, r.Ul)(k.chatGptProjectContextSyncingIds$)
      Q[2] === Symbol.for("react.memo_cache_sentinel") ? ((o = { name: "chatgpt" }), (Q[2] = o)) : (o = Q[2])
      let eg = (0, r._U)(c.G, o),
        ej = (0, r.Ul)(i.d0),
        ex = (0, U.e)(),
        ev = eg.isCapable
      Q[3] !== ev ? ((d = { enabled: ev }), (Q[3] = ev), (Q[4] = d)) : (d = Q[4])
      let { projects: eI } = (0, r.Ul)(y.Ds, d)
      if (
        Q[5] !== eg.isCapable ||
        Q[6] !== eg.isLoading ||
        Q[7] !== eI ||
        Q[8] !== ev ||
        Q[9] !== em ||
        Q[10] !== ed ||
        Q[11] !== ep ||
        Q[12] !== ei ||
        Q[13] !== $ ||
        Q[14] !== q ||
        Q[15] !== er ||
        Q[16] !== ee ||
        Q[17] !== ea ||
        Q[18] !== Y ||
        Q[19] !== ex ||
        Q[20] !== K ||
        Q[21] !== J ||
        Q[22] !== X ||
        Q[23] !== eh ||
        Q[24] !== eu ||
        Q[25] !== es ||
        Q[26] !== ec ||
        Q[27] !== ef ||
        Q[28] !== en ||
        Q[29] !== ej
      ) {
        let e,
          t = (0, g.vY)(ei, ev ? eI.map(_) : [], ed)
        if (
          (Q[44] !== em || Q[45] !== ep || Q[46] !== er || Q[47] !== eu || Q[48] !== es || Q[49] !== ej
            ? ((e = (e, t) => {
                if (
                  ep &&
                  "work" === es.get(C.l) &&
                  (!ej || null == e || (0, b.VI)((0, y._l)(es).find((t) => t.gizmo.id === e)))
                ) {
                  ;((0, h.yN)(
                    es,
                    null == e
                      ? null
                      : { projectId: (0, g.Wd)(e, es.get(w.Gv), es.get(x.d)) ?? e, projectKind: "local" },
                  ),
                    em && e !== eu && er(null == e ? "/" : (0, A.bv)(e), { replace: !0 }))
                  return
                }
                let o = es.get(p.x2)
                ;(0, k.selectChatGptProjectForLocalTask)(es, null == e ? null : { projectId: e, projectName: t }).then(
                  (t) => {
                    es.get(p.x2) !== o ||
                      (null != e && null == t) ||
                      (em && e !== eu && er(null == e ? "/" : (0, A.bv)(e), { replace: !0 }))
                  },
                )
              }),
              (Q[44] = em),
              (Q[45] = ep),
              (Q[46] = er),
              (Q[47] = eu),
              (Q[48] = es),
              (Q[49] = ej),
              (Q[50] = e))
            : (e = Q[50]),
          (L = e),
          eg.isLoading || eg.isCapable || !ej)
        ) {
          if (ev && "allowed" === ex) {
            let e
            ;(Q[53] !== L || Q[54] !== ep || Q[55] !== ea || Q[56] !== es || Q[57] !== ec || Q[58] !== en
              ? ((e = () => {
                  ;(0, M.v)(
                    es,
                    (e) => {
                      ;((en ?? "composer") === "composer" &&
                        (0, u.n)(ea) &&
                        !(0, P.CV)(ec) &&
                        (0, m.yy)(es, s.QW, {
                          action: "CHATGPT_WEB_HOME_COMPOSER_PROJECT_SELECTION_ACTION_PROJECT_SELECTED",
                          entrySurface: "composer_footer",
                        }),
                        L(e.gizmo.id, e.gizmo.display.name.trim() || e.gizmo.id))
                    },
                    { allowLocalProjectCreation: !0, forceGlobalMemory: ep && "work" === es.get(C.l) && es.get(i.rM) },
                  )
                }),
                (Q[53] = L),
                (Q[54] = ep),
                (Q[55] = ea),
                (Q[56] = es),
                (Q[57] = ec),
                (Q[58] = en),
                (Q[59] = e))
              : (e = Q[59]),
              (N = e))
          }
        } else {
          let e
          ;(Q[51] !== es
            ? ((e = () => {
                ;(0, f.gG)(es)
              }),
              (Q[51] = es),
              (Q[52] = e))
            : (e = Q[52]),
            (N = e))
        }
        ;((T = S.u),
          (G = ev),
          (F = !ej),
          (W = K),
          Q[60] !== K || Q[61] !== J || Q[62] !== eh
            ? ((z = J ?? eh.find((e) => e.projectId === K)?.label ?? null),
              (Q[60] = K),
              (Q[61] = J),
              (Q[62] = eh),
              (Q[63] = z))
            : (z = Q[63]),
          (H = X),
          (Z = Y),
          (R = q),
          (O = ee),
          Q[64] !== K || Q[65] !== ef
            ? ((D = null != K && ef.includes(K)), (Q[64] = K), (Q[65] = ef), (Q[66] = D))
            : (D = Q[66]),
          (E = $),
          (B =
            ej || null != ed
              ? {
                  projects: eh.filter(
                    (e) =>
                      !t.has(e.projectId) && (ej || ("local" === e.projectKind && (0, v.o)(ei?.[e.projectId], ed, ex))),
                  ),
                  onSelectProject: (e) => {
                    ;((0, h.yN)(es, e), em && er("/", { replace: !0 }))
                  },
                }
              : void 0),
          (Q[5] = eg.isCapable),
          (Q[6] = eg.isLoading),
          (Q[7] = eI),
          (Q[8] = ev),
          (Q[9] = em),
          (Q[10] = ed),
          (Q[11] = ep),
          (Q[12] = ei),
          (Q[13] = $),
          (Q[14] = q),
          (Q[15] = er),
          (Q[16] = ee),
          (Q[17] = ea),
          (Q[18] = Y),
          (Q[19] = ex),
          (Q[20] = K),
          (Q[21] = J),
          (Q[22] = X),
          (Q[23] = eh),
          (Q[24] = eu),
          (Q[25] = es),
          (Q[26] = ec),
          (Q[27] = ef),
          (Q[28] = en),
          (Q[29] = ej),
          (Q[30] = T),
          (Q[31] = L),
          (Q[32] = N),
          (Q[33] = R),
          (Q[34] = O),
          (Q[35] = D),
          (Q[36] = E),
          (Q[37] = B),
          (Q[38] = G),
          (Q[39] = F),
          (Q[40] = W),
          (Q[41] = z),
          (Q[42] = H),
          (Q[43] = Z))
      } else
        ((T = Q[30]),
          (L = Q[31]),
          (N = Q[32]),
          (R = Q[33]),
          (O = Q[34]),
          (D = Q[35]),
          (E = Q[36]),
          (B = Q[37]),
          (G = Q[38]),
          (F = Q[39]),
          (W = Q[40]),
          (z = Q[41]),
          (H = Q[42]),
          (Z = Q[43]))
      return (
        Q[67] !== T ||
        Q[68] !== L ||
        Q[69] !== N ||
        Q[70] !== et ||
        Q[71] !== eo ||
        Q[72] !== R ||
        Q[73] !== O ||
        Q[74] !== D ||
        Q[75] !== E ||
        Q[76] !== B ||
        Q[77] !== G ||
        Q[78] !== F ||
        Q[79] !== W ||
        Q[80] !== z ||
        Q[81] !== H ||
        Q[82] !== Z ||
        Q[83] !== el ||
        Q[84] !== en
          ? ((V = (0, l.jsx)(T, {
              cloudProjectsEnabled: G,
              workCloudOnly: F,
              projectId: W,
              projectName: z,
              projectlessTriggerLabel: H,
              presentation: Z,
              menuOpen: R,
              onMenuOpenChange: O,
              isPending: D,
              menuContentOnly: E,
              workspaceProjectOptions: B,
              subtleHover: eo,
              shortcut: et,
              triggerButton: el,
              variant: en,
              onCreateProject: N,
              onProjectChange: L,
            })),
            (Q[67] = T),
            (Q[68] = L),
            (Q[69] = N),
            (Q[70] = et),
            (Q[71] = eo),
            (Q[72] = R),
            (Q[73] = O),
            (Q[74] = D),
            (Q[75] = E),
            (Q[76] = B),
            (Q[77] = G),
            (Q[78] = F),
            (Q[79] = W),
            (Q[80] = z),
            (Q[81] = H),
            (Q[82] = Z),
            (Q[83] = el),
            (Q[84] = en),
            (Q[85] = V))
          : (V = Q[85]),
        V
      )
    }
    function _(e) {
      return e.gizmo.id
    }
    o.d(
      t,
      {},
      {
        n: function (e) {
          let t,
            o,
            s = (0, n.c)(32),
            {
              forceGlobalMemory: a,
              projectId: c,
              projectName: i,
              projectlessTriggerLabel: d,
              presentation: u,
              menuOpen: p,
              menuContentOnly: m,
              onMenuOpenChange: h,
              shortcut: f,
              subtleHover: j,
              triggerButton: v,
              variant: I,
              onProjectChange: C,
            } = e,
            k = void 0 !== a && a,
            b = (0, r.Ul)(w.Gt),
            S = (0, r.Ul)(w.Gv),
            y = (0, r.Ul)(x.d),
            M = c
          void 0 === M && (M = b?.projectId ?? null)
          let A = (void 0 === i ? null : i) ?? (null == M ? null : S?.[M]?.name) ?? null
          s[0] !== y || s[1] !== S || s[2] !== M
            ? ((t = null == M ? void 0 : (0, g._z)(M, S, y)), (s[0] = y), (s[1] = S), (s[2] = M), (s[3] = t))
            : (t = s[3])
          let U = t
          if ((null != U && (M = U), null != C)) {
            let e, t
            return (
              s[4] !== M ? ((e = M?.startsWith("g-p-") ? M : null), (s[4] = M), (s[5] = e)) : (e = s[5]),
              s[6] !== k ||
              s[7] !== m ||
              s[8] !== p ||
              s[9] !== h ||
              s[10] !== C ||
              s[11] !== u ||
              s[12] !== d ||
              s[13] !== A ||
              s[14] !== f ||
              s[15] !== j ||
              s[16] !== e ||
              s[17] !== v ||
              s[18] !== I
                ? ((t = (0, l.jsx)(T, {
                    forceGlobalMemory: k,
                    projectId: e,
                    projectName: A,
                    projectlessTriggerLabel: d,
                    presentation: u,
                    menuOpen: p,
                    menuContentOnly: m,
                    onMenuOpenChange: h,
                    shortcut: f,
                    subtleHover: j,
                    triggerButton: v,
                    variant: I,
                    onProjectChange: C,
                  })),
                  (s[6] = k),
                  (s[7] = m),
                  (s[8] = p),
                  (s[9] = h),
                  (s[10] = C),
                  (s[11] = u),
                  (s[12] = d),
                  (s[13] = A),
                  (s[14] = f),
                  (s[15] = j),
                  (s[16] = e),
                  (s[17] = v),
                  (s[18] = I),
                  (s[19] = t))
                : (t = s[19]),
              t
            )
          }
          return (
            s[20] !== m ||
            s[21] !== p ||
            s[22] !== h ||
            s[23] !== u ||
            s[24] !== M ||
            s[25] !== d ||
            s[26] !== A ||
            s[27] !== f ||
            s[28] !== j ||
            s[29] !== v ||
            s[30] !== I
              ? ((o = (0, l.jsx)(N, {
                  projectId: M,
                  projectName: A,
                  projectlessTriggerLabel: d,
                  presentation: u,
                  menuOpen: p,
                  menuContentOnly: m,
                  onMenuOpenChange: h,
                  shortcut: f,
                  subtleHover: j,
                  triggerButton: v,
                  variant: I,
                })),
                (s[20] = m),
                (s[21] = p),
                (s[22] = h),
                (s[23] = u),
                (s[24] = M),
                (s[25] = d),
                (s[26] = A),
                (s[27] = f),
                (s[28] = j),
                (s[29] = v),
                (s[30] = I),
                (s[31] = o))
              : (o = s[31]),
            o
          )
        },
      },
    )
  },
  uaLq(e, t, o) {
    o.d(t, { I: () => eu })
    var l = o("ABep"),
      n = o("QosV"),
      s = o("iRMi"),
      r = o("slpy"),
      a = o("ECyk"),
      c = o("TkZ9"),
      i = o("on57"),
      d = o("zTeN"),
      u = o("zd8w"),
      p = o("Wf1j"),
      m = o("oyxz"),
      h = o("HZfM"),
      f = o("ChYf"),
      g = o("oYYx"),
      j = o("Ko9s"),
      x = o("x4uR"),
      v = o("uZMB"),
      I = o("WLgA"),
      w = o("j9xU"),
      C = o("jEN2"),
      k = o("ZZgR"),
      b = o("bqtn"),
      S = o("HOLv"),
      y = o("xHg4"),
      M = o("cdAR"),
      A = o("nlNF"),
      U = o("yGJW"),
      P = o("uTrt"),
      T = o("ElU1"),
      L = o("Uc3f"),
      N = o("gBBC"),
      _ = o("smUZ"),
      R = o("pki7"),
      O = o("gLQa"),
      D = o("a8ri"),
      E = o("WVuR"),
      B = o("IV6l"),
      G = o("XsHM"),
      F = o("SqHz"),
      W = o("xv9C"),
      z = o("UN1G"),
      H = o("Rvqv"),
      Z = o("YYX4"),
      V = o("TByi"),
      Q = o("KxVC"),
      K = o("bnxy")
    function J(e) {
      let t,
        o,
        s,
        r,
        c,
        i,
        d,
        p,
        h = (0, n.c)(35),
        {
          children: f,
          groups: g,
          selectedProjectIds: j,
          onRequestClose: x,
          onSelectProjectId: v,
          keepOpenOnSelect: I,
          projectlessActionLabel: w,
          onSelectProjectless: C,
          footerItems: b,
          onAddLocalProject: S,
          onAddRemoteProject: y,
          emptyMessage: M,
        } = e,
        A = void 0 !== I && I,
        U = null != C && null != w,
        [P, T] = (0, u.useState)("")
      ;(h[0] !== P
        ? ((t = (e) => [e.label, e.gitRepos[0]?.rootFolder, (0, z.uQ)(P) ? e.path : void 0, e.hostDisplayName]),
          (h[0] = P),
          (h[1] = t))
        : (t = h[1]),
        h[2] !== g || h[3] !== P || h[4] !== t
          ? ((o = (0, Z.V)(g, P, t)), (h[2] = g), (h[3] = P), (h[4] = t), (h[5] = o))
          : (o = h[5]))
      let L = o
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
      let N = U || null != b || null != S || U || null != y,
        _ = L.length > 0
      return (
        h[8] !== s
          ? ((r = (e) => {
              let t = s.get(e.label) ?? []
              return t.length > 1 && null != e.path ? (0, K.LN)(e.path, t) : void 0
            }),
            (h[8] = s),
            (h[9] = r))
          : (r = h[9]),
        h[10] !== A || h[11] !== x || h[12] !== v
          ? ((c = (e) => {
              ;(v(e.projectId), A || x?.())
            }),
            (h[10] = A),
            (h[11] = x),
            (h[12] = v),
            (h[13] = c))
          : (c = h[13]),
        h[14] !== L || h[15] !== j || h[16] !== r || h[17] !== c
          ? ((i = (0, l.jsx)(V.O, {
              groups: L,
              selectedProjectIds: j,
              getProjectDetails: X,
              getProjectTooltipText: r,
              onSelectProject: c,
            })),
            (h[14] = L),
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
        h[24] !== C ||
        h[25] !== w ||
        h[26] !== N
          ? ((d = N
              ? (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(l.Fragment, {
                      children: y
                        ? (0, l.jsx)(k.G.Action, {
                            leftIconAsset: F.b,
                            onClick: () => {
                              ;(y(), x?.())
                            },
                            children: (0, l.jsx)(m.A, {
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
                            ? (0, l.jsx)(k.G.Action, {
                                leftIconAsset: a.f,
                                onClick: () => {
                                  ;(S(), x?.())
                                },
                                children: y
                                  ? (0, l.jsx)(m.A, {
                                      id: "composer.localCwdDropdown.addLocalWorkspaceRoot",
                                      defaultMessage: "Add local project",
                                      description:
                                        "Menu item that opens the local folder picker in the electron app when a remote project can also be added",
                                    })
                                  : (0, l.jsx)(m.A, {
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
                        ? (0, l.jsx)(k.G.Action, {
                            leftIconAsset: W.Q,
                            onClick: () => {
                              ;(C(), x?.())
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
            (h[24] = C),
            (h[25] = w),
            (h[26] = N),
            (h[27] = d))
          : (d = h[27]),
        h[28] !== f || h[29] !== M || h[30] !== P || h[31] !== _ || h[32] !== i || h[33] !== d
          ? ((p = (0, l.jsx)(H.G, {
              searchQuery: P,
              onSearchQueryChange: T,
              hasProjectItems: _,
              projectItems: i,
              emptyMessage: M,
              footerItems: d,
              children: f,
            })),
            (h[28] = f),
            (h[29] = M),
            (h[30] = P),
            (h[31] = _),
            (h[32] = i),
            (h[33] = d),
            (h[34] = p))
          : (p = h[34]),
        p
      )
    }
    function X(e) {
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
    var Y = o("PIwo"),
      q = o("AzNg"),
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
          let l = "local" === t.projectKind ? (0, O._z)(t.projectId, o, e(E.d)) : void 0
          if (null == l) return t
          let n = e(x.jf, l).data?.gizmo.display.name.trim()
          return n ? { ...t, label: n } : t
        })
      }),
      ed = (0, d.un)(
        ee.u,
        ({ get: e }) =>
          e(D.l) &&
          $.appServices?.projectChatGptProvisioning != null &&
          null != e(E.d) &&
          e(f.G, { name: "chatgpt" }).isCapable,
      )
    function eu(e) {
      let t,
        o,
        f,
        x,
        D,
        F,
        W,
        z,
        H,
        Z,
        V,
        Q,
        K,
        X,
        $,
        en,
        eu,
        ep,
        em,
        eh,
        ef,
        eg,
        ej,
        ex,
        ev,
        eI,
        ew,
        eC = (0, n.c)(139),
        {
          activeProjectIdOverride: ek,
          hostId: eb,
          allowProjectCreation: eS,
          allowLocalProjects: ey,
          allowLocalProjectActions: eM,
          allowRemoteProjects: eA,
          disabled: eU,
          hideLabel: eP,
          onProjectSelected: eT,
          variant: eL,
          isOpen: eN,
          onOpenChange: e_,
          shortcut: eR,
          triggerButton: eO,
          menuContentOnly: eD,
        } = e,
        eE = void 0 === eS || eS,
        eB = void 0 === ey || ey,
        eG = void 0 === eM ? eB : eM,
        eF = void 0 === eA || eA,
        eW = void 0 !== eU && eU,
        ez = void 0 !== eP && eP,
        eH = void 0 === eL ? "default" : eL,
        eZ = (0, d.gh)(ee.u),
        eV = (0, es.Zj)("2163293173") && void 0 !== eD && eD,
        eQ = (0, p.A)(),
        eK = (0, h.zy)(),
        eJ = (0, h.Zp)(),
        [eX, eY] = (0, u.useState)(!1),
        eq = "home" === eH,
        e$ = (0, u.useRef)(!1),
        e0 = (0, u.useRef)(!1),
        e1 = (0, y.e)(),
        e2 = (0, d.Ul)(et.Gv),
        e3 = (0, d.Ul)(E.d),
        e4 = (0, d.Ul)(ed) && eB && !e1
      eC[0] !== e4 ? ((t = { enabled: e4 }), (eC[0] = e4), (eC[1] = t)) : (t = eC[1])
      let e5 = (0, d.Ul)(v.Ds, t),
        e6 = (0, d.Ul)(ei)
      eC[2] !== eB || eC[3] !== eF || eC[4] !== eb
        ? ((o = (e) => !(0, el.Vm)(e) && ("local" === e.projectKind ? eB : eF && (null == eb || e.hostId === eb))),
          (eC[2] = eB),
          (eC[3] = eF),
          (eC[4] = eb),
          (eC[5] = o))
        : (o = eC[5])
      let e7 = e6.filter(o),
        e8 = new Set()
      if (e4)
        for (let e of e5.projects) {
          let t = e.gizmo.id
          if (null != (0, O.Wd)(t, e2, e3)) continue
          e8.add(t)
          let o = e6.find((e) => "local" === e.projectKind && e.projectId === t),
            l = {
              ...o,
              projectId: t,
              projectKind: "local",
              label: e.gizmo.display.name.trim() || t,
              gitRepos: o?.gitRepos ?? [],
              isCodexWorktree: o?.isCodexWorktree ?? !1,
            },
            n = e7.findIndex((e) => e.projectId === t)
          ;-1 === n ? e7.push(l) : (e7[n] = l)
        }
      let e9 = (0, Y.Ik)(),
        te = void 0 !== ek,
        tt = !e1,
        { selectedRemoteProject: to, selectedRemoteProjectId: tl } = (0, q.QL)(),
        { remoteConnections: tn } = (0, Y.mw)(),
        ts = (0, g.g)(tn),
        tr = (0, d.Ul)(et.c_),
        ta = (0, d.Ul)(et.Gt),
        tc = (0, d.Ul)(et.Ro)
      ;((0, d.Ul)(w.F6),
        eC[6] !== eE || eC[7] !== eF || eC[8] !== ts || eC[9] !== eb || eC[10] !== e1 || eC[11] !== e9
          ? ((f = eE && eF && e9 && !e1 && ts.some((e) => null == eb || e.hostId === eb)),
            (eC[6] = eE),
            (eC[7] = eF),
            (eC[8] = ts),
            (eC[9] = eb),
            (eC[10] = e1),
            (eC[11] = e9),
            (eC[12] = f))
          : (f = eC[12]))
      let ti = f
      eC[13] !== eK || eC[14] !== eJ || eC[15] !== eT || eC[16] !== eZ
        ? ((x = (e) => {
            ;(null != eT ? ((0, L.J)(eZ, (0, N.av)(e)), eT((0, N.av)(e))) : (0, N.yN)(eZ, e), (0, _.n)(eZ, eJ, eK, e))
          }),
          (eC[13] = eK),
          (eC[14] = eJ),
          (eC[15] = eT),
          (eC[16] = eZ),
          (eC[17] = x))
        : (x = eC[17])
      let td = x,
        tu = (e) => {
          ;(0, U.yy)(eZ, s.CodexAppWorkspaceRootSelected, {})
          let t = e7.find((t) => t.projectId === e)
          if (null != t) {
            if (e8.has(e)) {
              let o = eZ.get(A.x2)
              ;(0, j.selectChatGptProjectForLocalTask)(eZ, { projectId: e, projectName: t.label }).then((t) => {
                if (null == t || eZ.get(A.x2) !== o) return
                eT?.((0, N.av)({ projectKind: "local", projectId: t.projectId }))
                let l = new URLSearchParams(eK.search),
                  n = (0, I.vl)(eK.pathname)
                ;((null != n && n !== e) || ("/projects" === eK.pathname && l.has("projectId"))) &&
                  (l.delete("projectId"),
                  l.delete("hostId"),
                  eJ({ pathname: "/", search: l.toString(), hash: eK.hash }, { replace: !0, state: eK.state }))
              })
              return
            }
            td(t)
          }
        }
      eC[18] !== eb || eC[19] !== eT || eC[20] !== eZ
        ? ((D = (e) => {
            ;(0, U.yy)(eZ, s.CodexAppWorkspaceRootAddClicked, {})
            let t = eZ.get(A.x2)
            ;(0, R.gG)(eZ, {
              device: e,
              hostId: "remote" === e ? eb : void 0,
              onProjectCreated:
                null == eT
                  ? void 0
                  : (e) => {
                      eZ.get(A.x2) === t && eT(e)
                    },
            })
          }),
          (eC[18] = eb),
          (eC[19] = eT),
          (eC[20] = eZ),
          (eC[21] = D))
        : (D = eC[21])
      let tp = D
      eC[22] !== tp
        ? ((F = (e) => {
            if (e$.current) {
              ;((e$.current = !1), e.preventDefault(), tp("local"))
              return
            }
            e0.current && ((e0.current = !1), e.preventDefault(), (0, C.xJ)())
          }),
          (eC[22] = tp),
          (eC[23] = F))
        : (F = eC[23])
      let tm = F
      eC[24] !== td || eC[25] !== eb || eC[26] !== eZ
        ? ((W = () => {
            ;((0, U.yy)(eZ, s.CodexAppWorkspaceRootSelected, {}), (0, L.J)(eZ, null, eb ?? eo.fI), td(null))
          }),
          (eC[24] = td),
          (eC[25] = eb),
          (eC[26] = eZ),
          (eC[27] = W))
        : (W = eC[27])
      let th = W,
        tf = ta?.type === "local" ? ta.projectId : null
      ;(te ? (tf = ek) : eF && (tf = tl ?? tf), null == tf || e1 || tf === tl || (tf = (0, O.Wd)(tf, e2, e3) ?? tf))
      let tg = null == tf && tt,
        tj = tt && null != tf && !0,
        tx = eN ?? eX
      eC[28] !== e_
        ? ((z = (e) => {
            ;(eY(e), e_?.(e))
          }),
          (eC[28] = e_),
          (eC[29] = z))
        : (z = eC[29])
      let tv = z,
        tI = eE && eG && "home" === eH && 0 === e7.length && !e4 && !e1
      if (tc || (!te && null == tr && null == tr && !tI && null == tl)) return null
      let tw =
          null == tf
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
                activeProjectId: tf,
                projects: e7,
                remoteConnections: tn,
                selectedRemoteProject: null == eb || (eF && to?.hostId === eb) ? to : null,
              }),
        tC = null == eO && "hero" !== eH && tw?.projectKind === "local" ? (0, G.l_)(tw) : void 0,
        tk = (0, l.jsx)(P.O, {
          className: "icon-xs shrink-0",
          remoteHostId: tw?.hostId,
          isRemoteProject: tw?.projectKind === "remote",
        }),
        tb =
          null == tf
            ? null
            : (0, l.jsx)(T.h, {
                className: "icon-xs",
                fallbackIcon: tk,
                isRemoteProject: tw?.projectKind === "remote",
                markerClassName: "size-4",
                projectId: tf,
                remoteHostId: tw?.hostId,
              }),
        tS = tw?.hostDisplayName != null ? `${tw.label} \xb7 ${tw.hostDisplayName}` : (tw?.label ?? tw?.path ?? null),
        ty =
          tw?.label ??
          (tg && eq
            ? (0, l.jsx)(m.A, {
                id: "composer.localCwdDropdown.noProject",
                defaultMessage: "Choose project",
                description: "Home utility bar value shown when no project is selected",
              })
            : tg
              ? (0, l.jsx)(m.A, {
                  id: "composer.localCwdDropdown.chooseProject",
                  defaultMessage: "Choose project",
                  description: "Home page button label shown when no project is selected",
                })
              : (0, l.jsx)(m.A, {
                  id: "composer.localCwdDropdown.noActiveRoot",
                  defaultMessage: "Select your project",
                  description: "Shown when no active root is selected",
                })),
        tM = tg ? "tertiary" : "primary",
        tA =
          null == tf
            ? eQ.formatMessage({
                id: "composer.localCwdDropdown.selectProjectTooltip",
                defaultMessage: "Select a project to run your chat in",
                description: "Tooltip for the home page project selector when no project is selected",
              })
            : eQ.formatMessage({
                id: "composer.localCwdDropdown.changeProjectTooltip",
                defaultMessage: "Change the project for this chat",
                description: "Tooltip for the home page project selector when a project is selected",
              }),
        tU =
          null == tS
            ? eQ.formatMessage({
                id: "composer.localCwdDropdown.chooseProjectAccessibleLabel",
                defaultMessage: "Choose project",
                description: "Accessible label for the home page project selector when no project is selected",
              })
            : eQ.formatMessage(
                {
                  id: "composer.localCwdDropdown.changeProjectAccessibleLabel",
                  defaultMessage: "Change project: {projectName}",
                  description: "Accessible label for the home page project selector when a project is selected",
                },
                { projectName: tS },
              )
      eC[30] !== tS || eC[31] !== tg
        ? ((H =
            tS ??
            (tg
              ? (0, l.jsx)(m.A, {
                  id: "composer.localCwdDropdown.newChat",
                  defaultMessage: "New chat",
                  description: "Label shown when no project is selected in the electron app",
                })
              : (0, l.jsx)(m.A, {
                  id: "composer.localCwdDropdown.noActiveRoot",
                  defaultMessage: "Select your project",
                  description: "Shown when no active root is selected",
                }))),
          (eC[30] = tS),
          (eC[31] = tg),
          (eC[32] = H))
        : (H = eC[32])
      let tP = H
      ;(eC[33] !== tv
        ? ((Z = () => {
            ;((e$.current = !0), tv(!1))
          }),
          (eC[33] = tv),
          (eC[34] = Z))
        : (Z = eC[34]),
        eC[35] === Symbol.for("react.memo_cache_sentinel")
          ? ((V = (0, l.jsx)(m.A, {
              id: "composer.localCwdDropdown.newProject",
              defaultMessage: "New project",
              description: "Menu item that opens the local project creation flow from the composer project picker",
            })),
            (eC[35] = V))
          : (V = eC[35]),
        eC[36] !== Z
          ? ((Q = (0, l.jsx)(k.G.Action, { leftIconAsset: a.f, onClick: Z, children: V })), (eC[36] = Z), (eC[37] = Q))
          : (Q = eC[37]))
      let tT = Q
      ;((K = tg ? (0, l.jsx)(S.I, { className: "shrink-0", "aria-hidden": !1, asset: c.f }) : (tb ?? tk)),
        eC[38] !== K || eC[39] !== tP || eC[40] !== tj || eC[41] !== ez || eC[42] !== eR
          ? ((X = () =>
              (0, l.jsx)(r.m, {
                shortcut: eR,
                content: (0, l.jsx)(m.A, {
                  id: "composer.localCwdDropdown.tooltip",
                  defaultMessage: "Select project",
                  description: "Tooltip for the active project selector in the composer footer",
                }),
                children: (0, l.jsx)(ea.P, {
                  className: "min-w-0",
                  "data-composer-navigation-target": "workspace-project",
                  categoryLabel: null,
                  collapse: "none",
                  icon: (0, l.jsx)("span", { "data-clear-selector-icon": tj || void 0, children: K }),
                  indicator: "chevron",
                  value: ez ? null : tP,
                  valueClassName: "max-w-[240px] text-start",
                }),
              })),
            (eC[38] = K),
            (eC[39] = tP),
            (eC[40] = tj),
            (eC[41] = ez),
            (eC[42] = eR),
            (eC[43] = X))
          : (X = eC[43]))
      let tL = X,
        tN = "default"
      ;(eq || null != tw || null != eR || (tN = "target-hidden"),
        eC[44] !== tP || eC[45] !== eW
          ? (($ = () =>
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
                    children: (0, l.jsx)("span", { className: "min-w-0 truncate", children: tP }),
                  }),
                  (0, l.jsx)(M.A, { className: "icon-sm mt-1 shrink-0 self-center text-tertiary" }),
                ],
              })),
            (eC[44] = tP),
            (eC[45] = eW),
            (eC[46] = $))
          : ($ = eC[46]))
      let t_ = $
      if (tI && !eV) {
        let e, t
        if (!ti && null == eO) {
          let e, t
          eC[47] !== tp
            ? ((e = (e) => {
                e && tp("local")
              }),
              (eC[47] = tp),
              (eC[48] = e))
            : (e = eC[48])
          let o = tb ?? tk
          return (
            eC[49] !== eW ||
            eC[50] !== tm ||
            eC[51] !== tM ||
            eC[52] !== tA ||
            eC[53] !== tN ||
            eC[54] !== tU ||
            eC[55] !== ty ||
            eC[56] !== eR ||
            eC[57] !== e ||
            eC[58] !== o ||
            eC[59] !== eq
              ? ((t = (0, l.jsx)(ec.j, {
                  "aria-label": tU,
                  contentWidth: "menu",
                  disabled: eW,
                  foreground: tM,
                  menuOpen: !1,
                  onCloseAutoFocus: tm,
                  onOpenChange: e,
                  icon: o,
                  shortcut: eR,
                  subtleHover: eq,
                  tooltipContent: tA,
                  tooltipOpenWhen: tN,
                  value: ty,
                  children: null,
                })),
                (eC[49] = eW),
                (eC[50] = tm),
                (eC[51] = tM),
                (eC[52] = tA),
                (eC[53] = tN),
                (eC[54] = tU),
                (eC[55] = ty),
                (eC[56] = eR),
                (eC[57] = e),
                (eC[58] = o),
                (eC[59] = eq),
                (eC[60] = t))
              : (t = eC[60]),
            t
          )
        }
        let o =
          eO ??
          (0, l.jsx)(r.m, {
            enabledWhen: tN,
            content: tA,
            children: (0, l.jsx)(ea.P, {
              tooltipEnabledWhen: tN,
              "aria-label": tU,
              categoryLabel: null,
              collapse: "xs",
              disabled: eW,
              foreground: tM,
              icon: tb ?? tk,
              indicator: "none",
              value: ty,
            }),
          })
        return (
          eC[61] !== eG || eC[62] !== tp
            ? ((e = (e) => {
                e && (eG ? tp("local") : tp("remote"))
              }),
              (eC[61] = eG),
              (eC[62] = tp),
              (eC[63] = e))
            : (e = eC[63]),
          eC[64] !== o || eC[65] !== e
            ? ((t = (0, l.jsx)(b.Ab, { open: !1, onOpenChange: e, triggerButton: o, children: null })),
              (eC[64] = o),
              (eC[65] = e),
              (eC[66] = t))
            : (t = eC[66]),
          t
        )
      }
      if (e4 && e5.isLoading) {
        let e
        ;(eC[67] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)(m.A, {
              id: "chatgptConversations.composer.projectSelector.loading",
              defaultMessage: "Loading projects…",
              description: "Loading message for the cloud project section of the composer project picker",
            })),
            (eC[67] = e))
          : (e = eC[67]),
          (en = e))
      } else if (e4 && e5.isError) {
        let e
        ;(eC[68] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)(m.A, {
              id: "chatgptConversations.composer.projectSelector.error",
              defaultMessage: "Projects couldn't be loaded",
              description: "Error message for the cloud project section of the composer project picker",
            })),
            (eC[68] = e))
          : (e = eC[68]),
          (en = e))
      }
      ;(eC[69] !== tf ? ((eu = tf ? [tf] : []), (eC[69] = tf), (eC[70] = eu)) : (eu = eC[70]),
        eC[71] !== tv ? ((ep = () => tv(!1)), (eC[71] = tv), (eC[72] = ep)) : (ep = eC[72]),
        eC[73] !== tu
          ? ((em = (e) => {
              ;((e0.current = !0), tu(e))
            }),
            (eC[73] = tu),
            (eC[74] = em))
          : (em = eC[74]),
        eC[75] === Symbol.for("react.memo_cache_sentinel")
          ? ((eh = (0, l.jsx)(m.A, {
              id: "composer.localCwdDropdown.clearProject",
              defaultMessage: "Don't work in a project",
              description: "Menu item that clears the selected project and starts projectless tasks",
            })),
            (eC[75] = eh))
          : (eh = eC[75]))
      let tR = tj ? th : void 0,
        tO = eE && eG ? tT : null
      ;(eC[76] !== ti || eC[77] !== tp
        ? ((ef = ti ? () => tp("remote") : void 0), (eC[76] = ti), (eC[77] = tp), (eC[78] = ef))
        : (ef = eC[78]),
        eC[79] !== en ||
        eC[80] !== e7 ||
        eC[81] !== eu ||
        eC[82] !== ep ||
        eC[83] !== em ||
        eC[84] !== tR ||
        eC[85] !== tO ||
        eC[86] !== ef
          ? ((eg = (0, l.jsx)(J, {
              groups: e7,
              selectedProjectIds: eu,
              onRequestClose: ep,
              onSelectProjectId: em,
              projectlessActionLabel: eh,
              onSelectProjectless: tR,
              footerItems: tO,
              onAddRemoteProject: ef,
              emptyMessage: en,
            })),
            (eC[79] = en),
            (eC[80] = e7),
            (eC[81] = eu),
            (eC[82] = ep),
            (eC[83] = em),
            (eC[84] = tR),
            (eC[85] = tO),
            (eC[86] = ef),
            (eC[87] = eg))
          : (eg = eC[87]))
      let tD = eg
      if (eV) return tD
      if ("home" === eH && null == eO) {
        let e, t, o, n
        eC[88] !== tj || eC[89] !== th || eC[90] !== eQ
          ? ((e = tj
              ? {
                  label: eQ.formatMessage({
                    id: "composer.localCwdDropdown.clearProject",
                    defaultMessage: "Don't work in a project",
                    description: "Menu item that clears the selected project and starts projectless tasks",
                  }),
                  onClear: th,
                }
              : void 0),
            (eC[88] = tj),
            (eC[89] = th),
            (eC[90] = eQ),
            (eC[91] = e))
          : (e = eC[91])
        let s = tb ?? tk
        return (
          eC[92] !== eW ||
          eC[93] !== tD ||
          eC[94] !== tv ||
          eC[95] !== tm ||
          eC[96] !== tM ||
          eC[97] !== tA ||
          eC[98] !== tN ||
          eC[99] !== tU ||
          eC[100] !== ty ||
          eC[101] !== tx ||
          eC[102] !== eR ||
          eC[103] !== e ||
          eC[104] !== s ||
          eC[105] !== eq
            ? ((t = (0, l.jsx)(ec.j, {
                "aria-label": tU,
                disabled: eW,
                foreground: tM,
                menuOpen: tx,
                clearAction: e,
                onCloseAutoFocus: tm,
                onOpenChange: tv,
                icon: s,
                shortcut: eR,
                subtleHover: eq,
                tooltipContent: tA,
                tooltipOpenWhen: tN,
                value: ty,
                children: tD,
              })),
              (eC[92] = eW),
              (eC[93] = tD),
              (eC[94] = tv),
              (eC[95] = tm),
              (eC[96] = tM),
              (eC[97] = tA),
              (eC[98] = tN),
              (eC[99] = tU),
              (eC[100] = ty),
              (eC[101] = tx),
              (eC[102] = eR),
              (eC[103] = e),
              (eC[104] = s),
              (eC[105] = eq),
              (eC[106] = t))
            : (t = eC[106]),
          eC[107] !== tC ? ((o = tC && (0, l.jsx)(B.v, { roots: tC })), (eC[107] = tC), (eC[108] = o)) : (o = eC[108]),
          eC[109] !== t || eC[110] !== o
            ? ((n = (0, l.jsxs)(l.Fragment, { children: [t, o] })), (eC[109] = t), (eC[110] = o), (eC[111] = n))
            : (n = eC[111]),
          n
        )
      }
      let tE = "hero" === eH ? "center" : "start"
      ;(eC[112] !== tL || eC[113] !== t_ || eC[114] !== eO || eC[115] !== eH
        ? ((ej = eO ?? ("hero" === eH ? t_() : tL())),
          (eC[112] = tL),
          (eC[113] = t_),
          (eC[114] = eO),
          (eC[115] = eH),
          (eC[116] = ej))
        : (ej = eC[116]),
        eC[117] !== eW ||
        eC[118] !== tD ||
        eC[119] !== tv ||
        eC[120] !== tm ||
        eC[121] !== tx ||
        eC[122] !== tE ||
        eC[123] !== ej
          ? ((ex = (0, l.jsx)(k.A, {
              open: tx,
              onOpenChange: tv,
              onCloseAutoFocus: tm,
              side: "top",
              align: tE,
              disabled: eW,
              triggerButton: ej,
              contentWidth: "workspace",
              contentMaxHeight: "tall",
              children: tD,
            })),
            (eC[117] = eW),
            (eC[118] = tD),
            (eC[119] = tv),
            (eC[120] = tm),
            (eC[121] = tx),
            (eC[122] = tE),
            (eC[123] = ej),
            (eC[124] = ex))
          : (ex = eC[124]))
      let tB = ex
      return (
        eC[125] !== tj ||
        eC[126] !== eW ||
        eC[127] !== tB ||
        eC[128] !== th ||
        eC[129] !== eQ ||
        eC[130] !== tx ||
        eC[131] !== eO ||
        eC[132] !== eH
          ? ((ev =
              "default" === eH && tj && null == eO
                ? (0, l.jsx)(er.H, {
                    clearLabel: eQ.formatMessage({
                      id: "composer.localCwdDropdown.clearProject",
                      defaultMessage: "Don't work in a project",
                      description: "Menu item that clears the selected project and starts projectless tasks",
                    }),
                    disabled: eW,
                    menuOpen: tx,
                    onClear: th,
                    children: tB,
                  })
                : tB),
            (eC[125] = tj),
            (eC[126] = eW),
            (eC[127] = tB),
            (eC[128] = th),
            (eC[129] = eQ),
            (eC[130] = tx),
            (eC[131] = eO),
            (eC[132] = eH),
            (eC[133] = ev))
          : (ev = eC[133]),
        eC[134] !== tC ? ((eI = tC && (0, l.jsx)(B.v, { roots: tC })), (eC[134] = tC), (eC[135] = eI)) : (eI = eC[135]),
        eC[136] !== ev || eC[137] !== eI
          ? ((ew = (0, l.jsxs)(l.Fragment, { children: [ev, eI] })), (eC[136] = ev), (eC[137] = eI), (eC[138] = ew))
          : (ew = eC[138]),
        ew
      )
    }
  },
  zrLs(e, t, o) {
    o.d(t, { i: () => eb })
    var l = o("ABep"),
      n = o("zTeN"),
      s = o("OMIV"),
      r = o("QosV"),
      a = o("KUdL"),
      c = o.n(a),
      i = o("zd8w"),
      d = o("Wf1j"),
      u = o("oyxz"),
      p = o("HZfM"),
      m = o("fHsr"),
      h = o("tl5a"),
      f = o("j9xU"),
      g = o("bqtn"),
      j = o("GO7r"),
      x = o("nluz"),
      v = o("GrNd"),
      I = o("m8VT"),
      w = o("pki7"),
      C = o("wsIu"),
      k = o("kdqP"),
      b = o("kx7U"),
      S = o("Sd8U"),
      y = o("o4oB"),
      M = o("ndjw"),
      A = o("kfGJ"),
      U = o("knz1"),
      P = o("TSib"),
      T = o("eyOG"),
      L = o("w487"),
      N = o("AVEN"),
      _ = o("ckTT"),
      R = o("OipO"),
      O = o("Asbu"),
      D = o("GxtJ"),
      E = o("SqHz"),
      B = o("aG5D"),
      G = o("LIxM"),
      F = o("Qgfj"),
      W = o("Lhpx"),
      z = o("HOLv"),
      H = o("akUq"),
      Z = o("T9N0"),
      V = o("o2hF"),
      Q = o("tz0P"),
      K = o("OWtl"),
      J = o("Oj9r"),
      X = o("fnPc"),
      Y = o("nlQE"),
      q = o("zx49"),
      $ = o("EH2H")
    let ee = (e, t) => {
        let o = (0, W.ZQ)(e) ?? "top",
          l = "top" === o ? e.ownerDocument.defaultView?.visualViewport : void 0,
          n = e.getBoundingClientRect().top - e.ownerDocument.documentElement.getBoundingClientRect().top
        return { side: o, align: "start", sideOffset: null == l ? 1 : Math.max(1, (n - l.pageTop - l.height + 6) / t) }
      },
      et = (0, n.un)(K.u, ({ get: e }) => !e(b.kj) && e(b.u8)?.length === 0)
    function eo(e) {
      let t,
        o,
        s,
        a,
        c,
        m,
        h,
        f,
        x,
        v,
        I,
        w = (0, r.c)(71),
        {
          selection: C,
          presentation: k,
          onLocalSelected: b,
          localDisabledReason: S,
          onRemoteSelected: M,
          cloud: U,
          remoteItems: P,
          remoteItemsEmpty: T,
          open: L,
          onOpenChange: N,
          disabled: _,
          modal: F,
          hideExecutionSelector: W,
          onCloseAutoFocus: K,
        } = e,
        eo = void 0 === k ? "inline" : k,
        er = void 0 !== W && W,
        ea = (0, n.gh)(J.GD),
        ec = (0, d.A)(),
        ei = (0, p.Zp)(),
        [ed, eu] = (0, i.useState)(""),
        [ep, em] = (0, i.useState)(!1),
        eh = (0, i.useRef)(!1),
        ef = (0, i.useRef)(null),
        eg = (0, i.useRef)(null),
        ej = C.kind,
        ex = "cloud" === ej && null == C.name && U?.defaultSelected === !0
      w[0] !== U?.onBlankSelected || w[1] !== ec || w[2] !== ed
        ? ((t = ec.formatMessage(es.defaultEnvironment)),
          (o = U?.onBlankSelected != null && t.toLocaleLowerCase().includes(ed.trim().toLocaleLowerCase())),
          (w[0] = U?.onBlankSelected),
          (w[1] = ec),
          (w[2] = ed),
          (w[3] = t),
          (w[4] = o))
        : ((t = w[3]), (o = w[4]))
      let ev = o,
        eI = _ || ("cloud" === ej && null == b && null == P),
        ew = (0, n.Ul)(null == T && "remote" === ej && "target" === L ? et : null),
        eC = "remote" === ej && (T ?? ew)
      w[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = (0, l.jsx)(u.A, {
            id: "composer.newTask.thisComputer",
            defaultMessage: "This computer",
            description: "Run a new task on this computer",
          })),
          (w[5] = s))
        : (s = w[5])
      let ek = s
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
        ey = G.g,
        eM = ek
      ;("cloud" === ej ? ((ey = R.f), (eM = eb)) : "remote" === ej && ((ey = E.b), (eM = eS)),
        w[8] !== U?.computerItems || w[9] !== ec || w[10] !== ej
          ? ((m =
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
            (w[11] = m))
          : (m = w[11]))
      let eA = m,
        eU = C.name
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
              defaultMessage: "Search remote computers…",
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
              defaultMessage: "Search computers…",
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
              defaultMessage: "Search environments…",
              description: "Search field in the new task cloud environment picker",
            })),
            (w[19] = ec),
            (w[20] = e))
          : (e = w[20]),
          (h = e))
      }
      w[21] !== U || w[22] !== ej || w[23] !== N || w[24] !== ea
        ? ((f = function (e, t) {
            ;("target" === e && "cloud" === ej && null != U && null == U.computerItems && (0, Q.Nb)(ea).catch(en),
              eu(""),
              N((o) => (null == e && null != t && o !== t ? o : e)))
          }),
          (w[21] = U),
          (w[22] = ej),
          (w[23] = N),
          (w[24] = ea),
          (w[25] = f))
        : (f = w[25])
      let eP = f
      return (
        w[26] !== U ||
        w[27] !== eI ||
        w[28] !== er ||
        w[29] !== ey ||
        w[30] !== ec ||
        w[31] !== ej ||
        w[32] !== eM ||
        w[33] !== S ||
        w[34] !== F ||
        w[35] !== K ||
        w[36] !== b ||
        w[37] !== M ||
        w[38] !== L ||
        w[39] !== eo ||
        w[40] !== P ||
        w[41] !== C.kind ||
        w[42] !== C.name ||
        w[43] !== eP
          ? ((x = er
              ? null
              : (0, l.jsxs)(g.Ab, {
                  disabled: eI,
                  modal: F,
                  open: "location" === L,
                  onOpenChange: (e) => eP(e ? "location" : null, "location"),
                  onCloseAutoFocus: (e) => {
                    ;("target" === L && e.preventDefault(), K?.(e))
                  },
                  side: "top",
                  align: "start",
                  contentWidth: "panel",
                  triggerButton: (0, l.jsx)(q.P, {
                    ref: ef,
                    "aria-label": ec.formatMessage({
                      id: "composer.newTask.workIn",
                      defaultMessage: "Work in",
                      description: "Menu for choosing where a new task executes",
                    }),
                    disabled: eI,
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
                    icon: (0, l.jsx)(z.I, { asset: ey, alignment: "primary" }),
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
                          RightIcon: "local" === C.kind ? j.ALZ : void 0,
                          disabled: null != S,
                          tooltipText: S,
                          onSelect: "local" === ej ? void 0 : b,
                          children: ek,
                        })
                      : null,
                    null != U
                      ? (0, l.jsx)(g.ms.Item, {
                          LeftIcon: j.LL7,
                          RightIcon: "cloud" === C.kind ? j.ALZ : void 0,
                          onSelect: "cloud" === ej && null != C.name ? void 0 : (U.onDefaultSelected ?? U.onSelected),
                          children: eb,
                        })
                      : null,
                    null != P
                      ? (0, l.jsx)(g.ms.Item, {
                          LeftIcon: j.ZEl,
                          RightIcon: "remote" === C.kind ? j.ALZ : void 0,
                          onSelect: "remote" === ej && null != C.name ? void 0 : M,
                          children: eS,
                        })
                      : null,
                  ],
                })),
            (w[26] = U),
            (w[27] = eI),
            (w[28] = er),
            (w[29] = ey),
            (w[30] = ec),
            (w[31] = ej),
            (w[32] = eM),
            (w[33] = S),
            (w[34] = F),
            (w[35] = K),
            (w[36] = b),
            (w[37] = M),
            (w[38] = L),
            (w[39] = eo),
            (w[40] = P),
            (w[41] = C.kind),
            (w[42] = C.name),
            (w[43] = eP),
            (w[44] = x))
          : (x = w[44]),
        w[45] !== U ||
        w[46] !== ep ||
        w[47] !== t ||
        w[48] !== _ ||
        w[49] !== ex ||
        w[50] !== eC ||
        w[51] !== ej ||
        w[52] !== F ||
        w[53] !== ei ||
        w[54] !== K ||
        w[55] !== L ||
        w[56] !== eo ||
        w[57] !== P ||
        w[58] !== ea ||
        w[59] !== h ||
        w[60] !== ed ||
        w[61] !== C.kind ||
        w[62] !== C.name ||
        w[63] !== eP ||
        w[64] !== ev ||
        w[65] !== eA ||
        w[66] !== eU
          ? ((v =
              "local" !== ej && ("cloud" !== ej || U?.allowEnvironments !== !1)
                ? (0, l.jsx)(Y.H, {
                    clearLabel: t,
                    disabled: _,
                    menuOpen: null != L,
                    onClear: "cloud" === ej && null != C.name && "inline" === eo ? U?.onBlankSelected : void 0,
                    children: (0, l.jsxs)(g.Ab, {
                      disabled: _,
                      modal: F,
                      open: "target" === L,
                      onOpenChange: (e) => {
                        ;(e || !ep) && eP(e ? "target" : null, "target")
                      },
                      onInteractOutside: (e) => {
                        ep && e.preventDefault()
                      },
                      onOpenAutoFocus: (e) => {
                        if (!(e.target instanceof HTMLElement)) return
                        let t = eh.current ? e.target : e.target.querySelector("input")
                        null != t && (t.focus({ preventScroll: !0 }), e.preventDefault())
                      },
                      onCloseAutoFocus: (e) => {
                        ;("location" === L && e.preventDefault(), K?.(e))
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
                      triggerButton: (0, l.jsx)(q.P, {
                        ref: eg,
                        "aria-label": eA,
                        onPointerDownCapture: (e) => {
                          eh.current = "touch" === e.pointerType
                        },
                        onKeyDownCapture: () => {
                          eh.current = !1
                        },
                        disabled: _,
                        categoryLabel: null,
                        presentation: "settings" === eo ? "menu" : eo,
                        collapse: "xs",
                        icon: (0, l.jsx)("span", {
                          className: "inline-flex shrink-0",
                          "data-clear-selector-icon": !0,
                          children: (0, l.jsx)(z.I, {
                            className: ex ? void 0 : "translate-y-px",
                            asset: ex ? O.n : B.t,
                            alignment: "primary",
                          }),
                        }),
                        indicator: "chevron",
                        value: eU,
                        valueClassName: "max-w-40",
                      }),
                      children: [
                        eC
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
                        "cloud" === ej ? U?.computerItems?.(ed, em) : null,
                        "cloud" === ej && null != U && null == U.computerItems
                          ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                ev
                                  ? (0, l.jsx)(g.ms.Item, {
                                      leftIconAsset: O.n,
                                      RightIcon: ex ? j.ALZ : void 0,
                                      onSelect: U.onBlankSelected,
                                      children: t,
                                    })
                                  : null,
                                (0, l.jsx)(H.L, {
                                  children: (0, l.jsx)(V.i, {
                                    searchQuery: ed,
                                    showEmptyState: !ev,
                                    isSelectionActive: "cloud" === C.kind,
                                    selection: U.environmentSelection,
                                    onSelected: U.onSelected,
                                  }),
                                }),
                                (0, l.jsx)(g.ms.Separator, {}),
                                (0, l.jsx)(g.ms.Item, {
                                  LeftIcon: j.xFs,
                                  onSelect: () => (0, Z.h)(ea, ei, { project: ea.get(y.S) }),
                                  children: (0, l.jsx)(u.A, {
                                    id: "composer.newTask.createEnvironment",
                                    defaultMessage: "Create environment",
                                    description: "Create a cloud execution environment",
                                  }),
                                }),
                                (0, l.jsx)(l.Fragment, {
                                  children: (0, l.jsx)(g.ms.Item, {
                                    leftIconAsset: D.T,
                                    onSelect: () => {
                                      ;(eP(null), (0, X.a)(ea, A.fI), ei("/settings/local-environments"))
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
            (w[46] = ep),
            (w[47] = t),
            (w[48] = _),
            (w[49] = ex),
            (w[50] = eC),
            (w[51] = ej),
            (w[52] = F),
            (w[53] = ei),
            (w[54] = K),
            (w[55] = L),
            (w[56] = eo),
            (w[57] = P),
            (w[58] = ea),
            (w[59] = h),
            (w[60] = ed),
            (w[61] = C.kind),
            (w[62] = C.name),
            (w[63] = eP),
            (w[64] = ev),
            (w[65] = eA),
            (w[66] = eU),
            (w[67] = v))
          : (v = w[67]),
        w[68] !== v || w[69] !== x
          ? ((I = (0, l.jsxs)(l.Fragment, { children: [x, v] })), (w[68] = v), (w[69] = x), (w[70] = I))
          : (I = w[70]),
        I
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
    let es = (0, F.YK)({
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
        I,
        w,
        b,
        R,
        O = (0, r.c)(55),
        { presentation: D } = e,
        E = void 0 === D ? "inline" : D,
        B = (0, n.gh)(S.PR),
        G = (0, d.A)(),
        F = (0, p.Zp)(),
        W = (0, n.Ul)(_.XO),
        z = (0, n.Ul)(_.m4),
        H = (0, n.Ul)(f.s8),
        Z = (0, n.Ul)(y.S),
        V = (0, n._U)(M.g, Z),
        Q = (0, n.Ul)(null),
        K = (0, n.Ul)(null),
        J = null == Q && H && Z?.type === "remote",
        X = (0, n.Ul)(ec.tS),
        Y = (0, n.Ul)(ec.PF),
        q = (0, n.Ul)(er.H$),
        $ = X?.hostId ?? (J && q?.kind === "remote" ? q.hostId : null),
        ee = (0, n._U)(M.fm, $ ?? A.fI),
        et = (0, n.Ul)(_.G8),
        el = (0, n.Ul)(f.Vy),
        en = (0, n.Ul)(ec.Os),
        es = (0, n._U)(et && null == Q ? x.NU : null, Z),
        ei = (0, n._U)(et && null == Q ? x.IC : null, Z),
        ed = (0, n._U)(null, { accountId: Q?.accountId ?? "", teamId: Q?.teamId ?? "" })?.data,
        eu = (0, n._U)(x.y_, Z),
        em = (0, n.Ul)(ec.aZ)
      ;(O[0] !== B
        ? ((t = () => () => {
            ;(0, v.B6)(B)
          }),
          (o = [B]),
          (O[0] = B),
          (O[1] = t),
          (O[2] = o))
        : ((t = O[1]), (o = O[2])),
        (0, i.useEffect)(t, o),
        O[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = { kind: (0, _.CC)() ? "local" : "cloud" }), (O[3] = s))
          : (s = O[3]))
      let eh = s
      if (en) {
        let e,
          t = null == Q ? eu?.name : void 0
        if (null != Q && !K && 0 === Q.environmentIds.length) {
          let e
          ;(O[4] !== G
            ? ((e = G.formatMessage({
                id: "composer.newTask.noTeamComputer",
                defaultMessage: "No computer",
                description:
                  "Selected value in the new team chat computer picker when chatting without a connected computer",
              })),
              (O[4] = G),
              (O[5] = e))
            : (e = O[5]),
            (t = e))
        }
        if (null != Q && null == t) {
          let e,
            o = Q.environmentIds
          ;(O[6] !== o?.[0] || O[7] !== o?.length || O[8] !== G || O[9] !== ed
            ? ((e =
                (o?.length ?? 0) > 1
                  ? G.formatMessage(
                      {
                        id: "composer.newTask.selectedExecutors",
                        defaultMessage: "{count} computers",
                        description: "Number of registered computers selected for a new Cloud task",
                      },
                      { count: o?.length },
                    )
                  : ed?.find((e) => e.environmentId === o?.[0])?.displayName),
              (O[6] = o?.[0]),
              (O[7] = o?.length),
              (O[8] = G),
              (O[9] = ed),
              (O[10] = e))
            : (e = O[10]),
            (t = e))
        }
        ;(O[11] !== t ? ((e = { kind: "cloud", name: t }), (O[11] = t), (O[12] = e)) : (e = O[12]), (eh = e))
      } else if (Y) {
        let e,
          t = ee.id === $ ? ee.display_name : void 0
        ;(O[13] !== t ? ((e = { kind: "remote", name: t }), (O[13] = t), (O[14] = e)) : (e = O[14]), (eh = e))
      }
      O[15] !== V[0] || O[16] !== B
        ? ((a = function (e) {
            e || ((0, v.B6)(B), (0, ec.CQ)(B, null))
            let t = V[0],
              o = (0, U.zp)({ hostId: A.fI, cwd: t })
            ;(e
              ? ((0, N.f)(B), (0, P.pX)(B, "local"))
              : (0, P.GY)(B, o, null == o ? "local" : ((0, U.IA)(B, o) ?? "local")),
              (0, er.CL)(B, { kind: e ? "cloud" : "local" }))
          }),
          (O[15] = V[0]),
          (O[16] = B),
          (O[17] = a))
        : (a = O[17])
      let eg = a
      O[18] !== B || O[19] !== eg
        ? ((c = () => {
            let { workspaces: e, isPending: t } = B.get(ec.Yj),
              o = e.filter((e) => null == B.get(k.e, e.hostId))
            if (t || 0 === e.length) return
            if (0 === o.length) {
              ;(0, _.CC)() && B.get(ec.PF) && eg(!1)
              return
            }
            let l = B.get(ec.tS)?.hostId,
              n = o[o.findIndex((e) => e.hostId === l) + 1] ?? ((0, _.CC)() ? void 0 : o[0])
            null == n ? eg(!1) : ((0, v.B6)(B), (0, ec.CQ)(B, n.hostId), ef(B, n.hostId, n.rootPaths[0]))
          }),
          (O[18] = B),
          (O[19] = eg),
          (O[20] = c))
        : (c = O[20])
      let ej = W && !J && !en
      return (
        O[21] !== ej ? ((h = { enabled: ej }), (O[21] = ej), (O[22] = h)) : (h = O[22]),
        (0, L.Kr)("composer.cycleHost", c, h),
        O[23] !== es ||
        O[24] !== et ||
        O[25] !== el ||
        O[26] !== ei ||
        O[27] !== F ||
        O[28] !== em ||
        O[29] !== E ||
        O[30] !== Z ||
        O[31] !== W ||
        O[32] !== J ||
        O[33] !== B ||
        O[34] !== eg ||
        O[35] !== eh ||
        O[36] !== z ||
        O[37] !== Q
          ? ((I = J
              ? null
              : (0, l.jsx)(eo, {
                  presentation: E,
                  selection: eh,
                  hideExecutionSelector: null != Q,
                  disabled: !(0, _.CC)() && !et && !(W && null == Q),
                  open: em,
                  onOpenChange: (e) => B.set(ec.aZ, "function" == typeof e ? e(B.get(ec.aZ)) : e),
                  onLocalSelected: (0, _.CC)() ? () => eg(!1) : void 0,
                  onRemoteSelected: W
                    ? () => {
                        ;((0, v.B6)(B),
                          (0, ec.It)(B).then((e) => {
                            let t = B.get(ec.tS)?.workspace
                            e && null != t && ef(B, t.hostId, t.rootPaths[0])
                          }))
                      }
                    : void 0,
                  cloud: et
                    ? {
                        defaultSelected: !0 === es && (null == Z || !0 === ei),
                        allowEnvironments: null != Q || el,
                        computerItems: void 0,
                        onSelected: () => eg(!0),
                        onBlankSelected: es ? () => (0, ea.ZR)(B, Z) : void 0,
                        onDefaultSelected: () => {
                          ;(eg(!0), el && null == Q && !B.get(x.IC, Z) && (0, v.vE)(B))
                        },
                      }
                    : void 0,
                  remoteItems: W
                    ? (e) =>
                        (0, l.jsxs)(l.Fragment, {
                          children: [
                            (0, l.jsx)(C.Y, {
                              className: "vertical-scroll-fade-mask [--edge-fade-distance:1.5rem]",
                              children: (0, l.jsx)(ep, { searchQuery: e }),
                            }),
                            null != z
                              ? (0, l.jsxs)(l.Fragment, {
                                  children: [
                                    (0, l.jsx)(g.ms.Separator, {}),
                                    (0, l.jsx)(g.ms.Item, {
                                      LeftIcon: j.xFs,
                                      onSelect: () => void F(z),
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
            (O[23] = es),
            (O[24] = et),
            (O[25] = el),
            (O[26] = ei),
            (O[27] = F),
            (O[28] = em),
            (O[29] = E),
            (O[30] = Z),
            (O[31] = W),
            (O[32] = J),
            (O[33] = B),
            (O[34] = eg),
            (O[35] = eh),
            (O[36] = z),
            (O[37] = Q),
            (O[38] = I))
          : (I = O[38]),
        O[39] !== en || O[40] !== W || O[41] !== $ || O[42] !== J || O[43] !== V[0] || O[44] !== eh
          ? ((w =
              !en && W && null != $ && J
                ? (0, l.jsx)(T.R, {
                    hostId: $,
                    connectionDisplayName: eh.name ?? null,
                    projectPath: V[0] ?? null,
                    showDisabledState: !0,
                  })
                : null),
            (O[39] = en),
            (O[40] = W),
            (O[41] = $),
            (O[42] = J),
            (O[43] = V[0]),
            (O[44] = eh),
            (O[45] = w))
          : (w = O[45]),
        O[46] !== en || O[47] !== W || O[48] !== $ || O[49] !== J
          ? ((b = en || !W || null == $ || J ? null : (0, l.jsx)(m.r0, { hostId: $, showDisabledState: !0 })),
            (O[46] = en),
            (O[47] = W),
            (O[48] = $),
            (O[49] = J),
            (O[50] = b))
          : (b = O[50]),
        O[51] !== w || O[52] !== b || O[53] !== I
          ? ((R = (0, l.jsxs)(l.Fragment, { children: [I, w, b] })), (O[51] = w), (O[52] = b), (O[53] = I), (O[54] = R))
          : (R = O[54]),
        R
      )
    }
    function eu(e) {
      let t,
        o = (0, r.c)(2),
        { hostId: s } = e,
        a = (0, n._U)(h.y2, s)
      return (o[0] !== a ? ((t = (0, l.jsx)(m.Tn, { state: a })), (o[0] = a), (o[1] = t)) : (t = o[1]), t)
    }
    function ep(e) {
      let t,
        o,
        s = (0, r.c)(8),
        { searchQuery: a } = e,
        i = (0, p.Zp)(),
        d = (0, n.Ul)(_.m4),
        m = (0, n.Ul)(b.u8),
        h = (0, n.Ul)(f.s8),
        j = (0, n.Ul)(y.S),
        x = (0, n.Ul)(ec.tS),
        v = m?.filter((e) => e.autoConnect && (!h || j?.type !== "remote" || e.hostId === x?.hostId)),
        w = (0, n._U)(ei.P5, "ssh"),
        C = a.trim().toLocaleLowerCase(),
        k =
          null == v
            ? void 0
            : c()(v, (e) => {
                let t = w.indexOf(e.hostId)
                return t < 0 ? 1 / 0 : t
              }).filter((e) => (e.displayName ?? e.hostId).toLocaleLowerCase().includes(C)),
        S = null == v ? (0, l.jsx)(I.h, {}) : null
      s[0] !== m?.length
        ? ((t =
            m?.length === 0
              ? (0, l.jsx)(g.ms.Message, {
                  compact: !0,
                  children: (0, l.jsx)(u.A, {
                    id: "composer.newTask.noComputers",
                    defaultMessage: "No remote computers added",
                    description: "No remote computers are configured in this app",
                  }),
                })
              : null),
          (s[0] = m?.length),
          (s[1] = t))
        : (t = s[1])
      let M =
          null != d && null != m && m.length > 0 && v?.length === 0
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
          null != v && v.length > 0 && k?.length === 0
            ? (0, l.jsx)(g.ms.Message, {
                compact: !0,
                children: (0, l.jsx)(u.A, {
                  id: "composer.newTask.noMatchingRemotes",
                  defaultMessage: "No matching remote computers",
                  description: "No available remote computers match the task picker search",
                }),
              })
            : null,
        U = k?.map(em)
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
    function em(e) {
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
        p = (0, n.gh)(S.PR),
        { workspaces: m, isPending: f } = (0, n.Ul)(ec.Yj),
        x = (0, n.Ul)(ec.tS),
        I = (0, n._U)(h.y2, d.hostId),
        C = (0, n._U)(k.e, d.hostId)
      if (i[0] !== d.hostId || i[1] !== m) {
        let e
        ;(i[3] !== d.hostId ? ((e = (e) => e.hostId === d.hostId), (i[3] = d.hostId), (i[4] = e)) : (e = i[4]),
          (t = m.find(e)),
          (i[0] = d.hostId),
          (i[1] = m),
          (i[2] = t))
      } else t = i[2]
      let b = t,
        y = "connected" === I && !f && null == b
      if (null == b)
        if ("disconnected" === I || "error" === I) {
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
      let M = null != C || (null == b && !y),
        A = null != C,
        U = null != C ? "w-56 text-start" : void 0,
        P = C ?? void 0
      i[8] !== d.hostId ? ((s = (0, l.jsx)(eu, { hostId: d.hostId })), (i[8] = d.hostId), (i[9] = s)) : (s = i[9])
      let T = x?.hostId === d.hostId ? j.ALZ : void 0
      i[10] !== d.hostId || i[11] !== p || i[12] !== b
        ? ((a = () => {
            null == b
              ? (0, w.vd)({ hostId: d.hostId, setActive: !1 })
              : ((0, v.B6)(p), (0, ec.CQ)(p, b.hostId), ef(p, b.hostId, b.rootPaths[0]))
          }),
          (i[10] = d.hostId),
          (i[11] = p),
          (i[12] = b),
          (i[13] = a))
        : (a = i[13])
      let L = d.displayName ?? d.hostId
      return (
        i[14] !== C ||
        i[15] !== o ||
        i[16] !== M ||
        i[17] !== A ||
        i[18] !== U ||
        i[19] !== P ||
        i[20] !== s ||
        i[21] !== T ||
        i[22] !== a ||
        i[23] !== L
          ? ((c = (0, l.jsx)(g.ms.Item, {
              disabled: M,
              focusableWhenDisabled: A,
              tooltipText: C,
              tooltipTextClassName: U,
              "aria-description": P,
              leftIcon: s,
              RightIcon: T,
              SubText: o,
              onSelect: a,
              children: L,
            })),
            (i[14] = C),
            (i[15] = o),
            (i[16] = M),
            (i[17] = A),
            (i[18] = U),
            (i[19] = P),
            (i[20] = s),
            (i[21] = T),
            (i[22] = a),
            (i[23] = L),
            (i[24] = c))
          : (c = i[24]),
        c
      )
    }
    function ef(e, t, o) {
      let l = (0, U.zp)({ hostId: t, cwd: o ?? null })
      ;(0, P.GY)(e, l, null == l ? "local" : ((0, U.IA)(e, l) ?? "local"))
    }
    var eg = o("EShr"),
      ej = o("OM3m"),
      ex = o("Uc3f"),
      ev = o("gBBC"),
      eI = o("smUZ"),
      ew = o("d1Zk")
    function eC(e) {
      let t,
        o,
        s,
        a,
        c,
        m,
        h,
        g,
        I,
        w,
        C,
        U,
        P,
        T = (0, r.c)(80),
        { onProjectChange: N, presentation: R } = e,
        O = void 0 === R ? "inline" : R,
        D = (0, n.gh)(S.PR),
        E = (0, d.A)(),
        B = (0, p.Zp)(),
        G = (0, p.zy)(),
        F = (0, n.Ul)(_.XO),
        W = (0, n.Ul)(y.S),
        z = (0, n.Ul)(null),
        H = (0, n.Ul)(null),
        Z = (0, n.Ul)(ec.PF),
        V = (0, n.Ul)(er.H$),
        Q = V?.kind === "remote" ? V.hostId : null,
        K = (0, n._U)(M.fm, Q ?? A.fI),
        J = (0, n.Ul)(_.G8),
        X = (0, n.Ul)(f.Vy),
        Y = (0, n.Ul)(ec.Os),
        q = (0, n.Ul)(_.FZ),
        $ = (0, n.Ul)(_.k5),
        ee = (0, n._U)((q || $) && Y && null == z ? ej.Ij : null, W),
        et = (0, n.Ul)(!!J && null == z && x._z),
        eo = (0, n._U)(null, { accountId: z?.accountId ?? "", teamId: z?.teamId ?? "" })?.data,
        el = (0, n._U)(x.y_, W),
        en = (0, n._U)(x.FD, W),
        es = (0, n.Ul)(null)?.data,
        ei = (0, n.Ul)(ec.aZ)
      ;(T[0] !== D
        ? ((t = () => () => (0, v.B6)(D)), (o = [D]), (T[0] = D), (T[1] = t), (T[2] = o))
        : ((t = T[1]), (o = T[2])),
        (0, i.useEffect)(t, o),
        T[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = { kind: (0, _.CC)() ? "local" : "cloud" }), (T[3] = s))
          : (s = T[3]))
      let ed = s
      if (Y) {
        let e = null == z ? el?.name : void 0,
          t = z?.environmentIds ?? en,
          o = null == z ? es : eo
        if ((null != z || ((q || $) && ee?.length === 0 && null == el)) && 0 === t.length) {
          let t
          ;(T[4] !== q || T[5] !== E
            ? ((t = q
                ? E.formatMessage({
                    id: "composer.newTask.noDevice",
                    defaultMessage: "Work without device",
                    description: "Run a cloud chat without an attached computer",
                  })
                : E.formatMessage({
                    id: "composer.newTask.workWithoutTeamComputer",
                    defaultMessage: "Work without a computer",
                    description: "Label in the chat computer picker when working without a computer",
                  })),
              (T[4] = q),
              (T[5] = E),
              (T[6] = t))
            : (t = T[6]),
            (e = t))
        }
        if (null != z && null == e) {
          let l
          ;(T[7] !== o || T[8] !== t[0] || T[9] !== t.length || T[10] !== E
            ? ((l =
                t.length > 1
                  ? E.formatMessage(
                      {
                        id: "composer.newTask.selectedExecutors",
                        defaultMessage: "{count} computers",
                        description: "Number of registered computers selected for a new Cloud task",
                      },
                      { count: t.length },
                    )
                  : o?.find((e) => e.environmentId === t[0])?.displayName),
              (T[7] = o),
              (T[8] = t[0]),
              (T[9] = t.length),
              (T[10] = E),
              (T[11] = l))
            : (l = T[11]),
            (e = l))
        }
        if ((null != z || ((q || $) && ee?.length === 0 && null == el)) && 0 === t.length) {
          let t
          ;(T[12] !== e ? ((t = { kind: "no-computer", name: e }), (T[12] = e), (T[13] = t)) : (t = T[13]), (ed = t))
        } else if (null != z || (null == el && t.length > 0)) {
          let l, n
          ;(T[14] !== o || T[15] !== t
            ? ((l = t.length > 0 && t.every((e) => o?.some((t) => t.environmentId === e && "connected" === t.status))),
              (T[14] = o),
              (T[15] = t),
              (T[16] = l))
            : (l = T[16]),
            T[17] !== e || T[18] !== l
              ? ((n = { kind: "computer", name: e, connected: l }), (T[17] = e), (T[18] = l), (T[19] = n))
              : (n = T[19]),
            (ed = n))
        } else {
          let t
          ;(T[20] !== e ? ((t = { kind: "cloud", name: e }), (T[20] = e), (T[21] = t)) : (t = T[21]), (ed = t))
        }
      } else if (Z) {
        let e,
          t = Q ?? void 0,
          o = K.id === Q ? K.display_name : void 0
        ;(T[22] !== t || T[23] !== o
          ? ((e = { kind: "remote", hostId: t, name: o }), (T[22] = t), (T[23] = o), (T[24] = e))
          : (e = T[24]),
          (ed = e))
      }
      T[25] !== G || T[26] !== B || T[27] !== N || T[28] !== D
        ? ((a = (e) => {
            ;(null != N ? ((0, ex.J)(D, (0, ev.av)(e)), N((0, ev.av)(e))) : (0, ev.yN)(D, e), (0, eI.n)(D, B, G, e))
          }),
          (T[25] = G),
          (T[26] = B),
          (T[27] = N),
          (T[28] = D),
          (T[29] = a))
        : (a = T[29])
      let eu = a
      T[30] !== eu || T[31] !== D
        ? ((c = (e) => {
            ;(0, ea.JR)(D, e, eu)
          }),
          (T[30] = eu),
          (T[31] = D),
          (T[32] = c))
        : (c = T[32])
      let ep = c
      T[33] !== D || T[34] !== ep
        ? ((m = () => {
            let e = D.get(b.u8)?.filter(ek)
            if (null == e || 0 === e.length) return
            let t = e.filter((e) => null == D.get(k.e, e.hostId)),
              o = D.get(er.H$)
            if (0 === t.length) {
              o?.kind === "remote" && (0, _.CC)() && ep(A.fI)
              return
            }
            let l = o?.kind === "remote" ? o.hostId : A.fI,
              n = t[t.findIndex((e) => e.hostId === l) + 1] ?? ((0, _.CC)() ? void 0 : t[0])
            ep(n?.hostId ?? A.fI)
          }),
          (T[33] = D),
          (T[34] = ep),
          (T[35] = m))
        : (m = T[35])
      let em = F && null == z && !Y
      if (
        (T[36] !== em ? ((h = { enabled: em }), (T[36] = em), (T[37] = h)) : (h = T[37]),
        (0, L.Kr)("composer.cycleHost", m, h),
        et)
      ) {
        let e
        ;(T[38] !== eu || T[39] !== D
          ? ((e = () => {
              ;((0, ea.yX)(D, () => eu(null)), (0, ea.ZR)(D))
            }),
            (T[38] = eu),
            (T[39] = D),
            (T[40] = e))
          : (e = T[40]),
          (g = e))
      } else if (
        null != z &&
        !H &&
        z.environmentIds.length > 0 &&
        z.environmentIds.every((e) => eo?.some((t) => t.environmentId === e && "connected" === t.status))
      ) {
        let e
        ;(T[41] !== D ? ((e = () => (0, er.CL)(D, { kind: "cloud" }, null)), (T[41] = D), (T[42] = e)) : (e = T[42]),
          (g = e))
      }
      T[43] !== q || T[44] !== J || T[45] !== O || T[46] !== z
        ? ((I = q && "inline" === O && (null != z || (0, _.CC)()) && J),
          (T[43] = q),
          (T[44] = J),
          (T[45] = O),
          (T[46] = z),
          (T[47] = I))
        : (I = T[47])
      let eh = I,
        ef = "local" !== ed.kind
      return (
        T[48] !== eu || T[49] !== ef || T[50] !== E || T[51] !== D || T[52] !== ep || T[53] !== eh || T[54] !== z
          ? ((w = eh
              ? (0, l.jsx)(eg.T, {
                  size: "compact",
                  variant: "form",
                  ariaLabel: E.formatMessage({
                    id: "composer.newTask.executionMode",
                    defaultMessage: "Run location",
                    description: "Group of buttons for choosing local or cloud execution for a new task",
                  }),
                  selectedId: ef ? "cloud" : "local",
                  options: [
                    ...(null == z
                      ? [
                          {
                            id: "local",
                            label: (0, l.jsx)(j.gkn, {}),
                            ariaLabel: E.formatMessage({
                              id: "composer.newTask.local",
                              defaultMessage: "Local",
                              description: "Run a new task on this computer",
                            }),
                            tooltipContent: (0, l.jsx)(u.A, {
                              id: "composer.newTask.thisComputer",
                              defaultMessage: "This computer",
                              description: "Run a new task on this computer",
                            }),
                          },
                        ]
                      : []),
                    {
                      id: "cloud",
                      label: (0, l.jsx)(j.LL7, {}),
                      ariaLabel: E.formatMessage({
                        id: "composer.newTask.cloudMode",
                        defaultMessage: "Cloud",
                        description: "Run a new task using a remote device, cloud environment, or SSH connection",
                      }),
                      tooltipContent: (0, l.jsx)(u.A, {
                        id: "composer.newTask.cloudMode",
                        defaultMessage: "Cloud",
                        description: "Run a new task using a remote device, cloud environment, or SSH connection",
                      }),
                    },
                  ],
                  onSelect: (e) => {
                    ;("cloud" === e) !== ef &&
                      (D.set(ec.aZ, null),
                      "local" === e
                        ? ep(A.fI)
                        : ((0, ea.yX)(D, () => eu(null)), (0, er.CL)(D, { kind: "cloud" }, null), (0, v.vE)(D)))
                  },
                })
              : null),
            (T[48] = eu),
            (T[49] = ef),
            (T[50] = E),
            (T[51] = D),
            (T[52] = ep),
            (T[53] = eh),
            (T[54] = z),
            (T[55] = w))
          : (w = T[55]),
        T[56] !== eu ||
        T[57] !== J ||
        T[58] !== X ||
        T[59] !== ef ||
        T[60] !== et ||
        T[61] !== B ||
        T[62] !== g ||
        T[63] !== ei ||
        T[64] !== O ||
        T[65] !== F ||
        T[66] !== D ||
        T[67] !== ep ||
        T[68] !== ed ||
        T[69] !== eh ||
        T[70] !== z
          ? ((C =
              !eh || ef
                ? (0, l.jsx)(ew.r, {
                    selection: ed,
                    presentation: O,
                    disabled: !(0, _.CC)() && !J && !(F && null == z),
                    open: null == ei ? null : "location",
                    onOpenChange: (e) => D.set(ec.aZ, e),
                    onLocalSelected: !eh && null == z && (0, _.CC)() ? () => ep(A.fI) : void 0,
                    cloud: J
                      ? {
                          onDefaultSelected: g,
                          onBlankSelected: et
                            ? () => {
                                ;((0, ea.yX)(D, () => eu(null)), (0, ea.ZR)(D))
                              }
                            : void 0,
                          allowEnvironments: null == z && X,
                          computerItems: void 0,
                          onManageComputers:
                            null != z
                              ? () => {
                                  ;(D.set(ec.aZ, null), B(`/settings/teams/${encodeURIComponent(z.teamId)}?tab=shared`))
                                }
                              : void 0,
                          onBeforeSelected: () => (0, ea.yX)(D, () => eu(null)),
                          onSelected: () => (0, er.CL)(D, { kind: "cloud" }, null),
                        }
                      : void 0,
                    onRemoteSelected: F && null == z ? ep : void 0,
                  })
                : null),
            (T[56] = eu),
            (T[57] = J),
            (T[58] = X),
            (T[59] = ef),
            (T[60] = et),
            (T[61] = B),
            (T[62] = g),
            (T[63] = ei),
            (T[64] = O),
            (T[65] = F),
            (T[66] = D),
            (T[67] = ep),
            (T[68] = ed),
            (T[69] = eh),
            (T[70] = z),
            (T[71] = C))
          : (C = T[71]),
        T[72] !== O || T[73] !== ed.kind || T[74] !== z
          ? ((U = null), (T[72] = O), (T[73] = ed.kind), (T[74] = z), (T[75] = U))
          : (U = T[75]),
        T[76] !== w || T[77] !== C || T[78] !== U
          ? ((P = (0, l.jsxs)(l.Fragment, { children: [w, C, U] })), (T[76] = w), (T[77] = C), (T[78] = U), (T[79] = P))
          : (P = T[79]),
        P
      )
    }
    function ek(e) {
      return e.autoConnect
    }
    function eb(e) {
      let { onProjectChange: t, presentation: o } = e,
        r = void 0 === o ? "inline" : o
      return (0, n._U)(s.JW, "1678134557")
        ? (0, l.jsx)(eC, { onProjectChange: t, presentation: r })
        : (0, l.jsx)(ed, { presentation: r })
    }
  },
  iRaF(e, t, o) {
    var l = o("nluz"),
      n = o("GrNd")
    o("OM3m")
    var s = o("Uc3f"),
      r = o("gBBC"),
      a = o("o4oB"),
      c = o("ndjw"),
      i = o("kfGJ"),
      d = o("XyS0"),
      u = o("woUV"),
      p = o("knz1"),
      m = o("TSib"),
      h = o("AVEN"),
      f = o("arTB"),
      g = o("Cybu")
    o.d(
      t,
      {},
      {
        JR: function (e, t, o) {
          ;(0, n.B6)(e)
          let l = e.get(a.S)
          if (((0, s.J)(e, l), (l?.type === "remote" ? e.get(c.U1, l.projectId)?.hostId : i.fI) !== t || null == l)) {
            let n = e
                .get(u.x)
                .filter((e) => !(0, d.Vm)(e) && ("local" === e.projectKind ? t === i.fI : e.hostId === t)),
              a = (0, s.d)(e, t),
              c = null === a ? null : (n.find((e) => e.projectId === a) ?? n[0] ?? null)
            ;((l = (0, r.av)(c)), (0, h.f)(e), o(c))
          }
          ;(0, f.CL)(e, t === i.fI ? { kind: "local" } : { kind: "remote", hostId: t }, l?.projectId ?? null)
          let g = (0, p.zp)({ hostId: t, cwd: e.get(c.g, l)[0] })
          ;(0, m.GY)(e, g, null == g ? "local" : ((0, p.IA)(e, g) ?? "local"))
        },
        ZR: function (e, t = null) {
          e.get(l.NU, t) &&
            ((0, n.B6)(e),
            null == t && (0, g.ke)(e, "cloud", null, t),
            (0, l.A3)(e, t),
            (0, f.CL)(e, { kind: "cloud" }, t?.projectId ?? null))
        },
        lB: function (e, t, o) {
          let l = e.get(f.aV) ? e.get(f.H$) : null
          ;((0, n.B6)(e),
            (0, h.f)(e),
            null != o ? o(t) : (0, r.yN)(e, (0, r.QO)(t)),
            null != l && (0, f.CL)(e, l, t?.projectId ?? null))
        },
        yX: function (e, t) {
          ;((0, s.J)(e, e.get(a.S)), (0, h.f)(e), (0, m.pX)(e, "local"), t())
        },
      },
    )
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
            { hostId: u, connectionDisplayName: p, projectPath: m, showDisabledState: h } = e
          if (null == u) return null
          let f = null == m,
            g = p ?? u
          return (
            d[0] !== g
              ? ((t = (0, l.jsx)(a.O, { className: "max-w-40 truncate select-none", collapse: "sm", children: g })),
                (d[0] = g),
                (d[1] = t))
              : (t = d[1]),
            d[2] !== m || d[3] !== f || d[4] !== t
              ? ((o = (0, l.jsx)(s.m, { content: m, disabled: f, children: t })),
                (d[2] = m),
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
            p,
            m,
            h,
            f,
            g,
            j,
            x,
            v = (0, n.c)(34),
            {
              children: I,
              emptyMessage: w,
              footerItems: C,
              headerItems: k,
              hasProjectItems: b,
              projectItems: S,
              searchLabel: y,
              searchQuery: M,
              status: A,
              onSearchQueryChange: U,
            } = e,
            P = (0, r.A)(),
            [T, L] = (0, s.useState)(!1)
          ;(b && T && L(!1),
            v[0] !== P || v[1] !== y
              ? ((t =
                  y ??
                  P.formatMessage({
                    id: "composer.localCwdDropdown.searchPlaceholder",
                    defaultMessage: "Search projects",
                    description: "Placeholder for searching the project dropdown",
                  })),
                (v[0] = P),
                (v[1] = y),
                (v[2] = t))
              : (t = v[2]))
          let N = t
          return (
            v[3] !== T || v[4] !== b || v[5] !== M
              ? ((o = (e) => {
                  ;(("ArrowDown" === e.key || "ArrowUp" === e.key) && L(!b),
                    "Enter" !== e.key || b || "" === M.trim() || T || e.preventDefault())
                }),
                (v[3] = T),
                (v[4] = b),
                (v[5] = M),
                (v[6] = o))
              : (o = v[6]),
            v[7] !== U
              ? ((u = (e) => {
                  ;(L(!1), U(e))
                }),
                (v[7] = U),
                (v[8] = u))
              : (u = v[8]),
            v[9] !== N || v[10] !== M || v[11] !== o || v[12] !== u
              ? ((p = (0, l.jsx)(c.G.Input, { placeholder: N, value: M, onKeyDown: o, onValueChange: u })),
                (v[9] = N),
                (v[10] = M),
                (v[11] = o),
                (v[12] = u),
                (v[13] = p))
              : (p = v[13]),
            v[14] === Symbol.for("react.memo_cache_sentinel")
              ? ((m = (0, l.jsx)(i.ms.Separator, {})), (v[14] = m))
              : (m = v[14]),
            v[15] !== w || v[16] !== b || v[17] !== A
              ? ((h =
                  b || null != A
                    ? null
                    : (0, l.jsx)(i.ms.Message, {
                        compact: !0,
                        children:
                          w ??
                          (0, l.jsx)(a.A, {
                            id: "composer.localCwdDropdown.noProjectsFound",
                            defaultMessage: "No projects found",
                            description: "Shown when searching for projects returns no results",
                          }),
                      })),
                (v[15] = w),
                (v[16] = b),
                (v[17] = A),
                (v[18] = h))
              : (h = v[18]),
            v[19] !== S || v[20] !== A || v[21] !== h
              ? ((f = (0, l.jsxs)(d.Y, {
                  className: "vertical-scroll-fade-mask [--edge-fade-distance:1.5rem]",
                  children: [S, A, h],
                })),
                (v[19] = S),
                (v[20] = A),
                (v[21] = h),
                (v[22] = f))
              : (f = v[22]),
            v[23] !== C
              ? ((g =
                  null != C
                    ? (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)(i.ms.Separator, {}),
                          (0, l.jsx)(i.ms.Section, { className: "flex flex-col", children: C }),
                        ],
                      })
                    : null),
                (v[23] = C),
                (v[24] = g))
              : (g = v[24]),
            v[25] !== I || v[26] !== k || v[27] !== f || v[28] !== g
              ? ((j = (0, l.jsxs)(c.G.List, { children: [k, f, I, g] })),
                (v[25] = I),
                (v[26] = k),
                (v[27] = f),
                (v[28] = g),
                (v[29] = j))
              : (j = v[29]),
            v[30] !== N || v[31] !== p || v[32] !== j
              ? ((x = (0, l.jsxs)(c.G.Root, { label: N, children: [p, m, j] })),
                (v[30] = N),
                (v[31] = p),
                (v[32] = j),
                (v[33] = x))
              : (x = v[33]),
            x
          )
        },
      },
    )
  },
  TByi(e, t, o) {
    var l = o("ABep"),
      n = o("QosV"),
      s = o("Ks4B"),
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
            { groups: d, selectedProjectIds: u, getProjectDetails: p, getProjectTooltipText: m, onSelectProject: h } = e
          if (i[0] !== p || i[1] !== m || i[2] !== d || i[3] !== h || i[4] !== u) {
            let e
            ;(i[6] !== p || i[7] !== m || i[8] !== h || i[9] !== u
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
                      tooltipText: m?.(e),
                      tooltipAlign: "center",
                      onSelect: () => {
                        h(e)
                      },
                      children: (0, l.jsxs)("div", {
                        className: "flex min-w-0 items-center gap-1",
                        children: [(0, l.jsx)("span", { className: "truncate", children: e.label }), p?.(e)],
                      }),
                    },
                    e.projectId,
                  )
                }),
                (i[6] = p),
                (i[7] = m),
                (i[8] = h),
                (i[9] = u),
                (i[10] = e))
              : (e = i[10]),
              (t = d.map(e)),
              (i[0] = p),
              (i[1] = m),
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
//# sourceMappingURL=227484.79388ee4ac.js.map
