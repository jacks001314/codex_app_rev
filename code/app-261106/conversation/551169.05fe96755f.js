export const __rspack_esm_ids = [551169]
export const __webpack_modules__ = {
  zssR(e, a, t) {
    var i = t("ABep")
    ;(t("zd8w"),
      (a.A = (e) =>
        (0, i.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, i.jsx)("path", {
            d: "M16.375 2.5H3.625C3.32663 2.5 3.04048 2.61853 2.8295 2.8295C2.61853 3.04048 2.5 3.32663 2.5 3.625V16.375C2.5 16.6734 2.61853 16.9595 2.8295 17.1705C3.04048 17.3815 3.32663 17.5 3.625 17.5H16.375C16.6734 17.5 16.9595 17.3815 17.1705 17.1705C17.3815 16.9595 17.5 16.6734 17.5 16.375V3.625C17.5 3.32663 17.3815 3.04048 17.1705 2.8295C16.9595 2.61853 16.6734 2.5 16.375 2.5ZM7 15.25H4.75V8.5H7V15.25ZM5.875 7.1875C5.61714 7.18013 5.36716 7.09693 5.15631 6.94831C4.94546 6.79968 4.78309 6.59221 4.68947 6.35183C4.59586 6.11145 4.57516 5.84881 4.62995 5.59673C4.68475 5.34465 4.81262 5.1143 4.99758 4.93448C5.18255 4.75466 5.4164 4.63332 5.66992 4.58565C5.92345 4.53797 6.1854 4.56606 6.42305 4.66641C6.6607 4.76675 6.86351 4.93491 7.00614 5.14986C7.14877 5.36481 7.22489 5.61703 7.225 5.875C7.21908 6.22776 7.07375 6.56384 6.82079 6.80977C6.56782 7.05571 6.22779 7.19151 5.875 7.1875ZM15.25 15.25H13V11.695C13 10.63 12.55 10.2475 11.965 10.2475C11.7935 10.2589 11.6259 10.3041 11.4719 10.3805C11.3179 10.4569 11.1805 10.5629 11.0676 10.6925C10.9547 10.8221 10.8685 10.9728 10.814 11.1358C10.7595 11.2988 10.7378 11.471 10.75 11.6425C10.7463 11.6774 10.7463 11.7126 10.75 11.7475V15.25H8.5V8.5H10.675V9.475C10.8944 9.14125 11.1958 8.86943 11.5504 8.68558C11.905 8.50172 12.3008 8.412 12.7 8.425C13.8625 8.425 15.22 9.07 15.22 11.17L15.25 15.25Z",
            fill: "currentColor",
          }),
        })))
  },
  cPAJ(e, a, t) {
    t.d(a, { w: () => eP, ChatGptConversationShareRecoveryDialog: () => eL })
    var i = t("ABep"),
      s = t("QosV"),
      n = t("FS1B"),
      r = t("BOYb"),
      o = t("T0Rc"),
      l = t("zTeN"),
      c = t("zd8w"),
      d = t("Wf1j"),
      h = t("oyxz"),
      p = t("Qgfj"),
      g = t("O0M0"),
      u = t("SPnB"),
      m = t("zKCW"),
      f = t("mUDD"),
      b = t("Ot7V"),
      v = t("bVeK"),
      w = t("EShr"),
      C = t("RNul"),
      k = t("SGsN"),
      y = t("yGJW"),
      x = t("OWtl"),
      _ = t("akkX"),
      T = t("FGv0"),
      S = t("TnP0"),
      A = t("qKAH"),
      I = t("hZax"),
      j = t("zHp1"),
      L = t("WFY2"),
      P = t("rvFo"),
      M = t("HFSu"),
      D = t("taWv"),
      E = t("r9i9"),
      N = t("Y7np"),
      O = t("oU3c"),
      G = t("D7oP"),
      R = t("OOaz"),
      F = t("fwwN"),
      H = t("cQW3"),
      W = t("Tywu"),
      U = t("rfhJ")
    function B(e) {
      let a,
        t = (0, s.c)(4),
        { includeConversationAudience: n, linkAppearance: r } = e,
        o = void 0 === r ? "secondary" : r
      if (void 0 !== n && n) {
        let e
        return (
          t[0] !== o
            ? ((e = (0, i.jsx)(h.A, {
                id: "chatgptConversations.shareDialog.conversationMemoryDisclosure",
                defaultMessage:
                  "Anyone with this link can access messages up to this point. Memory sources won't be shared with viewers. <learnMore>Learn more</learnMore>",
                description:
                  "Audience and privacy explanation in the personal ChatGPT conversation sharing dialog. The link includes messages through the selected point, but does not give viewers access to the underlying Memory sources. The learnMore tag links to the shared-links help article.",
                values: { learnMore: (e) => (0, i.jsx)(q, { appearance: o, children: e }) },
              })),
              (t[0] = o),
              (t[1] = e))
            : (e = t[1]),
          e
        )
      }
      return (
        t[2] !== o
          ? ((a = (0, i.jsx)(h.A, {
              id: "chatgptConversations.shareDialog.memoryDisclosure",
              defaultMessage: "Memory sources won't be shared with viewers. <learnMore>Learn more</learnMore>",
              description:
                "Privacy disclosure in ChatGPT content-sharing dialogs for personal and workspace accounts. Underlying Memory sources are not included in what recipients can view. The learnMore tag links to the shared-links help article.",
              values: { learnMore: (e) => (0, i.jsx)(q, { appearance: o, children: e }) },
            })),
            (t[2] = o),
            (t[3] = a))
          : (a = t[3]),
        a
      )
    }
    function q({ children: e, appearance: a = "secondary" }) {
      return null
    }
    var z = t("k5RO"),
      V = t("on57"),
      K = t("WAV0"),
      Y = t("zssR"),
      $ = t.p + "assets/54d213ef6585.svg",
      Q = t("O666")
    let Z = (e) =>
      (0, i.jsx)("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...e,
        children: (0, i.jsx)("path", {
          d: "M21.6295 16.8937C21.5458 16.6147 21.1413 16.4194 21.1413 16.4194C21.105 16.3971 21.0687 16.3803 21.0408 16.3663C20.3684 16.0427 19.7741 15.6521 19.2747 15.2085C18.873 14.8514 18.527 14.4608 18.2508 14.0423C17.9132 13.5345 17.7542 13.1076 17.6872 12.8788C17.6482 12.7282 17.6565 12.6696 17.6872 12.5915C17.7151 12.5273 17.7905 12.4631 17.8295 12.4353C18.0555 12.2762 18.421 12.039 18.6442 11.894C18.8367 11.7684 19.0041 11.6596 19.1018 11.5927C19.417 11.3722 19.6319 11.149 19.7602 10.9063C19.9248 10.5938 19.9443 10.2478 19.816 9.91028C19.643 9.45272 19.2161 9.1793 18.6749 9.1793C18.5549 9.1793 18.4294 9.19324 18.3066 9.21835C17.9969 9.28531 17.7012 9.39693 17.4557 9.49176C17.4389 9.50013 17.4194 9.4862 17.4194 9.46665C17.4445 8.85567 17.4752 8.03538 17.4082 7.25418C17.3468 6.54831 17.2017 5.95404 16.9646 5.43509C16.7247 4.91336 16.4178 4.52834 16.1722 4.25213C15.9407 3.98708 15.5362 3.59648 14.9223 3.24493C14.0602 2.7511 13.0781 2.5 12.004 2.5C10.9326 2.5 9.9533 2.7511 9.0884 3.24215C8.44113 3.61322 8.02542 4.03172 7.83571 4.24934C7.59296 4.52834 7.28327 4.91336 7.04332 5.43231C6.80617 5.95124 6.66109 6.54552 6.59971 7.25139C6.53275 8.03262 6.56065 8.78871 6.58855 9.46389C6.58855 9.48339 6.56902 9.49738 6.55228 9.48901C6.30676 9.39412 6.01102 9.2825 5.70133 9.21554C5.57856 9.18767 5.45581 9.1765 5.33304 9.1765C4.79178 9.1765 4.36491 9.44991 4.19193 9.90747C4.06359 10.2478 4.08312 10.591 4.24773 10.9035C4.37607 11.1462 4.5909 11.3695 4.90617 11.5899C5.00382 11.6568 5.17123 11.7656 5.36374 11.8912C5.58415 12.0335 5.93848 12.2622 6.16447 12.4241C6.19237 12.4436 6.28723 12.5162 6.31792 12.5915C6.3514 12.6724 6.35698 12.731 6.31513 12.89C6.24538 13.1216 6.08635 13.5429 5.75434 14.0423C5.47812 14.4608 5.13217 14.8514 4.7304 15.2085C4.2282 15.6521 3.63392 16.0427 2.96432 16.3663C2.93364 16.3803 2.89458 16.3998 2.85272 16.4249C2.81087 16.45 2.45096 16.6286 2.37563 16.8937C2.26403 17.2843 2.55977 17.6498 2.86667 17.8478C3.3633 18.1687 3.96873 18.3417 4.32027 18.4338C4.41792 18.4589 4.5072 18.484 4.58811 18.5091C4.63833 18.5258 4.76388 18.5732 4.81968 18.643C4.88664 18.7295 4.89502 18.8383 4.92012 18.9611C4.95919 19.1675 5.04568 19.4214 5.29957 19.5972C5.57856 19.7897 5.93569 19.8037 6.38488 19.8204C6.8564 19.8372 7.4423 19.8623 8.11188 20.0827C8.42158 20.1859 8.70337 20.3589 9.02981 20.5598C9.71056 20.9782 10.5587 21.5 12.0067 21.5C13.4548 21.5 14.3085 20.9755 14.9949 20.557C15.3185 20.3589 15.5975 20.1859 15.9016 20.0855C16.5712 19.865 17.1571 19.8427 17.6286 19.8232C18.0778 19.8064 18.4349 19.7925 18.714 19.6C18.9874 19.413 19.0655 19.1313 19.1018 18.9192C19.1213 18.816 19.1352 18.7212 19.1938 18.643C19.244 18.5761 19.3612 18.5314 19.417 18.5119C19.5007 18.4868 19.59 18.4617 19.6932 18.4338C20.0448 18.3389 20.4828 18.2301 21.0185 17.926C21.6518 17.5633 21.6965 17.1141 21.6295 16.8937Z",
          fill: "currentColor",
        }),
      })
    var X = t("iJY0")
    let J = (0, X.a)({
        name: "arrow-down-open-base-regular-32",
        canvas: {
          width: 32,
          height: 32,
          viewBox: "0 0 32 32",
          frame: { x: 0, y: 0, width: 32, height: 32 },
          inkBounds: { x: 3.75, y: 4.083496, width: 24.5, height: 24.166992 },
          visualBounds: { x: 3.75, y: 4.083496, width: 24.5, height: 24.166992 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 3.75, y: 4.083496, width: 24.5, height: 24.166992 },
          center: { x: 16, y: 16.166992 },
          insets: { top: 4.083496, right: 3.75, bottom: 3.749512, left: 3.75 },
          anchors: { frame: { x: 16, y: 16 }, ink: { x: 16, y: 16.166992 }, foreground: { x: 16, y: 16.166992 } },
        },
        capabilities: ["icon"],
        body: '<path d="M27 15.7505C27.6904 15.7505 28.25 16.3101 28.25 17.0005V23.2007C28.2496 25.9893 25.9889 28.2504 23.2002 28.2505H8.7998C6.01109 28.2504 3.75037 25.9893 3.75 23.2007V17.0005C3.75 16.3101 4.30965 15.7505 5 15.7505C5.69035 15.7505 6.25 16.3101 6.25 17.0005V23.2007C6.25037 24.6086 7.3918 25.7504 8.7998 25.7505H23.2002C24.6082 25.7504 25.7496 24.6086 25.75 23.2007V17.0005C25.75 16.3101 26.3096 15.7505 27 15.7505Z" fill="currentColor"/> <path d="M16 4.0835C16.6904 4.0835 17.25 4.64314 17.25 5.3335V15.9819L20.7822 12.4497C21.2703 11.9617 22.0616 11.9619 22.5498 12.4497C23.0379 12.9379 23.038 13.7291 22.5498 14.2173L17.2373 19.5308L17.1045 19.6509C16.463 20.1739 15.537 20.1739 14.8955 19.6509L14.7627 19.5308L9.44922 14.2173C8.96134 13.7292 8.96145 12.9378 9.44922 12.4497C9.93733 11.9618 10.7287 11.9618 11.2168 12.4497L14.75 15.9829V5.3335C14.75 4.64314 15.3096 4.0835 16 4.0835Z" fill="currentColor"/>',
      }),
      ee = (0, X.a)({
        name: "arrow-up-open-base-regular-32",
        canvas: {
          width: 32,
          height: 32,
          viewBox: "0 0 32 32",
          frame: { x: 0, y: 0, width: 32, height: 32 },
          inkBounds: { x: 3.75, y: 4.290527, width: 24.5, height: 23.959961 },
          visualBounds: { x: 3.75, y: 4.290527, width: 24.5, height: 23.959961 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 3.75, y: 4.290527, width: 24.5, height: 23.959961 },
          center: { x: 16, y: 16.270508 },
          insets: { top: 4.290527, right: 3.75, bottom: 3.749512, left: 3.75 },
          anchors: { frame: { x: 16, y: 16 }, ink: { x: 16, y: 16.270508 }, foreground: { x: 16, y: 16.270508 } },
        },
        capabilities: ["icon"],
        body: '<path d="M27 15.7503C27.6904 15.7503 28.25 16.3099 28.25 17.0003V23.2005C28.2496 25.9892 25.9889 28.2502 23.2002 28.2503H8.7998C6.01109 28.2502 3.75037 25.9892 3.75 23.2005V17.0003C3.75 16.3099 4.30965 15.7503 5 15.7503C5.69035 15.7503 6.25 16.3099 6.25 17.0003V23.2005C6.25037 24.6084 7.3918 25.7502 8.7998 25.7503H23.2002C24.6082 25.7502 25.7496 24.6084 25.75 23.2005V17.0003C25.75 16.3099 26.3096 15.7503 27 15.7503Z" fill="currentColor"/> <path d="M14.8955 4.68292C15.5371 4.1598 16.463 4.15966 17.1045 4.68292L17.2373 4.80303L22.5498 10.1165C23.038 10.6047 23.038 11.3959 22.5498 11.8841C22.0616 12.3717 21.2702 12.3721 20.7822 11.8841L17.25 8.35186V19.0003C17.2497 19.6904 16.6902 20.2503 16 20.2503C15.3098 20.2503 14.7503 19.6904 14.75 19.0003V8.34991L11.2168 11.8841C10.7287 12.3718 9.93726 12.3719 9.44922 11.8841C8.96129 11.3961 8.96149 10.6047 9.44922 10.1165L14.7627 4.80303L14.8955 4.68292Z" fill="currentColor"/>',
      }),
      ea = (0, X.a)({
        name: "link-regular-32",
        canvas: {
          width: 32,
          height: 32,
          viewBox: "0 0 32 32",
          frame: { x: 0, y: 0, width: 32, height: 32 },
          inkBounds: { x: 3.160645, y: 3.160645, width: 25.678589, height: 25.678711 },
          visualBounds: { x: 3.160645, y: 3.160645, width: 25.678589, height: 25.678711 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 3.160645, y: 3.160645, width: 25.678589, height: 25.678711 },
          center: { x: 15.99994, y: 16 },
          insets: { top: 3.160645, right: 3.160766, bottom: 3.160644, left: 3.160645 },
          anchors: { frame: { x: 16, y: 16 }, ink: { x: 15.99994, y: 16 }, foreground: { x: 15.99994, y: 16 } },
        },
        capabilities: ["icon"],
        body: '<path d="M7.40002 12.2545C7.8882 11.7667 8.67956 11.7665 9.1676 12.2545C9.6554 12.7426 9.65533 13.534 9.1676 14.0221L7.35901 15.8307C5.08267 18.1072 5.02964 21.8398 7.59436 24.4049C10.1594 26.97 13.893 26.9177 16.1696 24.6412L17.9781 22.8326C18.4663 22.3448 19.2577 22.3446 19.7457 22.8326C20.2337 23.3207 20.2335 24.112 19.7457 24.6002L17.9371 26.4088C14.6318 29.714 9.3149 29.6606 5.82678 26.1725C2.339 22.6844 2.28637 17.3683 5.59143 14.0631L7.40002 12.2545Z" fill="currentColor"/> <path d="M19.1158 11.1158C19.6039 10.6278 20.3952 10.6281 20.8834 11.1158C21.3716 11.604 21.3716 12.3953 20.8834 12.8834L12.8834 20.8834C12.3953 21.3716 11.604 21.3716 11.1158 20.8834C10.6281 20.3952 10.6278 19.6039 11.1158 19.1158L19.1158 11.1158Z" fill="currentColor"/> <path d="M14.0631 5.59143C17.3683 2.28637 22.6844 2.339 26.1725 5.82678C29.6606 9.3149 29.714 14.6318 26.4088 17.9371L24.6002 19.7457C24.112 20.2335 23.3207 20.2337 22.8326 19.7457C22.3446 19.2577 22.3448 18.4663 22.8326 17.9781L24.6412 16.1696C26.9177 13.893 26.97 10.1594 24.4049 7.59436C21.8398 5.02964 18.1072 5.08267 15.8307 7.35901L14.0221 9.1676C13.534 9.65533 12.7426 9.6554 12.2545 9.1676C11.7665 8.67956 11.7667 7.8882 12.2545 7.40002L14.0631 5.59143Z" fill="currentColor"/>',
      })
    var et = t("Sm6l"),
      ei = t("HOLv"),
      es = t.p + "assets/a44c3b23dcdd.svg",
      en = t.p + "assets/f89c02c412a6.svg",
      er = t.p + "assets/9a71acddc992.svg",
      eo = t.p + "assets/8701c39f9411.svg",
      el = t.p + "assets/a0e21ee4e974.svg",
      ec = t.p + "assets/65e1f7f9bbc7.svg",
      ed = t.p + "assets/ef23b998c89d.svg",
      eh = t.p + "assets/68114a3519e4.svg",
      ep = t.p + "assets/4e098d17e4b0.svg",
      eg = t.p + "assets/95a74777d3b6.svg",
      eu = t.p + "assets/f402deb07e3e.svg",
      em = t.p + "assets/d2456ff12af4.svg",
      ef = t.p + "assets/a4b3bd52fa56.svg",
      eb = t.p + "assets/c90c58541963.svg",
      ev = t.p + "assets/a52fcff4cb9f.svg",
      ew = t.p + "assets/61d30fb4b9b5.svg",
      eC = t.p + "assets/eed095b8404d.svg",
      ek = t.p + "assets/960af71a4796.svg",
      ey = t.p + "assets/b7e1212639e0.svg",
      ex = t.p + "assets/0a1329508cdf.svg",
      e_ = t.p + "assets/1105bc989224.svg",
      eT = "mobileRow-V0E64y"
    function eS(e) {
      let a,
        t,
        n,
        r,
        o,
        l,
        c = (0, s.c)(46),
        {
          copyLabel: h,
          copyDisabled: p,
          isBusy: g,
          isDownloading: u,
          socialDestinationsDisabled: m,
          showSocialDestinations: f,
          onCopy: b,
          onDownload: v,
          additionalActions: w,
          onSocialShare: k,
          experience: y,
          onNativeShare: x,
          canNativeShare: _,
          country: T,
          rowScrollPositions: S,
        } = e,
        A = (0, d.A)()
      if (
        c[0] !== w ||
        c[1] !== _ ||
        c[2] !== p ||
        c[3] !== h ||
        c[4] !== T ||
        c[5] !== y.layout ||
        c[6] !== y.unsupportedDestinationFallback ||
        c[7] !== A ||
        c[8] !== g ||
        c[9] !== u ||
        c[10] !== b ||
        c[11] !== v ||
        c[12] !== x ||
        c[13] !== k ||
        c[14] !== S ||
        c[15] !== f ||
        c[16] !== m
      ) {
        o = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            s,
            l,
            d =
              null == v
                ? []
                : [
                    {
                      id: "download",
                      disabled: u || g,
                      icon: (0, i.jsx)(ei.I, { asset: J }),
                      label: A.formatMessage({
                        id: "chatgptConversations.shareDialog.destination.download.label",
                        defaultMessage: "Download",
                        description:
                          "Short label below a circular button in the generated-image Share dialog. Saves the selected image, or all images in the selected series, to the user's device without creating a shared link.",
                      }),
                      onClick: v,
                    },
                  ]
          c[22] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(ei.I, { asset: ea })), (c[22] = e))
            : (e = c[22])
          let I = { id: "copy", disabled: p, icon: e, label: h, onClick: b },
            j = _
              ? [
                  {
                    id: "native",
                    disabled: p,
                    icon: (0, i.jsx)(ei.I, { asset: ee }),
                    label: A.formatMessage({
                      id: "chatgptConversations.mobileImageShare.native",
                      defaultMessage: "Share to",
                      description:
                        "Short action label in the mobile generated-image share sheet. Selecting it opens the device's operating-system share sheet with the public image or reusable prompt link. It appears beside Copy link and Download.",
                    }),
                    onClick: x,
                  },
                ]
              : [],
            L = [...d, I, ...j],
            P = f
              ? (0, z.i2)({ country: T }).map((e) =>
                  (function ({ destination: e, disabled: a, intl: t, onSocialShare: s }) {
                    let n,
                      r,
                      o,
                      l = (e) => (0, i.jsx)("img", { alt: "", "aria-hidden": !0, src: e }),
                      c = (e) =>
                        (0, i.jsx)("img", {
                          alt: "",
                          "aria-hidden": !0,
                          className: "destinationIconBackground-q4p_I2",
                          src: e,
                        })
                    switch (e) {
                      case "messages":
                        ;((n = l(eC)),
                          (r = c(ec)),
                          (o = t.formatMessage({
                            id: "chatgptConversations.mobileImageShare.messages",
                            defaultMessage: "Messages",
                            description:
                              "Short destination label in the mobile generated-image share sheet. Selecting it opens a text-message draft containing the public image link. This means the device's Messages app, not ChatGPT messages.",
                          })))
                        break
                      case "whatsapp":
                        ;((n = l(ex)),
                          (r = c(eg)),
                          (o = t.formatMessage({
                            id: "chatgptConversations.mobileImageShare.whatsapp",
                            defaultMessage: "WhatsApp",
                            description:
                              "Short destination label in the mobile generated-image share sheet. Selecting it opens WhatsApp with the public image link ready to send. WhatsApp is a brand name.",
                          })))
                        break
                      case "instagram-stories":
                        ;((n = l(eb)),
                          (r = c(en)),
                          (o = t.formatMessage({
                            id: "chatgptConversations.mobileImageShare.instagramStories",
                            defaultMessage: "Instagram",
                            description:
                              "Short destination label in the mobile generated-image share sheet for sharing through Instagram Stories. Depending on the experiment assignment, selecting it opens the operating-system share sheet or the Instagram app-store page. Instagram is a brand name.",
                          })))
                        break
                      case "facebook-stories":
                        ;((n = l(ef)),
                          (r = c(es)),
                          (o = t.formatMessage({
                            id: "chatgptConversations.mobileImageShare.facebookStories",
                            defaultMessage: "Facebook",
                            description:
                              "Short destination label in the mobile generated-image share sheet for sharing through Facebook Stories. Depending on the experiment assignment, selecting it opens the operating-system share sheet or the Facebook app-store page. Facebook is a brand name.",
                          })))
                        break
                      case "telegram":
                        ;((n = l(ey)),
                          (r = c(ep)),
                          (o = t.formatMessage({
                            id: "chatgptConversations.mobileImageShare.telegram",
                            defaultMessage: "Telegram",
                            description:
                              "Short destination label in the mobile generated-image share sheet. Selecting it opens Telegram with the public image link ready to send. Telegram is a brand name.",
                          })))
                        break
                      case "facebook-messenger":
                        ;((n = l(em)),
                          (r = c(es)),
                          (o = t.formatMessage({
                            id: "chatgptConversations.mobileImageShare.facebookMessenger",
                            defaultMessage: "Messenger",
                            description:
                              "Short destination label in the mobile generated-image share sheet for Facebook Messenger. Depending on the experiment assignment, selecting it opens the operating-system share sheet or the Messenger app-store page. Messenger is a brand name.",
                          })))
                        break
                      case "kakao-talk":
                        ;((n = l(ev)),
                          (r = c(er)),
                          (o = t.formatMessage({
                            id: "chatgptConversations.mobileImageShare.kakaoTalk",
                            defaultMessage: "KakaoTalk",
                            description:
                              "Short destination label shown to users in Korea in the mobile generated-image share sheet. Depending on the experiment assignment, selecting it opens the operating-system share sheet or the KakaoTalk app-store page. KakaoTalk is a brand name.",
                          })))
                        break
                      case "snapchat-stories":
                        ;((n = (0, i.jsx)(Z, { "aria-hidden": "true", className: "text-brand-logo-foreground" })),
                          (r = c(eh)),
                          (o = t.formatMessage({
                            id: "chatgptConversations.mobileImageShare.snapchatStories",
                            defaultMessage: "Snapchat",
                            description:
                              "Short destination label in the mobile generated-image share sheet for sharing through Snapchat Stories. Depending on the experiment assignment, selecting it opens the operating-system share sheet or the Snapchat app-store page. Snapchat is a brand name.",
                          })))
                        break
                      case "line":
                        ;((n = l($)),
                          (r = c(eo)),
                          (o = t.formatMessage({
                            id: "postSharingModal.line",
                            defaultMessage: "LINE",
                            description:
                              "Short label for the LINE destination in ChatGPT conversation, message, and image sharing dialogs and menus. Selecting it opens LINE sharing so the user can choose recipients and send the shared link. Appears alongside X and LinkedIn. LINE is a messaging app brand name; keep its Latin letters and capitalization.",
                          })))
                        break
                      case "x":
                        ;((n = l(e_)),
                          (r = c(eu)),
                          (o = t.formatMessage({
                            id: "chatgptConversations.shareDialog.destination.x.label",
                            defaultMessage: "X",
                            description:
                              "Short destination label below a circular button in a ChatGPT post sharing dialog for a conversation, response, or generated image. Selecting it opens X's post composer with the public post URL.",
                          })))
                        break
                      case "linkedin":
                        ;((n = l(ew)),
                          (r = c(el)),
                          (o = t.formatMessage({
                            id: "chatgptConversations.shareDialog.destination.linkedin.label",
                            defaultMessage: "LinkedIn",
                            description:
                              "Short destination label below a circular button in a ChatGPT post sharing dialog for a conversation, response, or generated image. Selecting it opens LinkedIn's post composer with the public post URL.",
                          })))
                        break
                      case "reddit":
                        ;((n = l(ek)),
                          (r = c(ed)),
                          (o = t.formatMessage({
                            id: "chatgptConversations.shareDialog.destination.reddit.label",
                            defaultMessage: "Reddit",
                            description:
                              "Short destination label below a circular button in a ChatGPT post sharing dialog for a conversation, response, or generated image. Selecting it opens Reddit's submission form with the public post URL. Other destinations are Copy link, X, and LinkedIn.",
                          })))
                    }
                    return { id: e, disabled: a, icon: n, iconBackground: r, label: o, onClick: (a) => s(e, a) }
                  })({
                    destination: e,
                    disabled: m || ("native-share" === y.unsupportedDestinationFallback && (0, z.NS)(e) && !_),
                    intl: A,
                    onSocialShare: k,
                  }),
                )
              : [],
            M = "two-rows" === y.layout && P.length > 0
          c[23] !== S
            ? ((s = (e) =>
                null == S
                  ? {}
                  : {
                      onScroll: (a) => {
                        S[e] = a.currentTarget.scrollLeft
                      },
                      ref: (a) => {
                        null != a && (a.scrollLeft = S[e] ?? 0)
                      },
                    }),
              (c[23] = S),
              (c[24] = s))
            : (s = c[24])
          let D = s
          c[25] !== g || c[26] !== u
            ? ((l = (e, a) => {
                let { id: t, disabled: s, icon: n, iconBackground: r, label: o, onClick: l } = e,
                  c = ("copy" === t && g) || ("download" === t && u)
                return (0, i.jsx)(
                  K.b,
                  {
                    extension: "download" === t,
                    children: (0, i.jsxs)(et.$, {
                      "aria-label": o,
                      "aria-busy": c,
                      color: "shareDestination",
                      unstyled: !0,
                      className: (0, V.A)("mobileDestination-JRc58g", a && "mobileTwoRowDestination-jahy9S"),
                      "data-destination": t,
                      disabled: s,
                      size: "shareDestination",
                      type: "copy" === t ? "submit" : "button",
                      onClick: l,
                      children: [
                        (0, i.jsxs)("span", {
                          className: (0, V.A)(
                            "destinationIcon-EuU6jl",
                            null != r && "destinationIconWithArtwork-eYPnWH",
                          ),
                          children: [
                            r,
                            (0, i.jsx)("span", {
                              className: "destinationIconForeground-usBliy",
                              children: c ? (0, i.jsx)(C.y, { as: "span", className: "icon-sm" }) : n,
                            }),
                          ],
                        }),
                        (0, i.jsx)("span", {
                          className: "w-full text-center whitespace-nowrap text-default select-none",
                          "aria-live": "copy" === t ? "polite" : void 0,
                          children: o,
                        }),
                      ],
                    }),
                  },
                  t,
                )
              }),
              (c[25] = g),
              (c[26] = u),
              (c[27] = l))
            : (l = c[27])
          let E = l
          if (M) {
            let e,
              a,
              t,
              s,
              n,
              r,
              l = [...d, ...j, I]
            ;(c[28] !== D ? ((e = D("destinations")), (c[28] = D), (c[29] = e)) : (e = c[29]),
              c[30] === Symbol.for("react.memo_cache_sentinel")
                ? ((a = (0, V.A)(
                    "box-border flex min-w-0 w-full gap-x-5 overflow-x-auto overscroll-x-contain px-5 pt-5 pb-8",
                    eT,
                  )),
                  (c[30] = a))
                : (a = c[30]),
              c[31] !== E ? ((t = (e) => E(e, !0)), (c[31] = E), (c[32] = t)) : (t = c[32]),
              c[33] === Symbol.for("react.memo_cache_sentinel")
                ? ((s = (0, i.jsx)("div", {
                    className: "w-full border-t-hairline border-default",
                    "aria-hidden": "true",
                  })),
                  (c[33] = s))
                : (s = c[33]),
              c[34] !== D ? ((n = D("actions")), (c[34] = D), (c[35] = n)) : (n = c[35]),
              c[36] === Symbol.for("react.memo_cache_sentinel")
                ? ((r = (0, V.A)(
                    "box-border flex min-w-0 w-full gap-x-5 overflow-x-auto overscroll-x-contain px-5 pt-5 pb-8",
                    eT,
                    "mobileUtilityRow-iCKQaL",
                  )),
                  (c[36] = r))
                : (r = c[36]),
              (o = (0, i.jsxs)("div", {
                className: "flex w-full min-w-0 flex-col",
                children: [
                  (0, i.jsx)("div", {
                    "data-mobile-image-share-row": "destinations",
                    ...e,
                    className: a,
                    children: P.map(t),
                  }),
                  s,
                  (0, i.jsxs)("div", {
                    "data-mobile-image-share-row": "actions",
                    ...n,
                    className: r,
                    children: [l.map((e) => E(e, !0)), w],
                  }),
                ],
              })))
            break e
          }
          ;((a = "combined"),
            c[37] !== D ? ((t = D("combined")), (c[37] = D), (c[38] = t)) : (t = c[38]),
            c[39] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = (0, V.A)("flex w-full gap-x-6 overflow-x-auto overscroll-x-contain px-6", eT)), (c[39] = n))
              : (n = c[39]),
            (r = [...L, ...P].map((e) => E(e, !1))))
        }
        ;((c[0] = w),
          (c[1] = _),
          (c[2] = p),
          (c[3] = h),
          (c[4] = T),
          (c[5] = y.layout),
          (c[6] = y.unsupportedDestinationFallback),
          (c[7] = A),
          (c[8] = g),
          (c[9] = u),
          (c[10] = b),
          (c[11] = v),
          (c[12] = x),
          (c[13] = k),
          (c[14] = S),
          (c[15] = f),
          (c[16] = m),
          (c[17] = a),
          (c[18] = t),
          (c[19] = n),
          (c[20] = r),
          (c[21] = o))
      } else ((a = c[17]), (t = c[18]), (n = c[19]), (r = c[20]), (o = c[21]))
      return o !== Symbol.for("react.early_return_sentinel")
        ? o
        : (c[40] !== w || c[41] !== a || c[42] !== t || c[43] !== n || c[44] !== r
            ? ((l = (0, i.jsxs)("div", { "data-mobile-image-share-row": a, ...t, className: n, children: [r, w] })),
              (c[40] = w),
              (c[41] = a),
              (c[42] = t),
              (c[43] = n),
              (c[44] = r),
              (c[45] = l))
            : (l = c[45]),
          l)
    }
    function eA(e) {
      let a,
        t,
        n,
        r,
        o,
        c,
        d = (0, s.c)(22),
        {
          "aria-label": h,
          "data-destination": p,
          disabled: g,
          icons: u,
          isBusy: m,
          label: f,
          announceLabel: b,
          type: v,
          onClick: w,
        } = e,
        k = void 0 !== m && m,
        y = void 0 === v ? "button" : v
      d[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = { layer: "3136899520", parameter: "large_share_destinations" }), (d[0] = a))
        : (a = d[0])
      let x = (0, l._U)(Q.H$, a),
        _ = x ? u.large : u.compact,
        T = x ? "size-16" : "size-11"
      ;(d[1] !== T
        ? ((t = (0, V.A)("share-destination-icon flex items-center justify-center rounded-full", T)),
          (d[1] = T),
          (d[2] = t))
        : (t = d[2]),
        d[3] !== x || d[4] !== _ || d[5] !== k
          ? ((n = k ? (0, i.jsx)(C.y, { as: "span", className: x ? "size-8" : "icon-sm" }) : _),
            (d[3] = x),
            (d[4] = _),
            (d[5] = k),
            (d[6] = n))
          : (n = d[6]),
        d[7] !== t || d[8] !== n
          ? ((r = (0, i.jsx)("span", { className: t, children: n })), (d[7] = t), (d[8] = n), (d[9] = r))
          : (r = d[9]))
      let S = void 0 !== b && b ? "polite" : void 0
      return (
        d[10] !== f || d[11] !== S
          ? ((o = (0, i.jsx)("span", {
              className: "w-full text-center text-xs whitespace-nowrap text-default select-none",
              "aria-live": S,
              children: f,
            })),
            (d[10] = f),
            (d[11] = S),
            (d[12] = o))
          : (o = d[12]),
        d[13] !== h ||
        d[14] !== p ||
        d[15] !== g ||
        d[16] !== k ||
        d[17] !== w ||
        d[18] !== o ||
        d[19] !== r ||
        d[20] !== y
          ? ((c = (0, i.jsxs)(et.$, {
              "aria-label": h,
              "aria-busy": k,
              "data-destination": p,
              color: "shareDestination",
              disabled: g,
              size: "shareDestination",
              type: y,
              onClick: w,
              children: [r, o],
            })),
            (d[13] = h),
            (d[14] = p),
            (d[15] = g),
            (d[16] = k),
            (d[17] = w),
            (d[18] = o),
            (d[19] = r),
            (d[20] = y),
            (d[21] = c))
          : (c = d[21]),
        c
      )
    }
    function eI(e) {
      let a,
        t,
        n,
        r,
        o,
        c,
        h,
        p,
        g,
        u,
        m,
        f,
        b = (0, s.c)(55),
        {
          copyLabel: w,
          copyDisabled: C,
          isBusy: k,
          isDownloading: y,
          socialDestinationsDisabled: x,
          showSocialDestinations: _,
          onCopy: T,
          onDownload: S,
          additionalActions: A,
          onSocialShare: j,
          mobileImageActions: L,
        } = e,
        P = void 0 !== y && y,
        M = null != L
      b[0] !== M
        ? ((a = { layer: "3136899520", parameter: "large_share_destinations", disableExposureLog: M }),
          (b[0] = M),
          (b[1] = a))
        : (a = b[1])
      let D = (0, l._U)(Q.H$, a),
        E = (0, d.A)(),
        { client: N } = (0, I.cn)()
      b[2] !== N ? ((t = N.getContext().user?.country?.trim().toUpperCase()), (b[2] = N), (b[3] = t)) : (t = b[3])
      let O = t,
        G = null == L && "JP" === O && _,
        R = !G
      b[4] !== R
        ? ((n = { layer: "494762337", parameter: "enabled", disableExposureLog: R }), (b[4] = R), (b[5] = n))
        : (n = b[5])
      let F = (0, l._U)(G ? Q.H$ : null, n),
        H = G && F
      if (null != L) {
        let e
        return (
          b[6] !== A ||
          b[7] !== C ||
          b[8] !== w ||
          b[9] !== O ||
          b[10] !== k ||
          b[11] !== P ||
          b[12] !== L.canNativeShare ||
          b[13] !== L.experience ||
          b[14] !== L.onNativeShare ||
          b[15] !== L.rowScrollPositions ||
          b[16] !== T ||
          b[17] !== S ||
          b[18] !== j ||
          b[19] !== _ ||
          b[20] !== x
            ? ((e = (0, i.jsx)(eS, {
                copyLabel: w,
                copyDisabled: C,
                isBusy: k,
                isDownloading: P,
                socialDestinationsDisabled: x,
                showSocialDestinations: _,
                onCopy: T,
                onDownload: S,
                additionalActions: A,
                onSocialShare: j,
                experience: L.experience,
                onNativeShare: L.onNativeShare,
                canNativeShare: L.canNativeShare,
                country: O,
                rowScrollPositions: L.rowScrollPositions,
              })),
              (b[6] = A),
              (b[7] = C),
              (b[8] = w),
              (b[9] = O),
              (b[10] = k),
              (b[11] = P),
              (b[12] = L.canNativeShare),
              (b[13] = L.experience),
              (b[14] = L.onNativeShare),
              (b[15] = L.rowScrollPositions),
              (b[16] = T),
              (b[17] = S),
              (b[18] = j),
              (b[19] = _),
              (b[20] = x),
              (b[21] = e))
            : (e = b[21]),
          e
        )
      }
      b[22] !== E || b[23] !== P || b[24] !== S
        ? ((r =
            null == S
              ? []
              : [
                  {
                    id: "download",
                    largeIcon: (0, i.jsx)(v.Ve9, { "aria-hidden": "true" }),
                    disabled: P,
                    icon: (0, i.jsx)(v.EYt, {}),
                    label: E.formatMessage({
                      id: "chatgptConversations.shareDialog.destination.download.label",
                      defaultMessage: "Download",
                      description:
                        "Short label below a circular button in the generated-image Share dialog. Saves the selected image, or all images in the selected series, to the user's device without creating a shared link.",
                    }),
                    onClick: S,
                  },
                ]),
          (b[22] = E),
          (b[23] = P),
          (b[24] = S),
          (b[25] = r))
        : (r = b[25])
      let W = r
      ;(b[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((o = (0, i.jsx)(v._Kk, { "aria-hidden": "true" })), (b[26] = o))
        : (o = b[26]),
        b[27] === Symbol.for("react.memo_cache_sentinel") ? ((c = (0, i.jsx)(v.DIB, {})), (b[27] = c)) : (c = b[27]),
        b[28] !== C || b[29] !== w || b[30] !== T
          ? ((h = { id: "copy", largeIcon: o, disabled: C, icon: c, label: w, onClick: T }),
            (b[28] = C),
            (b[29] = w),
            (b[30] = T),
            (b[31] = h))
          : (h = b[31]))
      let U = h
      b[32] !== E || b[33] !== j || b[34] !== H || b[35] !== _ || b[36] !== x
        ? ((p = _
            ? [
                ...(H
                  ? [
                      (function ({ disabled: e, intl: a, onSocialShare: t }) {
                        let s = (0, i.jsx)("img", { alt: "", "aria-hidden": !0, src: $ })
                        return {
                          id: "line",
                          largeIcon: s,
                          disabled: e,
                          icon: s,
                          label: a.formatMessage({
                            id: "postSharingModal.line",
                            defaultMessage: "LINE",
                            description:
                              "Short label for the LINE destination in ChatGPT conversation, message, and image sharing dialogs and menus. Selecting it opens LINE sharing so the user can choose recipients and send the shared link. Appears alongside X and LinkedIn. LINE is a messaging app brand name; keep its Latin letters and capitalization.",
                          }),
                          onClick: (e) => t("line", e),
                        }
                      })({ disabled: x, intl: E, onSocialShare: j }),
                    ]
                  : []),
                ej({ destination: "x", disabled: x, intl: E, onSocialShare: j }),
                ej({ destination: "linkedin", disabled: x, intl: E, onSocialShare: j }),
                ...(H ? [] : [ej({ destination: "reddit", disabled: x, intl: E, onSocialShare: j })]),
              ]
            : []),
          (b[32] = E),
          (b[33] = j),
          (b[34] = H),
          (b[35] = _),
          (b[36] = x),
          (b[37] = p))
        : (p = b[37])
      let B = p
      b[38] !== U || b[39] !== B || b[40] !== W
        ? ((g = [U, ...B, ...W]), (b[38] = U), (b[39] = B), (b[40] = W), (b[41] = g))
        : (g = b[41])
      let q = g,
        z = null == A && "flex-wrap justify-center gap-x-6 gap-y-4",
        Y = null != A && "gap-3",
        Z = null != A && D && "flex-wrap justify-center",
        X = null != A && !D && "justify-start overflow-x-auto sm:justify-center"
      return (
        b[42] !== z || b[43] !== Y || b[44] !== Z || b[45] !== X
          ? ((u = (0, V.A)("flex w-full", z, Y, Z, X)), (b[42] = z), (b[43] = Y), (b[44] = Z), (b[45] = X), (b[46] = u))
          : (u = b[46]),
        b[47] !== q || b[48] !== k || b[49] !== P
          ? ((m = q.map((e) => {
              let { id: a, disabled: t, icon: s, largeIcon: n, label: r, onClick: o } = e,
                l = ("copy" === a && k) || ("download" === a && P)
              return (0, i.jsx)(
                K.b,
                {
                  extension: "download" === a,
                  children: (0, i.jsx)(eA, {
                    "aria-label": r,
                    "data-destination": a,
                    disabled: t,
                    icons: { compact: s, large: n },
                    isBusy: l,
                    label: r,
                    announceLabel: "copy" === a,
                    type: "copy" === a ? "submit" : "button",
                    onClick: o,
                  }),
                },
                a,
              )
            })),
            (b[47] = q),
            (b[48] = k),
            (b[49] = P),
            (b[50] = m))
          : (m = b[50]),
        b[51] !== A || b[52] !== u || b[53] !== m
          ? ((f = (0, i.jsxs)("div", { className: u, children: [m, A] })),
            (b[51] = A),
            (b[52] = u),
            (b[53] = m),
            (b[54] = f))
          : (f = b[54]),
        f
      )
    }
    function ej({ destination: e, disabled: a, intl: t, onSocialShare: s }) {
      let n, r, o
      switch (e) {
        case "x":
          ;((n = (0, i.jsx)(v.xhz, { "aria-hidden": "true" })),
            (r = (0, i.jsx)(v.WM$, { "aria-hidden": "true" })),
            (o = t.formatMessage({
              id: "chatgptConversations.shareDialog.destination.x.label",
              defaultMessage: "X",
              description:
                "Short destination label below a circular button in a ChatGPT post sharing dialog for a conversation, response, or generated image. Selecting it opens X's post composer with the public post URL.",
            })))
          break
        case "linkedin":
          ;((n = (0, i.jsx)(Y.A, { "aria-hidden": "true" })),
            (r = (0, i.jsx)(v.wPr, { "aria-hidden": "true" })),
            (o = t.formatMessage({
              id: "chatgptConversations.shareDialog.destination.linkedin.label",
              defaultMessage: "LinkedIn",
              description:
                "Short destination label below a circular button in a ChatGPT post sharing dialog for a conversation, response, or generated image. Selecting it opens LinkedIn's post composer with the public post URL.",
            })))
          break
        case "reddit":
          ;((n = (0, i.jsx)(v.D3m, { "aria-hidden": "true" })),
            (r = (0, i.jsx)(v.AM2, { "aria-hidden": "true" })),
            (o = t.formatMessage({
              id: "chatgptConversations.shareDialog.destination.reddit.label",
              defaultMessage: "Reddit",
              description:
                "Short destination label below a circular button in a ChatGPT post sharing dialog for a conversation, response, or generated image. Selecting it opens Reddit's submission form with the public post URL. Other destinations are Copy link, X, and LinkedIn.",
            })))
      }
      return { id: e, disabled: a, icon: n, largeIcon: r, label: o, onClick: (a) => s(e, a) }
    }
    function eL(e) {
      let a,
        t,
        n,
        r,
        o,
        d,
        h = (0, s.c)(12)
      h[0] !== e
        ? (({ accountId: a, onClose: t, ...n } = e), (h[0] = e), (h[1] = a), (h[2] = t), (h[3] = n))
        : ((a = h[1]), (t = h[2]), (n = h[3]))
      let p = (0, l.Ul)(u.chatGptAuthenticatedAccountId$) === a
      return (
        h[4] !== p || h[5] !== t
          ? ((r = () => {
              p || t()
            }),
            (o = [p, t]),
            (h[4] = p),
            (h[5] = t),
            (h[6] = r),
            (h[7] = o))
          : ((r = h[6]), (o = h[7])),
        (0, c.useEffect)(r, o),
        h[8] !== p || h[9] !== t || h[10] !== n
          ? ((d = p ? (0, i.jsx)(eP, { ...n, onClose: t }) : null), (h[8] = p), (h[9] = t), (h[10] = n), (h[11] = d))
          : (d = h[11]),
        d
      )
    }
    function eP(e) {
      let a,
        t,
        n = (0, s.c)(9)
      return (
        n[0] !== e.publishedShareLink?.shareLinkId ||
        n[1] !== e.publishedWidget ||
        n[2] !== e.responseRegion ||
        n[3] !== e.shareSessionId ||
        n[4] !== e.widget
          ? ((a =
              null == e.widget && null == e.publishedWidget && null == e.responseRegion
                ? void 0
                : JSON.stringify([
                    e.widget?.attachment,
                    e.responseRegion?.attachment,
                    e.publishedShareLink?.shareLinkId,
                    e.shareSessionId,
                  ])),
            (n[0] = e.publishedShareLink?.shareLinkId),
            (n[1] = e.publishedWidget),
            (n[2] = e.responseRegion),
            (n[3] = e.shareSessionId),
            (n[4] = e.widget),
            (n[5] = a))
          : (a = n[5]),
        n[6] !== e || n[7] !== a ? ((t = (0, i.jsx)(eM, { ...e }, a)), (n[6] = e), (n[7] = a), (n[8] = t)) : (t = n[8]),
        t
      )
    }
    function eM(e) {
      let a,
        t,
        p,
        m,
        v,
        C,
        M,
        B,
        q,
        V,
        K,
        Y,
        $,
        Q,
        Z,
        X,
        J,
        ee,
        ea,
        et,
        ei,
        es,
        en,
        er,
        eo,
        el,
        ec,
        ed,
        eh,
        ep,
        eg,
        eu,
        em,
        ef,
        eb,
        ev,
        ew,
        eC,
        ek,
        ey,
        ex,
        e_,
        eT,
        eS,
        eA,
        ej,
        eL,
        eP,
        eM,
        eF = (0, s.c)(363),
        {
          currentNodeId: ez,
          image: eV,
          imagePromptTemplate: eK,
          imageShareOptions: eY,
          recoveryShareLink: e$,
          publishedShareLink: eQ,
          publishedWidget: eZ,
          messageIds: eX,
          mobileImageExperience: eJ,
          mobileImageRowScrollPositions: e1,
          trackMobileImageShareLifecycle: e2,
          onImageShareLinkPrepared: e0,
          onClose: e3,
          onResult: e5,
          previewTurns: e4,
          loadExpandedConversation: e6,
          privacyNotices: e9,
          prompt: e7,
          receiverShareLink: e8,
          responseRegion: ae,
          response: aa,
          serverConversationId: at,
          shareSessionId: ai,
          source: as,
          title: an,
          widget: ar,
        } = e,
        ao = (0, l.gh)(x.u),
        al = (0, I.Ou)("1019309027"),
        [ac, ad] = (0, c.useState)(!1),
        ah = (0, l.Ul)(null)?.data,
        ap = (0, l.Ul)(null),
        ag = (0, l._U)(null, at),
        au = (0, d.A)(),
        am = (0, c.useRef)(!1),
        af = (0, c.useRef)(!1)
      ;(eF[0] !== e5
        ? ((a = () => (
            (am.current = !0),
            () => {
              ;((am.current = !1),
                queueMicrotask(() => {
                  am.current || af.current || ((af.current = !0), e5?.(!1))
                }))
            }
          )),
          (t = [e5]),
          (eF[0] = e5),
          (eF[1] = a),
          (eF[2] = t))
        : ((a = eF[1]), (t = eF[2])),
        (0, c.useEffect)(a, t),
        eF[3] !== e5
          ? ((p = function (e) {
              af.current || ((af.current = !0), e5?.(e))
            }),
            (eF[3] = e5),
            (eF[4] = p))
          : (p = eF[4]))
      let ab = p
      eF[5] !== ab || eF[6] !== e3
        ? ((m = function () {
            ;(ab(!1), e3())
          }),
          (eF[5] = ab),
          (eF[6] = e3),
          (eF[7] = m))
        : (m = eF[7])
      let av = m,
        aw = (0, c.useContext)(g.c)
      eF[8] !== eV || eF[9] !== ao || eF[10] !== at
        ? ((v = null == eV ? void 0 : (0, H.C)(ao, at, eV)), (eF[8] = eV), (eF[9] = ao), (eF[10] = at), (eF[11] = v))
        : (v = eF[11])
      let aC = v
      eF[12] !== eK || eF[13] !== aC || eF[14] !== eQ || eF[15] !== e8 || eF[16] !== e$ || eF[17] !== ao.queryClient
        ? ((C = () =>
            e8 ?? eQ ?? e$ ?? (null == aC || null != eK ? null : (ao.queryClient.getQueryData(aC.queryKey) ?? null))),
          (eF[12] = eK),
          (eF[13] = aC),
          (eF[14] = eQ),
          (eF[15] = e8),
          (eF[16] = e$),
          (eF[17] = ao.queryClient),
          (eF[18] = C))
        : (C = eF[18])
      let [ak, ay] = (0, c.useState)(C),
        [ax] = (0, c.useState)(eG),
        a_ = ai ?? ax,
        [aT, aS] = (0, c.useState)("message")
      eF[19] !== eX || eF[20] !== al || eF[21] !== e4 || eF[22] !== aa
        ? ((M = null != eX && null != aa && null != e4 && al.get("enabled", !1)),
          (eF[19] = eX),
          (eF[20] = al),
          (eF[21] = e4),
          (eF[22] = aa),
          (eF[23] = M))
        : (M = eF[23])
      let aA = M,
        aI = aA && "conversation" === aT
      eF[24] !== a_ ? ((B = ["expanded-conversation-share", a_]), (eF[24] = a_), (eF[25] = B)) : (B = eF[25])
      let aj = B,
        aL = aI && null != e6
      ;(eF[26] !== e6
        ? ((q = (e) => {
            let { signal: a } = e
            if (null == e6) throw Error("Expanded conversation loader unavailable")
            return e6(a)
          }),
          (eF[26] = e6),
          (eF[27] = q))
        : (q = eF[27]),
        eF[28] !== aj || eF[29] !== q || eF[30] !== aL
          ? ((V = { enabled: aL, queryKey: aj, queryFn: q, staleTime: 1 / 0, gcTime: 0, retry: !1 }),
            (eF[28] = aj),
            (eF[29] = q),
            (eF[30] = aL),
            (eF[31] = V))
          : (V = eF[31]))
      let { data: aP, error: aM, isFetching: aD, refetch: aE } = (0, o.I)(V),
        [aN, aO] = (0, c.useState)("idle"),
        [aG, aR] = (0, c.useState)(null != e$ ? "copy-failed" : null),
        [aF, aH] = (0, c.useState)(!1)
      eF[32] !== at ? ((K = ["chatgpt-conversation-share", at]), (eF[32] = at), (eF[33] = K)) : (K = eF[33])
      let aW = K,
        aU =
          null == e$ &&
          null == e8 &&
          null == eQ &&
          null == e7 &&
          null == eV &&
          (null == eX || aI) &&
          null == ae &&
          null == ar
      ;(eF[34] !== ez || eF[35] !== at
        ? ((Y = () => (0, E.MJ)({ conversationId: at, currentNodeId: ez })), (eF[34] = ez), (eF[35] = at), (eF[36] = Y))
        : (Y = eF[36]),
        eF[37] !== aW || eF[38] !== aU || eF[39] !== Y
          ? (($ = { enabled: aU, queryFn: Y, queryKey: aW, retry: !1, staleTime: P.D.ONE_MINUTE }),
            (eF[37] = aW),
            (eF[38] = aU),
            (eF[39] = Y),
            (eF[40] = $))
          : ($ = eF[40]))
      let { data: aB, error: aq, isLoading: az } = (0, o.I)($)
      eF[41] === Symbol.for("react.memo_cache_sentinel")
        ? ((Q = { enabled: !1, queryFn: eO, queryKey: ["accounts", "check"], staleTime: P.D.ONE_MINUTE }), (eF[41] = Q))
        : (Q = eF[41])
      let { data: aV } = (0, o.I)(Q),
        aK = null != eV,
        aY = null != eJ && aK,
        a$ = aY || !0 === e2,
        aQ = null != e8,
        aZ = (eV?.additionalImages?.length ?? 0) > 0,
        aX = eV?.item.isAnimated === !0 && !aZ
      eF[42] !== eV || eF[43] !== at || eF[44] !== a_
        ? ((Z = (0, D.Qt)((0, R.q3)(at), void 0, null != eV && null == eV.previewSrc ? a_ : void 0)),
          (eF[42] = eV),
          (eF[43] = at),
          (eF[44] = a_),
          (eF[45] = Z))
        : (Z = eF[45])
      let { src: aJ, isLoading: a1 } = (0, j.vM)(
          null != eV && (aZ || null == eV.previewSrc) ? (eV.item.src ?? "") : "",
          Z,
        ),
        a2 = null != eV && null == eV.previewSrc && null == aJ,
        a0 = aZ ? "image_series" : "single_image",
        a3 = ar ?? eZ,
        a5 = null != eX || null != ae || null != a3 || e8?.contentType === "message",
        a4 = null != ae,
        a6 = a3?.metadata.widgetType === "visualization",
        a9 =
          a3?.metadata.widgetName === "create_interactive_poll" || a3?.metadata.widgetName === "CreateInteractivePoll",
        a7 = null != e7 || null != eK,
        a8 = aK || a5 || a7,
        te = !a8 || aI,
        ta = a8 || !1,
        tt = "conversation"
      if (
        (a6
          ? (tt = "widget")
          : null != eK
            ? (tt = "prompt")
            : aX
              ? (tt = "gif")
              : aK
                ? (tt = aZ ? "images" : "image")
                : a4
                  ? (tt = "response-region")
                  : a5
                    ? (tt = aI ? "conversation" : "message")
                    : a7 && (tt = "prompt"),
        null == aa)
      )
        X = e9
      else if (aI) X = aP?.privacyNotices ?? (null == e6 ? e9 : void 0)
      else {
        let e
        ;(eF[46] !== aa ? ((e = (0, E.XH)(aa)), (eF[46] = aa), (eF[47] = e)) : (e = eF[47]), (X = e))
      }
      let ti = aK || ((!a8 || a5) && X?.hasImageReference === !0)
      eF[48] !== eV || eF[49] !== aZ || eF[50] !== an
        ? ((J = (aZ ? void 0 : eV?.item.chatGptDisplayTitle) ?? (0, O.L6)(an)),
          (eF[48] = eV),
          (eF[49] = aZ),
          (eF[50] = an),
          (eF[51] = J))
        : (J = eF[51])
      let ts = J,
        tn = te && aB?.is_public === !0 && !0 === aB.is_visible,
        tr = aV?.accounts?.find((e) => e.id === (aw?.accountId ?? aV.account_ordering?.[0])),
        to = tr?.structure ?? aw?.accountStructureAtLogin,
        tl = "unknown"
      ;(ak?.isWorkspaceOnly != null
        ? (tl = ak.isWorkspaceOnly ? "workspace" : "public")
        : null == aB || aK
          ? ("personal" === to || "workspace" === to) && (tl = "workspace" === to ? "workspace" : "public")
          : (tl = aB.share_url.includes("/share/e/") ? "workspace" : "public"),
        eF[52] !== eV || eF[53] !== eK || eF[54] !== aC?.queryKey || eF[55] !== at
          ? ((ee =
              null != eK
                ? ["chatgpt-image-prompt-share-preparation", at, eV?.item.id, eK.revision]
                : (aC?.queryKey ?? ["disabled-chatgpt-image-share-query"])),
            (eF[52] = eV),
            (eF[53] = eK),
            (eF[54] = aC?.queryKey),
            (eF[55] = at),
            (eF[56] = ee))
          : (ee = eF[56]),
        eF[57] !== eK || eF[58] !== aC?.queryFn
          ? ((ea = null != eK ? () => eK.createLink("native") : (aC?.queryFn ?? eN)),
            (eF[57] = eK),
            (eF[58] = aC?.queryFn),
            (eF[59] = ea))
          : (ea = eF[59]))
      let tc =
        aY && (0, W.P)() && eK?.actionsDisabled !== !0 && (null != eK || null != aC) && "public" === tl && null == ak
      eF[60] !== ee || eF[61] !== ea || eF[62] !== tc
        ? ((et = { queryKey: ee, queryFn: ea, enabled: tc, retry: !1, staleTime: 1 / 0 }),
          (eF[60] = ee),
          (eF[61] = ea),
          (eF[62] = tc),
          (eF[63] = et))
        : (et = eF[63])
      let td = (0, o.I)(et)
      td.data?.isWorkspaceOnly != null && (tl = td.data.isWorkspaceOnly ? "workspace" : "public")
      let th = ak ?? td.data ?? null,
        tp = null == eK ? th : null
      ;(eF[64] !== e0 || eF[65] !== tp
        ? ((ei = () => {
            null != tp && e0?.(tp)
          }),
          (es = [e0, tp]),
          (eF[64] = e0),
          (eF[65] = tp),
          (eF[66] = ei),
          (eF[67] = es))
        : ((ei = eF[66]), (es = eF[67])),
        (0, c.useEffect)(ei, es))
      let tg = th?.shareLinkUrl ?? (tn ? aB.share_url : null),
        tu = te && null == th && tn && aB.current_node_id !== ez,
        tm = "workspace" === tl,
        tf = "creating" === aN,
        tb = aI && null != e6 && null == aP,
        tv = (te && az) || (tb && aD)
      eF[68] !== th ||
      eF[69] !== aG ||
      eF[70] !== aM ||
      eF[71] !== aq ||
      eF[72] !== td.error ||
      eF[73] !== tb ||
      eF[74] !== aU
        ? (null == (en = aG) && tb && null != aM && (en = "conversation-load-failed"),
          null == en && aU && null == th && null != aq && (en = aq instanceof E.kl ? "blocked" : "create-failed"),
          null == en && null == th && null != td.error && (en = td.error instanceof E.kl ? "blocked" : "create-failed"),
          (eF[68] = th),
          (eF[69] = aG),
          (eF[70] = aM),
          (eF[71] = aq),
          (eF[72] = td.error),
          (eF[73] = tb),
          (eF[74] = aU),
          (eF[75] = en))
        : (en = eF[75])
      let tw = eq.description,
        tC = eq.publicLinkAudience
      if (a6) {
        let e
        ;(eF[76] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(h.A, { ...eq.widgetTitle })), (eF[76] = e))
          : (e = eF[76]),
          (er = e))
      } else if (aX) {
        let e
        ;(eF[77] !== eK
          ? ((e =
              null != eK
                ? (0, i.jsx)(h.A, {
                    id: "chatgptConversations.shareDialog.gifWithPromptTitle",
                    defaultMessage: "Share GIF with prompt",
                    description:
                      "Heading of the generated GIF sharing dialog when GIF with prompt is selected. Shares the animated GIF and its reusable prompt. The other option is GIF only.",
                  })
                : (0, i.jsx)(h.A, {
                    id: "chatgptConversations.shareDialog.gifTitle",
                    defaultMessage: "Share GIF",
                    description:
                      "Heading of the dialog for sharing one generated animated GIF. Keep GIF as the file format name.",
                  })),
            (eF[77] = eK),
            (eF[78] = e))
          : (e = eF[78]),
          (er = e))
      } else if (null != eK) {
        let e
        ;(eF[79] !== eK.label
          ? ((e =
              "image_with_prompt" === eK.label
                ? (0, i.jsx)(h.A, {
                    id: "chatgptConversations.shareDialog.imageWithPromptTitle",
                    defaultMessage: "Share image with prompt",
                    description:
                      "Heading of the generated-image share dialog when Image with prompt is selected. Users share the generated image together with its reusable prompt so recipients can try the prompt. The other option is Image only.",
                  })
                : (0, i.jsx)(h.A, {
                    id: "chatgptConversations.shareDialog.imagePromptTitle",
                    defaultMessage: "Share prompt with image",
                    description:
                      "Short heading of the generated-image share dialog when Prompt with image is selected. Users share the generated image and its reusable prompt so recipients can try the prompt. The other option is Image only.",
                  })),
            (eF[79] = eK.label),
            (eF[80] = e))
          : (e = eF[80]),
          (er = e))
      } else if (aK) {
        let e
        ;(eF[81] !== ts || eF[82] !== eY || eF[83] !== aZ || eF[84] !== aY
          ? ((e =
              aY || null == ts || null != eY
                ? (0, i.jsx)(h.A, { ...(aZ ? eq.imagesTitle : eq.imageTitle) })
                : (0, i.jsx)(i.Fragment, { children: ts })),
            (eF[81] = ts),
            (eF[82] = eY),
            (eF[83] = aZ),
            (eF[84] = aY),
            (eF[85] = e))
          : (e = eF[85]),
          (er = e))
      } else if (a9) {
        let e
        ;(eF[86] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(h.A, {
              id: "chatgptConversations.shareDialog.poll.title",
              defaultMessage: "Share poll",
              description:
                "Short heading of the dialog for sharing one interactive poll. The user can create or send a link so other people can vote on the poll.",
            })),
            (eF[86] = e))
          : (e = eF[86]),
          (er = e))
      } else if (a4) {
        let e
        ;(eF[87] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(h.A, {
              id: "chatgptConversations.shareDialog.responseRegionTitle",
              defaultMessage: "Share",
              description:
                "Short heading of the dialog for sharing one selected section of an interactive ChatGPT response.",
            })),
            (eF[87] = e))
          : (e = eF[87]),
          (er = e))
      } else if (a5) {
        let e
        ;(eF[88] !== ts
          ? ((e = null == ts ? (0, i.jsx)(h.A, { ...eq.messageTitle }) : (0, i.jsx)(i.Fragment, { children: ts })),
            (eF[88] = ts),
            (eF[89] = e))
          : (e = eF[89]),
          (er = e))
      } else if (a7) {
        let e
        ;(eF[90] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(h.A, { ...eq.promptTitle })), (eF[90] = e))
          : (e = eF[90]),
          (er = e))
      } else {
        if (ta) {
          let e
          ;(eF[91] !== ts
            ? ((e = null == ts ? void 0 : (0, i.jsx)(i.Fragment, { children: ts })), (eF[91] = ts), (eF[92] = e))
            : (e = eF[92]),
            (er = e))
        }
        tm
          ? (tw = e9?.isProjectConversation ? eq.workspaceProjectDescription : eq.workspaceDescription)
          : aB?.is_anonymous === !1
            ? (tw = eq.attributedDescription)
            : e9?.isProjectConversation && (tw = eq.projectDescription)
      }
      tm && (tC = ti ? eq.workspaceImageRightsAudience : eq.workspaceLinkAudience)
      let tk = "copied" === aN ? eq.copied : eq.copyLink
      ;(tu ? (tk = eq.updateLink) : null == tg && "copied" !== aN && (tk = eq.createLink),
        eF[93] !== au || eF[94] !== aN
          ? ((eo = "copied" === aN ? au.formatMessage(eq.copied) : au.formatMessage(eq.copyLink)),
            (eF[93] = au),
            (eF[94] = aN),
            (eF[95] = eo))
          : (eo = eF[95]))
      let ty = eo
      eF[96] !== ab || eF[97] !== au || eF[98] !== ao || eF[99] !== ar
        ? ((el = function (e, a) {
            let t
            "create-failed" === a && (ab(!1), ar?.onError?.(e))
            let i = e instanceof E.kl ? "blocked" : a
            switch (
              ("blocked" !== i &&
                L.v.warning("chatgpt_conversation_share_failed", { safe: { stage: i }, sensitive: { error: e } }),
              i)
            ) {
              case "blocked":
                t = au.formatMessage(eq.shareBlocked)
                break
              case "copy-failed":
                t = au.formatMessage(eq.shareCopyFailed)
                break
              case "create-failed":
                t = au.formatMessage(eq.shareCreateFailed)
            }
            return (
              aR(i),
              aO("idle"),
              ao
                .get(k.Id)
                .danger(t, {
                  errorAnalytics: {
                    toastId: {
                      "copy-failed": "failed_to_copy_share_link",
                      "create-failed": "failed_to_generate_share_link",
                      blocked: "chatgptConversationShareDialog.shareBlocked",
                    }[i],
                  },
                }),
              i
            )
          }),
          (eF[96] = ab),
          (eF[97] = au),
          (eF[98] = ao),
          (eF[99] = ar),
          (eF[100] = el))
        : (el = eF[100])
      let tx = el
      eF[101] !== a3 ||
      eF[102] !== aK ||
      eF[103] !== a5 ||
      eF[104] !== a7 ||
      eF[105] !== aQ ||
      eF[106] !== a4 ||
      eF[107] !== e8 ||
      eF[108] !== aI ||
      eF[109] !== as
        ? ((ec = aQ ? "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER" : "CHATGPT_SHARE_FLOW_ACTOR_SHARER"),
          (eh = aQ
            ? "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_HEADER"
            : (as ?? "CHATGPT_SHARE_FLOW_SOURCE_CONVERSATION_MENU")),
          null != e8
            ? (ed = e8.attachmentType)
            : null != a3
              ? ((ed = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_WIDGET"),
                (eh = "CHATGPT_SHARE_FLOW_SOURCE_WIDGET_INLINE_ACTION"))
              : aK
                ? ((ed = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_IMAGE_SHARE"),
                  (eh = as ?? "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION"))
                : a4
                  ? ((ed = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_OTHER"),
                    (eh = "CHATGPT_SHARE_FLOW_SOURCE_WIDGET_INLINE_ACTION"))
                  : a5
                    ? ((eh = "CHATGPT_SHARE_FLOW_SOURCE_MESSAGE_INLINE_ACTION"),
                      aI || (ed = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_MESSAGE_SLICE"))
                    : a7 &&
                      ((ed = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_PROMPT"),
                      (eh = as ?? "CHATGPT_SHARE_FLOW_SOURCE_MESSAGE_INLINE_ACTION")),
          (eF[101] = a3),
          (eF[102] = aK),
          (eF[103] = a5),
          (eF[104] = a7),
          (eF[105] = aQ),
          (eF[106] = a4),
          (eF[107] = e8),
          (eF[108] = aI),
          (eF[109] = as),
          (eF[110] = ec),
          (eF[111] = ed),
          (eF[112] = eh))
        : ((ec = eF[110]), (ed = eF[111]), (eh = eF[112]))
      let t_ =
        (e8?.contentType === "message" || a8) && !aI
          ? "CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE"
          : "CHATGPT_SHARE_FLOW_CONTENT_TYPE_SHARED_CONVERSATION"
      eF[113] !== th ||
      eF[114] !== ez ||
      eF[115] !== tn ||
      eF[116] !== aB ||
      eF[117] !== ab ||
      eF[118] !== eK ||
      eF[119] !== aC ||
      eF[120] !== tb ||
      eF[121] !== tu ||
      eF[122] !== eX ||
      eF[123] !== e0 ||
      eF[124] !== e7 ||
      eF[125] !== ae ||
      eF[126] !== ao ||
      eF[127] !== at ||
      eF[128] !== aW ||
      eF[129] !== aI ||
      eF[130] !== an ||
      eF[131] !== te ||
      eF[132] !== ar
        ? ((ep = async function (e) {
            let a
            if (null != ar && (!am.current || ar.isCurrent?.() === !1))
              throw Error("The selected widget is no longer available")
            if (null != ae && (!am.current || ae.isCurrent?.() === !1))
              throw Error("The selected response region is no longer available")
            if (tb) throw Error("Expanded conversation unavailable")
            let t =
              th ??
              (tn ? { currentNodeId: aB.current_node_id, shareLinkId: aB.share_id, shareLinkUrl: aB.share_url } : null)
            if (null == eK && null != t && !tu) return (ab(!0), t)
            if (null != eK) a = await eK.createLink(e)
            else if (null != aC) ((a = await ao.queryClient.fetchQuery(aC)), e0?.(a))
            else if (null != ar) {
              if (((a = await (0, E.fA)(ar.attachment, ez)), !am.current || ar.isCurrent?.() === !1))
                throw Error("The selected widget changed while sharing")
            } else if (null != ae) {
              if (
                ((a = await (0, E.IO)({
                  conversationId: ae.attachment.conversation_id,
                  currentNodeId: ez,
                  messageId: ae.attachment.message_id,
                  targetId: ae.attachment.target_id,
                })),
                !am.current || ae.isCurrent?.() === !1)
              )
                throw Error("The selected response region changed while sharing")
            } else
              a =
                null == eX || aI
                  ? null != e7
                    ? await ao.queryClient.fetchQuery({
                        queryFn: () => (0, E.Dr)({ conversationId: at, messageId: e7.messageId }),
                        queryKey: ["chatgpt-prompt-share", at, e7.messageId],
                        staleTime: 1 / 0,
                      })
                    : await (0, E.v8)({ conversationId: at, currentNodeId: ez, existingShareLink: aB, title: an })
                  : await ao.queryClient.fetchQuery({
                      queryFn: () => (0, E.sq)({ conversationId: at, currentNodeId: ez, messageIds: eX }),
                      queryKey: ["chatgpt-message-share", ao.get(u.chatGptAuthenticatedAccountId$), at, ez, eX],
                      staleTime: 1 / 0,
                    })
            return (
              ay(a),
              ab(!0),
              null != aB &&
                te &&
                ao.queryClient.setQueryData(aW, { ...aB, current_node_id: ez, is_public: !0, is_visible: !0 }),
              a
            )
          }),
          (eF[113] = th),
          (eF[114] = ez),
          (eF[115] = tn),
          (eF[116] = aB),
          (eF[117] = ab),
          (eF[118] = eK),
          (eF[119] = aC),
          (eF[120] = tb),
          (eF[121] = tu),
          (eF[122] = eX),
          (eF[123] = e0),
          (eF[124] = e7),
          (eF[125] = ae),
          (eF[126] = ao),
          (eF[127] = at),
          (eF[128] = aW),
          (eF[129] = aI),
          (eF[130] = an),
          (eF[131] = te),
          (eF[132] = ar),
          (eF[133] = ep))
        : (ep = eF[133])
      let tT = ep
      eF[134] !== ec ||
      eF[135] !== ed ||
      eF[136] !== t_ ||
      eF[137] !== th ||
      eF[138] !== a3?.metadata ||
      eF[139] !== tT ||
      eF[140] !== tn ||
      eF[141] !== aB ||
      eF[142] !== eK ||
      eF[143] !== a2 ||
      eF[144] !== aQ ||
      eF[145] !== tu ||
      eF[146] !== tf ||
      eF[147] !== e3 ||
      eF[148] !== tx ||
      eF[149] !== ao ||
      eF[150] !== at ||
      eF[151] !== tg ||
      eF[152] !== a_ ||
      eF[153] !== eh ||
      eF[154] !== ta
        ? ((eg = async function () {
            if (tf || a2 || eK?.actionsDisabled) return
            let e = (0, G.p_)(ao, {
              actor: ec,
              attachmentType: ed,
              widgetMetadata: a3?.metadata,
              contentType: t_,
              conversationId: aQ ? void 0 : at,
              shareId: th?.shareLinkId ?? (tn ? aB.share_id : void 0),
              shareSessionId: a_,
              source: eh,
              usedExistingLink: null != tg && !tu,
            })
            ;(aR(null), aO("creating"))
            let a = null != eK || null == tg || tu ? "create-failed" : "copy-failed",
              t = th
            try {
              let i = tT("copy"),
                s = await i
              ;((t = s), (a = "copy-failed"))
              let n = s.shareLinkUrl
              if (!(await (0, T.y2)(n))) {
                ;(e({ result: "copy-failed", shareId: s.shareLinkId }),
                  tx(Error("Failed to copy ChatGPT conversation share link"), "copy-failed"))
                return
              }
              ;(e({ result: "link-copied", shareId: s.shareLinkId }), aO("copied"), ta || ((0, _.o)(ao), e3()))
            } catch (s) {
              let i = tx(s, a)
              e("create-failed" === i ? { result: i, error: s } : { result: i, shareId: t?.shareLinkId })
            }
          }),
          (eF[134] = ec),
          (eF[135] = ed),
          (eF[136] = t_),
          (eF[137] = th),
          (eF[138] = a3?.metadata),
          (eF[139] = tT),
          (eF[140] = tn),
          (eF[141] = aB),
          (eF[142] = eK),
          (eF[143] = a2),
          (eF[144] = aQ),
          (eF[145] = tu),
          (eF[146] = tf),
          (eF[147] = e3),
          (eF[148] = tx),
          (eF[149] = ao),
          (eF[150] = at),
          (eF[151] = tg),
          (eF[152] = a_),
          (eF[153] = eh),
          (eF[154] = ta),
          (eF[155] = eg))
        : (eg = eF[155])
      let tS = eg
      eF[156] !== ed ||
      eF[157] !== t_ ||
      eF[158] !== th ||
      eF[159] !== ao ||
      eF[160] !== at ||
      eF[161] !== a_ ||
      eF[162] !== a$ ||
      eF[163] !== eh
        ? ((eu = function (e) {
            ;(0, y.yy)(ao, n.HX, {
              action: e,
              actor: "CHATGPT_SHARE_FLOW_ACTOR_SHARER",
              attachmentType: ed,
              contentType: t_,
              conversationId: at,
              ...(a$ && null != th && !th.isWorkspaceOnly ? { shareId: th.shareLinkId } : {}),
              shareSessionId: a_,
              source: eh,
              sheetType: "CHATGPT_SHARE_FLOW_SHEET_TYPE_CUSTOM",
            })
          }),
          (eF[156] = ed),
          (eF[157] = t_),
          (eF[158] = th),
          (eF[159] = ao),
          (eF[160] = at),
          (eF[161] = a_),
          (eF[162] = a$),
          (eF[163] = eh),
          (eF[164] = eu))
        : (eu = eF[164])
      let tA = eu
      eF[165] !== th ||
      eF[166] !== en ||
      eF[167] !== ab ||
      eF[168] !== aC ||
      eF[169] !== au ||
      eF[170] !== tf ||
      eF[171] !== e3 ||
      eF[172] !== tx ||
      eF[173] !== ao ||
      eF[174] !== at ||
      eF[175] !== tl ||
      eF[176] !== a_ ||
      eF[177] !== eh
        ? ((em = async function () {
            if (!tf && null != aC && "public" === tl && null != th && "blocked" !== en) {
              ;(aR(null), aO("creating"))
              try {
                let e = await (0, W.C)(ao, th, at, a_, eh)
                ;(aO("idle"),
                  "shared" === e && (ab(!0), e3()),
                  "failed" === e &&
                    ao
                      .get(k.Id)
                      .danger(
                        au.formatMessage({
                          id: "chatgptConversations.mobileImageShare.nativeFailed",
                          defaultMessage: "Could not open sharing. Try again or copy the link",
                          description:
                            "Error in the mobile image share sheet when the device cannot open native link sharing. The user can retry or use Copy link",
                        }),
                        { errorAnalytics: { toastId: "chatgptConversations.mobileImageShare.nativeFailed" } },
                      ))
              } catch (e) {
                tx(e, "create-failed")
              }
            }
          }),
          (eF[165] = th),
          (eF[166] = en),
          (eF[167] = ab),
          (eF[168] = aC),
          (eF[169] = au),
          (eF[170] = tf),
          (eF[171] = e3),
          (eF[172] = tx),
          (eF[173] = ao),
          (eF[174] = at),
          (eF[175] = tl),
          (eF[176] = a_),
          (eF[177] = eh),
          (eF[178] = em))
        : (em = eF[178])
      let tI = em
      eF[179] !== ec ||
      eF[180] !== ed ||
      eF[181] !== t_ ||
      eF[182] !== th ||
      eF[183] !== ts ||
      eF[184] !== a3?.metadata ||
      eF[185] !== tT ||
      eF[186] !== tn ||
      eF[187] !== aB ||
      eF[188] !== eK ||
      eF[189] !== a0 ||
      eF[190] !== au ||
      eF[191] !== aK ||
      eF[192] !== a2 ||
      eF[193] !== a7 ||
      eF[194] !== aQ ||
      eF[195] !== tu ||
      eF[196] !== tf ||
      eF[197] !== eJ?.unsupportedDestinationFallback ||
      eF[198] !== e3 ||
      eF[199] !== tx ||
      eF[200] !== ao ||
      eF[201] !== at ||
      eF[202] !== tl ||
      eF[203] !== aN ||
      eF[204] !== a_ ||
      eF[205] !== a$ ||
      eF[206] !== eh ||
      eF[207] !== aY
        ? ((ef = async function (e, a) {
            var t
            let i
            if (tf || a2 || "public" !== tl || eK?.actionsDisabled) return
            ;(a.preventDefault(),
              aQ ||
                a7 ||
                ("line" !== (t = e) && "linkedin" !== t && "reddit" !== t && "x" !== t) ||
                (0, G.$D)(ao, e, aK ? a0 : void 0))
            let s = a$ && aK ? at : void 0
            ;(0, G.Mr)(ao, {
              actor: ec,
              attachmentType: ed,
              conversationId: s,
              widgetMetadata: a3?.metadata,
              contentType: t_,
              destination: (function (e) {
                switch (e) {
                  case "messages":
                    return "CHATGPT_SHARE_FLOW_DESTINATION_MESSAGES"
                  case "whatsapp":
                    return "CHATGPT_SHARE_FLOW_DESTINATION_WHATSAPP"
                  case "telegram":
                    return "CHATGPT_SHARE_FLOW_DESTINATION_TELEGRAM"
                  case "facebook-messenger":
                    return "CHATGPT_SHARE_FLOW_DESTINATION_FACEBOOK_MESSENGER"
                  case "facebook-stories":
                    return "CHATGPT_SHARE_FLOW_DESTINATION_FACEBOOK_STORIES"
                  case "instagram-stories":
                    return "CHATGPT_SHARE_FLOW_DESTINATION_INSTAGRAM_STORIES"
                  case "kakao-talk":
                    return "CHATGPT_SHARE_FLOW_DESTINATION_KAKAO_TALK"
                  case "snapchat-stories":
                    return "CHATGPT_SHARE_FLOW_DESTINATION_SNAPCHAT"
                  case "line":
                    return "CHATGPT_SHARE_FLOW_DESTINATION_LINE"
                  case "linkedin":
                    return "CHATGPT_SHARE_FLOW_DESTINATION_LINKEDIN"
                  case "reddit":
                    return "CHATGPT_SHARE_FLOW_DESTINATION_REDDIT"
                  case "x":
                    return "CHATGPT_SHARE_FLOW_DESTINATION_TWITTER"
                }
              })(e),
              shareId: th?.shareLinkId ?? (tn && !tu ? aB.share_id : void 0),
              shareSessionId: a_,
              source: eh,
            })
            let n = aY && (0, z.NS)(e)
            if (n && eJ?.unsupportedDestinationFallback === "app-store") {
              let t = (0, r.UL)() ? "android" : (0, r.G1)() || (0, r.Y_)() ? "ios" : null,
                i = null == t ? null : (0, z.Sy)(e, t)
              if (null != i)
                return void (0, b.PQ)({
                  event: a,
                  href: i,
                  initiator: "open_in_browser_bridge",
                  openTarget: "external-browser",
                })
            }
            ;(aR(null), aO("creating"))
            try {
              i = await tT("social")
            } catch (e) {
              ;(e instanceof E.kl ||
                (0, G.mG)(ao, {
                  actor: ec,
                  attachmentType: ed,
                  conversationId: s,
                  widgetMetadata: a3?.metadata,
                  contentType: t_,
                  shareSessionId: a_,
                  source: eh,
                }),
                tx(e, "create-failed"))
              return
            }
            if (!0 === i.isWorkspaceOnly) return void aO(aN)
            if (n) {
              let e = await (0, W.C)(ao, i, at, a_, eh)
              ;(aO(aN),
                "shared" === e
                  ? e3()
                  : "failed" === e &&
                    ao
                      .get(k.Id)
                      .danger(
                        au.formatMessage({
                          id: "chatgptConversations.mobileImageShare.nativeFailed",
                          defaultMessage: "Could not open sharing. Try again or copy the link",
                          description:
                            "Error in the mobile image share sheet when the device cannot open native link sharing. The user can retry or use Copy link",
                        }),
                        { errorAnalytics: { toastId: "chatgptConversations.mobileImageShare.nativeFailed" } },
                      ))
              return
            }
            let o = (0, z.lP)({
              destination: e,
              isAppleDevice: (0, r.G1)() || (0, r.Y_)(),
              shareUrl: i.shareLinkUrl,
              title: i.title ?? ts,
            })
            null == o
              ? aO(aN)
              : ("messages" === e
                  ? ((window.location.href = o), (0, b.x0)({ href: o, modifiedClick: !1 }))
                  : (0, b.PQ)({
                      event: a,
                      href: o,
                      initiator: "open_in_browser_bridge",
                      openTarget: "external-browser",
                    }),
                aO(aN))
          }),
          (eF[179] = ec),
          (eF[180] = ed),
          (eF[181] = t_),
          (eF[182] = th),
          (eF[183] = ts),
          (eF[184] = a3?.metadata),
          (eF[185] = tT),
          (eF[186] = tn),
          (eF[187] = aB),
          (eF[188] = eK),
          (eF[189] = a0),
          (eF[190] = au),
          (eF[191] = aK),
          (eF[192] = a2),
          (eF[193] = a7),
          (eF[194] = aQ),
          (eF[195] = tu),
          (eF[196] = tf),
          (eF[197] = eJ?.unsupportedDestinationFallback),
          (eF[198] = e3),
          (eF[199] = tx),
          (eF[200] = ao),
          (eF[201] = at),
          (eF[202] = tl),
          (eF[203] = aN),
          (eF[204] = a_),
          (eF[205] = a$),
          (eF[206] = eh),
          (eF[207] = aY),
          (eF[208] = ef))
        : (ef = eF[208])
      let tj = ef
      eF[209] !== eV ||
      eF[210] !== a0 ||
      eF[211] !== au ||
      eF[212] !== aF ||
      eF[213] !== aZ ||
      eF[214] !== a2 ||
      eF[215] !== tA ||
      eF[216] !== ao ||
      eF[217] !== at
        ? ((eb = async function () {
            if (null == eV || aF || a2) return
            ;(0, G.$D)(ao, "download", a0)
            let e = [eV.item, ...(eV.additionalImages ?? [])].filter(eE)
            0 !== e.length &&
              ((0, U.Iw)(ao, {
                image: eV.downloadAnalyticsImage ?? eV.item,
                conversationId: at,
                entryPoint: "CHATGPT_IMAGE_DOWNLOAD_ENTRY_POINT_CUSTOM_SHARE_SHEET",
                downloadScope: aZ ? "CHATGPT_IMAGE_DOWNLOAD_SCOPE_SERIES" : "CHATGPT_IMAGE_DOWNLOAD_SCOPE_SINGLE",
                requestedImageCount: e.length,
                isParagen: eV.downloadIsParagen,
              }),
              aH(!0),
              tA("CHATGPT_SHARE_FLOW_ACTION_DOWNLOAD_SELECTED"),
              await (0, F.F)(ao, {
                images: e,
                intl: au,
                serverConversationId: (0, R.q3)(at),
                logIndividualDownloads: !1,
              })
                .then((e) => {
                  "downloaded" === e && (0, U.BZ)(ao, at, eV.item)
                })
                .finally(() => {
                  aH(!1)
                }))
          }),
          (eF[209] = eV),
          (eF[210] = a0),
          (eF[211] = au),
          (eF[212] = aF),
          (eF[213] = aZ),
          (eF[214] = a2),
          (eF[215] = tA),
          (eF[216] = ao),
          (eF[217] = at),
          (eF[218] = eb))
        : (eb = eF[218])
      let tL = eb
      eF[219] !== eV?.additionalImages?.length || eF[220] !== aZ
        ? ((ev = aZ
            ? (0, i.jsx)(h.A, {
                id: "chatgptConversations.shareDialog.imageSeriesCount",
                defaultMessage: "Sharing {imageCount} images together",
                description:
                  "Subtitle beneath the generated-image share modal title after choosing to share a series. imageCount is the number of images included in the link, always greater than one. This informs the user that all listed images are shared together.",
                values: { imageCount: 1 + (eV?.additionalImages?.length ?? 0) },
              })
            : void 0),
          (eF[219] = eV?.additionalImages?.length),
          (eF[220] = aZ),
          (eF[221] = ev))
        : (ev = eF[221])
      let tP = ev,
        tM = tP
      if (!aZ && !ta) {
        let e
        ;(eF[222] !== tw ? ((e = (0, i.jsx)(h.A, { ...tw })), (eF[222] = tw), (eF[223] = e)) : (e = eF[223]), (tM = e))
      }
      if (null != eK) {
        let e
        ;(eF[224] !== aY
          ? ((e = aY
              ? (0, i.jsx)(h.A, {
                  id: "imagePromptShare.audience",
                  defaultMessage: "Anyone with the link can try this prompt",
                  description: "Audience description when sharing a generated image as a reusable prompt template",
                })
              : void 0),
            (eF[224] = aY),
            (eF[225] = e))
          : (e = eF[225]),
          (tM = e))
      } else if (aY) {
        let e, a, t
        ;(eF[226] !== tl
          ? ((e =
              "public" === tl
                ? (0, i.jsx)(h.A, {
                    id: "chatgptConversations.mobileImageShare.publicAudience",
                    defaultMessage: "Anyone with the link can view",
                    description: "Audience disclosure in the mobile generated-image share sheet for a public link",
                  })
                : null),
            (eF[226] = tl),
            (eF[227] = e))
          : (e = eF[227]),
          eF[228] !== tl
            ? ((a =
                "public" !== tl &&
                (0, i.jsx)(h.A, {
                  id: "chatgptConversations.mobileImageShare.workspaceAudience",
                  defaultMessage: "Only workspace members with the link can view",
                  description:
                    "Audience disclosure below Share image in the mobile image share sheet for a workspace account",
                })),
              (eF[228] = tl),
              (eF[229] = a))
            : (a = eF[229]),
          eF[230] !== e || eF[231] !== a
            ? ((t = (0, i.jsxs)(i.Fragment, { children: [e, a] })), (eF[230] = e), (eF[231] = a), (eF[232] = t))
            : (t = eF[232]),
          (tM = t))
      }
      if (
        (aY ? (ew = "responsiveSheet") : ta && (ew = "share"),
        aY && (eC = eJ?.layout === "two-rows" ? "imageSheetTwoRows" : "imageSheet"),
        null != eK)
      ) {
        let e
        if (eF[233] !== eV?.previewSrc || eF[234] !== eK || eF[235] !== tf || eF[236] !== aJ) {
          let a
          ;(eF[238] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = () => {
                ;(aR(null), aO("idle"))
              }),
              (eF[238] = a))
            : (a = eF[238]),
            (e = eK.preview(tf, eV?.previewSrc ?? aJ ?? null, a)),
            (eF[233] = eV?.previewSrc),
            (eF[234] = eK),
            (eF[235] = tf),
            (eF[236] = aJ),
            (eF[237] = e))
        } else e = eF[237]
        ek = e
      } else {
        let e
        ;(eF[239] !== a3 ||
        eF[240] !== aP ||
        eF[241] !== aj ||
        eF[242] !== eV ||
        eF[243] !== eC ||
        eF[244] !== au ||
        eF[245] !== a1 ||
        eF[246] !== aZ ||
        eF[247] !== a6 ||
        eF[248] !== e6 ||
        eF[249] !== e4 ||
        eF[250] !== e7 ||
        eF[251] !== aJ ||
        eF[252] !== aa ||
        eF[253] !== ae ||
        eF[254] !== ao.queryClient ||
        eF[255] !== at ||
        eF[256] !== a_ ||
        eF[257] !== aI ||
        eF[258] !== aY
          ? ((e =
              null != eV
                ? (0, i.jsx)(A.Y, {
                    ariaLabel: aZ ? au.formatMessage(eq.imagesPreview) : eV.alt,
                    expandedContent: (0, i.jsxs)("div", {
                      className: "flex flex-col gap-4",
                      children: [
                        (0, i.jsx)(eW, { src: aZ ? aJ : (eV.previewSrc ?? aJ), isLoading: a1, alt: eV.alt }),
                        eV.additionalPublishedPreviewUrls?.map(eD),
                        eV.additionalImages?.map((e) => (0, i.jsx)(eH, { item: e, serverConversationId: at }, e.id)),
                      ],
                    }),
                    variant: "image",
                    classicImagePreviewEligible: !aZ && !aY,
                    presentation: eC,
                    children:
                      aZ || null == eV.previewSrc
                        ? (0, i.jsx)(eW, { src: aJ, isLoading: a1 })
                        : (0, i.jsx)("img", {
                            alt: eV.alt,
                            className: aY ? void 0 : "block size-full object-contain",
                            referrerPolicy: "no-referrer",
                            src: eV.previewSrc,
                          }),
                  })
                : (0, i.jsxs)(i.Fragment, {
                    children: [
                      ae?.preview != null &&
                        (0, i.jsx)(A.Y, {
                          ariaLabel: au.formatMessage({
                            id: "chatgptConversations.shareDialog.responseRegionPreviewLabel",
                            defaultMessage: "Preview of the shared content",
                            description:
                              "Accessible description of the selected interactive-response section shown in the response-region sharing dialog.",
                          }),
                          expandedContent: ae.preview,
                          variant: "response",
                          children: ae.preview,
                        }),
                      null == ae &&
                        a3?.preview != null &&
                        a6 &&
                        (0, i.jsx)(A.Y, {
                          ariaLabel: au.formatMessage({
                            id: "shareDialog.widget.previewLabel",
                            defaultMessage: "Preview of the shared widget",
                            description:
                              "Accessible description of the non-interactive selected-widget preview in a ChatGPT widget sharing dialog.",
                          }),
                          expandedContent: a3.preview,
                          variant: "response",
                          children: a3.preview,
                        }),
                      null == ae &&
                        a3?.preview != null &&
                        !a6 &&
                        (0, i.jsx)(A.Y, { expandedContent: a3.preview, variant: "response", children: a3.preview }),
                      null == ae &&
                        null == a3 &&
                        (0, i.jsx)(N.M, {
                          prompt: e7,
                          response: aI ? void 0 : aa,
                          serverConversationId: at,
                          expandedHistory:
                            (null == aa || aI) && null != e6 && null == aP
                              ? {
                                  load: async (e) =>
                                    (
                                      await ao.queryClient.fetchQuery({
                                        queryKey: aj,
                                        queryFn: () => e6(e),
                                        staleTime: 1 / 0,
                                      })
                                    ).turns,
                                  sessionId: a_,
                                }
                              : void 0,
                          turns: null == aa || aI ? (aP?.turns ?? e4) : void 0,
                        }),
                    ],
                  })),
            (eF[239] = a3),
            (eF[240] = aP),
            (eF[241] = aj),
            (eF[242] = eV),
            (eF[243] = eC),
            (eF[244] = au),
            (eF[245] = a1),
            (eF[246] = aZ),
            (eF[247] = a6),
            (eF[248] = e6),
            (eF[249] = e4),
            (eF[250] = e7),
            (eF[251] = aJ),
            (eF[252] = aa),
            (eF[253] = ae),
            (eF[254] = ao.queryClient),
            (eF[255] = at),
            (eF[256] = a_),
            (eF[257] = aI),
            (eF[258] = aY),
            (eF[259] = e))
          : (e = eF[259]),
          (ek = e))
      }
      if (aY) {
        let e, a, t
        ;(eF[260] !== eK || eF[261] !== ek
          ? ((e = null == eK ? ek : (0, i.jsx)("div", { className: "px-6", children: ek })),
            (eF[260] = eK),
            (eF[261] = ek),
            (eF[262] = e))
          : (e = eF[262]),
          eF[263] !== tP
            ? ((a =
                null != tP && (0, i.jsx)("p", { className: "mt-3 text-center text-sm text-secondary", children: tP })),
              (eF[263] = tP),
              (eF[264] = a))
            : (a = eF[264]),
          eF[265] !== e || eF[266] !== a
            ? ((t = (0, i.jsxs)(i.Fragment, { children: [e, a] })), (eF[265] = e), (eF[266] = a), (eF[267] = t))
            : (t = eF[267]),
          (ek = t))
      }
      ;(eF[268] !== tC || eF[269] !== ta
        ? ((ey = ta ? void 0 : (0, i.jsx)(h.A, { ...tC })), (eF[268] = tC), (eF[269] = ta), (eF[270] = ey))
        : (ey = eF[270]),
        eF[271] !== tk ? ((ex = (0, i.jsx)(h.A, { ...tk })), (eF[271] = tk), (eF[272] = ex)) : (ex = eF[272]))
      let tD = eK?.actionsDisabled || tv || tb || a2 || "blocked" === en,
        tE = tf || tv || ac,
        tN = !ta && tf
      eF[273] !== tA || eF[274] !== a$ || eF[275] !== ta
        ? ((e_ = ta
            ? (e) => {
                ;(a$ && tA("CHATGPT_SHARE_FLOW_ACTION_SHEET_PRESENTED"),
                  e.preventDefault(),
                  e.currentTarget instanceof HTMLElement && e.currentTarget.focus())
              }
            : void 0),
          (eF[273] = tA),
          (eF[274] = a$),
          (eF[275] = ta),
          (eF[276] = e_))
        : (e_ = eF[276])
      let tO = aY ? "imageSheet" : void 0,
        tG = aY && eJ?.layout === "two-rows"
      ;(eF[277] !== ag ||
      eF[278] !== ah ||
      eF[279] !== ap ||
      eF[280] !== th ||
      eF[281] !== ez ||
      eF[282] !== en ||
      eF[283] !== tL ||
      eF[284] !== tI ||
      eF[285] !== tj ||
      eF[286] !== eV ||
      eF[287] !== eK?.actionsDisabled ||
      eF[288] !== a0 ||
      eF[289] !== aF ||
      eF[290] !== tb ||
      eF[291] !== tv ||
      eF[292] !== aK ||
      eF[293] !== a2 ||
      eF[294] !== ac ||
      eF[295] !== a7 ||
      eF[296] !== aQ ||
      eF[297] !== tf ||
      eF[298] !== eX ||
      eF[299] !== eJ ||
      eF[300] !== e1 ||
      eF[301] !== e3 ||
      eF[302] !== e7 ||
      eF[303] !== e8 ||
      eF[304] !== ty ||
      eF[305] !== aJ ||
      eF[306] !== ao ||
      eF[307] !== at ||
      eF[308] !== tl ||
      eF[309] !== aI ||
      eF[310] !== te ||
      eF[311] !== aY ||
      eF[312] !== ta ||
      eF[313] !== ar
        ? ((eT = ta
            ? (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(eI, {
                  mobileImageActions:
                    aY && null != eJ
                      ? {
                          experience: eJ,
                          canNativeShare: "public" === tl && null != th && (0, W.P)(th?.shareLinkUrl),
                          onNativeShare: () => {
                            tI()
                          },
                          rowScrollPositions: e1,
                        }
                      : void 0,
                  copyLabel: ty,
                  copyDisabled: eK?.actionsDisabled || tv || tb || tf || a2 || "blocked" === en,
                  isBusy: tf || tv || ac,
                  isDownloading: aF,
                  socialDestinationsDisabled:
                    eK?.actionsDisabled || tv || tb || tf || a2 || "public" !== tl || "blocked" === en,
                  showSocialDestinations: "public" === tl,
                  additionalActions: void 0,
                  onDownload:
                    null == eV || a2
                      ? void 0
                      : () => {
                          tL()
                        },
                  onCopy: () => {
                    aQ || a7 || (0, G.$D)(ao, "copy", aK ? a0 : void 0)
                  },
                  onSocialShare: (e, a) => {
                    tj(e, a)
                  },
                }),
              })
            : void 0),
          (eF[277] = ag),
          (eF[278] = ah),
          (eF[279] = ap),
          (eF[280] = th),
          (eF[281] = ez),
          (eF[282] = en),
          (eF[283] = tL),
          (eF[284] = tI),
          (eF[285] = tj),
          (eF[286] = eV),
          (eF[287] = eK?.actionsDisabled),
          (eF[288] = a0),
          (eF[289] = aF),
          (eF[290] = tb),
          (eF[291] = tv),
          (eF[292] = aK),
          (eF[293] = a2),
          (eF[294] = ac),
          (eF[295] = a7),
          (eF[296] = aQ),
          (eF[297] = tf),
          (eF[298] = eX),
          (eF[299] = eJ),
          (eF[300] = e1),
          (eF[301] = e3),
          (eF[302] = e7),
          (eF[303] = e8),
          (eF[304] = ty),
          (eF[305] = aJ),
          (eF[306] = ao),
          (eF[307] = at),
          (eF[308] = tl),
          (eF[309] = aI),
          (eF[310] = te),
          (eF[311] = aY),
          (eF[312] = ta),
          (eF[313] = ar),
          (eF[314] = eT))
        : (eT = eF[314]),
        eF[315] !== aA ||
        eF[316] !== eY ||
        eF[317] !== au ||
        eF[318] !== tv ||
        eF[319] !== a9 ||
        eF[320] !== tf ||
        eF[321] !== aT ||
        eF[322] !== tt ||
        eF[323] !== tl ||
        eF[324] !== ti ||
        eF[325] !== aY ||
        eF[326] !== ta
          ? ((eS = ta
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    aA &&
                      (0, i.jsx)(f.OO, {
                        className: "pt-5",
                        children: (0, i.jsx)("div", {
                          className: "mx-auto w-80 max-w-full",
                          children: (0, i.jsx)(w.T, {
                            ariaLabel: au.formatMessage({
                              id: "chatgptConversations.shareDialog.messageScope.label",
                              defaultMessage: "Content to share",
                              description:
                                "Accessible label for choosing whether a ChatGPT response sharing dialog shares one response or the entire conversation.",
                            }),
                            buttonClassName: "z-20",
                            fullWidth: !0,
                            onSelect: (e) => {
                              e !== aT && (aS(e), ay(null), aR(null), aO("idle"))
                            },
                            options: [
                              {
                                id: "message",
                                disabled: tf || tv,
                                label: (0, i.jsx)(h.A, {
                                  id: "chatgptConversations.shareDialog.messageScope.response",
                                  defaultMessage: "This response",
                                  description:
                                    "Share-scope option in a ChatGPT response sharing dialog. Shares only the selected assistant response. The other option is Entire conversation.",
                                }),
                              },
                              {
                                id: "conversation",
                                disabled: tf || tv,
                                label: (0, i.jsx)(h.A, {
                                  id: "chatgptConversations.shareDialog.messageScope.conversation",
                                  defaultMessage: "Entire conversation",
                                  description:
                                    "Share-scope option in a ChatGPT response sharing dialog. Shares the full chat through the selected response. The other option is This response.",
                                }),
                              },
                            ],
                            selectedId: aT,
                            variant: "form",
                            wrapLabels: !0,
                          }),
                        }),
                      }),
                    null != eY &&
                      (aY
                        ? (0, i.jsx)("div", { className: "px-6 pt-3", children: eY(tf) })
                        : (0, i.jsx)(f.OO, { className: "pt-5", children: eY(tf) })),
                    !aY && (0, i.jsx)(eR, { audience: tl, contentType: tt, isPoll: a9, showImageRightsNotice: ti }),
                  ],
                })
              : void 0),
            (eF[315] = aA),
            (eF[316] = eY),
            (eF[317] = au),
            (eF[318] = tv),
            (eF[319] = a9),
            (eF[320] = tf),
            (eF[321] = aT),
            (eF[322] = tt),
            (eF[323] = tl),
            (eF[324] = ti),
            (eF[325] = aY),
            (eF[326] = ta),
            (eF[327] = eS))
          : (eS = eF[327]),
        eF[328] !== en || eF[329] !== eK || eF[330] !== aE || eF[331] !== tg
          ? ((eA =
              null == en
                ? void 0
                : {
                    content: (0, i.jsx)(eB, { error: en }),
                    copyUrl: "copy-failed" === en ? tg : void 0,
                    onRetry:
                      "conversation-load-failed" === en
                        ? () => {
                            aE()
                          }
                        : void 0,
                    preventsSharing: ("blocked" === en && null == eK) || "conversation-load-failed" === en,
                  }),
            (eF[328] = en),
            (eF[329] = eK),
            (eF[330] = aE),
            (eF[331] = tg),
            (eF[332] = eA))
          : (eA = eF[332]))
      let tR = ti && !tm && !aK,
        tF = !a8 || a5
      return (
        eF[333] !== X || eF[334] !== tR || eF[335] !== tF
          ? ((ej = (0, i.jsx)(eU, { showImageRightsNotice: tR, showContentNotices: tF, privacyNotices: X })),
            (eF[333] = X),
            (eF[334] = tR),
            (eF[335] = tF),
            (eF[336] = ej))
          : (ej = eF[336]),
        eF[337] !== av || eF[338] !== tA || eF[339] !== a$
          ? ((eL = () => {
              ;(a$ && tA("CHATGPT_SHARE_FLOW_ACTION_DISMISSED"), av())
            }),
            (eF[337] = av),
            (eF[338] = tA),
            (eF[339] = a$),
            (eF[340] = eL))
          : (eL = eF[340]),
        eF[341] !== tS
          ? ((eP = () => {
              tS()
            }),
            (eF[341] = tS),
            (eF[342] = eP))
          : (eP = eF[342]),
        eF[343] !== ew ||
        eF[344] !== er ||
        eF[345] !== ts ||
        eF[346] !== ek ||
        eF[347] !== tM ||
        eF[348] !== ey ||
        eF[349] !== ex ||
        eF[350] !== tD ||
        eF[351] !== tE ||
        eF[352] !== tN ||
        eF[353] !== e_ ||
        eF[354] !== tO ||
        eF[355] !== tG ||
        eF[356] !== eT ||
        eF[357] !== eS ||
        eF[358] !== eA ||
        eF[359] !== ej ||
        eF[360] !== eL ||
        eF[361] !== eP
          ? ((eM = (0, i.jsx)(S.w, {
              threadTitle: ts,
              title: er,
              subtitle: tM,
              audience: ey,
              actionLabel: ex,
              actionDisabled: tD,
              isBusy: tE,
              isDismissalDisabled: tN,
              onOpenAutoFocus: e_,
              size: ew,
              presentation: tO,
              compactImageSheetFooter: tG,
              footer: eT,
              preview: ek,
              info: eS,
              error: eA,
              notices: ej,
              onClose: eL,
              onSubmit: eP,
            })),
            (eF[343] = ew),
            (eF[344] = er),
            (eF[345] = ts),
            (eF[346] = ek),
            (eF[347] = tM),
            (eF[348] = ey),
            (eF[349] = ex),
            (eF[350] = tD),
            (eF[351] = tE),
            (eF[352] = tN),
            (eF[353] = e_),
            (eF[354] = tO),
            (eF[355] = tG),
            (eF[356] = eT),
            (eF[357] = eS),
            (eF[358] = eA),
            (eF[359] = ej),
            (eF[360] = eL),
            (eF[361] = eP),
            (eF[362] = eM))
          : (eM = eF[362]),
        eM
      )
    }
    function eD(e) {
      return (0, i.jsx)(eW, { src: e, isLoading: !1 }, e)
    }
    function eE(e) {
      return null != e.src && "completed" === e.status && !e.isPreview
    }
    async function eN() {
      throw Error("Image share is unavailable")
    }
    function eO() {
      return M.CodexRequest.safeGet("/wham/accounts/check")
    }
    function eG() {
      return crypto.randomUUID()
    }
    function eR(e) {
      let a,
        t,
        n,
        r,
        o,
        l,
        c = (0, s.c)(52),
        { audience: d, contentType: p, isPoll: g, showImageRightsNotice: u } = e,
        m = "workspace" === d ? v.PL4 : v.cfl
      if ("workspace" === d) {
        let e
        if (
          (c[0] !== p || c[1] !== u
            ? ((e = (0, i.jsxs)(i.Fragment, {
                children: [
                  null,
                  (0, i.jsx)(i.Fragment, {
                    children: u
                      ? (0, i.jsx)(h.A, { ...eq.workspaceImageRightsAudience, values: { contentType: p } })
                      : (0, i.jsx)(h.A, { ...eq.workspaceLinksVisible }),
                  }),
                ],
              })),
              (c[0] = p),
              (c[1] = u),
              (c[2] = e))
            : (e = c[2]),
          (t = e),
          "widget" === p)
        ) {
          let e
          ;(c[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(h.A, { ...eq.shareLinkToWidget })), (c[3] = e))
            : (e = c[3]),
            (a = e))
        } else if ("images" === p) {
          let e
          ;(c[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(h.A, { ...eq.shareLinkToImages })), (c[4] = e))
            : (e = c[4]),
            (a = e))
        } else if ("gif" === p) {
          let e
          ;(c[5] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(h.A, { ...eq.shareLinkToGif })), (c[5] = e))
            : (e = c[5]),
            (a = e))
        } else if ("image" === p) {
          let e
          ;(c[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(h.A, { ...eq.shareLinkToImage })), (c[6] = e))
            : (e = c[6]),
            (a = e))
        } else if ("response-region" === p) {
          let e
          ;(c[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(h.A, {
                id: "chatgptConversations.shareDialog.responseRegion.workspaceTitle",
                defaultMessage: "Share a link to this content",
                description:
                  "Heading below the selected response-region preview when its link is restricted to workspace members.",
              })),
              (c[7] = e))
            : (e = c[7]),
            (a = e))
        } else if ("message" === p) {
          let e
          ;(c[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(h.A, { ...eq.shareLinkToMessage })), (c[8] = e))
            : (e = c[8]),
            (a = e))
        } else if ("prompt" === p) {
          let e
          ;(c[9] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(h.A, { ...eq.shareLinkToPrompt })), (c[9] = e))
            : (e = c[9]),
            (a = e))
        } else {
          let e
          ;(c[10] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(h.A, { ...eq.shareLinkToConversation })), (c[10] = e))
            : (e = c[10]),
            (a = e))
        }
      } else if ("unknown" === d) {
        if ("images" === p) {
          let e
          ;(c[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(h.A, {
                id: "chatgptConversations.shareDialog.imagesRightsDisclaimer",
                defaultMessage: "Confirm you have the rights to share these images.",
                description:
                  "Legal-permission reminder below the heading when sharing a generated-image series before the link audience is known. Asks the user to confirm permission to share every selected image. Shown as a standalone notice.",
              })),
              (c[11] = e))
            : (e = c[11]),
            (t = e))
        } else if ("gif" === p) {
          let e
          ;(c[12] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(h.A, {
                id: "chatgptConversations.shareDialog.gifLicenseDisclaimer",
                defaultMessage: "Confirm you have the rights to share this GIF",
                description:
                  "Legal-permission reminder in the generated GIF sharing dialog before the link audience is known. Asks the user to confirm permission to share the animated GIF.",
              })),
              (c[12] = e))
            : (e = c[12]),
            (t = e))
        } else if ("image" === p) {
          let e
          ;(c[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(h.A, { ...eq.imageLicenseDisclaimer })), (c[13] = e))
            : (e = c[13]),
            (t = e))
        }
        if ("widget" === p) {
          let e
          ;(c[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(h.A, { ...eq.shareLinkToWidget })), (c[14] = e))
            : (e = c[14]),
            (a = e))
        } else if ("images" === p) {
          let e
          ;(c[15] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(h.A, { ...eq.shareLinkToImages })), (c[15] = e))
            : (e = c[15]),
            (a = e))
        } else if ("gif" === p) {
          let e
          ;(c[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(h.A, { ...eq.shareLinkToGif })), (c[16] = e))
            : (e = c[16]),
            (a = e))
        } else if ("image" === p) {
          let e
          ;(c[17] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(h.A, { ...eq.shareLinkToImage })), (c[17] = e))
            : (e = c[17]),
            (a = e))
        } else if ("response-region" === p) {
          let e
          ;(c[18] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(h.A, {
                id: "chatgptConversations.shareDialog.responseRegion.unknownAudienceTitle",
                defaultMessage: "Share a link to this content",
                description: "Heading below a selected response-region preview before the link audience is known.",
              })),
              (c[18] = e))
            : (e = c[18]),
            (a = e))
        } else if ("message" === p) {
          let e
          ;(c[19] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(h.A, { ...eq.shareLinkToMessage })), (c[19] = e))
            : (e = c[19]),
            (a = e))
        } else if ("prompt" === p) {
          let e
          ;(c[20] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(h.A, { ...eq.shareLinkToPrompt })), (c[20] = e))
            : (e = c[20]),
            (a = e))
        } else {
          let e
          ;(c[21] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(h.A, { ...eq.shareLinkToConversation })), (c[21] = e))
            : (e = c[21]),
            (a = e))
        }
      } else if ("widget" === p) {
        let e, s
        ;(c[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(h.A, { ...eq.sharePublicLinkToWidget })), (c[22] = e))
          : (e = c[22]),
          (a = e),
          c[23] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, i.jsxs)(i.Fragment, {
                children: [
                  null,
                  (0, i.jsx)(i.Fragment, { children: (0, i.jsx)(h.A, { ...eq.widgetPublicLinkAudience }) }),
                ],
              })),
              (c[23] = s))
            : (s = c[23]),
          (t = s))
      } else if ("images" === p) {
        let e, s
        ;(c[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(h.A, { ...eq.sharePublicLinkToImages })), (c[24] = e))
          : (e = c[24]),
          (a = e),
          c[25] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, i.jsxs)(i.Fragment, {
                children: [
                  null,
                  (0, i.jsx)(i.Fragment, { children: (0, i.jsx)(h.A, { ...eq.imagesPublicLinkAudience }) }),
                ],
              })),
              (c[25] = s))
            : (s = c[25]),
          (t = s))
      } else if ("gif" === p) {
        let e, s
        ;(c[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(h.A, {
              id: "chatgptConversations.shareDialog.sharePublicLinkToGif",
              defaultMessage: "Share a public link to this GIF",
              description:
                "Info heading in the generated GIF sharing dialog for a personal account. Anyone with the link can view the animated GIF.",
            })),
            (c[26] = e))
          : (e = c[26]),
          (a = e),
          c[27] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, i.jsx)(h.A, {
                id: "chatgptConversations.shareDialog.gifPublicLinkAudienceWithLearnMore",
                defaultMessage:
                  "Anyone with this link can access this GIF. Confirm you have the rights to share this GIF. <learnMore>Learn more</learnMore>",
                description:
                  "Audience and legal-permission reminder in the generated GIF sharing dialog. Anyone with the link can view the animation, and the user must have permission to share it. The learnMore tag links to shared-links help.",
                values: { learnMore: eF },
              })),
              (c[27] = s))
            : (s = c[27]),
          (t = s))
      } else if ("image" === p) {
        let e, s
        ;(c[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(h.A, { ...eq.sharePublicLinkToImage })), (c[28] = e))
          : (e = c[28]),
          (a = e),
          c[29] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, i.jsxs)(i.Fragment, {
                children: [
                  null,
                  (0, i.jsx)(i.Fragment, { children: (0, i.jsx)(h.A, { ...eq.imagePublicLinkAudience }) }),
                ],
              })),
              (c[29] = s))
            : (s = c[29]),
          (t = s))
      } else if ("response-region" === p) {
        let e, s
        ;(c[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(h.A, {
              id: "chatgptConversations.shareDialog.responseRegion.publicTitle",
              defaultMessage: "Share a public link to this content",
              description: "Heading below the selected response-region preview when anyone with the link can view it.",
            })),
            (c[30] = e))
          : (e = c[30]),
          (a = e),
          c[31] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, i.jsx)(h.A, {
                id: "chatgptConversations.shareDialog.responseRegion.publicAudience",
                defaultMessage: "Anyone with this link can access this content.",
                description: "Audience explanation below the selected response-region preview for a public link.",
              })),
              (c[31] = s))
            : (s = c[31]),
          (t = s))
      } else if ("message" === p) {
        let e, s
        ;(c[32] !== g
          ? ((e = g
              ? (0, i.jsx)(h.A, {
                  id: "chatgptConversations.shareDialog.poll.publicLinkTitle",
                  defaultMessage: "Share a public link to this poll",
                  description:
                    "Heading below the poll preview in the public sharing dialog. Tells the person sharing that the link opens this interactive voting poll. Workspace-restricted links use a separate disclosure.",
                })
              : (0, i.jsx)(h.A, { ...eq.sharePublicLinkToMessage })),
            (c[32] = g),
            (c[33] = e))
          : (e = c[33]),
          (a = e),
          c[34] !== g
            ? ((s = (0, i.jsxs)(i.Fragment, {
                children: [
                  null,
                  (0, i.jsx)(i.Fragment, {
                    children: g
                      ? (0, i.jsx)(h.A, {
                          id: "chatgptConversations.shareDialog.poll.publicAudience",
                          defaultMessage: "Anyone with this link can access and vote on this poll.",
                          description:
                            "Explanation below a public poll link preview in the desktop or extension sharing dialog. Tells the person sharing that link recipients can open the poll and vote.",
                        })
                      : (0, i.jsx)(h.A, { ...eq.messagePublicLinkAudience }),
                  }),
                ],
              })),
              (c[34] = g),
              (c[35] = s))
            : (s = c[35]),
          (t = s))
      } else if ("prompt" === p) {
        let e, s
        ;(c[36] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(h.A, {
              id: "chatgptConversations.shareDialog.prompt.info.title.public",
              defaultMessage: "Share a public link to this prompt",
              description:
                "Heading below the prompt preview in the ChatGPT sharing dialog for a personal account. It introduces the public link and social sharing actions for the selected user prompt.",
            })),
            (c[36] = e))
          : (e = c[36]),
          (a = e),
          c[37] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, i.jsxs)(i.Fragment, {
                children: [
                  null,
                  (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(h.A, {
                      id: "chatgptConversations.shareDialog.prompt.info.description.public",
                      defaultMessage: "Anyone with this link can access this prompt",
                      description:
                        "Audience explanation below the public-link heading in the ChatGPT prompt sharing dialog in the desktop app and extension. It tells the person sharing that anyone with the link can access the selected user prompt.",
                    }),
                  }),
                ],
              })),
              (c[37] = s))
            : (s = c[37]),
          (t = s))
      } else {
        let e, s
        ;(c[38] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(h.A, { ...eq.sharePublicLinkToConversation })), (c[38] = e))
          : (e = c[38]),
          (a = e),
          c[39] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, i.jsx)(B, { includeConversationAudience: !0 })), (c[39] = s))
            : (s = c[39]),
          (t = s))
      }
      ;(c[40] !== m || c[41] !== d
        ? ((n =
            "unknown" === d
              ? null
              : (0, i.jsx)(m, { className: "public" === d ? "relative -start-px" : void 0, "aria-hidden": "true" })),
          (c[40] = m),
          (c[41] = d),
          (c[42] = n))
        : (n = c[42]),
        c[43] !== n || c[44] !== a
          ? ((r = (0, i.jsxs)("div", {
              className: "flex items-center gap-1 text-xs leading-4 font-bold text-default",
              children: [n, a],
            })),
            (c[43] = n),
            (c[44] = a),
            (c[45] = r))
          : (r = c[45]),
        c[46] !== t
          ? ((o =
              null == t
                ? null
                : (0, i.jsx)("div", {
                    className: "mt-1.5 text-xs leading-4 text-codex-description browser:text-secondary",
                    children: t,
                  })),
            (c[46] = t),
            (c[47] = o))
          : (o = c[47]))
      let b = null
      return (
        c[48] !== r || c[49] !== o || c[50] !== b
          ? ((l = (0, i.jsx)(f.OO, {
              spacing: "large",
              children: (0, i.jsxs)("div", { className: "w-full text-start select-none", children: [r, o, b] }),
            })),
            (c[48] = r),
            (c[49] = o),
            (c[50] = b),
            (c[51] = l))
          : (l = c[51]),
        l
      )
    }
    function eF(e) {
      return (0, i.jsx)(q, { children: e })
    }
    function eH(e) {
      let a,
        t,
        n = (0, s.c)(5),
        { item: r, serverConversationId: o } = e
      n[0] !== o ? ((a = (0, D.Qt)((0, R.q3)(o))), (n[0] = o), (n[1] = a)) : (a = n[1])
      let { src: l, isLoading: c } = (0, j.vM)(r.src ?? "", a)
      return (
        n[2] !== c || n[3] !== l
          ? ((t = (0, i.jsx)(eW, { src: l, isLoading: c })), (n[2] = c), (n[3] = l), (n[4] = t))
          : (t = n[4]),
        t
      )
    }
    function eW(e) {
      let a,
        t = (0, s.c)(5),
        { alt: n, src: r, isLoading: o } = e,
        l = void 0 === n ? "" : n
      if (null != r) {
        let e
        return (
          t[0] !== l || t[1] !== r
            ? ((e = (0, i.jsx)("img", {
                alt: l,
                className: "block size-full object-contain",
                referrerPolicy: "no-referrer",
                src: r,
              })),
              (t[0] = l),
              (t[1] = r),
              (t[2] = e))
            : (e = t[2]),
          e
        )
      }
      return (
        t[3] !== o
          ? ((a = (0, i.jsx)("div", {
              className: "flex h-full items-center justify-center gap-2 text-sm text-secondary",
              children: o ? (0, i.jsx)(C.y, { className: "icon-sm" }) : (0, i.jsx)(h.A, { ...eq.imageUnavailable }),
            })),
            (t[3] = o),
            (t[4] = a))
          : (a = t[4]),
        a
      )
    }
    function eU(e) {
      let a,
        t,
        n,
        r,
        o,
        l = (0, s.c)(16),
        { showImageRightsNotice: c, showContentNotices: d, privacyNotices: p } = e
      return (
        l[0] !== p?.hasUnsupportedCodeInterpreterContent || l[1] !== d
          ? ((a =
              d && p?.hasUnsupportedCodeInterpreterContent
                ? (0, i.jsx)(f.OO, {
                    children: (0, i.jsx)(m.l, {
                      content: (0, i.jsx)(h.A, { ...eq.filesNotShared }),
                      variant: "privacyNotice",
                    }),
                  })
                : null),
            (l[0] = p?.hasUnsupportedCodeInterpreterContent),
            (l[1] = d),
            (l[2] = a))
          : (a = l[2]),
        l[3] !== p?.hasPersonalizedSources || l[4] !== d
          ? ((t =
              d && p?.hasPersonalizedSources
                ? (0, i.jsx)(f.OO, {
                    children: (0, i.jsx)(m.l, {
                      content: (0, i.jsx)(h.A, { ...eq.personalizedSourcesPrivate }),
                      variant: "privacyNotice",
                    }),
                  })
                : null),
            (l[3] = p?.hasPersonalizedSources),
            (l[4] = d),
            (l[5] = t))
          : (t = l[5]),
        l[6] !== p?.hasScreenshotReference || l[7] !== d
          ? ((n =
              d && p?.hasScreenshotReference
                ? (0, i.jsx)(f.OO, {
                    children: (0, i.jsx)(m.l, {
                      content: (0, i.jsx)(h.A, { ...eq.screenshotDisclaimer }),
                      variant: "privacyNotice",
                    }),
                  })
                : null),
            (l[6] = p?.hasScreenshotReference),
            (l[7] = d),
            (l[8] = n))
          : (n = l[8]),
        l[9] !== c
          ? ((r = c
              ? (0, i.jsx)(f.OO, {
                  children: (0, i.jsx)("p", {
                    className: "text-sm text-secondary select-none",
                    children: (0, i.jsx)(h.A, { ...eq.imageLicenseDisclaimer }),
                  }),
                })
              : null),
            (l[9] = c),
            (l[10] = r))
          : (r = l[10]),
        l[11] !== a || l[12] !== t || l[13] !== n || l[14] !== r
          ? ((o = (0, i.jsxs)(i.Fragment, { children: [a, t, n, r] })),
            (l[11] = a),
            (l[12] = t),
            (l[13] = n),
            (l[14] = r),
            (l[15] = o))
          : (o = l[15]),
        o
      )
    }
    function eB(e) {
      let a = (0, s.c)(4),
        { error: t } = e
      switch (t) {
        case "blocked": {
          let e
          return (
            a[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(h.A, { ...eq.shareBlocked })), (a[0] = e))
              : (e = a[0]),
            e
          )
        }
        case "conversation-load-failed": {
          let e
          return (
            a[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(h.A, { ...eq.shareConversationLoadFailed })), (a[1] = e))
              : (e = a[1]),
            e
          )
        }
        case "copy-failed": {
          let e
          return (
            a[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(h.A, { ...eq.shareCopyFailed })), (a[2] = e))
              : (e = a[2]),
            e
          )
        }
        case "create-failed": {
          let e
          return (
            a[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(h.A, { ...eq.shareCreateFailed })), (a[3] = e))
              : (e = a[3]),
            e
          )
        }
      }
    }
    let eq = (0, p.YK)({
      shareLinkToGif: {
        id: "chatgptConversations.shareDialog.shareLinkToGif",
        defaultMessage: "Share a link to this GIF",
        description:
          "Info heading in the generated GIF sharing dialog when the link is restricted to workspace members or its audience is not yet known. The link shares one animated GIF.",
      },
      widgetTitle: {
        id: "chatgptConversations.widgetShare.title",
        defaultMessage: "Share this widget",
        description:
          "Heading of the dialog opened by Share on a generated Recharts widget. The dialog previews the selected widget and offers actions to share its link.",
      },
      sharePublicLinkToWidget: {
        id: "chatgptConversations.widgetShare.publicTitle",
        defaultMessage: "Share a public link to this widget",
        description:
          "Public audience disclosure above the sharing actions for a generated Recharts widget. Shown for personal accounts; workspace-only sharing has a separate disclosure.",
      },
      shareLinkToWidget: {
        id: "chatgptConversations.widgetShare.linkTitle",
        defaultMessage: "Share a link to this widget",
        description:
          "Title in the Recharts widget sharing disclosure when the link is workspace-only or its audience is not yet known. Does not describe the link as public.",
      },
      widgetPublicLinkAudience: {
        id: "chatgptConversations.widgetShare.publicAudience",
        defaultMessage: "Anyone with this link can access this widget",
        description:
          "Explanation below the public-link disclosure in the Recharts widget sharing dialog. Tells the sender who can view the shared widget.",
      },
      attributedDescription: {
        id: "chatgptConversations.shareDialog.attributedDescription",
        defaultMessage: "Your name is visible with this shared chat",
        description:
          "Description in the ChatGPT conversation share dialog when an existing shared link includes the author's name instead of being anonymous",
      },
      copyLink: {
        id: "chatgptConversations.shareDialog.copyLink",
        defaultMessage: "Copy link",
        description: "Button label for copying an existing ChatGPT conversation share link",
      },
      copied: {
        id: "chatgptConversations.shareDialog.destination.copy.copied",
        defaultMessage: "Copied",
        description:
          "Short confirmation label below the copy-link destination in a ChatGPT post sharing dialog after a public conversation, response, or generated-image URL was copied successfully. The other destinations are X, LinkedIn, and Reddit.",
      },
      createLink: {
        id: "chatgptConversations.shareDialog.createLink",
        defaultMessage: "Create link",
        description: "Button label for creating and copying a ChatGPT conversation share link",
      },
      description: {
        id: "chatgptConversations.shareDialog.description",
        defaultMessage: "Your name and any messages you add after sharing stay private",
        description: "Description in the ChatGPT conversation share dialog explaining what stays private",
      },
      imageLicenseDisclaimer: {
        id: "chatgptConversations.shareDialog.imageLicenseDisclaimer",
        defaultMessage: "Confirm you have the rights to share this image.",
        description:
          "Legal-permission reminder in the ChatGPT conversation or generated-image share dialog. Asks the user to confirm they have the rights to share the image. Shown as a standalone notice with no placeholders.",
      },
      imageTitle: {
        id: "chatgptConversations.shareDialog.imageTitle",
        defaultMessage: "Share image",
        description:
          "Title of the ChatGPT share dialog when sharing one generated image without the surrounding conversation",
      },
      imagesTitle: {
        id: "chatgptConversations.shareDialog.imagesTitle",
        defaultMessage: "Share images",
        description:
          "Title of the ChatGPT share dialog when sharing all images from one generation without the surrounding conversation",
      },
      imagesPreview: {
        id: "chatgptConversations.shareDialog.imagesPreview",
        defaultMessage: "Preview of the first shared image",
        description:
          "Accessible description of the cover image in the dialog for sharing all images from one ChatGPT generation",
      },
      imageUnavailable: {
        id: "chatgptConversations.shareDialog.imageUnavailable",
        defaultMessage: "Image preview unavailable",
        description:
          "Placeholder inside the cropped ChatGPT sharing preview when an image cannot be loaded safely. This does not change whether the image is included in the shared chat.",
      },
      sharePublicLinkToImages: {
        id: "chatgptConversations.shareDialog.sharePublicLinkToImages",
        defaultMessage: "Share a public link to these images",
        description: "Title in the personal ChatGPT share dialog when sharing all images from one generation",
      },
      shareLinkToImages: {
        id: "chatgptConversations.shareDialog.shareLinkToImages",
        defaultMessage: "Share a link to these images",
        description:
          "Title in the ChatGPT share dialog when sharing all images from one generation and public access is not confirmed",
      },
      imagesPublicLinkAudience: {
        id: "chatgptConversations.shareDialog.imagesPublicLinkAudience",
        defaultMessage:
          "Anyone with this link can access these images. Confirm you have the rights to share these images.",
        description:
          "Audience and legal-permission reminder in the personal ChatGPT dialog for sharing multiple generated images. Explains that anyone with the link can view the images and asks the user to confirm permission to share them. Both sentences appear in one paragraph.",
      },
      sharePublicLinkToImage: {
        id: "chatgptConversations.shareDialog.sharePublicLinkToImage",
        defaultMessage: "Share a public link to this image",
        description: "Title in the redesigned personal ChatGPT image share dialog info block",
      },
      shareLinkToImage: {
        id: "chatgptConversations.shareDialog.shareLinkToImage",
        defaultMessage: "Share a link to this image",
        description: "Title in the redesigned workspace ChatGPT image share dialog info block",
      },
      sharePublicLinkToMessage: {
        id: "chatgptConversations.shareDialog.sharePublicLinkToMessage",
        defaultMessage: "Share a public link to this message",
        description: "Title in the redesigned personal ChatGPT response share dialog info block",
      },
      sharePublicLinkToConversation: {
        id: "chatgptConversations.shareDialog.sharePublicLinkToConversation",
        defaultMessage: "Share a public link to this conversation",
        description: "Title in the redesigned personal ChatGPT conversation share dialog info block",
      },
      shareLinkToMessage: {
        id: "chatgptConversations.shareDialog.shareLinkToMessage",
        defaultMessage: "Share a link to this message",
        description: "Title in the redesigned workspace ChatGPT response share dialog info block",
      },
      shareLinkToConversation: {
        id: "chatgptConversations.shareDialog.shareLinkToConversation",
        defaultMessage: "Share a link to this conversation",
        description: "Title in the redesigned workspace ChatGPT conversation share dialog info block",
      },
      imagePublicLinkAudience: {
        id: "chatgptConversations.shareDialog.imagePublicLinkAudience",
        defaultMessage: "Anyone with this link can access this image. Confirm you have the rights to share this image.",
        description:
          "Audience and legal-permission reminder below the heading in the personal ChatGPT image-sharing dialog. Explains that anyone with the link can view the image and asks the user to confirm permission to share it. Both sentences appear in one paragraph.",
      },
      messagePublicLinkAudience: {
        id: "chatgptConversations.shareDialog.messagePublicLinkAudience",
        defaultMessage: "Anyone with this link can access this message",
        description: "Audience explanation in the personal ChatGPT share dialog",
      },
      workspaceImageRightsAudience: {
        id: "chatgptConversations.shareDialog.workspaceMediaRightsAudience",
        defaultMessage:
          "Links are visible to workspace members only. {contentType, select, gif {Confirm you have the rights to share this GIF.} images {Confirm you have the rights to share these images.} other {Confirm you have the rights to share this image.}}",
        description:
          "Audience and legal-permission reminder in the ChatGPT workspace sharing dialog. Only workspace members can view the link. contentType is gif for one animated GIF, images for a generated-image series, image for one still image, message, or conversation. Both sentences appear in one paragraph.",
      },
      workspaceLinksVisible: {
        id: "chatgptConversations.shareDialog.workspaceLinksVisible",
        defaultMessage: "Links are visible to workspace members only",
        description: "Subtitle in a redesigned workspace ChatGPT post share dialog info block",
      },
      workspaceLinksVisibleWithLearnMore: {
        id: "chatgptConversations.shareDialog.workspaceLinksVisibleWithLearnMore",
        defaultMessage: "Links are visible to workspace members only. <learnMore>Learn more</learnMore>",
        description:
          "Audience explanation when sharing a response or image within a workspace. The learnMore tag links to shared-links help in merged web.",
      },
      messageTitle: {
        id: "chatgptConversations.shareDialog.messageTitle",
        defaultMessage: "Share response",
        description:
          "Short title of the ChatGPT response share dialog opened after a user selects Share beneath one completed assistant response. The dialog creates a link to only that response.",
      },
      shareLinkToPrompt: {
        id: "chatgptConversations.shareDialog.prompt.info.title.restricted",
        defaultMessage: "Share a link to this prompt",
        description:
          "Heading below the prompt preview in the ChatGPT sharing dialog when the link is restricted to workspace members or its audience is not yet known. It introduces the sharing actions for the selected user prompt without claiming public access.",
      },
      promptTitle: {
        id: "chatgptConversations.shareDialog.promptTitle",
        defaultMessage: "Share prompt",
        description:
          "Title of the ChatGPT share dialog when sharing one selected user prompt without the surrounding conversation",
      },
      filesNotShared: {
        id: "chatgptConversations.shareDialog.filesNotShared",
        defaultMessage: "Images and files in this chat won't be shown in the public link.",
        description:
          "Privacy notice in the ChatGPT conversation share dialog when the chat contains code-interpreter images or downloadable files that the public link cannot show. Standalone sentence with no placeholders.",
      },
      personalizedSourcesPrivate: {
        id: "chatgptConversations.shareDialog.personalizedSourcesPrivate",
        defaultMessage:
          "Personalized sources used in this chat, like memories, past chats, custom instructions, apps, and files, stay private.",
        description:
          "Privacy notice in the ChatGPT conversation share dialog when answers used personalized sources. It reassures the user that those underlying sources are not exposed to link viewers. Standalone sentence with no placeholders.",
      },
      projectDescription: {
        id: "chatgptConversations.shareDialog.projectDescription",
        defaultMessage:
          "Your name, uploaded files, custom instructions, and any messages you add after sharing stay private.",
        description:
          "Privacy description in the ChatGPT conversation share dialog for a personal-account project chat. It lists project and author data that a public shared link does not expose. Standalone sentence with no placeholders.",
      },
      publicLinkAudience: {
        id: "chatgptConversations.shareDialog.publicLinkAudience",
        defaultMessage: "Anyone with the link can view this chat",
        description: "Audience note in the ChatGPT conversation share dialog preview card",
      },
      shareBlocked: {
        id: "chatgptConversations.shareDialog.shareBlocked",
        defaultMessage: "This conversation can't be shared",
        description: "Error shown when a ChatGPT conversation share link is blocked by moderation",
      },
      shareCopyFailed: {
        id: "chatgptConversations.shareDialog.shareCopyFailed",
        defaultMessage: "Share link created, but it could not be copied",
        description:
          "Inline error and toast in the ChatGPT conversation share dialog shown after a public link was created but all clipboard copy methods failed",
      },
      shareCreateFailed: {
        id: "chatgptConversations.shareDialog.shareCreateFailed",
        defaultMessage: "Could not create share link",
        description:
          "Inline error and toast in the ChatGPT conversation share dialog shown when creating a public link fails before clipboard copying begins",
      },
      shareConversationLoadFailed: {
        id: "chatgptConversations.shareDialog.shareConversationLoadFailed",
        defaultMessage: "Could not load the full conversation",
        description:
          "Error shown when a ChatGPT response sharing dialog cannot load the full conversation and its privacy notices before sharing.",
      },
      screenshotDisclaimer: {
        id: "chatgptConversations.shareDialog.screenshotDisclaimer",
        defaultMessage: "Screenshots may contain sensitive information.",
        description:
          "Privacy warning in the ChatGPT conversation share dialog when the chat contains screenshot citations. It reminds the user to review sensitive screenshot content before sharing. Standalone sentence with no placeholders.",
      },
      updateLink: {
        id: "chatgptConversations.shareDialog.updateLink",
        defaultMessage: "Update link",
        description:
          "Button label for updating an existing ChatGPT conversation share link to include the latest visible messages before copying it",
      },
      workspaceDescription: {
        id: "chatgptConversations.shareDialog.workspaceDescription",
        defaultMessage: "Any messages you add after sharing will be visible to members of your workspace",
        description:
          "Description in the ChatGPT workspace conversation share dialog explaining that later conversation messages remain visible to workspace members",
      },
      workspaceLinkAudience: {
        id: "chatgptConversations.shareDialog.workspaceLinkAudience",
        defaultMessage: "Links are visible to workspace members only",
        description:
          "Audience note in the ChatGPT workspace conversation or prompt share dialog explaining that the shared link is restricted to members of the current workspace",
      },
      workspaceProjectDescription: {
        id: "chatgptConversations.shareDialog.workspaceProjectDescription",
        defaultMessage:
          "Any messages you add after sharing will be visible to members of your workspace. Project files and custom instructions won’t be accessible via the shared link.",
        description:
          "Privacy description in the ChatGPT conversation share dialog for a workspace project chat. It contrasts later-message visibility with project files and custom instructions that link viewers cannot access. Standalone two-sentence notice with no placeholders.",
      },
    })
  },
  Y7np(e, a, t) {
    t.d(a, { Z: () => z, M: () => W })
    var i = t("ABep"),
      s = t("QosV"),
      n = t("lA5q"),
      r = t("T0Rc"),
      o = t("on57"),
      l = t("NRIv"),
      c = t("zd8w"),
      d = t("oyxz"),
      h = t("hL9c"),
      p = t("YWcr"),
      g = t("MX6A"),
      u = t("Bbed"),
      m = t("RNul"),
      f = t("jHtb"),
      b = t("yS0J"),
      v = t("aPiu"),
      w = t("rVvC"),
      C = t("OXGn"),
      k = t("zSQm"),
      y = t("ZjkF"),
      x = t("WAdu"),
      _ = t("TxRk"),
      T = t("ABl9"),
      S = t("vLpE"),
      A = t("kfGJ"),
      I = t("qKAH"),
      j = t("zHp1"),
      L = t("HAEQ"),
      P = t("dMLa"),
      M = t("taWv"),
      D = t("Zm8H"),
      E = t("OOaz"),
      N = t("TUMj"),
      O = t("drbS"),
      G = t("jAnS")
    let R = (0, u._)(
        async () =>
          (
            await Promise.all([
              t.e(851456),
              t.e(393442),
              t.e(486125),
              t.e(232817),
              t.e(740827),
              t.e(720436),
              t.e(571976),
            ]).then(t.bind(t, "IQg5"))
          ).WritingBlockDirectiveRenderer,
        L.O,
      ),
      F = {
        [n.Z5]: function (e) {
          let a,
            t = (0, s.c)(3),
            n = (0, N.Rn)(),
            r = n?.contentReferences
          return (
            t[0] !== e || t[1] !== r
              ? ((a = (0, i.jsx)(R, { ...e, contentReferences: r, isStreaming: !1, testId: "chatgpt-writing-block" })),
                (t[0] = e),
                (t[1] = r),
                (t[2] = a))
              : (a = t[2]),
            a
          )
        },
      },
      H = (0, C.j$)({
        conversationId: null,
        externalResourcePolicy: "restricted",
        isBrowserEnabled: !1,
        openFileLinksInSidePanel: !1,
      })
    function W(e) {
      let a,
        t,
        n,
        r,
        l,
        d,
        h,
        p = (0, s.c)(39),
        { expandedHistory: g, prompt: u, response: m, serverConversationId: f, turns: b } = e,
        v = "restricted" !== (0, c.useContext)(x.c)
      if (p[0] !== u || p[1] !== v || p[2] !== m || p[3] !== f || p[4] !== b) {
        let e = b?.slice(0, 4)
        if (((t = null != m), (n = "default"), null != u)) {
          let e
          ;(p[8] !== u.renderMarkdown || p[9] !== u.text
            ? ((e = (0, i.jsx)(Y, { renderMarkdown: u.renderMarkdown, text: u.text })),
              (p[8] = u.renderMarkdown),
              (p[9] = u.text),
              (p[10] = e))
            : (e = p[10]),
            (a = e))
        } else if (null != m) {
          let e, t
          ;((n = "response"), p[11] !== f ? ((e = (0, E.q3)(f)), (p[11] = f), (p[12] = e)) : (e = p[12]))
          let s = v ? "share" : void 0
          ;(p[13] !== m || p[14] !== e || p[15] !== s
            ? ((t = (0, i.jsx)(P.O, {
                conversationId: e,
                cwd: null,
                hostId: A.fI,
                item: m,
                isReadOnly: !0,
                preview: s,
                trackShownImpressions: !1,
                turnId: "share-preview",
              })),
              (p[13] = m),
              (p[14] = e),
              (p[15] = s),
              (p[16] = t))
            : (t = p[16]),
            (a = t))
        } else
          (e?.some(U) && (n = "transcript"),
            (a =
              null == e ? null : (0, i.jsx)(K, { preview: v ? "share" : void 0, serverConversationId: f, turns: e })))
        ;((p[0] = u), (p[1] = v), (p[2] = m), (p[3] = f), (p[4] = b), (p[5] = a), (p[6] = t), (p[7] = n))
      } else ((a = p[5]), (t = p[6]), (n = p[7]))
      p[17] !== t || p[18] !== f
        ? ((r = function (e) {
            return (0, i.jsx)(V, {
              serverConversationId: f,
              children: (0, i.jsx)("div", {
                className: (0, o.A)("flex min-w-0 flex-col gap-4", t ? "responseTypography-A7UvAY" : "p-4"),
                children: e,
              }),
            })
          }),
          (p[17] = t),
          (p[18] = f),
          (p[19] = r))
        : (r = p[19])
      let w = r,
        C = a
      if (null != g) {
        let e,
          a = v ? "share" : void 0
        ;(p[20] !== g || p[21] !== f || p[22] !== a
          ? ((e = (0, i.jsx)(q, { history: g, preview: a, serverConversationId: f })),
            (p[20] = g),
            (p[21] = f),
            (p[22] = a),
            (p[23] = e))
          : (e = p[23]),
          (C = e))
      } else if (null == u && null == m && null != b) {
        let e,
          a = v ? "share" : void 0
        ;(p[24] !== f || p[25] !== a || p[26] !== b
          ? ((e = (0, i.jsx)(K, { preview: a, serverConversationId: f, turns: b })),
            (p[24] = f),
            (p[25] = a),
            (p[26] = b),
            (p[27] = e))
          : (e = p[27]),
          (C = e))
      }
      p[28] !== C || p[29] !== w ? ((l = w(C)), (p[28] = C), (p[29] = w), (p[30] = l)) : (l = p[30])
      let k = null == u && null == m && null == b,
        y = n
      return (
        p[31] !== a || p[32] !== w ? ((d = w(a)), (p[31] = a), (p[32] = w), (p[33] = d)) : (d = p[33]),
        p[34] !== l || p[35] !== k || p[36] !== d || p[37] !== n
          ? ((h = (0, i.jsx)(I.Y, { expandedContent: l, isLoading: k, variant: y, children: d })),
            (p[34] = l),
            (p[35] = k),
            (p[36] = d),
            (p[37] = n),
            (p[38] = h))
          : (h = p[38]),
        h
      )
    }
    function U(e) {
      let { turn: a } = e
      return a.items.some(B)
    }
    function B(e) {
      return "generated-image" === e.type
    }
    function q(e) {
      let a,
        t,
        n,
        o,
        l = (0, s.c)(13),
        { history: c, preview: h, serverConversationId: p } = e
      ;(l[0] !== c.sessionId
        ? ((a = ["expanded-share-history", c.sessionId]), (l[0] = c.sessionId), (l[1] = a))
        : (a = l[1]),
        l[2] !== c
          ? ((t = (e) => {
              let { signal: a } = e
              return c.load(a)
            }),
            (l[2] = c),
            (l[3] = t))
          : (t = l[3]),
        l[4] !== a || l[5] !== t
          ? ((n = { queryKey: a, queryFn: t, staleTime: 1 / 0, gcTime: 0, retry: !1 }),
            (l[4] = a),
            (l[5] = t),
            (l[6] = n))
          : (n = l[6]))
      let { data: g, isError: u } = (0, r.I)(n)
      if (u) {
        let e
        return (
          l[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(d.A, {
                id: "shareDialog.preview.historyUnavailable",
                defaultMessage: "Couldn’t load the full preview",
                description:
                  "Error shown when the expanded conversation sharing preview cannot load all selected turns.",
              })),
              (l[7] = e))
            : (e = l[7]),
          e
        )
      }
      if (null == g) {
        let e
        return (
          l[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(m.y, { className: "icon-sm" })), (l[8] = e))
            : (e = l[8]),
          e
        )
      }
      return (
        l[9] !== g || l[10] !== h || l[11] !== p
          ? ((o = (0, i.jsx)(K, { preview: h, serverConversationId: p, turns: g })),
            (l[9] = g),
            (l[10] = h),
            (l[11] = p),
            (l[12] = o))
          : (o = l[12]),
        o
      )
    }
    function z(e) {
      let a,
        t,
        n = (0, s.c)(7),
        { preview: r, serverConversationId: o, turns: l } = e
      return (
        n[0] !== r || n[1] !== o || n[2] !== l
          ? ((a = (0, i.jsx)("div", {
              className: "flex min-w-0 flex-col gap-4 p-4",
              children: (0, i.jsx)(K, { markdownDirectives: F, preview: r, serverConversationId: o, turns: l }),
            })),
            (n[0] = r),
            (n[1] = o),
            (n[2] = l),
            (n[3] = a))
          : (a = n[3]),
        n[4] !== o || n[5] !== a
          ? ((t = (0, i.jsx)(V, { serverConversationId: o, children: a })), (n[4] = o), (n[5] = a), (n[6] = t))
          : (t = n[6]),
        t
      )
    }
    function V(e) {
      let a,
        t,
        n,
        r,
        o = (0, s.c)(10),
        { children: l, serverConversationId: c } = e
      return (
        o[0] !== c ? ((a = (0, G.mv)(c)), (o[0] = c), (o[1] = a)) : (a = o[1]),
        o[2] !== c || o[3] !== a
          ? ((t = { conversationId: c, pathname: a, routeKind: "chatgpt-thread", routeTemplate: G.PF }),
            (o[2] = c),
            (o[3] = a),
            (o[4] = t))
          : (t = o[4]),
        o[5] !== l
          ? ((n = (0, i.jsx)(x.c.Provider, { value: "restricted", children: (0, i.jsx)(v.y, { children: l }) })),
            (o[5] = l),
            (o[6] = n))
          : (n = o[6]),
        o[7] !== t || o[8] !== n
          ? ((r = (0, i.jsx)(S.R, { route: t, children: n })), (o[7] = t), (o[8] = n), (o[9] = r))
          : (r = o[9]),
        r
      )
    }
    function K({ preview: e, markdownDirectives: a, serverConversationId: t, turns: s }) {
      return s.map(({ id: s, turn: n }) =>
        (0, i.jsx)(
          "div",
          {
            className: "flex min-w-0 flex-col gap-4",
            children: n.items.map((n, r) =>
              "user-message" === n.type
                ? (0, i.jsxs)(
                    "div",
                    {
                      className: "flex min-w-0 flex-col items-end gap-2",
                      children: [
                        n.images.map((e) => (0, i.jsx)(Q, { src: e, serverConversationId: t }, e)),
                        n.message.trim()
                          ? (0, i.jsx)(Y, { item: n, renderMarkdown: n.renderMarkdown, text: (0, l.Dh)(n.message) })
                          : null,
                      ],
                    },
                    r,
                  )
                : "assistant-message" === n.type
                  ? (0, i.jsx)(
                      P.O,
                      {
                        conversationId: (0, E.q3)(t),
                        cwd: null,
                        hostId: A.fI,
                        item: n,
                        isReadOnly: !0,
                        preview: e,
                        markdownDirectives: a,
                        trackShownImpressions: !1,
                        turnId: s,
                      },
                      r,
                    )
                  : "generated-image" === n.type && null != n.src
                    ? (0, i.jsx)(Q, { isGenerated: !0, src: n.src, serverConversationId: t }, r)
                    : null,
            ),
          },
          s,
        ),
      )
    }
    function Y(e) {
      let a,
        t,
        n,
        r = (0, s.c)(7),
        { item: o, renderMarkdown: l, text: c } = e
      ;(r[0] !== o || r[1] !== c
        ? ((a = (function (e, a) {
            let t = a?.chatGptSystemHintMentions ?? (0, O.NU)([], e),
              i = e
            for (let e of t.toReversed()) {
              let a = e.id.replace(/^(?:connector|plugin):/u, "")
              ;(a === T.$n || D.y.has(a) || null != (0, p.__)(e.id)) &&
                (i = i.slice(0, e.startIndex) + (0, g.xR)(e.label, T.ic) + i.slice(e.endIndex))
            }
            return i
          })(c, o)),
          (r[0] = o),
          (r[1] = c),
          (r[2] = a))
        : (a = r[2]),
        r[3] === Symbol.for("react.memo_cache_sentinel") ? ((t = { a: $ }), (r[3] = t)) : (t = r[3]))
      let d = !0 === l
      return (
        r[4] !== a || r[5] !== d
          ? ((n = (0, i.jsx)("div", {
              className: "max-w-[77%] min-w-0 self-end overflow-hidden rounded-2xl bg-text/5 px-3 py-2 break-words",
              children: (0, i.jsx)(f.J, {
                text: a,
                components: t,
                cwd: null,
                hasSerializedParagraphs: d,
                hostId: A.fI,
                renderMath: !1,
                variant: "user-message",
              }),
            })),
            (r[4] = a),
            (r[5] = d),
            (r[6] = n))
          : (n = r[6]),
        n
      )
    }
    function $(e) {
      let a,
        t,
        n = (0, s.c)(10)
      if (e.href !== T.ic) {
        let a,
          t = e[w.C4]
        return (
          n[0] !== e.children || n[1] !== e.href || n[2] !== e.title || n[3] !== t
            ? ((a = (0, i.jsx)(H, {
                href: e.href,
                title: e.title,
                "data-markdown-raw-link-label": t,
                children: e.children,
              })),
              (n[0] = e.children),
              (n[1] = e.href),
              (n[2] = e.title),
              (n[3] = t),
              (n[4] = a))
            : (a = n[4]),
          a
        )
      }
      let r = e[w.C4]
      return (
        n[5] !== e.children || n[6] !== r
          ? ((a = "string" == typeof r ? (0, g.Nb)(r) : (0, y.X)(e.children)),
            (n[5] = e.children),
            (n[6] = r),
            (n[7] = a))
          : (a = n[7]),
        n[8] !== a
          ? ((t = (0, i.jsx)(_.q3, { icon: b.A, layout: "selection-pill", children: a })), (n[8] = a), (n[9] = t))
          : (t = n[9]),
        t
      )
    }
    function Q(e) {
      let a,
        t,
        n = (0, s.c)(7),
        { isGenerated: r, src: o, serverConversationId: l } = e,
        c = void 0 !== r && r,
        p = (0, j.fi)(o) ? o : ""
      n[0] !== l ? ((a = (0, M.Qt)((0, E.q3)(l))), (n[0] = l), (n[1] = a)) : (a = n[1])
      let { src: g, isLoading: u } = (0, j.vM)(p, a),
        f = (0, k.N5)(o) ? o : null
      if ((p && (f = g), u)) {
        let e
        return (
          n[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(m.y, { className: "icon-sm" })), (n[2] = e))
            : (e = n[2]),
          e
        )
      }
      if (null == f) {
        let e
        return (
          n[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)("span", {
                className: "text-sm text-secondary",
                children: (0, i.jsx)(d.A, {
                  id: "chatgptConversations.shareDialog.imageUnavailable",
                  defaultMessage: "Image preview unavailable",
                  description:
                    "Placeholder inside the cropped ChatGPT sharing preview when an image cannot be loaded safely. This does not change whether the image is included in the shared chat.",
                }),
              })),
              (n[3] = e))
            : (e = n[3]),
          e
        )
      }
      return (
        n[4] !== f || n[5] !== c
          ? ((t = c
              ? (0, i.jsx)("img", {
                  alt: "",
                  className: "block max-h-56 max-w-full self-start rounded-2xl object-contain",
                  loading: "lazy",
                  referrerPolicy: "no-referrer",
                  src: f,
                })
              : (0, i.jsx)(h.x, { src: f, previewEnabled: !1, imageLoading: "lazy" })),
            (n[4] = f),
            (n[5] = c),
            (n[6] = t))
          : (t = n[6]),
        t
      )
    }
  },
  fwwN(e, a, t) {
    var i = t("SGsN"),
      s = t("xygx"),
      n = t("ddzD"),
      r = t("urzV"),
      o = t("taWv"),
      l = t("rfhJ")
    t.d(
      a,
      {},
      {
        F: async function (
          e,
          {
            images: a,
            downloadSources: t,
            intl: c,
            serverConversationId: d,
            isParagen: h = !1,
            logIndividualDownloads: p = !0,
          },
        ) {
          let g = 0
          for (let [u, m] of a.entries()) {
            if (null == m.src || "completed" !== m.status || m.isPreview) continue
            null != d && h && (0, l.HQ)(e, d, m, "download", "paragen")
            let f = t?.get(m.id) ?? m.src
            null != d &&
              (f = await (0, s.C0)({
                conversationId: null,
                absoluteImageFilePath: null,
                hostId: "local",
                imageAssetResolver: (0, o.Qt)(d),
                queryClient: e.queryClient,
                src: f,
              }))
            let b = (0, n.R)(m).downloadExtension ?? (0, r.TP)(f ?? m.src) ?? "png",
              v = (0, r.lO)(c, b, { title: m.chatGptDisplayTitle, gifSpeed: m.gifPlayback?.speed }),
              w = !1
            if (
              null != f &&
              (await (0, r.er)({
                downloadSrc: f,
                onDownloaded: () => {
                  ;((w = !0), null != d && !h && p && (0, l.HQ)(e, d, m, "download"))
                },
                suggestedFilename: a.length > 1 ? v.replace(/\.[^.]+$/, `-${u + 1}.${b}`) : v,
              }))
            ) {
              if (!w) return "cancelled"
              g++
              continue
            }
            return (
              e
                .get(i.Id)
                .danger(
                  c.formatMessage({
                    id: "imageSidePanel.downloadFailure",
                    defaultMessage: "Could not download image",
                    description: "Error shown when the image toolbar download fails.",
                  }),
                  { errorAnalytics: { toastId: "imageSidePanel.downloadFailure" } },
                ),
              "failed"
            )
          }
          return g > 0 ? "downloaded" : "empty"
        },
      },
    )
  },
  cQW3(e, a, t) {
    var i = t("SavH"),
      s = t("yGJW"),
      n = t("r9i9")
    t.d(
      a,
      {},
      {
        C: function (e, a, t) {
          return {
            queryKey: ["chatgpt-image-share", a, t.item.id, t.item.src, t.additionalImages?.map((e) => [e.id, e.src])],
            queryFn: async () => {
              let r = await (0, n.yC)({ additionalImages: t.additionalImages, conversationId: a, image: t.item })
              return (t.isDirectLightboxShare && (0, s.yy)(e, i.N3, {}), r)
            },
            staleTime: 1 / 0,
          }
        },
      },
    )
  },
  Tywu(e, a, t) {
    var i = t("FS1B"),
      s = t("yGJW")
    function n(e = "https://chatgpt.com/s/native-image-share-capability-check") {
      if ("function" != typeof navigator.share) return !1
      if ("function" != typeof navigator.canShare) return !0
      try {
        return navigator.canShare({ url: e })
      } catch {
        return !1
      }
    }
    t.d(
      a,
      {},
      {
        C: async function (e, a, t, r, o = "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION") {
          let l = { url: a.shareLinkUrl }
          if (a.isWorkspaceOnly || !n(l.url)) return "failed"
          let c = {
            actor: "CHATGPT_SHARE_FLOW_ACTOR_SHARER",
            attachmentType: "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_IMAGE_SHARE",
            contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE",
            source: o,
            sheetType: "CHATGPT_SHARE_FLOW_SHEET_TYPE_SYSTEM",
            conversationId: t,
            shareSessionId: r,
            shareId: a.shareLinkId,
          }
          try {
            let a = navigator.share(l)
            return (
              (0, s.yy)(e, i.HX, { ...c, action: "CHATGPT_SHARE_FLOW_ACTION_SYSTEM_SHEET_OPENED" }),
              await a,
              (0, s.yy)(e, i.HX, { ...c, action: "CHATGPT_SHARE_FLOW_ACTION_SYSTEM_SHARE_COMPLETED" }),
              "shared"
            )
          } catch (t) {
            let a = "object" == typeof t && null != t && "name" in t && "AbortError" === t.name
            return (
              (0, s.yy)(e, i.HX, {
                ...c,
                action: a ? "CHATGPT_SHARE_FLOW_ACTION_DISMISSED" : "CHATGPT_SHARE_FLOW_ACTION_FAILED",
                failureReason: a ? void 0 : "CHATGPT_SHARE_FLOW_FAILURE_REASON_UNSPECIFIED",
              }),
              a ? "cancelled" : "failed"
            )
          }
        },
        P: n,
      },
    )
  },
  k5RO(e, a, t) {
    let i = { kind: "native" },
      s = { kind: "native", promptShareTreatment: "image-only" },
      n = { kind: "custom", layout: "one-row", unsupportedDestinationFallback: "native-share" },
      r = { kind: "custom", layout: "one-row", unsupportedDestinationFallback: "app-store" },
      o = { kind: "custom", layout: "two-rows", unsupportedDestinationFallback: "native-share" },
      l = { ...o, promptShareTreatment: "image-only" },
      c = { ...o, promptShareTreatment: "prompt-with-image" },
      d = { kind: "custom", layout: "two-rows", unsupportedDestinationFallback: "app-store" },
      h = ["whatsapp", "messages", "instagram-stories", "facebook-messenger", "x", "reddit"],
      p = {
        US: ["messages", "whatsapp", "instagram-stories", "x", "reddit", "linkedin"],
        KR: ["kakao-talk", "messages", "instagram-stories", "x", "reddit", "linkedin"],
        JP: ["line", "messages", "x", "instagram-stories", "reddit", "whatsapp"],
        BR: ["whatsapp", "instagram-stories", "facebook-stories", "facebook-messenger", "x", "reddit"],
        GB: ["whatsapp", "messages", "instagram-stories", "facebook-messenger", "x", "reddit"],
        IE: ["whatsapp", "facebook-messenger", "instagram-stories", "facebook-stories", "snapchat-stories", "x"],
        DE: ["whatsapp", "instagram-stories", "telegram", "facebook-messenger", "x", "reddit"],
        ES: ["whatsapp", "instagram-stories", "facebook-stories", "telegram", "facebook-messenger", "x"],
        IT: ["whatsapp", "instagram-stories", "facebook-stories", "telegram", "facebook-messenger", "x"],
        NL: ["whatsapp", "instagram-stories", "facebook-messenger", "facebook-stories", "telegram", "x"],
        PT: ["whatsapp", "instagram-stories", "facebook-stories", "facebook-messenger", "telegram", "x"],
      },
      g = {
        "facebook-messenger": {
          android: "https://play.google.com/store/apps/details?id=com.facebook.orca",
          ios: "https://apps.apple.com/app/messenger/id454638411",
        },
        "facebook-stories": {
          android: "https://play.google.com/store/apps/details?id=com.facebook.katana",
          ios: "https://apps.apple.com/app/facebook/id284882215",
        },
        "instagram-stories": {
          android: "https://play.google.com/store/apps/details?id=com.instagram.android",
          ios: "https://apps.apple.com/app/instagram/id389801252",
        },
        "kakao-talk": {
          android: "https://play.google.com/store/apps/details?id=com.kakao.talk",
          ios: "https://apps.apple.com/app/kakaotalk-messenger/id362057947",
        },
        "snapchat-stories": {
          android: "https://play.google.com/store/apps/details?id=com.snapchat.android",
          ios: "https://apps.apple.com/app/snapchat/id447188370",
        },
      }
    t.d(
      a,
      {},
      {
        NS: function (e) {
          return null != g[e]
        },
        RU: function ({ canUseNativeShare: e, experience: a, isMobileBrowser: t, isPersonalAccount: i }) {
          if (t) return "custom" === a.kind ? a : e && i ? n : void 0
        },
        Rt: "2001123255",
        Sy: function (e, a) {
          return g[e]?.[a] ?? null
        },
        Tg: "mweb_image_share_sheet_variant",
        aj: function (e) {
          switch (e) {
            case "native_with_fallback_no_prompt_switcher":
              return s
            case "custom_one_row_native_fallback":
            case "new_custom":
              return n
            case "custom_one_row_app_store_redirect":
              return r
            case "custom_two_rows_native_fallback":
              return o
            case "custom_share_sheet_without_prompt_switcher":
              return l
            case "custom_share_sheet_with_prompt_switcher":
              return c
            case "custom_two_rows_app_store_redirect":
              return d
            default:
              return i
          }
        },
        i2: function ({ country: e }) {
          let a = e?.trim().toUpperCase()
          return [...((null == a ? void 0 : p[a]) ?? h)]
        },
        lP: function ({ destination: e, isAppleDevice: a, shareUrl: t, title: i }) {
          let s = encodeURIComponent(t),
            n = encodeURIComponent(i ?? "")
          switch (e) {
            case "messages":
              return `sms:${a ? "&" : "?"}body=${s}`
            case "whatsapp":
              return `https://wa.me/?text=${s}`
            case "telegram":
              return `https://t.me/share/url?url=${s}&text=${n}`
            case "line":
              return `https://social-plugins.line.me/lineit/share?url=${s}&text=${n}`
            case "linkedin":
              return `https://www.linkedin.com/shareArticle?url=${s}&text=${n}`
            case "reddit":
              return `https://www.reddit.com/submit?url=${s}&title=${n}`
            case "x":
              return `https://twitter.com/intent/tweet?url=${s}&text=${n}`
            case "facebook-messenger":
            case "facebook-stories":
            case "instagram-stories":
            case "kakao-talk":
            case "snapchat-stories":
              return null
          }
        },
      },
    )
  },
  aPiu(e, a, t) {
    var i = t("ABep"),
      s = t("QosV"),
      n = t("zTeN"),
      r = t("Sd8U"),
      o = t("uHE8"),
      l = t("Oj9r")
    t.d(
      a,
      {},
      {
        y: function (e) {
          let a,
            t,
            c = (0, s.c)(7),
            { children: d } = e,
            h = (0, n.gh)(l.GD)
          if ("home" === h.value.routeKind) {
            let e
            return (c[0] !== d ? ((e = (0, i.jsx)(o.A, { children: d })), (c[0] = d), (c[1] = e)) : (e = c[1]), e)
          }
          c[2] !== h
            ? ((a = (0, r.Oq)(h)?.getOwnValue(r.PR) ?? (0, r.CN)(h.value, void 0, h.value.clientThreadId)),
              (c[2] = h),
              (c[3] = a))
            : (a = c[3])
          let p = a
          return (
            c[4] !== d || c[5] !== p
              ? ((t = (0, i.jsx)(n.Ui, { scope: r.PR, value: p, children: d })), (c[4] = d), (c[5] = p), (c[6] = t))
              : (t = c[6]),
            t
          )
        },
      },
    )
  },
  Djzw(e, a, t) {
    t.d(a, { I: () => g })
    var i = t("ABep"),
      s = t("QosV")
    let n = (0, t("iJY0").a)({
      name: "xmark-lg-bold-24",
      canvas: {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        frame: { x: 0, y: 0, width: 24, height: 24 },
        inkBounds: { x: 4.450317, y: 4.450317, width: 15.099365, height: 15.099365 },
        visualBounds: { x: 4.450317, y: 4.450317, width: 15.099365, height: 15.099365 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 4.450317, y: 4.450317, width: 15.099365, height: 15.099365 },
        center: { x: 12, y: 12 },
        insets: { top: 4.450317, right: 4.450318, bottom: 4.450318, left: 4.450317 },
        anchors: { frame: { x: 12, y: 12 }, ink: { x: 12, y: 12 }, foreground: { x: 12, y: 12 } },
      },
      capabilities: ["icon"],
      body: '<path d="M17.3311 4.83108C17.8388 4.3234 18.6613 4.3234 19.169 4.83108C19.6766 5.33877 19.6766 6.16132 19.169 6.66897L13.8379 12L19.169 17.3311C19.6766 17.8388 19.6766 18.6613 19.169 19.169C18.6613 19.6766 17.8388 19.6766 17.3311 19.169L12 13.8379L6.66897 19.169C6.16132 19.6766 5.33877 19.6766 4.83108 19.169C4.3234 18.6613 4.3234 17.8388 4.83108 17.3311L10.1621 12L4.83108 6.66897C4.3234 6.16129 4.3234 5.33876 4.83108 4.83108C5.33876 4.3234 6.16129 4.3234 6.66897 4.83108L12 10.1621L17.3311 4.83108Z" fill="currentColor"/>',
    })
    var r = t("on57"),
      o = t("Wf1j"),
      l = t("Sm6l"),
      c = t("JNtf"),
      d = t("mUDD"),
      h = t("HOLv"),
      p = t("CsDP")
    function g(e) {
      let a,
        t,
        g,
        u,
        m,
        f,
        b,
        v,
        w = (0, s.c)(44),
        {
          children: C,
          headerContent: k,
          headerActions: y,
          footer: x,
          collapseEmptyContent: _,
          compactImageSheetFooter: T,
          isDismissalDisabled: S,
          subtitle: A,
          title: I,
          onClose: j,
          onOpenAutoFocus: L,
          onCloseAutoFocus: P,
          onPortalContainerChange: M,
          onSubmit: D,
          size: E,
          variant: N,
          presentation: O,
        } = e,
        G = void 0 !== _ && _,
        R = void 0 !== T && T,
        F = void 0 !== S && S,
        H = (0, o.A)(),
        W = "imageSheet" === O
      ;(w[0] !== R || w[1] !== y || w[2] !== H || w[3] !== F || w[4] !== W || w[5] !== j || w[6] !== A || w[7] !== I
        ? ((a = W
            ? (0, i.jsxs)("div", {
                className: (0, r.A)("shrink-0", "imageSheetHeader-vPz2gu", R && "imageSheetTwoRowsHeader-udlzI8"),
                children: [
                  (0, i.jsx)(c.L3, { className: "imageSheetTitle-iMmEfF", children: I }),
                  null != A && (0, i.jsx)(c.rr, { className: "imageSheetSubtitle-E3o3_v", children: A }),
                  !F &&
                    (0, i.jsx)(l.$, {
                      unstyled: !0,
                      className: (0, r.A)("imageSheetClose-msZEpI", R && "imageSheetTwoRowsClose-qwbpXz"),
                      "aria-label": H.formatMessage({
                        id: "codex.dialog.closeButton",
                        defaultMessage: "Close dialog",
                        description: "Accessible label for the button that closes a dialog",
                      }),
                      onClick: (e) => {
                        ;(e.stopPropagation(), j())
                      },
                      children: (0, i.jsx)(h.I, { asset: n }),
                    }),
                ],
              })
            : (0, i.jsxs)("div", {
                className: "mb-2 flex items-center gap-2 pe-8",
                children: [
                  (0, i.jsx)(d.c7, {
                    className: "min-w-0 flex-1",
                    title: (0, i.jsx)(c.L3, { className: "contents", children: I }),
                    titleClassName: "truncate",
                    subtitle: null == A ? void 0 : (0, i.jsx)(c.rr, { className: "contents", children: A }),
                  }),
                  y,
                ],
              })),
          (w[0] = R),
          (w[1] = y),
          (w[2] = H),
          (w[3] = F),
          (w[4] = W),
          (w[5] = j),
          (w[6] = A),
          (w[7] = I),
          (w[8] = a))
        : (a = w[8]),
        w[9] !== k || w[10] !== a
          ? ((t = (0, i.jsxs)(i.Fragment, { children: [a, k] })), (w[9] = k), (w[10] = a), (w[11] = t))
          : (t = w[11]))
      let U = t
      ;(w[12] !== A ? ((g = null == A ? { "aria-describedby": void 0 } : {}), (w[12] = A), (w[13] = g)) : (g = w[13]),
        w[14] !== L || w[15] !== M
          ? ((u = (e) => {
              ;(e.currentTarget instanceof HTMLElement && M?.(e.currentTarget), L?.(e))
            }),
            (w[14] = L),
            (w[15] = M),
            (w[16] = u))
          : (u = w[16]),
        w[17] !== P || w[18] !== g || w[19] !== u
          ? ((m = { ...g, shouldStopPointerDownPropagation: !1, onCloseAutoFocus: P, onOpenAutoFocus: u }),
            (w[17] = P),
            (w[18] = g),
            (w[19] = u),
            (w[20] = m))
          : (m = w[20]))
      let B = !F && !W,
        q = N ?? "opaque",
        z = W ? "imageSheetSurface-pAxv7i" : void 0,
        V = W ? "imageSheetOverlay-Da_SGi" : void 0
      return (
        w[21] !== F || w[22] !== j
          ? ((f = (e) => {
              e || F || j()
            }),
            (w[21] = F),
            (w[22] = j),
            (w[23] = f))
          : (f = w[23]),
        w[24] !== C ||
        w[25] !== G ||
        w[26] !== R ||
        w[27] !== x ||
        w[28] !== U ||
        w[29] !== F ||
        w[30] !== W ||
        w[31] !== D
          ? ((b = W
              ? (0, i.jsxs)(d.R4, {
                  as: null == D ? "div" : "form",
                  variant: "chatgpt",
                  className: (0, r.A)("imageSheetBody-YQy31R", "min-h-0", R && "imageSheetTwoRowsBody-mMGp9m"),
                  onSubmit:
                    null == D
                      ? void 0
                      : (e) => {
                          ;(e.preventDefault(), e.stopPropagation(), F || D())
                        },
                  children: [
                    (0, i.jsxs)("div", { className: "flex min-h-0 flex-col", children: [U, C] }),
                    (0, i.jsx)("div", { className: (0, r.A)("shrink-0", R ? "mt-2" : "mt-12"), children: x }),
                  ],
                })
              : (0, i.jsx)(p.c, {
                  collapseEmptyContent: G,
                  header: U,
                  footer: x,
                  onSubmit:
                    null == D
                      ? void 0
                      : (e) => {
                          ;(e.preventDefault(), e.stopPropagation(), F || D())
                        },
                  children: C,
                })),
            (w[24] = C),
            (w[25] = G),
            (w[26] = R),
            (w[27] = x),
            (w[28] = U),
            (w[29] = F),
            (w[30] = W),
            (w[31] = D),
            (w[32] = b))
          : (b = w[32]),
        w[33] !== F ||
        w[34] !== W ||
        w[35] !== E ||
        w[36] !== q ||
        w[37] !== z ||
        w[38] !== V ||
        w[39] !== f ||
        w[40] !== b ||
        w[41] !== m ||
        w[42] !== B
          ? ((v = (0, i.jsx)(c.lG, {
              open: !0,
              contentOverflow: "visible",
              contentProps: m,
              shouldIgnoreClickOutside: F,
              showDialogClose: B,
              size: E,
              variant: q,
              unstyledContent: W,
              contentClassName: z,
              overlayClassName: V,
              onOpenChange: f,
              children: b,
            })),
            (w[33] = F),
            (w[34] = W),
            (w[35] = E),
            (w[36] = q),
            (w[37] = z),
            (w[38] = V),
            (w[39] = f),
            (w[40] = b),
            (w[41] = m),
            (w[42] = B),
            (w[43] = v))
          : (v = w[43]),
        v
      )
    }
  },
  TnP0(e, a, t) {
    var i = t("ABep"),
      s = t("QosV"),
      n = t("Wf1j"),
      r = t("oyxz"),
      o = t("Sm6l"),
      l = t("mUDD"),
      c = t("bVeK"),
      d = t("evwP"),
      h = t("zLIa"),
      p = t("Djzw")
    t.d(
      a,
      {},
      {
        w: function (e) {
          let a,
            t,
            g,
            u,
            m,
            f,
            b,
            v = (0, s.c)(38),
            {
              accessControls: w,
              actionDisabled: C,
              actionLabel: k,
              audience: y,
              compactImageSheetFooter: x,
              error: _,
              footer: T,
              info: S,
              isBusy: A,
              isDismissalDisabled: I,
              notices: j,
              onClose: L,
              onOpenAutoFocus: P,
              onPortalContainerChange: M,
              onSubmit: D,
              preview: E,
              presentation: N,
              subtitle: O,
              size: G,
              threadTitle: R,
              title: F,
            } = e,
            H = (0, n.A)()
          v[0] !== R ? ((a = R?.trim()), (v[0] = R), (v[1] = a)) : (a = v[1])
          let W = a
          ;(v[2] !== A ? ((t = A ? null : (0, i.jsx)(c.ibM, {})), (v[2] = A), (v[3] = t)) : (t = v[3]),
            v[4] !== k || v[5] !== t
              ? ((g = (0, i.jsxs)(i.Fragment, { children: [t, k] })), (v[4] = k), (v[5] = t), (v[6] = g))
              : (g = v[6]))
          let U = g
          if (_?.preventsSharing) {
            let e
            ;(v[7] !== _.onRetry
              ? ((e =
                  null != _.onRetry
                    ? (0, i.jsx)(r.A, {
                        id: "shareDialog.thread.retry",
                        defaultMessage: "Try again",
                        description:
                          "Button in a thread sharing dialog after preparing the share link fails. Retries preparing the chat without publishing it.",
                      })
                    : (0, i.jsx)(r.A, {
                        id: "shareDialog.thread.close",
                        defaultMessage: "Close",
                        description:
                          "Button in a thread sharing dialog that cannot prepare a share link. Closes the failed dialog so the user can reopen sharing.",
                      })),
                (v[7] = _.onRetry),
                (v[8] = e))
              : (e = v[8]),
              (U = e))
          }
          let B = !_?.preventsSharing && C
          v[9] !== U || v[10] !== A || v[11] !== B
            ? ((u = (0, i.jsx)(o.$, {
                color: "outline",
                disabled: B,
                loading: A,
                size: "medium",
                type: "submit",
                children: U,
              })),
              (v[9] = U),
              (v[10] = A),
              (v[11] = B),
              (v[12] = u))
            : (u = v[12])
          let q = u
          v[13] !== W || v[14] !== F
            ? ((m =
                F ??
                (W
                  ? (0, i.jsx)(r.A, {
                      id: "shareDialog.thread.namedTitle",
                      defaultMessage: "Share {threadTitle}",
                      description:
                        "Title of the ChatGPT or Codex thread sharing dialog. threadTitle is the user-provided name of the chat and may be truncated to fit the dialog header.",
                      values: { threadTitle: W },
                    })
                  : (0, i.jsx)(r.A, {
                      id: "shareDialog.thread.title",
                      defaultMessage: "Share chat",
                      description: "Title of the thread sharing dialog when the ChatGPT or Codex chat has no name yet.",
                    }))),
              (v[13] = W),
              (v[14] = F),
              (v[15] = m))
            : (m = v[15])
          let z = _?.preventsSharing ? (_.onRetry ?? L) : D,
            V = _?.preventsSharing ? q : (T ?? q)
          return (
            v[16] !== w ||
            v[17] !== y ||
            v[18] !== _ ||
            v[19] !== S ||
            v[20] !== H ||
            v[21] !== j ||
            v[22] !== N ||
            v[23] !== E
              ? ((f = _?.preventsSharing
                  ? (0, i.jsx)(l.OO, {
                      className: "py-10",
                      children: (0, i.jsx)("div", {
                        role: "alert",
                        children: (0, i.jsx)(d.W, { children: _.content }),
                      }),
                    })
                  : (0, i.jsxs)(i.Fragment, {
                      children: [
                        "imageSheet" === N ? E : (0, i.jsx)(l.OO, { children: E }),
                        S,
                        j,
                        w ??
                          (null == y
                            ? null
                            : (0, i.jsx)(l.OO, {
                                children: (0, i.jsx)("div", {
                                  className: "text-sm text-codex-description",
                                  children: y,
                                }),
                              })),
                        null == _
                          ? null
                          : (0, i.jsx)(l.OO, {
                              children: (0, i.jsx)("div", {
                                className: "text-sm text-danger",
                                role: "alert",
                                children: _.content,
                              }),
                            }),
                        _?.copyUrl == null
                          ? null
                          : (0, i.jsx)(l.OO, {
                              children: (0, i.jsx)(h.pd, {
                                "aria-label": H.formatMessage({
                                  id: "shareDialog.thread.linkLabel",
                                  defaultMessage: "Share link",
                                  description:
                                    "Accessible label for the read-only URL field in a ChatGPT or Codex thread sharing dialog. The URL can be manually selected and copied if clipboard access fails.",
                                }),
                                readOnly: !0,
                                value: _.copyUrl,
                              }),
                            }),
                      ],
                    })),
                (v[16] = w),
                (v[17] = y),
                (v[18] = _),
                (v[19] = S),
                (v[20] = H),
                (v[21] = j),
                (v[22] = N),
                (v[23] = E),
                (v[24] = f))
              : (f = v[24]),
            v[25] !== x ||
            v[26] !== I ||
            v[27] !== L ||
            v[28] !== P ||
            v[29] !== M ||
            v[30] !== N ||
            v[31] !== G ||
            v[32] !== O ||
            v[33] !== m ||
            v[34] !== z ||
            v[35] !== V ||
            v[36] !== f
              ? ((b = (0, i.jsx)(p.I, {
                  title: m,
                  subtitle: O,
                  compactImageSheetFooter: x,
                  isDismissalDisabled: I,
                  onClose: L,
                  onOpenAutoFocus: P,
                  onPortalContainerChange: M,
                  onSubmit: z,
                  size: G,
                  presentation: N,
                  footer: V,
                  children: f,
                })),
                (v[25] = x),
                (v[26] = I),
                (v[27] = L),
                (v[28] = P),
                (v[29] = M),
                (v[30] = N),
                (v[31] = G),
                (v[32] = O),
                (v[33] = m),
                (v[34] = z),
                (v[35] = V),
                (v[36] = f),
                (v[37] = b))
              : (b = v[37]),
            b
          )
        },
      },
    )
  },
  qKAH(e, a, t) {
    t.d(a, { m: () => v, Y: () => b })
    var i = t("ABep"),
      s = t("QosV"),
      n = t("slpy"),
      r = t("on57"),
      o = t("zTeN"),
      l = t("Wf1j"),
      c = t("oyxz"),
      d = t("Qgfj"),
      h = t("Sm6l"),
      p = t("JNtf"),
      g = t("bVeK"),
      u = t("RNul"),
      m = t("O666")
    let f = { default: void 0, transcript: void 0, image: "size-full", response: "p-5" }
    function b(e) {
      let a,
        t,
        n,
        d,
        h,
        p,
        g,
        b = (0, s.c)(23),
        {
          ariaLabel: w,
          children: C,
          classicImagePreviewEligible: k,
          expandedContent: y,
          isLoading: x,
          presentation: T,
          variant: S,
        } = e,
        A = void 0 !== x && x,
        I = void 0 === S ? "default" : S,
        j = (0, l.A)()
      b[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = { layer: "3136899520", parameter: "classic_image_preview" }), (b[0] = a))
        : (a = b[0])
      let L = (0, o._U)(void 0 !== k && k ? m.H$ : null, a)
          ? "border-transparent bg-transparent"
          : "border-default bg-surface",
        P = "transcript" === I ? "h-auto" : "aspect-[1200/630]"
      b[1] !== L || b[2] !== P
        ? ((t = (0, r.A)("relative min-h-56 overflow-hidden rounded-lg border select-none", L, P)),
          (b[1] = L),
          (b[2] = P),
          (b[3] = t))
        : (t = b[3])
      let M = t
      return (
        null != T && (M = "imageSheetTwoRows" === T ? "imageSheetTwoRowsPreview-bFaioZ" : "imageSheetPreview-rzCCMf"),
        b[4] !== w || b[5] !== j || b[6] !== I
          ? ((n = w ?? j.formatMessage(_["transcript" === I ? "default" : I])),
            (b[4] = w),
            (b[5] = j),
            (b[6] = I),
            (b[7] = n))
          : (n = b[7]),
        b[8] !== C || b[9] !== A || b[10] !== T || b[11] !== I
          ? ((d = A
              ? (0, i.jsxs)("div", {
                  className: "flex h-full items-center justify-center gap-2 text-sm text-secondary",
                  children: [(0, i.jsx)(u.y, { className: "icon-sm" }), (0, i.jsx)(c.A, { ..._.loading })],
                })
              : (0, i.jsxs)("div", {
                  "aria-hidden": !0,
                  className: f[I],
                  inert: !0,
                  children: [
                    C,
                    null == T &&
                      ("default" === I || "response" === I) &&
                      (0, i.jsx)("div", {
                        className:
                          "pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface to-transparent",
                      }),
                  ],
                })),
            (b[8] = C),
            (b[9] = A),
            (b[10] = T),
            (b[11] = I),
            (b[12] = d))
          : (d = b[12]),
        b[13] !== n || b[14] !== d
          ? ((h = (0, i.jsx)("div", { className: "h-full", role: "img", "aria-label": n, children: d })),
            (b[13] = n),
            (b[14] = d),
            (b[15] = h))
          : (h = b[15]),
        b[16] !== y || b[17] !== A
          ? ((p = !A && null != y && (0, i.jsx)(v, { className: "absolute! end-2 top-2", children: y })),
            (b[16] = y),
            (b[17] = A),
            (b[18] = p))
          : (p = b[18]),
        b[19] !== M || b[20] !== h || b[21] !== p
          ? ((g = (0, i.jsxs)("div", { className: M, children: [h, p] })),
            (b[19] = M),
            (b[20] = h),
            (b[21] = p),
            (b[22] = g))
          : (g = b[22]),
        g
      )
    }
    function v(e) {
      let a,
        t,
        r,
        d,
        u,
        f,
        b,
        v,
        C,
        T,
        S,
        A = (0, s.c)(22),
        { className: I, children: j } = e,
        L = (0, l.A)()
      if (
        (A[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = { layer: "3136899520", parameter: "expand_share_preview" }), (A[0] = a))
          : (a = A[0]),
        !(0, o._U)(m.H$, a))
      )
        return null
      A[1] !== L ? ((t = L.formatMessage(_.expand)), (A[1] = L), (A[2] = t)) : (t = A[2])
      let P = t
      return (
        A[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = { "aria-describedby": void 0 }), (A[3] = r))
          : (r = A[3]),
        A[4] === Symbol.for("react.memo_cache_sentinel") ? ((d = (0, i.jsx)(g.Zji, {})), (A[4] = d)) : (d = A[4]),
        A[5] !== I || A[6] !== P
          ? ((u = (0, i.jsx)(h.$, {
              className: I,
              color: "mapSurface",
              radius: "full",
              size: "inputIcon",
              "aria-label": P,
              type: "button",
              children: d,
            })),
            (A[5] = I),
            (A[6] = P),
            (A[7] = u))
          : (u = A[7]),
        A[8] !== P || A[9] !== u
          ? ((f = (0, i.jsx)(n.m, { content: P, children: u })), (A[8] = P), (A[9] = u), (A[10] = f))
          : (f = A[10]),
        A[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, i.jsx)(p.L3, { className: "sr-only", children: (0, i.jsx)(c.A, { ..._.expandedTitle }) })),
            (A[11] = b))
          : (b = A[11]),
        A[12] !== L ? ((v = L.formatMessage(_.expandedTitle)), (A[12] = L), (A[13] = v)) : (v = A[13]),
        A[14] !== j
          ? ((C = (0, i.jsx)("fieldset", {
              disabled: !0,
              ref: x,
              onFocusCapture: w,
              onPointerDownCapture: k,
              onPointerUpCapture: k,
              onPointerMoveCapture: k,
              onPointerOverCapture: k,
              onPointerOutCapture: k,
              onMouseDownCapture: k,
              onMouseUpCapture: k,
              onMouseMoveCapture: k,
              onMouseOverCapture: k,
              onMouseOutCapture: k,
              onTouchStartCapture: k,
              onTouchMoveCapture: k,
              onTouchEndCapture: k,
              onWheelCapture: k,
              onKeyDownCapture: k,
              onKeyUpCapture: k,
              onContextMenuCapture: y,
              onDragStartCapture: y,
              onDoubleClickCapture: y,
              onClickCapture: y,
              onAuxClickCapture: y,
              onSubmitCapture: y,
              children: (0, i.jsx)("div", { children: j }),
            })),
            (A[14] = j),
            (A[15] = C))
          : (C = A[15]),
        A[16] !== v || A[17] !== C
          ? ((T = (0, i.jsx)("div", {
              className: "max-h-[80dvh] overflow-auto overscroll-contain px-5 pt-12 pb-5",
              "aria-label": v,
              role: "region",
              tabIndex: 0,
              children: C,
            })),
            (A[16] = v),
            (A[17] = C),
            (A[18] = T))
          : (T = A[18]),
        A[19] !== T || A[20] !== f
          ? ((S = (0, i.jsxs)(p.lG, {
              size: "wide",
              variant: "chatgpt",
              backdrop: "modal",
              autoFocusCloseButton: !0,
              contentProps: r,
              triggerContent: f,
              children: [b, T],
            })),
            (A[19] = T),
            (A[20] = f),
            (A[21] = S))
          : (S = A[21]),
        S
      )
    }
    function w(e) {
      ;(e.stopPropagation(), C(e.target) || e.currentTarget.parentElement?.focus({ preventScroll: !0 }))
    }
    function C(e) {
      if (
        !e.matches("div, pre, section, article, ul, ol, table") ||
        !e.matches(":not([role]), [role=region], [role=group], [role=table]")
      )
        return !1
      let { overflowX: a, overflowY: t } = getComputedStyle(e)
      return [a, t].some((e) => "auto" === e || "scroll" === e)
    }
    function k(e) {
      e.stopPropagation()
    }
    function y(e) {
      ;(e.preventDefault(), e.stopPropagation())
    }
    function x(e) {
      let a =
        "dil-renderer, a[href], area[href], [tabindex], [contenteditable], summary, iframe, object, embed, audio[controls], video[controls]"
      function t(e) {
        ;(e.matches("a[href], area[href]") && e.removeAttribute("href"),
          e.hasAttribute("contenteditable") &&
            "false" !== e.getAttribute("contenteditable") &&
            e.setAttribute("contenteditable", "false"),
          e.matches("iframe, object, embed") && e.setAttribute("inert", ""),
          "-1" === e.getAttribute("tabindex") || C(e) || e.setAttribute("tabindex", "-1"))
      }
      function i(e) {
        ;(e.matches(a) && t(e), e.querySelectorAll(a).forEach(t))
      }
      i(e)
      let s = new MutationObserver((e) => {
        for (let s of e)
          for (let e of ("attributes" === s.type && s.target instanceof Element && s.target.matches(a) && t(s.target),
          s.addedNodes))
            e instanceof Element && i(e)
      })
      return (
        s.observe(e, {
          subtree: !0,
          childList: !0,
          attributes: !0,
          attributeFilter: ["href", "tabindex", "contenteditable", "controls"],
        }),
        () => s.disconnect()
      )
    }
    let _ = (0, d.YK)({
      expand: {
        id: "shareDialog.preview.expand",
        defaultMessage: "Expand preview",
        description: "Button that opens a scrollable preview of all content included in the share link.",
      },
      expandedTitle: {
        id: "shareDialog.preview.expandedTitle",
        defaultMessage: "Share preview",
        description: "Accessible title of the dialog showing the full content selected for sharing.",
      },
      default: {
        id: "shareDialog.thread.previewLabel",
        defaultMessage: "Preview of the beginning of the shared chat",
        description:
          "Accessible description of the non-interactive cropped transcript preview inside a ChatGPT or Codex thread sharing dialog. It shows only the beginning, not the whole shared chat.",
      },
      image: {
        id: "shareDialog.image.previewLabel",
        defaultMessage: "Preview of the shared image",
        description:
          "Accessible description of the non-interactive generated-image preview inside a ChatGPT image sharing dialog.",
      },
      loading: {
        id: "shareDialog.thread.previewLoading",
        defaultMessage: "Loading preview…",
        description:
          "Status in the thread sharing dialog while the beginning of the chat is being prepared for the transcript preview.",
      },
      response: {
        id: "shareDialog.response.previewLabel",
        defaultMessage: "Preview of the shared response",
        description:
          "Accessible description of the non-interactive response preview inside a ChatGPT response sharing dialog.",
      },
    })
  },
}
//# sourceMappingURL=551169.05fe96755f.js.map
