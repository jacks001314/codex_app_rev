export const __rspack_esm_ids = [330967]
export const __webpack_modules__ = {
  TTww(e, t, n) {
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
            u,
            c = (0, a.c)(40),
            {
              actions: m,
              autoFocusName: x,
              children: f,
              closeAction: h,
              footer: g,
              name: j,
              onKeyDown: p,
              onNameChange: b,
              renderSlots: v,
              statusLabel: y,
            } = e,
            _ = void 0 !== x && x,
            w = void 0 === g ? null : g
          c[0] !== y
            ? ((t =
                null == y
                  ? null
                  : (0, s.jsx)("div", {
                      className: "text-sm font-medium text-info electron:ms-1 extension:-ms-1",
                      children: y,
                    })),
              (c[0] = y),
              (c[1] = t))
            : (t = c[1])
          let A = t,
            N =
              null == v || null != m || null != A
                ? "h-full overflow-y-auto px-panel pb-panel"
                : "h-full overflow-y-auto p-panel"
          ;(c[2] !== _ || c[3] !== j || c[4] !== b
            ? ((n =
                null == b
                  ? (0, s.jsx)(o.Mx, { id: "automation-detail-panel-title", readOnly: !0, value: j })
                  : (0, s.jsx)(o.Mx, { id: "automation-detail-panel-title", autoFocus: _, value: j, onChange: b })),
              (c[2] = _),
              (c[3] = j),
              (c[4] = b),
              (c[5] = n))
            : (n = c[5]),
            c[6] !== f || c[7] !== n
              ? ((i = (0, s.jsxs)("div", { className: "flex flex-col gap-6", children: [n, f] })),
                (c[6] = f),
                (c[7] = n),
                (c[8] = i))
              : (i = c[8]),
            c[9] !== N || c[10] !== i
              ? ((r = (0, s.jsx)("div", { className: N, children: i })), (c[9] = N), (c[10] = i), (c[11] = r))
              : (r = c[11]))
          let M = r
          if (null != v) {
            let e
            if (c[12] !== m || c[13] !== M || c[14] !== w || c[15] !== A || c[16] !== p || c[17] !== v) {
              let t, n, a, l
              ;(c[19] !== m || c[20] !== A
                ? ((t =
                    null == m && null == A
                      ? null
                      : (0, s.jsxs)("div", {
                          className: "flex h-toolbar min-w-0 shrink-0 items-center gap-2 px-toolbar",
                          children: [
                            A,
                            (0, s.jsx)("div", {
                              className: "ms-auto flex min-w-0 shrink-0 items-center gap-1.5",
                              children: m,
                            }),
                          ],
                        })),
                  (c[19] = m),
                  (c[20] = A),
                  (c[21] = t))
                : (t = c[21]),
                c[22] !== M
                  ? ((n = (0, s.jsx)("div", { className: "min-h-0 flex-1", children: M })), (c[22] = M), (c[23] = n))
                  : (n = c[23]),
                c[24] !== w
                  ? ((a =
                      null == w
                        ? null
                        : (0, s.jsx)("div", { className: "shrink-0 border-t border-default p-panel", children: w })),
                    (c[24] = w),
                    (c[25] = a))
                  : (a = c[25]),
                c[26] !== p || c[27] !== n || c[28] !== a || c[29] !== t
                  ? ((l = (0, s.jsxs)("div", {
                      className: "flex h-full min-h-0 flex-col bg-surface",
                      role: "presentation",
                      onKeyDown: p,
                      children: [t, n, a],
                    })),
                    (c[26] = p),
                    (c[27] = n),
                    (c[28] = a),
                    (c[29] = t),
                    (c[30] = l))
                  : (l = c[30]),
                (e = v({ headerRows: [], content: l })),
                (c[12] = m),
                (c[13] = M),
                (c[14] = w),
                (c[15] = A),
                (c[16] = p),
                (c[17] = v),
                (c[18] = e))
            } else e = c[18]
            return e
          }
          return (
            c[31] !== h
              ? ((d = null == h ? { showCloseButton: !1 } : { closeLabel: h.label, onClose: h.onClose }),
                (c[31] = h),
                (c[32] = d))
              : (d = c[32]),
            c[33] !== m || c[34] !== M || c[35] !== w || c[36] !== A || c[37] !== p || c[38] !== d
              ? ((u = (0, s.jsx)(l.JR, { actions: m, footer: w, leading: A, onKeyDown: p, ...d, children: M })),
                (c[33] = m),
                (c[34] = M),
                (c[35] = w),
                (c[36] = A),
                (c[37] = p),
                (c[38] = d),
                (c[39] = u))
              : (u = c[39]),
            u
          )
        },
      },
    )
  },
  VqIc(e, t, n) {
    var s = n("ABep"),
      a = n("QosV"),
      l = n("qmMi"),
      o = n("DBCl"),
      i = n("Wf1j"),
      r = n("oyxz"),
      d = n("tl5a"),
      u = n("D28N"),
      c = n("XsHM"),
      m = n("B81s"),
      x = n("iFSw"),
      f = n("AWNZ"),
      h = n("ZEx5"),
      g = n("rCoD"),
      j = n("JzcZ"),
      p = n("zE0r"),
      b = n("oVAd"),
      v = n("ccPx"),
      y = n("odKs"),
      _ = n("GIgU"),
      w = n("sn2N")
    function A(e) {
      return (0, _.U0)(e, "new-task")
    }
    function N(e) {
      return "local" === e.projectKind
    }
    function M(e) {
      let t,
        n = (0, a.c)(7),
        { allowNewThread: l, draft: o, setDraft: i } = e
      if (n[0] !== l || n[1] !== o || n[2] !== i) {
        let e,
          a,
          { missingRequirements: d } = (0, _.FN)(o, "local", { allowNewThread: l }),
          u = (0, s.jsx)(j.p, { allowNewThread: l, draft: o, setDraft: i })
        ;(n[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(r.A, { id: "inbox.automations.destination.label", defaultMessage: "Runs in" })),
            (n[4] = e))
          : (e = n[4]),
          n[5] !== u
            ? ((a = (0, s.jsx)(f.ic, { control: u, label: e, labelSizing: "content", variant: "nested" })),
              (n[5] = u),
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
            I,
            C,
            S,
            k,
            R,
            D,
            P,
            T,
            F,
            E,
            L,
            z,
            q,
            B,
            U,
            O,
            $,
            Z,
            W,
            K = (0, a.c)(90),
            {
              afterFrequency: V,
              allowCloudTeamSelection: H,
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
            ea = void 0 === H || H,
            el = void 0 !== G && G,
            eo = void 0 !== X && X,
            ei = (0, i.A)(),
            er = Y?.selectedLocation === "cloud",
            ed = (0, l.Ul)(d.Dc),
            eu = !er
          K[0] !== eu ? ((t = { enabled: eu }), (K[0] = eu), (K[1] = t)) : (t = K[1])
          let { data: ec } = (0, l._U)(m.I2, ed, t),
            em = ec?.config.sandbox_mode === "read-only",
            ex = ec?.config.sandbox_mode === "danger-full-access"
          if (K[2] !== J.projectId || K[3] !== en) {
            let e
            ;((n = en.filter(N)),
              K[6] !== J.projectId
                ? ((e = (e) => e.projectId === J.projectId), (K[6] = J.projectId), (K[7] = e))
                : (e = K[7]))
            let t = n.find(e)
            ;((I = null == J.projectId ? [(0, o.DIv)(o.m20)] : null == t ? [] : (0, c.l_)(t).map(o.DIv)),
              (K[2] = J.projectId),
              (K[3] = en),
              (K[4] = n),
              (K[5] = I))
          } else ((n = K[4]), (I = K[5]))
          let ef = I
          K[8] !== ei
            ? ((C = ei.formatMessage({
                id: "settings.automations.projectDropdown.placeholder",
                defaultMessage: "Select project",
              })),
              (K[8] = ei),
              (K[9] = C))
            : (C = K[9])
          let eh = C,
            eg = "heartbeat" === J.kind
          K[10] !== n || K[11] !== et
            ? ((S = (e) => {
                let t = e === o.m20 ? null : e,
                  s = n.find((e) => e.projectId === t),
                  a = null == t ? [(0, o.DIv)(o.m20)] : null == s ? [] : (0, c.l_)(s).map(o.DIv)
                et((e) => (0, _.fm)(e, t, a))
              }),
              (K[10] = n),
              (K[11] = et),
              (K[12] = S))
            : (S = K[12])
          let ej = S
          K[13] !== et
            ? ((k = (e) => {
                et((t) => ({ ...t, rawRrule: null, scheduleConfig: e, scheduleDirty: !0 }))
              }),
              (K[13] = et),
              (K[14] = k))
            : (k = K[14])
          let ep = k
          K[15] !== J.scheduleConfig || K[16] !== Y || K[17] !== ep || K[18] !== eg || K[19] !== et
            ? ((R = (e) => {
                ;("cloud" === e && eg
                  ? et(A)
                  : "local" === e && "monthly" === J.scheduleConfig.mode && ep((0, y.dl)(J.scheduleConfig, "custom")),
                  Y?.onSelect?.(e))
              }),
              (K[15] = J.scheduleConfig),
              (K[16] = Y),
              (K[17] = ep),
              (K[18] = eg),
              (K[19] = et),
              (K[20] = R))
            : (R = K[20])
          let eb = R
          K[21] !== et
            ? ((D = (e, t) => {
                et((n) => ({ ...n, model: e, reasoningEffort: t }))
              }),
              (K[21] = et),
              (K[22] = D))
            : (D = K[22])
          let ev = D
          ;(K[23] !== eo || K[24] !== J || K[25] !== ee || K[26] !== es || K[27] !== ef || K[28] !== et
            ? ((P = (0, s.jsx)(h.t, {
                children: (0, s.jsx)("div", {
                  className: "min-h-0 min-w-0 flex-1",
                  children: (0, s.jsx)(x.yI, {
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
              (K[23] = eo),
              (K[24] = J),
              (K[25] = ee),
              (K[26] = es),
              (K[27] = ef),
              (K[28] = et),
              (K[29] = P))
            : (P = K[29]),
            K[30] !== er || K[31] !== ex || K[32] !== eg || K[33] !== em
              ? ((T = eg || er ? null : (0, s.jsx)(x.UL, { isDangerFullAccess: ex, isReadOnlySandbox: em })),
                (K[30] = er),
                (K[31] = ex),
                (K[32] = eg),
                (K[33] = em),
                (K[34] = T))
              : (T = K[34]),
            K[35] === Symbol.for("react.memo_cache_sentinel")
              ? ((F = (0, s.jsx)(r.A, { id: "inbox.automations.details", defaultMessage: "Details" })), (K[35] = F))
              : (F = K[35]),
            K[36] !== Y || K[37] !== eb
              ? ((E =
                  Y?.onSelect == null
                    ? null
                    : (0, s.jsx)(f.ic, {
                        control: (0, s.jsx)(j.W, { selectedLocation: Y.selectedLocation, onSelect: eb }),
                        label: (0, s.jsx)(r.A, { ...p.H.label }),
                        variant: "nested",
                      })),
                (K[36] = Y),
                (K[37] = eb),
                (K[38] = E))
              : (E = K[38]),
            K[39] !== ea || K[40] !== J.cloudTeam || K[41] !== J.id || K[42] !== er || K[43] !== et
              ? ((L =
                  ea && er && null == J.id
                    ? (0, s.jsx)(g.v, {
                        selection: J.cloudTeam,
                        onSelect: (e) => {
                          et((t) => ({ ...t, cloudTeam: e }))
                        },
                      })
                    : null),
                (K[39] = ea),
                (K[40] = J.cloudTeam),
                (K[41] = J.id),
                (K[42] = er),
                (K[43] = et),
                (K[44] = L))
              : (L = K[44]),
            K[45] !== el || K[46] !== J || K[47] !== er || K[48] !== et
              ? ((z = er ? null : (0, s.jsx)(M, { allowNewThread: el, draft: J, setDraft: et })),
                (K[45] = el),
                (K[46] = J),
                (K[47] = er),
                (K[48] = et),
                (K[49] = z))
              : (z = K[49]),
            K[50] !== J.model ||
            K[51] !== J.projectId ||
            K[52] !== J.reasoningEffort ||
            K[53] !== ev ||
            K[54] !== ej ||
            K[55] !== ei ||
            K[56] !== er ||
            K[57] !== eg ||
            K[58] !== n ||
            K[59] !== eh
              ? ((q =
                  er || eg
                    ? null
                    : (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(f.ic, {
                            control: (0, s.jsx)(u.f, {
                              localOnlyTooltip: ei.formatMessage({
                                id: "settings.automations.projectDropdown.localOnlyTooltip",
                                defaultMessage: "Only local projects are available here",
                              }),
                              align: "end",
                              className: "!text-base",
                              placeholder: eh,
                              projects: n,
                              projectlessActionLabel: ei.formatMessage({
                                id: "composer.localCwdDropdown.clearProject",
                                defaultMessage: "Don't work in a project",
                              }),
                              projectlessLabel: ei.formatMessage({
                                id: "settings.automations.projectDropdown.none",
                                defaultMessage: "None",
                              }),
                              selectedProjectId: J.projectId ?? o.m20,
                              showIcon: !1,
                              onChange: ej,
                            }),
                            label: ei.formatMessage({
                              id: "inbox.automations.folder.label",
                              defaultMessage: "Project",
                            }),
                            variant: "nested",
                          }),
                          (0, s.jsx)(f.ic, {
                            control: (0, s.jsx)(x.Bi, {
                              align: "end",
                              className: "!text-base",
                              field: "model",
                              reasoningEffort: J.reasoningEffort,
                              selectedModel: J.model,
                              onSelect: ev,
                            }),
                            label: ei.formatMessage({ id: "inbox.automations.model.label", defaultMessage: "Model" }),
                            variant: "nested",
                          }),
                          (0, s.jsx)(f.ic, {
                            control: (0, s.jsx)(x.Bi, {
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
                            }),
                            variant: "nested",
                          }),
                        ],
                      })),
                (K[50] = J.model),
                (K[51] = J.projectId),
                (K[52] = J.reasoningEffort),
                (K[53] = ev),
                (K[54] = ej),
                (K[55] = ei),
                (K[56] = er),
                (K[57] = eg),
                (K[58] = n),
                (K[59] = eh),
                (K[60] = q))
              : (q = K[60]),
            K[61] !== Q || K[62] !== E || K[63] !== L || K[64] !== z || K[65] !== q
              ? ((B = (0, s.jsxs)(h.t, { children: [E, L, z, q, Q] })),
                (K[61] = Q),
                (K[62] = E),
                (K[63] = L),
                (K[64] = z),
                (K[65] = q),
                (K[66] = B))
              : (B = K[66]),
            K[67] !== er
              ? ((U = er
                  ? (0, s.jsx)("p", {
                      className: "mt-2 px-1 text-sm text-codex-description select-none",
                      children: (0, s.jsx)(r.A, {
                        id: "inbox.automations.executionLocation.cloudDescription",
                        defaultMessage:
                          "Runs in the cloud even when this device is offline. Chat, project, model, and reasoning settings aren't available for cloud tasks",
                      }),
                    })
                  : null),
                (K[67] = er),
                (K[68] = U))
              : (U = K[68]),
            K[69] !== T || K[70] !== B || K[71] !== U
              ? ((O = (0, s.jsxs)(w.C, { actions: T, title: F, children: [B, U] })),
                (K[69] = T),
                (K[70] = B),
                (K[71] = U),
                (K[72] = O))
              : (O = K[72]),
            K[73] !== J.kind || K[74] !== J.notificationPolicy || K[75] !== ei || K[76] !== er || K[77] !== et
              ? (($ = er
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
                      }),
                      variant: "nested",
                    })),
                (K[73] = J.kind),
                (K[74] = J.notificationPolicy),
                (K[75] = ei),
                (K[76] = er),
                (K[77] = et),
                (K[78] = $))
              : ($ = K[78]))
          let ey = eg && !er ? "heartbeat" : "default",
            e_ = er ? "cloud" : "local"
          return (
            K[79] !== J.scheduleConfig || K[80] !== ep || K[81] !== $ || K[82] !== ey || K[83] !== e_
              ? ((Z = (0, s.jsx)(b.R, {
                  afterScheduleRows: $,
                  intervalStyle: ey,
                  scheduleConfig: J.scheduleConfig,
                  scheduleSource: e_,
                  onUpdateScheduleDraft: ep,
                })),
                (K[79] = J.scheduleConfig),
                (K[80] = ep),
                (K[81] = $),
                (K[82] = ey),
                (K[83] = e_),
                (K[84] = Z))
              : (Z = K[84]),
            K[85] !== V || K[86] !== P || K[87] !== O || K[88] !== Z
              ? ((W = (0, s.jsxs)("div", { className: "flex min-h-0 flex-col gap-6", children: [P, O, Z, V] })),
                (K[85] = V),
                (K[86] = P),
                (K[87] = O),
                (K[88] = Z),
                (K[89] = W))
              : (W = K[89]),
            W
          )
        },
      },
    )
  },
  e5QD(e, t, n) {
    n.d(t, { O: () => ed })
    var s = n("ABep"),
      a = n("QosV"),
      l = n("h6Iv"),
      o = n("qmMi"),
      i = n("zd8w"),
      r = n("Wf1j"),
      d = n("oyxz"),
      u = n("Ywss"),
      c = n("eoGY"),
      m = n("SPnB"),
      x = n("oqk6"),
      f = n("Sm6l"),
      h = n("HOLv"),
      g = n("SGsN"),
      j = n("KIKs"),
      p = n("hlym"),
      b = n("tSEg"),
      v = n("iFSw"),
      y = n("AWNZ"),
      _ = n("ZEx5"),
      w = n("DBCl"),
      A = n("Qgfj"),
      N = n("tl5a"),
      M = n("sn2N"),
      I = n("MM0V"),
      C = n("evwP"),
      S = n("I7Ou"),
      k = n("OWtl"),
      R = n("nvO1"),
      D = n("rvFo"),
      P = n("kK7d")
    let T = (0, o.N3)(k.u, ({ accountId: e, automationId: t }, { get: n }) => ({
      enabled: n(R.lc, e),
      initialPageParam: null,
      getNextPageParam: (e) => (e.has_more ? (e.cursor ?? void 0) : void 0),
      queryFn: ({ pageParam: e, signal: n }) =>
        P.CodexRequest.safeGet("/automation/{automation_id}/execution_threads", {
          parameters: { path: { automation_id: t }, query: { cursor: e, limit: 25 } },
          signal: n,
        }),
      queryKey: ["cloud-automations", "execution-threads", e, t],
      refetchInterval: D.D.FIVE_SECONDS,
      refetchOnWindowFocus: "always",
      retry: !1,
      select: ({ pages: e }) => e.flatMap((e) => e.threads),
      staleTime: D.D.ONE_MINUTE,
    }))
    function F(e) {
      let t,
        n,
        l,
        i,
        r,
        u,
        c,
        x,
        h = (0, a.c)(26),
        { automationId: g, onSelectRun: j } = e,
        p = (0, o.Ul)(m.chatGptAuthenticatedAccountId$),
        b = (0, o._U)(R.lc, p)
      h[0] !== p || h[1] !== g
        ? ((t = { accountId: p, automationId: g }), (h[0] = p), (h[1] = g), (h[2] = t))
        : (t = h[2])
      let {
        data: v,
        error: y,
        fetchNextPage: w,
        hasNextPage: A,
        isFetchingNextPage: N,
        isLoading: k,
        refetch: D,
      } = (0, o._U)(T, t)
      return b && null != p
        ? (h[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, s.jsx)("span", {
                className: "select-none",
                children: (0, s.jsx)(d.A, { id: "inbox.automations.history", defaultMessage: "Previous runs" }),
              })),
              (h[3] = n))
            : (n = h[3]),
          h[4] !== y || h[5] !== D
            ? ((l =
                null != y
                  ? (0, s.jsx)(I.l, {
                      type: "error",
                      content: (0, s.jsx)("span", {
                        className: "select-none",
                        children: (0, s.jsx)(d.A, {
                          id: "inbox.automations.teams.runs.loadError",
                          defaultMessage: "Run history could not be loaded",
                        }),
                      }),
                      primaryCtaText: (0, s.jsx)(d.A, {
                        id: "inbox.automations.teams.runs.retry",
                        defaultMessage: "Retry",
                      }),
                      onPrimaryCtaClick: () => void D(),
                    })
                  : null),
              (h[4] = y),
              (h[5] = D),
              (h[6] = l))
            : (l = h[6]),
          h[7] !== k
            ? ((i = k
                ? (0, s.jsx)(_.t, {
                    className: "select-none",
                    children: (0, s.jsx)(S.u, {
                      children: (0, s.jsx)(d.A, {
                        id: "inbox.automations.teams.runs.loading",
                        defaultMessage: "Loading runs\u2026",
                      }),
                    }),
                  })
                : null),
              (h[7] = k),
              (h[8] = i))
            : (i = h[8]),
          h[9] !== y || h[10] !== v?.length
            ? ((r =
                null == y && v?.length === 0
                  ? (0, s.jsx)(_.t, {
                      children: (0, s.jsx)(C.W, {
                        className: "select-none",
                        layout: "settings-row",
                        children: (0, s.jsx)(d.A, {
                          id: "inbox.automations.teams.runs.empty",
                          defaultMessage: "No runs yet",
                        }),
                      }),
                    })
                  : null),
              (h[9] = y),
              (h[10] = v?.length),
              (h[11] = r))
            : (r = h[11]),
          h[12] !== p || h[13] !== j || h[14] !== v
            ? ((u =
                null != v && v.length > 0
                  ? (0, s.jsx)(_.t, {
                      children: v.map((e) =>
                        (0, s.jsx)(E, { run: e, onSelect: (e) => j({ accountId: p, conversationId: e }) }, e.thread_id),
                      ),
                    })
                  : null),
              (h[12] = p),
              (h[13] = j),
              (h[14] = v),
              (h[15] = u))
            : (u = h[15]),
          h[16] !== w || h[17] !== A || h[18] !== N
            ? ((c = A
                ? (0, s.jsx)(f.$, {
                    color: "ghostSecondary",
                    loading: N,
                    onClick: () => void w(),
                    children: (0, s.jsx)(d.A, {
                      id: "inbox.automations.teams.runs.loadMore",
                      defaultMessage: "Load more",
                    }),
                  })
                : null),
              (h[16] = w),
              (h[17] = A),
              (h[18] = N),
              (h[19] = c))
            : (c = h[19]),
          h[20] !== l || h[21] !== i || h[22] !== r || h[23] !== u || h[24] !== c
            ? ((x = (0, s.jsxs)(M.C, { title: n, children: [l, i, r, u, c] })),
              (h[20] = l),
              (h[21] = i),
              (h[22] = r),
              (h[23] = u),
              (h[24] = c),
              (h[25] = x))
            : (x = h[25]),
          x)
        : null
    }
    function E(e) {
      let t,
        n,
        l,
        i,
        r,
        u,
        c = (0, a.c)(15),
        { run: m, onSelect: x } = e
      c[0] !== m.thread_id ? ((t = (0, w.JXB)(m.thread_id)), (c[0] = m.thread_id), (c[1] = t)) : (t = c[1])
      let f = t
      c[2] !== f ? ((n = { hostId: w.iwv, threadId: f }), (c[2] = f), (c[3] = n)) : (n = c[3])
      let h = (0, o._U)(N.HX, n)
      return (
        c[4] !== h
          ? ((l = h?.trim()
              ? h
              : (0, s.jsx)(d.A, { id: "inbox.automations.teams.runs.untitled", defaultMessage: "Scheduled run" })),
            (c[4] = h),
            (c[5] = l))
          : (l = c[5]),
        c[6] !== m.created_at
          ? ((i = (0, s.jsx)("span", {
              className: "text-sm text-secondary",
              children: (0, s.jsx)(A.XU, {
                value: m.created_at,
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
              }),
            })),
            (c[6] = m.created_at),
            (c[7] = i))
          : (i = c[7]),
        c[8] !== f || c[9] !== x ? ((r = () => x(f)), (c[8] = f), (c[9] = x), (c[10] = r)) : (r = c[10]),
        c[11] !== l || c[12] !== i || c[13] !== r
          ? ((u = (0, s.jsx)(y.kG, {
              className: "select-none",
              edgeRounding: "surface",
              label: l,
              trailing: i,
              variant: "nested",
              onClick: r,
            })),
            (c[11] = l),
            (c[12] = i),
            (c[13] = r),
            (c[14] = u))
          : (u = c[14]),
        u
      )
    }
    var L = n("Pyfq"),
      z = n("qRqa"),
      q = n("FrrB"),
      B = n("Bbed"),
      U = n("vLpE"),
      O = n("RNul")
    let $ = (0, B._)(
      async () =>
        (
          await Promise.all([
            n.e(222773),
            n.e(207991),
            n.e(446194),
            n.e(854102),
            n.e(198667),
            n.e(729502),
            n.e(984404),
            n.e(652500),
            n.e(164460),
            n.e(877652),
            n.e(947437),
            n.e(901175),
            n.e(377960),
            n.e(752862),
            n.e(255843),
            n.e(153694),
            n.e(679632),
            n.e(810979),
            n.e(921241),
            n.e(293398),
            n.e(486890),
            n.e(820714),
            n.e(887074),
            n.e(79584),
            n.e(646093),
            n.e(847740),
            n.e(944124),
            n.e(428069),
            n.e(839700),
            n.e(835890),
            n.e(183204),
            n.e(394554),
            n.e(895612),
            n.e(154721),
            n.e(82894),
            n.e(76344),
            n.e(90304),
            n.e(289491),
            n.e(897450),
            n.e(963703),
            n.e(963028),
            n.e(812107),
            n.e(642253),
            n.e(581568),
            n.e(777478),
            n.e(288383),
            n.e(534377),
            n.e(772548),
            n.e(172601),
            n.e(215774),
            n.e(855699),
            n.e(336604),
            n.e(540250),
            n.e(305126),
            n.e(331405),
            n.e(947156),
            n.e(632620),
            n.e(285062),
            n.e(898586),
            n.e(728869),
            n.e(523871),
            n.e(228260),
            n.e(151898),
            n.e(637153),
            n.e(585970),
            n.e(734464),
            n.e(687151),
            n.e(523436),
            n.e(120658),
          ]).then(n.bind(n, "UVLr"))
        ).LocalConversationBackgroundAgentTab,
      {
        fallback: (0, s.jsx)(function () {
          let e,
            t,
            n = (0, a.c)(2)
          return (
            n[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, s.jsx)(O.y, { className: "icon-lg" })), (n[0] = e))
              : (e = n[0]),
            n[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, s.jsxs)("div", {
                  className: "flex h-full items-center justify-center",
                  role: "status",
                  children: [
                    e,
                    (0, s.jsx)("span", {
                      className: "sr-only",
                      children: (0, s.jsx)(d.A, {
                        id: "inbox.automations.teams.runs.loadingChat",
                        defaultMessage: "Loading scheduled run\u2026",
                      }),
                    }),
                  ],
                })),
                (n[1] = t))
              : (t = n[1]),
            t
          )
        }, {}),
        propagateLoadError: !0,
      },
    )
    function Z(e) {
      let t,
        n,
        l,
        i,
        u,
        c = (0, a.c)(25),
        { run: m, renderSlots: x, onBack: h, onClose: g } = e,
        j = (0, r.A)(),
        p = (0, o._U)(R.lc, m.accountId)
      ;(c[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, s.jsx)(d.A, { id: "inbox.automations.teams.runs.back", defaultMessage: "Back" })), (c[0] = t))
        : (t = c[0]),
        c[1] !== h
          ? ((n = (0, s.jsx)(f.$, { color: "ghost", size: "toolbar", onClick: h, children: t })),
            (c[1] = h),
            (c[2] = n))
          : (n = c[2]))
      let v = n
      c[3] !== p || c[4] !== g || c[5] !== m.conversationId
        ? ((l = p
            ? (0, s.jsxs)(U.R, {
                route: (0, b.VJ)({
                  pathname: (0, w._RT)(m.conversationId),
                  routeTemplate: w.Bai,
                  search: `?${new URLSearchParams({ hostId: w.iwv, threadAccess: "shared" })}`,
                }),
                children: [
                  (0, s.jsx)(L.$, { conversationId: m.conversationId, hostId: w.iwv }),
                  (0, s.jsx)($, {
                    conversationId: m.conversationId,
                    hostId: w.iwv,
                    hostMcpApps: !0,
                    threadAccess: "shared",
                    onClose: g,
                  }),
                ],
              })
            : (0, s.jsx)(q.A, {
                className: "h-full select-none",
                spacing: "compact",
                title: (0, s.jsx)(d.A, {
                  id: "inbox.automations.teams.runs.unavailable",
                  defaultMessage: "Scheduled run unavailable",
                }),
              })),
          (c[3] = p),
          (c[4] = g),
          (c[5] = m.conversationId),
          (c[6] = l))
        : (l = c[6])
      let y = l
      if (null != x) {
        let e
        if (c[7] !== y || c[8] !== v || c[9] !== x) {
          let t, n, a
          ;(c[11] !== v
            ? ((t = (0, s.jsx)("div", {
                className: "flex h-toolbar min-w-0 shrink-0 items-center gap-2 px-toolbar",
                children: v,
              })),
              (c[11] = v),
              (c[12] = t))
            : (t = c[12]),
            c[13] !== y
              ? ((n = (0, s.jsx)("div", { className: "min-h-0 flex-1", children: y })), (c[13] = y), (c[14] = n))
              : (n = c[14]),
            c[15] !== t || c[16] !== n
              ? ((a = (0, s.jsxs)("div", { className: "flex h-full min-h-0 flex-col bg-surface", children: [t, n] })),
                (c[15] = t),
                (c[16] = n),
                (c[17] = a))
              : (a = c[17]),
            (e = x({ headerRows: [], content: a })),
            (c[7] = y),
            (c[8] = v),
            (c[9] = x),
            (c[10] = e))
        } else e = c[10]
        return e
      }
      return (
        c[18] !== j
          ? ((i = j.formatMessage({ id: "inbox.automations.teams.runs.close", defaultMessage: "Close scheduled run" })),
            (c[18] = j),
            (c[19] = i))
          : (i = c[19]),
        c[20] !== y || c[21] !== v || c[22] !== g || c[23] !== i
          ? ((u = (0, s.jsx)(z.JR, { closeLabel: i, leading: v, onClose: g, children: y })),
            (c[20] = y),
            (c[21] = v),
            (c[22] = g),
            (c[23] = i),
            (c[24] = u))
          : (u = c[24]),
        u
      )
    }
    var W = n("rCoD"),
      K = n("soaw"),
      V = n("M5j0"),
      H = n("WZIn"),
      G = n("zE0r"),
      Q = n("fyx9"),
      X = n("odKs"),
      J = n("TZBk"),
      Y = n("ED7I"),
      ee = n("qFJj"),
      et = n("fGpH"),
      en = n("Ro2M"),
      es = n("p2tp"),
      ea = n("nOeW"),
      el = n("ELci"),
      eo = n("o791"),
      ei = n("ZlGh"),
      er = n("xA2X")
    function ed(e) {
      let t,
        n,
        y,
        w,
        A,
        N,
        I,
        C,
        S,
        k,
        R,
        D,
        P,
        T,
        E,
        L,
        z,
        q,
        B,
        U,
        O,
        $,
        ed,
        ex,
        ef,
        eh,
        eg,
        ej,
        ep,
        eb,
        ev,
        ey,
        e_,
        ew,
        eA,
        eN,
        eM,
        eI,
        eC,
        eS,
        ek,
        eR,
        eD,
        eP,
        eT,
        eF,
        eE,
        eL,
        ez,
        eq = (0, a.c)(206),
        {
          ref: eB,
          item: eU,
          renderSlots: eO,
          onClose: e$,
          onOpenConversation: eZ,
          onSaved: eW,
          showRunResults: eK,
          showCloseButton: eV,
        } = e,
        eH = void 0 !== eK && eK,
        eG = void 0 === eV || eV,
        eQ = (0, o.gh)(b.GD),
        eX = (0, r.A)(),
        eJ = (0, i.useId)(),
        [eY, e1] = (0, u.ok)(),
        e0 = (0, o.Ul)(en.Zc),
        e2 = (0, o.Ul)(en.dz),
        e3 = (0, o.Ul)(en.lu),
        e4 = (0, o.Ul)(en.$f),
        e5 = (0, i.useRef)(null),
        e6 = (0, i.useRef)(null),
        e7 = (0, i.useRef)(null),
        e9 = (0, i.useRef)(!1),
        e8 = (0, K.a)(),
        [te, tt] = (0, i.useState)(!1),
        { automation: tn } = eU
      eq[0] !== tn ? ((t = (0, et.RQ)(tn)), (eq[0] = tn), (eq[1] = t)) : (t = eq[1])
      let { canManage: ts } = t,
        ta = null != eU.teamId && ts
      eq[2] !== tn ? ((n = () => (0, ei.qz)(tn)), (eq[2] = tn), (eq[3] = n)) : (n = eq[3])
      let [tl, to] = (0, i.useState)(n),
        [ti, tr] = (0, i.useState)(null),
        td = e0.isPending || e2.isPending || e3.isPending || e4.isPending
      eq[4] !== tn ? ((y = (0, et.Xr)(tn)), (eq[4] = tn), (eq[5] = y)) : (y = eq[5])
      let tu = y,
        tc = "completed" === tu
      eq[6] !== ts || eq[7] !== tc || eq[8] !== eY
        ? ((w = ts && !tc && (0, Q.gK)(eY)), (eq[6] = ts), (eq[7] = tc), (eq[8] = eY), (eq[9] = w))
        : (w = eq[9])
      let tm = w
      eq[10] !== e1
        ? ((A = (e) => {
            e1(
              (t) => {
                let n = new URLSearchParams(t)
                return ((0, Q.f8)(n), e && n.set("edit", "true"), n)
              },
              { replace: !e },
            )
          }),
          (eq[10] = e1),
          (eq[11] = A))
        : (A = eq[11])
      let tx = A
      eq[12] !== tn ? ((N = (0, et.nT)(tn)), (eq[12] = tn), (eq[13] = N)) : (N = eq[13])
      let tf = N
      eq[14] !== tn || eq[15] !== tl
        ? ((I = { ...tl, name: tl.name.trim(), prompt: tl.prompt.trim() }),
          (C = (0, ei.tV)(tn, I)),
          (eq[14] = tn),
          (eq[15] = tl),
          (eq[16] = I),
          (eq[17] = C))
        : ((I = eq[16]), (C = eq[17]))
      let th = C,
        tg = I.name !== tn.title || I.prompt !== tn.prompt
      eq[18] !== tn || eq[19] !== tl
        ? ((S = (e) => (0, ei.Rd)(tn, tl, e)), (eq[18] = tn), (eq[19] = tl), (eq[20] = S))
        : (S = eq[20])
      let tj = (0, j.wv)(S)
      eq[21] !== tj ||
      eq[22] !== tl.name ||
      eq[23] !== tl.prompt ||
      eq[24] !== tl.scheduleConfig ||
      eq[25] !== tl.scheduleDirty
        ? ((k =
            tl.name.trim().length > 0 &&
            tl.prompt.trim().length > 0 &&
            null == tj &&
            (!tl.scheduleDirty || (0, X.SK)(tl.scheduleConfig))),
          (eq[21] = tj),
          (eq[22] = tl.name),
          (eq[23] = tl.prompt),
          (eq[24] = tl.scheduleConfig),
          (eq[25] = tl.scheduleDirty),
          (eq[26] = k))
        : (k = eq[26])
      let tp = k,
        tb = ts && !tc && "condition_watch" !== tn.timing_mode
      eq[27] !== tg || eq[28] !== td || eq[29] !== eH
        ? ((R = () =>
            !!e9.current ||
            !!eH ||
            (!td &&
              null == e6.current &&
              (!tg ||
                (null == e7.current &&
                  new Promise((e) => {
                    ;((e7.current = e), tt(!0))
                  }))))),
          (eq[27] = tg),
          (eq[28] = td),
          (eq[29] = eH),
          (eq[30] = R))
        : (R = eq[30])
      let tv = R
      ;(eq[31] !== tv ? ((D = () => ({ requestClose: tv })), (eq[31] = tv), (eq[32] = D)) : (D = eq[32]),
        (0, i.useImperativeHandle)(eB, D),
        eq[33] === Symbol.for("react.memo_cache_sentinel")
          ? ((P = () => () => {
              ;(e6.current?.abort(), e7.current?.(!1), (e7.current = null))
            }),
            (T = []),
            (eq[33] = P),
            (eq[34] = T))
          : ((P = eq[33]), (T = eq[34])),
        (0, i.useEffect)(P, T),
        eq[35] !== tg || eq[36] !== eH
          ? ((E = () => {
              if (tg && !eH)
                return (
                  window.addEventListener("beforeunload", ec),
                  () => window.removeEventListener("beforeunload", ec)
                )
            }),
            (L = [tg, eH]),
            (eq[35] = tg),
            (eq[36] = eH),
            (eq[37] = E),
            (eq[38] = L))
          : ((E = eq[37]), (L = eq[38])),
        (0, i.useEffect)(E, L),
        eq[39] !== tn ||
        eq[40] !== ts ||
        eq[41] !== tp ||
        eq[42] !== tl ||
        eq[43] !== I ||
        eq[44] !== th ||
        eq[45] !== eX ||
        eq[46] !== td ||
        eq[47] !== e8 ||
        eq[48] !== eW ||
        eq[49] !== e4 ||
        eq[50] !== e2 ||
        eq[51] !== eQ
          ? ((z = (e) => {
              let t = void 0 !== e && e
              if (!ts || (!th && !t) || (th && !tp) || td || null != e6.current) return Promise.resolve()
              let n = eQ.get(m.chatGptAuthenticatedAccountId$),
                s = new AbortController()
              return (
                (e6.current = s),
                (th
                  ? e2.mutateAsync(
                      { requestBody: (0, ei.FT)(tn, I), signal: s.signal },
                      {
                        onError: (e) => {
                          !s.signal.aborted &&
                            e8() &&
                            eQ.get(m.chatGptAuthenticatedAccountId$) === n &&
                            eQ
                              .get(g.Id)
                              .danger(
                                eX.formatMessage({
                                  id: "inbox.automations.cloud.updateError",
                                  defaultMessage: "Could not update cloud scheduled task",
                                }),
                                {
                                  errorAnalytics: { toastId: "inbox.automations.cloud.updateError" },
                                  description: (0, ee.P)(e, eX),
                                },
                              )
                        },
                      },
                    )
                  : Promise.resolve(tn)
                )
                  .then(async (e) => {
                    !s.signal.aborted &&
                      e8() &&
                      eQ.get(m.chatGptAuthenticatedAccountId$) === n &&
                      (th && (to((t) => (t === tl ? (0, ei.qz)(e) : t)), eW?.(e)),
                      t &&
                        (await e4.mutateAsync({
                          automationId: e.id,
                          requestBody: { idempotency_key: crypto.randomUUID() },
                        })))
                  })
                  .catch(eu)
                  .finally(() => {
                    e6.current = null
                  })
              )
            }),
            (eq[39] = tn),
            (eq[40] = ts),
            (eq[41] = tp),
            (eq[42] = tl),
            (eq[43] = I),
            (eq[44] = th),
            (eq[45] = eX),
            (eq[46] = td),
            (eq[47] = e8),
            (eq[48] = eW),
            (eq[49] = e4),
            (eq[50] = e2),
            (eq[51] = eQ),
            (eq[52] = z))
          : (z = eq[52]))
      let ty = z
      eq[53] !== ty
        ? ((q = (e) => {
            ;(e.preventDefault(), ty())
          }),
          (eq[53] = ty),
          (eq[54] = q))
        : (q = eq[54])
      let t_ = q
      ;(eq[55] !== tn.default_timezone || eq[56] !== tb || eq[57] !== tl.scheduleConfig
        ? ((B =
            tb && null != tl.scheduleConfig.oneTimeDate
              ? new Intl.DateTimeFormat().resolvedOptions().timeZone
              : tn.default_timezone),
          (eq[55] = tn.default_timezone),
          (eq[56] = tb),
          (eq[57] = tl.scheduleConfig),
          (eq[58] = B))
        : (B = eq[58]),
        eq[59] === Symbol.for("react.memo_cache_sentinel")
          ? ((U = (0, s.jsx)(d.A, { id: "inbox.automations.cloud.timeZone", defaultMessage: "Time zone" })),
            (eq[59] = U))
          : (U = eq[59]),
        eq[60] !== B ? ((O = (0, s.jsx)(em, { value: B, label: U })), (eq[60] = B), (eq[61] = O)) : (O = eq[61]))
      let tw = O
      eq[62] !== tn.prompt || eq[63] !== ts || eq[64] !== tl || eq[65] !== eJ || eq[66] !== t_ || eq[67] !== tc
        ? (($ = (0, s.jsx)(_.t, {
            children:
              !ts || tc
                ? (0, s.jsx)("div", {
                    className: "p-4 text-base whitespace-pre-wrap text-default select-text",
                    children: tn.prompt,
                  })
                : (0, s.jsx)(v.yI, {
                    disablePromptAutoFocus: !0,
                    draft: tl,
                    formId: eJ,
                    promptSize: "compact",
                    roots: [],
                    setDraft: to,
                    onSubmit: t_,
                  }),
          })),
          (eq[62] = tn.prompt),
          (eq[63] = ts),
          (eq[64] = tl),
          (eq[65] = eJ),
          (eq[66] = t_),
          (eq[67] = tc),
          (eq[68] = $))
        : ($ = eq[68])
      let tA = $
      if (eH) {
        let e, t, n, a, l, o, i, r
        return (
          eq[69] !== eU
            ? ((e = (0, s.jsx)(x.ScheduledTaskRunSummary, { item: eU })), (eq[69] = eU), (eq[70] = e))
            : (e = eq[70]),
          eq[71] !== tx ? ((t = () => tx(!0)), (eq[71] = tx), (eq[72] = t)) : (t = eq[72]),
          eq[73] !== tn.executor || eq[74] !== tn.id || eq[75] !== e4
            ? ((n =
                "local" === tn.executor
                  ? void 0
                  : () => e4.mutate({ automationId: tn.id, requestBody: { idempotency_key: crypto.randomUUID() } })),
              (eq[73] = tn.executor),
              (eq[74] = tn.id),
              (eq[75] = e4),
              (eq[76] = n))
            : (n = eq[76]),
          eq[77] !== eU
            ? ((a = (e) => (0, s.jsx)(x.ScheduledTaskRunResults, { item: eU, relatedActions: e })),
              (eq[77] = eU),
              (eq[78] = a))
            : (a = eq[78]),
          eq[79] !== tn.id || eq[80] !== a
            ? ((l = (0, s.jsx)(c.$, { automationId: tn.id, presentation: "run-result", children: a })),
              (eq[79] = tn.id),
              (eq[80] = a),
              (eq[81] = l))
            : (l = eq[81]),
          eq[82] !== eU ||
          eq[83] !== e$ ||
          eq[84] !== e4.isPending ||
          eq[85] !== e ||
          eq[86] !== t ||
          eq[87] !== n ||
          eq[88] !== l
            ? ((o = (0, s.jsx)(ea.K, {
                item: eU,
                summary: e,
                onClose: e$,
                onEdit: t,
                onRunNow: n,
                isRunNowPending: e4.isPending,
                children: l,
              })),
              (eq[82] = eU),
              (eq[83] = e$),
              (eq[84] = e4.isPending),
              (eq[85] = e),
              (eq[86] = t),
              (eq[87] = n),
              (eq[88] = l),
              (eq[89] = o))
            : (o = eq[89]),
          eq[90] !== tn.id || eq[91] !== tm || eq[92] !== eU || eq[93] !== tx
            ? ((i = tm
                ? (0, s.jsx)(c.$, {
                    automationId: tn.id,
                    children: (e) => (0, s.jsx)(el.Q, { item: eU, relatedActions: e, onClose: () => tx(!1) }),
                  })
                : null),
              (eq[90] = tn.id),
              (eq[91] = tm),
              (eq[92] = eU),
              (eq[93] = tx),
              (eq[94] = i))
            : (i = eq[94]),
          eq[95] !== o || eq[96] !== i
            ? ((r = (0, s.jsxs)(s.Fragment, { children: [o, i] })), (eq[95] = o), (eq[96] = i), (eq[97] = r))
            : (r = eq[97]),
          r
        )
      }
      if (ta && null != ti) {
        let e, t
        return (
          eq[98] === Symbol.for("react.memo_cache_sentinel") ? ((e = () => tr(null)), (eq[98] = e)) : (e = eq[98]),
          eq[99] !== e$ || eq[100] !== eO || eq[101] !== ti
            ? ((t = (0, s.jsx)(Z, { run: ti, renderSlots: eO, onBack: e, onClose: e$ }, ti.conversationId)),
              (eq[99] = e$),
              (eq[100] = eO),
              (eq[101] = ti),
              (eq[102] = t))
            : (t = eq[102]),
          t
        )
      }
      let tN = th || td
      ;(eq[103] !== eU || eq[104] !== tN
        ? ((ed = (0, s.jsx)(eo.Y, { item: eU, source: "editor", disabled: tN })),
          (eq[103] = eU),
          (eq[104] = tN),
          (eq[105] = ed))
        : (ed = eq[105]),
        eq[106] !== eU.teamId ? ((ex = null), (eq[106] = eU.teamId), (eq[107] = ex)) : (ex = eq[107]),
        eq[108] !== ed || eq[109] !== ex
          ? ((ef = (0, s.jsxs)(s.Fragment, { children: [ed, ex] })), (eq[108] = ed), (eq[109] = ex), (eq[110] = ef))
          : (ef = eq[110]),
        eq[111] !== e$
          ? ((eh = () => {
              ;((e9.current = !0), e$())
            }),
            (eq[111] = e$),
            (eq[112] = eh))
          : (eh = eq[112]),
        eq[113] !== tp || eq[114] !== th || eq[115] !== e4 || eq[116] !== ty || eq[117] !== e2
          ? ((eg = (e) =>
              (0, s.jsx)(V.n, {
                ...e,
                runNowAction:
                  null == e.runNowAction
                    ? void 0
                    : {
                        disabled: e.runNowAction.disabled || (th && !tp),
                        isPending: e2.isPending || e4.isPending,
                        label: th
                          ? (0, s.jsx)(d.A, {
                              id: "automations.editor.saveAndRunNow",
                              defaultMessage: "Save and run now",
                            })
                          : void 0,
                        tooltipText: th
                          ? (0, s.jsx)(d.A, {
                              id: "automations.editor.saveAndRunNowTooltip",
                              defaultMessage: "Save changes, then run the task once",
                            })
                          : e.runNowAction.tooltipText,
                        onSelectAsync: () => ty(!0),
                      },
              })),
            (eq[113] = tp),
            (eq[114] = th),
            (eq[115] = e4),
            (eq[116] = ty),
            (eq[117] = e2),
            (eq[118] = eg))
          : (eg = eq[118]),
        eq[119] !== eU || eq[120] !== eZ || eq[121] !== ef || eq[122] !== eh || eq[123] !== eg
          ? ((ej = (0, s.jsx)(Y.s, {
              item: eU,
              trailingMenuItems: ef,
              onDeleted: eh,
              onOpenConversation: eZ,
              renderActions: eg,
            })),
            (eq[119] = eU),
            (eq[120] = eZ),
            (eq[121] = ef),
            (eq[122] = eh),
            (eq[123] = eg),
            (eq[124] = ej))
          : (ej = eq[124]),
        eq[125] !== eX || eq[126] !== e8 || eq[127] !== e$ || eq[128] !== tv || eq[129] !== eG
          ? ((ep = eG
              ? {
                  label: eX.formatMessage({
                    id: "inbox.automations.detail.close",
                    defaultMessage: "Close scheduled task details",
                  }),
                  onClose: () => {
                    Promise.resolve(tv()).then((e) => {
                      e && e8() && ((e9.current = !0), e$())
                    })
                  },
                }
              : void 0),
            (eq[125] = eX),
            (eq[126] = e8),
            (eq[127] = e$),
            (eq[128] = tv),
            (eq[129] = eG),
            (eq[130] = ep))
          : (ep = eq[130]),
        eq[131] !== tn ||
        eq[132] !== ts ||
        eq[133] !== tp ||
        eq[134] !== eJ ||
        eq[135] !== th ||
        eq[136] !== td ||
        eq[137] !== e2
          ? ((eb =
              ts && th
                ? (0, s.jsxs)("div", {
                    className: "flex items-center justify-end gap-2",
                    children: [
                      (0, s.jsx)(f.$, {
                        color: "outline",
                        disabled: td,
                        size: "toolbar",
                        onClick: () => {
                          to((0, ei.qz)(tn))
                        },
                        children: (0, s.jsx)(d.A, { id: "automation.sidePanel.cancel", defaultMessage: "Cancel" }),
                      }),
                      (0, s.jsx)(f.$, {
                        ref: e5,
                        disabled: !tp || td,
                        form: eJ,
                        loading: e2.isPending,
                        size: "toolbar",
                        type: "submit",
                        children: (0, s.jsx)(d.A, { id: "inbox.automations.cloud.save", defaultMessage: "Save" }),
                      }),
                    ],
                  })
                : null),
            (eq[131] = tn),
            (eq[132] = ts),
            (eq[133] = tp),
            (eq[134] = eJ),
            (eq[135] = th),
            (eq[136] = td),
            (eq[137] = e2),
            (eq[138] = eb))
          : (eb = eq[138]))
      let tM = ts ? tl.name : tn.title
      ;(eq[139] === Symbol.for("react.memo_cache_sentinel")
        ? ((ev = (e) => (0, p.k)(e, () => e5.current?.click())), (eq[139] = ev))
        : (ev = eq[139]),
        eq[140] !== ts || eq[141] !== tc
          ? ((ey =
              !ts || tc
                ? null
                : (e) => {
                    to((t) => ({ ...t, name: e }))
                  }),
            (eq[140] = ts),
            (eq[141] = tc),
            (eq[142] = ey))
          : (ey = eq[142]))
      let tI = "active" === tu ? void 0 : "text-codex-description"
      return (
        eq[143] !== tu || eq[144] !== tf
          ? ((e_ =
              tf && "active" === tu
                ? (0, s.jsx)("span", {
                    className: "select-none",
                    children: (0, s.jsx)(d.A, {
                      id: "inbox.automations.cloud.webhook.monitoring",
                      defaultMessage: "Monitoring",
                    }),
                  })
                : (0, s.jsx)(d.A, { ...J.M[tu] })),
            (eq[143] = tu),
            (eq[144] = tf),
            (eq[145] = e_))
          : (e_ = eq[145]),
        eq[146] !== tI || eq[147] !== e_
          ? ((ew = (0, s.jsx)("span", { className: tI, children: e_ })), (eq[146] = tI), (eq[147] = e_), (eq[148] = ew))
          : (ew = eq[148]),
        eq[149] !== tn.id
          ? ((eA = (0, s.jsx)(c.$, { automationId: tn.id })), (eq[149] = tn.id), (eq[150] = eA))
          : (eA = eq[150]),
        eq[151] !== tn.is_enabled || eq[152] !== tn.webhook_triggers || eq[153] !== tf || eq[154] !== tA
          ? ((eN = tf
              ? (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(es.C, { isAutomationEnabled: tn.is_enabled, triggers: tn.webhook_triggers }),
                    (0, s.jsx)(M.C, {
                      title: (0, s.jsx)("span", {
                        className: "select-none",
                        children: (0, s.jsx)(d.A, {
                          id: "inbox.automations.cloud.webhook.prompt",
                          defaultMessage: "Prompt",
                        }),
                      }),
                      children: tA,
                    }),
                  ],
                })
              : tA),
            (eq[151] = tn.is_enabled),
            (eq[152] = tn.webhook_triggers),
            (eq[153] = tf),
            (eq[154] = tA),
            (eq[155] = eN))
          : (eN = eq[155]),
        eq[156] === Symbol.for("react.memo_cache_sentinel")
          ? ((eM = (0, s.jsx)(d.A, { id: "inbox.automations.details", defaultMessage: "Details" })), (eq[156] = eM))
          : (eM = eq[156]),
        eq[157] !== tn.executor
          ? ((eI =
              "local" === tn.executor
                ? (0, s.jsx)(d.A, { id: "inbox.automations.executionLocation.desktop", defaultMessage: "Desktop" })
                : (0, s.jsxs)("span", {
                    className: "inline-flex items-center gap-1",
                    children: [(0, s.jsx)(h.I, { asset: l.f }), (0, s.jsx)(d.A, { ...G.H.cloud })],
                  })),
            (eq[157] = tn.executor),
            (eq[158] = eI))
          : (eI = eq[158]),
        eq[159] === Symbol.for("react.memo_cache_sentinel")
          ? ((eC = (0, s.jsx)(d.A, { ...G.H.label })), (eq[159] = eC))
          : (eC = eq[159]),
        eq[160] !== eI
          ? ((eS = (0, s.jsx)(em, { value: eI, label: eC })), (eq[160] = eI), (eq[161] = eS))
          : (eS = eq[161]),
        eq[162] !== eU.teamId
          ? ((ek = null != eU.teamId ? (0, s.jsx)(W.W, { teamId: eU.teamId }) : null),
            (eq[162] = eU.teamId),
            (eq[163] = ek))
          : (ek = eq[163]),
        eq[164] !== eS || eq[165] !== ek
          ? ((eR = (0, s.jsx)(M.C, { title: eM, children: (0, s.jsxs)(_.t, { children: [eS, ek] }) })),
            (eq[164] = eS),
            (eq[165] = ek),
            (eq[166] = eR))
          : (eR = eq[166]),
        eq[167] !== tn || eq[168] !== tb || eq[169] !== tj || eq[170] !== tl || eq[171] !== tw
          ? ((eD = tb
              ? (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(er.V, {
                      afterScheduleRows: tw,
                      automation: tn,
                      draft: tl,
                      onChange: to,
                      weekdayLabelFormat: "short",
                    }),
                    null == tj
                      ? null
                      : (0, s.jsxs)("p", {
                          className: "text-sm text-danger select-none",
                          role: "alert",
                          children: [
                            "too-far" === tj &&
                              (0, s.jsx)(d.A, {
                                id: "automations.scheduled.editor.dateTooFar",
                                defaultMessage: "Choose a date within the next two years",
                              }),
                            "end-past" === tj &&
                              (0, s.jsx)(d.A, {
                                id: "automations.scheduled.editor.endDateInPast",
                                defaultMessage: "Choose an end date today or later",
                              }),
                            "past" === tj &&
                              (0, s.jsx)(d.A, {
                                id: "automations.scheduled.editor.dateInPast",
                                defaultMessage: "Choose a date and time in the future",
                              }),
                          ],
                        }),
                  ],
                })
              : null),
            (eq[167] = tn),
            (eq[168] = tb),
            (eq[169] = tj),
            (eq[170] = tl),
            (eq[171] = tw),
            (eq[172] = eD))
          : (eD = eq[172]),
        eq[173] !== tn.default_timezone ||
        eq[174] !== tb ||
        eq[175] !== eX ||
        eq[176] !== tf ||
        eq[177] !== eU ||
        eq[178] !== tw
          ? ((eP =
              tb || tf
                ? null
                : (0, s.jsx)(M.C, {
                    title: (0, s.jsx)(d.A, { id: "inbox.automations.frequency", defaultMessage: "Frequency" }),
                    children: (0, s.jsxs)(_.t, {
                      children: [
                        (0, s.jsx)(em, {
                          value: (0, et.AT)(eU, eX, tn.default_timezone),
                          label: (0, s.jsx)(d.A, {
                            id: "inbox.automations.cloud.schedule",
                            defaultMessage: "Schedule",
                          }),
                        }),
                        tw,
                      ],
                    }),
                  })),
            (eq[173] = tn.default_timezone),
            (eq[174] = tb),
            (eq[175] = eX),
            (eq[176] = tf),
            (eq[177] = eU),
            (eq[178] = tw),
            (eq[179] = eP))
          : (eP = eq[179]),
        eq[180] !== tn.id || eq[181] !== ta
          ? ((eT = ta ? (0, s.jsx)(F, { automationId: tn.id, onSelectRun: tr }) : null),
            (eq[180] = tn.id),
            (eq[181] = ta),
            (eq[182] = eT))
          : (eT = eq[182]),
        eq[183] !== tg
          ? ((eF = () => (tg || null != e6.current) && !e9.current), (eq[183] = tg), (eq[184] = eF))
          : (eF = eq[184]),
        eq[185] !== te
          ? ((eE = te
              ? {
                  onCancel: () => {
                    ;(e7.current?.(!1), (e7.current = null), tt(!1))
                  },
                  onDiscard: () => {
                    let e = e7.current
                    ;((e7.current = null), tt(!1), e?.(!0))
                  },
                }
              : null),
            (eq[185] = te),
            (eq[186] = eE))
          : (eE = eq[186]),
        eq[187] !== td || eq[188] !== eF || eq[189] !== eE
          ? ((eL = (0, s.jsx)(el.M, { isPending: td, shouldBlock: eF, dismissal: eE })),
            (eq[187] = td),
            (eq[188] = eF),
            (eq[189] = eE),
            (eq[190] = eL))
          : (eL = eq[190]),
        eq[191] !== eO ||
        eq[192] !== ej ||
        eq[193] !== ep ||
        eq[194] !== eb ||
        eq[195] !== tM ||
        eq[196] !== ey ||
        eq[197] !== ew ||
        eq[198] !== eA ||
        eq[199] !== eN ||
        eq[200] !== eR ||
        eq[201] !== eD ||
        eq[202] !== eP ||
        eq[203] !== eT ||
        eq[204] !== eL
          ? ((ez = (0, s.jsxs)(H.V, {
              renderSlots: eO,
              actions: ej,
              closeAction: ep,
              footer: eb,
              name: tM,
              onKeyDown: ev,
              onNameChange: ey,
              statusLabel: ew,
              children: [eA, eN, eR, eD, eP, eT, eL],
            })),
            (eq[191] = eO),
            (eq[192] = ej),
            (eq[193] = ep),
            (eq[194] = eb),
            (eq[195] = tM),
            (eq[196] = ey),
            (eq[197] = ew),
            (eq[198] = eA),
            (eq[199] = eN),
            (eq[200] = eR),
            (eq[201] = eD),
            (eq[202] = eP),
            (eq[203] = eT),
            (eq[204] = eL),
            (eq[205] = ez))
          : (ez = eq[205]),
        ez
      )
    }
    function eu() {}
    function ec(e) {
      e.preventDefault()
    }
    function em(e) {
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
      i = n("qmMi"),
      r = n("DBCl"),
      d = n("AuIy"),
      u = n("IgxH"),
      c = n("zd8w"),
      m = n("oyxz"),
      x = n("Wf1j"),
      f = n("Ywss"),
      h = n("SPnB"),
      g = n("TZBk"),
      j = n("fGpH"),
      p = n("AZW7"),
      b = n("jfZL"),
      v = n("rO2H"),
      y = n("oPza"),
      _ = n("fZVq"),
      w = n("jAnS"),
      A = n("dKZq"),
      N = n("dMTK"),
      M = n("Sm6l"),
      I = n("dUfi"),
      C = n("bVeK"),
      S = n("FrrB"),
      k = n("RNul"),
      R = n("KIKs"),
      D = n("OWtl"),
      P = n("Bc5r"),
      T = n("eShZ"),
      F = n("bEqT")
    function E(e) {
      let t,
        n,
        l,
        o,
        r,
        u,
        x,
        f,
        h,
        g,
        j,
        p,
        v,
        w,
        N,
        M = (0, a.c)(71),
        { item: I, relatedActions: C, runId: S } = e,
        k = (0, i.gh)(D.u)
      M[0] !== I.automation.id || M[1] !== S
        ? ((t = { automationId: I.automation.id, runId: S }), (M[0] = I.automation.id), (M[1] = S), (M[2] = t))
        : (t = M[2])
      let { data: R, isPending: P, isFetching: E, isError: O, error: $, refetch: Z } = (0, i._U)(F.Tu, t)
      M[3] !== R || M[4] !== O || M[5] !== I || M[6] !== S || M[7] !== k
        ? ((n = () => {
            if (null == R || O) return
            let e = R.latest_update
            for (let t of [e?.run, R.last_run?.id === e?.run.id ? null : R.last_run])
              t?.is_unread && (0, F.FL)(k, I.automation.id, t).catch(z)
            null == S &&
              null == I.teamId &&
              e?.latest_update != null &&
              e.run.id === R.last_run?.id &&
              (0, y.w)(k, I).catch(L)
          }),
          (M[3] = R),
          (M[4] = O),
          (M[5] = I),
          (M[6] = S),
          (M[7] = k),
          (M[8] = n))
        : (n = M[8])
      let W = (0, c.useEffectEvent)(n)
      if (
        (M[9] !== W
          ? ((l = () => {
              W()
            }),
            (M[9] = W),
            (M[10] = l))
          : (l = M[10]),
        M[11] !== R || M[12] !== O ? ((o = [R, O]), (M[11] = R), (M[12] = O), (M[13] = o)) : (o = M[13]),
        (0, c.useEffect)(l, o),
        null == R || ($ instanceof T.FetchError && [401, 403, 404, 410].includes($.status)))
      ) {
        let e, t, n, a
        return (
          M[14] !== Z ? ((e = () => void Z()), (M[14] = Z), (M[15] = e)) : (e = M[15]),
          M[16] !== E || M[17] !== P || M[18] !== e
            ? ((t = (0, s.jsx)(B, { pending: P, loading: E, onRetry: e })),
              (M[16] = E),
              (M[17] = P),
              (M[18] = e),
              (M[19] = t))
            : (t = M[19]),
          M[20] !== C
            ? ((n = (0, s.jsx)(q, { relatedActions: C, chatRef: null })), (M[20] = C), (M[21] = n))
            : (n = M[21]),
          M[22] !== t || M[23] !== n
            ? ((a = (0, s.jsxs)(s.Fragment, { children: [t, n] })), (M[22] = t), (M[23] = n), (M[24] = a))
            : (a = M[24]),
          a
        )
      }
      let K = R.latest_update,
        V = R.last_run ?? K?.run,
        H = null != K && V?.id === K.run.id ? K.latest_update : null
      M[25] !== V?.chat_ref || M[26] !== I.automation.conversation_id || M[27] !== I.teamId || M[28] !== S
        ? ((r =
            V?.chat_ref ??
            (null == S && null == I.teamId && I.automation.conversation_id
              ? { type: "chatgpt", id: I.automation.conversation_id }
              : null)),
          (M[25] = V?.chat_ref),
          (M[26] = I.automation.conversation_id),
          (M[27] = I.teamId),
          (M[28] = S),
          (M[29] = r))
        : (r = M[29])
      let G = r,
        Q = H?.metadata.automation_requires_user_action === !0
      M[30] !== H ? ((u = null != H && !(0, d.WH)(H.content_text)), (M[30] = H), (M[31] = u)) : (u = M[31])
      let X = u
      M[32] !== X || M[33] !== K || M[34] !== H
        ? ((x = X && null != K ? (0, s.jsx)(_.F, { conversationId: K.run.id, update: H }) : null),
          (M[32] = X),
          (M[33] = K),
          (M[34] = H),
          (M[35] = x))
        : (x = M[35])
      let J = x
      M[36] !== X || M[37] !== S || M[38] !== H || M[39] !== J
        ? ((f =
            null == S && X
              ? (0, s.jsx)(A.S, { collapsedLineCount: 9, collapseIndicator: "fade", text: H.content_text, children: J })
              : J),
          (M[36] = X),
          (M[37] = S),
          (M[38] = H),
          (M[39] = J),
          (M[40] = f))
        : (f = M[40])
      let Y = f
      M[41] !== R.last_run?.id || M[42] !== V?.id
        ? ((h =
            V?.id === R.last_run?.id
              ? (0, s.jsx)(m.A, { id: "automations.runs.lastRun", defaultMessage: "Last run" })
              : (0, s.jsx)(m.A, { id: "automations.runs.latest", defaultMessage: "Latest update" })),
          (M[41] = R.last_run?.id),
          (M[42] = V?.id),
          (M[43] = h))
        : (h = M[43])
      let ee = h
      return (
        M[44] !== R.last_run ||
        M[45] !== V ||
        M[46] !== X ||
        M[47] !== Q ||
        M[48] !== Y ||
        M[49] !== ee ||
        M[50] !== K ||
        M[51] !== S ||
        M[52] !== H
          ? ((g =
              null != V
                ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsxs)("p", {
                        className: "flex items-center justify-between gap-3 text-sm text-secondary select-none",
                        children: [
                          null == S ? (0, s.jsx)("span", { children: ee }) : null,
                          (0, s.jsx)("span", {
                            className: "shrink-0",
                            children: (0, s.jsx)(b.k, { value: H?.created_at ?? V.started_at }),
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
                            }),
                          })
                        : null,
                      Q ? null : Y,
                      Q || X || null == V
                        ? null
                        : (0, s.jsx)("p", {
                            role: "status",
                            className: "text-sm text-secondary select-none",
                            children: (0, s.jsx)(U, { run: V }),
                          }),
                      null != R.last_run && null != H && R.last_run.id === K?.run.id && "failed" === R.last_run.status
                        ? (0, s.jsx)("p", {
                            role: "status",
                            className: "border-t border-default pt-4 text-sm text-secondary select-none",
                            children: (0, s.jsx)(U, { run: R.last_run }),
                          })
                        : null,
                    ],
                  })
                : null),
            (M[44] = R.last_run),
            (M[45] = V),
            (M[46] = X),
            (M[47] = Q),
            (M[48] = Y),
            (M[49] = ee),
            (M[50] = K),
            (M[51] = S),
            (M[52] = H),
            (M[53] = g))
          : (g = M[53]),
        M[54] !== V || M[55] !== O
          ? ((j =
              null != V || O
                ? null
                : (0, s.jsx)("p", {
                    role: "status",
                    className: "text-sm text-secondary select-none",
                    children: (0, s.jsx)(m.A, { id: "automations.runs.empty", defaultMessage: "No runs yet" }),
                  })),
            (M[54] = V),
            (M[55] = O),
            (M[56] = j))
          : (j = M[56]),
        M[57] !== O || M[58] !== E || M[59] !== Z
          ? ((p = O ? (0, s.jsx)(B, { pending: !1, loading: E, onRetry: () => void Z() }) : null),
            (M[57] = O),
            (M[58] = E),
            (M[59] = Z),
            (M[60] = p))
          : (p = M[60]),
        M[61] !== g || M[62] !== j || M[63] !== p
          ? ((v = (0, s.jsxs)("section", { className: "flex min-w-0 flex-col gap-2", children: [g, j, p] })),
            (M[61] = g),
            (M[62] = j),
            (M[63] = p),
            (M[64] = v))
          : (v = M[64]),
        M[65] !== G || M[66] !== C
          ? ((w = (0, s.jsx)(q, { relatedActions: C, chatRef: G })), (M[65] = G), (M[66] = C), (M[67] = w))
          : (w = M[67]),
        M[68] !== v || M[69] !== w
          ? ((N = (0, s.jsxs)(s.Fragment, { children: [v, w] })), (M[68] = v), (M[69] = w), (M[70] = N))
          : (N = M[70]),
        N
      )
    }
    function L() {}
    function z() {}
    function q(e) {
      let t,
        n,
        l = (0, a.c)(8),
        { relatedActions: o, chatRef: i } = e,
        d = (0, f.Zp)(),
        u = (0, P.M0)()
      if (null == i && null == o) return null
      let c = null != o ? "flex flex-wrap items-center gap-2" : void 0
      return (
        l[0] !== i || l[1] !== d || l[2] !== u
          ? ((t =
              null != i
                ? (0, s.jsxs)(M.$, {
                    className: "w-fit",
                    color: "ghostTertiary",
                    size: "inline",
                    onClick: () => {
                      "codex" === i.type ? u(i.id, r.iwv, { threadAccess: "shared" }) : d((0, w.mv)(i.id))
                    },
                    children: [
                      (0, s.jsx)(m.A, { id: "automations.editor.openChat.button.label", defaultMessage: "Open chat" }),
                      (0, s.jsx)(C.$XR, {}),
                    ],
                  })
                : null),
            (l[0] = i),
            (l[1] = d),
            (l[2] = u),
            (l[3] = t))
          : (t = l[3]),
        l[4] !== o || l[5] !== c || l[6] !== t
          ? ((n = (0, s.jsx)("div", {
              className: "mt-2 text-sm",
              children: (0, s.jsxs)("div", { className: c, children: [o, t] }),
            })),
            (l[4] = o),
            (l[5] = c),
            (l[6] = t),
            (l[7] = n))
          : (n = l[7]),
        n
      )
    }
    function B(e) {
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
                    (0, s.jsx)(k.y, {}),
                    (0, s.jsx)("span", {
                      className: "sr-only",
                      children: (0, s.jsx)(m.A, {
                        id: "automations.runs.loading",
                        defaultMessage: "Loading task results",
                      }),
                    }),
                  ],
                })
              : (0, s.jsx)(S.A, {
                  className: "flex-1 select-none",
                  title: (0, s.jsx)(m.A, {
                    id: "automations.runs.error",
                    defaultMessage: "Couldn\u2019t load task results",
                  }),
                  actions: (0, s.jsx)(M.$, {
                    color: "outline",
                    loading: o,
                    onClick: i,
                    children: (0, s.jsx)(m.A, { id: "automations.runs.retry", defaultMessage: "Try again" }),
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
    function U(e) {
      let t,
        n = (0, a.c)(3),
        { run: l } = e
      if ("in_progress" === l.status && null == l.chat_ref) {
        let e
        return (
          n[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)(m.A, { ...g.M.startingRun })), (n[0] = e))
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
              values: { status: l.status },
            })),
            (n[1] = l.status),
            (n[2] = t))
          : (t = n[2]),
        t
      )
    }
    function O(e) {
      let t,
        n,
        l,
        r,
        f,
        g,
        j,
        b,
        v,
        y,
        _,
        w = (0, a.c)(69),
        { item: A, relatedActions: C } = e,
        S = (0, i.gh)(D.u),
        k = (0, i.Ul)(h.chatGptAuthenticatedAccountId$),
        P = A.automation.id,
        L = (0, x.A)(),
        z = (0, c.useId)(),
        [q, O] = (0, c.useState)(null),
        Z = (0, R.wv)()
      w[0] !== P ? ((t = { automationId: P, runId: null }), (w[0] = P), (w[1] = t)) : (t = w[1])
      let { data: W } = (0, i._U)(F.Tu, t),
        {
          data: K,
          isPending: V,
          isFetching: H,
          fetchStatus: G,
          isError: Q,
          error: X,
          refetch: J,
          fetchNextPage: Y,
          hasNextPage: ee,
          isFetchingNextPage: et,
          isFetchNextPageError: en,
        } = (0, i._U)(F.n, P)
      w[2] !== P || w[3] !== S
        ? ((n = (e) => {
            S.queryClient.prefetchQuery(S.query.getOptions(F.Tu, { automationId: P, runId: e }))
          }),
          (w[2] = P),
          (w[3] = S),
          (w[4] = n))
        : (n = w[4])
      let es = n,
        ea = W?.last_run?.id ?? W?.latest_update?.run.id
      if (
        w[5] !== k ||
        w[6] !== P ||
        w[7] !== K?.pages ||
        w[8] !== K?.pages.flatMap ||
        w[9] !== ea ||
        w[10] !== X ||
        w[11] !== q ||
        w[12] !== G ||
        w[13] !== ee ||
        w[14] !== z ||
        w[15] !== L ||
        w[16] !== Q ||
        w[17] !== H ||
        w[18] !== V ||
        w[19] !== A ||
        w[20] !== Z ||
        w[21] !== es ||
        w[22] !== J ||
        w[23] !== C
      ) {
        j = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            t,
            n,
            a = K?.pages.flatMap($).filter((e) => e.id !== ea),
            i = null == a || (X instanceof T.FetchError && [401, 403, 404, 410].includes(X.status))
          w[29] !== k || w[30] !== P
            ? ((e = JSON.stringify([k, P])), (w[29] = k), (w[30] = P), (w[31] = e))
            : (e = w[31])
          let x = !i && (a.length > 0 || (!ee && !Q)),
            h = Q && "idle" === G
          if (
            (w[32] !== e || w[33] !== x || w[34] !== h
              ? ((t = (0, s.jsx)(p.z, { name: "scheduled_history_load", ready: x, failed: h }, e)),
                (w[32] = e),
                (w[33] = x),
                (w[34] = h),
                (w[35] = t))
              : (t = w[35]),
            (l = t),
            i)
          ) {
            let e, t, n
            ;(w[36] !== J ? ((e = () => void J()), (w[36] = J), (w[37] = e)) : (e = w[37]),
              w[38] !== H || w[39] !== V || w[40] !== e
                ? ((t = (0, s.jsx)(B, { pending: V, loading: H, onRetry: e })),
                  (w[38] = H),
                  (w[39] = V),
                  (w[40] = e),
                  (w[41] = t))
                : (t = w[41]),
              w[42] !== l || w[43] !== t
                ? ((n = (0, s.jsxs)(s.Fragment, { children: [l, t] })), (w[42] = l), (w[43] = t), (w[44] = n))
                : (n = w[44]),
              (j = n))
            break e
          }
          w[45] !== L || w[46] !== Z
            ? ((n = (e) => {
                let t = new Date(e.started_at),
                  n = (0, N.f$)(Z, t)
                return n <= 0
                  ? "today"
                  : 1 === n
                    ? "yesterday"
                    : n <= 7
                      ? "lastWeek"
                      : L.formatDate(t, { month: "long", year: "numeric" })
              }),
              (w[45] = L),
              (w[46] = Z),
              (w[47] = n))
            : (n = w[47])
          let b = o()(a, n)
          ;((r = "flex min-w-0 flex-col gap-4 border-t border-default pt-6"),
            w[48] === Symbol.for("react.memo_cache_sentinel")
              ? ((f = (0, s.jsx)("h3", {
                  className: "px-3 text-sm font-medium text-secondary select-none",
                  children: (0, s.jsx)(m.A, { id: "automations.runs.previous", defaultMessage: "Previous runs" }),
                })),
                (w[48] = f))
              : (f = w[48]),
            (g =
              0 === a.length
                ? (0, s.jsx)("p", {
                    className: "px-3 text-sm text-secondary select-none",
                    children: (0, s.jsx)(m.A, {
                      id: "automations.runs.noPrevious",
                      defaultMessage: "No previous runs",
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
                              values: { group: t, month: t },
                            }),
                          }),
                          n.map((e) =>
                            (0, s.jsxs)(
                              c.Fragment,
                              {
                                children: [
                                  (0, s.jsx)(M.$, {
                                    id: z + "-" + e.id + "-button",
                                    className: "w-full justify-start",
                                    color: "ghost",
                                    radius: "large",
                                    size: "inline",
                                    "aria-expanded": q === e.id,
                                    "aria-controls": z + "-" + e.id,
                                    onClick: () => O((t) => (t === e.id ? null : e.id)),
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
                                                "aria-label": L.formatMessage({
                                                  id: "automations.runs.unread",
                                                  defaultMessage: "Unread",
                                                }),
                                              })
                                            : null,
                                        }),
                                        (0, s.jsx)("span", {
                                          className: "min-w-0 flex-1 truncate text-start",
                                          children:
                                            (e.summary && !(0, d.WH)(e.summary) && (0, u.i)(e.summary)) ||
                                            (0, s.jsx)(U, { run: e }),
                                        }),
                                        (0, s.jsx)("time", {
                                          className: "shrink-0 text-xs text-tertiary",
                                          dateTime: e.started_at,
                                          children: L.formatDate(e.started_at, { month: "short", day: "numeric" }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, s.jsx)(I.Q, {
                                    id: z + "-" + e.id,
                                    className: "px-3 pb-4",
                                    "aria-labelledby": z + "-" + e.id + "-button",
                                    role: "region",
                                    expanded: q === e.id,
                                    children: (0, s.jsx)(E, { item: A, runId: e.id, relatedActions: C }),
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
        ;((w[5] = k),
          (w[6] = P),
          (w[7] = K?.pages),
          (w[8] = K?.pages.flatMap),
          (w[9] = ea),
          (w[10] = X),
          (w[11] = q),
          (w[12] = G),
          (w[13] = ee),
          (w[14] = z),
          (w[15] = L),
          (w[16] = Q),
          (w[17] = H),
          (w[18] = V),
          (w[19] = A),
          (w[20] = Z),
          (w[21] = es),
          (w[22] = J),
          (w[23] = C),
          (w[24] = l),
          (w[25] = r),
          (w[26] = f),
          (w[27] = g),
          (w[28] = j))
      } else ((l = w[24]), (r = w[25]), (f = w[26]), (g = w[27]), (j = w[28]))
      if (j !== Symbol.for("react.early_return_sentinel")) return j
      ;(w[49] !== Y || w[50] !== Q || w[51] !== en || w[52] !== H || w[53] !== J
        ? ((b = Q ? (0, s.jsx)(B, { pending: !1, loading: H, onRetry: () => void (en ? Y() : J()) }) : null),
          (w[49] = Y),
          (w[50] = Q),
          (w[51] = en),
          (w[52] = H),
          (w[53] = J),
          (w[54] = b))
        : (b = w[54]),
        w[55] !== Y || w[56] !== ee || w[57] !== Q || w[58] !== et
          ? ((v =
              ee && !Q
                ? (0, s.jsx)(M.$, {
                    color: "ghost",
                    disabled: et,
                    loading: et,
                    onClick: () => void Y(),
                    children: (0, s.jsx)(m.A, { id: "automations.runs.loadMore", defaultMessage: "Load more" }),
                  })
                : null),
            (w[55] = Y),
            (w[56] = ee),
            (w[57] = Q),
            (w[58] = et),
            (w[59] = v))
          : (v = w[59]),
        w[60] !== r || w[61] !== f || w[62] !== g || w[63] !== b || w[64] !== v
          ? ((y = (0, s.jsxs)("div", { className: r, children: [f, g, b, v] })),
            (w[60] = r),
            (w[61] = f),
            (w[62] = g),
            (w[63] = b),
            (w[64] = v),
            (w[65] = y))
          : (y = w[65]))
      let el = y
      return (
        w[66] !== el || w[67] !== l
          ? ((_ = (0, s.jsxs)(s.Fragment, { children: [l, el] })), (w[66] = el), (w[67] = l), (w[68] = _))
          : (_ = w[68]),
        _
      )
    }
    function $(e) {
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
                    (0, s.jsx)(O, { item: l, relatedActions: o }),
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
          let { data: u } = (0, i._U)(F.Tu, t)
          return (
            u?.last_run?.status === "in_progress" && (n = null == u.last_run.chat_ref ? "starting" : "running"),
            r[2] !== d.automation ? ((l = (0, j.Xr)(d.automation)), (r[2] = d.automation), (r[3] = l)) : (l = r[3]),
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
}
//# sourceMappingURL=330967.1c87309970.js.map
