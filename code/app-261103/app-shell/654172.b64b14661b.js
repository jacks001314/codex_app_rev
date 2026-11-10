export const __rspack_esm_ids = [654172]
export const __webpack_modules__ = {
  Obi3() {},
  SgPg(e, t, o) {
    var a = o("ABep"),
      n = o("QosV"),
      i = o("JIuM"),
      c = o("LhhH"),
      r = o("ISnp")
    o.d(
      t,
      {},
      {
        T: function (e) {
          let t,
            o = (0, n.c)(9),
            { avatarUrl: s, colorKey: d, fadeIn: l, loading: m, loadingFallback: u, muted: p, name: h, size: g } = e,
            f = void 0 === g ? "md" : g,
            { isProfileVisible: x } = (0, r.D)(),
            { src: M, isError: w } = (0, i._w)(x ? s : null),
            v = x && (m || (null != s && null == M && !w)) ? u : void 0
          return (
            o[0] !== d || o[1] !== l || o[2] !== u || o[3] !== p || o[4] !== h || o[5] !== f || o[6] !== M || o[7] !== v
              ? ((t = (0, a.jsx)(c.e, {
                  alt: "",
                  colorKey: d,
                  fadeIn: l,
                  fallback: v,
                  loadingFallback: u,
                  muted: p,
                  name: h,
                  size: f,
                  src: M,
                })),
                (o[0] = d),
                (o[1] = l),
                (o[2] = u),
                (o[3] = p),
                (o[4] = h),
                (o[5] = f),
                (o[6] = M),
                (o[7] = v),
                (o[8] = t))
              : (t = o[8]),
            t
          )
        },
      },
    )
  },
  klMk(e, t, o) {
    var a = o("ABep"),
      n = o("QosV"),
      i = o("on57"),
      c = o("oyxz"),
      r = o("ZZgR"),
      s = o("GO7r")
    function d(e) {
      let t,
        o,
        c,
        r = (0, n.c)(10),
        { children: s, description: d, disabledReason: l } = e
      if (!l && !d) {
        let e
        return (r[0] !== s ? ((e = (0, a.jsx)(a.Fragment, { children: s })), (r[0] = s), (r[1] = e)) : (e = r[1]), e)
      }
      return (
        r[2] !== s
          ? ((t = (0, a.jsx)("span", { className: "truncate", children: s })), (r[2] = s), (r[3] = t))
          : (t = r[3]),
        r[4] !== d || r[5] !== l
          ? ((o =
              l || d
                ? (0, a.jsx)("span", {
                    className: (0, i.A)("truncate text-sm text-codex-description", null != l && "shrink-0"),
                    children: l ?? d,
                  })
                : null),
            (r[4] = d),
            (r[5] = l),
            (r[6] = o))
          : (o = r[6]),
        r[7] !== t || r[8] !== o
          ? ((c = (0, a.jsxs)("span", { className: "flex min-w-0 items-center gap-1", children: [t, o] })),
            (r[7] = t),
            (r[8] = o),
            (r[9] = c))
          : (c = r[9]),
        c
      )
    }
    o.d(
      t,
      {},
      {
        B: function (e) {
          let t,
            o,
            i,
            l = (0, n.c)(8),
            { disabledReason: m, onClick: u } = e,
            p = null != m
          return (
            l[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, a.jsx)(c.A, {
                  id: "floatingComposer.newChat",
                  defaultMessage: "New chat",
                  description: "Menu action to start a new primary chat while keeping the workspace content open",
                })),
                (l[0] = t))
              : (t = l[0]),
            l[1] !== m ? ((o = (0, a.jsx)(d, { disabledReason: m, children: t })), (l[1] = m), (l[2] = o)) : (o = l[2]),
            l[3] !== m || l[4] !== u || l[5] !== p || l[6] !== o
              ? ((i = (0, a.jsx)(r.G.Button, {
                  "aria-description": m,
                  LeftIcon: s.JSV,
                  disabled: p,
                  tooltipText: m,
                  onClick: u,
                  children: o,
                })),
                (l[3] = m),
                (l[4] = u),
                (l[5] = p),
                (l[6] = o),
                (l[7] = i))
              : (i = l[7]),
            i
          )
        },
        U: function (e) {
          let t,
            o,
            i,
            c,
            l,
            m,
            u,
            p = (0, n.c)(18)
          ;(p[0] !== e
            ? (({ children: t, description: o, disabledReason: i, ...c } = e),
              (p[0] = e),
              (p[1] = t),
              (p[2] = o),
              (p[3] = i),
              (p[4] = c))
            : ((t = p[1]), (o = p[2]), (i = p[3]), (c = p[4])),
            p[5] !== t || p[6] !== i
              ? ((l = null == i ? t : (0, a.jsxs)(a.Fragment, { children: [t, (0, a.jsx)("br", {}), i] })),
                (p[5] = t),
                (p[6] = i),
                (p[7] = l))
              : (l = p[7]))
          let h = null == i ? "trigger-overflows" : "always"
          return (
            p[8] !== t || p[9] !== o || p[10] !== i
              ? ((m = (0, a.jsx)(d, { description: o, disabledReason: i, children: t })),
                (p[8] = t),
                (p[9] = o),
                (p[10] = i),
                (p[11] = m))
              : (m = p[11]),
            p[12] !== i || p[13] !== c || p[14] !== l || p[15] !== h || p[16] !== m
              ? ((u = (0, a.jsx)(r.G.Item, {
                  ...c,
                  "aria-description": i,
                  LeftIcon: s.OHc,
                  tooltipText: l,
                  tooltipOpenWhen: h,
                  children: m,
                })),
                (p[12] = i),
                (p[13] = c),
                (p[14] = l),
                (p[15] = h),
                (p[16] = m),
                (p[17] = u))
              : (u = p[17]),
            u
          )
        },
      },
    )
  },
  Aoej(e, t, o) {
    var a = o("DBCl"),
      n = o("SPnB"),
      i = o("g2p6"),
      c = o("Zyn0"),
      r = o("X6Vn"),
      s = o("UxLW"),
      d = o("DIdv"),
      l = o("nlNF"),
      m = o("V1hw")
    o.d(
      t,
      {},
      {
        g: async function (e, t, u) {
          let p = e.get(l.x2),
            h = e.get(i.Sk),
            g = e.get(n.chatGptAuthenticatedAccountId$),
            f = e.get(n.chatGptAuthenticatedUserId$),
            x = t.payload
          if (
            null == g ||
            !e.get(n.f4) ||
            "library" !== t.source_type ||
            !("library_item_id" in x) ||
            "native_shared" === (0, c.j)(x) ||
            "shared" === x.access_kind
          )
            return
          let M = (0, m.T)(x)
          if (null == M && "native" !== (0, c.j)(x)) return
          let w =
            null == M && "image" === (0, d.CR)(x) && (0, a.cb0)({ name: x.file_name, type: x.mime_type })
              ? await o.e(338281).then(o.bind(o, "CIm5"))
              : await Promise.all([
                  o.e(293648),
                  o.e(560170),
                  o.e(648165),
                  o.e(74692),
                  o.e(1975),
                  o.e(543449),
                  o.e(904485),
                  o.e(148321),
                  o.e(923712),
                  o.e(886697),
                  o.e(202026),
                  o.e(351889),
                  o.e(164460),
                  o.e(15858),
                  o.e(405471),
                  o.e(326727),
                  o.e(1477),
                  o.e(225245),
                  o.e(4317),
                  o.e(209288),
                  o.e(34417),
                  o.e(42793),
                  o.e(16389),
                  o.e(679632),
                  o.e(870386),
                  o.e(656640),
                  o.e(39017),
                  o.e(489962),
                  o.e(741756),
                  o.e(608446),
                  o.e(638132),
                  o.e(434155),
                  o.e(140959),
                  o.e(680877),
                  o.e(485975),
                  o.e(751719),
                  o.e(866709),
                  o.e(104066),
                  o.e(309406),
                  o.e(116432),
                  o.e(465832),
                  o.e(634303),
                  o.e(505989),
                  o.e(653923),
                  o.e(1751),
                  o.e(473403),
                  o.e(883186),
                  o.e(972175),
                  o.e(490915),
                  o.e(789335),
                  o.e(722845),
                  o.e(332821),
                  o.e(206608),
                  o.e(156432),
                  o.e(664556),
                  o.e(527652),
                  o.e(775452),
                  o.e(862586),
                  o.e(922296),
                  o.e(339467),
                  o.e(632285),
                  o.e(498983),
                  o.e(999152),
                  o.e(388023),
                  o.e(101747),
                  o.e(133468),
                ]).then(o.bind(o, "OTYU"))
          if (
            e.get(i.Sk) !== h ||
            e.get(n.chatGptAuthenticatedAccountId$) !== g ||
            e.get(n.chatGptAuthenticatedUserId$) !== f ||
            !e.get(n.f4) ||
            e.get(l.x2)?.key !== p?.key
          )
            return
          let v = {
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
          "openChatGptSearchImagePreview" in w
            ? await w.openChatGptSearchImagePreview(e, v, u)
            : (0, r.qf)(e, w.ChatGptSearchFilePreview, {
                accountId: h,
                authenticatedAccountId: g,
                canFavorite: null == M && "chat_message_snapshot" !== x.library_artifact_type,
                file: v,
                userId: f,
              })
        },
      },
    )
  },
  bZy7(e, t, o) {
    o.d(t, { CommandMenuDialog: () => tV })
    var a = o("ABep"),
      n = o("QosV"),
      i = o("ChkZ"),
      c = o("Wj9p"),
      r = o("GGze"),
      s = o("rPLd"),
      d = o("vunj"),
      l = o("mjZ0"),
      m = o("nAzy"),
      u = o("QG92"),
      p = o("gjzr"),
      h = o("GxtJ"),
      g = o("SqHz"),
      f = o("wGrl"),
      x = o("bWCc"),
      M = o("T5Yo"),
      w = o("kbu7"),
      v = o("pj4p")
    let y = (0, o("nkTT").a)({
      name: "pop-in-window-egg-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 0.808105, y: 1.141113, width: 14.383789, height: 14.050781 },
        visualBounds: { x: 0.808105, y: 1.141113, width: 14.383789, height: 14.050781 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 0.808105, y: 1.141113, width: 14.383789, height: 14.050781 },
        center: { x: 8, y: 8.166504 },
        insets: { top: 1.141113, right: 0.808106, bottom: 0.808106, left: 0.808105 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8, y: 8.166504 }, foreground: { x: 8, y: 8.166504 } },
      },
      capabilities: ["icon"],
      body: '<path d="M9.94482 9.44971C10.221 9.44971 10.4446 9.67362 10.4448 9.94971V10.6479C10.4447 10.9241 10.221 11.1489 9.94482 11.1489C9.66868 11.1488 9.44491 10.9241 9.44482 10.6479V9.94971C9.44504 9.67367 9.66876 9.44979 9.94482 9.44971Z" fill="currentColor"/> <path d="M12.02 9.44971C12.2961 9.44975 12.5198 9.67365 12.52 9.94971V10.6479C12.5199 10.9241 12.2962 11.1489 12.02 11.1489C11.7438 11.1489 11.5201 10.9241 11.52 10.6479V9.94971C11.5202 9.67362 11.7439 9.44971 12.02 9.44971Z" fill="currentColor"/> <path d="M9.88037 1.14111C10.5341 1.14111 11.0562 1.14093 11.4771 1.17529C11.904 1.21019 12.2734 1.28369 12.6128 1.45654C13.1567 1.73374 13.5993 2.17629 13.8765 2.72021C14.0494 3.05965 14.1228 3.42891 14.1577 3.85596C14.1921 4.27694 14.1919 4.79956 14.1919 5.45361V7.27002C14.7874 8.30789 15.1918 9.59244 15.1919 10.9331C15.1919 13.2266 13.5498 15.1917 10.9829 15.1919C9.04072 15.1919 7.62809 14.0668 7.05518 12.5259H4.8335C4.31248 12.5259 3.89649 12.5255 3.55908 12.5034C3.2174 12.4811 2.91947 12.4347 2.63818 12.3237C1.89403 12.0299 1.30423 11.4399 1.01025 10.6958C0.899247 10.4146 0.852921 10.1164 0.830566 9.7749C0.808516 9.4376 0.808106 9.02129 0.808105 8.50049C0.808105 8.21054 1.04355 7.9751 1.3335 7.9751C1.62345 7.9751 1.85889 8.21054 1.85889 8.50049C1.85889 9.03501 1.85912 9.41142 1.87842 9.70654C1.89742 9.99669 1.93263 10.1727 1.98682 10.3101C2.17407 10.7839 2.55004 11.16 3.02393 11.3472C3.16131 11.4013 3.33712 11.4366 3.62744 11.4556C3.92265 11.4749 4.29874 11.4751 4.8335 11.4751H6.80518C6.78461 11.297 6.77295 11.1162 6.77295 10.9331C6.77303 9.35258 7.33494 7.84992 8.10986 6.73779C8.49814 6.18057 8.94973 5.70701 9.4292 5.36865C9.90441 5.03333 10.4394 4.80811 10.9829 4.80811C11.5262 4.80821 12.0606 5.03346 12.5356 5.36865C12.7442 5.5158 12.9468 5.68926 13.1421 5.8833V5.45361C13.1421 4.78249 13.1419 4.31014 13.1118 3.94189C13.0822 3.57979 13.0259 3.36355 12.9409 3.19678C12.7644 2.85046 12.4826 2.56861 12.1362 2.39209C11.9695 2.30718 11.7539 2.25176 11.3921 2.22217C11.2079 2.20712 10.9975 2.19961 10.7495 2.1958L9.88037 2.19189H8.3335C8.04355 2.19189 7.80811 1.95645 7.80811 1.6665C7.80811 1.37655 8.04355 1.14111 8.3335 1.14111H9.88037ZM10.9829 5.85889C10.7263 5.85889 10.4001 5.96828 10.0347 6.22607C9.67338 6.48103 9.30384 6.86008 8.97119 7.3374C8.30429 8.29449 7.82382 9.59154 7.82373 10.9331C7.82373 12.7064 9.05356 14.1421 10.9829 14.1421C12.912 14.1419 14.1421 12.7062 14.1421 10.9331C14.142 9.59154 13.6606 8.29449 12.9937 7.3374C12.6611 6.86018 12.2924 6.48102 11.9312 6.22607C11.5657 5.96821 11.2395 5.859 10.9829 5.85889Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M1.80225 1.27686L4.74072 1.27783C5.03067 1.27783 5.26611 1.51327 5.26611 1.80322C5.26585 2.09295 5.03051 2.32764 4.74072 2.32764H2.74268L5.45654 5.0415C5.66157 5.24653 5.66157 5.57964 5.45654 5.78467C5.25159 5.9893 4.91931 5.9893 4.71436 5.78467L1.99365 3.06396V5.07471C1.99346 5.36445 1.75901 5.59905 1.46924 5.59912C1.17948 5.59905 0.944043 5.36445 0.943848 5.07471V2.13623C0.943845 1.66233 1.32839 1.27708 1.80225 1.27686Z" fill="currentColor"/>',
    })
    var b = o("X4xq"),
      C = o("VBV1"),
      T = o("TkZ9"),
      S = o("Gp2Z"),
      D = o("AFXy"),
      k = o("on57"),
      P = o("qhiJ"),
      _ = o("X2Bp"),
      A = o("NFGs"),
      I = o.n(A),
      N = o("zTeN")
    o("Obi3")
    var j = o("zd8w"),
      R = o("v7qY"),
      E = o("Wf1j"),
      O = o("oyxz"),
      F = o("Qgfj"),
      B = o("HZfM"),
      G = o("ChYf"),
      L = o("tl5a"),
      W = o("QcW8"),
      q = o("gbrq"),
      U = o("eFn4"),
      K = o("sSHx"),
      $ = o("QLtS"),
      V = o("nRNm"),
      z = o("UN1G"),
      H = o("Itrj"),
      Z = o("JNtf"),
      Q = o("HOLv"),
      Y = o("GO7r"),
      X = o("wZQ4"),
      J = o("evwP"),
      ee = o("Bbed"),
      et = o("zkPp"),
      eo = o("RNul"),
      ea = o("zLIa"),
      en = o("JM0a"),
      ei = o("ubby"),
      ec = o("SaPe"),
      er = o("iB9g"),
      es = o("UoEB"),
      ed = o("AXK1"),
      el = o("e1xH"),
      em = o("QBk8"),
      eu = o("DBCl"),
      ep = o("SPnB"),
      eh = o("Ghh3"),
      eg = o("NDCr"),
      ef = o("Aoej"),
      ex = o("CoxM"),
      eM = o("V1hw"),
      ew = o("Ypxw"),
      ev = o("lAmT"),
      ey = o("DQaH"),
      eb = o("Nkeb"),
      eC = o("syVr"),
      eT = o("Ot7V"),
      eS = o("SGsN"),
      eD = o("uNsz"),
      ek = o("tl2n"),
      eP = o("TCFx"),
      e_ = o("nhfN"),
      eA = o("jrp4"),
      eI = o("nlNF"),
      eN = o("yGJW"),
      ej = o("Oj9r"),
      eR = o("khOd"),
      eE = o("soaw"),
      eO = o("BkbV"),
      eF = o("tUjg"),
      eB = o("idI8"),
      eG = o("BIx6"),
      eL = o("sLcB"),
      eW = o("ZsYZ"),
      eq = o("pyoT"),
      eU = o("aeCT"),
      eK = o("NnV7"),
      e$ = o("ZPSN")
    function eV(e) {
      let t,
        o = (0, n.c)(4),
        { close: i, searchEventLogger: c } = e,
        r = (0, N.Ul)(el.pagesEnabled$)
      return (
        o[0] !== i || o[1] !== r || o[2] !== c
          ? ((t = r ? (0, a.jsx)(ez, { close: i, searchEventLogger: c }) : null),
            (o[0] = i),
            (o[1] = r),
            (o[2] = c),
            (o[3] = t))
          : (t = o[3]),
        t
      )
    }
    function ez(e) {
      let t,
        o,
        i,
        c,
        r,
        s,
        d,
        l,
        m,
        u,
        p = (0, n.c)(61),
        { close: h, searchEventLogger: g } = e,
        f = (0, N.gh)(ej.GD),
        x = (0, E.A)(),
        M = (0, eE.a)(),
        w = (0, B.Zp)(),
        v = (0, B.zy)(),
        y = (0, P.wo)(e1),
        b = (0, N.Ul)(ev.az),
        C = "pages" === b ? "pages" : "all",
        T = "root" === b,
        [S, D] = (0, j.useState)(null),
        k = S?.query === y ? S.limit : 20
      T && (k = 5)
      let _ = (0, N.Ul)(e$.Wr),
        A = (0, N.Ul)(eR.GB),
        I = (0, N.Ul)(A ? eW.IF : null),
        R = (0, N.Ul)(ek.$7),
        F = (0, N.Ul)(el.gG),
        G = (0, N.Ul)(F && y.length > 0 ? eG.Y : null),
        L = F && y.length > 0
      p[0] !== y || p[1] !== g || p[2] !== C || p[3] !== L
        ? ((t = { enabled: L, eventLogger: g, limit: 40, search: y, searchFilter: C, searchScope: "palette" }),
          (p[0] = y),
          (p[1] = g),
          (p[2] = C),
          (p[3] = L),
          (p[4] = t))
        : (t = p[4])
      let W = (0, eg.x)(t),
        q = W.contentSearchPending || W.isFetchingNextPage,
        U = (0, z.WE)(y),
        K = G?.map((e) => ({ page: e, score: U(e.title.trim() || x.formatMessage((0, eK._Y)(e.documentType))) }))
          .filter(eJ)
          .sort(eX)
          .map(eY)
      if (0 === y.length)
        o = A
          ? I?.filter((e) => {
              let { file: t } = e
              return "pages" !== b || null == t
            })
              .slice(0, 20)
              .flatMap(eQ)
          : _?.slice(0, 20).map(eZ)
      else {
        o = []
        let e = new Set()
        for (let t of W.searchItems)
          if ("conversation" !== t.source_type && "dot_messages" !== t.source_type)
            if ("space_page" === t.payload.kind) {
              if (e.has(t.payload.page_id)) continue
              ;(e.add(t.payload.page_id),
                o.push({
                  kind: "page",
                  searchItem: t,
                  page: { pageId: t.payload.page_id, title: t.title, searchPayload: t.payload },
                }))
            } else {
              let e = (0, ew.W)(t, y, "", R)
              null != e && o.push({ kind: "search", result: e })
            }
        for (let t of K ?? []) e.has(t.pageId) || o.push({ kind: "page", page: t })
      }
      let $ = o?.slice(0, k),
        { groupRef: V, prepareSelection: Z } = (0, eb.E)(y, $?.length ?? 0),
        Q = y.length > 0 && ((o?.length ?? 0) > k || W.hasNextPage),
        X = !!$?.length
      if ((0 === y.length && !X) || (y.length > 0 && !F)) return null
      let J = !X && "error" === W.nextSpaceSourceStatus && W.hasNextPage,
        ee = W.contentSearchError || J
      if (!X && !q && !ee) {
        let e
        if (T) return null
        if (W.hasNextPage && "ok" === W.nextSpaceSourceStatus) {
          let e, t, o
          return (
            p[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, ey._X)("page:continue")), (p[5] = e))
              : (e = p[5]),
            p[6] !== x
              ? ((t = x.formatMessage({
                  id: "codex.space.page.commandMenu.continueSearch",
                  defaultMessage: "Continue searching",
                  description: "Action to search the next batch after finding no Space matches so far",
                })),
                (p[6] = x),
                (p[7] = t))
              : (t = p[7]),
            p[8] !== W.loadNextPage || p[9] !== t
              ? ((o = (0, a.jsx)(H.y, { value: e, title: t, onSelect: W.loadNextPage })),
                (p[8] = W.loadNextPage),
                (p[9] = t),
                (p[10] = o))
              : (o = p[10]),
            o
          )
        }
        return (
          p[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(P.uB.Empty, {
                "data-command-menu-search-state": !0,
                children: (0, a.jsx)(O.A, {
                  id: "codex.commandMenu.noResults",
                  defaultMessage: "No matches",
                  description: "Shown when no commands or workspaces match in the command menu",
                }),
              })),
              (p[11] = e))
            : (e = p[11]),
          e
        )
      }
      p[12] !== y || p[13] !== g || p[14] !== C || p[15] !== W.localSearchItems || p[16] !== W.queryIdentity
        ? ((i = (e, t) => {
            null != e &&
              g?.logResultOpen({
                item: e,
                globalIndex: t,
                queryIdentity: W.queryIdentity,
                isLocalResult: W.localSearchItems.includes(e),
                openInNewTab: !1,
                search: y,
                searchFilter: C,
                searchScope: "all",
              })
          }),
          (p[12] = y),
          (p[13] = g),
          (p[14] = C),
          (p[15] = W.localSearchItems),
          (p[16] = W.queryIdentity),
          (p[17] = i))
        : (i = p[17])
      let et = i
      p[18] !== h || p[19] !== M || p[20] !== v || p[21] !== w || p[22] !== f
        ? ((c = (e) => {
            let t = () => {
              ;(0, eL.openSpacePageSidePanelTab)(f, e.pageId, { title: e.title, openSource: "discovery" }).opened && h()
            }
            if (null == e.searchPayload) return void t()
            let o = f.get(eq.spaceAccountId$),
              n = f.get(ep.chatGptAuthenticatedAccountId$),
              i = f.get(ep.chatGptAuthenticatedUserId$),
              c = f.get(eI.x2)?.key,
              r = () =>
                f.get(eq.spaceAccountId$) === o &&
                f.get(ep.chatGptAuthenticatedAccountId$) === n &&
                f.get(ep.chatGptAuthenticatedUserId$) === i &&
                f.get(el.gG) &&
                M() &&
                f.get(eI.x2)?.key === c
            ;(0, eB.openGlobalSearchSpacePage)(f, w, v, e.searchPayload, r, t).catch(() => {
              r() &&
                f
                  .get(eS.Id)
                  .danger((0, a.jsx)(O.A, { ...eF.h.pageOpenFailed }), {
                    errorAnalytics: { toastId: "codex.chatGptSearch.pageOpenFailed" },
                  })
            })
          }),
          (p[18] = h),
          (p[19] = M),
          (p[20] = v),
          (p[21] = w),
          (p[22] = f),
          (p[23] = c))
        : (c = p[23])
      let ea = c
      p[24] !== h || p[25] !== w || p[26] !== f || p[27] !== W.localSearchItems
        ? ((r = (e) => {
            let t = e.item.rawItem
            ;("space" !== t.source_type && (0, ex._h)(f, t, !0, W.localSearchItems.includes(t)),
              h(),
              null == e.href || ("library_item_id" in t.payload && null != (0, eM.T)(t.payload))
                ? (0, ef.g)(f, t, w).catch(() => {
                    f.get(eS.Id).danger(
                      (0, a.jsx)(O.A, {
                        id: "codex.chatGptSearch.previewFailed",
                        defaultMessage: "Unable to open file preview",
                        description:
                          "Toast shown when a file preview cannot be loaded after selecting a ChatGPT search result",
                      }),
                      { errorAnalytics: { toastId: "codex.chatGptSearch.previewFailed" } },
                    )
                  })
                : /^https?:\/\//i.test(e.href)
                  ? (0, eT.E0)({ href: e.href, initiator: "mcp_app_resource" })
                  : w(e.href))
          }),
          (p[24] = h),
          (p[25] = w),
          (p[26] = f),
          (p[27] = W.localSearchItems),
          (p[28] = r))
        : (r = p[28])
      let en = r,
        ei = P.uB,
        ec = q && !X,
        er = q || void 0
      ;(p[29] !== X || p[30] !== b || p[31] !== q
        ? ((s = X
            ? (0, a.jsxs)("span", {
                className: "flex items-center gap-2 px-2 pt-2 text-sm text-codex-description",
                children: [
                  "pages" === b
                    ? (0, a.jsx)(O.A, {
                        id: "codex.space.page.commandMenu.heading",
                        defaultMessage: "Pages",
                        description: "Section for recent or matching Pages in the command menu",
                      })
                    : (0, a.jsx)(O.A, {
                        id: "codex.space.commandMenu.heading",
                        defaultMessage: "Space",
                        description: "Section for recent or matching files and Pages in the command menu",
                      }),
                  q ? (0, a.jsx)(eo.y, { as: "span", className: "icon-xxs" }) : null,
                ],
              })
            : void 0),
          (p[29] = X),
          (p[30] = b),
          (p[31] = q),
          (p[32] = s))
        : (s = p[32]),
        p[33] !== q
          ? ((d = q
              ? (0, a.jsx)("span", {
                  className: "sr-only",
                  role: "status",
                  children: (0, a.jsx)(O.A, {
                    id: "codex.space.page.commandMenu.loading",
                    defaultMessage: "Searching Space…",
                    description:
                      "Accessible loading status while the command menu searches Space (Pages, files, folders, projects, and sites); visually only a spinner appears beside the section title",
                  }),
                })
              : null),
            (p[33] = q),
            (p[34] = d))
          : (d = p[34]))
      let es = $?.map((e, t) => {
        if ("page" === e.kind) {
          let { page: o } = e
          return (0, a.jsx)(
            e2,
            {
              page: o,
              children: (n) => {
                let { icon: i, title: c } = n
                return (0, a.jsx)(H.y, {
                  value: (0, ey._X)(`page:${o.pageId}`),
                  "aria-label": c,
                  title: c,
                  titleTooltipContent: c,
                  leftAccessory: i,
                  onSelect: () => {
                    ;(et(e.searchItem, t),
                      (0, eN.yy)(f, em.CodexSpacesPageOpenRequested, {
                        referrer: em.CodexSpacesPageOpenReferrer.CODEX_SPACES_PAGE_OPEN_REFERRER_COMMAND_PALETTE,
                      }),
                      ea(o))
                  },
                })
              },
            },
            o.pageId,
          )
        }
        if ("file" === e.kind || "site" === e.kind) {
          let { file: t } = e,
            o = () => {
              ;(h(),
                "site" === e.kind
                  ? (0, eT.E0)({ href: e.href, initiator: "sites_library" })
                  : w(`/space/file/${encodeURIComponent(t.node.id)}`),
                eh.Request.safePost("/files/library/files/{library_file_id}/opened", {
                  parameters: { path: { library_file_id: t.node.id } },
                }).catch(eH))
            }
          return "site" === e.kind
            ? (0, a.jsx)(e0, { file: t, onSelect: o }, t.node.id)
            : (0, a.jsx)(
                H.y,
                {
                  value: (0, ey._X)(`file:${t.node.id}`),
                  title: t.node.name,
                  leftAccessory: (0, a.jsx)(e_.p, {
                    fileName: t.node.name,
                    fileExtension: t.node.file_extension,
                    libraryArtifactType: t.node.library_artifact_type,
                    mimeType: t.node.mime_type ?? void 0,
                    provider: (0, eP.oh)(t.node.id),
                    style: "message-inline",
                  }),
                  onSelect: o,
                },
                t.node.id,
              )
        }
        let { result: o } = e,
          { item: n } = o,
          i = (0, a.jsx)(Y.Z1A, {})
        return (
          "library_file" === n.kind
            ? (i = (0, a.jsx)(e_.p, {
                fileName: n.fileName,
                fileExtension: n.fileExtension,
                libraryArtifactType: n.libraryArtifactType,
                mimeType: n.mimeType ?? void 0,
                provider: n.libraryProvider,
                style: "message-inline",
              }))
            : "site" === n.kind
              ? (i = (0, a.jsx)(Y.q_r, {}))
              : ("library_folder" === n.kind || "project" === n.kind) && (i = (0, a.jsx)(Y.efV, {})),
          (0, a.jsx)(
            H.y,
            {
              value: (0, ey._X)(`space:${n.rawItem.source_key}:${n.rawItem.id}`),
              title: n.title,
              leftAccessory: i,
              onSelect: () => {
                ;(et(n.rawItem, t), en(o))
              },
            },
            `${n.rawItem.source_key}:${n.rawItem.id}`,
          )
        )
      })
      return (
        p[35] !== x ||
        p[36] !== y.length ||
        p[37] !== J ||
        p[38] !== ee ||
        p[39] !== W.loadNextPage ||
        p[40] !== W.retryContentSearch
          ? ((l =
              y.length > 0 && ee
                ? (0, a.jsx)(H.y, {
                    value: (0, ey._X)("page:retry"),
                    onSelect: J ? W.loadNextPage : W.retryContentSearch,
                    title: x.formatMessage({
                      id: "codex.space.page.commandMenu.error",
                      defaultMessage: "Could not search Space",
                      description:
                        "Error state when searching Space (Pages, files, folders, projects, and sites) fails in the command menu",
                    }),
                    description: x.formatMessage({
                      id: "codex.space.page.commandMenu.retry",
                      defaultMessage: "Retry",
                      description:
                        "Action on a command-menu row that retries a failed Space search without closing the menu",
                    }),
                  })
                : null),
            (p[35] = x),
            (p[36] = y.length),
            (p[37] = J),
            (p[38] = ee),
            (p[39] = W.loadNextPage),
            (p[40] = W.retryContentSearch),
            (p[41] = l))
          : (l = p[41]),
        p[42] !== Q ||
        p[43] !== X ||
        p[44] !== T ||
        p[45] !== k ||
        p[46] !== Z ||
        p[47] !== y ||
        p[48] !== o ||
        p[49] !== W
          ? ((m =
              X && Q && !T
                ? (0, a.jsx)(eC.P, {
                    section: "pages",
                    disabled: (o?.length ?? 0) <= k && W.isFetchingNextPage,
                    onSelect: () => {
                      ;(Z(), D({ query: y, limit: k + 5 }), (o?.length ?? 0) <= k + 5 && W.loadNextPage())
                    },
                  })
                : null),
            (p[42] = Q),
            (p[43] = X),
            (p[44] = T),
            (p[45] = k),
            (p[46] = Z),
            (p[47] = y),
            (p[48] = o),
            (p[49] = W),
            (p[50] = m))
          : (m = p[50]),
        p[51] !== V ||
        p[52] !== s ||
        p[53] !== d ||
        p[54] !== es ||
        p[55] !== l ||
        p[56] !== m ||
        p[57] !== ei.Group ||
        p[58] !== ec ||
        p[59] !== er
          ? ((u = (0, a.jsxs)(ei.Group, {
              ref: V,
              className: "relative flex flex-col gap-1 select-none",
              forceMount: ec,
              "data-command-menu-loading": er,
              "data-command-menu-search-section": "pages",
              heading: s,
              children: [d, es, l, m],
            })),
            (p[51] = V),
            (p[52] = s),
            (p[53] = d),
            (p[54] = es),
            (p[55] = l),
            (p[56] = m),
            (p[57] = ei.Group),
            (p[58] = ec),
            (p[59] = er),
            (p[60] = u))
          : (u = p[60]),
        u
      )
    }
    function eH() {}
    function eZ(e) {
      return { kind: "page", page: e }
    }
    function eQ(e) {
      let { id: t, file: o } = e
      if (null == o) return [{ kind: "page", page: { pageId: t, title: "" } }]
      if ((0, eD.K$)(o)) {
        let e = o.node.site_metadata?.live_url
        return e && (0, eu.q$v)(e) ? [{ kind: "site", file: o, href: e }] : []
      }
      return [{ kind: "file", file: o }]
    }
    function eY(e) {
      let { page: t } = e
      return t
    }
    function eX(e, t) {
      return t.score - e.score
    }
    function eJ(e) {
      let { score: t } = e
      return t > 0
    }
    function e1(e) {
      return e.search.trim()
    }
    function e0(e) {
      let t,
        o,
        i,
        c = (0, n.c)(7),
        { file: r, onSelect: s } = e,
        d = (0, N._U)(eA.g, r),
        l = `site:${r.node.id}`
      return (
        c[0] !== l ? ((t = (0, ey._X)(l)), (c[0] = l), (c[1] = t)) : (t = c[1]),
        c[2] === Symbol.for("react.memo_cache_sentinel") ? ((o = (0, a.jsx)(Y.q_r, {})), (c[2] = o)) : (o = c[2]),
        c[3] !== s || c[4] !== t || c[5] !== d
          ? ((i = (0, a.jsx)(H.y, { value: t, title: d, leftAccessory: o, onSelect: s })),
            (c[3] = s),
            (c[4] = t),
            (c[5] = d),
            (c[6] = i))
          : (i = c[6]),
        i
      )
    }
    function e2(e) {
      let t,
        o,
        i = (0, n.c)(12),
        { page: c, children: r } = e,
        s = (0, E.A)(),
        d = (0, N._U)(eO.j, c.pageId),
        l = d?.document_type ?? c.documentType,
        m = d?.namespace
      i[0] !== l || i[1] !== s || i[2] !== d?.title || i[3] !== c.title
        ? ((t = (d?.title ?? c.title).trim() || s.formatMessage((0, eK._Y)(l))),
          (i[0] = l),
          (i[1] = s),
          (i[2] = d?.title),
          (i[3] = c.title),
          (i[4] = t))
        : (t = i[4])
      let u = d?.symbol
      return (
        i[5] !== r || i[6] !== l || i[7] !== c.pageId || i[8] !== m || i[9] !== t || i[10] !== u
          ? ((o = (0, a.jsx)(eU.s, {
              pageId: c.pageId,
              documentType: l,
              namespace: m,
              title: t,
              symbol: u,
              children: r,
            })),
            (i[5] = r),
            (i[6] = l),
            (i[7] = c.pageId),
            (i[8] = m),
            (i[9] = t),
            (i[10] = u),
            (i[11] = o))
          : (o = i[11]),
        o
      )
    }
    var e4 = o("mSaF"),
      e3 = o("cWyH"),
      e6 = o("GaA7"),
      e5 = o("fnPc"),
      e9 = o("kfGJ"),
      e8 = o("KEws"),
      e7 = o("pasN"),
      te = o("hZax"),
      tt = o("XXJV"),
      to = o("GEsy"),
      ta = o("Bc5r"),
      tn = o("bIvi"),
      ti = o("afBc"),
      tc = o("S99C"),
      tr = o("yQP1"),
      ts = o("SZCv"),
      td = o.n(ts),
      tl = o("mkNg"),
      tm = o("MgeM"),
      tu = o("CqQF"),
      tp = o("OWtl"),
      th = o("n5oN")
    let tg = (0, N.SZ)(
      tp.u,
      () => tl.p.getOpenTabs(),
      ({ set: e }) =>
        tl.p.subscribe(() => {
          e(tl.p.getOpenTabs())
        }),
      { isEqual: td() },
    )
    function tf(e) {
      let t,
        o,
        i,
        c,
        r,
        s = (0, n.c)(23),
        { close: d } = e,
        l = (0, B.zy)(),
        m = (0, B.Zp)(),
        u = (0, P.wo)(tx),
        [p, h] = (0, j.useState)(null),
        g = p?.query === u ? p.limit : 10
      s[0] !== u
        ? ((t = (0, N.un)(
            tp.u,
            (e) => {
              let { get: t } = e
              return u
                ? t(tg).filter((e) =>
                    (0, tr.lR7)(
                      {
                        title: `${e.title}
${e.pageTitle}`,
                        url: e.url,
                      },
                      u,
                    ),
                  )
                : []
            },
            { isEqual: td() },
          )),
          (s[0] = u),
          (s[1] = t))
        : (t = s[1])
      let f = (0, N.Ul)(t),
        x = Math.min(f.length, g),
        { groupRef: M, prepareSelection: w } = (0, eb.E)(u, x),
        v = 0 === f.length ? "hidden" : "flex flex-col gap-1 select-none"
      if (
        (s[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, a.jsx)("span", {
              className: "block px-2 pt-2 text-sm text-codex-description",
              children: (0, a.jsx)(O.A, {
                id: "codex.commandMenu.browserTabs",
                defaultMessage: "Browser tabs",
                description:
                  "Heading for matching open Codex Browser tabs across tasks in the current window in the command menu",
              }),
            })),
            (s[2] = o))
          : (o = s[2]),
        s[3] !== d || s[4] !== g || s[5] !== l || s[6] !== m || s[7] !== f)
      ) {
        let e
        ;(s[9] !== d || s[10] !== l || s[11] !== m
          ? ((e = (e) =>
              (0, a.jsx)(
                H.y,
                {
                  "aria-label": e.title || e.url,
                  value: (0, ey._X)(`browser-tab:${JSON.stringify([e.conversationId, e.browserTabId])}`),
                  title: e.title || e.url,
                  description: e.url,
                  titleTooltipContent: e.title || e.url,
                  descriptionTooltipContent: e.url,
                  leftAccessory: (0, a.jsx)(Y.ZEl, {}),
                  rightAccessory: (0, a.jsx)(tM, { ownerRoutePath: e.ownerRoutePath }),
                  onSelect: () => {
                    ;(d(),
                      (0, tm.uu)(e.conversationId, { active: !0, browserTabId: e.browserTabId, mode: "activate" }),
                      `${l.pathname}${l.search}` !== e.ownerRoutePath && m(e.ownerRoutePath))
                  },
                },
                `${e.conversationId}\0${e.browserTabId}`,
              )),
            (s[9] = d),
            (s[10] = l),
            (s[11] = m),
            (s[12] = e))
          : (e = s[12]),
          (i = f.slice(0, g).map(e)),
          (s[3] = d),
          (s[4] = g),
          (s[5] = l),
          (s[6] = m),
          (s[7] = f),
          (s[8] = i))
      } else i = s[8]
      return (
        s[13] !== g || s[14] !== w || s[15] !== u || s[16] !== f.length
          ? ((c =
              f.length > g
                ? (0, a.jsx)(eC.P, {
                    section: "browser-tabs",
                    onSelect: () => {
                      ;(w(), h({ query: u, limit: g + 10 }))
                    },
                  })
                : null),
            (s[13] = g),
            (s[14] = w),
            (s[15] = u),
            (s[16] = f.length),
            (s[17] = c))
          : (c = s[17]),
        s[18] !== M || s[19] !== v || s[20] !== i || s[21] !== c
          ? ((r = (0, a.jsxs)(P.uB.Group, {
              ref: M,
              className: v,
              "data-command-menu-search-section": "browser-tabs",
              heading: o,
              children: [i, c],
            })),
            (s[18] = M),
            (s[19] = v),
            (s[20] = i),
            (s[21] = c),
            (s[22] = r))
          : (r = s[22]),
        r
      )
    }
    function tx(e) {
      return e.search.trim()
    }
    function tM(e) {
      let t,
        o,
        i = (0, n.c)(5),
        { ownerRoutePath: c } = e,
        r = (0, N._U)(th.m, c)
      return r?.trim()
        ? (i[0] !== r
            ? ((t = (0, a.jsx)("span", {
                className: "block w-24 truncate text-end text-sm text-codex-description",
                children: r,
              })),
              (i[0] = r),
              (i[1] = t))
            : (t = i[1]),
          i[2] !== t || i[3] !== r
            ? ((o = (0, a.jsx)(tu.m, { tooltipContent: r, openWhen: "trigger-overflows", children: t })),
              (i[2] = t),
              (i[3] = r),
              (i[4] = o))
            : (o = i[4]),
          o)
        : null
    }
    var tw = o("y4kX"),
      tv = o("YxWD"),
      ty = o("WVWQ"),
      tb = o("R7kA"),
      tC = o("q3HK")
    function tT(e) {
      if ("F6" !== e.key || e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey || e.nativeEvent.isComposing)
        return !1
      let t = e.currentTarget.closest("[cmdk-root]"),
        o = t?.querySelector("[cmdk-input]"),
        a =
          e.currentTarget === o
            ? t?.querySelector(
                '[data-search-options] :is(input, button, select, textarea, a[href], [tabindex="0"]):not([disabled]):not([tabindex="-1"])',
              )
            : o
      return null != a && (e.preventDefault(), a.focus(), !0)
    }
    var tS = o("BrP7")
    function tD(e) {
      let t,
        o,
        i,
        c,
        r,
        s = (0, n.c)(15),
        { controls: d, mode: l, modes: m, onSelect: u } = e,
        p = (0, E.A)()
      return (
        s[0] !== p
          ? ((t = p.formatMessage({
              id: "codex.commandMenu.searchScopes",
              defaultMessage: "Search in",
              description: "Accessible label for the tabs that select what the search window searches",
            })),
            (s[0] = p),
            (s[1] = t))
          : (t = s[1]),
        s[2] !== m ? ((o = m.map(tk)), (s[2] = m), (s[3] = o)) : (o = s[3]),
        s[4] !== l || s[5] !== u || s[6] !== t || s[7] !== o
          ? ((i = (0, a.jsx)(tS.t, {
              ariaLabel: t,
              className: "shrink-0",
              onSelect: u,
              selectedKey: l,
              tabs: o,
              variant: "search",
            })),
            (s[4] = l),
            (s[5] = u),
            (s[6] = t),
            (s[7] = o),
            (s[8] = i))
          : (i = s[8]),
        s[9] !== d || s[10] !== p
          ? ((c =
              null == d
                ? null
                : (0, a.jsx)("div", {
                    className: "ms-auto flex min-w-0 shrink-0 items-center justify-end gap-2",
                    "data-search-options": !0,
                    role: "toolbar",
                    tabIndex: -1,
                    "aria-label": p.formatMessage({
                      id: "codex.commandMenu.searchOptions",
                      defaultMessage: "Search options",
                      description: "Accessible label for options that apply to the selected search tab",
                    }),
                    onKeyDown: tT,
                    children: d,
                  })),
            (s[9] = d),
            (s[10] = p),
            (s[11] = c))
          : (c = s[11]),
        s[12] !== i || s[13] !== c
          ? ((r = (0, a.jsxs)("div", {
              className:
                "flex min-w-0 shrink-0 items-center gap-2 overflow-x-auto border-t border-default py-1 pe-2 select-none",
              children: [i, c],
            })),
            (s[12] = i),
            (s[13] = c),
            (s[14] = r))
          : (r = s[14]),
        r
      )
    }
    function tk(e) {
      return { key: e, name: (0, a.jsx)(O.A, { ...tP[e] }) }
    }
    let tP = (0, F.YK)({
      root: {
        id: "codex.commandMenu.scope.everywhere",
        defaultMessage: "All",
        description: "Search tab for finding chats, actions, project files, and text in project files together",
      },
      chats: {
        id: "codex.commandMenu.scope.chats",
        defaultMessage: "Chats",
        description: "Search tab for finding chats by title or content",
      },
      people: {
        id: "codex.commandMenu.scope.people",
        defaultMessage: "People",
        description: "Search tab for finding members of the current workspace",
      },
      space: {
        id: "codex.commandMenu.scope.space",
        defaultMessage: "Space",
        description: "Search tab for finding files and Pages in Space",
      },
      actions: {
        id: "codex.commandMenu.scope.actions",
        defaultMessage: "Actions",
        description: "Search tab for finding commands and settings",
      },
      pages: {
        id: "codex.commandMenu.scope.pages",
        defaultMessage: "Pages",
        description: "Search tab for finding Pages documents",
      },
      files: {
        id: "codex.commandMenu.scope.files",
        defaultMessage: "Files",
        description: "Search tab for finding files by name in the selected location",
      },
      text: {
        id: "codex.commandMenu.scope.text",
        defaultMessage: "Text",
        description: "Search tab for finding text inside files in the selected location",
      },
    })
    var t_ = o("RU3e"),
      tA = o("XYHU"),
      tI = o("hGgS"),
      tN = o("n5iL"),
      tj = o("EFj1")
    function tR(e) {
      let t,
        o,
        i,
        c,
        r = (0, n.c)(12),
        { commandIds: s, onRunCommand: d } = e,
        l = !0 === (0, N.Ul)(t_.$),
        m = (0, N.Ul)(tN.nH),
        u = (0, N.Ul)(tA.IU),
        p = (0, N.Ul)(tc.W)
      r[0] !== p || r[1] !== s || r[2] !== m || r[3] !== u
        ? ((t = [...new Set([..._.dM, ...s, "settings", "keyboardShortcuts"])].flatMap((e) => {
            let t = (0, _.hF)(e)
            return null == t || (0, _.uL)(t) || !(0, _.mg)(t, p)
              ? []
              : (0, tN.Dq)(e, m, u).map((t) => {
                  let { accelerator: o } = t
                  return { commandId: e, accelerator: o }
                })
          })),
          (r[0] = p),
          (r[1] = s),
          (r[2] = m),
          (r[3] = u),
          (r[4] = t))
        : (t = r[4])
      let h = t
      return (
        r[5] !== h
          ? ((o = () => (e6.appServices.spotlight?.setShortcutAccelerators(h.map(tO)), tE)),
            (i = [h]),
            (r[5] = h),
            (r[6] = o),
            (r[7] = i))
          : ((o = r[6]), (i = r[7])),
        (0, j.useEffect)(o, i),
        r[8] !== l || r[9] !== d || r[10] !== h
          ? ((c = (0, a.jsx)(a.Fragment, {
              children: h.map((e) => {
                let { commandId: t, accelerator: o } = e
                return (0, a.jsx)(tF, { commandId: t, accelerator: o, isFocused: l, onRunCommand: d }, `${t}:${o}`)
              }),
            })),
            (r[8] = l),
            (r[9] = d),
            (r[10] = h),
            (r[11] = c))
          : (c = r[11]),
        c
      )
    }
    function tE() {
      e6.appServices.spotlight?.setShortcutAccelerators([])
    }
    function tO(e) {
      let { accelerator: t } = e
      return t
    }
    function tF(e) {
      let t,
        o,
        a,
        i,
        c,
        r,
        s,
        d = (0, n.c)(17),
        { accelerator: l, commandId: m, isFocused: u, onRunCommand: p } = e
      d[0] !== m ? ((t = _.dM.includes(m)), (d[0] = m), (d[1] = t)) : (t = d[1])
      let h = t
      d[2] !== m || d[3] !== p ? ((o = () => p(m)), (d[2] = m), (d[3] = p), (d[4] = o)) : (o = d[4])
      let g = u && !h
      return (
        d[5] !== g ? ((a = { enabled: g }), (d[5] = g), (d[6] = a)) : (a = d[6]),
        (0, tj.K)(m, o, a),
        d[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = /(?:^|\+)(?:CmdOrCtrl|Cmd|Command|Ctrl|Control|Alt|Option)\+/), (d[7] = i))
          : (i = d[7]),
        d[8] !== l ? ((c = i.test(l.split(" ")[0] ?? "")), (d[8] = l), (d[9] = c)) : (c = d[9]),
        d[10] !== m
          ? ((r = (e) => {
              e.isComposing || e.defaultPrevented || ((0, tC.W7)(m, e) && e.preventDefault())
            }),
            (d[10] = m),
            (d[11] = r))
          : (r = d[11]),
        d[12] !== l || d[13] !== u || d[14] !== c || d[15] !== r
          ? ((s = { accelerator: l, enabled: u, allowWithinEditable: c, onKeyDown: r }),
            (d[12] = l),
            (d[13] = u),
            (d[14] = c),
            (d[15] = r),
            (d[16] = s))
          : (s = d[16]),
        (0, tI.EE)(s),
        null
      )
    }
    var tB = o("bWRV"),
      tG = o("Fk6e"),
      tL = o("Nz3U"),
      tW = o("gLoR")
    let tq = (0, ee._)(
        async () =>
          (await Promise.all([o.e(324957), o.e(744415)]).then(o.bind(o, "xWQh")))
            .VisibleSettingsCommandMenuSectionItems,
      ),
      tU = ["newTask", "openFolder"],
      tK = {
        newTask: { asset: T.f },
        newProjectlessTask: { asset: T.f },
        openThreadInNewWindow: { asset: y },
        archiveThread: { asset: i.u },
        toggleThreadPin: { asset: v.F },
        openControlWindow: { asset: M.y },
        undoAppAction: { asset: d.K },
        "git.openPullRequest": es.A,
        openAvatarOverlay: { asset: u.$ },
        searchChats: { asset: x.Y },
        importExternalAgent: { asset: c.Y },
        keyboardShortcuts: { asset: h.T },
        manageTasks: Y.QC9,
        forceReloadSkills: { asset: l.S },
        openSkills: { asset: C.S },
        openFolder: { asset: p.Y },
        toggleSidebar: { asset: b.s },
        togglePinnedSummary: { asset: f.E },
        toggleTerminal: { asset: D.K },
        newTab: { asset: g.b },
        stepWorkspaceLayout: { asset: b.s },
        openReviewTab: { asset: S.L },
        toggleSidePanel: { asset: b.s },
        findInThread: { asset: x.Y },
        navigateBack: { asset: r.z },
        navigateForward: function (e) {
          let t,
            o,
            i = (0, n.c)(4),
            { className: c } = e
          return (
            i[0] !== c ? ((t = (0, k.A)(c, "-scale-x-100")), (i[0] = c), (i[1] = t)) : (t = i[1]),
            i[2] !== t ? ((o = (0, a.jsx)(ec.A, { className: t })), (i[2] = t), (i[3] = o)) : (o = i[3]),
            o
          )
        },
        previousThread: { asset: s.l },
        nextThread: function (e) {
          let t,
            o,
            i = (0, n.c)(4),
            { className: c } = e
          return (
            i[0] !== c ? ((t = (0, k.A)(c, "rotate-180")), (i[0] = c), (i[1] = t)) : (t = i[1]),
            i[2] !== t ? ((o = (0, a.jsx)(er.A, { className: t })), (i[2] = t), (i[3] = o)) : (o = i[3]),
            o
          )
        },
        logOut: { asset: w.z },
        feedback: { asset: m.R },
      }
    function t$(e, { canUseChatGpt: t, codexFeaturesAllowed: o }) {
      switch (e) {
        case void 0:
          return !0
        case "chatgpt":
          return t
        case "codex":
          return o
      }
    }
    function tV(e) {
      let t,
        o,
        i,
        c,
        s,
        d,
        l,
        m,
        u,
        p,
        h,
        g,
        f,
        x,
        M,
        w,
        v,
        y,
        b,
        C,
        T,
        S,
        D,
        A,
        I,
        F,
        V,
        z,
        H,
        Y,
        X,
        J,
        ee,
        eo,
        ec,
        er,
        es,
        em,
        eu,
        ep,
        eh,
        eg,
        ef,
        ex,
        eM = (0, n.c)(212),
        { close: ew, inputRef: eb, search: eC, searchEventLogger: eT, setSearch: eS, standaloneWindow: eD } = e,
        ek = (0, N.gh)(ej.GD),
        eP = (0, B.zy)()
      eM[0] !== eP ? ((t = (0, e8.IT)(eP)), (eM[0] = eP), (eM[1] = t)) : (t = eM[1])
      let e_ = "space" === t,
        eA = (0, E.A)(),
        eI = (0, j.useRef)(null),
        eN = (0, j.useRef)(null)
      eM[2] !== eb
        ? ((o = (e) => {
            ;((eN.current = e), eb(e))
          }),
          (eM[2] = eb),
          (eM[3] = o))
        : (o = eM[3])
      let eR = (0, tn.K)(o),
        [eE] = (0, j.useState)(t7)
      eM[4] !== eE
        ? ((i = () => {
            let e = (0, e3.Hu)(eE),
              t = e?.anchorNode,
              o = e?.anchorOffset ?? 0,
              a = e?.focusNode,
              n = e?.focusOffset ?? 0
            return () => {
              t?.isConnected && a?.isConnected && e?.setBaseAndExtent(t, o, a, n)
            }
          }),
          (eM[4] = eE),
          (eM[5] = i))
        : (i = eM[5])
      let [eO] = (0, j.useState)(i)
      eM[6] !== eE || eM[7] !== ek
        ? ((c = () => {
            let e = eE
              ?.closest("[data-app-shell-tab-panel-controller]")
              ?.getAttribute("data-app-shell-tab-panel-controller")
            return "bottom" === e || "right" === e
              ? e
              : (0, tt.AU)(ek.get(W.J8), { bottom: ek.get(q.lN), right: ek.get(q.SZ) && ek.get(q.yN) })
          }),
          (eM[6] = eE),
          (eM[7] = ek),
          (eM[8] = c))
        : (c = eM[8])
      let [eF] = (0, j.useState)(c),
        { selectedHostId: eB } = (0, e5.D)(),
        eG = (0, ta.M0)(),
        eL = (0, N.Ul)(tw.X),
        eW = (0, N.Ul)(e7.l)
      eM[9] === Symbol.for("react.memo_cache_sentinel") ? ((s = { name: "chatgpt" }), (eM[9] = s)) : (s = eM[9])
      let eq = (0, N._U)(G.G, s).isCapable,
        eU = (0, N.Ul)(!!eq && tG.Pz)
      eM[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = { name: "automations.local" }), (eM[10] = d))
        : (d = eM[10])
      let eK = (0, N._U)(G.G, d).isCapable,
        e$ = (0, N.Ul)(K.B).isCapable,
        ez = (0, N.Ul)(U.ph),
        eH = (0, N.Ul)(tc.W),
        eZ = (0, N.Ul)(tv.tu),
        eQ = "local-thread" === ek.value.routeKind ? ek.value : null,
        eY = (0, N._U)(L.qX, eQ?.conversationId ?? null)
      eM[11] !== eY || eM[12] !== eQ
        ? ((l = null == eQ ? null : { hostId: eQ.hostId ?? eY, threadId: eQ.conversationId }),
          (eM[11] = eY),
          (eM[12] = eQ),
          (eM[13] = l))
        : (l = eM[13])
      let eX = (0, N._U)(ed.K, l),
        eJ = (0, N.Ul)(q.gU),
        e1 = (0, N.Ul)(tv.SP),
        e0 = (0, N.Ul)(ev.az),
        e2 = "people" !== e0 || eU ? e0 : "root",
        e4 = (0, N.Ul)("root" === e2 && !!eq && tG.dE)
      eM[14] !== e2 || eM[15] !== e1
        ? ((m = "root" === e2 || "actions" === e2 ? (e1.at(-1) ?? null) : null),
          (eM[14] = e2),
          (eM[15] = e1),
          (eM[16] = m))
        : (m = eM[16])
      let to = m,
        tr = (0, N.Ul)("files" === e2 || "text" === e2 ? en.H : null)
      eM[17] !== e2 || eM[18] !== tr?.hostId || eM[19] !== tr?.roots
        ? ((u = JSON.stringify([e2, tr?.hostId, tr?.roots])),
          (eM[17] = e2),
          (eM[18] = tr?.hostId),
          (eM[19] = tr?.roots),
          (eM[20] = u))
        : (u = eM[20])
      let ts = u,
        td =
          (0, N.Ul)("text" === e2 ? ei.n : null)?.find((e) => e.key === JSON.stringify([tr?.hostId, tr?.projectRoots]))
            ?.fileMask ?? ""
      eM[21] !== td || eM[22] !== e2 || eM[23] !== ts
        ? ((p = () => {
            let e = ""
            return ("chats" === e2 && (e = ev.gA), { key: ts, value: e, fileMask: td })
          }),
          (eM[21] = td),
          (eM[22] = e2),
          (eM[23] = ts),
          (eM[24] = p))
        : (p = eM[24])
      let [tl, tm] = (0, j.useState)(p)
      tl.key !== ts
        ? tm({ key: ts, value: "chats" === e2 ? ev.gA : "", fileMask: td })
        : tl.fileMask !== td && tm({ ...tl, fileMask: td, value: "" === eC.trim() ? tl.value : (0, ey._X)("text:0") })
      let tu = (0, N.Ul)($.k),
        tp = (0, te.Zj)("1532120159")
      eM[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = { name: "browser.in-app" }), (eM[25] = h))
        : (h = eM[25])
      let th = (0, N._U)(G.G, h).isCapable,
        tg = (0, te.Zj)("2717023667"),
        tx = (0, te.Zj)("2171042036"),
        tM = "local" === (0, e9.Qz)(eB).kind,
        tb = null != eD
      eM[26] !== eq || eM[27] !== ez || eM[28] !== eH || eM[29] !== tb || eM[30] !== eW
        ? ((g = (e) =>
            (!tb || !e.isWorkspaceScoped) &&
            ("codex" === eW || !e.modes?.some(t8)) &&
            t$(e.commandMenuFeature, { canUseChatGpt: eq, codexFeaturesAllowed: ez }) &&
            (0, _.bn)(e.requiredAccess, eH)),
          (eM[26] = eq),
          (eM[27] = ez),
          (eM[28] = eH),
          (eM[29] = tb),
          (eM[30] = eW),
          (eM[31] = g))
        : (g = eM[31])
      let tS = eL.filter(g)
      eM[32] !== e2
        ? ((f = (e) => e.modes?.includes(e2) ?? ("root" === e2 || "actions" === e2)), (eM[32] = e2), (eM[33] = f))
        : (f = eM[33])
      let tk = tS.filter(f),
        tP = eC.trim()
      if (eM[34] !== eA || eM[35] !== e2 || eM[36] !== to?.searchPlaceholder) {
        let e = {
          root: od.unifiedSearchPlaceholder,
          chats: od.chatSearchPlaceholder,
          people: od.peopleSearchPlaceholder,
          pages: od.pageSearchPlaceholder,
          space: od.spaceSearchPlaceholder,
          actions: od.actionSearchPlaceholder,
          files: od.fileSearchPlaceholder,
          text: od.fileSearchPlaceholder,
        }
        ;((x = to?.searchPlaceholder ?? eA.formatMessage(e[e2])),
          (eM[34] = eA),
          (eM[35] = e2),
          (eM[36] = to?.searchPlaceholder),
          (eM[37] = x))
      } else x = eM[37]
      let t_ = x,
        tA = (0, N.Ul)(el.pagesEnabled$),
        tI = (0, N.Ul)(!tb && el.gG),
        tN = ev.n6.filter((e) =>
          "people" === e
            ? !tb && eU
            : "space" === e || "pages" === e
              ? !tb && tA && ("pages" !== e || tI)
              : ("files" !== e && "text" !== e) ||
                (!tb &&
                  ("text" !== e || null != e6.appServices.workspaceSearch) &&
                  tS.some((t) => t.modes?.includes(e))),
        )
      eM[38] !== ek || eM[39] !== eC || eM[40] !== eS
        ? ((M = (e) => {
            ;(ek.set(ev.ek, null), ek.set(tv.SP, []), ek.set(ev.az, e), eS(eC), eN.current?.focus())
          }),
          (eM[38] = ek),
          (eM[39] = eC),
          (eM[40] = eS),
          (eM[41] = M))
        : (M = eM[41])
      let tj = M,
        tE = "root" === e2 ? [] : tk.filter(t9).map(t5)
      eM[42] !== th ||
      eM[43] !== eq ||
      eM[44] !== e$ ||
      eM[45] !== ez ||
      eM[46] !== eH ||
      eM[47] !== tx ||
      eM[48] !== eX ||
      eM[49] !== eJ ||
      eM[50] !== tb ||
      eM[51] !== eK ||
      eM[52] !== eZ
        ? ((w = _.zQ.filter(
            (e) =>
              !(
                !(0, _.iA)(e) ||
                (tb && "workspace" === e.commandMenuGroupKey && "openFolder" !== e.id) ||
                !(0, _.mg)(e, eH) ||
                !t$(e.commandMenuFeature, { canUseChatGpt: eq, codexFeaturesAllowed: ez }) ||
                ("toggleSidebar" === e.id && !eJ) ||
                ("manageTasks" === e.id && !eK && !e$) ||
                ("newTab" === e.id && !th) ||
                ("openControlWindow" === e.id && !tx) ||
                "settings" === e.id ||
                "mcpSettings" === e.id ||
                "personalitySettings" === e.id ||
                "keyboardShortcuts" === e.id ||
                ("archiveThread" === e.id && (eX || (0, tv.ZJ)(eZ, "deleteOrbit") > 0))
              ) &&
              (!!(0, tC.Zu)(e.id) || 0 !== (0, tv.ZJ)(eZ, e.id)),
          )),
          (eM[42] = th),
          (eM[43] = eq),
          (eM[44] = e$),
          (eM[45] = ez),
          (eM[46] = eH),
          (eM[47] = tx),
          (eM[48] = eX),
          (eM[49] = eJ),
          (eM[50] = tb),
          (eM[51] = eK),
          (eM[52] = eZ),
          (eM[53] = w))
        : (w = eM[53])
      let tO = w
      eM[54] !== eS
        ? ((v = () => {
            eS("")
          }),
          (eM[54] = eS),
          (eM[55] = v))
        : (v = eM[55])
      let tF = v
      eM[56] !== tF || eM[57] !== e1 || eM[58] !== ek
        ? ((y = () => {
            ;(ek.set(tv.SP, e1.slice(0, -1)), tF())
          }),
          (eM[56] = tF),
          (eM[57] = e1),
          (eM[58] = ek),
          (eM[59] = y))
        : (y = eM[59])
      let tB = y
      eM[60] !== tu ||
      eM[61] !== eq ||
      eM[62] !== ew ||
      eM[63] !== eA ||
      eM[64] !== tp ||
      eM[65] !== eE ||
      eM[66] !== eF ||
      eM[67] !== eZ ||
      eM[68] !== eT ||
      eM[69] !== eD?.onRunCommand
        ? ((b = (e) => {
            let t = "openAvatarOverlay" === e.id && tu,
              o = (0, tv.iG)(eZ, e.id),
              n = (0, ty.j)(e, eA, o, tp),
              i = n.title
            "openAvatarOverlay" === e.id && tp
              ? (i = tu
                  ? eA.formatMessage({
                      id: "codex.command.hideMiniOverlay",
                      defaultMessage: "Hide Mini",
                      description:
                        "Command menu item to hide Mini, the floating compact Codex panel, when it is visible",
                    })
                  : eA.formatMessage({
                      id: "codex.command.showMiniOverlay",
                      defaultMessage: "Show Mini",
                      description:
                        "Command menu item to show Mini, the floating compact Codex panel, when it is hidden",
                    }))
              : "openAvatarOverlay" === e.id &&
                (i = t
                  ? eA.formatMessage(od.tuckAwayPet)
                  : eA.formatMessage({
                      id: "codex.command.wakeMiniOverlay",
                      defaultMessage: "Wake Mini",
                      description: "Command menu item to wake Mini, the floating compact panel, when it is hidden",
                    }))
            let c = t ? eA.formatMessage(od.tuckAwayPetDescription) : n.description
            return (0, a.jsx)(
              oi,
              {
                command: e,
                close: ew,
                description: c,
                icon: o?.icon,
                originElement: eE,
                originPanel: eF,
                onRunCommand: eD?.onRunCommand,
                onOpenChatSearch: () => {
                  eq && eT.openSession()
                },
                searchKeywords:
                  "openAvatarOverlay" === e.id
                    ? [n.title, eA.formatMessage(od.tuckAwayPet), eA.formatMessage(od.petSearchAlias)]
                    : void 0,
                title: i,
              },
              e.id,
            )
          }),
          (eM[60] = tu),
          (eM[61] = eq),
          (eM[62] = ew),
          (eM[63] = eA),
          (eM[64] = tp),
          (eM[65] = eE),
          (eM[66] = eF),
          (eM[67] = eZ),
          (eM[68] = eT),
          (eM[69] = eD?.onRunCommand),
          (eM[70] = b))
        : (b = eM[70])
      let tL = b,
        tW = [],
        tK = tk.filter(t6),
        tV = "chats" === e2,
        ot = "people" === e2,
        oa = "files" === e2,
        on = "text" === e2,
        oc = "space" === e2 || "pages" === e2,
        os = tK.length > 0 || tV || ot || oa || on || oc,
        ol = "root" === e2 && null == to && !os,
        om = ol && 0 === tP.length,
        ou = om ? "chats" : e2
      eM[71] !== eC || eM[72] !== ou
        ? ((C = (0, ey.e1)(ou, eC)), (eM[71] = eC), (eM[72] = ou), (eM[73] = C))
        : (C = eM[73])
      let op = C,
        oh = ol ? tk.filter((e) => !e.modes?.some(t3) && (!om || "suggested" === e.groupKey)) : tk,
        og =
          om || (tV && 0 === tP.length)
            ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(ti.B, {
                  close: ew,
                  navigateToLocalConversation: eG,
                  onSelectResult: eD?.onSelectResult,
                }),
              })
            : null
      eM[74] !== op ||
      eM[75] !== ew ||
      eM[76] !== os ||
      eM[77] !== eG ||
      eM[78] !== eC ||
      eM[79] !== eT ||
      eM[80] !== om ||
      eM[81] !== eD
        ? ((T =
            os || null == op
              ? null
              : (0, a.jsx)(
                  ti.CommandMenuChatSearchContent,
                  {
                    close: ew,
                    navigateToLocalConversation: eG,
                    presentation: om ? "focused" : "quick",
                    searchPlan: op,
                    search: eC,
                    searchEventLogger: eT,
                    onSelectResult: eD?.onSelectResult,
                    onStartNewConversation: null == eD ? void 0 : () => eD.onRunCommand("newTask"),
                  },
                  "group-chat-search-results",
                )),
          (eM[74] = op),
          (eM[75] = ew),
          (eM[76] = os),
          (eM[77] = eG),
          (eM[78] = eC),
          (eM[79] = eT),
          (eM[80] = om),
          (eM[81] = eD),
          (eM[82] = T))
        : (T = eM[82])
      let of = T
      eM[83] !== ew || eM[84] !== ol || eM[85] !== oc || eM[86] !== eT || eM[87] !== eD
        ? ((S =
            (ol || oc) && null == eD
              ? (0, a.jsx)(a.Fragment, { children: (0, a.jsx)(eV, { close: ew, searchEventLogger: eT }) })
              : null),
          (eM[83] = ew),
          (eM[84] = ol),
          (eM[85] = oc),
          (eM[86] = eT),
          (eM[87] = eD),
          (eM[88] = S))
        : (S = eM[88])
      let ox = S,
        oM = 0 === tP.length,
        ow = []
      if (oM && !os)
        for (let e of tU) {
          let t = tO.find((t) => t.id === e)
          t && ow.push(t)
        }
      eM[89] !== om || eM[90] !== oM
        ? ((D = (e) => !om && (!oM || !tU.includes(e.id))), (eM[89] = om), (eM[90] = oM), (eM[91] = D))
        : (D = eM[91])
      let ov = tO.filter(D),
        oy = (0, ey.w0)(tP, ov.some(t4)),
        ob = os
          ? []
          : oh
              .filter(t2)
              .map((e) => e.render(ew, tF, eS))
              .filter(t0)
      if (oc) null != ox && tW.push(ox)
      else if (tV && 0 === tP.length && null == eD) null != og && tW.push(og)
      else if (tV && null != op) {
        let e,
          t,
          o = eD?.onSelectResult
        ;(eM[92] !== eD
          ? ((e = null == eD ? void 0 : () => eD.onRunCommand("newTask")), (eM[92] = eD), (eM[93] = e))
          : (e = eM[93]),
          eM[94] !== op ||
          eM[95] !== ew ||
          eM[96] !== eG ||
          eM[97] !== eC ||
          eM[98] !== eT ||
          eM[99] !== o ||
          eM[100] !== e
            ? ((t = (0, a.jsx)(
                ti.CommandMenuChatSearchContent,
                {
                  close: ew,
                  navigateToLocalConversation: eG,
                  presentation: "focused",
                  searchPlan: op,
                  search: eC,
                  searchEventLogger: eT,
                  onSelectResult: o,
                  onStartNewConversation: e,
                },
                "group-threads",
              )),
              (eM[94] = op),
              (eM[95] = ew),
              (eM[96] = eG),
              (eM[97] = eC),
              (eM[98] = eT),
              (eM[99] = o),
              (eM[100] = e),
              (eM[101] = t))
            : (t = eM[101]),
          tW.push(t))
      } else if (os) {
        let e,
          t = oa || on ? tk : tK
        eM[102] !== tF || eM[103] !== ew || eM[104] !== eS
          ? ((e = (e) => e.render(ew, tF, eS)), (eM[102] = tF), (eM[103] = ew), (eM[104] = eS), (eM[105] = e))
          : (e = eM[105])
        let o = t.map(e).filter(t1)
        tW.push(...o)
      } else
        for (let e of oh) {
          if (null != e.groupKey || (e.order ?? 0) >= 0) continue
          let t = e.render(ew, tF, eS)
          t && tW.push(t)
        }
      if (!os && (ow.length > 0 || ob.length > 0)) {
        let e, t
        ;(eM[106] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)("span", {
              className: "block px-2 pt-2 text-sm text-codex-description",
              children: (0, a.jsx)(O.A, {
                id: "codex.commandMenu.suggestedGroup",
                defaultMessage: "Quick actions",
                description: "Command group label in the command menu when no search query is entered",
              }),
            })),
            (eM[106] = e))
          : (e = eM[106]),
          eM[107] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = { gap: "var(--spacing)" }), (eM[107] = t))
            : (t = eM[107]),
          tW.push(
            (0, a.jsxs)(
              P.uB.Group,
              { heading: e, className: "flex flex-col", style: t, children: [ow.map(tL), ob] },
              "group-suggested",
            ),
          ))
      }
      eM[108] !== ew ||
      eM[109] !== ez ||
      eM[110] !== tM ||
      eM[111] !== eB ||
      eM[112] !== om ||
      eM[113] !== eD?.onNavigate
        ? ((A =
            ez && !om
              ? (0, a.jsx)(a.Fragment, {
                  children: (0, a.jsx)(tq, {
                    close: ew,
                    isSelectedHostLocal: tM,
                    selectedHostId: eB,
                    onNavigate: eD?.onNavigate,
                  }),
                })
              : null),
          (eM[108] = ew),
          (eM[109] = ez),
          (eM[110] = tM),
          (eM[111] = eB),
          (eM[112] = om),
          (eM[113] = eD?.onNavigate),
          (eM[114] = A))
        : (A = eM[114])
      let oC = A
      os || null == oC || oy || tW.push(oC)
      let oT = new Map(),
        oS = []
      for (let e of ov) {
        let t = e.commandMenuGroupKey
        if (!t) {
          oS.push(e)
          continue
        }
        let o = oT.get(t)
        o ? o.push(e) : oT.set(t, [e])
      }
      for (let e of (os || tW.push((0, a.jsx)(P.uB.Group, { children: oS.map(tL) }, "ungrouped-actions")), _.vW)) {
        if (os) break
        let t = oT.get(e),
          o = oh
            .filter((t) => t.groupKey === e)
            .map((e) => e.render(ew, tF, eS))
            .filter(tJ)
        ;(t?.length || 0 !== o.length) &&
          (tW.push(
            (0, a.jsxs)(
              P.uB.Group,
              {
                heading: (0, a.jsx)("span", {
                  className: "block px-2 pt-2 text-sm text-codex-description",
                  children: (0, a.jsx)(O.A, { ...od[e] }),
                }),
                className: "flex flex-col",
                style: { gap: "var(--spacing)" },
                children: [o, t?.map(tL)],
              },
              `group-${e}`,
            ),
          ),
          oy && "configure" === e && null != oC && tW.push(oC))
      }
      if (!os)
        for (let e of oh) {
          if (null != e.groupKey || (e.order ?? 0) < 0) continue
          let t = e.render(ew, tF, eS)
          t && tW.push(t)
        }
      if (ot && eU) {
        let e
        ;(eM[115] !== ew || eM[116] !== eT || eM[117] !== tP
          ? ((e = (0, a.jsx)(
              oe,
              { scrollRef: eI, close: ew, search: tP, searchEventLogger: eT },
              "group-people-search",
            )),
            (eM[115] = ew),
            (eM[116] = eT),
            (eM[117] = tP),
            (eM[118] = e))
          : (e = eM[118]),
          tW.push(e))
      }
      let oD = ol
          ? {
              actions: tW,
              pages: [],
              space: [ox],
              chats: [og, om ? null : of],
              files: tk.filter(tX).map((e) => (0, a.jsx)(j.Fragment, { children: e.render(ew, tF, eS) }, e.id)),
              text: tk.filter(tY).map((e) => (0, a.jsx)(j.Fragment, { children: e.render(ew, tF, eS) }, e.id)),
            }
          : null,
        ok = ev.n6.filter(tQ)
      om && (ok = e_ ? ["actions", "space", "chats", "files", "text"] : ["actions", "chats", "space", "files", "text"])
      let oP = tl.value,
        o_ = tV && 0 === tP.length && !tb,
        oA = !oa && !on && !tV && !ot && !oc
      ;(eM[119] !== eA ? ((I = eA.formatMessage(od.dialogTitle)), (eM[119] = eA), (eM[120] = I)) : (I = eM[120]),
        eM[121] !== td || eM[122] !== ts
          ? ((F = (e) => tm({ key: ts, value: e, fileMask: td })), (eM[121] = td), (eM[122] = ts), (eM[123] = F))
          : (F = eM[123]),
        eM[124] !== tl.value || eM[125] !== o_ || eM[126] !== oA || eM[127] !== I || eM[128] !== F
          ? ((V = { value: oP, loop: o_, shouldFilter: oA, filter: ey.e, label: I, onValueChange: F }),
            (eM[124] = tl.value),
            (eM[125] = o_),
            (eM[126] = oA),
            (eM[127] = I),
            (eM[128] = F),
            (eM[129] = V))
          : (V = eM[129]))
      let oI = V
      eM[130] !== tO || eM[131] !== eD
        ? ((z = null != eD && (0, a.jsx)(tR, { commandIds: tO.map(tZ), onRunCommand: eD.onRunCommand })),
          (eM[130] = tO),
          (eM[131] = eD),
          (eM[132] = z))
        : (z = eM[132])
      let oN = null != eD
      eM[133] !== eA || eM[134] !== tE.length
        ? ((H =
            0 === tE.length
              ? void 0
              : eA.formatMessage({
                  id: "codex.commandMenu.searchKeyboardHint",
                  defaultMessage: "Tab switches search; F6 focuses search options",
                  description:
                    "Keyboard help for the search input when the current search scope has extra options beside its tabs",
                })),
          (eM[133] = eA),
          (eM[134] = tE.length),
          (eM[135] = H))
        : (H = eM[135])
      let oj = on ? 256 : void 0
      ;(eM[136] !== eq ||
      eM[137] !== td ||
      eM[138] !== os ||
      eM[139] !== tV ||
      eM[140] !== oa ||
      eM[141] !== e2 ||
      eM[142] !== ek ||
      eM[143] !== eT ||
      eM[144] !== ts ||
      eM[145] !== eS ||
      eM[146] !== to
        ? ((Y = (e) => {
            ;(ek.set(ev.ek, null),
              (0, R.flushSync)(() => eS(e)),
              (oa || ("root" === e2 && null == to)) && ek.set(tv.rK, e2, e))
            let t = (0, ey.e1)(e2, e)
            ;(eq && t?.includeContentResults && (tV || (null == to && !os)) && eT.openSession(),
              tV && tm({ key: ts, value: ev.gA, fileMask: td }))
          }),
          (eM[136] = eq),
          (eM[137] = td),
          (eM[138] = os),
          (eM[139] = tV),
          (eM[140] = oa),
          (eM[141] = e2),
          (eM[142] = ek),
          (eM[143] = eT),
          (eM[144] = ts),
          (eM[145] = eS),
          (eM[146] = to),
          (eM[147] = Y))
        : (Y = eM[147]),
        eM[148] !== os || eM[149] !== oa || eM[150] !== e2 || eM[151] !== tN || eM[152] !== tj || eM[153] !== to
          ? ((X = (e) => {
              if (!tT(e)) {
                if (
                  "Enter" === e.key &&
                  !e.defaultPrevented &&
                  !e.nativeEvent.isComposing &&
                  229 !== e.nativeEvent.keyCode &&
                  (oa || ("root" === e2 && !os)) &&
                  null == to
                ) {
                  let t = Array.from(
                    e.currentTarget
                      .closest("[cmdk-root]")
                      ?.querySelectorAll('[cmdk-item]:not([aria-disabled="true"])') ?? [],
                  ).filter(tH)
                  t.some(tz) || (e.preventDefault(), t[0]?.click())
                }
                null != to ||
                  "Tab" !== e.key ||
                  e.defaultPrevented ||
                  e.altKey ||
                  e.ctrlKey ||
                  e.metaKey ||
                  e.nativeEvent.isComposing ||
                  (e.preventDefault(), tj(tN[(tN.indexOf(e2) + (e.shiftKey ? -1 : 1) + tN.length) % tN.length]))
              }
            }),
            (eM[148] = os),
            (eM[149] = oa),
            (eM[150] = e2),
            (eM[151] = tN),
            (eM[152] = tj),
            (eM[153] = to),
            (eM[154] = X))
          : (X = eM[154]),
        eM[155] === Symbol.for("react.memo_cache_sentinel")
          ? ((J = (0, a.jsx)(ea.pd, { variant: "search", focusRing: !1 })), (eM[155] = J))
          : (J = eM[155]),
        eM[156] !== eC ||
        eM[157] !== t_ ||
        eM[158] !== eR ||
        eM[159] !== oN ||
        eM[160] !== H ||
        eM[161] !== oj ||
        eM[162] !== Y ||
        eM[163] !== X
          ? ((ee = (0, a.jsx)(P.uB.Input, {
              ref: eR,
              asChild: !0,
              autoFocus: oN,
              "aria-description": H,
              maxLength: oj,
              placeholder: t_,
              value: eC,
              onValueChange: Y,
              onKeyDown: X,
              children: J,
            })),
            (eM[156] = eC),
            (eM[157] = t_),
            (eM[158] = eR),
            (eM[159] = oN),
            (eM[160] = H),
            (eM[161] = oj),
            (eM[162] = Y),
            (eM[163] = X),
            (eM[164] = ee))
          : (ee = eM[164]),
        eM[165] !== tB || eM[166] !== tK || eM[167] !== eA || eM[168] !== to
          ? ((eo =
              null == to
                ? null
                : (0, a.jsx)(et.fy, {
                    ariaLabel: eA.formatMessage({
                      id: "codex.commandMenu.backToCommands",
                      defaultMessage: "Back to commands",
                      description: "Accessible label for returning from a command menu drill-in",
                    }),
                    density: "row",
                    icon: (0, a.jsx)(Q.I, { asset: r.z }),
                    isSelected: !1,
                    title: (0, a.jsx)("span", { title: to.title, children: to.title }),
                    rightText: tK[0]?.pageAccessory,
                    showDivider: !1,
                    onSelect: (e) => {
                      ;(e.stopPropagation(), tB())
                    },
                  })),
            (eM[165] = tB),
            (eM[166] = tK),
            (eM[167] = eA),
            (eM[168] = to),
            (eM[169] = eo))
          : (eo = eM[169]))
      let oR = P.uB.List,
        oE =
          null == oD
            ? tW
            : (0, a.jsxs)(a.Fragment, {
                children: [
                  ok.map((e) => (0, a.jsx)("div", { children: oD[e] }, e)),
                  (0, a.jsx)("div", { children: null == eD && th && tg ? (0, a.jsx)(tf, { close: ew }) : null }),
                  null == eD && e4 ? (0, a.jsx)(oo, { close: ew, search: tP, searchEventLogger: eT }) : null,
                ],
              }),
        oO =
          (oa || on) && 0 === tW.length
            ? (0, a.jsx)("div", {
                "data-cmdk-empty": !0,
                "data-command-menu-search-state": !0,
                children: (0, a.jsx)(O.A, {
                  id: "codex.commandMenu.chooseSearchFolder",
                  defaultMessage: "Choose a folder to search files",
                  description: "Prompt in Files and Text search when no folder is available to search",
                }),
              })
            : null
      ;(eM[170] === Symbol.for("react.memo_cache_sentinel")
        ? ((ec = (0, a.jsx)(or, {})), (eM[170] = ec))
        : (ec = eM[170]),
        eM[171] !== op || eM[172] !== tV || eM[173] !== oa || eM[174] !== ot || eM[175] !== oc || eM[176] !== on
          ? ((er =
              tV || ot || null != op || oa || on || oc
                ? null
                : (0, a.jsx)(P.uB.Empty, {
                    "data-command-menu-search-state": !0,
                    children: (0, a.jsx)(O.A, {
                      id: "codex.commandMenu.noResults",
                      defaultMessage: "No matches",
                      description: "Shown when no commands or workspaces match in the command menu",
                    }),
                  })),
            (eM[171] = op),
            (eM[172] = tV),
            (eM[173] = oa),
            (eM[174] = ot),
            (eM[175] = oc),
            (eM[176] = on),
            (eM[177] = er))
          : (er = eM[177]),
        eM[178] !== oR || eM[179] !== ts || eM[180] !== eI || eM[181] !== oE || eM[182] !== oO || eM[183] !== er
          ? ((es = (0, a.jsxs)(oR, { ref: eI, children: [oE, oO, ec, er] }, ts)),
            (eM[178] = oR),
            (eM[179] = ts),
            (eM[180] = eI),
            (eM[181] = oE),
            (eM[182] = oO),
            (eM[183] = er),
            (eM[184] = es))
          : (es = eM[184]),
        eM[185] !== e2 || eM[186] !== tE || eM[187] !== tN || eM[188] !== tj || eM[189] !== to
          ? ((em =
              null != to
                ? null
                : (0, a.jsx)(tD, { controls: 0 === tE.length ? null : tE, mode: e2, modes: tN, onSelect: tj })),
            (eM[185] = e2),
            (eM[186] = tE),
            (eM[187] = tN),
            (eM[188] = tj),
            (eM[189] = to),
            (eM[190] = em))
          : (em = eM[190]))
      let oF = (0, a.jsxs)(a.Fragment, { children: [z, ee, eo, es, em] })
      if (null != eD) {
        let e
        return (
          eM[191] !== ew || eM[192] !== tB || eM[193] !== to
            ? ((e = (e) => {
                "Escape" !== e.key || e.nativeEvent.isComposing || (e.preventDefault(), null != to ? tB() : ew())
              }),
              (eM[191] = ew),
              (eM[192] = tB),
              (eM[193] = to),
              (eM[194] = e))
            : (e = eM[194]),
          (0, a.jsx)(P.uB, { ...oI, "data-command-menu-variant": "standalone", onKeyDown: e, children: oF })
        )
      }
      return (
        eM[195] !== ew || eM[196] !== tB || eM[197] !== eE || eM[198] !== eO || eM[199] !== ek || eM[200] !== to
          ? ((eu = (e) => {
              e
                ? ek.set(tv.j6, !0)
                : null != to
                  ? tB()
                  : ((0, R.flushSync)(ew),
                    eE instanceof HTMLElement && eE.isConnected && (eE.focus({ preventScroll: !0 }), eO()))
            }),
            (eM[195] = ew),
            (eM[196] = tB),
            (eM[197] = eE),
            (eM[198] = eO),
            (eM[199] = ek),
            (eM[200] = to),
            (eM[201] = eu))
          : (eu = eM[201]),
        eM[202] !== eA ? ((ep = eA.formatMessage(od.dialogTitle)), (eM[202] = eA), (eM[203] = ep)) : (ep = eM[203]),
        eM[204] !== ep
          ? ((eh = (0, a.jsx)(Z.L3, { className: "sr-only", children: ep })), (eM[204] = ep), (eM[205] = eh))
          : (eh = eM[205]),
        eM[206] !== eA
          ? ((eg = eA.formatMessage(od.dialogDescription)), (eM[206] = eA), (eM[207] = eg))
          : (eg = eM[207]),
        eM[208] !== eg
          ? ((ef = (0, a.jsx)(Z.rr, { className: "sr-only", children: eg })), (eM[208] = eg), (eM[209] = ef))
          : (ef = eM[209]),
        !1 !== eM[210] ? ((ex = (0, k.A)(!1)), (eM[210] = !1), (eM[211] = ex)) : (ex = eM[211]),
        (0, a.jsxs)(Z.lG, {
          open: !0,
          unstyledContent: !0,
          animateHeight: !1,
          showDialogClose: !1,
          contentPosition: "anchored",
          contentClassName:
            "command-menu-dialog global-command-menu-dialog search-command-menu-dialog left-1/2 -translate-x-1/2 bg-transparent p-0 shadow-none",
          onOpenChange: eu,
          children: [eh, ef, (0, a.jsx)(P.uB, { ...oI, className: ex, children: oF })],
        })
      )
    }
    function tz(e) {
      return "true" === e.getAttribute("aria-selected")
    }
    function tH(e) {
      return null == e.closest("[hidden], [inert]")
    }
    function tZ(e) {
      let { id: t } = e
      return t
    }
    function tQ(e) {
      return "root" !== e && "people" !== e
    }
    function tY(e) {
      return e.modes?.includes("text")
    }
    function tX(e) {
      return e.modes?.includes("files")
    }
    function tJ(e) {
      return null != e
    }
    function t1(e) {
      return null != e
    }
    function t0(e) {
      return null != e
    }
    function t2(e) {
      return "suggested" === e.groupKey
    }
    function t4(e) {
      return "importExternalAgent" === e.id && "configure" === e.commandMenuGroupKey
    }
    function t3(e) {
      return "files" === e || "text" === e
    }
    function t6(e) {
      return e.exclusive
    }
    function t5(e) {
      return (0, a.jsx)(j.Fragment, { children: e.renderControls?.() }, e.id)
    }
    function t9(e) {
      return null != e.renderControls
    }
    function t8(e) {
      return "files" === e || "text" === e
    }
    function t7() {
      let e = document.activeElement
      for (; e?.shadowRoot?.activeElement != null;) e = e.shadowRoot.activeElement
      return e
    }
    function oe(e) {
      let t,
        o,
        i,
        c,
        r,
        s,
        d,
        l,
        m,
        u,
        p = (0, n.c)(46)
      p[0] !== e ? (({ scrollRef: o, ...t } = e), (p[0] = e), (p[1] = t), (p[2] = o)) : ((t = p[1]), (o = p[2]))
      let h = (0, E.A)(),
        g = (0, to.o)(t.search, 150),
        f = t.search !== g
      p[3] !== t.search || p[4] !== f
        ? ((i = { search: t.search, debouncing: f }), (p[3] = t.search), (p[4] = f), (p[5] = i))
        : (i = p[5])
      let {
          members: x,
          hasLoadedResults: M,
          showSearchResults: w,
          isLoading: v,
          isError: y,
          hasNextPage: b,
          isFetchingNextPage: C,
          isFetchNextPageError: T,
          fetchNextPage: S,
        } = (0, N._U)(tW.E8, i),
        D = (0, N._U)(tG.Iq, !w || M || y ? "" : t.search),
        k = !M
      p[6] !== k || p[7] !== D || p[8] !== x
        ? ((c = k ? D.flatMap(ot) : x), (p[6] = k), (p[7] = D), (p[8] = x), (p[9] = c))
        : (c = p[9])
      let _ = c,
        A = v || y || _.length > 0
      if (
        (p[10] !== t.search || p[11] !== t.searchEventLogger || p[12] !== w || p[13] !== A
          ? ((r = { enabled: w, pending: A, search: t.search, searchEventLogger: t.searchEventLogger }),
            (p[10] = t.search),
            (p[11] = t.searchEventLogger),
            (p[12] = w),
            (p[13] = A),
            (p[14] = r))
          : (r = p[14]),
        (0, tB.I)(r),
        !w)
      )
        return null
      p[15] !== t.search.length
        ? ((s =
            0 === t.search.length &&
            (0, a.jsx)("span", {
              className: "block px-2 pt-2 text-sm text-codex-description",
              children: (0, a.jsx)(O.A, { ...tW.RE }),
            })),
          (p[15] = t.search.length),
          (p[16] = s))
        : (s = p[16])
      let I = s
      if (v && 0 === _.length) {
        let e, t, o, n
        return (
          p[17] !== h
            ? ((e = h.formatMessage({
                id: "codex.commandMenu.peopleSearchLoading",
                defaultMessage: "Searching people…",
                description: "Loading message while searching workspace members",
              })),
              (p[17] = h),
              (p[18] = e))
            : (e = p[18]),
          p[19] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsx)(eo.y, { className: "icon-sm" })), (p[19] = t))
            : (t = p[19]),
          p[20] !== e
            ? ((o = (0, a.jsx)(P.uB.Loading, { "data-command-menu-search-state": !0, label: e, children: t })),
              (p[20] = e),
              (p[21] = o))
            : (o = p[21]),
          p[22] !== I || p[23] !== o
            ? ((n = (0, a.jsxs)(a.Fragment, { children: [I, o] })), (p[22] = I), (p[23] = o), (p[24] = n))
            : (n = p[24]),
          n
        )
      }
      if (!_.length && !b && !T) {
        let e, t
        return (
          p[25] !== y
            ? ((e = (0, a.jsx)(P.uB.Empty, {
                "data-command-menu-search-state": !0,
                children: y
                  ? (0, a.jsx)(O.A, {
                      id: "codex.commandMenu.peopleSearchError",
                      defaultMessage: "Could not search people",
                      description: "Error shown when workspace member search fails",
                    })
                  : (0, a.jsx)(O.A, {
                      id: "codex.commandMenu.peopleSearchEmpty",
                      defaultMessage: "No people found",
                      description: "Empty state when no workspace members match the search",
                    }),
              })),
              (p[25] = y),
              (p[26] = e))
            : (e = p[26]),
          p[27] !== I || p[28] !== e
            ? ((t = (0, a.jsxs)(a.Fragment, { children: [I, e] })), (p[27] = I), (p[28] = e), (p[29] = t))
            : (t = p[29]),
          t
        )
      }
      return (
        p[30] !== k || p[31] !== _ || p[32] !== t
          ? ((d = (0, a.jsx)(on, { ...t, tab: "people", members: _, isLocalResult: k })),
            (p[30] = k),
            (p[31] = _),
            (p[32] = t),
            (p[33] = d))
          : (d = p[33]),
        p[34] !== S || p[35] !== b || p[36] !== C || p[37] !== o
          ? ((l = (0, a.jsx)(X.D, {
              hasNextPage: b,
              isFetchingNextPage: C,
              rootMargin: "0px 0px 520px 0px",
              rootRef: o,
              onLoadNextPage: S,
            })),
            (p[34] = S),
            (p[35] = b),
            (p[36] = C),
            (p[37] = o),
            (p[38] = l))
          : (l = p[38]),
        p[39] !== S || p[40] !== T
          ? ((m =
              T &&
              (0, a.jsx)(P.uB.Item, {
                onSelect: S,
                children: (0, a.jsx)(O.A, {
                  id: "profile.workspaceSearch.paginationRetry",
                  defaultMessage: "Couldn’t load more profiles. Try again",
                  description: "Action to retry loading the next page of workspace profile search results",
                }),
              })),
            (p[39] = S),
            (p[40] = T),
            (p[41] = m))
          : (m = p[41]),
        p[42] !== d || p[43] !== l || p[44] !== m
          ? ((u = (0, a.jsxs)(a.Fragment, { children: [d, l, m] })), (p[42] = d), (p[43] = l), (p[44] = m), (p[45] = u))
          : (u = p[45]),
        u
      )
    }
    function ot(e) {
      let t = e.profile_url?.trim()
      return t ? [{ member: e, profileUrl: t }] : []
    }
    function oo(e) {
      let t,
        o,
        i,
        c,
        r = (0, n.c)(14),
        { search: s, searchEventLogger: d } = e,
        l = (0, to.o)(s, 150),
        m = s.length >= 2,
        u = m && l === s
      r[0] !== u ? ((t = { enabled: u }), (r[0] = u), (r[1] = t)) : (t = r[1])
      let { data: p, isLoading: h, isError: g } = (0, N._U)(tG.O, l, t),
        f = u ? p?.items : void 0,
        x = (0, N._U)(tG.Iq, m && null == f && !(u && g) ? s : ""),
        M = f ?? x
      r[2] !== M ? ((o = M.flatMap(oa).slice(0, 5)), (r[2] = M), (r[3] = o)) : (o = r[3])
      let w = o,
        v = !u || h || g || w.length > 0
      return (
        r[4] !== m || r[5] !== s || r[6] !== d || r[7] !== v
          ? ((i = { enabled: m, pending: v, search: s, searchEventLogger: d }),
            (r[4] = m),
            (r[5] = s),
            (r[6] = d),
            (r[7] = v),
            (r[8] = i))
          : (i = r[8]),
        (0, tB.I)(i),
        r[9] !== m || r[10] !== w || r[11] !== e || r[12] !== f
          ? ((c =
              m && w.length > 0 ? (0, a.jsx)(on, { ...e, tab: "all", members: w, isLocalResult: null == f }) : null),
            (r[9] = m),
            (r[10] = w),
            (r[11] = e),
            (r[12] = f),
            (r[13] = c))
          : (c = r[13]),
        c
      )
    }
    function oa(e) {
      let t = e.profile_url?.trim()
      return t ? [{ member: e, profileUrl: t }] : []
    }
    function on(e) {
      let t,
        o,
        i,
        c,
        r = (0, n.c)(31),
        { close: s, isLocalResult: d, members: l, search: m, searchEventLogger: u, tab: p } = e,
        h = (0, N.gh)(ej.GD),
        g = (0, B.Zp)()
      r[0] !== d || r[1] !== l.length || r[2] !== m || r[3] !== u || r[4] !== p
        ? ((t = (e, t) => {
            u.logWorkspaceMemberResult({
              action: e,
              accountUserId: t,
              isLocalResult: d,
              resultCount: l.length,
              search: m,
              tab: p,
            })
          }),
          (r[0] = d),
          (r[1] = l.length),
          (r[2] = m),
          (r[3] = u),
          (r[4] = p),
          (r[5] = t))
        : (t = r[5])
      let f = t
      if (
        (r[6] !== m || r[7] !== p
          ? ((o = (0, a.jsx)("span", {
              className: "block px-2 pt-2 text-sm text-codex-description",
              children:
                "people" === p && 0 === m.length
                  ? (0, a.jsx)(O.A, { ...tW.RE })
                  : (0, a.jsx)(O.A, {
                      id: "codex.commandMenu.peopleSearchGroup",
                      defaultMessage: "People",
                      description: "Group label for workspace member search results in global search",
                    }),
            })),
            (r[6] = m),
            (r[7] = p),
            (r[8] = o))
          : (o = r[8]),
        r[9] !== s ||
          r[10] !== d ||
          r[11] !== f ||
          r[12] !== l ||
          r[13] !== g ||
          r[14] !== h ||
          r[15] !== m ||
          r[16] !== u ||
          r[17] !== p)
      ) {
        let e
        ;(r[19] !== s ||
        r[20] !== d ||
        r[21] !== f ||
        r[22] !== g ||
        r[23] !== h ||
        r[24] !== m ||
        r[25] !== u ||
        r[26] !== p
          ? ((e = (e) => {
              let { member: t, profileUrl: o } = e
              return (0, a.jsx)(
                P.uB.Item,
                {
                  className: "gap-2",
                  onSelect: () => {
                    let e = (0, e4.y)(h, "all" === p ? "command_menu_all" : "command_menu_people")
                    ;((0, tG.B5)(h, t, d),
                      f("open", t.account_user_id),
                      u.closeSession("result-open"),
                      g(o, { state: e }),
                      s())
                  },
                  value: (0, ey._X)(`person:${t.account_user_id}`),
                  children: (0, a.jsx)(tL.I, { member: t, onResult: (e) => f(e, t.account_user_id), query: m }),
                },
                t.account_user_id,
              )
            }),
            (r[19] = s),
            (r[20] = d),
            (r[21] = f),
            (r[22] = g),
            (r[23] = h),
            (r[24] = m),
            (r[25] = u),
            (r[26] = p),
            (r[27] = e))
          : (e = r[27]),
          (i = l.map(e)),
          (r[9] = s),
          (r[10] = d),
          (r[11] = f),
          (r[12] = l),
          (r[13] = g),
          (r[14] = h),
          (r[15] = m),
          (r[16] = u),
          (r[17] = p),
          (r[18] = i))
      } else i = r[18]
      return (
        r[28] !== o || r[29] !== i
          ? ((c = (0, a.jsx)(P.uB.Group, {
              className: "flex flex-col gap-1 select-none",
              "data-command-menu-has-results": !0,
              "data-command-menu-search-section": "people",
              heading: o,
              children: i,
            })),
            (r[28] = o),
            (r[29] = i),
            (r[30] = c))
          : (c = r[30]),
        c
      )
    }
    function oi(e) {
      let t,
        o,
        i,
        c,
        r,
        s,
        d,
        l,
        m,
        u,
        p = (0, n.c)(36),
        {
          close: h,
          command: g,
          description: f,
          icon: x,
          onOpenChatSearch: M,
          onRunCommand: w,
          originElement: v,
          originPanel: y,
          searchKeywords: b,
          title: C,
        } = e,
        T = (0, P.wo)(oc)
      if (p[0] !== g.id || p[1] !== f || p[2] !== x || p[3] !== T || p[4] !== b || p[5] !== C) {
        let e = [f, ...(b ?? [])],
          n = (0, z.WE)(T),
          l = 0 === n(C) ? I()(e, n) : void 0,
          m = x ?? tK[g.id] ?? Y.h2I
        if ("asset" in m) {
          let e
          ;(p[13] !== m.asset
            ? ((e = (0, a.jsx)(Q.I, { className: "shrink-0", asset: m.asset, "aria-hidden": !1 })),
              (p[13] = m.asset),
              (p[14] = e))
            : (e = p[14]),
            (i = e))
        } else if (m === Y.QC9) {
          let e
          ;(p[15] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(Y.QC9, {})), (p[15] = e))
            : (e = p[15]),
            (i = e))
        } else if (m === Y.h2I) {
          let e
          ;(p[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(Y.h2I, {})), (p[16] = e))
            : (e = p[16]),
            (i = e))
        } else t = m
        ;((o = H.y),
          (c = C),
          (r = e),
          (s = C),
          (d = null == l || 0 === n(l) ? void 0 : (0, a.jsx)(V._, { text: l, query: T, shouldAdjustStart: !0 })),
          (p[0] = g.id),
          (p[1] = f),
          (p[2] = x),
          (p[3] = T),
          (p[4] = b),
          (p[5] = C),
          (p[6] = t),
          (p[7] = o),
          (p[8] = i),
          (p[9] = c),
          (p[10] = r),
          (p[11] = s),
          (p[12] = d))
      } else ((t = p[6]), (o = p[7]), (i = p[8]), (c = p[9]), (r = p[10]), (s = p[11]), (d = p[12]))
      return (
        p[17] !== h || p[18] !== g.id || p[19] !== M || p[20] !== w || p[21] !== v || p[22] !== y
          ? ((l = () => {
              if (null != w) return void w(g.id)
              if ("canvas.prompt" === g.id || "toggleFileTreePanel" === g.id) {
                if (
                  ((0, R.flushSync)(h),
                  v instanceof HTMLElement &&
                    v.isConnected &&
                    (v.focus({ preventScroll: !0 }),
                    v.ownerDocument.activeElement === v && (0, tC.d1)(g.id, "command_menu")))
                )
                  return
                ;(null != y || "toggleFileTreePanel" === g.id) &&
                  (0, tC.d1)(g.id, "command_menu", { originPanel: y ?? void 0 })
                return
              }
              if ("previousThread" === g.id || "nextThread" === g.id) {
                ;((0, R.flushSync)(h), (0, tC.d1)(g.id, "command_menu"))
                return
              }
              ;("searchChats" === g.id && M(), (0, tC.d1)(g.id, "command_menu"), "searchChats" !== g.id && h())
            }),
            (p[17] = h),
            (p[18] = g.id),
            (p[19] = M),
            (p[20] = w),
            (p[21] = v),
            (p[22] = y),
            (p[23] = l))
          : (l = p[23]),
        p[24] !== g.id ? ((m = (0, a.jsx)(tb.M, { commandId: g.id })), (p[24] = g.id), (p[25] = m)) : (m = p[25]),
        p[26] !== t ||
        p[27] !== o ||
        p[28] !== i ||
        p[29] !== c ||
        p[30] !== r ||
        p[31] !== s ||
        p[32] !== d ||
        p[33] !== l ||
        p[34] !== m
          ? ((u = (0, a.jsx)(o, {
              value: c,
              keywords: r,
              title: s,
              secondaryContent: d,
              onSelect: l,
              LeftIcon: t,
              leftAccessory: i,
              rightAccessory: m,
            })),
            (p[26] = t),
            (p[27] = o),
            (p[28] = i),
            (p[29] = c),
            (p[30] = r),
            (p[31] = s),
            (p[32] = d),
            (p[33] = l),
            (p[34] = m),
            (p[35] = u))
          : (u = p[35]),
        u
      )
    }
    function oc(e) {
      return e.search
    }
    function or() {
      let e,
        t = (0, n.c)(1)
      return (0, P.wo)(os)
        ? null
        : (t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)("div", {
                className: "absolute inset-0 hidden",
                "aria-hidden": !0,
                "data-command-menu-search-loading": !0,
                children: (0, a.jsx)(J.W, {
                  className: "h-full w-full",
                  children: (0, a.jsx)(eo.y, { className: "icon-sm" }),
                }),
              })),
              (t[0] = e))
            : (e = t[0]),
          e)
    }
    function os(e) {
      return e.filtered.count > 0
    }
    let od = (0, F.YK)({
      thread: {
        id: "codex.commandGroup.thread",
        defaultMessage: "Chat",
        description: "Command group label in the command menu",
      },
      navigation: {
        id: "codex.commandGroup.navigation",
        defaultMessage: "Navigation",
        description: "Command group label in the command menu",
      },
      panels: {
        id: "codex.commandGroup.panels",
        defaultMessage: "Panels",
        description: "Command group label in the command menu",
      },
      workspace: {
        id: "codex.commandGroup.workspace",
        defaultMessage: "Project",
        description: "Command group label in the command menu",
      },
      configure: {
        id: "codex.commandGroup.configure",
        defaultMessage: "Configure",
        description: "Command group label in the command menu",
      },
      app: {
        id: "codex.commandGroup.app",
        defaultMessage: "App",
        description: "Command group label in the command menu",
      },
      skills: {
        id: "codex.commandGroup.skills",
        defaultMessage: "Skills",
        description: "Command group label in the command menu",
      },
      dialogDescription: {
        id: "codex.commandMenu.dialogDescription",
        defaultMessage: "Search chats, actions, and project files",
        description: "Accessible description for the global command menu dialog",
      },
      dialogTitle: {
        id: "codex.commandMenu.title",
        defaultMessage: "Command menu",
        description: "Title for the global command menu dialog",
      },
      spaceSearchPlaceholder: {
        id: "codex.commandMenu.spaceSearchPlaceholder",
        defaultMessage: "Search Space",
        description: "Placeholder for finding files and Pages in Space",
      },
      pageSearchPlaceholder: {
        id: "codex.commandMenu.pageSearchPlaceholder",
        defaultMessage: "Search pages",
        description: "Placeholder for the Pages tab in the command menu",
      },
      chatSearchPlaceholder: {
        id: "codex.commandMenu.chatSearchPlaceholder",
        defaultMessage: "Search chats",
        description: "Placeholder text for the command menu task search input",
      },
      peopleSearchPlaceholder: {
        id: "codex.commandMenu.peopleSearchPlaceholder",
        defaultMessage: "Search people",
        description: "Placeholder for searching workspace members in the People tab",
      },
      fileSearchPlaceholder: {
        id: "codex.commandMenu.fileSearchPlaceholder",
        defaultMessage: "Search files",
        description: "Placeholder for searching file names, paths, or contents in the selected location",
      },
      actionSearchPlaceholder: {
        id: "codex.commandMenu.actionSearchPlaceholder",
        defaultMessage: "Search actions",
        description: "Placeholder for searching commands and settings in the search window",
      },
      recentlyViewedThreadsGroupLabel: {
        id: "codex.commandMenu.recentlyViewedThreadsGroup",
        defaultMessage: "Recently viewed chats",
        description: "Group label for recently viewed task results in the command menu",
      },
      unifiedSearchPlaceholder: {
        id: "codex.commandMenu.unifiedSearchPlaceholder",
        defaultMessage: "Search ChatGPT",
        description: "Placeholder text for the unified command menu search input",
      },
      tuckAwayPet: {
        id: "codex.command.hideMiniOverlay",
        defaultMessage: "Hide Mini",
        description: "Command menu item to hide Mini, the floating compact Codex panel, when it is visible",
      },
      tuckAwayPetDescription: {
        id: "codex.commandDescription.tuckAwayMiniOverlay",
        defaultMessage: "Tuck away Mini",
        description: "Description for the command menu item to close Mini, the floating compact panel, when it is open",
      },
      petSearchAlias: {
        id: "codex.commandMenu.miniPetSearchAlias",
        defaultMessage: "pet pets",
        description:
          "Search keywords for Mini, the floating compact panel previously called Pet or Pets; include the localized singular and plural names",
      },
    })
  },
  WVWQ(e, t, o) {
    o.d(t, { j: () => y, I: () => v })
    var a = o("X2Bp"),
      n = o("Qgfj"),
      i = o("CTWI")
    function c(e) {
      return { title: e.formatMessage(r.title), description: e.formatMessage(r.description) }
    }
    let r = (0, n.YK)({
      title: {
        id: "codex.command.composer.captureAppshot",
        defaultMessage: "Capture appshot",
        description: "Codex Micro action for capturing an appshot",
      },
      description: {
        id: "codex.commandDescription.composer.captureAppshot",
        defaultMessage: "Capture an appshot for the active composer",
        description: "Description for the Codex Micro Appshot action",
      },
    })
    function s(e) {
      return {
        title: e.formatMessage({
          id: "codex.command.openOrbit.dot",
          defaultMessage: "Open your dot",
          description:
            "Command palette and keyboard shortcut settings title for opening the user's dot assistant conversation. Keep the singular term dot untranslated.",
        }),
        description: e.formatMessage({
          id: "codex.commandDescription.openOrbit.dot",
          defaultMessage: "Open your dot conversation",
          description:
            "Description for the command that navigates to the user's existing dot assistant conversation. Keep the singular term dot untranslated.",
        }),
      }
    }
    function d(e) {
      return {
        title: e.formatMessage({
          id: "codex.command.focusPageBlockControls",
          defaultMessage: "Focus content controls",
          description:
            "Keyboard shortcut settings row for moving focus from the Page document editor to the controls for the current content block",
        }),
        description: e.formatMessage({
          id: "codex.commandDescription.focusPageBlockControls",
          defaultMessage: "Move keyboard focus from the Page editor to the current content's controls",
          description:
            "Description for the shortcut that focuses controls for moving a content block or changing its layout, available while editing a Page document",
        }),
      }
    }
    let l = (0, n.YK)({
        endCallDescription: {
          id: "codex.commandDescription.realtimeVoice.endCall",
          defaultMessage: "End the active Voice Chat",
          description: "Description for the End Voice Chat shortcut",
        },
        endCallTitle: {
          id: "codex.command.realtimeVoice.endCall",
          defaultMessage: "End Voice Chat",
          description: "Shortcut settings row for ending Voice Chat",
        },
        realtimeVoiceDescription: {
          id: "codex.commandDescription.realtimeVoice",
          defaultMessage: "Start a Voice Chat from anywhere on desktop",
          description: "Description for the realtime voice hotkey",
        },
        realtimeVoiceTitle: {
          id: "codex.command.realtimeVoice",
          defaultMessage: "Voice Chat hotkey",
          description: "Shortcut settings row for the realtime voice hotkey",
        },
        toggleMicrophoneMuteDescription: {
          id: "codex.commandDescription.realtimeVoice.toggleMicrophoneMute",
          defaultMessage: "Mute or unmute your microphone during a Voice Chat",
          description: "Description for the Toggle voice microphone shortcut",
        },
        toggleMicrophoneMuteTitle: {
          id: "codex.command.realtimeVoice.toggleMicrophoneMute",
          defaultMessage: "Toggle Voice Chat microphone",
          description: "Shortcut settings row for toggling the voice microphone",
        },
        toggleOutputMuteDescription: {
          id: "codex.commandDescription.realtimeVoice.toggleOutputMute",
          defaultMessage: "Mute or unmute Voice Chat audio",
          description: "Description for the Toggle voice audio shortcut",
        },
        toggleOutputMuteTitle: {
          id: "codex.command.realtimeVoice.toggleOutputMute",
          defaultMessage: "Toggle Voice Chat audio",
          description: "Shortcut settings row for toggling voice audio",
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
        title: {
          id: "codex.command.importExternalAgent",
          defaultMessage: "Import from other AI apps",
          description: "Command menu item to import work from another AI app",
        },
        description: {
          id: "codex.commandDescription.importExternalAgent",
          defaultMessage: "Import from other AI apps",
          description: "Description for the external agent import command",
        },
      }),
      h = (0, n.YK)({
        title: {
          id: "codex.command.personalitySettings",
          defaultMessage: "Personality",
          description: "Command menu item to open personality settings",
        },
        description: {
          id: "codex.commandDescription.personalitySettings",
          defaultMessage: "Adjust tone and response style",
          description: "Description for the Personality settings command",
        },
      }),
      g = (0, n.zR)({
        id: "codex.command.showMiniOverlay",
        defaultMessage: "Show Mini",
        description: "Command menu item to show Mini, the floating compact Codex panel, when it is hidden",
      }),
      f = (0, n.YK)({
        "codex.command.importPrismToLocal": {
          id: "codex.command.importPrismToLocal",
          defaultMessage: "Import from Prism…",
          description: "Command to copy an owned Prism project into a new local folder",
        },
        "codex.commandMenuTitle.toggleFileTreePanel": {
          id: "codex.commandMenuTitle.toggleFileTreePanel",
          defaultMessage: "Toggle navigation panel",
          description:
            "Native menu, command palette, and shortcut settings title for showing or hiding the active Page's navigation panel or the code file tree",
        },
        "codex.command.meetings.takeNotes": {
          id: "codex.command.meetings.takeNotes",
          defaultMessage: "Meetings: Take notes",
          description: "Command palette and keyboard shortcut settings title for starting a local Meetings recording",
        },
        "codex.command.screenshotToCurrentChat": {
          id: "codex.command.screenshotToCurrentChat",
          defaultMessage: "Screenshot selection to current chat",
          description: "Title of the macOS global shortcut to capture a rectangular screen region for this destination",
        },
        "codex.command.screenshotToNewChat": {
          id: "codex.command.screenshotToNewChat",
          defaultMessage: "Screenshot selection to new chat",
          description: "Title of the macOS global shortcut to capture a rectangular screen region for this destination",
        },
        "codex.command.artifacts.selectTool": {
          id: "codex.command.artifacts.selectTool",
          defaultMessage: "Artifacts: Select",
          description:
            "Command palette and shortcut settings title for the drawing tool shared by Canvas, Slides, and Sheets: select tool",
        },
        "codex.command.artifacts.handTool": {
          id: "codex.command.artifacts.handTool",
          defaultMessage: "Artifacts: Pan",
          description:
            "Command palette and shortcut settings title for the drawing tool shared by Canvas, Slides, and Sheets: pan tool",
        },
        "codex.command.canvas.prompt": {
          id: "codex.command.canvas.prompt",
          defaultMessage: "Canvas: Ask ChatGPT",
          description: "Command palette and shortcut settings title for opening the Canvas prompt at the pointer",
        },
        "codex.command.artifacts.rectangleTool": {
          id: "codex.command.artifacts.rectangleTool",
          defaultMessage: "Artifacts: Rectangle",
          description:
            "Command palette and shortcut settings title for the drawing tool shared by Canvas, Slides, and Sheets: rectangle tool",
        },
        "codex.command.artifacts.circleTool": {
          id: "codex.command.artifacts.circleTool",
          defaultMessage: "Artifacts: Circle",
          description:
            "Command palette and shortcut settings title for the drawing tool shared by Canvas, Slides, and Sheets: circle tool",
        },
        "codex.command.artifacts.arrowTool": {
          id: "codex.command.artifacts.arrowTool",
          defaultMessage: "Artifacts: Arrow",
          description:
            "Command palette and shortcut settings title for the drawing tool shared by Canvas, Slides, and Sheets: arrow tool",
        },
        "codex.command.artifacts.lineTool": {
          id: "codex.command.artifacts.lineTool",
          defaultMessage: "Artifacts: Line",
          description:
            "Command palette and shortcut settings title for the drawing tool shared by Canvas, Slides, and Sheets: line tool",
        },
        "codex.command.artifacts.textTool": {
          id: "codex.command.artifacts.textTool",
          defaultMessage: "Artifacts: Text",
          description:
            "Command palette and shortcut settings title for the drawing tool shared by Canvas, Slides, and Sheets: text tool",
        },
        "codex.command.artifacts.noteTool": {
          id: "codex.command.artifacts.noteTool",
          defaultMessage: "Artifacts: Note",
          description:
            "Command palette and shortcut settings title for the Canvas sticky-note drawing tool in the shared Artifacts command family",
        },
        "codex.command.page.addComment": {
          id: "codex.command.page.addComment",
          defaultMessage: "Add Page comment",
          description: "Keyboard shortcut title for starting a comment in the focused Page editor",
        },
        "codex.command.page.formatNumberedList": {
          id: "codex.command.page.formatNumberedList",
          defaultMessage: "Numbered list",
          description: "Page editor command that applies numbered list formatting to the selected text",
        },
        "codex.command.page.formatBulletedList": {
          id: "codex.command.page.formatBulletedList",
          defaultMessage: "Bulleted list",
          description: "Page editor command that applies bulleted list formatting to the selected text",
        },
        "codex.command.page.formatChecklist": {
          id: "codex.command.page.formatChecklist",
          defaultMessage: "Checklist",
          description: "Page editor command that toggles checklist formatting for the selected text",
        },
        "codex.command.newThread": {
          id: "codex.command.newThread",
          defaultMessage: "New chat",
          description: "Command menu item to start a new chat",
        },
        "codex.command.newProjectlessTask": {
          id: "codex.command.newProjectlessTask",
          defaultMessage: "New standalone chat",
          description: "Command menu item to start a new standalone chat",
        },
        "codex.command.temporaryChat": {
          id: "codex.command.temporaryChat",
          defaultMessage: "New Temporary Chat",
          description: "Command menu item to start a temporary chat",
        },
        "codex.command.openThreadInNewWindow": {
          id: "codex.command.openThreadInNewWindow",
          defaultMessage: "Open in new window",
          description: "Command menu item to open the current chat in a new window",
        },
        "codex.command.archiveThread": {
          id: "codex.command.archiveThread",
          defaultMessage: "Archive chat",
          description: "Command menu item to archive the current chat",
        },
        "codex.command.deleteOrbit": {
          id: "codex.command.deleteOrbit",
          defaultMessage: "Delete {dot}",
          description:
            "Command to open confirmation to permanently delete the current assistant. The dot placeholder is the untranslated term for the user's agent.",
        },
        "codex.command.deleteChat": {
          id: "codex.command.deleteChat",
          defaultMessage: "Delete chat",
          description:
            "Keyboard shortcut settings row for opening the confirmation to permanently delete the current saved ChatGPT chat",
        },
        "codex.command.markThreadUnread": {
          id: "codex.command.markThreadUnread",
          defaultMessage: "Mark as unread",
          description: "Command menu item to mark the current chat as unread",
        },
        "codex.command.toggleThreadPin": {
          id: "codex.command.toggleThreadPin",
          defaultMessage: "Toggle pin",
          description: "Command menu item to toggle whether the current chat is pinned",
        },
        "codex.command.copyPageLink": {
          id: "codex.command.copyPageLink",
          defaultMessage: "Copy document link",
          description: "Command that copies a link to the current document, including a Page, slide, or sheet",
        },
        "codex.command.copyConversationMarkdown": {
          id: "codex.command.copyConversationMarkdown",
          defaultMessage: "Copy as Markdown",
          description: "Shortcut settings row for copying the current chat as Markdown",
        },
        "codex.command.copyLastCodeBlock": {
          id: "codex.command.copyLastCodeBlock",
          defaultMessage: "Copy last code block",
          description:
            "Command menu item and keyboard shortcut settings label for copying the most recent assistant code block in the current Chat conversation",
        },
        "codex.command.openSideChat": {
          id: "codex.command.openSideChat",
          defaultMessage: "Open side chat",
          description: "Shortcut settings row for opening the current chat as a side chat",
        },
        "codex.command.focusMainChat": {
          id: "codex.command.focusMainChat",
          defaultMessage: "Focus main chat",
          description: "Command menu item to focus the main chat composer",
        },
        "codex.command.focusSideChat": {
          id: "codex.command.focusSideChat",
          defaultMessage: "Focus side chat",
          description: "Command menu item to focus an open side chat composer",
        },
        "codex.command.openControlWindow": {
          id: "codex.command.openControlWindow",
          defaultMessage: "Open control window",
          description: "Command menu item to open the control window",
        },
        "codex.command.toggleDebugModal": {
          id: "codex.command.toggleDebugModal",
          defaultMessage: "Toggle debug panel",
          description: "Shortcut settings row for showing or hiding the internal debug panel within the current window",
        },
        "codex.command.undoAppAction": {
          id: "codex.command.undoAppAction",
          defaultMessage: "Undo last action",
          description: "Command menu item to undo the most recent app action",
        },
        "codex.command.redoAppAction": {
          id: "codex.command.redoAppAction",
          defaultMessage: "Redo last action",
          description: "Command menu item to redo the most recently undone app action",
        },
        "codex.command.reopenClosedTab": {
          id: "codex.command.reopenClosedTab",
          defaultMessage: "Reopen closed tab",
          description: "Command menu item to reopen the most recently closed tab",
        },
        "codex.command.composer.openModelPicker": {
          id: "codex.command.composer.openModelPicker",
          defaultMessage: "Select effort",
          description:
            "Shortcut settings row for opening the composer controls that set how much reasoning effort the model uses",
        },
        "codex.command.composer.openRecentModels": {
          id: "codex.command.composer.openRecentModels",
          defaultMessage: "Open recent models",
          description:
            "Shortcut settings row for opening recently used model, effort, and speed combinations in the composer",
        },
        "codex.command.composer.openProjectPicker": {
          id: "codex.command.composer.openProjectPicker",
          defaultMessage: "Open project picker",
          description: "Shortcut settings row for opening the project picker",
        },
        "codex.command.composer.toggleDictation": {
          id: "codex.command.composer.toggleDictation",
          defaultMessage: "Toggle dictation",
          description: "Keyboard shortcut label for starting or stopping microphone dictation in the chat composer",
        },
        "codex.command.composer.startVoiceMode": {
          id: "codex.command.composer.startVoiceMode",
          defaultMessage: "Toggle voice chat",
          description: "Shortcut settings row for toggling voice mode",
        },
        "codex.command.composer.submit": {
          id: "codex.command.composer.submit",
          defaultMessage: "Send message",
          description: "Shortcut settings row for sending the current composer message",
        },
        "codex.command.browser.toggleAnnotationMode": {
          id: "codex.command.browser.toggleAnnotationMode",
          defaultMessage: "Toggle annotation mode",
          description: "Shortcut settings row for entering or leaving annotation mode in the in-app browser",
        },
        "codex.command.presentation.duplicateSelection": {
          id: "codex.command.presentation.duplicateSelection",
          defaultMessage: "Duplicate presentation selection",
          description: "Shortcut settings row for duplicating selected slide objects",
        },
        "codex.command.artifact.sendAnnotations": {
          id: "codex.command.artifact.sendAnnotations",
          defaultMessage: "Send annotations",
          description: "Shortcut settings row for sending pending artifact annotations",
        },
        "codex.command.composer.submitInBackground": {
          id: "codex.command.composer.submitInBackground",
          defaultMessage: "Send message in background",
          description: "Shortcut settings row for sending a new composer message without opening its chat",
        },
        "codex.command.composer.steer": {
          id: "codex.command.composer.steer",
          defaultMessage: "Steer prompt",
          description: "Shortcut settings row for submitting the current composer prompt as a steering message",
        },
        "codex.command.composer.queue": {
          id: "codex.command.composer.queue",
          defaultMessage: "Queue prompt",
          description: "Shortcut settings row for submitting the current composer prompt as a queued message",
        },
        "codex.command.composer.clear": {
          id: "codex.command.composer.clear",
          defaultMessage: "Clear prompt",
          description: "Shortcut settings row for clearing the composer prompt",
        },
        "codex.command.composer.addPhotos": {
          id: "codex.command.composer.addPhotos",
          defaultMessage: "Add photos",
          description: "Shortcut settings row for adding photos to the composer",
        },
        "codex.command.composer.addFiles": {
          id: "codex.command.composer.addFiles",
          defaultMessage: "Attach files and folders",
          description: "Shortcut settings row for attaching files and folders to the composer",
        },
        "codex.command.composer.toggleFastMode": {
          id: "codex.command.composer.toggleFastMode",
          defaultMessage: "Cycle speed",
          description: "Shortcut settings row for cycling through available model speeds",
        },
        "codex.command.composer.increaseReasoningEffort": {
          id: "codex.command.composer.increaseReasoningEffort",
          defaultMessage: "Increase reasoning effort",
          description: "Shortcut settings row for increasing reasoning effort",
        },
        "codex.command.composer.decreaseReasoningEffort": {
          id: "codex.command.composer.decreaseReasoningEffort",
          defaultMessage: "Decrease reasoning effort",
          description: "Shortcut settings row for decreasing reasoning effort",
        },
        "codex.command.composer.cycleReasoningEffort": {
          id: "codex.command.composer.cycleReasoningEffort",
          defaultMessage: "Cycle reasoning effort",
          description: "Shortcut settings row for cycling reasoning effort",
        },
        "codex.command.composer.togglePlanMode": {
          id: "codex.command.composer.togglePlanMode",
          defaultMessage: "Toggle plan mode",
          description: "Shortcut settings row for toggling plan mode",
        },
        "codex.command.composer.toggleWorktreeMode": {
          id: "codex.command.composer.toggleWorktreeMode",
          defaultMessage: "Toggle Local/Worktree",
          description: "Shortcut settings row for toggling Local and Worktree mode",
        },
        "codex.command.composer.cycleHost": {
          id: "codex.command.composer.cycleHost",
          defaultMessage: "Cycle host",
          description: "Shortcut settings row for cycling between local and remote machines",
        },
        "codex.command.composer.toggleWorkRunLocation": {
          id: "codex.command.composer.toggleWorkRunLocation",
          defaultMessage: "Toggle Cloud/Local",
          description: "Shortcut settings row for toggling ChatGPT Work between Cloud and Local",
        },
        "codex.command.approval.approve": {
          id: "codex.command.approval.approve",
          defaultMessage: "Approve request",
          description: "Shortcut settings row for approving the active request",
        },
        "codex.command.approval.decline": {
          id: "codex.command.approval.decline",
          defaultMessage: "Decline request",
          description: "Shortcut settings row for declining the active request",
        },
        "codex.command.git.commit": {
          id: "codex.command.git.commit",
          defaultMessage: "Commit or push",
          description: "Command menu item for committing or pushing local changes",
        },
        "codex.command.git.createPullRequest": {
          id: "codex.command.git.createPullRequest",
          defaultMessage: "Create PR",
          description: "Command menu item for creating a pull request",
        },
        "codex.command.git.createDraftPullRequest": {
          id: "codex.command.git.createDraftPullRequest",
          defaultMessage: "Create draft PR",
          description: "Command menu item for creating a draft pull request",
        },
        "codex.command.git.createBranch": {
          id: "codex.command.git.createBranch",
          defaultMessage: "Create branch",
          description: "Command menu item for creating a branch",
        },
        "codex.command.git.mergePullRequest": {
          id: "codex.command.git.mergePullRequest",
          defaultMessage: "Merge PR",
          description: "Command menu item for merging a pull request",
        },
        "codex.command.git.openPullRequest": {
          id: "codex.command.git.openPullRequest",
          defaultMessage: "Open PR on GitHub",
          description: "Command menu item for opening the linked pull request",
        },
        "codex.command.git.toggleBlame": {
          id: "codex.command.git.toggleBlame",
          defaultMessage: "Toggle Git blame",
          description: "Command menu item for toggling active-line Git blame",
        },
        "codex.command.forkThread": {
          id: "codex.command.forkThread",
          defaultMessage: "Fork chat",
          description: "Shortcut settings row for forking the current chat",
        },
        "codex.command.showMiniOverlay": {
          id: "codex.command.showMiniOverlay",
          defaultMessage: "Show Mini",
          description: "Command menu item to show Mini, the floating compact Codex panel, when it is hidden",
        },
        "codex.command.searchChats": {
          id: "codex.command.searchChats",
          defaultMessage: "Switch chat…",
          description: "Command menu item that opens chat search",
        },
        "codex.command.searchChatsPrevious": {
          id: "codex.command.searchChatsPrevious",
          defaultMessage: "Switch chat (previous)…",
          description: "Keyboard shortcut that opens the chat picker and cycles its selection backward",
        },
        "codex.command.togglePriorityFilter": {
          id: "codex.command.togglePriorityFilter",
          defaultMessage: "Toggle activity view",
          description: "Command menu item that opens or closes the sidebar activity view",
        },
        "codex.command.nextThreadNeedingAttention": {
          id: "codex.command.nextThreadNeedingAttention",
          defaultMessage: "Next chat needing attention",
          description:
            "Command menu item that opens the highest-priority chat awaiting user input or containing unread activity",
        },
        "codex.command.previousThread": {
          id: "codex.command.previousThread",
          defaultMessage: "Previous sidebar item",
          description: "Command menu item to go to the previous sidebar item",
        },
        "codex.command.previousTab": {
          id: "codex.command.previousTab",
          defaultMessage: "Previous tab",
          description: "Shortcut settings row for switching to the previous tab",
        },
        "codex.command.previousRecentThread": {
          id: "codex.command.previousRecentThread",
          defaultMessage: "Previous recently viewed chat",
          description: "Shortcut settings row for cycling to the previous recently viewed chat",
        },
        "codex.command.nextThread": {
          id: "codex.command.nextThread",
          defaultMessage: "Next sidebar item",
          description: "Command menu item to go to the next sidebar item",
        },
        "codex.command.nextTab": {
          id: "codex.command.nextTab",
          defaultMessage: "Next tab",
          description: "Shortcut settings row for switching to the next tab",
        },
        "codex.command.nextRecentThread": {
          id: "codex.command.nextRecentThread",
          defaultMessage: "Next recently viewed chat",
          description: "Shortcut settings row for cycling to the next recently viewed chat",
        },
        "codex.command.recentThread1": {
          id: "codex.command.recentThread1",
          defaultMessage: "Go to recent chat 1",
          description: "Command menu item to open the most recently updated chat",
        },
        "codex.command.recentThread2": {
          id: "codex.command.recentThread2",
          defaultMessage: "Go to recent chat 2",
          description: "Command menu item to open the second most recently updated chat",
        },
        "codex.command.recentThread3": {
          id: "codex.command.recentThread3",
          defaultMessage: "Go to recent chat 3",
          description: "Command menu item to open the third most recently updated chat",
        },
        "codex.command.recentThread4": {
          id: "codex.command.recentThread4",
          defaultMessage: "Go to recent chat 4",
          description: "Command menu item to open the fourth most recently updated chat",
        },
        "codex.command.recentThread5": {
          id: "codex.command.recentThread5",
          defaultMessage: "Go to recent chat 5",
          description: "Command menu item to open the fifth most recently updated chat",
        },
        "codex.command.recentThread6": {
          id: "codex.command.recentThread6",
          defaultMessage: "Go to recent chat 6",
          description: "Command menu item to open the sixth most recently updated chat",
        },
        "codex.command.switchToChat": {
          id: "codex.command.switchToChat",
          defaultMessage: "Switch to Chat",
          description: "Command title for switching the Codex desktop app to Chat",
        },
        "codex.command.switchToWork": {
          id: "codex.command.switchToWork",
          defaultMessage: "Switch to Work",
          description: "Command title for switching the Codex desktop app to Work",
        },
        "codex.command.switchToCodex": {
          id: "codex.command.switchToCodex",
          defaultMessage: "Switch to Codex",
          description: "Command title for switching the Codex desktop app to Codex",
        },
        "codex.command.settings": {
          id: "codex.command.settings",
          defaultMessage: "Settings",
          description: "Command menu item to open settings",
        },
        "codex.command.codexMicroSettings": {
          id: "codex.command.codexMicroSettings",
          defaultMessage: "Codex Micro setup",
          description: "Codex Micro keycap action that opens device setup",
        },
        "codex.command.mcpSettings": {
          id: "codex.command.mcpSettings",
          defaultMessage: "MCP",
          description: "Command menu item to open MCP settings",
        },
        "codex.command.keyboardShortcuts": {
          id: "codex.command.keyboardShortcuts",
          defaultMessage: "Keyboard shortcuts",
          description: "Command menu item to open keyboard shortcut settings",
        },
        "codex.command.showKeyboardShortcuts": {
          id: "codex.command.showKeyboardShortcuts",
          defaultMessage: "Show keyboard shortcuts",
          description: "Shortcut settings row for showing active keyboard shortcuts",
        },
        "codex.command.clearAllUnreads": {
          id: "codex.command.clearAllUnreads",
          defaultMessage: "Clear all unreads",
          description: "Command for marking all chats and scheduled tasks as read",
        },
        "codex.command.manageTasks": {
          id: "codex.command.manageTasks",
          defaultMessage: "Manage scheduled tasks",
          description: "Command menu item to manage scheduled tasks",
        },
        "codex.command.forceReloadSkills": {
          id: "codex.command.forceReloadSkills",
          defaultMessage: "Force reload skills",
          description: "Command menu item to force reload skills",
        },
        "codex.command.openSkills": {
          id: "codex.command.openSkills",
          defaultMessage: "Go to skills",
          description: "Command menu item to open skills",
        },
        "codex.command.newProject": {
          id: "codex.command.newProject",
          defaultMessage: "New project",
          description: "Command menu item to create a project",
        },
        "codex.command.openFolder": {
          id: "codex.command.openFolder",
          defaultMessage: "Open folder",
          description: "Command menu item to open a folder/workspace",
        },
        "codex.command.toggleSidebar": {
          id: "codex.command.toggleSidebar",
          defaultMessage: "Toggle sidebar",
          description: "Command menu item to toggle the sidebar",
        },
        "codex.command.toggleBottomPanel": {
          id: "codex.command.toggleBottomPanel",
          defaultMessage: "Toggle bottom panel",
          description: "Command menu item to toggle the bottom panel",
        },
        "codex.command.togglePinnedSummary": {
          id: "codex.command.togglePinnedSummary",
          defaultMessage: "Toggle pinned summary",
          description: "Command menu item to toggle the pinned summary",
        },
        "codex.command.toggleTerminal": {
          id: "codex.command.toggleTerminal",
          defaultMessage: "Open terminal",
          description: "Command menu item to open the terminal panel",
        },
        "codex.command.newTab": {
          id: "codex.command.newTab",
          defaultMessage: "New tab",
          description: "Command menu item to open a new tab",
        },
        "codex.command.closeOtherTabs": {
          id: "codex.command.closeOtherTabs",
          defaultMessage: "Close other tabs",
          description: "Shortcut settings row for closing all other tabs",
        },
        "codex.command.showWorkspaceTabView": {
          id: "codex.command.showWorkspaceTabView",
          defaultMessage: "Full view",
          description: "Command menu item that toggles the workspace between split and full view",
        },
        "codex.command.exitWorkspaceFullView": {
          id: "codex.command.exitWorkspaceFullView",
          defaultMessage: "Exit full view",
          description: "Command that restores a fullscreen workspace panel to split view",
        },
        "codex.command.stepWorkspaceLayout": {
          id: "codex.command.stepWorkspaceLayout",
          defaultMessage: "Cycle workspace layout",
          description: "Command menu item that steps from full to split view, hides tabs, or restores tabs beside Chat",
        },
        "codex.command.openReviewTab": {
          id: "codex.command.openReviewTab",
          defaultMessage: "Open Changes tab",
          description: "Command menu item to open the Changes tab showing local diffs",
        },
        "codex.command.toggleReviewTab": {
          id: "codex.command.toggleReviewTab",
          defaultMessage: "Toggle Changes",
          description: "Shortcut settings row for toggling the Changes panel showing local diffs",
        },
        "codex.command.toggleReviewPanel": {
          id: "codex.command.toggleReviewPanel",
          defaultMessage: "Toggle Changes panel",
          description: "Command menu item to toggle the Changes panel showing local diffs",
        },
        "codex.command.file.goToDefinition": {
          id: "codex.command.file.goToDefinition",
          defaultMessage: "Go to definition",
          description: "Shortcut settings row for going to a symbol's definition",
        },
        "codex.command.file.findReferences": {
          id: "codex.command.file.findReferences",
          defaultMessage: "Find references",
          description: "Shortcut settings row for finding references to a code symbol",
        },
        "codex.command.file.navigateBack": {
          id: "codex.command.file.navigateBack",
          defaultMessage: "Go back in file navigation",
          description: "Shortcut settings row for file navigation history",
        },
        "codex.command.file.navigateForward": {
          id: "codex.command.file.navigateForward",
          defaultMessage: "Go forward in file navigation",
          description: "Shortcut settings row for file navigation history",
        },
        "codex.command.findInThread": {
          id: "codex.command.findInThread",
          defaultMessage: "Find",
          description: "Command menu item to find in the current chat",
        },
        "codex.command.goToLine": {
          id: "codex.command.goToLine",
          defaultMessage: "Go to line",
          description: "Command menu item to go to a line in the current file",
        },
        "codex.command.focusBrowserAddressBar": {
          id: "codex.command.focusBrowserAddressBar",
          defaultMessage: "Focus browser address bar",
          description: "Command menu item to focus the browser address bar",
        },
        "codex.command.navigateBrowserBack": {
          id: "codex.command.navigateBrowserBack",
          defaultMessage: "Browser back",
          description: "Command menu item to navigate the browser back",
        },
        "codex.command.navigateBrowserForward": {
          id: "codex.command.navigateBrowserForward",
          defaultMessage: "Browser forward",
          description: "Command menu item to navigate the browser forward",
        },
        "codex.command.navigateBack": {
          id: "codex.command.navigateBack",
          defaultMessage: "Back",
          description: "Command menu item to navigate back",
        },
        "codex.command.navigateForward": {
          id: "codex.command.navigateForward",
          defaultMessage: "Forward",
          description: "Command menu item to navigate forward",
        },
        "codex.command.logOut": {
          id: "codex.command.logOut",
          defaultMessage: "Log out",
          description: "Command menu item to log out of ChatGPT",
        },
        "codex.command.feedback": {
          id: "codex.command.feedback",
          defaultMessage: "Feedback",
          description: "Command menu item to open the feedback dialog",
        },
        "codex.command.environmentAction1": {
          id: "codex.command.environmentAction1",
          defaultMessage: "Environment action 1",
          description: "Shortcut settings row for the first environment action",
        },
        "codex.command.environmentAction2": {
          id: "codex.command.environmentAction2",
          defaultMessage: "Environment action 2",
          description: "Shortcut settings row for the second environment action",
        },
        "codex.command.environmentAction3": {
          id: "codex.command.environmentAction3",
          defaultMessage: "Environment action 3",
          description: "Shortcut settings row for the third environment action",
        },
        "codex.command.environmentAction4": {
          id: "codex.command.environmentAction4",
          defaultMessage: "Environment action 4",
          description: "Shortcut settings row for the fourth environment action",
        },
        "codex.command.environmentAction5": {
          id: "codex.command.environmentAction5",
          defaultMessage: "Environment action 5",
          description: "Shortcut settings row for the fifth environment action",
        },
        "codex.command.environmentAction6": {
          id: "codex.command.environmentAction6",
          defaultMessage: "Environment action 6",
          description: "Shortcut settings row for the sixth environment action",
        },
        "codex.command.environmentAction7": {
          id: "codex.command.environmentAction7",
          defaultMessage: "Environment action 7",
          description: "Shortcut settings row for the seventh environment action",
        },
        "codex.command.environmentAction8": {
          id: "codex.command.environmentAction8",
          defaultMessage: "Environment action 8",
          description: "Shortcut settings row for the eighth environment action",
        },
        "codex.command.environmentAction9": {
          id: "codex.command.environmentAction9",
          defaultMessage: "Environment action 9",
          description: "Shortcut settings row for the ninth environment action",
        },
        "codex.command.hotkeyWindow": {
          id: "codex.command.hotkeyWindow",
          defaultMessage: "Popout Window hotkey",
          description: "Shortcut settings row for the Popout Window hotkey",
        },
        "codex.command.globalDictationHold": {
          id: "codex.command.globalDictationHold",
          defaultMessage: "Dictation shortcut",
          description: "Shortcut settings row for the dictation shortcut",
        },
        "codex.command.globalDictationSingleTap": {
          id: "codex.command.globalDictationSingleTap",
          defaultMessage: "Single-tap dictation",
          description: "Shortcut settings row for the single-tap dictation shortcut",
        },
        "codex.command.spotlightSearch": {
          id: "codex.command.spotlightSearch",
          defaultMessage: "Spotlight search",
          description: "Shortcut settings row for Codex Spotlight, the floating desktop search and command panel",
        },
        "codex.command.notchVoice": {
          id: "codex.command.notchVoice",
          defaultMessage: "Voice in Mini",
          description: "Shortcut settings row for starting or showing voice in the notch Mini",
        },
        "codex.command.toggleNotch": {
          id: "codex.command.toggleNotch",
          defaultMessage: "Toggle Notch",
          description:
            "Shortcut settings row for expanding or collapsing the Codex notch panel at the top of the screen",
        },
        "codex.command.focusTab1": {
          id: "codex.command.focusTab1",
          defaultMessage: "Focus tab 1",
          description: "Keyboard shortcut to focus tab 1, counting from the left of the chat tab strip",
        },
        "codex.command.focusTab2": {
          id: "codex.command.focusTab2",
          defaultMessage: "Focus tab 2",
          description: "Keyboard shortcut to focus tab 2, counting from the left of the chat tab strip",
        },
        "codex.command.focusTab3": {
          id: "codex.command.focusTab3",
          defaultMessage: "Focus tab 3",
          description: "Keyboard shortcut to focus tab 3, counting from the left of the chat tab strip",
        },
        "codex.command.focusTab4": {
          id: "codex.command.focusTab4",
          defaultMessage: "Focus tab 4",
          description: "Keyboard shortcut to focus tab 4, counting from the left of the chat tab strip",
        },
        "codex.command.focusTab5": {
          id: "codex.command.focusTab5",
          defaultMessage: "Focus tab 5",
          description: "Keyboard shortcut to focus tab 5, counting from the left of the chat tab strip",
        },
        "codex.command.focusTab6": {
          id: "codex.command.focusTab6",
          defaultMessage: "Focus tab 6",
          description: "Keyboard shortcut to focus tab 6, counting from the left of the chat tab strip",
        },
        "codex.command.focusTab7": {
          id: "codex.command.focusTab7",
          defaultMessage: "Focus tab 7",
          description: "Keyboard shortcut to focus tab 7, counting from the left of the chat tab strip",
        },
        "codex.command.focusTab8": {
          id: "codex.command.focusTab8",
          defaultMessage: "Focus tab 8",
          description: "Keyboard shortcut to focus tab 8, counting from the left of the chat tab strip",
        },
        "codex.command.focusTab9": {
          id: "codex.command.focusTab9",
          defaultMessage: "Focus tab 9",
          description: "Keyboard shortcut to focus tab 9, counting from the left of the chat tab strip",
        },
        "codex.command.thread1": {
          id: "codex.command.thread1",
          defaultMessage: "Go to chat 1",
          description: "Command menu item to go to the first visible chat",
        },
        "codex.command.thread2": {
          id: "codex.command.thread2",
          defaultMessage: "Go to chat 2",
          description: "Command menu item to go to the second visible chat",
        },
        "codex.command.thread3": {
          id: "codex.command.thread3",
          defaultMessage: "Go to chat 3",
          description: "Command menu item to go to the third visible chat",
        },
        "codex.command.thread4": {
          id: "codex.command.thread4",
          defaultMessage: "Go to chat 4",
          description: "Command menu item to go to the fourth visible chat",
        },
        "codex.command.thread5": {
          id: "codex.command.thread5",
          defaultMessage: "Go to chat 5",
          description: "Command menu item to go to the fifth visible chat",
        },
        "codex.command.thread6": {
          id: "codex.command.thread6",
          defaultMessage: "Go to chat 6",
          description: "Command menu item to go to the sixth visible chat",
        },
        "codex.command.thread7": {
          id: "codex.command.thread7",
          defaultMessage: "Go to chat 7",
          description: "Command menu item to go to the seventh visible chat",
        },
        "codex.command.thread8": {
          id: "codex.command.thread8",
          defaultMessage: "Go to chat 8",
          description: "Command menu item to go to the eighth visible chat",
        },
        "codex.command.thread9": {
          id: "codex.command.thread9",
          defaultMessage: "Go to chat 9",
          description: "Command menu item to go to the ninth visible chat",
        },
      }),
      x = { ...f, "codex.command.importExternalAgent": p.title, "codex.command.personalitySettings": h.title },
      M = (0, n.YK)({
        "codex.commandMenuTitle.newThread": {
          id: "codex.commandMenuTitle.newThread",
          defaultMessage: "New Chat",
          description: "Native menu item to start a new chat",
        },
        "codex.commandMenuTitle.newProjectlessTask": {
          id: "codex.commandMenuTitle.newProjectlessTask",
          defaultMessage: "New standalone chat",
          description: "Native shortcut command to start a new standalone chat",
        },
        "codex.commandMenuTitle.openThreadInNewWindow": {
          id: "codex.commandMenuTitle.openThreadInNewWindow",
          defaultMessage: "Open in New Window",
          description: "Native menu item to open the current chat in a new window",
        },
        "codex.commandMenuTitle.archiveThread": {
          id: "codex.commandMenuTitle.archiveThread",
          defaultMessage: "Archive chat",
          description: "Native menu item to archive the current chat",
        },
        "codex.commandMenuTitle.toggleThreadPin": {
          id: "codex.commandMenuTitle.toggleThreadPin",
          defaultMessage: "Pin/unpin chat",
          description: "Native menu item to toggle whether the current chat is pinned",
        },
        "codex.commandMenuTitle.previousThread": {
          id: "codex.commandMenuTitle.previousThread",
          defaultMessage: "Previous Sidebar Item",
          description: "Native menu item to go to the previous sidebar item",
        },
        "codex.commandMenuTitle.nextThread": {
          id: "codex.commandMenuTitle.nextThread",
          defaultMessage: "Next Sidebar Item",
          description: "Native menu item to go to the next sidebar item",
        },
        "codex.commandMenuTitle.settings": {
          id: "codex.commandMenuTitle.settings",
          defaultMessage: "Settings…",
          description: "Native menu item to open settings",
        },
        "codex.commandMenuTitle.showKeyboardShortcuts": {
          id: "codex.commandMenuTitle.showKeyboardShortcuts",
          defaultMessage: "Keyboard Shortcuts",
          description: "Native menu item to show active keyboard shortcuts",
        },
        "codex.commandMenuTitle.newProject": {
          id: "codex.commandMenuTitle.newProject",
          defaultMessage: "New Project…",
          description: "Native File menu item to open the project creation dialog",
        },
        "codex.commandMenuTitle.openFolder": {
          id: "codex.commandMenuTitle.openFolder",
          defaultMessage: "Open Folder…",
          description: "Native menu item to open a folder",
        },
        "codex.commandMenuTitle.toggleSidebar": {
          id: "codex.commandMenuTitle.toggleSidebar",
          defaultMessage: "Toggle Sidebar",
          description: "Native menu item to toggle the sidebar",
        },
        "codex.commandMenuTitle.toggleBottomPanel": {
          id: "codex.commandMenuTitle.toggleBottomPanel",
          defaultMessage: "Toggle Bottom Panel",
          description: "Native menu item to toggle the bottom panel",
        },
        "codex.commandMenuTitle.togglePinnedSummary": {
          id: "codex.commandMenuTitle.togglePinnedSummary",
          defaultMessage: "Toggle Pinned Summary",
          description: "Native menu item to toggle the pinned summary",
        },
        "codex.commandMenuTitle.toggleTerminal": {
          id: "codex.commandMenuTitle.toggleTerminal",
          defaultMessage: "Open Terminal",
          description: "Native menu item to open the terminal",
        },
        "codex.commandMenuTitle.newTab": {
          id: "codex.commandMenuTitle.newTab",
          defaultMessage: "New tab",
          description: "Native menu item to open a new tab",
        },
        "codex.commandMenuTitle.toggleReviewPanel": {
          id: "codex.commandMenuTitle.toggleReviewPanel",
          defaultMessage: "Toggle Changes Panel",
          description: "Native menu item to toggle the Changes panel showing local diffs",
        },
        "codex.commandMenuTitle.findInThread": {
          id: "codex.commandMenuTitle.findInThread",
          defaultMessage: "Find",
          description: "Native menu item to find in the current chat",
        },
        "codex.commandMenuTitle.focusBrowserAddressBar": {
          id: "codex.commandMenuTitle.focusBrowserAddressBar",
          defaultMessage: "Focus Browser Address Bar",
          description: "Native menu item to focus the browser address bar",
        },
        "codex.commandMenuTitle.navigateBack": {
          id: "codex.commandMenuTitle.navigateBack",
          defaultMessage: "Back",
          description: "Native menu item to navigate back",
        },
        "codex.commandMenuTitle.navigateForward": {
          id: "codex.commandMenuTitle.navigateForward",
          defaultMessage: "Forward",
          description: "Native menu item to navigate forward",
        },
        "codex.commandMenuTitle.logOut": {
          id: "codex.commandMenuTitle.logOut",
          defaultMessage: "Log Out",
          description:
            "Native application menu item that signs the user out of Codex after confirmation. Short action label.",
        },
        "codex.commandMenuTitle.thread1": {
          id: "codex.commandMenuTitle.thread1",
          defaultMessage: "Go to Chat 1",
          description: "Native menu item to go to chat 1",
        },
        "codex.commandMenuTitle.thread2": {
          id: "codex.commandMenuTitle.thread2",
          defaultMessage: "Go to Chat 2",
          description: "Native menu item to go to chat 2",
        },
        "codex.commandMenuTitle.thread3": {
          id: "codex.commandMenuTitle.thread3",
          defaultMessage: "Go to Chat 3",
          description: "Native menu item to go to chat 3",
        },
        "codex.commandMenuTitle.thread4": {
          id: "codex.commandMenuTitle.thread4",
          defaultMessage: "Go to Chat 4",
          description: "Native menu item to go to chat 4",
        },
        "codex.commandMenuTitle.thread5": {
          id: "codex.commandMenuTitle.thread5",
          defaultMessage: "Go to Chat 5",
          description: "Native menu item to go to chat 5",
        },
        "codex.commandMenuTitle.thread6": {
          id: "codex.commandMenuTitle.thread6",
          defaultMessage: "Go to Chat 6",
          description: "Native menu item to go to chat 6",
        },
        "codex.commandMenuTitle.thread7": {
          id: "codex.commandMenuTitle.thread7",
          defaultMessage: "Go to Chat 7",
          description: "Native menu item to go to chat 7",
        },
        "codex.commandMenuTitle.thread8": {
          id: "codex.commandMenuTitle.thread8",
          defaultMessage: "Go to Chat 8",
          description: "Native menu item to go to chat 8",
        },
        "codex.commandMenuTitle.thread9": {
          id: "codex.commandMenuTitle.thread9",
          defaultMessage: "Go to Chat 9",
          description: "Native menu item to go to chat 9",
        },
        "codex.commandMenuTitle.copyConversationPath": {
          id: "codex.commandMenuTitle.copyConversationPath",
          defaultMessage: "Copy conversation path",
          description: "Native menu item to copy the conversation path",
        },
        "codex.commandMenuTitle.copyDeeplink": {
          id: "codex.commandMenuTitle.copyDeeplink",
          defaultMessage: "Copy deeplink",
          description: "Native menu item to copy the chat deeplink",
        },
        "codex.commandMenuTitle.copyWorkingDirectory": {
          id: "codex.commandMenuTitle.copyWorkingDirectory",
          defaultMessage: "Copy working directory",
          description: "Native menu item to copy the working directory",
        },
        "codex.commandMenuTitle.closeTab": {
          id: "codex.commandMenuTitle.closeTab",
          defaultMessage: "Close Tab",
          description: "Native menu item to close the active tab",
        },
        "codex.commandMenuTitle.closeWindow": {
          id: "codex.commandMenuTitle.closeWindow",
          defaultMessage: "Close",
          description: "Native menu item to close the active window",
        },
        "codex.commandMenuTitle.reloadBrowserPage": {
          id: "codex.commandMenuTitle.reloadBrowserPage",
          defaultMessage: "Reload Browser Page",
          description: "Native menu item to reload the browser page",
        },
        "codex.commandMenuTitle.hardReloadBrowserPage": {
          id: "codex.commandMenuTitle.hardReloadBrowserPage",
          defaultMessage: "Force Reload Browser Page",
          description: "Native menu item to force reload the browser page",
        },
        "codex.commandMenuTitle.newWindow": {
          id: "codex.commandMenuTitle.newWindow",
          defaultMessage: "New Window",
          description: "Native menu item to open a new window",
        },
        "codex.commandMenuTitle.openCommandMenu": {
          id: "codex.commandMenuTitle.openCommandMenu",
          defaultMessage: "Open command menu",
          description: "Native menu item to open the command menu",
        },
        "codex.commandMenuTitle.searchChats": {
          id: "codex.commandMenuTitle.searchChats",
          defaultMessage: "Search Chats…",
          description: "Native menu item to search chats",
        },
        "codex.commandMenuTitle.searchFiles": {
          id: "codex.commandMenuTitle.searchFiles",
          defaultMessage: "Search Files…",
          description: "Native menu item to search files",
        },
        "codex.commandMenuTitle.renameThread": {
          id: "codex.commandMenuTitle.renameThread",
          defaultMessage: "Rename chat",
          description: "Native menu item to rename the current chat",
        },
        "codex.commandMenuTitle.toggleFileTreePanel": f["codex.commandMenuTitle.toggleFileTreePanel"],
        "codex.commandMenuTitle.toggleTraceRecording": {
          id: "codex.commandMenuTitle.toggleTraceRecording",
          defaultMessage: "Start Trace Recording",
          description: "Native menu item to start trace recording",
        },
      }),
      w = {
        ...(0, n.YK)({
          "codex.commandDescription.importPrismToLocal": {
            id: "codex.commandDescription.importPrismToLocal",
            defaultMessage: "Edit and compile a local copy of your Prism project",
            description: "Description of the command that imports a Prism project to the desktop filesystem",
          },
          "codex.commandDescription.meetings.takeNotes": {
            id: "codex.commandDescription.meetings.takeNotes",
            defaultMessage: "Start taking notes with Meetings on this device",
            description:
              "Description of the configurable shortcut that starts a local recording after Meetings setup is complete",
          },
          "codex.commandDescription.screenshotToCurrentChat": {
            id: "codex.commandDescription.screenshotToCurrentChat",
            defaultMessage: "Select a screen area and attach its image to the current chat without sending",
            description: "Description of the macOS rectangular screenshot shortcut and its chat destination",
          },
          "codex.commandDescription.screenshotToNewChat": {
            id: "codex.commandDescription.screenshotToNewChat",
            defaultMessage: "Select a screen area and attach its image to a new chat without sending",
            description: "Description of the macOS rectangular screenshot shortcut and its chat destination",
          },
          "codex.commandDescription.artifacts.selectTool": {
            id: "codex.commandDescription.artifacts.selectTool",
            defaultMessage: "Select and move artifact elements",
            description:
              "Shortcut settings description for the drawing tool shared by Canvas, Slides, and Sheets: select tool",
          },
          "codex.commandDescription.artifacts.handTool": {
            id: "codex.commandDescription.artifacts.handTool",
            defaultMessage: "Pan the artifact viewport",
            description:
              "Shortcut settings description for the drawing tool shared by Canvas, Slides, and Sheets: pan tool",
          },
          "codex.commandDescription.canvas.prompt": {
            id: "codex.commandDescription.canvas.prompt",
            defaultMessage: "Open a Canvas prompt at the pointer",
            description: "Shortcut settings description for the Canvas prompt command",
          },
          "codex.commandDescription.artifacts.rectangleTool": {
            id: "codex.commandDescription.artifacts.rectangleTool",
            defaultMessage: "Add rectangles to Canvas, Slides, or Sheets",
            description:
              "Shortcut settings description for the drawing tool shared by Canvas, Slides, and Sheets: rectangle tool",
          },
          "codex.commandDescription.artifacts.circleTool": {
            id: "codex.commandDescription.artifacts.circleTool",
            defaultMessage: "Add circles and ovals to Canvas, Slides, or Sheets",
            description:
              "Shortcut settings description for the drawing tool shared by Canvas, Slides, and Sheets: circle tool",
          },
          "codex.commandDescription.artifacts.arrowTool": {
            id: "codex.commandDescription.artifacts.arrowTool",
            defaultMessage: "Add arrows to Canvas, Slides, or Sheets",
            description:
              "Shortcut settings description for the drawing tool shared by Canvas, Slides, and Sheets: arrow tool",
          },
          "codex.commandDescription.artifacts.lineTool": {
            id: "codex.commandDescription.artifacts.lineTool",
            defaultMessage: "Add lines to Canvas, Slides, or Sheets",
            description:
              "Shortcut settings description for the drawing tool shared by Canvas, Slides, and Sheets: line tool",
          },
          "codex.commandDescription.artifacts.textTool": {
            id: "codex.commandDescription.artifacts.textTool",
            defaultMessage: "Add text to Canvas, Slides, or Sheets",
            description:
              "Shortcut settings description for the drawing tool shared by Canvas, Slides, and Sheets: text tool",
          },
          "codex.commandDescription.artifacts.noteTool": {
            id: "codex.commandDescription.artifacts.noteTool",
            defaultMessage: "Place sticky notes on the Canvas",
            description:
              "Shortcut settings description for the Canvas sticky-note drawing tool in the shared Artifacts command family",
          },
          "codex.commandDescription.page.addComment": {
            id: "codex.commandDescription.page.addComment",
            defaultMessage: "Comment on selected Page content or the word at the cursor",
            description: "Keyboard shortcut description for starting a Page comment without submitting it",
          },
          "codex.commandDescription.page.formatNumberedList": {
            id: "codex.commandDescription.page.formatNumberedList",
            defaultMessage: "Format the selected Page text as a numbered list",
            description:
              "Description of the numbered-list formatting command in keyboard shortcut settings and the command menu",
          },
          "codex.commandDescription.page.formatBulletedList": {
            id: "codex.commandDescription.page.formatBulletedList",
            defaultMessage: "Format the selected Page text as a bulleted list",
            description:
              "Description of the bulleted-list formatting command in keyboard shortcut settings and the command menu",
          },
          "codex.commandDescription.page.formatChecklist": {
            id: "codex.commandDescription.page.formatChecklist",
            defaultMessage: "Toggle checklist formatting for the selected Page text",
            description:
              "Description of the checklist formatting command in keyboard shortcut settings and the command menu",
          },
          "codex.commandDescription.newThread": {
            id: "codex.commandDescription.newThread",
            defaultMessage: "Start a new chat",
            description: "Description for the New chat command",
          },
          "codex.commandDescription.newProjectlessTask": {
            id: "codex.commandDescription.newProjectlessTask",
            defaultMessage: "Start a new chat outside of any project",
            description: "Description for the New standalone chat command",
          },
          "codex.commandDescription.temporaryChat": {
            id: "codex.commandDescription.temporaryChat",
            defaultMessage: "Start a chat that won't appear in history",
            description: "Description for the Temporary chat command",
          },
          "codex.commandDescription.openThreadInNewWindow": {
            id: "codex.commandDescription.openThreadInNewWindow",
            defaultMessage: "Open the current chat in a new window",
            description: "Description for the Open in new window command",
          },
          "codex.commandDescription.archiveThread": {
            id: "codex.commandDescription.archiveThread",
            defaultMessage: "Archive the current chat",
            description: "Description for the Archive chat command",
          },
          "codex.commandDescription.deleteOrbit": {
            id: "codex.commandDescription.deleteOrbit",
            defaultMessage: "Confirm deletion of your {dot}",
            description:
              "Description for the command that opens confirmation to permanently delete the current assistant. The dot placeholder is the untranslated term for the user's agent.",
          },
          "codex.commandDescription.deleteChat": {
            id: "codex.commandDescription.deleteChat",
            defaultMessage: "Confirm deletion of the current chat",
            description:
              "Description of the Delete chat keyboard shortcut, which opens a confirmation dialog and does not delete the chat immediately",
          },
          "codex.commandDescription.markThreadUnread": {
            id: "codex.commandDescription.markThreadUnread",
            defaultMessage: "Mark the current chat as unread",
            description: "Description for the Mark as unread command",
          },
          "codex.commandDescription.toggleThreadPin": {
            id: "codex.commandDescription.toggleThreadPin",
            defaultMessage: "Pin or unpin the current chat",
            description: "Description for the Toggle pin command",
          },
          "codex.commandDescription.copyPageLink": {
            id: "codex.commandDescription.copyPageLink",
            defaultMessage: "Copy the current document’s link to the clipboard",
            description: "Description for the Copy document link keyboard shortcut for a Page, slide, or sheet",
          },
          "codex.commandDescription.copyConversationMarkdown": {
            id: "codex.commandDescription.copyConversationMarkdown",
            defaultMessage: "Copy the current chat as Markdown",
            description: "Description for the Copy as Markdown command",
          },
          "codex.commandDescription.copyLastCodeBlock": {
            id: "codex.commandDescription.copyLastCodeBlock",
            defaultMessage: "Copy the last assistant code block in the current chat",
            description:
              "Description in keyboard shortcut settings for the command that copies only the code from the most recent assistant code block, without its Markdown fence",
          },
          "codex.commandDescription.openSideChat": {
            id: "codex.commandDescription.openSideChat",
            defaultMessage: "Open the current chat in a side chat",
            description: "Description for the Open side chat command",
          },
          "codex.commandDescription.focusMainChat": {
            id: "codex.commandDescription.focusMainChat",
            defaultMessage: "Move keyboard focus to the main chat composer",
            description: "Description for the Focus main chat command",
          },
          "codex.commandDescription.focusSideChat": {
            id: "codex.commandDescription.focusSideChat",
            defaultMessage: "Move keyboard focus to an open side chat composer",
            description: "Description for the Focus side chat command",
          },
          "codex.commandDescription.openControlWindow": {
            id: "codex.commandDescription.openControlWindow",
            defaultMessage: "Open the voice chat control window",
            description: "Description for the Open control window command",
          },
          "codex.commandDescription.toggleDebugModal": {
            id: "codex.commandDescription.toggleDebugModal",
            defaultMessage: "Show or hide the internal debug panel",
            description: "Description for the Toggle debug panel shortcut",
          },
          "codex.commandDescription.undoAppAction": {
            id: "codex.commandDescription.undoAppAction",
            defaultMessage: "Undo the most recent app action",
            description: "Description for the Undo last action command",
          },
          "codex.commandDescription.redoAppAction": {
            id: "codex.commandDescription.redoAppAction",
            defaultMessage: "Redo the most recently undone app action",
            description: "Description for the Redo last action command",
          },
          "codex.commandDescription.reopenClosedTab": {
            id: "codex.commandDescription.reopenClosedTab",
            defaultMessage: "Reopen the most recently closed tab",
            description: "Description for the Reopen closed tab command",
          },
          "codex.commandDescription.composer.openModelPicker": {
            id: "codex.commandDescription.composer.openModelPicker",
            defaultMessage: "Open the composer controls for model effort",
            description: "Description for the shortcut that opens the reasoning effort controls in the composer",
          },
          "codex.commandDescription.composer.openRecentModels": {
            id: "codex.commandDescription.composer.openRecentModels",
            defaultMessage: "Open recently used model, effort, and speed combinations",
            description: "Description for the shortcut that opens recent model configurations in the composer",
          },
          "codex.commandDescription.composer.openProjectPicker": {
            id: "codex.commandDescription.composer.openProjectPicker",
            defaultMessage: "Open the composer project picker",
            description: "Description for the Open project picker shortcut",
          },
          "codex.commandDescription.composer.toggleDictation": {
            id: "codex.commandDescription.composer.toggleDictation",
            defaultMessage: "Start or stop dictation in the chat composer",
            description:
              "Description of the keyboard shortcut that records speech and inserts the transcript into the chat draft",
          },
          "codex.commandDescription.composer.startVoiceMode": {
            id: "codex.commandDescription.composer.startVoiceMode",
            defaultMessage: "Start or stop voice chat",
            description: "Description for the Toggle voice mode shortcut",
          },
          "codex.commandDescription.composer.submit": {
            id: "codex.commandDescription.composer.submit",
            defaultMessage: "Send the current composer message",
            description: "Description for the Send message shortcut",
          },
          "codex.commandDescription.browser.toggleAnnotationMode": {
            id: "codex.commandDescription.browser.toggleAnnotationMode",
            defaultMessage: "Enter or leave annotation mode in the browser",
            description: "Description of the keyboard shortcut that toggles annotation mode in the in-app browser",
          },
          "codex.commandDescription.presentation.duplicateSelection": {
            id: "codex.commandDescription.presentation.duplicateSelection",
            defaultMessage: "Make a copy of the selected objects on the current slide",
            description: "Description for the presentation Duplicate shortcut",
          },
          "codex.commandDescription.artifact.sendAnnotations": {
            id: "codex.commandDescription.artifact.sendAnnotations",
            defaultMessage: "Send pending annotations in the focused artifact",
            description: "Description for the Send annotations shortcut",
          },
          "codex.commandDescription.composer.submitInBackground": {
            id: "codex.commandDescription.composer.submitInBackground",
            defaultMessage: "Send the current composer message without opening its chat",
            description: "Description for the Send message in background shortcut",
          },
          "codex.commandDescription.composer.steer": {
            id: "codex.commandDescription.composer.steer",
            defaultMessage: "Submit the current composer prompt as a steering message",
            description: "Description for the Steer prompt shortcut",
          },
          "codex.commandDescription.composer.queue": {
            id: "codex.commandDescription.composer.queue",
            defaultMessage: "Submit the current composer prompt as a queued message",
            description: "Description for the Queue prompt shortcut",
          },
          "codex.commandDescription.composer.clear": {
            id: "codex.commandDescription.composer.clear",
            defaultMessage: "Clear the current composer prompt",
            description: "Description for the Clear prompt shortcut",
          },
          "codex.commandDescription.composer.addPhotos": {
            id: "codex.commandDescription.composer.addPhotos",
            defaultMessage: "Add photos to the active composer",
            description: "Description for the Add photos shortcut",
          },
          "codex.commandDescription.composer.addFiles": {
            id: "codex.commandDescription.composer.addFiles",
            defaultMessage: "Attach files and folders to the active composer",
            description: "Description for the Attach files and folders shortcut",
          },
          "codex.commandDescription.composer.toggleFastMode": {
            id: "codex.commandDescription.composer.toggleFastMode",
            defaultMessage: "Cycle through available speeds: Standard, Fast, and Ultrafast",
            description: "Description for the shortcut that cycles through the current model’s available speeds",
          },
          "codex.commandDescription.composer.increaseReasoningEffort": {
            id: "codex.commandDescription.composer.increaseReasoningEffort",
            defaultMessage: "Increase the current composer reasoning effort",
            description: "Description for the Increase reasoning effort shortcut",
          },
          "codex.commandDescription.composer.decreaseReasoningEffort": {
            id: "codex.commandDescription.composer.decreaseReasoningEffort",
            defaultMessage: "Decrease the current composer reasoning effort",
            description: "Description for the Decrease reasoning effort shortcut",
          },
          "codex.commandDescription.composer.cycleReasoningEffort": {
            id: "codex.commandDescription.composer.cycleReasoningEffort",
            defaultMessage: "Cycle through composer reasoning effort options",
            description: "Description for the Cycle reasoning effort shortcut",
          },
          "codex.commandDescription.composer.togglePlanMode": {
            id: "codex.commandDescription.composer.togglePlanMode",
            defaultMessage: "Turn plan mode on or off in the current composer",
            description: "Description for the Toggle plan mode shortcut",
          },
          "codex.commandDescription.composer.toggleWorktreeMode": {
            id: "codex.commandDescription.composer.toggleWorktreeMode",
            defaultMessage: "Switch the current composer between local and a new worktree",
            description: "Description for the Toggle Local/Worktree shortcut",
          },
          "codex.commandDescription.composer.cycleHost": {
            id: "codex.commandDescription.composer.cycleHost",
            defaultMessage: "Cycle the new chat between this computer and available remote machines",
            description:
              "Description for the Cycle host shortcut, which wraps back to this computer after the last remote machine",
          },
          "codex.commandDescription.composer.toggleWorkRunLocation": {
            id: "codex.commandDescription.composer.toggleWorkRunLocation",
            defaultMessage: "Switch ChatGPT Work between cloud and local execution",
            description: "Description for the Toggle Cloud/Local shortcut",
          },
          "codex.commandDescription.approval.approve": {
            id: "codex.commandDescription.approval.approve",
            defaultMessage: "Approve the active request",
            description: "Description for the Approve request shortcut",
          },
          "codex.commandDescription.approval.decline": {
            id: "codex.commandDescription.approval.decline",
            defaultMessage: "Decline the active request",
            description: "Description for the Decline request shortcut",
          },
          "codex.commandDescription.git.commit": {
            id: "codex.commandDescription.git.commit",
            defaultMessage: "Open commit or push options",
            description: "Description for the Commit or push command",
          },
          "codex.commandDescription.git.createPullRequest": {
            id: "codex.commandDescription.git.createPullRequest",
            defaultMessage: "Open pull request creation options",
            description: "Description for the Create PR command",
          },
          "codex.commandDescription.git.createDraftPullRequest": {
            id: "codex.commandDescription.git.createDraftPullRequest",
            defaultMessage: "Open draft pull request creation options",
            description: "Description for the Create draft PR command",
          },
          "codex.commandDescription.git.createBranch": {
            id: "codex.commandDescription.git.createBranch",
            defaultMessage: "Open branch creation options",
            description: "Description for the Create branch command",
          },
          "codex.commandDescription.git.mergePullRequest": {
            id: "codex.commandDescription.git.mergePullRequest",
            defaultMessage: "Open pull request merge options",
            description: "Description for the Merge PR command",
          },
          "codex.commandDescription.git.openPullRequest": {
            id: "codex.commandDescription.git.openPullRequest",
            defaultMessage: "Open the pull request linked to the current chat",
            description: "Description for the Open PR on GitHub command",
          },
          "codex.commandDescription.git.toggleBlame": {
            id: "codex.commandDescription.git.toggleBlame",
            defaultMessage: "Show or hide author and commit details for the active editor line",
            description: "Description for the Toggle Git blame command",
          },
          "codex.commandDescription.forkThread": {
            id: "codex.commandDescription.forkThread",
            defaultMessage: "Fork the current chat",
            description: "Description for the Fork chat shortcut",
          },
          "codex.commandDescription.showMiniOverlay": {
            id: "codex.commandDescription.showMiniOverlay",
            defaultMessage: "Show Mini from anywhere",
            description: "Description for the command that shows Mini, the floating compact panel",
          },
          "codex.commandDescription.nextThreadNeedingAttention": {
            id: "codex.commandDescription.nextThreadNeedingAttention",
            defaultMessage: "Switch to the next chat awaiting input or with unread activity",
            description:
              "Description for a navigation command that prioritizes chats awaiting user input before chats with unread activity",
          },
          "codex.commandDescription.previousThread": {
            id: "codex.commandDescription.previousThread",
            defaultMessage: "Switch to the previous sidebar item",
            description: "Description for the Previous sidebar item command",
          },
          "codex.commandDescription.previousTab": {
            id: "codex.commandDescription.previousTab",
            defaultMessage: "Switch to the previous tab",
            description: "Description for the Previous tab shortcut",
          },
          "codex.commandDescription.previousRecentThread": {
            id: "codex.commandDescription.previousRecentThread",
            defaultMessage: "Cycle to the previous recently viewed chat",
            description: "Description for the Previous recently viewed chat shortcut",
          },
          "codex.commandDescription.nextThread": {
            id: "codex.commandDescription.nextThread",
            defaultMessage: "Switch to the next sidebar item",
            description: "Description for the Next sidebar item command",
          },
          "codex.commandDescription.nextTab": {
            id: "codex.commandDescription.nextTab",
            defaultMessage: "Switch to the next tab",
            description: "Description for the Next tab shortcut",
          },
          "codex.commandDescription.nextRecentThread": {
            id: "codex.commandDescription.nextRecentThread",
            defaultMessage: "Cycle to the next recently viewed chat",
            description: "Description for the Next recently viewed chat shortcut",
          },
          "codex.commandDescription.recentThreadSlot": {
            id: "codex.commandDescription.recentThreadSlot",
            defaultMessage: "Open the recently updated chat in this shortcut slot",
            description: "Description for shortcuts that open one of the six most recently updated chats",
          },
          "codex.commandDescription.switchToChat": {
            id: "codex.commandDescription.switchToChat",
            defaultMessage: "Switch to Chat",
            description: "Description for the Switch to Chat command",
          },
          "codex.commandDescription.switchToWork": {
            id: "codex.commandDescription.switchToWork",
            defaultMessage: "Switch to Work",
            description: "Description for the Switch to Work command",
          },
          "codex.commandDescription.switchToCodex": {
            id: "codex.commandDescription.switchToCodex",
            defaultMessage: "Switch to Codex",
            description: "Description for the Switch to Codex command",
          },
          "codex.commandDescription.settings": {
            id: "codex.commandDescription.settings",
            defaultMessage: "Open {appName} settings",
            description: "Description for the Settings command",
          },
          "codex.commandDescription.codexMicroSettings": {
            id: "codex.commandDescription.codexMicroSettings",
            defaultMessage: "Open Codex Micro setup",
            description: "Description for the Codex Micro setup keycap action",
          },
          "codex.commandDescription.mcpSettings": {
            id: "codex.commandDescription.mcpSettings",
            defaultMessage: "Configure MCP servers",
            description: "Description for the MCP settings command",
          },
          "codex.commandDescription.keyboardShortcuts": {
            id: "codex.commandDescription.keyboardShortcuts",
            defaultMessage: "Customize keyboard shortcuts",
            description: "Description for the Keyboard shortcuts command",
          },
          "codex.commandDescription.showKeyboardShortcuts": {
            id: "codex.commandDescription.showKeyboardShortcuts",
            defaultMessage: "Show the shortcuts available right now",
            description: "Description for the command that shows currently active shortcuts",
          },
          "codex.commandDescription.clearAllUnreads": {
            id: "codex.commandDescription.clearAllUnreads",
            defaultMessage: "Mark all chats and scheduled task updates as read",
            description: "Description of the command that clears all unread updates",
          },
          "codex.commandDescription.manageTasks": {
            id: "codex.commandDescription.manageTasks",
            defaultMessage: "Create or manage scheduled tasks from the current page",
            description: "Description for the Manage scheduled tasks command",
          },
          "codex.commandDescription.forceReloadSkills": {
            id: "codex.commandDescription.forceReloadSkills",
            defaultMessage: "Refresh the skill catalog for the current context",
            description: "Description for the Force reload skills command",
          },
          "codex.commandDescription.openSkills": {
            id: "codex.commandDescription.openSkills",
            defaultMessage: "Browse installed and recommended skills",
            description: "Description for the Go to skills command",
          },
          "codex.commandDescription.newProject": {
            id: "codex.commandDescription.newProject",
            defaultMessage: "Create a project",
            description: "Description for the command that opens project creation",
          },
          "codex.commandDescription.openFolder": {
            id: "codex.commandDescription.openFolder",
            defaultMessage: "Add a local project to {appName}",
            description: "Description for the Open folder command",
          },
          "codex.commandDescription.toggleSidebar": {
            id: "codex.commandDescription.toggleSidebar",
            defaultMessage: "Show or hide the sidebar",
            description: "Description for the Toggle sidebar command",
          },
          "codex.commandDescription.toggleBottomPanel": {
            id: "codex.commandDescription.toggleBottomPanel",
            defaultMessage: "Show or hide the bottom panel",
            description: "Description for the Toggle bottom panel command",
          },
          "codex.commandDescription.togglePinnedSummary": {
            id: "codex.commandDescription.togglePinnedSummary",
            defaultMessage: "Show or hide the pinned summary",
            description: "Description for the Toggle pinned summary command",
          },
          "codex.commandDescription.toggleTerminal": {
            id: "codex.commandDescription.toggleTerminal",
            defaultMessage: "Open the terminal panel",
            description: "Description for the Open terminal command",
          },
          "codex.commandDescription.newTab": {
            id: "codex.commandDescription.newTab",
            defaultMessage: "Open a new tab",
            description: "Description for the New tab command",
          },
          "codex.commandDescription.closeOtherTabs": {
            id: "codex.commandDescription.closeOtherTabs",
            defaultMessage: "Close all tabs except the active tab",
            description: "Description for the Close other tabs shortcut",
          },
          "codex.commandDescription.showWorkspaceTabView": {
            id: "codex.commandDescription.showWorkspaceTabView",
            defaultMessage: "Enter or exit full view",
            description: "Description for the command that toggles full view for the workspace",
          },
          "codex.commandDescription.exitWorkspaceFullView": {
            id: "codex.commandDescription.exitWorkspaceFullView",
            defaultMessage: "Restore the fullscreen panel to split view",
            description: "Description for the Escape command that leaves workspace full view without closing its tabs",
          },
          "codex.commandDescription.stepWorkspaceLayout": {
            id: "codex.commandDescription.stepWorkspaceLayout",
            defaultMessage: "Step from full view to split view, hide tabs, or show tabs beside Chat",
            description:
              "Description for the command that steps down through workspace layouts and restores split view from hidden tabs",
          },
          "codex.commandDescription.openReviewTab": {
            id: "codex.commandDescription.openReviewTab",
            defaultMessage: "Open the Changes tab",
            description: "Description for the Open Changes tab command",
          },
          "codex.commandDescription.toggleReviewTab": {
            id: "codex.commandDescription.toggleReviewTab",
            defaultMessage: "Show or hide Changes for the current Git-backed chat",
            description: "Description for the Toggle Changes shortcut",
          },
          "codex.commandDescription.toggleReviewPanel": {
            id: "codex.commandDescription.toggleReviewPanel",
            defaultMessage: "Show or hide Changes for the current chat",
            description: "Description for the Toggle Changes panel command",
          },
          "codex.commandDescription.file.goToDefinition": {
            id: "codex.commandDescription.file.goToDefinition",
            defaultMessage: "Open the definition of the selected file symbol",
            description: "Description for the Go to definition shortcut",
          },
          "codex.commandDescription.file.findReferences": {
            id: "codex.commandDescription.file.findReferences",
            defaultMessage: "Find references to the selected file symbol",
            description: "Description for the Find references shortcut",
          },
          "codex.commandDescription.file.navigateBack": {
            id: "codex.commandDescription.file.navigateBack",
            defaultMessage: "Return to the previous file location",
            description: "Description for the file navigation back shortcut",
          },
          "codex.commandDescription.file.navigateForward": {
            id: "codex.commandDescription.file.navigateForward",
            defaultMessage: "Return to the next file location",
            description: "Description for the file navigation forward shortcut",
          },
          "codex.commandDescription.findInThread": {
            id: "codex.commandDescription.findInThread",
            defaultMessage: "Search the current chat",
            description: "Description for the Find command",
          },
          "codex.commandDescription.goToLine": {
            id: "codex.commandDescription.goToLine",
            defaultMessage: "Go to a line in the current file",
            description: "Description for the Go to line command",
          },
          "codex.commandDescription.focusBrowserAddressBar": {
            id: "codex.commandDescription.focusBrowserAddressBar",
            defaultMessage: "Focus the in-app browser address bar",
            description: "Description for the Focus browser address bar command",
          },
          "codex.commandDescription.navigateBrowserBack": {
            id: "codex.commandDescription.navigateBrowserBack",
            defaultMessage: "Go back in browser history",
            description: "Description for the Browser back command",
          },
          "codex.commandDescription.navigateBrowserForward": {
            id: "codex.commandDescription.navigateBrowserForward",
            defaultMessage: "Go forward in browser history",
            description: "Description for the Browser forward command",
          },
          "codex.commandDescription.navigateBack": {
            id: "codex.commandDescription.navigateBack",
            defaultMessage: "Go back in navigation history",
            description: "Description for the Back command",
          },
          "codex.commandDescription.navigateForward": {
            id: "codex.commandDescription.navigateForward",
            defaultMessage: "Go forward in navigation history",
            description: "Description for the Forward command",
          },
          "codex.commandDescription.logOut": {
            id: "codex.commandDescription.logOut",
            defaultMessage: "Sign out of {appName}",
            description: "Description for the Log out command",
          },
          "codex.commandDescription.feedback": {
            id: "codex.commandDescription.feedback",
            defaultMessage: "Send product feedback to the ChatGPT team",
            description: "Description for the Feedback command",
          },
          "codex.commandDescription.environmentActionSlot": {
            id: "codex.commandDescription.environmentActionSlot",
            defaultMessage: "Run the environment action in this shortcut slot",
            description: "Description for environment action shortcut slots",
          },
          "codex.commandDescription.hotkeyWindow": {
            id: "codex.commandDescription.hotkeyWindow",
            defaultMessage: "Show or hide Popout Window from anywhere on desktop",
            description: "Description for the Popout Window hotkey",
          },
          "codex.commandDescription.spotlightSearch": {
            id: "codex.commandDescription.spotlightSearch",
            defaultMessage: "Open Spotlight search from anywhere on desktop",
            description:
              "Description of the global shortcut for Codex Spotlight, the floating desktop search and command panel",
          },
          "codex.commandDescription.notchVoice": {
            id: "codex.commandDescription.notchVoice",
            defaultMessage: "Start voice in Mini or show the ongoing call",
            description: "Description of the notch voice shortcut",
          },
          "codex.commandDescription.toggleNotch": {
            id: "codex.commandDescription.toggleNotch",
            defaultMessage: "Expand or collapse the notch from anywhere",
            description:
              "Description for the shortcut that expands or collapses the Codex notch panel at the top of the screen",
          },
          "codex.commandDescription.globalDictationHold": {
            id: "codex.commandDescription.globalDictationHold",
            defaultMessage: "Hold to dictate, release to finish. Double-tap for hands-free, tap to finish.",
            description: "Description for the dictation shortcut",
          },
          "codex.commandDescription.globalDictationSingleTap": {
            id: "codex.commandDescription.globalDictationSingleTap",
            defaultMessage: "Press once to start, again to finish",
            description: "Description for the single-tap dictation shortcut",
          },
          "codex.commandDescription.copyConversationPath": {
            id: "codex.commandDescription.copyConversationPath",
            defaultMessage: "Copy the current chat path",
            description: "Description for the Copy conversation path shortcut",
          },
          "codex.commandDescription.copyDeeplink": {
            id: "codex.commandDescription.copyDeeplink",
            defaultMessage: "Copy a deeplink to the current chat",
            description: "Description for the Copy deeplink shortcut",
          },
          "codex.commandDescription.copyWorkingDirectory": {
            id: "codex.commandDescription.copyWorkingDirectory",
            defaultMessage: "Copy the current chat working directory",
            description: "Description for the Copy working directory shortcut",
          },
          "codex.commandDescription.closeTab": {
            id: "codex.commandDescription.closeTab",
            defaultMessage: "Close the active tab",
            description: "Description for the Close Tab shortcut",
          },
          "codex.commandDescription.closeWindow": {
            id: "codex.commandDescription.closeWindow",
            defaultMessage: "Close the active window",
            description: "Description for the Close Window shortcut",
          },
          "codex.commandDescription.reloadBrowserPage": {
            id: "codex.commandDescription.reloadBrowserPage",
            defaultMessage: "Reload the active browser page",
            description: "Description for the Reload Browser Page shortcut",
          },
          "codex.commandDescription.hardReloadBrowserPage": {
            id: "codex.commandDescription.hardReloadBrowserPage",
            defaultMessage: "Force reload the active browser page",
            description: "Description for the Force Reload Browser Page shortcut",
          },
          "codex.commandDescription.newWindow": {
            id: "codex.commandDescription.newWindow",
            defaultMessage: "Open a new window",
            description: "Description for the New Window shortcut",
          },
          "codex.commandDescription.openCommandMenu": {
            id: "codex.commandDescription.openCommandMenu",
            defaultMessage: "Open the command menu",
            description: "Description for the Open command menu shortcut",
          },
          "codex.commandDescription.searchChats": {
            id: "codex.commandDescription.searchChats",
            defaultMessage: "Search and switch to a chat",
            description: "Description for the Switch chat command",
          },
          "codex.commandDescription.searchChatsPrevious": {
            id: "codex.commandDescription.searchChatsPrevious",
            defaultMessage: "Open the chat picker and cycle backward through chats",
            description:
              "Description of the shortcut that highlights the previous chat in the picker until the user confirms a selection",
          },
          "codex.commandDescription.togglePriorityFilter": {
            id: "codex.commandDescription.togglePriorityFilter",
            defaultMessage: "Turn the sidebar activity view on or off",
            description: "Description for the Toggle activity view command",
          },
          "codex.commandDescription.searchFiles": {
            id: "codex.commandDescription.searchFiles",
            defaultMessage: "Search files",
            description: "Description for the Search Files shortcut",
          },
          "codex.commandDescription.renameThread": {
            id: "codex.commandDescription.renameThread",
            defaultMessage: "Rename the current chat",
            description: "Description for the Rename chat shortcut",
          },
          "codex.commandDescription.toggleFileTreePanel": {
            id: "codex.commandDescription.toggleFileTreePanel",
            defaultMessage: "Show or hide a page's navigation, or the code viewer's file tree",
            description:
              "Shortcut description explaining that the navigation panel shows the Pages hierarchy while viewing a Page and project files while working with code",
          },
          "codex.commandDescription.toggleTraceRecording": {
            id: "codex.commandDescription.toggleTraceRecording",
            defaultMessage: "Start or stop trace recording",
            description: "Description for the Start Trace Recording shortcut",
          },
          "codex.commandDescription.focusTab": {
            id: "codex.commandDescription.focusTab",
            defaultMessage: "Focus the tab at this position in the chat tab strip",
            description: "Description for numbered chat tab focus shortcuts",
          },
          "codex.commandDescription.threadSlot": {
            id: "codex.commandDescription.threadSlot",
            defaultMessage: "Open the visible chat in this shortcut slot",
            description: "Description for the chat slot commands",
          },
        }),
        "codex.commandDescription.importExternalAgent": p.description,
        "codex.commandDescription.personalitySettings": h.description,
      }
    function v(e, t, o = !1) {
      if ("openOrbit" === e.id) return s(t).title
      if ("focusPageBlockControls" === e.id) return d(t).title
      if ("openAvatarOverlay" === e.id && o) return t.formatMessage(g)
      if ("composer.captureAppshot" === e.id) return c(t).title
      if ("titleIntlId" in e) {
        var a
        let o
        return b(x, e.titleIntlId)
          ? t.formatMessage(x[e.titleIntlId], { dot: "dot" })
          : null == (o = u((a = e.id)) ? m[a] : null)
            ? ""
            : t.formatMessage(o.title)
      }
      return t.formatMessage(M[e.electron.menuTitleIntlId])
    }
    function y(e, t, o, n = !1) {
      var r
      let l
      if ("openOrbit" === e.id) return s(t)
      if ("focusPageBlockControls" === e.id) return d(t)
      if ("composer.captureAppshot" === e.id) return c(t)
      if ("toggleSidePanel" === e.id)
        return {
          title:
            o?.title ??
            t.formatMessage({
              id: "codex.command.toggleWorkspaceTabs",
              defaultMessage: "Switch between Chat and tabs",
              description:
                "Command palette and shortcut settings title for switching between Chat and the previous content tab in full view or toggling workspace tab visibility in split view",
            }),
          description:
            o?.description ??
            t.formatMessage({
              id: "codex.commandDescription.toggleWorkspaceTabs",
              defaultMessage: "Switch between Chat and tabs in full view, or show or hide tabs in split view",
              description:
                "Description for the command that switches between Chat and the previous content tab in full view or toggles workspace tab visibility in split view",
            }),
        }
      let p = (0, a.yF)(e)
          ? b(w, e.descriptionIntlId)
            ? t.formatMessage(w[e.descriptionIntlId], { appName: i.C, dot: "dot" })
            : null == (l = u((r = e.id)) ? m[r] : null)
              ? ""
              : t.formatMessage(l.description)
          : "",
        h = o?.title ?? v(e, t)
      return ("openAvatarOverlay" === e.id && n && (h = v(e, t, !0)), { title: h, description: o?.description ?? p })
    }
    function b(e, t) {
      return Object.hasOwn(e, t)
    }
  },
  vnLQ(e, t, o) {
    var a = o("QosV"),
      n = o("SZCv"),
      i = o.n(n),
      c = o("zTeN"),
      r = o("DBCl"),
      s = o("t162"),
      d = o("tl5a"),
      l = o("AqHb"),
      m = o("UN1G"),
      u = o("L2Eu"),
      p = o("JQtI"),
      h = o("gdZA"),
      g = o("TYK1"),
      f = o("kx7U"),
      x = o("OWtl"),
      M = o("V3rO"),
      w = o("kfGJ"),
      v = o("r6TF"),
      y = o("d6Ff"),
      b = o("QGyr"),
      C = o("TWTg"),
      T = o("fmZS")
    let S = (0, c.un)(x.u, ({ get: e }) =>
        (e(f.u8) ?? [])
          .filter(({ hostId: t }) => "connected" === e(d.y2, t))
          .map(({ hostId: e }) => e)
          .sort((e, t) => e.localeCompare(t)),
      ),
      D = (0, c.un)(x.u, ({ get: e }) => {
        let t = (0, v.ZI)(e, e(v.Tv))
        return {
          cloudTasks: [...(e(v.Ei).data ?? []), ...t.flatMap((e) => ("remote" === e.kind ? [e.task] : []))],
          conversationsMeta: t.flatMap((e) => ("local" === e.kind && null != e.summary ? [e.summary] : [])),
          hostIds: new Set([w.fI, r.iwv, ...e(S)]),
          projectLabelByThreadKey: e(b.o4),
        }
      })
    function k(e) {
      switch (e.kind) {
        case "local":
          return e.hostId === w.fI ? e.threadKey : `${e.threadKey}:${e.hostId}`
        case "remote":
          return e.threadKey
        case "chatgpt":
          return `chatgpt:${e.conversationId}`
        case "dot":
          return `dot:${e.item.id}`
      }
    }
    function P(e) {
      let t = (0, r.JXB)(e.threadId)
      return {
        kind: "local",
        threadKey: (0, y.z3)(t),
        conversationId: t,
        hostId: e.hostId,
        threadId: e.threadId,
        title: e.title,
        searchTitle: e.title,
        cwd: e.cwd,
        branch: "",
        hasUnreadTurn: !1,
        isAeonThread: (0, p.N)(e.threadStartKind, e.threadSource),
        updatedAt: e.updatedAt,
        searchPreview: e.searchPreview,
      }
    }
    function _(e) {
      switch (e.kind) {
        case "local":
          return (0, T.Q7)(e.hostId, e.conversationId)
        case "remote":
          return e.threadKey
      }
    }
    function A(e, t, o) {
      let a = N(e.searchTitle, t, 0)
      if (null != a) return a
      let n = (function (e, t) {
        if (null == e) return null
        switch (e.kind) {
          case "contentMatch":
            return N(e.snippet, t, 1)
          case "branchMatch":
            return N(e.branch, t, 2)
        }
      })(e.searchPreview, t)
      if (null != n) return n
      switch (e.kind) {
        case "local":
          return (
            (o.length >= 8 && e.threadId.toLowerCase().startsWith(o) ? N(e.threadId, t, 0) : null) ??
            N(e.branch, t, 2) ??
            N(e.projectLabel ?? "", t, 3) ??
            N(e.cwd, t, 3)
          )
        case "remote":
          return N(e.projectLabel ?? "", t, 3) ?? N(e.environmentLabel, t, 3)
        case "dot":
          return { fieldPriority: 1, score: 0, value: null }
        case "chatgpt":
          return null
      }
    }
    function I(e, t) {
      let o = e.match.fieldPriority - t.match.fieldPriority
      if (0 !== o) return o
      let a = t.match.score - e.match.score
      return 0 !== a ? a : t.result.updatedAt - e.result.updatedAt
    }
    function N(e, t, o) {
      let a = t(e)
      return 0 === a ? null : { fieldPriority: o, score: a, value: e }
    }
    function j(e, t) {
      let o = [],
        a = new Map()
      for (let n of [...e, ...t]) {
        let e = k(n),
          t = a.get(e)
        if (null == t) {
          ;(a.set(e, o.length), o.push(n))
          continue
        }
        let i = o[t]
        null == i.searchPreview && null != n.searchPreview && (o[t] = { ...i, searchPreview: n.searchPreview })
      }
      return o
    }
    function R(e, t, o) {
      if ("durable" !== (0, l._)(t)) return !1
      let { data: a } = e(g.cloudAeonByThreadId$, (0, r.JXB)(o))
      return a?.active_root_thread_id != null && a.active_root_thread_id !== o
    }
    o.d(
      t,
      {},
      {
        EI: function ({ loadedChatSearchResults: e, chatGptResults: t, isChatSelectable: o, limit: a }) {
          return j([...e, ...t], [])
            .filter(o)
            .sort((e, t) => t.updatedAt - e.updatedAt)
            .slice(0, a)
        },
        LU: k,
        MQ: function (e, t, o, a) {
          if (!t) return null
          let n = (0, m.WE)(t)
          return n(o) > 0 || n(a) > 0 ? null : (A(e, n, t.toLowerCase())?.value ?? null)
        },
        N6: function ({
          asyncResults: e,
          chatGptResults: t = [],
          isChatSelectable: o,
          loadedChatSearchResults: a,
          limit: n,
          query: i,
        }) {
          let c = e.map(P),
            r = j([...a, ...t], c)
          return (function (e, t, o) {
            if (o <= 0) return []
            let a = t.trim()
            if (0 === a.length) return []
            let n = [],
              i = (0, m.WE)(a),
              c = a.toLowerCase()
            for (let t of e) {
              let e = A(t, i, c)
              if (null == e) continue
              let a = { result: t, match: e }
              if (n.length < o) {
                n.push(a)
                continue
              }
              let r = (function (e) {
                let t = 0
                for (let o = 1; o < e.length; o += 1) 0 > I(e[t], e[o]) && (t = o)
                return t
              })(n)
              0 > I(a, n[r]) && (n[r] = a)
            }
            return n.sort(I).map(({ result: e }) => e)
          })(null == o ? r : r.filter(o), i, n)
        },
        T0: function (e, t) {
          var o
          let n,
            d = (0, a.c)(3),
            l = (0, c.Ul)(void 0 === t || t ? D : void 0)
          d[0] !== e || d[1] !== l
            ? ((n =
                null == l
                  ? void 0
                  : ((o = { ...l, conversationsMeta: [...(e ?? []), ...l.conversationsMeta] }),
                    (0, c.un)(
                      x.u,
                      ({ get: e }) =>
                        (function ({
                          cloudTasks: e,
                          conversationsMeta: t,
                          getSearchTitle: o,
                          hostIds: a,
                          projectLabelByThreadKey: n,
                        }) {
                          return [
                            ...t
                              .filter(
                                (e) =>
                                  a.has(e.hostId ?? w.fI) &&
                                  (null == e.source || "string" == typeof e.source || !("subAgent" in e.source)),
                              )
                              .map((e) => {
                                let t = e.cwd ?? "",
                                  a = o(e),
                                  i = null == a || e.title?.trim() ? a : ((0, s.uw)(a, 60) ?? ""),
                                  c = (a ?? t) || e.conversationId,
                                  d = (0, r.JXB)(e.conversationId),
                                  l = (0, y.z3)(d)
                                return {
                                  kind: "local",
                                  threadKey: l,
                                  conversationId: d,
                                  hostId: e.hostId ?? w.fI,
                                  threadId: e.conversationId,
                                  title: i,
                                  searchTitle: c,
                                  cwd: t,
                                  branch: e.gitInfo?.branch ?? "",
                                  projectLabel: n?.get(l),
                                  hasUnreadTurn: e.hasUnreadTurn,
                                  isAeonThread: (0, p.N)(e.threadStartKind, e.threadSource),
                                  updatedAt: e.recencyAt ?? e.updatedAt,
                                  searchPreview: null,
                                }
                              }),
                            ...(e?.map((e) => {
                              let t = (0, y.Wz)(e.id),
                                o = (0, u.SX)(e.title ?? "") || null
                              return {
                                kind: "remote",
                                threadKey: t,
                                taskId: e.id,
                                title: o,
                                searchTitle: e.title ?? e.id,
                                environmentLabel: e.task_status_display?.environment_label ?? "",
                                projectLabel: n?.get(t),
                                hasUnreadTurn: e.has_unread_turn,
                                updatedAt: (e.updated_at ?? e.created_at ?? 0) * 1e3,
                                searchPreview: null,
                              }
                            }) ?? []),
                          ]
                        })({ ...o, getSearchTitle: (t) => (0, C.D)(e, t) })
                          .filter((t) => "local" !== t.kind || !t.isAeonThread || !R(e, t.hostId, t.threadId))
                          .map((t) => {
                            let o =
                              "local" === t.kind ? e(h.$P, { hostId: t.hostId, threadId: t.conversationId }) : null
                            return null == o ? t : { ...t, title: o, searchTitle: o }
                          }),
                      { isEqual: i() },
                    ))),
              (d[0] = e),
              (d[1] = l),
              (d[2] = n))
            : (n = d[2])
          let m = n
          return (0, c.Ul)(m) ?? []
        },
        er: S,
        hv: function ({ excludedThreadKeys: e, loadedChatSearchResults: t, limit: o, pinnedThreadIds: a }) {
          if (o <= 0) return { pinnedResults: [], recentResults: [] }
          let n = j(t, []).filter((t) => !e?.has(t.threadKey)),
            i = new Map()
          for (let e of n) {
            let t = (0, y.PK)(e.threadKey)
            if (null != t) {
              let o = i.get(t)
              null == o ? i.set(t, [e]) : o.push(e)
            }
          }
          let c = new Set(a),
            r = a.flatMap((e) => i.get(e) ?? []),
            s = n
              .filter((e) => {
                let t = (0, y.PK)(e.threadKey)
                return null == t || !c.has(t)
              })
              .sort((e, t) => t.updatedAt - e.updatedAt)
          return { pinnedResults: r.slice(0, o), recentResults: s.slice(0, Math.max(o - r.length, 0)) }
        },
        oB: function (e, t) {
          if ("chatgpt" === e.kind) return null
          if (null != e.searchPreview || "local" !== e.kind) return e.searchPreview
          let o = t.trim()
          if (0 === o.length) return null
          let a = (0, m.WE)(o)
          return a(e.searchTitle) > 0 || 0 === a(e.branch) ? null : { kind: "branchMatch", branch: e.branch }
        },
        qw: function ({
          currentThreadKey: e,
          loadedChatSearchResults: t,
          limit: o,
          recentThreadKeys: a,
          unreadThreadKeys: n,
          visibleThreadKeys: i,
        }) {
          if (o <= 0) return []
          let c = j(t, []),
            s = new Map(),
            d = new Map()
          for (let e of c) {
            ;(s.set(e.threadKey, e), s.set(_(e), e))
            let t = d.get(e.threadKey)
            if ((null == t ? d.set(e.threadKey, [e]) : t.push(e), "local" === e.kind)) {
              let t = (0, M.Uw)(e.conversationId)
              ;(0, r.L$F)(t) && s.set((0, y.z3)(t), e)
            }
          }
          let l = [],
            m = new Set(),
            u = (t) => {
              if (null == t) return
              if (null != i && !i.has(t.threadKey)) {
                if ("local" !== t.kind) return
                let e = (0, M.Uw)(t.conversationId)
                if (!(0, r.L$F)(e) || !i.has((0, y.z3)(e))) return
              }
              let a = _(t)
              a === e || m.has(a) || l.length === o || (m.add(a), l.push(t))
            },
            p = (e) => {
              u(s.get(e))
            }
          for (let e of n) {
            let t = s.get(e)
            null != t &&
              d.get(t.threadKey)?.forEach((e) => {
                u({ ...e, hasUnreadTurn: !0 })
              })
          }
          for (let e of a) p(e)
          for (let e of c.sort((e, t) => t.updatedAt - e.updatedAt)) u(e)
          return l
        },
        xH: function (e) {
          return (0, c.un)(
            x.u,
            ({ get: t }) =>
              e.filter((e) => !(0, p.N)(e.threadStartKind, e.threadSource) || !R(t, e.hostId, e.threadId)),
            { isEqual: i() },
          )
        },
      },
    )
  },
  bWRV(e, t, o) {
    var a = o("QosV"),
      n = o("zd8w")
    o.d(
      t,
      {},
      {
        I: function (e) {
          let t,
            o,
            i,
            c,
            r = (0, a.c)(11),
            { enabled: s, pending: d, search: l, searchEventLogger: m } = e
          ;(r[0] !== s || r[1] !== d || r[2] !== l || r[3] !== m
            ? ((t = () => {
                s && m.trackWorkspaceMemberSearch(l, d, d ? void 0 : 0)
              }),
              (o = [s, d, l, m]),
              (r[0] = s),
              (r[1] = d),
              (r[2] = l),
              (r[3] = m),
              (r[4] = t),
              (r[5] = o))
            : ((t = r[4]), (o = r[5])),
            (0, n.useLayoutEffect)(t, o),
            r[6] !== s || r[7] !== l || r[8] !== m
              ? ((i = () => {
                  if (s) return () => m.trackWorkspaceMemberSearch(l, !1)
                }),
                (c = [s, l, m]),
                (r[6] = s),
                (r[7] = l),
                (r[8] = m),
                (r[9] = i),
                (r[10] = c))
              : ((i = r[9]), (c = r[10])),
            (0, n.useLayoutEffect)(i, c))
        },
      },
    )
  },
  Fk6e(e, t, o) {
    var a = o("D7Ms"),
      n = o("SZCv"),
      i = o.n(n),
      c = o("zTeN"),
      r = o("ASxG"),
      s = o("SPnB"),
      d = o("eFn4"),
      l = o("Ghh3"),
      m = o("rTPf"),
      u = o("pyoT"),
      p = o("OWtl"),
      h = o("gqQv"),
      g = o("O666"),
      f = o("kpIY"),
      x = o("Nwp9"),
      M = o("rvFo")
    let w = (0, c.un)(p.u, ({ get: e }) => {
        let t = e(s.m0)
        if ("allowed" !== t.status || !("accountId" in t) || "workspace" !== t.accountStructure) return null
        let { data: o } = e(d.Jk, t.accountId)
        return o?.member_profiles_enabled !== !1 && o?.member_profiles_sharing === "workspace" ? t.accountId : null
      }),
      v = r.object({
        id: r.string().min(1),
        account_user_id: r.string().min(1),
        avatar_url: r
          .url({ protocol: /^https$/ })
          .nullable()
          .catch(null),
        name: r.string().nullable().default(null),
        profile_username: r.string().min(1),
        profile_url: r.string().regex(/^\/(?:w\/[^/\\?#]+\/|u\/)[^/\\?#]+$/),
      }),
      y = r.record(r.string(), r.unknown()),
      b = r.object({ member: v, openedAt: r.number(), confirmedAt: r.number() }),
      C = (0, x.Kn)((e) => e, void 0),
      T = (0, c.bD)(p.u, (e) => !1, {
        onMount(e, { key: t }) {
          let o = t - Date.now()
          if (o <= 0) return void e(!0)
          let a = setTimeout(() => e(!0), o)
          return () => clearTimeout(a)
        },
      }),
      S = (0, c.un)(p.u, ({ get: e }) => {
        let t = e(w),
          o = e(s.o8)
        return null != t &&
          t === e(s.chatGptAuthenticatedAccountId$) &&
          null != o &&
          o === e(s.chatGptAuthenticatedUserId$)
          ? `workspace-member-search-opens-v1:${JSON.stringify([t, o])}`
          : null
      }),
      D = (0, c.i1)(p.u, (e, { get: t }) => {
        let o = e.trim().toLowerCase()
        if (!o || "@" === o || o.length > 256) return []
        let a = t(S)
        return null == a
          ? []
          : Object.values(y.safeParse(t(C, a)).data ?? {})
              .reverse()
              .flatMap((e) => {
                let a = b.safeParse(e).data
                if (!a || !k(a.member, o)) return []
                let n = a.confirmedAt + 864e5
                return Date.now() < n && !t(T, n) ? [a] : []
              })
              .sort((e, t) => t.openedAt - e.openedAt)
              .slice(0, 5)
              .map(({ member: e }) => ({ ...e, email: null }))
      })
    function k(e, t) {
      return (
        !!e.name?.toLowerCase().includes(t) ||
        (0, h.oj)(e.profile_username).localUsername.toLowerCase().startsWith(t.replace(/^@/, ""))
      )
    }
    let P = R("command_menu_all_tab"),
      _ = R("command_menu_people_tab"),
      A = R("profile_page"),
      I = (0, c.vU)(p.u, (e, { get: t, scope: o }) => {
        let n = t(w),
          i = t(s.o8),
          c = e.trim()
        return {
          queryKey: ["workspace-member-search", n, i, c],
          queryFn:
            null == n || null == i || 0 === c.length || c.length > 256
              ? a.hT
              : ({ signal: e }) => j({ scope: o, accountId: n, limit: 10, offset: 0, query: c, signal: e, userId: i }),
          staleTime: M.D.ONE_MINUTE,
          retry: !1,
        }
      }),
      N = (0, c.N3)(p.u, (e, { get: t, scope: o }) => {
        let n = t(w),
          i = t(s.o8),
          c = e.trim()
        return {
          queryKey: ["workspace-member-search-pages", n, i, c],
          initialPageParam: 0,
          queryFn:
            null == n || null == i || 0 === c.length || c.length > 256
              ? a.hT
              : ({ pageParam: e, signal: t }) =>
                  j({ scope: o, accountId: n, limit: 20, offset: e, query: c, signal: t, userId: i }),
          getNextPageParam: (e) => (e.has_more ? e.offset + e.limit : void 0),
          staleTime: M.D.ONE_MINUTE,
          retry: !1,
        }
      })
    async function j({ scope: e, accountId: t, limit: o, offset: a, query: n, signal: c, userId: r }) {
      let d = e.get(S),
        p = null == d ? void 0 : (0, f.TB)(d),
        h = await l.Request.safeGet("/spaces/people", {
          expectedIdentity: { accountId: t, userId: r },
          parameters: {
            query: { account_id: t, include_profile_details: !0, profiles_only: !0, query: n, limit: o, offset: a },
          },
          expectedErrorStatuses: [403, 404],
          signal: c,
        })
      if ((c.throwIfAborted(), e.get(u.spaceAccountId$) === t && e.get(s.chatGptAuthenticatedUserId$) === r))
        for (let t of (null != p &&
          null != d &&
          e.get(S) === d &&
          (function (e, t, o, a) {
            let n = y.safeParse(t).data
            if (!n) return
            let c = y.safeParse((0, f.TB)(e)).data,
              r = {}
            for (let [e, t] of Object.entries(n)) {
              let n = b.safeParse(t).data,
                s = c?.[e],
                d = b.safeParse(s).data
              if (!d || !n || d.confirmedAt !== n.confirmedAt || !i()(d.member, n.member)) continue
              let l = a.items.find((t) => t.account_user_id === e)
              if (l) {
                let t = v.safeParse(l).data
                t
                  ? (r[e] = { expectedValue: s, value: { ...d, member: t, confirmedAt: Date.now() }, updateOnly: !0 })
                  : (r[e] = { delete: !0, expectedValue: s })
              } else
                0 === a.offset &&
                  !a.has_more &&
                  "@" !== o &&
                  k(d.member, o.toLowerCase()) &&
                  (r[e] = { delete: !0, expectedValue: s })
            }
            Object.keys(r).length > 0 && (0, f.EG)(e, { entries: r })
          })(d, p, n, h),
        h.items))
          t.avatar_url && e.query.setData(m.Ks, t.account_user_id, (e) => ({ ...e, ...t }))
      return h
    }
    function R(e) {
      return (0, c.un)(p.u, ({ get: t }) => null != t(w) && t(g.H$, { layer: "1030612179", parameter: e }))
    }
    o.d(
      t,
      {},
      {
        B5: function (e, t, o = !1) {
          let a = e.get(S),
            n = v.safeParse(t).data
          if (null == a || null == n) return
          let i = Date.now(),
            c = n.account_user_id,
            r = { value: { member: n, openedAt: i, confirmedAt: i } }
          if (o) {
            let e = y.safeParse((0, f.TB)(a)).data?.[c],
              t = b.safeParse(e).data
            if (!t) return
            r = { expectedValue: e, value: { ...t, openedAt: i } }
          }
          ;(0, f.EG)(a, { entries: { [c]: r }, maxEntries: 5, timestampField: "openedAt" })
        },
        CD: w,
        Iq: D,
        O: I,
        Pz: _,
        dE: P,
        k1: N,
        p6: A,
      },
    )
  },
  Nz3U(e, t, o) {
    var a = o("ABep"),
      n = o("QosV"),
      i = o("zd8w"),
      c = o("Wf1j"),
      r = o("SgPg"),
      s = o("LhhH"),
      d = o("X3K1"),
      l = o("gqQv"),
      m = o("hlYN"),
      u = o("N0P0")
    o.d(
      t,
      {},
      {
        I: function (e) {
          let t,
            o,
            p,
            h,
            g,
            f,
            x,
            M,
            w,
            v,
            y,
            b,
            C,
            T,
            S,
            D = (0, n.c)(48),
            { avatarSize: k, member: P, onResult: _, query: A } = e,
            I = void 0 === k ? "md" : k,
            N = (0, c.A)(),
            j = (0, i.useRef)(null),
            R = null != _
          D[0] !== _ ? ((t = (e) => _?.(e)), (D[0] = _), (D[1] = t)) : (t = D[1])
          let E = (0, i.useEffectEvent)(t)
          ;(D[2] !== R || D[3] !== E
            ? ((o = () => {
                R && E("received")
              }),
              (D[2] = R),
              (D[3] = E),
              (D[4] = o))
            : (o = D[4]),
            D[5] !== R || D[6] !== P || D[7] !== A
              ? ((p = [R, P, A]), (D[5] = R), (D[6] = P), (D[7] = A), (D[8] = p))
              : (p = D[8]),
            (0, i.useLayoutEffect)(o, p),
            D[9] !== R || D[10] !== E
              ? ((h = () => {
                  let e
                  if (!R) return
                  let t = j.current
                  if (null == t || "u" < typeof IntersectionObserver) return
                  let o = window.setTimeout(() => {
                    e = (0, u.D)(t, () => E("impression"))
                  }, 250)
                  return () => {
                    ;(window.clearTimeout(o), e?.())
                  }
                }),
                (D[9] = R),
                (D[10] = E),
                (D[11] = h))
              : (h = D[11]),
            D[12] !== R || D[13] !== P.account_user_id || D[14] !== A
              ? ((g = [R, P.account_user_id, A]), (D[12] = R), (D[13] = P.account_user_id), (D[14] = A), (D[15] = g))
              : (g = D[15]),
            (0, i.useLayoutEffect)(h, g),
            D[16] !== P.email ? ((f = P.email?.trim()), (D[16] = P.email), (D[17] = f)) : (f = D[17]))
          let O = f
          if (D[18] !== N || D[19] !== P.profile_username) {
            let e = P.profile_username?.trim()
            ;((x = e
              ? N.formatMessage(
                  {
                    id: "profile.usernameValue",
                    defaultMessage: "@{username}",
                    description: "Profile username shown with an at-sign prefix",
                  },
                  { username: (0, l.oj)(e).localUsername },
                )
              : null),
              (D[18] = N),
              (D[19] = P.profile_username),
              (D[20] = x))
          } else x = D[20]
          let F = x
          D[21] !== O || D[22] !== N || D[23] !== P.name || D[24] !== F
            ? ((M =
                P.name?.trim() ||
                O ||
                F ||
                N.formatMessage({
                  id: "codex.commandMenu.unnamedWorkspaceMember",
                  defaultMessage: "Workspace member",
                  description:
                    "Fallback label for a workspace member in search results when their name, email, and username are unavailable",
                })),
              (D[21] = O),
              (D[22] = N),
              (D[23] = P.name),
              (D[24] = F),
              (D[25] = M))
            : (M = D[25])
          let B = M,
            G = F ?? O
          return (
            D[26] === Symbol.for("react.memo_cache_sentinel")
              ? ((w = (0, a.jsx)("span", {
                  className: "size-full overflow-hidden rounded-full",
                  children: (0, a.jsx)(d.X, { as: "span", size: "fill" }),
                })),
                (D[26] = w))
              : (w = D[26]),
            D[27] !== I
              ? ((v = (0, a.jsx)(s.e, { alt: "", fallbackIcon: w, name: null, size: I, src: null })),
                (D[27] = I),
                (D[28] = v))
              : (v = D[28]),
            D[29] !== I || D[30] !== P.account_user_id || D[31] !== P.avatar_url || D[32] !== B || D[33] !== v
              ? ((y = (0, a.jsx)(r.T, {
                  avatarUrl: P.avatar_url,
                  colorKey: P.account_user_id,
                  loadingFallback: v,
                  name: B,
                  size: I,
                })),
                (D[29] = I),
                (D[30] = P.account_user_id),
                (D[31] = P.avatar_url),
                (D[32] = B),
                (D[33] = v),
                (D[34] = y))
              : (y = D[34]),
            D[35] !== B || D[36] !== A
              ? ((b = (0, a.jsx)("span", {
                  className: "truncate text-sm leading-5 text-default",
                  children: (0, a.jsx)(m.D, { highlightClassName: "font-semibold text-default", query: A, text: B }),
                })),
                (D[35] = B),
                (D[36] = A),
                (D[37] = b))
              : (b = D[37]),
            D[38] !== B || D[39] !== A || D[40] !== G
              ? ((C =
                  G && G !== B
                    ? (0, a.jsx)("span", {
                        className: "truncate text-xs text-secondary",
                        children: (0, a.jsx)(m.D, {
                          highlightClassName: "font-medium text-default",
                          query: A,
                          text: G,
                        }),
                      })
                    : null),
                (D[38] = B),
                (D[39] = A),
                (D[40] = G),
                (D[41] = C))
              : (C = D[41]),
            D[42] !== b || D[43] !== C
              ? ((T = (0, a.jsxs)("span", {
                  ref: j,
                  className: "flex min-w-0 flex-1 flex-col gap-0.5 select-none",
                  children: [b, C],
                })),
                (D[42] = b),
                (D[43] = C),
                (D[44] = T))
              : (T = D[44]),
            D[45] !== y || D[46] !== T
              ? ((S = (0, a.jsxs)(a.Fragment, { children: [y, T] })), (D[45] = y), (D[46] = T), (D[47] = S))
              : (S = D[47]),
            S
          )
        },
      },
    )
  },
  gLoR(e, t, o) {
    var a = o("i5ac"),
      n = o.n(a),
      i = o("zTeN"),
      c = o("Qgfj"),
      r = o("SPnB"),
      s = o("OWtl"),
      d = o("UR81"),
      l = o("Fk6e")
    let m = (0, c.zR)({
        id: "profile.workspaceSearch.resultsLabel",
        defaultMessage: "Explore profiles",
        description: "Heading above workspace profile search results",
      }),
      u = (0, i.un)(s.u, ({ get: e }) => {
        let t = e(r.e0)
        return null != t && "unknown" !== t && !(0, d.J8)(t) && null != e(l.CD) && null != e(r.o8)
      }),
      p = (0, i.i1)(s.u, ({ search: e, debouncing: t }, { get: o }) => {
        let a = null != e && (e.length > 0 || o(u)),
          i = e || "@",
          c = a && !t && i.length <= 256 ? o(l.k1, i) : null,
          r = n()(
            c?.data?.pages.flatMap(({ items: e }) =>
              e.flatMap((e) => {
                let t = e.profile_url?.trim()
                return t ? [{ member: e, profileUrl: t }] : []
              }),
            ) ?? [],
            ({ member: e }) => e.account_user_id,
          )
        return {
          members: r,
          hasLoadedResults: c?.data != null,
          showSearchResults: a,
          isLoading: a && (t || (0 === r.length && null != c && (c.isPending || c.isFetching))),
          isError: c?.isError === !0 && null == c.data,
          hasNextPage: c?.hasNextPage === !0 && !c.isFetchNextPageError,
          isFetchingNextPage: c?.isFetchingNextPage === !0,
          isFetchNextPageError: c?.isFetchNextPageError === !0,
          fetchNextPage: () => {
            c?.fetchNextPage()
          },
        }
      })
    o.d(
      t,
      {},
      {
        E8: p,
        RE: m,
        Vh: function (e) {
          e.get(u) &&
            null == e.query.getData(l.k1, "@") &&
            e.queryClient.prefetchInfiniteQuery({ ...e.query.getOptions(l.k1, "@"), pages: 1 })
        },
      },
    )
  },
  nRNm(e, t, o) {
    var a = o("ABep"),
      n = o("QosV"),
      i = o("zd8w"),
      c = o("UN1G")
    o.d(
      t,
      {},
      {
        _: function (e) {
          let t,
            o,
            r,
            s,
            d,
            l,
            m = (0, n.c)(15),
            { text: u, query: p, shouldAdjustStart: h } = e,
            g = void 0 !== h && h
          if (m[0] !== p || m[1] !== g || m[2] !== u) {
            d = Symbol.for("react.early_return_sentinel")
            e: {
              let e = (0, c.d7)(u, p)
              if (null == e || 0 === e.length) {
                let e
                ;(m[8] !== u ? ((e = (0, a.jsx)(a.Fragment, { children: u })), (m[8] = u), (m[9] = e)) : (e = m[9]),
                  (d = e))
                break e
              }
              let n = g ? e[0].startOffset - Array.from(u.slice(0, e[0].startOffset)).slice(-8).join("").length : 0
              ;((t = "text-codex-description"),
                (o = n > 0 ? "…" : ""),
                (r = e.map((t, o) => {
                  let { startOffset: c, endOffset: r } = t
                  return (0, a.jsxs)(
                    i.Fragment,
                    {
                      children: [
                        u.slice(0 === o ? n : e[o - 1].endOffset, c),
                        (0, a.jsx)("span", { className: "text-default", children: u.slice(c, r) }),
                      ],
                    },
                    c,
                  )
                })),
                (s = u.slice(e[e.length - 1].endOffset)))
            }
            ;((m[0] = p), (m[1] = g), (m[2] = u), (m[3] = t), (m[4] = o), (m[5] = r), (m[6] = s), (m[7] = d))
          } else ((t = m[3]), (o = m[4]), (r = m[5]), (s = m[6]), (d = m[7]))
          return d !== Symbol.for("react.early_return_sentinel")
            ? d
            : (m[10] !== t || m[11] !== o || m[12] !== r || m[13] !== s
                ? ((l = (0, a.jsxs)("span", { className: t, children: [o, r, s] })),
                  (m[10] = t),
                  (m[11] = o),
                  (m[12] = r),
                  (m[13] = s),
                  (m[14] = l))
                : (l = m[14]),
              l)
        },
      },
    )
  },
  pYUv(e, t, o) {
    var a = o("zKw6"),
      n = o.n(a),
      i = o("DBCl"),
      c = o("bnxy")
    o.d(
      t,
      {},
      {
        $e: function (e) {
          return e.filter((t, o) => {
            let a = n().posix.normalize((0, c.XH)(t))
            return e.every((e, t) => {
              if (t === o) return !0
              let i = n().posix.normalize((0, c.XH)(e))
              return i === a ? t > o : !a.startsWith("/" === i ? i : `${i}/`)
            })
          })
        },
        Bw: function ({
          codexHome: e,
          executionCwd: t,
          isWorktreeMode: o,
          projectRootPaths: a,
          workspaceBrowserRoot: n,
        }) {
          return null != t && (o || (0, i.n9x)(t, e ?? void 0))
            ? [t, ...(0, i.gYy)(a)]
            : a.length > 0
              ? a
              : null == n
                ? []
                : [n]
        },
        pK: function ({
          activeWorkspaceRootPaths: e,
          executionRootPaths: t,
          isProjectless: o,
          isWorktreeMode: a,
          readThreadToolAvailable: n,
        }) {
          if (n) return a ? t : o ? [] : [...e, ...t]
        },
      },
    )
  },
  JM0a(e, t, o) {
    o.d(t, { l: () => p, H: () => u })
    var a = o("zTeN"),
      n = o("lAmT"),
      i = o("WiNP"),
      c = o("aqTO"),
      r = o("Oj9r"),
      s = o("nf3G"),
      d = o("pYUv")
    let l = (0, a.un)(r.GD, ({ get: e, scope: t }) => {
        let o = e(i.V8, {
          conversationId: "local-thread" === t.value.routeKind ? t.value.conversationId : null,
          hostId: e(s.threadHostId$),
        })?.data?.latestWorktree
        return null == o ? (0, d.$e)(e(c.Xi)) : [o.workspaceRoot]
      }),
      m = (0, a.vP)(r.GD, null),
      u = (0, a.un)(r.GD, ({ get: e }) => {
        let t = e(s.threadHostId$),
          o = e(l),
          a = e(m),
          i = a?.projectKey === JSON.stringify([t, o]) ? a.target : null,
          c = "root" !== e(n.az) ? i : null
        return {
          selectedHostId: i?.hostId ?? t,
          hostId: c?.hostId ?? t,
          roots: null == c ? o : [c.root],
          directory: c?.root ?? null,
          projectRoots: null != c && c.hostId !== t ? [c.root] : o,
        }
      })
    function p(e, t) {
      e.set(m, null == t ? null : { projectKey: JSON.stringify([e.get(s.threadHostId$), e.get(l)]), target: t })
    }
  },
  ubby(e, t, o) {
    var a = o("SRbQ"),
      n = o("zTeN"),
      i = o("GaA7"),
      c = o("OWtl")
    let r = (0, o("Nwp9").m3)("files-content-search-history", []),
      s = (0, n.A4)(
        c.u,
        (e) => ({ matches: [], loading: e.query.trim().length > 0, limited: !1, error: null }),
        (e, { set: t }) => {
          let o,
            n = i.appServices.workspaceSearch
          if (!e.query.trim() || null == n) return
          let c = !1,
            r = setTimeout(() => {
              ;(async () => {
                let i = { stack: [], error: void 0, hasError: !1 }
                try {
                  let r = (0, a.mS)(i, await n.search(e), !1)
                  if (c) return void (await r.cancel())
                  o = r.getReader()
                  let s = []
                  try {
                    for (;;) {
                      let { done: e, value: a } = await o.read()
                      if (e || c) break
                      "match" === a.type
                        ? (s.push(a.match), t({ matches: [...s], loading: !0, limited: !1, error: null }))
                        : t({
                            matches: s,
                            loading: !1,
                            limited: "done" === a.type && a.limited,
                            error: "error" === a.type ? a.code : null,
                          })
                    }
                  } finally {
                    ;(o.releaseLock(), (o = void 0))
                  }
                } catch (e) {
                  ;((i.error = e), (i.hasError = !0))
                } finally {
                  ;(0, a.hk)(i)
                }
              })().catch(() => {
                c || t({ matches: [], loading: !1, limited: !1, error: "search-failed" })
              })
            }, 50)
          return () => {
            ;((c = !0), clearTimeout(r), o?.cancel().catch(() => {}))
          }
        },
        { autoDispose: !0 },
      )
    o.d(t, {}, { P: s, n: r })
  },
  DIdv(e, t, o) {
    var a = o("w7Qu"),
      n = o("bWX0")
    let i = /^external-gdrive:file:([A-Za-z0-9_-]+)$/u,
      c = new Map([
        ["application/vnd.google-apps.document", "document"],
        ["application/vnd.google-apps.presentation", "presentation"],
        ["application/vnd.google-apps.spreadsheet", "spreadsheets"],
        ["application/vnd.openxmlformats-officedocument.presentationml.presentation", "presentation"],
        ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "spreadsheets"],
        ["application/vnd.openxmlformats-officedocument.wordprocessingml.document", "document"],
      ]),
      r = new Set([
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
      d = new Map([
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
        let e = d.get(t)
        if (null != e) return e
      }
      let o = (null == e.file_extension ? null : (0, a.Yg)(`file.${e.file_extension}`)) ?? (0, a.Yg)(e.file_name)
      switch (o) {
        case "csv":
        case "docx":
        case "ipynb":
        case "pptx":
        case "tsv":
        case "xlsx":
          return o
        case "pdf":
        case "tex":
        case null:
          return null
      }
    }
    function m(e) {
      return e.mime_type?.split(";")[0]?.trim().toLowerCase() || null
    }
    o.d(
      t,
      {},
      {
        CR: function (e) {
          var t, o, a, i
          let c, d, u
          if ("deep_research_report" === e.library_artifact_type) return "deep-research"
          if (((c = m((t = e))), "image" === t.library_file_category || c?.startsWith("image/") === !0)) return "image"
          if (
            ((d = m((o = e))), "pdf" === o.library_file_category || "application/pdf" === d || (0, n.ZH)(o.file_name))
          )
            return "pdf"
          if (null != l(e)) return "artifact"
          let p = e.file_extension ? `${e.file_name}.${e.file_extension}` : e.file_name
          if ((0, n.e$)(p) || "text/markdown" === m(e)) return "markdown"
          let h = (0, n.Zo)(p)
          return "html" === h || "htm" === h || "text/html" === m(e)
            ? "html"
            : ((a = e),
                (i = h),
                (u = m(a)),
                "text" === a.library_file_category ||
                  u?.startsWith("text/") === !0 ||
                  (null != u && s.has(u)) ||
                  (null != i && r.has(i)))
              ? "text"
              : "unsupported"
        },
        FE: l,
        gv: function ({ fileId: e, mimeType: t, sourceUrl: o }) {
          let a = i.exec(e)?.[1],
            n = t?.split(";")[0]?.trim().toLowerCase(),
            r = null == n ? void 0 : c.get(n)
          if (null == a || null == r) return null
          let s = `https://docs.google.com/${r}/d/${a}/preview`
          if (null == o) return s
          if (!URL.canParse(o)) return null
          let d = new URL(o),
            l = d.searchParams.get("resourcekey")
          return null == l
            ? s
            : "https://docs.google.com" !== d.origin && "https://drive.google.com" !== d.origin
              ? null
              : `${s}?${new URLSearchParams({ resourcekey: l })}`
        },
      },
    )
  },
  GJ52(e, t, o) {
    var a = o("IgxH")
    o.d(t, { h: () => a.h })
  },
  tUjg(e, t, o) {
    let a = (0, o("Qgfj").YK)({
      pageOpenFailed: {
        id: "codex.chatGptSearch.pageOpenFailed",
        defaultMessage: "Unable to open this page",
        description: "Toast when a Page selected from global search cannot be opened in its Space",
      },
      dialogDescriptionWithSpaces: {
        id: "codex.chatGptSearch.dialogDescriptionWithSpaces",
        defaultMessage: "Search your chats, projects, images, documents, and spaces",
        description:
          "Visually hidden description for global search when Pages and files in Spaces are included. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
      },
      spaceFile: {
        id: "codex.chatGptSearch.spaceFile",
        defaultMessage: "File in Space",
        description:
          "Result-type label beside a file found in a Space in global search. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
      },
    })
    o.d(t, {}, { h: a })
  },
  idI8(e, t, o) {
    var a = o("khOd"),
      n = o("eShZ"),
      i = o("r9ga"),
      c = o("pyoT")
    o.d(
      t,
      {},
      {
        openGlobalSearchSpacePage: async function (e, t, o, r, s, d) {
          let l, m
          if (!s()) return
          let u = e.get(c.spaceAccountId$)
          if (null != u) {
            if (null != r.space_id)
              try {
                let t = await e.queryClient.fetchQuery({
                  ...e.query.getOptions(c.spaceQuery$, r.space_id),
                  staleTime: 0,
                })
                if (null == t.root_page_id) throw Error("space_unavailable")
                l = t.root_page_id
              } catch (e) {
                if (!(e instanceof n.fk) || ![403, 404, 410].includes(e.status)) throw e
                m = e
              }
            if (null == l) {
              if (!s()) return
              let o = await e.queryClient.fetchQuery({
                ...e.query.getOptions(c.spacePageAncestryQuery$, r.page_id),
                staleTime: 0,
              })
              if (o.metadata.page_id !== r.page_id || !o.metadata.access.can_read || null != o.metadata.deleted_at)
                throw m ?? Error("page_unavailable")
              if (s()) {
                if (null != d) return void d(r.page_id)
                let o = { spaceSidebarAccountId: u, sidebarArea: e.get(a.GB) ? "space" : void 0 }
                t((0, i.mI)(e, r.page_id), { state: o })
              }
              return
            }
            if (s()) {
              if (null != d) return void d(r.page_id)
              ;(0, i.C_)(e, t, o, u, l, r.page_id)
            }
          }
        },
      },
    )
  },
  rTPf(e, t, o) {
    var a = o("CpsU"),
      n = o.n(a),
      i = o("zTeN"),
      c = o("DBCl"),
      r = o("SPnB"),
      s = o("Ghh3"),
      d = o("pyoT"),
      l = o("AOG7"),
      m = o("OWtl"),
      u = o("Wuyk"),
      p = o("rvFo")
    let h = (0, i.T1)(m.u, ({ accountId: e, userId: t }, { scope: o }) => {
        let a = null
        return (i, r) => {
          r.throwIfAborted()
          let l = (0, c.udX)()
          if (a?.account?.signal.aborted || null == a) {
            let c = { lookups: [{ accountUserId: i, signal: r, result: l }] }
            a = c
            let m = (0, d.watchSpaceAccount)(o, e, t)
            ;((c.account = m),
              setTimeout(() => {
                a === c && (a = null)
                let t = c.lookups.filter((e) => !e.signal.aborted || (e.result.reject(e.signal.reason), !1))
                Promise.all(
                  n()(t, 50).map(async (t) => {
                    try {
                      m.signal.throwIfAborted()
                      let o = await s.Request.safeGet("/spaces/people", {
                        parameters: {
                          query: {
                            account_id: e,
                            include_profile_details: !0,
                            account_user_ids: t.map((e) => e.accountUserId),
                            limit: t.length,
                          },
                        },
                        signal: m.signal,
                      })
                      for (let e of (m.signal.throwIfAborted(), t))
                        e.result.resolve(o.items.find((t) => t.account_user_id === e.accountUserId) ?? null)
                    } catch (e) {
                      for (let o of t) o.result.reject(e)
                    }
                  }),
                ).finally(m.stop)
              }, 0))
          } else a.lookups.push({ accountUserId: i, signal: r, result: l })
          return l.promise
        }
      }),
      g = (0, i.vU)(m.u, (e, { get: t }) => {
        let o = t(d.spaceAccountId$),
          a = t(r.chatGptAuthenticatedUserId$),
          n = t(r.kf),
          i = null == o ? null : t(h, { accountId: o, userId: a })
        return {
          enabled: null != o && null != a && "loaded" === n.status && "workspace" === n.structure,
          queryKey: ["space-person", o, a, e],
          staleTime: 3e5,
          retry: u.kh,
          refetchOnMount: !0,
          queryFn: async ({ signal: t }) => {
            if (null == i) throw Error("account id is required")
            let o = await i(e, t)
            return (t.throwIfAborted(), o)
          },
        }
      }),
      f = (0, i.vU)(m.u, (e, { get: t, scope: o }) => {
        let a = t(d.spaceAccountId$),
          n = t(r.chatGptAuthenticatedUserId$)
        return {
          enabled: null != a && e.length > 0,
          queryKey: ["space-people", a, n, e],
          staleTime: p.D.THIRTY_SECONDS,
          gcTime: p.D.ONE_MINUTE,
          retry: u.kh,
          refetchOnMount: !0,
          queryFn: async ({ signal: t }) => {
            if (
              (await new Promise((e, o) => {
                let a = () => {
                    ;(clearTimeout(n), o(new DOMException("Aborted", "AbortError")))
                  },
                  n = setTimeout(() => {
                    ;(t.removeEventListener("abort", a), e())
                  }, 150)
                ;(t.addEventListener("abort", a, { once: !0 }), t.aborted && a())
              }),
              null == a)
            )
              throw Error("account id is required")
            let i = (0, d.watchSpaceAccount)(o, a, n),
              c = AbortSignal.any([t, i.signal])
            try {
              c.throwIfAborted()
              let t = await (0, l.We)(a, e, c)
              for (let e of (c.throwIfAborted(), t)) {
                let t = o.query.snapshot(g, e.account_user_id),
                  a = t.getData(),
                  n = e.profile_username === a?.profile_username,
                  i = {
                    ...a,
                    ...e,
                    name: e.name ?? a?.name ?? null,
                    profile_username: n ? a?.profile_username : null,
                    profile_url: n ? a?.profile_url : null,
                  }
                ;((i.avatar_url = i.avatar_url ?? a?.avatar_url),
                  t.setData(i, { updatedAt: n ? (o.queryClient.getQueryState(t.queryKey)?.dataUpdatedAt ?? 0) : 0 }))
              }
              return t.map((e) => ({ ...e, name: e.name ?? null }))
            } finally {
              i.stop()
            }
          },
        }
      }),
      x = (0, i.i1)(m.u, (e, { get: t }) =>
        null == e || null == t(d.spaceAccountId$) ? null : (t(g, e).data?.avatar_url ?? null),
      ),
      M = (0, i.i1)(m.u, (e, { get: t }) => (null == e ? null : t(g, e).data?.name?.trim() || null))
    o.d(t, {}, { DC: f, Ks: g, ik: M, tg: x })
  },
  ZsYZ(e, t, o) {
    var a = o("SZCv"),
      n = o.n(a),
      i = o("zTeN"),
      c = o("RaBo"),
      r = o("SPnB"),
      s = o("OWtl"),
      d = o("khOd"),
      l = o("OMIV"),
      m = o("eShZ"),
      u = o("PVyj"),
      p = o("v4UZ"),
      h = o("N8b3"),
      g = o("e1xH"),
      f = o("jAir"),
      x = o("MdGo"),
      M = o("MvVt"),
      w = o("ELpK"),
      v = o("pyoT")
    let y = (0, i.un)(s.u, ({ get: e }) => e(v.spacesQuery$).data?.items.map((e) => e.root_page_id), { isEqual: n() }),
      b = (0, i.un)(
        s.u,
        ({ get: e }) => {
          if (!e(d.GB)) return
          let t = e(y),
            o = e(u.aP, { accountId: e(v.spaceAccountId$), userId: e(r.chatGptAuthenticatedUserId$) }),
            a = e(l.JW, "2881922323") && "available" === e(c.ND),
            n = new Set([
              ...(t ?? []),
              ...e(v.pinnedSpacePageIds$),
              ...e(S).map((e) => e.id),
              ...(0 === o.length ? [] : (0, u.p9)(e(v.visibleSpacePages$)?.items ?? [], o)),
            ]),
            i = e(M.QI)
          return i
            ?.filter(({ id: o, file: i }) => {
              if (null != i) {
                if ("site" !== i.node.library_artifact_type) return !0
                let e = i.node.site_metadata
                return a && e?.status === "active" && !!e.live_url && null == i.node.trashed_at
              }
              if (null == t && e(v.spacesQuery$).isError) return !1
              let c = e(x.rk, { source: { kind: "catalog" }, pageId: o }) ?? e(v.loadedSpacePageMetadata$, o)
              return (
                !n.has(o) &&
                (null == c || (null == c.deleted_at && c.access.can_read && (e(g.bd) || null == c.site_project_id)))
              )
            })
            .map(({ id: e, file: t }) => ({ id: e, file: t }))
        },
        { isEqual: n() },
      ),
      C = (0, i.i1)(s.u, (e, { get: t }) => t(M.QI)?.find((t) => t.id === e)?.pageTitle),
      T = (0, i.i1)(
        s.u,
        (e, { get: t }) => {
          let { data: o } = t(v.spacePageAncestryQuery$, e),
            a = o?.metadata.access.can_read
              ? o.metadata
              : (t(x.rk, { source: { kind: "catalog" }, pageId: e }) ?? o?.metadata)
          if (null != a && null == a.deleted_at && a.access.can_read && (t(g.bd) || null == a.site_project_id)) return a
        },
        { isEqual: n() },
      ),
      S = (0, i.un)(s.u, ({ get: e }) => e(h.TA).map(({ id: e, serverSpaceId: t }) => ({ id: e, serverSpaceId: t })), {
        isEqual: n(),
      }),
      D = (0, i.i1)(s.u, (e, { get: t }) => t(h.TA).find((t) => t.id === e), { isEqual: n() }),
      k = (0, i.i1)(
        s.u,
        (e, { get: t }) => {
          let o = t(v.spacePageContext$, e)
          return {
            rootPageId: null === o.space ? null : o.space?.root_page_id,
            missingAncestorPageId: o.missingAncestorPageId,
          }
        },
        { isEqual: n() },
      ),
      P = (0, i.un)(
        s.u,
        ({ get: e }) =>
          e(M.QI)?.some(({ id: t, file: o }) => {
            if (null != o) return !1
            let a = e(x.rk, { source: { kind: "catalog" }, pageId: t }) ?? e(v.loadedSpacePageMetadata$, t)
            if (null != a) return null != a.deleted_at || !a.access.can_read
            let { error: n, errorUpdatedAt: i } = e(v.spacePageAncestryQuery$, t, { enabled: !1 })
            return (
              n instanceof m.fk &&
              [403, 404, 410].includes(n.status) &&
              i > 0 &&
              e(M.rC, { enabled: !1 }).dataUpdatedAt > i
            )
          }) ?? !1,
      ),
      _ = (0, i.i1)(
        s.u,
        (e, { get: t }) => {
          let o = t(v.spacesQuery$)
          return {
            hasListedPages: e && t(v.spacePagesComplete$),
            hasMorePages: e && t(v.spacePagesHasMore$),
            hasCatalogTree: null != o.data || null != t(v.spacePageTreeSpaces$),
            hasPages: e && null != t(v.visibleSpacePages$),
            hasSpaces: null != o.data,
            spacesError: o.isError,
          }
        },
        { isEqual: n() },
      ),
      A = (0, i.i1)(
        s.u,
        ({ personal: e, browse: t, rootPageId: o, query: a = "" }, { get: n }) => {
          let i = n(x.c, { kind: "catalog" }),
            c = i?.spaces.find((e) => e.rootPageId === o),
            r = new Set(i?.allLoosePageIds),
            s = n(v.visibleSpacePages$)?.items,
            d = e && n(p.T).incremental_discovery && a.trim() ? n(w.JC, a) : void 0,
            l = d?.data,
            m = new Map(s?.map((e) => [e.page_id, e]))
          for (let e of l ?? []) {
            let t = e
            for (let o of [m.get(e.page_id), n(v.loadedSpacePageMetadata$, e.page_id)])
              null != o &&
                (!o.access.can_read ||
                  null != o.deleted_at ||
                  (t.access.can_read && null == t.deleted_at && (0, f.gN)(o, t))) &&
                (t = o)
            ;(m.set(t.page_id, t),
              null == t.drive_space_id && "space" !== t.drive_scope ? r.add(t.page_id) : r.delete(t.page_id))
          }
          let u =
            null == s && null == l
              ? void 0
              : Array.from(m.values()).filter(
                  (a) =>
                    null == a.deleted_at &&
                    a.access.can_read &&
                    (n(g.bd) || null == a.site_project_id) &&
                    (e
                      ? r.has(a.page_id)
                      : t ||
                        a.page_id === o ||
                        (null != c && i?.spaceIdsByPageId.get(a.page_id)?.has(c.spaceId) === !0)),
                )
          return {
            pages: u,
            spaces: n(v.spacesQuery$).data?.items.filter((a) => !e && (t || a.root_page_id === o)),
            pagesById: new Map(u?.map((e) => [e.page_id, e])),
            serverDataUpdatedAt: d?.dataUpdatedAt ?? 0,
          }
        },
        { isEqual: n() },
      )
    o.d(t, {}, { $L: T, AA: D, Dr: k, E7: _, IF: b, Ri: C, bn: S, cl: P, up: A })
  },
  mSaF(e, t, o) {
    var a = o("iRMi"),
      n = o("yGJW")
    let i = {
      command_menu_all: a.CodexProfileViewEntryPoint.CODEX_PROFILE_VIEW_ENTRY_POINT_COMMAND_MENU_ALL,
      command_menu_people: a.CodexProfileViewEntryPoint.CODEX_PROFILE_VIEW_ENTRY_POINT_COMMAND_MENU_PEOPLE,
      profile_search: a.CodexProfileViewEntryPoint.CODEX_PROFILE_VIEW_ENTRY_POINT_PROFILE_SEARCH,
    }
    o.d(
      t,
      {},
      {
        y: function (e, t) {
          return ((0, n.yy)(e, a.CodexProfilePageEntrypointClicked, { source: t }), { profileEntryPoint: i[t] })
        },
      },
    )
  },
  AOG7(e, t, o) {
    var a = o("QosV"),
      n = o("T0Rc"),
      i = o("EOo5"),
      c = o("rvFo"),
      r = o("HFSu"),
      s = o("GEsy"),
      d = o("eShZ")
    async function l(e, t, o, { includeProfilePhotos: a = !1, includeTotal: n, limit: i = 10 } = {}) {
      return (
        await r.CodexRequest.safeGet("/accounts/{account_id}/users", {
          parameters: {
            path: { account_id: e },
            query: { limit: i, offset: 0, query: t, include_profile_photos: a, include_total: n },
          },
          signal: o,
        })
      ).items
    }
    o.d(
      t,
      {},
      {
        AB: l,
        C4: async function (e, t, o) {
          let a = t.trim().toLowerCase(),
            n = await l(e, a, o)
          return n.find((e) => e.email?.trim().toLowerCase() === a)?.account_user_id
        },
        Nc: function (e, t) {
          let o,
            d,
            l,
            m,
            u,
            p,
            h = (0, a.c)(18)
          h[0] !== t ? ((o = void 0 === t ? {} : t), (h[0] = t), (h[1] = o)) : (o = h[1])
          let { includeMemberCounts: g } = o,
            f = void 0 !== g && g,
            { accountId: x, authMethod: M } = (0, i.As)()
          h[2] !== e ? ((d = e.trim()), (h[2] = e), (h[3] = d)) : (d = h[3])
          let w = d,
            v = (0, s.o)(w, 150)
          ;(h[4] !== f ? ((l = f ? ["member-counts"] : []), (h[4] = f), (h[5] = l)) : (l = h[5]),
            h[6] !== x || h[7] !== w || h[8] !== l
              ? ((m = ["workspace-groups", x, w, ...l]), (h[6] = x), (h[7] = w), (h[8] = l), (h[9] = m))
              : (m = h[9]))
          let y = ("chatgpt" === M || "chatgptAuthTokens" === M) && null != x && w.length > 0 && w === v
          return (
            h[10] !== x || h[11] !== f || h[12] !== w
              ? ((u = async (e) => {
                  let { signal: t } = e
                  if (null == x) throw Error("account id is required")
                  return (
                    await r.CodexRequest.safeGet("/accounts/{account_id}/groups", {
                      parameters: {
                        path: { account_id: x },
                        query: { limit: 10, offset: 0, query: w, include_member_counts: f, include_total: !1 },
                      },
                      signal: AbortSignal.any([t, AbortSignal.timeout(15e3)]),
                    })
                  ).items
                }),
                (h[10] = x),
                (h[11] = f),
                (h[12] = w),
                (h[13] = u))
              : (u = h[13]),
            h[14] !== m || h[15] !== y || h[16] !== u
              ? ((p = {
                  queryKey: m,
                  enabled: y,
                  networkMode: "always",
                  refetchOnReconnect: !0,
                  retry: !1,
                  queryFn: u,
                  staleTime: c.D.ONE_MINUTE,
                }),
                (h[14] = m),
                (h[15] = y),
                (h[16] = u),
                (h[17] = p))
              : (p = h[17]),
            (0, n.I)(p)
          )
        },
        Nv: function (e, t) {
          let o,
            r,
            d,
            m,
            u,
            p,
            h = (0, a.c)(18)
          h[0] !== t ? ((o = void 0 === t ? {} : t), (h[0] = t), (h[1] = o)) : (o = h[1])
          let { includeProfilePhotos: g } = o,
            f = void 0 !== g && g,
            { accountId: x, authMethod: M } = (0, i.As)()
          h[2] !== e ? ((r = e.trim()), (h[2] = e), (h[3] = r)) : (r = h[3])
          let w = r,
            v = (0, s.o)(w, 150)
          ;(h[4] !== f ? ((d = f ? ["profile-photos"] : []), (h[4] = f), (h[5] = d)) : (d = h[5]),
            h[6] !== x || h[7] !== w || h[8] !== d
              ? ((m = ["workspace-users", x, w, ...d]), (h[6] = x), (h[7] = w), (h[8] = d), (h[9] = m))
              : (m = h[9]))
          let y = ("chatgpt" === M || "chatgptAuthTokens" === M) && null != x && w.length > 0 && w === v
          return (
            h[10] !== x || h[11] !== f || h[12] !== w
              ? ((u = async (e) => {
                  let { signal: t } = e
                  if (null == x) throw Error("account id is required")
                  return l(x, w, AbortSignal.any([t, AbortSignal.timeout(15e3)]), { includeProfilePhotos: f })
                }),
                (h[10] = x),
                (h[11] = f),
                (h[12] = w),
                (h[13] = u))
              : (u = h[13]),
            h[14] !== m || h[15] !== y || h[16] !== u
              ? ((p = {
                  queryKey: m,
                  enabled: y,
                  networkMode: "always",
                  refetchOnReconnect: !0,
                  retry: !1,
                  queryFn: u,
                  staleTime: c.D.ONE_MINUTE,
                }),
                (h[14] = m),
                (h[15] = y),
                (h[16] = u),
                (h[17] = p))
              : (p = h[17]),
            (0, n.I)(p)
          )
        },
        We: async function (e, t, o) {
          try {
            return (
              await r.CodexRequest.safeGet("/spaces/people", {
                parameters: { query: { account_id: e, query: t, limit: 10, offset: 0 } },
                signal: o,
              })
            ).items
          } catch (e) {
            if (!(e instanceof d.fk && 404 === e.status)) throw e
          }
          return l(e, t, o)
        },
      },
    )
  },
  QG92(e, t, o) {
    let a = (0, o("nkTT").a)({
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
    o.d(t, {}, { $: a })
  },
  wGrl(e, t, o) {
    let a = (0, o("nkTT").a)({
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
    o.d(t, {}, { E: a })
  },
}
//# sourceMappingURL=654172.b64b14661b.js.map
