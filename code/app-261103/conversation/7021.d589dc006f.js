export const __rspack_esm_ids = [7021]
export const __webpack_modules__ = {
  QxUX(e, a, t) {
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
  vhtC(e, a, t) {
    t.d(a, { w: () => eP, ChatGptConversationShareRecoveryDialog: () => eL })
    var i = t("ABep"),
      s = t("QosV"),
      n = t("FS1B"),
      o = t("BOYb"),
      r = t("T0Rc"),
      l = t("zTeN"),
      c = t("zd8w"),
      d = t("Wf1j"),
      h = t("oyxz"),
      g = t("Qgfj"),
      p = t("O0M0"),
      u = t("SPnB"),
      m = t("zKCW"),
      f = t("mUDD"),
      b = t("Ot7V"),
      C = t("GO7r"),
      w = t("RNul"),
      v = t("SGsN"),
      k = t("yGJW"),
      y = t("OWtl"),
      T = t("akkX"),
      _ = t("FGv0"),
      S = t("TnP0"),
      x = t("qKAH"),
      A = t("zHp1"),
      I = t("WFY2"),
      L = t("rvFo"),
      P = t("HFSu"),
      E = t("taWv"),
      M = t("r9i9"),
      j = t("Y7np"),
      D = t("oU3c"),
      N = t("D7oP"),
      O = t("OOaz"),
      G = t("fwwN"),
      R = t("cQW3"),
      H = t("Tywu"),
      F = t("rfhJ")
    function W(e) {
      let a,
        t = (0, s.c)(4),
        { includeConversationAudience: n, linkAppearance: o } = e,
        r = void 0 === o ? "secondary" : o
      if (void 0 !== n && n) {
        let e
        return (
          t[0] !== r
            ? ((e = (0, i.jsx)(h.A, {
                id: "chatgptConversations.shareDialog.conversationMemoryDisclosure",
                defaultMessage:
                  "Anyone with this link can access messages up to this point. Memory sources won't be shared with viewers. <learnMore>Learn more</learnMore>",
                description:
                  "Audience and privacy explanation in the personal ChatGPT conversation sharing dialog. The link includes messages through the selected point, but does not give viewers access to the underlying Memory sources. The learnMore tag links to the shared-links help article.",
                values: { learnMore: (e) => (0, i.jsx)(U, { appearance: r, children: e }) },
              })),
              (t[0] = r),
              (t[1] = e))
            : (e = t[1]),
          e
        )
      }
      return (
        t[2] !== r
          ? ((a = (0, i.jsx)(h.A, {
              id: "chatgptConversations.shareDialog.memoryDisclosure",
              defaultMessage: "Memory sources won't be shared with viewers. <learnMore>Learn more</learnMore>",
              description:
                "Privacy disclosure in ChatGPT content-sharing dialogs for personal and workspace accounts. Underlying Memory sources are not included in what recipients can view. The learnMore tag links to the shared-links help article.",
              values: { learnMore: (e) => (0, i.jsx)(U, { appearance: r, children: e }) },
            })),
            (t[2] = r),
            (t[3] = a))
          : (a = t[3]),
        a
      )
    }
    function U({ children: e, appearance: a = "secondary" }) {
      return null
    }
    var B = t("k5RO"),
      q = t("on57"),
      V = t("WAV0"),
      z = t("QxUX"),
      Y = t.p + "assets/54d213ef6585.svg",
      $ = t("hZax"),
      K = t("O666")
    let Q = (e) =>
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
    var X = t("nkTT")
    let Z = (0, X.a)({
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
      J = (0, X.a)({
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
      ee = (0, X.a)({
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
    var ea = t("ygO2"),
      et = t("HOLv"),
      ei = t.p + "assets/a44c3b23dcdd.svg",
      es = t.p + "assets/f89c02c412a6.svg",
      en = t.p + "assets/9a71acddc992.svg",
      eo = t.p + "assets/8701c39f9411.svg",
      er = t.p + "assets/a0e21ee4e974.svg",
      el = t.p + "assets/65e1f7f9bbc7.svg",
      ec = t.p + "assets/ef23b998c89d.svg",
      ed = t.p + "assets/68114a3519e4.svg",
      eh = t.p + "assets/4e098d17e4b0.svg",
      eg = t.p + "assets/95a74777d3b6.svg",
      ep = t.p + "assets/f402deb07e3e.svg",
      eu = t.p + "assets/d2456ff12af4.svg",
      em = t.p + "assets/a4b3bd52fa56.svg",
      ef = t.p + "assets/c90c58541963.svg",
      eb = t.p + "assets/a52fcff4cb9f.svg",
      eC = t.p + "assets/61d30fb4b9b5.svg",
      ew = t.p + "assets/eed095b8404d.svg",
      ev = t.p + "assets/960af71a4796.svg",
      ek = t.p + "assets/b7e1212639e0.svg",
      ey = t.p + "assets/0a1329508cdf.svg",
      eT = t.p + "assets/1105bc989224.svg",
      e_ = "mobileRow-V0E64y"
    function eS(e) {
      let a,
        t,
        n,
        o,
        r,
        l = (0, s.c)(35),
        {
          copyLabel: c,
          copyDisabled: h,
          isBusy: g,
          isDownloading: p,
          socialDestinationsDisabled: u,
          showSocialDestinations: m,
          onCopy: f,
          onDownload: b,
          additionalActions: C,
          onSocialShare: v,
          experience: k,
          onNativeShare: y,
          canNativeShare: T,
          country: _,
        } = e,
        S = (0, d.A)()
      if (
        l[0] !== C ||
        l[1] !== T ||
        l[2] !== h ||
        l[3] !== c ||
        l[4] !== _ ||
        l[5] !== k.layout ||
        l[6] !== k.unsupportedDestinationFallback ||
        l[7] !== S ||
        l[8] !== g ||
        l[9] !== p ||
        l[10] !== f ||
        l[11] !== b ||
        l[12] !== y ||
        l[13] !== v ||
        l[14] !== m ||
        l[15] !== u
      ) {
        o = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            s,
            r =
              null == b
                ? []
                : [
                    {
                      id: "download",
                      disabled: p || g,
                      icon: (0, i.jsx)(et.I, { asset: Z }),
                      label: S.formatMessage({
                        id: "chatgptConversations.shareDialog.destination.download.label",
                        defaultMessage: "Download",
                        description:
                          "Short label below a circular button in the generated-image Share dialog. Saves the selected image, or all images in the selected series, to the user's device without creating a shared link.",
                      }),
                      onClick: b,
                    },
                  ]
          l[20] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(et.I, { asset: ee })), (l[20] = e))
            : (e = l[20])
          let d = { id: "copy", disabled: h, icon: e, label: c, onClick: f },
            x = T
              ? [
                  {
                    id: "native",
                    disabled: h,
                    icon: (0, i.jsx)(et.I, { asset: J }),
                    label: S.formatMessage({
                      id: "chatgptConversations.mobileImageShare.native",
                      defaultMessage: "Share to",
                      description:
                        "Short action label in the mobile generated-image share sheet. Selecting it opens the device's operating-system share sheet with the public image link. It appears beside Copy link and Download.",
                    }),
                    onClick: y,
                  },
                ]
              : [],
            A = [...r, d, ...x],
            I = m
              ? (0, B.i2)({ country: _ }).map((e) =>
                  (function ({ destination: e, disabled: a, intl: t, onSocialShare: s }) {
                    let n,
                      o,
                      r,
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
                        ;((n = l(ew)),
                          (o = c(el)),
                          (r = t.formatMessage({
                            id: "chatgptConversations.mobileImageShare.messages",
                            defaultMessage: "Messages",
                            description:
                              "Short destination label in the mobile generated-image share sheet. Selecting it opens a text-message draft containing the public image link. This means the device's Messages app, not ChatGPT messages.",
                          })))
                        break
                      case "whatsapp":
                        ;((n = l(ey)),
                          (o = c(eg)),
                          (r = t.formatMessage({
                            id: "chatgptConversations.mobileImageShare.whatsapp",
                            defaultMessage: "WhatsApp",
                            description:
                              "Short destination label in the mobile generated-image share sheet. Selecting it opens WhatsApp with the public image link ready to send. WhatsApp is a brand name.",
                          })))
                        break
                      case "instagram-stories":
                        ;((n = l(ef)),
                          (o = c(es)),
                          (r = t.formatMessage({
                            id: "chatgptConversations.mobileImageShare.instagramStories",
                            defaultMessage: "Instagram",
                            description:
                              "Short destination label in the mobile generated-image share sheet for sharing through Instagram Stories. Depending on the experiment assignment, selecting it opens the operating-system share sheet or the Instagram app-store page. Instagram is a brand name.",
                          })))
                        break
                      case "facebook-stories":
                        ;((n = l(em)),
                          (o = c(ei)),
                          (r = t.formatMessage({
                            id: "chatgptConversations.mobileImageShare.facebookStories",
                            defaultMessage: "Facebook",
                            description:
                              "Short destination label in the mobile generated-image share sheet for sharing through Facebook Stories. Depending on the experiment assignment, selecting it opens the operating-system share sheet or the Facebook app-store page. Facebook is a brand name.",
                          })))
                        break
                      case "telegram":
                        ;((n = l(ek)),
                          (o = c(eh)),
                          (r = t.formatMessage({
                            id: "chatgptConversations.mobileImageShare.telegram",
                            defaultMessage: "Telegram",
                            description:
                              "Short destination label in the mobile generated-image share sheet. Selecting it opens Telegram with the public image link ready to send. Telegram is a brand name.",
                          })))
                        break
                      case "facebook-messenger":
                        ;((n = l(eu)),
                          (o = c(ei)),
                          (r = t.formatMessage({
                            id: "chatgptConversations.mobileImageShare.facebookMessenger",
                            defaultMessage: "Messenger",
                            description:
                              "Short destination label in the mobile generated-image share sheet for Facebook Messenger. Depending on the experiment assignment, selecting it opens the operating-system share sheet or the Messenger app-store page. Messenger is a brand name.",
                          })))
                        break
                      case "kakao-talk":
                        ;((n = l(eb)),
                          (o = c(en)),
                          (r = t.formatMessage({
                            id: "chatgptConversations.mobileImageShare.kakaoTalk",
                            defaultMessage: "KakaoTalk",
                            description:
                              "Short destination label shown to users in Korea in the mobile generated-image share sheet. Depending on the experiment assignment, selecting it opens the operating-system share sheet or the KakaoTalk app-store page. KakaoTalk is a brand name.",
                          })))
                        break
                      case "snapchat-stories":
                        ;((n = (0, i.jsx)(Q, { "aria-hidden": "true", className: "text-brand-logo-foreground" })),
                          (o = c(ed)),
                          (r = t.formatMessage({
                            id: "chatgptConversations.mobileImageShare.snapchatStories",
                            defaultMessage: "Snapchat",
                            description:
                              "Short destination label in the mobile generated-image share sheet for sharing through Snapchat Stories. Depending on the experiment assignment, selecting it opens the operating-system share sheet or the Snapchat app-store page. Snapchat is a brand name.",
                          })))
                        break
                      case "line":
                        ;((n = l(Y)),
                          (o = c(eo)),
                          (r = t.formatMessage({
                            id: "postSharingModal.line",
                            defaultMessage: "LINE",
                            description:
                              "Short label for the LINE destination in ChatGPT conversation, message, and image sharing dialogs and menus. Selecting it opens LINE sharing so the user can choose recipients and send the shared link. Appears alongside X and LinkedIn. LINE is a messaging app brand name; keep its Latin letters and capitalization.",
                          })))
                        break
                      case "x":
                        ;((n = l(eT)),
                          (o = c(ep)),
                          (r = t.formatMessage({
                            id: "chatgptConversations.shareDialog.destination.x.label",
                            defaultMessage: "X",
                            description:
                              "Short destination label below a circular button in a ChatGPT post sharing dialog for a conversation, response, or generated image. Selecting it opens X's post composer with the public post URL.",
                          })))
                        break
                      case "linkedin":
                        ;((n = l(eC)),
                          (o = c(er)),
                          (r = t.formatMessage({
                            id: "chatgptConversations.shareDialog.destination.linkedin.label",
                            defaultMessage: "LinkedIn",
                            description:
                              "Short destination label below a circular button in a ChatGPT post sharing dialog for a conversation, response, or generated image. Selecting it opens LinkedIn's post composer with the public post URL.",
                          })))
                        break
                      case "reddit":
                        ;((n = l(ev)),
                          (o = c(ec)),
                          (r = t.formatMessage({
                            id: "chatgptConversations.shareDialog.destination.reddit.label",
                            defaultMessage: "Reddit",
                            description:
                              "Short destination label below a circular button in a ChatGPT post sharing dialog for a conversation, response, or generated image. Selecting it opens Reddit's submission form with the public post URL. Other destinations are Copy link, X, and LinkedIn.",
                          })))
                    }
                    return { id: e, disabled: a, icon: n, iconBackground: o, label: r, onClick: (a) => s(e, a) }
                  })({
                    destination: e,
                    disabled: u || ("native-share" === k.unsupportedDestinationFallback && (0, B.NS)(e) && !T),
                    intl: S,
                    onSocialShare: v,
                  }),
                )
              : [],
            L = "two-rows" === k.layout && I.length > 0
          l[21] !== g || l[22] !== p
            ? ((s = (e, a) => {
                let { id: t, disabled: s, icon: n, iconBackground: o, label: r, onClick: l } = e,
                  c = ("copy" === t && g) || ("download" === t && p)
                return (0, i.jsx)(
                  V.b,
                  {
                    extension: "download" === t,
                    children: (0, i.jsxs)(ea.$, {
                      "aria-label": r,
                      "aria-busy": c,
                      color: "shareDestination",
                      unstyled: !0,
                      className: (0, q.A)("mobileDestination-JRc58g", a && "mobileTwoRowDestination-jahy9S"),
                      "data-destination": t,
                      disabled: s,
                      size: "shareDestination",
                      type: "copy" === t ? "submit" : "button",
                      onClick: l,
                      children: [
                        (0, i.jsxs)("span", {
                          className: (0, q.A)(
                            "destinationIcon-EuU6jl",
                            null != o && "destinationIconWithArtwork-eYPnWH",
                          ),
                          children: [
                            o,
                            (0, i.jsx)("span", {
                              className: "destinationIconForeground-usBliy",
                              children: c ? (0, i.jsx)(w.y, { as: "span", className: "icon-sm" }) : n,
                            }),
                          ],
                        }),
                        (0, i.jsx)("span", {
                          className: "w-full text-center whitespace-nowrap text-default select-none",
                          "aria-live": "copy" === t ? "polite" : void 0,
                          children: r,
                        }),
                      ],
                    }),
                  },
                  t,
                )
              }),
              (l[21] = g),
              (l[22] = p),
              (l[23] = s))
            : (s = l[23])
          let P = s
          if (L) {
            let e,
              a,
              t,
              s,
              n = [...r, ...x, d]
            ;(l[24] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, q.A)(
                  "box-border flex min-w-0 w-full gap-x-5 overflow-x-auto overscroll-x-contain px-5 pt-5 pb-8",
                  e_,
                )),
                (l[24] = e))
              : (e = l[24]),
              l[25] !== P ? ((a = (e) => P(e, !0)), (l[25] = P), (l[26] = a)) : (a = l[26]),
              l[27] === Symbol.for("react.memo_cache_sentinel")
                ? ((t = (0, i.jsx)("div", {
                    className: "w-full border-t-hairline border-default",
                    "aria-hidden": "true",
                  })),
                  (l[27] = t))
                : (t = l[27]),
              l[28] === Symbol.for("react.memo_cache_sentinel")
                ? ((s = (0, q.A)(
                    "box-border flex min-w-0 w-full gap-x-5 overflow-x-auto overscroll-x-contain px-5 pt-5 pb-8",
                    e_,
                    "mobileUtilityRow-iCKQaL",
                  )),
                  (l[28] = s))
                : (s = l[28]),
              (o = (0, i.jsxs)("div", {
                className: "flex w-full min-w-0 flex-col",
                children: [
                  (0, i.jsx)("div", {
                    "data-mobile-image-share-row": "destinations",
                    className: e,
                    children: I.map(a),
                  }),
                  t,
                  (0, i.jsxs)("div", {
                    "data-mobile-image-share-row": "actions",
                    className: s,
                    children: [n.map((e) => P(e, !0)), C],
                  }),
                ],
              })))
            break e
          }
          ;((a = "combined"),
            l[29] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, q.A)("flex w-full gap-x-6 overflow-x-auto overscroll-x-contain px-6", e_)), (l[29] = t))
              : (t = l[29]),
            (n = [...A, ...I].map((e) => P(e, !1))))
        }
        ;((l[0] = C),
          (l[1] = T),
          (l[2] = h),
          (l[3] = c),
          (l[4] = _),
          (l[5] = k.layout),
          (l[6] = k.unsupportedDestinationFallback),
          (l[7] = S),
          (l[8] = g),
          (l[9] = p),
          (l[10] = f),
          (l[11] = b),
          (l[12] = y),
          (l[13] = v),
          (l[14] = m),
          (l[15] = u),
          (l[16] = a),
          (l[17] = t),
          (l[18] = n),
          (l[19] = o))
      } else ((a = l[16]), (t = l[17]), (n = l[18]), (o = l[19]))
      return o !== Symbol.for("react.early_return_sentinel")
        ? o
        : (l[30] !== C || l[31] !== a || l[32] !== t || l[33] !== n
            ? ((r = (0, i.jsxs)("div", { "data-mobile-image-share-row": a, className: t, children: [n, C] })),
              (l[30] = C),
              (l[31] = a),
              (l[32] = t),
              (l[33] = n),
              (l[34] = r))
            : (r = l[34]),
          r)
    }
    function ex(e) {
      let a,
        t,
        n,
        o,
        r,
        c,
        d = (0, s.c)(22),
        {
          "aria-label": h,
          "data-destination": g,
          disabled: p,
          icons: u,
          isBusy: m,
          label: f,
          announceLabel: b,
          type: C,
          onClick: v,
        } = e,
        k = void 0 !== m && m,
        y = void 0 === C ? "button" : C
      d[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = { layer: "3136899520", parameter: "large_share_destinations" }), (d[0] = a))
        : (a = d[0])
      let T = (0, l._U)(K.H$, a),
        _ = T ? u.large : u.compact,
        S = T ? "size-16" : "size-11"
      ;(d[1] !== S
        ? ((t = (0, q.A)("share-destination-icon flex items-center justify-center rounded-full", S)),
          (d[1] = S),
          (d[2] = t))
        : (t = d[2]),
        d[3] !== T || d[4] !== _ || d[5] !== k
          ? ((n = k ? (0, i.jsx)(w.y, { as: "span", className: T ? "size-8" : "icon-sm" }) : _),
            (d[3] = T),
            (d[4] = _),
            (d[5] = k),
            (d[6] = n))
          : (n = d[6]),
        d[7] !== t || d[8] !== n
          ? ((o = (0, i.jsx)("span", { className: t, children: n })), (d[7] = t), (d[8] = n), (d[9] = o))
          : (o = d[9]))
      let x = void 0 !== b && b ? "polite" : void 0
      return (
        d[10] !== f || d[11] !== x
          ? ((r = (0, i.jsx)("span", {
              className: "w-full text-center text-xs whitespace-nowrap text-default select-none",
              "aria-live": x,
              children: f,
            })),
            (d[10] = f),
            (d[11] = x),
            (d[12] = r))
          : (r = d[12]),
        d[13] !== h ||
        d[14] !== g ||
        d[15] !== p ||
        d[16] !== k ||
        d[17] !== v ||
        d[18] !== r ||
        d[19] !== o ||
        d[20] !== y
          ? ((c = (0, i.jsxs)(ea.$, {
              "aria-label": h,
              "aria-busy": k,
              "data-destination": g,
              color: "shareDestination",
              disabled: p,
              size: "shareDestination",
              type: y,
              onClick: v,
              children: [o, r],
            })),
            (d[13] = h),
            (d[14] = g),
            (d[15] = p),
            (d[16] = k),
            (d[17] = v),
            (d[18] = r),
            (d[19] = o),
            (d[20] = y),
            (d[21] = c))
          : (c = d[21]),
        c
      )
    }
    function eA(e) {
      let a,
        t,
        n,
        o,
        r,
        c,
        h,
        g,
        p,
        u,
        m,
        f,
        b = (0, s.c)(54),
        {
          copyLabel: w,
          copyDisabled: v,
          isBusy: k,
          isDownloading: y,
          socialDestinationsDisabled: T,
          showSocialDestinations: _,
          onCopy: S,
          onDownload: x,
          additionalActions: A,
          onSocialShare: I,
          mobileImageActions: L,
        } = e,
        P = void 0 !== y && y,
        E = null != L
      b[0] !== E
        ? ((a = { layer: "3136899520", parameter: "large_share_destinations", disableExposureLog: E }),
          (b[0] = E),
          (b[1] = a))
        : (a = b[1])
      let M = (0, l._U)(K.H$, a),
        j = (0, d.A)(),
        { client: D } = (0, $.cn)()
      b[2] !== D ? ((t = D.getContext().user?.country?.trim().toUpperCase()), (b[2] = D), (b[3] = t)) : (t = b[3])
      let N = t,
        O = null == L && "JP" === N && _,
        G = !O
      b[4] !== G
        ? ((n = { layer: "494762337", parameter: "enabled", disableExposureLog: G }), (b[4] = G), (b[5] = n))
        : (n = b[5])
      let R = (0, l._U)(O ? K.H$ : null, n),
        H = O && R
      if (null != L) {
        let e
        return (
          b[6] !== A ||
          b[7] !== v ||
          b[8] !== w ||
          b[9] !== N ||
          b[10] !== k ||
          b[11] !== P ||
          b[12] !== L.canNativeShare ||
          b[13] !== L.experience ||
          b[14] !== L.onNativeShare ||
          b[15] !== S ||
          b[16] !== x ||
          b[17] !== I ||
          b[18] !== _ ||
          b[19] !== T
            ? ((e = (0, i.jsx)(eS, {
                copyLabel: w,
                copyDisabled: v,
                isBusy: k,
                isDownloading: P,
                socialDestinationsDisabled: T,
                showSocialDestinations: _,
                onCopy: S,
                onDownload: x,
                additionalActions: A,
                onSocialShare: I,
                experience: L.experience,
                onNativeShare: L.onNativeShare,
                canNativeShare: L.canNativeShare,
                country: N,
              })),
              (b[6] = A),
              (b[7] = v),
              (b[8] = w),
              (b[9] = N),
              (b[10] = k),
              (b[11] = P),
              (b[12] = L.canNativeShare),
              (b[13] = L.experience),
              (b[14] = L.onNativeShare),
              (b[15] = S),
              (b[16] = x),
              (b[17] = I),
              (b[18] = _),
              (b[19] = T),
              (b[20] = e))
            : (e = b[20]),
          e
        )
      }
      b[21] !== j || b[22] !== P || b[23] !== x
        ? ((o =
            null == x
              ? []
              : [
                  {
                    id: "download",
                    largeIcon: (0, i.jsx)(C.Ve9, { "aria-hidden": "true" }),
                    disabled: P,
                    icon: (0, i.jsx)(C.EYt, {}),
                    label: j.formatMessage({
                      id: "chatgptConversations.shareDialog.destination.download.label",
                      defaultMessage: "Download",
                      description:
                        "Short label below a circular button in the generated-image Share dialog. Saves the selected image, or all images in the selected series, to the user's device without creating a shared link.",
                    }),
                    onClick: x,
                  },
                ]),
          (b[21] = j),
          (b[22] = P),
          (b[23] = x),
          (b[24] = o))
        : (o = b[24])
      let F = o
      ;(b[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = (0, i.jsx)(C._Kk, { "aria-hidden": "true" })), (b[25] = r))
        : (r = b[25]),
        b[26] === Symbol.for("react.memo_cache_sentinel") ? ((c = (0, i.jsx)(C.DIB, {})), (b[26] = c)) : (c = b[26]),
        b[27] !== v || b[28] !== w || b[29] !== S
          ? ((h = { id: "copy", largeIcon: r, disabled: v, icon: c, label: w, onClick: S }),
            (b[27] = v),
            (b[28] = w),
            (b[29] = S),
            (b[30] = h))
          : (h = b[30]))
      let W = h
      b[31] !== j || b[32] !== I || b[33] !== H || b[34] !== _ || b[35] !== T
        ? ((g = _
            ? [
                ...(H
                  ? [
                      (function ({ disabled: e, intl: a, onSocialShare: t }) {
                        let s = (0, i.jsx)("img", { alt: "", "aria-hidden": !0, src: Y })
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
                      })({ disabled: T, intl: j, onSocialShare: I }),
                    ]
                  : []),
                eI({ destination: "x", disabled: T, intl: j, onSocialShare: I }),
                eI({ destination: "linkedin", disabled: T, intl: j, onSocialShare: I }),
                ...(H ? [] : [eI({ destination: "reddit", disabled: T, intl: j, onSocialShare: I })]),
              ]
            : []),
          (b[31] = j),
          (b[32] = I),
          (b[33] = H),
          (b[34] = _),
          (b[35] = T),
          (b[36] = g))
        : (g = b[36])
      let U = g
      b[37] !== W || b[38] !== U || b[39] !== F
        ? ((p = [W, ...U, ...F]), (b[37] = W), (b[38] = U), (b[39] = F), (b[40] = p))
        : (p = b[40])
      let B = p,
        z = null == A && "flex-wrap justify-center gap-x-6 gap-y-4",
        Q = null != A && "gap-3",
        X = null != A && M && "flex-wrap justify-center",
        Z = null != A && !M && "justify-start overflow-x-auto sm:justify-center"
      return (
        b[41] !== z || b[42] !== Q || b[43] !== X || b[44] !== Z
          ? ((u = (0, q.A)("flex w-full", z, Q, X, Z)), (b[41] = z), (b[42] = Q), (b[43] = X), (b[44] = Z), (b[45] = u))
          : (u = b[45]),
        b[46] !== B || b[47] !== k || b[48] !== P
          ? ((m = B.map((e) => {
              let { id: a, disabled: t, icon: s, largeIcon: n, label: o, onClick: r } = e,
                l = ("copy" === a && k) || ("download" === a && P)
              return (0, i.jsx)(
                V.b,
                {
                  extension: "download" === a,
                  children: (0, i.jsx)(ex, {
                    "aria-label": o,
                    "data-destination": a,
                    disabled: t,
                    icons: { compact: s, large: n },
                    isBusy: l,
                    label: o,
                    announceLabel: "copy" === a,
                    type: "copy" === a ? "submit" : "button",
                    onClick: r,
                  }),
                },
                a,
              )
            })),
            (b[46] = B),
            (b[47] = k),
            (b[48] = P),
            (b[49] = m))
          : (m = b[49]),
        b[50] !== A || b[51] !== u || b[52] !== m
          ? ((f = (0, i.jsxs)("div", { className: u, children: [m, A] })),
            (b[50] = A),
            (b[51] = u),
            (b[52] = m),
            (b[53] = f))
          : (f = b[53]),
        f
      )
    }
    function eI({ destination: e, disabled: a, intl: t, onSocialShare: s }) {
      let n, o, r
      switch (e) {
        case "x":
          ;((n = (0, i.jsx)(C.xhz, { "aria-hidden": "true" })),
            (o = (0, i.jsx)(C.WM$, { "aria-hidden": "true" })),
            (r = t.formatMessage({
              id: "chatgptConversations.shareDialog.destination.x.label",
              defaultMessage: "X",
              description:
                "Short destination label below a circular button in a ChatGPT post sharing dialog for a conversation, response, or generated image. Selecting it opens X's post composer with the public post URL.",
            })))
          break
        case "linkedin":
          ;((n = (0, i.jsx)(z.A, { "aria-hidden": "true" })),
            (o = (0, i.jsx)(C.wPr, { "aria-hidden": "true" })),
            (r = t.formatMessage({
              id: "chatgptConversations.shareDialog.destination.linkedin.label",
              defaultMessage: "LinkedIn",
              description:
                "Short destination label below a circular button in a ChatGPT post sharing dialog for a conversation, response, or generated image. Selecting it opens LinkedIn's post composer with the public post URL.",
            })))
          break
        case "reddit":
          ;((n = (0, i.jsx)(C.D3m, { "aria-hidden": "true" })),
            (o = (0, i.jsx)(C.AM2, { "aria-hidden": "true" })),
            (r = t.formatMessage({
              id: "chatgptConversations.shareDialog.destination.reddit.label",
              defaultMessage: "Reddit",
              description:
                "Short destination label below a circular button in a ChatGPT post sharing dialog for a conversation, response, or generated image. Selecting it opens Reddit's submission form with the public post URL. Other destinations are Copy link, X, and LinkedIn.",
            })))
      }
      return { id: e, disabled: a, icon: n, largeIcon: o, label: r, onClick: (a) => s(e, a) }
    }
    function eL(e) {
      let a,
        t,
        n,
        o,
        r,
        d,
        h = (0, s.c)(12)
      h[0] !== e
        ? (({ accountId: a, onClose: t, ...n } = e), (h[0] = e), (h[1] = a), (h[2] = t), (h[3] = n))
        : ((a = h[1]), (t = h[2]), (n = h[3]))
      let g = (0, l.Ul)(u.chatGptAuthenticatedAccountId$) === a
      return (
        h[4] !== g || h[5] !== t
          ? ((o = () => {
              g || t()
            }),
            (r = [g, t]),
            (h[4] = g),
            (h[5] = t),
            (h[6] = o),
            (h[7] = r))
          : ((o = h[6]), (r = h[7])),
        (0, c.useEffect)(o, r),
        h[8] !== g || h[9] !== t || h[10] !== n
          ? ((d = g ? (0, i.jsx)(eP, { ...n, onClose: t }) : null), (h[8] = g), (h[9] = t), (h[10] = n), (h[11] = d))
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
        n[6] !== e || n[7] !== a ? ((t = (0, i.jsx)(eE, { ...e }, a)), (n[6] = e), (n[7] = a), (n[8] = t)) : (t = n[8]),
        t
      )
    }
    function eE(e) {
      let a,
        t,
        g,
        u,
        m,
        C,
        w,
        P,
        W,
        U,
        q,
        V,
        z,
        Y,
        $,
        K,
        Q,
        X,
        Z,
        J,
        ee,
        ea,
        et,
        ei,
        es,
        en,
        eo,
        er,
        el,
        ec,
        ed,
        eh,
        eg,
        ep,
        eu,
        em,
        ef,
        eb,
        eC,
        ew,
        ev,
        ek,
        ey,
        eT,
        e_,
        eS = (0, s.c)(328),
        {
          currentNodeId: ex,
          image: eI,
          imagePromptTemplate: eL,
          imageShareOptions: eP,
          recoveryShareLink: eE,
          publishedShareLink: eG,
          publishedWidget: eU,
          messageIds: eB,
          mobileImageExperience: eq,
          trackMobileImageShareLifecycle: eV,
          onImageShareLinkPrepared: ez,
          onClose: eY,
          onResult: e$,
          previewTurns: eK,
          privacyNotices: eQ,
          prompt: eX,
          receiverShareLink: eZ,
          responseRegion: eJ,
          response: e1,
          serverConversationId: e2,
          shareSessionId: e0,
          source: e3,
          title: e5,
          widget: e6,
        } = e,
        e4 = (0, l.gh)(y.u),
        [e9, e7] = (0, c.useState)(!1),
        e8 = (0, l.Ul)(null)?.data,
        ae = (0, l.Ul)(null),
        aa = (0, l._U)(null, e2),
        at = (0, d.A)(),
        ai = (0, c.useRef)(!1),
        as = (0, c.useRef)(!1)
      ;(eS[0] !== e$
        ? ((a = () => (
            (ai.current = !0),
            () => {
              ;((ai.current = !1),
                queueMicrotask(() => {
                  ai.current || as.current || ((as.current = !0), e$?.(!1))
                }))
            }
          )),
          (t = [e$]),
          (eS[0] = e$),
          (eS[1] = a),
          (eS[2] = t))
        : ((a = eS[1]), (t = eS[2])),
        (0, c.useEffect)(a, t),
        eS[3] !== e$
          ? ((g = function (e) {
              as.current || ((as.current = !0), e$?.(e))
            }),
            (eS[3] = e$),
            (eS[4] = g))
          : (g = eS[4]))
      let an = g
      eS[5] !== an || eS[6] !== eY
        ? ((u = function () {
            ;(an(!1), eY())
          }),
          (eS[5] = an),
          (eS[6] = eY),
          (eS[7] = u))
        : (u = eS[7])
      let ao = u,
        ar = (0, c.useContext)(p.c)
      eS[8] !== eI || eS[9] !== e4 || eS[10] !== e2
        ? ((m = null == eI ? void 0 : (0, R.C)(e4, e2, eI)), (eS[8] = eI), (eS[9] = e4), (eS[10] = e2), (eS[11] = m))
        : (m = eS[11])
      let al = m
      eS[12] !== eL || eS[13] !== al || eS[14] !== eG || eS[15] !== eZ || eS[16] !== eE || eS[17] !== e4.queryClient
        ? ((C = () =>
            eZ ?? eG ?? eE ?? (null == al || null != eL ? null : (e4.queryClient.getQueryData(al.queryKey) ?? null))),
          (eS[12] = eL),
          (eS[13] = al),
          (eS[14] = eG),
          (eS[15] = eZ),
          (eS[16] = eE),
          (eS[17] = e4.queryClient),
          (eS[18] = C))
        : (C = eS[18])
      let [ac, ad] = (0, c.useState)(C),
        [ah] = (0, c.useState)(eN),
        ag = e0 ?? ah,
        [ap, au] = (0, c.useState)("idle"),
        [am, af] = (0, c.useState)(null != eE ? "copy-failed" : null),
        [ab, aC] = (0, c.useState)(!1)
      eS[19] !== e2 ? ((w = ["chatgpt-conversation-share", e2]), (eS[19] = e2), (eS[20] = w)) : (w = eS[20])
      let aw = w,
        av =
          null == eE && null == eZ && null == eG && null == eX && null == eI && null == eB && null == eJ && null == e6
      ;(eS[21] !== ex || eS[22] !== e2
        ? ((P = () => (0, M.MJ)({ conversationId: e2, currentNodeId: ex })), (eS[21] = ex), (eS[22] = e2), (eS[23] = P))
        : (P = eS[23]),
        eS[24] !== aw || eS[25] !== av || eS[26] !== P
          ? ((W = { enabled: av, queryFn: P, queryKey: aw, retry: !1, staleTime: L.D.ONE_MINUTE }),
            (eS[24] = aw),
            (eS[25] = av),
            (eS[26] = P),
            (eS[27] = W))
          : (W = eS[27]))
      let { data: ak, error: ay, isLoading: aT } = (0, r.I)(W)
      eS[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = { enabled: !1, queryFn: eD, queryKey: ["accounts", "check"], staleTime: L.D.ONE_MINUTE }), (eS[28] = U))
        : (U = eS[28])
      let { data: a_ } = (0, r.I)(U),
        aS = null != eI,
        ax = null != eq && aS,
        aA = ax || !0 === eV,
        aI = null != eZ,
        aL = (eI?.additionalImages?.length ?? 0) > 0,
        aP = eI?.item.isAnimated === !0 && !aL
      eS[29] !== eI || eS[30] !== e2 || eS[31] !== ag
        ? ((q = (0, E.Qt)((0, O.q3)(e2), void 0, null != eI && null == eI.previewSrc ? ag : void 0)),
          (eS[29] = eI),
          (eS[30] = e2),
          (eS[31] = ag),
          (eS[32] = q))
        : (q = eS[32])
      let { src: aE, isLoading: aM } = (0, A.vM)(
          null != eI && (aL || null == eI.previewSrc) ? (eI.item.src ?? "") : "",
          q,
        ),
        aj = null != eI && null == eI.previewSrc && null == aE,
        aD = aL ? "image_series" : "single_image",
        aN = e6 ?? eU,
        aO = null != eB || null != eJ || null != aN || eZ?.contentType === "message",
        aG = null != eJ,
        aR = aN?.metadata.widgetType === "visualization",
        aH =
          aN?.metadata.widgetName === "create_interactive_poll" || aN?.metadata.widgetName === "CreateInteractivePoll",
        aF = null != eX || null != eL,
        aW = aS || aO || aF,
        aU = aW || !1,
        aB = "conversation"
      ;(aR
        ? (aB = "widget")
        : null != eL
          ? (aB = "prompt")
          : aP
            ? (aB = "gif")
            : aS
              ? (aB = aL ? "images" : "image")
              : aG
                ? (aB = "response-region")
                : aO
                  ? (aB = "message")
                  : aF && (aB = "prompt"),
        eS[33] !== eQ || eS[34] !== e1
          ? ((V = null == e1 ? eQ : (0, M.XH)(e1)), (eS[33] = eQ), (eS[34] = e1), (eS[35] = V))
          : (V = eS[35]))
      let aq = V,
        aV = aS || ((!aW || aO) && aq?.hasImageReference === !0)
      eS[36] !== eI?.item || eS[37] !== aL || eS[38] !== e5
        ? ((z = (aL ? void 0 : eI?.item.chatGptDisplayTitle) ?? (0, D.L6)(e5)),
          (eS[36] = eI?.item),
          (eS[37] = aL),
          (eS[38] = e5),
          (eS[39] = z))
        : (z = eS[39])
      let az = z,
        aY = !aW && ak?.is_public === !0 && !0 === ak.is_visible,
        a$ = a_?.accounts?.find((e) => e.id === (ar?.accountId ?? a_.account_ordering?.[0])),
        aK = a$?.structure ?? ar?.accountStructureAtLogin,
        aQ = "unknown"
      ;(ac?.isWorkspaceOnly != null
        ? (aQ = ac.isWorkspaceOnly ? "workspace" : "public")
        : null == ak || aS
          ? ("personal" === aK || "workspace" === aK) && (aQ = "workspace" === aK ? "workspace" : "public")
          : (aQ = ak.share_url.includes("/share/e/") ? "workspace" : "public"),
        eS[40] !== al?.queryKey
          ? ((Y = al?.queryKey ?? ["disabled-chatgpt-image-share-query"]), (eS[40] = al?.queryKey), (eS[41] = Y))
          : (Y = eS[41]),
        eS[42] !== al?.queryFn ? (($ = al?.queryFn ?? ej), (eS[42] = al?.queryFn), (eS[43] = $)) : ($ = eS[43]))
      let aX = ax && (0, H.P)() && null == eL && null != al && "public" === aQ && null == ac
      eS[44] !== Y || eS[45] !== $ || eS[46] !== aX
        ? ((K = { queryKey: Y, queryFn: $, enabled: aX, retry: !1, staleTime: 1 / 0 }),
          (eS[44] = Y),
          (eS[45] = $),
          (eS[46] = aX),
          (eS[47] = K))
        : (K = eS[47])
      let aZ = (0, r.I)(K)
      aZ.data?.isWorkspaceOnly != null && (aQ = aZ.data.isWorkspaceOnly ? "workspace" : "public")
      let aJ = ac ?? (null == eL ? (aZ.data ?? null) : null),
        a1 = null == eL ? aJ : null
      ;(eS[48] !== ez || eS[49] !== a1
        ? ((Q = () => {
            null != a1 && ez?.(a1)
          }),
          (X = [ez, a1]),
          (eS[48] = ez),
          (eS[49] = a1),
          (eS[50] = Q),
          (eS[51] = X))
        : ((Q = eS[50]), (X = eS[51])),
        (0, c.useEffect)(Q, X))
      let a2 = aJ?.shareLinkUrl ?? (aY ? ak.share_url : null),
        a0 = !aW && null == aJ && aY && ak.current_node_id !== ex,
        a3 = "workspace" === aQ,
        a5 = "creating" === ap,
        a6 = !aW && aT
      eS[52] !== aJ || eS[53] !== am || eS[54] !== ay || eS[55] !== aZ.error || eS[56] !== av
        ? (null == (Z = am) && av && null == aJ && null != ay && (Z = ay instanceof M.kl ? "blocked" : "create-failed"),
          null == Z && null != aZ.error && (Z = aZ.error instanceof M.kl ? "blocked" : "create-failed"),
          (eS[52] = aJ),
          (eS[53] = am),
          (eS[54] = ay),
          (eS[55] = aZ.error),
          (eS[56] = av),
          (eS[57] = Z))
        : (Z = eS[57])
      let a4 = eW.description,
        a9 = eW.publicLinkAudience
      if (aR) {
        let e
        ;(eS[58] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(h.A, { ...eW.widgetTitle })), (eS[58] = e))
          : (e = eS[58]),
          (J = e))
      } else if (aP) {
        let e
        ;(eS[59] !== eL
          ? ((e =
              null != eL
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
            (eS[59] = eL),
            (eS[60] = e))
          : (e = eS[60]),
          (J = e))
      } else if (null != eL) {
        let e
        ;(eS[61] !== eL.label
          ? ((e =
              "image_with_prompt" === eL.label
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
            (eS[61] = eL.label),
            (eS[62] = e))
          : (e = eS[62]),
          (J = e))
      } else if (aS) {
        let e
        ;(eS[63] !== az || eS[64] !== eP || eS[65] !== aL || eS[66] !== ax
          ? ((e =
              ax || null == az || null != eP
                ? (0, i.jsx)(h.A, { ...(aL ? eW.imagesTitle : eW.imageTitle) })
                : (0, i.jsx)(i.Fragment, { children: az })),
            (eS[63] = az),
            (eS[64] = eP),
            (eS[65] = aL),
            (eS[66] = ax),
            (eS[67] = e))
          : (e = eS[67]),
          (J = e))
      } else if (aH) {
        let e
        ;(eS[68] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(h.A, {
              id: "chatgptConversations.shareDialog.poll.title",
              defaultMessage: "Share poll",
              description:
                "Short heading of the dialog for sharing one interactive poll. The user can create or send a link so other people can vote on the poll.",
            })),
            (eS[68] = e))
          : (e = eS[68]),
          (J = e))
      } else if (aG) {
        let e
        ;(eS[69] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(h.A, {
              id: "chatgptConversations.shareDialog.responseRegionTitle",
              defaultMessage: "Share",
              description:
                "Short heading of the dialog for sharing one selected section of an interactive ChatGPT response.",
            })),
            (eS[69] = e))
          : (e = eS[69]),
          (J = e))
      } else if (aO) {
        let e
        ;(eS[70] !== az
          ? ((e = null == az ? (0, i.jsx)(h.A, { ...eW.messageTitle }) : (0, i.jsx)(i.Fragment, { children: az })),
            (eS[70] = az),
            (eS[71] = e))
          : (e = eS[71]),
          (J = e))
      } else if (aF) {
        let e
        ;(eS[72] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(h.A, { ...eW.promptTitle })), (eS[72] = e))
          : (e = eS[72]),
          (J = e))
      } else {
        if (aU) {
          let e
          ;(eS[73] !== az
            ? ((e = null == az ? void 0 : (0, i.jsx)(i.Fragment, { children: az })), (eS[73] = az), (eS[74] = e))
            : (e = eS[74]),
            (J = e))
        }
        a3
          ? (a4 = eQ?.isProjectConversation ? eW.workspaceProjectDescription : eW.workspaceDescription)
          : ak?.is_anonymous === !1
            ? (a4 = eW.attributedDescription)
            : eQ?.isProjectConversation && (a4 = eW.projectDescription)
      }
      a3 && (a9 = aV ? eW.workspaceImageRightsAudience : eW.workspaceLinkAudience)
      let a7 = "copied" === ap ? eW.copied : eW.copyLink
      ;(a0 ? (a7 = eW.updateLink) : null == a2 && "copied" !== ap && (a7 = eW.createLink),
        eS[75] !== at || eS[76] !== ap
          ? ((ee = "copied" === ap ? at.formatMessage(eW.copied) : at.formatMessage(eW.copyLink)),
            (eS[75] = at),
            (eS[76] = ap),
            (eS[77] = ee))
          : (ee = eS[77]))
      let a8 = ee
      eS[78] !== an || eS[79] !== at || eS[80] !== e4 || eS[81] !== e6
        ? ((ea = function (e, a) {
            let t
            "create-failed" === a && (an(!1), e6?.onError?.(e))
            let i = e instanceof M.kl ? "blocked" : a
            switch (
              ("blocked" !== i &&
                I.v.warning("chatgpt_conversation_share_failed", { safe: { stage: i }, sensitive: { error: e } }),
              i)
            ) {
              case "blocked":
                t = at.formatMessage(eW.shareBlocked)
                break
              case "copy-failed":
                t = at.formatMessage(eW.shareCopyFailed)
                break
              case "create-failed":
                t = at.formatMessage(eW.shareCreateFailed)
            }
            return (
              af(i),
              au("idle"),
              e4
                .get(v.Id)
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
          (eS[78] = an),
          (eS[79] = at),
          (eS[80] = e4),
          (eS[81] = e6),
          (eS[82] = ea))
        : (ea = eS[82])
      let te = ea
      eS[83] !== aN ||
      eS[84] !== aS ||
      eS[85] !== aO ||
      eS[86] !== aF ||
      eS[87] !== aI ||
      eS[88] !== aG ||
      eS[89] !== eZ ||
      eS[90] !== e3
        ? ((et = aI ? "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER" : "CHATGPT_SHARE_FLOW_ACTOR_SHARER"),
          (es = aI
            ? "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_HEADER"
            : (e3 ?? "CHATGPT_SHARE_FLOW_SOURCE_CONVERSATION_MENU")),
          null != eZ
            ? (ei = eZ.attachmentType)
            : null != aN
              ? ((ei = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_WIDGET"),
                (es = "CHATGPT_SHARE_FLOW_SOURCE_WIDGET_INLINE_ACTION"))
              : aS
                ? ((ei = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_IMAGE_SHARE"),
                  (es = e3 ?? "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION"))
                : aG
                  ? ((ei = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_OTHER"),
                    (es = "CHATGPT_SHARE_FLOW_SOURCE_WIDGET_INLINE_ACTION"))
                  : aO
                    ? ((ei = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_MESSAGE_SLICE"),
                      (es = "CHATGPT_SHARE_FLOW_SOURCE_MESSAGE_INLINE_ACTION"))
                    : aF &&
                      ((ei = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_PROMPT"),
                      (es = e3 ?? "CHATGPT_SHARE_FLOW_SOURCE_MESSAGE_INLINE_ACTION")),
          (eS[83] = aN),
          (eS[84] = aS),
          (eS[85] = aO),
          (eS[86] = aF),
          (eS[87] = aI),
          (eS[88] = aG),
          (eS[89] = eZ),
          (eS[90] = e3),
          (eS[91] = et),
          (eS[92] = ei),
          (eS[93] = es))
        : ((et = eS[91]), (ei = eS[92]), (es = eS[93]))
      let ta =
        eZ?.contentType === "message" || aW
          ? "CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE"
          : "CHATGPT_SHARE_FLOW_CONTENT_TYPE_SHARED_CONVERSATION"
      eS[94] !== aJ ||
      eS[95] !== ex ||
      eS[96] !== aY ||
      eS[97] !== ak ||
      eS[98] !== an ||
      eS[99] !== eL ||
      eS[100] !== al ||
      eS[101] !== aW ||
      eS[102] !== a0 ||
      eS[103] !== eB ||
      eS[104] !== ez ||
      eS[105] !== eX ||
      eS[106] !== eJ ||
      eS[107] !== e4.queryClient ||
      eS[108] !== e2 ||
      eS[109] !== aw ||
      eS[110] !== e5 ||
      eS[111] !== e6
        ? ((en = async function (e) {
            let a
            if (null != e6 && (!ai.current || e6.isCurrent?.() === !1))
              throw Error("The selected widget is no longer available")
            if (null != eJ && (!ai.current || eJ.isCurrent?.() === !1))
              throw Error("The selected response region is no longer available")
            let t =
              aJ ??
              (aY ? { currentNodeId: ak.current_node_id, shareLinkId: ak.share_id, shareLinkUrl: ak.share_url } : null)
            if (null == eL && null != t && !a0) return (an(!0), t)
            if (null != eL) a = await eL.createLink(e)
            else if (null != al) ((a = await e4.queryClient.fetchQuery(al)), ez?.(a))
            else if (null != e6) {
              if (((a = await (0, M.fA)(e6.attachment, ex)), !ai.current || e6.isCurrent?.() === !1))
                throw Error("The selected widget changed while sharing")
            } else if (null != eJ) {
              if (
                ((a = await (0, M.IO)({
                  conversationId: eJ.attachment.conversation_id,
                  currentNodeId: ex,
                  messageId: eJ.attachment.message_id,
                  targetId: eJ.attachment.target_id,
                })),
                !ai.current || eJ.isCurrent?.() === !1)
              )
                throw Error("The selected response region changed while sharing")
            } else
              a =
                null != eB
                  ? await e4.queryClient.fetchQuery({
                      queryFn: () => (0, M.sq)({ conversationId: e2, currentNodeId: ex, messageIds: eB }),
                      queryKey: ["chatgpt-message-share", e2, ex],
                      staleTime: 1 / 0,
                    })
                  : null != eX
                    ? await e4.queryClient.fetchQuery({
                        queryFn: () => (0, M.Dr)({ conversationId: e2, messageId: eX.messageId }),
                        queryKey: ["chatgpt-prompt-share", e2, eX.messageId],
                        staleTime: 1 / 0,
                      })
                    : await (0, M.v8)({ conversationId: e2, currentNodeId: ex, existingShareLink: ak, title: e5 })
            return (
              ad(a),
              an(!0),
              null == ak ||
                aW ||
                e4.queryClient.setQueryData(aw, { ...ak, current_node_id: ex, is_public: !0, is_visible: !0 }),
              a
            )
          }),
          (eS[94] = aJ),
          (eS[95] = ex),
          (eS[96] = aY),
          (eS[97] = ak),
          (eS[98] = an),
          (eS[99] = eL),
          (eS[100] = al),
          (eS[101] = aW),
          (eS[102] = a0),
          (eS[103] = eB),
          (eS[104] = ez),
          (eS[105] = eX),
          (eS[106] = eJ),
          (eS[107] = e4.queryClient),
          (eS[108] = e2),
          (eS[109] = aw),
          (eS[110] = e5),
          (eS[111] = e6),
          (eS[112] = en))
        : (en = eS[112])
      let tt = en
      eS[113] !== et ||
      eS[114] !== ei ||
      eS[115] !== ta ||
      eS[116] !== aJ ||
      eS[117] !== aN?.metadata ||
      eS[118] !== tt ||
      eS[119] !== aY ||
      eS[120] !== ak ||
      eS[121] !== eL ||
      eS[122] !== aj ||
      eS[123] !== aI ||
      eS[124] !== a0 ||
      eS[125] !== a5 ||
      eS[126] !== eY ||
      eS[127] !== te ||
      eS[128] !== e4 ||
      eS[129] !== e2 ||
      eS[130] !== a2 ||
      eS[131] !== ag ||
      eS[132] !== es ||
      eS[133] !== aU
        ? ((eo = async function () {
            if (a5 || aj || eL?.actionsDisabled) return
            let e = (0, N.p_)(e4, {
              actor: et,
              attachmentType: ei,
              widgetMetadata: aN?.metadata,
              contentType: ta,
              conversationId: aI ? void 0 : e2,
              shareId: aJ?.shareLinkId ?? (aY ? ak.share_id : void 0),
              shareSessionId: ag,
              source: es,
              usedExistingLink: null != a2 && !a0,
            })
            ;(af(null), au("creating"))
            let a = null != eL || null == a2 || a0 ? "create-failed" : "copy-failed",
              t = aJ
            try {
              let i = tt("copy"),
                s = await i
              ;((t = s), (a = "copy-failed"))
              let n = s.shareLinkUrl
              if (!(await (0, _.y2)(n))) {
                ;(e({ result: "copy-failed", shareId: s.shareLinkId }),
                  te(Error("Failed to copy ChatGPT conversation share link"), "copy-failed"))
                return
              }
              ;(e({ result: "link-copied", shareId: s.shareLinkId }), au("copied"), aU || ((0, T.o)(e4), eY()))
            } catch (s) {
              let i = te(s, a)
              e("create-failed" === i ? { result: i, error: s } : { result: i, shareId: t?.shareLinkId })
            }
          }),
          (eS[113] = et),
          (eS[114] = ei),
          (eS[115] = ta),
          (eS[116] = aJ),
          (eS[117] = aN?.metadata),
          (eS[118] = tt),
          (eS[119] = aY),
          (eS[120] = ak),
          (eS[121] = eL),
          (eS[122] = aj),
          (eS[123] = aI),
          (eS[124] = a0),
          (eS[125] = a5),
          (eS[126] = eY),
          (eS[127] = te),
          (eS[128] = e4),
          (eS[129] = e2),
          (eS[130] = a2),
          (eS[131] = ag),
          (eS[132] = es),
          (eS[133] = aU),
          (eS[134] = eo))
        : (eo = eS[134])
      let ti = eo
      eS[135] !== ei ||
      eS[136] !== ta ||
      eS[137] !== aJ ||
      eS[138] !== e4 ||
      eS[139] !== e2 ||
      eS[140] !== ag ||
      eS[141] !== aA ||
      eS[142] !== es
        ? ((er = function (e) {
            ;(0, k.yy)(e4, n.HX, {
              action: e,
              actor: "CHATGPT_SHARE_FLOW_ACTOR_SHARER",
              attachmentType: ei,
              contentType: ta,
              conversationId: e2,
              ...(aA && null != aJ && !aJ.isWorkspaceOnly ? { shareId: aJ.shareLinkId } : {}),
              shareSessionId: ag,
              source: es,
              sheetType: "CHATGPT_SHARE_FLOW_SHEET_TYPE_CUSTOM",
            })
          }),
          (eS[135] = ei),
          (eS[136] = ta),
          (eS[137] = aJ),
          (eS[138] = e4),
          (eS[139] = e2),
          (eS[140] = ag),
          (eS[141] = aA),
          (eS[142] = es),
          (eS[143] = er))
        : (er = eS[143])
      let ts = er
      eS[144] !== aJ ||
      eS[145] !== Z ||
      eS[146] !== tt ||
      eS[147] !== al ||
      eS[148] !== at ||
      eS[149] !== a5 ||
      eS[150] !== eY ||
      eS[151] !== te ||
      eS[152] !== e4 ||
      eS[153] !== e2 ||
      eS[154] !== aQ ||
      eS[155] !== ag ||
      eS[156] !== es
        ? ((el = async function () {
            if (!a5 && null != al && "public" === aQ && "blocked" !== Z) {
              ;(af(null), au("creating"))
              try {
                let e = aJ ?? (await tt("copy")),
                  a = await (0, H.C)(e4, e, e2, ag, es)
                ;(au("idle"),
                  "shared" === a && eY(),
                  "failed" === a &&
                    e4
                      .get(v.Id)
                      .danger(
                        at.formatMessage({
                          id: "chatgptConversations.mobileImageShare.nativeFailed",
                          defaultMessage: "Could not open sharing. Try again or copy the link",
                          description:
                            "Error in the mobile image share sheet when the device cannot open native link sharing. The user can retry or use Copy link",
                        }),
                        { errorAnalytics: { toastId: "chatgptConversations.mobileImageShare.nativeFailed" } },
                      ))
              } catch (e) {
                te(e, "create-failed")
              }
            }
          }),
          (eS[144] = aJ),
          (eS[145] = Z),
          (eS[146] = tt),
          (eS[147] = al),
          (eS[148] = at),
          (eS[149] = a5),
          (eS[150] = eY),
          (eS[151] = te),
          (eS[152] = e4),
          (eS[153] = e2),
          (eS[154] = aQ),
          (eS[155] = ag),
          (eS[156] = es),
          (eS[157] = el))
        : (el = eS[157])
      let tn = el
      eS[158] !== et ||
      eS[159] !== ei ||
      eS[160] !== ta ||
      eS[161] !== aJ ||
      eS[162] !== az ||
      eS[163] !== aN?.metadata ||
      eS[164] !== tt ||
      eS[165] !== aY ||
      eS[166] !== ak ||
      eS[167] !== eL ||
      eS[168] !== aD ||
      eS[169] !== at ||
      eS[170] !== aS ||
      eS[171] !== aj ||
      eS[172] !== aF ||
      eS[173] !== aI ||
      eS[174] !== a0 ||
      eS[175] !== a5 ||
      eS[176] !== eq?.unsupportedDestinationFallback ||
      eS[177] !== eY ||
      eS[178] !== te ||
      eS[179] !== e4 ||
      eS[180] !== e2 ||
      eS[181] !== aQ ||
      eS[182] !== ap ||
      eS[183] !== ag ||
      eS[184] !== aA ||
      eS[185] !== es ||
      eS[186] !== ax
        ? ((ec = async function (e, a) {
            var t
            let i
            if (a5 || aj || "public" !== aQ || eL?.actionsDisabled) return
            ;(a.preventDefault(),
              aI ||
                aF ||
                ("line" !== (t = e) && "linkedin" !== t && "reddit" !== t && "x" !== t) ||
                (0, N.$D)(e4, e, aS ? aD : void 0))
            let s = aA && aS ? e2 : void 0
            ;(0, N.Mr)(e4, {
              actor: et,
              attachmentType: ei,
              conversationId: s,
              widgetMetadata: aN?.metadata,
              contentType: ta,
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
              shareId: aJ?.shareLinkId ?? (aY && !a0 ? ak.share_id : void 0),
              shareSessionId: ag,
              source: es,
            })
            let n = ax && (0, B.NS)(e)
            if (n && eq?.unsupportedDestinationFallback === "app-store") {
              let t = (0, o.UL)() ? "android" : (0, o.G1)() || (0, o.Y_)() ? "ios" : null,
                i = null == t ? null : (0, B.Sy)(e, t)
              if (null != i)
                return void (0, b.PQ)({
                  event: a,
                  href: i,
                  initiator: "open_in_browser_bridge",
                  openTarget: "external-browser",
                })
            }
            ;(af(null), au("creating"))
            try {
              i = await tt("social")
            } catch (e) {
              ;(e instanceof M.kl ||
                (0, N.mG)(e4, {
                  actor: et,
                  attachmentType: ei,
                  imageShareConversationId: s,
                  widgetMetadata: aN?.metadata,
                  contentType: ta,
                  shareSessionId: ag,
                  source: es,
                }),
                te(e, "create-failed"))
              return
            }
            if (!0 === i.isWorkspaceOnly) return void au(ap)
            if (n) {
              let e = await (0, H.C)(e4, i, e2, ag, es)
              ;(au(ap),
                "shared" === e
                  ? eY()
                  : "failed" === e &&
                    e4
                      .get(v.Id)
                      .danger(
                        at.formatMessage({
                          id: "chatgptConversations.mobileImageShare.nativeFailed",
                          defaultMessage: "Could not open sharing. Try again or copy the link",
                          description:
                            "Error in the mobile image share sheet when the device cannot open native link sharing. The user can retry or use Copy link",
                        }),
                        { errorAnalytics: { toastId: "chatgptConversations.mobileImageShare.nativeFailed" } },
                      ))
              return
            }
            let r = (0, B.lP)({
              destination: e,
              isAppleDevice: (0, o.G1)() || (0, o.Y_)(),
              shareUrl: i.shareLinkUrl,
              title: i.title ?? az,
            })
            null == r
              ? au(ap)
              : ("messages" === e
                  ? ((window.location.href = r), (0, b.x0)({ href: r, modifiedClick: !1 }))
                  : (0, b.PQ)({
                      event: a,
                      href: r,
                      initiator: "open_in_browser_bridge",
                      openTarget: "external-browser",
                    }),
                au(ap))
          }),
          (eS[158] = et),
          (eS[159] = ei),
          (eS[160] = ta),
          (eS[161] = aJ),
          (eS[162] = az),
          (eS[163] = aN?.metadata),
          (eS[164] = tt),
          (eS[165] = aY),
          (eS[166] = ak),
          (eS[167] = eL),
          (eS[168] = aD),
          (eS[169] = at),
          (eS[170] = aS),
          (eS[171] = aj),
          (eS[172] = aF),
          (eS[173] = aI),
          (eS[174] = a0),
          (eS[175] = a5),
          (eS[176] = eq?.unsupportedDestinationFallback),
          (eS[177] = eY),
          (eS[178] = te),
          (eS[179] = e4),
          (eS[180] = e2),
          (eS[181] = aQ),
          (eS[182] = ap),
          (eS[183] = ag),
          (eS[184] = aA),
          (eS[185] = es),
          (eS[186] = ax),
          (eS[187] = ec))
        : (ec = eS[187])
      let to = ec
      eS[188] !== eI ||
      eS[189] !== aD ||
      eS[190] !== at ||
      eS[191] !== ab ||
      eS[192] !== aL ||
      eS[193] !== aj ||
      eS[194] !== ts ||
      eS[195] !== e4 ||
      eS[196] !== e2
        ? ((ed = async function () {
            if (null == eI || ab || aj) return
            ;(0, N.$D)(e4, "download", aD)
            let e = [eI.item, ...(eI.additionalImages ?? [])].filter(eM)
            0 !== e.length &&
              ((0, F.Iw)(e4, {
                image: eI.downloadAnalyticsImage ?? eI.item,
                conversationId: e2,
                entryPoint: "CHATGPT_IMAGE_DOWNLOAD_ENTRY_POINT_CUSTOM_SHARE_SHEET",
                downloadScope: aL ? "CHATGPT_IMAGE_DOWNLOAD_SCOPE_SERIES" : "CHATGPT_IMAGE_DOWNLOAD_SCOPE_SINGLE",
                requestedImageCount: e.length,
                isParagen: eI.downloadIsParagen,
              }),
              aC(!0),
              ts("CHATGPT_SHARE_FLOW_ACTION_DOWNLOAD_SELECTED"),
              await (0, G.F)(e4, {
                images: e,
                intl: at,
                serverConversationId: (0, O.q3)(e2),
                logIndividualDownloads: !1,
              })
                .then((e) => {
                  "downloaded" === e && (0, F.BZ)(e4, e2, eI.item)
                })
                .finally(() => {
                  aC(!1)
                }))
          }),
          (eS[188] = eI),
          (eS[189] = aD),
          (eS[190] = at),
          (eS[191] = ab),
          (eS[192] = aL),
          (eS[193] = aj),
          (eS[194] = ts),
          (eS[195] = e4),
          (eS[196] = e2),
          (eS[197] = ed))
        : (ed = eS[197])
      let tr = ed
      eS[198] !== eI?.additionalImages?.length || eS[199] !== aL
        ? ((eh = aL
            ? (0, i.jsx)(h.A, {
                id: "chatgptConversations.shareDialog.imageSeriesCount",
                defaultMessage: "Sharing {imageCount} images together",
                description:
                  "Subtitle beneath the generated-image share modal title after choosing to share a series. imageCount is the number of images included in the link, always greater than one. This informs the user that all listed images are shared together.",
                values: { imageCount: 1 + (eI?.additionalImages?.length ?? 0) },
              })
            : void 0),
          (eS[198] = eI?.additionalImages?.length),
          (eS[199] = aL),
          (eS[200] = eh))
        : (eh = eS[200])
      let tl = eh,
        tc = tl
      if (!aL && !aU) {
        let e
        ;(eS[201] !== a4 ? ((e = (0, i.jsx)(h.A, { ...a4 })), (eS[201] = a4), (eS[202] = e)) : (e = eS[202]), (tc = e))
      }
      if (null != eL) {
        let e
        ;(eS[203] !== ax
          ? ((e = ax
              ? (0, i.jsx)(h.A, {
                  id: "imagePromptShare.audience",
                  defaultMessage: "Anyone with the link can try this prompt",
                  description: "Audience description when sharing a generated image as a reusable prompt template",
                })
              : void 0),
            (eS[203] = ax),
            (eS[204] = e))
          : (e = eS[204]),
          (tc = e))
      } else if (ax) {
        let e, a, t
        ;(eS[205] !== aQ
          ? ((e =
              "public" === aQ
                ? (0, i.jsx)(h.A, {
                    id: "chatgptConversations.mobileImageShare.publicAudience",
                    defaultMessage: "Anyone with the link can view",
                    description: "Audience disclosure in the mobile generated-image share sheet for a public link",
                  })
                : null),
            (eS[205] = aQ),
            (eS[206] = e))
          : (e = eS[206]),
          eS[207] !== aQ
            ? ((a =
                "public" !== aQ &&
                (0, i.jsx)(h.A, {
                  id: "chatgptConversations.mobileImageShare.workspaceAudience",
                  defaultMessage: "Only workspace members with the link can view",
                  description:
                    "Audience disclosure below Share image in the mobile image share sheet for a workspace account",
                })),
              (eS[207] = aQ),
              (eS[208] = a))
            : (a = eS[208]),
          eS[209] !== e || eS[210] !== a
            ? ((t = (0, i.jsxs)(i.Fragment, { children: [e, a] })), (eS[209] = e), (eS[210] = a), (eS[211] = t))
            : (t = eS[211]),
          (tc = t))
      }
      if (
        (ax ? (eg = "responsiveSheet") : aU && (eg = "share"),
        ax && (ep = eq?.layout === "two-rows" ? "imageSheetTwoRows" : "imageSheet"),
        null != eL)
      ) {
        let e
        if (eS[212] !== eI?.previewSrc || eS[213] !== eL || eS[214] !== a5 || eS[215] !== aE) {
          let a
          ;(eS[217] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = () => {
                ;(af(null), au("idle"))
              }),
              (eS[217] = a))
            : (a = eS[217]),
            (e = eL.preview(a5, eI?.previewSrc ?? aE ?? null, a)),
            (eS[212] = eI?.previewSrc),
            (eS[213] = eL),
            (eS[214] = a5),
            (eS[215] = aE),
            (eS[216] = e))
        } else e = eS[216]
        eu = e
      } else {
        let e
        ;(eS[218] !== aN ||
        eS[219] !== eI ||
        eS[220] !== ep ||
        eS[221] !== at ||
        eS[222] !== aM ||
        eS[223] !== aL ||
        eS[224] !== aR ||
        eS[225] !== eK ||
        eS[226] !== eX ||
        eS[227] !== aE ||
        eS[228] !== e1 ||
        eS[229] !== eJ ||
        eS[230] !== e2 ||
        eS[231] !== ax
          ? ((e =
              null != eI
                ? (0, i.jsx)(x.Y, {
                    ariaLabel: aL ? at.formatMessage(eW.imagesPreview) : eI.alt,
                    variant: "image",
                    classicImagePreviewEligible: !aL && !ax,
                    presentation: ep,
                    children:
                      aL || null == eI.previewSrc
                        ? (0, i.jsx)(eR, { src: aE, isLoading: aM })
                        : (0, i.jsx)("img", {
                            alt: eI.alt,
                            className: ax ? void 0 : "block size-full object-contain",
                            referrerPolicy: "no-referrer",
                            src: eI.previewSrc,
                          }),
                  })
                : (0, i.jsxs)(i.Fragment, {
                    children: [
                      eJ?.preview != null &&
                        (0, i.jsx)(x.Y, {
                          ariaLabel: at.formatMessage({
                            id: "chatgptConversations.shareDialog.responseRegionPreviewLabel",
                            defaultMessage: "Preview of the shared content",
                            description:
                              "Accessible description of the selected interactive-response section shown in the response-region sharing dialog.",
                          }),
                          variant: "response",
                          children: eJ.preview,
                        }),
                      null == eJ &&
                        aN?.preview != null &&
                        aR &&
                        (0, i.jsx)(x.Y, {
                          ariaLabel: at.formatMessage({
                            id: "shareDialog.widget.previewLabel",
                            defaultMessage: "Preview of the shared widget",
                            description:
                              "Accessible description of the non-interactive selected-widget preview in a ChatGPT widget sharing dialog.",
                          }),
                          variant: "response",
                          children: aN.preview,
                        }),
                      null == eJ &&
                        aN?.preview != null &&
                        !aR &&
                        (0, i.jsx)(x.Y, { variant: "response", children: aN.preview }),
                      null == eJ &&
                        null == aN &&
                        (0, i.jsx)(j.M, { prompt: eX, response: e1, serverConversationId: e2, turns: eK }),
                    ],
                  })),
            (eS[218] = aN),
            (eS[219] = eI),
            (eS[220] = ep),
            (eS[221] = at),
            (eS[222] = aM),
            (eS[223] = aL),
            (eS[224] = aR),
            (eS[225] = eK),
            (eS[226] = eX),
            (eS[227] = aE),
            (eS[228] = e1),
            (eS[229] = eJ),
            (eS[230] = e2),
            (eS[231] = ax),
            (eS[232] = e))
          : (e = eS[232]),
          (eu = e))
      }
      if (ax) {
        let e, a, t
        ;(eS[233] !== eL || eS[234] !== eu
          ? ((e = null == eL ? eu : (0, i.jsx)("div", { className: "px-6", children: eu })),
            (eS[233] = eL),
            (eS[234] = eu),
            (eS[235] = e))
          : (e = eS[235]),
          eS[236] !== tl
            ? ((a =
                null != tl && (0, i.jsx)("p", { className: "mt-3 text-center text-sm text-secondary", children: tl })),
              (eS[236] = tl),
              (eS[237] = a))
            : (a = eS[237]),
          eS[238] !== e || eS[239] !== a
            ? ((t = (0, i.jsxs)(i.Fragment, { children: [e, a] })), (eS[238] = e), (eS[239] = a), (eS[240] = t))
            : (t = eS[240]),
          (eu = t))
      }
      ;(eS[241] !== a9 || eS[242] !== aU
        ? ((em = aU ? void 0 : (0, i.jsx)(h.A, { ...a9 })), (eS[241] = a9), (eS[242] = aU), (eS[243] = em))
        : (em = eS[243]),
        eS[244] !== a7 ? ((ef = (0, i.jsx)(h.A, { ...a7 })), (eS[244] = a7), (eS[245] = ef)) : (ef = eS[245]))
      let td = eL?.actionsDisabled || a6 || aj || "blocked" === Z,
        th = a5 || a6 || e9,
        tg = !aU && a5
      eS[246] !== ts || eS[247] !== aA || eS[248] !== aU
        ? ((eb = aU
            ? (e) => {
                ;(aA && ts("CHATGPT_SHARE_FLOW_ACTION_SHEET_PRESENTED"),
                  e.preventDefault(),
                  e.currentTarget instanceof HTMLElement && e.currentTarget.focus())
              }
            : void 0),
          (eS[246] = ts),
          (eS[247] = aA),
          (eS[248] = aU),
          (eS[249] = eb))
        : (eb = eS[249])
      let tp = ax ? "imageSheet" : void 0,
        tu = ax && eq?.layout === "two-rows"
      ;(eS[250] !== aa ||
      eS[251] !== e8 ||
      eS[252] !== ae ||
      eS[253] !== aJ ||
      eS[254] !== ex ||
      eS[255] !== Z ||
      eS[256] !== tr ||
      eS[257] !== tn ||
      eS[258] !== to ||
      eS[259] !== eI ||
      eS[260] !== eL ||
      eS[261] !== aD ||
      eS[262] !== ab ||
      eS[263] !== a6 ||
      eS[264] !== aS ||
      eS[265] !== aj ||
      eS[266] !== e9 ||
      eS[267] !== aW ||
      eS[268] !== aF ||
      eS[269] !== aI ||
      eS[270] !== a5 ||
      eS[271] !== eB ||
      eS[272] !== eq ||
      eS[273] !== eY ||
      eS[274] !== eX ||
      eS[275] !== eZ ||
      eS[276] !== a8 ||
      eS[277] !== aE ||
      eS[278] !== e4 ||
      eS[279] !== e2 ||
      eS[280] !== aQ ||
      eS[281] !== ax ||
      eS[282] !== aU ||
      eS[283] !== e6
        ? ((eC = aU
            ? (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(eA, {
                  mobileImageActions:
                    ax && null != eq
                      ? {
                          experience: eq,
                          canNativeShare: "public" === aQ && null != aJ && (0, H.P)(aJ?.shareLinkUrl),
                          onNativeShare: () => {
                            tn()
                          },
                        }
                      : void 0,
                  copyLabel: a8,
                  copyDisabled: eL?.actionsDisabled || a6 || a5 || aj || "blocked" === Z,
                  isBusy: a5 || a6 || e9,
                  isDownloading: ab,
                  socialDestinationsDisabled:
                    eL?.actionsDisabled || a6 || a5 || aj || "public" !== aQ || "blocked" === Z,
                  showSocialDestinations: "public" === aQ,
                  additionalActions: void 0,
                  onDownload:
                    null != eL || null == eI || aj
                      ? void 0
                      : () => {
                          tr()
                        },
                  onCopy: () => {
                    aI || aF || (0, N.$D)(e4, "copy", aS ? aD : void 0)
                  },
                  onSocialShare: (e, a) => {
                    to(e, a)
                  },
                }),
              })
            : void 0),
          (eS[250] = aa),
          (eS[251] = e8),
          (eS[252] = ae),
          (eS[253] = aJ),
          (eS[254] = ex),
          (eS[255] = Z),
          (eS[256] = tr),
          (eS[257] = tn),
          (eS[258] = to),
          (eS[259] = eI),
          (eS[260] = eL),
          (eS[261] = aD),
          (eS[262] = ab),
          (eS[263] = a6),
          (eS[264] = aS),
          (eS[265] = aj),
          (eS[266] = e9),
          (eS[267] = aW),
          (eS[268] = aF),
          (eS[269] = aI),
          (eS[270] = a5),
          (eS[271] = eB),
          (eS[272] = eq),
          (eS[273] = eY),
          (eS[274] = eX),
          (eS[275] = eZ),
          (eS[276] = a8),
          (eS[277] = aE),
          (eS[278] = e4),
          (eS[279] = e2),
          (eS[280] = aQ),
          (eS[281] = ax),
          (eS[282] = aU),
          (eS[283] = e6),
          (eS[284] = eC))
        : (eC = eS[284]),
        eS[285] !== eP ||
        eS[286] !== aH ||
        eS[287] !== a5 ||
        eS[288] !== aB ||
        eS[289] !== aQ ||
        eS[290] !== aV ||
        eS[291] !== ax ||
        eS[292] !== aU
          ? ((ew = aU
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    null != eP &&
                      (ax
                        ? (0, i.jsx)("div", { className: "px-6", children: eP(a5) })
                        : (0, i.jsx)(f.OO, { className: "pt-5", children: eP(a5) })),
                    !ax && (0, i.jsx)(eO, { audience: aQ, contentType: aB, isPoll: aH, showImageRightsNotice: aV }),
                  ],
                })
              : void 0),
            (eS[285] = eP),
            (eS[286] = aH),
            (eS[287] = a5),
            (eS[288] = aB),
            (eS[289] = aQ),
            (eS[290] = aV),
            (eS[291] = ax),
            (eS[292] = aU),
            (eS[293] = ew))
          : (ew = eS[293]),
        eS[294] !== Z || eS[295] !== eL || eS[296] !== a2
          ? ((ev =
              null == Z
                ? void 0
                : {
                    content: (0, i.jsx)(eF, { error: Z }),
                    copyUrl: "copy-failed" === Z ? a2 : void 0,
                    preventsSharing: "blocked" === Z && null == eL,
                  }),
            (eS[294] = Z),
            (eS[295] = eL),
            (eS[296] = a2),
            (eS[297] = ev))
          : (ev = eS[297]))
      let tm = aV && !a3 && !aS,
        tf = !aW || aO
      return (
        eS[298] !== aq || eS[299] !== tm || eS[300] !== tf
          ? ((ek = (0, i.jsx)(eH, { showImageRightsNotice: tm, showContentNotices: tf, privacyNotices: aq })),
            (eS[298] = aq),
            (eS[299] = tm),
            (eS[300] = tf),
            (eS[301] = ek))
          : (ek = eS[301]),
        eS[302] !== ao || eS[303] !== ts || eS[304] !== aA
          ? ((ey = () => {
              ;(aA && ts("CHATGPT_SHARE_FLOW_ACTION_DISMISSED"), ao())
            }),
            (eS[302] = ao),
            (eS[303] = ts),
            (eS[304] = aA),
            (eS[305] = ey))
          : (ey = eS[305]),
        eS[306] !== ti
          ? ((eT = () => {
              ti()
            }),
            (eS[306] = ti),
            (eS[307] = eT))
          : (eT = eS[307]),
        eS[308] !== eg ||
        eS[309] !== J ||
        eS[310] !== az ||
        eS[311] !== eu ||
        eS[312] !== tc ||
        eS[313] !== em ||
        eS[314] !== ef ||
        eS[315] !== td ||
        eS[316] !== th ||
        eS[317] !== tg ||
        eS[318] !== eb ||
        eS[319] !== tp ||
        eS[320] !== tu ||
        eS[321] !== eC ||
        eS[322] !== ew ||
        eS[323] !== ev ||
        eS[324] !== ek ||
        eS[325] !== ey ||
        eS[326] !== eT
          ? ((e_ = (0, i.jsx)(S.w, {
              threadTitle: az,
              title: J,
              subtitle: tc,
              audience: em,
              actionLabel: ef,
              actionDisabled: td,
              isBusy: th,
              isDismissalDisabled: tg,
              onOpenAutoFocus: eb,
              size: eg,
              presentation: tp,
              compactImageSheetFooter: tu,
              footer: eC,
              preview: eu,
              info: ew,
              error: ev,
              notices: ek,
              onClose: ey,
              onSubmit: eT,
            })),
            (eS[308] = eg),
            (eS[309] = J),
            (eS[310] = az),
            (eS[311] = eu),
            (eS[312] = tc),
            (eS[313] = em),
            (eS[314] = ef),
            (eS[315] = td),
            (eS[316] = th),
            (eS[317] = tg),
            (eS[318] = eb),
            (eS[319] = tp),
            (eS[320] = tu),
            (eS[321] = eC),
            (eS[322] = ew),
            (eS[323] = ev),
            (eS[324] = ek),
            (eS[325] = ey),
            (eS[326] = eT),
            (eS[327] = e_))
          : (e_ = eS[327]),
        e_
      )
    }
    function eM(e) {
      return null != e.src && "completed" === e.status && !e.isPreview
    }
    async function ej() {
      throw Error("Image share is unavailable")
    }
    function eD() {
      return P.CodexRequest.safeGet("/wham/accounts/check")
    }
    function eN() {
      return crypto.randomUUID()
    }
    function eO(e) {
      let a,
        t,
        n,
        o,
        r,
        l,
        c = (0, s.c)(52),
        { audience: d, contentType: g, isPoll: p, showImageRightsNotice: u } = e,
        m = "workspace" === d ? C.PL4 : C.cfl
      if ("workspace" === d) {
        let e
        if (
          (c[0] !== g || c[1] !== u
            ? ((e = (0, i.jsxs)(i.Fragment, {
                children: [
                  null,
                  (0, i.jsx)(i.Fragment, {
                    children: u
                      ? (0, i.jsx)(h.A, { ...eW.workspaceImageRightsAudience, values: { contentType: g } })
                      : (0, i.jsx)(h.A, { ...eW.workspaceLinksVisible }),
                  }),
                ],
              })),
              (c[0] = g),
              (c[1] = u),
              (c[2] = e))
            : (e = c[2]),
          (t = e),
          "widget" === g)
        ) {
          let e
          ;(c[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(h.A, { ...eW.shareLinkToWidget })), (c[3] = e))
            : (e = c[3]),
            (a = e))
        } else if ("images" === g) {
          let e
          ;(c[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(h.A, { ...eW.shareLinkToImages })), (c[4] = e))
            : (e = c[4]),
            (a = e))
        } else if ("gif" === g) {
          let e
          ;(c[5] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(h.A, { ...eW.shareLinkToGif })), (c[5] = e))
            : (e = c[5]),
            (a = e))
        } else if ("image" === g) {
          let e
          ;(c[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(h.A, { ...eW.shareLinkToImage })), (c[6] = e))
            : (e = c[6]),
            (a = e))
        } else if ("response-region" === g) {
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
        } else if ("message" === g) {
          let e
          ;(c[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(h.A, { ...eW.shareLinkToMessage })), (c[8] = e))
            : (e = c[8]),
            (a = e))
        } else if ("prompt" === g) {
          let e
          ;(c[9] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(h.A, { ...eW.shareLinkToPrompt })), (c[9] = e))
            : (e = c[9]),
            (a = e))
        } else {
          let e
          ;(c[10] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(h.A, { ...eW.shareLinkToConversation })), (c[10] = e))
            : (e = c[10]),
            (a = e))
        }
      } else if ("unknown" === d) {
        if ("images" === g) {
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
        } else if ("gif" === g) {
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
        } else if ("image" === g) {
          let e
          ;(c[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(h.A, { ...eW.imageLicenseDisclaimer })), (c[13] = e))
            : (e = c[13]),
            (t = e))
        }
        if ("widget" === g) {
          let e
          ;(c[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(h.A, { ...eW.shareLinkToWidget })), (c[14] = e))
            : (e = c[14]),
            (a = e))
        } else if ("images" === g) {
          let e
          ;(c[15] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(h.A, { ...eW.shareLinkToImages })), (c[15] = e))
            : (e = c[15]),
            (a = e))
        } else if ("gif" === g) {
          let e
          ;(c[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(h.A, { ...eW.shareLinkToGif })), (c[16] = e))
            : (e = c[16]),
            (a = e))
        } else if ("image" === g) {
          let e
          ;(c[17] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(h.A, { ...eW.shareLinkToImage })), (c[17] = e))
            : (e = c[17]),
            (a = e))
        } else if ("response-region" === g) {
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
        } else if ("message" === g) {
          let e
          ;(c[19] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(h.A, { ...eW.shareLinkToMessage })), (c[19] = e))
            : (e = c[19]),
            (a = e))
        } else if ("prompt" === g) {
          let e
          ;(c[20] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(h.A, { ...eW.shareLinkToPrompt })), (c[20] = e))
            : (e = c[20]),
            (a = e))
        } else {
          let e
          ;(c[21] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(h.A, { ...eW.shareLinkToConversation })), (c[21] = e))
            : (e = c[21]),
            (a = e))
        }
      } else if ("widget" === g) {
        let e, s
        ;(c[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(h.A, { ...eW.sharePublicLinkToWidget })), (c[22] = e))
          : (e = c[22]),
          (a = e),
          c[23] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, i.jsxs)(i.Fragment, {
                children: [
                  null,
                  (0, i.jsx)(i.Fragment, { children: (0, i.jsx)(h.A, { ...eW.widgetPublicLinkAudience }) }),
                ],
              })),
              (c[23] = s))
            : (s = c[23]),
          (t = s))
      } else if ("images" === g) {
        let e, s
        ;(c[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(h.A, { ...eW.sharePublicLinkToImages })), (c[24] = e))
          : (e = c[24]),
          (a = e),
          c[25] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, i.jsxs)(i.Fragment, {
                children: [
                  null,
                  (0, i.jsx)(i.Fragment, { children: (0, i.jsx)(h.A, { ...eW.imagesPublicLinkAudience }) }),
                ],
              })),
              (c[25] = s))
            : (s = c[25]),
          (t = s))
      } else if ("gif" === g) {
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
                values: { learnMore: eG },
              })),
              (c[27] = s))
            : (s = c[27]),
          (t = s))
      } else if ("image" === g) {
        let e, s
        ;(c[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(h.A, { ...eW.sharePublicLinkToImage })), (c[28] = e))
          : (e = c[28]),
          (a = e),
          c[29] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, i.jsxs)(i.Fragment, {
                children: [
                  null,
                  (0, i.jsx)(i.Fragment, { children: (0, i.jsx)(h.A, { ...eW.imagePublicLinkAudience }) }),
                ],
              })),
              (c[29] = s))
            : (s = c[29]),
          (t = s))
      } else if ("response-region" === g) {
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
      } else if ("message" === g) {
        let e, s
        ;(c[32] !== p
          ? ((e = p
              ? (0, i.jsx)(h.A, {
                  id: "chatgptConversations.shareDialog.poll.publicLinkTitle",
                  defaultMessage: "Share a public link to this poll",
                  description:
                    "Heading below the poll preview in the public sharing dialog. Tells the person sharing that the link opens this interactive voting poll. Workspace-restricted links use a separate disclosure.",
                })
              : (0, i.jsx)(h.A, { ...eW.sharePublicLinkToMessage })),
            (c[32] = p),
            (c[33] = e))
          : (e = c[33]),
          (a = e),
          c[34] !== p
            ? ((s = (0, i.jsxs)(i.Fragment, {
                children: [
                  null,
                  (0, i.jsx)(i.Fragment, {
                    children: p
                      ? (0, i.jsx)(h.A, {
                          id: "chatgptConversations.shareDialog.poll.publicAudience",
                          defaultMessage: "Anyone with this link can access and vote on this poll.",
                          description:
                            "Explanation below a public poll link preview in the desktop or extension sharing dialog. Tells the person sharing that link recipients can open the poll and vote.",
                        })
                      : (0, i.jsx)(h.A, { ...eW.messagePublicLinkAudience }),
                  }),
                ],
              })),
              (c[34] = p),
              (c[35] = s))
            : (s = c[35]),
          (t = s))
      } else if ("prompt" === g) {
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
          ? ((e = (0, i.jsx)(h.A, { ...eW.sharePublicLinkToConversation })), (c[38] = e))
          : (e = c[38]),
          (a = e),
          c[39] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, i.jsx)(W, { includeConversationAudience: !0 })), (c[39] = s))
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
          ? ((o = (0, i.jsxs)("div", {
              className: "flex items-center gap-1 text-xs leading-4 font-bold text-default",
              children: [n, a],
            })),
            (c[43] = n),
            (c[44] = a),
            (c[45] = o))
          : (o = c[45]),
        c[46] !== t
          ? ((r =
              null == t
                ? null
                : (0, i.jsx)("div", {
                    className: "mt-1.5 text-xs leading-4 text-codex-description browser:text-secondary",
                    children: t,
                  })),
            (c[46] = t),
            (c[47] = r))
          : (r = c[47]))
      let b = null
      return (
        c[48] !== o || c[49] !== r || c[50] !== b
          ? ((l = (0, i.jsx)(f.OO, {
              spacing: "large",
              children: (0, i.jsxs)("div", { className: "w-full text-start select-none", children: [o, r, b] }),
            })),
            (c[48] = o),
            (c[49] = r),
            (c[50] = b),
            (c[51] = l))
          : (l = c[51]),
        l
      )
    }
    function eG(e) {
      return (0, i.jsx)(U, { children: e })
    }
    function eR(e) {
      let a,
        t = (0, s.c)(4),
        { src: n, isLoading: o } = e
      if (null != n) {
        let e
        return (
          t[0] !== n
            ? ((e = (0, i.jsx)("img", {
                alt: "",
                className: "block size-full object-contain",
                referrerPolicy: "no-referrer",
                src: n,
              })),
              (t[0] = n),
              (t[1] = e))
            : (e = t[1]),
          e
        )
      }
      return (
        t[2] !== o
          ? ((a = (0, i.jsx)("div", {
              className: "flex h-full items-center justify-center gap-2 text-sm text-secondary",
              children: o ? (0, i.jsx)(w.y, { className: "icon-sm" }) : (0, i.jsx)(h.A, { ...eW.imageUnavailable }),
            })),
            (t[2] = o),
            (t[3] = a))
          : (a = t[3]),
        a
      )
    }
    function eH(e) {
      let a,
        t,
        n,
        o,
        r,
        l = (0, s.c)(16),
        { showImageRightsNotice: c, showContentNotices: d, privacyNotices: g } = e
      return (
        l[0] !== g?.hasUnsupportedCodeInterpreterContent || l[1] !== d
          ? ((a =
              d && g?.hasUnsupportedCodeInterpreterContent
                ? (0, i.jsx)(f.OO, {
                    children: (0, i.jsx)(m.l, {
                      content: (0, i.jsx)(h.A, { ...eW.filesNotShared }),
                      variant: "privacyNotice",
                    }),
                  })
                : null),
            (l[0] = g?.hasUnsupportedCodeInterpreterContent),
            (l[1] = d),
            (l[2] = a))
          : (a = l[2]),
        l[3] !== g?.hasPersonalizedSources || l[4] !== d
          ? ((t =
              d && g?.hasPersonalizedSources
                ? (0, i.jsx)(f.OO, {
                    children: (0, i.jsx)(m.l, {
                      content: (0, i.jsx)(h.A, { ...eW.personalizedSourcesPrivate }),
                      variant: "privacyNotice",
                    }),
                  })
                : null),
            (l[3] = g?.hasPersonalizedSources),
            (l[4] = d),
            (l[5] = t))
          : (t = l[5]),
        l[6] !== g?.hasScreenshotReference || l[7] !== d
          ? ((n =
              d && g?.hasScreenshotReference
                ? (0, i.jsx)(f.OO, {
                    children: (0, i.jsx)(m.l, {
                      content: (0, i.jsx)(h.A, { ...eW.screenshotDisclaimer }),
                      variant: "privacyNotice",
                    }),
                  })
                : null),
            (l[6] = g?.hasScreenshotReference),
            (l[7] = d),
            (l[8] = n))
          : (n = l[8]),
        l[9] !== c
          ? ((o = c
              ? (0, i.jsx)(f.OO, {
                  children: (0, i.jsx)("p", {
                    className: "text-sm text-secondary select-none",
                    children: (0, i.jsx)(h.A, { ...eW.imageLicenseDisclaimer }),
                  }),
                })
              : null),
            (l[9] = c),
            (l[10] = o))
          : (o = l[10]),
        l[11] !== a || l[12] !== t || l[13] !== n || l[14] !== o
          ? ((r = (0, i.jsxs)(i.Fragment, { children: [a, t, n, o] })),
            (l[11] = a),
            (l[12] = t),
            (l[13] = n),
            (l[14] = o),
            (l[15] = r))
          : (r = l[15]),
        r
      )
    }
    function eF(e) {
      let a = (0, s.c)(3),
        { error: t } = e
      switch (t) {
        case "blocked": {
          let e
          return (
            a[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(h.A, { ...eW.shareBlocked })), (a[0] = e))
              : (e = a[0]),
            e
          )
        }
        case "copy-failed": {
          let e
          return (
            a[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(h.A, { ...eW.shareCopyFailed })), (a[1] = e))
              : (e = a[1]),
            e
          )
        }
        case "create-failed": {
          let e
          return (
            a[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(h.A, { ...eW.shareCreateFailed })), (a[2] = e))
              : (e = a[2]),
            e
          )
        }
      }
    }
    let eW = (0, g.YK)({
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
  fwwN(e, a, t) {
    var i = t("SGsN"),
      s = t("xygx"),
      n = t("ddzD"),
      o = t("urzV"),
      r = t("taWv"),
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
            logIndividualDownloads: g = !0,
          },
        ) {
          let p = 0
          for (let [u, m] of a.entries()) {
            if (null == m.src || "completed" !== m.status || m.isPreview) continue
            null != d && h && (0, l.HQ)(e, d, m, "download", "paragen")
            let f = t?.get(m.id) ?? m.src
            null != d &&
              (f = await (0, s.C0)({
                conversationId: null,
                absoluteImageFilePath: null,
                hostId: "local",
                imageAssetResolver: (0, r.Qt)(d),
                queryClient: e.queryClient,
                src: f,
              }))
            let b = (0, n.R)(m).downloadExtension ?? (0, o.TP)(f ?? m.src) ?? "png",
              C = (0, o.lO)(c, b, { title: m.chatGptDisplayTitle, gifSpeed: m.gifPlayback?.speed }),
              w = !1
            if (
              null != f &&
              (await (0, o.er)({
                downloadSrc: f,
                onDownloaded: () => {
                  ;((w = !0), null != d && !h && g && (0, l.HQ)(e, d, m, "download"))
                },
                suggestedFilename: a.length > 1 ? C.replace(/\.[^.]+$/, `-${u + 1}.${b}`) : C,
              }))
            ) {
              if (!w) return "cancelled"
              p++
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
          return p > 0 ? "downloaded" : "empty"
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
              let o = await (0, n.yC)({ additionalImages: t.additionalImages, conversationId: a, image: t.item })
              return (t.isDirectLightboxShare && (0, s.yy)(e, i.N3, {}), o)
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
        C: async function (e, a, t, o, r = "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION") {
          let l = { url: a.shareLinkUrl }
          if (a.isWorkspaceOnly || !n(l.url)) return "failed"
          let c = {
            actor: "CHATGPT_SHARE_FLOW_ACTOR_SHARER",
            attachmentType: "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_IMAGE_SHARE",
            contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE",
            source: r,
            sheetType: "CHATGPT_SHARE_FLOW_SHEET_TYPE_SYSTEM",
            conversationId: t,
            shareSessionId: o,
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
      s = { kind: "custom", layout: "one-row", unsupportedDestinationFallback: "native-share" },
      n = { kind: "custom", layout: "one-row", unsupportedDestinationFallback: "app-store" },
      o = { kind: "custom", layout: "two-rows", unsupportedDestinationFallback: "native-share" },
      r = { kind: "custom", layout: "two-rows", unsupportedDestinationFallback: "app-store" },
      l = ["whatsapp", "messages", "instagram-stories", "facebook-messenger", "x", "reddit"],
      c = {
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
      d = {
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
          return null != d[e]
        },
        RU: function ({ canUseNativeShare: e, experience: a, isMobileBrowser: t, isPersonalAccount: i }) {
          if (t) return "custom" === a.kind ? a : e && i ? s : void 0
        },
        Rt: "2001123255",
        Sy: function (e, a) {
          return d[e]?.[a] ?? null
        },
        Tg: "mweb_image_share_sheet_variant",
        aj: function (e) {
          switch (e) {
            case "custom_one_row_native_fallback":
            case "new_custom":
              return s
            case "custom_one_row_app_store_redirect":
              return n
            case "custom_two_rows_native_fallback":
              return o
            case "custom_two_rows_app_store_redirect":
              return r
            default:
              return i
          }
        },
        i2: function ({ country: e }) {
          let a = e?.trim().toUpperCase()
          return [...((null == a ? void 0 : c[a]) ?? l)]
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
  Nt4a(e, a, t) {
    t.d(a, { I: () => p })
    var i = t("ABep"),
      s = t("QosV")
    let n = (0, t("nkTT").a)({
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
    var o = t("on57"),
      r = t("Wf1j"),
      l = t("ygO2"),
      c = t("JNtf"),
      d = t("mUDD"),
      h = t("HOLv"),
      g = t("CsDP")
    function p(e) {
      let a,
        t,
        p,
        u,
        m,
        f,
        b,
        C,
        w = (0, s.c)(44),
        {
          children: v,
          headerContent: k,
          headerActions: y,
          footer: T,
          collapseEmptyContent: _,
          compactImageSheetFooter: S,
          isDismissalDisabled: x,
          subtitle: A,
          title: I,
          onClose: L,
          onOpenAutoFocus: P,
          onCloseAutoFocus: E,
          onPortalContainerChange: M,
          onSubmit: j,
          size: D,
          variant: N,
          presentation: O,
        } = e,
        G = void 0 !== _ && _,
        R = void 0 !== S && S,
        H = void 0 !== x && x,
        F = (0, r.A)(),
        W = "imageSheet" === O
      ;(w[0] !== R || w[1] !== y || w[2] !== F || w[3] !== H || w[4] !== W || w[5] !== L || w[6] !== A || w[7] !== I
        ? ((a = W
            ? (0, i.jsxs)("div", {
                className: (0, o.A)("shrink-0", "imageSheetHeader-vPz2gu", R && "imageSheetTwoRowsHeader-udlzI8"),
                children: [
                  (0, i.jsx)(c.L3, { className: "imageSheetTitle-iMmEfF", children: I }),
                  null != A && (0, i.jsx)(c.rr, { className: "imageSheetSubtitle-E3o3_v", children: A }),
                  !H &&
                    (0, i.jsx)(l.$, {
                      unstyled: !0,
                      className: (0, o.A)("imageSheetClose-msZEpI", R && "imageSheetTwoRowsClose-qwbpXz"),
                      "aria-label": F.formatMessage({
                        id: "codex.dialog.closeButton",
                        defaultMessage: "Close dialog",
                        description: "Accessible label for the button that closes a dialog",
                      }),
                      onClick: (e) => {
                        ;(e.stopPropagation(), L())
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
          (w[2] = F),
          (w[3] = H),
          (w[4] = W),
          (w[5] = L),
          (w[6] = A),
          (w[7] = I),
          (w[8] = a))
        : (a = w[8]),
        w[9] !== k || w[10] !== a
          ? ((t = (0, i.jsxs)(i.Fragment, { children: [a, k] })), (w[9] = k), (w[10] = a), (w[11] = t))
          : (t = w[11]))
      let U = t
      ;(w[12] !== A ? ((p = null == A ? { "aria-describedby": void 0 } : {}), (w[12] = A), (w[13] = p)) : (p = w[13]),
        w[14] !== P || w[15] !== M
          ? ((u = (e) => {
              ;(e.currentTarget instanceof HTMLElement && M?.(e.currentTarget), P?.(e))
            }),
            (w[14] = P),
            (w[15] = M),
            (w[16] = u))
          : (u = w[16]),
        w[17] !== E || w[18] !== p || w[19] !== u
          ? ((m = { ...p, shouldStopPointerDownPropagation: !1, onCloseAutoFocus: E, onOpenAutoFocus: u }),
            (w[17] = E),
            (w[18] = p),
            (w[19] = u),
            (w[20] = m))
          : (m = w[20]))
      let B = !H && !W,
        q = N ?? "opaque",
        V = W ? "imageSheetSurface-pAxv7i" : void 0,
        z = W ? "imageSheetOverlay-Da_SGi" : void 0
      return (
        w[21] !== H || w[22] !== L
          ? ((f = (e) => {
              e || H || L()
            }),
            (w[21] = H),
            (w[22] = L),
            (w[23] = f))
          : (f = w[23]),
        w[24] !== v ||
        w[25] !== G ||
        w[26] !== R ||
        w[27] !== T ||
        w[28] !== U ||
        w[29] !== H ||
        w[30] !== W ||
        w[31] !== j
          ? ((b = W
              ? (0, i.jsxs)(d.R4, {
                  as: null == j ? "div" : "form",
                  variant: "chatgpt",
                  className: (0, o.A)("imageSheetBody-YQy31R", "min-h-0", R && "imageSheetTwoRowsBody-mMGp9m"),
                  onSubmit:
                    null == j
                      ? void 0
                      : (e) => {
                          ;(e.preventDefault(), e.stopPropagation(), H || j())
                        },
                  children: [
                    (0, i.jsxs)("div", { className: "flex min-h-0 flex-col", children: [U, v] }),
                    (0, i.jsx)("div", { className: (0, o.A)("shrink-0", R ? "mt-2" : "mt-12"), children: T }),
                  ],
                })
              : (0, i.jsx)(g.c, {
                  collapseEmptyContent: G,
                  header: U,
                  footer: T,
                  onSubmit:
                    null == j
                      ? void 0
                      : (e) => {
                          ;(e.preventDefault(), e.stopPropagation(), H || j())
                        },
                  children: v,
                })),
            (w[24] = v),
            (w[25] = G),
            (w[26] = R),
            (w[27] = T),
            (w[28] = U),
            (w[29] = H),
            (w[30] = W),
            (w[31] = j),
            (w[32] = b))
          : (b = w[32]),
        w[33] !== H ||
        w[34] !== W ||
        w[35] !== D ||
        w[36] !== q ||
        w[37] !== V ||
        w[38] !== z ||
        w[39] !== f ||
        w[40] !== b ||
        w[41] !== m ||
        w[42] !== B
          ? ((C = (0, i.jsx)(c.lG, {
              open: !0,
              contentOverflow: "visible",
              contentProps: m,
              shouldIgnoreClickOutside: H,
              showDialogClose: B,
              size: D,
              variant: q,
              unstyledContent: W,
              contentClassName: V,
              overlayClassName: z,
              onOpenChange: f,
              children: b,
            })),
            (w[33] = H),
            (w[34] = W),
            (w[35] = D),
            (w[36] = q),
            (w[37] = V),
            (w[38] = z),
            (w[39] = f),
            (w[40] = b),
            (w[41] = m),
            (w[42] = B),
            (w[43] = C))
          : (C = w[43]),
        C
      )
    }
  },
  TnP0(e, a, t) {
    var i = t("ABep"),
      s = t("QosV"),
      n = t("Wf1j"),
      o = t("oyxz"),
      r = t("ygO2"),
      l = t("mUDD"),
      c = t("GO7r"),
      d = t("evwP"),
      h = t("zLIa"),
      g = t("Nt4a")
    t.d(
      a,
      {},
      {
        w: function (e) {
          let a,
            t,
            p,
            u,
            m,
            f,
            b,
            C = (0, s.c)(38),
            {
              accessControls: w,
              actionDisabled: v,
              actionLabel: k,
              audience: y,
              compactImageSheetFooter: T,
              error: _,
              footer: S,
              info: x,
              isBusy: A,
              isDismissalDisabled: I,
              notices: L,
              onClose: P,
              onOpenAutoFocus: E,
              onPortalContainerChange: M,
              onSubmit: j,
              preview: D,
              presentation: N,
              subtitle: O,
              size: G,
              threadTitle: R,
              title: H,
            } = e,
            F = (0, n.A)()
          C[0] !== R ? ((a = R?.trim()), (C[0] = R), (C[1] = a)) : (a = C[1])
          let W = a
          ;(C[2] !== A ? ((t = A ? null : (0, i.jsx)(c.ibM, {})), (C[2] = A), (C[3] = t)) : (t = C[3]),
            C[4] !== k || C[5] !== t
              ? ((p = (0, i.jsxs)(i.Fragment, { children: [t, k] })), (C[4] = k), (C[5] = t), (C[6] = p))
              : (p = C[6]))
          let U = p
          if (_?.preventsSharing) {
            let e
            ;(C[7] !== _.onRetry
              ? ((e =
                  null != _.onRetry
                    ? (0, i.jsx)(o.A, {
                        id: "shareDialog.thread.retry",
                        defaultMessage: "Try again",
                        description:
                          "Button in a thread sharing dialog after preparing the share link fails. Retries preparing the chat without publishing it.",
                      })
                    : (0, i.jsx)(o.A, {
                        id: "shareDialog.thread.close",
                        defaultMessage: "Close",
                        description:
                          "Button in a thread sharing dialog that cannot prepare a share link. Closes the failed dialog so the user can reopen sharing.",
                      })),
                (C[7] = _.onRetry),
                (C[8] = e))
              : (e = C[8]),
              (U = e))
          }
          let B = !_?.preventsSharing && v
          C[9] !== U || C[10] !== A || C[11] !== B
            ? ((u = (0, i.jsx)(r.$, {
                color: "outline",
                disabled: B,
                loading: A,
                size: "medium",
                type: "submit",
                children: U,
              })),
              (C[9] = U),
              (C[10] = A),
              (C[11] = B),
              (C[12] = u))
            : (u = C[12])
          let q = u
          C[13] !== W || C[14] !== H
            ? ((m =
                H ??
                (W
                  ? (0, i.jsx)(o.A, {
                      id: "shareDialog.thread.namedTitle",
                      defaultMessage: "Share {threadTitle}",
                      description:
                        "Title of the ChatGPT or Codex thread sharing dialog. threadTitle is the user-provided name of the chat and may be truncated to fit the dialog header.",
                      values: { threadTitle: W },
                    })
                  : (0, i.jsx)(o.A, {
                      id: "shareDialog.thread.title",
                      defaultMessage: "Share chat",
                      description: "Title of the thread sharing dialog when the ChatGPT or Codex chat has no name yet.",
                    }))),
              (C[13] = W),
              (C[14] = H),
              (C[15] = m))
            : (m = C[15])
          let V = _?.preventsSharing ? (_.onRetry ?? P) : j,
            z = _?.preventsSharing ? q : (S ?? q)
          return (
            C[16] !== w ||
            C[17] !== y ||
            C[18] !== _ ||
            C[19] !== x ||
            C[20] !== F ||
            C[21] !== L ||
            C[22] !== N ||
            C[23] !== D
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
                        "imageSheet" === N ? D : (0, i.jsx)(l.OO, { children: D }),
                        x,
                        L,
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
                                "aria-label": F.formatMessage({
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
                (C[16] = w),
                (C[17] = y),
                (C[18] = _),
                (C[19] = x),
                (C[20] = F),
                (C[21] = L),
                (C[22] = N),
                (C[23] = D),
                (C[24] = f))
              : (f = C[24]),
            C[25] !== T ||
            C[26] !== I ||
            C[27] !== P ||
            C[28] !== E ||
            C[29] !== M ||
            C[30] !== N ||
            C[31] !== G ||
            C[32] !== O ||
            C[33] !== m ||
            C[34] !== V ||
            C[35] !== z ||
            C[36] !== f
              ? ((b = (0, i.jsx)(g.I, {
                  title: m,
                  subtitle: O,
                  compactImageSheetFooter: T,
                  isDismissalDisabled: I,
                  onClose: P,
                  onOpenAutoFocus: E,
                  onPortalContainerChange: M,
                  onSubmit: V,
                  size: G,
                  presentation: N,
                  footer: z,
                  children: f,
                })),
                (C[25] = T),
                (C[26] = I),
                (C[27] = P),
                (C[28] = E),
                (C[29] = M),
                (C[30] = N),
                (C[31] = G),
                (C[32] = O),
                (C[33] = m),
                (C[34] = V),
                (C[35] = z),
                (C[36] = f),
                (C[37] = b))
              : (b = C[37]),
            b
          )
        },
      },
    )
  },
}
//# sourceMappingURL=7021.d589dc006f.js.map
