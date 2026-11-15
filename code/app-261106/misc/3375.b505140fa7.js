export const __rspack_esm_ids = [3375]
export const __webpack_modules__ = {
  csAG(e, t, i) {
    var n = i("ABep")
    ;(i("zd8w"),
      (t.A = (e) =>
        (0, n.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "none",
          ...e,
          children: (0, n.jsx)("g", {
            transform: "translate(2.87695 2.45996)",
            children: (0, n.jsx)("path", {
              d: "M3.75 12.54C3.75 11.8718 3.2083 11.3301 2.54004 11.3301C1.87177 11.3301 1.33008 11.8718 1.33008 12.54C1.33008 13.2083 1.87177 13.75 2.54004 13.75C3.2083 13.75 3.75 13.2083 3.75 12.54ZM12.917 10.04C12.917 9.37188 12.3751 8.83025 11.707 8.83008C11.0388 8.83008 10.4971 9.37177 10.4971 10.04C10.4971 10.7083 11.0388 11.25 11.707 11.25C12.3751 11.2498 12.917 10.7082 12.917 10.04ZM3.75 2.54004C3.75 1.87177 3.2083 1.33008 2.54004 1.33008C1.87177 1.33008 1.33008 1.87177 1.33008 2.54004C1.33008 3.2083 1.87177 3.75 2.54004 3.75C3.2083 3.75 3.75 3.2083 3.75 2.54004ZM5.08008 2.54004C5.08008 3.47934 4.56861 4.29686 3.81055 4.73633C4.22936 5.91905 4.89909 6.81802 5.75879 7.48242C6.72602 8.22983 7.9664 8.70627 9.42676 8.9248C9.83996 8.08166 10.7048 7.5 11.707 7.5C13.1097 7.50018 14.2471 8.63734 14.2471 10.04C14.2471 11.4427 13.1097 12.5799 11.707 12.5801C10.3687 12.5801 9.2737 11.5448 9.17578 10.2314C7.57006 9.98395 6.12118 9.44292 4.94629 8.53516C4.25331 7.99967 3.66805 7.34453 3.20508 6.56836V10.0908C4.28496 10.3833 5.08008 11.3676 5.08008 12.54C5.08008 13.9428 3.94284 15.0801 2.54004 15.0801C1.13724 15.0801 0 13.9428 0 12.54C0 11.3676 0.795119 10.3833 1.875 10.0908V4.98828C0.795245 4.69568 0 3.71239 0 2.54004C0 1.13724 1.13724 0 2.54004 0C3.94284 0 5.08008 1.13724 5.08008 2.54004Z",
              fill: "currentColor",
            }),
          }),
        })))
  },
  hfh3(e, t, i) {
    var n = i("ABep")
    ;(i("zd8w"),
      (t.A = (e) =>
        (0, n.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 20,
          height: 20,
          fill: "currentColor",
          viewBox: "0 0 20 20",
          ...e,
          children: [
            (0, n.jsx)("path", {
              d: "M9.995 12.315c.489 0 .875.37.875.842 0 .473-.386.843-.875.843-.488 0-.875-.37-.875-.843 0-.472.387-.842.875-.842ZM10.001 6c.478 0 .778.295.778.79 0 .042 0 .107-.006.16l-.08 3.716c-.016.456-.252.725-.698.725-.445 0-.681-.269-.692-.725L9.217 6.95c0-.053-.006-.118-.006-.16 0-.495.307-.79.79-.79Z",
            }),
            (0, n.jsx)("path", {
              fillRule: "evenodd",
              d: "M10 2.085a7.915 7.915 0 1 1 0 15.83 7.915 7.915 0 0 1 0-15.83Zm0 1.33a6.585 6.585 0 1 0 0 13.17 6.585 6.585 0 0 0 0-13.17Z",
              clipRule: "evenodd",
            }),
          ],
        })))
  },
  cNwK(e, t, i) {
    var n = i("Qgfj")
    i.d(
      t,
      {},
      {
        N: function (e) {
          switch (e) {
            case "macOS":
              return (0, n.zR)({
                id: "downloads.popover.showInFinder",
                defaultMessage: "Show in Finder",
                description: "Action that reveals a downloaded file in Finder",
              })
            case "windows":
              return (0, n.zR)({
                id: "downloads.popover.showInFileExplorer",
                defaultMessage: "Show in File Explorer",
                description: "Action that reveals a downloaded file in File Explorer",
              })
            case "linux":
              return (0, n.zR)({
                id: "downloads.popover.showInFileManager",
                defaultMessage: "Show in File Manager",
                description: "Action that reveals a downloaded file in the system file manager",
              })
          }
        },
      },
    )
  },
  fOJT(e, t, i) {
    var n = i("vdpW"),
      l = i("c94E"),
      o = i("KExM"),
      s = i("bnxy")
    function r(e, { conversationId: t, fallback: i, hostId: a, path: d }) {
      let c = e.value
      if ("local-thread" !== c.routeKind || c.conversationId !== t || (null != c.hostId && c.hostId !== a)) return
      let h = { hostId: a, threadId: c.conversationId },
        u = e.get(n.M, h)
      if (null != u) {
        if (!0 !== e.get(n.uI, h)) {
          let t = e.get(n._t, h)
          if (t?.at(-1)?.type !== "content") return
          let i = t[t.findLastIndex((e) => "gap" === e.type) + 1]
          if (i?.type !== "content") return
          let l = u.findIndex((e) => e.entityKey === i.value)
          if (l < 0) return
          u = u.slice(l)
        }
        for (let t = u.length - 1; t >= 0; t -= 1) {
          let r = (0, n.od)(e, u[t])
          if (r?.status !== "completed" || r.itemsPagination?.hasLoadedOldest === !1) break
          let a = (0, o.x6)(r)
          if (![...a.outputFilePaths, ...a.editedFilePaths].some((e) => (0, s.y7)((0, s.b0)(r.params.cwd ?? "", e), d)))
            continue
          if (null == r.turnId) break
          let c = i?.turnId === r.turnId ? i : void 0
          return {
            turnId: r.turnId,
            inputMessageId: (0, l.yR)(r) ?? c?.inputMessageId ?? null,
            messageId: (0, l.Sv)(r) ?? c?.messageId ?? null,
          }
        }
      }
    }
    i.d(
      t,
      {},
      {
        g: r,
        t: function (e, { hostId: t, originatingTurn: i, path: n, threadId: l }) {
          let o = e.value,
            s = "local-thread" === o.routeKind && o.conversationId === l ? o.conversationId : null,
            a = null == s ? void 0 : r(e, { conversationId: s, fallback: i, hostId: t, path: n })
          return {
            threadId: s,
            turnId: a?.turnId ?? null,
            inputMessageId: a?.inputMessageId ?? null,
            messageId: a?.messageId ?? null,
          }
        },
      },
    )
  },
  d9FS(e, t, i) {
    var n = i("ABep"),
      l = i("QosV"),
      o = i("iRMi"),
      s = i("cE8H"),
      r = i("zTeN"),
      a = i("DBCl"),
      d = i("zd8w"),
      c = i("Wf1j"),
      h = i("oyxz"),
      u = i("cNwK"),
      f = i("dbK8"),
      p = i("yxN2"),
      m = i("wjyJ"),
      g = i("zvi0"),
      v = i("Sm6l"),
      y = i("AxFa"),
      x = i("bqtn"),
      S = i("Ot7V"),
      w = i("bVeK"),
      b = i("UxN3"),
      C = i("SGsN"),
      E = i("xrWq"),
      I = i("OFFK"),
      R = i("Igf5"),
      T = i("koMX"),
      k = i("zbYw"),
      M = i("OTo8"),
      A = i("wwME"),
      P = i("kN4l"),
      O = i("SpQB"),
      j = i("GaA7"),
      L = i("q77y"),
      F = i("OWtl"),
      D = i("Oj9r"),
      H = i("kfGJ"),
      _ = i("hZax"),
      N = i("bnxy"),
      B = i("j9wQ"),
      V = i("YTYy"),
      z = i("fOJT"),
      U = i("w7Qu"),
      K = i("bmU4"),
      $ = i("juvz"),
      W = i("vgjw"),
      q = i("O4Tw"),
      G = i("N5i8")
    function Q(e) {
      let t,
        i,
        S,
        T,
        k,
        M,
        L,
        V,
        z,
        G,
        Q,
        et,
        ei,
        en,
        el,
        eo,
        es,
        er,
        ea,
        ed,
        ec,
        eh,
        eu,
        ef = (0, l.c)(185),
        {
          analyticsContext: ep,
          artifactKind: em,
          canExportPdf: eg,
          children: ev,
          cwd: ey,
          disabled: ex,
          editorMenuItems: eS,
          downloadAnalyticsMetadata: ew,
          downloadId: eb,
          downloadMenuItems: eC,
          downloadPending: eE,
          environmentId: eI,
          exportFile: eR,
          fileActionAnalytics: eT,
          getAnalyticsContext: ek,
          hostId: eM,
          isDirectory: eA,
          libraryBreadcrumb: eP,
          tooltipBreadcrumb: eO,
          onDownload: ej,
          onDownloadAttempt: eL,
          onBeforeFileAction: eF,
          onBeforeOpen: eD,
          getCurrentFile: eH,
          readUploadFile: e_,
          path: eN,
          tabId: eB,
          persistPreferredTarget: eV,
          showDownloadAction: ez,
          showLabel: eU,
          title: eK,
          variant: e$,
          renderTitleMenu: eW,
          renderMenuItems: eq,
          open: eG,
          onOpenChange: eQ,
        } = e,
        eY = void 0 === ey ? null : ey,
        eZ = void 0 !== eA && eA,
        eX = void 0 !== eV && eV,
        eJ = void 0 !== eU && eU,
        e0 = void 0 === e$ ? "default" : e$,
        e1 = (0, r.gh)(F.u),
        e2 = (0, r.gh)(D.GD),
        e3 = (0, d.use)(q.l),
        e4 = (0, d.useId)(),
        e5 = eb ?? e4
      ef[0] !== e5 ? ((t = { mutationKey: ["artifact-download", e5] }), (ef[0] = e5), (ef[1] = t)) : (t = ef[1])
      let e7 = (0, s.l)(t) > 0,
        { platform: e8 } = (0, A.V)(),
        e6 = (0, r.Ul)(E._),
        e9 = (0, c.A)(),
        te = (0, H.Qz)(eM),
        tt = eM === a.iwv,
        [ti, tn] = (0, d.useState)(!1),
        [tl, to] = (0, d.useState)(!1),
        ts = eG ?? tl
      ef[2] !== eG || ef[3] !== eQ
        ? ((i = (e) => {
            ;(null == eG && to(e), eQ?.(e))
          }),
          (ef[2] = eG),
          (ef[3] = eQ),
          (ef[4] = i))
        : (i = ef[4])
      let tr = i,
        [ta, td] = (0, d.useState)(!1)
      ef[5] !== eM
        ? ((S = { hostId: eM, oauthReferrer: "google_drive_export" }), (ef[5] = eM), (ef[6] = S))
        : (S = ef[6])
      let {
        clearConnectingApp: tc,
        connectingApp: th,
        handleAppConnectOAuthStarted: tu,
        handleConnectApp: tf,
      } = (0, p.t)(S)
      ef[7] !== eH
        ? ((T = null == eH ? void 0 : async () => (await eH()).path), (ef[7] = eH), (ef[8] = T))
        : (T = ef[8])
      let tp = T
      ef[9] !== eY || ef[10] !== tp || ef[11] !== eM || ef[12] !== eN
        ? ((k = { cwd: eY, getOpenPath: tp, hostId: eM, openPath: eN }),
          (ef[9] = eY),
          (ef[10] = tp),
          (ef[11] = eM),
          (ef[12] = eN),
          (ef[13] = k))
        : (k = ef[13])
      let {
        canLoadTargets: tm,
        preferredTarget: tg,
        targets: tv,
        availableTargets: ty,
        mode: tx,
        hasLoadedTargets: tS,
        isLoadingTargets: tw,
        open: tb,
      } = (0, O.dI)(k)
      ef[14] !== eN ? ((M = (0, N.Q0)(eN)), (ef[14] = eN), (ef[15] = M)) : (M = ef[15])
      let tC = M,
        tE = (0, U.Yg)(eN),
        tI = eT
      if (void 0 === tI && ("pptx" === tE || "xlsx" === tE || "csv" === tE || "tsv" === tE)) {
        let e
        ;(ef[16] !== ep?.threadId || ef[17] !== ew?.threadId || ef[18] !== e2
          ? ((e = ew?.threadId ?? ep?.threadId ?? (0, D.Qm)(e2.value)),
            (ef[16] = ep?.threadId),
            (ef[17] = ew?.threadId),
            (ef[18] = e2),
            (ef[19] = e))
          : (e = ef[19]),
          (tI = { backing: "file", sourceFormat: tE, threadId: e, turnId: ew?.originatingTurn?.turnId ?? ep?.turnId }))
      }
      ef[20] !== eY || ef[21] !== eN
        ? ((L = eY ?? (0, N.ZS)(eN)), (ef[20] = eY), (ef[21] = eN), (ef[22] = L))
        : (L = ef[22])
      let tR = L,
        tT = (0, P.Nd)({ targets: tv, availableTargets: ty, includeHiddenTargets: !0, mode: tx }),
        tk = tt ? null : (0, P.JJ)({ preferredTarget: tg, targets: tv, availableTargets: ty, mode: tx }),
        tM = tT.filter(X)
      ef[23] !== tv ? ((V = tv.find(Z)), (ef[23] = tv), (ef[24] = V)) : (V = ef[24])
      let tA = V,
        tP = "title" === e0 || "download" === e0 ? "base" : "sm",
        tO = (0, _.Zj)("2546594521")
      ef[25] !== eZ || ef[26] !== eN
        ? ((z = eZ ? null : (0, m.QN)(eN)), (ef[25] = eZ), (ef[26] = eN), (ef[27] = z))
        : (z = ef[27])
      let tj = z,
        tL = !tO && null != tj
      ef[28] !== e9
        ? ((G = e9.formatMessage({
            id: "artifactTab.preview.open",
            defaultMessage: "Open",
            description: "Button label that opens an artifact",
          })),
          (ef[28] = e9),
          (ef[29] = G))
        : (G = ef[29])
      let tF = G
      ef[30] !== eF
        ? ((Q = (e) => {
            let t = eF?.()
            null == t
              ? e()
              : Promise.resolve(t).then((t) => {
                  !1 !== t && e()
                }, Y)
          }),
          (ef[30] = eF),
          (ef[31] = Q))
        : (Q = ef[31])
      let tD = Q
      ef[32] !== eH ||
      ef[33] !== eM ||
      ef[34] !== e9 ||
      ef[35] !== eD ||
      ef[36] !== eN ||
      ef[37] !== tD ||
      ef[38] !== e1
        ? ((et = (e) => {
            tD(() => {
              let t = () => {
                  null == eH
                    ? e({ hostId: eM, path: eN })
                    : eH()
                        .then(e)
                        .catch(() => {
                          e1.get(C.Id).danger(
                            e9.formatMessage({
                              id: "artifactTab.preview.exportFailure",
                              defaultMessage: "Could not export artifact",
                              description: "Error shown when preparing the current artifact for another app fails",
                            }),
                            { errorAnalytics: { toastId: "artifactTab.preview.exportFailure" } },
                          )
                        })
                },
                i = eD?.()
              null == i ? t() : Promise.resolve(i).then(t, t)
            })
          }),
          (ef[32] = eH),
          (ef[33] = eM),
          (ef[34] = e9),
          (ef[35] = eD),
          (ef[36] = eN),
          (ef[37] = tD),
          (ef[38] = e1),
          (ef[39] = et))
        : (et = ef[39])
      let tH = et
      ef[40] !== eY || ef[41] !== eI || ef[42] !== tH || ef[43] !== e2 || ef[44] !== e1
        ? ((ei = () => {
            tH((e) => {
              e1.get(R.K).mutate({
                cwd: eY,
                conversationId: (0, D.Qm)(e2.value) ?? void 0,
                environmentId: eI,
                hostId: e.hostId,
                path: e.path,
                target: "fileManager",
              })
            })
          }),
          (ef[40] = eY),
          (ef[41] = eI),
          (ef[42] = tH),
          (ef[43] = e2),
          (ef[44] = e1),
          (ef[45] = ei))
        : (ei = ef[45])
      let t_ = ei,
        tN = (e, t) => {
          ;("fileManager" !== e.target && (0, K.U9)(e2, tI, "open-in-app", { app: (0, K.Rn)(e) }),
            tH((i) => {
              tb(e.target, { appPath: e.appPath, environmentId: eI, path: i.path, persistPreferred: t && (0, P.tj)(e) })
            }))
        }
      ef[46] === Symbol.for("react.memo_cache_sentinel")
        ? ((en = () => {
            tn(!0)
          }),
          (ef[46] = en))
        : (en = ef[46])
      let tB = en
      ef[47] !== tm ||
      ef[48] !== eY ||
      ef[49] !== eH ||
      ef[50] !== tp ||
      ef[51] !== tS ||
      ef[52] !== eM ||
      ef[53] !== tt ||
      ef[54] !== tw ||
      ef[55] !== eN ||
      ef[56] !== ti ||
      ef[57] !== e0
        ? ((el =
            "title" !== e0 && !tt && tm && (ti || (null == eH && (!tS || tw)))
              ? (0, n.jsx)(O.Zn, { cwd: eY, getOpenPath: tp, delayMs: 150 * !ti, hostId: eM, openPath: eN })
              : null),
          (ef[47] = tm),
          (ef[48] = eY),
          (ef[49] = eH),
          (ef[50] = tp),
          (ef[51] = tS),
          (ef[52] = eM),
          (ef[53] = tt),
          (ef[54] = tw),
          (ef[55] = eN),
          (ef[56] = ti),
          (ef[57] = e0),
          (ef[58] = el))
        : (el = ef[58])
      let tV = el,
        tz = tm && ti && tw,
        tU = tz || tM.length > 0 || tL,
        tK =
          null == tk
            ? tF
            : e9.formatMessage(
                {
                  id: "artifactTab.preview.openPrimaryTarget.tooltip",
                  defaultMessage: "Open in {target}",
                  description: "Tooltip for opening an artifact in the primary app",
                },
                { target: tk.label },
              )
      ef[59] !== e9
        ? ((eo = e9.formatMessage({
            id: "artifactTab.preview.openOptions",
            defaultMessage: "Open options",
            description: "Tooltip and accessible label for opening the artifact open options menu",
          })),
          (ef[59] = e9),
          (ef[60] = eo))
        : (eo = ef[60])
      let t$ = eo
      ef[61] !== eY ||
      ef[62] !== ew ||
      ef[63] !== eI ||
      ef[64] !== te ||
      ef[65] !== eM ||
      ef[66] !== e9 ||
      ef[67] !== tt ||
      ef[68] !== ej ||
      ef[69] !== eN ||
      ef[70] !== e2 ||
      ef[71] !== e1
        ? ((es =
            ej ??
            (tt
              ? async () => {
                  await (0, I.S)(
                    e1,
                    (0, I.x)(e1, {
                      conversationId: (0, D.Qm)(e2.value) ?? void 0,
                      cwd: eY,
                      environmentId: eI,
                      path: eN,
                    }),
                  )
                }
              : void 0) ??
            (j.appServices?.workspaceFiles?.saveCopy == null
              ? void 0
              : () => {
                  null != ew
                    ? ee({
                        scope: e2,
                        analyticsMetadata: ew,
                        downloadFailureLabel: e9.formatMessage({
                          id: "artifactTab.preview.downloadFailure",
                          defaultMessage: "Could not download artifact",
                          description: "Error shown when an artifact download fails",
                        }),
                        hostId: eM,
                        hostKind: te.kind,
                        path: eN,
                      })
                    : j.appServices.workspaceFiles?.saveCopy?.({ hostId: eM, path: eN }).catch(() => {
                        e1.get(C.Id).danger(
                          e9.formatMessage({
                            id: "artifactTab.preview.downloadFailure",
                            defaultMessage: "Could not download artifact",
                            description: "Error shown when an artifact download fails",
                          }),
                          { errorAnalytics: { toastId: "artifactTab.preview.downloadFailure" } },
                        )
                      })
                })),
          (ef[61] = eY),
          (ef[62] = ew),
          (ef[63] = eI),
          (ef[64] = te),
          (ef[65] = eM),
          (ef[66] = e9),
          (ef[67] = tt),
          (ef[68] = ej),
          (ef[69] = eN),
          (ef[70] = e2),
          (ef[71] = e1),
          (ef[72] = es))
        : (es = ef[72])
      let tW = es,
        tq =
          eZ || null == tW
            ? void 0
            : () => {
                ;((0, K.U9)(e2, tI, tI?.backing === "file" ? "download" : "export", {
                  format: "pptx" === tE || "xlsx" === tE || "csv" === tE || "tsv" === tE ? tE : void 0,
                }),
                  eL?.(),
                  tD(() => {
                    Promise.resolve(tW({ hostId: eM, path: eN })).catch(() => {
                      e1.get(C.Id).danger(
                        e9.formatMessage({
                          id: "artifactTab.preview.downloadFailure",
                          defaultMessage: "Could not download artifact",
                          description: "Error shown when an artifact download fails",
                        }),
                        { errorAnalytics: { toastId: "artifactTab.preview.downloadFailure" } },
                      )
                    })
                  }))
              },
        tG =
          null != tj
            ? (0, n.jsx)(g.Pm, {
                labelVariant: "download" === e0 ? "app" : "action",
                analyticsClickSource:
                  o.CodexGoogleWorkspaceResourceClickSource
                    .CODEX_GOOGLE_WORKSPACE_RESOURCE_CLICK_SOURCE_ARTIFACT_PREVIEW_EXPORT_MENU,
                analyticsContext: ep,
                getAnalyticsContext: ek,
                handleConnectApp: tf,
                hostId: eM,
                iconSize: tP,
                isOpening: ta,
                keepOpenWhileOpening: !0,
                onCloseDropdown: () => {
                  tr(!1)
                },
                onOpeningChange: td,
                onActivate: () => {
                  ;(0, K.U9)(e2, tI, "open-in-app", {
                    app:
                      "presentation" === tj
                        ? o.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_GOOGLE_SLIDES
                        : o.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_GOOGLE_SHEETS,
                  })
                },
                onBeforeFileRead: eF,
                ...(null == e_ ? { path: eN } : { readUploadFile: e_, sourceId: eN, targetType: tj }),
                title: tC,
              })
            : null,
        tQ = tt
          ? (0, n.jsx)(x.ms.Item, { onSelect: t_, children: tF })
          : (0, n.jsxs)(n.Fragment, {
              children: [
                "download" === e0 ? tG : null,
                !eZ && null == eH && e6?.({ hostId: eM, path: eN, tabId: eB, withPreparedFile: tH }),
                tM.map((e) =>
                  (0, n.jsx)(
                    x.ms.Item,
                    {
                      disabled: ex || e7 || ta,
                      leftIcon: (0, n.jsx)(B.pE, {
                        size: tP,
                        children: (0, n.jsx)("img", { alt: "", src: e.icon, className: "size-full" }),
                      }),
                      onSelect: () => {
                        ;(tN(e, eX), tr(!1))
                      },
                      children: e.label,
                    },
                    e.id,
                  ),
                ),
                tz
                  ? (0, n.jsx)(x.ms.Message, {
                      compact: !0,
                      children: (0, n.jsx)(h.A, {
                        id: "artifactTab.preview.loadingAvailableApps",
                        defaultMessage: "Loading available apps…",
                        description: "Dropdown item shown while loading apps that can open an artifact",
                      }),
                    })
                  : null,
                "download" === e0 ? null : tG,
                null == e_ || tm
                  ? (0, n.jsxs)(n.Fragment, {
                      children: [
                        tU && "download" !== e0 ? (0, n.jsx)(x.ms.Separator, {}) : null,
                        (0, n.jsx)(x.ms.Item, {
                          disabled: ex || e7 || ta,
                          leftIcon:
                            "download" === e0
                              ? (0, n.jsx)(B.pE, {
                                  size: tP,
                                  children:
                                    null == tA
                                      ? (0, n.jsx)(b.b5, { icon: { 16: w.efV, 20: w.nex } })
                                      : (0, n.jsx)("img", { alt: "", src: tA.icon, className: "size-full" }),
                                })
                              : void 0,
                          onSelect: () => {
                            ;(t_(), tr(!1))
                          },
                          children:
                            "download" === e0
                              ? (0, n.jsx)(h.A, { ...(0, u.N)(e8) })
                              : (0, n.jsx)(h.A, {
                                  id: "artifactTab.preview.openInFolder",
                                  defaultMessage: "Open in folder",
                                  description: "Dropdown item for revealing an artifact in the system file manager",
                                }),
                        }),
                      ],
                    })
                  : null,
                null == eH && ti && null != tR
                  ? (0, n.jsx)(J, { onSelect: () => tr(!1), cwd: tR, hostId: eM, path: eN })
                  : null,
              ],
            }),
        tY = null
      if (null != tq) {
        let e
        ;(ef[73] !== ex || ef[74] !== tC || ef[75] !== tq || ef[76] !== e0
          ? ((e =
              "download" === e0
                ? (0, n.jsx)($.n, { fileName: tC, disabled: ex, onSelect: tq })
                : (0, n.jsx)(x.ms.Item, {
                    disabled: ex,
                    onSelect: tq,
                    children: (0, n.jsx)(h.A, {
                      id: "artifactTab.preview.downloadCopy",
                      defaultMessage: "Save as…",
                      description: "Dropdown item for saving an artifact to a user-selected location",
                    }),
                  })),
            (ef[73] = ex),
            (ef[74] = tC),
            (ef[75] = tq),
            (ef[76] = e0),
            (ef[77] = e))
          : (e = ef[77]),
          (tY = e))
      }
      tC.toLowerCase().endsWith(".pptx") ? (er = "pptx") : tC.toLowerCase().endsWith(".xlsx") && (er = "xlsx")
      let tZ = "download" === e0 && null == eC && null != er && void 0 !== eR && !eg && !tt && null != eH && !tm && !tL
      if ("download" === e0 && null != er && void 0 !== eR) {
        let e,
          t,
          i,
          l,
          o = tZ ? "button" : "items",
          s = ex || ta
        ;(ef[78] !== tI || ef[79] !== e2
          ? ((e = (e) => {
              ;(0, K.U9)(e2, tI, "export", { format: e })
            }),
            (ef[78] = tI),
            (ef[79] = e2),
            (ef[80] = e))
          : (e = ef[80]),
          ef[81] !== eR || ef[82] !== tC || ef[83] !== eL
            ? ((t =
                null == eR
                  ? null
                  : async (e) => (
                      eL?.(),
                      { bytes: await eR(e), fileName: "office" === e ? tC : tC.replace(/\.(pptx|xlsx)$/i, ".pdf") }
                    )),
              (ef[81] = eR),
              (ef[82] = tC),
              (ef[83] = eL),
              (ef[84] = t))
            : (t = ef[84]),
          ef[85] !== ew || ef[86] !== te || ef[87] !== eM || ef[88] !== e9 || ef[89] !== eN || ef[90] !== e2
            ? ((i =
                null == ew
                  ? void 0
                  : (e) =>
                      ee({
                        scope: e2,
                        analyticsMetadata: ew,
                        downloadFailureLabel: e9.formatMessage({
                          id: "artifactTab.preview.downloadFailure",
                          defaultMessage: "Could not download artifact",
                          description: "Error shown when an artifact download fails",
                        }),
                        file: e,
                        hostId: eM,
                        hostKind: te.kind,
                        path: eN,
                      })),
              (ef[85] = ew),
              (ef[86] = te),
              (ef[87] = eM),
              (ef[88] = e9),
              (ef[89] = eN),
              (ef[90] = e2),
              (ef[91] = i))
            : (i = ef[91]),
          ef[92] !== eg ||
          ef[93] !== er ||
          ef[94] !== e5 ||
          ef[95] !== o ||
          ef[96] !== s ||
          ef[97] !== e ||
          ef[98] !== t ||
          ef[99] !== i
            ? ((l = (0, n.jsx)(W.Q, {
                variant: o,
                canExportPdf: eg,
                disabled: s,
                downloadId: e5,
                format: er,
                onDownloadClick: e,
                exportFile: t,
                saveFile: i,
              })),
              (ef[92] = eg),
              (ef[93] = er),
              (ef[94] = e5),
              (ef[95] = o),
              (ef[96] = s),
              (ef[97] = e),
              (ef[98] = t),
              (ef[99] = i),
              (ef[100] = l))
            : (l = ef[100]),
          (tY = l))
      }
      let tX = void 0 === ez || ez ? tY : null
      ef[101] !== ev || ef[102] !== tQ || ef[103] !== tX
        ? ((ea = (0, n.jsxs)(n.Fragment, { children: [tQ, tX, ev] })),
          (ef[101] = ev),
          (ef[102] = tQ),
          (ef[103] = tX),
          (ef[104] = ea))
        : (ea = ef[104])
      let tJ = ea
      ef[105] !== eq || ef[106] !== tJ
        ? ((ed = null == eq ? tJ : eq(tJ)), (ef[105] = eq), (ef[106] = tJ), (ef[107] = ed))
        : (ed = ef[107])
      let t0 = ed
      if (tZ && null != tY) ec = tY
      else if ("download" === e0) {
        let e,
          t,
          i = eE || e7 || ta
        ef[108] !== tB || ef[109] !== tr
          ? ((e = (e) => {
              ;(tr(e), e && tB())
            }),
            (ef[108] = tB),
            (ef[109] = tr),
            (ef[110] = e))
          : (e = ef[110])
        let l = eC ?? tY,
          o = tt || null == eH || tm || tL ? tQ : void 0
        ;(ef[111] !== ex || ef[112] !== ts || ef[113] !== i || ef[114] !== e || ef[115] !== l || ef[116] !== o
          ? ((t = (0, n.jsx)($.E, {
              disabled: ex,
              pending: i,
              open: ts,
              onOpenChange: e,
              downloadItems: l,
              openItems: o,
            })),
            (ef[111] = ex),
            (ef[112] = ts),
            (ef[113] = i),
            (ef[114] = e),
            (ef[115] = l),
            (ef[116] = o),
            (ef[117] = t))
          : (t = ef[117]),
          (ec = t))
      } else if ("title" === e0) {
        let e,
          t,
          i = eK ?? tC,
          l = null == e3
        if (
          (ef[118] !== ev || ef[119] !== eq
            ? ((e = null == eq ? ev : eq(ev)), (ef[118] = ev), (ef[119] = eq), (ef[120] = e))
            : (e = ef[120]),
          ef[121] !== em ||
            ef[122] !== eS ||
            ef[123] !== tC ||
            ef[124] !== ts ||
            ef[125] !== eP ||
            ef[126] !== eW ||
            ef[127] !== tr ||
            ef[128] !== i ||
            ef[129] !== l ||
            ef[130] !== e ||
            ef[131] !== eO)
        ) {
          let o = {
            artifactKind: em,
            editorMenuItems: eS,
            fileName: tC,
            libraryBreadcrumb: eP,
            tooltipBreadcrumb: eO,
            title: i,
            showTitle: l,
            open: ts,
            onOpenChange: tr,
            children: e,
          }
          ;((t = null != eW ? eW(o) : (0, n.jsx)(B.jH, { ...o })),
            (ef[121] = em),
            (ef[122] = eS),
            (ef[123] = tC),
            (ef[124] = ts),
            (ef[125] = eP),
            (ef[126] = eW),
            (ef[127] = tr),
            (ef[128] = i),
            (ef[129] = l),
            (ef[130] = e),
            (ef[131] = eO),
            (ef[132] = t))
        } else t = ef[132]
        ec = t
      } else if ("menu" === e0) {
        let e, t, i, l, o
        ;(ef[133] !== tB || ef[134] !== tr
          ? ((e = (e) => {
              ;(tr(e), e && tB())
            }),
            (ef[133] = tB),
            (ef[134] = tr),
            (ef[135] = e))
          : (e = ef[135]),
          ef[136] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, n.jsx)(h.A, {
                id: "artifactTab.preview.openIn",
                defaultMessage: "Open in",
                description: "Button that opens the menu of apps and export actions for an artifact",
              })),
              (i = (0, n.jsx)(w.HIf, {})),
              (ef[136] = t),
              (ef[137] = i))
            : ((t = ef[136]), (i = ef[137])),
          ef[138] !== ex || ef[139] !== tB
            ? ((l = (0, n.jsxs)(v.$, {
                className: "pointer-events-auto shrink-0",
                color: "outline",
                size: "toolbar",
                disabled: ex,
                onFocus: tB,
                onMouseEnter: tB,
                children: [t, i],
              })),
              (ef[138] = ex),
              (ef[139] = tB),
              (ef[140] = l))
            : (l = ef[140]),
          ef[141] !== ts || ef[142] !== t0 || ef[143] !== e || ef[144] !== l
            ? ((o = (0, n.jsx)(x.Ab, {
                align: "end",
                surface: "opaque",
                open: ts,
                onOpenChange: e,
                triggerButton: l,
                children: t0,
              })),
              (ef[141] = ts),
              (ef[142] = t0),
              (ef[143] = e),
              (ef[144] = l),
              (ef[145] = o))
            : (o = ef[145]),
          (ec = o))
      } else {
        let e,
          t,
          i,
          l,
          o,
          s,
          r = "toolbar"
        "imageTools" === e0 ? (r = "imageToolbar") : "compact" === e0 && (r = "composerSm")
        let a = "viewer" === e0 ? B.yJ : y._,
          d = "default" === e0 ? "outline" : "ghostActive",
          c = null == tk ? tF : tK
        ;(ef[146] !== tB || ef[147] !== tr
          ? ((e = (e) => {
              ;(tr(e), e && tB())
            }),
            (ef[146] = tB),
            (ef[147] = tr),
            (ef[148] = e))
          : (e = ef[148]),
          ef[149] !== t_ || ef[150] !== tN || ef[151] !== tk
            ? ((t = () => {
                null == tk ? t_() : tN(tk, !1)
              }),
              (ef[149] = t_),
              (ef[150] = tN),
              (ef[151] = tk),
              (ef[152] = t))
            : (t = ef[152]),
          ef[153] !== tk
            ? ((i = null == tk ? null : (0, n.jsx)("img", { alt: "", src: tk.icon, className: "icon-sm" })),
              (ef[153] = tk),
              (ef[154] = i))
            : (i = ef[154]),
          ef[155] !== tk || ef[156] !== eJ
            ? ((l =
                null == tk || eJ
                  ? (0, n.jsx)("span", {
                      className: "whitespace-nowrap",
                      children: (0, n.jsx)(h.A, {
                        id: "artifactTab.preview.open",
                        defaultMessage: "Open",
                        description: "Button label that opens an artifact",
                      }),
                    })
                  : null),
              (ef[155] = tk),
              (ef[156] = eJ),
              (ef[157] = l))
            : (l = ef[157]),
          ef[158] !== i || ef[159] !== l
            ? ((o = (0, n.jsxs)("span", { className: "flex items-center gap-1.5", children: [i, l] })),
              (ef[158] = i),
              (ef[159] = l),
              (ef[160] = o))
            : (o = ef[160]),
          ef[161] !== a ||
          ef[162] !== r ||
          ef[163] !== ex ||
          ef[164] !== ts ||
          ef[165] !== tB ||
          ef[166] !== t0 ||
          ef[167] !== t$ ||
          ef[168] !== tK ||
          ef[169] !== d ||
          ef[170] !== c ||
          ef[171] !== e ||
          ef[172] !== t ||
          ef[173] !== o
            ? ((s = (0, n.jsx)(a, {
                color: d,
                size: r,
                className: "shrink-0",
                disabled: ex,
                dropdownOpen: ts,
                dropdownAlign: "end",
                dropdownContentClassName: "pt-2",
                primaryAriaLabel: c,
                secondaryAriaLabel: t$,
                secondaryTooltipContent: t$,
                tooltipContent: tK,
                dropdownContent: t0,
                onFocus: tB,
                onMouseEnter: tB,
                onDropdownOpenChange: e,
                onClick: t,
                children: o,
              })),
              (ef[161] = a),
              (ef[162] = r),
              (ef[163] = ex),
              (ef[164] = ts),
              (ef[165] = tB),
              (ef[166] = t0),
              (ef[167] = t$),
              (ef[168] = tK),
              (ef[169] = d),
              (ef[170] = c),
              (ef[171] = e),
              (ef[172] = t),
              (ef[173] = o),
              (ef[174] = s))
            : (s = ef[174]),
          (ec = s))
      }
      return eZ && (tt || (null != eI && (0, f.C)(eM)))
        ? null
        : (ef[175] !== tL || ef[176] !== tc || ef[177] !== th || ef[178] !== tu || ef[179] !== eM
            ? ((eh =
                tL && null != th ? (0, n.jsx)(g.Dl, { app: th, hostId: eM, onClose: tc, onOAuthStarted: tu }) : null),
              (ef[175] = tL),
              (ef[176] = tc),
              (ef[177] = th),
              (ef[178] = tu),
              (ef[179] = eM),
              (ef[180] = eh))
            : (eh = ef[180]),
          ef[181] !== ec || ef[182] !== eh || ef[183] !== tV
            ? ((eu = (0, n.jsxs)(n.Fragment, { children: [tV, ec, eh] })),
              (ef[181] = ec),
              (ef[182] = eh),
              (ef[183] = tV),
              (ef[184] = eu))
            : (eu = ef[184]),
          eu)
    }
    function Y() {}
    function Z(e) {
      return "fileManager" === e.target
    }
    function X(e) {
      return "fileManager" !== e.target
    }
    function J(e) {
      let t,
        i,
        o,
        s,
        a,
        d,
        c = (0, l.c)(17),
        { onSelect: u, cwd: f, hostId: p, path: m } = e,
        g = (0, H.Qz)(p),
        { data: v } = (0, M.v)(f, g, "artifact_preview")
      ;(c[0] !== f ? ((t = [f]), (c[0] = f), (c[1] = t)) : (t = c[1]),
        c[2] !== p || c[3] !== t
          ? ((i = { params: { dirs: t, hostId: p }, source: "artifact_preview" }), (c[2] = p), (c[3] = t), (c[4] = i))
          : (i = c[4]))
      let { data: y } = (0, r._U)(T.gitOriginsQuery$, i),
        w = y?.origins[0]
      c[5] !== v || c[6] !== f || c[7] !== w || c[8] !== m
        ? ((o = null == w ? null : (0, k.H)({ branch: v, cwd: f, path: m, remoteUrl: w.originUrl, root: w.root })),
          (c[5] = v),
          (c[6] = f),
          (c[7] = w),
          (c[8] = m),
          (c[9] = o))
        : (o = c[9])
      let b = o
      return null == b
        ? null
        : (c[10] !== b || c[11] !== p || c[12] !== u
            ? ((s = () => {
                ;((0, S.E0)({ href: b, initiator: "side_panel_menu", originHostId: p }), u())
              }),
              (c[10] = b),
              (c[11] = p),
              (c[12] = u),
              (c[13] = s))
            : (s = c[13]),
          c[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, n.jsx)(h.A, {
                id: "artifactTab.preview.openInGitHub",
                defaultMessage: "Open in GitHub",
                description: "Dropdown item for opening an artifact in its GitHub repository",
              })),
              (c[14] = a))
            : (a = c[14]),
          c[15] !== s
            ? ((d = (0, n.jsx)(x.ms.Item, { onSelect: s, children: a })), (c[15] = s), (c[16] = d))
            : (d = c[16]),
          d)
    }
    async function ee({
      analyticsMetadata: e,
      downloadFailureLabel: t,
      file: i,
      hostId: n,
      hostKind: l,
      onBeforeDownload: s,
      path: r,
      scope: a,
    }) {
      let d = a.value,
        c =
          "local-thread" === d.routeKind
            ? (0, z.g)(a, { conversationId: d.conversationId, fallback: e.originatingTurn, hostId: n, path: r })
            : void 0,
        h = { ...e, originatingTurn: c },
        u = globalThis.crypto.randomUUID()
      ;(0, V.R1)(a, h, {
        hostKind: l,
        operationId: u,
        outcome: o.CodexArtifactDownloadOutcome.CODEX_ARTIFACT_DOWNLOAD_OUTCOME_ATTEMPT,
      })
      try {
        if (null != s && (await s()) === !1)
          return void (0, V.R1)(a, h, {
            hostKind: l,
            operationId: u,
            outcome: o.CodexArtifactDownloadOutcome.CODEX_ARTIFACT_DOWNLOAD_OUTCOME_BLOCKED,
          })
        let e = j.appServices.workspaceFiles?.saveCopy?.(i ?? { hostId: n, path: r }),
          t = null == e ? void 0 : (await (0, L.P)(e)).path
        ;(0, V.R1)(a, h, {
          hostKind: l,
          operationId: u,
          outcome:
            null == t
              ? o.CodexArtifactDownloadOutcome.CODEX_ARTIFACT_DOWNLOAD_OUTCOME_CANCEL
              : o.CodexArtifactDownloadOutcome.CODEX_ARTIFACT_DOWNLOAD_OUTCOME_SUCCESS,
        })
      } catch {
        ;((0, V.R1)(a, h, {
          hostKind: l,
          operationId: u,
          outcome: o.CodexArtifactDownloadOutcome.CODEX_ARTIFACT_DOWNLOAD_OUTCOME_ERROR,
        }),
          a.get(C.Id).danger(t, { errorAnalytics: { toastId: "artifactPreviewHeader.saveArtifactCopyWithAnalytics" } }))
      }
    }
    i.d(
      t,
      { ie: () => G.i },
      {
        jT: Q,
        x: function (e) {
          let t,
            i,
            o,
            s,
            a = (0, l.c)(28),
            {
              analyticsMetadata: h,
              fileActionAnalytics: u,
              hostId: f,
              onBeforeDownload: p,
              onDownload: m,
              onDownloadAttempt: g,
              onBeforeOpen: v,
              analyticsContext: y,
              getAnalyticsContext: x,
              environmentId: S,
              tabId: w,
              path: b,
            } = e,
            E = (0, r.gh)(D.GD),
            I = (0, c.A)(),
            R = (0, H.Qz)(f),
            [T, k] = (0, d.useState)(!1)
          a[0] !== I
            ? ((t = I.formatMessage({
                id: "artifactTab.preview.downloadFailure",
                defaultMessage: "Could not download artifact",
                description: "Error shown when an artifact download fails",
              })),
              (a[0] = I),
              (a[1] = t))
            : (t = a[1])
          let M = t
          if (null == m && j.appServices?.workspaceFiles?.saveCopy == null) return null
          a[2] !== h ||
          a[3] !== M ||
          a[4] !== u ||
          a[5] !== R ||
          a[6] !== f ||
          a[7] !== p ||
          a[8] !== m ||
          a[9] !== g ||
          a[10] !== b ||
          a[11] !== E
            ? ((i = () => {
                let e = (0, U.Yg)(b)
                ;((0, K.U9)(E, u, "download", {
                  format: "pptx" === e || "xlsx" === e || "csv" === e || "tsv" === e ? e : void 0,
                }),
                  g?.(),
                  k(!0),
                  (async () => {
                    null != m
                      ? (null == p || (await p()) !== !1) && (await m({ hostId: f, path: b }))
                      : null != h &&
                        (await ee({
                          scope: E,
                          analyticsMetadata: h,
                          downloadFailureLabel: M,
                          hostId: f,
                          hostKind: R.kind,
                          onBeforeDownload: p,
                          path: b,
                        }))
                  })()
                    .catch(() => {
                      E.get(C.Id).danger(M, { errorAnalytics: { toastId: "artifactTab.preview.downloadFailure" } })
                    })
                    .finally(() => {
                      k(!1)
                    }))
              }),
              (a[2] = h),
              (a[3] = M),
              (a[4] = u),
              (a[5] = R),
              (a[6] = f),
              (a[7] = p),
              (a[8] = m),
              (a[9] = g),
              (a[10] = b),
              (a[11] = E),
              (a[12] = i))
            : (i = a[12])
          let A = i
          return (
            a[13] !== A || a[14] !== b
              ? ((o = (0, n.jsx)($.n, { fileName: b, onSelect: A })), (a[13] = A), (a[14] = b), (a[15] = o))
              : (o = a[15]),
            a[16] !== y ||
            a[17] !== S ||
            a[18] !== u ||
            a[19] !== x ||
            a[20] !== f ||
            a[21] !== T ||
            a[22] !== p ||
            a[23] !== v ||
            a[24] !== b ||
            a[25] !== o ||
            a[26] !== w
              ? ((s = (0, n.jsx)(Q, {
                  fileActionAnalytics: u,
                  hostId: f,
                  path: b,
                  variant: "download",
                  downloadPending: T,
                  onBeforeFileAction: p,
                  onBeforeOpen: v,
                  analyticsContext: y,
                  getAnalyticsContext: x,
                  environmentId: S,
                  tabId: w,
                  downloadMenuItems: o,
                })),
                (a[16] = y),
                (a[17] = S),
                (a[18] = u),
                (a[19] = x),
                (a[20] = f),
                (a[21] = T),
                (a[22] = p),
                (a[23] = v),
                (a[24] = b),
                (a[25] = o),
                (a[26] = w),
                (a[27] = s))
              : (s = a[27]),
            s
          )
        },
      },
    )
  },
  juvz(e, t, i) {
    var n = i("ABep"),
      l = i("QosV"),
      o = i("yvno"),
      s = i("slpy"),
      r = i("Wf1j"),
      a = i("oyxz"),
      d = i("bqtn"),
      c = i("bVeK"),
      h = i("RNul"),
      u = i("UxN3"),
      f = i("bWX0"),
      p = i("j9wQ")
    function m(e) {
      return (0, n.jsx)("span", { className: "text-secondary", children: e })
    }
    function g(e) {
      return (0, n.jsx)("span", { className: "text-secondary", children: e })
    }
    function v(e) {
      return (0, n.jsx)("span", { className: "text-secondary", children: e })
    }
    i.d(
      t,
      {},
      {
        E: function (e) {
          let t,
            i,
            o,
            f,
            m,
            g,
            v,
            y,
            x = (0, l.c)(29),
            { downloadItems: S, openItems: w, disabled: b, pending: C, open: E, onDownload: I, onOpenChange: R } = e,
            T = void 0 !== C && C,
            k = (0, r.A)()
          x[0] !== k
            ? ((t = k.formatMessage({
                id: "artifactViewer.download",
                defaultMessage: "Download",
                description: "Button for downloading an artifact from its viewer",
              })),
              (x[0] = k),
              (x[1] = t))
            : (t = x[1])
          let M = t,
            A = null == w ? I : void 0,
            P = b || T,
            O = E ? "selected" : "default"
          ;(x[2] !== T
            ? ((i = (e) => {
                T && e.preventDefault()
              }),
              (o = T
                ? (0, n.jsx)(h.y, { className: "icon-xs" })
                : (0, n.jsx)(u.b5, { icon: { 16: c.MxM, 20: c.vHO } })),
              (x[2] = T),
              (x[3] = i),
              (x[4] = o))
            : ((i = x[3]), (o = x[4])),
            x[5] !== A || x[6] !== M || x[7] !== T || x[8] !== P || x[9] !== O || x[10] !== i || x[11] !== o
              ? ((f = (0, n.jsx)(p.DW, {
                  uniform: !0,
                  "aria-label": M,
                  "aria-busy": T,
                  disabled: P,
                  variant: O,
                  onClick: A,
                  onPointerDown: i,
                  children: o,
                })),
                (x[5] = A),
                (x[6] = M),
                (x[7] = T),
                (x[8] = P),
                (x[9] = O),
                (x[10] = i),
                (x[11] = o),
                (x[12] = f))
              : (f = x[12]),
            x[13] !== M || x[14] !== E || x[15] !== f
              ? ((m = (0, n.jsx)(s.m, { content: M, disabled: E, children: f })),
                (x[13] = M),
                (x[14] = E),
                (x[15] = f),
                (x[16] = m))
              : (m = x[16]))
          let j = m
          return null != A
            ? j
            : (x[17] !== M
                ? ((g = (0, n.jsx)(d.ms.SectionLabel, { children: M })), (x[17] = M), (x[18] = g))
                : (g = x[18]),
              x[19] !== w
                ? ((v =
                    null == w
                      ? null
                      : (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)(d.ms.Separator, {}),
                            (0, n.jsx)(d.ms.SectionLabel, {
                              children: (0, n.jsx)(a.A, {
                                id: "artifactViewer.download.openIn",
                                defaultMessage: "Open in",
                                description: "Section of the download menu listing apps that can open the file",
                              }),
                            }),
                            w,
                          ],
                        })),
                  (x[19] = w),
                  (x[20] = v))
                : (v = x[20]),
              x[21] !== j || x[22] !== b || x[23] !== S || x[24] !== R || x[25] !== E || x[26] !== v || x[27] !== g
                ? ((y = (0, n.jsxs)(p.OZ, {
                    align: "end",
                    contentWidth: "menu",
                    disabled: b,
                    open: E,
                    onOpenChange: R,
                    triggerButton: j,
                    children: [g, S, v],
                  })),
                  (x[21] = j),
                  (x[22] = b),
                  (x[23] = S),
                  (x[24] = R),
                  (x[25] = E),
                  (x[26] = v),
                  (x[27] = g),
                  (x[28] = y))
                : (y = x[28]),
              y)
        },
        n: function (e) {
          let t,
            i,
            s,
            r,
            c,
            h,
            u = (0, l.c)(17)
          if (
            (u[0] !== e ? (({ fileName: t, ...i } = e), (u[0] = e), (u[1] = t), (u[2] = i)) : ((t = u[1]), (i = u[2])),
            u[3] !== t)
          ) {
            let e = (0, f.Zo)(t)
            switch (e) {
              case "pptx": {
                let e
                ;(u[5] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, n.jsx)(a.A, {
                      id: "artifactViewer.download.powerPoint",
                      defaultMessage: "PowerPoint <secondary>(PPTX)</secondary>",
                      description: "Download the presentation as a PowerPoint file; keep PPTX untranslated",
                      values: { secondary: v },
                    })),
                    (u[5] = e))
                  : (e = u[5]),
                  (s = e))
                break
              }
              case "xlsx": {
                let e
                ;(u[6] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, n.jsx)(a.A, {
                      id: "artifactViewer.download.excel",
                      defaultMessage: "Excel <secondary>(XLSX)</secondary>",
                      description: "Download the workbook as an Excel file; keep XLSX untranslated",
                      values: { secondary: g },
                    })),
                    (u[6] = e))
                  : (e = u[6]),
                  (s = e))
                break
              }
              case "docx": {
                let e
                ;(u[7] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, n.jsx)(a.A, {
                      id: "artifactViewer.download.word",
                      defaultMessage: "Word <secondary>(DOCX)</secondary>",
                      description: "Download the document as a Word file; keep DOCX untranslated",
                      values: { secondary: m },
                    })),
                    (u[7] = e))
                  : (e = u[7]),
                  (s = e))
                break
              }
              case null: {
                let e
                ;(u[8] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, n.jsx)(a.A, {
                      id: "artifactViewer.download.original",
                      defaultMessage: "Original file",
                      description: "Download a copy of the file in its original format",
                    })),
                    (u[8] = e))
                  : (e = u[8]),
                  (s = e))
                break
              }
              default:
                s = e.toUpperCase()
            }
            ;((u[3] = t), (u[4] = s))
          } else s = u[4]
          return (
            u[9] !== t ? ((r = (0, o.Ze)({ fileName: t })), (u[9] = t), (u[10] = r)) : (r = u[10]),
            u[11] !== r.category
              ? ((c = (0, n.jsx)(p.Sm, { fileType: r.category })), (u[11] = r.category), (u[12] = c))
              : (c = u[12]),
            u[13] !== s || u[14] !== i || u[15] !== c
              ? ((h = (0, n.jsx)(d.ms.Item, { ...i, leftIcon: c, children: s })),
                (u[13] = s),
                (u[14] = i),
                (u[15] = c),
                (u[16] = h))
              : (h = u[16]),
            h
          )
        },
      },
    )
  },
  JjB1(e, t, i) {
    var n = i("on57")
    let l = '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", "Segoe UI", sans-serif',
      o = (0, n.A)(
        "text-default min-h-0 w-full p-0 leading-normal !font-sans",
        "[&_.ProseMirror]:w-full",
        "[&_.ProseMirror]:!text-default",
        "[&_.ProseMirror]:!font-sans",
        "[&_.ProseMirror]:px-0",
        "[&_.ProseMirror]:py-0",
        "[&_.ProseMirror]:!leading-6",
        "[&_.ProseMirror_p]:!font-sans",
        "[&_.ProseMirror_p]:!leading-6",
        "[&_.ProseMirror_p_*]:!font-sans",
        "[&_.ProseMirror_span]:!font-sans",
        "!min-h-0 text-base",
        "[&_.ProseMirror]:min-h-6",
      )
    i.d(
      t,
      {},
      {
        Eb: o,
        Fn: "absolute left-4 min-w-0 overflow-hidden transition-[left,width,top,bottom] duration-[140ms] ease-enter-snappy motion-reduce:transition-none",
        H5: {
          "--codex-chat-font-size": "var(--annotation-comment-font-size, 13px)",
          "--composer-top-tray-background": "var(--color-surface)",
          "--composer-top-tray-border": "transparent",
          "--font-sans": l,
          "--font-ui-family": l,
          fontFamily: l,
        },
        xB: "absolute inset-x-0 bottom-0 flex h-12 items-center ps-2 pe-3 origin-bottom-left transition-[opacity,transform] duration-basic ease-out motion-reduce:transition-none",
      },
    )
  },
  YwjY(e, t, i) {
    i.d(t, { o: () => r })
    var n = i("ABep"),
      l = i("QosV"),
      o = i("on57"),
      s = i("JjB1")
    function r(e) {
      let t,
        i,
        r,
        a,
        d,
        c,
        h,
        u,
        f,
        p,
        m,
        g,
        v = (0, l.c)(24)
      v[0] !== e
        ? (({ className: i, children: t, style: a, isRevealingPageComment: d, surfaceVariant: c, ...r } = e),
          (v[0] = e),
          (v[1] = t),
          (v[2] = i),
          (v[3] = r),
          (v[4] = a),
          (v[5] = d),
          (v[6] = c))
        : ((t = v[1]), (i = v[2]), (r = v[3]), (a = v[4]), (d = v[5]), (c = v[6]))
      let y = void 0 === c ? "default" : c,
        x = "default" === y && "bg-surface-elevated-secondary shadow-md",
        S = void 0 !== d && d ? "transition-none" : "transition-[height,width,opacity]"
      return (
        v[7] !== i || v[8] !== x || v[9] !== S
          ? ((h = (0, o.A)(
              "surface-AyYLmv",
              "pointer-events-auto isolate rounded-[22px] ease-enter-snappy motion-reduce:transition-none",
              x,
              S,
              i,
            )),
            (v[7] = i),
            (v[8] = x),
            (v[9] = S),
            (v[10] = h))
          : (h = v[10]),
        v[11] !== a ? ((u = { ...s.H5, ...a }), (v[11] = a), (v[12] = u)) : (u = v[12]),
        v[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, o.A)("content-Sj8_aX", "overflow-hidden rounded-[inherit] bg-inherit")), (v[13] = f))
          : (f = v[13]),
        v[14] !== t ? ((p = (0, n.jsx)("div", { className: f, children: t })), (v[14] = t), (v[15] = p)) : (p = v[15]),
        v[16] !== y
          ? ((m =
              "default" === y
                ? (0, n.jsx)("div", {
                    "aria-hidden": !0,
                    className:
                      "pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-multiply outline-1 outline-border",
                  })
                : null),
            (v[16] = y),
            (v[17] = m))
          : (m = v[17]),
        v[18] !== r || v[19] !== h || v[20] !== u || v[21] !== p || v[22] !== m
          ? ((g = (0, n.jsxs)("div", { ...r, className: h, style: u, children: [p, m] })),
            (v[18] = r),
            (v[19] = h),
            (v[20] = u),
            (v[21] = p),
            (v[22] = m),
            (v[23] = g))
          : (g = v[23]),
        g
      )
    }
  },
  m5Sp(e, t, i) {
    function n(e, t) {
      if (null == t) return e.toString()
      let i = e.commonAncestorContainer,
        n = i instanceof Element ? i : i.parentElement
      if (n?.closest(t) != null) return ""
      if (!(i instanceof Element || i instanceof ShadowRoot) || null == i.querySelector(t)) return e.toString()
      let l = i.ownerDocument.createTreeWalker(i, NodeFilter.SHOW_TEXT),
        o = ""
      for (let i = l.nextNode(); null != i && !(e.comparePoint(i, 0) > 0); i = l.nextNode())
        e.intersectsNode(i) &&
          i.parentElement?.closest(t) == null &&
          (o += (i.textContent ?? "").slice(
            i === e.startContainer ? e.startOffset : 0,
            i === e.endContainer ? e.endOffset : void 0,
          ))
      return o
    }
    i.d(
      t,
      {},
      {
        g9: function (e, t, i) {
          if (t < 0) return null
          let n = e.ownerDocument.createTreeWalker(e, 4),
            l = 0,
            o = n.nextNode()
          for (; null != o;) {
            if (null == i || o.parentElement?.closest(i) == null) {
              let e = o.textContent ?? ""
              if (l + e.length >= t) return { node: o, offset: t - l }
              l += e.length
            }
            o = n.nextNode()
          }
          return null
        },
        jF: function (e, t, i, l) {
          let o = e.ownerDocument.createRange()
          try {
            return (o.selectNodeContents(e), o.setEnd(t, i), n(o, l).length)
          } catch {
            return null
          }
        },
        xQ: n,
      },
    )
  },
  iqo5(e, t, i) {
    i.d(t, { r: () => g })
    var n = i("ABep"),
      l = i("QosV"),
      o = i("zd8w"),
      s = i("oyxz"),
      r = i("YwjY"),
      a = i("Sm6l"),
      d = i("uXTt"),
      c = i("Bbed"),
      h = i("RNul"),
      u = i("DBCl"),
      f = i("T1PX")
    function p(e) {
      let t,
        i,
        s,
        r,
        a,
        d,
        c = (0, l.c)(13),
        { children: h, source: p } = e,
        m = (0, o.useRef)(null),
        g = !(0, f.I)() && p.width > 0 && p.height > 0
      ;(c[0] !== g || c[1] !== p
        ? ((t = () => {
            let e = m.current,
              t = e?.ownerDocument.defaultView
            if (!e || !t || !g) return
            let i = 0,
              n = new ResizeObserver(() => {
                ;(n.disconnect(),
                  (i = t.requestAnimationFrame(() => {
                    let n = e.getBoundingClientRect()
                    if (!n.width || !n.height) {
                      e.dataset.phase = "open"
                      return
                    }
                    let l = e.offsetWidth / n.width,
                      o = e.offsetHeight / n.height,
                      s = (p.left - n.left) * l,
                      r = (p.top - n.top) * o,
                      a = (n.right - p.right) * l,
                      d = (n.bottom - p.bottom) * o
                    ;(e.style.setProperty("--entry-inset", `${r}px ${a}px ${d}px ${s}px`),
                      e.style.setProperty(
                        "--entry-transform",
                        `translate(${s}px, ${r}px) scale(${p.width / n.width}, ${p.height / n.height})`,
                      ),
                      (e.dataset.phase = "source"),
                      (i = t.requestAnimationFrame(() => {
                        e.dataset.phase = "open"
                      })))
                  })))
              })
            return (
              n.observe(e),
              () => {
                ;(n.disconnect(),
                  t.cancelAnimationFrame(i),
                  delete e.dataset.phase,
                  e.style.removeProperty("--entry-inset"),
                  e.style.removeProperty("--entry-transform"))
              }
            )
          }),
          (i = [g, p]),
          (c[0] = g),
          (c[1] = p),
          (c[2] = t),
          (c[3] = i))
        : ((t = c[2]), (i = c[3])),
        (0, o.useLayoutEffect)(t, i))
      let v = g ? "entry-yS3y1e" : void 0
      return (
        c[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = { position: "relative", maxWidth: "100%", width: u.D3l }), (c[4] = s))
          : (s = c[4]),
        c[5] !== g
          ? ((r = g
              ? (0, n.jsx)("div", {
                  "aria-hidden": !0,
                  className:
                    "surface-Iou1vs pointer-events-none absolute inset-0 rounded-[22px] bg-surface-elevated-secondary shadow-md outline-1 outline-border",
                })
              : null),
            (c[5] = g),
            (c[6] = r))
          : (r = c[6]),
        c[7] !== h
          ? ((a = (0, n.jsx)("div", { className: "content-ARLCcU", children: h })), (c[7] = h), (c[8] = a))
          : (a = c[8]),
        c[9] !== v || c[10] !== r || c[11] !== a
          ? ((d = (0, n.jsxs)("div", {
              ref: m,
              "data-selection-annotation-entry": "",
              className: v,
              style: s,
              children: [r, a],
            })),
            (c[9] = v),
            (c[10] = r),
            (c[11] = a),
            (c[12] = d))
          : (d = c[12]),
        d
      )
    }
    let m = (0, c._)(
      async () =>
        (
          await Promise.all([
            i.e(74692),
            i.e(198336),
            i.e(148321),
            i.e(923712),
            i.e(726441),
            i.e(202026),
            i.e(922213),
            i.e(468632),
            i.e(360409),
            i.e(197387),
            i.e(339467),
            i.e(42584),
          ]).then(i.bind(i, "FQ1K"))
        ).SelectedTextAnnotationEditor,
      { suspendToParent: !0, errorFallback: (e) => (0, n.jsx)(v, { failed: !0, onClose: e.onCancel }) },
    )
    function g(e) {
      let t,
        i,
        s,
        r,
        a,
        c,
        h,
        u,
        f = (0, l.c)(18)
      ;(f[0] !== e ? (({ entryRect: t, ...i } = e), (f[0] = e), (f[1] = t), (f[2] = i)) : ((t = f[1]), (i = f[2])),
        f[3] !== i.onCancel
          ? ((s = (0, n.jsx)(v, { failed: !0, onClose: i.onCancel })), (f[3] = i.onCancel), (f[4] = s))
          : (s = f[4]),
        f[5] !== i.onCancel
          ? ((r = (0, n.jsx)(v, { onClose: i.onCancel })), (f[5] = i.onCancel), (f[6] = r))
          : (r = f[6]),
        f[7] !== i ? ((a = (0, n.jsx)(m, { ...i })), (f[7] = i), (f[8] = a)) : (a = f[8]),
        f[9] !== r || f[10] !== a
          ? ((c = (0, n.jsx)(o.Suspense, { fallback: r, children: a })), (f[9] = r), (f[10] = a), (f[11] = c))
          : (c = f[11]),
        f[12] !== s || f[13] !== c
          ? ((h = (0, n.jsx)(d.t, { name: "ResponseTextAnnotationEditor", fallback: s, children: c })),
            (f[12] = s),
            (f[13] = c),
            (f[14] = h))
          : (h = f[14]))
      let g = h
      return (
        f[15] !== g || f[16] !== t
          ? ((u = null == t ? g : (0, n.jsx)(p, { source: t, children: g })), (f[15] = g), (f[16] = t), (f[17] = u))
          : (u = f[17]),
        u
      )
    }
    function v(e) {
      let t,
        i,
        o,
        d,
        c = (0, l.c)(9),
        { failed: u, onClose: f } = e,
        p = void 0 !== u && u,
        m = p ? "alert" : "status"
      return (
        c[0] !== p
          ? ((t = p
              ? (0, n.jsx)(s.A, {
                  id: "responseTextAnnotationMarkers.editor.loadError",
                  defaultMessage: "Couldn't load the editor. Reload to try again",
                  description:
                    "Error inside the response annotation editor when its code fails to download after retrying. Reloading the app allows another attempt.",
                })
              : (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(h.y, {}),
                    (0, n.jsx)(s.A, {
                      id: "responseTextAnnotationMarkers.editor.loading",
                      defaultMessage: "Loading editor…",
                      description: "Loading status inside the editor for a comment on selected response text",
                    }),
                  ],
                })),
            (c[0] = p),
            (c[1] = t))
          : (t = c[1]),
        c[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, n.jsx)(s.A, {
              id: "responseTextAnnotationMarkers.editor.close",
              defaultMessage: "Close",
              description:
                "Button that dismisses a loading or unavailable response annotation editor while preserving the annotation",
            })),
            (c[2] = i))
          : (i = c[2]),
        c[3] !== f
          ? ((o = (0, n.jsx)(a.$, { color: "secondary", onClick: f, children: i })), (c[3] = f), (c[4] = o))
          : (o = c[4]),
        c[5] !== m || c[6] !== t || c[7] !== o
          ? ((d = (0, n.jsxs)(r.o, {
              className:
                "flex flex-col items-center justify-center gap-3 p-4 text-center text-sm text-secondary select-none",
              role: m,
              children: [t, o],
            })),
            (c[5] = m),
            (c[6] = t),
            (c[7] = o),
            (c[8] = d))
          : (d = c[8]),
        d
      )
    }
    g.prefetch = () => m.prefetch()
  },
  dZTS(e, t, i) {
    var n = i("ABep"),
      l = i("QosV"),
      o = i("zd8w"),
      s = i("ZZ6D"),
      r = i("wD9O"),
      a = i("i7gm"),
      d = i("TNWb")
    function c() {
      return !1
    }
    i.d(
      t,
      {},
      {
        Q: function (e) {
          let t,
            i,
            h,
            u,
            f = (0, l.c)(10),
            { children: p } = e,
            m = (0, r.dz)(),
            g = (0, s.a)()
          if ((0, o.useSyncExternalStore)(d.tb, d.zf, c)) return null
          let v = 16 + g.right
          if (
            (f[0] !== v ? ((t = { right: v }), (f[0] = v), (f[1] = t)) : (t = f[1]),
            f[2] !== m ? ((i = { zoom: m }), (f[2] = m), (f[3] = i)) : (i = f[3]),
            f[4] !== p || f[5] !== i
              ? ((h = (0, n.jsx)("div", { className: "max-w-[70vw]", style: i, children: p })),
                (f[4] = p),
                (f[5] = i),
                (f[6] = h))
              : (h = f[6]),
            f[7] !== t || f[8] !== h)
          ) {
            let e = (0, n.jsx)("div", {
              className: "pointer-events-none fixed top-2 z-[55] flex justify-end",
              style: t,
              children: h,
            })
            ;((u = "u" < typeof document ? e : (0, n.jsx)(a.s, { container: document.body, children: e })),
              (f[7] = t),
              (f[8] = h),
              (f[9] = u))
          } else u = f[9]
          return u
        },
      },
    )
  },
  yGns(e, t, i) {
    var n = i("ABep"),
      l = i("QosV"),
      o = i("Wf1j"),
      s = i("nMUV")
    i.d(
      t,
      {},
      {
        k: function (e) {
          let t,
            i,
            r = (0, l.c)(17),
            { active: a, error: d, hasQuery: c, isCapped: h, isPending: u, totalMatches: f } = e,
            p = (0, o.A)()
          if (!c || u || null == f) {
            let e
            return (
              r[0] !== c ? ((e = (0, n.jsx)(s.Af, { isVisible: c, label: null })), (r[0] = c), (r[1] = e)) : (e = r[1]),
              e
            )
          }
          if ("invalid-regex" === d) {
            let e
            ;(r[2] !== p
              ? ((e = p.formatMessage({
                  id: "chatgpt.threadFindBar.invalidRegex",
                  defaultMessage: "Invalid regular expression",
                  description: "Search error when a regular expression cannot be parsed",
                })),
                (r[2] = p),
                (r[3] = e))
              : (e = r[3]),
              (t = e))
          } else if ("regex-timeout" === d) {
            let e
            ;(r[4] !== p
              ? ((e = p.formatMessage({
                  id: "chatgpt.threadFindBar.regexTimeout",
                  defaultMessage: "Pattern took too long",
                  description: "Search error when a regular expression exceeds its execution time limit",
                })),
                (r[4] = p),
                (r[5] = e))
              : (e = r[5]),
              (t = e))
          } else if ("regex-unavailable" === d) {
            let e
            ;(r[6] !== p
              ? ((e = p.formatMessage({
                  id: "chatgpt.threadFindBar.regexUnavailable",
                  defaultMessage: "Regex search unavailable",
                  description: "Search error when the background regex worker cannot run",
                })),
                (r[6] = p),
                (r[7] = e))
              : (e = r[7]),
              (t = e))
          } else if (0 === f) {
            let e
            ;(r[8] !== p
              ? ((e = p.formatMessage({
                  id: "codex.threadFindBar.noResults",
                  defaultMessage: "0 results",
                  description: "Find-in-thread label when there are no matches",
                })),
                (r[8] = p),
                (r[9] = e))
              : (e = r[9]),
              (t = e))
          } else {
            let e
            ;(r[10] !== a || r[11] !== p || r[12] !== h || r[13] !== f
              ? ((e = p.formatMessage(
                  h
                    ? {
                        id: "codex.threadFindBar.results.capped",
                        defaultMessage: "{active} / {matches}+ results",
                        description: "Find-in-thread label showing the active match index when matches are capped",
                      }
                    : {
                        id: "codex.threadFindBar.results",
                        defaultMessage: "{active} / {matches} results",
                        description: "Find-in-thread label showing the active match index",
                      },
                  { active: a, matches: f },
                )),
                (r[10] = a),
                (r[11] = p),
                (r[12] = h),
                (r[13] = f),
                (r[14] = e))
              : (e = r[14]),
              (t = e))
          }
          return (
            r[15] !== t ? ((i = (0, n.jsx)(s.Af, { isVisible: !0, label: t })), (r[15] = t), (r[16] = i)) : (i = r[16]),
            i
          )
        },
      },
    )
  },
  TjgH(e, t, i) {
    var n = i("ABep"),
      l = i("QosV"),
      o = i("on57")
    let s = {
      catalog:
        "gap-2 rounded-full border border-subtle bg-surface px-3 py-1.5 text-sm leading-5 font-normal text-default",
      catalogDisabled:
        "gap-2 rounded-full border border-subtle bg-surface-tertiary px-3 py-1.5 text-sm leading-5 font-normal text-tertiary opacity-70",
      unread:
        "h-3.75 min-w-3.75 shrink-0 justify-center rounded-unread-badge bg-accent px-0.5 text-unread-badge text-on-accent tabular-nums select-none",
      count:
        "h-5 min-w-6 justify-center rounded-full bg-text/8 px-1.25 text-xs leading-4.5 font-semibold tracking-[0.3px] text-(--gray-750) tabular-nums",
      default: "bg-secondary-soft text-secondary-solid rounded-sm px-2 py-1 text-sm leading-none",
      info: "bg-text-info/10 text-info rounded-sm px-2 py-1 text-sm leading-none",
      infoPill: "rounded-full bg-info-soft px-3 py-1.5 text-xs font-medium text-info",
      outline:
        "rounded-sm border border-default bg-transparent px-2 py-1 text-xs leading-none font-medium text-secondary",
      outlinePill: "h-6 rounded-full border border-subtle px-2.5 text-xs leading-4 font-semibold text-secondary",
      identity:
        "max-w-full min-w-0 rounded-xl border border-default px-3 py-2 text-heading-lg leading-7 font-medium wrap-anywhere text-default select-text",
      neutral:
        "h-7 gap-1.5 rounded-full border border-default bg-surface-secondary px-2.5 text-sm leading-none font-medium whitespace-nowrap text-secondary",
      neutralCompact:
        "h-6 gap-1 rounded-md border border-default bg-surface-secondary px-2 text-xs leading-none font-medium whitespace-nowrap text-secondary",
      recipient:
        "h-7 gap-1.5 rounded-md bg-secondary-soft px-2 text-sm leading-none font-normal whitespace-nowrap text-default",
      offer:
        "min-h-5 gap-1 rounded-[6px] bg-chart-green/15 px-2.5 py-1 text-xs font-medium text-chart-green tabular-nums light:text-(color:--green-700)",
      promotion:
        "min-h-6 rounded-full bg-chart-purple/10 px-2.5 text-sm leading-none font-medium whitespace-nowrap text-chart-purple",
      success:
        "min-h-5 rounded-full bg-success-soft-alpha px-2 text-xs font-medium text-success-soft-alpha tabular-nums",
      warning: "min-h-5 rounded-full bg-warning-soft-alpha px-2 text-xs font-medium text-warning-soft-alpha",
      caution: "min-h-5 rounded-full bg-caution-soft-alpha px-2 text-xs font-medium text-caution-soft-alpha",
      danger: "min-h-5 rounded-full bg-danger-soft-alpha px-2 text-xs font-medium text-danger-soft-alpha",
      tip: "min-h-5 rounded-full bg-tip-soft px-2 text-xs leading-none font-medium text-tip",
      tipInset:
        "min-h-5 rounded-[calc(var(--radius-2xl)-var(--spacing)*2-1px)] bg-tip-soft px-2 text-xs leading-none font-medium text-tip",
      internal:
        "rounded-full bg-(--color-background-internal-badge) px-2.5 py-1 text-xs font-medium text-(--color-text-internal-badge)",
      reserve: "gap-1 rounded-full bg-chart-yellow/15 px-3 py-1 text-sm leading-5 font-semibold text-chart-yellow",
      recording: "h-5 rounded-sidebar-inset bg-text-info/10 px-1.5 text-info dark:bg-text-info/15",
    }
    i.d(
      t,
      {},
      {
        E: function (e) {
          let t,
            i,
            r,
            a = (0, l.c)(10),
            { ref: d, children: c, className: h, variant: u } = e,
            f = void 0 === u ? "default" : u,
            p = s[f]
          return (
            a[0] !== h || a[1] !== p
              ? ((t = (0, o.A)("inline-flex items-center", p, h)), (a[0] = h), (a[1] = p), (a[2] = t))
              : (t = a[2]),
            a[3] !== c || a[4] !== f
              ? ((i = "unread" === f ? (0, n.jsx)("span", { className: "text-cap-trim", children: c }) : c),
                (a[3] = c),
                (a[4] = f),
                (a[5] = i))
              : (i = a[5]),
            a[6] !== d || a[7] !== t || a[8] !== i
              ? ((r = (0, n.jsx)("span", { ref: d, className: t, children: i })),
                (a[6] = d),
                (a[7] = t),
                (a[8] = i),
                (a[9] = r))
              : (r = a[9]),
            r
          )
        },
      },
    )
  },
  cZk2(e, t, i) {
    var n = i("ABep"),
      l = i("QosV"),
      o = i("zd8w"),
      s = i("oyxz"),
      r = i("JNtf"),
      a = i("mUDD")
    i.d(
      t,
      {},
      {
        k: function (e) {
          let t,
            i,
            d,
            c,
            h = (0, l.c)(17),
            {
              open: u,
              onOpenChange: f,
              onCloseAutoFocus: p,
              title: m,
              failed: g,
              embedded: v,
              size: y,
              children: x,
              dialogComponent: S,
              restoreFocusOnUnmount: w,
            } = e,
            b = void 0 !== g && g,
            C = void 0 !== v && v,
            E = void 0 === S ? r.lG : S,
            I = (0, o.useRef)(u)
          ;(h[0] !== u
            ? ((t = () => {
                I.current = u
              }),
              (i = [u]),
              (h[0] = u),
              (h[1] = t),
              (h[2] = i))
            : ((t = h[1]), (i = h[2])),
            (0, o.useLayoutEffect)(t, i))
          let R = C ? "h2" : r.L3
          h[3] !== R || h[4] !== x || h[5] !== b || h[6] !== m
            ? ((d =
                x ??
                (0, n.jsx)(a.R4, {
                  children: (0, n.jsx)(a.OO, {
                    className: "select-none",
                    children: (0, n.jsx)(a.c7, {
                      title: (0, n.jsx)(R, { children: m }),
                      subtitle: b
                        ? (0, n.jsx)(s.A, {
                            id: "codex.dialogLoadState.reload",
                            defaultMessage: "Reload the app and try again",
                            description:
                              "Recovery instructions after both attempts to download a dialog fail; closing and reopening does not retry the download",
                          })
                        : void 0,
                    }),
                  }),
                })),
              (h[3] = R),
              (h[4] = x),
              (h[5] = b),
              (h[6] = m),
              (h[7] = d))
            : (d = h[7])
          let T = d
          return (
            h[8] !== E ||
            h[9] !== T ||
            h[10] !== C ||
            h[11] !== p ||
            h[12] !== f ||
            h[13] !== u ||
            h[14] !== w ||
            h[15] !== y
              ? ((c = C
                  ? T
                  : (0, n.jsx)(E, {
                      open: u,
                      size: y,
                      onOpenChange: (e) => {
                        ;((I.current = e), f(e))
                      },
                      contentProps: {
                        "aria-describedby": void 0,
                        onCloseAutoFocus: (e) => {
                          I.current && !w?.() ? e.preventDefault() : p?.(e)
                        },
                      },
                      children: T,
                    })),
                (h[8] = E),
                (h[9] = T),
                (h[10] = C),
                (h[11] = p),
                (h[12] = f),
                (h[13] = u),
                (h[14] = w),
                (h[15] = y),
                (h[16] = c))
              : (c = h[16]),
            c
          )
        },
      },
    )
  },
  H7so(e, t, i) {
    var n = i("ABep"),
      l = i("QosV"),
      o = i("slpy"),
      s = i("IJRm"),
      r = i("plV3"),
      a = i("on57"),
      d = i("Wf1j"),
      c = i("oyxz"),
      h = i("Sm6l"),
      u = i("HOLv"),
      f = i("RNul"),
      p = i("UxN3"),
      m = i("hfh3")
    i.d(
      t,
      {},
      {
        A: function (e) {
          let t,
            i,
            g,
            v,
            y,
            x,
            S,
            w,
            b,
            C,
            E,
            I,
            R,
            T = (0, l.c)(37),
            {
              canRedo: k,
              canUndo: M,
              hasSaveError: A,
              isSaving: P,
              onRedo: O,
              onToggleVim: j,
              onUndo: L,
              vimMode: F,
            } = e,
            D = (0, d.A)()
          T[0] !== D
            ? ((t = D.formatMessage({
                id: "textFileEditor.undo",
                defaultMessage: "Undo",
                description: "Tooltip for undoing the latest text editor change",
              })),
              (T[0] = D),
              (T[1] = t))
            : (t = T[1])
          let H = t
          T[2] !== D
            ? ((i = D.formatMessage({
                id: "textFileEditor.redo",
                defaultMessage: "Redo",
                description: "Tooltip for redoing the latest text editor change",
              })),
              (T[2] = D),
              (T[3] = i))
            : (i = T[3])
          let _ = i
          if (!M && !k && !P && !A && null == F) return null
          !1 !== T[4]
            ? ((g = (0, a.A)(
                "absolute right-4 bottom-4 z-10 flex items-center gap-px rounded-lg border border-default bg-surface-elevated-secondary/90 p-1 shadow-sm",
                !1,
              )),
              (T[4] = !1),
              (T[5] = g))
            : (g = T[5])
          let N = !M
          ;(T[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((v = (0, n.jsx)(u.I, { "aria-hidden": !1, asset: s.K })), (T[6] = v))
            : (v = T[6]),
            T[7] !== L || T[8] !== N || T[9] !== H
              ? ((y = (0, n.jsx)(h.$, {
                  "aria-label": H,
                  color: "ghost",
                  disabled: N,
                  onClick: L,
                  size: "toolbar",
                  uniform: !0,
                  children: v,
                })),
                (T[7] = L),
                (T[8] = N),
                (T[9] = H),
                (T[10] = y))
              : (y = T[10]),
            T[11] !== y || T[12] !== H
              ? ((x = (0, n.jsx)(o.m, { content: H, children: y })), (T[11] = y), (T[12] = H), (T[13] = x))
              : (x = T[13]))
          let B = !k
          return (
            T[14] === Symbol.for("react.memo_cache_sentinel")
              ? ((S = (0, n.jsx)(u.I, { className: "-scale-x-100", "aria-hidden": !1, asset: s.K })), (T[14] = S))
              : (S = T[14]),
            T[15] !== O || T[16] !== _ || T[17] !== B
              ? ((w = (0, n.jsx)(h.$, {
                  "aria-label": _,
                  color: "ghost",
                  disabled: B,
                  onClick: O,
                  size: "toolbar",
                  uniform: !0,
                  children: S,
                })),
                (T[15] = O),
                (T[16] = _),
                (T[17] = B),
                (T[18] = w))
              : (w = T[18]),
            T[19] !== _ || T[20] !== w
              ? ((b = (0, n.jsx)(o.m, { content: _, children: w })), (T[19] = _), (T[20] = w), (T[21] = b))
              : (b = T[21]),
            T[22] !== j || T[23] !== F ? ((C = null), (T[22] = j), (T[23] = F), (T[24] = C)) : (C = T[24]),
            T[25] !== P
              ? ((E = P
                  ? (0, n.jsxs)("div", {
                      className: "flex items-center gap-1 px-2 text-xs leading-none text-codex-description",
                      children: [
                        (0, n.jsx)(f.y, { className: "icon-2xs" }),
                        (0, n.jsx)(c.A, {
                          id: "textFileEditor.saving",
                          defaultMessage: "Saving…",
                          description: "Status shown while the text file editor is saving",
                        }),
                      ],
                    })
                  : null),
                (T[25] = P),
                (T[26] = E))
              : (E = T[26]),
            T[27] !== A || T[28] !== P
              ? ((I =
                  !P && A
                    ? (0, n.jsxs)("div", {
                        className: "flex items-center gap-1 px-2 text-xs leading-none text-danger",
                        children: [
                          (0, n.jsx)(p.bF, {
                            className: "shrink-0",
                            "aria-hidden": !1,
                            legacyIcon: m.A,
                            asset16: r.c,
                            legacyClassName: "icon-2xs",
                          }),
                          (0, n.jsx)(c.A, {
                            id: "textFileEditor.saveFailed",
                            defaultMessage: "Save failed",
                            description: "Status shown when the text file editor could not save",
                          }),
                        ],
                      })
                    : null),
                (T[27] = A),
                (T[28] = P),
                (T[29] = I))
              : (I = T[29]),
            T[30] !== b || T[31] !== C || T[32] !== E || T[33] !== I || T[34] !== g || T[35] !== x
              ? ((R = (0, n.jsxs)("div", { className: g, children: [x, b, C, E, I] })),
                (T[30] = b),
                (T[31] = C),
                (T[32] = E),
                (T[33] = I),
                (T[34] = g),
                (T[35] = x),
                (T[36] = R))
              : (R = T[36]),
            R
          )
        },
      },
    )
  },
  uNMF(e, t, i) {
    var n = i("ABep"),
      l = i("QosV"),
      o = i("kZEb"),
      s = i("oyxz"),
      r = i("zKCW"),
      a = i("FkTw"),
      d = i("HOLv")
    i.d(
      t,
      {},
      {
        c: function (e) {
          let t,
            i,
            c,
            h,
            u = (0, l.c)(9),
            { error: f, isReload: p } = e
          u[0] !== f.message
            ? ((t = f.message
                ? (0, n.jsx)("div", {
                    className: "break-words whitespace-pre-wrap select-text",
                    children:
                      "File is too large" === f.message
                        ? (0, n.jsx)(s.A, {
                            id: "fileEditor.fileTooLarge",
                            defaultMessage: "File is too large to preview",
                            description:
                              "Error detail shown when a file exceeds the maximum size supported by the file editor",
                          })
                        : f.message,
                  })
                : null),
              (u[0] = f.message),
              (u[1] = t))
            : (t = u[1])
          let m = t
          if (void 0 !== p && p) {
            let e, t
            return (
              u[2] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, n.jsx)(s.A, {
                    id: "fileEditor.reloadError",
                    defaultMessage: "Could not reload file",
                    description:
                      "Error shown above an open file when its latest contents cannot be read; unsaved edits stay visible",
                  })),
                  (u[2] = e))
                : (e = u[2]),
              u[3] !== m
                ? ((t = (0, n.jsx)("div", {
                    className: "shrink-0 px-4 pt-3",
                    children: (0, n.jsx)(r.l, {
                      content: m,
                      role: "alert",
                      title: e,
                      type: "error",
                      variant: "callout",
                    }),
                  })),
                  (u[3] = m),
                  (u[4] = t))
                : (t = u[4]),
              t
            )
          }
          return (
            u[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((i = (0, n.jsx)(d.I, { asset: o.z })),
                (c = (0, n.jsx)(s.A, {
                  id: "fileEditor.loadError",
                  defaultMessage: "Could not open file",
                  description: "Error shown inside a file tab when the file cannot be opened",
                })),
                (u[5] = i),
                (u[6] = c))
              : ((i = u[5]), (c = u[6])),
            u[7] !== m
              ? ((h = (0, n.jsx)("div", {
                  className: "h-full overflow-auto",
                  role: "alert",
                  children: (0, n.jsx)(a.i, { className: "h-full min-h-0 px-4", description: m, icon: i, title: c }),
                })),
                (u[7] = m),
                (u[8] = h))
              : (h = u[8]),
            h
          )
        },
      },
    )
  },
  DcPQ(e, t, i) {
    var n = i("Vzyk"),
      l = i.n(n),
      o = i("zKw6"),
      s = i.n(o),
      r = i("DBCl"),
      a = i("DjVD"),
      d = i("bnxy"),
      c = i("pzFD")
    i.d(
      t,
      {},
      {
        _: function ({ content: e, endOffset: t, instruction: i, startOffset: n }) {
          let l = e.slice(n, t),
            o = i.trim()
          return n >= t || 0 === o.length || 0 === l.trim().length || l.length > 32768
            ? null
            : { content: e, endOffset: t, instruction: o, selectedText: l, startOffset: n }
        },
        c: async function ({ filePath: e, hostId: t, request: i, signal: n }) {
          let { content: o, endOffset: h, instruction: u, selectedText: f, startOffset: p } = i,
            m = (0, d.yy)(e),
            g = l()(p - (131072 - f.length) / 2, 0, Math.max(0, o.length - 131072)),
            v = await (0, c.D)({
              hostId: t === r.iwv ? null : t,
              cwd:
                t !== r.iwv && (0, r.cxl)(m)
                  ? ((0, r.tIC)(m) || (0, r.zjD)(m) ? s().win32 : s().posix).dirname(m)
                  : null,
              instructions:
                "Rewrite only the selected text according to the user's instruction. Use the provided document excerpt only as context. Preserve the file's language, style, indentation, and line endings. Return only the replacement text, without Markdown fences or an explanation.",
              input: `File: ${e}

Instruction:
${u}

<selected_text>
${f}
</selected_text>

<document_context>
${o.slice(g, g + 131072)}
</document_context>`,
              preserveOutputWhitespace: !0,
              signal: n,
              threadSource: "inline_edit",
            }).catch(() => null)
          if (n.aborted || null == v || v === f || v.length > 32768) return null
          let y = `${o.slice(0, p)}${v}${o.slice(h)}`
          return new Blob([y]).size > a.pD ? null : { newContent: y, replacementText: v }
        },
      },
    )
  },
  v2vb(e, t, i) {
    var n = i("ABep"),
      l = i("QosV"),
      o = i("slpy"),
      s = i("J9N2"),
      r = i("aTWQ"),
      a = i("am05"),
      d = i("zTeN"),
      c = i("zd8w"),
      h = i("oyxz"),
      u = i("Wf1j"),
      f = i("Sm6l"),
      p = i("HOLv"),
      m = i("NxNN"),
      g = i("kPrN"),
      v = i("OWtl")
    function y(e) {
      let t,
        i,
        o,
        s,
        r,
        h,
        u,
        f,
        p = (0, l.c)(27),
        { canAccept: y, canEdit: w, newFile: b, oldFile: C, onAction: E, onViewportReady: I } = e,
        R = (0, d.gh)(v.u),
        T = (0, d.Ul)(m.jb),
        k = (0, c.useRef)(!1)
      ;(p[0] !== w || p[1] !== E
        ? ((t = () => {
            w && E("edit")
          }),
          (p[0] = w),
          (p[1] = E),
          (p[2] = t))
        : (t = p[2]),
        p[3] !== b || p[4] !== C ? ((i = (0, a.$)(C, b)), (p[3] = b), (p[4] = C), (p[5] = i)) : (i = p[5]))
      let M = T ? "wrap" : "scroll"
      return (
        p[6] !== I
          ? ((o = (e) => {
              if (k.current || e.shadowRoot?.querySelector("[data-diff]") == null) return
              let t = e.closest("[data-inline-file-diff-review-viewport]")
              null != t && ((k.current = !0), I?.(t))
            }),
            (p[6] = I),
            (p[7] = o))
          : (o = p[7]),
        p[8] !== i || p[9] !== M || p[10] !== o
          ? ((s = (0, n.jsx)(g.FileDiff, {
              className:
                "relative overflow-clip [contain:content] [--codex-diffs-surface:var(--color-surface)] [--diffs-min-number-column-width:1ch]",
              diffStyle: "unified",
              expandUnchanged: !0,
              fileDiff: i,
              hunkSeparators: "simple",
              overflow: M,
              onPostRender: o,
            })),
            (p[8] = i),
            (p[9] = M),
            (p[10] = o),
            (p[11] = s))
          : (s = p[11]),
        p[12] !== t || p[13] !== s
          ? ((r = (0, n.jsx)("div", {
              className: "min-h-0 flex-1 overflow-y-auto pe-4 pt-4 pb-4",
              "data-inline-file-diff-review-viewport": "",
              "data-codex-character-input-boundary": "",
              tabIndex: -1,
              onPointerDown: x,
              onDoubleClick: t,
              children: s,
            })),
            (p[12] = t),
            (p[13] = s),
            (p[14] = r))
          : (r = p[14]),
        p[15] !== R || p[16] !== T ? ((h = () => R.set(m.jb, !T)), (p[15] = R), (p[16] = T), (p[17] = h)) : (h = p[17]),
        p[18] !== y || p[19] !== w || p[20] !== E || p[21] !== h || p[22] !== T
          ? ((u = (0, n.jsx)("div", {
              className: "flex shrink-0 justify-end border-t border-default bg-surface px-4 py-2",
              children: (0, n.jsx)(S, { canAccept: y, canEdit: w, onAction: E, onToggleWrap: h, wrapLines: T }),
            })),
            (p[18] = y),
            (p[19] = w),
            (p[20] = E),
            (p[21] = h),
            (p[22] = T),
            (p[23] = u))
          : (u = p[23]),
        p[24] !== r || p[25] !== u
          ? ((f = (0, n.jsxs)("div", { className: "relative flex h-full min-h-0 flex-col", children: [r, u] })),
            (p[24] = r),
            (p[25] = u),
            (p[26] = f))
          : (f = p[26]),
        f
      )
    }
    function x(e) {
      e.currentTarget.focus({ preventScroll: !0 })
    }
    function S(e) {
      let t,
        i,
        a,
        d,
        c,
        m,
        g,
        v,
        y,
        x,
        S,
        w,
        b = (0, l.c)(29),
        { canAccept: C, canEdit: E, onAction: I, onToggleWrap: R, wrapLines: T } = e,
        k = (0, u.A)()
      b[0] !== k || b[1] !== T
        ? ((t = T
            ? k.formatMessage({
                id: "codex.review.wrap.disable",
                defaultMessage: "Disable word wrap",
                description: "Menu item to disable word wrap in diff view",
              })
            : k.formatMessage({
                id: "codex.review.wrap.enable",
                defaultMessage: "Enable word wrap",
                description: "Menu item to enable word wrap in diff view",
              })),
          (b[0] = k),
          (b[1] = T),
          (b[2] = t))
        : (t = b[2])
      let M = t
      b[3] !== R || b[4] !== M || b[5] !== T
        ? ((i =
            null == R
              ? null
              : (0, n.jsx)(o.m, {
                  content: M,
                  children: (0, n.jsx)(f.$, {
                    "aria-label": M,
                    color: "outline",
                    onClick: R,
                    size: "toolbar",
                    uniform: !0,
                    children: T
                      ? (0, n.jsx)(p.I, { "aria-hidden": !1, asset: r.z })
                      : (0, n.jsx)(p.I, { "aria-hidden": !1, asset: s.o }),
                  }),
                })),
          (b[3] = R),
          (b[4] = M),
          (b[5] = T),
          (b[6] = i))
        : (i = b[6])
      let A = !E
      ;(b[7] !== I ? ((a = () => I("edit")), (b[7] = I), (b[8] = a)) : (a = b[8]),
        b[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, n.jsx)(h.A, {
              id: "inlineFileDiffReview.edit",
              defaultMessage: "Edit",
              description: "Button label for editing the proposed file content from an inline review",
            })),
            (b[9] = d))
          : (d = b[9]),
        b[10] !== A || b[11] !== a
          ? ((c = (0, n.jsx)(f.$, { color: "outline", disabled: A, onClick: a, size: "toolbar", children: d })),
            (b[10] = A),
            (b[11] = a),
            (b[12] = c))
          : (c = b[12]),
        b[13] !== I ? ((m = () => I("reject")), (b[13] = I), (b[14] = m)) : (m = b[14]),
        b[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, n.jsx)(h.A, {
              id: "inlineFileDiffReview.reject",
              defaultMessage: "Reject",
              description: "Button label for rejecting proposed file content from an inline review",
            })),
            (b[15] = g))
          : (g = b[15]),
        b[16] !== m
          ? ((v = (0, n.jsx)(f.$, {
              className: "!text-danger",
              color: "outline",
              onClick: m,
              size: "toolbar",
              children: g,
            })),
            (b[16] = m),
            (b[17] = v))
          : (v = b[17]))
      let P = !C
      return (
        b[18] !== I ? ((y = () => I("accept")), (b[18] = I), (b[19] = y)) : (y = b[19]),
        b[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, n.jsx)(h.A, {
              id: "inlineFileDiffReview.accept",
              defaultMessage: "Accept",
              description: "Button label for accepting proposed file content from an inline review",
            })),
            (b[20] = x))
          : (x = b[20]),
        b[21] !== P || b[22] !== y
          ? ((S = (0, n.jsx)(f.$, {
              className: "!text-chart-green",
              color: "outline",
              disabled: P,
              onClick: y,
              size: "toolbar",
              children: x,
            })),
            (b[21] = P),
            (b[22] = y),
            (b[23] = S))
          : (S = b[23]),
        b[24] !== S || b[25] !== i || b[26] !== c || b[27] !== v
          ? ((w = (0, n.jsxs)("div", {
              className: "flex min-w-0 flex-wrap items-center justify-end gap-2 font-sans",
              children: [i, c, v, S],
            })),
            (b[24] = S),
            (b[25] = i),
            (b[26] = c),
            (b[27] = v),
            (b[28] = w))
          : (w = b[28]),
        w
      )
    }
    function w(e) {
      return e.length > 262144 || e.split("\n", 5001).length > 5e3
    }
    i.d(
      t,
      {},
      {
        V: function (e) {
          let t,
            i = (0, l.c)(26),
            { canAccept: o, canEdit: s, compact: r, newFile: a, oldFile: d, onAction: c, onViewportReady: u } = e,
            f = void 0 === o || o
          if (w(d.contents) || w(a.contents)) {
            let e, t
            return (
              i[0] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, n.jsx)(h.A, {
                    id: "inlineFileDiffReview.tooLarge",
                    defaultMessage: "Change is too large to preview",
                    description: "Message shown when an inline file review exceeds the safe rendering limit",
                  })),
                  (i[0] = e))
                : (e = i[0]),
              i[1] !== f || i[2] !== s || i[3] !== c
                ? ((t = (0, n.jsxs)("div", {
                    className:
                      "flex h-full flex-col items-center justify-center gap-3 px-4 text-sm text-codex-description",
                    children: [e, (0, n.jsx)(S, { canAccept: f, canEdit: s, onAction: c })],
                  })),
                  (i[1] = f),
                  (i[2] = s),
                  (i[3] = c),
                  (i[4] = t))
                : (t = i[4]),
              t
            )
          }
          if (r) {
            let e, t, l, o, r
            return (
              i[5] !== d.contents
                ? ((e = (0, n.jsx)("del", {
                    className:
                      "block bg-[var(--color-codex-diff-deleted)] px-3 py-2 break-words whitespace-pre-wrap no-underline",
                    children: d.contents,
                  })),
                  (i[5] = d.contents),
                  (i[6] = e))
                : (e = i[6]),
              i[7] !== a.contents
                ? ((t = (0, n.jsx)("ins", {
                    className:
                      "block bg-[var(--color-codex-diff-added)] px-3 py-2 break-words whitespace-pre-wrap no-underline",
                    children: a.contents,
                  })),
                  (i[7] = a.contents),
                  (i[8] = t))
                : (t = i[8]),
              i[9] !== e || i[10] !== t
                ? ((l = (0, n.jsxs)("div", {
                    className:
                      "divide-y divide-border-subtle font-mono [font-size:var(--diffs-font-size)] [line-height:var(--diffs-line-height)]",
                    children: [e, t],
                  })),
                  (i[9] = e),
                  (i[10] = t),
                  (i[11] = l))
                : (l = i[11]),
              i[12] !== f || i[13] !== s || i[14] !== c
                ? ((o = (0, n.jsx)("div", {
                    className: "sticky bottom-0 z-10 flex justify-end border-t border-default bg-surface px-3 py-2",
                    children: (0, n.jsx)(S, { canAccept: f, canEdit: s, onAction: c }),
                  })),
                  (i[12] = f),
                  (i[13] = s),
                  (i[14] = c),
                  (i[15] = o))
                : (o = i[15]),
              i[16] !== l || i[17] !== o
                ? ((r = (0, n.jsxs)("div", {
                    className: "max-h-80 overflow-y-auto rounded-lg border border-default bg-surface",
                    children: [l, o],
                  })),
                  (i[16] = l),
                  (i[17] = o),
                  (i[18] = r))
                : (r = i[18]),
              r
            )
          }
          return (
            i[19] !== f || i[20] !== s || i[21] !== a || i[22] !== d || i[23] !== c || i[24] !== u
              ? ((t = (0, n.jsx)(y, {
                  canAccept: f,
                  canEdit: s,
                  newFile: a,
                  oldFile: d,
                  onAction: c,
                  onViewportReady: u,
                })),
                (i[19] = f),
                (i[20] = s),
                (i[21] = a),
                (i[22] = d),
                (i[23] = c),
                (i[24] = u),
                (i[25] = t))
              : (t = i[25]),
            t
          )
        },
      },
    )
  },
  Bvu7(e, t, i) {
    let n = (0, i("Nwp9").m3)("workspaceFileDiffViewMode", "unified")
    i.d(t, {}, { L: n })
  },
  xrWq(e, t, i) {
    var n = i("zTeN"),
      l = i("OWtl")
    let o = (0, n.vP)(l.u, () => null)
    i.d(t, {}, { _: o })
  },
  OTo8(e, t, i) {
    var n = i("QosV"),
      l = i("zTeN"),
      o = i("NdHc")
    i.d(
      t,
      {},
      {
        v: function (e, t, i, s) {
          let r,
            a,
            d = (0, n.c)(8),
            c = s?.enabled ?? !0
          d[0] !== e || d[1] !== t
            ? ((r = null == e ? null : { cwd: e, hostConfig: t }), (d[0] = e), (d[1] = t), (d[2] = r))
            : (r = d[2])
          let h = s?.retainRepoWatch
          return (
            d[3] !== i || d[4] !== c || d[5] !== r || d[6] !== h
              ? ((a = { enabled: c, operationSource: i, lookup: r, retainRepoWatch: h }),
                (d[3] = i),
                (d[4] = c),
                (d[5] = r),
                (d[6] = h),
                (d[7] = a))
              : (a = d[7]),
            (0, l._U)(o.Ko, a)
          )
        },
      },
    )
  },
  LDen(e, t, i) {
    i.d(
      t,
      {},
      {
        H: function (e) {
          return {
            lineNumber: e.end.line + (0 === e.end.character && e.end.line > e.start.line ? 0 : 1),
            startLine: e.start.line + 1,
          }
        },
      },
    )
  },
  is3Y(e, t, i) {
    let n = (0, i("Nwp9").m3)("git-active-line-blame-enabled", !1)
    i.d(t, {}, { N: n, T: "1420162012" })
  },
  ilxu(e, t, i) {
    var n = i("DBCl"),
      l = i("DcPQ"),
      o = i("DjVD"),
      s = i("VtLY"),
      r = i("fP21")
    let a = {
      externalReview: null,
      file: null,
      fileRevision: 0,
      loadError: null,
      isReadOnly: !1,
      isSelectionEditPending: !1,
      selectionReview: null,
    }
    i.d(
      t,
      {},
      {
        Db: class {
          abortController = new AbortController()
          autosaveTimeoutId = null
          baseMtimeMs = void 0
          diskReadRevision = 0
          externalSyncRevision = 0
          hasPendingExternalChange = !1
          hasUtf8Bom
          isClosing = !1
          lastDraft
          lastReportedUnsavedChanges = null
          pendingEditorChange = null
          pendingEditorChangeTimeoutId = null
          maySaveReadOnlyReviewResolution = !1
          saveHandoff = {}
          pendingSaveSnapshot = null
          reviewDiskSnapshot = null
          savedContent = null
          savePromise = null
          selectionEdit = null
          state = a
          initialDraft
          options
          constructor({ initialDraft: e, ...t }) {
            ;((this.options = t), (this.initialDraft = e), (this.hasUtf8Bom = e?.hasUtf8Bom), (this.lastDraft = e))
          }
          getSavedContent() {
            return this.savedContent
          }
          async start(e = 0) {
            this.options.onStateChange(this.state)
            let t = this.initialDraft,
              i = t?.saveHandoff?.promise
            if (null != i) {
              let e = await i
              if (this.isClosing) return
              null != e && ((t = e), (this.savedContent = e.savedContent), (this.hasUtf8Bom = e.hasUtf8Bom))
            }
            let n = await this.readFile().catch(
              (e) => ((this.state = { ...this.state, loadError: e instanceof Error ? e : Error(String(e)) }), null),
            )
            if (this.isClosing) return
            let l = t?.content ?? n?.content
            if (null == l) return void this.emitState()
            let s = null == t && null != n ? n.sizeBytes : new Blob([l]).size
            s > 0x1400000 || (null != t && new Blob([t.savedContent]).size > 0x1400000)
              ? this.failLoad(Error("File is too large"))
              : ((this.savedContent = this.savedContent ?? t?.savedContent ?? l),
                (this.baseMtimeMs = null == t ? n?.mtimeMs : void 0),
                (this.state = {
                  ...a,
                  file: this.createFile(l),
                  fileRevision: e,
                  loadError: this.state.loadError,
                  isReadOnly: s > o.pD,
                }),
                (this.initialDraft = null),
                null != n && this.applyDiskSnapshot(n),
                this.emitState(),
                this.options.onLoad?.(),
                this.scheduleAutosave(),
                this.hasPendingExternalChange && (await this.syncExternalChange()))
          }
          dispose({ discardUnsavedChanges: e = !1 } = {}) {
            if (this.isClosing) return
            if (((this.isClosing = !0), this.cancelSelectionEdit(), this.clearAutosaveTimeout(), e)) {
              ;(this.abortController.abort(),
                this.clearPendingEditorChange(),
                (this.lastDraft = null),
                this.options.onDraftChange(null))
              return
            }
            let t = null != this.hasUtf8Bom && (null != this.savePromise || this.hasUnsavedChanges),
              i = this.saveUntilClean()
            ;(t &&
              ((this.saveHandoff.promise = i
                .then(() => {
                  let e = this.state.file?.contents,
                    t = this.savedContent
                  return null == e || null == t ? null : { content: e, hasUtf8Bom: this.hasUtf8Bom, savedContent: t }
                })
                .catch(() => null)),
              this.emitDraft()),
              i.then(() => {
                ;(this.emitDraft(), this.clearAutosaveTimeout(), this.abortController.abort())
              }))
          }
          updateContent(e) {
            let t = this.state.file
            null == t ||
              this.abortController.signal.aborted ||
              this.state.isReadOnly ||
              (this.clearPendingEditorChange(),
              e !== t.contents &&
                (this.cancelSelectionEdit(),
                (t.contents = e),
                (this.maySaveReadOnlyReviewResolution = !1),
                this.options.onEdit?.()),
              this.syncPendingExternalChange(),
              this.isClosing || this.scheduleAutosave(),
              this.emitState())
          }
          completeEdit(e) {
            return this.abortController.signal.aborted
              ? "reject"
              : (this.updateContent(e.contents), (e.cacheKey = crypto.randomUUID()), "accept")
          }
          markPotentiallyDirty() {
            this.isClosing ||
              this.state.isReadOnly ||
              (this.clearAutosaveTimeout(),
              this.reportUnsavedChanges(!0),
              this.clearPendingEditorChange(),
              (this.pendingEditorChange = (0, n.udX)()),
              (this.pendingEditorChangeTimeoutId = setTimeout(() => {
                ;(this.clearPendingEditorChange(),
                  this.emitState(),
                  this.syncPendingExternalChange(),
                  this.isClosing || this.scheduleAutosave())
              }, 550)))
          }
          async requestSelectionEdit({ content: e, endOffset: t, instruction: i, startOffset: n }) {
            if (
              (this.updateContent(e),
              this.state.file?.contents !== e ||
                null != this.reviewDiskSnapshot ||
                this.isClosing ||
                this.state.isReadOnly)
            )
              return "failed"
            let o = (0, l._)({ content: e, endOffset: t, instruction: i, startOffset: n })
            if (null == o) return "failed"
            this.cancelSelectionEdit()
            let s = new AbortController()
            ;((this.selectionEdit = { abortController: s, kind: "pending" }), this.emitState())
            let r = await (0, l.c)({
              filePath: this.options.filePath,
              hostId: this.options.cloudFileAccess?.requestClient.hostId ?? this.options.hostId,
              request: o,
              signal: s.signal,
            })
            return s.signal.aborted
              ? "canceled"
              : ((this.selectionEdit = null), null == r)
                ? (this.emitState(), "failed")
                : ((this.selectionEdit = { kind: "review", ...r, oldContent: e }), this.emitState(), "created")
          }
          async syncExternalChange() {
            if (this.isClosing) return
            if (null == this.savedContent || null != this.pendingEditorChange) {
              this.hasPendingExternalChange = !0
              return
            }
            this.hasPendingExternalChange = !1
            let e = ++this.externalSyncRevision,
              t = ++this.diskReadRevision,
              i = await this.readFile().catch((e) => (e instanceof Error ? e : Error(String(e))))
            if (!this.isClosing && !this.abortController.signal.aborted) {
              if (null != this.pendingEditorChange) {
                this.hasPendingExternalChange = !0
                return
              }
              if (e === this.externalSyncRevision) {
                if (t !== this.diskReadRevision) return this.syncExternalChange()
                if (i instanceof Error) return void this.failLoad(i)
                ;((this.state = { ...this.state, loadError: null }), this.applyDiskSnapshot(i), this.emitState())
              }
            }
          }
          resolveExternalChange(e) {
            let t = this.state.file?.contents,
              i = this.getDocument()
            if (null == t || null == i || this.isClosing) return !1
            let n = (0, o.EI)({ action: e, content: t, document: i })
            if (null == n) return !1
            let l = this.isContentReadOnly(n.content, t)
            ;((this.savedContent = n.document.baseContent),
              (this.baseMtimeMs = this.reviewDiskSnapshot?.mtimeMs ?? null),
              (this.hasUtf8Bom = this.reviewDiskSnapshot?.hasUtf8Bom),
              (this.reviewDiskSnapshot = null),
              (this.maySaveReadOnlyReviewResolution = l && n.content !== n.document.baseContent))
            let s = n.content !== t
            return (
              s && this.replaceFile(n.content),
              (this.state = { ...this.state, isReadOnly: l }),
              this.emitState(),
              this.scheduleAutosave(),
              s
            )
          }
          resolveSelectionEdit(e) {
            let t = this.selectionEdit
            if (t?.kind !== "review" || this.isClosing || this.state.file?.contents !== t.oldContent) return null
            switch (((this.selectionEdit = null), this.emitState(), e)) {
              case "accept":
                return t.replacementText
              case "edit":
              case "reject":
                return null
            }
          }
          async saveUntilClean() {
            await this.waitForPendingEditorChange()
            let e = await this.save()
            return e && this.hasUnsavedChanges ? this.saveUntilClean() : e
          }
          async save() {
            let e,
              t = this.state.file?.contents,
              i = this.savedContent
            if (
              null == t ||
              null == i ||
              null != this.reviewDiskSnapshot ||
              (this.state.isReadOnly && t !== i && !this.maySaveReadOnlyReviewResolution)
            )
              return !1
            if (void 0 === this.baseMtimeMs)
              return (await this.syncExternalChange(), void 0 !== this.baseMtimeMs && this.save())
            if ((this.clearAutosaveTimeout(), null != this.savePromise))
              return !!(await this.savePromise) && this.save()
            if (t === i) return (this.emitState(), !0)
            let n = null == this.hasUtf8Bom ? null : { content: t, hasUtf8Bom: this.hasUtf8Bom }
            null != n && (++this.diskReadRevision, (this.pendingSaveSnapshot = n))
            let l = (0, s.r7)({
              cloudFileAccess: this.options.cloudFileAccess,
              content: t,
              expectedMtimeMs: this.baseMtimeMs,
              filePath: this.options.filePath,
              hasUtf8Bom: n?.hasUtf8Bom,
              hostId: this.options.hostId,
            })
              .then(async (e) => {
                let l
                if (this.abortController.signal.aborted) return !1
                if ((++this.diskReadRevision, "saved" === e.outcome))
                  return this.savedContent !== i || null != this.reviewDiskSnapshot
                    ? (await this.syncExternalChange(), this.savedContent === t)
                    : ((this.savedContent = t),
                      (this.baseMtimeMs = e.mtimeMs),
                      (this.hasUtf8Bom = n?.hasUtf8Bom),
                      (this.maySaveReadOnlyReviewResolution = !1),
                      (this.reviewDiskSnapshot = null),
                      !0)
                let o = ++this.diskReadRevision
                try {
                  l = await this.readFile()
                } catch (e) {
                  if (o === this.diskReadRevision) throw e
                  return !1
                }
                return (
                  !this.abortController.signal.aborted &&
                  o === this.diskReadRevision &&
                  (((this.state = { ...this.state, loadError: null }), l.content === t)
                    ? ((this.savedContent = t),
                      (this.baseMtimeMs = l.mtimeMs),
                      (this.hasUtf8Bom = l.hasUtf8Bom),
                      (this.maySaveReadOnlyReviewResolution = !1),
                      (this.reviewDiskSnapshot = null),
                      !0)
                    : (this.applyDiskSnapshot(l), !1))
                )
              })
              .catch(() => (this.isClosing || this.abortController.signal.aborted || this.options.onSaveError(), !1))
            ;((this.savePromise = l), this.emitState())
            try {
              e = await l
            } finally {
              null != n && this.pendingSaveSnapshot === n && (this.pendingSaveSnapshot = null)
            }
            return (
              this.savePromise === l && (this.savePromise = null),
              this.emitState(),
              e && this.hasUnsavedChanges && this.scheduleAutosave(),
              e
            )
          }
          readFile() {
            let e = this.savedContent ?? this.initialDraft?.savedContent
            return (0, s.Gu)({
              cloudFileAccess: this.options.cloudFileAccess,
              filePath: this.options.filePath,
              hostId: this.options.hostId,
              maximumSizeBytes: 0x1400000,
              pendingSaveSnapshot: this.pendingSaveSnapshot,
              previousSnapshot: null == e ? void 0 : { content: e, hasUtf8Bom: this.hasUtf8Bom },
              requireTextContent: !0,
              signal: this.abortController.signal,
            })
          }
          applyDiskSnapshot(e) {
            let t = this.state.file?.contents,
              i = this.getDocument()
            if (null == t || null == i) return
            let n = this.pendingSaveSnapshot
            if (
              ("ready" === i.kind &&
                null != n &&
                e.content === n.content &&
                e.hasUtf8Bom === n.hasUtf8Bom &&
                (i = (0, o.v5)(e.content)),
              this.options.reloadCleanExternalChanges &&
                void 0 !== this.baseMtimeMs &&
                "ready" === i.kind &&
                t === i.baseContent &&
                e.content !== t)
            ) {
              ;(this.cancelSelectionEdit(),
                (this.savedContent = e.content),
                (this.baseMtimeMs = e.mtimeMs),
                (this.hasUtf8Bom = e.hasUtf8Bom),
                (this.reviewDiskSnapshot = null),
                this.replaceFile(e.content),
                (this.state = { ...this.state, isReadOnly: e.sizeBytes > o.pD }))
              return
            }
            let l = (0, o.Lm)({ document: i, diskContent: e.content, localContent: t })
            ;((this.maySaveReadOnlyReviewResolution = !1),
              "conflict" === l.kind
                ? (this.cancelSelectionEdit(), this.options.onExternalConflict(), (this.reviewDiskSnapshot = e))
                : ((this.savedContent = l.baseContent),
                  (this.baseMtimeMs = e.mtimeMs),
                  (this.hasUtf8Bom = e.hasUtf8Bom),
                  (this.reviewDiskSnapshot = null),
                  t === e.content && (this.state = { ...this.state, isReadOnly: e.sizeBytes > o.pD })),
              this.scheduleAutosave())
          }
          emitState() {
            if ((this.reportUnsavedChanges(this.hasUnsavedChanges || null != this.savePromise), this.isClosing))
              return void this.emitDraft()
            let e = this.state.file?.contents,
              t = this.getDocument(),
              i = null == e || null == t ? null : (0, o._d)(t, e)
            ;(this.emitDraft(),
              this.options.onStateChange({
                ...this.state,
                externalReview:
                  null == i || null == e
                    ? null
                    : {
                        isReadOnly: this.isContentReadOnly(i.newContent, e),
                        newFile: this.createFile(i.newContent),
                        oldFile: this.createFile(i.oldContent),
                      },
                isSelectionEditPending: this.selectionEdit?.kind === "pending",
                selectionReview:
                  this.selectionEdit?.kind === "review"
                    ? {
                        isReadOnly: !1,
                        newFile: this.createFile(this.selectionEdit.newContent),
                        oldFile: this.createFile(this.selectionEdit.oldContent),
                      }
                    : null,
              }))
          }
          failLoad(e) {
            ;((this.state = { ...this.state, loadError: e }), this.emitState())
          }
          reportUnsavedChanges(e) {
            e !== this.lastReportedUnsavedChanges &&
              ((this.lastReportedUnsavedChanges = e), this.options.onUnsavedChangesChange(e))
          }
          emitDraft() {
            if (this.abortController.signal.aborted) return
            let e = this.state.file,
              t = this.savedContent
            if (null == e || null == t) return
            let i =
              void 0 === this.baseMtimeMs ||
              null != this.reviewDiskSnapshot ||
              (null != this.hasUtf8Bom && null != this.savePromise) ||
              e.contents !== t
                ? {
                    content: e.contents,
                    hasUtf8Bom: this.hasUtf8Bom,
                    saveHandoff: null == this.hasUtf8Bom ? void 0 : this.saveHandoff,
                    savedContent: t,
                  }
                : null
            ;(i?.content !== this.lastDraft?.content ||
              i?.hasUtf8Bom !== this.lastDraft?.hasUtf8Bom ||
              i?.saveHandoff !== this.lastDraft?.saveHandoff ||
              i?.savedContent !== this.lastDraft?.savedContent) &&
              ((this.lastDraft = i), this.options.onDraftChange(i))
          }
          replaceFile(e) {
            this.state = { ...this.state, file: this.createFile(e), fileRevision: this.state.fileRevision + 1 }
          }
          createFile(e) {
            return {
              cacheKey: `${this.options.hostId}:${this.options.filePath}:${e.length}:${(0, r.s)(e)}`,
              contents: e,
              lang: this.options.language,
              name: this.options.filePath,
            }
          }
          scheduleAutosave() {
            ;(this.clearAutosaveTimeout(),
              this.hasUnsavedChanges &&
                void 0 !== this.baseMtimeMs &&
                null != this.savedContent &&
                null == this.reviewDiskSnapshot &&
                (!this.state.isReadOnly || this.maySaveReadOnlyReviewResolution) &&
                (this.autosaveTimeoutId = setTimeout(() => {
                  ;((this.autosaveTimeoutId = null), this.save())
                }, 3e3)))
          }
          clearAutosaveTimeout() {
            null != this.autosaveTimeoutId && (clearTimeout(this.autosaveTimeoutId), (this.autosaveTimeoutId = null))
          }
          clearPendingEditorChange() {
            ;(null != this.pendingEditorChangeTimeoutId &&
              (clearTimeout(this.pendingEditorChangeTimeoutId), (this.pendingEditorChangeTimeoutId = null)),
              this.pendingEditorChange?.resolve(void 0),
              (this.pendingEditorChange = null))
          }
          syncPendingExternalChange() {
            this.hasPendingExternalChange && ((this.hasPendingExternalChange = !1), this.syncExternalChange())
          }
          cancelSelectionEdit() {
            ;(this.selectionEdit?.kind === "pending" && this.selectionEdit.abortController.abort(),
              (this.selectionEdit = null))
          }
          async waitForPendingEditorChange() {
            for (; null != this.pendingEditorChange;) await this.pendingEditorChange.promise
          }
          get hasUnsavedChanges() {
            return (
              null != this.pendingEditorChange ||
              (null != this.state.file && null != this.savedContent
                ? void 0 === this.baseMtimeMs ||
                  null != this.reviewDiskSnapshot ||
                  this.state.file.contents !== this.savedContent
                : null != this.initialDraft && this.initialDraft.content !== this.initialDraft.savedContent)
            )
          }
          isContentReadOnly(e, t) {
            return e === t
              ? this.state.isReadOnly
              : e === this.reviewDiskSnapshot?.content
                ? this.reviewDiskSnapshot.sizeBytes > o.pD
                : new Blob([e]).size > o.pD
          }
          getDocument() {
            return null == this.savedContent
              ? null
              : null == this.reviewDiskSnapshot
                ? (0, o.v5)(this.savedContent)
                : { baseContent: this.savedContent, diskContent: this.reviewDiskSnapshot.content, kind: "conflict" }
          }
        },
        Iw: 0x1400000,
        yx: a,
      },
    )
  },
  SIMW(e, t, i) {
    i.d(t, { R: () => tS })
    var n = i("ABep"),
      l = i("QosV"),
      o = i("MsoW"),
      s = i("PZKB")
    function r(e, t) {
      return null == e || null == t
        ? e === t
        : e.header === t.header &&
            e.footer === t.footer &&
            (function (e, t) {
              if (null == e || null == t) return e === t
              if (e.length !== t.length) return !1
              for (let i = 0; i < e.length; i++) {
                let n = e[i],
                  l = t[i]
                if (
                  null == n ||
                  null == l ||
                  n.id !== l.id ||
                  n.type !== l.type ||
                  n.element !== l.element ||
                  n.instance !== l.instance ||
                  n.version !== l.version
                )
                  return !1
              }
              return !0
            })(e.items, t.items)
    }
    var a = i("NJmY"),
      d = i("kkpv"),
      c = i("R9xE"),
      h = i("i3Lo"),
      u = i("KhBd"),
      f = i("fL0o"),
      p = i("foxH"),
      m = i("eQxH"),
      g = i("ET9g"),
      v = i("Lqgp"),
      y = i("BCfD"),
      x = i("ejN1"),
      S = i("z9CO")
    function w(e) {
      let t = window.devicePixelRatio ?? 1
      return Math.round(e * t) / t
    }
    var b = i("vRTB"),
      C = i("nyfN")
    let E = [
        "theme",
        "disableLineNumbers",
        "overflow",
        "themeType",
        "disableFileHeader",
        "disableVirtualizationBuffers",
        "preferredHighlighter",
        "useCSSClasses",
        "useTokenTransformer",
        "tokenizeMaxLineLength",
        "tokenizeMaxLength",
        "unsafeCSS",
        "diffStyle",
        "diffIndicators",
        "disableBackground",
        "expandUnchanged",
        "loadDiffFiles",
        "parseDiffOptions",
        "collapsedContextThreshold",
        "lineDiffType",
        "maxLineDiffLength",
        "expansionLineCount",
        "lineHoverHighlight",
        "enableTokenInteractionsOnWhitespace",
        "enableGutterUtility",
        "__debugPointerEvents",
        "enableLineSelection",
        "controlledSelection",
        "disableErrorHandling",
      ],
      I = [
        "theme",
        "disableLineNumbers",
        "overflow",
        "themeType",
        "disableFileHeader",
        "disableVirtualizationBuffers",
        "preferredHighlighter",
        "useCSSClasses",
        "useTokenTransformer",
        "tokenizeMaxLineLength",
        "tokenizeMaxLength",
        "unsafeCSS",
        "lineHoverHighlight",
        "enableTokenInteractionsOnWhitespace",
        "enableGutterUtility",
        "__debugPointerEvents",
        "enableLineSelection",
        "controlledSelection",
        "disableErrorHandling",
      ],
      R = [
        "renderCustomHeader",
        "renderHeaderPrefix",
        "renderHeaderFilenameSuffix",
        "renderHeaderMetadata",
        "renderAnnotation",
        "renderGutterUtility",
        "onPostRender",
        "onGutterUtilityClick",
        "onLineClick",
        "onLineNumberClick",
        "onLineEnter",
        "onLineLeave",
        "onTokenClick",
        "onTokenEnter",
        "onTokenLeave",
      ],
      T = ["onLineSelected", "onLineSelectionStart", "onLineSelectionChange", "onLineSelectionEnd"],
      k = Symbol("CodeView.itemOptionsState")
    function M(e, t) {
      Object.defineProperty(e, k, { configurable: !1, enumerable: !1, value: t })
    }
    function A(e, t, i) {
      Object.defineProperty(e, t, {
        configurable: !1,
        enumerable: !0,
        get() {
          return i(this)
        },
      })
    }
    let P = "--diffs-overflow-override"
    function O(e, t, i) {
      return { containerHeight: e, triggerTop: t, targetTop: i, targetBottom: e - i, threshold: e - t }
    }
    let j = O(12e6, 1e6, 2e6),
      L = O(4194304, 5e5, 1e6),
      F = (() => {
        let { navigator: e } = globalThis,
          t = e.userAgent,
          i = /iP(?:hone|ad|od)/.test(t),
          n = "MacIntel" === e.platform && e.maxTouchPoints > 1
        return (i || n) && /AppleWebKit/.test(t) && /Safari/.test(t) && !/(CriOS|FxiOS|EdgiOS|OPiOS)/.test(t)
      })()
    var D = class e {
      static __STOP = !1
      static __lastScrollPosition = 0
      type = "advanced"
      config = { overscrollSize: 200, intersectionObserverMargin: 0, resizeDebugging: !1 }
      items = []
      idToItem = new Map()
      selectedLines = null
      itemEditors = new Map()
      attachedEditors = new Set()
      instanceToItem = new Map()
      layoutDirtyIndex
      pendingLayoutReset
      renderOptionsRevision = 0
      slotCoordinator
      slotSnapshot
      scrollListeners = new Set()
      scrollHeight = 0
      containerHeight = -1
      scrollTop = 0
      scrollPageOffset = 0
      scrollRebaseConfig = (0, x.gm)() ? L : j
      scrollDirty = !0
      scrollInteractionFixTimer
      pointerEventsDisabled = !1
      codeOverflowFix = !1
      height = 0
      heightDirty = !0
      windowSpecs = { top: 0, bottom: 0 }
      renderState = { scrollTop: -1, firstIndex: -1, lastIndex: -1, stickyHeight: 0, stickyTop: -1, stickyBottom: -1 }
      itemMetricsCache = d.zA
      fileOptionsPrototype
      diffOptionsPrototype
      pendingScrollTarget
      pendingLayoutAnchor
      shouldFixContainerFocus = !1
      scrollAnimation
      root
      resizeObserver
      container = document.createElement("div")
      stickyContainer = document.createElement("div")
      stickyOffset = document.createElement("div")
      header = { element: void 0, render: void 0, height: 0 }
      footer = { element: void 0, render: void 0, height: 0 }
      elementPool = []
      elementPoolVersion = 0
      elementPoolTracker = new WeakMap()
      pendingElementPool = []
      options
      workerManager
      isReadySubscription
      pendingHighlighterTheme
      isContainerManaged
      constructor(e = { theme: d.Bc }, t, i = !1) {
        ;((this.options = e),
          this.computeMetricsCache(e.itemMetrics),
          (this.fileOptionsPrototype = this.createFileOptionsPrototype()),
          (this.diffOptionsPrototype = this.createDiffOptionsPrototype()),
          (this.workerManager = t),
          (this.isContainerManaged = i),
          (this.stickyOffset.style.contain = "layout size"),
          (this.stickyContainer.style.position = "sticky"),
          (this.stickyContainer.style.width = "100%"),
          (this.stickyContainer.style.contain = "layout style inline-size"),
          (this.stickyContainer.style.isolation = "isolate"),
          (this.stickyContainer.style.display = "flex"),
          (this.stickyContainer.style.flexDirection = "column"))
      }
      getLayout() {
        return this.options.layout ?? d.Z6
      }
      getItemTopOffset() {
        return this.getLayout().paddingTop + this.header.height
      }
      computeMetricsCache(e) {
        return (
          (this.itemMetricsCache = {
            hunkLineCount: e?.hunkLineCount ?? d.zA.hunkLineCount,
            lineHeight: e?.lineHeight ?? d.zA.lineHeight,
            diffHeaderHeight: e?.diffHeaderHeight ?? d.zA.diffHeaderHeight,
            hunkSeparatorHeight: e?.hunkSeparatorHeight,
            spacing: e?.spacing ?? d.zA.spacing,
            paddingTop: e?.paddingTop,
            paddingBottom: e?.paddingBottom,
          }),
          this.itemMetricsCache
        )
      }
      getSmoothScrollSettings() {
        return this.options.smoothScrollSettings ?? d.hU
      }
      shouldDisablePointerEvents() {
        return !0 !== this.options.pointerEventsOnScroll
      }
      shouldValidateItemHeights() {
        return d.un && !0 === this.options.__devOnlyValidateItemHeights
      }
      validateRenderedItemHeight(e) {
        if (!this.shouldValidateItemHeights() || null == e.element) return
        let t = e.instance.getAdvancedStickySpecs()
        if (null == t) return
        let i = t.height,
          n = e.element.getBoundingClientRect().height
        i !== n &&
          console.error("CodeView: reconciled item height does not match DOM height", {
            id: e.item.id,
            type: e.type,
            index: e.index,
            version: e.version,
            expectedHeight: i,
            actualHeight: n,
            delta: n - i,
            stickyTopOffset: t.topOffset,
            virtualizedHeight: e.instance.getVirtualizedHeight(),
            top: e.top,
            scrollTop: this.getScrollTop(),
            windowSpecs: { ...this.windowSpecs },
            element: e.element,
            instance: e.instance,
          })
      }
      validateStickyContainerHeight() {
        if (!this.shouldValidateItemHeights()) return
        let { firstIndex: e, lastIndex: t, stickyHeight: i, stickyTop: n, stickyBottom: l } = this.renderState
        if (-1 === e || -1 === t) return
        let o = this.stickyContainer.getBoundingClientRect().height
        1 > Math.abs(o - i) ||
          console.error("CodeView: sticky container height does not match computed layout", {
            computedStickyHeight: i,
            actualStickyHeight: o,
            delta: o - i,
            stickyTop: n,
            stickyBottom: l,
            firstIndex: e,
            lastIndex: t,
            firstStickySpecs: this.items[e]?.instance.getAdvancedStickySpecs(),
            lastStickySpecs: this.items[t]?.instance.getAdvancedStickySpecs(),
            scrollTop: this.getScrollTop(),
            scrollPageOffset: this.scrollPageOffset,
            windowSpecs: { ...this.windowSpecs },
            stickyContainer: this.stickyContainer,
          })
      }
      clearScrollInteractionTimer() {
        null != this.scrollInteractionFixTimer &&
          (clearTimeout(this.scrollInteractionFixTimer), (this.scrollInteractionFixTimer = void 0))
      }
      suspendScrollInteractions() {
        ;(this.clearScrollInteractionTimer(),
          this.shouldDisablePointerEvents() &&
            !this.pointerEventsDisabled &&
            ((this.stickyContainer.style.pointerEvents = "none"), (this.pointerEventsDisabled = !0)),
          F &&
            !this.codeOverflowFix &&
            (this.stickyContainer.style.setProperty(P, "hidden"), (this.codeOverflowFix = !0)),
          (this.scrollInteractionFixTimer = setTimeout(this.restoreScrollInteractions, 120)))
      }
      restoreScrollInteractions = () => {
        ;(this.clearScrollInteractionTimer(),
          this.pointerEventsDisabled &&
            (this.stickyContainer.style.removeProperty("pointer-events"), (this.pointerEventsDisabled = !1)),
          this.codeOverflowFix && (this.stickyContainer.style.setProperty(P, "auto"), (this.codeOverflowFix = !1)))
      }
      syncLayout() {
        let { gap: e, paddingBottom: t, paddingTop: i } = this.getLayout()
        ;((this.stickyContainer.style.gap = `${e}px`),
          this.container?.style.setProperty("margin-top", `${i}px`),
          this.container?.style.setProperty("margin-bottom", `${t}px`))
      }
      reconcileHeaderFooterHosts() {
        let e = this.reconcileHost("header"),
          t = this.reconcileHost("footer")
        return e || t
      }
      reconcileHost(e) {
        var t
        let i,
          { root: n, container: l } = this
        if (null == n || null == l) return !1
        let o = "header" === e ? this.header : this.footer,
          s = "header" === e ? this.options.renderCodeViewHeader : this.options.renderCodeViewFooter
        if (null == s)
          return (
            null != o.element &&
            (this.resizeObserver?.unobserve(o.element),
            o.element.remove(),
            (o.element = void 0),
            (o.render = void 0),
            this.setHostHeight(o, 0),
            !1)
          )
        if (null != o.element && s === o.render) return !1
        let r =
          o.element ??
          ((t = this.resizeObserver),
          ((i = document.createElement("div")).style.display = "flow-root"),
          "header" === e ? (i.setAttribute(d.VV, ""), l.before(i)) : (i.setAttribute(d.R4, ""), l.after(i)),
          t?.observe(i),
          i)
        o.element = r
        let a = s()
        return (
          null != a ? r.replaceChildren(a) : !this.isContainerManaged && r.children.length > 0 && (r.textContent = ""),
          (o.render = s),
          !0
        )
      }
      setHostHeight(e, t) {
        e.height !== t && ((e.height = t), (this.scrollDirty = !0))
      }
      measureMountedHosts() {
        ;(null != this.header.element &&
          this.setHostHeight(this.header, this.header.element.getBoundingClientRect().height),
          null != this.footer.element &&
            this.setHostHeight(this.footer, this.footer.element.getBoundingClientRect().height))
      }
      setup(e) {
        if (null != this.root) throw Error("CodeView.setup: already setup")
        ;(this.workerManager?.subscribeToThemeChanges(this),
          (this.root = e),
          (this.root.style.overflowAnchor = "none"),
          this.root.hasAttribute("tabindex") || (this.root.tabIndex = -1),
          (this.container ??= document.createElement("div")),
          (this.container.style.contain = "layout style"),
          this.syncLayout(),
          this.container.appendChild(this.stickyOffset),
          this.container.appendChild(this.stickyContainer),
          this.root.appendChild(this.container),
          (this.scrollDirty = !0),
          (this.heightDirty = !0),
          (this.resizeObserver = new ResizeObserver(this.handleResize)),
          this.resizeObserver.observe(this.stickyContainer),
          this.root.addEventListener("scroll", this.handleScroll, { passive: !0 }),
          this.root.addEventListener("wheel", this.clearPendingScroll, { capture: !0, passive: !0 }),
          this.root.addEventListener("touchstart", this.clearPendingScroll, { capture: !0, passive: !0 }),
          this.root.addEventListener("pointerdown", this.clearPendingScroll, { capture: !0, passive: !0 }),
          this.root.addEventListener("keydown", this.clearPendingScroll, { capture: !0, passive: !0 }),
          this.resizeObserver.observe(this.root),
          this.render(!0))
      }
      reset() {
        let e
        ;((0, f.nx)(this.computeRenderRangeAndEmit),
          this.clearReadySubscription(),
          this.restoreScrollInteractions(),
          this.cleanAllRenderedItems())
        let { items: t } = this,
          i = [...this.itemEditors.values()].map((e) => {
            let t = this.idToItem.get(e.state.id)
            return (null != t && (e.state.removedItem = t.item), e)
          })
        ;(this.itemEditors.clear(),
          this.attachedEditors.clear(),
          (this.selectedLines = null),
          (this.items = []),
          this.idToItem.clear(),
          this.instanceToItem.clear())
        let n = !1
        for (let t of i)
          try {
            t.editor.cleanUp("discard")
          } catch (t) {
            n || ((n = !0), (e = t))
          }
        for (let i of t)
          try {
            i.instance.cleanUp()
          } catch (t) {
            n || ((n = !0), (e = t))
          }
        if (
          ((this.layoutDirtyIndex = void 0),
          (this.pendingLayoutReset = void 0),
          (this.stickyContainer.textContent = ""),
          (this.stickyOffset.style.height = ""),
          this.container?.style.removeProperty("height"),
          (this.containerHeight = -1),
          (this.windowSpecs = { top: 0, bottom: 0 }),
          (this.pendingLayoutAnchor = void 0),
          (this.shouldFixContainerFocus = !1),
          (this.height = 0),
          (this.scrollTop = 0),
          (this.scrollPageOffset = 0),
          (this.scrollHeight = 0),
          (this.scrollDirty = !0),
          (this.heightDirty = !0),
          this.resetRenderState(),
          this.isContainerManaged || this.flushSlotCoordinator(),
          n)
        )
          throw e
      }
      cleanUp() {
        let e,
          t = !1
        try {
          this.reset()
        } catch (i) {
          ;((t = !0), (e = i))
        }
        if (
          (this.clearElementPool(),
          this.restoreScrollInteractions(),
          this.workerManager?.unsubscribeToThemeChanges(this),
          this.resizeObserver?.disconnect(),
          (this.resizeObserver = void 0),
          this.root?.removeEventListener("scroll", this.handleScroll),
          this.root?.removeEventListener("wheel", this.clearPendingScroll, !0),
          this.root?.removeEventListener("touchstart", this.clearPendingScroll, !0),
          this.root?.removeEventListener("pointerdown", this.clearPendingScroll, !0),
          this.root?.removeEventListener("keydown", this.clearPendingScroll, !0),
          this.root?.style.removeProperty("overflow-anchor"),
          this.container?.remove(),
          this.stickyOffset.remove(),
          this.stickyContainer.remove(),
          (this.stickyContainer.textContent = ""),
          this.header.element?.remove(),
          (this.header.element = void 0),
          (this.header.render = void 0),
          (this.header.height = 0),
          this.footer.element?.remove(),
          (this.footer.element = void 0),
          (this.footer.render = void 0),
          (this.footer.height = 0),
          (this.root = void 0),
          (this.container = void 0),
          t)
        )
          throw e
      }
      cleanAllRenderedItems() {
        if (-1 !== this.renderState.firstIndex)
          for (let e = this.renderState.firstIndex; e <= this.renderState.lastIndex; e++) {
            let t = this.items[e]
            if (null == t) throw Error(`CodeView.cleanAllRenderedItems: Item does not exist at index: ${e}`)
            this.releaseRenderedItem(t)
          }
      }
      primeScrollTarget(e) {
        if ("position" === e.type) return
        let t = this.idToItem.get(e.id)
        null != t && t.instance.primeHighlightCache()
      }
      getElementPoolLimit() {
        let e = this.getHeight() + 2 * this.config.overscrollSize,
          { diffHeaderHeight: t } = this.itemMetricsCache
        return Math.max(8, Math.ceil(e / Math.max(t, 10)) + 1) * (this.isContainerManaged ? 2 : 1)
      }
      acquireElement() {
        this.promotePendingPooledElements()
        let e = this.elementPool.pop()
        for (; null != e && !this.isElementPoolGenerationCurrent(e);) e = this.elementPool.pop()
        return ((e ??= document.createElement(d.mZ)), this.markElementPoolGenerationCurrent(e), e)
      }
      releaseRenderedItem(e) {
        let { element: t } = e
        ;(null != t && this.renderedItemOwnsFocus(t) && (this.shouldFixContainerFocus = !0),
          e.instance.cleanUp(!0),
          this.attachedEditors.delete(e.item.id),
          (e.element = void 0),
          null != t && (t.remove(), this.cleanElement(t), this.queueElementForPool(t)))
      }
      renderedItemOwnsFocus(e) {
        let { activeElement: t } = document
        return t === e || e.contains(t) || e.shadowRoot?.activeElement != null
      }
      fixContainerFocus() {
        this.shouldFixContainerFocus && ((this.shouldFixContainerFocus = !1), this.root?.focus({ preventScroll: !0 }))
      }
      cleanElement(e) {
        let { shadowRoot: t } = e
        if (null != t)
          for (let e of Array.from(t.children)) {
            var i
            ;(i = e) instanceof SVGElement ||
              ((0, y.K)(i) &&
                (i.hasAttribute("data-core-css") ||
                  i.hasAttribute("data-theme-css") ||
                  i.hasAttribute("data-unsafe-css"))) ||
              e.remove()
          }
        this.isContainerManaged || e.replaceChildren()
      }
      queueElementForPool(e) {
        let t = this.getElementPoolLimit()
        !this.isElementPoolGenerationCurrent(e) ||
          this.getElementPoolSize() >= t ||
          (this.isElementClean(e) ? this.elementPool.push(e) : this.pendingElementPool.push(e))
      }
      promotePendingPooledElements() {
        if (0 === this.pendingElementPool.length) return
        let { pendingElementPool: e } = this
        this.pendingElementPool = []
        let t = this.getElementPoolLimit()
        for (let i of e)
          this.isElementPoolGenerationCurrent(i) && this.isElementClean(i) && this.elementPool.length < t
            ? this.elementPool.push(i)
            : this.isElementPoolGenerationCurrent(i) && this.getElementPoolSize() < t && this.pendingElementPool.push(i)
      }
      isElementClean(e) {
        return 0 === e.childNodes.length
      }
      getElementPoolSize() {
        return this.elementPool.length + this.pendingElementPool.length
      }
      clearElementPool() {
        ;((this.elementPool.length = 0), (this.pendingElementPool.length = 0))
      }
      invalidateElementPool() {
        ;(this.elementPoolVersion++, this.clearElementPool())
      }
      markElementPoolGenerationCurrent(e) {
        this.elementPoolTracker.set(e, this.elementPoolVersion)
      }
      isElementPoolGenerationCurrent(e) {
        return this.elementPoolTracker.get(e) === this.elementPoolVersion
      }
      resolveEffectiveScrollBehavior(e, t) {
        return !("u" < typeof window) &&
          "function" == typeof window.matchMedia &&
          window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth-auto" !== e.behavior
            ? (e.behavior ?? "instant")
            : Math.abs(t - this.getScrollTop()) <= 10 * this.getHeight()
              ? "smooth"
              : "instant"
      }
      scrollTo(e) {
        if (null == this.root) return
        let t = this.normalizeScrollTarget(e)
        if (null == t) return
        let i = this.resolveScrollTargetTop(t)
        null != i &&
          (this.primeScrollTarget(t),
          "smooth" === this.resolveEffectiveScrollBehavior(t, i)
            ? (this.scrollAnimation ??= {
                position: this.getScrollTop(),
                velocity: 0,
                lastTimestamp: performance.now(),
              })
            : (this.scrollAnimation = void 0),
          this.suspendScrollInteractions(),
          (this.pendingLayoutAnchor = void 0),
          (this.pendingScrollTarget = t),
          this.render())
      }
      setSelectedLines(e, t) {
        this.applySelectedLines(e, t)
      }
      getSelectedLines() {
        return this.selectedLines
      }
      clearSelectedLines(e) {
        this.applySelectedLines(null, e)
      }
      getItem(e) {
        return this.idToItem.get(e)?.item
      }
      getEditor(e) {
        return this.itemEditors.get(e)?.editor
      }
      updateItem(e) {
        let t = this.idToItem.get(e.id)
        return null == t
          ? (console.error(`CodeView.updateItem: unknown item id "${e.id}"`), !1)
          : !!this.syncItemRecord(t, e) &&
              (this.markItemLayoutDirty(t),
              (this.scrollDirty = !0),
              this.render(),
              this.syncItemEditors(),
              this.syncSelection(),
              !0)
      }
      updateItemId(e, t) {
        if (e === t) return !0
        let i = this.idToItem.get(e)
        if (null == i) return (console.error(`CodeView.updateItemId: unknown item id "${e}"`), !1)
        if (this.idToItem.has(t)) return (console.error(`CodeView.updateItemId: duplicate item id "${t}"`), !1)
        ;(this.idToItem.delete(e),
          (i.item.id = t),
          this.idToItem.set(t, i),
          this.updateItemOptionsId(i.instance.options, t),
          this.selectedLines?.id === e &&
            ((this.selectedLines = { ...this.selectedLines, id: t }),
            this.options.onSelectedLinesChange?.(this.selectedLines)))
        let n = this.itemEditors.get(e)
        return (
          null != n &&
            (this.itemEditors.delete(e),
            this.itemEditors.set(t, n),
            this.attachedEditors.delete(e) && this.attachedEditors.add(t)),
          this.renamePendingScrollTarget(e, t),
          this.renamePendingLayoutAnchor(e, t),
          this.render(),
          !0
        )
      }
      addItem(e) {
        this.addItems([e])
      }
      addItems(e) {
        ;(this.appendItemsInternal(e), this.syncItemEditors(), this.syncSelection())
      }
      removeItem(e) {
        let t = this.idToItem.get(e)
        if (null == t) return (console.error(`CodeView.removeItem: unknown item id "${e}"`), !1)
        let i = []
        for (let e of this.items) e !== t && i.push(e.item)
        return (this.setItems(i), !0)
      }
      setItems(e) {
        let t
        0 === this.items.length ? this.appendItemsInternal(e) : this.tryAppendItems(e) || (t = this.reconcileItems(e))
        try {
          this.syncItemEditors(t)
        } finally {
          for (let e of t?.values() ?? []) e.instance.cleanUp()
        }
        this.syncSelection()
      }
      appendItemsInternal(e, t = !0) {
        if (0 === e.length) return
        let i = this.getLayout(),
          n = 0 === this.items.length ? 0 : this.scrollHeight + i.gap,
          l = n
        for (let t = 0; t < e.length; t++) {
          var o
          let l = e[t]
          if (null == l) throw Error("CodeView.appendItemsInternal: missing input item")
          if (this.idToItem.has(l.id)) throw Error(`CodeView.addItem: duplicate id "${l.id}"`)
          let s = this.createItem(l, this.items.length, n)
          ;(this.items.push(s),
            this.idToItem.set(s.item.id, s),
            this.instanceToItem.set(s.instance, s),
            (s.height = ((o = s).instance.cleanUp(!0), "diff" === o.type)
              ? o.instance.updateCodeViewLayout(o.item.fileDiff, o.top, void 0, o.item.annotations ?? [])
              : o.instance.updateCodeViewLayout(o.item.file, o.top, void 0, o.item.annotations ?? [])),
            (n += s.height + i.gap))
        }
        ;((this.scrollHeight = n - i.gap),
          (this.scrollDirty = !0),
          t && (this.canSkipRenderForAppend(l) ? this.syncContainerHeight() : this.render()))
      }
      canSkipRenderForAppend(e) {
        return (
          null != this.container &&
          -1 !== this.renderState.firstIndex &&
          null == this.pendingScrollTarget &&
          null == this.scrollAnimation &&
          null == this.layoutDirtyIndex &&
          e > this.windowSpecs.bottom
        )
      }
      onThemeChange() {
        this.invalidateElementPool()
      }
      setOptions(e) {
        var t, i, n, l, o, s
        if (null == e) return
        this.capturePendingLayoutAnchor()
        let { options: r } = this,
          c = this.getLayout(),
          { itemMetricsCache: h } = this
        ;((t = r),
          (i = e),
          ((0, m.J)(t.theme ?? d.Bc, i.theme ?? d.Bc) &&
            (t.themeType ?? "system") === (i.themeType ?? "system") &&
            t.unsafeCSS === i.unsafeCSS) ||
            this.invalidateElementPool(),
          (this.options = e))
        let u = this.computeMetricsCache(e.itemMetrics),
          f = !(0, p.r)(h, u),
          g = !(0, p.r)(c, this.getLayout())
        g && this.syncLayout()
        let v =
          f ||
          ((n = r),
          (l = e),
          (n.overflow ?? "scroll") !== (l.overflow ?? "scroll") ||
            (n.disableLineNumbers ?? !1) !== (l.disableLineNumbers ?? !1) ||
            (n.disableFileHeader ?? !1) !== (l.disableFileHeader ?? !1) ||
            n.unsafeCSS !== l.unsafeCSS ||
            (n.diffStyle ?? "split") !== (l.diffStyle ?? "split") ||
            (n.diffIndicators ?? "bars") !== (l.diffIndicators ?? "bars") ||
            (n.hunkSeparators ?? "line-info") !== (l.hunkSeparators ?? "line-info") ||
            (n.expandUnchanged ?? !1) !== (l.expandUnchanged ?? !1) ||
            (n.collapsedContextThreshold ?? 1) !== (l.collapsedContextThreshold ?? 1))
        if (v) {
          let t = this.pendingLayoutReset
          this.pendingLayoutReset = {
            metrics: f ? u : t?.metrics,
            resetFileLayoutCache: !0,
            resetDiffLayoutCache: !0,
            includeEstimatedDiffHeights:
              t?.includeEstimatedDiffHeights === !0 ||
              f ||
              ((o = r),
              (s = e),
              (o.disableFileHeader ?? !1) !== (s.disableFileHeader ?? !1) ||
                (o.hunkSeparators ?? "line-info") !== (s.hunkSeparators ?? "line-info") ||
                (o.expandUnchanged ?? !1) !== (s.expandUnchanged ?? !1) ||
                (o.collapsedContextThreshold ?? 1) !== (s.collapsedContextThreshold ?? 1)),
          }
        }
        ;((g || v) && (this.markLayoutDirtyFromIndex(0), (this.scrollDirty = !0)),
          !(0, a.l)(r, e) && this.renderOptionsRevision++,
          this.syncItemEditors())
        let y = r.renderCodeViewHeader !== e.renderCodeViewHeader || r.renderCodeViewFooter !== e.renderCodeViewFooter
        !this.isContainerManaged && (this.items.length > 0 || y) && this.render()
      }
      capturePendingLayoutAnchor(e = this.idToItem) {
        null != this.root &&
          0 !== this.items.length &&
          null == this.pendingScrollTarget &&
          (this.pendingLayoutAnchor = this.getScrollAnchor(this.getScrollTop(), e))
      }
      render(t = !1) {
        e.__STOP ||
          (t
            ? ((0, f.nx)(this.computeRenderRangeAndEmit), this.computeRenderRangeAndEmit())
            : (0, f.Y5)(this.computeRenderRangeAndEmit))
      }
      isReady() {
        let { workerManager: e } = this
        return null == e || e.getStats().workersFailed
          ? this.isSharedHighlighterReady()
          : e.isInitialized()
            ? (this.clearReadySubscription(), !0)
            : ((this.isReadySubscription ??= e.subscribeToStatChanges((e) => {
                ;("initialized" === e.managerState || e.workersFailed) &&
                  (this.clearReadySubscription(), this.render(!0))
              })),
              "waiting" === e.getStats().managerState && e.initialize().catch(() => {}),
              !1)
      }
      clearReadySubscription() {
        null != this.isReadySubscription &&
          (this.isReadySubscription(), (this.isReadySubscription = void 0), (this.pendingHighlighterTheme = void 0))
      }
      isSharedHighlighterReady() {
        let e,
          t = this.workerManager?.getFileRenderOptions().theme ?? this.options.theme ?? d.Bc
        return null != (0, u.Ow)({ theme: t })
          ? (this.clearReadySubscription(), !0)
          : ((0, m.J)(this.pendingHighlighterTheme, t) || this.clearReadySubscription(),
            (this.isReadySubscription ??=
              ((this.pendingHighlighterTheme = t),
              (e = !1),
              (0, u.Lt)({
                themes: (0, h.$)(t),
                langs: [],
                preferredHighlighter: (0, S.P)(this.workerManager, this.options),
              }).then(
                () => {
                  e || (this.clearReadySubscription(), this.render(!0))
                },
                (t) => {
                  !e && (this.clearReadySubscription(), t instanceof c.tP || console.error(t))
                },
              ),
              () => {
                e = !0
              })),
            !1)
      }
      instanceChanged(e, t) {
        let i = this.instanceToItem.get(e)
        if (null == i) throw Error("CodeView.instanceChanged: An instance has changed that is not registered")
        ;(t && this.markItemLayoutDirty(i), this.render())
      }
      getWindowSpecs() {
        return this.windowSpecs
      }
      getContainerElement() {
        return this.root
      }
      getHeaderElement() {
        return this.header.element
      }
      getFooterElement() {
        return this.footer.element
      }
      getRenderedItems() {
        let { firstIndex: e, lastIndex: t } = this.renderState
        if (-1 === e || -1 === t || t < e) return []
        let i = []
        for (let n = e; n <= t; n++) {
          let e = this.items[n]
          e?.element != null &&
            ("diff" === e.type
              ? i.push({
                  id: e.item.id,
                  type: "diff",
                  item: e.item,
                  version: e.version,
                  element: e.element,
                  instance: e.instance,
                })
              : i.push({
                  id: e.item.id,
                  type: "file",
                  item: e.item,
                  version: e.version,
                  element: e.element,
                  instance: e.instance,
                }))
        }
        return i
      }
      setSlotCoordinator(e) {
        return e !== this.slotCoordinator && ((this.slotCoordinator = e), (this.slotSnapshot = void 0), !0)
      }
      getSlotSnapshot(e) {
        return this.buildSlotSnapshot(e)
      }
      buildSlotSnapshot(e) {
        let t = (function (e, { hasHeaderRenderers: t, hasAnnotationRenderer: i, hasGutterRenderer: n }) {
            if (0 === e.length) return
            if (t || n) return e
            if (!i) return
            let l = []
            for (let t of e) {
              var o
              ;((o = t.item), (o.annotations?.length ?? 0) > 0 && l.push(t))
            }
            return l.length > 0 ? l : void 0
          })(this.getRenderedItems(), e),
          { element: i } = this.header,
          { element: n } = this.footer
        if (null != t || null != i || null != n) return { items: t, header: i, footer: n }
      }
      subscribeToScroll(e) {
        return (
          this.scrollListeners.add(e),
          () => {
            this.scrollListeners.delete(e)
          }
        )
      }
      getLocalTopForInstance(e) {
        let t = this.instanceToItem.get(e)
        if (null == t) throw Error("CodeView.getLocalTopForInstance: unknown virtualized instance")
        return t.top
      }
      getTopForItem(e) {
        let t = this.idToItem.get(e)
        if (null != t) return t.top + this.getItemTopOffset()
      }
      createItem(e, t, i) {
        let { itemMetricsCache: n } = this
        if ("diff" === e.type) {
          let l = new C.V(this.createDiffOptions(e.id), this, n, this.workerManager, this.isContainerManaged)
          return {
            type: "diff",
            item: e,
            version: e.version,
            index: t,
            top: i,
            height: 0,
            element: void 0,
            renderedOptionsRevision: this.renderOptionsRevision,
            instance: l,
          }
        }
        let l = new b.A(this.createFileOptions(e.id), this, n, this.workerManager, this.isContainerManaged)
        return {
          type: "file",
          item: e,
          version: e.version,
          index: t,
          top: i,
          height: 0,
          element: void 0,
          renderedOptionsRevision: this.renderOptionsRevision,
          instance: l,
        }
      }
      applySelectedLines(e, t) {
        let { selectedLines: i } = this
        ;(null == e && null == i) ||
          (null != e && i?.id === e.id && (0, g.k)(i.range, e.range)) ||
          (null != i && i.id !== e?.id && this.idToItem.get(i.id)?.instance.setSelectedLines(null, { notify: !1 }),
          (this.selectedLines = e),
          this.idToItem.get(e?.id ?? "")?.instance.setSelectedLines(e?.range ?? null, t))
      }
      syncSelection() {
        if (null == this.selectedLines) return
        let e = this.idToItem.get(this.selectedLines.id)
        if (null == e) {
          ;((this.selectedLines = null), this.options.onSelectedLinesChange?.(null))
          return
        }
        e.instance.setSelectedLines(this.selectedLines.range, { notify: !1 })
      }
      isItemInEditMode(e) {
        return !0 === e.item.edit && !0 !== e.item.collapsed
      }
      attachItemEditor(e) {
        let t,
          { id: i } = e.item,
          { createEditor: n } = this.options
        if (null == e.element || this.attachedEditors.has(i) || !this.isItemInEditMode(e)) return
        let l = this.itemEditors.get(i)
        try {
          if (null == l && "diff" === e.type && !e.instance.__canAttachEditor())
            return void e.instance.__prepareForEditing()
          if (null == l) {
            if (null == n) throw Error("CodeView: createEditor is required for items with edit: true")
            let l = e.instance.options[k]
            if (null == l) throw Error("CodeView.attachItemEditor: instance options are missing their state")
            let o = (e) => {
                let t = this.idToItem.get(l.id)
                null != t && this.options.onItemEditChange?.(e, t.item)
              },
              s = this.options.getEditStateKey?.(e.item)
            if ("diff" === e.type) {
              let r = n("file-diff", { onChange: o }, s)
              ;((t = r), this.itemEditors.set(i, { editor: r, state: l, dispose: r.edit(e.instance) }))
            } else {
              let r = n("file", { onChange: o }, s)
              ;((t = r), this.itemEditors.set(i, { editor: r, state: l, dispose: r.edit(e.instance) }))
            }
          } else (e.type, (l.dispose = l.editor.edit(e.instance)))
          this.attachedEditors.add(i)
        } catch (i) {
          throw (t?.cleanUp(), this.releaseRenderedItem(e), i)
        }
      }
      syncItemEditors(e) {
        let t
        if (0 === this.itemEditors.size) return
        let i = []
        for (let [t, n] of this.itemEditors) {
          let l = this.idToItem.get(t),
            o = e?.get(t)
          if (null == o && null != l) {
            let { edit: e = !1, collapsed: i = !1 } = l.item
            if (e) {
              i && this.attachedEditors.delete(t) && n.editor.cleanUp("recycle")
              continue
            }
          } else null != o && (n.state.removedItem = o.item)
          ;(this.itemEditors.delete(t), this.attachedEditors.delete(t), i.push(n))
        }
        if (0 === i.length) return
        let n = !1
        for (let e of i) {
          try {
            e.dispose()
          } catch (e) {
            n || ((n = !0), (t = e))
          }
          let i = this.idToItem.get(e.state.id)
          null != i && this.markItemLayoutDirty(i)
        }
        if ((this.render(), n)) throw t
      }
      requireItemFromState(e) {
        let t = this.idToItem.get(e.id)?.item ?? e.removedItem
        if (null == t) throw Error(`CodeView.onItemEditComplete: unknown item "${e.id}"`)
        return t
      }
      completeFileItemEdit(e, t) {
        let i = this.requireItemFromState(e)
        if ("file" !== i.type) throw Error(`CodeView.onItemEditComplete: item "${e.id}" is not a file item`)
        let n = { ...i, file: t.file, annotations: t.lineAnnotations, edit: !1, version: (i.version ?? 0) + 1 }
        return (this.options.onItemEditComplete?.(t, i, n) ?? "reject") === "reject"
          ? "reject"
          : (this.idToItem.has(i.id) && this.updateItem(n), "accept")
      }
      completeDiffItemEdit(e, t) {
        let i = this.requireItemFromState(e)
        if ("diff" !== i.type) throw Error(`CodeView.onItemEditComplete: item "${e.id}" is not a diff item`)
        let n = { ...i, fileDiff: t.fileDiff, annotations: t.lineAnnotations, edit: !1, version: (i.version ?? 0) + 1 }
        return (this.options.onItemEditComplete?.(t, i, n) ?? "reject") === "reject"
          ? "reject"
          : (this.idToItem.has(i.id) && this.updateItem(n), "accept")
      }
      renamePendingScrollTarget(e, t) {
        let { pendingScrollTarget: i } = this
        null != i && "position" !== i.type && i.id === e && (this.pendingScrollTarget = { ...i, id: t })
      }
      renamePendingLayoutAnchor(e, t) {
        this.pendingLayoutAnchor?.id === e && (this.pendingLayoutAnchor.id = t)
      }
      createFileOptionsPrototype() {
        let e = {}
        for (let t of I) A(e, t, () => this.options[t])
        for (let t of (A(e, "stickyHeader", () => this.options.stickyHeaders),
        A(e, "collapsed", (e) => {
          let t = e[k]
          if (null != t) return this.getItemOptions(t, "file")?.item.collapsed
        }),
        A(e, "onEditComplete", (e) => {
          if (null == this.options.onItemEditComplete) return
          let t = e[k]
          if (null != t) return (e) => this.completeFileItemEdit(t, e)
        }),
        R))
          this.defineItemSharedCallback(e, "file", t)
        for (let t of T) this.defineItemSelectionCallback(e, "file", t)
        return e
      }
      createDiffOptionsPrototype() {
        let e = {}
        for (let t of E) A(e, t, () => this.options[t])
        for (let t of (A(e, "stickyHeader", () => this.options.stickyHeaders),
        A(e, "hunkSeparators", () => this.options.hunkSeparators),
        A(e, "collapsed", (e) => {
          let t = e[k]
          if (null != t) return this.getItemOptions(t, "diff")?.item.collapsed
        }),
        A(e, "onEditComplete", (e) => {
          if (null == this.options.onItemEditComplete) return
          let t = e[k]
          if (null != t) return (e) => this.completeDiffItemEdit(t, e)
        }),
        R))
          this.defineItemSharedCallback(e, "diff", t)
        for (let t of T) this.defineItemSelectionCallback(e, "diff", t)
        return e
      }
      createFileOptions(e) {
        let t = Object.create(this.fileOptionsPrototype)
        return (M(t, { id: e }), t)
      }
      createDiffOptions(e) {
        let t = Object.create(this.diffOptionsPrototype)
        return (M(t, { id: e }), t)
      }
      updateItemOptionsId(e, t) {
        let i = e[k]
        if (null == i) throw Error("CodeView.updateItemOptionsId: No valid state")
        i.id = t
      }
      getItemOptions(e, t) {
        let i = this.idToItem.get(e.id)
        if (null != i && i.type === t) return i
      }
      defineItemSharedCallback(e, t, i) {
        A(e, i, (e) => {
          if (null == this.options[i]) return
          let n = e[k]
          if (null == n) return
          let l = (n.callbackCache ??= {}),
            o = l[i]
          return (
            null == o &&
              ((o = (...e) => {
                let l = this.getItemOptions(n, t)
                if (null == l) return
                let o = this.options[i]
                return o?.(...e, l)
              }),
              (l[i] = o)),
            o
          )
        })
      }
      defineItemSelectionCallback(e, t, i) {
        A(e, i, (e) => {
          let n = e[k]
          if (null == n) return
          let l = (n.callbackCache ??= {}),
            o = l[i]
          return (
            null == o &&
              ((o = (e) => {
                let l = this.getItemOptions(n, t)
                if (null == l) return
                let o = null == e ? null : { id: l.item.id, range: e }
                ;(!0 !== this.options.controlledSelection &&
                  (null != e || this.selectedLines?.id === l.item.id) &&
                  this.applySelectedLines(o, { notify: !1 }),
                  this.options.onSelectedLinesChange?.(o))
                let s = this.options[i]
                return s?.(e, l)
              }),
              (l[i] = o)),
            o
          )
        })
      }
      markLayoutDirtyFromIndex(e) {
        this.layoutDirtyIndex = Math.min(this.layoutDirtyIndex ?? e, e)
      }
      markItemLayoutDirty(e) {
        if (this.items[e.index] !== e) throw Error(`CodeView.markItemLayoutDirty: unknown item id "${e.item.id}"`)
        this.markLayoutDirtyFromIndex(e.index)
      }
      tryAppendItems(e) {
        if (e.length <= this.items.length) return !1
        for (let t = 0; t < this.items.length; t++) {
          let i = this.items[t]
          if (null == i) throw Error("CodeView.tryAppendItems: missing existing item")
          let n = e[t]
          if (null == n || i.item.id !== n.id || i.type !== n.type) return !1
        }
        for (let t = 0; t < this.items.length; t++) {
          let i = this.items[t]
          if (null == i) throw Error("CodeView.tryAppendItems: missing existing item")
          let n = e[t]
          if (null == n) throw Error("CodeView.tryAppendItems: append candidate missing prefix item")
          this.syncItemRecord(i, n) && this.markLayoutDirtyFromIndex(t)
        }
        return (this.appendItemsInternal(e.slice(this.items.length), !1), (this.scrollDirty = !0), this.render(), !0)
      }
      reconcileItems(e) {
        let t,
          { items: i, idToItem: n } = this,
          l = new Set(i),
          o = [],
          s = new Map(),
          r = new Map(),
          a = new Map()
        for (let a = 0; a < e.length; a++) {
          let d = e[a]
          if (null == d) throw Error("CodeView.reconcileItems: missing input item")
          if (s.has(d.id)) throw Error(`CodeView.setItems: duplicate id "${d.id}"`)
          let c = n.get(d.id),
            h = null != c && c.type === d.type ? c : this.createItem(d, a, 0)
          ;((h.index = a),
            null != c && c.type === d.type
              ? (l.delete(c), this.syncItemRecord(h, d) && (t = Math.min(t ?? a, a)))
              : (t = Math.min(t ?? a, a)),
            i[a] !== h && (t = Math.min(t ?? a, a)),
            o.push(h),
            s.set(d.id, h),
            r.set(h.instance, h))
        }
        if (null == t) {
          if (0 === l.size) return
          t = Math.max(o.length - 1, 0)
        }
        this.capturePendingLayoutAnchor(s)
        for (let e = 0; e < i.length; e++) {
          let n = i[e]
          if (null == n || !l.has(n)) continue
          ;(a.set(n.item.id, n), this.releaseRenderedItem(n))
          let s = Math.max(o.length - 1, 0)
          t = Math.min(t ?? s, s)
        }
        return (
          (this.items = o),
          (this.idToItem = s),
          (this.instanceToItem = r),
          this.renderState.firstIndex >= o.length
            ? this.resetRenderState()
            : this.renderState.lastIndex >= o.length && (this.renderState.lastIndex = o.length - 1),
          this.markLayoutDirtyFromIndex(t),
          (this.scrollDirty = !0),
          this.render(),
          a.size > 0 ? a : void 0
        )
      }
      syncItemRecord(e, t) {
        if (e.type !== t.type) throw Error(`CodeView.syncItemRecord: type mismatch for id "${t.id}"`)
        return e.version !== t.version && ((e.item = t), (e.version = t.version), (e.renderedOptionsRevision = -1), !0)
      }
      getMaxScrollTopForHeight(e) {
        let { paddingBottom: t, paddingTop: i } = this.getLayout()
        return Math.max(i + this.header.height + e + this.footer.height + t - this.getHeight(), 0)
      }
      getMaxScrollTop() {
        return this.getMaxScrollTopForHeight(this.getScrollHeight())
      }
      shouldRebaseScroll() {
        return this.getMaxScrollTop() > this.scrollRebaseConfig.threshold
      }
      getPagedScrollHeight() {
        return this.shouldRebaseScroll()
          ? Math.min(this.getScrollHeight(), this.scrollRebaseConfig.containerHeight)
          : this.getScrollHeight()
      }
      getMaxPagedScrollTop() {
        return this.getMaxScrollTopForHeight(this.getPagedScrollHeight())
      }
      clampPagedScrollTop(e) {
        return Math.max(0, Math.min(e, this.getMaxPagedScrollTop()))
      }
      clampScrollTop(e) {
        return Math.max(0, Math.min(e, this.getMaxScrollTop()))
      }
      getMaxScrollPageOffset() {
        return Math.max(this.getMaxScrollTop() - this.getMaxPagedScrollTop(), 0)
      }
      clampScrollPageOffset(e) {
        return Math.max(0, Math.min(e, this.getMaxScrollPageOffset()))
      }
      resolveScrollPageWindow(e, t) {
        let i = w(this.clampPagedScrollTop(t)),
          n = this.clampScrollPageOffset(e - i)
        return (
          (i = w(this.clampPagedScrollTop(e - n))),
          (n = this.clampScrollPageOffset(e - i)),
          { pagedScrollTop: i, scrollPageOffset: n }
        )
      }
      resolvePagedScrollPosition(e) {
        if (!this.shouldRebaseScroll()) return { pagedScrollTop: this.clampPagedScrollTop(e), scrollPageOffset: 0 }
        let { scrollPageOffset: t, scrollRebaseConfig: i } = this,
          n = this.clampScrollPageOffset(t),
          l = e - n,
          o = this.getMaxPagedScrollTop(),
          s = this.getMaxScrollPageOffset(),
          r = l > i.threshold && n < s,
          a = l < i.triggerTop && n > 0
        return l < 0 || l > o || r || a
          ? this.resolveScrollPageWindow(e, a ? Math.min(i.targetBottom, o) : i.targetTop)
          : { pagedScrollTop: w(this.clampPagedScrollTop(l)), scrollPageOffset: n }
      }
      needsScrollPageUpdate(e) {
        let t = w(this.clampScrollTop(e)),
          { scrollPageOffset: i } = this.resolvePagedScrollPosition(t)
        return i !== this.scrollPageOffset
      }
      getPagedLayoutTop(e) {
        return this.shouldRebaseScroll() ? Math.max(e - this.scrollPageOffset, 0) : e
      }
      getStickyHeaderOffset() {
        return !0 === this.options.stickyHeaders && !0 !== this.options.disableFileHeader
          ? this.itemMetricsCache.diffHeaderHeight
          : 0
      }
      getScrollTargetRect(e) {
        let t = this.idToItem.get(e.id)
        if (null == t) return void console.warn(`CodeView.scrollTo: unknown item id "${e.id}"`)
        if ("item" === e.type) return { top: t.top, height: t.height }
        if ("range" === e.type) {
          let i = this.getRangeScrollPosition(t, e)
          return null == i
            ? void console.warn(`CodeView.scrollTo: unable to resolve range ${H(e.range)} for item "${e.id}"`)
            : { top: t.top + i.top, height: i.height }
        }
        let i = this.getLineScrollPosition(t, e)
        return null == i
          ? void console.warn(`CodeView.scrollTo: unable to resolve line ${e.lineNumber} for item "${e.id}"`)
          : { top: t.top + i.top, height: i.height }
      }
      normalizeScrollTarget(e) {
        if ("position" === e.type || "nearest" !== e.align) return e
        let t = this.getScrollTargetRect(e)
        if (null == t) return
        let i = e.offset ?? 0,
          n = this.getItemTopOffset() + t.top,
          l = n + t.height,
          o = this.getScrollTop(),
          s = o + ("line" === e.type || "range" === e.type ? this.getStickyHeaderOffset() : 0),
          r = o + this.getHeight()
        if (!(n - i <= s) || !(l + i >= r)) {
          if (n - i < s) return { ...e, align: "start" }
          if (l + i > r) return { ...e, align: "end" }
        }
      }
      resolveScrollTargetTop(e) {
        if ("position" === e.type) {
          let t = this.clampScrollTop(e.position)
          return t !== e.position ? t : this.clampScrollTop(e.position - this.getStickyHeaderOffset())
        }
        let t = this.idToItem.get(e.id)
        if (null == t) return void console.warn(`CodeView.scrollTo: unknown item id "${e.id}"`)
        if ("item" === e.type)
          return this.clampScrollTop(this.resolveAlignedScrollPosition(t.top, t.height, e.align, e.offset))
        if ("range" === e.type) {
          let i = this.getRangeScrollPosition(t, e)
          return null == i
            ? void console.warn(`CodeView.scrollTo: unable to resolve range ${H(e.range)} for item "${e.id}"`)
            : this.clampScrollTop(
                this.resolveAlignedScrollPosition(
                  t.top + i.top,
                  i.height,
                  e.align,
                  e.offset,
                  this.getStickyHeaderOffset(),
                ),
              )
        }
        let i = this.getLineScrollPosition(t, e)
        return null == i
          ? void console.warn(`CodeView.scrollTo: unable to resolve line ${e.lineNumber} for item "${e.id}"`)
          : this.clampScrollTop(
              this.resolveAlignedScrollPosition(
                t.top + i.top,
                i.height,
                e.align,
                e.offset,
                this.getStickyHeaderOffset(),
              ),
            )
      }
      resolveAlignedScrollPosition(e, t, i, n = 0, l = 0) {
        e += this.getItemTopOffset()
        let o = this.getHeight()
        return "center" === i && t + n < o ? e - (o - t) / 2 + n : "end" === i ? e - (o - t) + n : e - l - n
      }
      getLineScrollPosition(e, t) {
        return "diff" === e.type
          ? e.instance.getLinePosition(t.lineNumber, t.side)
          : e.instance.getLinePosition(t.lineNumber)
      }
      getRangeScrollPosition(e, t) {
        let { range: i } = t,
          n = this.getLineScrollPosition(e, { type: "line", id: t.id, lineNumber: i.start, side: i.side }),
          l = this.getLineScrollPosition(e, { type: "line", id: t.id, lineNumber: i.end, side: i.endSide ?? i.side })
        if (null == n || null == l) return
        let o = n.top,
          s = o + n.height,
          r = l.top,
          a = r + l.height,
          d = Math.min(o, r)
        return { top: d, height: Math.max(s, a) - d }
      }
      computeTargetScrollTopForFrame(e, t) {
        if (null == this.pendingScrollTarget) return e
        let i = this.resolveScrollTargetTop(this.pendingScrollTarget)
        if (null == i) return e
        let { scrollAnimation: n } = this
        return null == n ? i : this.computeSpringStep(n, i, t).position
      }
      computeSpringStep(e, t, i) {
        let n = Math.max(0, i - e.lastTimestamp),
          { omega: l } = this.getSmoothScrollSettings(),
          o = Math.exp(-l * n),
          s = e.position - t,
          r = e.velocity + l * s
        return { position: t + (s + r * n) * o, velocity: (r * (1 - l * n) - l * s) * o }
      }
      advanceScrollAnimation(e, t) {
        if (null == this.pendingScrollTarget) return
        let i = this.resolveScrollTargetTop(this.pendingScrollTarget)
        if (null == i) {
          ;((this.pendingScrollTarget = void 0), (this.scrollAnimation = void 0))
          return
        }
        let n = this.scrollAnimation
        if (null == n) return i
        n.position += t
        let { position: l, velocity: o } = this.computeSpringStep(n, i, e)
        ;((n.lastTimestamp = e), (n.position = l), (n.velocity = o))
        let { positionEpsilon: s, velocityEpsilon: r } = this.getSmoothScrollSettings()
        return Math.abs(i - l) <= s && Math.abs(o) <= r
          ? ((n.position = i), (n.velocity = 0), (this.scrollAnimation = void 0), i)
          : n.position
      }
      computeRenderRangeAndEmit = (t = performance.now()) => {
        let i
        if (e.__STOP || null == this.container || !this.isReady()) return
        let n = this.getHeight(),
          l = this.getScrollTop(),
          o = l,
          s = null != this.pendingLayoutAnchor,
          r = this.getScrollAnchor(o)
        if (
          (null != this.layoutDirtyIndex &&
            (this.recomputeLayout(this.layoutDirtyIndex, this.pendingLayoutReset),
            (this.layoutDirtyIndex = void 0),
            (this.pendingLayoutReset = void 0),
            (s = !0)),
          s && null != r)
        ) {
          let e = this.resolveAnchoredScrollTop(r)
          if (null != e) {
            let t = e - o
            ;((o = e), null != this.scrollAnimation && (this.scrollAnimation.position += t))
          }
        }
        s && ((o = this.clampScrollTop(o)), this.syncContainerHeight())
        let a = this.computeTargetScrollTopForFrame(o, t),
          d =
            !s &&
            (-1 === this.renderState.scrollTop ||
              Math.abs(a - this.renderState.scrollTop) > n + 2 * this.config.overscrollSize)
        ;(d && (r = void 0),
          (this.windowSpecs = (0, v.d)({
            scrollTop: a - this.header.height,
            height: n,
            scrollHeight: this.getScrollHeight(),
            fitPerfectly: d,
            fitPerfectlyOverscroll: this.getFitPerfectlyOverscroll(),
            overscrollSize: this.config.overscrollSize,
          })))
        let c = l
        ;((null != this.pendingScrollTarget && a !== c) || this.needsScrollPageUpdate(a)) &&
          (this.applyScrollFix(a, c, this.windowSpecs), (c = a))
        let { top: h, bottom: u } = this.windowSpecs,
          { firstIndex: f, lastIndex: p } = this.renderState
        if (f >= 0)
          for (let e = f; e <= p; e++) {
            let t = this.items[e]
            if (null == t) throw Error(`CodeView.computeRenderRangeAndEmit: No item at index: ${e}`)
            ;(t.top > h - t.height && t.top <= u) || this.releaseRenderedItem(t)
          }
        let m = this.reconcileHeaderFooterHosts(),
          g = new Set(),
          y = this.findFirstVisibleIndex(h),
          x = this.findLastVisibleIndex(u)
        for (let e = y; e <= x; e++) {
          let t = this.items[e]
          if (null == t) throw Error("CodeView.computeRenderRangeAndEmit: missing item")
          let { instance: n } = t
          ;(null == t.element
            ? ((t.element = this.acquireElement()),
              B(this.stickyContainer, t.element, i),
              n.virtualizedSetup(),
              N(t, t.element) && ((t.renderedOptionsRevision = this.renderOptionsRevision), g.add(t)))
            : (B(this.stickyContainer, t.element, i),
              N(t, void 0, t.renderedOptionsRevision !== this.renderOptionsRevision) &&
                ((t.renderedOptionsRevision = this.renderOptionsRevision), g.add(t))),
            (i = t.element),
            !0 === t.item.edit && this.attachItemEditor(t))
        }
        ;((this.renderState.firstIndex = y <= x ? y : -1),
          (this.renderState.lastIndex = x),
          this.flushSlotCoordinator(),
          this.flushManagers(g),
          m && this.measureMountedHosts(),
          this.reconcileRenderedItems(g),
          this.syncContainerHeight(),
          this.updateStickyPositioning())
        let S = null != r ? this.resolveAnchoredScrollTop(r) : void 0
        r === this.pendingLayoutAnchor && (this.pendingLayoutAnchor = void 0)
        let b = null != S ? S - o : 0,
          C = a,
          E = !1
        if (null != this.pendingScrollTarget) {
          let e = this.advanceScrollAnimation(t, b)
          null != e ? ((C = e), (E = !0)) : (C = o)
        } else C = S ?? a
        ;(C !== c && (this.applyScrollFix(C, c, this.windowSpecs), (c = C)),
          E &&
            null != this.pendingScrollTarget &&
            this.isPendingTargetSettled(this.pendingScrollTarget) &&
            ((this.pendingScrollTarget = void 0), (this.scrollAnimation = void 0)),
          (this.renderState.scrollTop = w(c)),
          this.updateStickyPositioning(),
          this.validateStickyContainerHeight(),
          this.fixContainerFocus(),
          (d || null != this.scrollAnimation) && this.render())
      }
      flushManagers(e) {
        for (let t of e) t.instance.flushManagers()
      }
      syncContainerHeight() {
        let e = this.getPagedScrollHeight()
        null != this.container &&
          this.containerHeight !== e &&
          ((this.container.style.height = `${e}px`), (this.containerHeight = e))
      }
      getStickyBounds(e) {
        let { firstIndex: t, lastIndex: i } =
          null != e
            ? { firstIndex: this.findFirstVisibleIndex(e.top), lastIndex: this.findLastVisibleIndex(e.bottom) }
            : this.renderState
        if (-1 === t || -1 === i || t > i) return
        let n = this.items[t]?.instance.getAdvancedStickySpecs(e),
          l = this.items[i]?.instance.getAdvancedStickySpecs(e)
        if (null != n && null != l)
          return {
            stickyTop: this.getPagedLayoutTop(Math.max(n.topOffset, 0)),
            stickyBottom: this.getPagedLayoutTop(l.topOffset + l.height),
          }
      }
      applyStickyPositioning({ stickyTop: e, stickyBottom: t }) {
        let i = this.getHeight(),
          { itemMetricsCache: n } = this,
          l = t - e
        ;((this.renderState.stickyHeight = l),
          (this.renderState.stickyTop = e),
          (this.renderState.stickyBottom = t),
          (this.stickyOffset.style.height = `${e}px`))
        let o = -Math.max(l + -(((Math.random() * n.lineHeight) | 0) * 1), 0) + i
        ;((this.stickyContainer.style.top = `${o}px`),
          (this.stickyContainer.style.bottom = `${o + n.diffHeaderHeight}px`))
      }
      syncPagedScrollScaffolding(e) {
        this.syncContainerHeight()
        let t = this.getStickyBounds(e)
        if (null == t) {
          this.stickyOffset.style.height = `${this.getPagedLayoutTop(e.top)}px`
          return
        }
        this.applyStickyPositioning(t)
      }
      reconcileRenderedItems(e) {
        let { firstIndex: t, lastIndex: i } = this.renderState
        if (-1 === t) return
        let n = -1,
          l = !1
        for (let o = t; o < this.items.length && (l || !(o > i)); o++) {
          let t = this.items[o]
          if (null == t) throw Error("CodeView.reconcileRenderedItems: Invalid item")
          ;(-1 === n ? (n = t.top) : t.top !== n && ((t.top = n), t.instance.syncVirtualizedTop(), (l = !0)),
            (null == e ? o <= i : e.has(t)) &&
              (t.instance.reconcileHeights() && ((l = !0), (t.height = t.instance.getVirtualizedHeight())),
              this.validateRenderedItemHeight(t)),
            (n += t.instance.getVirtualizedHeight()),
            o < this.items.length - 1 && (n += this.getLayout().gap))
        }
        l && null != n && ((this.scrollDirty = !0), (this.scrollHeight = n))
      }
      updateStickyPositioning() {
        let e = this.getStickyBounds()
        if (null == e) {
          ;-1 === this.renderState.firstIndex && (this.stickyOffset.style.height = "")
          return
        }
        let { stickyTop: t, stickyBottom: i } = e
        ;(i - t !== this.renderState.stickyHeight ||
          t !== this.renderState.stickyTop ||
          i !== this.renderState.stickyBottom) &&
          this.applyStickyPositioning(e)
      }
      handleScroll = () => {
        e.__STOP || (this.suspendScrollInteractions(), (this.scrollDirty = !0), this.notifyScroll(), this.render())
      }
      clearPendingScroll = () => {
        ;((this.pendingScrollTarget = void 0), (this.pendingLayoutAnchor = void 0), (this.scrollAnimation = void 0))
      }
      handleResize = (e) => {
        let t = !1
        for (let i of e)
          if (i.target === this.stickyContainer) {
            if (Math.abs(i.borderBoxSize[0].blockSize - this.renderState.stickyHeight) >= 1) {
              let e = this.getScrollTop(),
                i = this.getScrollAnchor(e)
              ;(this.reconcileRenderedItems(), this.updateStickyPositioning())
              let n = null != i ? this.resolveAnchoredScrollTop(i) : void 0
              if (null != n) {
                let t = n - e
                ;(this.applyScrollFix(n, e, this.windowSpecs),
                  null != this.scrollAnimation && (this.scrollAnimation.position += t))
              }
              ;(null != this.pendingScrollTarget &&
                this.isPendingTargetSettled(this.pendingScrollTarget) &&
                ((this.pendingScrollTarget = void 0), (this.scrollAnimation = void 0)),
                (t = !0))
            }
          } else if (i.target === this.header.element || i.target === this.footer.element) {
            let e = i.target === this.header.element ? this.header : this.footer,
              n = i.borderBoxSize[0].blockSize
            if (n !== e.height) {
              let i = this.getScrollTop(),
                l = this.getScrollAnchor(i)
              this.setHostHeight(e, n)
              let o = null != l ? this.resolveAnchoredScrollTop(l) : void 0
              if (null != o) {
                let e = o - i
                ;(this.applyScrollFix(o, i, this.windowSpecs),
                  null != this.scrollAnimation && (this.scrollAnimation.position += e))
              }
              ;(null != this.pendingScrollTarget &&
                this.isPendingTargetSettled(this.pendingScrollTarget) &&
                ((this.pendingScrollTarget = void 0), (this.scrollAnimation = void 0)),
                (t = !0))
            }
          } else ((this.scrollDirty = !0), (this.heightDirty = !0), (t = !0))
        t && this.render(!0)
      }
      getScrollAnchorViewportTop(e, t) {
        return e < t ? t + this.getStickyHeaderOffset() : t
      }
      getScrollAnchor(e, t = this.idToItem) {
        let i,
          { pendingLayoutAnchor: n } = this
        if (null != n) {
          let e = this.idToItem.get(n.id)
          if (null != e && t.get(n.id) === e) return n
          null != e && (i = e)
        }
        if (e <= 0) return
        let { firstIndex: l, lastIndex: o, stickyTop: s, stickyBottom: r } = this.renderState
        if (-1 === l || -1 === o) return
        let a = this.getHeight()
        if (-1 !== s && -1 !== r) {
          for (let n = l; n <= o; n++) {
            let l = this.items[n]
            if (null == l) continue
            let o = this.getItemTopOffset() + l.top
            if (o + l.height <= e) continue
            if (o >= e + a) break
            if (t.get(l.item.id) !== l) {
              i ??= l
              continue
            }
            if (o >= e) return { type: "item", id: l.item.id, viewportOffset: o - e }
            let s = this.getScrollAnchorViewportTop(o, e) - o,
              r = l.instance.getNumericScrollAnchor(s)
            if (null != r) {
              let t = o + r.top
              return { type: "line", id: l.item.id, lineNumber: r.lineNumber, side: r.side, viewportOffset: t - e }
            }
          }
          if (null != i)
            for (let e = i.index + 1; e < this.items.length; e++) {
              let i = this.items[e]
              if (null != i && t.get(i.item.id) === i) return { type: "item", id: i.item.id, viewportOffset: 0 }
            }
        }
      }
      resolveAnchoredScrollTop(e) {
        let t = this.idToItem.get(e.id)
        if (null == t) return
        let i = this.getItemTopOffset()
        if ("item" === e.type) {
          let n = i + t.top
          return this.clampScrollTop(n - e.viewportOffset)
        }
        let n =
          "diff" === t.type
            ? t.instance.getLinePosition(e.lineNumber, e.side)
            : t.instance.getLinePosition(e.lineNumber)
        if (null == n) return
        let l = i + t.top + n.top
        return this.clampScrollTop(l - e.viewportOffset)
      }
      applyScrollFix(e, t, i) {
        if (null == this.root) return
        let n = w(this.clampScrollTop(e)),
          l = w(t),
          { scrollPageOffset: o } = this,
          s = w(this.clampPagedScrollTop(l - o)),
          { pagedScrollTop: r, scrollPageOffset: a } = this.resolvePagedScrollPosition(n),
          d = o !== a
        ;(n !== this.renderState.scrollTop || n !== l || r !== s || d) &&
          (this.suspendScrollInteractions(),
          (r !== s || d) && ((this.scrollPageOffset = a), this.syncPagedScrollScaffolding(i)),
          r !== s && this.root.scrollTo({ top: r, behavior: "instant" }),
          (this.renderState.scrollTop = n),
          (this.scrollTop = n),
          (this.scrollDirty = !1))
      }
      isPendingTargetSettled(e) {
        let t = this.resolveScrollTargetTop(e)
        return null == t || w(this.getScrollTop()) === w(t)
      }
      getScrollTop() {
        if (!this.scrollDirty) return this.scrollTop
        this.scrollDirty = !1
        let e = this.root?.scrollTop ?? 0
        return ((this.scrollTop = this.clampScrollTop(e + this.scrollPageOffset)), this.scrollTop)
      }
      getHeight() {
        return (
          this.heightDirty && ((this.heightDirty = !1), (this.height = this.root?.getBoundingClientRect().height ?? 0)),
          this.height
        )
      }
      getScrollHeight() {
        return this.scrollHeight
      }
      flushSlotCoordinator() {
        if (null == this.slotCoordinator) return
        let e = this.buildSlotSnapshot(this.slotCoordinator)
        r(this.slotSnapshot, e) || ((this.slotSnapshot = e), this.slotCoordinator.onSnapshotChange(e))
      }
      notifyScroll() {
        if (0 === this.scrollListeners.size) return
        let e = this.getScrollTop()
        for (let t of this.scrollListeners) t(e, this)
      }
      findFirstVisibleIndex(e) {
        let t = 0,
          i = this.items.length - 1,
          n = this.items.length
        for (; t <= i;) {
          let l = (t + i) >> 1,
            o = this.items[l]
          if (null == o) throw Error("CodeView.findFirstVisibleIndex: invalid item index")
          o.top + o.height > e ? ((n = l), (i = l - 1)) : (t = l + 1)
        }
        return n
      }
      findLastVisibleIndex(e) {
        let t = 0,
          i = this.items.length - 1,
          n = -1
        for (; t <= i;) {
          let l = (t + i) >> 1,
            o = this.items[l]
          if (null == o) throw Error("CodeView.findLastVisibleIndex: invalid item index")
          o.top <= e ? ((n = l), (t = l + 1)) : (i = l - 1)
        }
        return n
      }
      recomputeLayout(e = 0, t) {
        if (0 === this.items.length) {
          this.scrollHeight = 0
          return
        }
        let i = this.getLayout(),
          n = 0
        if (e > 0) {
          let t = this.items[e - 1]
          if (null == t) throw Error("CodeView.recomputeLayout: invalid dirty index")
          n = t.top + t.height + i.gap
        }
        for (let l = e; l < this.items.length; l++) {
          let e = this.items[l]
          if (null == e) throw Error("CodeView.recomputeLayout: invalid item index")
          ;((e.top = n),
            "diff" === e.type
              ? (e.height = e.instance.updateCodeViewLayout(e.item.fileDiff, n, t, e.item.annotations ?? []))
              : (e.height = e.instance.updateCodeViewLayout(e.item.file, n, t, e.item.annotations ?? [])),
            (n += e.height),
            l < this.items.length - 1 && (n += i.gap))
        }
        ;(n !== this.scrollHeight && (this.scrollDirty = !0), (this.scrollHeight = n))
      }
      resetRenderState() {
        ;((this.renderState.scrollTop = -1),
          (this.renderState.firstIndex = -1),
          (this.renderState.lastIndex = -1),
          (this.renderState.stickyHeight = 0),
          (this.renderState.stickyTop = -1),
          (this.renderState.stickyBottom = -1))
      }
      getFitPerfectlyOverscroll() {
        return this.getLayout().gap + this.itemMetricsCache.diffHeaderHeight
      }
    }
    function H(e) {
      let t = _(e.start, e.side),
        i = _(e.end, e.endSide ?? e.side)
      return t === i ? t : `${t}-${i}`
    }
    function _(e, t) {
      return null == t ? `${e}` : `${"deletions" === t ? "D" : "A"}${e}`
    }
    function N(e, t, i = !1) {
      return "diff" === e.type
        ? e.instance.render({
            deferManagers: !0,
            fileContainer: t,
            fileDiff: e.item.fileDiff,
            forceRender: i,
            lineAnnotations: e.item.annotations ?? [],
          })
        : e.instance.render({
            deferManagers: !0,
            fileContainer: t,
            file: e.item.file,
            forceRender: i,
            lineAnnotations: e.item.annotations ?? [],
          })
    }
    function B(e, t, i) {
      if (null == i) {
        e.firstChild !== t && e.prepend(t)
        return
      }
      i.nextSibling !== t && i.after(t)
    }
    var V = i("HqzJ"),
      z = i("GkUg"),
      U = i("czcq"),
      K = i("dVr3"),
      $ = i("zd8w"),
      W = i("v7qY")
    let q = "u" < typeof window ? $.useEffect : $.useLayoutEffect
    function G(e) {
      return {
        instance: void 0,
        items: void 0,
        controlled: e,
        managedOptions: void 0,
        disableFlushSync: !1,
        slotCoordinator: void 0,
      }
    }
    let Q = (0, $.forwardRef)(function (e, t) {
      let {
          className: i,
          containerRef: l,
          disableWorkerPool: o = !1,
          editorOptions: d,
          getEditStateKey: c,
          initialItems: h,
          items: u,
          onItemEditChange: f,
          onItemEditComplete: p,
          onScroll: m,
          onSelectedLinesChange: g,
          options: v,
          renderAnnotation: y,
          renderCodeViewFooter: x,
          renderCodeViewHeader: S,
          renderCustomHeader: w,
          renderGutterUtility: b,
          renderHeaderFilenameSuffix: C,
          renderHeaderMetadata: E,
          renderHeaderPrefix: I,
          selectedLines: R,
          style: T,
        } = e,
        k = void 0 !== u,
        M = (0, s.Bi)(),
        A = (0, $.useContext)(K.Al),
        P = (0, $.useRef)(G(k)),
        O = null != w,
        j = null != y,
        L = null != b,
        F = O || null != I || null != C || null != E,
        H = F || j || L,
        _ = null != S,
        N = null != x,
        B = (0, V.K)((e) => {
          g?.(e)
        }),
        z = void 0 !== R,
        U = (0, V.K)((e, t, i) => {
          if (null == M) throw Error("CodeView: EditContext is not attached")
          return M(e, { ...d, ...t }, i)
        }),
        Q = (0, V.K)((e, t) => {
          f?.(e, t)
        }),
        J = (0, V.K)((e, t, i) => p?.(e, t, i) ?? "reject"),
        ee = (0, $.useMemo)(
          () =>
            (function ({
              options: e,
              hasCustomHeader: t,
              hasGutterRenderer: i,
              hasCodeViewHeader: n,
              hasCodeViewFooter: l,
              onSelectedLinesChange: o,
              controlledSelection: s,
              getEditStateKey: r,
              createEditor: a,
              onItemEditChange: d,
              onItemEditComplete: c,
            }) {
              let h = { ...e, controlledSelection: s, onSelectedLinesChange: o, createEditor: a }
              return (
                null != r && (h.getEditStateKey = r),
                null != d && (h.onItemEditChange = d),
                null != c && (h.onItemEditComplete = c),
                t && (h.renderCustomHeader = X),
                i && (h.renderGutterUtility = X),
                n && (h.renderCodeViewHeader = X),
                l && (h.renderCodeViewFooter = X),
                h
              )
            })({
              options: v,
              hasCustomHeader: O,
              hasGutterRenderer: L,
              hasCodeViewHeader: _,
              hasCodeViewFooter: N,
              onSelectedLinesChange: null != g ? B : void 0,
              controlledSelection: z,
              getEditStateKey: c,
              createEditor: null != M ? U : void 0,
              onItemEditChange: null != f ? Q : void 0,
              onItemEditComplete: null != p ? J : void 0,
            }),
          [M, z, U, Q, J, B, N, _, O, L, c, f, p, g, v],
        ),
        [et] = (0, $.useState)(() => {
          let e, t
          return (
            (t = new Set()),
            {
              getSnapshot: () => e,
              publish(i) {
                if (!r(e, i)) for (let n of ((e = i), t)) n()
              },
              subscribe: (e) => (
                t.add(e),
                () => {
                  t.delete(e)
                }
              ),
            }
          )
        }),
        [, ei] = (0, $.useState)({}),
        en = (0, V.K)((e) => {
          ;(null != P.current.instance &&
            (null == e || e !== P.current.instance.getContainerElement()) &&
            (P.current.instance.cleanUp(), et.publish(void 0), (P.current = G(k))),
            null != e &&
              e !== P.current.instance?.getContainerElement() &&
              ((P.current.instance = new D(ee, !o ? A : void 0, !0)), P.current.instance.setup(e)),
            "function" == typeof l ? l(e) : null != l && (l.current = e))
        }),
        el = (0, V.K)((e) => {
          P.current.disableFlushSync
            ? et.publish(e)
            : (0, W.flushSync)(() => {
                et.publish(e)
              })
        }),
        eo = (0, $.useMemo)(() => {
          if (F || j || L || _ || N)
            return { hasHeaderRenderers: F, hasAnnotationRenderer: j, hasGutterRenderer: L, onSnapshotChange: el }
        }, [el, j, L, F, _, N])
      return (
        q(() => (null != m ? P.current.instance?.subscribeToScroll(m) : void 0)),
        q(() => {
          let { instance: e, controlled: t, items: i, managedOptions: n, slotCoordinator: l } = P.current
          if (null != e)
            try {
              P.current.disableFlushSync = !0
              let o = !1
              if (((0, a.l)(ee, n) || ((P.current.managedOptions = ee), e.setOptions(ee), (o = !0)), t !== k))
                return void console.error(
                  "CodeView: cannot switch between controlled and uncontrolled modes. Remount with a new key instead.",
                )
              if (k)
                u !== i &&
                  ((function (e, t) {
                    if (null == e || e.length !== t.length) return !1
                    for (let i = 0; i < e.length; i++) if (e[i] !== t[i]) return !1
                    return !0
                  })(i, u)
                    ? (P.current.items = u)
                    : (function (e, t) {
                          if (null == e || t.length <= e.length) return !1
                          if (0 === e.length) return !0
                          for (let i = 0; i < e.length; i++) if (t[i] !== e[i]) return !1
                          return !0
                        })(i, u)
                      ? ((P.current.items = u), e.addItems(u.slice(i.length)))
                      : ((P.current.items = u), e.setItems(u), (o = !0)))
              else if (null == i) {
                let t = h ?? []
                ;((P.current.items = t), t.length > 0 && (e.setItems(t), (o = !0)))
              }
              void 0 !== R && e.setSelectedLines(R, { notify: !1 })
              let s = e.setSlotCoordinator(eo),
                r = !1
              ;(eo !== l && ((null == eo || null == l) && (r = !0), (P.current.slotCoordinator = eo)),
                (o || s) && e.render(!0),
                s && null == eo && et.publish(void 0),
                r && ei({}))
            } finally {
              P.current.disableFlushSync = !1
            }
        }),
        (0, $.useImperativeHandle)(
          t,
          () => ({
            addItems(e) {
              let { controlled: t, instance: i } = P.current
              ;(Y(t, "addItems"),
                null == i
                  ? console.error("CodeView.addItems: no valid instance to append items with", e)
                  : i.addItems(e))
            },
            getItem(e) {
              let { instance: t } = P.current
              return null == t ? void console.error("CodeView.getItem: no valid instance exists", e) : t.getItem(e)
            },
            removeItem(e) {
              let { controlled: t, instance: i } = P.current
              return (Y(t, "removeItem"), null == i)
                ? (console.error("CodeView.removeItem: no valid instance to remove item from", e), !1)
                : i.removeItem(e)
            },
            updateItem(e) {
              let { controlled: t, instance: i } = P.current
              return (Y(t, "updateItem"), null == i)
                ? (console.error("CodeView.updateItem: no valid instance to update item with", e), !1)
                : i.updateItem(e)
            },
            updateItemId(e, t) {
              let { controlled: i, instance: n } = P.current
              return (Y(i, "updateItemId"), null == n)
                ? (console.error("CodeView.updateItemId: no valid instance to update item id with", e, t), !1)
                : n.updateItemId(e, t)
            },
            scrollTo(e) {
              let { instance: t } = P.current
              null == t ? console.error("CodeView.scrollTo: no valid instance to scroll with", e) : t.scrollTo(e)
            },
            setSelectedLines(e) {
              let { instance: t } = P.current
              null == t
                ? console.error("CodeView.setSelectedLines: no valid instance to update selection with", e)
                : (t.setSelectedLines(e, { notify: !1 }), B(e))
            },
            getSelectedLines() {
              let { instance: e } = P.current
              return null == e
                ? (console.error("CodeView.getSelectedLines: no valid instance exists"), null)
                : e.getSelectedLines()
            },
            clearSelectedLines() {
              let { instance: e } = P.current
              null == e
                ? console.error("CodeView.clearSelectedLines: no valid instance to update selection with")
                : (e.clearSelectedLines({ notify: !1 }), B(null))
            },
            getEditor(e) {
              let { instance: t } = P.current
              return null == t ? void console.error("CodeView.getEditor: no valid instance exists", e) : t.getEditor(e)
            },
            getInstance: () => P.current.instance,
          }),
          [B],
        ),
        (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("div", { ref: en, className: i, style: T }),
            (H || _ || N) &&
              (0, n.jsx)(Z, {
                managedContentStore: et,
                renderCustomHeader: w,
                renderHeaderPrefix: I,
                renderHeaderFilenameSuffix: C,
                renderHeaderMetadata: E,
                renderAnnotation: y,
                renderGutterUtility: b,
                renderCodeViewHeader: S,
                renderCodeViewFooter: x,
              }),
          ],
        })
      )
    })
    function Y(e, t) {
      if (e)
        throw Error(
          `CodeView.${t} cannot be used when CodeView is controlled. Use initialItems for imperative item updates.`,
        )
    }
    let Z = (0, $.memo)(function ({
      managedContentStore: e,
      renderCustomHeader: t,
      renderHeaderPrefix: i,
      renderHeaderFilenameSuffix: l,
      renderHeaderMetadata: o,
      renderAnnotation: s,
      renderGutterUtility: r,
      renderCodeViewHeader: a,
      renderCodeViewFooter: d,
    }) {
      let c = (0, V.K)((t) => e.subscribe(t)),
        h = (0, V.K)(() => e.getSnapshot()),
        u = (0, $.useSyncExternalStore)(c, h, h),
        f = ""
      for (let e of u?.items ?? []) f += `${e.id}:${e.version}:${e.type}`
      let p = (0, $.useMemo)(
          () =>
            u?.items?.map((e) =>
              (0, W.createPortal)(
                (function ({
                  renderedItem: e,
                  renderCustomHeader: t,
                  renderHeaderPrefix: i,
                  renderHeaderFilenameSuffix: n,
                  renderHeaderMetadata: l,
                  renderAnnotation: o,
                  renderGutterUtility: s,
                }) {
                  if ("diff" === e.type) {
                    let { item: r, instance: a } = e
                    return (0, z.z)({
                      fileDiff: r.fileDiff,
                      renderCustomHeader: null != t ? () => t(r) : void 0,
                      renderHeaderPrefix: null != i ? () => i(r) : void 0,
                      renderHeaderFilenameSuffix: null != n ? () => n(r) : void 0,
                      renderHeaderMetadata: null != l ? () => l(r) : void 0,
                      renderAnnotation: null != o ? (e) => o(e, r) : void 0,
                      lineAnnotations: r.annotations,
                      renderGutterUtility: null != s ? (e) => s(e, r) : void 0,
                      getHoveredLine: a.getHoveredLine,
                      getAnnotationSlotName: a.getAnnotationSlotName,
                    })
                  }
                  {
                    let { item: r, instance: a } = e
                    return (0, U.Q)({
                      file: r.file,
                      renderCustomHeader: null != t ? () => t(r) : void 0,
                      renderHeaderPrefix: null != i ? () => i(r) : void 0,
                      renderHeaderFilenameSuffix: null != n ? () => n(r) : void 0,
                      renderHeaderMetadata: null != l ? () => l(r) : void 0,
                      renderAnnotation: null != o ? (e) => o(e, r) : void 0,
                      lineAnnotations: r.annotations,
                      renderGutterUtility: null != s ? (e) => s(e, r) : void 0,
                      getHoveredLine: a.getHoveredLine,
                      getAnnotationSlotName: a.getAnnotationSlotName,
                    })
                  }
                })({
                  renderedItem: e,
                  renderCustomHeader: t,
                  renderHeaderPrefix: i,
                  renderHeaderFilenameSuffix: l,
                  renderHeaderMetadata: o,
                  renderAnnotation: s,
                  renderGutterUtility: r,
                }),
                e.element,
                e.id,
              ),
            ),
          [t, i, l, o, s, r, f],
        ),
        m = (0, $.useMemo)(
          () => (null != a && u?.header != null ? (0, W.createPortal)(a(), u.header) : null),
          [a, u?.header],
        ),
        g = (0, $.useMemo)(
          () => (null != d && u?.footer != null ? (0, W.createPortal)(d(), u.footer) : null),
          [d, u?.footer],
        )
      return (0, n.jsxs)(n.Fragment, { children: [p, m, g] })
    })
    function X() {}
    var J = i("on57"),
      ee = i("zTeN"),
      et = i("zKw6"),
      ei = i.n(et),
      en = i("DBCl"),
      el = i("Wf1j"),
      eo = i("oyxz"),
      es = i("d9FS"),
      er = i("MrGp"),
      ea = i("TwSq"),
      ed = i("rmk3"),
      ec = i("SGsN"),
      eh = i("gYIj"),
      eu = i("Ovip"),
      ef = i("hHwo"),
      ep = i("NxNN"),
      em = i("uNhY"),
      eg = i("VBsg"),
      ev = i("H7so"),
      ey = i("uNMF"),
      ex = i("v2vb"),
      eS = i("dlo8"),
      ew = i("JFOR"),
      eb = i("Bvu7"),
      eC = i("MOsl"),
      eE = i("mQe5"),
      eI = i("cPOA"),
      eR = i("Omjs"),
      eT = i("rvFo")
    let ek = (0, i("x9AG").F)({
      method: "blame-file",
      getParams: ({ operationSource: e, path: t, root: i }) => ({ cwd: (0, en.DIv)(i), operationSource: e, path: t }),
      getOptions: () => ({ staleTime: eT.D.FIVE_SECONDS }),
    }).fromTarget$
    var eM = i("GQB6"),
      eA = i("TL6G"),
      eP = i("LDen"),
      eO = i("lMJS")
    class ej {
      dateFormatter
      getEditor
      getSavedContent
      blameLines = new Map()
      blameResult = null
      events = null
      fileRoot = null
      inlineBlame = null
      mappedCurrentContent = null
      mappedSavedContent = null
      savedLineRanges = null
      scheduled = !1
      surface = null
      constructor({ getEditor: e, getSavedContent: t, locale: i }) {
        ;((this.getEditor = e),
          (this.getSavedContent = t),
          (this.dateFormatter = new Intl.DateTimeFormat(i, { dateStyle: "medium" })))
      }
      attach = (e) => {
        if ((this.detach(), null == e)) return
        this.surface = e
        let t = new AbortController()
        this.events = t
        let i = { signal: t.signal },
          n = e.ownerDocument
        return (
          n.addEventListener("selectionchange", this.schedule, i),
          n.addEventListener("keyup", this.schedule, i),
          n.addEventListener("pointerup", this.schedule, i),
          this.schedule(),
          () => {
            this.surface === e && this.detach()
          }
        )
      }
      setFileRoot(e) {
        ;(this.fileRoot !== e && (this.clear(), (this.fileRoot = e)), this.schedule())
      }
      setBlameResult(e) {
        ;(this.blameResult !== e &&
          ((this.blameResult = e),
          (this.blameLines = new Map(e?.type === "success" ? e.lines.map((e) => [e.lineNumber, e]) : []))),
          this.schedule())
      }
      setLocale(e) {
        this.dateFormatter.resolvedOptions().locale !== e &&
          ((this.dateFormatter = new Intl.DateTimeFormat(e, { dateStyle: "medium" })), this.schedule())
      }
      schedule = () => {
        if (this.scheduled || this.events?.signal.aborted !== !1) return
        this.scheduled = !0
        let e = this.events
        queueMicrotask(() => {
          ;((this.scheduled = !1), this.events === e && e?.signal.aborted === !1 && this.render())
        })
      }
      detach() {
        ;(this.events?.abort(), (this.events = null), (this.surface = null), (this.fileRoot = null), this.clear())
      }
      render() {
        let e = this.fileRoot?.shadowRoot ?? this.surface?.querySelector("diffs-container")?.shadowRoot,
          t = this.getSavedContent()
        if (null == e || null == t || this.blameResult?.type !== "success") return void this.clear()
        let i = this.getEditor(),
          n = i?.getFile(),
          l = i?.getViewState().selections,
          o = l?.at(-1)
        if (null == n || null == o) return void this.clear()
        let s = (o.direction < 0 ? o.start.line : o.end.line) + 1,
          r = this.getSavedLineNumber(n.contents, t, s),
          a = null == r ? null : (this.blameLines.get(r) ?? null)
        if (a?.author == null || 0 === a.commitSha.length || /^0+$/.test(a.commitSha)) return void this.clear()
        let d = e.querySelector(
          `[data-code]:not([data-deletions]) [data-content] > [data-line="${s}"]:not([data-line-type="change-deletion"])`,
        )
        if (null == d) return void this.clear()
        this.inlineBlame?.parentElement !== d &&
          (this.clear(),
          (this.inlineBlame = d.ownerDocument.createElement("span")),
          (this.inlineBlame.contentEditable = "false"),
          this.inlineBlame.setAttribute("aria-hidden", "true"),
          d.append(this.inlineBlame))
        let c = null == a.authorTime ? null : this.dateFormatter.format(1e3 * a.authorTime),
          h = [a.author, a.summary, a.commitSha.slice(0, 8), c].filter((e) => null != e && e.length > 0).join(" · ")
        this.inlineBlame.setAttribute("data-pierre-editor-inline-blame", h)
      }
      getSavedLineNumber(e, t, i) {
        if (e === t) return i
        if (e.length > 262144 || t.length > 262144) return null
        if (this.mappedCurrentContent !== e || this.mappedSavedContent !== t) {
          ;((this.mappedCurrentContent = e), (this.mappedSavedContent = t), (this.savedLineRanges = []))
          let i = (0, eO.Pp)(t, e, { maxEditLength: 512 })
          if (null == i) return null
          let n = 1,
            l = 1
          for (let e of i)
            e.added
              ? (n += e.count)
              : (e.removed ||
                  (this.savedLineRanges.push({ currentStart: n, lineCount: e.count, savedStart: l }), (n += e.count)),
                (l += e.count))
        }
        let n = this.savedLineRanges?.find(({ currentStart: e, lineCount: t }) => i >= e && i < e + t)
        return null == n ? null : n.savedStart + i - n.currentStart
      }
      clear() {
        ;(this.inlineBlame?.remove(), (this.inlineBlame = null))
      }
    }
    var eL = i("is3Y"),
      eF = i("StSx"),
      eD = i("Qgfj"),
      eH = i("HOLv"),
      e_ = i("bVeK"),
      eN = i("j9wQ")
    function eB(e) {
      let t,
        i,
        o,
        s,
        r,
        a,
        d,
        c,
        h,
        u,
        f,
        p,
        m,
        g = (0, l.c)(36),
        { count: v, activeIndex: y, previousIndex: x, nextIndex: S, onNavigate: w } = e,
        b = (0, el.A)()
      g[0] !== b
        ? ((t = b.formatMessage({
            id: "files.diff.navigateChanges",
            defaultMessage: "Navigate changes",
            description: "Accessible label for previous and next change controls in the editable file comparison",
          })),
          (g[0] = b),
          (g[1] = t))
        : (t = g[1])
      let C = x < 0
      ;(g[2] !== b
        ? ((i = b.formatMessage({
            id: "files.diff.previousChange",
            defaultMessage: "Previous change",
            description: "Navigate to the preceding changed section in the editable file comparison",
          })),
          (g[2] = b),
          (g[3] = i))
        : (i = g[3]),
        g[4] !== w || g[5] !== x ? ((o = () => w(x)), (g[4] = w), (g[5] = x), (g[6] = o)) : (o = g[6]),
        g[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, n.jsx)(eH.I, { asset: eF.V })), (g[7] = s))
          : (s = g[7]),
        g[8] !== C || g[9] !== i || g[10] !== o
          ? ((r = (0, n.jsx)(eN.K8, {
              uniform: !0,
              disabled: C,
              "aria-label": i,
              onMouseDown: ez,
              onClick: o,
              children: s,
            })),
            (g[8] = C),
            (g[9] = i),
            (g[10] = o),
            (g[11] = r))
          : (r = g[11]),
        g[12] !== y || g[13] !== v
          ? ((a = (0, n.jsx)("span", {
              "aria-hidden": !0,
              children:
                y < 0
                  ? (0, n.jsx)(eD.Gr, { value: v })
                  : (0, n.jsx)(eo.A, {
                      id: "files.diff.compactChangePosition",
                      defaultMessage: "{position}/{count}",
                      description: "Compact position and total count of changed sections in a file, for example 2/15",
                      values: { position: y + 1, count: v },
                    }),
            })),
            (g[12] = y),
            (g[13] = v),
            (g[14] = a))
          : (a = g[14]),
        g[15] !== y || g[16] !== v
          ? ((d = (0, n.jsx)("span", {
              className: "sr-only",
              children:
                y < 0
                  ? (0, n.jsx)(eo.A, {
                      id: "files.diff.changeCount",
                      defaultMessage: "{count, plural, one {# change} other {# changes}}",
                      description:
                        "Number of changed sections in the editable file comparison when the caret is outside a change",
                      values: { count: v },
                    })
                  : (0, n.jsx)(eo.A, {
                      id: "files.diff.changePosition",
                      defaultMessage: "{position} of {count}",
                      description:
                        "Position of the changed section containing the caret in the editable file comparison",
                      values: { position: y + 1, count: v },
                    }),
            })),
            (g[15] = y),
            (g[16] = v),
            (g[17] = d))
          : (d = g[17]),
        g[18] !== a || g[19] !== d
          ? ((c = (0, n.jsxs)("span", {
              className: "flex min-w-0 items-center gap-2 text-xs text-secondary tabular-nums select-none",
              role: "status",
              "aria-atomic": !0,
              children: [a, d],
            })),
            (g[18] = a),
            (g[19] = d),
            (g[20] = c))
          : (c = g[20]))
      let E = S < 0
      return (
        g[21] !== b
          ? ((h = b.formatMessage({
              id: "files.diff.nextChange",
              defaultMessage: "Next change",
              description: "Navigate to the next changed section in the editable file comparison",
            })),
            (g[21] = b),
            (g[22] = h))
          : (h = g[22]),
        g[23] !== S || g[24] !== w ? ((u = () => w(S)), (g[23] = S), (g[24] = w), (g[25] = u)) : (u = g[25]),
        g[26] === Symbol.for("react.memo_cache_sentinel") ? ((f = (0, n.jsx)(e_.Aq_, {})), (g[26] = f)) : (f = g[26]),
        g[27] !== E || g[28] !== h || g[29] !== u
          ? ((p = (0, n.jsx)(eN.K8, {
              uniform: !0,
              disabled: E,
              "aria-label": h,
              onMouseDown: eV,
              onClick: u,
              children: f,
            })),
            (g[27] = E),
            (g[28] = h),
            (g[29] = u),
            (g[30] = p))
          : (p = g[30]),
        g[31] !== t || g[32] !== p || g[33] !== r || g[34] !== c
          ? ((m = (0, n.jsxs)(eN.J5, { label: t, children: [r, c, p] })),
            (g[31] = t),
            (g[32] = p),
            (g[33] = r),
            (g[34] = c),
            (g[35] = m))
          : (m = g[35]),
        m
      )
    }
    function eV(e) {
      return e.preventDefault()
    }
    function ez(e) {
      return e.preventDefault()
    }
    var eU = i("IWgX"),
      eK = i("ikUP"),
      e$ = i("GaA7"),
      eW = i("aepO")
    class eq {
      isSwitching = !1
      replaceItem(e, t) {
        this.isSwitching = !0
        try {
          e.removeItem(t.id)
        } finally {
          this.isSwitching = !1
        }
        e.addItems([t])
      }
      snapshot = null
      clear() {
        this.snapshot = null
      }
      capture(e) {
        if (null == e) return
        let t = e.getEditState()
        if (null == t) return
        let i = t.document.getText()
        this.snapshot?.contents !== i &&
          (this.snapshot = {
            contents: i,
            undo: [...t.document.history.undoStack],
            redo: [...t.document.history.redoStack],
            view: e.getViewState(),
          })
      }
      restore(e) {
        let t = this.snapshot,
          i = e.getEditState()
        if (null == t || null == i || ((this.snapshot = null), t.contents !== i.document.getText())) return !1
        let n = (e, i) => {
          for (let [n, l] of [
            [e.undoStack, t.undo],
            [e.redoStack, t.redo],
          ])
            n.splice(
              0,
              n.length,
              ...l.map((e) => ({
                ...e,
                lineAnnotationsBefore: e.lineAnnotationsBefore?.map(i),
                lineAnnotationsAfter: e.lineAnnotationsAfter?.map(i),
              })),
            )
        }
        return (
          "file" === i.type ? n(i.document.history, ({ side: e, ...t }) => t) : n(i.document.history, ef.WA),
          e.setViewState(t.view),
          !0
        )
      }
    }
    var eG = i("ilxu"),
      eQ = i("tILS"),
      eY = i("q1q2"),
      eZ = i("JEFL")
    class eX {
      setPortal
      constructor(e) {
        this.setPortal = e
      }
      events = null
      selectionEdit = null
      selectionEditMarker = null
      selectionEditResume = null
      toolbar = null
      selectionState = "dismissed"
      shiftKeyDown = !1
      stopPositioning = null
      surface = null
      attach = (e) => {
        if ((this.detach(), null == e)) return
        ;((this.surface = e), (this.selectionState = "tracking"))
        let t = new AbortController()
        this.events = t
        let i = { capture: !0, signal: t.signal },
          n = (e) => {
            let t = e.composedPath()[0]
            return t instanceof HTMLElement && null != t.closest("[data-search-panel]")
          }
        return (
          e.addEventListener(
            "keydown",
            (e) => {
              if (n(e)) return
              this.shiftKeyDown = e.shiftKey
              let t = ["Alt", "Control", "Meta", "Shift"].includes(e.key),
                i = (e.metaKey || e.ctrlKey) && ["c", "v"].includes(e.key.toLowerCase()),
                l =
                  e.shiftKey &&
                  ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End", "PageUp", "PageDown"].includes(
                    e.key,
                  )
              t || i || l ? this.toolbar?.widget.toggleAttribute("hidden", !0) : this.dismiss()
            },
            i,
          ),
          e.addEventListener(
            "keyup",
            (e) => {
              n(e) || ((this.shiftKeyDown = e.shiftKey), this.openSelectionAction())
            },
            i,
          ),
          document.addEventListener(
            "pointercancel",
            () => {
              ;((this.selectionState = "tracking"), this.suspendToolbar())
            },
            i,
          ),
          document.addEventListener("pointerdown", this.onPointerDown, i),
          document.addEventListener("selectionchange", this.syncSelection, i),
          document.addEventListener("pointerup", this.onPointerUp, { signal: t.signal }),
          null != this.selectionEditResume &&
            requestAnimationFrame(() => {
              this.events === t && null != this.selectionEditResume && this.surface === e && this.openSelectionAction()
            }),
          () => {
            this.surface === e && this.detach()
          }
        )
      }
      render({
        context: e,
        intl: t,
        onAddSelectedTextToChat: i,
        onCommentSelectedRange: l,
        onClearEditorSelection: o,
        onEditSelectedText: s,
      }) {
        let r = e.getSelectionText(),
          a = document.createElement("span")
        if (((a.hidden = !0), this.toolbar?.isAnnotating)) return a
        let d = this.surface?.parentElement
        if (0 === r.trim().length || null == d) return (this.removeToolbar(), queueMicrotask(e.close), a)
        let c = () => ({ start: { ...e.selection.start }, end: { ...e.selection.end } }),
          h = this.surface?.ownerDocument.getSelection()
        this.removeToolbar()
        let u = document.createElement("div")
        ;((u.hidden = this.shiftKeyDown),
          (u.dataset.pierreSelectionActions = ""),
          (u.className = "pointer-events-none absolute z-20 max-w-[calc(100%_-_1rem)]"),
          (u.style.visibility = "hidden"),
          d.append(u),
          (this.toolbar = {
            closeSelectionAction: e.close,
            domRange: h?.rangeCount ? h.getRangeAt(0).cloneRange() : null,
            onClearEditorSelection: o,
            isAnnotating: !1,
            widget: u,
          }),
          (this.selectionState = "tracking"))
        let f = this.selectionEditResume
        return (
          (this.selectionEditResume = null),
          this.setPortal(
            (0, W.createPortal)(
              (0, n.jsx)(eZ.q, {
                selectedText: r,
                onStartFileAnnotation:
                  null == i
                    ? void 0
                    : () => {
                        let t = e.getSelectionText(),
                          n = c()
                        return (
                          null != this.toolbar && (this.toolbar.isAnnotating = !0),
                          (e) => {
                            ;(this.dismiss(), i(t, n, e))
                          }
                        )
                      },
                onDismissFileAnnotation: (e) => {
                  e ? this.dismiss() : this.removeToolbar()
                },
                onCommentSelectedText:
                  null == l
                    ? void 0
                    : () => {
                        let e = c()
                        ;(this.dismiss(), l(e))
                      },
                onEditSelectedText: async (i) => {
                  let n = f?.mode === "edit" && null != this.selectionEdit ? this.selectionEdit : null,
                    l = n?.context ?? e,
                    o = n?.range ?? c(),
                    r = l.textDocument.getText(),
                    a = { context: l, instruction: i, range: o }
                  ;((this.selectionEdit = a),
                    (this.selectionEditMarker = {
                      ...o,
                      message: t.formatMessage({
                        id: "pierreFileEditor.selectionEditPending",
                        defaultMessage: "Edit in progress",
                        description: "Status shown for a selected range while a model edit is being generated",
                      }),
                      severity: "hint",
                    }))
                  let d = s({
                      content: r,
                      endOffset: l.textDocument.offsetAt(o.end),
                      instruction: i,
                      startOffset: l.textDocument.offsetAt(o.start),
                    }),
                    h = this.surface?.ownerDocument.getSelection(),
                    u = this.toolbar?.domRange
                  null != h && null != u && (h.removeAllRanges(), h.addRange(u))
                  let p = await d
                  if (this.selectionEdit !== a) return "handled"
                  switch (p) {
                    case "canceled":
                      return ((this.selectionEdit = null), this.dismiss(), "handled")
                    case "created":
                      return (this.dismiss(), "handled")
                    case "failed":
                      return ((this.selectionEdit = null), "retry")
                  }
                },
                resume: f,
              }),
              u,
            ),
          ),
          this.startPositioning(u),
          a
        )
      }
      syncSelectionEditMarker(e, t) {
        let i = this.selectionEditMarker
        null != i && (e.setMarkers(t ? [i] : []), t || (this.selectionEditMarker = null))
      }
      resolveSelectionEdit(e, t, i) {
        let n = this.selectionEdit
        if ("accept" === t) {
          if (null == i) return (this.cancelSelectionEdit(), !0)
          let t = e.getEditState()?.document
          if (null == n || null == t) return !1
          this.selectionEdit = null
          let l = t.offsetAt(n.range.start)
          e.applyEdits([{ newText: i, range: n.range }])
          let o = t.positionAt(l + i.length)
          return (
            t.setLastUndoSelectionsAfter([{ direction: 0, end: o, start: o }]),
            e.setSelections([{ direction: "none", end: o, start: o }]),
            !0
          )
        }
        return (
          null != n &&
          ("reject" === t && (this.selectionEdit = null),
          this.dismiss(),
          (this.selectionEditResume =
            "edit" === t ? { instruction: n.instruction, mode: "edit" } : { mode: "actions-focused" }),
          e.setSelections([
            {
              direction: (function (e) {
                switch (e) {
                  case -1:
                    return "backward"
                  case 0:
                    return "none"
                  case 1:
                    return "forward"
                }
              })(n.context.selection.direction),
              end: n.range.end,
              start: n.range.start,
            },
          ]),
          !0)
        )
      }
      cancelSelectionEdit() {
        ;((this.selectionEdit = null), (this.selectionEditResume = null), this.dismiss())
      }
      dismiss = () => {
        this.selectionState = "dismissed"
        let e = this.toolbar?.closeSelectionAction
        ;(this.removeToolbar(), e?.())
      }
      removeToolbar() {
        ;(this.stopPositioning?.(), (this.stopPositioning = null))
        let e = this.toolbar
        ;((this.toolbar = null), null != e && (e.widget.remove(), this.setPortal(null)))
      }
      detach() {
        ;(this.events?.abort(), (this.events = null), (this.surface = null), (this.shiftKeyDown = !1), this.dismiss())
      }
      onPointerDown = (e) => {
        this.shiftKeyDown = e.shiftKey
        let t = e.composedPath()
        if (t.some((e) => e instanceof HTMLElement && e.closest("[data-find-in-files]")))
          return void this.suspendToolbar()
        if (!(null != this.toolbar && (this.toolbar.isAnnotating || t.includes(this.toolbar.widget)))) {
          if (null != this.surface && t.includes(this.surface)) {
            if (t.some((e) => e instanceof HTMLElement && e.hasAttribute("data-pierre-editor-annotation"))) {
              ;(this.toolbar?.onClearEditorSelection?.(), this.dismiss())
              return
            }
            ;(this.toolbar?.widget.toggleAttribute("hidden", !0), (this.selectionState = "dragging"))
            return
          }
          ;(this.toolbar?.onClearEditorSelection?.(), this.dismiss())
        }
      }
      syncSelection = () => {
        let e = this.surface
        this.toolbar?.isAnnotating ||
          "tracking" !== this.selectionState ||
          null == e ||
          queueMicrotask(() => {
            if (
              "tracking" !== this.selectionState ||
              this.toolbar?.isAnnotating ||
              this.surface !== e ||
              (this.getEditorRoot()?.activeElement ?? e.ownerDocument.activeElement)?.closest(
                "[data-search-panel], [data-pierre-find-controls]",
              ) != null
            )
              return
            if (e.ownerDocument.activeElement?.closest("[data-find-in-files]")) return void this.suspendToolbar()
            let t = e.ownerDocument.getSelection(),
              i = t?.rangeCount ? t.getRangeAt(0) : null,
              n = this.toolbar?.domRange
            if (!this.toolbar?.widget.contains(e.ownerDocument.activeElement)) {
              if (
                null != i &&
                null != n &&
                n.startContainer === i.startContainer &&
                n.startOffset === i.startOffset &&
                n.endContainer === i.endContainer &&
                n.endOffset === i.endOffset
              ) {
                e.contains(e.ownerDocument.activeElement) && this.openSelectionAction()
                return
              }
              null != i &&
              e.matches(":focus-within") &&
              this.getEditorRoot()?.querySelector("[data-selection-range]") != null
                ? this.openSelectionAction()
                : (e.ownerDocument.activeElement?.closest("[data-codex-composer-root]") != null &&
                    this.toolbar?.onClearEditorSelection?.(),
                  this.dismiss(),
                  (this.selectionState = "tracking"))
            }
          })
      }
      onPointerUp = (e) => {
        if ("dragging" !== this.selectionState || ((this.selectionState = "tracking"), "mouse" !== e.pointerType))
          return
        let t = this.events
        requestAnimationFrame(() => {
          this.events === t && "tracking" === this.selectionState && this.openSelectionAction(!0)
        })
      }
      openSelectionAction(e = !1) {
        if (this.shiftKeyDown || (e && this.getEditorRoot()?.querySelector("[data-selection-range]") == null)) return
        let t = this.toolbar?.widget
        null != t && ((t.hidden = !1), this.startPositioning(t))
      }
      suspendToolbar() {
        ;(this.toolbar?.widget.toggleAttribute("hidden", !0), this.stopPositioning?.(), (this.stopPositioning = null))
      }
      startPositioning(e) {
        ;(this.stopPositioning?.(), (this.stopPositioning = null))
        let t = this.getEditorRoot()?.querySelector("[data-selection-range]")
        null != t &&
          (this.stopPositioning = (0, eQ.ll)(t, e, () => {
            this.position(t, e)
          }))
      }
      getEditorRoot() {
        return this.surface?.querySelector("diffs-container")?.shadowRoot ?? null
      }
      async position(e, t) {
        let i = this.surface,
          n = this.getEditorRoot(),
          l = Array.from(n?.querySelectorAll("[data-selection-range]") ?? [], (e) => e.getBoundingClientRect()).filter(
            (e) => e.height > 0,
          ),
          o = l[0]
        if (null == i || null == o) {
          t.style.visibility = "hidden"
          return
        }
        let s = { boundary: i, padding: 8 },
          {
            x: r,
            y: a,
            middlewareData: d,
          } = await (0, eQ.rD)({ contextElement: e, getBoundingClientRect: () => o, getClientRects: () => l }, t, {
            middleware: [(0, eY.mG)(), (0, eY.cY)(4), (0, eY.UU)(s), (0, eY.BN)(s), (0, eY.jD)(s)],
          })
        this.toolbar?.widget === t &&
          Object.assign(t.style, {
            left: `${r}px`,
            top: `${a}px`,
            visibility: d.hide?.referenceHidden ? "hidden" : "visible",
          })
      }
    }
    var eJ = i("yGJW"),
      e0 = i("aqTO"),
      e1 = i("cWyH"),
      e2 = i("zvVP"),
      e3 = i("N4YM"),
      e4 = i("QpPI"),
      e5 = i("F5NH"),
      e7 = i("Oj9r"),
      e8 = i("nf3G"),
      e6 = i("RxZZ"),
      e9 = i("hZax"),
      te = i("gUx2"),
      tt = i("VtLY"),
      ti = i("kkEw"),
      tn = i("dDkj"),
      tl = i("lCie"),
      to = i("bnxy"),
      ts = i("jDom"),
      tr = i("v6od"),
      ta = i("nMUV"),
      td = i("AXTp"),
      tc = i("dZTS"),
      th = i("yGns"),
      tu = i("Sm6l"),
      tf = i("zLIa")
    function tp(e) {
      let t,
        i,
        o,
        s,
        r,
        a,
        d,
        c,
        h,
        u,
        f,
        p,
        m,
        g,
        v,
        y,
        x,
        S,
        w,
        b,
        C,
        E,
        I,
        R,
        T,
        k,
        M,
        A,
        P,
        O,
        j,
        L,
        F,
        D,
        H,
        _,
        N,
        B = (0, l.c)(120),
        { panel: V, restoreFocus: z } = e,
        U = (0, $.useSyncExternalStore)(V.subscribe, V.getSnapshot, tm),
        K = (0, el.A)(),
        W = (0, $.useId)(),
        q = (0, $.useRef)(null)
      if (null == U) return null
      let { state: G, actions: Q } = U,
        { params: Y, matches: Z, active: X, mode: J, regexStatus: ee } = G
      B[0] !== Q || B[1] !== z
        ? ((t = () => {
            ;(Q.close(), z())
          }),
          (B[0] = Q),
          (B[1] = z),
          (B[2] = t))
        : (t = B[2])
      let et = t,
        ei = Y.text.length > 0
      ;(B[3] !== V ? ((i = (e) => V.attach(e)), (B[3] = V), (B[4] = i)) : (i = B[4]),
        B[5] !== Q || B[6] !== et || B[7] !== V.input
          ? ((o = (e) => {
              if (e.nativeEvent.isComposing || 229 === e.nativeEvent.keyCode) {
                ;("Enter" === e.key || "Escape" === e.key) && e.stopPropagation()
                return
              }
              if (!(e.target instanceof Node) || !e.currentTarget.contains(e.target)) return
              let t = (0, tr.w)(e.nativeEvent),
                i = (0, tr.K)(e.nativeEvent)
              "Escape" === e.key
                ? (e.preventDefault(), e.stopPropagation(), et())
                : "openSearchPanel" === t || "openSearchReplacePanel" === t
                  ? (e.preventDefault(),
                    e.stopPropagation(),
                    Q.setMode("openSearchReplacePanel" === t ? "replace" : "find"))
                  : (null == i &&
                      "F3" !== e.key &&
                      (e.target !== V.input ||
                        e.altKey ||
                        e.ctrlKey ||
                        e.metaKey ||
                        e.shiftKey ||
                        ("ArrowUp" !== e.key && "ArrowDown" !== e.key))) ||
                    (e.preventDefault(),
                    e.stopPropagation(),
                    Q.navigate("previous" === i || "ArrowUp" === e.key || ("F3" === e.key && e.shiftKey)))
            }),
            (B[5] = Q),
            (B[6] = et),
            (B[7] = V.input),
            (B[8] = o))
          : (o = B[8]),
        B[9] !== K
          ? ((s = K.formatMessage({
              id: "textFileEditor.find.label",
              defaultMessage: "Find in file",
              description: "Accessible label for find in a text file",
            })),
            (B[9] = K),
            (B[10] = s))
          : (s = B[10]),
        B[11] !== K
          ? ((r = K.formatMessage({
              id: "textFileEditor.find.placeholder",
              defaultMessage: "Find in file…",
              description: "Placeholder for find in a text file",
            })),
            (B[11] = K),
            (B[12] = r))
          : (r = B[12]),
        B[13] !== Q
          ? ((a = (e) => Q.setParams({ text: e })), (d = (e) => Q.navigate(e)), (B[13] = Q), (B[14] = a), (B[15] = d))
          : ((a = B[14]), (d = B[15])),
        B[16] !== et || B[17] !== W || B[18] !== Y.text || B[19] !== s || B[20] !== r || B[21] !== a || B[22] !== d
          ? ((c = (0, n.jsx)(ta.rV, {
              id: W,
              label: s,
              placeholder: r,
              value: Y.text,
              onChange: a,
              onEnter: d,
              onEscape: et,
            })),
            (B[16] = et),
            (B[17] = W),
            (B[18] = Y.text),
            (B[19] = s),
            (B[20] = r),
            (B[21] = a),
            (B[22] = d),
            (B[23] = c))
          : (c = B[23]))
      let en = Y.caseSensitive ? "accentSubtle" : "ghost",
        es = Y.caseSensitive
      ;(B[24] !== K
        ? ((h = K.formatMessage({
            id: "textFileEditor.find.matchCase",
            defaultMessage: "Match case",
            description: "Option to match uppercase and lowercase exactly when searching a file",
          })),
          (B[24] = K),
          (B[25] = h))
        : (h = B[25]),
        B[26] !== Q || B[27] !== Y.caseSensitive
          ? ((u = () => Q.setParams({ caseSensitive: !Y.caseSensitive })),
            (B[26] = Q),
            (B[27] = Y.caseSensitive),
            (B[28] = u))
          : (u = B[28]),
        B[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, n.jsx)("span", { "aria-hidden": !0, children: "Aa" })), (B[29] = f))
          : (f = B[29]),
        B[30] !== Y.caseSensitive || B[31] !== h || B[32] !== u || B[33] !== en
          ? ((p = (0, n.jsx)(tu.$, {
              size: "compact",
              color: en,
              "aria-pressed": es,
              "aria-label": h,
              onClick: u,
              children: f,
            })),
            (B[30] = Y.caseSensitive),
            (B[31] = h),
            (B[32] = u),
            (B[33] = en),
            (B[34] = p))
          : (p = B[34]))
      let er = Y.wholeWord ? "accentSubtle" : "ghost",
        ea = Y.wholeWord
      ;(B[35] !== K
        ? ((m = K.formatMessage({
            id: "textFileEditor.find.wholeWord",
            defaultMessage: "Whole word",
            description: "Option to match complete words when searching a file",
          })),
          (B[35] = K),
          (B[36] = m))
        : (m = B[36]),
        B[37] !== Q || B[38] !== Y.wholeWord
          ? ((g = () => Q.setParams({ wholeWord: !Y.wholeWord })), (B[37] = Q), (B[38] = Y.wholeWord), (B[39] = g))
          : (g = B[39]),
        B[40] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, n.jsx)("span", {
              "aria-hidden": !0,
              children: (0, n.jsx)("span", { className: "underline", children: "ab" }),
            })),
            (B[40] = v))
          : (v = B[40]),
        B[41] !== Y.wholeWord || B[42] !== er || B[43] !== m || B[44] !== g
          ? ((y = (0, n.jsx)(tu.$, {
              size: "compact",
              color: er,
              "aria-pressed": ea,
              "aria-label": m,
              onClick: g,
              children: v,
            })),
            (B[41] = Y.wholeWord),
            (B[42] = er),
            (B[43] = m),
            (B[44] = g),
            (B[45] = y))
          : (y = B[45]))
      let ed = Y.regex ? "accentSubtle" : "ghost",
        ec = Y.regex
      ;(B[46] !== K
        ? ((x = K.formatMessage({
            id: "textFileEditor.find.regex",
            defaultMessage: "Regular expression",
            description: "Option to interpret a file search query as a regular expression",
          })),
          (B[46] = K),
          (B[47] = x))
        : (x = B[47]),
        B[48] !== Q || B[49] !== Y.regex
          ? ((S = () => Q.setParams({ regex: !Y.regex })), (B[48] = Q), (B[49] = Y.regex), (B[50] = S))
          : (S = B[50]),
        B[51] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, n.jsx)("span", { "aria-hidden": !0, children: ".*" })), (B[51] = w))
          : (w = B[51]),
        B[52] !== Y.regex || B[53] !== ed || B[54] !== x || B[55] !== S
          ? ((b = (0, n.jsx)(tu.$, {
              size: "compact",
              color: ed,
              "aria-pressed": ec,
              "aria-label": x,
              onClick: S,
              children: w,
            })),
            (B[52] = Y.regex),
            (B[53] = ed),
            (B[54] = x),
            (B[55] = S),
            (B[56] = b))
          : (b = B[56]))
      let eh = "replace" === J ? "accentSubtle" : "ghost",
        eu = "replace" === J
      ;(B[57] !== K
        ? ((C = K.formatMessage({
            id: "textFileEditor.find.replace",
            defaultMessage: "Replace",
            description: "Option to show replacement controls in file search",
          })),
          (B[57] = K),
          (B[58] = C))
        : (C = B[58]),
        B[59] !== Q || B[60] !== J
          ? ((E = () => Q.setMode("replace" === J ? "find" : "replace")), (B[59] = Q), (B[60] = J), (B[61] = E))
          : (E = B[61]))
      let ef = "replace" === J ? "rotate-90" : void 0
      ;(B[62] !== ef ? ((I = (0, n.jsx)(e_.uM3, { className: ef })), (B[62] = ef), (B[63] = I)) : (I = B[63]),
        B[64] !== eh || B[65] !== eu || B[66] !== C || B[67] !== E || B[68] !== I
          ? ((R = (0, n.jsx)(tu.$, {
              size: "compact",
              color: eh,
              "aria-expanded": eu,
              "aria-label": C,
              onClick: E,
              children: I,
            })),
            (B[64] = eh),
            (B[65] = eu),
            (B[66] = C),
            (B[67] = E),
            (B[68] = I),
            (B[69] = R))
          : (R = B[69]),
        B[70] !== p || B[71] !== y || B[72] !== b || B[73] !== R
          ? ((T = (0, n.jsxs)("div", {
              className: "col-[2/3] row-[1] flex h-[44px] items-center justify-center gap-2",
              children: [p, y, b, R],
            })),
            (B[70] = p),
            (B[71] = y),
            (B[72] = b),
            (B[73] = R),
            (B[74] = T))
          : (T = B[74]),
        B[75] !== K
          ? ((k = K.formatMessage({
              id: "codex.threadFindBar.previousResult",
              defaultMessage: "Previous result",
              description: "Button label to move to the previous find match",
            })),
            (B[75] = K),
            (B[76] = k))
          : (k = B[76]),
        B[77] !== K
          ? ((M = K.formatMessage({
              id: "codex.threadFindBar.nextResult",
              defaultMessage: "Next result",
              description: "Button label to move to the next find match",
            })),
            (B[77] = K),
            (B[78] = M))
          : (M = B[78]),
        B[79] !== Q
          ? ((A = () => Q.navigate(!0)), (P = () => Q.navigate(!1)), (B[79] = Q), (B[80] = A), (B[81] = P))
          : ((A = B[80]), (P = B[81])),
        B[82] !== ei || B[83] !== Z || B[84] !== k || B[85] !== M || B[86] !== A || B[87] !== P
          ? ((O = (0, n.jsx)(ta.rr, {
              isVisible: ei,
              matches: Z,
              previousLabel: k,
              nextLabel: M,
              onPrevious: A,
              onNext: P,
            })),
            (B[82] = ei),
            (B[83] = Z),
            (B[84] = k),
            (B[85] = M),
            (B[86] = A),
            (B[87] = P),
            (B[88] = O))
          : (O = B[88]))
      let ep = "pending" === ee ? void 0 : ee,
        em = "pending" === ee
      return (
        B[89] !== X || B[90] !== ei || B[91] !== Z || B[92] !== ep || B[93] !== em
          ? ((j = (0, n.jsx)(th.k, { active: X, error: ep, hasQuery: ei, isPending: em, totalMatches: Z })),
            (B[89] = X),
            (B[90] = ei),
            (B[91] = Z),
            (B[92] = ep),
            (B[93] = em),
            (B[94] = j))
          : (j = B[94]),
        B[95] !== K
          ? ((L = K.formatMessage({
              id: "codex.threadFindBar.close",
              defaultMessage: "Close find",
              description: "Button label to close the find bar",
            })),
            (B[95] = K),
            (B[96] = L))
          : (L = B[96]),
        B[97] !== et || B[98] !== L
          ? ((F = (0, n.jsx)(ta.$1, { label: L, onClose: et })), (B[97] = et), (B[98] = L), (B[99] = F))
          : (F = B[99]),
        B[100] !== Q || B[101] !== K || B[102] !== Z || B[103] !== J || B[104] !== Y.replaceText
          ? ((D =
              "replace" === J
                ? (0, n.jsxs)("div", {
                    className: "col-span-3 flex flex-col gap-2 border-t border-default p-3",
                    children: [
                      (0, n.jsx)(tf.pd, {
                        ref: q,
                        "aria-label": K.formatMessage({
                          id: "textFileEditor.find.replaceWith",
                          defaultMessage: "Replace with",
                          description: "Accessible label for replacement text when searching a file",
                        }),
                        value: Y.replaceText,
                        onChange: (e) => Q.setParams({ replaceText: e.target.value }),
                        onKeyDown: (e) => {
                          "Enter" !== e.key || e.nativeEvent.isComposing || (e.preventDefault(), Q.replace())
                        },
                      }),
                      (0, n.jsxs)("div", {
                        className: "flex gap-2",
                        children: [
                          (0, n.jsx)(tu.$, {
                            color: "secondary",
                            size: "compact",
                            disabled: 0 === Z,
                            onClick: () => {
                              ;(Q.replace(), q.current?.focus())
                            },
                            children: (0, n.jsx)(eo.A, {
                              id: "codex.pageFindBar.replaceCurrent",
                              defaultMessage: "Replace",
                              description: "Button to replace the current search match",
                            }),
                          }),
                          (0, n.jsx)(tu.$, {
                            color: "secondary",
                            size: "compact",
                            disabled: 0 === Z,
                            onClick: () => {
                              ;(Q.replaceAll(), q.current?.focus())
                            },
                            children: (0, n.jsx)(eo.A, {
                              id: "codex.pageFindBar.replaceAll",
                              defaultMessage: "Replace all",
                              description: "Button to replace every matching occurrence",
                            }),
                          }),
                        ],
                      }),
                    ],
                  })
                : null),
            (B[100] = Q),
            (B[101] = K),
            (B[102] = Z),
            (B[103] = J),
            (B[104] = Y.replaceText),
            (B[105] = D))
          : (D = B[105]),
        B[106] !== T || B[107] !== O || B[108] !== j || B[109] !== F || B[110] !== D || B[111] !== c
          ? ((H = (0, n.jsxs)(td.N, { children: [c, T, O, j, F, D] })),
            (B[106] = T),
            (B[107] = O),
            (B[108] = j),
            (B[109] = F),
            (B[110] = D),
            (B[111] = c),
            (B[112] = H))
          : (H = B[112]),
        B[113] !== i || B[114] !== o || B[115] !== H
          ? ((_ = (0, n.jsx)(tc.Q, {
              children: (0, n.jsx)("div", {
                ref: i,
                "data-editor-search-surface": !0,
                "data-codex-escape-boundary": !0,
                "data-pierre-find-controls": !0,
                onKeyDownCapture: o,
                children: H,
              }),
            })),
            (B[113] = i),
            (B[114] = o),
            (B[115] = H),
            (B[116] = _))
          : (_ = B[116]),
        B[117] !== W || B[118] !== _
          ? ((N = (0, n.jsx)("div", { className: "contents", "data-pierre-find-input-id": W, children: _ })),
            (B[117] = W),
            (B[118] = _),
            (B[119] = N))
          : (N = B[119]),
        N
      )
    }
    function tm() {
      return null
    }
    let tg = (0, ee.vP)(e7.GD, null)
    class tv {
      input = null
      snapshot = null
      listeners = new Set()
      getSnapshot = () => this.snapshot
      attach = (e) => {
        this.input = e?.querySelector("[data-codex-find-input]") ?? null
      }
      subscribe = (e) => (
        this.listeners.add(e),
        () => {
          this.listeners.delete(e)
        }
      )
      render = (e, t) => (
        this.update({ state: e, actions: t }),
        {
          update: (e) => this.update({ state: e, actions: t }),
          focus: () => {
            ;(this.input?.focus({ preventScroll: !0 }), this.input?.select())
          },
          destroy: () => this.update(null),
        }
      )
      close = () => {
        this.snapshot?.actions.close()
      }
      update(e) {
        for (let t of ((this.snapshot = e), this.listeners)) t()
      }
    }
    i("FN43")
    let ty =
        "[--diffs-dark:currentColor] [--diffs-light:currentColor] [--diffs-min-number-column-width:1ch] [--diffs-editor-selection-bg:var(--color-background-text-selection)]",
      tx = () => {}
    function tS(e) {
      let t,
        i,
        o,
        s,
        r,
        a,
        d,
        c,
        h = (0, l.c)(36),
        [u, f] = (0, $.useState)(null),
        p = e.isActive ?? !0
      ;(h[0] !== e.cwd ||
      h[1] !== e.filePath ||
      h[2] !== e.hostId ||
      h[3] !== e.workspaceRoot ||
      h[4] !== e.workspaceRoots ||
      h[5] !== p
        ? ((t = (0, n.jsx)(e3.w$, {
            cwd: e.cwd,
            hostId: e.hostId,
            isActive: p,
            path: e.filePath,
            workspaceRoot: e.workspaceRoot,
            workspaceRoots: e.workspaceRoots,
          })),
          (h[0] = e.cwd),
          (h[1] = e.filePath),
          (h[2] = e.hostId),
          (h[3] = e.workspaceRoot),
          (h[4] = e.workspaceRoots),
          (h[5] = p),
          (h[6] = t))
        : (t = h[6]),
        h[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, n.jsx)("div", { ref: f, className: "contents" })), (h[7] = i))
          : (i = h[7]),
        h[8] !== e.filePath || h[9] !== e.headerActions || h[10] !== e.headerGroups || h[11] !== e.hostId
          ? ((o =
              null != e.headerGroups || null != e.headerActions
                ? null
                : (0, n.jsx)(es.jT, { hostId: e.hostId, path: e.filePath, showLabel: !0, variant: "viewer" })),
            (h[8] = e.filePath),
            (h[9] = e.headerActions),
            (h[10] = e.headerGroups),
            (h[11] = e.hostId),
            (h[12] = o))
          : (o = h[12]),
        h[13] !== e.cwd ||
        h[14] !== e.filePath ||
        h[15] !== e.headerActions ||
        h[16] !== e.headerGroups ||
        h[17] !== e.headerLeadingActions ||
        h[18] !== e.hostId ||
        h[19] !== e.onSelectFile ||
        h[20] !== e.workspaceRoot ||
        h[21] !== t ||
        h[22] !== o
          ? ((s = (0, n.jsx)(e5.R, {
              cwd: e.cwd,
              headerLeadingActions: e.headerLeadingActions,
              filenameTrailingContent: t,
              hostId: e.hostId,
              onSelectFile: e.onSelectFile,
              path: e.filePath,
              pathActions: i,
              ...e.headerGroups,
              trailingContent: e.headerActions,
              openFileAction: o,
              workspaceRoot: e.workspaceRoot,
            })),
            (h[13] = e.cwd),
            (h[14] = e.filePath),
            (h[15] = e.headerActions),
            (h[16] = e.headerGroups),
            (h[17] = e.headerLeadingActions),
            (h[18] = e.hostId),
            (h[19] = e.onSelectFile),
            (h[20] = e.workspaceRoot),
            (h[21] = t),
            (h[22] = o),
            (h[23] = s))
          : (s = h[23]))
      let m = s
      ;(h[24] !== u || h[25] !== e
        ? ((r = (0, n.jsx)(
            tw,
            { ...e, navigationContainer: u },
            JSON.stringify([e.tabId, e.hostId, e.environmentId, e.filePath, e.language]),
          )),
          (h[24] = u),
          (h[25] = e),
          (h[26] = r))
        : (r = h[26]),
        h[27] !== e.sidePane || h[28] !== r
          ? ((a = (0, n.jsxs)("div", { className: "flex h-full min-h-0 flex-1", children: [r, e.sidePane] })),
            (h[27] = e.sidePane),
            (h[28] = r),
            (h[29] = a))
          : (a = h[29]))
      let g = a
      return (
        h[30] !== g || h[31] !== m || h[32] !== e.renderSlots
          ? ((d =
              null == e.renderSlots
                ? (0, n.jsxs)(n.Fragment, { children: [m, g] })
                : e.renderSlots({
                    headerRows: [{ id: "file-navigation", height: "content", divider: !0, content: m }],
                    content: g,
                  })),
            (h[30] = g),
            (h[31] = m),
            (h[32] = e.renderSlots),
            (h[33] = d))
          : (d = h[33]),
        h[34] !== d
          ? ((c = (0, n.jsx)("div", { className: "flex h-full min-h-0 flex-col", children: d })),
            (h[34] = d),
            (h[35] = c))
          : (c = h[35]),
        c
      )
    }
    function tw(e) {
      var t
      let i,
        o,
        r,
        a,
        d,
        c,
        h,
        u,
        f,
        p,
        m,
        g,
        v,
        y,
        x,
        S,
        w,
        b,
        C,
        E,
        I,
        R,
        T,
        k,
        M,
        A,
        P,
        O,
        j,
        L,
        F,
        D,
        H,
        _,
        N,
        B,
        V,
        z,
        U,
        K,
        q,
        G,
        Y,
        Z,
        X,
        et,
        es,
        eT,
        eO,
        eF,
        eH,
        e_,
        eN,
        eV,
        ez,
        eq,
        eQ,
        eY,
        eZ,
        e3,
        e5,
        tr,
        ta,
        td,
        tc,
        th,
        tu,
        tf,
        tm,
        tv,
        tS,
        tw,
        tA,
        tP,
        tO,
        tj,
        tL,
        tF,
        tD,
        tH,
        t_,
        tN,
        tB,
        tV,
        tz,
        tU,
        tK,
        t$,
        tW,
        tq,
        tG,
        tQ,
        tY,
        tZ,
        tX,
        tJ,
        t0,
        t1,
        t2,
        t3,
        t4,
        t5,
        t7,
        t8,
        t6,
        t9,
        ie,
        it,
        ii,
        il = (0, l.c)(468),
        {
          column: io,
          commentProps: is,
          comparisonBase: ir,
          focusLine: ia,
          revealFirstChange: id,
          onFirstChangeRevealHandled: ic,
          contentActions: ih,
          renderContent: iu,
          onDocumentChange: ip,
          reloadCleanExternalChanges: im,
          conversationId: ig,
          cwd: iv,
          filePath: iy,
          hostId: ix,
          environmentId: iS,
          initialDraft: iw,
          initialCommentRange: ib,
          initialScrollTop: iC,
          isActive: iE,
          language: iI,
          line: iR,
          onAddSelectedTextToChat: iT,
          onDiscardChange: ik,
          onDraftChange: iM,
          onLineRevealHandled: iA,
          onOpenLocation: iP,
          panelId: iO,
          onSaveChange: ij,
          onSaveError: iL,
          onScrollChange: iF,
          onScrollFlushChange: iD,
          onUnsavedChangesChange: iH,
          workspaceRoot: i_,
          workspaceRoots: iN,
          vim: iB,
          navigationContainer: iV,
        } = e,
        iz = void 0 === iE || iE,
        iU = void 0 === ik ? tx : ik,
        iK = void 0 === iM ? tx : iM,
        i$ = void 0 === ij ? tx : ij,
        iW = void 0 === iD ? tx : iD,
        iq = void 0 === iH ? tx : iH,
        iG = (0, ee.gh)(e7.GD),
        iQ = (0, ee.Ul)(eb.L),
        iY = (0, ee.Ul)(ep.S),
        iZ = (0, e6.iK)(en.oKj.diffMarkerStyle),
        iX = (0, ee.Ul)(e0.Xi),
        iJ = iN ?? iX,
        i0 = (0, ee._U)(e8.nL, ix),
        i1 = (0, e9.Zj)(eL.T),
        i2 = (0, ee.Ul)(eL.N),
        i3 = i1 && i2
      il[0] !== iS || il[1] !== iG.value
        ? ((o = null == iS ? (0, e7.Qm)(iG.value) : { environmentId: iS, threadId: (0, e7.Qm)(iG.value) }),
          (il[0] = iS),
          (il[1] = iG.value),
          (il[2] = o))
        : (o = il[2])
      let i4 = o,
        i5 = (0, ee._U)(tt.z2, ix === en.iwv ? i4 : null),
        i7 = !0 === (0, e6.iK)(en.oKj.codeFontSize),
        i8 = (0, tn.P)(),
        i6 = (0, tn._)(i8),
        i9 = (0, el.A)(),
        ne = (0, e6.iK)(en.oKj.lightCodeThemeId),
        nt = (0, e6.iK)(en.oKj.darkCodeThemeId),
        ni = (0, e6.iK)(en.oKj.codeFontSize)
      il[3] !== ni ? ((r = Math.round(1.8 * ni)), (il[3] = ni), (il[4] = r)) : (r = il[4])
      let nn = r,
        nl = (0, $.useRef)(null),
        no = (0, $.useRef)(null),
        ns = (0, $.useRef)(!1),
        nr = (0, $.useRef)(null),
        [na] = (0, $.useState)(tk),
        nd = (0, $.useId)()
      ;(il[5] !== nd || il[6] !== iG || il[7] !== na
        ? ((d = () =>
            iG.watch((e) => {
              let { get: t } = e,
                i = t(tg),
                n = t(ea.eb)
              ;(i !== nd || n) && na.close()
            })),
          (a = [nd, iG, na]),
          (il[5] = nd),
          (il[6] = iG),
          (il[7] = na),
          (il[8] = a),
          (il[9] = d))
        : ((a = il[8]), (d = il[9])),
        (0, $.useEffect)(d, a))
      let nc = (0, $.useRef)(null),
        nh = (0, $.useRef)(!1),
        nu = (0, $.useRef)(null),
        nf = (0, $.useRef)(iC),
        np = (0, $.useRef)(null == iC),
        nm = (0, $.useRef)(null),
        ng = (0, $.useRef)(0),
        nv = (0, $.useRef)(null),
        ny = (0, $.useRef)(0),
        nx = (0, $.useRef)(iR),
        nS = (0, ew.N)(ia ? `${iy}:${iR ?? ""}:${io ?? ""}` : null),
        nw = (0, $.useRef)(iC ?? 0),
        nb = (0, $.useRef)(null),
        nC = (0, $.useRef)(null),
        nE = (0, $.useRef)(null),
        [nI, nR] = (0, $.useState)(!1),
        nT = (0, $.useRef)(iw),
        nk = (0, $.useRef)(null),
        nM = (0, $.useRef)(!1),
        nA = (0, $.useRef)(null),
        nP = (0, $.useRef)(null),
        nO = (0, $.useRef)(null),
        [nj, nL] = (0, $.useState)(eG.yx)
      il[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = { canRedo: !1, canUndo: !1, fileRevision: eG.yx.fileRevision }), (il[10] = c))
        : (c = il[10])
      let [nF, nD] = (0, $.useState)(c),
        [nH, n_] = (0, $.useState)(null)
      il[11] === Symbol.for("react.memo_cache_sentinel") ? ((u = () => new eX(n_)), (il[11] = u)) : (u = il[11])
      let [nN] = (0, $.useState)(u),
        [nB] = (0, $.useState)(tT),
        nV = (0, $.useRef)(void 0)
      il[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = { base: void 0, status: null }), (il[12] = f))
        : (f = il[12])
      let [nz, nU] = (0, $.useState)(f),
        nK = nz.base === ir ? nz.status : null
      ;(il[13] !== iv ? ((p = null == iv ? null : (0, en.DIv)(iv)), (il[13] = iv), (il[14] = p)) : (p = il[14]),
        il[15] !== iv || il[16] !== iy || il[17] !== i_ || il[18] !== iJ
          ? ((m = i_ ?? (0, e4.Sj)({ cwd: iv, path: iy, workspaceRoots: iJ })),
            (il[15] = iv),
            (il[16] = iy),
            (il[17] = i_),
            (il[18] = iJ),
            (il[19] = m))
          : (m = il[19]),
        il[20] !== is || il[21] !== ig || il[22] !== iy || il[23] !== p || il[24] !== m
          ? ((g = { cwd: p, diffPath: iy, workspaceRoot: m, conversationId: ig, enableComments: !1, ...is }),
            (il[20] = is),
            (il[21] = ig),
            (il[22] = iy),
            (il[23] = p),
            (il[24] = m),
            (il[25] = g))
          : (g = il[25]))
      let { annotations: n$, annotationKeys: nW, addDraftComment: nq, renderCommentAnnotation: nG } = (0, eg.V)(g)
      il[26] !== n$ ? ((v = (0, ef.Gq)(n$)), (il[26] = n$), (il[27] = v)) : (v = il[27])
      let nQ = v,
        nY = (0, $.useRef)(null)
      ;(il[28] !== nq || il[29] !== nW || il[30] !== ib
        ? ((y = () => {
            if (null == ib || nY.current === ib) return
            nY.current = ib
            let { lineNumber: e, startLine: t } = (0, eP.H)(ib)
            nW.has((0, ef.bN)("additions", e)) || nq({ side: "additions", lineNumber: e, startLine: t })
          }),
          (x = [nq, nW, ib]),
          (il[28] = nq),
          (il[29] = nW),
          (il[30] = ib),
          (il[31] = y),
          (il[32] = x))
        : ((y = il[31]), (x = il[32])),
        (0, $.useEffect)(y, x),
        il[33] !== nG
          ? ((S = function (e) {
              return (0, n.jsx)("div", {
                className: "select-text",
                "data-pierre-editor-annotation": !0,
                children: nG((0, ef.WA)(e)),
              })
            }),
            (il[33] = nG),
            (il[34] = S))
          : (S = il[34]))
      let nZ = S
      il[35] !== i9 || il[36] !== iG
        ? ((w = () => {
            iG.get(ec.Id).danger(
              i9.formatMessage({
                id: "pierreFileEditor.selectionEditError",
                defaultMessage: "Could not edit selection",
                description: "Toast shown when a model could not generate an edit for selected text",
              }),
              { errorAnalytics: { toastId: "pierreFileEditor.selectionEditError" } },
            )
          }),
          (il[35] = i9),
          (il[36] = iG),
          (il[37] = w))
        : (w = il[37])
      let nX = w
      il[38] !== iy
        ? ((b = () => {
            let e = nl.current?.getEditor(iy)
            return e?.getEditState() != null ? e : void 0
          }),
          (il[38] = iy),
          (il[39] = b))
        : (b = il[39])
      let nJ = (0, ts.K)(b)
      il[40] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = { count: 0, activeIndex: -1, previousIndex: -1, nextIndex: -1 }), (il[40] = C))
        : (C = il[40])
      let [n0, n1] = (0, $.useState)(C)
      il[41] !== nJ
        ? ((E = () => {
            let e = nJ()?.getEditState()
            return e?.type === "file-diff" ? e.diffSession.hunks.flatMap(tR).filter(tI) : void 0
          }),
          (il[41] = nJ),
          (il[42] = E))
        : (E = il[42])
      let n2 = (0, ts.K)(E)
      il[43] !== n2 || il[44] !== nJ || il[45] !== iz
        ? ((I = () => {
            if (!iz) return
            let e = n2(),
              t = nJ(),
              i = t?.getViewState().selections?.at(-1),
              n = i?.direction === -1 ? i.start : i?.end,
              l = n?.line ?? -1,
              o = (t?.getEditState()?.document.lineCount ?? 1 / 0) - 1,
              s =
                e?.findIndex(
                  (e) =>
                    l >= Math.min(e.additionLineIndex, o) &&
                    l < Math.min(e.additionLineIndex, o) + Math.max(1, e.additions),
                ) ?? -1,
              r = e?.length ?? 0,
              a = e?.findLastIndex((e, t) => (s < 0 || t < s) && e.additionLineIndex < l) ?? -1,
              d = e?.findIndex((e, t) => t > s && e.additionLineIndex > l) ?? -1
            n1((e) =>
              e.count === r && e.activeIndex === s && e.previousIndex === a && e.nextIndex === d
                ? e
                : { count: r, activeIndex: s, previousIndex: a, nextIndex: d },
            )
          }),
          (il[43] = n2),
          (il[44] = nJ),
          (il[45] = iz),
          (il[46] = I))
        : (I = il[46])
      let n3 = (0, ts.K)(I)
      il[47] !== nj.fileRevision || il[48] !== n3
        ? ((R = (e, t, i) => {
            ;(nO.current?.updateContent(e.contents),
              n3(),
              nD({ canRedo: t, canUndo: i, fileRevision: nj.fileRevision }))
          }),
          (il[47] = nj.fileRevision),
          (il[48] = n3),
          (il[49] = R))
        : (R = il[49])
      let n4 = (0, ts.K)(R)
      il[50] !== nq ||
      il[51] !== nW ||
      il[52] !== is?.enableComments ||
      il[53] !== nJ ||
      il[54] !== i9 ||
      il[55] !== iT ||
      il[56] !== nN ||
      il[57] !== nX
        ? ((T = (e) =>
            nN.render({
              context: e,
              intl: i9,
              onAddSelectedTextToChat: iT,
              onCommentSelectedRange:
                is?.enableComments !== !0
                  ? void 0
                  : (e) => {
                      let { lineNumber: t, startLine: i } = (0, eP.H)(e)
                      nW.has((0, ef.bN)("additions", t)) ||
                        (nJ()?.setSelections([]), nq({ side: "additions", lineNumber: t, startLine: i }))
                    },
              onClearEditorSelection: () => nJ()?.setSelections([]),
              onEditSelectedText: async (e) => {
                let t = nO.current
                if (null == t) return "failed"
                let i = await t.requestSelectionEdit(e)
                return ("failed" === i && nX(), i)
              },
            })),
          (il[50] = nq),
          (il[51] = nW),
          (il[52] = is?.enableComments),
          (il[53] = nJ),
          (il[54] = i9),
          (il[55] = iT),
          (il[56] = nN),
          (il[57] = nX),
          (il[58] = T))
        : (T = il[58])
      let n5 = (0, ts.K)(T),
        n7 = nj.file?.contents ?? null,
        n8 = (0, $.useRef)(-1)
      il[59] !== n7 || il[60] !== nj.file || il[61] !== nj.isReadOnly || il[62] !== iy || il[63] !== nQ
        ? ((k =
            null == nj.file || null == n7
              ? null
              : { annotations: nQ, edit: !nj.isReadOnly, file: { ...nj.file, contents: n7 }, id: iy, type: "file" }),
          (il[59] = n7),
          (il[60] = nj.file),
          (il[61] = nj.isReadOnly),
          (il[62] = iy),
          (il[63] = nQ),
          (il[64] = k))
        : (k = il[64])
      let n6 = k
      il[65] !== n6 || il[66] !== ir || il[67] !== nB || il[68] !== nj.fileRevision || il[69] !== iy || il[70] !== nQ
        ? ((M = (e) => {
            let t = nl.current
            if (null == t || null == n6) return
            let i = t.getItem(iy),
              n = n8.current === nj.fileRevision,
              l = nV.current !== ir,
              o = n6
            if ((void 0 !== e && e) || !n || l || null == i) {
              let e =
                null == ir
                  ? null
                  : (function (e, t) {
                      if (e.length > 2097152 || t.contents.length > 2097152) return { status: "too-large" }
                      let i = { ...t, contents: e, cacheKey: void 0 },
                        n = { ...t, cacheKey: void 0 },
                        l = (0, eK.ss)(t.name, t.name, e, t.contents, void 0, void 0, { timeout: 25 })
                      if (null == l) return { status: "too-complex" }
                      let o = (0, eU.w1)(l, { oldFile: i, newFile: n })
                      if (null == o) return { status: "too-complex" }
                      if (0 === o.hunks.length) {
                        let i = o.additionLines.length
                        ;((o.splitLineCount = i),
                          (o.unifiedLineCount = i),
                          o.hunks.push({
                            collapsedBefore: 0,
                            additionStart: 1,
                            additionCount: i,
                            additionLines: 0,
                            additionLineIndex: 0,
                            deletionStart: 1,
                            deletionCount: i,
                            deletionLines: 0,
                            deletionLineIndex: 0,
                            hunkContent: [{ type: "context", lines: i, additionLineIndex: 0, deletionLineIndex: 0 }],
                            splitLineStart: 0,
                            splitLineCount: i,
                            unifiedLineStart: 0,
                            unifiedLineCount: i,
                            noEOFCRAdditions: !t.contents.endsWith("\n"),
                            noEOFCRDeletions: !e.endsWith("\n"),
                          }))
                      }
                      return ((o.lang = t.lang), { status: "ready", fileDiff: o })
                    })(ir, n6.file)
              ;(nU({ base: ir, status: e?.status ?? null }),
                e?.status === "ready" &&
                  (o = { id: iy, type: "diff", edit: n6.edit, fileDiff: e.fileDiff, annotations: nQ.map(ef.WA) }))
            } else
              i?.type === "diff"
                ? (o = { ...i, edit: n6.edit, annotations: nQ.map(ef.WA) })
                : i?.type === "file" && (o = { ...n6, file: i.file })
            if (null == i) t.addItems([o])
            else if (l || i.type !== o.type) {
              ;(n ? nB.capture(t.getEditor(iy)) : nB.clear(),
                nE.current?.shadowRoot?.activeElement != null && (nu.current = nj.fileRevision))
              let e = no.current
              ;(null != e &&
                (nb.current = {
                  fileRevision: nj.fileRevision,
                  scrollLeft: e.scrollLeft,
                  scrollTop: t.getInstance()?.getScrollTop() ?? 0,
                }),
                nB.replaceItem(t, o))
            } else t.updateItem({ ...o, version: (i?.version ?? 0) + 1 })
            ;((nV.current = ir), (n8.current = nj.fileRevision))
          }),
          (il[65] = n6),
          (il[66] = ir),
          (il[67] = nB),
          (il[68] = nj.fileRevision),
          (il[69] = iy),
          (il[70] = nQ),
          (il[71] = M))
        : (M = il[71])
      let n9 = (0, ts.K)(M)
      if (
        (il[72] !== n9
          ? ((A = () => {
              n9()
            }),
            (il[72] = n9),
            (il[73] = A))
          : (A = il[73]),
        il[74] !== ir || il[75] !== nj.fileRevision || il[76] !== nj.isReadOnly || il[77] !== nQ || il[78] !== n9
          ? ((P = [ir, nj.fileRevision, nj.isReadOnly, nQ, n9]),
            (il[74] = ir),
            (il[75] = nj.fileRevision),
            (il[76] = nj.isReadOnly),
            (il[77] = nQ),
            (il[78] = n9),
            (il[79] = P))
          : (P = il[79]),
        (0, $.useLayoutEffect)(A, P),
        il[80] !== iv ||
          il[81] !== nj.externalReview ||
          il[82] !== nj.file ||
          il[83] !== nj.isReadOnly ||
          il[84] !== nj.selectionReview ||
          il[85] !== iy ||
          il[86] !== i3 ||
          il[87] !== i0 ||
          il[88] !== i_)
      ) {
        let e =
          null ==
          (O =
            null != iv || null != i_ || (0, en.cxl)(iy)
              ? (0, to.oB)(iv ?? i_ ?? "", iy, (0, en.tIC)(iv ?? i_ ?? iy) || (0, en.tIC)(iy))
              : null)
            ? null
            : ei().posix.dirname(O)
        ;((F = ee._U),
          (D = ek),
          (j =
            i3 &&
            null != e &&
            null != i0 &&
            null != nj.file &&
            !nj.isReadOnly &&
            null == nj.externalReview &&
            null == nj.selectionReview),
          (L = null == e || null == i0 ? null : { cwd: (0, en.DIv)(e), hostConfig: i0 }),
          (il[80] = iv),
          (il[81] = nj.externalReview),
          (il[82] = nj.file),
          (il[83] = nj.isReadOnly),
          (il[84] = nj.selectionReview),
          (il[85] = iy),
          (il[86] = i3),
          (il[87] = i0),
          (il[88] = i_),
          (il[89] = O),
          (il[90] = j),
          (il[91] = L),
          (il[92] = F),
          (il[93] = D))
      } else ((O = il[89]), (j = il[90]), (L = il[91]), (F = il[92]), (D = il[93]))
      let le = O ?? iy
      il[94] !== j || il[95] !== L || il[96] !== le
        ? ((H = { enabled: j, lookup: L, operationSource: "review_model", path: le }),
          (il[94] = j),
          (il[95] = L),
          (il[96] = le),
          (il[97] = H))
        : (H = il[97])
      let { data: lt } = F(D, H),
        li = i3 ? lt : null
      il[98] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = () => nO.current?.getSavedContent() ?? null), (il[98] = _))
        : (_ = il[98])
      let ln = (0, ts.K)(_)
      il[99] !== nJ || il[100] !== ln || il[101] !== i9.locale
        ? ((N = () => new ej({ getEditor: nJ, getSavedContent: ln, locale: i9.locale })),
          (il[99] = nJ),
          (il[100] = ln),
          (il[101] = i9.locale),
          (il[102] = N))
        : (N = il[102])
      let [ll] = (0, $.useState)(N)
      !1 !== il[103] || il[104] !== iB || il[105] !== i7
        ? ((B = (e) => !1), (il[103] = !1), (il[104] = iB), (il[105] = i7), (il[106] = B))
        : (B = il[106])
      let lo = (0, ts.K)(B)
      il[107] !== ll || il[108] !== nJ || il[109] !== lo || il[110] !== nN || il[111] !== n3
        ? ((V = (e) => {
            let t = nN.attach(e),
              i = ll.attach(e)
            if (null == e) return
            let n = (0, eS.g)(e, (e, t) => {
                if (!tM(e)) return null
                let i = nJ(),
                  n = i?.getEditState(),
                  l = i?.getViewState().selections
                if (null == n || null == l) return ""
                let o = l.length - 1
                for (let e of l) if ((o += n.document.offsetAt(e.end) - n.document.offsetAt(e.start)) > t) return ""
                return l.map((e) => n.document.getText(e)).join("\n")
              }),
              l = new AbortController(),
              o = () => {
                queueMicrotask(() => {
                  l.signal.aborted || n3()
                })
              }
            ;(e.ownerDocument.addEventListener("selectionchange", o, { signal: l.signal }),
              e.addEventListener("keyup", o, { signal: l.signal }),
              e.addEventListener("pointerup", o, { signal: l.signal }))
            let s = (0, eM.Y)(e, lo)
            return () => {
              ;(l.abort(), s(), n(), i?.(), t?.())
            }
          }),
          (il[107] = ll),
          (il[108] = nJ),
          (il[109] = lo),
          (il[110] = nN),
          (il[111] = n3),
          (il[112] = V))
        : (V = il[112])
      let ls = (0, ts.K)(V)
      ;(il[113] !== ll || il[114] !== li || il[115] !== i9.locale
        ? ((z = () => {
            ;(ll.setLocale(i9.locale), ll.setBlameResult(li ?? null))
          }),
          (U = [ll, li, i9.locale]),
          (il[113] = ll),
          (il[114] = li),
          (il[115] = i9.locale),
          (il[116] = z),
          (il[117] = U))
        : ((z = il[116]), (U = il[117])),
        (0, $.useLayoutEffect)(z, U),
        il[118] !== iK
          ? ((K = (e) => {
              ;((nT.current = e), iK(e))
            }),
            (il[118] = iK),
            (il[119] = K))
          : (K = il[119]))
      let lr = (0, ts.K)(K),
        la = (0, ts.K)(iA ?? tx),
        ld = (0, ts.K)(ic ?? tx)
      il[120] !== iy || il[121] !== ix || il[122] !== iG
        ? ((q = () => {
            ;(0, te.w)(iG.get(eJ.YV), { hostId: ix, path: iy })
          }),
          (il[120] = iy),
          (il[121] = ix),
          (il[122] = iG),
          (il[123] = q))
        : (q = il[123])
      let lc = (0, ts.K)(q)
      il[124] !== iy || il[125] !== iG
        ? ((G = () => {
            ;(0, te.W)(iG.get(eJ.YV), iy)
          }),
          (il[124] = iy),
          (il[125] = iG),
          (il[126] = G))
        : (G = il[126])
      let lh = (0, ts.K)(G),
        lu = (0, ts.K)(iU),
        lf = (0, ts.K)(i$),
        lp = (0, ts.K)(iL)
      il[127] !== iy || il[128] !== ip
        ? ((Y = (e, t, i) => {
            null != ip &&
              ip(
                null == e.file
                  ? null
                  : {
                      filePath: iy,
                      content: e.file.contents,
                      isReadOnly: e.isReadOnly,
                      hasConflict: null != e.externalReview || null != e.selectionReview,
                      isDirty: e.file.contents !== t.getSavedContent(),
                      onChange: (e) => t.updateContent(e),
                      onSave: i,
                    },
              )
          }),
          (il[127] = iy),
          (il[128] = ip),
          (il[129] = Y))
        : (Y = il[129])
      let lm = (0, ts.K)(Y),
        lg = (0, ts.K)(iF ?? tx),
        lv = (0, ts.K)(iW)
      il[130] === Symbol.for("react.memo_cache_sentinel")
        ? ((Z = (e) => {
            let t = nl.current?.getInstance()
            if (null == t) return
            let i = Math.max(0, t.getScrollHeight() + 16 - t.getHeight())
            t.getScrollTop() !== Math.min(Math.max(e, 0), i) &&
              t.scrollTo({ behavior: "instant", position: e, type: "position" })
          }),
          (il[130] = Z))
        : (Z = il[130])
      let ly = (0, ts.K)(Z)
      il[131] !== lg || il[132] !== iF
        ? ((X = () => {
            if (null == iF) return
            let e = nr.current?.querySelector("[data-inline-file-diff-review-viewport]")
            lg(
              np.current || null == nf.current
                ? (e?.scrollTop ?? nl.current?.getInstance()?.getScrollTop() ?? nw.current)
                : nf.current,
            )
          }),
          (il[131] = lg),
          (il[132] = iF),
          (il[133] = X))
        : (X = il[133])
      let lx = (0, ts.K)(X)
      il[134] !== nj.file || il[135] !== ly
        ? ((et = () => {
            if (np.current || null != nm.current) return
            let e = () => {
              nm.current = -1
              let t = nf.current,
                i = nl.current?.getInstance()
              if (null == t || null == i) {
                nm.current = null
                return
              }
              ;(ly(t), (ng.current = ng.current + 1))
              let n = i.getScrollHeight() + 16 - i.getHeight()
              nv.current === n ? (ny.current = ny.current + 1) : ((nv.current = n), (ny.current = 0))
              let l = Math.min(t, Math.max(n, 0)),
                o = 1 >= Math.abs(i.getScrollTop() - l),
                s = ny.current >= 30,
                r = ng.current >= 120
              if ((null != nj.file && o && s) || r) {
                ;((np.current = !0), (nm.current = null))
                return
              }
              nm.current = requestAnimationFrame(e)
            }
            e()
          }),
          (il[134] = nj.file),
          (il[135] = ly),
          (il[136] = et))
        : (et = il[136])
      let lS = (0, ts.K)(et)
      il[137] !== nB || il[138] !== iy || il[139] !== n9 || il[140] !== lS
        ? ((es = (e) => {
            ;(null == e && nB.capture(nl.current?.getEditor(iy)), (nl.current = e), null != e && (n9(!0), lS()))
          }),
          (il[137] = nB),
          (il[138] = iy),
          (il[139] = n9),
          (il[140] = lS),
          (il[141] = es))
        : (es = il[141])
      let lw = (0, ts.K)(es)
      il[142] === Symbol.for("react.memo_cache_sentinel")
        ? ((eT = () => {
            null != nm.current && (cancelAnimationFrame(nm.current), (nm.current = null))
          }),
          (il[142] = eT))
        : (eT = il[142])
      let lb = (0, ts.K)(eT)
      il[143] !== lb
        ? ((eO = () => {
            ;((np.current = !0), lb())
          }),
          (il[143] = lb),
          (il[144] = eO))
        : (eO = il[144])
      let lC = (0, ts.K)(eO),
        lE = (0, ts.K)(iq)
      il[145] === Symbol.for("react.memo_cache_sentinel")
        ? ((eF = (e) => {
            e.nativeEvent.composedPath().some(tM) && nO.current?.markPotentiallyDirty()
          }),
          (il[145] = eF))
        : (eF = il[145])
      let lI = eF
      il[146] !== iB || il[147] !== i7
        ? ((eH = (e) => {
            lI(e)
          }),
          (il[146] = iB),
          (il[147] = i7),
          (il[148] = eH))
        : (eH = il[148])
      let lR = eH
      ;(il[149] !== i5 ||
      il[150] !== iy ||
      il[151] !== lu ||
      il[152] !== lm ||
      il[153] !== lr ||
      il[154] !== lf ||
      il[155] !== lp ||
      il[156] !== lc ||
      il[157] !== lh ||
      il[158] !== lE ||
      il[159] !== ix ||
      il[160] !== iI ||
      il[161] !== im ||
      il[162] !== iG ||
      il[163] !== nN
        ? ((e_ = () => {
            let e,
              t = () => i.saveUntilClean(),
              i = new eG.Db({
                reloadCleanExternalChanges: im,
                cloudFileAccess: i5,
                filePath: iy,
                hostId: ix,
                initialDraft: nT.current ?? null,
                language: iI,
                onDraftChange: lr,
                onEdit: lc,
                onExternalConflict: () => nN.cancelSelectionEdit(),
                onLoad: lh,
                onSaveError: lp,
                onStateChange: (e) => {
                  ;(nL(e), lm(e, i, t))
                },
                onUnsavedChangesChange: (e) => lE(e, t),
              })
            ;((nO.current = i), lu(() => i.dispose({ discardUnsavedChanges: !0 })), lf(t))
            let n = () => i.dispose()
            if (
              (window.addEventListener("pagehide", n),
              i.start(n8.current + 1),
              im && "chatgpt-thread" === iG.value.routeKind)
            ) {
              let t = iG.value.conversationId,
                n = !1,
                l = null
              e = iG.watch((e) => {
                let { get: o } = e,
                  s = o(er.F1, t)
                if ((0, er.QN)(s)) {
                  let e = o(er.LT, t)
                  ;((l = n ? (e ?? l) : e), (n = !0))
                  return
                }
                if (!n) return
                n = !1
                let r = iG.get(er.i4, t)
                "idle" === s && r?.result === "completed" && r.requestId === l && i.syncExternalChange()
              })
            }
            return () => {
              ;(e?.(), window.removeEventListener("pagehide", n), lu(null), lf(null), n())
            }
          }),
          (eN = [im, i5, iy, lu, lm, lr, lf, lp, lc, lh, lE, ix, iI, iG, nN]),
          (il[149] = i5),
          (il[150] = iy),
          (il[151] = lu),
          (il[152] = lm),
          (il[153] = lr),
          (il[154] = lf),
          (il[155] = lp),
          (il[156] = lc),
          (il[157] = lh),
          (il[158] = lE),
          (il[159] = ix),
          (il[160] = iI),
          (il[161] = im),
          (il[162] = iG),
          (il[163] = nN),
          (il[164] = e_),
          (il[165] = eN))
        : ((e_ = il[164]), (eN = il[165])),
        (0, $.useEffect)(e_, eN),
        il[166] !== lb || il[167] !== lx || il[168] !== lv || il[169] !== lS
          ? ((eV = () => (
              lv(lx),
              lS(),
              () => {
                lx()
                let e = nl.current?.getInstance(),
                  t = e?.getContainerElement()
                ;(null != e &&
                  null != t &&
                  np.current &&
                  (nb.current = {
                    fileRevision: n8.current + 1,
                    scrollLeft: t.scrollLeft,
                    scrollTop: e.getScrollTop(),
                  }),
                  lv(null),
                  lb())
              }
            )),
            (ez = [lb, lx, lv, lS]),
            (il[166] = lb),
            (il[167] = lx),
            (il[168] = lv),
            (il[169] = lS),
            (il[170] = eV),
            (il[171] = ez))
          : ((eV = il[170]), (ez = il[171])),
        (0, $.useLayoutEffect)(eV, ez))
      let lT = nj.selectionReview ?? nj.externalReview,
        lk = nF.fileRevision === nj.fileRevision
      il[172] !== n7
        ? ((t = n7),
          (eq = () => (null == t ? null : (null == i && (i = (0, eE.rR)(t)), i))),
          (il[172] = n7),
          (il[173] = eq))
        : (eq = il[173])
      let lM = eq
      il[174] === Symbol.for("react.memo_cache_sentinel")
        ? ((eQ = () => nr.current?.closest('[role="tabpanel"]') ?? null), (il[174] = eQ))
        : (eQ = il[174])
      let lA = eQ
      il[175] !== iy || il[176] !== nJ || il[177] !== la || il[178] !== n3
        ? ((eY = () => {
            let e = nJ(),
              t = nl.current,
              i = nC.current
            null != e &&
              null != t &&
              null != nE.current &&
              null != i &&
              ((nC.current = null),
              e.setSelections([
                {
                  direction: "none",
                  end: { character: i.character, line: i.line },
                  start: { character: i.character, line: i.line },
                },
              ]),
              n3(),
              t.scrollTo({
                align: "center",
                behavior: "instant",
                id: iy,
                lineNumber: i.line + 1,
                side: "additions",
                type: "line",
              }),
              i.focus && e.focus({ preventScroll: !0 }),
              null != i.handledLine && la(i.handledLine))
          }),
          (il[175] = iy),
          (il[176] = nJ),
          (il[177] = la),
          (il[178] = n3),
          (il[179] = eY))
        : (eY = il[179])
      let lP = (0, ts.K)(eY)
      il[180] !== nJ
        ? ((eZ = () => {
            nJ()?.focus({ preventScroll: !0 })
          }),
          (il[180] = nJ),
          (il[181] = eZ))
        : (eZ = il[181])
      let lO = eZ
      il[182] !== iy || il[183] !== nJ || il[184] !== lC || il[185] !== n3
        ? ((e3 = (e) => {
            ;(lC(), (nb.current = null))
            let t = nJ(),
              i = t?.getEditState()
            if (null != t && null != i) {
              let n = { line: Math.min(e.additionLineIndex, i.document.lineCount - 1), character: 0 }
              t.setSelections([{ start: n, end: n, direction: "none" }])
            }
            ;(nl.current?.scrollTo({
              type: "line",
              id: iy,
              side: e.additions > 0 ? "additions" : "deletions",
              lineNumber: (e.additions > 0 ? e.additionLineIndex : e.deletionLineIndex) + 1,
              align: "center",
              behavior: "instant",
            }),
              n3())
          }),
          (il[182] = iy),
          (il[183] = nJ),
          (il[184] = lC),
          (il[185] = n3),
          (il[186] = e3))
        : (e3 = il[186])
      let lj = (0, ts.K)(e3)
      il[187] !== lT ||
      il[188] !== nK ||
      il[189] !== iy ||
      il[190] !== nJ ||
      il[191] !== ld ||
      il[192] !== iz ||
      il[193] !== iR ||
      il[194] !== lj
        ? ((e5 = () => {
            if (!nh.current || !iz || null != lT) return
            if (null != iR || "too-large" === nK || "too-complex" === nK) {
              ;((nh.current = !1), ld())
              return
            }
            let e = nl.current,
              t = e?.getItem(iy)
            if (null == e || t?.type !== "diff") return
            let i = nJ(),
              n = i?.getEditState()
            if (t.edit && n?.type !== "file-diff") return
            let l = (n?.type === "file-diff" ? n.diffSession.hunks : t.fileDiff.hunks).flatMap(tE).find(tC)
            ;((nh.current = !1), null != l && lj(l), ld())
          }),
          (il[187] = lT),
          (il[188] = nK),
          (il[189] = iy),
          (il[190] = nJ),
          (il[191] = ld),
          (il[192] = iz),
          (il[193] = iR),
          (il[194] = lj),
          (il[195] = e5))
        : (e5 = il[195])
      let lL = (0, ts.K)(e5)
      ;(il[196] !== id || il[197] !== lL
        ? ((tr = () => {
            ;((nh.current = !!id), lL())
          }),
          (ta = [id, lL]),
          (il[196] = id),
          (il[197] = lL),
          (il[198] = tr),
          (il[199] = ta))
        : ((tr = il[198]), (ta = il[199])),
        (0, $.useLayoutEffect)(tr, ta),
        il[200] !== ld || il[201] !== lC
          ? ((td = () => {
              ;(lC(), nh.current && ((nh.current = !1), ld()))
            }),
            (il[200] = ld),
            (il[201] = lC),
            (il[202] = td))
          : (td = il[202]))
      let lF = td
      il[203] !== nJ || il[204] !== na || il[205] !== lC
        ? ((tc = () => {
            ;(lC(),
              na.close(),
              (nP.current = {
                didNavigate: !1,
                state: nJ()?.getViewState(),
                scrollTop: nl.current?.getInstance()?.getScrollTop() ?? null,
              }))
          }),
          (il[203] = nJ),
          (il[204] = na),
          (il[205] = lC),
          (il[206] = tc))
        : (tc = il[206])
      let lD = (0, ts.K)(tc)
      il[207] !== nj.file || il[208] !== nJ || il[209] !== lM || il[210] !== lP || il[211] !== nN || il[212] !== lC
        ? ((th = (e, t, i) => {
            if ((lC(), null == nj.file)) {
              i && (nk.current = e)
              return
            }
            let n = lM()
            if (null == n) return
            let l = (0, eE.lf)(e, n)
            ;(nN.dismiss(), nJ()?.setSelections([]), (nC.current = { character: 0, line: l - 1, focus: t }), lP())
          }),
          (il[207] = nj.file),
          (il[208] = nJ),
          (il[209] = lM),
          (il[210] = lP),
          (il[211] = nN),
          (il[212] = lC),
          (il[213] = th))
        : (th = il[213])
      let lH = (0, ts.K)(th)
      il[214] !== lH
        ? ((tu = (e) => {
            ;((nP.current = null), lH(e, !0, !0))
          }),
          (il[214] = lH),
          (il[215] = tu))
        : (tu = il[215])
      let l_ = (0, ts.K)(tu)
      il[216] !== nJ || il[217] !== lH
        ? ((tf = (e) => {
            let t = nP.current,
              i = nJ()
            ;(null != t &&
              (null == t.state &&
                null != i &&
                ((t.scrollTop = nl.current?.getInstance()?.getScrollTop() ?? null),
                (t.state = i.getViewState()),
                null == t.state.selections &&
                  (t.state.selections = [
                    { direction: 0, end: { character: 0, line: 0 }, start: { character: 0, line: 0 } },
                  ])),
              (t.didNavigate = !0)),
              lH(e, !1, !1))
          }),
          (il[216] = nJ),
          (il[217] = lH),
          (il[218] = tf))
        : (tf = il[218])
      let lN = (0, ts.K)(tf)
      il[219] !== nJ || il[220] !== ly || il[221] !== nN || il[222] !== n3
        ? ((tm = () => {
            nk.current = null
            let e = nP.current
            if (((nP.current = null), null == e || !e.didNavigate)) return
            ;((nC.current = null), nN.dismiss())
            let t = nJ(),
              i = t?.getViewState().view
            ;(null == t || null == i
              ? t?.setSelections([])
              : t.setViewState({
                  selections: e.state?.selections,
                  view: { scrollLeft: e.state?.view?.scrollLeft ?? i.scrollLeft },
                }),
              n3(),
              null != e.scrollTop && ly(e.scrollTop))
          }),
          (il[219] = nJ),
          (il[220] = ly),
          (il[221] = nN),
          (il[222] = n3),
          (il[223] = tm))
        : (tm = il[223])
      let lB = (0, ts.K)(tm)
      ;(il[224] !== nj.file || il[225] !== nj.isReadOnly || il[226] !== lH
        ? ((tv = () => {
            let e = nk.current
            null == nj.file || null == e || ((nk.current = null), nj.isReadOnly || ((nM.current = !0), lH(e, !0, !0)))
          }),
          (tS = [nj.file, nj.isReadOnly, lH]),
          (il[224] = nj.file),
          (il[225] = nj.isReadOnly),
          (il[226] = lH),
          (il[227] = tv),
          (il[228] = tS))
        : ((tv = il[227]), (tS = il[228])),
        (0, $.useEffect)(tv, tS),
        il[229] !== lT ||
        il[230] !== nj.isReadOnly ||
        il[231] !== nj.isSelectionEditPending ||
        il[232] !== nJ ||
        il[233] !== nN
          ? ((tw = () => {
              let e = nJ()
              null == e || nj.isReadOnly || null != lT || nN.syncSelectionEditMarker(e, nj.isSelectionEditPending)
            }),
            (il[229] = lT),
            (il[230] = nj.isReadOnly),
            (il[231] = nj.isSelectionEditPending),
            (il[232] = nJ),
            (il[233] = nN),
            (il[234] = tw))
          : (tw = il[234]),
        il[235] !== lT ||
        il[236] !== nj.file ||
        il[237] !== nj.isReadOnly ||
        il[238] !== nj.isSelectionEditPending ||
        il[239] !== nJ ||
        il[240] !== nN
          ? ((tA = [lT, nJ, nj.file, nj.isReadOnly, nj.isSelectionEditPending, nN]),
            (il[235] = lT),
            (il[236] = nj.file),
            (il[237] = nj.isReadOnly),
            (il[238] = nj.isSelectionEditPending),
            (il[239] = nJ),
            (il[240] = nN),
            (il[241] = tA))
          : (tA = il[241]),
        (0, $.useEffect)(tw, tA),
        il[242] !== io ||
        il[243] !== nj.file ||
        il[244] !== nj.isReadOnly ||
        il[245] !== iy ||
        il[246] !== ia ||
        il[247] !== nJ ||
        il[248] !== la ||
        il[249] !== iR ||
        il[250] !== lP ||
        il[251] !== nN ||
        il[252] !== nS ||
        il[253] !== lC
          ? ((tP = () => {
              if (
                (null == iR && !nM.current) ||
                (nM.current || (nC.current = null), iR !== nx.current && ((ns.current = !0), lC()), null == nj.file)
              )
                return
              if (nM.current) {
                ;((nM.current = !1), lC())
                return
              }
              if (null == iR || (null != nf.current && !ns.current)) return
              if (nj.isReadOnly) {
                let e = nl.current
                if (null == e) return
                ;(e.scrollTo({ align: "start", behavior: "instant", id: iy, lineNumber: iR, type: "line" }),
                  (ia && null == nE.current) ||
                    (ia && nS() && null != nE.current && (0, e1.uc)(nE.current, iR, io ?? 1, !0), la(iR)))
                return
              }
              let { contents: e } = nj.file,
                t = Math.max(1, Math.min(Math.ceil(iR), e.length + 1)),
                i = (0, eE.Xs)(e, t),
                n = Math.min(Math.max(iR - 1, 0), i.length - 1),
                l = Math.min(Math.max((io ?? 1) - 1, 0), i[n]?.length ?? 0),
                o = requestAnimationFrame(() => {
                  ;((nC.current = {
                    character: l,
                    line: n,
                    focus: nS() || document.activeElement === lA(),
                    handledLine: iR,
                  }),
                    nN.dismiss(),
                    nJ()?.setSelections([]),
                    lP())
                })
              return () => cancelAnimationFrame(o)
            }),
            (tO = [io, nJ, nj.file, nj.isReadOnly, iy, ia, la, iR, lP, nN, nS, lC]),
            (il[242] = io),
            (il[243] = nj.file),
            (il[244] = nj.isReadOnly),
            (il[245] = iy),
            (il[246] = ia),
            (il[247] = nJ),
            (il[248] = la),
            (il[249] = iR),
            (il[250] = lP),
            (il[251] = nN),
            (il[252] = nS),
            (il[253] = lC),
            (il[254] = tP),
            (il[255] = tO))
          : ((tP = il[254]), (tO = il[255])),
        (0, $.useEffect)(tP, tO),
        il[256] !== iy || il[257] !== ix
          ? ((tj = (e) => {
              e.hostId === ix && e.path === iy && nO.current?.syncExternalChange()
            }),
            (tL = [iy, ix]),
            (il[256] = iy),
            (il[257] = ix),
            (il[258] = tj),
            (il[259] = tL))
          : ((tj = il[258]), (tL = il[259])),
        (0, eA.JX)("open-file-changed", tj, tL),
        il[260] === Symbol.for("react.memo_cache_sentinel")
          ? ((tF = (e) => {
              let t = no.current
              null != t && e.scrollTo(t.scrollLeft, nl.current?.getInstance()?.getScrollTop() ?? 0)
            }),
            (il[260] = tF))
          : (tF = il[260]))
      let lV = (0, ts.K)(tF)
      il[261] !== nj.fileRevision ||
      il[262] !== nj.selectionReview ||
      il[263] !== nJ ||
      il[264] !== ly ||
      il[265] !== nN ||
      il[266] !== nX
        ? ((tD = (e) => {
            let t = "edit" === e ? null : no.current,
              i =
                null == nj.selectionReview
                  ? nr.current?.querySelector("[data-inline-file-diff-review-viewport]")
                  : null,
              n = i?.scrollLeft ?? t?.scrollLeft ?? 0,
              l = i?.scrollTop ?? nl.current?.getInstance()?.getScrollTop() ?? 0
            null != t && (t.scrollTo({ left: n }), ly(l))
            let o = nO.current
            if (null != nj.selectionReview) {
              ;((nb.current = null == t ? null : { fileRevision: nj.fileRevision, scrollLeft: n, scrollTop: l }),
                (nu.current = null))
              let i = (0, W.flushSync)(() => o?.resolveSelectionEdit(e)),
                s = nJ()
              ;(null != s && nN.resolveSelectionEdit(s, e, i ?? null)) || nX()
            } else {
              let i = o?.resolveExternalChange(e) ?? !1
              ;((nb.current =
                null != t && i ? { fileRevision: nj.fileRevision + 1, scrollLeft: n, scrollTop: l } : null),
                (nu.current = "edit" === e ? nj.fileRevision + +!!i : null))
            }
          }),
          (il[261] = nj.fileRevision),
          (il[262] = nj.selectionReview),
          (il[263] = nJ),
          (il[264] = ly),
          (il[265] = nN),
          (il[266] = nX),
          (il[267] = tD))
        : (tD = il[267])
      let lz = tD
      il[268] !== i6 || il[269] !== nt || il[270] !== ne
        ? ((tH = "light" === i6 ? (0, ti.oW)(ne, "light") : (0, ti.oW)(nt, "dark")),
          (il[268] = i6),
          (il[269] = nt),
          (il[270] = ne),
          (il[271] = tH))
        : (tH = il[271])
      let lU = tH
      il[272] !== nB || il[273] !== nj.fileRevision
        ? ((t_ = (e) => {
            null != e && nB.restore(e) && nD({ canRedo: e.canRedo, canUndo: e.canUndo, fileRevision: nj.fileRevision })
          }),
          (il[272] = nB),
          (il[273] = nj.fileRevision),
          (il[274] = t_))
        : (t_ = il[274])
      let lK = (0, ts.K)(t_)
      il[275] !== ll ||
      il[276] !== nj.fileRevision ||
      il[277] !== nj.isSelectionEditPending ||
      il[278] !== nJ ||
      il[279] !== lP ||
      il[280] !== lL ||
      il[281] !== nN ||
      il[282] !== n3
        ? ((tN = () => {
            ;(lP(), lL(), ll.schedule(), n3())
            let e = nJ()
            null != e &&
              (nN.syncSelectionEditMarker(e, nj.isSelectionEditPending),
              nu.current === nj.fileRevision && ((nu.current = null), e.focus()))
          }),
          (il[275] = ll),
          (il[276] = nj.fileRevision),
          (il[277] = nj.isSelectionEditPending),
          (il[278] = nJ),
          (il[279] = lP),
          (il[280] = lL),
          (il[281] = nN),
          (il[282] = n3),
          (il[283] = tN))
        : (tN = il[283])
      let l$ = (0, ts.K)(tN)
      il[284] !== ll ||
      il[285] !== lT ||
      il[286] !== io ||
      il[287] !== nj.fileRevision ||
      il[288] !== nj.isReadOnly ||
      il[289] !== ia ||
      il[290] !== nJ ||
      il[291] !== la ||
      il[292] !== iR ||
      il[293] !== lK ||
      il[294] !== lS ||
      il[295] !== lP ||
      il[296] !== lL ||
      il[297] !== ly ||
      il[298] !== nS ||
      il[299] !== n3
        ? ((tB = (e, t, i) => {
            if ((ll.setFileRoot("unmount" === i ? null : e), "unmount" === i)) {
              nE.current === e && ((nE.current = null), nR(!1))
              return
            }
            ;((nE.current = e),
              nR(!0),
              lK(nJ()),
              n3(),
              nj.isReadOnly && null != iR && (null != io || ia) && ((0, e1.uc)(e, iR, io ?? 1, nS()), ia && la(iR)))
            let n = no.current
            if (null == n || np.current || null == nf.current || (lS(), np.current)) {
              if (null == lT) {
                let e = nb.current,
                  t = e?.fileRevision === nj.fileRevision && null != n
                t && (n.scrollTo({ left: e.scrollLeft }), ly(e.scrollTop), (nb.current = null))
                let i = nu.current === nj.fileRevision && null != nJ()
                if ((i && ((nu.current = null), nJ()?.focus()), t || i)) return
              }
              ;(lP(), lL())
            }
          }),
          (il[284] = ll),
          (il[285] = lT),
          (il[286] = io),
          (il[287] = nj.fileRevision),
          (il[288] = nj.isReadOnly),
          (il[289] = ia),
          (il[290] = nJ),
          (il[291] = la),
          (il[292] = iR),
          (il[293] = lK),
          (il[294] = lS),
          (il[295] = lP),
          (il[296] = lL),
          (il[297] = ly),
          (il[298] = nS),
          (il[299] = n3),
          (il[300] = tB))
        : (tB = il[300])
      let lW = (0, ts.K)(tB)
      il[301] === Symbol.for("react.memo_cache_sentinel") ? ((tV = (0, em.S)()), (il[301] = tV)) : (tV = il[301])
      let lq = lU.name
      il[302] === Symbol.for("react.memo_cache_sentinel")
        ? ((tz = (0, eu.M)({
            includeDiffHeader: !1,
            includeSimpleLineSeparators: !1,
            rootSelector: ":is([data-file], [data-diff])",
            surface: "var(--color-surface)",
          })),
          (il[302] = tz))
        : (tz = il[302])
      let lG = `${tz}
      :is([data-file], [data-diff]) {
        /* Keep offsetTop-positioned editor overlays aligned with code rows. */
        --diffs-line-height: round(
          nearest,
          calc(var(--diffs-font-size, 12px) * 1.8),
          1px
        );
        line-height: var(--diffs-line-height);
        --diffs-editor-line-highlight-bg: var(
          --color-codex-editor-line-highlight
        );
        --diffs-editor-line-number-active-bg: var(
          --diffs-editor-line-highlight-bg
        );
        --diffs-editor-line-highlight-border: transparent;
      }
      [data-line][data-editor-active-line] {
        --diffs-line-bg: var(--diffs-editor-line-highlight-bg);
      }
      [data-selection-range] {
        opacity: 0.5;
      }
      [data-caret] {
        animation-timing-function: steps(1, end);
      }
      [data-content] > [data-line] > [data-pierre-editor-inline-blame]::after {
        content: attr(data-pierre-editor-inline-blame);
        color: var(--color-text-tertiary);
        margin-inline-start: var(--padding-row-x);
        pointer-events: none;
        user-select: none;
        white-space: nowrap;
      }
      [data-search] {
        min-width: 0;
      }
      
      [data-marker-range][data-marker-hint] {
        z-index: -10 !important;
        border-radius: 2px;
        background-color: color-mix(
          in srgb,
          var(--color-chart-purple) 32%,
          transparent
        ) !important;
        mask-image: none !important;
      }
      [data-selection-action-popover] {
        display: none !important;
      }
    `
      il[303] !== i6 || il[304] !== lU.name || il[305] !== lG
        ? ((tU = {
            preferredHighlighter: tV,
            disableFileHeader: !0,
            overflow: "wrap",
            theme: lq,
            themeType: i6,
            unsafeCSS: lG,
          }),
          (il[303] = i6),
          (il[304] = lU.name),
          (il[305] = lG),
          (il[306] = tU))
        : (tU = il[306])
      let lQ = tU,
        lY = i_ ?? iv
      il[307] !== iy || il[308] !== lY || il[309] !== iJ
        ? ((tK = (0, e4.Sj)({ cwd: lY, path: iy, workspaceRoots: iJ })),
          (il[307] = iy),
          (il[308] = lY),
          (il[309] = iJ),
          (il[310] = tK))
        : (tK = il[310])
      let lZ = tK
      il[311] !== iv ||
      il[312] !== nj.isReadOnly ||
      il[313] !== iy ||
      il[314] !== nJ ||
      il[315] !== ix ||
      il[316] !== iR ||
      il[317] !== iG
        ? ((t$ = async () => {
            var e, t
            let i,
              l,
              o,
              s,
              r,
              a = nJ(),
              d =
                ((e = nj.isReadOnly ? void 0 : a),
                (t =
                  nr.current?.querySelector("diffs-container")?.shadowRoot?.querySelector('[role="textbox"]') ?? null),
                (i = e?.getEditState()?.document),
                (l = e?.getViewState().selections),
                (o = window.getSelection()?.toString() ?? ""),
                (s = () => {
                  ;(e?.setViewState({ selections: l }), t?.focus({ preventScroll: !0 }))
                }),
                (r = (e) => {
                  ;(s(), window.document.execCommand(e))
                }),
                [
                  {
                    id: "file-undo",
                    message: (0, eD.zR)({
                      id: "pierreFileEditor.contextMenu.undo",
                      defaultMessage: "Undo",
                      description: "Undo the last edit in the file editor",
                    }),
                    accelerator: "CmdOrCtrl+Z",
                    enabled: e?.canUndo ?? !1,
                    onSelect: () => {
                      ;(e?.undo(), e?.focus({ preventScroll: !0 }))
                    },
                  },
                  {
                    id: "file-redo",
                    message: (0, eD.zR)({
                      id: "pierreFileEditor.contextMenu.redo",
                      defaultMessage: "Redo",
                      description: "Redo an edit in the file editor",
                    }),
                    accelerator: "CmdOrCtrl+Shift+Z",
                    enabled: e?.canRedo ?? !1,
                    onSelect: () => {
                      ;(e?.redo(), e?.focus({ preventScroll: !0 }))
                    },
                  },
                  { id: "file-history-separator", type: "separator" },
                  {
                    id: "file-cut",
                    message: (0, eD.zR)({
                      id: "pierreFileEditor.contextMenu.cut",
                      defaultMessage: "Cut",
                      description: "Cut selected text in the file editor",
                    }),
                    accelerator: "CmdOrCtrl+X",
                    nativeRole: "cut",
                    enabled: null != e,
                    onSelect: () => {
                      r("cut")
                    },
                  },
                  {
                    id: "file-copy",
                    message: (0, eD.zR)({
                      id: "pierreFileEditor.contextMenu.copy",
                      defaultMessage: "Copy",
                      description: "Copy selected text in the file editor",
                    }),
                    accelerator: "CmdOrCtrl+C",
                    nativeRole: "copy",
                    enabled: null != e || o.length > 0,
                    onSelect: () => {
                      null == e ? (0, eW.E)(o) : r("copy")
                    },
                  },
                  {
                    id: "file-paste",
                    message: (0, eD.zR)({
                      id: "pierreFileEditor.contextMenu.paste",
                      defaultMessage: "Paste",
                      description: "Paste clipboard text into the file editor",
                    }),
                    accelerator: "CmdOrCtrl+V",
                    nativeRole: "paste",
                    enabled: null != e,
                    onSelect: () => {
                      e$.appServices.clipboard
                        .readText()
                        .then((e) => {
                          s()
                          let i = new DataTransfer()
                          ;(i.setData("text/plain", e),
                            t?.dispatchEvent(
                              new ClipboardEvent("paste", {
                                clipboardData: i,
                                bubbles: !0,
                                composed: !0,
                                cancelable: !0,
                              }),
                            ))
                        })
                        .catch(() => {
                          ;(0, ec.RB)().danger(
                            (0, n.jsx)(eo.A, {
                              id: "pierreFileEditor.contextMenu.pasteError",
                              defaultMessage: "Could not paste from clipboard",
                              description: "Error when the file editor cannot read clipboard text",
                            }),
                            { errorAnalytics: { toastId: "file_editor_paste_failed" } },
                          )
                        })
                    },
                  },
                  {
                    id: "file-select-all",
                    message: (0, eD.zR)({
                      id: "pierreFileEditor.contextMenu.selectAll",
                      defaultMessage: "Select all",
                      description: "Select all text in the file editor",
                    }),
                    accelerator: "CmdOrCtrl+A",
                    nativeRole: null == e ? "selectAll" : void 0,
                    onSelect: () => {
                      if (null == e || null == i) return void r("selectAll")
                      let t = i.lineCount - 1
                      ;(e.setSelections([
                        {
                          start: { line: 0, character: 0 },
                          end: { line: t, character: i.getLineLength(t) },
                          direction: "forward",
                        },
                      ]),
                        e.focus({ preventScroll: !0 }))
                    },
                  },
                ]),
              c = await (0, eR.KV)(iG, {
                cwd: null == iv ? null : (0, en.DIv)(iv),
                hostId: ix,
                line: nc.current ?? iR,
                path: iy,
              })
            return c.length > 0 ? [...d, { id: "file-actions-separator", type: "separator" }, ...c] : d
          }),
          (il[311] = iv),
          (il[312] = nj.isReadOnly),
          (il[313] = iy),
          (il[314] = nJ),
          (il[315] = ix),
          (il[316] = iR),
          (il[317] = iG),
          (il[318] = t$))
        : (t$ = il[318])
      let lX = t$,
        lJ = null
      if (null != nj.loadError && null == nj.file) {
        let e
        ;(il[319] !== nj.loadError
          ? ((e = (0, n.jsx)(ey.c, { error: nj.loadError })), (il[319] = nj.loadError), (il[320] = e))
          : (e = il[320]),
          (lJ = e))
      } else if (null != n6) {
        let e,
          t,
          i,
          l,
          o,
          r = iz && null == lT,
          a = null == lT,
          d = n6.file.contents
        il[321] !== iy ? ((e = (0, tl.c)(iy)), (il[321] = iy), (il[322] = e)) : (e = il[322])
        let c = lZ ?? iv ?? ""
        ;(il[323] !== iy || il[324] !== c
          ? ((t = (0, to.b0)(c, iy)), (il[323] = iy), (il[324] = c), (il[325] = t))
          : (t = il[325]),
          il[326] !== n6.file.contents || il[327] !== ix || il[328] !== lZ || il[329] !== t || il[330] !== e
            ? ((i = { contents: d, hostId: ix, languageId: e, path: t, workspaceRoot: lZ }),
              (il[326] = n6.file.contents),
              (il[327] = ix),
              (il[328] = lZ),
              (il[329] = t),
              (il[330] = e),
              (il[331] = i))
            : (i = il[331]),
          il[332] !== lT ||
          il[333] !== lw ||
          il[334] !== ls ||
          !1 !== il[335] ||
          il[336] !== nB.isSwitching ||
          il[337] !== iQ ||
          il[338] !== iZ ||
          il[339] !== nn ||
          il[340] !== nj.file?.contents ||
          il[341] !== nj.isReadOnly ||
          il[342] !== nj.isSelectionEditPending ||
          il[343] !== lQ ||
          il[344] !== nd ||
          il[345] !== nJ ||
          il[346] !== l$ ||
          il[347] !== n4 ||
          il[348] !== lW ||
          il[349] !== lR ||
          il[350] !== nZ ||
          il[351] !== n5 ||
          il[352] !== lK ||
          il[353] !== iG ||
          il[354] !== na ||
          il[355] !== iB ||
          il[356] !== i7 ||
          il[357] !== iY
            ? ((l = (e) =>
                (0, n.jsx)(s.eo, {
                  createEditor: tb,
                  children: (0, n.jsx)("div", {
                    ref: null != lT || nj.isReadOnly ? void 0 : ls,
                    className: "h-full",
                    "aria-busy": nj.isSelectionEditPending,
                    "data-codex-escape-boundary": void 0,
                    "data-pierre-editor-surface": nj.isReadOnly ? void 0 : "",
                    onBeforeInputCapture: lR,
                    onCompositionEndCapture: lI,
                    onCutCapture: lR,
                    onKeyDownCapture: (e) => {
                      nJ()
                      let t = e.key.toLowerCase()
                      ;("Tab" === e.key || ((e.metaKey || e.ctrlKey) && ("y" === t || "z" === t))) && lI(e)
                    },
                    onBlurCapture: () => {},
                    onPointerDownCapture: () => {},
                    onPasteCapture: lR,
                    children: (0, n.jsx)(Q, {
                      ref: lw,
                      className: (0, J.A)("h-full overflow-auto pe-4", ty),
                      containerRef: no,
                      disableWorkerPool: !0,
                      editorOptions: {
                        renderSearchPanel: (e, t) => ((0, ea.SY)(iG), iG.set(tg, nd), na.render(e, t)),
                        enabledSelectionAction: !0,
                        renderSelectionAction: n5,
                        onAttach: (e) => {
                          ;(lK(e), l$())
                        },
                      },
                      onItemEditChange: (e) => n4(e.file, e.editor.canRedo, e.editor.canUndo),
                      onItemEditComplete: (e) => {
                        if (nB.isSwitching) return "reject"
                        let t = "file" in e ? e.file : e.newFile
                        return null == t ? "reject" : (nO.current?.completeEdit(t) ?? "reject")
                      },
                      onScroll: (e) => {
                        nw.current = e
                      },
                      options: {
                        ...lQ,
                        ...e.fileOptions,
                        diffStyle: "split" === iQ ? "split" : "unified",
                        expandUnchanged: !0,
                        diffIndicators: "symbols" === iZ ? "classic" : "bars",
                        lineDiffType: iY ? "word-alt" : "none",
                        itemMetrics: { lineHeight: nn, spacing: 0 },
                        layout: { gap: 0, paddingBottom: 16, paddingTop: 0 },
                        onPostRender: lW,
                        useTokenTransformer: !nj.isReadOnly,
                      },
                      renderAnnotation: nZ,
                    }),
                  }),
                })),
              (il[332] = lT),
              (il[333] = lw),
              (il[334] = ls),
              (il[335] = !1),
              (il[336] = nB.isSwitching),
              (il[337] = iQ),
              (il[338] = iZ),
              (il[339] = nn),
              (il[340] = nj.file?.contents),
              (il[341] = nj.isReadOnly),
              (il[342] = nj.isSelectionEditPending),
              (il[343] = lQ),
              (il[344] = nd),
              (il[345] = nJ),
              (il[346] = l$),
              (il[347] = n4),
              (il[348] = lW),
              (il[349] = lR),
              (il[350] = nZ),
              (il[351] = n5),
              (il[352] = lK),
              (il[353] = iG),
              (il[354] = na),
              (il[355] = iB),
              (il[356] = i7),
              (il[357] = iY),
              (il[358] = l))
            : (l = il[358]),
          il[359] !== lX ||
          il[360] !== iP ||
          il[361] !== iO ||
          il[362] !== i ||
          il[363] !== l ||
          il[364] !== r ||
          il[365] !== a
            ? ((o = (0, n.jsx)(e2.k, {
                getCommonContextMenuItems: lX,
                isActive: r,
                keepDocumentOpen: a,
                languageFile: i,
                onOpenLocation: iP,
                panelId: iO,
                withContextMenu: !0,
                children: l,
              })),
              (il[359] = lX),
              (il[360] = iP),
              (il[361] = iO),
              (il[362] = i),
              (il[363] = l),
              (il[364] = r),
              (il[365] = a),
              (il[366] = o))
            : (o = il[366]),
          (lJ = o))
      }
      il[367] === Symbol.for("react.memo_cache_sentinel")
        ? ((tW = (e) => {
            nO.current?.updateContent(e)
          }),
          (il[367] = tW))
        : (tW = il[367])
      let l0 = (0, ts.K)(tW)
      il[368] === Symbol.for("react.memo_cache_sentinel")
        ? ((tq = () => nO.current?.saveUntilClean() ?? Promise.resolve(!1)), (il[368] = tq))
        : (tq = il[368])
      let l1 = (0, ts.K)(tq)
      il[369] !== n7 || il[370] !== nj.isReadOnly || il[371] !== iu || il[372] !== l1 || il[373] !== l0
        ? ((tG = null == n7 || nj.isReadOnly ? null : iu?.({ content: n7, onChange: l0, onSave: l1 })),
          (il[369] = n7),
          (il[370] = nj.isReadOnly),
          (il[371] = iu),
          (il[372] = l1),
          (il[373] = l0),
          (il[374] = tG))
        : (tG = il[374])
      let l2 = tG
      il[375] === Symbol.for("react.memo_cache_sentinel")
        ? ((tQ = (e) => {
            null != nP.current &&
              e.relatedTarget instanceof HTMLInputElement &&
              e.relatedTarget === nA.current &&
              e.nativeEvent.composedPath().some(tM) &&
              e.relatedTarget.focus({ preventScroll: !0 })
          }),
          (il[375] = tQ))
        : (tQ = il[375])
      let l3 = null == iF ? void 0 : lx
      ;(il[376] !== lT ||
      il[377] !== n0 ||
      il[378] !== nK ||
      il[379] !== l2 ||
      il[380] !== nj.isReadOnly ||
      il[381] !== n2 ||
      il[382] !== iV ||
      il[383] !== lj
        ? ((tY =
            null == iV || "ready" !== nK || nj.isReadOnly || null != lT || null != l2
              ? null
              : (0, W.createPortal)(
                  (0, n.jsx)(eB, {
                    ...n0,
                    onNavigate: (e) => {
                      let t = n2()?.[e]
                      null != t && lj(t)
                    },
                  }),
                  iV,
                )),
          (il[376] = lT),
          (il[377] = n0),
          (il[378] = nK),
          (il[379] = l2),
          (il[380] = nj.isReadOnly),
          (il[381] = n2),
          (il[382] = iV),
          (il[383] = lj),
          (il[384] = tY))
        : (tY = il[384]),
        il[385] !== nj.file || il[386] !== nj.loadError
          ? ((tZ =
              null != nj.loadError && null != nj.file ? (0, n.jsx)(ey.c, { error: nj.loadError, isReload: !0 }) : null),
            (il[385] = nj.file),
            (il[386] = nj.loadError),
            (il[387] = tZ))
          : (tZ = il[387]),
        il[388] !== nj.isReadOnly
          ? ((tX = nj.isReadOnly
              ? (0, n.jsx)("div", {
                  className: "shrink-0 px-4 pt-3",
                  children: (0, n.jsx)("div", {
                    className: "flex items-center rounded-lg border border-default px-3 py-2 text-sm text-secondary",
                    children: (0, n.jsx)(eo.A, {
                      id: "textFileEditor.largeFileReadOnly",
                      defaultMessage: "Large file opened read-only",
                      description: "Banner shown when a text file is too large for in-place editing",
                    }),
                  }),
                })
              : null),
            (il[388] = nj.isReadOnly),
            (il[389] = tX))
          : (tX = il[389]),
        il[390] !== nK
          ? ((tJ =
              "too-large" === nK || "too-complex" === nK
                ? (0, n.jsx)("div", {
                    className: "shrink-0 px-4 pt-3",
                    children: (0, n.jsx)("div", {
                      className: "flex items-center rounded-lg border border-default px-3 py-2 text-sm text-secondary",
                      role: "status",
                      children: (0, n.jsx)(eo.A, {
                        id: "files.diff.highlightsUnavailable",
                        defaultMessage: "This comparison is too large to highlight",
                        description:
                          "The file remains editable but its changes cannot be highlighted within the editor's processing limit",
                      }),
                    }),
                  })
                : null),
            (il[390] = nK),
            (il[391] = tJ))
          : (tJ = il[391]),
        il[392] !== lT ||
        il[393] !== i6 ||
        il[394] !== lD ||
        il[395] !== lB ||
        il[396] !== lU.name ||
        il[397] !== l2 ||
        il[398] !== nn ||
        il[399] !== nj.file ||
        il[400] !== nj.fileRevision ||
        il[401] !== nj.isReadOnly ||
        il[402] !== lO ||
        il[403] !== lM ||
        il[404] !== l_ ||
        il[405] !== lN
          ? ((t0 =
              null != l2 || null != lT || null == nj.file || nj.isReadOnly
                ? null
                : (0, n.jsx)(eI.G, {
                    alignWithPaddedPierreFile: !0,
                    appearance: "pierre",
                    getKeyboardOwner: lA,
                    getLineCount: lM,
                    inputRef: nA,
                    onCancelPreview: lB,
                    onGoToLine: l_,
                    onOpen: lD,
                    onPreviewLine: lN,
                    pierreThemeKey: `${i6}:${lU.name}:${null == nj.file ? "loading" : "loaded"}:${nj.fileRevision}:${nn}`,
                    restoreFocus: lO,
                  })),
            (il[392] = lT),
            (il[393] = i6),
            (il[394] = lD),
            (il[395] = lB),
            (il[396] = lU.name),
            (il[397] = l2),
            (il[398] = nn),
            (il[399] = nj.file),
            (il[400] = nj.fileRevision),
            (il[401] = nj.isReadOnly),
            (il[402] = lO),
            (il[403] = lM),
            (il[404] = l_),
            (il[405] = lN),
            (il[406] = t0))
          : (t0 = il[406]),
        il[407] !== t0
          ? ((t1 = (0, n.jsx)(n.Fragment, { children: t0 })), (il[407] = t0), (il[408] = t1))
          : (t1 = il[408]),
        il[409] !== lT ||
        !1 !== il[410] ||
        il[411] !== l2 ||
        il[412] !== nF.canRedo ||
        il[413] !== nF.canUndo ||
        il[414] !== nj.file ||
        il[415] !== nJ ||
        il[416] !== lk ||
        il[417] !== iG ||
        il[418] !== iB ||
        il[419] !== h ||
        il[420] !== i7
          ? ((t2 =
              null == l2 && null == lT && null != nj.file
                ? (0, n.jsx)(ev.A, {
                    canRedo: lk && nF.canRedo,
                    canUndo: lk && nF.canUndo,
                    hasSaveError: !1,
                    isSaving: !1,
                    onRedo: () => nJ()?.redo(),
                    onToggleVim: void 0,
                    onUndo: () => nJ()?.undo(),
                    vimMode: h,
                  })
                : null),
            (il[409] = lT),
            (il[410] = !1),
            (il[411] = l2),
            (il[412] = nF.canRedo),
            (il[413] = nF.canUndo),
            (il[414] = nj.file),
            (il[415] = nJ),
            (il[416] = lk),
            (il[417] = iG),
            (il[418] = iB),
            (il[419] = h),
            (il[420] = i7),
            (il[421] = t2))
          : (t2 = il[421]))
      let l4 = null != lT && "pointer-events-none opacity-0"
      il[422] !== l4 ? ((t3 = (0, J.A)("h-full", l4)), (il[422] = l4), (il[423] = t3)) : (t3 = il[423])
      let l5 = null != lT
      ;(il[424] === Symbol.for("react.memo_cache_sentinel")
        ? ((t4 = (e) => {
            nc.current = (0, eh.j)(e.nativeEvent.composedPath())
          }),
          (il[424] = t4))
        : (t4 = il[424]),
        il[425] !== lT || il[426] !== lO || il[427] !== iz || il[428] !== na
          ? ((t5 = iz && null == lT ? (0, n.jsx)(tp, { panel: na, restoreFocus: lO }) : null),
            (il[425] = lT),
            (il[426] = lO),
            (il[427] = iz),
            (il[428] = na),
            (il[429] = t5))
          : (t5 = il[429]))
      let l7 = l2 ?? lJ
      return (
        il[430] !== lT ||
        il[431] !== l2 ||
        il[432] !== nn ||
        il[433] !== nj.loadError ||
        il[434] !== nI ||
        il[435] !== iz
          ? ((t7 =
              iz && null == lT && null == l2 && null == nj.loadError && !nI
                ? (0, n.jsx)("div", {
                    className: (0, J.A)("absolute inset-0 bg-surface", ty),
                    children: (0, n.jsx)(eC.Q, { lineHeight: nn }),
                  })
                : null),
            (il[430] = lT),
            (il[431] = l2),
            (il[432] = nn),
            (il[433] = nj.loadError),
            (il[434] = nI),
            (il[435] = iz),
            (il[436] = t7))
          : (t7 = il[436]),
        il[437] !== t3 || il[438] !== l5 || il[439] !== t5 || il[440] !== l7 || il[441] !== t7
          ? ((t8 = (0, n.jsxs)("div", { className: t3, inert: l5, onContextMenuCapture: t4, children: [t5, l7, t7] })),
            (il[437] = t3),
            (il[438] = l5),
            (il[439] = t5),
            (il[440] = l7),
            (il[441] = t7),
            (il[442] = t8))
          : (t8 = il[442]),
        il[443] !== lX || il[444] !== t8
          ? ((t6 = (0, n.jsx)(ed.t, { getItems: lX, children: t8 })), (il[443] = lX), (il[444] = t8), (il[445] = t6))
          : (t6 = il[445]),
        il[446] !== lT || il[447] !== lV || il[448] !== lz
          ? ((t9 =
              null == lT
                ? null
                : (0, n.jsx)("div", {
                    className: "absolute inset-0",
                    children: (0, n.jsx)(ex.V, {
                      canEdit: !lT.isReadOnly,
                      newFile: lT.newFile,
                      oldFile: lT.oldFile,
                      onAction: lz,
                      onViewportReady: lV,
                    }),
                  })),
            (il[446] = lT),
            (il[447] = lV),
            (il[448] = lz),
            (il[449] = t9))
          : (t9 = il[449]),
        il[450] !== ih || il[451] !== nj.file
          ? ((ie =
              null == ih || null == nj.file
                ? null
                : (0, n.jsx)("div", { className: "absolute top-2 right-4 z-10 flex gap-1", children: ih })),
            (il[450] = ih),
            (il[451] = nj.file),
            (il[452] = ie))
          : (ie = il[452]),
        il[453] !== t1 || il[454] !== t2 || il[455] !== t6 || il[456] !== t9 || il[457] !== ie
          ? ((it = (0, n.jsxs)("div", {
              className: "relative min-h-0 flex-1 overflow-hidden",
              children: [t1, t2, t6, t9, ie],
            })),
            (il[453] = t1),
            (il[454] = t2),
            (il[455] = t6),
            (il[456] = t9),
            (il[457] = ie),
            (il[458] = it))
          : (it = il[458]),
        il[459] !== lF ||
        il[460] !== nH ||
        il[461] !== l3 ||
        il[462] !== tY ||
        il[463] !== tZ ||
        il[464] !== tX ||
        il[465] !== tJ ||
        il[466] !== it
          ? ((ii = (0, n.jsxs)("div", {
              ref: nr,
              className: "flex min-h-0 min-w-0 flex-1 flex-col",
              onFocusCapture: tQ,
              onKeyDownCapture: lF,
              onPointerDownCapture: lF,
              onScrollEndCapture: l3,
              onWheelCapture: lF,
              children: [nH, tY, tZ, tX, tJ, it],
            })),
            (il[459] = lF),
            (il[460] = nH),
            (il[461] = l3),
            (il[462] = tY),
            (il[463] = tZ),
            (il[464] = tX),
            (il[465] = tJ),
            (il[466] = it),
            (il[467] = ii))
          : (ii = il[467]),
        ii
      )
    }
    function tb(e, t, i) {
      return new o.K(e, t, i)
    }
    function tC(e) {
      return "change" === e.type
    }
    function tE(e) {
      return e.hunkContent
    }
    function tI(e) {
      return "change" === e.type
    }
    function tR(e) {
      return e.hunkContent
    }
    function tT() {
      return new eq()
    }
    function tk() {
      return new tv()
    }
    function tM(e) {
      return e instanceof HTMLElement && e.isContentEditable && null != e.dataset.content
    }
  },
  JEFL(e, t, i) {
    var n = i("ABep"),
      l = i("QosV"),
      o = i("MwZW"),
      s = i("zd8w"),
      r = i("Wf1j"),
      a = i("oyxz"),
      d = i("iqo5"),
      c = i("Sm6l"),
      h = i("jqmc"),
      u = i("UxN3"),
      f = i("OFUt"),
      p = i("mN6P")
    i.d(
      t,
      {},
      {
        q: function (e) {
          let t,
            i,
            m,
            g,
            v,
            y,
            x = (0, l.c)(56),
            {
              conversationTerminology: S,
              onAddSelectedText: w,
              onStartFileAnnotation: b,
              onDismissFileAnnotation: C,
              onCommentSelectedText: E,
              onEditModeChange: I,
              onEditSelectedText: R,
              onMoreDetails: T,
              onOpenSideChat: k,
              resume: M,
              selectedText: A,
            } = e,
            P = void 0 === S ? "task" : S,
            O = (0, r.A)(),
            [j, L] = (0, s.useState)(M?.mode === "edit" ? M.instruction : ""),
            [F, D] = (0, s.useState)(M?.mode ?? "actions"),
            [H, _] = (0, s.useState)(null)
          if (null != H) {
            let e, t, i
            return (
              x[0] !== C
                ? ((e = () => C?.(!1)), (t = () => C?.(!0)), (x[0] = C), (x[1] = e), (x[2] = t))
                : ((e = x[1]), (t = x[2])),
              x[3] !== H.rect || x[4] !== H.submit || x[5] !== e || x[6] !== t
                ? ((i = (0, n.jsx)(d.r, { entryRect: H.rect, onCancel: e, onEscape: t, onSubmit: H.submit })),
                  (x[3] = H.rect),
                  (x[4] = H.submit),
                  (x[5] = e),
                  (x[6] = t),
                  (x[7] = i))
                : (i = x[7]),
              i
            )
          }
          if ("pending" === F) return null
          if ("edit" === F && null != R) {
            let e, t, i, l, s, r, a, d, h, p
            return (
              x[8] !== I
                ? ((e = (e) => {
                    ;(e.stopPropagation(), "Escape" === e.key && (e.preventDefault(), I?.(!1), D("actions-focused")))
                  }),
                  (x[8] = I),
                  (x[9] = e))
                : (e = x[9]),
              x[10] !== j || x[11] !== I || x[12] !== R
                ? ((t = (e) => {
                    ;(e.preventDefault(),
                      0 !== j.trim().length &&
                        (D("pending"),
                        R(j).then((e) => {
                          "retry" === e && (I?.(!1), D("actions-focused"))
                        })))
                  }),
                  (x[10] = j),
                  (x[11] = I),
                  (x[12] = R),
                  (x[13] = t))
                : (t = x[13]),
              x[14] !== O
                ? ((i = O.formatMessage({
                    id: "selectedTextOverlay.editInput",
                    defaultMessage: "Edit instruction",
                    description: "Accessible label for an instruction that edits selected text",
                  })),
                  (x[14] = O),
                  (x[15] = i))
                : (i = x[15]),
              x[16] !== O
                ? ((l = O.formatMessage({
                    id: "selectedTextOverlay.editPlaceholder",
                    defaultMessage: "Describe the edit…",
                    description: "Placeholder for an instruction that edits selected text",
                  })),
                  (x[16] = O),
                  (x[17] = l))
                : (l = x[17]),
              x[18] === Symbol.for("react.memo_cache_sentinel")
                ? ((s = (e) => {
                    L(e.target.value)
                  }),
                  (x[18] = s))
                : (s = x[18]),
              x[19] !== j || x[20] !== i || x[21] !== l
                ? ((r = (0, n.jsx)("input", {
                    "aria-label": i,
                    autoComplete: "off",
                    autoFocus: !0,
                    className:
                      "min-w-0 flex-1 bg-transparent text-sm text-default outline-none placeholder:text-codex-description",
                    placeholder: l,
                    required: !0,
                    value: j,
                    onChange: s,
                  })),
                  (x[19] = j),
                  (x[20] = i),
                  (x[21] = l),
                  (x[22] = r))
                : (r = x[22]),
              x[23] !== O
                ? ((a = O.formatMessage({
                    id: "selectedTextOverlay.editSubmit",
                    defaultMessage: "Submit edit instruction",
                    description: "Accessible label for submitting an instruction to edit selected text",
                  })),
                  (x[23] = O),
                  (x[24] = a))
                : (a = x[24]),
              x[25] === Symbol.for("react.memo_cache_sentinel")
                ? ((d = (0, n.jsx)(u.bF, {
                    "aria-hidden": !0,
                    asset16: o.l,
                    legacyIcon: f.A,
                    legacyClassName: "icon-2xs",
                  })),
                  (x[25] = d))
                : (d = x[25]),
              x[26] !== a
                ? ((h = (0, n.jsx)(c.$, {
                    "aria-label": a,
                    color: "primary",
                    size: "composerSm",
                    type: "submit",
                    uniform: !0,
                    children: d,
                  })),
                  (x[26] = a),
                  (x[27] = h))
                : (h = x[27]),
              x[28] !== h || x[29] !== e || x[30] !== t || x[31] !== r
                ? ((p = (0, n.jsxs)("form", {
                    className:
                      "pointer-events-auto flex w-[27rem] max-w-full items-center gap-1.5 rounded-full border border-default bg-surface p-1 ps-3.5 font-sans shadow-lg",
                    onKeyDown: e,
                    onSubmit: t,
                    children: [r, h],
                  })),
                  (x[28] = h),
                  (x[29] = e),
                  (x[30] = t),
                  (x[31] = r),
                  (x[32] = p))
                : (p = x[32]),
              p
            )
          }
          return (
            x[33] !== P || x[34] !== w || x[35] !== b || x[36] !== A
              ? ((t =
                  null != w || null != b
                    ? (0, n.jsx)(h.Yy, {
                        onClick: (e) => {
                          null != b
                            ? _({
                                rect: (e.currentTarget.parentElement ?? e.currentTarget).getBoundingClientRect(),
                                submit: b(),
                              })
                            : (window.getSelection()?.removeAllRanges(), w?.(A))
                        },
                        children:
                          "chat" === P
                            ? (0, n.jsx)(a.A, {
                                id: "selectedTextOverlay.addToChat",
                                defaultMessage: "Ask ChatGPT",
                                description:
                                  "Button label for adding currently selected text from an overlay anchored to that selection to a ChatGPT chat",
                              })
                            : (0, n.jsx)(a.A, {
                                id: "selectedTextOverlay.addToCodex",
                                defaultMessage: "Add to chat",
                                description:
                                  "Button label for adding currently selected text from an overlay anchored to that selection to the chat",
                              }),
                      })
                    : null),
                (x[33] = P),
                (x[34] = w),
                (x[35] = b),
                (x[36] = A),
                (x[37] = t))
              : (t = x[37]),
            x[38] !== T || x[39] !== A
              ? ((i =
                  null != T
                    ? (0, n.jsx)(h.Yy, {
                        onClick: () => {
                          ;(window.getSelection()?.removeAllRanges(), T(A))
                        },
                        children: (0, n.jsx)(a.A, {
                          id: "selectedTextOverlay.moreDetails",
                          defaultMessage: "More details",
                          description: "Button label for asking for more details about the currently selected text",
                        }),
                      })
                    : null),
                (x[38] = T),
                (x[39] = A),
                (x[40] = i))
              : (i = x[40]),
            x[41] !== k || x[42] !== A
              ? ((m =
                  null != k
                    ? (0, n.jsx)(h.Yy, {
                        onClick: (e) => {
                          ;(window.getSelection()?.removeAllRanges(), k(A, (0, p.j)(e)))
                        },
                        children: (0, n.jsx)(a.A, {
                          id: "selectedTextOverlay.askInSideChat",
                          defaultMessage: "Ask in side chat",
                          description: "Button label for asking about currently selected text in a side chat",
                        }),
                      })
                    : null),
                (x[41] = k),
                (x[42] = A),
                (x[43] = m))
              : (m = x[43]),
            x[44] !== E
              ? ((g =
                  null != E
                    ? (0, n.jsx)(h.Yy, {
                        onClick: () => {
                          ;(window.getSelection()?.removeAllRanges(), E())
                        },
                        children: (0, n.jsx)(a.A, {
                          id: "selectedTextOverlay.comment",
                          defaultMessage: "Comment",
                          description: "Button label for commenting on the currently selected text",
                        }),
                      })
                    : null),
                (x[44] = E),
                (x[45] = g))
              : (g = x[45]),
            x[46] !== F || x[47] !== I || x[48] !== R
              ? ((v =
                  null != R
                    ? (0, n.jsx)(h.Yy, {
                        autoFocus: "actions-focused" === F,
                        onClick: () => {
                          ;(I?.(!0), D("edit"))
                        },
                        children: (0, n.jsx)(a.A, {
                          id: "selectedTextOverlay.edit",
                          defaultMessage: "Edit",
                          description: "Button label for editing currently selected text with a model",
                        }),
                      })
                    : null),
                (x[46] = F),
                (x[47] = I),
                (x[48] = R),
                (x[49] = v))
              : (v = x[49]),
            x[50] !== t || x[51] !== i || x[52] !== m || x[53] !== g || x[54] !== v
              ? ((y = (0, n.jsxs)(h.iU, { children: [t, i, m, g, v] })),
                (x[50] = t),
                (x[51] = i),
                (x[52] = m),
                (x[53] = g),
                (x[54] = v),
                (x[55] = y))
              : (y = x[55]),
            y
          )
        },
      },
    )
  },
  gUx2(e, t, i) {
    var n = i("iRMi"),
      l = i("bWX0")
    let o = new Set([
        "bash",
        "bat",
        "bazel",
        "bzl",
        "c",
        "c++",
        "c++m",
        "cc",
        "cjs",
        "cmd",
        "cpp",
        "cs",
        "css",
        "csx",
        "cts",
        "go",
        "gql",
        "graphql",
        "h",
        "h++",
        "hh",
        "hpp",
        "htm",
        "html",
        "hxx",
        "ini",
        "java",
        "js",
        "json",
        "json5",
        "jsonc",
        "jsonl",
        "jsx",
        "kt",
        "kts",
        "less",
        "lua",
        "markdown",
        "md",
        "mdx",
        "mjs",
        "mts",
        "ndjson",
        "php",
        "php4",
        "php5",
        "phtml",
        "pl",
        "ps1",
        "psd1",
        "psm1",
        "py",
        "pyi",
        "pyw",
        "r",
        "rb",
        "rs",
        "sass",
        "scss",
        "sh",
        "sql",
        "swift",
        "tex",
        "toml",
        "ts",
        "tsx",
        "txt",
        "vue",
        "webmanifest",
        "xhtml",
        "xml",
        "yaml",
        "yml",
        "zsh",
      ]),
      s = new WeakMap()
    function r(e) {
      let t = (0, l.Zo)(e)
      return null == t ? "none" : o.has(t) ? t : "other"
    }
    i.d(
      t,
      {},
      {
        W: function (e, t) {
          e.logProductEvent(n.CodexSourceFileViewed, { fileExtension: r(t) })
        },
        w: function (e, { hostId: t, path: i }) {
          let l = s.get(e)
          null == l && ((l = new Map()), s.set(e, l))
          let o = `${t}\0${i}`,
            a = l.get(o)
          ;(null != a && clearTimeout(a),
            l.set(
              o,
              setTimeout(() => {
                ;(l.delete(o), e.logProductEvent(n.CodexSourceFileEdited, { fileExtension: r(i) }))
              }, 2e3),
            ))
        },
      },
    )
  },
  DjVD(e, t, i) {
    function n(e) {
      return { baseContent: e, kind: "ready" }
    }
    function l(e, t) {
      return "ready" === e.kind
        ? null
        : t === e.baseContent
          ? { newContent: e.diskContent, oldContent: t }
          : { newContent: t, oldContent: e.diskContent }
    }
    i.d(
      t,
      {},
      {
        EI: function ({ action: e, content: t, document: i }) {
          let o = l(i, t)
          return null == o || "ready" === i.kind
            ? null
            : { content: "reject" === e ? o.oldContent : o.newContent, document: n(i.diskContent) }
        },
        Lm: function ({ document: e, diskContent: t, localContent: i }) {
          return t === e.baseContent
            ? "ready" === e.kind
              ? e
              : n(e.baseContent)
            : i === t
              ? n(t)
              : { baseContent: e.baseContent, diskContent: t, kind: "conflict" }
        },
        _d: l,
        pD: 0xa00000,
        v5: n,
      },
    )
  },
  VtLY(e, t, i) {
    var n = i("zTeN"),
      l = i("DBCl"),
      o = i("tl5a"),
      s = i("XGJX"),
      r = i("uNQ5"),
      a = i("GaA7"),
      d = i("q77y"),
      c = i("OWtl"),
      h = i("gTKF"),
      u = i("yI91"),
      f = i("YJq6")
    let p = (0, n.i1)(
      c.u,
      (e, { get: t }) => {
        if (null != e) {
          let i = "string" == typeof e ? e : e.threadId,
            n =
              "string" == typeof e
                ? t(h.threadExecutorTargetByThread$, { kind: "app-server", conversationId: e })
                : { hostId: l.iwv, ...e }
          if (n?.hostId === l.iwv)
            return {
              environmentId: n.environmentId,
              threadId: i ?? void 0,
              executorAccess: t(h.threadFileRequestContext$, { conversationId: i, environmentId: n.environmentId })
                .executorAccess,
              requestClient: t(o.nK, l.iwv),
            }
        }
      },
      {
        isEqual: (e, t) =>
          e?.environmentId === t?.environmentId &&
          e?.threadId === t?.threadId &&
          e?.executorAccess === t?.executorAccess &&
          e?.requestClient === t?.requestClient,
      },
    )
    i.d(
      t,
      {},
      {
        Gu: async function ({
          cloudFileAccess: e,
          filePath: t,
          hostId: i,
          maximumSizeBytes: n,
          pendingSaveSnapshot: o,
          previousSnapshot: c,
          requireTextContent: h = !1,
          signal: p,
        }) {
          if (null != e) {
            let { environmentId: i, requestClient: o, executorAccess: s } = e
            p?.throwIfAborted()
            let r = { executorAccess: s },
              a = { environmentId: i, path: t },
              d = await o.sendRequest("fs/getMetadata", a, r)
            p?.throwIfAborted()
            let { dataBase64: c } = await o.sendRequest("fs/readFile", a, r)
            p?.throwIfAborted()
            let f = (0, u.K)(c)
            if (null != n && f.byteLength > n) throw Error("File is too large")
            if (h && (await (0, l.PCY)(f.subarray(0, l.VJf))) !== "text") throw Error("File is not text")
            return { content: new TextDecoder().decode(f), mtimeMs: d.modifiedAtMs, sizeBytes: f.byteLength }
          }
          let {
            contentKind: m,
            mtimeMs: g,
            sizeBytes: v,
          } = await (0, s.Ct)(
            {
              contentSampleByteLimit: h ? l.VJf : void 0,
              contentSampleMaxFileBytes: h ? n : void 0,
              hostId: i,
              path: t,
            },
            p,
          )
          if (null != n && null != v && v > n) throw Error("File is too large")
          if (h && "text" !== m) throw Error("File is not text")
          if (null != a.appServices.workspaceFiles.saveText) {
            let e = await (0, d.P)(
              a.appServices.workspaceFiles.read({ hostId: i, path: t, representation: "blob", maxBytes: n }),
              p,
            )
            if (!("blob" in e)) throw Error("Expected file bytes")
            let l = (0, u.K)(e.blob)
            if (null != n && l.byteLength > n) throw Error("File is too large")
            let s = [c, o].find(
                (t) => t?.hasUtf8Bom != null && (0, f.vO)(`${t.hasUtf8Bom ? "\uFEFF" : ""}${t.content}`) === e.blob,
              ),
              r = s?.hasUtf8Bom ?? (239 === l[0] && 187 === l[1] && 191 === l[2]),
              h = new TextDecoder("utf-8", { fatal: !0, ignoreBOM: !0 }).decode(l)
            return { content: r ? h.slice(1) : h, hasUtf8Bom: r, mtimeMs: g ?? null, sizeBytes: l.byteLength }
          }
          let { contents: y } = await (0, r.tA)({ hostId: i, path: t }, p),
            x = null == n && null != v ? v : new Blob([y]).size
          if (null != n && x > n) throw Error("File is too large")
          return { content: y, mtimeMs: g ?? null, sizeBytes: x }
        },
        r7: async function ({
          cloudFileAccess: e,
          content: t,
          expectedMtimeMs: i,
          filePath: n,
          hasUtf8Bom: l,
          hostId: o,
        }) {
          if (null != e) {
            let { environmentId: l, requestClient: o, executorAccess: s } = e,
              r = { executorAccess: s },
              a = { environmentId: l, path: n },
              { modifiedAtMs: d } = await o.sendRequest("fs/getMetadata", a, r)
            return d !== i
              ? { mtimeMs: d, outcome: "conflict" }
              : (await o.sendRequest("fs/writeFile", { ...a, dataBase64: (0, f.vO)(t) }, r),
                { mtimeMs: (await o.sendRequest("fs/getMetadata", a, r)).modifiedAtMs, outcome: "saved" })
          }
          let s = a.appServices.workspaceFiles.saveText
          if (null == s) throw Error("Saving text files is not supported by this host")
          return (0, d.P)(s({ content: l ? `\uFEFF${t}` : t, expectedMtimeMs: i, hostId: o, path: n }))
        },
        z2: p,
      },
    )
  },
  WpQI(e, t, i) {
    let n = (0, i("iJY0").a)({
      name: "arrow-down-line-horizontal-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 2.307861, y: 2.141113, width: 11.383789, height: 11.717773 },
        visualBounds: { x: 2.307861, y: 2.141113, width: 11.383789, height: 11.717773 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.307861, y: 2.141113, width: 11.383789, height: 11.717773 },
        center: { x: 7.999756, y: 7.999999 },
        insets: { top: 2.141113, right: 2.30835, bottom: 2.141114, left: 2.307861 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.999756, y: 7.999999 }, foreground: { x: 7.999756, y: 7.999999 } },
      },
      capabilities: ["icon"],
      body: '<path d="M13.1663 12.8081C13.4562 12.8081 13.6917 13.0435 13.6917 13.3335C13.6915 13.6233 13.4561 13.8589 13.1663 13.8589H2.83325C2.54341 13.8589 2.30803 13.6233 2.30786 13.3335C2.30786 13.0435 2.5433 12.8081 2.83325 12.8081H13.1663Z" fill="currentColor"/> <path d="M8.00024 2.14111C8.29004 2.14129 8.52563 2.37667 8.52563 2.6665V8.73096L10.9622 6.29541C11.1671 6.0906 11.4994 6.0906 11.7043 6.29541C11.9092 6.50039 11.9092 6.83261 11.7043 7.0376L8.72485 10.0171C8.32455 10.4172 7.67489 10.4173 7.27466 10.0171L4.29517 7.0376C4.09036 6.83262 4.09036 6.5004 4.29517 6.29541C4.50014 6.09044 4.83232 6.09054 5.03735 6.29541L7.47485 8.73291V2.6665C7.47485 2.37655 7.71029 2.14111 8.00024 2.14111Z" fill="currentColor"/>',
    })
    i.d(t, {}, { R: n })
  },
  StSx(e, t, i) {
    let n = (0, i("iJY0").a)({
      name: "chevron-up-md-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 3.475098, y: 4.946289, width: 9.049805, height: 4.911621 },
        visualBounds: { x: 3.475098, y: 4.946289, width: 9.049805, height: 4.911621 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.475098, y: 4.946289, width: 9.049805, height: 4.911621 },
        center: { x: 8, y: 7.4021 },
        insets: { top: 4.946289, right: 3.475097, bottom: 6.14209, left: 3.475098 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8, y: 7.4021 }, foreground: { x: 8, y: 7.4021 } },
      },
      capabilities: ["icon"],
      body: '<path d="M11.6289 9.70417C11.8339 9.9092 12.166 9.9092 12.3711 9.70417C12.5761 9.49915 12.5761 9.16701 12.3711 8.96199L8.60641 5.19734C8.27129 4.86261 7.72863 4.86261 7.39352 5.19734L3.62887 8.96199C3.42384 9.16701 3.42384 9.49915 3.62887 9.70417C3.83389 9.9092 4.16603 9.9092 4.37105 9.70417L7.99996 6.07527L11.6289 9.70417Z" fill="currentColor"/>',
    })
    i.d(t, {}, { V: n })
  },
}
//# sourceMappingURL=3375.b505140fa7.js.map
