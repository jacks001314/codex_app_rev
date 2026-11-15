export const __rspack_esm_ids = [720744]
export const __webpack_modules__ = {
  A5BN(e, t) {
    t.A = {
      bubble: "bubble-vBnidZ",
      leadingBubble: "leadingBubble-cWMRcI",
      compactMessageReaction: "compactMessageReaction-eDrjpw",
      compactMessageBubble: "compactMessageBubble-Th2OJ3",
      compactMessageContainer: "compactMessageContainer-yKAwtr",
      otherUserMessage: "otherUserMessage-ybPhKI",
      accentedBubble: "accentedBubble-gDhvQY",
      temporaryBubble: "temporaryBubble-aTxSAp",
      temporaryOutline: "temporaryOutline-bbkcxS",
    }
  },
  EIbe(e) {
    let t = [
        [
          { color: "0, 0, 0", class: "ansi-black" },
          { color: "187, 0, 0", class: "ansi-red" },
          { color: "0, 187, 0", class: "ansi-green" },
          { color: "187, 187, 0", class: "ansi-yellow" },
          { color: "0, 0, 187", class: "ansi-blue" },
          { color: "187, 0, 187", class: "ansi-magenta" },
          { color: "0, 187, 187", class: "ansi-cyan" },
          { color: "255,255,255", class: "ansi-white" },
        ],
        [
          { color: "85, 85, 85", class: "ansi-bright-black" },
          { color: "255, 85, 85", class: "ansi-bright-red" },
          { color: "0, 255, 0", class: "ansi-bright-green" },
          { color: "255, 255, 85", class: "ansi-bright-yellow" },
          { color: "85, 85, 255", class: "ansi-bright-blue" },
          { color: "255, 85, 255", class: "ansi-bright-magenta" },
          { color: "85, 255, 255", class: "ansi-bright-cyan" },
          { color: "255, 255, 255", class: "ansi-bright-white" },
        ],
      ],
      n = /(https?:\/\/(?:[A-Za-z0-9#;/?:@=+$',_.!~*()[\]-]|&amp;|%[A-Fa-f0-9]{2})+)/gm
    e.exports = class e {
      static escapeForHtml(t) {
        return new e().escapeForHtml(t)
      }
      static linkify(t) {
        return new e().linkify(t)
      }
      static ansiToHtml(t, n) {
        return new e().ansiToHtml(t, n)
      }
      static ansiToJson(t, n) {
        return new e().ansiToJson(t, n)
      }
      static ansiToText(t) {
        return new e().ansiToText(t)
      }
      constructor() {
        ;((this.fg = this.bg = this.fg_truecolor = this.bg_truecolor = null),
          (this.bright = 0),
          (this.decorations = []))
      }
      setupPalette() {
        this.PALETTE_COLORS = []
        for (let e = 0; e < 2; ++e) for (let n = 0; n < 8; ++n) this.PALETTE_COLORS.push(t[e][n].color)
        let e = [0, 95, 135, 175, 215, 255],
          n = (t, n, a) => e[t] + ", " + e[n] + ", " + e[a]
        for (let e = 0; e < 6; ++e)
          for (let t = 0; t < 6; ++t) for (let a = 0; a < 6; ++a) this.PALETTE_COLORS.push(n(e, t, a))
        let a = 8
        for (let e = 0; e < 24; ++e, a += 10) this.PALETTE_COLORS.push(a + ", " + a + ", " + a)
      }
      escapeForHtml(e) {
        return e.replace(/[&<>\"]/gm, (e) =>
          "&" == e ? "&amp;" : '"' == e ? "&quot;" : "<" == e ? "&lt;" : ">" == e ? "&gt;" : "",
        )
      }
      linkify(e) {
        return e.replace(n, (e) => `<a href="${e}">${e}</a>`)
      }
      ansiToHtml(e, t) {
        return this.process(e, t, !0)
      }
      ansiToJson(e, t) {
        return (((t = t || {}).json = !0), (t.clearLine = !1), this.process(e, t, !0))
      }
      ansiToText(e) {
        return this.process(e, {}, !1)
      }
      process(e, t, n) {
        let a = e.split(/\033\[/),
          s = a.shift()
        ;(null == t && (t = {}), (t.clearLine = /\r/.test(e)))
        let i = a.map((e) => this.processChunk(e, t, n))
        if (t && t.json) {
          let e = this.processChunkJson("")
          return (
            (e.content = s),
            (e.clearLine = t.clearLine),
            i.unshift(e),
            t.remove_empty && (i = i.filter((e) => !e.isEmpty())),
            i
          )
        }
        return (i.unshift(s), i.join(""))
      }
      processChunkJson(e, n, a) {
        let s = ((n = void 0 === n ? {} : n).use_classes = void 0 !== n.use_classes && n.use_classes),
          i = (n.key = s ? "class" : "color"),
          l = {
            content: e,
            fg: null,
            bg: null,
            fg_truecolor: null,
            bg_truecolor: null,
            isInverted: !1,
            clearLine: n.clearLine,
            decoration: null,
            decorations: [],
            was_processed: !1,
            isEmpty: () => !l.content,
          },
          o = e.match(/^([!\x3c-\x3f]*)([\d;]*)([\x20-\x2c]*[\x40-\x7e])([\s\S]*)/m)
        if (!o) return l
        l.content = o[4]
        let r = o[2].split(";")
        if ("" !== o[1] || "m" !== o[3] || !a) return l
        for (; r.length > 0;) {
          let e = parseInt(r.shift())
          if (isNaN(e) || 0 === e) ((this.fg = this.bg = null), (this.decorations = []))
          else if (1 === e) this.decorations.push("bold")
          else if (2 === e) this.decorations.push("dim")
          else if (3 === e) this.decorations.push("italic")
          else if (4 === e) this.decorations.push("underline")
          else if (5 === e) this.decorations.push("blink")
          else if (7 === e) this.decorations.push("reverse")
          else if (8 === e) this.decorations.push("hidden")
          else if (9 === e) this.decorations.push("strikethrough")
          else if (21 === e) this.removeDecoration("bold")
          else if (22 === e) (this.removeDecoration("bold"), this.removeDecoration("dim"))
          else if (23 === e) this.removeDecoration("italic")
          else if (24 === e) this.removeDecoration("underline")
          else if (25 === e) this.removeDecoration("blink")
          else if (27 === e) this.removeDecoration("reverse")
          else if (28 === e) this.removeDecoration("hidden")
          else if (29 === e) this.removeDecoration("strikethrough")
          else if (39 === e) this.fg = null
          else if (49 === e) this.bg = null
          else if (e >= 30 && e < 38) this.fg = t[0][e % 10][i]
          else if (e >= 90 && e < 98) this.fg = t[1][e % 10][i]
          else if (e >= 40 && e < 48) this.bg = t[0][e % 10][i]
          else if (e >= 100 && e < 108) this.bg = t[1][e % 10][i]
          else if (38 === e || 48 === e) {
            let n = 38 === e
            if (r.length >= 1) {
              let e = r.shift()
              if ("5" === e && r.length >= 1) {
                let e = parseInt(r.shift())
                if (e >= 0 && e <= 255)
                  if (s) {
                    let a = e >= 16 ? "ansi-palette-" + e : t[+(e > 7)][e % 8].class
                    n ? (this.fg = a) : (this.bg = a)
                  } else
                    (this.PALETTE_COLORS || this.setupPalette(),
                      n ? (this.fg = this.PALETTE_COLORS[e]) : (this.bg = this.PALETTE_COLORS[e]))
              } else if ("2" === e && r.length >= 3) {
                let e = parseInt(r.shift()),
                  t = parseInt(r.shift()),
                  a = parseInt(r.shift())
                if (e >= 0 && e <= 255 && t >= 0 && t <= 255 && a >= 0 && a <= 255) {
                  let i = e + ", " + t + ", " + a
                  s
                    ? n
                      ? ((this.fg = "ansi-truecolor"), (this.fg_truecolor = i))
                      : ((this.bg = "ansi-truecolor"), (this.bg_truecolor = i))
                    : n
                      ? (this.fg = i)
                      : (this.bg = i)
                }
              }
            }
          }
        }
        return (
          (null === this.fg && null === this.bg && 0 === this.decorations.length) ||
            ((l.fg = this.fg),
            (l.bg = this.bg),
            (l.fg_truecolor = this.fg_truecolor),
            (l.bg_truecolor = this.bg_truecolor),
            (l.decorations = this.decorations),
            (l.decoration = this.decorations.slice(-1).pop() || null),
            (l.was_processed = !0)),
          l
        )
      }
      processChunk(e, n, a) {
        n = n || {}
        let s = this.processChunkJson(e, n, a),
          i = n.use_classes
        if (
          ((s.decorations = s.decorations.filter((e) => {
            if ("reverse" === e) {
              ;(s.fg || (s.fg = t[0][7][i ? "class" : "color"]), s.bg || (s.bg = t[0][0][i ? "class" : "color"]))
              let e = s.fg
              ;((s.fg = s.bg), (s.bg = e))
              let n = s.fg_truecolor
              return ((s.fg_truecolor = s.bg_truecolor), (s.bg_truecolor = n), (s.isInverted = !0), !1)
            }
            return !0
          })),
          n.json)
        )
          return s
        if (s.isEmpty()) return ""
        if (!s.was_processed) return s.content
        let l = [],
          o = [],
          r = [],
          c = {},
          d = (e) => {
            let t,
              n = []
            for (t in e) e.hasOwnProperty(t) && n.push("data-" + t + '="' + this.escapeForHtml(e[t]) + '"')
            return n.length > 0 ? " " + n.join(" ") : ""
          }
        return (s.isInverted && (c["ansi-is-inverted"] = "true"),
        s.fg &&
          (i
            ? (l.push(s.fg + "-fg"),
              null !== s.fg_truecolor && ((c["ansi-truecolor-fg"] = s.fg_truecolor), (s.fg_truecolor = null)))
            : l.push("color:rgb(" + s.fg + ")")),
        s.bg &&
          (i
            ? (l.push(s.bg + "-bg"),
              null !== s.bg_truecolor && ((c["ansi-truecolor-bg"] = s.bg_truecolor), (s.bg_truecolor = null)))
            : l.push("background-color:rgb(" + s.bg + ")")),
        s.decorations.forEach((e) => {
          i
            ? o.push("ansi-" + e)
            : "bold" === e
              ? o.push("font-weight:bold")
              : "dim" === e
                ? o.push("opacity:0.5")
                : "italic" === e
                  ? o.push("font-style:italic")
                  : "hidden" === e
                    ? o.push("visibility:hidden")
                    : "strikethrough" === e
                      ? r.push("line-through")
                      : r.push(e)
        }),
        r.length && o.push("text-decoration:" + r.join(" ")),
        i)
          ? '<span class="' + l.concat(o).join(" ") + '"' + d(c) + ">" + s.content + "</span>"
          : '<span style="' + l.concat(o).join(";") + '"' + d(c) + ">" + s.content + "</span>"
      }
      removeDecoration(e) {
        let t = this.decorations.indexOf(e)
        t >= 0 && this.decorations.splice(t, 1)
      }
    }
  },
  bZHk(e, t, n) {
    var a = n("ABep")
    ;(n("zd8w"),
      (t.A = (e) =>
        (0, a.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          "data-rtl-flip": "",
          ...e,
          children: (0, a.jsx)("path", {
            d: "M16.3965 5.01128C16.3963 4.93399 16.3489 4.87691 16.293 4.85406L16.2354 4.84332C13.9306 4.91764 12.5622 5.32101 10.665 6.34722V16.3716C11.3851 15.9994 12.0688 15.7115 12.7861 15.5015C13.8286 15.1965 14.9113 15.0633 16.2402 15.0435L16.2979 15.0308C16.353 15.0063 16.3965 14.9483 16.3965 14.8755V5.01128ZM3.54492 14.8765C3.54492 14.9725 3.62159 15.0422 3.70117 15.0435L4.19629 15.0562C5.94062 15.1247 7.26036 15.4201 8.65918 16.0484C8.05544 15.1706 7.14706 14.436 6.17871 14.1109V14.1099C5.56757 13.9045 5.16816 13.3314 5.16797 12.6988V4.98882C4.86679 4.93786 4.60268 4.8999 4.28223 4.87457L3.72754 4.84429C3.62093 4.84079 3.54505 4.92417 3.54492 5.01226V14.8765ZM17.7266 14.8755C17.7266 15.6314 17.1607 16.2751 16.4121 16.3628L16.2598 16.3736C15.0122 16.3922 14.0555 16.5159 13.1602 16.7779C12.2629 17.0404 11.3966 17.4508 10.3369 18.0738C10.129 18.1959 9.87099 18.1958 9.66309 18.0738C7.71455 16.9283 6.31974 16.4689 4.12988 16.3853L3.68164 16.3736C2.85966 16.3614 2.21484 15.6838 2.21484 14.8765V5.01226C2.21497 4.15391 2.93263 3.4871 3.77246 3.51519L4.39844 3.54937C4.67996 3.57191 4.92258 3.60421 5.16797 3.64214V2.51031C5.16797 1.44939 6.29018 0.645615 7.31055 1.15679L7.31152 1.15582C8.78675 1.89511 10.0656 3.33006 10.5352 4.91461C12.3595 3.98907 13.8688 3.58817 16.1924 3.51324L16.3506 3.51714C17.1285 3.5741 17.7264 4.23496 17.7266 5.01128V14.8755ZM6.49805 12.6988C6.49824 12.7723 6.5442 12.8296 6.60254 12.8492L6.96289 12.9859C7.85245 13.3586 8.68125 13.9846 9.33496 14.7496V5.5816C9.08794 4.37762 8.13648 3.1566 6.95801 2.47613L6.71582 2.34527C6.67779 2.32617 6.6337 2.32502 6.58301 2.35796C6.52946 2.39279 6.49805 2.44863 6.49805 2.51031V12.6988Z",
          }),
        })))
  },
  Bipk(e, t, n) {
    var a = n("ABep")
    ;(n("zd8w"),
      (t.A = (e) =>
        (0, a.jsx)("svg", {
          width: 10,
          height: 10,
          viewBox: "0 0 10 10",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, a.jsx)("g", {
            children: (0, a.jsx)("path", {
              d: "M8.13037 3.71927L5.33252 5.20023V8.42289L7.89697 6.94242L7.94873 6.90775C8.06253 6.82002 8.13037 6.68363 8.13037 6.53763V3.71927ZM5.23389 1.52005C5.10743 1.44704 4.95515 1.43799 4.82227 1.49271L4.7666 1.52005L2.16309 3.0225L5.00488 4.62113L7.92383 3.07572L7.89697 3.05765L5.23389 1.52005ZM1.86963 6.53763C1.86963 6.70452 1.95852 6.85894 2.10303 6.94242L4.66748 8.4224V5.19437L1.86963 3.62015V6.53763ZM8.79541 6.53763C8.79541 6.91694 8.60593 7.26936 8.29346 7.47855L8.22949 7.5181L5.56641 9.0557C5.23795 9.24533 4.83786 9.2573 4.50049 9.09134L4.43408 9.0557L1.77051 7.5181C1.42032 7.31582 1.20459 6.94206 1.20459 6.53763V3.46244C1.20459 3.05801 1.42032 2.68425 1.77051 2.48197L4.43408 0.94437L4.50049 0.908726C4.83786 0.742764 5.23795 0.754738 5.56641 0.94437L8.22949 2.48197L8.29346 2.52152C8.60593 2.7307 8.79541 3.08313 8.79541 3.46244V6.53763Z",
              fill: "currentColor",
            }),
          }),
        })))
  },
  hoDf(e, t, n) {
    var a = n("ABep")
    ;(n("zd8w"),
      (t.A = (e) =>
        (0, a.jsxs)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, a.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M9.06543 1.95123C9.66107 1.69076 10.3389 1.69071 10.9346 1.95123L15.9346 4.13873C16.7832 4.51008 17.3311 5.34917 17.3311 6.27545V10.5528C17.3309 14.6017 14.0489 17.8847 10 17.8848C5.95108 17.8846 2.66813 14.6017 2.66797 10.5528V6.27545C2.66797 5.34924 3.21695 4.51012 4.06543 4.13873L9.06543 1.95123ZM10.4014 3.16998C10.1456 3.05814 9.85444 3.05819 9.59863 3.16998L4.59863 5.35748C4.23427 5.51708 3.99805 5.87764 3.99805 6.27545V10.5528C3.99821 13.8671 6.68563 16.5546 10 16.5547C13.3144 16.5546 16.0008 13.8671 16.001 10.5528V6.27545C16.001 5.87756 15.7658 5.51703 15.4014 5.35748L10.4014 3.16998Z",
              fill: "currentColor",
            }),
            (0, a.jsx)("path", {
              d: "M13.4678 11.4318L13.333 11.4182H10.833C10.466 11.4183 10.1682 11.7162 10.168 12.0832C10.168 12.4504 10.4659 12.7481 10.833 12.7482H13.333L13.4678 12.7346C13.7706 12.6724 13.9981 12.4044 13.9981 12.0832C13.9979 11.7621 13.7706 11.494 13.4678 11.4318Z",
              fill: "currentColor",
            }),
            (0, a.jsx)("path", {
              d: "M7.65336 12.426C7.46431 12.7406 7.05607 12.8424 6.74125 12.6535C6.42646 12.4646 6.32395 12.0563 6.51274 11.7414L7.55668 10.0002L6.51274 8.25899C6.32395 7.94412 6.42646 7.53583 6.74125 7.34688C7.05607 7.15799 7.46431 7.25975 7.65336 7.57442L8.90336 9.6584C9.0296 9.86893 9.0296 10.1315 8.90336 10.342L7.65336 12.426Z",
              fill: "currentColor",
            }),
          ],
        })))
  },
  naCq(e, t, n) {
    var a = n("ABep")
    ;(n("zd8w"),
      (t.A = (e) =>
        (0, a.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, a.jsx)("path", {
            d: "M9.75122 4.09203C9.75122 3.61482 9.21964 3.35044 8.84399 3.60277L8.77173 3.66039L6.55396 5.69262C6.05931 6.14604 5.43173 6.42255 4.7688 6.48461L4.48267 6.49828C3.52474 6.49851 2.74829 7.27565 2.74829 8.23363V11.7668C2.74829 12.7248 3.52474 13.501 4.48267 13.5012C5.24935 13.5012 5.98874 13.7889 6.55396 14.3069L8.77173 16.3401L8.84399 16.3967C9.21966 16.6493 9.75122 16.3858 9.75122 15.9084V4.09203ZM17.2483 10.0002C17.2483 8.67623 16.9128 7.43233 16.3235 6.34691L17.4924 5.71215C18.1849 6.9875 18.5784 8.4491 18.5784 10.0002C18.5783 11.5143 18.2033 12.9429 17.5413 14.1965C17.3697 14.5212 16.9675 14.6453 16.6428 14.4739C16.3182 14.3023 16.194 13.9001 16.3655 13.5754C16.9288 12.5086 17.2483 11.2927 17.2483 10.0002ZM13.9182 10.0002C13.9182 9.1174 13.6268 8.30445 13.135 7.64965L14.1985 6.85082C14.8574 7.72804 15.2483 8.81952 15.2483 10.0002L15.2336 10.3938C15.166 11.3044 14.8657 12.1515 14.3918 12.8743L14.3069 12.9797C14.0889 13.199 13.7396 13.2418 13.4709 13.0657C13.164 12.8643 13.0784 12.4528 13.2795 12.1457L13.4231 11.9084C13.6935 11.4246 13.8643 10.8776 13.9075 10.2942L13.9182 10.0002ZM13.2678 6.71801C13.5615 6.49772 13.978 6.55727 14.1985 6.85082L13.135 7.64965C12.9144 7.35599 12.9742 6.93858 13.2678 6.71801ZM16.5911 5.44555C16.9138 5.27033 17.3171 5.38949 17.4924 5.71215L16.3235 6.34691C16.1483 6.02419 16.2684 5.62081 16.5911 5.44555ZM11.0813 15.9084C11.0813 17.5226 9.22237 18.3912 7.9895 17.4202L7.87231 17.3205L5.65552 15.2873C5.33557 14.9941 4.91667 14.8313 4.48267 14.8313C2.7902 14.8311 1.41821 13.4594 1.41821 11.7668V8.23363C1.41821 6.54111 2.7902 5.16843 4.48267 5.1682L4.64478 5.16039C5.02003 5.12526 5.37552 4.96881 5.65552 4.71215L7.87231 2.67992L7.9895 2.58031C9.22237 1.60902 11.0813 2.47773 11.0813 4.09203V15.9084Z",
          }),
        })))
  },
  H2PD(e, t, n) {
    var a = n("ABep")
    ;(n("zd8w"),
      (t.A = (e) =>
        (0, a.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, a.jsx)("path", {
            d: "M15.998 10.833C15.9978 8.439 14.0571 6.49805 11.663 6.49805H4.9355L7.13374 8.69629L7.2187 8.80078C7.38911 9.05884 7.36084 9.40947 7.13374 9.63672C6.90652 9.86394 6.55592 9.89207 6.2978 9.72168L6.19331 9.63672L2.85932 6.30371C2.5999 6.04411 2.60001 5.62295 2.85932 5.36328L6.19331 2.0293C6.45298 1.76998 6.87414 1.76987 7.13374 2.0293C7.39344 2.289 7.39344 2.711 7.13374 2.9707L4.93647 5.16797H11.663C14.7916 5.16797 17.3279 7.70446 17.3281 10.833C17.3281 13.9617 14.7917 16.498 11.663 16.498H8.33003C7.96276 16.498 7.66499 16.2003 7.66499 15.833C7.66516 15.4659 7.96287 15.168 8.33003 15.168H11.663C14.0572 15.168 15.998 13.2272 15.998 10.833Z",
            fill: "currentColor",
          }),
        })))
  },
  ycOY(e, t, n) {
    let a = "PLEASE IMPLEMENT THIS PLAN:"
    n.d(
      t,
      {},
      {
        B: a,
        y: function (e) {
          return e.startsWith(a)
        },
      },
    )
  },
  GqUU(e, t, n) {
    n.d(t, { D: () => g })
    var a = n("ABep"),
      s = n("QosV"),
      i = n("slpy"),
      l = n("TgqN")
    let o = (0, n("iJY0").a)({
      name: "play-sm-fill-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 6.327148, y: 4.669922, width: 8.78894, height: 10.661133 },
        visualBounds: { x: 6.327148, y: 4.669922, width: 8.78894, height: 10.661133 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 6.327148, y: 4.669922, width: 8.78894, height: 10.661133 },
        center: { x: 10.721618, y: 10.000489 },
        insets: { top: 4.669922, right: 4.883912, bottom: 4.668945, left: 6.327148 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 10.721618, y: 10.000489 },
          foreground: { x: 10.721618, y: 10.000489 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M6.32715 5.8633C6.32717 4.9197 7.37234 4.35054 8.16504 4.86232L14.5713 9.00001C15.2977 9.46938 15.2978 10.5317 14.5713 11.001L8.16504 15.1387C7.3724 15.6503 6.32728 15.0812 6.32715 14.1377V5.8633Z" fill="currentColor"/>',
    })
    var r = n("on57"),
      c = n("zd8w"),
      d = n("Wf1j"),
      u = n("Sm6l"),
      m = n("HOLv"),
      p = n("bVeK"),
      h = n("RNul"),
      f = n("XxG6")
    function g(e) {
      let t,
        n,
        g,
        x,
        v,
        y,
        w,
        b,
        C,
        j,
        A,
        I,
        k,
        M,
        S,
        N,
        T,
        _,
        R,
        P,
        L,
        D = (0, s.c)(71),
        {
          dictation: F,
          durationSeconds: E,
          fileName: O,
          mimeType: U,
          resolveSrc: B,
          resolveDownloadSrc: z,
          onPlaybackError: q,
          src: W,
          isLoading: H,
        } = e,
        G = void 0 !== F && F,
        V = (0, d.A)(),
        $ = (0, c.useRef)(null),
        K = (0, c.useRef)(null),
        Z = (0, c.useRef)(null),
        Q = (0, c.useRef)(!1),
        J = (0, c.useRef)(!1),
        Y = (0, c.useRef)(0),
        [X, ee] = (0, c.useState)(),
        [et, en] = (0, c.useState)(),
        [ea, es] = (0, c.useState)(!1),
        [ei, el] = (0, c.useState)(!1),
        [eo, er] = (0, c.useState)(!1),
        [ec, ed] = (0, c.useState)(!1),
        [eu, em] = (0, c.useState)(!1),
        [ep, eh] = (0, c.useState)(0),
        [ef, eg] = (0, c.useState)()
      ;(D[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => {
            let e = $.current
            return () => {
              ;((J.current = !1), (Y.current = Y.current + 1), K.current?.abort(), Z.current?.abort(), e?.pause())
            }
          }),
          (n = []),
          (D[0] = t),
          (D[1] = n))
        : ((t = D[0]), (n = D[1])),
        (0, c.useEffect)(t, n),
        D[2] !== q || D[3] !== B
          ? ((g = async function () {
              let e = $.current
              if (null == e || null == B || null != K.current) return !1
              let t = new AbortController()
              return (
                (K.current = t),
                es(!0),
                B(t.signal)
                  .then((n) => !t.signal.aborted && ((e.src = n), ee(n), !0))
                  .catch((e) => (t.signal.aborted || q?.(e), !1))
                  .finally(() => {
                    t.signal.aborted || ((K.current = null), es(!1))
                  })
              )
            }),
            (D[2] = q),
            (D[3] = B),
            (D[4] = g))
          : (g = D[4]))
      let ex = g
      D[5] !== et || D[6] !== q || D[7] !== z
        ? ((x = async function () {
            if (((J.current = !1), er(!0), null == z || null != et || null != Z.current)) return
            let e = new AbortController()
            return (
              (Z.current = e),
              el(!0),
              z(e.signal)
                .then((t) => {
                  e.signal.aborted || en(t)
                })
                .catch((t) => {
                  e.signal.aborted || q?.(t)
                })
                .finally(() => {
                  e.signal.aborted || ((Z.current = null), el(!1))
                })
            )
          }),
          (D[5] = et),
          (D[6] = q),
          (D[7] = z),
          (D[8] = x))
        : (x = D[8])
      let ev = x
      D[9] !== q
        ? ((v = async function () {
            let e = $.current
            if (null == e || !J.current) return
            let t = (Y.current = Y.current + 1)
            try {
              await e.play()
            } catch (e) {
              t === Y.current && J.current && ((J.current = !1), q?.(e))
            }
          }),
          (D[9] = q),
          (D[10] = v))
        : (v = D[10])
      let ey = v
      D[11] !== ex || D[12] !== U || D[13] !== ey || D[14] !== X || D[15] !== ev || D[16] !== W
        ? ((y = async function () {
            let e = $.current
            if (null != e) {
              if (!e.paused) {
                ;((J.current = !1), e.pause())
                return
              }
              if (((J.current = !0), null == W && null == X && !(await ex()))) {
                J.current = !1
                return
              }
              if (null != U && "" === e.canPlayType(U)) return void (await ev())
              await ey()
            }
          }),
          (D[11] = ex),
          (D[12] = U),
          (D[13] = ey),
          (D[14] = X),
          (D[15] = ev),
          (D[16] = W),
          (D[17] = y))
        : (y = D[17])
      let ew = y
      D[18] !== O || D[19] !== V || D[20] !== ec
        ? ((w = ec
            ? V.formatMessage(
                {
                  id: "chatgpt.audioAttachment.pause",
                  defaultMessage: "Pause {fileName}",
                  description:
                    "Accessible label and tooltip for pausing a sent audio attachment; the filename distinguishes recordings in the same message",
                },
                { fileName: O },
              )
            : V.formatMessage(
                {
                  id: "chatgpt.audioAttachment.play",
                  defaultMessage: "Play {fileName}",
                  description:
                    "Accessible label and tooltip for playing a sent audio attachment; the filename distinguishes recordings in the same message",
                },
                { fileName: O },
              )),
          (D[18] = O),
          (D[19] = V),
          (D[20] = ec),
          (D[21] = w))
        : (w = D[21])
      let eb = w
      D[22] !== O || D[23] !== V
        ? ((b = V.formatMessage(
            {
              id: "chatgpt.audioAttachment.download",
              defaultMessage: "Download {fileName}",
              description:
                "Accessible label and tooltip for downloading a sent audio attachment when its format cannot play in this browser",
            },
            { fileName: O },
          )),
          (D[22] = O),
          (D[23] = V),
          (D[24] = b))
        : (b = D[24])
      let eC = b,
        ej = et ?? (null == z ? (W ?? X) : void 0),
        eA = (void 0 !== H && H) || ea || ei
      D[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = (0, a.jsx)(m.I, { asset: o })), (D[25] = C))
        : (C = D[25])
      let eI = C
      if (eA) {
        let e
        ;(D[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.y, { className: "icon-xs" })), (D[26] = e))
          : (e = D[26]),
          (eI = e))
      } else if (eo) {
        let e
        ;(D[27] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, a.jsx)(p.vHO, {})), (D[27] = e)) : (e = D[27]),
          (eI = e))
      } else if (ec) {
        let e
        ;(D[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(m.I, { asset: l.I })), (D[28] = e))
          : (e = D[28]),
          (eI = e))
      }
      let ek = G ? "h-11 bg-text/5 dark:bg-text/10 pe-3" : "h-9 bg-surface-tertiary"
      ;(D[29] !== ek
        ? ((j = (0, r.A)("flex w-fit max-w-full items-center gap-2 rounded-full px-2 text-default select-none", ek)),
          (D[29] = ek),
          (D[30] = j))
        : (j = D[30]),
        D[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = (e) => {
              Number.isFinite(e.currentTarget.duration) && eg(e.currentTarget.duration)
            }),
            (I = () => {
              ;(ed(!0), em(!0))
            }),
            (k = () => ed(!1)),
            (M = () => {
              ;((J.current = !1), ed(!1), em(!1), eh(0))
            }),
            (S = (e) => eh(e.currentTarget.currentTime)),
            (D[31] = A),
            (D[32] = I),
            (D[33] = k),
            (D[34] = M),
            (D[35] = S))
          : ((A = D[31]), (I = D[32]), (k = D[33]), (M = D[34]), (S = D[35])),
        D[36] !== ex || D[37] !== q || D[38] !== ey || D[39] !== B || D[40] !== ev
          ? ((N = (e) => {
              let t = e.currentTarget.error
              if ((ed(!1), t?.code === MediaError.MEDIA_ERR_NETWORK && !Q.current && null != B)) {
                ;((Q.current = !0),
                  (Y.current = Y.current + 1),
                  ee(void 0),
                  e.currentTarget.removeAttribute("src"),
                  ex().then((e) => {
                    null != $.current && (e ? ey() : ev())
                  }))
                return
              }
              ;(ev(), q?.(t ?? Error("Audio playback failed")))
            }),
            (D[36] = ex),
            (D[37] = q),
            (D[38] = ey),
            (D[39] = B),
            (D[40] = ev),
            (D[41] = N))
          : (N = D[41]),
        D[42] !== W || D[43] !== N
          ? ((T = (0, a.jsx)("audio", {
              ref: $,
              src: W,
              preload: "metadata",
              onDurationChange: A,
              onPlay: I,
              onPause: k,
              onEnded: M,
              onTimeUpdate: S,
              onError: N,
            })),
            (D[42] = W),
            (D[43] = N),
            (D[44] = T))
          : (T = D[44]))
      let eM = eo ? eC : eb
      ;(D[45] !== eA ||
      D[46] !== eI ||
      D[47] !== G ||
      D[48] !== eC ||
      D[49] !== ej ||
      D[50] !== O ||
      D[51] !== eb ||
      D[52] !== B ||
      D[53] !== ev ||
      D[54] !== W ||
      D[55] !== ew ||
      D[56] !== eo
        ? ((_ =
            eo && null != ej
              ? (0, a.jsx)(u.z, {
                  size: G ? "imageActionIcon" : "iconCircleSm",
                  color: "secondary",
                  radius: "full",
                  href: ej,
                  download: O,
                  "aria-label": eC,
                  children: (0, a.jsx)(p.vHO, {}),
                })
              : (0, a.jsx)(u.$, {
                  size: G ? "imageActionIcon" : "iconCircleSm",
                  color: "secondary",
                  radius: "full",
                  "aria-label": eo ? eC : eb,
                  disabled: eA || (!eo && null == W && null == B),
                  onClick: () => {
                    eo ? ev() : ew()
                  },
                  children: eI,
                })),
          (D[45] = eA),
          (D[46] = eI),
          (D[47] = G),
          (D[48] = eC),
          (D[49] = ej),
          (D[50] = O),
          (D[51] = eb),
          (D[52] = B),
          (D[53] = ev),
          (D[54] = W),
          (D[55] = ew),
          (D[56] = eo),
          (D[57] = _))
        : (_ = D[57]),
        D[58] !== G || D[59] !== eM || D[60] !== _
          ? ((R = (0, a.jsx)(i.m, { disabled: G, content: eM, children: _ })),
            (D[58] = G),
            (D[59] = eM),
            (D[60] = _),
            (D[61] = R))
          : (R = D[61]))
      let eS = eu ? ep : (ef ?? E)
      return (
        D[62] !== G || D[63] !== eS
          ? ((P = (0, a.jsx)(f.Q, { dictation: G, durationSeconds: eS })), (D[62] = G), (D[63] = eS), (D[64] = P))
          : (P = D[64]),
        D[65] !== eA || D[66] !== j || D[67] !== T || D[68] !== R || D[69] !== P
          ? ((L = (0, a.jsxs)("div", {
              className: j,
              "aria-busy": eA,
              "data-testid": "audio-attachment-player",
              children: [T, R, P],
            })),
            (D[65] = eA),
            (D[66] = j),
            (D[67] = T),
            (D[68] = R),
            (D[69] = P),
            (D[70] = L))
          : (L = D[70]),
        L
      )
    }
  },
  EhUl(e, t, n) {
    n.d(t, { V: () => g })
    var a = n("ABep"),
      s = n("QosV"),
      i = n("slpy"),
      l = n("on57"),
      o = n("zTeN"),
      r = n("Wf1j"),
      c = n("ChYf"),
      d = n("Sm6l"),
      u = n("RNul"),
      m = n("naCq")
    n("zd8w")
    var p = (e) =>
        (0, a.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, a.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10 2.08496C14.3713 2.08496 17.915 5.62867 17.915 10C17.915 14.3713 14.3713 17.915 10 17.915C5.62867 17.915 2.08496 14.3713 2.08496 10C2.08496 5.62867 5.62867 2.08496 10 2.08496ZM8.25 7.25C7.69772 7.25 7.25 7.69772 7.25 8.25V11.75C7.25 12.3023 7.69772 12.75 8.25 12.75H11.75C12.3023 12.75 12.75 12.3023 12.75 11.75V8.25C12.75 7.69772 12.3023 7.25 11.75 7.25H8.25Z",
          }),
        }),
      h = n("OWtl"),
      f = n("DM5G")
    function g(e) {
      let t,
        n,
        g,
        x,
        v,
        y,
        w,
        b,
        C,
        j,
        A = (0, s.c)(63),
        {
          className: I,
          buttonColor: k,
          buttonRadius: M,
          buttonSize: S,
          buttonUnstyled: N,
          cacheAudio: T,
          errorMessage: _,
          disabled: R,
          getReadAloudContext: P,
          iconClassName: L,
          labels: D,
          onError: F,
          onStatusChange: E,
          onTogglePlayback: O,
          playbackId: U,
          showTooltip: B,
          synthesizeAudio: z,
          visibleLabels: q,
        } = e,
        W = void 0 !== T && T,
        H = void 0 === L ? "icon-xs" : L,
        G = void 0 === B || B,
        V = (0, o.gh)(h.u),
        $ = (0, r.A)()
      A[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { name: "audio.read-aloud" }), (A[0] = t)) : (t = A[0])
      let K = (0, o._U)(c.G, t),
        Z = (0, o._U)(f.H, U)
      if (!K.isCapable) return null
      if (
        A[1] !== H ||
        A[2] !== $ ||
        A[3] !== D?.loading ||
        A[4] !== D?.play ||
        A[5] !== D?.stop ||
        A[6] !== Z ||
        A[7] !== q?.loading
      ) {
        switch (Z) {
          case "idle": {
            let e, t
            ;(A[11] !== H ? ((e = (0, a.jsx)(m.A, { className: H })), (A[11] = H), (A[12] = e)) : (e = A[12]),
              (n = e),
              A[13] !== $ || A[14] !== D?.play
                ? ((t =
                    D?.play ??
                    $.formatMessage({
                      id: "chatgptConversations.readAloud.play",
                      defaultMessage: "Read aloud",
                      description:
                        "Accessible label and tooltip for the button beneath a completed ChatGPT assistant response that plays the response as synthesized speech",
                    })),
                  (A[13] = $),
                  (A[14] = D?.play),
                  (A[15] = t))
                : (t = A[15]),
              (g = t),
              (x = "play"))
            break
          }
          case "loading": {
            let e, t
            ;(A[16] !== H ? ((e = (0, a.jsx)(u.y, { className: H })), (A[16] = H), (A[17] = e)) : (e = A[17]),
              (n = e),
              A[18] !== $ || A[19] !== D?.loading
                ? ((t =
                    D?.loading ??
                    $.formatMessage({
                      id: "chatgptConversations.readAloud.loading",
                      defaultMessage: "Loading audio…",
                      description:
                        "Accessible label and tooltip for the ChatGPT assistant-response read-aloud button while its synthesized audio is loading",
                    })),
                  (A[18] = $),
                  (A[19] = D?.loading),
                  (A[20] = t))
                : (t = A[20]),
              (g = t),
              (x = q?.loading == null ? "play" : "loading"))
            break
          }
          case "playing": {
            let e, t
            ;(A[21] !== H ? ((e = (0, a.jsx)(p, { className: H })), (A[21] = H), (A[22] = e)) : (e = A[22]),
              (n = e),
              A[23] !== $ || A[24] !== D?.stop
                ? ((t =
                    D?.stop ??
                    $.formatMessage({
                      id: "chatgptConversations.readAloud.stop",
                      defaultMessage: "Stop reading aloud",
                      description:
                        "Accessible label and tooltip for the ChatGPT assistant-response read-aloud button while synthesized speech is playing; selecting it stops playback",
                    })),
                  (A[23] = $),
                  (A[24] = D?.stop),
                  (A[25] = t))
                : (t = A[25]),
              (g = t),
              (x = "stop"))
          }
        }
        ;((A[1] = H),
          (A[2] = $),
          (A[3] = D?.loading),
          (A[4] = D?.play),
          (A[5] = D?.stop),
          (A[6] = Z),
          (A[7] = q?.loading),
          (A[8] = x),
          (A[9] = n),
          (A[10] = g))
      } else ((x = A[8]), (n = A[9]), (g = A[10]))
      A[26] !== W ||
      A[27] !== _ ||
      A[28] !== P ||
      A[29] !== $ ||
      A[30] !== F ||
      A[31] !== E ||
      A[32] !== O ||
      A[33] !== U ||
      A[34] !== V ||
      A[35] !== z
        ? ((v = () => {
            if ((O?.(), null == z)) return
            let e =
              _ ??
              $.formatMessage({
                id: "chatgptConversations.readAloud.error",
                defaultMessage: "Unable to read this response aloud",
                description:
                  "Error toast shown when Codex cannot synthesize or play a completed ChatGPT assistant response after the user selects Read aloud",
              })
            ;(0, f.pP)(V, {
              cacheAudio: W,
              errorMessage: e,
              onError: F,
              onStatusChange: E,
              playbackId: U,
              readAloud: P?.(),
              synthesizeAudio: z,
            })
          }),
          (A[26] = W),
          (A[27] = _),
          (A[28] = P),
          (A[29] = $),
          (A[30] = F),
          (A[31] = E),
          (A[32] = O),
          (A[33] = U),
          (A[34] = V),
          (A[35] = z),
          (A[36] = v))
        : (v = A[36])
      let Q = v,
        J = "loading" === Z || void 0,
        Y = g,
        X = "playing" === Z,
        ee = k ?? (null == q ? "ghost" : "ghostActive"),
        et = null == q ? void 0 : "content",
        en = (void 0 !== R && R) || "loading" === Z,
        ea = S ?? (null == q ? "icon" : "inline")
      ;(A[37] !== H
        ? ((y = (0, l.A)("inline-flex shrink-0 items-center justify-center", H)), (A[37] = H), (A[38] = y))
        : (y = A[38]),
        A[39] !== n || A[40] !== y
          ? ((w = (0, a.jsx)("span", { "aria-hidden": "true", className: y, children: n })),
            (A[39] = n),
            (A[40] = y),
            (A[41] = w))
          : (w = A[41]),
        A[42] !== x || A[43] !== q
          ? ((b =
              null == q
                ? null
                : (0, a.jsx)("span", {
                    "aria-hidden": "true",
                    className: "grid",
                    children: ["play", "loading", "stop"].map((e) =>
                      null == q[e]
                        ? null
                        : (0, a.jsx)(
                            "span",
                            { className: (0, l.A)("col-start-1 row-start-1", e !== x && "invisible"), children: q[e] },
                            e,
                          ),
                    ),
                  })),
            (A[42] = x),
            (A[43] = q),
            (A[44] = b))
          : (b = A[44]),
        A[45] !== M ||
        A[46] !== N ||
        A[47] !== I ||
        A[48] !== g ||
        A[49] !== ee ||
        A[50] !== et ||
        A[51] !== en ||
        A[52] !== ea ||
        A[53] !== w ||
        A[54] !== b ||
        A[55] !== J ||
        A[56] !== X ||
        A[57] !== Q
          ? ((C = (0, a.jsxs)(d.$, {
              "aria-busy": J,
              "aria-label": Y,
              "aria-pressed": X,
              className: I,
              color: ee,
              "data-turn-action-width": et,
              disabled: en,
              onClick: Q,
              radius: M,
              unstyled: N,
              size: ea,
              children: [w, b],
            })),
            (A[45] = M),
            (A[46] = N),
            (A[47] = I),
            (A[48] = g),
            (A[49] = ee),
            (A[50] = et),
            (A[51] = en),
            (A[52] = ea),
            (A[53] = w),
            (A[54] = b),
            (A[55] = J),
            (A[56] = X),
            (A[57] = Q),
            (A[58] = C))
          : (C = A[58]))
      let es = C
      return (
        A[59] !== es || A[60] !== g || A[61] !== G
          ? ((j = G ? (0, a.jsx)(i.m, { content: g, children: es }) : es),
            (A[59] = es),
            (A[60] = g),
            (A[61] = G),
            (A[62] = j))
          : (j = A[62]),
        j
      )
    }
  },
  spuc(e, t, n) {
    var a = n("ABep"),
      s = n("N55g")
    let i = (0, n("Bbed")._)(
      async () =>
        (
          await Promise.all([
            n.e(753405),
            n.e(321957),
            n.e(585419),
            n.e(877700),
            n.e(843292),
            n.e(353230),
            n.e(909395),
            n.e(81461),
            n.e(212487),
            n.e(17983),
            n.e(882456),
            n.e(167649),
            n.e(830518),
            n.e(340362),
            n.e(596476),
            n.e(936809),
            n.e(216620),
            n.e(911222),
          ]).then(n.bind(n, "l9eO"))
        ).DilReasoningResponse,
      { errorFallback: (0, a.jsx)(s.D, {}) },
    )
    n.d(t, {}, { DilReasoningResponse: i })
  },
  ZniH(e, t, n) {
    var a = n("xCr9"),
      s = n.n(a),
      i = n("l8eZ"),
      l = n.n(i),
      o = n("AuIy"),
      r = n("ccwJ"),
      c = n("wDWo"),
      d = n("IgxH")
    n.d(
      t,
      {},
      {
        u: function (e) {
          let t = (0, o.Ph)(e),
            n = s()(t, (e) => "assistant" === e.author.role || "tool" === e.author.role)
          if (null != n && null != (0, o.bt)(n)) return null
          let a = t.flatMap((e) => (0, r._o)(e, { isActiveTurn: !0, isStreaming: !1 }))
          if (a.some((e) => "in_progress" === e.status)) return null
          let i = s()(
              t,
              (e) =>
                "assistant" === e.author.role &&
                (null == e.channel || "final" === e.channel) &&
                !(0, o.iU)(e) &&
                !(0, o.uk)(e) &&
                e.metadata?.reasoning_status == null &&
                "finished_successfully" === e.status,
            ),
            u = a.at(-1)?.chatGptMessageId ?? i?.id
          if (null == u) return null
          let m =
            null == i || i.metadata?.model_dil != null || i.metadata?.model_dil_v2 != null ? "" : (0, d.i)((0, c.vu)(i))
          return {
            messageId: u,
            text: l()(m, { length: 120, separator: " ", omission: "…" }),
            imageSrc: a.find((e) => "completed" === e.status && null != e.src)?.src ?? void 0,
          }
        },
      },
    )
  },
  bFcv(e, t, n) {
    var a = n("ABep"),
      s = n("QosV"),
      i = n("slpy"),
      l = n("on57"),
      o = n("zd8w"),
      r = n("oyxz"),
      c = n("Sm6l"),
      d = n("Hc2f"),
      u = n("kRUe"),
      m = n("waM8"),
      p = n("XSEO"),
      h = n("uKpQ")
    function f(e) {
      let t,
        n = (0, s.c)(10),
        { collapsedMessageCount: i, workedDurationMs: l, workedForItem: o } = e
      if (null != o) {
        let e
        return (
          n[0] !== o.completedAtMs || n[1] !== o.startedAtMs || n[2] !== o.status
            ? ((e = (0, a.jsx)(p.c, {
                className: "text-inherit",
                status: o.status,
                startedAtMs: o.startedAtMs,
                completedAtMs: o.completedAtMs,
              })),
              (n[0] = o.completedAtMs),
              (n[1] = o.startedAtMs),
              (n[2] = o.status),
              (n[3] = e))
            : (e = n[3]),
          e
        )
      }
      if (null != l) {
        let e, t
        return (
          n[4] !== l ? ((e = (0, m.a)(l)), (n[4] = l), (n[5] = e)) : (e = n[5]),
          n[6] !== e
            ? ((t = (0, a.jsx)("span", {
                className: "text-inherit",
                children: (0, a.jsx)(r.A, {
                  id: "localConversation.workedFor",
                  defaultMessage: "Worked for {time}",
                  description:
                    "Divider shown between agent activity and the final assistant response in a completed turn",
                  values: { time: e },
                }),
              })),
              (n[6] = e),
              (n[7] = t))
            : (t = n[7]),
          t
        )
      }
      return (
        n[8] !== i
          ? ((t = (0, a.jsx)("span", {
              className: "text-inherit",
              children: (0, a.jsx)(r.A, {
                id: "localConversation.previousMessagesSummary",
                defaultMessage: "{count, plural, one {# previous message} other {# previous messages}}",
                description: "Summary shown in collapsed turns when no worked-for duration is available",
                values: { count: i },
              }),
            })),
            (n[8] = i),
            (n[9] = t))
          : (t = n[9]),
        t
      )
    }
    n.d(
      t,
      {},
      {
        i: function (e) {
          let t,
            n,
            m,
            p,
            g,
            x,
            v,
            y,
            w,
            b = (0, s.c)(31),
            {
              label: C,
              collapsedMessageCount: j,
              deniedActionCount: A,
              workedDurationMs: I,
              workedForItem: k,
              isCollapsed: M,
              onFocus: S,
              onBlur: N,
              onPointerEnter: T,
              onPointerLeave: _,
              onToggle: R,
            } = e,
            P = void 0 === A ? 0 : A,
            L = (0, o.useContext)(h.d),
            D = P > 0 && "w-full"
          b[0] !== D
            ? ((t = (0, l.A)("inline-flex max-w-full flex-wrap text-size-chat", D)), (b[0] = D), (b[1] = t))
            : (t = b[1])
          let F = !M
          ;(b[2] !== j || b[3] !== C || b[4] !== I || b[5] !== k
            ? ((n = C ?? (0, a.jsx)(f, { collapsedMessageCount: j, workedDurationMs: I, workedForItem: k })),
              (b[2] = j),
              (b[3] = C),
              (b[4] = I),
              (b[5] = k),
              (b[6] = n))
            : (n = b[6]),
            b[7] !== n ? ((m = (0, a.jsx)("span", { children: n })), (b[7] = n), (b[8] = m)) : (m = b[8]))
          let E = M ? "rotate-0" : "rotate-90"
          return (
            b[9] !== E
              ? ((p = (0, l.A)("icon-2xs transition-transform duration-basic", E)), (b[9] = E), (b[10] = p))
              : (p = b[10]),
            b[11] !== p ? ((g = (0, a.jsx)(d.A, { className: p })), (b[11] = p), (b[12] = g)) : (g = b[12]),
            b[13] !== P
              ? ((x =
                  P > 0
                    ? (0, a.jsx)(i.m, {
                        content: (0, a.jsx)(r.A, {
                          id: "localConversation.deniedActionsTooltip",
                          defaultMessage:
                            "{count, plural, one {Auto-review denied # action. View the action and why it was denied.} other {Auto-review denied # actions. View the actions and why they were denied.}}",
                          description:
                            "Tooltip for the denied-action count beside Worked for. Clicking this part of the disclosure opens or closes the turn's activity, where denial details can be viewed.",
                          values: { count: P },
                        }),
                        children: (0, a.jsxs)("span", {
                          className: "ms-auto inline-flex items-center gap-1 text-secondary",
                          "data-denied-action-count": !0,
                          children: [
                            (0, a.jsx)(u.gV, {}),
                            (0, a.jsx)(r.A, {
                              id: "localConversation.deniedActionsCount",
                              defaultMessage: "{count, plural, one {# denied action} other {# denied actions}}",
                              description:
                                "Historical number of actions denied by auto-review in this turn, shown beside Worked for. Approving a retry does not remove a past denial from this count.",
                              values: { count: P },
                            }),
                          ],
                        }),
                      })
                    : null),
                (b[13] = P),
                (b[14] = x))
              : (x = b[14]),
            b[15] !== N ||
            b[16] !== S ||
            b[17] !== T ||
            b[18] !== _ ||
            b[19] !== R ||
            b[20] !== x ||
            b[21] !== t ||
            b[22] !== F ||
            b[23] !== m ||
            b[24] !== g
              ? ((v = (0, a.jsx)("div", {
                  className: "text-size-chat text-secondary",
                  children: (0, a.jsxs)(c.$, {
                    className: t,
                    color: "ghostTertiary",
                    radius: "small",
                    size: "inline",
                    "aria-expanded": F,
                    onFocus: S,
                    onBlur: N,
                    onPointerEnter: T,
                    onPointerLeave: _,
                    onClick: R,
                    children: [m, g, x],
                  }),
                })),
                (b[15] = N),
                (b[16] = S),
                (b[17] = T),
                (b[18] = _),
                (b[19] = R),
                (b[20] = x),
                (b[21] = t),
                (b[22] = F),
                (b[23] = m),
                (b[24] = g),
                (b[25] = v))
              : (v = b[25]),
            b[26] !== L
              ? ((y =
                  null == L &&
                  (0, a.jsx)("div", {
                    className: "pt-1 text-size-chat text-secondary",
                    children: (0, a.jsx)("div", { className: "w-full border-t border-default" }),
                  })),
                (b[26] = L),
                (b[27] = y))
              : (y = b[27]),
            b[28] !== v || b[29] !== y
              ? ((w = (0, a.jsxs)(a.Fragment, { children: [v, y] })), (b[28] = v), (b[29] = y), (b[30] = w))
              : (w = b[30]),
            w
          )
        },
      },
    )
  },
  NyEH(e, t, n) {
    var a = n("ABep"),
      s = n("QosV"),
      i = n("iRMi"),
      l = n("zTeN"),
      o = n("zd8w"),
      r = n("wD9O"),
      c = n("yGJW"),
      d = n("nMdB"),
      u = n("lsfk"),
      m = n("uKpQ"),
      p = n("bFcv")
    n.d(
      t,
      {},
      {
        C: function (e) {
          let t,
            n,
            h,
            f,
            g,
            x,
            v = (0, s.c)(18)
          v[0] !== e
            ? (({ previousTurnNumber: h, totalTurnCount: f, onToggle: n, ...t } = e),
              (v[0] = e),
              (v[1] = t),
              (v[2] = n),
              (v[3] = h),
              (v[4] = f))
            : ((t = v[1]), (n = v[2]), (h = v[3]), (f = v[4]))
          let y = (0, l.Ul)(c.YV),
            w = (0, r.dz)(),
            b = (0, o.useContext)(m.d),
            C = (0, o.useContext)(u.L)
          return (
            v[5] !== t.deniedActionCount ||
            v[6] !== t.isCollapsed ||
            v[7] !== n ||
            v[8] !== h ||
            v[9] !== y ||
            v[10] !== C ||
            v[11] !== f ||
            v[12] !== b ||
            v[13] !== w
              ? ((g = (e) => {
                  let a =
                    t.isCollapsed &&
                    (t.deniedActionCount ?? 0) > 0 &&
                    e.target instanceof Element &&
                    null != e.target.closest("[data-denied-action-count]")
                  ;(a || (b && C?.holdViewport(), (0, d.I)(e.currentTarget, w)),
                    t.isCollapsed &&
                      null != h &&
                      null != f &&
                      y.logProductEvent(i.CodexPreviousTurnExpanded, {
                        target: i.CodexPreviousTurnExpandedTarget.CODEX_PREVIOUS_TURN_EXPANDED_TARGET_TURN,
                        turnNumber: h,
                        totalTurnCount: f,
                      }),
                    n(a))
                }),
                (v[5] = t.deniedActionCount),
                (v[6] = t.isCollapsed),
                (v[7] = n),
                (v[8] = h),
                (v[9] = y),
                (v[10] = C),
                (v[11] = f),
                (v[12] = b),
                (v[13] = w),
                (v[14] = g))
              : (g = v[14]),
            v[15] !== t || v[16] !== g
              ? ((x = (0, a.jsx)(p.i, { ...t, onToggle: g })), (v[15] = t), (v[16] = g), (v[17] = x))
              : (x = v[17]),
            x
          )
        },
      },
    )
  },
  KMtq(e, t, n) {
    var a = n("ABep"),
      s = n("QosV"),
      i = n("on57"),
      l = n("LIss"),
      o = n("zd8w"),
      r = n("QxH2"),
      c = n("T1PX"),
      d = n("mRLe"),
      u = n("V8uZ"),
      m = n("NyEH")
    function p(e) {
      let t,
        n,
        o,
        r,
        c,
        d,
        m,
        p,
        f,
        g = (0, s.c)(30),
        {
          activityRef: x,
          animateTransition: v,
          contentStore: y,
          isCollapsed: w,
          onAnimationComplete: b,
          shouldUseReducedMotion: C,
        } = e,
        j = w || C ? 0.15 : u.X7.duration,
        A = w && !v && "invisible max-h-0"
      g[0] !== A ? ((t = (0, i.A)("-ms-2 ps-2", A)), (g[0] = A), (g[1] = t)) : (t = g[1])
      let I = w || v ? "hidden" : "visible"
      ;(g[2] !== I ? ((n = { overflow: I }), (g[2] = I), (g[3] = n)) : (n = g[3]),
        g[4] !== v || g[5] !== w || g[6] !== C
          ? ((o = !!v &&
              !w && { height: C ? "auto" : 0, opacity: 0, transform: C ? "translateY(0)" : "translateY(-8px)" }),
            (g[4] = v),
            (g[5] = w),
            (g[6] = C),
            (g[7] = o))
          : (o = g[7]))
      let k = w ? "collapsed" : "expanded",
        M = C && v ? "auto" : 0,
        S = C ? "translateY(0)" : "translateY(-8px)"
      ;(g[8] !== M || g[9] !== S
        ? ((r = { height: M, opacity: 0, transform: S }), (g[8] = M), (g[9] = S), (g[10] = r))
        : (r = g[10]),
        g[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = { height: "auto", opacity: 1, transform: "translateY(0)" }), (g[11] = c))
          : (c = g[11]),
        g[12] !== r ? ((d = { collapsed: r, expanded: c }), (g[12] = r), (g[13] = d)) : (d = g[13]))
      let N = v ? j : 0,
        T = w ? u.Wu : u.X7.ease
      return (
        g[14] !== N || g[15] !== T
          ? ((m = { ...u.X7, duration: N, ease: T }), (g[14] = N), (g[15] = T), (g[16] = m))
          : (m = g[16]),
        g[17] !== y ? ((p = (0, a.jsx)(h, { contentStore: y })), (g[17] = y), (g[18] = p)) : (p = g[18]),
        g[19] !== x ||
        g[20] !== w ||
        g[21] !== b ||
        g[22] !== d ||
        g[23] !== m ||
        g[24] !== p ||
        g[25] !== t ||
        g[26] !== n ||
        g[27] !== o ||
        g[28] !== k
          ? ((f = (0, a.jsx)(l.P.div, {
              ref: x,
              className: t,
              inert: w,
              style: n,
              initial: o,
              animate: k,
              variants: d,
              onAnimationComplete: b,
              transition: m,
              children: p,
            })),
            (g[19] = x),
            (g[20] = w),
            (g[21] = b),
            (g[22] = d),
            (g[23] = m),
            (g[24] = p),
            (g[25] = t),
            (g[26] = n),
            (g[27] = o),
            (g[28] = k),
            (g[29] = f))
          : (f = g[29]),
        f
      )
    }
    function h(e) {
      let { contentStore: t } = e
      return (0, o.useSyncExternalStore)(t.subscribe, t.getSnapshot, t.getSnapshot)
    }
    n.d(
      t,
      {},
      {
        m: function (e) {
          let t,
            n,
            i,
            l,
            u,
            h,
            f,
            g,
            x,
            v = (0, s.c)(28),
            {
              isCollapsed: y,
              onSetCollapsed: w,
              preloadOnInteraction: b,
              summary: C,
              persistentContent: j,
              children: A,
            } = e,
            [I, k] = (0, o.useState)(!0),
            M = y ?? I,
            [S, N] = (0, o.useState)(null),
            T = M ? "collapsed" : "expanded"
          null != S && S !== T && N(null)
          let _ = (0, o.useRef)(!1),
            [R, P] = (0, o.useState)(!1),
            [L, D] = (0, o.useState)(!1),
            F = (0, o.useRef)(null),
            E = (0, o.useRef)(0),
            O = (0, c.I)(),
            U = (R || L) && b
          v[0] !== A || v[1] !== C
            ? ((t =
                null == A ? null : (0, a.jsxs)(a.Fragment, { children: [null != C ? (0, a.jsx)(d.a, {}) : null, A] })),
              (v[0] = A),
              (v[1] = C),
              (v[2] = t))
            : (t = v[2])
          let B = (function (e) {
            let t,
              n,
              a,
              i = (0, s.c)(6)
            i[0] !== e
              ? ((t = () => {
                  let t, n
                  return (
                    (t = e),
                    (n = new Set()),
                    {
                      clear: () => {
                        t = null
                      },
                      getSnapshot: () => t,
                      set: (e) => {
                        if (!Object.is(t, e)) for (let a of ((t = e), n)) a()
                      },
                      subscribe: (e) => (n.add(e), () => n.delete(e)),
                    }
                  )
                }),
                (i[0] = e),
                (i[1] = t))
              : (t = i[1])
            let [l] = (0, o.useState)(t)
            return (
              i[2] !== e || i[3] !== l
                ? ((n = () => (l.set(e), () => l.clear())),
                  (a = [e, l]),
                  (i[2] = e),
                  (i[3] = l),
                  (i[4] = n),
                  (i[5] = a))
                : ((n = i[4]), (a = i[5])),
              (0, o.useLayoutEffect)(n, a),
              l
            )
          })(t)
          return (
            v[3] !== M
              ? ((n = () => {
                  M && ((E.current = E.current + 1), (_.current = !1))
                }),
                (i = [M]),
                (v[3] = M),
                (v[4] = n),
                (v[5] = i))
              : ((n = v[4]), (i = v[5])),
            (0, o.useLayoutEffect)(n, i),
            v[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((l = () => () => {
                  ;((E.current = E.current + 1), (_.current = !1))
                }),
                (u = []),
                (v[6] = l),
                (v[7] = u))
              : ((l = v[6]), (u = v[7])),
            (0, o.useLayoutEffect)(l, u),
            v[8] !== M || v[9] !== w || v[10] !== C
              ? ((h =
                  null != C
                    ? (0, a.jsx)(m.C, {
                        ...C,
                        isCollapsed: M,
                        onFocus: () => D(!0),
                        onBlur: () => D(!1),
                        onPointerEnter: () => P(!0),
                        onPointerLeave: () => P(!1),
                        onToggle: (e) => {
                          let t = !M
                          ;((E.current = E.current + 1), (_.current = e), N(t ? "collapsed" : "expanded"), (w ?? k)(t))
                        },
                      })
                    : null),
                (v[8] = M),
                (v[9] = w),
                (v[10] = C),
                (v[11] = h))
              : (h = v[11]),
            v[12] !== j || v[13] !== C
              ? ((f = null != C && null != j ? (0, a.jsx)(d.a, {}) : null), (v[12] = j), (v[13] = C), (v[14] = f))
              : (f = v[14]),
            v[15] !== B || v[16] !== S || v[17] !== A || v[18] !== M || v[19] !== U || v[20] !== O || v[21] !== T
              ? ((g =
                  (U || !M || "collapsed" === S) && null != A
                    ? (0, a.jsx)(p, {
                        activityRef: F,
                        animateTransition: null != S,
                        contentStore: B,
                        isCollapsed: M,
                        shouldUseReducedMotion: O,
                        onAnimationComplete: (e) => {
                          if (e !== T || (N((t) => (t === e ? null : t)), M || !_.current)) return
                          _.current = !1
                          let t = E.current
                          ;(0, r.JA)().then(() => {
                            E.current === t &&
                              F.current
                                ?.querySelector("[data-auto-review-denied]")
                                ?.scrollIntoView({ block: "center", behavior: O ? "instant" : "smooth" })
                          })
                        },
                      })
                    : null),
                (v[15] = B),
                (v[16] = S),
                (v[17] = A),
                (v[18] = M),
                (v[19] = U),
                (v[20] = O),
                (v[21] = T),
                (v[22] = g))
              : (g = v[22]),
            v[23] !== j || v[24] !== h || v[25] !== f || v[26] !== g
              ? ((x = (0, a.jsxs)(a.Fragment, { children: [h, f, j, g] })),
                (v[23] = j),
                (v[24] = h),
                (v[25] = f),
                (v[26] = g),
                (v[27] = x))
              : (x = v[27]),
            x
          )
        },
      },
    )
  },
  BpQb(e, t, n) {
    n.d(t, { D: () => h })
    var a = n("ABep"),
      s = n("QosV"),
      i = n("zd8w"),
      l = n("ZQ2G"),
      o = n("MJjm"),
      r = n("mRLe"),
      c = n("acby"),
      d = n("t7eZ"),
      u = n("W10I"),
      m = n("KMtq"),
      p = n("wGAn")
    function h(e) {
      let t,
        n,
        h,
        v,
        y,
        w,
        b,
        C,
        j,
        A,
        I,
        k,
        M,
        S = (0, s.c)(59),
        {
          units: N,
          keepFirstReply: T,
          disclosureLabel: _,
          deniedActionCount: R,
          agentActivityProps: P,
          compactPersistentUserActions: L,
          workedDurationMs: D,
          workedForItem: F,
          hasFinalAssistantStarted: E,
          hasFollowingFinalAnswer: O,
          plainAsyncMessageIds: U,
          allowCollapseBeforeFinal: B,
          isTurnCancelled: z,
          persistedCollapsed: q,
          onSetCollapsed: W,
          forceExpanded: H,
          disableCollapse: G,
          preventAutoCollapse: V,
          trailingActivity: $,
          keepMcpAppEntriesPersistent: K,
          previousTurnNumber: Z,
          totalTurnCount: Q,
        } = e,
        J = void 0 === R ? 0 : R,
        Y = void 0 === D ? null : D,
        X = void 0 !== O && O,
        ee = void 0 !== B && B,
        et = void 0 !== H && H,
        en = void 0 !== G && G,
        ea = void 0 !== V && V,
        es = void 0 === $ ? null : $,
        ei = void 0 !== K && K,
        [el, eo] = (0, i.useState)()
      if (0 === N.length && null == es) return null
      S[0] !== N ? ((t = N.some(x)), (S[0] = N), (S[1] = t)) : (t = S[1])
      let er = t,
        ec = et || en,
        ed = E || er,
        eu = q ?? el
      S[2] !== ee || S[3] !== z || S[4] !== ea || S[5] !== ec || S[6] !== ed || S[7] !== eu
        ? ((n = (0, p.P)({
            allowCollapseBeforeFinal: ee,
            forceExpanded: ec,
            hasFinalAssistantStarted: ed,
            isTurnCancelled: z,
            hasRenderableAgentItems: !0,
            preventAutoCollapse: ea,
            persistedCollapsed: eu,
          })),
          (S[2] = ee),
          (S[3] = z),
          (S[4] = ea),
          (S[5] = ec),
          (S[6] = ed),
          (S[7] = eu),
          (S[8] = n))
        : (n = S[8])
      let em = n
      S[9] !== P ||
      S[10] !== em ||
      S[11] !== et ||
      S[12] !== X ||
      S[13] !== T ||
      S[14] !== ei ||
      S[15] !== U ||
      S[16] !== N
        ? ((h =
            !et && em.shouldAllowCollapse
              ? (function (
                  e,
                  { hasFollowingFinalAnswer: t = !1, keepFirstReply: n = !1, isTurnInProgress: a = !1, ...s } = {},
                ) {
                  let i = [],
                    l = [],
                    r = [],
                    m = [],
                    p = null,
                    h = t
                      ? e.length
                      : e.findLastIndex(
                          (e) =>
                            "standalone" === e.kind &&
                            "assistant-message" === e.item.item.type &&
                            (0, o.rt)(e.item.item),
                        ),
                    f =
                      n && h < 0
                        ? e.find(
                            (e) =>
                              "standalone" === e.kind &&
                              "assistant-message" === e.item.item.type &&
                              e.item.item.content.trim(),
                          )
                        : void 0
                  for (let [t, n] of e.entries()) {
                    if ("standalone" === n.kind && "worked-for" === n.item.item.type) {
                      p = n.item.item
                      continue
                    }
                    if ("standalone" === n.kind && "realtime-transcript" === n.item.item.type) {
                      0 === l.length ? m.push(n) : (l.push(n), r.push(n))
                      continue
                    }
                    ;(l.push(n),
                      n === f ||
                      (a && h >= 0 && t > h) ||
                      (function (
                        e,
                        t,
                        { keepMcpAppEntriesPersistent: n, mcpServerStatuses: a, plainAsyncMessageIds: s },
                      ) {
                        if ("standalone" !== e.kind) return !1
                        let i = e.item.item
                        return "user-input-response" === i.type
                          ? !i.completed
                          : !!("mcp-tool-call" === i.type && (0, d.o)(i)) ||
                              ("assistant-message" === i.type
                                ? (0, o.Yr)(i) ||
                                  ("async" === i.delivery && null != i.searchItemId && s?.has(i.searchItemId) === !0)
                                : !!(
                                    ("dynamic-tool-call" === i.type && (0, c.Q1)(i)) ||
                                    (n &&
                                      "mcp-tool-call" === i.type &&
                                      (function ({ item: e, mcpServerStatuses: t }) {
                                        let n = e.result?.type === "success" ? e.result.raw : null
                                        return (
                                          (!e.completed || null != e.result) &&
                                          (null != e.mcpAppResourceUri ||
                                            null !=
                                              (0, u.Hn)({
                                                mcpServerStatuses: t,
                                                server: e.invocation.server,
                                                tool: e.invocation.tool,
                                                toolResult: n,
                                              }))
                                        )
                                      })({ item: i, mcpServerStatuses: a }))
                                  ) ||
                                  ("user-message" === i.type &&
                                    ("pending" === i.steeringStatus ||
                                      !0 === i.followsInterruptedFinalAnswer ||
                                      !0 === i.wasInHistoryPreview ||
                                      "not-sent" === i.deliveryStatus ||
                                      !0 === i.hookFeedback ||
                                      !t)))
                      })(n, t < h, s)
                        ? r.push(n)
                        : i.push(n))
                  }
                  return {
                    collapsibleUnits: i,
                    expandedUnits: l,
                    persistentUnits: r,
                    preToggleUnits: m,
                    workedForItem: p,
                  }
                })(N, {
                  hasFollowingFinalAnswer: X,
                  keepFirstReply: T,
                  isTurnInProgress: P.isTurnInProgress,
                  keepMcpAppEntriesPersistent: ei,
                  mcpServerStatuses: P.mcpServerStatuses,
                  plainAsyncMessageIds: U,
                })
              : null),
          (S[9] = P),
          (S[10] = em),
          (S[11] = et),
          (S[12] = X),
          (S[13] = T),
          (S[14] = ei),
          (S[15] = U),
          (S[16] = N),
          (S[17] = h))
        : (h = S[17])
      let ep = h,
        eh = N
      ;(null != ep && (eh = em.isCollapsed ? ep.collapsibleUnits : ep.expandedUnits),
        S[18] !== em || S[19] !== ep
          ? ((v = null != ep && em.isCollapsed ? ep.persistentUnits : []), (S[18] = em), (S[19] = ep), (S[20] = v))
          : (v = S[20]))
      let ef = v
      S[21] !== ep?.preToggleUnits
        ? ((y = ep?.preToggleUnits ?? []), (S[21] = ep?.preToggleUnits), (S[22] = y))
        : (y = S[22])
      let eg = y,
        ex = ep?.collapsibleUnits ?? eh,
        ev = (void 0 === F ? null : F) ?? ep?.workedForItem ?? null,
        ey = ex.reduce(g, 0) + +(null != es),
        ew =
          1 === ex.length &&
          null == es &&
          ex[0]?.kind === "standalone" &&
          "context-compaction" === ex[0].item.item.type,
        eb = !en && em.shouldAllowCollapse && ey > 0 && !ew
      eb || 0 !== eh.length || 0 !== ef.length || 0 !== eg.length || (eh = N)
      let eC = eb && em.isCollapsed
      S[23] !== P || S[24] !== eg
        ? ((w =
            0 === eg.length
              ? null
              : (0, a.jsx)(l.D, { ...P, units: eg, combinedUnitKey: void 0, latestTurnFollowContentRef: void 0 })),
          (S[23] = P),
          (S[24] = eg),
          (S[25] = w))
        : (w = S[25])
      let ej = w
      S[26] !== P || S[27] !== L || S[28] !== ef
        ? ((b =
            0 === ef.length
              ? null
              : (0, a.jsx)(l.D, { ...P, units: ef, compactUserMessageActions: L ?? P.compactUserMessageActions })),
          (S[26] = P),
          (S[27] = L),
          (S[28] = ef),
          (S[29] = b))
        : (b = S[29])
      let eA = b
      S[30] !== P || S[31] !== es || S[32] !== eh
        ? ((C =
            0 === eh.length && null == es
              ? null
              : (0, a.jsxs)(a.Fragment, {
                  children: [
                    eh.length > 0 ? (0, a.jsx)(l.D, { ...P, units: eh }) : null,
                    null != es && eh.length > 0 ? (0, a.jsx)(r.a, {}) : null,
                    es,
                  ],
                })),
          (S[30] = P),
          (S[31] = es),
          (S[32] = eh),
          (S[33] = C))
        : (C = S[33])
      let eI = C
      S[34] !== ej || S[35] !== eb
        ? ((j = null != ej && eb ? (0, a.jsx)(r.a, {}) : null), (S[34] = ej), (S[35] = eb), (S[36] = j))
        : (j = S[36])
      let ek = W ?? eo
      return (
        S[37] !== ex ? ((A = ex.some(f)), (S[37] = ex), (S[38] = A)) : (A = S[38]),
        S[39] !== ey ||
        S[40] !== J ||
        S[41] !== _ ||
        S[42] !== Z ||
        S[43] !== eb ||
        S[44] !== Q ||
        S[45] !== Y ||
        S[46] !== ev
          ? ((I = eb
              ? {
                  label: _,
                  collapsedMessageCount: ey,
                  deniedActionCount: J,
                  workedDurationMs: Y,
                  workedForItem: ev,
                  previousTurnNumber: Z,
                  totalTurnCount: Q,
                }
              : null),
            (S[39] = ey),
            (S[40] = J),
            (S[41] = _),
            (S[42] = Z),
            (S[43] = eb),
            (S[44] = Q),
            (S[45] = Y),
            (S[46] = ev),
            (S[47] = I))
          : (I = S[47]),
        S[48] !== eI || S[49] !== eC || S[50] !== eA || S[51] !== ek || S[52] !== A || S[53] !== I
          ? ((k = (0, a.jsx)(m.m, {
              isCollapsed: eC,
              onSetCollapsed: ek,
              preloadOnInteraction: A,
              summary: I,
              persistentContent: eA,
              children: eI,
            })),
            (S[48] = eI),
            (S[49] = eC),
            (S[50] = eA),
            (S[51] = ek),
            (S[52] = A),
            (S[53] = I),
            (S[54] = k))
          : (k = S[54]),
        S[55] !== ej || S[56] !== j || S[57] !== k
          ? ((M = (0, a.jsxs)(a.Fragment, { children: [ej, j, k] })),
            (S[55] = ej),
            (S[56] = j),
            (S[57] = k),
            (S[58] = M))
          : (M = S[58]),
        M
      )
    }
    function f(e) {
      return "standalone" === e.kind && "dil-reasoning" === e.item.item.type
    }
    function g(e, t) {
      return e + ("group" === t.kind ? t.items.length : 1)
    }
    function x(e) {
      return "standalone" === e.kind && "assistant-message" === e.item.item.type && (0, o.Yr)(e.item.item)
    }
  },
  wGAn(e, t, n) {
    n.d(
      t,
      {},
      {
        P: function ({
          hasFinalAssistantStarted: e,
          isTurnCancelled: t,
          hasRenderableAgentItems: n,
          allowCollapseBeforeFinal: a = !1,
          forceExpanded: s = !1,
          preventAutoCollapse: i,
          persistedCollapsed: l,
        }) {
          let o = (a || (e && !t)) && n
          return { shouldAllowCollapse: o, isCollapsed: o && !s && (l ?? !i) }
        },
      },
    )
  },
  WB4T(e, t, n) {
    var a = n("ABep"),
      s = n("QosV"),
      i = n("zTeN"),
      l = n("ChYf"),
      o = n("rS3J"),
      r = n("RKuX"),
      c = n("Oj9r"),
      d = n("jHtb"),
      u = n("dKZq"),
      m = n("QlrJ")
    n.d(
      t,
      {},
      {
        L: function (e) {
          let t,
            n,
            p,
            h,
            f = (0, s.c)(18),
            {
              ref: g,
              text: x,
              cwd: v,
              hostId: y,
              collapsedLineCount: w,
              plainText: b,
              directives: C,
              hasSerializedParagraphs: j,
              renderMath: A,
              serializeVisibleText: I,
            } = e,
            k = void 0 !== b && b,
            M = (0, i.gh)(c.GD)
          f[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { name: "browser.in-app" }), (f[0] = t)) : (t = f[0])
          let S = (0, i._U)(l.G, t).isCapable
          f[1] !== S || f[2] !== M
            ? ((n = S ? ((0, c.n1)(M.value) ?? void 0) : void 0), (f[1] = S), (f[2] = M), (f[3] = n))
            : (n = f[3])
          let N = n
          return (
            f[4] !== v ||
            f[5] !== C ||
            f[6] !== N ||
            f[7] !== j ||
            f[8] !== y ||
            f[9] !== k ||
            f[10] !== g ||
            f[11] !== A ||
            f[12] !== I
              ? ((p = (e) =>
                  k
                    ? (0, a.jsx)("div", {
                        ref: g,
                        className: "text-size-chat whitespace-pre-wrap",
                        dir: "auto",
                        children: (0, a.jsx)(m.I, {
                          text: (0, o.L0)(e),
                          renderLink: (e) => (0, r.X)({ ...e, cwd: v, hostId: y, conversationId: N }),
                        }),
                      })
                    : (0, a.jsx)(d.J, {
                        ref: g,
                        cwd: v,
                        directives: C,
                        externalLinkContextMenuConversationId: N,
                        hostId: y,
                        hasSerializedParagraphs: j,
                        renderMath: A,
                        text: I?.(e) ?? e,
                        variant: "user-message",
                      })),
                (f[4] = v),
                (f[5] = C),
                (f[6] = N),
                (f[7] = j),
                (f[8] = y),
                (f[9] = k),
                (f[10] = g),
                (f[11] = A),
                (f[12] = I),
                (f[13] = p))
              : (p = f[13]),
            f[14] !== w || f[15] !== p || f[16] !== x
              ? ((h = (0, a.jsx)(u.S, { collapsedLineCount: w, text: x, textTone: "user-message", children: p })),
                (f[14] = w),
                (f[15] = p),
                (f[16] = x),
                (f[17] = h))
              : (h = f[17]),
            h
          )
        },
      },
    )
  },
  UDV9(e, t, n) {
    var a = n("ozji"),
      s = n("dMTK")
    n.d(
      t,
      {},
      {
        S: function ({ intl: e, sentAtMs: t, now: n, weekdayFormat: i = "long", useRelativeDayLabel: l }) {
          let o = new Date(t),
            r = (0, s.f$)(o, n),
            c = { hour: "numeric", minute: "2-digit", timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }
          return 0 === r
            ? e.formatDate(o, c)
            : -1 === r && l
              ? e.formatMessage(a.S.recent, { date: (0, s.gE)(e, r), time: e.formatDate(o, c), day: (e) => e.join("") })
              : r < 0 && r > -7
                ? e.formatDate(o, { ...c, weekday: i })
                : e.formatDate(o, { ...c, month: "short", day: "numeric" })
        },
      },
    )
  },
  uoSX(e, t, n) {
    var a = n("ABep"),
      s = n("QosV"),
      i = n("on57"),
      l = n("zd8w"),
      o = n("Wf1j"),
      r = n("QCUA"),
      c = n("UDV9")
    n.d(
      t,
      {},
      {
        J: function (e) {
          let t,
            n,
            d,
            u = (0, s.c)(11),
            { className: m, sentAtMs: p, nowMs: h, weekdayFormat: f } = e,
            g = (0, o.A)(),
            x = (0, l.useContext)(r.b)
          return null == p
            ? null
            : (u[0] !== m ? ((t = (0, i.A)("text-xs text-tertiary", m)), (u[0] = m), (u[1] = t)) : (t = u[1]),
              u[2] !== g || u[3] !== h || u[4] !== x || u[5] !== p || u[6] !== f
                ? ((n = (0, c.S)({
                    intl: g,
                    sentAtMs: p,
                    now: null == h ? new Date() : new Date(h),
                    weekdayFormat: f,
                    useRelativeDayLabel: "chat-refresh" === x,
                  })),
                  (u[2] = g),
                  (u[3] = h),
                  (u[4] = x),
                  (u[5] = p),
                  (u[6] = f),
                  (u[7] = n))
                : (n = u[7]),
              u[8] !== t || u[9] !== n
                ? ((d = (0, a.jsx)("span", { className: t, children: n })), (u[8] = t), (u[9] = n), (u[10] = d))
                : (d = u[10]),
              d)
        },
      },
    )
  },
  QlrJ(e, t, n) {
    var a = n("ABep"),
      s = n("drbS"),
      i = n("EULo"),
      l = n("MX6A"),
      o = n("SCxD")
    function r(e, t) {
      let n = t - 1
      for (; "\\" === e[n];) n -= 1
      return (t - n) % 2 == 0
    }
    n.d(
      t,
      {},
      {
        I: function ({ text: e, sourceStartIndex: t = 0, sourceText: n = e, renderLink: c }) {
          return (0, s.Uw)(e).map((e, s) => {
            if ("text" === e.kind) {
              let t = [],
                n = 0
              for (let a of (0, i.C4)(e.text)) {
                if (r(e.text, a.start)) continue
                let s = c({ elementKey: String(a.start), href: (0, i.gh)(a.path), label: (0, l.Nb)(a.label) })
                null != s && (t.push(e.text.slice(n, a.start), s), (n = a.end))
              }
              return (t.push(e.text.slice(n)), t)
            }
            let d = t + e.startIndex,
              u = t + e.endIndex,
              m = "`" === n[d - 1] || "`" === n[u],
              p = r(n, d) || r(n, "fenced-code" === e.kind ? d + e.text.lastIndexOf("```") : u - 1)
            if ("fenced-code" === e.kind) {
              let t = /^ {0,3}```(?!`)([^\r\n]*)\r?\n(?:([\s\S]*?)\r?\n)? {0,3}```[ \t]*$/.exec(e.text),
                i = n.lastIndexOf("\n", d - 1) + 1,
                l = n.indexOf("\n", u),
                r = n.slice(u, -1 === l ? n.length : l)
              return m ||
                p ||
                null == t ||
                !/^ {0,3}$/.test(n.slice(i, d)) ||
                t[1].includes("`") ||
                !/^[ \t]*\r?$/.test(r)
                ? e.text
                : (0, a.jsx)(o.Z, { content: t[2] ?? "", language: t[1].trim().split(/\s+/, 1)[0] || void 0 }, s)
            }
            if ("inline-code" === e.kind)
              return m || p || !/^`[^`\n]+`$/.test(e.text)
                ? e.text
                : (0, a.jsx)("code", { children: e.text.slice(1, -1) }, s)
          })
        },
      },
    )
  },
  XqCQ(e, t, n) {
    var a = n("ABep"),
      s = n("QosV"),
      i = n("bVeK")
    n.d(
      t,
      {},
      {
        l: function (e) {
          let t,
            n,
            l = (0, s.c)(3),
            { label: o } = e
          return (
            l[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, a.jsx)(i.se0, { "data-rtl-flip": "" })), (l[0] = t))
              : (t = l[0]),
            l[1] !== o
              ? ((n = (0, a.jsxs)("div", {
                  className: "flex max-w-[70%] items-start gap-1 self-end text-sm text-tertiary",
                  children: [t, (0, a.jsx)("span", { className: "truncate", title: o, children: o })],
                })),
                (l[1] = o),
                (l[2] = n))
              : (n = l[2]),
            n
          )
        },
      },
    )
  },
  ozji(e, t, n) {
    let a = (0, n("Qgfj").YK)({
      recent: {
        id: "conversation.timestampSeparator.recent",
        defaultMessage: "<day>{date}</day> {time}",
        description:
          "Timestamp in a Codex conversation, either separating messages or labeling an individual message. The date is a localized relative day such as Today, Yesterday, or Monday; time is the localized time of day. The day tag emphasizes the date when shown in a separator. Keep the complete label short and adjust its order or punctuation for the locale.",
      },
      older: {
        id: "conversation.timestampSeparator.older",
        defaultMessage: "<day>{date}</day> at {time}",
        description:
          "Centered timestamp separating older messages in a Codex conversation. The date is a localized calendar date, including the year when more than 365 days old; time is the localized time of day. The day tag emphasizes the date. Keep the complete label short and translate the date-time relationship naturally.",
      },
    })
    n.d(t, {}, { S: a })
  },
  vHM0(e, t, n) {
    var a = n("ABep"),
      s = n("QosV"),
      i = n("on57"),
      l = n("A5BN")
    n.d(
      t,
      {},
      {
        Z: function (e) {
          let t,
            n,
            o,
            r,
            c = (0, s.c)(17),
            {
              accentColor: d,
              alignment: u,
              children: m,
              hasPrompt: p,
              isAeonFormatted: h,
              isFromOtherUser: f,
              isTemporaryChat: g,
            } = e,
            x = void 0 !== h && h,
            v = void 0 !== g && g
          c[0] !== d ? ((t = { "--user-message-accent-color": d }), (c[0] = d), (c[1] = t)) : (t = c[1])
          let y = t,
            w = "start" === (void 0 === u ? "end" : u) && l.A.leadingBubble,
            b = x && l.A.compactMessageBubble,
            C = void 0 !== f && f && l.A.otherUserMessage,
            j = null != d && l.A.accentedBubble,
            A = x ? "py-2" : "py-2.5",
            I = v ? l.A.temporaryBubble : "rounded-2xl",
            k = !(void 0 === p || p) && "leading-none"
          return (
            c[2] !== j || c[3] !== A || c[4] !== I || c[5] !== k || c[6] !== w || c[7] !== b || c[8] !== C
              ? ((n = (0, i.A)(
                  "bg-user-message text-user-message min-w-0 max-w-(--user-chat-width) overflow-hidden break-words px-(--thread-content-margin) [&_.contain-inline-size]:[contain:initial]",
                  l.A.bubble,
                  w,
                  b,
                  C,
                  j,
                  A,
                  I,
                  k,
                  "relative text-start",
                )),
                (c[2] = j),
                (c[3] = A),
                (c[4] = I),
                (c[5] = k),
                (c[6] = w),
                (c[7] = b),
                (c[8] = C),
                (c[9] = n))
              : (n = c[9]),
            c[10] !== v
              ? ((o = v
                  ? (0, a.jsx)("svg", {
                      "aria-hidden": "true",
                      className: (0, i.A)("pointer-events-none absolute inset-0 h-full w-full", l.A.temporaryOutline),
                      focusable: "false",
                      children: (0, a.jsx)("rect", {
                        x: "0.5",
                        y: "0.5",
                        width: "calc(100% - 1px)",
                        height: "calc(100% - 1px)",
                        fill: "none",
                        stroke: "currentColor",
                        strokeOpacity: "0.4",
                        strokeWidth: "1",
                        strokeDasharray: "8 8",
                        vectorEffect: "non-scaling-stroke",
                      }),
                    })
                  : null),
                (c[10] = v),
                (c[11] = o))
              : (o = c[11]),
            c[12] !== m || c[13] !== y || c[14] !== n || c[15] !== o
              ? ((r = (0, a.jsxs)("div", { "data-user-message-bubble": !0, className: n, style: y, children: [o, m] })),
                (c[12] = m),
                (c[13] = y),
                (c[14] = n),
                (c[15] = o),
                (c[16] = r))
              : (r = c[16]),
            r
          )
        },
      },
    )
  },
  y5H2(e, t, n) {
    n.d(t, { s: () => en, R: () => et })
    var a = n("ABep"),
      s = n("QosV"),
      i = n("slpy"),
      l = n("on57"),
      o = n("zTeN"),
      r = n("NRIv"),
      c = n("zd8w"),
      d = n("Wf1j"),
      u = n("oyxz"),
      m = n("Y5Sy"),
      p = n("ycOY"),
      h = n("Oo9D"),
      f = n("FOks"),
      g = n("CohC"),
      x = n("r0y7"),
      v = n("yGJW"),
      y = n("Oj9r"),
      w = n("aepO"),
      b = n("Sm6l"),
      C = n("Uhbj"),
      j = n("Q30N"),
      A = n("qCdd"),
      I = n("WB4T"),
      k = n("uoSX"),
      M = n("vHM0"),
      S = n("v7qY"),
      N = n("NkEl"),
      T = n("xprp"),
      _ = n("vpGo"),
      R = n("sWza"),
      P = n("DBCl"),
      L = n("pxgo"),
      D = n("R2HH"),
      F = n("cRTP"),
      E = n("UNy4"),
      O = n("TYyY"),
      U = n("E9OS"),
      B = n("MnjQ"),
      z = n("aLwQ"),
      q = n("rS3J"),
      W = n("EULo"),
      H = n("td7D"),
      G = n("v5fl"),
      V = n("L03S"),
      $ = n("MUBd"),
      K = n("xqnZ"),
      Z = n("OWtl")
    n("Na0v")
    var Q = n("RxZZ")
    function J(e) {
      let t,
        n,
        i,
        l,
        r,
        p,
        f,
        g,
        x,
        v,
        y,
        w,
        C,
        j,
        A,
        I,
        k,
        M,
        S,
        N,
        T,
        _,
        R,
        B,
        J,
        X,
        ee,
        et,
        en,
        ea,
        es,
        ei,
        el,
        eo,
        er,
        ec,
        ed,
        eu,
        em = (0, s.c)(129),
        {
          allowEmptyMessage: ep,
          autoCorrect$: eh,
          cwd: ef,
          enablePlainMessageRichTextEditing: eg,
          hostId: ex,
          initialAuthoredMarkdownLinkSourcesByOccurrence: ev,
          initialMessage: ey,
          enableChatGptSystemHints: ew,
          initialLiteralMarkdownLinkSources: eb,
          initialRenderFormat: eC,
          localComposerFormat: ej,
          onCancel: eA,
          onDraftChange: eI,
          onEditInputMount: ek,
          onSubmit: eM,
        } = e,
        eS = void 0 !== ep && ep,
        eN = void 0 !== eg && eg,
        eT = void 0 === ev ? null : ev,
        e_ = void 0 === eb ? null : eb,
        eR = (0, o.gh)(Z.u),
        eP = (0, o.Ul)(eh ?? null),
        eL = (0, d.A)(),
        eD = (0, o.Ul)(m.Nk),
        eF = (0, Q.iK)(P.Szl.composerEnterBehavior),
        eE = null != ej,
        eO = (0, o.Ul)(eE ? "plain" === ej : h.Ds),
        eU = (0, c.useRef)(null)
      em[0] !== ew ||
      em[1] !== eN ||
      em[2] !== eF ||
      em[3] !== eT ||
      em[4] !== e_ ||
      em[5] !== ey ||
      em[6] !== eC ||
      em[7] !== eE ||
      em[8] !== eO
        ? ((t = () => {
            let e = (0, H.d5)(ey),
              t = (0, H.By)(ey),
              n = eE || "markdown" === eC || (eN && !(0, H.M1)(ey)),
              a = n ? "literal" : "plain"
            eE || "markdown" === eC ? (a = "prompt") : (e || t) && (a = n ? "literal-prompt" : "prompt")
            let s = n && !eE ? (e_ ?? (0, z.f5)(ey)) : null,
              i = (0, K.Sr)(ey, {
                defaultTextKind: a,
                enterBehavior: eF,
                enableRichText: n,
                enableSelectedTextLinks: !0,
                enableSlashCommands: !1,
                literalMarkdownLinkSources: s,
                plainTextMode: eO,
                restoreMarkdownLinksAsTextLinks: !0,
                restorePathLinksAsFileMentions: e || !t,
                restoreSerializedParagraphs: eE,
                suggestionOptions: { enableInlineSystemHints: ew },
              })
            return {
              authoredMarkdownLinkOccurrenceIds: new Set(
                ((eE ? null : i.getLiteralMarkdownLinks()) ?? []).flatMap((e, t) => {
                  let { occurrenceId: n } = e
                  return null != n && (null != eT ? null != eT[t] : "markdown" === eC) ? [n] : []
                }),
              ),
              editor: i,
            }
          }),
          (em[0] = ew),
          (em[1] = eN),
          (em[2] = eF),
          (em[3] = eT),
          (em[4] = e_),
          (em[5] = ey),
          (em[6] = eC),
          (em[7] = eE),
          (em[8] = eO),
          (em[9] = t))
        : (t = em[9])
      let [eB] = (0, c.useState)(t),
        { authoredMarkdownLinkOccurrenceIds: ez, editor: eq } = eB
      em[10] !== eq.view.dom || em[11] !== ek
        ? ((n = () => ek?.(eq.view.dom)), (em[10] = eq.view.dom), (em[11] = ek), (em[12] = n))
        : (n = em[12])
      let eW = (0, c.useEffectEvent)(n)
      ;(em[13] !== eW ? ((i = () => eW()), (em[13] = eW), (em[14] = i)) : (i = em[14]),
        em[15] !== eq ? ((l = [eq]), (em[15] = eq), (em[16] = l)) : (l = em[16]),
        (0, c.useLayoutEffect)(i, l),
        em[17] !== eq || em[18] !== eF
          ? ((r = () => {
              eq.setEnterBehavior(eF)
            }),
            (p = [eq, eF]),
            (em[17] = eq),
            (em[18] = eF),
            (em[19] = r),
            (em[20] = p))
          : ((r = em[19]), (p = em[20])),
        (0, c.useLayoutEffect)(r, p),
        em[21] !== eq || em[22] !== eO
          ? ((f = () => {
              eq.setPlainTextMode(eO)
            }),
            (g = [eq, eO]),
            (em[21] = eq),
            (em[22] = eO),
            (em[23] = f),
            (em[24] = g))
          : ((f = em[23]), (g = em[24])),
        (0, c.useEffect)(f, g),
        em[25] !== eq
          ? ((x = () => {
              eq.view.isDestroyed || eq.destroy()
            }),
            (em[25] = eq),
            (em[26] = x))
          : (x = em[26]))
      let eH = x
      ;(0, K.fP)(eH, eq)
      e: {
        let e
        if (null == ef) {
          v = void 0
          break e
        }
        ;(em[27] !== ef ? ((e = [ef]), (em[27] = ef), (em[28] = e)) : (e = em[28]), (v = e))
      }
      let eG = v,
        eV = (0, V.w)(eq),
        e$ = (0, K.a6)(eq),
        eK = eV.ui?.active ?? !1
      em[29] !== eK ? ((y = { anchorRef: eU, isActive: eK }), (em[29] = eK), (em[30] = y)) : (y = em[30])
      let eZ = (0, $.D)(y),
        eQ = e$.ui?.active ?? !1
      em[31] !== eQ ? ((w = { anchorRef: eU, isActive: eQ }), (em[31] = eQ), (em[32] = w)) : (w = em[32])
      let eJ = (0, $.D)(w),
        [eY, eX] = (0, c.useState)(!1),
        e1 = (0, G.lD)(eq, Y, "document")
      em[33] !== ez || em[34] !== eq || em[35] !== ew || em[36] !== eE
        ? ((C = (e) =>
            eE
              ? {
                  authoredMarkdownLinkSourcesByOccurrence: null,
                  literalMarkdownLinkSources: null,
                  message: e,
                  renderFormat: "markdown" === eq.persistedTextFormat ? "markdown" : void 0,
                }
              : (function (e, t, n, a) {
                  let s = e.getLiteralMarkdownLinks(),
                    i = a ? e.getChatGptPrompt().systemHints : void 0
                  if (null == s)
                    return {
                      authoredMarkdownLinkSourcesByOccurrence: null,
                      literalMarkdownLinkSources: null,
                      message: (0, q.L0)(e.getPlainText()),
                      renderFormat: void 0,
                      inlineSystemHints: i,
                    }
                  let l = e.getPlainText({ preserveLinkMarkers: !0 }),
                    o = (0, W.C4)(l).some(({ path: e }) => e.startsWith(q.LT)),
                    r = s.map(({ literalSource: e }) => e),
                    c = s.map(({ literalSource: e, occurrenceId: n, serializedLink: a }) =>
                      null != n && t.has(n) ? (e ?? a) : null,
                    )
                  for (; c.length > 0 && null == c.at(-1);) c.pop()
                  let d =
                    e.hasMarkdownFormatting({ includeLinks: !1 }) || o || c.some((e) => null != e) ? "markdown" : void 0
                  return {
                    authoredMarkdownLinkSourcesByOccurrence: c,
                    literalMarkdownLinkSources: r,
                    message: null == d ? l : (0, z.NA)(n, r),
                    renderFormat: d,
                    inlineSystemHints: i,
                  }
                })(eq, ez, e, ew)),
          (em[33] = ez),
          (em[34] = eq),
          (em[35] = ew),
          (em[36] = eE),
          (em[37] = C))
        : (C = em[37])
      let e0 = C
      em[38] !== eq || em[39] !== eI || em[40] !== e0
        ? ((j = (e) => {
            e && eI(e0(eq.getPersistedText()))
          }),
          (em[38] = eq),
          (em[39] = eI),
          (em[40] = e0),
          (em[41] = j))
        : (j = em[41])
      let e2 = (0, c.useEffectEvent)(j)
      em[42] !== eA
        ? ((A = () => {
            eA()
          }),
          (em[42] = eA),
          (em[43] = A))
        : (A = em[43])
      let e3 = (0, c.useEffectEvent)(A)
      ;(em[44] !== eq.view || em[45] !== e2
        ? ((I = () => (0, K.A$)(eq.view, e2)), (em[44] = eq.view), (em[45] = e2), (em[46] = I))
        : (I = em[46]),
        em[47] !== eq ? ((k = [eq]), (em[47] = eq), (em[48] = k)) : (k = em[48]),
        (0, c.useEffect)(I, k),
        em[49] !== eq.view || em[50] !== e3
          ? ((M = () =>
              (0, U.g)(eq.view, {
                Escape: (e) =>
                  !e.defaultPrevented &&
                  !e.isComposing &&
                  229 !== e.keyCode &&
                  O.Gq.getState(eq.view.state)?.active !== !0 &&
                  (e.preventDefault(), e.repeat || e3(), !0),
              })),
            (em[49] = eq.view),
            (em[50] = e3),
            (em[51] = M))
          : (M = em[51]),
        em[52] !== eq ? ((S = [eq]), (em[52] = eq), (em[53] = S)) : (S = em[53]),
        (0, c.useEffect)(M, S),
        em[54] !== eS ||
        em[55] !== eq ||
        em[56] !== eE ||
        em[57] !== eY ||
        em[58] !== eM ||
        em[59] !== e0 ||
        em[60] !== eR
          ? ((N = async () => {
              let e = Y(eq)
              !(eY || eR.get(m.Nk)) &&
                (e || eS) &&
                (eX(!0),
                await (async () => {
                  let {
                    message: t,
                    renderFormat: n,
                    inlineSystemHints: a,
                  } = e0(eq.getText(void 0, { preserveLiteralMarkdown: eE }))
                  await eM(e ? t.trim() : "", e || eE ? n : void 0, a)
                })().finally(() => {
                  eX(!1)
                }))
            }),
            (em[54] = eS),
            (em[55] = eq),
            (em[56] = eE),
            (em[57] = eY),
            (em[58] = eM),
            (em[59] = e0),
            (em[60] = eR),
            (em[61] = N))
          : (N = em[61]))
      let e4 = N
      em[62] !== e4
        ? ((T = (e) => {
            ;(e.preventDefault(), e4())
          }),
          (em[62] = e4),
          (em[63] = T))
        : (T = em[63])
      let e5 = eV.ui?.active ?? !1,
        e6 = eV.ui?.query ?? "",
        e7 = eV.ui?.source ?? null
      ;(em[64] !== ex ||
      em[65] !== eV.addMention ||
      em[66] !== eV.closeAutocomplete ||
      em[67] !== eV.setSelectedMention ||
      em[68] !== eG ||
      em[69] !== e6 ||
      em[70] !== e7
        ? ((_ = (0, a.jsx)(D.Ox, {
            hostId: ex,
            onAddContext: eV.addMention,
            onRequestClose: eV.closeAutocomplete,
            onUpdateSelectedMention: eV.setSelectedMention,
            query: e6,
            fileSearchRootPaths: eG,
            skillRoots: eG,
            source: e7,
          })),
          (em[64] = ex),
          (em[65] = eV.addMention),
          (em[66] = eV.closeAutocomplete),
          (em[67] = eV.setSelectedMention),
          (em[68] = eG),
          (em[69] = e6),
          (em[70] = e7),
          (em[71] = _))
        : (_ = em[71]),
        em[72] !== eZ || em[73] !== eq || em[74] !== eV.ui || em[75] !== e5 || em[76] !== _
          ? ((R = (0, a.jsx)(L.J, {
              anchorRef: eU,
              composerController: eq,
              isActive: e5,
              mentionUiState: eV.ui,
              placement: eZ,
              children: _,
            })),
            (em[72] = eZ),
            (em[73] = eq),
            (em[74] = eV.ui),
            (em[75] = e5),
            (em[76] = _),
            (em[77] = R))
          : (R = em[77]))
      let e8 = ef ?? void 0
      em[78] !== eq || em[79] !== ex || em[80] !== eG || em[81] !== e$ || em[82] !== eJ || em[83] !== e8
        ? ((B = (0, a.jsx)(K.q1, {
            autocomplete: e$,
            cwd: e8,
            roots: eG,
            hostId: ex,
            composerController: eq,
            anchorRef: eU,
            placement: eJ,
          })),
          (em[78] = eq),
          (em[79] = ex),
          (em[80] = eG),
          (em[81] = e$),
          (em[82] = eJ),
          (em[83] = e8),
          (em[84] = B))
        : (B = em[84])
      let e9 = eV.ui?.active === !0
      em[85] !== eq || em[86] !== ex || em[87] !== eG || em[88] !== e9
        ? ((J = (0, a.jsx)(E.Y, { composerController: eq, hostId: ex, roots: eG, shouldLoadPlugins: e9 })),
          (em[85] = eq),
          (em[86] = ex),
          (em[87] = eG),
          (em[88] = e9),
          (em[89] = J))
        : (J = em[89])
      let te = eP ?? void 0
      ;(em[90] !== eL
        ? ((X = eL.formatMessage({
            id: "codex.userMessage.editTextareaAriaLabel",
            defaultMessage: "Edit message",
            description: "Aria label for the editor used to edit the previous user message",
          })),
          (em[90] = eL),
          (em[91] = X))
        : (X = em[91]),
        em[92] !== eL
          ? ((ee = eL.formatMessage({
              id: "codex.userMessage.editPlaceholder",
              defaultMessage: "Edit message",
              description: "Placeholder shown in the editor used to edit a previous user message",
            })),
            (em[92] = eL),
            (em[93] = ee))
          : (ee = em[93]),
        em[94] !== eV.handleMentionEvent || em[95] !== e$.handleMentionEvent
          ? ((et = (e) => {
              ;(0, F.V)(e, { onAtMention: eV.handleMentionEvent, onSkillMention: e$.handleMentionEvent })
            }),
            (em[94] = eV.handleMentionEvent),
            (em[95] = e$.handleMentionEvent),
            (em[96] = et))
          : (et = em[96]),
        em[97] !== e4
          ? ((en = () => {
              e4()
            }),
            (em[97] = e4),
            (em[98] = en))
          : (en = em[98]),
        em[99] !== eq || em[100] !== te || em[101] !== X || em[102] !== ee || em[103] !== et || em[104] !== en
          ? ((ea = (0, a.jsx)(K.kB, {
              autoCorrect: te,
              ariaLabel: X,
              className: "font-content text-base",
              composerController: eq,
              placeholder: ee,
              onSuggestionHandler: et,
              onSubmit: en,
            })),
            (em[99] = eq),
            (em[100] = te),
            (em[101] = X),
            (em[102] = ee),
            (em[103] = et),
            (em[104] = en),
            (em[105] = ea))
          : (ea = em[105]),
        em[106] !== eD || em[107] !== ea
          ? ((es = (0, a.jsx)("div", {
              className: "mb-2 flex-grow overflow-y-auto px-3 pt-3",
              "data-codex-escape-boundary": !0,
              inert: eD,
              children: ea,
            })),
            (em[106] = eD),
            (em[107] = ea),
            (em[108] = es))
          : (es = em[108]),
        em[109] === Symbol.for("react.memo_cache_sentinel")
          ? ((ei = (0, a.jsx)(u.A, {
              id: "codex.userMessage.cancelEditMessage",
              defaultMessage: "Cancel",
              description: "Button label for canceling an edited user message",
            })),
            (em[109] = ei))
          : (ei = em[109]),
        em[110] !== eY || em[111] !== eA
          ? ((el = (0, a.jsx)(b.$, { color: "outline", size: "toolbar", disabled: eY, onClick: eA, children: ei })),
            (em[110] = eY),
            (em[111] = eA),
            (em[112] = el))
          : (el = em[112]))
      let tt = eD || (!e1 && !eS)
      return (
        em[113] === Symbol.for("react.memo_cache_sentinel")
          ? ((eo = (0, a.jsx)(u.A, {
              id: "codex.userMessage.sendEditedMessage",
              defaultMessage: "Send",
              description: "Button label for submitting an edited user message",
            })),
            (em[113] = eo))
          : (eo = em[113]),
        em[114] !== eY || em[115] !== tt
          ? ((er = (0, a.jsx)(b.$, {
              color: "primary",
              size: "toolbar",
              loading: eY,
              disabled: tt,
              type: "submit",
              children: eo,
            })),
            (em[114] = eY),
            (em[115] = tt),
            (em[116] = er))
          : (er = em[116]),
        em[117] !== el || em[118] !== er
          ? ((ec = (0, a.jsxs)("div", { className: "flex justify-end gap-1.5 px-3 pb-3", children: [el, er] })),
            (em[117] = el),
            (em[118] = er),
            (em[119] = ec))
          : (ec = em[119]),
        em[120] !== R || em[121] !== B || em[122] !== J || em[123] !== es || em[124] !== ec
          ? ((ed = (0, a.jsxs)("div", {
              ref: eU,
              className: "relative z-10 flex min-h-0 flex-1 flex-col",
              children: [R, B, J, es, ec],
            })),
            (em[120] = R),
            (em[121] = B),
            (em[122] = J),
            (em[123] = es),
            (em[124] = ec),
            (em[125] = ed))
          : (ed = em[125]),
        em[126] !== T || em[127] !== ed
          ? ((eu = (0, a.jsx)("form", {
              className: "relative flex w-full flex-col rounded-3xl bg-text/5 dark:bg-primary-soft",
              onSubmit: T,
              children: ed,
            })),
            (em[126] = T),
            (em[127] = ed),
            (em[128] = eu))
          : (eu = em[128]),
        eu
      )
    }
    function Y(e) {
      let t = !1
      return (
        e.view.state.doc.descendants(
          (e) => !(t = t || (e.isText && e.textContent.trim().length > 0) || null != (0, B.wF)(e)),
        ),
        t
      )
    }
    var X = n("A5BN")
    let ee =
      "opacity-0 group-has-[:focus-visible]/user-message:opacity-100 group-hover/user-message:opacity-100 [@media(hover:none)]:opacity-100"
    function et(e) {
      let t,
        n,
        h,
        P,
        L,
        D,
        F,
        E,
        O,
        U,
        B,
        z,
        q,
        W,
        H,
        G,
        V,
        $,
        K,
        Z,
        Q,
        Y,
        et,
        en,
        es,
        ei,
        el = (0, s.c)(168),
        {
          message: eo,
          localComposerFormat: er,
          alignment: ec,
          accentColor: ed,
          senderAccountUserId: eu,
          sentAtMs: em,
          collapsedLineCount: ep,
          compactActions: eh,
          hideActions: ef,
          messageStatus: eg,
          messageStatusIcon: ex,
          messageReaction: ev,
          messageReactionPlacement: ey,
          hookStats: ew,
          referencesPriorConversation: eb,
          reviewMode: eC,
          pullRequestFixMode: ej,
          autoResolveSync: eA,
          allowEmptyEditMessage: eI,
          enablePlainMessageRichTextEditing: ek,
          hasExternalAttachments: eM,
          isAeonFormatted: eS,
          isTemporaryChat: eN,
          commentCount: eT,
          additionalActions: e_,
          messageHeader: eR,
          messageContent: eP,
          copyContentRef: eL,
          preserveWhitespaceInCopyHtml: eD,
          editAutoCorrect$: eF,
          editMessageFormat: eE,
          enableChatGptSystemHints: eO,
          initialEditMessage: eU,
          onCopy: eB,
          onEditInputMount: ez,
          onEditMessage: eq,
          onCopySucceeded: eW,
          threadId: eH,
          turnId: eG,
          cwd: eV,
          hostId: e$,
        } = e,
        eK = void 0 === ec ? "end" : ec,
        eZ = void 0 !== eh && eh,
        eQ = void 0 !== ef && ef,
        eJ = void 0 === ey ? "corner" : ey,
        eY = void 0 !== eb && eb,
        eX = void 0 !== eC && eC,
        e1 = void 0 !== ej && ej,
        e0 = void 0 !== eA && eA,
        e2 = void 0 !== eI && eI,
        e3 = void 0 !== ek && ek,
        e4 = void 0 !== eN && eN,
        e5 = void 0 === eT ? 0 : eT,
        e6 = void 0 !== eD && eD,
        e7 = (0, o.gh)(y.GD),
        e8 = (0, o.Ul)(m.Nk)
      el[0] !== e7.value || el[1] !== eH
        ? ((t = eH ?? (0, y.Qm)(e7.value)), (el[0] = e7.value), (el[1] = eH), (el[2] = t))
        : (t = el[2])
      let e9 = (0, o._U)(null == eS && f.X, t),
        te = eS ?? e9,
        tt = (0, o.Ul)(null != eu ? x.bm : null),
        tn = null != tt && eu !== tt.accountUserId && eu !== tt.email,
        ta = (0, r.Dh)(eo),
        ts = ta.trim(),
        ti = (0, p.y)(ta),
        tl = null != eq && null != eG && !ti,
        [to, tr] = (0, c.useState)(!1),
        tc = (0, c.useRef)(null),
        td = (0, c.useRef)(!1),
        tu = (0, o._U)(R.L, eG),
        tm = tl && null != tu,
        tp = (0, d.A)(),
        th = (0, o.Ul)(v.YV),
        tf = ti
          ? tp.formatMessage({
              id: "codex.userMessage.implementPlan",
              defaultMessage: "Yes, implement this plan",
              description: "Display text for the synthetic implement-plan follow-up prompt",
            })
          : ta,
        tg = tf.trim().length > 0,
        tx = eY || eX || e1 || e0 || (void 0 !== eM && eM) || e5 > 0,
        tv = tg || !tx,
        ty = tx || null != eg || (!eZ && !eQ && !te)
      el[3] !== eL ||
      el[4] !== ti ||
      el[5] !== er ||
      el[6] !== eB ||
      el[7] !== eW ||
      el[8] !== e6 ||
      el[9] !== th ||
      el[10] !== tr ||
      el[11] !== eH ||
      el[12] !== ts ||
      el[13] !== eG
        ? ((n = (e) => {
            if (td.current) return
            ;((td.current = !0),
              eB?.(),
              null != eH &&
                null != eG &&
                th.submitCodexAnalyticsEvent?.({
                  action: "copy",
                  eventKind: "action",
                  metadata: { surface: "user_message" },
                  threadId: eH,
                  turnId: eG,
                }))
            let t = (function ({ contentRef: e, prompt: t, preserveWhitespaceInHtml: n = !1 }) {
              let a = (0, _.c)(t),
                s =
                  null == e
                    ? null
                    : (function (e) {
                        let t = e.current?.closest("[data-search-result-target]"),
                          n =
                            null == t
                              ? void 0
                              : (0, N.k)(t).find(({ element: e, target: n }) => e === t && n.isTruncated)?.target
                        n?.reveal != null && (0, S.flushSync)(n.reveal)
                        try {
                          let t = e.current
                          return null == t ? null : (0, T.WW)(t, { includeCollapsedContent: !0 })
                        } finally {
                          n?.reveal != null && (0, S.flushSync)(n.reveal)
                        }
                      })(e)
              return null == s
                ? a
                : {
                    "text/plain": a,
                    "text/html": n ? `<div style="white-space: pre-wrap">${s.htmlText}</div>` : s.htmlText,
                  }
            })({ contentRef: ti ? null : (eL ?? tc), prompt: ts, preserveWhitespaceInHtml: e6 || "plain" === er })
            ;(0, w.E)(t)
              .then((n) => {
                n && (eW?.("string" == typeof t ? t : t["text/plain"], e), tr(!0), setTimeout(() => tr(!1), 1500))
              })
              .finally(() => {
                td.current = !1
              })
          }),
          (el[3] = eL),
          (el[4] = ti),
          (el[5] = er),
          (el[6] = eB),
          (el[7] = eW),
          (el[8] = e6),
          (el[9] = th),
          (el[10] = tr),
          (el[11] = eH),
          (el[12] = ts),
          (el[13] = eG),
          (el[14] = n))
        : (n = el[14])
      let tw = n
      el[15] !== e7 || el[16] !== eG
        ? ((h = (e) => {
            e7.set(R.L, eG, e)
          }),
          (el[15] = e7),
          (el[16] = eG),
          (el[17] = h))
        : (h = el[17])
      let tb = h
      el[18] !== eq || el[19] !== tb
        ? ((P = async (e, t, n) => {
            if (null != eq)
              try {
                ;(null != n ? await eq(e, t, n) : null == t ? await eq(e) : await eq(e, t), tb(null))
              } catch {}
          }),
          (el[18] = eq),
          (el[19] = tb),
          (el[20] = P))
        : (P = el[20])
      let tC = P
      el[21] !== tu ||
      el[22] !== eE ||
      el[23] !== eU ||
      el[24] !== th ||
      el[25] !== e7 ||
      el[26] !== tb ||
      el[27] !== eH ||
      el[28] !== ts ||
      el[29] !== eG
        ? ((L = () => {
            e7.get(m.Nk) ||
              (null != eH &&
                null != eG &&
                th.submitCodexAnalyticsEvent?.({
                  action: "edit",
                  eventKind: "action",
                  metadata: { surface: "user_message" },
                  threadId: eH,
                  turnId: eG,
                }),
              null == tu &&
                tb({
                  authoredMarkdownLinkSourcesByOccurrence: null,
                  literalMarkdownLinkSources: null,
                  message: eU?.trim() ?? ts,
                  renderFormat: eE,
                }))
          }),
          (el[21] = tu),
          (el[22] = eE),
          (el[23] = eU),
          (el[24] = th),
          (el[25] = e7),
          (el[26] = tb),
          (el[27] = eH),
          (el[28] = ts),
          (el[29] = eG),
          (el[30] = L))
        : (L = el[30])
      let tj = L
      el[31] !== ep ||
      el[32] !== eV ||
      el[33] !== tf ||
      el[34] !== tg ||
      el[35] !== e$ ||
      el[36] !== te ||
      el[37] !== er ||
      el[38] !== eP
        ? ((D = tg
            ? (("function" == typeof eP ? eP(te) : eP) ??
              (0, a.jsx)(I.L, {
                ref: tc,
                plainText: "plain" === er,
                hasSerializedParagraphs: "markdown" === er,
                text: tf,
                cwd: eV ?? null,
                hostId: e$,
                collapsedLineCount: ep,
              }))
            : (0, a.jsx)("div", {
                className: "mb-px text-size-chat text-codex-description",
                children: (0, a.jsx)(u.A, {
                  id: "codex.userMessage.noContent",
                  defaultMessage: "(No content)",
                  description: "Text for when a user message has no content",
                }),
              })),
          (el[31] = ep),
          (el[32] = eV),
          (el[33] = tf),
          (el[34] = tg),
          (el[35] = e$),
          (el[36] = te),
          (el[37] = er),
          (el[38] = eP),
          (el[39] = D))
        : (D = el[39])
      let tA = D
      el[40] !== tp || el[41] !== to
        ? ((F = to
            ? tp.formatMessage({
                id: "codex.userMessage.copiedAriaLabel",
                defaultMessage: "Copied",
                description: "Aria label for the copy button after the content has been copied",
              })
            : tp.formatMessage({
                id: "codex.userMessage.copyAriaLabel",
                defaultMessage: "Copy message",
                description: "Aria label for the button that copies the user's message",
              })),
          (el[40] = tp),
          (el[41] = to),
          (el[42] = F))
        : (F = el[42])
      let tI = F,
        tk = to ? void 0 : tw
      ;(el[43] !== to
        ? ((E = to ? (0, a.jsx)(C.A, { className: "icon-xs" }) : (0, a.jsx)(j.A, { className: "icon-xs" })),
          (el[43] = to),
          (el[44] = E))
        : (E = el[44]),
        el[45] !== tI || el[46] !== tk || el[47] !== E
          ? ((O = (0, a.jsx)(b.$, {
              className: "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
              color: "ghost",
              size: "icon",
              "aria-label": tI,
              onClick: tk,
              children: E,
            })),
            (el[45] = tI),
            (el[46] = tk),
            (el[47] = E),
            (el[48] = O))
          : (O = el[48]),
        el[49] !== tI || el[50] !== O
          ? ((U = (0, a.jsx)(i.m, { content: tI, children: O })), (el[49] = tI), (el[50] = O), (el[51] = U))
          : (U = el[51]))
      let tM = U
      el[52] !== ed ||
      el[53] !== eK ||
      el[54] !== e2 ||
      el[55] !== eV ||
      el[56] !== eF ||
      el[57] !== tu ||
      el[58] !== eO ||
      el[59] !== e3 ||
      el[60] !== tC ||
      el[61] !== tg ||
      el[62] !== e$ ||
      el[63] !== te ||
      el[64] !== tm ||
      el[65] !== tn ||
      el[66] !== e4 ||
      el[67] !== er ||
      el[68] !== ez ||
      el[69] !== tb ||
      el[70] !== tv ||
      el[71] !== tA
        ? ((B = tm
            ? (0, a.jsx)("div", {
                className: "w-full p-px",
                children: (0, a.jsx)(J, {
                  allowEmptyMessage: e2,
                  autoCorrect$: eF,
                  cwd: eV ?? null,
                  enableChatGptSystemHints: eO,
                  enablePlainMessageRichTextEditing: e3,
                  hostId: e$,
                  initialAuthoredMarkdownLinkSourcesByOccurrence: tu.authoredMarkdownLinkSourcesByOccurrence,
                  initialMessage: tu.message,
                  initialLiteralMarkdownLinkSources: tu.literalMarkdownLinkSources,
                  initialRenderFormat: tu.renderFormat,
                  localComposerFormat: er,
                  onCancel: () => {
                    tb(null)
                  },
                  onDraftChange: tb,
                  onEditInputMount: ez,
                  onSubmit: tC,
                }),
              })
            : tv
              ? (0, a.jsx)(M.Z, {
                  accentColor: ed,
                  alignment: eK,
                  hasPrompt: tg,
                  isAeonFormatted: te,
                  isFromOtherUser: tn,
                  isTemporaryChat: e4,
                  children: tA,
                })
              : null),
          (el[52] = ed),
          (el[53] = eK),
          (el[54] = e2),
          (el[55] = eV),
          (el[56] = eF),
          (el[57] = tu),
          (el[58] = eO),
          (el[59] = e3),
          (el[60] = tC),
          (el[61] = tg),
          (el[62] = e$),
          (el[63] = te),
          (el[64] = tm),
          (el[65] = tn),
          (el[66] = e4),
          (el[67] = er),
          (el[68] = ez),
          (el[69] = tb),
          (el[70] = tv),
          (el[71] = tA),
          (el[72] = B))
        : (B = el[72])
      let tS = B,
        tN = !tm && null != ev,
        tT = tn && X.A.otherUserMessage
      ;(el[73] !== tT
        ? ((z = (0, l.A)(
            X.A.compactMessageReaction,
            tT,
            "relative flex size-7 items-center justify-center rounded-full border-2 border-surface [&_button]:absolute [&_button]:-inset-0.5 [&_button]:size-auto [&_button]:cursor-default [&_button]:text-sm [&_button]:drop-shadow-none",
          )),
          (el[73] = tT),
          (el[74] = z))
        : (z = el[74]),
        el[75] !== ev || el[76] !== z
          ? ((q = (0, a.jsx)("div", { className: z, children: ev })), (el[75] = ev), (el[76] = z), (el[77] = q))
          : (q = el[77]))
      let t_ = q,
        tR = tS
      if (te) {
        let e,
          t,
          n,
          s,
          i,
          o,
          r,
          c = tm
            ? "flex w-full flex-col items-end gap-1"
            : "grid max-w-full grid-cols-[auto_minmax(0,max-content)] items-center gap-x-2 gap-y-1",
          d = null == e_ && "gap-x-0",
          u = tN && null == eR && "pt-5"
        ;(el[78] !== c || el[79] !== d || el[80] !== u
          ? ((e = (0, l.A)(c, d, u)), (el[78] = c), (el[79] = d), (el[80] = u), (el[81] = e))
          : (e = el[81]),
          el[82] !== eR
            ? ((t =
                null == eR
                  ? null
                  : (0, a.jsx)("div", {
                      className: (0, l.A)("col-start-2 flex min-w-0 justify-end", X.A.compactMessageContainer),
                      children: eR,
                    })),
              (el[82] = eR),
              (el[83] = t))
            : (t = el[83]),
          el[84] !== e_ || el[85] !== tm
            ? ((n = tm || null == e_ ? null : (0, a.jsx)("div", { className: "col-start-1", children: e_ })),
              (el[84] = e_),
              (el[85] = tm),
              (el[86] = n))
            : (n = el[86]))
        let m = tm && "w-full",
          p = !tm && X.A.compactMessageContainer,
          h = tN && null != eR && "mt-5"
        el[87] !== m || el[88] !== p || el[89] !== h
          ? ((s = (0, l.A)("relative col-start-2 min-w-0 justify-self-end", m, p, h)),
            (el[87] = m),
            (el[88] = p),
            (el[89] = h),
            (el[90] = s))
          : (s = el[90])
        let f = tN ? t_ : null
        ;(el[91] !== f
          ? ((i = (0, a.jsx)("div", {
              className: "absolute -start-3.5 -top-5 z-10 translate-x-0.5 translate-y-0.5 rtl:-translate-x-0.5",
              "aria-live": "polite",
              "aria-atomic": !0,
              children: f,
            })),
            (el[91] = f),
            (el[92] = i))
          : (i = el[92]),
          el[93] !== tS || el[94] !== s || el[95] !== i
            ? ((o = (0, a.jsxs)("div", { className: s, children: [tS, i] })),
              (el[93] = tS),
              (el[94] = s),
              (el[95] = i),
              (el[96] = o))
            : (o = el[96]),
          el[97] !== e || el[98] !== t || el[99] !== n || el[100] !== o
            ? ((r = (0, a.jsxs)("div", { className: e, children: [t, n, o] })),
              (el[97] = e),
              (el[98] = t),
              (el[99] = n),
              (el[100] = o),
              (el[101] = r))
            : (r = el[101]),
          (tR = r))
      } else if (null != ev) {
        let e,
          t,
          n,
          s = "corner" === eJ && "mb-2"
        el[102] !== s
          ? ((e = (0, l.A)("relative flex w-full justify-end", s)), (el[102] = s), (el[103] = e))
          : (e = el[103])
        let i =
            "below" === eJ
              ? "absolute end-4 -bottom-5 z-1"
              : "absolute -end-0.5 -bottom-0.5 translate-x-1/4 translate-y-1/4 rtl:-translate-x-1/4",
          o = tN ? ev : null
        ;(el[104] !== i || el[105] !== o
          ? ((t = (0, a.jsx)("div", { className: i, "aria-live": "polite", "aria-atomic": !0, children: o })),
            (el[104] = i),
            (el[105] = o),
            (el[106] = t))
          : (t = el[106]),
          el[107] !== tS || el[108] !== e || el[109] !== t
            ? ((n = (0, a.jsxs)("div", { className: e, children: [tS, t] })),
              (el[107] = tS),
              (el[108] = e),
              (el[109] = t),
              (el[110] = n))
            : (n = el[110]),
          (tR = n))
      }
      el[111] !== tp
        ? ((W = tp.formatMessage({
            id: "codex.userMessage.editAriaLabel",
            defaultMessage: "Edit message",
            description: "Tooltip and accessible label for the button that edits the user's message",
          })),
          (el[111] = tp),
          (el[112] = W))
        : (W = el[112])
      let tP = W,
        tL = "start" === eK ? "items-start" : "items-end"
      el[113] !== tL
        ? ((H = (0, l.A)(
            "group/user-message flex w-full flex-col gap-1 print:group-data-[print-formatting]/conversation-print:items-start",
            tL,
          )),
          (el[113] = tL),
          (el[114] = H))
        : (H = el[114])
      let tD = te ? null : eR
      el[115] !== eK ||
      el[116] !== eZ ||
      el[117] !== tM ||
      el[118] !== tg ||
      el[119] !== eQ ||
      el[120] !== te ||
      el[121] !== tm ||
      el[122] !== tR
        ? ((G =
            !eZ || eQ || !tg || tm || te
              ? tR
              : (0, a.jsxs)("div", {
                  className: (0, l.A)(
                    "flex w-full items-center gap-1",
                    "start" === eK ? "flex-row-reverse justify-end" : "justify-end",
                  ),
                  children: [(0, a.jsx)("div", { className: (0, l.A)("turn-action-controls", ee), children: tM }), tR],
                })),
          (el[115] = eK),
          (el[116] = eZ),
          (el[117] = tM),
          (el[118] = tg),
          (el[119] = eQ),
          (el[120] = te),
          (el[121] = tm),
          (el[122] = tR),
          (el[123] = G))
        : (G = el[123])
      let tF = "below" === eJ && tN && "me-12",
        tE = !ty && "hidden"
      return (
        el[124] !== tF || el[125] !== tE
          ? ((V = (0, l.A)("flex flex-row-reverse items-center gap-1", tF, tE)),
            (el[124] = tF),
            (el[125] = tE),
            (el[126] = V))
          : (V = el[126]),
        el[127] !== eg || el[128] !== ex
          ? (($ =
              null != eg
                ? (0, a.jsxs)("div", {
                    className: "ms-1 me-1 flex items-center gap-2",
                    children: [ex, (0, a.jsx)(ea, { children: eg })],
                  })
                : null),
            (el[127] = eg),
            (el[128] = ex),
            (el[129] = $))
          : ($ = el[129]),
        el[130] !== eY
          ? ((K =
              eY &&
              (0, a.jsx)(ea, {
                children: (0, a.jsx)(u.A, {
                  id: "codex.userMessage.priorConversation",
                  defaultMessage: "References prior conversation",
                  description: "Text for the prior conversation button",
                }),
              })),
            (el[130] = eY),
            (el[131] = K))
          : (K = el[131]),
        el[132] !== eX
          ? ((Z =
              eX &&
              (0, a.jsx)(ea, {
                children: (0, a.jsx)(u.A, {
                  id: "codex.userMessage.reviewMode",
                  defaultMessage: "Review mode",
                  description: "Chip shown when a user asked for a code review",
                }),
              })),
            (el[132] = eX),
            (el[133] = Z))
          : (Z = el[133]),
        el[134] !== e1
          ? ((Q =
              e1 &&
              (0, a.jsx)(ea, {
                children: (0, a.jsx)(u.A, {
                  id: "codex.userMessage.pullRequestFixMode",
                  defaultMessage: "PR fix",
                  description: "Chip shown when the user started a pull request CI fix task",
                }),
              })),
            (el[134] = e1),
            (el[135] = Q))
          : (Q = el[135]),
        el[136] !== e0
          ? ((Y =
              e0 &&
              (0, a.jsx)(ea, {
                children: (0, a.jsx)(u.A, {
                  id: "codex.userMessage.autoResolveSync",
                  defaultMessage: "Auto resolve conflicts",
                  description: "Chip shown when the user requested auto resolve for handoff conflicts",
                }),
              })),
            (el[136] = e0),
            (el[137] = Y))
          : (Y = el[137]),
        el[138] !== e5
          ? ((et =
              e5 > 0 &&
              (0, a.jsx)(ea, {
                children: (0, a.jsx)(u.A, {
                  id: "codex.userMessage.commentCount",
                  defaultMessage: "{count, plural, one {# comment} other {# comments}}",
                  description: "Chip shown when the user included inline diff comments in the prompt",
                  values: { count: e5 },
                }),
              })),
            (el[138] = e5),
            (el[139] = et))
          : (et = el[139]),
        el[140] !== e_ ||
        el[141] !== tl ||
        el[142] !== eZ ||
        el[143] !== tM ||
        el[144] !== tP ||
        el[145] !== tj ||
        el[146] !== tg ||
        el[147] !== eQ ||
        el[148] !== ew ||
        el[149] !== te ||
        el[150] !== tm ||
        el[151] !== e8 ||
        el[152] !== em
          ? ((en =
              (!tg && !tl && null == e_) || tm || eZ || eQ || te
                ? null
                : (0, a.jsxs)("div", {
                    className: (0, l.A)("isolate me-1 ms-1 flex items-center gap-2", ee),
                    children: [
                      null != em
                        ? (0, a.jsx)("span", {
                            className:
                              "flex opacity-0 group-hover/user-message:opacity-100 group-has-[:focus-visible]/user-message:opacity-100",
                            children: (0, a.jsx)(k.J, { sentAtMs: em }),
                          })
                        : null,
                      (0, a.jsxs)("div", {
                        className: "flex turn-action-controls items-center gap-0.5 browser:gap-0",
                        children: [
                          null != ew ? (0, a.jsx)(g.Y, { stats: ew }) : null,
                          tg ? tM : null,
                          e_,
                          tl && !e8
                            ? (0, a.jsx)(i.m, {
                                content: tP,
                                children: (0, a.jsx)(b.$, {
                                  className: "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
                                  color: "ghost",
                                  size: "icon",
                                  "aria-label": tP,
                                  onClick: tj,
                                  children: (0, a.jsx)(A.A, { className: "icon-xs" }),
                                }),
                              })
                            : null,
                        ],
                      }),
                    ],
                  })),
            (el[140] = e_),
            (el[141] = tl),
            (el[142] = eZ),
            (el[143] = tM),
            (el[144] = tP),
            (el[145] = tj),
            (el[146] = tg),
            (el[147] = eQ),
            (el[148] = ew),
            (el[149] = te),
            (el[150] = tm),
            (el[151] = e8),
            (el[152] = em),
            (el[153] = en))
          : (en = el[153]),
        el[154] !== V ||
        el[155] !== $ ||
        el[156] !== K ||
        el[157] !== Z ||
        el[158] !== Q ||
        el[159] !== Y ||
        el[160] !== et ||
        el[161] !== en
          ? ((es = (0, a.jsxs)("div", { className: V, children: [$, K, Z, Q, Y, et, en] })),
            (el[154] = V),
            (el[155] = $),
            (el[156] = K),
            (el[157] = Z),
            (el[158] = Q),
            (el[159] = Y),
            (el[160] = et),
            (el[161] = en),
            (el[162] = es))
          : (es = el[162]),
        el[163] !== H || el[164] !== tD || el[165] !== G || el[166] !== es
          ? ((ei = (0, a.jsxs)("div", { className: H, children: [tD, G, es] })),
            (el[163] = H),
            (el[164] = tD),
            (el[165] = G),
            (el[166] = es),
            (el[167] = ei))
          : (ei = el[167]),
        ei
      )
    }
    function en(e) {
      let t,
        n,
        i,
        l,
        r = (0, s.c)(8)
      r[0] !== e
        ? (({ clientUserMessageId: t, markdownMessage: n, ...i } = e), (r[0] = e), (r[1] = t), (r[2] = n), (r[3] = i))
        : ((t = r[1]), (n = r[2]), (i = r[3]))
      let { data: c, isPending: d } =
          (0, o._U)(null == i.localComposerFormat && null != t ? h.bs : null, {
            hostId: i.hostId,
            clientUserMessageId: t ?? "",
          }) ?? {},
        u = i.localComposerFormat ?? c,
        m = (0, o.Ul)(null == u && !d && h.Ds)
      if (d) return null
      let p = "markdown" === u ? (n ?? i.message) : i.message,
        f = u ?? (m ? "plain" : "markdown")
      return (
        r[4] !== i || r[5] !== p || r[6] !== f
          ? ((l = (0, a.jsx)(et, { ...i, message: p, localComposerFormat: f })),
            (r[4] = i),
            (r[5] = p),
            (r[6] = f),
            (r[7] = l))
          : (l = r[7]),
        l
      )
    }
    function ea(e) {
      let t,
        n,
        i,
        o,
        r = (0, s.c)(8)
      return (
        r[0] !== e ? (({ className: t, ...n } = e), (r[0] = e), (r[1] = t), (r[2] = n)) : ((t = r[1]), (n = r[2])),
        r[3] !== t ? ((i = (0, l.A)("text-codex-description text-xs", t)), (r[3] = t), (r[4] = i)) : (i = r[4]),
        r[5] !== n || r[6] !== i
          ? ((o = (0, a.jsx)("span", { className: i, ...n })), (r[5] = n), (r[6] = i), (r[7] = o))
          : (o = r[7]),
        o
      )
    }
  },
  ziNv(e, t, n) {
    var a = n("ABep"),
      s = n("QosV"),
      i = n("on57")
    function l(e) {
      let { key: t, node: n } = e
      return (0, a.jsx)("div", { children: n }, t)
    }
    n.d(
      t,
      {},
      {
        t: function (e) {
          let t,
            n,
            o,
            r,
            c,
            d,
            u = (0, s.c)(20),
            {
              items: m,
              className: p,
              contentClassName: h,
              maxHeightByState: f,
              viewState: g,
              autoScrollToBottom: x,
              disableMaxHeight: v,
              allowHorizontalScroll: y,
            } = e,
            w = void 0 === g ? "preview" : g,
            b = void 0 !== v && v,
            C = "expanded" === w ? f.expanded : "collapsed" === w ? f.collapsed : f.preview,
            j = (void 0 === x || x) && "flex flex-col-reverse",
            A = !(void 0 !== y && y) && "overflow-x-hidden"
          ;(u[0] !== p || u[1] !== j || u[2] !== A
            ? ((t = (0, i.A)("vertical-scroll-fade-mask [--edge-fade-distance:1.5rem] overflow-y-auto", j, A, p)),
              (u[0] = p),
              (u[1] = j),
              (u[2] = A),
              (u[3] = t))
            : (t = u[3]),
            u[4] !== b || u[5] !== C
              ? ((n = b ? void 0 : { maxHeight: C }), (u[4] = b), (u[5] = C), (u[6] = n))
              : (n = u[6]))
          let I = "preview" === w && "pb-1"
          return (
            u[7] !== h || u[8] !== I
              ? ((o = (0, i.A)("flex flex-col gap-1", h, I)), (u[7] = h), (u[8] = I), (u[9] = o))
              : (o = u[9]),
            u[10] !== m || u[11] !== w
              ? ((r = "collapsed" === w ? null : m.map(l)), (u[10] = m), (u[11] = w), (u[12] = r))
              : (r = u[12]),
            u[13] !== o || u[14] !== r
              ? ((c = (0, a.jsx)("div", { className: o, children: r })), (u[13] = o), (u[14] = r), (u[15] = c))
              : (c = u[15]),
            u[16] !== c || u[17] !== t || u[18] !== n
              ? ((d = (0, a.jsx)("div", { className: t, style: n, children: c })),
                (u[16] = c),
                (u[17] = t),
                (u[18] = n),
                (u[19] = d))
              : (d = u[19]),
            d
          )
        },
      },
    )
  },
  jHtb(e, t, n) {
    n.d(t, { J: () => d })
    var a = n("ABep"),
      s = n("QosV"),
      i = n("on57"),
      l = n("zd8w"),
      o = n("rS3J"),
      r = n("cWXs"),
      c = n("AdJ5")
    function d(e) {
      let t,
        n,
        l,
        d,
        m,
        p,
        h = (0, s.c)(28),
        {
          text: f,
          ref: g,
          className: x,
          components: v,
          directives: y,
          externalLinkContextMenuConversationId: w,
          markdownClassName: b,
          cwd: C,
          hostId: j,
          hasSerializedParagraphs: A,
          pluginMentionPresentation: I,
          renderMath: k,
          textStyle: M,
          variant: S,
        } = e,
        N = void 0 !== A && A,
        T = void 0 === S ? "default" : S
      ;(h[0] !== x ? ((t = (0, i.A)("text-size-chat whitespace-pre-wrap", x)), (h[0] = x), (h[1] = t)) : (t = h[1]),
        h[2] !== N || h[3] !== b || h[4] !== T
          ? ((n = (0, i.A)(
              "[&_ol]:!ps-6 [&_ul]:!ps-6",
              "user-message" === T
                ? (0, i.A)("rich-text-user-turn", !N && "[&>p]:!m-0 [&>p+p]:!mt-5")
                : "[&_li+li]:!mt-0 [&_li>ol]:!mt-0 [&_li>p+p]:!mt-0 [&_li>ul]:!mt-0 [&_p]:!m-0 [&_p+p]:!mt-5",
              "compact" === T &&
                "![--markdown-font-size:var(--text-sm)] ![--markdown-line-height:var(--leading-relaxed)] !text-secondary",
              b,
            )),
            (h[2] = N),
            (h[3] = b),
            (h[4] = T),
            (h[5] = n))
          : (n = h[5]))
      let _ = "user-message" === T && N ? u : void 0,
        R = null != w
      return (
        h[6] !== M || h[7] !== T
          ? ((l = M ?? ("user-message" === T ? { tone: "user-message" } : void 0)), (h[6] = M), (h[7] = T), (h[8] = l))
          : (l = h[8]),
        h[9] !== f ? ((d = (0, o.L0)(f)), (h[9] = f), (h[10] = d)) : (d = h[10]),
        h[11] !== v ||
        h[12] !== C ||
        h[13] !== y ||
        h[14] !== w ||
        h[15] !== j ||
        h[16] !== I ||
        h[17] !== k ||
        h[18] !== n ||
        h[19] !== _ ||
        h[20] !== R ||
        h[21] !== l ||
        h[22] !== d
          ? ((m = (0, a.jsx)(r.Markdown, {
              className: n,
              components: v,
              conversationId: w,
              cwd: C,
              directives: y,
              extensions: c.b,
              hostId: j,
              pluginMentionPresentation: I,
              renderMath: k,
              renderRoot: _,
              isBrowserEnabled: R,
              repairOrderedLists: !1,
              textStyle: l,
              children: d,
            })),
            (h[11] = v),
            (h[12] = C),
            (h[13] = y),
            (h[14] = w),
            (h[15] = j),
            (h[16] = I),
            (h[17] = k),
            (h[18] = n),
            (h[19] = _),
            (h[20] = R),
            (h[21] = l),
            (h[22] = d),
            (h[23] = m))
          : (m = h[23]),
        h[24] !== g || h[25] !== t || h[26] !== m
          ? ((p = (0, a.jsx)("div", { ref: g, className: t, children: m })),
            (h[24] = g),
            (h[25] = t),
            (h[26] = m),
            (h[27] = p))
          : (p = h[27]),
        p
      )
    }
    function u(e, t) {
      let n = e.every((e) => "paragraph" === e.type || "space" === e.type),
        s = [],
        i = 0
      for (let o = 0; o < e.length; o++) {
        let r = e[o]
        if ("space" === r.type) continue
        let c = e[o + 1],
          d = c?.type === "space" ? o + 2 : o + 1
        if (d >= e.length) continue
        let u =
            (r.raw.match(/\n+$/)?.[0].length ?? 0) + (c?.type === "space" ? (c.raw.match(/\n+$/)?.[0].length ?? 0) : 0),
          m = n ? Math.max(0, u - 1) : Math.ceil(Math.max(0, u - 2) / 2)
        0 !== m &&
          (s.push(
            (0, a.jsxs)(
              l.Fragment,
              {
                children: [
                  t(e.slice(i, o + 1)),
                  (0, a.jsx)("span", {
                    className: "block whitespace-pre-wrap",
                    "data-markdown-copy": "blank-lines",
                    children: "\n".repeat(m),
                  }),
                ],
              },
              o,
            ),
          ),
          (i = d))
      }
      return (s.push((0, a.jsx)(l.Fragment, { children: t(e.slice(i)) }, "end")), s)
    }
  },
  AdJ5(e, t, n) {
    var a = n("lsky"),
      s = n("rS3J"),
      i = n("MX6A"),
      l = n("EULo"),
      o = n("ABl9")
    let r = [
      {
        extensions: [
          {
            name: "sitesPluginMention",
            level: "inline",
            start: (e) => c(e),
            tokenizer(e) {
              if (!this.lexer.state.inLink && 0 === c(e))
                return {
                  type: "link",
                  raw: "$sites",
                  href: o.ic,
                  title: null,
                  text: "Sites",
                  tokens: [{ type: "text", raw: "Sites", text: "Sites" }],
                }
            },
          },
          {
            name: "userMessageImage",
            level: "inline",
            start: (e) => e.indexOf("!["),
            tokenizer(e) {
              var t, n
              if (!e.startsWith("![")) return
              let s = this.lexer.options.tokenizer
              if (null == s) return
              let i = a._F.prototype.link.call(s, e) ?? a._F.prototype.reflink.call(s, e, this.lexer.tokens.links)
              return i?.type === "image"
                ? ((t = i),
                  (n = d(this.lexer, i.text)),
                  {
                    type: "text",
                    raw: t.raw,
                    text: `!${t.text}`,
                    tokens: [
                      { type: "text", raw: "!", text: "!" },
                      { type: "link", raw: t.raw.slice(1), href: t.href, title: t.title, text: t.text, tokens: n },
                    ],
                  })
                : void 0
            },
          },
          {
            name: "composerLink",
            level: "inline",
            start(e) {
              let t = e.indexOf("[")
              if (-1 === t) return
              let n = e[t - 1]
              return ":" === n || "!" === n ? t - 1 : t
            },
            tokenizer(e) {
              if (this.lexer.state.inLink) return this.lexer.options.tokenizer?.escape(e)
              if (e.startsWith(":[") && (0, s.ex)(e, 1)?.start === 1) {
                let t = e[0]
                return { type: "text", raw: t, text: t }
              }
              if (!e.startsWith("[")) return
              let t = this.lexer.options.tokenizer,
                n = null == t ? void 0 : a._F.prototype.link.call(t, e)
              if (n?.type === "link" && null != n.title) return n
              let o = (0, s.ex)(e, 0)
              if (o?.start === 0) {
                let t = (0, i.Nb)(o.label)
                return {
                  type: "link",
                  raw: e.slice(0, o.end),
                  href: (0, l.gh)(o.path),
                  title: null,
                  text: t,
                  tokens: d(this.lexer, o.label),
                }
              }
              let r = e.split("\n", 1)[0]
              if (r.includes("](")) return { type: "text", raw: r, text: r }
            },
          },
        ],
      },
    ]
    function c(e) {
      let t = e.matchAll(o.sm).next().value
      return null == t ? void 0 : t.index + t[1].length
    }
    function d(e, t) {
      let n = e.state.inLink
      e.state.inLink = !0
      try {
        return e.inlineTokens(t)
      } finally {
        e.state.inLink = n
      }
    }
    n.d(t, {}, { b: r })
  },
  mHZT(e, t, n) {
    n.d(
      t,
      {},
      {
        s: function (e) {
          let t = 0,
            n = 0
          for (let a of e) ((t += a.additions), (n += a.deletions))
          let a = e.length,
            s = t > 0 || n > 0
          return { fileCount: a, linesAdded: t, linesDeleted: n, hasChanges: s }
        },
      },
    )
  },
  R0UC(e, t, n) {
    var a = n("ABep"),
      s = n("QosV"),
      i = n("oyxz"),
      l = n("IgqH"),
      o = n("r9ev")
    n.d(
      t,
      {},
      {
        $: function (e) {
          let t,
            n,
            o = (0, s.c)(7),
            { item: r, count: c, icon: d, children: u } = e
          return (
            o[0] !== c || o[1] !== r.sourceLabel
              ? ((t = (0, a.jsx)(i.A, {
                  id: "localConversation.externalEvent.repeatedSummary",
                  defaultMessage: "Received {count, plural, one {# {source} event} other {# {source} events}}",
                  description:
                    "Disclosure for consecutive incoming events from one connector. source is the connector name, such as Slack, and count is the number of events that can be revealed.",
                  values: { count: c, source: r.sourceLabel },
                })),
                (o[0] = c),
                (o[1] = r.sourceLabel),
                (o[2] = t))
              : (t = o[2]),
            o[3] !== u || o[4] !== d || o[5] !== t
              ? ((n = (0, a.jsx)(l.Z, { icon: d, summary: t, shouldAnimateInitialCollapse: !1, children: u })),
                (o[3] = u),
                (o[4] = d),
                (o[5] = t),
                (o[6] = n))
              : (n = o[6]),
            n
          )
        },
        e: function (e) {
          let t,
            n,
            l,
            r = (0, s.c)(8),
            { icon: c, item: d } = e
          return (
            r[0] !== d.sourceLabel
              ? ((t = (0, a.jsx)(i.A, {
                  id: "localConversation.externalEvent.summary",
                  defaultMessage: "Received a {source} event",
                  description: "Summary of an external event delivered by a connector",
                  values: { source: d.sourceLabel },
                })),
                (r[0] = d.sourceLabel),
                (r[1] = t))
              : (t = r[1]),
            r[2] !== d.preview
              ? ((n =
                  null != d.preview
                    ? (0, a.jsx)("div", {
                        className: "text-size-chat wrap-anywhere whitespace-pre-wrap text-codex-description/80",
                        children: d.preview,
                      })
                    : void 0),
                (r[2] = d.preview),
                (r[3] = n))
              : (n = r[3]),
            r[4] !== c || r[5] !== t || r[6] !== n
              ? ((l = (0, a.jsx)(o.d, { icon: c, status: "completed", summary: t, children: n })),
                (r[4] = c),
                (r[5] = t),
                (r[6] = n),
                (r[7] = l))
              : (l = r[7]),
            l
          )
        },
      },
    )
  },
  m88r(e, t, n) {
    n.d(t, { i: () => h })
    var a = n("Qgfj"),
      s = n("qixt"),
      i = n("bnxy"),
      l = n("XSLO"),
      o = n("ivPw")
    let r = new Set([".", "*", "+", "?", "^", "$", "{", "}", "(", ")", "|", "[", "]"])
    function c(e) {
      let t = "",
        n = !1
      for (let s of e) {
        if (n) {
          var a
          if (((a = s), /^[A-Za-z0-9]$/.test(a))) return null
          ;((t += s), (n = !1))
          continue
        }
        if ("\\" === s) {
          n = !0
          continue
        }
        if (r.has(s)) return null
        t += s
      }
      return n ? null : t
    }
    function d([e, ...t], n) {
      return n([u(e), ...t.map(u)])
    }
    function u(e) {
      return `“${e.replace(/^["']+/, "").replace(/["']+$/, "")}”`
    }
    var m = n("Z2lA"),
      p = n("pNUK")
    function h({ items: e, threadDetailLevel: t, formatSearchQueryTermList: n }) {
      return (
        f({ items: e, threadDetailLevel: t, formatSearchQueryTermList: n, inProgressOnly: !0 }) ??
        f({ items: e, threadDetailLevel: t, formatSearchQueryTermList: n, inProgressOnly: !1 })
      )
    }
    function f({ items: e, threadDetailLevel: t, formatSearchQueryTermList: n, inProgressOnly: a }) {
      for (let u = e.length - 1; u >= 0; u -= 1) {
        var r
        let h = e[u]
        if (h?.type !== "exec" || (a && !("interrupted" !== (r = h).executionStatus && !r.parsedCmd.isFinished)))
          continue
        let f = (function ({ item: e, threadDetailLevel: t, formatSearchQueryTermList: n }) {
          let a = e.parsedCmd,
            r = (0, l.X)(e.executionStatus) ? (0, l.mw)(a.cmd) : null,
            u =
              null == r
                ? null
                : (function (e) {
                    switch (e) {
                      case "create":
                        return l.yz.activeCreating
                      case "update":
                        return l.yz.activeUpdating
                    }
                  })(r)
          if (null != u) return { activityKey: e.callId, icon: "edit-files", message: u }
          switch (a.type) {
            case "read": {
              let t = a.displayLabel ?? (0, i.Q0)((0, o.i)(a.path ?? a.name)),
                n = (0, m.$)({ summary: a, cwd: e.cwd }),
                s = n?.isSkillDefinitionFile === !0
              if (null != n && s && (0, p.n)(n))
                return { activityKey: e.callId, icon: "internal-knowledge", message: g.readInternalKnowledge }
              return {
                activityKey: e.callId,
                icon: "run-command",
                message: s ? g.readSkill : g.read,
                values: s ? { skillName: n.skillName } : { target: t },
              }
            }
            case "search":
              return (function ({
                activityKey: e,
                path: t,
                query: n,
                threadDetailLevel: a,
                formatSearchQueryTermList: i,
              }) {
                if (t)
                  return {
                    activityKey: e,
                    icon: "code-searching",
                    message: g.searchFolder,
                    values: { folder: (0, o.i)(t) },
                  }
                if (n) {
                  let t =
                    a === s.O$
                      ? (function (
                          e,
                          t = function ([e, ...t]) {
                            let n = e
                            for (let [e, a] of t.entries()) {
                              let s = e === t.length - 1 ? (1 === t.length ? " and " : ", and ") : ", "
                              n += `${s}${a}`
                            }
                            return n
                          },
                        ) {
                          let n = (function (e) {
                            let t = (function (e) {
                              let t = [],
                                n = 0,
                                a = !1
                              for (let s = 0; s < e.length; s += 1) {
                                let i = e[s]
                                if (a) {
                                  a = !1
                                  continue
                                }
                                if ("\\" === i) {
                                  a = !0
                                  continue
                                }
                                "|" === i && (t.push(e.slice(n, s)), (n = s + 1))
                              }
                              return 0 === t.length ? [] : (t.push(e.slice(n)), t)
                            })(e)
                            if (t.length < 2) return null
                            let n = []
                            for (let e of t) {
                              let t = c(e)
                              if (null == t || 0 === t.length) return null
                              n.push(t)
                            }
                            return (function (e) {
                              let [t, ...n] = e
                              return null == t ? null : [t, ...n]
                            })(n)
                          })(e)
                          return null != n ? d(n, t) : d([c(e) ?? e], t)
                        })(n, i)
                      : n
                  return { activityKey: e, icon: "code-searching", message: g.searchQuery, values: { query: t } }
                }
                return { activityKey: e, icon: "code-searching", message: g.searchFiles }
              })({
                activityKey: e.callId,
                path: a.path,
                query: a.query,
                threadDetailLevel: t,
                formatSearchQueryTermList: n,
              })
            case "list_files":
              if (null == a.path) return { activityKey: e.callId, icon: "list-files", message: g.listFiles }
              return {
                activityKey: e.callId,
                icon: "list-files",
                message: g.listFolder,
                values: { folder: (0, o.i)(a.path) },
              }
            case "format":
            case "lint":
            case "noop":
            case "test":
            case "unknown":
              return (function (e) {
                let t
                t =
                  "interrupted" === e.executionStatus
                    ? g.commandStopped
                    : e.parsedCmd.isFinished
                      ? g.commandRan
                      : g.commandRunning
                let n = e.parsedCmd.cmd.trim()
                return 0 === n.length
                  ? {
                      activityKey: e.callId,
                      icon: "interrupted" === e.executionStatus ? "stop" : "run-command",
                      message: t,
                    }
                  : {
                      activityKey: e.callId,
                      icon: "interrupted" === e.executionStatus ? "stop" : "run-command",
                      message:
                        "interrupted" === e.executionStatus
                          ? g.commandStoppedWithDetail
                          : e.parsedCmd.isFinished
                            ? g.commandRanWithDetail
                            : g.commandRunningWithDetail,
                      values: { command: n },
                    }
              })(e)
          }
        })({ item: h, threadDetailLevel: t, formatSearchQueryTermList: n })
        if (null != f) return f
      }
      return null
    }
    let g = (0, a.YK)({
      read: {
        id: "localConversation.toolActivity.active.read",
        defaultMessage: "<action>Reading</action> <detail>{target}</detail>",
        description: "Active tool activity summary while Codex is reading a file",
      },
      readSkill: {
        id: "localConversation.toolActivity.active.readSkill",
        defaultMessage: "<action>Reading</action> <detail>{skillName} skill</detail>",
        description: "Active tool activity summary while Codex is reading a skill definition",
      },
      readInternalKnowledge: {
        id: "localConversation.toolActivity.active.readInternalKnowledge",
        defaultMessage: "<action>Reading</action> <detail>Internal Knowledge</detail>",
        description:
          "Active tool activity summary while Codex is reading the canonical Internal Knowledge skill definition",
      },
      searchFolder: {
        id: "localConversation.toolActivity.active.search.folder",
        defaultMessage: "<action>Searching</action> <detail>files in {folder} folder</detail>",
        description: "Active tool activity summary while Codex is searching files in a folder",
      },
      searchQuery: {
        id: "localConversation.toolActivity.active.search.query",
        defaultMessage: "<action>Searching</action> <detail>for {query}</detail>",
        description: "Active tool activity summary while Codex is searching for a query",
      },
      searchFiles: {
        id: "localConversation.toolActivity.active.search.files",
        defaultMessage: "<action>Searching</action> <detail>files</detail>",
        description: "Active tool activity summary while Codex is searching files",
      },
      listFiles: {
        id: "localConversation.toolActivity.active.list.files",
        defaultMessage: "<action>Listing</action> <detail>files</detail>",
        description: "Active tool activity summary while Codex is listing files",
      },
      listFolder: {
        id: "localConversation.toolActivity.active.list.folder",
        defaultMessage: "<action>Listing</action> <detail>files in {folder} folder</detail>",
        description: "Active tool activity summary while Codex is listing files in a folder",
      },
      commandStopped: {
        id: "localConversation.toolActivity.active.command.stopped",
        defaultMessage: "<action>Stopped command</action>",
        description: "Active tool activity summary after Codex stops a command",
      },
      commandStoppedWithDetail: {
        id: "localConversation.toolActivity.active.command.stopped.detail",
        defaultMessage: "<action>Stopped</action> <detail>{command}</detail>",
        description: "Active tool activity summary after Codex stops a command",
      },
      commandRan: {
        id: "localConversation.toolActivity.active.command.ran",
        defaultMessage: "<action>Ran command</action>",
        description: "Active tool activity summary after Codex runs a command",
      },
      commandRanWithDetail: {
        id: "localConversation.toolActivity.active.command.ran.detail",
        defaultMessage: "<action>Ran</action> <detail>{command}</detail>",
        description: "Active tool activity summary after Codex runs a command",
      },
      commandRunning: {
        id: "localConversation.toolActivity.active.command.running",
        defaultMessage: "<action>Running command</action>",
        description: "Active tool activity summary while Codex runs a command",
      },
      commandRunningWithDetail: {
        id: "localConversation.toolActivity.active.command.running.detail",
        defaultMessage: "<action>Running</action> <detail>{command}</detail>",
        description: "Active tool activity summary while Codex runs a command",
      },
    })
  },
  WTZ1(e, t, n) {
    n.d(t, { T: () => B })
    var a = n("ABep"),
      s = n("J6XW"),
      i = n("nPAz"),
      l = n("mnJS"),
      o = n("UGuw"),
      r = n("iJY0")
    let c = (0, r.a)({
      name: "company-knowledge-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 0.937744, y: 0.945313, width: 14.124634, height: 13.90625 },
        visualBounds: { x: 0.937744, y: 0.945313, width: 14.124634, height: 13.90625 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 0.937744, y: 0.945313, width: 14.124634, height: 13.90625 },
        center: { x: 8.000061, y: 7.898438 },
        insets: { top: 0.945313, right: 0.937622, bottom: 1.148437, left: 0.937744 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.000061, y: 7.898438 }, foreground: { x: 8.000061, y: 7.898438 } },
      },
      capabilities: ["icon"],
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M2.1221 9.42285C3.25436 8.76929 4.7017 9.15694 5.3555 10.2891C5.85135 11.1479 5.74666 12.1869 5.17386 12.9248C6.26782 13.6691 7.6255 13.9613 8.93851 13.7178C9.22342 13.6649 9.49768 13.8529 9.55081 14.1377C9.60367 14.4226 9.41567 14.6969 9.13089 14.75C7.43914 15.0639 5.68785 14.6428 4.32523 13.6074C3.22044 14.1363 1.87759 13.7348 1.25491 12.6562C0.601551 11.524 0.990079 10.0766 2.1221 9.42285ZM4.44632 10.8135C4.08239 10.1839 3.27741 9.96857 2.64749 10.332C2.01746 10.6958 1.80155 11.5008 2.16507 12.1309C2.5289 12.761 3.33471 12.9771 3.96487 12.6133C4.59463 12.2493 4.81004 11.4435 4.44632 10.8135Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8799 4.79199C12.1002 4.60375 12.4317 4.62953 12.6201 4.84961C13.7377 6.15762 14.2485 7.88446 14.0332 9.58203C15.0439 10.2743 15.3679 11.6382 14.7451 12.7168C14.0913 13.8489 12.643 14.2366 11.5108 13.583C10.3786 12.9292 9.991 11.4809 10.6446 10.3486C11.1404 9.4903 12.0925 9.06064 13.0176 9.1875C13.1148 7.86844 12.6894 6.5472 11.8223 5.53223C11.6341 5.31192 11.6598 4.9804 11.8799 4.79199ZM13.3526 10.3916C12.7225 10.0283 11.9175 10.2442 11.5537 10.874C11.1902 11.504 11.4054 12.3099 12.0352 12.6738C12.6653 13.0376 13.4711 12.8213 13.835 12.1914C14.1988 11.5612 13.9827 10.7554 13.3526 10.3916Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.02249 0.945312C9.32971 0.945708 10.3897 2.00617 10.3897 3.31348C10.3895 4.62067 9.32962 5.68027 8.02249 5.68066C7.03051 5.68066 6.18059 5.07047 5.82816 4.20508C4.63753 4.78047 3.70617 5.81021 3.26077 7.06836C3.16409 7.34156 2.86408 7.48512 2.59085 7.38867C2.31804 7.29179 2.17422 6.99177 2.27054 6.71875C2.84461 5.09682 4.08519 3.79026 5.66312 3.12793C5.75789 1.90712 6.77744 0.945312 8.02249 0.945312ZM8.02249 1.99609C7.29484 1.99609 6.70511 2.58583 6.70511 3.31348C6.70524 4.04102 7.29492 4.63086 8.02249 4.63086C8.74972 4.63046 9.33974 4.04077 9.33987 3.31348C9.33987 2.58607 8.74981 1.99649 8.02249 1.99609Z" fill="currentColor"/>',
    })
    var d = n("RkfJ"),
      u = n("KjMy"),
      m = n("TNbF"),
      p = n("Cj22"),
      h = n("QxwI"),
      f = n("sADh"),
      g = n("zhow"),
      x = n("BkwF"),
      v = n("wepB"),
      y = n("UTdg"),
      w = n("ibmS")
    let b = (0, r.a)({
      name: "wifi-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 0.759521, y: 2.238281, width: 14.480469, height: 11.523438 },
        visualBounds: { x: 0.759521, y: 2.238281, width: 14.480469, height: 11.523438 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 0.759521, y: 2.238281, width: 14.480469, height: 11.523438 },
        center: { x: 7.999756, y: 8 },
        insets: { top: 2.238281, right: 0.76001, bottom: 2.238281, left: 0.759521 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.999756, y: 8 }, foreground: { x: 7.999756, y: 8 } },
      },
      capabilities: ["icon"],
      body: '<path d="M8.09313 11.916C8.55971 11.9632 8.92406 12.3579 8.92418 12.8369C8.92397 13.3475 8.50993 13.7615 7.99938 13.7617C7.5204 13.7616 7.12563 13.3972 7.07848 12.9307L7.0736 12.8369L7.07848 12.7422C7.12582 12.2758 7.52054 11.9113 7.99938 11.9111L8.09313 11.916Z" fill="currentColor"/> <path d="M7.99938 8.68555C9.12143 8.68562 10.199 9.1257 11.0004 9.91113C11.2072 10.1141 11.2101 10.4473 11.0072 10.6543C10.8043 10.8606 10.4719 10.8636 10.265 10.6611C9.65996 10.0682 8.84654 9.7364 7.99938 9.73633C7.15204 9.73633 6.3379 10.068 5.73278 10.6611C5.52583 10.8637 5.19349 10.8608 4.99059 10.6543C4.7877 10.4473 4.79157 10.1141 4.9984 9.91113C5.79976 9.1258 6.87735 8.68555 7.99938 8.68555Z" fill="currentColor"/> <path d="M7.99938 5.45312C9.86602 5.45317 11.6672 6.10185 13.1 7.27539C13.3242 7.45905 13.3567 7.79035 13.1732 8.01465C12.9895 8.2387 12.6592 8.27137 12.4349 8.08789C11.1891 7.06742 9.62252 6.50395 7.99938 6.50391C6.37641 6.50394 4.8106 7.06764 3.56481 8.08789C3.34052 8.2716 3.00929 8.2389 2.82555 8.01465C2.64188 7.79037 2.67457 7.45912 2.89879 7.27539C4.33155 6.10192 6.13278 5.45316 7.99938 5.45312Z" fill="currentColor"/> <path d="M7.99938 2.23828C10.539 2.23836 13.0018 3.05691 15.0277 4.55664C15.2603 4.72917 15.3093 5.05812 15.1371 5.29102C14.9646 5.52398 14.6357 5.57269 14.4027 5.40039C12.557 4.03405 10.3132 3.28914 7.99938 3.28906C5.68573 3.28915 3.44269 4.03422 1.59703 5.40039C1.36405 5.57286 1.03521 5.5239 0.862659 5.29102C0.690155 5.05798 0.739017 4.72916 0.972034 4.55664C2.99784 3.05703 5.45984 2.23837 7.99938 2.23828Z" fill="currentColor"/>',
    })
    var C = n("B6lB"),
      j = n("DBCl"),
      A = n("JGl5"),
      I = n("HOLv"),
      k = n("bVeK"),
      M = n("LdAY"),
      S = n("bZHk"),
      N = n("yP7T"),
      T = n("XSLO"),
      _ = n("pmt2"),
      R = n("gSvk"),
      P = n("RSI4"),
      L = n("J0Jr"),
      D = n("DYB3"),
      F = n("acby"),
      E = n("Z2lA"),
      O = n("pNUK")
    let U = "icon-xs shrink-0 text-text/60"
    function B(e, t) {
      let n = e.item
      switch (n.type) {
        case "exec":
          if ("read" === n.parsedCmd.type) {
            let e = (0, E.$)({ summary: n.parsedCmd, cwd: n.cwd })
            if (e?.isSkillDefinitionFile === !0) {
              if ((0, O.n)(e)) return (0, a.jsx)(I.I, { className: "shrink-0 text-text/60", asset: c })
              return (0, a.jsx)(I.I, { className: "shrink-0 text-text/60", asset: C.r })
            }
            return (0, a.jsx)(S.A, { "aria-hidden": !0, className: U })
          }
          if ("search" === n.parsedCmd.type) return (0, a.jsx)(I.I, { className: "shrink-0 text-text/60", asset: p.Y })
          if ("list_files" === n.parsedCmd.type)
            return (0, a.jsx)(I.I, { className: "shrink-0 text-text/60", asset: d.M })
          if ("interrupted" === n.executionStatus)
            return (0, a.jsx)(I.I, { className: "shrink-0 text-text/60", asset: x.L })
          if ((0, P._U)(n.parsedCmd.cmd)) return (0, a.jsx)(I.I, { className: "shrink-0 text-text/60", asset: u.b })
          if ((0, T.X)(n.executionStatus) && null != (0, T.mw)(n.parsedCmd.cmd))
            return (0, a.jsx)(I.I, { className: "shrink-0 text-text/60", asset: i.p })
          return (0, a.jsx)(I.I, { className: "shrink-0 text-text/60", asset: v.K })
        case "patch":
          return (0, a.jsx)(I.I, { className: "shrink-0 text-text/60", asset: h.h })
        case "external-event":
          return (0, a.jsx)(R.w, { loadRemote: t.loadRemoteLogos, source: (0, M.g)(n, t.resolvedApps) })
        case "web-search":
          return (0, a.jsx)(I.I, { className: "shrink-0 text-text/60", asset: u.b })
        case "generated-image":
        case "image-view":
          return (0, a.jsx)(I.I, { className: "shrink-0 text-text/60", asset: f.S })
        case "mcp-server-elicitation":
          return (0, a.jsx)(I.I, { className: "shrink-0 text-text/60", asset: m.F })
        case "automatic-approval-review":
          return (0, a.jsx)(I.I, {
            className: "denied" === n.status ? "shrink-0 text-warning" : "shrink-0 text-text/60",
            asset: y.F,
          })
        case "mcp-tool-call":
          return (0, a.jsx)(_.m, {
            hostId: t.hostId,
            item: n,
            grouped: t.grouped,
            loadRemoteLogos: t.loadRemoteLogos,
            resolvedApps: t.resolvedApps,
          })
        case "dynamic-tool-call":
          return (
            (0, D.$9)(n)?.icon ??
            (0, F.rF)(n)?.renderAgentActivityIcon?.(n, t.grouped) ??
            (n.namespace === A.PD ? (0, a.jsx)(L._, { "aria-hidden": !0, className: U }) : null)
          )
        case "auto-review-interruption-warning":
          return (0, a.jsx)(I.I, { className: "shrink-0 text-text/60", asset: y.F })
        case "context-compaction":
          return (0, a.jsx)(I.I, { className: "shrink-0 text-text/60", asset: w.h })
        case "multi-agent-action":
          return (0, a.jsx)(I.I, { className: "shrink-0 text-text/60", asset: g.u })
        case "realtime-transcript":
          return (0, a.jsx)(k.ERJ, { "aria-hidden": !0, className: "text-text/60" })
        case "stream-error":
          return (0, a.jsx)(I.I, { className: "shrink-0 text-text/60", asset: b })
        case "subagent-activity":
          return (0, a.jsx)(N.B, {
            "aria-hidden": !0,
            className: "icon-xs shrink-0",
            seed: (0, j.JXB)(n.agentThreadId),
          })
        case "system-error":
          return (0, a.jsx)(I.I, { className: "shrink-0 text-text/60", asset: l.m })
        case "user-input-response":
          return (0, a.jsx)(I.I, { className: "shrink-0 text-text/60", asset: o.l })
        case "worktree-init":
          return (0, a.jsx)(I.I, { className: "shrink-0 text-text/60", asset: s.T })
        case "dil-reasoning":
        case "assistant-message":
        case "strict-review-notice":
        case "user-message":
        case "worked-for":
          return null
      }
    }
  },
  pmt2(e, t, n) {
    var a = n("ABep"),
      s = n("QosV"),
      i = n("rCz8"),
      l = n("T0Rc"),
      o = n("zTeN"),
      r = n("KJ1J"),
      c = n("USdi"),
      d = n("FvYa"),
      u = n("KxMp"),
      m = n("HOLv"),
      p = n("rO8L"),
      h = n("KLqe"),
      f = n("JEy9"),
      g = n("EEop"),
      x = n("cLdu"),
      v = n("ueue"),
      y = n("OWtl"),
      w = n("gSvk"),
      b = n("DYB3"),
      C = n("MdwM"),
      j = n("GmdE"),
      A = n("bwpB")
    function I(e) {
      let t,
        n,
        r,
        c,
        u,
        h,
        f,
        w,
        b,
        j,
        A,
        I = (0, s.c)(34),
        { hostId: k, item: M, loadRemoteLogos: S } = e,
        N = (0, o.gh)(y.u)
      I[0] !== k ? ((t = { hostId: k }), (I[0] = k), (I[1] = t)) : (t = I[1])
      let T = (0, p.J)(t)
      I[2] !== k || I[3] !== T
        ? ((n = { enabled: T, hostId: k, roots: void 0, resolveActiveRoots: !0 }), (I[2] = k), (I[3] = T), (I[4] = n))
        : (n = I[4])
      let { data: _ } = (0, x.Kj)(n)
      I[5] !== _ || I[6] !== M.pluginId
        ? ((r = _?.find((e) => {
            let { plugin: t } = e
            return t.id === M.pluginId || (null != t.remotePluginId && t.remotePluginId === M.pluginId)
          })),
          (I[5] = _),
          (I[6] = M.pluginId),
          (I[7] = r))
        : (r = I[7])
      let R = r,
        P = null != _ && null != M.pluginId && null == R,
        L = T && P
      I[8] !== k || I[9] !== M.pluginId || I[10] !== N.query || I[11] !== L
        ? ((c = N.query.getOptions(g.Pc, (0, g.u0)({ hostId: k, pluginId: L ? (M.pluginId ?? null) : null }))),
          (I[8] = k),
          (I[9] = M.pluginId),
          (I[10] = N.query),
          (I[11] = L),
          (I[12] = c))
        : (c = I[12])
      let D = c,
        F = L && D.enabled
      I[13] !== D || I[14] !== F
        ? ((u = { ...D, enabled: F, retry: !1, retryOnMount: !1 }), (I[13] = D), (I[14] = F), (I[15] = u))
        : (u = I[15])
      let { data: E } = (0, l.I)(u)
      I[16] !== E || I[17] !== L
        ? ((h = L && null != E ? (0, v.qA)(E) : null), (I[16] = E), (I[17] = L), (I[18] = h))
        : (h = I[18])
      let O = h
      I[19] !== _ ? ((f = _ ?? []), (I[19] = _), (I[20] = f)) : (f = I[20])
      let U = f,
        B = O?.plugin.id ?? R?.plugin.id ?? M.pluginId
      ;(I[21] !== U || I[22] !== O ? ((w = null == O ? U : [O]), (I[21] = U), (I[22] = O), (I[23] = w)) : (w = I[23]),
        I[24] !== M.invocation.server || I[25] !== w || I[26] !== B
          ? ((b = (0, C._)({ pluginId: B, plugins: w, serverName: M.invocation.server })),
            (I[24] = M.invocation.server),
            (I[25] = w),
            (I[26] = B),
            (I[27] = b))
          : (b = I[27]))
      let z = b,
        q = z?.alt ?? M.invocation.server,
        W = z?.knownAppId,
        H = z?.logoUrl
      return (
        I[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (0, a.jsx)(m.I, { className: "shrink-0 text-text/60", asset: i.W })), (I[28] = j))
          : (j = I[28]),
        I[29] !== S || I[30] !== q || I[31] !== W || I[32] !== H
          ? ((A = (0, a.jsx)(d.R, {
              alt: q,
              className: "icon-xs shrink-0 object-contain",
              knownAppId: W,
              loadRemote: S,
              logoUrl: H,
              fallback: j,
            })),
            (I[29] = S),
            (I[30] = q),
            (I[31] = W),
            (I[32] = H),
            (I[33] = A))
          : (A = I[33]),
        A
      )
    }
    n.d(
      t,
      {},
      {
        m: function (e) {
          let t,
            n,
            l,
            o,
            d,
            p = (0, s.c)(41),
            { hostId: g, item: x, grouped: v, loadRemoteLogos: y, resolvedApps: C } = e,
            k = void 0 !== v && v,
            M = void 0 === y || y
          p[0] !== x || p[1] !== C ? ((t = (0, b.gK)(x, C)), (p[0] = x), (p[1] = C), (p[2] = t)) : (t = p[2])
          let S = t
          if (null != S) {
            let e
            return (
              p[3] !== k || p[4] !== x || p[5] !== M || p[6] !== S.icon || p[7] !== C
                ? ((e = k
                    ? S.icon
                    : (0, a.jsx)(h.d, { item: x, apps: C, part: "icon", loadMetadata: M, children: S.icon })),
                  (p[3] = k),
                  (p[4] = x),
                  (p[5] = M),
                  (p[6] = S.icon),
                  (p[7] = C),
                  (p[8] = e))
                : (e = p[8]),
              e
            )
          }
          p[9] !== k || p[10] !== x || p[11] !== C
            ? ((n = (0, f.a)(x, C, k)), (p[9] = k), (p[10] = x), (p[11] = C), (p[12] = n))
            : (n = p[12])
          let N = n
          if (null != N) return N
          if (x.source?.kind === "browserUse" && x.result?.type === "success") {
            let e
            p[13] !== x.result.raw._meta
              ? ((e = (0, c._)(x.result.raw._meta)), (p[13] = x.result.raw._meta), (p[14] = e))
              : (e = p[14])
            let t = e
            if (null != t) {
              let e
              return (
                p[15] !== M || p[16] !== t
                  ? ((e = (0, a.jsx)(u._, { className: "icon-xs shrink-0 text-text/60", href: t, loadRemote: M })),
                    (p[15] = M),
                    (p[16] = t),
                    (p[17] = e))
                  : (e = p[17]),
                e
              )
            }
          }
          if (null != x.pluginId && !(0, r.fI)(x.invocation.server)) {
            let e, t
            return (
              p[18] !== g || p[19] !== x || p[20] !== M
                ? ((e = (0, a.jsx)(I, { hostId: g, item: x, loadRemoteLogos: M })),
                  (p[18] = g),
                  (p[19] = x),
                  (p[20] = M),
                  (p[21] = e))
                : (e = p[21]),
              p[22] !== g || p[23] !== x || p[24] !== M || p[25] !== e
                ? ((t = (0, a.jsx)(j.y, { hostId: g, item: x, loadRemoteLogos: M, fallback: e })),
                  (p[22] = g),
                  (p[23] = x),
                  (p[24] = M),
                  (p[25] = e),
                  (p[26] = t))
                : (t = p[26]),
              t
            )
          }
          p[27] !== x.appContext ||
          p[28] !== x.functionName ||
          p[29] !== x.invocation ||
          p[30] !== x.source ||
          p[31] !== C
            ? ((l = (0, A.Dw)({
                appContext: x.appContext,
                functionName: x.functionName,
                invocation: x.invocation,
                resolvedApps: C,
                source: x.source,
              })),
              (p[27] = x.appContext),
              (p[28] = x.functionName),
              (p[29] = x.invocation),
              (p[30] = x.source),
              (p[31] = C),
              (p[32] = l))
            : (l = p[32])
          let T = l
          return (
            p[33] !== M || p[34] !== T
              ? ((o =
                  null == T
                    ? (0, a.jsx)(m.I, { className: "shrink-0 text-text/60", asset: i.W })
                    : (0, a.jsx)(w.w, { loadRemote: M, source: T })),
                (p[33] = M),
                (p[34] = T),
                (p[35] = o))
              : (o = p[35]),
            p[36] !== g || p[37] !== x || p[38] !== M || p[39] !== o
              ? ((d = (0, a.jsx)(j.y, { hostId: g, item: x, loadRemoteLogos: M, fallback: o })),
                (p[36] = g),
                (p[37] = x),
                (p[38] = M),
                (p[39] = o),
                (p[40] = d))
              : (d = p[40]),
            d
          )
        },
      },
    )
  },
  FqFR(e, t, n) {
    var a = n("I3PO"),
      s = n("cP3L"),
      i = n("NIKO")
    function l({ item: e }) {
      return "mcp-tool-call" === e.type && e.appContext?.connectorId ? "connector:" + e.appContext.connectorId : e.type
    }
    n.d(
      t,
      {},
      {
        HC: function (e) {
          let t = [],
            n = new Map()
          for (let a of e) {
            if ("subagent-activity" === a.type && !a.isMessage) {
              let e = n.get(a.agentThreadId)
              if (null != e) {
                let n = t[e]
                if ("subagent-activity" === n.type) {
                  t[e] = { ...a, id: n.id, displayName: a.displayName ?? n.displayName }
                  continue
                }
              }
              n.set(a.agentThreadId, t.length)
            }
            t.push(a)
          }
          return t
        },
        Rr: function (e) {
          let t,
            n = new Map()
          for (let a of e.items) {
            let e = (0, i.h)(a)
            null != e
              ? t?.label !== e && (t = { id: a.id, label: e })
              : "steeringUserMessage" === a.type || "agentMessage" === a.type
                ? (t = void 0)
                : t && n.set(a.id, t)
          }
          return n
        },
        kd: l,
        ux: function (e, t, n, i) {
          let o,
            r = { key: "initial", units: [], startedAtMs: t, endedAtMs: null, running: !1 },
            c = [r],
            d = new Map()
          function u(e, t, n, a, s) {
            let i = n ? "goal:" + n.id : t,
              l = d.get(e)
            l || ((l = new Map()), d.set(e, l))
            let o = l.get(i)
            if (o) o.items.push(s)
            else {
              let t = { kind: "group", key: a, items: [s], publicGoal: n?.label }
              ;(l.set(i, t), e.units.push(t))
            }
          }
          let m = r
          for (let t of e) {
            let e
            if ("standalone" === t.kind) {
              let e = t.item.item
              if (
                "user-message" !== e.type ||
                !e.steeringStatus ||
                "not-sent" === e.deliveryStatus ||
                e.isHistoricalSteering ||
                e.isToolOutput ||
                e.questionReplies?.length ||
                e.codexDelegation
              ) {
                if ("image-view" === e.type) {
                  let a = n.get(e.id)
                  if (a) {
                    u(m, e.type, a, t.key, t.item)
                    continue
                  }
                  o
                    ? ((o.imageCount += e.imageCount), o.imagePaths.push(...e.imagePaths))
                    : ((o = { ...e, imagePaths: [...e.imagePaths] }),
                      m.units.push({ ...t, item: { ...t.item, item: o } }))
                  continue
                }
                if ((m.units.push(t), "worked-for" !== e.type)) {
                  let n = "subagent-activity" === e.type ? i?.get(e.id) : void 0
                  ;((m.running = m.running || (n?.running ?? (0, a.rf)(t.item))),
                    n?.endedAtMs != null && (m.endedAtMs = Math.max(m.endedAtMs ?? n.endedAtMs, n.endedAtMs)))
                }
                ;("assistant-message" === e.type || "user-message" === e.type) && (d.delete(m), (o = void 0))
              } else
                (null != e.sentAtMs && (m.endedAtMs = Math.max(m.endedAtMs ?? e.sentAtMs, e.sentAtMs)),
                  (m = {
                    key: e.clientUserMessageId ?? e.searchItemId ?? t.key,
                    steer: t,
                    units: [],
                    startedAtMs: e.sentAtMs,
                    endedAtMs: null,
                    running: !1,
                  }),
                  c.push(m),
                  (o = void 0))
              continue
            }
            for (let [i, o] of t.items.entries()) {
              let d = o.item
              if (("mcp-tool-call" === d.type && d.source?.kind === "browserUse") || (0, s.$)(d)) {
                ;((e = void 0),
                  m.units.push({ kind: "standalone", key: "callId" in d ? d.callId : t.key + ":" + i, item: o }),
                  (m.running = m.running || (0, a.rf)(o)))
                continue
              }
              if (
                "exec" !== d.type &&
                "patch" !== d.type &&
                "web-search" !== d.type &&
                !("mcp-tool-call" === d.type && d.appContext?.connectorId)
              ) {
                ;((m.running = m.running || (0, a.rf)(o)),
                  e
                    ? e.items.push(o)
                    : ((e = { ...t, key: 0 === i ? t.key : t.key + ":" + i, items: [o] }), m.units.push(e)))
                continue
              }
              e = void 0
              let p = "exec" === d.type ? d.startedAtMs : null,
                h =
                  null != p && null != m.startedAtMs && p < m.startedAtMs
                    ? (c.findLast((e) => null != e.startedAtMs && e.startedAtMs <= p) ?? r)
                    : m,
                f = "callId" in d ? d.callId : d.id
              "exec" === d.type && (f = d.commandExecutionItemId ?? d.callId)
              let g = null == f ? void 0 : n.get(f)
              ;(u(h, l(o), g, "web-search" === d.type ? t.key + ":search:" + i : d.type + ":" + d.callId, o),
                (h.running = h.running || (0, a.rf)(o)),
                "exec" === d.type &&
                  null != p &&
                  null != d.durationMs &&
                  (h.endedAtMs = Math.max(h.endedAtMs ?? p, p + d.durationMs)))
            }
          }
          return c
        },
      },
    )
  },
  ZQ2G(e, t, n) {
    n.d(t, { D: () => ef })
    var a = n("ABep"),
      s = n("QosV"),
      i = n("iRMi"),
      l = n("on57"),
      o = n("xCr9"),
      r = n.n(o),
      c = n("HFi9"),
      d = n.n(c),
      u = n("zTeN"),
      m = n("zd8w"),
      p = n("Wf1j"),
      h = n("oyxz"),
      f = n("Qgfj"),
      g = n("RZnR"),
      x = n("HUHI"),
      v = n("uKpQ"),
      y = n("pxLk"),
      w = n("PxlB"),
      b = n("R0UC"),
      C = n("pd2I"),
      j = n("E2ja"),
      A = n("qMca"),
      I = n("H7j2"),
      k = n("KLqe"),
      M = n("yGJW"),
      S = n("OWtl"),
      N = n("qixt"),
      T = n("mJQs"),
      _ = n("m88r"),
      R = n("WTZ1"),
      P = n("ko3L"),
      L = n("XSLO"),
      D = n("bwpB")
    function F(e, t, n) {
      switch (e.kind) {
        case "codex-tool-call": {
          let a = e.presentation.values.state
          return (
            n || (a = "failed" === a ? "failedFollowing" : "following"),
            t.formatMessage(e.presentation.message, { ...e.presentation.values, state: a })
          )
        }
        case "mcp-sources":
          var a, s, i
          let l
          return (
            (a = e.sources),
            (s = t),
            (i = n),
            (l = [...new Set(a.map((e) => (e.key === D.Eb ? s.formatMessage(O.browserSource) : e.name)))]),
            s.formatMessage(
              (function ({ isIntegration: e, isLeading: t }) {
                return e
                  ? t
                    ? O.usedIntegrationsLeading
                    : O.usedIntegrations
                  : t
                    ? O.usedSourcesLeading
                    : O.usedSources
              })({ isIntegration: a.every((e) => e.key !== D.Eb), isLeading: i }),
              { sources: s.formatList(l, { type: "conjunction" }), sourceCount: l.length },
            )
          )
        case "unnamed-mcp-calls":
          return E({ intl: t, count: e.count, isLeading: n, leading: O.calledToolsLeading, following: O.calledTools })
        case "loaded-tools":
          return E({ intl: t, count: e.count, isLeading: n, leading: O.loadedToolsLeading, following: O.loadedTools })
        case "file-changes":
          return E({ intl: t, count: e.count, isLeading: n, leading: O.editedFilesLeading, following: O.editedFiles })
        case "stopped-file-creation":
          return E({
            intl: t,
            count: e.count,
            isLeading: n,
            leading: O.stoppedCreatingLeading,
            following: O.stoppedCreating,
          })
        case "exploration":
          return t.formatMessage(n ? O.readFilesLeading : O.readFiles)
        case "visualization":
          return (0, L.XQ)({ intl: t, kind: e.activity.kind, isFinished: !0, isLeadingSegment: n })
        case "commands":
          return E({ intl: t, count: e.count, isLeading: n, leading: O.commandsLeading, following: O.commands })
        case "web-search":
          return e.title ?? t.formatMessage(n ? O.searchedWebLeading : O.searchedWeb)
      }
    }
    function E({ intl: e, count: t, isLeading: n, leading: a, following: s }) {
      return e.formatMessage(n ? a : s, { count: t })
    }
    let O = (0, f.YK)({
      editedFilesLeading: {
        id: "localConversation.agentActivity.summary.editedFiles.leading",
        defaultMessage: "{count, plural, one {Edited a file} other {Edited files}}",
        description: "Leading completed collapsed activity summary segment for file changes",
      },
      editedFiles: {
        id: "localConversation.agentActivity.summary.editedFiles",
        defaultMessage: "{count, plural, one {edited a file} other {edited files}}",
        description: "Completed collapsed activity summary segment for file changes",
      },
      stoppedCreatingLeading: {
        id: "localConversation.agentActivity.summary.stoppedCreating.leading",
        defaultMessage: "{count, plural, one {Stopped creating a file} other {Stopped creating files}}",
        description: "Leading completed collapsed activity summary segment for stopped file creation",
      },
      stoppedCreating: {
        id: "localConversation.agentActivity.summary.stoppedCreating",
        defaultMessage: "{count, plural, one {stopped creating a file} other {stopped creating files}}",
        description: "Completed collapsed activity summary segment for stopped file creation",
      },
      loadedToolsLeading: {
        id: "localConversation.agentActivity.summary.loadedTools.leading",
        defaultMessage: "{count, plural, one {Loaded a tool} other {Loaded tools}}",
        description:
          'First action in a list of completed agent actions; for example, "Loaded tools, ran commands." Use sentence-initial casing. The count selects singular or plural but is not displayed.',
      },
      loadedTools: {
        id: "localConversation.agentActivity.summary.loadedTools",
        defaultMessage: "{count, plural, one {loaded a tool} other {loaded tools}}",
        description:
          'Non-leading action in a list of completed agent actions; for example, "Read files, loaded tools." Use mid-sentence casing. The count selects singular or plural but is not displayed.',
      },
      readFilesLeading: {
        id: "localConversation.agentActivity.summary.readFiles.leading",
        defaultMessage: "Read files",
        description:
          'First action in a list of completed agent actions; for example, "Read files and ran commands." The agent is the grammatical subject and completed the reading action. Translate as an active verb phrase, not a noun phrase describing files. Use sentence-initial casing.',
      },
      readFiles: {
        id: "localConversation.agentActivity.summary.readFiles",
        defaultMessage: "read files",
        description:
          'Non-leading action in a list of completed agent actions; for example, "Edited files, read files, and ran commands." The agent is the shared grammatical subject and completed the reading action. Translate as an active verb phrase, not a noun phrase describing files. Use mid-sentence casing.',
      },
      commandsLeading: {
        id: "localConversation.agentActivity.summary.commands.leading",
        defaultMessage: "{count, plural, one {Ran a command} other {Ran commands}}",
        description:
          'First action in a list of completed agent actions; for example, "Ran commands and edited files." The agent is the grammatical subject and completed the command execution. Translate as an active verb phrase. Use sentence-initial casing. The count selects singular or plural but is not displayed.',
      },
      commands: {
        id: "localConversation.agentActivity.summary.commands",
        defaultMessage: "{count, plural, one {ran a command} other {ran commands}}",
        description:
          'Non-leading action in a list of completed agent actions; for example, "Edited files, read files, and ran commands." The agent is the shared grammatical subject and completed the command execution. Translate as an active verb phrase whose verb agrees with the agent, not with a preceding noun. Use mid-sentence casing. The count selects singular or plural but is not displayed.',
      },
      browserSource: {
        id: "localConversation.agentActivity.summary.source.browser",
        defaultMessage: "the browser",
        description: "Localized browser tool source name in collapsed activity summaries",
      },
      usedIntegrationsLeading: {
        id: "localConversation.agentActivity.summary.integrations.leading",
        defaultMessage: "Used {sources} {sourceCount, plural, one {integration} other {integrations}}",
        description: "Leading completed collapsed activity summary segment for named integrations",
      },
      usedIntegrations: {
        id: "localConversation.agentActivity.summary.integrations",
        defaultMessage: "used {sources} {sourceCount, plural, one {integration} other {integrations}}",
        description: "Completed collapsed activity summary segment for named integrations",
      },
      usedSourcesLeading: {
        id: "localConversation.agentActivity.summary.sources.leading",
        defaultMessage: "Used {sources}",
        description: "Leading completed collapsed activity summary segment for named tool sources",
      },
      usedSources: {
        id: "localConversation.agentActivity.summary.sources",
        defaultMessage: "used {sources}",
        description: "Completed collapsed activity summary segment for named tool sources",
      },
      calledToolsLeading: {
        id: "localConversation.agentActivity.summary.calledTools.leading",
        defaultMessage: "{count, plural, one {Called a tool} other {Called tools}}",
        description: "Leading completed collapsed activity summary segment for unnamed tool calls",
      },
      calledTools: {
        id: "localConversation.agentActivity.summary.calledTools",
        defaultMessage: "{count, plural, one {called a tool} other {called tools}}",
        description: "Completed collapsed activity summary segment for unnamed tool calls",
      },
      searchedWebLeading: {
        id: "localConversation.agentActivity.summary.webSearch.leading",
        defaultMessage: "Searched the web",
        description: "Leading completed collapsed activity summary segment for web searches",
      },
      searchedWeb: {
        id: "localConversation.agentActivity.summary.webSearch",
        defaultMessage: "searched the web",
        description: "Completed collapsed activity summary segment for web searches",
      },
    })
    var U = n("MAIj")
    let B = (0, u.i1)(S.u, (e, { get: t }) =>
      e.map((e) => {
        let n = e.nativeAppReference
        if (n?.kind !== "appId" || (0, P.P)(n)) return e
        let { data: a } = t(U.r, n.appId)
        return null == a ? e : { ...e, name: a.displayName }
      }),
    )
    function z(e) {
      let t,
        n,
        i = (0, s.c)(7),
        { part: l, isLeading: o } = e,
        r = (0, p.A)(),
        c = (0, u._U)(B, l.sources)
      return (
        i[0] !== r || i[1] !== o || i[2] !== l || i[3] !== c
          ? ((t = F({ ...l, sources: c }, r, o)), (i[0] = r), (i[1] = o), (i[2] = l), (i[3] = c), (i[4] = t))
          : (t = i[4]),
        i[5] !== t ? ((n = (0, a.jsx)(a.Fragment, { children: t })), (i[5] = t), (i[6] = n)) : (n = i[6]),
        n
      )
    }
    var q = n("FqFR"),
      W = n("zUHW"),
      H = n("I3PO"),
      G = n("Sgcz"),
      V = n("IgqH"),
      $ = n("gSvk"),
      K = n("QCUA"),
      Z = n("hNWF"),
      Q = n("fw8Z"),
      J = n("mRLe"),
      Y = n("GRDa"),
      X = n("iwvb"),
      ee = n("acby"),
      et = n("alO6"),
      en = n("FVQK"),
      ea = n("Hkqr"),
      es = n("h30a"),
      ei = n("umSm"),
      el = n("rPK8"),
      eo = n("gtGM"),
      er = n("JhHS"),
      ec = n("pmt2"),
      ed = n("DYB3")
    function eu(e) {
      let t,
        n,
        i,
        l,
        o = (0, s.c)(19),
        { conversationId: r, item: c, count: d, hostId: u, resolvedApps: m, loadRemoteLogos: p, children: f } = e
      o[0] !== c || o[1] !== m ? ((t = (0, ed.gK)(c, m)), (o[0] = c), (o[1] = m), (o[2] = t)) : (t = o[2])
      let g = t
      return (
        o[3] !== u || o[4] !== c || o[5] !== p || o[6] !== m
          ? ((n = (0, a.jsx)(ec.m, { hostId: u, item: c, grouped: !0, resolvedApps: m, loadRemoteLogos: p })),
            (o[3] = u),
            (o[4] = c),
            (o[5] = p),
            (o[6] = m),
            (o[7] = n))
          : (n = o[7]),
        o[8] !== r || o[9] !== d || o[10] !== u || o[11] !== c || o[12] !== g || o[13] !== m
          ? ((i =
              null != g
                ? (0, a.jsxs)("span", {
                    className: "flex min-w-0 items-center gap-2",
                    children: [
                      (0, a.jsx)("span", {
                        className: "truncate",
                        children: (0, a.jsx)(h.A, { ...g.message, values: g.values }),
                      }),
                      (0, a.jsx)(a.Fragment, { children: " " }),
                      (0, a.jsx)("span", {
                        className: "shrink-0",
                        children: (0, a.jsx)(h.A, {
                          id: "localConversation.agentActivity.repeatedCodexCallCount",
                          defaultMessage: "· {count, plural, one {# call} other {# calls}}",
                          description:
                            "Standalone count after a Codex tool action label, indicating how many calls its disclosure reveals",
                          values: { count: d },
                        }),
                      }),
                    ],
                  })
                : (0, a.jsx)(h.A, {
                    id: "localConversation.agentActivity.repeatedToolCalls",
                    defaultMessage: "{toolName} · {count, plural, one {# call} other {# calls}}",
                    description:
                      "Disclosure for consecutive calls to one tool. toolName is the tool's name, and count is the number of calls that can be revealed.",
                    values: {
                      count: d,
                      toolName: (0, a.jsx)(en.x, {
                        item: c,
                        hostId: u,
                        conversationId: r,
                        matchingApp: (0, ea.M)({
                          appContext: c.appContext,
                          apps: m,
                          functionName: c.functionName,
                          serverName: c.invocation.server,
                          toolName: c.invocation.tool,
                        }),
                      }),
                    },
                  })),
            (o[8] = r),
            (o[9] = d),
            (o[10] = u),
            (o[11] = c),
            (o[12] = g),
            (o[13] = m),
            (o[14] = i))
          : (i = o[14]),
        o[15] !== f || o[16] !== n || o[17] !== i
          ? ((l = (0, a.jsx)(V.Z, { icon: n, summary: i, shouldAnimateInitialCollapse: !1, children: f })),
            (o[15] = f),
            (o[16] = n),
            (o[17] = i),
            (o[18] = l))
          : (l = o[18]),
        l
      )
    }
    var em = n("Z2lA"),
      ep = n("pGLn")
    let eh = []
    function ef(e) {
      var t, n
      let i,
        o,
        c,
        d,
        u,
        p,
        h,
        f,
        g,
        x,
        y = (0, s.c)(63),
        {
          units: w,
          activeCommentaryItem: b,
          combinedUnitKey: C,
          completedHeader: j,
          preserveSingleItemGroups: A,
          conversationId: k,
          getVisualizeTurnTriggerType: M,
          historyEntityKey: S,
          hostId: N,
          conversationDetailLevel: T,
          isReadOnly: _,
          isTurnInProgress: R,
          isHeaderInProgress: P,
          isTurnCancelled: L,
          isAeonThread: D,
          isActivitySliceClosed: F,
          isExploring: E,
          cwd: O,
          loadRemoteToolLogos: U,
          renderMcpApps: B,
          mcpServerStatuses: z,
          shouldAutoExpandMcpApps: q,
          toolActivityTurnKey: W,
          retryTurnId: V,
          modelProvider: $,
          compactUserMessageActions: Z,
          allowAddSelectedTextToChat: Q,
          hookStats: J,
          wrapSearchableContent: X,
          latestTurnFollowContentRef: ee,
          thinkingFallbackIcon: et,
          thinkingFallbackMessage: en,
          workedForLeadingAccessory: ea,
          standaloneActivityContentByItemId: ei,
          showTimestampHeader: el,
        } = e,
        eo = void 0 !== A && A,
        ec = void 0 === P ? R : P,
        ed = void 0 !== L && L,
        eu = void 0 !== D && D,
        em = void 0 === U || U,
        ep = void 0 === B || B,
        eh = void 0 !== q && q,
        ef = void 0 !== Z && Z,
        ev = void 0 !== el && el,
        ey = (0, m.useContext)(v.d),
        ew = (0, m.useContext)(es.T),
        eb = "activity" === (0, m.useContext)(K.b)
      if (0 === w.length) return null
      y[0] !== N || y[1] !== eu || y[2] !== w
        ? ((c = eu ? (0, I.Gj)(w, N) : w), (y[0] = N), (y[1] = eu), (y[2] = w), (y[3] = c))
        : (c = y[3])
      let eC = c
      y[4] !== eC || y[5] !== C
        ? ((d =
            null == C
              ? null
              : ((t = eC),
                (n = C),
                null == (o = (i = t.flatMap((e) => ("group" === e.kind ? e.items : [e.item])))[0])
                  ? null
                  : { kind: "group", key: `agent-activity-trace:${n}`, items: [o, ...i.slice(1)] })),
          (y[4] = eC),
          (y[5] = C),
          (y[6] = d))
        : (d = y[6])
      let ej = d
      y[7] !== eC || y[8] !== ej ? ((u = null == ej ? eC : [ej]), (y[7] = eC), (y[8] = ej), (y[9] = u)) : (u = y[9])
      let eA = u
      if (
        y[10] !== b ||
        y[11] !== Q ||
        y[12] !== eA ||
        y[13] !== ef ||
        y[14] !== j ||
        y[15] !== T ||
        y[16] !== k ||
        y[17] !== O ||
        y[18] !== M ||
        y[19] !== S ||
        y[20] !== J ||
        y[21] !== N ||
        y[22] !== F ||
        y[23] !== eb ||
        y[24] !== eu ||
        y[25] !== E ||
        y[26] !== ec ||
        y[27] !== _ ||
        y[28] !== ed ||
        y[29] !== R ||
        y[30] !== ee ||
        y[31] !== em ||
        y[32] !== z ||
        y[33] !== $ ||
        y[34] !== eo ||
        y[35] !== ep ||
        y[36] !== V ||
        y[37] !== ew ||
        y[38] !== eh ||
        y[39] !== ev ||
        y[40] !== ei ||
        y[41] !== et ||
        y[42] !== en ||
        y[43] !== W ||
        y[44] !== ey ||
        y[45] !== ea ||
        y[46] !== X
      ) {
        let e
        y[51] !== eA.length || y[52] !== j || y[53] !== F || y[54] !== E || y[55] !== ec || y[56] !== eo
          ? ((e = (e, t) => {
              let n = t === eA.length - 1
              return "standalone" === e.kind || eo || null != e.publicGoal || (n && null != j)
                ? e
                : (0, H.Pq)(
                    e,
                    (0, H.U6)({
                      unit: e,
                      isLatestVisibleUnit: n,
                      isTurnInProgress: ec,
                      isActivitySliceClosed: F,
                      isExploring: E,
                    }),
                  )
            }),
            (y[51] = eA.length),
            (y[52] = j),
            (y[53] = F),
            (y[54] = E),
            (y[55] = ec),
            (y[56] = eo),
            (y[57] = e))
          : (e = y[57])
        let t = eA.map(e),
          n = r()(t, eg)
        ;((p = Y.B),
          (h = "group/agent-activity"),
          (f = eb && !ey ? "grouped" : "item"),
          (g = t.map((e, s) => {
            let i = s === t.length - 1,
              o = "live" === ey && i && ("group" === e.kind || "assistant-message" !== e.item.item.type),
              r =
                "group" === e.kind
                  ? (0, a.jsx)(ex, {
                      unit: e,
                      showTimestampHeader: ev,
                      conversationId: k,
                      getVisualizeTurnTriggerType: M,
                      historyEntityKey: S,
                      hostId: N,
                      conversationDetailLevel: T,
                      isReadOnly: _,
                      isTurnInProgress: R,
                      isHeaderInProgress: ec,
                      isTurnCancelled: ed,
                      isActivitySliceClosed: F,
                      isExploring: E,
                      isLatestVisibleUnit: i,
                      cwd: O,
                      loadRemoteToolLogos: em,
                      renderMcpApps: ep,
                      mcpServerStatuses: z,
                      shouldAutoExpandMcpApps: eh,
                      toolActivityTurnKey: W,
                      modelProvider: $,
                      compactUserMessageActions: ef,
                      enableTimelineTargets: !1,
                      allowAddSelectedTextToChat: Q,
                      hookStats: J,
                      wrapSearchableContent: X,
                      thinkingFallbackIcon: i ? et : void 0,
                      thinkingFallbackMessage: en,
                      completedHeader: i ? j : void 0,
                      standaloneActivityContentByItemId: ei,
                    })
                  : (0, a.jsx)(eR, {
                      activityItem: e.item,
                      showTimestampHeader: ev,
                      showShimmer: e.item.item === b,
                      isAeonThread: eu,
                      conversationId: k,
                      getVisualizeTurnTriggerType: M,
                      historyEntityKey: S,
                      hostId: N,
                      conversationDetailLevel: T,
                      isReadOnly: _,
                      isTurnInProgress: R,
                      isTurnCancelled: ed,
                      cwd: O,
                      loadRemoteToolLogos: em,
                      renderMcpApps: ep,
                      shouldAutoExpandMcpApps: eh,
                      toolActivityTurnKey: W,
                      retryTurnId: V,
                      compactUserMessageActions: ef,
                      enableTimelineTargets: !1,
                      allowAddSelectedTextToChat: Q,
                      hookStats: J,
                      wrapSearchableContent: X,
                      workedForLeadingAccessory: ea,
                      standaloneActivityContentByItemId: ei,
                    }),
              c = (0, er.bn)(e),
              d =
                "standalone" === e.kind &&
                ("automatic-approval-review" === e.item.item.type
                  ? "denied" === e.item.item.status
                  : ("exec" === e.item.item.type || "patch" === e.item.item.type) && (0, G.LS)(e.item.item))
            return (0, a.jsx)(
              "div",
              {
                ref: e === n ? ee : void 0,
                className: (0, l.A)(
                  null != c && "outline-none",
                  "standalone" === e.kind &&
                    "assistant-message" === e.item.item.type &&
                    "has-[[data-markdown-text-style=assistant-message]:empty:last-child]:hidden",
                ),
                tabIndex: null == c ? void 0 : -1,
                "data-auto-review-denied": d || void 0,
                ...c,
                children: ey
                  ? (0, a.jsx)(v.d, {
                      value: o ? "live" : "history",
                      children: (0, a.jsx)(es.T, { value: ew && o, children: r }),
                    })
                  : r,
              },
              e.key,
            )
          })),
          (y[10] = b),
          (y[11] = Q),
          (y[12] = eA),
          (y[13] = ef),
          (y[14] = j),
          (y[15] = T),
          (y[16] = k),
          (y[17] = O),
          (y[18] = M),
          (y[19] = S),
          (y[20] = J),
          (y[21] = N),
          (y[22] = F),
          (y[23] = eb),
          (y[24] = eu),
          (y[25] = E),
          (y[26] = ec),
          (y[27] = _),
          (y[28] = ed),
          (y[29] = R),
          (y[30] = ee),
          (y[31] = em),
          (y[32] = z),
          (y[33] = $),
          (y[34] = eo),
          (y[35] = ep),
          (y[36] = V),
          (y[37] = ew),
          (y[38] = eh),
          (y[39] = ev),
          (y[40] = ei),
          (y[41] = et),
          (y[42] = en),
          (y[43] = W),
          (y[44] = ey),
          (y[45] = ea),
          (y[46] = X),
          (y[47] = p),
          (y[48] = h),
          (y[49] = f),
          (y[50] = g))
      } else ((p = y[47]), (h = y[48]), (f = y[49]), (g = y[50]))
      return (
        y[58] !== p || y[59] !== h || y[60] !== f || y[61] !== g
          ? ((x = (0, a.jsx)(p, { className: h, spacing: f, children: g })),
            (y[58] = p),
            (y[59] = h),
            (y[60] = f),
            (y[61] = g),
            (y[62] = x))
          : (x = y[62]),
        x
      )
    }
    function eg(e) {
      return "group" === e.kind || "user-message" !== e.item.item.type
    }
    function ex(e) {
      let t,
        n,
        l,
        o,
        r,
        c,
        h,
        f,
        g,
        y,
        w,
        C,
        j,
        A = (0, s.c)(84),
        {
          unit: I,
          showTimestampHeader: k,
          conversationId: N,
          getVisualizeTurnTriggerType: _,
          historyEntityKey: P,
          hostId: L,
          conversationDetailLevel: D,
          isReadOnly: E,
          isTurnInProgress: O,
          isHeaderInProgress: U,
          isTurnCancelled: B,
          isActivitySliceClosed: z,
          isExploring: G,
          isLatestVisibleUnit: $,
          cwd: K,
          loadRemoteToolLogos: Z,
          renderMcpApps: Q,
          mcpServerStatuses: Y,
          shouldAutoExpandMcpApps: X,
          toolActivityTurnKey: ee,
          modelProvider: en,
          compactUserMessageActions: ei,
          enableTimelineTargets: eo,
          allowAddSelectedTextToChat: er,
          hookStats: ec,
          wrapSearchableContent: ed,
          thinkingFallbackIcon: ef,
          thinkingFallbackMessage: eg,
          completedHeader: ex,
          standaloneActivityContentByItemId: ek,
        } = e,
        eM = (0, u.gh)(S.u)
      ;(A[0] !== I.items ? ((t = I.items.some(ej)), (A[0] = I.items), (A[1] = t)) : (t = A[1]),
        A[2] !== L || A[3] !== t ? ((n = { enabled: t, hostId: L }), (A[2] = L), (A[3] = t), (A[4] = n)) : (n = A[4]))
      let { data: eS } = (0, x.Ad)(n),
        eN = eS ?? eh,
        e_ = (0, p.A)()
      A[5] !== z || A[6] !== G || A[7] !== U || A[8] !== $ || A[9] !== I
        ? ((l = (0, H.U6)({
            unit: I,
            isLatestVisibleUnit: $,
            isTurnInProgress: U,
            isActivitySliceClosed: z,
            isExploring: G,
          })),
          (A[5] = z),
          (A[6] = G),
          (A[7] = U),
          (A[8] = $),
          (A[9] = I),
          (A[10] = l))
        : (l = A[10])
      let eP = l
      if (A[11] !== B || A[12] !== I.items) {
        let e
        ;(A[15] !== B
          ? ((e = (e) =>
              (function ({ item: e }, t) {
                return "patch" === e.type && 0 === Object.keys(e.changes).length
                  ? null != (0, T.so)(e.visualizationActivities) &&
                      !1 !== e.success &&
                      (!0 === e.success || null != e.approvalRequestId || !t)
                  : "exec" !== e.type ||
                      !!e.parsedCmd.isFinished ||
                      ("read" === e.parsedCmd.type
                        ? (0, em.c)({ summary: e.parsedCmd, cwd: e.cwd })
                        : "search" !== e.parsedCmd.type && "list_files" !== e.parsedCmd.type)
              })(e, B)),
            (A[15] = B),
            (A[16] = e))
          : (e = A[16]),
          (r = (o = I.items.filter(e)).length > 0 && !o.every(eC)),
          (A[11] = B),
          (A[12] = I.items),
          (A[13] = o),
          (A[14] = r))
      } else ((o = A[13]), (r = A[14]))
      let eL = r,
        eD = (0, m.useContext)(v.d)
      A[17] !== B || A[18] !== Y || A[19] !== en || A[20] !== eN || A[21] !== I.items
        ? ((c = { resolvedApps: eN, mcpServerStatuses: Y, modelProvider: en, isTurnCancelled: B }),
          (h = (0, W.w)(I.items, c)),
          (A[17] = B),
          (A[18] = Y),
          (A[19] = en),
          (A[20] = eN),
          (A[21] = I.items),
          (A[22] = c),
          (A[23] = h))
        : ((c = A[22]), (h = A[23]))
      let eF = h
      A[24] !== eD || A[25] !== I.items
        ? ((f = eD ? eA(I.items) : void 0), (A[24] = eD), (A[25] = I.items), (A[26] = f))
        : (f = A[26])
      let eE = f,
        eO = I.items.length > 1
      ;(A[27] !== eL ||
      A[28] !== ex ||
      A[29] !== eE ||
      A[30] !== D ||
      A[31] !== N ||
      A[32] !== eP ||
      A[33] !== L ||
      A[34] !== Z ||
      A[35] !== eN ||
      A[36] !== eF ||
      A[37] !== eO ||
      A[38] !== ef ||
      A[39] !== eg ||
      A[40] !== I.items[0] ||
      A[41] !== I.publicGoal
        ? ((g = (0, a.jsx)(eI, {
            publicGoal: I.publicGoal,
            firstItem: I.items[0],
            conversationId: N,
            state: eP,
            summary: eF,
            hostId: L,
            isExpandable: eL,
            hasMultipleItems: eO,
            loadRemoteToolLogos: Z,
            resolvedApps: eN,
            conversationDetailLevel: D,
            thinkingFallbackIcon: ef,
            thinkingFallbackMessage: eg,
            completedHeader: ex,
            connector: eE,
          })),
          (A[27] = eL),
          (A[28] = ex),
          (A[29] = eE),
          (A[30] = D),
          (A[31] = N),
          (A[32] = eP),
          (A[33] = L),
          (A[34] = Z),
          (A[35] = eN),
          (A[36] = eF),
          (A[37] = eO),
          (A[38] = ef),
          (A[39] = eg),
          (A[40] = I.items[0]),
          (A[41] = I.publicGoal),
          (A[42] = g))
        : (g = A[42]),
        A[43] !== eP
          ? ((y = (function (e) {
              switch (e.kind) {
                case "active":
                  return `active:${(0, H.bl)(e.item, 0)}`
                case "thinking":
                  return "thinking"
                case "summary":
                  return "summary"
              }
            })(eP)),
            (A[43] = eP),
            (A[44] = y))
          : (y = A[44]))
      let eU = "summary" === eP.kind ? "immediate" : "deferred",
        eB = $ && U && !z
      return (
        A[45] !== eP.kind || A[46] !== eM
          ? ((w = () => {
              ;(0, M.yy)(eM, i.CodexAgentActivityGroupExpanded, {
                state:
                  "summary" === eP.kind
                    ? i.CodexAgentActivityGroupState.CODEX_AGENT_ACTIVITY_GROUP_STATE_COMPLETED
                    : i.CodexAgentActivityGroupState.CODEX_AGENT_ACTIVITY_GROUP_STATE_ACTIVE,
              })
            }),
            (A[45] = eP.kind),
            (A[46] = eM),
            (A[47] = w))
          : (w = A[47]),
        A[48] !== er ||
        A[49] !== ei ||
        A[50] !== eE ||
        A[51] !== o ||
        A[52] !== D ||
        A[53] !== N ||
        A[54] !== K ||
        A[55] !== eo ||
        A[56] !== _ ||
        A[57] !== P ||
        A[58] !== ec ||
        A[59] !== L ||
        A[60] !== e_ ||
        A[61] !== E ||
        A[62] !== B ||
        A[63] !== O ||
        A[64] !== Z ||
        A[65] !== Q ||
        A[66] !== eN ||
        A[67] !== X ||
        A[68] !== k ||
        A[69] !== ek ||
        A[70] !== c ||
        A[71] !== ee ||
        A[72] !== eD ||
        A[73] !== I.publicGoal ||
        A[74] !== ed
          ? ((C = () => {
              let e = (e, t) =>
                  (0, a.jsxs)(
                    "div",
                    {
                      children: [
                        !eD && (0, a.jsx)(J.a, { variant: "grouped" }),
                        (0, a.jsx)(eR, {
                          activityItem: e,
                          showTimestampHeader: k,
                          conversationId: N,
                          getVisualizeTurnTriggerType: _,
                          historyEntityKey: P,
                          hostId: L,
                          conversationDetailLevel: D,
                          isReadOnly: E,
                          isTurnInProgress: O,
                          isTurnCancelled: B,
                          cwd: K,
                          loadRemoteToolLogos: Z,
                          renderMcpApps: Q,
                          shouldAutoExpandMcpApps: X,
                          toolActivityTurnKey: ee,
                          compactUserMessageActions: ei,
                          enableTimelineTargets: eo,
                          allowAddSelectedTextToChat: er,
                          hookStats: ec,
                          wrapSearchableContent: ed,
                          standaloneActivityContentByItemId: ek,
                        }),
                      ],
                    },
                    (0, H.bl)(e, t),
                  ),
                t = I.publicGoal ? Object.values(d()(o, q.kd)) : null,
                n = (e, t) =>
                  (0, H.Yg)(
                    e,
                    (e) =>
                      (0, et.EP)({
                        pluginId: e.pluginId,
                        toolDisplay: e.toolDisplay,
                        appContext: e.appContext,
                        intl: e_,
                        completed: e.completed,
                        serverName: e.invocation.server,
                        toolName: e.invocation.tool,
                        matchingApp: (0, ea.M)({
                          appContext: e.appContext,
                          apps: eN,
                          functionName: e.functionName,
                          serverName: e.invocation.server,
                          toolName: e.invocation.tool,
                        }),
                        toolArguments: e.invocation.arguments,
                        toolResult: e.result,
                      }),
                    t ? "connector" : "adjacent",
                  ),
                s = (t, n) => {
                  let s,
                    i = t[0]
                  if (1 === t.length) return e(i, n)
                  let l = () =>
                    eD ? (0, a.jsx)("div", { className: ep.A.transcriptDetail, children: t.map(e) }) : t.map(e)
                  if ("mcp-tool-call" === i.item.type)
                    s = (0, a.jsx)(eu, {
                      conversationId: N,
                      item: i.item,
                      count: t.length,
                      hostId: L,
                      resolvedApps: eN,
                      loadRemoteLogos: Z,
                      children: l,
                    })
                  else {
                    if ("external-event" !== i.item.type) return e(i, n)
                    s = (0, a.jsx)(b.$, {
                      item: i.item,
                      count: t.length,
                      icon: (0, R.T)(i, { hostId: L, resolvedApps: eN, loadRemoteLogos: Z }),
                      children: l,
                    })
                  }
                  return (0, a.jsxs)(
                    m.Fragment,
                    { children: [!eD && (0, a.jsx)(J.a, { variant: "grouped" }), s] },
                    (0, H.bl)(i, n),
                  )
                }
              return (0, a.jsx)(v.d, {
                value: eD && "history",
                children: (0, a.jsx)(es.T, {
                  value: !1,
                  children: (0, a.jsx)("div", {
                    className: eD
                      ? ep.A.transcriptDetail
                      : "vertical-scroll-fade-mask -ms-2 flex max-h-56 flex-col overflow-x-hidden overflow-y-auto ps-2 [--edge-fade-distance:1.5rem]",
                    style: eD
                      ? void 0
                      : { "--conversation-patch-file-gap": "var(--conversation-grouped-item-gap, 4px)" },
                    children: (t ?? n(o, eE)).map((i, l) => {
                      let o = i[0]
                      if (t && "image-view" === o.item.type) {
                        let t = i.map(eb).filter(ew)
                        return e(
                          { ...o, item: { ...o.item, imageCount: t.reduce(ey, 0), imagePaths: t.flatMap(ev) } },
                          l,
                        )
                      }
                      if (t) {
                        let t = eA(i)
                        return (0, a.jsx)(
                          el.e,
                          {
                            icon: (0, R.T)(o, { hostId: L, resolvedApps: eN, loadRemoteLogos: Z }),
                            label:
                              t ??
                              ("exec" === o.item.type
                                ? F({ kind: "commands", count: i.length }, e_, !0)
                                : (0, a.jsx)(eT, { summary: (0, W.w)(i, c) })),
                            children: t ? n(i, t).map(s) : i.map(e),
                          },
                          (0, H.bl)(o, l),
                        )
                      }
                      return s(i, l)
                    }),
                  }),
                }),
              })
            }),
            (A[48] = er),
            (A[49] = ei),
            (A[50] = eE),
            (A[51] = o),
            (A[52] = D),
            (A[53] = N),
            (A[54] = K),
            (A[55] = eo),
            (A[56] = _),
            (A[57] = P),
            (A[58] = ec),
            (A[59] = L),
            (A[60] = e_),
            (A[61] = E),
            (A[62] = B),
            (A[63] = O),
            (A[64] = Z),
            (A[65] = Q),
            (A[66] = eN),
            (A[67] = X),
            (A[68] = k),
            (A[69] = ek),
            (A[70] = c),
            (A[71] = ee),
            (A[72] = eD),
            (A[73] = I.publicGoal),
            (A[74] = ed),
            (A[75] = C))
          : (C = A[75]),
        A[76] !== eL || A[77] !== eU || A[78] !== eB || A[79] !== w || A[80] !== C || A[81] !== g || A[82] !== y
          ? ((j = (0, a.jsx)(V.Z, {
              summary: g,
              summaryKey: y,
              summaryTransition: eU,
              shouldAnimateInitialCollapse: eB,
              canExpand: eL,
              onExpand: w,
              children: C,
            })),
            (A[76] = eL),
            (A[77] = eU),
            (A[78] = eB),
            (A[79] = w),
            (A[80] = C),
            (A[81] = g),
            (A[82] = y),
            (A[83] = j))
          : (j = A[83]),
        j
      )
    }
    function ev(e) {
      return e.imagePaths
    }
    function ey(e, t) {
      return e + t.imageCount
    }
    function ew(e) {
      return "image-view" === e.type
    }
    function eb(e) {
      let { item: t } = e
      return t
    }
    function eC(e) {
      let { item: t } = e
      return "dynamic-tool-call" === t.type && (0, ee.b7)(t)
    }
    function ej(e) {
      let { item: t } = e
      return "external-event" === t.type || ("mcp-tool-call" === t.type && (0, D.Yb)(t))
    }
    function eA(e) {
      let t = e[0]?.item
      if (t?.type !== "mcp-tool-call" || !t.appContext?.connectorId || e.length < 2) return
      let n = t.appContext.connectorId
      return (
        (e.every(({ item: e }) => "mcp-tool-call" === e.type && e.appContext?.connectorId === n) &&
          t.appContext.appName) ||
        void 0
      )
    }
    function eI(e) {
      let t,
        n,
        i,
        o,
        r,
        c,
        d,
        u = (0, s.c)(56),
        {
          firstItem: h,
          connector: f,
          conversationId: g,
          state: x,
          publicGoal: y,
          summary: w,
          hostId: b,
          isExpandable: C,
          hasMultipleItems: j,
          loadRemoteToolLogos: A,
          resolvedApps: I,
          conversationDetailLevel: M,
          thinkingFallbackIcon: S,
          thinkingFallbackMessage: N,
          completedHeader: T,
        } = e,
        P = (0, p.A)(),
        L = (0, m.useContext)(v.d)
      u[0] !== M || u[1] !== P || u[2] !== x.item || u[3] !== x.kind
        ? ((t =
            "active" === x.kind && "exec" === x.item.item.type && (0, Z.K)(x.item.item)
              ? (0, _.i)({
                  items: [x.item.item],
                  threadDetailLevel: M,
                  formatSearchQueryTermList: (e) => P.formatList(e, { type: "conjunction" }),
                })
              : null),
          (u[0] = M),
          (u[1] = P),
          (u[2] = x.item),
          (u[3] = x.kind),
          (u[4] = t))
        : (t = u[4])
      let D = t,
        F = null
      if ("thinking" === x.kind || null != S) {
        let e
        ;((F = S),
          u[5] !== g || u[6] !== N
            ? ((e = (0, a.jsx)(eN, { conversationId: g, message: N })), (u[5] = g), (u[6] = N), (u[7] = e))
            : (e = u[7]),
          (n = e))
      } else if ("active" === x.kind) {
        let e, t
        ;(u[8] !== b || u[9] !== A || u[10] !== I || u[11] !== x.item
          ? ((e = (0, R.T)(x.item, { hostId: b, loadRemoteLogos: A, resolvedApps: I })),
            (u[8] = b),
            (u[9] = A),
            (u[10] = I),
            (u[11] = x.item),
            (u[12] = e))
          : (e = u[12]),
          (F = e),
          u[13] !== D || u[14] !== M || u[15] !== g || u[16] !== b || u[17] !== A || u[18] !== I || u[19] !== x.item
            ? ((t = (0, a.jsx)(ek, {
                hostId: b,
                conversationId: g,
                activityItem: x.item,
                resolvedApps: I,
                activeExplorationLabel: D,
                conversationDetailLevel: M,
                loadRemoteToolLogos: A,
              })),
              (u[13] = D),
              (u[14] = M),
              (u[15] = g),
              (u[16] = b),
              (u[17] = A),
              (u[18] = I),
              (u[19] = x.item),
              (u[20] = t))
            : (t = u[20]),
          (n = t))
      } else if (null == T) {
        let e,
          t,
          s = w.completedHeader.iconItem
        if (
          (u[21] !== j || u[22] !== b || u[23] !== s || u[24] !== A || u[25] !== I
            ? ((e = null == s ? null : (0, R.T)(s, { grouped: j, hostId: b, loadRemoteLogos: A, resolvedApps: I })),
              (u[21] = j),
              (u[22] = b),
              (u[23] = s),
              (u[24] = A),
              (u[25] = I),
              (u[26] = e))
            : (e = u[26]),
          (F = e),
          u[27] !== f || u[28] !== w
            ? ((t = f ? (0, a.jsx)(a.Fragment, { children: f }) : (0, a.jsx)(eT, { summary: w })),
              (u[27] = f),
              (u[28] = w),
              (u[29] = t))
            : (t = u[29]),
          (n = t),
          !j && s?.item.type === "mcp-tool-call")
        ) {
          let e
          ;(u[30] !== n || u[31] !== s.item || u[32] !== A || u[33] !== I
            ? ((e = (0, a.jsx)(k.d, { item: s.item, apps: I, part: "label", loadMetadata: A, children: n })),
              (u[30] = n),
              (u[31] = s.item),
              (u[32] = A),
              (u[33] = I),
              (u[34] = e))
            : (e = u[34]),
            (n = e))
        }
      } else {
        let e
        ;(u[35] !== T ? ((e = (0, a.jsx)(a.Fragment, { children: T })), (u[35] = T), (u[36] = e)) : (e = u[36]),
          (n = e))
      }
      if (y) {
        let e
        ;(u[37] !== h || u[38] !== b || u[39] !== A || u[40] !== I
          ? ((e = (0, R.T)(h, { hostId: b, loadRemoteLogos: A, resolvedApps: I })),
            (u[37] = h),
            (u[38] = b),
            (u[39] = A),
            (u[40] = I),
            (u[41] = e))
          : (e = u[41]),
          (F = e))
      }
      u[42] !== F
        ? ((i = null == F ? null : (0, a.jsx)("span", { className: "contents text-text/60", children: F })),
          (u[42] = F),
          (u[43] = i))
        : (i = u[43])
      let E = C && "group-hover/activity-header:[--agent-activity-summary-color:var(--color-text)]"
      return (
        u[44] !== E
          ? ((o = (0, l.A)(
              "block min-w-0 max-w-full flex-1 truncate text-(--agent-activity-summary-color) [&_*:not(button)]:!text-(--agent-activity-summary-color)",
              ep.A.summary,
              E,
            )),
            (u[44] = E),
            (u[45] = o))
          : (o = u[45]),
        u[46] !== n || u[47] !== y || u[48] !== L
          ? ((r =
              "live" === L
                ? (0, a.jsx)(ei.N, {
                    className: "loading-shimmer-working",
                    children: (0, a.jsx)(es.T, { value: !1, children: y ?? n }),
                  })
                : (y ?? n)),
            (u[46] = n),
            (u[47] = y),
            (u[48] = L),
            (u[49] = r))
          : (r = u[49]),
        u[50] !== o || u[51] !== r
          ? ((c = (0, a.jsx)("span", { className: o, children: r })), (u[50] = o), (u[51] = r), (u[52] = c))
          : (c = u[52]),
        u[53] !== i || u[54] !== c
          ? ((d = (0, a.jsx)($.B, { icon: i, children: c })), (u[53] = i), (u[54] = c), (u[55] = d))
          : (d = u[55]),
        d
      )
    }
    function ek(e) {
      let t = (0, s.c)(42),
        {
          hostId: n,
          conversationId: i,
          activityItem: l,
          resolvedApps: o,
          activeExplorationLabel: r,
          conversationDetailLevel: c,
          loadRemoteToolLogos: d,
        } = e,
        u = l.item
      switch (u.type) {
        case "exec": {
          let e, n
          if (null != r) {
            let e, n
            return (
              t[0] !== r.values
                ? ((e = { ...r.values, action: eS, detail: eM }), (t[0] = r.values), (t[1] = e))
                : (e = t[1]),
              t[2] !== r.message || t[3] !== e
                ? ((n = (0, a.jsx)(ei.N, { children: (0, a.jsx)(h.A, { ...r.message, tagName: "span", values: e }) })),
                  (t[2] = r.message),
                  (t[3] = e),
                  (t[4] = n))
                : (n = t[4]),
              n
            )
          }
          if (c === N.O$) {
            let e
            return (
              t[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(ei.N, {
                    children: (0, a.jsx)(h.A, {
                      id: "localConversation.agentActivity.runningCommandGeneric",
                      tagName: "span",
                      defaultMessage: "Running command",
                      description: "Active agent activity header for a running command in everyday mode",
                    }),
                  })),
                  (t[5] = e))
                : (e = t[5]),
              e
            )
          }
          return (
            t[6] !== u.parsedCmd.cmd
              ? ((e = u.parsedCmd.cmd.trim()), (t[6] = u.parsedCmd.cmd), (t[7] = e))
              : (e = t[7]),
            t[8] !== e
              ? ((n = (0, a.jsx)(ei.N, {
                  children: (0, a.jsx)(h.A, {
                    id: "localConversation.agentActivity.runningCommand",
                    tagName: "span",
                    defaultMessage: "Running {command}",
                    description: "Active agent activity header for a running command",
                    values: { command: e },
                  }),
                })),
                (t[8] = e),
                (t[9] = n))
              : (n = t[9]),
            n
          )
        }
        case "patch": {
          let e
          return (
            t[10] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(ei.N, {
                  children: (0, a.jsx)(h.A, {
                    id: "localConversation.agentActivity.editingFiles",
                    tagName: "span",
                    defaultMessage: "Editing files",
                    description: "Active agent activity header for a running patch",
                  }),
                })),
                (t[10] = e))
              : (e = t[10]),
            e
          )
        }
        case "web-search": {
          let e, n
          if (null != u.title) {
            let e
            return (
              t[11] !== u.title
                ? ((e = (0, a.jsx)(ei.N, { children: u.title })), (t[11] = u.title), (t[12] = e))
                : (e = t[12]),
              e
            )
          }
          t[13] !== u.action || t[14] !== u.query
            ? ((e = (0, eo.Q)(u.action, u.query).trim()), (t[13] = u.action), (t[14] = u.query), (t[15] = e))
            : (e = t[15])
          let s = e
          return (
            t[16] !== s
              ? ((n = (0, a.jsx)(ei.N, {
                  children:
                    0 === s.length
                      ? (0, a.jsx)(h.A, {
                          id: "localConversation.agentActivity.searchingWeb",
                          tagName: "span",
                          defaultMessage: "Searching the web",
                          description: "Active agent activity header for a web search",
                        })
                      : (0, a.jsx)(h.A, {
                          id: "localConversation.agentActivity.searchingWebForQuery",
                          tagName: "span",
                          defaultMessage: "Searching the web for {query}",
                          description: "Active agent activity header for a web search with a query",
                          values: { query: s },
                        }),
                })),
                (t[16] = s),
                (t[17] = n))
              : (n = t[17]),
            n
          )
        }
        case "mcp-tool-call": {
          let e, s, l, r, c
          t[18] !== u.appContext ||
          t[19] !== u.functionName ||
          t[20] !== u.invocation.server ||
          t[21] !== u.invocation.tool ||
          t[22] !== o
            ? ((e = (0, ea.M)({
                appContext: u.appContext,
                apps: o,
                functionName: u.functionName,
                serverName: u.invocation.server,
                toolName: u.invocation.tool,
              })),
              (t[18] = u.appContext),
              (t[19] = u.functionName),
              (t[20] = u.invocation.server),
              (t[21] = u.invocation.tool),
              (t[22] = o),
              (t[23] = e))
            : (e = t[23])
          let m = e
          return (
            t[24] !== u ? ((s = { ...u, completed: !1 }), (t[24] = u), (t[25] = s)) : (s = t[25]),
            t[26] !== u ? ((l = { ...u, completed: !1 }), (t[26] = u), (t[27] = l)) : (l = t[27]),
            t[28] !== i || t[29] !== n || t[30] !== m || t[31] !== l
              ? ((r = (0, a.jsx)(en.x, { item: l, hostId: n, conversationId: i, matchingApp: m })),
                (t[28] = i),
                (t[29] = n),
                (t[30] = m),
                (t[31] = l),
                (t[32] = r))
              : (r = t[32]),
            t[33] !== d || t[34] !== o || t[35] !== s || t[36] !== r
              ? ((c = (0, a.jsx)(ei.N, {
                  children: (0, a.jsx)("span", {
                    children: (0, a.jsx)(k.d, { item: s, apps: o, part: "label", loadMetadata: d, children: r }),
                  }),
                })),
                (t[33] = d),
                (t[34] = o),
                (t[35] = s),
                (t[36] = r),
                (t[37] = c))
              : (c = t[37]),
            c
          )
        }
        case "dynamic-tool-call": {
          let e
          return (
            t[38] !== u
              ? ((e = (0, a.jsx)(X.w, { item: { ...u, completed: !1 }, variant: "summary-text" })),
                (t[38] = u),
                (t[39] = e))
              : (e = t[39]),
            e
          )
        }
        case "dil-reasoning":
        case "assistant-message":
        case "automatic-approval-review":
        case "auto-review-interruption-warning":
        case "context-compaction":
        case "external-event":
        case "generated-image":
        case "image-view":
        case "mcp-server-elicitation":
        case "multi-agent-action":
        case "realtime-transcript":
        case "stream-error":
        case "strict-review-notice":
        case "subagent-activity":
        case "system-error":
        case "user-input-response":
        case "user-message":
        case "worked-for":
        case "worktree-init": {
          let e
          return (
            t[40] !== i ? ((e = (0, a.jsx)(eN, { conversationId: i })), (t[40] = i), (t[41] = e)) : (e = t[41]),
            e
          )
        }
      }
    }
    function eM(e) {
      return (0, a.jsx)("span", { className: "min-w-0 truncate", children: e }, "detail")
    }
    function eS(e) {
      return (0, a.jsx)("span", { className: "whitespace-nowrap", children: e }, "action")
    }
    function eN(e) {
      let t,
        n = (0, s.c)(7),
        { conversationId: i, message: l } = e,
        o = (0, m.useContext)(v.d)
      if ((0, u._U)(A.D0, i)) {
        let e, t
        return (
          n[0] !== l
            ? ((e = l ?? (0, a.jsx)(h.A, { ...w.k.thinking, tagName: "span" })), (n[0] = l), (n[1] = e))
            : (e = n[1]),
          n[2] !== e ? ((t = (0, a.jsx)(ei.N, { children: e })), (n[2] = e), (n[3] = t)) : (t = n[3]),
          t
        )
      }
      let r = null != o
      return (
        n[4] !== l || n[5] !== r
          ? ((t = (0, a.jsx)(y.k, { message: l, transcript: r })), (n[4] = l), (n[5] = r), (n[6] = t))
          : (t = n[6]),
        t
      )
    }
    function eT(e) {
      let t,
        n,
        i = (0, s.c)(8),
        { summary: l } = e,
        o = (0, p.A)()
      if (0 === l.completedHeader.summaryParts.length) {
        let e
        return (
          i[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, a.jsx)(e_, {})), (i[0] = e)) : (e = i[0]),
          e
        )
      }
      if (i[1] !== o || i[2] !== l.completedHeader.summaryParts) {
        let e
        ;(i[4] !== o
          ? ((e = (e, t) =>
              "mcp-sources" === e.kind
                ? (0, a.jsx)(z, { part: e, isLeading: 0 === t }, e.kind)
                : "dynamic-tool-call" === e.kind
                  ? (0, a.jsx)(
                      "span",
                      {
                        className: "inline-flex min-w-0 items-center gap-1",
                        children: (0, a.jsx)(X.w, {
                          isLeadingSummaryPart: 0 === t,
                          item: { ...e.item, completed: !0 },
                          variant: "summary-text",
                        }),
                      },
                      e.key,
                    )
                  : F(e, o, 0 === t)),
            (i[4] = o),
            (i[5] = e))
          : (e = i[5]),
          (t = l.completedHeader.summaryParts.map(e)),
          (i[1] = o),
          (i[2] = l.completedHeader.summaryParts),
          (i[3] = t))
      } else t = i[3]
      return (
        i[6] !== t
          ? ((n = (0, a.jsx)("span", {
              className: "block max-w-full min-w-0 truncate",
              children: (0, a.jsx)(f.dT, { type: "unit", value: t }),
            })),
            (i[6] = t),
            (i[7] = n))
          : (n = i[7]),
        n
      )
    }
    function e_() {
      let e,
        t = (0, s.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, {
              id: "localConversation.agentActivity.completed",
              defaultMessage: "Worked",
              description: "Fallback completed summary for an agent activity group",
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    function eR(e) {
      let t,
        n,
        l,
        o,
        r,
        c,
        d,
        m = (0, s.c)(50),
        {
          activityItem: p,
          showTimestampHeader: h,
          showShimmer: f,
          isAeonThread: v,
          conversationId: y,
          getVisualizeTurnTriggerType: w,
          historyEntityKey: b,
          hostId: A,
          conversationDetailLevel: I,
          isReadOnly: k,
          isTurnInProgress: N,
          isTurnCancelled: T,
          cwd: _,
          loadRemoteToolLogos: R,
          renderMcpApps: P,
          shouldAutoExpandMcpApps: L,
          toolActivityTurnKey: F,
          retryTurnId: E,
          compactUserMessageActions: O,
          enableTimelineTargets: U,
          allowAddSelectedTextToChat: B,
          hookStats: z,
          wrapSearchableContent: q,
          workedForLeadingAccessory: W,
          standaloneActivityContentByItemId: H,
        } = e,
        G = void 0 !== f && f,
        V = void 0 !== v && v,
        $ = (0, u.gh)(S.u),
        K = p.item
      ;(m[0] !== K
        ? ((t = "external-event" === K.type || ("mcp-tool-call" === K.type && (0, D.Yb)(K))), (m[0] = K), (m[1] = t))
        : (t = m[1]),
        m[2] !== A || m[3] !== t ? ((n = { enabled: t, hostId: A }), (m[2] = A), (m[3] = t), (m[4] = n)) : (n = m[4]))
      let { data: Z } = (0, x.Ad)(n),
        J = Z ?? eh
      m[5] !== K.id || m[6] !== K.type || m[7] !== H
        ? ((l = "subagent-activity" === K.type || "generated-image" === K.type ? H?.get(K.id) : null),
          (m[5] = K.id),
          (m[6] = K.type),
          (m[7] = H),
          (m[8] = l))
        : (l = m[8])
      let Y = l
      if (null != Y) return Y
      m[9] !== K.appContext ||
      m[10] !== K.functionName ||
      m[11] !== K.invocation ||
      m[12] !== K.type ||
      m[13] !== J ||
      m[14] !== $
        ? ((o =
            "mcp-tool-call" === K.type
              ? () => {
                  let e = (0, ea.M)({
                    appContext: K.appContext,
                    apps: J,
                    functionName: K.functionName,
                    serverName: K.invocation.server,
                    toolName: K.invocation.tool,
                  })
                  ;(0, M.yy)($, i.CodexAgentActivityMcpToolCallExpanded, { appName: (0, g.P)(e) })
                }
              : void 0),
          (m[9] = K.appContext),
          (m[10] = K.functionName),
          (m[11] = K.invocation),
          (m[12] = K.type),
          (m[13] = J),
          (m[14] = $),
          (m[15] = o))
        : (o = m[15])
      let X = o
      m[16] !== A || m[17] !== V || m[18] !== K
        ? ((r = V && "mcp-tool-call" === K.type ? (0, j.Ai)(K, A) : null),
          (m[16] = A),
          (m[17] = V),
          (m[18] = K),
          (m[19] = r))
        : (r = m[19])
      let ee = r
      m[20] !== B ||
      m[21] !== O ||
      m[22] !== I ||
      m[23] !== y ||
      m[24] !== _ ||
      m[25] !== U ||
      m[26] !== w ||
      m[27] !== b ||
      m[28] !== z ||
      m[29] !== A ||
      m[30] !== k ||
      m[31] !== T ||
      m[32] !== N ||
      m[33] !== K ||
      m[34] !== R ||
      m[35] !== X ||
      m[36] !== P ||
      m[37] !== J ||
      m[38] !== E ||
      m[39] !== L ||
      m[40] !== G ||
      m[41] !== h ||
      m[42] !== ee ||
      m[43] !== F ||
      m[44] !== W
        ? ((c =
            ee?.type === "attached-threads"
              ? (0, a.jsx)("div", {
                  className: "flex flex-col gap-2",
                  children: (0, a.jsx)(C.sU, {
                    attachments: ee.threads,
                    hostId: A,
                    parentConversationId: y,
                    variant: "standalone",
                  }),
                })
              : (0, a.jsx)(Q.S, {
                  item: K,
                  showShimmer: G,
                  conversationId: y,
                  getVisualizeTurnTriggerType: w,
                  historyEntityKey: b,
                  hostId: A,
                  conversationDetailLevel: I,
                  isReadOnly: k,
                  isTurnInProgress: N,
                  isTurnCancelled: T,
                  cwd: _,
                  reportEntityType: "thread",
                  resolvedApps: J,
                  loadRemoteToolLogos: R,
                  renderMcpApps: P,
                  shouldAutoExpandMcpApps: L,
                  toolActivityTurnKey: F,
                  turnId: "system-error" === K.type ? E : void 0,
                  compactUserMessageActions: O,
                  showAssistantMessageActionRow:
                    "assistant-message" === K.type && "async" === K.delivery && null == K.requestUserInputAsync,
                  allowAddSelectedTextToChat: B,
                  hookStats: "user-message" === K.type && !0 === K.hookFeedback ? z : null,
                  workedForLeadingAccessory: W,
                  renderToolActivityInWorkMode: !0,
                  enableTimelineTargets: U,
                  showTimestampHeader: h,
                  showAssistantTimestampWithoutActions: U,
                  onExpand: X,
                })),
          (m[20] = B),
          (m[21] = O),
          (m[22] = I),
          (m[23] = y),
          (m[24] = _),
          (m[25] = U),
          (m[26] = w),
          (m[27] = b),
          (m[28] = z),
          (m[29] = A),
          (m[30] = k),
          (m[31] = T),
          (m[32] = N),
          (m[33] = K),
          (m[34] = R),
          (m[35] = X),
          (m[36] = P),
          (m[37] = J),
          (m[38] = E),
          (m[39] = L),
          (m[40] = G),
          (m[41] = h),
          (m[42] = ee),
          (m[43] = F),
          (m[44] = W),
          (m[45] = c))
        : (c = m[45])
      let et = c
      return (
        m[46] !== et || m[47] !== K || m[48] !== q
          ? ((d = null == q ? et : q({ item: K, content: et })), (m[46] = et), (m[47] = K), (m[48] = q), (m[49] = d))
          : (d = m[49]),
        d
      )
    }
  },
  gSvk(e, t, n) {
    var a = n("ABep"),
      s = n("QosV"),
      i = n("rCz8"),
      l = n("i8Dm"),
      o = n("G9K2"),
      r = n("aEi7"),
      c = n("wepB"),
      d = n("kuP6"),
      u = n("on57"),
      m = n("Zm2g"),
      p = n("FvYa"),
      h = n("dqpP"),
      f = n("HOLv"),
      g = n("MAIj"),
      x = n("bwpB")
    function v(e) {
      let t,
        n,
        i,
        o = (0, s.c)(6),
        { source: r } = e,
        c = (0, g.v)(r.nativeAppReference),
        d = c?.appPath ?? null
      o[0] !== d ? ((t = { appPath: d }), (o[0] = d), (o[1] = t)) : (t = o[1])
      let { iconSmall: u } = (0, m.x)(t),
        h = c?.displayName ?? r.name
      return (
        o[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)(f.I, { className: "shrink-0 text-text/60", "aria-hidden": !1, asset: l.y })), (o[2] = n))
          : (n = o[2]),
        o[3] !== u || o[4] !== h
          ? ((i = (0, a.jsx)(p.R, {
              alt: h,
              className: "icon-xs shrink-0 scale-[1.15] rounded-2xs bg-surface object-contain",
              logoUrl: u,
              logoDarkUrl: null,
              fallback: n,
            })),
            (o[3] = u),
            (o[4] = h),
            (o[5] = i))
          : (i = o[5]),
        i
      )
    }
    n.d(
      t,
      {},
      {
        B: function (e) {
          let t,
            n,
            i = (0, s.c)(7),
            { children: l, icon: o } = e
          if (null == o) {
            let e
            return (
              i[0] !== l ? ((e = (0, a.jsx)(a.Fragment, { children: l })), (i[0] = l), (i[1] = e)) : (e = i[1]),
              e
            )
          }
          return (
            i[2] !== l
              ? ((t = (0, a.jsx)("span", { className: "min-w-0 flex-1 truncate", children: l })),
                (i[2] = l),
                (i[3] = t))
              : (t = i[3]),
            i[4] !== o || i[5] !== t
              ? ((n = (0, a.jsxs)(h.F, { className: "max-w-full overflow-hidden", children: [o, t] })),
                (i[4] = o),
                (i[5] = t),
                (i[6] = n))
              : (n = i[6]),
            n
          )
        },
        w: function (e) {
          let t,
            n,
            m,
            h = (0, s.c)(17),
            { loadRemote: g, source: y } = e,
            w = void 0 === g || g
          if ("app:connector_openai_write_like_me" === y.key) {
            let e
            return (
              h[0] !== y.name
                ? ((e = (0, a.jsx)(f.I, { className: "shrink-0 text-text/60", asset: r.S, label: y.name })),
                  (h[0] = y.name),
                  (h[1] = e))
                : (e = h[1]),
              e
            )
          }
          if ("app:connector_openai_findata" === y.key) {
            let e
            return (
              h[2] !== y.name
                ? ((e = (0, a.jsx)(f.I, { className: "shrink-0 text-text/60", asset: o.h, label: y.name })),
                  (h[2] = y.name),
                  (h[3] = e))
                : (e = h[3]),
              e
            )
          }
          if (y.key === x.Eb) {
            let e
            return (
              h[4] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(f.I, {
                    className: (0, u.A)("shrink-0 rounded-2xs bg-surface object-contain", "text-text/60"),
                    asset: d.G,
                  })),
                  (h[4] = e))
                : (e = h[4]),
              e
            )
          }
          if (y.key === x.tc) {
            let e
            return (
              h[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(f.I, {
                    className: (0, u.A)("shrink-0 rounded-2xs bg-surface object-contain", "text-text/60"),
                    asset: l.y,
                  })),
                  (h[5] = e))
                : (e = h[5]),
              e
            )
          }
          if (null != y.nativeAppReference) {
            let e
            return (h[6] !== y ? ((e = (0, a.jsx)(v, { source: y })), (h[6] = y), (h[7] = e)) : (e = h[7]), e)
          }
          if ((0, x.az)(y.key)) {
            let e
            return (
              h[8] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(f.I, {
                    className: (0, u.A)("shrink-0 rounded-2xs bg-surface object-contain", "text-text/60"),
                    asset: c.K,
                  })),
                  (h[8] = e))
                : (e = h[8]),
              e
            )
          }
          let b = y.name
          return (
            h[9] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, u.A)("icon-xs shrink-0 rounded-2xs bg-surface object-contain", "text-text/60")), (h[9] = t))
              : (t = h[9]),
            h[10] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = (0, a.jsx)(f.I, { className: "shrink-0 text-text/60", "aria-hidden": !1, asset: i.W })),
                (h[10] = n))
              : (n = h[10]),
            h[11] !== w || h[12] !== y.connectorId || h[13] !== y.logoUrl || h[14] !== y.logoUrlDark || h[15] !== y.name
              ? ((m = (0, a.jsx)(p.R, {
                  alt: b,
                  className: t,
                  connectorId: y.connectorId,
                  knownAppId: y.name,
                  loadRemote: w,
                  logoUrl: y.logoUrl,
                  logoDarkUrl: y.logoUrlDark,
                  fallback: n,
                })),
                (h[11] = w),
                (h[12] = y.connectorId),
                (h[13] = y.logoUrl),
                (h[14] = y.logoUrlDark),
                (h[15] = y.name),
                (h[16] = m))
              : (m = h[16]),
            m
          )
        },
      },
    )
  },
  IgqH(e, t, n) {
    var a = n("ABep"),
      s = n("QosV"),
      i = n("on57"),
      l = n("LIss"),
      o = n("zd8w"),
      r = n("wD9O"),
      c = n("HBzQ"),
      d = n("JGoU"),
      u = n("nMdB"),
      m = n("V8uZ"),
      p = n("BI7J")
    function h(e) {
      return "closing" === e ? "collapsed" : e
    }
    function f(e) {
      return "opening" === e ? "expanded" : e
    }
    function g(e) {
      let t,
        n,
        l,
        o = (0, s.c)(9),
        { summary: r, summaryKey: c, summaryTransition: d, className: u } = e
      return (
        o[0] !== u
          ? ((t = (0, i.A)("text-text/60", "flex min-w-0 max-w-full items-center truncate", u)), (o[0] = u), (o[1] = t))
          : (t = o[1]),
        o[2] !== r || o[3] !== c || o[4] !== d
          ? ((n = null == c || "static" === d ? r : (0, a.jsx)(x, { summary: r, summaryKey: c, summaryTransition: d })),
            (o[2] = r),
            (o[3] = c),
            (o[4] = d),
            (o[5] = n))
          : (n = o[5]),
        o[6] !== t || o[7] !== n
          ? ((l = (0, a.jsx)("span", { className: t, children: n })), (o[6] = t), (o[7] = n), (o[8] = l))
          : (l = o[8]),
        l
      )
    }
    function x(e) {
      let t,
        n,
        i,
        l,
        r = (0, s.c)(11),
        { summary: c, summaryKey: d, summaryTransition: u } = e
      r[0] !== c || r[1] !== d ? ((t = () => ({ key: d, node: c })), (r[0] = c), (r[1] = d), (r[2] = t)) : (t = r[2])
      let [m, p] = (0, o.useState)(t),
        h = (0, o.useRef)(null),
        f = (0, o.useRef)(null)
      ;(r[3] !== c || r[4] !== d || r[5] !== u || r[6] !== m.key
        ? ((n = () => {
            let e = Date.now()
            if ((null == h.current && (h.current = e), d === m.key)) return
            let t = { key: d, node: c },
              n = () => {
                ;((f.current = null), (h.current = Date.now()), p(t))
              }
            if ("immediate" === u) {
              ;(null != f.current && (clearTimeout(f.current), (f.current = null)), n())
              return
            }
            let a = 1e3 - (e - h.current)
            return a <= 0
              ? void n()
              : ((f.current = setTimeout(n, a)),
                () => {
                  null != f.current && (clearTimeout(f.current), (f.current = null))
                })
          }),
          (i = [c, d, u, m.key]),
          (r[3] = c),
          (r[4] = d),
          (r[5] = u),
          (r[6] = m.key),
          (r[7] = n),
          (r[8] = i))
        : ((n = r[7]), (i = r[8])),
        (0, o.useEffect)(n, i))
      let g = "immediate" === u || m.key === d ? c : m.node
      return (
        r[9] !== g
          ? ((l = (0, a.jsx)("span", {
              className: "flex min-h-4 max-w-full min-w-0 items-center truncate",
              children: g,
            })),
            (r[9] = g),
            (r[10] = l))
          : (l = r[10]),
        l
      )
    }
    n.d(
      t,
      {},
      {
        Z: function (e) {
          let t,
            n,
            i,
            x,
            v,
            y,
            w = (0, s.c)(38),
            {
              summary: b,
              summaryKey: C,
              summaryTransition: j,
              shouldAnimateInitialCollapse: A,
              canExpand: I,
              defaultExpanded: k,
              dir: M,
              icon: S,
              onExpand: N,
              children: T,
            } = e,
            _ = void 0 === j ? "static" : j,
            R = void 0 === I || I,
            P = void 0 !== k && k,
            L = (0, r.dz)()
          w[0] !== R || w[1] !== T || w[2] !== P || w[3] !== A
            ? ((t = () => (R ? (P ? "expanded" : A && "function" != typeof T ? "closing" : "collapsed") : "collapsed")),
              (w[0] = R),
              (w[1] = T),
              (w[2] = P),
              (w[3] = A),
              (w[4] = t))
            : (t = w[4])
          let [D, F] = (0, o.useState)(t),
            E = "opening" === D || "expanded" === D,
            O = "expanded" === D
          w[5] !== D || w[6] !== E || w[7] !== N
            ? ((n = () => {
                E
                  ? F("closing")
                  : (N?.(), "closing" === D)
                    ? F("expanded")
                    : (F("opening"),
                      requestAnimationFrame(() => {
                        F(f)
                      }))
              }),
              (w[5] = D),
              (w[6] = E),
              (w[7] = N),
              (w[8] = n))
            : (n = w[8])
          let U = n,
            B = R ? "shrink group-hover/activity-header:text-default" : void 0
          w[9] !== b || w[10] !== C || w[11] !== _ || w[12] !== B
            ? ((i = (0, a.jsx)(g, { summary: b, summaryKey: C, summaryTransition: _, className: B })),
              (w[9] = b),
              (w[10] = C),
              (w[11] = _),
              (w[12] = B),
              (w[13] = i))
            : (i = w[13])
          let z = i
          w[14] !== R || w[15] !== T || w[16] !== D || w[17] !== O
            ? ((x =
                R && "collapsed" !== D
                  ? (0, a.jsx)(l.P.div, {
                      className: "-ms-2 ps-2",
                      initial: !1,
                      animate: O ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 },
                      transition: m.X7,
                      style: { overflow: "hidden", pointerEvents: O ? "auto" : "none" },
                      onAnimationComplete: () => {
                        F(h)
                      },
                      children: "function" == typeof T ? T() : T,
                    })
                  : null),
              (w[14] = R),
              (w[15] = T),
              (w[16] = D),
              (w[17] = O),
              (w[18] = x))
            : (x = w[18])
          let q = x
          if (void 0 !== S) {
            let e, t
            return (
              w[19] !== R || w[20] !== U || w[21] !== E
                ? ((e = R ? { expanded: E, onToggle: U } : void 0), (w[19] = R), (w[20] = U), (w[21] = E), (w[22] = e))
                : (e = w[22]),
              w[23] !== q || w[24] !== S || w[25] !== z || w[26] !== e
                ? ((t = (0, a.jsx)(p.o, { body: q, disclosure: e, icon: S, summary: z })),
                  (w[23] = q),
                  (w[24] = S),
                  (w[25] = z),
                  (w[26] = e),
                  (w[27] = t))
                : (t = w[27]),
              t
            )
          }
          return (
            w[28] !== R || w[29] !== M || w[30] !== U || w[31] !== E || w[32] !== z || w[33] !== L
              ? ((v = R
                  ? (0, a.jsx)(c.A, {
                      dir: M,
                      disclosure: {
                        expanded: E,
                        onToggle: (e) => {
                          ;((0, u.I)(e.currentTarget, L), U())
                        },
                      },
                      children: z,
                    })
                  : (0, a.jsx)(c.A, { dir: M, children: z })),
                (w[28] = R),
                (w[29] = M),
                (w[30] = U),
                (w[31] = E),
                (w[32] = z),
                (w[33] = L),
                (w[34] = v))
              : (v = w[34]),
            w[35] !== q || w[36] !== v
              ? ((y = (0, a.jsx)(d.n, { header: v, body: q })), (w[35] = q), (w[36] = v), (w[37] = y))
              : (y = w[37]),
            y
          )
        },
        q: g,
      },
    )
  },
  BkPs(e, t, n) {
    var a = n("zTeN"),
      s = n("UOvO"),
      i = n("tmkO"),
      l = n("tl5a"),
      o = n("vdpW"),
      r = n("Eklu"),
      c = n("OWtl"),
      d = n("rwp7"),
      u = n("NIKO")
    let m = (0, a.i1)(c.u, (e, { get: t }) => {
        let n = t(r.EX, ["conversation", e]) ?? t(r.si, ["conversation", e])
        return "persistent" === (null == n ? t(l.aG, e)?.settings.reasoning_effort : n.reasoningEffort)
      }),
      p = (0, o.ez)(
        (e) => "agentMessage" === e || "steeringUserMessage" === e || x(e),
        (e) =>
          e?.type === "agentMessage"
            ? {
                type: e.type,
                phase: e.phase,
                delivery: e.delivery,
                questions: e.questions,
                hasVisibleText:
                  (0, d.Dk)(e.text, "async" !== e.delivery, {
                    unwrapPaddedCdataEnvelope: "final_answer" === e.phase,
                  }).content.trim().length > 0,
              }
            : (e?.type === "dynamicToolCall" || e?.type === "mcpToolCall") && e.tool === s.GY
              ? (0, u.h)(e)
              : e?.type === "dynamicToolCall" && (0, i.Zj)(e.namespace, e.tool)
                ? { arguments: e.arguments, status: e.status, success: e.success }
                : e?.type === "mcpToolCall" && (0, i.Zj)(e.server, e.tool)
                  ? { arguments: e.arguments, status: e.status, error: e.error }
                  : e?.type === "steeringUserMessage"
                    ? e.status
                    : v(e),
      ),
      h = (0, o.ez)(x, v),
      f = (0, o.ez)(
        (e) => "imageGeneration" === e || "collabAgentToolCall" === e || "subAgentActivity" === e,
        (e) =>
          e?.type === "subAgentActivity"
            ? [e.agentThreadId, e.kind, e.agentPath]
            : e?.type === "imageGeneration" || e?.type === "collabAgentToolCall"
              ? e.status
              : null,
      ),
      g = (0, a.i1)(c.u, (e, { get: t, scope: n }) =>
        null == e || null == t(p, e) ? null : (t(o.hm, e), t(f, e), t(o.Os, e), (0, o.od)(n, e)),
      )
    function x(e) {
      return (
        "commandExecution" === e ||
        "dynamicToolCall" === e ||
        "mcpToolCall" === e ||
        "fileChange" === e ||
        "automaticApprovalReview" === e
      )
    }
    function v(e) {
      return null != e && "status" in e && x(e.type) ? e.status : null
    }
    n.d(t, {}, { Ni: p, ib: m, nl: h, yV: g })
  },
  OF8q(e, t, n) {
    var a = n("ABep"),
      s = n("GRDa")
    n.d(
      t,
      {},
      {
        m: function (e, t) {
          if (e.length <= 1) {
            let n = e[0]
            return null == n
              ? null
              : (0, a.jsx)("div", {
                  ref: n.canOwnLatestTurnFollowContent ? t : void 0,
                  className:
                    "flex flex-col gap-0 [contain-intrinsic-size:auto_240px] [content-visibility:auto] [&:has([data-mcp-app-expanded='true'])]:[content-visibility:visible]",
                  "data-local-conversation-final-assistant": "assistant-item" === n.key || void 0,
                  "data-virtualized-turn-content": "",
                  children: n.node,
                })
          }
          return (0, a.jsx)(s.B, {
            children: e.map((e) =>
              (0, a.jsx)(
                "div",
                {
                  ref: e.canOwnLatestTurnFollowContent ? t : void 0,
                  className: "flex flex-col",
                  "data-local-conversation-final-assistant": "assistant-item" === e.key || void 0,
                  children: e.node,
                },
                e.key,
              ),
            ),
          })
        },
      },
    )
  },
  CohC(e, t, n) {
    var a = n("ABep"),
      s = n("QosV"),
      i = n("slpy"),
      l = n("on57"),
      o = n("Wf1j"),
      r = n("oyxz"),
      c = n("JNtf"),
      d = n("bVeK"),
      u = n("Bbed"),
      m = n("UxN3")
    let p = (0, u._)(async () => (await n.e(959760).then(n.bind(n, "a2zf"))).HookStatsDialogContent, {
      fallback: (0, a.jsx)(h, {}),
      errorFallback: (0, a.jsx)(h, { failed: !0 }),
    })
    function h(e) {
      let t,
        n,
        i = (0, s.c)(3),
        { failed: l } = e,
        o = void 0 !== l && l
      return (
        i[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(c.L3, {
              children: (0, a.jsx)(r.A, {
                id: "assistantMessage.hookStats.dialogTitle",
                defaultMessage: "Hook stats",
                description: "Title of the dialog showing hook runs for one completed turn",
              }),
            })),
            (i[0] = t))
          : (t = i[0]),
        i[1] !== o
          ? ((n = (0, a.jsxs)(a.Fragment, {
              children: [
                t,
                (0, a.jsx)("p", {
                  className: "text-secondary",
                  children: o
                    ? (0, a.jsx)(r.A, {
                        id: "assistantMessage.hookStats.loadFailed",
                        defaultMessage: "Could not load hook stats",
                        description: "Shown when the hook history dialog could not load its display component",
                      })
                    : (0, a.jsx)(r.A, {
                        id: "assistantMessage.hookStats.loading",
                        defaultMessage: "Loading hook stats…",
                        description: "Shown while the hook history dialog loads its display component",
                      }),
                }),
              ],
            })),
            (i[1] = o),
            (i[2] = n))
          : (n = i[2]),
        n
      )
    }
    n.d(
      t,
      {},
      {
        Y: function (e) {
          let t,
            n,
            r,
            u,
            h,
            f,
            g,
            x,
            v,
            y = (0, s.c)(19),
            { stats: w } = e,
            b = (0, o.A)()
          y[0] !== b
            ? ((t = b.formatMessage({
                id: "assistantMessage.hookStats.dialogLabel",
                defaultMessage: "Hook stats",
                description: "Accessible label and tooltip for the button opening hook run statistics for this turn",
              })),
              (y[0] = b),
              (y[1] = t))
            : (t = y[1])
          let C = t
          ;(y[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = { "aria-describedby": void 0 }), (y[2] = n))
            : (n = y[2]),
            y[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((r = { 16: d.T7m, 20: d.Kgi }), (y[3] = r))
              : (r = y[3]))
          let j = (w.blockedCount > 0 || w.errorCount > 0) && "text-warning"
          return (
            y[4] !== j ? ((u = (0, l.A)("pointer-events-none", j)), (y[4] = j), (y[5] = u)) : (u = y[5]),
            y[6] !== u ? ((h = (0, a.jsx)(m.b5, { icon: r, className: u })), (y[6] = u), (y[7] = h)) : (h = y[7]),
            y[8] !== C || y[9] !== h
              ? ((f = (0, a.jsx)("button", {
                  className:
                    "flex cursor-interaction items-center justify-center rounded-full border border-transparent p-0.5 text-tertiary select-none no-drag hover:bg-secondary-ghost-hover hover:text-default focus:outline-none focus-visible:bg-secondary-ghost-hover focus-visible:text-default electron:rounded-md electron:p-1",
                  type: "button",
                  "aria-label": C,
                  children: h,
                })),
                (y[8] = C),
                (y[9] = h),
                (y[10] = f))
              : (f = y[10]),
            y[11] !== C || y[12] !== f
              ? ((g = (0, a.jsx)(i.m, { content: C, children: f })), (y[11] = C), (y[12] = f), (y[13] = g))
              : (g = y[13]),
            y[14] !== w ? ((x = (0, a.jsx)(p, { stats: w })), (y[14] = w), (y[15] = x)) : (x = y[15]),
            y[16] !== g || y[17] !== x
              ? ((v = (0, a.jsx)(c.lG, {
                  autoFocusCloseButton: !0,
                  contentProps: n,
                  size: "xwideTall",
                  triggerContent: g,
                  children: x,
                })),
                (y[16] = g),
                (y[17] = x),
                (y[18] = v))
              : (v = y[18]),
            v
          )
        },
        g: p,
      },
    )
  },
  fw8Z(e, t, n) {
    n.d(t, { S: () => b, w: () => A })
    var a = n("ABep"),
      s = n("QosV"),
      i = n("zTeN"),
      l = n("MYVk"),
      o = n("vdpW"),
      r = n("VsqT"),
      c = n("rwp7"),
      d = n("T9EM"),
      u = n("OWtl"),
      m = n("ehfG")
    function p(e) {
      let t,
        n,
        l,
        o = (0, s.c)(10),
        { children: r, questionKey: c } = e,
        p = (0, i.gh)(u.u),
        h = !(0, i._U)(m.Wc, c)
      return (
        o[0] !== c || o[1] !== p ? ((t = () => p.get(m.Wc, c)), (o[0] = c), (o[1] = p), (o[2] = t)) : (t = o[2]),
        o[3] !== c || o[4] !== h || o[5] !== t
          ? ((n = (0, a.jsx)(d.b, { questionKey: c, disabled: h, canReply: t })),
            (o[3] = c),
            (o[4] = h),
            (o[5] = t),
            (o[6] = n))
          : (n = o[6]),
        o[7] !== r || o[8] !== n
          ? ((l = (0, a.jsxs)("div", { children: [r, n] })), (o[7] = r), (o[8] = n), (o[9] = l))
          : (l = o[9]),
        l
      )
    }
    var h = n("OMIB"),
      f = n("cv0g"),
      g = n("HMTR"),
      x = n("C4Sc"),
      v = n("kaM7"),
      y = n("CQTg"),
      w = n("v1hC")
    function b(e) {
      var t
      let n,
        i,
        l,
        o,
        r,
        c,
        d,
        u,
        m,
        h = (0, s.c)(30)
      h[0] !== e
        ? (({
            historyEntityKey: n,
            isHeartbeatAutomationRequest: r,
            automationKind: c,
            isReadOnly: i,
            item: l,
            ...o
          } = e),
          (h[0] = e),
          (h[1] = n),
          (h[2] = i),
          (h[3] = l),
          (h[4] = o),
          (h[5] = r),
          (h[6] = c))
        : ((n = h[1]), (i = h[2]), (l = h[3]), (o = h[4]), (r = h[5]), (c = h[6]))
      let f = void 0 !== r && r,
        g = void 0 === c ? null : c
      h[7] !== l
        ? ((d =
            "assistant-message" === (t = l).type && null != t.requestUserInputAsync
              ? t.requestUserInputAsync.sourceItemId
              : "sourceItemId" in t
                ? t.sourceItemId
                : "searchItemId" in t
                  ? t.searchItemId
                  : "exec" === t.type
                    ? (t.commandExecutionItemId ?? t.callId)
                    : "patch" === t.type || "mcp-tool-call" === t.type || "dynamic-tool-call" === t.type
                      ? t.callId
                      : "generated-image" === t.type
                        ? t.id
                        : void 0),
          (h[7] = l),
          (h[8] = d))
        : (d = h[8])
      let x = d
      h[9] !== g || h[10] !== n || h[11] !== f || h[12] !== i || h[13] !== l || h[14] !== x || h[15] !== o
        ? ((u =
            null == n ||
            null == x ||
            (i && "assistant-message" === l.type && ("async" === l.delivery || null != l.requestUserInputAsync))
              ? (0, a.jsx)(v.F, { ...o, isReadOnly: i, item: l })
              : (0, a.jsx)(j, {
                  ...o,
                  historyEntityKey: n,
                  isHeartbeatAutomationRequest: f,
                  automationKind: g,
                  isReadOnly: i,
                  item: l,
                  itemId: x,
                })),
          (h[9] = g),
          (h[10] = n),
          (h[11] = f),
          (h[12] = i),
          (h[13] = l),
          (h[14] = x),
          (h[15] = o),
          (h[16] = u))
        : (u = h[16])
      let y = u
      if (
        "assistant-message" === l.type &&
        null != l.requestUserInputAsync &&
        !i &&
        null != n &&
        null != l.searchItemId
      ) {
        let e, t
        return (
          h[17] !== n || h[18] !== l.searchItemId || h[19] !== o.conversationId || h[20] !== o.hostId
            ? ((e = { hostId: o.hostId, threadId: o.conversationId, entityKey: n, itemId: l.searchItemId }),
              (h[17] = n),
              (h[18] = l.searchItemId),
              (h[19] = o.conversationId),
              (h[20] = o.hostId),
              (h[21] = e))
            : (e = h[21]),
          h[22] !== y || h[23] !== e
            ? ((t = (0, a.jsx)(p, { questionKey: e, children: y })), (h[22] = y), (h[23] = e), (h[24] = t))
            : (t = h[24]),
          t
        )
      }
      return (
        h[25] !== y || h[26] !== l.clientUserMessageId || h[27] !== l.type || h[28] !== o
          ? ((m =
              "user-message" === l.type
                ? (0, a.jsx)(C, {
                    conversationId: o.conversationId,
                    hostId: o.hostId,
                    clientUserMessageId: l.clientUserMessageId,
                    children: y,
                  })
                : y),
            (h[25] = y),
            (h[26] = l.clientUserMessageId),
            (h[27] = l.type),
            (h[28] = o),
            (h[29] = m))
          : (m = h[29]),
        m
      )
    }
    function C(e) {
      let t,
        n = (0, s.c)(4),
        { conversationId: a, hostId: o, clientUserMessageId: r, children: c } = e
      return (
        n[0] !== r || n[1] !== a || n[2] !== o
          ? ((t = { hostId: o, threadId: a, clientUserMessageId: r }), (n[0] = r), (n[1] = a), (n[2] = o), (n[3] = t))
          : (t = n[3]),
        (0, i._U)(l.Zg, t) ? null : c
      )
    }
    function j(e) {
      let t,
        n,
        l,
        d,
        u,
        m,
        p,
        y,
        b,
        C,
        j = (0, s.c)(94)
      ;(j[0] !== e
        ? (({ historyEntityKey: n, isHeartbeatAutomationRequest: l, automationKind: t, item: d, itemId: u, ...m } = e),
          (j[0] = e),
          (j[1] = t),
          (j[2] = n),
          (j[3] = l),
          (j[4] = d),
          (j[5] = u),
          (j[6] = m))
        : ((t = j[1]), (n = j[2]), (l = j[3]), (d = j[4]), (u = j[5]), (m = j[6])),
        j[7] !== n || j[8] !== u || j[9] !== m.conversationId || j[10] !== m.hostId
          ? ((p = { hostId: m.hostId, threadId: m.conversationId, entityKey: n, itemId: u }),
            (j[7] = n),
            (j[8] = u),
            (j[9] = m.conversationId),
            (j[10] = m.hostId),
            (j[11] = p))
          : (p = j[11]))
      let A = (0, i._U)(o.mz, p)
      j[12] !== n || j[13] !== d.type || j[14] !== u || j[15] !== m.conversationId || j[16] !== m.hostId
        ? ((y =
            "assistant-message" === d.type
              ? { hostId: m.hostId, threadId: m.conversationId, entityKey: n, itemId: u }
              : null),
          (j[12] = n),
          (j[13] = d.type),
          (j[14] = u),
          (j[15] = m.conversationId),
          (j[16] = m.hostId),
          (j[17] = y))
        : (y = j[17])
      let I = (0, i._U)(g.lV, y),
        k = d
      if ("assistant-message" === d.type && A?.type === "agentMessage") {
        let e,
          n,
          a,
          s,
          i = m.isTurnInProgress && !d.completed && !I,
          o =
            d.requestUserInputAsync?.questionIndex == null
              ? A.text
              : (A.questions?.[d.requestUserInputAsync.questionIndex]?.title ?? d.content)
        if (
          (j[18] !== t || j[19] !== l || j[20] !== i || j[21] !== A.phase || j[22] !== o
            ? ((e = (0, c.Dy)({
                content: o,
                phase: A.phase,
                isStreaming: i,
                automationKind: t,
                isHeartbeatAutomationRequest: l,
              })),
              (j[18] = t),
              (j[19] = l),
              (j[20] = i),
              (j[21] = A.phase),
              (j[22] = o),
              (j[23] = e))
            : (e = j[23]),
          j[24] !== e)
        ) {
          let { hidden: t, artifactScanContent: s, ...i } = e
          ;((a = t), (n = i), (j[24] = e), (j[25] = n), (j[26] = a))
        } else ((n = j[25]), (a = j[26]))
        if (a) return null
        let r = A.memoryCitation ?? void 0
        ;(j[27] !== n || j[28] !== d || j[29] !== A.phase || j[30] !== r
          ? ((s = { ...d, ...n, memoryCitation: r, phase: A.phase }),
            (j[27] = n),
            (j[28] = d),
            (j[29] = A.phase),
            (j[30] = r),
            (j[31] = s))
          : (s = j[31]),
          (k = s))
      } else if ("assistant-message" === d.type && null != d.externalDelivery && A?.type === "mcpToolCall") {
        let e
        ;(j[32] !== d || j[33] !== A ? ((e = (0, h.z)(A) ?? d), (j[32] = d), (j[33] = A), (j[34] = e)) : (e = j[34]),
          (k = e))
      } else if ("reasoning" === d.type && A?.type === "reasoning") {
        let e, t
        ;(j[35] !== A.summary ? ((e = (0, w.W)(A.summary)), (j[35] = A.summary), (j[36] = e)) : (e = j[36]),
          j[37] !== d || j[38] !== e
            ? ((t = { ...d, content: e }), (j[37] = d), (j[38] = e), (j[39] = t))
            : (t = j[39]),
          (k = t))
      } else if ("proposed-plan" === d.type && A?.type === "plan") {
        let e
        ;(j[40] !== d || j[41] !== A.text
          ? ((e = { ...d, content: A.text }), (j[40] = d), (j[41] = A.text), (j[42] = e))
          : (e = j[42]),
          (k = e))
      } else if ("exec" === d.type && A?.type === "commandExecution") {
        let e,
          t,
          n,
          a = "interrupted" === d.executionStatus && "inProgress" === A.status ? "interrupted" : A.status,
          s = A.durationMs ?? void 0,
          i = "inProgress" !== a
        j[43] !== d.parsedCmd || j[44] !== i
          ? ((e = { ...d.parsedCmd, isFinished: i }), (j[43] = d.parsedCmd), (j[44] = i), (j[45] = e))
          : (e = j[45])
        let l = A.processId ?? void 0
        ;(j[46] !== A.aggregatedOutput || j[47] !== A.exitCode
          ? ((t =
              null != A.aggregatedOutput || null != A.exitCode
                ? { aggregatedOutput: A.aggregatedOutput ?? "", exitCode: A.exitCode ?? void 0 }
                : null),
            (j[46] = A.aggregatedOutput),
            (j[47] = A.exitCode),
            (j[48] = t))
          : (t = j[48]),
          j[49] !== a || j[50] !== d || j[51] !== s || j[52] !== e || j[53] !== l || j[54] !== t
            ? ((n = { ...d, durationMs: s, executionStatus: a, parsedCmd: e, processId: l, output: t }),
              (j[49] = a),
              (j[50] = d),
              (j[51] = s),
              (j[52] = e),
              (j[53] = l),
              (j[54] = t),
              (j[55] = n))
            : (n = j[55]),
          (k = n))
      } else if ("patch" === d.type && A?.type === "fileChange") {
        let e,
          t,
          n = A.status
        j[56] !== A.changes ? ((e = (0, x.LU)(A.changes)), (j[56] = A.changes), (j[57] = e)) : (e = j[57])
        let a = "inProgress" === A.status ? null : "completed" === A.status
        ;(j[58] !== d || j[59] !== A.status || j[60] !== e || j[61] !== a
          ? ((t = { ...d, status: n, changes: e, success: a }),
            (j[58] = d),
            (j[59] = A.status),
            (j[60] = e),
            (j[61] = a),
            (j[62] = t))
          : (t = j[62]),
          (k = t))
      } else if ("generated-image" === d.type && A?.type === "imageGeneration") {
        let e,
          t,
          n = A.src,
          a = A.status
        ;(j[63] !== A ? ((e = (0, r.OO)(A)), (j[63] = A), (j[64] = e)) : (e = j[64]),
          j[65] !== d || j[66] !== A.src || j[67] !== A.status || j[68] !== e
            ? ((t = { ...d, src: n, status: a, failure: e }),
              (j[65] = d),
              (j[66] = A.src),
              (j[67] = A.status),
              (j[68] = e),
              (j[69] = t))
            : (t = j[69]),
          (k = t))
      } else if ("mcp-tool-call" === d.type && A?.type === "mcpToolCall") {
        let e, t
        j[70] !== A
          ? ((e = (0, f.B)(A.server, A.appContext) ? null : (0, h.z)(A)), (j[70] = A), (j[71] = e))
          : (e = j[71])
        let n = e
        ;(j[72] !== n ||
        j[73] !== d ||
        j[74] !== m.isTurnInProgress ||
        j[75] !== A.durationMs ||
        j[76] !== A.error ||
        j[77] !== A.result ||
        j[78] !== A.status
          ? ((t = n ?? {
              ...d,
              completed: "inProgress" !== A.status || !m.isTurnInProgress,
              durationMs: A.durationMs,
              result: (0, x.gv)(A.result, A.error, A.status),
            }),
            (j[72] = n),
            (j[73] = d),
            (j[74] = m.isTurnInProgress),
            (j[75] = A.durationMs),
            (j[76] = A.error),
            (j[77] = A.result),
            (j[78] = A.status),
            (j[79] = t))
          : (t = j[79]),
          (k = t))
      } else if ("dynamic-tool-call" === d.type && A?.type === "dynamicToolCall") {
        let e,
          t = "completed" === A.status || "failed" === A.status
        ;(j[80] !== d || j[81] !== A.contentItems || j[82] !== A.success || j[83] !== t
          ? ((e = { ...d, completed: t, contentItems: A.contentItems, success: A.success }),
            (j[80] = d),
            (j[81] = A.contentItems),
            (j[82] = A.success),
            (j[83] = t),
            (j[84] = e))
          : (e = j[84]),
          (k = e))
      }
      return (
        j[85] !== k.content ||
        j[86] !== k.type ||
        j[87] !== m.allowAssistantCopyWhileStreaming ||
        j[88] !== m.assistantCopyText
          ? ((b =
              "assistant-message" === k.type && (null != m.assistantCopyText || m.allowAssistantCopyWhileStreaming)
                ? k.content.trim()
                : m.assistantCopyText),
            (j[85] = k.content),
            (j[86] = k.type),
            (j[87] = m.allowAssistantCopyWhileStreaming),
            (j[88] = m.assistantCopyText),
            (j[89] = b))
          : (b = j[89]),
        j[90] !== k || j[91] !== m || j[92] !== b
          ? ((C = (0, a.jsx)(v.F, { ...m, assistantCopyText: b, item: k })),
            (j[90] = k),
            (j[91] = m),
            (j[92] = b),
            (j[93] = C))
          : (C = j[93]),
        C
      )
    }
    function A(e) {
      let t,
        n,
        i,
        l,
        o,
        r = (0, s.c)(14)
      r[0] !== e
        ? (({ historyEntityKey: t, hostId: n, item: i, ...l } = e),
          (r[0] = e),
          (r[1] = t),
          (r[2] = n),
          (r[3] = i),
          (r[4] = l))
        : ((t = r[1]), (n = r[2]), (i = r[3]), (l = r[4]))
      let c = "assistant-message" === i.type ? i.searchItemId : i.sourceItemId
      if (null == t || null == c) {
        let e
        return (
          r[5] !== i || r[6] !== l
            ? ((e = (0, a.jsx)(y.y, { ...l, item: i })), (r[5] = i), (r[6] = l), (r[7] = e))
            : (e = r[7]),
          e
        )
      }
      return (
        r[8] !== t || r[9] !== n || r[10] !== i || r[11] !== c || r[12] !== l
          ? ((o = (0, a.jsx)(I, { ...l, historyEntityKey: t, hostId: n, item: i, itemId: c })),
            (r[8] = t),
            (r[9] = n),
            (r[10] = i),
            (r[11] = c),
            (r[12] = l),
            (r[13] = o))
          : (o = r[13]),
        o
      )
    }
    function I(e) {
      let t,
        n,
        l,
        r,
        c,
        d,
        u,
        m,
        p = (0, s.c)(17)
      ;(p[0] !== e
        ? (({ historyEntityKey: t, hostId: n, item: l, itemId: r, ...c } = e),
          (p[0] = e),
          (p[1] = t),
          (p[2] = n),
          (p[3] = l),
          (p[4] = r),
          (p[5] = c))
        : ((t = p[1]), (n = p[2]), (l = p[3]), (r = p[4]), (c = p[5])),
        p[6] !== t || p[7] !== n || p[8] !== r || p[9] !== c.conversationId
          ? ((d = { hostId: n, threadId: c.conversationId, entityKey: t, itemId: r }),
            (p[6] = t),
            (p[7] = n),
            (p[8] = r),
            (p[9] = c.conversationId),
            (p[10] = d))
          : (d = p[10]))
      let h = (0, i._U)(o.mz, d)
      return (
        p[11] !== l || p[12] !== h
          ? ((u = "proposed-plan" === l.type && h?.type === "plan" ? { ...l, content: h.text } : l),
            (p[11] = l),
            (p[12] = h),
            (p[13] = u))
          : (u = p[13]),
        p[14] !== c || p[15] !== u
          ? ((m = (0, a.jsx)(y.y, { ...c, item: u })), (p[14] = c), (p[15] = u), (p[16] = m))
          : (m = p[16]),
        m
      )
    }
  },
  o7K3(e, t, n) {
    n.d(t, { m: () => ni, F: () => t7 })
    var a = n("ABep"),
      s = n("QosV"),
      i = n("slpy"),
      l = n("aRdq"),
      o = n("ATF3"),
      r = n("CL6A"),
      c = n("on57"),
      d = n("HVBu"),
      u = n.n(d),
      m = n("zTeN"),
      p = n("cC4N"),
      h = n("DBCl"),
      f = n("tHDU"),
      g = n("IgxH"),
      x = n("jXtE"),
      v = n("zd8w"),
      y = n("Wf1j"),
      w = n("oyxz"),
      b = n("ChYf"),
      C = n("AqHb"),
      j = n("sqTN"),
      A = n("UDV9"),
      I = n("uoSX"),
      k = n("B3ke"),
      M = n("uuN8"),
      S = n("aqd9"),
      N = n("Bbed"),
      T = n("RNul"),
      _ = n("UxN3"),
      R = n("Qgfj")
    let P = (0, R.YK)({
      attachments: {
        id: "aeon.tibro.message.attachments",
        defaultMessage: "{count, plural, one {# attachment} other {# attachments}}",
        description:
          "Number of files delivered with a dot reply. The files are available in the messaging channel used for the reply.",
      },
    })
    function L(e, t, n) {
      return [e, ...(t > 0 ? [n.formatMessage(P.attachments, { count: t })] : [])]
        .filter((e) => e.length > 0)
        .join("\n")
    }
    function D(e, t) {
      switch (e.actionName) {
        case "send_message":
          return { text: e.text, details: [] }
        case "send_voice_memo":
          return {
            text: e.text,
            details: [
              t.formatMessage({
                id: "aeon.imessage.action.voiceMemo",
                defaultMessage: "Voice memo",
                description: "Identifies the transcript of an iMessage voice memo sent by the dot",
              }),
            ],
          }
        case "send_message_with_effect":
          return { text: e.text, details: [F(e.effect, t)] }
        case "reply_to_message":
          return { text: e.text, details: null == e.effect ? [] : [F(e.effect, t)] }
      }
    }
    function F(e, t) {
      return t.formatMessage(
        {
          id: "aeon.imessage.action.effect",
          defaultMessage:
            "Effect: {effect, select, slam {Slam} loud {Loud} gentle {Gentle} invisible {Invisible ink} confetti {Confetti} fireworks {Fireworks} balloons {Balloons} heart {Heart} lasers {Lasers} celebration {Celebration} sparkles {Sparkles} spotlight {Spotlight} echo {Echo} other {Effect}}",
          description: "iMessage effect used by a dot",
        },
        { effect: e },
      )
    }
    function E(e) {
      let t,
        n,
        i,
        l,
        o,
        r = (0, s.c)(12),
        { action: c, attachmentCount: d } = e,
        u = (0, y.A)()
      if (r[0] !== c || r[1] !== u) {
        let { text: e, details: s } = D(c, u)
        ;((t = "min-w-0 text-size-chat"),
          (n = (0, a.jsx)("div", { dir: "auto", className: "break-words whitespace-pre-wrap", children: e })),
          (i = 0 === s.length ? null : (0, a.jsx)("div", { className: "mt-2 text-secondary", children: s.map(O) })),
          (r[0] = c),
          (r[1] = u),
          (r[2] = t),
          (r[3] = n),
          (r[4] = i))
      } else ((t = r[2]), (n = r[3]), (i = r[4]))
      return (
        r[5] !== d
          ? ((l =
              d > 0
                ? (0, a.jsx)("div", {
                    className: "mt-2 text-secondary",
                    children: (0, a.jsx)(w.A, { ...P.attachments, values: { count: d } }),
                  })
                : null),
            (r[5] = d),
            (r[6] = l))
          : (l = r[6]),
        r[7] !== t || r[8] !== n || r[9] !== i || r[10] !== l
          ? ((o = (0, a.jsxs)("div", { className: t, children: [n, i, l] })),
            (r[7] = t),
            (r[8] = n),
            (r[9] = i),
            (r[10] = l),
            (r[11] = o))
          : (o = r[11]),
        o
      )
    }
    function O(e) {
      return (0, a.jsx)("div", { dir: "auto", className: "break-words whitespace-pre-wrap", children: e }, e)
    }
    var U = n("vKRc"),
      B = n("POXM"),
      z = n("c3f5"),
      q = n("tl5a"),
      W = n("KJ1J"),
      H = n("p8Cc"),
      G = n("h6Jp"),
      V = n("jmsX"),
      $ = n("Wv1R"),
      K = n("zUz7"),
      Z = n("jJhm")
    function Q(e) {
      let t,
        i,
        l,
        o,
        r,
        c,
        d,
        u,
        p,
        f,
        g,
        x,
        v,
        y,
        w,
        b,
        C,
        j,
        A,
        I = (0, s.c)(46),
        { hostId: k, threadId: M, resource: S, isTerminalInline: N } = e,
        T = (0, m.Ul)($.sF),
        _ = (0, m._U)(q.B0, k)
      if (I[0] !== _ || I[1] !== T || I[2] !== k || I[3] !== N || I[4] !== S || I[5] !== M) {
        p = Symbol.for("react.early_return_sentinel")
        e: {
          let { data: e } = Z.E.safeParse(S.value),
            a = S.origin.producer
          if (
            !T ||
            null == e ||
            ((0, W.fI)(a.server) &&
              (!(0, h.JFB)(_, "mcpToolCallAppContext") || null == a.connectorId || null == a.linkId))
          ) {
            p = null
            break e
          }
          let s = { hostId: k, threadId: M, citation: { ...S, value: e } },
            m = (0, W.fI)(a.server) ? a.connectorId : void 0
          ;((t = V.K),
            (r = m),
            (c = N),
            I[23] !== k || I[24] !== S.uri || I[25] !== M
              ? ((i = JSON.stringify(["codex", k, M, S.uri])), (I[23] = k), (I[24] = S.uri), (I[25] = M), (I[26] = i))
              : (i = I[26]),
            (f = e.title),
            (g = e.target.arguments),
            (x = (0, W.fI)(a.server) && "open_chart_source" === e.target.name ? "file" : void 0),
            (v =
              (0, W.fI)(a.server) && "open_chart_source" === e.target.name && e.target.arguments?.source != null
                ? { chart_source: e.target.arguments.source, connector_id: a.connectorId, link_id: a.linkId }
                : void 0),
            (y = (0, W.fI)(a.server) && "open_chart_source" === e.target.name ? (a.connectorId ?? void 0) : void 0),
            (w = (0, G.U)(m, e.hoverCard, e.target.name)),
            (b = e.url),
            (C = e.icons),
            (l = (0, K.p)(e)),
            (o = (0, H.q)(e.target.arguments ?? {})),
            (d = (e) =>
              (async function (e, t) {
                let { loadMcpAppToolCitation: a } = await n.e(317998).then(n.bind(n, "ttJj"))
                return (e.signal.throwIfAborted(), a(e, t))
              })(e, s)),
            (u = (e) =>
              (async function (e, t) {
                let { getMcpAppToolCitationMenu: a } = await n.e(317998).then(n.bind(n, "ttJj"))
                return a(e, t)
              })(e, s)))
        }
        ;((I[0] = _),
          (I[1] = T),
          (I[2] = k),
          (I[3] = N),
          (I[4] = S),
          (I[5] = M),
          (I[6] = t),
          (I[7] = i),
          (I[8] = l),
          (I[9] = o),
          (I[10] = r),
          (I[11] = c),
          (I[12] = d),
          (I[13] = u),
          (I[14] = p),
          (I[15] = f),
          (I[16] = g),
          (I[17] = x),
          (I[18] = v),
          (I[19] = y),
          (I[20] = w),
          (I[21] = b),
          (I[22] = C))
      } else
        ((t = I[6]),
          (i = I[7]),
          (l = I[8]),
          (o = I[9]),
          (r = I[10]),
          (c = I[11]),
          (d = I[12]),
          (u = I[13]),
          (p = I[14]),
          (f = I[15]),
          (g = I[16]),
          (x = I[17]),
          (v = I[18]),
          (y = I[19]),
          (w = I[20]),
          (b = I[21]),
          (C = I[22]))
      return p !== Symbol.for("react.early_return_sentinel")
        ? p
        : (I[27] !== i ||
          I[28] !== l ||
          I[29] !== o ||
          I[30] !== d ||
          I[31] !== u ||
          I[32] !== f ||
          I[33] !== g ||
          I[34] !== x ||
          I[35] !== v ||
          I[36] !== y ||
          I[37] !== w ||
          I[38] !== b ||
          I[39] !== C
            ? ((j = {
                id: i,
                title: f,
                targetArguments: g,
                presentation: x,
                followUpContext: v,
                sourceAppId: y,
                ...w,
                url: b,
                icons: C,
                icon: l,
                categoryIcon: o,
                load: d,
                getContextMenuItems: u,
              }),
              (I[27] = i),
              (I[28] = l),
              (I[29] = o),
              (I[30] = d),
              (I[31] = u),
              (I[32] = f),
              (I[33] = g),
              (I[34] = x),
              (I[35] = v),
              (I[36] = y),
              (I[37] = w),
              (I[38] = b),
              (I[39] = C),
              (I[40] = j))
            : (j = I[40]),
          I[41] !== t || I[42] !== r || I[43] !== c || I[44] !== j
            ? ((A = (0, a.jsx)(t, { verifiedConnectorId: r, isTerminalInline: c, source: j })),
              (I[41] = t),
              (I[42] = r),
              (I[43] = c),
              (I[44] = j),
              (I[45] = A))
            : (A = I[45]),
          A)
    }
    var J = n("SZCv"),
      Y = n.n(J),
      X = n("rm5A"),
      ee = n("Oj9r"),
      et = n("d1Xe")
    let en = (0, m.i1)(
        ee.GD,
        (e, { get: t }) => {
          let n = new Map()
          for (let a of t(X.B, e).values())
            for (let e of (0, et.X)(a)) {
              let t = n.get(e.uri)
              n.set(e.uri, void 0 === t || Y()(t, e) ? e : null)
            }
          return n
        },
        { owner: (e) => e.threadId },
      ),
      ea = (0, m.i1)(
        ee.GD,
        (e, { get: t }) => {
          if (null == e) return null
          let { hostId: n, threadId: a, uri: s } = e
          return t(en, { hostId: n, threadId: a }).get(s) ?? null
        },
        { owner: (e) => e?.threadId, isEqual: Y() },
      )
    function es(e) {
      let t,
        n,
        i,
        l,
        o = (0, s.c)(13),
        { attributes: r, conversationId: c, hostId: d, isTerminalInline: u } = e
      o[0] !== c ? ((t = null == c ? null : (0, h.JXB)(c)), (o[0] = c), (o[1] = t)) : (t = o[1])
      let p = t
      o[2] !== r ? ((n = (0, z.B)(r, "uri")), (o[2] = r), (o[3] = n)) : (n = o[3])
      let f = n
      o[4] !== d || o[5] !== p || o[6] !== f
        ? ((i = null == d || null == p || null == f ? null : { hostId: d, threadId: p, uri: f }),
          (o[4] = d),
          (o[5] = p),
          (o[6] = f),
          (o[7] = i))
        : (i = o[7])
      let g = (0, m._U)(ea, i)
      return null == d || null == p || g?.mimeType !== Z.Y
        ? null
        : (o[8] !== d || o[9] !== u || o[10] !== g || o[11] !== p
            ? ((l = (0, a.jsx)(Q, { hostId: d, threadId: p, resource: g, isTerminalInline: u })),
              (o[8] = d),
              (o[9] = u),
              (o[10] = g),
              (o[11] = p),
              (o[12] = l))
            : (l = o[12]),
          l)
    }
    var ei = n("JNtf"),
      el = n("mUDD"),
      eo = n("bVeK"),
      er = n("hoDf"),
      ec = n("nsuH")
    function ed(e) {
      let t,
        n,
        l,
        o,
        r,
        d,
        u,
        m,
        p = (0, s.c)(19),
        { stats: h } = e,
        f = (0, y.A)()
      p[0] !== f || p[1] !== h.rejectedCount
        ? ((t =
            h.rejectedCount > 0
              ? f.formatMessage(
                  {
                    id: "assistantMessage.autoReviewStats.rejectedLabel",
                    defaultMessage: "Auto-review stats ({count, number} rejected)",
                    description:
                      "Accessible label and tooltip for the auto-review stats button when some commands were rejected",
                  },
                  { count: h.rejectedCount },
                )
              : f.formatMessage({
                  id: "assistantMessage.autoReviewStats.label",
                  defaultMessage: "Auto-review stats",
                  description: "Accessible label and tooltip title for auto-review stats",
                })),
          (p[0] = f),
          (p[1] = h.rejectedCount),
          (p[2] = t))
        : (t = p[2])
      let g = t
      p[3] === Symbol.for("react.memo_cache_sentinel") ? ((n = { "aria-describedby": void 0 }), (p[3] = n)) : (n = p[3])
      let x = h.rejectedCount > 0 && "text-warning"
      return (
        p[4] !== x ? ((l = (0, c.A)("icon-xs pointer-events-none", x)), (p[4] = x), (p[5] = l)) : (l = p[5]),
        p[6] !== l ? ((o = (0, a.jsx)(er.A, { className: l })), (p[6] = l), (p[7] = o)) : (o = p[7]),
        p[8] !== g || p[9] !== o
          ? ((r = (0, a.jsx)("button", {
              className:
                "electron:[&>svg]:icon-sm flex cursor-interaction items-center justify-center rounded-full border border-transparent p-0.5 text-tertiary select-none no-drag hover:bg-secondary-ghost-hover hover:text-default focus:outline-none focus-visible:bg-secondary-ghost-hover focus-visible:text-default electron:rounded-md electron:p-1",
              type: "button",
              "aria-label": g,
              children: o,
            })),
            (p[8] = g),
            (p[9] = o),
            (p[10] = r))
          : (r = p[10]),
        p[11] !== g || p[12] !== r
          ? ((d = (0, a.jsx)(i.m, { content: g, children: r })), (p[11] = g), (p[12] = r), (p[13] = d))
          : (d = p[13]),
        p[14] !== h ? ((u = (0, a.jsx)(eu, { stats: h })), (p[14] = h), (p[15] = u)) : (u = p[15]),
        p[16] !== d || p[17] !== u
          ? ((m = (0, a.jsx)(ei.lG, {
              autoFocusCloseButton: !0,
              contentProps: n,
              size: "xwideTall",
              triggerContent: d,
              children: u,
            })),
            (p[16] = d),
            (p[17] = u),
            (p[18] = m))
          : (m = p[18]),
        m
      )
    }
    function eu(e) {
      let t,
        n,
        i,
        l,
        o,
        r,
        c,
        d,
        u = (0, s.c)(15),
        { stats: m } = e
      return (
        u[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(el.OO, {
              children: (0, a.jsx)(el.c7, {
                title: (0, a.jsx)(ei.L3, {
                  className: "contents",
                  children: (0, a.jsx)(w.A, {
                    id: "assistantMessage.autoReviewStats.title",
                    defaultMessage: "Auto-review stats",
                    description: "Title for the auto-review stats dialog",
                  }),
                }),
              }),
            })),
            (u[0] = t))
          : (t = u[0]),
        u[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)("span", {
              className: "text-secondary",
              children: (0, a.jsx)(w.A, {
                id: "assistantMessage.autoReviewStats.acceptedCount",
                defaultMessage: "Accepted",
                description: "Label for accepted auto-review command count",
              }),
            })),
            (u[1] = n))
          : (n = u[1]),
        u[2] !== m.acceptedCount
          ? ((i = (0, a.jsx)("span", {
              className: "text-end",
              children: (0, a.jsx)(R.Gr, { value: m.acceptedCount }),
            })),
            (u[2] = m.acceptedCount),
            (u[3] = i))
          : (i = u[3]),
        u[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, a.jsx)("span", {
              className: "text-secondary",
              children: (0, a.jsx)(w.A, {
                id: "assistantMessage.autoReviewStats.rejectedCount",
                defaultMessage: "Rejected",
                description: "Label for rejected auto-review command count",
              }),
            })),
            (u[4] = l))
          : (l = u[4]),
        u[5] !== m.rejectedCount
          ? ((o = (0, a.jsx)("span", {
              className: "text-end",
              children: (0, a.jsx)(R.Gr, { value: m.rejectedCount }),
            })),
            (u[5] = m.rejectedCount),
            (u[6] = o))
          : (o = u[6]),
        u[7] !== i || u[8] !== o
          ? ((r = (0, a.jsx)(el.OO, {
              children: (0, a.jsxs)("div", {
                className: "grid grid-cols-[auto_auto] gap-x-3 gap-y-1 text-sm",
                children: [n, i, l, o],
              }),
            })),
            (u[7] = i),
            (u[8] = o),
            (u[9] = r))
          : (r = u[9]),
        u[10] !== m.commands
          ? ((c = (0, a.jsx)(el.OO, {
              className: "min-h-0 flex-1",
              children: (0, a.jsx)(em, { commands: m.commands }),
            })),
            (u[10] = m.commands),
            (u[11] = c))
          : (c = u[11]),
        u[12] !== r || u[13] !== c
          ? ((d = (0, a.jsxs)(el.R4, { className: "select-none", size: "full", children: [t, r, c] })),
            (u[12] = r),
            (u[13] = c),
            (u[14] = d))
          : (d = u[14]),
        d
      )
    }
    function em(e) {
      let t,
        n,
        i,
        l,
        o,
        r = (0, s.c)(11),
        { commands: c } = e,
        d = (0, v.useId)()
      return (
        r[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(w.A, {
              id: "assistantMessage.autoReviewStats.commandHistory",
              defaultMessage: "Command history",
              description: "Heading for auto-review command history list",
            })),
            (r[0] = t))
          : (t = r[0]),
        r[1] !== d
          ? ((n = (0, a.jsx)("div", { id: d, className: "text-secondary", children: t })), (r[1] = d), (r[2] = n))
          : (n = r[2]),
        r[3] !== c ? ((i = c.map(ep)), (r[3] = c), (r[4] = i)) : (i = r[4]),
        r[5] !== d || r[6] !== i
          ? ((l = (0, a.jsx)("ul", {
              className: "flex min-h-0 min-w-0 flex-col gap-3 overflow-y-auto overscroll-contain",
              "aria-labelledby": d,
              tabIndex: 0,
              children: i,
            })),
            (r[5] = d),
            (r[6] = i),
            (r[7] = l))
          : (l = r[7]),
        r[8] !== n || r[9] !== l
          ? ((o = (0, a.jsxs)("div", {
              className: "flex min-h-0 min-w-0 flex-1 flex-col gap-2 text-sm",
              children: [n, l],
            })),
            (r[8] = n),
            (r[9] = l),
            (r[10] = o))
          : (o = r[10]),
        o
      )
    }
    function ep(e, t) {
      return (0, a.jsx)(eh, { command: e }, `${e.command}:${String(e.durationMs)}:${String(t)}`)
    }
    function eh(e) {
      let t,
        n,
        i,
        l,
        o,
        r,
        d,
        u,
        m,
        p,
        h,
        f,
        g,
        x,
        y,
        b,
        C,
        j,
        A = (0, s.c)(52),
        { command: I } = e,
        [k, M] = (0, v.useState)(!1)
      A[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (e, t) => {
            M(t.scrollWidth > t.clientWidth)
          }),
          (A[0] = t))
        : (t = A[0])
      let S = (0, ec.wY)(t),
        N = "rejected" === I.decision
      A[1] !== I.command || A[2] !== k
        ? ((n = k || I.command.trim().includes("\n")), (A[1] = I.command), (A[2] = k), (A[3] = n))
        : (n = A[3])
      let T = n,
        _ = T || N,
        R = _ ? "details" : "div",
        P = _ ? "summary" : "div",
        L = N && "text-warning"
      A[4] !== L ? ((i = (0, c.A)("min-w-0", L)), (A[4] = L), (A[5] = i)) : (i = A[5])
      let D = _ && "cursor-interaction"
      A[6] !== D
        ? ((l = (0, c.A)("grid min-w-0 list-none grid-cols-[auto_minmax(0,1fr)] gap-3 marker:hidden", D)),
          (A[6] = D),
          (A[7] = l))
        : (l = A[7])
      let F = !N && "text-secondary"
      A[8] !== F ? ((o = (0, c.A)("flex items-center gap-1.5", F)), (A[8] = F), (A[9] = o)) : (o = A[9])
      let E = !_ && "invisible"
      ;(A[10] !== E
        ? ((r = (0, c.A)("-rotate-90 group-open/command:rotate-0", E)), (A[10] = E), (A[11] = r))
        : (r = A[11]),
        A[12] !== r ? ((d = (0, a.jsx)(eo.Awc, { className: r })), (A[12] = r), (A[13] = d)) : (d = A[13]),
        A[14] !== N
          ? ((u = N
              ? (0, a.jsx)(w.A, {
                  id: "assistantMessage.autoReviewStats.rejectedDecision",
                  defaultMessage: "Rejected",
                  description: "Decision label for a rejected auto-review command",
                })
              : (0, a.jsx)(w.A, {
                  id: "assistantMessage.autoReviewStats.acceptedDecision",
                  defaultMessage: "Accepted",
                  description: "Decision label for an accepted auto-review command",
                })),
            (A[14] = N),
            (A[15] = u))
          : (u = A[15]),
        A[16] !== d || A[17] !== u || A[18] !== o
          ? ((m = (0, a.jsxs)("span", { className: o, children: [d, u] })),
            (A[16] = d),
            (A[17] = u),
            (A[18] = o),
            (A[19] = m))
          : (m = A[19]))
      let O = T && "group-open/command:invisible",
        U = !_ && "select-text"
      return (
        A[20] !== O || A[21] !== U
          ? ((p = (0, c.A)("col-start-1 row-start-1 min-w-0 truncate font-mono", O, U)),
            (A[20] = O),
            (A[21] = U),
            (A[22] = p))
          : (p = A[22]),
        A[23] !== I.command
          ? ((h = I.command.trimStart().split("\n", 1)), (A[23] = I.command), (A[24] = h))
          : (h = A[24]),
        A[25] !== S || A[26] !== p || A[27] !== h[0]
          ? ((f = (0, a.jsx)("span", { ref: S, className: p, children: h[0] })),
            (A[25] = S),
            (A[26] = p),
            (A[27] = h[0]),
            (A[28] = f))
          : (f = A[28]),
        A[29] !== T
          ? ((g = T
              ? (0, a.jsx)("span", {
                  className: "col-start-1 row-start-1 hidden group-open/command:inline",
                  children: (0, a.jsx)(w.A, {
                    id: "assistantMessage.autoReviewStats.expandedCommand",
                    defaultMessage: "Command",
                    description: "Disclosure label while the full auto-reviewed command is expanded below",
                  }),
                })
              : null),
            (A[29] = T),
            (A[30] = g))
          : (g = A[30]),
        A[31] !== f || A[32] !== g
          ? ((x = (0, a.jsxs)("span", { className: "grid min-w-0", children: [f, g] })),
            (A[31] = f),
            (A[32] = g),
            (A[33] = x))
          : (x = A[33]),
        A[34] !== P || A[35] !== m || A[36] !== x || A[37] !== l
          ? ((y = (0, a.jsxs)(P, { className: l, children: [m, x] })),
            (A[34] = P),
            (A[35] = m),
            (A[36] = x),
            (A[37] = l),
            (A[38] = y))
          : (y = A[38]),
        A[39] !== I.command || A[40] !== I.rationale || A[41] !== _ || A[42] !== T || A[43] !== N
          ? ((b = _
              ? (0, a.jsxs)("div", {
                  className: "mt-2 flex min-w-0 flex-col gap-2",
                  children: [
                    N
                      ? (0, a.jsx)("p", {
                          className: "break-words whitespace-pre-wrap select-text",
                          children:
                            I.rationale?.trim() ||
                            (0, a.jsx)(w.A, {
                              id: "assistantMessage.autoReviewStats.noRationale",
                              defaultMessage: "Auto-review did not include a rationale",
                              description: "Fallback explanation for a rejected auto-review command with no rationale",
                            }),
                        })
                      : null,
                    T
                      ? (0, a.jsx)("pre", {
                          className: "min-w-0 font-mono break-words whitespace-pre-wrap select-text",
                          children: I.command,
                        })
                      : null,
                  ],
                })
              : null),
            (A[39] = I.command),
            (A[40] = I.rationale),
            (A[41] = _),
            (A[42] = T),
            (A[43] = N),
            (A[44] = b))
          : (b = A[44]),
        A[45] !== R || A[46] !== y || A[47] !== b
          ? ((C = (0, a.jsxs)(R, { className: "group/command min-w-0", children: [y, b] })),
            (A[45] = R),
            (A[46] = y),
            (A[47] = b),
            (A[48] = C))
          : (C = A[48]),
        A[49] !== C || A[50] !== i
          ? ((j = (0, a.jsx)("li", { className: i, children: C })), (A[49] = C), (A[50] = i), (A[51] = j))
          : (j = A[51]),
        j
      )
    }
    var ef = n("BkPs"),
      eg = n("QCUA"),
      ex = n("FOks"),
      ev = n("bZSE"),
      ey = n("CZAr"),
      ew = n("MJjm"),
      eb = n("waM8"),
      eC = n("N3ow"),
      ej = n("O0M0"),
      eA = n("EhUl"),
      eI = n("DM5G"),
      ek = n("Ghh3"),
      eM = n("OWtl"),
      eS = n("qixt")
    function eN(e) {
      let t,
        n,
        i,
        l,
        o,
        r,
        c = (0, s.c)(18),
        { hostId: d, conversationId: u, messageId: p, turnId: h, getText: f } = e,
        g = (0, m.gh)(eM.u),
        x = (0, v.use)(ej.c)
      c[0] !== u || c[1] !== d || c[2] !== h
        ? ((t = JSON.stringify(["native-read-aloud", d, u, h])), (c[0] = u), (c[1] = d), (c[2] = h), (c[3] = t))
        : (t = c[3])
      let y = t
      return (c[4] !== y || c[5] !== g
        ? ((n = () => () => (0, eI.dR)(g, y)), (i = [g, y]), (c[4] = y), (c[5] = g), (c[6] = n), (c[7] = i))
        : ((n = c[6]), (i = c[7])),
      (0, v.useEffect)(n, i),
      (x?.authMethod !== "chatgpt" && x?.authMethod !== "chatgptAuthTokens") || x?.hasChatGptToken !== !0)
        ? null
        : (c[8] !== u || c[9] !== p || c[10] !== g
            ? ((l = () => ({
                conversationId: u,
                messageId: p,
                audioSource: "CHATGPT_VOICE_READ_ALOUD_AUDIO_SOURCE_SYNTHESIZED",
                surface: g.get(eS.e2)
                  ? "CHATGPT_USER_FACING_ERROR_SURFACE_WORK"
                  : "CHATGPT_USER_FACING_ERROR_SURFACE_CODEX",
              })),
              (c[8] = u),
              (c[9] = p),
              (c[10] = g),
              (c[11] = l))
            : (l = c[11]),
          c[12] !== f
            ? ((o = (e) =>
                (async function* (e, t) {
                  let n = e.replace(/\s+/gu, " ").trim(),
                    a = /.{1,4096}/suy,
                    s = a.exec(n)
                  for (; null != s;) {
                    let e = s[0]
                    if (a.lastIndex < n.length) {
                      let t = Array.from(e.matchAll(/[.!?。！？](?: |$)/gu)).at(-1),
                        n = e.lastIndexOf(" "),
                        i = e.length
                      ;(null != t ? (i = t.index + t[0].length) : n > 0 && (i = n + 1),
                        (e = e.slice(0, i)),
                        (a.lastIndex = s.index + i))
                    }
                    ;(yield ek.Request.postResponse("/read-aloud/synthesize", { requestBody: { text: e }, signal: t }),
                      (s = a.exec(n)))
                  }
                })(f(), e)),
              (c[12] = f),
              (c[13] = o))
            : (o = c[13]),
          c[14] !== y || c[15] !== l || c[16] !== o
            ? ((r = (0, a.jsx)(eA.V, { playbackId: y, getReadAloudContext: l, synthesizeAudio: o })),
              (c[14] = y),
              (c[15] = l),
              (c[16] = o),
              (c[17] = r))
            : (r = c[17]),
          r)
    }
    var eT = n("TALI"),
      e_ = n("cWXs"),
      eR = n("oKu4"),
      eP = n("Ij0P"),
      eL = n("Gr8e"),
      eD = n("uOFa"),
      eF = n("HOLv"),
      eE = n("VL1D"),
      eO = n("CxEf"),
      eU = n("aAWW"),
      eB = n("g3QY"),
      ez = n("Yakm"),
      eq = n("ZU27"),
      eW = n("TwSq"),
      eH = n("H5w6"),
      eG = n("nf3G"),
      eV = n("V3rO"),
      e$ = n("kfGJ"),
      eK = n("bnxy"),
      eZ = n("lCRE"),
      eQ = n("QpPI"),
      eJ = n("CzOU"),
      eY = n("bemt"),
      eX = n("lLEA"),
      e1 = n("LwKg"),
      e0 = n("T8jz")
    let e2 = /^(?:<sub>\s*)*\[(p\d)\](?:\s*<\/sub>)*\s*(.*)$/i
    function e3(e) {
      let t,
        n,
        i,
        l,
        o,
        r,
        c,
        d = (0, s.c)(18),
        { comments: u } = e,
        [m, p] = (0, v.useState)(!1)
      d[0] !== u || d[1] !== m ? ((t = m ? u : u.slice(0, 3)), (d[0] = u), (d[1] = m), (d[2] = t)) : (t = d[2])
      let h = t,
        f = u.length - h.length
      return (
        d[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)("span", {
              className:
                "flex size-8 shrink-0 items-center justify-center rounded-lg bg-surface-secondary/92 text-secondary",
              children: (0, a.jsx)(eF.I, { "aria-hidden": !1, asset: eL.G }),
            })),
            (d[3] = n))
          : (n = d[3]),
        d[4] !== u.length
          ? ((i = (0, a.jsx)(eE.Ni, {
              className: "px-4 py-2.5",
              icon: n,
              title: (0, a.jsx)(w.A, { ...te.count, values: { count: u.length } }),
            })),
            (d[4] = u.length),
            (d[5] = i))
          : (i = d[5]),
        d[6] !== h ? ((l = h.map(e4)), (d[6] = h), (d[7] = l)) : (l = d[7]),
        d[8] !== u.length || d[9] !== f || d[10] !== m
          ? ((o =
              f > 0
                ? (0, a.jsx)(e8, {
                    isExpanded: !1,
                    onClick: () => {
                      p(!0)
                    },
                    children: (0, a.jsx)(w.A, { ...te.showMoreComments, values: { count: f } }),
                  })
                : m && u.length > 3
                  ? (0, a.jsx)(e8, {
                      isExpanded: !0,
                      onClick: () => {
                        p(!1)
                      },
                      children: (0, a.jsx)(w.A, { ...te.collapseComments }),
                    })
                  : null),
            (d[8] = u.length),
            (d[9] = f),
            (d[10] = m),
            (d[11] = o))
          : (o = d[11]),
        d[12] !== l || d[13] !== o
          ? ((r = (0, a.jsxs)("div", { className: "flex flex-col border-t border-default", children: [l, o] })),
            (d[12] = l),
            (d[13] = o),
            (d[14] = r))
          : (r = d[14]),
        d[15] !== i || d[16] !== r
          ? ((c = (0, a.jsx)(eE.zU, {
              children: (0, a.jsxs)("div", { className: "flex flex-col", children: [i, r] }),
            })),
            (d[15] = i),
            (d[16] = r),
            (d[17] = c))
          : (c = d[17]),
        c
      )
    }
    function e4(e, t) {
      return (0, a.jsx)(e5, { comment: e }, `${(0, eB.y6)(e)}:${t}`)
    }
    function e5(e) {
      var t
      let n,
        i,
        l,
        o,
        r,
        c,
        d,
        u,
        p,
        h,
        f,
        g,
        x,
        v,
        w,
        b = (0, s.c)(38),
        { comment: C } = e,
        j = (0, m.gh)(ee.GD),
        A = (0, y.A)()
      b[0] !== C || b[1] !== A
        ? (({ priority: i, title: o } = e9(C)),
          (t = C),
          (n = `${t.position.path}:${(0, eD.K3)(t)}`),
          (l = A.formatMessage(te.openComment, { location: n, title: o })),
          (b[0] = C),
          (b[1] = A),
          (b[2] = n),
          (b[3] = i),
          (b[4] = l),
          (b[5] = o))
        : ((n = b[2]), (i = b[3]), (l = b[4]), (o = b[5]))
      let I = l
      b[6] !== C || b[7] !== j
        ? ((r = () => {
            ;((0, eU.e)(),
              (0, e0.openThreadBranchReviewSidePanelTab)(j, { comment: C }),
              (async function (e, t) {
                let n = Date.now(),
                  a = "branch" === e.get(eZ.kZ) ? (0, e1.tZ)(e) : null
                if (null != a && null == a.getData()) {
                  let n = e.get(eq.It.activeTab$)?.tabId,
                    s = e.get(eW.sq),
                    i = JSON.stringify(a.queryKey),
                    l = e.get(eX.X4),
                    o = e.get(eX.k$)
                  try {
                    await a.getOrFetch()
                  } catch {}
                  let r = (0, e1.tZ)(e)
                  if (
                    "branch" !== e.get(eZ.kZ) ||
                    JSON.stringify(r?.queryKey) !== i ||
                    e.get(eq.It.activeTab$)?.tabId !== n ||
                    e.get(eW.sq) !== s ||
                    e.get(eX.X4) !== l ||
                    e.get(eX.k$) !== o
                  )
                    return
                  for (let n of t) (0, eX.vw)(e, n)
                }
                let s = e.get(eG.threadCwd$),
                  i = e.get(eG.threadHostId$) ?? void 0
                for (let a of (function ({ comments: e, reviewFilePaths: t, workspaceRoot: n }) {
                  let a = new Set(),
                    s = []
                  for (let i of e) {
                    let e = (0, eQ.yy)({ gitPath: i.position.path, gitRoot: i.localWorkspaceRoot ?? n })
                    if (
                      t.some((t) =>
                        (0, eK.Z1)(e) ? (0, eK.y7)(e, (0, eQ.yy)({ gitPath: t, gitRoot: n })) : (0, eB.Si)(e, t),
                      )
                    )
                      continue
                    let l = (0, eK.XH)(e)
                    a.has(l) ||
                      (a.add(l),
                      s.push({
                        endLine: null == i.position.start_line ? void 0 : i.position.line,
                        line: i.position.start_line ?? i.position.line,
                        path: e,
                      }))
                  }
                  return s
                })({ comments: t, reviewFilePaths: e.get(eY.J1).map((e) => e.path), workspaceRoot: s }))
                  ((0, eJ.openReviewFileSourceTab)(e, a.path, {
                    endLine: a.endLine,
                    hostId: i,
                    isPreview: !1,
                    line: a.line,
                    resetTabState: !0,
                  }),
                    (0, eH.t9)(i ?? e$.fI, e.getOwnValue(eV.l7).clientThreadId, [a.path], n))
              })(j, [C]))
          }),
          (b[6] = C),
          (b[7] = j),
          (b[8] = r))
        : (r = b[8])
      let k = r
      ;(b[9] !== k
        ? ((c = (e) => {
            ;(e.detail > 0 && window.getSelection()?.isCollapsed === !1) || k()
          }),
          (b[9] = k),
          (b[10] = c))
        : (c = b[10]),
        b[11] !== i
          ? ((d = null == i ? null : (0, a.jsx)(e7, { priority: i })), (b[11] = i), (b[12] = d))
          : (d = b[12]),
        b[13] !== d
          ? ((u = (0, a.jsx)("span", { className: "flex w-8 shrink-0 items-center justify-center", children: d })),
            (b[13] = d),
            (b[14] = u))
          : (u = b[14]),
        b[15] !== o
          ? ((p = (0, a.jsx)("span", { className: "min-w-0 shrink truncate font-medium text-default", children: o })),
            (b[15] = o),
            (b[16] = p))
          : (p = b[16]),
        b[17] !== n ? ((h = (0, a.jsx)("span", { dir: "ltr", children: n })), (b[17] = n), (b[18] = h)) : (h = b[18]),
        b[19] !== n || b[20] !== h
          ? ((f = (0, a.jsx)("span", {
              className: "min-w-[6rem] flex-1 truncate text-end text-secondary [direction:rtl]",
              title: n,
              children: h,
            })),
            (b[19] = n),
            (b[20] = h),
            (b[21] = f))
          : (f = b[21]),
        b[22] !== u || b[23] !== p || b[24] !== f
          ? ((g = (0, a.jsxs)("span", {
              className: "flex min-w-0 flex-1 items-center gap-2.5 px-4 whitespace-nowrap",
              children: [u, p, f],
            })),
            (b[22] = u),
            (b[23] = p),
            (b[24] = f),
            (b[25] = g))
          : (g = b[25]),
        b[26] !== I || b[27] !== c || b[28] !== g
          ? ((x = (0, a.jsx)("button", {
              "aria-label": I,
              className:
                "flex h-9 w-full cursor-interaction items-center text-start text-size-chat select-text hover:bg-background-secondary-ghost-hover/30 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset",
              onClick: c,
              type: "button",
              children: g,
            })),
            (b[26] = I),
            (b[27] = c),
            (b[28] = g),
            (b[29] = x))
          : (x = b[29]))
      let M = x
      return (
        b[30] !== C || b[31] !== n || b[32] !== k || b[33] !== I
          ? ((v = (0, a.jsx)(e6, { comment: C, location: n, onOpen: k, openLabel: I })),
            (b[30] = C),
            (b[31] = n),
            (b[32] = k),
            (b[33] = I),
            (b[34] = v))
          : (v = b[34]),
        b[35] !== M || b[36] !== v
          ? ((w = (0, a.jsx)(eO.m, {
              align: "center",
              closeOnTriggerBlur: !1,
              delayDuration: 600,
              disablePadding: !0,
              interactive: !0,
              side: "top",
              sideOffset: 12,
              tooltipBodyClassName: "w-full flex-col",
              tooltipClassName:
                "max-h-[420px] ![width:clamp(0px,calc(var(--radix-tooltip-trigger-width)_-_64px),var(--radix-tooltip-content-available-width))] overflow-hidden shadow-xl",
              tooltipMaxWidth:
                "clamp(0px, calc(var(--radix-tooltip-trigger-width) - 64px), var(--radix-tooltip-content-available-width))",
              variant: "rich",
              tooltipContent: v,
              children: M,
            })),
            (b[35] = M),
            (b[36] = v),
            (b[37] = w))
          : (w = b[37]),
        w
      )
    }
    function e6(e) {
      let t,
        n,
        i,
        l,
        o,
        r,
        d,
        u,
        m,
        p,
        h = (0, s.c)(26),
        { comment: f, location: g, onOpen: x, openLabel: v } = e
      h[0] !== f ? ((t = e9(f)), (h[0] = f), (h[1] = t)) : (t = h[1])
      let { priority: y, title: w } = t
      h[2] !== f
        ? ((n = (0, eD.rw)(f).trim().split("\n").slice(1).join("\n").trim()), (h[2] = f), (h[3] = n))
        : (n = h[3])
      let b = n,
        C = null == y ? "px-4" : "pe-4 ps-2.5"
      return (
        h[4] !== C
          ? ((i = (0, c.A)(
              "text-size-chat flex h-9 w-full cursor-interaction items-center gap-2 border-b border-default bg-surface-elevated-secondary py-[var(--turn-diff-row-padding-y)] text-start hover:bg-background-secondary-ghost-hover/30 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset extension:bg-primary-soft",
              C,
            )),
            (h[4] = C),
            (h[5] = i))
          : (i = h[5]),
        h[6] !== y ? ((l = null == y ? null : (0, a.jsx)(e7, { priority: y })), (h[6] = y), (h[7] = l)) : (l = h[7]),
        h[8] !== g
          ? ((o = (0, a.jsx)("span", { className: "min-w-0 flex-1 truncate text-default", children: g })),
            (h[8] = g),
            (h[9] = o))
          : (o = h[9]),
        h[10] !== x || h[11] !== v || h[12] !== i || h[13] !== l || h[14] !== o
          ? ((r = (0, a.jsxs)("button", {
              "aria-label": v,
              className: i,
              onClick: x,
              type: "button",
              children: [l, o],
            })),
            (h[10] = x),
            (h[11] = v),
            (h[12] = i),
            (h[13] = l),
            (h[14] = o),
            (h[15] = r))
          : (r = h[15]),
        h[16] !== w
          ? ((d = (0, a.jsx)("div", {
              className: "min-w-0 text-size-chat font-medium break-words text-default",
              children: w,
            })),
            (h[16] = w),
            (h[17] = d))
          : (d = h[17]),
        h[18] !== b
          ? ((u =
              b.length > 0
                ? (0, a.jsx)("div", { className: "mt-2 text-size-chat whitespace-pre-wrap text-default", children: b })
                : null),
            (h[18] = b),
            (h[19] = u))
          : (u = h[19]),
        h[20] !== d || h[21] !== u
          ? ((m = (0, a.jsxs)("div", { className: "max-h-96 overflow-y-auto px-4 py-3", children: [d, u] })),
            (h[20] = d),
            (h[21] = u),
            (h[22] = m))
          : (m = h[22]),
        h[23] !== m || h[24] !== r
          ? ((p = (0, a.jsxs)(a.Fragment, { children: [r, m] })), (h[23] = m), (h[24] = r), (h[25] = p))
          : (p = h[25]),
        p
      )
    }
    function e7(e) {
      let t,
        n = (0, s.c)(2),
        { priority: i } = e
      return (
        n[0] !== i
          ? ((t = (0, a.jsx)("span", {
              className: "rounded border border-default px-1.5 text-size-chat-sm font-medium text-secondary",
              children: i,
            })),
            (n[0] = i),
            (n[1] = t))
          : (t = n[1]),
        t
      )
    }
    function e8(e) {
      let t,
        n,
        i,
        l,
        o = (0, s.c)(11),
        { children: r, isExpanded: c, onClick: d } = e
      o[0] !== r
        ? ((t = (0, a.jsx)("span", { className: "truncate", children: r })), (o[0] = r), (o[1] = t))
        : (t = o[1])
      let u = c ? "icon-2xs rotate-180" : "icon-2xs"
      return (
        o[2] !== u ? ((n = (0, a.jsx)(ez.A, { className: u })), (o[2] = u), (o[3] = n)) : (n = o[3]),
        o[4] !== t || o[5] !== n
          ? ((i = (0, a.jsxs)("span", { className: "inline-flex min-w-0 items-center gap-2", children: [t, n] })),
            (o[4] = t),
            (o[5] = n),
            (o[6] = i))
          : (i = o[6]),
        o[7] !== c || o[8] !== d || o[9] !== i
          ? ((l = (0, a.jsx)("button", {
              type: "button",
              "aria-expanded": c,
              className:
                "flex h-9 w-full cursor-interaction items-center px-4 py-2 text-start text-size-chat text-default hover:bg-background-secondary-ghost-hover/30 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset",
              onClick: d,
              children: i,
            })),
            (o[7] = c),
            (o[8] = d),
            (o[9] = i),
            (o[10] = l))
          : (l = o[10]),
        l
      )
    }
    function e9(e) {
      let t = (0, eD.rw)(e).trim().split("\n")[0]?.trim() ?? "",
        n = t.match(e2)
      if (!n) return { priority: null, title: t }
      let a = n[1]
      return null == a ? { priority: null, title: t } : { priority: a.toUpperCase(), title: n[2]?.trim() ?? "" }
    }
    let te = (0, R.YK)({
      count: {
        id: "localConversation.reviewComments.count",
        defaultMessage: "{count, plural, one {# comment} other {# comments}}",
        description: "Title for the turn-end card summarizing model-authored code review comments",
      },
      openComment: {
        id: "localConversation.reviewComments.openComment",
        defaultMessage: "View {title} in {location}",
        description: "Accessible label for opening one model-authored code review comment from a conversation turn",
      },
      showMoreComments: {
        id: "localConversation.reviewComments.showMore",
        defaultMessage: "{count, plural, one {Show # more comment} other {Show # more comments}}",
        description: "Button label that expands hidden model-authored code review comments",
      },
      collapseComments: {
        id: "localConversation.reviewComments.collapse",
        defaultMessage: "Collapse comments",
        description: "Button label that collapses expanded model-authored code review comments",
      },
    })
    function tt(e) {
      let t,
        n,
        i = (0, s.c)(9),
        { commentAttributes: l, conversationId: o, cwd: r } = e,
        c = (0, m._U)(q.m8, o)
      if (i[0] !== l || i[1] !== r || i[2] !== c) {
        let e
        ;(i[4] !== r || i[5] !== c
          ? ((e = (e) => {
              let t = (0, eP.q)(e, r, c)
              return null == t ? [] : [t]
            }),
            (i[4] = r),
            (i[5] = c),
            (i[6] = e))
          : (e = i[6]),
          (t = l.flatMap(e)),
          (i[0] = l),
          (i[1] = r),
          (i[2] = c),
          (i[3] = t))
      } else t = i[3]
      let d = t
      return 0 === d.length
        ? null
        : (i[7] !== d
            ? ((n = (0, a.jsx)("div", { className: "mb-3", children: (0, a.jsx)(e3, { comments: d }) })),
              (i[7] = d),
              (i[8] = n))
            : (n = i[8]),
          n)
    }
    var tn = n("Wwdm"),
      ta = n("fzS4"),
      ts = n("GJ52"),
      ti = n("xprp"),
      tl = n("oSoj"),
      to = n("ZObU"),
      tr = n("OH0l"),
      tc = n("IufW"),
      td = n("QvXf"),
      tu = n("qMca"),
      tm = n("Lm6t"),
      tp = n("fIHL"),
      th = n("UM72"),
      tf = n("rkZ2"),
      tg = n("EXS8"),
      tx = n("OXGn"),
      tv = n("XpUB")
    let ty = {
      ...td.V,
      a: (0, tx.j$)({
        conversationId: null,
        externalLinkAppearance: "underlined-text",
        isBrowserEnabled: !1,
        openFileLinksInSidePanel: !1,
      }),
    }
    function tw(e) {
      let t,
        n,
        i,
        l,
        o,
        r = (0, s.c)(10),
        { text: c, attachmentCount: d } = e
      return (
        r[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = { kind: "assistant-message" }), (r[0] = t))
          : (t = r[0]),
        r[1] !== c ? ((n = (0, tv.o)(c, void 0)), (r[1] = c), (r[2] = n)) : (n = r[2]),
        r[3] !== n
          ? ((i = (0, a.jsx)(tg.T, { components: ty, textStyle: t, tokens: n })), (r[3] = n), (r[4] = i))
          : (i = r[4]),
        r[5] !== d
          ? ((l =
              d > 0
                ? (0, a.jsx)("div", {
                    className: "mt-2 text-secondary",
                    children: (0, a.jsx)(w.A, { ...P.attachments, values: { count: d } }),
                  })
                : null),
            (r[5] = d),
            (r[6] = l))
          : (l = r[6]),
        r[7] !== i || r[8] !== l
          ? ((o = (0, a.jsxs)("div", { className: "min-w-0 text-size-chat", children: [i, l] })),
            (r[7] = i),
            (r[8] = l),
            (r[9] = o))
          : (o = r[9]),
        o
      )
    }
    var tb = n("oVAx"),
      tC = n("yGJW"),
      tj = n("Sm6l"),
      tA = n("hZax"),
      tI = n("P4PG")
    function tk(e) {
      let t,
        n,
        l,
        o,
        r,
        c = (0, s.c)(14),
        { conversationId: d, hostId: u, response: p } = e,
        h = (0, m.gh)(eM.u),
        f = (0, y.A)(),
        g = (0, tA.Zj)("4157559322"),
        x = (0, tA.Zj)("3575944273")
      if (!g || !x) return null
      c[0] !== f
        ? ((t = f.formatMessage({
            id: "codex.sharedSnapshot.responseShare.label",
            defaultMessage: "Share",
            description:
              "Tooltip and accessible label for the button beneath a completed Codex response. Opens a dialog to share only that response.",
          })),
          (c[0] = f),
          (c[1] = t))
        : (t = c[1])
      let v = t
      return (
        c[2] !== d || c[3] !== u || c[4] !== p || c[5] !== h
          ? ((n = () => (0, tI.N)(h, { conversationId: d, hostId: u, response: p }, "message_inline_action")),
            (c[2] = d),
            (c[3] = u),
            (c[4] = p),
            (c[5] = h),
            (c[6] = n))
          : (n = c[6]),
        c[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, a.jsx)(_.b5, { icon: { 16: eo.T7p, 20: eo._Ui } })), (c[7] = l))
          : (l = c[7]),
        c[8] !== v || c[9] !== n
          ? ((o = (0, a.jsx)(tj.$, { "aria-label": v, color: "ghost", size: "icon", onClick: n, children: l })),
            (c[8] = v),
            (c[9] = n),
            (c[10] = o))
          : (o = c[10]),
        c[11] !== v || c[12] !== o
          ? ((r = (0, a.jsx)(i.m, { content: v, children: o })), (c[11] = v), (c[12] = o), (c[13] = r))
          : (r = c[13]),
        r
      )
    }
    var tM = n("aepO"),
      tS = n("vpGo"),
      tN = n("lZYQ"),
      tT = n("aRbG"),
      t_ = n("HgLj"),
      tR = n("q3n0"),
      tP = n("v0rv"),
      tL = n("moQb"),
      tD = n("gWlg"),
      tF = n("HAEQ"),
      tE = n("lsky"),
      tO = n("GCrV")
    let tU = "codex-annotation"
    var tB = n("K00L"),
      tz = n("UUD2"),
      tq = n("x9i8"),
      tW = n("jEN2"),
      tH = n("g3w6"),
      tG = n("SGsN"),
      tV = n("K8Eg"),
      t$ = n("FQlR"),
      tK = n("oTak"),
      tZ = n("syaX"),
      tQ = n("bqtn"),
      tJ = n("CohC")
    function tY(e) {
      let t,
        n,
        i,
        l,
        o,
        r,
        c,
        d,
        u,
        m,
        p,
        h,
        f,
        g,
        x,
        b,
        C,
        j = (0, s.c)(51),
        {
          autoReviewStats: A,
          hookStats: I,
          memoryCitationEntries: k,
          renderUsedSkillsDetails: M,
          forkDisabled: S,
          forkLabel: N,
          isForking: T,
          onFork: R,
          open: P,
          onOpenChange: L,
        } = e,
        D = (0, y.A)(),
        F = (0, v.useRef)(null),
        [E, O] = (0, v.useState)(null),
        U = A?.rejectedCount === 0
      if (null == R && !U && null == I && 0 === k.length && null == M) return null
      ;(j[0] !== E
        ? ((t = (e) => {
            null != E && e.preventDefault()
          }),
          (j[0] = E),
          (j[1] = t))
        : (t = j[1]),
        j[2] !== D
          ? ((n = D.formatMessage({
              id: "assistantMessageContent.moreActions",
              defaultMessage: "More actions",
              description:
                "Accessible label for the overflow menu beneath a Codex response, containing branching and details about the turn",
            })),
            (j[2] = D),
            (j[3] = n))
          : (n = j[3]),
        j[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, a.jsx)(_.b5, { icon: { 16: eo.l0Y, 20: eo.e4G } })), (j[4] = i))
          : (i = j[4]),
        j[5] !== n
          ? ((l = (0, a.jsx)(tj.$, {
              ref: F,
              "aria-label": n,
              color: "ghost",
              size: "icon",
              onClick: t1,
              children: i,
            })),
            (j[5] = n),
            (j[6] = l))
          : (l = j[6]),
        j[7] !== S || j[8] !== N || j[9] !== T || j[10] !== R
          ? ((o =
              null != R
                ? (0, a.jsx)(tQ.ms.Item, {
                    leftIcon: (0, a.jsx)(eo.bxT, {}),
                    "aria-label": N,
                    "aria-busy": T || void 0,
                    disabled: S || T,
                    onSelect: R,
                    children: (0, a.jsx)(w.A, {
                      id: "assistantMessageContent.branchInNewChatTooltip",
                      defaultMessage: "Branch in new chat",
                      description:
                        "Tooltip for the button beneath an assistant message that branches the conversation into a new chat",
                    }),
                  })
                : null),
            (j[7] = S),
            (j[8] = N),
            (j[9] = T),
            (j[10] = R),
            (j[11] = o))
          : (o = j[11]),
        j[12] !== U
          ? ((r = U
              ? (0, a.jsx)(tQ.ms.Item, {
                  leftIcon: (0, a.jsx)(eo.R5U, {}),
                  onSelect: () => O("autoReview"),
                  children: (0, a.jsx)(w.A, {
                    id: "assistantMessage.autoReviewStats.title",
                    defaultMessage: "Auto-review stats",
                    description: "Title for the auto-review stats dialog",
                  }),
                })
              : null),
            (j[12] = U),
            (j[13] = r))
          : (r = j[13]),
        j[14] !== I
          ? ((c =
              null != I
                ? (0, a.jsx)(tQ.ms.Item, {
                    leftIconAsset: tK.D,
                    onSelect: () => O("hooks"),
                    children: (0, a.jsx)(w.A, {
                      id: "assistantMessage.hookStats.dialogTitle",
                      defaultMessage: "Hook stats",
                      description: "Title of the dialog showing hook runs for one completed turn",
                    }),
                  })
                : null),
            (j[14] = I),
            (j[15] = c))
          : (c = j[15]),
        j[16] !== k.length
          ? ((d =
              k.length > 0
                ? (0, a.jsx)(tQ.ms.Item, {
                    leftIconAsset: t$.o,
                    onSelect: () => O("memory"),
                    children: (0, a.jsx)(w.A, {
                      id: "assistantMessage.memoryCitations.summary",
                      defaultMessage: "{count, plural, one {1 memory citation} other {# memory citations}}",
                      description: "Label for citations that explain which memory files informed an assistant message",
                      values: { count: k.length },
                    }),
                  })
                : null),
            (j[16] = k.length),
            (j[17] = d))
          : (d = j[17]),
        j[18] !== M
          ? ((u =
              null != M
                ? (0, a.jsx)(tQ.ms.Item, {
                    leftIconAsset: tZ.S,
                    onSelect: () => O("skills"),
                    children: (0, a.jsx)(w.A, {
                      id: "assistantMessage.usedSkills.label",
                      defaultMessage: "Skills",
                      description: "Accessible label for the indicator listing skills used in an assistant turn",
                    }),
                  })
                : null),
            (j[18] = M),
            (j[19] = u))
          : (u = j[19]),
        j[20] !== L ||
        j[21] !== P ||
        j[22] !== t ||
        j[23] !== l ||
        j[24] !== o ||
        j[25] !== r ||
        j[26] !== c ||
        j[27] !== d ||
        j[28] !== u
          ? ((m = (0, a.jsxs)(tQ.Ab, {
              side: "top",
              open: P,
              onOpenChange: L,
              onCloseAutoFocus: t,
              triggerButton: l,
              children: [o, r, c, d, u],
            })),
            (j[20] = L),
            (j[21] = P),
            (j[22] = t),
            (j[23] = l),
            (j[24] = o),
            (j[25] = r),
            (j[26] = c),
            (j[27] = d),
            (j[28] = u),
            (j[29] = m))
          : (m = j[29]))
      let B = null != E
      j[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = (e) => {
            e || O(null)
          }),
          (j[30] = p))
        : (p = j[30])
      let z = "autoReview" === E || "hooks" === E ? "xwideTall" : "wide"
      return (
        j[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = {
              "aria-describedby": void 0,
              onCloseAutoFocus: (e) => {
                ;(e.preventDefault(), F.current?.focus())
              },
            }),
            (j[31] = h))
          : (h = j[31]),
        j[32] !== A || j[33] !== E
          ? ((f = "autoReview" === E && null != A ? (0, a.jsx)(eu, { stats: A }) : null),
            (j[32] = A),
            (j[33] = E),
            (j[34] = f))
          : (f = j[34]),
        j[35] !== E || j[36] !== I
          ? ((g = "hooks" === E && null != I ? (0, a.jsx)(tJ.g, { stats: I }) : null),
            (j[35] = E),
            (j[36] = I),
            (j[37] = g))
          : (g = j[37]),
        j[38] !== E || j[39] !== k || j[40] !== M
          ? ((x =
              "memory" === E || "skills" === E
                ? (0, a.jsxs)(el.R4, {
                    className: "select-none",
                    children: [
                      (0, a.jsx)(el.OO, {
                        children: (0, a.jsx)(el.c7, {
                          title: (0, a.jsx)(ei.L3, {
                            className: "contents",
                            children:
                              "memory" === E
                                ? (0, a.jsx)(w.A, {
                                    id: "assistantMessage.memoryCitations.tooltipTitle",
                                    defaultMessage: "Memories cited",
                                    description:
                                      "Title for the list of memory citations in an assistant message tooltip",
                                  })
                                : (0, a.jsx)(w.A, {
                                    id: "assistantMessage.usedSkills.title",
                                    defaultMessage: "Skills",
                                    description: "Title for the tooltip listing skills used in an assistant turn",
                                  }),
                          }),
                        }),
                      }),
                      (0, a.jsx)(el.OO, {
                        children:
                          "skills" === E
                            ? M?.(() => O(null))
                            : (0, a.jsx)("ul", {
                                className: "flex min-w-0 list-disc flex-col gap-1 ps-4 text-secondary",
                                children: k.map(tX),
                              }),
                      }),
                    ],
                  })
                : null),
            (j[38] = E),
            (j[39] = k),
            (j[40] = M),
            (j[41] = x))
          : (x = j[41]),
        j[42] !== B || j[43] !== z || j[44] !== f || j[45] !== g || j[46] !== x
          ? ((b = (0, a.jsxs)(ei.lG, {
              autoFocusCloseButton: !0,
              open: B,
              onOpenChange: p,
              size: z,
              contentProps: h,
              children: [f, g, x],
            })),
            (j[42] = B),
            (j[43] = z),
            (j[44] = f),
            (j[45] = g),
            (j[46] = x),
            (j[47] = b))
          : (b = j[47]),
        j[48] !== m || j[49] !== b
          ? ((C = (0, a.jsxs)(a.Fragment, { children: [m, b] })), (j[48] = m), (j[49] = b), (j[50] = C))
          : (C = j[50]),
        C
      )
    }
    function tX(e, t) {
      return (0, a.jsx)("li", { className: "min-w-0", children: e.note }, `${e.path}:${e.lineStart}-${e.lineEnd}:${t}`)
    }
    function t1(e) {
      return e.stopPropagation()
    }
    var t0 = n("qvkX")
    let t2 = (0, N._)(
        async () =>
          (
            await Promise.all([
              n.e(851456),
              n.e(393442),
              n.e(486125),
              n.e(232817),
              n.e(740827),
              n.e(720436),
              n.e(208123),
              n.e(132733),
              n.e(112270),
            ]).then(n.bind(n, "dlWg"))
          ).CodexWritingBlockDirectiveRenderer,
        tF.O,
      ),
      t3 = [],
      t4 = [],
      t5 = (0, m.T1)(eM.u, (e) => new Map(), { owner: (e) => e }),
      t6 = (0, m.i1)(eM.u, (e, { get: t }) => t(tu.D0, e))
    function t7(e) {
      let t,
        n,
        i,
        l,
        o,
        d,
        u,
        f,
        g,
        x,
        M,
        N,
        _,
        R,
        P,
        F,
        O,
        B,
        z,
        q,
        W,
        H,
        G,
        V,
        $,
        K,
        Z,
        Q,
        J,
        Y,
        X,
        et,
        en,
        ea,
        ei,
        el,
        eo,
        er,
        ec,
        ed,
        eu,
        em,
        ep,
        eh,
        eb,
        ej,
        eA,
        eI,
        ek,
        eS,
        eP,
        eL = (0, s.c)(285),
        {
          item: eD,
          assistantCopyText: eF,
          turnId: eE,
          autoReviewStats: eU,
          hookStats: eB,
          after: ez,
          compactAttachment: eq,
          electronAfter: eW,
          conversationId: eH,
          getVisualizeTurnTriggerType: eG,
          cwd: e$,
          hostId: eK,
          markdownMediaCacheKey: eZ,
          onAddResponseTextAnnotation: eQ,
          onNavigateResponseTextAnnotation: eJ,
          onFileLinkOpen: eY,
          onFork: eX,
          completedThreadGoal: e1,
          additionalActions: e0,
          persistentAdditionalActions: e2,
          trailingActions: e3,
          renderUsedSkillsDetails: e4,
          showShimmer: e5,
          alwaysShowActions: e6,
          sourceTurnId: e7,
          savedContentResponseId: e8,
          projectlessOutputDirectory: e9,
          outputFileLinks: te,
          forceCodeBlockWordWrap: to,
          hasArtifacts: tu,
          reportEntityType: tg,
          showActionRow: tx,
          showTimestampHeader: ty,
          showTimestampWithoutActions: tC,
          timestampHoverOnly: tj,
          renderCodeBlocksAsWritingBlocks: tI,
          allowCopyWhileStreaming: tM,
          isReadOnly: tN,
        } = e,
        tT = void 0 !== e5 && e5,
        tF = void 0 !== e6 && e6,
        tz = void 0 === e7 ? eE : e7,
        t$ = void 0 === e9 ? null : e9,
        tK = void 0 !== to && to,
        tZ = void 0 !== tu && tu,
        tQ = void 0 === tg ? "thread" : tg,
        tJ = void 0 === tx || tx,
        tY = void 0 !== ty && ty,
        tX = void 0 !== tC && tC,
        t1 = void 0 !== tj && tj,
        t5 = void 0 !== tI && tI,
        t7 = void 0 === tN || tN,
        na = (0, m.gh)(ee.GD),
        ns = (0, y.A)(),
        nl = (0, v.useContext)(eg.b)
      eL[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { name: "browser.in-app" }), (eL[0] = t)) : (t = eL[0])
      let nr = (0, m._U)(b.G, t).isCapable
      eL[1] !== eZ
        ? ((n = null == eZ ? void 0 : ["local-conversation-turn", eZ]), (eL[1] = eZ), (eL[2] = n))
        : (n = eL[2])
      let nc = n,
        nd = (0, m._U)(t6, eH),
        nu = (0, m._U)(ex.X, eH),
        nm = (0, v.useRef)(null)
      eL[3] !== eD ? ((i = eD.isRevealPending?.()), (eL[3] = eD), (eL[4] = i)) : (i = eL[4])
      let np = i,
        nh = null != eD.onRevealComplete && !1 !== np,
        nf = (0, U.E0)(eD),
        ng = eD.externalDelivery?.provider === "tibro" || eD.externalDelivery?.state === "accepted",
        nx = (0, m._U)(null != eD.nativeMessage ? tf.pp : null, eH),
        nv = (0, m.Ul)(null != eD.nativeMessage && tf.SU),
        ny = eD.externalDelivery?.attachmentCount ?? 0,
        nw =
          nd &&
          nu &&
          "async" !== eD.delivery &&
          (null != nf || ng || !("aeonSentMessage" in eD && !0 === eD.aeonSentMessage))
      eL[5] !== np || eL[6] !== eD.onRevealComplete
        ? ((l = () => {
            let e = nm.current,
              t = eD.onRevealComplete
            if (null == t || null == e) return
            let n = !1,
              a = !1,
              s = () => {
                n || a || ((a = !0), t())
              }
            return (
              Promise.allSettled(e.getAnimations({ subtree: !0 }).filter(nt).map(ne)).then(s),
              () => {
                !0 === np ? s() : (n = !0)
              }
            )
          }),
          (eL[5] = np),
          (eL[6] = eD.onRevealComplete),
          (eL[7] = l))
        : (l = eL[7])
      let nb = (0, v.useEffectEvent)(l)
      ;(eL[8] !== nh || eL[9] !== nb
        ? ((o = () => {
            if (nh) return nb()
          }),
          (eL[8] = nh),
          (eL[9] = nb),
          (eL[10] = o))
        : (o = eL[10]),
        eL[11] !== nh || eL[12] !== eD.searchItemId
          ? ((d = [nh, eD.searchItemId]), (eL[11] = nh), (eL[12] = eD.searchItemId), (eL[13] = d))
          : (d = eL[13]),
        (0, v.useEffect)(o, d),
        eL[14] !== eH || eL[15] !== eK || eL[16] !== eD.phase || eL[17] !== eD.searchItemId
          ? ((u = (e) => {
              if (null != e && "final_answer" === eD.phase && null != eD.searchItemId)
                return tb.O.observePaint(e, eK, eH, eD.searchItemId)
            }),
            (eL[14] = eH),
            (eL[15] = eK),
            (eL[16] = eD.phase),
            (eL[17] = eD.searchItemId),
            (eL[18] = u))
          : (u = eL[18]))
      let nC = u
      null != nf
        ? (f = L(
            (function (e, t) {
              let { text: n, details: a } = D(e, t)
              return [n, ...a].join("\n")
            })(nf, ns),
            ny,
            ns,
          ))
        : ng && (f = L(eD.content, ny, ns))
      let nj = () => {
          if (null != f) return f
          let e = (0, r.Xq)(eF ?? "", (e) => (0, tD.Nn)((0, tD.Kr)(eH, eE, e)))
          return (function (e, t, n) {
            if (null == t || 0 === t.length || !e.includes(":codex-annotation")) return e
            let a = [],
              s = "",
              i = 0
            return (
              (0, tE.KR)((0, tv.o)(e, void 0), (l) => {
                if ("code" === l.type || "codespan" === l.type) {
                  let t = e.indexOf(l.raw, i)
                  ;-1 !== t && a.push({ start: t, end: t + l.raw.length })
                  return
                }
                if (
                  "codexDirective" !== l.type ||
                  !("name" in l) ||
                  l.name !== tU ||
                  !("attributes" in l) ||
                  null == l.attributes ||
                  "object" != typeof l.attributes ||
                  !("index" in l.attributes) ||
                  "string" != typeof l.attributes.index
                )
                  return
                let o = Number(l.attributes.index)
                if (!Number.isSafeInteger(o) || o < 1 || String(o) !== l.attributes.index || null == t[o - 1]) return
                let r = e.indexOf(l.raw, i)
                for (; -1 !== r && a.some(({ start: e, end: t }) => r >= e && r < t);) r = e.indexOf(l.raw, r + 1)
                ;-1 !== r &&
                  ((s += e.slice(i, r)),
                  (s += n.formatMessage(
                    {
                      id: "assistantMessage.responseAnnotation.label",
                      defaultMessage: "Annotation {annotationNumber}",
                      description: "Label for an inline reference to one response annotation",
                    },
                    { annotationNumber: o },
                  )),
                  (i = r + l.raw.length))
              }),
              s + e.slice(i)
            )
          })(
            (0, eC.i)(
              (0, tS.c)(
                (0, ts.h)((0, tR.vI)(e)),
                null == t$ ? void 0 : (e) => (0, eT.T)({ cwd: e$, projectlessOutputDirectory: t$, resourcePath: e }),
              ),
            ),
            eD.responseAnnotations,
            ns,
          )
        },
        nA = nj(),
        nI = (eD.completed || (void 0 !== tM && tM)) && nA.trim().length > 0,
        nk = eD.automationCitations ?? t3
      eL[19] !== nk.length || eL[20] !== eD.content
        ? ((g =
            nk.length > 0 &&
            (function (e) {
              if (0 === e.trim().length || /^\s*:{2,3}[a-zA-Z0-9-]+(?:\s|\{|\[|$)/m.test(e)) return !1
              try {
                let t = (0, p.Y)(e)
                return t.children.at(-1)?.type === "paragraph"
              } catch {
                return !0
              }
            })(eD.content)),
          (eL[19] = nk.length),
          (eL[20] = eD.content),
          (eL[21] = g))
        : (g = eL[21])
      let nM = g,
        nS = (0, r.PV)(eD.content, { isStreaming: !eD.completed }),
        nN = nM
          ? `${nS.trimEnd()}

${nk.map(t9).join("\n\n")}`
          : nS
      eL[22] !== nd || eL[23] !== eD.completed || eL[24] !== eD.content
        ? ((x =
            eD.completed && !nd
              ? (function (e) {
                  if (!e.includes(`:${ey.sD}`)) return []
                  let t = []
                  for (let n of (0, ev.S)(e, { lineStartNames: [ey.sD] })) {
                    if (n.name !== ey.sD) continue
                    let e = (0, h.loi)(n.attributes)
                    null != e && t.push(e)
                  }
                  return t
                })(eD.content)
              : []),
          (eL[22] = nd),
          (eL[23] = eD.completed),
          (eL[24] = eD.content),
          (eL[25] = x))
        : (x = eL[25])
      let nT = x
      eL[26] !== eD.memoryCitation?.entries || eL[27] !== eD.memoryCitation?.entries.filter
        ? ((M = eD.memoryCitation?.entries.filter(t8) ?? []),
          (eL[26] = eD.memoryCitation?.entries),
          (eL[27] = eD.memoryCitation?.entries.filter),
          (eL[28] = M))
        : (M = eL[28])
      let n_ = M
      eL[29] !== e$ || eL[30] !== eK || eL[31] !== t$
        ? ((N =
            null == t$
              ? void 0
              : (0, tl.A)({
                  cwd: e$,
                  hostId: eK,
                  openFileLinksInSidePanel: !0,
                  shouldRenderPath: (e) => (0, eT.T)({ cwd: e$, projectlessOutputDirectory: t$, resourcePath: e }),
                })),
          (eL[29] = e$),
          (eL[30] = eK),
          (eL[31] = t$),
          (eL[32] = N))
        : (N = eL[32])
      let nR = N
      eL[33] !== nk || eL[34] !== eH || eL[35] !== nM || eL[36] !== tz
        ? ((_ = nM
            ? {
                [ey.Ui]: (e) => {
                  let { attributes: t } = e,
                    n = (function ({ automationCitations: e, automationId: t, index: n }) {
                      let a = e["number" == typeof n ? n : Number.parseInt(n ?? "", 10)] ?? null
                      return (null != a && (null == t || no(a) === t)) || null == t
                        ? a
                        : (e.find((e) => no(e) === t) ?? null)
                    })({
                      automationCitations: nk,
                      automationId: "string" == typeof t.automation_id ? t.automation_id : null,
                      index: "string" == typeof t.index ? t.index : void 0,
                    })
                  return null == n
                    ? null
                    : (0, a.jsx)(eR.N, {
                        ...n.arguments,
                        elicitation: {
                          threadId: eH,
                          turnId: tz,
                          itemId: n.callId,
                          elicitationType: "automation_schedule",
                        },
                        result: n.result,
                      })
                },
              }
            : void 0),
          (eL[33] = nk),
          (eL[34] = eH),
          (eL[35] = nM),
          (eL[36] = tz),
          (eL[37] = _))
        : (_ = eL[37])
      let nP = _
      ;(eL[38] !== eH || eL[39] !== e$
        ? ((R = Object.assign(
            function (e) {
              let { attributes: t, groupedAttributes: n } = e
              return (0, a.jsx)(tt, { commentAttributes: n ?? [t], conversationId: eH, cwd: e$ })
            },
            { groupConsecutive: !0 },
          )),
          (eL[38] = eH),
          (eL[39] = e$),
          (eL[40] = R))
        : (R = eL[40]),
        eL[41] !== eH ||
        eL[42] !== eK ||
        eL[43] !== t7 ||
        eL[44] !== eD.completed ||
        eL[45] !== eD.phase ||
        eL[46] !== eD.responseAnnotationTargetId ||
        eL[47] !== eE
          ? ((P = {}),
            (eL[41] = eH),
            (eL[42] = eK),
            (eL[43] = t7),
            (eL[44] = eD.completed),
            (eL[45] = eD.phase),
            (eL[46] = eD.responseAnnotationTargetId),
            (eL[47] = eE),
            (eL[48] = P))
          : (P = eL[48]))
      let nL = eD.completed && "commentary" !== eD.phase
      if (
        (eL[49] !== eH || eL[50] !== eK || eL[51] !== eD.responseAnnotationTargetId || eL[52] !== tz || eL[53] !== nL
          ? ((F = (function ({ conversationId: e, hostId: t, isInteractive: n, sourceTurnId: s, sourceMessageId: i }) {
              return {
                [eC.Z]: function ({ attributes: l, children: o, directiveId: r, rawText: c }) {
                  let d = (0, m.gh)(eM.u),
                    u = (0, y.A)(),
                    p = (0, tA.Ou)(tq.F.name),
                    h = "string" == typeof l.prompt ? l.prompt.trim() : ""
                  if (!n || 0 === h.length || null == c || 0 === c.trim().length)
                    return (0, a.jsx)(a.Fragment, { children: o })
                  let f = p.get(tq.F.clickableFollowupsEnabled, !1),
                    g =
                      null == r
                        ? void 0
                        : { hostId: t, threadId: e, sourceTurnId: s, sourceMessageId: i, directiveId: r, clickable: f },
                    x = (e) => (null == g ? void 0 : (0, tV.Vo)(d, e, g))
                  return f
                    ? (0, a.jsx)(tH.c, {
                        ref: x,
                        displayText: c,
                        onActivate: () => {
                          let t = null == g ? void 0 : (0, tV.$j)(d, g),
                            n = (0, tW.tN)((0, eV.JJ)(d, e), h, t)
                          ;(null != t && (0, tV.Tb)(d, t, n),
                            n ||
                              d
                                .get(tG.Id)
                                .danger(
                                  u.formatMessage({
                                    id: "assistantMessage.inlineFollowup.prefillError",
                                    defaultMessage: "Couldn’t add the suggested follow-up to your draft",
                                    description:
                                      "Error toast when the task composer is unavailable or dictating and cannot receive a suggested follow-up",
                                  }),
                                  { errorAnalytics: { toastId: "assistantMessage.inlineFollowup.prefillError" } },
                                ))
                        },
                      })
                    : (0, a.jsx)("span", { ref: x, children: o })
                },
              }
            })({
              conversationId: eH,
              hostId: eK,
              isInteractive: nL,
              sourceTurnId: tz,
              sourceMessageId: eD.responseAnnotationTargetId,
            })),
            (eL[49] = eH),
            (eL[50] = eK),
            (eL[51] = eD.responseAnnotationTargetId),
            (eL[52] = tz),
            (eL[53] = nL),
            (eL[54] = F))
          : (F = eL[54]),
        eL[55] !== eD.responseAnnotations || eL[56] !== eJ)
      ) {
        var nD
        ;((nD = eD.responseAnnotations),
          (O = {
            [tU]: function ({ attributes: e }) {
              let t = (0, y.A)(),
                [n, s] = (0, v.useState)(!1),
                i = "string" == typeof e.index ? Number(e.index) : 0 / 0
              if (!Number.isSafeInteger(i) || i < 1 || String(i) !== e.index) return null
              let l = (0, a.jsx)(w.A, {
                  id: "assistantMessage.responseAnnotation.label",
                  defaultMessage: "Annotation {annotationNumber}",
                  description: "Label for an inline reference to one response annotation",
                  values: { annotationNumber: i },
                }),
                o = nD?.[i - 1]
              if (null == o) return null
              let r = (0, tO.K7)(o, eJ),
                c = o.text.split("\n").length,
                d = c > 1
              return (0, a.jsx)(eO.m, {
                interactive: !0,
                align: "start",
                open: n,
                side: "bottom",
                variant: "rich",
                onOpenChange: s,
                tooltipMaxWidth: d
                  ? "min(28rem, var(--radix-tooltip-content-available-width), calc(100vw - 16px))"
                  : void 0,
                tooltipContent: (0, a.jsxs)("div", {
                  className:
                    "flex max-h-[min(20rem,var(--radix-tooltip-content-available-height),calc(100vh-16px))] max-w-md flex-col gap-2 overflow-y-auto p-3 text-sm",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "min-w-0",
                      children: [
                        (0, a.jsx)("div", {
                          className: "text-xs font-medium text-tertiary",
                          children: (0, a.jsx)(w.A, {
                            id: "responseTextAnnotationAttachments.selectedTextLabel",
                            defaultMessage: "Selected text:",
                            description:
                              "Label with trailing colon for selected response text in a response note tooltip",
                          }),
                        }),
                        d
                          ? (0, a.jsx)("pre", {
                              className:
                                "mt-0.5 max-h-48 overflow-auto rounded-md bg-primary-soft px-3 py-2 font-mono text-xs whitespace-pre text-default select-text focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset",
                              role: "region",
                              "aria-label": t.formatMessage(
                                {
                                  id: "assistantMessage.responseAnnotation.multilineSelectionAriaLabel",
                                  defaultMessage: "Selected annotation text, {lineCount} lines",
                                  description:
                                    "Accessible label for a scrollable multiline response annotation selection",
                                },
                                { lineCount: c },
                              ),
                              children: o.text,
                            })
                          : (0, a.jsx)("div", {
                              className: "mt-0.5 break-words whitespace-pre-wrap select-text",
                              children: o.text,
                            }),
                      ],
                    }),
                    o.annotation?.trim()
                      ? (0, a.jsxs)("div", {
                          className: "min-w-0",
                          children: [
                            (0, a.jsx)("div", {
                              className: "text-xs font-medium text-tertiary",
                              children: (0, a.jsx)(w.A, {
                                id: "responseTextAnnotationAttachments.userCommentLabel",
                                defaultMessage: "User comment:",
                                description: "Label with trailing colon for the user's note in a response note tooltip",
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "mt-0.5 break-words whitespace-pre-wrap select-text",
                              children: o.annotation,
                            }),
                          ],
                        })
                      : null,
                  ],
                }),
                children: (0, a.jsx)("button", {
                  className:
                    "cursor-interaction align-baseline text-link-primary underline-offset-2 hover:underline hover:decoration-dashed hover:decoration-[0.5px] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                  type: "button",
                  "aria-label": d
                    ? t.formatMessage(
                        {
                          id: "assistantMessage.responseAnnotation.multilineAriaLabel",
                          defaultMessage: "Annotation {annotationNumber}: selected text, {lineCount} lines",
                          description: "Accessible label for a response annotation reference to a multiline selection",
                        },
                        { annotationNumber: i, lineCount: c },
                      )
                    : t.formatMessage(
                        {
                          id: "assistantMessage.responseAnnotation.ariaLabel",
                          defaultMessage: "Annotation {annotationNumber}: {selectedText}",
                          description: "Accessible label for a response annotation reference and its selected text",
                        },
                        { annotationNumber: i, selectedText: o.text },
                      ),
                  onClick: () => {
                    null == r ? s((e) => !e) : (s(!1), r())
                  },
                  children: l,
                }),
              })
            },
          }),
          (eL[55] = eD.responseAnnotations),
          (eL[56] = eJ),
          (eL[57] = O))
      } else O = eL[57]
      eL[58] !== nP || eL[59] !== nR || eL[60] !== R || eL[61] !== P || eL[62] !== F || eL[63] !== O
        ? ((B = { [ey.q9]: R, [ey.fG]: t2, ...P, ...F, ...nR, ...nP, "codex-resource": es, ...O }),
          (eL[58] = nP),
          (eL[59] = nR),
          (eL[60] = R),
          (eL[61] = P),
          (eL[62] = F),
          (eL[63] = O),
          (eL[64] = B))
        : (B = eL[64])
      let nF = B
      eL[65] === Symbol.for("react.memo_cache_sentinel")
        ? ((z = () => {
            let e = nm.current?.querySelector("[data-selected-text-overlay-target]")
            return null == e ? null : ((0, ti.WW)(e)?.htmlText ?? null)
          }),
          (eL[65] = z))
        : (z = eL[65])
      let nE = z
      eL[66] !== nj
        ? ((q = () => {
            let e = nm.current?.querySelector("[data-selected-text-overlay-target]")
            return null == e ? nj() : ((0, ti.WW)(e)?.plainText ?? "")
          }),
          (eL[66] = nj),
          (eL[67] = q))
        : (q = eL[67])
      let nO = q
      eL[68] !== nI ||
      eL[69] !== eH ||
      eL[70] !== nO ||
      eL[71] !== eK ||
      eL[72] !== eD ||
      eL[73] !== e2 ||
      eL[74] !== tJ ||
      eL[75] !== eE
        ? ((W =
            tJ && eD.completed && nI && (0, ew.Yr)(eD)
              ? [
                  ...(e2 ?? []),
                  (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(eN, {
                      hostId: eK,
                      conversationId: eH,
                      messageId: eD.responseAnnotationTargetId,
                      turnId: eE ?? eD.responseAnnotationTargetId ?? String(eD.sentAtMs),
                      getText: nO,
                    }),
                  }),
                ]
              : e2),
          (eL[68] = nI),
          (eL[69] = eH),
          (eL[70] = nO),
          (eL[71] = eK),
          (eL[72] = eD),
          (eL[73] = e2),
          (eL[74] = tJ),
          (eL[75] = eE),
          (eL[76] = W))
        : (W = eL[76])
      let nU = W,
        nB = !nu && (tJ || tX),
        nz = (0, m._U)(!nd && !tY && !nB && null != eD.sentAtMs && ef.ib, eH)
      ;(eL[77] !== e0 ? ((H = e0 ?? []), (eL[77] = e0), (eL[78] = H)) : (H = eL[78]),
        eL[79] !== nU ? ((G = nU ?? []), (eL[79] = nU), (eL[80] = G)) : (G = eL[80]),
        eL[81] !== eH ||
        eL[82] !== eK ||
        eL[83] !== nu ||
        eL[84] !== eD.completed ||
        eL[85] !== eD.shareSource ||
        eL[86] !== tJ ||
        eL[87] !== tz
          ? ((V =
              !nu && tJ && eD.completed && null != eD.shareSource && null != tz
                ? [
                    (0, a.jsx)(
                      tk,
                      {
                        conversationId: eH,
                        hostId: eK,
                        response: { turnId: tz, itemId: eD.shareSource.itemId, expectedText: eD.shareSource.text },
                      },
                      "share-response",
                    ),
                  ]
                : []),
            (eL[81] = eH),
            (eL[82] = eK),
            (eL[83] = nu),
            (eL[84] = eD.completed),
            (eL[85] = eD.shareSource),
            (eL[86] = tJ),
            (eL[87] = tz),
            (eL[88] = V))
          : (V = eL[88]),
        eL[89] !== H || eL[90] !== G || eL[91] !== V
          ? (($ = [...H, ...G, ...V]), (eL[89] = H), (eL[90] = G), (eL[91] = V), (eL[92] = $))
          : ($ = eL[92]))
      let nq = $,
        nW = nu && (e0?.length ?? 0) > 0 ? e0 : null,
        nH = eD.responseAnnotationTargetId?.trim() ? eD.responseAnnotationTargetId : void 0,
        nG = !eD.completed
      eL[93] !== eH || eL[94] !== nG || eL[95] !== eE
        ? ((K = { conversationId: eH, isStreaming: nG, turnId: eE }),
          (eL[93] = eH),
          (eL[94] = nG),
          (eL[95] = eE),
          (eL[96] = K))
        : (K = eL[96])
      let nV = K,
        n$ = (0, tr.L)((0, ts.h)((0, tP.qY)(nN)), eD.completed ? (te ?? {}) : null),
        nK = nu && null == nf && !ng,
        nZ = tL.U,
        nQ = e_.K,
        nJ = nK && "flex flex-col items-start gap-3",
        nY = tT && "activeCommentary-KL3bcr loading-shimmer"
      ;(eL[97] !== nJ || eL[98] !== nY
        ? ((Z = (0, c.A)("[&>*:last-child]:mb-0 [&>ol:first-child]:mt-0 [&>ul:first-child]:mt-0", nJ, nY)),
          (eL[97] = nJ),
          (eL[98] = nY),
          (eL[99] = Z))
        : (Z = eL[99]),
        eL[100] === Symbol.for("react.memo_cache_sentinel")
          ? ((Q = { kind: "assistant-message" }), (eL[100] = Q))
          : (Q = eL[100]),
        eL[101] !== eH || eL[102] !== eD.phase || eL[103] !== eD.searchItemId
          ? ((J = "commentary" === eD.phase ? void 0 : { kind: "adaptive", streamId: `${eH}:${eD.searchItemId}` }),
            (eL[101] = eH),
            (eL[102] = eD.phase),
            (eL[103] = eD.searchItemId),
            (eL[104] = J))
          : (J = eL[104]))
      let nX = nd ? td.V : void 0,
        n1 = (0, tn.N)(n$),
        n0 = eD.responseAnnotationTargetId ?? eD.searchItemId
      eL[105] !== eH || eL[106] !== na.value.routeTemplate || eL[107] !== e8
        ? ((Y =
            na.value.routeTemplate === h.s6j && null != e8
              ? {
                  conversationId: eH,
                  responseId: e8,
                  savedContentBackend: "CHATGPT_CONTENT_REFERENCE_SAVED_CONTENT_BACKEND_APP_SERVER",
                }
              : void 0),
          (eL[105] = eH),
          (eL[106] = na.value.routeTemplate),
          (eL[107] = e8),
          (eL[108] = Y))
        : (Y = eL[108])
      let n2 = !nw && (nh || !eD.completed),
        n3 = nu ? "underlined-text" : void 0,
        n4 = nh ? 16 : void 0,
        n5 = nh ? 96 : void 0,
        n6 = !eD.completed,
        n7 = t5 && null != nH && (!nd || "durable" !== (0, C._)(eK)) ? eQ : void 0
      ;(eL[109] !== nW || eL[110] !== eq || eL[111] !== nK
        ? ((X = nK ? (e, t) => (0, td.D)(e, t, eq, nW) : void 0),
          (eL[109] = nW),
          (eL[110] = eq),
          (eL[111] = nK),
          (eL[112] = X))
        : (X = eL[112]),
        eL[113] !== nQ ||
        eL[114] !== eH ||
        eL[115] !== e$ ||
        eL[116] !== tK ||
        eL[117] !== eG ||
        eL[118] !== eK ||
        eL[119] !== nr ||
        eL[120] !== nF ||
        eL[121] !== nc ||
        eL[122] !== eY ||
        eL[123] !== t5 ||
        eL[124] !== n$ ||
        eL[125] !== Z ||
        eL[126] !== Q ||
        eL[127] !== J ||
        eL[128] !== nX ||
        eL[129] !== n1 ||
        eL[130] !== n0 ||
        eL[131] !== Y ||
        eL[132] !== n2 ||
        eL[133] !== n3 ||
        eL[134] !== n4 ||
        eL[135] !== n5 ||
        eL[136] !== n6 ||
        eL[137] !== n7 ||
        eL[138] !== X ||
        eL[139] !== eE
          ? ((et = (0, a.jsx)(nQ, {
              className: Z,
              textStyle: Q,
              buffering: J,
              components: nX,
              extensions: n1,
              directiveIdPrefix: n0,
              conversationId: eH,
              getVisualizeTurnTriggerType: eG,
              cwd: e$,
              hostId: eK,
              mediaCacheKey: nc,
              turnId: eE,
              savedContentResponse: Y,
              allowWideBlocks: !0,
              animate: n2,
              directives: nF,
              externalLinkAppearance: n3,
              fadeSegmentDelayMs: n4,
              fadeSegmentMaxDelayMs: n5,
              isStreaming: n6,
              forceCodeBlockWordWrap: tK,
              isBrowserEnabled: nr,
              onAddSelectedTextToChat: n7,
              onFileLinkOpen: eY,
              openFileLinksInSidePanel: !0,
              renderCodeBlocksImmediately: !0,
              renderCodeBlocksAsWritingBlocks: t5,
              renderHtmlDetails: !0,
              renderInlineVisualizations: !0,
              renderRoot: X,
              children: n$,
            })),
            (eL[113] = nQ),
            (eL[114] = eH),
            (eL[115] = e$),
            (eL[116] = tK),
            (eL[117] = eG),
            (eL[118] = eK),
            (eL[119] = nr),
            (eL[120] = nF),
            (eL[121] = nc),
            (eL[122] = eY),
            (eL[123] = t5),
            (eL[124] = n$),
            (eL[125] = Z),
            (eL[126] = Q),
            (eL[127] = J),
            (eL[128] = nX),
            (eL[129] = n1),
            (eL[130] = n0),
            (eL[131] = Y),
            (eL[132] = n2),
            (eL[133] = n3),
            (eL[134] = n4),
            (eL[135] = n5),
            (eL[136] = n6),
            (eL[137] = n7),
            (eL[138] = X),
            (eL[139] = eE),
            (eL[140] = et))
          : (et = eL[140]),
        eL[141] !== nZ || eL[142] !== et || eL[143] !== nV
          ? ((en = (0, a.jsx)(nZ, { value: nV, children: et })),
            (eL[141] = nZ),
            (eL[142] = et),
            (eL[143] = nV),
            (eL[144] = en))
          : (en = eL[144]))
      let n8 = en
      eL[145] !== eD.sandboxFileSource || eL[146] !== n8
        ? ((ea = null == eD.sandboxFileSource ? n8 : (0, a.jsx)(ta.J, { value: eD.sandboxFileSource, children: n8 })),
          (eL[145] = eD.sandboxFileSource),
          (eL[146] = n8),
          (eL[147] = ea))
        : (ea = eL[147])
      let n9 = ea
      if (null != nf) {
        let e
        ;(eL[148] !== ny || eL[149] !== nf
          ? ((e = (0, a.jsx)(E, { action: nf, attachmentCount: ny })), (eL[148] = ny), (eL[149] = nf), (eL[150] = e))
          : (e = eL[150]),
          (n9 = e))
      } else if (ng) {
        let e, t, n
        ;(eL[151] !== ny || eL[152] !== eD.content
          ? ((e = (0, a.jsx)(tw, { text: eD.content, attachmentCount: ny })),
            (eL[151] = ny),
            (eL[152] = eD.content),
            (eL[153] = e))
          : (e = eL[153]),
          eL[154] !== nv || eL[155] !== eD.content || eL[156] !== eD.nativeMessage || eL[157] !== nx
            ? ((t =
                null == eD.nativeMessage || !0 === nx || nv
                  ? null
                  : (0, a.jsx)(th.M, {
                      roomId: eD.nativeMessage.roomId,
                      messageId: eD.nativeMessage.messageId,
                      bodyText: eD.content,
                      rowRef: nm,
                    })),
              (eL[154] = nv),
              (eL[155] = eD.content),
              (eL[156] = eD.nativeMessage),
              (eL[157] = nx),
              (eL[158] = t))
            : (t = eL[158]),
          eL[159] !== e || eL[160] !== t
            ? ((n = (0, a.jsxs)(a.Fragment, { children: [e, t] })), (eL[159] = e), (eL[160] = t), (eL[161] = n))
            : (n = eL[161]),
          (n9 = n))
      }
      eL[162] !== n$ ? ((ei = n$.trim()), (eL[162] = n$), (eL[163] = ei)) : (ei = eL[163])
      let ae = ei.length > 0,
        at = null != nf || ng || ae
      eL[164] !== eq || eL[165] !== at || eL[166] !== n9 || eL[167] !== nK
        ? ((el =
            nK || null == eq
              ? n9
              : (0, a.jsxs)(a.Fragment, {
                  children: [
                    at ? (0, a.jsx)("div", { className: t0.A.compactMessageBody, children: n9 }) : null,
                    (0, a.jsx)("div", { className: (0, c.A)(at && "border-t-2 border-surface"), children: eq }),
                  ],
                })),
          (eL[164] = eq),
          (eL[165] = at),
          (eL[166] = n9),
          (eL[167] = nK),
          (eL[168] = el))
        : (el = eL[168])
      let an = el
      eL[169] !== eq || eL[170] !== nK
        ? ((eo = nK
            ? "w-full min-w-0"
            : (0, c.A)("min-w-0", t0.A.compactMessageBubble, null != eq && t0.A.compactMessageBubbleWithAttachment)),
          (eL[169] = eq),
          (eL[170] = nK),
          (eL[171] = eo))
        : (eo = eL[171])
      let aa = eo,
        as = n9
      if (nu && (at || null != eq)) {
        let e
        ;(eL[172] !== aa || eL[173] !== an || eL[174] !== nw || eL[175] !== nh
          ? ((e = nw
              ? (0, a.jsx)(tc.r, { className: aa, reveal: nh, children: an })
              : (0, a.jsx)("div", { className: aa, children: an })),
            (eL[172] = aa),
            (eL[173] = an),
            (eL[174] = nw),
            (eL[175] = nh),
            (eL[176] = e))
          : (e = eL[176]),
          (as = e))
      }
      let ai = !0 === eD.renderPlaceholderWhileStreaming && !eD.completed
      if (
        eL[177] !== eH ||
        eL[178] !== ns ||
        eL[179] !== nd ||
        eL[180] !== nw ||
        eL[181] !== np ||
        eL[182] !== eD.completed ||
        eL[183] !== eD.externalDelivery ||
        eL[184] !== eD.sentAtMs ||
        eL[185] !== nC ||
        eL[186] !== nl ||
        eL[187] !== n$ ||
        eL[188] !== nH ||
        eL[189] !== nB ||
        eL[190] !== ai ||
        eL[191] !== tT ||
        eL[192] !== tY ||
        eL[193] !== nz
      ) {
        let e = ai ? "" : (0, tR._g)(n$, { isStreaming: !eD.completed }),
          t = tT ? S.d : void 0
        eL[204] !== nC || eL[205] !== t
          ? ((em = (0, t_.P)(nm, nC, t)), (eL[204] = nC), (eL[205] = t), (eL[206] = em))
          : (em = eL[206])
        let n = null == nH ? void 0 : eH
        ;(eL[207] !== nH || eL[208] !== n
          ? ((ep = { [j.Pg]: n, [j.hu]: nH }), (eL[207] = nH), (eL[208] = n), (eL[209] = ep))
          : (ep = eL[209]),
          (eh = "group flex min-w-0 flex-col"),
          eL[210] !== ns ||
          eL[211] !== nd ||
          eL[212] !== eD.sentAtMs ||
          eL[213] !== nl ||
          eL[214] !== nB ||
          eL[215] !== tY ||
          eL[216] !== nz
            ? ((eb =
                (nd || nz) && !tY && !nB && null != eD.sentAtMs
                  ? (0, A.S)({
                      intl: ns,
                      sentAtMs: eD.sentAtMs,
                      now: new Date(),
                      useRelativeDayLabel: "chat-refresh" === nl,
                    })
                  : void 0),
              (eL[210] = ns),
              (eL[211] = nd),
              (eL[212] = eD.sentAtMs),
              (eL[213] = nl),
              (eL[214] = nB),
              (eL[215] = tY),
              (eL[216] = nz),
              (eL[217] = eb))
            : (eb = eL[217]),
          eL[218] === Symbol.for("react.memo_cache_sentinel")
            ? ((ej = (0, a.jsx)(k.m, { speaker: "assistant" })), (eL[218] = ej))
            : (ej = eL[218]),
          eL[219] !== eH || eL[220] !== eD.externalDelivery
            ? ((eA =
                null != eD.externalDelivery ? (0, a.jsx)(tp.Q, { conversationId: eH, ...eD.externalDelivery }) : null),
              (eL[219] = eH),
              (eL[220] = eD.externalDelivery),
              (eL[221] = eA))
            : (eA = eL[221]),
          (er = nn),
          (ec = nw && !0 === np),
          (ed = eD.completed),
          (eu = eD.completed ? e : (0, ey.gJ)(e)),
          (eL[177] = eH),
          (eL[178] = ns),
          (eL[179] = nd),
          (eL[180] = nw),
          (eL[181] = np),
          (eL[182] = eD.completed),
          (eL[183] = eD.externalDelivery),
          (eL[184] = eD.sentAtMs),
          (eL[185] = nC),
          (eL[186] = nl),
          (eL[187] = n$),
          (eL[188] = nH),
          (eL[189] = nB),
          (eL[190] = ai),
          (eL[191] = tT),
          (eL[192] = tY),
          (eL[193] = nz),
          (eL[194] = er),
          (eL[195] = ec),
          (eL[196] = ed),
          (eL[197] = eu),
          (eL[198] = em),
          (eL[199] = ep),
          (eL[200] = eh),
          (eL[201] = eb),
          (eL[202] = ej),
          (eL[203] = eA))
      } else
        ((er = eL[194]),
          (ec = eL[195]),
          (ed = eL[196]),
          (eu = eL[197]),
          (em = eL[198]),
          (ep = eL[199]),
          (eh = eL[200]),
          (eb = eL[201]),
          (ej = eL[202]),
          (eA = eL[203]))
      let al = String(eD.searchItemId ?? eD.responseAnnotationTargetId ?? eD.sentAtMs ?? "active")
      return (
        eL[222] !== eH ||
        eL[223] !== e$ ||
        eL[224] !== f ||
        eL[225] !== t$ ||
        eL[226] !== ec ||
        eL[227] !== ed ||
        eL[228] !== eu ||
        eL[229] !== al
          ? ((eI = {
              announceCompletedOnMount: ec,
              completed: ed,
              content: eu,
              conversationId: eH,
              cwd: e$,
              itemId: al,
              plainText: f,
              projectlessOutputDirectory: t$,
            }),
            (eL[222] = eH),
            (eL[223] = e$),
            (eL[224] = f),
            (eL[225] = t$),
            (eL[226] = ec),
            (eL[227] = ed),
            (eL[228] = eu),
            (eL[229] = al),
            (eL[230] = eI))
          : (eI = eL[230]),
        eL[231] !== er || eL[232] !== eI
          ? ((ek = (0, a.jsx)(er, { input: eI })), (eL[231] = er), (eL[232] = eI), (eL[233] = ek))
          : (ek = eL[233]),
        eL[234] !== nq ||
        eL[235] !== nW ||
        eL[236] !== ez ||
        eL[237] !== tF ||
        eL[238] !== eU ||
        eL[239] !== nk ||
        eL[240] !== nI ||
        eL[241] !== e1 ||
        eL[242] !== eH ||
        eL[243] !== nA ||
        eL[244] !== nT ||
        eL[245] !== eW ||
        eL[246] !== nE ||
        eL[247] !== nj ||
        eL[248] !== tZ ||
        eL[249] !== ae ||
        eL[250] !== eB ||
        eL[251] !== eD.completed ||
        eL[252] !== eD.computerHandoff ||
        eL[253] !== eD.requestUserInputAsync?.questionIndex ||
        eL[254] !== eD.sentAtMs ||
        eL[255] !== eD.structuredOutput ||
        eL[256] !== n_ ||
        eL[257] !== as ||
        eL[258] !== eX ||
        eL[259] !== e2?.length ||
        eL[260] !== e4 ||
        eL[261] !== tQ ||
        eL[262] !== na.value.conversationId ||
        eL[263] !== na.value.routeKind ||
        eL[264] !== nM ||
        eL[265] !== nB ||
        eL[266] !== ai ||
        eL[267] !== tJ ||
        eL[268] !== tY ||
        eL[269] !== tX ||
        eL[270] !== tz ||
        eL[271] !== nK ||
        eL[272] !== t1 ||
        eL[273] !== e3 ||
        eL[274] !== eE
          ? ((eS = ai
              ? (0, a.jsx)("div", {
                  className: "flex w-full items-center justify-center pt-8",
                  children: (0, a.jsx)(T.y, { className: "icon-sm" }),
                })
              : (0, a.jsxs)(a.Fragment, {
                  children: [
                    tY &&
                    null != eD.sentAtMs &&
                    (eD.requestUserInputAsync?.questionIndex ?? 0) === 0 &&
                    (ae || null != eD.structuredOutput)
                      ? (0, a.jsx)("div", {
                          className: "mb-3 select-none",
                          children: (0, a.jsx)(I.J, { sentAtMs: eD.sentAtMs }),
                        })
                      : null,
                    nK || null == nW
                      ? as
                      : (0, a.jsxs)("div", { className: "flex max-w-full items-center gap-2", children: [as, nW] }),
                    null != eD.computerHandoff && "local-thread" === na.value.routeKind
                      ? (0, a.jsx)("div", {
                          className: "mt-3",
                          children: (0, a.jsx)(tm._, {
                            conversationId: na.value.conversationId,
                            handoff: eD.computerHandoff,
                          }),
                        })
                      : null,
                    !nM && nk.length > 0
                      ? (0, a.jsx)("div", {
                          children: nk.map((e) =>
                            (0, a.jsx)(
                              eR.N,
                              {
                                ...e.arguments,
                                elicitation: {
                                  threadId: eH,
                                  turnId: tz,
                                  itemId: e.callId,
                                  elicitationType: "automation_schedule",
                                },
                                result: e.result,
                              },
                              e.callId,
                            ),
                          ),
                        })
                      : null,
                    0 === nT.length
                      ? null
                      : (0, a.jsx)("div", { className: "mt-3", children: (0, a.jsx)(tB.o, { results: nT }) }),
                    null != ez ? (0, a.jsx)("div", { className: "mt-3", children: ez }) : null,
                    (0, a.jsx)(a.Fragment, {
                      children: null != eW ? (0, a.jsx)("div", { className: "mt-3", children: eW }) : null,
                    }),
                    nB
                      ? (0, a.jsx)(ni, {
                          alwaysShowActions: tJ && (tF || (e2?.length ?? 0) > 0),
                          turnId: tJ ? eE : void 0,
                          copyText: tJ && nI ? nA : void 0,
                          getCopyText: tJ ? nj : void 0,
                          getCopyHtml: tJ ? nE : void 0,
                          sentAtMs: tY ? null : eD.sentAtMs,
                          threadId: eH,
                          reportEntityType: tQ,
                          autoReviewStats: tJ ? eU : null,
                          hookStats: tJ ? eB : null,
                          memoryCitationEntries: tJ ? n_ : t4,
                          completedThreadGoal: tJ && eD.completed ? e1 : null,
                          hasArtifacts: tZ,
                          onFork: tJ && eD.completed ? eX : void 0,
                          showTimestampWithoutActions: tX,
                          timestampHoverOnly: t1,
                          additionalActions: nq,
                          feedbackBeforeActions: !0,
                          trailingActions: e3,
                          renderUsedSkillsDetails: e4,
                        })
                      : null,
                  ],
                })),
            (eL[234] = nq),
            (eL[235] = nW),
            (eL[236] = ez),
            (eL[237] = tF),
            (eL[238] = eU),
            (eL[239] = nk),
            (eL[240] = nI),
            (eL[241] = e1),
            (eL[242] = eH),
            (eL[243] = nA),
            (eL[244] = nT),
            (eL[245] = eW),
            (eL[246] = nE),
            (eL[247] = nj),
            (eL[248] = tZ),
            (eL[249] = ae),
            (eL[250] = eB),
            (eL[251] = eD.completed),
            (eL[252] = eD.computerHandoff),
            (eL[253] = eD.requestUserInputAsync?.questionIndex),
            (eL[254] = eD.sentAtMs),
            (eL[255] = eD.structuredOutput),
            (eL[256] = n_),
            (eL[257] = as),
            (eL[258] = eX),
            (eL[259] = e2?.length),
            (eL[260] = e4),
            (eL[261] = tQ),
            (eL[262] = na.value.conversationId),
            (eL[263] = na.value.routeKind),
            (eL[264] = nM),
            (eL[265] = nB),
            (eL[266] = ai),
            (eL[267] = tJ),
            (eL[268] = tY),
            (eL[269] = tX),
            (eL[270] = tz),
            (eL[271] = nK),
            (eL[272] = t1),
            (eL[273] = e3),
            (eL[274] = eE),
            (eL[275] = eS))
          : (eS = eL[275]),
        eL[276] !== em ||
        eL[277] !== ep ||
        eL[278] !== eh ||
        eL[279] !== eb ||
        eL[280] !== ej ||
        eL[281] !== eA ||
        eL[282] !== ek ||
        eL[283] !== eS
          ? ((eP = (0, a.jsxs)("div", { ref: em, ...ep, className: eh, title: eb, children: [ej, eA, ek, eS] })),
            (eL[276] = em),
            (eL[277] = ep),
            (eL[278] = eh),
            (eL[279] = eb),
            (eL[280] = ej),
            (eL[281] = eA),
            (eL[282] = ek),
            (eL[283] = eS),
            (eL[284] = eP))
          : (eP = eL[284]),
        eP
      )
    }
    function t8(e) {
      return e.path.trim().length > 0
    }
    function t9(e, t) {
      let n = no(e)
      return null == n ? `:${ey.Ui}{index="${t}"}` : `:${ey.Ui}{index="${t}" automation_id="${n}"}`
    }
    function ne(e) {
      return e.finished
    }
    function nt(e) {
      return e.effect?.getComputedTiming().iterations !== 1 / 0
    }
    function nn(e) {
      let t,
        n,
        i,
        l,
        o,
        r,
        c,
        d = (0, s.c)(37),
        { input: p } = e,
        h = (0, m.gh)(eM.u),
        { announceCompletedOnMount: f, completed: g, content: x, conversationId: w, itemId: b } = p,
        C = (0, y.A)(),
        j = (0, v.useRef)(null)
      d[0] !== C.locale ? ((t = (0, tN.yE)("word", C.locale)), (d[0] = C.locale), (d[1] = t)) : (t = d[1])
      let A = t
      d[2] !== x ||
      d[3] !== p.cwd ||
      d[4] !== p.plainText ||
      d[5] !== p.projectlessOutputDirectory ||
      d[6] !== C ||
      d[7] !== A
        ? ((n = u()(() => {
            let e =
                p.plainText ?? na(x, { cwd: p.cwd, intl: C, projectlessOutputDirectory: p.projectlessOutputDirectory }),
              t = (0, tN.Td)(e, A)
            return null == t ? e : e.slice(0, t).trimEnd()
          })),
          (d[2] = x),
          (d[3] = p.cwd),
          (d[4] = p.plainText),
          (d[5] = p.projectlessOutputDirectory),
          (d[6] = C),
          (d[7] = A),
          (d[8] = n))
        : (n = d[8])
      let I = n
      ;(d[9] !== w || d[10] !== I || d[11] !== C || d[12] !== b || d[13] !== h || d[14] !== A
        ? ((i = () => {
            let e = j.current,
              t = h.get(t5, w),
              n = t.get(b)
            if (null == e || null == n) return
            let a = I(),
              s = ns(a, n, A)
            0 !== s.length &&
              ((e.textContent = C.formatMessage(
                {
                  id: "localConversation.assistantResponse.announcement.progress",
                  defaultMessage: "Response: {content}",
                  description:
                    "Polite screen-reader announcement containing the latest newly received plain-text portion of a streaming assistant response",
                },
                { content: s },
              )),
              t.set(b, a))
          }),
          (d[9] = w),
          (d[10] = I),
          (d[11] = C),
          (d[12] = b),
          (d[13] = h),
          (d[14] = A),
          (d[15] = i))
        : (i = d[15]),
        (0, tT.$)(i, g ? null : 5e3),
        d[16] !== f ||
        d[17] !== g ||
        d[18] !== x ||
        d[19] !== w ||
        d[20] !== p.cwd ||
        d[21] !== p.plainText ||
        d[22] !== p.projectlessOutputDirectory ||
        d[23] !== C ||
        d[24] !== b ||
        d[25] !== h ||
        d[26] !== A
          ? ((l = () => {
              let e = j.current
              if (null == e) return
              let t = h.get(t5, w),
                n = t.get(b)
              if (!g) {
                if (null != n) return
                ;(t.set(b, ""),
                  (e.textContent = C.formatMessage({
                    id: "localConversation.assistantResponse.announcement.started",
                    defaultMessage: "Response started",
                    description:
                      "Polite screen-reader announcement indicating that an assistant response has started streaming",
                  })))
                return
              }
              if (null == n && !f) return
              let a =
                  p.plainText ??
                  na(x, { cwd: p.cwd, intl: C, projectlessOutputDirectory: p.projectlessOutputDirectory }),
                s = null == n ? a : ns(a, n, A)
              ;((e.textContent =
                0 === s.length
                  ? C.formatMessage({
                      id: "localConversation.assistantResponse.announcement.completed",
                      defaultMessage: "Response complete",
                      description:
                        "Polite screen-reader announcement indicating that an assistant response has finished streaming",
                    })
                  : C.formatMessage(
                      {
                        id: "localConversation.assistantResponse.announcement.completedWithContent",
                        defaultMessage: "Response complete: {content}",
                        description:
                          "Polite screen-reader announcement indicating that an assistant response finished streaming and containing its final, previously unannounced plain-text portion",
                      },
                      { content: s },
                    )),
                t.delete(b))
            }),
            (d[16] = f),
            (d[17] = g),
            (d[18] = x),
            (d[19] = w),
            (d[20] = p.cwd),
            (d[21] = p.plainText),
            (d[22] = p.projectlessOutputDirectory),
            (d[23] = C),
            (d[24] = b),
            (d[25] = h),
            (d[26] = A),
            (d[27] = l))
          : (l = d[27]))
      let k = (0, v.useEffectEvent)(l)
      return (
        d[28] !== k || d[29] !== g
          ? ((o = () => {
              if ((k(), !g || !j.current?.textContent)) return
              let e = window.setTimeout(() => {
                null != j.current && (j.current.textContent = "")
              }, 5e3)
              return () => {
                window.clearTimeout(e)
              }
            }),
            (d[28] = k),
            (d[29] = g),
            (d[30] = o))
          : (o = d[30]),
        d[31] !== g || d[32] !== w || d[33] !== b || d[34] !== h
          ? ((r = [g, w, b, h]), (d[31] = g), (d[32] = w), (d[33] = b), (d[34] = h), (d[35] = r))
          : (r = d[35]),
        (0, v.useEffect)(o, r),
        d[36] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)("span", {
              ref: j,
              className: "sr-only",
              "aria-atomic": "true",
              "aria-live": "polite",
              role: "status",
            })),
            (d[36] = c))
          : (c = d[36]),
        c
      )
    }
    function na(e, { cwd: t, intl: n, projectlessOutputDirectory: a }) {
      return (0, g.i)(
        (function (e, { intl: t, shouldRenderPath: n }) {
          let a = e
          for (let s of (0, f.Q)(e).reverse()) {
            let e = s.citation,
              i = ""
            ;(null != e &&
              ("source" === e.purpose || n?.(e.path) !== !1) &&
              (i = (0, to.b)({
                artifactCitation: e.artifactCitation,
                intl: t,
                lineRangeEnd: e.lineRangeEnd,
                lineRangeStart: e.lineRangeStart,
                path: e.path,
              })),
              (a = a.slice(0, s.sourceStart) + i + a.slice(s.sourceEnd)))
          }
          return a
        })(e, {
          intl: n,
          shouldRenderPath:
            null == a ? void 0 : (e) => (0, eT.T)({ cwd: t, projectlessOutputDirectory: a, resourcePath: e }),
        }),
      )
    }
    function ns(e, t, n) {
      let a = 0
      for (; a < e.length && a < t.length && e[a] === t[a];) a += 1
      if (a < t.length) {
        let s = (0, tN.$N)(t, n, "word-like"),
          i = (0, tN.$N)(e, n, "word-like")
        for (let e = 0; e < s.length; e += 1) {
          let t = i[e]
          if (null == t || t.segment !== s[e]?.segment) break
          a = Math.max(a, t.index + t.segment.length)
        }
      }
      return e.slice(a).trim()
    }
    function ni(e) {
      let t,
        n,
        l,
        o,
        r,
        d,
        u,
        p,
        h = (0, s.c)(57),
        {
          tooltipSide: f,
          ratingControls: g,
          renderRatingControl: w,
          alwaysShowActions: b,
          turnId: C,
          autoReviewStats: j,
          hookStats: A,
          memoryCitationEntries: k,
          completedThreadGoal: S,
          copyText: N,
          getCopyText: T,
          forkDisabled: _,
          forkLabel: R,
          getCopyHtml: P,
          onCopyText: L,
          onCopySucceeded: D,
          isForking: F,
          onFork: E,
          sentAtMs: O,
          threadId: U,
          hasArtifacts: z,
          reportEntityType: q,
          showTimestampWithoutActions: W,
          timestampHoverOnly: H,
          additionalActions: G,
          feedbackBeforeActions: V,
          endAction: $,
          beforeOverflowActions: K,
          overflowActions: Z,
          persistentAdditionalActions: Q,
          trailingActions: J,
          renderUsedSkillsDetails: Y,
          actionRowRef: X,
        } = e,
        ee = void 0 === f ? "top" : f,
        et = void 0 !== b && b,
        en = void 0 === k ? t4 : k,
        ea = void 0 !== _ && _,
        es = void 0 !== F && F,
        ei = void 0 !== z && z,
        el = void 0 === q ? "thread" : q,
        eo = void 0 !== H && H,
        er = void 0 !== V && V,
        ec = (0, y.A)(),
        eu = (0, m.Ul)(tC.YV),
        em = (0, m.Ul)(B.$),
        [ep, eh] = (0, v.useState)(!1)
      h[0] !== R || h[1] !== ec
        ? ((t =
            R ??
            ec.formatMessage({
              id: "assistantMessageContent.forkAriaLabel",
              defaultMessage: "Fork chat from here",
              description: "Aria label for the button that forks the chat from an assistant message",
            })),
          (h[0] = R),
          (h[1] = ec),
          (h[2] = t))
        : (t = h[2])
      let ef = t,
        eg = null != N && N.trim().length > 0 ? N : null,
        ex = em && null != C && null != eu.submitCodexAnalyticsEvent
      h[3] !== ei || h[4] !== w || h[5] !== el || h[6] !== ex || h[7] !== U || h[8] !== C
        ? ((n = ex
            ? (0, a.jsx)(tz.r, { hasArtifacts: ei, reportEntityType: el, renderControl: w, threadId: U, turnId: C })
            : null),
          (h[3] = ei),
          (h[4] = w),
          (h[5] = el),
          (h[6] = ex),
          (h[7] = U),
          (h[8] = C),
          (h[9] = n))
        : (n = h[9])
      let ev = n,
        ey =
          null != eg ||
          null != j ||
          null != A ||
          en.length > 0 ||
          null != S ||
          null != E ||
          ex ||
          null != g ||
          (G?.length ?? 0) > 0 ||
          null != K ||
          null != Z ||
          null != Y ||
          (Q?.length ?? 0) > 0 ||
          (J?.length ?? 0) > 0
      if (!(ey || null != $ || (void 0 !== W && W && null != O))) return null
      let ew = "top" === ee && "[--side-tooltip:top]",
        eb = "bottom" === ee && "[--side-tooltip:bottom]"
      return (
        h[10] !== ew || h[11] !== eb
          ? ((l = (0, c.A)(
              t0.A.actionRow,
              "mt-1.5 flex turn-action-controls min-h-5 min-w-0 max-w-(--thread-content-max-width) flex-wrap items-center justify-start gap-0.5 browser:-ms-0.5 browser:mt-3 electron:-translate-x-1 extension:-translate-x-1.5 [&_button]:focus-visible:ring-2 [&_button]:focus-visible:ring-ring [&_button]:focus-visible:ring-offset-0",
              ew,
              eb,
            )),
            (h[10] = ew),
            (h[11] = eb),
            (h[12] = l))
          : (l = h[12]),
        h[13] !== G ||
        h[14] !== et ||
        h[15] !== j ||
        h[16] !== K ||
        h[17] !== S ||
        h[18] !== eg ||
        h[19] !== ev ||
        h[20] !== er ||
        h[21] !== ef ||
        h[22] !== ea ||
        h[23] !== P ||
        h[24] !== T ||
        h[25] !== ey ||
        h[26] !== A ||
        h[27] !== ec ||
        h[28] !== es ||
        h[29] !== ep ||
        h[30] !== en ||
        h[31] !== D ||
        h[32] !== L ||
        h[33] !== E ||
        h[34] !== Z ||
        h[35] !== Q ||
        h[36] !== eu ||
        h[37] !== g ||
        h[38] !== Y ||
        h[39] !== U ||
        h[40] !== J ||
        h[41] !== C
          ? ((o = ey
              ? (0, a.jsxs)("div", {
                  className: (0, c.A)(
                    "flex min-h-5 min-w-0 flex-wrap items-center gap-0.5 browser:gap-0",
                    et || ep ? void 0 : "opacity-0 group-focus-within:opacity-100 group-hover:opacity-100",
                  ),
                  children: [
                    null != eg
                      ? (0, a.jsx)(M.i, {
                          iconOnly: !0,
                          iconClassName: "icon-xs",
                          buttonText: ec.formatMessage({
                            id: "assistantMessageContent.copyResponseTooltip",
                            defaultMessage: "Copy response",
                            description: "Tooltip for the button beneath an assistant message that copies the response",
                          }),
                          onCopy: (e) => {
                            null != C &&
                              eu.submitCodexAnalyticsEvent?.({
                                action: "copy",
                                eventKind: "action",
                                metadata: { surface: "assistant_message" },
                                threadId: U,
                                turnId: C,
                              })
                            let t = P?.(),
                              n = (0, x.x)(T?.() ?? eg)
                            return (
                              L?.(n, e),
                              (0, tM.E)(null == t ? n : { "text/plain": n, "text/html": t }, e).then(
                                (t) => (t && D?.(n, e), t),
                              )
                            )
                          },
                        })
                      : null,
                    !er && G,
                    !er && Q,
                    void 0 === g ? ev : g,
                    er && G,
                    er && Q,
                    null != j && j.rejectedCount > 0 ? (0, a.jsx)(ed, { stats: j }) : null,
                    K,
                    Z ??
                      (0, a.jsx)(tY, {
                        autoReviewStats: j,
                        hookStats: A,
                        memoryCitationEntries: en,
                        renderUsedSkillsDetails: Y,
                        forkDisabled: ea,
                        forkLabel: ef,
                        isForking: es,
                        onFork: E,
                        open: ep,
                        onOpenChange: eh,
                      }),
                    null != S ? (0, a.jsx)(nl, { goal: S }) : null,
                    J,
                  ],
                })
              : null),
            (h[13] = G),
            (h[14] = et),
            (h[15] = j),
            (h[16] = K),
            (h[17] = S),
            (h[18] = eg),
            (h[19] = ev),
            (h[20] = er),
            (h[21] = ef),
            (h[22] = ea),
            (h[23] = P),
            (h[24] = T),
            (h[25] = ey),
            (h[26] = A),
            (h[27] = ec),
            (h[28] = es),
            (h[29] = ep),
            (h[30] = en),
            (h[31] = D),
            (h[32] = L),
            (h[33] = E),
            (h[34] = Z),
            (h[35] = Q),
            (h[36] = eu),
            (h[37] = g),
            (h[38] = Y),
            (h[39] = U),
            (h[40] = J),
            (h[41] = C),
            (h[42] = o))
          : (o = h[42]),
        h[43] !== O || h[44] !== eo
          ? ((r =
              null != O
                ? (0, a.jsx)("span", {
                    className: (0, c.A)(
                      "ms-1.5 flex min-h-5 shrink-0 items-center",
                      eo
                        ? "opacity-0 group-hover:opacity-100"
                        : "opacity-0 group-focus-within:opacity-100 group-hover:opacity-100",
                    ),
                    "data-assistant-message-sent-time": !0,
                    children: (0, a.jsx)(I.J, { sentAtMs: O }),
                  })
                : null),
            (h[43] = O),
            (h[44] = eo),
            (h[45] = r))
          : (r = h[45]),
        h[46] !== $
          ? ((d =
              null != $ ? (0, a.jsx)("div", { className: "ms-auto flex shrink-0 items-center", children: $ }) : null),
            (h[46] = $),
            (h[47] = d))
          : (d = h[47]),
        h[48] !== X || h[49] !== l || h[50] !== o || h[51] !== r || h[52] !== d
          ? ((u = (0, a.jsxs)("div", { ref: X, className: l, children: [o, r, d] })),
            (h[48] = X),
            (h[49] = l),
            (h[50] = o),
            (h[51] = r),
            (h[52] = d),
            (h[53] = u))
          : (u = h[53]),
        h[54] !== u || h[55] !== ee
          ? ((p = (0, a.jsx)(i.m.DefaultsProvider, { side: ee, children: u })), (h[54] = u), (h[55] = ee), (h[56] = p))
          : (p = h[56]),
        p
      )
    }
    function nl(e) {
      let t,
        n,
        i,
        r,
        c = (0, s.c)(6),
        { goal: d } = e
      ;(c[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, a.jsx)("span", { className: "h-3 border-s border-default" })), (c[0] = t))
        : (t = c[0]),
        c[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)(_.b5, {
              className: "shrink-0",
              "aria-hidden": !1,
              icon: { assets: { 16: l.t, 20: o.Y } },
            })),
            (c[1] = n))
          : (n = c[1]))
      let u = 1e3 * d.timeUsedSeconds
      return (
        c[2] !== u ? ((i = (0, eb.a)(u)), (c[2] = u), (c[3] = i)) : (i = c[3]),
        c[4] !== i
          ? ((r = (0, a.jsxs)("span", {
              className: "ms-1.5 flex h-full items-center gap-1.5 text-xs leading-5 text-tertiary",
              children: [
                t,
                n,
                (0, a.jsx)(w.A, {
                  id: "assistantMessageContent.goalAchieved",
                  defaultMessage: "Goal achieved in {totalTime}",
                  description: "Assistant action row label shown when a thread goal was completed",
                  values: { totalTime: i },
                }),
              ],
            })),
            (c[4] = i),
            (c[5] = r))
          : (r = c[5]),
        r
      )
    }
    function no(e) {
      return e.result?.automationId ?? e.arguments.id ?? null
    }
  },
  cP3L(e, t, n) {
    var a = n("iwl5"),
      s = n("JGl5")
    n.d(
      t,
      {},
      {
        $: function (e) {
          let t
          if ("mcp-tool-call" === e.type && "codex_app" === e.invocation.server && e.invocation.tool === a.ab)
            t = e.invocation.arguments
          else {
            if ("dynamic-tool-call" !== e.type || (null != e.namespace && e.namespace !== s.PD) || e.tool !== a.ab)
              return null
            t = e.arguments
          }
          let n = a.iO.safeParse(t).data
          return n?.target.type !== "browser" || n.target.url?.startsWith("codex:") ? null : { ...n, target: n.target }
        },
      },
    )
  },
  PYPx(e, t, n) {
    var a = n("ABep"),
      s = n("QosV"),
      i = n("zd8w"),
      l = n("Bbed"),
      o = n("CxEf")
    let r = (0, l._)(
        async () =>
          (
            await Promise.all([
              n.e(293648),
              n.e(560170),
              n.e(872923),
              n.e(496120),
              n.e(136167),
              n.e(999152),
              n.e(198306),
            ]).then(n.bind(n, "sw4Z"))
          ).DiffHighlightPreloader,
      ),
      c = (0, l._)(
        async () =>
          (
            await Promise.all([
              n.e(293648),
              n.e(560170),
              n.e(872923),
              n.e(496120),
              n.e(136167),
              n.e(999152),
              n.e(198306),
            ]).then(n.bind(n, "sw4Z"))
          ).DiffPreviewContent,
      )
    n.d(
      t,
      {},
      {
        d: function (e) {
          let t,
            n,
            l,
            d,
            u,
            m = (0, s.c)(18),
            { children: p, diff: h, disabled: f, displayPath: g, linesAdded: x, linesRemoved: v, onOpen: y } = e,
            w = void 0 !== f && f,
            [b, C] = (0, i.useState)(!1)
          m[0] !== h || m[1] !== b
            ? ((t = b ? (0, a.jsx)(r, { fileDiff: h.metadata }) : null), (m[0] = h), (m[1] = b), (m[2] = t))
            : (t = m[2])
          let j = w ? "disabled" : "enabled"
          return (
            m[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = () => {
                  C(!0)
                }),
                (m[3] = n))
              : (n = m[3]),
            m[4] !== h || m[5] !== g || m[6] !== x || m[7] !== v || m[8] !== y
              ? ((l = (0, a.jsx)(c, { diff: h, displayPath: g, linesAdded: x, linesRemoved: v, onOpen: y })),
                (m[4] = h),
                (m[5] = g),
                (m[6] = x),
                (m[7] = v),
                (m[8] = y),
                (m[9] = l))
              : (l = m[9]),
            m[10] !== p || m[11] !== w || m[12] !== j || m[13] !== l
              ? ((d = (0, a.jsx)(
                  o.m,
                  {
                    align: "center",
                    closeOnTriggerBlur: !1,
                    delayDuration: 800,
                    disabled: w,
                    interactive: !0,
                    onPointerEnter: n,
                    side: "top",
                    sideOffset: 0,
                    skipDelayKey: "diff-preview",
                    tooltipBodyClassName: "h-full",
                    tooltipClassName:
                      "group/diff-preview pointer-events-none flex h-[min(420px,var(--radix-tooltip-content-available-height,420px),calc(100vh-16px))] flex-col justify-end overflow-visible data-[side]:w-[clamp(0px,calc(var(--radix-tooltip-trigger-width,0px)-64px),var(--radix-tooltip-content-available-width,100vw))] data-[side=bottom]:justify-start",
                    tooltipMaxWidth:
                      "clamp(0px, calc(var(--radix-tooltip-trigger-width) - 64px), var(--radix-tooltip-content-available-width))",
                    variant: "unstyled",
                    tooltipContent: l,
                    children: p,
                  },
                  j,
                )),
                (m[10] = p),
                (m[11] = w),
                (m[12] = j),
                (m[13] = l),
                (m[14] = d))
              : (d = m[14]),
            m[15] !== t || m[16] !== d
              ? ((u = (0, a.jsxs)(a.Fragment, { children: [t, d] })), (m[15] = t), (m[16] = d), (m[17] = u))
              : (u = m[17]),
            u
          )
        },
      },
    )
  },
  iwvb(e, t, n) {
    n.d(t, { w: () => M })
    var a = n("ABep"),
      s = n("QosV"),
      i = n("zTeN"),
      l = n("MtDh"),
      o = n("BI7J"),
      r = n("acby"),
      c = n("on57"),
      d = n("mo2i"),
      u = n.n(d),
      m = n("dVEH"),
      p = n.n(m),
      h = n("JGl5"),
      f = n("oyxz"),
      g = n("Qgfj"),
      x = n("ugrQ"),
      v = n("dqpP"),
      y = n("Sm6l"),
      w = n("J0Jr"),
      b = n("DYB3"),
      C = n("umSm")
    let j = {
        automation_update: "scheduled task updated",
        load_workspace_dependencies: "loaded workspace dependencies",
        pia_slackbot_dm: "Pia Slackbot DM",
      },
      A = {
        automation_update: "updating scheduled task",
        load_workspace_dependencies: "loading workspace dependencies",
        pia_slackbot_dm: "Pia Slackbot DM",
      }
    function I(e) {
      let t,
        n,
        i,
        l,
        o,
        d,
        m,
        g,
        I,
        M = (0, s.c)(32),
        { isLeadingSummaryPart: S, item: N, onClick: T, variant: _ } = e,
        R = void 0 === S || S,
        P = void 0 === _ ? "row" : _
      if (M[0] !== R || M[1] !== N || M[2] !== P) {
        let e,
          s = (0, r.rF)(N)
        ;(M[6] !== R || M[7] !== N ? ((e = (0, b.$9)(N, R)), (M[6] = R), (M[7] = N), (M[8] = e)) : (e = M[8]),
          (n = e),
          (t = n?.message ?? s?.getActivityMessage?.(N, R)),
          (i =
            "summary-text" === P
              ? null
              : (n?.icon ??
                s?.renderAgentActivityIcon?.(N) ??
                (N.namespace === h.PD ? (0, a.jsx)(w._, { className: "icon-xs shrink-0 text-secondary" }) : null))),
          (M[0] = R),
          (M[1] = N),
          (M[2] = P),
          (M[3] = t),
          (M[4] = n),
          (M[5] = i))
      } else ((t = M[3]), (n = M[4]), (i = M[5]))
      let L = i,
        D = null != L && "max-w-full",
        F = "row" === P ? "group-hover:text-default" : "group-hover/activity-header:text-default"
      M[9] !== D || M[10] !== F
        ? ((l = (0, c.A)("text-size-chat text-text/40", D, F)), (M[9] = D), (M[10] = F), (M[11] = l))
        : (l = M[11])
      let E = !N.completed,
        O = null != L && "min-w-0 truncate"
      ;(M[12] !== O ? ((o = (0, c.A)(O)), (M[12] = O), (M[13] = o)) : (o = M[13]),
        M[14] !== R || M[15] !== N || M[16] !== t || M[17] !== n?.values
          ? ((d =
              null == t
                ? (function (e, t) {
                    if (e.tool === x.mI)
                      return e.completed
                        ? (0, a.jsx)(f.A, {
                            ...(t ? k.readTaskTerminalCompleted : k.readTaskTerminalCompletedFollowing),
                          })
                        : (0, a.jsx)(f.A, { ...k.readTaskTerminalInProgress })
                    let n = (e.completed ? j[e.tool] : A[e.tool]) ?? u()(e.tool)
                    return (0, a.jsx)(f.A, {
                      id: "localConversation.dynamicToolCall",
                      defaultMessage: "{toolName}",
                      description: "Synthetic item shown for a dynamic tool call without a specialized renderer.",
                      values: { toolName: t ? p()(n) : n },
                    })
                  })(N, R)
                : (0, a.jsx)(f.A, { ...t, values: n?.values })),
            (M[14] = R),
            (M[15] = N),
            (M[16] = t),
            (M[17] = n?.values),
            (M[18] = d))
          : (d = M[18]),
        M[19] !== d || M[20] !== E || M[21] !== o
          ? ((m = (0, a.jsx)(C.N, { active: E, className: o, children: d })),
            (M[19] = d),
            (M[20] = E),
            (M[21] = o),
            (M[22] = m))
          : (m = M[22]),
        M[23] !== L || M[24] !== m || M[25] !== l
          ? ((g = (0, a.jsxs)(v.F, { className: l, children: [L, m] })),
            (M[23] = L),
            (M[24] = m),
            (M[25] = l),
            (M[26] = g))
          : (g = M[26]))
      let U = g
      if ("row" !== P) return U
      if (null != T) {
        let e
        return (
          M[27] !== U || M[28] !== T
            ? ((e = (0, a.jsx)(y.$, {
                color: "ghostTertiary",
                className:
                  "group !inline-flex max-w-full !gap-0 !rounded-none !border-0 !bg-transparent !p-0 text-start !whitespace-normal [font:inherit] focus-visible:ring-2 focus-visible:ring-ring",
                onClick: T,
                children: U,
              })),
              (M[27] = U),
              (M[28] = T),
              (M[29] = e))
            : (e = M[29]),
          e
        )
      }
      return (
        M[30] !== U
          ? ((I = (0, a.jsx)("div", { className: "group", children: U })), (M[30] = U), (M[31] = I))
          : (I = M[31]),
        I
      )
    }
    let k = (0, g.YK)({
      readTaskTerminalCompleted: {
        id: "localConversation.dynamicToolCall.readTaskTerminal.completed",
        defaultMessage: "Read chat terminal",
        description: "Completed label for reading a Codex task terminal.",
      },
      readTaskTerminalCompletedFollowing: {
        id: "localConversation.dynamicToolCall.readTaskTerminal.completed.following",
        defaultMessage: "read chat terminal",
        description: "Non-leading completed label for reading a Codex task terminal in an agent activity summary",
      },
      readTaskTerminalInProgress: {
        id: "localConversation.dynamicToolCall.readTaskTerminal.inProgress",
        defaultMessage: "Reading chat terminal",
        description: "In-progress label for reading a Codex task terminal.",
      },
    })
    function M(e) {
      let t,
        n,
        c,
        d = (0, s.c)(17),
        {
          conversationId: u,
          enableTimelineTargets: m,
          agentActivityIcon: p,
          isLeadingSummaryPart: h,
          item: f,
          variant: g,
        } = e,
        x = void 0 === h || h,
        v = void 0 === g ? "row" : g
      if ("stopped" === (0, i._U)(f.completed || null == u ? "off" : l.NU, u)) return null
      if (d[0] !== p || d[1] !== x || d[2] !== f || d[3] !== v) {
        n = Symbol.for("react.early_return_sentinel")
        e: {
          let e = (0, r.rF)(f)
          if (e?.hiddenInConversation === !0) {
            n = null
            break e
          }
          t = e?.render?.(f, v, p, x)
        }
        ;((d[0] = p), (d[1] = x), (d[2] = f), (d[3] = v), (d[4] = t), (d[5] = n))
      } else ((t = d[4]), (n = d[5]))
      if (n !== Symbol.for("react.early_return_sentinel")) return n
      let y = t
      if (null != y) return y
      if ("row" === v && void 0 !== p) {
        let e, t
        return (
          d[7] !== x || d[8] !== f
            ? ((e = (0, a.jsx)(I, { isLeadingSummaryPart: x, item: f, variant: "summary-text" })),
              (d[7] = x),
              (d[8] = f),
              (d[9] = e))
            : (e = d[9]),
          d[10] !== p || d[11] !== e
            ? ((t = (0, a.jsx)(o.o, { icon: p, summary: e })), (d[10] = p), (d[11] = e), (d[12] = t))
            : (t = d[12]),
          t
        )
      }
      return (
        d[13] !== x || d[14] !== f || d[15] !== v
          ? ((c = (0, a.jsx)(I, { isLeadingSummaryPart: x, item: f, variant: v })),
            (d[13] = x),
            (d[14] = f),
            (d[15] = v),
            (d[16] = c))
          : (c = d[16]),
        c
      )
    }
  },
  PuGl(e, t, n) {
    n.d(t, { d: () => x })
    var a = n("ABep"),
      s = n("QosV"),
      i = n("XSQh"),
      l = n("on57"),
      o = n("oyxz"),
      r = n("HOLv"),
      c = n("DBCl"),
      d = n("zd8w"),
      u = n("Wf1j"),
      m = n("aepO"),
      p = n("uuN8"),
      h = n("oXx4"),
      f = n("kq2V")
    function g(e) {
      let t,
        n,
        i,
        r,
        g,
        x,
        v,
        y = (0, s.c)(48),
        { command: w, output: b, isInProgress: C, embeddedAppearance: j } = e,
        A = void 0 !== C && C,
        I = void 0 === j ? "default" : j,
        k = (0, u.A)(),
        [M, S] = (0, d.useState)(null)
      ;(y[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = /\S/), (y[0] = t)) : (t = y[0]),
        y[1] !== b ? ((n = t.test(b)), (y[1] = b), (y[2] = n)) : (n = y[2]))
      let N = n
      y[3] !== k
        ? ((i = k.formatMessage({
            id: "codex.shell.noOutput",
            defaultMessage: "No output",
            description: "Placeholder shown in a shell output block when there is no stdout/stderr",
          })),
          (y[3] = k),
          (y[4] = i))
        : (i = y[4])
      let T = i
      if (
        y[5] !== w ||
        y[6] !== I ||
        y[7] !== M ||
        y[8] !== N ||
        y[9] !== k ||
        y[10] !== A ||
        y[11] !== T ||
        y[12] !== b
      ) {
        var _
        let e,
          t,
          n,
          s,
          i,
          d,
          u,
          x,
          v,
          C,
          j,
          R,
          P = (function (e) {
            let t = (e) => {
                let t = e.trim(),
                  n = !0
                for (; n;) {
                  if (((n = !1), t.startsWith("$'") && t.endsWith("'"))) {
                    ;((t = t.slice(2, -1).replace(/\\'/g, "'")), (n = !0))
                    continue
                  }
                  if ((t.startsWith("'") && t.endsWith("'")) || (t.startsWith('"') && t.endsWith('"'))) {
                    let e = t.startsWith('"')
                    ;((t = t.slice(1, -1).replace(/'"'"'/g, "'")), e && (t = t.replace(/\\"/g, '"')), (n = !0))
                  }
                }
                return t
              },
              n = (e) => {
                let t = e.trim().replace(/^\$\s+/, "")
                ;(t.startsWith("'") && t.endsWith("'\"'\"") && (t += "''"), (t = t.replace(/'"'"'/g, "'")))
                let n = !0
                for (; n;)
                  ((n = !1),
                    ((t.startsWith("'") && t.endsWith("'")) || (t.startsWith('"') && t.endsWith('"'))) &&
                      ((t = t.slice(1, -1).trim()), (n = !0)))
                return t.trim()
              },
              a = t(n(e)),
              s = a.match(/^(?:\/bin\/zsh|\/bin\/bash|zsh|bash)\s+-lc\s+([\s\S]+)$/)
            if (s) return n(t(s[1]?.trim() ?? ""))
            let i = e.match(/(?:\/bin\/zsh|\/bin\/bash|zsh|bash)\s+-lc\s+([\s\S]+)$/)
            return n(i ? t(i[1]?.trim() ?? "") : a)
          })(w),
          L = (0, f.V)(w),
          D = P.trim().length > 0,
          F = M === P,
          E = "plain" === I,
          O = (0, l.A)(
            "text-size-chat-sm text-codex-description whitespace-pre-wrap break-words font-code",
            !F && "line-clamp-2",
          ),
          U = E ? "text-default" : "text-codex-description",
          B = () => {
            S(P)
          }
        y[15] !== B
          ? ((e = (e) => {
              ;("Enter" === e.key || " " === e.key) && (e.preventDefault(), B())
            }),
            (y[15] = B),
            (y[16] = e))
          : (e = y[16])
        let z = e
        ;((t = N ? b : A ? "" : T),
          y[17] !== U || y[18] !== t
            ? ((n = (0, a.jsx)(h.J, { className: U, children: t })), (y[17] = U), (y[18] = t), (y[19] = n))
            : (n = y[19]))
        let q = n,
          W =
            D &&
            (0, a.jsx)("div", {
              className: "px-2 pt-2",
              children: (0, a.jsxs)("div", {
                className: "group/command relative pe-6",
                children: [
                  (0, a.jsxs)("div", {
                    "aria-label": k.formatMessage(
                      {
                        id: "codex.shell.commandLine",
                        defaultMessage: "$ {command}",
                        description: "Command line shown above shell output",
                      },
                      { command: P },
                    ),
                    className: (0, l.A)(
                      "cursor-interaction rounded-md bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
                      O,
                    ),
                    role: "button",
                    tabIndex: 0,
                    onClick: B,
                    onKeyDown: z,
                    children: [
                      (0, a.jsx)("span", {
                        className: "me-[1ch] text-tertiary",
                        children: (0, a.jsx)(o.A, {
                          id: "codex.shell.prompt",
                          defaultMessage: "$",
                          description: "Prompt shown before a command in a shell block",
                        }),
                      }),
                      (0, a.jsx)(h.J, { className: "contents", children: P }),
                    ],
                  }),
                  (0, a.jsx)(p.i, {
                    className:
                      "absolute top-0 right-0 opacity-0 transition-opacity duration-basic group-hover/command:opacity-100 focus-visible:opacity-100",
                    iconOnly: !0,
                    iconClassName: "icon-2xs",
                    buttonText: k.formatMessage({
                      id: "codex.shell.copyCommand",
                      defaultMessage: "Copy command",
                      description: "Tooltip text for copying a shell command",
                    }),
                    onCopy: (e) => (0, m.E)(P, e),
                  }),
                ],
              }),
            })
        y[20] !== U
          ? ((s = (0, l.A)(
              "vertical-scroll-fade-mask max-h-36 [--edge-fade-distance:2rem] box-border flex flex-col-reverse overflow-x-auto overflow-y-auto whitespace-pre font-code font-medium [animation-direction:reverse]",
              U,
              "text-size-chat-sm",
            )),
            (y[20] = U),
            (y[21] = s))
          : (s = y[21])
        let H = E ? "p-3" : "p-2"
        ;(y[22] !== H ? ((i = (0, l.A)("w-max min-w-full", H)), (y[22] = H), (y[23] = i)) : (i = y[23]),
          y[24] !== q || y[25] !== i
            ? ((d = (0, a.jsx)("div", { className: i, children: q })), (y[24] = q), (y[25] = i), (y[26] = d))
            : (d = y[26]),
          y[27] !== s || y[28] !== d
            ? ((u = (0, a.jsx)("div", { className: s, children: d })), (y[27] = s), (y[28] = d), (y[29] = u))
            : (u = y[29]),
          y[30] !== k
            ? ((x = k.formatMessage({
                id: "codex.shell.copyOutput",
                defaultMessage: "Copy output",
                description: "Tooltip text for copying shell output",
              })),
              (y[30] = k),
              (y[31] = x))
            : (x = y[31]),
          y[32] !== b ? ((v = (e) => (0, m.E)(b, e)), (y[32] = b), (y[33] = v)) : (v = y[33]),
          y[34] !== x || y[35] !== v
            ? ((C = (0, a.jsx)(p.i, {
                className:
                  "absolute top-0 right-2.5 opacity-0 transition-opacity duration-basic group-hover/output:opacity-100 focus-visible:opacity-100",
                iconOnly: !0,
                iconClassName: "icon-2xs",
                buttonText: x,
                onCopy: v,
              })),
              (y[34] = x),
              (y[35] = v),
              (y[36] = C))
            : (C = y[36]),
          y[37] !== u || y[38] !== C
            ? ((j = (0, a.jsxs)("div", { className: "group/output relative min-h-[1.25rem] pe-0", children: [u, C] })),
              (y[37] = u),
              (y[38] = C),
              (y[39] = j))
            : (j = y[39]),
          y[40] !== j || y[41] !== W
            ? ((R = (0, a.jsxs)("div", { className: "relative", children: [W, j] })),
              (y[40] = j),
              (y[41] = W),
              (y[42] = R))
            : (R = y[42]),
          (r = R),
          (g = E
            ? null
            : (0, a.jsx)("div", {
                className:
                  "flex items-center justify-between gap-2 px-2 py-1 font-sans text-sm text-codex-description select-none",
                children: (0, a.jsx)("span", { children: null == (_ = L) ? "Shell" : c.T8S[_] }),
              })),
          (y[5] = w),
          (y[6] = I),
          (y[7] = M),
          (y[8] = N),
          (y[9] = k),
          (y[10] = A),
          (y[11] = T),
          (y[12] = b),
          (y[13] = r),
          (y[14] = g))
      } else ((r = y[13]), (g = y[14]))
      let R = g
      return (
        y[43] !== r
          ? ((x = (0, a.jsx)("div", { className: "relative overflow-hidden", children: r })), (y[43] = r), (y[44] = x))
          : (x = y[44]),
        y[45] !== R || y[46] !== x
          ? ((v = (0, a.jsxs)("div", {
              className: "flex flex-col overflow-clip rounded-none border-none",
              children: [R, x],
            })),
            (y[45] = R),
            (y[46] = x),
            (y[47] = v))
          : (v = y[47]),
        v
      )
    }
    let x = Object.assign(
      function (e) {
        let t,
          n,
          i,
          o = (0, s.c)(11),
          { command: r, output: c, isInProgress: d, footer: u, surface: m } = e,
          p = void 0 !== d && d,
          h = void 0 === m ? "default" : m,
          f = "plain" === h ? "bg-surface" : "bg-secondary-soft-alpha"
        return (
          o[0] !== f
            ? ((t = (0, l.A)("group flex flex-col overflow-hidden rounded-lg border border-strong", f)),
              (o[0] = f),
              (o[1] = t))
            : (t = o[1]),
          o[2] !== r || o[3] !== p || o[4] !== c || o[5] !== h
            ? ((n = (0, a.jsx)(g, { command: r, output: c, isInProgress: p, embeddedAppearance: h })),
              (o[2] = r),
              (o[3] = p),
              (o[4] = c),
              (o[5] = h),
              (o[6] = n))
            : (n = o[6]),
          o[7] !== u || o[8] !== t || o[9] !== n
            ? ((i = (0, a.jsxs)("div", { className: t, children: [n, u] })),
              (o[7] = u),
              (o[8] = t),
              (o[9] = n),
              (o[10] = i))
            : (i = o[10]),
          i
        )
      },
      {
        Footer: function (e) {
          let t,
            n,
            l = (0, s.c)(7),
            { isInProgress: c, isSuccess: d, exitCode: u, wasInterrupted: m } = e
          if (c) {
            let e
            return (
              l[0] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)("div", { className: "px-2.5 pt-0.5 pb-1 text-size-chat" })), (l[0] = e))
                : (e = l[0]),
              e
            )
          }
          if (void 0 !== m && m) {
            let e
            return (
              l[1] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)("div", {
                    className: "flex items-center gap-2 px-2.5 pt-0.5 pb-1 text-size-chat text-tertiary",
                    children: (0, a.jsx)("span", {
                      className: "ms-auto",
                      children: (0, a.jsx)(o.A, {
                        id: "execFooter.stopped",
                        defaultMessage: "Stopped",
                        description: "Exec footer label when a command was interrupted",
                      }),
                    }),
                  })),
                  (l[1] = e))
                : (e = l[1]),
              e
            )
          }
          l[2] !== u
            ? ((t =
                u ??
                (0, a.jsx)(
                  o.A,
                  {
                    id: "execFooter.exitCode.unknown",
                    defaultMessage: "unknown",
                    description: "Placeholder when an exec command does not report an exit code",
                  },
                  "unknown-exit-code",
                )),
              (l[2] = u),
              (l[3] = t))
            : (t = l[3])
          let p = t
          return (
            l[4] !== p || l[5] !== d
              ? ((n = (0, a.jsx)("div", {
                  className: "flex items-center gap-2 px-2.5 pt-0.5 pb-1 text-size-chat text-tertiary",
                  children: d
                    ? (0, a.jsxs)("span", {
                        className: "ms-auto flex items-center gap-1",
                        children: [
                          (0, a.jsx)(r.I, { "aria-hidden": !1, asset: i.G }),
                          (0, a.jsx)(o.A, {
                            id: "execFooter.success",
                            defaultMessage: "Success",
                            description: "Exec footer label when a command succeeds",
                          }),
                        ],
                      })
                    : (0, a.jsx)("span", {
                        className: "ms-auto",
                        children: (0, a.jsx)(o.A, {
                          id: "execFooter.exitCode",
                          defaultMessage: "Exit code {code}",
                          description: "Exec footer label when a command fails",
                          values: { code: p },
                        }),
                      }),
                })),
                (l[4] = p),
                (l[5] = d),
                (l[6] = n))
              : (n = l[6]),
            n
          )
        },
      },
    )
  },
  kaM7(e, t, n) {
    n.d(t, { F: () => st })
    var a = n("ABep"),
      s = n("QosV"),
      i = n("mnJS"),
      l = n("O5N9"),
      o = n("pkoC"),
      r = n.n(o),
      c = n("zTeN"),
      d = n("DBCl"),
      u = n("zd8w"),
      m = n("Wf1j"),
      p = n("oyxz"),
      h = n("HZfM"),
      f = n("wD9O"),
      g = n("w7Qu"),
      x = n("EOo5"),
      v = n("USdi"),
      y = n("spuc"),
      w = n("OAko"),
      b = n("bhRo"),
      C = n("BeTW"),
      j = n("QAOE"),
      A = n("wCoQ"),
      I = n("qbxq"),
      k = n("PyXq"),
      M = n("TyxL"),
      S = n("TSib"),
      N = n("GCrV"),
      T = n("uKpQ"),
      _ = n("uoSX"),
      R = n("B3ke"),
      P = n("XqCQ"),
      L = n("y5H2"),
      D = n("HOLv"),
      F = n("bVeK"),
      E = n("UxN3"),
      O = n("R0UC")
    function U(e) {
      let t = (0, s.c)(10),
        { resetDate: n, variant: i } = e
      switch (i) {
        case "upgrade-plus": {
          let e
          return (
            t[0] !== n
              ? ((e =
                  null == n
                    ? (0, a.jsx)(p.A, {
                        id: "codex.imageGenerationLimit.inline.upgradePlus.noReset",
                        defaultMessage:
                          "You’ve reached your image creation limit. Upgrade to ChatGPT Plus or try again later",
                        description:
                          "Inline transcript message for Free and Go users whose image creation limit is exhausted when the reset time is unavailable.",
                      })
                    : (0, a.jsx)(p.A, {
                        id: "codex.imageGenerationLimit.inline.upgradePlus",
                        defaultMessage:
                          "You’ve reached your image creation limit. Upgrade to ChatGPT Plus or try again at {resetDate}",
                        description:
                          "Inline transcript message for Free and Go users whose image creation limit is exhausted.",
                        values: { resetDate: n },
                      })),
                (t[0] = n),
                (t[1] = e))
              : (e = t[1]),
            e
          )
        }
        case "upgrade-pro": {
          let e
          return (
            t[2] !== n
              ? ((e =
                  null == n
                    ? (0, a.jsx)(p.A, {
                        id: "codex.imageGenerationLimit.inline.upgradePro.noReset",
                        defaultMessage:
                          "You’ve reached your image creation limit. Upgrade to ChatGPT Pro or try again later",
                        description:
                          "Inline transcript message for Plus and Pro 2x users whose image creation limit is exhausted when the reset time is unavailable.",
                      })
                    : (0, a.jsx)(p.A, {
                        id: "codex.imageGenerationLimit.inline.upgradePro",
                        defaultMessage:
                          "You’ve reached your image creation limit. Upgrade to ChatGPT Pro or try again at {resetDate}",
                        description:
                          "Inline transcript message for Plus and Pro 2x users whose image creation limit is exhausted.",
                        values: { resetDate: n },
                      })),
                (t[2] = n),
                (t[3] = e))
              : (e = t[3]),
            e
          )
        }
        case "notify-owner": {
          let e
          return (
            t[4] !== n
              ? ((e =
                  null == n
                    ? (0, a.jsx)(p.A, {
                        id: "codex.imageGenerationLimit.inline.notifyOwner.noReset",
                        defaultMessage:
                          "You’ve reached your image creation limit. Notify your workspace owner or try again later",
                        description:
                          "Inline transcript message for Business members and admins whose image creation limit is exhausted when the reset time is unavailable.",
                      })
                    : (0, a.jsx)(p.A, {
                        id: "codex.imageGenerationLimit.inline.notifyOwner",
                        defaultMessage:
                          "You’ve reached your image creation limit. Notify your workspace owner or try again at {resetDate}",
                        description:
                          "Inline transcript message for Business members and admins whose image creation limit is exhausted.",
                        values: { resetDate: n },
                      })),
                (t[4] = n),
                (t[5] = e))
              : (e = t[5]),
            e
          )
        }
        case "add-credits": {
          let e
          return (
            t[6] !== n
              ? ((e =
                  null == n
                    ? (0, a.jsx)(p.A, {
                        id: "codex.imageGenerationLimit.inline.addCredits.noReset",
                        defaultMessage: "You’ve reached your image creation limit. Add credits or try again later",
                        description:
                          "Inline transcript message for Business owners and Pro users whose image creation limit is exhausted when the reset time is unavailable.",
                      })
                    : (0, a.jsx)(p.A, {
                        id: "codex.imageGenerationLimit.inline.addCredits",
                        defaultMessage:
                          "You’ve reached your image creation limit. Add credits or try again at {resetDate}",
                        description:
                          "Inline transcript message for Business owners and Pro users whose image creation limit is exhausted.",
                        values: { resetDate: n },
                      })),
                (t[6] = n),
                (t[7] = e))
              : (e = t[7]),
            e
          )
        }
        case "retry": {
          let e
          return (
            t[8] !== n
              ? ((e =
                  null == n
                    ? (0, a.jsx)(p.A, {
                        id: "codex.imageGenerationLimit.inline.retry.noReset",
                        defaultMessage: "You’ve reached your image creation limit. Try again later",
                        description:
                          "Inline transcript message for Pro users whose image creation limit is exhausted when the reset time is unavailable.",
                      })
                    : (0, a.jsx)(p.A, {
                        id: "codex.imageGenerationLimit.inline.retry",
                        defaultMessage: "You’ve reached your image creation limit. Try again at {resetDate}",
                        description: "Inline transcript message for Pro users whose image creation limit is exhausted.",
                        values: { resetDate: n },
                      })),
                (t[8] = n),
                (t[9] = e))
              : (e = t[9]),
            e
          )
        }
      }
    }
    var B = n("VsqT"),
      z = n("UR81"),
      q = n("vw1R"),
      W = n("LjYy"),
      H = n("AFm7"),
      G = n("sgJo"),
      V = n("MA6w"),
      $ = n("rwp7"),
      K = n("i01N"),
      Z = n("oKu4"),
      Q = n("oaEd"),
      J = n("Qgfj"),
      Y = n("E8Sp"),
      X = n("on57")
    function ee(e) {
      let t,
        n,
        i,
        l,
        o,
        r = (0, s.c)(21),
        {
          label: c,
          alignment: d,
          accentColor: u,
          conversationId: m,
          message: p,
          sentAtMs: h,
          cwd: f,
          hostId: g,
          compactActions: x,
          onLabelClick: v,
        } = e,
        y = void 0 === d ? "end" : d,
        w = void 0 !== x && x
      r[0] !== p ? ((t = p.trim()), (r[0] = p), (r[1] = t)) : (t = r[1])
      let b = t.length > 0,
        C = "start" === y ? "items-start" : "items-end"
      return (
        r[2] !== C ? ((n = (0, X.A)("flex w-full flex-col gap-1", C)), (r[2] = C), (r[3] = n)) : (n = r[3]),
        r[4] !== c || r[5] !== v
          ? ((i = v
              ? (0, a.jsx)("button", {
                  type: "button",
                  className: (0, X.A)(
                    "text-size-chat-sm flex max-w-full items-center gap-1 px-1 py-0.5 text-codex-description select-none",
                    "cursor-interaction rounded-md hover:text-default",
                  ),
                  onClick: v,
                  children: c,
                })
              : (0, a.jsx)("div", {
                  className:
                    "text-size-chat-sm flex max-w-full items-center gap-1 px-1 py-0.5 text-codex-description select-none",
                  children: c,
                })),
            (r[4] = c),
            (r[5] = v),
            (r[6] = i))
          : (i = r[6]),
        r[7] !== u ||
        r[8] !== y ||
        r[9] !== w ||
        r[10] !== m ||
        r[11] !== f ||
        r[12] !== g ||
        r[13] !== p ||
        r[14] !== h ||
        r[15] !== b
          ? ((l = b
              ? (0, a.jsx)(L.R, {
                  alignment: y,
                  accentColor: u,
                  message: p,
                  sentAtMs: h,
                  collapsedLineCount: 2,
                  compactActions: w,
                  cwd: f,
                  hostId: g,
                  threadId: m,
                })
              : null),
            (r[7] = u),
            (r[8] = y),
            (r[9] = w),
            (r[10] = m),
            (r[11] = f),
            (r[12] = g),
            (r[13] = p),
            (r[14] = h),
            (r[15] = b),
            (r[16] = l))
          : (l = r[16]),
        r[17] !== n || r[18] !== i || r[19] !== l
          ? ((o = (0, a.jsxs)("div", { className: n, children: [i, l] })),
            (r[17] = n),
            (r[18] = i),
            (r[19] = l),
            (r[20] = o))
          : (o = r[20]),
        o
      )
    }
    var et = n("m22M"),
      en = n("OWtl"),
      ea = n("d6Ff"),
      es = n("PtcT"),
      ei = n("gGps"),
      el = n("oz6U"),
      eo = n("mzxa"),
      er = n("q3j5"),
      ec = n("gdZA"),
      ed = n("TYK1"),
      eu = n("lzA6"),
      em = n("liTb")
    let ep = (0, J.zR)({
      id: "localConversation.aeonDelegationUserMessage.sentFrom",
      defaultMessage: "Sent from {sender}",
      description:
        "Attribution for a message sent by a dot into a task. The sender is the product name or the dot's custom name.",
    })
    function eh(e) {
      let t,
        n,
        i,
        l,
        o,
        r,
        d,
        u,
        m,
        h,
        f,
        g = (0, s.c)(33),
        {
          conversationId: x,
          sourceConversationId: v,
          sourceOrbitId: y,
          message: w,
          sentAtMs: b,
          cwd: C,
          hostId: j,
          compactActions: A,
        } = e,
        I = void 0 !== A && A,
        k = (0, c.gh)(en.u),
        M = (0, c._U)(ec.zQ, v)
      g[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { enabled: !1 }), (g[0] = t)) : (t = g[0])
      let { data: S } = (0, c._U)(ed.cloudAeonByThreadId$, v, t),
        N = (0, c._U)(et.N, v),
        T = (0, c._U)(eo.GP, v),
        _ = (0, c._U)(el.Hx, v),
        R = (0, c._U)(el.$N, v),
        P = (null != S && S.id === y ? S.display_name : void 0) ?? M ?? N ?? T
      g[1] !== P ? ((n = P && !(0, er.x)(P) ? P : void 0), (g[1] = P), (g[2] = n)) : (n = g[2])
      let L = n,
        D = L ?? "dot"
      return (
        g[3] !== D
          ? ((i = (0, a.jsx)("h4", {
              className: "sr-only m-0 select-none",
              children: (0, a.jsx)(p.A, { ...ep, values: { sender: D } }),
            })),
            (g[3] = D),
            (g[4] = i))
          : (i = g[4]),
        g[5] !== _ || g[6] !== R
          ? ((l = null != R ? (0, es.cZ)(R).background : (0, es.RE)((_ ?? el.ZX).color).background),
            (g[5] = _),
            (g[6] = R),
            (g[7] = l))
          : (l = g[7]),
        g[8] !== v
          ? ((o = (0, a.jsx)(ei.I, { className: "size-4", conversationId: v, animated: !1 })), (g[8] = v), (g[9] = o))
          : (o = g[9]),
        g[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsx)(p.A, { ...ep, values: { sender: "dot" } })), (g[10] = r))
          : (r = g[10]),
        g[11] !== L
          ? ((d = (0, a.jsx)("span", { className: "min-w-0 truncate", title: L, children: r })),
            (g[11] = L),
            (g[12] = d))
          : (d = g[12]),
        g[13] !== o || g[14] !== d
          ? ((u = (0, a.jsxs)(a.Fragment, { children: [o, d] })), (g[13] = o), (g[14] = d), (g[15] = u))
          : (u = g[15]),
        g[16] !== k || g[17] !== v || g[18] !== y
          ? ((m = () => {
              null != y ? k.get(Y.gM).navigate((0, em.xP)(y)) : (0, eu.Cy)(k, (0, ea.z3)(v))
            }),
            (g[16] = k),
            (g[17] = v),
            (g[18] = y),
            (g[19] = m))
          : (m = g[19]),
        g[20] !== I ||
        g[21] !== x ||
        g[22] !== C ||
        g[23] !== j ||
        g[24] !== w ||
        g[25] !== b ||
        g[26] !== u ||
        g[27] !== m ||
        g[28] !== l
          ? ((h = (0, a.jsx)(ee, {
              accentColor: l,
              conversationId: x,
              label: u,
              message: w,
              sentAtMs: b,
              cwd: C,
              hostId: j,
              compactActions: I,
              onLabelClick: m,
            })),
            (g[20] = I),
            (g[21] = x),
            (g[22] = C),
            (g[23] = j),
            (g[24] = w),
            (g[25] = b),
            (g[26] = u),
            (g[27] = m),
            (g[28] = l),
            (g[29] = h))
          : (h = g[29]),
        g[30] !== h || g[31] !== i
          ? ((f = (0, a.jsxs)(a.Fragment, { children: [i, h] })), (g[30] = h), (g[31] = i), (g[32] = f))
          : (f = g[32]),
        f
      )
    }
    var ef = n("qMca"),
      eg = n("slpy"),
      ex = n("tl5a")
    function ev(e) {
      let t,
        n,
        i,
        l,
        o = (0, s.c)(14),
        { aeonName: r, emoji: c, label: d, labelOnly: u } = e,
        h = void 0 !== u && u,
        f = (0, m.A)()
      return (
        o[0] !== r || o[1] !== d || o[2] !== h
          ? ((t = h
              ? d
              : (0, a.jsx)(p.A, {
                  id: "codex.aeon.userMessageReaction.tooltip.dot",
                  defaultMessage: "{hasName, select, true {{aeonName}} other {Your dot}} reacted: {label}",
                  description:
                    "Tooltip for the dot's reaction to a user message, including the work it started. Use its custom name when present; dot is the untranslated term for the user's agent.",
                  values: { aeonName: r, label: d, hasName: !(0, er.x)(r) },
                })),
            (o[0] = r),
            (o[1] = d),
            (o[2] = h),
            (o[3] = t))
          : (t = o[3]),
        o[4] !== c || o[5] !== f || o[6] !== d
          ? ((n = f.formatMessage(
              {
                id: "codex.aeon.userMessageReaction.ariaLabel",
                defaultMessage: "Acknowledged with {emoji}: {label}",
                description: "Accessible label for a dot reaction to a user message",
              },
              { emoji: c, label: d },
            )),
            (o[4] = c),
            (o[5] = f),
            (o[6] = d),
            (o[7] = n))
          : (n = o[7]),
        o[8] !== c || o[9] !== n
          ? ((i = (0, a.jsx)("button", {
              type: "button",
              "data-markdown-copy": "exclude",
              className:
                "flex size-6 cursor-interaction items-center justify-center rounded-full text-lg leading-none drop-shadow-xs select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:outline-none",
              "aria-label": n,
              children: c,
            })),
            (o[8] = c),
            (o[9] = n),
            (o[10] = i))
          : (i = o[10]),
        o[11] !== t || o[12] !== i
          ? ((l = (0, a.jsx)(eg.m, { align: "end", openDelay: 250, side: "bottom", content: t, children: i })),
            (o[11] = t),
            (o[12] = i),
            (o[13] = l))
          : (l = o[13]),
        l
      )
    }
    function ey(e) {
      let t,
        n,
        i,
        l = (0, s.c)(11),
        { conversationId: o, emoji: r, label: d, labelOnly: u } = e,
        m = (0, c._U)(ex.qX, o),
        p = (0, c._U)(ec.zQ, o)
      l[0] !== o || l[1] !== m ? ((t = { hostId: m, threadId: o }), (l[0] = o), (l[1] = m), (l[2] = t)) : (t = l[2])
      let h = (0, c._U)(ex.HX, t)
      l[3] !== p || l[4] !== h ? ((n = p ?? (h?.trim() || "dot")), (l[3] = p), (l[4] = h), (l[5] = n)) : (n = l[5])
      let f = n
      return (
        l[6] !== f || l[7] !== r || l[8] !== d || l[9] !== u
          ? ((i = (0, a.jsx)(ev, { aeonName: f, emoji: r, label: d, labelOnly: u })),
            (l[6] = f),
            (l[7] = r),
            (l[8] = d),
            (l[9] = u),
            (l[10] = i))
          : (i = l[10]),
        i
      )
    }
    var ew = n("fIHL"),
      eb = n("SZCv"),
      eC = n.n(eb),
      ej = n("kTK0"),
      eA = n("vdpW"),
      eI = n("acxW"),
      ek = n("Rmmk")
    let eM = (0, c.i1)(
        en.u,
        (e, { get: t, scope: n }) => {
          let a = t(eA.M, e)
          if (null == a) return null
          let s = new Map(),
            i = new Map()
          for (let e of a) {
            t(eA.hm, e)
            let a = (0, eA.od)(n, e)
            if (null != a)
              for (let n of a.items) {
                if (
                  null == n ||
                  ("userMessage" === n.type && null != n.clientId && i.set(n.clientId, n.id),
                  ("dynamicToolCall" !== n.type ||
                    (null != n.namespace && "codex_app" !== n.namespace) ||
                    n.tool !== ej.FK) &&
                    ("mcpToolCall" !== n.type || "codex_apps" !== n.server || n.tool !== `emoji.${ej.FK}`))
                )
                  continue
                let a = t(eA.mz, { ...e, itemId: n.id })
                if ((a?.type !== "dynamicToolCall" && a?.type !== "mcpToolCall") || "completed" !== a.status) continue
                if ("dynamicToolCall" === a.type) {
                  if (!0 !== a.success) continue
                } else if (
                  null != a.error ||
                  null == a.result ||
                  (0, eI.C)({
                    isCodexAppsServer: !0,
                    result: { type: "success", structuredContent: a.result.structuredContent },
                  })
                )
                  continue
                let l = (0, ek.$)(a.arguments)
                l?.message_id != null && s.set(i.get(l.message_id) ?? l.message_id, { emoji: l.emoji, label: l.label })
              }
          }
          return s
        },
        { isEqual: eC() },
      ),
      eS = (0, c.i1)(
        en.u,
        (e, { get: t }) => {
          if (null == e || "standard" === t(ef.LG, (0, d.JXB)(e.threadId))) return
          let n = t(eM, { hostId: e.hostId, threadId: e.threadId })
          return n?.get(e.messageId)
        },
        { isEqual: eC() },
      )
    var eN = n("veRW"),
      eT = n("o7K3")
    function e_(e) {
      let t,
        n,
        i = (0, s.c)(12),
        { conversationId: l, cwd: o, entries: r, handoffId: c, hostId: d } = e,
        m = c ?? void 0
      if (i[0] !== l || i[1] !== o || i[2] !== r || i[3] !== d) {
        let e
        ;(i[5] !== l || i[6] !== o || i[7] !== d
          ? ((e = (e, t) => {
              if ("user" === e.role)
                return (0, a.jsxs)(
                  u.Fragment,
                  {
                    children: [
                      (0, a.jsx)(R.m, { speaker: "user" }),
                      (0, a.jsx)(L.R, {
                        cwd: o,
                        hideActions: !0,
                        hostId: d,
                        message: e.text,
                        sentAtMs: null,
                        threadId: l,
                      }),
                    ],
                  },
                  `${e.role}-${String(t)}`,
                )
              let n = (0, eN.l)(e.text, { displayChannels: "all" })
              return (0, a.jsx)(
                eT.F,
                {
                  assistantCopyText: n,
                  conversationId: l,
                  cwd: o,
                  hostId: d,
                  item: {
                    type: "assistant-message",
                    completed: !0,
                    content: n,
                    phase: null,
                    sentAtMs: null,
                    structuredOutput: void 0,
                  },
                  showActionRow: !1,
                },
                `${e.role}-${String(t)}`,
              )
            }),
            (i[5] = l),
            (i[6] = o),
            (i[7] = d),
            (i[8] = e))
          : (e = i[8]),
          (t = r.map(e)),
          (i[0] = l),
          (i[1] = o),
          (i[2] = r),
          (i[3] = d),
          (i[4] = t))
      } else t = i[4]
      return (
        i[9] !== m || i[10] !== t
          ? ((n = (0, a.jsx)("div", {
              className:
                "relative flex flex-col gap-6 py-2 ps-6 before:absolute before:inset-y-2 before:start-0 before:w-1 before:rounded-sm before:bg-border before:content-['']",
              "data-realtime-handoff-id": m,
              children: t,
            })),
            (i[9] = m),
            (i[10] = t),
            (i[11] = n))
          : (n = i[11]),
        n
      )
    }
    var eR = n("Sd8U"),
      eP = n("vNmV"),
      eL = n("AN2V"),
      eD = n("qixt"),
      eF = n("OMIV"),
      eE = n("x7EU"),
      eO = n("WTZ1"),
      eU = n("Sgcz"),
      eB = n("t7eZ"),
      ez = n("Z2lA"),
      eq = n("UTdg"),
      eW = n("BI7J")
    function eH(e) {
      let t,
        n,
        i = (0, s.c)(2)
      return (
        i[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(D.I, { className: "shrink-0", asset: eq.F })), (i[0] = t))
          : (t = i[0]),
        i[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)(eW.o, {
              "aria-live": "polite",
              role: "status",
              icon: t,
              summary: (0, a.jsx)("span", {
                className: "select-none",
                children: (0, a.jsx)(p.A, {
                  id: "localConversation.strictReviewStatus",
                  defaultMessage: "This request requires additional safety checks, which can take extra time.",
                  description:
                    "Inline task status shown while current actions undergo additional safety review that may delay the response",
                }),
              }),
            })),
            (i[1] = n))
          : (n = i[1]),
        n
      )
    }
    var eG = n("NQNw"),
      eV = n("plV3"),
      e$ = n("fbxj")
    function eK(e) {
      let t,
        n,
        i,
        l,
        o,
        r,
        c,
        d = (0, s.c)(12),
        { icon: u } = e,
        h = (0, m.A)()
      return (
        d[0] !== u
          ? ((t = u ?? (0, a.jsx)(D.I, { "aria-hidden": !1, asset: eq.F })), (d[0] = u), (d[1] = t))
          : (t = d[1]),
        d[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)(p.A, {
              id: "localConversation.autoReviewInterruptionWarning",
              defaultMessage: "Turn ended by Auto-review",
              description: "Synthetic divider shown when auto-review short-circuits a turn after too many denials.",
            })),
            (d[2] = n))
          : (n = d[2]),
        d[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, a.jsx)("div", {
              className: "max-w-3xs text-center",
              children: (0, a.jsx)(p.A, {
                id: "localConversation.autoReviewInterruptionWarning.nextSteps",
                defaultMessage:
                  "Auto-review stopped this turn after repeated denials. Add more context or choose a different permission mode to continue.",
                description: "Guidance tooltip shown after the auto-review interruption warning inline status.",
              }),
            })),
            (d[3] = i))
          : (i = d[3]),
        d[4] !== h
          ? ((l = h.formatMessage({
              id: "localConversation.autoReviewInterruptionWarning.details",
              defaultMessage: "Task interruption details",
              description:
                "Accessible name for the information button beside a transcript warning that a task was stopped. Focusing the button reveals guidance on what to do next.",
            })),
            (d[4] = h),
            (d[5] = l))
          : (l = d[5]),
        d[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, a.jsx)(E.bF, { "aria-hidden": !1, asset16: eV.c, legacyIcon: G.A, legacyClassName: "icon-2xs" })),
            (d[6] = o))
          : (o = d[6]),
        d[7] !== l
          ? ((r = (0, a.jsx)(eg.m, {
              content: i,
              children: (0, a.jsx)(eg.m.TriggerDecorator, {
                unstyled: !0,
                children: (0, a.jsx)("span", {
                  className: "inline-flex items-center",
                  role: "img",
                  "aria-label": l,
                  children: o,
                }),
              }),
            })),
            (d[7] = l),
            (d[8] = r))
          : (r = d[8]),
        d[9] !== t || d[10] !== r
          ? ((c = (0, a.jsx)(e$.i, { icon: t, message: n, trailingContent: r })), (d[9] = t), (d[10] = r), (d[11] = c))
          : (c = d[11]),
        c
      )
    }
    var eZ = n("kRUe"),
      eQ = n("IgqH"),
      eJ = n("umSm")
    function eY(e) {
      let t,
        n,
        i,
        l,
        o,
        r = (0, s.c)(17),
        { icon: c, item: d } = e,
        u = (0, m.A)(),
        p = "denied" === d.status
      r[0] !== u || r[1] !== d.action
        ? ((t = (0, eU.uO)(u, d.action)), (r[0] = u), (r[1] = d.action), (r[2] = t))
        : (t = r[2])
      let h = t,
        f = "inProgress" === d.status
      r[3] !== h || r[4] !== f
        ? ((n = (0, a.jsx)(eJ.N, {
            active: f,
            className: "min-w-0 truncate text-text/30 group-hover/activity-header:text-default",
            children: h,
          })),
          (r[3] = h),
          (r[4] = f),
          (r[5] = n))
        : (n = r[5])
      let g = n
      return (
        r[6] !== c || r[7] !== p || r[8] !== g
          ? ((i =
              void 0 === c
                ? (0, a.jsxs)("span", {
                    className: "inline-flex min-w-0 items-center gap-1.5",
                    children: [(0, a.jsx)(eZ.gV, { tone: p ? "warning" : "default" }), g],
                  })
                : g),
            (r[6] = c),
            (r[7] = p),
            (r[8] = g),
            (r[9] = i))
          : (i = r[9]),
        r[10] !== p || r[11] !== d
          ? ((l = p ? (0, a.jsx)(eZ.Pj, { reviews: [d] }) : (0, a.jsx)(eZ.nW, { review: d })),
            (r[10] = p),
            (r[11] = d),
            (r[12] = l))
          : (l = r[12]),
        r[13] !== c || r[14] !== i || r[15] !== l
          ? ((o = (0, a.jsx)(eQ.Z, { icon: c, summary: i, shouldAnimateInitialCollapse: !1, children: l })),
            (r[13] = c),
            (r[14] = i),
            (r[15] = l),
            (r[16] = o))
          : (o = r[16]),
        o
      )
    }
    function eX(e) {
      let t,
        n,
        i,
        l = (0, s.c)(9),
        { conversationId: o, message: r, sentAtMs: c, cwd: d, hostId: u, compactActions: m } = e
      return (
        l[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, a.jsx)(F.QC9, {})), (l[0] = t)) : (t = l[0]),
        l[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsxs)(a.Fragment, {
              children: [
                t,
                (0, a.jsx)("span", {
                  className: "min-w-0 truncate",
                  children: (0, a.jsx)(p.A, {
                    id: "localConversation.automationUserMessage.scheduledOrigin",
                    defaultMessage: "Sent via scheduled task",
                    description:
                      "Label above a user message sent by a scheduled task, without displaying the task name or hidden metadata",
                  }),
                }),
              ],
            })),
            (l[1] = n))
          : (n = l[1]),
        l[2] !== m || l[3] !== o || l[4] !== d || l[5] !== u || l[6] !== r || l[7] !== c
          ? ((i = (0, a.jsx)(ee, {
              conversationId: o,
              label: n,
              message: r,
              sentAtMs: c,
              cwd: d,
              hostId: u,
              compactActions: m,
            })),
            (l[2] = m),
            (l[3] = o),
            (l[4] = d),
            (l[5] = u),
            (l[6] = r),
            (l[7] = c),
            (l[8] = i))
          : (i = l[8]),
        i
      )
    }
    var e1 = n("q5qu")
    function e0() {
      let e,
        t = (0, s.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(e1.D, {
              padding: "offset",
              children: (0, a.jsx)(eJ.g, {
                className: "text-text/30",
                message: (0, a.jsx)(p.A, {
                  id: "localConversation.approvalRequest.inProgress",
                  defaultMessage: "Awaiting approval",
                  description: "Label shown while the assistant is waiting for approval",
                }),
              }),
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    var e2 = n("Mzpz"),
      e3 = n("VL1D"),
      e4 = n("rPK8")
    function e5(e) {
      let t,
        n,
        i,
        l,
        o,
        r,
        d = (0, s.c)(22),
        { request: u, label: p, icon: h, children: f, conversationId: g, hostId: x } = e,
        v = (0, c.gh)(en.u),
        y = (0, m.A)(),
        w = u.threadId ?? g
      d[0] !== y
        ? ((t = y.formatMessage({
            id: "actionTranscript.openBrowser",
            defaultMessage: "Open browser",
            description: "Open the page inspected by this browser action",
          })),
          (d[0] = y),
          (d[1] = t))
        : (t = d[1])
      let b = t
      return (
        d[2] !== g || d[3] !== x || d[4] !== u || d[5] !== v || d[6] !== w
          ? ((n = () =>
              (0, e2.Wb)(v, {
                action: { ...u, type: "windows.tabs.open", windowId: "current", threadId: w },
                sourceHostId: x,
                sourceThreadId: g,
                targetThreadId: w,
              })),
            (d[2] = g),
            (d[3] = x),
            (d[4] = u),
            (d[5] = v),
            (d[6] = w),
            (d[7] = n))
          : (n = d[7]),
        d[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, a.jsx)(F.Som, { className: "text-secondary" })), (d[8] = i))
          : (i = d[8]),
        d[9] !== p || d[10] !== b || d[11] !== u.target.url
          ? ((l = (0, a.jsx)(e3.Ni, {
              variant: "browser-preview",
              icon: i,
              title: p,
              subtitle: u.target.url,
              trailing: b,
            })),
            (d[9] = p),
            (d[10] = b),
            (d[11] = u.target.url),
            (d[12] = l))
          : (l = d[12]),
        d[13] !== b || d[14] !== n || d[15] !== l
          ? ((o = (0, a.jsx)(e3.zU, {
              variant: "artifact-list",
              children: (0, a.jsx)(e3.dQ, { "aria-label": b, onClick: n, children: l }),
            })),
            (d[13] = b),
            (d[14] = n),
            (d[15] = l),
            (d[16] = o))
          : (o = d[16]),
        d[17] !== f || d[18] !== h || d[19] !== p || d[20] !== o
          ? ((r = (0, a.jsxs)(e4.e, { icon: h, label: p, children: [o, f] })),
            (d[17] = f),
            (d[18] = h),
            (d[19] = p),
            (d[20] = o),
            (d[21] = r))
          : (r = d[21]),
        r
      )
    }
    var e6 = n("cP3L"),
      e7 = n("G30s"),
      e8 = n("CTWI"),
      e9 = n("wls5"),
      te = n("W2jr"),
      tt = n("hERv")
    function tn(e) {
      let t,
        n,
        i,
        l,
        o = (0, s.c)(13),
        { conversationId: r, sourceThreadId: c, message: d, sentAtMs: u, cwd: m, hostId: f, compactActions: g } = e,
        x = void 0 !== g && g,
        v = (0, h.Zp)(),
        y = (0, e9.OX)() ? `/hotkey-window/thread/${c}` : `/local/${c}`
      return (
        o[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t =
              "ChatGPT" === e8.C
                ? (0, a.jsx)(tt.A, { className: "icon-2xs" })
                : (0, a.jsx)(E.bF, {
                    "aria-hidden": !1,
                    asset16: e7.B,
                    legacyIcon: te.A,
                    legacyClassName: "icon-2xs",
                  })),
            (o[0] = t))
          : (t = o[0]),
        o[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsxs)(a.Fragment, {
              children: [
                t,
                (0, a.jsx)(p.A, {
                  id: "localConversation.codexDelegationUserMessage.app",
                  defaultMessage: "Sent by {appName} from another chat",
                  description:
                    "Label shown above a user-message-style prompt delegated from another chat; {appName} is the product name, either ChatGPT or Codex",
                  values: { appName: e8.C },
                }),
              ],
            })),
            (o[1] = n))
          : (n = o[1]),
        o[2] !== v || o[3] !== y
          ? ((i = () => {
              v(y)
            }),
            (o[2] = v),
            (o[3] = y),
            (o[4] = i))
          : (i = o[4]),
        o[5] !== x || o[6] !== r || o[7] !== m || o[8] !== f || o[9] !== d || o[10] !== u || o[11] !== i
          ? ((l = (0, a.jsx)(ee, {
              conversationId: r,
              label: n,
              message: d,
              sentAtMs: u,
              cwd: m,
              hostId: f,
              compactActions: x,
              onLabelClick: i,
            })),
            (o[5] = x),
            (o[6] = r),
            (o[7] = m),
            (o[8] = f),
            (o[9] = d),
            (o[10] = u),
            (o[11] = i),
            (o[12] = l))
          : (l = o[12]),
        l
      )
    }
    var ta = n("ibmS")
    function ts(e) {
      let t,
        n,
        i,
        l = (0, s.c)(13),
        { status: o, startedAtMs: r, icon: c, isWorkMode: d, source: u } = e
      if ("inProgress" === o) {
        let e
        ;(l[0] !== d || l[1] !== r
          ? ((e = (0, a.jsx)(ti, { startedAtMs: r, isWorkMode: d }, r)), (l[0] = d), (l[1] = r), (l[2] = e))
          : (e = l[2]),
          (t = e))
      } else if ("interrupted" === o) {
        let e
        ;(l[3] !== d
          ? ((e = d
              ? (0, a.jsx)(p.A, {
                  id: "localConversation.optimizationInterrupted",
                  defaultMessage: "Optimization interrupted",
                  description: "Status shown when conversation optimization ended before it could complete.",
                })
              : (0, a.jsx)(p.A, {
                  id: "localConversation.compactionInterrupted",
                  defaultMessage: "Compaction interrupted",
                  description: "Status shown when context compaction ended before it could complete.",
                })),
            (l[3] = d),
            (l[4] = e))
          : (e = l[4]),
          (t = e))
      } else if ("manual" === u) {
        let e
        ;(l[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(p.A, {
              id: "localConversation.contextManuallyCompacted",
              defaultMessage: "Context compacted",
              description: "Synthetic divider shown when the user manually compacts context.",
            })),
            (l[5] = e))
          : (e = l[5]),
          (t = e))
      } else if (d) {
        let e
        ;(l[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(p.A, {
              id: "localConversation.conversationOptimized",
              defaultMessage: "Optimized the conversation",
              description: "Synthetic divider shown after automatic context optimization in Work mode.",
            })),
            (l[6] = e))
          : (e = l[6]),
          (t = e))
      } else {
        let e
        ;(l[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(p.A, {
              id: "localConversation.contextAutomaticallyCompacted",
              defaultMessage: "Context automatically compacted",
              description: "Synthetic divider shown when context compaction occurs automatically.",
            })),
            (l[7] = e))
          : (e = l[7]),
          (t = e))
      }
      return (
        l[8] !== c
          ? ((n = c ?? (0, a.jsx)(D.I, { className: "shrink-0 text-text/60", asset: ta.h })), (l[8] = c), (l[9] = n))
          : (n = l[9]),
        l[10] !== t || l[11] !== n
          ? ((i = (0, a.jsx)(eW.o, { icon: n, summary: t })), (l[10] = t), (l[11] = n), (l[12] = i))
          : (i = l[12]),
        i
      )
    }
    function ti(e) {
      let t,
        n,
        i,
        l,
        o,
        r = (0, s.c)(12),
        { startedAtMs: c, isWorkMode: d } = e
      r[0] !== c ? ((t = () => null != c && Date.now() - c >= 1e4), (r[0] = c), (r[1] = t)) : (t = r[1])
      let [m, h] = (0, u.useState)(t)
      if (
        (r[2] !== m || r[3] !== c
          ? ((n = () => {
              if (null == c || m) return
              let e = setTimeout(() => h(!0), Math.max(0, c + 1e4 - Date.now()))
              return () => clearTimeout(e)
            }),
            (i = [c, m]),
            (r[2] = m),
            (r[3] = c),
            (r[4] = n),
            (r[5] = i))
          : ((n = r[4]), (i = r[5])),
        (0, u.useEffect)(n, i),
        d)
      ) {
        let e
        ;(r[6] !== m
          ? ((e = m
              ? (0, a.jsx)(p.A, {
                  id: "localConversation.conversationOptimizingWithDelayNotice",
                  defaultMessage: "Optimizing the conversation · This can take a few minutes",
                  description:
                    "Status shown after conversation optimization has been running for ten seconds, reassuring the user that a wait of a few minutes can be normal.",
                })
              : (0, a.jsx)(p.A, {
                  id: "localConversation.conversationOptimizing",
                  defaultMessage: "Optimizing the conversation",
                  description: "In-progress label shown during automatic context optimization in Work mode.",
                })),
            (r[6] = m),
            (r[7] = e))
          : (e = r[7]),
          (l = e))
      } else {
        let e
        ;(r[8] !== m
          ? ((e = m
              ? (0, a.jsx)(p.A, {
                  id: "localConversation.contextCompactingWithDelayNotice",
                  defaultMessage: "Compacting context · This can take a few minutes",
                  description:
                    "Status shown after context compaction has been running for ten seconds, reassuring the user that a wait of a few minutes can be normal.",
                })
              : (0, a.jsx)(p.A, {
                  id: "localConversation.contextCompacting",
                  defaultMessage: "Compacting context",
                  description:
                    "In-progress label shown while automatic or manually triggered context compaction is running.",
                })),
            (r[8] = m),
            (r[9] = e))
          : (e = r[9]),
          (l = e))
      }
      return (
        r[10] !== l
          ? ((o = (0, a.jsx)(eJ.N, { className: "max-w-full whitespace-normal select-none", children: l })),
            (r[10] = l),
            (r[11] = o))
          : (o = r[11]),
        o
      )
    }
    var tl = n("iwvb"),
      to = n("wepB"),
      tr = n("xCr9"),
      tc = n.n(tr),
      td = n("aqGh"),
      tu = n("tnfs"),
      tm = n("HBzQ"),
      tp = n("JGoU"),
      th = n("Oj9r"),
      tf = n("aRbG"),
      tg = n("XSLO")
    function tx(e) {
      let t,
        n = (0, s.c)(8),
        { kind: i, isInProgress: l } = e
      n[0] !== l
        ? ((t = (e) =>
            l
              ? (0, a.jsx)(eJ.N, { children: e }, "status")
              : (0, a.jsxs)(a.Fragment, {
                  children: [
                    null,
                    (0, a.jsx)(a.Fragment, {
                      children: (0, a.jsx)("span", { className: "text-text-tertiary/90", children: e }),
                    }),
                  ],
                })),
          (n[0] = l),
          (n[1] = t))
        : (t = n[1])
      let o = t
      switch (i) {
        case "create": {
          let e
          return (
            n[2] !== l || n[3] !== o
              ? ((e = l
                  ? (0, a.jsx)(p.A, { ...tg.yz.rowCreating, values: { verb: o } })
                  : (0, a.jsx)(p.A, { ...tg.yz.rowCreated, values: { verb: o } })),
                (n[2] = l),
                (n[3] = o),
                (n[4] = e))
              : (e = n[4]),
            e
          )
        }
        case "update": {
          let e
          return (
            n[5] !== l || n[6] !== o
              ? ((e = l
                  ? (0, a.jsx)(p.A, { ...tg.yz.rowUpdating, values: { verb: o } })
                  : (0, a.jsx)(p.A, { ...tg.yz.rowUpdated, values: { verb: o } })),
                (n[5] = l),
                (n[6] = o),
                (n[7] = e))
              : (e = n[7]),
            e
          )
        }
      }
    }
    var tv = n("F9dY"),
      ty = n("ivPw"),
      tw = n("pNUK"),
      tb = n("ZiDw"),
      tC = n("ChYf"),
      tj = n("B09n"),
      tA = n("Sm6l")
    function tI(e) {
      let t,
        n = (0, s.c)(2)
      return (
        n[0] !== e
          ? ((t = (0, a.jsx)(tA.$, {
              className:
                "pointer-events-auto relative inline-flex max-w-full truncate align-bottom underline decoration-dotted decoration-[0.5px] underline-offset-2",
              color: "ghostTertiary",
              focusRing: "inset",
              radius: "small",
              size: "inline",
              ...e,
            })),
            (n[0] = e),
            (n[1] = t))
          : (t = n[1]),
        t
      )
    }
    function tk(e) {
      let t,
        n,
        i,
        l,
        o,
        r = (0, s.c)(16),
        { cwd: u, displayPath: m, hostId: p, line: h, path: f } = e,
        g = (0, c.gh)(th.GD)
      r[0] !== u || r[1] !== p || r[2] !== h || r[3] !== f || r[4] !== g
        ? ((t = (e) => {
            ;(0, tj.openWorkspaceFile)({
              scope: g,
              path: f,
              line: h,
              cwd: u,
              hostId: p,
              browserEnabled: (0, d.QPd)(f) && g.get(tC.G, { name: "browser.in-app" }).isCapable,
              modifiedClick: e,
              openInSidePanel: !e,
            })
          }),
          (r[0] = u),
          (r[1] = p),
          (r[2] = h),
          (r[3] = f),
          (r[4] = g),
          (r[5] = t))
        : (t = r[5])
      let x = t
      return (
        r[6] !== f
          ? ((n = (0, a.jsx)("span", { className: "font-mono", children: f })), (r[6] = f), (r[7] = n))
          : (n = r[7]),
        r[8] !== x
          ? ((i = (e) => {
              ;(e.stopPropagation(), x(e.metaKey || e.ctrlKey))
            }),
            (r[8] = x),
            (r[9] = i))
          : (i = r[9]),
        r[10] !== m || r[11] !== i
          ? ((l = (0, a.jsx)(tI, {
              "data-agent-activity-file-link": !0,
              role: "link",
              tabIndex: 0,
              onClick: i,
              children: m,
            })),
            (r[10] = m),
            (r[11] = i),
            (r[12] = l))
          : (l = r[12]),
        r[13] !== n || r[14] !== l
          ? ((o = (0, a.jsx)(eg.m, { content: n, children: l })), (r[13] = n), (r[14] = l), (r[15] = o))
          : (o = r[15]),
        o
      )
    }
    var tM = n("SGsN"),
      tS = n("d6V2"),
      tN = n("hZax"),
      tT = n("WFY2")
    function t_(e) {
      let t,
        n,
        i,
        l,
        o,
        r,
        d,
        u,
        h = (0, s.c)(24),
        { conversationId: f, hostId: g, review: x } = e,
        v = (0, c.gh)(en.u),
        y = (0, m.A)(),
        w = (0, tN.Zj)("3487373434")
      h[0] !== f || h[1] !== g
        ? ((t = { conversationId: f, hostId: g }), (h[0] = f), (h[1] = g), (h[2] = t))
        : (t = h[2])
      let b = (0, c._U)(tS.Ix, t)
      h[3] !== f || h[4] !== g
        ? ((n = { conversationId: f, hostId: g }), (h[3] = f), (h[4] = g), (h[5] = n))
        : (n = h[5])
      let C = (0, c._U)(tS.MN, n)
      if (!w || null == x.event || b.has(x.id)) return null
      let j = x.event
      h[6] !== f || h[7] !== g || h[8] !== y || h[9] !== x.id || h[10] !== j || h[11] !== v
        ? ((i = async () => {
            try {
              if (!(await (0, tS.qS)({ scope: v, conversationId: f, event: j, hostId: g, reviewId: x.id }))) return
              v.get(tM.Id).success(
                y.formatMessage({
                  id: "composer.autoReviewDenialsSlashCommand.approvedToast",
                  defaultMessage: "Approval recorded",
                  description: "Toast shown after a user approves one retry of an auto-review denial",
                }),
              )
            } catch (e) {
              ;(tT.v.error("Failed to approve auto-review denial", { safe: {}, sensitive: { error: e } }),
                v
                  .get(tM.Id)
                  .danger(
                    y.formatMessage({
                      id: "composer.autoReviewDenialsSlashCommand.approvalFailedToast",
                      defaultMessage: "Could not record auto-review approval",
                      description: "Toast shown when approving one retry of an auto-review denial fails",
                    }),
                    { errorAnalytics: { toastId: "composer.autoReviewDenialsSlashCommand.approvalFailedToast" } },
                  ))
            }
          }),
          (h[6] = f),
          (h[7] = g),
          (h[8] = y),
          (h[9] = x.id),
          (h[10] = j),
          (h[11] = v),
          (h[12] = i))
        : (i = h[12])
      let A = i
      ;(h[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = (0, a.jsx)("p", {
            className: "font-medium text-secondary select-none",
            children: (0, a.jsx)(p.A, {
              id: "localConversation.autoReviewDenial.whatApprovalAllows",
              defaultMessage: "What approval allows",
              description: "Heading above the scope of a user's approval of an action declined by automatic review",
            }),
          })),
          (h[13] = l))
        : (l = h[13]),
        h[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, a.jsx)("p", {
              className: "min-w-0 flex-1 text-tertiary",
              children: (0, a.jsx)(p.A, {
                id: "localConversation.autoReviewDenial.approvalEffect",
                defaultMessage: "Records approval for this action and allows one retry. It does not run it.",
                description:
                  "Explains beside the Approve action that approval authorizes one retry of the denied action but does not execute it",
              }),
            })),
            (h[14] = o))
          : (o = h[14]))
      let I = null != C
      return (
        h[15] !== A
          ? ((r = (e) => {
              ;(e.stopPropagation(), A())
            }),
            (h[15] = A),
            (h[16] = r))
          : (r = h[16]),
        h[17] !== C || h[18] !== x.id
          ? ((d =
              C === x.id
                ? (0, a.jsx)(p.A, {
                    id: "localConversation.automaticApprovalReview.approving",
                    defaultMessage: "Approving…",
                    description: "Temporary action label shown while approving one retry of an auto-review denial",
                  })
                : (0, a.jsx)(p.A, {
                    id: "localConversation.automaticApprovalReview.approve",
                    defaultMessage: "Approve",
                    description: "Action that approves one retry of a command declined by auto-review",
                  })),
            (h[17] = C),
            (h[18] = x.id),
            (h[19] = d))
          : (d = h[19]),
        h[20] !== I || h[21] !== r || h[22] !== d
          ? ((u = (0, a.jsxs)("div", {
              className: "flex flex-col gap-1",
              children: [
                l,
                (0, a.jsxs)("div", {
                  className: "flex items-baseline justify-between gap-3",
                  children: [o, (0, a.jsx)(tI, { disabled: I, onClick: r, children: d })],
                }),
              ],
            })),
            (h[20] = I),
            (h[21] = r),
            (h[22] = d),
            (h[23] = u))
          : (u = h[23]),
        u
      )
    }
    var tR = n("PuGl"),
      tP = n("tHoD"),
      tL = n("pGLn")
    let tD = new Set(["python", "python3", "bash", "sh"])
    function tF(e) {
      let t,
        n,
        i,
        l = (0, s.c)(36),
        {
          conversationId: o,
          isReadOnly: r,
          item: c,
          isTurnInProgress: d,
          threadDetailLevel: u,
          hostId: m,
          summaryTone: p,
          showSummaryIcon: h,
          summaryIcon: f,
          hideRawCommand: g,
          toolActivityTurnKey: x,
        } = e,
        v = void 0 === p ? "default" : p,
        y = void 0 === h || h,
        w = void 0 !== g && g,
        b = !c.parsedCmd.isFinished,
        C = "interrupted" === c.executionStatus
      l[0] !== c ? ((t = (0, eU.LS)(c)), (l[0] = c), (l[1] = t)) : (t = l[1])
      let j = t,
        A = b && !d,
        I = !w && !b && !d && null != c.processId
      l[2] !== c.parsedCmd || l[3] !== j
        ? ((n = j ? { type: "unknown", cmd: c.parsedCmd.cmd, isFinished: !0 } : c.parsedCmd),
          (l[2] = c.parsedCmd),
          (l[3] = j),
          (l[4] = n))
        : (n = l[4])
      let k = n
      if ("read" === k.type) {
        let e
        return (
          l[5] !== m || l[6] !== c.automaticApprovalReviews || l[7] !== c.cwd || l[8] !== k || l[9] !== f || l[10] !== u
            ? ((e = (0, a.jsx)(tX, {
                summary: k,
                cwd: c.cwd,
                hostId: m,
                threadDetailLevel: u,
                automaticApprovalReviews: c.automaticApprovalReviews,
                summaryIcon: f,
              })),
              (l[5] = m),
              (l[6] = c.automaticApprovalReviews),
              (l[7] = c.cwd),
              (l[8] = k),
              (l[9] = f),
              (l[10] = u),
              (l[11] = e))
            : (e = l[11]),
          e
        )
      }
      if ("search" === k.type) {
        let e
        return (
          l[12] !== c.automaticApprovalReviews || l[13] !== k || l[14] !== f
            ? ((e = (0, a.jsx)(tz, {
                summary: k,
                automaticApprovalReviews: c.automaticApprovalReviews,
                summaryIcon: f,
              })),
              (l[12] = c.automaticApprovalReviews),
              (l[13] = k),
              (l[14] = f),
              (l[15] = e))
            : (e = l[15]),
          e
        )
      }
      if ("list_files" === k.type) {
        let e
        return (
          l[16] !== c.automaticApprovalReviews || l[17] !== k || l[18] !== f
            ? ((e = (0, a.jsx)(tK, {
                summary: k,
                automaticApprovalReviews: c.automaticApprovalReviews,
                summaryIcon: f,
              })),
              (l[16] = c.automaticApprovalReviews),
              (l[17] = k),
              (l[18] = f),
              (l[19] = e))
            : (e = l[19]),
          e
        )
      }
      return (
        l[20] !== o ||
        l[21] !== w ||
        l[22] !== m ||
        l[23] !== I ||
        l[24] !== A ||
        l[25] !== b ||
        l[26] !== r ||
        l[27] !== c ||
        l[28] !== y ||
        l[29] !== k ||
        l[30] !== f ||
        l[31] !== v ||
        l[32] !== x ||
        l[33] !== j ||
        l[34] !== C
          ? ((i = (0, a.jsx)(tO, {
              conversationId: o,
              hostId: m,
              isReadOnly: r,
              item: c,
              summary: k,
              isInProgress: b,
              isBackgroundTerminalRunning: A,
              isBackgroundTerminalFinished: I,
              wasInterrupted: C,
              wasDeclinedByAutoReview: j,
              summaryTone: v,
              showSummaryIcon: y,
              summaryIcon: f,
              hideRawCommand: w,
              toolActivityTurnKey: x,
            })),
            (l[20] = o),
            (l[21] = w),
            (l[22] = m),
            (l[23] = I),
            (l[24] = A),
            (l[25] = b),
            (l[26] = r),
            (l[27] = c),
            (l[28] = y),
            (l[29] = k),
            (l[30] = f),
            (l[31] = v),
            (l[32] = x),
            (l[33] = j),
            (l[34] = C),
            (l[35] = i))
          : (i = l[35]),
        i
      )
    }
    function tE(e) {
      let t,
        n,
        i,
        l,
        o,
        r = (0, s.c)(17),
        { label: c, automaticApprovalReviews: d, summaryIcon: u } = e
      ;(r[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, X.A)(
            "inline-flex min-w-0 max-w-full items-center gap-1.5 truncate",
            "text-text/40 [@media(hover:hover)]:group-[:hover:not(:has([data-agent-activity-file-link]:hover))]/activity-header:text-default",
            tL.A.execDescendants,
            "[&_*]:text-(--agent-activity-child-color) [@media(hover:hover)]:group-[:hover:not(:has([data-agent-activity-file-link]:hover))]/activity-header:[--agent-activity-child-color:var(--color-text)]",
          )),
          (r[0] = t))
        : (t = r[0]),
        r[1] !== c
          ? ((n = (0, a.jsx)("span", { className: "min-w-0 truncate", children: c })), (r[1] = c), (r[2] = n))
          : (n = r[2]),
        r[3] !== d ? ((i = null == d ? null : (0, a.jsx)(eZ.gV, {})), (r[3] = d), (r[4] = i)) : (i = r[4]),
        r[5] !== n || r[6] !== i
          ? ((l = (0, a.jsxs)("span", { className: t, children: [n, i] })), (r[5] = n), (r[6] = i), (r[7] = l))
          : (l = r[7]))
      let m = l
      if (null != d) {
        let e,
          t,
          n = u ?? null
        return (
          r[8] !== d ? ((e = (0, a.jsx)(eZ.x1, { reviews: d })), (r[8] = d), (r[9] = e)) : (e = r[9]),
          r[10] !== m || r[11] !== n || r[12] !== e
            ? ((t = (0, a.jsx)(eQ.Z, { icon: n, summary: m, shouldAnimateInitialCollapse: !1, children: e })),
              (r[10] = m),
              (r[11] = n),
              (r[12] = e),
              (r[13] = t))
            : (t = r[13]),
          t
        )
      }
      return (
        r[14] !== m || r[15] !== u
          ? ((o =
              void 0 === u
                ? (0, a.jsx)(tp.n, { header: (0, a.jsx)(tm.A, { children: m }) })
                : (0, a.jsx)(eW.o, { icon: u, summary: m })),
            (r[14] = m),
            (r[15] = u),
            (r[16] = o))
          : (o = r[16]),
        o
      )
    }
    function tO(e) {
      let t,
        n,
        i,
        l,
        o,
        r,
        d,
        m,
        h,
        f,
        g,
        x,
        v,
        y,
        w,
        b,
        C,
        j,
        A,
        I,
        k,
        M,
        S,
        N,
        _ = (0, s.c)(122),
        {
          conversationId: R,
          hostId: P,
          isReadOnly: L,
          item: F,
          summary: E,
          isInProgress: O,
          isBackgroundTerminalRunning: U,
          isBackgroundTerminalFinished: B,
          wasInterrupted: z,
          wasDeclinedByAutoReview: q,
          summaryTone: W,
          showSummaryIcon: H,
          summaryIcon: G,
          hideRawCommand: V,
          toolActivityTurnKey: $,
        } = e,
        K = (0, c.gh)(th.GD),
        Z = (0, u.useContext)(T.d),
        Q = F.output?.exitCode,
        J = z && null != F.processId && null == Q,
        Y = 0 === Q,
        [ee, et] = (0, u.useState)("collapsed"),
        [en, ea] = (0, u.useState)(tB)
      _[0] !== O || _[1] !== F.startedAtMs
        ? ((t = () => F.startedAtMs ?? (O ? Date.now() : null)), (_[0] = O), (_[1] = F.startedAtMs), (_[2] = t))
        : (t = _[2])
      let [es] = (0, u.useState)(t),
        ei = !V && "expanded" === ee,
        el = F.startedAtMs ?? es,
        eo = null != Z || V || !O || U || null == el ? null : 1e3
      ;(_[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = () => {
            ea(Date.now())
          }),
          (_[3] = n))
        : (n = _[3]),
        (0, tf.$)(n, eo),
        _[4] !== ei || _[5] !== K || _[6] !== $
          ? ((i = () => {
              let e = ei ? "collapsed" : "expanded"
              ;("expanded" === e && null != $ && (0, tb.h)(K, $), et(e))
            }),
            (_[4] = ei),
            (_[5] = K),
            (_[6] = $),
            (_[7] = i))
          : (i = _[7]))
      let er = i
      if (_[8] !== V || _[9] !== O || _[10] !== F.durationMs || _[11] !== en || _[12] !== el) {
        let e = (function ({ durationMs: e, isInProgress: t, nowMs: n, startedAtMs: a }) {
          return t && null != a ? Math.max(n - a, 0) : Math.max(e ?? 0, 0)
        })({ durationMs: F.durationMs ?? null, isInProgress: O, nowMs: en, startedAtMs: el })
        ;((l = !V && e > 0 ? ne(e) : null),
          (_[8] = V),
          (_[9] = O),
          (_[10] = F.durationMs),
          (_[11] = en),
          (_[12] = el),
          (_[13] = l))
      } else l = _[13]
      let ec = l,
        ed =
          "muted" === W
            ? "text-text/40 group-hover/activity-header:text-default"
            : "text-text-tertiary/90 group-hover/activity-header:text-default"
      if (
        _[14] !== ec ||
        _[15] !== Q ||
        _[16] !== er ||
        _[17] !== V ||
        _[18] !== B ||
        _[19] !== U ||
        _[20] !== J ||
        _[21] !== ei ||
        _[22] !== O ||
        _[23] !== Y ||
        _[24] !== F.automaticApprovalReviews ||
        _[25] !== F.cmd ||
        _[26] !== F.executionStatus ||
        _[27] !== F.output?.aggregatedOutput ||
        _[28] !== F.parsedCmd ||
        _[29] !== H ||
        _[30] !== E ||
        _[31] !== G ||
        _[32] !== ed ||
        _[33] !== Z ||
        _[34] !== q ||
        _[35] !== z
      ) {
        let e, t, n, s, i, l, c
        if (((d = q ? tc()(F.automaticApprovalReviews, tU) : void 0), (h = G), q)) {
          let e
          ;(_[50] !== H
            ? ((e = H ? (0, a.jsx)(D.I, { className: "shrink-0 text-warning", asset: eq.F }) : null),
              (_[50] = H),
              (_[51] = e))
            : (e = _[51]),
            (h = e))
        } else if (void 0 === h && H) {
          let e
          ;(_[52] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(D.I, { className: "shrink-0 text-tertiary", asset: to.K })), (_[52] = e))
            : (e = _[52]),
            (h = e))
        }
        ;(_[53] !== er || _[54] !== V || _[55] !== ei
          ? ((e = V ? void 0 : { expanded: ei, onToggle: er }), (_[53] = er), (_[54] = V), (_[55] = ei), (_[56] = e))
          : (e = _[56]),
          (m = e),
          _[57] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsx)(p.A, {
                id: "toolSummaryForCmd.backgroundTerminalStatusUnknown",
                defaultMessage: "Background terminal status unknown",
                description:
                  "Status for a background terminal whose turn was interrupted before the process exit was confirmed; the process may still be running",
              })),
              (_[57] = t))
            : (t = _[57]))
        let u = t,
          A = !V
        _[58] !== ec ||
        _[59] !== B ||
        _[60] !== U ||
        _[61] !== ei ||
        _[62] !== O ||
        _[63] !== F.cmd ||
        _[64] !== F.executionStatus ||
        _[65] !== E ||
        _[66] !== ed ||
        _[67] !== A ||
        _[68] !== q ||
        _[69] !== z
          ? ((n = (0, a.jsx)(t5, {
              summary: E,
              cmd: F.cmd,
              elapsedLabel: ec,
              isInProgress: O,
              isBackgroundTerminalRunning: U,
              isFinishedBackgroundTerminal: B,
              wasInterrupted: z,
              wasDeclinedByAutoReview: q,
              isExpanded: ei,
              showRawCommand: A,
              summaryStatusClassName: ed,
              executionStatus: F.executionStatus,
            })),
            (_[58] = ec),
            (_[59] = B),
            (_[60] = U),
            (_[61] = ei),
            (_[62] = O),
            (_[63] = F.cmd),
            (_[64] = F.executionStatus),
            (_[65] = E),
            (_[66] = ed),
            (_[67] = A),
            (_[68] = q),
            (_[69] = z),
            (_[70] = n))
          : (n = _[70])
        let I = n
        ;(J ? (I = u) : !Z || q || z || U || B || (I = F.parsedCmd.cmd),
          _[71] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, X.A)("min-w-0 truncate", "text-text/40 group-hover/activity-header:text-default")), (_[71] = s))
            : (s = _[71]),
          _[72] !== I
            ? ((i = (0, a.jsx)("span", { className: s, children: I })), (_[72] = I), (_[73] = i))
            : (i = _[73]),
          (f = i),
          (v = !ei || void 0),
          (r = tu.Q),
          (g = ei),
          (x = "exec-shell-body"),
          (o = tP.j),
          (y = Z ? "flush" : "default"))
        let k = Z && tL.A.transcriptDetail,
          M = !Z && !q && null != F.automaticApprovalReviews && "!pt-0"
        ;(_[74] !== k || _[75] !== M ? ((w = (0, X.A)(k, M)), (_[74] = k), (_[75] = M), (_[76] = w)) : (w = _[76]),
          (b =
            null == d &&
            null != F.automaticApprovalReviews &&
            (0, a.jsx)(eZ.x1, { reviews: F.automaticApprovalReviews })),
          _[77] !== F.cmd || _[78] !== F.parsedCmd || _[79] !== Z
            ? ((l = Z ? F.parsedCmd.cmd : td.fj(F.cmd)),
              (_[77] = F.cmd),
              (_[78] = F.parsedCmd),
              (_[79] = Z),
              (_[80] = l))
            : (l = _[80]))
        let S = F.output?.aggregatedOutput ?? ""
        ;(_[81] !== Q || _[82] !== J || _[83] !== O || _[84] !== Y || _[85] !== z
          ? ((c = J
              ? (0, a.jsx)("div", { className: "px-2.5 pt-0.5 pb-1 text-size-chat text-tertiary", children: u })
              : (0, a.jsx)(tR.d.Footer, { isInProgress: O, isSuccess: Y, exitCode: Q, wasInterrupted: z })),
            (_[81] = Q),
            (_[82] = J),
            (_[83] = O),
            (_[84] = Y),
            (_[85] = z),
            (_[86] = c))
          : (c = _[86]),
          _[87] !== O || _[88] !== l || _[89] !== S || _[90] !== c
            ? ((C = (0, a.jsx)(tR.d, { command: l, output: S, isInProgress: O, footer: c })),
              (_[87] = O),
              (_[88] = l),
              (_[89] = S),
              (_[90] = c),
              (_[91] = C))
            : (C = _[91]),
          (j =
            null != d &&
            (0, a.jsxs)("div", {
              className: "flex flex-col gap-1",
              children: [
                (0, a.jsx)("p", {
                  className: "font-medium text-secondary select-none",
                  children: (0, a.jsx)(p.A, {
                    id: "localConversation.autoReviewDenial.whyDenied",
                    defaultMessage: "Why it was denied",
                    description: "Heading above the reviewer's explanation for declining a command",
                  }),
                }),
                (0, a.jsx)("p", {
                  className: "break-words whitespace-pre-wrap text-tertiary",
                  children:
                    d.rationale?.trim() ||
                    (0, a.jsx)(p.A, {
                      id: "localConversation.autoReviewDenial.noRationale",
                      defaultMessage: "No denial reason was provided",
                      description:
                        "Fallback when the automatic review declined an action without providing an explanation",
                    }),
                }),
              ],
            })),
          (_[14] = ec),
          (_[15] = Q),
          (_[16] = er),
          (_[17] = V),
          (_[18] = B),
          (_[19] = U),
          (_[20] = J),
          (_[21] = ei),
          (_[22] = O),
          (_[23] = Y),
          (_[24] = F.automaticApprovalReviews),
          (_[25] = F.cmd),
          (_[26] = F.executionStatus),
          (_[27] = F.output?.aggregatedOutput),
          (_[28] = F.parsedCmd),
          (_[29] = H),
          (_[30] = E),
          (_[31] = G),
          (_[32] = ed),
          (_[33] = Z),
          (_[34] = q),
          (_[35] = z),
          (_[36] = o),
          (_[37] = r),
          (_[38] = d),
          (_[39] = m),
          (_[40] = h),
          (_[41] = f),
          (_[42] = g),
          (_[43] = x),
          (_[44] = v),
          (_[45] = y),
          (_[46] = w),
          (_[47] = b),
          (_[48] = C),
          (_[49] = j))
      } else
        ((o = _[36]),
          (r = _[37]),
          (d = _[38]),
          (m = _[39]),
          (h = _[40]),
          (f = _[41]),
          (g = _[42]),
          (x = _[43]),
          (v = _[44]),
          (y = _[45]),
          (w = _[46]),
          (b = _[47]),
          (C = _[48]),
          (j = _[49]))
      ;(_[92] !== R || _[93] !== d || _[94] !== P || _[95] !== L
        ? ((A = !L && null != d && null != P && (0, a.jsx)(t_, { conversationId: R, hostId: P, review: d })),
          (_[92] = R),
          (_[93] = d),
          (_[94] = P),
          (_[95] = L),
          (_[96] = A))
        : (A = _[96]),
        _[97] !== o || _[98] !== A || _[99] !== y || _[100] !== w || _[101] !== b || _[102] !== C || _[103] !== j
          ? ((I = (0, a.jsxs)(o, { variant: y, className: w, children: [b, C, j, A] })),
            (_[97] = o),
            (_[98] = A),
            (_[99] = y),
            (_[100] = w),
            (_[101] = b),
            (_[102] = C),
            (_[103] = j),
            (_[104] = I))
          : (I = _[104]),
        _[105] !== r || _[106] !== g || _[107] !== x || _[108] !== I
          ? ((k = (0, a.jsx)(r, { expanded: g, "data-testid": x, children: I })),
            (_[105] = r),
            (_[106] = g),
            (_[107] = x),
            (_[108] = I),
            (_[109] = k))
          : (k = _[109]),
        _[110] !== v || _[111] !== k
          ? ((M = (0, a.jsx)("div", { "data-thread-find-skip": v, children: k })),
            (_[110] = v),
            (_[111] = k),
            (_[112] = M))
          : (M = _[112]))
      let eu = M
      return (
        _[113] !== F.automaticApprovalReviews || _[114] !== q
          ? ((S = q || null == F.automaticApprovalReviews ? null : (0, a.jsx)(eZ.gV, {})),
            (_[113] = F.automaticApprovalReviews),
            (_[114] = q),
            (_[115] = S))
          : (S = _[115]),
        _[116] !== eu || _[117] !== m || _[118] !== h || _[119] !== f || _[120] !== S
          ? ((N = (0, a.jsx)(eW.o, {
              accessory: S,
              body: eu,
              className: "relative overflow-clip",
              disclosure: m,
              icon: h,
              summary: f,
            })),
            (_[116] = eu),
            (_[117] = m),
            (_[118] = h),
            (_[119] = f),
            (_[120] = S),
            (_[121] = N))
          : (N = _[121]),
        N
      )
    }
    function tU(e) {
      return "denied" === e.status
    }
    function tB() {
      return Date.now()
    }
    function tz(e) {
      let t,
        n,
        i = (0, s.c)(26),
        { summary: l, automaticApprovalReviews: o, summaryIcon: r } = e,
        { isFinished: c } = l
      if (l.query && l.path) {
        let e, n, s
        ;(i[0] !== l.path || i[1] !== l.query
          ? ((e = (0, a.jsx)(p.A, {
              id: "toolSummaryForCmd.searchedForInPath",
              defaultMessage: "<verb>Searched</verb> for {query} in {path}",
              description: "Shell command for searching for a query in a path",
              values: { query: l.query, path: l.path, verb: t$ },
            })),
            (i[0] = l.path),
            (i[1] = l.query),
            (i[2] = e))
          : (e = i[2]),
          i[3] !== l.path || i[4] !== l.query
            ? ((n = (0, a.jsx)(p.A, {
                id: "toolSummaryForCmd.searchingForInPath",
                defaultMessage: "<verb>Searching</verb> for {query} in {path}",
                description: "Shell command for searching for a query in a path",
                values: { query: l.query, path: l.path, verb: tV },
              })),
              (i[3] = l.path),
              (i[4] = l.query),
              (i[5] = n))
            : (n = i[5]),
          i[6] !== c || i[7] !== e || i[8] !== n
            ? ((s = (function ({ isFinished: e, finished: t, inProgress: n }) {
                return e ? t : n
              })({ isFinished: c, finished: e, inProgress: n })),
              (i[6] = c),
              (i[7] = e),
              (i[8] = n),
              (i[9] = s))
            : (s = i[9]),
          (t = s))
      } else if (l.query) {
        let e, n, s
        ;(i[10] !== l.query
          ? ((e = (0, a.jsx)(p.A, {
              id: "toolSummaryForCmd.searchedFor",
              defaultMessage: "<verb>Searched</verb> for {query}",
              description: "Shell command for searching for a query",
              values: { query: l.query, verb: tG },
            })),
            (i[10] = l.query),
            (i[11] = e))
          : (e = i[11]),
          i[12] !== l.query
            ? ((n = (0, a.jsx)(p.A, {
                id: "toolSummaryForCmd.searchingFor",
                defaultMessage: "<verb>Searching</verb> for {query}",
                description: "Shell command for searching for a query",
                values: { query: l.query, verb: tH },
              })),
              (i[12] = l.query),
              (i[13] = n))
            : (n = i[13]),
          i[14] !== c || i[15] !== e || i[16] !== n
            ? ((s = (function ({ isFinished: e, finished: t, inProgress: n }) {
                return e ? t : n
              })({ isFinished: c, finished: e, inProgress: n })),
              (i[14] = c),
              (i[15] = e),
              (i[16] = n),
              (i[17] = s))
            : (s = i[17]),
          (t = s))
      } else {
        let e, n, s
        ;(i[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(p.A, {
              id: "toolSummaryForCmd.searchedForFiles",
              defaultMessage: "<verb>Searched</verb> for files",
              description: "Shell command for searching for files",
              values: { verb: tW },
            })),
            (i[18] = e))
          : (e = i[18]),
          i[19] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, a.jsx)(p.A, {
                id: "toolSummaryForCmd.searchingForFiles",
                defaultMessage: "<verb>Searching</verb> for files",
                description: "Shell command for searching for files",
                values: { verb: tq },
              })),
              (i[19] = n))
            : (n = i[19]),
          i[20] !== c
            ? ((s = (function ({ isFinished: e, finished: t, inProgress: n }) {
                return e ? t : n
              })({ isFinished: c, finished: e, inProgress: n })),
              (i[20] = c),
              (i[21] = s))
            : (s = i[21]),
          (t = s))
      }
      return (
        i[22] !== o || i[23] !== t || i[24] !== r
          ? ((n = (0, a.jsx)(tE, { label: t, automaticApprovalReviews: o, summaryIcon: r })),
            (i[22] = o),
            (i[23] = t),
            (i[24] = r),
            (i[25] = n))
          : (n = i[25]),
        n
      )
    }
    function tq(e) {
      return t8(e)
    }
    function tW(e) {
      return t8(e)
    }
    function tH(e) {
      return t8(e)
    }
    function tG(e) {
      return t8(e)
    }
    function tV(e) {
      return t8(e)
    }
    function t$(e) {
      return t8(e)
    }
    function tK(e) {
      let t,
        n,
        i = (0, s.c)(16),
        { summary: l, automaticApprovalReviews: o, summaryIcon: r } = e,
        { isFinished: c } = l
      if (l.path) {
        let e, n, s
        ;(i[0] !== l.path
          ? ((e = (0, a.jsx)(p.A, {
              id: "toolSummaryForCmd.exploredFilesInPath",
              defaultMessage: "<verb>Listed</verb> files in {path}",
              description: "Shell command for listing files in a path",
              values: { path: l.path, verb: tY },
            })),
            (i[0] = l.path),
            (i[1] = e))
          : (e = i[1]),
          i[2] !== l.path
            ? ((n = (0, a.jsx)(p.A, {
                id: "toolSummaryForCmd.exploringFilesInPath",
                defaultMessage: "<verb>Listing</verb> files in {path}",
                description: "Shell command for listing files in a path",
                values: { path: l.path, verb: tJ },
              })),
              (i[2] = l.path),
              (i[3] = n))
            : (n = i[3]),
          i[4] !== c || i[5] !== e || i[6] !== n
            ? ((s = (function ({ isFinished: e, finished: t, inProgress: n }) {
                return e ? t : n
              })({ isFinished: c, finished: e, inProgress: n })),
              (i[4] = c),
              (i[5] = e),
              (i[6] = n),
              (i[7] = s))
            : (s = i[7]),
          (t = s))
      } else {
        let e, n, s
        ;(i[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(p.A, {
              id: "toolSummaryForCmd.exploredFiles",
              defaultMessage: "<verb>Listed</verb> files",
              description: "Shell command for listing files",
              values: { verb: tQ },
            })),
            (i[8] = e))
          : (e = i[8]),
          i[9] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, a.jsx)(p.A, {
                id: "toolSummaryForCmd.exploringFiles",
                defaultMessage: "<verb>Listing</verb> files",
                description: "Shell command for listing files",
                values: { verb: tZ },
              })),
              (i[9] = n))
            : (n = i[9]),
          i[10] !== c
            ? ((s = (function ({ isFinished: e, finished: t, inProgress: n }) {
                return e ? t : n
              })({ isFinished: c, finished: e, inProgress: n })),
              (i[10] = c),
              (i[11] = s))
            : (s = i[11]),
          (t = s))
      }
      return (
        i[12] !== o || i[13] !== t || i[14] !== r
          ? ((n = (0, a.jsx)(tE, { label: t, automaticApprovalReviews: o, summaryIcon: r })),
            (i[12] = o),
            (i[13] = t),
            (i[14] = r),
            (i[15] = n))
          : (n = i[15]),
        n
      )
    }
    function tZ(e) {
      return t8(e)
    }
    function tQ(e) {
      return t8(e)
    }
    function tJ(e) {
      return t8(e)
    }
    function tY(e) {
      return t8(e)
    }
    function tX(e) {
      let t,
        n,
        i,
        l,
        o,
        r = (0, s.c)(29),
        { summary: c, cwd: d, hostId: u, threadDetailLevel: m, automaticApprovalReviews: h, summaryIcon: f } = e,
        { displayLabel: g, isFinished: x, name: v, path: y } = c
      r[0] !== g || r[1] !== v ? ((t = g ?? (0, ty.i)(v)), (r[0] = g), (r[1] = v), (r[2] = t)) : (t = r[2])
      let w = t
      r[3] !== d || r[4] !== c
        ? ((n = (0, ez.$)({ summary: c, cwd: d })), (r[3] = d), (r[4] = c), (r[5] = n))
        : (n = r[5])
      let b = n
      if (y) {
        let e, t
        ;(r[6] !== y ? ((e = y.trim()), (r[6] = y), (r[7] = e)) : (e = r[7]),
          r[8] !== d || r[9] !== w || r[10] !== u || r[11] !== e
            ? ((t = (0, a.jsx)(tk, { cwd: d, displayPath: w, hostId: u, path: e }, "path")),
              (r[8] = d),
              (r[9] = w),
              (r[10] = u),
              (r[11] = e),
              (r[12] = t))
            : (t = r[12]),
          (i = t))
      } else {
        let e
        ;(r[13] !== w ? ((e = (0, a.jsx)("span", { children: w }, "path")), (r[13] = w), (r[14] = e)) : (e = r[14]),
          (i = e))
      }
      if (b?.isSkillDefinitionFile === !0) {
        let e, t
        if (!x && m !== eD.O$) return null
        r[15] !== x || r[16] !== b || r[17] !== m
          ? ((e = (0, a.jsx)(t0, { isFinished: x, skillPathInfo: b, threadDetailLevel: m })),
            (r[15] = x),
            (r[16] = b),
            (r[17] = m),
            (r[18] = e))
          : (e = r[18])
        let n = e
        return (
          r[19] !== h || r[20] !== n || r[21] !== f
            ? ((t = (0, a.jsx)(tE, { label: n, automaticApprovalReviews: h, summaryIcon: f })),
              (r[19] = h),
              (r[20] = n),
              (r[21] = f),
              (r[22] = t))
            : (t = r[22]),
          t
        )
      }
      if (!x) return null
      r[23] !== i
        ? ((l = (0, a.jsx)(p.A, {
            id: "toolSummaryForCmd.read",
            defaultMessage: "<verb>Read</verb> {path}",
            description:
              "Shown after the agent finishes reading a file. 'Read' describes the completed action performed by the agent, not a state of the file",
            values: { path: i, verb: t1 },
          })),
          (r[23] = i),
          (r[24] = l))
        : (l = r[24])
      let C = l
      return (
        r[25] !== h || r[26] !== C || r[27] !== f
          ? ((o = (0, a.jsx)(tE, { label: C, automaticApprovalReviews: h, summaryIcon: f })),
            (r[25] = h),
            (r[26] = C),
            (r[27] = f),
            (r[28] = o))
          : (o = r[28]),
        o
      )
    }
    function t1(e) {
      return t8(e)
    }
    function t0(e) {
      let t,
        n = (0, s.c)(5),
        { isFinished: i, skillPathInfo: l, threadDetailLevel: o } = e
      if (o === eD.O$) {
        let e
        return (
          n[0] !== i || n[1] !== l.skillName
            ? ((e = i
                ? (0, a.jsx)(p.A, {
                    id: "toolSummaryForCmd.readSkillDefinition.steps.finished",
                    defaultMessage: "<verb>Read</verb> {skillName} skill",
                    description:
                      "Non-technical summary shown after the agent finishes reading a skill definition. 'Read' describes the completed action performed by the agent, not a state of the skill definition",
                    values: { skillName: l.skillName, verb: t4 },
                  })
                : (0, a.jsx)(p.A, {
                    id: "toolSummaryForCmd.readSkillDefinition.steps.inProgress",
                    defaultMessage: "<verb>Reading</verb> {skillName} skill",
                    description: "Non-technical summary for an in-progress skill definition read",
                    values: { skillName: l.skillName, verb: t3 },
                  })),
              (n[0] = i),
              (n[1] = l.skillName),
              (n[2] = e))
            : (e = n[2]),
          e
        )
      }
      return (
        n[3] !== l.skillName
          ? ((t = (0, a.jsx)(p.A, {
              id: "toolSummaryForCmd.readSkillDefinition.technical",
              defaultMessage: "<verb>Read</verb> {skillName} skill",
              description:
                "Technical summary shown after the agent finishes reading a skill definition. 'Read' describes the completed action performed by the agent, not a state of the skill definition",
              values: { skillName: l.skillName, verb: t2 },
            })),
            (n[3] = l.skillName),
            (n[4] = t))
          : (t = n[4]),
        t
      )
    }
    function t2(e) {
      return t8(e)
    }
    function t3(e) {
      return t8(e)
    }
    function t4(e) {
      return t8(e)
    }
    function t5(e) {
      let t,
        n,
        i,
        l = (0, s.c)(83),
        {
          summary: o,
          cmd: r,
          elapsedLabel: c,
          isInProgress: d,
          isBackgroundTerminalRunning: u,
          isFinishedBackgroundTerminal: m,
          wasInterrupted: h,
          wasDeclinedByAutoReview: f,
          isExpanded: g,
          showRawCommand: x,
          summaryStatusClassName: v,
          executionStatus: y,
        } = e
      if (f) {
        let e, t
        l[0] !== g || l[1] !== x || l[2] !== o
          ? ((e = !g && x ? o.cmd.trim() : ""), (l[0] = g), (l[1] = x), (l[2] = o), (l[3] = e))
          : (e = l[3])
        let n = e
        return (
          l[4] !== n
            ? ((t = (0, a.jsx)("span", {
                className: "font-sans select-none",
                children:
                  n.length > 0
                    ? (0, a.jsx)(p.A, {
                        id: "toolSummaryForCmd.autoReviewDeclinedSpecificCommand",
                        defaultMessage: "Command declined by auto-review: {command}",
                        description:
                          "Summary for a command whose execution was declined by automatic approval review, including the command text",
                        values: { command: n },
                      })
                    : (0, a.jsx)(p.A, {
                        id: "toolSummaryForCmd.autoReviewDeclinedCommand",
                        defaultMessage: "Command declined by auto-review",
                        description: "Summary for a command whose execution was declined by automatic approval review",
                      }),
              })),
              (l[4] = n),
              (l[5] = t))
            : (t = l[5]),
          t
        )
      }
      l[6] !== y || l[7] !== o
        ? ((t = (0, tg.X)(y) ? (0, tg.mw)(o.cmd) : null), (l[6] = y), (l[7] = o), (l[8] = t))
        : (t = l[8])
      let w = t
      if (null != w && !h) {
        let e
        return (
          l[9] !== d || l[10] !== w
            ? ((e = (0, a.jsx)(tx, { kind: w, isInProgress: d })), (l[9] = d), (l[10] = w), (l[11] = e))
            : (e = l[11]),
          e
        )
      }
      if (
        (function (e) {
          let t
          try {
            t = td.lD(e)
          } catch {
            return !1
          }
          return (
            "date" === t[0]?.split("/").at(-1) &&
            t
              .slice(1)
              .every(
                (e) =>
                  e.startsWith("+") ||
                  "-u" === e ||
                  "--utc" === e ||
                  "--universal" === e ||
                  "-R" === e ||
                  "--rfc-email" === e ||
                  "-I" === e ||
                  e.startsWith("-I=") ||
                  e.startsWith("--iso-8601") ||
                  e.startsWith("--rfc-3339"),
              )
          )
        })(o.cmd)
      ) {
        let e, t
        if (h) {
          let e, t
          return (
            l[12] !== c
              ? ((e =
                  null != c
                    ? (0, a.jsx)(p.A, {
                        id: "toolSummaryForCmd.stoppedCheckingCurrentDateTimeWithElapsed",
                        defaultMessage: "Stopped checking the current date and time after {elapsed}",
                        description:
                          "Summary for an interrupted shell command that reads the current date and time, including elapsed time",
                        values: { elapsed: c },
                      })
                    : (0, a.jsx)(p.A, {
                        id: "toolSummaryForCmd.stoppedCheckingCurrentDateTimeWithoutElapsed",
                        defaultMessage: "Stopped checking the current date and time",
                        description: "Summary for an interrupted shell command that reads the current date and time",
                      })),
                (l[12] = c),
                (l[13] = e))
              : (e = l[13]),
            l[14] !== v || l[15] !== e
              ? ((t = (0, a.jsx)("span", { className: v, children: e })), (l[14] = v), (l[15] = e), (l[16] = t))
              : (t = l[16]),
            t
          )
        }
        if (d) {
          let e
          return (
            l[17] !== c
              ? ((e = (0, a.jsx)(eJ.N, {
                  children:
                    null != c
                      ? (0, a.jsx)(p.A, {
                          id: "toolSummaryForCmd.checkingCurrentDateTimeWithElapsed",
                          defaultMessage: "Checking the current date and time for {elapsed}",
                          description:
                            "Summary for an in-progress shell command that reads the current date and time, including elapsed time",
                          values: { elapsed: c },
                        })
                      : (0, a.jsx)(p.A, {
                          id: "toolSummaryForCmd.checkingCurrentDateTimeWithoutElapsed",
                          defaultMessage: "Checking the current date and time",
                          description: "Summary for an in-progress shell command that reads the current date and time",
                        }),
                })),
                (l[17] = c),
                (l[18] = e))
              : (e = l[18]),
            e
          )
        }
        return (
          l[19] !== c
            ? ((e =
                null != c
                  ? (0, a.jsx)(p.A, {
                      id: "toolSummaryForCmd.checkedCurrentDateTimeWithElapsed",
                      defaultMessage: "Checked the current date and time in {elapsed}",
                      description:
                        "Summary for a completed shell command that reads the current date and time, including elapsed time",
                      values: { elapsed: c },
                    })
                  : (0, a.jsx)(p.A, {
                      id: "toolSummaryForCmd.checkedCurrentDateTimeWithoutElapsed",
                      defaultMessage: "Checked the current date and time",
                      description: "Summary for a completed shell command that reads the current date and time",
                    })),
              (l[19] = c),
              (l[20] = e))
            : (e = l[20]),
          l[21] !== v || l[22] !== e
            ? ((t = (0, a.jsx)("span", { className: v, children: e })), (l[21] = v), (l[22] = e), (l[23] = t))
            : (t = l[23]),
          t
        )
      }
      let b = "unknown" === o.type && (u || m || !g)
      l[24] !== r || l[25] !== b
        ? ((n = b
            ? (function (e) {
                let t = t9(e[0] ?? "")
                if (null == t || !tD.has(t)) return null
                let n = (function (e) {
                  for (let t = 1; t < e.length; t += 1) {
                    let n = e[t]
                    if (!(!n || n.startsWith("-"))) return n
                  }
                  return null
                })(e)
                if (null == n) return null
                let a = (0, tw.F)(n)
                if (null == a || !a.isInScriptsFolder) return null
                let s = t9(n)
                return null == s ? null : { skillName: a.skillName, fileName: s }
              })(r)
            : null),
          (l[24] = r),
          (l[25] = b),
          (l[26] = n))
        : (n = l[26])
      let C = n
      l[27] !== x || l[28] !== o.cmd
        ? ((i = x ? o.cmd.trim() : ""), (l[27] = x), (l[28] = o.cmd), (l[29] = i))
        : (i = l[29])
      let j = i
      switch (o.type) {
        case "format":
        case "test":
        case "lint":
        case "noop":
        case "unknown": {
          let e, t, n, s
          if (d) {
            let e
            if (u) {
              let e
              if (null != C) {
                let e
                return (
                  l[30] !== C.fileName || l[31] !== C.skillName
                    ? ((e = (0, a.jsx)(t6, {
                        children: (0, a.jsx)(p.A, {
                          id: "toolSummaryForCmd.background.started.skillScript",
                          defaultMessage: "Started background terminal running {fileName} from {skillName} skill",
                          description:
                            "Summary for a background terminal command that is running a script from a skill",
                          values: { fileName: C.fileName, skillName: C.skillName },
                        }),
                      })),
                      (l[30] = C.fileName),
                      (l[31] = C.skillName),
                      (l[32] = e))
                    : (e = l[32]),
                  e
                )
              }
              if (j.length > 0) {
                let e
                return (
                  l[33] !== j
                    ? ((e = (0, a.jsx)(t6, {
                        children: (0, a.jsx)(p.A, {
                          id: "toolSummaryForCmd.startedBackgroundTerminalWithCommand",
                          defaultMessage: "Started background terminal with {command}",
                          description:
                            "Summary for a command that is still running in a background terminal after the turn has completed, including the command",
                          values: { command: j },
                        }),
                      })),
                      (l[33] = j),
                      (l[34] = e))
                    : (e = l[34]),
                  e
                )
              }
              return (
                l[35] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(t6, {
                      children: (0, a.jsx)(p.A, {
                        id: "toolSummaryForCmd.startedBackgroundTerminal",
                        defaultMessage: "Started background terminal",
                        description:
                          "Summary for a command that is still running in a background terminal after the turn has completed",
                      }),
                    })),
                    (l[35] = e))
                  : (e = l[35]),
                e
              )
            }
            return (
              l[36] !== c
                ? ((e = (0, a.jsx)(eJ.N, {
                    children:
                      null != c
                        ? (0, a.jsx)(p.A, {
                            id: "toolSummaryForCmd.runningGenericCommandWithElapsed",
                            defaultMessage: "Running command for {elapsed}",
                            description:
                              "Fallback summary for an in-progress command when not classified, including elapsed time",
                            values: { elapsed: c },
                          })
                        : (0, a.jsx)(p.A, {
                            id: "toolSummaryForCmd.runningGenericCommandWithoutElapsed",
                            defaultMessage: "Running command",
                            description: "Fallback summary for an in-progress command when not classified",
                          }),
                  })),
                  (l[36] = c),
                  (l[37] = e))
                : (e = l[37]),
              e
            )
          }
          if (m) {
            let e, t
            l[38] !== j || l[39] !== C
              ? ((e = null != C ? (0, a.jsx)(t7, { summary: C }) : j), (l[38] = j), (l[39] = C), (l[40] = e))
              : (e = l[40])
            let n = e
            if ((null != C || j.length > 0) && h) {
              let e
              return (
                l[41] !== n
                  ? ((e = (0, a.jsx)("span", {
                      className: "font-sans text-codex-description group-hover/activity-header:text-default",
                      children: (0, a.jsx)(p.A, {
                        id: "toolSummaryForCmd.stoppedBackgroundTerminalWithCommand",
                        defaultMessage: "Background terminal stopped with {command}",
                        description: "Summary for a background terminal command that was interrupted",
                        values: { command: n },
                      }),
                    })),
                    (l[41] = n),
                    (l[42] = e))
                  : (e = l[42]),
                e
              )
            }
            if (null != C) {
              let e
              return (
                l[43] !== C.fileName || l[44] !== C.skillName
                  ? ((e = (0, a.jsx)(t6, {
                      children: (0, a.jsx)(p.A, {
                        id: "toolSummaryForCmd.background.finished.skillScript",
                        defaultMessage: "Background terminal finished running {fileName} from {skillName} skill",
                        description:
                          "Summary for a background terminal command that finished running a script from a skill",
                        values: { fileName: C.fileName, skillName: C.skillName },
                      }),
                    })),
                    (l[43] = C.fileName),
                    (l[44] = C.skillName),
                    (l[45] = e))
                  : (e = l[45]),
                e
              )
            }
            if (j.length > 0) {
              let e
              return (
                l[46] !== n
                  ? ((e = (0, a.jsx)(t6, {
                      children: (0, a.jsx)(p.A, {
                        id: "toolSummaryForCmd.finishedBackgroundTerminalWithCommand",
                        defaultMessage: "Ran {command}",
                        description:
                          "Summary for a background terminal command that has finished, including the command text",
                        values: { command: n },
                      }),
                    })),
                    (l[46] = n),
                    (l[47] = e))
                  : (e = l[47]),
                e
              )
            }
            if (h) {
              let e
              return (
                l[48] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)("span", {
                      className: "font-sans text-codex-description group-hover/activity-header:text-default",
                      children: (0, a.jsx)(p.A, {
                        id: "toolSummaryForCmd.stoppedBackgroundTerminal",
                        defaultMessage: "Background terminal stopped",
                        description: "Summary for a background terminal command that was interrupted",
                      }),
                    })),
                    (l[48] = e))
                  : (e = l[48]),
                e
              )
            }
            return (
              l[49] === Symbol.for("react.memo_cache_sentinel")
                ? ((t = (0, a.jsx)(t6, {
                    children: (0, a.jsx)(p.A, {
                      id: "toolSummaryForCmd.finishedBackgroundTerminal",
                      defaultMessage: "Background terminal finished",
                      description: "Summary for a background terminal command that has finished",
                    }),
                  })),
                  (l[49] = t))
                : (t = l[49]),
              t
            )
          }
          l[50] !== j || l[51] !== C
            ? ((e = null != C ? (0, a.jsx)(t7, { summary: C }) : j), (l[50] = j), (l[51] = C), (l[52] = e))
            : (e = l[52])
          let i = e
          if (!g && (null != C || j.length > 0)) {
            let e, t, n
            if (h) {
              let e, t, n
              return (
                l[53] !== v ? ((e = (0, X.A)("font-sans", v)), (l[53] = v), (l[54] = e)) : (e = l[54]),
                l[55] !== i || l[56] !== c
                  ? ((t =
                      null != c
                        ? (0, a.jsx)(p.A, {
                            id: "toolSummaryForCmd.stoppedSpecificCommandWithElapsed",
                            defaultMessage: "Stopped {command} after {elapsed}",
                            description:
                              "Summary for an interrupted command when collapsed, including the command text and elapsed time",
                            values: { command: i, elapsed: c },
                          })
                        : (0, a.jsx)(p.A, {
                            id: "toolSummaryForCmd.stoppedSpecificCommandWithoutElapsed",
                            defaultMessage: "Stopped {command}",
                            description:
                              "Summary for an interrupted command when collapsed, including the command text",
                            values: { command: i },
                          })),
                    (l[55] = i),
                    (l[56] = c),
                    (l[57] = t))
                  : (t = l[57]),
                l[58] !== e || l[59] !== t
                  ? ((n = (0, a.jsx)("span", { className: e, children: t })), (l[58] = e), (l[59] = t), (l[60] = n))
                  : (n = l[60]),
                n
              )
            }
            return (
              l[61] !== v ? ((e = (0, X.A)("font-sans", v)), (l[61] = v), (l[62] = e)) : (e = l[62]),
              l[63] !== i || l[64] !== c
                ? ((t =
                    null != c
                      ? (0, a.jsx)(p.A, {
                          id: "toolSummaryForCmd.ranSpecificCommandWithElapsed",
                          defaultMessage: "Ran {command} in {elapsed}",
                          description:
                            "Summary for a completed command when collapsed, including the command text and elapsed time",
                          values: { command: i, elapsed: c },
                        })
                      : (0, a.jsx)(p.A, {
                          id: "toolSummaryForCmd.ranSpecificCommandWithoutElapsed",
                          defaultMessage: "Ran {command}",
                          description: "Summary for a completed command when collapsed, including the command text",
                          values: { command: i },
                        })),
                  (l[63] = i),
                  (l[64] = c),
                  (l[65] = t))
                : (t = l[65]),
              l[66] !== e || l[67] !== t
                ? ((n = (0, a.jsx)("span", { className: e, children: t })), (l[66] = e), (l[67] = t), (l[68] = n))
                : (n = l[68]),
              n
            )
          }
          if (h) {
            let e, t, n
            return (
              l[69] !== v ? ((e = (0, X.A)("font-sans", v)), (l[69] = v), (l[70] = e)) : (e = l[70]),
              l[71] !== c
                ? ((t =
                    null != c
                      ? (0, a.jsx)(p.A, {
                          id: "toolSummaryForCmd.stoppedGenericCommandWithElapsed",
                          defaultMessage: "Stopped command after {elapsed}",
                          description:
                            "Fallback summary for an interrupted command when not classified, including elapsed time",
                          values: { elapsed: c },
                        })
                      : (0, a.jsx)(p.A, {
                          id: "toolSummaryForCmd.stoppedGenericCommandWithoutElapsed",
                          defaultMessage: "Stopped command",
                          description: "Fallback summary for an interrupted command when not classified",
                        })),
                  (l[71] = c),
                  (l[72] = t))
                : (t = l[72]),
              l[73] !== e || l[74] !== t
                ? ((n = (0, a.jsx)("span", { className: e, children: t })), (l[73] = e), (l[74] = t), (l[75] = n))
                : (n = l[75]),
              n
            )
          }
          return (
            l[76] !== v ? ((t = (0, X.A)("font-sans", v)), (l[76] = v), (l[77] = t)) : (t = l[77]),
            l[78] !== c
              ? ((n =
                  null != c
                    ? (0, a.jsx)(p.A, {
                        id: "toolSummaryForCmd.ranGenericCommandWithElapsed",
                        defaultMessage: "Ran command in {elapsed}",
                        description:
                          "Fallback summary for a completed command when not classified, including elapsed time",
                        values: { elapsed: c },
                      })
                    : (0, a.jsx)(p.A, {
                        id: "toolSummaryForCmd.ranGenericCommandWithoutElapsed",
                        defaultMessage: "Ran command",
                        description: "Fallback summary for a completed command when not classified",
                      })),
                (l[78] = c),
                (l[79] = n))
              : (n = l[79]),
            l[80] !== t || l[81] !== n
              ? ((s = (0, a.jsx)("span", { className: t, children: n })), (l[80] = t), (l[81] = n), (l[82] = s))
              : (s = l[82]),
            s
          )
        }
      }
    }
    function t6(e) {
      let t,
        n = (0, s.c)(2),
        { children: i } = e
      return (
        n[0] !== i
          ? ((t = (0, a.jsx)("span", {
              className: "font-sans text-codex-description group-hover/activity-header:text-default",
              children: i,
            })),
            (n[0] = i),
            (n[1] = t))
          : (t = n[1]),
        t
      )
    }
    function t7(e) {
      let t,
        n = (0, s.c)(3),
        { summary: i } = e
      return (
        n[0] !== i.fileName || n[1] !== i.skillName
          ? ((t = (0, a.jsx)(p.A, {
              id: "toolSummaryForCmd.skillScript",
              defaultMessage: "script {fileName} from {skillName} skill",
              description: "Semantic summary label for commands that run scripts from a skill",
              values: { fileName: i.fileName, skillName: i.skillName },
            })),
            (n[0] = i.fileName),
            (n[1] = i.skillName),
            (n[2] = t))
          : (t = n[2]),
        t
      )
    }
    function t8(e) {
      return (0, a.jsxs)(a.Fragment, {
        children: [
          null,
          (0, a.jsx)(a.Fragment, { children: (0, a.jsx)("span", { className: "text-text-tertiary/90", children: e }) }),
        ],
      })
    }
    function t9(e) {
      let t = e.replaceAll("\\", "/").replace(/\/+$/, "")
      if (0 === t.length) return null
      let n = t.split("/").at(-1) ?? null
      return null == n || 0 === n.length || "scripts" === n ? null : n
    }
    let ne = tv.C
    var nt = n("sQP0"),
      nn = n("likb"),
      na = n("w8pS"),
      ns = n("Mbi0")
    function ni(e) {
      let t,
        n,
        i,
        l,
        o = (0, s.c)(15),
        { sourceConversationId: r, kind: c } = e,
        d = (0, m.A)(),
        u = (0, h.Zp)(),
        f = (0, e9.OX)() ? `/hotkey-window/thread/${r}` : `/local/${r}`
      if ("parent-context" === (void 0 === c ? "thread-fork" : c)) {
        let e, t, n
        return (
          o[0] !== d
            ? ((e = d.formatMessage({
                id: "localConversation.parentThread",
                defaultMessage: "Parent chat",
                description:
                  "Attachment label shown above the first message in a forked subagent task. Clicking it navigates to the parent task.",
              })),
              (o[0] = d),
              (o[1] = e))
            : (e = o[1]),
          o[2] !== u || o[3] !== f
            ? ((t = () => {
                u(f)
              }),
              (o[2] = u),
              (o[3] = f),
              (o[4] = t))
            : (t = o[4]),
          o[5] !== e || o[6] !== t
            ? ((n = (0, a.jsx)(nn.m, { filename: e, Icon: na.A, onClick: t })), (o[5] = e), (o[6] = t), (o[7] = n))
            : (n = o[7]),
          n
        )
      }
      return (
        o[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(D.I, { className: "shrink-0", "aria-hidden": !1, asset: nt.K })), (o[8] = t))
          : (t = o[8]),
        o[9] !== u || o[10] !== f
          ? ((n = () => {
              u(f)
            }),
            (o[9] = u),
            (o[10] = f),
            (o[11] = n))
          : (n = o[11]),
        o[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, a.jsx)(p.A, {
              id: "localConversation.forkedFromConversation",
              defaultMessage: "Continued from chat",
              description: "Divider shown when a chat was continued from another chat",
            })),
            (o[12] = i))
          : (i = o[12]),
        o[13] !== n
          ? ((l = (0, a.jsxs)(ns.B, {
              labelClassName: "max-w-[70%]",
              children: [
                t,
                (0, a.jsx)("button", {
                  type: "button",
                  className: "max-w-64 min-w-0 truncate text-start align-bottom text-link-primary hover:underline",
                  onClick: n,
                  children: i,
                }),
              ],
            })),
            (o[13] = n),
            (o[14] = l))
          : (l = o[14]),
        l
      )
    }
    var nl = n("hHaO"),
      no = n("bN4H"),
      nr = n("sIzd")
    function nc(e) {
      let t,
        n,
        i,
        l = (0, s.c)(14),
        { automationId: o, conversationId: r, message: d, sentAtMs: u, cwd: h, hostId: f, compactActions: g } = e,
        x = void 0 !== g && g,
        v = (0, c.gh)(th.GD),
        y = (0, m.A)(),
        w = null != o && o.length > 0
      l[0] !== o || l[1] !== w || l[2] !== y || l[3] !== v
        ? ((t = () => {
            w &&
              (0, no.openAutomationSidePanelTab)({
                scope: v,
                automationId: o,
                title: y.formatMessage({
                  id: "localConversation.heartbeatUserMessage.automationTabTitle",
                  defaultMessage: "Scheduled task",
                  description: "Right panel tab title for a scheduled task opened from a trigger message",
                }),
              })
          }),
          (l[0] = o),
          (l[1] = w),
          (l[2] = y),
          (l[3] = v),
          (l[4] = t))
        : (t = l[4])
      let b = t
      l[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(E.bF, { icon16: F.QC9, legacyIcon: nr.A, legacyClassName: "icon-2xs", "aria-hidden": !1 }),
              (0, a.jsx)(p.A, {
                id: "localConversation.heartbeatUserMessage.automation",
                defaultMessage: "Sent by scheduled task",
                description: "Label shown above a user-message-style scheduled task trigger",
              }),
            ],
          })),
          (l[5] = n))
        : (n = l[5])
      let C = n,
        j = w ? b : void 0
      return (
        l[6] !== x || l[7] !== r || l[8] !== h || l[9] !== f || l[10] !== d || l[11] !== u || l[12] !== j
          ? ((i = (0, a.jsx)(ee, {
              conversationId: r,
              label: C,
              message: d,
              sentAtMs: u,
              cwd: h,
              hostId: f,
              compactActions: x,
              onLabelClick: j,
            })),
            (l[6] = x),
            (l[7] = r),
            (l[8] = h),
            (l[9] = f),
            (l[10] = d),
            (l[11] = u),
            (l[12] = j),
            (l[13] = i))
          : (i = l[13]),
        i
      )
    }
    var nd = n("GL6x")
    function nu(e) {
      let t,
        n,
        i,
        l,
        o,
        r,
        c = (0, s.c)(19),
        { icon: d, item: h, conversationId: f } = e,
        g = (0, m.A)(),
        [x, v] = (0, u.useState)(!1)
      c[0] !== h.imagePaths ? ((t = h.imagePaths ?? []), (c[0] = h.imagePaths), (c[1] = t)) : (t = c[1])
      let y = t
      c[2] !== g
        ? ((n = g.formatMessage({
            id: "localConversation.imageView.previewAlt",
            defaultMessage: "Inspected image",
            description: "Alt text for an image inspected by the agent",
          })),
          (c[2] = g),
          (c[3] = n))
        : (n = c[3])
      let w = n
      c[4] !== h.imageCount
        ? ((i = (0, a.jsx)("span", {
            className: "block truncate text-text/40",
            children: (0, a.jsx)(p.A, {
              id: "localConversation.imageView.summary",
              defaultMessage: "{imageCount, plural, one {Viewed an image} other {Viewed # images}}",
              description: "Completed activity summary indicating that the agent inspected one or more images",
              values: { imageCount: h.imageCount },
            }),
          })),
          (c[4] = h.imageCount),
          (c[5] = i))
        : (i = c[5])
      let b = i
      return (
        c[6] !== f || c[7] !== w || c[8] !== y || c[9] !== x
          ? ((l = x
              ? (0, a.jsx)(tP.j, {
                  className: "min-w-0",
                  children: (0, a.jsx)("div", {
                    className: "hide-scrollbar flex max-w-full overflow-x-auto pb-1",
                    children: (0, a.jsx)("div", {
                      className: "flex min-w-max gap-2",
                      children: (0, a.jsx)(nd.BW, { srcs: y, conversationId: f, alt: w, useImageDialog: !0 }),
                    }),
                  }),
                })
              : null),
            (c[6] = f),
            (c[7] = w),
            (c[8] = y),
            (c[9] = x),
            (c[10] = l))
          : (l = c[10]),
        c[11] !== y.length || c[12] !== x
          ? ((o = y.length > 0 ? { expanded: x, onToggle: () => v(nm) } : void 0),
            (c[11] = y.length),
            (c[12] = x),
            (c[13] = o))
          : (o = c[13]),
        c[14] !== d || c[15] !== b || c[16] !== l || c[17] !== o
          ? ((r = (0, a.jsx)(eW.o, { body: l, className: "overflow-clip", disclosure: o, icon: d, summary: b })),
            (c[14] = d),
            (c[15] = b),
            (c[16] = l),
            (c[17] = o),
            (c[18] = r))
          : (r = c[18]),
        r
      )
    }
    function nm(e) {
      return !e
    }
    var np = n("sJco"),
      nh = n("g6Vb"),
      nf = n("KRWX"),
      ng = n("vNUM"),
      nx = n("pbO5"),
      nv = n("aYPm"),
      ny = n("Diah")
    function nw(e) {
      let t,
        n,
        i,
        l,
        o,
        r = (0, s.c)(16),
        { conversationId: d, hostId: u, requestId: m, getWalletSurface: p } = e,
        h = (0, c._U)(ex.dA, d)
      if (r[0] !== m || r[1] !== h) {
        i = Symbol.for("react.early_return_sentinel")
        e: {
          let e = h?.find((e) => e.id === m)
          if (e?.method !== "mcpServer/elicitation/request") {
            i = null
            break e
          }
          n = !(t = (0, nv.$)(e.params)) || !(0, ng.L)(t)
        }
        ;((r[0] = m), (r[1] = h), (r[2] = t), (r[3] = n), (r[4] = i))
      } else ((t = r[2]), (n = r[3]), (i = r[4]))
      return i !== Symbol.for("react.early_return_sentinel")
        ? i
        : n
          ? null
          : (r[5] !== d || r[6] !== u || r[7] !== m
              ? ((l = JSON.stringify([u, d, m])), (r[5] = d), (r[6] = u), (r[7] = m), (r[8] = l))
              : (l = r[8]),
            r[9] !== d || r[10] !== t || r[11] !== p || r[12] !== u || r[13] !== m || r[14] !== l
              ? ((o = (0, a.jsx)(
                  ny.o,
                  { conversationId: d, hostId: u, requestId: m, elicitation: t, getWalletSurface: p },
                  l,
                )),
                (r[9] = d),
                (r[10] = t),
                (r[11] = p),
                (r[12] = u),
                (r[13] = m),
                (r[14] = l),
                (r[15] = o))
              : (o = r[15]),
            o)
    }
    var nb = n("COSu"),
      nC = n("sM3V")
    function nj(e) {
      let t,
        n,
        i = (0, s.c)(9),
        { hostId: l, conversationId: o, serverName: r, completed: d } = e,
        u = void 0 !== d && d
      i[0] !== o || i[1] !== l || i[2] !== r
        ? ((t = { hostId: l, serverName: r, threadId: o }), (i[0] = o), (i[1] = l), (i[2] = r), (i[3] = t))
        : (t = i[3])
      let m = (0, c._U)(nC.f, t)
      return (
        i[4] !== u || i[5] !== m?.name || i[6] !== m?.title || i[7] !== r
          ? ((n = u
              ? (0, a.jsx)(p.A, {
                  id: "localConversation.mcpForm.requestedInformation",
                  defaultMessage: "{serverName} requested information",
                  description: "Completed activity identifying the plugin that requested a form",
                  values: { serverName: m?.title ?? m?.name ?? r },
                })
              : (0, a.jsx)(p.A, {
                  id: "localConversation.mcpForm.requestsInformation",
                  defaultMessage: "{serverName} requests information",
                  description: "Pending activity identifying the plugin requesting a form",
                  values: { serverName: m?.title ?? m?.name ?? r },
                })),
            (i[4] = u),
            (i[5] = m?.name),
            (i[6] = m?.title),
            (i[7] = r),
            (i[8] = n))
          : (n = i[8]),
        n
      )
    }
    var nA = n("atrt"),
      nI = n("tjyI"),
      nk = n("xthC"),
      nM = n("mjcS"),
      nS = n("alO6"),
      nN = n("WLXs")
    function nT(e) {
      let t,
        n,
        i = (0, s.c)(5),
        { ref: l, questionsAndAnswers: o } = e
      return (
        i[0] !== o ? ((t = o.map(n_)), (i[0] = o), (i[1] = t)) : (t = i[1]),
        i[2] !== l || i[3] !== t
          ? ((n = (0, a.jsx)("div", { ref: l, className: "flex flex-col gap-3 pt-1 pb-0.5", children: t })),
            (i[2] = l),
            (i[3] = t),
            (i[4] = n))
          : (n = i[4]),
        n
      )
    }
    function n_(e) {
      let { answer: t, id: n, question: s } = e
      return (0, a.jsxs)(
        "div",
        {
          className: "flex flex-col gap-1",
          children: [
            (0, a.jsx)("span", { className: "text-size-chat whitespace-pre-wrap text-text/60", children: s }),
            (0, a.jsx)("span", {
              className: "text-size-chat whitespace-pre-wrap text-text/30",
              children:
                t ??
                (0, a.jsx)(p.A, {
                  id: "localConversation.userInputRequest.noAnswer",
                  defaultMessage: "No answer provided",
                  description: "Placeholder shown when a user input question has no answer",
                }),
            }),
          ],
        },
        n,
      )
    }
    function nR(e) {
      let t,
        n,
        i,
        l,
        o,
        r = (0, s.c)(16),
        { icon: c, questionsAndAnswers: d, summary: m } = e,
        [p, h] = (0, u.useState)(!1),
        f = d.length > 0,
        g = f && p
      r[0] !== f
        ? ((t = () => {
            f && h(nP)
          }),
          (r[0] = f),
          (r[1] = t))
        : (t = r[1])
      let x = t
      ;(r[2] !== d ? ((n = (0, a.jsx)(nT, { questionsAndAnswers: d })), (r[2] = d), (r[3] = n)) : (n = r[3]),
        r[4] !== g || r[5] !== n
          ? ((i = (0, a.jsx)(tu.Q, { expanded: g, className: "mt-1.5", children: n })),
            (r[4] = g),
            (r[5] = n),
            (r[6] = i))
          : (i = r[6]))
      let v = i
      return (
        r[7] !== f || r[8] !== p || r[9] !== x
          ? ((l = f ? { expanded: p, onToggle: x } : void 0), (r[7] = f), (r[8] = p), (r[9] = x), (r[10] = l))
          : (l = r[10]),
        r[11] !== v || r[12] !== c || r[13] !== m || r[14] !== l
          ? ((o = (0, a.jsx)(eW.o, { icon: c, summary: m, disclosure: l, body: v })),
            (r[11] = v),
            (r[12] = c),
            (r[13] = m),
            (r[14] = l),
            (r[15] = o))
          : (o = r[15]),
        o
      )
    }
    function nP(e) {
      return !e
    }
    function nL(e) {
      let t,
        n,
        i,
        l,
        o,
        r = (0, s.c)(68),
        {
          conversationId: c,
          conversationDetailLevel: d,
          hostId: u,
          icon: h,
          item: f,
          isReadOnly: g,
          getWalletSurface: x,
        } = e,
        v = (0, m.A)(),
        y =
          "toolSuggestion" === f.elicitation.kind &&
          "plugin" === f.elicitation.suggestion.tool_type &&
          "install" === f.elicitation.suggestion.suggest_type
            ? f.elicitation.suggestion
            : null
      if (!f.completed) {
        let e, t
        switch (f.elicitation.kind) {
          case "toolSuggestion": {
            let t
            if (
              (r[0] !== c || r[1] !== u || r[2] !== f.elicitation.suggestion || r[3] !== f.requestId
                ? ((t = (0, a.jsx)(nI.r, {
                    conversationId: c,
                    hostId: u,
                    requestId: f.requestId,
                    suggestion: f.elicitation.suggestion,
                  })),
                  (r[0] = c),
                  (r[1] = u),
                  (r[2] = f.elicitation.suggestion),
                  (r[3] = f.requestId),
                  (r[4] = t))
                : (t = r[4]),
              (e = t),
              null != y)
            ) {
              let t, n, s
              r[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((t = (0, a.jsx)(D.I, { className: "shrink-0", asset: np.t })), (r[5] = t))
                : (t = r[5])
              let i = d === eD.O$ ? "ChatGPT" : "Codex"
              ;(r[6] !== i
                ? ((n = (0, a.jsx)(p.A, {
                    id: "localConversation.agentActivity.pluginInstallationRequired",
                    defaultMessage: "{appName} needs to use a plugin",
                    description:
                      "Static activity status shown above an inline plugin-installation request; appName is ChatGPT in Work mode and Codex in coding mode",
                    values: { appName: i },
                  })),
                  (r[6] = i),
                  (r[7] = n))
                : (n = r[7]),
                r[8] !== e || r[9] !== n
                  ? ((s = (0, a.jsx)(eW.o, { className: "gap-2", body: e, icon: t, summary: n })),
                    (r[8] = e),
                    (r[9] = n),
                    (r[10] = s))
                  : (s = r[10]),
                (e = s))
            }
            break
          }
          case "connectorAuth": {
            let t
            ;(r[11] !== c || r[12] !== u || r[13] !== f.elicitation || r[14] !== f.requestId
              ? ((t = (0, a.jsx)(nA.S, { conversationId: c, hostId: u, requestId: f.requestId, auth: f.elicitation })),
                (r[11] = c),
                (r[12] = u),
                (r[13] = f.elicitation),
                (r[14] = f.requestId),
                (r[15] = t))
              : (t = r[15]),
              (e = t))
            break
          }
          case "urlAction": {
            let t
            ;(r[16] !== c || r[17] !== u || r[18] !== f.elicitation || r[19] !== f.requestId
              ? ((t = (0, a.jsx)(nk.q, {
                  conversationId: c,
                  hostId: u,
                  requestId: f.requestId,
                  action: f.elicitation,
                })),
                (r[16] = c),
                (r[17] = u),
                (r[18] = f.elicitation),
                (r[19] = f.requestId),
                (r[20] = t))
              : (t = r[20]),
              (e = t))
            break
          }
          case "formElicitation":
          case "openaiForm":
          case "legacyOpenAIForm": {
            let e, t
            return (
              r[21] !== c || r[22] !== u || r[23] !== f.elicitation.serverName
                ? ((e = (0, a.jsx)(nj, { hostId: u, conversationId: c, serverName: f.elicitation.serverName })),
                  (r[21] = c),
                  (r[22] = u),
                  (r[23] = f.elicitation.serverName),
                  (r[24] = e))
                : (e = r[24]),
              r[25] !== h || r[26] !== e
                ? ((t = (0, a.jsx)(eW.o, { icon: h, summary: e })), (r[25] = h), (r[26] = e), (r[27] = t))
                : (t = r[27]),
              t
            )
          }
          case "userVerification": {
            let t
            if (!(void 0 !== g && g) && (0, ng.L)(f.elicitation)) {
              let t
              ;(r[28] !== c || r[29] !== x || r[30] !== u || r[31] !== f.requestId
                ? ((t = (0, a.jsx)(nw, { conversationId: c, hostId: u, requestId: f.requestId, getWalletSurface: x })),
                  (r[28] = c),
                  (r[29] = x),
                  (r[30] = u),
                  (r[31] = f.requestId),
                  (r[32] = t))
                : (t = r[32]),
                (e = t))
              break
            }
            return (
              r[33] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, a.jsx)(e0, {})), (r[33] = t)) : (t = r[33]),
              t
            )
          }
          case "browserAuth":
          case "generic":
          case "mcpToolCall":
          case "unsupportedOpenAIForm": {
            let e
            return (
              r[34] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, a.jsx)(e0, {})), (r[34] = e)) : (e = r[34]),
              e
            )
          }
        }
        return (
          r[35] !== e
            ? ((t = (0, a.jsx)(nf.i.Provider, { value: !1, children: e })), (r[35] = e), (r[36] = t))
            : (t = r[36]),
          t
        )
      }
      if (null != y && null != f.action) {
        let e,
          t,
          n,
          s = "accept" === f.action
        return (
          r[37] !== u || r[38] !== y.tool_id || r[39] !== y.tool_name || r[40] !== s
            ? ((e = s
                ? (0, a.jsx)(nM.V, {
                    alt: y.tool_name,
                    className: "icon-xs shrink-0 rounded-2xs bg-surface object-contain",
                    fallback: (0, a.jsx)(nb.A, { className: "icon-xs shrink-0 text-secondary" }),
                    hostId: u,
                    pluginId: y.tool_id,
                  })
                : null),
              (r[37] = u),
              (r[38] = y.tool_id),
              (r[39] = y.tool_name),
              (r[40] = s),
              (r[41] = e))
            : (e = r[41]),
          r[42] !== d || r[43] !== y.tool_name || r[44] !== s
            ? ((t = s
                ? (0, a.jsx)(p.A, {
                    id: "localConversation.mcpServerElicitation.pluginInstalled",
                    defaultMessage: "Installed {pluginName}",
                    description:
                      "Compact conversation activity shown after the user installs a plugin requested by the assistant",
                    values: { pluginName: y.tool_name },
                  })
                : (0, a.jsx)(p.A, {
                    id: "localConversation.mcpServerElicitation.pluginNotInstalled",
                    defaultMessage: "{appName} did not install {pluginName}",
                    description:
                      "Compact conversation activity shown after the user declines or cancels a plugin installation; appName is ChatGPT in Work mode and Codex in coding mode",
                    values: { appName: d === eD.O$ ? "ChatGPT" : "Codex", pluginName: y.tool_name },
                  })),
              (r[42] = d),
              (r[43] = y.tool_name),
              (r[44] = s),
              (r[45] = t))
            : (t = r[45]),
          r[46] !== e || r[47] !== t
            ? ((n = (0, a.jsx)(eW.o, { icon: e, summary: t })), (r[46] = e), (r[47] = t), (r[48] = n))
            : (n = r[48]),
          n
        )
      }
      r[49] !== v || r[50] !== f
        ? ((t = (function (e, t) {
            switch (e.elicitation.kind) {
              case "userVerification":
                return e.elicitation.title
              case "connectorAuth":
              case "browserAuth":
              case "formElicitation":
              case "generic":
              case "openaiForm":
              case "legacyOpenAIForm":
              case "urlAction":
                return e.elicitation.message
              case "mcpToolCall": {
                if (null != e.elicitation.approvalPresentation)
                  return (0, nh.hN)(e.elicitation.approvalPresentation, t).message
                let n = (0, nS.xB)({ approval: e.elicitation.approval })
                return null == n ? e.elicitation.message : (0, a.jsx)(nN.w, { message: n })
              }
              case "toolSuggestion":
                return e.elicitation.suggestion.suggest_reason
              case "unsupportedOpenAIForm":
                return null
            }
          })(f, v)),
          (r[49] = v),
          (r[50] = f),
          (r[51] = t))
        : (t = r[51])
      let w = t
      if (null == w) return null
      if (
        "formElicitation" === f.elicitation.kind ||
        "openaiForm" === f.elicitation.kind ||
        "legacyOpenAIForm" === f.elicitation.kind
      ) {
        let e
        ;(r[52] !== c || r[53] !== u || r[54] !== f.elicitation.serverName
          ? ((e = (0, a.jsx)(nj, {
              hostId: u,
              conversationId: c,
              serverName: f.elicitation.serverName,
              completed: !0,
            })),
            (r[52] = c),
            (r[53] = u),
            (r[54] = f.elicitation.serverName),
            (r[55] = e))
          : (e = r[55]),
          (n = e))
      } else if ("mcpToolCall" === f.elicitation.kind) {
        let e
        ;(r[56] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(p.A, {
              id: "localConversation.mcpServerElicitation.requestedPermission",
              defaultMessage: "Requested permission",
              description: "Summary shown for a completed MCP server tool call permission request",
            })),
            (r[56] = e))
          : (e = r[56]),
          (n = e))
      } else {
        let e
        ;(r[57] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(p.A, {
              id: "localConversation.mcpServerElicitation.completedRequest",
              defaultMessage: "Completed request",
              description: "Summary shown for a completed MCP server elicitation that was not a permission request",
            })),
            (r[57] = e))
          : (e = r[57]),
          (n = e))
      }
      let b = f.requestId
      return (
        r[58] !== f.action
          ? ((i = (function (e) {
              switch (e) {
                case "accept":
                  return (0, a.jsx)(p.A, {
                    id: "localConversation.mcpServerElicitation.accepted",
                    defaultMessage: "Accepted",
                    description: "Status label for an accepted MCP server elicitation",
                  })
                case "cancel":
                  return (0, a.jsx)(p.A, {
                    id: "localConversation.mcpServerElicitation.cancelled",
                    defaultMessage: "Cancelled",
                    description: "Status label for a cancelled MCP server elicitation",
                  })
                case "decline":
                  return (0, a.jsx)(p.A, {
                    id: "localConversation.mcpServerElicitation.declined",
                    defaultMessage: "Declined",
                    description: "Status label for a declined MCP server elicitation",
                  })
                case null:
                  return (0, a.jsx)(p.A, {
                    id: "localConversation.mcpServerElicitation.completed",
                    defaultMessage: "Completed",
                    description: "Status label for a completed MCP server elicitation with no recorded action",
                  })
              }
            })(f.action)),
            (r[58] = f.action),
            (r[59] = i))
          : (i = r[59]),
        r[60] !== f.requestId || r[61] !== w || r[62] !== i
          ? ((l = [{ id: b, question: w, answer: i }]), (r[60] = f.requestId), (r[61] = w), (r[62] = i), (r[63] = l))
          : (l = r[63]),
        r[64] !== h || r[65] !== n || r[66] !== l
          ? ((o = (0, a.jsx)(nR, { icon: h, questionsAndAnswers: l, summary: n })),
            (r[64] = h),
            (r[65] = n),
            (r[66] = l),
            (r[67] = o))
          : (o = r[67]),
        o
      )
    }
    function nD(e) {
      let t,
        n,
        i = (0, s.c)(5),
        l = (0, c.gh)(th.GD)
      return (
        i[0] !== l ? ((t = (e) => (0, nx.A)(l, e)), (i[0] = l), (i[1] = t)) : (t = i[1]),
        i[2] !== e || i[3] !== t
          ? ((n = (0, a.jsx)(nL, { ...e, getWalletSurface: t })), (i[2] = e), (i[3] = t), (i[4] = n))
          : (n = i[4]),
        n
      )
    }
    var nF = n("FVQK"),
      nE = n("BGqp"),
      nO = n("ypxs"),
      nU = n("j44z"),
      nB = n("O5Ra"),
      nz = n("ER5p")
    function nq(e) {
      let t,
        n,
        i,
        l,
        o,
        r,
        c,
        d,
        u,
        h = (0, s.c)(19),
        { fromModel: f, toModel: g } = e,
        x = (0, m.A)(),
        { data: v } = (0, nU.Ym)(),
        y = v?.models
      h[0] !== f || h[1] !== y ? ((t = nW(f, y)), (h[0] = f), (h[1] = y), (h[2] = t)) : (t = h[2])
      let w = t,
        b = v?.models
      h[3] !== b || h[4] !== g ? ((n = nW(g, b)), (h[3] = b), (h[4] = g), (h[5] = n)) : (n = h[5])
      let C = n
      return (
        h[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, a.jsx)(D.I, { "aria-hidden": !1, asset: nO.n })), (h[6] = i))
          : (i = h[6]),
        h[7] !== w || h[8] !== C
          ? ((l = (0, a.jsx)(p.A, {
              id: "localConversation.modelChanged",
              defaultMessage: "Model changed from {fromModel} to {toModel}.",
              description: "Synthetic divider shown when model changes for the next turn.",
              values: { fromModel: w, toModel: C },
            })),
            (h[7] = w),
            (h[8] = C),
            (h[9] = l))
          : (l = h[9]),
        h[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, a.jsxs)("div", {
              className: "max-w-3xs text-center",
              children: [
                (0, a.jsx)("div", {
                  children: (0, a.jsx)(p.A, {
                    id: "localConversation.modelChanged.warning.line1",
                    defaultMessage: "Changing models mid-conversation will degrade performance.",
                    description: "First line of warning tooltip shown after the model-changed inline status.",
                  }),
                }),
                (0, a.jsx)("div", {
                  children: (0, a.jsx)(p.A, {
                    id: "localConversation.modelChanged.warning.line2",
                    defaultMessage: "Context may automatically compact.",
                    description: "Second line of warning tooltip shown after the model-changed inline status.",
                  }),
                }),
              ],
            })),
            (h[10] = o))
          : (o = h[10]),
        h[11] !== x
          ? ((r = x.formatMessage({
              id: "localConversation.modelChanged.warning.details",
              defaultMessage: "Model change warning",
              description:
                "Accessible name for the information button beside a transcript model-change divider. Focusing it reveals the existing warning about changing models during a conversation.",
            })),
            (h[11] = x),
            (h[12] = r))
          : (r = h[12]),
        h[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)(E.bF, { "aria-hidden": !1, asset16: eV.c, legacyIcon: G.A, legacyClassName: "icon-2xs" })),
            (h[13] = c))
          : (c = h[13]),
        h[14] !== r
          ? ((d = (0, a.jsx)(eg.m, {
              content: o,
              children: (0, a.jsx)(eg.m.TriggerDecorator, {
                unstyled: !0,
                children: (0, a.jsx)("span", {
                  className: "inline-flex items-center",
                  role: "img",
                  "aria-label": r,
                  children: c,
                }),
              }),
            })),
            (h[14] = r),
            (h[15] = d))
          : (d = h[15]),
        h[16] !== d || h[17] !== l
          ? ((u = (0, a.jsx)(e$.i, { icon: i, message: l, trailingContent: d })), (h[16] = d), (h[17] = l), (h[18] = u))
          : (u = h[18]),
        u
      )
    }
    function nW(e, t) {
      let n = (0, nz.bs)(t, e)?.displayName
      return null != n && n.trim().length > 0
        ? (0, nB.K)(n)
        : (0, a.jsx)(p.A, {
            id: "composer.mode.local.model.custom",
            defaultMessage: "Custom",
            description: "Custom model from config",
          })
    }
    var nH = n("CxEf")
    function nG(e) {
      let t,
        n,
        i,
        l,
        o = (0, s.c)(10),
        { toModel: r, reason: c } = e,
        d = (0, m.A)(),
        u = "highRiskCyberActivity" === c
      o[0] !== r ? ((t = (0, nB.K)(r)), (o[0] = r), (o[1] = t)) : (t = o[1])
      let h = t
      return (
        o[2] !== h
          ? ((n = (0, a.jsx)(p.A, {
              id: "localConversation.modelRerouted",
              defaultMessage: "Your request was routed to {toModel}.",
              description: "Synthetic divider shown when a request is rerouted to another model.",
              values: { toModel: h },
            })),
            (o[2] = h),
            (o[3] = n))
          : (n = o[3]),
        o[4] !== d || o[5] !== u
          ? ((i = u
              ? (0, a.jsx)(nH.m, {
                  className: "inline-flex items-center",
                  "aria-label": d.formatMessage(n$.reroutedWarning),
                  interactive: !0,
                  keyboardNavigation: !0,
                  triggerAsChild: !1,
                  tooltipContent: (0, a.jsxs)("div", {
                    className: "max-w-3xs text-center whitespace-normal",
                    children: [
                      (0, a.jsx)("div", { children: (0, a.jsx)(p.A, { ...n$.reroutedWarning }) }),
                      (0, a.jsx)("div", {
                        className: "mt-2",
                        children: (0, a.jsx)(p.A, {
                          id: "localConversation.modelRerouted.warning.line2",
                          defaultMessage:
                            "Think this is a mistake? Request a review at <link>chatgpt.com/cyber</link> or report via /feedback",
                          description: "Second line of warning tooltip shown after the model-rerouted inline status.",
                          values: { link: nV },
                        }),
                      }),
                    ],
                  }),
                  children: (0, a.jsx)(G.A, { className: "icon-2xs" }),
                })
              : null),
            (o[4] = d),
            (o[5] = u),
            (o[6] = i))
          : (i = o[6]),
        o[7] !== n || o[8] !== i
          ? ((l = (0, a.jsx)(e$.i, { message: n, trailingContent: i })), (o[7] = n), (o[8] = i), (o[9] = l))
          : (l = o[9]),
        l
      )
    }
    function nV(e) {
      return (0, a.jsx)("a", {
        href: "https://chatgpt.com/cyber",
        target: "_blank",
        rel: "noreferrer",
        className: "text-link-primary! underline-offset-2 hover:underline",
        children: e,
      })
    }
    let n$ = (0, J.YK)({
      reroutedWarning: {
        id: "localConversation.modelRerouted.warning.line1",
        defaultMessage: "Heads up, your request was re-routed to reduce cyber-abuse risk.",
        description: "First line of warning tooltip shown after the model-rerouted inline status.",
      },
    })
    var nK = n("zhow"),
      nZ = n("gbfI"),
      nQ = n("R18E"),
      nJ = n("PgCv"),
      nY = n("Cr0J")
    let nX = (0, J.YK)({
        interruptInProgress: {
          id: "localConversation.multiAgentAction.interrupt.inProgress",
          defaultMessage: "Interrupting",
          description: "Header and row label while interrupting an agent's work.",
        },
        interruptCompleted: {
          id: "localConversation.multiAgentAction.interrupt.completed",
          defaultMessage: "Interrupted",
          description: "Header and row label after interrupting an agent's work.",
        },
        interruptFailed: {
          id: "localConversation.multiAgentAction.interrupt.failed",
          defaultMessage: "Failed to interrupt",
          description: "Header and row label when interrupting an agent fails.",
        },
        listInProgress: {
          id: "localConversation.multiAgentAction.list.inProgress",
          defaultMessage: "Listing",
          description: "Header and row label while listing agents.",
        },
        listCompleted: {
          id: "localConversation.multiAgentAction.list.completed",
          defaultMessage: "Listed",
          description: "Header and row label after listing agents.",
        },
        listFailed: {
          id: "localConversation.multiAgentAction.list.failed",
          defaultMessage: "Failed to list",
          description: "Header and row label when listing agents fails.",
        },
        actionInterrupted: {
          id: "localConversation.multiAgentAction.action.interrupted",
          defaultMessage: "Interrupted",
          description: "Header and row label for an agent action interrupted before completion.",
        },
        headerSpawnInProgress: {
          id: "localConversation.multiAgentAction.header.spawn.inProgress",
          defaultMessage: "Creating",
          description: "Header for in-progress spawnAgent multi-agent action.",
        },
        headerSpawnCompleted: {
          id: "localConversation.multiAgentAction.header.spawn.completed",
          defaultMessage: "Created",
          description: "Header for completed spawnAgent multi-agent action.",
        },
        headerSpawnFailed: {
          id: "localConversation.multiAgentAction.header.spawn.failed",
          defaultMessage: "Failed to create",
          description: "Header for failed spawnAgent multi-agent action.",
        },
        headerSendInputInProgress: {
          id: "localConversation.multiAgentAction.header.sendInput.inProgress",
          defaultMessage: "Messaging",
          description: "Header for in-progress sendInput multi-agent action.",
        },
        headerSendInputCompleted: {
          id: "localConversation.multiAgentAction.header.sendInput.completed",
          defaultMessage: "Messaged",
          description: "Header for completed sendInput multi-agent action.",
        },
        headerSendInputFailed: {
          id: "localConversation.multiAgentAction.header.sendInput.failed",
          defaultMessage: "Failed to message",
          description: "Header for failed sendInput multi-agent action.",
        },
        headerResumeInProgress: {
          id: "localConversation.multiAgentAction.header.resume.inProgress",
          defaultMessage: "Resuming",
          description: "Header for in-progress resumeAgent multi-agent action.",
        },
        headerResumeCompleted: {
          id: "localConversation.multiAgentAction.header.resume.completed",
          defaultMessage: "Resumed",
          description: "Header for completed resumeAgent multi-agent action.",
        },
        headerResumeFailed: {
          id: "localConversation.multiAgentAction.header.resume.failed",
          defaultMessage: "Failed to resume",
          description: "Header for failed resumeAgent multi-agent action.",
        },
        headerCloseInProgress: {
          id: "localConversation.multiAgentAction.header.close.inProgress",
          defaultMessage: "Closing",
          description: "Header for in-progress closeAgent multi-agent action.",
        },
        headerCloseCompleted: {
          id: "localConversation.multiAgentAction.header.close.completed",
          defaultMessage: "Closed",
          description: "Header for completed closeAgent multi-agent action.",
        },
        headerCloseFailed: {
          id: "localConversation.multiAgentAction.header.close.failed",
          defaultMessage: "Failed to close",
          description: "Header for failed closeAgent multi-agent action.",
        },
        rowSpawnInProgress: {
          id: "localConversation.multiAgentAction.rowAction.spawn.inProgress",
          defaultMessage: "Creating",
          description: "Per-agent verb for in-progress spawnAgent actions.",
        },
        rowSpawnCompleted: {
          id: "localConversation.multiAgentAction.rowAction.spawn.completed",
          defaultMessage: "Created",
          description: "Per-agent verb for completed spawnAgent actions.",
        },
        rowSpawnFailed: {
          id: "localConversation.multiAgentAction.rowAction.spawn.failed",
          defaultMessage: "Failed creating",
          description: "Per-agent verb for failed spawnAgent actions.",
        },
        rowSendInputInProgress: {
          id: "localConversation.multiAgentAction.rowAction.sendInput.inProgress",
          defaultMessage: "Messaging",
          description: "Per-agent verb for in-progress sendInput actions.",
        },
        rowSendInputCompleted: {
          id: "localConversation.multiAgentAction.rowAction.sendInput.completed",
          defaultMessage: "Messaged",
          description: "Per-agent verb for completed sendInput actions.",
        },
        rowSendInputFailed: {
          id: "localConversation.multiAgentAction.rowAction.sendInput.failed",
          defaultMessage: "Failed messaging",
          description: "Per-agent verb for failed sendInput actions.",
        },
        rowResumeInProgress: {
          id: "localConversation.multiAgentAction.rowAction.resume.inProgress",
          defaultMessage: "Resuming",
          description: "Per-agent verb for in-progress resumeAgent actions.",
        },
        rowResumeCompleted: {
          id: "localConversation.multiAgentAction.rowAction.resume.completed",
          defaultMessage: "Resumed",
          description: "Per-agent verb for completed resumeAgent actions.",
        },
        rowResumeFailed: {
          id: "localConversation.multiAgentAction.rowAction.resume.failed",
          defaultMessage: "Failed resuming",
          description: "Per-agent verb for failed resumeAgent actions.",
        },
        rowCloseInProgress: {
          id: "localConversation.multiAgentAction.rowAction.close.inProgress",
          defaultMessage: "Closing",
          description: "Per-agent verb for in-progress closeAgent actions.",
        },
        rowCloseCompleted: {
          id: "localConversation.multiAgentAction.rowAction.close.completed",
          defaultMessage: "Closed",
          description: "Per-agent verb for completed closeAgent actions.",
        },
        rowCloseFailed: {
          id: "localConversation.multiAgentAction.rowAction.close.failed",
          defaultMessage: "Failed closing",
          description: "Per-agent verb for failed closeAgent actions.",
        },
        rowSendInputMessagedInProgress: {
          id: "localConversation.multiAgentAction.rowAction.sendInput.messaged.inProgress",
          defaultMessage: "Messaging",
          description: "Row action label for in-progress sendInput rows.",
        },
        rowSendInputMessagedCompleted: {
          id: "localConversation.multiAgentAction.rowAction.sendInput.messaged.completed",
          defaultMessage: "Messaged",
          description: "Row action label for completed sendInput rows.",
        },
        rowSendInputMessagedFailed: {
          id: "localConversation.multiAgentAction.rowAction.sendInput.messaged.failed",
          defaultMessage: "Failed to message",
          description: "Row action label for failed sendInput rows.",
        },
        statePendingInit: {
          id: "localConversation.multiAgentAction.agentState.pendingInit",
          defaultMessage: "pending init",
          description: "Status label for pendingInit sub-agent state.",
        },
        stateRunning: {
          id: "localConversation.multiAgentAction.agentState.running",
          defaultMessage: "running",
          description: "Status label for running sub-agent state.",
        },
        stateInterrupted: {
          id: "localConversation.multiAgentAction.agentState.interrupted",
          defaultMessage: "interrupted",
          description: "Status label for interrupted sub-agent state.",
        },
        stateShutdown: {
          id: "localConversation.multiAgentAction.agentState.shutdown",
          defaultMessage: "shutdown",
          description: "Status label for shutdown sub-agent state.",
        },
        stateCompleted: {
          id: "localConversation.multiAgentAction.agentState.completed",
          defaultMessage: "completed",
          description: "Status label for completed sub-agent state.",
        },
        stateErrored: {
          id: "localConversation.multiAgentAction.agentState.errored",
          defaultMessage: "errored",
          description: "Status label for errored sub-agent state.",
        },
        stateNotFound: {
          id: "localConversation.multiAgentAction.agentState.notFound",
          defaultMessage: "not found",
          description: "Status label for notFound sub-agent state.",
        },
      }),
      n1 = {
        spawnAgent: n7({
          inProgress: nX.headerSpawnInProgress,
          completed: nX.headerSpawnCompleted,
          failed: nX.headerSpawnFailed,
        }),
        sendInput: n7({
          inProgress: nX.headerSendInputInProgress,
          completed: nX.headerSendInputCompleted,
          failed: nX.headerSendInputFailed,
        }),
        sendMessage: n7({
          inProgress: nX.headerSendInputInProgress,
          completed: nX.headerSendInputCompleted,
          failed: nX.headerSendInputFailed,
        }),
        followupTask: n7({
          inProgress: nX.headerSendInputInProgress,
          completed: nX.headerSendInputCompleted,
          failed: nX.headerSendInputFailed,
        }),
        interruptAgent: n7({
          inProgress: nX.interruptInProgress,
          completed: nX.interruptCompleted,
          failed: nX.interruptFailed,
        }),
        listAgents: n7({ inProgress: nX.listInProgress, completed: nX.listCompleted, failed: nX.listFailed }),
        resumeAgent: n7({
          inProgress: nX.headerResumeInProgress,
          completed: nX.headerResumeCompleted,
          failed: nX.headerResumeFailed,
        }),
        closeAgent: n7({
          inProgress: nX.headerCloseInProgress,
          completed: nX.headerCloseCompleted,
          failed: nX.headerCloseFailed,
        }),
      },
      n0 = {
        spawnAgent: n7({
          inProgress: nX.rowSpawnInProgress,
          completed: nX.rowSpawnCompleted,
          failed: nX.rowSpawnFailed,
        }),
        sendInput: n7({
          inProgress: nX.rowSendInputInProgress,
          completed: nX.rowSendInputCompleted,
          failed: nX.rowSendInputFailed,
        }),
        sendMessage: n7({
          inProgress: nX.rowSendInputInProgress,
          completed: nX.rowSendInputCompleted,
          failed: nX.rowSendInputFailed,
        }),
        followupTask: n7({
          inProgress: nX.rowSendInputInProgress,
          completed: nX.rowSendInputCompleted,
          failed: nX.rowSendInputFailed,
        }),
        interruptAgent: n7({
          inProgress: nX.interruptInProgress,
          completed: nX.interruptCompleted,
          failed: nX.interruptFailed,
        }),
        listAgents: n7({ inProgress: nX.listInProgress, completed: nX.listCompleted, failed: nX.listFailed }),
        resumeAgent: n7({
          inProgress: nX.rowResumeInProgress,
          completed: nX.rowResumeCompleted,
          failed: nX.rowResumeFailed,
        }),
        closeAgent: n7({
          inProgress: nX.rowCloseInProgress,
          completed: nX.rowCloseCompleted,
          failed: nX.rowCloseFailed,
        }),
      },
      n2 = n7({
        inProgress: nX.rowSendInputMessagedInProgress,
        completed: nX.rowSendInputMessagedCompleted,
        failed: nX.rowSendInputMessagedFailed,
      }),
      n3 = {
        pendingInit: nX.statePendingInit,
        running: nX.stateRunning,
        interrupted: nX.stateInterrupted,
        shutdown: nX.stateShutdown,
        completed: nX.stateCompleted,
        errored: nX.stateErrored,
        notFound: nX.stateNotFound,
      }
    function n4(e) {
      let t,
        n,
        i,
        l,
        o,
        r,
        c,
        d,
        h,
        f,
        g,
        x,
        v,
        y,
        w,
        b,
        C,
        j = (0, s.c)(46),
        { conversationId: A, icon: I, items: k } = e,
        M = (0, u.useContext)(nY.T),
        S = (0, nJ.d)(),
        N = (0, m.A)(),
        T = k[0],
        [_, R] = (0, u.useState)(!1)
      if (j[0] !== N || j[1] !== S || j[2] !== k || j[3] !== T) {
        h = Symbol.for("react.early_return_sentinel")
        e: {
          var P, L
          let e,
            s = (P = k).some((e) => "inProgress" === e.status)
              ? "inProgress"
              : P.some((e) => "failed" === e.status)
                ? "failed"
                : P.some((e) => "interrupted" === e.status)
                  ? "interrupted"
                  : "completed",
            u = "inProgress" === s,
            m = (function (e) {
              let t = new Set()
              for (let n of e) for (let e of n8(n)) t.add(e)
              return t.size > 0 ? t.size : e.length
            })(k)
          if (!S) {
            h = null
            break e
          }
          ;(j[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = () => {
                R(n5)
              }),
              (j[13] = e))
            : (e = j[13]),
            (n = e),
            (d = "truncate text-size-chat text-text/40"),
            (t = p.A),
            (o = "localConversation.multiAgentAction.header"),
            (r = "{action}{countLabel}"),
            (c = "Header row for multi-agent action events."))
          let f = (L = { action: T.action, status: s, intl: N }).intl.formatMessage(n1[L.action][L.status])
          ;(j[14] !== u || j[15] !== f
            ? ((i = (0, a.jsx)(
                eJ.N,
                { active: u, className: "text-text-tertiary/90 group-hover/activity-header:text-default", children: f },
                "action",
              )),
              (j[14] = u),
              (j[15] = f),
              (j[16] = i))
            : (i = j[16]),
            (l =
              m > 0
                ? N.formatMessage(
                    {
                      id: "localConversation.multiAgentAction.header.count",
                      defaultMessage: " {count, plural, one {an agent} other {# agents}}",
                      description: "Agent count suffix shown for multi-agent actions.",
                    },
                    { count: m },
                  )
                : ""))
        }
        ;((j[0] = N),
          (j[1] = S),
          (j[2] = k),
          (j[3] = T),
          (j[4] = t),
          (j[5] = n),
          (j[6] = i),
          (j[7] = l),
          (j[8] = o),
          (j[9] = r),
          (j[10] = c),
          (j[11] = d),
          (j[12] = h))
      } else
        ((t = j[4]), (n = j[5]), (i = j[6]), (l = j[7]), (o = j[8]), (r = j[9]), (c = j[10]), (d = j[11]), (h = j[12]))
      if (h !== Symbol.for("react.early_return_sentinel")) return h
      ;(j[17] !== i || j[18] !== l
        ? ((f = { action: i, countLabel: l }), (j[17] = i), (j[18] = l), (j[19] = f))
        : (f = j[19]),
        j[20] !== t || j[21] !== o || j[22] !== r || j[23] !== c || j[24] !== f
          ? ((g = (0, a.jsx)(t, { id: o, defaultMessage: r, description: c, values: f })),
            (j[20] = t),
            (j[21] = o),
            (j[22] = r),
            (j[23] = c),
            (j[24] = f),
            (j[25] = g))
          : (g = j[25]),
        j[26] !== d || j[27] !== g
          ? ((x = (0, a.jsx)("span", { className: d, children: g })), (j[26] = d), (j[27] = g), (j[28] = x))
          : (x = j[28]))
      let F = x
      ;(j[29] !== M || j[30] !== A || j[31] !== k
        ? ((v = (0, a.jsx)(tP.j, {
            variant: "grouped",
            "data-testid": "multi-agent-action-rows",
            children: (0, a.jsx)(n6, { items: k, conversationId: A, backgroundAgentOpener: M }),
          })),
          (j[29] = M),
          (j[30] = A),
          (j[31] = k),
          (j[32] = v))
        : (v = j[32]),
        j[33] !== _ || j[34] !== v
          ? ((y = (0, a.jsx)(tu.Q, { expanded: _, children: v })), (j[33] = _), (j[34] = v), (j[35] = y))
          : (y = j[35]))
      let E = y
      return (
        j[36] !== n || j[37] !== _
          ? ((w = { expanded: _, onToggle: n }), (j[36] = n), (j[37] = _), (j[38] = w))
          : (w = j[38]),
        j[39] !== I
          ? ((b = I ?? (0, a.jsx)(D.I, { className: "shrink-0 text-text/60", asset: nK.u })), (j[39] = I), (j[40] = b))
          : (b = j[40]),
        j[41] !== E || j[42] !== F || j[43] !== w || j[44] !== b
          ? ((C = (0, a.jsx)(eW.o, { body: E, disclosure: w, icon: b, summary: F })),
            (j[41] = E),
            (j[42] = F),
            (j[43] = w),
            (j[44] = b),
            (j[45] = C))
          : (C = j[45]),
        C
      )
    }
    function n5(e) {
      return !e
    }
    let n6 = (0, u.memo)(function (e) {
      let t,
        n,
        i = (0, s.c)(7),
        { backgroundAgentOpener: l, items: o, conversationId: r } = e,
        u = (0, m.A)(),
        h = (0, c._U)(ex.Zs, r)
      return (
        i[0] !== l || i[1] !== u || i[2] !== o || i[3] !== h
          ? ((t = (function (e, t, n, s) {
              let i = [],
                l = (function (e, t) {
                  let n = new Map(),
                    a = at(t)
                  for (let t of e) {
                    let e = at(t.model) ?? a
                    if ("spawnAgent" === t.action && null != e)
                      for (let a of t.receiverThreads) n.set((0, d.JXB)(a.threadId), e)
                  }
                  return n
                })(e, t),
                o = (e) =>
                  (0, a.jsx)("span", {
                    className: "flex min-w-0 items-baseline gap-1 overflow-hidden whitespace-nowrap",
                    children: e,
                  })
              for (let t of e) {
                let e = new Map((t.receiverThreads ?? []).map((e) => [(0, d.JXB)(e.threadId), e.thread])),
                  c = n8(t).filter((t) => an(e.get(t) ?? null).length > 0),
                  u =
                    "spawnAgent" === t.action &&
                    "completed" === t.status &&
                    null != t.prompt &&
                    t.prompt.trim().length > 0,
                  m =
                    ("sendInput" === t.action || "sendMessage" === t.action || "followupTask" === t.action) &&
                    null != t.prompt &&
                    t.prompt.trim().length > 0
                if (0 === c.length)
                  i.push({
                    key: `row-generic-${t.id}`,
                    node: (0, a.jsx)(p.A, {
                      id: "localConversation.multiAgentAction.row.generic",
                      defaultMessage: "{action}",
                      description: "Fallback row when there are no known agent ids yet.",
                      values: { action: aa({ action: t.action, status: t.status, intl: n }) },
                    }),
                  })
                else
                  for (let d of c) {
                    var r
                    i.push({
                      key: `row-${t.id}-${d}`,
                      node: u
                        ? (0, a.jsx)(p.A, {
                            id: "localConversation.multiAgentAction.row.spawn.createdWithInstructions",
                            defaultMessage: "<row>Created {agent} with the instructions: {instructions}</row>",
                            description:
                              "Per-agent row for completed spawn actions when prompt instructions are present.",
                            values: {
                              agent: ae({
                                agentId: d,
                                model: l.get(d) ?? null,
                                backgroundAgentOpener: s,
                                thread: e.get(d) ?? null,
                              }),
                              instructions: (0, a.jsx)(n9, { prompt: t.prompt ?? "" }, "instructions"),
                              row: o,
                            },
                          })
                        : m
                          ? (0, a.jsx)(p.A, {
                              id: "localConversation.multiAgentAction.row.sendInput.messagedWithPrompt",
                              defaultMessage: "<row>{action} {agent}: {prompt}</row>",
                              description: "Per-agent row for sendInput actions when prompt text is present.",
                              values: {
                                action: (r = { status: t.status, intl: n }).intl.formatMessage(n2[r.status]),
                                agent: ae({
                                  agentId: d,
                                  model: l.get(d) ?? null,
                                  backgroundAgentOpener: s,
                                  thread: e.get(d) ?? null,
                                }),
                                prompt: (0, a.jsx)(n9, { prompt: t.prompt ?? "" }, "prompt"),
                                row: o,
                              },
                            })
                          : (0, a.jsx)(p.A, {
                              id: "localConversation.multiAgentAction.row.agent",
                              defaultMessage: "{action} {agent}{stateSuffix}",
                              description: "Per-agent row for multi-agent action events.",
                              values: {
                                action: aa({ action: t.action, status: t.status, intl: n }),
                                agent: ae({
                                  agentId: d,
                                  model: l.get(d) ?? null,
                                  backgroundAgentOpener: s,
                                  thread: e.get(d) ?? null,
                                }),
                                stateSuffix: (function (e, t, n) {
                                  var a
                                  if ("closeAgent" === e.action || "resumeAgent" === e.action) return ""
                                  if (null == t) return ""
                                  let s = (a = { status: t.status, intl: n }).intl.formatMessage(n3[a.status])
                                  return null == t.message || 0 === t.message.trim().length
                                    ? ` (${s})`
                                    : ` (${s}: ${t.message})`
                                })(t, t.agentsStates[d], n),
                              },
                            }),
                    })
                  }
                u ||
                  m ||
                  null == t.prompt ||
                  !(t.prompt.trim().length > 0) ||
                  i.push({
                    key: `meta-prompt-${t.id}`,
                    node: (0, a.jsx)(p.A, {
                      id: "localConversation.multiAgentAction.meta.prompt",
                      defaultMessage: "Input: {prompt}",
                      description: "Input prompt metadata for multi-agent actions.",
                      values: {
                        prompt: (0, a.jsx)(
                          "span",
                          { className: "break-words whitespace-pre-wrap", children: t.prompt },
                          "prompt",
                        ),
                      },
                    }),
                  })
              }
              return i
            })(o, h, u, l).map(as)),
            (i[0] = l),
            (i[1] = u),
            (i[2] = o),
            (i[3] = h),
            (i[4] = t))
          : (t = i[4]),
        i[5] !== t ? ((n = (0, a.jsx)(a.Fragment, { children: t })), (i[5] = t), (i[6] = n)) : (n = i[6]),
        n
      )
    })
    function n7(e) {
      return { inProgress: e.inProgress, completed: e.completed, failed: e.failed, interrupted: nX.actionInterrupted }
    }
    function n8(e) {
      let t = e.receiverThreads ?? [],
        n = e.agentsStates ?? {}
      return Array.from(new Set([...t.map((e) => (0, d.JXB)(e.threadId)), ...Object.keys(n).map(d.JXB)])).sort()
    }
    function n9(e) {
      let t,
        n,
        i = (0, s.c)(5),
        { prompt: l } = e
      return (
        i[0] !== l
          ? ((t = (0, a.jsx)("span", { className: "min-w-0 flex-1 truncate text-text/40", children: l })),
            (i[0] = l),
            (i[1] = t))
          : (t = i[1]),
        i[2] !== l || i[3] !== t
          ? ((n = (0, a.jsx)(eg.m, { content: l, enabledWhen: "target-overflows", children: t })),
            (i[2] = l),
            (i[3] = t),
            (i[4] = n))
          : (n = i[4]),
        n
      )
    }
    function ae({ agentId: e, backgroundAgentOpener: t, model: n, thread: s }) {
      let i = (function (e) {
          let t = e?.agentRole ?? (0, nZ.E)(e?.source)?.agentRole
          if (null == t) return null
          let n = t.trim()
          return 0 === n.length || "default" === n ? null : n
        })(s),
        l = null == i ? null : ` (${i})`,
        o = an(s),
        r = at(n),
        c =
          t?.canOpen(e) === !0
            ? (0, a.jsx)("button", {
                type: "button",
                className: "cursor-interaction bg-transparent p-0 align-baseline font-medium",
                onClick: () => t.open(e, o),
                children: o,
              })
            : (0, a.jsx)("span", { className: "font-medium", children: o })
      return (0, a.jsxs)(
        "span",
        {
          children: [
            (0, a.jsx)(eg.m, { disabled: null == r, content: null == r ? null : `Uses ${(0, nB.K)(r)}`, children: c }),
            null == l ? null : (0, a.jsx)("span", { children: l }),
          ],
        },
        "agent",
      )
    }
    function at(e) {
      return null == e || 0 === e.trim().length ? null : e
    }
    function an(e) {
      let t = (0, nQ.U)(e)
      if (null != t) {
        let e,
          n = (e = t.trim()).startsWith("@") ? e.slice(1) : e
        if (n.length > 0) return n
      }
      return ""
    }
    function aa(e) {
      return e.intl.formatMessage(n0[e.action][e.status])
    }
    function as(e) {
      return (0, a.jsx)(
        "div",
        { className: (0, X.A)("text-text/60 [&_*]:text-text/50", "text-size-chat min-w-0"), children: e.node },
        e.key,
      )
    }
    var ai = n("la9L"),
      al = n("uuN8"),
      ao = n("Bbed"),
      ar = n("x8co"),
      ac = n("JiBc"),
      ad = n("aepO"),
      au = n("lCie"),
      am = n("bnxy"),
      ap = n("a6Zv"),
      ah = n("mJQs"),
      af = n("aCkJ"),
      ag = n("qYs6")
    let ax = (0, ao._)(
      async () =>
        (
          await Promise.all([
            n.e(293648),
            n.e(560170),
            n.e(872923),
            n.e(496120),
            n.e(136167),
            n.e(999152),
            n.e(611401),
          ]).then(n.bind(n, "kPrN"))
        ).FileDiff,
    )
    function av(e) {
      let t,
        n,
        i,
        l,
        o,
        r,
        c = (0, s.c)(23),
        { item: d, isTurnCancelled: u, cwd: m, hostId: p, showDiffDetails: h, summaryIcon: f } = e,
        g = void 0 !== u && u,
        x = void 0 === h || h
      ;(c[0] !== g || c[1] !== d
        ? ((t = (0, eU.LS)(d)
            ? "auto-review-declined"
            : !0 === d.success
              ? "applied"
              : !1 === d.success
                ? "rejected"
                : null != d.approvalRequestId
                  ? "pending"
                  : g
                    ? "stopped"
                    : "streaming"),
          (c[0] = g),
          (c[1] = d),
          (c[2] = t))
        : (t = c[2]),
        c[3] !== d.visualizationActivities
          ? ((n = (0, ah.so)(d.visualizationActivities)), (c[3] = d.visualizationActivities), (c[4] = n))
          : (n = c[4]))
      let v = n,
        y = "streaming" === t || "pending" === t,
        w = null != v && "stopped" !== t && "auto-review-declined" !== t && "rejected" !== t
      return w || 0 !== Object.keys(d.changes).length
        ? (c[5] !== y || c[6] !== w || c[7] !== v
            ? ((i = w
                ? (0, a.jsx)("div", {
                    className: "text-size-chat text-codex-description/80",
                    children: (0, a.jsx)(tx, { kind: v, isInProgress: y }),
                  })
                : null),
              (c[5] = y),
              (c[6] = w),
              (c[7] = v),
              (c[8] = i))
            : (i = c[8]),
          c[9] !== d.changes ? ((l = Object.entries(d.changes)), (c[9] = d.changes), (c[10] = l)) : (l = c[10]),
          c[11] !== m ||
          c[12] !== p ||
          c[13] !== d.automaticApprovalReviews ||
          c[14] !== d.grantRoot ||
          c[15] !== x ||
          c[16] !== t ||
          c[17] !== f ||
          c[18] !== l
            ? ((o = l.map((e) => {
                let [n, s] = e
                return (0, a.jsx)(
                  aw,
                  {
                    path: n,
                    change: s,
                    status: t,
                    cwd: m,
                    hostId: p,
                    grantRoot: d.grantRoot,
                    automaticApprovalReviews: d.automaticApprovalReviews,
                    showDiffDetails: x,
                    summaryIcon: f,
                  },
                  n,
                )
              })),
              (c[11] = m),
              (c[12] = p),
              (c[13] = d.automaticApprovalReviews),
              (c[14] = d.grantRoot),
              (c[15] = x),
              (c[16] = t),
              (c[17] = f),
              (c[18] = l),
              (c[19] = o))
            : (o = c[19]),
          c[20] !== i || c[21] !== o
            ? ((r = (0, a.jsxs)("div", {
                className: "flex flex-col gap-[var(--conversation-patch-file-gap,var(--conversation-item-gap,16px))]",
                children: [i, o],
              })),
              (c[20] = i),
              (c[21] = o),
              (c[22] = r))
            : (r = c[22]),
          r)
        : null
    }
    function ay(e) {
      let t,
        n,
        i,
        l,
        o = (0, s.c)(8)
      return (
        o[0] !== e ? (({ className: t, ...n } = e), (o[0] = e), (o[1] = t), (o[2] = n)) : ((t = o[1]), (n = o[2])),
        o[3] !== t
          ? ((i = (0, X.A)(
              "text-codex-description/80 bg-surface-tertiary flex w-full items-center justify-center px-2 pt-7 pb-8 text-size-chat",
              t,
            )),
            (o[3] = t),
            (o[4] = i))
          : (i = o[4]),
        o[5] !== n || o[6] !== i
          ? ((l = (0, a.jsx)("div", { className: i, ...n })), (o[5] = n), (o[6] = i), (o[7] = l))
          : (l = o[7]),
        l
      )
    }
    function aw(e) {
      let t,
        n,
        i,
        l,
        o,
        r,
        h,
        f,
        g,
        x,
        v,
        y,
        w,
        b,
        C,
        j,
        A,
        I,
        k,
        M,
        S,
        N,
        T,
        _ = (0, s.c)(111),
        {
          path: R,
          change: P,
          status: L,
          cwd: F,
          hostId: E,
          grantRoot: O,
          automaticApprovalReviews: U,
          showDiffDetails: B,
          summaryIcon: z,
        } = e,
        q = void 0 === B || B,
        W = (0, c.gh)(th.GD),
        H = (0, m.A)(),
        G = "streaming" === L,
        V = "stopped" === L,
        $ = "pending" === L,
        K = "auto-review-declined" === L,
        Z = "rejected" === L || K,
        Q = G || $,
        J = Q || V,
        [Y, ee] = (0, u.useState)(!1)
      _[0] !== P || _[1] !== R || _[2] !== q
        ? ((t = q ? (0, af.bl)(R, P) : null), (_[0] = P), (_[1] = R), (_[2] = q), (_[3] = t))
        : (t = _[3])
      let et = t
      e: {
        let e
        if ("add" === P.type) {
          let e
          if (V) {
            let e
            ;(_[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(p.A, {
                  id: "codex.patch.change.stoppedCreating",
                  defaultMessage: "Stopped creating",
                  description: "Status label shown when apply_patch stopped before completing file creation",
                })),
                (_[4] = e))
              : (e = _[4]),
              (n = e))
            break e
          }
          if (Z) {
            let e
            ;(_[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(p.A, {
                  id: "codex.patch.change.rejected-add",
                  defaultMessage: "Rejected",
                  description: "Label indicating a file creation was rejected in the patch summary",
                })),
                (_[5] = e))
              : (e = _[5]),
              (n = e))
            break e
          }
          ;(_[6] !== J
            ? ((e = J
                ? (0, a.jsx)(p.A, {
                    id: "codex.patch.change.creating",
                    defaultMessage: "Creating",
                    description: "Label indicating a file is being created while awaiting approval",
                  })
                : (0, a.jsx)(p.A, {
                    id: "codex.patch.change.created",
                    defaultMessage: "Created",
                    description: "Label indicating a file has been created in the patch summary",
                  })),
              (_[6] = J),
              (_[7] = e))
            : (e = _[7]),
            (n = e))
          break e
        }
        if ("delete" === P.type) {
          let e
          if (V) {
            let e
            ;(_[8] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(p.A, {
                  id: "codex.patch.change.stoppedDeleting",
                  defaultMessage: "Stopped deleting",
                  description: "Status label shown when apply_patch stopped before completing file deletion",
                })),
                (_[8] = e))
              : (e = _[8]),
              (n = e))
            break e
          }
          if (Z) {
            let e
            ;(_[9] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(p.A, {
                  id: "codex.patch.change.rejected-delete",
                  defaultMessage: "Rejected",
                  description: "Label indicating a file deletion was rejected in the patch summary",
                })),
                (_[9] = e))
              : (e = _[9]),
              (n = e))
            break e
          }
          ;(_[10] !== J
            ? ((e = J
                ? (0, a.jsx)(p.A, {
                    id: "codex.patch.change.deleting",
                    defaultMessage: "Deleting",
                    description: "Label indicating a file has been deleted in the patch summary",
                  })
                : (0, a.jsx)(p.A, {
                    id: "codex.patch.change.deleted",
                    defaultMessage: "Deleted",
                    description: "Label indicating a file has been deleted in the patch summary",
                  })),
              (_[10] = J),
              (_[11] = e))
            : (e = _[11]),
            (n = e))
          break e
        }
        if (V) {
          let e
          ;(_[12] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(p.A, {
                id: "codex.patch.change.stoppedEditing",
                defaultMessage: "Stopped editing",
                description: "Status label shown when apply_patch stopped before completing file edit",
              })),
              (_[12] = e))
            : (e = _[12]),
            (n = e))
          break e
        }
        if (Z) {
          let e
          ;(_[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(p.A, {
                id: "codex.patch.change.rejected-edit",
                defaultMessage: "Rejected",
                description: "Label indicating a file edit was rejected in the patch summary",
              })),
              (_[13] = e))
            : (e = _[13]),
            (n = e))
          break e
        }
        ;(_[14] !== J
          ? ((e = J
              ? (0, a.jsx)(p.A, {
                  id: "codex.patch.change.editing",
                  defaultMessage: "Editing",
                  description: "Label indicating a file is being edited in the patch summary while awaiting approval",
                })
              : (0, a.jsx)(p.A, {
                  id: "codex.patch.change.edited",
                  defaultMessage: "Edited",
                  description: "Label indicating a file has been edited in the patch summary",
                })),
            (_[14] = J),
            (_[15] = e))
          : (e = _[15]),
          (n = e))
      }
      let en = n
      _[16] !== R || _[17] !== q || _[18] !== et
        ? ((i = q ? (0, ag.D)(et, R) : null), (_[16] = R), (_[17] = q), (_[18] = et), (_[19] = i))
        : (i = _[19])
      let ea = i
      _[20] !== P.type || _[21] !== R
        ? ((l = "add" === P.type && (0, d.QPd)(R)), (_[20] = P.type), (_[21] = R), (_[22] = l))
        : (l = _[22])
      let es = l,
        ei = es ? void 0 : ea?.openLocation?.line
      _[23] !== F || _[24] !== ei || _[25] !== O || _[26] !== E || _[27] !== R || _[28] !== es || _[29] !== W
        ? ((o = () => {
            ;(0, tj.openWorkspaceFile)({
              scope: es ? W : void 0,
              path: R,
              line: ei,
              cwd: O ?? F ?? null,
              hostId: E,
              browserEnabled: es && W.get(tC.G, { name: "browser.in-app" }).isCapable,
              openInSidePanel: es && !0,
            })
          }),
          (_[23] = F),
          (_[24] = ei),
          (_[25] = O),
          (_[26] = E),
          (_[27] = R),
          (_[28] = es),
          (_[29] = W),
          (_[30] = o))
        : (o = _[30])
      let el = o,
        eo = q && "delete" === P.type && ea
      t: {
        let e
        if (!q || !Y || J || Z || null == et) {
          r = null
          break t
        }
        if ("add" === P.type) {
          let e
          ;(_[31] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(p.A, {
                id: "codex.patch.change.created-file",
                defaultMessage: "Created file",
                description: "Header label shown for an expanded created file entry",
              })),
              (_[31] = e))
            : (e = _[31]),
            (r = e))
          break t
        }
        if ("delete" === P.type) {
          let e
          ;(_[32] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(p.A, {
                id: "codex.patch.change.deleted-file",
                defaultMessage: "Deleted file",
                description: "Header label shown for an expanded deleted file entry",
              })),
              (_[32] = e))
            : (e = _[32]),
            (r = e))
          break t
        }
        ;(_[33] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(p.A, {
              id: "codex.patch.change.edited-file",
              defaultMessage: "Edited file",
              description: "Header label shown for an expanded edited file entry",
            })),
            (_[33] = e))
          : (e = _[33]),
          (r = e))
      }
      let er = r,
        ec = null != er,
        ed = q && Y
      ;(_[34] !== U || _[35] !== K
        ? ((h = null == U ? null : (0, a.jsx)(eZ.li, { isDeclined: K, reviews: U })),
          (_[34] = U),
          (_[35] = K),
          (_[36] = h))
        : (h = _[36]),
        _[37] !== P ||
        _[38] !== ea?.added ||
        _[39] !== ea?.deleted ||
        _[40] !== ea?.openLocation ||
        _[41] !== el ||
        _[42] !== $ ||
        _[43] !== R ||
        _[44] !== et
          ? ((f = et
              ? (0, a.jsx)(aC, {
                  className: "mt-1.5",
                  path: R,
                  unifiedDiff: et,
                  openLocation: ea?.openLocation,
                  linesAdded: ea?.added,
                  linesRemoved: ea?.deleted,
                  onOpenFile: el,
                  children: (0, a.jsx)(aj, { path: R, change: P, unifiedDiff: et, isShortView: $ }),
                })
              : null),
            (_[37] = P),
            (_[38] = ea?.added),
            (_[39] = ea?.deleted),
            (_[40] = ea?.openLocation),
            (_[41] = el),
            (_[42] = $),
            (_[43] = R),
            (_[44] = et),
            (_[45] = f))
          : (f = _[45]),
        _[46] !== et
          ? ((g =
              null == et
                ? (0, a.jsx)(ay, {
                    className: "select-none",
                    children: (0, a.jsx)(p.A, {
                      id: "codex.patch.change.previewTooLarge",
                      defaultMessage: "Diff too large to preview",
                      description:
                        "Shown instead of a saved file-change preview when its contents exceed the preview size limit",
                    }),
                  })
                : null),
            (_[46] = et),
            (_[47] = g))
          : (g = _[47]),
        _[48] !== P.type || _[49] !== et
          ? ((x =
              "" === et
                ? (0, a.jsx)(ay, {
                    children:
                      "delete" === P.type
                        ? (0, a.jsx)(p.A, {
                            id: "codex.patch.change.contentsDeleted",
                            defaultMessage: "Contents deleted",
                            description: "Label indicating a file has been deleted in the patch summary",
                          })
                        : (0, a.jsx)(p.A, {
                            id: "codex.patch.change.noChanges",
                            defaultMessage: "No changes",
                            description: "Label indicating no changes in the patch summary",
                          }),
                  })
                : null),
            (_[48] = P.type),
            (_[49] = et),
            (_[50] = x))
          : (x = _[50]),
        _[51] !== g || _[52] !== x || _[53] !== h || _[54] !== f
          ? ((v = (0, a.jsxs)("div", { children: [h, f, g, x] })),
            (_[51] = g),
            (_[52] = x),
            (_[53] = h),
            (_[54] = f),
            (_[55] = v))
          : (v = _[55]))
      let eu = v,
        em = O ?? F ?? null
      ;(_[56] !== R ? ((y = (0, am.Q0)(R)), (_[56] = R), (_[57] = y)) : (y = _[57]),
        _[58] !== ei || _[59] !== E || _[60] !== R || _[61] !== em || _[62] !== y
          ? ((w = (0, a.jsx)(tk, { cwd: em, displayPath: y, hostId: E, line: ei, path: R })),
            (_[58] = ei),
            (_[59] = E),
            (_[60] = R),
            (_[61] = em),
            (_[62] = y),
            (_[63] = w))
          : (w = _[63]))
      let ep = w
      _[64] !== en ||
      _[65] !== er ||
      _[66] !== ep ||
      _[67] !== Q ||
      _[68] !== K ||
      _[69] !== $ ||
      _[70] !== V ||
      _[71] !== G
        ? ((b = K
            ? (0, a.jsx)("span", {
                className: "select-none",
                children: (0, a.jsx)(p.A, {
                  id: "codex.patch.change.autoReviewDeclined",
                  defaultMessage: "File change declined by auto-review: {file}",
                  description:
                    "Summary for a file change declined by automatic approval review, including a link to the affected file",
                  values: { file: (0, a.jsx)("span", { className: "text-secondary", children: ep }) },
                }),
              })
            : (0, a.jsxs)(a.Fragment, {
                children: [
                  G
                    ? (0, a.jsx)(eJ.N, {
                        active: !0,
                        className:
                          "text-codex-description/80 select-text [@media(hover:hover)]:group-[:hover:not(:has([data-agent-activity-file-link]:hover))]/activity-header:text-default",
                        children: en,
                      })
                    : V
                      ? (0, a.jsx)("span", {
                          className:
                            "text-codex-description/80 select-text [@media(hover:hover)]:group-[:hover:not(:has([data-agent-activity-file-link]:hover))]/activity-header:text-default",
                          children: en,
                        })
                      : $
                        ? null
                        : (0, a.jsx)(eJ.N, {
                            active: Q,
                            className:
                              "text-codex-description/80 select-text [@media(hover:hover)]:group-[:hover:not(:has([data-agent-activity-file-link]:hover))]/activity-header:text-default",
                            children: er ?? en,
                          }),
                  null == er ? (0, a.jsxs)(a.Fragment, { children: [$ ? null : " ", ep] }) : null,
                ],
              })),
          (_[64] = en),
          (_[65] = er),
          (_[66] = ep),
          (_[67] = Q),
          (_[68] = K),
          (_[69] = $),
          (_[70] = V),
          (_[71] = G),
          (_[72] = b))
        : (b = _[72])
      let eh = b
      ;(_[73] !== ea || _[74] !== ec || _[75] !== eo
        ? ((C =
            eo && !ec
              ? (0, a.jsxs)("div", {
                  className: "flex items-center gap-1.5",
                  children: [
                    (0, a.jsx)(ar.S, {
                      className: "text-size-chat-sm",
                      linesAdded: ea.added,
                      linesRemoved: ea.deleted,
                      variant: "agent-activity",
                    }),
                    (0, a.jsx)("span", { className: "block size-1.5 rounded-full bg-chart-red/70" }),
                  ],
                })
              : null),
          (_[73] = ea),
          (_[74] = ec),
          (_[75] = eo),
          (_[76] = C))
        : (C = _[76]),
        _[77] !== P.type || _[78] !== ea || _[79] !== ec || _[80] !== q
          ? ((j =
              q && ea && (ea.added > 0 || ea.deleted > 0) && "delete" !== P.type
                ? (0, a.jsx)("div", {
                    className: "flex items-center gap-1.5",
                    children: ec
                      ? null
                      : (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)(ar.S, {
                              className: "text-size-chat-sm",
                              linesAdded: ea.added,
                              linesRemoved: ea.deleted,
                              variant: "agent-activity",
                            }),
                            "add" === P.type
                              ? (0, a.jsx)("span", { className: "block size-1.5 rounded-full bg-chart-blue/70" })
                              : null,
                          ],
                        }),
                  })
                : null),
            (_[77] = P.type),
            (_[78] = ea),
            (_[79] = ec),
            (_[80] = q),
            (_[81] = j))
          : (j = _[81]),
        _[82] !== U || _[83] !== K
          ? ((A = K || null == U ? null : (0, a.jsx)(eZ.gV, {})), (_[82] = U), (_[83] = K), (_[84] = A))
          : (A = _[84]),
        _[85] !== C || _[86] !== j || _[87] !== A
          ? ((I = (0, a.jsxs)(a.Fragment, { children: [C, j, A] })), (_[85] = C), (_[86] = j), (_[87] = A), (_[88] = I))
          : (I = _[88]))
      let ef = I
      _[89] !== eu || _[90] !== ed || _[91] !== G || _[92] !== q
        ? ((k = q
            ? G
              ? ed
                ? (0, a.jsx)("div", { children: eu })
                : null
              : (0, a.jsx)(tu.Q, { expanded: ed, children: eu })
            : null),
          (_[89] = eu),
          (_[90] = ed),
          (_[91] = G),
          (_[92] = q),
          (_[93] = k))
        : (k = _[93])
      let eg = k,
        ex = $ ? "rounded-xl" : "rounded-lg"
      return (
        _[94] !== ex ? ((M = (0, X.A)("overflow-clip", ex)), (_[94] = ex), (_[95] = M)) : (M = _[95]),
        _[96] !== H || _[97] !== Y || _[98] !== R || _[99] !== q
          ? ((S = q
              ? {
                  accessibleLabel: H.formatMessage(
                    {
                      id: "codex.patch.change.toggleDiff",
                      defaultMessage: "Toggle diff for {fileName}",
                      description: "Accessible label for the button that expands or collapses a file diff",
                    },
                    { fileName: (0, am.Q0)(R) },
                  ),
                  expanded: Y,
                  onToggle: () => ee(ab),
                }
              : void 0),
            (_[96] = H),
            (_[97] = Y),
            (_[98] = R),
            (_[99] = q),
            (_[100] = S))
          : (S = _[100]),
        _[101] !== K || _[102] !== z
          ? ((N = K ? (0, a.jsx)(D.I, { className: "shrink-0 text-warning", asset: eq.F }) : z),
            (_[101] = K),
            (_[102] = z),
            (_[103] = N))
          : (N = _[103]),
        _[104] !== eg || _[105] !== ef || _[106] !== eh || _[107] !== M || _[108] !== S || _[109] !== N
          ? ((T = (0, a.jsx)(eW.o, {
              accessory: ef,
              body: eg,
              className: M,
              disclosure: S,
              headerClassName: "text-text/60",
              icon: N,
              summary: eh,
            })),
            (_[104] = eg),
            (_[105] = ef),
            (_[106] = eh),
            (_[107] = M),
            (_[108] = S),
            (_[109] = N),
            (_[110] = T))
          : (T = _[110]),
        T
      )
    }
    function ab(e) {
      return !e
    }
    function aC(e) {
      let t,
        n,
        i,
        l,
        o,
        r,
        c,
        d,
        u,
        m,
        p,
        h,
        f,
        g,
        x = (0, s.c)(37),
        {
          className: v,
          path: y,
          unifiedDiff: w,
          openLocation: b,
          linesAdded: C,
          linesRemoved: j,
          onOpenFile: A,
          children: I,
        } = e
      ;(x[0] !== v
        ? ((t = (0, X.A)("border-default flex flex-col overflow-hidden rounded-lg border", v)), (x[0] = v), (x[1] = t))
        : (t = x[1]),
        x[2] !== y
          ? ((n = (0, a.jsx)("span", { className: "font-mono", children: y })), (x[2] = y), (x[3] = n))
          : (n = x[3]))
      let k = !b && "cursor-default no-underline"
      return (
        x[4] !== k ? ((i = (0, X.A)("max-w-full text-start hover:underline", k)), (x[4] = k), (x[5] = i)) : (i = x[5]),
        x[6] !== A || x[7] !== b
          ? ((l = (e) => {
              ;(e.stopPropagation(), b && A())
            }),
            (x[6] = A),
            (x[7] = b),
            (x[8] = l))
          : (l = x[8]),
        x[9] !== y ? ((o = (0, am.Q0)(y)), (x[9] = y), (x[10] = o)) : (o = x[10]),
        x[11] !== o
          ? ((r = (0, a.jsx)("span", { className: "truncate", children: o })), (x[11] = o), (x[12] = r))
          : (r = x[12]),
        x[13] !== i || x[14] !== l || x[15] !== r
          ? ((c = (0, a.jsx)(tA.$, {
              className: i,
              allowShrink: !0,
              color: "ghostMuted",
              size: "inline",
              onClick: l,
              children: r,
            })),
            (x[13] = i),
            (x[14] = l),
            (x[15] = r),
            (x[16] = c))
          : (c = x[16]),
        x[17] !== n || x[18] !== c
          ? ((d = (0, a.jsx)(eg.m, { content: n, children: c })), (x[17] = n), (x[18] = c), (x[19] = d))
          : (d = x[19]),
        x[20] !== C || x[21] !== j
          ? ((u =
              null != C && null != j
                ? (0, a.jsx)(ar.S, { className: "text-size-chat-sm", linesAdded: C, linesRemoved: j })
                : null),
            (x[20] = C),
            (x[21] = j),
            (x[22] = u))
          : (u = x[22]),
        x[23] !== u || x[24] !== d
          ? ((m = (0, a.jsxs)("div", { className: "flex min-w-0 items-center gap-2", children: [d, u] })),
            (x[23] = u),
            (x[24] = d),
            (x[25] = m))
          : (m = x[25]),
        x[26] !== w
          ? ((p = (0, a.jsx)(al.i, { iconOnly: !0, iconClassName: "icon-2xs", onCopy: (e) => (0, ad.E)(w, e) })),
            (x[26] = w),
            (x[27] = p))
          : (p = x[27]),
        x[28] !== m || x[29] !== p
          ? ((h = (0, a.jsxs)("div", {
              className:
                "flex items-center justify-between gap-2 border-b border-default bg-background-secondary-ghost-hover/60 px-2.5 py-0.5 text-size-chat-sm text-codex-description/80",
              children: [m, p],
            })),
            (x[28] = m),
            (x[29] = p),
            (x[30] = h))
          : (h = x[30]),
        x[31] !== I
          ? ((f = (0, a.jsx)("div", { className: "bg-surface-tertiary", children: I })), (x[31] = I), (x[32] = f))
          : (f = x[32]),
        x[33] !== t || x[34] !== h || x[35] !== f
          ? ((g = (0, a.jsxs)("div", { className: t, children: [h, f] })),
            (x[33] = t),
            (x[34] = h),
            (x[35] = f),
            (x[36] = g))
          : (g = x[36]),
        g
      )
    }
    function aj(e) {
      let t,
        n,
        i = (0, s.c)(10),
        { path: l, change: o, unifiedDiff: r, isShortView: c } = e
      i[0] !== r ? ((t = (0, ac.F)(r)), (i[0] = r), (i[1] = t)) : (t = i[1])
      let d = t
      if (r) {
        let e = d[0]
        if (e && !e.isBinary) {
          let t,
            n,
            s = c ? "max-h-25" : "max-h-60 "
          return (
            i[2] !== s
              ? ((t = (0, X.A)("composer-diff-simple-line overflow-y-auto", s)), (i[2] = s), (i[3] = t))
              : (t = i[3]),
            i[4] !== e.metadata || i[5] !== t
              ? ((n = (0, a.jsx)(ax, {
                  className: t,
                  fileDiff: e.metadata,
                  diffStyle: "unified",
                  hunkSeparators: "simple",
                })),
                (i[4] = e.metadata),
                (i[5] = t),
                (i[6] = n))
              : (n = i[6]),
            n
          )
        }
      }
      return (
        i[7] !== o || i[8] !== l
          ? ((n = (0, a.jsx)(aA, { path: l, change: o })), (i[7] = o), (i[8] = l), (i[9] = n))
          : (n = i[9]),
        n
      )
    }
    function aA(e) {
      let t,
        n = (0, s.c)(8),
        { path: i, change: l } = e
      if ("add" === l.type) {
        let e, t
        n[0] !== i ? ((e = (0, au.s)(i)), (n[0] = i), (n[1] = e)) : (e = n[1])
        let s = e
        return (
          n[2] !== l.content || n[3] !== s
            ? ((t = (0, a.jsx)(aI, { content: l.content, language: s })), (n[2] = l.content), (n[3] = s), (n[4] = t))
            : (t = n[4]),
          t
        )
      }
      if ("update" === l.type) {
        let e
        return (
          n[5] !== l.unified_diff
            ? ((e = (0, a.jsx)(aI, { content: l.unified_diff, language: "diff" })), (n[5] = l.unified_diff), (n[6] = e))
            : (e = n[6]),
          e
        )
      }
      if ("delete" === l.type) {
        let e
        return (
          n[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(ay, {
                children: (0, a.jsx)(p.A, {
                  id: "codex.patch.change.contentsDeleted",
                  defaultMessage: "Contents deleted",
                  description: "Label indicating a file has been deleted in the patch summary",
                }),
              })),
              (n[7] = e))
            : (e = n[7]),
          e
        )
      }
      try {
        t = JSON.stringify(l)
      } catch {
        t = "<unserializable change>"
      }
      return (tT.v.debug("Unknown FileChange type", { safe: { path: i, changeString: t }, sensitive: {} }), null)
    }
    function aI(e) {
      let t,
        n = (0, s.c)(3),
        i = (0, ap.Y)() ? "dark" : "light"
      return (
        n[0] !== e || n[1] !== i
          ? ((t = (0, a.jsx)(ai.CodeSnippet, {
              ...e,
              showActionBar: !1,
              codeClassName: "text-size-chat",
              "data-theme": i,
              codeContainerClassName: "!p-2 max-h-40 vertical-scroll-fade-mask",
              wrapperClassName: "rounded-none border-none",
            })),
            (n[0] = e),
            (n[1] = i),
            (n[2] = t))
          : (t = n[2]),
        t
      )
    }
    var ak = n("BhAX")
    function aM(e) {
      let t,
        n,
        i,
        l = (0, s.c)(6),
        { personality: o } = e,
        r = (0, m.A)()
      l[0] !== r || l[1] !== o
        ? ((t =
            "friendly" === o
              ? r.formatMessage({
                  id: "composer.personalitySlashCommand.label.friendly",
                  defaultMessage: "Friendly",
                  description: "Label for the friendly personality",
                })
              : r.formatMessage({
                  id: "composer.personalitySlashCommand.label.pragmatic",
                  defaultMessage: "Pragmatic",
                  description: "Label for the pragmatic personality",
                })),
          (l[0] = r),
          (l[1] = o),
          (l[2] = t))
        : (t = l[2])
      let c = t
      return (
        l[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)(D.I, { "aria-hidden": !1, asset: ak.$ })), (l[3] = n))
          : (n = l[3]),
        l[4] !== c
          ? ((i = (0, a.jsxs)(ns.B, {
              children: [
                n,
                (0, a.jsx)(p.A, {
                  id: "localConversation.personalityChanged",
                  defaultMessage: "Switched to {personality} personality",
                  description: "Synthetic item shown when the personality changes.",
                  values: { personality: c },
                }),
              ],
            })),
            (l[4] = c),
            (l[5] = i))
          : (i = l[5]),
        i
      )
    }
    var aS = n("ziNv"),
      aN = n("cWXs"),
      aT = n("Faus"),
      a_ = "heading-mOenvy",
      aR = "list-RaLbwp"
    function aP(e) {
      var t, n
      let i,
        l,
        o,
        r,
        d,
        m,
        h,
        f,
        g,
        x,
        v,
        y,
        w,
        b,
        C,
        j,
        A,
        I = (0, s.c)(39),
        { item: k, conversationId: M, cwd: S, hideCodeBlocks: N, hostId: T } = e,
        _ = (0, c._U)(ex.nX, M),
        R = !k.completed,
        P = (function (e) {
          let t,
            n,
            a,
            i,
            l,
            o,
            r = (0, s.c)(16)
          r[0] !== e ? ((t = () => (e ? Date.now() : null)), (r[0] = e), (r[1] = t)) : (t = r[1])
          let [c, d] = (0, u.useState)(t),
            [m, p] = (0, u.useState)(null),
            h = (0, u.useRef)(e)
          r[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (e) => {
                ;(d(e), p(null))
              }),
              (r[2] = n))
            : (n = r[2])
          let f = (0, u.useEffectEvent)(n)
          r[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (e) => {
                ;(p(Date.now() - e), d(null))
              }),
              (r[3] = a))
            : (a = r[3])
          let g = (0, u.useEffectEvent)(a)
          return (r[4] !== m || r[5] !== e || r[6] !== c || r[7] !== f || r[8] !== g
            ? ((i = () => {
                let t = h.current
                ;(!t && e && f(Date.now()), t && !e && null != c && null == m && g(c), (h.current = e))
              }),
              (r[4] = m),
              (r[5] = e),
              (r[6] = c),
              (r[7] = f),
              (r[8] = g),
              (r[9] = i))
            : (i = r[9]),
          r[10] !== m || r[11] !== e || r[12] !== c
            ? ((l = [m, e, c]), (r[10] = m), (r[11] = e), (r[12] = c), (r[13] = l))
            : (l = r[13]),
          (0, u.useEffect)(i, l),
          null == m || m <= 0)
            ? null
            : (r[14] !== m ? ((o = aF(m)), (r[14] = m), (r[15] = o)) : (o = r[15]), o)
        })(R)
      I[0] !== R || I[1] !== k.content
        ? ((o = R ? "" : (0, aT.k2)(k.content)), (I[0] = R), (I[1] = k.content), (I[2] = o))
        : (o = I[2])
      let L = o
      I[3] !== P || I[4] !== R
        ? ((t = R),
          (n = P),
          (r = t
            ? (0, a.jsx)(p.A, {
                id: "reasoningItem.thinking",
                defaultMessage: "Thinking",
                description: "Message shown when AI is currently thinking",
              })
            : n
              ? (0, a.jsx)(p.A, {
                  id: "reasoningItem.thoughtWithElapsed",
                  defaultMessage: "Thought for {elapsed}",
                  description: "Message shown when AI has finished thinking, including elapsed time",
                  values: { elapsed: n },
                })
              : (0, a.jsx)(p.A, {
                  id: "reasoningItem.thought",
                  defaultMessage: "Thought",
                  description: "Message shown when AI has finished thinking",
                })),
          (I[3] = P),
          (I[4] = R),
          (I[5] = r))
        : (r = I[5])
      let D = r,
        [F, E] = (0, u.useState)(!1),
        O = !R && !!L
      I[6] !== k.content
        ? ((d = (
            !(l = (i = k.content.trimStart()).match(/^\*\*([^\n]*?)\*\*/))
              ? i.startsWith("**")
                ? ""
                : i
              : i.slice(l[0].length)
          ).trimStart()),
          (I[6] = k.content),
          (I[7] = d))
        : (d = I[7])
      let U = d,
        B = R ? !!U && (null == _ || "resumed" === _) : F,
        z = R ? U : L
      ;(I[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = (0, X.A)(
            "content-oxuumP",
            "text-text/60 [&_*]:text-text/50",
            "break-words text-size-chat [&_*]:text-size-chat",
          )),
          (I[8] = m))
        : (m = I[8]),
        I[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = {
              p(e) {
                let { children: t } = e
                return (0, a.jsx)("p", {
                  className: (0, X.A)("paragraph-gJJthE", "has-[[data-markdown-copy=inline-code]]:py-0.5"),
                  children: t,
                })
              },
              h1(e) {
                let { children: t } = e
                return (0, a.jsx)("h1", { className: (0, X.A)(a_, "font-semibold"), children: t })
              },
              h2(e) {
                let { children: t } = e
                return (0, a.jsx)("h2", { className: (0, X.A)(a_, "font-semibold"), children: t })
              },
              h3(e) {
                let { children: t } = e
                return (0, a.jsx)("h3", { className: (0, X.A)(a_, "font-semibold"), children: t })
              },
              ul(e) {
                let { children: t } = e
                return (0, a.jsx)("ul", { className: (0, X.A)(aR, "list-disc ps-4"), children: t })
              },
              ol(e) {
                let { children: t, start: n } = e,
                  s = (function (e, t = 1) {
                    let n = e.filter((e) => (0, u.isValidElement)(e)),
                      a = []
                    return (
                      n.forEach((e, n) => {
                        let s = t + n,
                          i = String(s).length,
                          l = a[a.length - 1]
                        l && l.digits === i ? l.items.push(e) : a.push({ start: s, digits: i, items: [e] })
                      }),
                      a
                    )
                  })(u.Children.toArray(t), n)
                return (0, a.jsx)(a.Fragment, { children: s.map(aD) })
              },
              li(e) {
                let { children: t } = e
                return (0, a.jsx)("li", { className: "m-0", children: t })
              },
            }),
            (I[9] = h))
          : (h = I[9]),
        I[10] !== M || I[11] !== S || I[12] !== N || I[13] !== T || I[14] !== R || I[15] !== z
          ? ((f = (0, a.jsx)(aN.K, {
              className: m,
              cwd: S,
              hideCodeBlocks: N,
              hostId: T,
              isStreaming: R,
              conversationId: M,
              components: h,
              children: z,
            })),
            (I[10] = M),
            (I[11] = S),
            (I[12] = N),
            (I[13] = T),
            (I[14] = R),
            (I[15] = z),
            (I[16] = f))
          : (f = I[16]))
      let q = f
      return (
        I[17] !== O || I[18] !== F
          ? ((g = O
              ? {
                  expanded: F,
                  onToggle: () => {
                    E(aL)
                  },
                }
              : void 0),
            (I[17] = O),
            (I[18] = F),
            (I[19] = g))
          : (g = I[19]),
        I[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, X.A)("text-text/30", "text-size-chat truncate group-hover/activity-header:text-default")),
            (I[20] = x))
          : (x = I[20]),
        I[21] !== R || I[22] !== D
          ? ((v = (0, a.jsx)(eJ.N, { active: R, className: x, children: D })), (I[21] = R), (I[22] = D), (I[23] = v))
          : (v = I[23]),
        I[24] !== g || I[25] !== v
          ? ((y = (0, a.jsx)(tm.A, { disclosure: g, children: v })), (I[24] = g), (I[25] = v), (I[26] = y))
          : (y = I[26]),
        I[27] !== q ? ((w = [{ key: "reasoning-markdown", node: q }]), (I[27] = q), (I[28] = w)) : (w = I[28]),
        I[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = { preview: "8.75rem", expanded: "8.75rem", collapsed: "0px" }), (I[29] = b))
          : (b = I[29]),
        I[30] !== R || I[31] !== w
          ? ((C = (0, a.jsx)(tP.j, {
              variant: "flush",
              children: (0, a.jsx)(aS.t, {
                items: w,
                autoScrollToBottom: R,
                contentClassName: "gap-0",
                maxHeightByState: b,
                viewState: "expanded",
                className: "[--edge-fade-distance:1rem]",
              }),
            })),
            (I[30] = R),
            (I[31] = w),
            (I[32] = C))
          : (C = I[32]),
        I[33] !== B || I[34] !== C
          ? ((j = (0, a.jsx)(tu.Q, { expanded: B, children: C })), (I[33] = B), (I[34] = C), (I[35] = j))
          : (j = I[35]),
        I[36] !== y || I[37] !== j
          ? ((A = (0, a.jsx)(tp.n, { header: y, body: j })), (I[36] = y), (I[37] = j), (I[38] = A))
          : (A = I[38]),
        A
      )
    }
    function aL(e) {
      return !e
    }
    function aD(e) {
      var t
      let n = (t = e.digits) <= 2 ? "ps-8" : 3 === t ? "ps-10" : 4 === t ? "ps-12" : "ps-14"
      return (0, a.jsx)(
        "ol",
        { className: (0, X.A)(aR, "list-decimal", n), start: e.start, children: e.items },
        `ol-${e.start}`,
      )
    }
    let aF = tv.C
    var aE = n("Tfl2")
    function aO(e) {
      let t,
        n,
        i,
        l,
        o = (0, s.c)(7),
        { taskId: r } = e,
        c = (0, h.Zp)()
      return (
        o[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(D.I, { "aria-hidden": !1, asset: aE.f })), (o[0] = t))
          : (t = o[0]),
        o[1] !== c || o[2] !== r
          ? ((n = () => {
              c(`/remote/${r}`)
            }),
            (o[1] = c),
            (o[2] = r),
            (o[3] = n))
          : (n = o[3]),
        o[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, a.jsx)(p.A, {
              id: "localConversation.remoteTaskCreated.task",
              defaultMessage: "chat",
              description: "Link label for remote task created indicator",
            })),
            (o[4] = i))
          : (i = o[4]),
        o[5] !== n
          ? ((l = (0, a.jsxs)(ns.B, {
              className: "!text-codex-description/80",
              children: [
                t,
                (0, a.jsx)(p.A, {
                  id: "localConversation.remoteTaskCreated",
                  defaultMessage: "Created {taskLink} in Codex Cloud",
                  description:
                    "Synthetic item shown when a remote task is created from a local conversation. taskLink is a url link to the task.",
                  values: {
                    taskLink: (0, a.jsx)("button", {
                      type: "button",
                      className:
                        "cursor-interaction rounded-sm border-0 bg-transparent p-0 text-link-primary outline-none hover:underline focus:border-0 focus:!outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
                      onClick: n,
                      children: i,
                    }),
                  },
                }),
              ],
            })),
            (o[5] = n),
            (o[6] = l))
          : (l = o[6]),
        l
      )
    }
    var aU = n("NvvW"),
      aB = n("Yakm")
    function az(e) {
      let t,
        n,
        i,
        l,
        o,
        r,
        c,
        d,
        m,
        h = (0, s.c)(36),
        { icon: f, item: g } = e,
        [x, v] = (0, u.useState)(!1),
        y = g.additionalDetails
      h[0] !== y ? ((t = null != y && y.trim().length > 0), (h[0] = y), (h[1] = t)) : (t = h[1])
      let w = t,
        b = w && x
      h[2] !== g.reconnectAttempt || h[3] !== g.reconnectMaxAttempts
        ? ((n =
            null == g.reconnectAttempt || null == g.reconnectMaxAttempts
              ? null
              : (0, a.jsxs)(
                  "span",
                  {
                    className:
                      "inline-flex items-baseline align-baseline leading-[inherit] text-[inherit] tabular-nums [--rolling-number-y-offset:0px]",
                    children: [
                      (0, a.jsx)(ar.f, { value: g.reconnectAttempt, variant: "inline" }),
                      (0, a.jsx)("span", {
                        children: (0, a.jsx)(p.A, {
                          id: "localConversation.streamError.reconnectingProgressDenominator",
                          defaultMessage: "/{maxAttempts}",
                          description:
                            "The denominator portion of reconnect retry progress, for example /5 in Reconnecting 1/5.",
                          values: { maxAttempts: g.reconnectMaxAttempts },
                        }),
                      }),
                    ],
                  },
                  "progress",
                )),
          (h[2] = g.reconnectAttempt),
          (h[3] = g.reconnectMaxAttempts),
          (h[4] = n))
        : (n = h[4])
      let C = n
      if (
        "serverOverloaded" === g.errorInfo ||
        "policyCapacityUnavailable" === g.errorInfo ||
        ("object" == typeof g.errorInfo &&
          null != g.errorInfo &&
          "responseStreamDisconnected" in g.errorInfo &&
          aU.GU.safeParse(g.errorInfo.responseStreamDisconnected).data?.httpStatusCode === 429)
      ) {
        let e
        ;(h[5] !== C
          ? ((e =
              null == C
                ? (0, a.jsx)(p.A, {
                    id: "localConversation.streamError.serverOverloadedReconnecting",
                    defaultMessage: "Server is busy, reconnecting",
                    description: "Status shown while reconnecting after the server is overloaded.",
                  })
                : (0, a.jsx)(p.A, {
                    id: "localConversation.streamError.serverOverloadedReconnectingWithProgress",
                    defaultMessage: "Server is busy, reconnecting {progress}",
                    description:
                      "Status shown while reconnecting after the server is overloaded. The values are the current retry attempt and maximum retry attempts.",
                    values: { progress: C },
                  })),
            (h[5] = C),
            (h[6] = e))
          : (e = h[6]),
          (i = e))
      } else {
        let e
        ;(h[7] !== g.content || h[8] !== C
          ? ((e =
              null == C
                ? g.content
                : (0, a.jsx)(p.A, {
                    id: "localConversation.streamError.reconnecting",
                    defaultMessage: "Reconnecting {progress}",
                    description:
                      "Status shown while a disconnected response stream is reconnecting. The values are the current retry attempt and maximum retry attempts.",
                    values: { progress: C },
                  })),
            (h[7] = g.content),
            (h[8] = C),
            (h[9] = e))
          : (e = h[9]),
          (i = e))
      }
      h[10] !== i
        ? ((l = (0, a.jsx)("span", {
            className: "min-w-0 text-size-chat whitespace-pre-wrap text-codex-description/80",
            children: i,
          })),
          (h[10] = i),
          (h[11] = l))
        : (l = h[11])
      let j = l
      ;(h[12] !== y
        ? ((o = (0, a.jsx)("div", {
            className: "mt-1 text-size-chat whitespace-pre-wrap text-codex-description/80",
            children: y,
          })),
          (h[12] = y),
          (h[13] = o))
        : (o = h[13]),
        h[14] !== b || h[15] !== o
          ? ((r = (0, a.jsx)(tu.Q, { expanded: b, children: o })), (h[14] = b), (h[15] = o), (h[16] = r))
          : (r = h[16]))
      let A = r
      h[17] !== w
        ? ((c = () => {
            w && v(aq)
          }),
          (h[17] = w),
          (h[18] = c))
        : (c = h[18])
      let I = c
      if (void 0 !== f) {
        let e, t
        return (
          h[19] !== w || h[20] !== x || h[21] !== I
            ? ((e = w ? { expanded: x, onToggle: I } : void 0), (h[19] = w), (h[20] = x), (h[21] = I), (h[22] = e))
            : (e = h[22]),
          h[23] !== A || h[24] !== f || h[25] !== j || h[26] !== e
            ? ((t = (0, a.jsx)(eW.o, { icon: f, summary: j, disclosure: e, body: A })),
              (h[23] = A),
              (h[24] = f),
              (h[25] = j),
              (h[26] = e),
              (h[27] = t))
            : (t = h[27]),
          t
        )
      }
      return (
        h[28] !== w || h[29] !== x || h[30] !== j || h[31] !== I
          ? ((d = w
              ? (0, a.jsxs)("button", {
                  type: "button",
                  "aria-expanded": x,
                  className: "group flex min-w-0 cursor-interaction items-start gap-1 text-start",
                  onClick: I,
                  children: [
                    j,
                    (0, a.jsx)(aB.A, {
                      className: (0, X.A)(
                        "text-tertiary icon-2xs mt-0.5 flex-shrink-0 transition-[opacity,rotate] duration-relaxed opacity-0 group-hover:opacity-100",
                        x && "opacity-100",
                        x ? "rotate-180" : "",
                      ),
                    }),
                  ],
                })
              : (0, a.jsx)("div", { className: "flex min-w-0 cursor-default items-start gap-1", children: j })),
            (h[28] = w),
            (h[29] = x),
            (h[30] = j),
            (h[31] = I),
            (h[32] = d))
          : (d = h[32]),
        h[33] !== A || h[34] !== d
          ? ((m = (0, a.jsx)(e1.D, {
              children: (0, a.jsxs)("div", { className: "flex min-w-0 flex-col", children: [d, A] }),
            })),
            (h[33] = A),
            (h[34] = d),
            (h[35] = m))
          : (m = h[35]),
        m
      )
    }
    function aq(e) {
      return !e
    }
    var aW = n("dqpP"),
      aH = n("ixMX"),
      aG = n("yP7T")
    function aV(e) {
      let t,
        n,
        i = (0, s.c)(13),
        { item: l } = e,
        o = (0, m.A)(),
        r = (0, u.useContext)(nY.T)
      if (l.isMessage) {
        let e, t
        return (
          i[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, a.jsx)(F.OHc, {})), (i[0] = e)) : (e = i[0]),
          i[1] !== l.displayName
            ? ((t = (0, a.jsx)(e1.D, {
                padding: "offset",
                children: (0, a.jsxs)(aW.F, {
                  className: "text-secondary select-none",
                  children: [
                    e,
                    null == l.displayName
                      ? (0, a.jsx)(p.A, {
                          id: "localConversation.subagentActivity.messageSentToParent",
                          defaultMessage: "Sent message to parent",
                          description: "Activity after sending a message to the root or unnamed parent agent",
                        })
                      : (0, a.jsx)(p.A, {
                          id: "localConversation.subagentActivity.messageSentToAgent",
                          defaultMessage: "Sent message to {agent}",
                          description:
                            "Activity after sending a message to another agent; agent is the recipient's name",
                          values: { agent: l.displayName },
                        }),
                  ],
                }),
              })),
              (i[1] = l.displayName),
              (i[2] = t))
            : (t = i[2]),
          t
        )
      }
      i[3] !== l.agentThreadId ? ((t = (0, d.JXB)(l.agentThreadId)), (i[3] = l.agentThreadId), (i[4] = t)) : (t = i[4])
      let c = t
      if (i[5] !== r || i[6] !== c || i[7] !== o || i[8] !== l.displayName || i[9] !== l.displayStatus) {
        let e,
          t = (0, aH.Zg)(o, l.displayName),
          s = (0, aH.Kg)(o, t, l.displayStatus)
        i[11] !== c
          ? ((e = (0, a.jsx)(aG.B, { seed: c, className: "icon-sm", "aria-hidden": !0 })), (i[11] = c), (i[12] = e))
          : (e = i[12])
        let d = (0, a.jsxs)(aW.F, {
          className: "group",
          children: [
            e,
            (0, a.jsx)("span", { className: "truncate text-text-tertiary/90 group-hover:text-default", children: s }),
          ],
        })
        ;((n = (0, a.jsx)(e1.D, {
          padding: "offset",
          children:
            r?.canOpen(c) !== !0
              ? (0, a.jsx)("div", { "data-testid": "subagent-activity-row", children: d })
              : (0, a.jsx)("button", {
                  type: "button",
                  "aria-label": (0, aH.j3)(o, t),
                  className:
                    "w-full cursor-interaction text-start focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring",
                  "data-testid": "subagent-activity-row",
                  onClick: () => r.open(c, t),
                  children: d,
                }),
        })),
          (i[5] = r),
          (i[6] = c),
          (i[7] = o),
          (i[8] = l.displayName),
          (i[9] = l.displayStatus),
          (i[10] = n))
      } else n = i[10]
      return n
    }
    var a$ = n("ceeR"),
      aK = n("pR2A"),
      aZ = n("iB3f")
    function aQ(e) {
      let t,
        n,
        i,
        l = (0, s.c)(13),
        { icon: o, item: r } = e
      if (!r.completed) {
        let e, t
        l[0] !== r.questionsAndAnswers.length
          ? ((e = (0, a.jsx)(eJ.g, {
              className: "text-text/30",
              message: (0, a.jsx)(p.A, {
                id: "localConversation.userInputRequest.inProgress",
                defaultMessage: "Asking {count, plural, one {question} other {questions}}",
                description: "Label shown while the assistant is waiting for user input",
                values: { count: r.questionsAndAnswers.length },
              }),
            })),
            (l[0] = r.questionsAndAnswers.length),
            (l[1] = e))
          : (e = l[1])
        let n = e
        return (
          l[2] !== o || l[3] !== n
            ? ((t = (0, a.jsx)(eW.o, { icon: o, summary: n })), (l[2] = o), (l[3] = n), (l[4] = t))
            : (t = l[4]),
          t
        )
      }
      l[5] !== r.questionsAndAnswers.length
        ? ((t = (0, a.jsx)("span", {
            className: "truncate",
            children: (0, a.jsx)(p.A, {
              id: "localConversation.userInputRequest.completed",
              defaultMessage:
                "<label>Asked</label> <questionCount>{count, plural, one {# question} other {# questions}}</questionCount>",
              description: "Summary shown for a completed request_user_input item with its question count",
              values: { count: r.questionsAndAnswers.length, label: aX, questionCount: aY },
            }),
          })),
          (l[5] = r.questionsAndAnswers.length),
          (l[6] = t))
        : (t = l[6])
      let c = t
      return (
        l[7] !== r.questionsAndAnswers
          ? ((n = r.questionsAndAnswers.map(aJ)), (l[7] = r.questionsAndAnswers), (l[8] = n))
          : (n = l[8]),
        l[9] !== o || l[10] !== c || l[11] !== n
          ? ((i = (0, a.jsx)(nR, { icon: o, questionsAndAnswers: n, summary: c })),
            (l[9] = o),
            (l[10] = c),
            (l[11] = n),
            (l[12] = i))
          : (i = l[12]),
        i
      )
    }
    function aJ(e) {
      return { id: e.id, question: e.question, answer: e.answers.length > 0 ? e.answers.join(", ") : null }
    }
    function aY(e) {
      return (0, a.jsx)("span", { className: "text-text/40 group-hover:text-default", children: e })
    }
    function aX(e) {
      return (0, a.jsx)("span", { className: "text-text-tertiary/90 group-hover:text-default", children: e })
    }
    var a1 = n("kavB"),
      a0 = n("lHc5"),
      a2 = n("YoMb"),
      a3 = n("XSEO"),
      a4 = n("Bipk"),
      a5 = n("Tigz"),
      a6 = n("r9ev")
    function a7(e) {
      let t,
        n,
        i = (0, s.c)(7),
        { activities: l, worktreeIcon: o } = e
      if (i[0] !== l || i[1] !== o) {
        let e
        ;(i[3] !== o
          ? ((e = (e) =>
              (0, a.jsx)(
                a6.d,
                {
                  indentContent: !1,
                  icon: "worktree" === e.kind && null != o ? o : (0, a.jsx)(a8, { kind: e.kind, status: e.status }),
                  status: "skipped" === e.status ? "completed" : e.status,
                  summary: (0, a.jsx)(a9, { kind: e.kind, status: e.status }),
                  children:
                    e.outputText.length > 0
                      ? (0, a.jsx)(tR.d, {
                          command: "",
                          output: e.outputText,
                          isInProgress: "running" === e.status,
                          surface: "plain",
                        })
                      : null,
                },
                e.id,
              )),
            (i[3] = o),
            (i[4] = e))
          : (e = i[4]),
          (t = l.map(e)),
          (i[0] = l),
          (i[1] = o),
          (i[2] = t))
      } else t = i[2]
      return (
        i[5] !== t
          ? ((n = (0, a.jsx)("div", { className: "flex w-full max-w-3xl flex-col gap-2", children: t })),
            (i[5] = t),
            (i[6] = n))
          : (n = i[6]),
        n
      )
    }
    function a8(e) {
      let t,
        n = (0, s.c)(6),
        { kind: i, status: l } = e,
        o = "failed" === l ? "text-danger" : "text-text/60"
      n[0] !== o ? ((t = (0, X.A)("icon-xs shrink-0", o)), (n[0] = o), (n[1] = t)) : (t = n[1])
      let r = t
      switch (i) {
        case "worktree": {
          let e
          return (n[2] !== r ? ((e = (0, a.jsx)(a5.A, { className: r })), (n[2] = r), (n[3] = e)) : (e = n[3]), e)
        }
        case "setup": {
          let e
          return (n[4] !== r ? ((e = (0, a.jsx)(a4.A, { className: r })), (n[4] = r), (n[5] = e)) : (e = n[5]), e)
        }
      }
    }
    function a9(e) {
      let t = (0, s.c)(7),
        { kind: n, status: i } = e
      switch (n) {
        case "worktree":
          switch (i) {
            case "running": {
              let e
              return (
                t[0] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(p.A, {
                      id: "worktreeInitV2.activity.worktree.running",
                      defaultMessage: "Creating a worktree",
                      description: "Tool activity label shown while a worktree is being created",
                    })),
                    (t[0] = e))
                  : (e = t[0]),
                e
              )
            }
            case "completed":
            case "skipped": {
              let e
              return (
                t[1] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(p.A, {
                      id: "worktreeInitV2.activity.worktree.completed",
                      defaultMessage: "Worktree created",
                      description: "Tool activity label shown after a worktree has been created",
                    })),
                    (t[1] = e))
                  : (e = t[1]),
                e
              )
            }
            case "failed": {
              let e
              return (
                t[2] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(p.A, {
                      id: "worktreeInitV2.activity.worktree.failed",
                      defaultMessage: "Failed to create worktree",
                      description: "Tool activity label shown after worktree creation fails",
                    })),
                    (t[2] = e))
                  : (e = t[2]),
                e
              )
            }
          }
        case "setup":
          switch (i) {
            case "running": {
              let e
              return (
                t[3] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(p.A, {
                      id: "worktreeInitV2.activity.setup.running",
                      defaultMessage: "Setting up the environment",
                      description: "Tool activity label shown while a worktree environment is being set up",
                    })),
                    (t[3] = e))
                  : (e = t[3]),
                e
              )
            }
            case "completed": {
              let e
              return (
                t[4] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(p.A, {
                      id: "worktreeInitV2.activity.setup.completed",
                      defaultMessage: "Environment set up",
                      description: "Tool activity label shown after a worktree environment is set up",
                    })),
                    (t[4] = e))
                  : (e = t[4]),
                e
              )
            }
            case "skipped": {
              let e
              return (
                t[5] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(p.A, {
                      id: "worktreeInitV2.activity.setup.skipped",
                      defaultMessage: "Environment setup skipped",
                      description: "Tool activity label shown when worktree environment setup is skipped",
                    })),
                    (t[5] = e))
                  : (e = t[5]),
                e
              )
            }
            case "failed": {
              let e
              return (
                t[6] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(p.A, {
                      id: "worktreeInitV2.activity.setup.failed",
                      defaultMessage: "Failed to set up the environment",
                      description: "Tool activity label shown after worktree environment setup fails",
                    })),
                    (t[6] = e))
                  : (e = t[6]),
                e
              )
            }
          }
      }
    }
    function se(e) {
      let t,
        n,
        l,
        o,
        r,
        c,
        d = (0, s.c)(20),
        { icon: u, item: p } = e,
        h = (0, m.A)(),
        { accountId: f, planAtLogin: g } = (0, x.As)(),
        { data: v, isError: y } = (0, w.YL)()
      if (!(0, B.YR)(p.failure)) return null
      if (d[0] !== f || d[1] !== v || d[2] !== h || d[3] !== y || d[4] !== p.failure || d[5] !== g) {
        l = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            a = (function ({ currentAccount: e, fallbackPlan: t, isCurrentAccountError: n }) {
              let a = e?.plan_type ?? t,
                s = e?.structure?.toLowerCase(),
                i = (0, z.Hw)(a) || (0, q.o)(a),
                l = "workspace" === s || (null == s && i),
                o = "workspace" === s && e?.account_user_role === "account-owner"
              return {
                isReady: !l || ("workspace" === s && e?.account_user_role != null) || n,
                isWorkspaceAccount: l,
                isWorkspaceOwner: o,
                plan: a,
              }
            })({
              currentAccount: null != v && (null == f || v.id === f) ? v : null,
              fallbackPlan: g,
              isCurrentAccountError: y,
            })
          if (!a.isReady) {
            l = null
            break e
          }
          ;(d[9] !== h || d[10] !== p.failure.resetsAt
            ? ((e = null == p.failure.resetsAt ? null : (0, eE.wp)(h, p.failure.resetsAt)),
              (d[9] = h),
              (d[10] = p.failure.resetsAt),
              (d[11] = e))
            : (e = d[11]),
            (t = e),
            (n = (function ({ plan: e, isWorkspaceAccount: t, isWorkspaceOwner: n }) {
              if (t) return n ? "add-credits" : "notify-owner"
              switch (e) {
                case W.x.FREE:
                case W.x.GO:
                  return "upgrade-plus"
                case W.x.PLUS:
                case W.x.PROLITE:
                  return "upgrade-pro"
                case W.x.PRO:
                case W.x.PROMAX:
                  return "add-credits"
                default:
                  return "retry"
              }
            })({ plan: a.plan, isWorkspaceAccount: a.isWorkspaceAccount, isWorkspaceOwner: a.isWorkspaceOwner })))
        }
        ;((d[0] = f),
          (d[1] = v),
          (d[2] = h),
          (d[3] = y),
          (d[4] = p.failure),
          (d[5] = g),
          (d[6] = t),
          (d[7] = n),
          (d[8] = l))
      } else ((t = d[6]), (n = d[7]), (l = d[8]))
      if (l !== Symbol.for("react.early_return_sentinel")) return l
      let b = n
      return (
        d[12] !== u
          ? ((o = u ?? (0, a.jsx)(D.I, { "aria-hidden": !1, asset: i.m })), (d[12] = u), (d[13] = o))
          : (o = d[13]),
        d[14] !== t || d[15] !== b
          ? ((r = (0, a.jsx)(U, { resetDate: t, variant: b })), (d[14] = t), (d[15] = b), (d[16] = r))
          : (r = d[16]),
        d[17] !== o || d[18] !== r
          ? ((c = (0, a.jsx)(e$.i, { icon: o, message: r, wrapMessage: !0 })), (d[17] = o), (d[18] = r), (d[19] = c))
          : (c = d[19]),
        c
      )
    }
    function st(e) {
      var t, n, i, o, h, x
      let w,
        D,
        U,
        z,
        q,
        W = (0, s.c)(492),
        {
          item: J,
          localComposerFormat: Y,
          alwaysShowAssistantMessageActions: X,
          showAssistantMessageActionRow: ee,
          showTimestampHeader: et,
          showAssistantTimestampWithoutActions: en,
          assistantTimestampHoverOnly: ea,
          allowAddSelectedTextToChat: es,
          compactUserMessageActions: ei,
          hideUserMessageActions: el,
          conversationId: eo,
          getVisualizeTurnTriggerType: er,
          conversationDetailLevel: ec,
          isReadOnly: eu,
          isTurnInProgress: em,
          showShimmer: ep,
          isTurnCancelled: eg,
          cwd: ex,
          hostId: ev,
          reportEntityType: eb,
          resolvedApps: eC,
          assistantCopyText: ej,
          turnId: eA,
          savedContentResponseId: eI,
          projectlessOutputDirectory: ek,
          outputFileLinks: eM,
          assistantAfter: eN,
          assistantCompactAttachment: eP,
          assistantElectronAfter: eL,
          hasArtifacts: eE,
          onExpand: eq,
          onAssistantFileLinkOpen: eW,
          autoReviewStats: eV,
          hookStats: e$,
          completedThreadGoal: eZ,
          loadRemoteToolLogos: eQ,
          renderMcpApps: eJ,
          shouldAutoExpandMcpApps: e1,
          toolActivityTurnKey: e2,
          emptyUserMessageOverride: e3,
          parentThreadAttachment: e7,
          onEditMessage: e8,
          onForkTurn: e9,
          execSummaryTone: te,
          showExecSummaryIcon: tt,
          renderToolActivityInWorkMode: ta,
          enableTimelineTargets: ti,
          allowAssistantCopyWhileStreaming: to,
          additionalAssistantMessageActions: tr,
          additionalUserMessageActions: tc,
          userMessageHeader: td,
          persistentAssistantMessageActions: tu,
          trailingAssistantMessageActions: tm,
          renderUsedSkillsDetails: tp,
          userMessageReactionLabelOnly: th,
          workedForLeadingAccessory: tf,
        } = e,
        tg = void 0 !== X && X,
        tx = void 0 === ee || ee,
        tv = void 0 !== et && et,
        ty = void 0 !== en && en,
        tw = void 0 !== ea && ea,
        tb = void 0 === es || es,
        tC = void 0 !== ei && ei,
        tj = void 0 !== el && el,
        tA = void 0 !== ep && ep,
        tI = void 0 !== eg && eg,
        tk = void 0 === ek ? null : ek,
        tM = void 0 !== eE && eE,
        tS = void 0 === eQ || eQ,
        tN = void 0 === eJ || eJ,
        tT = void 0 !== e1 && e1,
        t_ = void 0 === te ? "default" : te,
        tR = void 0 === tt || tt,
        tP = void 0 !== ti && ti,
        tL = void 0 !== to && to,
        tD = void 0 !== th && th,
        tE = (0, c.gh)(eR.PR),
        tO = (0, c.Ul)("mcp-tool-call" === J.type && (0, eB.o)(J) ? S.dc : null),
        tU = (0, m.A)(),
        tB = "user-message" === J.type ? J.searchItemId : void 0
      W[0] !== eo || W[1] !== ev || W[2] !== tB
        ? ((w = null == tB ? null : { hostId: ev, threadId: eo, messageId: tB }),
          (W[0] = eo),
          (W[1] = ev),
          (W[2] = tB),
          (W[3] = w))
        : (w = W[3])
      let tz = (0, c._U)(eS, w),
        tq = "user-message" === J.type ? (tz ?? J.reaction) : void 0
      W[4] !== J.codexDelegation || W[5] !== J.type
        ? ((D =
            "user-message" === J.type && null != J.codexDelegation && null == J.codexDelegation.sourceOrbitId
              ? (0, d.JXB)(J.codexDelegation.sourceThreadId)
              : null),
          (W[4] = J.codexDelegation),
          (W[5] = J.type),
          (W[6] = D))
        : (D = W[6])
      let tW = D,
        tH = (0, c._U)(null != tW ? ef.LG : "standard", tW),
        tG = (0, c._U)(null == tW ? null : ed.cloudAeonByThreadId$, tW)?.data
      W[7] !== eo || W[8] !== tE
        ? ((U = (e) => {
            ;(0, b.A)(tE, eo, e)
          }),
          (W[7] = eo),
          (W[8] = tE),
          (W[9] = U))
        : (U = W[9])
      let tV = U,
        t$ = (0, f.dz)(),
        tK = ec === eD.O$
      W[10] !== tE || W[11] !== t$
        ? ((z = (e, t) => {
            let n = t.commonAncestorContainer,
              a = n instanceof HTMLElement ? n : n.parentElement
            if (null == a) return
            let s = (0, N.eM)(a, t, e)
            if (null == s) return
            let i =
              ("function" == typeof t.getClientRects ? Array.from(t.getClientRects()).at(-1) : void 0) ??
              a.getBoundingClientRect()
            ;(0, S.vo)(tE, s, { x: i.right / t$, y: (i.top + i.height / 2) / t$ })
          }),
          (W[10] = tE),
          (W[11] = t$),
          (W[12] = z))
        : (z = W[12])
      let tZ = z,
        tQ = (0, u.useContext)(T.d),
        tJ = void 0 !== ta && ta && tK
      if (W[13] !== ev || W[14] !== J || W[15] !== tS || W[16] !== eC) {
        let e = (0, eG.c)(J)
        ;((q = null == e ? void 0 : (0, eO.T)(e, { hostId: ev, loadRemoteLogos: tS, resolvedApps: eC ?? [] })),
          (W[13] = ev),
          (W[14] = J),
          (W[15] = tS),
          (W[16] = eC),
          (W[17] = q))
      } else q = W[17]
      let tY = q
      switch (J.type) {
        case "dil-reasoning": {
          let e
          return (
            W[18] !== J.appData || W[19] !== J.code
              ? ((e = (0, a.jsx)(y.DilReasoningResponse, { code: J.code, appData: J.appData })),
                (W[18] = J.appData),
                (W[19] = J.code),
                (W[20] = e))
              : (e = W[20]),
            e
          )
        }
        case "external-event": {
          let e
          return (
            W[21] !== tY || W[22] !== J
              ? ((e = (0, a.jsx)(O.e, { icon: tY, item: J })), (W[21] = tY), (W[22] = J), (W[23] = e))
              : (e = W[23]),
            e
          )
        }
        case "realtime-transcript": {
          let e
          return (
            W[24] !== eo || W[25] !== ex || W[26] !== ev || W[27] !== J.entries || W[28] !== J.handoffId
              ? ((e = (0, a.jsx)(e_, {
                  conversationId: eo,
                  cwd: ex,
                  entries: J.entries,
                  handoffId: J.handoffId,
                  hostId: ev,
                })),
                (W[24] = eo),
                (W[25] = ex),
                (W[26] = ev),
                (W[27] = J.entries),
                (W[28] = J.handoffId),
                (W[29] = e))
              : (e = W[29]),
            e
          )
        }
        case "user-message": {
          let e, s, c, u, m, f, x, v, y, w, b, S, N, T, D, O, U, B, z, q, $, Z
          W[30] !== eo ? ((e = (0, d.L$F)(eo)), (W[30] = eo), (W[31] = e)) : (e = W[31])
          let X = e
          if (null != J.automationTitle) {
            let e, t
            return (
              W[33] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(R.m, { speaker: "user" })), (W[33] = e))
                : (e = W[33]),
              W[34] !== tC ||
              W[35] !== eo ||
              W[36] !== ex ||
              W[37] !== ev ||
              W[38] !== J.message ||
              W[39] !== J.sentAtMs
                ? ((t = (0, a.jsxs)(a.Fragment, {
                    children: [
                      e,
                      (0, a.jsx)(eX, {
                        conversationId: eo,
                        message: J.message,
                        sentAtMs: J.sentAtMs,
                        cwd: ex,
                        hostId: ev,
                        compactActions: tC,
                      }),
                    ],
                  })),
                  (W[34] = tC),
                  (W[35] = eo),
                  (W[36] = ex),
                  (W[37] = ev),
                  (W[38] = J.message),
                  (W[39] = J.sentAtMs),
                  (W[40] = t))
                : (t = W[40]),
              t
            )
          }
          if (null != J.heartbeatTrigger) {
            let e, t
            return (
              W[41] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(R.m, { speaker: "user" })), (W[41] = e))
                : (e = W[41]),
              W[42] !== tC ||
              W[43] !== eo ||
              W[44] !== ex ||
              W[45] !== ev ||
              W[46] !== J.heartbeatTrigger.automationId ||
              W[47] !== J.message ||
              W[48] !== J.sentAtMs
                ? ((t = (0, a.jsxs)(a.Fragment, {
                    children: [
                      e,
                      (0, a.jsx)(nc, {
                        automationId: J.heartbeatTrigger.automationId,
                        conversationId: eo,
                        message: J.message,
                        sentAtMs: J.sentAtMs,
                        cwd: ex,
                        hostId: ev,
                        compactActions: tC,
                      }),
                    ],
                  })),
                  (W[42] = tC),
                  (W[43] = eo),
                  (W[44] = ex),
                  (W[45] = ev),
                  (W[46] = J.heartbeatTrigger.automationId),
                  (W[47] = J.message),
                  (W[48] = J.sentAtMs),
                  (W[49] = t))
                : (t = W[49]),
              t
            )
          }
          if (null != J.codexDelegation) {
            let e,
              t,
              { sourceThreadId: n, sourceOrbitId: s } = J.codexDelegation,
              i = s ?? (null != tG && (tG.active_root_thread_id === n || "aeon" === tH) ? tG.id : void 0)
            if (null != i || "aeon" === tH) {
              let e, t
              return (
                W[50] !== n ? ((e = (0, d.JXB)(n)), (W[50] = n), (W[51] = e)) : (e = W[51]),
                W[52] !== tC ||
                W[53] !== eo ||
                W[54] !== ex ||
                W[55] !== ev ||
                W[56] !== J.message ||
                W[57] !== J.sentAtMs ||
                W[58] !== i ||
                W[59] !== e
                  ? ((t = (0, a.jsx)(eh, {
                      sourceOrbitId: i,
                      conversationId: eo,
                      sourceConversationId: e,
                      message: J.message,
                      sentAtMs: J.sentAtMs,
                      cwd: ex,
                      hostId: ev,
                      compactActions: tC,
                    })),
                    (W[52] = tC),
                    (W[53] = eo),
                    (W[54] = ex),
                    (W[55] = ev),
                    (W[56] = J.message),
                    (W[57] = J.sentAtMs),
                    (W[58] = i),
                    (W[59] = e),
                    (W[60] = t))
                  : (t = W[60]),
                t
              )
            }
            return (
              W[61] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(R.m, { speaker: "user" })), (W[61] = e))
                : (e = W[61]),
              W[62] !== tC ||
              W[63] !== eo ||
              W[64] !== ex ||
              W[65] !== ev ||
              W[66] !== J.message ||
              W[67] !== J.sentAtMs ||
              W[68] !== n
                ? ((t = (0, a.jsxs)(a.Fragment, {
                    children: [
                      e,
                      (0, a.jsx)(tn, {
                        conversationId: eo,
                        sourceThreadId: n,
                        message: J.message,
                        sentAtMs: J.sentAtMs,
                        cwd: ex,
                        hostId: ev,
                        compactActions: tC,
                      }),
                    ],
                  })),
                  (W[62] = tC),
                  (W[63] = eo),
                  (W[64] = ex),
                  (W[65] = ev),
                  (W[66] = J.message),
                  (W[67] = J.sentAtMs),
                  (W[68] = n),
                  (W[69] = t))
                : (t = W[69]),
              t
            )
          }
          let ee = 0 === J.message.trim().length && (e3?.trim().length ?? 0) > 0 ? (e3 ?? "") : J.message
          W[70] !== e3 || W[71] !== J.externalSurface || W[72] !== J.isToolOutput || W[73] !== J.message || W[74] !== tE
            ? ((s =
                null == J.externalSurface &&
                !J.isToolOutput &&
                ("local" !== tE.value.kind || "side" !== tE.value.placement) &&
                (J.message.trim().length > 0 || null == e3)),
              (W[70] = e3),
              (W[71] = J.externalSurface),
              (W[72] = J.isToolOutput),
              (W[73] = J.message),
              (W[74] = tE),
              (W[75] = s))
            : (s = W[75])
          let et = s
          W[76] !== J.comments ? ((c = J.comments ?? []), (W[76] = J.comments), (W[77] = c)) : (c = W[77])
          let en = c
          if (
            W[78] !== en ||
            W[79] !== eo ||
            W[80] !== ex ||
            W[81] !== e$ ||
            W[82] !== ev ||
            W[83] !== X ||
            W[84] !== J ||
            W[85] !== tV ||
            W[86] !== e7 ||
            W[87] !== tE ||
            W[88] !== tv ||
            W[89] !== ee
          ) {
            let e,
              s,
              c,
              d,
              L = en.filter(sr),
              B = en.filter(so)
            W[104] !== J.uploadedFileAttachments
              ? ((e = J.uploadedFileAttachments ?? []), (W[104] = J.uploadedFileAttachments), (W[105] = e))
              : (e = W[105])
            let z = [...J.attachments, ...e],
              q = z.some(sl) && tE.get(eF.M9)?.getLayer("2813816346").get("enabled", !1) === !0
            W[106] !== q
              ? ((s = (e) =>
                  "upload" in e
                    ? null != e.preview || (q && null != (0, g.Yg)(e.upload.fileName))
                    : q && null == e.startLine && null != (0, g.Yg)(e.fsPath || e.path)),
                (W[106] = q),
                (W[107] = s))
              : (s = W[107])
            let [$, K] = r()(z, s)
            if (
              (W[108] !== J.mcpAppModelContextAttachments
                ? ((c = J.mcpAppModelContextAttachments ?? []),
                  (W[108] = J.mcpAppModelContextAttachments),
                  (W[109] = c))
                : (c = W[109]),
              W[110] !== J.images || W[111] !== c)
            ) {
              let e
              ;(W[113] !== J.images
                ? ((e = (e) => (0, I.Rn)(e).filter((e) => !J.images.includes(e))), (W[113] = J.images), (W[114] = e))
                : (e = W[114]),
                (d = [...J.images, ...c.flatMap(e)]),
                (W[110] = J.images),
                (W[111] = c),
                (W[112] = d))
            } else d = W[112]
            let Z = d,
              Q = Z.length > 0,
              Y = null != J.appshotContexts && J.appshotContexts.length > 0
            m = en.length > 0
            let et = J.selectedTextAttachments,
              ea = null != et && et.length > 0,
              es = J.responseAnnotations,
              ei = null != es && es.length > 0,
              el = Q || Y,
              er =
                ((t = J),
                (n = K.length > 0),
                (i = null != e7),
                (o = L.length),
                (h = B.length),
                n ||
                  (t.unavailableFileAttachments?.length ?? 0) > 0 ||
                  (t.mcpAppModelContextAttachments?.some((e) => (0, I.s2)(e, { showImages: !1 })) ?? !1) ||
                  i ||
                  t.referencesPriorConversation ||
                  null != t.pullRequestMergeTaskNumber ||
                  (t.pullRequestCheckNames?.length ?? 0) > 0 ||
                  void 0 !== t.pullRequestMergeConflictNumber ||
                  o > 0 ||
                  h > 0 ||
                  (t.responseAnnotations?.length ?? 0) > 0 ||
                  (t.selectedTextAttachments?.length ?? 0) > 0)
            if (
              ((f = el || $.length > 0 || er || m),
              (v = null),
              (u = "not-sent" === J.deliveryStatus && null != e$ ? e$.blockedMessages : null),
              "not-sent" === J.deliveryStatus)
            ) {
              let e,
                t,
                n,
                s,
                i = e$?.blockedSources
              ;(W[115] !== ex || W[116] !== ev || W[117] !== i
                ? ((e = sd({ cwd: ex, hostId: ev, sources: i })),
                  (W[115] = ex),
                  (W[116] = ev),
                  (W[117] = i),
                  (W[118] = e))
                : (e = W[118]),
                W[119] === Symbol.for("react.memo_cache_sentinel")
                  ? ((t = (0, a.jsx)(G.A, { "aria-hidden": !0, className: "icon-2xs shrink-0" })),
                    (n = (0, a.jsx)(p.A, {
                      id: "codex.userMessage.hookBlocked",
                      defaultMessage: "Hook blocked this message",
                      description:
                        "Status link shown below a user message that was blocked before it entered the conversation",
                    })),
                    (W[119] = t),
                    (W[120] = n))
                  : ((t = W[119]), (n = W[120])),
                W[121] !== e
                  ? ((s = (0, a.jsxs)(sc, { to: e, children: [t, n] })), (W[121] = e), (W[122] = s))
                  : (s = W[122]),
                (x = s))
            } else if (!0 === J.goal) {
              let e, t
              ;(W[123] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(p.A, {
                    id: "codex.userMessage.goal",
                    defaultMessage: "Sent as goal",
                    description: "Status shown below a user message when the user set a thread goal",
                  })),
                  (W[123] = e))
                : (e = W[123]),
                (x = e),
                W[124] === Symbol.for("react.memo_cache_sentinel")
                  ? ((t = (0, a.jsx)(E.bF, {
                      "aria-hidden": !0,
                      className: "shrink-0 text-codex-description",
                      asset16: l.x,
                      legacyIcon: V.A,
                      legacyClassName: "icon-2xs",
                    })),
                    (W[124] = t))
                  : (t = W[124]),
                (v = t))
            } else if (!0 === J.hookFeedback) {
              let e, t, n, s, i
              W[125] !== J.message ? ((e = J.message.trim()), (W[125] = J.message), (W[126] = e)) : (e = W[126])
              let l = e
              ;(W[127] !== ex ||
              W[128] !== l ||
              W[129] !== e$?.feedbackMessages ||
              W[130] !== e$?.feedbackMessages.filter ||
              W[131] !== ev
                ? ((t = sd({ cwd: ex, hostId: ev, sources: e$?.feedbackMessages.filter((e) => e.text === l).map(si) })),
                  (W[127] = ex),
                  (W[128] = l),
                  (W[129] = e$?.feedbackMessages),
                  (W[130] = e$?.feedbackMessages.filter),
                  (W[131] = ev),
                  (W[132] = t))
                : (t = W[132]),
                W[133] === Symbol.for("react.memo_cache_sentinel")
                  ? ((n = (0, a.jsx)(F.T7m, {})),
                    (s = (0, a.jsx)(p.A, {
                      id: "codex.userMessage.hookFeedback",
                      defaultMessage: "Hook feedback",
                      description:
                        "Status shown below a user message when a Stop hook fed a follow-up prompt back into the turn",
                    })),
                    (W[133] = n),
                    (W[134] = s))
                  : ((n = W[133]), (s = W[134])),
                W[135] !== t
                  ? ((i = (0, a.jsxs)(sc, { to: t, children: [n, s] })), (W[135] = t), (W[136] = i))
                  : (i = W[136]),
                (x = i))
            }
            ;((y = ee.trim().length > 0 || !f || null != x),
              (w = null != J.externalSurface ? "flex flex-col items-end gap-1.5" : "flex flex-col items-end gap-2"),
              W[137] === Symbol.for("react.memo_cache_sentinel")
                ? ((b = (0, a.jsx)(R.m, { speaker: "user" })), (W[137] = b))
                : (b = W[137]),
              W[138] !== J.sentAtMs || W[139] !== tv
                ? ((S =
                    tv && null != J.sentAtMs
                      ? (0, a.jsx)(_.J, { className: "select-none", sentAtMs: J.sentAtMs })
                      : null),
                  (W[138] = J.sentAtMs),
                  (W[139] = tv),
                  (W[140] = S))
                : (S = W[140]),
              W[141] !== J.targetedReplyLabel
                ? ((N = null != J.targetedReplyLabel && (0, a.jsx)(P.l, { label: J.targetedReplyLabel })),
                  (W[141] = J.targetedReplyLabel),
                  (W[142] = N))
                : (N = W[142]),
              W[143] !== eo || W[144] !== J.externalChannel || W[145] !== J.externalSurface
                ? ((T =
                    null != J.externalSurface
                      ? (0, a.jsx)(ew.Q, {
                          conversationId: eo,
                          provider: J.externalSurface,
                          channel: J.externalChannel,
                          state: "incoming",
                        })
                      : null),
                  (W[143] = eo),
                  (W[144] = J.externalChannel),
                  (W[145] = J.externalSurface),
                  (W[146] = T))
                : (T = W[146]),
              W[147] !== eo ||
              W[148] !== Y ||
              W[149] !== Q ||
              W[150] !== el ||
              W[151] !== ev ||
              W[152] !== Z ||
              W[153] !== X ||
              W[154] !== J.appshotContexts
                ? ((D =
                    el &&
                    (0, a.jsx)("div", {
                      className: "hide-scrollbar flex max-w-full flex-row-reverse self-end overflow-x-auto",
                      children: (0, a.jsxs)("div", {
                        className: "flex min-w-max items-end gap-2",
                        children: [
                          Q &&
                            (0, a.jsx)(nd.BW, {
                              srcs: Z,
                              conversationId: eo,
                              hostId: X ? ev : void 0,
                              useImageDialog: X,
                              imageSource: "uploaded",
                            }),
                          Y &&
                            J.appshotContexts?.map((e, t) =>
                              (0, a.jsx)(
                                nd.J5,
                                { appshotContext: e, conversationId: eo, hostId: X ? ev : void 0 },
                                `${e.bundleIdentifier}-${e.imageName ?? t}`,
                              ),
                            ),
                        ],
                      }),
                    })),
                  (W[147] = eo),
                  (W[148] = Y),
                  (W[149] = Q),
                  (W[150] = el),
                  (W[151] = ev),
                  (W[152] = Z),
                  (W[153] = X),
                  (W[154] = J.appshotContexts),
                  (W[155] = D))
                : (D = W[155]),
              (O =
                $.length > 0 &&
                (0, a.jsx)("div", {
                  className: "flex max-w-full flex-col items-end gap-2",
                  children: $.map((e, t) =>
                    (0, a.jsx)(
                      nd.cA,
                      { attachment: e, cwd: ex, hostId: ev, isUploadedFileViewerEnabled: !0 },
                      "upload" in e ? e.upload.fileId : `${e.fsPath}-${e.startLine ?? 0}-${t}`,
                    ),
                  ),
                })),
              (U =
                er &&
                (0, a.jsx)("div", {
                  className: "hide-scrollbar flex max-w-full flex-row-reverse self-end overflow-x-auto p-px",
                  children: (0, a.jsxs)("div", {
                    className: "flex min-w-max items-center gap-2",
                    children: [
                      e7 && (0, a.jsx)(ni, { sourceConversationId: e7.sourceConversationId, kind: "parent-context" }),
                      J.referencesPriorConversation &&
                        (0, a.jsx)(j.x, {
                          Icon: H.A,
                          children: (0, a.jsx)(p.A, {
                            id: "composer.priorContext.label",
                            defaultMessage: "Previous context",
                            description: "Attachment pill label for including the prior conversation context",
                          }),
                        }),
                      null != J.mcpAppModelContextAttachments &&
                        (0, a.jsx)(A.w, { attachments: J.mcpAppModelContextAttachments, showImages: !1 }),
                      K.map((e, t) =>
                        (0, a.jsx)(
                          nd.cA,
                          { attachment: e, cwd: ex, hostId: ev },
                          "upload" in e ? e.upload.fileId : `${e.fsPath}-${e.startLine ?? 0}-${t}`,
                        ),
                      ),
                      J.unavailableFileAttachments?.map(ss),
                      null != J.pullRequestMergeTaskNumber &&
                        (0, a.jsx)(nd.hA, { pullRequestNumber: J.pullRequestMergeTaskNumber }),
                      null != J.pullRequestCheckNames && (0, a.jsx)(nd.N$, { checkNames: J.pullRequestCheckNames }),
                      void 0 !== J.pullRequestMergeConflictNumber &&
                        (0, a.jsx)(nd.Gj, { pullRequestNumber: J.pullRequestMergeConflictNumber }),
                      L.length > 0 || ei
                        ? (0, a.jsx)(k.i, {
                            annotations: es ?? [],
                            onNavigateAnnotation: tV,
                            browserAnnotations:
                              0 === L.length
                                ? void 0
                                : {
                                    count: L.length,
                                    icon: (0, a1.M9)(L),
                                    tooltipContent: (0, a.jsx)(a0.x, { comments: L, cwd: ex, hostId: ev }),
                                  },
                          })
                        : null,
                      B.length > 0 &&
                        (0, a.jsx)(C.w, {
                          count: B.length,
                          attachmentKind: "comment",
                          tooltipContent: (0, a.jsx)(a0.x, { comments: B, cwd: ex, hostId: ev }),
                        }),
                      ea && (0, a.jsx)(M.H, { selections: et }),
                    ],
                  }),
                })),
              (W[78] = en),
              (W[79] = eo),
              (W[80] = ex),
              (W[81] = e$),
              (W[82] = ev),
              (W[83] = X),
              (W[84] = J),
              (W[85] = tV),
              (W[86] = e7),
              (W[87] = tE),
              (W[88] = tv),
              (W[89] = ee),
              (W[90] = u),
              (W[91] = m),
              (W[92] = f),
              (W[93] = x),
              (W[94] = v),
              (W[95] = y),
              (W[96] = w),
              (W[97] = b),
              (W[98] = S),
              (W[99] = N),
              (W[100] = T),
              (W[101] = D),
              (W[102] = O),
              (W[103] = U))
          } else
            ((u = W[90]),
              (m = W[91]),
              (f = W[92]),
              (x = W[93]),
              (v = W[94]),
              (y = W[95]),
              (w = W[96]),
              (b = W[97]),
              (S = W[98]),
              (N = W[99]),
              (T = W[100]),
              (D = W[101]),
              (O = W[102]),
              (U = W[103]))
          ;(W[156] !== J.sender
            ? ((B = null != J.sender && (0, a.jsx)(Q.q, { sender: J.sender })), (W[156] = J.sender), (W[157] = B))
            : (B = W[157]),
            W[158] !== tc ||
            W[159] !== et ||
            W[160] !== tC ||
            W[161] !== eo ||
            W[162] !== ex ||
            W[163] !== m ||
            W[164] !== f ||
            W[165] !== tj ||
            W[166] !== e$ ||
            W[167] !== ev ||
            W[168] !== eu ||
            W[169] !== J.autoResolveSync ||
            W[170] !== J.clientUserMessageId ||
            W[171] !== J.commentCount ||
            W[172] !== J.deliveryStatus ||
            W[173] !== J.pullRequestFixMode ||
            W[174] !== J.questionReplies ||
            W[175] !== J.reviewMode ||
            W[176] !== J.sender?.accountUserId ||
            W[177] !== J.sentAtMs ||
            W[178] !== Y ||
            W[179] !== x ||
            W[180] !== v ||
            W[181] !== e8 ||
            W[182] !== y ||
            W[183] !== tv ||
            W[184] !== eA ||
            W[185] !== td ||
            W[186] !== tq ||
            W[187] !== tD ||
            W[188] !== ee
              ? ((z =
                  y &&
                  (0, a.jsx)(L.s, {
                    clientUserMessageId: J.clientUserMessageId,
                    localComposerFormat: Y,
                    message: ee,
                    senderAccountUserId: J.sender?.accountUserId,
                    messageContent:
                      null != J.questionReplies
                        ? (0, a.jsx)(K.U, { replies: J.questionReplies, cwd: ex, hostId: ev })
                        : void 0,
                    sentAtMs: tv ? null : J.sentAtMs,
                    hostId: ev,
                    compactActions: tC,
                    hideActions: tj,
                    messageStatus: x,
                    messageStatusIcon: v,
                    messageReaction:
                      null != tq
                        ? (0, a.jsx)(ey, { conversationId: eo, emoji: tq.emoji, label: tq.label, labelOnly: tD })
                        : void 0,
                    hookStats: "not-sent" === J.deliveryStatus ? e$ : null,
                    reviewMode: !0 === J.reviewMode,
                    pullRequestFixMode: !0 === J.pullRequestFixMode,
                    autoResolveSync: !0 === J.autoResolveSync,
                    allowEmptyEditMessage: f,
                    hasExternalAttachments: f,
                    commentCount: m ? 0 : J.commentCount,
                    additionalActions: tc,
                    messageHeader: td,
                    onEditMessage: et ? e8 : void 0,
                    cwd: ex,
                    threadId: eo,
                    turnId: eA,
                  })),
                (W[158] = tc),
                (W[159] = et),
                (W[160] = tC),
                (W[161] = eo),
                (W[162] = ex),
                (W[163] = m),
                (W[164] = f),
                (W[165] = tj),
                (W[166] = e$),
                (W[167] = ev),
                (W[168] = eu),
                (W[169] = J.autoResolveSync),
                (W[170] = J.clientUserMessageId),
                (W[171] = J.commentCount),
                (W[172] = J.deliveryStatus),
                (W[173] = J.pullRequestFixMode),
                (W[174] = J.questionReplies),
                (W[175] = J.reviewMode),
                (W[176] = J.sender?.accountUserId),
                (W[177] = J.sentAtMs),
                (W[178] = Y),
                (W[179] = x),
                (W[180] = v),
                (W[181] = e8),
                (W[182] = y),
                (W[183] = tv),
                (W[184] = eA),
                (W[185] = td),
                (W[186] = tq),
                (W[187] = tD),
                (W[188] = ee),
                (W[189] = z))
              : (z = W[189]),
            W[190] !== u ? ((q = u?.map(sa)), (W[190] = u), (W[191] = q)) : (q = W[191]),
            W[192] !== w ||
            W[193] !== b ||
            W[194] !== S ||
            W[195] !== N ||
            W[196] !== T ||
            W[197] !== D ||
            W[198] !== O ||
            W[199] !== U ||
            W[200] !== B ||
            W[201] !== z ||
            W[202] !== q
              ? (($ = (0, a.jsxs)("div", { className: w, children: [b, S, N, T, D, O, U, B, z, q] })),
                (W[192] = w),
                (W[193] = b),
                (W[194] = S),
                (W[195] = N),
                (W[196] = T),
                (W[197] = D),
                (W[198] = O),
                (W[199] = U),
                (W[200] = B),
                (W[201] = z),
                (W[202] = q),
                (W[203] = $))
              : ($ = W[203]))
          let ea = $
          return (
            W[204] !== J.securityInternalRecoveryCandidate || W[205] !== ea
              ? ((Z = ea), (W[204] = J.securityInternalRecoveryCandidate), (W[205] = ea), (W[206] = Z))
              : (Z = W[206]),
            Z
          )
        }
        case "assistant-message": {
          let e, t, n
          W[207] !== tU || W[208] !== J
            ? ((e = (0, $.rn)(J, tU)), (W[207] = tU), (W[208] = J), (W[209] = e))
            : (e = W[209])
          let s = e
          W[210] !== J || W[211] !== s
            ? ((t = null == s || s === J.content ? J : { ...J, content: s }), (W[210] = J), (W[211] = s), (W[212] = t))
            : (t = W[212])
          let i = t
          if (J.isSkippedCompletion) {
            let e
            if (null == s) return null
            return (
              W[213] !== eo || W[214] !== ex || W[215] !== i || W[216] !== ev
                ? ((e = (0, a.jsx)(eT.F, { item: i, conversationId: eo, cwd: ex, hostId: ev, showActionRow: !1 })),
                  (W[213] = eo),
                  (W[214] = ex),
                  (W[215] = i),
                  (W[216] = ev),
                  (W[217] = e))
                : (e = W[217]),
              e
            )
          }
          let l = J.markdownMediaCacheKey ?? eA ?? e2,
            o = tv && "final_answer" === J.phase
          if (J.structuredOutput?.type === "heartbeat") {
            let e
            if (null == s && !(J.renderPlaceholderWhileStreaming && !J.completed)) return null
            let t = s ?? void 0,
              n = tb ? tZ : void 0
            return (
              W[218] !== tg ||
              W[219] !== eN ||
              W[220] !== eP ||
              W[221] !== eL ||
              W[222] !== tw ||
              W[223] !== eV ||
              W[224] !== eZ ||
              W[225] !== eo ||
              W[226] !== ex ||
              W[227] !== i ||
              W[228] !== tM ||
              W[229] !== tK ||
              W[230] !== e$ ||
              W[231] !== ev ||
              W[232] !== l ||
              W[233] !== tV ||
              W[234] !== eW ||
              W[235] !== e9 ||
              W[236] !== eM ||
              W[237] !== tk ||
              W[238] !== tp ||
              W[239] !== eb ||
              W[240] !== eI ||
              W[241] !== tx ||
              W[242] !== o ||
              W[243] !== ty ||
              W[244] !== t ||
              W[245] !== n ||
              W[246] !== tm ||
              W[247] !== eA
                ? ((e = (0, a.jsx)(eT.F, {
                    item: i,
                    alwaysShowActions: tg,
                    assistantCopyText: t,
                    sourceTurnId: eA,
                    savedContentResponseId: eI,
                    after: eN,
                    compactAttachment: eP,
                    electronAfter: eL,
                    autoReviewStats: eV,
                    hookStats: e$,
                    completedThreadGoal: eZ,
                    conversationId: eo,
                    cwd: ex,
                    hostId: ev,
                    reportEntityType: eb,
                    markdownMediaCacheKey: l,
                    projectlessOutputDirectory: tk,
                    outputFileLinks: eM,
                    forceCodeBlockWordWrap: tK,
                    hasArtifacts: tM,
                    onAddResponseTextAnnotation: n,
                    onNavigateResponseTextAnnotation: tV,
                    onFileLinkOpen: eW,
                    onFork: e9,
                    renderCodeBlocksAsWritingBlocks: tK,
                    showActionRow: tx,
                    showTimestampHeader: o,
                    showTimestampWithoutActions: ty,
                    timestampHoverOnly: tw,
                    trailingActions: tm,
                    renderUsedSkillsDetails: tp,
                  })),
                  (W[218] = tg),
                  (W[219] = eN),
                  (W[220] = eP),
                  (W[221] = eL),
                  (W[222] = tw),
                  (W[223] = eV),
                  (W[224] = eZ),
                  (W[225] = eo),
                  (W[226] = ex),
                  (W[227] = i),
                  (W[228] = tM),
                  (W[229] = tK),
                  (W[230] = e$),
                  (W[231] = ev),
                  (W[232] = l),
                  (W[233] = tV),
                  (W[234] = eW),
                  (W[235] = e9),
                  (W[236] = eM),
                  (W[237] = tk),
                  (W[238] = tp),
                  (W[239] = eb),
                  (W[240] = eI),
                  (W[241] = tx),
                  (W[242] = o),
                  (W[243] = ty),
                  (W[244] = t),
                  (W[245] = n),
                  (W[246] = tm),
                  (W[247] = eA),
                  (W[248] = e))
                : (e = W[248]),
              e
            )
          }
          let r = tb ? tZ : void 0
          return (
            W[249] !== tr ||
            W[250] !== tL ||
            W[251] !== tg ||
            W[252] !== eN ||
            W[253] !== eP ||
            W[254] !== ej ||
            W[255] !== eL ||
            W[256] !== tw ||
            W[257] !== eV ||
            W[258] !== eZ ||
            W[259] !== eo ||
            W[260] !== ex ||
            W[261] !== i ||
            W[262] !== er ||
            W[263] !== tM ||
            W[264] !== tK ||
            W[265] !== e$ ||
            W[266] !== ev ||
            W[267] !== eu ||
            W[268] !== l ||
            W[269] !== tV ||
            W[270] !== eW ||
            W[271] !== e9 ||
            W[272] !== eM ||
            W[273] !== tu ||
            W[274] !== tk ||
            W[275] !== tp ||
            W[276] !== eb ||
            W[277] !== eI ||
            W[278] !== tx ||
            W[279] !== o ||
            W[280] !== ty ||
            W[281] !== tA ||
            W[282] !== r ||
            W[283] !== tm ||
            W[284] !== eA
              ? ((n = (0, a.jsx)(eT.F, {
                  item: i,
                  showShimmer: tA,
                  alwaysShowActions: tg,
                  assistantCopyText: ej,
                  turnId: eA,
                  isReadOnly: eu,
                  savedContentResponseId: eI,
                  autoReviewStats: eV,
                  hookStats: e$,
                  completedThreadGoal: eZ,
                  after: eN,
                  compactAttachment: eP,
                  electronAfter: eL,
                  conversationId: eo,
                  getVisualizeTurnTriggerType: er,
                  cwd: ex,
                  hostId: ev,
                  reportEntityType: eb,
                  markdownMediaCacheKey: l,
                  projectlessOutputDirectory: tk,
                  outputFileLinks: eM,
                  forceCodeBlockWordWrap: tK,
                  hasArtifacts: tM,
                  onAddResponseTextAnnotation: r,
                  onNavigateResponseTextAnnotation: tV,
                  onFileLinkOpen: eW,
                  onFork: e9,
                  renderCodeBlocksAsWritingBlocks: tK,
                  showActionRow: tx,
                  showTimestampHeader: o,
                  showTimestampWithoutActions: ty,
                  timestampHoverOnly: tw,
                  allowCopyWhileStreaming: tL,
                  additionalActions: tr,
                  trailingActions: tm,
                  renderUsedSkillsDetails: tp,
                  persistentAdditionalActions: tu,
                })),
                (W[249] = tr),
                (W[250] = tL),
                (W[251] = tg),
                (W[252] = eN),
                (W[253] = eP),
                (W[254] = ej),
                (W[255] = eL),
                (W[256] = tw),
                (W[257] = eV),
                (W[258] = eZ),
                (W[259] = eo),
                (W[260] = ex),
                (W[261] = i),
                (W[262] = er),
                (W[263] = tM),
                (W[264] = tK),
                (W[265] = e$),
                (W[266] = ev),
                (W[267] = eu),
                (W[268] = l),
                (W[269] = tV),
                (W[270] = eW),
                (W[271] = e9),
                (W[272] = eM),
                (W[273] = tu),
                (W[274] = tk),
                (W[275] = tp),
                (W[276] = eb),
                (W[277] = eI),
                (W[278] = tx),
                (W[279] = o),
                (W[280] = ty),
                (W[281] = tA),
                (W[282] = r),
                (W[283] = tm),
                (W[284] = eA),
                (W[285] = n))
              : (n = W[285]),
            n
          )
        }
        case "generated-image": {
          let e, t, n
          if ((0, B.YR)(J.failure)) {
            let e
            return (
              W[286] !== tY || W[287] !== J
                ? ((e = (0, a.jsx)(se, { icon: tY, item: J })), (W[286] = tY), (W[287] = J), (W[288] = e))
                : (e = W[288]),
              e
            )
          }
          if (null == J.src && "inProgress" !== J.status && "in_progress" !== J.status) return null
          W[289] !== J ? ((e = null == J.src ? [] : [J]), (W[289] = J), (W[290] = e)) : (e = W[290])
          let s = +(null == J.src)
          return (
            W[291] !== J.id || W[292] !== J.src
              ? ((t = null == J.src ? [J.id] : void 0), (W[291] = J.id), (W[292] = J.src), (W[293] = t))
              : (t = W[293]),
            W[294] !== eo || W[295] !== e || W[296] !== s || W[297] !== t || W[298] !== eA
              ? ((n = (0, a.jsx)(nl.B, {
                  conversationId: eo,
                  enableImageEditor: !0,
                  images: e,
                  pendingImageCount: s,
                  pendingImageIds: t,
                  turnId: eA,
                })),
                (W[294] = eo),
                (W[295] = e),
                (W[296] = s),
                (W[297] = t),
                (W[298] = eA),
                (W[299] = n))
              : (n = W[299]),
            n
          )
        }
        case "steered":
        case "userInput":
        case "plan-implementation":
        case "proposed-plan":
          return null
        case "image-view": {
          let e
          return (
            W[300] !== tY || W[301] !== eo || W[302] !== J
              ? ((e = (0, a.jsx)(nu, { icon: tY, item: J, conversationId: eo })),
                (W[300] = tY),
                (W[301] = eo),
                (W[302] = J),
                (W[303] = e))
              : (e = W[303]),
            e
          )
        }
        case "web-search": {
          let e
          return (
            W[304] !== tY || W[305] !== J
              ? ((e = (0, a.jsx)(a2.B, { icon: tY, item: J })), (W[304] = tY), (W[305] = J), (W[306] = e))
              : (e = W[306]),
            e
          )
        }
        case "worked-for": {
          let e
          return (
            W[307] !== J.completedAtMs || W[308] !== J.startedAtMs || W[309] !== J.status || W[310] !== tf
              ? ((e = (0, a.jsx)(a3.U, {
                  leadingAccessory: tf,
                  status: J.status,
                  startedAtMs: J.startedAtMs,
                  completedAtMs: J.completedAtMs,
                })),
                (W[307] = J.completedAtMs),
                (W[308] = J.startedAtMs),
                (W[309] = J.status),
                (W[310] = tf),
                (W[311] = e))
              : (e = W[311]),
            e
          )
        }
        case "reasoning": {
          let e
          return (
            W[312] !== eo || W[313] !== ex || W[314] !== tK || W[315] !== ev || W[316] !== J
              ? ((e = (0, a.jsx)(aP, { item: J, conversationId: eo, cwd: ex, hideCodeBlocks: tK, hostId: ev })),
                (W[312] = eo),
                (W[313] = ex),
                (W[314] = tK),
                (W[315] = ev),
                (W[316] = J),
                (W[317] = e))
              : (e = W[317]),
            e
          )
        }
        case "exec": {
          let e,
            t = "read" === (x = J).parsedCmd.type && (0, ez.c)({ summary: x.parsedCmd, cwd: x.cwd })
          if (
            (!tJ && tK && !t) ||
            (("read" === J.parsedCmd.type || "search" === J.parsedCmd.type || "list_files" === J.parsedCmd.type) &&
              !J.parsedCmd.isFinished &&
              !t)
          )
            return null
          let n = tR ? tY : void 0,
            s = tJ && null == tQ
          return (
            W[318] !== ec ||
            W[319] !== eo ||
            W[320] !== t_ ||
            W[321] !== ev ||
            W[322] !== eu ||
            W[323] !== em ||
            W[324] !== J ||
            W[325] !== tR ||
            W[326] !== n ||
            W[327] !== s ||
            W[328] !== e2
              ? ((e = (0, a.jsx)(tF, {
                  conversationId: eo,
                  isReadOnly: eu,
                  item: J,
                  isTurnInProgress: em,
                  threadDetailLevel: ec,
                  hostId: ev,
                  summaryTone: t_,
                  showSummaryIcon: tR,
                  summaryIcon: n,
                  hideRawCommand: s,
                  toolActivityTurnKey: e2,
                })),
                (W[318] = ec),
                (W[319] = eo),
                (W[320] = t_),
                (W[321] = ev),
                (W[322] = eu),
                (W[323] = em),
                (W[324] = J),
                (W[325] = tR),
                (W[326] = n),
                (W[327] = s),
                (W[328] = e2),
                (W[329] = e))
              : (e = W[329]),
            e
          )
        }
        case "patch": {
          let e
          if (tQ && null == J.approvalRequestId && !(0, eU.LS)(J)) {
            let e,
              t,
              n,
              s,
              i = "editing"
            !0 === J.success ? (i = "edited") : !1 === J.success ? (i = "rejected") : tI && (i = "stopped")
            let l = i
            return (
              W[330] !== J.changes ? ((e = Object.keys(J.changes)), (W[330] = J.changes), (W[331] = e)) : (e = W[331]),
              W[332] !== i || W[333] !== e.length
                ? ((t = (0, a.jsx)(p.A, {
                    id: "actionTranscript.patch.fileCountStatus",
                    defaultMessage:
                      "{status, select, edited {{count, plural, one {Edited a file} other {Edited files}}} rejected {File edit rejected} stopped {Stopped editing files} other {Editing files}}",
                    description: "Status of a native file edit in the action transcript",
                    values: { status: l, count: e.length },
                  })),
                  (W[332] = i),
                  (W[333] = e.length),
                  (W[334] = t))
                : (t = W[334]),
              W[335] !== ex || W[336] !== ev || W[337] !== tI || W[338] !== J
                ? ((n =
                    Object.keys(J.changes).length || J.visualizationActivities?.length
                      ? (0, a.jsx)(av, { item: J, isTurnCancelled: tI, cwd: ex, hostId: ev })
                      : null),
                  (W[335] = ex),
                  (W[336] = ev),
                  (W[337] = tI),
                  (W[338] = J),
                  (W[339] = n))
                : (n = W[339]),
              W[340] !== tY || W[341] !== t || W[342] !== n
                ? ((s = (0, a.jsx)(e4.e, { icon: tY, label: t, children: n })),
                  (W[340] = tY),
                  (W[341] = t),
                  (W[342] = n),
                  (W[343] = s))
                : (s = W[343]),
              s
            )
          }
          return (
            W[344] !== tY ||
            W[345] !== ex ||
            W[346] !== tK ||
            W[347] !== ev ||
            W[348] !== tI ||
            W[349] !== J ||
            W[350] !== tJ
              ? ((e =
                  tK && !tJ
                    ? null
                    : (0, a.jsx)(av, {
                        item: J,
                        isTurnCancelled: tI,
                        cwd: ex,
                        hostId: ev,
                        showDiffDetails: !tJ,
                        summaryIcon: tY,
                      })),
                (W[344] = tY),
                (W[345] = ex),
                (W[346] = tK),
                (W[347] = ev),
                (W[348] = tI),
                (W[349] = J),
                (W[350] = tJ),
                (W[351] = e))
              : (e = W[351]),
            e
          )
        }
        case "user-input-response": {
          let e
          return (
            W[352] !== tY || W[353] !== J
              ? ((e = (0, a.jsx)(aQ, { icon: tY, item: J })), (W[352] = tY), (W[353] = J), (W[354] = e))
              : (e = W[354]),
            e
          )
        }
        case "mcp-server-elicitation": {
          let e
          return (
            W[355] !== tY || W[356] !== ec || W[357] !== eo || W[358] !== ev || W[359] !== eu || W[360] !== J
              ? ((e = (0, a.jsx)(nD, {
                  conversationId: eo,
                  conversationDetailLevel: ec,
                  hostId: ev,
                  icon: tY,
                  item: J,
                  isReadOnly: eu,
                })),
                (W[355] = tY),
                (W[356] = ec),
                (W[357] = eo),
                (W[358] = ev),
                (W[359] = eu),
                (W[360] = J),
                (W[361] = e))
              : (e = W[361]),
            e
          )
        }
        case "permission-request": {
          let e
          return (
            W[362] !== J.completed
              ? ((e = J.completed ? null : (0, a.jsx)(e0, {})), (W[362] = J.completed), (W[363] = e))
              : (e = W[363]),
            e
          )
        }
        case "todo-list": {
          let e
          return (W[364] !== J ? ((e = (0, a.jsx)(aK._, { item: J })), (W[364] = J), (W[365] = e)) : (e = W[365]), e)
        }
        case "stream-error": {
          let e
          return (
            W[366] !== tY || W[367] !== J
              ? ((e = (0, a.jsx)(az, { icon: tY, item: J })), (W[366] = tY), (W[367] = J), (W[368] = e))
              : (e = W[368]),
            e
          )
        }
        case "system-error": {
          let e
          return (
            W[369] !== tY || W[370] !== eo || W[371] !== ev || W[372] !== J || W[373] !== eA
              ? ((e = (0, a.jsx)(a$.L, { conversationId: eo, hostId: ev, icon: tY, item: J, retryTurnId: eA })),
                (W[369] = tY),
                (W[370] = eo),
                (W[371] = ev),
                (W[372] = J),
                (W[373] = eA),
                (W[374] = e))
              : (e = W[374]),
            e
          )
        }
        case "auto-review-interruption-warning": {
          let e
          return (W[375] !== tY ? ((e = (0, a.jsx)(eK, { icon: tY })), (W[375] = tY), (W[376] = e)) : (e = W[376]), e)
        }
        case "turn-diff": {
          let e
          return (
            W[377] !== eo || W[378] !== ex || W[379] !== tK || W[380] !== ev || W[381] !== J
              ? ((e = tK
                  ? null
                  : (0, a.jsx)(aZ.a, { isInProgress: !1, item: J, conversationId: eo, cwd: ex, hostId: ev })),
                (W[377] = eo),
                (W[378] = ex),
                (W[379] = tK),
                (W[380] = ev),
                (W[381] = J),
                (W[382] = e))
              : (e = W[382]),
            e
          )
        }
        case "remote-task-created": {
          let e
          return (
            W[383] !== J.taskId
              ? ((e = (0, a.jsx)(aO, { taskId: J.taskId })), (W[383] = J.taskId), (W[384] = e))
              : (e = W[384]),
            e
          )
        }
        case "personality-changed": {
          let e
          return (
            W[385] !== J.personality
              ? ((e = (0, a.jsx)(aM, { personality: J.personality })), (W[385] = J.personality), (W[386] = e))
              : (e = W[386]),
            e
          )
        }
        case "forked-from-conversation": {
          let e
          return (
            W[387] !== J.sourceConversationId
              ? ((e = (0, a.jsx)(ni, { sourceConversationId: J.sourceConversationId })),
                (W[387] = J.sourceConversationId),
                (W[388] = e))
              : (e = W[388]),
            e
          )
        }
        case "model-changed": {
          let e
          return (
            W[389] !== J.fromModel || W[390] !== J.toModel
              ? ((e = (0, a.jsx)(nq, { fromModel: J.fromModel, toModel: J.toModel })),
                (W[389] = J.fromModel),
                (W[390] = J.toModel),
                (W[391] = e))
              : (e = W[391]),
            e
          )
        }
        case "model-rerouted": {
          let e
          return (
            W[392] !== J.reason || W[393] !== J.toModel
              ? ((e = (0, a.jsx)(nG, { toModel: J.toModel, reason: J.reason })),
                (W[392] = J.reason),
                (W[393] = J.toModel),
                (W[394] = e))
              : (e = W[394]),
            e
          )
        }
        case "context-compaction": {
          let e
          return (
            W[395] !== tY ||
            W[396] !== tK ||
            W[397] !== J.id ||
            W[398] !== J.source ||
            W[399] !== J.startedAtMs ||
            W[400] !== J.status
              ? ((e = (0, a.jsx)(
                  ts,
                  { status: J.status, startedAtMs: J.startedAtMs, icon: tY, isWorkMode: tK, source: J.source },
                  J.id,
                )),
                (W[395] = tY),
                (W[396] = tK),
                (W[397] = J.id),
                (W[398] = J.source),
                (W[399] = J.startedAtMs),
                (W[400] = J.status),
                (W[401] = e))
              : (e = W[401]),
            e
          )
        }
        case "worktree-init": {
          let e,
            t,
            n,
            s = `${J.id}:worktree`
          if (
            (W[402] !== J.worktreeOutputText || W[403] !== s
              ? ((e = { id: s, kind: "worktree", status: "completed", outputText: J.worktreeOutputText }),
                (W[402] = J.worktreeOutputText),
                (W[403] = s),
                (W[404] = e))
              : (e = W[404]),
            W[405] !== J.id || W[406] !== J.setup || W[407] !== e)
          ) {
            if (((t = [e]), null != J.setup)) {
              let e,
                n = `${J.id}:setup`
              ;(W[409] !== J.setup.outcome || W[410] !== J.setup.outputText || W[411] !== n
                ? ((e = { id: n, kind: "setup", status: J.setup.outcome, outputText: J.setup.outputText }),
                  (W[409] = J.setup.outcome),
                  (W[410] = J.setup.outputText),
                  (W[411] = n),
                  (W[412] = e))
                : (e = W[412]),
                t.push(e))
            }
            ;((W[405] = J.id), (W[406] = J.setup), (W[407] = e), (W[408] = t))
          } else t = W[408]
          return (
            W[413] !== t || W[414] !== tY
              ? ((n = (0, a.jsx)(a7, { activities: t, worktreeIcon: tY })), (W[413] = t), (W[414] = tY), (W[415] = n))
              : (n = W[415]),
            n
          )
        }
        case "mcp-tool-call": {
          let e, t
          if (tQ && !(0, eB.o)(J)) {
            let e, t
            W[416] !== J.result || W[417] !== J.source?.kind
              ? ((e =
                  J.source?.kind === "browserUse" && J.result?.type === "success"
                    ? (0, v._)(J.result.raw._meta)
                    : null),
                (W[416] = J.result),
                (W[417] = J.source?.kind),
                (W[418] = e))
              : (e = W[418])
            let n = e
            W[419] !== J || W[420] !== n
              ? ((t = (0, e6.$)(J) ?? (n ? { target: { type: "browser", url: n } } : null)),
                (W[419] = J),
                (W[420] = n),
                (W[421] = t))
              : (t = W[421])
            let s = t
            if (s && J.result?.type !== "error" && !J.mcpAppResourceUri) {
              let e, t, n
              return (
                W[422] !== eo || W[423] !== ev || W[424] !== J
                  ? ((e = (0, a.jsx)(nF.x, { item: J, hostId: ev, conversationId: eo, matchingApp: null })),
                    (W[422] = eo),
                    (W[423] = ev),
                    (W[424] = J),
                    (W[425] = e))
                  : (e = W[425]),
                W[426] !== eo || W[427] !== ev || W[428] !== J || W[429] !== tS || W[430] !== tN || W[431] !== e2
                  ? ((t =
                      J.result?.type === "success" &&
                      (J.result.content.length > 0 || null != J.result.structuredContent)
                        ? (0, a.jsx)(nE.T, {
                            item: J,
                            expandedContentOnly: !0,
                            conversationId: eo,
                            hostId: ev,
                            loadRemoteLogos: tS,
                            renderMcpApps: tN,
                            toolActivityTurnKey: e2,
                          })
                        : null),
                    (W[426] = eo),
                    (W[427] = ev),
                    (W[428] = J),
                    (W[429] = tS),
                    (W[430] = tN),
                    (W[431] = e2),
                    (W[432] = t))
                  : (t = W[432]),
                W[433] !== tY || W[434] !== eo || W[435] !== ev || W[436] !== s || W[437] !== e || W[438] !== t
                  ? ((n = (0, a.jsx)(e5, {
                      icon: tY,
                      label: e,
                      conversationId: eo,
                      hostId: ev,
                      request: s,
                      children: t,
                    })),
                    (W[433] = tY),
                    (W[434] = eo),
                    (W[435] = ev),
                    (W[436] = s),
                    (W[437] = e),
                    (W[438] = t),
                    (W[439] = n))
                  : (n = W[439]),
                n
              )
            }
          }
          return (
            W[440] !== eo || W[441] !== eu || W[442] !== tO || W[443] !== tE
              ? ((e = !eu && (0, eR.ah)(tE) === eo && tO ? () => tE.set(S.Hy, sn) : void 0),
                (W[440] = eo),
                (W[441] = eu),
                (W[442] = tO),
                (W[443] = tE),
                (W[444] = e))
              : (e = W[444]),
            W[445] !== tY ||
            W[446] !== eo ||
            W[447] !== ev ||
            W[448] !== J ||
            W[449] !== tS ||
            W[450] !== eq ||
            W[451] !== tN ||
            W[452] !== tT ||
            W[453] !== e ||
            W[454] !== e2
              ? ((t = (0, a.jsx)(nE.T, {
                  item: J,
                  onOpenPermissions: e,
                  conversationId: eo,
                  hostId: ev,
                  loadRemoteLogos: tS,
                  renderMcpApps: tN,
                  shouldAutoExpandMcpApp: tT,
                  onExpand: eq,
                  toolActivityTurnKey: e2,
                  summaryIcon: tY,
                })),
                (W[445] = tY),
                (W[446] = eo),
                (W[447] = ev),
                (W[448] = J),
                (W[449] = tS),
                (W[450] = eq),
                (W[451] = tN),
                (W[452] = tT),
                (W[453] = e),
                (W[454] = e2),
                (W[455] = t))
              : (t = W[455]),
            t
          )
        }
        case "automation-update": {
          let e, t
          return (
            W[456] !== eo || W[457] !== J.callId || W[458] !== eA
              ? ((e = { threadId: eo, turnId: eA, itemId: J.callId, elicitationType: "automation_schedule" }),
                (W[456] = eo),
                (W[457] = J.callId),
                (W[458] = eA),
                (W[459] = e))
              : (e = W[459]),
            W[460] !== J.arguments || W[461] !== J.result || W[462] !== e
              ? ((t = (0, a.jsx)(Z.N, { ...J.arguments, elicitation: e, result: J.result })),
                (W[460] = J.arguments),
                (W[461] = J.result),
                (W[462] = e),
                (W[463] = t))
              : (t = W[463]),
            t
          )
        }
        case "dynamic-tool-call": {
          let e, t
          W[464] !== J || W[465] !== tQ
            ? ((e = tQ && !1 !== J.success ? (0, e6.$)(J) : null), (W[464] = J), (W[465] = tQ), (W[466] = e))
            : (e = W[466])
          let n = e
          if (n) {
            let e, t
            return (
              W[467] !== J
                ? ((e = (0, a.jsx)(tl.w, { item: J, variant: "summary-text" })), (W[467] = J), (W[468] = e))
                : (e = W[468]),
              W[469] !== tY || W[470] !== eo || W[471] !== ev || W[472] !== n || W[473] !== e
                ? ((t = (0, a.jsx)(e5, { label: e, icon: tY, conversationId: eo, hostId: ev, request: n })),
                  (W[469] = tY),
                  (W[470] = eo),
                  (W[471] = ev),
                  (W[472] = n),
                  (W[473] = e),
                  (W[474] = t))
                : (t = W[474]),
              t
            )
          }
          return (
            W[475] !== tY || W[476] !== eo || W[477] !== tP || W[478] !== J
              ? ((t = (0, a.jsx)(tl.w, {
                  agentActivityIcon: tY,
                  conversationId: eo,
                  enableTimelineTargets: tP,
                  item: J,
                })),
                (W[475] = tY),
                (W[476] = eo),
                (W[477] = tP),
                (W[478] = J),
                (W[479] = t))
              : (t = W[479]),
            t
          )
        }
        case "automatic-approval-review": {
          let e
          return (
            W[480] !== tY || W[481] !== J
              ? ((e = (0, a.jsx)(eY, { icon: tY, item: J })), (W[480] = tY), (W[481] = J), (W[482] = e))
              : (e = W[482]),
            e
          )
        }
        case "strict-review-notice": {
          let e
          return (
            W[483] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(eH, {})), (W[483] = e))
              : (e = W[483]),
            e
          )
        }
        case "multi-agent-action": {
          let e, t
          return (
            W[484] !== J ? ((e = [J]), (W[484] = J), (W[485] = e)) : (e = W[485]),
            W[486] !== tY || W[487] !== eo || W[488] !== e
              ? ((t = (0, a.jsx)(n4, { conversationId: eo, icon: tY, items: e })),
                (W[486] = tY),
                (W[487] = eo),
                (W[488] = e),
                (W[489] = t))
              : (t = W[489]),
            t
          )
        }
        case "subagent-activity": {
          let e
          return (W[490] !== J ? ((e = (0, a.jsx)(aV, { item: J })), (W[490] = J), (W[491] = e)) : (e = W[491]), e)
        }
      }
    }
    function sn(e) {
      return null == e ? null : { ...e, open: !0 }
    }
    function sa(e, t) {
      return (0, a.jsxs)(
        "div",
        {
          className:
            "flex max-w-[77%] items-start gap-2 rounded-lg border border-text-warning/30 px-3 py-2 text-sm text-default",
          children: [
            (0, a.jsx)(F.T7m, { className: "mt-0.5 text-warning" }),
            (0, a.jsx)("span", { className: "min-w-0 break-words whitespace-pre-wrap", children: e }),
          ],
        },
        `${String(t)}:${e}`,
      )
    }
    function ss(e, t) {
      return (0, a.jsx)(
        j.x,
        {
          Icon: H.A,
          children: (0, a.jsx)(p.A, {
            id: "codex.userMessage.unavailableFileAttachment",
            defaultMessage: "{fileName} (unavailable)",
            description:
              "Attachment pill for a file sent from an external chat that could not be made available in this conversation. fileName is the original filename.",
            values: { fileName: e },
          }),
        },
        t,
      )
    }
    function si(e) {
      return e.source
    }
    function sl(e) {
      return "upload" in e
        ? null != (0, g.Yg)(e.upload.fileName)
        : null == e.startLine && null != (0, g.Yg)(e.fsPath || e.path)
    }
    function so(e) {
      return "diff" === e.origin || "artifact_comment" === e.origin
    }
    function sr(e) {
      return (0, a1.tq)(e) || (0, a1.e$)(e)
    }
    function sc(e) {
      let t,
        n = (0, s.c)(3),
        { children: i, to: l } = e
      return (
        n[0] !== i || n[1] !== l
          ? ((t = (0, a.jsx)(h.N_, {
              className:
                "inline-flex cursor-interaction items-center gap-1 rounded-md px-1 py-0.5 text-size-chat-sm !text-codex-description hover:!text-default",
              to: l,
              children: i,
            })),
            (n[0] = i),
            (n[1] = l),
            (n[2] = t))
          : (t = n[2]),
        t
      )
    }
    function sd({ cwd: e, hostId: t, sources: n }) {
      let a = null == n ? null : (0, eP.LX)(n),
        s = "project" === a && null == e ? null : a
      return (0, eL.NZ)({ hostId: t, projectRoot: "project" === s ? e : null, source: s })
    }
  },
  NEbx(e, t, n) {
    n.d(t, { j: () => z, g: () => B })
    var a = n("ABep"),
      s = n("QosV"),
      i = n("zTeN"),
      l = n("DBCl"),
      o = n("P61R"),
      r = n("OZum"),
      c = n("Haiv"),
      d = n("CjTC"),
      u = n("zd8w"),
      m = n("Wf1j"),
      p = n("mnR8"),
      h = n("KJ1J"),
      f = n("Ooax"),
      g = n("PrVQ"),
      x = n("PuSj"),
      v = n("ojna"),
      y = n("MrGp"),
      w = n("wwME"),
      b = n("ZX44"),
      C = n("NJrC"),
      j = n("qwxA"),
      A = n("qZWE"),
      I = n("W10I"),
      k = n("u0X2"),
      M = n("Qg4G"),
      S = n("cLdu"),
      N = n("Sd8U"),
      T = n("Oj9r"),
      _ = n("V3rO"),
      R = n("hZax"),
      P = n("z0Na"),
      L = n("alO6"),
      D = n("Ehlj"),
      F = n("Dgwo"),
      E = n("CfsC"),
      O = n("vdpW")
    let U = (0, i.i1)(_.l7, (e, { get: t }) => t(A.vm, e) || t(A.tX, e) === e)
    function B(e) {
      let t,
        n,
        i = (0, s.c)(21),
        {
          widgetStatePersistence: l,
          chatGptMessageId: o,
          conversationId: r,
          hostId: c,
          isReadOnly: d,
          items: u,
          appInfoOverride: m,
          shouldInitialize: p,
          reuseOnly: h,
        } = e,
        f = void 0 !== d && d,
        g = void 0 !== p && p,
        x = void 0 !== h && h
      if (
        i[0] !== m ||
        i[1] !== o ||
        i[2] !== r ||
        i[3] !== c ||
        i[4] !== f ||
        i[5] !== u ||
        i[6] !== x ||
        i[7] !== g ||
        i[8] !== l
      ) {
        let e
        ;(i[10] !== m ||
        i[11] !== o ||
        i[12] !== r ||
        i[13] !== c ||
        i[14] !== f ||
        i[15] !== x ||
        i[16] !== g ||
        i[17] !== l
          ? ((e = (e) =>
              "mcp-tool-call" !== e.type ||
              !0 === e.isMcpAppWidgetSuperseded ||
              (0, v.Q)(e.invocation) ||
              (0, M.d)(e.invocation, c)
                ? null
                : (0, a.jsx)(
                    q,
                    {
                      widgetStatePersistence: l,
                      chatGptMessageId: o,
                      conversationId: r,
                      hostId: c,
                      isReadOnly: f,
                      item: e,
                      shouldInitialize: g,
                      reuseOnly: x,
                      appInfoOverride: m,
                    },
                    e.callId,
                  )),
            (i[10] = m),
            (i[11] = o),
            (i[12] = r),
            (i[13] = c),
            (i[14] = f),
            (i[15] = x),
            (i[16] = g),
            (i[17] = l),
            (i[18] = e))
          : (e = i[18]),
          (t = u.map(e)),
          (i[0] = m),
          (i[1] = o),
          (i[2] = r),
          (i[3] = c),
          (i[4] = f),
          (i[5] = u),
          (i[6] = x),
          (i[7] = g),
          (i[8] = l),
          (i[9] = t))
      } else t = i[9]
      return (i[19] !== t ? ((n = (0, a.jsx)(a.Fragment, { children: t })), (i[19] = t), (i[20] = n)) : (n = i[20]), n)
    }
    function z(e) {
      let t,
        n,
        a = (0, s.c)(7),
        { callIds: o } = e,
        r = (0, i.gh)(T.GD),
        c = (0, i.Ul)(A.RT)
      return (
        a[0] !== o || a[1] !== r
          ? ((t = () => {
              for (let e of o) {
                let t = (0, l.djq)(e)
                r.get(A.RT).has(t) || (0, A.$u)(r, t)
              }
            }),
            (a[0] = o),
            (a[1] = r),
            (a[2] = t))
          : (t = a[2]),
        a[3] !== o || a[4] !== c || a[5] !== r
          ? ((n = [o, c, r]), (a[3] = o), (a[4] = c), (a[5] = r), (a[6] = n))
          : (n = a[6]),
        (0, u.useLayoutEffect)(t, n),
        null
      )
    }
    function q(e) {
      let t,
        n,
        o,
        r = (0, s.c)(16),
        {
          widgetStatePersistence: c,
          chatGptMessageId: d,
          conversationId: m,
          hostId: p,
          isReadOnly: h,
          item: f,
          appInfoOverride: g,
          shouldInitialize: x,
          reuseOnly: v,
        } = e
      r[0] !== f.callId ? ((t = (0, l.djq)(f.callId)), (r[0] = f.callId), (r[1] = t)) : (t = r[1])
      let y = t
      r[2] !== f.completed ? ((n = () => !f.completed), (r[2] = f.completed), (r[3] = n)) : (n = r[3])
      let [w] = (0, u.useState)(n),
        b = (0, i._U)(
          (x &&
            (w ||
              v ||
              null != f.appContext ||
              null != f.invocationResourceUri ||
              null != f.mcpAppResourceUri ||
              (f.result?.type === "success" && f.result.raw?._meta != null))) ||
            (x ? A.vm : U),
          y,
        ),
        C = (0, i._U)(x || b ? A.ve : null, y)
      if (!b && null == C) return null
      let j = w && !v
      return (
        r[4] !== g ||
        r[5] !== d ||
        r[6] !== m ||
        r[7] !== p ||
        r[8] !== h ||
        r[9] !== f ||
        r[10] !== y ||
        r[11] !== C ||
        r[12] !== v ||
        r[13] !== j ||
        r[14] !== c
          ? ((o = (0, a.jsx)(W, {
              registrationFallback: C,
              openOnRegistration: j,
              reuseOnly: v,
              widgetStatePersistence: c,
              chatGptMessageId: d,
              conversationId: m,
              hostId: p,
              isReadOnly: h,
              item: f,
              appInfoOverride: g,
              mcpAppId: y,
            })),
            (r[4] = g),
            (r[5] = d),
            (r[6] = m),
            (r[7] = p),
            (r[8] = h),
            (r[9] = f),
            (r[10] = y),
            (r[11] = C),
            (r[12] = v),
            (r[13] = j),
            (r[14] = c),
            (r[15] = o))
          : (o = r[15]),
        o
      )
    }
    function W(e) {
      let t,
        n,
        l,
        u,
        v,
        M,
        T,
        _,
        U,
        B,
        z,
        q,
        W,
        G,
        V,
        $,
        K,
        Z = (0, s.c)(130),
        {
          registrationFallback: Q,
          openOnRegistration: J,
          reuseOnly: Y,
          widgetStatePersistence: X,
          chatGptMessageId: ee,
          conversationId: et,
          hostId: en,
          isReadOnly: ea,
          item: es,
          appInfoOverride: ei,
          mcpAppId: el,
        } = e,
        eo = (0, i.gh)(N.PR)
      Z[0] !== et || Z[1] !== en || Z[2] !== es || Z[3] !== Q
        ? ((t = { item: es, hostId: en, conversationId: et, fallback: Q }),
          (Z[0] = et),
          (Z[1] = en),
          (Z[2] = es),
          (Z[3] = Q),
          (Z[4] = t))
        : (t = Z[4])
      let er = (0, P.$b)(t),
        {
          catalog: ec,
          resourceUri: ed,
          isResourceUriPending: eu,
          toolScope: em,
          toolCallFailed: ep,
          successfulToolResult: eh,
          displayedSuccessfulToolResult: ef,
          isCodexAppsToolCall: eg,
          originCallId: ex,
          toolDefinition: ev,
          toolCallStatus: ey,
        } = er,
        ew = ec.data,
        eb =
          null != ed &&
          (null != Q || (!ep && (!es.completed || null != ef))) &&
          !eu &&
          !(
            ed === f.hc &&
            (ea || em?.connectorId !== o.iq || !es.completed || ep || (null == eh && Q?.resourceUri !== ed))
          )
      Z[5] !== ei || Z[6] !== eb || Z[7] !== en || Z[8] !== es
        ? ((n = { item: es, hostId: en, appInfoOverride: ei, enabled: eb, retryOnMount: !1 }),
          (Z[5] = ei),
          (Z[6] = eb),
          (Z[7] = en),
          (Z[8] = es),
          (Z[9] = n))
        : (n = Z[9])
      let { matchingApp: eC, plugin: ej, pluginIcon: eA } = (0, P.Ws)(n),
        eI = (0, m.A)(),
        { platform: ek } = (0, w.V)(),
        eM = (0, L.EP)({
          pluginId: es.pluginId,
          toolDisplay: es.toolDisplay,
          toolDefinition: ev,
          appContext: es.appContext,
          completed: es.completed,
          intl: eI,
          matchingApp: eC,
          platform: ek,
          serverName: es.invocation.server,
          source: es.source,
          toolArguments: es.invocation.arguments,
          toolName: es.invocation.tool,
          toolResult: es.result,
        })
      Z[10] !== es.appContext || Z[11] !== es.invocation.tool || Z[12] !== eC || Z[13] !== ej
        ? ((l =
            null != ej
              ? (0, c.V)(ej)
              : (eC?.name ??
                es.appContext?.appName ??
                (0, L.Il)({ appContext: es.appContext, matchingApp: eC, toolName: es.invocation.tool }))),
          (Z[10] = es.appContext),
          (Z[11] = es.invocation.tool),
          (Z[12] = eC),
          (Z[13] = ej),
          (Z[14] = l))
        : (l = Z[14])
      let eS = l,
        { resource: eN, renderData: eT, access: e_, state: eR, refetchResource: eP } = (0, P.Dn)(er, eb && null == ey),
        eL = eN?.resourceIdentityVerified === !0
      if (((0, R.Zj)("2957382457"), !eb || null == ed)) return null
      let eD = eR.error,
        eF = null == ey && eR.isLoading,
        eE = null != eD
      Z[15] !== eF || Z[16] !== eT || Z[17] !== ed || Z[18] !== eE || !1 !== Z[19]
        ? ((u = (0, C.RQ)({
            hasResourceError: eE,
            isResourceLoading: eF,
            isDilEnabled: !1,
            renderData: eT,
            resourceUri: ed,
            shouldRenderMcpApp: !0,
          })),
          (Z[15] = eF),
          (Z[16] = eT),
          (Z[17] = ed),
          (Z[18] = eE),
          (Z[19] = !1),
          (Z[20] = u))
        : (u = Z[20])
      let eO = u,
        eU = "html" === eO.kind ? eO.renderData : null
      if (
        Z[21] !== e_ ||
        Z[22] !== et ||
        Z[23] !== ef ||
        Z[24] !== en ||
        Z[25] !== eg ||
        Z[26] !== es.callId ||
        Z[27] !== es.invocation.arguments ||
        Z[28] !== es.invocation.server ||
        Z[29] !== es.pluginId ||
        Z[30] !== es.threadId ||
        Z[31] !== eN ||
        Z[32] !== ed ||
        Z[33] !== em ||
        Z[34] !== ej?.plugin ||
        Z[35] !== eo
      ) {
        _ = Symbol.for("react.early_return_sentinel")
        e: {
          let e
          v = {
            ...(0, k.Aj)(eo, {
              identity: { pluginId: (0, d.p)(ej?.plugin ?? null) },
              hostId: en,
              server: es.invocation.server,
              pluginId: es.pluginId,
            }),
            source: "tool_result",
          }
          let t = ed === f.hc
          if (
            Z[40] !== e_ ||
            Z[41] !== et ||
            Z[42] !== ef ||
            Z[43] !== en ||
            Z[44] !== eg ||
            Z[45] !== es.callId ||
            Z[46] !== es.invocation.arguments ||
            Z[47] !== es.threadId ||
            Z[48] !== eN ||
            Z[49] !== ed ||
            Z[50] !== eo
          ) {
            let t, n
            ;(Z[52] !== ef || Z[53] !== eN
              ? ((t = H(eN) ? ef : null), (Z[52] = ef), (Z[53] = eN), (Z[54] = t))
              : (t = Z[54]),
              Z[55] !== et ||
              Z[56] !== en ||
              Z[57] !== eg ||
              Z[58] !== es.callId ||
              Z[59] !== es.threadId ||
              Z[60] !== eo
                ? ((n =
                    eg && es.threadId === et && !et.startsWith("chatgpt:")
                      ? (e) =>
                          (async function (e, { hostId: t, conversationId: n, callId: a, connectorName: s }) {
                            let i = e.get(E.B, t)
                            if (!(0, D.JF)(i, "turnToolOutput")) return
                            let l = e.get(O.M, { hostId: t, threadId: n })?.at(-1)
                            if (null == l || !e.get(O.hm, l)?.includes(a)) return
                            let o = e.get(O.OM, l)
                            ;("inProgress" === o || "completed" === o) &&
                              (await (0, F.V)(e, t).sendRequest("turn/start", {
                                threadId: n,
                                input: [],
                                toolOutput: {
                                  namespace: "codex_app",
                                  name: "connector_reconnected",
                                  output: (0, f.Ee)(s),
                                },
                              }))
                          })(eo, { hostId: en, conversationId: et, callId: es.callId, connectorName: e })
                      : void 0),
                  (Z[55] = et),
                  (Z[56] = en),
                  (Z[57] = eg),
                  (Z[58] = es.callId),
                  (Z[59] = es.threadId),
                  (Z[60] = eo),
                  (Z[61] = n))
                : (n = Z[61]),
              (e = (0, g.u)({
                scope: eo,
                sourceId: JSON.stringify([en, et, es.callId]),
                productSku: et.startsWith("chatgpt:") ? "TPP" : "CODEX",
                hostId: en,
                resourceUri: ed,
                access: e_,
                toolInput: es.invocation.arguments,
                toolResult: t,
                onReconnected: n,
              })),
              (Z[40] = e_),
              (Z[41] = et),
              (Z[42] = ef),
              (Z[43] = en),
              (Z[44] = eg),
              (Z[45] = es.callId),
              (Z[46] = es.invocation.arguments),
              (Z[47] = es.threadId),
              (Z[48] = eN),
              (Z[49] = ed),
              (Z[50] = eo),
              (Z[51] = e))
          } else e = Z[51]
          if (((T = e), t && null == T)) {
            _ = null
            break e
          }
          if (null != T) {
            let e
            ;(Z[62] !== T
              ? ((e = { requestReconnectConnector: T, openFile: null, handleRequest: g.S }), (Z[62] = T), (Z[63] = e))
              : (e = Z[63]),
              (M = e))
          } else
            (0, S.hE)(en) &&
              eg &&
              null != e_ &&
              null != em &&
              (M = (0, x.y)({ scope: eo, conversationId: et, access: e_, resourceUri: ed, attribution: v }))
        }
        ;((Z[21] = e_),
          (Z[22] = et),
          (Z[23] = ef),
          (Z[24] = en),
          (Z[25] = eg),
          (Z[26] = es.callId),
          (Z[27] = es.invocation.arguments),
          (Z[28] = es.invocation.server),
          (Z[29] = es.pluginId),
          (Z[30] = es.threadId),
          (Z[31] = eN),
          (Z[32] = ed),
          (Z[33] = em),
          (Z[34] = ej?.plugin),
          (Z[35] = eo),
          (Z[36] = v),
          (Z[37] = M),
          (Z[38] = T),
          (Z[39] = _))
      } else ((v = Z[36]), (M = Z[37]), (T = Z[38]), (_ = Z[39]))
      if (_ !== Symbol.for("react.early_return_sentinel")) return _
      let eB = j.er,
        ez = b.F
      ;(Z[64] !== en || Z[65] !== eo
        ? ((U = () =>
            "chatgpt" === eo.value.kind
              ? { kind: "chatgpt", conversationOrigin: eo.get(y.uh, eo.value.conversationId) }
              : { kind: "app-server", hostId: en }),
          (Z[64] = en),
          (Z[65] = eo),
          (Z[66] = U))
        : (U = Z[66]),
        Z[67] !== eP || Z[68] !== T
          ? ((B = async () => {
              let e = await eP()
              if (null != T && !H(e)) throw Error("The sign-in widget resource could not be verified")
              return (0, C.i1)(e)
            }),
            (Z[67] = eP),
            (Z[68] = T),
            (Z[69] = B))
          : (B = Z[69]))
      let eq = M,
        eW = eF || !es.completed || null == ef || null != ey
      Z[70] !== eD || Z[71] !== eU || Z[72] !== eW
        ? ((z = { data: eU, error: eD, isLoading: eW }), (Z[70] = eD), (Z[71] = eU), (Z[72] = eW), (Z[73] = z))
        : (z = Z[73])
      let eH = A.qi
      Z[74] !== ef ||
      Z[75] !== es.invocation.server ||
      Z[76] !== es.invocation.tool ||
      Z[77] !== es.invocationResourceUri ||
      Z[78] !== es.mcpAppUi?.preferredModelDisplayMode ||
      Z[79] !== ew
        ? ((q =
            es.mcpAppUi?.preferredModelDisplayMode ??
            (0, I.Hn)({
              invocationResourceUri: es.invocationResourceUri,
              mcpServerStatuses: ew,
              server: es.invocation.server,
              tool: es.invocation.tool,
              toolResult: ef,
            })?.preferredModelDisplayMode),
          (Z[74] = ef),
          (Z[75] = es.invocation.server),
          (Z[76] = es.invocation.tool),
          (Z[77] = es.invocationResourceUri),
          (Z[78] = es.mcpAppUi?.preferredModelDisplayMode),
          (Z[79] = ew),
          (Z[80] = q))
        : (q = Z[80])
      let eG = null == T ? "thread" : "component"
      Z[81] !== ee ||
      Z[82] !== es.appContext ||
      Z[83] !== es.invocation.tool ||
      Z[84] !== es.invocationResourceUri ||
      Z[85] !== ed ||
      Z[86] !== em ||
      Z[87] !== ex ||
      Z[88] !== eL
        ? ((W = {
            appContext: es.appContext,
            chatGptMessageId: ee,
            codexAppsToolScope: em,
            invocationResourceUri: es.invocationResourceUri,
            originCallId: ex,
            resourceIdentityVerified: eL,
            originResourceUri: ed,
            originTool: es.invocation.tool,
          }),
          (Z[81] = ee),
          (Z[82] = es.appContext),
          (Z[83] = es.invocation.tool),
          (Z[84] = es.invocationResourceUri),
          (Z[85] = ed),
          (Z[86] = em),
          (Z[87] = ex),
          (Z[88] = eL),
          (Z[89] = W))
        : (W = Z[89])
      let eV = es.invocation.server
      ;(Z[90] !== es.invocation.server || Z[91] !== eC || Z[92] !== eA
        ? ((G =
            eA ??
            ((0, h.fI)(es.invocation.server) && null != eC
              ? { alt: eC.name, knownAppId: eC.id, logoUrl: eC.logoUrl, logoDarkUrl: eC.logoUrlDark }
              : null)),
          (Z[90] = es.invocation.server),
          (Z[91] = eC),
          (Z[92] = eA),
          (Z[93] = G))
        : (G = Z[93]),
        Z[94] !== es.invocation.server || Z[95] !== eC || Z[96] !== ev
          ? ((V =
              (0, p.f8)(ev) ??
              ((0, h.fI)(es.invocation.server) && null != eC ? eC.name : (0, r.g)(es.invocation.server))),
            (Z[94] = es.invocation.server),
            (Z[95] = eC),
            (Z[96] = ev),
            (Z[97] = V))
          : (V = Z[97]))
      let e$ = eI.formatMessage(
        {
          id: "codex.mcpTool.mcpAppIframeTitle",
          defaultMessage: "{server} {tool}",
          description: "Accessible title for an MCP app iframe rendered in a tool result",
        },
        {
          server: (function (e) {
            let t = e.trim()
            if (0 === t.length) return "MCP"
            let n = (0, r.g)(t)
            return n.toUpperCase().endsWith(" MCP") ? n : `${n} MCP`
          })(es.invocation.server),
          tool: eM,
        },
      )
      return (
        Z[98] !== ef || Z[99] !== es.result
          ? (($ =
              es.result?.raw ??
              (es.result?.type === "error"
                ? { content: [{ type: "text", text: es.result.error }], structuredContent: { error: es.result.error } }
                : ef)),
            (Z[98] = ef),
            (Z[99] = es.result),
            (Z[100] = $))
          : ($ = Z[100]),
        Z[101] !== eB ||
        Z[102] !== e_ ||
        Z[103] !== v ||
        Z[104] !== et ||
        Z[105] !== en ||
        Z[106] !== es.invocation.arguments ||
        Z[107] !== es.invocation.server ||
        Z[108] !== M ||
        Z[109] !== el ||
        Z[110] !== ew ||
        Z[111] !== J ||
        Z[112] !== Y ||
        Z[113] !== eo ||
        Z[114] !== eS ||
        Z[115] !== B ||
        Z[116] !== z ||
        Z[117] !== eH ||
        Z[118] !== q ||
        Z[119] !== eG ||
        Z[120] !== W ||
        Z[121] !== G ||
        Z[122] !== V ||
        Z[123] !== e$ ||
        Z[124] !== $ ||
        Z[125] !== ez ||
        Z[126] !== U ||
        Z[127] !== ey ||
        Z[128] !== X
          ? ((K = (0, a.jsx)(eB, {
              Frame: ez,
              analyticsContext: v,
              getNewThreadDestination: U,
              refetchResource: B,
              mcpAppHostAdapter: eq,
              access: e_,
              resource: z,
              openOnRegistration: J,
              reuseOnly: Y,
              hostDisplayModes: eH,
              legacyPreferredDisplayMode: q,
              recipient: eo,
              lifetime: eG,
              widgetStatePersistence: X,
              conversationId: et,
              hostId: en,
              hostedInThreadScrollLayout: !0,
              mcpAppId: el,
              mcpAppScope: W,
              sourceName: eS,
              mcpServerStatuses: ew,
              server: eV,
              appIcon: G,
              sidePanelTitle: V,
              title: e$,
              toolArguments: es.invocation.arguments,
              toolCallStatus: ey,
              toolResult: $,
            })),
            (Z[101] = eB),
            (Z[102] = e_),
            (Z[103] = v),
            (Z[104] = et),
            (Z[105] = en),
            (Z[106] = es.invocation.arguments),
            (Z[107] = es.invocation.server),
            (Z[108] = M),
            (Z[109] = el),
            (Z[110] = ew),
            (Z[111] = J),
            (Z[112] = Y),
            (Z[113] = eo),
            (Z[114] = eS),
            (Z[115] = B),
            (Z[116] = z),
            (Z[117] = eH),
            (Z[118] = q),
            (Z[119] = eG),
            (Z[120] = W),
            (Z[121] = G),
            (Z[122] = V),
            (Z[123] = e$),
            (Z[124] = $),
            (Z[125] = ez),
            (Z[126] = U),
            (Z[127] = ey),
            (Z[128] = X),
            (Z[129] = K))
          : (K = Z[129]),
        K
      )
    }
    function H(e) {
      return (
        e?.resourceIdentityVerified === !0 && 1 === e.resource.contents.length && e.resource.contents[0]?.uri === f.hc
      )
    }
  },
  FVQK(e, t, n) {
    var a = n("ABep"),
      s = n("QosV"),
      i = n("zTeN"),
      l = n("Wf1j"),
      o = n("sM3V"),
      r = n("W10I"),
      c = n("KU8M"),
      d = n("alO6")
    n.d(
      t,
      {},
      {
        x: function (e) {
          let t,
            n,
            u,
            m,
            p,
            h,
            f = (0, s.c)(30),
            { item: g, hostId: x, conversationId: v, matchingApp: y } = e,
            w = (0, l.A)()
          f[0] !== v || f[1] !== x
            ? ((t = { hostId: x, conversationId: v }), (f[0] = v), (f[1] = x), (f[2] = t))
            : (t = f[2])
          let b = (0, i._U)(o.n, t)
          ;(f[3] !== x ||
          f[4] !== g.appContext ||
          f[5] !== g.invocation.server ||
          f[6] !== g.invocation.tool ||
          f[7] !== g.invocationResourceUri ||
          f[8] !== b
            ? ((n = {
                appContext: g.appContext,
                hostId: x,
                invocationResourceUri: g.invocationResourceUri,
                server: g.invocation.server,
                threadId: b,
                tool: g.invocation.tool,
              }),
              (f[3] = x),
              (f[4] = g.appContext),
              (f[5] = g.invocation.server),
              (f[6] = g.invocation.tool),
              (f[7] = g.invocationResourceUri),
              (f[8] = b),
              (f[9] = n))
            : (n = f[9]),
            f[10] !== v ? ((u = v.startsWith("chatgpt:")), (f[10] = v), (f[11] = u)) : (u = f[11]))
          let C = !u
          f[12] !== C ? ((m = { enabled: C }), (f[12] = C), (f[13] = m)) : (m = f[13])
          let { data: j } = (0, i._U)(c.e, n, m)
          return (
            f[14] !== w ||
            f[15] !== g.appContext ||
            f[16] !== g.completed ||
            f[17] !== g.invocation.arguments ||
            f[18] !== g.invocation.server ||
            f[19] !== g.invocation.tool ||
            f[20] !== g.invocationResourceUri ||
            f[21] !== g.pluginId ||
            f[22] !== g.result ||
            f[23] !== g.source ||
            f[24] !== g.toolDisplay ||
            f[25] !== y ||
            f[26] !== j
              ? ((p = (0, d.EP)({
                  pluginId: g.pluginId,
                  appContext: g.appContext,
                  completed: g.completed,
                  intl: w,
                  matchingApp: y,
                  serverName: g.invocation.server,
                  source: g.source,
                  toolArguments: g.invocation.arguments,
                  toolName: g.invocation.tool,
                  toolResult: g.result,
                  toolDisplay: g.toolDisplay,
                  toolDefinition: (0, r.$e)({
                    appContext: g.appContext,
                    invocationResourceUri: g.invocationResourceUri,
                    mcpServerStatuses: j,
                    server: g.invocation.server,
                    tool: g.invocation.tool,
                  }),
                })),
                (f[14] = w),
                (f[15] = g.appContext),
                (f[16] = g.completed),
                (f[17] = g.invocation.arguments),
                (f[18] = g.invocation.server),
                (f[19] = g.invocation.tool),
                (f[20] = g.invocationResourceUri),
                (f[21] = g.pluginId),
                (f[22] = g.result),
                (f[23] = g.source),
                (f[24] = g.toolDisplay),
                (f[25] = y),
                (f[26] = j),
                (f[27] = p))
              : (p = f[27]),
            f[28] !== p ? ((h = (0, a.jsx)(a.Fragment, { children: p })), (f[28] = p), (f[29] = h)) : (h = f[29]),
            h
          )
        },
      },
    )
  },
  qYs6(e, t, n) {
    var a = n("JiBc")
    n.d(
      t,
      {},
      {
        D: function (e, t) {
          if (!e) return null
          let n = (0, a.F)(e)[0]
          if (null == n || (0 === n.additions && 0 === n.deletions)) {
            let n = (function (e) {
              let t = 0,
                n = 0
              for (let a of e.split(/\r?\n/))
                !(a.startsWith("+++") || a.startsWith("---")) &&
                  (a.startsWith("+") ? (t += 1) : a.startsWith("-") && (n += 1))
              return { added: t, deleted: n }
            })(e)
            if (n.added > 0 || n.deleted > 0) return { ...n, openLocation: { path: t, line: 1 } }
          }
          return null == n
            ? null
            : {
                added: n.additions,
                deleted: n.deletions,
                openLocation: { path: t, line: n.firstAdditionLine ?? n.firstDeletionLine ?? 1 },
              }
        },
      },
    )
  },
  NIKO(e, t, n) {
    var a = n("UOvO"),
      s = n("ASxG")
    let i = s.object({ type: s.literal("text"), text: s.literal(a.Vr) })
    n.d(
      t,
      {},
      {
        h: function (e) {
          if (
            (e?.type !== "dynamicToolCall" && e?.type !== "mcpToolCall") ||
            e.tool !== a.GY ||
            "completed" !== e.status
          )
            return null
          if (
            "dynamicToolCall" === e.type
              ? (null == e.namespace || "codex_app" === e.namespace) && !0 === e.success
              : "codex_app" === e.server && e.result?.content.some((e) => i.safeParse(e).success)
          ) {
            let t = a.T2.safeParse(e.arguments)
            if (t.success) return t.data.summary
          }
          return null
        },
      },
    )
  },
  K00L(e, t, n) {
    n.d(t, { o: () => D })
    var a = n("ABep"),
      s = n("QosV"),
      i = n("oyxz"),
      l = n("uOZ6"),
      o = n("zTeN"),
      r = n("Wf1j"),
      c = n("Qgfj"),
      d = n("bVeK"),
      u = n("VL1D"),
      m = n("YA2q"),
      p = n("CH2b"),
      h = n("l8eZ"),
      f = n.n(h),
      g = n("DBCl"),
      x = n("tl5a"),
      v = n("lBzi"),
      y = n("B0Wx"),
      w = n("MrGp"),
      b = n("ZniH"),
      C = n("EU9a"),
      j = n("TJMx"),
      A = n("EgLy"),
      I = n("OWtl"),
      k = n("gZd7"),
      M = n("V3rO"),
      S = n("n5oN")
    let N = (0, o.i1)(
      I.u,
      (e, { get: t }) => {
        let n = "clientThreadId" in e ? e.clientThreadId : e.threadId
        if ("chatgpt" === e.kind) {
          let a = t(w.jS, n) ?? t(k.H, n) ?? ("threadId" in e ? e.threadId : null),
            s = t(y.ze, a ?? n)
          if (null == a) return { title: s, isWorking: !1, text: null }
          if ((0, w.QN)(t(w.F1, a))) return { title: s, isWorking: !0, text: null }
          let i = t(w.Jv, a),
            l = null == i ? t(v.chatGptConversationQueryById$, a) : null,
            o = null == i ? l?.data : { mapping: i, current_node: t(w.Od, a) }
          return { title: s, isWorking: l?.isLoading ?? !1, text: null == o ? null : (0, b.u)(o)?.text || null }
        }
        let a = "clientThreadId" in e ? e.clientThreadId : (0, g.JXB)(e.threadId),
          s = t(M.ic, a) ?? t(k.H, n)
        if (null == s) return { title: t(S.m, (0, g._RT)(a)), isWorking: !1, text: null }
        let i = (0, g.JXB)(s),
          l = e.hostId ?? t(x.qX, i),
          o = { hostId: l, threadId: i },
          r = t(x.pC, { hostId: l, conversationId: i }),
          c = t(x.HX, o) ?? r?.title ?? t(A.Jr, o).data?.title ?? null
        if (
          (0, g.ZJQ)(l) || (null == r && null == t(x.zp, o))
            ? t(A.Jr, o).data?.status === "inProgress"
            : "loading" === t(C.tP, { hostId: l, conversationId: i })
        )
          return { title: c, isWorking: !0, text: null }
        let { data: d, isFetching: u } = t(j.N, o)
        return {
          title: c,
          isWorking: u && d?.latestReply == null,
          text: d?.latestReply ? f()(d.latestReply, { length: 120, separator: " ", omission: "…" }) : null,
        }
      },
      { isEqual: (e, t) => e.title === t.title && e.isWorking === t.isWorking && e.text === t.text },
    )
    var T = n("IIsu"),
      _ = n("NDV0")
    function R(e) {
      let t,
        n,
        l,
        c,
        p,
        h,
        f,
        g,
        x = (0, s.c)(23),
        { grouped: v, result: y } = e,
        w = (0, r.A)(),
        b = "chatgpt" !== y.kind && "clientThreadId" in y,
        { title: C, isWorking: j, text: A } = (0, o._U)(N, y)
      x[0] !== w ? ((t = w.formatMessage(L.openCreatedThread)), (x[0] = w), (x[1] = t)) : (t = x[1])
      let I = t
      ;(x[2] !== y ? ((n = (e) => (0, T.h)(e, y)), (x[2] = y), (x[3] = n)) : (n = x[3]),
        x[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, a.jsx)(d.VhP, { className: "text-secondary" })), (x[4] = l))
          : (l = x[4]),
        x[5] !== b || x[6] !== C
          ? ((c = C ?? (0, a.jsx)(i.A, { ...(b ? L.worktreeChat : L.threadCreated) })),
            (x[5] = b),
            (x[6] = C),
            (x[7] = c))
          : (c = x[7]))
      let k = C ?? void 0
      ;(x[8] !== w.locale || x[9] !== j || x[10] !== A
        ? ((p = j
            ? (0, a.jsx)(i.A, {
                id: "localConversation.appControlToolCall.createdThreadWorking",
                defaultMessage: "Working",
                description: "Status beneath a created chat title while its response is in progress",
              })
            : A &&
              (0, a.jsx)(
                "span",
                {
                  className: _.A.MarkdownRoot,
                  "data-markdown-animated": !0,
                  "data-markdown-text-style": "inherit",
                  children: (0, m.gk)(A, new Intl.Segmenter(w.locale, { granularity: "word" })).map(P),
                },
                A,
              )),
          (x[8] = w.locale),
          (x[9] = j),
          (x[10] = A),
          (x[11] = p))
        : (p = x[11]),
        x[12] !== c || x[13] !== k || x[14] !== p
          ? ((h = (0, a.jsx)(u.Ni, { icon: l, title: c, titleTooltip: k, subtitle: p, variant: "artifact-list" })),
            (x[12] = c),
            (x[13] = k),
            (x[14] = p),
            (x[15] = h))
          : (h = x[15]),
        x[16] !== I || x[17] !== n || x[18] !== h
          ? ((f = (0, a.jsx)("div", {
              className: "group/resource-card relative",
              children: (0, a.jsx)(u.dQ, { "aria-label": I, onClick: n, children: h }),
            })),
            (x[16] = I),
            (x[17] = n),
            (x[18] = h),
            (x[19] = f))
          : (f = x[19]))
      let M = f
      return (
        x[20] !== M || x[21] !== v
          ? ((g = v ? M : (0, a.jsx)(u.zU, { variant: "artifact-list", children: M })),
            (x[20] = M),
            (x[21] = v),
            (x[22] = g))
          : (g = x[22]),
        g
      )
    }
    function P(e, t) {
      return (0, a.jsx)(
        "span",
        {
          ...(0, p._)({ className: _.A.FadeIn, fadeSegmentDelayMs: 16, fadeSegmentMaxDelayMs: 96, segmentIndex: t }),
          children: e,
        },
        t,
      )
    }
    let L = (0, c.YK)({
      threadCreated: {
        id: "localConversation.appControlToolCall.threadCreated",
        defaultMessage: "Created chat",
        description: "Title for a card shown after a Codex task is created.",
      },
      openCreatedThread: {
        id: "localConversation.appControlToolCall.openCreatedThread",
        defaultMessage: "Open chat",
        description: "Accessible label for opening a newly created Codex task.",
      },
      worktreeChat: {
        id: "localConversation.appControlToolCall.worktreeChat",
        defaultMessage: "Worktree chat",
        description: "Title for a card linking to a worktree-backed Codex task.",
      },
    })
    function D(e) {
      let t,
        n,
        o,
        r = (0, s.c)(5),
        { results: c } = e
      return (
        r[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(i.A, {
              id: "localConversation.appControlToolCall.showFewerCreatedTasks",
              defaultMessage: "Show fewer chats",
              description: "Button label that collapses tasks created from an assistant response",
            })),
            (r[0] = t))
          : (t = r[0]),
        r[1] !== c ? ((n = c.map(F)), (r[1] = c), (r[2] = n)) : (n = r[2]),
        r[3] !== n
          ? ((o = (0, a.jsx)(l.p, { variant: "artifact-list", showLessLabel: t, showMoreLabel: E, children: n })),
            (r[3] = n),
            (r[4] = o))
          : (o = r[4]),
        o
      )
    }
    function F(e) {
      return (0, a.jsx)(
        R,
        { grouped: !0, result: e },
        "threadId" in e
          ? `${e.kind ?? "codex"}-thread-${e.threadId}`
          : `${e.kind ?? "codex"}-client-thread-${e.clientThreadId}`,
      )
    }
    function E(e) {
      return (0, a.jsx)(i.A, {
        id: "localConversation.appControlToolCall.showMoreCreatedTasks",
        defaultMessage: "{count, plural, one {Show # more chat} other {Show # more chats}}",
        description: "Button label that reveals additional tasks created from an assistant response",
        values: { count: e },
      })
    }
  },
  pR2A(e, t, n) {
    n.d(t, { _: () => g })
    var a = n("ABep"),
      s = n("QosV"),
      i = n("slpy"),
      l = n("XRjy"),
      o = n("K7U4"),
      r = n("I2Vw"),
      c = n("on57"),
      d = n("ox67"),
      u = n.n(d)
    n("zd8w")
    var m = n("oyxz"),
      p = n("HOLv"),
      h = n("Kc0j"),
      f = n("RNul")
    function g(e) {
      let t = (0, s.c)(7),
        { donutAnimateOnMountDelayMs: n, item: i, isComplete: l } = e,
        o = void 0 === n ? 0 : n,
        r = void 0 !== l && l
      {
        let e
        return (
          t[0] !== o || t[1] !== r || t[2] !== i
            ? ((e = (0, a.jsx)(x, { donutAnimateOnMountDelayMs: o, item: i, isComplete: r })),
              (t[0] = o),
              (t[1] = r),
              (t[2] = i),
              (t[3] = e))
            : (e = t[3]),
          e
        )
      }
    }
    function x(e) {
      let t,
        n,
        l,
        o,
        r,
        c = (0, s.c)(15),
        { donutAnimateOnMountDelayMs: d, item: p, isComplete: f } = e,
        g = p.plan.findIndex(w),
        x = p.plan.findIndex(y),
        C = g >= 0 ? g : x >= 0 ? x : p.plan.length - 1
      if (C < 0) {
        let e
        return (
          c[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)("div", { className: "size-1 rounded-full bg-chart-blue" })), (c[0] = e))
            : (e = c[0]),
          e
        )
      }
      let j = u()(p.plan, v),
        A = f ? 100 : (j / p.plan.length) * 100
      ;(c[1] !== p ? ((t = (0, a.jsx)(b, { item: p })), (c[1] = p), (c[2] = t)) : (t = c[2]),
        c[3] !== d || c[4] !== A
          ? ((n = (0, a.jsx)(h.G, {
              animateOnMount: !0,
              animateOnMountDelayMs: d,
              percent: A,
              className: "text-chart-blue",
            })),
            (c[3] = d),
            (c[4] = A),
            (c[5] = n))
          : (n = c[5]))
      let I = C + 1
      return (
        c[6] !== p.plan.length || c[7] !== I
          ? ((l = (0, a.jsx)("span", {
              className: "whitespace-nowrap tabular-nums",
              children: (0, a.jsx)(m.A, {
                id: "codex.todoPlan.pillProgress",
                defaultMessage: "Step {stepNumber} / {stepCount}",
                description: "Compact step count shown in the in-progress plan pill above the composer",
                values: { stepNumber: I, stepCount: p.plan.length },
              }),
            })),
            (c[6] = p.plan.length),
            (c[7] = I),
            (c[8] = l))
          : (l = c[8]),
        c[9] !== n || c[10] !== l
          ? ((o = (0, a.jsx)(i.m.TriggerDecorator, {
              unstyled: !0,
              className: "-my-1.5 inline-flex max-w-full min-w-0 cursor-interaction py-1.5 hover:text-default",
              children: (0, a.jsxs)("span", {
                className: "flex max-w-full min-w-0 items-center gap-1.5 text-size-chat text-secondary",
                children: [n, l],
              }),
            })),
            (c[9] = n),
            (c[10] = l),
            (c[11] = o))
          : (o = c[11]),
        c[12] !== t || c[13] !== o
          ? ((r = (0, a.jsx)(i.m, {
              interactive: !0,
              openDelay: 0,
              side: "top",
              sideOffset: 8,
              maxWidth: 384,
              contentClassName: "text-start",
              content: t,
              children: o,
            })),
            (c[12] = t),
            (c[13] = o),
            (c[14] = r))
          : (r = c[14]),
        r
      )
    }
    function v(e) {
      return +("completed" === e.status)
    }
    function y(e) {
      return "completed" !== e.status
    }
    function w(e) {
      return "in_progress" === e.status
    }
    function b(e) {
      let t,
        n,
        i = (0, s.c)(4),
        { item: l } = e
      return (
        i[0] !== l.plan ? ((t = l.plan.map(C)), (i[0] = l.plan), (i[1] = t)) : (t = i[1]),
        i[2] !== t
          ? ((n = (0, a.jsx)("div", {
              className:
                "flex max-h-[min(var(--radix-tooltip-content-available-height),calc(100vh-16px))] min-h-0 max-w-80 flex-1 flex-col overflow-hidden rounded-xl",
              children: (0, a.jsx)("div", {
                className:
                  "vertical-scroll-fade-mask flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto px-2 py-2 [--edge-fade-distance:1rem]",
                tabIndex: 0,
                children: t,
              }),
            })),
            (i[2] = t),
            (i[3] = n))
          : (n = i[3]),
        n
      )
    }
    function C(e, t) {
      return (0, a.jsxs)(
        "div",
        {
          className: "flex max-w-80 min-w-0 items-start gap-2",
          children: [
            (0, a.jsx)(j, { isComplete: !1, status: e.status }),
            (0, a.jsx)("span", {
              className: (0, c.A)(
                "text-size-chat max-w-72 min-w-0 break-words leading-4",
                "completed" === e.status ? "text-tertiary" : "text-secondary",
              ),
              children: e.step,
            }),
          ],
        },
        `${e.step}:${t}`,
      )
    }
    function j(e) {
      let t = (0, s.c)(5),
        { status: n, isComplete: i } = e
      switch (n) {
        case "pending": {
          let e
          return (
            t[0] !== i
              ? ((e = i
                  ? (0, a.jsx)("div", {
                      className: "flex size-4 shrink-0 items-center justify-center overflow-hidden",
                      children: (0, a.jsx)(p.I, { className: "block shrink-0", "aria-hidden": !1, asset: r.w }),
                    })
                  : (0, a.jsx)("div", {
                      className: "flex size-4 shrink-0 items-center justify-center overflow-hidden",
                      children: (0, a.jsx)(p.I, { className: "block shrink-0", "aria-hidden": !1, asset: o.c }),
                    })),
                (t[0] = i),
                (t[1] = e))
              : (e = t[1]),
            e
          )
        }
        case "in_progress": {
          let e
          return (
            t[2] !== i
              ? ((e = i
                  ? (0, a.jsx)("div", {
                      className: "flex size-4 shrink-0 items-center justify-center overflow-hidden",
                      children: (0, a.jsx)(p.I, { className: "block shrink-0", "aria-hidden": !1, asset: r.w }),
                    })
                  : (0, a.jsx)("div", {
                      className: "flex size-4 shrink-0 items-center justify-center overflow-hidden",
                      children: (0, a.jsx)(f.y, { className: "icon-xs" }),
                    })),
                (t[2] = i),
                (t[3] = e))
              : (e = t[3]),
            e
          )
        }
        case "completed": {
          let e
          return (
            t[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)("div", {
                  className: "flex size-4 shrink-0 items-center justify-center overflow-hidden",
                  children: (0, a.jsx)(p.I, {
                    className: (0, c.A)("block shrink-0", "text-tertiary"),
                    "aria-hidden": !1,
                    asset: l.$,
                  }),
                })),
                (t[4] = e))
              : (e = t[4]),
            e
          )
        }
      }
    }
    ;(n("u3Yk"), n("V8uZ"), n("ltPT"))
  },
  rPK8(e, t, n) {
    var a = n("ABep"),
      s = n("QosV"),
      i = n("zd8w"),
      l = n("tnfs"),
      o = n("uKpQ"),
      r = n("BI7J"),
      c = n("h30a"),
      d = n("pGLn")
    n.d(
      t,
      {},
      {
        e: function (e) {
          let t,
            n,
            u,
            m = (0, s.c)(11),
            { icon: p, label: h, children: f } = e,
            [g, x] = (0, i.useState)(!1)
          return (
            m[0] !== f || m[1] !== g
              ? ((t = null == f ? void 0 : { expanded: g, onToggle: () => x(!g) }), (m[0] = f), (m[1] = g), (m[2] = t))
              : (t = m[2]),
            m[3] !== f || m[4] !== g
              ? ((n =
                  null != f &&
                  (0, a.jsx)(l.Q, {
                    expanded: g,
                    className: "flow-root",
                    children: (0, a.jsx)("div", {
                      className: d.A.transcriptDetail,
                      children: (0, a.jsx)(o.d, {
                        value: "history",
                        children: (0, a.jsx)(c.T, { value: !1, children: f }),
                      }),
                    }),
                  })),
                (m[3] = f),
                (m[4] = g),
                (m[5] = n))
              : (n = m[5]),
            m[6] !== p || m[7] !== h || m[8] !== t || m[9] !== n
              ? ((u = (0, a.jsx)(r.o, { icon: p, summary: h, disclosure: t, body: n })),
                (m[6] = p),
                (m[7] = h),
                (m[8] = t),
                (m[9] = n),
                (m[10] = u))
              : (u = m[10]),
            u
          )
        },
      },
    )
  },
  iB3f(e, t, n) {
    n.d(t, { a: () => eh })
    var a = n("ABep"),
      s = n("QosV"),
      i = n("iRMi"),
      l = n("slpy"),
      o = n("nflN"),
      r = n("IJRm"),
      c = n("rLkR"),
      d = n("Astd"),
      u = n("on57"),
      m = n("LIss"),
      p = n("nuXe"),
      h = n.n(p),
      f = n("zTeN"),
      g = n("zKw6"),
      x = n.n(g),
      v = n("DBCl"),
      y = n("zd8w"),
      w = n("Wf1j"),
      b = n("oyxz"),
      C = n("Qgfj"),
      j = n("tl5a"),
      A = n("gbrq"),
      I = n("wD9O")
    n("cI4i")
    var k = n("Sm6l"),
      M = n("HOLv"),
      S = n("VL1D"),
      N = n("RNul"),
      T = n("UxN3"),
      _ = n("SGsN"),
      R = n("aAWW"),
      P = n("x8co"),
      L = n("g3QY"),
      D = n("mHZT"),
      F = n("JiBc"),
      E = n("B09n"),
      O = n("V3Mg"),
      U = n("OReh"),
      B = n("koMX"),
      z = n("NKFk"),
      q = n("Yakm"),
      W = n("y3r9"),
      H = n("H2PD")
    function G(e) {
      let t,
        n = (0, s.c)(2),
        { children: i } = e
      return (n[0] !== i ? ((t = (0, a.jsx)(a.Fragment, { children: i })), (n[0] = i), (n[1] = t)) : (t = n[1]), t)
    }
    n("TL6G")
    var V = n("yGJW"),
      $ = n("EXsI"),
      K = n("Oj9r"),
      Z = n("kfGJ"),
      Q = n("T8jz"),
      J = n("nMdB"),
      Y = n("bnxy"),
      X = n("aCkJ"),
      ee = n("PYPx")
    function et(e) {
      return en(
        Math.max(
          e.metadata.hunks.reduce((e, t) => e + t.unifiedLineCount, 0),
          e.metadata.hunks.reduce((e, t) => e + t.splitLineCount, 0),
        ),
        e.additions,
        e.deletions,
      )
    }
    function en(e, t, n) {
      return Math.max(e, t + n) > 5e3
    }
    let ea = (0, n("iJY0").a)({
      name: "xmark-circle-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 1.834961, y: 1.834961, width: 16.330078, height: 16.330078 },
        visualBounds: { x: 1.834961, y: 1.834961, width: 16.330078, height: 16.330078 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "circular",
        bounds: { x: 1.834961, y: 1.834961, width: 16.330078, height: 16.330078 },
        center: { x: 10, y: 10 },
        insets: { top: 1.834961, right: 1.834961, bottom: 1.834961, left: 1.834961 },
        anchors: { frame: { x: 10, y: 10 }, ink: { x: 10, y: 10 }, foreground: { x: 10, y: 10 } },
      },
      capabilities: ["icon"],
      body: '<path d="M11.9453 7.11426C12.205 6.85456 12.627 6.85456 12.8867 7.11426C13.146 7.37398 13.1462 7.79514 12.8867 8.05469L10.9404 10L12.8857 11.9453C13.1454 12.205 13.1454 12.626 12.8857 12.8857C12.626 13.1454 12.205 13.1454 11.9453 12.8857L10 10.9404L8.05469 12.8857C7.79499 13.1454 7.37396 13.1454 7.11426 12.8857C6.8546 12.626 6.85457 12.205 7.11426 11.9453L9.05957 10L7.11426 8.05469C6.85456 7.79499 6.85456 7.37298 7.11426 7.11328C7.37398 6.85404 7.79514 6.85377 8.05469 7.11328L10 9.05859L11.9453 7.11426Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.83496C14.5094 1.83496 18.165 5.49059 18.165 10C18.165 14.5094 14.5094 18.165 10 18.165C5.49059 18.165 1.83496 14.5094 1.83496 10C1.83496 5.49059 5.49059 1.83496 10 1.83496ZM10 3.16504C6.22513 3.16504 3.16504 6.22513 3.16504 10C3.16504 13.7749 6.22513 16.835 10 16.835C13.7749 16.835 16.835 13.7749 16.835 10C16.835 6.22513 13.7749 3.16504 10 3.16504Z" fill="currentColor"/>',
    })
    var es = n("JNtf"),
      ei = n("mUDD")
    function el(e) {
      let t,
        n,
        i,
        l,
        o,
        r,
        c,
        d,
        u,
        m,
        p,
        h,
        f = (0, s.c)(42),
        { open: g, onOpenChange: x, failure: v, cwd: y, hostId: w } = e
      if (null == v) return null
      let { action: C, result: j } = v,
        A = j.appliedPaths.length > 0 || j.skippedPaths.length > 0 || j.conflictedPaths.length > 0,
        I = j.execOutput?.output
      f[0] !== I
        ? ((t = (function (e) {
            if (!e) return null
            let t = e
              .split(/\r?\n/)
              .map((e) => e.trim())
              .find((e) => e.length > 0)
            return t ? (t.length <= 180 ? t : `${t.slice(0, 179)}…`) : null
          })(I)),
          (f[0] = I),
          (f[1] = t))
        : (t = f[1])
      let S = t
      return (
        f[2] !== C || f[3] !== j
          ? ((n = (0, a.jsx)(es.L3, { className: "sr-only", children: (0, a.jsx)(eo, { action: C, result: j }) })),
            (f[2] = C),
            (f[3] = j),
            (f[4] = n))
          : (n = f[4]),
        f[5] !== C || f[6] !== S || f[7] !== A || f[8] !== j
          ? ((i = (0, a.jsx)(es.rr, {
              className: "sr-only",
              children: (0, a.jsx)(er, { action: C, result: j, hasAnyPaths: A, fallbackErrorLine: S }),
            })),
            (f[5] = C),
            (f[6] = S),
            (f[7] = A),
            (f[8] = j),
            (f[9] = i))
          : (i = f[9]),
        f[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, a.jsx)(M.I, { className: "text-chart-red", "aria-hidden": !1, asset: ea })), (f[10] = l))
          : (l = f[10]),
        f[11] !== C || f[12] !== j
          ? ((o = (0, a.jsx)(ei.OO, {
              children: (0, a.jsx)(ei.c7, {
                icon: l,
                iconBackgroundClassName: "bg-chart-red/10",
                title: (0, a.jsx)(eo, { action: C, result: j }),
              }),
            })),
            (f[11] = C),
            (f[12] = j),
            (f[13] = o))
          : (o = f[13]),
        f[14] !== C || f[15] !== S || f[16] !== A || f[17] !== j
          ? ((r = (0, a.jsx)(ei.OO, {
              children: (0, a.jsx)("div", {
                className: "text-sm text-codex-description",
                children: (0, a.jsx)(er, { action: C, result: j, hasAnyPaths: A, fallbackErrorLine: S }),
              }),
            })),
            (f[14] = C),
            (f[15] = S),
            (f[16] = A),
            (f[17] = j),
            (f[18] = r))
          : (r = f[18]),
        f[19] !== y ||
        f[20] !== A ||
        f[21] !== w ||
        f[22] !== j.appliedPaths ||
        f[23] !== j.conflictedPaths ||
        f[24] !== j.skippedPaths
          ? ((c = A
              ? (0, a.jsx)(ei.OO, {
                  className: "max-h-[40vh] overflow-y-auto",
                  children: (0, a.jsxs)("div", {
                    className: "flex flex-col gap-3",
                    children: [
                      (0, a.jsx)(ec, {
                        cwd: y,
                        hostId: w,
                        toneClassName: "text-default",
                        heading: (0, a.jsx)(b.A, {
                          id: "codex.unifiedDiff.patchAppliedPathsHeading",
                          defaultMessage: "Applied cleanly ({count})",
                          description: "Heading for files where a patch action was applied cleanly",
                          values: { count: j.appliedPaths.length },
                        }),
                        paths: j.appliedPaths,
                      }),
                      (0, a.jsx)(ec, {
                        cwd: y,
                        hostId: w,
                        toneClassName: "text-codex-description",
                        heading: (0, a.jsx)(b.A, {
                          id: "codex.unifiedDiff.patchSkippedPathsHeading",
                          defaultMessage: "Skipped ({count})",
                          description: "Heading for files skipped during a patch action",
                          values: { count: j.skippedPaths.length },
                        }),
                        paths: j.skippedPaths,
                      }),
                      (0, a.jsx)(ec, {
                        cwd: y,
                        hostId: w,
                        toneClassName: "text-chart-red",
                        heading: (0, a.jsx)(b.A, {
                          id: "codex.unifiedDiff.patchConflictedPathsHeading",
                          defaultMessage: "Conflicts ({count})",
                          description: "Heading for files with conflicts during a patch action",
                          values: { count: j.conflictedPaths.length },
                        }),
                        paths: j.conflictedPaths,
                      }),
                    ],
                  }),
                })
              : null),
            (f[19] = y),
            (f[20] = A),
            (f[21] = w),
            (f[22] = j.appliedPaths),
            (f[23] = j.conflictedPaths),
            (f[24] = j.skippedPaths),
            (f[25] = c))
          : (c = f[25]),
        f[26] !== x
          ? ((d = () => {
              x(!1)
            }),
            (f[26] = x),
            (f[27] = d))
          : (d = f[27]),
        f[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, a.jsx)(b.A, {
              id: "codex.unifiedDiff.patchFailureDialogClose",
              defaultMessage: "Close",
              description: "Close button label for the patch action failure dialog",
            })),
            (f[28] = u))
          : (u = f[28]),
        f[29] !== d
          ? ((m = (0, a.jsx)(ei.OO, {
              children: (0, a.jsx)(ei.Es, { children: (0, a.jsx)(k.$, { color: "primary", onClick: d, children: u }) }),
            })),
            (f[29] = d),
            (f[30] = m))
          : (m = f[30]),
        f[31] !== m || f[32] !== o || f[33] !== r || f[34] !== c
          ? ((p = (0, a.jsxs)(ei.R4, { children: [o, r, c, m] })),
            (f[31] = m),
            (f[32] = o),
            (f[33] = r),
            (f[34] = c),
            (f[35] = p))
          : (p = f[35]),
        f[36] !== x || f[37] !== g || f[38] !== p || f[39] !== n || f[40] !== i
          ? ((h = (0, a.jsxs)(es.lG, {
              open: g,
              onOpenChange: x,
              triggerAsChild: !1,
              size: "compact",
              children: [n, i, p],
            })),
            (f[36] = x),
            (f[37] = g),
            (f[38] = p),
            (f[39] = n),
            (f[40] = i),
            (f[41] = h))
          : (h = f[41]),
        h
      )
    }
    function eo(e) {
      let t,
        n = (0, s.c)(8),
        { action: i, result: l } = e
      if ("not-git-repo" === l.errorCode) {
        let e
        return (
          n[0] !== i
            ? ((e =
                "undo" === i
                  ? (0, a.jsx)(b.A, {
                      id: "codex.unifiedDiff.revertPatchNotGitRepo",
                      defaultMessage: "Undo requires a Git repository",
                      description: "Dialog title shown when trying to undo a diff outside a Git repository",
                    })
                  : (0, a.jsx)(b.A, {
                      id: "codex.unifiedDiff.reapplyPatchNotGitRepo",
                      defaultMessage: "Reapply requires a Git repository",
                      description: "Dialog title shown when trying to reapply a diff outside a Git repository",
                    })),
              (n[0] = i),
              (n[1] = e))
            : (e = n[1]),
          e
        )
      }
      if (l.appliedPaths.length > 0) {
        let e
        return (
          n[2] !== i
            ? ((e =
                "undo" === i
                  ? (0, a.jsx)(b.A, {
                      id: "codex.unifiedDiff.revertPatchPartial",
                      defaultMessage: "Some changes reverted",
                      description: "Dialog title shown when reverting a diff partially succeeds",
                    })
                  : (0, a.jsx)(b.A, {
                      id: "codex.unifiedDiff.reapplyPatchPartial",
                      defaultMessage: "Some changes reapplied",
                      description: "Dialog title shown when reapplying a diff partially succeeds",
                    })),
              (n[2] = i),
              (n[3] = e))
            : (e = n[3]),
          e
        )
      }
      if (l.skippedPaths.length > 0 && 0 === l.conflictedPaths.length) {
        let e
        return (
          n[4] !== i
            ? ((e =
                "undo" === i
                  ? (0, a.jsx)(b.A, {
                      id: "codex.unifiedDiff.revertPatchNoChanges",
                      defaultMessage: "No changes reverted",
                      description: "Dialog title shown when reverting a diff made no changes",
                    })
                  : (0, a.jsx)(b.A, {
                      id: "codex.unifiedDiff.reapplyPatchNoChanges",
                      defaultMessage: "No changes reapplied",
                      description: "Dialog title shown when reapplying a diff made no changes",
                    })),
              (n[4] = i),
              (n[5] = e))
            : (e = n[5]),
          e
        )
      }
      return (
        n[6] !== i
          ? ((t =
              "undo" === i
                ? (0, a.jsx)(b.A, {
                    id: "codex.unifiedDiff.revertPatchError",
                    defaultMessage: "Failed to revert changes",
                    description: "Dialog title shown when reverting a diff fails",
                  })
                : (0, a.jsx)(b.A, {
                    id: "codex.unifiedDiff.reapplyPatchError",
                    defaultMessage: "Failed to reapply changes",
                    description: "Dialog title shown when reapplying a diff fails",
                  })),
            (n[6] = i),
            (n[7] = t))
          : (t = n[7]),
        t
      )
    }
    function er(e) {
      let t,
        n = (0, s.c)(6),
        { action: i, result: l, hasAnyPaths: o, fallbackErrorLine: r } = e
      if ("not-git-repo" === l.errorCode) {
        let e
        return (
          n[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(b.A, {
                id: "codex.unifiedDiff.patchNotGitRepoDescription",
                defaultMessage: "This action only works when running in a Git repository.",
                description: "Dialog description shown when patch apply/revert is attempted outside a Git repository",
              })),
              (n[0] = e))
            : (e = n[0]),
          e
        )
      }
      if (o) {
        let e
        return (
          n[1] !== i
            ? ((e =
                "undo" === i
                  ? (0, a.jsx)(b.A, {
                      id: "codex.unifiedDiff.patchFailureDetailsIntroRevert",
                      defaultMessage: "There were issues reverting some files",
                      description: "Intro text for the patch action failure dialog when file details are available",
                    })
                  : (0, a.jsx)(b.A, {
                      id: "codex.unifiedDiff.patchFailureDetailsIntroReapply",
                      defaultMessage: "There were issues reapplying some files",
                      description: "Intro text for the patch action failure dialog when file details are available",
                    })),
              (n[1] = i),
              (n[2] = e))
            : (e = n[2]),
          e
        )
      }
      if (r) {
        let e
        return (
          n[3] !== r
            ? ((e = (0, a.jsx)(b.A, {
                id: "codex.unifiedDiff.patchErrorOutputSummary",
                defaultMessage: "Git apply error: {message}",
                description:
                  "Dialog details showing a short git apply error line when file-level patch details are unavailable",
                values: { message: r },
              })),
              (n[3] = r),
              (n[4] = e))
            : (e = n[4]),
          e
        )
      }
      return (
        n[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(b.A, {
              id: "codex.unifiedDiff.patchFailureNoDetails",
              defaultMessage: "No file details were returned for this patch action.",
              description: "Fallback dialog text when patch action fails without file details",
            })),
            (n[5] = t))
          : (t = n[5]),
        t
      )
    }
    function ec(e) {
      let t,
        n,
        i,
        l,
        r,
        c = (0, s.c)(17),
        { toneClassName: d, heading: m, paths: p, cwd: h, hostId: f } = e
      if (0 === p.length) return null
      if (
        (c[0] !== d ? ((t = (0, u.A)("text-sm font-medium", d)), (c[0] = d), (c[1] = t)) : (t = c[1]),
        c[2] !== m || c[3] !== t
          ? ((n = (0, a.jsx)("div", { className: t, children: m })), (c[2] = m), (c[3] = t), (c[4] = n))
          : (n = c[4]),
        c[5] !== h || c[6] !== f || c[7] !== p)
      ) {
        let e
        ;(c[9] !== h || c[10] !== f
          ? ((e = (e) =>
              (0, a.jsx)(
                "li",
                {
                  children: (0, a.jsx)("button", {
                    type: "button",
                    className:
                      "group w-full cursor-interaction rounded px-1 py-0.5 text-start focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                    title: e,
                    onClick: () => {
                      ;(0, E.openWorkspaceFile)({ path: e, cwd: h, hostId: f })
                    },
                    children: (0, a.jsxs)("span", {
                      className: "flex items-center gap-1",
                      children: [
                        (0, a.jsx)("span", { className: "min-w-0 truncate transition-colors", children: e }),
                        (0, a.jsx)(T.bF, {
                          className: "hidden shrink-0 group-hover:block group-focus-visible:block",
                          "aria-hidden": !1,
                          legacyIcon: z.A,
                          asset16: o.J,
                          legacyClassName: "icon-2xs",
                        }),
                      ],
                    }),
                  }),
                },
                e,
              )),
            (c[9] = h),
            (c[10] = f),
            (c[11] = e))
          : (e = c[11]),
          (i = p.map(e)),
          (c[5] = h),
          (c[6] = f),
          (c[7] = p),
          (c[8] = i))
      } else i = c[8]
      return (
        c[12] !== i
          ? ((l = (0, a.jsx)("ul", { className: "flex flex-col gap-0.5 text-sm", children: i })),
            (c[12] = i),
            (c[13] = l))
          : (l = c[13]),
        c[14] !== n || c[15] !== l
          ? ((r = (0, a.jsxs)("div", { className: "flex flex-col gap-1", children: [n, l] })),
            (c[14] = n),
            (c[15] = l),
            (c[16] = r))
          : (r = c[16]),
        r
      )
    }
    var ed = n("m7Xr")
    function eu(e) {
      let t = [],
        n = null,
        a = !1
      for (let s of e.split(/\r?\n/)) {
        let e = (0, ed.m)(s)
        if (null != e) {
          ;(null != n && t.push(n),
            (n = { linesAdded: 0, linesDeleted: 0, path: e, renderedLineEstimate: 0 }),
            (a = !1))
          continue
        }
        if (null != n) {
          if (s.startsWith("@@")) {
            ;((n.renderedLineEstimate += 1), (a = !0))
            continue
          }
          if (!(s.startsWith("+++") || s.startsWith("---"))) {
            if (s.startsWith("+")) {
              ;((n.linesAdded += 1), (n.renderedLineEstimate += +!!a))
              continue
            }
            if (s.startsWith("-")) {
              ;((n.linesDeleted += 1), (n.renderedLineEstimate += +!!a))
              continue
            }
            a && (s.startsWith(" ") || s.startsWith("\\")) && (n.renderedLineEstimate += 1)
          }
        }
      }
      null != n && t.push(n)
      let s = em(
        (function (e) {
          let t = new Map()
          for (let n of e) {
            let e = t.get(n.path)
            if (null == e) {
              t.set(n.path, { ...n })
              continue
            }
            ;((e.linesAdded += n.linesAdded),
              (e.linesDeleted += n.linesDeleted),
              (e.renderedLineEstimate += n.renderedLineEstimate))
          }
          return [...t.values()]
        })(t),
      )
      if (s.hasChanges || 0 === e.length) return s
      let i = (0, F.F)(e)
      return 0 === i.length
        ? s
        : em(
            i.map((e) => ({
              linesAdded: e.additions,
              linesDeleted: e.deletions,
              path: e.metadata.name,
              renderedLineEstimate: Math.max(
                e.metadata.hunks.reduce((e, t) => e + t.unifiedLineCount, 0),
                e.metadata.hunks.reduce((e, t) => e + t.splitLineCount, 0),
              ),
            })),
          )
    }
    function em(e) {
      return {
        fileCount: e.length,
        files: e,
        hasChanges: e.length > 0,
        linesAdded: e.reduce((e, t) => e + t.linesAdded, 0),
        linesDeleted: e.reduce((e, t) => e + t.linesDeleted, 0),
      }
    }
    let ep = { duration: 0.15, ease: "easeOut" }
    function eh(e) {
      let t,
        n = (0, s.c)(13),
        {
          isInProgress: i,
          inProgressDiffSummary: l,
          item: o,
          showLeadingSeparator: r,
          showRevertButton: c,
          deferOffscreenRendering: d,
          conversationId: u,
          cwd: m,
          hostId: p,
        } = e,
        h = void 0 !== r && r,
        g = void 0 === c || c,
        x = void 0 !== d && d
      if ((0, f.Ul)($.a) || !u) return null
      let v = o.cwd ?? m ?? null
      if (i) {
        let e
        return (
          n[0] !== u || n[1] !== l || n[2] !== o || n[3] !== v || n[4] !== h
            ? ((e = (0, a.jsx)(ef, { diffSummary: l, item: o, showLeadingSeparator: h, conversationId: u, cwd: v })),
              (n[0] = u),
              (n[1] = l),
              (n[2] = o),
              (n[3] = v),
              (n[4] = h),
              (n[5] = e))
            : (e = n[5]),
          e
        )
      }
      return (
        n[6] !== u || n[7] !== x || n[8] !== p || n[9] !== o || n[10] !== v || n[11] !== g
          ? ((t = (0, a.jsx)(ev, {
              item: o,
              showRevertButton: g,
              deferOffscreenRendering: x,
              conversationId: u,
              cwd: v,
              hostId: p,
            })),
            (n[6] = u),
            (n[7] = x),
            (n[8] = p),
            (n[9] = o),
            (n[10] = v),
            (n[11] = g),
            (n[12] = t))
          : (t = n[12]),
        t
      )
    }
    function ef(e) {
      let t,
        n,
        i,
        o,
        r = (0, s.c)(18),
        { diffSummary: c, item: d, showLeadingSeparator: u, conversationId: p, cwd: h } = e,
        g = (0, f.gh)(K.GD),
        x = (0, w.A)(),
        [C, j] = (0, y.useState)(!1)
      r[0] !== p || r[1] !== h || r[2] !== d.unifiedDiff || r[3] !== g
        ? ((t = (e) => {
            ;(j(!1),
              (0, R.e)(),
              (0, Q.openThreadLastTurnReviewSidePanelTab)(g, {
                conversationId: (0, v.JXB)(p),
                ...(null == e ? {} : { path: null == h ? e : (0, Y.b0)(h, e) }),
              }))
          }),
          (r[0] = p),
          (r[1] = h),
          (r[2] = d.unifiedDiff),
          (r[3] = g),
          (r[4] = t))
        : (t = r[4])
      let A = t
      r[5] !== d.unifiedDiff || r[6] !== c
        ? ((n = c ?? (0, D.s)((0, F.F)(d.unifiedDiff))), (r[5] = d.unifiedDiff), (r[6] = c), (r[7] = n))
        : (n = r[7])
      let I = n,
        { fileCount: k, linesAdded: M, linesDeleted: S } = I
      return I.hasChanges
        ? (r[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = { "codex.turn_diff.state": "in_progress" }), (r[8] = i))
            : (i = r[8]),
          r[9] !== k ||
          r[10] !== x ||
          r[11] !== d.unifiedDiff ||
          r[12] !== M ||
          r[13] !== S ||
          r[14] !== A ||
          r[15] !== C ||
          r[16] !== u
            ? ((o = (0, a.jsx)(G, {
                name: "TurnDiffContent",
                attributes: i,
                children: (0, a.jsxs)(m.P.div, {
                  className: "flex min-w-0 items-center gap-2",
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: ep,
                  children: [
                    u
                      ? (0, a.jsx)("span", {
                          "aria-hidden": !0,
                          className: "text-secondary",
                          children: (0, a.jsx)(b.A, {
                            id: "codex.ui.bulletSeparator",
                            defaultMessage: "·",
                            description: "Middle dot separator used between inline items",
                          }),
                        })
                      : null,
                    (0, a.jsxs)(l.m.Root, {
                      interactive: !0,
                      open: C,
                      onOpenChange: j,
                      disableHoverableContent: !1,
                      children: [
                        (0, a.jsx)(l.m.Trigger, {
                          children: (0, a.jsxs)("button", {
                            type: "button",
                            className:
                              "flex min-w-0 cursor-interaction items-center gap-1 rounded-sm text-size-chat text-secondary hover:text-default focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                            onClick: () => A(),
                            children: [
                              (0, a.jsx)("span", {
                                className: "truncate-text",
                                children: x.formatMessage(eM.filesChanged, { fileCount: k }),
                              }),
                              (0, a.jsx)(P.S, { animated: !0, linesAdded: M, linesRemoved: S }),
                            ],
                          }),
                        }),
                        (0, a.jsx)(l.m.Content, {
                          align: "center",
                          side: "top",
                          sideOffset: 4,
                          onMouseDown: eg,
                          children: (0, a.jsx)(ex, { onOpen: A, unifiedDiff: d.unifiedDiff }),
                        }),
                      ],
                    }),
                  ],
                }),
              })),
              (r[9] = k),
              (r[10] = x),
              (r[11] = d.unifiedDiff),
              (r[12] = M),
              (r[13] = S),
              (r[14] = A),
              (r[15] = C),
              (r[16] = u),
              (r[17] = o))
            : (o = r[17]),
          o)
        : null
    }
    function eg(e) {
      return e.preventDefault()
    }
    function ex(e) {
      let t,
        n,
        i,
        l = (0, s.c)(9),
        { onOpen: o, unifiedDiff: r } = e
      if (l[0] !== o || l[1] !== r) {
        let e,
          { files: s } = eu(r)
        ;((t = "flex max-h-72 min-w-64 flex-col gap-2 overflow-y-auto p-1"),
          l[4] !== o
            ? ((e = (e) =>
                (0, a.jsx)(
                  "li",
                  {
                    className: "min-w-0",
                    children: (0, a.jsxs)("button", {
                      type: "button",
                      className:
                        "flex w-full min-w-0 cursor-interaction items-center justify-between gap-4 rounded-sm px-3 py-1.5 text-start text-size-chat hover:bg-background-secondary-ghost-hover/60 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                      onClick: () => o(e.path),
                      children: [
                        (0, a.jsx)("span", { className: "min-w-0 truncate text-default", children: (0, Y.Q0)(e.path) }),
                        (0, a.jsx)(P.S, {
                          className: "shrink-0 text-size-chat-sm",
                          linesAdded: e.linesAdded,
                          linesRemoved: e.linesDeleted,
                        }),
                      ],
                    }),
                  },
                  e.path,
                )),
              (l[4] = o),
              (l[5] = e))
            : (e = l[5]),
          (n = s.map(e)),
          (l[0] = o),
          (l[1] = r),
          (l[2] = t),
          (l[3] = n))
      } else ((t = l[2]), (n = l[3]))
      return (
        l[6] !== t || l[7] !== n
          ? ((i = (0, a.jsx)("ul", { className: t, children: n })), (l[6] = t), (l[7] = n), (l[8] = i))
          : (i = l[8]),
        i
      )
    }
    function ev(e) {
      let t,
        n,
        l,
        m,
        p,
        g,
        x,
        C,
        D,
        O,
        q,
        $,
        en,
        ea,
        es,
        ei,
        eo,
        er,
        ec,
        ed,
        em,
        ep,
        eh,
        ef,
        eg,
        ex,
        ev,
        ek,
        eM,
        eS,
        eN,
        eT,
        e_,
        eR,
        eP,
        eL = (0, s.c)(124),
        { item: eD, showRevertButton: eF, deferOffscreenRendering: eE, conversationId: eO, cwd: eU, hostId: eB } = e,
        ez = (0, f.gh)(K.GD),
        eq = (0, w.A)(),
        eW = (0, f.Ul)(A.yN),
        eH = (0, I.dz)()
      eL[0] !== eO ? ((t = (0, v.JXB)(eO)), (eL[0] = eO), (eL[1] = t)) : (t = eL[1])
      let eG = (0, f._U)(j.qX, t),
        eV = eB ?? eG,
        e$ = (0, Z.Qz)(eV)
      eL[2] !== eU || eL[3] !== eD.patchBatches
        ? ((n = null == eD.patchBatches ? [] : h()(eD.patchBatches.map((e) => e.cwd ?? eU).filter(ew))),
          (eL[2] = eU),
          (eL[3] = eD.patchBatches),
          (eL[4] = n))
        : (n = eL[4])
      let eK = n
      eL[5] !== e$.id || eL[6] !== eK
        ? ((l = { params: { dirs: eK, hostId: e$.id }, source: "thread_diff" }),
          (eL[5] = e$.id),
          (eL[6] = eK),
          (eL[7] = l))
        : (l = eL[7])
      let { data: eZ, isFetching: eQ } = (0, f._U)(B.gitOriginsQuery$, l),
        [eJ, eY] = (0, y.useState)(null),
        [eX, e1] = (0, y.useState)(null),
        [e0, e2] = (0, y.useState)(!1),
        e3 = (0, y.useRef)(null)
      eL[8] !== eH
        ? ((m = () => {
            null != e3.current && (0, J.I)(e3.current, eH)
          }),
          (eL[8] = eH),
          (eL[9] = m))
        : (m = eL[9])
      let e4 = m,
        e5 = (0, U.JX)("apply-patch", e$)
      if (eL[10] !== eU || eL[11] !== eZ || eL[12] !== eD.patchBatches || eL[13] !== eD.unifiedDiff) {
        ;((g = []), (p = !1))
        let e = 0
        for (let t of eD.patchBatches ?? []) {
          let n = t.cwd ?? eU,
            a = eZ?.origins.find((e) => e.dir === n)?.root ?? null,
            s = (0, X.CD)(t.changes, n, a)
          if (null == s || (e += s.length) > X._w) {
            p = !0
            break
          }
          null != n && 0 !== s.length && g.push({ cwd: n, diff: s })
        }
        ;(0 === g.length &&
          null == eD.patchBatches &&
          eD.unifiedDiff.length > 0 &&
          null != eU &&
          g.push({ cwd: eU, diff: eD.unifiedDiff }),
          (eL[10] = eU),
          (eL[11] = eZ),
          (eL[12] = eD.patchBatches),
          (eL[13] = eD.unifiedDiff),
          (eL[14] = p),
          (eL[15] = g))
      } else ((p = eL[14]), (g = eL[15]))
      eL[16] !== eD.unifiedDiff ? ((x = eu(eD.unifiedDiff)), (eL[16] = eD.unifiedDiff), (eL[17] = x)) : (x = eL[17])
      let e6 = x,
        { fileCount: e7, linesAdded: e8, linesDeleted: e9 } = e6,
        te = e6.files.some(ey)
      e: {
        let e
        if (!te) {
          let e
          ;(eL[18] === Symbol.for("react.memo_cache_sentinel") ? ((e = []), (eL[18] = e)) : (e = eL[18]), (C = e))
          break e
        }
        ;(eL[19] !== eD.unifiedDiff
          ? ((e = (0, F.F)(eD.unifiedDiff)), (eL[19] = eD.unifiedDiff), (eL[20] = e))
          : (e = eL[20]),
          (C = e))
      }
      let tt = C,
        tn = 1 === e7 ? e6.files[0] : void 0,
        ta = null == tn ? void 0 : tt[0]
      eL[21] !== ta ? ((D = null == ta || et(ta) ? void 0 : ta), (eL[21] = ta), (eL[22] = D)) : (D = eL[22])
      let ts = D
      eL[23] !== eU || eL[24] !== tn
        ? ((O = null == tn ? "" : null == eU ? tn.path : (0, L.ph)(tn.path, eU)),
          (eL[23] = eU),
          (eL[24] = tn),
          (eL[25] = O))
        : (O = eL[25])
      let ti = O
      eL[26] !== e7 || eL[27] !== eq || eL[28] !== tn
        ? ((q =
            null == tn
              ? eq.formatMessage(
                  {
                    id: "codex.unifiedDiff.editedFiles",
                    defaultMessage: "{fileCount, plural, one {Edited a file} other {Edited # files}}",
                    description: "Completed turn diff title shown when multiple files were edited",
                  },
                  { fileCount: e7 },
                )
              : eq.formatMessage(
                  {
                    id: "codex.unifiedDiff.editedFile",
                    defaultMessage: "Edited {filename}",
                    description: "Completed turn diff title shown when exactly one file was edited",
                  },
                  { filename: (0, Y.Q0)(tn.path) },
                )),
          (eL[26] = e7),
          (eL[27] = eq),
          (eL[28] = tn),
          (eL[29] = q))
        : (q = eL[29])
      let tl = q
      eL[30] !== e6.files || eL[31] !== e0
        ? (($ = e0 ? e6.files : e6.files.slice(0, 3)), (eL[30] = e6.files), (eL[31] = e0), (eL[32] = $))
        : ($ = eL[32])
      let to = $,
        tr = e6.files.length - to.length,
        tc = e7 > 1
      if (!e6.hasChanges) return null
      let td = !p && g.length > 0 && (null == eD.patchBatches || !eQ)
      ;(eL[33] !== eD.unifiedDiff || eL[34] !== eJ
        ? ((en = "undo"),
          eJ?.unifiedDiff === eD.unifiedDiff && (en = "undo" === eJ.action ? "reapply" : "undo"),
          (eL[33] = eD.unifiedDiff),
          (eL[34] = eJ),
          (eL[35] = en))
        : (en = eL[35]),
        eL[36] !== td || eL[37] !== eq || eL[38] !== eD.unifiedDiff || eL[39] !== g || eL[40] !== e5 || eL[41] !== ez
          ? ((ea = async (e, t) => {
              if ((t.stopPropagation(), e5.isPending || !td)) return
              "undo" === e && (0, V.yy)(ez, i.CodexUndoClicked, { source: "turn_diff" })
              let n = "undo" === e ? [...g].reverse() : g
              try {
                for (let { cwd: t, diff: a } of n) {
                  let n = await e5.mutateAsync({
                    diff: a,
                    cwd: t,
                    operationSource: "thread_diff",
                    revert: "undo" === e,
                  })
                  if ("success" !== n.status) return void e1({ action: e, result: n })
                }
                ;(e1(null),
                  eY({ action: e, unifiedDiff: eD.unifiedDiff }),
                  ez
                    .get(_.Id)
                    .success(
                      eq.formatMessage(
                        "undo" === e
                          ? {
                              id: "codex.unifiedDiff.revertPatchSuccess",
                              defaultMessage: "Changes reverted",
                              description: "Toast shown when reverting a diff succeeds",
                            }
                          : {
                              id: "codex.unifiedDiff.reapplyPatchSuccess",
                              defaultMessage: "Changes reapplied",
                              description: "Toast shown when reapplying a diff succeeds",
                            },
                      ),
                      { id: "turnDiffPatchAction" },
                    ))
              } catch {
                ez.get(_.Id).danger(
                  eq.formatMessage(
                    "undo" === e
                      ? {
                          id: "codex.unifiedDiff.revertPatchError",
                          defaultMessage: "Failed to revert changes",
                          description: "Toast shown when reverting a diff fails",
                        }
                      : {
                          id: "codex.unifiedDiff.reapplyPatchError",
                          defaultMessage: "Failed to reapply changes",
                          description: "Toast shown when reapplying a diff fails",
                        },
                  ),
                  { errorAnalytics: { toastId: "turnDiffContent.runPatchAction" }, id: "turnDiffPatchAction" },
                )
              }
            }),
            (eL[36] = td),
            (eL[37] = eq),
            (eL[38] = eD.unifiedDiff),
            (eL[39] = g),
            (eL[40] = e5),
            (eL[41] = ez),
            (eL[42] = ea))
          : (ea = eL[42]))
      let tu = ea
      eL[43] !== eU || eL[44] !== eZ || eL[45] !== eD.patchBatches
        ? ((es = (e) => {
            for (let t of eD.patchBatches ?? []) {
              let n = t.cwd ?? eU,
                a = eZ?.origins.find((e) => e.dir === n)?.root
              for (let [s, i] of Object.entries(t.changes)) {
                let t = "update" === i.type ? (i.move_path ?? s) : s
                if ((0, X.ql)(t, n, a) === e) {
                  let t = a ?? n
                  return null == t ? e : (0, Y.b0)(t, e)
                }
              }
            }
            return null == eU ? e : (0, Y.b0)(eU, e)
          }),
          (eL[43] = eU),
          (eL[44] = eZ),
          (eL[45] = eD.patchBatches),
          (eL[46] = es))
        : (es = eL[46])
      let tm = es
      eL[47] !== eO || eL[48] !== eU || eL[49] !== tm || eL[50] !== eD.unifiedDiff || eL[51] !== ez
        ? ((ei = (e) => {
            ;((0, R.e)(),
              (0, Q.openThreadLastTurnReviewSidePanelTab)(ez, {
                conversationId: (0, v.JXB)(eO),
                path: null == e ? void 0 : tm(e),
              }))
          }),
          (eL[47] = eO),
          (eL[48] = eU),
          (eL[49] = tm),
          (eL[50] = eD.unifiedDiff),
          (eL[51] = ez),
          (eL[52] = ei))
        : (ei = eL[52])
      let tp = ei
      eL[53] !== eU || eL[54] !== tm || eL[55] !== e$ || eL[56] !== eV || eL[57] !== ez
        ? ((eo = (e) => {
            ;((0, R.e)(),
              (0, E.openWorkspaceFile)({
                scope: ez,
                cwd: eU,
                hostConfig: e$,
                hostId: eV,
                modifiedClick: !0,
                openInSidePanel: !0,
                path: tm(e),
              }))
          }),
          (eL[53] = eU),
          (eL[54] = tm),
          (eL[55] = e$),
          (eL[56] = eV),
          (eL[57] = ez),
          (eL[58] = eo))
        : (eo = eL[58])
      let th = eo
      eL[59] !== th || eL[60] !== tp
        ? ((er = (e, t) => {
            t.metaKey || t.ctrlKey ? th(e) : tp(e)
          }),
          (eL[59] = th),
          (eL[60] = tp),
          (eL[61] = er))
        : (er = eL[61])
      let tf = er
      ;(eL[62] !== tp || eL[63] !== tn?.path
        ? ((ec = (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)(eC, {
              onClick: () => {
                tp(tn?.path)
              },
            }),
          })),
          (eL[62] = tp),
          (eL[63] = tn?.path),
          (eL[64] = ec))
        : (ec = eL[64]),
        eL[65] === Symbol.for("react.memo_cache_sentinel")
          ? ((ed = (0, a.jsx)(S.y7, { children: (0, a.jsx)(M.I, { "aria-hidden": !1, asset: d.E }) })), (eL[65] = ed))
          : (ed = eL[65]),
        eL[66] !== e8 || eL[67] !== e9
          ? ((em = (0, a.jsx)("span", {
              className: "turn-diff-default-subtitle inline-flex",
              children: (0, a.jsx)(P.S, { className: "text-size-chat-sm", linesAdded: e8, linesRemoved: e9 }),
            })),
            (eL[66] = e8),
            (eL[67] = e9),
            (eL[68] = em))
          : (em = eL[68]),
        eL[69] === Symbol.for("react.memo_cache_sentinel")
          ? ((ep = (0, a.jsxs)("span", {
              className: "turn-diff-hover-subtitle hidden items-center gap-1",
              children: [
                (0, a.jsx)(b.A, {
                  id: "codex.unifiedDiff.reviewChangesHover",
                  defaultMessage: "View changes",
                  description: "Hover subtitle for opening the Changes tab from a completed turn diff card",
                }),
                (0, a.jsx)(T.bF, { "aria-hidden": !0, asset16: o.J, legacyIcon: z.A, legacyClassName: "icon-2xs" }),
              ],
            })),
            (eL[69] = ep))
          : (ep = eL[69]),
        eL[70] !== em
          ? ((eh = (0, a.jsxs)(a.Fragment, { children: [em, ep] })), (eL[70] = em), (eL[71] = eh))
          : (eh = eL[71]),
        eL[72] !== td || eL[73] !== en || eL[74] !== e5.isPending || eL[75] !== tu || eL[76] !== eF
          ? ((ef = eF
              ? (0, a.jsxs)(k.$, {
                  color: "ghostActive",
                  disabled: !td || e5.isPending,
                  onClick: (e) => {
                    tu(en, e)
                  },
                  size: "toolbar",
                  children: [
                    "undo" === en
                      ? (0, a.jsx)(b.A, {
                          id: "codex.unifiedDiff.revertChangesTooltip",
                          defaultMessage: "Undo",
                          description: "Label for button that reverts the diff in a Codex task",
                        })
                      : (0, a.jsx)(b.A, {
                          id: "codex.unifiedDiff.reapplyChangesTooltip",
                          defaultMessage: "Reapply",
                          description: "Label for button that reapplies the diff in a Codex task",
                        }),
                    e5.isPending ? (0, a.jsx)(N.y, { className: "icon-2xs" }) : null,
                    !e5.isPending &&
                      ("undo" === en
                        ? (0, a.jsx)(T.bF, {
                            "aria-hidden": !1,
                            asset16: r.K,
                            legacyIcon: H.A,
                            legacyClassName: "icon-2xs",
                          })
                        : (0, a.jsx)(T.bF, {
                            "aria-hidden": !1,
                            asset16: c.S,
                            legacyIcon: W.A,
                            legacyClassName: "icon-2xs",
                          })),
                  ],
                })
              : null),
            (eL[72] = td),
            (eL[73] = en),
            (eL[74] = e5.isPending),
            (eL[75] = tu),
            (eL[76] = eF),
            (eL[77] = ef))
          : (ef = eL[77]),
        eL[78] !== tp || eL[79] !== tn?.path
          ? ((eg = (0, a.jsx)(a.Fragment, {
              children: (0, a.jsx)(eb, {
                onClick: (e) => {
                  ;(e.stopPropagation(), tp(tn?.path))
                },
              }),
            })),
            (eL[78] = tp),
            (eL[79] = tn?.path),
            (eL[80] = eg))
          : (eg = eL[80]),
        eL[81] !== ef || eL[82] !== eg
          ? ((ex = (0, a.jsxs)("div", {
              className: "pointer-events-auto flex items-center gap-2",
              children: [ef, eg],
            })),
            (eL[81] = ef),
            (eL[82] = eg),
            (eL[83] = ex))
          : (ex = eL[83]),
        eL[84] !== tl || eL[85] !== eh || eL[86] !== ex
          ? ((ev = (0, a.jsx)(S.Ni, {
              className: "pointer-events-none relative z-10",
              icon: ed,
              title: tl,
              subtitle: eh,
              trailing: ex,
            })),
            (eL[84] = tl),
            (eL[85] = eh),
            (eL[86] = ex),
            (eL[87] = ev))
          : (ev = eL[87]),
        eL[88] !== ec || eL[89] !== ev
          ? ((ek = (0, a.jsxs)("div", {
              ref: e3,
              className:
                "group/turn-diff-header relative focus-within:[&_.turn-diff-default-subtitle]:hidden hover:[&_.turn-diff-default-subtitle]:hidden focus-within:[&_.turn-diff-hover-subtitle]:inline-flex hover:[&_.turn-diff-hover-subtitle]:inline-flex",
              children: [ec, ev],
            })),
            (eL[88] = ec),
            (eL[89] = ev),
            (eL[90] = ek))
          : (ek = eL[90]),
        eL[91] !== eU ||
        eL[92] !== eE ||
        eL[93] !== e6.files.length ||
        eL[94] !== tt ||
        eL[95] !== tr ||
        eL[96] !== eW ||
        eL[97] !== tf ||
        eL[98] !== eV ||
        eL[99] !== e4 ||
        eL[100] !== tc ||
        eL[101] !== e0 ||
        eL[102] !== to
          ? ((eM = tc
              ? (0, a.jsxs)("div", {
                  className:
                    "flex flex-col border-t border-default [--codex-diffs-header-padding-x:var(--resource-card-row-padding-x)] [--codex-diffs-header-padding-y:var(--turn-diff-row-padding-y)] [--codex-diffs-surface-override:color-mix(in_oklab,var(--color-surface-elevated-secondary)_50%,transparent)] extension:[--codex-diffs-surface-override:color-mix(in_oklab,var(--color-background-primary-soft)_50%,transparent)]",
                  children: [
                    to.map((e, t) => {
                      let n = tt[t],
                        s = null == eU ? e.path : (0, L.ph)(e.path, eU)
                      return null == n || et(n)
                        ? (0, a.jsx)(
                            eA,
                            {
                              deferOffscreenRendering: eE,
                              displayPath: s,
                              cwd: eU,
                              hostId: eV,
                              linesAdded: e.linesAdded,
                              linesRemoved: e.linesDeleted,
                              onOpen: (t) => {
                                tf(e.path, t)
                              },
                              path: e.path,
                            },
                            `${e.path}:${t}`,
                          )
                        : (0, a.jsx)(
                            "div",
                            {
                              className: (0, u.A)(
                                "group/turn-diff-file-row",
                                eE && "[contain-intrinsic-size:auto_36px] [content-visibility:auto]",
                              ),
                              children: (0, a.jsx)(eI, {
                                diff: n,
                                displayPath: s,
                                cwd: eU,
                                hostId: eV,
                                linesAdded: e.linesAdded,
                                linesRemoved: e.linesDeleted,
                                disabled: eW,
                                onOpen: (t) => {
                                  tf(e.path, t)
                                },
                                path: e.path,
                              }),
                            },
                            `${n.metadata.cacheKey ?? n.metadata.name}:${t}`,
                          )
                    }),
                    tr > 0
                      ? (0, a.jsx)(ej, {
                          isExpanded: !1,
                          onClick: () => {
                            ;(e4(), e2(!0))
                          },
                          children: (0, a.jsx)(b.A, {
                            id: "codex.unifiedDiff.showMoreFiles",
                            defaultMessage: "{count, plural, one {Show # more file} other {Show # more files}}",
                            description: "Button label that expands hidden changed file rows in a completed turn diff",
                            values: { count: tr },
                          }),
                        })
                      : e0 && e6.files.length > 3
                        ? (0, a.jsx)(ej, {
                            isExpanded: !0,
                            onClick: () => {
                              ;(e4(), e2(!1))
                            },
                            children: (0, a.jsx)(b.A, {
                              id: "codex.unifiedDiff.collapseFiles",
                              defaultMessage: "Collapse files",
                              description:
                                "Button label that collapses expanded changed file rows in a completed turn diff",
                            }),
                          })
                        : null,
                  ],
                })
              : null),
            (eL[91] = eU),
            (eL[92] = eE),
            (eL[93] = e6.files.length),
            (eL[94] = tt),
            (eL[95] = tr),
            (eL[96] = eW),
            (eL[97] = tf),
            (eL[98] = eV),
            (eL[99] = e4),
            (eL[100] = tc),
            (eL[101] = e0),
            (eL[102] = to),
            (eL[103] = eM))
          : (eM = eL[103]),
        eL[104] !== ek || eL[105] !== eM
          ? ((eS = (0, a.jsxs)(S.zU, {
              className: "mb-2 text-base [--turn-diff-row-padding-y:0.25rem]",
              children: [ek, eM],
            })),
            (eL[104] = ek),
            (eL[105] = eM),
            (eL[106] = eS))
          : (eS = eL[106]))
      let tg = eS
      ;(eL[107] === Symbol.for("react.memo_cache_sentinel")
        ? ((eN = { "codex.turn_diff.state": "completed" }), (eL[107] = eN))
        : (eN = eL[107]),
        eL[108] !== tg || eL[109] !== eW || eL[110] !== tf || eL[111] !== ts || eL[112] !== ti || eL[113] !== tn
          ? ((eT =
              null != ts && null != tn
                ? (0, a.jsx)(ee.d, {
                    diff: ts,
                    disabled: eW,
                    displayPath: ti,
                    linesAdded: tn.linesAdded,
                    linesRemoved: tn.linesDeleted,
                    onOpen: (e) => {
                      tf(tn.path, e)
                    },
                    children: tg,
                  })
                : tg),
            (eL[108] = tg),
            (eL[109] = eW),
            (eL[110] = tf),
            (eL[111] = ts),
            (eL[112] = ti),
            (eL[113] = tn),
            (eL[114] = eT))
          : (eT = eL[114]))
      let tx = null != eX
      return (
        eL[115] === Symbol.for("react.memo_cache_sentinel")
          ? ((e_ = (e) => {
              e || e1(null)
            }),
            (eL[115] = e_))
          : (e_ = eL[115]),
        eL[116] !== eU || eL[117] !== eV || eL[118] !== eX || eL[119] !== tx
          ? ((eR = (0, a.jsx)(el, { open: tx, cwd: eU, hostId: eV, onOpenChange: e_, failure: eX })),
            (eL[116] = eU),
            (eL[117] = eV),
            (eL[118] = eX),
            (eL[119] = tx),
            (eL[120] = eR))
          : (eR = eL[120]),
        eL[121] !== eT || eL[122] !== eR
          ? ((eP = (0, a.jsxs)(G, { name: "TurnDiffContent", attributes: eN, children: [eT, eR] })),
            (eL[121] = eT),
            (eL[122] = eR),
            (eL[123] = eP))
          : (eP = eL[123]),
        eP
      )
    }
    function ey(e) {
      return !en(e.renderedLineEstimate, e.linesAdded, e.linesDeleted)
    }
    function ew(e) {
      return null != e
    }
    function eb(e) {
      let t,
        n,
        i = (0, s.c)(3),
        { onClick: l } = e
      return (
        i[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(b.A, { ...eM.review })), (i[0] = t))
          : (t = i[0]),
        i[1] !== l
          ? ((n = (0, a.jsx)(k.$, { color: "outline", onClick: l, size: "toolbar", children: t })),
            (i[1] = l),
            (i[2] = n))
          : (n = i[2]),
        n
      )
    }
    function eC(e) {
      let t,
        n,
        i = (0, s.c)(5),
        { onClick: l } = e,
        o = (0, w.A)()
      return (
        i[0] !== o
          ? ((t = o.formatMessage({
              id: "codex.unifiedDiff.reviewChangedFiles",
              defaultMessage: "View changed files",
              description: "Accessible label for opening the Changes tab from a completed turn diff card",
            })),
            (i[0] = o),
            (i[1] = t))
          : (t = i[1]),
        i[2] !== l || i[3] !== t
          ? ((n = (0, a.jsx)("button", {
              "aria-label": t,
              className:
                "absolute inset-0 cursor-interaction rounded-lg bg-transparent group-hover/turn-diff-header:bg-background-secondary-ghost-hover/30 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset",
              onClick: l,
              type: "button",
            })),
            (i[2] = l),
            (i[3] = t),
            (i[4] = n))
          : (n = i[4]),
        n
      )
    }
    function ej(e) {
      let t,
        n,
        i,
        l,
        o,
        r = (0, s.c)(13),
        { children: c, isExpanded: d, onClick: m } = e
      r[0] !== c
        ? ((t = (0, a.jsx)("span", { className: "truncate", children: c })), (r[0] = c), (r[1] = t))
        : (t = r[1])
      let p = d && "rotate-180"
      return (
        r[2] !== p ? ((n = (0, u.A)("icon-2xs", p)), (r[2] = p), (r[3] = n)) : (n = r[3]),
        r[4] !== n ? ((i = (0, a.jsx)(q.A, { className: n })), (r[4] = n), (r[5] = i)) : (i = r[5]),
        r[6] !== t || r[7] !== i
          ? ((l = (0, a.jsxs)("span", { className: "inline-flex min-w-0 items-center gap-2", children: [t, i] })),
            (r[6] = t),
            (r[7] = i),
            (r[8] = l))
          : (l = r[8]),
        r[9] !== d || r[10] !== m || r[11] !== l
          ? ((o = (0, a.jsx)("button", {
              type: "button",
              "aria-expanded": d,
              className:
                "flex h-9 w-full cursor-interaction items-center rounded-b-lg px-[var(--resource-card-row-padding-x)] py-[var(--turn-diff-row-padding-y)] text-start text-size-chat text-default hover:bg-background-secondary-ghost-hover/30 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset",
              onClick: m,
              children: l,
            })),
            (r[9] = d),
            (r[10] = m),
            (r[11] = l),
            (r[12] = o))
          : (o = r[12]),
        o
      )
    }
    function eA(e) {
      let t,
        n,
        i,
        l,
        o,
        r,
        c,
        d = (0, s.c)(20),
        {
          cwd: m,
          deferOffscreenRendering: p,
          displayPath: h,
          hostId: f,
          linesAdded: g,
          linesRemoved: x,
          onOpen: v,
          path: y,
        } = e,
        w = p && "[contain-intrinsic-size:auto_36px] [content-visibility:auto]"
      return (
        d[0] !== w ? ((t = (0, u.A)("group/turn-diff-file-row", w)), (d[0] = w), (d[1] = t)) : (t = d[1]),
        d[2] !== h ? ((n = (0, a.jsx)(ek, { displayPath: h })), (d[2] = h), (d[3] = n)) : (n = d[3]),
        d[4] !== g || d[5] !== x
          ? ((i = (0, a.jsx)(P.S, { linesAdded: g, linesRemoved: x })), (d[4] = g), (d[5] = x), (d[6] = i))
          : (i = d[6]),
        d[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, a.jsx)("span", {
              className: "text-codex-description/80 max-[720px]:hidden",
              children: (0, a.jsx)(b.A, {
                id: "codex.unifiedDiff.inlineLargeFile",
                defaultMessage: "Too large to render inline",
                description: "Label shown when a file diff is too large to render inline in the thread view",
              }),
            })),
            (d[7] = l))
          : (l = d[7]),
        d[8] !== v || d[9] !== n || d[10] !== i
          ? ((o = (0, a.jsxs)("button", {
              className:
                "flex h-9 w-full cursor-interaction items-center gap-2 bg-surface/70 px-[var(--resource-card-row-padding-x)] py-[var(--turn-diff-row-padding-y)] text-start text-size-chat group-last/turn-diff-file-row:rounded-b-lg hover:bg-background-secondary-ghost-hover/60 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset extension:bg-background-primary-soft/70 extension:hover:bg-background-secondary-ghost-hover/60",
              onClick: v,
              type: "button",
              children: [n, i, l],
            })),
            (d[8] = v),
            (d[9] = n),
            (d[10] = i),
            (d[11] = o))
          : (o = d[11]),
        d[12] !== m || d[13] !== f || d[14] !== y || d[15] !== o
          ? ((r = (0, a.jsx)(O.S, { cwd: m, hostId: f, path: y, children: o })),
            (d[12] = m),
            (d[13] = f),
            (d[14] = y),
            (d[15] = o),
            (d[16] = r))
          : (r = d[16]),
        d[17] !== t || d[18] !== r
          ? ((c = (0, a.jsx)("div", { className: t, children: r })), (d[17] = t), (d[18] = r), (d[19] = c))
          : (c = d[19]),
        c
      )
    }
    function eI(e) {
      let t,
        n,
        i,
        l,
        o,
        r = (0, s.c)(22),
        {
          cwd: c,
          disabled: d,
          diff: u,
          displayPath: m,
          hostId: p,
          linesAdded: h,
          linesRemoved: f,
          onOpen: g,
          path: x,
        } = e
      return (
        r[0] !== m ? ((t = (0, a.jsx)(ek, { displayPath: m })), (r[0] = m), (r[1] = t)) : (t = r[1]),
        r[2] !== h || r[3] !== f
          ? ((n = (0, a.jsx)(P.S, { linesAdded: h, linesRemoved: f })), (r[2] = h), (r[3] = f), (r[4] = n))
          : (n = r[4]),
        r[5] !== g || r[6] !== t || r[7] !== n
          ? ((i = (0, a.jsxs)("button", {
              className:
                "flex h-9 w-full cursor-interaction items-center gap-2 bg-surface/70 px-[var(--resource-card-row-padding-x)] py-[var(--turn-diff-row-padding-y)] text-start text-size-chat group-last/turn-diff-file-row:rounded-b-lg hover:bg-background-secondary-ghost-hover/60 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset extension:bg-background-primary-soft/70 extension:hover:bg-background-secondary-ghost-hover/60",
              onClick: g,
              type: "button",
              children: [t, n],
            })),
            (r[5] = g),
            (r[6] = t),
            (r[7] = n),
            (r[8] = i))
          : (i = r[8]),
        r[9] !== c || r[10] !== p || r[11] !== x || r[12] !== i
          ? ((l = (0, a.jsx)(O.S, { cwd: c, hostId: p, path: x, children: i })),
            (r[9] = c),
            (r[10] = p),
            (r[11] = x),
            (r[12] = i),
            (r[13] = l))
          : (l = r[13]),
        r[14] !== u || r[15] !== d || r[16] !== m || r[17] !== h || r[18] !== f || r[19] !== g || r[20] !== l
          ? ((o = (0, a.jsx)(ee.d, {
              disabled: d,
              diff: u,
              displayPath: m,
              linesAdded: h,
              linesRemoved: f,
              onOpen: g,
              children: l,
            })),
            (r[14] = u),
            (r[15] = d),
            (r[16] = m),
            (r[17] = h),
            (r[18] = f),
            (r[19] = g),
            (r[20] = l),
            (r[21] = o))
          : (o = r[21]),
        o
      )
    }
    function ek(e) {
      let t,
        n,
        i,
        l,
        o,
        r,
        c = (0, s.c)(14),
        { displayPath: d } = e
      c[0] !== d ? ((t = x().posix.parse((0, Y.Fd)(d))), (c[0] = d), (c[1] = t)) : (t = c[1])
      let { base: u, dir: m } = t
      return (
        c[2] !== d
          ? ((n = (0, a.jsx)("span", { className: "sr-only", children: d })), (c[2] = d), (c[3] = n))
          : (n = c[3]),
        c[4] !== m
          ? ((i =
              m.length > 0
                ? (0, a.jsxs)("span", {
                    className: "min-w-0 truncate text-codex-description",
                    children: [m, x().posix.sep],
                  })
                : null),
            (c[4] = m),
            (c[5] = i))
          : (i = c[5]),
        c[6] !== u
          ? ((l = (0, a.jsx)("span", { className: "max-w-full shrink-0 truncate text-default", children: u })),
            (c[6] = u),
            (c[7] = l))
          : (l = c[7]),
        c[8] !== i || c[9] !== l
          ? ((o = (0, a.jsxs)("span", {
              "aria-hidden": !0,
              className: "flex min-w-0 flex-1 items-center",
              children: [i, l],
            })),
            (c[8] = i),
            (c[9] = l),
            (c[10] = o))
          : (o = c[10]),
        c[11] !== n || c[12] !== o
          ? ((r = (0, a.jsxs)(a.Fragment, { children: [n, o] })), (c[11] = n), (c[12] = o), (c[13] = r))
          : (r = c[13]),
        r
      )
    }
    let eM = (0, C.YK)({
      filesChanged: {
        id: "codex.unifiedDiff.filesChanged",
        defaultMessage: "{fileCount, plural, one {# file changed} other {# files changed}}",
        description: "Label for the number of files changed in a Codex task",
      },
      review: {
        id: "codex.unifiedDiff.viewDiffTooltip",
        defaultMessage: "View changes",
        description: "Label for button that views the diff of a Codex task in an editor view",
      },
    })
  },
  GL6x(e, t, n) {
    var a = n("ABep"),
      s = n("QosV"),
      i = n("QxwI"),
      l = n("irkb"),
      o = n("T0Rc"),
      r = n("zTeN"),
      c = n("DBCl"),
      d = n("ZjPZ"),
      u = n("zd8w"),
      m = n("Wf1j"),
      p = n("oyxz"),
      h = n("tl5a"),
      f = n("fAj4"),
      g = n("w7Qu"),
      x = n("ug4w"),
      v = n("GqUU"),
      y = n("OOaz"),
      w = n("lgdh"),
      b = n("QAOE"),
      C = n("likb"),
      j = n("dbLj"),
      A = n("xa8Q"),
      I = n("Zm2g"),
      k = n("rmk3"),
      M = n("Ot7V"),
      S = n("HOLv"),
      N = n("Bbed"),
      T = n("RNul"),
      _ = n("SGsN"),
      R = n("B09n"),
      P = n("V3Mg"),
      L = n("T1PX"),
      D = n("fGzQ"),
      F = n("qlQA"),
      E = n("hfh3"),
      O = n("Oco2"),
      U = n("YeQK"),
      B = n("JwGC"),
      z = n("ylNI"),
      q = n("p1kG"),
      W = n("VPBa"),
      H = n("AdZa"),
      G = n("utkD"),
      V = n("CBsD"),
      $ = n("pMIa"),
      K = n("Sd8U"),
      Z = n("Oj9r"),
      Q = n("nf3G"),
      J = n("kfGJ"),
      Y = n("hZax"),
      X = n("zHp1"),
      ee = n("YeiR"),
      et = n("rvFo"),
      en = n("mlUw")
    let ea = (0, N._)(
      async () =>
        (
          await Promise.all([
            n.e(390941),
            n.e(434505),
            n.e(355084),
            n.e(837359),
            n.e(350772),
            n.e(287117),
            n.e(744843),
            n.e(666058),
            n.e(930242),
            n.e(584484),
            n.e(87804),
            n.e(599393),
            n.e(871097),
            n.e(339467),
            n.e(411669),
            n.e(603998),
          ]).then(n.bind(n, "wzvp"))
        ).ImagePreviewOverlay,
      { errorFallback: q.q },
    )
    function es(e) {
      let t,
        n,
        o,
        c,
        d,
        f,
        g,
        x,
        v,
        w,
        b,
        C,
        j,
        A,
        I,
        M,
        N,
        _,
        R,
        P,
        D,
        F = (0, s.c)(125),
        {
          src: E,
          conversationId: q,
          chatGptConversationId: G,
          hostId: $,
          alt: ee,
          availableImageCount: et,
          imageAssetResolver: en,
          imageSource: es,
          imageEditAttribution: ei,
          sourceImage: el,
          onImageEditSubmit: eo,
          initialPreviewSrc: er,
          open: ec,
          onOpenChange: ed,
          onPreviewAvailabilityChange: eu,
          onPreviousImage: em,
          onNextImage: ep,
          disableOpenAnimation: eh,
          useImageDialog: ef,
        } = e,
        eg = void 0 === et ? 1 : et,
        ex = (0, r.gh)(K.PR),
        ev = (0, m.A)(),
        ey = (0, l.jE)(),
        ew = (0, r._U)(null == $ ? h.Qk : null, q),
        eb = $ ?? ew ?? J.fI,
        eC = "local" === ex.value.kind && "local-thread" === ex.value.routeKind && ex.value.conversationId === q && !ef,
        ej = (0, r.Ul)(Z.Rj),
        eA = (0, L.I)(),
        [eI, ek] = (0, u.useState)(),
        eM = (0, u.useRef)(null),
        eS = (0, u.useRef)(null),
        eN = (0, X.fi)(E) ? E : "",
        [eT] = (0, u.useState)(er ?? null),
        e_ = null == eT ? eN : "",
        { isError: eR, src: eP } = (0, X.vM)(e_, en),
        [eL, eD] = (0, u.useState)(!1),
        eF = ec ?? eL,
        eE = ed ?? eD
      F[0] !== eN.length || F[1] !== E
        ? ((t = () => (eN.length > 0 || null != (0, V.IY)(E) ? void 0 : E)), (F[0] = eN.length), (F[1] = E), (F[2] = t))
        : (t = F[2])
      let [eO, eU] = (0, u.useState)(t),
        [eB, ez] = (0, u.useState)(null),
        eq = eN.length > 0 ? (eT ?? eP) : eO,
        eW = e_.length > 0 && eR,
        eH = null != eq && eq === eB,
        eG = null != eq && !eW && !eH && !ef && !ej && ("local" === ex.value.kind || "chatgpt" === ex.value.kind),
        eV = !eG
      F[3] !== eV ? ((n = { disableExposureLog: eV }), (F[3] = eV), (F[4] = n)) : (n = F[4])
      let e$ = (0, Y.Ou)("2983946247", n)
      F[5] !== e$ ? ((o = e$.get("image_overlay_enabled", !1)), (F[5] = e$), (F[6] = o)) : (o = F[6])
      let eK = o,
        eZ = eG && eK
      F[7] !== ev
        ? ((c = ev.formatMessage({
            id: "codex.localConversation.userImageAttachmentFailed",
            defaultMessage: "Image failed to load",
            description: "Alt text for a user image attachment that could not be loaded in local conversation",
          })),
          (F[7] = ev),
          (F[8] = c))
        : (c = F[8])
      let eQ = c
      F[9] !== ee || F[10] !== ev
        ? ((d =
            ee ??
            ev.formatMessage({
              id: "codex.localConversation.userImageAttachment",
              defaultMessage: "User attachment",
              description: "Alt text for user image attachment in local conversation",
            })),
          (F[9] = ee),
          (F[10] = ev),
          (F[11] = d))
        : (d = F[11])
      let eJ = d
      F[12] !== ev
        ? ((f = ev.formatMessage({
            id: "codex.localConversation.closeImagePreview",
            defaultMessage: "Close image preview",
            description: "Aria label for closing the image preview dialog in local conversation",
          })),
          (F[12] = ev),
          (F[13] = f))
        : (f = F[13])
      let eY = f
      F[14] !== eu || F[15] !== eF || F[16] !== eE
        ? ((g = () => {
            ;(eu?.(!1), eF && eE(!1))
          }),
          (F[14] = eu),
          (F[15] = eF),
          (F[16] = eE),
          (F[17] = g))
        : (g = F[17])
      let eX = g,
        e1 = (0, u.useEffectEvent)(eX)
      if (
        (F[18] !== q ||
        F[19] !== eW ||
        F[20] !== eb ||
        F[21] !== eN.length ||
        F[22] !== ey ||
        F[23] !== e1 ||
        F[24] !== E
          ? ((x = () => {
              if (eN.length > 0) {
                eW && e1()
                return
              }
              let e = (0, V.IY)(E)
              if (null == e) return void eU(E)
              let t = !1
              return (
                eU(void 0),
                (0, V.fB)(e, eb, ey, void 0, q).then((e) => {
                  t || (eU(e), null == e && e1())
                }),
                () => {
                  t = !0
                }
              )
            }),
            (F[18] = q),
            (F[19] = eW),
            (F[20] = eb),
            (F[21] = eN.length),
            (F[22] = ey),
            (F[23] = e1),
            (F[24] = E),
            (F[25] = x))
          : (x = F[25]),
        F[26] !== q || F[27] !== eW || F[28] !== eb || F[29] !== eN || F[30] !== ey || F[31] !== E
          ? ((v = [q, eW, eb, eN, ey, E]),
            (F[26] = q),
            (F[27] = eW),
            (F[28] = eb),
            (F[29] = eN),
            (F[30] = ey),
            (F[31] = E),
            (F[32] = v))
          : (v = F[32]),
        (0, u.useEffect)(x, v),
        eW || eH || (0 === eN.length && null === eO))
      ) {
        let e, t
        return (
          F[33] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(p.A, {
                id: "codex.localConversation.userImageAttachmentFailedShort",
                defaultMessage: "Failed",
                description:
                  "Short visible text for a user image attachment that could not be loaded in local conversation",
              })),
              (F[33] = e))
            : (e = F[33]),
          F[34] !== eQ
            ? ((t = (0, a.jsx)("div", {
                className:
                  "flex size-20 items-center justify-center rounded-lg border border-text-danger/20 bg-background-danger-surface/20 px-1 text-center text-[10px] leading-3 text-danger",
                role: "img",
                "aria-label": eQ,
                children: e,
              })),
              (F[34] = eQ),
              (F[35] = t))
            : (t = F[35]),
          t
        )
      }
      if (null == eq) {
        let e
        return (
          F[36] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)("div", {
                className: "flex size-20 items-center justify-center rounded-lg border border-strong",
                children: (0, a.jsx)(T.y, { className: "icon-xs" }),
              })),
              (F[36] = e))
            : (e = F[36]),
          e
        )
      }
      F[37] !== eX || F[38] !== eq
        ? ((w = () => {
            ;(ez(eq), eX())
          }),
          (F[37] = eX),
          (F[38] = eq),
          (F[39] = w))
        : (w = F[39])
      let e0 = w
      F[40] !== eJ ||
      F[41] !== eg ||
      F[42] !== G ||
      F[43] !== q ||
      F[44] !== en ||
      F[45] !== ei ||
      F[46] !== es ||
      F[47] !== eo ||
      F[48] !== eq ||
      F[49] !== ex ||
      F[50] !== el ||
      F[51] !== E
        ? ((b = (e) => {
            let t =
              "local-thread" === ex.value.routeKind && ex.value.conversationId === q ? ex.get(Q.threadHostId$) : null
            return (0, z.openImagePreview)(
              ex,
              {
                alt: eJ,
                availableImageCount: eg,
                attachmentSrc: E,
                chatGptConversationId: G,
                downloadSrc: eq,
                entrypoint: e,
                imageSource: es,
                imageEditAttribution: ei,
                onImageEditSubmit: eo,
                openInEditor: !0,
                referrerPolicy: "no-referrer",
                src: eq,
                sourceImage: el,
                title: eJ,
              },
              { durableIdentity: null == en && null != t ? (0, W.tH)(t, E) : void 0 },
            )
          }),
          (F[40] = eJ),
          (F[41] = eg),
          (F[42] = G),
          (F[43] = q),
          (F[44] = en),
          (F[45] = ei),
          (F[46] = es),
          (F[47] = eo),
          (F[48] = eq),
          (F[49] = ex),
          (F[50] = el),
          (F[51] = E),
          (F[52] = b))
        : (b = F[52])
      let e2 = b,
        e3 = eC && "uploaded" === es
      F[53] !== eg ||
      F[54] !== es ||
      F[55] !== eC ||
      F[56] !== e2 ||
      F[57] !== eA ||
      F[58] !== ex ||
      F[59] !== eE ||
      F[60] !== eZ
        ? ((C = (e) => {
            if (eZ || "uploaded" === es) {
              ;(e?.preventDefault(),
                eZ
                  ? (0, H.Vy)({
                      source: eM.current,
                      reducedMotion: eA,
                      open: (e) => {
                        ;(ek(() => e), eE(!0))
                      },
                    })
                  : eE(!0),
                null != es &&
                  (0, O.PQ)(ex, {
                    availableImageCount: eg,
                    entrypoint: "image_click",
                    imageSource: es,
                    view: "preview_dialog",
                  }))
              return
            }
            eC && e2("image_click") ? e?.preventDefault() : null == e && eE(!0)
          }),
          (F[53] = eg),
          (F[54] = es),
          (F[55] = eC),
          (F[56] = e2),
          (F[57] = eA),
          (F[58] = ex),
          (F[59] = eE),
          (F[60] = eZ),
          (F[61] = C))
        : (C = F[61])
      let e4 = C
      ;(F[62] !== e4
        ? ((j = (e) => {
            e.target instanceof Node && !e.currentTarget.contains(e.target) ? e.preventDefault() : e4(e)
          }),
          (A = (e) => {
            ;("Enter" === e.key || " " === e.key) && (e.preventDefault(), e4())
          }),
          (F[62] = e4),
          (F[63] = j),
          (F[64] = A))
        : ((j = F[63]), (A = F[64])),
        F[65] !== eJ ||
        F[66] !== q ||
        F[67] !== eb ||
        F[68] !== en ||
        F[69] !== ev ||
        F[70] !== eq ||
        F[71] !== ex ||
        F[72] !== E
          ? ((I = () =>
              (0, U.getGeneratedImageContextMenuItems)(ex, {
                chatGptConversationId: q.startsWith("chatgpt:") ? (0, y.TF)(q.slice(8)) : void 0,
                displaySrc: eq,
                hostId: eb,
                image: { kind: "generic", src: E, alt: eJ },
                imageAssetResolver: en,
                intl: ev,
              })),
            (F[65] = eJ),
            (F[66] = q),
            (F[67] = eb),
            (F[68] = en),
            (F[69] = ev),
            (F[70] = eq),
            (F[71] = ex),
            (F[72] = E),
            (F[73] = I))
          : (I = F[73]),
        F[74] !== eu ? ((M = () => eu?.(!0)), (F[74] = eu), (F[75] = M)) : (M = F[75]),
        F[76] !== eJ || F[77] !== e0 || F[78] !== eq || F[79] !== M
          ? ((N = (0, a.jsx)(
              "img",
              {
                ref: eM,
                onError: e0,
                onLoad: M,
                src: eq,
                className: "h-full w-full rounded-md object-cover",
                referrerPolicy: "no-referrer",
                alt: eJ,
              },
              eq,
            )),
            (F[76] = eJ),
            (F[77] = e0),
            (F[78] = eq),
            (F[79] = M),
            (F[80] = N))
          : (N = F[80]),
        F[81] !== I || F[82] !== N
          ? ((_ = (0, a.jsx)(k.t, { getItems: I, children: N })), (F[81] = I), (F[82] = N), (F[83] = _))
          : (_ = F[83]),
        F[84] !== eJ || F[85] !== j || F[86] !== A || F[87] !== _
          ? ((R = (0, a.jsx)("div", {
              ref: eS,
              className:
                "size-20 cursor-interaction rounded-lg border border-strong focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
              role: "button",
              tabIndex: 0,
              "aria-label": eJ,
              onClick: j,
              onKeyDown: A,
              children: _,
            })),
            (F[84] = eJ),
            (F[85] = j),
            (F[86] = A),
            (F[87] = _),
            (F[88] = R))
          : (R = F[88]))
      let e5 = R
      if (eZ) {
        let e, t
        return (
          F[89] !== eJ ||
          F[90] !== eg ||
          F[91] !== G ||
          F[92] !== ei ||
          F[93] !== es ||
          F[94] !== eC ||
          F[95] !== eo ||
          F[96] !== ep ||
          F[97] !== em ||
          F[98] !== eI ||
          F[99] !== eF ||
          F[100] !== eq ||
          F[101] !== eE ||
          F[102] !== el ||
          F[103] !== E
            ? ((e = eF
                ? (0, a.jsx)(ea, {
                    getThumbnail: () => eM.current,
                    image: {
                      alt: eJ,
                      availableImageCount: eg,
                      imageRef: eI,
                      attachmentSrc: E,
                      chatGptConversationId: G,
                      downloadSrc: eq,
                      imageSource: es,
                      imageEditAttribution: ei,
                      onImageEditSubmit: eo,
                      readOnly: !eC && null == eo,
                      referrerPolicy: "no-referrer",
                      sourceImage: el,
                      src: eq,
                      title: eJ,
                    },
                    onClose: () => eE(!1),
                    onCloseAutoFocus: (e) => {
                      ;(e.preventDefault(), eS.current?.focus())
                    },
                    onPreviousImage: em,
                    onNextImage: ep,
                  })
                : null),
              (F[89] = eJ),
              (F[90] = eg),
              (F[91] = G),
              (F[92] = ei),
              (F[93] = es),
              (F[94] = eC),
              (F[95] = eo),
              (F[96] = ep),
              (F[97] = em),
              (F[98] = eI),
              (F[99] = eF),
              (F[100] = eq),
              (F[101] = eE),
              (F[102] = el),
              (F[103] = E),
              (F[104] = e))
            : (e = F[104]),
          F[105] !== e || F[106] !== e5
            ? ((t = (0, a.jsxs)(a.Fragment, { children: [e5, e] })), (F[105] = e), (F[106] = e5), (F[107] = t))
            : (t = F[107]),
          t
        )
      }
      return (
        F[108] !== ev || F[109] !== e2 || F[110] !== eE || F[111] !== e3
          ? ((P = e3
              ? {
                  ariaLabel: ev.formatMessage({
                    id: "codex.localConversation.editImageAttachment",
                    defaultMessage: "Edit image",
                    description: "Accessible label for opening an uploaded image attachment in the image editor",
                  }),
                  icon: (0, a.jsx)(S.I, { "aria-hidden": !1, asset: i.h }),
                  onClick: () => {
                    e2("lightbox_edit_button") && eE(!1)
                  },
                }
              : void 0),
            (F[108] = ev),
            (F[109] = e2),
            (F[110] = eE),
            (F[111] = e3),
            (F[112] = P))
          : (P = F[112]),
        F[113] !== eJ ||
        F[114] !== eY ||
        F[115] !== eh ||
        F[116] !== e0 ||
        F[117] !== ep ||
        F[118] !== em ||
        F[119] !== eF ||
        F[120] !== eq ||
        F[121] !== eE ||
        F[122] !== P ||
        F[123] !== e5
          ? ((D = (0, a.jsx)(B.C, {
              src: eq,
              alt: eJ,
              open: eF,
              onImageError: e0,
              onOpenChange: eE,
              onPreviousImage: em,
              onNextImage: ep,
              disableOpenAnimation: eh,
              closeAriaLabel: eY,
              imageReferrerPolicy: "no-referrer",
              editButton: P,
              triggerContent: e5,
            })),
            (F[113] = eJ),
            (F[114] = eY),
            (F[115] = eh),
            (F[116] = e0),
            (F[117] = ep),
            (F[118] = em),
            (F[119] = eF),
            (F[120] = eq),
            (F[121] = eE),
            (F[122] = P),
            (F[123] = e5),
            (F[124] = D))
          : (D = F[124]),
        D
      )
    }
    function ei(e) {
      let t,
        n,
        i,
        l = (0, s.c)(12),
        { attachment: o, hostId: r } = e
      l[0] !== o.label ? ((t = (0, x.YW)({ fileName: o.label })), (l[0] = o.label), (l[1] = t)) : (t = l[1])
      let d = t,
        u = null == o.dictationDurationMs ? void 0 : o.dictationDurationMs / 1e3
      return (
        l[2] !== o.appServerPath || l[3] !== o.fsPath || l[4] !== r || l[5] !== d
          ? ((n = async (e) => {
              let t = o.appServerPath ?? o.fsPath
              if (r === J.fI) return (0, ee.B)(t)
              let { contentsBase64: n } = await (0, D.H9)({ path: t, hostId: r, maxBytes: c.PL_ }, e)
              if (null == n) throw Error("Dictation recording unavailable")
              return `data:${d ?? "audio/webm"};base64,${n}`
            }),
            (l[2] = o.appServerPath),
            (l[3] = o.fsPath),
            (l[4] = r),
            (l[5] = d),
            (l[6] = n))
          : (n = l[6]),
        l[7] !== o.label || l[8] !== d || l[9] !== u || l[10] !== n
          ? ((i = (0, a.jsx)(v.D, {
              dictation: !0,
              fileName: o.label,
              mimeType: d,
              durationSeconds: u,
              resolveSrc: n,
              onPlaybackError: el,
            })),
            (l[7] = o.label),
            (l[8] = d),
            (l[9] = u),
            (l[10] = n),
            (l[11] = i))
          : (i = l[11]),
        i
      )
    }
    function el() {
      ;(0, _.RB)().danger(
        (0, a.jsx)(p.A, {
          id: "composer.dictation.playbackError",
          defaultMessage: "Couldn’t play this recording",
          description: "Error shown when a sent dictation audio note cannot be opened or played",
        }),
        { errorAnalytics: { toastId: "composer.dictation.playbackError" } },
      )
    }
    n.d(
      t,
      {},
      {
        BW: function (e) {
          let t,
            n,
            i,
            l,
            o,
            r = (0, s.c)(31),
            { srcs: c, conversationId: d, hostId: m, alt: p, imageSource: h, useImageDialog: f } = e,
            [g, x] = (0, u.useState)(null)
          r[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = []), (r[0] = t)) : (t = r[0])
          let [v, y] = (0, u.useState)(t)
          if (r[1] !== g || r[2] !== c || r[3] !== v) {
            let e
            ;(r[6] !== v ? ((e = (e, t) => (v[t] === e ? [] : [t])), (r[6] = v), (r[7] = e)) : (e = r[7]),
              (i = (n = c.flatMap(e)).indexOf(g ?? -1)),
              (r[1] = g),
              (r[2] = c),
              (r[3] = v),
              (r[4] = n),
              (r[5] = i))
          } else ((n = r[4]), (i = r[5]))
          let w = i,
            b = n[w - 1],
            C = n[w + 1]
          if (
            r[8] !== p ||
            r[9] !== n.length ||
            r[10] !== d ||
            r[11] !== m ||
            r[12] !== h ||
            r[13] !== C ||
            r[14] !== g ||
            r[15] !== b ||
            r[16] !== c ||
            r[17] !== f
          ) {
            let e
            ;(r[19] !== p ||
            r[20] !== n.length ||
            r[21] !== d ||
            r[22] !== m ||
            r[23] !== h ||
            r[24] !== C ||
            r[25] !== g ||
            r[26] !== b ||
            r[27] !== f
              ? ((e = (e, t) =>
                  (0, a.jsx)(
                    es,
                    {
                      src: e,
                      conversationId: d,
                      hostId: m,
                      alt: p,
                      availableImageCount: n.length,
                      imageSource: h,
                      useImageDialog: f,
                      open: g === t,
                      onOpenChange: (e) => {
                        x(e ? t : null)
                      },
                      onPreviewAvailabilityChange: (n) => {
                        y((a) => {
                          if (n === (a[t] !== e)) return a
                          let s = [...a]
                          return ((s[t] = n ? void 0 : e), s)
                        })
                      },
                      onPreviousImage: g === t && null != b ? () => x(b) : void 0,
                      onNextImage: g === t && null != C ? () => x(C) : void 0,
                      disableOpenAnimation: !0,
                    },
                    `${t}:${e}`,
                  )),
                (r[19] = p),
                (r[20] = n.length),
                (r[21] = d),
                (r[22] = m),
                (r[23] = h),
                (r[24] = C),
                (r[25] = g),
                (r[26] = b),
                (r[27] = f),
                (r[28] = e))
              : (e = r[28]),
              (l = c.map(e)),
              (r[8] = p),
              (r[9] = n.length),
              (r[10] = d),
              (r[11] = m),
              (r[12] = h),
              (r[13] = C),
              (r[14] = g),
              (r[15] = b),
              (r[16] = c),
              (r[17] = f),
              (r[18] = l))
          } else l = r[18]
          return (
            r[29] !== l ? ((o = (0, a.jsx)(a.Fragment, { children: l })), (r[29] = l), (r[30] = o)) : (o = r[30]),
            o
          )
        },
        Gj: function (e) {
          let t,
            n = (0, s.c)(2),
            { pullRequestNumber: i } = e
          return (
            n[0] !== i
              ? ((t = (0, a.jsx)(b.x, {
                  Icon: E.A,
                  children:
                    null == i
                      ? (0, a.jsx)(p.A, {
                          id: "codex.userMessage.pullRequestMergeConflictAttachmentWithoutNumber",
                          defaultMessage: "Merge conflicts",
                          description:
                            "Pill shown on a user message for attached pull request merge conflicts without a pull request number",
                        })
                      : (0, a.jsx)(p.A, {
                          id: "codex.userMessage.pullRequestMergeConflictAttachment",
                          defaultMessage: "Merge conflicts - PR #{number}",
                          description: "Pill shown on a user message for attached pull request merge conflicts",
                          values: { number: i },
                        }),
                })),
                (n[0] = i),
                (n[1] = t))
              : (t = n[1]),
            t
          )
        },
        J5: function (e) {
          let t,
            n,
            i,
            l,
            c,
            d,
            u,
            p,
            g,
            x,
            v,
            y,
            b,
            C = (0, s.c)(36),
            { appshotContext: j, conversationId: A, hostId: k } = e,
            M = (0, m.A)(),
            S = (0, r._U)(null == k ? h.Qk : null, A),
            N = k ?? S ?? J.fI
          C[0] !== j.bundleIdentifier || C[1] !== j.imageName
            ? ((t = { bundleIdentifier: j.bundleIdentifier, imageName: j.imageName }),
              (C[0] = j.bundleIdentifier),
              (C[1] = j.imageName),
              (C[2] = t))
            : (t = C[2])
          let _ = (0, r._U)(f.u, t),
            R = j.imageDataUrl ?? j.imagePath
          C[3] !== A || C[4] !== N || C[5] !== R
            ? ((i = { conversationId: A, path: (n = (0, V.IY)(R)) ?? "", hostId: N }),
              (c = o.I),
              (l = (0, D.O5)(i)),
              (d = (e) => {
                let { signal: t } = e
                return (0, D.H9)(i, t)
              }),
              (C[3] = A),
              (C[4] = N),
              (C[5] = R),
              (C[6] = n),
              (C[7] = i),
              (C[8] = l),
              (C[9] = c),
              (C[10] = d))
            : ((n = C[6]), (i = C[7]), (l = C[8]), (c = C[9]), (d = C[10]))
          let P = null != n
          ;(C[11] !== i
            ? ((u = (e) => {
                let { contentsBase64: t } = e
                return t ? (0, V.dc)(i.path, t) : null
              }),
              (C[11] = i),
              (C[12] = u))
            : (u = C[12]),
            C[13] !== l || C[14] !== d || C[15] !== P || C[16] !== u
              ? ((p = {
                  queryKey: l,
                  queryFn: d,
                  enabled: P,
                  gcTime: et.D.FIVE_MINUTES,
                  retry: !1,
                  select: u,
                  staleTime: et.D.INFINITE,
                }),
                (C[13] = l),
                (C[14] = d),
                (C[15] = P),
                (C[16] = u),
                (C[17] = p))
              : (p = C[17]))
          let L = c(p),
            F = null == n ? (R ?? null) : (L.data ?? null)
          C[18] !== j.bundleIdentifier
            ? ((g = (0, G.Wj)(j.bundleIdentifier)), (C[18] = j.bundleIdentifier), (C[19] = g))
            : (g = C[19])
          let E = j.bundleIdentifier.length > 0
          C[20] !== g || C[21] !== E
            ? ((x = { ...g, enabled: E, staleTime: et.D.INFINITE }), (C[20] = g), (C[21] = E), (C[22] = x))
            : (x = C[22])
          let { data: O } = (0, o.I)(x),
            U = O?.appPath ?? null
          C[23] !== U ? ((v = { appPath: U }), (C[23] = U), (C[24] = v)) : (v = C[24])
          let { iconSmall: B } = (0, I.x)(v),
            z = j.appIconDataUrl ?? _
          C[25] !== M
            ? ((y = M.formatMessage({
                id: "codex.localConversation.userAppshotAttachment",
                defaultMessage: "Appshot attachment",
                description: "Alt text for appshot attachment in local conversation",
              })),
              (C[25] = M),
              (C[26] = y))
            : (y = C[26])
          let q = y
          if (null == F) {
            let e
            return (
              C[27] !== R
                ? ((e =
                    null == R
                      ? null
                      : (0, a.jsx)("div", {
                          className: "flex size-20 items-center justify-center rounded-lg border border-strong",
                          children: (0, a.jsx)(T.y, { className: "icon-xs" }),
                        })),
                  (C[27] = R),
                  (C[28] = e))
                : (e = C[28]),
              e
            )
          }
          let W = z ?? B
          return (
            C[29] !== j.appName ||
            C[30] !== j.axTree ||
            C[31] !== j.windowTitle ||
            C[32] !== F ||
            C[33] !== q ||
            C[34] !== W
              ? ((b = (0, a.jsx)(w.z, {
                  variant: "thread",
                  appName: j.appName,
                  appIconSrc: W,
                  accessibilityText: j.axTree,
                  screenshotAlt: q,
                  screenshotSrc: F,
                  windowTitle: j.windowTitle,
                })),
                (C[29] = j.appName),
                (C[30] = j.axTree),
                (C[31] = j.windowTitle),
                (C[32] = F),
                (C[33] = q),
                (C[34] = W),
                (C[35] = b))
              : (b = C[35]),
            b
          )
        },
        N$: function (e) {
          let t,
            n,
            i = (0, s.c)(5),
            { checkNames: l } = e,
            o = l[0]
          return null == o
            ? null
            : (i[0] !== l.length || i[1] !== o
                ? ((t =
                    1 === l.length
                      ? o
                      : (0, a.jsx)(p.A, {
                          id: "codex.userMessage.pullRequestChecksAttachment",
                          defaultMessage: "{checkName} +{count} more",
                          description: "Pill shown on a user message for multiple attached failing pull request checks",
                          values: { checkName: o, count: l.length - 1 },
                        })),
                  (i[0] = l.length),
                  (i[1] = o),
                  (i[2] = t))
                : (t = i[2]),
              i[3] !== t ? ((n = (0, a.jsx)(b.x, { Icon: E.A, children: t })), (i[3] = t), (i[4] = n)) : (n = i[4]),
              n)
        },
        cA: function (e) {
          let t,
            n,
            i,
            l,
            o,
            u,
            m,
            p,
            h,
            f = (0, s.c)(63),
            { attachment: x, cwd: v, hostId: y, isUploadedFileViewerEnabled: w } = e,
            b = void 0 !== w && w,
            I = (0, r.gh)(Z.GD)
          if ("upload" in x) {
            let e,
              { upload: t, preview: n } = x
            return (
              f[0] !== b || f[1] !== n || f[2] !== I || f[3] !== t
                ? ((e =
                    null != n
                      ? (0, a.jsx)(j.i, { preview: n, onClick: () => void (0, A.wq)(I, t) })
                      : (0, a.jsx)(C.m, {
                          filename: t.fileName,
                          layout: b ? "card" : "pill",
                          showOpenAffordance: b,
                          variant: "thread",
                          onClick: () => void (0, A.wq)(I, t),
                        })),
                  (f[0] = b),
                  (f[1] = n),
                  (f[2] = I),
                  (f[3] = t),
                  (f[4] = e))
                : (e = f[4]),
              e
            )
          }
          let k = x.fsPath || x.path
          if (x.isDictationRecording) {
            let e,
              t = y ?? J.fI
            return (
              f[5] !== x || f[6] !== t
                ? ((e = (0, a.jsx)(ei, { attachment: x, hostId: t })), (f[5] = x), (f[6] = t), (f[7] = e))
                : (e = f[7]),
              e
            )
          }
          if (f[8] !== x || f[9] !== v || f[10] !== y || f[11] !== b || f[12] !== k || f[13] !== I) {
            let e, a, s, r
            ;((l = (function (e) {
              if (null != e.startLine)
                return null != e.endLine && e.endLine !== e.startLine ? `${e.startLine}-${e.endLine}` : `${e.startLine}`
            })(x)),
              f[20] !== x ? ((e = (0, c.skP)(x)), (f[20] = x), (f[21] = e)) : (e = f[21]))
            let m = e
            ;(f[22] !== x.startLine || f[23] !== m || f[24] !== b || f[25] !== k
              ? ((a = !m && b && null != (0, g.Yg)(k) && null == x.startLine),
                (f[22] = x.startLine),
                (f[23] = m),
                (f[24] = b),
                (f[25] = k),
                (f[26] = a))
              : (a = f[26]),
              (i = a),
              f[27] !== x.isPastedText || f[28] !== x.startLine || f[29] !== i || f[30] !== m || f[31] !== k
                ? ((s =
                    !m &&
                    (i ||
                      "pptx" === (0, g.Yg)(k) ||
                      x.isPastedText ||
                      (0, d.GV)(k) ||
                      (null == x.startLine && (0, $.uX)(k)))),
                  (f[27] = x.isPastedText),
                  (f[28] = x.startLine),
                  (f[29] = i),
                  (f[30] = m),
                  (f[31] = k),
                  (f[32] = s))
                : (s = f[32]),
              (o = s),
              f[33] !== x.sharedThread ||
              f[34] !== x.startLine ||
              f[35] !== v ||
              f[36] !== y ||
              f[37] !== i ||
              f[38] !== m ||
              f[39] !== o ||
              f[40] !== k ||
              f[41] !== I
                ? ((r = (e) => {
                    if (null != x.sharedThread)
                      return void (0, M.PQ)({
                        event: e,
                        href: `https://chatgpt.com/s/${encodeURIComponent(x.sharedThread.shareId)}`,
                        initiator: "open_in_browser_bridge",
                      })
                    if (!k) return
                    let t = x.startLine
                    ;(0, R.openWorkspaceFile)({
                      scope: I,
                      path: k,
                      line: t,
                      column: null == t ? void 0 : 1,
                      cwd: v,
                      hostId: y,
                      attachmentPreviewOrigin: i ? "sent-message" : void 0,
                      isAttachmentPreview: i,
                      openInSidePanel: o,
                      target: m ? "fileManager" : void 0,
                    })
                  }),
                  (f[33] = x.sharedThread),
                  (f[34] = x.startLine),
                  (f[35] = v),
                  (f[36] = y),
                  (f[37] = i),
                  (f[38] = m),
                  (f[39] = o),
                  (f[40] = k),
                  (f[41] = I),
                  (f[42] = r))
                : (r = f[42]),
              (n = r),
              (t = C.m),
              (u = (0, en.N)(x.label, l)),
              (f[8] = x),
              (f[9] = v),
              (f[10] = y),
              (f[11] = b),
              (f[12] = k),
              (f[13] = I),
              (f[14] = t),
              (f[15] = n),
              (f[16] = i),
              (f[17] = l),
              (f[18] = o),
              (f[19] = u))
          } else ((t = f[14]), (n = f[15]), (i = f[16]), (l = f[17]), (o = f[18]), (u = f[19]))
          let S = k ? n : void 0,
            N = i ? "card" : "pill"
          f[43] !== t || f[44] !== x.path || f[45] !== i || f[46] !== l || f[47] !== u || f[48] !== S || f[49] !== N
            ? ((m = (0, a.jsx)(t, {
                filename: u,
                resourcePath: x.path,
                lineInfo: l,
                onClick: S,
                layout: N,
                showOpenAffordance: i,
                variant: "thread",
              })),
              (f[43] = t),
              (f[44] = x.path),
              (f[45] = i),
              (f[46] = l),
              (f[47] = u),
              (f[48] = S),
              (f[49] = N),
              (f[50] = m))
            : (m = f[50])
          let T = m
          if (!k || null != x.sharedThread) return T
          let _ = i ? "sent-message" : void 0
          return (
            f[51] !== T
              ? ((p = (0, a.jsx)("span", { className: "inline-flex max-w-full", children: T })),
                (f[51] = T),
                (f[52] = p))
              : (p = f[52]),
            f[53] !== x.endLine ||
            f[54] !== x.startLine ||
            f[55] !== v ||
            f[56] !== y ||
            f[57] !== i ||
            f[58] !== o ||
            f[59] !== k ||
            f[60] !== _ ||
            f[61] !== p
              ? ((h = (0, a.jsx)(P.S, {
                  attachmentPreviewOrigin: _,
                  cwd: v,
                  endLine: x.endLine,
                  hostId: y,
                  isAttachmentPreview: i,
                  line: x.startLine,
                  openInSidePanel: o,
                  path: k,
                  children: p,
                })),
                (f[53] = x.endLine),
                (f[54] = x.startLine),
                (f[55] = v),
                (f[56] = y),
                (f[57] = i),
                (f[58] = o),
                (f[59] = k),
                (f[60] = _),
                (f[61] = p),
                (f[62] = h))
              : (h = f[62]),
            h
          )
        },
        hA: function (e) {
          let t,
            n = (0, s.c)(2),
            { pullRequestNumber: i } = e
          return (
            n[0] !== i
              ? ((t = (0, a.jsx)(b.x, {
                  Icon: F.A,
                  children: (0, a.jsx)(p.A, {
                    id: "codex.userMessage.pullRequestMergeTask",
                    defaultMessage: "PR #{number}",
                    description: "Pill shown on a user message for a pull request merge task",
                    values: { number: i },
                  }),
                })),
                (n[0] = i),
                (n[1] = t))
              : (t = n[1]),
            t
          )
        },
        im: es,
      },
    )
  },
  gtGM(e, t, n) {
    let a = /\bsite:([^\s]+)/giu,
      s = /\bOR\b/gu
    function i(e) {
      let t = [],
        n = e.replace(a, (e, n) => {
          let a = (function (e) {
            try {
              return new URL(`https://${e}`).hostname.replace(/^www\./u, "")
            } catch {
              return null
            }
          })(n)
          return null == a ? e : (t.includes(a) || t.push(a), "")
        })
      if (0 === t.length) return e
      let i = n.replace(s, " ").replace(/\s+/gu, " ").trim()
      return 0 === i.length ? e : `${i} | ${t.join(" · ")}`
    }
    n.d(
      t,
      {},
      {
        Q: function (e, t) {
          if (e) {
            let t = (function (e) {
              switch (e.type) {
                case "search":
                  return (function (e, t) {
                    let n = e?.trim() ?? ""
                    if (n) return i(n)
                    let a = t?.map((e) => e.trim()).find((e) => e.length > 0) ?? ""
                    return t && t.length > 1 && a ? `${i(a)} ...` : i(a)
                  })(e.query, e.queries)
                case "openPage":
                  return e.url ?? ""
                case "findInPage":
                  if (e.pattern && e.url) return `'${e.pattern}' in ${e.url}`
                  if (e.pattern) return `'${e.pattern}'`
                  if (e.url) return e.url
                  return ""
                case "other":
                  return ""
              }
            })(e).trim()
            if (t.length > 0) return t
          }
          return t
        },
      },
    )
  },
  YoMb(e, t, n) {
    var a = n("ABep"),
      s = n("QosV"),
      i = n("zd8w"),
      l = n("oyxz"),
      o = n("uKpQ"),
      r = n("BI7J"),
      c = n("umSm"),
      d = n("q5qu"),
      u = n("rPK8"),
      m = n("gtGM")
    function p(e) {
      return (0, a.jsx)("span", { className: "text-text-tertiary/90 group-hover:text-default", children: e })
    }
    function h(e) {
      return (0, a.jsx)("span", { className: "text-text/40 group-hover:text-default", children: e })
    }
    n.d(
      t,
      {},
      {
        B: function (e) {
          let t,
            n,
            f,
            g,
            x = (0, s.c)(20),
            { icon: v, item: y } = e,
            w = (0, i.useContext)(o.d),
            b = y.query ?? ""
          x[0] !== y.action || x[1] !== b
            ? ((t = (0, m.Q)(y.action, b).trim()), (x[0] = y.action), (x[1] = b), (x[2] = t))
            : (t = x[2])
          let C = t,
            j = C.length > 0,
            A = y.completed ? "completed" : "inProgress"
          if (null != y.title) {
            let e
            ;(x[3] !== y.title
              ? ((e = (0, a.jsx)("span", {
                  className: "text-text-tertiary/90 group-hover:text-default",
                  children: y.title,
                })),
                (x[3] = y.title),
                (x[4] = e))
              : (e = x[4]),
              (n = e))
          } else if (j) {
            let e
            ;(x[5] !== C || x[6] !== A
              ? ((e = (0, a.jsx)(l.A, {
                  id: "codex.webSearch.summary.withDetail",
                  defaultMessage:
                    "{status, select, completed {<label>Searched the web</label> <detailText>for {detail}</detailText>} other {<label>Searching the web</label> <detailText>for {detail}</detailText>}}",
                  description:
                    "Summary line for a web search with a detail such as a query, URL, or find pattern. The status selects the complete completed or in-progress phrase.",
                  values: { detail: C, detailText: h, label: p, status: A },
                })),
                (x[5] = C),
                (x[6] = A),
                (x[7] = e))
              : (e = x[7]),
              (n = e))
          } else {
            let e
            ;(x[8] !== A
              ? ((e = (0, a.jsx)("span", {
                  className: "text-text-tertiary/90 group-hover:text-default",
                  children: (0, a.jsx)(l.A, {
                    id: "codex.webSearch.summary.withoutDetail",
                    defaultMessage: "{status, select, completed {Searched the web} other {Searching the web}}",
                    description:
                      "Summary line for a web search without details. The status selects the complete completed or in-progress phrase.",
                    values: { status: A },
                  }),
                })),
                (x[8] = A),
                (x[9] = e))
              : (e = x[9]),
              (n = e))
          }
          if (w && y.title && j && C !== y.title) {
            let e
            return (
              x[10] !== C || x[11] !== v || x[12] !== y.title
                ? ((e = (0, a.jsx)(u.e, { icon: v, label: y.title, children: C })),
                  (x[10] = C),
                  (x[11] = v),
                  (x[12] = y.title),
                  (x[13] = e))
                : (e = x[13]),
              e
            )
          }
          let I = !y.completed
          x[14] !== n || x[15] !== I
            ? ((f = (0, a.jsx)(c.N, { active: I, className: "min-w-0 truncate text-size-chat", children: n })),
              (x[14] = n),
              (x[15] = I),
              (x[16] = f))
            : (f = x[16])
          let k = f
          return (
            x[17] !== v || x[18] !== k
              ? ((g =
                  void 0 === v
                    ? (0, a.jsx)(d.D, {
                        padding: "offset",
                        children: (0, a.jsx)("div", {
                          className: "group flex min-w-0 items-center gap-2",
                          children: k,
                        }),
                      })
                    : (0, a.jsx)(r.o, { icon: v, summary: k })),
                (x[17] = v),
                (x[18] = k),
                (x[19] = g))
              : (g = x[19]),
            g
          )
        },
      },
    )
  },
  i01N(e, t, n) {
    var a = n("ABep"),
      s = n("QosV"),
      i = n("IgxH"),
      l = n("WB4T")
    n.d(
      t,
      {},
      {
        U: function (e) {
          let t,
            n,
            o = (0, s.c)(9),
            { replies: r, cwd: c, hostId: d } = e
          if (o[0] !== c || o[1] !== d || o[2] !== r) {
            let e
            ;(o[4] !== c || o[5] !== d
              ? ((e = (e) => {
                  let { questionItemId: t, question: n, answer: s } = e,
                    o = (0, i.i)(n)
                  return (0, a.jsxs)(
                    "div",
                    {
                      className: "flex flex-col gap-1",
                      children: [
                        (0, a.jsx)("span", { className: "truncate opacity-70", title: o, children: o }),
                        (0, a.jsx)(l.L, { cwd: c, hostId: d, text: s }),
                      ],
                    },
                    t,
                  )
                }),
                (o[4] = c),
                (o[5] = d),
                (o[6] = e))
              : (e = o[6]),
              (t = r.map(e)),
              (o[0] = c),
              (o[1] = d),
              (o[2] = r),
              (o[3] = t))
          } else t = o[3]
          return (
            o[7] !== t
              ? ((n = (0, a.jsx)("div", { className: "flex flex-col gap-3 text-size-chat", children: t })),
                (o[7] = t),
                (o[8] = n))
              : (n = o[8]),
            n
          )
        },
      },
    )
  },
  ixMX(e, t, n) {
    var a = n("DBCl")
    let s = (0, n("Qgfj").YK)({
      defaultName: {
        id: "localConversation.subagentActivity.defaultName",
        defaultMessage: "Agent",
        description: "Fallback name for a subagent when no specific name is available",
      },
      startedWorking: {
        id: "localConversation.subagentActivity.summary.startedWorking",
        defaultMessage: "{displayName} started working",
        description: "Subagent activity summary shown when a subagent starts working",
      },
      updated: {
        id: "localConversation.subagentActivity.summary.updated",
        defaultMessage: "{displayName} updated",
        description: "Subagent activity summary shown when a subagent reports an update",
      },
      interrupted: {
        id: "localConversation.subagentActivity.summary.interrupted",
        defaultMessage: "{displayName} interrupted",
        description: "Subagent activity summary shown when a subagent is interrupted",
      },
      completed: {
        id: "localConversation.subagentActivity.summary.completed",
        defaultMessage: "{displayName} finished",
        description: "Subagent activity summary shown when a subagent finishes successfully",
      },
      openSubagent: {
        id: "localConversation.subagentActivity.openSubagent",
        defaultMessage: "Open {displayName} subagent",
        description: "Accessible label for opening a subagent activity row",
      },
    })
    function i(e) {
      return e.some((e) => "interrupted" === e)
        ? "interrupted"
        : e.some((e) => "updated" === e)
          ? "updated"
          : e.length > 0 && e.every((e) => "completed" === e || "done" === e)
            ? "completed"
            : "active"
    }
    function l({ activityItems: e, backgroundAgentById: t, laterActivityConversationIds: n, turnKey: s }) {
      let i = new Map()
      for (let t of e) i.set((0, a.JXB)(t.agentThreadId), t)
      return Array.from(i).flatMap(([e, a]) => {
        let i,
          l = t.get(e),
          o = l?.parentTurnKey === s,
          r = o && !n.has(e),
          c =
            o && l?.showInlineActivity === !1
              ? l.displayName
              : null != a.displayName && a.displayName.trim().length > 0
                ? a.displayName
                : l?.displayName
        return null == c || 0 === c.trim().length || c.trim() === a.agentThreadId
          ? []
          : [
              {
                activityStatus:
                  "done" ===
                    (i =
                      null == l
                        ? "completed" === a.displayStatus || "interrupted" === a.displayStatus
                          ? "done"
                          : "active"
                        : o
                          ? l.status
                          : "done") && r
                    ? "done"
                    : a.displayStatus,
                canOpen: null != l || "active" === a.displayStatus,
                conversationId: e,
                displayName: c,
                status: i,
              },
            ]
      })
    }
    function o(e, t) {
      return { anchorItemId: e, rows: t, status: i(t.map((e) => e.activityStatus)) }
    }
    n.d(
      t,
      {},
      {
        Kg: function (e, t, n) {
          switch (n) {
            case "active":
              return e.formatMessage(s.startedWorking, { displayName: t })
            case "updated":
              return e.formatMessage(s.updated, { displayName: t })
            case "interrupted":
              return e.formatMessage(s.interrupted, { displayName: t })
            case "completed":
              return e.formatMessage(s.completed, { displayName: t })
          }
        },
        QD: function ({ activityItemGroups: e, backgroundAgents: t, turnKey: n, excludedSubagentThreadIds: s }) {
          let i = t
            .filter(
              (e) =>
                !s?.has(e.conversationId) &&
                e.parentTurnKey === n &&
                e.displayName.trim().length > 0 &&
                e.displayName.trim() !== e.conversationId,
            )
            .map((e) => ({
              activityStatus: "done" === e.status ? "done" : "active",
              canOpen: !0,
              conversationId: e.conversationId,
              displayName: e.displayName,
              status: e.status,
            }))
          if (0 === e.length) return 0 === i.length ? [] : [o(null, i)]
          let r = new Map(t.map((e) => [e.conversationId, e])),
            c = new Set(),
            d = []
          for (let t = e.length - 1; t >= 0; t -= 1) {
            let i = e[t].filter((e) => !s?.has(e.agentThreadId))
            for (let e of (d.push(
              o(
                i[0]?.id ?? null,
                l({ activityItems: i, backgroundAgentById: r, laterActivityConversationIds: c, turnKey: n }),
              ),
            ),
            i))
              c.add((0, a.JXB)(e.agentThreadId))
          }
          let u = d.reverse().filter((e) => e.rows.length > 0),
            m = i.filter((e) => !c.has(e.conversationId))
          return 0 === m.length ? u : [...u, o(null, m)]
        },
        Zg: function (e, t) {
          return t ?? e.formatMessage(s.defaultName)
        },
        e: function (e, t, n) {
          let s = new Set([
            ...t
              .filter(
                (e) =>
                  e.parentTurnKey === n && e.displayName.trim().length > 0 && e.displayName.trim() !== e.conversationId,
              )
              .map((e) => e.conversationId),
            ...e.flatMap((e) => {
              if (
                "subagent-activity" !== e.type ||
                e.isMessage ||
                null == e.displayName ||
                0 === e.displayName.trim().length ||
                e.displayName.trim() === e.agentThreadId
              )
                return []
              let s = (0, a.JXB)(e.agentThreadId),
                i = t.find((e) => e.conversationId === s && e.parentTurnKey === n)
              return i?.showInlineActivity === !1 && 0 === i.displayName.trim().length ? [] : [s]
            }),
          ])
          return 0 === s.size
            ? e
            : e.filter(
                (e) =>
                  "multi-agent-action" !== e.type ||
                  "spawnAgent" !== e.action ||
                  "completed" !== e.status ||
                  (null != e.prompt && e.prompt.trim().length > 0) ||
                  0 === e.receiverThreads.length ||
                  !e.receiverThreads.every(({ threadId: e }) => s.has((0, a.JXB)(e))),
              )
        },
        ft: l,
        j3: function (e, t) {
          return e.formatMessage(s.openSubagent, { displayName: t })
        },
        wI: i,
      },
    )
  },
  oaEd(e, t, n) {
    var a = n("ABep"),
      s = n("QosV"),
      i = n("JIuM"),
      l = n("LhhH")
    n.d(
      t,
      {},
      {
        q: function (e) {
          let t,
            n,
            o,
            r = (0, s.c)(9),
            { sender: c } = e,
            d = (0, i.Dv)(c.profilePictureUrl),
            u = c.name || c.email
          return (
            r[0] !== u || r[1] !== d || r[2] !== c.accountUserId
              ? ((t = (0, a.jsx)(l.e, { alt: "", colorKey: c.accountUserId, name: u, size: "xs", src: d })),
                (r[0] = u),
                (r[1] = d),
                (r[2] = c.accountUserId),
                (r[3] = t))
              : (t = r[3]),
            r[4] !== u
              ? ((n = (0, a.jsx)("span", { className: "truncate", title: u, children: u })), (r[4] = u), (r[5] = n))
              : (n = r[5]),
            r[6] !== t || r[7] !== n
              ? ((o = (0, a.jsxs)("div", {
                  className: "flex max-w-full min-w-0 items-center gap-1.5 text-sm text-codex-description",
                  children: [t, n],
                })),
                (r[6] = t),
                (r[7] = n),
                (r[8] = o))
              : (o = r[8]),
            o
          )
        },
      },
    )
  },
  IufW(e, t, n) {
    var a = n("ABep"),
      s = n("QosV"),
      i = n("LIss"),
      l = n("zTeN"),
      o = n("T1PX"),
      r = n("FOks")
    let c = {
      hidden: { opacity: 0, y: 4 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
    }
    n.d(
      t,
      {},
      {
        r: function (e) {
          let t,
            n,
            d = (0, s.c)(10),
            { ref: u, children: m, className: p, reveal: h, colors: f } = e,
            g = (0, o.I)(),
            x = (0, l._U)(null != f && r.X, null) ? void 0 : f,
            v = x?.background,
            y = x?.foreground,
            w = x?.foreground
          d[0] !== v || d[1] !== y || d[2] !== w
            ? ((t = {
                "--compact-message-bubble-background": v,
                "--compact-message-bubble-foreground": y,
                "--color-text-user-message": w,
              }),
              (d[0] = v),
              (d[1] = y),
              (d[2] = w),
              (d[3] = t))
            : (t = d[3])
          let b = t,
            C = !!h && !g && "hidden"
          return (
            d[4] !== m || d[5] !== p || d[6] !== u || d[7] !== b || d[8] !== C
              ? ((n = (0, a.jsx)(i.P.div, {
                  ref: u,
                  className: p,
                  style: b,
                  animate: "visible",
                  initial: C,
                  variants: c,
                  children: m,
                })),
                (d[4] = m),
                (d[5] = p),
                (d[6] = u),
                (d[7] = b),
                (d[8] = C),
                (d[9] = n))
              : (n = d[9]),
            n
          )
        },
      },
    )
  },
  pd2I(e, t, n) {
    var a = n("ABep"),
      s = n("QosV"),
      i = n("UGuw"),
      l = n("LtWU"),
      o = n("TNbF"),
      r = n("mVbd"),
      c = n("on57"),
      d = n("zTeN"),
      u = n("DBCl"),
      m = n("zd8w"),
      p = n("Wf1j"),
      h = n("oyxz"),
      f = n("rljs"),
      g = n("tl5a"),
      x = n("Sm6l"),
      v = n("HOLv"),
      y = n("bVeK"),
      w = n("RNul"),
      b = n("FOks"),
      C = n("OWtl"),
      j = n("Oj9r"),
      A = n("PtcT"),
      I = n("gGps"),
      k = n("oz6U"),
      M = n("IufW"),
      S = n("cabL"),
      N = n("TJMx"),
      T = n("EgLy"),
      _ = n("E2ja"),
      R = n("wbP4"),
      P = n("NyQh"),
      L = n("HgAn"),
      D = n("lbOW"),
      F = n("qvkX")
    let E = { needsInput: o.F, interrupted: r.G, failed: l.A, unavailable: i.l },
      O = (0, d.i1)(
        C.u,
        (e, { get: t }) => {
          let n = t(g.pC, { hostId: e.hostId, conversationId: e.threadId }),
            a = t(g.HX, e) ?? n?.title ?? null,
            s = t(g.M5, e),
            i = s?.threadRuntimeStatus ?? n?.threadRuntimeStatus,
            l = s?.lastTurnId == null ? null : s.lastTurnStatus
          return {
            title: a,
            status: (0, T.LK)(i, l),
            isConnected: t(f.EX, e.hostId) && "connected" === t(f.y2, e.hostId),
          }
        },
        {
          isEqual: (e, t) => e.title === t.title && e.status === t.status && e.isConnected === t.isConnected,
          owner: (e) => e.threadId,
        },
      )
    function U(e) {
      let t,
        n,
        i = (0, s.c)(11),
        { attachments: l, hostId: o, parentConversationId: r, variant: c } = e
      if (i[0] !== l || i[1] !== o || i[2] !== r || i[3] !== c) {
        let e
        ;(i[5] !== o || i[6] !== r || i[7] !== c
          ? ((e = (e, t) => {
              let n =
                null == e.automationId
                  ? `${e.conversationId ?? e.threadId}:${String(t)}`
                  : `automation:${e.automationId}`
              return null == e.threadId
                ? (0, a.jsx)(S.j, { automationId: e.automationId, conversationId: e.conversationId }, n)
                : (0, a.jsx)(
                    B,
                    {
                      automationId: e.automationId,
                      hostId: o,
                      parentConversationId: r,
                      prompt: e.threadId,
                      threadId: e.threadId,
                      variant: c,
                    },
                    n,
                  )
            }),
            (i[5] = o),
            (i[6] = r),
            (i[7] = c),
            (i[8] = e))
          : (e = i[8]),
          (t = (0, P.L)(l).map(e)),
          (i[0] = l),
          (i[1] = o),
          (i[2] = r),
          (i[3] = c),
          (i[4] = t))
      } else t = i[4]
      return (i[9] !== t ? ((n = (0, a.jsx)(a.Fragment, { children: t })), (i[9] = t), (i[10] = n)) : (n = i[10]), n)
    }
    function B(e) {
      let t,
        n,
        i,
        l,
        o,
        r,
        c,
        f,
        g,
        v,
        w,
        b,
        C,
        A,
        k,
        M,
        S,
        _,
        P = (0, s.c)(90),
        { automationId: F, hostId: E, parentConversationId: U, prompt: B, threadId: V, variant: $, onClick: K } = e,
        Z = void 0 === $ ? "standalone" : $,
        Q = (0, d.gh)(j.GD),
        J = (0, p.A)()
      P[0] !== V ? ((t = (0, u.JXB)(V)), (P[0] = V), (P[1] = t)) : (t = P[1])
      let Y = t,
        [X, ee] = (0, m.useState)(!1)
      ;(P[2] !== Y || P[3] !== E ? ((n = { hostId: E, threadId: Y }), (P[2] = Y), (P[3] = E), (P[4] = n)) : (n = P[4]),
        P[5] !== X ? ((i = { enabled: X }), (P[5] = X), (P[6] = i)) : (i = P[6]))
      let { data: et, isError: en } = (0, d._U)(T.Jr, n, i)
      P[7] !== Y || P[8] !== E ? ((l = { hostId: E, threadId: Y }), (P[7] = Y), (P[8] = E), (P[9] = l)) : (l = P[9])
      let { title: ea, status: es, isConnected: ei } = (0, d._U)(O, l),
        el = et?.status ?? es,
        eo = !ei || en ? "unavailable" : el
      P[10] !== Y || P[11] !== E
        ? ((o = { hostId: E, threadId: Y }), (P[10] = Y), (P[11] = E), (P[12] = o))
        : (o = P[12])
      let er = "standalone" === Z && X && "completed" === el && !en
      P[13] !== er ? ((r = { enabled: er }), (P[13] = er), (P[14] = r)) : (r = P[14])
      let { data: ec } = (0, d._U)(N.N, o, r),
        ed = (0, D.n)(F),
        eu = ed.attachment
      P[15] !== eu?.title || P[16] !== J || P[17] !== et?.title || P[18] !== B || P[19] !== ea || P[20] !== Z
        ? ((c =
            eu?.title ??
            ea ??
            et?.title ??
            ("attached" === Z
              ? J.formatMessage({
                  id: "codex.localConversation.createdTasks.untitled",
                  defaultMessage: "Created task",
                  description: "Fallback name for a task created by the current task before its title is available",
                })
              : B)),
          (P[15] = eu?.title),
          (P[16] = J),
          (P[17] = et?.title),
          (P[18] = B),
          (P[19] = ea),
          (P[20] = Z),
          (P[21] = c))
        : (c = P[21])
      let em = c
      P[22] !== eu
        ? ((f = eu?.emoji == null ? null : (0, a.jsx)(R.M, { emoji: eu.emoji })), (P[22] = eu), (P[23] = f))
        : (f = P[23])
      let ep = f,
        eh = null != ec && "completed" === eo,
        ef = (0, m.useId)()
      P[24] !== Y || P[25] !== E || P[26] !== X || P[27] !== Q
        ? ((g = function (e) {
            if (null == e) return
            let t = new IntersectionObserver((e) => {
              let t = e.some(z),
                n = { hostId: E, threadId: Y }
              if (t && !X && Q.get(O, n).isConnected) {
                let e = Q.get(T.Jr, n, { enabled: !1 })
                e.isError && e.refetch()
              }
              ee(t)
            })
            return (t.observe(e), () => t.disconnect())
          }),
          (P[24] = Y),
          (P[25] = E),
          (P[26] = X),
          (P[27] = Q),
          (P[28] = g))
        : (g = P[28])
      let eg = g
      P[29] !== Y || P[30] !== E || P[31] !== K || P[32] !== Q || P[33] !== em
        ? ((v =
            K ??
            (() => {
              ;(0, L.E)(Q, { hostId: E, threadId: Y }, em)
            })),
          (P[29] = Y),
          (P[30] = E),
          (P[31] = K),
          (P[32] = Q),
          (P[33] = em),
          (P[34] = v))
        : (v = P[34])
      let ex = v
      if ("attached" === Z) {
        let e, t, n, s, i, l, o, r, c
        return (
          P[35] !== ed || P[36] !== ex
            ? ((e = () => ed.open(ex)), (P[35] = ed), (P[36] = ex), (P[37] = e))
            : (e = P[37]),
          P[38] !== ep || P[39] !== U || P[40] !== eo
            ? ((t = ep ?? (0, a.jsx)(q, { parentConversationId: U, status: eo })),
              (P[38] = ep),
              (P[39] = U),
              (P[40] = eo),
              (P[41] = t))
            : (t = P[41]),
          P[42] !== em
            ? ((n = (0, a.jsx)("span", { className: "min-w-0 flex-1 truncate", children: em })),
              (P[42] = em),
              (P[43] = n))
            : (n = P[43]),
          P[44] !== eo ? ((s = (0, a.jsx)(W, { status: eo })), (P[44] = eo), (P[45] = s)) : (s = P[45]),
          P[46] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = (0, a.jsx)(y.uM3, { className: "text-tertiary" })), (P[46] = i))
            : (i = P[46]),
          P[47] !== ed.isOpening ||
          P[48] !== ef ||
          P[49] !== e ||
          P[50] !== t ||
          P[51] !== n ||
          P[52] !== s ||
          P[53] !== em
            ? ((l = (0, a.jsxs)("button", {
                type: "button",
                className:
                  "flex w-full min-w-0 cursor-interaction items-center gap-1.5 border-0 bg-transparent px-3 py-2.5 text-start text-size-chat leading-5 select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset",
                "aria-describedby": ef,
                title: em,
                "aria-busy": ed.isOpening,
                disabled: ed.isOpening,
                onClick: e,
                children: [t, n, s, i],
              })),
              (P[47] = ed.isOpening),
              (P[48] = ef),
              (P[49] = e),
              (P[50] = t),
              (P[51] = n),
              (P[52] = s),
              (P[53] = em),
              (P[54] = l))
            : (l = P[54]),
          P[55] !== eo ? ((o = (0, a.jsx)(H, { status: eo })), (P[55] = eo), (P[56] = o)) : (o = P[56]),
          P[57] !== ef || P[58] !== o
            ? ((r = (0, a.jsx)("span", { id: ef, className: "sr-only", "aria-live": "polite", children: o })),
              (P[57] = ef),
              (P[58] = o),
              (P[59] = r))
            : (r = P[59]),
          P[60] !== eg || P[61] !== l || P[62] !== r
            ? ((c = (0, a.jsxs)("div", { ref: eg, className: "w-full min-w-0", children: [l, r] })),
              (P[60] = eg),
              (P[61] = l),
              (P[62] = r),
              (P[63] = c))
            : (c = P[63]),
          c
        )
      }
      return (
        P[64] !== ed || P[65] !== ex ? ((w = () => ed.open(ex)), (P[64] = ed), (P[65] = ex), (P[66] = w)) : (w = P[66]),
        P[67] !== em
          ? ((b = (0, a.jsx)("span", { className: "max-w-72 min-w-0 truncate text-default", children: em })),
            (P[67] = em),
            (P[68] = b))
          : (b = P[68]),
        P[69] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, a.jsx)(y.uM3, { className: "text-tertiary" })), (P[69] = C))
          : (C = P[69]),
        P[70] !== ep || P[71] !== ed.isOpening || P[72] !== w || P[73] !== b || P[74] !== em
          ? ((A = (0, a.jsxs)(x.$, {
              className: "max-w-full",
              allowShrink: !0,
              color: "outlineSurface",
              size: "large",
              title: em,
              "aria-busy": ed.isOpening,
              disabled: ed.isOpening,
              onClick: w,
              children: [ep, b, C],
            })),
            (P[70] = ep),
            (P[71] = ed.isOpening),
            (P[72] = w),
            (P[73] = b),
            (P[74] = em),
            (P[75] = A))
          : (A = P[75]),
        P[76] !== U || P[77] !== eh
          ? ((k = eh ? null : (0, a.jsx)(I.I, { className: "icon-sm", conversationId: U })),
            (P[76] = U),
            (P[77] = eh),
            (P[78] = k))
          : (k = P[78]),
        P[79] !== ec || P[80] !== eh || P[81] !== eo
          ? ((M = eh
              ? (0, a.jsx)(h.A, {
                  id: "restricted.aeonCreatedThread.replyCount",
                  defaultMessage:
                    "{isComplete, select, true {{count, plural, one {# reply} other {# replies}}} other {{count, number}+ replies}}",
                  description:
                    "Number of conversation messages in a dot task, including its opening request but excluding progress updates. When history is incomplete, plus indicates more messages may exist.",
                  values: { count: ec.count, isComplete: ec.isComplete },
                })
              : (0, a.jsx)(G, { status: eo })),
            (P[79] = ec),
            (P[80] = eh),
            (P[81] = eo),
            (P[82] = M))
          : (M = P[82]),
        P[83] !== k || P[84] !== M
          ? ((S = (0, a.jsxs)("span", {
              className: "flex shrink-0 items-center gap-2 text-base whitespace-nowrap text-secondary",
              "aria-live": "polite",
              children: [k, M],
            })),
            (P[83] = k),
            (P[84] = M),
            (P[85] = S))
          : (S = P[85]),
        P[86] !== eg || P[87] !== A || P[88] !== S
          ? ((_ = (0, a.jsxs)("div", {
              ref: eg,
              className: "flex w-fit max-w-full items-center gap-2 select-none",
              children: [A, S],
            })),
            (P[86] = eg),
            (P[87] = A),
            (P[88] = S),
            (P[89] = _))
          : (_ = P[89]),
        _
      )
    }
    function z(e) {
      return e.isIntersecting
    }
    function q(e) {
      let t,
        n,
        i = (0, s.c)(9),
        { parentConversationId: l, status: o } = e,
        r = (0, d._U)(k.Hx, l) ?? k.ZX
      if ("thinking" === o || "inProgress" === o) {
        let e,
          n,
          s = A.zL[r.color]
        ;(i[0] !== s.accentClassName
          ? ((e = (0, c.A)("icon-sm", s.accentClassName)), (i[0] = s.accentClassName), (i[1] = e))
          : (e = i[1]),
          i[2] !== e ? ((n = (0, a.jsx)(w.y, { as: "span", className: e })), (i[2] = e), (i[3] = n)) : (n = i[3]),
          (t = n))
      } else if ("completed" === o) {
        let e
        ;(i[4] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, a.jsx)(y.gL9, {})), (i[4] = e)) : (e = i[4]),
          (t = e))
      } else {
        let e,
          n = E[o]
        ;(i[5] !== n ? ((e = (0, a.jsx)(v.I, { asset: n })), (i[5] = n), (i[6] = e)) : (e = i[6]), (t = e))
      }
      return (
        i[7] !== t
          ? ((n = (0, a.jsx)("span", {
              "aria-hidden": !0,
              className: "inline-flex shrink-0 items-center",
              children: t,
            })),
            (i[7] = t),
            (i[8] = n))
          : (n = i[8]),
        n
      )
    }
    function W(e) {
      let t,
        n = (0, s.c)(2),
        { status: i } = e
      return "thinking" === i || "inProgress" === i || "completed" === i
        ? null
        : (n[0] !== i
            ? ((t = (0, a.jsx)("span", {
                "aria-hidden": !0,
                className:
                  "shrink-0 rounded-[4px] bg-text/4 px-1 py-0 text-xs leading-[18px] font-normal tracking-[-0.12px] whitespace-nowrap text-secondary",
                children: (0, a.jsx)(H, { status: i }),
              })),
              (n[0] = i),
              (n[1] = t))
            : (t = n[1]),
          t)
    }
    function H(e) {
      let t,
        n = (0, s.c)(2),
        { status: i } = e
      return (
        n[0] !== i
          ? ((t = (0, a.jsx)(h.A, {
              id: "restricted.aeonCreatedThread.attachedStatus",
              defaultMessage:
                "{status, select, thinking {Thinking…} inProgress {Working…} needsInput {Need attention} completed {Done} interrupted {Stopped} failed {Error} unavailable {Unavailable} other {}}",
              description:
                "Short status of a cloud task attached to a compact dot message. Need attention means the task is waiting for user input or approval. Unavailable means its host is disconnected or its status could not be retrieved.",
              values: { status: i },
            })),
            (n[0] = i),
            (n[1] = t))
          : (t = n[1]),
        t
      )
    }
    function G(e) {
      let t,
        n = (0, s.c)(2),
        { status: i } = e
      return (
        n[0] !== i
          ? ((t = (0, a.jsx)(h.A, {
              id: "restricted.aeonCreatedThread.status",
              defaultMessage:
                "{status, select, thinking {Thinking…} working {Working…} inProgress {Working…} needsInput {Needs input} completed {Done} interrupted {Stopped} failed {Failed} unavailable {Status unavailable} other {}}",
              description:
                "Current status of a cloud task created by a dot. Thinking is shown while waiting for its first turn status. Status unavailable means its host is not connected or its execution metadata could not be retrieved.",
              values: { status: i },
            })),
            (n[0] = i),
            (n[1] = t))
          : (t = n[1]),
        t
      )
    }
    n.d(
      t,
      {},
      {
        c0: function (e) {
          let t,
            n,
            i = (0, s.c)(8),
            { hostId: l, parentConversationId: o, threads: r } = e,
            u = (0, d._U)(b.X, o),
            m = u ? "attached" : "standalone"
          i[0] !== l || i[1] !== o || i[2] !== m || i[3] !== r
            ? ((t = (0, a.jsx)(U, { attachments: r, hostId: l, parentConversationId: o, variant: m })),
              (i[0] = l),
              (i[1] = o),
              (i[2] = m),
              (i[3] = r),
              (i[4] = t))
            : (t = i[4])
          let p = t
          return (
            i[5] !== p || i[6] !== u
              ? ((n = u
                  ? (0, a.jsx)(M.r, {
                      className: (0, c.A)(F.A.compactMessageBubble, F.A.compactMessageBubbleWithAttachment),
                      reveal: !1,
                      children: (0, a.jsx)("div", { className: "divide-y-2 divide-surface", children: p }),
                    })
                  : (0, a.jsx)("div", { className: "flex flex-col gap-4", children: p })),
                (i[5] = p),
                (i[6] = u),
                (i[7] = n))
              : (n = i[7]),
            n
          )
        },
        sU: U,
        w$: function (e) {
          let t,
            n,
            i = (0, s.c)(9),
            { activities: l, hostId: o, parentConversationId: r } = e
          if (i[0] !== l || i[1] !== o) {
            let e
            ;(i[3] !== o
              ? ((e = (e) => {
                  let { item: t } = e,
                    n = "mcp-tool-call" === t.type ? (0, _.Ai)(t, o) : null
                  return n?.type === "attached-threads" ? n.threads : []
                }),
                (i[3] = o),
                (i[4] = e))
              : (e = i[4]),
              (t = l.flatMap(e)),
              (i[0] = l),
              (i[1] = o),
              (i[2] = t))
          } else t = i[2]
          let c = t
          return (
            i[5] !== c || i[6] !== o || i[7] !== r
              ? ((n = (0, a.jsx)("div", {
                  className: "divide-y-2 divide-surface",
                  children: (0, a.jsx)(U, { attachments: c, hostId: o, parentConversationId: r, variant: "attached" }),
                })),
                (i[5] = c),
                (i[6] = o),
                (i[7] = r),
                (i[8] = n))
              : (n = i[8]),
            n
          )
        },
      },
    )
  },
  TJMx(e, t, n) {
    var a = n("zTeN"),
      s = n("Ehlj"),
      i = n("IgxH"),
      l = n("eJd0"),
      o = n("Dgwo"),
      r = n("rljs"),
      c = n("CfsC"),
      d = n("dbK8"),
      u = n("rwp7"),
      m = n("Rfr9"),
      p = n("H7j2"),
      h = n("OWtl"),
      f = n("zrjP")
    let g = (0, a.vU)(
      h.u,
      (e, { get: t, scope: n }) => ({
        enabled: t(r.EX, e.hostId) && "connected" === t(r.y2, e.hostId),
        queryKey: ["aeon-created-thread-replies", e.hostId, e.threadId],
        queryFn: () =>
          (async function (e, t) {
            let n,
              a,
              r = (0, o.V)(e, t.hostId)
            if ((0, d.C)(t.hostId) || (0, s.qh)(e.get(c.B, t.hostId))) {
              let { data: e, nextCursor: s } = await r.sendRequest(
                "thread/items/list",
                { threadId: t.threadId, limit: 100, sortDirection: "desc" },
                { priority: "background", source: "thread_hydration" },
              )
              ;((n = e.map(({ item: e }) => e)), (a = null == s))
            } else {
              let { thread: s } = await e.query.fetch(f.I, t)
              ;((n = s.turns.flatMap((e) => e.items).reverse()), (a = !0))
            }
            let h = 0,
              g = null
            for (let e of n)
              if ("userMessage" !== e.type || (0, l.r0)(e.content)) {
                if ("agentMessage" === e.type && ("commentary" !== e.phase || "async" === e.delivery)) {
                  let { content: t } = (0, u.Dk)(e.text, !1)
                  t.trim().length > 0 &&
                    ("commentary" !== e.phase && (h += 1), null == g && (g = (0, i.i)(t).trim() || null))
                }
              } else {
                let t = (0, m.rF)({ input: e.content, clientUserMessageId: e.clientId, sentAtMs: null })
                ;(null == t ? e.content.length > 0 : (0, p.o$)(t)) && (h += 1)
              }
            return { count: h, isComplete: a, latestReply: g }
          })(n, e),
        retry: 1,
        staleTime: 3e4,
      }),
      { owner: (e) => e.threadId },
    )
    n.d(t, {}, { N: g })
  },
  fIHL(e, t, n) {
    var a = n("ABep"),
      s = n("QosV"),
      i = n("on57"),
      l = n("zTeN"),
      o = n("OZum"),
      r = n("oyxz"),
      c = n("Qgfj"),
      d = n("ZtSy"),
      u = n("FOks"),
      m = n("m22M"),
      p = n("gdZA"),
      h = n("q3j5"),
      f = n("Gn17")
    let g = (0, c.YK)({
      accepted: {
        id: "restricted.aeon.externalChannel.accepted",
        defaultMessage: "{provider} message accepted",
        description:
          "Status after a phone messaging provider accepts an outgoing message; provider is Phone when its transport is unknown, or iMessage or RCS when known. Acceptance does not confirm handset delivery",
      },
      incoming: {
        id: "restricted.aeon.externalChannel.from",
        defaultMessage: "Sent from {provider}",
        description: "Source label on the owner's external message; provider is a service name such as Slack",
      },
      sent: {
        id: "restricted.aeon.externalChannel.sent",
        defaultMessage: "Sent to {provider}",
        description:
          "Delivery label when the external service confirmed the dot's reply; provider is a service name such as Slack",
      },
      failed: {
        id: "restricted.aeon.externalChannel.sendFailed",
        defaultMessage: "Not sent to {provider}",
        description:
          "Delivery label when the external service rejected the reply; provider is a service name such as Slack",
      },
      unknown: {
        id: "restricted.aeon.externalChannel.sendUnknown",
        defaultMessage: "{provider} delivery unconfirmed",
        description:
          "Delivery label when the external service may have received the reply but did not confirm it; provider is a service name such as Slack",
      },
    })
    n.d(
      t,
      {},
      {
        Q: function (e) {
          let t,
            n,
            c,
            x,
            v,
            y,
            w = (0, s.c)(26),
            { conversationId: b, provider: C, channel: j, state: A } = e,
            I = (0, l._U)(u.X, b),
            k =
              "slack" === C &&
              ("incoming" === A || "sent" === A) &&
              (j?.id.startsWith("D") || ("sent" === A && /^[UW]/.test(j?.id ?? ""))),
            M = (0, l._U)(k ? m.N : void 0, b),
            S = (0, l._U)(k ? p.zQ : void 0, b),
            N = (0, l._U)(
              "slack" === C && "sent" === A && (j?.name == null || j?.teamId == null) && /^[CDG]/.test(j?.id ?? "")
                ? f.w
                : void 0,
              j?.id ?? "",
            )
          if (
            ("tibro" === C && ("incoming" === A || "sent" === A)) ||
            (I && "slack" !== C && ("incoming" === A || "sent" === A || "accepted" === A))
          )
            return null
          let T = j?.name ?? N?.name
          w[0] !== j || w[1] !== b || w[2] !== N?.teamId
            ? ((t = (e) => {
                if (null == j || !/^[CDG][A-Z0-9]+$/.test(j.id)) return e
                let t = new URLSearchParams({ channel: j.id }),
                  n = j.teamId ?? N?.teamId
                return (
                  null != n && t.set("team", n),
                  (0, a.jsx)(
                    d.G,
                    {
                      appearance: "secondary",
                      conversationId: b,
                      href: `https://slack.com/app_redirect?${t}`,
                      initiator: "external_link",
                      underline: "hover",
                      children: e,
                    },
                    "slack",
                  )
                )
              }),
              (w[0] = j),
              (w[1] = b),
              (w[2] = N?.teamId),
              (w[3] = t))
            : (t = w[3])
          let _ = t,
            R = g[A]
          ;(w[4] !== C ? ((n = (0, o.g)(C)), (w[4] = C), (w[5] = n)) : (n = w[5]),
            w[6] !== n ? ((c = { provider: n }), (w[6] = n), (w[7] = c)) : (c = w[7]),
            w[8] !== R || w[9] !== c
              ? ((x = (0, a.jsx)(r.A, { ...R, values: c })), (w[8] = R), (w[9] = c), (w[10] = x))
              : (x = w[10]))
          let P = x
          if (("incoming" === A || "sent" === A) && "slack" === C) {
            let e
            if (
              (w[11] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(r.A, {
                    id: "restricted.aeon.externalChannel.slackDestination",
                    defaultMessage: "Slack",
                    description:
                      "Label above a dot message received from or sent to Slack when its conversation is unknown",
                  })),
                  (w[11] = e))
                : (e = w[11]),
              (P = e),
              k)
            ) {
              let e,
                t,
                n = S ?? M
              w[12] !== n ? ((e = (0, h.x)(n)), (w[12] = n), (w[13] = e)) : (e = w[13])
              let s = !e
              ;(w[14] !== M || w[15] !== _ || w[16] !== s
                ? ((t = (0, a.jsx)(r.A, {
                    id: "restricted.aeon.externalChannel.orbitDmLink",
                    defaultMessage: "<slack>{hasOrbitName, select, true {{orbitName} DM} other {DM}}</slack>",
                    description:
                      "Label above a message received from or sent to the user's dot's Slack direct message. orbitName is the dot's custom name, such as Pebble. DM means direct message. When there is no custom name, show only DM. The slack tag links to that conversation when its ID is available.",
                    values: { hasOrbitName: s, orbitName: M, slack: _ },
                  })),
                  (w[14] = M),
                  (w[15] = _),
                  (w[16] = s),
                  (w[17] = t))
                : (t = w[17]),
                (P = t))
            } else if (/^[CG]/.test(j?.id ?? "") && T) {
              let e
              ;(w[18] !== T || w[19] !== _
                ? ((e = (0, a.jsx)(r.A, {
                    id: "restricted.aeon.externalChannel.channelLink",
                    defaultMessage: "<slack>#{channelName}</slack>",
                    description:
                      "Label above a dot message received from or sent to a Slack channel. channelName is the channel name without its leading hash sign. The slack tag links to that channel.",
                    values: { channelName: T, slack: _ },
                  })),
                  (w[18] = T),
                  (w[19] = _),
                  (w[20] = e))
                : (e = w[20]),
                (P = e))
            }
          }
          let L = "incoming" !== A && "mb-2"
          return (
            w[21] !== L
              ? ((v = (0, i.A)("px-2 text-xs text-secondary select-none", L)), (w[21] = L), (w[22] = v))
              : (v = w[22]),
            w[23] !== P || w[24] !== v
              ? ((y = (0, a.jsx)("div", {
                  className: v,
                  role: "status",
                  "data-markdown-copy": "exclude",
                  children: P,
                })),
                (w[23] = P),
                (w[24] = v),
                (w[25] = y))
              : (y = w[25]),
            y
          )
        },
        n: function (e) {
          let t,
            n,
            i = (0, s.c)(8),
            { provider: l } = e
          if ("tibro" === l) return null
          if (null == l) {
            let e
            ;(i[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(r.A, {
                  id: "restricted.aeon.externalChannel.sentFromChatgptApp",
                  defaultMessage: "Sent from ChatGPT",
                  description: "Centered transcript indicator when the conversation channel changes back to ChatGPT",
                })),
                (i[0] = e))
              : (e = i[0]),
              (t = e))
          } else if ("phone" === l || "imessage" === l || "rcs" === l) {
            let e
            ;(i[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(r.A, {
                  id: "restricted.aeon.externalChannel.sentFromTextMessage",
                  defaultMessage: "Sent from Text message",
                  description:
                    "Centered transcript indicator when the conversation channel changes to phone text messaging",
                })),
                (i[1] = e))
              : (e = i[1]),
              (t = e))
          } else {
            let e, n
            ;(i[2] !== l ? ((e = (0, o.g)(l)), (i[2] = l), (i[3] = e)) : (e = i[3]),
              i[4] !== e
                ? ((n = (0, a.jsx)(r.A, {
                    id: "restricted.aeon.externalChannel.sentFromProvider",
                    defaultMessage: "Sent from {provider}",
                    description:
                      "Centered transcript indicator when the conversation channel changes to an external service; provider is its name, such as Slack or Teams",
                    values: { provider: e },
                  })),
                  (i[4] = e),
                  (i[5] = n))
                : (n = i[5]),
              (t = n))
          }
          return (
            i[6] !== t
              ? ((n = (0, a.jsx)("div", {
                  className: "flex justify-center py-2",
                  role: "status",
                  "data-markdown-copy": "exclude",
                  children: (0, a.jsx)("span", { className: "text-xs text-tertiary select-none", children: t }),
                })),
                (i[6] = t),
                (i[7] = n))
              : (n = i[7]),
            n
          )
        },
      },
    )
  },
  Gn17(e, t, n) {
    var a = n("zTeN"),
      s = n("FOks")
    let i = (0, a.z8)("ExternalChannelSourceScope", { key: ({ turnKey: e }) => e, parent: s.$ }),
      l = (0, a.i1)(i, (e, { scope: t }) => t.value.channels.findLast((t) => t.id === e))
    n.d(t, {}, { A: i, w: l })
  },
  UM72(e, t, n) {
    var a = n("ABep"),
      s = n("QosV"),
      i = n("zTeN"),
      l = n("zd8w"),
      o = n("SPnB"),
      r = n("r0y7"),
      c = n("dJBt"),
      d = n("OWtl"),
      u = n("mRSS"),
      m = n("NNZM"),
      p = n("Eq07")
    function h(e) {
      let t,
        n,
        i,
        o,
        r,
        d,
        u,
        p = (0, s.c)(26),
        { performance: h, messageId: g, bodyText: x, rowRef: v, presentation: y } = e,
        [w] = (0, l.useState)(f)
      return (
        p[0] !== w || p[1] !== h || p[2] !== y
          ? ((t = () => {
              if ("conversation" === y) return () => h.release(w)
            }),
            (n = [w, h, y]),
            (p[0] = w),
            (p[1] = h),
            (p[2] = y),
            (p[3] = t),
            (p[4] = n))
          : ((t = p[3]), (n = p[4])),
        (0, l.useLayoutEffect)(t, n),
        p[5] !== x || p[6] !== g || p[7] !== w || p[8] !== h || p[9] !== y
          ? ((i = () => {
              ;("conversation" === y && h.setActive(!0, w), h.observeRenderedMessage(g, x), h.committed(g))
            }),
            (p[5] = x),
            (p[6] = g),
            (p[7] = w),
            (p[8] = h),
            (p[9] = y),
            (p[10] = i))
          : (i = p[10]),
        p[11] !== g || p[12] !== h || p[13] !== y
          ? ((o = () => {
              "notification-preview" === y ? h.paintPreviewOpportunity(g) : h.paintOpportunity(g)
            }),
            (p[11] = g),
            (p[12] = h),
            (p[13] = y),
            (p[14] = o))
          : (o = p[14]),
        p[15] !== i || p[16] !== o
          ? ((r = (0, a.jsx)(c.X, { onCommit: i, onPaint: o, requireVisibleAtPaint: !0 })),
            (p[15] = i),
            (p[16] = o),
            (p[17] = r))
          : (r = p[17]),
        p[18] !== g || p[19] !== h || p[20] !== y || p[21] !== v
          ? ((d = "conversation" === y && (0, a.jsx)(m.Y, { messageId: g, performance: h, rowRef: v })),
            (p[18] = g),
            (p[19] = h),
            (p[20] = y),
            (p[21] = v),
            (p[22] = d))
          : (d = p[22]),
        p[23] !== r || p[24] !== d
          ? ((u = (0, a.jsxs)(a.Fragment, { children: [r, d] })), (p[23] = r), (p[24] = d), (p[25] = u))
          : (u = p[25]),
        u
      )
    }
    function f() {
      return {}
    }
    n.d(
      t,
      {},
      {
        M: function (e) {
          let t,
            n,
            l,
            c = (0, s.c)(20),
            { roomId: m, messageId: f, bodyText: g, rowRef: x, presentation: v } = e,
            y = void 0 === v ? "conversation" : v,
            w = (0, i.gh)(d.u),
            b = (0, i.Ul)(u.T),
            C = (0, i.Ul)(o.cj),
            j = (0, i.Ul)(o.chatGptAuthenticatedAccountId$),
            A = (0, i.Ul)(o.chatGptAuthenticatedUserId$),
            I = (0, i.Ul)(o.kf),
            k = (0, i.Ul)(r.bm),
            M = "loaded" === I.status && "personal" === I.structure ? A : k?.accountUserId
          return b && C && "loaded" === I.status && null != j && null != A && null != M
            ? (c[0] !== j || c[1] !== M || c[2] !== f || c[3] !== y || c[4] !== m || c[5] !== A
                ? ((t = JSON.stringify([j, A, M, m, f, y])),
                  (c[0] = j),
                  (c[1] = M),
                  (c[2] = f),
                  (c[3] = y),
                  (c[4] = m),
                  (c[5] = A),
                  (c[6] = t))
                : (t = c[6]),
              c[7] !== j || c[8] !== M || c[9] !== m || c[10] !== w || c[11] !== A
                ? ((n = (0, p.D)(w, { accountId: j, userId: A, accountUserId: M, roomId: m })),
                  (c[7] = j),
                  (c[8] = M),
                  (c[9] = m),
                  (c[10] = w),
                  (c[11] = A),
                  (c[12] = n))
                : (n = c[12]),
              c[13] !== g || c[14] !== f || c[15] !== y || c[16] !== x || c[17] !== t || c[18] !== n
                ? ((l = (0, a.jsx)(h, { performance: n, messageId: f, bodyText: g, rowRef: x, presentation: y }, t)),
                  (c[13] = g),
                  (c[14] = f),
                  (c[15] = y),
                  (c[16] = x),
                  (c[17] = t),
                  (c[18] = n),
                  (c[19] = l))
                : (l = c[19]),
              l)
            : null
        },
      },
    )
  },
  vNmV(e, t, n) {
    let a = ["plugin", "user", "admin", "project", "sessionFlags", "unknown"],
      s = "__unknown__"
    function i(e, t, n) {
      let a = new Set(t),
        s = [
          ...a,
          ...Array.from(new Set(e))
            .filter((e) => !a.has(e))
            .sort((e, t) => e.localeCompare(t)),
        ]
      return (null == n || s.includes(n) || s.push(n), s)
    }
    function l(e) {
      return "untrusted" === e.trustStatus || "modified" === e.trustStatus
    }
    function o(e) {
      switch (e) {
        case "plugin":
          return "plugin"
        case "user":
          return "user"
        case "system":
        case "mdm":
        case "cloudRequirements":
        case "cloudManagedConfig":
        case "legacyManagedConfigFile":
        case "legacyManagedConfigMdm":
          return "admin"
        case "project":
          return "project"
        case "sessionFlags":
          return "sessionFlags"
        case "unknown":
          return "unknown"
      }
    }
    function r(e) {
      let t = e.hooks.filter((e) => "project" === o(e.source))
      return 0 === t.length ? null : { ...e, hooks: t }
    }
    function c(e, t) {
      let n = e.flatMap((e) => e.hooks.filter((e) => o(e.source) === t)),
        a = "unknown" === t ? e.filter(m) : []
      return 0 === n.length && 0 === a.length ? null : d(e, n, a)
    }
    function d(e, t, n = []) {
      let a = u(t),
        s = new Set(a.map((e) => e.key)),
        i = [...e.filter((e) => e.hooks.some((e) => s.has(e.key))), ...n]
      return {
        cwd: "",
        hooks: a,
        warnings: Array.from(new Set(i.flatMap((e) => e.warnings))),
        errors: (function (e) {
          let t = new Map()
          for (let n of e) t.set(`${n.path}:${n.message}`, n)
          return Array.from(t.values())
        })(i.flatMap((e) => e.errors)),
      }
    }
    function u(e) {
      let t = new Map()
      for (let n of e) t.has(n.key) || t.set(n.key, n)
      return Array.from(t.values())
    }
    function m(e) {
      return 0 === e.hooks.length && (e.warnings.length > 0 || e.errors.length > 0)
    }
    function p(e) {
      return "managed" === e.trustStatus || (e.enabled && "trusted" === e.trustStatus)
    }
    n.d(
      t,
      {},
      {
        Ab: function (e, t) {
          if (null == t) return []
          let n = new Set(t.hooks.map((e) => e.key))
          return u(
            e?.flatMap((e) =>
              e.hooks.filter((e) => "plugin" === e.source && e.pluginId === t.summary.id && n.has(e.key) && l(e)),
            ) ?? [],
          )
        },
        ED: function (e, t) {
          return e
            .filter((e) => e.eventName === t)
            .sort((e, t) => (e.displayOrder < t.displayOrder ? -1 : +(e.displayOrder > t.displayOrder)))
        },
        LX: function (e) {
          if (0 === e.length) return null
          let t = new Set(e.map(o))
          return 1 !== t.size ? null : (t.values().next().value ?? null)
        },
        ON: function (e) {
          return { issueCount: e.warnings.length + e.errors.length, needsReview: e.hooks.filter(l).length }
        },
        Pf: s,
        RS: function (e, t, n) {
          if (null == e || !e.summary.installed || 0 === e.hooks.length) return
          let a = i(t, n, null)
          return 0 === a.length ? void 0 : a
        },
        Y8: l,
        nh: function (e) {
          let t = []
          for (let n of a) {
            let a = (function (e, t) {
              switch (t) {
                case "project": {
                  let n = e.map(r).filter((e) => null != e)
                  if (0 === n.length) return null
                  return { id: t, projectEntries: n }
                }
                case "plugin": {
                  let n = c(e, t),
                    a = (function (e) {
                      let t = new Map()
                      for (let n of e)
                        for (let e of n.hooks) {
                          if ("plugin" !== o(e.source)) continue
                          let n = t.get(e.pluginId)
                          null == n ? t.set(e.pluginId, [e]) : n.push(e)
                        }
                      return Array.from(t.entries())
                        .sort(([e], [t]) => (null == e ? 1 : null == t ? -1 : e.localeCompare(t)))
                        .map(([t, n]) => ({ pluginId: t, entry: d(e, n) }))
                    })(e)
                  if (null == n || 0 === a.length) return null
                  return { id: t, entry: n, pluginEntries: a }
                }
                case "user":
                case "admin":
                case "sessionFlags":
                case "unknown": {
                  let n = c(e, t)
                  if (null == n) return null
                  return { id: t, entry: n }
                }
              }
            })(e, n)
            null != a && t.push(a)
          }
          return t
        },
        ni: i,
        p4: function (e, t) {
          if (null == t) return null
          let n = e.find((e) => e.id === t.source)
          return null == n
            ? null
            : "project" === t.source
              ? "project" !== n.id
                ? null
                : (n.projectEntries.find((e) => e.cwd === t.projectRoot) ?? null)
              : "plugin" === t.source
                ? "plugin" !== n.id
                  ? null
                  : void 0 === t.pluginId
                    ? n.entry
                    : (n.pluginEntries.find((e) => e.pluginId === t.pluginId)?.entry ?? null)
                : n.id !== t.source
                  ? null
                  : n.entry
        },
        rb: function (e) {
          return Array.from(new Set(e.map((e) => e.eventName)), (t) => {
            let n = e.filter((e) => e.eventName === t)
            return { eventName: t, active: n.filter(p).length, installed: n.length, needsReview: n.filter(l).length }
          })
        },
        vf: o,
        zC: function ({ pluginId: e, source: t, projectRoot: n, projectRoots: a }) {
          let i = (function (e) {
            switch (e) {
              case "plugin":
              case "user":
              case "admin":
              case "project":
              case "sessionFlags":
              case "unknown":
                return e
              default:
                return null
            }
          })(t)
          return ("project" === i || (null == i && null == t)) && null != n && a?.includes(n) === !0
            ? { source: "project", projectRoot: n }
            : null == i || "project" === i
              ? null
              : "plugin" === i
                ? null == e
                  ? { source: "plugin" }
                  : e === s
                    ? { source: "plugin", pluginId: null }
                    : { source: "plugin", pluginId: e }
                : { source: i }
        },
      },
    )
  },
  AN2V(e, t, n) {
    var a = n("vNmV")
    let s = "hooks-settings"
    function i({ hostId: e, pluginId: t, projectRoot: n, source: l }) {
      let o = new URLSearchParams()
      ;(null != e && o.set("hostId", e),
        null != l && o.set("source", l),
        null != l && null != n && o.set("projectRoot", n),
        "plugin" === l && void 0 !== t && o.set("pluginId", t ?? a.Pf))
      let r = o.toString()
      return "" === r ? s : `${s}?${r}`
    }
    n.d(
      t,
      {},
      {
        NZ: function ({ hostId: e, pluginId: t, projectRoot: n, source: a }) {
          return `/settings/${i({ hostId: e, pluginId: t, projectRoot: n, source: a })}`
        },
        Rf: i,
        mW: function (e, t, n) {
          if ((e.delete("hostId"), e.delete("pluginId"), e.delete("projectRoot"), e.delete("source"), null != n)) {
            if ((e.set("hostId", t), e.set("source", n.source), "project" === n.source))
              return void e.set("projectRoot", n.projectRoot)
            "plugin" === n.source && void 0 !== n.pluginId && e.set("pluginId", n.pluginId ?? a.Pf)
          }
        },
      },
    )
  },
  oXx4(e, t, n) {
    n.d(t, { J: () => m })
    var a = n("ABep"),
      s = n("QosV"),
      i = n("EIbe"),
      l = n.n(i),
      o = n("on57")
    let r = RegExp("\x1b\\[[\\d;]*[A-Za-z]", "g"),
      c = RegExp("\x1b\\[[\\d;]*m", "g"),
      d = RegExp("\x1b\\[(?:0|2)?K"),
      u = RegExp("[^\\n]\b", "gm")
    function m(e) {
      let t,
        n,
        i,
        o = (0, s.c)(7),
        { children: m, className: h } = e
      if (o[0] !== m || o[1] !== h) {
        let e = l().ansiToJson(
          (function (e) {
            if (!e) return ""
            if (!/\r/.test(e)) return e
            let t = e.replace(/\r+\n/gm, "\n")
            for (; /\r./.test(t);)
              t = t.replace(/^([^\r\n]*)\r+([^\r\n]+)/gm, (e, t, n) => {
                let a = n.replace(r, "").length,
                  s = t.match(c)?.join("") ?? "",
                  i = 0,
                  l = d.test(n)
                    ? ""
                    : t.replace(RegExp(`${r.source}|.`, "g"), (e) => (e.startsWith("\x1b") || i++ >= a ? e : ""))
                return s + n + (l && n.match(c) ? "\x1b[0m" : "") + l
              })
            return t
          })(
            (function (e) {
              let t = e,
                n = t
              do n = (t = n).replace(u, "")
              while (n.length < t.length)
              return t
            })(m),
          ),
          { json: !0, remove_empty: !0, use_classes: !0 },
        )
        ;((t = h), (n = e.map(p)), (o[0] = m), (o[1] = h), (o[2] = t), (o[3] = n))
      } else ((t = o[2]), (n = o[3]))
      return (
        o[4] !== t || o[5] !== n
          ? ((i = (0, a.jsx)("code", { className: t, children: n })), (o[4] = t), (o[5] = n), (o[6] = i))
          : (i = o[6]),
        i
      )
    }
    function p(e, t) {
      return (0, a.jsx)(
        "span",
        {
          className: (0, o.A)(null != e.fg && `${e.fg}-fg`, null != e.bg && `${e.bg}-bg`),
          style: (function (e) {
            let t = null == e.decoration ? [] : [e.decoration]
            if (0 === t.length) return
            let n = {},
              a = []
            return (
              t.includes("bold") && (n.fontWeight = "bold"),
              t.includes("dim") && (n.opacity = "0.5"),
              t.includes("italic") && (n.fontStyle = "italic"),
              t.includes("hidden") && (n.visibility = "hidden"),
              t.includes("underline") && a.push("underline"),
              t.includes("strikethrough") && a.push("line-through"),
              a.length > 0 && (n.textDecorationLine = a.join(" ")),
              n
            )
          })(e),
          children: e.content,
        },
        t,
      )
    }
  },
  kq2V(e, t, n) {
    var a = n("DBCl")
    function s(e) {
      return e.split(/[/\\]/).at(-1) ?? e
    }
    n.d(
      t,
      {},
      {
        V: function (e) {
          let t = (function (e) {
            let t = e.trim()
            if (0 === t.length) return null
            let n = t.match(/^(['"])(.*?)\1/),
              a = n?.[2]
            if (a)
              if (n[0].length !== t.length) return s(a)
              else t = a.trim()
            let i = t.match(/^\S+/)?.[0]
            return null == i ? null : s(i)
          })(e)
          return null == t ? null : (a.dIs[t.toLowerCase()] ?? null)
        },
      },
    )
  },
  AQ20(e, t, n) {
    n.d(t, { w: () => m })
    var a = n("ABep"),
      s = n("QosV"),
      i = n("slpy"),
      l = n("on57"),
      o = n("oyxz"),
      r = n("Wf1j"),
      c = n("q5qu"),
      d = n("yP7T"),
      u = "chip-Kwrbf2"
    function m(e) {
      let t,
        n,
        i,
        r,
        d,
        u,
        m,
        h,
        f,
        g,
        x,
        v = (0, s.c)(34),
        { ariaLabel: y, className: w, items: b, status: C, statusAriaLive: j, testId: A, onOverflowClick: I } = e
      if (0 === b.length) return null
      let k = b.length > 3 ? 2 : b.length
      v[0] !== b
        ? ((t = (e, t) => {
            let n = b[e],
              s = n?.label ?? t
            return n?.onClick == null
              ? s
              : (0, a.jsx)("span", {
                  className:
                    "inline cursor-interaction rounded-sm text-start hover:text-default focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring",
                  role: "button",
                  tabIndex: 0,
                  onClick: n.onClick,
                  onKeyDown: (e) => {
                    ;(("Enter" === e.key || " " === e.key) && e.preventDefault(), "Enter" === e.key && n.onClick?.())
                  },
                  onKeyUp: (e) => {
                    " " === e.key && (e.preventDefault(), n.onClick?.())
                  },
                  children: s,
                })
          }),
          (v[0] = b),
          (v[1] = t))
        : (t = v[1])
      let M = t
      if (
        (v[2] !== w
          ? ((n = (0, l.A)("flex min-w-0 items-start gap-1.5 text-base leading-5 select-none", w)),
            (v[2] = w),
            (v[3] = n))
          : (n = v[3]),
        v[4] !== b || v[5] !== k)
      ) {
        let e
        ;(v[7] !== k
          ? ((e = (e, t) => (0, a.jsx)(p, { item: e, isNamed: t < k }, e.id)), (v[7] = k), (v[8] = e))
          : (e = v[8]),
          (i = b.slice(0, 4).map(e)),
          (v[4] = b),
          (v[5] = k),
          (v[6] = i))
      } else i = v[6]
      v[9] !== i
        ? ((r = (0, a.jsx)("span", { className: "inline-flex h-5 shrink-0 items-center gap-1.5", children: i })),
          (v[9] = i),
          (v[10] = r))
        : (r = v[10])
      let S = b.length - k
      return (
        v[11] !== M
          ? ((d = (e) => M(0, e)),
            (u = (e) => M(1, e)),
            (m = (e) => M(2, e)),
            (v[11] = M),
            (v[12] = d),
            (v[13] = u),
            (v[14] = m))
          : ((d = v[12]), (u = v[13]), (m = v[14])),
        v[15] !== I
          ? ((h = (e) =>
              null == I
                ? e
                : (0, a.jsx)("button", {
                    type: "button",
                    className:
                      "inline cursor-interaction rounded-sm align-baseline hover:text-default focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring",
                    onClick: I,
                    children: e,
                  })),
            (v[15] = I),
            (v[16] = h))
          : (h = v[16]),
        v[17] !== b.length || v[18] !== C || v[19] !== S || v[20] !== d || v[21] !== u || v[22] !== m || v[23] !== h
          ? ((f = (0, a.jsx)(o.A, {
              id: "subagents.activity.summary",
              defaultMessage:
                "{count, select, 1 {<first>Subagent</first>} 2 {<first>Subagent</first> and <second>Subagent</second>} 3 {<first>Subagent</first>, <second>Subagent</second> and <third>Subagent</third>} other {<first>Subagent</first>, <second>Subagent</second> and <more>{hiddenCount} more</more>}} {status, select, active {started working} updated {updated} interrupted {{count, plural, one {was interrupted} other {were interrupted}}} completed {finished} failed {finished with errors} progress {made progress} other {started working}}",
              description:
                "Complete inline subagent activity sentence. Count is the total number of agents. Show all names for up to three agents, or the first two names and hiddenCount more for larger groups. Name tags replace the translated fallback Subagent with the agent name when available and make it clickable; more opens the full agent list when supported. Status selects the lifecycle wording. Translators may reorder names, count, and status within the sentence.",
              values: { count: b.length, hiddenCount: S, status: C, first: d, second: u, third: m, more: h },
            })),
            (v[17] = b.length),
            (v[18] = C),
            (v[19] = S),
            (v[20] = d),
            (v[21] = u),
            (v[22] = m),
            (v[23] = h),
            (v[24] = f))
          : (f = v[24]),
        v[25] !== j || v[26] !== f
          ? ((g = (0, a.jsx)("span", { "aria-live": j, className: "min-w-0 break-words", children: f })),
            (v[25] = j),
            (v[26] = f),
            (v[27] = g))
          : (g = v[27]),
        v[28] !== y || v[29] !== g || v[30] !== n || v[31] !== r || v[32] !== A
          ? ((x = (0, a.jsx)(c.D, {
              padding: "offset",
              children: (0, a.jsxs)("section", { "aria-label": y, className: n, "data-testid": A, children: [r, g] }),
            })),
            (v[28] = y),
            (v[29] = g),
            (v[30] = n),
            (v[31] = r),
            (v[32] = A),
            (v[33] = x))
          : (x = v[33]),
        x
      )
    }
    function p(e) {
      let t,
        n,
        o,
        c = (0, s.c)(12),
        { item: m, isNamed: p } = e,
        h = (0, r.A)()
      c[0] !== h || c[1] !== m.label
        ? ((t =
            m.label ??
            h.formatMessage({
              id: "subagents.activity.unnamed.ariaLabel",
              defaultMessage: "Subagent",
              description:
                "Accessible name and tooltip for an unnamed subagent avatar button that opens its conversation.",
            })),
          (c[0] = h),
          (c[1] = m.label),
          (c[2] = t))
        : (t = c[2])
      let f = t
      c[3] !== m.seed
        ? ((n = (0, a.jsx)(d.B, { seed: m.seed, className: "size-4", "aria-hidden": !0 })), (c[3] = m.seed), (c[4] = n))
        : (n = c[4])
      let g = n
      return (
        c[5] !== g ||
        c[6] !== p ||
        c[7] !== m.animateEntrance ||
        c[8] !== m.onAnimationEnd ||
        c[9] !== m.onClick ||
        c[10] !== f
          ? ((o =
              p || null == m.onClick
                ? (0, a.jsx)("span", {
                    className: u,
                    "data-animate-entrance": m.animateEntrance ? "" : void 0,
                    onAnimationEnd: m.animateEntrance ? m.onAnimationEnd : void 0,
                    children: g,
                  })
                : (0, a.jsx)(i.m, {
                    content: f,
                    openDelay: 250,
                    children: (0, a.jsx)("button", {
                      type: "button",
                      "aria-label": f,
                      className: (0, l.A)(
                        u,
                        "cursor-interaction rounded-sm focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring",
                      ),
                      "data-animate-entrance": m.animateEntrance ? "" : void 0,
                      onAnimationEnd: m.animateEntrance ? m.onAnimationEnd : void 0,
                      onClick: m.onClick,
                      children: g,
                    }),
                  })),
            (c[5] = g),
            (c[6] = p),
            (c[7] = m.animateEntrance),
            (c[8] = m.onAnimationEnd),
            (c[9] = m.onClick),
            (c[10] = f),
            (c[11] = o))
          : (o = c[11]),
        o
      )
    }
  },
  rCz8(e, t, n) {
    let a = (0, n("iJY0").a)({
      name: "circle-grid-2x2-connect-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.78418, y: 1.80957, width: 12.445313, height: 12.380859 },
        visualBounds: { x: 1.78418, y: 1.80957, width: 12.445313, height: 12.380859 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.78418, y: 1.80957, width: 12.445313, height: 12.380859 },
        center: { x: 8.006837, y: 7.999999 },
        insets: { top: 1.80957, right: 1.770507, bottom: 1.809571, left: 1.78418 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.006837, y: 7.999999 }, foreground: { x: 8.006837, y: 7.999999 } },
      },
      capabilities: ["icon"],
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5381 1.80957C13.0243 1.80975 14.2295 3.01483 14.2295 4.50098C14.2293 5.98698 13.0242 7.19123 11.5381 7.19141C10.9747 7.19136 10.452 7.01761 10.0195 6.72168L6.72266 10.0186C7.00362 10.4436 7.16797 10.9525 7.16797 11.5C7.1678 12.986 5.96266 14.1903 4.47656 14.1904C2.99032 14.1904 1.78434 12.9861 1.78418 11.5C1.78418 10.0137 2.99021 8.80859 4.47656 8.80859C5.03572 8.80866 5.55496 8.9795 5.98535 9.27148L9.28516 5.97168C9.00818 5.54887 8.84576 5.04409 8.8457 4.50098C8.8457 3.0148 10.0519 1.8097 11.5381 1.80957ZM4.47656 9.85938C3.56968 9.85938 2.83496 10.5941 2.83496 11.5C2.83513 12.4058 3.56978 13.1406 4.47656 13.1406C5.3832 13.1404 6.118 12.4057 6.11816 11.5C6.11816 10.5942 5.3833 9.85955 4.47656 9.85938ZM11.5381 2.86035C10.6313 2.86048 9.89648 3.59514 9.89648 4.50098C9.89665 5.40668 10.6314 6.14147 11.5381 6.1416C12.4447 6.14143 13.1795 5.40665 13.1797 4.50098C13.1797 3.59516 12.4448 2.86053 11.5381 2.86035Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5381 8.80859C13.0243 8.80877 14.2295 10.0139 14.2295 11.5C14.2293 12.986 13.0242 14.1903 11.5381 14.1904C10.052 14.1903 8.84587 12.986 8.8457 11.5C8.8457 10.0138 10.0519 8.80873 11.5381 8.80859ZM11.5381 9.85938C10.6313 9.85951 9.89648 10.5942 9.89648 11.5C9.89665 12.4057 10.6314 13.1405 11.5381 13.1406C12.4447 13.1404 13.1795 12.4057 13.1797 11.5C13.1797 10.5942 12.4448 9.85955 11.5381 9.85938Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.47656 1.80957C5.96276 1.80975 7.16797 3.01483 7.16797 4.50098C7.1678 5.98698 5.96266 7.19123 4.47656 7.19141C2.99032 7.19141 1.78434 5.98709 1.78418 4.50098C1.78418 3.01472 2.99021 1.80957 4.47656 1.80957ZM4.47656 2.86035C3.56968 2.86035 2.83496 3.59506 2.83496 4.50098C2.83513 5.40676 3.56978 6.1416 4.47656 6.1416C5.3832 6.14143 6.118 5.40665 6.11816 4.50098C6.11816 3.59516 5.3833 2.86053 4.47656 2.86035Z" fill="currentColor"/>',
    })
    n.d(t, {}, { W: a })
  },
  BhAX(e, t, n) {
    let a = (0, n("iJY0").a)({
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
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M8 4.1416C9.39452 4.1416 10.5254 5.27247 10.5254 6.66699C10.5251 8.06129 9.39436 9.19238 8 9.19238C6.60564 9.19238 5.47487 8.06129 5.47461 6.66699C5.47461 5.27247 6.60548 4.1416 8 4.1416ZM8 5.19238C7.18538 5.19238 6.52539 5.85237 6.52539 6.66699C6.52565 7.48139 7.18554 8.1416 8 8.1416C8.81446 8.1416 9.47435 7.48139 9.47461 6.66699C9.47461 5.85237 8.81462 5.19238 8 5.19238Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.47461C11.6037 1.47461 14.5254 4.39634 14.5254 8C14.5254 11.6037 11.6037 14.5254 8 14.5254C4.39634 14.5254 1.47461 11.6037 1.47461 8C1.47461 4.39634 4.39634 1.47461 8 1.47461ZM8 11.1924C6.82222 11.1925 5.78204 11.7791 5.15332 12.6768C5.98281 13.1827 6.95721 13.4746 8 13.4746C9.04297 13.4746 10.0171 13.1819 10.8467 12.6758C10.2178 11.7786 9.17734 11.1925 8 11.1924ZM8 2.52539C4.97624 2.52539 2.52539 4.97624 2.52539 8C2.52539 9.60307 3.21462 11.0447 4.3125 12.0459C5.13249 10.8944 6.47756 10.1417 8 10.1416C9.52227 10.1417 10.8667 10.8946 11.6865 12.0459C12.7847 11.0447 13.4746 9.60333 13.4746 8C13.4746 4.97624 11.0238 2.52539 8 2.52539Z" fill="currentColor"/>',
    })
    n.d(t, {}, { $: a })
  },
  TgqN(e, t, n) {
    let a = (0, n("iJY0").a)({
      name: "pause-sm-fill-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 4.751709, y: 5.168457, width: 10.49707, height: 9.663086 },
        visualBounds: { x: 4.751709, y: 5.168457, width: 10.49707, height: 9.663086 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 4.751709, y: 5.168457, width: 10.49707, height: 9.663086 },
        center: { x: 10.000244, y: 10 },
        insets: { top: 5.168457, right: 4.751221, bottom: 5.168457, left: 4.751709 },
        anchors: { frame: { x: 10, y: 10 }, ink: { x: 10.000244, y: 10 }, foreground: { x: 10.000244, y: 10 } },
      },
      capabilities: ["icon"],
      body: '<path d="M7.35034 5.16846C8.03037 5.1686 8.58165 5.71988 8.58179 6.3999V13.6001C8.58179 14.2802 8.03045 14.8314 7.35034 14.8315H5.98315C5.30304 14.8314 4.75171 14.2802 4.75171 13.6001V6.3999C4.75185 5.71988 5.30313 5.1686 5.98315 5.16846H7.35034Z" fill="currentColor"/> <path d="M14.0173 5.16846C14.6971 5.16886 15.2486 5.72004 15.2488 6.3999V13.6001C15.2488 14.2801 14.6972 14.8311 14.0173 14.8315H12.6501C11.97 14.8314 11.4187 14.2802 11.4187 13.6001V6.3999C11.4188 5.71988 11.9701 5.1686 12.6501 5.16846H14.0173Z" fill="currentColor"/>',
    })
    n.d(t, {}, { I: a })
  },
  Astd(e, t, n) {
    let a = (0, n("iJY0").a)({
      name: "square-plus-minus-light-24",
      canvas: {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        frame: { x: 0, y: 0, width: 24, height: 24 },
        inkBounds: { x: 3.25, y: 3.25, width: 17.5, height: 17.5 },
        visualBounds: { x: 3.25, y: 3.25, width: 17.5, height: 17.5 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.25, y: 3.25, width: 17.5, height: 17.5 },
        center: { x: 12, y: 12 },
        insets: { top: 3.25, right: 3.25, bottom: 3.25, left: 3.25 },
        anchors: { frame: { x: 12, y: 12 }, ink: { x: 12, y: 12 }, foreground: { x: 12, y: 12 } },
      },
      capabilities: ["icon"],
      body: '<path d="M14.5 15.25C14.9142 15.25 15.25 15.5858 15.25 16C15.25 16.4142 14.9142 16.75 14.5 16.75H9.5C9.08579 16.75 8.75 16.4142 8.75 16C8.75 15.5858 9.08579 15.25 9.5 15.25H14.5Z" fill="currentColor"/> <path d="M12 6.75C12.4142 6.75 12.75 7.08579 12.75 7.5V9.25H14.5C14.9142 9.25 15.25 9.58579 15.25 10C15.25 10.4142 14.9142 10.75 14.5 10.75H12.75V12.5C12.75 12.9142 12.4142 13.25 12 13.25C11.5858 13.25 11.25 12.9142 11.25 12.5V10.75H9.5C9.08579 10.75 8.75 10.4142 8.75 10C8.75 9.58579 9.08579 9.25 9.5 9.25H11.25V7.5C11.25 7.08579 11.5858 6.75 12 6.75Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2002 3.25C19.1607 3.25011 20.7499 4.83935 20.75 6.7998V17.2002C20.7499 19.1607 19.1607 20.7499 17.2002 20.75H6.7998C4.83935 20.7499 3.25011 19.1607 3.25 17.2002V6.7998C3.25011 4.83935 4.83935 3.25011 6.7998 3.25H17.2002ZM6.7998 4.75C5.66778 4.75011 4.75011 5.66778 4.75 6.7998V17.2002C4.75011 18.3322 5.66778 19.2499 6.7998 19.25H17.2002C18.3322 19.2499 19.2499 18.3322 19.25 17.2002V6.7998C19.2499 5.66778 18.3322 4.75011 17.2002 4.75H6.7998Z" fill="currentColor"/>',
    })
    n.d(t, {}, { E: a })
  },
  ibmS(e, t, n) {
    let a = (0, n("iJY0").a)({
      name: "text-select-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 0.987549, y: 1.754883, width: 14.014648, height: 12.580078 },
        visualBounds: { x: 0.987549, y: 1.754883, width: 14.014648, height: 12.580078 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 0.987549, y: 1.754883, width: 14.014648, height: 12.580078 },
        center: { x: 7.994873, y: 8.044922 },
        insets: { top: 1.754883, right: 0.997803, bottom: 1.665039, left: 0.987549 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.994873, y: 8.044922 }, foreground: { x: 7.994873, y: 8.044922 } },
      },
      capabilities: ["icon"],
      body: '<path d="M11.5247 1.80859C12.9925 1.80873 14.1826 2.99992 14.1829 4.46777V11.752C14.6643 11.9563 15.0021 12.4342 15.0022 12.9902C15.0021 13.7322 14.4004 14.3346 13.6584 14.335C12.9162 14.335 12.3139 13.7324 12.3137 12.9902C12.3138 12.4342 12.6513 11.9563 13.1331 11.752V4.46777C13.1328 3.57982 12.4126 2.85951 11.5247 2.85938L8.86646 2.86035C8.57667 2.86035 8.34133 2.62469 8.34106 2.33496C8.34106 2.04501 8.57651 1.80859 8.86646 1.80859H11.5247Z" fill="currentColor"/> <path d="M2.33228 1.75488C3.0744 1.75501 3.67589 2.35651 3.67603 3.09863C3.67603 3.65479 3.33827 4.13233 2.85669 4.33691L2.85767 11.5234C2.85793 12.4115 3.57797 13.1318 4.46606 13.1318H7.12427C7.41399 13.1321 7.64966 13.3674 7.64966 13.6572C7.64939 13.9468 7.41383 14.1824 7.12427 14.1826H4.46606C2.99807 14.1826 1.80813 12.9914 1.80786 11.5234L1.80688 4.33691C1.32538 4.13221 0.987549 3.65459 0.987549 3.09863C0.987681 2.35642 1.59004 1.75488 2.33228 1.75488Z" fill="currentColor"/> <path d="M8.66626 8.89258C8.95621 8.89258 9.19165 9.12802 9.19165 9.41797C9.19165 9.70792 8.95621 9.94336 8.66626 9.94336H5.66626C5.37648 9.94316 5.14087 9.7078 5.14087 9.41797C5.14087 9.12814 5.37648 8.89278 5.66626 8.89258H8.66626Z" fill="currentColor"/> <path d="M10.3333 6.05957C10.6231 6.05975 10.8577 6.29512 10.8577 6.58496C10.8575 6.87469 10.623 7.11018 10.3333 7.11035H5.66626C5.37656 7.11015 5.141 6.87468 5.14087 6.58496C5.14087 6.29513 5.37648 6.05977 5.66626 6.05957H10.3333Z" fill="currentColor"/>',
    })
    n.d(t, {}, { h: a })
  },
}
//# sourceMappingURL=720744.158c9ed7b0.js.map
