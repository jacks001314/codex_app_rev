export const __rspack_esm_ids = [375488]
export const __webpack_modules__ = {
  JKSp(e, t, n) {
    n.d(t, {}, { Q: { $type: "protobuf_analytics_events.v1.ChatgptWidgetEvent" } })
  },
  ylLY(e, t, n) {
    let l = (0, n("zd8w").createContext)(null)
    n.d(t, {}, { t: l })
  },
  ULZ9(e, t, n) {
    ;(n.d(t, { z: () => r }), n("iYCA"), n("yCBR"))
    var l = n("ABep"),
      a = n("QosV"),
      i = n("ylLY")
    function r(e) {
      let t,
        n,
        r = (0, a.c)(8),
        { children: s, linkComponent: o, allowedWidgetTypes: u, radixPortalContainer: d, hydrationSafe: c } = e,
        p = void 0 === o ? "a" : o,
        g = void 0 === u ? "GA" : u,
        m = void 0 !== c && c
      return (
        r[0] !== g || r[1] !== m || r[2] !== p || r[3] !== d
          ? ((t = { linkComponent: p, allowedWidgetTypes: g, radixPortalContainer: d, hydrationSafe: m }),
            (r[0] = g),
            (r[1] = m),
            (r[2] = p),
            (r[3] = d),
            (r[4] = t))
          : (t = r[4]),
        r[5] !== s || r[6] !== t
          ? ((n = (0, l.jsx)(i.t.Provider, { value: t, children: s })), (r[5] = s), (r[6] = t), (r[7] = n))
          : (n = r[7]),
        n
      )
    }
  },
  sM3V(e, t, n) {
    var l = n("qmMi"),
      a = n("B81s"),
      i = n("OWtl"),
      r = n("tl5a")
    let s = (0, l.i1)(i.u, ({ hostId: e, conversationId: t }, { get: n }) => {
        if (t.startsWith("chatgpt:")) return null
        let l = n(r.zp, { hostId: e, threadId: t })
        return null != l && "notLoaded" !== l.type ? t : null
      }),
      o = (0, l.i1)(i.u, (e, { get: t }) => {
        let { data: n } =
          null == t(s, { hostId: e.hostId, conversationId: e.threadId }) ? t(a.pu, e.hostId) : t(a.Dr, e)
        return n?.data.find((t) => t.name === e.serverName) ?? null
      })
    n.d(t, {}, { n: s, t: o })
  },
  qV5G(e, t, n) {
    var l = n("OiCI"),
      a = n("SPnB")
    ;(n("Ot7V"),
      n.d(
        t,
        {},
        {
          N: function (e, t) {
            return !1
          },
          k: function (e, t, n) {
            let i = t?.redirectAfterNavigation
            if (null != i && i.accountId === e.get(l.vh) && i.userId === e.get(a.o8))
              return "pending" === n ? (i.pendingState ?? i.state) : "success" === n ? i.state : i.failureState
          },
        },
      ))
  },
  IBgA(e, t, n) {
    var l = n("QosV"),
      a = n("irkb"),
      i = n("xSOA"),
      r = n("qmMi"),
      s = n("Qgfj"),
      o = n("Wf1j"),
      u = n("VVkm"),
      d = n("Dgwo"),
      c = n("HUHI"),
      p = n("OiCI"),
      g = n("SGsN"),
      m = n("B81s"),
      f = n("sLlu"),
      h = n("OWtl"),
      y = n("kfGJ"),
      b = n("WFY2")
    let x = (0, s.YK)({
      enableSuccess: { id: "apps.enable.success", defaultMessage: "{appName} app enabled" },
      disableSuccess: { id: "apps.disable.success", defaultMessage: "{appName} app disabled" },
      updateError: { id: "apps.update.error", defaultMessage: "Failed to update app" },
    })
    n.d(
      t,
      {},
      {
        J: function (e) {
          let t,
            n,
            s,
            v,
            A,
            I,
            S,
            w,
            k = (0, l.c)(35),
            j = e?.hostId ?? y.fI,
            C = (0, r.gh)(h.u)
          ;(0, r.Ul)(p.vh)
          let P = (0, a.jE)(),
            _ = (0, f.B)(),
            M = (0, o.A)(),
            E
          k[0] !== j || k[1] !== E ? ((t = (0, c.iC)(j, E)), (k[0] = j), (k[1] = E), (k[2] = t)) : (t = k[2])
          let T = t
          k[3] !== T || k[4] !== j || k[5] !== _
            ? ((n = async () => {
                await Promise.all([
                  _((0, u.T9)(j)),
                  _(T),
                  _([...m.Sn, j]),
                  _([...m.tP, j]),
                  _(m.Kj),
                  _(["user-saved-config"]),
                ])
              }),
              (k[3] = T),
              (k[4] = j),
              (k[5] = _),
              (k[6] = n))
            : (n = k[6])
          let N = n
          ;(k[7] !== j || k[8] !== P || k[9] !== C
            ? ((s = async (e) => {
                let { appId: t, enabled: n } = e,
                  l = await (0, m.dG)(C, P, j)
                if (
                  "okOverridden" ===
                  (
                    await (0, d.V)(C, j).sendRequest("config/batchWrite", {
                      edits: (function ({ appId: e, enabled: t }) {
                        return [{ keyPath: `apps.${e}.enabled`, value: t, mergeStrategy: "upsert" }]
                      })({ appId: t, enabled: n }),
                      filePath: l?.filePath ?? null,
                      expectedVersion: l?.expectedVersion ?? null,
                      reloadUserConfig: !0,
                    })
                  ).status
                )
                  throw Error("App setting is overridden by project configuration")
              }),
              (k[7] = j),
              (k[8] = P),
              (k[9] = C),
              (k[10] = s))
            : (s = k[10]),
            k[11] !== T || k[12] !== P
              ? ((v = async (e) => {
                  let { appId: t, enabled: n } = e
                  await P.cancelQueries({ queryKey: T })
                  let l = P.getQueryData(T)
                  return (
                    l &&
                      P.setQueryData(
                        T,
                        l.map((e) => (e.id !== t || e.isEnabled === n ? e : { ...e, isEnabled: n })),
                      ),
                    { previousApps: l }
                  )
                }),
                (k[11] = T),
                (k[12] = P),
                (k[13] = v))
              : (v = k[13]),
            k[14] !== T || k[15] !== M || k[16] !== _ || k[17] !== P || k[18] !== C
              ? ((A = async (e, t, n) => {
                  let { appId: l, appName: a, enabled: i } = t
                  if (i && n?.previousApps?.find((e) => e.id === l)?.isEnabled === !1) {
                    await _(T)
                    let e = P.getQueryData(T)?.find((e) => e.id === l)
                    if (e?.isEnabled === !1) throw Error("App remains disabled after updating its configuration")
                  }
                  let r = a ?? P.getQueryData(T)?.find((e) => e.id === l)?.name ?? l
                  C.get(g.Id).success(M.formatMessage(i ? x.enableSuccess : x.disableSuccess, { appName: r }))
                }),
                (k[14] = T),
                (k[15] = M),
                (k[16] = _),
                (k[17] = P),
                (k[18] = C),
                (k[19] = A))
              : (A = k[19]),
            k[20] !== T || k[21] !== M || k[22] !== P || k[23] !== C
              ? ((I = (e, t, n) => {
                  ;(b.v.error("Failed to update app enablement", { safe: {}, sensitive: { error: e } }),
                    C.get(g.Id).danger(M.formatMessage(x.updateError), {
                      errorAnalytics: { toastId: "appsAvailability.onError.updateError" },
                    }),
                    n?.previousApps && P.setQueryData(T, n.previousApps))
                }),
                (k[20] = T),
                (k[21] = M),
                (k[22] = P),
                (k[23] = C),
                (k[24] = I))
              : (I = k[24]),
            k[25] !== N || k[26] !== s || k[27] !== v || k[28] !== A || k[29] !== I
              ? ((S = { mutationFn: s, onMutate: v, onSuccess: A, onError: I, onSettled: N }),
                (k[25] = N),
                (k[26] = s),
                (k[27] = v),
                (k[28] = A),
                (k[29] = I),
                (k[30] = S))
              : (S = k[30]))
          let O = (0, i.n)(S),
            U = O.isPending ? (O.variables?.appId ?? null) : null
          return (
            k[31] !== O.isPending || k[32] !== O.mutateAsync || k[33] !== U
              ? ((w = { setAppEnabled: O.mutateAsync, isUpdating: O.isPending, updatingAppId: U }),
                (k[31] = O.isPending),
                (k[32] = O.mutateAsync),
                (k[33] = U),
                (k[34] = w))
              : (w = k[34]),
            w
          )
        },
      },
    )
  },
  PYah(e, t, n) {
    var l = n("Dgwo")
    n.d(
      t,
      {},
      {
        k: async function (e, t, n, a) {
          let { apps: i } = await (0, l.V)(e, t).sendRequest(
            "app/installed",
            { forceRefresh: !0, threadId: n },
            null == a ? void 0 : { threadAccess: a, coalesce: !1 },
          )
          return new Set(i.filter(({ callable: e, enabled: t }) => e && t).map(({ id: e }) => e))
        },
      },
    )
  },
  iCOy(e, t, n) {
    n.d(t, {}, { m: function (e) {} })
  },
  m15V(e, t, n) {
    var l = n("qmMi"),
      a = n("OWtl")
    let i = (0, l.bD)(a.u, (e) => null)
    n.d(t, {}, { v: i })
  },
  z0fI(e, t, n) {
    var l = n("ABep"),
      a = n("QosV"),
      i = n("oyxz"),
      r = n("MM0V"),
      s = n("Wdu7"),
      o = n("hZax")
    function u(e) {
      return "knowledge_file" === e.type
    }
    function d(e) {
      return "profile_picture" === e.type
    }
    function c(e) {
      let t,
        n,
        r,
        s = (0, a.c)(12),
        { file: o, files: u, issues: d } = e
      if (s[0] !== o || s[1] !== u || s[2] !== d) {
        let e
        ;((t = d?.filter(
          (e) => "knowledge_file" === e.resource.type && null != o.file_id && e.resource.id === o.file_id,
        )),
          s[5] !== o || s[6] !== u
            ? ((e = u?.find((e) => e.file_id === o.file_id)), (s[5] = o), (s[6] = u), (s[7] = e))
            : (e = s[7]))
        let l = e
        ;((n =
          t?.find(m)?.resource.name || (l?.file_response_type === "full_file_response" ? l.name : void 0) || o.file_id),
          (s[0] = o),
          (s[1] = u),
          (s[2] = d),
          (s[3] = t),
          (s[4] = n))
      } else ((t = s[3]), (n = s[4]))
      let c = n
      return (
        s[8] !== o || s[9] !== t?.[0]?.message || s[10] !== c
          ? ((r = (0, l.jsx)("li", {
              className: "wrap-anywhere text-default select-text",
              children: c
                ? (0, l.jsx)(i.A, {
                    id: "chatgptConversations.gpts.migration.referenceFileCopyErrorWithFilename",
                    defaultMessage: "<strong>{filename}</strong> \u2014 {message}",
                    values: { filename: c, message: t?.[0]?.message || o.message, strong: g },
                  })
                : (0, l.jsx)(i.A, {
                    id: "chatgptConversations.gpts.migration.unnamedReferenceFileCopyErrorWithLabel",
                    defaultMessage: "<strong>Reference file</strong> \u2014 {message}",
                    values: { message: t?.[0]?.message || o.message, strong: p },
                  }),
            })),
            (s[8] = o),
            (s[9] = t?.[0]?.message),
            (s[10] = c),
            (s[11] = r))
          : (r = s[11]),
        r
      )
    }
    function p(e) {
      return (0, l.jsx)("strong", { children: e })
    }
    function g(e) {
      return (0, l.jsx)("strong", { children: e })
    }
    function m(e) {
      return e.resource.name
    }
    n.d(
      t,
      {},
      {
        Z: function (e) {
          let t,
            n,
            p,
            g,
            m,
            f,
            h = (0, a.c)(23),
            { failedFiles: y, files: b, issues: x, migrationSucceeded: v } = e,
            A = (0, o.Fj)("2513446768")
          h[0] !== A ? ((t = A.get("disable_gpt_updates", !1)), (h[0] = A), (h[1] = t)) : (t = h[1])
          let I = t
          h[2] !== y ? ((n = y.filter(d)), (h[2] = y), (h[3] = n)) : (n = h[3])
          let S = n
          if (h[4] !== y || h[5] !== b || h[6] !== I || h[7] !== x || h[8] !== v || h[9] !== S.length) {
            let e,
              t = y.filter(u)
            if (v) {
              let t
              ;(h[13] === Symbol.for("react.memo_cache_sentinel")
                ? ((t = (0, l.jsx)(i.A, {
                    id: "chatgptConversations.gpts.migration.referenceCopyWarningAfterSuccess",
                    defaultMessage:
                      "Your plugin was created without these files. Open your plugin and choose Edit plugin to add them.",
                  })),
                  (h[13] = t))
                : (t = h[13]),
                (e = t))
            } else if (I) {
              let t
              ;(h[14] === Symbol.for("react.memo_cache_sentinel")
                ? ((t = (0, l.jsx)(i.A, {
                    id: "chatgptConversations.gpts.migration.referenceCopyFailedReadonlyDescription",
                    defaultMessage: "Your plugin wasn\u2019t created. Try again later.",
                  })),
                  (h[14] = t))
                : (t = h[14]),
                (e = t))
            } else {
              let t
              ;(h[15] === Symbol.for("react.memo_cache_sentinel")
                ? ((t = (0, l.jsx)(i.A, {
                    id: "chatgptConversations.gpts.migration.referenceCopyFailedDescription",
                    defaultMessage:
                      "Your plugin wasn\u2019t created. Try again, or fix these files and republish the GPT.",
                  })),
                  (h[15] = t))
                : (t = h[15]),
                (e = t))
            }
            ;((p = "flex flex-col gap-3 text-start text-sm"),
              h[16] !== v || h[17] !== S.length
                ? ((g =
                    S.length > 0
                      ? (0, l.jsx)(r.l, {
                          type: "warning",
                          variant: "callout",
                          layout: "vertical",
                          role: "alert",
                          content: (0, l.jsx)("p", {
                            className: "select-none",
                            children: v
                              ? (0, l.jsx)(i.A, {
                                  id: "chatgptConversations.gpts.migration.profileCopyFailedAfterSuccess",
                                  defaultMessage:
                                    "Your plugin was created, but we couldn\u2019t copy the GPT\u2019s profile picture. To add a logo, open your plugin and choose Edit plugin.",
                                })
                              : (0, l.jsx)(i.A, {
                                  id: "chatgptConversations.gpts.migration.profileCopyFailedBeforeSuccess",
                                  defaultMessage:
                                    "We couldn\u2019t copy the GPT\u2019s profile picture. After migration succeeds, open your plugin and choose Edit plugin to add a logo.",
                                }),
                          }),
                        })
                      : null),
                  (h[16] = v),
                  (h[17] = S.length),
                  (h[18] = g))
                : (g = h[18]),
              (m =
                t.length > 0
                  ? (0, l.jsx)(s.F, {
                      level: "danger",
                      children: (0, l.jsxs)("div", {
                        className: "flex flex-col gap-1 text-sm",
                        children: [
                          (0, l.jsx)("h3", {
                            className: "font-semibold text-default select-none",
                            children: (0, l.jsx)(i.A, {
                              id: "chatgptConversations.gpts.migration.referenceCopyFailed",
                              defaultMessage:
                                "{count, plural, one {A reference file couldn\u2019t be synced} other {Reference files couldn\u2019t be synced}}",
                              values: { count: t.length },
                            }),
                          }),
                          (0, l.jsx)("p", { className: "text-secondary select-none", children: e }),
                          (0, l.jsx)("ul", {
                            className: "flex list-disc flex-col gap-1 ps-5",
                            children: t.map((e, t) => (0, l.jsx)(c, { file: e, files: b, issues: x }, t)),
                          }),
                        ],
                      }),
                    })
                  : null),
              (h[4] = y),
              (h[5] = b),
              (h[6] = I),
              (h[7] = x),
              (h[8] = v),
              (h[9] = S.length),
              (h[10] = p),
              (h[11] = g),
              (h[12] = m))
          } else ((p = h[10]), (g = h[11]), (m = h[12]))
          return (
            h[19] !== p || h[20] !== g || h[21] !== m
              ? ((f = (0, l.jsxs)("div", { className: p, children: [g, m] })),
                (h[19] = p),
                (h[20] = g),
                (h[21] = m),
                (h[22] = f))
              : (f = h[22]),
            f
          )
        },
      },
    )
  },
  w8VL(e, t, n) {
    let l = (0, n("Qgfj").YK)({
      description: {
        id: "chatgptConversations.gpts.migration.skippedFiles.description.unavailable",
        defaultMessage:
          "{count, plural, one {Your plugin was created without a knowledge file that is no longer available.} other {Your plugin was created without # knowledge files that are no longer available.}} You can add replacement files in Edit plugin.",
      },
    })
    n.d(t, {}, { o: l })
  },
  iJ7F(e, t, n) {
    var l = n("ABep"),
      a = n("QosV"),
      i = n("oyxz"),
      r = n("Qgfj"),
      s = n("MM0V"),
      o = n("w8VL")
    n.d(
      t,
      {},
      {
        G: function (e) {
          let t,
            n,
            u,
            d = (0, a.c)(7),
            { count: c, filenames: p } = e
          return (
            d[0] !== c
              ? ((t = (0, l.jsx)("p", { children: (0, l.jsx)(i.A, { ...o.o.description, values: { count: c } }) })),
                (d[0] = c),
                (d[1] = t))
              : (t = d[1]),
            d[2] !== p
              ? ((n =
                  null != p &&
                  p.length > 0 &&
                  (0, l.jsx)("p", {
                    children: (0, l.jsx)("strong", {
                      className: "font-medium select-text",
                      children: (0, l.jsx)(r.dT, { value: p, type: "conjunction" }),
                    }),
                  })),
                (d[2] = p),
                (d[3] = n))
              : (n = d[3]),
            d[4] !== t || d[5] !== n
              ? ((u = (0, l.jsx)(s.l, {
                  type: "warning",
                  variant: "callout",
                  layout: "vertical",
                  role: "alert",
                  content: (0, l.jsxs)("div", {
                    className: "flex flex-col gap-1 wrap-anywhere select-none",
                    children: [t, n],
                  }),
                })),
                (d[4] = t),
                (d[5] = n),
                (d[6] = u))
              : (u = d[6]),
            u
          )
        },
      },
    )
  },
  hL9c(e, t, n) {
    var l = n("ABep"),
      a = n("QosV"),
      i = n("slpy"),
      r = n("uteA"),
      s = n("on57"),
      o = n("zd8w"),
      u = n("Wf1j"),
      d = n("HOLv"),
      c = n("X3K1"),
      p = n("T1PX"),
      g = n("RSwQ"),
      m = n("JwGC"),
      f = n("AdZa"),
      h = n("HgLj"),
      y = n("uW1E"),
      b = n("YvRg")
    n.d(
      t,
      {},
      {
        x: function (e) {
          let t,
            n,
            x,
            v,
            A,
            I,
            S,
            w,
            k,
            j,
            C,
            P,
            _,
            M,
            E,
            T,
            N,
            O,
            U,
            R,
            L,
            D,
            q = (0, a.c)(128),
            {
              src: F,
              filename: z,
              alt: W,
              onRemove: B,
              loading: G,
              loadingPercentage: Y,
              uploadProgress: V,
              previewEnabled: K,
              previewPortalContainer: J,
              onPreviewCloseAutoFocus: Q,
              onPreviewOpen: X,
              onPreviewOpenChange: $,
              previewItems: H,
              previewOverlay: Z,
              previewIndex: ee,
              compact: et,
              sizeClassName: en,
              imageLoading: el,
              variant: ea,
              transitionTargetId: ei,
            } = e,
            er = void 0 === ee ? 0 : ee,
            es = void 0 !== et && et,
            eo = void 0 === ea ? "default" : ea,
            eu = (0, u.A)()
          q[0] !== W || q[1] !== eu
            ? ((t =
                W ??
                eu.formatMessage({
                  id: "codex.localConversation.userImageAttachment",
                  defaultMessage: "User attachment",
                })),
              (q[0] = W),
              (q[1] = eu),
              (q[2] = t))
            : (t = q[2])
          let ed = t,
            ec = (0, p.I)(),
            ep = (0, o.useContext)(g.f),
            eg = (0, o.useRef)(null),
            em = (0, o.useRef)(null),
            [ef, eh] = (0, o.useState)(null),
            ey = null != ef,
            [eb, ex] = (0, o.useState)(),
            ev = "composer" === eo && null != V,
            eA = (void 0 === K || K) && null != F && !ev
          q[3] !== $
            ? ((n = () => {
                ;(eh(null), $?.(!1))
              }),
              (q[3] = $),
              (q[4] = n))
            : (n = q[4])
          let eI = n,
            eS = (e) => {
              if (e && eM && eP?.overlayImage != null) {
                let e = ep?.target?.selectAttachment,
                  t = eP.overlayImage.attachmentId
                return "composer" === eo && null != e && null != t && null != eg.current
                  ? void e(t, eg.current, () => {
                      ;(X?.(), ej(er), $?.(!0))
                    })
                  : void (0, f.Vy)({
                      source: em.current,
                      reducedMotion: ec,
                      open: (e) => {
                        ;(X?.(), ex(() => e), ej(er), $?.(!0))
                      },
                    })
              }
              ;(e ? (X?.(), ej(er)) : eh(null), $?.(e))
            }
          q[5] !== ed || q[6] !== F
            ? ((x = null == F ? void 0 : { alt: ed, src: F }), (q[5] = ed), (q[6] = F), (q[7] = x))
            : (x = q[7])
          let ew = x
          q[8] !== ew || q[9] !== H
            ? ((v = H ?? (null == ew ? [] : [ew])), (q[8] = ew), (q[9] = H), (q[10] = v))
            : (v = q[10])
          let ek = v,
            ej = (e) => {
              eh({ index: e, id: ek[e]?.id })
            },
            eC = ef?.index ?? er
          if (ef?.id != null && ek[eC]?.id !== ef.id) {
            let e
            q[11] !== ef ? ((e = (e) => e.id === ef.id), (q[11] = ef), (q[12] = e)) : (e = q[12])
            let t = ek.findIndex(e)
            ;(t >= 0 && (eC = t), ej(eC))
          }
          let eP = ek[er] ?? ew,
            e_ = ek[eC] ?? ew,
            eM = null != Z && null == J,
            eE = eC > 0 ? eC - 1 : null,
            eT = eC + 1 < ek.length ? eC + 1 : null
          q[13] !== z || q[14] !== eu
            ? ((A = z ?? eu.formatMessage({ id: "imageAttachment.defaultName", defaultMessage: "image" })),
              (q[13] = z),
              (q[14] = eu),
              (q[15] = A))
            : (A = q[15])
          let eN = A,
            eO = (void 0 !== G && G) || null != Y || null != V
          q[16] !== eS || q[17] !== eP || q[18] !== eM
            ? ((I = () => {
                null == eP || (!(eM && null != eP.overlayImage) && eP.onOpenEditor?.("image_click")) || eS(!0)
              }),
              (q[16] = eS),
              (q[17] = eP),
              (q[18] = eM),
              (q[19] = I))
            : (I = q[19])
          let eU = I,
            eR = "composer" === eo ? "rounded-2xl bg-surface-secondary" : "rounded-lg"
          ;(q[20] !== eR
            ? ((S = (0, s.A)("composer-attachment-surface absolute inset-0 overflow-hidden", eR)),
              (q[20] = eR),
              (q[21] = S))
            : (S = q[21]),
            q[22] !== eN ||
            q[23] !== ed ||
            q[24] !== el ||
            q[25] !== eu ||
            q[26] !== ev ||
            q[27] !== F ||
            q[28] !== em ||
            q[29] !== eo
              ? ((w =
                  !ev &&
                  (null == F
                    ? (0, l.jsx)("span", {
                        className: "block size-full",
                        role: "progressbar",
                        "aria-label": eu.formatMessage(
                          {
                            id: "imageAttachment.loadingPreviewAriaLabel",
                            defaultMessage: "Loading preview for {filename}",
                          },
                          { filename: eN },
                        ),
                        children: (0, l.jsx)(c.X, {
                          as: "span",
                          size: "fill",
                          variant: "composer" === eo ? "edge-to-edge" : "chatgpt",
                        }),
                      })
                    : (0, l.jsx)("img", {
                        ref: em,
                        src: F,
                        alt: ed,
                        loading: el,
                        className: "size-full object-cover object-center",
                      }))),
                (q[22] = eN),
                (q[23] = ed),
                (q[24] = el),
                (q[25] = eu),
                (q[26] = ev),
                (q[27] = F),
                (q[28] = em),
                (q[29] = eo),
                (q[30] = w))
              : (w = q[30]),
            q[31] !== eN || q[32] !== eu || q[33] !== eO || q[34] !== Y || q[35] !== ev || q[36] !== V
              ? ((k =
                  eO &&
                  (0, l.jsx)(y.y, {
                    appearance: ev ? "skeleton" : "overlay",
                    label: eu.formatMessage(
                      { id: "imageAttachment.uploadingAriaLabel", defaultMessage: "Uploading {filename}" },
                      { filename: eN },
                    ),
                    percentage: Y,
                    upload: null == V ? void 0 : { filename: eN, progress: V },
                  })),
                (q[31] = eN),
                (q[32] = eu),
                (q[33] = eO),
                (q[34] = Y),
                (q[35] = ev),
                (q[36] = V),
                (q[37] = k))
              : (k = q[37]),
            q[38] !== eA || q[39] !== eo
              ? ((j =
                  "composer" === eo
                    ? (0, l.jsx)("span", {
                        className: (0, s.A)(
                          "composer-attachment-surface pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-border ring-inset group-hover/composer-attachment:bg-text/5",
                          eA &&
                            "group-hover/composer-attachment:ring-border-strong group-has-focus-visible/composer-attachment:ring-border-strong",
                        ),
                        "aria-hidden": !0,
                      })
                    : null),
                (q[38] = eA),
                (q[39] = eo),
                (q[40] = j))
              : (j = q[40]),
            q[41] !== S || q[42] !== w || q[43] !== k || q[44] !== j
              ? ((C = (0, l.jsxs)("span", { className: S, children: [w, k, j] })),
                (q[41] = S),
                (q[42] = w),
                (q[43] = k),
                (q[44] = j),
                (q[45] = C))
              : (C = q[45]),
            q[46] !== eN || q[47] !== eu || q[48] !== B || q[49] !== eo
              ? ((P =
                  B &&
                  (0, l.jsx)(b.a, {
                    className: "composer" === eo ? "-top-0.5 -right-0.5" : void 0,
                    ariaLabel: eu.formatMessage(
                      { id: "imageAttachment.removeAriaLabel", defaultMessage: "Remove {filename}" },
                      { filename: eN },
                    ),
                    onRemove: B,
                    size: "composer" === eo ? "composer" : "default",
                  })),
                (q[46] = eN),
                (q[47] = eu),
                (q[48] = B),
                (q[49] = eo),
                (q[50] = P))
              : (P = q[50]),
            q[51] !== C || q[52] !== P
              ? ((_ = (0, l.jsxs)(l.Fragment, { children: [C, P] })), (q[51] = C), (q[52] = P), (q[53] = _))
              : (_ = q[53]))
          let eL = _
          q[54] !== es || q[55] !== eA || q[56] !== en || q[57] !== eo
            ? ((M = (0, s.A)(
                "composer-attachment-surface relative inline-flex flex-shrink-0 overflow-visible focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset",
                "composer" === eo
                  ? "group/composer-attachment size-30.5 rounded-2xl select-none"
                  : ["rounded-lg border border-strong", en ?? (es ? "size-[54px]" : "size-20")],
                eA ? "cursor-interaction" : "cursor-default",
              )),
              (q[54] = es),
              (q[55] = eA),
              (q[56] = en),
              (q[57] = eo),
              (q[58] = M))
            : (M = q[58])
          let eD = M
          if (!eA || null == eP || null == e_) {
            let e, t
            q[59] !== eL || q[60] !== eD || q[61] !== ei
              ? ((e = (0, l.jsx)("div", { className: eD, "data-attachment-transition-target": ei, children: eL })),
                (q[59] = eL),
                (q[60] = eD),
                (q[61] = ei),
                (q[62] = e))
              : (e = q[62])
            let n = e
            return (
              q[63] !== n || q[64] !== ev || q[65] !== V
                ? ((t = ev
                    ? (0, l.jsx)(i.m, {
                        content: (0, l.jsx)(y.v, { progress: V }),
                        side: "bottom",
                        sideOffset: 4,
                        children: n,
                      })
                    : n),
                  (q[63] = n),
                  (q[64] = ev),
                  (q[65] = V),
                  (q[66] = t))
                : (t = q[66]),
              t
            )
          }
          ;(q[67] !== eP || q[68] !== eM
            ? ((E =
                null == eP.onOpenEditor || (eM && null != eP.overlayImage)
                  ? void 0
                  : (e) => {
                      eP.onOpenEditor?.("image_click") && e.preventDefault()
                    }),
              (q[67] = eP),
              (q[68] = eM),
              (q[69] = E))
            : (E = q[69]),
            q[70] !== eU
              ? ((T = (e) => {
                  e.target === e.currentTarget && ("Enter" === e.key || " " === e.key) && (e.preventDefault(), eU())
                }),
                (q[70] = eU),
                (q[71] = T))
              : (T = q[71]),
            q[72] !== eN || q[73] !== eL || q[74] !== eD || q[75] !== eg || q[76] !== E || q[77] !== T || q[78] !== ei
              ? ((N = (0, l.jsx)("div", {
                  ref: eg,
                  className: eD,
                  "data-attachment-transition-target": ei,
                  role: "button",
                  "aria-label": eN,
                  tabIndex: 0,
                  onClick: E,
                  onKeyDown: T,
                  children: eL,
                })),
                (q[72] = eN),
                (q[73] = eL),
                (q[74] = eD),
                (q[75] = eg),
                (q[76] = E),
                (q[77] = T),
                (q[78] = ei),
                (q[79] = N))
              : (N = q[79]))
          let eq = N,
            eF = null
          if (ey && eM && null != e_.overlayImage) {
            let e,
              t,
              n = "composer" === eo
            if (
              (q[80] !== e_.overlayImage?.imageRef || q[81] !== eb
                ? ((e = (e) => (0, h.P)(eb, e_.overlayImage?.imageRef)(e)),
                  (q[80] = e_.overlayImage?.imageRef),
                  (q[81] = eb),
                  (q[82] = e))
                : (e = q[82]),
              q[83] !== Z ||
                q[84] !== eC ||
                q[85] !== e_ ||
                q[86] !== eI ||
                q[87] !== eT ||
                q[88] !== Q ||
                q[89] !== er ||
                q[90] !== eg ||
                q[91] !== eE ||
                q[92] !== ej ||
                q[93] !== n ||
                q[94] !== e ||
                q[95] !== em)
            ) {
              let a, i
              ;(q[97] !== eE || q[98] !== ej
                ? ((a = null == eE ? void 0 : () => ej(eE)), (q[97] = eE), (q[98] = ej), (q[99] = a))
                : (a = q[99]),
                q[100] !== eT || q[101] !== ej
                  ? ((i = null == eT ? void 0 : () => ej(eT)), (q[100] = eT), (q[101] = ej), (q[102] = i))
                  : (i = q[102]))
              let r = {
                openedFromComposer: n,
                image: { ...e_.overlayImage, imageRef: e },
                getThumbnail: () => (eC === er ? em.current : null),
                onClose: eI,
                onCloseAutoFocus: (e) => {
                  null != Q ? Q(e) : (e.preventDefault(), eg.current?.focus())
                },
                onPreviousImage: a,
                onNextImage: i,
              }
              ;((t = e_.renderOverlay?.(r) ?? (0, l.jsx)(Z, { ...r })),
                (q[83] = Z),
                (q[84] = eC),
                (q[85] = e_),
                (q[86] = eI),
                (q[87] = eT),
                (q[88] = Q),
                (q[89] = er),
                (q[90] = eg),
                (q[91] = eE),
                (q[92] = ej),
                (q[93] = n),
                (q[94] = e),
                (q[95] = em),
                (q[96] = t))
            } else t = q[96]
            eF = t
          }
          let ez = ey && !(eM && null != e_.overlayImage)
          return (
            q[103] !== e_ || q[104] !== eS || q[105] !== eu
              ? ((O =
                  null != e_.onOpenEditor && !1 !== e_.showEditButton
                    ? {
                        ariaLabel: eu.formatMessage({ id: "imageAttachment.editImage", defaultMessage: "Edit image" }),
                        icon: (0, l.jsx)(d.I, { "aria-hidden": !1, asset: r.h }),
                        onClick: () => {
                          e_.onOpenEditor?.("edit_button") && eS(!1)
                        },
                      }
                    : void 0),
                (q[103] = e_),
                (q[104] = eS),
                (q[105] = eu),
                (q[106] = O))
              : (O = q[106]),
            q[107] !== eE || q[108] !== ej
              ? ((U =
                  null == eE
                    ? void 0
                    : () => {
                        ej(eE)
                      }),
                (q[107] = eE),
                (q[108] = ej),
                (q[109] = U))
              : (U = q[109]),
            q[110] !== eT || q[111] !== ej
              ? ((R =
                  null == eT
                    ? void 0
                    : () => {
                        ej(eT)
                      }),
                (q[110] = eT),
                (q[111] = ej),
                (q[112] = R))
              : (R = q[112]),
            q[113] !== e_.alt ||
            q[114] !== e_.onDownloadInitiated ||
            q[115] !== e_.src ||
            q[116] !== eS ||
            q[117] !== Q ||
            q[118] !== eq ||
            q[119] !== J ||
            q[120] !== ez ||
            q[121] !== O ||
            q[122] !== U ||
            q[123] !== R
              ? ((L = (0, l.jsx)(m.C, {
                  src: e_.src,
                  alt: e_.alt,
                  open: ez,
                  onOpenChange: eS,
                  downloadSrc: e_.src,
                  onDownloadClick: e_.onDownloadInitiated,
                  imageDraggable: !1,
                  onCloseAutoFocus: Q,
                  editButton: O,
                  onPreviousImage: U,
                  onNextImage: R,
                  portalContainer: J,
                  triggerContent: eq,
                })),
                (q[113] = e_.alt),
                (q[114] = e_.onDownloadInitiated),
                (q[115] = e_.src),
                (q[116] = eS),
                (q[117] = Q),
                (q[118] = eq),
                (q[119] = J),
                (q[120] = ez),
                (q[121] = O),
                (q[122] = U),
                (q[123] = R),
                (q[124] = L))
              : (L = q[124]),
            q[125] !== eF || q[126] !== L
              ? ((D = (0, l.jsxs)(l.Fragment, { children: [eF, L] })), (q[125] = eF), (q[126] = L), (q[127] = D))
              : (D = q[127]),
            D
          )
        },
      },
    )
  },
  uoRg(e, t, n) {
    var l = n("QosV"),
      a = n("qmMi"),
      i = n("zd8w"),
      r = n("Sd8U"),
      s = n("lICN")
    let o = (0, a.vP)(r.PR, () => null)
    n.d(
      t,
      {},
      {
        O: o,
        o: function (e, t) {
          let n,
            a,
            r = (0, l.c)(4)
          ;(r[0] !== t || r[1] !== e
            ? ((n = () => (
                (0, s.Q)(e),
                e.set(o, t),
                () => {
                  e.get(o) === t && e.set(o, null)
                }
              )),
              (a = [e, t]),
              (r[0] = t),
              (r[1] = e),
              (r[2] = n),
              (r[3] = a))
            : ((n = r[2]), (a = r[3])),
            (0, i.useLayoutEffect)(n, a))
        },
      },
    )
  },
  Y3OQ(e, t, n) {
    var l = n("v7qY"),
      a = n("OiCI"),
      i = n("YWcr"),
      r = n("qXzS"),
      s = n("Q8aV"),
      o = n("cLdu"),
      u = n("dN0a"),
      d = n("qbxq"),
      c = n("CiLO"),
      p = n("uIyc"),
      g = n("uoRg"),
      m = n("WBiY")
    function f(e) {
      if (e.attachment?.content?.some((e) => !(0, d.Fn)(e)))
        throw Error("App draft attachments must be visible to the user")
    }
    function h(e, t, n) {
      if (
        (f(t),
        e.get(c.Fg) || e.get(c.mX) || null != e.get(r.B) || e.get(p.$X) || e.get(c.CD) || !(0, m.q6)(e, t.text, n))
      )
        throw Error("The composer is unavailable")
      ;("replace" === n && ((0, m.iJ)(e), (0, c.U0)(e, { keepMcpAppAttachments: !0 })),
        (0, c.Kk)(e, (e) => {
          ;("replace" === n &&
            (e.mcpAppModelContextAttachments = e.mcpAppModelContextAttachments.filter((e) => "context" === e.kind)),
            null != t.attachment && e.mcpAppModelContextAttachments.push(t.attachment))
        }),
        (0, u.gm)(e, { prefersReducedMotion: !0 }))
    }
    n.d(
      t,
      {},
      {
        LW: "openai/composer/start-source-plugin-draft",
        cL: function (e, t, n) {
          if (t.view.isDestroyed || !t.view.editable) throw Error("The composer is unavailable")
          let a = (0, i.GL)(n)
          ;((0, l.flushSync)(() => {
            ;(h(e, { text: "", attachment: void 0 }, "replace"), t.insertMentionAtSelection(a))
          }),
            t.focus())
        },
        gN: function (e, t) {
          ;(f(t),
            (0, s.startNewConversation)(e, {
              freshDraft: !0,
              selectChat: !0,
              prefillPrompt: t.text,
              prefillMcpAppAttachments: null == t.attachment ? [] : [t.attachment],
            }))
        },
        hm: function (e, t, n) {
          let l = e.get(o.qF, { accountId: e.get(a.Sk), hostId: o.h4, roots: void 0 }).data,
            i = l?.filter(
              (e) =>
                e.plugin.id === t &&
                e.plugin.installed &&
                e.plugin.enabled &&
                "DISABLED_BY_ADMIN" !== e.plugin.availability &&
                e.appIds?.includes(n),
            ),
            r = e.get(g.O)?.mentionPlugin
          if (i?.length !== 1 || null == r) throw Error("The plugin is unavailable in this composer")
          r(i[0])
        },
        n9: h,
      },
    )
  },
  WBiY(e, t, n) {
    var l = n("qmMi"),
      a = n("DBCl"),
      i = n("tl5a"),
      r = n("SPnB"),
      s = n("dsow"),
      o = n("Sd8U"),
      u = n("dN0a"),
      d = n("WFY2"),
      c = n("f4ql"),
      p = n("uoRg")
    let g = (0, l.vP)(o.PR, () => [])
    n.d(
      t,
      {},
      {
        getMcpAppSubmit: function (e, t) {
          if (null == e) return null
          let n = e.get(p.O)?.submit
          if (null != n) {
            var l, o
            let i,
              c,
              m =
                ((l = e),
                (o = n),
                (i = l.get(r.chatGptAuthenticatedAccountId$)),
                (c = l.get(r.o8)),
                (e) => e(p.O)?.submit === o && e(r.chatGptAuthenticatedAccountId$) === i && e(r.o8) === c)
            return async (l, i, r, o, c) => {
              r?.throwIfAborted()
              let f = l.untrustedAppMessage?.sourceId,
                h = e.get(p.O)?.isBusy == null ? void 0 : Symbol()
              null != h &&
                (e.set(g, (e) => [...e, h]), d.v.info("Queued app message for composer", { safe: { mcpAppId: f } }))
              try {
                let y = await (0, s.VR)({
                  context: l,
                  signal: r,
                  requestConfirmation: o,
                  send: async (l) => {
                    if (e.get(p.O)?.submit !== n) throw new DOMException("Composer was closed", "AbortError")
                    return (
                      null != h &&
                        (await (async function (e, t, n, l) {
                          let i = (e) => e(g)[0] === l && e(p.O)?.isBusy !== !0
                          do {
                            let l = (0, a.udX)(),
                              r = e.watch(({ get: e }) => {
                                ;(!t(e) || i(e)) && l.resolve(void 0)
                              })
                            try {
                              await (null == n ? l.promise : (0, a._qC)(l.promise, n))
                            } finally {
                              ;(r(), l.resolve(void 0))
                            }
                            if ((n?.throwIfAborted(), !t(e.get)))
                              throw new DOMException("Composer was closed", "AbortError")
                          } while (!i(e.get))
                        })(e, m, r, h)),
                      t?.(),
                      d.v.info("Submitting app message", { safe: { mcpAppId: f } }),
                      n(l, i, r, void 0, c)
                    )
                  },
                })
                return (
                  (0, u.gm)(e, { prefersReducedMotion: !0 }),
                  null != y &&
                    d.v.info("sent" === y.status ? "Sent app message" : "Queued app message", {
                      safe: {
                        mcpAppId: f,
                        messageId: y.messageId,
                        serverAccepted: "queued" === y.status ? y.serverAccepted : void 0,
                      },
                    }),
                  y
                )
              } catch (t) {
                let e = r?.aborted === !0 || (t instanceof DOMException && "AbortError" === t.name)
                throw (
                  d.v[e ? "info" : "warning"](e ? "Cancelled app message submission" : "Failed to submit app message", {
                    safe: { mcpAppId: f },
                    sensitive: { error: t },
                  }),
                  t
                )
              } finally {
                null != h && e.set(g, (e) => e.filter((e) => e !== h))
              }
            }
          }
          if ("local" !== e.value.kind || null == e.value.conversationId) return null
          let m = e.value.conversationId,
            f = e.get(i.JN, m)
          return null == f
            ? null
            : async (n, l, a, r) => {
                let o = n.untrustedAppMessage?.sourceId
                try {
                  let l = await (0, s.VR)({
                    context: n,
                    signal: a,
                    requestConfirmation: r,
                    send: (n) => (
                      t?.(),
                      d.v.info("Submitting app message", { safe: { mcpAppId: o } }),
                      (0, c.at)(
                        e,
                        e.get(i.qX, m),
                        m,
                        { context: n, cwd: f, text: n.prompt },
                        { queueModeOverride: "queue" },
                      )
                    ),
                  })
                  return (
                    (0, u.gm)(e, { prefersReducedMotion: !0 }),
                    null != l &&
                      d.v.info("sent" === l.status ? "Sent app message" : "Queued app message", {
                        safe: {
                          mcpAppId: o,
                          messageId: l.messageId,
                          serverAccepted: "queued" === l.status ? l.serverAccepted : void 0,
                        },
                      }),
                    l
                  )
                } catch (t) {
                  let e = a?.aborted === !0 || (t instanceof DOMException && "AbortError" === t.name)
                  throw (
                    d.v[e ? "info" : "warning"](
                      e ? "Cancelled app message submission" : "Failed to submit app message",
                      { safe: { mcpAppId: o }, sensitive: { error: t } },
                    ),
                    t
                  )
                }
              }
        },
        iJ: function (e) {
          e.get(p.O)?.clearDraftAttachments()
        },
        q6: function (e, t, n) {
          return e.get(p.O)?.updatePrompt?.(t, n) ?? !1
        },
        qX: function (e) {
          return e?.get(p.O)?.newThreadDestination
        },
      },
    )
  },
  UtcH(e, t, n) {
    var l = n("ABep"),
      a = n("QosV"),
      i = n("yX0s"),
      r = n("on57"),
      s = n("zd8w"),
      o = n("Wf1j"),
      u = n("HOLv"),
      d = n("Sm6l")
    n.d(
      t,
      {},
      {
        V: function (e) {
          let t,
            n,
            c,
            p,
            g,
            m = (0, a.c)(17),
            { ancestors: f, current: h, textSm: y } = e,
            b = (0, o.A)()
          m[0] !== b
            ? ((t = b.formatMessage({ id: "toolbarBreadcrumb.label", defaultMessage: "Breadcrumb" })),
              (m[0] = b),
              (m[1] = t))
            : (t = m[1])
          let x = y ? "text-sm" : "text-base"
          if (
            (m[2] !== x
              ? ((n = (0, r.$)("flex min-w-0 items-center gap-1 text-codex-description", x)), (m[2] = x), (m[3] = n))
              : (n = m[3]),
            m[4] !== f || m[5] !== y)
          ) {
            let e
            ;(m[7] !== y
              ? ((e = (e, t) => {
                  let { id: n, ...a } = e,
                    o =
                      "content" in a
                        ? a.content
                        : (0, l.jsx)("span", { className: "min-w-0 truncate", children: a.label }),
                    c = o
                  if (!("content" in a)) {
                    let { label: e, ...t } = a,
                      n = { className: (0, r.$)("min-w-0", y && "text-sm"), color: "ghost", size: "toolbar" }
                    c =
                      null != t.to
                        ? (0, l.jsx)(d.z, { ...t, ...n, children: o })
                        : (0, l.jsx)(d.$, { ...n, onClick: t.onClick, children: o })
                  }
                  return (0, l.jsxs)(
                    s.Fragment,
                    { children: [t > 0 ? (0, l.jsx)(u.I, { className: "shrink-0", asset: i.q }) : null, c] },
                    n,
                  )
                }),
                (m[7] = y),
                (m[8] = e))
              : (e = m[8]),
              (c = f.map(e)),
              (m[4] = f),
              (m[5] = y),
              (m[6] = c))
          } else c = m[6]
          return (
            m[9] !== f.length || m[10] !== h
              ? ((p =
                  null != h
                    ? (0, l.jsxs)(l.Fragment, {
                        children: [
                          f.length > 0 ? (0, l.jsx)(u.I, { className: "shrink-0", asset: i.q }) : null,
                          (0, l.jsx)("span", {
                            "aria-current": "page",
                            className:
                              "flex h-token-button-composer min-w-0 flex-auto items-center truncate px-2 text-default",
                            children: h,
                          }),
                        ],
                      })
                    : null),
                (m[9] = f.length),
                (m[10] = h),
                (m[11] = p))
              : (p = m[11]),
            m[12] !== t || m[13] !== n || m[14] !== c || m[15] !== p
              ? ((g = (0, l.jsxs)("nav", { "aria-label": t, className: n, children: [c, p] })),
                (m[12] = t),
                (m[13] = n),
                (m[14] = c),
                (m[15] = p),
                (m[16] = g))
              : (g = m[16]),
            g
          )
        },
      },
    )
  },
  eP0O(e, t, n) {
    var l = n("QosV"),
      a = n("qmMi"),
      i = n("ndjw")
    function r(e) {
      let t,
        n = (0, l.c)(2)
      return (
        n[0] !== e ? ((t = null == e ? void 0 : { hostId: e }), (n[0] = e), (n[1] = t)) : (t = n[1]),
        (0, a._U)(i.d7, t)
      )
    }
    n.d(
      t,
      {},
      {
        A: r,
        m: function (e) {
          return r(e).data?.homeDirectory
        },
      },
    )
  },
  KMWy(e, t, n) {
    var l = n("DBCl")
    let a = (0, n("Nwp9").m3)(l.xis, {}, { coerceStoredValue: (e) => l.kke.parse(e) })
    n.d(
      t,
      {},
      {
        Mb: function (e, t, n) {
          let a,
            i = e.map((e) => l.A47[e].feature),
            r = [
              ...new Set(["fullscreen", "encrypted-media", ...(t ?? []), ...i, ...(n ? ["local-network-access"] : [])]),
            ]
          return (
            (a =
              null != t || i.length > 0
                ? r.map((e) => `${e} *`).join("; ")
                : n
                  ? "encrypted-media *; local-network-access"
                  : "encrypted-media *"),
            { frameFeatures: r, iframeAllow: a }
          )
        },
        gy: function (e, t) {
          return (t ? l.qfz.options : l.rRf).filter((t) => e.permissions?.[t] != null)
        },
        p9: a,
      },
    )
  },
  iIHp(e, t, n) {
    var l = n("QosV"),
      a = n("zd8w")
    class i {
      errors
      pendingRequest = null
      listeners = new Set()
      constructor(e) {
        this.errors = e
      }
      getSnapshot = () => (null == this.pendingRequest ? null : this.pendingRequest.confirmation)
      subscribe = (e) => (
        this.listeners.add(e),
        () => {
          ;(this.listeners.delete(e), 0 === this.listeners.size && this.cancel())
        }
      )
      request = (e) =>
        null != this.pendingRequest
          ? Promise.reject(this.errors.createAlreadyPendingError())
          : new Promise((t, n) => {
              ;((this.pendingRequest = { confirmation: e, reject: n, resolve: t }), this.notify())
            })
      confirm = (e) => {
        this.takePendingRequest()?.resolve(e)
      }
      cancel = () => {
        this.takePendingRequest()?.reject(this.errors.createCanceledError())
      }
      notify() {
        for (let e of this.listeners) e()
      }
      takePendingRequest() {
        let e = this.pendingRequest
        return ((this.pendingRequest = null), null != e && this.notify(), e)
      }
    }
    n.d(
      t,
      {},
      {
        i: function (e) {
          let t,
            n,
            r = (0, l.c)(7)
          r[0] !== e ? ((t = () => new i(e)), (r[0] = e), (r[1] = t)) : (t = r[1])
          let [s] = (0, a.useState)(t),
            o = (0, a.useSyncExternalStore)(s.subscribe, s.getSnapshot, s.getSnapshot)
          return (
            r[2] !== o || r[3] !== s.cancel || r[4] !== s.confirm || r[5] !== s.request
              ? ((n = { cancel: s.cancel, confirmation: o, confirm: s.confirm, request: s.request }),
                (r[2] = o),
                (r[3] = s.cancel),
                (r[4] = s.confirm),
                (r[5] = s.request),
                (r[6] = n))
              : (n = r[6]),
            n
          )
        },
      },
    )
  },
  v7ut(e, t, n) {
    var l = n("ABep"),
      a = n("QosV"),
      i = n("zd8w"),
      r = n("Wf1j"),
      s = n("oyxz"),
      o = n("hL9c"),
      u = n("osar"),
      d = n("eFVb"),
      c = n("bII7"),
      p = n("v5fl"),
      g = n("Sm6l"),
      m = n("JNtf"),
      f = n("mUDD"),
      h = n("zLIa"),
      y = n("sF0J"),
      b = n("E1V6")
    function x(e) {
      let t,
        n,
        o,
        x,
        w,
        k,
        j,
        C = (0, a.c)(31),
        { canConfirm: P, context: _, description: M, imageUrls: E, onCancel: T, onConfirm: N, prompt: O, title: U } = e,
        R = void 0 === P || P,
        L = (0, r.A)()
      C[0] !== O
        ? ((t = () => {
            let e = (0, d.zI)(O, {
              defaultTextKind: "prompt",
              enableFileMentions: !1,
              enableSkillMentions: !1,
              enableSlashCommands: !1,
              enterBehavior: "newline",
            })
            return { controller: e, destroy: () => e.destroy() }
          }),
          (C[0] = O),
          (C[1] = t))
        : (t = C[1])
      let [D] = (0, i.useState)(t),
        { controller: q, destroy: F } = D
      ;(0, b.f)(F, q)
      let z = (0, p.lD)(q, A, "document"),
        [W, B] = (0, i.useState)(_)
      C[2] !== _ ? ((n = S(_)), (C[2] = _), (C[3] = n)) : (n = C[3])
      let G = n,
        [Y, V] = (0, i.useState)(G),
        [K, J] = (0, i.useState)("prompt")
      C[4] !== Y
        ? ((o = (function (e) {
            try {
              return (0, y.PC)(JSON.parse(e))
            } catch {
              return
            }
          })(Y)),
          (C[4] = Y),
          (C[5] = o))
        : (o = C[5])
      let Q = o
      C[6] !== R || C[7] !== W || C[8] !== q || C[9] !== N
        ? ((x = () => {
            let e = q.getText().trim()
            R && e.length > 0 && N((0, y.qY)({ context: W, prompt: e }))
          }),
          (C[6] = R),
          (C[7] = W),
          (C[8] = q),
          (C[9] = N),
          (C[10] = x))
        : (x = C[10])
      let X = x
      return (
        C[11] !== T
          ? ((w = (e) => {
              e || T()
            }),
            (C[11] = T),
            (C[12] = w))
          : (w = C[12]),
        C[13] !== R ||
        C[14] !== X ||
        C[15] !== W ||
        C[16] !== Y ||
        C[17] !== q ||
        C[18] !== M ||
        C[19] !== z ||
        C[20] !== E ||
        C[21] !== G ||
        C[22] !== L ||
        C[23] !== T ||
        C[24] !== Q ||
        C[25] !== U ||
        C[26] !== K
          ? ((k =
              "prompt" === K
                ? (0, l.jsxs)(f.R4, {
                    className: "gap-4",
                    as: "form",
                    onSubmit: (e) => {
                      ;(e.preventDefault(), X())
                    },
                    children: [
                      (0, l.jsx)(I, { description: M, title: U }),
                      (0, l.jsx)(u.r, {
                        paddingVariant: "inset",
                        children: (0, l.jsx)(u.r.Body, {
                          children: (0, l.jsx)(c.k, {
                            ariaLabel: L.formatMessage({
                              id: "codex.mcpTool.confirmFollowUp.promptAriaLabel",
                              defaultMessage: "Prompt",
                            }),
                            composerController: q,
                            linkOpenTarget: "external-browser",
                            minHeight: "1lh",
                            placeholder: "",
                            onSubmit: X,
                          }),
                        }),
                      }),
                      null != E && E.length > 0
                        ? (0, l.jsx)("div", { className: "flex flex-wrap gap-2", children: E.map(v) })
                        : null,
                      null != W
                        ? (0, l.jsx)("button", {
                            className:
                              "w-fit cursor-interaction border-0 bg-transparent p-0 text-sm text-link-primary underline-offset-2 hover:underline",
                            type: "button",
                            onClick: () => {
                              ;(V(S(W)), J("widget-state"))
                            },
                            children: (0, l.jsx)(s.A, {
                              id: "codex.mcpTool.confirmFollowUp.viewWidgetState",
                              defaultMessage: "View widget state",
                            }),
                          })
                        : null,
                      (0, l.jsxs)(f.Es, {
                        className: "justify-start gap-2",
                        children: [
                          (0, l.jsx)("div", { className: "flex-1" }),
                          (0, l.jsx)(g.$, {
                            className: "ms-auto",
                            color: "secondary",
                            type: "button",
                            onClick: T,
                            children: (0, l.jsx)(s.A, {
                              id: "codex.mcpTool.confirmFollowUp.cancel",
                              defaultMessage: "Cancel",
                            }),
                          }),
                          (0, l.jsx)(g.$, {
                            disabled: !R || !z,
                            type: "submit",
                            children: (0, l.jsx)(s.A, {
                              id: "codex.mcpTool.confirmFollowUp.confirm",
                              defaultMessage: "Send",
                            }),
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, l.jsxs)(f.R4, {
                    className: "gap-4",
                    children: [
                      (0, l.jsx)(f.c7, {
                        title: (0, l.jsx)(m.L3, {
                          children: (0, l.jsx)(s.A, {
                            id: "codex.mcpTool.confirmFollowUp.widgetStateTitle",
                            defaultMessage: "Widget state",
                          }),
                        }),
                        subtitle: (0, l.jsx)(m.rr, {
                          className: "text-secondary",
                          children: (0, l.jsx)(s.A, {
                            id: "codex.mcpTool.confirmFollowUp.widgetStateDescription",
                            defaultMessage:
                              "This JSON will be included with the prompt. Editing it won't change the widget.",
                          }),
                        }),
                      }),
                      (0, l.jsx)(h.TM, {
                        variant: "code",
                        rows: 10,
                        "aria-invalid": null == Q,
                        "aria-label": L.formatMessage({
                          id: "codex.mcpTool.confirmFollowUp.widgetStateAriaLabel",
                          defaultMessage: "Widget state JSON",
                        }),
                        autoFocus: !0,
                        spellCheck: !1,
                        value: Y,
                        onChange: (e) => {
                          V(e.target.value)
                        },
                      }),
                      null == Q
                        ? (0, l.jsx)("p", {
                            className: "text-sm text-danger",
                            role: "alert",
                            children: (0, l.jsx)(s.A, {
                              id: "codex.mcpTool.confirmFollowUp.invalidWidgetState",
                              defaultMessage: "Enter a valid JSON object under 32 KB",
                            }),
                          })
                        : null,
                      (0, l.jsxs)(f.Es, {
                        className: "justify-start gap-2",
                        children: [
                          (0, l.jsx)(g.$, {
                            color: "ghost",
                            disabled: Y === G,
                            type: "button",
                            onClick: () => {
                              V(G)
                            },
                            children: (0, l.jsx)(s.A, {
                              id: "codex.mcpTool.confirmFollowUp.resetWidgetState",
                              defaultMessage: "Reset",
                            }),
                          }),
                          (0, l.jsx)("div", { className: "flex-1" }),
                          (0, l.jsx)(g.$, {
                            color: "secondary",
                            type: "button",
                            onClick: () => {
                              ;(V(S(W)), J("prompt"))
                            },
                            children: (0, l.jsx)(s.A, {
                              id: "codex.mcpTool.confirmFollowUp.backToPrompt",
                              defaultMessage: "Back",
                            }),
                          }),
                          (0, l.jsx)(g.$, {
                            disabled: null == Q,
                            type: "button",
                            onClick: () => {
                              null != Q && (B(Q), J("prompt"))
                            },
                            children: (0, l.jsx)(s.A, {
                              id: "codex.mcpTool.confirmFollowUp.applyWidgetState",
                              defaultMessage: "Apply",
                            }),
                          }),
                        ],
                      }),
                    ],
                  })),
            (C[13] = R),
            (C[14] = X),
            (C[15] = W),
            (C[16] = Y),
            (C[17] = q),
            (C[18] = M),
            (C[19] = z),
            (C[20] = E),
            (C[21] = G),
            (C[22] = L),
            (C[23] = T),
            (C[24] = Q),
            (C[25] = U),
            (C[26] = K),
            (C[27] = k))
          : (k = C[27]),
        C[28] !== w || C[29] !== k
          ? ((j = (0, l.jsx)(m.lG, { open: !0, onOpenChange: w, size: "wide", children: k })),
            (C[28] = w),
            (C[29] = k),
            (C[30] = j))
          : (j = C[30]),
        j
      )
    }
    function v(e, t) {
      return (0, l.jsx)(o.x, { src: e }, t)
    }
    function A(e) {
      return e.getText().trim().length > 0
    }
    function I(e) {
      let t,
        n,
        i,
        r,
        o,
        u = (0, a.c)(11),
        { description: d, title: c } = e
      return (
        u[0] !== c
          ? ((t =
              c ?? (0, l.jsx)(s.A, { id: "codex.mcpTool.confirmFollowUp.title", defaultMessage: "Send follow-up?" })),
            (u[0] = c),
            (u[1] = t))
          : (t = u[1]),
        u[2] !== t ? ((n = (0, l.jsx)(m.L3, { children: t })), (u[2] = t), (u[3] = n)) : (n = u[3]),
        u[4] !== d
          ? ((i =
              d ??
              (0, l.jsx)(s.A, {
                id: "codex.mcpTool.confirmFollowUp.description",
                defaultMessage: "An app wants to send this prompt",
              })),
            (u[4] = d),
            (u[5] = i))
          : (i = u[5]),
        u[6] !== i
          ? ((r = (0, l.jsx)(m.rr, { className: "text-secondary", children: i })), (u[6] = i), (u[7] = r))
          : (r = u[7]),
        u[8] !== n || u[9] !== r
          ? ((o = (0, l.jsx)(f.c7, { title: n, subtitle: r })), (u[8] = n), (u[9] = r), (u[10] = o))
          : (o = u[10]),
        o
      )
    }
    function S(e) {
      return null == e ? "" : (0, y.pc)(e)
    }
    n.d(
      t,
      {},
      {
        McpAppFollowUpConfirmationDialog: function (e) {
          let t,
            n = (0, a.c)(2),
            { confirmation: i } = e
          return null == i
            ? null
            : (n[0] !== i ? ((t = (0, l.jsx)(x, { ...i })), (n[0] = i), (n[1] = t)) : (t = n[1]), t)
        },
      },
    )
  },
  sF0J(e, t, n) {
    var l = n("SKgO"),
      a = n("ASxG"),
      i = n("sS8e")
    let r = a
      .Ikc({
        context: l.B7.optional(),
        isVisible: a.zMY().optional(),
        prompt: a.YjP().trim().min(1),
        title: a.YjP().trim().min(1).max(250).optional(),
      })
      .strip()
    n.d(
      t,
      { PC: () => l.PC, pc: () => l.pc },
      {
        qY: function (e) {
          let { context: t, prompt: n } = e
          return null == t
            ? n
            : `${n}

Current widget context (JSON):
${(0, l.pc)(t)}`
        },
        tu: function (e) {
          let t = r.safeParse(e)
          if (!t.success) throw (0, i.zF)("Invalid follow-up message", -32602)
          return t.data
        },
      },
    )
  },
  QnVT(e, t, n) {
    var l = n("qmMi"),
      a = n("i8Zd"),
      i = n("OWtl")
    let r = (0, l.un)(i.u, ({ get: e }) => ({ revision: e(a.fn), appearance: e(a.cZ) }), {
        isEqual: (e, t) => e.revision === t.revision,
      }),
      s = (0, l.un)(i.u, ({ get: e }) => {
        let { appearance: t, revision: n } = e(r),
          l = t?.fonts
        return null == l ||
          window.matchMedia?.("(forced-colors: active)").matches !== !1 ||
          [l.code, l.ui].some((e) => e?.includes("("))
          ? n
          : t
      }),
      o = (0, l.un)(
        i.u,
        ({ get: e }) => (
          e(s),
          (function () {
            let e = getComputedStyle(document.documentElement),
              t = document.createElement("div")
            ;((t.style.display = "none"), t.setAttribute("aria-hidden", "true"), document.body.appendChild(t))
            let n = (t) => {
                let n = e.getPropertyValue(t).trim()
                return n.length > 0 ? n : void 0
              },
              l = (n) => {
                let l = u(e, t, n, "color"),
                  a = u(e, t, "--color-surface-tertiary", "color")
                if (null != l && null != a) return `color-mix(in srgb, ${l} 12%, ${a})`
              }
            try {
              let a,
                i,
                r,
                s,
                o,
                d,
                c,
                p,
                g,
                m,
                f,
                h,
                y,
                b,
                x,
                v,
                A,
                I,
                S,
                w,
                k,
                j,
                C,
                P,
                _,
                M,
                E,
                T,
                N,
                O,
                U,
                R,
                L,
                D,
                q,
                F
              return {
                "--color-background-primary":
                  ((a = "--app-color-background-surface"),
                  u(e, t, a, "color") ?? ((i = "--color-surface-tertiary"), u(e, t, i, "color"))),
                "--color-background-secondary": ((r = "--color-surface-elevated"), u(e, t, r, "color")),
                "--color-background-tertiary": ((s = "--color-surface-secondary"), u(e, t, s, "color")),
                "--color-background-inverse": ((o = "--color-text"), u(e, t, o, "color")),
                "--color-background-ghost": "transparent",
                "--color-background-info":
                  ((d = "--codex-theme-accent-background-subtle"),
                  u(e, t, d, "color") ?? ((c = "--color-background-info-surface"), u(e, t, c, "color"))),
                "--color-background-danger": ((p = "--color-background-danger-surface"), u(e, t, p, "color")),
                "--color-background-success": l("--color-codex-git-added"),
                "--color-background-warning": l("--color-text-warning"),
                "--color-background-disabled": ((g = "--color-background-primary-soft-active"), u(e, t, g, "color")),
                "--color-text-primary": ((m = "--color-text"), u(e, t, m, "color")),
                "--color-text-secondary": ((f = "--color-text-secondary"), u(e, t, f, "color")),
                "--color-text-tertiary": ((h = "--color-codex-description"), u(e, t, h, "color")),
                "--color-text-inverse":
                  ((y = "--color-text-inverse"),
                  u(e, t, y, "color") ?? ((b = "--color-surface-tertiary"), u(e, t, b, "color"))),
                "--color-text-ghost": ((x = "--color-codex-description"), u(e, t, x, "color")),
                "--color-text-info": ((v = "--color-text-info"), u(e, t, v, "color")),
                "--color-text-danger": ((A = "--color-text-danger"), u(e, t, A, "color")),
                "--color-text-success": ((I = "--color-codex-git-added"), u(e, t, I, "color")),
                "--color-text-warning": ((S = "--color-text-warning"), u(e, t, S, "color")),
                "--color-text-disabled": ((w = "--color-codex-description"), u(e, t, w, "color")),
                "--color-border-primary": ((k = "--color-border-primary-outline"), u(e, t, k, "color")),
                "--color-border-secondary": ((j = "--color-border"), u(e, t, j, "color")),
                "--color-border-tertiary": ((C = "--color-border"), u(e, t, C, "color")),
                "--color-border-inverse": ((P = "--color-text"), u(e, t, P, "color")),
                "--color-border-ghost": "transparent",
                "--color-border-info": ((_ = "--color-ring"), u(e, t, _, "color")),
                "--color-border-danger": ((M = "--color-text-danger"), u(e, t, M, "color")),
                "--color-border-success": ((E = "--color-codex-git-added"), u(e, t, E, "color")),
                "--color-border-warning": ((T = "--color-text-warning"), u(e, t, T, "color")),
                "--color-border-disabled": ((N = "--color-border-primary-outline"), u(e, t, N, "color")),
                "--color-ring-primary": ((O = "--color-ring"), u(e, t, O, "color")),
                "--color-ring-secondary": ((U = "--color-ring"), u(e, t, U, "color")),
                "--color-ring-inverse": ((R = "--color-ring"), u(e, t, R, "color")),
                "--color-ring-info": ((L = "--color-ring"), u(e, t, L, "color")),
                "--color-ring-danger": ((D = "--color-text-danger"), u(e, t, D, "color")),
                "--color-ring-success": ((q = "--color-codex-git-added"), u(e, t, q, "color")),
                "--color-ring-warning": ((F = "--color-text-warning"), u(e, t, F, "color")),
                "--font-sans": u(e, t, "--font-sans", "fontFamily"),
                "--font-mono": u(e, t, "--font-mono", "fontFamily"),
                "--font-weight-normal": u(e, t, "--font-ui-weight", "fontWeight"),
                "--font-weight-medium": u(e, t, "--font-weight-medium", "fontWeight"),
                "--font-weight-semibold": u(e, t, "--font-weight-semibold", "fontWeight"),
                "--font-weight-bold": u(e, t, "--font-weight-bold", "fontWeight"),
                "--font-text-xs-size": u(e, t, "--text-xs", "fontSize"),
                "--font-text-sm-size": u(e, t, "--text-sm", "fontSize"),
                "--font-text-md-size": u(e, t, "--text-base", "fontSize"),
                "--font-text-lg-size": u(e, t, "--text-lg", "fontSize"),
                "--font-heading-xs-size": u(e, t, "--text-heading-sm", "fontSize"),
                "--font-heading-sm-size": u(e, t, "--text-heading-md", "fontSize"),
                "--font-heading-md-size": u(e, t, "--text-heading-lg", "fontSize"),
                "--font-heading-lg-size": u(e, t, "--text-xl", "fontSize"),
                "--font-heading-xl-size": u(e, t, "--text-2xl", "fontSize"),
                "--font-heading-2xl-size": u(e, t, "--text-3xl", "fontSize"),
                "--font-heading-3xl-size": u(e, t, "--text-4xl", "fontSize"),
                "--font-text-xs-line-height": n("--text-xs--line-height"),
                "--font-text-sm-line-height": n("--text-sm--line-height"),
                "--font-text-md-line-height": n("--text-base--line-height"),
                "--font-text-lg-line-height": n("--text-lg--line-height"),
                "--font-heading-xs-line-height": "1.33",
                "--font-heading-sm-line-height": "1.33",
                "--font-heading-md-line-height": "1.2",
                "--font-heading-lg-line-height": "1.2",
                "--font-heading-xl-line-height": "1",
                "--font-heading-2xl-line-height": "1",
                "--font-heading-3xl-line-height": "1",
                "--border-radius-xs": u(e, t, "--radius-xs", "borderRadius"),
                "--border-radius-sm": u(e, t, "--radius-sm", "borderRadius"),
                "--border-radius-md": u(e, t, "--radius-md", "borderRadius"),
                "--border-radius-lg": u(e, t, "--radius-lg", "borderRadius"),
                "--border-radius-xl": u(e, t, "--radius-xl", "borderRadius"),
                "--border-radius-full": u(e, t, "--radius-full", "borderRadius"),
                "--border-width-regular": "1px",
                "--shadow-hairline": u(e, t, "--shadow-hairline", "boxShadow"),
                "--shadow-sm": u(e, t, "--shadow-sm", "boxShadow"),
                "--shadow-md": u(e, t, "--shadow-md", "boxShadow"),
                "--shadow-lg": u(e, t, "--shadow-lg", "boxShadow"),
              }
            } finally {
              t.remove()
            }
          })()
        ),
      )
    function u(e, t, n, l) {
      let a = e.getPropertyValue(n).trim()
      if (0 === a.length) return
      t.style[l] = `var(${n})`
      let i = getComputedStyle(t)[l].trim()
      return 0 === i.length || i === `var(${n})` ? a : i
    }
    n.d(t, {}, { y: o })
  },
  Yshm(e, t, n) {
    var l = n("ASxG")
    let a = l.YjP().regex(/^[A-Za-z0-9_-]{1,128}$/),
      i = l
        .Ikc({ connectedPluginIds: l.YOg(l.YjP()).optional(), declinedPluginIds: l.YOg(l.YjP()).optional() })
        .catchall(l.Pq9()),
      r = l.Ikc({ pluginId: l.YjP().min(1), suggestionId: a.optional() }),
      s = l.Ikc({
        type: l.euz("event"),
        label: l.euz("chatgpt_plugin_management_suggestion_impression"),
        payload: l.Ikc({
          remote_plugin_id: l.YjP().min(1).max(256),
          plugin_ids: l
            .YOg(l.YjP().min(1).max(256))
            .min(1)
            .max(10)
            .optional()
            .catch(void 0),
          suggestion_id: a,
        }),
      }),
      o = s.extend({
        label: l.euz("chatgpt_plugin_management_suggestion_shown"),
        payload: s.shape.payload.extend({
          suggestion_id: a.optional(),
          plugin_ids: l.YOg(l.YjP().min(1).max(256)).min(1).max(10),
        }),
      }),
      u = l.gMt("label", [s, o]),
      d = l.Ikc({
        kind: l.euz("plugin_suggestions"),
        version: l.euz(1),
        suggestions: l.YOg(l.Ikc({ plugin_id: l.YjP().min(1), display_name: l.YjP().min(1) })),
      }),
      c = l.Ikc({
        "openai/plugin_suggestion_id": a.optional(),
        "openai/plugin_suggestion_connector_ids": l
          .g1P(l.YjP(), l.YjP().min(1))
          .optional()
          .catch(void 0),
      })
    n.d(t, {}, { H2: c, Jq: d, Jt: r, Yn: i, gt: u })
  },
  LGZt(e, t, n) {
    var l = n("DBCl")
    n.d(
      t,
      {},
      {
        A: function (e, t, n = (0, l.t$5)(t)) {
          let a = document.createElement(e)
          if (a instanceof HTMLIFrameElement)
            (a.setAttribute("sandbox", "allow-scripts allow-same-origin"),
              a.setAttribute("referrerpolicy", "no-referrer"))
          else {
            let e = document.createElement("style")
            ;((e.textContent = "iframe { border-radius: inherit; }"), a.shadowRoot?.append(e))
          }
          return (a.setAttribute("partition", n), a)
        },
      },
    )
  },
  JHD7(e, t, n) {
    var l = n("ABep"),
      a = n("QosV"),
      i = n("on57"),
      r = n("v7qY"),
      s = n("FgVF"),
      o = n("EAcR"),
      u = n("qwxA")
    n.d(
      t,
      {},
      {
        N: function (e) {
          let t,
            n,
            d,
            c,
            p,
            g,
            m,
            f,
            h,
            y,
            b = (0, a.c)(20)
          ;(b[0] !== e
            ? (({ children: t, className: n, contentContainer: d, contentOverride: c, ...p } = e),
              (b[0] = e),
              (b[1] = t),
              (b[2] = n),
              (b[3] = d),
              (b[4] = c),
              (b[5] = p))
            : ((t = b[1]), (n = b[2]), (d = b[3]), (c = b[4]), (p = b[5])),
            b[6] !== p ? ((g = (0, l.jsx)(o.T, { ...p })), (b[6] = p), (b[7] = g)) : (g = b[7]))
          let x = g
          b[8] !== d || b[9] !== x
            ? ((m = null == d ? x : (0, r.createPortal)(x, d)), (b[8] = d), (b[9] = x), (b[10] = m))
            : (m = b[10])
          let v = m
          ;(b[11] !== n ? ((f = (0, i.A)("relative h-full min-h-0", n)), (b[11] = n), (b[12] = f)) : (f = b[12]),
            b[13] !== p.mcpAppId
              ? ((h = (0, l.jsx)(u.j3, { isInlineRequested: !0, mcpAppId: p.mcpAppId })),
                (b[13] = p.mcpAppId),
                (b[14] = h))
              : (h = b[14]))
          let A = void 0 === c ? v : c
          return (
            b[15] !== t || b[16] !== f || b[17] !== h || b[18] !== A
              ? ((y = (0, l.jsxs)(s.G, { className: f, children: [h, t, A] })),
                (b[15] = t),
                (b[16] = f),
                (b[17] = h),
                (b[18] = A),
                (b[19] = y))
              : (y = b[19]),
            y
          )
        },
      },
    )
  },
  MnTr(e, t, n) {
    n.d(t, { C: () => c, s: () => p })
    var l = n("ABep"),
      a = n("QosV"),
      i = n("ULZ9"),
      r = n("on57"),
      s = n("zd8w"),
      o = n("v7qY"),
      u = "PortalBoundary-TFj9W2"
    let d = (0, s.createContext)({ container: null })
    function c(e) {
      let t,
        n,
        o,
        c,
        p,
        g,
        m,
        f,
        h = (0, a.c)(20),
        { children: y, className: b, theme: x, themeClassName: v } = e,
        [A, I] = (0, s.useState)(null)
      ;(h[0] !== A
        ? ((t = () => {
            if (null == A) return
            let e = () => {
              let e = String(A.currentCSSZoom ?? 1)
              A.style.getPropertyValue("--puik-portal-zoom") !== e && A.style.setProperty("--puik-portal-zoom", e)
            }
            e()
            let t = new MutationObserver(e)
            for (let e = A; null != e; e = e.parentElement)
              t.observe(e, { attributes: !0, attributeFilter: ["class", "style"] })
            return () => t.disconnect()
          }),
          (n = [A]),
          (h[0] = A),
          (h[1] = t),
          (h[2] = n))
        : ((t = h[1]), (n = h[2])),
        (0, s.useLayoutEffect)(t, n),
        h[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (e) => {
              null != e && I(e)
            }),
            (h[3] = o))
          : (o = h[3]),
        h[4] !== b || h[5] !== v
          ? ((c = (0, r.A)("relative", u, v, b)), (h[4] = b), (h[5] = v), (h[6] = c))
          : (c = h[6]))
      let S = A ?? void 0
      return (
        h[7] !== A || h[8] !== v
          ? ((p = { container: A, themeClassName: v }), (h[7] = A), (h[8] = v), (h[9] = p))
          : (p = h[9]),
        h[10] !== y || h[11] !== p
          ? ((g = (0, l.jsx)(d.Provider, { value: p, children: y })), (h[10] = y), (h[11] = p), (h[12] = g))
          : (g = h[12]),
        h[13] !== S || h[14] !== g
          ? ((m = (0, l.jsx)(i.z, { radixPortalContainer: S, children: g })), (h[13] = S), (h[14] = g), (h[15] = m))
          : (m = h[15]),
        h[16] !== c || h[17] !== m || h[18] !== x
          ? ((f = (0, l.jsx)("div", { ref: o, className: c, "data-theme": x, children: m })),
            (h[16] = c),
            (h[17] = m),
            (h[18] = x),
            (h[19] = f))
          : (f = h[19]),
        f
      )
    }
    function p(e) {
      let t,
        n,
        c,
        p,
        g,
        m,
        f,
        h = (0, a.c)(24),
        { children: y, theme: b } = e,
        { container: x, themeClassName: v } = (0, s.useContext)(d)
      h[0] !== x ? ((t = x?.closest("dialog:modal")), (h[0] = x), (h[1] = t)) : (t = h[1])
      let A = t,
        [I, S] = (0, s.useState)(null)
      ;(h[2] !== x || h[3] !== A?.currentCSSZoom || h[4] !== I
        ? ((n = () => {
            if (null == x || null == I) return
            let e = x.ownerDocument.defaultView
            if (null == e) return
            let t = []
            for (let e = x; null != e; e = e.parentElement) t.push(e)
            let n = () => {
                let n = x.currentCSSZoom ?? 1,
                  l = A?.currentCSSZoom ?? 1,
                  a = t.map((t) => e.getComputedStyle(t)),
                  i = t.some((e, t) => {
                    let n = a[t]
                    return (
                      e.hasAttribute("inert") ||
                      e.hidden ||
                      "true" === e.getAttribute("aria-hidden") ||
                      "none" === n.display ||
                      "hidden" === n.visibility ||
                      "collapse" === n.visibility ||
                      "hidden" === n.contentVisibility
                    )
                  })
                ;(I.style.setProperty("zoom", String(n / l)),
                  I.style.setProperty("--puik-portal-zoom", String(n)),
                  I.toggleAttribute("inert", i),
                  I.toggleAttribute("hidden", i))
              },
              l = new MutationObserver(n),
              a = !1,
              i = () => {
                let i = null != I.querySelector('[data-radix-popper-content-wrapper], [role="tooltip"]')
                if (i !== a)
                  if (((a = i), i)) {
                    for (let e of (n(), t))
                      l.observe(e, {
                        attributes: !0,
                        attributeFilter: ["class", "style", "hidden", "inert", "aria-hidden", "data-theme"],
                      })
                    e.addEventListener("resize", n)
                  } else (l.disconnect(), e.removeEventListener("resize", n))
              },
              r = new MutationObserver(i)
            return (
              r.observe(I, { childList: !0, subtree: !0 }),
              i(),
              () => {
                ;(r.disconnect(),
                  l.disconnect(),
                  e.removeEventListener("resize", n),
                  I.setAttribute("hidden", ""),
                  I.setAttribute("inert", ""))
              }
            )
          }),
          (h[2] = x),
          (h[3] = A?.currentCSSZoom),
          (h[4] = I),
          (h[5] = n))
        : (n = h[5]),
        h[6] !== x || h[7] !== A || h[8] !== I
          ? ((c = [x, A, I]), (h[6] = x), (h[7] = A), (h[8] = I), (h[9] = c))
          : (c = h[9]),
        (0, s.useLayoutEffect)(n, c))
      let w = I ?? void 0
      return (
        h[10] !== y || h[11] !== I
          ? ((p = "function" == typeof y ? y(I) : y), (h[10] = y), (h[11] = I), (h[12] = p))
          : (p = h[12]),
        h[13] !== w || h[14] !== p
          ? ((g = (0, l.jsx)(i.z, { radixPortalContainer: w, children: p })), (h[13] = w), (h[14] = p), (h[15] = g))
          : (g = h[15]),
        h[16] !== x || h[17] !== A || h[18] !== b || h[19] !== v
          ? ((m =
              null != x &&
              (0, o.createPortal)(
                (0, l.jsx)("div", {
                  ref: (e) => {
                    null != e && S(e)
                  },
                  className: (0, r.A)("relative", u, "PortalSurface-LW3Uz2", v),
                  "data-theme": b,
                }),
                A ?? x.ownerDocument.body,
              )),
            (h[16] = x),
            (h[17] = A),
            (h[18] = b),
            (h[19] = v),
            (h[20] = m))
          : (m = h[20]),
        h[21] !== g || h[22] !== m
          ? ((f = (0, l.jsxs)(l.Fragment, { children: [g, m] })), (h[21] = g), (h[22] = m), (h[23] = f))
          : (f = h[23]),
        f
      )
    }
  },
  YZuZ(e, t, n) {
    var l = n("DBCl")
    let a = `${new URL(l.WaA).origin}/plugins/share`
    n.d(
      t,
      {},
      {
        I: function (e) {
          let t = (0, l.zAW)(e)
          return null != t && ((0, l.foP)(t) || t === l.hEe) ? `${a}/${e}` : null
        },
      },
    )
  },
  jgsc(e, t, n) {
    var l = n("DBCl"),
      a = n("KJ1J"),
      i = n("oszP")
    n.d(
      t,
      {},
      {
        b: function (e, t) {
          return null == e
            ? null
            : (t.find((t) => {
                if ("readTool" in t && "hosted" === t.transport.type && null != t.pluginId)
                  return (0, l.P3S)(t.pluginId, e.summary.remotePluginId ?? e.summary.id)
                let n = "hostedPluginId" in t ? (t.hostedPluginId ?? t.pluginId) : t.pluginId
                if (void 0 !== n) return n === e.summary.id
                if (null != ("readTool" in t ? t.connectorId : (0, a.Nt)(t))) return !1
                let r = (0, i.LF)(t.server)
                return e.mcpServers.some((e) => (0, i.LF)(e) === r)
              }) ?? null)
        },
      },
    )
  },
  m0u5(e, t, n) {
    var l = n("ABep"),
      a = n("QosV"),
      i = n("DBCl"),
      r = n("oyxz"),
      s = n("Ywss"),
      o = n("UtcH"),
      u = n("sPQc")
    n.d(
      t,
      {},
      {
        W: function (e) {
          let t,
            n,
            d,
            c,
            p,
            g,
            m,
            f,
            h,
            y,
            b,
            x,
            v,
            A = (0, a.c)(40),
            { editorParentHref: I, hostId: S, pluginTitle: w } = e,
            { search: k } = (0, s.zy)()
          A[0] !== I || A[1] !== w || A[2] !== k
            ? ((t = null == I && null != w && "settings" === new URLSearchParams(k).get("breadcrumb")),
              (A[0] = I),
              (A[1] = w),
              (A[2] = k),
              (A[3] = t))
            : (t = A[3])
          let j = t
          if (A[4] !== I || A[5] !== S || A[6] !== j || A[7] !== k) {
            let e,
              t = (0, i.EDN)(k)
            ;("local" !== S && t.set("hostId", S),
              (c =
                null == (d = j || null != I ? null : t.get("category"))
                  ? null
                  : (0, l.jsx)(u.E, { categorySlug: d, hostId: S })),
              (p = { pathname: "/plugins", search: t.toString() }),
              t.delete("category"))
            let a = new URLSearchParams()
            ;(t.has("hostId") && a.set("hostId", S),
              (n = o.V),
              (f = !0),
              A[15] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, l.jsx)(r.A, { id: "plugins.detail.breadcrumb.root", defaultMessage: "Plugins" })),
                  (A[15] = e))
                : (e = A[15]))
            let s = t.toString()
            ;(A[16] !== s
              ? ((g = { id: "plugins", label: e, to: { pathname: "/plugins", search: s } }), (A[16] = s), (A[17] = g))
              : (g = A[17]),
              (m = j
                ? [
                    {
                      id: "plugin-settings",
                      label: (0, l.jsx)(r.A, { id: "plugins.detail.breadcrumb.settings", defaultMessage: "Settings" }),
                      to: { pathname: "/settings/plugins-settings", search: a.toString() },
                    },
                  ]
                : []),
              (A[4] = I),
              (A[5] = S),
              (A[6] = j),
              (A[7] = k),
              (A[8] = n),
              (A[9] = d),
              (A[10] = c),
              (A[11] = p),
              (A[12] = g),
              (A[13] = m),
              (A[14] = f))
          } else ((n = A[8]), (d = A[9]), (c = A[10]), (p = A[11]), (g = A[12]), (m = A[13]), (f = A[14]))
          return (
            A[18] !== d || A[19] !== c || A[20] !== p || A[21] !== w
              ? ((h = null == d || null == w ? [] : [{ id: "plugin-category", label: c, to: p }]),
                (A[18] = d),
                (A[19] = c),
                (A[20] = p),
                (A[21] = w),
                (A[22] = h))
              : (h = A[22]),
            A[23] !== I || A[24] !== w
              ? ((y = null == I ? [] : [{ id: "plugin-detail", label: w, to: I }]),
                (A[23] = I),
                (A[24] = w),
                (A[25] = y))
              : (y = A[25]),
            A[26] !== g || A[27] !== m || A[28] !== h || A[29] !== y
              ? ((b = [g, ...m, ...h, ...y]), (A[26] = g), (A[27] = m), (A[28] = h), (A[29] = y), (A[30] = b))
              : (b = A[30]),
            A[31] !== c || A[32] !== I || A[33] !== w
              ? ((x =
                  null == I
                    ? (w ?? c)
                    : (0, l.jsx)(r.A, { id: "plugins.editor.breadcrumb.edit", defaultMessage: "Edit" })),
                (A[31] = c),
                (A[32] = I),
                (A[33] = w),
                (A[34] = x))
              : (x = A[34]),
            A[35] !== n || A[36] !== f || A[37] !== b || A[38] !== x
              ? ((v = (0, l.jsx)(n, { textSm: f, ancestors: b, current: x })),
                (A[35] = n),
                (A[36] = f),
                (A[37] = b),
                (A[38] = x),
                (A[39] = v))
              : (v = A[39]),
            v
          )
        },
      },
    )
  },
  RtaV(e, t, n) {
    n.d(t, { ManagePluginDetailPage: () => tB, PluginDetailPage: () => tP })
    var l = n("ABep"),
      a = n("QosV"),
      i = n("bTvG"),
      r = n("iRMi"),
      s = n("mfKi"),
      o = n("slpy"),
      u = n("BOYb"),
      d = n("T0Rc"),
      c = n("xSOA"),
      p = n("qmMi"),
      g = n("DBCl"),
      m = n("SqAt"),
      f = n("zd8w"),
      h = n("Qgfj"),
      y = n("Wf1j"),
      b = n("oyxz"),
      x = n("Ywss"),
      v = n("jNL7"),
      A = n("va0r"),
      I = n("Xjxo"),
      S = n("rGp2"),
      w = n("qV5G"),
      k = n("JAom"),
      j = n("LQko"),
      C = n("IBgA"),
      P = n("hOO0"),
      _ = n("HUHI"),
      M = n("pDRe"),
      E = n("uc7r"),
      T = n("yxN2"),
      N = n("OiCI"),
      O = n("eFn4"),
      U = n("UOa8"),
      R = n("iCOy"),
      L = n("OAko"),
      D = n("YWcr"),
      q = n("MX6A"),
      F = n("Sm6l"),
      z = n("bqtn"),
      W = n("Ot7V"),
      B = n("bVeK"),
      G = n("X6Vn"),
      Y = n("SGsN"),
      V = n("GKsW"),
      K = n("IIEq"),
      J = n("jWaO"),
      Q = n("eP0O"),
      X = n("yrds"),
      $ = n("rO8L"),
      H = n("Vyeu"),
      Z = n("Q8aV"),
      ee = n("TL6G"),
      et = n("MfeX"),
      en = n("Wv1R"),
      el = n("MnTr"),
      ea = n("ozCc"),
      ei = n("i7gm"),
      er = n("HOLv"),
      es = n("Bbed"),
      eo = n("yHWn"),
      eu = n("k7G6"),
      ed = n("ueue"),
      ec = n("OWtl"),
      ep = n("JzMC"),
      eg = n("a6Zv")
    let em = (0, es._)(() =>
      Promise.all([n.e(753405), n.e(212487), n.e(342905), n.e(958430)])
        .then(n.bind(n, "aYZL"))
        .then((e) => e.PersonalMcpTemplateSetupDialog),
    )
    function ef(e) {
      let t,
        n,
        i,
        r,
        s = (0, a.c)(15),
        { plugin: o, pluginName: u, setup: d, identity: c, onAccessDenied: g } = e,
        m = (0, p.gh)(ec.u),
        h = (0, x.Zp)(),
        y = (0, f.useRef)(null),
        [v, A] = (0, f.useState)(!1),
        I = (0, eg.Y)()
      s[0] !== o.summary ? ((t = (0, ed.zY)(o.summary)), (s[0] = o.summary), (s[1] = t)) : (t = s[1])
      let { logoPath: S, logoDarkPath: w } = t,
        k = !0 === I ? (w ?? S) : S
      return (
        s[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, l.jsxs)(F.$, {
              ref: y,
              "aria-haspopup": "dialog",
              color: "primary",
              focusRing: "inset",
              size: "toolbar",
              type: "button",
              onClick: () => A(!0),
              children: [(0, l.jsx)(er.I, { asset: ea.f }), (0, l.jsx)(b.A, { ...eo.H.detailInstall })],
            })),
            (s[2] = n))
          : (n = s[2]),
        s[3] !== c ||
        s[4] !== v ||
        s[5] !== k ||
        s[6] !== h ||
        s[7] !== g ||
        s[8] !== o.description ||
        s[9] !== u ||
        s[10] !== m ||
        s[11] !== d
          ? ((i = v
              ? (0, l.jsx)(ei.s, {
                  container: document.body,
                  children: (0, l.jsx)(el.C, {
                    className: "z-50",
                    children: (0, l.jsx)(em, {
                      identity: c,
                      setup: d,
                      pluginName: u,
                      pluginDescription: o.description ?? void 0,
                      logoUrl: k,
                      onAccessDenied: () => {
                        ;(m
                          .get(Y.Id)
                          .danger(
                            (0, l.jsx)(b.A, {
                              id: "plugins.personal-template.accessDenied",
                              defaultMessage: "This account doesn't have access to create a plugin from this template",
                            }),
                            { errorAnalytics: { toastId: "plugins.personal-template.accessDenied" } },
                          ),
                          g())
                      },
                      onCreated: (e) => {
                        m.get(N.tT) === c.accountId && (A(!1), (0, ep.Zi)(m.queryClient).catch(eh), (0, eu.Uz)(e, h))
                      },
                      onClose: () => {
                        ;(A(!1), y.current?.focus())
                      },
                    }),
                  }),
                })
              : null),
            (s[3] = c),
            (s[4] = v),
            (s[5] = k),
            (s[6] = h),
            (s[7] = g),
            (s[8] = o.description),
            (s[9] = u),
            (s[10] = m),
            (s[11] = d),
            (s[12] = i))
          : (i = s[12]),
        s[13] !== i ? ((r = (0, l.jsxs)(l.Fragment, { children: [n, i] })), (s[13] = i), (s[14] = r)) : (r = s[14]),
        r
      )
    }
    function eh() {}
    var ey = n("WU1E"),
      eb = n("Sqyk"),
      ex = n("IVVU"),
      ev = n("dl7n"),
      eA = n("ygu7"),
      eI = n("EEop"),
      eS = n("YjEp"),
      ew = n("G5ZH"),
      ek = n("jaeI"),
      ej = n("sIYF"),
      eC = n("DG58")
    function eP(e) {
      let t,
        n = (0, a.c)(3),
        { account: i } = e
      if (i?.structure === "personal") {
        let e
        return (
          n[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)(b.A, { ...(0, eC.h)("plan_not_eligible") })), (n[0] = e))
            : (e = n[0]),
          e
        )
      }
      let r = i?.account_user_role === "account-admin" || i?.account_user_role === "account-owner"
      return (
        n[1] !== r
          ? ((t = r
              ? (0, l.jsx)(b.A, {
                  id: "plugins.detail.template.disabled.tooltip.admin",
                  defaultMessage: "Set up the plugin in Admin Console.",
                })
              : (0, l.jsx)(b.A, {
                  id: "plugins.detail.template.disabled.tooltip.user",
                  defaultMessage: "Contact your admin to set up the plugin for your workspace.",
                })),
            (n[1] = r),
            (n[2] = t))
          : (t = n[2]),
        t
      )
    }
    var e_ = n("gBBC"),
      eM = n("vLsY"),
      eE = n("B81s"),
      eT = n("sLlu"),
      eN = n("ndjw"),
      eO = n("ecE5"),
      eU = n("vNmV"),
      eR = n("z8Ld"),
      eL = n("oiUH"),
      eD = n("AN2V"),
      eq = n("fnPc"),
      eF = n("kfGJ"),
      ez = n("pasN"),
      eW = n("UBJK"),
      eB = n("XvU9"),
      eG = n("hZax"),
      eY = n("nvO1"),
      eV = n("aepO"),
      eK = n("WFY2"),
      eJ = n("rvFo"),
      eQ = n("kK7d"),
      eX = n("b6vo"),
      e$ = n("joT6"),
      eH = n("YZuZ"),
      eZ = n("SaEY"),
      e0 = n("jgsc"),
      e1 = n("a0aG"),
      e2 = n("XJRE"),
      e3 = n("loz7"),
      e5 = n("OFY7"),
      e4 = n("Y1iR"),
      e6 = n("ndO4"),
      e7 = n("Yewb"),
      e8 = n("d635"),
      e9 = n("ZqLP"),
      te = n("JXcQ"),
      tt = n("m0u5"),
      tn = n("PSs4"),
      tl = n("CWb6"),
      ta = n("oszP"),
      ti = n("jEyg"),
      tr = n("JZ8t"),
      ts = n("Hi2y"),
      to = n("R4kT"),
      tu = n("nMfq"),
      td = n("tlx5"),
      tc = n("v70x"),
      tp = n("yLkT"),
      tg = n("m15V"),
      tm = n("z0fI"),
      tf = n("iJ7F"),
      th = n("MM0V")
    function ty(e) {
      let t,
        n,
        i,
        r,
        s,
        u,
        d,
        c,
        g,
        m = (0, a.c)(26),
        { accountAndPlugin: f, onEdit: h, editDisabledTooltip: x, isLoadingEdit: v, shareAction: A } = e,
        I = void 0 !== v && v,
        S = (0, p.gh)(ec.u),
        w = (0, y.A)(),
        k = (0, p._U)(tg.v, f ?? ""),
        j = null != x || void 0,
        C = I || null != x
      ;(m[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, l.jsx)(b.A, { ...tb.edit })), (m[0] = t))
        : (t = m[0]),
        m[1] !== I || m[2] !== h || m[3] !== j || m[4] !== C
          ? ((n = (0, l.jsx)(F.$, {
              className: "shrink-0",
              "aria-hidden": j,
              color: "primary",
              disabled: C,
              loading: I,
              size: "dialog",
              onClick: h,
              children: t,
            })),
            (m[1] = I),
            (m[2] = h),
            (m[3] = j),
            (m[4] = C),
            (m[5] = n))
          : (n = m[5]))
      let P = n
      return (
        m[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, l.jsx)(er.I, { asset: tp.k, className: "text-secondary" })), (m[6] = i))
          : (i = m[6]),
        m[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, l.jsx)(b.A, {
              id: "plugins.migration.editBanner.title",
              defaultMessage: "Your plugin was successfully migrated",
            })),
            (m[7] = r))
          : (r = m[7]),
        m[8] !== A
          ? ((s =
              null == A
                ? (0, l.jsx)(b.A, {
                    id: "plugins.migration.editBanner.descriptionWithoutSharing",
                    defaultMessage: "Review and test your migrated plugin",
                  })
                : (0, l.jsx)(b.A, {
                    id: "plugins.migration.editBanner.description",
                    defaultMessage: "Review and test your migrated plugin, then share it when you\u2019re ready",
                  })),
            (m[8] = A),
            (m[9] = s))
          : (s = m[9]),
        m[10] !== P || m[11] !== x || m[12] !== w || m[13] !== h || m[14] !== A
          ? ((u =
              null == h && null == A
                ? void 0
                : (0, l.jsxs)(l.Fragment, {
                    children: [
                      null != h &&
                        (null == x
                          ? P
                          : (0, l.jsx)(o.m, {
                              content: x,
                              children: (0, l.jsx)("span", {
                                className: "inline-flex",
                                "aria-disabled": "true",
                                "aria-label": w.formatMessage(tb.edit),
                                role: "button",
                                tabIndex: 0,
                                children: P,
                              }),
                            })),
                      A,
                    ],
                  })),
            (m[10] = P),
            (m[11] = x),
            (m[12] = w),
            (m[13] = h),
            (m[14] = A),
            (m[15] = u))
          : (u = m[15]),
        m[16] !== s || m[17] !== u
          ? ((d = (0, l.jsx)(th.l, {
              variant: "announcement",
              icon: i,
              stackOnNarrow: !0,
              wrapCtas: !0,
              title: r,
              content: s,
              customCtas: u,
            })),
            (m[16] = s),
            (m[17] = u),
            (m[18] = d))
          : (d = m[18]),
        m[19] !== f || m[20] !== S || m[21] !== k
          ? ((c =
              null != k && (k.failedFiles.length > 0 || k.skippedFiles.length > 0)
                ? (0, l.jsxs)(l.Fragment, {
                    children: [
                      k.failedFiles.length > 0
                        ? (0, l.jsx)(tm.Z, { failedFiles: k.failedFiles, files: k.files, migrationSucceeded: !0 })
                        : null,
                      k.skippedFiles.length > 0 ? (0, l.jsx)(tf.G, { count: k.skippedFiles.length }) : null,
                      (0, l.jsx)(F.$, {
                        className: "self-start",
                        color: "ghost",
                        size: "actionSm",
                        onClick: () => S.set(tg.v, f ?? "", null),
                        children: (0, l.jsx)(b.A, {
                          id: "plugins.migration.dismissCopyWarnings",
                          defaultMessage: "Dismiss migration warnings",
                        }),
                      }),
                    ],
                  })
                : null),
            (m[19] = f),
            (m[20] = S),
            (m[21] = k),
            (m[22] = c))
          : (c = m[22]),
        m[23] !== d || m[24] !== c
          ? ((g = (0, l.jsxs)("div", { className: "flex flex-col gap-3", children: [d, c] })),
            (m[23] = d),
            (m[24] = c),
            (m[25] = g))
          : (g = m[25]),
        g
      )
    }
    let tb = (0, h.YK)({ edit: { id: "plugins.detail.edit", defaultMessage: "Edit plugin" } })
    var tx = n("H7Ld"),
      tv = n("r1BE"),
      tA = n("mYWF"),
      tI = n("dgqS"),
      tS = n("YuLS"),
      tw = n("Ee6v"),
      tk = n("ugfi"),
      tj = n("KtvL")
    let tC = (0, h.YK)({
      pageTitleFallback: { id: "plugins.detail.pageTitleFallback", defaultMessage: "Plugin" },
      browserLoadingTitle: { id: "plugins.detail.documentTitleLoading", defaultMessage: "ChatGPT Plugins" },
      browserTitle: { id: "plugins.detail.documentTitle", defaultMessage: "{pluginName} | ChatGPT Plugins" },
      shareNotSharedTooltip: { id: "plugins.detail.shareNotSharedTooltip", defaultMessage: "Not shared" },
      shareSharedTooltip: { id: "plugins.detail.shareSharedTooltip", defaultMessage: "Shared" },
      shareInvitedTooltip: { id: "plugins.detail.shareInvitedTooltip", defaultMessage: "Only those invited" },
      shareWorkspaceTooltip: {
        id: "plugins.detail.shareWorkspaceTooltip",
        defaultMessage: "Anyone at workspace with the link",
      },
      shareCreatedPluginsOnlyTooltip: {
        id: "plugins.detail.shareCreatedPluginsOnlyTooltip",
        defaultMessage: "Only plugins you created can be shared",
      },
      shareLocalCopyRequiredTooltip: {
        id: "plugins.detail.shareLocalCopyRequiredTooltip",
        defaultMessage: "Sharing can only be edited when you have a local copy",
      },
      missingFromCurrentMarketplaces: {
        id: "plugins.detail.missingFromCurrentMarketplaces",
        defaultMessage: "This plugin is not available in your current plugin marketplaces",
      },
    })
    function tP(e) {
      let t,
        n,
        h,
        el,
        ea,
        ei,
        er,
        es,
        eo,
        ep,
        eg,
        em,
        eh,
        eC,
        eK,
        tp,
        tg,
        tm,
        tf,
        th,
        tb,
        tP,
        tB,
        tV,
        tK,
        tJ,
        tQ,
        tX,
        t$,
        tH,
        tZ,
        t0,
        t1,
        t2,
        t3,
        t5,
        t4,
        t6,
        t7,
        t8,
        t9,
        ne,
        nt,
        nn,
        nl,
        na,
        ni,
        nr,
        ns,
        no,
        nu,
        nd,
        nc,
        np,
        ng,
        nm,
        nf,
        nh,
        ny,
        nb,
        nx,
        nv,
        nA,
        nI,
        nS,
        nw,
        nk,
        nj,
        nC,
        nP,
        n_,
        nM,
        nE,
        nT,
        nN,
        nO,
        nU,
        nR,
        nL,
        nD,
        nq,
        nF,
        nz,
        nW,
        nB,
        nG,
        nY,
        nV,
        nK,
        nJ,
        nQ,
        nX,
        n$,
        nH,
        nZ,
        n0,
        n1,
        n2,
        n3,
        n5,
        n4,
        n6,
        n7,
        n8,
        n9,
        le,
        lt,
        ln,
        ll,
        la,
        li,
        lr,
        ls,
        lo,
        lu,
        ld,
        lc,
        lp,
        lg,
        lm,
        lf,
        lh,
        ly,
        lb,
        lx,
        lv,
        lA,
        lI,
        lS,
        lw,
        lk,
        lj,
        lC,
        lP,
        l_,
        lM,
        lE,
        lT,
        lN,
        lO,
        lU,
        lR,
        lL,
        lD,
        lq,
        lF,
        lz = (0, a.c)(891)
      lz[0] !== e ? ((t = void 0 === e ? {} : e), (lz[0] = e), (lz[1] = t)) : (t = lz[1])
      let {
          allowUniqueNameFallback: lW,
          hostId: lB,
          pluginName: lG,
          marketplacePath: lY,
          productEventContext: lV,
          remoteMarketplaceName: lK,
          onBeforeOpenInstall: lJ,
          onPluginActivationComplete: lQ,
          presentation: lX,
        } = t,
        l$ = void 0 !== lW && lW,
        lH = void 0 === lX ? "page" : lX,
        lZ = (0, p.gh)(ec.u),
        l0 = (0, x.zy)(),
        l1 = (0, y.A)(),
        { accountId: l2, userId: l3 } = (0, U.As)(),
        l5 = (0, p.Ul)(N.Sk)
      lz[2] === Symbol.for("react.memo_cache_sentinel") ? ((n = { preview: !1 }), (lz[2] = n)) : (n = lz[2])
      let { data: l4, isLoading: l6, isError: l7 } = (0, L.YL)(void 0, n),
        { pluginId: l8 } = (0, x.g)(),
        l9 = (0, x.Zp)(),
        ae = (0, Z.p8)(),
        { setSelectedHostId: at } = (0, eq.D8)(),
        an = (0, eT.B)(),
        [al, aa] = (0, f.useState)(null),
        [ai, ar] = (0, f.useState)(!1),
        [as, ao] = (0, f.useState)(null),
        [au, ad] = (0, f.useState)(null),
        ac = (0, ti.uG)(l0.search)
      lz[3] !== l0.search || lz[4] !== lY || lz[5] !== lG || lz[6] !== lK || lz[7] !== l8
        ? ((h = null != l8 && null == lG && null == lY && null == lK ? (0, ti.eU)(l0.search) : null),
          (lz[3] = l0.search),
          (lz[4] = lY),
          (lz[5] = lG),
          (lz[6] = lK),
          (lz[7] = l8),
          (lz[8] = h))
        : (h = lz[8])
      let ap = h
      lz[9] !== ap || lz[10] !== l0.state || lz[11] !== lV
        ? ((el = lV ?? (0, ti.xP)(l0.state, null != ap)),
          (lz[9] = ap),
          (lz[10] = l0.state),
          (lz[11] = lV),
          (lz[12] = el))
        : (el = lz[12])
      let ag = el
      lz[13] !== ag.source || lz[14] !== lZ
        ? ((ea = () => ({
            chatgpt: (0, eb.F)(lZ, i.do.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_DETAILS),
            source: ag.source,
            surface: r.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_DETAILS,
          })),
          (lz[13] = ag.source),
          (lz[14] = lZ),
          (lz[15] = ea))
        : (ea = lz[15])
      let am = ea
      lz[16] !== l0.state ? ((ei = (0, ti.Ql)(l0.state)), (lz[16] = l0.state), (lz[17] = ei)) : (ei = lz[17])
      let af = ei,
        ah = null != af || null != ap,
        ay = (0, p.Ul)(O.lN)
      lz[18] !== ap || lz[19] !== l0.state
        ? ((er = null != ap || (0, ti.HF)(l0.state)), (lz[18] = ap), (lz[19] = l0.state), (lz[20] = er))
        : (er = lz[20])
      let ab = er,
        ax = (0, f.useRef)(null),
        av = (0, f.useRef)(null)
      ;(lz[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((es = () => () => ax.current?.abort()), (lz[21] = es))
        : (es = lz[21]),
        lz[22] !== l2 || lz[23] !== lB || lz[24] !== l0.key || lz[25] !== l3
          ? ((eo = [l0.key, l2, l3, lB]), (lz[22] = l2), (lz[23] = lB), (lz[24] = l0.key), (lz[25] = l3), (lz[26] = eo))
          : (eo = lz[26]),
        (0, f.useEffect)(es, eo),
        lz[27] !== l0.state ? ((ep = (0, ti.av)(l0.state)), (lz[27] = l0.state), (lz[28] = ep)) : (ep = lz[28]))
      let aA = ep,
        aI = l0.key,
        [aS, aw] = (0, f.useState)(ah ? null : aI),
        ak = !ah || aS === aI,
        aj = (0, f.useRef)(null),
        aC = (0, f.useRef)(null)
      ;(0, f.useRef)(null)
      let aP = lB ?? ac?.hostId ?? eF.fI,
        a_ = (0, p._U)(tr.V, aP),
        aM = (0, p.Ul)(en.bN)
      lz[29] !== aP ? ((eg = { hostId: aP }), (lz[29] = aP), (lz[30] = eg)) : (eg = lz[30])
      let aE = (0, $.J)(eg)
      lz[31] !== aP ? ((em = { hostId: aP }), (lz[31] = aP), (lz[32] = em)) : (em = lz[32])
      let aT = (0, R.m)(em),
        aN = null == l8 || 0 === l8.length ? null : l8,
        {
          directMarketplacePath: aO,
          directPluginName: aU,
          directRemoteMarketplaceName: aR,
        } = (0, ti.Nj)({
          hostId: aP,
          requestedPluginId: aN,
          explicitMarketplacePath: lY,
          explicitPluginName: lG,
          explicitRemoteMarketplaceName: lK,
          routeParams: ac,
        })
      lz[33] !== aN ? ((eh = null != aN && (0, g.Uap)(aN) ? aN : null), (lz[33] = aN), (lz[34] = eh)) : (eh = lz[34])
      let aL = eh,
        aD = null != aN && (null == aU || (null == aO && null == aR)),
        aq = aD && aE,
        aF = (0, p.Ul)(ex.qk)
      lz[35] !== aP || lz[36] !== aq
        ? ((eC = { enabled: aq, hostId: aP }), (lz[35] = aP), (lz[36] = aq), (lz[37] = eC))
        : (eC = lz[37])
      let az = (0, K.H)(eC)
      lz[38] !== aP || lz[39] !== aq
        ? ((eK = { enabled: aq, hostId: aP }), (lz[38] = aP), (lz[39] = aq), (lz[40] = eK))
        : (eK = lz[40])
      let aW = (0, X.I)(eK)
      lz[41] !== aP || lz[42] !== aq
        ? ((tp = { enabled: aq, hostId: aP }), (lz[41] = aP), (lz[42] = aq), (lz[43] = tp))
        : (tp = lz[43])
      let aB = (0, J.J)(tp)
      lz[44] !== az || lz[45] !== aP
        ? ((tg = { computerUseAvailability: az, hostId: aP }), (lz[44] = az), (lz[45] = aP), (lz[46] = tg))
        : (tg = lz[46])
      let aG = (0, H.l)(tg)
      lz[47] !== az || lz[48] !== aB || lz[49] !== aF || lz[50] !== aW || lz[51] !== aG
        ? ((tm = (e) =>
            null == e || aF.includes(e.plugin.id)
              ? null
              : ((0, ed.PM)({
                  plugins: [e],
                  isComputerUseAvailable: az.available,
                  isInAppBrowserUseAvailable: aW.available,
                  isExternalBrowserUseAvailable: aB.available,
                  isMessagesAvailable: aG.available,
                })[0] ?? null)),
          (lz[47] = az),
          (lz[48] = aB),
          (lz[49] = aF),
          (lz[50] = aW),
          (lz[51] = aG),
          (lz[52] = tm))
        : (tm = lz[52])
      let aY = tm
      ;(lz[53] !== l$ || lz[54] !== aP || lz[55] !== aN
        ? ((tf = { hostId: aP, pluginId: aN, allowUniqueNameFallback: l$, productContext: "catalog" }),
          (lz[53] = l$),
          (lz[54] = aP),
          (lz[55] = aN),
          (lz[56] = tf))
        : (tf = lz[56]),
        lz[57] !== aq ? ((th = { enabled: aq }), (lz[57] = aq), (lz[58] = th)) : (th = lz[58]))
      let { data: aV, error: aK, isFetching: aJ, isLoading: aQ, refetch: aX } = (0, p._U)(ew.I, tf, th),
        a$ = aK?.message ?? null,
        aH = aJ || az.isFetching,
        aZ = aQ || az.isLoading || aW.isLoading || aB.isLoading || aG.isLoading,
        a0 = null
      aD && null != aN && (a0 = aY(aV))
      let a1 = null != aL && !aH && !aZ && null == a0,
        a2 = null == a0 ? null : (0, m.JO)(a0),
        a3 = aO ?? a0?.marketplacePath ?? null,
        a5 = aU ?? a2 ?? (a1 ? aL : null),
        a4 = aR ?? a0?.remoteMarketplaceName ?? (a1 ? g.vT_ : null),
        a6 = null != aN && au === aN,
        a7 = aD && null == aL && null != aN && null == a$ && !aZ && null == a0 && !a6
      lz[59] !== aY || lz[60] !== aX
        ? ((tb = async () => null != aY((await aX()).data)), (lz[59] = aY), (lz[60] = aX), (lz[61] = tb))
        : (tb = lz[61])
      let a8 = (0, f.useEffectEvent)(tb),
        a9 = (0, p.Ul)(eN.Gt),
        ie = (0, p.Ul)(eN.lo),
        it = (0, p.Ul)(eN.Gv)
      lz[62] !== it || lz[63] !== a9
        ? ((tP = a9?.type === "local" ? (it[a9.projectId]?.rootPaths ?? []) : []),
          (lz[62] = it),
          (lz[63] = a9),
          (lz[64] = tP))
        : (tP = lz[64])
      let il = tP
      lz[65] !== a9 ? ((tB = (0, e_.QO)(a9)), (lz[65] = a9), (lz[66] = tB)) : (tB = lz[66])
      let ia = tB,
        { markSkillsUpdated: ii, skills: ir, workspaceRoots: is } = (0, eB.Cy)(aP)
      lz[67] !== aP ? ((tV = { hostId: aP }), (lz[67] = aP), (lz[68] = tV)) : (tV = lz[68])
      let { isPending: io, isPlaceholderData: iu } = (0, p._U)(eN.FM, tV)
      ;(lz[69] !== is ? ((tK = (0, g.ycq)(is)), (lz[69] = is), (lz[70] = tK)) : (tK = lz[70]),
        lz[71] !== aP
          ? ((tJ = { hostId: aP, useActiveWorkspaceRoot: !1 }), (lz[71] = aP), (lz[72] = tJ))
          : (tJ = lz[72]))
      let { data: id } = (0, eE.oJ)(tK, tJ),
        ic = aP === eF.fI
      lz[73] !== io || lz[74] !== iu || lz[75] !== aP || lz[76] !== ie || lz[77] !== ic || lz[78] !== is
        ? ((tQ = (0, I.K)({
            hostId: aP,
            isLocalHost: ic,
            selectedRemoteProject: ie,
            workspaceRoots: is,
            areWorkspaceRootsPending: io,
            isPlaceholderData: iu,
          })),
          (lz[73] = io),
          (lz[74] = iu),
          (lz[75] = aP),
          (lz[76] = ie),
          (lz[77] = ic),
          (lz[78] = is),
          (lz[79] = tQ))
        : (tQ = lz[79])
      let { cwd: ip, isPending: ig } = tQ,
        im = aP === eF.fI ? "fallback-to-workspace" : "preserve-null",
        ih = !ig
      lz[80] !== aP || lz[81] !== im || lz[82] !== ih
        ? ((tX = { hostId: aP, cwdMode: im, enabled: ih }), (lz[80] = aP), (lz[81] = im), (lz[82] = ih), (lz[83] = tX))
        : (tX = lz[83])
      let { data: iy, isError: ib, isPending: ix } = (0, eE.PG)(ip, tX),
        iv = ig || ix,
        iA = iv || ib ? void 0 : iy,
        {
          canonicalAppId: iI,
          errorMessage: iS,
          hostedPlugin: iw,
          localPluginEditMetadata: ik,
          ownership: ij,
          pluginScope: iC,
          sourceGizmoId: iP,
          isLoading: i_,
          isTemplate: iM,
          isV2Template: iE,
          isTemplateInstance: iT,
          personalMcpTemplateSetup: iN,
          plugin: iO,
          setupEligibleAppTemplateIds: iU,
          serviceAppTemplates: iR,
          mcpAppIdsByServerKey: iL,
          servicePlugin: iD,
          refetch: iq,
          requiresLocalExecutor: iF,
        } = (0, eI.MI)({
          hostId: aP,
          marketplacePath: a3,
          pluginName: a5,
          remoteMarketplaceName: a4,
          prefetchAppsForUserId: l3,
          productContext: "catalog",
        }),
        iz = iw ?? ik,
        iW = !l6 && !l7 && l4?.id === l2,
        iB = iW && l4?.structure === "personal",
        iG = iW && l4?.structure === "workspace",
        iY = iM && iG,
        iV = iM && !iB && !iY
      lz[84] !== iO
        ? ((t$ = (iO?.apps.length ?? 0) > 0 || iO?.appTemplates.some(tW) === !0), (lz[84] = iO), (lz[85] = t$))
        : (t$ = lz[85])
      let iK = t$
      lz[86] !== iO?.appTemplates || lz[87] !== iO?.appTemplates.some || lz[88] !== iU
        ? ((tH = iO?.appTemplates.some((e) => 0 === e.materializedAppIds.length && iU?.has(e.templateId) === !0)),
          (lz[86] = iO?.appTemplates),
          (lz[87] = iO?.appTemplates.some),
          (lz[88] = iU),
          (lz[89] = tH))
        : (tH = lz[89])
      let iJ = !0 === tH,
        iQ = iE && iB,
        iX = iY && !1,
        i$ = iD?.id ?? null
      lz[90] !== l2 || lz[91] !== lZ || lz[92] !== i$
        ? ((tZ = (0, eI.fU)(lZ, l2, i$)), (lz[90] = l2), (lz[91] = lZ), (lz[92] = i$), (lz[93] = tZ))
        : (tZ = lz[93])
      let iH = iX && null != l2
      lz[94] !== tZ || lz[95] !== iH
        ? ((t0 = { ...tZ, enabled: iH, staleTime: eJ.D.FIVE_MINUTES }), (lz[94] = tZ), (lz[95] = iH), (lz[96] = t0))
        : (t0 = lz[96])
      let { data: iZ, isError: i0, isLoading: i1 } = (0, d.I)(t0),
        i2 = iO?.summary.remotePluginId ?? iO?.summary.shareContext?.remotePluginId,
        i3 =
          (0, M.el)(aP) &&
          iO?.summary.installed &&
          iO.summary.enabled &&
          "AVAILABLE" === iO.summary.availability &&
          null == iO.summary.disabledReason
            ? iI
            : null
      lz[97] !== aP || lz[98] !== iO || lz[99] !== i3
        ? ((t1 = { hostId: aP, plugin: iO, noAuthCanonicalAppId: i3 }),
          (lz[97] = aP),
          (lz[98] = iO),
          (lz[99] = i3),
          (lz[100] = t1))
        : (t1 = lz[100])
      let {
          apps: i5,
          appTemplates: i4,
          connections: i6,
          links: i7,
          directoryApps: i8,
          hasConnectionData: i9,
          hasMultipleConnectedAccounts: re,
          showInPluginAppList: rt,
          availability: rn,
          error: rl,
          isLoading: ra,
          refresh: ri,
        } = (0, tj.s)(t1),
        {
          blockedReasonsByConnectorId: rr,
          blockedReason: rs,
          hasConnectorAvailabilityError: ro,
          isConnectorAvailabilityLoading: ru,
          isLoading: rd,
        } = rn,
        rc = iE || iT,
        rp = aP === eF.fI ? il : []
      lz[101] !== iO || lz[102] !== rp || lz[103] !== is
        ? ((t2 = (0, eU.RS)(iO, is, rp)), (lz[101] = iO), (lz[102] = rp), (lz[103] = is), (lz[104] = t2))
        : (t2 = lz[104])
      let rg = t2
      lz[105] !== rg || lz[106] !== aP
        ? ((t3 = { hostId: aP, cwds: rg }), (lz[105] = rg), (lz[106] = aP), (lz[107] = t3))
        : (t3 = lz[107])
      let { data: rm } = (0, p._U)(eL.I4, t3),
        rf = (0, p._U)(eL.gO, aP),
        rh = rm?.data
      lz[108] !== iO || lz[109] !== rh
        ? ((t5 = (0, eU.Ab)(rh, iO)), (lz[108] = iO), (lz[109] = rh), (lz[110] = t5))
        : (t5 = lz[110])
      let ry = t5,
        { installPlugin: rb, showPluginInstallDetails: rx, status: rv, uninstalling: rA } = (0, e7.XY)(),
        rI = (0, f.useRef)(null),
        [rS, rw] = (0, f.useState)(!1)
      lz[111] !== l2 || lz[112] !== an
        ? ((t4 = async () => {}), (lz[111] = l2), (lz[112] = an), (lz[113] = t4))
        : (t4 = lz[113])
      let rk = t4
      lz[114] !== rk || lz[115] !== an || lz[116] !== lQ || lz[117] !== ri
        ? ((t6 = async () => {
            ;(await Promise.all([ri(), tY({ invalidateQueriesAndBroadcast: an }), rk()]), await lQ?.())
          }),
          (lz[114] = rk),
          (lz[115] = an),
          (lz[116] = lQ),
          (lz[117] = ri),
          (lz[118] = t6))
        : (t6 = lz[118])
      let rj = t6,
        rC = (0, f.useRef)(null)
      lz[119] !== ri || lz[120] !== lZ.queryClient
        ? ((t7 = () => {
            rC.current?.()
            let e = !1,
              t = () => window.removeEventListener("focus", n),
              n = () => {
                e ||
                  ((e = !0),
                  Promise.all([
                    ri({ force: !0 }),
                    lZ.queryClient.invalidateQueries({ queryKey: ed.qw }, { throwOnError: !0 }),
                  ]).then(
                    () => {
                      ;((0, eM.G)(ed.qw), t())
                    },
                    () => {
                      e = !1
                    },
                  ))
              }
            ;(window.addEventListener("focus", n), (rC.current = t))
          }),
          (lz[119] = ri),
          (lz[120] = lZ.queryClient),
          (lz[121] = t7))
        : (t7 = lz[121])
      let rP = t7
      ;(lz[122] === Symbol.for("react.memo_cache_sentinel")
        ? ((t8 = () => () => {
            ;(rC.current?.(), (rC.current = null))
          }),
          (lz[122] = t8))
        : (t8 = lz[122]),
        lz[123] !== l2 || lz[124] !== aP || lz[125] !== i2
          ? ((t9 = [l2, aP, i2]), (lz[123] = l2), (lz[124] = aP), (lz[125] = i2), (lz[126] = t9))
          : (t9 = lz[126]),
        (0, f.useEffect)(t8, t9),
        lz[127] !== l1 || lz[128] !== rk || lz[129] !== an || lz[130] !== ri || lz[131] !== lZ
          ? ((ne = async (e, t) => {
              ;(lZ
                .get(Y.Id)
                .success(
                  l1.formatMessage({ id: "plugins.detail.appDisconnected", defaultMessage: "App disconnected" }),
                ),
                (
                  await Promise.allSettled([
                    ri().then(() => an(_.Xr)),
                    tY({ invalidateQueriesAndBroadcast: an }),
                    an((0, _.qS)(t.id).queryKey),
                    an(E.RJ),
                    rk(),
                  ])
                ).some(tF) &&
                  lZ
                    .get(Y.Id)
                    .danger(
                      l1.formatMessage({
                        id: "plugins.detail.appDisconnectRefreshError",
                        defaultMessage: "App disconnected, but couldn't refresh apps",
                      }),
                      { errorAnalytics: { toastId: "plugins.detail.appDisconnectRefreshError" } },
                    ))
            }),
            (lz[127] = l1),
            (lz[128] = rk),
            (lz[129] = an),
            (lz[130] = ri),
            (lz[131] = lZ),
            (lz[132] = ne))
          : (ne = lz[132]),
        lz[133] !== l1 || lz[134] !== lZ
          ? ((nt = () => {
              lZ.get(Y.Id).danger(
                l1.formatMessage({
                  id: "plugins.detail.appDisconnectError",
                  defaultMessage: "Couldn't disconnect app",
                }),
                { errorAnalytics: { toastId: "plugins.detail.appDisconnectError" } },
              )
            }),
            (lz[133] = l1),
            (lz[134] = lZ),
            (lz[135] = nt))
          : (nt = lz[135]),
        lz[136] !== ne || lz[137] !== nt
          ? ((nn = { mutationFn: tz, onSuccess: ne, onError: nt }), (lz[136] = ne), (lz[137] = nt), (lz[138] = nn))
          : (nn = lz[138]))
      let r_ = (0, c.n)(nn)
      lz[139] !== an || lz[140] !== iq
        ? ((nl = async () => {
            await tY({ invalidateQueriesAndBroadcast: an, refetchPluginDetail: iq })
          }),
          (lz[139] = an),
          (lz[140] = iq),
          (lz[141] = nl))
        : (nl = lz[141])
      let rM = (0, f.useEffectEvent)(nl)
      ;(0, f.useEffect)(() => {
        if (!ah || null == a5 || (null == a3 && null == a4)) return
        let e = !1
        return (
          rM()
            .finally(() => {
              e || aw(aI)
            })
            .catch(tq),
          () => {
            e = !0
          }
        )
      }, [a3, aI, a5, a4, ah])
      let rE = (0, eG.Zj)("1269116100"),
        rT = (0, eG.Zj)("2160578039"),
        rN = (0, eG.Zj)("1663164947"),
        rO = (0, eG.Zj)(e9.c5),
        rU = (iz?.source_gizmo_id != null || iz?.discoverability === "PRIVATE") && null == iz.canonical_app_id,
        rR =
          iz?.creator_account_user_id != null &&
          iz.creator_account_user_id === ("USER" === iz.scope ? l3 : l4?.account_user_id)
      lz[142] !== l4 || lz[143] !== iz || lz[144] !== l3
        ? ((na = null != iz && null != l4 && (0, e9.PH)({ plugin: iz, account: l4, userId: l3 })),
          (lz[142] = l4),
          (lz[143] = iz),
          (lz[144] = l3),
          (lz[145] = na))
        : (na = lz[145])
      let rL = na
      ;(lz[146] !== l4?.id || lz[147] !== l2 || lz[148] !== rU || lz[149] !== rN || lz[150] !== iz || lz[151] !== iO
        ? ((ni = rN && rU && l4?.id === l2 && null != iO ? { accountId: l2, pluginId: iz.id } : null),
          (lz[146] = l4?.id),
          (lz[147] = l2),
          (lz[148] = rU),
          (lz[149] = rN),
          (lz[150] = iz),
          (lz[151] = iO),
          (lz[152] = ni))
        : (ni = lz[152]),
        lz[153] === Symbol.for("react.memo_cache_sentinel") ? ((nr = { enabled: !1 }), (lz[153] = nr)) : (nr = lz[153]))
      let rD = (0, p._U)(eS.AC, ni, nr),
        rq = rN && rU && l4?.id === l2 && (rL || "editable" === rD) && null != iO,
        rF = (0, ek.l)(l4, (0, eG.Zj)("1355972088")),
        { data: rz } = (0, p._U)(O.Jk, l2 ?? "", {
          enabled:
            (iz?.source_gizmo_id != null || iz?.discoverability === "PRIVATE") &&
            l4?.structure === "workspace" &&
            l4.id === l2 &&
            rF,
        }),
        rW = l4?.structure === "workspace" && (0, ek.J)(l4, rF, rz?.permissions),
        rB =
          rq && rL && "WORKSPACE" === iz.scope && iz.workspace_id === l2 && l4?.structure === "workspace" && rW
            ? iz.id
            : null
      lz[154] !== l2 || lz[155] !== rR || lz[156] !== rB
        ? ((ns = ["plugins", "edit-source", l2, rB, rR]),
          (lz[154] = l2),
          (lz[155] = rR),
          (lz[156] = rB),
          (lz[157] = ns))
        : (ns = lz[157])
      let rG = null != rB && null != l2
      ;(lz[158] !== l2 || lz[159] !== rR || lz[160] !== rB
        ? ((no = async (e) => {
            let { signal: t } = e
            if (null == rB || null == l2) throw Error("Plugin source metadata requires an account and plugin")
            return rR
              ? (0, e8.nF)(rB, l2, t)
              : eQ.CodexRequest.safeGet("/ps/plugins/admin/{plugin_id}", {
                  surface: "plugin_management",
                  additionalHeaders: { "ChatGPT-Account-Id": l2, [S.ok]: "ADMIN_SETTING" },
                  parameters: { path: { plugin_id: rB } },
                  signal: t,
                  expectedErrorStatuses: [403, 404],
                })
          }),
          (lz[158] = l2),
          (lz[159] = rR),
          (lz[160] = rB),
          (lz[161] = no))
        : (no = lz[161]),
        lz[162] !== ns || lz[163] !== rG || lz[164] !== no
          ? ((nu = { queryKey: ns, enabled: rG, queryFn: no, staleTime: eJ.D.ONE_MINUTE, retry: !1 }),
            (lz[162] = ns),
            (lz[163] = rG),
            (lz[164] = no),
            (lz[165] = nu))
          : (nu = lz[165]))
      let { data: rY, error: rV } = (0, d.I)(nu),
        rK = "source-managed" === rD || rY?.can_refresh_from_source === !0,
        rJ = rq && l4?.structure === "workspace" && l4.id === l2 && ("WORKSPACE" !== iz.scope || rW) ? l2 : null
      lz[166] !== rJ
        ? ((nd = (0, eA.cO)("connector_openai_plugin_creator", rJ)), (lz[166] = rJ), (lz[167] = nd))
        : (nd = lz[167])
      let { data: rQ } = (0, d.I)(nd),
        rX =
          l4?.structure === "workspace" &&
          (rQ?.plugin?.disabled_reason === "disabled_by_admin" ||
            (rQ?.plugin?.disabled_reason == null && rQ?.plugin?.status === "DISABLED_BY_ADMIN"))
      lz[168] !== l1 || lz[169] !== rX
        ? ((nc = rX
            ? l1.formatMessage({
                id: "plugins.detail.editDisabledByAdmin",
                defaultMessage: "The Plugin Creator plugin is disabled by your workspace admin",
              })
            : void 0),
          (lz[168] = l1),
          (lz[169] = rX),
          (lz[170] = nc))
        : (nc = lz[170])
      let r$ = nc
      lz[171] === Symbol.for("react.memo_cache_sentinel")
        ? ((np = () => () => rI.current?.abort()), (lz[171] = np))
        : (np = lz[171])
      let rH = iz?.id
      ;(lz[172] !== l2 ||
      lz[173] !== rW ||
      lz[174] !== rq ||
      lz[175] !== rX ||
      lz[176] !== rK ||
      lz[177] !== l0.key ||
      lz[178] !== rH ||
      lz[179] !== l3
        ? ((ng = [l2, l3, l0.key, rH, rq, rK, rW, rX]),
          (lz[172] = l2),
          (lz[173] = rW),
          (lz[174] = rq),
          (lz[175] = rX),
          (lz[176] = rK),
          (lz[177] = l0.key),
          (lz[178] = rH),
          (lz[179] = l3),
          (lz[180] = ng))
        : (ng = lz[180]),
        (0, f.useEffect)(np, ng))
      let rZ = rT && iw?.source_gizmo_id != null && l4?.id === l2 && rL && "PRIVATE" === iw.discoverability,
        r0 = (0, Q.m)(aP)
      lz[181] !== r0 || lz[182] !== rE || lz[183] !== iO
        ? ((nm = rE && null != iO ? (0, ta.t6)(r0, iO.marketplacePath, iO.summary.source) : null),
          (lz[181] = r0),
          (lz[182] = rE),
          (lz[183] = iO),
          (lz[184] = nm))
        : (nm = lz[184])
      let r1 = nm
      lz[185] !== aP ? ((nf = { hostId: aP }), (lz[185] = aP), (lz[186] = nf)) : (nf = lz[186])
      let { data: r2, isPending: r3, mutateAsync: r5, variables: r4 } = (0, eS.pC)(nf)
      lz[187] !== aP ? ((nh = { hostId: aP }), (lz[187] = aP), (lz[188] = nh)) : (nh = lz[188])
      let { mutateAsync: r6, isPending: r7 } = (0, eS.oq)(nh),
        r8 = r3 || r7
      ;(lz[189] !== a8 || lz[190] !== aN || lz[191] !== a7
        ? ((ny = () => {
            if (!a7 || null == aN) return
            let e = !1,
              t = null,
              n = Date.now() + 15e3,
              l = async () => {
                let a = await a8().catch(tD)
                if (!e) {
                  if (a || Date.now() >= n) {
                    a || ad(aN)
                    return
                  }
                  t = setTimeout(() => {
                    l()
                  }, 2e3)
                }
              }
            return (
              l(),
              () => {
                ;((e = !0), null != t && clearTimeout(t))
              }
            )
          }),
          (lz[189] = a8),
          (lz[190] = aN),
          (lz[191] = a7),
          (lz[192] = ny))
        : (ny = lz[192]),
        lz[193] !== aN || lz[194] !== a7
          ? ((nb = [aN, a7]), (lz[193] = aN), (lz[194] = a7), (lz[195] = nb))
          : (nb = lz[195]),
        (0, f.useEffect)(ny, nb),
        lz[196] !== aP ? ((nx = { hostId: aP }), (lz[196] = aP), (lz[197] = nx)) : (nx = lz[197]))
      let { setAppEnabled: r9, updatingAppId: se } = (0, C.J)(nx)
      lz[198] !== i6 || lz[199] !== rr || lz[200] !== iO
        ? ((nv = (e) => {
            let t = i6?.get((0, P.$)(e))
            return (
              null == iO ||
              null != (0, eZ.jX)(iO.summary) ||
              null != rr[e] ||
              t?.isDisabledByAdmin === !0 ||
              t?.isUnavailable === !0
            )
          }),
          (lz[198] = i6),
          (lz[199] = rr),
          (lz[200] = iO),
          (lz[201] = nv))
        : (nv = lz[201])
      let st = nv,
        sn = null != al && st(al)
      ;(sn && aa(null),
        lz[202] !== i8 || lz[203] !== iA || lz[204] !== i5 || lz[205] !== sn || lz[206] !== al
          ? ((nI =
              null ==
              (nA = null == al || sn ? null : (i5.find((e) => e.id === al) ?? i8.find((e) => e.id === al) ?? null))
                ? null
                : (0, I.e)(nA.id, iA)),
            (lz[202] = i8),
            (lz[203] = iA),
            (lz[204] = i5),
            (lz[205] = sn),
            (lz[206] = al),
            (lz[207] = nA),
            (lz[208] = nI))
          : ((nA = lz[207]), (nI = lz[208])))
      let sl = nI,
        sa = (0, _.Ys)(nA?.id ?? null, iA)
      lz[209] !== aP ? ((nS = { hostId: aP }), (lz[209] = aP), (lz[210] = nS)) : (nS = lz[210])
      let si = (0, eE.DH)(nS)
      lz[211] !== aP ? ((nw = { hostId: aP }), (lz[211] = aP), (lz[212] = nw)) : (nw = lz[212])
      let { pendingPluginId: sr, setPluginEnabled: ss } = (0, tk.zQ)(nw)
      lz[213] !== aP ? ((nk = { hostId: aP }), (lz[213] = aP), (lz[214] = nk)) : (nk = lz[214])
      let { uninstallPlugin: so } = (0, tk.XV)(nk),
        su = null == iO || iO.summary.installed ? null : rs,
        sd = null != iO && !iO.summary.installed && rd
      lz[215] !== iO ? ((nj = null != iO && (0, eZ.Ei)(iO.summary)), (lz[215] = iO), (lz[216] = nj)) : (nj = lz[216])
      let sc = nj,
        sp = sc ? "disabled-by-admin" : su,
        sg = null != sp,
        sm = (0, f.useRef)(null)
      lz[217] !== i6 || lz[218] !== iI || lz[219] !== i5 || lz[220] !== st || lz[221] !== iO || lz[222] !== lZ
        ? ((nC = (e, t) => {
            if (null != t.chatgpt && null != iO) {
              let n = (0, e6.VT)(lZ, t.chatgpt, {
                appId: e.id,
                appIds: iO.apps.map(tL),
                apps: i5,
                parentPluginId: t.remotePluginId ?? t.pluginId,
                parentCanonicalAppId: iI,
                parentInstallAttemptId: null == t.requiredAppAnalytics ? t.installAttemptId : void 0,
                allowChildInstall:
                  iO.summary.installed &&
                  iO.apps.some((t) => {
                    let { id: n } = t
                    return n === e.id
                  }) &&
                  i6?.get((0, P.$)(e.id))?.linkId == null,
                blocked: st(e.id),
                previous: t.requiredAppAnalytics,
              })
              return (
                (0, e6.Cm)(lZ, t.chatgpt, n, {
                  appId: e.id,
                  result: "CHATGPT_PLUGIN_ACTION_RESULT_INITIATED",
                  suggestionId: t.suggestionId,
                }),
                { ...t, requiredAppAnalytics: n, installAttemptId: n.installAttemptId }
              )
            }
            return (
              null != iO &&
                (0, tc.v6)(lZ, {
                  action: s.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_CONNECT_CONNECTOR,
                  connectorId: e.id,
                  plugin: iO.summary,
                  result: s.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_INITIATED,
                  ...t,
                }),
              t
            )
          }),
          (lz[217] = i6),
          (lz[218] = iI),
          (lz[219] = i5),
          (lz[220] = st),
          (lz[221] = iO),
          (lz[222] = lZ),
          (lz[223] = nC))
        : (nC = lz[223])
      let sf = nC
      lz[224] !== lZ
        ? ((nP = (e, t, n, l) => {
            let a = e?.context
            if (
              !e?.pending ||
              a?.chatgpt == null ||
              null == a.requiredAppAnalytics ||
              ((0, e6.Cm)(lZ, a.chatgpt, a.requiredAppAnalytics, {
                appId: e.appId,
                result: t,
                errorType: n,
                linkId: l,
                suggestionId: a.suggestionId,
              }),
              "CHATGPT_PLUGIN_ACTION_RESULT_SUCCESS" === t && a.requiredAppAnalytics.childInstall && !l)
            )
              return
            e.pending = !1
            let i = "failure"
            ;("CHATGPT_PLUGIN_ACTION_RESULT_SUCCESS" === t
              ? (i = "success")
              : "CHATGPT_PLUGIN_ACTION_RESULT_CANCELLED" === t && (i = "cancelled"),
              (e.context = { ...a, requiredAppAnalytics: { ...a.requiredAppAnalytics, terminalResult: i } }))
          }),
          (lz[224] = lZ),
          (lz[225] = nP))
        : (nP = lz[225])
      let sh = nP
      ;(lz[226] !== am || lz[227] !== iO
        ? ((n_ = () =>
            null == iO
              ? void 0
              : {
                  pluginId: iO.summary.id,
                  remotePluginId: iO.summary.remotePluginId ?? iO.summary.shareContext?.remotePluginId ?? void 0,
                  ...am(),
                }),
          (lz[226] = am),
          (lz[227] = iO),
          (lz[228] = n_))
        : (n_ = lz[228]),
        lz[229] !== sf || lz[230] !== iO
          ? ((nM = (e, t) => {
              if (null == iO || null == t) {
                sm.current = null
                return
              }
              let n = sf(e, t)
              return ((sm.current = { appId: e.id, initialContext: n, context: n, pending: !0 }), n)
            }),
            (lz[229] = sf),
            (lz[230] = iO),
            (lz[231] = nM))
          : (nM = lz[231]),
        lz[232] !== sh
          ? ((nE = (e, t, n) => {
              let l = sm.current
              l?.appId === e.id && l.initialContext === t && sh(l, "CHATGPT_PLUGIN_ACTION_RESULT_FAILURE", n)
            }),
            (lz[232] = sh),
            (lz[233] = nE))
          : (nE = lz[233]),
        lz[234] !== aP || lz[235] !== n_ || lz[236] !== nM || lz[237] !== nE
          ? ((nT = {
              hostId: aP,
              oauthReferrer: "plugin_details",
              marketplaceAnalytics: n_,
              onConnectStarted: nM,
              onConnectFailed: nE,
            }),
            (lz[234] = aP),
            (lz[235] = n_),
            (lz[236] = nM),
            (lz[237] = nE),
            (lz[238] = nT))
          : (nT = lz[238]))
      let {
          clearConnectingApp: sy,
          connectingApp: sb,
          connectingOptions: sx,
          connectingMarketplaceAnalytics: sv,
          handleAppConnected: sA,
          handleAppConnectOAuthStarted: sI,
          handleConnectApp: sS,
          handleExternalConnectStarted: sw,
          handleOpenAppUrl: sk,
          isAppConnectPending: sj,
          isAppReauthPending: sC,
        } = (0, T.t)(nT),
        sP = null != sb && st(sb.id)
      lz[239] !== sb?.id || lz[240] !== sv
        ? ((nN = () => {
            let e = sm.current
            return e?.appId === sb?.id && e?.initialContext === sv ? e : null
          }),
          (lz[239] = sb?.id),
          (lz[240] = sv),
          (lz[241] = nN))
        : (nN = lz[241])
      let s_ = nN
      lz[242] !== s_
        ? ((nO = () => {
            let e = s_()
            if (null != e && e.pending) return ((e.pending = !1), e.context)
          }),
          (lz[242] = s_),
          (lz[243] = nO))
        : (nO = lz[243])
      let sM = nO
      sP && (sy(), ao(null))
      let sE = iO?.summary.shareContext ?? null,
        sT = r4?.pluginPath === r1 ? r2 : void 0,
        sN = sE?.remotePluginId ?? sT?.remotePluginId
      if (
        lz[244] !== l2 ||
        lz[245] !== sN ||
        lz[246] !== r0 ||
        lz[247] !== rE ||
        lz[248] !== sE ||
        lz[249] !== iO ||
        lz[250] !== r1 ||
        lz[251] !== l3
      ) {
        var sO, sU, sR
        let e, t
        ;((nD = (0, eS.eA)(sE)),
          lz[258] !== r0 || lz[259] !== rE || lz[260] !== iO
            ? ((e =
                rE &&
                iO?.summary.source.type === "local" &&
                null != r0 &&
                !(0, ta.W9)(r0, iO.marketplacePath) &&
                !(0, ed._s)(iO.marketplaceName)),
              (lz[258] = r0),
              (lz[259] = rE),
              (lz[260] = iO),
              (lz[261] = e))
            : (e = lz[261]),
          (nR = e),
          (nU = null != r1),
          lz[262] !== l2 || lz[263] !== nU || lz[264] !== sE || lz[265] !== l3
            ? ((t =
                !nU &&
                ((sO = sE),
                (sU = l2),
                (sR = l3),
                null != sO &&
                  (!!(
                    null != sO.creatorAccountUserId &&
                    (function (e, t, n) {
                      return e === t || e === n
                    })(sO.creatorAccountUserId, sU, sR)
                  ) ||
                    sO.sharePrincipals?.some(
                      (e) =>
                        "user" === e.principalType &&
                        "owner" === e.role &&
                        (function (e, t, n) {
                          return e === t || e === n
                        })(e.principalId, sU, sR),
                    ) === !0))),
              (lz[262] = l2),
              (lz[263] = nU),
              (lz[264] = sE),
              (lz[265] = l3),
              (lz[266] = t))
            : (t = lz[266]),
          (nq = t),
          (nL = null != sN),
          (nF = nD?.some(tR)),
          (lz[244] = l2),
          (lz[245] = sN),
          (lz[246] = r0),
          (lz[247] = rE),
          (lz[248] = sE),
          (lz[249] = iO),
          (lz[250] = r1),
          (lz[251] = l3),
          (lz[252] = nU),
          (lz[253] = nR),
          (lz[254] = nL),
          (lz[255] = nD),
          (lz[256] = nq),
          (lz[257] = nF))
      } else ((nU = lz[252]), (nR = lz[253]), (nL = lz[254]), (nD = lz[255]), (nq = lz[256]), (nF = lz[257]))
      let sL = !0 === nF,
        sD = null != nD && nD.length > 0
      lz[267] !== nU || lz[268] !== sD || lz[269] !== nR || lz[270] !== nL || lz[271] !== sL || lz[272] !== nq
        ? ((nz = nR
            ? (0, l.jsx)(b.A, {
                id: "plugins.detail.importedExternalMarketplaceShareTooltip",
                defaultMessage: "Plugins from imported marketplaces can't be shared",
              })
            : nU
              ? sL
                ? (0, l.jsx)(b.A, { ...tC.shareWorkspaceTooltip })
                : sD
                  ? (0, l.jsx)(b.A, { ...tC.shareInvitedTooltip })
                  : nL
                    ? (0, l.jsx)(b.A, { ...tC.shareSharedTooltip })
                    : (0, l.jsx)(b.A, { ...tC.shareNotSharedTooltip })
              : nq
                ? (0, l.jsx)(b.A, { ...tC.shareLocalCopyRequiredTooltip })
                : (0, l.jsx)(b.A, { ...tC.shareCreatedPluginsOnlyTooltip })),
          (lz[267] = nU),
          (lz[268] = sD),
          (lz[269] = nR),
          (lz[270] = nL),
          (lz[271] = sL),
          (lz[272] = nq),
          (lz[273] = nz))
        : (nz = lz[273])
      let sq = nz
      lz[274] !== sE || lz[275] !== iO || lz[276] !== sT?.shareUrl
        ? ((nW = null == iO ? null : (0, eH.I)(iO.summary.id)),
          (nB =
            null == iO
              ? null
              : (0, tS.Ab)({
                  pluginShareUrl: iO.shareUrl,
                  shareContext: sE,
                  savedShareUrl: sT?.shareUrl ?? null,
                  configuredShareUrl: nW,
                })),
          (lz[274] = sE),
          (lz[275] = iO),
          (lz[276] = sT?.shareUrl),
          (lz[277] = nW),
          (lz[278] = nB))
        : ((nW = lz[277]), (nB = lz[278]))
      let sF = nB,
        sz = iG || (null == iC ? iO?.summary.source.type !== "remote" || null != nW : "USER" !== iC)
      lz[279] !== sz || lz[280] !== sF
        ? ((nG = sz ? async () => null != sF && (0, eV.lW)(sF) : void 0),
          (lz[279] = sz),
          (lz[280] = sF),
          (lz[281] = nG))
        : (nG = lz[281])
      let sW = nG
      lz[282] !== l1 || lz[283] !== lZ
        ? ((nY = (e) => {
            lZ.get(Y.Id).danger(
              l1.formatMessage({ id: "plugins.detail.copyShareLinkError", defaultMessage: "Couldn't copy share link" }),
              {
                ...(null == e ? void 0 : { description: (0, g.Rt_)(e) }),
                errorAnalytics: { toastId: "plugins.detail.copyShareLinkError" },
              },
            )
          }),
          (lz[282] = l1),
          (lz[283] = lZ),
          (lz[284] = nY))
        : (nY = lz[284])
      let sB = nY
      lz[285] !== l2 ||
      lz[286] !== sN ||
      lz[287] !== l1 ||
      lz[288] !== an ||
      lz[289] !== r8 ||
      lz[290] !== sE ||
      lz[291] !== nD ||
      lz[292] !== sF ||
      lz[293] !== iq ||
      lz[294] !== r5 ||
      lz[295] !== lZ ||
      lz[296] !== r1 ||
      lz[297] !== sB ||
      lz[298] !== r6
        ? ((nV = async (e) => {
            if (null == r1 || r8) return
            if (
              !(null == l2 || !lZ.get(eY.rN, l2) || (await lZ.query.fetch(eY.IB, l2).then(tU, tO))) ||
              (null != sN && null == nD)
            )
              return void lZ
                .get(Y.Id)
                .danger(
                  l1.formatMessage({
                    id: "plugins.detail.loadSharingError",
                    defaultMessage: "Couldn't load plugin sharing",
                  }),
                  { errorAnalytics: { toastId: "plugins.detail.loadSharingError" } },
                )
            let t = (0, tS.VZ)({
              initialShare: null == sN ? null : { remotePluginId: sN, sharePrincipals: nD, shareUrl: sF },
              saveShare: (e) => (0, tS.JI)({ pluginPath: r1, remotePluginId: e, savePluginShare: r5 }),
            })
            ;(0, G.qf)(lZ, tI.PluginShareDialog, {
              initialDiscoverability: sE?.discoverability,
              initialSharePrincipals: null == sN ? [] : (nD ?? []),
              pluginDisplayName: tG(e),
              shouldShowCopyLinkCreationProgress: () => t.getCurrentShare()?.shareUrl == null,
              onCopyLink: async () => {
                try {
                  let e = await t.getOrCreateShare()
                  if (0 === e.shareUrl.length)
                    return (sB(), { canPublishToWorkspace: e.canPublishToWorkspace, didCopy: !1 })
                  return { canPublishToWorkspace: e.canPublishToWorkspace, didCopy: await (0, eV.lW)(e.shareUrl) }
                } catch (e) {
                  return (sB(e), { didCopy: !1 })
                }
              },
              onSaveShareTargets: async (e, n) => {
                try {
                  let l = await t.saveShareTargets(e, (e, t) =>
                    r6({ discoverability: n, remotePluginId: e, targets: t }),
                  )
                  return (
                    await tY({ invalidateQueriesAndBroadcast: an, refetchPluginDetail: iq }),
                    { canPublishToWorkspace: t.getCurrentShare()?.canPublishToWorkspace, principals: l }
                  )
                } catch (e) {
                  throw (
                    lZ
                      .get(Y.Id)
                      .danger(
                        l1.formatMessage({
                          id: "plugins.detail.updateSharingError",
                          defaultMessage: "Couldn't update plugin sharing",
                        }),
                        {
                          errorAnalytics: { toastId: "plugins.detail.updateSharingError" },
                          description: (0, g.Rt_)(e),
                        },
                      ),
                    e
                  )
                }
              },
              onUpdateSharedVersion: async () => {
                if (sE?.remotePluginId != null)
                  try {
                    ;(await r5({ pluginPath: r1, remotePluginId: sE.remotePluginId }),
                      await tY({ invalidateQueriesAndBroadcast: an, refetchPluginDetail: iq }),
                      lZ
                        .get(Y.Id)
                        .success(
                          l1.formatMessage({
                            id: "plugins.detail.updateSharedVersionSuccess",
                            defaultMessage: "Shared version updated",
                          }),
                        ))
                  } catch (e) {
                    throw (
                      lZ
                        .get(Y.Id)
                        .danger(
                          l1.formatMessage({
                            id: "plugins.detail.updateSharedVersionError",
                            defaultMessage: "Couldn't update shared version",
                          }),
                          {
                            errorAnalytics: { toastId: "plugins.detail.updateSharedVersionError" },
                            description: (0, g.Rt_)(e),
                          },
                        ),
                      e
                    )
                  }
              },
              shouldShowUpdateSharedVersion: (0, tw.z)(e.summary),
            })
          }),
          (lz[285] = l2),
          (lz[286] = sN),
          (lz[287] = l1),
          (lz[288] = an),
          (lz[289] = r8),
          (lz[290] = sE),
          (lz[291] = nD),
          (lz[292] = sF),
          (lz[293] = iq),
          (lz[294] = r5),
          (lz[295] = lZ),
          (lz[296] = r1),
          (lz[297] = sB),
          (lz[298] = r6),
          (lz[299] = nV))
        : (nV = lz[299])
      let sG = nV
      lz[300] !== sG
        ? ((nK = (e) => {
            sG(e)
          }),
          (lz[300] = sG),
          (lz[301] = nK))
        : (nK = lz[301])
      let sY = (0, f.useEffectEvent)(nK)
      ;(lz[302] !== sY || lz[303] !== ak || lz[304] !== af || lz[305] !== aI || lz[306] !== iO || lz[307] !== r1
        ? ((nJ = () => {
            "share" === af && aj.current !== aI && ak && null != iO && null != r1 && ((aj.current = aI), sY(iO))
          }),
          (lz[302] = sY),
          (lz[303] = ak),
          (lz[304] = af),
          (lz[305] = aI),
          (lz[306] = iO),
          (lz[307] = r1),
          (lz[308] = nJ))
        : (nJ = lz[308]),
        lz[309] !== ak || lz[310] !== af || lz[311] !== aI || lz[312] !== iO || lz[313] !== r1
          ? ((nQ = [ak, iO, aI, af, r1]),
            (lz[309] = ak),
            (lz[310] = af),
            (lz[311] = aI),
            (lz[312] = iO),
            (lz[313] = r1),
            (lz[314] = nQ))
          : (nQ = lz[314]),
        (0, f.useEffect)(nJ, nQ),
        lz[315] !== sW
          ? ((nX = () => {
              sW?.()
            }),
            (lz[315] = sW),
            (lz[316] = nX))
          : (nX = lz[316]),
        (0, ee.JX)("copy-deeplink", nX),
        lz[317] !== l1 || lz[318] !== l0.state || lz[319] !== iO || lz[320] !== lH
          ? ((nH = n$ = (null == iO ? (0, ti.d3)(l0.state) : tG(iO)) ?? l1.formatMessage(tC.pageTitleFallback)),
            (lz[317] = l1),
            (lz[318] = l0.state),
            (lz[319] = iO),
            (lz[320] = lH),
            (lz[321] = n$),
            (lz[322] = nH))
          : ((n$ = lz[321]), (nH = lz[322])))
      let sV = nH,
        sK = iO?.summary.installed === !0 && "ON_INSTALL" === iO.summary.authPolicy
      ;(lz[323] !== iO ? ((nZ = null == iO ? null : (0, ed.qA)(iO)), (lz[323] = iO), (lz[324] = nZ)) : (nZ = lz[324]),
        lz[325] !== aP || lz[326] !== sK || lz[327] !== nZ
          ? ((n0 = { enabled: sK, hostId: aP, plugin: nZ }),
            (lz[325] = aP),
            (lz[326] = sK),
            (lz[327] = nZ),
            (lz[328] = n0))
          : (n0 = lz[328]))
      let sJ = (0, e$.V)(n0)
      lz[329] !== ir || lz[330] !== iO
        ? ((n1 =
            null == iO
              ? { installedSkills: [], unavailableSkills: [] }
              : (0, ta.r8)({ installedSkills: ir, pluginName: iO.summary.name, pluginSkills: iO.skills })),
          (lz[329] = ir),
          (lz[330] = iO),
          (lz[331] = n1))
        : (n1 = lz[331])
      let sQ = n1
      lz[332] !== i8 || lz[333] !== iL || lz[334] !== id?.servers || lz[335] !== iO
        ? ((n2 =
            null == iO
              ? []
              : (0, ta.LJ)({
                  apps: i8,
                  configuredServers: id?.servers ?? {},
                  pluginServerNames: iO.mcpServers,
                  mcpAppIdsByServerKey: iL,
                })),
          (lz[332] = i8),
          (lz[333] = iL),
          (lz[334] = id?.servers),
          (lz[335] = iO),
          (lz[336] = n2))
        : (n2 = lz[336])
      let sX = n2,
        s$ = aP === eF.fI ? (0, e0.b)(iO, aM) : null,
        sH = iO?.summary.remotePluginId ?? null
      lz[337] !== aP || lz[338] !== sH
        ? ((n3 = { hostId: aP, pluginId: sH }), (lz[337] = aP), (lz[338] = sH), (lz[339] = n3))
        : (n3 = lz[339])
      let sZ = (0, p._U)(en.KY, n3),
        s0 = sZ?.path ?? (null == s$ ? null : (0, g.CZl)(s$.server, s$.tool.name)),
        s1 = null == iO ? null : (0, e2.N)(rv, aP, iO.summary.id),
        s2 = null == iO ? null : (0, e2.q)(rv, aP, iO.summary.id),
        s3 = null != iO && (0, e7.uy)(rA, { hostId: aP, pluginId: iO.summary.id }),
        s5 = sr === iO?.summary.id
      lz[340] !== aP || lz[341] !== iF
        ? ((n5 = (0, to.b)(aP, iF)), (lz[340] = aP), (lz[341] = iF), (lz[342] = n5))
        : (n5 = lz[342])
      let s4 = n5,
        s6 = s4 ? (iD?.id ?? i2) : void 0
      lz[343] !== s6
        ? ((n4 = null == s6 ? "/codex/open-app" : (0, ti.y4)(s6)), (lz[343] = s6), (lz[344] = n4))
        : (n4 = lz[344])
      let s7 = (0, x.$P)(n4),
        s8 = s4 || sg || sd
      lz[345] !== ia || lz[346] !== lZ
        ? ((n6 = (e, t, n) => ({
            activeProject: ia,
            codexAppMode: e.summary.id === tx.h0 || e.apps.some(tN) ? "work" : void 0,
            prefillPrompt: (0, tx.KH)({ defaultPrompt: t, pluginDisplayName: tG(e), pluginId: e.summary.id }),
            startInSidebar: !0,
          })),
          (lz[345] = ia),
          (lz[346] = lZ),
          (lz[347] = n6))
        : (n6 = lz[347])
      let s9 = n6
      lz[348] !== s9 || lz[349] !== ap || lz[350] !== lZ
        ? ((n7 = (e, t, n, l) => {
            ax.current?.abort()
            let a = lZ.get(ez.l)
            if (null == t) return { onboardingMode: a }
            let i = new AbortController()
            ax.current = i
            let { prefillPrompt: r, ...s } = s9(e, t, void 0 === n || n)
            return {
              onboardingMode: a,
              postInstallComposerPrefill: r,
              postInstallNewConversation: { ...s, replace: l ?? null != ap, signal: i.signal },
            }
          }),
          (lz[348] = s9),
          (lz[349] = ap),
          (lz[350] = lZ),
          (lz[351] = n7))
        : (n7 = lz[351])
      let oe = n7
      lz[352] !== rl ||
      lz[353] !== am ||
      lz[354] !== i5 ||
      lz[355] !== ra ||
      lz[356] !== ru ||
      lz[357] !== st ||
      lz[358] !== iO
        ? ((n8 = (e, t) => {
            let n = void 0 === t ? am() : t
            return n.chatgpt?.surface !== i.do.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_DETAILS ||
              null != n.chatgpt.installAction ||
              ra ||
              null != rl ||
              ru ||
              e.summary.id !== iO?.summary.id
              ? n
              : {
                  ...n,
                  chatgpt: {
                    ...n.chatgpt,
                    installAction: (0, e1.K)({
                      apps: i5.filter((e) => !st(e.id)),
                      pluginInstalled: e.summary.installed,
                    }),
                  },
                }
          }),
          (lz[352] = rl),
          (lz[353] = am),
          (lz[354] = i5),
          (lz[355] = ra),
          (lz[356] = ru),
          (lz[357] = st),
          (lz[358] = iO),
          (lz[359] = n8))
        : (n8 = lz[359])
      let ot = n8,
        on = (e, t) => {
          let {
              requestedConnectorId: n,
              onSuccess: l,
              postInstallConnectorSetup: a,
              appConnectOptions: i,
              requestedInstallLink: r,
              marketplaceAnalytics: s,
            } = void 0 === t ? {} : t,
            o = void 0 === r ? ap : r,
            u = void 0 === s ? am() : s
          return (
            !s4 &&
            (lJ?.(),
            (null == o ? rb : rx)((0, ed.qA)(e), {
              ...oe(e, o?.prompt, !0, null != o),
              activeProject: ia,
              hostId: aP,
              marketplaceAnalytics: ot(e, u),
              onSuccess: async () => {
                ;(await rj(), l?.())
              },
              requiresAppSetup: null != n,
              requestedConnectorId: n,
              postInstallConnectorSetup: a,
              appConnectOptions: i,
              source: ag.source,
            }))
          )
        }
      lz[360] !== s9 || lz[361] !== on || lz[362] !== ae
        ? ((n9 = (e, t) =>
            e.summary.installed
              ? (t?.prompt != null && ae({ ...s9(e, t.prompt, !0), replace: !0 }), !0)
              : on(e, { requestedInstallLink: t })),
          (lz[360] = s9),
          (lz[361] = on),
          (lz[362] = ae),
          (lz[363] = n9))
        : (n9 = lz[363])
      let ol = (0, f.useEffectEvent)(n9),
        oa = (0, p.Ul)(e3._X)
      lz[364] !== am || lz[365] !== sS || lz[366] !== l1 || lz[367] !== on || lz[368] !== lZ || lz[369] !== aA?.chatgpt
        ? ((le = (e, t) => {
            let n = am()
            return ((n.chatgpt = aA?.chatgpt ?? n.chatgpt), null == e)
              ? !t.summary.installed && on(t, { marketplaceAnalytics: n })
              : t.summary.installed
                ? (sS(e, {
                    marketplaceAnalytics: {
                      ...n,
                      pluginId: t.summary.id,
                      remotePluginId: t.summary.remotePluginId ?? t.summary.shareContext?.remotePluginId ?? void 0,
                    },
                    mustShowInstallationInterstitial: t.summary.mustShowInstallationInterstitial,
                  }).catch((e) => {
                    lZ.get(Y.Id).danger((0, S.S4)(l1), {
                      errorAnalytics: { toastId: "pluginDetailPage.startSuggestedConnectEvent" },
                      description: (0, g.Rt_)(e),
                    })
                  }),
                  !0)
                : on(t, { requestedConnectorId: e.id, marketplaceAnalytics: n })
          }),
          (lz[364] = am),
          (lz[365] = sS),
          (lz[366] = l1),
          (lz[367] = on),
          (lz[368] = lZ),
          (lz[369] = aA?.chatgpt),
          (lz[370] = le))
        : (le = lz[370])
      let oi = (0, f.useEffectEvent)(le)
      lz[371] !== l2 ||
      lz[372] !== rr ||
      lz[373] !== rl ||
      lz[374] !== oa ||
      lz[375] !== iA ||
      lz[376] !== ak ||
      lz[377] !== i5 ||
      lz[378] !== iv ||
      lz[379] !== ra ||
      lz[380] !== ru ||
      lz[381] !== s8 ||
      lz[382] !== iE ||
      lz[383] !== iG ||
      lz[384] !== l0.hash ||
      lz[385] !== l0.key ||
      lz[386] !== l0.pathname ||
      lz[387] !== l0.search ||
      lz[388] !== l0.state ||
      lz[389] !== l9 ||
      lz[390] !== iO ||
      lz[391] !== iD?.canonical_app_id ||
      lz[392] !== oi ||
      lz[393] !== aA ||
      lz[394] !== l3
        ? ((lt = () => {}),
          (lz[371] = l2),
          (lz[372] = rr),
          (lz[373] = rl),
          (lz[374] = oa),
          (lz[375] = iA),
          (lz[376] = ak),
          (lz[377] = i5),
          (lz[378] = iv),
          (lz[379] = ra),
          (lz[380] = ru),
          (lz[381] = s8),
          (lz[382] = iE),
          (lz[383] = iG),
          (lz[384] = l0.hash),
          (lz[385] = l0.key),
          (lz[386] = l0.pathname),
          (lz[387] = l0.search),
          (lz[388] = l0.state),
          (lz[389] = l9),
          (lz[390] = iO),
          (lz[391] = iD?.canonical_app_id),
          (lz[392] = oi),
          (lz[393] = aA),
          (lz[394] = l3),
          (lz[395] = lt))
        : (lt = lz[395])
      let or = iD?.canonical_app_id
      ;(lz[396] !== l2 ||
      lz[397] !== rr ||
      lz[398] !== rl ||
      lz[399] !== oa ||
      lz[400] !== iA ||
      lz[401] !== ak ||
      lz[402] !== i5 ||
      lz[403] !== iv ||
      lz[404] !== ra ||
      lz[405] !== ru ||
      lz[406] !== s8 ||
      lz[407] !== iE ||
      lz[408] !== iG ||
      lz[409] !== l0 ||
      lz[410] !== l9 ||
      lz[411] !== iO ||
      lz[412] !== aA ||
      lz[413] !== or ||
      lz[414] !== l3
        ? ((ln = [l2, l3, aA, iE, iG, l0, iO, s8, ra, rl, ru, iv, ak, oa, i5, or, rr, iA, l9]),
          (lz[396] = l2),
          (lz[397] = rr),
          (lz[398] = rl),
          (lz[399] = oa),
          (lz[400] = iA),
          (lz[401] = ak),
          (lz[402] = i5),
          (lz[403] = iv),
          (lz[404] = ra),
          (lz[405] = ru),
          (lz[406] = s8),
          (lz[407] = iE),
          (lz[408] = iG),
          (lz[409] = l0),
          (lz[410] = l9),
          (lz[411] = iO),
          (lz[412] = aA),
          (lz[413] = or),
          (lz[414] = l3),
          (lz[415] = ln))
        : (ln = lz[415]),
        (0, f.useEffect)(lt, ln))
      let os = (0, f.useRef)(null)
      lz[416] !== l2 ||
      lz[417] !== i6 ||
      lz[418] !== rr ||
      lz[419] !== rl ||
      lz[420] !== iA ||
      lz[421] !== ak ||
      lz[422] !== i5 ||
      lz[423] !== l1 ||
      lz[424] !== iv ||
      lz[425] !== ra ||
      lz[426] !== ru ||
      lz[427] !== s8 ||
      !1 !== lz[428] ||
      lz[429] !== l0 ||
      lz[430] !== l9 ||
      lz[431] !== on ||
      lz[432] !== iO ||
      lz[433] !== lZ ||
      lz[434] !== l3
        ? ((ll = () => {
            if (ak && null != iO && !iO.summary.installed && !s8 && !ra && null == rl && !ru && !iv)
              for (let e of i5)
                e.isEnabled &&
                  null == rr[e.id] &&
                  null == (0, I.e)(e.id, iA) &&
                  (0, ey.q)({
                    scope: lZ,
                    accountId: l2,
                    userId: l3,
                    connectorId: e.id,
                    location: l0,
                    navigate: l9,
                    handledKey: os,
                    intl: l1,
                    onInstall: (t, n, l) =>
                      on(iO, {
                        requestedConnectorId: e.id,
                        onSuccess: t,
                        postInstallConnectorSetup: n,
                        appConnectOptions: l,
                      }),
                    continueSetupAfterInstall: i6?.get((0, P.$)(e.id))?.linkId != null,
                  })
          }),
          (lz[416] = l2),
          (lz[417] = i6),
          (lz[418] = rr),
          (lz[419] = rl),
          (lz[420] = iA),
          (lz[421] = ak),
          (lz[422] = i5),
          (lz[423] = l1),
          (lz[424] = iv),
          (lz[425] = ra),
          (lz[426] = ru),
          (lz[427] = s8),
          (lz[428] = !1),
          (lz[429] = l0),
          (lz[430] = l9),
          (lz[431] = on),
          (lz[432] = iO),
          (lz[433] = lZ),
          (lz[434] = l3),
          (lz[435] = ll))
        : (ll = lz[435])
      let oo = (0, f.useEffectEvent)(ll)
      ;(lz[436] !== lZ || lz[437] !== oo
        ? ((la = () =>
            lZ.watch((e) => {
              let { get: t } = e
              t(e3._X) && oo()
            })),
          (lz[436] = lZ),
          (lz[437] = oo),
          (lz[438] = la))
        : (la = lz[438]),
        lz[439] !== l2 ||
        lz[440] !== i6 ||
        lz[441] !== rr ||
        lz[442] !== rl ||
        lz[443] !== iA ||
        lz[444] !== ak ||
        lz[445] !== i5 ||
        lz[446] !== iv ||
        lz[447] !== ra ||
        lz[448] !== ru ||
        lz[449] !== s8 ||
        !1 !== lz[450] ||
        lz[451] !== l0 ||
        lz[452] !== iO ||
        lz[453] !== lZ ||
        lz[454] !== l3
          ? ((li = [l2, i6, rr, rl, iA, l3, i5, ak, iv, ra, ru, s8, !1, l0, iO, lZ]),
            (lz[439] = l2),
            (lz[440] = i6),
            (lz[441] = rr),
            (lz[442] = rl),
            (lz[443] = iA),
            (lz[444] = ak),
            (lz[445] = i5),
            (lz[446] = iv),
            (lz[447] = ra),
            (lz[448] = ru),
            (lz[449] = s8),
            (lz[450] = !1),
            (lz[451] = l0),
            (lz[452] = iO),
            (lz[453] = lZ),
            (lz[454] = l3),
            (lz[455] = li))
          : (li = lz[455]),
        (0, f.useEffect)(la, li),
        lz[456] !== l2 ||
        lz[457] !== oa ||
        lz[458] !== iS ||
        lz[459] !== ak ||
        lz[460] !== lB ||
        lz[461] !== ap ||
        lz[462] !== s4 ||
        lz[463] !== s8 ||
        lz[464] !== iQ ||
        lz[465] !== aE ||
        lz[466] !== iV ||
        lz[467] !== iY ||
        lz[468] !== l0 ||
        lz[469] !== l9 ||
        lz[470] !== ol ||
        lz[471] !== iO ||
        lz[472] !== ag ||
        lz[473] !== ab ||
        lz[474] !== l3 ||
        lz[475] !== ay.status
          ? ((lr = () => {
              let e = av.current,
                t = null != e && e.path === (0, x.AO)(l0) && e.accountId === l2 && e.userId === l3 && e.hostId === lB
              null == e || t || e.fromKey === l0.key || (av.current = null)
              let n = ap ?? (t ? e.link : null)
              if (
                !(
                  null == iO ||
                  !aE ||
                  iV ||
                  iQ ||
                  (null != n &&
                    (null == l2 ||
                      null == l3 ||
                      s4 ||
                      iY ||
                      (0, eZ.Ei)(iO.summary) ||
                      (iO.summary.installed && !iO.summary.enabled) ||
                      null != iS ||
                      (null != n.prompt && "loading" === ay.status) ||
                      !ak))
                ) &&
                (iO.summary.installed || oa) &&
                (0, ti.F8)({
                  hasHandledNavigation: aC.current === l0.key,
                  isInstallBlocked: s8,
                  isPluginInstalled: iO.summary.installed,
                  shouldOpenInstall: ab || t,
                })
              ) {
                if (null != ap) {
                  let e = new URLSearchParams(l0.search)
                  ;(e.delete("install"), e.delete("prompt"))
                  let t = (0, x.AO)({ ...l0, search: 0 === e.size ? "" : `?${e}` })
                  ;((av.current = { fromKey: l0.key, path: t, accountId: l2, userId: l3, hostId: lB, link: ap }),
                    (aC.current = l0.key),
                    l9(t, {
                      replace: !0,
                      state: { ...l0.state, pluginDetailNavigationKey: l0.key, pluginProductEventContext: ag },
                    }))
                  return
                }
                ol(iO, n) && ((av.current = null), (aC.current = l0.key))
              }
            }),
            (lz[456] = l2),
            (lz[457] = oa),
            (lz[458] = iS),
            (lz[459] = ak),
            (lz[460] = lB),
            (lz[461] = ap),
            (lz[462] = s4),
            (lz[463] = s8),
            (lz[464] = iQ),
            (lz[465] = aE),
            (lz[466] = iV),
            (lz[467] = iY),
            (lz[468] = l0),
            (lz[469] = l9),
            (lz[470] = ol),
            (lz[471] = iO),
            (lz[472] = ag),
            (lz[473] = ab),
            (lz[474] = l3),
            (lz[475] = ay.status),
            (lz[476] = lr))
          : (lr = lz[476]),
        lz[477] !== l2 ||
        lz[478] !== oa ||
        lz[479] !== iS ||
        lz[480] !== ak ||
        lz[481] !== lB ||
        lz[482] !== ap ||
        lz[483] !== s4 ||
        lz[484] !== s8 ||
        lz[485] !== iQ ||
        lz[486] !== aE ||
        lz[487] !== iV ||
        lz[488] !== iY ||
        lz[489] !== l0 ||
        lz[490] !== l9 ||
        lz[491] !== iO ||
        lz[492] !== ag ||
        lz[493] !== ab ||
        lz[494] !== l3 ||
        lz[495] !== ay.status
          ? ((ls = [l2, l3, oa, iS, ak, lB, ap, s4, s8, aE, iV, iQ, iY, l0, l9, iO, ag, ab, ay.status]),
            (lz[477] = l2),
            (lz[478] = oa),
            (lz[479] = iS),
            (lz[480] = ak),
            (lz[481] = lB),
            (lz[482] = ap),
            (lz[483] = s4),
            (lz[484] = s8),
            (lz[485] = iQ),
            (lz[486] = aE),
            (lz[487] = iV),
            (lz[488] = iY),
            (lz[489] = l0),
            (lz[490] = l9),
            (lz[491] = iO),
            (lz[492] = ag),
            (lz[493] = ab),
            (lz[494] = l3),
            (lz[495] = ay.status),
            (lz[496] = ls))
          : (ls = lz[496]),
        (0, f.useEffect)(lr, ls))
      let ou = iS ?? rl?.message ?? (a1 ? null : a$),
        od =
          iM && l7
            ? "error"
            : (function ({
                errorMessage: e,
                isLoading: t,
                marketplacePath: n,
                plugin: l,
                pluginName: a,
                remoteMarketplaceName: i,
              }) {
                return t
                  ? "loading"
                  : null != e
                    ? "error"
                    : (null == n && null == i) || null == a || null == l
                      ? "missing"
                      : "ready"
              })({
                errorMessage: ou,
                isLoading: i_ || ra || iV || (aD && !a6 && (aH || aZ || a7)),
                marketplacePath: a3,
                plugin: iO,
                pluginName: a5,
                remoteMarketplaceName: a4,
              }),
        oc = l0.state?.pluginDetailNavigationKey ?? l0.key,
        op = aE && ak && "ready" === od && null != iO ? iO : null
      ;(lz[497] !== ag.navigationStartedAtMs ||
      lz[498] !== ag.referrer ||
      lz[499] !== ag.source ||
      lz[500] !== lZ ||
      lz[501] !== oc ||
      lz[502] !== op
        ? ((lo = {
            scope: lZ,
            navigationKey: oc,
            navigationStartedAtMs: ag.navigationStartedAtMs,
            plugin: op,
            referrer: ag.referrer,
            source: ag.source,
          }),
          (lz[497] = ag.navigationStartedAtMs),
          (lz[498] = ag.referrer),
          (lz[499] = ag.source),
          (lz[500] = lZ),
          (lz[501] = oc),
          (lz[502] = op),
          (lz[503] = lo))
        : (lo = lz[503]),
        (0, tc.Nn)(lo),
        lz[504] !== iZ || lz[505] !== l0.search
          ? ((lu =
              iZ?.plugin_id == null ? "/plugins" : (0, eu.Ct)({ pluginId: iZ.plugin_id, browseSearch: l0.search })),
            (lz[504] = iZ),
            (lz[505] = l0.search),
            (lz[506] = lu))
          : (lu = lz[506]))
      let og = (0, x.$P)(lu)
      if (!aE) {
        let e
        return (
          lz[507] !== lH
            ? ((e =
                "dialog" === lH
                  ? (0, l.jsx)(ts.o, { state: "missing" })
                  : (0, l.jsx)(x.C5, { replace: !0, to: "/skills" })),
              (lz[507] = lH),
              (lz[508] = e))
            : (e = lz[508]),
          e
        )
      }
      lz[509] !== l2 || lz[510] !== i5 || lz[511] !== lZ.queryClient || lz[512] !== l3
        ? ((ld = () => {
            if (null != l2 && null != l3)
              for (let e of ((0, e5.Q)(), i5)) e.isAccessible || ((0, j.bO)(lZ.queryClient, e.id), (0, eO.s)())
          }),
          (lz[509] = l2),
          (lz[510] = i5),
          (lz[511] = lZ.queryClient),
          (lz[512] = l3),
          (lz[513] = ld))
        : (ld = lz[513])
      let om = ld
      "ready" !== od || null == iO || iO.summary.installed || !oa || s8 || ro || iY || iQ || om()
      let of = aD && null != aN && a6 && null == a0
      lz[514] !== aP || lz[515] !== aT || lz[516] !== iO
        ? ((lc = aP === eF.fI && null != iO ? (aT?.groups.find((e) => e.plugin.id === iO.summary.id) ?? null) : null),
          (lz[514] = aP),
          (lz[515] = aT),
          (lz[516] = iO),
          (lz[517] = lc))
        : (lc = lz[517])
      let oh = lc
      lz[518] !== ia ||
      lz[519] !== oe ||
      lz[520] !== ot ||
      lz[521] !== aP ||
      lz[522] !== rb ||
      lz[523] !== an ||
      lz[524] !== lJ ||
      lz[525] !== lQ ||
      lz[526] !== ag.source ||
      lz[527] !== ri
        ? ((lp = (e, t, n) => {
            ;(lJ?.(),
              rb((0, ed.qA)(e), {
                ...oe(e, t, n),
                hostId: aP,
                marketplaceAnalytics: ot(e),
                activeProject: ia,
                onSuccess: async () => {
                  ;(ri().catch(tT), await tY({ invalidateQueriesAndBroadcast: an }), await lQ?.())
                },
                source: ag.source,
              }))
          }),
          (lz[518] = ia),
          (lz[519] = oe),
          (lz[520] = ot),
          (lz[521] = aP),
          (lz[522] = rb),
          (lz[523] = an),
          (lz[524] = lJ),
          (lz[525] = lQ),
          (lz[526] = ag.source),
          (lz[527] = ri),
          (lz[528] = lp))
        : (lp = lz[528])
      let oy = lp
      lz[529] !== am || lz[530] !== rj || lz[531] !== ss
        ? ((lg = async (e) => {
            ;(await ss({
              enabled: !0,
              marketplaceAnalytics: { plugin: e.summary, ...am() },
              pluginDisplayName: tG(e),
              pluginId: e.summary.id,
            }),
              await rj())
          }),
          (lz[529] = am),
          (lz[530] = rj),
          (lz[531] = ss),
          (lz[532] = lg))
        : (lg = lz[532])
      let ob = lg
      lz[533] !== i6 || lz[534] !== sS || lz[535] !== st || lz[536] !== iO
        ? ((lm = async (e, t) => {
            if (null == iO || st(e.id)) return
            let n = i6?.get((0, P.$)(e.id))
            ;(ao(n?.linkId == null ? null : { appId: e.id, kind: "reauth", linkId: n.linkId, appConnectOptions: t }),
              await sS(e, {
                appConnectOptions: t,
                mustShowInstallationInterstitial: iO.summary.mustShowInstallationInterstitial,
              }))
          }),
          (lz[533] = i6),
          (lz[534] = sS),
          (lz[535] = st),
          (lz[536] = iO),
          (lz[537] = lm))
        : (lm = lz[537])
      let ox = lm
      lz[538] !== i6 ||
      lz[539] !== ox ||
      lz[540] !== iA ||
      lz[541] !== ob ||
      lz[542] !== oy ||
      lz[543] !== i9 ||
      lz[544] !== i5 ||
      lz[545] !== l1 ||
      lz[546] !== iv ||
      lz[547] !== ru ||
      lz[548] !== s4 ||
      lz[549] !== st ||
      lz[550] !== s8 ||
      lz[551] !== lQ ||
      lz[552] !== lZ
        ? ((lf = async (e, t, n) => {
            if (s4 || (0, eZ.Ei)(e.summary)) return !1
            if (!e.summary.installed) return !s8 && (oy(e, t, n), !1)
            if (!e.summary.enabled) {
              try {
                await ob(e)
              } catch {
                return !1
              }
              if (null != lQ) return !1
            }
            let [l] = e.apps
            if (1 === e.apps.length && null != l && (0, P.$)(l.id) === eX.m) {
              let e = i5.find((e) => e.id === l.id),
                t = i6?.get(eX.m)
              if (!i9 || iv || ru)
                return (
                  lZ
                    .get(Y.Id)
                    .info(
                      l1.formatMessage({
                        id: "plugins.detail.walletConnectionUnconfirmed",
                        defaultMessage: "Couldn\u2019t confirm your Wallet connection. Try again in a moment.",
                      }),
                    ),
                  !1
                )
              if (
                null == e ||
                !e.isEnabled ||
                st(e.id) ||
                null != (0, I.e)(e.id, iA) ||
                (t?.requiresReauth && !t.canReconnect)
              )
                return (
                  lZ
                    .get(Y.Id)
                    .warning(
                      l1.formatMessage({
                        id: "plugins.detail.walletUnavailable",
                        defaultMessage:
                          "Wallet is unavailable for this account. Check your Wallet settings before trying again.",
                      }),
                    ),
                  !1
                )
              if (t?.requiresReauth || (!e.isAccessible && t?.canConnect !== !1)) {
                try {
                  await ox(e)
                } catch (e) {
                  lZ.get(Y.Id).danger((0, S.S4)(l1), {
                    errorAnalytics: { toastId: "pluginDetailPage.walletStarterConnect" },
                    description: (0, g.Rt_)(e),
                  })
                }
                return !1
              }
            }
            return !0
          }),
          (lz[538] = i6),
          (lz[539] = ox),
          (lz[540] = iA),
          (lz[541] = ob),
          (lz[542] = oy),
          (lz[543] = i9),
          (lz[544] = i5),
          (lz[545] = l1),
          (lz[546] = iv),
          (lz[547] = ru),
          (lz[548] = s4),
          (lz[549] = st),
          (lz[550] = s8),
          (lz[551] = lQ),
          (lz[552] = lZ),
          (lz[553] = lf))
        : (lf = lz[553])
      let ov = lf
      lz[554] !== iZ ||
      lz[555] !== am ||
      lz[556] !== s9 ||
      lz[557] !== iK ||
      lz[558] !== iQ ||
      lz[559] !== iV ||
      lz[560] !== iY ||
      lz[561] !== l0.search ||
      lz[562] !== l9 ||
      lz[563] !== lZ ||
      lz[564] !== iX ||
      lz[565] !== ae ||
      lz[566] !== ov
        ? ((lh = (e, t, n) => {
            if (!iV && !iQ) {
              if (
                (null != n &&
                  (0, tc.zy)(lZ, {
                    plugin: e.summary,
                    position: n,
                    ...am(),
                    target: r.CodexPluginClickTarget.CODEX_PLUGIN_CLICK_TARGET_STARTER_PROMPT,
                  }),
                iY && (iX || !iK))
              ) {
                iZ?.plugin_id != null && l9((0, eu.Ct)({ pluginId: iZ.plugin_id, browseSearch: l0.search }))
                return
              }
              ;(async () => {
                ;(await ov(e, t, null != n)) && ae(s9(e, t, null != n))
              })()
            }
          }),
          (lz[554] = iZ),
          (lz[555] = am),
          (lz[556] = s9),
          (lz[557] = iK),
          (lz[558] = iQ),
          (lz[559] = iV),
          (lz[560] = iY),
          (lz[561] = l0.search),
          (lz[562] = l9),
          (lz[563] = lZ),
          (lz[564] = iX),
          (lz[565] = ae),
          (lz[566] = ov),
          (lz[567] = lh))
        : (lh = lz[567])
      let oA = lh
      lz[568] !== si
        ? ((ly = async (e, t) => {
            await si.mutateAsync({ key: e, enabled: t })
          }),
          (lz[568] = si),
          (lz[569] = ly))
        : (ly = lz[569])
      let oI = ly,
        oS = rE && !nU && null == sF,
        ow = null
      "ready" === od &&
        null != iO &&
        (ow = rc
          ? "copy-link"
          : (0, ta.w9)({
              hasLoadedSharePrincipals: null != nD,
              canSharePlugin: nU,
              isInstalled: iO.summary.installed,
              isShareDisabled: oS,
              pluginShareUrl: sF,
            }))
      let ok = null
      if (null != iO && "share" === ow) {
        let e,
          t,
          n,
          a,
          i = oS || r8
        ;(lz[570] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)(B._Ui, {})), (lz[570] = e))
          : (e = lz[570]),
          lz[571] !== nU || lz[572] !== sG || lz[573] !== iO
            ? ((t = nU
                ? () => {
                    sG(iO)
                  }
                : void 0),
              (lz[571] = nU),
              (lz[572] = sG),
              (lz[573] = iO),
              (lz[574] = t))
            : (t = lz[574]),
          lz[575] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, l.jsx)(b.A, { id: "plugins.detail.shareMenuItem", defaultMessage: "Share" })), (lz[575] = n))
            : (n = lz[575]),
          lz[576] !== oS || lz[577] !== sq || lz[578] !== i || lz[579] !== t
            ? ((a = (0, l.jsx)(z.ms.Item, {
                disabled: i,
                focusableWhenDisabled: oS,
                leftIcon: e,
                tooltipText: sq,
                onSelect: t,
                children: n,
              })),
              (lz[576] = oS),
              (lz[577] = sq),
              (lz[578] = i),
              (lz[579] = t),
              (lz[580] = a))
            : (a = lz[580]),
          (ok = a))
      } else if ("copy-link" === ow && null != sW) {
        let e, t, n, a
        ;(lz[581] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)(B.DIB, {})), (lz[581] = e))
          : (e = lz[581]),
          lz[582] !== sF || lz[583] !== sB
            ? ((t = () => {
                null == sF || 0 === sF.length ? sB() : (0, eV.lW)(sF)
              }),
              (lz[582] = sF),
              (lz[583] = sB),
              (lz[584] = t))
            : (t = lz[584]),
          lz[585] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, l.jsx)(b.A, { id: "plugins.detail.shareLink", defaultMessage: "Copy link" })), (lz[585] = n))
            : (n = lz[585]),
          lz[586] !== t
            ? ((a = (0, l.jsx)(z.ms.Item, { leftIcon: e, onSelect: t, children: n })), (lz[586] = t), (lz[587] = a))
            : (a = lz[587]),
          (ok = a))
      }
      let oj = iO?.summary.remotePluginId ?? void 0
      lz[588] !== a_ || lz[589] !== aP || lz[590] !== iO
        ? ((lb = a_ && null != iO ? (0, ti.$W)((0, ed.qA)(iO), aP) : void 0),
          (lz[588] = a_),
          (lz[589] = aP),
          (lz[590] = iO),
          (lz[591] = lb))
        : (lb = lz[591])
      let oC = lb
      lz[592] !== oC || lz[593] !== rP || lz[594] !== sk || lz[595] !== aP || lz[596] !== l9 || lz[597] !== i2
        ? ((lx =
            null == oC && null == i2
              ? void 0
              : () => {
                  if (null != oC) return void l9(oC)
                  if (null == i2) return
                  let e = (0, tA.Y2)({ remotePluginId: i2, installUrl: null })
                  e.startsWith("/settings/plugins-settings/") ? l9(e) : (rP(), sk(e))
                }),
          (lz[592] = oC),
          (lz[593] = rP),
          (lz[594] = sk),
          (lz[595] = aP),
          (lz[596] = l9),
          (lz[597] = i2),
          (lz[598] = lx))
        : (lx = lz[598])
      let oP = lx,
        o_ =
          !iM &&
          iT &&
          iG &&
          (l4?.account_user_role === "account-admin" || l4?.account_user_role === "account-owner") &&
          ij?.scope === "WORKSPACE" &&
          ij.workspaceId === l2,
        oM = null
      if (
        "ready" === od &&
        null != iO &&
        ((iQ &&
          (!sc ||
            "required_app_unavailable" === iO.summary.disabledReason ||
            "plan_not_eligible" === iO.summary.disabledReason)) ||
          (iY && (iZ?.plugin_id != null || !iK)))
      )
        if (i1 || i0) {
          let e, t
          ;(lz[599] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)(b.A, { ...ej.W.unavailable })), (lz[599] = e))
            : (e = lz[599]),
            lz[600] !== i1
              ? ((t = (0, l.jsx)(F.$, { color: "primary", disabled: !0, loading: i1, size: "toolbar", children: e })),
                (lz[600] = i1),
                (lz[601] = t))
              : (t = lz[601]),
            (oM = t))
        } else if (iZ?.plugin_id != null) {
          let e, t, n
          ;(lz[602] !== oA || lz[603] !== iO
            ? ((e = (e) => (0, td.y)(e, () => oA(iO, null))), (lz[602] = oA), (lz[603] = iO), (lz[604] = e))
            : (e = lz[604]),
            lz[605] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, l.jsx)(b.A, {
                  id: "plugins.detail.template.openConfiguredApp",
                  defaultMessage: "Open configured app",
                })),
                (lz[605] = t))
              : (t = lz[605]),
            lz[606] !== og || lz[607] !== e
              ? ((n = (0, l.jsx)(F.z, { href: og, color: "primary", size: "toolbar", onClick: e, children: t })),
                (lz[606] = og),
                (lz[607] = e),
                (lz[608] = n))
              : (n = lz[608]),
            (oM = n))
        } else {
          let e, t, n, a, i
          lz[609] !== l1 ? ((e = l1.formatMessage(ej.W.disabled)), (lz[609] = l1), (lz[610] = e)) : (e = lz[610])
          let r = e
          if (
            (lz[611] !== l4 ? ((t = (0, l.jsx)(eP, { account: l4 })), (lz[611] = l4), (lz[612] = t)) : (t = lz[612]),
            lz[613] !== r
              ? ((n = (0, l.jsx)(F.$, {
                  "aria-hidden": "true",
                  color: "primary",
                  disabled: !0,
                  size: "toolbar",
                  children: r,
                })),
                (lz[613] = r),
                (lz[614] = n))
              : (n = lz[614]),
            lz[615] !== r || lz[616] !== n
              ? ((a = (0, l.jsx)("span", {
                  "aria-disabled": "true",
                  "aria-label": r,
                  className: "inline-flex",
                  role: "button",
                  tabIndex: 0,
                  children: n,
                })),
                (lz[615] = r),
                (lz[616] = n),
                (lz[617] = a))
              : (a = lz[617]),
            lz[618] !== t || lz[619] !== a
              ? ((i = (0, l.jsx)(o.m, { content: t, children: a })), (lz[618] = t), (lz[619] = a), (lz[620] = i))
              : (i = lz[620]),
            (oM = i),
            iQ)
          ) {
            let e
            ;(lz[621] !== l2 ||
            lz[622] !== aP ||
            lz[623] !== iN ||
            lz[624] !== iO ||
            lz[625] !== iq ||
            lz[626] !== l5 ||
            lz[627] !== l3 ||
            lz[628] !== oM
              ? ((e =
                  null != iN && null != l3 && null != l2 && l5 === l2
                    ? (0, l.jsx)(
                        ef,
                        {
                          plugin: iO,
                          pluginName: tG(iO),
                          setup: iN,
                          identity: { accountId: l2, userId: l3 },
                          onAccessDenied: () => void iq(),
                        },
                        JSON.stringify([aP, l3, l2, iO.summary.id, iN.releaseId, iN.mcpKey]),
                      )
                    : (0, l.jsx)(ev.l, { plugin: iO.summary, fallback: oM, intent: "setup" })),
                (lz[621] = l2),
                (lz[622] = aP),
                (lz[623] = iN),
                (lz[624] = iO),
                (lz[625] = iq),
                (lz[626] = l5),
                (lz[627] = l3),
                (lz[628] = oM),
                (lz[629] = e))
              : (e = lz[629]),
              (oM = e))
          }
        }
      lz[630] !== l4 ||
      lz[631] !== l2 ||
      lz[632] !== oa ||
      lz[633] !== rW ||
      lz[634] !== rL ||
      lz[635] !== l1 ||
      lz[636] !== rq ||
      lz[637] !== rX ||
      lz[638] !== rK ||
      lz[639] !== ik ||
      lz[640] !== rD ||
      lz[641] !== iz ||
      lz[642] !== iO ||
      lz[643] !== lZ ||
      lz[644] !== rw ||
      lz[645] !== rY ||
      lz[646] !== rV ||
      lz[647] !== ae ||
      lz[648] !== l3
        ? ((lv =
            rq &&
            (null == ik || !rL || "WORKSPACE" !== iz.scope || (null != rY && null == rV)) &&
            (0, e9.PH)({
              plugin: iz,
              account: l4,
              userId: l3,
              hasWritePermission: "editable" === rD,
              isSourceManaged: rK,
            }) &&
            ("WORKSPACE" !== iz.scope || rW)
              ? () => {
                  if (lZ.get(N.tT) !== l2 || rX || null != rI.current || !oa) return
                  let e = new AbortController()
                  ;((rI.current = e),
                    rw(!0),
                    (0, e4.P)(lZ, e.signal)
                      .then((t) => {
                        null == t ||
                          e.signal.aborted ||
                          lZ.get(N.tT) !== l2 ||
                          ae({
                            activeProject: null,
                            codexAppMode: "allowed" === lZ.get(O.lN).status ? "work" : "chat",
                            prefillPrompt: l1.formatMessage(
                              {
                                id: "plugins.detail.editWithCreatorPrompt",
                                defaultMessage: "{pluginCreator} Edit {plugin} to",
                              },
                              {
                                pluginCreator: (0, q.xR)("@Plugin Creator", (0, D.vt)(t.pluginId)),
                                plugin: (0, q.xR)(`@${tG(iO)}`, (0, D.vt)(iz.id)),
                              },
                            ),
                            startInSidebar: !0,
                          })
                      })
                      .catch(() => {
                        e.signal.aborted ||
                          lZ
                            .get(Y.Id)
                            .danger(
                              l1.formatMessage({
                                id: "plugins.detail.editSetupFailed",
                                defaultMessage: "Couldn\u2019t set up Plugin Creator. Try again",
                              }),
                              { errorAnalytics: { toastId: "plugins.detail.editSetupFailed" } },
                            )
                      })
                      .finally(() => {
                        ;((rI.current = null), rw(!1))
                      }))
                }
              : void 0),
          (lz[630] = l4),
          (lz[631] = l2),
          (lz[632] = oa),
          (lz[633] = rW),
          (lz[634] = rL),
          (lz[635] = l1),
          (lz[636] = rq),
          (lz[637] = rX),
          (lz[638] = rK),
          (lz[639] = ik),
          (lz[640] = rD),
          (lz[641] = iz),
          (lz[642] = iO),
          (lz[643] = lZ),
          (lz[644] = rw),
          (lz[645] = rY),
          (lz[646] = rV),
          (lz[647] = ae),
          (lz[648] = l3),
          (lz[649] = lv))
        : (lv = lz[649])
      let oE = lv
      lz[650] !== l4?.structure ||
      lz[651] !== l2 ||
      lz[652] !== o_ ||
      lz[653] !== iI ||
      lz[654] !== s6 ||
      lz[655] !== oC ||
      lz[656] !== r$ ||
      lz[657] !== sp ||
      lz[658] !== am ||
      lz[659] !== oA ||
      lz[660] !== sW ||
      lz[661] !== oE ||
      lz[662] !== ob ||
      lz[663] !== rP ||
      lz[664] !== oP ||
      lz[665] !== sk ||
      lz[666] !== re ||
      lz[667] !== iJ ||
      lz[668] !== aP ||
      lz[669] !== oj ||
      lz[670] !== iw ||
      lz[671] !== sZ?.icon ||
      lz[672] !== i5 ||
      lz[673] !== sj ||
      lz[674] !== sd ||
      lz[675] !== s4 ||
      lz[676] !== iB ||
      lz[677] !== iQ ||
      lz[678] !== sc ||
      lz[679] !== rS ||
      lz[680] !== iM ||
      lz[681] !== rc ||
      lz[682] !== s3 ||
      lz[683] !== s5 ||
      lz[684] !== rO ||
      lz[685] !== l0.state ||
      lz[686] !== l9 ||
      lz[687] !== ij ||
      lz[688] !== s2 ||
      lz[689] !== s1 ||
      lz[690] !== ok ||
      lz[691] !== s0 ||
      lz[692] !== s$?.icon ||
      lz[693] !== rv ||
      lz[694] !== sF ||
      lz[695] !== iO ||
      lz[696] !== om ||
      lz[697] !== i2 ||
      lz[698] !== lZ ||
      lz[699] !== iP ||
      lz[700] !== so ||
      lz[701] !== od ||
      lz[702] !== oM
        ? ((lA =
            "ready" === od && null != iO
              ? (0, l.jsx)(tl.Y, {
                  desktopHandoff: s4 ? { onCopyLink: sW, pluginName: tG(iO) } : void 0,
                  desktopOpenPluginId: s6,
                  setUpOnWebHref: null == i2 ? void 0 : (0, tA.x1)(i2, iO.appTemplates.length),
                  onSetUpOnWeb:
                    null != i2 && !iQ && iJ
                      ? () => {
                          let e = (0, tA.x1)(i2, iO.appTemplates.length)
                          e.startsWith("/settings/plugins-settings/") ? l9(e) : (rP(), sk(e))
                        }
                      : void 0,
                  isDesktopOnly: s4,
                  isTemplate: iM,
                  hostedPluginId: oj,
                  hideAuthoringActions: rc,
                  primaryAction: oM,
                  onHostedPluginDeleted: async () => {
                    ;((0, ed.dz)({
                      queryClient: lZ.queryClient,
                      hostId: aP,
                      pluginId: iO.summary.id,
                      installed: !1,
                      enabled: !1,
                    }),
                      await l9("/plugins", { replace: !0 }))
                  },
                  planUpgradePlugin: iO.summary,
                  onEdit: rO ? void 0 : oE,
                  editDisabledTooltip: r$,
                  isPreparingEdit: rS,
                  manageTo: oC,
                  onManage: oP,
                  onSettings: o_ ? oP : void 0,
                  incentiveTarget: {
                    hostId: aP,
                    isConnectionReady: iO.apps.every((e) => {
                      let { id: t } = e
                      return i5.some((e) => e.id === t && e.isAccessible && e.isEnabled) && !sj(t)
                    }),
                    pluginName: iO.summary.interface?.displayName ?? iO.summary.name,
                    pluginIds: [iO.summary.id, iO.summary.remotePluginId, iO.summary.shareContext?.remotePluginId],
                  },
                  blockedReason: sp,
                  disabledReason: sc ? (iO.summary.disabledReason ?? null) : null,
                  hasMultipleConnectedAccounts: re,
                  hasWorkspace: l4?.structure === "workspace",
                  installPhase: s2,
                  installProgressPercent: s1,
                  isInstallBlockedLoading: sd,
                  isInstallLocked: null != rv,
                  isEnabled: iO.summary.enabled,
                  isInstalled: iO.summary.installed,
                  isInstalledByDefault: (0, tu._)(iO.summary),
                  installPolicySource: iO.summary.installPolicySource,
                  isUninstalling: s3,
                  isUpdatingEnabled: s5,
                  pluginIcon: null == s0 ? void 0 : (0, l.jsx)(et.K, { size: 20, icon: sZ?.icon ?? s$?.icon ?? null }),
                  shareMenuItem:
                    rc ||
                    l4?.structure !== "workspace" ||
                    iw?.scope === "GLOBAL" ||
                    "remote" !== iO.summary.source.type ||
                    null == iO.summary.remotePluginId
                      ? ok
                      : (0, l.jsxs)(l.Fragment, {
                          children: [
                            ok,
                            (0, l.jsx)(te.B, {
                              pluginId: iO.summary.remotePluginId,
                              canonicalAppId: iI,
                              pluginDisplayName: tG(iO),
                              ownership: ij ?? null,
                              shareContext: iO.summary.shareContext,
                              isWorkspacePlugin:
                                null != iw ? "WORKSPACE" === iw.scope : null != iO.summary.shareContext,
                              shareUrl: sF,
                              sourceGizmoId:
                                ij?.scope === "WORKSPACE" && ij.workspaceId === l2 ? (iP ?? void 0) : void 0,
                            }),
                          ],
                        }),
                  onInstall: () => {
                    oA(iO, null)
                  },
                  onInstallIntent: om,
                  openPluginTo: s0 ?? void 0,
                  onOpenPlugin:
                    null == s0
                      ? void 0
                      : () => {
                          l9(s0, { state: l0.state })
                        },
                  onEnable: () => {
                    ob(iO)
                  },
                  onTryInChat: () => {
                    ;((0, tc.zy)(lZ, {
                      plugin: iO.summary,
                      ...am(),
                      target: r.CodexPluginClickTarget.CODEX_PLUGIN_CLICK_TARGET_TRY_IN_TASK,
                    }),
                      oA(iO, (0, tx.Dy)(iO.summary.interface?.defaultPrompt)))
                  },
                  onUninstall: iM
                    ? void 0
                    : () => {
                        so({
                          marketplaceAnalytics: { plugin: iO.summary, ...am() },
                          marketplaceName: iO.marketplaceName,
                          pluginDisplayName: tG(iO),
                          pluginId: iO.summary.id,
                          pluginName: iO.summary.name,
                          requestPluginId: (0, m.RQ)((0, ed.qA)(iO)),
                        }).catch(tE)
                      },
                })
              : null),
          (lz[650] = l4?.structure),
          (lz[651] = l2),
          (lz[652] = o_),
          (lz[653] = iI),
          (lz[654] = s6),
          (lz[655] = oC),
          (lz[656] = r$),
          (lz[657] = sp),
          (lz[658] = am),
          (lz[659] = oA),
          (lz[660] = sW),
          (lz[661] = oE),
          (lz[662] = ob),
          (lz[663] = rP),
          (lz[664] = oP),
          (lz[665] = sk),
          (lz[666] = re),
          (lz[667] = iJ),
          (lz[668] = aP),
          (lz[669] = oj),
          (lz[670] = iw),
          (lz[671] = sZ?.icon),
          (lz[672] = i5),
          (lz[673] = sj),
          (lz[674] = sd),
          (lz[675] = s4),
          (lz[676] = iB),
          (lz[677] = iQ),
          (lz[678] = sc),
          (lz[679] = rS),
          (lz[680] = iM),
          (lz[681] = rc),
          (lz[682] = s3),
          (lz[683] = s5),
          (lz[684] = rO),
          (lz[685] = l0.state),
          (lz[686] = l9),
          (lz[687] = ij),
          (lz[688] = s2),
          (lz[689] = s1),
          (lz[690] = ok),
          (lz[691] = s0),
          (lz[692] = s$?.icon),
          (lz[693] = rv),
          (lz[694] = sF),
          (lz[695] = iO),
          (lz[696] = om),
          (lz[697] = i2),
          (lz[698] = lZ),
          (lz[699] = iP),
          (lz[700] = so),
          (lz[701] = od),
          (lz[702] = oM),
          (lz[703] = lA))
        : (lA = lz[703])
      let oT = lA
      lz[704] !== aP || lz[705] !== n$
        ? ((lI = (0, l.jsx)(v.G.HeaderToolbar, { children: (0, l.jsx)(tt.W, { hostId: aP, pluginTitle: n$ }) })),
          (lz[704] = aP),
          (lz[705] = n$),
          (lz[706] = lI))
        : (lI = lz[706])
      let oN = lI
      ;(lz[707] !== sW || lz[708] !== s4 || lz[709] !== ai || lz[710] !== iO
        ? ((lS =
            s4 && null != iO
              ? (0, l.jsx)(tn.o, { onCopyLink: sW, onOpenChange: ar, open: ai, pluginName: tG(iO) })
              : null),
          (lz[707] = sW),
          (lz[708] = s4),
          (lz[709] = ai),
          (lz[710] = iO),
          (lz[711] = lS))
        : (lS = lz[711]),
        lz[712] !== sV || lz[713] !== oN || lz[714] !== lH
          ? ((lw =
              "page" === lH &&
              (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(A.bn, { contentInset: "default" }),
                  (0, l.jsx)(V.Q, { title: sV }),
                  null,
                  (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)(v.G.Header, { desktopPlacement: "titlebar", children: oN }),
                  }),
                ],
              })),
            (lz[712] = sV),
            (lz[713] = oN),
            (lz[714] = lH),
            (lz[715] = lw))
          : (lw = lz[715]),
        lz[716] !== as ||
        lz[717] !== l2 ||
        lz[718] !== i6 ||
        lz[719] !== rr ||
        lz[720] !== sJ ||
        lz[721] !== iI ||
        lz[722] !== iZ ||
        lz[723] !== ox ||
        lz[724] !== s7 ||
        lz[725] !== s6 ||
        lz[726] !== r_ ||
        lz[727] !== r$ ||
        lz[728] !== iA ||
        lz[729] !== sp ||
        lz[730] !== am ||
        lz[731] !== oA ||
        lz[732] !== sS ||
        lz[733] !== oE ||
        lz[734] !== rP ||
        lz[735] !== sk ||
        lz[736] !== oI ||
        lz[737] !== iK ||
        lz[738] !== ak ||
        lz[739] !== aP ||
        lz[740] !== iw ||
        lz[741] !== i4 ||
        lz[742] !== i5 ||
        lz[743] !== sX ||
        lz[744] !== sQ ||
        lz[745] !== iv ||
        lz[746] !== sj ||
        lz[747] !== sd ||
        lz[748] !== sC ||
        lz[749] !== ra ||
        lz[750] !== s4 ||
        lz[751] !== st ||
        lz[752] !== s8 ||
        lz[753] !== i_ ||
        lz[754] !== iB ||
        lz[755] !== iQ ||
        lz[756] !== sg ||
        lz[757] !== of ||
        lz[758] !== rS ||
        !1 !== lz[759] ||
        lz[760] !== iM ||
        lz[761] !== s3 ||
        lz[762] !== s5 ||
        lz[763] !== rO ||
        lz[764] !== iY ||
        lz[765] !== l0.search ||
        lz[766] !== ii ||
        lz[767] !== l9 ||
        lz[768] !== ij ||
        lz[769] !== oT ||
        lz[770] !== ou ||
        lz[771] !== ry ||
        lz[772] !== i7 ||
        lz[773] !== sF ||
        lz[774] !== iO ||
        lz[775] !== lH ||
        lz[776] !== rj ||
        lz[777] !== oh ||
        lz[778] !== lZ ||
        lz[779] !== iR ||
        lz[780] !== r9 ||
        lz[781] !== at ||
        lz[782] !== aD ||
        lz[783] !== rt ||
        lz[784] !== rZ ||
        lz[785] !== iP ||
        lz[786] !== rf ||
        lz[787] !== se ||
        lz[788] !== l3 ||
        lz[789] !== od
          ? ((lk = (0, l.jsx)("div", {
              className: "flex min-h-0 flex-1 flex-col overflow-hidden",
              children:
                "ready" === od && null != iO
                  ? (0, l.jsx)(ts.o, {
                      presentation: lH,
                      actions: oT,
                      banner: rZ
                        ? (0, l.jsx)(ty, {
                            accountAndPlugin: `${l2}:${iw.id}`,
                            onEdit: rO
                              ? () => {
                                  let e = (0, x.Rr)((0, eu.Ct)({ pluginId: iw.id, browseSearch: l0.search }))
                                  l9({ ...e, pathname: `${e.pathname}/edit` })
                                }
                              : oE,
                            editDisabledTooltip: rO ? void 0 : r$,
                            isLoadingEdit: !rO && rS,
                            shareAction:
                              ij?.scope === "WORKSPACE" &&
                              ij.workspaceId === l2 &&
                              null != iO.summary.remotePluginId &&
                              null != iP
                                ? (0, l.jsx)(te.B, {
                                    variant: "banner",
                                    pluginId: iO.summary.remotePluginId,
                                    pluginDisplayName: tG(iO),
                                    ownership: ij,
                                    shareContext: iO.summary.shareContext,
                                    isWorkspacePlugin: !0,
                                    shareUrl: sF,
                                    sourceGizmoId: iP,
                                  })
                                : void 0,
                          })
                        : void 0,
                      apps: i5,
                      canonicalAppId: iI,
                      isPersonalAccount: iB,
                      isPublicTemplate: !1,
                      isTemplate: iM,
                      appConnections: i6,
                      appInstallBlockedReasonsById: rr,
                      browserExtensions: sJ,
                      connectedAccounts: {
                        isConnectorSetupReady: ak && !s8,
                        accountId: l2,
                        isAppConnectPending: sj,
                        isAppReauthPending: sC,
                        onLastAccountDisconnected: rj,
                        pendingConnection:
                          null != as &&
                          sj(as.appId, { kind: "apps-tab", reauthLinkId: "reauth" === as.kind ? as.linkId : void 0 })
                            ? as
                            : null,
                        userId: l3,
                        onConnectAccount: async (e, t) => {
                          if (!st(e.id)) {
                            ao(t)
                            try {
                              await sS(e, {
                                appConnectOptions: t.appConnectOptions,
                                addAccountAttempt: t.addAccountAttempt,
                                forceInApp: !0,
                                isAddingAccount: "add" === t.kind,
                                hasExistingAccount: t.hasExistingAccount,
                                reauthLinkId: "reauth" === t.kind ? t.linkId : void 0,
                                mustShowInstallationInterstitial: iO.summary.mustShowInstallationInterstitial,
                              })
                            } catch (e) {
                              throw (ao(null), e)
                            }
                          }
                        },
                      },
                      effectiveConfig: iA,
                      settings: (0, l.jsx)(tv.x, { plugin: iO, hostId: aP, links: i7 }),
                      installedSkills: sQ.installedSkills,
                      hostId: aP,
                      installBlockedReason: sp,
                      isConfigPending: iv,
                      isPromptInstallBlocked: iQ || (iY && !iK && null == iZ) || sg || sd || (s4 && null == s6),
                      isAppConnectPending: sj,
                      updatingAppId: r_.isPending ? r_.variables.id : se,
                      isUpdatingEnabled: s5,
                      isUninstalling: s3,
                      onActivatePrompt: (e, t, n) => {
                        if (s4) {
                          if (null == s6) return
                          ;((0, tc.zy)(lZ, {
                            plugin: iO.summary,
                            position: t,
                            ...am(),
                            target: r.CodexPluginClickTarget.CODEX_PLUGIN_CLICK_TARGET_STARTER_PROMPT,
                          }),
                            (0, u.Xb)()
                              ? ar(!0)
                              : (0, W.PQ)({
                                  disposition: "current-tab",
                                  event: n,
                                  href: new URL(s7, window.location.origin).href,
                                  initiator: "open_in_browser_bridge",
                                }))
                          return
                        }
                        oA(iO, e, t)
                      },
                      onInstallApp: ox,
                      onOpenAppTools: (e) => {
                        st(e.id) || aa(e.id)
                      },
                      onDisconnectApp: async (e) => {
                        await r_.mutateAsync(e)
                      },
                      onOpenPluginSettingsUrl: (e) => {
                        e.startsWith("/settings/plugins-settings/") ? l9(e) : sk(e)
                      },
                      canManageTemplates: !iQ,
                      serviceAppTemplates: iR,
                      onManageApps: rP,
                      onOpenHooksSettings: () => {
                        ;(0, eR.h)({
                          hostId: aP,
                          navigate: l9,
                          section: (0, eD.Rf)({ hostId: aP, pluginId: iO.summary.id, source: "plugin" }),
                          setSelectedHostId: at,
                        })
                      },
                      onTrustAllHooks: () => {
                        rf.mutate(ry.map(tM))
                      },
                      onSetAppEnabled: r9,
                      onSkillsUpdated: ii,
                      mcpServers: iM ? [] : sX,
                      showInPluginAppList: rt,
                      onOpenMcpSettings: () => {
                        ;(at(aP), l9("/settings/mcp-settings"))
                      },
                      onToggleMcpServerEnabled: (e, t) => {
                        oI(e, t)
                      },
                      plugin: { ...iO, appTemplates: i4 },
                      pluginScope: iw?.scope,
                      scheduledTasks:
                        null == oh
                          ? void 0
                          : {
                              items: oh.templates,
                              onSetUpTemplate: (e) => {
                                l9("/automations?automationMode=create", {
                                  state: { pluginId: oh.plugin.id, template: e },
                                })
                              },
                            },
                      hooksNeedingReviewCount: ry.length,
                      state: "ready",
                      unavailableSkills: sQ.unavailableSkills,
                    })
                  : "error" === od
                    ? (0, l.jsx)(ts.o, { errorMessage: ou, state: "error" })
                    : "loading" === od
                      ? (0, l.jsx)(ts.o, {
                          state: "loading",
                          plugin: i_ || !ra || aD || null != ou ? null : iO,
                          presentation: lH,
                        })
                      : (0, l.jsx)(ts.o, {
                          state: "missing",
                          description: of ? (0, l.jsx)(b.A, { ...tC.missingFromCurrentMarketplaces }) : void 0,
                        }),
            })),
            (lz[716] = as),
            (lz[717] = l2),
            (lz[718] = i6),
            (lz[719] = rr),
            (lz[720] = sJ),
            (lz[721] = iI),
            (lz[722] = iZ),
            (lz[723] = ox),
            (lz[724] = s7),
            (lz[725] = s6),
            (lz[726] = r_),
            (lz[727] = r$),
            (lz[728] = iA),
            (lz[729] = sp),
            (lz[730] = am),
            (lz[731] = oA),
            (lz[732] = sS),
            (lz[733] = oE),
            (lz[734] = rP),
            (lz[735] = sk),
            (lz[736] = oI),
            (lz[737] = iK),
            (lz[738] = ak),
            (lz[739] = aP),
            (lz[740] = iw),
            (lz[741] = i4),
            (lz[742] = i5),
            (lz[743] = sX),
            (lz[744] = sQ),
            (lz[745] = iv),
            (lz[746] = sj),
            (lz[747] = sd),
            (lz[748] = sC),
            (lz[749] = ra),
            (lz[750] = s4),
            (lz[751] = st),
            (lz[752] = s8),
            (lz[753] = i_),
            (lz[754] = iB),
            (lz[755] = iQ),
            (lz[756] = sg),
            (lz[757] = of),
            (lz[758] = rS),
            (lz[759] = !1),
            (lz[760] = iM),
            (lz[761] = s3),
            (lz[762] = s5),
            (lz[763] = rO),
            (lz[764] = iY),
            (lz[765] = l0.search),
            (lz[766] = ii),
            (lz[767] = l9),
            (lz[768] = ij),
            (lz[769] = oT),
            (lz[770] = ou),
            (lz[771] = ry),
            (lz[772] = i7),
            (lz[773] = sF),
            (lz[774] = iO),
            (lz[775] = lH),
            (lz[776] = rj),
            (lz[777] = oh),
            (lz[778] = lZ),
            (lz[779] = iR),
            (lz[780] = r9),
            (lz[781] = at),
            (lz[782] = aD),
            (lz[783] = rt),
            (lz[784] = rZ),
            (lz[785] = iP),
            (lz[786] = rf),
            (lz[787] = se),
            (lz[788] = l3),
            (lz[789] = od),
            (lz[790] = lk))
          : (lk = lz[790]))
      let oO = sP ? null : sb,
        oU = as?.kind === "add" && as.appId === sb?.id,
        oR = as?.appId === sb?.id && as?.hasExistingAccount === !0,
        oL = as?.kind === "reauth" || (sb?.isAccessible === !0 && as?.kind !== "add"),
        oD = as?.kind === "reauth" ? as.linkId : void 0
      ;(lz[791] !== as ||
      lz[792] !== l2 ||
      lz[793] !== sy ||
      lz[794] !== sb ||
      lz[795] !== aP ||
      lz[796] !== lZ ||
      lz[797] !== sM ||
      lz[798] !== l3
        ? ((lj = (e) => {
            e ||
              (sM(),
              null != sb &&
                as?.addAccountAttempt != null &&
                (0, k.gJ)(lZ, { accountId: l2, appId: sb.id, hostId: aP, userId: l3 }, as.addAccountAttempt.id),
              sy())
          }),
          (lz[791] = as),
          (lz[792] = l2),
          (lz[793] = sy),
          (lz[794] = sb),
          (lz[795] = aP),
          (lz[796] = lZ),
          (lz[797] = sM),
          (lz[798] = l3),
          (lz[799] = lj))
        : (lj = lz[799]),
        lz[800] !== as || lz[801] !== sx?.redirectAfter
          ? ((lC = () => ({
              returnTo: sx?.redirectAfter,
              resumeTarget: {
                kind: "apps-tab",
                reauthLinkId: as?.kind === "reauth" ? as.linkId : void 0,
                addAccountAttempt: as?.addAccountAttempt,
              },
            })),
            (lz[800] = as),
            (lz[801] = sx?.redirectAfter),
            (lz[802] = lC))
          : (lC = lz[802]),
        lz[803] !== s_ || lz[804] !== sP || lz[805] !== sh
          ? ((lP = () => {
              sP || sh(s_(), "CHATGPT_PLUGIN_ACTION_RESULT_CANCELLED")
            }),
            (lz[803] = s_),
            (lz[804] = sP),
            (lz[805] = sh),
            (lz[806] = lP))
          : (lP = lz[806]))
      let oq = sv?.installAttemptId
      ;(lz[807] !== sf || lz[808] !== sb || lz[809] !== s_ || lz[810] !== sP
        ? ((l_ = () => {
            let e = s_()
            if (null != e && null != sb && !sP)
              return (
                e.context.requiredAppAnalytics?.terminalResult === "failure" &&
                  ((e.context = sf(sb, e.context)), (e.pending = !0)),
                e.context.installAttemptId
              )
          }),
          (lz[807] = sf),
          (lz[808] = sb),
          (lz[809] = s_),
          (lz[810] = sP),
          (lz[811] = l_))
        : (l_ = lz[811]),
        lz[812] !== sx || lz[813] !== sI || lz[814] !== sP || lz[815] !== sM
          ? ((lM = (e) => {
              let t = sM()
              sP || sI({ ...e, marketplaceAnalytics: t, returnTo: sx?.redirectAfter, appConnectOptions: sx })
            }),
            (lz[812] = sx),
            (lz[813] = sI),
            (lz[814] = sP),
            (lz[815] = sM),
            (lz[816] = lM))
          : (lM = lz[816]),
        lz[817] !== as || lz[818] !== sb || lz[819] !== sw || lz[820] !== sP || lz[821] !== sM
          ? ((lE = () => {
              ;(sM(),
                null == sb ||
                  sP ||
                  sw(sb, { kind: "apps-tab", reauthLinkId: as?.kind === "reauth" ? as.linkId : void 0 }))
            }),
            (lz[817] = as),
            (lz[818] = sb),
            (lz[819] = sw),
            (lz[820] = sP),
            (lz[821] = sM),
            (lz[822] = lE))
          : (lE = lz[822]),
        lz[823] !== sb ||
        lz[824] !== sv ||
        lz[825] !== s_ ||
        lz[826] !== am ||
        lz[827] !== sh ||
        lz[828] !== iO ||
        lz[829] !== lZ ||
        lz[830] !== sM
          ? ((lT = (e) => {
              sv?.chatgpt != null
                ? sh(s_(), "CHATGPT_PLUGIN_ACTION_RESULT_FAILURE", e)
                : (sM(),
                  null != iO &&
                    null != sb &&
                    (0, tc.v6)(lZ, {
                      action: s.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_CONNECT_CONNECTOR,
                      connectorId: sb.id,
                      errorType: e,
                      plugin: iO.summary,
                      result: s.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_FAILURE,
                      ...(sv ?? am()),
                    }))
            }),
            (lz[823] = sb),
            (lz[824] = sv),
            (lz[825] = s_),
            (lz[826] = am),
            (lz[827] = sh),
            (lz[828] = iO),
            (lz[829] = lZ),
            (lz[830] = sM),
            (lz[831] = lT))
          : (lT = lz[831]),
        lz[832] !== as ||
        lz[833] !== sb ||
        lz[834] !== sv ||
        lz[835] !== sx ||
        lz[836] !== s_ ||
        lz[837] !== am ||
        lz[838] !== sA ||
        lz[839] !== rk ||
        lz[840] !== an ||
        lz[841] !== sh ||
        lz[842] !== iO ||
        lz[843] !== iq ||
        lz[844] !== ri ||
        lz[845] !== lZ
          ? ((lN = async (e) => {
              ;(sh(s_(), "CHATGPT_PLUGIN_ACTION_RESULT_SUCCESS", void 0, e),
                null != sb && sA(sb.id, { kind: "apps-tab", reauthLinkId: as?.kind === "reauth" ? as.linkId : void 0 }),
                null != iO &&
                  null != sb &&
                  sv?.chatgpt == null &&
                  (0, tc.v6)(lZ, {
                    action: s.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_CONNECT_CONNECTOR,
                    connectorId: sb.id,
                    plugin: iO.summary,
                    result: s.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_SUCCESS,
                    ...(sv ?? am()),
                  }))
              let t = Promise.all([ri(), tY({ invalidateQueriesAndBroadcast: an, refetchPluginDetail: iq }), rk()])
              if (sx?.redirectAfter != null) {
                ;(await t, (0, w.N)(sx))
                return
              }
              t.catch(t_)
            }),
            (lz[832] = as),
            (lz[833] = sb),
            (lz[834] = sv),
            (lz[835] = sx),
            (lz[836] = s_),
            (lz[837] = am),
            (lz[838] = sA),
            (lz[839] = rk),
            (lz[840] = an),
            (lz[841] = sh),
            (lz[842] = iO),
            (lz[843] = iq),
            (lz[844] = ri),
            (lz[845] = lZ),
            (lz[846] = lN))
          : (lN = lz[846]),
        lz[847] !== sx ||
        lz[848] !== aP ||
        lz[849] !== oO ||
        lz[850] !== oU ||
        lz[851] !== oR ||
        lz[852] !== oL ||
        lz[853] !== oD ||
        lz[854] !== lj ||
        lz[855] !== lC ||
        lz[856] !== lP ||
        lz[857] !== oq ||
        lz[858] !== l_ ||
        lz[859] !== lM ||
        lz[860] !== lE ||
        lz[861] !== lT ||
        lz[862] !== lN
          ? ((lO = (0, l.jsx)(eO.Z, {
              app: oO,
              appConnectOptions: sx,
              hostId: aP,
              isAddingAccount: oU,
              hasExistingAccount: oR,
              isReconnecting: oL,
              reauthLinkId: oD,
              onOpenChange: lj,
              getOAuthResumeContext: lC,
              onUserDismissed: lP,
              installAttemptId: oq,
              onConnectStarted: l_,
              onOAuthStarted: lM,
              onExternalConnectStarted: lE,
              onConnectFailed: lT,
              onConnected: lN,
            })),
            (lz[847] = sx),
            (lz[848] = aP),
            (lz[849] = oO),
            (lz[850] = oU),
            (lz[851] = oR),
            (lz[852] = oL),
            (lz[853] = oD),
            (lz[854] = lj),
            (lz[855] = lC),
            (lz[856] = lP),
            (lz[857] = oq),
            (lz[858] = l_),
            (lz[859] = lM),
            (lz[860] = lE),
            (lz[861] = lT),
            (lz[862] = lN),
            (lz[863] = lO))
          : (lO = lz[863]))
      let oF = sa.error?.message ?? null
      lz[864] === Symbol.for("react.memo_cache_sentinel")
        ? ((lU = (e) => {
            e || aa(null)
          }),
          (lz[864] = lU))
        : (lU = lz[864])
      let oz = (!a_ || null == l5) && iO?.summary.installed === !0
      return (
        lz[865] !== ia || lz[866] !== st || lz[867] !== ae
          ? ((lR = (e) => {
              st(e.id) ||
                ae({
                  activeProject: ia,
                  prefillPrompt: `[@${e.name}](${(0, q.b4)((0, D.nw)(e.id))})`,
                  startInSidebar: !0,
                })
            }),
            (lz[865] = ia),
            (lz[866] = st),
            (lz[867] = ae),
            (lz[868] = lR))
          : (lR = lz[868]),
        lz[869] !== sa.data?.tools
          ? ((lL = sa.data?.tools ?? []), (lz[869] = sa.data?.tools), (lz[870] = lL))
          : (lL = lz[870]),
        lz[871] !== sa.data?.events
          ? ((lD = sa.data?.events ?? []), (lz[871] = sa.data?.events), (lz[872] = lD))
          : (lD = lz[872]),
        lz[873] !== iv ||
        lz[874] !== nA ||
        lz[875] !== sl ||
        lz[876] !== sa.isLoading ||
        lz[877] !== r9 ||
        lz[878] !== oF ||
        lz[879] !== oz ||
        lz[880] !== lR ||
        lz[881] !== lL ||
        lz[882] !== lD ||
        lz[883] !== se
          ? ((lq = (0, l.jsx)(eW.B, {
              app: nA,
              appRestriction: sl,
              errorMessage: oF,
              isConfigPending: iv,
              isLoading: sa.isLoading,
              onOpenChange: lU,
              onSetAppEnabled: r9,
              showEnableToggle: oz,
              onTryInChat: lR,
              tools: lL,
              events: lD,
              updatingAppId: se,
            })),
            (lz[873] = iv),
            (lz[874] = nA),
            (lz[875] = sl),
            (lz[876] = sa.isLoading),
            (lz[877] = r9),
            (lz[878] = oF),
            (lz[879] = oz),
            (lz[880] = lR),
            (lz[881] = lL),
            (lz[882] = lD),
            (lz[883] = se),
            (lz[884] = lq))
          : (lq = lz[884]),
        lz[885] !== lS || lz[886] !== lw || lz[887] !== lk || lz[888] !== lO || lz[889] !== lq
          ? ((lF = (0, l.jsxs)("div", {
              className: "flex h-full min-h-0 flex-col text-base",
              children: [null, lS, lw, lk, lO, lq],
            })),
            (lz[885] = lS),
            (lz[886] = lw),
            (lz[887] = lk),
            (lz[888] = lO),
            (lz[889] = lq),
            (lz[890] = lF))
          : (lF = lz[890]),
        lF
      )
    }
    function t_(e) {
      eK.v.error("Failed to refresh plugin details after app connect", { safe: {}, sensitive: { error: e } })
    }
    function tM(e) {
      return { key: e.key, trustedHash: e.currentHash }
    }
    function tE() {}
    function tT(e) {
      eK.v.error("Failed to refresh apps after plugin install", { safe: {}, sensitive: { error: e } })
    }
    function tN(e) {
      return (0, P.$)(e.id) === eX.m || "connector_openai_pages" === e.id
    }
    function tO() {
      return !1
    }
    function tU() {
      return !0
    }
    function tR(e) {
      return "workspace" === e.principal_type
    }
    function tL(e) {
      let { id: t } = e
      return t
    }
    function tD() {
      return !1
    }
    function tq() {}
    function tF(e) {
      return "rejected" === e.status
    }
    function tz(e) {
      return eQ.CodexRequest.safeDelete("/aip/connectors/links", {
        surface: "plugin_details",
        requestBody: { connector_id: e.id },
        additionalHeaders: { [S.ok]: (0, S.MR)() },
      })
    }
    function tW(e) {
      return e.materializedAppIds.length > 0
    }
    function tB() {
      let e,
        t,
        n,
        i,
        r,
        s,
        o = (0, a.c)(17),
        u = (0, x.zy)()
      if (o[0] !== u.pathname || o[1] !== u.search) {
        let l = new URLSearchParams(u.search)
        ;(l.set("breadcrumb", "settings"),
          (e = x.C5),
          (i = !0),
          o[6] !== u.pathname
            ? ((t = u.pathname.replace("/skills/manage/plugins/", "/plugins/")), (o[6] = u.pathname), (o[7] = t))
            : (t = o[7]),
          (n = l.toString()),
          (o[0] = u.pathname),
          (o[1] = u.search),
          (o[2] = e),
          (o[3] = t),
          (o[4] = n),
          (o[5] = i))
      } else ((e = o[2]), (t = o[3]), (n = o[4]), (i = o[5]))
      return (
        o[8] !== u.hash || o[9] !== t || o[10] !== n
          ? ((r = { pathname: t, search: n, hash: u.hash }), (o[8] = u.hash), (o[9] = t), (o[10] = n), (o[11] = r))
          : (r = o[11]),
        o[12] !== e || o[13] !== u.state || o[14] !== i || o[15] !== r
          ? ((s = (0, l.jsx)(e, { replace: i, to: r, state: u.state })),
            (o[12] = e),
            (o[13] = u.state),
            (o[14] = i),
            (o[15] = r),
            (o[16] = s))
          : (s = o[16]),
        s
      )
    }
    function tG(e) {
      return e.summary.interface?.displayName ?? e.summary.name
    }
    async function tY({ invalidateQueriesAndBroadcast: e, refetchPluginDetail: t }) {
      ;(await e(ed.qw), await t?.())
    }
  },
  r1BE(e, t, n) {
    var l = n("ABep"),
      a = n("QosV"),
      i = n("qmMi"),
      r = n("DBCl"),
      s = n("oyxz"),
      o = n("Ywss"),
      u = n("hOO0"),
      d = n("Sm6l"),
      c = n("OXR4"),
      p = n("Maf6"),
      g = n("Wv1R"),
      m = n("rdAJ"),
      f = n("BSnr"),
      h = n("fnPc"),
      y = n("AWNZ"),
      b = n("ZEx5"),
      x = n("jgsc"),
      v = n("tlx5")
    function A(e) {
      return { identity: { connectorId: (0, u.$)(e.id) }, name: e.name }
    }
    function I(e) {
      let t,
        n,
        i,
        r = (0, a.c)(9),
        { views: o, links: u } = e
      if (
        (r[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, l.jsx)(s.A, { id: "plugins.detail.settings.title", defaultMessage: "Settings" })), (r[0] = t))
          : (t = r[0]),
        r[1] !== u || r[2] !== o)
      ) {
        let e
        ;(r[4] !== u || r[5] !== o.length
          ? ((e = (e) =>
              "updateTool" in e
                ? (0, l.jsxs)(
                    f.X,
                    {
                      children: [
                        o.length > 1 && (0, l.jsx)(f.X.Header, { title: (0, l.jsx)("h3", { children: e.title }) }),
                        (0, l.jsx)(p.$, { view: e, links: u }),
                      ],
                    },
                    `${e.server}:${e.readTool}`,
                  )
                : (0, l.jsx)(
                    b.t,
                    { children: (0, l.jsx)(y.ic, { label: e.title, control: (0, l.jsx)(S, { view: e }) }) },
                    `${e.server}:${e.tool.name}`,
                  )),
            (r[4] = u),
            (r[5] = o.length),
            (r[6] = e))
          : (e = r[6]),
          (n = o.map(e)),
          (r[1] = u),
          (r[2] = o),
          (r[3] = n))
      } else n = r[3]
      return (
        r[7] !== n
          ? ((i = (0, l.jsx)(c.J, { id: "plugin-settings", title: t, children: n })), (r[7] = n), (r[8] = i))
          : (i = r[8]),
        i
      )
    }
    function S(e) {
      let t,
        n,
        i,
        u,
        c = (0, a.c)(12),
        { view: p } = e,
        g = (0, o.Zp)(),
        { setSelectedHostId: m } = (0, h.D8)()
      c[0] !== p.server || c[1] !== p.tool.name
        ? ((t = (0, r.i_$)(p.server, p.tool.name)), (c[0] = p.server), (c[1] = p.tool.name), (c[2] = t))
        : (t = c[2])
      let f = t,
        y = (0, o.$P)(f)
      return (
        c[3] !== g || c[4] !== m || c[5] !== f || c[6] !== p.hostId
          ? ((n = (e) =>
              (0, v.y)(e, () => {
                ;(m(p.hostId), g(f, { state: { initialHostId: p.hostId, returnToPreviousHistoryEntry: !0 } }))
              })),
            (c[3] = g),
            (c[4] = m),
            (c[5] = f),
            (c[6] = p.hostId),
            (c[7] = n))
          : (n = c[7]),
        c[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, l.jsx)(s.A, { id: "plugins.detail.settings.open", defaultMessage: "Open settings" })), (c[8] = i))
          : (i = c[8]),
        c[9] !== y || c[10] !== n
          ? ((u = (0, l.jsx)(d.z, { color: "secondary", href: y, onClick: n, children: i })),
            (c[9] = y),
            (c[10] = n),
            (c[11] = u))
          : (u = c[11]),
        u
      )
    }
    n.d(
      t,
      {},
      {
        x: function (e) {
          let t,
            n,
            r,
            s,
            o,
            u,
            d = (0, a.c)(19),
            { plugin: c, hostId: p, links: f } = e,
            h = (0, i._U)(g.v7, p)
          if (d[0] !== c || d[1] !== h) {
            let e
            ;(d[3] !== c
              ? ((e = (e) => !("readTool" in e && "hosted" === e.transport.type) && null != (0, x.b)(c, [e])),
                (d[3] = c),
                (d[4] = e))
              : (e = d[4]),
              (t = h.filter(e)),
              (d[0] = c),
              (d[1] = h),
              (d[2] = t))
          } else t = d[2]
          let y = t
          return c.summary.installed
            ? (d[5] !== f || d[6] !== y
                ? ((n = y.length > 0 && (0, l.jsx)(I, { views: y, links: f })), (d[5] = f), (d[6] = y), (d[7] = n))
                : (n = d[7]),
              d[8] !== p || d[9] !== c.summary.id
                ? ((r = { hostId: p, pluginId: c.summary.id }), (d[8] = p), (d[9] = c.summary.id), (d[10] = r))
                : (r = d[10]),
              d[11] !== c.apps ? ((s = c.apps.map(A)), (d[11] = c.apps), (d[12] = s)) : (s = d[12]),
              d[13] !== r || d[14] !== s
                ? ((o = (0, l.jsx)(m.W, { plugin: r, servers: s })), (d[13] = r), (d[14] = s), (d[15] = o))
                : (o = d[15]),
              d[16] !== n || d[17] !== o
                ? ((u = (0, l.jsxs)(l.Fragment, { children: [n, o] })), (d[16] = n), (d[17] = o), (d[18] = u))
                : (u = d[18]),
              u)
            : null
        },
      },
    )
  },
  Ee6v(e, t, n) {
    var l = n("DBCl")
    n.d(
      t,
      {},
      {
        z: function ({ localVersion: e, shareContext: t }) {
          return null != e && t?.remotePluginId != null && null != t.remoteVersion && (0, l.rT6)(e, t.remoteVersion) > 0
        },
      },
    )
  },
  uzkw(e, t, n) {
    var l = n("Kwur")
    n.d(
      t,
      {},
      {
        d: function ({
          connectorId: e,
          conversationId: t,
          eventType: n,
          expectedIdentity: a,
          messageId: i,
          pluginId: r,
          productSurface: s,
          suggestionMessageId: o,
        }) {
          l.Request.safePost("/unified_user_signals", {
            expectedIdentity: a,
            requestBody: {
              signal_type: "ecosystem_suggestion_interaction",
              product_surface: s,
              signal_metadata: {},
              user_metadata: {},
              signal_detail: {
                common_metadata: { conversation_id: t, message_id: i },
                ecosystem_suggestion_interaction: {
                  connector_id: e ?? "",
                  plugin_id: r,
                  suggestion_message_id: o,
                  event_type: n,
                },
              },
            },
          }).catch(() => void 0)
        },
      },
    )
  },
  sPQc(e, t, n) {
    var l = n("ABep"),
      a = n("QosV"),
      i = n("Wyro"),
      r = n.n(i),
      s = n("qmMi"),
      o = n("oyxz"),
      u = n("OiCI"),
      d = n("SlNh"),
      c = n("eo3l"),
      p = n("Buqh")
    function g(e) {
      let t,
        n,
        i,
        r = (0, a.c)(7),
        { categorySlug: u, hostId: c } = e
      r[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { enabled: !1 }), (r[0] = t)) : (t = r[0])
      let { data: g } = (0, s._U)(p.M, c, t)
      r[1] !== u || r[2] !== g
        ? ((n =
            null == g
              ? void 0
              : (0, d.jq)(g.plugins).find((e) => {
                  let { value: t } = e
                  return u === `plugins-marketplace-${encodeURIComponent(t)}`
                })),
          (r[1] = u),
          (r[2] = g),
          (r[3] = n))
        : (n = r[3])
      let m = n
      if (null == m) {
        let e
        return (
          r[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)(o.A, { id: "plugins.category.marketplace", defaultMessage: "Marketplace" })), (r[4] = e))
            : (e = r[4]),
          e
        )
      }
      let f = null == m.subLabel ? m.label : `${m.label} \xb7 ${m.subLabel}`
      return (r[5] !== f ? ((i = (0, l.jsx)(l.Fragment, { children: f })), (r[5] = f), (r[6] = i)) : (i = r[6]), i)
    }
    n.d(
      t,
      {},
      {
        E: function (e) {
          let t,
            n,
            i,
            d = (0, a.c)(17),
            { categorySlug: p, hostId: m } = e,
            f = (0, s.Ul)(u.vh)
          d[0] !== f || d[1] !== p || d[2] !== m
            ? ((t = { accountId: f, categorySlug: p, hostId: m }), (d[0] = f), (d[1] = p), (d[2] = m), (d[3] = t))
            : (t = d[3])
          let { data: h } = (0, s._U)(c.z, t)
          if ("plugins-created-by-you" === p) {
            let e
            return (
              d[4] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, l.jsx)(o.A, {
                    id: "skills.appsPage.section.createdByYou",
                    defaultMessage: "Created by you",
                  })),
                  (d[4] = e))
                : (e = d[4]),
              e
            )
          }
          if ("plugins-shared-with-you" === p) {
            let e
            return (
              d[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, l.jsx)(o.A, {
                    id: "skills.appsPage.section.sharedWithYou",
                    defaultMessage: "Shared with you",
                  })),
                  (d[5] = e))
                : (e = d[5]),
              e
            )
          }
          if (p.startsWith("plugins-marketplace-")) {
            let e
            return (
              d[6] !== p || d[7] !== m
                ? ((e = (0, l.jsx)(g, { categorySlug: p, hostId: m })), (d[6] = p), (d[7] = m), (d[8] = e))
                : (e = d[8]),
              e
            )
          }
          if (null != h) {
            let e
            return (
              d[9] !== h.title
                ? ((e = (0, l.jsx)(l.Fragment, { children: h.title })), (d[9] = h.title), (d[10] = e))
                : (e = d[10]),
              e
            )
          }
          if ("featured" === p) {
            let e
            return (
              d[11] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, l.jsx)(o.A, { id: "plugins.category.popular", defaultMessage: "Popular" })), (d[11] = e))
                : (e = d[11]),
              e
            )
          }
          if ("education-and-research" === p) {
            let e
            return (
              d[12] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, l.jsx)(o.A, { id: "plugins.category.education", defaultMessage: "Education" })),
                  (d[12] = e))
                : (e = d[12]),
              e
            )
          }
          return (
            d[13] !== p ? ((n = r()(p)), (d[13] = p), (d[14] = n)) : (n = d[14]),
            d[15] !== n ? ((i = (0, l.jsx)(l.Fragment, { children: n })), (d[15] = n), (d[16] = i)) : (i = d[16]),
            i
          )
        },
        O: function (e) {
          let t,
            n,
            i = (0, a.c)(6),
            { categorySlug: r, hostId: o } = e,
            d = (0, s.Ul)(u.vh)
          i[0] !== d || i[1] !== r || i[2] !== o
            ? ((t = { accountId: d, categorySlug: r, hostId: o }), (i[0] = d), (i[1] = r), (i[2] = o), (i[3] = t))
            : (t = i[3])
          let { data: p } = (0, s._U)(c.z, t),
            g = p?.description
          return (i[4] !== g ? ((n = (0, l.jsx)(l.Fragment, { children: g })), (i[4] = g), (i[5] = n)) : (n = i[5]), n)
        },
      },
    )
  },
  eo3l(e, t, n) {
    var l = n("D7Ms"),
      a = n("i5ac"),
      i = n.n(a),
      r = n("qmMi"),
      s = (n("OiCI"), n("IVVU")),
      o = n("C0re"),
      u = n("WzdM"),
      d = n("SlNh"),
      c = n("ueue"),
      p = n("OWtl"),
      g = n("ndjw"),
      m = n("kfGJ"),
      f = n("rvFo"),
      h = n("kK7d"),
      y = n("aFrt"),
      b = n("bJEQ"),
      x = n("d4xq"),
      v = n("cLdu"),
      A = n("Buqh")
    let I = (0, r.vU)(p.u, ({ accountId: e, categorySlug: t, hostId: n }) => ({
        queryKey: [...c.qw, "category-metadata", n, t, n === m.fI ? e : null],
        queryFn: l.hT,
        gcTime: 1 / 0,
        staleTime: f.D.ONE_MINUTE,
      })),
      S = (0, r.N3)(p.u, ({ categorySlug: e, hostId: t, searchQuery: n = "", visibility: l }, { get: a, scope: r }) => {
        let c = { ...l, hiddenPluginIds: [...l.hiddenPluginIds, ...a(s.qk)] },
          p = n.trim(),
          m = a(x.qk, t),
          S = a(g.FM, { hostId: t }).data?.roots,
          w = a(A.M, t).data,
          k = null != S ? a(v.qF, { accountId: null, hostId: t, roots: S, productContext: "catalog" }).data : void 0,
          j = null == w ? void 0 : (0, y.Mp)(w.plugins, c),
          C =
            null == w || null == j
              ? void 0
              : (0, d.ck)({ connectedPlugins: [], featuredPluginIds: w.featuredPluginIds, plugins: j }).find(
                  ({ section: t }) => t.id === `plugins-${e}`,
                )?.plugins,
          P = new Map()
        for (let e of [...(k ?? []), ...(j ?? [])])
          for (let t of [e.plugin.id, e.plugin.remotePluginId, e.plugin.shareContext?.remotePluginId])
            null != t && P.set(t, e)
        let _ = new Set(c.hiddenPluginIds)
        return {
          enabled: !0,
          getNextPageParam: (e) => e.pagination.next_page_token ?? void 0,
          initialPageParam: null,
          queryFn: async ({ pageParam: n, signal: l }) => {
            if (!(await (0, x.HF)(r, t, m))) return { plugins: [], pagination: { limit: 50, next_page_token: null } }
            let a = await h.CodexRequest.safeGet("/ps/plugin-categories/{category_slug}/plugins", {
              surface: "plugin_directory",
              parameters: {
                path: { category_slug: e },
                query: { scope: "GLOBAL", q: p || void 0, limit: 50, pageToken: n ?? void 0 },
              },
              additionalHeaders: (0, u.A)(),
              signal: (0, b.w)(l),
            })
            return (
              void 0 !== a.category && r.query.setData(I, { accountId: null, categorySlug: e, hostId: t }, a.category),
              a
            )
          },
          queryKey: (0, o.cV)(t, "category", e, ...(0 === p.length ? [] : ["search", p]), ...(0, x.vJ)(m)),
          retry: !1,
          select: (e) => {
            if (null == k || null == w) return
            let t = e.pages.flatMap((e) =>
              e.plugins.flatMap((e) => {
                let t = P.get(e.id) ?? null
                return _.has(e.id) || (null != t && _.has(t.plugin.id)) ? [] : [(0, y.vH)(e, t)]
              }),
            )
            return i()(
              [
                ...t.slice(0, 14),
                ...(null == C ? [] : (0 === p.length ? C : (0, d.cu)({ plugins: C, query: p })).map(y.w8)),
                ...t.slice(14),
              ],
              ({ id: e, remotePluginId: t }) => t ?? e,
            )
          },
          staleTime: f.D.ONE_MINUTE,
        }
      })
    n.d(t, {}, { w: S, z: I })
  },
  KtvL(e, t, n) {
    n.d(t, { s: () => A })
    var l = n("QosV"),
      a = n("irkb"),
      i = n("fxCc"),
      r = n("T0Rc"),
      s = n("qmMi"),
      o = n("oxjR"),
      u = n("hOO0"),
      d = n("BQbE"),
      c = n("HUHI"),
      p = n("FpcZ"),
      g = n("pDRe"),
      m = n("uc7r"),
      f = n("OiCI"),
      h = n("SPnB"),
      y = n("UOa8"),
      b = n("SaEY"),
      x = n("MX3C"),
      v = n("oszP")
    function A(e) {
      var t
      let n,
        A,
        w,
        k,
        j,
        C,
        P,
        _,
        M,
        E,
        T,
        N,
        O,
        U,
        R,
        L,
        D,
        q,
        F = (0, l.c)(39),
        { hostId: z, plugin: W, noAuthCanonicalAppId: B } = e,
        { accountId: G, userId: Y } = (0, y.As)(),
        V = (0, s.Ul)(f.vh),
        K = (0, s.Ul)(h.PO),
        J = (0, a.jE)(),
        Q = (0, g.el)(z),
        X = W?.apps.map(S) ?? [],
        $ = !Q
      F[0] !== z || F[1] !== $ ? ((n = { enabled: $, hostId: z }), (F[0] = z), (F[1] = $), (F[2] = n)) : (n = F[2])
      let { data: H, hardRefetchAppsList: Z, isSuccess: ee } = (0, c.Ad)(n)
      F[3] !== H ? ((A = void 0 === H ? [] : H), (F[3] = H), (F[4] = A)) : (A = F[4])
      let et = A,
        { data: en } = (0, d.KA)({ hostId: z, appIds: [...X, ...(W?.appTemplates.map(I) ?? [])] })
      F[5] !== en ? ((w = void 0 === en ? [] : en), (F[5] = en), (F[6] = w)) : (w = F[6])
      let el = w,
        { data: ea } = (0, d.KA)({
          hostId: z,
          appIds: W?.summary.installPolicySource === "IMPLICIT_CANONICAL_APP" && 1 === X.length ? X : [],
          includeTools: !0,
        }),
        ei = !Q,
        er = W?.apps,
        es = W?.summary
      F[7] !== z || F[8] !== ei || F[9] !== er || F[10] !== es
        ? ((k = { enabled: ei, hostId: z, pluginApps: er, pluginSummary: es }),
          (F[7] = z),
          (F[8] = ei),
          (F[9] = er),
          (F[10] = es),
          (F[11] = k))
        : (k = F[11])
      let eo = (0, b.Ov)(k),
        {
          data: eu,
          error: ed,
          isPending: ec,
        } = (0, i.E)(
          (0, p.getHostedAppsContentQueriesOptions)({ accountId: V, appIds: X, enabled: Q && !K.accountLoading }),
        ),
        ep = (0, g.ps)({ userId: Y, accountId: V, appIds: X, enabled: Q, linkRefreshStrategy: "NONE" }),
        { data: eg, error: em, isPending: ef } = (0, r.I)(ep)
      F[12] !== G || F[13] !== Y
        ? ((j = { accountId: G, userId: Y, linkRefreshStrategy: "NONE" }), (F[12] = G), (F[13] = Y), (F[14] = j))
        : (j = F[14])
      let eh = j,
        {
          data: ey,
          error: eb,
          isPending: ex,
        } = ((t = Q && X.length > 0),
        (L = (0, l.c)(5))[0] !== eh
          ? ((U = (0, m.dZ)({ ...eh, linkRefreshStrategy: "NONE" })), (L[0] = eh), (L[1] = U))
          : (U = L[1]),
        (D = U),
        (q = t && !!D.enabled),
        L[2] !== D || L[3] !== q
          ? ((R = { ...D, staleTime: D.staleTime, enabled: q, refetchOnWindowFocus: "always" }),
            (L[2] = D),
            (L[3] = q),
            (L[4] = R))
          : (R = L[4]),
        (0, r.I)(R))
      ;(F[15] !== W?.apps ? ((C = W?.apps ?? []), (F[15] = W?.apps), (F[16] = C)) : (C = F[16]),
        F[17] !== W?.appTemplates ? ((P = W?.appTemplates ?? []), (F[17] = W?.appTemplates), (F[18] = P)) : (P = F[18]),
        F[19] !== el || F[20] !== et || F[21] !== C || F[22] !== P
          ? ((_ = (0, v.nj)({ connectorMetadata: el, directoryApps: et, pluginApps: C, appTemplates: P })),
            (F[19] = el),
            (F[20] = et),
            (F[21] = C),
            (F[22] = P),
            (F[23] = _))
          : (_ = F[23]))
      let ev = _
      ;(F[24] !== W?.appTemplates ? ((M = W?.appTemplates ?? []), (F[24] = W?.appTemplates), (F[25] = M)) : (M = F[25]),
        F[26] !== el || F[27] !== et || F[28] !== M
          ? ((E = (0, v.ln)({ connectorMetadata: el, directoryApps: et, appTemplates: M })),
            (F[26] = el),
            (F[27] = et),
            (F[28] = M),
            (F[29] = E))
          : (E = F[29]),
        F[30] !== ey || F[31] !== W
          ? ((T = null == ey ? void 0 : W?.apps.some((e) => (0, x.Tm)(ey, e.id).length > 1)),
            (F[30] = ey),
            (F[31] = W),
            (F[32] = T))
          : (T = F[32]),
        F[33] !== ea || F[34] !== W
          ? ((N = null == W || (0, v.aB)({ connectorMetadata: ea, plugin: W })), (F[33] = ea), (F[34] = W), (F[35] = N))
          : (N = F[35]))
      let eA = {
        appTemplates: E,
        directoryApps: et,
        hasMultipleConnectedAccounts: T,
        links: Q ? ey : void 0,
        showInPluginAppList: N,
        refresh: async (e) => {
          let { force: t } = void 0 === e ? {} : e
          ;(0 !== X.length || (void 0 !== t && t)) &&
            (await Promise.all([
              J.invalidateQueries({ queryKey: (0, m.Ob)(eh), exact: !0 }),
              Q
                ? Promise.all([J.invalidateQueries({ queryKey: ep.queryKey, exact: !0 }), Z()])
                : (0, o.U)({ hostId: z, queryClient: J, refreshAppsList: Z }),
            ]),
            Q && (await J.invalidateQueries({ queryKey: c.Xr })))
        },
      }
      if (!Q)
        return {
          ...eA,
          apps: ev,
          availability: eo,
          connections: void 0,
          hasConnectionData: ee,
          error: null,
          isLoading: !1,
        }
      let eI =
          null == eg || null == ey
            ? void 0
            : (0, v.rO)({
                appIds: X,
                noAuthCanonicalAppId: B,
                appsContent: eu ?? void 0,
                availabilities: eg,
                links: ey,
              }),
        eS =
          null == eu
            ? []
            : (0, v.g8)({
                appsContent: eu,
                connections: eI,
                directoryApps: et,
                includeUnavailableApps: null != eg && null == ed && null == em && null == eb,
                pluginApps: W?.apps ?? [],
              }),
        ew = X.length > 0 ? (ed ?? em ?? eb) : null,
        ek = Object.fromEntries(
          X.map((e) => {
            let t = eI?.get((0, u.$)(e))
            return t?.isDisabledByAdmin
              ? [e, "disabled-by-admin"]
              : [e, t?.isUnavailable ? "connector-unavailable" : null]
          }),
        )
      return (
        F[36] !== eo || F[37] !== ek
          ? ((O = { ...eo, blockedReasonsByConnectorId: ek }), (F[36] = eo), (F[37] = ek), (F[38] = O))
          : (O = F[38]),
        {
          ...eA,
          apps: eS,
          availability: O,
          connections: eI,
          hasConnectionData: null != eI,
          error: ew,
          isLoading: X.length > 0 && null == ew && (ec || ef || ex),
        }
      )
    }
    function I(e) {
      return e.canonicalConnectorId ?? e.templateId
    }
    function S(e) {
      return e.id
    }
  },
  rdAJ(e, t, n) {
    var l = n("ABep"),
      a = n("QosV"),
      i = n("D7Ms"),
      r = n("qmMi"),
      s = n("oyxz"),
      o = n("Qgfj"),
      u = n("OXR4"),
      d = n("bqtn"),
      c = n("SGsN"),
      p = n("KMWy"),
      g = n("GaA7"),
      m = n("OWtl"),
      f = n("PEAD"),
      h = n("BSnr"),
      y = n("AWNZ"),
      b = n("QyE3"),
      x = n("ZEx5")
    let v = (0, r.i1)(m.u, ({ servers: e, plugin: t }, { get: n }) => {
        let l = n(p.p9),
          a = new Map(e.map(({ identity: e, name: t }) => [(0, i.EN)([e]), t]))
        if (null != t)
          for (let e of Object.values(l))
            for (let { identity: n, pluginIds: l } of e.owners)
              "hostId" in n && n.hostId === t.hostId && l.includes(t.pluginId) && a.set((0, i.EN)([n]), n.serverName)
        return Object.entries(l).flatMap(([e, t]) => {
          let n = t.owners.filter(({ identity: e }) => a.has((0, i.EN)([e])))
          return 0 === n.length
            ? []
            : [
                {
                  key: e,
                  partition: t.partition,
                  origin: t.origin,
                  names: new Set(
                    n.flatMap(({ identity: e }) => {
                      let t = a.get((0, i.EN)([e]))
                      return null == t ? [] : [t]
                    }),
                  ),
                  permissions: t.permissions,
                },
              ]
        })
      }),
      A = (0, r.vU)(m.u, (e) => ({
        queryKey: ["mcp-app-permission", e.origin, e.partition, e.permission],
        queryFn: async () => {
          if (g.appServices?.mcpAppSandbox == null) throw Error("App permissions are unavailable")
          return g.appServices.mcpAppSandbox.getPermissionSetting(e)
        },
        staleTime: 0,
        refetchOnMount: "always",
        refetchOnWindowFocus: !0,
        retry: !1,
      })),
      I = (0, r.c4)(m.u, (e, { scope: t }) => ({
        mutationFn: async (n) => {
          if (g.appServices?.mcpAppSandbox == null) throw Error("App permissions are unavailable")
          let l = t.query.snapshot(A, e)
          await l.cancel()
          let a = await g.appServices.mcpAppSandbox.setPermissionSetting({ ...e, setting: n })
          ;(await l.cancel(), l.setData(a))
        },
        onError: () => {
          t.get(c.Id).danger(
            (0, l.jsx)(s.A, {
              id: "mcpApp.permissions.settings.saveFailed",
              defaultMessage: "Couldn't save this permission",
            }),
            { errorAnalytics: { toastId: "mcpApp.permissions.settings.saveFailed" } },
          )
        },
        retry: !1,
      }))
    function S(e) {
      let t,
        n,
        i,
        o = (0, a.c)(7),
        d = (0, r._U)(v, e)
      if (0 === d.length) return null
      if (
        (o[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, l.jsx)(s.A, { id: "mcpApp.permissions.settings.title", defaultMessage: "Device access" })),
            (o[0] = t))
          : (t = o[0]),
        o[1] !== d)
      ) {
        let e
        ;(o[3] !== d.length
          ? ((e = (e) => {
              let { key: t, partition: n, origin: a, names: i, permissions: r } = e
              return (0, l.jsxs)(
                h.X,
                {
                  children: [
                    d.length > 1 &&
                      (0, l.jsx)(h.X.Header, { title: (0, l.jsx)("h3", { children: [...i].join(", ") || a }) }),
                    (0, l.jsx)(x.t, {
                      children: r.map((e) =>
                        (0, l.jsx)(
                          w,
                          {
                            request: { partition: n, origin: a, permission: e },
                            showOrigin: d.length > 1 || i.size > 1,
                          },
                          e,
                        ),
                      ),
                    }),
                  ],
                },
                t,
              )
            }),
            (o[3] = d.length),
            (o[4] = e))
          : (e = o[4]),
          (n = d.map(e)),
          (o[1] = d),
          (o[2] = n))
      } else n = o[2]
      return (o[5] !== n ? ((i = (0, l.jsx)(u.J, { title: t, children: n })), (o[5] = n), (o[6] = i)) : (i = o[6]), i)
    }
    function w(e) {
      let t,
        n,
        i,
        o,
        u,
        c = (0, a.c)(19),
        { request: p, showOrigin: g } = e,
        { data: m, isError: h, isPending: x } = (0, r._U)(A, p),
        { mutate: v, isPending: S } = (0, r._U)(I, p),
        w = h ? void 0 : m
      c[0] !== w?.setting
        ? ((t = k.unavailable),
          w?.setting === "allow"
            ? (t = k.allow)
            : w?.setting === "block"
              ? (t = k.block)
              : w?.setting === "ask" && (t = k.ask),
          (c[0] = w?.setting),
          (c[1] = t))
        : (t = c[1])
      let j = null != w && "preference" !== w.source && "default" !== w.source,
        C = f.nk[p.permission]
      return (
        c[2] !== C ? ((n = (0, l.jsx)(s.A, { ...C })), (c[2] = C), (c[3] = n)) : (n = c[3]),
        c[4] !== j || c[5] !== p.origin || c[6] !== g
          ? ((i =
              (g || j) &&
              (0, l.jsxs)(l.Fragment, {
                children: [
                  g && (0, l.jsx)("div", { children: p.origin }),
                  j &&
                    (0, l.jsx)("div", {
                      children: (0, l.jsx)(s.A, {
                        id: "mcpApp.permissions.settings.managed",
                        defaultMessage: "Managed by your browser or organization",
                      }),
                    }),
                ],
              })),
            (c[4] = j),
            (c[5] = p.origin),
            (c[6] = g),
            (c[7] = i))
          : (i = c[7]),
        c[8] !== w || c[9] !== x || c[10] !== S || c[11] !== j || c[12] !== v || c[13] !== t
          ? ((o = (e) =>
              (0, l.jsxs)(d.Ab, {
                matchTriggerWidth: !0,
                triggerButton: (0, l.jsx)(b.vg, {
                  ...e,
                  disabled: x || S || j || null == w,
                  "aria-busy": x || S,
                  children: (0, l.jsx)(s.A, { ...(x ? k.loading : t) }),
                }),
                children: [
                  (0, l.jsx)(d.ms.Item, { onSelect: () => v("allow"), children: (0, l.jsx)(s.A, { ...k.allow }) }),
                  (0, l.jsx)(d.ms.Item, { onSelect: () => v("block"), children: (0, l.jsx)(s.A, { ...k.block }) }),
                  (0, l.jsx)(d.ms.Item, { onSelect: () => v("default"), children: (0, l.jsx)(s.A, { ...k.reset }) }),
                ],
              })),
            (c[8] = w),
            (c[9] = x),
            (c[10] = S),
            (c[11] = j),
            (c[12] = v),
            (c[13] = t),
            (c[14] = o))
          : (o = c[14]),
        c[15] !== n || c[16] !== i || c[17] !== o
          ? ((u = (0, l.jsx)(y.ic, { label: n, description: i, control: o })),
            (c[15] = n),
            (c[16] = i),
            (c[17] = o),
            (c[18] = u))
          : (u = c[18]),
        u
      )
    }
    let k = (0, o.YK)({
      allow: { id: "mcpApp.permissions.allow", defaultMessage: "Allow" },
      block: { id: "mcpApp.permissions.block", defaultMessage: "Block" },
      ask: { id: "mcpApp.permissions.ask", defaultMessage: "Ask" },
      reset: { id: "mcpApp.permissions.reset", defaultMessage: "Reset" },
      loading: { id: "mcpApp.permissions.loading", defaultMessage: "Loading\u2026" },
      unavailable: { id: "mcpApp.permissions.unavailable", defaultMessage: "Unavailable" },
    })
    n.d(
      t,
      {},
      {
        W: function (e) {
          let t,
            n = (0, a.c)(2)
          return (
            n[0] !== e
              ? ((t = (0, l.jsx)(l.Fragment, { children: (0, l.jsx)(S, { ...e }) })), (n[0] = e), (n[1] = t))
              : (t = n[1]),
            t
          )
        },
      },
    )
  },
  PEAD(e, t, n) {
    var l = n("DBCl"),
      a = n("Qgfj")
    let i = (0, a.YK)({
        camera: { id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.camera", defaultMessage: "Camera" },
        microphone: {
          id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.microphone",
          defaultMessage: "Microphone",
        },
        geolocation: {
          id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.location",
          defaultMessage: "Location",
        },
        clipboardWrite: {
          id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.clipboard",
          defaultMessage: "Clipboard",
        },
        localNetwork: { id: "mcpApp.permissions.localNetwork", defaultMessage: "Local network" },
        loopbackNetwork: { id: "mcpApp.permissions.loopbackNetwork", defaultMessage: "Apps on device" },
      }),
      r = (0, a.YK)({
        camera: i.camera,
        microphone: i.microphone,
        location: i.geolocation,
        clipboard: i.clipboardWrite,
        localNetwork: i.localNetwork,
        loopbackNetwork: i.loopbackNetwork,
        ads: { id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.ads", defaultMessage: "Intrusive ads" },
        automaticDownloads: {
          id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.automaticDownloads",
          defaultMessage: "Automatic downloads",
        },
        backgroundSync: {
          id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.backgroundSync",
          defaultMessage: "Background sync",
        },
        cookies: {
          id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.cookies",
          defaultMessage: "Third-party cookies",
        },
        federatedIdentityApi: {
          id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.embeddedContent",
          defaultMessage: "Embedded content",
        },
        images: { id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.images", defaultMessage: "Images" },
        javascript: {
          id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.javascript",
          defaultMessage: "JavaScript",
        },
        notifications: {
          id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.notifications",
          defaultMessage: "Notifications",
        },
        popups: {
          id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.popups",
          defaultMessage: "Pop-ups and redirects",
        },
        handlers: {
          id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.handlers",
          defaultMessage: "Protocol handlers",
        },
        protectedContent: {
          id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.protectedContent",
          defaultMessage: "Protected content IDs",
        },
        sound: { id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.sound", defaultMessage: "Sound" },
        usbDevices: {
          id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.usbDevices",
          defaultMessage: "USB devices",
        },
      })
    n.d(
      t,
      {},
      {
        V6: function () {
          return Object.entries(r).map(([e, t]) => ({
            section: "browser-use",
            id: `browser-site-${e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`)}`,
            path: `${l.zJM}/${e}`,
            title: t,
          }))
        },
        YJ: function (e) {
          let t = e
          return (
            "geolocation" === e ? (t = "location") : "embeddedContent" === e && (t = "federatedIdentityApi"),
            Object.entries(r).find(([e]) => e === t)?.[1] ?? null
          )
        },
        nk: i,
      },
    )
  },
  z8Ld(e, t, n) {
    ;(n("TL6G"),
      n.d(
        t,
        {},
        {
          h: function ({ hostId: e, navigate: t, section: n, setSelectedHostId: l }) {
            ;(l(e), t(`/settings/${n}`))
          },
        },
      ))
  },
  UBJK(e, t, n) {
    var l = n("ABep"),
      a = n("QosV"),
      i = n("bTvG"),
      r = n("slpy"),
      s = n("HaM6"),
      o = n("on57"),
      u = n("qmMi"),
      d = n("zd8w"),
      c = n("Qgfj"),
      p = n("Wf1j"),
      g = n("oyxz"),
      m = n("hPoZ"),
      f = n("FvYa"),
      h = n("TjgH"),
      y = n("Sm6l"),
      b = n("HOLv"),
      x = n("F0xz"),
      v = n("GCsp"),
      A = n("Rvwy"),
      I = n("r4En"),
      S = n("BWYN"),
      w = n("yGJW"),
      k = n("OWtl"),
      j = n("hobO"),
      C = n("HipH")
    let P = (0, S.j$)({
        conversationId: null,
        isBrowserEnabled: !1,
        openFileLinksInSidePanel: !1,
        openTarget: "external-browser",
      }),
      _ = (0, c.YK)({
        disableApp: { id: "skills.appsPage.toolsDialog.disableApp", defaultMessage: "Disable app" },
        enableApp: { id: "skills.appsPage.toolsDialog.enableApp", defaultMessage: "Enable app" },
        unattributedDisablement: {
          id: "skills.appsPage.toolsDialog.unattributedDisablement",
          defaultMessage: "This app is disabled",
        },
        loadingProjectSettings: {
          id: "skills.appsPage.toolsDialog.loadingProjectSettings",
          defaultMessage: "Loading project settings\u2026",
        },
        disabledBadge: { id: "skills.appsPage.toolsDialog.disabledBadge", defaultMessage: "Disabled" },
        subtitle: { id: "skills.appsPage.toolsDialog.subtitle", defaultMessage: "Tools for this app" },
        subtitleWithEvents: {
          id: "skills.appsPage.toolsDialog.subtitleWithEvents",
          defaultMessage: "Tools and events for this app",
        },
      })
    function M(e) {
      return `${e.tools.length} ${e.title.toLowerCase()}`
    }
    function E(e) {
      let t,
        n = (0, a.c)(2)
      return (
        n[0] !== e
          ? ((t = (0, l.jsxs)(l.Fragment, {
              children: [null, (0, l.jsx)(l.Fragment, { children: (0, l.jsx)(j.d5, { ...e }) })],
            })),
            (n[0] = e),
            (n[1] = t))
          : (t = n[1]),
        t
      )
    }
    function T(e) {
      let t,
        n,
        i,
        r,
        s = (0, a.c)(16),
        { appId: u, events: c, isAppDisabledWithoutRestriction: p, toolSections: m } = e
      s[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = {}), (s[0] = t)) : (t = s[0])
      let [f, h] = (0, d.useState)(t)
      if (s[1] !== u || s[2] !== f || s[3] !== p || s[4] !== m) {
        let e
        ;(s[6] !== u || s[7] !== f || s[8] !== p
          ? ((e = (e) => {
              let t = !0 === f[e.title]
              return (0, l.jsxs)(
                "div",
                {
                  className: "border-b border-border/70 last:border-b-0",
                  children: [
                    (0, l.jsxs)("button", {
                      type: "button",
                      className:
                        "sticky top-0 z-10 flex w-full items-center justify-between bg-surface-secondary p-2.5 text-start text-base text-default",
                      "aria-expanded": !t,
                      onClick: () => {
                        h((n) => ({ ...n, [e.title]: !t }))
                      },
                      children: [
                        (0, l.jsxs)("span", {
                          children: [
                            e.title,
                            (0, l.jsx)("span", { className: "ms-2 text-tertiary", children: e.tools.length }),
                          ],
                        }),
                        (0, l.jsx)(v.A, {
                          className: t
                            ? "icon-xs shrink-0 -rotate-90 text-tertiary transition-transform"
                            : "icon-xs shrink-0 text-tertiary transition-transform",
                        }),
                      ],
                    }),
                    t
                      ? null
                      : (0, l.jsx)("div", {
                          className: "divide-y divide-border/70",
                          children: e.tools.map((e) =>
                            (0, l.jsxs)(
                              "div",
                              {
                                className: (0, o.A)(
                                  "grid grid-cols-[minmax(0,220px)_minmax(0,1fr)] gap-x-3 p-2.5",
                                  ("disabled_by_admin" === e.disabledReason ||
                                    null != e.configRestriction ||
                                    !1 === e.isEnabled) &&
                                    "opacity-60",
                                ),
                                children: [
                                  (0, l.jsxs)("div", {
                                    className: "min-w-0 text-default",
                                    children: [
                                      (0, l.jsx)(O, { name: e.name }),
                                      (0, l.jsx)(C.QW, { appId: u, isAppDisabledWithoutRestriction: p, tool: e }),
                                    ],
                                  }),
                                  (0, l.jsx)("div", {
                                    className: "text-base text-secondary",
                                    children: (0, l.jsx)(I.Markdown, {
                                      className: "text-base",
                                      components: { a: P },
                                      cwd: null,
                                      children: e.description,
                                    }),
                                  }),
                                ],
                              },
                              e.name,
                            ),
                          ),
                        }),
                  ],
                },
                e.title,
              )
            }),
            (s[6] = u),
            (s[7] = f),
            (s[8] = p),
            (s[9] = e))
          : (e = s[9]),
          (n = m.map(e)),
          (s[1] = u),
          (s[2] = f),
          (s[3] = p),
          (s[4] = m),
          (s[5] = n))
      } else n = s[5]
      return (
        s[10] !== c || s[11] !== m.length
          ? ((i =
              c.length > 0
                ? (0, l.jsxs)("div", {
                    className: (0, o.A)("border-b border-border/70", m.length > 0 && "mt-4"),
                    children: [
                      (0, l.jsx)("div", {
                        className: "bg-surface-secondary p-2.5 text-base text-default",
                        children: (0, l.jsx)(g.A, {
                          id: "skills.appsPage.toolsDialog.events",
                          defaultMessage: "Events",
                        }),
                      }),
                      (0, l.jsx)("div", { className: "divide-y divide-border/70", children: c.map(N) }),
                    ],
                  })
                : null),
            (s[10] = c),
            (s[11] = m.length),
            (s[12] = i))
          : (i = s[12]),
        s[13] !== n || s[14] !== i
          ? ((r = (0, l.jsxs)("div", { className: "flex flex-col", children: [n, i] })),
            (s[13] = n),
            (s[14] = i),
            (s[15] = r))
          : (r = s[15]),
        r
      )
    }
    function N(e) {
      return (0, l.jsxs)(
        "div",
        {
          className: "grid grid-cols-[minmax(0,220px)_minmax(0,1fr)] gap-x-3 p-2.5",
          children: [
            (0, l.jsx)("div", { className: "min-w-0 text-default", children: (0, l.jsx)(O, { name: e.name }) }),
            (0, l.jsx)("div", {
              className: "text-base text-secondary",
              children: (0, l.jsx)(I.Markdown, {
                className: "text-base",
                components: { a: P },
                cwd: null,
                children: e.description,
              }),
            }),
          ],
        },
        e.name,
      )
    }
    function O(e) {
      let t,
        n,
        i = (0, a.c)(5),
        { name: s } = e
      return (
        i[0] !== s
          ? ((t = (0, l.jsx)("div", { className: "truncate text-base", children: s })), (i[0] = s), (i[1] = t))
          : (t = i[1]),
        i[2] !== s || i[3] !== t
          ? ((n = (0, l.jsx)(r.m, { content: s, enabledWhen: "target-overflows", children: t })),
            (i[2] = s),
            (i[3] = t),
            (i[4] = n))
          : (n = i[4]),
        n
      )
    }
    n.d(
      t,
      {},
      {
        B: function (e) {
          let t,
            n,
            r,
            o,
            c,
            v,
            I,
            S,
            P,
            N,
            O,
            U,
            R,
            L,
            D,
            q,
            F,
            z = (0, a.c)(99),
            {
              app: W,
              appRestriction: B,
              errorMessage: G,
              events: Y,
              isConfigPending: V,
              isLoading: K,
              onOpenChange: J,
              onSetAppEnabled: Q,
              showEnableToggle: X,
              onTryInChat: $,
              tools: H,
              updatingAppId: Z,
            } = e,
            ee = void 0 === B ? null : B,
            et = void 0 !== V && V,
            en = void 0 === X || X,
            el = (0, u.gh)(k.u),
            ea = (0, p.A)()
          if (
            z[0] !== W ||
            z[1] !== ee ||
            z[2] !== Y ||
            z[3] !== ea ||
            z[4] !== et ||
            z[5] !== J ||
            z[6] !== Q ||
            z[7] !== $ ||
            z[8] !== el ||
            z[9] !== en ||
            z[10] !== H ||
            z[11] !== Z
          ) {
            var ei
            let e, a, u, p, k, T
            if (
              ((T = (ei = H).filter((e) => e.accessBadges.includes("READ"))),
              (R = [
                { title: "Write", tools: ei.filter((e) => !e.accessBadges.includes("READ")) },
                { title: "Read", tools: T },
              ].flatMap((e) => (0 === e.tools.length ? [] : [e]))),
              z[25] !== W ||
                z[26] !== ee ||
                z[27] !== Y ||
                z[28] !== ea ||
                z[29] !== et ||
                z[30] !== Q ||
                z[31] !== en ||
                z[32] !== Z)
            ) {
              let n,
                i,
                r,
                s,
                o = null == W ? null : (0, m.MS)(W),
                c = Z === W?.id,
                y = c || ee?.isUserEditable === !1 || et,
                b = W?.isEnabled === !0 && null == ee
              a = W?.isAccessible === !0 && b && !et
              let v = b ? _.disableApp : _.enableApp
              if (((e = null), et)) {
                let t
                ;(z[41] === Symbol.for("react.memo_cache_sentinel")
                  ? ((t = (0, l.jsx)(g.A, { ..._.loadingProjectSettings })), (z[41] = t))
                  : (t = z[41]),
                  (e = t))
              } else if (ee?.isUserEditable === !1) {
                let t
                ;(z[42] !== ee
                  ? ((t = (0, l.jsx)(C.ns, { restriction: ee, surface: "dialog" })), (z[42] = ee), (z[43] = t))
                  : (t = z[43]),
                  (e = t))
              } else if (null == ee && W?.isAccessible === !0 && !1 === W.isEnabled) {
                let t
                ;(z[44] === Symbol.for("react.memo_cache_sentinel")
                  ? ((t = (0, l.jsx)(g.A, { ..._.unattributedDisablement })), (z[44] = t))
                  : (t = z[44]),
                  (e = t))
              }
              ;(z[45] !== W?.description || z[46] !== Y || z[47] !== ea
                ? ((n = W?.description ?? ea.formatMessage(Y.length > 0 ? _.subtitleWithEvents : _.subtitle)),
                  (z[45] = W?.description),
                  (z[46] = Y),
                  (z[47] = ea),
                  (z[48] = n))
                : (n = z[48]),
                (p = n))
              let I = W?.name ?? ""
              ;(z[49] !== W || z[50] !== b
                ? ((i =
                    null != W && W.isAccessible && !b
                      ? (0, l.jsx)(h.E, { variant: "outline", children: (0, l.jsx)(g.A, { ..._.disabledBadge }) })
                      : null),
                  (z[49] = W),
                  (z[50] = b),
                  (z[51] = i))
                : (i = z[51]),
                z[52] !== I || z[53] !== i
                  ? ((r = (0, l.jsx)(j.Rv, { kind: "App", title: I, badge: i })), (z[52] = I), (z[53] = i), (z[54] = r))
                  : (r = z[54]),
                (k = r),
                z[55] !== W ||
                z[56] !== e ||
                z[57] !== ea ||
                z[58] !== b ||
                z[59] !== y ||
                z[60] !== c ||
                z[61] !== Q ||
                z[62] !== en ||
                z[63] !== v
                  ? ((s =
                      null != W && en && (W.isAccessible || !W.isEnabled || c)
                        ? (0, l.jsx)("div", {
                            className: "flex items-center",
                            children: (0, l.jsx)(C._O, {
                              "data-state": b ? "checked" : "unchecked",
                              isControlDisabled: y,
                              isExplanationFocusable: null != e,
                              content: e ?? (0, l.jsx)(g.A, { ...v }),
                              children: (0, l.jsx)(x.l, {
                                className: "h-token-button-composer",
                                checked: b,
                                disabled: y,
                                ariaLabel: ea.formatMessage(v),
                                onChange: (e) => {
                                  Q({ appId: W.id, enabled: e })
                                },
                              }),
                            }),
                          })
                        : null),
                    (z[55] = W),
                    (z[56] = e),
                    (z[57] = ea),
                    (z[58] = b),
                    (z[59] = y),
                    (z[60] = c),
                    (z[61] = Q),
                    (z[62] = en),
                    (z[63] = v),
                    (z[64] = s))
                  : (s = z[64]),
                (u = s),
                (t = E),
                (P = "wide"),
                (N =
                  null == W
                    ? null
                    : (0, l.jsx)(f.R, {
                        alt: W.name,
                        className: "icon-md",
                        logoUrl: W.logoUrl,
                        logoDarkUrl: W.logoUrlDark,
                        fallback:
                          null == o
                            ? (0, l.jsx)(A.A, { className: "icon-sm text-secondary" })
                            : (0, d.createElement)(o),
                      })),
                (z[25] = W),
                (z[26] = ee),
                (z[27] = Y),
                (z[28] = ea),
                (z[29] = et),
                (z[30] = Q),
                (z[31] = en),
                (z[32] = Z),
                (z[33] = t),
                (z[34] = e),
                (z[35] = a),
                (z[36] = u),
                (z[37] = p),
                (z[38] = P),
                (z[39] = N),
                (z[40] = k))
            } else
              ((t = z[33]), (e = z[34]), (a = z[35]), (u = z[36]), (p = z[37]), (P = z[38]), (N = z[39]), (k = z[40]))
            ;((O = k),
              (U = W?.name),
              (n = u),
              (r = p),
              (o = null != W),
              (c = J),
              z[65] !== W ||
              z[66] !== e ||
              z[67] !== ee?.isUserEditable ||
              z[68] !== a ||
              z[69] !== ea ||
              z[70] !== $ ||
              z[71] !== el
                ? ((v =
                    null == W
                      ? null
                      : (0, l.jsx)("div", {
                          className: "flex w-full items-center justify-end gap-2",
                          children: (0, l.jsx)(C._O, {
                            isControlDisabled: !a,
                            isExplanationFocusable: null != e || ee?.isUserEditable === !0,
                            content: a
                              ? null
                              : (e ??
                                (0, l.jsx)(g.A, {
                                  id: "skills.appsPage.toolsDialog.tryInChatDisabled",
                                  defaultMessage: "Enable and connect this app to try it now",
                                })),
                            children: (0, l.jsxs)(y.$, {
                              "aria-label": ea.formatMessage({
                                id: "skills.appsPage.toolsDialog.tryInChat",
                                defaultMessage: "Try now",
                              }),
                              color: "primary",
                              size: "toolbar",
                              disabled: !a,
                              onClick: () => {
                                a &&
                                  ((0, w.yy)(el, i.nt, {
                                    name: "CHATGPT_APP_CLICK_TARGET_START_CHAT",
                                    connectorId: W.id,
                                  }),
                                  $(W))
                              },
                              children: [
                                (0, l.jsx)(b.I, { "aria-hidden": !1, asset: s.Z }),
                                (0, l.jsx)(g.A, {
                                  id: "skills.appsPage.toolsDialog.tryInChat",
                                  defaultMessage: "Try now",
                                }),
                              ],
                            }),
                          }),
                        })),
                  (z[65] = W),
                  (z[66] = e),
                  (z[67] = ee?.isUserEditable),
                  (z[68] = a),
                  (z[69] = ea),
                  (z[70] = $),
                  (z[71] = el),
                  (z[72] = v))
                : (v = z[72]),
              (S = "flex h-full min-h-0 flex-col"),
              (I =
                null != W && H.length > 0
                  ? (0, l.jsx)("div", {
                      className: "shrink-0 text-base text-secondary",
                      children: (0, l.jsx)(g.A, {
                        id: "skills.appsPage.toolsDialog.summary",
                        defaultMessage: "The {appName} app contains {totalActions} tools ({actionTypes})",
                        values: { appName: W.name, totalActions: H.length, actionTypes: R.map(M).join(", ") },
                      }),
                    })
                  : null),
              (z[0] = W),
              (z[1] = ee),
              (z[2] = Y),
              (z[3] = ea),
              (z[4] = et),
              (z[5] = J),
              (z[6] = Q),
              (z[7] = $),
              (z[8] = el),
              (z[9] = en),
              (z[10] = H),
              (z[11] = Z),
              (z[12] = t),
              (z[13] = n),
              (z[14] = r),
              (z[15] = o),
              (z[16] = c),
              (z[17] = v),
              (z[18] = I),
              (z[19] = S),
              (z[20] = P),
              (z[21] = N),
              (z[22] = O),
              (z[23] = U),
              (z[24] = R))
          } else
            ((t = z[12]),
              (n = z[13]),
              (r = z[14]),
              (o = z[15]),
              (c = z[16]),
              (v = z[17]),
              (I = z[18]),
              (S = z[19]),
              (P = z[20]),
              (N = z[21]),
              (O = z[22]),
              (U = z[23]),
              (R = z[24]))
          return (
            z[73] !== I ? ((L = (0, l.jsx)(l.Fragment, { children: I })), (z[73] = I), (z[74] = L)) : (L = z[74]),
            z[75] !== W || z[76] !== ee || z[77] !== G || z[78] !== Y || z[79] !== K || z[80] !== R || z[81] !== H
              ? ((D = (0, l.jsx)(j.SO, {
                  className: "flex-1",
                  surfaceClassName: "bg-transparent",
                  children: K
                    ? (0, l.jsx)("div", {
                        className: "flex h-full min-h-32 items-center justify-center text-base text-secondary",
                        children: (0, l.jsx)(g.A, {
                          id: "skills.appsPage.toolsDialog.loading",
                          defaultMessage: "Loading tools\u2026",
                        }),
                      })
                    : null != G
                      ? (0, l.jsx)("div", {
                          className: "flex h-full min-h-32 items-center justify-center text-base text-secondary",
                          children: (0, l.jsxs)("div", {
                            children: [
                              (0, l.jsx)("div", {
                                children: (0, l.jsx)(g.A, {
                                  id: "skills.appsPage.toolsDialog.error",
                                  defaultMessage: "Unable to load tools for this app.",
                                }),
                              }),
                              (0, l.jsx)("div", { children: G }),
                            ],
                          }),
                        })
                      : 0 === H.length && 0 === Y.length
                        ? (0, l.jsx)("div", {
                            className: "flex h-full min-h-32 items-center justify-center text-base text-secondary",
                            children: (0, l.jsx)(g.A, {
                              id: "skills.appsPage.toolsDialog.empty",
                              defaultMessage: "No tools available for this app.",
                            }),
                          })
                        : (0, l.jsx)(T, {
                            appId: W?.id ?? null,
                            events: Y,
                            isAppDisabledWithoutRestriction: W?.isAccessible === !0 && !1 === W.isEnabled && null == ee,
                            toolSections: R,
                          }),
                })),
                (z[75] = W),
                (z[76] = ee),
                (z[77] = G),
                (z[78] = Y),
                (z[79] = K),
                (z[80] = R),
                (z[81] = H),
                (z[82] = D))
              : (D = z[82]),
            z[83] !== L || z[84] !== D || z[85] !== S
              ? ((q = (0, l.jsxs)("div", { className: S, children: [L, D] })),
                (z[83] = L),
                (z[84] = D),
                (z[85] = S),
                (z[86] = q))
              : (q = z[86]),
            z[87] !== t ||
            z[88] !== n ||
            z[89] !== r ||
            z[90] !== o ||
            z[91] !== c ||
            z[92] !== v ||
            z[93] !== q ||
            z[94] !== P ||
            z[95] !== N ||
            z[96] !== O ||
            z[97] !== U
              ? ((F = (0, l.jsx)(t, {
                  size: P,
                  icon: N,
                  title: O,
                  titleText: U,
                  headerActions: n,
                  description: r,
                  isOpen: o,
                  onOpenChange: c,
                  footer: v,
                  children: q,
                })),
                (z[87] = t),
                (z[88] = n),
                (z[89] = r),
                (z[90] = o),
                (z[91] = c),
                (z[92] = v),
                (z[93] = q),
                (z[94] = P),
                (z[95] = N),
                (z[96] = O),
                (z[97] = U),
                (z[98] = F))
              : (F = z[98]),
            F
          )
        },
      },
    )
  },
  UmGt(e, t, n) {
    var l = n("ASxG"),
      a = n("OMIV")
    let i = l.YjP().refine((e) => e.trim().length > 0),
      r = l.Ikc({ skill_markdown_by_id: l.g1P(l.YjP(), l.L5J()).optional() }).catch({ skill_markdown_by_id: {} })
    n.d(
      t,
      {},
      {
        Uu: async function (e, t) {
          var n
          return (
            (n = (function (e) {
              let t = {}
              for (let [n, l] of Object.entries(r.parse(e).skill_markdown_by_id ?? {})) {
                let e = i.safeParse(l)
                e.success && (t[n] = e.data)
              }
              return t
            })(e.get(a.M9)?.getDynamicConfig("1852350085").value)),
            n[t]
          )
        },
      },
    )
  },
  XvU9(e, t, n) {
    n.d(t, { zS: () => C, Cy: () => k, Jc: () => j, p1: () => w })
    var l = n("ABep"),
      a = n("QosV"),
      i = n("xSOA"),
      r = n("qmMi"),
      s = n("zKw6"),
      o = n.n(s),
      u = n("zd8w"),
      d = n("oyxz"),
      c = n("SGsN"),
      p = n("MI1z"),
      g = n("GaA7"),
      m = n("OWtl"),
      f = n("ndjw"),
      h = n("kfGJ"),
      y = n("njDi"),
      b = n("f22a"),
      x = n("oom3"),
      v = n("UmGt"),
      A = n("t4SC")
    function I(e, t) {
      let n = t.toLowerCase()
      return (
        e.find((e) => {
          let t = e.name.toLowerCase(),
            l = e.id.toLowerCase()
          return t === n || l === n
        }) ?? null
      )
    }
    var S = n("bPa2")
    function w(e) {
      let t,
        n,
        l = (0, a.c)(6),
        i = void 0 === e ? h.fI : e,
        r = (0, p.y)(i),
        s = g.appServices?.recommendedSkills != null && null != r
      l[0] !== r
        ? ((t = null == r ? null : o().join(r, "vendor_imports", "skills")), (l[0] = r), (l[1] = t))
        : (t = l[1])
      let u = null == r ? null : `${r}/skills/.system/skill-creator/SKILL.md`
      return (
        l[2] !== s || l[3] !== t || l[4] !== u
          ? ((n = { canInstallRecommendedSkills: s, defaultRecommendedRepoRoot: t, skillCreatorPath: u }),
            (l[2] = s),
            (l[3] = t),
            (l[4] = u),
            (l[5] = n))
          : (n = l[5]),
        n
      )
    }
    function k(e) {
      let t,
        n,
        l,
        i,
        s,
        o,
        u,
        d,
        c,
        p = (0, a.c)(27),
        g = void 0 === e ? h.fI : e,
        v = (0, r.gh)(m.u)
      p[0] !== g ? ((t = { hostId: g }), (p[0] = g), (p[1] = t)) : (t = p[1])
      let A = (0, r._U)(f.FM, t)
      p[2] !== A.data?.roots ? ((n = A.data?.roots ?? []), (p[2] = A.data?.roots), (p[3] = n)) : (n = p[3])
      let I = n,
        { skills: w, isFetching: k, isLoading: j, forceReload: C } = (0, S.a)(I, g)
      p[4] !== C
        ? ((l = async () => {
            await C()
          }),
          (p[4] = C),
          (p[5] = l))
        : (l = p[5])
      let P = l
      if (p[6] !== P || p[7] !== w) {
        let e
        ;((i = (0, x.i6)(w)),
          p[12] !== w ? ((e = (0, b.cy)(w)), (p[12] = w), (p[13] = e)) : (e = p[13]),
          (s = e),
          (o = P),
          (u = (0, b.OP)(i)),
          (p[6] = P),
          (p[7] = w),
          (p[8] = i),
          (p[9] = s),
          (p[10] = o),
          (p[11] = u))
      } else ((i = p[8]), (s = p[9]), (o = p[10]), (u = p[11]))
      let _ = A.isFetching || k,
        M = A.isLoading || j
      return (
        p[14] !== P || p[15] !== v
          ? ((d = () => {
              ;((0, y.j)(v.queryClient), P())
            }),
            (p[14] = P),
            (p[15] = v),
            (p[16] = d))
          : (d = p[16]),
        p[17] !== i ||
        p[18] !== w ||
        p[19] !== s ||
        p[20] !== o ||
        p[21] !== u ||
        p[22] !== _ ||
        p[23] !== M ||
        p[24] !== d ||
        p[25] !== I
          ? ((c = {
              forceReloadSkills: o,
              installedSkillMatchKeys: u,
              installedSkillMetadata: w,
              isFetching: _,
              isLoading: M,
              markSkillsUpdated: d,
              skills: i,
              standaloneInstalledSkills: s,
              workspaceRoots: I,
            }),
            (p[17] = i),
            (p[18] = w),
            (p[19] = s),
            (p[20] = o),
            (p[21] = u),
            (p[22] = _),
            (p[23] = M),
            (p[24] = d),
            (p[25] = I),
            (p[26] = c))
          : (c = p[26]),
        c
      )
    }
    function j(e, t, n) {
      let l,
        i,
        s,
        o,
        u = (0, a.c)(15)
      u[0] !== t || u[1] !== n ? ((l = { hostId: t, loadOnMount: n }), (u[0] = t), (u[1] = n), (u[2] = l)) : (l = u[2])
      let {
          data: d,
          errorMessage: c,
          isLoading: p,
          refresh: g,
        } = (function (e) {
          let t,
            n,
            l,
            i,
            s,
            o = (0, a.c)(19),
            { hostId: u, loadOnMount: d } = e,
            c = void 0 === d || d,
            p = (0, r.gh)(m.u)
          o[0] !== c ? ((t = { enabled: c }), (o[0] = c), (o[1] = t)) : (t = o[1])
          let g = (0, r._U)(A.ev, u, t),
            f = g.data?.error ?? (g.error ? (g.error.message ?? g.error) : null)
          o[2] !== u || o[3] !== p
            ? ((n = async () => {
                let e = await (0, A.q_)({ hostId: u, refresh: !0 })
                p.query.setData(A.ev, u, e)
              }),
              (o[2] = u),
              (o[3] = p),
              (o[4] = n))
            : (n = o[4])
          let h = n
          o[5] !== u || o[6] !== g.data?.skills || o[7] !== p
            ? ((l = async (e) => {
                let t = I(g.data?.skills ?? [], e)
                if (t) return t
                let n = await (0, A.q_)({ hostId: u, refresh: !1 })
                return (p.query.setData(A.ev, u, n), I(n.skills, e))
              }),
              (o[5] = u),
              (o[6] = g.data?.skills),
              (o[7] = p),
              (o[8] = l))
            : (l = o[8])
          let y = l
          o[9] !== u || o[10] !== p
            ? ((i = async (e) => {
                let { skill: t, installRoot: n } = e
                return (0, A.kL)({
                  hostId: u,
                  skillId: t.id,
                  repoPath: t.repoPath,
                  installRoot: void 0 === n ? null : n,
                  skillStatsigOverride: await (0, v.Uu)(p, t.id),
                })
              }),
              (o[9] = u),
              (o[10] = p),
              (o[11] = i))
            : (i = o[11])
          let b = i
          return (
            o[12] !== y || o[13] !== f || o[14] !== b || o[15] !== g.data || o[16] !== g.isLoading || o[17] !== h
              ? ((s = {
                  data: g.data,
                  errorMessage: f,
                  isLoading: g.isLoading,
                  refresh: h,
                  ensureSkillByName: y,
                  installSkill: b,
                }),
                (o[12] = y),
                (o[13] = f),
                (o[14] = b),
                (o[15] = g.data),
                (o[16] = g.isLoading),
                (o[17] = h),
                (o[18] = s))
              : (s = o[18]),
            s
          )
        })(l),
        f = n ? c : null,
        h = n && p
      u[3] !== n || u[4] !== g
        ? ((i = async () => {
            n && (await g())
          }),
          (u[3] = n),
          (u[4] = g),
          (u[5] = i))
        : (i = u[5])
      let y = n ? (d?.repoRoot ?? e) : null
      return (
        u[6] !== d?.skills || u[7] !== n
          ? ((s = n ? (d?.skills ?? []) : []), (u[6] = d?.skills), (u[7] = n), (u[8] = s))
          : (s = u[8]),
        u[9] !== f || u[10] !== h || u[11] !== i || u[12] !== y || u[13] !== s
          ? ((o = { errorMessage: f, isLoading: h, refresh: i, repoRoot: y, skills: s }),
            (u[9] = f),
            (u[10] = h),
            (u[11] = i),
            (u[12] = y),
            (u[13] = s),
            (u[14] = o))
          : (o = u[14]),
        o
      )
    }
    function C(e) {
      let t,
        n,
        s,
        o,
        g,
        f,
        h,
        b = (0, a.c)(20),
        { forceReloadSkills: x, hostId: I, onInstalled: S } = e,
        w = (0, r.gh)(m.u),
        k = null != (0, p.y)(I),
        [j, C] = (0, u.useState)(null)
      b[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = Symbol()), (b[0] = t)) : (t = b[0])
      let P = (0, u.useRef)(t)
      b[1] === Symbol.for("react.memo_cache_sentinel") ? ((n = {}), (b[1] = n)) : (n = b[1])
      let [_, M] = (0, u.useState)(n)
      b[2] !== w
        ? ((s = {
            mutationFn: async (e) => (0, A.kL)({ ...e, skillStatsigOverride: await (0, v.Uu)(w, e.skillId) }),
            networkMode: "always",
          }),
          (b[2] = w),
          (b[3] = s))
        : (s = b[3])
      let E = (0, i.n)(s)
      ;(b[4] !== I
        ? ((o = () => {
            ;((P.current = Symbol()), C(null), M((e) => ({ ...e, [I]: [] })))
          }),
          (b[4] = I),
          (b[5] = o))
        : (o = b[5]),
        b[6] !== k || b[7] !== x || b[8] !== I || b[9] !== E || b[10] !== S || b[11] !== w
          ? ((g = (e, t) => {
              if (!k) return
              let n = P.current
              ;(C(e.id),
                E.mutate(
                  { hostId: I, skillId: e.id, repoPath: e.repoPath, installRoot: t },
                  {
                    onSuccess: (t, a) => {
                      t.success &&
                        P.current === n &&
                        (M((e) => {
                          let t = e[a.hostId]
                          return t?.includes(a.skillId) ? e : { ...e, [a.hostId]: [...(t ?? []), a.skillId] }
                        }),
                        (0, y.j)(w.queryClient),
                        x(),
                        S?.(),
                        w
                          .get(c.Id)
                          .success(
                            (0, l.jsx)(d.A, {
                              id: "skills.recommended.installSuccess",
                              defaultMessage: "{skillName} skill installed",
                              values: { skillName: (0, l.jsx)("span", { className: "font-medium", children: e.name }) },
                            }),
                          ))
                    },
                    onSettled: () => {
                      P.current === n && C((t) => (t === e.id ? null : t))
                    },
                  },
                ))
            }),
            (b[6] = k),
            (b[7] = x),
            (b[8] = I),
            (b[9] = E),
            (b[10] = S),
            (b[11] = w),
            (b[12] = g))
          : (g = b[12]))
      let T = _[I]
      return (
        b[13] !== T ? ((f = new Set(T)), (b[13] = T), (b[14] = f)) : (f = b[14]),
        b[15] !== j || b[16] !== o || b[17] !== g || b[18] !== f
          ? ((h = {
              clearInstalledRecommendedSkills: o,
              installRecommendedSkill: g,
              installedRecommendedSkillIds: f,
              installingSkillId: j,
            }),
            (b[15] = j),
            (b[16] = o),
            (b[17] = g),
            (b[18] = f),
            (b[19] = h))
          : (h = b[19]),
        h
      )
    }
  },
  iYCA(e, t, n) {
    ;(n("QLGt"), (e.exports = n("TQhG")))
  },
  yCBR(e, t, n) {
    var l = n("W0XS")
    ;(n("xZl2"), (e.exports = l))
  },
  UlFl(e, t, n) {
    ;(n("o1bS"), (e.exports = n("ogbS")("Array", "findLast")))
  },
  gXPe(e, t, n) {
    ;(n("Y4C5"), n("Fuyw"), (e.exports = n("ogbS")("Array", "toSorted")))
  },
  XnQF(e, t, n) {
    var l = n("eUVA"),
      a = n("beJj"),
      i = n("oP4q").f,
      r = l("unscopables"),
      s = Array.prototype
    ;(void 0 === s[r] && i(s, r, { configurable: !0, value: a(null) }),
      (e.exports = function (e) {
        s[r][e] = !0
      }))
  },
  uHOi(e, t, n) {
    var l = n("f6Go")
    e.exports = function (e, t, n) {
      for (var a = 0, i = arguments.length > 2 ? n : l(t), r = new e(i); i > a;) r[a] = t[a++]
      return r
    }
  },
  lGUW(e, t, n) {
    var l = n("MV5a"),
      a = n("OcaE"),
      i = n("f6Go"),
      r = function (e) {
        return function (t, n, r) {
          var s,
            o = l(t),
            u = i(o)
          if (0 === u) return !e && -1
          var d = a(r, u)
          if (e && n != n) {
            for (; u > d;) if ((s = o[d++]) != s) return !0
          } else for (; u > d; d++) if ((e || d in o) && o[d] === n) return e || d || 0
          return !e && -1
        }
      }
    e.exports = { includes: r(!0), indexOf: r(!1) }
  },
  wAJj(e, t, n) {
    var l = n("OwA9"),
      a = n("EzAB"),
      i = n("fuV1"),
      r = n("f6Go"),
      s = function (e) {
        var t = 1 === e
        return function (n, s, o) {
          for (var u, d = i(n), c = a(d), p = r(c), g = l(s, o); p-- > 0;)
            if (g((u = c[p]), p, d))
              switch (e) {
                case 0:
                  return u
                case 1:
                  return p
              }
          return t ? -1 : void 0
        }
      }
    e.exports = { findLast: s(0), findLastIndex: s(1) }
  },
  jXET(e, t, n) {
    var l = n("MGoG")
    e.exports = function (e, t) {
      var n = [][e]
      return (
        !!n &&
        l(function () {
          n.call(
            null,
            t ||
              function () {
                return 1
              },
            1,
          )
        })
      )
    }
  },
  U1ht(e, t, n) {
    e.exports = n("lbJk")([].slice)
  },
  FtMJ(e, t, n) {
    var l = n("U1ht"),
      a = Math.floor,
      i = function (e, t) {
        var n = e.length
        if (n < 8)
          for (var r, s, o = 1; o < n;) {
            for (s = o, r = e[o]; s && t(e[s - 1], r) > 0;) e[s] = e[--s]
            s !== o++ && (e[s] = r)
          }
        else
          for (
            var u = a(n / 2), d = i(l(e, 0, u), t), c = i(l(e, u), t), p = d.length, g = c.length, m = 0, f = 0;
            m < p || f < g;
          )
            e[m + f] = m < p && f < g ? (0 >= t(d[m], c[f]) ? d[m++] : c[f++]) : m < p ? d[m++] : c[f++]
        return e
      }
    e.exports = i
  },
  yUts(e, t, n) {
    var l = n("v8vj"),
      a = n("UP8A"),
      i = n("M4Rs"),
      r = n("eUVA")("toStringTag"),
      s = Object,
      o =
        "Arguments" ===
        i(
          (function () {
            return arguments
          })(),
        ),
      u = function (e, t) {
        try {
          return e[t]
        } catch (e) {}
      }
    e.exports = l
      ? i
      : function (e) {
          var t, n, l
          return void 0 === e
            ? "Undefined"
            : null === e
              ? "Null"
              : "string" == typeof (n = u((t = s(e)), r))
                ? n
                : o
                  ? i(t)
                  : "Object" === (l = i(t)) && a(t.callee)
                    ? "Arguments"
                    : l
        }
  },
  BwBB(e, t, n) {
    var l = n("QKnk"),
      a = n("Dfei"),
      i = n("aNGg"),
      r = n("oP4q")
    e.exports = function (e, t, n) {
      for (var s = a(t), o = r.f, u = i.f, d = 0; d < s.length; d++) {
        var c = s[d]
        l(e, c) || (n && l(n, c)) || o(e, c, u(t, c))
      }
    }
  },
  P6I5(e, t, n) {
    var l = n("ritu"),
      a = n("oP4q"),
      i = n("Szsi")
    e.exports = l
      ? function (e, t, n) {
          return a.f(e, t, i(1, n))
        }
      : function (e, t, n) {
          return ((e[t] = n), e)
        }
  },
  TXUL(e, t, n) {
    var l = n("UP8A"),
      a = n("oP4q"),
      i = n("UthD"),
      r = n("FgJi")
    e.exports = function (e, t, n, s) {
      s || (s = {})
      var o = s.enumerable,
        u = void 0 !== s.name ? s.name : t
      if ((l(n) && i(n, u, s), s.global)) o ? (e[t] = n) : r(t, n)
      else {
        try {
          s.unsafe ? e[t] && (o = !0) : delete e[t]
        } catch (e) {}
        o
          ? (e[t] = n)
          : a.f(e, t, { value: n, enumerable: !1, configurable: !s.nonConfigurable, writable: !s.nonWritable })
      }
      return e
    }
  },
  JBAm(e, t, n) {
    var l = n("v5Cs"),
      a = TypeError
    e.exports = function (e, t) {
      if (!delete e[t]) throw new a("Cannot delete property " + l(t) + " of " + l(e))
    }
  },
  ogbS(e, t, n) {
    var l = n("vlAc"),
      a = n("lbJk")
    e.exports = function (e, t) {
      return a(l[e].prototype[t])
    }
  },
  CU5P(e) {
    e.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ]
  },
  BN3d(e, t, n) {
    var l = n("RpEq").match(/firefox\/(\d+)/i)
    e.exports = !!l && +l[1]
  },
  mFA1(e, t, n) {
    var l = n("RpEq")
    e.exports = /MSIE|Trident/.test(l)
  },
  YX7I(e, t, n) {
    var l = n("RpEq").match(/AppleWebKit\/(\d+)\./)
    e.exports = !!l && +l[1]
  },
  Ywrr(e, t, n) {
    var l = n("vlAc"),
      a = n("aNGg").f,
      i = n("P6I5"),
      r = n("TXUL"),
      s = n("FgJi"),
      o = n("BwBB"),
      u = n("XUMo")
    e.exports = function (e, t) {
      var n,
        d,
        c,
        p,
        g,
        m = e.target,
        f = e.global,
        h = e.stat
      if ((n = f ? l : h ? l[m] || s(m, {}) : l[m] && l[m].prototype))
        for (d in t) {
          if (
            ((p = t[d]),
            (c = e.dontCallGetSet ? (g = a(n, d)) && g.value : n[d]),
            !u(f ? d : m + (h ? "." : "#") + d, e.forced) && void 0 !== c)
          ) {
            if (typeof p == typeof c) continue
            o(p, c)
          }
          ;((e.sham || (c && c.sham)) && i(p, "sham", !0), r(n, d, p, e))
        }
    }
  },
  OwA9(e, t, n) {
    var l = n("PtOp"),
      a = n("dS6X"),
      i = n("kRXN"),
      r = l(l.bind)
    e.exports = function (e, t) {
      return (
        a(e),
        void 0 === t
          ? e
          : i
            ? r(e, t)
            : function () {
                return e.apply(t, arguments)
              }
      )
    }
  },
  PzXd(e, t, n) {
    var l = n("ritu"),
      a = n("QKnk"),
      i = Function.prototype,
      r = l && Object.getOwnPropertyDescriptor,
      s = a(i, "name"),
      o = s && (!l || (l && r(i, "name").configurable))
    e.exports = { EXISTS: s, PROPER: s && "something" === function () {}.name, CONFIGURABLE: o }
  },
  PtOp(e, t, n) {
    var l = n("M4Rs"),
      a = n("lbJk")
    e.exports = function (e) {
      if ("Function" === l(e)) return a(e)
    }
  },
  yUY1(e, t, n) {
    var l = n("vlAc")
    e.exports = function (e, t) {
      var n = l[e],
        a = n && n.prototype
      return a && a[t]
    }
  },
  MlqX(e) {
    e.exports = {}
  },
  kMZZ(e, t, n) {
    e.exports = n("lcaZ")("document", "documentElement")
  },
  k3lr(e, t, n) {
    var l = n("lbJk"),
      a = n("UP8A"),
      i = n("r60i"),
      r = l(Function.toString)
    ;(a(i.inspectSource) ||
      (i.inspectSource = function (e) {
        return r(e)
      }),
      (e.exports = i.inspectSource))
  },
  Vdei(e, t, n) {
    var l,
      a,
      i,
      r = n("YzS6"),
      s = n("vlAc"),
      o = n("dBSE"),
      u = n("P6I5"),
      d = n("QKnk"),
      c = n("r60i"),
      p = n("NbsN"),
      g = n("MlqX"),
      m = "Object already initialized",
      f = s.TypeError,
      h = s.WeakMap
    if (r || c.state) {
      var y = c.state || (c.state = new h())
      ;((y.get = y.get),
        (y.has = y.has),
        (y.set = y.set),
        (l = function (e, t) {
          if (y.has(e)) throw new f(m)
          return ((t.facade = e), y.set(e, t), t)
        }),
        (a = function (e) {
          return y.get(e) || {}
        }),
        (i = function (e) {
          return y.has(e)
        }))
    } else {
      var b = p("state")
      ;((g[b] = !0),
        (l = function (e, t) {
          if (d(e, b)) throw new f(m)
          return ((t.facade = e), u(e, b, t), t)
        }),
        (a = function (e) {
          return d(e, b) ? e[b] : {}
        }),
        (i = function (e) {
          return d(e, b)
        }))
    }
    e.exports = {
      set: l,
      get: a,
      has: i,
      enforce: function (e) {
        return i(e) ? a(e) : l(e, {})
      },
      getterFor: function (e) {
        return function (t) {
          var n
          if (!o(t) || (n = a(t)).type !== e) throw new f("Incompatible receiver, " + e + " required")
          return n
        }
      },
    }
  },
  XUMo(e, t, n) {
    var l = n("MGoG"),
      a = n("UP8A"),
      i = /#|\.prototype\./,
      r = function (e, t) {
        var n = o[s(e)]
        return n === d || (n !== u && (a(t) ? l(t) : !!t))
      },
      s = (r.normalize = function (e) {
        return String(e).replace(i, ".").toLowerCase()
      }),
      o = (r.data = {}),
      u = (r.NATIVE = "N"),
      d = (r.POLYFILL = "P")
    e.exports = r
  },
  f6Go(e, t, n) {
    var l = n("Wy8D")
    e.exports = function (e) {
      return l(e.length)
    }
  },
  UthD(e, t, n) {
    var l = n("lbJk"),
      a = n("MGoG"),
      i = n("UP8A"),
      r = n("QKnk"),
      s = n("ritu"),
      o = n("PzXd").CONFIGURABLE,
      u = n("k3lr"),
      d = n("Vdei"),
      c = d.enforce,
      p = d.get,
      g = String,
      m = Object.defineProperty,
      f = l("".slice),
      h = l("".replace),
      y = l([].join),
      b =
        s &&
        !a(function () {
          return 8 !== m(function () {}, "length", { value: 8 }).length
        }),
      x = String(String).split("String"),
      v = (e.exports = function (e, t, n) {
        ;("Symbol(" === f(g(t), 0, 7) && (t = "[" + h(g(t), /^Symbol\(([^)]*)\).*$/, "$1") + "]"),
          n && n.getter && (t = "get " + t),
          n && n.setter && (t = "set " + t),
          (!r(e, "name") || (o && e.name !== t)) && (s ? m(e, "name", { value: t, configurable: !0 }) : (e.name = t)),
          b && n && r(n, "arity") && e.length !== n.arity && m(e, "length", { value: n.arity }))
        try {
          n && r(n, "constructor") && n.constructor
            ? s && m(e, "prototype", { writable: !1 })
            : e.prototype && (e.prototype = void 0)
        } catch (e) {}
        var l = c(e)
        return (r(l, "source") || (l.source = y(x, "string" == typeof t ? t : "")), e)
      })
    Function.prototype.toString = v(function () {
      return (i(this) && p(this).source) || u(this)
    }, "toString")
  },
  eWL0(e) {
    var t = Math.ceil,
      n = Math.floor
    e.exports =
      Math.trunc ||
      function (e) {
        var l = +e
        return (l > 0 ? n : t)(l)
      }
  },
  beJj(e, t, n) {
    var l,
      a = n("aRew"),
      i = n("gDVu"),
      r = n("CU5P"),
      s = n("MlqX"),
      o = n("kMZZ"),
      u = n("be5s"),
      d = n("NbsN"),
      c = "prototype",
      p = "script",
      g = d("IE_PROTO"),
      m = function () {},
      f = function (e) {
        return "<" + p + ">" + e + "</" + p + ">"
      },
      h = function (e) {
        ;(e.write(f("")), e.close())
        var t = e.parentWindow.Object
        return ((e = null), t)
      },
      y = function () {
        var e,
          t = u("iframe")
        return (
          (t.style.display = "none"),
          o.appendChild(t),
          (t.src = String("java" + p + ":")),
          (e = t.contentWindow.document).open(),
          e.write(f("document.F=Object")),
          e.close(),
          e.F
        )
      },
      b = function () {
        try {
          l = new ActiveXObject("htmlfile")
        } catch (e) {}
        b = "u" > typeof document ? (document.domain && l ? h(l) : y()) : h(l)
        for (var e = r.length; e--;) delete b[c][r[e]]
        return b()
      }
    ;((s[g] = !0),
      (e.exports =
        Object.create ||
        function (e, t) {
          var n
          return (
            null !== e ? ((m[c] = a(e)), (n = new m()), (m[c] = null), (n[g] = e)) : (n = b()),
            void 0 === t ? n : i.f(n, t)
          )
        }))
  },
  gDVu(e, t, n) {
    var l = n("ritu"),
      a = n("Q5Uw"),
      i = n("oP4q"),
      r = n("aRew"),
      s = n("MV5a"),
      o = n("nicF")
    t.f =
      l && !a
        ? Object.defineProperties
        : function (e, t) {
            r(e)
            for (var n, l = s(t), a = o(t), u = a.length, d = 0; u > d;) i.f(e, (n = a[d++]), l[n])
            return e
          }
  },
  pu3q(e, t, n) {
    var l = n("i4Kh"),
      a = n("CU5P").concat("length", "prototype")
    t.f =
      Object.getOwnPropertyNames ||
      function (e) {
        return l(e, a)
      }
  },
  vsRo(e, t) {
    t.f = Object.getOwnPropertySymbols
  },
  i4Kh(e, t, n) {
    var l = n("lbJk"),
      a = n("QKnk"),
      i = n("MV5a"),
      r = n("lGUW").indexOf,
      s = n("MlqX"),
      o = l([].push)
    e.exports = function (e, t) {
      var n,
        l = i(e),
        u = 0,
        d = []
      for (n in l) !a(s, n) && a(l, n) && o(d, n)
      for (; t.length > u;) a(l, (n = t[u++])) && (~r(d, n) || o(d, n))
      return d
    }
  },
  nicF(e, t, n) {
    var l = n("i4Kh"),
      a = n("CU5P")
    e.exports =
      Object.keys ||
      function (e) {
        return l(e, a)
      }
  },
  Dfei(e, t, n) {
    var l = n("lcaZ"),
      a = n("lbJk"),
      i = n("pu3q"),
      r = n("vsRo"),
      s = n("aRew"),
      o = a([].concat)
    e.exports =
      l("Reflect", "ownKeys") ||
      function (e) {
        var t = i.f(s(e)),
          n = r.f
        return n ? o(t, n(e)) : t
      }
  },
  NbsN(e, t, n) {
    var l = n("AGIv"),
      a = n("JZZs"),
      i = l("keys")
    e.exports = function (e) {
      return i[e] || (i[e] = a(e))
    }
  },
  OcaE(e, t, n) {
    var l = n("Do1T"),
      a = Math.max,
      i = Math.min
    e.exports = function (e, t) {
      var n = l(e)
      return n < 0 ? a(n + t, 0) : i(n, t)
    }
  },
  Do1T(e, t, n) {
    var l = n("eWL0")
    e.exports = function (e) {
      var t = +e
      return t != t || 0 === t ? 0 : l(t)
    }
  },
  Wy8D(e, t, n) {
    var l = n("Do1T"),
      a = Math.min
    e.exports = function (e) {
      var t = l(e)
      return t > 0 ? a(t, 0x1fffffffffffff) : 0
    }
  },
  v8vj(e, t, n) {
    var l = n("eUVA")("toStringTag"),
      a = {}
    ;((a[l] = "z"), (e.exports = "[object z]" === String(a)))
  },
  qCMJ(e, t, n) {
    var l = n("yUts"),
      a = String
    e.exports = function (e) {
      if ("Symbol" === l(e)) throw TypeError("Cannot convert a Symbol value to a string")
      return a(e)
    }
  },
  YzS6(e, t, n) {
    var l = n("vlAc"),
      a = n("UP8A"),
      i = l.WeakMap
    e.exports = a(i) && /native code/.test(String(i))
  },
  o1bS(e, t, n) {
    var l = n("Ywrr"),
      a = n("wAJj").findLast,
      i = n("XnQF")
    ;(l(
      { target: "Array", proto: !0 },
      {
        findLast: function (e) {
          return a(this, e, arguments.length > 1 ? arguments[1] : void 0)
        },
      },
    ),
      i("findLast"))
  },
  Y4C5(e, t, n) {
    var l = n("Ywrr"),
      a = n("lbJk"),
      i = n("dS6X"),
      r = n("fuV1"),
      s = n("f6Go"),
      o = n("JBAm"),
      u = n("qCMJ"),
      d = n("MGoG"),
      c = n("FtMJ"),
      p = n("jXET"),
      g = n("BN3d"),
      m = n("mFA1"),
      f = n("cOJA"),
      h = n("YX7I"),
      y = [],
      b = a(y.sort),
      x = a(y.push),
      v = d(function () {
        y.sort(void 0)
      }),
      A = d(function () {
        y.sort(null)
      }),
      I = p("sort"),
      S = !d(function () {
        if (f) return f < 70
        if (!g || !(g > 3)) {
          if (m) return !0
          if (h) return h < 603
          var e,
            t,
            n,
            l,
            a = ""
          for (e = 65; e < 76; e++) {
            switch (((t = String.fromCharCode(e)), e)) {
              case 66:
              case 69:
              case 70:
              case 72:
                n = 3
                break
              case 68:
              case 71:
                n = 4
                break
              default:
                n = 2
            }
            for (l = 0; l < 47; l++) y.push({ k: t + l, v: n })
          }
          for (
            y.sort(function (e, t) {
              return t.v - e.v
            }),
              l = 0;
            l < y.length;
            l++
          )
            ((t = y[l].k.charAt(0)), a.charAt(a.length - 1) !== t && (a += t))
          return "DGBEFHACIJK" !== a
        }
      })
    l(
      { target: "Array", proto: !0, forced: v || !A || !I || !S },
      {
        sort: function (e) {
          void 0 !== e && i(e)
          var t,
            n,
            l = r(this)
          if (S) return void 0 === e ? b(l) : b(l, e)
          var a = [],
            d = s(l)
          for (n = 0; n < d; n++) n in l && x(a, l[n])
          for (
            c(a, function (t, n) {
              return void 0 === n ? -1 : void 0 === t ? 1 : void 0 !== e ? +e(t, n) || 0 : u(t) > u(n) ? 1 : -1
            }),
              t = s(a),
              n = 0;
            n < t;
          )
            l[n] = a[n++]
          for (; n < d;) o(l, n++)
          return l
        },
      },
    )
  },
  Fuyw(e, t, n) {
    var l = n("Ywrr"),
      a = n("lbJk"),
      i = n("dS6X"),
      r = n("MV5a"),
      s = n("uHOi"),
      o = n("yUY1"),
      u = n("XnQF"),
      d = Array,
      c = a(o("Array", "sort"))
    ;(l(
      { target: "Array", proto: !0 },
      {
        toSorted: function (e) {
          return (void 0 !== e && i(e), c(s(d, r(this)), e))
        },
      },
    ),
      u("toSorted"))
  },
  QLGt(e, t, n) {
    n("o1bS")
  },
  xZl2(e, t, n) {
    n("Fuyw")
  },
  TQhG(e, t, n) {
    e.exports = n("UlFl")
  },
  W0XS(e, t, n) {
    e.exports = n("gXPe")
  },
}
//# sourceMappingURL=375488.651e5ccf3a.js.map
