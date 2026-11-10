export const __rspack_esm_ids = [337184]
export const __webpack_modules__ = {
  mM51(e, n, t) {
    t.d(n, { getWelcomeVisualizations: () => o })
    let a = [
      ["mercury", 0.387, 87.97, 4, "#b5b6bb"],
      ["venus", 0.723, 224.7, 6, "#e4ca91"],
      ["earth", 1, 365.25, 7, "#70b9ff"],
      ["mars", 1.524, 686.98, 5, "#e59b83"],
      ["jupiter", 5.203, 4332.59, 12, "#e5c496"],
      ["saturn", 9.537, 10759.22, 10, "#dfce91"],
      ["uranus", 19.191, 30688.5, 8, "#a1dce2"],
      ["neptune", 30.069, 60182, 8, "#74a4ee"],
    ]
    function o(e) {
      let n = {
          locale: e.locale,
          savingsTitle: e.formatMessage({
            id: "space.welcome.demo.savingsTitle",
            defaultMessage: "Savings growth",
            description: "Title of the interactive savings calculator embedded in the Welcome to Space Page",
          }),
          monthly: e.formatMessage({
            id: "space.welcome.demo.monthly",
            defaultMessage: "Monthly contribution",
            description: "Label for monthly USD deposits in the Welcome Page savings calculator",
          }),
          starting: e.formatMessage({
            id: "space.welcome.demo.starting",
            defaultMessage: "Starting savings",
            description: "Label for the initial USD balance in the Welcome Page savings calculator",
          }),
          years: e.formatMessage({
            id: "space.welcome.demo.years",
            defaultMessage: "Years",
            description: "Label for the number of years simulated by the Welcome Page savings calculator",
          }),
          rate: e.formatMessage({
            id: "space.welcome.demo.rate",
            defaultMessage: "Annual return",
            description: "Label for the assumed yearly percentage return in the Welcome Page savings calculator",
          }),
          balance: e.formatMessage({
            id: "space.welcome.demo.balance",
            defaultMessage: "Projected balance",
            description: "Savings calculator metric and chart legend showing the simulated final USD balance",
          }),
          added: e.formatMessage({
            id: "space.welcome.demo.added",
            defaultMessage: "You contribute",
            description:
              "Savings calculator metric and chart legend showing starting savings plus deposits, excluding growth",
          }),
          growth: e.formatMessage({
            id: "space.welcome.demo.growth",
            defaultMessage: "Investment growth",
            description: "Savings calculator metric showing simulated interest earned, in USD",
          }),
          contributions: e.formatMessage({
            id: "space.welcome.demo.contributions",
            defaultMessage: "Contributions",
            description: "Chart legend for starting savings plus deposits in the Welcome Page savings calculator",
          }),
          totalBalance: e.formatMessage({
            id: "space.welcome.demo.totalBalance",
            defaultMessage: "Total balance",
            description: "Chart legend for savings including investment growth in the Welcome Page savings calculator",
          }),
          increaseMonthly: e.formatMessage({
            id: "space.welcome.demo.increaseMonthly",
            defaultMessage: "+$250/mo",
            description:
              "Button that increases monthly contributions by 250 US dollars in the Welcome Page savings calculator",
          }),
          reset: e.formatMessage({
            id: "space.welcome.demo.reset",
            defaultMessage: "Reset",
            description: "Button to restore the initial state of a Welcome Page interactive example",
          }),
          savingsNote: e.formatMessage({
            id: "space.welcome.demo.savingsNote",
            defaultMessage:
              "Illustrative estimate. Deposits occur at each month’s end; returns compound monthly. Taxes, fees, and inflation are excluded. Actual returns vary.",
            description: "Explanatory note below the Welcome Page savings calculator",
          }),
          solarTitle: e.formatMessage({
            id: "space.welcome.demo.solarTitle",
            defaultMessage: "Explore the solar system",
            description: "Title of the interactive orbital simulation embedded in the Welcome to Space Page",
          }),
          sun: e.formatMessage({
            id: "space.welcome.demo.sun",
            defaultMessage: "Sun",
            description: "Label for the Sun in the Welcome Page solar system simulation",
          }),
          speed: e.formatMessage({
            id: "space.welcome.demo.speed",
            defaultMessage: "Speed",
            description: "Label for the playback speed control in the Welcome Page solar system simulation",
          }),
          selectedBody: e.formatMessage({
            id: "space.welcome.demo.selectedBody",
            defaultMessage: "Selected body",
            description: "Heading above details of the selected planet in the Welcome Page solar system",
          }),
          planetYear: e.formatMessage({
            id: "space.welcome.demo.planetYear",
            defaultMessage: "Year",
            description: "Label for how long the selected planet takes to orbit the Sun",
          }),
          solarPlanets: a,
          earthYears: a.map(([, , n]) =>
            e.formatMessage(
              {
                id: "space.welcome.demo.earthYears",
                defaultMessage: "{years, plural, one {# Earth year} other {# Earth years}}",
                description: "Orbital period of a planet, expressed in Earth years",
              },
              { years: Number((n / 365.25).toFixed(n < 365.25 ? 2 : 1)) },
            ),
          ),
          distanceFromSun: e.formatMessage({
            id: "space.welcome.demo.distanceFromSun",
            defaultMessage: "Distance from Sun",
            description: "Label for the selected planet's average distance from the Sun",
          }),
          terrestrialPlanet: e.formatMessage({
            id: "space.welcome.demo.terrestrialPlanet",
            defaultMessage: "Terrestrial planet",
            description: "Classification of Mercury, Venus, Earth, and Mars in the solar system demo",
          }),
          gasGiant: e.formatMessage({
            id: "space.welcome.demo.gasGiant",
            defaultMessage: "Gas giant",
            description: "Classification of Jupiter and Saturn in the solar system demo",
          }),
          iceGiant: e.formatMessage({
            id: "space.welcome.demo.iceGiant",
            defaultMessage: "Ice giant",
            description: "Classification of Uranus and Neptune in the solar system demo",
          }),
          solarNote: e.formatMessage({
            id: "space.welcome.demo.solarNote",
            defaultMessage:
              "Illustrative motion from average orbital periods, not actual current positions. Distances and sizes are compressed for visibility.",
            description: "Explanatory note below the Welcome Page solar system simulation",
          }),
          pause: e.formatMessage({
            id: "space.welcome.demo.pause",
            defaultMessage: "Pause",
            description: "Button to pause orbital motion in the Welcome Page solar system simulation",
          }),
          play: e.formatMessage({
            id: "space.welcome.demo.play",
            defaultMessage: "Play",
            description: "Button to start orbital motion in the Welcome Page solar system simulation",
          }),
          pianoTitle: e.formatMessage({
            id: "space.welcome.demo.pianoTitle",
            defaultMessage: "Mini Piano",
            description: "Title of the playable two-octave keyboard embedded in the Welcome to Space Page",
          }),
          volume: e.formatMessage({
            id: "space.welcome.demo.volume",
            defaultMessage: "Volume",
            description: "Label for the sound volume slider in the Welcome Page piano",
          }),
          audioHint: e.formatMessage({
            id: "space.welcome.demo.audioHint",
            defaultMessage: "Tap a key to start audio",
            description: "Status inviting the user to activate audio in the Welcome Page piano",
          }),
          keyboardHint: e.formatMessage({
            id: "space.welcome.demo.keyboardHint",
            defaultMessage: "Keyboard: A W S E D F T G Y H U J K O L P ; ' ]",
            description:
              "Help text listing the physical keyboard keys that play notes in the Welcome Page piano. Preserve the literal key characters and their order",
          }),
          octaveDown: e.formatMessage({
            id: "space.welcome.demo.octaveDown",
            defaultMessage: "Lower octave",
            description: "Accessible label for shifting the Welcome Page piano down one octave",
          }),
          octaveUp: e.formatMessage({
            id: "space.welcome.demo.octaveUp",
            defaultMessage: "Higher octave",
            description: "Accessible label for shifting the Welcome Page piano up one octave",
          }),
          audioOn: e.formatMessage({
            id: "space.welcome.demo.audioOn",
            defaultMessage: "Audio on",
            description: "Status shown after sound is enabled in the Welcome Page piano",
          }),
          audioUnavailable: e.formatMessage({
            id: "space.welcome.demo.audioUnavailable",
            defaultMessage: "Audio unavailable",
            description: "Status shown when the browser cannot enable sound in the Welcome Page piano",
          }),
          mercury: e.formatMessage({
            id: "space.welcome.demo.mercury",
            defaultMessage: "Mercury",
            description: "Selectable planet name in the Welcome Page solar system simulation",
          }),
          venus: e.formatMessage({
            id: "space.welcome.demo.venus",
            defaultMessage: "Venus",
            description: "Selectable planet name in the Welcome Page solar system simulation",
          }),
          earth: e.formatMessage({
            id: "space.welcome.demo.earth",
            defaultMessage: "Earth",
            description: "Selectable planet name in the Welcome Page solar system simulation",
          }),
          mars: e.formatMessage({
            id: "space.welcome.demo.mars",
            defaultMessage: "Mars",
            description: "Selectable planet name in the Welcome Page solar system simulation",
          }),
          jupiter: e.formatMessage({
            id: "space.welcome.demo.jupiter",
            defaultMessage: "Jupiter",
            description: "Selectable planet name in the Welcome Page solar system simulation",
          }),
          saturn: e.formatMessage({
            id: "space.welcome.demo.saturn",
            defaultMessage: "Saturn",
            description: "Selectable planet name in the Welcome Page solar system simulation",
          }),
          uranus: e.formatMessage({
            id: "space.welcome.demo.uranus",
            defaultMessage: "Uranus",
            description: "Selectable planet name in the Welcome Page solar system simulation",
          }),
          neptune: e.formatMessage({
            id: "space.welcome.demo.neptune",
            defaultMessage: "Neptune",
            description: "Selectable planet name in the Welcome Page solar system simulation",
          }),
        },
        t = `<script>const text = ${JSON.stringify(n).replaceAll("<", "\\u003c")};<\/script>`
      return {
        savings:
          '<!doctype html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width,initial-scale=1" />\n    <style>\n      * {\n        box-sizing: border-box;\n      }\n      body {\n        margin: 0;\n        color: var(--foreground, #242933);\n        background: var(--background, #fff);\n        font:\n          14px system-ui,\n          sans-serif;\n      }\n      main {\n        padding: 16px;\n        border: 1px solid var(--border, #e5e7eb);\n        border-radius: var(--radius-2xl, 18px);\n      }\n      .layout {\n        display: grid;\n        grid-template-columns: 180px minmax(0, 1fr);\n        gap: 24px;\n      }\n      .controls {\n        display: flex;\n        flex-direction: column;\n        gap: 16px;\n        padding-right: 20px;\n        border-right: 1px solid var(--border, #e5e7eb);\n      }\n      h1 {\n        margin: 0;\n        font-size: 16px;\n        font-weight: 500;\n      }\n      label,\n      .metric span,\n      .balance span {\n        display: block;\n        margin-bottom: 6px;\n        color: var(--muted-foreground, #777e89);\n        font-size: 11px;\n      }\n      .field {\n        display: flex;\n        align-items: center;\n        gap: 4px;\n        padding: 6px 8px;\n        border: 1px solid var(--border, #e5e7eb);\n        border-radius: var(--radius-sm, 7px);\n        background: var(--card, #f6f7f9);\n      }\n      input {\n        width: 100%;\n        min-width: 0;\n        border: 0;\n        background: transparent;\n        color: inherit;\n        font: inherit;\n      }\n      input:focus-visible {\n        outline: 2px solid var(--ring, #437de8);\n        outline-offset: 2px;\n      }\n      .pair,\n      .actions,\n      .metrics {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        gap: 12px;\n      }\n      button {\n        padding: 6px 8px;\n        border: 1px solid var(--border, #e5e7eb);\n        border-radius: var(--radius-sm, 7px);\n        background: var(--background, #fff);\n        color: inherit;\n        font: inherit;\n        font-size: 11px;\n        cursor: pointer;\n      }\n      button:hover {\n        background: var(--card, #f6f7f9);\n      }\n      button:focus-visible {\n        outline: 2px solid var(--ring, #437de8);\n        outline-offset: 2px;\n      }\n      .balance output {\n        font-size: 30px;\n        font-weight: 550;\n        letter-spacing: -0.03em;\n      }\n      .legend {\n        display: flex;\n        justify-content: flex-end;\n        gap: 18px;\n        margin-top: 16px;\n        color: var(--muted-foreground, #777e89);\n        font-size: 10px;\n      }\n      .legend span::before {\n        content: "";\n        display: inline-block;\n        width: 6px;\n        height: 6px;\n        margin-right: 5px;\n        border-radius: 50%;\n        background: var(--green, #8cae7a);\n      }\n      .legend span + span::before {\n        background: var(--blue, #437de8);\n      }\n      svg {\n        display: block;\n        width: 100%;\n        height: auto;\n        margin-top: 8px;\n      }\n      svg text {\n        fill: var(--muted-foreground, #777e89);\n        font-size: 11px;\n      }\n      .metrics {\n        margin-top: 12px;\n        padding-top: 12px;\n        border-top: 1px solid var(--border, #e5e7eb);\n      }\n      .metric output {\n        font-size: 16px;\n        font-weight: 550;\n      }\n      .note {\n        margin: 14px 0 0;\n        color: var(--muted-foreground, #777e89);\n        font-size: 10px;\n        line-height: 1.5;\n      }\n      @media (max-width: 500px) {\n        .layout {\n          grid-template-columns: 1fr;\n          gap: 20px;\n        }\n        .controls {\n          padding-right: 0;\n          padding-bottom: 20px;\n          border-right: 0;\n          border-bottom: 1px solid var(--border, #e5e7eb);\n        }\n      }\n    </style>\n  </head>\n  <body>\n    \x3c!--labels--\x3e\n    <main>\n      <div class="layout">\n        <section class="controls">\n          <h1 data-text="savingsTitle"></h1>\n          <div>\n            <label for="starting" data-text="starting"></label>\n            <div class="field">\n              <span>$</span\n              ><input\n                id="starting"\n                type="number"\n                min="0"\n                max="10000000"\n                step="100"\n                value="10000"\n              />\n            </div>\n          </div>\n          <div>\n            <label for="monthly" data-text="monthly"></label>\n            <div class="field">\n              <span>$</span\n              ><input\n                id="monthly"\n                type="number"\n                min="0"\n                max="100000"\n                step="50"\n                value="1000"\n              />\n            </div>\n          </div>\n          <div class="pair">\n            <div>\n              <label for="rate" data-text="rate"></label>\n              <div class="field">\n                <input\n                  id="rate"\n                  type="number"\n                  min="0"\n                  max="12"\n                  step="0.5"\n                  value="7"\n                /><span>%</span>\n              </div>\n            </div>\n            <div>\n              <label for="years" data-text="years"></label>\n              <div class="field">\n                <input id="years" type="number" min="1" max="40" value="20" />\n              </div>\n            </div>\n          </div>\n          <div class="actions">\n            <button\n              id="increase"\n              type="button"\n              data-text="increaseMonthly"\n            ></button\n            ><button id="reset" type="button" data-text="reset"></button>\n          </div>\n        </section>\n        <section>\n          <div class="balance">\n            <span data-text="balance"></span><output id="balance"></output>\n          </div>\n          <div class="legend">\n            <span data-text="contributions"></span\n            ><span data-text="totalBalance"></span>\n          </div>\n          <svg viewBox="0 0 510 260" role="img" id="chart">\n            <g id="grid"></g>\n            <path\n              id="deposits"\n              fill="none"\n              stroke="var(--green, #8cae7a)"\n              stroke-width="2"\n            />\n            <path\n              id="projection"\n              fill="none"\n              stroke="var(--blue, #437de8)"\n              stroke-width="2.5"\n            />\n            <circle id="endpoint" r="4" fill="var(--blue, #437de8)" />\n          </svg>\n          <div class="metrics">\n            <div class="metric">\n              <span data-text="added"></span><output id="added"></output>\n            </div>\n            <div class="metric">\n              <span data-text="growth"></span><output id="growth"></output>\n            </div>\n          </div>\n        </section>\n      </div>\n      <p class="note" data-text="savingsNote"></p>\n    </main>\n    <script>\n      const el = (id) => document.getElementById(id);\n      document\n        .querySelectorAll("[data-text]")\n        .forEach((e) => (e.textContent = text[e.dataset.text]));\n      document.title = text.savingsTitle;\n      el("chart").setAttribute("aria-label", text.balance);\n      const money = new Intl.NumberFormat(text.locale, {\n        style: "currency",\n        currency: "USD",\n        maximumFractionDigits: 0,\n      });\n      const compact = new Intl.NumberFormat(text.locale, {\n        style: "currency",\n        currency: "USD",\n        notation: "compact",\n        maximumFractionDigits: 0,\n      });\n      const readNumber = (id, min, max) =>\n        Math.max(min, Math.min(max, Number(el(id).value) || min));\n      function draw() {\n        const monthly = readNumber("monthly", 0, 100000),\n          start = readNumber("starting", 0, 10000000),\n          years = Math.round(readNumber("years", 1, 40)),\n          rate = readNumber("rate", 0, 12) / 1200;\n        let balance = start;\n        const points = [[0, balance, start]];\n        for (let m = 1; m <= years * 12; m++) {\n          balance = balance * (1 + rate) + monthly;\n          if (m % 12 === 0) points.push([m / 12, balance, start + monthly * m]);\n        }\n        const added = start + monthly * years * 12;\n        el("balance").textContent = money.format(balance);\n        el("added").textContent = money.format(added);\n        el("growth").textContent = money.format(balance - added);\n        const step = 10 ** Math.floor(Math.log10(Math.max(1, balance / 4))),\n          top = Math.max(1, Math.ceil(balance / 4 / step)) * step * 4,\n          x = (year) => 45 + (year / years) * 455,\n          y = (value) => 230 - (value / top) * 210;\n        const path = (column) =>\n          points\n            .map(\n              (point, index) =>\n                (index ? "L" : "M") + x(point[0]) + "," + y(point[column]),\n            )\n            .join(" ");\n        el("projection").setAttribute("d", path(1));\n        el("deposits").setAttribute("d", path(2));\n        el("endpoint").setAttribute("cx", x(years));\n        el("endpoint").setAttribute("cy", y(balance));\n        el("grid").innerHTML = Array.from({ length: 5 }, (_, index) => {\n          const value = (top * index) / 4;\n          return (\n            \'<path d="M45,\' +\n            y(value) +\n            \' H500" stroke="var(--border, #e5e7eb)"/><text x="4" y="\' +\n            (y(value) + 4) +\n            \'">\' +\n            compact.format(value) +\n            \'</text><text x="\' +\n            (45 + index * 113.75) +\n            \'" y="252" text-anchor="middle">\' +\n            Math.round((years * index) / 4) +\n            "</text>"\n          );\n        }).join("");\n      }\n      ["starting", "monthly", "years", "rate"].forEach((id) => {\n        const input = el(id);\n        input.oninput = draw;\n        input.onchange = () => {\n          input.value = readNumber(id, Number(input.min), Number(input.max));\n          if (id === "years") input.value = Math.round(Number(input.value));\n          draw();\n        };\n      });\n      el("increase").onclick = () => {\n        el("monthly").value = Math.min(\n          100000,\n          readNumber("monthly", 0, 100000) + 250,\n        );\n        draw();\n      };\n      el("reset").onclick = () => {\n        document\n          .querySelectorAll("input")\n          .forEach((input) => (input.value = input.defaultValue));\n        draw();\n      };\n      draw();\n    <\/script>\n  </body>\n</html>\n'.replace(
            "\x3c!--labels--\x3e",
            () => t,
          ),
        solar:
          '<!doctype html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width,initial-scale=1" />\n    <style>\n      * {\n        box-sizing: border-box;\n      }\n      body {\n        margin: 0;\n        color: var(--foreground, #242933);\n        background: var(--background, #fff);\n        font:\n          14px system-ui,\n          sans-serif;\n      }\n      main {\n        border: 1px solid var(--border, #e5e7eb);\n        border-radius: var(--radius-2xl, 18px);\n        overflow: hidden;\n      }\n      .controls {\n        display: flex;\n        align-items: center;\n        gap: 12px;\n        flex-wrap: wrap;\n        padding: 12px 16px;\n        border-bottom: 1px solid var(--border, #e5e7eb);\n      }\n      button {\n        border: 1px solid var(--border, #e5e7eb);\n        border-radius: var(--radius-sm, 7px);\n        padding: 6px 12px;\n        color: inherit;\n        background: var(--background, #fff);\n        font: inherit;\n        cursor: pointer;\n      }\n      button:hover {\n        background: var(--card, #f6f7f9);\n      }\n      button:focus-visible,\n      input:focus-visible {\n        outline: 2px solid var(--ring, #437de8);\n        outline-offset: 2px;\n      }\n      .speed {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        font-size: 12px;\n      }\n      input {\n        width: 100px;\n        accent-color: var(--primary, #437de8);\n      }\n      #speed-value {\n        min-width: 3em;\n        font-variant-numeric: tabular-nums;\n      }\n      .layout {\n        display: grid;\n        grid-template-columns: minmax(0, 1fr) 170px;\n        gap: 16px;\n        padding: 16px;\n      }\n      svg {\n        display: block;\n        width: 100%;\n        height: 100%;\n        min-height: 260px;\n        background: #061426;\n        border-radius: var(--radius-lg, 10px);\n      }\n      svg text {\n        fill: #dbe6f7;\n        font-size: 11px;\n      }\n      svg [role="button"] {\n        cursor: pointer;\n        outline: none;\n      }\n      svg [role="button"]:focus circle {\n        stroke: #fff;\n        stroke-width: 4;\n      }\n      .details {\n        background: var(--card, #f6f7f9);\n        border: 1px solid var(--border, #e5e7eb);\n        border-radius: var(--radius-lg, 10px);\n        padding: 16px;\n      }\n      .details p {\n        margin: 0;\n        color: var(--muted-foreground, #777e89);\n        font-size: 11px;\n      }\n      .details .eyebrow {\n        text-transform: uppercase;\n        letter-spacing: 0.04em;\n        font-size: 10px;\n      }\n      h1 {\n        margin: 6px 0 4px;\n        font-size: 22px;\n        font-weight: 550;\n      }\n      dl {\n        border-top: 1px solid var(--border, #e5e7eb);\n        margin: 16px 0 0;\n        padding-top: 16px;\n      }\n      dt {\n        color: var(--muted-foreground, #777e89);\n        font-size: 11px;\n      }\n      dd {\n        margin: 4px 0 18px;\n        font-size: 13px;\n      }\n      dd:last-child {\n        margin-bottom: 0;\n      }\n      .note {\n        margin: 0;\n        padding: 0 16px 14px;\n        color: var(--muted-foreground, #777e89);\n        font-size: 10px;\n        line-height: 1.5;\n      }\n      @media (max-width: 500px) {\n        .layout {\n          grid-template-columns: 1fr;\n        }\n        svg {\n          min-height: 220px;\n        }\n        dl {\n          display: grid;\n          grid-template-columns: 1fr 1fr;\n          gap: 4px 12px;\n        }\n        dt:nth-of-type(2) {\n          grid-column: 2;\n          grid-row: 1;\n        }\n        dd {\n          margin: 0;\n        }\n        .controls {\n          gap: 8px;\n        }\n      }\n    </style>\n  </head>\n  <body>\n    \x3c!--labels--\x3e\n    <main>\n      <div class="controls">\n        <button id="play" type="button"></button>\n        <label class="speed"\n          ><span data-text="speed"></span\n          ><input\n            id="speed"\n            type="range"\n            min="0.5"\n            max="5"\n            step="0.5"\n            value="3" /><output id="speed-value" for="speed"></output\n        ></label>\n        <button id="reset" type="button" data-text="reset"></button>\n      </div>\n      <div class="layout">\n        <svg id="system" viewBox="0 0 680 360" role="group">\n          <g id="orbits"></g>\n          <circle cx="340" cy="180" r="27" fill="#ffcf69" opacity=".1" />\n          <circle cx="340" cy="180" r="14" fill="#ffda7b" />\n          <text x="340" y="210" text-anchor="middle" id="sun"></text>\n          <g id="planets"></g>\n        </svg>\n        <section class="details" aria-live="polite">\n          <p class="eyebrow" data-text="selectedBody"></p>\n          <h1 id="name"></h1>\n          <p id="kind"></p>\n          <dl>\n            <dt data-text="planetYear"></dt>\n            <dd id="orbit"></dd>\n            <dt data-text="distanceFromSun"></dt>\n            <dd id="distance"></dd>\n          </dl>\n        </section>\n      </div>\n      <p class="note" data-text="solarNote"></p>\n    </main>\n    <script>\n      const el = (id) => document.getElementById(id);\n      document\n        .querySelectorAll("[data-text]")\n        .forEach((e) => (e.textContent = text[e.dataset.text]));\n      document.title = text.solarTitle;\n      el("system").setAttribute("aria-label", text.solarTitle);\n      el("sun").textContent = text.sun;\n      const planets = text.solarPlanets;\n      let days = 0,\n        selected = 5,\n        playing = false,\n        last = null,\n        frame = null;\n      const ns = "http://www.w3.org/2000/svg";\n      function node(tag, attrs, parent) {\n        const n = document.createElementNS(ns, tag);\n        Object.entries(attrs).forEach(([k, v]) => n.setAttribute(k, v));\n        parent.append(n);\n        return n;\n      }\n      const groups = planets.map((p, i) => {\n        const radius = 40 + i * 36;\n        node(\n          "ellipse",\n          {\n            cx: 340,\n            cy: 180,\n            rx: radius,\n            ry: radius * 0.45,\n            fill: "none",\n            stroke: "#41516c",\n            "stroke-width": 1,\n          },\n          el("orbits"),\n        );\n        const group = node(\n          "g",\n          {\n            role: "button",\n            tabindex: 0,\n            "aria-label": text[p[0]],\n            "aria-pressed": i === selected,\n          },\n          el("planets"),\n        );\n        node("circle", { r: 17, fill: "transparent" }, group);\n        if (i === 5)\n          node(\n            "ellipse",\n            {\n              rx: 15,\n              ry: 5,\n              fill: "none",\n              stroke: "#efe5bd",\n              transform: "rotate(-25)",\n            },\n            group,\n          );\n        node(\n          "circle",\n          { r: p[3], fill: p[4], stroke: "#eaf1fc", "stroke-width": 1.5 },\n          group,\n        );\n        const label = node(\n          "text",\n          { y: -p[3] - 8, "text-anchor": "middle" },\n          group,\n        );\n        label.textContent = text[p[0]];\n        group.onclick = () => {\n          selected = i;\n          draw();\n          updateDetails();\n        };\n        group.onkeydown = (e) => {\n          if (e.key === "Enter" || e.key === " ") {\n            e.preventDefault();\n            selected = i;\n            draw();\n            updateDetails();\n          }\n        };\n        return group;\n      });\n      function draw() {\n        groups.forEach((g, i) => {\n          const a = (days / planets[i][2]) * Math.PI * 2 + i * 0.93,\n            r = 40 + i * 36;\n          g.setAttribute(\n            "transform",\n            "translate(" +\n              (340 + Math.cos(a) * r) +\n              "," +\n              (180 + Math.sin(a) * r * 0.45) +\n              ")",\n          );\n          g.setAttribute("aria-pressed", i === selected);\n          g.style.filter = i === selected ? "drop-shadow(0 0 5px #bde4ff)" : "";\n        });\n        el("play").textContent = playing ? text.pause : text.play;\n        el("play").setAttribute("aria-pressed", playing);\n      }\n      function updateDetails() {\n        const p = planets[selected];\n        el("name").textContent = text[p[0]];\n        el("kind").textContent =\n          selected < 4\n            ? text.terrestrialPlanet\n            : selected < 6\n              ? text.gasGiant\n              : text.iceGiant;\n        el("distance").textContent = new Intl.NumberFormat(text.locale, {\n          style: "unit",\n          unit: "kilometer",\n          unitDisplay: "short",\n          notation: "compact",\n          compactDisplay: "long",\n          maximumFractionDigits: 2,\n        }).format(p[1] * 149597870.7);\n        el("orbit").textContent = text.earthYears[selected];\n      }\n      function updateSpeed() {\n        el("speed-value").textContent =\n          new Intl.NumberFormat(text.locale, {\n            minimumFractionDigits: 1,\n            maximumFractionDigits: 1,\n          }).format(Number(el("speed").value)) + "×";\n      }\n      function tick(now) {\n        if (playing && last !== null && !document.hidden) {\n          days +=\n            Math.min((now - last) / 1000, 0.1) * Number(el("speed").value) * 20;\n          draw();\n        }\n        last = now;\n        if (playing) frame = requestAnimationFrame(tick);\n      }\n      el("play").onclick = () => {\n        playing = !playing;\n        if (!playing) cancelAnimationFrame(frame);\n        if (playing) {\n          last = null;\n          frame = requestAnimationFrame(tick);\n        }\n        draw();\n      };\n      el("speed").oninput = updateSpeed;\n      el("reset").onclick = () => {\n        cancelAnimationFrame(frame);\n        days = 0;\n        selected = 5;\n        playing = false;\n        last = null;\n        el("speed").value = el("speed").defaultValue;\n        draw();\n        updateDetails();\n        updateSpeed();\n      };\n      document.addEventListener("visibilitychange", () => {\n        last = null;\n      });\n      draw();\n      updateDetails();\n      updateSpeed();\n    <\/script>\n  </body>\n</html>\n'.replace(
            "\x3c!--labels--\x3e",
            () => t,
          ),
        piano:
          '<!doctype html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width,initial-scale=1" />\n    <style>\n      * {\n        box-sizing: border-box;\n      }\n      body {\n        margin: 0;\n        background: var(--background, #fafaf8);\n        color: var(--foreground, #272727);\n        font:\n          14px system-ui,\n          sans-serif;\n      }\n      main {\n        color: var(--foreground, #272727);\n        font:\n          14px system-ui,\n          sans-serif;\n        background: var(--background, #fafaf8);\n        border: 1px solid var(--border, #d4d4d0);\n        padding: 22px;\n      }\n      header {\n        display: flex;\n        align-items: center;\n        gap: 16px;\n        flex-wrap: wrap;\n        margin-bottom: 20px;\n      }\n      h1 {\n        color: inherit;\n        font-size: 18px;\n        font-weight: 650;\n        margin: 0;\n        margin-right: auto;\n      }\n      .octave {\n        display: flex;\n        gap: 9px;\n        align-items: center;\n      }\n      button {\n        font: inherit;\n        cursor: pointer;\n      }\n      header button {\n        color: inherit;\n        background: transparent;\n        border: 1px solid var(--border, #c6c6c0);\n        width: 32px;\n        height: 32px;\n      }\n      .volume {\n        font-size: 11px;\n        text-transform: uppercase;\n        display: flex;\n        align-items: center;\n        gap: 9px;\n      }\n      input {\n        width: 78px;\n        accent-color: var(--primary, #50534e);\n      }\n      .keyboard {\n        position: relative;\n        display: flex;\n        height: 215px;\n        border: 1px solid #5c5e58;\n        touch-action: none;\n      }\n      .key {\n        border-radius: 0;\n        border: 0;\n        padding: 0;\n        display: flex;\n        align-items: flex-end;\n        justify-content: center;\n        user-select: none;\n        touch-action: none;\n      }\n      .white {\n        width: calc(100% / 14);\n        height: 100%;\n        background: white;\n        border-right: 1px solid #d0d0cb;\n        border-bottom: 5px solid #deded8;\n        color: #888;\n        padding-bottom: 18px;\n      }\n      .black {\n        position: absolute;\n        top: 0;\n        width: 4.6%;\n        height: 61%;\n        background: #262825;\n        color: #b6b8b1;\n        border: 1px solid #141611;\n        border-radius: 0 0 3px 3px;\n        padding-bottom: 15px;\n        z-index: 1;\n      }\n      .key.active {\n        background: #e5e5df;\n        color: #272727;\n      }\n      .black.active {\n        background: #4b4e47;\n        color: #b6b8b1;\n      }\n      footer {\n        display: flex;\n        justify-content: space-between;\n        gap: 12px;\n        flex-wrap: wrap;\n        font-size: 11px;\n        color: var(--muted-foreground, #858880);\n        margin-top: 12px;\n      }\n      #status::before {\n        content: "";\n        display: inline-block;\n        width: 6px;\n        height: 6px;\n        margin-right: 6px;\n        border-radius: 50%;\n        background: var(--muted-foreground, #bfc1b9);\n      }\n      #status.playing::before {\n        background: var(--primary, #50534e);\n      }\n      .keys {\n        font-size: 11px;\n      }\n      button:focus-visible {\n        outline: 3px solid var(--ring, #508cc0);\n        outline-offset: -3px;\n      }\n      @media (max-width: 620px) {\n        main {\n          padding: 16px;\n        }\n        .keyboard {\n          height: 170px;\n        }\n        .volume {\n          width: 100%;\n        }\n        .volume input {\n          flex: 1;\n        }\n        .key {\n          font-size: 10px;\n        }\n        header {\n          gap: 9px;\n        }\n      }\n    </style>\n  </head>\n  <body>\n    \x3c!--labels--\x3e\n    <main>\n      <header>\n        <h1 data-text="pianoTitle"></h1>\n        <div class="octave">\n          <button id="down">−</button><output id="range"></output\n          ><button id="up">+</button>\n        </div>\n        <label class="volume"\n          ><span data-text="volume"></span\n          ><input\n            id="volume"\n            type="range"\n            min="0"\n            max="1"\n            step=".01"\n            value=".65"\n        /></label>\n      </header>\n      <div class="keyboard" id="keyboard" role="group"></div>\n      <footer>\n        <span id="status" role="status" data-text="audioHint"></span\n        ><span class="keys" data-text="keyboardHint"></span>\n      </footer>\n    </main>\n    <script>\n      const el = (id) => document.getElementById(id);\n      document\n        .querySelectorAll("[data-text]")\n        .forEach((e) => (e.textContent = text[e.dataset.text]));\n      document.title = text.pianoTitle;\n      el("down").setAttribute("aria-label", text.octaveDown);\n      el("up").setAttribute("aria-label", text.octaveUp);\n      el("keyboard").setAttribute("aria-label", text.pianoTitle);\n      const mapping = [\n        "a",\n        "w",\n        "s",\n        "e",\n        "d",\n        "f",\n        "t",\n        "g",\n        "y",\n        "h",\n        "u",\n        "j",\n        "k",\n        "o",\n        "l",\n        "p",\n        ";",\n        "\'",\n        "]",\n      ];\n      const names = [\n        "C",\n        "C♯",\n        "D",\n        "D♯",\n        "E",\n        "F",\n        "F♯",\n        "G",\n        "G♯",\n        "A",\n        "A♯",\n        "B",\n      ];\n      let octave = 4,\n        audio = null;\n      const voices = new Map();\n      const held = new Map();\n      const keys = [];\n      function stop(key) {\n        held.delete(key);\n        const voice = voices.get(key);\n        if (!voice) return;\n        voice.gain.gain.cancelScheduledValues(audio.currentTime);\n        voice.gain.gain.setTargetAtTime(0, audio.currentTime, 0.025);\n        voice.osc.stop(audio.currentTime + 0.15);\n        voices.delete(key);\n        el("status").classList.toggle("playing", voices.size > 0);\n        keys[key].classList.remove("active");\n        keys[key].setAttribute("aria-pressed", "false");\n      }\n      function stopAll() {\n        Array.from(held.keys()).forEach(stop);\n      }\n      async function start(key) {\n        if (held.has(key)) return;\n        const press = {};\n        held.set(key, press);\n        try {\n          audio ??= new AudioContext();\n          if (audio.state !== "running") await audio.resume();\n          if (held.get(key) !== press) return;\n          const osc = audio.createOscillator(),\n            gain = audio.createGain();\n          osc.type = "triangle";\n          osc.frequency.value =\n            440 * 2 ** (((octave + 1) * 12 + key - 69) / 12);\n          gain.gain.setValueAtTime(0, audio.currentTime);\n          gain.gain.linearRampToValueAtTime(\n            Number(el("volume").value) * 0.15,\n            audio.currentTime + 0.01,\n          );\n          osc.connect(gain).connect(audio.destination);\n          osc.start();\n          osc.onended = () => {\n            osc.disconnect();\n            gain.disconnect();\n          };\n          voices.set(key, { osc, gain });\n          el("status").classList.add("playing");\n          keys[key].classList.add("active");\n          keys[key].setAttribute("aria-pressed", "true");\n          el("status").textContent = text.audioOn;\n        } catch {\n          held.delete(key);\n          el("status").textContent = text.audioUnavailable;\n        }\n      }\n      function labels() {\n        keys.forEach((b, i) => {\n          const note = names[i % 12] + (octave + Math.floor(i / 12));\n          b.setAttribute("aria-label", note);\n          b.textContent = b.classList.contains("black")\n            ? (mapping[i] ?? "").toUpperCase()\n            : note;\n        });\n        el("range").textContent = "C" + octave + "–B" + (octave + 1);\n        el("down").disabled = octave === 2;\n        el("up").disabled = octave === 6;\n      }\n      let whites = 0;\n      for (let i = 0; i < 24; i++) {\n        const black = [1, 3, 6, 8, 10].includes(i % 12),\n          b = document.createElement("button");\n        b.className = "key " + (black ? "black" : "white");\n        b.setAttribute("aria-pressed", "false");\n        if (black) b.style.left = (whites / 14) * 100 - 2.3 + "%";\n        else whites++;\n        b.onpointerdown = (e) => {\n          e.preventDefault();\n          b.setPointerCapture(e.pointerId);\n          start(i);\n        };\n        b.onpointerup = () => stop(i);\n        b.onpointercancel = () => stop(i);\n        b.onlostpointercapture = () => stop(i);\n        b.onblur = () => stop(i);\n        b.onkeydown = (e) => {\n          if ((e.key === " " || e.key === "Enter") && !e.repeat) {\n            e.preventDefault();\n            start(i);\n          }\n        };\n        b.onkeyup = (e) => {\n          if (e.key === " " || e.key === "Enter") {\n            e.preventDefault();\n            stop(i);\n          }\n        };\n        keys.push(b);\n        el("keyboard").append(b);\n      }\n      el("down").onclick = () => {\n        stopAll();\n        octave = Math.max(2, octave - 1);\n        labels();\n      };\n      el("up").onclick = () => {\n        stopAll();\n        octave = Math.min(6, octave + 1);\n        labels();\n      };\n      el("volume").oninput = () =>\n        voices.forEach((v) =>\n          v.gain.gain.setTargetAtTime(\n            Number(el("volume").value) * 0.15,\n            audio.currentTime,\n            0.01,\n          ),\n        );\n      document.addEventListener("keydown", (e) => {\n        if (\n          e.target instanceof HTMLInputElement ||\n          e.ctrlKey ||\n          e.metaKey ||\n          e.altKey\n        )\n          return;\n        const i = mapping.indexOf(e.key.toLowerCase());\n        if (i >= 0 && !e.repeat) {\n          e.preventDefault();\n          start(i);\n        }\n      });\n      document.addEventListener("keyup", (e) => {\n        const i = mapping.indexOf(e.key.toLowerCase());\n        if (i >= 0) stop(i);\n      });\n      window.addEventListener("blur", stopAll);\n      document.addEventListener("visibilitychange", () => {\n        if (document.hidden) stopAll();\n      });\n      labels();\n    <\/script>\n  </body>\n</html>\n'.replace(
            "\x3c!--labels--\x3e",
            () => t,
          ),
      }
    }
  },
}
//# sourceMappingURL=337184.1781c2146a.js.map
