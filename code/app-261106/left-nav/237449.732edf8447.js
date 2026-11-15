export const __rspack_esm_ids = [237449]
export const __webpack_modules__ = {
  NKFk(e, t, n) {
    var s = n("ABep")
    ;(n("zd8w"),
      (t.A = (e) =>
        (0, s.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, s.jsx)("path", {
            d: "M14.3349 13.3301V6.60645L5.47065 15.4707C5.21095 15.7304 4.78895 15.7304 4.52925 15.4707C4.26955 15.211 4.26955 14.789 4.52925 14.5293L13.3935 5.66504H6.66011C6.29284 5.66504 5.99507 5.36727 5.99507 5C5.99507 4.63273 6.29284 4.33496 6.66011 4.33496H14.9999L15.1337 4.34863C15.4369 4.41057 15.665 4.67857 15.665 5V13.3301C15.6649 13.6973 15.3672 13.9951 14.9999 13.9951C14.6327 13.9951 14.335 13.6973 14.3349 13.3301Z",
            fill: "currentColor",
          }),
        })))
  },
  WZIn(e, t, n) {
    var s = n("ABep"),
      a = n("QosV"),
      l = n("qRqa"),
      o = n("iFSw")
    n.d(
      t,
      {},
      {
        V: function (e) {
          let t,
            n,
            i,
            r,
            d,
            c,
            u = (0, a.c)(40),
            {
              actions: m,
              autoFocusName: h,
              children: f,
              closeAction: x,
              footer: p,
              name: g,
              onKeyDown: j,
              onNameChange: b,
              renderSlots: v,
              statusLabel: y,
            } = e,
            w = void 0 !== h && h,
            _ = void 0 === p ? null : p
          u[0] !== y
            ? ((t =
                null == y
                  ? null
                  : (0, s.jsx)("div", {
                      className: "text-sm font-medium text-info electron:ms-1 extension:-ms-1",
                      children: y,
                    })),
              (u[0] = y),
              (u[1] = t))
            : (t = u[1])
          let k = t,
            A =
              null == v || null != m || null != k
                ? "h-full overflow-y-auto px-panel pb-panel"
                : "h-full overflow-y-auto p-panel"
          ;(u[2] !== w || u[3] !== g || u[4] !== b
            ? ((n =
                null == b
                  ? (0, s.jsx)(o.Mx, { id: "automation-detail-panel-title", readOnly: !0, value: g })
                  : (0, s.jsx)(o.Mx, { id: "automation-detail-panel-title", autoFocus: w, value: g, onChange: b })),
              (u[2] = w),
              (u[3] = g),
              (u[4] = b),
              (u[5] = n))
            : (n = u[5]),
            u[6] !== f || u[7] !== n
              ? ((i = (0, s.jsxs)("div", { className: "flex flex-col gap-6", children: [n, f] })),
                (u[6] = f),
                (u[7] = n),
                (u[8] = i))
              : (i = u[8]),
            u[9] !== A || u[10] !== i
              ? ((r = (0, s.jsx)("div", { className: A, children: i })), (u[9] = A), (u[10] = i), (u[11] = r))
              : (r = u[11]))
          let N = r
          if (null != v) {
            let e
            if (u[12] !== m || u[13] !== N || u[14] !== _ || u[15] !== k || u[16] !== j || u[17] !== v) {
              let t, n, a, l
              ;(u[19] !== m || u[20] !== k
                ? ((t =
                    null == m && null == k
                      ? null
                      : (0, s.jsxs)("div", {
                          className: "flex h-toolbar min-w-0 shrink-0 items-center gap-2 px-toolbar",
                          children: [
                            k,
                            (0, s.jsx)("div", {
                              className: "ms-auto flex min-w-0 shrink-0 items-center gap-1.5",
                              children: m,
                            }),
                          ],
                        })),
                  (u[19] = m),
                  (u[20] = k),
                  (u[21] = t))
                : (t = u[21]),
                u[22] !== N
                  ? ((n = (0, s.jsx)("div", { className: "min-h-0 flex-1", children: N })), (u[22] = N), (u[23] = n))
                  : (n = u[23]),
                u[24] !== _
                  ? ((a =
                      null == _
                        ? null
                        : (0, s.jsx)("div", { className: "shrink-0 border-t border-default p-panel", children: _ })),
                    (u[24] = _),
                    (u[25] = a))
                  : (a = u[25]),
                u[26] !== j || u[27] !== n || u[28] !== a || u[29] !== t
                  ? ((l = (0, s.jsxs)("div", {
                      className: "flex h-full min-h-0 flex-col bg-surface",
                      role: "presentation",
                      onKeyDown: j,
                      children: [t, n, a],
                    })),
                    (u[26] = j),
                    (u[27] = n),
                    (u[28] = a),
                    (u[29] = t),
                    (u[30] = l))
                  : (l = u[30]),
                (e = v({ headerRows: [], content: l })),
                (u[12] = m),
                (u[13] = N),
                (u[14] = _),
                (u[15] = k),
                (u[16] = j),
                (u[17] = v),
                (u[18] = e))
            } else e = u[18]
            return e
          }
          return (
            u[31] !== x
              ? ((d = null == x ? { showCloseButton: !1 } : { closeLabel: x.label, onClose: x.onClose }),
                (u[31] = x),
                (u[32] = d))
              : (d = u[32]),
            u[33] !== m || u[34] !== N || u[35] !== _ || u[36] !== k || u[37] !== j || u[38] !== d
              ? ((c = (0, s.jsx)(l.JR, { actions: m, footer: _, leading: k, onKeyDown: j, ...d, children: N })),
                (u[33] = m),
                (u[34] = N),
                (u[35] = _),
                (u[36] = k),
                (u[37] = j),
                (u[38] = d),
                (u[39] = c))
              : (c = u[39]),
            c
          )
        },
      },
    )
  },
  VqIc(e, t, n) {
    var s = n("ABep"),
      a = n("QosV"),
      l = n("zTeN"),
      o = n("DBCl"),
      i = n("Wf1j"),
      r = n("oyxz"),
      d = n("tl5a"),
      c = n("D28N"),
      u = n("XsHM"),
      m = n("B81s"),
      h = n("iFSw"),
      f = n("AWNZ"),
      x = n("ZEx5"),
      p = n("rCoD"),
      g = n("JzcZ"),
      j = n("zE0r"),
      b = n("oVAd"),
      v = n("ccPx"),
      y = n("odKs"),
      w = n("GIgU"),
      _ = n("sn2N")
    function k(e) {
      return (0, w.U0)(e, "new-task")
    }
    function A(e) {
      return "local" === e.projectKind
    }
    function N(e) {
      let t,
        n = (0, a.c)(7),
        { allowNewThread: l, draft: o, setDraft: i } = e
      if (n[0] !== l || n[1] !== o || n[2] !== i) {
        let e,
          a,
          { missingRequirements: d } = (0, w.FN)(o, "local", { allowNewThread: l }),
          c = (0, s.jsx)(g.p, { allowNewThread: l, draft: o, setDraft: i })
        ;(n[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(r.A, {
              id: "inbox.automations.destination.label",
              defaultMessage: "Runs in",
              description: "Label for choosing whether a scheduled task runs in a new or existing task",
            })),
            (n[4] = e))
          : (e = n[4]),
          n[5] !== c
            ? ((a = (0, s.jsx)(f.ic, { control: c, label: e, labelSizing: "content", variant: "nested" })),
              (n[5] = c),
              (n[6] = a))
            : (a = n[6]),
          (t = (0, s.jsxs)("div", {
            children: [
              a,
              d.includes("thread")
                ? (0, s.jsx)("p", {
                    className: "px-4 py-2 text-sm text-danger select-none",
                    role: "alert",
                    children: (0, s.jsx)(r.A, {
                      id: "inbox.automations.targetThread.required",
                      defaultMessage: "Select a chat for this task",
                      description:
                        "Validation message beneath the destination picker when a scheduled task needs an existing chat before it can be saved",
                    }),
                  })
                : null,
            ],
          })),
          (n[0] = l),
          (n[1] = o),
          (n[2] = i),
          (n[3] = t))
      } else t = n[3]
      return t
    }
    n.d(
      t,
      {},
      {
        i: function (e) {
          let t,
            n,
            M,
            S,
            I,
            C,
            R,
            L,
            T,
            P,
            D,
            E,
            z,
            B,
            F,
            q,
            O,
            U,
            H,
            $,
            Z,
            V = (0, a.c)(90),
            {
              afterFrequency: K,
              allowCloudTeamSelection: W,
              allowNewThread: G,
              detailsTrailing: Q,
              disablePromptAutoFocus: X,
              draft: J,
              executionLocation: Y,
              formId: ee,
              setDraft: et,
              resolvedProjects: en,
              onSubmit: es,
            } = e,
            ea = void 0 === W || W,
            el = void 0 !== G && G,
            eo = void 0 !== X && X,
            ei = (0, i.A)(),
            er = Y?.selectedLocation === "cloud",
            ed = (0, l.Ul)(d.Dc),
            ec = !er
          V[0] !== ec ? ((t = { enabled: ec }), (V[0] = ec), (V[1] = t)) : (t = V[1])
          let { data: eu } = (0, l._U)(m.I2, ed, t),
            em = eu?.config.sandbox_mode === "read-only",
            eh = eu?.config.sandbox_mode === "danger-full-access"
          if (V[2] !== J.projectId || V[3] !== en) {
            let e
            ;((n = en.filter(A)),
              V[6] !== J.projectId
                ? ((e = (e) => e.projectId === J.projectId), (V[6] = J.projectId), (V[7] = e))
                : (e = V[7]))
            let t = n.find(e)
            ;((M = null == J.projectId ? [(0, o.DIv)(o.m20)] : null == t ? [] : (0, u.l_)(t).map(o.DIv)),
              (V[2] = J.projectId),
              (V[3] = en),
              (V[4] = n),
              (V[5] = M))
          } else ((n = V[4]), (M = V[5]))
          let ef = M
          V[8] !== ei
            ? ((S = ei.formatMessage({
                id: "settings.automations.projectDropdown.placeholder",
                defaultMessage: "Select project",
                description: "Placeholder text for automation project dropdown",
              })),
              (V[8] = ei),
              (V[9] = S))
            : (S = V[9])
          let ex = S,
            ep = "heartbeat" === J.kind
          V[10] !== n || V[11] !== et
            ? ((I = (e) => {
                let t = e === o.m20 ? null : e,
                  s = n.find((e) => e.projectId === t),
                  a = null == t ? [(0, o.DIv)(o.m20)] : null == s ? [] : (0, u.l_)(s).map(o.DIv)
                et((e) => (0, w.fm)(e, t, a))
              }),
              (V[10] = n),
              (V[11] = et),
              (V[12] = I))
            : (I = V[12])
          let eg = I
          V[13] !== et
            ? ((C = (e) => {
                et((t) => ({ ...t, rawRrule: null, scheduleConfig: e, scheduleDirty: !0 }))
              }),
              (V[13] = et),
              (V[14] = C))
            : (C = V[14])
          let ej = C
          V[15] !== J.scheduleConfig || V[16] !== Y || V[17] !== ej || V[18] !== ep || V[19] !== et
            ? ((R = (e) => {
                ;("cloud" === e && ep
                  ? et(k)
                  : "local" === e && "monthly" === J.scheduleConfig.mode && ej((0, y.dl)(J.scheduleConfig, "custom")),
                  Y?.onSelect?.(e))
              }),
              (V[15] = J.scheduleConfig),
              (V[16] = Y),
              (V[17] = ej),
              (V[18] = ep),
              (V[19] = et),
              (V[20] = R))
            : (R = V[20])
          let eb = R
          V[21] !== et
            ? ((L = (e, t) => {
                et((n) => ({ ...n, model: e, reasoningEffort: t }))
              }),
              (V[21] = et),
              (V[22] = L))
            : (L = V[22])
          let ev = L
          ;(V[23] !== eo || V[24] !== J || V[25] !== ee || V[26] !== es || V[27] !== ef || V[28] !== et
            ? ((T = (0, s.jsx)(x.t, {
                children: (0, s.jsx)("div", {
                  className: "min-h-0 min-w-0 flex-1",
                  children: (0, s.jsx)(h.yI, {
                    disablePromptAutoFocus: eo,
                    draft: J,
                    formId: ee,
                    promptSize: "compact",
                    roots: ef,
                    setDraft: et,
                    onSubmit: es,
                  }),
                }),
              })),
              (V[23] = eo),
              (V[24] = J),
              (V[25] = ee),
              (V[26] = es),
              (V[27] = ef),
              (V[28] = et),
              (V[29] = T))
            : (T = V[29]),
            V[30] !== er || V[31] !== eh || V[32] !== ep || V[33] !== em
              ? ((P = ep || er ? null : (0, s.jsx)(h.UL, { isDangerFullAccess: eh, isReadOnlySandbox: em })),
                (V[30] = er),
                (V[31] = eh),
                (V[32] = ep),
                (V[33] = em),
                (V[34] = P))
              : (P = V[34]),
            V[35] === Symbol.for("react.memo_cache_sentinel")
              ? ((D = (0, s.jsx)(r.A, {
                  id: "inbox.automations.details",
                  defaultMessage: "Details",
                  description: "Section label above the automation details rail",
                })),
                (V[35] = D))
              : (D = V[35]),
            V[36] !== Y || V[37] !== eb
              ? ((E =
                  Y?.onSelect == null
                    ? null
                    : (0, s.jsx)(f.ic, {
                        control: (0, s.jsx)(g.W, { selectedLocation: Y.selectedLocation, onSelect: eb }),
                        label: (0, s.jsx)(r.A, { ...j.H.label }),
                        variant: "nested",
                      })),
                (V[36] = Y),
                (V[37] = eb),
                (V[38] = E))
              : (E = V[38]),
            V[39] !== ea || V[40] !== J.cloudTeam || V[41] !== J.id || V[42] !== er || V[43] !== et
              ? ((z =
                  ea && er && null == J.id
                    ? (0, s.jsx)(p.v, {
                        selection: J.cloudTeam,
                        onSelect: (e) => {
                          et((t) => ({ ...t, cloudTeam: e }))
                        },
                      })
                    : null),
                (V[39] = ea),
                (V[40] = J.cloudTeam),
                (V[41] = J.id),
                (V[42] = er),
                (V[43] = et),
                (V[44] = z))
              : (z = V[44]),
            V[45] !== el || V[46] !== J || V[47] !== er || V[48] !== et
              ? ((B = er ? null : (0, s.jsx)(N, { allowNewThread: el, draft: J, setDraft: et })),
                (V[45] = el),
                (V[46] = J),
                (V[47] = er),
                (V[48] = et),
                (V[49] = B))
              : (B = V[49]),
            V[50] !== J.model ||
            V[51] !== J.projectId ||
            V[52] !== J.reasoningEffort ||
            V[53] !== ev ||
            V[54] !== eg ||
            V[55] !== ei ||
            V[56] !== er ||
            V[57] !== ep ||
            V[58] !== n ||
            V[59] !== ex
              ? ((F =
                  er || ep
                    ? null
                    : (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(f.ic, {
                            control: (0, s.jsx)(c.f, {
                              localOnlyTooltip: ei.formatMessage({
                                id: "settings.automations.projectDropdown.localOnlyTooltip",
                                defaultMessage: "Only local projects are available here",
                                description:
                                  "Tooltip explaining why the scheduled task project picker only lists local projects when remote connections are connected",
                              }),
                              align: "end",
                              className: "!text-base",
                              placeholder: ex,
                              projects: n,
                              projectlessActionLabel: ei.formatMessage({
                                id: "composer.localCwdDropdown.clearProject",
                                defaultMessage: "Don't work in a project",
                                description: "Menu item that clears the selected project and starts projectless tasks",
                              }),
                              projectlessLabel: ei.formatMessage({
                                id: "settings.automations.projectDropdown.none",
                                defaultMessage: "None",
                                description: "Label for selecting no project in the automation project dropdown",
                              }),
                              selectedProjectId: J.projectId ?? o.m20,
                              showIcon: !1,
                              onChange: eg,
                            }),
                            label: ei.formatMessage({
                              id: "inbox.automations.folder.label",
                              defaultMessage: "Project",
                              description: "Label for the automation folder row in the details rail",
                            }),
                            variant: "nested",
                          }),
                          (0, s.jsx)(f.ic, {
                            control: (0, s.jsx)(h.Bi, {
                              align: "end",
                              className: "!text-base",
                              field: "model",
                              reasoningEffort: J.reasoningEffort,
                              selectedModel: J.model,
                              onSelect: ev,
                            }),
                            label: ei.formatMessage({
                              id: "inbox.automations.model.label",
                              defaultMessage: "Model",
                              description: "Label for the automation model row in the details rail",
                            }),
                            variant: "nested",
                          }),
                          (0, s.jsx)(f.ic, {
                            control: (0, s.jsx)(h.Bi, {
                              align: "end",
                              className: "!text-base",
                              field: "reasoning",
                              reasoningEffort: J.reasoningEffort,
                              selectedModel: J.model,
                              onSelect: ev,
                            }),
                            label: ei.formatMessage({
                              id: "inbox.automations.reasoning.label",
                              defaultMessage: "Reasoning",
                              description: "Label for the automation reasoning level row in the details rail",
                            }),
                            variant: "nested",
                          }),
                        ],
                      })),
                (V[50] = J.model),
                (V[51] = J.projectId),
                (V[52] = J.reasoningEffort),
                (V[53] = ev),
                (V[54] = eg),
                (V[55] = ei),
                (V[56] = er),
                (V[57] = ep),
                (V[58] = n),
                (V[59] = ex),
                (V[60] = F))
              : (F = V[60]),
            V[61] !== Q || V[62] !== E || V[63] !== z || V[64] !== B || V[65] !== F
              ? ((q = (0, s.jsxs)(x.t, { children: [E, z, B, F, Q] })),
                (V[61] = Q),
                (V[62] = E),
                (V[63] = z),
                (V[64] = B),
                (V[65] = F),
                (V[66] = q))
              : (q = V[66]),
            V[67] !== er
              ? ((O = er
                  ? (0, s.jsx)("p", {
                      className: "mt-2 px-1 text-sm text-codex-description select-none",
                      children: (0, s.jsx)(r.A, {
                        id: "inbox.automations.executionLocation.cloudDescription",
                        defaultMessage:
                          "Runs in the cloud even when this device is offline. Chat, project, model, and reasoning settings aren't available for cloud tasks",
                        description:
                          "Explains that cloud scheduled tasks run independently of the device and do not support local chat, project, model, or reasoning settings",
                      }),
                    })
                  : null),
                (V[67] = er),
                (V[68] = O))
              : (O = V[68]),
            V[69] !== P || V[70] !== q || V[71] !== O
              ? ((U = (0, s.jsxs)(_.C, { actions: P, title: D, children: [q, O] })),
                (V[69] = P),
                (V[70] = q),
                (V[71] = O),
                (V[72] = U))
              : (U = V[72]),
            V[73] !== J.kind || V[74] !== J.notificationPolicy || V[75] !== ei || V[76] !== er || V[77] !== et
              ? ((H = er
                  ? void 0
                  : (0, s.jsx)(f.ic, {
                      control: (0, s.jsx)(v.O, {
                        kind: J.kind,
                        value: J.notificationPolicy,
                        onChange: (e) => {
                          et((t) => ({ ...t, notificationPolicy: e }))
                        },
                      }),
                      label: ei.formatMessage({
                        id: "inbox.automations.notifications.label",
                        defaultMessage: "Notifications",
                        description: "Label for the automation notification policy control",
                      }),
                      variant: "nested",
                    })),
                (V[73] = J.kind),
                (V[74] = J.notificationPolicy),
                (V[75] = ei),
                (V[76] = er),
                (V[77] = et),
                (V[78] = H))
              : (H = V[78]))
          let ey = ep && !er ? "heartbeat" : "default",
            ew = er ? "cloud" : "local"
          return (
            V[79] !== J.scheduleConfig || V[80] !== ej || V[81] !== H || V[82] !== ey || V[83] !== ew
              ? (($ = (0, s.jsx)(b.R, {
                  afterScheduleRows: H,
                  intervalStyle: ey,
                  scheduleConfig: J.scheduleConfig,
                  scheduleSource: ew,
                  onUpdateScheduleDraft: ej,
                })),
                (V[79] = J.scheduleConfig),
                (V[80] = ej),
                (V[81] = H),
                (V[82] = ey),
                (V[83] = ew),
                (V[84] = $))
              : ($ = V[84]),
            V[85] !== K || V[86] !== T || V[87] !== U || V[88] !== $
              ? ((Z = (0, s.jsxs)("div", { className: "flex min-h-0 flex-col gap-6", children: [T, U, $, K] })),
                (V[85] = K),
                (V[86] = T),
                (V[87] = U),
                (V[88] = $),
                (V[89] = Z))
              : (Z = V[89]),
            Z
          )
        },
      },
    )
  },
  NOA7(e, t, n) {
    n.d(t, { O: () => er })
    var s = n("ABep"),
      a = n("QosV"),
      l = n("Tfl2"),
      o = n("zTeN"),
      i = n("zd8w"),
      r = n("Wf1j"),
      d = n("oyxz"),
      c = n("HZfM"),
      u = n("eoGY"),
      m = n("SPnB"),
      h = n("oqk6"),
      f = n("Sm6l"),
      x = n("HOLv"),
      p = n("SGsN"),
      g = n("KIKs"),
      j = n("hlym"),
      b = n("Oj9r"),
      v = n("iFSw"),
      y = n("AWNZ"),
      w = n("ZEx5"),
      _ = n("DBCl"),
      k = n("Qgfj"),
      A = n("tl5a"),
      N = n("sn2N"),
      M = n("zKCW"),
      S = n("evwP"),
      I = n("I7Ou"),
      C = n("OWtl"),
      R = n("nvO1"),
      L = n("rvFo"),
      T = n("HFSu")
    let P = (0, o.N3)(C.u, ({ accountId: e, automationId: t }, { get: n }) => ({
      enabled: n(R.lc, e),
      initialPageParam: null,
      getNextPageParam: (e) => (e.has_more ? (e.cursor ?? void 0) : void 0),
      queryFn: ({ pageParam: e, signal: n }) =>
        T.CodexRequest.safeGet("/automation/{automation_id}/execution_threads", {
          parameters: { path: { automation_id: t }, query: { cursor: e, limit: 25 } },
          signal: n,
        }),
      queryKey: ["cloud-automations", "execution-threads", e, t],
      refetchInterval: L.D.FIVE_SECONDS,
      refetchOnWindowFocus: "always",
      retry: !1,
      select: ({ pages: e }) => e.flatMap((e) => e.threads),
      staleTime: L.D.ONE_MINUTE,
    }))
    function D(e) {
      let t,
        n,
        l,
        i,
        r,
        c,
        u,
        h,
        x = (0, a.c)(26),
        { automationId: p, onSelectRun: g } = e,
        j = (0, o.Ul)(m.chatGptAuthenticatedAccountId$),
        b = (0, o._U)(R.lc, j)
      x[0] !== j || x[1] !== p
        ? ((t = { accountId: j, automationId: p }), (x[0] = j), (x[1] = p), (x[2] = t))
        : (t = x[2])
      let {
        data: v,
        error: y,
        fetchNextPage: _,
        hasNextPage: k,
        isFetchingNextPage: A,
        isLoading: C,
        refetch: L,
      } = (0, o._U)(P, t)
      return b && null != j
        ? (x[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, s.jsx)("span", {
                className: "select-none",
                children: (0, s.jsx)(d.A, {
                  id: "inbox.automations.history",
                  defaultMessage: "Previous runs",
                  description: "Section label above the automation history rail section",
                }),
              })),
              (x[3] = n))
            : (n = x[3]),
          x[4] !== y || x[5] !== L
            ? ((l =
                null != y
                  ? (0, s.jsx)(M.l, {
                      type: "error",
                      content: (0, s.jsx)("span", {
                        className: "select-none",
                        children: (0, s.jsx)(d.A, {
                          id: "inbox.automations.teams.runs.loadError",
                          defaultMessage: "Run history could not be loaded",
                          description: "Error when loading the runs of a cloud scheduled task",
                        }),
                      }),
                      primaryCtaText: (0, s.jsx)(d.A, {
                        id: "inbox.automations.teams.runs.retry",
                        defaultMessage: "Retry",
                        description: "Button to retry loading scheduled task run history",
                      }),
                      onPrimaryCtaClick: () => void L(),
                    })
                  : null),
              (x[4] = y),
              (x[5] = L),
              (x[6] = l))
            : (l = x[6]),
          x[7] !== C
            ? ((i = C
                ? (0, s.jsx)(w.t, {
                    className: "select-none",
                    children: (0, s.jsx)(I.u, {
                      children: (0, s.jsx)(d.A, {
                        id: "inbox.automations.teams.runs.loading",
                        defaultMessage: "Loading runs…",
                        description: "Loading state for scheduled task run history",
                      }),
                    }),
                  })
                : null),
              (x[7] = C),
              (x[8] = i))
            : (i = x[8]),
          x[9] !== y || x[10] !== v?.length
            ? ((r =
                null == y && v?.length === 0
                  ? (0, s.jsx)(w.t, {
                      children: (0, s.jsx)(S.W, {
                        className: "select-none",
                        layout: "settings-row",
                        children: (0, s.jsx)(d.A, {
                          id: "inbox.automations.teams.runs.empty",
                          defaultMessage: "No runs yet",
                          description: "Empty history for a scheduled task that has not run",
                        }),
                      }),
                    })
                  : null),
              (x[9] = y),
              (x[10] = v?.length),
              (x[11] = r))
            : (r = x[11]),
          x[12] !== j || x[13] !== g || x[14] !== v
            ? ((c =
                null != v && v.length > 0
                  ? (0, s.jsx)(w.t, {
                      children: v.map((e) =>
                        (0, s.jsx)(E, { run: e, onSelect: (e) => g({ accountId: j, conversationId: e }) }, e.thread_id),
                      ),
                    })
                  : null),
              (x[12] = j),
              (x[13] = g),
              (x[14] = v),
              (x[15] = c))
            : (c = x[15]),
          x[16] !== _ || x[17] !== k || x[18] !== A
            ? ((u = k
                ? (0, s.jsx)(f.$, {
                    color: "ghostSecondary",
                    loading: A,
                    onClick: () => void _(),
                    children: (0, s.jsx)(d.A, {
                      id: "inbox.automations.teams.runs.loadMore",
                      defaultMessage: "Load more",
                      description: "Button to load another page of scheduled task runs",
                    }),
                  })
                : null),
              (x[16] = _),
              (x[17] = k),
              (x[18] = A),
              (x[19] = u))
            : (u = x[19]),
          x[20] !== l || x[21] !== i || x[22] !== r || x[23] !== c || x[24] !== u
            ? ((h = (0, s.jsxs)(N.C, { title: n, children: [l, i, r, c, u] })),
              (x[20] = l),
              (x[21] = i),
              (x[22] = r),
              (x[23] = c),
              (x[24] = u),
              (x[25] = h))
            : (h = x[25]),
          h)
        : null
    }
    function E(e) {
      let t,
        n,
        l,
        i,
        r,
        c,
        u = (0, a.c)(15),
        { run: m, onSelect: h } = e
      u[0] !== m.thread_id ? ((t = (0, _.JXB)(m.thread_id)), (u[0] = m.thread_id), (u[1] = t)) : (t = u[1])
      let f = t
      u[2] !== f ? ((n = { hostId: _.iwv, threadId: f }), (u[2] = f), (u[3] = n)) : (n = u[3])
      let x = (0, o._U)(A.HX, n)
      return (
        u[4] !== x
          ? ((l = x?.trim()
              ? x
              : (0, s.jsx)(d.A, {
                  id: "inbox.automations.teams.runs.untitled",
                  defaultMessage: "Scheduled run",
                  description: "Title for a scheduled task run",
                })),
            (u[4] = x),
            (u[5] = l))
          : (l = u[5]),
        u[6] !== m.created_at
          ? ((i = (0, s.jsx)("span", {
              className: "text-sm text-secondary",
              children: (0, s.jsx)(k.XU, {
                value: m.created_at,
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
              }),
            })),
            (u[6] = m.created_at),
            (u[7] = i))
          : (i = u[7]),
        u[8] !== f || u[9] !== h ? ((r = () => h(f)), (u[8] = f), (u[9] = h), (u[10] = r)) : (r = u[10]),
        u[11] !== l || u[12] !== i || u[13] !== r
          ? ((c = (0, s.jsx)(y.kG, {
              className: "select-none",
              edgeRounding: "surface",
              label: l,
              trailing: i,
              variant: "nested",
              onClick: r,
            })),
            (u[11] = l),
            (u[12] = i),
            (u[13] = r),
            (u[14] = c))
          : (c = u[14]),
        c
      )
    }
    var z = n("Pyfq"),
      B = n("qRqa"),
      F = n("FrrB"),
      q = n("Bbed"),
      O = n("vLpE"),
      U = n("nQsD")
    let H = (0, q._)(
      async () =>
        (
          await Promise.all([
            n.e(293648),
            n.e(560170),
            n.e(207991),
            n.e(854102),
            n.e(620650),
            n.e(164460),
            n.e(846754),
            n.e(901175),
            n.e(161049),
            n.e(431137),
            n.e(108823),
            n.e(832348),
            n.e(864380),
            n.e(679632),
            n.e(656640),
            n.e(129203),
            n.e(233814),
            n.e(478806),
            n.e(390941),
            n.e(652500),
            n.e(309485),
            n.e(877652),
            n.e(252961),
            n.e(549505),
            n.e(135279),
            n.e(776931),
            n.e(426774),
            n.e(580009),
            n.e(428069),
            n.e(499685),
            n.e(835890),
            n.e(895612),
            n.e(283497),
            n.e(720744),
            n.e(223603),
            n.e(363341),
            n.e(35596),
            n.e(218787),
            n.e(223736),
            n.e(218609),
            n.e(900150),
            n.e(963703),
            n.e(467342),
            n.e(19052),
            n.e(777478),
            n.e(172660),
            n.e(287117),
            n.e(268995),
            n.e(413566),
            n.e(172601),
            n.e(540250),
            n.e(920910),
            n.e(309092),
            n.e(535891),
            n.e(40030),
            n.e(280),
            n.e(3773),
            n.e(261525),
            n.e(485738),
            n.e(477474),
            n.e(549994),
            n.e(594740),
            n.e(426333),
            n.e(718959),
            n.e(909540),
            n.e(314017),
          ]).then(n.bind(n, "cP95"))
        ).LocalConversationBackgroundAgentTab,
      { fallback: (0, s.jsx)(U.C, {}), propagateLoadError: !0 },
    )
    function $(e) {
      let t,
        n,
        l,
        i,
        c,
        u = (0, a.c)(25),
        { run: m, renderSlots: h, onBack: x, onClose: p } = e,
        g = (0, r.A)(),
        j = (0, o._U)(R.lc, m.accountId)
      ;(u[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, s.jsx)(d.A, {
            id: "inbox.automations.teams.runs.back",
            defaultMessage: "Back",
            description: "Button to return from a scheduled run chat to the scheduled task details",
          })),
          (u[0] = t))
        : (t = u[0]),
        u[1] !== x
          ? ((n = (0, s.jsx)(f.$, { color: "ghost", size: "toolbar", onClick: x, children: t })),
            (u[1] = x),
            (u[2] = n))
          : (n = u[2]))
      let v = n
      u[3] !== j || u[4] !== p || u[5] !== m.conversationId
        ? ((l = j
            ? (0, s.jsxs)(O.R, {
                route: (0, b.VJ)({
                  pathname: (0, _._RT)(m.conversationId),
                  routeTemplate: _.Bai,
                  search: `?${new URLSearchParams({ hostId: _.iwv, threadAccess: "shared" })}`,
                }),
                children: [
                  (0, s.jsx)(z.$, { conversationId: m.conversationId, hostId: _.iwv }),
                  (0, s.jsx)(H, {
                    conversationId: m.conversationId,
                    hostId: _.iwv,
                    hostMcpApps: !0,
                    threadAccess: "shared",
                    onClose: p,
                  }),
                ],
              })
            : (0, s.jsx)(F.A, {
                className: "h-full select-none",
                spacing: "compact",
                title: (0, s.jsx)(d.A, {
                  id: "inbox.automations.teams.runs.unavailable",
                  defaultMessage: "Scheduled run unavailable",
                  description: "Message shown when the current account cannot open a shared scheduled run",
                }),
              })),
          (u[3] = j),
          (u[4] = p),
          (u[5] = m.conversationId),
          (u[6] = l))
        : (l = u[6])
      let y = l
      if (null != h) {
        let e
        if (u[7] !== y || u[8] !== v || u[9] !== h) {
          let t, n, a
          ;(u[11] !== v
            ? ((t = (0, s.jsx)("div", {
                className: "flex h-toolbar min-w-0 shrink-0 items-center gap-2 px-toolbar",
                children: v,
              })),
              (u[11] = v),
              (u[12] = t))
            : (t = u[12]),
            u[13] !== y
              ? ((n = (0, s.jsx)("div", { className: "min-h-0 flex-1", children: y })), (u[13] = y), (u[14] = n))
              : (n = u[14]),
            u[15] !== t || u[16] !== n
              ? ((a = (0, s.jsxs)("div", { className: "flex h-full min-h-0 flex-col bg-surface", children: [t, n] })),
                (u[15] = t),
                (u[16] = n),
                (u[17] = a))
              : (a = u[17]),
            (e = h({ headerRows: [], content: a })),
            (u[7] = y),
            (u[8] = v),
            (u[9] = h),
            (u[10] = e))
        } else e = u[10]
        return e
      }
      return (
        u[18] !== g
          ? ((i = g.formatMessage({
              id: "inbox.automations.teams.runs.close",
              defaultMessage: "Close scheduled run",
              description: "Accessible label for closing a scheduled run chat panel",
            })),
            (u[18] = g),
            (u[19] = i))
          : (i = u[19]),
        u[20] !== y || u[21] !== v || u[22] !== p || u[23] !== i
          ? ((c = (0, s.jsx)(B.JR, { closeLabel: i, leading: v, onClose: p, children: y })),
            (u[20] = y),
            (u[21] = v),
            (u[22] = p),
            (u[23] = i),
            (u[24] = c))
          : (c = u[24]),
        c
      )
    }
    var Z = n("rCoD"),
      V = n("soaw"),
      K = n("GsAL"),
      W = n("WZIn"),
      G = n("zE0r"),
      Q = n("fyx9"),
      X = n("odKs"),
      J = n("TZBk"),
      Y = n("ED7I"),
      ee = n("fGpH"),
      et = n("Ro2M"),
      en = n("p2tp"),
      es = n("jqGi"),
      ea = n("ELci"),
      el = n("o791"),
      eo = n("ZlGh"),
      ei = n("xA2X")
    function er(e) {
      let t,
        n,
        y,
        _,
        k,
        A,
        M,
        S,
        I,
        C,
        R,
        L,
        T,
        P,
        E,
        z,
        B,
        F,
        q,
        O,
        U,
        H,
        er,
        em,
        eh,
        ef,
        ex,
        ep,
        eg,
        ej,
        eb,
        ev,
        ey,
        ew,
        e_,
        ek,
        eA,
        eN,
        eM,
        eS,
        eI,
        eC,
        eR,
        eL,
        eT,
        eP,
        eD,
        eE,
        ez,
        eB = (0, a.c)(206),
        {
          ref: eF,
          item: eq,
          renderSlots: eO,
          onClose: eU,
          onOpenConversation: eH,
          onSaved: e$,
          showRunResults: eZ,
          showCloseButton: eV,
        } = e,
        eK = void 0 !== eZ && eZ,
        eW = void 0 === eV || eV,
        eG = (0, o.gh)(b.GD),
        eQ = (0, r.A)(),
        eX = (0, i.useId)(),
        [eJ, eY] = (0, c.ok)(),
        e0 = (0, o.Ul)(et.Zc),
        e1 = (0, o.Ul)(et.dz),
        e2 = (0, o.Ul)(et.lu),
        e3 = (0, o.Ul)(et.$f),
        e4 = (0, i.useRef)(null),
        e5 = (0, i.useRef)(null),
        e6 = (0, i.useRef)(null),
        e7 = (0, i.useRef)(!1),
        e9 = (0, V.a)(),
        [e8, te] = (0, i.useState)(!1),
        { automation: tt } = eq
      eB[0] !== tt ? ((t = (0, ee.RQ)(tt)), (eB[0] = tt), (eB[1] = t)) : (t = eB[1])
      let { canManage: tn } = t,
        ts = null != eq.teamId && tn
      eB[2] !== tt ? ((n = () => (0, eo.qz)(tt)), (eB[2] = tt), (eB[3] = n)) : (n = eB[3])
      let [ta, tl] = (0, i.useState)(n),
        [to, ti] = (0, i.useState)(null),
        tr = e0.isPending || e1.isPending || e2.isPending || e3.isPending
      eB[4] !== tt ? ((y = (0, ee.Xr)(tt)), (eB[4] = tt), (eB[5] = y)) : (y = eB[5])
      let td = y,
        tc = "completed" === td
      eB[6] !== tn || eB[7] !== tc || eB[8] !== eJ
        ? ((_ = tn && !tc && (0, Q.gK)(eJ)), (eB[6] = tn), (eB[7] = tc), (eB[8] = eJ), (eB[9] = _))
        : (_ = eB[9])
      let tu = _
      eB[10] !== eY
        ? ((k = (e) => {
            eY(
              (t) => {
                let n = new URLSearchParams(t)
                return ((0, Q.f8)(n), e && n.set("edit", "true"), n)
              },
              { replace: !e },
            )
          }),
          (eB[10] = eY),
          (eB[11] = k))
        : (k = eB[11])
      let tm = k
      eB[12] !== tt ? ((A = (0, ee.nT)(tt)), (eB[12] = tt), (eB[13] = A)) : (A = eB[13])
      let th = A
      eB[14] !== tt || eB[15] !== ta
        ? ((M = { ...ta, name: ta.name.trim(), prompt: ta.prompt.trim() }),
          (S = (0, eo.tV)(tt, M)),
          (eB[14] = tt),
          (eB[15] = ta),
          (eB[16] = M),
          (eB[17] = S))
        : ((M = eB[16]), (S = eB[17]))
      let tf = S,
        tx = M.name !== tt.title || M.prompt !== tt.prompt
      eB[18] !== tt || eB[19] !== ta
        ? ((I = (e) => (0, eo.Rd)(tt, ta, e)), (eB[18] = tt), (eB[19] = ta), (eB[20] = I))
        : (I = eB[20])
      let tp = (0, g.wv)(I)
      eB[21] !== tp ||
      eB[22] !== ta.name ||
      eB[23] !== ta.prompt ||
      eB[24] !== ta.scheduleConfig ||
      eB[25] !== ta.scheduleDirty
        ? ((C =
            ta.name.trim().length > 0 &&
            ta.prompt.trim().length > 0 &&
            null == tp &&
            (!ta.scheduleDirty || (0, X.SK)(ta.scheduleConfig))),
          (eB[21] = tp),
          (eB[22] = ta.name),
          (eB[23] = ta.prompt),
          (eB[24] = ta.scheduleConfig),
          (eB[25] = ta.scheduleDirty),
          (eB[26] = C))
        : (C = eB[26])
      let tg = C,
        tj = tn && !tc && "condition_watch" !== tt.timing_mode
      eB[27] !== tx || eB[28] !== tr || eB[29] !== eK
        ? ((R = () =>
            !!e7.current ||
            !!eK ||
            (!tr &&
              null == e5.current &&
              (!tx ||
                (null == e6.current &&
                  new Promise((e) => {
                    ;((e6.current = e), te(!0))
                  }))))),
          (eB[27] = tx),
          (eB[28] = tr),
          (eB[29] = eK),
          (eB[30] = R))
        : (R = eB[30])
      let tb = R
      ;(eB[31] !== tb ? ((L = () => ({ requestClose: tb })), (eB[31] = tb), (eB[32] = L)) : (L = eB[32]),
        (0, i.useImperativeHandle)(eF, L),
        eB[33] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = () => () => {
              ;(e5.current?.abort(), e6.current?.(!1), (e6.current = null))
            }),
            (P = []),
            (eB[33] = T),
            (eB[34] = P))
          : ((T = eB[33]), (P = eB[34])),
        (0, i.useEffect)(T, P),
        eB[35] !== tx || eB[36] !== eK
          ? ((E = () => {
              if (tx && !eK)
                return (
                  window.addEventListener("beforeunload", ec),
                  () => window.removeEventListener("beforeunload", ec)
                )
            }),
            (z = [tx, eK]),
            (eB[35] = tx),
            (eB[36] = eK),
            (eB[37] = E),
            (eB[38] = z))
          : ((E = eB[37]), (z = eB[38])),
        (0, i.useEffect)(E, z),
        eB[39] !== tt ||
        eB[40] !== tn ||
        eB[41] !== tg ||
        eB[42] !== ta ||
        eB[43] !== M ||
        eB[44] !== tf ||
        eB[45] !== eQ ||
        eB[46] !== tr ||
        eB[47] !== e9 ||
        eB[48] !== e$ ||
        eB[49] !== e3 ||
        eB[50] !== e1 ||
        eB[51] !== eG
          ? ((B = (e) => {
              let t = void 0 !== e && e
              if (!tn || (!tf && !t) || (tf && !tg) || tr || null != e5.current) return Promise.resolve()
              let n = eG.get(m.chatGptAuthenticatedAccountId$),
                s = new AbortController()
              return (
                (e5.current = s),
                (tf
                  ? e1.mutateAsync(
                      { requestBody: (0, eo.FT)(tt, M), signal: s.signal },
                      {
                        onError: (e) => {
                          !s.signal.aborted &&
                            e9() &&
                            eG.get(m.chatGptAuthenticatedAccountId$) === n &&
                            eG
                              .get(p.Id)
                              .danger(
                                eQ.formatMessage({
                                  id: "inbox.automations.cloud.updateError",
                                  defaultMessage: "Could not update cloud scheduled task",
                                  description: "Toast title when updating a cloud scheduled task fails",
                                }),
                                {
                                  errorAnalytics: { toastId: "inbox.automations.cloud.updateError" },
                                  description: e instanceof Error ? e.message : void 0,
                                },
                              )
                        },
                      },
                    )
                  : Promise.resolve(tt)
                )
                  .then(async (e) => {
                    !s.signal.aborted &&
                      e9() &&
                      eG.get(m.chatGptAuthenticatedAccountId$) === n &&
                      (tf && (tl((t) => (t === ta ? (0, eo.qz)(e) : t)), e$?.(e)),
                      t &&
                        (await e3.mutateAsync({
                          automationId: e.id,
                          requestBody: { idempotency_key: crypto.randomUUID() },
                        })))
                  })
                  .catch(ed)
                  .finally(() => {
                    e5.current = null
                  })
              )
            }),
            (eB[39] = tt),
            (eB[40] = tn),
            (eB[41] = tg),
            (eB[42] = ta),
            (eB[43] = M),
            (eB[44] = tf),
            (eB[45] = eQ),
            (eB[46] = tr),
            (eB[47] = e9),
            (eB[48] = e$),
            (eB[49] = e3),
            (eB[50] = e1),
            (eB[51] = eG),
            (eB[52] = B))
          : (B = eB[52]))
      let tv = B
      eB[53] !== tv
        ? ((F = (e) => {
            ;(e.preventDefault(), tv())
          }),
          (eB[53] = tv),
          (eB[54] = F))
        : (F = eB[54])
      let ty = F
      ;(eB[55] !== tt.default_timezone || eB[56] !== tj || eB[57] !== ta.scheduleConfig
        ? ((q =
            tj && null != ta.scheduleConfig.oneTimeDate
              ? new Intl.DateTimeFormat().resolvedOptions().timeZone
              : tt.default_timezone),
          (eB[55] = tt.default_timezone),
          (eB[56] = tj),
          (eB[57] = ta.scheduleConfig),
          (eB[58] = q))
        : (q = eB[58]),
        eB[59] === Symbol.for("react.memo_cache_sentinel")
          ? ((O = (0, s.jsx)(d.A, {
              id: "inbox.automations.cloud.timeZone",
              defaultMessage: "Time zone",
              description: "Label for a cloud scheduled task time zone",
            })),
            (eB[59] = O))
          : (O = eB[59]),
        eB[60] !== q ? ((U = (0, s.jsx)(eu, { value: q, label: O })), (eB[60] = q), (eB[61] = U)) : (U = eB[61]))
      let tw = U
      eB[62] !== tt.prompt || eB[63] !== tn || eB[64] !== ta || eB[65] !== eX || eB[66] !== ty || eB[67] !== tc
        ? ((H = (0, s.jsx)(w.t, {
            children:
              !tn || tc
                ? (0, s.jsx)("div", {
                    className: "p-4 text-base whitespace-pre-wrap text-default select-text",
                    children: tt.prompt,
                  })
                : (0, s.jsx)(v.yI, {
                    disablePromptAutoFocus: !0,
                    draft: ta,
                    formId: eX,
                    promptSize: "compact",
                    roots: [],
                    setDraft: tl,
                    onSubmit: ty,
                  }),
          })),
          (eB[62] = tt.prompt),
          (eB[63] = tn),
          (eB[64] = ta),
          (eB[65] = eX),
          (eB[66] = ty),
          (eB[67] = tc),
          (eB[68] = H))
        : (H = eB[68])
      let t_ = H
      if (eK) {
        let e, t, n, a, l, o, i, r
        return (
          eB[69] !== eq
            ? ((e = (0, s.jsx)(h.ScheduledTaskRunSummary, { item: eq })), (eB[69] = eq), (eB[70] = e))
            : (e = eB[70]),
          eB[71] !== tm ? ((t = () => tm(!0)), (eB[71] = tm), (eB[72] = t)) : (t = eB[72]),
          eB[73] !== tt.executor || eB[74] !== tt.id || eB[75] !== e3
            ? ((n =
                "local" === tt.executor
                  ? void 0
                  : () => e3.mutate({ automationId: tt.id, requestBody: { idempotency_key: crypto.randomUUID() } })),
              (eB[73] = tt.executor),
              (eB[74] = tt.id),
              (eB[75] = e3),
              (eB[76] = n))
            : (n = eB[76]),
          eB[77] !== eq
            ? ((a = (e) => (0, s.jsx)(h.ScheduledTaskRunResults, { item: eq, relatedActions: e })),
              (eB[77] = eq),
              (eB[78] = a))
            : (a = eB[78]),
          eB[79] !== tt.id || eB[80] !== a
            ? ((l = (0, s.jsx)(u.$, { automationId: tt.id, presentation: "run-result", children: a })),
              (eB[79] = tt.id),
              (eB[80] = a),
              (eB[81] = l))
            : (l = eB[81]),
          eB[82] !== eq ||
          eB[83] !== eU ||
          eB[84] !== e3.isPending ||
          eB[85] !== e ||
          eB[86] !== t ||
          eB[87] !== n ||
          eB[88] !== l
            ? ((o = (0, s.jsx)(es.K, {
                item: eq,
                summary: e,
                onClose: eU,
                onEdit: t,
                onRunNow: n,
                isRunNowPending: e3.isPending,
                children: l,
              })),
              (eB[82] = eq),
              (eB[83] = eU),
              (eB[84] = e3.isPending),
              (eB[85] = e),
              (eB[86] = t),
              (eB[87] = n),
              (eB[88] = l),
              (eB[89] = o))
            : (o = eB[89]),
          eB[90] !== tt.id || eB[91] !== tu || eB[92] !== eq || eB[93] !== tm
            ? ((i = tu
                ? (0, s.jsx)(u.$, {
                    automationId: tt.id,
                    children: (e) => (0, s.jsx)(ea.Q, { item: eq, relatedActions: e, onClose: () => tm(!1) }),
                  })
                : null),
              (eB[90] = tt.id),
              (eB[91] = tu),
              (eB[92] = eq),
              (eB[93] = tm),
              (eB[94] = i))
            : (i = eB[94]),
          eB[95] !== o || eB[96] !== i
            ? ((r = (0, s.jsxs)(s.Fragment, { children: [o, i] })), (eB[95] = o), (eB[96] = i), (eB[97] = r))
            : (r = eB[97]),
          r
        )
      }
      if (ts && null != to) {
        let e, t
        return (
          eB[98] === Symbol.for("react.memo_cache_sentinel") ? ((e = () => ti(null)), (eB[98] = e)) : (e = eB[98]),
          eB[99] !== eU || eB[100] !== eO || eB[101] !== to
            ? ((t = (0, s.jsx)($, { run: to, renderSlots: eO, onBack: e, onClose: eU }, to.conversationId)),
              (eB[99] = eU),
              (eB[100] = eO),
              (eB[101] = to),
              (eB[102] = t))
            : (t = eB[102]),
          t
        )
      }
      let tk = tf || tr
      ;(eB[103] !== eq || eB[104] !== tk
        ? ((er = (0, s.jsx)(el.Y, { item: eq, source: "editor", disabled: tk })),
          (eB[103] = eq),
          (eB[104] = tk),
          (eB[105] = er))
        : (er = eB[105]),
        eB[106] !== eq.teamId ? ((em = null), (eB[106] = eq.teamId), (eB[107] = em)) : (em = eB[107]),
        eB[108] !== er || eB[109] !== em
          ? ((eh = (0, s.jsxs)(s.Fragment, { children: [er, em] })), (eB[108] = er), (eB[109] = em), (eB[110] = eh))
          : (eh = eB[110]),
        eB[111] !== eU
          ? ((ef = () => {
              ;((e7.current = !0), eU())
            }),
            (eB[111] = eU),
            (eB[112] = ef))
          : (ef = eB[112]),
        eB[113] !== tg || eB[114] !== tf || eB[115] !== e3 || eB[116] !== tv || eB[117] !== e1
          ? ((ex = (e) =>
              (0, s.jsx)(K.n, {
                ...e,
                runNowAction:
                  null == e.runNowAction
                    ? void 0
                    : {
                        disabled: e.runNowAction.disabled || (tf && !tg),
                        isPending: e1.isPending || e3.isPending,
                        label: tf
                          ? (0, s.jsx)(d.A, {
                              id: "automations.editor.saveAndRunNow",
                              defaultMessage: "Save and run now",
                              description: "Saves the edited scheduled task before running it immediately",
                            })
                          : void 0,
                        tooltipText: tf
                          ? (0, s.jsx)(d.A, {
                              id: "automations.editor.saveAndRunNowTooltip",
                              defaultMessage: "Save changes, then run the task once",
                              description:
                                "Tooltip for saving changes to a scheduled task before running it immediately",
                            })
                          : e.runNowAction.tooltipText,
                        onSelectAsync: () => tv(!0),
                      },
              })),
            (eB[113] = tg),
            (eB[114] = tf),
            (eB[115] = e3),
            (eB[116] = tv),
            (eB[117] = e1),
            (eB[118] = ex))
          : (ex = eB[118]),
        eB[119] !== eq || eB[120] !== eH || eB[121] !== eh || eB[122] !== ef || eB[123] !== ex
          ? ((ep = (0, s.jsx)(Y.s, {
              item: eq,
              trailingMenuItems: eh,
              onDeleted: ef,
              onOpenConversation: eH,
              renderActions: ex,
            })),
            (eB[119] = eq),
            (eB[120] = eH),
            (eB[121] = eh),
            (eB[122] = ef),
            (eB[123] = ex),
            (eB[124] = ep))
          : (ep = eB[124]),
        eB[125] !== eQ || eB[126] !== e9 || eB[127] !== eU || eB[128] !== tb || eB[129] !== eW
          ? ((eg = eW
              ? {
                  label: eQ.formatMessage({
                    id: "inbox.automations.detail.close",
                    defaultMessage: "Close scheduled task details",
                    description: "Accessible label for closing the scheduled task detail panel",
                  }),
                  onClose: () => {
                    Promise.resolve(tb()).then((e) => {
                      e && e9() && ((e7.current = !0), eU())
                    })
                  },
                }
              : void 0),
            (eB[125] = eQ),
            (eB[126] = e9),
            (eB[127] = eU),
            (eB[128] = tb),
            (eB[129] = eW),
            (eB[130] = eg))
          : (eg = eB[130]),
        eB[131] !== tt ||
        eB[132] !== tn ||
        eB[133] !== tg ||
        eB[134] !== eX ||
        eB[135] !== tf ||
        eB[136] !== tr ||
        eB[137] !== e1
          ? ((ej =
              tn && tf
                ? (0, s.jsxs)("div", {
                    className: "flex items-center justify-end gap-2",
                    children: [
                      (0, s.jsx)(f.$, {
                        color: "outline",
                        disabled: tr,
                        size: "toolbar",
                        onClick: () => {
                          tl((0, eo.qz)(tt))
                        },
                        children: (0, s.jsx)(d.A, {
                          id: "automation.sidePanel.cancel",
                          defaultMessage: "Cancel",
                          description: "Cancel button label for the scheduled task editor",
                        }),
                      }),
                      (0, s.jsx)(f.$, {
                        ref: e4,
                        disabled: !tg || tr,
                        form: eX,
                        loading: e1.isPending,
                        size: "toolbar",
                        type: "submit",
                        children: (0, s.jsx)(d.A, {
                          id: "inbox.automations.cloud.save",
                          defaultMessage: "Save",
                          description: "Button label for saving changes to a cloud scheduled task",
                        }),
                      }),
                    ],
                  })
                : null),
            (eB[131] = tt),
            (eB[132] = tn),
            (eB[133] = tg),
            (eB[134] = eX),
            (eB[135] = tf),
            (eB[136] = tr),
            (eB[137] = e1),
            (eB[138] = ej))
          : (ej = eB[138]))
      let tA = tn ? ta.name : tt.title
      ;(eB[139] === Symbol.for("react.memo_cache_sentinel")
        ? ((eb = (e) => (0, j.k)(e, () => e4.current?.click())), (eB[139] = eb))
        : (eb = eB[139]),
        eB[140] !== tn || eB[141] !== tc
          ? ((ev =
              !tn || tc
                ? null
                : (e) => {
                    tl((t) => ({ ...t, name: e }))
                  }),
            (eB[140] = tn),
            (eB[141] = tc),
            (eB[142] = ev))
          : (ev = eB[142]))
      let tN = "active" === td ? void 0 : "text-codex-description"
      return (
        eB[143] !== td || eB[144] !== th
          ? ((ey =
              th && "active" === td
                ? (0, s.jsx)("span", {
                    className: "select-none",
                    children: (0, s.jsx)(d.A, {
                      id: "inbox.automations.cloud.webhook.monitoring",
                      defaultMessage: "Monitoring",
                      description:
                        "Status of an enabled cloud webhook task in its details panel, indicating that it is waiting for events from a connected app",
                    }),
                  })
                : (0, s.jsx)(d.A, { ...J.M[td] })),
            (eB[143] = td),
            (eB[144] = th),
            (eB[145] = ey))
          : (ey = eB[145]),
        eB[146] !== tN || eB[147] !== ey
          ? ((ew = (0, s.jsx)("span", { className: tN, children: ey })), (eB[146] = tN), (eB[147] = ey), (eB[148] = ew))
          : (ew = eB[148]),
        eB[149] !== tt.id
          ? ((e_ = (0, s.jsx)(u.$, { automationId: tt.id })), (eB[149] = tt.id), (eB[150] = e_))
          : (e_ = eB[150]),
        eB[151] !== tt.is_enabled || eB[152] !== tt.webhook_triggers || eB[153] !== th || eB[154] !== t_
          ? ((ek = th
              ? (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(en.C, { isAutomationEnabled: tt.is_enabled, triggers: tt.webhook_triggers }),
                    (0, s.jsx)(N.C, {
                      title: (0, s.jsx)("span", {
                        className: "select-none",
                        children: (0, s.jsx)(d.A, {
                          id: "inbox.automations.cloud.webhook.prompt",
                          defaultMessage: "Prompt",
                          description:
                            "Section heading above the instructions for a cloud webhook task in its details panel",
                        }),
                      }),
                      children: t_,
                    }),
                  ],
                })
              : t_),
            (eB[151] = tt.is_enabled),
            (eB[152] = tt.webhook_triggers),
            (eB[153] = th),
            (eB[154] = t_),
            (eB[155] = ek))
          : (ek = eB[155]),
        eB[156] === Symbol.for("react.memo_cache_sentinel")
          ? ((eA = (0, s.jsx)(d.A, {
              id: "inbox.automations.details",
              defaultMessage: "Details",
              description: "Section label above the automation details rail",
            })),
            (eB[156] = eA))
          : (eA = eB[156]),
        eB[157] !== tt.executor
          ? ((eN =
              "local" === tt.executor
                ? (0, s.jsx)(d.A, {
                    id: "inbox.automations.executionLocation.desktop",
                    defaultMessage: "Desktop",
                    description:
                      "Execution location shown for a synced local automation in its details panel. It runs on the desktop installation where it was created, which may be another computer.",
                  })
                : (0, s.jsxs)("span", {
                    className: "inline-flex items-center gap-1",
                    children: [(0, s.jsx)(x.I, { asset: l.f }), (0, s.jsx)(d.A, { ...G.H.cloud })],
                  })),
            (eB[157] = tt.executor),
            (eB[158] = eN))
          : (eN = eB[158]),
        eB[159] === Symbol.for("react.memo_cache_sentinel")
          ? ((eM = (0, s.jsx)(d.A, { ...G.H.label })), (eB[159] = eM))
          : (eM = eB[159]),
        eB[160] !== eN
          ? ((eS = (0, s.jsx)(eu, { value: eN, label: eM })), (eB[160] = eN), (eB[161] = eS))
          : (eS = eB[161]),
        eB[162] !== eq.teamId
          ? ((eI = null != eq.teamId ? (0, s.jsx)(Z.W, { teamId: eq.teamId }) : null),
            (eB[162] = eq.teamId),
            (eB[163] = eI))
          : (eI = eB[163]),
        eB[164] !== eS || eB[165] !== eI
          ? ((eC = (0, s.jsx)(N.C, { title: eA, children: (0, s.jsxs)(w.t, { children: [eS, eI] }) })),
            (eB[164] = eS),
            (eB[165] = eI),
            (eB[166] = eC))
          : (eC = eB[166]),
        eB[167] !== tt || eB[168] !== tj || eB[169] !== tp || eB[170] !== ta || eB[171] !== tw
          ? ((eR = tj
              ? (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(ei.V, {
                      afterScheduleRows: tw,
                      automation: tt,
                      draft: ta,
                      onChange: tl,
                      weekdayLabelFormat: "short",
                    }),
                    null == tp
                      ? null
                      : (0, s.jsxs)("p", {
                          className: "text-sm text-danger select-none",
                          role: "alert",
                          children: [
                            "too-far" === tp &&
                              (0, s.jsx)(d.A, {
                                id: "automations.scheduled.editor.dateTooFar",
                                defaultMessage: "Choose a date within the next two years",
                                description:
                                  "Validation error in the Scheduled task editor when a one-time task is scheduled two years or more in the future",
                              }),
                            "end-past" === tp &&
                              (0, s.jsx)(d.A, {
                                id: "automations.scheduled.editor.endDateInPast",
                                defaultMessage: "Choose an end date today or later",
                                description:
                                  "Validation error in the Scheduled task editor when a recurrence end date is in the past",
                              }),
                            "past" === tp &&
                              (0, s.jsx)(d.A, {
                                id: "automations.scheduled.editor.dateInPast",
                                defaultMessage: "Choose a date and time in the future",
                                description:
                                  "Validation error in the Scheduled task editor when a one-time task is scheduled in the past",
                              }),
                          ],
                        }),
                  ],
                })
              : null),
            (eB[167] = tt),
            (eB[168] = tj),
            (eB[169] = tp),
            (eB[170] = ta),
            (eB[171] = tw),
            (eB[172] = eR))
          : (eR = eB[172]),
        eB[173] !== tt.default_timezone ||
        eB[174] !== tj ||
        eB[175] !== eQ ||
        eB[176] !== th ||
        eB[177] !== eq ||
        eB[178] !== tw
          ? ((eL =
              tj || th
                ? null
                : (0, s.jsx)(N.C, {
                    title: (0, s.jsx)(d.A, {
                      id: "inbox.automations.frequency",
                      defaultMessage: "Frequency",
                      description: "Section label above scheduled task frequency controls",
                    }),
                    children: (0, s.jsxs)(w.t, {
                      children: [
                        (0, s.jsx)(eu, {
                          value: (0, ee.AT)(eq, eQ, tt.default_timezone),
                          label: (0, s.jsx)(d.A, {
                            id: "inbox.automations.cloud.schedule",
                            defaultMessage: "Schedule",
                            description: "Label for a cloud scheduled task schedule",
                          }),
                        }),
                        tw,
                      ],
                    }),
                  })),
            (eB[173] = tt.default_timezone),
            (eB[174] = tj),
            (eB[175] = eQ),
            (eB[176] = th),
            (eB[177] = eq),
            (eB[178] = tw),
            (eB[179] = eL))
          : (eL = eB[179]),
        eB[180] !== tt.id || eB[181] !== ts
          ? ((eT = ts ? (0, s.jsx)(D, { automationId: tt.id, onSelectRun: ti }) : null),
            (eB[180] = tt.id),
            (eB[181] = ts),
            (eB[182] = eT))
          : (eT = eB[182]),
        eB[183] !== tx
          ? ((eP = () => (tx || null != e5.current) && !e7.current), (eB[183] = tx), (eB[184] = eP))
          : (eP = eB[184]),
        eB[185] !== e8
          ? ((eD = e8
              ? {
                  onCancel: () => {
                    ;(e6.current?.(!1), (e6.current = null), te(!1))
                  },
                  onDiscard: () => {
                    let e = e6.current
                    ;((e6.current = null), te(!1), e?.(!0))
                  },
                }
              : null),
            (eB[185] = e8),
            (eB[186] = eD))
          : (eD = eB[186]),
        eB[187] !== tr || eB[188] !== eP || eB[189] !== eD
          ? ((eE = (0, s.jsx)(ea.M, { isPending: tr, shouldBlock: eP, dismissal: eD })),
            (eB[187] = tr),
            (eB[188] = eP),
            (eB[189] = eD),
            (eB[190] = eE))
          : (eE = eB[190]),
        eB[191] !== eO ||
        eB[192] !== ep ||
        eB[193] !== eg ||
        eB[194] !== ej ||
        eB[195] !== tA ||
        eB[196] !== ev ||
        eB[197] !== ew ||
        eB[198] !== e_ ||
        eB[199] !== ek ||
        eB[200] !== eC ||
        eB[201] !== eR ||
        eB[202] !== eL ||
        eB[203] !== eT ||
        eB[204] !== eE
          ? ((ez = (0, s.jsxs)(W.V, {
              renderSlots: eO,
              actions: ep,
              closeAction: eg,
              footer: ej,
              name: tA,
              onKeyDown: eb,
              onNameChange: ev,
              statusLabel: ew,
              children: [e_, ek, eC, eR, eL, eT, eE],
            })),
            (eB[191] = eO),
            (eB[192] = ep),
            (eB[193] = eg),
            (eB[194] = ej),
            (eB[195] = tA),
            (eB[196] = ev),
            (eB[197] = ew),
            (eB[198] = e_),
            (eB[199] = ek),
            (eB[200] = eC),
            (eB[201] = eR),
            (eB[202] = eL),
            (eB[203] = eT),
            (eB[204] = eE),
            (eB[205] = ez))
          : (ez = eB[205]),
        ez
      )
    }
    function ed() {}
    function ec(e) {
      e.preventDefault()
    }
    function eu(e) {
      let t,
        n,
        l = (0, a.c)(5),
        { label: o, value: i } = e
      return (
        l[0] !== i
          ? ((t = (0, s.jsx)("span", {
              className: "max-w-64 text-end text-base break-words text-default select-text",
              children: i,
            })),
            (l[0] = i),
            (l[1] = t))
          : (t = l[1]),
        l[2] !== o || l[3] !== t
          ? ((n = (0, s.jsx)(y.ic, { control: t, label: o, variant: "nested" })), (l[2] = o), (l[3] = t), (l[4] = n))
          : (n = l[4]),
        n
      )
    }
  },
  oqk6(e, t, n) {
    var s = n("ABep"),
      a = n("QosV"),
      l = n("HFi9"),
      o = n.n(l),
      i = n("zTeN"),
      r = n("DBCl"),
      d = n("AuIy"),
      c = n("IgxH"),
      u = n("zd8w"),
      m = n("oyxz"),
      h = n("Wf1j"),
      f = n("HZfM"),
      x = n("SPnB"),
      p = n("TZBk"),
      g = n("fGpH"),
      j = n("AZW7"),
      b = n("jfZL"),
      v = n("rO2H"),
      y = n("oPza"),
      w = n("fZVq"),
      _ = n("jAnS"),
      k = n("tnfs"),
      A = n("dKZq"),
      N = n("dMTK"),
      M = n("Sm6l"),
      S = n("bVeK"),
      I = n("FrrB"),
      C = n("RNul"),
      R = n("KIKs"),
      L = n("OWtl"),
      T = n("Bc5r"),
      P = n("eShZ"),
      D = n("bEqT")
    function E(e) {
      let t,
        n,
        l,
        o,
        r,
        c,
        h,
        f,
        x,
        p,
        g,
        j,
        v,
        _,
        k,
        N = (0, a.c)(71),
        { item: M, relatedActions: S, runId: I } = e,
        C = (0, i.gh)(L.u)
      N[0] !== M.automation.id || N[1] !== I
        ? ((t = { automationId: M.automation.id, runId: I }), (N[0] = M.automation.id), (N[1] = I), (N[2] = t))
        : (t = N[2])
      let { data: R, isPending: T, isFetching: E, isError: U, error: H, refetch: $ } = (0, i._U)(D.Tu, t)
      N[3] !== R || N[4] !== U || N[5] !== M || N[6] !== I || N[7] !== C
        ? ((n = () => {
            if (null == R || U) return
            let e = R.latest_update
            for (let t of [e?.run, R.last_run?.id === e?.run.id ? null : R.last_run])
              t?.is_unread && (0, D.FL)(C, M.automation.id, t).catch(B)
            null == I &&
              null == M.teamId &&
              e?.latest_update != null &&
              e.run.id === R.last_run?.id &&
              (0, y.w)(C, M).catch(z)
          }),
          (N[3] = R),
          (N[4] = U),
          (N[5] = M),
          (N[6] = I),
          (N[7] = C),
          (N[8] = n))
        : (n = N[8])
      let Z = (0, u.useEffectEvent)(n)
      if (
        (N[9] !== Z
          ? ((l = () => {
              Z()
            }),
            (N[9] = Z),
            (N[10] = l))
          : (l = N[10]),
        N[11] !== R || N[12] !== U ? ((o = [R, U]), (N[11] = R), (N[12] = U), (N[13] = o)) : (o = N[13]),
        (0, u.useEffect)(l, o),
        null == R || (H instanceof P.fk && [401, 403, 404, 410].includes(H.status)))
      ) {
        let e, t, n, a
        return (
          N[14] !== $ ? ((e = () => void $()), (N[14] = $), (N[15] = e)) : (e = N[15]),
          N[16] !== E || N[17] !== T || N[18] !== e
            ? ((t = (0, s.jsx)(q, { pending: T, loading: E, onRetry: e })),
              (N[16] = E),
              (N[17] = T),
              (N[18] = e),
              (N[19] = t))
            : (t = N[19]),
          N[20] !== S
            ? ((n = (0, s.jsx)(F, { relatedActions: S, chatRef: null })), (N[20] = S), (N[21] = n))
            : (n = N[21]),
          N[22] !== t || N[23] !== n
            ? ((a = (0, s.jsxs)(s.Fragment, { children: [t, n] })), (N[22] = t), (N[23] = n), (N[24] = a))
            : (a = N[24]),
          a
        )
      }
      let V = R.latest_update,
        K = R.last_run ?? V?.run,
        W = null != V && K?.id === V.run.id ? V.latest_update : null
      N[25] !== K?.chat_ref || N[26] !== M.automation.conversation_id || N[27] !== M.teamId || N[28] !== I
        ? ((r =
            K?.chat_ref ??
            (null == I && null == M.teamId && M.automation.conversation_id
              ? { type: "chatgpt", id: M.automation.conversation_id }
              : null)),
          (N[25] = K?.chat_ref),
          (N[26] = M.automation.conversation_id),
          (N[27] = M.teamId),
          (N[28] = I),
          (N[29] = r))
        : (r = N[29])
      let G = r,
        Q = W?.metadata.automation_requires_user_action === !0
      N[30] !== W ? ((c = null != W && !(0, d.WH)(W.content_text)), (N[30] = W), (N[31] = c)) : (c = N[31])
      let X = c
      N[32] !== X || N[33] !== V || N[34] !== W
        ? ((h = X && null != V ? (0, s.jsx)(w.F, { conversationId: V.run.id, update: W }) : null),
          (N[32] = X),
          (N[33] = V),
          (N[34] = W),
          (N[35] = h))
        : (h = N[35])
      let J = h
      N[36] !== X || N[37] !== I || N[38] !== W || N[39] !== J
        ? ((f =
            null == I && X
              ? (0, s.jsx)(A.S, { collapsedLineCount: 9, collapseIndicator: "fade", text: W.content_text, children: J })
              : J),
          (N[36] = X),
          (N[37] = I),
          (N[38] = W),
          (N[39] = J),
          (N[40] = f))
        : (f = N[40])
      let Y = f
      N[41] !== R.last_run?.id || N[42] !== K?.id
        ? ((x =
            K?.id === R.last_run?.id
              ? (0, s.jsx)(m.A, {
                  id: "automations.runs.lastRun",
                  defaultMessage: "Last run",
                  description: "Heading above the latest scheduled task run response",
                })
              : (0, s.jsx)(m.A, {
                  id: "automations.runs.latest",
                  defaultMessage: "Latest update",
                  description:
                    "Heading above the latest available scheduled task response when the most recent run has no response",
                })),
          (N[41] = R.last_run?.id),
          (N[42] = K?.id),
          (N[43] = x))
        : (x = N[43])
      let ee = x
      return (
        N[44] !== R.last_run ||
        N[45] !== K ||
        N[46] !== X ||
        N[47] !== Q ||
        N[48] !== Y ||
        N[49] !== ee ||
        N[50] !== V ||
        N[51] !== I ||
        N[52] !== W
          ? ((p =
              null != K
                ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsxs)("p", {
                        className: "flex items-center justify-between gap-3 text-sm text-secondary select-none",
                        children: [
                          null == I ? (0, s.jsx)("span", { children: ee }) : null,
                          (0, s.jsx)("span", {
                            className: "shrink-0",
                            children: (0, s.jsx)(b.k, { value: W?.created_at ?? K.started_at }),
                          }),
                        ],
                      }),
                      Q
                        ? (0, s.jsx)("p", {
                            role: "status",
                            className: "text-sm text-default select-none",
                            children: (0, s.jsx)(m.A, {
                              id: "automations.runs.attention",
                              defaultMessage: "This task needs your attention",
                              description: "A task result needs approval or input; private task content stays hidden",
                            }),
                          })
                        : null,
                      Q ? null : Y,
                      Q || X || null == K
                        ? null
                        : (0, s.jsx)("p", {
                            role: "status",
                            className: "text-sm text-secondary select-none",
                            children: (0, s.jsx)(O, { run: K }),
                          }),
                      null != R.last_run && null != W && R.last_run.id === V?.run.id && "failed" === R.last_run.status
                        ? (0, s.jsx)("p", {
                            role: "status",
                            className: "border-t border-default pt-4 text-sm text-secondary select-none",
                            children: (0, s.jsx)(O, { run: R.last_run }),
                          })
                        : null,
                    ],
                  })
                : null),
            (N[44] = R.last_run),
            (N[45] = K),
            (N[46] = X),
            (N[47] = Q),
            (N[48] = Y),
            (N[49] = ee),
            (N[50] = V),
            (N[51] = I),
            (N[52] = W),
            (N[53] = p))
          : (p = N[53]),
        N[54] !== K || N[55] !== U
          ? ((g =
              null != K || U
                ? null
                : (0, s.jsx)("p", {
                    role: "status",
                    className: "text-sm text-secondary select-none",
                    children: (0, s.jsx)(m.A, {
                      id: "automations.runs.empty",
                      defaultMessage: "No runs yet",
                      description: "Empty state for a scheduled task that has never run",
                    }),
                  })),
            (N[54] = K),
            (N[55] = U),
            (N[56] = g))
          : (g = N[56]),
        N[57] !== U || N[58] !== E || N[59] !== $
          ? ((j = U ? (0, s.jsx)(q, { pending: !1, loading: E, onRetry: () => void $() }) : null),
            (N[57] = U),
            (N[58] = E),
            (N[59] = $),
            (N[60] = j))
          : (j = N[60]),
        N[61] !== p || N[62] !== g || N[63] !== j
          ? ((v = (0, s.jsxs)("section", { className: "flex min-w-0 flex-col gap-2", children: [p, g, j] })),
            (N[61] = p),
            (N[62] = g),
            (N[63] = j),
            (N[64] = v))
          : (v = N[64]),
        N[65] !== G || N[66] !== S
          ? ((_ = (0, s.jsx)(F, { relatedActions: S, chatRef: G })), (N[65] = G), (N[66] = S), (N[67] = _))
          : (_ = N[67]),
        N[68] !== v || N[69] !== _
          ? ((k = (0, s.jsxs)(s.Fragment, { children: [v, _] })), (N[68] = v), (N[69] = _), (N[70] = k))
          : (k = N[70]),
        k
      )
    }
    function z() {}
    function B() {}
    function F(e) {
      let t,
        n,
        l = (0, a.c)(8),
        { relatedActions: o, chatRef: i } = e,
        d = (0, f.Zp)(),
        c = (0, T.M0)()
      if (null == i && null == o) return null
      let u = null != o ? "flex flex-wrap items-center gap-2" : void 0
      return (
        l[0] !== i || l[1] !== d || l[2] !== c
          ? ((t =
              null != i
                ? (0, s.jsxs)(M.$, {
                    className: "w-fit",
                    color: "ghostTertiary",
                    size: "inline",
                    onClick: () => {
                      "codex" === i.type ? c(i.id, r.iwv, { threadAccess: "shared" }) : d((0, _.mv)(i.id))
                    },
                    children: [
                      (0, s.jsx)(m.A, {
                        id: "automations.editor.openChat.button.label",
                        defaultMessage: "Open chat",
                        description: "Button in the Scheduled task details panel that opens the task's conversation",
                      }),
                      (0, s.jsx)(S.$XR, {}),
                    ],
                  })
                : null),
            (l[0] = i),
            (l[1] = d),
            (l[2] = c),
            (l[3] = t))
          : (t = l[3]),
        l[4] !== o || l[5] !== u || l[6] !== t
          ? ((n = (0, s.jsx)("div", {
              className: "mt-2 text-sm",
              children: (0, s.jsxs)("div", { className: u, children: [o, t] }),
            })),
            (l[4] = o),
            (l[5] = u),
            (l[6] = t),
            (l[7] = n))
          : (n = l[7]),
        n
      )
    }
    function q(e) {
      let t,
        n = (0, a.c)(4),
        { pending: l, loading: o, onRetry: i } = e
      return (
        n[0] !== o || n[1] !== i || n[2] !== l
          ? ((t = l
              ? (0, s.jsxs)("div", {
                  className: "flex flex-1 items-center justify-center",
                  role: "status",
                  children: [
                    (0, s.jsx)(C.y, {}),
                    (0, s.jsx)("span", {
                      className: "sr-only",
                      children: (0, s.jsx)(m.A, {
                        id: "automations.runs.loading",
                        defaultMessage: "Loading task results",
                        description: "Loading announcement for scheduled task results",
                      }),
                    }),
                  ],
                })
              : (0, s.jsx)(I.A, {
                  className: "flex-1 select-none",
                  title: (0, s.jsx)(m.A, {
                    id: "automations.runs.error",
                    defaultMessage: "Couldn’t load task results",
                    description: "Error loading scheduled task results or a history page",
                  }),
                  actions: (0, s.jsx)(M.$, {
                    color: "outline",
                    loading: o,
                    onClick: i,
                    children: (0, s.jsx)(m.A, {
                      id: "automations.runs.retry",
                      defaultMessage: "Try again",
                      description: "Retry loading scheduled task results",
                    }),
                  }),
                })),
            (n[0] = o),
            (n[1] = i),
            (n[2] = l),
            (n[3] = t))
          : (t = n[3]),
        t
      )
    }
    function O(e) {
      let t,
        n = (0, a.c)(3),
        { run: l } = e
      if ("in_progress" === l.status && null == l.chat_ref) {
        let e
        return (
          n[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)(m.A, { ...p.M.startingRun })), (n[0] = e))
            : (e = n[0]),
          e
        )
      }
      return (
        n[1] !== l.status
          ? ((t = (0, s.jsx)(m.A, {
              id: "automations.runs.status",
              defaultMessage:
                "{status, select, in_progress {Running now} failed {Run failed} no_update {No update from this run} other {Run completed}}",
              description: "Execution status of a scheduled task run, also used when a run has no text summary",
              values: { status: l.status },
            })),
            (n[1] = l.status),
            (n[2] = t))
          : (t = n[2]),
        t
      )
    }
    function U(e) {
      let t,
        n,
        l,
        r,
        f,
        p,
        g,
        b,
        v,
        y,
        w,
        _ = (0, a.c)(69),
        { item: A, relatedActions: S } = e,
        I = (0, i.gh)(L.u),
        C = (0, i.Ul)(x.chatGptAuthenticatedAccountId$),
        T = A.automation.id,
        z = (0, h.A)(),
        B = (0, u.useId)(),
        [F, U] = (0, u.useState)(null),
        $ = (0, R.wv)()
      _[0] !== T ? ((t = { automationId: T, runId: null }), (_[0] = T), (_[1] = t)) : (t = _[1])
      let { data: Z } = (0, i._U)(D.Tu, t),
        {
          data: V,
          isPending: K,
          isFetching: W,
          fetchStatus: G,
          isError: Q,
          error: X,
          refetch: J,
          fetchNextPage: Y,
          hasNextPage: ee,
          isFetchingNextPage: et,
          isFetchNextPageError: en,
        } = (0, i._U)(D.n, T)
      _[2] !== T || _[3] !== I
        ? ((n = (e) => {
            I.queryClient.prefetchQuery(I.query.getOptions(D.Tu, { automationId: T, runId: e }))
          }),
          (_[2] = T),
          (_[3] = I),
          (_[4] = n))
        : (n = _[4])
      let es = n,
        ea = Z?.last_run?.id ?? Z?.latest_update?.run.id
      if (
        _[5] !== C ||
        _[6] !== T ||
        _[7] !== V?.pages ||
        _[8] !== V?.pages.flatMap ||
        _[9] !== ea ||
        _[10] !== X ||
        _[11] !== F ||
        _[12] !== G ||
        _[13] !== ee ||
        _[14] !== B ||
        _[15] !== z ||
        _[16] !== Q ||
        _[17] !== W ||
        _[18] !== K ||
        _[19] !== A ||
        _[20] !== $ ||
        _[21] !== es ||
        _[22] !== J ||
        _[23] !== S
      ) {
        g = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            t,
            n,
            a = V?.pages.flatMap(H).filter((e) => e.id !== ea),
            i = null == a || (X instanceof P.fk && [401, 403, 404, 410].includes(X.status))
          _[29] !== C || _[30] !== T
            ? ((e = JSON.stringify([C, T])), (_[29] = C), (_[30] = T), (_[31] = e))
            : (e = _[31])
          let h = !i && (a.length > 0 || (!ee && !Q)),
            x = Q && "idle" === G
          if (
            (_[32] !== e || _[33] !== h || _[34] !== x
              ? ((t = (0, s.jsx)(j.z, { name: "scheduled_history_load", ready: h, failed: x }, e)),
                (_[32] = e),
                (_[33] = h),
                (_[34] = x),
                (_[35] = t))
              : (t = _[35]),
            (l = t),
            i)
          ) {
            let e, t, n
            ;(_[36] !== J ? ((e = () => void J()), (_[36] = J), (_[37] = e)) : (e = _[37]),
              _[38] !== W || _[39] !== K || _[40] !== e
                ? ((t = (0, s.jsx)(q, { pending: K, loading: W, onRetry: e })),
                  (_[38] = W),
                  (_[39] = K),
                  (_[40] = e),
                  (_[41] = t))
                : (t = _[41]),
              _[42] !== l || _[43] !== t
                ? ((n = (0, s.jsxs)(s.Fragment, { children: [l, t] })), (_[42] = l), (_[43] = t), (_[44] = n))
                : (n = _[44]),
              (g = n))
            break e
          }
          _[45] !== z || _[46] !== $
            ? ((n = (e) => {
                let t = new Date(e.started_at),
                  n = (0, N.f$)($, t)
                return n <= 0
                  ? "today"
                  : 1 === n
                    ? "yesterday"
                    : n <= 7
                      ? "lastWeek"
                      : z.formatDate(t, { month: "long", year: "numeric" })
              }),
              (_[45] = z),
              (_[46] = $),
              (_[47] = n))
            : (n = _[47])
          let b = o()(a, n)
          ;((r = "flex min-w-0 flex-col gap-4 border-t border-default pt-6"),
            _[48] === Symbol.for("react.memo_cache_sentinel")
              ? ((f = (0, s.jsx)("h3", {
                  className: "px-3 text-sm font-medium text-secondary select-none",
                  children: (0, s.jsx)(m.A, {
                    id: "automations.runs.previous",
                    defaultMessage: "Previous runs",
                    description: "Heading above earlier scheduled task runs",
                  }),
                })),
                (_[48] = f))
              : (f = _[48]),
            (p =
              0 === a.length
                ? (0, s.jsx)("p", {
                    className: "px-3 text-sm text-secondary select-none",
                    children: (0, s.jsx)(m.A, {
                      id: "automations.runs.noPrevious",
                      defaultMessage: "No previous runs",
                      description: "Empty scheduled task history below its latest run",
                    }),
                  })
                : Object.entries(b).map((e) => {
                    let [t, n] = e
                    return (0, s.jsxs)(
                      "section",
                      {
                        className: "flex flex-col gap-2",
                        children: [
                          (0, s.jsx)("h4", {
                            className: "px-3 text-xs font-medium text-secondary select-none",
                            children: (0, s.jsx)(m.A, {
                              id: "automations.runs.dateGroup",
                              defaultMessage:
                                "{group, select, today {Today} yesterday {Yesterday} lastWeek {Last 7 days} other {{month}}}",
                              description:
                                "Date group in scheduled task run history; month is a localized month and year for older runs",
                              values: { group: t, month: t },
                            }),
                          }),
                          n.map((e) =>
                            (0, s.jsxs)(
                              u.Fragment,
                              {
                                children: [
                                  (0, s.jsx)(M.$, {
                                    id: B + "-" + e.id + "-button",
                                    className: "w-full justify-start",
                                    color: "ghost",
                                    radius: "large",
                                    size: "inline",
                                    "aria-expanded": F === e.id,
                                    "aria-controls": B + "-" + e.id,
                                    onClick: () => U((t) => (t === e.id ? null : e.id)),
                                    onFocus: () => es(e.id),
                                    onPointerEnter: () => es(e.id),
                                    children: (0, s.jsxs)("span", {
                                      className:
                                        "relative flex min-h-9 min-w-0 flex-1 items-center gap-3 px-3 text-sm font-normal",
                                      children: [
                                        (0, s.jsx)("span", {
                                          className: "size-2 shrink-0",
                                          children: e.is_unread
                                            ? (0, s.jsx)("span", {
                                                className: "block size-2 rounded-full bg-accent",
                                                role: "img",
                                                "aria-label": z.formatMessage({
                                                  id: "automations.runs.unread",
                                                  defaultMessage: "Unread",
                                                  description: "Accessible label for an unread scheduled task run",
                                                }),
                                              })
                                            : null,
                                        }),
                                        (0, s.jsx)("span", {
                                          className: "min-w-0 flex-1 truncate text-start",
                                          children:
                                            (e.summary && !(0, d.WH)(e.summary) && (0, c.i)(e.summary)) ||
                                            (0, s.jsx)(O, { run: e }),
                                        }),
                                        (0, s.jsx)("time", {
                                          className: "shrink-0 text-xs text-tertiary",
                                          dateTime: e.started_at,
                                          children: z.formatDate(e.started_at, { month: "short", day: "numeric" }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, s.jsx)(k.Q, {
                                    id: B + "-" + e.id,
                                    className: "px-3 pb-4",
                                    "aria-labelledby": B + "-" + e.id + "-button",
                                    role: "region",
                                    expanded: F === e.id,
                                    children: (0, s.jsx)(E, { item: A, runId: e.id, relatedActions: S }),
                                  }),
                                ],
                              },
                              e.id,
                            ),
                          ),
                        ],
                      },
                      t,
                    )
                  })))
        }
        ;((_[5] = C),
          (_[6] = T),
          (_[7] = V?.pages),
          (_[8] = V?.pages.flatMap),
          (_[9] = ea),
          (_[10] = X),
          (_[11] = F),
          (_[12] = G),
          (_[13] = ee),
          (_[14] = B),
          (_[15] = z),
          (_[16] = Q),
          (_[17] = W),
          (_[18] = K),
          (_[19] = A),
          (_[20] = $),
          (_[21] = es),
          (_[22] = J),
          (_[23] = S),
          (_[24] = l),
          (_[25] = r),
          (_[26] = f),
          (_[27] = p),
          (_[28] = g))
      } else ((l = _[24]), (r = _[25]), (f = _[26]), (p = _[27]), (g = _[28]))
      if (g !== Symbol.for("react.early_return_sentinel")) return g
      ;(_[49] !== Y || _[50] !== Q || _[51] !== en || _[52] !== W || _[53] !== J
        ? ((b = Q ? (0, s.jsx)(q, { pending: !1, loading: W, onRetry: () => void (en ? Y() : J()) }) : null),
          (_[49] = Y),
          (_[50] = Q),
          (_[51] = en),
          (_[52] = W),
          (_[53] = J),
          (_[54] = b))
        : (b = _[54]),
        _[55] !== Y || _[56] !== ee || _[57] !== Q || _[58] !== et
          ? ((v =
              ee && !Q
                ? (0, s.jsx)(M.$, {
                    color: "ghost",
                    disabled: et,
                    loading: et,
                    onClick: () => void Y(),
                    children: (0, s.jsx)(m.A, {
                      id: "automations.runs.loadMore",
                      defaultMessage: "Load more",
                      description: "Load the next page of scheduled task runs",
                    }),
                  })
                : null),
            (_[55] = Y),
            (_[56] = ee),
            (_[57] = Q),
            (_[58] = et),
            (_[59] = v))
          : (v = _[59]),
        _[60] !== r || _[61] !== f || _[62] !== p || _[63] !== b || _[64] !== v
          ? ((y = (0, s.jsxs)("div", { className: r, children: [f, p, b, v] })),
            (_[60] = r),
            (_[61] = f),
            (_[62] = p),
            (_[63] = b),
            (_[64] = v),
            (_[65] = y))
          : (y = _[65]))
      let el = y
      return (
        _[66] !== el || _[67] !== l
          ? ((w = (0, s.jsxs)(s.Fragment, { children: [l, el] })), (_[66] = el), (_[67] = l), (_[68] = w))
          : (w = _[68]),
        w
      )
    }
    function H(e) {
      return e.runs
    }
    n.d(
      t,
      {},
      {
        ScheduledTaskRunResults: function (e) {
          let t,
            n = (0, a.c)(3),
            { item: l, relatedActions: o } = e
          return (
            n[0] !== l || n[1] !== o
              ? ((t = (0, s.jsxs)("div", {
                  className: "flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto px-4 py-6",
                  children: [
                    (0, s.jsx)("div", {
                      className: "px-3",
                      children: (0, s.jsx)(E, { item: l, runId: null, relatedActions: o }),
                    }),
                    (0, s.jsx)(U, { item: l, relatedActions: o }),
                  ],
                })),
                (n[0] = l),
                (n[1] = o),
                (n[2] = t))
              : (t = n[2]),
            t
          )
        },
        ScheduledTaskRunSummary: function (e) {
          let t,
            n,
            l,
            o,
            r = (0, a.c)(8),
            { item: d } = e
          r[0] !== d.automation.id
            ? ((t = { automationId: d.automation.id, runId: null }), (r[0] = d.automation.id), (r[1] = t))
            : (t = r[1])
          let { data: c } = (0, i._U)(D.Tu, t)
          return (
            c?.last_run?.status === "in_progress" && (n = null == c.last_run.chat_ref ? "starting" : "running"),
            r[2] !== d.automation ? ((l = (0, g.Xr)(d.automation)), (r[2] = d.automation), (r[3] = l)) : (l = r[3]),
            r[4] !== d || r[5] !== n || r[6] !== l
              ? ((o = (0, s.jsx)("span", {
                  role: "status",
                  children: (0, s.jsx)(v.f, { item: d, status: l, runPhase: n }),
                })),
                (r[4] = d),
                (r[5] = n),
                (r[6] = l),
                (r[7] = o))
              : (o = r[7]),
            o
          )
        },
      },
    )
  },
  Xvoy(e, t, n) {
    var s = n("zTeN"),
      a = n("v7qY"),
      l = n("OWtl")
    let o = (0, s.SZ)(
      l.u,
      () => !1,
      ({ set: e }) => {
        let t = () => (0, a.flushSync)(() => e(!0)),
          n = () => e(!1)
        return (
          window.addEventListener("beforeprint", t),
          window.addEventListener("afterprint", n),
          () => {
            ;(window.removeEventListener("beforeprint", t), window.removeEventListener("afterprint", n))
          }
        )
      },
    )
    n.d(t, {}, { a: o })
  },
  dKZq(e, t, n) {
    var s = n("ABep"),
      a = n("QosV"),
      l = n("on57"),
      o = n("zTeN"),
      i = n("zd8w"),
      r = n("oyxz"),
      d = n("Xvoy"),
      c = n("NkEl"),
      u = n("Sm6l"),
      m = n("oQwr"),
      h = n("Yakm"),
      f = n("hMRX")
    let x = "a[href], area[href]"
    function p(e, t, n) {
      ;(e.toggleAttribute("inert", !t),
        t
          ? null == n
            ? e.removeAttribute("aria-hidden")
            : e.setAttribute("aria-hidden", n)
          : e.setAttribute("aria-hidden", "true"))
    }
    n.d(
      t,
      {},
      {
        S: function (e) {
          let t,
            n,
            g,
            j,
            b,
            v,
            y,
            w,
            _,
            k,
            A,
            N,
            M,
            S,
            I,
            C,
            R = (0, a.c)(59),
            { children: L, collapsedLineCount: T, collapseIndicator: P, textTone: D, text: E } = e,
            z = void 0 === T ? 20 : T,
            B = void 0 === P ? "ellipsis" : P,
            F = void 0 === D ? "default" : D,
            q = (0, o.Ul)(d.a),
            O = 512 * z,
            U = !q && "function" == typeof L && E.length > O
          R[0] !== z || R[1] !== U || R[2] !== E
            ? ((t = { text: E, collapsedLineCount: z, fallbackFontSizePx: 13, forceCollapsible: U }),
              (R[0] = z),
              (R[1] = U),
              (R[2] = E),
              (R[3] = t))
            : (t = R[3])
          let { setTextContentMeasurementRef: H, collapseState: $, handleToggleExpansion: Z } = (0, m.ee)(t),
            V = !q && "collapsed" === $,
            K = V && "ellipsis" === B && z > 2,
            W = z - !!K,
            G = (0, i.useRef)(null)
          ;(R[4] !== W || R[5] !== U || R[6] !== V
            ? ((n = () => {
                if (!V || U) return
                let e = G.current,
                  t = e?.firstElementChild
                if (null == e || null == t) return
                let n = () => {
                  let t = e.querySelectorAll('[data-markdown-copy="code-block"]:not(pre)')
                  if (0 === t.length) {
                    e.style.maxHeight = `${W}lh`
                    return
                  }
                  let n = Number.parseFloat(window.getComputedStyle(e).lineHeight)
                  if (!Number.isFinite(n)) return
                  let s = e.getBoundingClientRect(),
                    a = 0 === e.offsetHeight ? 1 : s.height / e.offsetHeight,
                    l = Math.ceil(n * W)
                  for (let e of t) {
                    let t = e.getBoundingClientRect(),
                      n = (t.top - s.top) / a,
                      o = (t.bottom - s.top) / a
                    n < l && o > l && (l = Math.ceil(o))
                  }
                  e.style.maxHeight = `${l}px`
                }
                n()
                let s = new ResizeObserver(n)
                s.observe(t)
                let a = new MutationObserver(n)
                return (
                  a.observe(t, { childList: !0, subtree: !0 }),
                  () => {
                    ;(s.disconnect(), a.disconnect())
                  }
                )
              }),
              (R[4] = W),
              (R[5] = U),
              (R[6] = V),
              (R[7] = n))
            : (n = R[7]),
            R[8] !== W || R[9] !== U || R[10] !== V || R[11] !== E
              ? ((g = [W, U, V, E]), (R[8] = W), (R[9] = U), (R[10] = V), (R[11] = E), (R[12] = g))
              : (g = R[12]),
            (0, i.useLayoutEffect)(n, g),
            R[13] !== V
              ? ((j = () => {
                  if (!V) return
                  let e = G.current
                  if (null == e) return
                  let t =
                      "u" < typeof IntersectionObserver
                        ? null
                        : new IntersectionObserver(
                            (e) => {
                              for (let t of e)
                                n.has(t.target) &&
                                  p(
                                    t.target,
                                    t.isIntersecting &&
                                      (t.target.matches(x) ? t.intersectionRatio > 0 : t.intersectionRatio >= 1),
                                    n.get(t.target) ?? null,
                                  )
                            },
                            { root: e, rootMargin: "0px", threshold: [Number.EPSILON, 1] },
                          ),
                    n = new Map(),
                    s = () => {
                      for (let s of n.keys()) e.contains(s) || (t?.unobserve(s), n.delete(s))
                      for (let s of e.querySelectorAll(
                        'a[href], area[href], button, input, select, textarea, summary, audio[controls], video[controls], iframe, [contenteditable]:not([contenteditable="false"]), [tabindex]:not([tabindex="-1"])',
                      )) {
                        if (n.has(s) || s.hasAttribute("inert")) continue
                        let a = s.getAttribute("aria-hidden")
                        ;(n.set(s, a),
                          p(
                            s,
                            null == t &&
                              (function (e, t) {
                                let n = e.getBoundingClientRect(),
                                  s = t.getBoundingClientRect()
                                return e.matches(x)
                                  ? Math.min(n.right, s.right) > Math.max(n.left, s.left) &&
                                      Math.min(n.bottom, s.bottom) > Math.max(n.top, s.top)
                                  : n.top >= s.top && n.right <= s.right && n.bottom <= s.bottom && n.left >= s.left
                              })(s, e),
                            a,
                          ),
                          t?.observe(s))
                      }
                    }
                  s()
                  let a = new MutationObserver(s)
                  return (
                    a.observe(e, { childList: !0, subtree: !0 }),
                    () => {
                      for (let [e, s] of (t?.disconnect(), a.disconnect(), n)) p(e, !0, s)
                    }
                  )
                }),
                (R[13] = V),
                (R[14] = j))
              : (j = R[14]),
            R[15] !== z || R[16] !== V || R[17] !== E
              ? ((b = [z, V, E]), (R[15] = z), (R[16] = V), (R[17] = E), (R[18] = b))
              : (b = R[18]),
            (0, i.useEffect)(j, b))
          let Q = !q
          R[19] !== Z || R[20] !== U || R[21] !== V || R[22] !== E
            ? ((v = (e) => {
                if (((G.current = e), null != e))
                  return (0, c.y)(e, { highlight: "text", text: E, isTruncated: V && U, reveal: V ? Z : void 0 })
              }),
              (R[19] = Z),
              (R[20] = U),
              (R[21] = V),
              (R[22] = E),
              (R[23] = v))
            : (v = R[23])
          let X = V && "overflow-hidden",
            J = V && "fade" === B && "mask-b-from-80% mask-b-to-100%"
          ;(R[24] !== X || R[25] !== J ? ((y = (0, l.A)(X, J)), (R[24] = X), (R[25] = J), (R[26] = y)) : (y = R[26]),
            R[27] !== W || R[28] !== V
              ? ((w = V ? { maxHeight: `${W}lh` } : void 0), (R[27] = W), (R[28] = V), (R[29] = w))
              : (w = R[29]))
          let Y = U ? void 0 : H
          return (
            R[30] !== L || R[31] !== V || R[32] !== O || R[33] !== E
              ? ((_ = "function" == typeof L ? L(V ? E.slice(0, O) : E) : L),
                (R[30] = L),
                (R[31] = V),
                (R[32] = O),
                (R[33] = E),
                (R[34] = _))
              : (_ = R[34]),
            R[35] !== Y || R[36] !== _
              ? ((k = (0, s.jsx)("div", { ref: Y, children: _ })), (R[35] = Y), (R[36] = _), (R[37] = k))
              : (k = R[37]),
            R[38] !== v || R[39] !== y || R[40] !== w || R[41] !== k
              ? ((A = (0, s.jsx)("div", { ref: v, className: y, style: w, children: k })),
                (R[38] = v),
                (R[39] = y),
                (R[40] = w),
                (R[41] = k),
                (R[42] = A))
              : (A = R[42]),
            R[43] !== A || R[44] !== Q
              ? ((N = (0, s.jsx)(f.x.Provider, { value: Q, children: A })), (R[43] = A), (R[44] = Q), (R[45] = N))
              : (N = R[45]),
            R[46] !== K
              ? ((M = K ? (0, s.jsx)("span", { "aria-hidden": "true", className: "block", children: "…" }) : null),
                (R[46] = K),
                (R[47] = M))
              : (M = R[47]),
            R[48] !== N || R[49] !== M
              ? ((S = (0, s.jsxs)("div", {
                  className: "relative w-full min-w-0 text-size-chat leading-relaxed",
                  children: [N, M],
                })),
                (R[48] = N),
                (R[49] = M),
                (R[50] = S))
              : (S = R[50]),
            R[51] !== $ || R[52] !== Z || R[53] !== q || R[54] !== F
              ? ((I =
                  q || "uncollapsible" === $
                    ? null
                    : (0, s.jsxs)(u.$, {
                        className: (0, l.A)(
                          "mt-1.5 self-start text-size-chat",
                          "default" === F && "text-codex-description",
                        ),
                        "aria-expanded": "expanded" === $,
                        "data-thread-find-skip": !0,
                        "data-markdown-copy": "exclude",
                        color: "user-message" === F ? "ghostUserMessage" : "disclosure",
                        onClick: Z,
                        size: "inline",
                        children: [
                          (0, s.jsx)("span", {
                            children:
                              "expanded" === $
                                ? (0, s.jsx)(r.A, {
                                    id: "codex.userMessage.showLess",
                                    defaultMessage: "Show less",
                                    description: "Button label for collapsing an expanded user message",
                                  })
                                : (0, s.jsx)(r.A, {
                                    id: "codex.userMessage.showMore",
                                    defaultMessage: "Show more",
                                    description: "Button label for expanding a truncated user message",
                                  }),
                          }),
                          (0, s.jsx)(h.A, { className: "expanded" === $ ? "icon-2xs rotate-180" : "icon-2xs" }),
                        ],
                      })),
                (R[51] = $),
                (R[52] = Z),
                (R[53] = q),
                (R[54] = F),
                (R[55] = I))
              : (I = R[55]),
            R[56] !== S || R[57] !== I
              ? ((C = (0, s.jsxs)("div", { className: "flex flex-col items-end gap-1", children: [S, I] })),
                (R[56] = S),
                (R[57] = I),
                (R[58] = C))
              : (C = R[58]),
            C
          )
        },
      },
    )
  },
  nQsD(e, t, n) {
    var s = n("ABep"),
      a = n("QosV"),
      l = n("oyxz"),
      o = n("RNul")
    n.d(
      t,
      {},
      {
        C: function () {
          let e,
            t,
            n = (0, a.c)(2)
          return (
            n[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, s.jsx)(o.y, { className: "icon-lg" })), (n[0] = e))
              : (e = n[0]),
            n[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, s.jsxs)("div", {
                  className: "flex h-full items-center justify-center",
                  role: "status",
                  children: [
                    e,
                    (0, s.jsx)("span", {
                      className: "sr-only",
                      children: (0, s.jsx)(l.A, {
                        id: "inbox.automations.teams.runs.loadingChat",
                        defaultMessage: "Loading scheduled run…",
                        description: "Status announced while a scheduled run chat is loading in the side panel",
                      }),
                    }),
                  ],
                })),
                (n[1] = t))
              : (t = n[1]),
            t
          )
        },
      },
    )
  },
}
//# sourceMappingURL=237449.732edf8447.js.map
