export const __rspack_esm_ids = [652279]
export const __webpack_modules__ = {
  V97q(e, t) {
    t.A = {
      pill: "pill-eCLn8J",
      menu: "menu-o5IS9p",
      templateBrowser: "templateBrowser-V13ZpR",
      container: "container-YlGjOm",
      "row-enter": "row-enter-V0ehCU",
      rowEnter: "row-enter-V0ehCU",
      dismissible: "dismissible-qtCyrh",
      composerOptions: "composerOptions-moU_WR",
      row: "row-oiv1hs",
      value: "value-Y3YJmj",
      templatePicker: "templatePicker-nl1W5s",
      styleMenu: "styleMenu-RaFSzO",
      templateMorphLabel: "templateMorphLabel-evdZAo",
      templateEmpty: "templateEmpty-J1uwUF",
      templateHeader: "templateHeader-AHbNjS",
      templateViewAll: "templateViewAll-vp6vrr",
      templateClose: "templateClose-XrDsQs",
      templateRail: "templateRail-PNmh64",
      templateCard: "templateCard-giCLZp",
      templateArrows: "templateArrows-fz0B3F",
    }
  },
  CuLE(e, t, a) {
    var n =
      Number.isNaN ||
      function (e) {
        return "number" == typeof e && e != e
      }
    function i(e, t) {
      if (e.length !== t.length) return !1
      for (var a, i, r = 0; r < e.length; r++) if (!((a = e[r]) === (i = t[r]) || (n(a) && n(i))) && 1) return !1
      return !0
    }
    a.d(
      t,
      {},
      {
        A: function (e, t) {
          void 0 === t && (t = i)
          var a = null
          function n() {
            for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i]
            if (a && a.lastThis === this && t(n, a.lastArgs)) return a.lastResult
            var r = e.apply(this, n)
            return ((a = { lastResult: r, lastArgs: n, lastThis: this }), r)
          }
          return (
            (n.clear = function () {
              a = null
            }),
            n
          )
        },
      },
    )
  },
  wq84(e, t, a) {
    var n = a("ABep")
    ;(a("zd8w"),
      (t.A = (e) =>
        (0, n.jsx)("svg", {
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, n.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18.2929 5.70711C16.4743 3.88849 13.5257 3.88849 11.7071 5.7071L10.7071 6.70711C10.3166 7.09763 9.68341 7.09763 9.29289 6.70711C8.90236 6.31658 8.90236 5.68342 9.29289 5.29289L10.2929 4.29289C12.8926 1.69323 17.1074 1.69323 19.7071 4.29289C22.3068 6.89256 22.3068 11.1074 19.7071 13.7071L18.7071 14.7071C18.3166 15.0976 17.6834 15.0976 17.2929 14.7071C16.9024 14.3166 16.9024 13.6834 17.2929 13.2929L18.2929 12.2929C20.1115 10.4743 20.1115 7.52572 18.2929 5.70711ZM15.7071 8.29289C16.0976 8.68342 16.0976 9.31658 15.7071 9.70711L9.7071 15.7071C9.31658 16.0976 8.68341 16.0976 8.29289 15.7071C7.90236 15.3166 7.90236 14.6834 8.29289 14.2929L14.2929 8.29289C14.6834 7.90237 15.3166 7.90237 15.7071 8.29289ZM6.7071 9.29289C7.09763 9.68342 7.09763 10.3166 6.7071 10.7071L5.7071 11.7071C3.88849 13.5257 3.88849 16.4743 5.7071 18.2929C7.52572 20.1115 10.4743 20.1115 12.2929 18.2929L13.2929 17.2929C13.6834 16.9024 14.3166 16.9024 14.7071 17.2929C15.0976 17.6834 15.0976 18.3166 14.7071 18.7071L13.7071 19.7071C11.1074 22.3068 6.89255 22.3068 4.29289 19.7071C1.69322 17.1074 1.69322 12.8926 4.29289 10.2929L5.29289 9.29289C5.68341 8.90237 6.31658 8.90237 6.7071 9.29289Z",
            fill: "currentColor",
          }),
        })))
  },
  rUQK(e, t, a) {
    let n = [
      { id: "paragraph", command: "text paragraph normal", messageKey: "text" },
      { id: "heading1", command: "heading1 h1 heading 1", messageKey: "heading1" },
      { id: "heading2", command: "heading2 h2 heading 2", messageKey: "heading2" },
      { id: "heading3", command: "heading3 h3 heading 3", messageKey: "heading3" },
      { id: "orderedList", command: "ordered list numbered", messageKey: "orderedList" },
      { id: "unorderedList", command: "unordered list bulleted", messageKey: "unorderedList" },
    ]
    new Map(n.map((e) => [e.id, e]))
    let i = n.map((e) => e.id)
    a.d(t, {}, { DR: i, MV: () => n })
  },
  wCYo(e, t, a) {
    var n,
      i,
      r,
      s,
      o,
      l =
        (((n = {}).CHATGPT_IMAGE_PROMPT_GROUP_PRESENTATION_TYPE_UNSPECIFIED =
          "CHATGPT_IMAGE_PROMPT_GROUP_PRESENTATION_TYPE_UNSPECIFIED"),
        (n.CHATGPT_IMAGE_PROMPT_GROUP_PRESENTATION_TYPE_IMAGE_CARD =
          "CHATGPT_IMAGE_PROMPT_GROUP_PRESENTATION_TYPE_IMAGE_CARD"),
        (n.CHATGPT_IMAGE_PROMPT_GROUP_PRESENTATION_TYPE_TEXT_PILL =
          "CHATGPT_IMAGE_PROMPT_GROUP_PRESENTATION_TYPE_TEXT_PILL"),
        (n.CHATGPT_IMAGE_PROMPT_GROUP_PRESENTATION_TYPE_PORTRAIT =
          "CHATGPT_IMAGE_PROMPT_GROUP_PRESENTATION_TYPE_PORTRAIT"),
        (n.CHATGPT_IMAGE_PROMPT_GROUP_PRESENTATION_TYPE_ICON_PILL =
          "CHATGPT_IMAGE_PROMPT_GROUP_PRESENTATION_TYPE_ICON_PILL"),
        (n.UNRECOGNIZED = "UNRECOGNIZED"),
        n),
      c =
        (((i = {}).CHATGPT_IMAGE_HOME_NAVIGATION_SOURCE_TYPE_UNSPECIFIED =
          "CHATGPT_IMAGE_HOME_NAVIGATION_SOURCE_TYPE_UNSPECIFIED"),
        (i.CHATGPT_IMAGE_HOME_NAVIGATION_SOURCE_TYPE_SIDE_BAR = "CHATGPT_IMAGE_HOME_NAVIGATION_SOURCE_TYPE_SIDE_BAR"),
        (i.CHATGPT_IMAGE_HOME_NAVIGATION_SOURCE_TYPE_DEEP_LINK = "CHATGPT_IMAGE_HOME_NAVIGATION_SOURCE_TYPE_DEEP_LINK"),
        (i.CHATGPT_IMAGE_HOME_NAVIGATION_SOURCE_TYPE_HOME_NUX = "CHATGPT_IMAGE_HOME_NAVIGATION_SOURCE_TYPE_HOME_NUX"),
        (i.CHATGPT_IMAGE_HOME_NAVIGATION_SOURCE_TYPE_CONVERSATION_EMPTY_STATE =
          "CHATGPT_IMAGE_HOME_NAVIGATION_SOURCE_TYPE_CONVERSATION_EMPTY_STATE"),
        (i.CHATGPT_IMAGE_HOME_NAVIGATION_SOURCE_TYPE_STARTER_PROMPT =
          "CHATGPT_IMAGE_HOME_NAVIGATION_SOURCE_TYPE_STARTER_PROMPT"),
        (i.CHATGPT_IMAGE_HOME_NAVIGATION_SOURCE_TYPE_PLUGINS_PROMOTION =
          "CHATGPT_IMAGE_HOME_NAVIGATION_SOURCE_TYPE_PLUGINS_PROMOTION"),
        (i.CHATGPT_IMAGE_HOME_NAVIGATION_SOURCE_TYPE_YOU_SCREEN =
          "CHATGPT_IMAGE_HOME_NAVIGATION_SOURCE_TYPE_YOU_SCREEN"),
        (i.CHATGPT_IMAGE_HOME_NAVIGATION_SOURCE_TYPE_EXPLORE = "CHATGPT_IMAGE_HOME_NAVIGATION_SOURCE_TYPE_EXPLORE"),
        (i.UNRECOGNIZED = "UNRECOGNIZED"),
        i),
      d =
        (((r = {}).CHATGPT_IMAGE_PROMPT_SENT_SURFACE_TYPE_UNSPECIFIED =
          "CHATGPT_IMAGE_PROMPT_SENT_SURFACE_TYPE_UNSPECIFIED"),
        (r.CHATGPT_IMAGE_PROMPT_SENT_SURFACE_TYPE_IMAGES = "CHATGPT_IMAGE_PROMPT_SENT_SURFACE_TYPE_IMAGES"),
        (r.CHATGPT_IMAGE_PROMPT_SENT_SURFACE_TYPE_PHOTO_BOOTH = "CHATGPT_IMAGE_PROMPT_SENT_SURFACE_TYPE_PHOTO_BOOTH"),
        (r.CHATGPT_IMAGE_PROMPT_SENT_SURFACE_TYPE_CHATGPT_HOME = "CHATGPT_IMAGE_PROMPT_SENT_SURFACE_TYPE_CHATGPT_HOME"),
        (r.UNRECOGNIZED = "UNRECOGNIZED"),
        r),
      _ =
        (((s = {}).CHATGPT_IMAGE_PROMPT_INPUT_IMAGE_ACTION_UNSPECIFIED =
          "CHATGPT_IMAGE_PROMPT_INPUT_IMAGE_ACTION_UNSPECIFIED"),
        (s.CHATGPT_IMAGE_PROMPT_INPUT_IMAGE_ACTION_SELECTED = "CHATGPT_IMAGE_PROMPT_INPUT_IMAGE_ACTION_SELECTED"),
        (s.CHATGPT_IMAGE_PROMPT_INPUT_IMAGE_ACTION_DESELECTED = "CHATGPT_IMAGE_PROMPT_INPUT_IMAGE_ACTION_DESELECTED"),
        (s.UNRECOGNIZED = "UNRECOGNIZED"),
        s),
      T =
        (((o = {}).CHATGPT_IMAGE_HOME_LIBRARY_SHORTCUT_INTERACTION_TYPE_UNSPECIFIED =
          "CHATGPT_IMAGE_HOME_LIBRARY_SHORTCUT_INTERACTION_TYPE_UNSPECIFIED"),
        (o.CHATGPT_IMAGE_HOME_LIBRARY_SHORTCUT_INTERACTION_TYPE_CLICKED =
          "CHATGPT_IMAGE_HOME_LIBRARY_SHORTCUT_INTERACTION_TYPE_CLICKED"),
        (o.UNRECOGNIZED = "UNRECOGNIZED"),
        o)
    a.d(
      t,
      {},
      {
        AK: { $type: "protobuf_analytics_events.v1.ChatgptImagePromptInputImageInteraction" },
        GA: _,
        JA: T,
        Jc: { $type: "protobuf_analytics_events.v1.ChatgptImageHomeComposerTextSent" },
        VX: { $type: "protobuf_analytics_events.v1.ChatgptImagePromptSectionSelected" },
        YY: { $type: "protobuf_analytics_events.v1.ChatgptImagePromptSelected" },
        Zo: { $type: "protobuf_analytics_events.v1.ChatgptImagePromptSent" },
        cF: { $type: "protobuf_analytics_events.v1.ChatgptImagesPageHasExistingImages" },
        cd: d,
        f7: { $type: "protobuf_analytics_events.v1.ChatgptImageHomeLibraryShortcutInteraction" },
        gA: { $type: "protobuf_analytics_events.v1.ChatgptImagePromptImpression" },
        h_: c,
        xh: { $type: "protobuf_analytics_events.v1.ChatgptImageHomeImpression" },
        y$: l,
        yG: { $type: "protobuf_analytics_events.v1.ChatgptImagePromptInputImagesSubmitted" },
      },
    )
  },
  SavH(e, t, a) {
    var n,
      i,
      r,
      s =
        (((n = {}).CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_UNSPECIFIED = "CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_UNSPECIFIED"),
        (n.CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_CONVERSATION = "CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_CONVERSATION"),
        (n.CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_IMAGE_HOME_LIBRARY =
          "CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_IMAGE_HOME_LIBRARY"),
        (n.CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_IMAGE_LIBRARY = "CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_IMAGE_LIBRARY"),
        (n.CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_CONVERSATION_CALPICO =
          "CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_CONVERSATION_CALPICO"),
        (n.CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_CONVERSATION_SHARED =
          "CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_CONVERSATION_SHARED"),
        (n.CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_COMPOSER_EDIT = "CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_COMPOSER_EDIT"),
        (n.CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_GLOBAL_SEARCH = "CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_GLOBAL_SEARCH"),
        (n.UNRECOGNIZED = "UNRECOGNIZED"),
        n),
      o =
        (((i = {}).CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_UNSPECIFIED = "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_UNSPECIFIED"),
        (i.CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_SAVE = "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_SAVE"),
        (i.CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_SHARE = "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_SHARE"),
        (i.CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_EDIT = "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_EDIT"),
        (i.CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_COMPOSER = "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_COMPOSER"),
        (i.CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_ADD_PHOTO = "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_ADD_PHOTO"),
        (i.CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_TAKE_PHOTO = "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_TAKE_PHOTO"),
        (i.CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_STYLE = "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_STYLE"),
        (i.CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_SELECT_AREA = "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_SELECT_AREA"),
        (i.CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_GO_TO_CONVERSATION =
          "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_GO_TO_CONVERSATION"),
        (i.CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_LEARN_MORE = "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_LEARN_MORE"),
        (i.CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_THUMB_UP = "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_THUMB_UP"),
        (i.CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_THUMB_DOWN = "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_THUMB_DOWN"),
        (i.CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_CLOSE = "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_CLOSE"),
        (i.CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_DELETE_SHARE_LINK =
          "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_DELETE_SHARE_LINK"),
        (i.CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_REPORT = "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_REPORT"),
        (i.CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_ANIMATE = "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_ANIMATE"),
        (i.CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_REMOVE_SOMETHING = "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_REMOVE_SOMETHING"),
        (i.CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_RESIZE = "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_RESIZE"),
        (i.CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_RESIZE_OPTION = "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_RESIZE_OPTION"),
        (i.CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_TRY_THIS_STYLE = "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_TRY_THIS_STYLE"),
        (i.UNRECOGNIZED = "UNRECOGNIZED"),
        i),
      l =
        (((r = {}).CHATGPT_IMAGE_LIGHTBOX_THREE_SIXTY_VIEWER_LOAD_FAILURE_TYPE_UNSPECIFIED =
          "CHATGPT_IMAGE_LIGHTBOX_THREE_SIXTY_VIEWER_LOAD_FAILURE_TYPE_UNSPECIFIED"),
        (r.CHATGPT_IMAGE_LIGHTBOX_THREE_SIXTY_VIEWER_LOAD_FAILURE_TYPE_DEPENDENCY_LOAD =
          "CHATGPT_IMAGE_LIGHTBOX_THREE_SIXTY_VIEWER_LOAD_FAILURE_TYPE_DEPENDENCY_LOAD"),
        (r.CHATGPT_IMAGE_LIGHTBOX_THREE_SIXTY_VIEWER_LOAD_FAILURE_TYPE_PANORAMA_LOAD =
          "CHATGPT_IMAGE_LIGHTBOX_THREE_SIXTY_VIEWER_LOAD_FAILURE_TYPE_PANORAMA_LOAD"),
        (r.UNRECOGNIZED = "UNRECOGNIZED"),
        r)
    a.d(
      t,
      {},
      {
        $7: l,
        M0: { $type: "protobuf_analytics_events.v1.ChatgptImageLightboxButtonTapped" },
        N3: { $type: "protobuf_analytics_events.v1.ChatgptImageLightboxShareRequestReturned" },
        Qe: { $type: "protobuf_analytics_events.v1.ChatgptWebImageLibraryLightboxImageOpenInChatClicked" },
        XR: { $type: "protobuf_analytics_events.v1.ChatgptImageLightboxImpression" },
        Zg: s,
        ie: { $type: "protobuf_analytics_events.v1.ChatgptImageLightboxThreeSixtyViewerLoadFailed" },
        k3: { $type: "protobuf_analytics_events.v1.ChatgptImageLightboxThreeSixtyEntrypointImpression" },
        lV: { $type: "protobuf_analytics_events.v1.ChatgptImageLightboxThreeSixtyEntrypointTapped" },
        mk: { $type: "protobuf_analytics_events.v1.ChatgptImageLightboxThreeSixtyViewerLoaded" },
        oj: o,
      },
    )
  },
  zVr5(e, t, a) {
    var n = a("wCYo"),
      i = a("D015"),
      r = a("yGJW")
    function s(e, t) {
      let a = t.items?.findIndex((t) => t.id === e.id)
      return {
        promptId: e.id,
        promptGroupId: t.id,
        promptGroupPresentation: (function (e) {
          switch (e) {
            case "image_card":
              return "CHATGPT_IMAGE_PROMPT_GROUP_PRESENTATION_TYPE_IMAGE_CARD"
            case "portrait":
              return "CHATGPT_IMAGE_PROMPT_GROUP_PRESENTATION_TYPE_PORTRAIT"
            case "text_pill":
              return "CHATGPT_IMAGE_PROMPT_GROUP_PRESENTATION_TYPE_TEXT_PILL"
            case "icon_pill":
              return "CHATGPT_IMAGE_PROMPT_GROUP_PRESENTATION_TYPE_ICON_PILL"
          }
        })(t.presentation),
        position: null != a && a >= 0 ? a : void 0,
      }
    }
    a.d(
      t,
      {},
      {
        S: function (e, t, a, o, l, c) {
          ;(0, r.yy)(e, n.Zo, {
            ...s(t, a),
            imageSendUuid: o,
            aspectRatio: c?.aspectRatio,
            imageUploadCount: (0, i.At)(c?.imageUploadCount),
            referenceImageCount: (0, i.At)(c?.referenceImageCount),
            promptPresentation: c?.promptPresentation,
            surface:
              "images" === l
                ? "CHATGPT_IMAGE_PROMPT_SENT_SURFACE_TYPE_IMAGES"
                : "CHATGPT_IMAGE_PROMPT_SENT_SURFACE_TYPE_CHATGPT_HOME",
          })
        },
        c: function (e, t, a, i, o) {
          ;(0, r.yy)(e, "impression" === t ? n.gA : n.YY, {
            ...s(a, i),
            ...("selected" === t ? { sectionId: a.section || "trending" } : {}),
            surface:
              "home" === o
                ? "CHATGPT_IMAGE_PROMPT_SENT_SURFACE_TYPE_CHATGPT_HOME"
                : "CHATGPT_IMAGE_PROMPT_SENT_SURFACE_TYPE_IMAGES",
          })
        },
      },
    )
  },
  Pti6(e, t, a) {
    var n = a("zTeN"),
      i = a("Oj9r")
    let r = (0, n.vP)(i.GD, () => []),
      s = (0, n.un)(i.GD, ({ get: e }) => e(r).some((t) => e(t)))
    a.d(
      t,
      {},
      {
        N: function (e, t) {
          return (
            e.set(r, (e) => [...e, t]),
            () => {
              e.set(r, (e) => e.filter((e) => e !== t))
            }
          )
        },
        x: s,
      },
    )
  },
  rfhJ(e, t, a) {
    var n = a("ozm1"),
      i = a("SavH"),
      r = a("ETwP"),
      s = a("iqEK"),
      o = a("wTVm"),
      l = a("yGJW"),
      c = a("WFY2"),
      d = a("Ghh3")
    function _() {
      try {
        let e = sessionStorage.getItem("_sli")
        if (e) return e
        let t = (0, o.A)()
        return (sessionStorage.setItem("_sli", t), t)
      } catch {
        return
      }
    }
    function T(e, t, a) {
      let n = t.chatGptImageMetadata?.generationId,
        i = t.chatGptMessageId
      if (!n || !e || !i) return
      let r =
        "open" === a
          ? "image_view_full"
          : "download" === a
            ? "imagegen_image_paragen_download"
            : "imagegen_image_paragen_rating"
      d.Request.safePost("/unified_user_signals", {
        requestBody: {
          signal_type: r,
          product_surface: "CHAT",
          signal_metadata: {},
          user_metadata: {},
          signal_detail: {
            common_metadata: { conversation_id: e, message_id: i, image_generation_id: n },
            imagegen_image_paragen_rating:
              "imagegen_image_paragen_rating" === r
                ? { rating: "thumbsUp" === a ? "thumbs_up" : "thumbs_down" }
                : void 0,
          },
        },
      }).catch((e) => {
        c.v.warning("Failed to record Paragen image interaction", { safe: { interaction: a }, sensitive: { error: e } })
      })
    }
    a.d(
      t,
      {},
      {
        BZ: function (e, t, a) {
          let n = a.chatGptMessageId
          if (null == a.src || null == n) return
          let { generationId: i, parentGenerationId: s, imageIndex: o } = a.chatGptImageMetadata ?? {},
            _ = {
              mimeType: a.chatGptImageMetadata?.mimeType,
              conversationId: t,
              messageId: n,
              generationId: i,
              parentGenerationId: s,
              imageIndex: o,
              fileId: a.src.match(/^(?:file-service|sediment):\/\/(.+)$/)?.[1],
              source: "chat",
              model: "gpt-4o",
            }
          ;((0, l.yy)(e, r.lb, { legacyStatsigEventName: "chatgpt_image_download", metadata: _, isParagen: !1 }),
            t &&
              n &&
              i &&
              d.Request.safePost("/unified_user_signals", {
                requestBody: {
                  signal_type: "image_download",
                  product_surface: "CHAT",
                  signal_metadata: {},
                  user_metadata: {},
                  signal_detail: { common_metadata: { conversation_id: t, message_id: n, image_generation_id: i } },
                },
              }).catch((e) => {
                c.v.warning("Failed to record shared image download", { safe: {}, sensitive: { error: e } })
              }))
        },
        HQ: function (e, t, a, n, s = "chat") {
          if (null == a.chatGptMessageId) return
          let {
              generationId: o,
              parentGenerationId: c,
              model: d,
              sourceOperation: g,
              imageIndex: p,
            } = a.chatGptImageMetadata ?? {},
            m = /^(file-service|sediment):\/\//.test(a.src ?? "") ? (a.src ?? void 0) : void 0,
            E = a.src?.match(/^(?:file-service|sediment):\/\/(.+)$/)?.[1],
            u = "open" === n || "view" === n || n.startsWith("360") ? _() : void 0
          if (
            (("open" === n || "view" === n) &&
              (null != u &&
                (0, l.yy)(e, i.XR, {
                  metadata: {
                    sessionId: u,
                    conversationId: t,
                    messageId: a.chatGptMessageId,
                    generationId: o,
                    parentGenerationId: c,
                    fileId: m,
                  },
                  source: "CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_CONVERSATION",
                }),
              "view" === n)) ||
            (n.startsWith("360") && null == u)
          )
            return
          let f = {
            metadata: {
              sessionId: u,
              conversationId: t,
              messageId: a.chatGptMessageId,
              generationId: o,
              parentGenerationId: c,
              fileId: m,
            },
            source: "CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_CONVERSATION",
          }
          switch (n) {
            case "360Impression":
              ;(0, l.yy)(e, i.k3, f)
              return
            case "360Opened":
              ;(0, l.yy)(e, i.lV, f)
              return
            case "360Loaded":
              ;(0, l.yy)(e, i.mk, f)
              return
            case "360DependencyFailed":
            case "360ImageFailed":
              ;(0, l.yy)(e, i.ie, {
                ...f,
                failureType:
                  "360DependencyFailed" === n
                    ? "CHATGPT_IMAGE_LIGHTBOX_THREE_SIXTY_VIEWER_LOAD_FAILURE_TYPE_DEPENDENCY_LOAD"
                    : "CHATGPT_IMAGE_LIGHTBOX_THREE_SIXTY_VIEWER_LOAD_FAILURE_TYPE_PANORAMA_LOAD",
              })
              return
          }
          let I = "paragen" === s,
            h = {
              mimeType: a.chatGptImageMetadata?.mimeType,
              conversationId: t,
              messageId: a.chatGptMessageId,
              generationId: o,
              parentGenerationId: c,
              fileId: E,
              source: s,
              model: I ? "gpt-4o" : d,
              imageIndex: p,
              hasParent: I && "open" !== n ? !!c : void 0,
            }
          if ("open" === n) {
            ;((0, l.yy)(e, r.WP, {
              legacyStatsigEventName: I ? "chatgpt_image_view_full" : void 0,
              metadata: { ...h, sourceOperation: g ?? "none" },
            }),
              I && T(t, a, "open"))
            return
          }
          let A = "thumbsUp" === n,
            P = "download" === n ? "chatgpt_imagegen_image_paragen_download" : "chatgpt_imagegen_image_paragen_rating"
          ;("download" === n
            ? (0, l.yy)(e, r.lb, { legacyStatsigEventName: I ? P : void 0, metadata: h, isParagen: I })
            : (0, l.yy)(e, r._K, {
                legacyStatsigEventName: I ? P : void 0,
                ratingType: I
                  ? "CHATGPT_IMAGEGEN_IMAGE_RATING_TYPE_PARAGEN"
                  : "CHATGPT_IMAGEGEN_IMAGE_RATING_TYPE_IMAGEGEN",
                metadata: h,
                liked: A,
              }),
            I && T(t, a, n))
        },
        Iw: function (
          e,
          { image: t, conversationId: a, entryPoint: i, downloadScope: o, requestedImageCount: c, isParagen: d },
        ) {
          c < 1 ||
            (0, l.yy)(e, r.sK, {
              imageType: "CHATGPT_IMAGE_DOWNLOAD_IMAGE_TYPE_IS_GENERATED",
              generationId: t.chatGptImageMetadata?.generationId || void 0,
              messageId: t.chatGptMessageId || void 0,
              conversationId: a || void 0,
              fileId: (0, s.V2)(t.src?.split("?")[0] ?? "") || void 0,
              isParagen: d,
              entryPoint: i,
              downloadScope: o,
              requestedImageCount: (0, n.At)(c),
            })
        },
        PI: function (e, t, a, s, o) {
          if ("share" === s)
            return void (0, l.yy)(e, i.M0, {
              button: "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_SHARE",
              selectionState: "CHATGPT_IMAGEGEN_SELECTION_STATE_PENDING_SELECTION",
              imageSeriesCount: (0, n.At)(o),
            })
          let {
            generationId: c,
            parentGenerationId: d,
            model: _,
            imageIndex: T,
            sourceOperation: g,
          } = a.chatGptImageMetadata ?? {}
          ;(0, l.yy)(e, r.Ti, {
            metadata: {
              mimeType: a.chatGptImageMetadata?.mimeType,
              conversationId: t,
              messageId: a.chatGptMessageId,
              generationId: c,
              parentGenerationId: d,
              model: _,
              imageIndex: T,
              sourceOperation: g,
              source: "chat",
              fileId: a.src?.match(/^(?:file-service|sediment):\/\/(.+)$/)?.[1],
            },
            downloadableImageCount: (0, n.At)(o),
            selectionState: "pending_selection",
          })
        },
        pn: _,
      },
    )
  },
  BjWL(e, t, a) {
    let n = "data-above-composer-portal"
    a.d(
      t,
      {},
      {
        Xi: function (e, t) {
          if ("u" < typeof document) return null
          for (let a of document.querySelectorAll(`[${n}]`))
            if (a.getAttribute("data-above-composer-conversation-id") === e && (null == t || null != a.closest(t)))
              return a
          return null
        },
        w4: n,
      },
    )
  },
  fDIZ(e, t, a) {
    let n = (0, a("zd8w").createContext)(null)
    a.d(t, {}, { H: n })
  },
  sWWp(e, t, a) {
    var n = a("ko3L"),
      i = a("WrbO"),
      r = a("YWcr")
    function s(e, t) {
      let a = new URLSearchParams({ app: e.bundleId })
      return `${(0, r.vt)(t.plugin.id)}?${a.toString()}`
    }
    function o(e) {
      return (0, n.m)(e) ? "Chrome" : e.displayName
    }
    a.d(
      t,
      { Sb: () => "Chrome", mz: () => n.m },
      {
        I8: s,
        Mg: o,
        NW: function ({
          mentionPath: e,
          mentionDisplayName: t,
          nativeApps: a,
          computerPlugin: n,
          genericDisplayNames: i = [],
        }) {
          var s, l, c, d, _
          let T, g
          if (null == n || ((s = e), (l = n), !(s === (T = (0, r.vt)(l.plugin.id)) || s.startsWith(`${T}?`))))
            return { isComputerUse: !1, nativeApp: null, unresolvedNativeAppDisplayName: null }
          let p = (function (e, t) {
              let a = `${(0, r.vt)(t.plugin.id)}?`
              if (!e.startsWith(a)) return null
              let n = new URLSearchParams(e.slice(a.length)).get("app"),
                i = n?.trim()
              return null == i || 0 === i.length ? null : i
            })(e, n),
            m = t.trim(),
            E =
              null == p
                ? a.find((e) => o(e).toLowerCase() === m.toLowerCase())
                : a.find((e) => e.bundleId.toLowerCase() === p.toLowerCase()),
            u =
              null == E &&
              "" !== m &&
              (null != p ||
                ((c = m),
                (d = n),
                (_ = i),
                (g = c.toLowerCase()),
                ![d.plugin.name, d.displayName, "Computer", ..._].some((e) => e?.trim().toLowerCase() === g)))
          return {
            isComputerUse: !0,
            nativeApp: null == E ? null : { ...E, displayName: "" === m ? E.displayName : m },
            unresolvedNativeAppDisplayName: u ? t : null,
          }
        },
        UA: function ({ app: e, description: t, computerPlugin: a, iconSmall: n }) {
          let i = o(e)
          return {
            kind: "plugin",
            name: i,
            displayName: i,
            path: s(e, a),
            description: t ?? a.description ?? "",
            iconSmall: n ?? a.logoPath ?? "",
          }
        },
        UU: function (e) {
          return e.find((e) => e.plugin.name === i.W && e.plugin.installed && e.plugin.enabled) ?? null
        },
        zJ: function (e) {
          return e.find((e) => e.plugin.name === i.W) ?? null
        },
      },
    )
  },
  lDn6(e, t, a) {
    var n = a("BA9i"),
      i = a("YWcr")
    let r = {
        label: "Microsoft Excel",
        shortName: "Excel",
        macBundleId: "com.microsoft.Excel",
        windowsProcessAppIdPattern: /^process:(?:.*[\\/])?excel\.exe$/i,
        windowsProcessDisplayName: "excel",
        windowsOfficeAppIdPattern: /^Microsoft\.Office\.(?:EXCEL|EXCEL\.EXE)(?:\.\d+)?$/i,
        windowsOfficeDesktopAppIdPattern: /^Microsoft\.Office\.Desktop_[^!]+!Excel$/i,
        isMentionPlugin: n.V0,
      },
      s = {
        label: "Microsoft PowerPoint",
        shortName: "PowerPoint",
        macBundleId: "com.microsoft.Powerpoint",
        windowsProcessAppIdPattern: /^process:(?:.*[\\/])?powerpnt\.exe$/i,
        windowsProcessDisplayName: "powerpnt",
        windowsOfficeAppIdPattern: /^Microsoft\.Office\.(?:POWERPOINT|POWERPNT|POWERPNT\.EXE)(?:\.\d+)?$/i,
        windowsOfficeDesktopAppIdPattern: /^Microsoft\.Office\.Desktop_[^!]+!PowerPoint$/i,
        isMentionPlugin: n.ho,
      },
      o = {
        label: "Microsoft Word",
        shortName: "Word",
        macBundleId: "com.microsoft.Word",
        windowsProcessAppIdPattern: /^process:(?:.*[\\/])?winword\.exe$/i,
        windowsProcessDisplayName: "winword",
        windowsOfficeAppIdPattern: /^Microsoft\.Office\.(?:WORD|WINWORD|WINWORD\.EXE)(?:\.\d+)?$/i,
        windowsOfficeDesktopAppIdPattern: /^Microsoft\.Office\.Desktop_[^!]+!Word$/i,
        isMentionPlugin: n._c,
      },
      l = [r, s, o]
    a.d(
      t,
      {},
      {
        ER: r,
        Kx: function ({ mentionPath: e, mentionDisplayName: t, plugins: a }) {
          return (
            l.find((n) =>
              (function ({ alias: e, mentionPath: t, mentionDisplayName: a, plugins: n }) {
                return a === e.label && n.some((a) => e.isMentionPlugin(a) && t === (0, i.vt)(a.plugin.id))
              })({ alias: n, mentionPath: e, mentionDisplayName: t, plugins: a }),
            )?.label ?? null
          )
        },
        Th: function (e, t) {
          return (
            t.bundleId === e.macBundleId ||
            e.windowsProcessAppIdPattern.test(t.bundleId) ||
            e.windowsOfficeAppIdPattern.test(t.bundleId) ||
            e.windowsOfficeDesktopAppIdPattern.test(t.bundleId) ||
            t.displayName === e.label ||
            t.displayName.trim().toLowerCase() === e.windowsProcessDisplayName
          )
        },
        dl: o,
        iZ: function (e, t) {
          return Math.max(t(e.label), t(e.shortName), t(`@${e.label}`), t(`@${e.shortName}`)) > 0
        },
        wq: s,
        xX: function ({ alias: e, plugin: t, description: a }) {
          return {
            kind: "plugin",
            name: e.label,
            displayName: e.label,
            path: (0, i.vt)(t.plugin.id),
            description: a,
            iconSmall: (0, i.kI)(t),
          }
        },
      },
    )
  },
  czj2(e, t, a) {
    var n = a("N5C1"),
      i = a("axh8"),
      r = a("YWcr")
    function s(e, t) {
      return (0, r.GL)(e, t)
    }
    a.d(
      t,
      {},
      {
        PG: function (e, t) {
          let a = s(e, t)
          return (0, i.HP)(null, {
            iconSmall: a.iconSmall,
            basePath: a.path,
            fallbackName: a.name,
            fallbackDescription: a.description,
            fallbackIcon: n.A,
          })
        },
        ec: s,
        qF: function ({ connectorId: e, linkId: t, plugins: a }) {
          if (!e || !t) return
          let n = a.filter((a) => a.extensions?.searchMentionProviders.some((a) => a.appId === e && a.linkId === t))
          return 1 === n.length ? n[0] : void 0
        },
        sE: function ({ label: e, path: t, plugins: a }) {
          if (null != t && t.length > 0) {
            let e = (0, r.e3)(t)
            if (null == e) return
            let n = a.find((t) => t.plugin.id === e || t.referenceIds?.includes(e))
            if (null != n) return n
            if (!e.endsWith("@dev-mode")) return
            let i = e.slice(0, -9)
            return a.find((e) => e.plugin.id === `${i}@created-by-me-remote`)
          }
          let n = e.trim().toLowerCase()
          return a.find(
            (e) =>
              e.plugin.id.toLowerCase() === n ||
              e.plugin.name.toLowerCase() === n ||
              e.displayName?.toLowerCase() === n,
          )
        },
        zc: function (e) {
          return e.description ?? (e.marketplaceName || null)
        },
      },
    )
  },
  E9OS(e, t, a) {
    var n = a("f6KK")
    let i = new n.hs("customKeymapPlugin")
    a.d(
      t,
      {},
      {
        g: function (e, t, a = "normal") {
          if (e.isDestroyed) return () => {}
          let { allHandlers: n = [] } = i.getState(e.state) ?? {}
          return (
            e.dispatch(e.state.tr.setMeta(i, { allHandlers: "fallback" === a ? [...n, t] : [t, ...n] })),
            () => {
              if (e.isDestroyed) return
              let { allHandlers: a = [] } = i.getState(e.state) ?? {}
              a.includes(t) && e.dispatch(e.state.tr.setMeta(i, { allHandlers: a.filter((e) => e !== t) }))
            }
          )
        },
        k: function () {
          return new n.k_({
            key: i,
            state: { init: () => ({ allHandlers: [] }), apply: (e, t) => e.getMeta(i) ?? t },
            props: {
              handleKeyDown(e, t) {
                for (let a of i.getState(e.state)?.allHandlers ?? []) if (a[t.key]?.(t)) return !0
                return !1
              },
            },
          })
        },
      },
    )
  },
  jxg1(e, t, a) {
    var n = a("ABep"),
      i = a("zd8w")
    let r = /(^|\s)(#[\da-fA-F]{6})(?!\w)/g,
      s = /\b(?:issue|pr)\W*$/i,
      o = /\bprs?\b/i,
      l = /^#\d{6}$/
    function c(e, t = "") {
      let a = [],
        n = o.test(`${t}${e}`)
      for (let i of e.matchAll(r)) {
        let r = i.index + i[1].length,
          o = i[2],
          c = `${t}${e.slice(0, r)}`
        ;(c.length > 0 && !/\s$/.test(c)) || s.test(c) || (n && l.test(o)) || a.push({ content: o, index: r })
      }
      return 0 === a.length ? null : a
    }
    function d({ content: e, key: t }) {
      return (0, n.jsx)(
        "span",
        {
          "aria-hidden": !0,
          className: "ms-1 inline-block size-3 rounded-[3px] border border-default align-[-0.08em]",
          "data-hex-color-swatch": e,
          style: { backgroundColor: e },
        },
        t,
      )
    }
    a.d(
      t,
      {},
      {
        $X: d,
        Ci: c,
        Zc: function ({ content: e, key: t }) {
          return (0, n.jsxs)(i.Fragment, { children: [e, d({ content: e })] }, t)
        },
        i7: function (e, t) {
          let a = c(e, t)?.[0]
          return a?.index === 0 && a.content.length === e.length
        },
      },
    )
  },
  TxRk(e, t, a) {
    var n = a("ABep"),
      i = a("QosV"),
      r = a("on57"),
      s = a("zd8w"),
      o = a("WOXI")
    function l({ className: e, icon: t, iconSizing: a = "slot" }) {
      let n = (0, r.A)(o.A.Icon, "slot" === a && o.A.SlotSizedIcon, e)
      return (0, s.isValidElement)(t)
        ? (0, s.cloneElement)(t, { className: (0, r.A)(n, t.props.className) })
        : (0, s.createElement)(t, { className: n })
    }
    a.d(
      t,
      {},
      {
        OQ: l,
        hG: function ({ appearance: e, children: t }) {
          return "underlined-text" === e
            ? (0, s.cloneElement)(t, { className: (0, r.A)(t.props.className, o.A.UnderlinedText) })
            : t
        },
        q3: function (e) {
          let t,
            a,
            s,
            c,
            d,
            _,
            T,
            g,
            p,
            m,
            E,
            u,
            f,
            I,
            h,
            A,
            P,
            C,
            O,
            G,
            M,
            N,
            v,
            R = (0, i.c)(51)
          R[0] !== e
            ? (({
                className: s,
                children: a,
                appearance: E,
                brandColor: t,
                dataAttributes: c,
                fontWeight: u,
                icon: d,
                iconClassName: _,
                iconSizing: f,
                iconSlotProps: T,
                interactive: I,
                labelClassName: g,
                layout: h,
                style: m,
                tone: A,
                underlineOnHover: P,
                ...p
              } = e),
              (R[0] = e),
              (R[1] = t),
              (R[2] = a),
              (R[3] = s),
              (R[4] = c),
              (R[5] = d),
              (R[6] = _),
              (R[7] = T),
              (R[8] = g),
              (R[9] = p),
              (R[10] = m),
              (R[11] = E),
              (R[12] = u),
              (R[13] = f),
              (R[14] = I),
              (R[15] = h),
              (R[16] = A),
              (R[17] = P))
            : ((t = R[1]),
              (a = R[2]),
              (s = R[3]),
              (c = R[4]),
              (d = R[5]),
              (_ = R[6]),
              (T = R[7]),
              (g = R[8]),
              (p = R[9]),
              (m = R[10]),
              (E = R[11]),
              (u = R[12]),
              (f = R[13]),
              (I = R[14]),
              (h = R[15]),
              (A = R[16]),
              (P = R[17]))
          let H = void 0 === E ? "inline-mention" : E,
            y = void 0 === u ? "medium" : u,
            S = void 0 === f ? "slot" : f,
            b = void 0 !== I && I,
            L = void 0 === h ? "inline-flow" : h,
            w = void 0 === A ? "accent" : A,
            U = void 0 === P ? b : P,
            B = "thumbnail" === L && "inline-flex px-1 py-0 align-middle"
          R[18] !== s || R[19] !== B
            ? ((C = (0, r.A)(o.A.Mention, B, s)), (R[18] = s), (R[19] = B), (R[20] = C))
            : (C = R[20])
          let Y = null == t ? void 0 : "",
            x = b ? "" : void 0,
            D = b ? "" : void 0,
            X = U ? "" : void 0
          ;(R[21] !== t || R[22] !== m
            ? ((O = (function ({ brandColor: e, style: t }) {
                return null == e && t?.color == null
                  ? t
                  : { ...t, color: void 0, "--inline-mention-base-color": e, "--inline-mention-color": t?.color }
              })({ brandColor: t, style: m })),
              (R[21] = t),
              (R[22] = m),
              (R[23] = O))
            : (O = R[23]),
            R[24] !== d || R[25] !== _ || R[26] !== S || R[27] !== T || R[28] !== L
              ? ((G =
                  null == d
                    ? null
                    : (0, n.jsx)("span", {
                        ...T,
                        className: (0, r.A)(
                          o.A.IconContainer,
                          "slot" === S && "thumbnail" !== L && o.A.SlotSizedIconContainer,
                          "thumbnail" === L && "inline-flex size-8 overflow-hidden rounded-full",
                        ),
                        children: (0, n.jsx)(l, { className: _, icon: d, iconSizing: S }),
                      })),
                (R[24] = d),
                (R[25] = _),
                (R[26] = S),
                (R[27] = T),
                (R[28] = L),
                (R[29] = G))
              : (G = R[29]))
          let V = "thumbnail" === L && "hidden"
          return (
            R[30] !== g || R[31] !== V
              ? ((M = (0, r.A)(o.A.Label, V, g)), (R[30] = g), (R[31] = V), (R[32] = M))
              : (M = R[32]),
            R[33] !== a || R[34] !== M
              ? ((N = (0, n.jsx)("span", { className: M, children: a })), (R[33] = a), (R[34] = M), (R[35] = N))
              : (N = R[35]),
            R[36] !== H ||
            R[37] !== c ||
            R[38] !== y ||
            R[39] !== L ||
            R[40] !== p ||
            R[41] !== Y ||
            R[42] !== x ||
            R[43] !== D ||
            R[44] !== X ||
            R[45] !== O ||
            R[46] !== G ||
            R[47] !== N ||
            R[48] !== C ||
            R[49] !== w
              ? ((v = (0, n.jsxs)("span", {
                  ...p,
                  ...c,
                  className: C,
                  "data-appearance": H,
                  "data-brand-color": Y,
                  "data-font-weight": y,
                  "data-layout": L,
                  "data-interactive": x,
                  "data-inline-mention-interactive": D,
                  "data-tone": w,
                  "data-underline-on-hover": X,
                  style: O,
                  children: [G, N],
                })),
                (R[36] = H),
                (R[37] = c),
                (R[38] = y),
                (R[39] = L),
                (R[40] = p),
                (R[41] = Y),
                (R[42] = x),
                (R[43] = D),
                (R[44] = X),
                (R[45] = O),
                (R[46] = G),
                (R[47] = N),
                (R[48] = C),
                (R[49] = w),
                (R[50] = v))
              : (v = R[50]),
            v
          )
        },
        vt: function (e) {
          let t,
            a = (0, i.c)(2),
            { children: r } = e
          return (
            a[0] !== r
              ? ((t = (0, n.jsx)("span", { className: o.A.Text, children: r })), (a[0] = r), (a[1] = t))
              : (t = a[1]),
            t
          )
        },
      },
    )
  },
  nIPe(e, t, a) {
    a.d(t, { ComposerImageTemplates: () => N })
    var n = a("ABep"),
      i = a("QosV"),
      r = a("suct"),
      s = a("zTeN"),
      o = a("jEN2"),
      l = a("soaw"),
      c = a("pwVX"),
      d = a("L4yM")
    let _ = (0, a("nkTT").a)({
      name: "chevron-left-lg-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 4.279785, y: 2.475098, width: 5.911621, height: 11.049805 },
        visualBounds: { x: 4.279785, y: 2.475098, width: 5.911621, height: 11.049805 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 4.279785, y: 2.475098, width: 5.911621, height: 11.049805 },
        center: { x: 7.235596, y: 8 },
        insets: { top: 2.475098, right: 5.808594, bottom: 2.475097, left: 4.279785 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.235596, y: 8 }, foreground: { x: 7.235596, y: 8 } },
      },
      capabilities: ["icon"],
      body: '<path d="M10.0377 12.6289C10.2427 12.8339 10.2427 13.166 10.0377 13.3711C9.83265 13.5761 9.50051 13.5761 9.29548 13.3711L4.53083 8.60641C4.1961 8.27129 4.1961 7.72863 4.53083 7.39352L9.29548 2.62887C9.50051 2.42384 9.83265 2.42384 10.0377 2.62887C10.2427 2.83389 10.2427 3.16603 10.0377 3.37105L5.40876 7.99996L10.0377 12.6289Z" fill="currentColor"/>',
    })
    var T = a("GlUR"),
      g = a("iodE"),
      p = a("IjbW"),
      m = a("LIss"),
      E = a("zd8w"),
      u = a("Wf1j"),
      f = a("oyxz"),
      I = a("ygO2"),
      h = a("HOLv"),
      A = a("GO7r"),
      P = a("V97q")
    function C(e) {
      let t,
        a,
        r,
        s,
        o,
        l,
        c,
        d,
        C,
        N,
        v,
        R,
        H,
        y,
        S,
        b,
        L,
        w,
        U,
        B,
        Y,
        x,
        D,
        X,
        V,
        j,
        W,
        $,
        F = (0, i.c)(121),
        { id: k, catalog: Z, geometry: z, placement: K, onClose: q, onSelect: Q, pickerRef: J } = e,
        ee = (0, u.A)(),
        et = (0, g.tF)(),
        ea = (0, p.I)(),
        en = (0, E.useRef)(null),
        [ei, er] = (0, E.useState)(!1)
      F[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { previous: !1, next: !1 }), (F[0] = t)) : (t = F[0])
      let [es, eo] = (0, E.useState)(t)
      F[1] !== K ? ((a = "bottom" === K ? { top: 0 } : { bottom: 0 }), (F[1] = K), (F[2] = a)) : (a = F[2])
      let el = a
      F[3] !== z.bottom || F[4] !== z.top || F[5] !== K
        ? ((r = "bottom" === K ? { top: z.top } : { bottom: z.bottom }),
          (F[3] = z.bottom),
          (F[4] = z.top),
          (F[5] = K),
          (F[6] = r))
        : (r = F[6])
      let ec = z.triggerHeight / 2
      F[7] !== z.left || F[8] !== z.triggerHeight || F[9] !== z.triggerWidth || F[10] !== r || F[11] !== ec
        ? ((s = { left: z.left, ...r, width: z.triggerWidth, height: z.triggerHeight, borderRadius: ec }),
          (F[7] = z.left),
          (F[8] = z.triggerHeight),
          (F[9] = z.triggerWidth),
          (F[10] = r),
          (F[11] = ec),
          (F[12] = s))
        : (s = F[12])
      let ed = s
      if (
        F[13] !== Z ||
        F[14] !== es ||
        F[15] !== el ||
        F[16] !== z.triggerHeight ||
        F[17] !== z.triggerWidth ||
        F[18] !== z.width ||
        F[19] !== ei ||
        F[20] !== k ||
        F[21] !== ee ||
        F[22] !== q ||
        F[23] !== Q ||
        F[24] !== ed ||
        F[25] !== J ||
        F[26] !== K ||
        F[27] !== et ||
        F[28] !== ea
      ) {
        let e,
          t,
          a,
          i,
          r,
          s,
          g,
          p,
          E,
          u = Z.groups?.flatMap(G)
        F[51] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = function () {
              let e = en.current
              if (null == e) return
              let t = Math.abs(e.scrollLeft) > 1,
                a = Math.abs(e.scrollLeft) + e.clientWidth < e.scrollWidth - 1
              eo((e) => (e.previous === t && e.next === a ? e : { previous: t, next: a }))
            }),
            (F[51] = e))
          : (e = F[51])
        let W = e
        F[52] !== ea
          ? ((t = function (e) {
              let t = en.current,
                a = t?.firstElementChild
              if (null == t || null == a) return
              let n = getComputedStyle(t)
              t.scrollBy({
                left: e * (a.clientWidth + parseFloat(n.columnGap)) * ("rtl" === n.direction ? -1 : 1),
                behavior: ea ? "instant" : "smooth",
              })
            }),
            (F[52] = ea),
            (F[53] = t))
          : (t = F[53])
        let $ = t
        ;((l = m.P.div),
          (H = k),
          (y = J),
          (S = P.A.templateBrowser),
          (b = !et),
          (L = !et || void 0),
          (w = !ea && ed),
          F[54] !== el || F[55] !== z.width
            ? ((U = { left: 0, ...el, width: z.width, height: "auto", borderRadius: 24 }),
              (F[54] = el),
              (F[55] = z.width),
              (F[56] = U))
            : (U = F[56]),
          F[57] !== ed || F[58] !== ea
            ? ((B = ea ? { opacity: 0 } : ed), (F[57] = ed), (F[58] = ea), (F[59] = B))
            : (B = F[59]),
          F[60] !== ea
            ? ((Y = ea ? { duration: 0 } : { type: "spring", visualDuration: 0.3, bounce: 0.04 }),
              (F[60] = ea),
              (F[61] = Y))
            : (Y = F[61]),
          F[62] !== el || F[63] !== z.triggerHeight || F[64] !== z.triggerWidth || F[65] !== ea
            ? ((x =
                !ea &&
                (0, n.jsx)(m.P.span, {
                  className: P.A.templateMorphLabel,
                  "aria-hidden": "true",
                  style: { width: z.triggerWidth - 2, height: z.triggerHeight - 2, ...el },
                  initial: { opacity: 1 },
                  animate: { opacity: 0 },
                  exit: { opacity: 0 },
                  transition: { duration: 0.1 },
                  children: (0, n.jsx)(f.A, {
                    id: "chatgptConversations.imageOptions.templates",
                    defaultMessage: "Templates",
                    description: "Image generation pill that opens the image template browser",
                  }),
                })),
              (F[62] = el),
              (F[63] = z.triggerHeight),
              (F[64] = z.triggerWidth),
              (F[65] = ea),
              (F[66] = x))
            : (x = F[66]),
          (o = m.P.section),
          (D = P.A.templatePicker),
          F[67] !== ee
            ? ((X = ee.formatMessage({
                id: "chatgptConversations.imageOptions.templates.label",
                defaultMessage: "Image generation templates",
                description: "Accessible name of the expandable image template browser beside the composer",
              })),
              (F[67] = ee),
              (F[68] = X))
            : (X = F[68]),
          (V = ei ? "grid" : "carousel"))
        let ec = Math.max(0, z.width - 2)
        ;(F[69] !== ec ? ((j = { width: ec }), (F[69] = ec), (F[70] = j)) : (j = F[70]),
          F[71] !== K || F[72] !== ea
            ? ((c = !ea && { opacity: 0, y: "bottom" === K ? -6 : 6 }), (F[71] = K), (F[72] = ea), (F[73] = c))
            : (c = F[73]),
          F[74] === Symbol.for("react.memo_cache_sentinel")
            ? ((d = { opacity: 1, y: 0 }), (C = { opacity: 0 }), (F[74] = d), (F[75] = C))
            : ((d = F[74]), (C = F[75])),
          F[76] !== et || F[77] !== ea
            ? ((N = ea ? { duration: 0 } : { duration: et ? 0.18 : 0.1, delay: 0.14 * !!et, ease: [0.2, 0.8, 0.2, 1] }),
              (F[76] = et),
              (F[77] = ea),
              (F[78] = N))
            : (N = F[78]),
          F[79] !== ei
            ? ((a = (0, n.jsx)("h2", {
                children: ei
                  ? (0, n.jsx)(f.A, {
                      id: "chatgptConversations.imageOptions.templates.all",
                      defaultMessage: "All image templates",
                      description: "Heading of the expanded grid containing all available image generation templates",
                    })
                  : (0, n.jsx)(f.A, {
                      id: "chatgptConversations.imageOptions.templates.start",
                      defaultMessage: "Start with a template",
                      description: "Heading above the image generation template carousel",
                    }),
              })),
              (F[79] = ei),
              (F[80] = a))
            : (a = F[80]),
          F[81] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = () => {
                ;(er(O), en.current?.scrollTo({ left: 0, top: 0 }))
              }),
              (F[81] = i))
            : (i = F[81]),
          F[82] !== ei
            ? ((r = (0, n.jsx)(I.$, {
                className: P.A.templateViewAll,
                unstyled: !0,
                focusRing: "none",
                onClick: i,
                children: ei
                  ? (0, n.jsx)(f.A, {
                      id: "chatgptConversations.imageOptions.templates.carousel",
                      defaultMessage: "Carousel",
                      description: "Button that switches the image template grid back to a horizontal carousel",
                    })
                  : (0, n.jsx)(f.A, {
                      id: "chatgptConversations.imageOptions.templates.viewAll",
                      defaultMessage: "View all",
                      description: "Button that switches the image template carousel to a grid of all templates",
                    }),
              })),
              (F[82] = ei),
              (F[83] = r))
            : (r = F[83]),
          F[84] !== ee
            ? ((s = ee.formatMessage({
                id: "chatgptConversations.imageOptions.templates.close",
                defaultMessage: "Close templates",
                description: "Button that closes the image template browser and restores focus to the Templates pill",
              })),
              (F[84] = ee),
              (F[85] = s))
            : (s = F[85]),
          F[86] === Symbol.for("react.memo_cache_sentinel") ? ((g = (0, n.jsx)(A.Gmf, {})), (F[86] = g)) : (g = F[86]),
          F[87] !== q || F[88] !== s
            ? ((p = (0, n.jsx)(I.$, {
                className: P.A.templateClose,
                unstyled: !0,
                focusRing: "none",
                autoFocus: !0,
                "aria-label": s,
                onClick: q,
                children: g,
              })),
              (F[87] = q),
              (F[88] = s),
              (F[89] = p))
            : (p = F[89]),
          F[90] !== r || F[91] !== p
            ? ((E = (0, n.jsxs)("div", { className: "flex shrink-0 items-center gap-3", children: [r, p] })),
              (F[90] = r),
              (F[91] = p),
              (F[92] = E))
            : (E = F[92]),
          F[93] !== a || F[94] !== E
            ? ((v = (0, n.jsxs)("header", { className: P.A.templateHeader, children: [a, E] })),
              (F[93] = a),
              (F[94] = E),
              (F[95] = v))
            : (v = F[95]),
          (R =
            null == u || 0 === u.length
              ? (0, n.jsxs)("div", {
                  className: P.A.templateEmpty,
                  role: "status",
                  children: [
                    Z.isError
                      ? (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)(f.A, {
                              id: "chatgptConversations.imageOptions.templates.error",
                              defaultMessage: "Couldn't load templates",
                              description: "Message shown when image generation templates could not be loaded",
                            }),
                            (0, n.jsx)(I.$, {
                              color: "secondary",
                              size: "dialog",
                              onClick: Z.onRetry,
                              children: (0, n.jsx)(f.A, {
                                id: "chatgptConversations.imageOptions.retry",
                                defaultMessage: "Try again",
                                description: "Action to retry loading image generation choices",
                              }),
                            }),
                          ],
                        })
                      : null,
                    !Z.isError && Z.isLoading
                      ? (0, n.jsx)(f.A, {
                          id: "chatgptConversations.imageOptions.templates.loading",
                          defaultMessage: "Loading templates…",
                          description: "Message shown while image generation templates load",
                        })
                      : null,
                    Z.isError || Z.isLoading
                      ? null
                      : (0, n.jsx)(f.A, {
                          id: "chatgptConversations.imageOptions.templates.empty",
                          defaultMessage: "No templates available",
                          description: "Message shown when no image generation templates are currently available",
                        }),
                  ],
                })
              : (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)("div", {
                      ref: (e) => {
                        if (((en.current = e), null == e)) return
                        W()
                        let t = new ResizeObserver(W)
                        return (t.observe(e), () => t.disconnect())
                      },
                      className: P.A.templateRail,
                      onScroll: W,
                      children: (ei ? u : u.slice(0, 8)).map((e) => {
                        let { item: t, group: a } = e
                        return (0, n.jsxs)(
                          I.$,
                          {
                            className: P.A.templateCard,
                            unstyled: !0,
                            focusRing: "none",
                            disabled: Z.disabled,
                            "aria-label": ee.formatMessage(
                              {
                                id: "chatgptConversations.imageOptions.templates.use",
                                defaultMessage: "Use {template} template",
                                description:
                                  "Accessible label of a button that selects an image generation template; template is the server-provided template title",
                              },
                              { template: t.title },
                            ),
                            onClick: () => {
                              ;(Q(), Z.onSelectPrompt(t, a))
                            },
                            children: [
                              (0, n.jsx)(
                                M,
                                { src: t.image_url ?? t.image_variant_urls?.[0] ?? t.image_variants?.[0] },
                                t.image_url,
                              ),
                              (0, n.jsx)("span", { children: t.title }),
                            ],
                          },
                          `${a.id}:${t.id}`,
                        )
                      }),
                    }),
                    !ei &&
                      (0, n.jsxs)("div", {
                        className: P.A.templateArrows,
                        children: [
                          (0, n.jsx)(I.$, {
                            unstyled: !0,
                            focusRing: "none",
                            "aria-disabled": !es.previous,
                            tabIndex: es.previous ? 0 : -1,
                            "aria-label": ee.formatMessage({
                              id: "chatgptConversations.imageOptions.templates.previous",
                              defaultMessage: "Previous templates",
                              description: "Scrolls the image generation template carousel to its previous cards",
                            }),
                            onClick: () => {
                              es.previous && $(-1)
                            },
                            children: (0, n.jsx)(h.I, { asset: _, "data-rtl-flip": "" }),
                          }),
                          (0, n.jsx)(I.$, {
                            unstyled: !0,
                            focusRing: "none",
                            "aria-disabled": !es.next,
                            tabIndex: es.next ? 0 : -1,
                            "aria-label": ee.formatMessage({
                              id: "chatgptConversations.imageOptions.templates.next",
                              defaultMessage: "Next templates",
                              description: "Scrolls the image generation template carousel to its next cards",
                            }),
                            onClick: () => {
                              es.next && $(1)
                            },
                            children: (0, n.jsx)(h.I, { asset: T.q, "data-rtl-flip": "" }),
                          }),
                        ],
                      }),
                  ],
                })),
          (F[13] = Z),
          (F[14] = es),
          (F[15] = el),
          (F[16] = z.triggerHeight),
          (F[17] = z.triggerWidth),
          (F[18] = z.width),
          (F[19] = ei),
          (F[20] = k),
          (F[21] = ee),
          (F[22] = q),
          (F[23] = Q),
          (F[24] = ed),
          (F[25] = J),
          (F[26] = K),
          (F[27] = et),
          (F[28] = ea),
          (F[29] = o),
          (F[30] = l),
          (F[31] = c),
          (F[32] = d),
          (F[33] = C),
          (F[34] = N),
          (F[35] = v),
          (F[36] = R),
          (F[37] = H),
          (F[38] = y),
          (F[39] = S),
          (F[40] = b),
          (F[41] = L),
          (F[42] = w),
          (F[43] = U),
          (F[44] = B),
          (F[45] = Y),
          (F[46] = x),
          (F[47] = D),
          (F[48] = X),
          (F[49] = V),
          (F[50] = j))
      } else
        ((o = F[29]),
          (l = F[30]),
          (c = F[31]),
          (d = F[32]),
          (C = F[33]),
          (N = F[34]),
          (v = F[35]),
          (R = F[36]),
          (H = F[37]),
          (y = F[38]),
          (S = F[39]),
          (b = F[40]),
          (L = F[41]),
          (w = F[42]),
          (U = F[43]),
          (B = F[44]),
          (Y = F[45]),
          (x = F[46]),
          (D = F[47]),
          (X = F[48]),
          (V = F[49]),
          (j = F[50]))
      return (
        F[96] !== o ||
        F[97] !== c ||
        F[98] !== d ||
        F[99] !== C ||
        F[100] !== N ||
        F[101] !== v ||
        F[102] !== R ||
        F[103] !== D ||
        F[104] !== X ||
        F[105] !== V ||
        F[106] !== j
          ? ((W = (0, n.jsxs)(o, {
              className: D,
              "aria-label": X,
              "data-view": V,
              style: j,
              initial: c,
              animate: d,
              exit: C,
              transition: N,
              children: [v, R],
            })),
            (F[96] = o),
            (F[97] = c),
            (F[98] = d),
            (F[99] = C),
            (F[100] = N),
            (F[101] = v),
            (F[102] = R),
            (F[103] = D),
            (F[104] = X),
            (F[105] = V),
            (F[106] = j),
            (F[107] = W))
          : (W = F[107]),
        F[108] !== l ||
        F[109] !== H ||
        F[110] !== y ||
        F[111] !== S ||
        F[112] !== b ||
        F[113] !== L ||
        F[114] !== w ||
        F[115] !== U ||
        F[116] !== B ||
        F[117] !== Y ||
        F[118] !== x ||
        F[119] !== W
          ? (($ = (0, n.jsxs)(l, {
              id: H,
              ref: y,
              className: S,
              inert: b,
              "aria-hidden": L,
              initial: w,
              animate: U,
              exit: B,
              transition: Y,
              children: [x, W],
            })),
            (F[108] = l),
            (F[109] = H),
            (F[110] = y),
            (F[111] = S),
            (F[112] = b),
            (F[113] = L),
            (F[114] = w),
            (F[115] = U),
            (F[116] = B),
            (F[117] = Y),
            (F[118] = x),
            (F[119] = W),
            (F[120] = $))
          : ($ = F[120]),
        $
      )
    }
    function O(e) {
      return !e
    }
    function G(e) {
      return e.items?.map((t) => ({ item: t, group: e })) ?? []
    }
    function M(e) {
      let t,
        a = (0, i.c)(3),
        { src: r } = e,
        [s, o] = (0, E.useState)(!1)
      return (
        a[0] !== s || a[1] !== r
          ? ((t =
              r && !s
                ? (0, n.jsx)("img", { src: r, alt: "", draggable: !1, onError: () => o(!0) })
                : (0, n.jsx)("div", {
                    className: "absolute inset-0 flex items-center justify-center text-tertiary",
                    children: (0, n.jsx)(A.pYT, {}),
                  })),
            (a[0] = s),
            (a[1] = r),
            (a[2] = t))
          : (t = a[2]),
        t
      )
    }
    function N(e) {
      let t,
        a,
        r,
        s,
        c,
        _,
        T,
        g,
        p,
        m,
        E = (0, i.c)(22)
      E[0] !== e
        ? (({
            composerContext: a,
            composer: t,
            controller: r,
            conversationId: s,
            disabled: c,
            referencePickerRef: T,
            ..._
          } = e),
          (E[0] = e),
          (E[1] = t),
          (E[2] = a),
          (E[3] = r),
          (E[4] = s),
          (E[5] = c),
          (E[6] = _),
          (E[7] = T))
        : ((t = E[1]), (a = E[2]), (r = E[3]), (s = E[4]), (c = E[5]), (_ = E[6]), (T = E[7]))
      let u = (0, l.a)()
      return (
        E[8] !== r || E[9] !== u
          ? ((g = () => u() && r.isInputActive && !r.view.isDestroyed && (0, o.BZ)(r.view.dom)),
            (E[8] = r),
            (E[9] = u),
            (E[10] = g))
          : (g = E[10]),
        E[11] !== _ ? ((p = (e) => (0, n.jsx)(v, { ...e, ..._ })), (E[11] = _), (E[12] = p)) : (p = E[12]),
        E[13] !== t ||
        E[14] !== a ||
        E[15] !== r ||
        E[16] !== s ||
        E[17] !== c ||
        E[18] !== T ||
        E[19] !== g ||
        E[20] !== p
          ? ((m = (0, n.jsx)(d.ImageSuggestions, {
              conversationId: s,
              composerController: r,
              composer: t,
              composerContext: a,
              disabled: c,
              referencePickerRef: T,
              isConversationCurrent: g,
              enableSuggestionsModal: !0,
              renderPrompts: p,
            })),
            (E[13] = t),
            (E[14] = a),
            (E[15] = r),
            (E[16] = s),
            (E[17] = c),
            (E[18] = T),
            (E[19] = g),
            (E[20] = p),
            (E[21] = m))
          : (m = E[21]),
        m
      )
    }
    function v(e) {
      let t,
        a,
        o,
        l,
        d,
        _,
        T,
        g,
        p,
        m,
        E,
        u = (0, i.c)(25)
      u[0] !== e
        ? (({
            open: _,
            visible: g,
            hidden: o,
            disabled: t,
            excludedPromptId: a,
            onBeforeSelectPrompt: l,
            onSelectPrompt: d,
            ...T
          } = e),
          (u[0] = e),
          (u[1] = t),
          (u[2] = a),
          (u[3] = o),
          (u[4] = l),
          (u[5] = d),
          (u[6] = _),
          (u[7] = T),
          (u[8] = g))
        : ((t = u[1]), (a = u[2]), (o = u[3]), (l = u[4]), (d = u[5]), (_ = u[6]), (T = u[7]), (g = u[8]))
      let f = _ && !o,
        I = (0, s.Ul)(f ? c.imagesCatalogQuery$ : null),
        h = (0, s.Ul)(f ? c.imagesStylesQuery$ : null),
        A = h?.data?.image_suggestions,
        P = null != A && A.length > 0
      if (
        u[9] !== I ||
        u[10] !== t ||
        u[11] !== f ||
        u[12] !== a ||
        u[13] !== P ||
        u[14] !== l ||
        u[15] !== d ||
        u[16] !== h ||
        u[17] !== A ||
        u[18] !== T ||
        u[19] !== g
      ) {
        let e = P
            ? [{ id: "image_suggestions", title: "", presentation: "image_card", action: {}, items: A }]
            : I?.data?.groups,
          i = h?.isError === !0 || (!P && I?.isError === !0),
          s = h?.isPending === !0 || (!P && I?.isPending === !0)
        ;((p = r.N),
          (m =
            f &&
            (g || !s || i) &&
            (0, n.jsx)(C, {
              ...T,
              catalog: {
                groups: e
                  ?.filter(R)
                  .map((e) => ({ ...e, items: e.items?.filter((e) => "Templates" === e.section && e.id !== a) })),
                isError: i,
                isLoading: s,
                disabled: !0 === t,
                onRetry: () => {
                  Promise.all([I?.refetch(), h?.refetch()])
                },
                onSelectPrompt: (e, a) => {
                  t || l?.() === !1 || d(e, a)
                },
              },
            })),
          (u[9] = I),
          (u[10] = t),
          (u[11] = f),
          (u[12] = a),
          (u[13] = P),
          (u[14] = l),
          (u[15] = d),
          (u[16] = h),
          (u[17] = A),
          (u[18] = T),
          (u[19] = g),
          (u[20] = p),
          (u[21] = m))
      } else ((p = u[20]), (m = u[21]))
      return (
        u[22] !== p || u[23] !== m
          ? ((E = (0, n.jsx)(p, { children: m })), (u[22] = p), (u[23] = m), (u[24] = E))
          : (E = u[24]),
        E
      )
    }
    function R(e) {
      return null == e.kind || "prompt_collection" === e.kind
    }
  },
  BA9i(e, t, a) {
    let n = "spreadsheets",
      i = "presentations",
      r = "documents",
      s = "openai-primary-runtime"
    function o(e, t) {
      return e.plugin.name === t && e.marketplaceName === s && e.plugin.id === `${t}@${s}`
    }
    a.d(
      t,
      {},
      {
        Bz: n,
        HZ: i,
        J4: "1288674243",
        V0: function (e) {
          return o(e, n)
        },
        _c: function (e) {
          return o(e, r)
        },
        ho: function (e) {
          return o(e, i)
        },
        kV: r,
        tN: "1623794951",
      },
    )
  },
  Fj96(e, t, a) {
    let n = (0, a("Qgfj").YK)({
      editNamedReference: {
        id: "chatgptConversations.referenceImages.menu.edit.ariaLabel",
        defaultMessage: "Edit {name}",
        description:
          "Accessible label for a used-reference row that opens the saved reference editor. The name placeholder is the reference's display name, such as Me or Mom.",
      },
      usedReferenceHeading: {
        id: "chatgptConversations.referenceImages.menu.used.heading",
        defaultMessage: "{count, plural, one {Reference} other {References}}",
        description:
          "Heading in a generated image's reference menu above the saved photos used to create that image. The count placeholder is the number of used reference photos. Each row opens the reference editor.",
      },
      recreateWithHeading: {
        id: "chatgptConversations.referenceImages.menu.recreate.heading",
        defaultMessage: "Recreate with",
        description:
          "Heading in a generated image's reference menu above other saved photos. Selecting one immediately generates a new version of the image using that reference.",
      },
      loadingReferences: {
        id: "chatgptConversations.referenceImages.menu.loading.label",
        defaultMessage: "Loading references…",
        description: "Status row in a generated image's reference menu while saved reference photos are loading",
      },
      retryReferences: {
        id: "chatgptConversations.referenceImages.menu.retry.label",
        defaultMessage: "Retry loading references",
        description:
          "Menu action to reload saved reference photos after the generated image's reference menu could not load them",
      },
      referenceActionError: {
        id: "chatgptConversations.referenceImages.menu.action.error",
        defaultMessage: "Couldn’t complete this action. Try again",
        description:
          "Error in a generated image's reference menu when opening reference details or starting a new image with a selected reference fails. The menu stays open so the user can retry.",
      },
      uploadImage: {
        id: "chatgptConversations.referenceImages.uploadImage",
        defaultMessage: "Upload image",
        description:
          "Button that selects a new candidate reference photo and opens the crop editor. The reference is saved only when the main form is submitted.",
      },
      dropImage: {
        id: "chatgptConversations.referenceImages.dropImage",
        defaultMessage: "Drop image to use as reference",
        description:
          "Overlay shown when dragging an image file onto a reference image modal. Dropping selects a candidate for editing; it does not save the reference yet.",
      },
      edit: {
        id: "chatgptConversations.referenceImages.edit",
        defaultMessage: "Edit",
        description: "Button label that opens the form to edit a saved reusable image reference",
      },
      editTitle: {
        id: "chatgptConversations.referenceImages.editTitle",
        defaultMessage: "Edit reference",
        description: "Title of the form for changing a saved reference image’s name, category, or photo",
      },
      replacePhoto: {
        id: "chatgptConversations.referenceImages.replacePhoto",
        defaultMessage: "Replace photo",
        description: "Button label that opens the file picker to replace a saved reference image’s photo",
      },
      deleteReference: {
        id: "chatgptConversations.referenceImages.deleteReference",
        defaultMessage: "Delete reference",
        description:
          "Button label for removing a saved reusable image reference without deleting its original Library image",
      },
      deleteTitle: {
        id: "chatgptConversations.referenceImages.deleteTitle",
        defaultMessage: "Delete reference?",
        description: "Title of the confirmation dialog for deleting a saved reusable image reference",
      },
      deleteDescription: {
        id: "chatgptConversations.referenceImages.deleteDescription",
        defaultMessage: "This reference will be removed. The original image will stay in your Library.",
        description:
          "Confirmation text explaining that deleting a saved reference removes the reference only and preserves its original image in Library",
      },
      deleteDescriptionSpace: {
        id: "chatgptConversations.referenceImages.deleteDescription.space",
        defaultMessage: "This reference will be removed. The original image will stay in your Space.",
        description:
          "Confirmation text explaining that deleting a saved reference removes the reference only and preserves its original image in Space. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
      },
      updateError: {
        id: "chatgptConversations.referenceImages.updateError",
        defaultMessage: "Couldn’t update the reference. Try again",
        description: "Error shown when updating the name, category, or photo of a saved reusable image reference fails",
      },
      deleteError: {
        id: "chatgptConversations.referenceImages.deleteError",
        defaultMessage: "Couldn’t delete the reference. Try again",
        description: "Error shown when deleting a saved reusable image reference fails",
      },
      updateSuccess: {
        id: "chatgptConversations.referenceImages.updateSuccess.reference",
        defaultMessage: "Updated your reference",
        description:
          "Success toast after editing the name, category, or photo of a saved reusable image reference, including a photo of the signed-in user",
      },
      deleteSuccess: {
        id: "chatgptConversations.referenceImages.deleteSuccess",
        defaultMessage: "Deleted {name} from your references",
        description: "Success message after deleting a reusable image reference, where name is its display name",
      },
      libraryManage: {
        id: "chatgptConversations.referenceImages.libraryManage",
        defaultMessage: "View reference {name}",
        description:
          "Accessible label for a saved reference chip that opens its editor, where name is the reference’s display name",
      },
      add: {
        id: "chatgptConversations.referenceImages.add",
        defaultMessage: "Add",
        description: "Short action label that opens a form for saving a suggested photo as a reusable image reference",
      },
      addReference: {
        id: "chatgptConversations.referenceImages.addReference",
        defaultMessage: "Add reference",
        description: "Button label that opens a form for uploading and saving a reusable image reference",
      },
      cancel: {
        id: "chatgptConversations.referenceImages.cancel",
        defaultMessage: "Cancel",
        description: "Button label that closes a reference image form without saving changes",
      },
      chooseImage: {
        id: "chatgptConversations.referenceImages.chooseImage",
        defaultMessage: "Choose image",
        description: "Button label that opens the system file picker to choose a reusable reference image",
      },
      confirmDescription: {
        id: "chatgptConversations.referenceImages.confirmDescription",
        defaultMessage:
          "ChatGPT can use this photo as a reference for future images. Only save photos you own or have permission to use.",
        description:
          "Helper text in the Save reference dialog explaining future reuse and reminding users to save only photos they own or have permission to use",
      },
      confirmTitle: {
        id: "chatgptConversations.referenceImages.confirmTitle",
        defaultMessage: "Save reference",
        description: "Title of the dialog for classifying and naming a reusable image reference before saving it",
      },
      uploadTitle: {
        id: "chatgptConversations.referenceImages.uploadTitle",
        defaultMessage: "Upload reference",
        description:
          "Title of the dialog for uploading, classifying, and naming a new reusable image reference from the user's device",
      },
      createError: {
        id: "chatgptConversations.referenceImages.createError",
        defaultMessage: "Couldn’t add the reference. Try again",
        description: "Error shown when uploading or saving a reusable image reference fails",
      },
      dismissSuggestion: {
        id: "chatgptConversations.referenceImages.dismissSuggestion",
        defaultMessage: "Dismiss reference suggestion",
        description: "Accessible label for dismissing a suggestion to save a photo as a reusable image reference",
      },
      entityAsset: {
        id: "chatgptConversations.referenceImages.entityAsset",
        defaultMessage: "Other",
        description: "Reference image category for an object or other subject that is not a person, pet, or place",
      },
      entityName: {
        id: "chatgptConversations.referenceImages.entityName",
        defaultMessage: "Name",
        description: "Label and placeholder for the name used to mention a saved image reference in future prompts",
      },
      entityPerson: {
        id: "chatgptConversations.referenceImages.entityPerson",
        defaultMessage: "Friends",
        description: "Reference image category for another person represented by the selected photo",
      },
      entityPet: {
        id: "chatgptConversations.referenceImages.entityPet",
        defaultMessage: "Pets",
        description: "Reference image category for a pet represented by the selected photo",
      },
      entityPlace: {
        id: "chatgptConversations.referenceImages.entityPlace",
        defaultMessage: "Spaces",
        description:
          "Reference image category for physical places or spaces represented by the selected photo, such as a room or garden; not the app's Spaces collections",
      },
      entitySelf: {
        id: "chatgptConversations.referenceImages.entitySelf",
        defaultMessage: "Me",
        description: "Reference image category for a photo representing the signed-in user",
      },
      entityType: {
        id: "chatgptConversations.referenceImages.entityType",
        defaultMessage: "Reference type",
        description: "Accessible label for the group of categories used to classify a reusable image reference",
      },
      firstUseDescription: {
        id: "chatgptConversations.referenceImages.firstUseDescription",
        defaultMessage: "Save your photos so ChatGPT can personalize future images.",
        description: "Description in the one-time introduction to reusable personal image references",
      },
      firstUsePreview: {
        id: "chatgptConversations.referenceImages.firstUsePreview.subject",
        defaultMessage:
          "Create an image of <reference>{entityType, select, self {me} pet {my pet} person {my friend} place {my space} named {{name}} other {this reference}}</reference>",
        description:
          "Example image-generation prompt in the one-time personal reference introduction. The reference tag displays a thumbnail beside the subject. entityType selects the subject: self is the signed-in user, pet is their pet, person is their friend, place is a physical space such as a room, named uses the supplied subject name, and other is an unnamed object or unknown category. Keep the prompt short.",
      },
      firstUseTitle: {
        id: "chatgptConversations.referenceImages.firstUseTitle",
        defaultMessage: "Make image creation easier",
        description: "Title of the one-time introduction to reusable personal image references",
      },
      firstUseTry: {
        id: "chatgptConversations.referenceImages.firstUseTry",
        defaultMessage: "Try it",
        description:
          "Button label that dismisses the one-time reference image introduction and continues to the save form",
      },
      libraryHeading: {
        id: "chatgptConversations.referenceImages.libraryHeading",
        defaultMessage: "References",
        description: "Heading above saved reusable image references at the start of the Library Images view",
      },
      moreReferencesCount: {
        id: "chatgptConversations.referenceImages.moreReferencesCount",
        defaultMessage: "+{count}",
        description:
          "Compact count after stacked reference thumbnails showing how many additional saved references were used, where count is the number not represented by a visible thumbnail",
      },
      reference: {
        id: "chatgptConversations.referenceImages.reference",
        defaultMessage: "Reference",
        description:
          "Compact label in a conversation suggestion offering to save a photo as a reusable image reference",
      },
      save: {
        id: "chatgptConversations.referenceImages.save",
        defaultMessage: "Save",
        description: "Primary button label that saves a reusable image reference",
      },
      saveSuccess: {
        id: "chatgptConversations.referenceImages.saveSuccess.library",
        defaultMessage: "Reference saved. You can manage your saved references in Library.",
        description:
          "Success toast after saving a reusable image reference, reminding users that they can manage their saved references in the Library section of the app",
      },
      saveSuccessSpace: {
        id: "chatgptConversations.referenceImages.saveSuccess.space",
        defaultMessage: "Reference saved. You can manage your saved references in Space.",
        description:
          "Success toast after saving a reusable image reference, reminding users that they can manage their saved references in the Space section of the app. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
      },
      selfEntityName: {
        id: "chatgptConversations.referenceImages.selfEntityName",
        defaultMessage: "Self",
        description:
          "Fixed canonical name saved for a reusable reference image representing the signed-in user; user-facing first-person copy may display Me or me instead",
      },
      selfMention: {
        id: "chatgptConversations.referenceImages.selfMention",
        defaultMessage: "me",
        description:
          "Lowercase first-person label shown after the at sign for the signed-in user’s own saved reference photo",
      },
      suggestionImageAlt: {
        id: "chatgptConversations.referenceImages.suggestionImageAlt",
        defaultMessage: "Suggested reference image",
        description: "Alt text for a photo that ChatGPT suggests saving as a reusable image reference",
      },
      overlayAddLabel: {
        id: "chatgptConversations.referenceImages.overlayAddLabel",
        defaultMessage: "Add this image as a reference",
        description:
          "Accessible label for an action over a generated image that saves a suggested reusable image reference",
      },
      usedReferencesLabel: {
        id: "chatgptConversations.referenceImages.usedReferencesLabel",
        defaultMessage: "{count, plural, one {Show the reference used} other {Show the # references used}}",
        description:
          "Accessible label for an action that shows the saved references used to create an image where count is the number used",
      },
    })
    a.d(t, {}, { T: n })
  },
  soaw(e, t, a) {
    var n = a("QosV"),
      i = a("zd8w")
    a.d(
      t,
      {},
      {
        a: function () {
          let e,
            t,
            a,
            r = (0, n.c)(3),
            s = (0, i.useRef)(!1)
          return (
            r[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = () => (
                  (s.current = !0),
                  () => {
                    s.current = !1
                  }
                )),
                (t = []),
                (r[0] = e),
                (r[1] = t))
              : ((e = r[0]), (t = r[1])),
            (0, i.useEffect)(e, t),
            r[2] === Symbol.for("react.memo_cache_sentinel") ? ((a = () => s.current), (r[2] = a)) : (a = r[2]),
            a
          )
        },
      },
    )
  },
}
//# sourceMappingURL=652279.c9471e9aa6.js.map
