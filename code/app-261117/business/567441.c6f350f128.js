export const __rspack_esm_ids = [567441]
export const __webpack_modules__ = {
  NoEg(e, t, s) {
    s.d(t, { FeedValidationError: () => S, R: () => _, FeedValidationReport: () => y })
    var i = s("ABep"),
      n = s("QosV"),
      r = s("oyxz"),
      l = s("ASxG"),
      a = s("MM0V"),
      o = s("ZtSy"),
      d = s("GlQn"),
      u = s("eShZ")
    let c = l.Ikc({
      field: l.YjP().optional(),
      issue: l.YjP().optional(),
      item_countries: l.YOg(l.YjP()).optional(),
      supported_countries: l.YOg(l.YjP()).optional(),
      kept_countries: l.YOg(l.YjP()).optional(),
      excluded_countries: l.YOg(l.YjP()).optional(),
      actual_currency: l.YjP().nullable().optional(),
      expected_currency: l.YjP().optional(),
      expected_currencies: l.YOg(l.YjP()).optional(),
    })
    function f(e) {
      let t,
        s = (0, n.c)(4),
        { detail: l } = e
      if (s[0] !== l) {
        t = Symbol.for("react.early_return_sentinel")
        e: {
          let e = c.safeParse(l)
          if (!e.success) {
            t = null
            break e
          }
          let n = e.data
          if (null != n.item_countries && null != n.supported_countries) {
            t = (0, i.jsx)("p", {
              className: "text-secondary",
              children: (0, i.jsx)(r.A, {
                id: "merchantSettings.validation.countryComparison",
                defaultMessage: "Product countries: {actual}. Countries allowed for this feed: {expected}",
                values: { actual: n.item_countries.join(", "), expected: n.supported_countries.join(", ") },
              }),
            })
            break e
          }
          let a = n.expected_currencies ?? (null == n.expected_currency ? [] : [n.expected_currency])
          if (null != n.actual_currency && a.length > 0) {
            let e,
              l = { actual: n.actual_currency, expected: a.join(", ") }
            ;(s[2] !== l
              ? ((e = (0, i.jsx)("p", {
                  className: "text-secondary",
                  children: (0, i.jsx)(r.A, {
                    id: "merchantSettings.validation.currencyComparison",
                    defaultMessage: "Product currency: {actual}. Currencies allowed for this feed: {expected}",
                    values: l,
                  }),
                })),
                (s[2] = l),
                (s[3] = e))
              : (e = s[3]),
              (t = e))
            break e
          }
        }
        ;((s[0] = l), (s[1] = t))
      } else t = s[1]
      return t !== Symbol.for("react.early_return_sentinel") ? t : null
    }
    function p(e) {
      let t,
        s,
        l,
        o,
        d,
        u,
        c = (0, n.c)(21),
        { report: f } = e,
        p = f.eligible_sampled_rows ?? 0,
        m = f.filtered_sampled_rows ?? 0,
        g = f.filter_counts?.defaulted_target_country ?? 0
      return (
        c[0] !== f.supported_countries
          ? ((t = f.supported_countries.join(", ")), (c[0] = f.supported_countries), (c[1] = t))
          : (t = c[1]),
        c[2] !== t
          ? ((s = (0, i.jsx)("p", {
              className: "text-secondary",
              children: (0, i.jsx)(r.A, {
                id: "merchantSettings.validation.configuredMarkets",
                defaultMessage: "Countries allowed for this feed: {countries}",
                values: { countries: t },
              }),
            })),
            (c[2] = t),
            (c[3] = s))
          : (s = c[3]),
        c[4] !== g || c[5] !== f.supported_countries[0] || c[6] !== f.supported_countries.length
          ? ((l =
              g > 0 &&
              1 === f.supported_countries.length &&
              (0, i.jsx)("p", {
                className: "text-secondary",
                children: (0, i.jsx)(r.A, {
                  id: "merchantSettings.validation.defaultedTargetCountry",
                  defaultMessage:
                    "Used {country} for {count, plural, one {# sampled product} other {# sampled products}} missing target_countries.",
                  values: { count: g, country: f.supported_countries[0] },
                }),
              })),
            (c[4] = g),
            (c[5] = f.supported_countries[0]),
            (c[6] = f.supported_countries.length),
            (c[7] = l))
          : (l = c[7]),
        c[8] !== f.filter_counts?.unsupported_country || c[9] !== f.legacy_country_parsing
          ? ((o =
              f.legacy_country_parsing &&
              (f.filter_counts?.unsupported_country ?? 0) > 0 &&
              (0, i.jsx)(a.l, {
                variant: "callout",
                layout: "vertical",
                type: "caution",
                content: (0, i.jsx)(r.A, {
                  id: "merchantSettings.validation.legacyCountryAction",
                  defaultMessage:
                    "OpenAI needs to check this feed\u2019s country configuration. If your product countries are correct, contact support before changing your file.",
                }),
              })),
            (c[8] = f.filter_counts?.unsupported_country),
            (c[9] = f.legacy_country_parsing),
            (c[10] = o))
          : (o = c[10]),
        c[11] !== p || c[12] !== m || c[13] !== f.filter_counts?.partial_country_match || c[14] !== f.filter_samples
          ? ((d =
              p > 0 &&
              (m > 0 || (f.filter_counts?.partial_country_match ?? 0) > 0) &&
              (0, i.jsxs)(i.Fragment, {
                children: [
                  m > 0 &&
                    (0, i.jsx)("p", {
                      children: (0, i.jsx)(r.A, {
                        id: "merchantSettings.validation.partialFilterAction",
                        defaultMessage:
                          "Some sampled products are outside this feed\u2019s allowed countries or currencies. Check these examples if the exclusions are unexpected",
                      }),
                    }),
                  (0, i.jsx)("ul", { className: "flex flex-col gap-3", children: f.filter_samples?.map(h) }),
                ],
              })),
            (c[11] = p),
            (c[12] = m),
            (c[13] = f.filter_counts?.partial_country_match),
            (c[14] = f.filter_samples),
            (c[15] = d))
          : (d = c[15]),
        c[16] !== s || c[17] !== l || c[18] !== o || c[19] !== d
          ? ((u = (0, i.jsxs)("section", { className: "flex flex-col gap-3", children: [s, l, o, d] })),
            (c[16] = s),
            (c[17] = l),
            (c[18] = o),
            (c[19] = d),
            (c[20] = u))
          : (u = c[20]),
        u
      )
    }
    function h(e, t) {
      if ("partial_country_match" === e.error_type) {
        let t = c.safeParse(e.details?.[0])
        if (t.success && t.data.kept_countries?.length && t.data.excluded_countries?.length)
          return (0, i.jsx)(
            "li",
            {
              children: (0, i.jsx)(r.A, {
                id: "merchantSettings.validation.partialCountrySample",
                defaultMessage: "Sample {number} can continue in {kept}. It will be excluded from {excluded}.",
                values: {
                  number: e.row_index + 1,
                  kept: t.data.kept_countries.join(", "),
                  excluded: t.data.excluded_countries.join(", "),
                },
              }),
            },
            e.row_index,
          )
      }
      return (0, i.jsxs)(
        "li",
        {
          children: [
            (0, i.jsx)("p", {
              children: (0, i.jsx)(r.A, {
                id: "merchantSettings.validation.filteredSample",
                defaultMessage: "Excluded sample {number}",
                values: { number: e.row_index + 1 },
              }),
            }),
            e.details?.map((t, s) => {
              let n = c.safeParse(t)
              return (0, i.jsxs)(
                "div",
                {
                  children: [
                    (0, i.jsx)(d.s, {
                      field: n.success ? (n.data.field ?? "product") : "product",
                      reason: e.error_type,
                    }),
                    (0, i.jsx)(f, { detail: t }),
                  ],
                },
                s,
              )
            }),
          ],
        },
        `${e.row_index}:${t}`,
      )
    }
    var m = s("iSMw"),
      g = s("U5No")
    let x = " [Validation diagnostics truncated to fit the report size limit.]",
      b = l.Ikc({
        field: l.YjP().optional(),
        issue: l.YjP().optional(),
        loc: l.KCZ([l.YjP(), l.YOg(l.KCZ([l.YjP(), l.aig()]))]).optional(),
        type: l.YjP().optional(),
      })
    function y(e) {
      let t,
        s,
        l,
        d,
        u,
        c,
        f,
        h,
        m,
        x,
        b,
        y,
        v,
        j,
        w = (0, n.c)(37),
        { report: A, businessProfileId: S } = e,
        P = 0 === A.sampled_count,
        k = A.invalid_count > 0
      w[0] !== S || w[1] !== A ? ((t = (0, g.p)(A, S)), (w[0] = S), (w[1] = A), (w[2] = t)) : (t = w[2])
      let C = t
      w[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = {
            invalid: "error",
            empty: "caution",
            incomplete: "error",
            ineligible: "error",
            filtered: "caution",
            valid: "success",
          }),
          (w[3] = s))
        : (s = w[3])
      let M = s[C],
        N = "valid" === C || "filtered" === C ? "status" : "alert"
      return (
        w[4] !== A.processing?.filter_counts?.partial_country_match || w[5] !== C
          ? ((l =
              "filtered" === C && (A.processing?.filter_counts?.partial_country_match ?? 0) > 0
                ? (0, i.jsx)(r.A, {
                    id: "merchantSettings.validationReport.partialCountryTitle",
                    defaultMessage: "Some target countries will be excluded",
                  })
                : (0, i.jsx)(r.A, {
                    id: "merchantSettings.validationReport.status",
                    defaultMessage:
                      "{state, select, invalid {Validation errors} empty {No products could be checked} incomplete {Validation is incomplete} ineligible {No sampled products can be accepted} filtered {Some products will be excluded} other {No errors found in the sample}}",
                    values: { state: C },
                  })),
            (w[4] = A.processing?.filter_counts?.partial_country_match),
            (w[5] = C),
            (w[6] = l))
          : (l = w[6]),
        w[7] !== A.invalid_count || w[8] !== A.sampled_count
          ? ((d = (0, i.jsx)("p", {
              children: (0, i.jsx)(r.A, {
                id: "merchantSettings.validationReport.checkedRows",
                defaultMessage: "Checked {sampled} sample rows; {invalid} rows have errors",
                values: { sampled: A.sampled_count, invalid: A.invalid_count },
              }),
            })),
            (w[7] = A.invalid_count),
            (w[8] = A.sampled_count),
            (w[9] = d))
          : (d = w[9]),
        w[10] !== P || w[11] !== k
          ? ((u =
              (k || P) &&
              (0, i.jsx)("p", {
                children: (0, i.jsx)(r.A, {
                  id: "merchantSettings.validationReport.nextStep",
                  defaultMessage:
                    "{empty, select, yes {Check that the feed contains product records, then validate again before submitting} other {Resolve the reported issues, then validate again before submitting}}",
                  values: { empty: P ? "yes" : "no" },
                }),
              })),
            (w[10] = P),
            (w[11] = k),
            (w[12] = u))
          : (u = w[12]),
        w[13] !== C
          ? ((c =
              "incomplete" === C &&
              (0, i.jsx)("p", {
                children: (0, i.jsx)(r.A, {
                  id: "merchantSettings.validationReport.incompleteEligibility",
                  defaultMessage:
                    "The required feed checks did not complete. Validate again before submitting. If this continues, contact OpenAI support",
                }),
              })),
            (w[13] = C),
            (w[14] = c))
          : (c = w[14]),
        w[15] !== C
          ? ((f =
              "ineligible" === C &&
              (0, i.jsx)("p", {
                children: (0, i.jsx)(r.A, {
                  id: "merchantSettings.validationReport.noEligibleProducts",
                  defaultMessage:
                    "Check the sample errors and this feed\u2019s country and currency settings, then validate again. If your product values already match, contact OpenAI support",
                }),
              })),
            (w[15] = C),
            (w[16] = f))
          : (f = w[16]),
        w[17] !== d || w[18] !== u || w[19] !== c || w[20] !== f
          ? ((h = (0, i.jsxs)("div", { className: "flex flex-col gap-2", children: [d, u, c, f] })),
            (w[17] = d),
            (w[18] = u),
            (w[19] = c),
            (w[20] = f),
            (w[21] = h))
          : (h = w[21]),
        w[22] !== h || w[23] !== M || w[24] !== N || w[25] !== l
          ? ((m = (0, i.jsx)(a.l, { variant: "callout", layout: "vertical", type: M, role: N, title: l, content: h })),
            (w[22] = h),
            (w[23] = M),
            (w[24] = N),
            (w[25] = l),
            (w[26] = m))
          : (m = w[26]),
        w[27] !== A.processing
          ? ((x = null != A.processing && (0, i.jsx)(p, { report: A.processing })), (w[27] = A.processing), (w[28] = x))
          : (x = w[28]),
        w[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, i.jsx)("p", {
              className: "text-secondary",
              children: (0, i.jsx)(r.A, {
                id: "merchantSettings.validationReport.sampleScope",
                defaultMessage:
                  "Only a sample was checked. Processing the full feed and downloading images can reveal additional issues.",
              }),
            })),
            (w[29] = b))
          : (b = w[29]),
        w[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, i.jsx)(o.G, {
              href: "https://developers.openai.com/commerce/specs/file-upload/products",
              initiator: "open_in_browser_bridge",
              underline: "always",
              children: (0, i.jsx)(r.A, {
                id: "merchantSettings.feedFormats.specifications",
                defaultMessage: "Feed specifications",
              }),
            })),
            (w[30] = y))
          : (y = w[30]),
        w[31] !== A.error_samples
          ? ((v =
              A.error_samples.length > 0 &&
              (0, i.jsxs)("section", {
                className: "flex flex-col gap-3",
                children: [
                  (0, i.jsx)("h3", {
                    className: "font-semibold",
                    children: (0, i.jsx)(r.A, {
                      id: "merchantSettings.validationReport.examples",
                      defaultMessage: "What to fix",
                    }),
                  }),
                  (0, i.jsx)("p", {
                    className: "text-xs text-secondary",
                    children: (0, i.jsx)(r.A, {
                      id: "merchantSettings.validationReport.sampleNumbers",
                      defaultMessage:
                        "Sample numbers are not source line numbers. Examples may not cover every error in the feed.",
                    }),
                  }),
                  (0, i.jsx)(_, { samples: A.error_samples }),
                ],
              })),
            (w[31] = A.error_samples),
            (w[32] = v))
          : (v = w[32]),
        w[33] !== m || w[34] !== x || w[35] !== v
          ? ((j = (0, i.jsxs)("section", {
              className: "flex min-w-0 flex-col gap-4 text-sm select-text",
              children: [m, x, b, y, v],
            })),
            (w[33] = m),
            (w[34] = x),
            (w[35] = v),
            (w[36] = j))
          : (j = w[36]),
        j
      )
    }
    function _(e) {
      let t,
        s,
        r = (0, n.c)(4),
        { samples: l } = e
      return (
        r[0] !== l ? ((t = l.map(v)), (r[0] = l), (r[1] = t)) : (t = r[1]),
        r[2] !== t
          ? ((s = (0, i.jsx)("ul", { className: "flex flex-col gap-3", children: t })), (r[2] = t), (r[3] = s))
          : (s = r[3]),
        s
      )
    }
    function v(e, t) {
      return (0, i.jsxs)(
        "li",
        {
          className: "flex flex-col gap-2 border-b border-subtle py-3",
          children: [
            (0, i.jsx)("p", {
              className: "font-medium break-words",
              children: (0, i.jsx)(r.A, {
                id: "merchantSettings.validationReport.samplePosition",
                defaultMessage: "Sample {number}",
                values: { number: e.row_index + 1 },
              }),
            }),
            !e.details?.some(w) && (0, i.jsx)(A, { message: e.message }),
            e.details?.map(j),
          ],
        },
        `${e.row_index}:${t}`,
      )
    }
    function j(e, t) {
      let s = b.safeParse(e)
      if (!s.success) return null
      let { field: n, loc: r, issue: l, type: a } = s.data,
        o = n ?? (Array.isArray(r) ? r.join(".") : r)
      return o
        ? (0, i.jsxs)(
            "div",
            { children: [(0, i.jsx)(d.s, { field: o, reason: l ?? a ?? null }), (0, i.jsx)(f, { detail: e })] },
            t,
          )
        : null
    }
    function w(e) {
      let t = b.safeParse(e)
      if (!t.success) return !1
      let { field: s, loc: i } = t.data
      return !!(s ?? (Array.isArray(i) ? i.join(".") : i))
    }
    function A(e) {
      let t,
        s,
        l = (0, n.c)(4),
        { message: a } = e
      return (
        l[0] !== a
          ? ((t = a.endsWith(x)
              ? (0, i.jsx)(r.A, {
                  id: "merchantSettings.validationReport.truncatedSample",
                  defaultMessage: "{diagnostic} [Validation diagnostics truncated to fit the report size limit.]",
                  values: { diagnostic: a.slice(0, -x.length) },
                })
              : a),
            (l[0] = a),
            (l[1] = t))
          : (t = l[1]),
        l[2] !== t ? ((s = (0, i.jsx)("p", { children: t })), (l[2] = t), (l[3] = s)) : (s = l[3]),
        s
      )
    }
    function S(e) {
      let t,
        s,
        o,
        d,
        c,
        f,
        p = (0, n.c)(24),
        { error: h, source: g, renderDetail: x } = e,
        b = h instanceof u.FetchError ? h.status : null
      if (p[0] !== h || p[1] !== x || p[2] !== g || p[3] !== b) {
        let e = (function (e) {
          if (!(e instanceof u.FetchError) || 400 !== e.status) return null
          try {
            return l.Ikc({ detail: l.YjP() }).safeParse(JSON.parse(e.message)).data?.detail ?? null
          } catch {
            return null
          }
        })(h)
        if (h instanceof m.Hh) {
          let e
          ;(p[5] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(r.A, {
                id: "merchantSettings.validationReport.invalidDelimited",
                defaultMessage:
                  "The feed has mismatched columns or quotes. Give every record the same number of columns as the header. Quote cells containing delimiters or newlines, and double any quotes inside a quoted cell.",
              })),
              (p[5] = e))
            : (e = p[5]),
            (t = e))
        } else if (h instanceof m.pe) {
          let e
          ;(p[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(r.A, {
                id: "merchantSettings.validationReport.invalidEncoding",
                defaultMessage:
                  "The file is not valid UTF-8 text. Export it with UTF-8 encoding, gzip it, then validate again.",
              })),
              (p[6] = e))
            : (e = p[6]),
            (t = e))
        } else if (h instanceof m.Mz) {
          let e
          ;(p[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(r.A, {
                id: "merchantSettings.validationReport.invalidGzip",
                defaultMessage:
                  "This file is not gzip-compressed. Compress the CSV or JSONL file with gzip, then select it and validate again. Renaming a file to .gz does not compress it.",
              })),
              (p[7] = e))
            : (e = p[7]),
            (t = e))
        } else if (h instanceof m.tx) {
          let e
          ;(p[8] !== h.lineNumber
            ? ((e = (0, i.jsx)(r.A, {
                id: "merchantSettings.validationInvalidJsonlRecord",
                defaultMessage: "Invalid JSONL record on line {line}. Use one JSON object per line.",
                values: { line: h.lineNumber },
              })),
              (p[8] = h.lineNumber),
              (p[9] = e))
            : (e = p[9]),
            (t = e))
        } else if (null != e && ("hosted_url" !== g || "Invalid Business Profile feed request." !== e)) t = x?.(e) ?? e
        else if (null == b && "file" === g) {
          let e
          ;(p[10] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(r.A, {
                id: "merchantSettings.validationReport.fileUnavailable",
                defaultMessage:
                  "The file could not be read or validated. Check that it decompresses and contains product records, then retry.",
              })),
              (p[10] = e))
            : (e = p[10]),
            (t = e))
        } else if ("file" === g && (413 === b || 502 === b || 504 === b)) {
          let e
          ;(p[11] !== b
            ? ((e = (0, i.jsx)(r.A, {
                id: "merchantSettings.validationReport.fileRequestAction",
                defaultMessage:
                  "{status, select, 413 {The validation sample exceeds the request size limit. Check record sizes against the feed specifications, then try again.} 504 {Validation timed out. Retry; if it keeps failing, contact OpenAI support with your feed ID.} other {The validation service could not complete the request. Retry; if it keeps failing, contact OpenAI support with your feed ID.}}",
                values: { status: b },
              })),
              (p[11] = b),
              (p[12] = e))
            : (e = p[12]),
            (t = e))
        } else {
          let e,
            s = b ?? "unknown"
          ;(p[13] !== s
            ? ((e = (0, i.jsx)(r.A, {
                id: "merchantSettings.validationReport.requestAction",
                defaultMessage:
                  "{status, select, 400 {Check the source format and request settings, then retry validation} 401 {Sign in again, then retry validation} 403 {This account does not have access to validate this merchant feed. Ask a workspace administrator to check your access.} 413 {This feed exceeds the hosted validation size limit. Download the feed and validate it using Manual upload.} 429 {Too many validation requests. Wait a moment, then try again.} 502 {The hosted feed could not be fetched or validated. Check that the URL and HTTP headers allow access, then retry.} 504 {Validation timed out. Retry, or download the feed and validate it using Manual upload.} other {Validation is unavailable or was interrupted. Retry; if it keeps failing, contact OpenAI support with your feed ID.}}",
                values: { status: s },
              })),
              (p[13] = s),
              (p[14] = e))
            : (e = p[14]),
            (t = e))
        }
        ;((p[0] = h), (p[1] = x), (p[2] = g), (p[3] = b), (p[4] = t))
      } else t = p[4]
      let y = h instanceof m.Mz || h instanceof m.tx || 400 === b ? "error" : "caution"
      return (
        p[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, i.jsx)(r.A, {
              id: "merchantSettings.validationReport.incomplete",
              defaultMessage: "Validation could not complete",
            })),
            (p[15] = s))
          : (s = p[15]),
        p[16] !== t ? ((o = (0, i.jsx)("p", { children: t })), (p[16] = t), (p[17] = o)) : (o = p[17]),
        p[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, i.jsx)("p", {
              children: (0, i.jsx)(r.A, {
                id: "merchantSettings.validationReport.retryBeforeSubmit",
                defaultMessage: "Validate again before submitting; no passing result is available",
              }),
            })),
            (p[18] = d))
          : (d = p[18]),
        p[19] !== o
          ? ((c = (0, i.jsxs)("div", { className: "flex flex-col gap-2 select-text", children: [o, d] })),
            (p[19] = o),
            (p[20] = c))
          : (c = p[20]),
        p[21] !== y || p[22] !== c
          ? ((f = (0, i.jsx)(a.l, {
              variant: "callout",
              type: y,
              layout: "vertical",
              role: "alert",
              title: s,
              content: c,
            })),
            (p[21] = y),
            (p[22] = c),
            (p[23] = f))
          : (f = p[23]),
        f
      )
    }
  },
  iSMw(e, t, s) {
    var i = s("ASxG")
    let n = i.g1P(i.YjP(), i.L5J())
    class r extends Error {
      lineNumber
      constructor(e) {
        ;(super("Invalid JSONL record"), (this.lineNumber = e))
      }
    }
    class l extends Error {
      constructor() {
        super("The CSV has mismatched columns or quotes")
      }
    }
    class a extends Error {
      constructor() {
        super("The file is not valid UTF-8 text")
      }
    }
    class o extends Error {
      constructor() {
        super("The file does not have a gzip header.")
      }
    }
    function d(e, t) {
      try {
        return n.parse(JSON.parse(e))
      } catch {
        throw new r(t)
      }
    }
    function u(e) {
      let t = [],
        s = new Set()
      return (
        e.forEach((e, i) => {
          let n = e.trim() || `column_${i}`,
            r = n,
            l = 1
          for (; s.has(r);) ((r = `${n}_${l}`), (l += 1))
          ;(s.add(r), t.push(r))
        }),
        t
      )
    }
    function c(e, t, s, i, n) {
      if (i <= t) return void e.push(s)
      let r = Math.floor(n() * i)
      r < t && (e[r] = s)
    }
    async function f(e) {
      if ("function" == typeof e.arrayBuffer) return new Uint8Array(await e.arrayBuffer())
      if ("u" > typeof FileReader)
        return new Promise((t, s) => {
          let i = new FileReader()
          ;((i.onerror = () => {
            s(Error("Unable to read the selected file."))
          }),
            (i.onload = () => {
              let { result: e } = i
              e instanceof ArrayBuffer
                ? t(new Uint8Array(e))
                : "string" == typeof e
                  ? t(new TextEncoder().encode(e))
                  : s(Error("Unable to read the selected file."))
            }),
            i.readAsArrayBuffer(e))
        })
      if ("function" == typeof e.text) {
        let t = await e.text()
        return new TextEncoder().encode(t)
      }
      throw Error("Unable to read the selected file in this browser.")
    }
    s.d(
      t,
      {},
      {
        Hh: l,
        Mz: o,
        gN: async function (e, t = 100, p = Math.random, h) {
          let m, g
          h?.throwIfAborted()
          let x = await f(e.slice(0, 2))
          if ((h?.throwIfAborted(), !(x.length >= 2 && 31 === x[0] && 139 === x[1]))) throw new o()
          let b = (g = e.name.toLowerCase()).endsWith(".jsonl.gz")
              ? "jsonl"
              : /\.(tsv|txt)\.gz$/.test(g)
                ? "tsv"
                : "csv",
            y = "tsv" === b ? "	" : ","
          try {
            h?.throwIfAborted()
            let s = e
              .stream()
              .pipeThrough(new DecompressionStream("gzip"), { signal: h })
              .pipeThrough(new TextDecoderStream("utf-8", { fatal: !0 }), { signal: h })
            m =
              "jsonl" === b
                ? await (async function (e, t, s) {
                    let i = e.getReader(),
                      n = [],
                      r = "",
                      l = 0,
                      a = 0
                    try {
                      for (; l < 1e3;) {
                        let { value: e, done: o } = await i.read()
                        if (o) break
                        let u = (r += e).split(/\r?\n/)
                        for (let e of ((r = u.pop() ?? ""), u)) {
                          if (((a += 1), !e.trim())) continue
                          let i = d(e, a)
                          if (((l += 1), c(n, t, i, l, s), l >= 1e3)) break
                        }
                      }
                      if (r.trim() && l < 1e3) {
                        let e = d(r, a + 1)
                        ;((l += 1), c(n, t, e, l, s))
                      }
                    } finally {
                      await i.cancel()
                    }
                    if (0 === n.length) throw Error("Unable to parse any JSONL records from the selected file.")
                    return n
                  })(s, t, p)
                : await (async function (e, t, s, i) {
                    let n = e.getReader(),
                      r = [],
                      a = 0,
                      o = 0,
                      d = null,
                      f = [],
                      p = "",
                      h = !1,
                      m = !1,
                      g = !1,
                      x = !1,
                      b = () => {
                        let e = [...f, p]
                        if (((f = []), (p = ""), e.every((e) => "" === e))) return
                        if (!d) {
                          d = u(e)
                          return
                        }
                        if (e.length !== d.length) throw new l()
                        let i = {}
                        ;(d.forEach((t, s) => {
                          i[t] = e[s] ?? ""
                        }),
                          (a += 1),
                          (o += 1),
                          c(r, t, i, a, s))
                      },
                      y = (e) => {
                        for (let t = 0; t < e.length; t += 1) {
                          let s = e[t]
                          if (m) {
                            if (((m = !1), '"' === s)) {
                              p += '"'
                              continue
                            }
                            ;((h = !1), (g = !0))
                          }
                          if (g) {
                            if (s !== i && (" " === s || "	" === s)) continue
                            if (s !== i && "\r" !== s && "\n" !== s) throw new l()
                            g = !1
                          }
                          if (!x || ((x = !1), "\n" !== s)) {
                            if (h) {
                              if ('"' === s) {
                                m = !0
                                continue
                              }
                              p += s
                              continue
                            }
                            if ('"' === s) {
                              if ("" !== p.trim()) throw new l()
                              ;((p = ""), (h = !0))
                              continue
                            }
                            if (s === i) {
                              ;(f.push(p), (p = ""))
                              continue
                            }
                            if ("\n" === s || "\r" === s) {
                              if (
                                ("\r" === s && "\n" === e[t + 1]
                                  ? (t += 1)
                                  : "\r" === s && t === e.length - 1 && (x = !0),
                                b(),
                                o >= 1e3)
                              )
                                return
                              continue
                            }
                            p += s
                          }
                        }
                      }
                    try {
                      for (;;) {
                        let { value: e, done: t } = await n.read()
                        if (t || (y(e), o >= 1e3)) break
                      }
                      if (o < 1e3 && h && !m) throw new l()
                    } finally {
                      await n.cancel()
                    }
                    if ((o < 1e3 && (p || f.length > 0) && b(), !d || 0 === r.length))
                      throw Error("Unable to parse any CSV records from the selected file.")
                    return r
                  })(s, t, p, y)
          } catch (c) {
            if (c instanceof r || c instanceof l) throw c
            h?.throwIfAborted()
            let o = await (async function (e) {
              let [t, { ungzip: i }] = await Promise.all([f(e), s.e(463014).then(s.bind(s, "TUql"))])
              var n = i(t)
              try {
                return new TextDecoder("utf-8", { fatal: !0 }).decode(n)
              } catch {
                throw new a()
              }
            })(e)
            ;(h?.throwIfAborted(),
              (m = (function (e, t, s) {
                if (e.length <= t) return e.slice()
                let i = e.slice(0, t)
                for (let n = t; n < e.length; n += 1) {
                  let r = Math.floor(s() * (n + 1))
                  r < t && (i[r] = e[n])
                }
                return i
              })(
                "jsonl" === b
                  ? (function (e) {
                      let t = []
                      for (let [s, i] of e.split(/\r?\n/).entries())
                        if (i.trim() && (t.push(d(i, s + 1)), t.length >= 1e3)) break
                      if (0 === t.length) throw Error("Unable to parse any JSONL records from the selected file.")
                      return t
                    })(o)
                  : await (async function (e, t) {
                      let r,
                        { parse: a } = await s.e(749940).then(s.bind(s, "otI6"))
                      try {
                        r = a(e, { delimiter: t, columns: u, skip_empty_lines: !0, bom: !0, trim: !0, to: 1e3 })
                      } catch {
                        throw new l()
                      }
                      if (!Array.isArray(r) || 0 === r.length)
                        throw Error("Unable to parse any CSV records from the selected file.")
                      return i.YOg(n).parse(r)
                    })(o, y),
                t,
                p,
              )))
          }
          return { sampleRows: m, fileFormatHint: b }
        },
        pe: a,
        tx: r,
      },
    )
  },
  U5No(e, t, s) {
    function i(e, t) {
      return e.invalid_count > 0
        ? "invalid"
        : 0 === e.sampled_count
          ? "empty"
          : null == e.processing || (null != t && e.processing.business_profile_id !== t)
            ? "incomplete"
            : (e.processing.eligible_sampled_rows ?? 0) === 0
              ? "ineligible"
              : (e.processing.filtered_sampled_rows ?? 0) > 0 ||
                  (e.processing.filter_counts?.partial_country_match ?? 0) > 0
                ? "filtered"
                : "valid"
    }
    s.d(
      t,
      {},
      {
        i: function (e, t) {
          let s = i(e, t)
          return "valid" === s || "filtered" === s
        },
        p: i,
      },
    )
  },
  x5X9(e, t, s) {
    let i = (0, s("Qgfj").YK)({
      businessDeclined: {
        id: "businessProfiles.businessVerification.businessDeclined.title",
        defaultMessage: "Business verification declined",
      },
      declinedDescription: {
        id: "businessProfiles.overviewVerification.declinedDescription",
        defaultMessage: "Your business verification was declined. You can try verifying again.",
      },
      retryAction: { id: "businessProfiles.businessVerification.retry", defaultMessage: "Try again" },
    })
    s.d(t, {}, { e: i })
  },
  hIcQ(e, t, s) {
    s.d(t, { b: () => ta, BusinessProfileVerificationEntry: () => td, z: () => tc })
    var i = s("ABep"),
      n = s("QosV"),
      r = s("irkb"),
      l = s("T0Rc"),
      a = s("xSOA"),
      o = s("qmMi"),
      d = s("zd8w"),
      u = s("v7qY"),
      c = s("oyxz"),
      f = s("Qgfj"),
      p = s("Ywss"),
      h = s("ASxG"),
      m = s("UOa8"),
      g = s("Kwur"),
      x = s("JNtf"),
      b = s("mUDD"),
      y = s("RNul"),
      _ = s("XcNx"),
      v = s("eShZ"),
      j = s("C1dV"),
      w = s("ty20"),
      A = s("zCGz"),
      S = s("x5X9"),
      P = s("C7pe"),
      k = s("Cr32"),
      C = s("Fo5J"),
      M = s("l4He"),
      N = s("EnWC"),
      q = s("qHOU"),
      R = s("VFbM"),
      I = s("K5Tp"),
      T = s("Qsgo"),
      E = s("D7Ms"),
      F = s("FrrB"),
      U = s("NeEy"),
      D = s("T70E"),
      z = s("HqVX"),
      B = s("MnTr"),
      V = s("dIwc"),
      O = s("v1r0"),
      L = s("nBtg"),
      K = s("C64k"),
      $ = s("slpy"),
      G = s("JqJp"),
      H = s("ESTr")
    let Q = (0, H.a)({
      name: "chevron-right-md-regular-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 7.29126, y: 4.124512, width: 6.577881, height: 11.750977 },
        visualBounds: { x: 7.29126, y: 4.124512, width: 6.577881, height: 11.750977 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 7.29126, y: 4.124512, width: 6.577881, height: 11.750977 },
        center: { x: 10.580201, y: 10.000001 },
        insets: { top: 4.124512, right: 6.130859, bottom: 4.124511, left: 7.29126 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 10.580201, y: 10.000001 },
          foreground: { x: 10.580201, y: 10.000001 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M7.54754 14.3808C7.20583 14.7225 7.20583 15.2774 7.54754 15.6191C7.88925 15.9608 8.44411 15.9608 8.78582 15.6191L13.4909 10.913C13.9951 10.4086 13.9951 9.59122 13.4909 9.08685L8.78582 4.38079C8.44411 4.03908 7.88925 4.03908 7.54754 4.38079C7.20583 4.7225 7.20583 5.27737 7.54754 5.61907L11.9284 9.99993L7.54754 14.3808Z" fill="currentColor"/>',
    })
    var Y = s("qUxy")
    let W = (0, H.a)({
      name: "trash-regular-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 2.041748, y: 1.390625, width: 15.916992, height: 17.003906 },
        visualBounds: { x: 2.041748, y: 1.390625, width: 15.916992, height: 17.003906 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.041748, y: 1.390625, width: 15.916992, height: 17.003906 },
        center: { x: 10.000244, y: 9.892578 },
        insets: { top: 1.390625, right: 2.04126, bottom: 1.605469, left: 2.041748 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 10.000244, y: 9.892578 },
          foreground: { x: 10.000244, y: 9.892578 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M8.33374 8.29297C8.81676 8.29323 9.20874 8.68488 9.20874 9.16797V13.3477C9.20833 13.8304 8.81651 14.2224 8.33374 14.2227C7.85074 14.2227 7.45915 13.8306 7.45874 13.3477V9.16797C7.45874 8.68472 7.85049 8.29297 8.33374 8.29297Z" fill="currentColor"/> <path d="M11.6667 8.29297C12.15 8.29297 12.5417 8.68472 12.5417 9.16797V13.3477C12.5413 13.8306 12.1497 14.2227 11.6667 14.2227C11.1838 14.2227 10.7922 13.8306 10.7917 13.3477V9.16797C10.7917 8.68472 11.1835 8.29297 11.6667 8.29297Z" fill="currentColor"/> <path d="M9.99976 1.39062C12.1064 1.39062 13.8515 2.93854 14.1599 4.95898H17.0837C17.5668 4.95916 17.9587 5.35084 17.9587 5.83398C17.9587 6.31713 17.5668 6.70881 17.0837 6.70898H16.6677L16.1238 15.2354C16.0104 17.0122 14.536 18.3954 12.7556 18.3955H7.26733C5.4902 18.3955 4.01793 17.0173 3.90015 15.2441L3.33374 6.70898H2.91675C2.4335 6.70898 2.04175 6.31723 2.04175 5.83398C2.04175 5.35074 2.4335 4.95898 2.91675 4.95898H5.84058C6.14886 2.93865 7.8933 1.39078 9.99976 1.39062ZM5.64624 15.1279C5.70284 15.9818 6.41161 16.6455 7.26733 16.6455H12.7556C13.6128 16.6454 14.3231 15.9794 14.3777 15.124L14.9138 6.70898H5.08765L5.64624 15.1279ZM9.99976 3.14062C8.86383 3.14077 7.9105 3.91205 7.62866 4.95898H12.3718C12.0898 3.91195 11.1358 3.14062 9.99976 3.14062Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    var J = s("on57"),
      Z = s("K4Cx"),
      X = s("Wf1j"),
      ee = s("MOLT"),
      et = s("Sm6l"),
      es = s("HOLv"),
      ei = s("bVeK"),
      en = s("T1PX"),
      er = s("OWtl"),
      el = s("OMIV"),
      ea = s("iC84"),
      eo = s("yLSF"),
      ed = s("aUH2"),
      eu = s("DBCl"),
      ec = s("SPnB"),
      ef = s("tC4W"),
      ep = s("MKqN")
    let eh = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/webp",
      ...eu.h8j.map((e) => `.${e}`),
      ".heic",
      ".heif",
      ".avif",
      ".mpo",
    ].join(",")
    class em extends Error {
      kind
      constructor(e) {
        ;(super(`Invalid business photo: ${e}`), (this.kind = e))
      }
    }
    var eg = s("rxm1")
    let ex = "application/x-business-profile-photo",
      eb =
        "pointer-events-none opacity-0 transition-opacity duration-200 ease-out group-hover/photo:opacity-100 group-focus-within/photo:opacity-100 pointer-coarse:opacity-100 motion-reduce:transition-none",
      ey = (0, J.A)(
        eb,
        "absolute group-hover/photo:pointer-events-auto group-focus-within/photo:pointer-events-auto pointer-coarse:pointer-events-auto",
      ),
      e_ =
        "h-7 w-9 justify-center rounded-full bg-media-foreground/60 text-media-background backdrop-blur-sm enabled:hover:bg-media-foreground/80"
    function ev(e) {
      let t,
        s,
        r,
        l,
        a,
        u,
        c,
        f,
        p,
        h,
        g,
        x = (0, n.c)(52),
        { manager: b, readOnly: y } = e,
        _ = void 0 !== y && y,
        { accountId: v } = (0, m.As)()
      x[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = Promise.resolve()), (x[0] = t)) : (t = x[0])
      let w = (0, d.useRef)(t)
      x[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = (e) => {
            let t = w.current.then(e)
            return ((w.current = t.then(eS, eA)), t)
          }),
          (x[1] = s))
        : (s = x[1])
      let A = s
      x[2] !== b || x[3] !== _ ? ((r = _ || !(0, j.yL)(b)), (x[2] = b), (x[3] = _), (x[4] = r)) : (r = x[4])
      let S = r,
        P = (0, o._U)(!S && el.JW, ea.Lj)
      x[5] !== b.profile ? ((l = (0, eg.a)(b.profile)), (x[5] = b.profile), (x[6] = l)) : (l = x[6])
      let k = l,
        C = b.fields
      if (x[7] !== b.fields || x[8] !== k || x[9] !== e.loading || x[10] !== S || x[11] !== P) {
        u = Symbol.for("react.early_return_sentinel")
        e: {
          let t
          if (
            (x[14] !== k
              ? ((t = (e) =>
                  "local_business" === k ? "photos" === e.field_key : "ecommerce" !== k || "photos" !== e.field_key),
                (x[14] = k),
                (x[15] = t))
              : (t = x[15]),
            (a = C.filter(eC).filter(t)),
            e.loading)
          ) {
            let e,
              t = a.map(ej)
            ;(x[16] !== t || x[17] !== k || x[18] !== S || x[19] !== P
              ? ((e = (0, i.jsx)(V.Qw, { profileType: k, uploadsEnabled: P, media: t, galleryLimit: 50, readOnly: S })),
                (x[16] = t),
                (x[17] = k),
                (x[18] = S),
                (x[19] = P),
                (x[20] = e))
              : (e = x[20]),
              (u = e))
            break e
          }
        }
        ;((x[7] = b.fields), (x[8] = k), (x[9] = e.loading), (x[10] = S), (x[11] = P), (x[12] = a), (x[13] = u))
      } else ((a = x[12]), (u = x[13]))
      if (u !== Symbol.for("react.early_return_sentinel")) return u
      let { drafts: M, onDraftChange: N, onUploadingChange: q } = e
      if (S || ("local_business" !== k && "ecommerce" !== k)) {
        let e,
          t = !S
        return (
          x[21] !== a || x[22] !== b.profile.business_profile_id || x[23] !== t
            ? ((e = (0, i.jsx)(eP, { profileId: b.profile.business_profile_id, fields: a, showEditingNotice: t })),
              (x[21] = a),
              (x[22] = b.profile.business_profile_id),
              (x[23] = t),
              (x[24] = e))
            : (e = x[24]),
          e
        )
      }
      x[25] !== a || x[26] !== b.profile || x[27] !== P
        ? ((c = P ? null : (0, i.jsx)(eP, { profileId: b.profile.business_profile_id, fields: a })),
          (x[25] = a),
          (x[26] = b.profile),
          (x[27] = P),
          (x[28] = c))
        : (c = x[28])
      let R = !P
      if (
        x[29] !== v ||
        x[30] !== M ||
        x[31] !== a ||
        x[32] !== b.profile ||
        x[33] !== N ||
        x[34] !== q ||
        x[35] !== P
      ) {
        let e
        ;(x[37] !== v || x[38] !== M || x[39] !== b.profile || x[40] !== N || x[41] !== q || x[42] !== P
          ? ((e = (e) =>
              (0, i.jsx)(
                eN,
                {
                  profileId: b.profile.business_profile_id,
                  field: { ...e, can_edit: P && e.can_edit },
                  draft: M[e.field_key],
                  onDraftChange: N,
                  onUploadingChange: q,
                  serializeRequest: A,
                },
                `${v}:${b.profile.business_profile_id}:${e.field_key}`,
              )),
            (x[37] = v),
            (x[38] = M),
            (x[39] = b.profile),
            (x[40] = N),
            (x[41] = q),
            (x[42] = P),
            (x[43] = e))
          : (e = x[43]),
          (f = a.map(e)),
          (x[29] = v),
          (x[30] = M),
          (x[31] = a),
          (x[32] = b.profile),
          (x[33] = N),
          (x[34] = q),
          (x[35] = P),
          (x[36] = f))
      } else f = x[36]
      return (
        x[44] !== f
          ? ((p = (0, i.jsx)("div", { className: "flex flex-col gap-6", children: f })), (x[44] = f), (x[45] = p))
          : (p = x[45]),
        x[46] !== p || x[47] !== R
          ? ((h = (0, i.jsx)("div", { hidden: R, children: p })), (x[46] = p), (x[47] = R), (x[48] = h))
          : (h = x[48]),
        x[49] !== h || x[50] !== c
          ? ((g = (0, i.jsxs)(i.Fragment, { children: [c, h] })), (x[49] = h), (x[50] = c), (x[51] = g))
          : (g = x[51]),
        g
      )
    }
    function ej(e) {
      let t = eM(e.editor_value, e.field_key) ?? []
      return { key: e.field_key, count: t.length, visible: t.filter(ew).length }
    }
    function ew(e) {
      return "" !== e.url
    }
    function eA() {}
    function eS() {}
    function eP(e) {
      let t,
        s,
        r,
        l,
        a,
        o = (0, n.c)(17),
        { profileId: d, fields: u, showEditingNotice: f } = e,
        p = void 0 === f || f,
        h = (0, X.A)()
      if (o[0] !== u || o[1] !== d) {
        let e
        ;(o[3] !== d
          ? ((e = (e) =>
              (eM(e.editor_value, e.field_key) ?? [])
                .filter(ek)
                .map((t) =>
                  (0, i.jsx)(
                    ed.i,
                    {
                      className: (0, J.A)(
                        "h-full w-80 shrink-0 snap-start",
                        "logo" === e.field_key ? "object-contain" : "object-cover",
                      ),
                      profileId: d,
                      photo: t,
                    },
                    `${e.field_key}:${t.id}`,
                  ),
                )),
            (o[3] = d),
            (o[4] = e))
          : (e = o[4]),
          (t = u.flatMap(e)),
          (o[0] = u),
          (o[1] = d),
          (o[2] = t))
      } else t = o[2]
      let m = t
      return (
        o[5] !== h || o[6] !== m
          ? ((s =
              m.length > 0
                ? (0, i.jsx)("div", {
                    className: "flex h-80 snap-x snap-mandatory gap-1 overflow-x-auto",
                    role: "region",
                    tabIndex: 0,
                    "aria-label": h.formatMessage({
                      id: "businessProfiles.preview.photos",
                      defaultMessage: "Business photos",
                    }),
                    children: m,
                  })
                : null),
            (o[5] = h),
            (o[6] = m),
            (o[7] = s))
          : (s = o[7]),
        o[8] !== m.length || o[9] !== p
          ? ((r =
              p || 0 !== m.length
                ? null
                : (0, i.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, i.jsx)(c.A, {
                      id: "businessProfiles.adminView.noPhotos",
                      defaultMessage: "No photos available",
                    }),
                  })),
            (o[8] = m.length),
            (o[9] = p),
            (o[10] = r))
          : (r = o[10]),
        o[11] !== p
          ? ((l = p
              ? (0, i.jsx)("p", {
                  className: "text-sm text-secondary",
                  children: (0, i.jsx)(c.A, {
                    id: "businessProfiles.editor.photosComingSoon",
                    defaultMessage: "Photo editing is coming soon",
                  }),
                })
              : null),
            (o[11] = p),
            (o[12] = l))
          : (l = o[12]),
        o[13] !== s || o[14] !== r || o[15] !== l
          ? ((a = (0, i.jsxs)("div", { className: "flex flex-col gap-3", children: [s, r, l] })),
            (o[13] = s),
            (o[14] = r),
            (o[15] = l),
            (o[16] = a))
          : (a = o[16]),
        a
      )
    }
    function ek(e) {
      return "" !== e.url
    }
    function eC(e) {
      return "photos" === e.section && ("photos" === e.field_key || "logo" === e.field_key || "cover" === e.field_key)
    }
    function eM(e, t) {
      if (null == e) return []
      if ("photos" === t) return (0, L.oR)(e, L.I_)
      let s = (0, L.oR)(e, L.I_.element)
      return null == s ? null : [s]
    }
    function eN(e) {
      let t,
        s,
        r,
        l,
        a,
        f,
        p,
        h,
        x,
        b,
        _,
        v,
        j,
        w,
        A,
        S,
        P,
        k,
        C,
        M,
        N,
        q,
        R,
        I = (0, n.c)(85),
        { profileId: T, field: E, draft: F, onDraftChange: U, onUploadingChange: D, serializeRequest: z } = e,
        B = (0, o.gh)(er.u),
        O = (0, X.A)(),
        { accountId: L } = (0, m.As)(),
        K = (0, en.I)()
      I[0] !== L || I[1] !== T || I[2] !== z
        ? ((t = () =>
            (function (e) {
              let t = new Map(),
                s = new Set(),
                i = new Set()
              function n(n) {
                for (let [r, l] of t)
                  if (null == n || r === n) {
                    if ("draft" !== l) {
                      i.add(r)
                      continue
                    }
                    ;(t.delete(r), i.delete(r), s.add(r), e(r).catch(() => {}))
                  }
              }
              return {
                track(e) {
                  t.has(e) || s.has(e) || t.set(e, "draft")
                },
                retain(e) {
                  for (let s of t.keys()) null == s.reservation || e.has(s.reservation.upload_id) || n(s)
                },
                discard: n,
                finished(t) {
                  s.has(t) && e(t).catch(() => {})
                },
                submission(e, s) {
                  let r = !1
                  for (let l of t.keys())
                    null != l.reservation &&
                      e.has(l.reservation.upload_id) &&
                      ((r = !0),
                      "saved" === s
                        ? t.delete(l)
                        : "pending" === s || "unknown" === s
                          ? t.set(l, s)
                          : (t.set(l, "draft"), ("rejected" === s || i.has(l)) && n(l)))
                  return r
                },
              }
            })(async (e) => {
              null != L &&
                (await z(() =>
                  (async function (e, t, s) {
                    null != s.reservation &&
                      (await g.Request.safePost(
                        "/chat/frontend/v1/business-profiles/{business_profile_id}/media/uploads/{upload_id}/abandon",
                        {
                          parameters: { path: { business_profile_id: t, upload_id: s.reservation.upload_id } },
                          additionalHeaders: { "ChatGPT-Account-ID": e, "x-openai-use-sheep": "1" },
                          expectedErrorStatuses: [404, 409, 503],
                          requestBody: {},
                        },
                      ))
                  })(L, T, e),
                ))
            })),
          (I[0] = L),
          (I[1] = T),
          (I[2] = z),
          (I[3] = t))
        : (t = I[3])
      let [H] = (0, d.useState)(t),
        el = (0, d.useRef)(!0),
        ea = (0, d.useRef)(null),
        eg = (0, d.useRef)(null),
        ev = (0, d.useRef)(null),
        [ej, ew] = (0, d.useState)(null),
        [eA, eS] = (0, d.useState)(!1),
        [eP, ek] = (0, d.useState)(0),
        [eC, eN] = (0, d.useState)(null),
        eV = (0, d.useRef)(null),
        [eO, eL] = (0, d.useState)(null),
        [eK, e$] = (0, d.useState)(!1),
        [eG, eH] = (0, d.useState)(null),
        [eQ, eY] = (0, d.useState)(null),
        eW = eM(F?.operation === "clear" ? E.discovered_value : (F?.value ?? E.editor_value), E.field_key),
        eJ = E.field_key
      I[4] !== E.discovered_value || I[5] !== eJ
        ? ((s = eM(E.discovered_value, eJ)), (I[4] = E.discovered_value), (I[5] = eJ), (I[6] = s))
        : (s = I[6])
      let eZ = s,
        eX = null == eW || ("photos" === eJ && null == eZ),
        e0 = eX && E.can_clear && null != eZ,
        e1 = !E.can_edit || null == L || eA || eX,
        e2 = "photos" === eJ && (eW?.length ?? 0) >= 50,
        e4 = e1 || e2
      I[7] !== eJ || I[8] !== O ? ((r = O.formatMessage(eB[eJ])), (I[7] = eJ), (I[8] = O), (I[9] = r)) : (r = I[9])
      let e3 = r
      I[10] !== eJ || I[11] !== D || I[12] !== H
        ? ((l = () => {
            let e = eg.current
            ;((eg.current = null),
              e?.abort(),
              H.discard(),
              null != ev.current && URL.revokeObjectURL(ev.current),
              (ev.current = null),
              null != e && D(eJ, !1))
          }),
          (I[10] = eJ),
          (I[11] = D),
          (I[12] = H),
          (I[13] = l))
        : (l = I[13])
      let e5 = (0, d.useEffectEvent)(l)
      ;(I[14] !== e5
        ? ((a = () => (
            (el.current = !0),
            () => {
              ;((el.current = !1), e5())
            }
          )),
          (I[14] = e5),
          (I[15] = a))
        : (a = I[15]),
        I[16] === Symbol.for("react.memo_cache_sentinel") ? ((f = []), (I[16] = f)) : (f = I[16]),
        (0, d.useEffect)(a, f),
        I[17] !== E.can_edit
          ? ((p = () => {
              E.can_edit || eg.current?.abort()
            }),
            (h = [E.can_edit]),
            (I[17] = E.can_edit),
            (I[18] = p),
            (I[19] = h))
          : ((p = I[18]), (h = I[19])),
        (0, d.useEffect)(p, h),
        I[20] !== eZ ||
        I[21] !== F?.expected_revision ||
        I[22] !== E.can_clear ||
        I[23] !== E.revision ||
        I[24] !== eJ ||
        I[25] !== U ||
        I[26] !== H
          ? ((x = function (e, t, s) {
              ;(H.retain(new Set([...e.map(eD), ...(s?.items.flatMap(eU) ?? [])])), ew(s ?? null), eH(null))
              let i = {
                  expected_revision: t ?? F?.expected_revision ?? E.revision,
                  idempotency_key: crypto.randomUUID(),
                  confirmed: !0,
                },
                n =
                  "photos" === eJ &&
                  E.can_clear &&
                  e.length === eZ?.length &&
                  e.every((e, t) => "discovered" === e.source && e.id === eZ[t].id)
              U(
                eJ,
                0 === e.length || n
                  ? { ...i, operation: "clear", value: null }
                  : { ...i, operation: "upsert", value: JSON.stringify("photos" === eJ ? e : e[0]) },
              )
            }),
            (I[20] = eZ),
            (I[21] = F?.expected_revision),
            (I[22] = E.can_clear),
            (I[23] = E.revision),
            (I[24] = eJ),
            (I[25] = U),
            (I[26] = H),
            (I[27] = x))
          : (x = I[27]))
      let e8 = x,
        e7 = function (e, t, s) {
          let i = eW?.[e]
          if (e1 || null == eW || null == i || e === t) return
          let n = eW.toSpliced(e, 1)
          n.splice(t, 0, i)
          let r = s?.matches(":focus")
          ;((0, u.flushSync)(() => {
            ;(e8(n), eY((e) => ({ photoId: i.id, position: t + 1, count: n.length, sequence: (e?.sequence ?? 0) + 1 })))
          }),
            r && s?.disabled && s.parentElement?.querySelector("button:enabled")?.focus({ preventScroll: !0 }))
        },
        e6 = function (e) {
          eg.current === e &&
            ((eg.current = null),
            eS(!1),
            D(eJ, !1),
            null != ev.current && URL.revokeObjectURL(ev.current),
            (ev.current = null),
            eN(null))
        },
        e9 = async function (e) {
          if (null == L || !E.can_edit || eX || null != eg.current) return
          if (null != ej && ej !== e)
            for (let { attempt: e, photo: t } of ej.items)
              (null != t &&
                eW?.some((e) => {
                  let { id: s } = e
                  return s === t.id
                })) ||
                H.discard(e)
          let t = new AbortController()
          ;((eg.current = t), ew(e), eS(!0), D(eJ, !0), eH(null))
          let s = null,
            i = function () {
              eg.current !== t || t.signal.aborted || ek(e.items.reduce(eF, 0) / e.items.length)
            }
          if (
            (i(),
            await (async function (e, { signal: t, upload: s, onProgress: i, onFailure: n, cleanup: r }) {
              let l = 0
              await Promise.all(
                Array.from({ length: Math.min(5, e.items.length) }, async () => {
                  for (; !t.aborted;) {
                    let t = e.items[l++]
                    if (null == t) return
                    if (null == t.photo) {
                      r.track(t.attempt)
                      try {
                        ;((t.photo = await s(t.attempt, (e) => {
                          ;((t.progress = Math.min(100, Math.max(0, e))), i())
                        })),
                          i())
                      } catch (e) {
                        n(e)
                      } finally {
                        r.finished(t.attempt)
                      }
                    }
                  }
                }),
              )
            })(e, {
              signal: t.signal,
              cleanup: H,
              onProgress: i,
              upload: (s, i) =>
                (async function ({
                  scope: e,
                  accountId: t,
                  profileId: s,
                  upload: i,
                  signal: n,
                  isCurrent: r,
                  serializeRequest: l,
                  onPrepared: a,
                  onProgress: o,
                }) {
                  function d() {
                    if ((n.throwIfAborted(), !r() || e.get(ec.chatGptAuthenticatedAccountId$) !== t))
                      throw new DOMException("Photo upload is no longer current", "AbortError")
                  }
                  if ((d(), 0 === i.file.size)) throw new em("empty")
                  if (i.file.size > 0xa00000) throw new em("size")
                  if (null == i.prepared) {
                    let t = await (0, ee.pk)(e, i.file, n)
                    d()
                    let s = t.type.toLowerCase()
                    if (!(0, eu.cb0)(t) || ("" !== s && "application/octet-stream" !== s && !s.startsWith("image/")))
                      throw new em("format")
                    let r = await (0, ep.t)(e, t, n)
                    d()
                    let l = await r.file.slice(0, eu.VJf).arrayBuffer()
                    d()
                    let a = await (0, eu.VMY)(new Uint8Array(l))
                    if ((d(), null == a || !(0, eu.cb0)({ type: a }))) throw new em("format")
                    i.prepared = {
                      ...r,
                      file:
                        r.file.type === a
                          ? r.file
                          : new File([r.file], r.file.name, { type: a, lastModified: r.file.lastModified }),
                    }
                  }
                  let { file: u } = i.prepared
                  if (0 === u.name.length || [...u.name].length > 512) throw new em("name")
                  if (u.size > 0xa00000) throw new em("size")
                  a(u)
                  let c = u.type
                  if ("image/jpeg" !== c && "image/png" !== c && "image/gif" !== c && "image/webp" !== c)
                    throw new em("format")
                  let f = { "ChatGPT-Account-ID": t, "x-openai-use-sheep": "1" }
                  ;(null != i.reservation && i.bytesUploaded) ||
                    ((i.reservation = await l(
                      () => (
                        d(),
                        g.Request.safePost("/chat/frontend/v1/business-profiles/{business_profile_id}/media/uploads", {
                          parameters: { path: { business_profile_id: s } },
                          additionalHeaders: f,
                          requestBody: { upload_key: i.uploadKey, file_name: u.name, mime_type: c, size_bytes: u.size },
                          signal: n,
                        })
                      ),
                    )),
                    d())
                  let p = i.reservation
                  if (!i.bytesUploaded && !p.finalized) {
                    if (null == p.upload_url) throw Error("Business photo upload reservation has no destination")
                    ;(await (0, ef.uploadChatGptFileBytes)(e, {
                      file: u,
                      fileId: p.file_id,
                      fileName: u.name,
                      contentType: c,
                      uploadUrl: p.upload_url,
                      requiredHeaders:
                        0 === p.upload_headers.length
                          ? void 0
                          : Object.fromEntries(p.upload_headers.map(({ name: e, value: t }) => [e, t])),
                      signal: n,
                      onUploadProgress: o,
                    }),
                      d(),
                      (i.bytesUploaded = !0))
                  }
                  let h = await l(
                    () => (
                      d(),
                      g.Request.safePost(
                        "/chat/frontend/v1/business-profiles/{business_profile_id}/media/uploads/{upload_id}/finalize",
                        {
                          parameters: { path: { business_profile_id: s, upload_id: p.upload_id } },
                          additionalHeaders: f,
                          requestBody: {},
                          signal: n,
                        },
                      )
                    ),
                  )
                  d()
                  let m = new URL(h.url, window.location.origin)
                  if ("https:" !== m.protocol && m.origin !== window.location.origin)
                    throw Error("Photo service returned an unsupported display URL")
                  return { ...h, source: "owner" }
                })({
                  scope: B,
                  accountId: L,
                  profileId: T,
                  upload: s,
                  signal: t.signal,
                  isCurrent: () => eg.current === t,
                  serializeRequest: z,
                  onPrepared: (t) => {
                    if (1 !== e.items.length) return
                    null != ev.current && URL.revokeObjectURL(ev.current)
                    let s = URL.createObjectURL(t)
                    ;((ev.current = s), eN(s))
                  },
                  onProgress: i,
                }),
              onFailure: (e) => {
                t.signal.aborted ||
                  eg.current !== t ||
                  (e instanceof ee.jF
                    ? null == s && ((0, ee.rV)(B, e), (s = "conversion"))
                    : e instanceof em
                      ? null == s && (s = "name" === e.kind ? "filename" : "invalid")
                      : (s = "upload"))
              },
            }),
            t.signal.aborted || eg.current !== t)
          )
            return void e6(t)
          let n = e.items.flatMap(eE),
            r = new Set(n.map(eT))
          ;(n.length > 0 &&
            e8(
              "photos" === eJ
                ? [
                    ...e.photos.filter((e) => {
                      let { id: t } = e
                      return !r.has(t)
                    }),
                    ...n,
                  ]
                : n,
              e.expectedRevision,
              null == s ? void 0 : e,
            ),
            eH(s),
            e6(t))
        },
        te = function () {
          if (null != ej)
            for (let { attempt: e, photo: t } of ej.items)
              (null != t &&
                eW?.some((e) => {
                  let { id: s } = e
                  return s === t.id
                })) ||
                H.discard(e)
          let e = eg.current
          ;(null != e && (e.abort(), e6(e)), eH(null), ew(null))
        },
        tt = function (e) {
          if (!e1 && 0 !== e.length && null != eW) {
            if ("photos" === eJ && eW.length + e.length > 50) return void eH("limit")
            e9({
              items: ("photos" === eJ ? e : e.slice(0, 1)).map(eI),
              expectedRevision: F?.expected_revision ?? E.revision,
              photos: eW,
            })
          }
        }
      ;(I[28] !== eJ || I[29] !== U || I[30] !== H
        ? ((b = (e, t) => {
            let s = eM(e.value ?? null, eJ) ?? [],
              i = H.submission(new Set(s.map(eR)), t)
            "rejected" === t && i && el.current && (U(eJ, void 0), eH("save"))
          }),
          (I[28] = eJ),
          (I[29] = U),
          (I[30] = H),
          (I[31] = b))
        : (b = I[31]),
        I[32] !== e0 || I[33] !== eX
          ? ((_ = eX
              ? (0, i.jsx)("p", {
                  role: "alert",
                  className: "text-sm text-secondary",
                  children: e0
                    ? (0, i.jsx)(c.A, {
                        id: "businessProfiles.photos.unreadableOwnerMedia",
                        defaultMessage:
                          "These photos couldn\u2019t be read. Choose Restore Defaults to remove the unreadable owner changes before adding photos",
                      })
                    : (0, i.jsx)(c.A, {
                        id: "businessProfiles.photos.unreadableMedia",
                        defaultMessage:
                          "These photos couldn\u2019t be read. Reload the page to try again; discovered photos must be readable before you can add or remove photos",
                      }),
                })
              : null),
            (I[32] = e0),
            (I[33] = eX),
            (I[34] = _))
          : (_ = I[34]))
      let ts = "photos" === eJ ? "grid grid-cols-2 @5xl/business-editor:grid-cols-3" : "flex flex-wrap",
        ti = eK && !e4 && "rounded-2xl ring-2 ring-ring"
      ;(I[35] !== ts || I[36] !== ti
        ? ((v = (0, J.A)("gap-2", ts, ti)), (I[35] = ts), (I[36] = ti), (I[37] = v))
        : (v = I[37]),
        I[38] !== e4
          ? ((j = (e) => {
              e.dataTransfer.types.includes("Files") &&
                (e.preventDefault(), (e.dataTransfer.dropEffect = e4 ? "none" : "copy"), e$(!e4))
            }),
            (I[38] = e4),
            (I[39] = j))
          : (j = I[39]),
        I[40] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (e) => {
              ;(e.relatedTarget instanceof Node && e.currentTarget.contains(e.relatedTarget)) || e$(!1)
            }),
            (I[40] = w))
          : (w = I[40]))
      let tn = (e) => {
          e.dataTransfer.types.includes("Files") && (e.preventDefault(), e$(!1), tt(Array.from(e.dataTransfer.files)))
        },
        tr =
          null == eW || ("photos" !== eJ && (0 !== eW.length || eA))
            ? null
            : (0, i.jsxs)("button", {
                type: "button",
                disabled: e4,
                className: (0, J.A)(
                  ez(eJ),
                  "relative flex cursor-interaction items-center justify-center bg-secondary-ghost-hover text-secondary outline-none focus-visible:ring-2 focus-visible:ring-ring enabled:hover:bg-background-secondary-ghost-focus disabled:cursor-default disabled:opacity-40",
                  "photos" !== eJ && "border border-dashed border-default",
                ),
                onClick: () => ea.current?.click(),
                children: [
                  "cover" === eJ
                    ? (0, i.jsx)("span", {
                        className:
                          "flex size-8 items-center justify-center rounded-full bg-media-control-background text-media-foreground",
                        children: (0, i.jsx)(es.I, { asset: Y.r }),
                      })
                    : (0, i.jsx)(ei.ONy, {}),
                  (0, i.jsx)("span", {
                    className: "absolute inset-x-0 bottom-0 p-3 text-start text-xs",
                    children:
                      "cover" === eJ
                        ? (0, i.jsx)(c.A, {
                            id: "businessProfiles.photos.uploadCover",
                            defaultMessage: "Upload a cover photo",
                          })
                        : (0, i.jsx)(c.A, { id: "businessProfiles.photos.upload", defaultMessage: "Upload a photo" }),
                  }),
                ],
              }),
        tl =
          ("photos" === eJ || !eA) &&
          eW?.map((e, t) =>
            (0, i.jsxs)(
              Z.P.div,
              {
                className: (0, J.A)(
                  ez(eJ),
                  "group/photo relative overflow-hidden bg-secondary-ghost-hover",
                  "photos" === eJ && !e1 && eW.length > 1 && "cursor-grab select-none active:cursor-grabbing",
                ),
                draggable: "photos" === eJ && !e1 && eW.length > 1,
                onDragStartCapture: (t) => {
                  t.currentTarget.draggable &&
                    ((eV.current = e.id), (t.dataTransfer.effectAllowed = "move"), t.dataTransfer.setData(ex, e.id))
                },
                onDragOver: (t) => {
                  !e1 &&
                    null != eV.current &&
                    eV.current !== e.id &&
                    t.dataTransfer.types.includes(ex) &&
                    (t.preventDefault(), (t.dataTransfer.dropEffect = "move"), eL(e.id))
                },
                onDragLeave: (e) => {
                  ;(e.relatedTarget instanceof Node && e.currentTarget.contains(e.relatedTarget)) || eL(null)
                },
                onDrop: (e) => {
                  if (!e.dataTransfer.types.includes(ex)) return
                  ;(e.preventDefault(), eL(null))
                  let s = e.dataTransfer.getData(ex)
                  s === eV.current &&
                    e7(
                      eW.findIndex((e) => e.id === s),
                      t,
                    )
                },
                onDragEndCapture: () => {
                  ;((eV.current = null), eL(null))
                },
                layout: "photos" === eJ && !K && "position",
                transition: { layout: { type: "spring", stiffness: 420, damping: 38 } },
                children: [
                  (0, i.jsx)(ed.i, {
                    className: (0, J.A)(
                      "pointer-events-none size-full",
                      "logo" === eJ ? "object-contain" : "object-cover",
                    ),
                    profileId: T,
                    photo: e,
                  }),
                  "photos" === eJ
                    ? (0, i.jsx)("div", {
                        "aria-hidden": "true",
                        className: (0, J.A)(
                          eb,
                          "absolute inset-x-0 top-0 h-9 bg-linear-to-b/srgb from-media-background/50 to-transparent",
                        ),
                      })
                    : null,
                  "owner" === e.source
                    ? (0, i.jsx)("div", {
                        "aria-hidden": "true",
                        className: (0, J.A)(
                          eb,
                          "absolute inset-x-0 bottom-0 h-9 bg-linear-to-t/srgb from-media-background/50 to-transparent",
                        ),
                      })
                    : null,
                  eO === e.id
                    ? (0, i.jsx)("div", {
                        "aria-hidden": "true",
                        className: "pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-ring ring-inset",
                      })
                    : null,
                  eQ?.photoId === e.id
                    ? (0, i.jsx)(
                        Z.P.div,
                        {
                          className: "pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-ring ring-inset",
                          initial: { opacity: 1 },
                          animate: { opacity: [1, 1, 0] },
                          transition: { duration: 0.5, times: [0, 0.8, 1] },
                          "aria-hidden": "true",
                        },
                        eQ.sequence,
                      )
                    : null,
                  "photos" === eJ
                    ? (0, i.jsxs)("div", {
                        className: (0, J.A)(ey, "start-2 top-2 flex gap-2"),
                        children: [
                          (0, i.jsx)($.m, {
                            content: (0, i.jsx)(c.A, {
                              id: "businessProfiles.photos.moveTowardStartTooltip",
                              defaultMessage: "Move toward start",
                            }),
                            children: (0, i.jsx)(et.$, {
                              unstyled: !0,
                              className: e_,
                              type: "button",
                              disabled: e1 || 0 === t,
                              "aria-label": O.formatMessage(
                                {
                                  id: "businessProfiles.photos.moveTowardStart",
                                  defaultMessage: "Move photo {position, number} one spot toward the start",
                                },
                                { position: t + 1 },
                              ),
                              onClick: (e) => e7(t, t - 1, e.currentTarget),
                              children: (0, i.jsx)(es.I, { asset: G.E, className: "rtl:rotate-180" }),
                            }),
                          }),
                          (0, i.jsx)($.m, {
                            content: (0, i.jsx)(c.A, {
                              id: "businessProfiles.photos.moveTowardEndTooltip",
                              defaultMessage: "Move toward end",
                            }),
                            children: (0, i.jsx)(et.$, {
                              unstyled: !0,
                              className: e_,
                              type: "button",
                              disabled: e1 || t === eW.length - 1,
                              "aria-label": O.formatMessage(
                                {
                                  id: "businessProfiles.photos.moveTowardEnd",
                                  defaultMessage: "Move photo {position, number} one spot toward the end",
                                },
                                { position: t + 1 },
                              ),
                              onClick: (e) => e7(t, t + 1, e.currentTarget),
                              children: (0, i.jsx)(es.I, { asset: Q, className: "rtl:rotate-180" }),
                            }),
                          }),
                        ],
                      })
                    : null,
                  "owner" === e.source
                    ? (0, i.jsx)("div", {
                        className: (0, J.A)(ey, "end-2 bottom-2"),
                        children: (0, i.jsx)($.m, {
                          content: (0, i.jsx)(c.A, {
                            id: "businessProfiles.photos.removeTooltip",
                            defaultMessage: "Remove photo",
                          }),
                          children: (0, i.jsx)(et.$, {
                            unstyled: !0,
                            type: "button",
                            className: e_,
                            disabled: e1 || (1 === eW.length && !0 !== E.can_clear),
                            "aria-label": O.formatMessage(
                              { id: "businessProfiles.photos.remove", defaultMessage: "Remove {photo}" },
                              { photo: e.alt || e3 },
                            ),
                            onClick: () => e8(eW.filter((t) => t.id !== e.id)),
                            children: (0, i.jsx)(es.I, { asset: W, className: "text-danger" }),
                          }),
                        }),
                      })
                    : null,
                ],
              },
              e.id,
            ),
          )
      return (
        I[41] !== eJ || I[42] !== eW || I[43] !== eC || I[44] !== ej || I[45] !== eA
          ? ((A = eA
              ? ej?.items
                  .filter((e) => {
                    let { photo: t } = e
                    return (
                      null == t ||
                      !eW?.some((e) => {
                        let { id: s } = e
                        return s === t.id
                      })
                    )
                  })
                  .map((e) => {
                    let { attempt: t } = e
                    return (0, i.jsxs)(
                      "div",
                      {
                        className: (0, J.A)(
                          ez(eJ),
                          "relative flex items-center justify-center overflow-hidden bg-secondary-ghost-hover",
                        ),
                        children: [
                          null != eC
                            ? (0, i.jsx)("img", { className: "size-full object-cover", src: eC, alt: "" })
                            : null,
                          (0, i.jsx)("div", {
                            className: "absolute inset-0 flex items-center justify-center",
                            children: (0, i.jsx)(y.y, {}),
                          }),
                        ],
                      },
                      t.uploadKey,
                    )
                  })
              : null),
            (I[41] = eJ),
            (I[42] = eW),
            (I[43] = eC),
            (I[44] = ej),
            (I[45] = eA),
            (I[46] = A))
          : (A = I[46]),
        I[47] !== v || I[48] !== j || I[49] !== w || I[50] !== tn || I[51] !== tr || I[52] !== tl || I[53] !== A
          ? ((S = (0, i.jsxs)("div", {
              className: v,
              onDragOver: j,
              onDragLeave: w,
              onDrop: tn,
              children: [tr, tl, A],
            })),
            (I[47] = v),
            (I[48] = j),
            (I[49] = w),
            (I[50] = tn),
            (I[51] = tr),
            (I[52] = tl),
            (I[53] = A),
            (I[54] = S))
          : (S = I[54]),
        I[55] !== eJ || I[56] !== eQ
          ? ((P =
              "photos" === eJ
                ? (0, i.jsx)("p", {
                    className: "sr-only",
                    role: "status",
                    "aria-live": "polite",
                    "aria-atomic": "true",
                    children:
                      null != eQ
                        ? (0, i.jsx)(
                            c.A,
                            {
                              id: "businessProfiles.photos.movedPosition",
                              defaultMessage: "Photo moved to position {position, number} of {count, number}",
                              values: { position: eQ.position, count: eQ.count },
                            },
                            eQ.sequence,
                          )
                        : null,
                  })
                : null),
            (I[55] = eJ),
            (I[56] = eQ),
            (I[57] = P))
          : (P = I[57]),
        I[58] !== e1 || I[59] !== eJ || I[60] !== eW
          ? ((k =
              "photos" !== eJ && null != eW && eW.length > 0
                ? (0, i.jsx)("div", {
                    className: "flex",
                    children: (0, i.jsx)(et.$, {
                      type: "button",
                      color: "secondary",
                      size: "formAction",
                      disabled: e1,
                      onClick: () => ea.current?.click(),
                      children: (0, i.jsx)(c.A, {
                        id: "businessProfiles.photos.replace",
                        defaultMessage: "Replace photo",
                      }),
                    }),
                  })
                : null),
            (I[58] = e1),
            (I[59] = eJ),
            (I[60] = eW),
            (I[61] = k))
          : (k = I[61]),
        I[62] !== eJ
          ? ((C =
              "cover" === eJ
                ? (0, i.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, i.jsx)(V.k4, { kind: "cover" }),
                  })
                : null),
            (I[62] = eJ),
            (I[63] = C))
          : (C = I[63]),
        I[64] !== eJ
          ? ((M =
              "logo" === eJ
                ? (0, i.jsx)("p", { className: "text-sm text-secondary", children: (0, i.jsx)(V.k4, { kind: "logo" }) })
                : null),
            (I[64] = eJ),
            (I[65] = M))
          : (M = I[65]),
        I[66] !== e0 ||
        I[67] !== te ||
        I[68] !== E.can_edit ||
        I[69] !== E.revision ||
        I[70] !== eJ ||
        I[71] !== U ||
        I[72] !== H
          ? ((N = e0
              ? (0, i.jsx)(et.$, {
                  type: "button",
                  color: "ghost",
                  size: "formAction",
                  disabled: !E.can_edit,
                  onClick: () => {
                    ;(te(),
                      H.discard(),
                      U(eJ, {
                        expected_revision: E.revision,
                        idempotency_key: crypto.randomUUID(),
                        confirmed: !0,
                        operation: "clear",
                        value: null,
                      }))
                  },
                  children: (0, i.jsx)(c.A, {
                    id: "businessProfiles.field.restore",
                    defaultMessage: "Restore Defaults",
                  }),
                })
              : null),
            (I[66] = e0),
            (I[67] = te),
            (I[68] = E.can_edit),
            (I[69] = E.revision),
            (I[70] = eJ),
            (I[71] = U),
            (I[72] = H),
            (I[73] = N))
          : (N = I[73]),
        I[74] !== te || I[75] !== eP || I[76] !== ej || I[77] !== eA
          ? ((q = eA
              ? (0, i.jsxs)("div", {
                  className: "flex items-center justify-between gap-3",
                  children: [
                    (0, i.jsx)("p", {
                      className: "text-sm text-secondary",
                      role: "status",
                      children: (0, i.jsx)(c.A, {
                        id: "businessProfiles.photos.batchProgress",
                        defaultMessage: "Uploading {count, plural, one {photo} other {photos}}\u2026 {progress}%",
                        values: { count: ej?.items.length ?? 1, progress: Math.round(eP) },
                      }),
                    }),
                    (0, i.jsx)(et.$, {
                      type: "button",
                      color: "secondary",
                      size: "formAction",
                      onClick: te,
                      children: (0, i.jsx)(c.A, {
                        id: "businessProfiles.photos.cancelUpload",
                        defaultMessage: "Cancel upload",
                      }),
                    }),
                  ],
                })
              : null),
            (I[74] = te),
            (I[75] = eP),
            (I[76] = ej),
            (I[77] = eA),
            (I[78] = q))
          : (q = I[78]),
        I[79] !== e1 || I[80] !== eG || I[81] !== eW?.length || I[82] !== e9 || I[83] !== ej
          ? ((R =
              null != eG
                ? (0, i.jsxs)("div", {
                    className: "flex flex-col items-start gap-3",
                    children: [
                      (0, i.jsxs)("p", {
                        className: "text-sm text-danger",
                        role: "alert",
                        children: [
                          "limit" === eG
                            ? (0, i.jsx)(c.A, {
                                id: "businessProfiles.photos.selectionLimit",
                                defaultMessage:
                                  "Choose no more than {remaining, plural, one {# additional photo} other {# additional photos}}",
                                values: { remaining: 50 - (eW?.length ?? 0) },
                              })
                            : null,
                          "invalid" === eG
                            ? (0, i.jsx)(c.A, {
                                id: "businessProfiles.photos.invalidUpload",
                                defaultMessage: "Choose a supported, nonempty photo up to 10 MB and try again",
                              })
                            : null,
                          "filename" === eG
                            ? (0, i.jsx)(c.A, {
                                id: "businessProfiles.photos.invalidFilename",
                                defaultMessage: "Choose a photo with a filename between 1 and 512 characters",
                              })
                            : null,
                          "conversion" === eG
                            ? (0, i.jsx)(c.A, {
                                id: "businessProfiles.photos.conversionFailed",
                                defaultMessage:
                                  "This browser couldn\u2019t process that image. Convert it to JPEG and try again",
                              })
                            : null,
                          "save" === eG
                            ? (0, i.jsx)(c.A, {
                                id: "businessProfiles.photos.saveRejected",
                                defaultMessage:
                                  "This photo change couldn\u2019t be saved. Upload the photos again to retry",
                              })
                            : null,
                          "upload" === eG
                            ? (0, i.jsx)(c.A, {
                                id: "businessProfiles.photos.batchUploadFailed",
                                defaultMessage:
                                  "{count, plural, one {Couldn\u2019t upload this photo} other {Some photos couldn\u2019t be uploaded}}. Try again",
                                values: { count: ej?.items.length ?? 1 },
                              })
                            : null,
                        ],
                      }),
                      null != ej && "upload" === eG
                        ? (0, i.jsx)(et.$, {
                            type: "button",
                            color: "secondary",
                            size: "formAction",
                            disabled: e1,
                            onClick: () => void e9(ej),
                            children: (0, i.jsx)(c.A, {
                              id: "businessProfiles.photos.retryUpload",
                              defaultMessage: "Try again",
                            }),
                          })
                        : null,
                    ],
                  })
                : null),
            (I[79] = e1),
            (I[80] = eG),
            (I[81] = eW?.length),
            (I[82] = e9),
            (I[83] = ej),
            (I[84] = R))
          : (R = I[84]),
        (0, i.jsxs)(eo.k, {
          profileId: T,
          field: E,
          label: e3,
          draft: F,
          onDraftChange: (e) => {
            ;(te(), (null == e || "clear" === e.operation) && H.discard(), U(eJ, e))
          },
          onSubmissionState: b,
          valid:
            !eA &&
            (F?.operation === "clear" ||
              (!eX && ("photos" !== eJ || ((eW?.length ?? 0) >= 3 && (eW?.length ?? 0) <= 50)))),
          disabledSaveTooltip:
            "photos" === eJ && !e1 && F?.operation !== "clear" && (eW?.length ?? 0) < 3
              ? (0, i.jsx)(c.A, {
                  id: "businessProfiles.photos.minimumGuidance",
                  defaultMessage: "Add at least {minimum, number} photos before saving",
                  values: { minimum: 3 },
                })
              : null,
          children: [
            e2
              ? (0, i.jsx)("p", {
                  className: "text-sm text-secondary select-none",
                  role: "status",
                  children: (0, i.jsx)(c.A, {
                    id: "businessProfiles.photos.galleryLimit",
                    defaultMessage:
                      "{hasOwnerPhoto, select, true {You can include up to {maximum, number} photos. Remove one of your uploaded photos to make room for another} other {You can include up to {maximum, number} photos}}",
                    values: { maximum: 50, hasOwnerPhoto: String(eW?.some(eq) ?? !1) },
                  }),
                })
              : null,
            _,
            (0, i.jsx)("input", {
              id: `business-${eJ}`,
              ref: ea,
              type: "file",
              accept: eh,
              multiple: "photos" === eJ,
              className: "hidden",
              "aria-label": e3,
              disabled: e4,
              onChange: (e) => {
                let t = Array.from(e.currentTarget.files ?? [])
                ;((e.currentTarget.value = ""), tt(t))
              },
            }),
            S,
            P,
            k,
            C,
            M,
            N,
            q,
            R,
          ],
        })
      )
    }
    function eq(e) {
      return "owner" === e.source
    }
    function eR(e) {
      return e.id
    }
    function eI(e) {
      return {
        attempt: { file: e, uploadKey: crypto.randomUUID(), prepared: null, reservation: null, bytesUploaded: !1 },
        photo: null,
        progress: 0,
      }
    }
    function eT(e) {
      let { id: t } = e
      return t
    }
    function eE(e) {
      let { photo: t } = e
      return null == t ? [] : [t]
    }
    function eF(e, t) {
      return e + (null == t.photo ? t.progress : 100)
    }
    function eU(e) {
      let { attempt: t } = e
      return null == t.reservation ? [] : [t.reservation.upload_id]
    }
    function eD(e) {
      return e.id
    }
    function ez(e) {
      return "logo" === e
        ? "size-36 shrink-0 rounded-2xl"
        : "cover" === e
          ? "h-36 w-full rounded-2xl"
          : "h-45 min-w-0 rounded-2xl"
    }
    let eB = (0, f.YK)({
      photos: { id: "businessProfiles.photos.title", defaultMessage: "Photos" },
      logo: { id: "businessProfiles.photos.logo", defaultMessage: "Business logo" },
      cover: { id: "businessProfiles.photos.cover", defaultMessage: "Cover photo (optional)" },
    })
    var eV = s("hCJq")
    function eO(e) {
      let t,
        s,
        r,
        l = (0, n.c)(12),
        { manager: a, section: o, readOnly: d } = e,
        u = void 0 !== d && d
      if (l[0] !== a.fields || l[1] !== o) {
        let e
        l[4] !== o ? ((e = (e) => e.section === o), (l[4] = o), (l[5] = e)) : (e = l[5])
        let i = a.fields.find(e),
          n = i?.editor_value
        if ("hours" === o && null != n) {
          let e = (0, L.Cd)(n)
          t =
            null == e || new Set(e.days.map(eL)).size !== e.days.length
              ? null
              : K.p.map((t) => {
                  let s = e.days.find((e) => e.day === t)
                  return s && !s.closed ? s.intervals.length : 0
                })
        }
        ;(null != n && ("delivery" === o ? (s = (0, L.oR)(n, O.GN)) : "returns" === o && (s = (0, L.oR)(n, O.VD))),
          (l[0] = a.fields),
          (l[1] = o),
          (l[2] = t),
          (l[3] = s))
      } else ((t = l[2]), (s = l[3]))
      return (
        l[6] !== t || l[7] !== a || l[8] !== s || l[9] !== u || l[10] !== o
          ? ((r = (0, i.jsx)(B.C, {
              className: "min-w-0",
              children:
                "photos" === o
                  ? (0, i.jsx)(ev, { loading: !0, manager: a, readOnly: u })
                  : (0, i.jsx)(V.Ln, {
                      section: o,
                      policy: s,
                      policyChoices: "returns" === o || "delivery" === o ? eV.I[o] : void 0,
                      returnWindowPresets: O.Iw,
                      hourIntervals: t,
                      readOnly: u,
                      inlineContact: "owner" !== a.profile.relationship,
                    }),
            })),
            (l[6] = t),
            (l[7] = a),
            (l[8] = s),
            (l[9] = u),
            (l[10] = o),
            (l[11] = r))
          : (r = l[11]),
        r
      )
    }
    function eL(e) {
      let { day: t } = e
      return t
    }
    var eK = s("cwoy"),
      e$ = s("Bnmq")
    function eG(e) {
      let t,
        s,
        r,
        l,
        a,
        u,
        f,
        p,
        h,
        g,
        x,
        b = (0, n.c)(38),
        { grouped: y, showActions: _, profileId: v, section: j, children: A } = e,
        S = void 0 === _ || _,
        { accountId: P } = (0, m.As)()
      b[0] !== P || b[1] !== v || b[2] !== j
        ? ((t = { accountId: P, profileId: v, section: j }), (b[0] = P), (b[1] = v), (b[2] = j), (b[3] = t))
        : (t = b[3])
      let k = (0, o.uO)(e$.a, t)
      ;(b[4] !== y ? ((s = () => y), (r = [y]), (b[4] = y), (b[5] = s), (b[6] = r)) : ((s = b[5]), (r = b[6])),
        (0, d.useImperativeHandle)(k.mount, s, r))
      let C = (0, o.Ul)(k.states$),
        M = (0, o.Ul)(k.submission$),
        N = null != M,
        q = (0, o.Ul)(k.partiallySaved$)
      b[7] !== C ? ((l = Object.values(C).filter(eZ)), (b[7] = C), (b[8] = l)) : (l = b[8])
      let R = l
      b[9] !== R ? ((a = R.filter(eJ)), (b[9] = R), (b[10] = a)) : (a = b[10])
      let I = a
      b[11] !== R || b[12] !== N ? ((u = N || R.some(eW)), (b[11] = R), (b[12] = N), (b[13] = u)) : (u = b[13])
      let T = u
      if ("retry" === M || (!N && I.some(eY))) {
        let e
        ;(b[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(c.A, { id: "businessProfiles.about.button.retry", defaultMessage: "Retry save" })),
            (b[14] = e))
          : (e = b[14]),
          (f = e))
      } else {
        let e
        ;(b[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(c.A, { id: "businessProfiles.about.button.save", defaultMessage: "Save" })), (b[15] = e))
          : (e = b[15]),
          (f = e))
      }
      return (
        b[16] !== A || b[17] !== y || b[18] !== N
          ? ((p = y ? (0, i.jsx)("fieldset", { className: "min-w-0", disabled: N, children: A }) : A),
            (b[16] = A),
            (b[17] = y),
            (b[18] = N),
            (b[19] = p))
          : (p = b[19]),
        b[20] !== T || b[21] !== I || b[22] !== y || b[23] !== q
          ? ((h =
              y && q && I.length > 0 && !T
                ? (0, i.jsx)("p", {
                    role: "status",
                    className: "text-sm text-secondary select-none",
                    children: (0, i.jsx)(c.A, {
                      id: "businessProfiles.about.partialSave",
                      defaultMessage:
                        "Some changes were saved. Your remaining changes are still here. Try saving again.",
                    }),
                  })
                : null),
            (b[20] = T),
            (b[21] = I),
            (b[22] = y),
            (b[23] = q),
            (b[24] = h))
          : (h = b[24]),
        b[25] !== T ||
        b[26] !== I ||
        b[27] !== R ||
        b[28] !== k ||
        b[29] !== y ||
        b[30] !== N ||
        b[31] !== f ||
        b[32] !== S
          ? ((g =
              y && S
                ? (0, i.jsxs)("div", {
                    className: "flex flex-col items-stretch gap-3 select-none sm:flex-row sm:items-center sm:gap-2",
                    children: [
                      (0, i.jsx)(w.d, {
                        size: "formAction",
                        color: "outlineGhost",
                        type: "button",
                        disabled: 0 === I.length || T || R.some(eQ),
                        onClick: k.discardLocal,
                        children: (0, i.jsx)(c.A, {
                          id: "businessProfiles.about.button.discard",
                          defaultMessage: "Discard changes",
                        }),
                      }),
                      (0, i.jsx)(w.d, {
                        size: "formAction",
                        color: "primary",
                        type: "button",
                        disabled: 0 === I.length || T || I.some(eH),
                        loading: N,
                        onClick: () => void k.submit(),
                        children: f,
                      }),
                    ],
                  })
                : null),
            (b[25] = T),
            (b[26] = I),
            (b[27] = R),
            (b[28] = k),
            (b[29] = y),
            (b[30] = N),
            (b[31] = f),
            (b[32] = S),
            (b[33] = g))
          : (g = b[33]),
        b[34] !== g || b[35] !== p || b[36] !== h
          ? ((x = (0, i.jsxs)(i.Fragment, { children: [p, h, g] })), (b[34] = g), (b[35] = p), (b[36] = h), (b[37] = x))
          : (x = b[37]),
        x
      )
    }
    function eH(e) {
      return !e.canSave
    }
    function eQ(e) {
      return e.unconfirmed
    }
    function eY(e) {
      return e.retry
    }
    function eW(e) {
      return e.busy
    }
    function eJ(e) {
      return e.dirty
    }
    function eZ(e) {
      return null != e
    }
    var eX = s("GYJ9"),
      e0 = s("oFFd"),
      e1 = s("cvkI"),
      e2 = s("Md9P"),
      e4 = s("uYQT"),
      e3 = s("Gnfq")
    function e5(e) {
      let t,
        s,
        a,
        o,
        u,
        c,
        f,
        p,
        h,
        g = (0, n.c)(23),
        { manager: x, section: b, loading: y } = e,
        _ = (0, r.jE)(),
        { accountId: v } = (0, m.As)()
      g[0] !== v || g[1] !== x.profile.business_profile_id
        ? ((t = {
            queryKey: ["business-profiles", v, x.profile.business_profile_id, "manager"],
            queryFn: E.hT,
            staleTime: 1 / 0,
            gcTime: 0,
          }),
          (g[0] = v),
          (g[1] = x.profile.business_profile_id),
          (g[2] = t))
        : (t = g[2])
      let { data: j } = (0, l.I)(t),
        w = j ?? x
      g[3] !== v || g[4] !== w.profile.business_profile_id
        ? ((s = ["business-profiles", v, w.profile.business_profile_id, "verification-drafts"]),
          (g[3] = v),
          (g[4] = w.profile.business_profile_id),
          (g[5] = s))
        : (s = g[5])
      let A = s
      g[6] !== A
        ? ((a = { queryKey: A, queryFn: E.hT, staleTime: 1 / 0, gcTime: 0 }), (g[6] = A), (g[7] = a))
        : (a = g[7])
      let { data: S } = (0, l.I)(a),
        P = tn(w, S)
      g[8] === Symbol.for("react.memo_cache_sentinel") ? ((o = {}), (g[8] = o)) : (o = g[8])
      let [k, C] = (0, d.useState)(o),
        M = { ...k }
      for (let e of P.fields) {
        let t = e.current_revision?.flow_id,
          s =
            Object.values(S ?? {}).find((t) => t.fieldKey === e.field_key && "conflict" === t.localSubmission) ??
            (null == t ? void 0 : S?.[t])
        null == s ||
          ("conflict" !== s.localSubmission &&
            (e.current_revision?.id === e.approved_revision?.id ||
              (0, L.bD)(e) ||
              (!s.retry && null == e.latest_failure))) ||
          (Object.hasOwn(M, e.field_key) && null != M[e.field_key]) ||
          (M[e.field_key] = s.request)
      }
      g[9] === Symbol.for("react.memo_cache_sentinel") ? ((u = {}), (g[9] = u)) : (u = g[9])
      let [N, q] = (0, d.useState)(u),
        R =
          Object.values(N).some(e7) ||
          P.fields.some((e) => {
            let t = Object.hasOwn(M, e.field_key) ? M[e.field_key] : void 0
            return (0, L.CI)(e, t)
          })
      g[10] !== w || g[11] !== _ || g[12] !== A
        ? ((c = function (e, t) {
            ;(C((s) => ({ ...s, [e]: t })),
              _.setQueryData(A, (t) =>
                Object.fromEntries(
                  Object.entries(t ?? {}).filter((t) => {
                    let [s, i] = t
                    return (
                      i.fieldKey !== e ||
                      ("conflict" !== i.localSubmission &&
                        w.fields.some((t) => t.field_key === e && (0, L.bD)(t) && t.current_revision?.flow_id === s))
                    )
                  }),
                ),
              ))
          }),
          (g[10] = w),
          (g[11] = _),
          (g[12] = A),
          (g[13] = c))
        : (c = g[13])
      let I = c
      g[14] !== q
        ? ((f = function (e, t) {
            q((s) => (s[e] === t ? s : { ...s, [e]: t }))
          }),
          (g[14] = q),
          (g[15] = f))
        : (f = g[15])
      let T = f,
        [F, U] = (0, d.useState)(0),
        D = P.fields.map((e) => {
          let t = Object.hasOwn(M, e.field_key) ? M[e.field_key] : void 0
          if (null == t) return e
          let s = "clear" === t.operation ? e.discovered_value : (t.value ?? null)
          if (
            "upsert" === t.operation &&
            ("phone" === e.field_key || "email" === e.field_key || "website" === e.field_key)
          ) {
            let i = z.i0[e.field_key].safeParse(t.value)
            s = i.success ? i.data : null
          }
          return { ...e, preview_value: s }
        })
      g[16] !== P || g[17] !== D ? ((p = { ...P, fields: D }), (g[16] = P), (g[17] = D), (g[18] = p)) : (p = g[18])
      let B = p,
        V =
          void 0 !== y && y
            ? (0, i.jsx)(eO, { manager: P, section: b })
            : (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(e0.L, {
                    dirty: R,
                    onDiscard: () => {
                      for (let [e, t] of Object.entries(M)) null != t && I(e, void 0)
                      ;(q({}), U(e8))
                    },
                  }),
                  (0, i.jsx)(
                    eG,
                    {
                      grouped: "about" === b,
                      profileId: P.profile.business_profile_id,
                      section: b,
                      children: (0, i.jsx)(tt, {
                        manager: P,
                        section: b,
                        drafts: M,
                        onDraftChange: I,
                        onUploadingChange: T,
                        photoUploadGeneration: F,
                      }),
                    },
                    b,
                  ),
                ],
              })
      return (
        g[19] !== B || g[20] !== b || g[21] !== V
          ? ((h = (0, i.jsx)(eK.v, { manager: B, section: b, children: V })),
            (g[19] = B),
            (g[20] = b),
            (g[21] = V),
            (g[22] = h))
          : (h = g[22]),
        h
      )
    }
    function e8(e) {
      return e + 1
    }
    function e7(e) {
      return e
    }
    function e6(e) {
      let t,
        s = (0, n.c)(16),
        { manager: r, section: l, loading: a } = e,
        { accountId: d } = (0, m.As)(),
        u = (0, o.Ul)(j.wE)
      if (u?.mode === "admin_view") {
        let e, t, n, a
        s[0] !== r ? ((e = tn(r)), (s[0] = r), (s[1] = e)) : (e = s[1])
        let o = e
        return (
          s[2] === Symbol.for("react.memo_cache_sentinel") ? ((t = {}), (s[2] = t)) : (t = s[2]),
          s[3] !== o || s[4] !== l
            ? ((n = (0, i.jsx)(tt, {
                manager: o,
                section: l,
                readOnly: !0,
                drafts: t,
                onDraftChange: te,
                onUploadingChange: e9,
              })),
              (s[3] = o),
              (s[4] = l),
              (s[5] = n))
            : (n = s[5]),
          s[6] !== o || s[7] !== l || s[8] !== n
            ? ((a = (0, i.jsx)(eK.v, { manager: o, section: l, children: n })),
              (s[6] = o),
              (s[7] = l),
              (s[8] = n),
              (s[9] = a))
            : (a = s[9]),
          a
        )
      }
      if (!(0, j.yL)(r)) {
        let e
        return (
          s[10] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, i.jsx)(e4.CV, {})), (s[10] = e)) : (e = s[10]),
          e
        )
      }
      let c = `${d}:${r.profile.business_profile_id}`
      return (
        s[11] !== a || s[12] !== r || s[13] !== l || s[14] !== c
          ? ((t = (0, i.jsx)(e5, { manager: r, section: l, loading: a }, c)),
            (s[11] = a),
            (s[12] = r),
            (s[13] = l),
            (s[14] = c),
            (s[15] = t))
          : (t = s[15]),
        t
      )
    }
    function e9() {}
    function te() {}
    function tt(e) {
      let t,
        s,
        r,
        l,
        a = (0, n.c)(49),
        {
          manager: o,
          section: d,
          drafts: u,
          onDraftChange: f,
          onUploadingChange: p,
          photoUploadGeneration: h,
          readOnly: m,
        } = e,
        g = void 0 === h ? 0 : h,
        x = void 0 !== m && m
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, i.jsx)(F.A, {
            title: (0, i.jsx)(c.A, {
              id: "businessProfiles.editor.photosComingSoon",
              defaultMessage: "Photo editing is coming soon",
            }),
          })),
          (a[0] = t))
        : (t = a[0])
      let b = t
      if ("about" === d) {
        let e
        ;(a[1] !== u || a[2] !== o || a[3] !== f
          ? ((e = (0, i.jsx)(U.c, { manager: o, drafts: u, onDraftChange: f })),
            (a[1] = u),
            (a[2] = o),
            (a[3] = f),
            (a[4] = e))
          : (e = a[4]),
          (b = e))
      }
      a[5] !== o.fields ? ((s = o.fields.find(ti)), (a[5] = o.fields), (a[6] = s)) : (s = a[6])
      let y = s
      if ("contact" === d) {
        let e
        ;(a[7] !== u || a[8] !== o || a[9] !== f
          ? ((e = (0, i.jsx)(D.Z, { manager: o, drafts: u, onDraftChange: f })),
            (a[7] = u),
            (a[8] = o),
            (a[9] = f),
            (a[10] = e))
          : (e = a[10]),
          (b = e))
      }
      if ("location" === d && null != y) {
        let e, t
        ;(a[11] !== f ? ((e = (e) => f("address", e)), (a[11] = f), (a[12] = e)) : (e = a[12]),
          a[13] !== y || a[14] !== u.address || a[15] !== o.profile.business_profile_id || a[16] !== e
            ? ((t = (0, i.jsx)(e1.g, {
                profileId: o.profile.business_profile_id,
                field: y,
                draft: u.address,
                onDraftChange: e,
              })),
              (a[13] = y),
              (a[14] = u.address),
              (a[15] = o.profile.business_profile_id),
              (a[16] = e),
              (a[17] = t))
            : (t = a[17]),
          (b = t))
      }
      if ("photos" === d) {
        let e
        ;(a[18] !== u || a[19] !== o || a[20] !== f || a[21] !== p || a[22] !== g || a[23] !== x
          ? ((e = (0, i.jsx)(ev, { readOnly: x, manager: o, drafts: u, onDraftChange: f, onUploadingChange: p }, g)),
            (a[18] = u),
            (a[19] = o),
            (a[20] = f),
            (a[21] = p),
            (a[22] = g),
            (a[23] = x),
            (a[24] = e))
          : (e = a[24]),
          (b = e))
      }
      a[25] !== o.fields ? ((r = o.fields.find(ts)), (a[25] = o.fields), (a[26] = r)) : (r = a[26])
      let _ = r
      if ("hours" === d && null != _) {
        let e, t
        ;(a[27] !== f ? ((e = (e) => f("hours", e)), (a[27] = f), (a[28] = e)) : (e = a[28]),
          a[29] !== u.hours ||
          a[30] !== _ ||
          a[31] !== o.profile.business_profile_id ||
          a[32] !== o.timezone ||
          a[33] !== e
            ? ((t = (0, i.jsx)(eX.O, {
                profileId: o.profile.business_profile_id,
                field: _,
                timezone: o.timezone,
                draft: u.hours,
                onDraftChange: e,
              })),
              (a[29] = u.hours),
              (a[30] = _),
              (a[31] = o.profile.business_profile_id),
              (a[32] = o.timezone),
              (a[33] = e),
              (a[34] = t))
            : (t = a[34]),
          (b = t))
      }
      if (a[35] !== o.fields || a[36] !== d) {
        let e
        ;(a[38] !== d
          ? ((e = (e) =>
              ("delivery" === d && "delivery_policy" === e.field_key) ||
              ("returns" === d && "returns_policy" === e.field_key)),
            (a[38] = d),
            (a[39] = e))
          : (e = a[39]),
          (l = o.fields.find(e)),
          (a[35] = o.fields),
          (a[36] = d),
          (a[37] = l))
      } else l = a[37]
      let v = l
      if (null != v && (0, e3.Ys)(o, d)) {
        let e,
          t,
          s = u[v.field_key]
        ;(a[40] !== f || a[41] !== v.field_key
          ? ((e = (e) => f(v.field_key, e)), (a[40] = f), (a[41] = v.field_key), (a[42] = e))
          : (e = a[42]),
          a[43] !== o.policy_currency ||
          a[44] !== o.profile.business_profile_id ||
          a[45] !== v ||
          a[46] !== s ||
          a[47] !== e
            ? ((t = (0, i.jsx)(e2.B, {
                profileId: o.profile.business_profile_id,
                field: v,
                currency: o.policy_currency,
                draft: s,
                onDraftChange: e,
              })),
              (a[43] = o.policy_currency),
              (a[44] = o.profile.business_profile_id),
              (a[45] = v),
              (a[46] = s),
              (a[47] = e),
              (a[48] = t))
            : (t = a[48]),
          (b = t))
      }
      return b
    }
    function ts(e) {
      return "hours" === e.field_key
    }
    function ti(e) {
      return "address" === e.field_key
    }
    function tn(e, t) {
      return {
        ...e,
        fields: e.fields.map((s) =>
          "owner" === e.profile.relationship && ["phone", "email", "website"].includes(s.field_key)
            ? s
            : (0, L.bD)(s) ||
                (void 0 === s.pending_revision_id &&
                  null != s.current_revision &&
                  t?.[s.current_revision.flow_id] != null &&
                  s.current_revision.id !== s.approved_revision?.id &&
                  null == s.latest_failure)
              ? { ...s, editor_value: (0, L.An)(s), preview_value: (0, L.An)(s) }
              : s,
        ),
      }
    }
    var tr = s("wv9C")
    let tl = h.OZ5({ protocol: /^https$/ }).refine((e) => {
      let t = new URL(e)
      return (
        "https://withpersona.com" === t.origin &&
        "/verify" === t.pathname &&
        "" === t.username &&
        "" === t.password &&
        1 === t.searchParams.getAll("inquiry-id").length &&
        !!t.searchParams.get("inquiry-id")?.trim() &&
        1 === t.searchParams.getAll("session-token").length &&
        !!t.searchParams.get("session-token")?.trim()
      )
    })
    function ta(e) {
      let t,
        s,
        r,
        l,
        a = (0, n.c)(19)
      a[0] !== e
        ? (({ manager: t, section: r, ...s } = e), (a[0] = e), (a[1] = t), (a[2] = s), (a[3] = r))
        : ((t = a[1]), (s = a[2]), (r = a[3]))
      let d = (0, o.Ul)(j.wE)
      if (d?.mode === "admin_view") {
        let e
        if (null != s.pendingSection) {
          let e, n
          return (
            a[4] !== t || a[5] !== s.pendingSection
              ? ((e = (0, i.jsx)(eO, { manager: t, section: s.pendingSection, readOnly: !0 })),
                (a[4] = t),
                (a[5] = s.pendingSection),
                (a[6] = e))
              : (e = a[6]),
            a[7] !== t || a[8] !== s.pendingSection || a[9] !== e
              ? ((n = (0, i.jsx)(eK.v, { manager: t, section: s.pendingSection, children: e })),
                (a[7] = t),
                (a[8] = s.pendingSection),
                (a[9] = e),
                (a[10] = n))
              : (n = a[10]),
            n
          )
        }
        return (
          a[11] !== t || a[12] !== r
            ? ((e = (0, i.jsx)(e6, { manager: t, section: r }, r)), (a[11] = t), (a[12] = r), (a[13] = e))
            : (e = a[13]),
          e
        )
      }
      if (!(0, j.yL)(t)) {
        let e
        return (
          a[14] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, i.jsx)(e4.CV, {})), (a[14] = e)) : (e = a[14]),
          e
        )
      }
      return (
        a[15] !== t || a[16] !== s || a[17] !== r
          ? ((l = (0, i.jsx)(to, { manager: t, section: r, ...s })), (a[15] = t), (a[16] = s), (a[17] = r), (a[18] = l))
          : (l = a[18]),
        l
      )
    }
    function to(e) {
      var t, s
      let r,
        l,
        a,
        o,
        d,
        u = (0, n.c)(23),
        { manager: c, section: f, pendingSection: h, loadingSection: m, loadingContent: g } = e,
        x = void 0 !== m && m,
        b = (0, p.Zp)(),
        y = h ?? f,
        _ = h ?? f
      u[0] !== c || u[1] !== y || u[2] !== _
        ? ((r = (0, i.jsx)(e6, { manager: c, section: _, loading: !0 }, y)),
          (u[0] = c),
          (u[1] = y),
          (u[2] = _),
          (u[3] = r))
        : (r = u[3])
      let v = r
      u[4] !== c.profile.business_profile_id || u[5] !== b
        ? ((l = () => void b((0, e3.Ds)(c.profile.business_profile_id))),
          (u[4] = c.profile.business_profile_id),
          (u[5] = b),
          (u[6] = l))
        : (l = u[6])
      let j = h ?? f,
        w = h ?? f
      return (
        u[7] !== x || u[8] !== c || u[9] !== h || u[10] !== f
          ? ((a =
              null != h ||
              (x &&
                ((t = c),
                !(
                  "photos" !== (s = f) &&
                  {
                    about: ["category", "description"],
                    contact: ["phone", "email", "website"],
                    location: ["address"],
                    hours: ["hours"],
                    delivery: ["delivery_policy"],
                    returns: ["returns_policy"],
                  }[s].every((e) => {
                    let s = t.fields.find((t) => t.field_key === e)
                    return (
                      null != s &&
                      s.current_revision?.id === s.approved_revision?.id &&
                      null == s.pending_revision_id &&
                      null == s.latest_failure
                    )
                  })
                )))),
            (u[7] = x),
            (u[8] = c),
            (u[9] = h),
            (u[10] = f),
            (u[11] = a))
          : (a = u[11]),
        u[12] !== c || u[13] !== j || u[14] !== w || u[15] !== a
          ? ((o = (0, i.jsx)(e6, { manager: c, section: w, loading: a }, j)),
            (u[12] = c),
            (u[13] = j),
            (u[14] = w),
            (u[15] = a),
            (u[16] = o))
          : (o = u[16]),
        u[17] !== g || u[18] !== v || u[19] !== c || u[20] !== l || u[21] !== o
          ? ((d = (0, i.jsx)(td, {
              manager: c,
              showSavedCase: !0,
              loadingContent: g,
              loadingFallback: v,
              onExit: l,
              children: o,
            })),
            (u[17] = g),
            (u[18] = v),
            (u[19] = c),
            (u[20] = l),
            (u[21] = o),
            (u[22] = d))
          : (d = u[22]),
        d
      )
    }
    function td(e) {
      let t,
        s = (0, n.c)(13),
        {
          manager: r,
          children: l,
          onExit: a,
          verificationContext: o,
          loadingContent: d,
          loadingFallback: u,
          showSavedCase: c,
          retryChallengeId: f,
          purpose: p,
          feedSetupSession: h,
          agentApi: g,
        } = e,
        x = void 0 !== c && c,
        b = void 0 === p ? "edit" : p,
        { accountId: _ } = (0, m.As)()
      return (
        s[0] !== _ ||
        s[1] !== g ||
        s[2] !== l ||
        s[3] !== h ||
        s[4] !== d ||
        s[5] !== u ||
        s[6] !== r ||
        s[7] !== a ||
        s[8] !== b ||
        s[9] !== f ||
        s[10] !== x ||
        s[11] !== o
          ? ((t =
              null == _
                ? (0, i.jsx)(i.Fragment, { children: u ?? d ?? (0, i.jsx)(y.y, {}) })
                : (0, i.jsx)(
                    tu,
                    {
                      accountId: _,
                      manager: r,
                      loadingContent: d,
                      loadingFallback: u,
                      onExit: a,
                      verificationContext: o,
                      showSavedCase: x,
                      retryChallengeId: f,
                      purpose: b,
                      feedSetupSession: h,
                      agentApi: g,
                      children: l,
                    },
                    `${_}:${r.profile.business_profile_id}:${b}`,
                  )),
            (s[0] = _),
            (s[1] = g),
            (s[2] = l),
            (s[3] = h),
            (s[4] = d),
            (s[5] = u),
            (s[6] = r),
            (s[7] = a),
            (s[8] = b),
            (s[9] = f),
            (s[10] = x),
            (s[11] = o),
            (s[12] = t))
          : (t = s[12]),
        t
      )
    }
    function tu(e) {
      let t,
        s,
        o,
        u,
        f,
        p,
        h,
        m,
        x,
        b,
        _,
        j,
        k,
        C,
        M,
        N,
        q,
        R,
        I,
        T,
        E,
        F,
        U,
        D = (0, n.c)(134),
        {
          accountId: z,
          manager: B,
          children: V,
          onExit: O,
          verificationContext: L,
          loadingContent: K,
          loadingFallback: $,
          showSavedCase: G,
          retryChallengeId: H,
          purpose: Q,
          feedSetupSession: Y,
          agentApi: W,
        } = e,
        J = (0, r.jE)(),
        Z = B.profile.business_profile_id,
        X =
          "add-products" === Q ||
          "agent-builder" === Q ||
          "connect-ad-accounts" === Q ||
          !0 === B.capabilities.requires_business_verification,
        ee = "agent-builder" === Q && W?.usesDevelopmentVerification ? W : null
      D[0] !== z || D[1] !== Y || D[2] !== Z || D[3] !== J || D[4] !== ee
        ? ((t = Y ?? (null == ee ? (0, tr.o)(J, z, Z) : void 0)),
          (D[0] = z),
          (D[1] = Y),
          (D[2] = Z),
          (D[3] = J),
          (D[4] = ee),
          (D[5] = t))
        : (t = D[5])
      let et = t,
        es = null == et || "connect-ad-accounts" === Q || ("add-products" === Q && null == Y)
      D[6] !== z || D[7] !== Z || D[8] !== Q || D[9] !== et
        ? ((s = (0, P.d)(z, Z, et, Q)), (D[6] = z), (D[7] = Z), (D[8] = Q), (D[9] = et), (D[10] = s))
        : (s = D[10])
      let ei = s,
        en = ee?.verificationQueryKey ?? ei.queryKey,
        er = (0, d.useRef)(0),
        el = (0, d.useRef)(null),
        ea = (0, d.useRef)(!1),
        eo = (0, d.useRef)(null),
        [ed, eu] = (0, d.useState)(!1),
        [ec, ef] = (0, d.useState)(!1),
        [ep, eh] = (0, d.useState)(H),
        [em, eg] = (0, d.useState)(!1)
      ;(D[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((o = () => (
            (ea.current = !0),
            () => {
              ea.current = !1
            }
          )),
          (u = []),
          (D[11] = o),
          (D[12] = u))
        : ((o = D[11]), (u = D[12])),
        (0, d.useEffect)(o, u),
        D[13] !== Q || D[14] !== es
          ? ((f = (e) => (!es && ("agent-builder" !== Q || e.state.data?.status !== "approved")) || "always"),
            (D[13] = Q),
            (D[14] = es),
            (D[15] = f))
          : (f = D[15]),
        D[16] !== ei.queryFn || D[17] !== ee
          ? ((p =
              null == ee
                ? ei.queryFn
                : (e) => {
                    let { signal: t } = e
                    return ee.loadVerification(t)
                  }),
            (D[16] = ei.queryFn),
            (D[17] = ee),
            (D[18] = p))
          : (p = D[18]))
      let ex = X && !ec
      D[19] !== en || D[20] !== ei || D[21] !== f || D[22] !== p || D[23] !== ex
        ? ((h = { ...ei, staleTime: ei.staleTime, queryKey: en, refetchOnMount: f, queryFn: p, enabled: ex }),
          (D[19] = en),
          (D[20] = ei),
          (D[21] = f),
          (D[22] = p),
          (D[23] = ex),
          (D[24] = h))
        : (h = D[24])
      let {
        data: eb,
        error: ey,
        fetchStatus: e_,
        isFetching: ev,
        isFetchedAfterMount: ej,
        isStale: ew,
        refetch: eA,
      } = (0, l.I)(h)
      D[25] !== eA ? ((m = { mutationFn: () => eA({ cancelRefetch: !1 }) }), (D[25] = eA), (D[26] = m)) : (m = D[26])
      let { mutate: eS, isPending: eP } = (0, a.n)(m),
        ek = (0, d.useId)(),
        [eC, eM] = (0, d.useState)(null),
        eN = eb?.status === "in_progress" || eb?.status === "under_review",
        eq = eb?.can_verify && null != eb.challenge_id && eN
      ;(D[27] !== z || D[28] !== ek || D[29] !== Z
        ? ((x = ["business-profile-verification-check", z, Z, ek]), (D[27] = z), (D[28] = ek), (D[29] = Z), (D[30] = x))
        : (x = D[30]),
        D[31] !== eb || D[32] !== ey || D[33] !== e_ || D[34] !== ej || D[35] !== es || D[36] !== X || D[37] !== ee
          ? ((b = (e) =>
              "error" !== e.state.status &&
              X &&
              null == ee &&
              null != eb &&
              null == ey &&
              "idle" === e_ &&
              (!es || ej)),
            (D[31] = eb),
            (D[32] = ey),
            (D[33] = e_),
            (D[34] = ej),
            (D[35] = es),
            (D[36] = X),
            (D[37] = ee),
            (D[38] = b))
          : (b = D[38]),
        D[39] !== z || D[40] !== eq || D[41] !== eb || D[42] !== Z || D[43] !== J || D[44] !== en
          ? ((_ = async () => {
              if (!eq || null == eb.challenge_id) return null
              let e = er.current
              try {
                let { verification: t } = await g.Request.safePost(
                  "/chat/frontend/v1/business-profiles/{business_profile_id}/manager/business-verification",
                  {
                    additionalHeaders: { "ChatGPT-Account-ID": z, "x-openai-use-sheep": "1" },
                    parameters: { path: { business_profile_id: Z } },
                    requestBody: { action: "check", challenge_id: eb.challenge_id },
                    expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 426, 429],
                    retry: "never",
                    signal: AbortSignal.timeout(3e4),
                  },
                )
                ea.current && er.current === e && (J.cancelQueries({ queryKey: en, exact: !0 }), J.setQueryData(en, t))
              } catch (e) {
                throw (
                  e instanceof v.FetchError && [401, 403, 426].includes(e.status)
                    ? J.invalidateQueries({ queryKey: ["business-profiles", z, Z] })
                    : e instanceof v.FetchError &&
                      [404, 409].includes(e.status) &&
                      J.invalidateQueries({ queryKey: en, exact: !0 }),
                  e
                )
              }
              return null
            }),
            (D[39] = z),
            (D[40] = eq),
            (D[41] = eb),
            (D[42] = Z),
            (D[43] = J),
            (D[44] = en),
            (D[45] = _))
          : (_ = D[45]),
        D[46] !== x || D[47] !== b || D[48] !== _
          ? ((j = {
              queryKey: x,
              enabled: b,
              queryFn: _,
              staleTime: "static",
              gcTime: 0,
              retry: !1,
              retryOnMount: !1,
              refetchOnWindowFocus: !1,
              refetchOnReconnect: !1,
            }),
            (D[46] = x),
            (D[47] = b),
            (D[48] = _),
            (D[49] = j))
          : (j = D[49]))
      let { isFetching: eR, error: eI, refetch: eT } = (0, l.I)(j),
        eE = eR && eq,
        eF = ey ?? eI
      D[50] !== eF
        ? ((k = eF instanceof v.FetchError && [401, 403, 404, 426].includes(eF.status)), (D[50] = eF), (D[51] = k))
        : (k = D[51])
      let eU = k,
        eD = eF instanceof v.FetchError && 409 === eF.status,
        ez = eb?.challenge_id != null && (G || eC === eb.challenge_id),
        eB = eb?.status === "in_progress" && null == eb.url,
        eV = eE || eP,
        eO = !eU && !eD && eb?.can_verify && "failed" === eb.status && null == eb.challenge_id,
        eL =
          !eE &&
          null == eI &&
          !eO &&
          !eD &&
          X &&
          (ej || (!es && "idle" === e_ && null == ey)) &&
          eb?.can_verify === !0 &&
          !eU &&
          ("not_started" === eb.status ||
            "declined" === eb.status ||
            "failed" === eb.status ||
            "expired" === eb.status ||
            ("in_progress" === eb.status && null != eb.url))
      ;(null == ep ||
        (null == ey && (null == eb || (eb.can_verify && "declined" === eb.status && eb.challenge_id === ep))) ||
        eh(void 0),
        em && !eL && eg(!1),
        !X && ed
          ? eu(!1)
          : !X ||
            ed ||
            eb?.status !== "approved" ||
            (es || "agent-builder" === Q ? !ej : ew) ||
            ev ||
            null != ey ||
            eu(!0),
        D[52] !== z || D[53] !== eL || D[54] !== eb || D[55] !== Z || D[56] !== J || D[57] !== en
          ? ((C = async (e) => {
              if (!eL || null == eb) return !1
              eh(void 0)
              let t = er.current,
                s = "retry"
              "not_started" === eb.status ? (s = "start") : "in_progress" === eb.status && (s = "resume")
              let i = "start" === s ? void 0 : eb.challenge_id,
                n = { action: s, challenge_id: i }
              return (
                "resume" !== s &&
                  ((eo.current?.action !== s || eo.current.challenge_id !== i) &&
                    (eo.current = { ...n, idempotency_key: crypto.randomUUID() }),
                  (n = eo.current)),
                ef(!0),
                J.cancelQueries({ queryKey: en, exact: !0 })
                  .then(async () => {
                    if (!ea.current || er.current !== t) return !1
                    let { verification: s, launch_url: i } = await g.Request.safePost(
                      "/chat/frontend/v1/business-profiles/{business_profile_id}/manager/business-verification",
                      {
                        additionalHeaders: { "ChatGPT-Account-ID": z, "x-openai-use-sheep": "1" },
                        parameters: { path: { business_profile_id: Z } },
                        requestBody: n,
                        expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 426, 429],
                        retry: "never",
                      },
                    )
                    if (
                      !ea.current ||
                      er.current !== t ||
                      ((eo.current = null),
                      J.setQueryData(en, s),
                      "in_progress" !== s.status || !s.can_verify || null == i)
                    )
                      return !1
                    let r = tl.safeParse(i)
                    if (!r.success) throw Error("Verification provider unavailable")
                    return ((el.current = s.challenge_id), await e(r.data), !0)
                  })
                  .catch((e) => {
                    throw (
                      e instanceof v.FetchError && [401, 403, 426].includes(e.status)
                        ? J.invalidateQueries({ queryKey: ["business-profiles", z, Z] })
                        : e instanceof v.FetchError &&
                          [404, 409].includes(e.status) &&
                          J.invalidateQueries({ queryKey: en, exact: !0 }),
                      e
                    )
                  })
                  .finally(() => {
                    ea.current && er.current === t && ef(!1)
                  })
              )
            }),
            (D[52] = z),
            (D[53] = eL),
            (D[54] = eb),
            (D[55] = Z),
            (D[56] = J),
            (D[57] = en),
            (D[58] = C))
          : (C = D[58]))
      let eK = C
      D[59] !== O
        ? ((M = () => {
            ;((er.current = er.current + 1), O())
          }),
          (D[59] = O),
          (D[60] = M))
        : (M = D[60])
      let e$ = M
      if (!X || (eb?.status === "approved" && !eU && ed)) {
        let e
        return (
          D[61] !== V ? ((e = (0, i.jsx)(i.Fragment, { children: V })), (D[61] = V), (D[62] = e)) : (e = D[62]),
          e
        )
      }
      if (
        null == ey &&
        (null == eb || (!ed && "approved" === eb.status && (!ej || (null != et && ew))) || (es && !ej && ev))
      ) {
        let e, t
        return (
          D[63] !== K || D[64] !== $
            ? ((e = $ ?? K ?? (0, i.jsx)(y.y, {})), (D[63] = K), (D[64] = $), (D[65] = e))
            : (e = D[65]),
          D[66] !== e ? ((t = (0, i.jsx)(i.Fragment, { children: e })), (D[66] = e), (D[67] = t)) : (t = D[67]),
          t
        )
      }
      let eG = tx.title
      D[68] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = {
            "agent-builder": tx.agentBuilderRequired,
            "add-products": tx.addProductsRequired,
            "connect-ad-accounts": tx.connectAdAccountsRequired,
            edit: tx.required,
          }),
          (D[68] = N))
        : (N = D[68])
      let eH = N[Q]
      if (eO) eG = tx.declinedTitle
      else if (eb?.status === "under_review") eH = tx.review
      else if (eB) eH = tx.processing
      else if (eb?.status === "declined") (eU || (eG = tx.declinedTitle), (eH = tx.declined))
      else if (eb?.status === "failed" || eb?.status === "expired") {
        let e
        ;(D[69] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = {
              "agent-builder": tx.agentBuilderRetry,
              "add-products": tx.addProductsRetry,
              "connect-ad-accounts": tx.connectAdAccountsRetry,
              edit: tx.retry,
            }),
            (D[69] = e))
          : (e = D[69]),
          (eH = e[Q]))
      }
      if (eO) {
        let e
        ;(D[70] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)("p", {
              role: "status",
              children: (0, i.jsx)(c.A, {
                id: "businessProfiles.businessVerification.finalDecline.description",
                defaultMessage: "Your business verification was declined",
              }),
            })),
            (D[70] = e))
          : (e = D[70]),
          (q = e),
          (R = null))
      } else if (null == eb || eD || eU || ("approved" === eb.status && null != ey && !ed)) {
        let e, t, s, n
        ;(D[71] !== eU
          ? ((e = (0, i.jsx)("p", {
              role: "alert",
              children: eU
                ? (0, i.jsx)(c.A, {
                    id: "businessProfiles.businessVerification.unavailable",
                    defaultMessage: "Business verification is unavailable. Return to your business and try again.",
                  })
                : (0, i.jsx)(c.A, { ...tx.loadError }),
            })),
            (D[71] = eU),
            (D[72] = e))
          : (e = D[72]),
          (q = e))
        let r = eP || eE
        ;(D[73] !== eI || D[74] !== eT || D[75] !== ey || D[76] !== eS
          ? ((t = () => {
              null == ey && null != eI ? eT({ cancelRefetch: !1 }) : eS()
            }),
            (D[73] = eI),
            (D[74] = eT),
            (D[75] = ey),
            (D[76] = eS),
            (D[77] = t))
          : (t = D[77]),
          D[78] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, i.jsx)(c.A, { ...tx.retryLoad })), (D[78] = s))
            : (s = D[78]),
          D[79] !== r || D[80] !== t
            ? ((n = (0, i.jsx)(w.d, {
                className: "w-full",
                color: "primary",
                size: "modalPrimary",
                loading: r,
                onClick: t,
                children: s,
              })),
              (D[79] = r),
              (D[80] = t),
              (D[81] = n))
            : (n = D[81]),
          (R = n))
      } else {
        let e,
          t,
          s,
          n,
          r,
          l = S.e.retryAction
        ;("not_started" === eb.status
          ? (l = null == eb.challenge_id ? tx.start : tx.continue)
          : "in_progress" === eb.status && (l = tx.continue),
          D[82] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = {
                "connect-ad-accounts": (0, i.jsx)(c.A, {
                  id: "businessProfiles.businessVerification.connectAdAccounts.ownerRequired",
                  defaultMessage:
                    "The business owner needs to verify this business before you can connect an ad account",
                }),
                "agent-builder": (0, i.jsx)(c.A, {
                  id: "businessProfiles.businessVerification.agentBuilder.ownerRequired",
                  defaultMessage: "The business owner needs to verify this business before you can build its agent",
                }),
                "add-products": (0, i.jsx)(c.A, {
                  id: "businessProfiles.businessVerification.addProducts.ownerRequired",
                  defaultMessage: "The business owner needs to verify this business before you can add a product feed",
                }),
                edit: (0, i.jsx)(c.A, {
                  id: "businessProfiles.businessVerification.ownerRequired",
                  defaultMessage: "The business owner needs to verify this business before you can edit its profile",
                }),
              }),
              (D[82] = e))
            : (e = D[82]))
        let a = e[Q],
          o = eN ? tx.checkStatus : tx.retryLoad
        ;(eV && (o = tx.checking),
          D[83] !== eI || D[84] !== eb.can_verify || D[85] !== eH || D[86] !== ey || D[87] !== a
            ? ((t =
                null != ey || null != eI
                  ? (0, i.jsx)("p", {
                      role: "alert",
                      children: (0, i.jsx)(c.A, {
                        id: "businessProfiles.businessVerification.refreshError",
                        defaultMessage: "We couldn\u2019t refresh your business verification status. Try again.",
                      }),
                    })
                  : (0, i.jsx)("p", { role: "status", children: eb.can_verify ? (0, i.jsx)(c.A, { ...eH }) : a })),
              (D[83] = eI),
              (D[84] = eb.can_verify),
              (D[85] = eH),
              (D[86] = ey),
              (D[87] = a),
              (D[88] = t))
            : (t = D[88]),
          (q = t),
          D[89] !== eL ||
          D[90] !== e_ ||
          D[91] !== eK ||
          D[92] !== l ||
          D[93] !== J ||
          D[94] !== en ||
          D[95] !== eP ||
          D[96] !== ep
            ? ((s = eL
                ? (0, i.jsx)(A.t, {
                    size: "modalPrimary",
                    fullWidth: !0,
                    disabled: eP,
                    launchOnMount: null != ep && "idle" === e_,
                    onLaunch: eK,
                    onComplete: () => {
                      let e = el.current
                      ;(eM(e),
                        J.setQueryData(en, (t) =>
                          t?.status === "in_progress" && null != e && t.challenge_id === e
                            ? { ...t, status: "under_review", url: null }
                            : t,
                        ))
                    },
                    onActiveChange: eg,
                    label: (0, i.jsx)(c.A, { ...l }),
                  })
                : null),
              (D[89] = eL),
              (D[90] = e_),
              (D[91] = eK),
              (D[92] = l),
              (D[93] = J),
              (D[94] = en),
              (D[95] = eP),
              (D[96] = ep),
              (D[97] = s))
            : (s = D[97]),
          D[98] !== eL ||
          D[99] !== eI ||
          D[100] !== eV ||
          D[101] !== eT ||
          D[102] !== eq ||
          D[103] !== eE ||
          D[104] !== eb.can_verify ||
          D[105] !== eb.status ||
          D[106] !== ey ||
          D[107] !== ec ||
          D[108] !== eB ||
          D[109] !== eS ||
          D[110] !== ez ||
          D[111] !== o ||
          D[112] !== ee
            ? ((n =
                eE ||
                null != eI ||
                null != ey ||
                (ez && (eB || "under_review" === eb.status)) ||
                ((!eb.can_verify || null != ee) && "under_review" === eb.status)
                  ? (0, i.jsx)(w.d, {
                      className: "w-full justify-center",
                      color: eL ? "secondary" : "primary",
                      size: eL ? "medium" : "modalPrimary",
                      "aria-busy": eV,
                      disabled: ec || eV,
                      onClick: () => {
                        eq && null == ee ? eT({ cancelRefetch: !1 }) : eS()
                      },
                      children: (0, i.jsx)(c.A, { ...o }),
                    })
                  : null),
              (D[98] = eL),
              (D[99] = eI),
              (D[100] = eV),
              (D[101] = eT),
              (D[102] = eq),
              (D[103] = eE),
              (D[104] = eb.can_verify),
              (D[105] = eb.status),
              (D[106] = ey),
              (D[107] = ec),
              (D[108] = eB),
              (D[109] = eS),
              (D[110] = ez),
              (D[111] = o),
              (D[112] = ee),
              (D[113] = n))
            : (n = D[113]),
          D[114] !== s || D[115] !== n
            ? ((r = (0, i.jsxs)(i.Fragment, { children: [s, n] })), (D[114] = s), (D[115] = n), (D[116] = r))
            : (r = D[116]),
          (R = r))
      }
      D[117] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = {
            "connect-ad-accounts": tb,
            "agent-builder": (0, i.jsx)(c.A, {
              id: "businessProfiles.businessVerification.agentBuilder.back",
              defaultMessage: "Back to Overview",
            }),
            "add-products": (0, i.jsx)(c.A, {
              id: "businessProfiles.businessVerification.addProducts.back",
              defaultMessage: "Back to products",
            }),
            edit: tb,
          }),
          (D[117] = I))
        : (I = D[117])
      let eQ = I[Q],
        eY = "edit" === Q || "agent-builder" === Q ? K : null
      return (
        D[118] !== eG ? ((T = (0, i.jsx)(c.A, { ...eG })), (D[118] = eG), (D[119] = T)) : (T = D[119]),
        D[120] !== eQ || D[121] !== eO
          ? ((E = eO
              ? (0, i.jsx)(c.A, {
                  id: "businessProfiles.businessVerification.editRejected.close",
                  defaultMessage: "Close",
                })
              : eQ),
            (D[120] = eQ),
            (D[121] = eO),
            (D[122] = E))
          : (E = D[122]),
        D[123] !== R || D[124] !== q || D[125] !== e$ || D[126] !== em || D[127] !== T || D[128] !== E || D[129] !== L
          ? ((F = (0, i.jsxs)(tg, {
              personaActive: em,
              onExit: e$,
              title: T,
              actions: R,
              dismissLabel: E,
              children: [L, q],
            })),
            (D[123] = R),
            (D[124] = q),
            (D[125] = e$),
            (D[126] = em),
            (D[127] = T),
            (D[128] = E),
            (D[129] = L),
            (D[130] = F))
          : (F = D[130]),
        D[131] !== eY || D[132] !== F
          ? ((U = (0, i.jsxs)(i.Fragment, { children: [eY, F] })), (D[131] = eY), (D[132] = F), (D[133] = U))
          : (U = D[133]),
        U
      )
    }
    function tc(e) {
      let t,
        s,
        o,
        u,
        f,
        p,
        h,
        g,
        x,
        b,
        _,
        j,
        A,
        S,
        P,
        T,
        E,
        F,
        U,
        D,
        z,
        B,
        V = (0, n.c)(127),
        { manager: O, accountId: L, onExit: K } = e,
        $ = (0, I.D)(L),
        G = (0, r.jE)(),
        H = O.profile.business_profile_id,
        { userId: Q } = (0, m.As)()
      V[0] !== L || V[1] !== H || V[2] !== Q
        ? ((t = ["business-profiles", L, "creation", Q, H]), (V[0] = L), (V[1] = H), (V[2] = Q), (V[3] = t))
        : (t = V[3])
      let Y = t
      V[4] !== G || V[5] !== Y
        ? ((s = () => G.getQueryState(Y)?.dataUpdateCount ?? 0), (V[4] = G), (V[5] = Y), (V[6] = s))
        : (s = V[6])
      let [W] = (0, d.useState)(s)
      V[7] !== L ? ((o = () => (0, q.YH)(L)), (V[7] = L), (V[8] = o)) : (o = V[8])
      let [J] = (0, d.useState)(o)
      ;(V[9] !== J
        ? ((u = () => J.attach()), (f = [J]), (V[9] = J), (V[10] = u), (V[11] = f))
        : ((u = V[10]), (f = V[11])),
        (0, d.useEffect)(u, f),
        V[12] !== H || V[13] !== J
          ? ((p = (e) => {
              let { signal: t } = e
              return J.readSavedStatus(H, t)
            }),
            (V[12] = H),
            (V[13] = J),
            (V[14] = p))
          : (p = V[14]),
        V[15] !== Y || V[16] !== p
          ? ((h = {
              queryKey: Y,
              queryFn: p,
              staleTime: 0,
              refetchOnMount: !0,
              retryOnMount: !0,
              retry: !1,
              refetchOnWindowFocus: !1,
              refetchOnReconnect: !1,
            }),
            (V[15] = Y),
            (V[16] = p),
            (V[17] = h))
          : (h = V[17]))
      let { data: Z, isError: X, isFetchedAfterMount: ee, refetch: et } = (0, l.I)(h),
        es = ee && (G.getQueryState(Y)?.dataUpdateCount ?? 0) > W ? (Z?.creation ?? void 0) : void 0,
        [ei, en] = (0, d.useState)(!1),
        [er, el] = (0, d.useState)(!1),
        ea = es?.status,
        eo = (0, q.Z0)(es)
      if (V[18] !== es || V[19] !== ei || V[20] !== ea) {
        let e =
          null == es
            ? void 0
            : { name: es.details.name, businessType: es.details.business_type, values: es.details.values }
        ;((g = (es?.is_draft === !0 || ei) && "pending" === ea && null != e ? (0, C.Rw)(e, es, !0, !0) : void 0),
          (V[18] = es),
          (V[19] = ei),
          (V[20] = ea),
          (V[21] = g))
      } else g = V[21]
      let ed = g
      V[22] !== H || V[23] !== G || V[24] !== Y || V[25] !== J
        ? ((x = function (e) {
            if ((J.throwIfAborted(), e.creation?.business_profile_id !== H))
              throw Error("Business profile verification response did not match")
            G.setQueryData(Y, { ...e, launch_url: null })
          }),
          (V[22] = H),
          (V[23] = G),
          (V[24] = Y),
          (V[25] = J),
          (V[26] = x))
        : (x = V[26])
      let eu = x
      V[27] !== L || V[28] !== K || V[29] !== H || V[30] !== G || V[31] !== $ || V[32] !== ea
        ? ((b = () => {
            "approved" === ea && (K(), G.invalidateQueries({ queryKey: ["business-profiles", L], predicate: tm }))
          }),
          (V[27] = L),
          (V[28] = K),
          (V[29] = H),
          (V[30] = G),
          (V[31] = $),
          (V[32] = ea),
          (V[33] = b))
        : (b = V[33])
      let ec = (0, d.useEffectEvent)(b)
      ;(V[34] !== ec
        ? ((_ = () => {
            ec()
          }),
          (V[34] = ec),
          (V[35] = _))
        : (_ = V[35]),
        V[36] !== ea ? ((j = [ea]), (V[36] = ea), (V[37] = j)) : (j = V[37]),
        (0, d.useEffect)(_, j),
        V[38] !== L || V[39] !== H || V[40] !== G
          ? ((A = (e) => {
              e instanceof v.FetchError &&
                [401, 403, 404, 409, 426].includes(e.status) &&
                G.invalidateQueries({ queryKey: ["business-profiles", L, H] })
            }),
            (V[38] = L),
            (V[39] = H),
            (V[40] = G),
            (V[41] = A))
          : (A = V[41]),
        V[42] !== eu || V[43] !== A
          ? ((S = { mutationFn: th, onSuccess: eu, onError: A }), (V[42] = eu), (V[43] = A), (V[44] = S))
          : (S = V[44]))
      let { mutate: ef, mutateAsync: ep, isPending: eh, isError: em } = (0, a.n)(S)
      V[45] !== eu || V[46] !== H || V[47] !== J
        ? ((P = async function (e) {
            if ((J.throwIfAborted(), !(e instanceof v.FetchError) || ![400, 422].includes(e.status))) return !1
            let t = await J.read(H)
            return (
              eu(t),
              en(!0),
              null != t.creation &&
                ("pending" !== t.creation.status ||
                  null !=
                    (0, C.Rw)(
                      {
                        name: t.creation.details.name,
                        businessType: t.creation.details.business_type,
                        values: t.creation.details.values,
                      },
                      t.creation,
                      !0,
                      !0,
                    ))
            )
          }),
          (V[45] = eu),
          (V[46] = H),
          (V[47] = J),
          (V[48] = P))
        : (P = V[48])
      let eg = P
      V[49] !== H || V[50] !== eg || V[51] !== J || V[52] !== ep
        ? ((T = async function (e) {
            try {
              let t = await ep(() => J.resume(H, "launch"))
              if (t.creation?.is_draft === !0) return (en(!0), !1)
              if (
                null == t.launch_url ||
                null == t.creation ||
                !["pending", "under_review"].includes(t.creation.status) ||
                !1 === t.creation.persona_requires_action
              )
                return !1
              let s = tl.parse(t.launch_url)
              return (await e(s), !0)
            } catch (e) {
              if (await eg(e)) return !1
              throw e
            }
          }),
          (V[49] = H),
          (V[50] = eg),
          (V[51] = J),
          (V[52] = ep),
          (V[53] = T))
        : (T = V[53])
      let ex = T,
        eb = !1 === eo || (null == eo && "under_review" === ea),
        ey = (null == es && !X) || "approved" === ea,
        e_ = null
      V[54] !== es ? ((E = (0, q.b)(es)), (V[54] = es), (V[55] = E)) : (E = V[55])
      let ev = E
      V[56] !== ef || V[57] !== H || V[58] !== J
        ? ((F = () => ef(() => J.resume(H, "status"))), (V[56] = ef), (V[57] = H), (V[58] = J), (V[59] = F))
        : (F = V[59])
      let ej = F
      if (ev && !em) {
        let e, t
        ;(V[60] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(c.A, { ...tx.checkStatus })), (V[60] = e))
          : (e = V[60]),
          V[61] !== eh || V[62] !== ej
            ? ((t = (0, i.jsx)(w.d, {
                className: "w-full justify-center",
                color: "primary",
                size: "modalPrimary",
                loading: eh,
                onClick: ej,
                children: e,
              })),
              (V[61] = eh),
              (V[62] = ej),
              (V[63] = t))
            : (t = V[63]),
          (e_ = t))
      } else if (null == ed && null != es && !eb && ("pending" === ea || "under_review" === ea)) {
        let e, t, s, n
        ;(V[64] !== es.inquiry_id || V[65] !== H || V[66] !== J || V[67] !== ea
          ? ((e = null == es.inquiry_id && "pending" === ea ? (e) => J.findVerificationMatch(H, e) : void 0),
            (V[64] = es.inquiry_id),
            (V[65] = H),
            (V[66] = J),
            (V[67] = ea),
            (V[68] = e))
          : (e = V[68]),
          V[69] !== G || V[70] !== Y || V[71] !== J
            ? ((t = (e) =>
                G.setQueryData(Y, (t) =>
                  t?.creation == null ? t : { ...t, creation: J.submittedPersonaCreation(t.creation, e) },
                )),
              (V[69] = G),
              (V[70] = Y),
              (V[71] = J),
              (V[72] = t))
            : (t = V[72]),
          V[73] !== es.inquiry_id
            ? ((s = null == es.inquiry_id ? (0, i.jsx)(c.A, { ...tx.start }) : void 0),
              (V[73] = es.inquiry_id),
              (V[74] = s))
            : (s = V[74]),
          V[75] !== eh || V[76] !== ex || V[77] !== K || V[78] !== e || V[79] !== t || V[80] !== s
            ? ((n = (0, i.jsx)(N.W, {
                findMatch: e,
                size: "modalPrimary",
                fullWidth: !0,
                disabled: eh,
                onLaunch: ex,
                onComplete: t,
                onActiveChange: el,
                onCancel: K,
                label: s,
              })),
              (V[75] = eh),
              (V[76] = ex),
              (V[77] = K),
              (V[78] = e),
              (V[79] = t),
              (V[80] = s),
              (V[81] = n))
            : (n = V[81]),
          (e_ = n))
      }
      if (null != ed && null != es) {
        let e,
          t,
          s,
          n,
          r,
          l = es.details.values[ed] ?? ""
        ;(V[82] !== ed || V[83] !== es.contact_verifications
          ? ((e = es.contact_verifications?.find((e) => e.field === ed)),
            (V[82] = ed),
            (V[83] = es.contact_verifications),
            (V[84] = e))
          : (e = V[84]),
          V[85] !== ed || V[86] !== H || V[87] !== J || V[88] !== ep
            ? ((t = (e) => ep(() => J.send(H, ed, e)).then(tp)),
              (V[85] = ed),
              (V[86] = H),
              (V[87] = J),
              (V[88] = ep),
              (V[89] = t))
            : (t = V[89]),
          V[90] !== H || V[91] !== J || V[92] !== ep
            ? ((s = () => ep(() => J.read(H)).then(tf)), (V[90] = H), (V[91] = J), (V[92] = ep), (V[93] = s))
            : (s = V[93]),
          V[94] !== ed || V[95] !== es.contact_verifications || V[96] !== H || V[97] !== J || V[98] !== ep
            ? ((n = async (e) => {
                let t = es.contact_verifications?.find((e) => e.field === ed)
                if (t?.challenge_id == null) return !1
                let s = await ep(() => J.verify(H, ed, t.challenge_id, e))
                return s.creation?.contact_verifications?.some((e) => e.field === ed && "verified" === e.status) ?? !1
              }),
              (V[94] = ed),
              (V[95] = es.contact_verifications),
              (V[96] = H),
              (V[97] = J),
              (V[98] = ep),
              (V[99] = n))
            : (n = V[99]),
          V[100] !== eh || V[101] !== ed || V[102] !== l || V[103] !== e || V[104] !== t || V[105] !== s || V[106] !== n
            ? ((r = (0, i.jsx)(
                k.a,
                { field: ed, target: l, verification: e, busy: eh, onSend: t, onCheck: s, onVerify: n },
                ed,
              )),
              (V[100] = eh),
              (V[101] = ed),
              (V[102] = l),
              (V[103] = e),
              (V[104] = t),
              (V[105] = s),
              (V[106] = n),
              (V[107] = r))
            : (r = V[107]),
          (U = r))
      } else if (ey) {
        let e
        ;(V[108] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)("div", { role: "status", children: (0, i.jsx)(y.y, {}) })), (V[108] = e))
          : (e = V[108]),
          (U = e))
      } else if (null == es || (ev && em)) {
        let e, t
        ;(V[109] !== ej || V[110] !== ev || V[111] !== et
          ? ((e = ev ? ej : () => void et({ cancelRefetch: !1 })),
            (V[109] = ej),
            (V[110] = ev),
            (V[111] = et),
            (V[112] = e))
          : (e = V[112]),
          V[113] !== e ? ((t = (0, i.jsx)(R.j, { onRetry: e })), (V[113] = e), (V[114] = t)) : (t = V[114]),
          (U = t))
      } else if (eb) {
        let e
        ;(V[115] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsxs)("div", {
              className: "flex flex-col items-center gap-2",
              role: "status",
              children: [
                (0, i.jsxs)("div", {
                  className: "flex items-center gap-2 font-medium text-primary",
                  children: [(0, i.jsx)(y.y, {}), (0, i.jsx)(c.A, { ...M.W.reviewInProgressTitle })],
                }),
                (0, i.jsx)("p", { children: (0, i.jsx)(c.A, { ...tx.review }) }),
              ],
            })),
            (V[115] = e))
          : (e = V[115]),
          (U = e))
      } else {
        let e,
          t = "cancelled" === ea ? M.W.cancelledTitle : tx.required
        ;(V[116] !== t
          ? ((e = (0, i.jsx)("p", { role: "status", children: (0, i.jsx)(c.A, { ...t }) })), (V[116] = t), (V[117] = e))
          : (e = V[117]),
          (U = e))
      }
      let ew = ey ? "sr-only" : void 0
      return (
        V[118] === Symbol.for("react.memo_cache_sentinel")
          ? ((D = (0, i.jsx)(c.A, { ...tx.title })), (V[118] = D))
          : (D = V[118]),
        V[119] !== ew
          ? ((z = (0, i.jsx)("span", { className: ew, children: D })), (V[119] = ew), (V[120] = z))
          : (z = V[120]),
        V[121] !== e_ || V[122] !== U || V[123] !== K || V[124] !== er || V[125] !== z
          ? ((B = (0, i.jsx)(tg, {
              personaActive: er,
              onExit: K,
              title: z,
              actions: e_,
              dismissLabel: tb,
              children: U,
            })),
            (V[121] = e_),
            (V[122] = U),
            (V[123] = K),
            (V[124] = er),
            (V[125] = z),
            (V[126] = B))
          : (B = V[126]),
        B
      )
    }
    function tf() {}
    function tp() {}
    function th(e) {
      return e()
    }
    function tm(e) {
      return "creation" !== e.queryKey[2]
    }
    function tg(e) {
      let t,
        s,
        r,
        l,
        a,
        o,
        c,
        f,
        p,
        h,
        m,
        g,
        y,
        v,
        j = (0, n.c)(35),
        { title: A, children: S, actions: P, dismissLabel: k, personaActive: C, onExit: M } = e,
        N = void 0 !== C && C
      j[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, _.x)({ browser: !0 })), (j[0] = t)) : (t = j[0])
      let q = t,
        [R, I] = (0, d.useState)(null)
      ;(j[1] !== R
        ? ((s = () => {
            let e = R?.closest('[role="dialog"]')
            if (q && e instanceof HTMLElement) return (0, T.$)(e)
          }),
          (r = [q, R]),
          (j[1] = R),
          (j[2] = s),
          (j[3] = r))
        : ((s = j[2]), (r = j[3])),
        (0, d.useLayoutEffect)(s, r),
        j[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = q
              ? (0, u.createPortal)((0, i.jsx)(x.Xi, { "aria-hidden": !0, variant: "confirmation" }), document.body)
              : null),
            (j[4] = l))
          : (l = j[4]))
      let E = !N,
        F = !N,
        U = !!N || void 0
      return (
        j[5] !== N
          ? ((o = (e) => {
              N && e.preventDefault()
            }),
            (a = (e) => {
              N && e.preventDefault()
            }),
            (j[5] = N),
            (j[6] = a),
            (j[7] = o))
          : ((a = j[6]), (o = j[7])),
        j[8] !== a || j[9] !== F || j[10] !== U || j[11] !== o
          ? ((c = { "aria-describedby": void 0, "aria-modal": F, inert: U, onInteractOutside: o, onEscapeKeyDown: a }),
            (j[8] = a),
            (j[9] = F),
            (j[10] = U),
            (j[11] = o),
            (j[12] = c))
          : (c = j[12]),
        j[13] !== M || j[14] !== N
          ? ((f = (e) => {
              e || N || M()
            }),
            (j[13] = M),
            (j[14] = N),
            (j[15] = f))
          : (f = j[15]),
        j[16] !== A
          ? ((p = (0, i.jsx)(b.c7, { title: (0, i.jsx)(x.L3, { variant: "confirmation", children: A }) })),
            (j[16] = A),
            (j[17] = p))
          : (p = j[17]),
        j[18] !== S
          ? ((h = (0, i.jsx)("div", {
              className: "flex flex-col items-center gap-3 text-center text-secondary",
              children: S,
            })),
            (j[18] = S),
            (j[19] = h))
          : (h = j[19]),
        j[20] !== k || j[21] !== M
          ? ((m = (0, i.jsx)(w.d, {
              className: "w-full justify-center",
              color: "ghost",
              size: "medium",
              onClick: M,
              children: k,
            })),
            (j[20] = k),
            (j[21] = M),
            (j[22] = m))
          : (m = j[22]),
        j[23] !== P || j[24] !== m
          ? ((g = (0, i.jsxs)(b.Es, { className: "flex-col", expandSingleButton: !1, children: [P, m] })),
            (j[23] = P),
            (j[24] = m),
            (j[25] = g))
          : (g = j[25]),
        j[26] !== p || j[27] !== h || j[28] !== g
          ? ((y = (0, i.jsx)("div", {
              ref: I,
              children: (0, i.jsxs)(b.R4, { variant: "confirmation", size: "viewport", children: [p, h, g] }),
            })),
            (j[26] = p),
            (j[27] = h),
            (j[28] = g),
            (j[29] = y))
          : (y = j[29]),
        j[30] !== c || j[31] !== f || j[32] !== y || j[33] !== E
          ? ((v = (0, i.jsxs)(i.Fragment, {
              children: [
                l,
                (0, i.jsx)(x.lG, {
                  open: !0,
                  modal: !q,
                  size: "compact",
                  variant: "confirmation",
                  showDialogClose: E,
                  contentProps: c,
                  onOpenChange: f,
                  children: y,
                }),
              ],
            })),
            (j[30] = c),
            (j[31] = f),
            (j[32] = y),
            (j[33] = E),
            (j[34] = v))
          : (v = j[34]),
        v
      )
    }
    let tx = (0, f.YK)({
        checking: { id: "businessProfiles.verification.checkingStatus", defaultMessage: "Checking\u2026" },
        checkStatus: { id: "businessProfiles.businessVerification.check", defaultMessage: "Check status" },
        retryLoad: { id: "businessProfiles.businessVerification.retryLoad", defaultMessage: "Try again" },
        loadError: {
          id: "businessProfiles.businessVerification.loadError",
          defaultMessage: "We couldn\u2019t load your current business verification status. Try again.",
        },
        declinedTitle: {
          id: "businessProfiles.businessVerification.declined.title",
          defaultMessage: "Verification declined",
        },
        title: { id: "businessProfiles.businessVerification.title", defaultMessage: "Verify your business" },
        back: { id: "businessProfiles.businessVerification.back", defaultMessage: "Back to business" },
        agentBuilderRequired: {
          id: "businessProfiles.businessVerification.agentBuilder.description",
          defaultMessage: "Verify your authority to manage this business before building its agent",
        },
        agentBuilderRetry: {
          id: "businessProfiles.businessVerification.agentBuilder.retryDescription",
          defaultMessage: "We couldn\u2019t verify your business. Try again to build its agent.",
        },
        connectAdAccountsRequired: {
          id: "businessProfiles.businessVerification.connectAdAccounts.description",
          defaultMessage: "Verify your authority to manage this business before connecting an ad account",
        },
        connectAdAccountsRetry: {
          id: "businessProfiles.businessVerification.connectAdAccounts.retryDescription",
          defaultMessage: "We couldn\u2019t verify your business. Try again to connect an ad account.",
        },
        start: { id: "businessProfiles.businessVerification.start", defaultMessage: "Start verification" },
        continue: { id: "businessProfiles.businessVerification.continue", defaultMessage: "Continue verification" },
        required: {
          id: "businessProfiles.businessVerification.description",
          defaultMessage: "Verify your authority to manage this business before editing its profile.",
        },
        addProductsRequired: {
          id: "businessProfiles.businessVerification.addProducts.description",
          defaultMessage: "Verify your authority to manage this business before adding a product feed",
        },
        review: {
          id: "businessProfiles.businessVerification.review",
          defaultMessage: "Your business verification is under review. You can return later to check the status.",
        },
        processing: {
          id: "businessProfiles.businessVerification.processing",
          defaultMessage:
            "Your business verification is still being processed. You can return later to check the status.",
        },
        declined: {
          id: "businessProfiles.businessVerification.declined.description",
          defaultMessage:
            "Your business verification was declined. You can try again to verify your authority to manage this business.",
        },
        retry: {
          id: "businessProfiles.businessVerification.retryDescription",
          defaultMessage: "We couldn\u2019t verify your business. Try again to continue to the editor.",
        },
        addProductsRetry: {
          id: "businessProfiles.businessVerification.addProducts.retryDescription",
          defaultMessage: "We couldn\u2019t verify your business. Try again to add a product feed.",
        },
      }),
      tb = (0, i.jsx)("span", { className: "underline", children: (0, i.jsx)(c.A, { ...tx.back }) })
  },
  naYv(e, t, s) {
    var i = s("ABep"),
      n = s("QosV"),
      r = s("PLux"),
      l = s("mKdD"),
      a = s("tg8z"),
      o = s("on57"),
      d = s("qmMi"),
      u = s("Wf1j"),
      c = s("HOLv"),
      f = s("khOd"),
      p = s("nBtg"),
      h = s("aUH2"),
      m = s("rxm1"),
      g = s("ESSU")
    function x(e) {
      return "name" === e.field_key
    }
    s.d(
      t,
      {},
      {
        S: function (e) {
          let t,
            s,
            a,
            d,
            u = (0, n.c)(17),
            { manager: f } = e,
            { profile: g } = f,
            x = g.logo_url
          u[0] !== x || u[1] !== f || u[2] !== g.business_profile_id
            ? ((t = x
                ? { id: g.business_profile_id, url: x, alt: "" }
                : (function (e) {
                    if ("local_business" !== (0, m.a)(e.profile)) return null
                    let t = e.fields.find((e) => "photos" === e.field_key)
                    for (let e of [t?.discovered_value, t?.preview_value]) {
                      let t = (0, p.oR)(e ?? null, p.I_)?.find((e) => "" !== e.url)
                      if (null != t) return t
                    }
                    return null
                  })(f)),
              (u[0] = x),
              (u[1] = f),
              (u[2] = g.business_profile_id),
              (u[3] = t))
            : (t = u[3])
          let b = t
          if (null == b) {
            let e = (0, m.a)(g)
            if ("local_business" === e) {
              let e
              ;(u[4] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, i.jsx)(c.I, { asset: l.K })), (u[4] = e))
                : (e = u[4]),
                (s = e))
            } else {
              let t
              if ("ecommerce" !== e) return null
              ;(u[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((t = (0, i.jsx)(c.I, { asset: r.j })), (u[5] = t))
                : (t = u[5]),
                (s = t))
            }
          } else {
            let e,
              t,
              n = g.business_profile_id,
              r = x ? "object-contain" : "object-cover"
            ;(u[6] !== r ? ((e = (0, o.A)("size-full", r)), (u[6] = r), (u[7] = e)) : (e = u[7]),
              u[8] !== b || u[9] !== g.business_profile_id || u[10] !== e
                ? ((t = (0, i.jsx)(h.i, { profileId: n, photo: b, className: e })),
                  (u[8] = b),
                  (u[9] = g.business_profile_id),
                  (u[10] = e),
                  (u[11] = t))
                : (t = u[11]),
              (s = t))
          }
          let y = null == b && "bg-callout-surface"
          return (
            u[12] !== y
              ? ((a = (0, o.A)("grid size-13 shrink-0 place-items-center overflow-hidden rounded-[14px]", y)),
                (u[12] = y),
                (u[13] = a))
              : (a = u[13]),
            u[14] !== s || u[15] !== a
              ? ((d = (0, i.jsx)("div", { "aria-hidden": "true", className: a, children: s })),
                (u[14] = s),
                (u[15] = a),
                (u[16] = d))
              : (d = u[16]),
            d
          )
        },
        c: function (e) {
          let t,
            s,
            r,
            l,
            p = (0, n.c)(15),
            { manager: h, overview: m, pendingCreation: b } = e,
            y = void 0 !== m && m,
            _ = void 0 !== b && b,
            v = (0, u.A)(),
            j = (0, d.Ul)(f.GB),
            w = h.fields.find(x)?.preview_value || h.profile.display_name,
            A = !y && !j && "text-heading-app leading-tight font-normal",
            S = !y && g.A.legacyMobileTitle
          return (
            p[0] !== A || p[1] !== S
              ? ((t = (0, o.A)("min-w-0 break-words select-text", A, S)), (p[0] = A), (p[1] = S), (p[2] = t))
              : (t = p[2]),
            p[3] !== v || p[4] !== _
              ? ((s = _
                  ? (0, i.jsxs)("span", {
                      className: "ms-2 inline-flex items-center gap-2 align-middle",
                      children: [
                        (0, i.jsx)(c.I, { asset: a.u, className: "grayscale" }),
                        (0, i.jsx)("span", {
                          className:
                            "rounded-full bg-secondary-soft px-2 py-0.5 text-xs leading-4 font-semibold text-secondary uppercase",
                          children: v.formatMessage({
                            id: "businessProfiles.dashboard.draft",
                            defaultMessage: "Draft",
                          }),
                        }),
                      ],
                    })
                  : null),
                (p[3] = v),
                (p[4] = _),
                (p[5] = s))
              : (s = p[5]),
            p[6] !== v || p[7] !== h.profile || p[8] !== y
              ? ((r =
                  y || "owner" !== h.profile.relationship
                    ? null
                    : (0, i.jsx)(c.I, {
                        className: "ms-2 inline-block align-middle",
                        asset: a.u,
                        label: v.formatMessage({
                          id: "businessProfiles.dashboard.claimedBusiness",
                          defaultMessage: "Claimed business",
                        }),
                      })),
                (p[6] = v),
                (p[7] = h.profile),
                (p[8] = y),
                (p[9] = r))
              : (r = p[9]),
            p[10] !== w || p[11] !== t || p[12] !== s || p[13] !== r
              ? ((l = (0, i.jsxs)("span", { className: t, children: [w, s, r] })),
                (p[10] = w),
                (p[11] = t),
                (p[12] = s),
                (p[13] = r),
                (p[14] = l))
              : (l = p[14]),
            l
          )
        },
      },
    )
  },
  cwoy(e, t, s) {
    var i = s("ABep"),
      n = s("QosV"),
      r = s("on57"),
      l = s("qmMi"),
      a = s("zd8w"),
      o = s("Wf1j"),
      d = s("oyxz"),
      u = s("Qgfj"),
      c = s("Ywss"),
      f = s("ASxG"),
      p = s("va0r"),
      h = s("Sm6l"),
      m = s("JNtf"),
      g = s("bVeK"),
      x = s("BrP7"),
      b = s("i4z1"),
      y = s("C1dV"),
      _ = s("jUt5"),
      v = s("naYv"),
      j = s("YNbN"),
      w = s("Gnfq")
    let A = f.Ikc({ businessProfilePreviewOrigin: f.YjP() })
    function S(e) {
      return { key: e, name: (0, i.jsx)(d.A, { ...k[e] }) }
    }
    function P(e) {
      return e.section
    }
    let k = (0, u.YK)({
      preview: { id: "businessProfiles.editor.preview", defaultMessage: "Profile preview" },
      hours: { id: "businessProfiles.editor.tab.hours", defaultMessage: "Hours" },
      contact: { id: "businessProfiles.editor.tab.contact", defaultMessage: "Contact" },
      location: { id: "businessProfiles.editor.tab.location", defaultMessage: "Location" },
      about: { id: "businessProfiles.editor.tab.about", defaultMessage: "About" },
      photos: { id: "businessProfiles.editor.tab.photos", defaultMessage: "Photos" },
      delivery: { id: "businessProfiles.editor.tab.delivery", defaultMessage: "Delivery" },
      returns: { id: "businessProfiles.editor.tab.returns", defaultMessage: "Returns" },
    })
    s.d(
      t,
      {},
      {
        v: function (e) {
          let t,
            s,
            u,
            f,
            C,
            M,
            N,
            q,
            R,
            I,
            T,
            E,
            F,
            U,
            D,
            z,
            B,
            V,
            O,
            L,
            K,
            $,
            G,
            H,
            Q,
            Y,
            W,
            J,
            Z,
            X,
            ee,
            et,
            es,
            ei,
            en,
            er,
            el,
            ea,
            eo,
            ed,
            eu = (0, n.c)(109),
            { manager: ec, section: ef, children: ep } = e,
            eh = (0, o.A)(),
            em = (0, l.Ul)(y.wE),
            eg = em?.mode === "admin_view",
            ex = (0, y.yL)(ec) ? ec : null,
            eb = !eg && null != ex,
            ey = em?.mode ?? "owner",
            e_ = (0, c.Zp)(),
            ev = (0, c.zy)(),
            [ej, ew] = (0, c.ok)()
          eu[0] !== ej ? ((t = ej.get("preview")), (eu[0] = ej), (eu[1] = t)) : (t = eu[1])
          let eA = "1" === t,
            eS = (0, a.useRef)(null),
            eP = (0, a.useRef)(null),
            [ek, eC] = (0, a.useState)(!1)
          ;(eu[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = () => {
                let e = eP.current
                if (null == e) return
                let t = () => eC(e.getBoundingClientRect().width > 0)
                t()
                let s = new ResizeObserver(t)
                return (s.observe(e), () => s.disconnect())
              }),
              (u = []),
              (eu[2] = s),
              (eu[3] = u))
            : ((s = eu[2]), (u = eu[3])),
            (0, a.useEffect)(s, u),
            eu[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((f = () => {
                  let e = eS.current,
                    t = e?.querySelector('[role="tab"][aria-selected="true"]')
                  if (null == e || null == t) return
                  let s = () => {
                    let s = e.getBoundingClientRect(),
                      i = t.getBoundingClientRect()
                    if (0 === s.width) return
                    let n = 0
                    ;(i.left < s.left ? (n = i.left - s.left) : i.right > s.right && (n = i.right - s.right),
                      0 !== n && e.scrollBy({ left: (n * e.offsetWidth) / s.width, behavior: "instant" }))
                  }
                  s()
                  let i = new ResizeObserver(s)
                  return (i.observe(e), i.observe(t), () => i.disconnect())
                }),
                (eu[4] = f))
              : (f = eu[4]),
            eu[5] !== eh.locale || eu[6] !== ec.capabilities.editable_sections || eu[7] !== ec.fields || eu[8] !== ef
              ? ((C = [ef, eh.locale, ec.fields, ec.capabilities.editable_sections]),
                (eu[5] = eh.locale),
                (eu[6] = ec.capabilities.editable_sections),
                (eu[7] = ec.fields),
                (eu[8] = ef),
                (eu[9] = C))
              : (C = eu[9]),
            (0, a.useLayoutEffect)(f, C),
            eu[10] !== ev.pathname || eu[11] !== ev.state || eu[12] !== e_ || eu[13] !== ej || eu[14] !== ew
              ? ((M = function () {
                  let e = A.safeParse(ev.state)
                  if (e.success && e.data.businessProfilePreviewOrigin === ev.pathname) return void e_(-1)
                  let t = new URLSearchParams(ej)
                  ;(t.delete("preview"), ew(t, { replace: !0 }))
                }),
                (eu[10] = ev.pathname),
                (eu[11] = ev.state),
                (eu[12] = e_),
                (eu[13] = ej),
                (eu[14] = ew),
                (eu[15] = M))
              : (M = eu[15]))
          let eM = M,
            eN = eb && "ps-[max(--spacing(3),var(--app-shell-titlebar-left-inset,0px))]"
          ;(eu[16] !== eN
            ? ((N = (0, r.A)("flex items-center justify-between p-3 select-none", eN)), (eu[16] = eN), (eu[17] = N))
            : (N = eu[17]),
            eu[18] !== ey || eu[19] !== ec.profile.business_profile_id || eu[20] !== e_
              ? ((q = () => void e_((0, w.Ds)(ec.profile.business_profile_id, "insights", ey))),
                (eu[18] = ey),
                (eu[19] = ec.profile.business_profile_id),
                (eu[20] = e_),
                (eu[21] = q))
              : (q = eu[21]),
            eu[22] === Symbol.for("react.memo_cache_sentinel")
              ? ((R = (0, i.jsx)(_.M, { variant: "edit" })), (eu[22] = R))
              : (R = eu[22]),
            eu[23] !== q
              ? ((I = (0, i.jsx)(h.$, { color: "ghostActive", size: "dialogGhost", onClick: q, children: R })),
                (eu[23] = q),
                (eu[24] = I))
              : (I = eu[24]),
            eu[25] !== eb || eu[26] !== ec
              ? ((T = eb ? null : (0, i.jsx)(v.c, { manager: ec })), (eu[25] = eb), (eu[26] = ec), (eu[27] = T))
              : (T = eu[27]),
            eu[28] !== eM || eu[29] !== ev.pathname || eu[30] !== ej || eu[31] !== ew
              ? ((E = (e) => {
                  if (!e) return void eM()
                  let t = new URLSearchParams(ej)
                  ;(t.set("preview", "1"), ew(t, { state: { businessProfilePreviewOrigin: ev.pathname } }))
                }),
                (eu[28] = eM),
                (eu[29] = ev.pathname),
                (eu[30] = ej),
                (eu[31] = ew),
                (eu[32] = E))
              : (E = eu[32]),
            eu[33] !== eh ? ((F = eh.formatMessage(k.preview)), (eu[33] = eh), (eu[34] = F)) : (F = eu[34]),
            eu[35] === Symbol.for("react.memo_cache_sentinel")
              ? ((U = (0, i.jsx)(g.Q1h, {})), (eu[35] = U))
              : (U = eu[35]),
            eu[36] !== F
              ? ((D = (0, i.jsx)(h.$, { color: "ghostActive", size: "entityHeader", "aria-label": F, children: U })),
                (eu[36] = F),
                (eu[37] = D))
              : (D = eu[37]),
            eu[38] === Symbol.for("react.memo_cache_sentinel")
              ? ((z = { "aria-describedby": void 0 }), (eu[38] = z))
              : (z = eu[38]),
            eu[39] === Symbol.for("react.memo_cache_sentinel")
              ? ((B = (0, i.jsx)(_.M, { variant: "edit" })), (eu[39] = B))
              : (B = eu[39]),
            eu[40] !== eM
              ? ((V = (0, i.jsx)(h.$, { color: "ghostActive", size: "dialogGhost", onClick: eM, children: B })),
                (eu[40] = eM),
                (eu[41] = V))
              : (V = eu[41]),
            eu[42] === Symbol.for("react.memo_cache_sentinel")
              ? ((O = (0, i.jsx)(m.L3, {
                  className: "text-base font-medium",
                  children: (0, i.jsx)(d.A, { ...k.preview }),
                })),
                (eu[42] = O))
              : (O = eu[42]),
            eu[43] !== V
              ? ((L = (0, i.jsxs)("div", { className: "flex items-center gap-3 p-3 select-none", children: [V, O] })),
                (eu[43] = V),
                (eu[44] = L))
              : (L = eu[44]),
            eu[45] !== ec || eu[46] !== eA || eu[47] !== ef
              ? ((K = eA ? (0, i.jsx)(j.Z, { manager: ec, section: ef, inDialog: !0 }) : null),
                (eu[45] = ec),
                (eu[46] = eA),
                (eu[47] = ef),
                (eu[48] = K))
              : (K = eu[48]),
            eu[49] !== K
              ? (($ = (0, i.jsx)("div", { className: "min-h-0 flex-1 overflow-y-auto", children: K })),
                (eu[49] = K),
                (eu[50] = $))
              : ($ = eu[50]),
            eu[51] !== L || eu[52] !== $
              ? ((G = (0, i.jsxs)("div", {
                  className: "flex h-full min-h-0 flex-col bg-surface text-default",
                  children: [L, $],
                })),
                (eu[51] = L),
                (eu[52] = $),
                (eu[53] = G))
              : (G = eu[53]),
            eu[54] !== eA || eu[55] !== E || eu[56] !== D || eu[57] !== G
              ? ((H = (0, i.jsx)("div", {
                  className: "@5xl/business-editor:hidden",
                  children: (0, i.jsx)(m.lG, {
                    open: eA,
                    onOpenChange: E,
                    triggerContent: D,
                    showDialogClose: !1,
                    unstyledContent: !0,
                    viewportSized: !0,
                    contentProps: z,
                    children: G,
                  }),
                })),
                (eu[54] = eA),
                (eu[55] = E),
                (eu[56] = D),
                (eu[57] = G),
                (eu[58] = H))
              : (H = eu[58]),
            eu[59] !== I || eu[60] !== T || eu[61] !== H || eu[62] !== N
              ? ((Q = (0, i.jsxs)("div", { className: N, children: [I, T, H] })),
                (eu[59] = I),
                (eu[60] = T),
                (eu[61] = H),
                (eu[62] = N),
                (eu[63] = Q))
              : (Q = eu[63]))
          let eq = eb ? "pb-8 @5xl/business-editor:pb-16" : "py-8 @5xl/business-editor:py-16"
          return (
            eu[64] !== eq
              ? ((Y = (0, r.A)("mx-auto flex w-full max-w-lg flex-col gap-6 px-6 @5xl/business-editor:px-0", eq)),
                (eu[64] = eq),
                (eu[65] = Y))
              : (Y = eu[65]),
            eu[66] !== eg
              ? ((W = (0, i.jsx)("h1", {
                  className: "text-heading-lg leading-tight font-normal md:text-heading-app",
                  children: eg
                    ? (0, i.jsx)(d.A, { id: "businessProfiles.viewProfile", defaultMessage: "View profile" })
                    : (0, i.jsx)(d.A, { id: "businessProfiles.editor.title", defaultMessage: "Edit business details" }),
                })),
                (J = eg
                  ? (0, i.jsx)("p", {
                      role: "status",
                      children: (0, i.jsx)(d.A, {
                        id: "businessProfiles.adminView.readOnly",
                        defaultMessage: "Admin view \xb7 Read only",
                      }),
                    })
                  : null),
                (eu[66] = eg),
                (eu[67] = W),
                (eu[68] = J))
              : ((W = eu[67]), (J = eu[68])),
            eu[69] !== ec.last_applied_at
              ? ((Z =
                  null != ec.last_applied_at
                    ? (0, i.jsx)("p", {
                        className: "text-base text-secondary",
                        children: (0, i.jsx)(d.A, {
                          id: "businessProfiles.editor.lastApplied",
                          defaultMessage: "Last updated {updatedAt, date, short}",
                          values: { updatedAt: new Date(ec.last_applied_at) },
                        }),
                      })
                    : null),
                (eu[69] = ec.last_applied_at),
                (eu[70] = Z))
              : (Z = eu[70]),
            eu[71] !== W || eu[72] !== J || eu[73] !== Z
              ? ((X = (0, i.jsxs)("div", { className: "flex flex-col gap-1 select-none", children: [W, J, Z] })),
                (eu[71] = W),
                (eu[72] = J),
                (eu[73] = Z),
                (eu[74] = X))
              : (X = eu[74]),
            eu[75] !== ec
              ? ((ee = b._I
                  .filter(
                    (e) =>
                      (0, w.Ys)(ec, e) &&
                      (ec.capabilities.editable_sections.includes(e) ||
                        (ec.available_sections ?? ec.fields.map(P)).includes(e)),
                  )
                  .map(S)),
                (eu[75] = ec),
                (eu[76] = ee))
              : (ee = eu[76]),
            eu[77] !== ey || eu[78] !== ec.profile.business_profile_id || eu[79] !== e_
              ? ((et = (e) => {
                  e_((0, w.Ds)(ec.profile.business_profile_id, `edit/${e}`, ey))
                }),
                (eu[77] = ey),
                (eu[78] = ec.profile.business_profile_id),
                (eu[79] = e_),
                (eu[80] = et))
              : (et = eu[80]),
            eu[81] !== eh
              ? ((es = eh.formatMessage({
                  id: "businessProfiles.editor.navigation",
                  defaultMessage: "Profile sections",
                })),
                (eu[81] = eh),
                (eu[82] = es))
              : (es = eu[82]),
            eu[83] !== ef || eu[84] !== ee || eu[85] !== et || eu[86] !== es
              ? ((ei = (0, i.jsx)(x.t, {
                  tabListRef: eS,
                  tabs: ee,
                  selectedKey: ef,
                  onSelect: et,
                  variant: "editor",
                  scrollable: !0,
                  ariaLabel: es,
                })),
                (eu[83] = ef),
                (eu[84] = ee),
                (eu[85] = et),
                (eu[86] = es),
                (eu[87] = ei))
              : (ei = eu[87]),
            eu[88] !== ep || eu[89] !== Y || eu[90] !== X || eu[91] !== ei
              ? ((en = (0, i.jsxs)("div", { className: Y, children: [X, ei, ep] })),
                (eu[88] = ep),
                (eu[89] = Y),
                (eu[90] = X),
                (eu[91] = ei),
                (eu[92] = en))
              : (en = eu[92]),
            eu[93] !== Q || eu[94] !== en
              ? ((er = (0, i.jsxs)("div", {
                  className: "flex min-w-0 flex-1 flex-col overflow-y-auto",
                  children: [Q, en],
                })),
                (eu[93] = Q),
                (eu[94] = en),
                (eu[95] = er))
              : (er = eu[95]),
            eu[96] !== eh ? ((el = eh.formatMessage(k.preview)), (eu[96] = eh), (eu[97] = el)) : (el = eu[97]),
            eu[98] !== ec || eu[99] !== ek || eu[100] !== ef
              ? ((ea = ek ? (0, i.jsx)(j.Z, { manager: ec, section: ef }) : null),
                (eu[98] = ec),
                (eu[99] = ek),
                (eu[100] = ef),
                (eu[101] = ea))
              : (ea = eu[101]),
            eu[102] !== el || eu[103] !== ea
              ? ((eo = (0, i.jsx)("aside", {
                  ref: eP,
                  className:
                    "my-4 me-4 hidden min-h-0 w-105 shrink-0 overflow-y-auto rounded-3xl border border-default bg-surface shadow-sm @5xl/business-editor:block",
                  "aria-label": el,
                  children: ea,
                })),
                (eu[102] = el),
                (eu[103] = ea),
                (eu[104] = eo))
              : (eo = eu[104]),
            eu[105] !== eb || eu[106] !== er || eu[107] !== eo
              ? ((ed = (0, i.jsx)("div", {
                  className: "@container/business-editor flex h-full min-h-0 flex-1 overflow-hidden",
                  children: (0, i.jsxs)(p.bn, { contentInset: "when-present", enabled: eb, children: [er, eo] }),
                })),
                (eu[105] = eb),
                (eu[106] = er),
                (eu[107] = eo),
                (eu[108] = ed))
              : (ed = eu[108]),
            ed
          )
        },
      },
    )
  },
  kPWY(e, t, s) {
    var i = s("S2r0"),
      n = s("Kwur"),
      r = s("Fl1P")
    let l = "2026-06-15",
      a = "2026-10-14-commerce-policies"
    function o(e) {
      return e.agreement_version === l && e.consent_version === a
    }
    s.d(
      t,
      {},
      {
        Sq: l,
        WC: function (e, t, s) {
          let l = { accountId: e, userId: t, profileId: s }
          return (0, i.j)({
            queryKey: ["business-profile-feed-agreement", t, e, s],
            enabled: null != t,
            queryFn: async ({ signal: i }) => {
              if (null == t) throw Error("Merchant identity unavailable")
              let a = await n.Request.safeGet("/shopping/business-profiles/{business_profile_id}/merchant-agreement", {
                expectedIdentity: { accountId: e, userId: t },
                parameters: { path: { business_profile_id: s } },
                signal: i,
                retry: !1,
                expectedErrorStatuses: [401, 403, 404, 503],
              }).catch((0, r.Z)(l, "agreement_status", i))
              if (a.user_id !== t || a.business_profile_id !== s)
                throw Error("Business Profile agreement identity changed")
              return (
                i.aborted ||
                  "agreement_required" !== a.access ||
                  (0, r.Rq)(l, "agreement_version", o(a) ? null : "agreement_version"),
                a
              )
            },
            staleTime: 0,
            gcTime: 0,
            retry: !1,
            refetchOnWindowFocus: "always",
          })
        },
        _R: o,
        aL: a,
      },
    )
  },
  WIbF(e, t, s) {
    var i = s("ABep"),
      n = s("QosV"),
      r = s("DZTm"),
      l = s("T0Rc"),
      a = s("xSOA"),
      o = s("on57"),
      d = s("zd8w"),
      u = s("oyxz"),
      c = s("UOa8"),
      f = s("Kwur"),
      p = s("Bbed"),
      h = s("RNul"),
      m = s("ty20"),
      g = s("Fl1P"),
      x = s("tzGG"),
      b = s("VVBW"),
      y = s("b8rs"),
      _ = s("kPWY")
    let v = (0, p._)(r.l)
    function j(e) {
      let t,
        s,
        r,
        l,
        c,
        p,
        j,
        w,
        A,
        S,
        P,
        k,
        C,
        M,
        N = (0, n.c)(51),
        {
          agreement: q,
          requireCurrentRead: R,
          onBack: I,
          accountId: T,
          userId: E,
          manager: F,
          profilePicker: U,
          fallbackActions: D,
          loadingFallback: z,
          children: B,
          onExit: V,
        } = e,
        { data: O, error: L, isFetchedAfterMount: K, refetch: $ } = q,
        G = F.profile.business_profile_id
      N[0] !== T || N[1] !== G || N[2] !== E
        ? ((t = { accountId: T, userId: E, profileId: G }), (N[0] = T), (N[1] = G), (N[2] = E), (N[3] = t))
        : (t = N[3])
      let H = t,
        Q = (0, d.useRef)(null)
      ;(N[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = () => () => Q.current?.abort()), (r = []), (N[4] = s), (N[5] = r))
        : ((s = N[4]), (r = N[5])),
        (0, d.useEffect)(s, r))
      let Y = void 0 !== R && R && !K ? void 0 : O,
        W = null == Y && null == L
      N[6] !== Y ? ((l = null != Y && (0, _._R)(Y)), (N[6] = Y), (N[7] = l)) : (l = N[7])
      let J = l && Y?.access === "agreement_required"
      N[8] !== T || N[9] !== J || N[10] !== G || N[11] !== $ || N[12] !== H || N[13] !== E
        ? ((c = {
            mutationFn: async () => {
              if (null == E || !J || null != Q.current) return
              let e = new AbortController()
              return (
                (Q.current = e),
                f.Request.safePost("/shopping/business-profiles/{business_profile_id}/merchant-agreement", {
                  expectedIdentity: { accountId: T, userId: E },
                  parameters: { path: { business_profile_id: G } },
                  signal: e.signal,
                  retry: "never",
                  expectedErrorStatuses: [401, 403, 404, 409, 422, 503],
                  requestBody: { agreement_version: _.Sq, consent_version: _.aL, accepted_terms: !0 },
                })
                  .catch((0, g.Z)(H, "agreement_accept", e.signal))
                  .then(async (t) => {
                    if ((e.signal.throwIfAborted(), t.user_id !== E || t.business_profile_id !== G))
                      throw Error("Business Profile acceptance identity changed")
                    await $()
                  })
                  .finally(() => {
                    Q.current === e && (Q.current = null)
                  })
              )
            },
            retry: !1,
            gcTime: 0,
          }),
          (N[8] = T),
          (N[9] = J),
          (N[10] = G),
          (N[11] = $),
          (N[12] = H),
          (N[13] = E),
          (N[14] = c))
        : (c = N[14])
      let { mutate: Z, error: X, isPending: ee } = (0, a.n)(c),
        et = L ?? X
      if (null == L && Y?.access === "allowed" && null != Y.accepted_at) {
        let e
        return (
          N[15] !== B ? ((e = (0, i.jsx)(i.Fragment, { children: B })), (N[15] = B), (N[16] = e)) : (e = N[16]),
          e
        )
      }
      if (W && null != z) {
        let e
        return (
          N[17] !== z ? ((e = (0, i.jsx)(i.Fragment, { children: z })), (N[17] = z), (N[18] = e)) : (e = N[18]),
          e
        )
      }
      return (
        N[19] !== F ? ((p = (0, i.jsx)(y.G, { manager: F })), (N[19] = F), (N[20] = p)) : (p = N[20]),
        N[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (0, o.A)(
              "m-auto flex w-full max-w-xl flex-col gap-6 px-8 py-32",
              "[&_form]:gap-5 [&_form]:text-sm [&_form]:leading-5 [&_form]:text-secondary [&_form>div]:mt-1 [&_form>div]:gap-2",
              "[&_form_a]:font-normal [&_form_a]:text-inherit! [&_form_a]:decoration-dotted!",
              "[&_form_button]:min-h-10.5 [&_form_button]:px-4 [&_form_button]:py-2 [&_form_button]:text-sm [&_form_button]:leading-5 [&_form_button]:font-medium",
              "[&_form_button[type=button]]:border-default [&_form_button[type=button]]:bg-transparent [&_form_button[type=button]:hover]:bg-primary-ghost-hover",
            )),
            (N[21] = j))
          : (j = N[21]),
        N[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, i.jsx)("h1", {
              className: "text-heading-app leading-8.5 font-normal tracking-[0.38px] select-none",
              children: (0, i.jsx)(u.A, {
                id: "businessProfiles.feeds.agreementTitle",
                defaultMessage: "Add your products to ChatGPT",
              }),
            })),
            (N[22] = w))
          : (w = N[22]),
        N[23] !== $ || N[24] !== et
          ? ((A = null != et ? (0, i.jsx)(x.AB, { error: et, onRetry: () => void $() }) : null),
            (N[23] = $),
            (N[24] = et),
            (N[25] = A))
          : (A = N[25]),
        N[26] !== W ? ((S = W ? (0, i.jsx)(h.y, {}) : null), (N[26] = W), (N[27] = S)) : (S = N[27]),
        N[28] !== J || N[29] !== L || N[30] !== Z || N[31] !== I || N[32] !== V || N[33] !== ee
          ? ((P =
              null == L && J
                ? (0, i.jsx)(v, {
                    submitButton: m.d,
                    openTarget: "external-browser",
                    submitting: ee,
                    onSubmit: (e) => {
                      ;(e.preventDefault(), ee || null != Q.current || Z())
                    },
                    onBack: I ?? V,
                  })
                : null),
            (N[28] = J),
            (N[29] = L),
            (N[30] = Z),
            (N[31] = I),
            (N[32] = V),
            (N[33] = ee),
            (N[34] = P))
          : (P = N[34]),
        N[35] !== J || N[36] !== L || N[37] !== W || N[38] !== $
          ? ((k =
              W || null != L || J
                ? null
                : (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)("p", {
                        role: "alert",
                        children: (0, i.jsx)(u.A, {
                          id: "businessProfiles.feeds.agreementUnavailable",
                          defaultMessage:
                            "Agreement acceptance isn\u2019t available right now. Please refresh or contact support.",
                        }),
                      }),
                      (0, i.jsx)(m.d, {
                        className: "self-start",
                        color: "secondary",
                        onClick: () => void $(),
                        children: (0, i.jsx)(u.A, {
                          id: "merchantSettings.agreement.refresh",
                          defaultMessage: "Refresh status",
                        }),
                      }),
                    ],
                  })),
            (N[35] = J),
            (N[36] = L),
            (N[37] = W),
            (N[38] = $),
            (N[39] = k))
          : (k = N[39]),
        N[40] !== D || N[41] !== U || N[42] !== A || N[43] !== S || N[44] !== P || N[45] !== k
          ? ((C = (0, i.jsxs)("div", { className: j, children: [w, U, A, S, P, k, D] })),
            (N[40] = D),
            (N[41] = U),
            (N[42] = A),
            (N[43] = S),
            (N[44] = P),
            (N[45] = k),
            (N[46] = C))
          : (C = N[46]),
        N[47] !== V || N[48] !== C || N[49] !== p
          ? ((M = (0, i.jsx)(b.I, { preview: p, onExit: V, children: C })),
            (N[47] = V),
            (N[48] = C),
            (N[49] = p),
            (N[50] = M))
          : (M = N[50]),
        M
      )
    }
    s.d(
      t,
      {},
      {
        B: j,
        K: function (e) {
          let t,
            s,
            r = (0, n.c)(15),
            {
              accountId: a,
              manager: o,
              profilePicker: d,
              fallbackActions: u,
              loadingFallback: f,
              children: p,
              onExit: h,
            } = e,
            { userId: m } = (0, c.As)()
          r[0] !== a || r[1] !== o.profile.business_profile_id || r[2] !== m
            ? ((t = (0, _.WC)(a, m, o.profile.business_profile_id)),
              (r[0] = a),
              (r[1] = o.profile.business_profile_id),
              (r[2] = m),
              (r[3] = t))
            : (t = r[3])
          let g = (0, l.I)(t),
            x = `${m}:${a}:${o.profile.business_profile_id}`
          return (
            r[4] !== a ||
            r[5] !== g ||
            r[6] !== p ||
            r[7] !== u ||
            r[8] !== f ||
            r[9] !== o ||
            r[10] !== h ||
            r[11] !== d ||
            r[12] !== x ||
            r[13] !== m
              ? ((s = (0, i.jsx)(
                  j,
                  {
                    agreement: g,
                    accountId: a,
                    userId: m,
                    manager: o,
                    profilePicker: d,
                    fallbackActions: u,
                    loadingFallback: f,
                    onExit: h,
                    children: p,
                  },
                  x,
                )),
                (r[4] = a),
                (r[5] = g),
                (r[6] = p),
                (r[7] = u),
                (r[8] = f),
                (r[9] = o),
                (r[10] = h),
                (r[11] = d),
                (r[12] = x),
                (r[13] = m),
                (r[14] = s))
              : (s = r[14]),
            s
          )
        },
      },
    )
  },
  YNbN(e, t, s) {
    s.d(t, { Z: () => x })
    var i = s("ABep"),
      n = s("QosV"),
      r = s("irkb"),
      l = s("qmMi"),
      a = s("oyxz"),
      o = s("UOa8"),
      d = s("DcH0"),
      u = s("C1dV"),
      c = s("XpF1"),
      f = s("wv9C"),
      p = s("T0Rc"),
      h = s("g5Mm"),
      m = s("b8rs"),
      g = s("uYQT")
    function x(e) {
      let t,
        s,
        r,
        a = (0, n.c)(10)
      a[0] !== e ? (({ manager: t, ...s } = e), (a[0] = e), (a[1] = t), (a[2] = s)) : ((t = a[1]), (s = a[2]))
      let o = (0, l.Ul)(u.wE)
      if (o?.mode === "admin_view") {
        let e
        return (
          a[3] !== t || a[4] !== s.inDialog
            ? ((e = (0, i.jsx)(m.G, { manager: t, inDialog: s.inDialog })), (a[3] = t), (a[4] = s.inDialog), (a[5] = e))
            : (e = a[5]),
          e
        )
      }
      if (!(0, u.yL)(t)) {
        let e
        return (
          a[6] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, i.jsx)(g.CV, {})), (a[6] = e)) : (e = a[6]),
          e
        )
      }
      return (
        a[7] !== t || a[8] !== s
          ? ((r = (0, i.jsx)(b, { manager: t, ...s })), (a[7] = t), (a[8] = s), (a[9] = r))
          : (r = a[9]),
        r
      )
    }
    function b(e) {
      let t,
        s = (0, n.c)(10),
        { manager: l, section: a, inDialog: d } = e,
        { accountId: u } = (0, o.As)(),
        x = (0, r.jE)(),
        b = (0, f.o)(x, u, l.profile.business_profile_id),
        {
          data: _,
          isError: v,
          error: j,
          refetch: w,
        } = (function (e) {
          let t,
            s,
            i,
            l = (0, n.c)(8),
            { accountId: a } = (0, o.As)(),
            d = (0, r.jE)()
          if (l[0] !== a || l[1] !== e.profile.business_profile_id || l[2] !== d) {
            let i = (0, f.o)(d, a, e.profile.business_profile_id)
            ;((s = p.I),
              (t = (0, h.xs)(d, a ?? "", e.profile.business_profile_id, "preview", void 0, i)),
              (l[0] = a),
              (l[1] = e.profile.business_profile_id),
              (l[2] = d),
              (l[3] = t),
              (l[4] = s))
          } else ((t = l[3]), (s = l[4]))
          let u = null != a
          return (
            l[5] !== t || l[6] !== u
              ? ((i = { ...t, enabled: u, staleTime: 1 / 0, refetchOnMount: !0 }), (l[5] = t), (l[6] = u), (l[7] = i))
              : (i = l[7]),
            s(i)
          )
        })(l)
      if (v) {
        let e, t
        return (
          s[0] !== w ? ((e = () => void w()), (s[0] = w), (s[1] = e)) : (e = s[1]),
          s[2] !== j || s[3] !== e
            ? ((t = (0, i.jsx)(g.iM, { error: j, onRetry: e })), (s[2] = j), (s[3] = e), (s[4] = t))
            : (t = s[4]),
          t
        )
      }
      if (null == _) {
        let e
        return (
          s[5] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, i.jsx)(y, {})), (s[5] = e)) : (e = s[5]),
          e
        )
      }
      let A = (0, c.M6)(u ?? "", l.profile.business_profile_id),
        S = x.getQueryData([...A, "complete", null, b?.key ?? null])
      s[6] !== u || s[7] !== l.profile.business_profile_id || s[8] !== x
        ? ((t = x.getQueryData(["business-profiles", u, l.profile.business_profile_id, "accepted-fields"])),
          (s[6] = u),
          (s[7] = l.profile.business_profile_id),
          (s[8] = x),
          (s[9] = t))
        : (t = s[9])
      let P = t,
        k = l.fields.filter((e) => {
          if (e.section === a || P?.[e.field_key] != null || null != S) return !0
          let t = x.getQueryData([...A, "section", e.section, b?.key ?? null])
          return t?.fields.some((t) => t.field_key === e.field_key)
        }),
        C = { ..._, fields: [..._.fields.filter((e) => !k.some((t) => t.field_key === e.field_key)), ...k] }
      return (0, i.jsx)(m.G, { manager: C, inDialog: void 0 !== d && d })
    }
    function y(e) {
      let t,
        s,
        r,
        l,
        o,
        u = (0, n.c)(5)
      return (
        u[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)("span", {
              className: "sr-only",
              children: (0, i.jsx)(a.A, {
                id: "businessProfiles.preview.loading",
                defaultMessage: "Loading profile preview",
              }),
            })),
            (u[0] = t))
          : (t = u[0]),
        u[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, i.jsx)(d._, { className: "h-80 w-full", variant: "prominent" })), (u[1] = s))
          : (s = u[1]),
        u[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, i.jsxs)("div", {
              className: "flex flex-col gap-2",
              children: [
                (0, i.jsx)(d._, { className: "h-7 w-3/4 rounded-md", variant: "prominent" }),
                (0, i.jsx)(d._, { className: "h-5 w-1/2 rounded-md", variant: "prominent" }),
              ],
            })),
            (u[2] = r))
          : (r = u[2]),
        u[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, i.jsxs)("div", {
              className: "flex gap-2",
              children: [
                (0, i.jsx)(d._, { className: "h-9 w-28 rounded-full", variant: "prominent" }),
                (0, i.jsx)(d._, { className: "h-9 w-24 rounded-full", variant: "prominent" }),
              ],
            })),
            (u[3] = l))
          : (l = u[3]),
        u[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, i.jsxs)("div", {
              role: "status",
              children: [
                t,
                (0, i.jsxs)("div", {
                  "aria-hidden": "true",
                  className: "flex flex-col gap-5 pb-12",
                  children: [
                    s,
                    (0, i.jsxs)("div", {
                      className: "flex flex-col gap-5 px-6",
                      children: [
                        r,
                        l,
                        (0, i.jsxs)("div", {
                          className: "flex flex-col gap-4 border-t border-default pt-4",
                          children: [
                            (0, i.jsx)(d._, { className: "h-5 w-2/3 rounded-md", variant: "prominent" }),
                            (0, i.jsx)(d._, { className: "h-5 w-full rounded-md", variant: "prominent" }),
                            (0, i.jsx)(d._, { className: "h-5 w-3/4 rounded-md", variant: "prominent" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })),
            (u[4] = o))
          : (o = u[4]),
        o
      )
    }
  },
  lFwx(e, t, s) {
    var i = s("S2r0"),
      n = s("Kwur"),
      r = s("W7Gu")
    s.d(
      t,
      {},
      {
        A: function (e, t, s, l = !0) {
          return (0, i.j)({
            queryKey: ["business-profiles", e, t, "hosted-url", s],
            queryFn: ({ signal: i }) =>
              n.Request.safeGet("/shopping/business-profiles/{business_profile_id}/feeds/{feed_id}/hosted-url", {
                additionalHeaders: { "ChatGPT-Account-ID": e },
                parameters: { path: { business_profile_id: t, feed_id: s } },
                expectedErrorStatuses: [401, 403, 404],
                signal: i,
              }),
            ...r.I,
            staleTime: 3e5,
            gcTime: 9e5,
            enabled: l,
            retry: !1,
          })
        },
        I: function (e, t, s, l) {
          return (0, i.j)({
            queryKey: ["business-profiles", e, t, "sftp", s],
            queryFn: ({ signal: i }) =>
              n.Request.safeGet("/shopping/business-profiles/{business_profile_id}/feeds/{feed_id}/sftp", {
                additionalHeaders: { "ChatGPT-Account-ID": e },
                parameters: { path: { business_profile_id: t, feed_id: s } },
                expectedErrorStatuses: [401, 403, 404],
                signal: i,
              }).catch((e) => {
                throw (l?.(e, i), e)
              }),
            ...r.I,
            staleTime: 3e5,
            refetchOnWindowFocus: !1,
            gcTime: 9e5,
            retry: !1,
          })
        },
      },
    )
  },
  VPzX(e, t, s) {
    s.d(t, { B: () => X })
    var i = s("ABep"),
      n = s("QosV"),
      r = s("irkb"),
      l = s("T0Rc"),
      a = s("zd8w"),
      o = s("oyxz"),
      d = s("Ywss"),
      u = s("Kwur"),
      c = s("Sm6l"),
      f = s("Bbed"),
      p = s("BSnr"),
      h = s("eShZ"),
      m = s("C1dV"),
      g = s("WIbF"),
      x = s("W7Gu"),
      b = s("NRby"),
      y = s("xSOA"),
      _ = s("UOa8"),
      v = s("ty20"),
      j = s("wJOJ"),
      w = s("gtGM"),
      A = s("Fl1P"),
      S = s("tzGG")
    function P(e) {
      let t,
        s,
        c,
        f,
        m,
        g,
        b,
        P,
        C,
        M,
        N,
        q,
        R,
        I,
        T,
        E,
        F,
        U,
        D,
        z,
        B = (0, n.c)(91),
        { accountId: V, profileId: O, feedId: L, onAccepted: K } = e,
        { userId: $ } = (0, _.As)()
      B[0] !== V || B[1] !== L || B[2] !== O || B[3] !== $
        ? ((t = { accountId: V, userId: $, profileId: O, feedId: L }),
          (B[0] = V),
          (B[1] = L),
          (B[2] = O),
          (B[3] = $),
          (B[4] = t))
        : (t = B[4])
      let G = t,
        H = (0, a.useRef)(null),
        Q = (0, a.useRef)(null)
      ;(B[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = () => () => Q.current?.abort()), (c = []), (B[5] = s), (B[6] = c))
        : ((s = B[5]), (c = B[6])),
        (0, a.useEffect)(s, c))
      let [Y, W] = (0, d.ok)(),
        J = (0, r.jE)()
      B[7] !== V || B[8] !== L || B[9] !== O
        ? ((f = ["business-profiles", V, O, "hosted-url", L]), (B[7] = V), (B[8] = L), (B[9] = O), (B[10] = f))
        : (f = B[10])
      let Z = f
      ;(B[11] !== V || B[12] !== L || B[13] !== O
        ? ((m = (e) => {
            let { signal: t } = e
            return u.Request.safeGet("/shopping/business-profiles/{business_profile_id}/feeds/{feed_id}/hosted-url", {
              additionalHeaders: { "ChatGPT-Account-ID": V },
              parameters: { path: { business_profile_id: O, feed_id: L } },
              expectedErrorStatuses: [401, 403, 404],
              signal: t,
            })
          }),
          (B[11] = V),
          (B[12] = L),
          (B[13] = O),
          (B[14] = m))
        : (m = B[14]),
        B[15] !== Z || B[16] !== m
          ? ((g = { queryKey: Z, queryFn: m, ...x.I, staleTime: 3e5, gcTime: 9e5, retry: !1 }),
            (B[15] = Z),
            (B[16] = m),
            (B[17] = g))
          : (g = B[17]))
      let { data: X, dataUpdatedAt: ee, error: et, refetch: es } = (0, l.I)(g)
      B[18] !== V || B[19] !== X || B[20] !== L || B[21] !== O || B[22] !== G
        ? ((b = {
            mutationFn: async (e) => {
              if (X?.source_url == null) throw Error("Configure a Hosted source before validating")
              let t = new AbortController()
              return (
                Q.current?.abort(),
                (Q.current = t),
                (0, j.B)({
                  accountId: V,
                  profileId: O,
                  source: { source_url: X.source_url },
                  getFeedId: () => Promise.resolve(L),
                  signal: t.signal,
                  onRequestError: (e) => {
                    t.signal.aborted || (0, A.Nd)(G, "hosted_validate", e)
                  },
                })
                  .then((t) => ({ result: t, dataUpdatedAt: e }))
                  .finally(() => {
                    Q.current === t && (Q.current = null)
                  })
              )
            },
            retry: !1,
            gcTime: 0,
          }),
          (B[18] = V),
          (B[19] = X),
          (B[20] = L),
          (B[21] = O),
          (B[22] = G),
          (B[23] = b))
        : (b = B[23])
      let { mutate: ei, data: en, isPending: er, error: el, variables: ea, reset: eo } = (0, y.n)(b),
        ed = en?.dataUpdatedAt === ee ? en.result : void 0
      B[24] !== O || B[25] !== ed ? ((P = (0, j.Rj)(ed, O)), (B[24] = O), (B[25] = ed), (B[26] = P)) : (P = B[26])
      let eu = P
      B[27] !== Y || B[28] !== W
        ? ((C = function (e) {
            if (
              e instanceof h.FetchError &&
              403 === e.status &&
              "business_profile_merchant_agreement_required" === e.errorCode
            ) {
              let e = new URLSearchParams(Y)
              ;(e.set("hosted", "1"), W(e))
            }
          }),
          (B[27] = Y),
          (B[28] = W),
          (B[29] = C))
        : (C = B[29])
      let ec = C
      ;(B[30] !== V || B[31] !== L || B[32] !== O || B[33] !== G
        ? ((M = () =>
            u.Request.safePost(
              "/shopping/business-profiles/{business_profile_id}/feeds/{feed_id}/hosted-url/schedule/disable",
              {
                additionalHeaders: { "ChatGPT-Account-ID": V },
                parameters: { path: { business_profile_id: O, feed_id: L } },
                expectedErrorStatuses: [401, 403, 404, 409],
              },
            ).catch((0, A.Z)(G, "hosted_schedule_disable"))),
          (B[30] = V),
          (B[31] = L),
          (B[32] = O),
          (B[33] = G),
          (B[34] = M))
        : (M = B[34]),
        B[35] !== V || B[36] !== L || B[37] !== O || B[38] !== J || B[39] !== Z
          ? ((N = () => {
              ;(J.setQueryData(Z, k),
                J.invalidateQueries({
                  queryKey: ["business-profiles", V, O, "feed-connection-summaries"],
                  predicate: (e) => Array.isArray(e.queryKey[4]) && e.queryKey[4].includes(L),
                }))
            }),
            (B[35] = V),
            (B[36] = L),
            (B[37] = O),
            (B[38] = J),
            (B[39] = Z),
            (B[40] = N))
          : (N = B[40]),
        B[41] !== M || B[42] !== N
          ? ((q = { mutationFn: M, onSuccess: N, retry: !1, gcTime: 0 }), (B[41] = M), (B[42] = N), (B[43] = q))
          : (q = B[43]))
      let { mutate: ef, isPending: ep, error: eh } = (0, y.n)(q)
      ;(B[44] !== V || B[45] !== L || B[46] !== O || B[47] !== G
        ? ((R = (e) => {
            let { createRequestId: t } = e
            return u.Request.safePost(
              "/shopping/business-profiles/{business_profile_id}/feeds/{feed_id}/hosted-url/runs",
              {
                additionalHeaders: { "ChatGPT-Account-ID": V },
                parameters: { path: { business_profile_id: O, feed_id: L } },
                requestBody: { create_request_id: t },
                expectedErrorStatuses: [400, 401, 403, 404, 409, 422],
              },
            ).catch((0, A.Z)(G, "hosted_run_create"))
          }),
          (B[44] = V),
          (B[45] = L),
          (B[46] = O),
          (B[47] = G),
          (B[48] = R))
        : (R = B[48]),
        B[49] !== V || B[50] !== L || B[51] !== O || B[52] !== J
          ? ((I = () => {
              J.invalidateQueries({
                queryKey: ["business-profiles", V, O],
                predicate: (e) =>
                  ("feed-connection-summaries" === e.queryKey[3] &&
                    Array.isArray(e.queryKey[4]) &&
                    e.queryKey[4].includes(L)) ||
                  ("feed-uploads" === e.queryKey[3] && e.queryKey[4] === L) ||
                  (e.queryKey[3] === L && "uploads" === e.queryKey[4]),
              })
            }),
            (B[49] = V),
            (B[50] = L),
            (B[51] = O),
            (B[52] = J),
            (B[53] = I))
          : (I = B[53]),
        B[54] !== R || B[55] !== I
          ? ((T = { mutationFn: R, onSuccess: I, retry: !1, gcTime: 0 }), (B[54] = R), (B[55] = I), (B[56] = T))
          : (T = B[56]))
      let { mutate: em, isPending: eg, error: ex, variables: eb } = (0, y.n)(T)
      return (
        B[57] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = (0, i.jsx)(p.X.Header, {
              title: (0, i.jsx)(o.A, { id: "businessProfiles.feeds.hosted.section", defaultMessage: "Hosted URL" }),
            })),
            (B[57] = E))
          : (E = B[57]),
        B[58] !== et || B[59] !== es
          ? ((F = null != et ? (0, i.jsx)(S.AB, { error: et, onRetry: () => void es() }) : null),
            (B[58] = et),
            (B[59] = es),
            (B[60] = F))
          : (F = B[60]),
        B[61] !== X || B[62] !== et
          ? ((U =
              null == et && null == X
                ? (0, i.jsx)("p", {
                    role: "status",
                    children: (0, i.jsx)(o.A, {
                      id: "businessProfiles.feeds.hosted.loading",
                      defaultMessage: "Loading source settings\u2026",
                    }),
                  })
                : null),
            (B[61] = X),
            (B[62] = et),
            (B[63] = U))
          : (U = B[63]),
        B[64] !== X ||
        B[65] !== ee ||
        B[66] !== et ||
        B[67] !== ec ||
        B[68] !== K ||
        B[69] !== Y ||
        B[70] !== ef ||
        B[71] !== eh ||
        B[72] !== ep ||
        B[73] !== O ||
        B[74] !== eo ||
        B[75] !== em ||
        B[76] !== ex ||
        B[77] !== eb?.retry ||
        B[78] !== eg ||
        B[79] !== W ||
        B[80] !== ei ||
        B[81] !== eu ||
        B[82] !== er ||
        B[83] !== ed ||
        B[84] !== el ||
        B[85] !== ea
          ? ((D =
              null == et && null != X
                ? (0, i.jsxs)(i.Fragment, {
                    children: [
                      null == X.source_url
                        ? (0, i.jsx)("p", {
                            className: "text-sm text-secondary",
                            children: (0, i.jsx)(o.A, {
                              id: "businessProfiles.feeds.hosted.empty",
                              defaultMessage: "Fetch your feed from a URL once or on a schedule",
                            }),
                          })
                        : (0, i.jsxs)(i.Fragment, {
                            children: [
                              (0, i.jsx)("p", { className: "text-sm break-words select-text", children: X.source_url }),
                              (0, i.jsx)("p", {
                                className: "text-sm text-secondary",
                                children: (0, i.jsx)(o.A, {
                                  id: "businessProfiles.feeds.hosted.scheduleStatus",
                                  defaultMessage:
                                    "{frequency, select, hourly {Hourly refresh} daily {Daily refresh} weekly {Weekly refresh} biweekly {Refresh every two weeks} other {One-time}}{paused, select, yes { \xb7 Paused} other {}}",
                                  values: {
                                    frequency: X.recurring_schedule?.frequency ?? "once",
                                    paused: X.recurring_schedule?.enabled === !1 ? "yes" : "no",
                                  },
                                }),
                              }),
                            ],
                          }),
                      (0, i.jsxs)("div", {
                        className: "flex flex-wrap items-center gap-2 select-none",
                        children: [
                          (0, i.jsx)(v.d, {
                            color: "secondary",
                            disabled: eg || ep,
                            onClick: () => {
                              let e = new URLSearchParams(Y)
                              ;(e.set("hosted", "1"), W(e))
                            },
                            children: (0, i.jsx)(o.A, {
                              id: "businessProfiles.feeds.hosted.configure",
                              defaultMessage: "Configure URL",
                            }),
                          }),
                          null != X.source_url
                            ? (0, i.jsx)(v.d, {
                                color: "secondary",
                                loading: eg || er,
                                disabled: eg || er || ep,
                                onClick: () => {
                                  null != H.current || eu
                                    ? (null == H.current && (H.current = crypto.randomUUID()),
                                      em(
                                        { createRequestId: H.current, retry: null != ex },
                                        {
                                          onError: ec,
                                          onSuccess: (e) => {
                                            ;((H.current = null), eo(), K(e.upload_id))
                                            let t = new URLSearchParams(Y)
                                            ;(t.delete("run"),
                                              t.delete("upload_cursor"),
                                              t.set("upload_id", e.upload_id),
                                              W(t))
                                          },
                                        },
                                      ))
                                    : ei(ee, { onError: ec })
                                },
                                children:
                                  null != ex || eg || eu
                                    ? (0, i.jsx)(o.A, {
                                        id: "businessProfiles.feeds.hosted.runNow",
                                        defaultMessage: "{retry, select, yes {Retry run} other {Run now}}",
                                        values: { retry: null != ex || (eg && eb?.retry) ? "yes" : "no" },
                                      })
                                    : (0, i.jsx)(o.A, {
                                        id: "businessProfiles.feeds.validateProducts",
                                        defaultMessage: "Validate",
                                      }),
                              })
                            : null,
                          X.recurring_schedule?.enabled
                            ? (0, i.jsx)(v.d, {
                                color: "secondary",
                                loading: ep,
                                disabled: ep || eg,
                                onClick: () => {
                                  ;(Q.current?.abort(), eo(), ef())
                                },
                                children: (0, i.jsx)(o.A, {
                                  id: "businessProfiles.feeds.hosted.pause",
                                  defaultMessage: "Pause schedule",
                                }),
                              })
                            : null,
                        ],
                      }),
                      (0, i.jsx)(w.B, { validation: ed, error: ea === ee ? el : null, profileId: O }),
                      null != eh ? (0, i.jsx)(S.AB, { error: eh }) : null,
                      null != ex ? (0, i.jsx)(S.AB, { error: ex }) : null,
                    ],
                  })
                : null),
            (B[64] = X),
            (B[65] = ee),
            (B[66] = et),
            (B[67] = ec),
            (B[68] = K),
            (B[69] = Y),
            (B[70] = ef),
            (B[71] = eh),
            (B[72] = ep),
            (B[73] = O),
            (B[74] = eo),
            (B[75] = em),
            (B[76] = ex),
            (B[77] = eb?.retry),
            (B[78] = eg),
            (B[79] = W),
            (B[80] = ei),
            (B[81] = eu),
            (B[82] = er),
            (B[83] = ed),
            (B[84] = el),
            (B[85] = ea),
            (B[86] = D))
          : (D = B[86]),
        B[87] !== F || B[88] !== U || B[89] !== D
          ? ((z = (0, i.jsxs)(p.X, { children: [E, (0, i.jsxs)(p.X.Content, { children: [F, U, D] })] })),
            (B[87] = F),
            (B[88] = U),
            (B[89] = D),
            (B[90] = z))
          : (z = B[90]),
        z
      )
    }
    function k(e) {
      return e?.recurring_schedule == null ? e : { ...e, recurring_schedule: { ...e.recurring_schedule, enabled: !1 } }
    }
    var C = s("slpy"),
      M = s("NFGs"),
      N = s.n(M),
      q = s("Qgfj"),
      R = s("AWNZ"),
      I = s("ZEx5"),
      T = s("X7jl"),
      E = s("Tox4"),
      F = s("neoc"),
      U = s("G6H4")
    function D(e) {
      let t,
        s,
        a,
        c,
        f,
        h,
        g,
        b,
        y,
        _,
        v,
        j,
        w,
        A,
        P,
        k = (0, n.c)(64),
        { accountId: C, profileId: M, feedId: T, acceptedUploadId: E, acceptedAt: F, adminView: U } = e,
        [D, B] = (0, d.ok)(),
        K = (0, r.jE)()
      k[0] !== D ? ((t = D.get("upload_cursor")), (k[0] = D), (k[1] = t)) : (t = k[1])
      let Q = t
      k[2] !== U || k[3] !== D
        ? ((s = null == U ? D.get("run") : null), (k[2] = U), (k[3] = D), (k[4] = s))
        : (s = k[4])
      let Y = s
      k[5] !== D ? ((a = D.get("upload_id")), (k[5] = D), (k[6] = a)) : (a = k[6])
      let W = a,
        J = null
      if (null != Y) {
        let e
        ;(k[7] !== Y ? ((e = { kind: "run", id: Y }), (k[7] = Y), (k[8] = e)) : (e = k[8]), (J = e))
      } else if (null != W) {
        let e
        ;(k[9] !== W ? ((e = { kind: "upload", id: W }), (k[9] = W), (k[10] = e)) : (e = k[10]), (J = e))
      }
      k[11] !== C || k[12] !== U || k[13] !== Q || k[14] !== T || k[15] !== M
        ? ((c = ["business-profiles", C, M, "feed-uploads", T, Q, ...(0, m.Ot)(U)]),
          (k[11] = C),
          (k[12] = U),
          (k[13] = Q),
          (k[14] = T),
          (k[15] = M),
          (k[16] = c))
        : (c = k[16])
      let Z = c
      ;(k[17] !== Z
        ? ((f = (e, t) =>
            t?.queryKey.length === Z.length && t.queryKey.every((e, t) => 5 === t || e === Z[t]) ? e : void 0),
          (k[17] = Z),
          (k[18] = f))
        : (f = k[18]),
        k[19] !== E || k[20] !== C || k[21] !== U || k[22] !== Q || k[23] !== T || k[24] !== M || k[25] !== K
          ? ((h = async (e) => {
              let { signal: t, queryKey: s } = e,
                i = K.getQueryData(s),
                n = new Map(
                  K.getQueryCache()
                    .findAll({ queryKey: ["business-profiles", C, M, "feed-connection-summaries"] })
                    .map(O),
                ),
                r = await u.Request.safeGet(
                  "/shopping/business-profiles/{business_profile_id}/feeds/{feed_id}/uploads",
                  {
                    additionalHeaders: { "ChatGPT-Account-ID": C },
                    parameters: {
                      path: { business_profile_id: M, feed_id: T },
                      query: { limit: 10, cursor: Q ?? void 0, ...(0, m.C0)(U) },
                    },
                    expectedIdentity: U,
                    expectedErrorStatuses: [400, 401, 403, 404],
                    signal: t,
                  },
                ),
                l = N()(r.items, V)
              return (
                r.items.some((e) =>
                  $(
                    i?.items.find((t) => t.upload_id === e.upload_id)?.status ??
                      (e.upload_id === E ? "received" : void 0),
                    e.status,
                  ),
                )
                  ? G(K, C, M, T, U)
                  : null == Q &&
                    null != l &&
                    !i?.items.some((e) => e.upload_id === l.upload_id) &&
                    $("processing", l.status) &&
                    G(K, C, M, T, U, { summaryVersions: n, upload: l }),
                r
              )
            }),
            (k[19] = E),
            (k[20] = C),
            (k[21] = U),
            (k[22] = Q),
            (k[23] = T),
            (k[24] = M),
            (k[25] = K),
            (k[26] = h))
          : (h = k[26]),
        k[27] !== Z || k[28] !== f || k[29] !== h
          ? ((g = {
              queryKey: Z,
              placeholderData: f,
              queryFn: h,
              ...x.I,
              staleTime: 3e5,
              gcTime: 9e5,
              retry: !1,
              refetchInterval: z,
              refetchIntervalInBackground: !1,
            }),
            (k[27] = Z),
            (k[28] = f),
            (k[29] = h),
            (k[30] = g))
          : (g = k[30]))
      let { data: X, error: ee, isFetching: et, isPlaceholderData: es, refetch: ei } = (0, l.I)(g)
      return (
        k[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, i.jsx)(o.A, { id: "businessProfiles.feeds.runs", defaultMessage: "Upload history" })),
            (k[31] = b))
          : (b = k[31]),
        k[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, i.jsx)(o.A, { id: "businessProfiles.feeds.refreshHistory", defaultMessage: "Refresh history" })),
            (k[32] = y))
          : (y = k[32]),
        k[33] !== et || k[34] !== ei
          ? ((_ = (0, i.jsx)(p.X.Header, {
              title: b,
              actions: (0, i.jsx)(S.gh, { color: "ghost", disabled: et, refresh: ei, children: y }),
            })),
            (k[33] = et),
            (k[34] = ei),
            (k[35] = _))
          : (_ = k[35]),
        k[36] !== ee || k[37] !== ei
          ? ((v = null != ee ? (0, i.jsx)(S.AB, { error: ee, onRetry: () => void ei() }) : null),
            (k[36] = ee),
            (k[37] = ei),
            (k[38] = v))
          : (v = k[38]),
        k[39] !== X || k[40] !== ee
          ? ((j =
              null == ee && null == X
                ? (0, i.jsx)("p", {
                    role: "status",
                    children: (0, i.jsx)(o.A, {
                      id: "businessProfiles.feeds.loadingRuns",
                      defaultMessage: "Loading uploads\u2026",
                    }),
                  })
                : null),
            (k[39] = X),
            (k[40] = ee),
            (k[41] = j))
          : (j = k[41]),
        k[42] !== F ||
        k[43] !== E ||
        k[44] !== C ||
        k[45] !== U ||
        k[46] !== Q ||
        k[47] !== X ||
        k[48] !== ee ||
        k[49] !== T ||
        k[50] !== et ||
        k[51] !== es ||
        k[52] !== D ||
        k[53] !== M ||
        k[54] !== J ||
        k[55] !== B
          ? ((w =
              null == ee && null != X
                ? (0, i.jsxs)(i.Fragment, {
                    children: [
                      0 === X.items.length
                        ? (0, i.jsx)("p", {
                            className: "text-sm text-secondary",
                            children: (0, i.jsx)(o.A, {
                              id: "businessProfiles.feeds.noRuns",
                              defaultMessage: "No uploads yet",
                            }),
                          })
                        : (0, i.jsx)(I.t, {
                            children: X.items.map((e) =>
                              (0, i.jsx)(
                                R.kG,
                                {
                                  label: (0, i.jsx)(q.XU, {
                                    value: e.uploaded_at,
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                    hour: "numeric",
                                    minute: "numeric",
                                  }),
                                  description: (0, i.jsx)(H, { status: e.status }),
                                  onClick: () => {
                                    let t = new URLSearchParams(D)
                                    ;(t.delete("run"), t.set("upload_id", e.upload_id), B(t))
                                  },
                                },
                                e.upload_id,
                              ),
                            ),
                          }),
                      (0, i.jsx)(S.ly, {
                        cursor: Q,
                        nextCursor: X.next_cursor,
                        isFetching: et,
                        isPlaceholderData: es,
                        onNavigate: (e) => {
                          let t = new URLSearchParams(D)
                          ;(null == e ? t.delete("upload_cursor") : t.set("upload_cursor", e), B(t))
                        },
                      }),
                      null != J
                        ? (0, i.jsx)(
                            L,
                            {
                              accountId: C,
                              profileId: M,
                              feedId: T,
                              selection: J,
                              adminView: U,
                              acceptedAt: "upload" === J.kind && J.id === E ? F : null,
                            },
                            `${J.kind}:${J.id}`,
                          )
                        : null,
                    ],
                  })
                : null),
            (k[42] = F),
            (k[43] = E),
            (k[44] = C),
            (k[45] = U),
            (k[46] = Q),
            (k[47] = X),
            (k[48] = ee),
            (k[49] = T),
            (k[50] = et),
            (k[51] = es),
            (k[52] = D),
            (k[53] = M),
            (k[54] = J),
            (k[55] = B),
            (k[56] = w))
          : (w = k[56]),
        k[57] !== v || k[58] !== j || k[59] !== w
          ? ((A = (0, i.jsxs)(p.X.Content, { children: [v, j, w] })),
            (k[57] = v),
            (k[58] = j),
            (k[59] = w),
            (k[60] = A))
          : (A = k[60]),
        k[61] !== _ || k[62] !== A
          ? ((P = (0, i.jsxs)(p.X, { children: [_, A] })), (k[61] = _), (k[62] = A), (k[63] = P))
          : (P = k[63]),
        P
      )
    }
    function z(e) {
      return null == e.state.error && !!e.state.data?.items.some(B) && 3e3
    }
    function B(e) {
      return ["received", "scanning", "processing"].includes(e.status)
    }
    function V(e) {
      return Date.parse(e.uploaded_at)
    }
    function O(e) {
      return [e.queryHash, e.state.dataUpdateCount]
    }
    function L(e) {
      let t,
        s,
        d,
        c,
        f,
        p,
        g,
        b,
        y,
        _,
        v,
        j = (0, n.c)(56),
        { accountId: w, profileId: A, feedId: P, selection: k, acceptedAt: C, adminView: M } = e,
        N = (0, r.jE)(),
        q = "run" === k.kind ? "feed-run" : "feed-upload"
      ;(j[0] !== w || j[1] !== M || j[2] !== P || j[3] !== A || j[4] !== k.id || j[5] !== q
        ? ((t = ["business-profiles", w, A, q, P, k.id, ...(0, m.Ot)(M)]),
          (j[0] = w),
          (j[1] = M),
          (j[2] = P),
          (j[3] = A),
          (j[4] = k.id),
          (j[5] = q),
          (j[6] = t))
        : (t = j[6]),
        j[7] !== C ||
        j[8] !== w ||
        j[9] !== M ||
        j[10] !== P ||
        j[11] !== A ||
        j[12] !== N ||
        j[13] !== k.id ||
        j[14] !== k.kind
          ? ((s = async (e) => {
              let { signal: t, queryKey: s } = e,
                i = N.getQueryData(s),
                n = await ("run" === k.kind
                  ? u.Request.safeGet("/shopping/feeds/{feed_id}/runs/{run_id}", {
                      additionalHeaders: { "ChatGPT-Account-ID": w },
                      parameters: {
                        path: { feed_id: P, run_id: k.id },
                        query: { business_profile_id: A, feed_type: "snapshot", include_upload_observation: !0 },
                      },
                      expectedIdentity: M,
                      expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 429],
                      signal: t,
                    }).then(K)
                  : u.Request.safeGet(
                      "/shopping/business-profiles/{business_profile_id}/feeds/{feed_id}/uploads/{upload_id}",
                      {
                        additionalHeaders: { "ChatGPT-Account-ID": w },
                        parameters: {
                          path: { business_profile_id: A, feed_id: P, upload_id: k.id },
                          query: (0, m.C0)(M),
                        },
                        expectedIdentity: M,
                        expectedErrorStatuses: [401, 403, 404],
                        signal: t,
                      },
                    ))
              if ("upload" === k.kind && null != C && null == i) {
                let e = { queryKey: ["business-profiles", w, A, "feed-uploads", P, null, ...(0, m.Ot)(M)], exact: !0 },
                  t = N.getQueryData(e.queryKey)
                t?.items.some((e) => e.upload_id === k.id) || N.invalidateQueries(e)
              }
              return ($(i?.status ?? (null != C ? "received" : void 0), n.status) && G(N, w, A, P, M), n)
            }),
            (j[7] = C),
            (j[8] = w),
            (j[9] = M),
            (j[10] = P),
            (j[11] = A),
            (j[12] = N),
            (j[13] = k.id),
            (j[14] = k.kind),
            (j[15] = s))
          : (s = j[15]),
        j[16] !== C
          ? ((d = (e) => {
              let t = e.state.error
              return t instanceof h.FetchError && 404 === t.status && null != C && e.state.errorUpdatedAt - C < 6e4
                ? 3e3
                : !!(null == t && ["received", "scanning", "processing"].includes(e.state.data?.status ?? "")) && 3e3
            }),
            (j[16] = C),
            (j[17] = d))
          : (d = j[17]),
        j[18] !== t || j[19] !== s || j[20] !== d
          ? ((c = { queryKey: t, queryFn: s, ...x.I, staleTime: 3e5, gcTime: 9e5, retry: !1, refetchInterval: d }),
            (j[18] = t),
            (j[19] = s),
            (j[20] = d),
            (j[21] = c))
          : (c = j[21]))
      let { data: R, error: I, errorUpdatedAt: E, isFetching: F, refetch: U } = (0, l.I)(c),
        [D, z] = (0, a.useState)(!1),
        B = ("upload" === k.kind && I instanceof h.FetchError && 404 === I.status) || (D && F && null == R)
      if ((B !== D && z(B), B)) {
        let e,
          t,
          s,
          n,
          r = null != C && E - C < 6e4
        return (
          j[22] !== r
            ? ((e = (0, i.jsx)("p", {
                children: r
                  ? (0, i.jsx)(o.A, {
                      id: "businessProfiles.feeds.waitingForHistory",
                      defaultMessage: "Run accepted; waiting for processing status\u2026",
                    })
                  : (0, i.jsx)(o.A, {
                      id: "businessProfiles.feeds.historyUnavailable",
                      defaultMessage: "Processing status is not available yet; check again",
                    }),
              })),
              (j[22] = r),
              (j[23] = e))
            : (e = j[23]),
          j[24] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, i.jsx)(o.A, { id: "businessProfiles.feeds.checkStatus", defaultMessage: "Check status" })),
              (j[24] = t))
            : (t = j[24]),
          j[25] !== F || j[26] !== U
            ? ((s = (0, i.jsx)(S.gh, { color: "secondary", disabled: F, refresh: U, children: t })),
              (j[25] = F),
              (j[26] = U),
              (j[27] = s))
            : (s = j[27]),
          j[28] !== e || j[29] !== s
            ? ((n = (0, i.jsxs)("div", { className: "flex flex-col gap-2", role: "status", children: [e, s] })),
              (j[28] = e),
              (j[29] = s),
              (j[30] = n))
            : (n = j[30]),
          n
        )
      }
      if (null != I) {
        let e, t
        return (
          j[31] !== U ? ((e = () => void U()), (j[31] = U), (j[32] = e)) : (e = j[32]),
          j[33] !== I || j[34] !== e
            ? ((t = (0, i.jsx)(S.AB, { error: I, onRetry: e })), (j[33] = I), (j[34] = e), (j[35] = t))
            : (t = j[35]),
          t
        )
      }
      if (null == R) {
        let e
        return (
          j[36] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)("p", {
                role: "status",
                children: (0, i.jsx)(o.A, {
                  id: "businessProfiles.feeds.loadingRun",
                  defaultMessage: "Loading run\u2026",
                }),
              })),
              (j[36] = e))
            : (e = j[36]),
          e
        )
      }
      return (
        j[37] !== k.id
          ? ((f = (0, i.jsx)("p", { className: "text-sm select-text", children: k.id })), (j[37] = k.id), (j[38] = f))
          : (f = j[38]),
        j[39] !== R.status ? ((p = (0, i.jsx)(H, { status: R.status })), (j[39] = R.status), (j[40] = p)) : (p = j[40]),
        j[41] !== R.rows_accepted || j[42] !== R.rows_rejected
          ? ((g =
              null != R.rows_accepted && null != R.rows_rejected
                ? (0, i.jsx)("p", {
                    children: (0, i.jsx)(o.A, {
                      id: "businessProfiles.feeds.rowCounts",
                      defaultMessage: "{accepted, number} accepted \xb7 {rejected, number} rejected",
                      values: { accepted: R.rows_accepted, rejected: R.rows_rejected },
                    }),
                  })
                : null),
            (j[41] = R.rows_accepted),
            (j[42] = R.rows_rejected),
            (j[43] = g))
          : (g = j[43]),
        j[44] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, i.jsx)("p", {
              className: "text-sm text-secondary",
              children: (0, i.jsx)(o.A, {
                id: "businessProfiles.feeds.indexingStatus",
                defaultMessage: "Products may take time to appear after processing",
              }),
            })),
            (j[44] = b))
          : (b = j[44]),
        j[45] !== R.diagnostics.length || j[46] !== R.status
          ? ((y =
              0 === R.diagnostics.length && ["failed", "completed_with_errors"].includes(R.status)
                ? (0, i.jsx)(T.E, { code: "unclassified" })
                : null),
            (j[45] = R.diagnostics.length),
            (j[46] = R.status),
            (j[47] = y))
          : (y = j[47]),
        j[48] !== R
          ? ((_ = R.diagnostics.map((e, t) =>
              (0, i.jsx)(
                Q,
                { diagnostic: e, hosted: "upload_id" in R && R.upload_id.startsWith("hosted_") },
                `${e.code}:${e.field}:${t}`,
              ),
            )),
            (j[48] = R),
            (j[49] = _))
          : (_ = j[49]),
        j[50] !== y || j[51] !== _ || j[52] !== f || j[53] !== p || j[54] !== g
          ? ((v = (0, i.jsxs)("div", {
              className: "flex flex-col gap-2",
              role: "status",
              children: [f, p, g, b, y, _],
            })),
            (j[50] = y),
            (j[51] = _),
            (j[52] = f),
            (j[53] = p),
            (j[54] = g),
            (j[55] = v))
          : (v = j[55]),
        v
      )
    }
    function K(e) {
      return {
        status: e.status,
        rows_accepted: e.rows_accepted,
        rows_rejected: e.rows_rejected,
        diagnostics: e.diagnostics ?? [],
      }
    }
    function $(e, t) {
      return (
        ["received", "scanning", "processing"].includes(e ?? "") &&
        ["completed", "completed_with_errors", "failed", "skipped"].includes(t)
      )
    }
    function G(e, t, s, i, n, r) {
      let l = (0, m.Ot)(n)
      e.invalidateQueries(
        {
          queryKey: ["business-profiles", t, s],
          predicate: (t) => {
            let s = t.queryKey,
              n = "feed-connection-summaries" === s[3] && Array.isArray(s[4]) && s[4].includes(i),
              a = s[3] === i && "uploads" === s[4],
              o = n ? 5 : 6
            if (!(n || a) || s.length !== o + l.length || !l.every((e, t) => s[o + t] === e)) return !1
            if (null != r) {
              if (t.state.isInvalidated) return !1
              let n = Date.parse(r.upload.uploaded_at)
              if (a) {
                let t = e.getQueryData(s)
                if (null == t || ("number" == typeof s[5] && n < Date.now() - 24 * s[5] * 60 * 60 * 1e3)) return !1
                let i = N()(t.uploads, (e) => Date.parse(e.uploaded_at))
                return (
                  null == i ||
                  n > Date.parse(i.uploaded_at) ||
                  (n === Date.parse(i.uploaded_at) && r.upload.status !== i.status)
                )
              }
              let l = e.getQueryData(s)
              if (
                !l?.some((e) => {
                  if (e.feed_id !== i) return !1
                  let s = e.connection_status
                  if (s?.latest_upload_at != null) {
                    let e = Date.parse(s.latest_upload_at)
                    return n > e || (n === e && r.upload.status !== s.latest_upload_status)
                  }
                  return (
                    r.summaryVersions.get(t.queryHash) === t.state.dataUpdateCount &&
                    $(e.connection_status?.latest_upload_status ?? void 0, "completed")
                  )
                })
              )
                return !1
            }
            return !0
          },
        },
        { cancelRefetch: !1 },
      )
    }
    function H(e) {
      let t,
        s,
        r,
        l,
        a = (0, n.c)(10),
        { status: d } = e,
        u = "scanning" !== d
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, i.jsx)(o.A, {
            id: "businessProfiles.feeds.sftp.processingDelay",
            defaultMessage: "Your upload may take about 5 minutes to start processing.",
          })),
          (a[0] = t))
        : (t = a[0])
      let c = "scanning" === d ? 0 : void 0,
        f = "scanning" === d ? "cursor-help underline decoration-dotted underline-offset-4" : void 0
      return (
        a[1] !== d
          ? ((s = (0, i.jsx)(o.A, {
              id: "businessProfiles.feeds.processingState",
              defaultMessage:
                "{status, select, uploading {Waiting for upload} received {Upload accepted} scanning {Waiting for processing} processing {Validating and publishing} completed {Feed processed} completed_with_errors {Processed with rejected rows or warnings} failed {Processing failed} skipped {Processing skipped} other {Status unavailable}}",
              values: { status: d },
            })),
            (a[1] = d),
            (a[2] = s))
          : (s = a[2]),
        a[3] !== c || a[4] !== f || a[5] !== s
          ? ((r = (0, i.jsx)("span", { tabIndex: c, className: f, children: s })),
            (a[3] = c),
            (a[4] = f),
            (a[5] = s),
            (a[6] = r))
          : (r = a[6]),
        a[7] !== u || a[8] !== r
          ? ((l = (0, i.jsx)(C.m, { disabled: u, content: t, children: r })), (a[7] = u), (a[8] = r), (a[9] = l))
          : (l = a[9]),
        l
      )
    }
    function Q(e) {
      let t,
        s,
        r,
        l,
        a = (0, n.c)(13),
        { diagnostic: d, hosted: u } = e
      return (
        a[0] !== d.code || a[1] !== d.format_reason || a[2] !== u
          ? ((t =
              "unsupported_file_type" === d.code
                ? (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(F.Z, { reason: d.format_reason, hosted: u }),
                      (0, i.jsx)("p", {
                        children: (0, i.jsx)(F.Z, { action: !0, reason: d.format_reason, hosted: u }),
                      }),
                      null == d.format_reason ? (0, i.jsx)(U.zQ, {}) : null,
                    ],
                  })
                : (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(o.A, {
                        id: "businessProfiles.feeds.diagnosticWithFields",
                        defaultMessage:
                          "{code, select, missing_required_column {A required field is missing} invalid_value {A row contains an invalid value} invalid_gzip {The file could not be decompressed as gzip} unsupported_file_type {The file format is unsupported or could not be read} invalid_sftp_directory_layout {Check the SFTP upload directory} other {Processing reported an issue}}",
                        values: { code: d.code },
                      }),
                      (0, i.jsx)(T.E, { code: d.code }),
                    ],
                  })),
            (a[0] = d.code),
            (a[1] = d.format_reason),
            (a[2] = u),
            (a[3] = t))
          : (t = a[3]),
        a[4] !== d.code || a[5] !== d.field
          ? ((s =
              null != d.field
                ? (0, i.jsxs)("p", {
                    children: [
                      (0, i.jsx)(o.A, {
                        id: "businessProfiles.feeds.diagnosticField",
                        defaultMessage: "Field: {field}",
                        values: { field: d.field },
                      }),
                      "invalid_value" === d.code || "missing_required_column" === d.code
                        ? (0, i.jsx)("span", { className: "block", children: (0, i.jsx)(E.g, { field: d.field }) })
                        : null,
                    ],
                  })
                : null),
            (a[4] = d.code),
            (a[5] = d.field),
            (a[6] = s))
          : (s = a[6]),
        a[7] !== d.rows_affected
          ? ((r =
              null != d.rows_affected
                ? (0, i.jsx)("p", {
                    children: (0, i.jsx)(o.A, {
                      id: "businessProfiles.feeds.diagnosticCount",
                      defaultMessage: "Affected rows: {count, number}",
                      values: { count: d.rows_affected },
                    }),
                  })
                : null),
            (a[7] = d.rows_affected),
            (a[8] = r))
          : (r = a[8]),
        a[9] !== t || a[10] !== s || a[11] !== r
          ? ((l = (0, i.jsxs)("div", { className: "text-sm select-text", children: [t, s, r] })),
            (a[9] = t),
            (a[10] = s),
            (a[11] = r),
            (a[12] = l))
          : (l = a[12]),
        l
      )
    }
    var Y = s("VVBW"),
      W = s("sNdy")
    let J = (0, f._)(async () => (await s.e(713193).then(s.bind(s, "V4pO"))).FeedUploadFlow),
      Z = (0, f._)(async () => (await s.e(138524).then(s.bind(s, "KfbV"))).FeedUpdate, {
        fallback: ({ onClose: e }) => (0, i.jsx)(Y.a, { onExit: e }),
      })
    function X(e) {
      let t,
        s,
        f,
        y,
        _,
        v,
        j,
        w,
        A,
        k,
        C,
        M,
        N,
        q,
        R,
        I,
        T = (0, n.c)(146),
        { accountId: E, profileId: F, feedId: U, manager: z, onExit: B, adminView: V } = e,
        [O, L] = (0, d.ok)()
      T[0] !== E || T[1] !== V || T[2] !== z || T[3] !== B || T[4] !== O || T[5] !== L
        ? ((t = function (e) {
            return null != V
              ? (0, i.jsx)(i.Fragment, {})
              : (0, i.jsx)(g.K, {
                  accountId: E,
                  manager: z,
                  onExit:
                    B ??
                    (() => {
                      let e = new URLSearchParams(O)
                      ;(e.delete("upload"), e.delete("sftp"), e.delete("hosted"), L(e))
                    }),
                  children: e,
                })
          }),
          (T[0] = E),
          (T[1] = V),
          (T[2] = z),
          (T[3] = B),
          (T[4] = O),
          (T[5] = L),
          (T[6] = t))
        : (t = T[6])
      let K = t,
        [$, G] = (0, a.useState)(null)
      T[7] !== O ? ((s = O.get("upload")), (T[7] = O), (T[8] = s)) : (s = T[8])
      let H = s,
        Q = null == V && ("1" === H || "file" === H),
        X = null == V && "1" === O.get("sftp")
      T[9] !== O || T[10] !== L
        ? ((f = function (e) {
            let t = new URLSearchParams(O)
            ;(t.delete("sftp"), t.delete("hosted"), e ? t.set("upload", "1") : t.delete("upload"), L(t))
          }),
          (T[9] = O),
          (T[10] = L),
          (T[11] = f))
        : (f = T[11])
      let ee = f,
        et = (0, r.jE)()
      T[12] !== E || T[13] !== V || T[14] !== U || T[15] !== F
        ? ((y = {
            queryKey: ["business-profiles", E, F, "feed", U, ...(0, m.Ot)(V)],
            queryFn: (e) => {
              let { signal: t } = e
              return u.Request.safeGet("/shopping/business-profiles/{business_profile_id}/feeds/{feed_id}", {
                additionalHeaders: { "ChatGPT-Account-ID": E },
                parameters: { path: { business_profile_id: F, feed_id: U }, query: (0, m.C0)(V) },
                expectedIdentity: V,
                expectedErrorStatuses: [401, 403, 404],
                signal: t,
              })
            },
            ...x.I,
            staleTime: 3e5,
            gcTime: 9e5,
            retry: !1,
          }),
          (T[12] = E),
          (T[13] = V),
          (T[14] = U),
          (T[15] = F),
          (T[16] = y))
        : (y = T[16])
      let { data: es, error: ei, refetch: en } = (0, l.I)(y),
        er = ei instanceof h.FetchError && [401, 403, 404].includes(ei.status)
      T[17] !== O || T[18] !== L
        ? ((_ = function (e) {
            let t = new URLSearchParams(O)
            ;(t.delete("hosted"), t.delete("upload"), e ? t.set("sftp", "1") : t.delete("sftp"), L(t))
          }),
          (T[17] = O),
          (T[18] = L),
          (T[19] = _))
        : (_ = T[19])
      let el = _
      T[20] !== O || T[21] !== Q
        ? ((v = O.has("update") || (Q && "1" !== O.get("add"))), (T[20] = O), (T[21] = Q), (T[22] = v))
        : (v = T[22])
      let ea = v
      T[23] !== B || T[24] !== O || T[25] !== L
        ? ((j =
            B ??
            (() => {
              let e = new URLSearchParams(O)
              ;(e.delete("update"), e.delete("upload"), e.delete("submitted_run"), L(e))
            })),
          (T[23] = B),
          (T[24] = O),
          (T[25] = L),
          (T[26] = j))
        : (j = T[26])
      let eo = j
      if (null == V && ea && !ei && null == es) {
        let e
        return (T[27] !== eo ? ((e = (0, i.jsx)(Y.a, { onExit: eo })), (T[27] = eo), (T[28] = e)) : (e = T[28]), e)
      }
      if (null == V && ea && !ei && null != es && !es.archived) {
        let e, t, s
        return (
          T[29] !== E || T[30] !== es.feed_id || T[31] !== F
            ? ((e = JSON.stringify([E, F, es.feed_id])), (T[29] = E), (T[30] = es.feed_id), (T[31] = F), (T[32] = e))
            : (e = T[32]),
          T[33] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (e) => G({ id: e, at: Date.now() })), (T[33] = t))
            : (t = T[33]),
          T[34] !== E || T[35] !== eo || T[36] !== es || T[37] !== z || T[38] !== e
            ? ((s = (0, i.jsx)(Z, { accountId: E, manager: z, feed: es, onAccepted: t, onClose: eo }, e)),
              (T[34] = E),
              (T[35] = eo),
              (T[36] = es),
              (T[37] = z),
              (T[38] = e),
              (T[39] = s))
            : (s = T[39]),
          s
        )
      }
      if (null == V && X && !er && null != es && !es.archived) {
        let e, t, s, n, r
        return (
          T[40] !== ei || T[41] !== en
            ? ((e = null != ei ? (0, i.jsx)(S.AB, { error: ei, onRetry: () => void en() }) : null),
              (T[40] = ei),
              (T[41] = en),
              (T[42] = e))
            : (e = T[42]),
          T[43] !== ee ? ((t = () => ee(!0)), (T[43] = ee), (T[44] = t)) : (t = T[44]),
          T[45] !== B || T[46] !== el
            ? ((s = B ?? (() => el(!1))), (T[45] = B), (T[46] = el), (T[47] = s))
            : (s = T[47]),
          T[48] !== E || T[49] !== es.feed_id || T[50] !== z || T[51] !== s || T[52] !== t
            ? ((n = (0, i.jsx)(W.W, { accountId: E, manager: z, feedId: es.feed_id, onBack: t, onClose: s })),
              (T[48] = E),
              (T[49] = es.feed_id),
              (T[50] = z),
              (T[51] = s),
              (T[52] = t),
              (T[53] = n))
            : (n = T[53]),
          T[54] !== n || T[55] !== e
            ? ((r = (0, i.jsxs)("div", { className: "flex h-full min-h-0 flex-col", children: [e, n] })),
              (T[54] = n),
              (T[55] = e),
              (T[56] = r))
            : (r = T[56]),
          r
        )
      }
      if (null == V && "1" === O.get("hosted") && null == ei && null != es && !es.archived) {
        let e,
          t,
          s,
          n,
          r,
          l = `${E}:${z.profile.business_profile_id}:${es.feed_id}`
        return (
          T[57] !== ee ? ((e = () => ee(!0)), (T[57] = ee), (T[58] = e)) : (e = T[58]),
          T[59] !== B || T[60] !== O || T[61] !== L
            ? ((t = () => {
                if (null != B) return void B()
                let e = new URLSearchParams(O)
                ;(e.delete("hosted"), L(e))
              }),
              (T[59] = B),
              (T[60] = O),
              (T[61] = L),
              (T[62] = t))
            : (t = T[62]),
          T[63] !== E || T[64] !== B || T[65] !== O || T[66] !== F || T[67] !== et || T[68] !== L
            ? ((s = (e) => {
                if (null != B) return void B()
                G({ id: e, at: Date.now() })
                let t = new URLSearchParams(O)
                ;(t.delete("hosted"),
                  t.delete("upload"),
                  t.delete("run"),
                  t.delete("upload_cursor"),
                  t.delete("submitted_run"),
                  t.set("upload_id", e),
                  L(t),
                  et.invalidateQueries({ queryKey: ["business-profiles", E, F] }))
              }),
              (T[63] = E),
              (T[64] = B),
              (T[65] = O),
              (T[66] = F),
              (T[67] = et),
              (T[68] = L),
              (T[69] = s))
            : (s = T[69]),
          T[70] !== E || T[71] !== es.feed_id || T[72] !== z || T[73] !== t || T[74] !== s || T[75] !== l || T[76] !== e
            ? ((n = (0, i.jsx)(
                b.i,
                { accountId: E, manager: z, feedId: es.feed_id, onBack: e, onClose: t, onSubmitted: s },
                l,
              )),
              (T[70] = E),
              (T[71] = es.feed_id),
              (T[72] = z),
              (T[73] = t),
              (T[74] = s),
              (T[75] = l),
              (T[76] = e),
              (T[77] = n))
            : (n = T[77]),
          T[78] !== K || T[79] !== n ? ((r = K(n)), (T[78] = K), (T[79] = n), (T[80] = r)) : (r = T[80]),
          r
        )
      }
      if (null == V && Q && null == ei && null != es && !es.archived) {
        let e,
          t,
          s,
          n,
          r,
          l,
          a,
          o = "file" === H,
          d = `${E}:${z.profile.business_profile_id}:${es.feed_id}`
        return (
          T[81] !== es.feed_id ? ((e = async () => es.feed_id), (T[81] = es.feed_id), (T[82] = e)) : (e = T[82]),
          T[83] !== B || T[84] !== ee
            ? ((t = B ?? (() => ee(!1))), (T[83] = B), (T[84] = ee), (T[85] = t))
            : (t = T[85]),
          T[86] !== el ? ((s = () => el(!0)), (T[86] = el), (T[87] = s)) : (s = T[87]),
          T[88] !== O || T[89] !== L
            ? ((n = () => {
                let e = new URLSearchParams(O)
                ;(e.delete("upload"), e.delete("sftp"), e.set("hosted", "1"), L(e))
              }),
              (T[88] = O),
              (T[89] = L),
              (T[90] = n))
            : (n = T[90]),
          T[91] !== B || T[92] !== O || T[93] !== L
            ? ((r = (e) => {
                if (null != B) return void B()
                let t = new URLSearchParams(O)
                ;(t.delete("upload"), t.delete("upload_id"), t.delete("submitted_run"), t.set("run", e), L(t))
              }),
              (T[91] = B),
              (T[92] = O),
              (T[93] = L),
              (T[94] = r))
            : (r = T[94]),
          T[95] !== E ||
          T[96] !== z ||
          T[97] !== e ||
          T[98] !== t ||
          T[99] !== s ||
          T[100] !== n ||
          T[101] !== r ||
          T[102] !== o ||
          T[103] !== d
            ? ((l = (0, i.jsx)(
                J,
                {
                  startWithFile: o,
                  accountId: E,
                  manager: z,
                  getFeedId: e,
                  onClose: t,
                  onSftp: s,
                  onUseHosted: n,
                  onSubmitted: r,
                },
                d,
              )),
              (T[95] = E),
              (T[96] = z),
              (T[97] = e),
              (T[98] = t),
              (T[99] = s),
              (T[100] = n),
              (T[101] = r),
              (T[102] = o),
              (T[103] = d),
              (T[104] = l))
            : (l = T[104]),
          T[105] !== K || T[106] !== l ? ((a = K(l)), (T[105] = K), (T[106] = l), (T[107] = a)) : (a = T[107]),
          a
        )
      }
      ;(T[108] !== V || T[109] !== B || T[110] !== L
        ? ((w = B ?? (() => L(null == V ? {} : { view: "admin" }))),
          (T[108] = V),
          (T[109] = B),
          (T[110] = L),
          (T[111] = w))
        : (w = T[111]),
        T[112] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = (0, i.jsx)(o.A, { id: "businessProfiles.feeds.back", defaultMessage: "All feeds" })), (T[112] = A))
          : (A = T[112]),
        T[113] !== w
          ? ((k = (0, i.jsx)(c.$, { color: "ghost", onClick: w, children: A })), (T[113] = w), (T[114] = k))
          : (k = T[114]),
        T[115] !== ei || T[116] !== en
          ? ((C = null != ei ? (0, i.jsx)(S.AB, { error: ei, onRetry: () => void en() }) : null),
            (T[115] = ei),
            (T[116] = en),
            (T[117] = C))
          : (C = T[117]),
        T[118] !== ei || T[119] !== es
          ? ((M =
              null == ei && null == es
                ? (0, i.jsx)("p", {
                    role: "status",
                    children: (0, i.jsx)(o.A, {
                      id: "businessProfiles.feeds.loadingFeed",
                      defaultMessage: "Loading feed\u2026",
                    }),
                  })
                : null),
            (T[118] = ei),
            (T[119] = es),
            (T[120] = M))
          : (M = T[120]),
        T[121] !== ei || T[122] !== es?.archived
          ? ((N =
              null == ei && es?.archived
                ? (0, i.jsx)("p", {
                    role: "status",
                    children: (0, i.jsx)(o.A, {
                      id: "businessProfiles.feeds.archivedUnavailable",
                      defaultMessage: "This feed is no longer available",
                    }),
                  })
                : null),
            (T[121] = ei),
            (T[122] = es?.archived),
            (T[123] = N))
          : (N = T[123]),
        T[124] !== $?.at ||
        T[125] !== $?.id ||
        T[126] !== E ||
        T[127] !== V ||
        T[128] !== ei ||
        T[129] !== es ||
        T[130] !== O ||
        T[131] !== F ||
        T[132] !== L ||
        T[133] !== el
          ? ((q =
              null != ei || null == es || es.archived
                ? null
                : (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(p.X.Header, {
                        title: (0, i.jsx)("span", { className: "select-text", children: es.feed_id }),
                        actions:
                          null != V
                            ? void 0
                            : (0, i.jsx)(c.$, {
                                color: "primary",
                                onClick: () => {
                                  let e = new URLSearchParams(O)
                                  ;(e.set("update", "1"), L(e))
                                },
                                children: (0, i.jsx)(o.A, {
                                  id: "businessProfiles.feeds.updateProducts",
                                  defaultMessage: "Update products",
                                }),
                              }),
                      }),
                      null == V
                        ? (0, i.jsx)(
                            P,
                            {
                              accountId: E,
                              profileId: F,
                              feedId: es.feed_id,
                              onAccepted: (e) => G({ id: e, at: Date.now() }),
                            },
                            `${E}:${F}:${es.feed_id}`,
                          )
                        : null,
                      (0, i.jsx)(D, {
                        accountId: E,
                        profileId: F,
                        feedId: es.feed_id,
                        acceptedUploadId: $?.id ?? null,
                        acceptedAt: $?.at ?? null,
                        adminView: V,
                      }),
                      null == V
                        ? (0, i.jsx)(c.$, {
                            color: "secondary",
                            onClick: () => el(!0),
                            children: (0, i.jsx)(o.A, {
                              id: "businessProfiles.feeds.sftp.connectTitle",
                              defaultMessage: "Connect with SFTP",
                            }),
                          })
                        : null,
                    ],
                  })),
            (T[124] = $?.at),
            (T[125] = $?.id),
            (T[126] = E),
            (T[127] = V),
            (T[128] = ei),
            (T[129] = es),
            (T[130] = O),
            (T[131] = F),
            (T[132] = L),
            (T[133] = el),
            (T[134] = q))
          : (q = T[134]),
        T[135] !== k || T[136] !== C || T[137] !== M || T[138] !== N || T[139] !== q
          ? ((R = (0, i.jsxs)("div", { className: "flex min-w-0 flex-col gap-4", children: [k, C, M, N, q] })),
            (T[135] = k),
            (T[136] = C),
            (T[137] = M),
            (T[138] = N),
            (T[139] = q),
            (T[140] = R))
          : (R = T[140]))
      let ed = R
      return (
        T[141] !== V || T[142] !== eo || T[143] !== ed || T[144] !== ea
          ? ((I =
              null == V && ea
                ? (0, i.jsx)(Y.I, {
                    onExit: eo,
                    children: (0, i.jsx)("div", { className: "m-auto w-full max-w-xl px-8 py-20", children: ed }),
                  })
                : ed),
            (T[141] = V),
            (T[142] = eo),
            (T[143] = ed),
            (T[144] = ea),
            (T[145] = I))
          : (I = T[145]),
        I
      )
    }
  },
  gRkg(e, t, s) {
    var i = s("ABep"),
      n = s("QosV"),
      r = s("JHuz"),
      l = s("oyxz"),
      a = s("MM0V"),
      o = s("HOLv"),
      d = s("NoEg"),
      u = s("G6H4")
    function c(e) {
      let { field: t, expected: s } = e
      return (0, i.jsx)(
        "li",
        {
          children: (0, i.jsx)(l.A, {
            id: "businessProfiles.feeds.fileError.fieldType",
            defaultMessage:
              "{expected, select, text {Field {field}: the value must be text. Replace it with a JSON string in double quotes} other {Field {field}: the value must be text or a number. Replace it with a JSON string or number}}",
            values: { field: t, expected: s },
          }),
        },
        t,
      )
    }
    function f(e) {
      let t,
        s,
        r = (0, n.c)(3),
        { sampleNumber: a } = e
      return (
        r[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)(l.A, {
              id: "businessProfiles.feeds.fileError.invalidPriceTitle",
              defaultMessage: "Invalid price",
            })),
            (r[0] = t))
          : (t = r[0]),
        r[1] !== a
          ? ((s = (0, i.jsx)(p, {
              title: t,
              content: (0, i.jsx)(l.A, {
                id: "businessProfiles.feeds.fileError.invalidPriceDescription",
                defaultMessage:
                  "The price in sample {number} is invalid. Use an amount and currency, for example 12.99 USD, then upload the file again.",
                values: { number: a },
              }),
            })),
            (r[1] = a),
            (r[2] = s))
          : (s = r[2]),
        s
      )
    }
    function p(e) {
      let t,
        s,
        l,
        d,
        u = (0, n.c)(8),
        { title: c, content: f } = e
      return (
        u[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)(o.I, { asset: r.b, className: "text-warning" })), (u[0] = t))
          : (t = u[0]),
        u[1] !== c
          ? ((s = (0, i.jsx)("span", { className: "text-warning", children: c })), (u[1] = c), (u[2] = s))
          : (s = u[2]),
        u[3] !== f
          ? ((l = (0, i.jsx)("div", { className: "text-warning", children: f })), (u[3] = f), (u[4] = l))
          : (l = u[4]),
        u[5] !== s || u[6] !== l
          ? ((d = (0, i.jsx)(a.l, {
              type: "warning",
              variant: "settings",
              layout: "verticalIcon",
              icon: t,
              role: "alert",
              title: s,
              content: l,
            })),
            (u[5] = s),
            (u[6] = l),
            (u[7] = d))
          : (d = u[7]),
        d
      )
    }
    s.d(
      t,
      {},
      {
        bU: f,
        dS: function (e) {
          let t,
            s,
            r,
            a = (0, n.c)(6),
            { samples: o } = e,
            u = 1 === o.length ? o[0] : void 0,
            c = u?.details
          if (
            null != u &&
            c?.length === 1 &&
            c[0]?.field === "price" &&
            ("invalid_price" === c[0].issue || "expected_price_with_currency" === c[0].issue)
          ) {
            let e,
              t = u.row_index + 1
            return (a[0] !== t ? ((e = (0, i.jsx)(f, { sampleNumber: t })), (a[0] = t), (a[1] = e)) : (e = a[1]), e)
          }
          return (
            a[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, i.jsx)(l.A, {
                  id: "businessProfiles.feeds.fileError.invalidFieldsTitle",
                  defaultMessage: "Invalid product fields",
                })),
                (a[2] = t))
              : (t = a[2]),
            a[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((s = (0, i.jsx)(l.A, {
                  id: "businessProfiles.feeds.fileError.invalidFieldsDescription",
                  defaultMessage: "Fix the errors in the sampled products, then upload the file again.",
                })),
                (a[3] = s))
              : (s = a[3]),
            a[4] !== o
              ? ((r = (0, i.jsx)(p, {
                  title: t,
                  content: (0, i.jsxs)("div", {
                    className: "flex flex-col gap-2",
                    children: [s, (0, i.jsx)(d.R, { samples: o })],
                  }),
                })),
                (a[4] = o),
                (a[5] = r))
              : (r = a[5]),
            r
          )
        },
        mx: function (e) {
          let t,
            s,
            d,
            f,
            h,
            m,
            g,
            x = (0, n.c)(21),
            { error: b, manualUpload: y } = e,
            _ = void 0 === y || y,
            { code: v, context: j } = b
          if ("gzipped_parquet" === v) {
            let e, t
            return (
              x[0] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, i.jsx)(o.I, { asset: r.b, className: "text-danger" })), (x[0] = e))
                : (e = x[0]),
              x[1] === Symbol.for("react.memo_cache_sentinel")
                ? ((t = (0, i.jsx)(a.l, {
                    type: "error",
                    variant: "settings",
                    layout: "verticalIcon",
                    icon: e,
                    role: "alert",
                    content: (0, i.jsx)(u.Hf, {}),
                  })),
                  (x[1] = t))
                : (t = x[1]),
              t
            )
          }
          if ("missing_title" === v) {
            let e, t
            return (
              x[2] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, i.jsx)(l.A, {
                    id: "businessProfiles.feeds.fileError.missingColumnsTitle",
                    defaultMessage: "Missing required columns",
                  })),
                  (x[2] = e))
                : (e = x[2]),
              x[3] === Symbol.for("react.memo_cache_sentinel")
                ? ((t = (0, i.jsx)(p, {
                    title: e,
                    content: (0, i.jsx)(l.A, {
                      id: "businessProfiles.feeds.fileError.missingColumnsDescription",
                      defaultMessage:
                        "Your file is missing these columns: {columnNames}. Add them, then upload the file again.",
                      values: { columnNames: "title" },
                    }),
                  })),
                  (x[3] = t))
                : (t = x[3]),
              t
            )
          }
          x[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = [
                "unsupported_type",
                "invalid_gzip",
                "json_format",
                "invalid_json",
                "invalid_json_record",
                "invalid_delimited",
              ]),
              (x[4] = t))
            : (t = x[4])
          let w = t.includes(v)
          return (
            x[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((s = (0, i.jsx)(o.I, { asset: r.b, className: "text-danger" })), (x[5] = s))
              : (s = x[5]),
            x[6] !== v
              ? ((d = (0, i.jsx)("p", {
                  children: (0, i.jsx)(l.A, {
                    id: "businessProfiles.feeds.fileError.cause",
                    defaultMessage:
                      "{code, select, empty {This file is empty} too_large {This file exceeds 20 MiB, either as uploaded or after decompression} unsupported_type {This file type is not supported} invalid_gzip {This file could not be decompressed as gzip} json_format {This JSON file is not in the required gzip-compressed JSONL format} invalid_json {A JSONL line is not valid JSON} invalid_json_record {A JSONL product has an invalid structure or field type} invalid_delimited {The file has invalid CSV or TSV quoting} missing_title {No title or name column was found in the header row} no_products {This file has no product rows} other {This file could not be read}}",
                    values: { code: v },
                  }),
                })),
                (x[6] = v),
                (x[7] = d))
              : (d = x[7]),
            x[8] !== j
              ? ((f =
                  j?.line != null
                    ? (0, i.jsx)("p", {
                        children: (0, i.jsx)(l.A, {
                          id: "businessProfiles.feeds.fileError.line",
                          defaultMessage: "Line: {line, number}",
                          values: { line: j.line },
                        }),
                      })
                    : null),
                (x[8] = j),
                (x[9] = f))
              : (f = x[9]),
            x[10] !== v || x[11] !== j
              ? ((h =
                  "unsupported_type" !== v && "json_format" !== v
                    ? (0, i.jsx)("ul", {
                        className: "flex list-disc flex-col gap-1 ps-5",
                        children:
                          "invalid_json_record" === v && j?.invalidFields != null && j.invalidFields.length > 0
                            ? j.invalidFields.map(c)
                            : (0, i.jsx)("li", {
                                children: (0, i.jsx)(l.A, {
                                  id: "businessProfiles.feeds.fileError.action",
                                  defaultMessage:
                                    "{code, select, empty {Export a file containing at least one product, then select it again} too_large {Reduce the file to 20 MiB or less before and after decompression, or use Hosted URL or SFTP} invalid_gzip {Compress the original file with gzip and confirm that it decompresses before selecting it again} invalid_json {Write one complete JSON object per line. Use double quotes for keys and text, escape quotes inside text, and remove trailing commas} invalid_json_record {Replace the invalid record with a JSON object containing product fields, then select the corrected file} invalid_delimited {Enclose cells containing delimiters, quotes or line breaks in double quotes. Double any quotes inside a cell and close every quoted cell} missing_title {Add a title column with a name for each product. Use commas for CSV and tabs for TSV or TXT so the header is read correctly} no_products {Add at least one product row after the CSV or TSV header, or one product object per JSONL line, then select the file again} other {Download or export a fresh copy of the file, confirm it opens locally, then select it again}}",
                                  values: { code: v },
                                }),
                              }),
                      })
                    : null),
                (x[10] = v),
                (x[11] = j),
                (x[12] = h))
              : (h = x[12]),
            x[13] !== _ || x[14] !== w
              ? ((m = w ? (0, i.jsx)(u.zQ, { manualUpload: _, inErrorBanner: !0 }) : null),
                (x[13] = _),
                (x[14] = w),
                (x[15] = m))
              : (m = x[15]),
            x[16] !== d || x[17] !== f || x[18] !== h || x[19] !== m
              ? ((g = (0, i.jsx)(a.l, {
                  type: "error",
                  variant: "settings",
                  layout: "verticalIcon",
                  icon: s,
                  role: "alert",
                  content: (0, i.jsxs)("div", { className: "flex flex-col gap-2", children: [d, f, h, m] }),
                })),
                (x[16] = d),
                (x[17] = f),
                (x[18] = h),
                (x[19] = m),
                (x[20] = g))
              : (g = x[20]),
            g
          )
        },
      },
    )
  },
  ahBJ(e, t, s) {
    var i = s("ASxG")
    class n extends Error {
      code
      context
      constructor(e, t) {
        ;(super(e), (this.code = e), (this.context = t))
      }
    }
    let r = i.Ikc({
      id: i.KCZ([i.YjP(), i.aig()]).nullish(),
      title: i.YjP().nullish(),
      name: i.YjP().nullish(),
      price: i.KCZ([i.YjP(), i.aig()]).nullish(),
      image_link: i.YjP().nullish(),
      product_review_rating: i.KCZ([i.YjP(), i.aig()]).nullish(),
    })
    function l(e) {
      return /(?:^|\.)parquet\.(?:gz|gzip)$/i.test(e)
    }
    function a(e) {
      let t,
        s = e.image_link
      if (s)
        try {
          let e = new URL(s)
          !["https:", "http:"].includes(e.protocol) || e.username || e.password || (t = e.href)
        } catch {}
      return {
        name: e.title || e.name || e.id || "",
        price: e.price ?? "",
        image: t,
        rating: e.product_review_rating ?? "",
      }
    }
    s.d(
      t,
      {},
      {
        CH: l,
        Cf: async function (e, t) {
          if (0 === e.size) throw new n("empty")
          if (e.size > 0x1400000) throw new n("too_large")
          if (l(e.name)) throw new n("gzipped_parquet")
          if (!/\.(csv|txt|tsv|parquet|(csv|tsv|jsonl)\.gz)$/i.test(e.name))
            throw new n(/\.(json|jsonl|ndjson)$/i.test(e.name) ? "json_format" : "unsupported_type")
          if ((t.throwIfAborted(), /\.parquet$/i.test(e.name)))
            return { file: e, sourceName: e.name, products: null, previewLimited: !1 }
          let s = (
              /\.gz$/i.test(e.name) ? e.stream().pipeThrough(new DecompressionStream("gzip")) : e.stream()
            ).getReader(),
            i = [],
            o = 0
          try {
            for (;;) {
              t.throwIfAborted()
              let e = await s.read()
              if (e.done) break
              if ((o += e.value.byteLength) > 0x1400000) throw new n("too_large")
              let r = 1048576 - (o - e.value.byteLength)
              r > 0 && i.push(e.value.slice(0, r))
            }
          } catch (s) {
            if (t.aborted || s instanceof n) throw s
            throw new n(/\.gz$/i.test(e.name) ? "invalid_gzip" : "unreadable")
          } finally {
            try {
              await s.cancel()
            } catch {}
            s.releaseLock()
          }
          t.throwIfAborted()
          let d = await new Blob(i).text(),
            u = o > 1048576,
            c = u,
            f = []
          if (/\.jsonl\.gz$/i.test(e.name)) {
            let e = 0
            for (let t of d.matchAll(/[^\n]*(?:\n|$)/g)) {
              let s
              e++
              let i = t[0]
              if (u && !i.endsWith("\n")) break
              if ("" === i.trim()) continue
              if (10 === f.length) {
                c = !0
                break
              }
              try {
                s = JSON.parse(i)
              } catch {
                throw new n("invalid_json", { line: e })
              }
              if (Array.isArray(s)) throw new n("json_format", { line: e })
              let l = r.safeParse(s)
              if (!l.success)
                throw new n("invalid_json_record", {
                  line: e,
                  invalidFields: l.error.issues.flatMap((e) => {
                    let t = e.path[0]
                    return "string" == typeof t && Object.hasOwn(r.shape, t)
                      ? [
                          {
                            field: t,
                            expected: ["title", "name", "image_link"].includes(t) ? "text" : "text_or_number",
                          },
                        ]
                      : []
                  }),
                })
              let o = l.data
              f.push(a(Object.fromEntries(Object.entries(o).map(([e, t]) => [e, null == t ? "" : String(t)]))))
            }
          } else {
            if (/^[\s\uFEFF]*(?:\{\s*"|\[\s*\{)/.test(d)) throw new n("json_format")
            let s = (async function* (e, t, s, i) {
                let r = [],
                  l = "",
                  a = !1,
                  o = !1
                for (let d = 0; d <= e.length; d++) {
                  d % 65536 == 0 && (await new Promise((e) => setTimeout(e, 0)), s.throwIfAborted())
                  let u = e[d]
                  if (null == u && i) return
                  if (a) {
                    if (null == u) throw new n("invalid_delimited")
                    '"' === u ? ('"' === e[d + 1] ? ((l += '"'), d++) : ((a = !1), (o = !0))) : (l += u)
                  } else if (u === t || "\n" === u || "\r" === u || null == u)
                    (r.push(l),
                      (l = ""),
                      (o = !1),
                      u !== t &&
                        (r.some((e) => "" !== e.trim()) && (yield r), (r = []), "\r" === u && "\n" === e[d + 1] && d++))
                  else if ('"' !== u || "" !== l || o) {
                    if (o || '"' === u) throw new n("invalid_delimited")
                    l += u
                  } else a = !0
                }
              })(d.replace(/^\uFEFF/, ""), /\.(tsv|txt)(\.gz)?$/i.test(e.name) ? "	" : ",", t, u),
              i = await s.next(),
              r = new Set(),
              l = i.value?.map((e, t) => {
                let s = e.trim() || `column_${t}`,
                  i = s,
                  n = 1
                for (; r.has(i);) i = `${s}_${n++}`
                return (r.add(i), i)
              })
            if (null == l ? !u : !l.some((e) => ["title", "name"].includes(e))) throw new n("missing_title")
            for await (let e of s) {
              if (10 === f.length) {
                c = !0
                break
              }
              if (null == l) break
              f.push(a(Object.fromEntries(l.map((t, s) => [t, e[s] ?? ""]))))
            }
          }
          if (0 === f.length && !c) throw new n("no_products")
          let p = e
          if (!/\.gz$/i.test(e.name)) {
            let s = await new Response(e.stream().pipeThrough(new CompressionStream("gzip"))).blob()
            ;(t.throwIfAborted(),
              (p = new File([s], e.name.replace(/\.txt$/i, ".tsv") + ".gz", { type: "application/gzip" })))
          }
          return { file: p, sourceName: e.name, products: f, previewLimited: c }
        },
        z8: n,
        zB: ".csv,.txt,.tsv,.gz,.parquet,application/gzip",
      },
    )
  },
  NRby(e, t, s) {
    s.d(t, { i: () => V, c: () => O })
    var i = s("ABep"),
      n = s("QosV"),
      r = s("irkb"),
      l = s("T0Rc"),
      a = s("xSOA"),
      o = s("zd8w"),
      d = s("oyxz"),
      u = s("Wf1j"),
      c = s("Qgfj"),
      f = s("Ywss"),
      p = s("UOa8"),
      h = s("Kwur"),
      m = s("mUDD"),
      g = s("RNul"),
      x = s("zLIa"),
      b = s("U5No"),
      y = s("AWNZ"),
      _ = s("ZEx5"),
      v = s("eShZ"),
      j = s("ty20"),
      w = s("lFwx"),
      A = s("gRkg"),
      S = s("ahBJ"),
      P = s("G6H4"),
      k = s("e5OY")
    async function C(e, t, s, i, n, r) {
      let l = await h.Request.safePost(
        "/shopping/business-profiles/{business_profile_id}/feeds/{feed_id}/hosted-url/runs",
        {
          additionalHeaders: { "ChatGPT-Account-ID": t },
          parameters: { path: { business_profile_id: s, feed_id: i } },
          requestBody: { create_request_id: n, ...(null != r && { expected_source_revision: r }) },
          expectedErrorStatuses: [400, 401, 403, 404, 409, 422],
        },
      )
      return (
        e.setQueryData((0, k.t)(t, s, i), l.upload_id),
        e.invalidateQueries({
          queryKey: ["business-profiles", t, s],
          predicate: (e) =>
            ("feed-connection-summaries" === e.queryKey[3] &&
              Array.isArray(e.queryKey[4]) &&
              e.queryKey[4].includes(i)) ||
            ("feed-uploads" === e.queryKey[3] && e.queryKey[4] === i) ||
            (e.queryKey[3] === i && "uploads" === e.queryKey[4]),
        }),
        l
      )
    }
    var M = s("ASxG"),
      N = s("wJOJ"),
      q = s("gtGM"),
      R = s("tzGG"),
      I = s("VVBW")
    let T = M.Ikc({ id: M.uRe(), revision: M.YjP().min(1).optional() })
    function E(e) {
      let t,
        s,
        l,
        u,
        c,
        f,
        p,
        m,
        g,
        b,
        y,
        _,
        P,
        k,
        M,
        E,
        z,
        B,
        V,
        O,
        L,
        K,
        $,
        G,
        H,
        Q,
        Y,
        W,
        J,
        Z,
        X,
        ee,
        et,
        es,
        ei,
        en,
        er,
        el,
        ea,
        eo,
        ed,
        eu,
        ec,
        ef,
        ep = (0, n.c)(126),
        { accountId: eh, profileId: em, feedId: eg, configuration: ex, onSaved: eb, onAccepted: ey, onBack: e_ } = e,
        ev = (0, r.jE)()
      ep[0] !== eh || ep[1] !== eg || ep[2] !== em
        ? ((t = JSON.stringify(["hosted-run", eh, em, eg])), (ep[0] = eh), (ep[1] = eg), (ep[2] = em), (ep[3] = t))
        : (t = ep[3])
      let ej = t
      ep[4] !== ej
        ? ((s = () => {
            try {
              return T.parse(JSON.parse(sessionStorage.getItem(ej) ?? "null"))
            } catch {
              return null
            }
          }),
          (ep[4] = ej),
          (ep[5] = s))
        : (s = ep[5])
      let [ew, eA] = (0, o.useState)(s)
      ep[6] !== ej
        ? ((l = function (e) {
            eA(e)
            try {
              null == e ? sessionStorage.removeItem(ej) : sessionStorage.setItem(ej, JSON.stringify(e))
            } catch {}
          }),
          (ep[6] = ej),
          (ep[7] = l))
        : (l = ep[7])
      let eS = l,
        eP = ex.recurring_schedule,
        ek = eP?.enabled ? eP.frequency : "once"
      ;(ep[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = ["once", "hourly", "daily", "weekly", "biweekly"]), (ep[8] = u))
        : (u = ep[8]),
        ep[9] !== eP?.frequency
          ? ((c = u.filter((e) => "hourly" !== e || eP?.frequency === "hourly")), (ep[9] = eP?.frequency), (ep[10] = c))
          : (c = ep[10]))
      let eC = c,
        [eM, eN] = (0, o.useState)(ex.source_url ?? ""),
        [eq, eR] = (0, o.useState)(ek),
        [eI, eT] = (0, o.useState)(""),
        [eE, eF] = (0, o.useState)(""),
        [eU, eD] = (0, o.useState)(!1),
        [ez, eB] = (0, o.useState)(),
        eV = (0, o.useRef)(null)
      ;(ep[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = () => () => eV.current?.abort()), (p = []), (ep[11] = f), (ep[12] = p))
        : ((f = ep[11]), (p = ep[12])),
        (0, o.useEffect)(f, p),
        ep[13] !== eM ? ((m = URL.parse(eM.trim())), (ep[13] = eM), (ep[14] = m)) : (m = ep[14]))
      let eO = m
      ep[15] !== ex.has_credentials || ep[16] !== ex.source_url || ep[17] !== eO
        ? ((g = ex.has_credentials && null != eO && eO.origin !== URL.parse(ex.source_url ?? "")?.origin),
          (ep[15] = ex.has_credentials),
          (ep[16] = ex.source_url),
          (ep[17] = eO),
          (ep[18] = g))
        : (g = ep[18])
      let eL = g,
        eK = eI.length > 0 && eE.length > 0
      ep[19] !== eU || ep[20] !== ex.source_url || ep[21] !== eK || ep[22] !== eM
        ? ((b = eM.trim() !== ex.source_url || eK || eU),
          (ep[19] = eU),
          (ep[20] = ex.source_url),
          (ep[21] = eK),
          (ep[22] = eM),
          (ep[23] = b))
        : (b = ep[23])
      let e$ = b
      ep[24] !== e$ || ep[25] !== eM
        ? ((y = e$ && (0, S.CH)((0, N.eg)(eM) ?? "")), (ep[24] = e$), (ep[25] = eM), (ep[26] = y))
        : (y = ep[26])
      let eG = y,
        eH = (e$ || eq !== ek) && !eG && eO?.protocol === "https:" && ("" === eI) == ("" === eE) && (!eL || eU || eK)
      ep[27] !== eh ||
      ep[28] !== eU ||
      ep[29] !== eg ||
      ep[30] !== eq ||
      ep[31] !== eE ||
      ep[32] !== em ||
      ep[33] !== eK ||
      ep[34] !== e$ ||
      ep[35] !== eM ||
      ep[36] !== eI
        ? ((_ = async function () {
            let e = {
              source_url: eM.trim(),
              ...(eK ? { username: eI, password: eE } : {}),
              ...(eU && !eK ? { clear_credentials: !0 } : {}),
            }
            if (e$) {
              let t = new AbortController()
              eV.current = t
              let s = await (0, N.B)({
                accountId: eh,
                profileId: em,
                source: e,
                getFeedId: () => Promise.resolve(eg),
                signal: t.signal,
              })
              if ((t.signal.throwIfAborted(), !(0, N.Rj)(s, em))) return void eB(s)
            }
            return h.Request.safePut("/shopping/business-profiles/{business_profile_id}/feeds/{feed_id}/hosted-url", {
              additionalHeaders: { "ChatGPT-Account-ID": eh },
              parameters: { path: { business_profile_id: em, feed_id: eg } },
              requestBody: { ...e, frequency: eq, enabled: "once" !== eq },
              expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 429],
            })
          }),
          (ep[27] = eh),
          (ep[28] = eU),
          (ep[29] = eg),
          (ep[30] = eq),
          (ep[31] = eE),
          (ep[32] = em),
          (ep[33] = eK),
          (ep[34] = e$),
          (ep[35] = eM),
          (ep[36] = eI),
          (ep[37] = _))
        : (_ = ep[37])
      let eQ = _
      ep[38] !== eh ||
      ep[39] !== eg ||
      ep[40] !== eb ||
      ep[41] !== ew ||
      ep[42] !== em ||
      ep[43] !== ev ||
      ep[44] !== eS ||
      ep[45] !== eQ
        ? ((P = {
            mutationFn: async () => {
              let e = ew
              if (null == e) {
                let t = await eQ()
                if (null == t) return
                ;(eS((e = { id: crypto.randomUUID(), revision: t.source_revision || void 0 })),
                  eb(t),
                  eF(""),
                  eT(""),
                  eD(!1))
              }
              try {
                let t = await C(ev, eh, em, eg, e.id, e.revision)
                return (eS(null), t)
              } catch (e) {
                if (e instanceof v.FetchError && [400, 409].includes(e.status)) {
                  eS(null)
                  let e = (0, w.A)(eh, em, eg)
                  await ev.invalidateQueries(e)
                  let t = ev.getQueryData(e.queryKey)
                  if (null != t) {
                    eN(t.source_url ?? "")
                    let e = t.recurring_schedule
                    eR(e?.enabled ? e.frequency : "once")
                  }
                }
                throw e
              }
            },
            retry: !1,
            gcTime: 0,
          }),
          (ep[38] = eh),
          (ep[39] = eg),
          (ep[40] = eb),
          (ep[41] = ew),
          (ep[42] = em),
          (ep[43] = ev),
          (ep[44] = eS),
          (ep[45] = eQ),
          (ep[46] = P))
        : (P = ep[46])
      let { mutate: eY, isPending: eW, error: eJ } = (0, a.n)(P),
        eZ = !eW && (eH || null != ew)
      ep[47] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = (0, i.jsx)(d.A, {
            id: "businessProfiles.feeds.hosted.updateTitle",
            defaultMessage: "Update products with hosted URL",
          })),
          (ep[47] = k))
        : (k = ep[47])
      let eX = k
      ;(ep[48] !== eZ || ep[49] !== eY || ep[50] !== ey
        ? ((M = (e) => {
            ;(e.preventDefault(),
              eZ &&
                eY(void 0, {
                  onSuccess: (e) => {
                    null != e && ey(e)
                  },
                }))
          }),
          (ep[48] = eZ),
          (ep[49] = eY),
          (ep[50] = ey),
          (ep[51] = M))
        : (M = ep[51]),
        ep[52] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = (0, i.jsx)("div", {
              className: "flex flex-col gap-1",
              children: (0, i.jsx)("h1", {
                className: "text-heading-lg leading-tight font-normal md:text-heading-app",
                children: eX,
              }),
            })),
            (ep[52] = E))
          : (E = ep[52]))
      let e0 = eW || null != ew
      ;(ep[53] === Symbol.for("react.memo_cache_sentinel") ? ((z = () => eB(void 0)), (ep[53] = z)) : (z = ep[53]),
        ep[54] === Symbol.for("react.memo_cache_sentinel")
          ? ((B = (0, i.jsx)(d.A, { id: "businessProfiles.feeds.hosted.fileUrl", defaultMessage: "File URL" })),
            (ep[54] = B))
          : (B = ep[54]),
        ep[55] === Symbol.for("react.memo_cache_sentinel")
          ? ((V = (e) => {
              ;(eN(e.target.value), eD(!1))
            }),
            (ep[55] = V))
          : (V = ep[55]),
        ep[56] !== eM
          ? ((O = (0, i.jsxs)("label", {
              className: "flex flex-col gap-2 text-sm font-medium",
              children: [
                B,
                (0, i.jsx)(x.pd, {
                  variant: "onboarding",
                  type: "url",
                  required: !0,
                  maxLength: 4096,
                  value: eM,
                  onChange: V,
                }),
              ],
            })),
            (ep[56] = eM),
            (ep[57] = O))
          : (O = ep[57]),
        ep[58] === Symbol.for("react.memo_cache_sentinel")
          ? ((L = (0, i.jsx)("span", {
              children: (0, i.jsx)(d.A, {
                id: "businessProfiles.feeds.hosted.usernameOptional",
                defaultMessage: "Username <optional>(optional)</optional>",
                values: { optional: D },
              }),
            })),
            (ep[58] = L))
          : (L = ep[58]))
      let e1 = eE.length > 0
      ;(ep[59] === Symbol.for("react.memo_cache_sentinel")
        ? ((K = (e) => eT(e.target.value)), (ep[59] = K))
        : (K = ep[59]),
        ep[60] !== e1 || ep[61] !== eI
          ? (($ = (0, i.jsxs)("label", {
              className: "flex flex-col gap-2 text-sm font-medium",
              children: [
                L,
                (0, i.jsx)(x.pd, { variant: "onboarding", autoComplete: "off", value: eI, required: e1, onChange: K }),
              ],
            })),
            (ep[60] = e1),
            (ep[61] = eI),
            (ep[62] = $))
          : ($ = ep[62]),
        ep[63] === Symbol.for("react.memo_cache_sentinel")
          ? ((G = (0, i.jsx)("span", {
              children: (0, i.jsx)(d.A, {
                id: "businessProfiles.feeds.hosted.passwordOptional",
                defaultMessage: "Password <optional>(optional)</optional>",
                values: { optional: U },
              }),
            })),
            (ep[63] = G))
          : (G = ep[63]))
      let e2 = eI.length > 0
      ;(ep[64] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = (e) => eF(e.target.value)), (ep[64] = H))
        : (H = ep[64]),
        ep[65] !== eE || ep[66] !== e2
          ? ((Q = (0, i.jsxs)("label", {
              className: "flex flex-col gap-2 text-sm font-medium",
              children: [
                G,
                (0, i.jsx)(x.pd, {
                  variant: "onboarding",
                  type: "password",
                  autoComplete: "new-password",
                  value: eE,
                  required: e2,
                  onChange: H,
                }),
              ],
            })),
            (ep[65] = eE),
            (ep[66] = e2),
            (ep[67] = Q))
          : (Q = ep[67]),
        ep[68] !== eL || ep[69] !== ex.has_credentials
          ? ((Y =
              ex.has_credentials && !eL
                ? (0, i.jsx)("p", {
                    className: "text-xs text-secondary",
                    children: (0, i.jsx)(d.A, {
                      id: "businessProfiles.feeds.hosted.savedCredentials",
                      defaultMessage: "Leave both fields empty to keep saved credentials",
                    }),
                  })
                : null),
            (ep[68] = eL),
            (ep[69] = ex.has_credentials),
            (ep[70] = Y))
          : (Y = ep[70]),
        ep[71] !== eL || ep[72] !== eU || ep[73] !== eK
          ? ((W =
              eL && !eK
                ? (0, i.jsxs)("label", {
                    className: "flex items-center gap-2 text-sm",
                    children: [
                      (0, i.jsx)("input", {
                        className: "size-4 appearance-auto",
                        type: "checkbox",
                        checked: eU,
                        onChange: (e) => eD(e.target.checked),
                      }),
                      (0, i.jsx)(d.A, {
                        id: "businessProfiles.feeds.hosted.removePreviousHostCredentials",
                        defaultMessage: "Remove the credentials saved for the previous host",
                      }),
                    ],
                  })
                : null),
            (ep[71] = eL),
            (ep[72] = eU),
            (ep[73] = eK),
            (ep[74] = W))
          : (W = ep[74]),
        ep[75] === Symbol.for("react.memo_cache_sentinel")
          ? ((J = (0, i.jsx)(d.A, {
              id: "businessProfiles.feeds.hosted.updateCadenceLabel",
              defaultMessage: "Update cadence",
            })),
            (ep[75] = J))
          : (J = ep[75]),
        ep[76] !== eC
          ? ((Z = (e) => {
              let t = eC.find((t) => t === e.target.value)
              null != t && eR(t)
            }),
            (X = eC.map(F)),
            (ep[76] = eC),
            (ep[77] = Z),
            (ep[78] = X))
          : ((Z = ep[77]), (X = ep[78])),
        ep[79] !== eq || ep[80] !== Z || ep[81] !== X
          ? ((ee = (0, i.jsxs)("label", {
              className: "flex flex-col gap-2 text-sm font-medium",
              children: [
                J,
                (0, i.jsx)("select", {
                  className: "h-10 w-full appearance-auto rounded-lg border border-default bg-surface px-3 font-normal",
                  value: eq,
                  onChange: Z,
                  children: X,
                }),
              ],
            })),
            (ep[79] = eq),
            (ep[80] = Z),
            (ep[81] = X),
            (ep[82] = ee))
          : (ee = ep[82]),
        ep[83] !== e0 || ep[84] !== O || ep[85] !== $ || ep[86] !== Q || ep[87] !== Y || ep[88] !== W || ep[89] !== ee
          ? ((et = (0, i.jsxs)("fieldset", {
              className: "flex flex-col gap-3",
              disabled: e0,
              onChange: z,
              children: [O, $, Q, Y, W, ee],
            })),
            (ep[83] = e0),
            (ep[84] = O),
            (ep[85] = $),
            (ep[86] = Q),
            (ep[87] = Y),
            (ep[88] = W),
            (ep[89] = ee),
            (ep[90] = et))
          : (et = ep[90]),
        ep[91] !== eG
          ? ((es = eG ? (0, i.jsx)(A.mx, { error: new S.z8("gzipped_parquet"), manualUpload: !1 }) : null),
            (ep[91] = eG),
            (ep[92] = es))
          : (es = ep[92]),
        ep[93] !== em || ep[94] !== ez
          ? ((ei = ez?.status === "checked" ? (0, i.jsx)(q.B, { validation: ez, error: null, profileId: em }) : null),
            (ep[93] = em),
            (ep[94] = ez),
            (ep[95] = ei))
          : (ei = ep[95]),
        ep[96] !== eJ
          ? ((en = null != eJ ? (0, i.jsx)(R.AB, { error: eJ }) : null), (ep[96] = eJ), (ep[97] = en))
          : (en = ep[97]),
        ep[98] === Symbol.for("react.memo_cache_sentinel")
          ? ((er = (0, i.jsx)(d.A, { id: "businessProfiles.feeds.uploadBack", defaultMessage: "Back" })), (ep[98] = er))
          : (er = ep[98]),
        ep[99] !== eW || ep[100] !== e_
          ? ((el = (0, i.jsx)(j.d, {
              color: "outlineGhost",
              size: "formAction",
              radius: "full",
              type: "button",
              disabled: eW,
              onClick: e_,
              children: er,
            })),
            (ep[99] = eW),
            (ep[100] = e_),
            (ep[101] = el))
          : (el = ep[101]))
      let e4 = !eZ
      return (
        ep[102] !== ew
          ? ((ea =
              null != ew
                ? (0, i.jsx)(d.A, { id: "businessProfiles.feeds.retry", defaultMessage: "Try again" })
                : (0, i.jsx)(d.A, { id: "businessProfiles.feeds.hosted.updateConnect", defaultMessage: "Connect" })),
            (ep[102] = ew),
            (ep[103] = ea))
          : (ea = ep[103]),
        ep[104] !== eW || ep[105] !== e4 || ep[106] !== ea
          ? ((eo = (0, i.jsx)(j.d, {
              color: "primary",
              size: "formAction",
              radius: "full",
              type: "submit",
              loading: eW,
              disabled: e4,
              children: ea,
            })),
            (ep[104] = eW),
            (ep[105] = e4),
            (ep[106] = ea),
            (ep[107] = eo))
          : (eo = ep[107]),
        ep[108] !== el || ep[109] !== eo
          ? ((ed = (0, i.jsxs)("div", { className: "flex gap-2", children: [el, eo] })),
            (ep[108] = el),
            (ep[109] = eo),
            (ep[110] = ed))
          : (ed = ep[110]),
        ep[111] !== eJ || ep[112] !== ew
          ? ((eu =
              null != ew && null != eJ
                ? (0, i.jsx)("p", {
                    role: "status",
                    children: (0, i.jsx)(d.A, {
                      id: "businessProfiles.feeds.hosted.changesSaved",
                      defaultMessage: "Feed settings saved.",
                    }),
                  })
                : null),
            (ep[111] = eJ),
            (ep[112] = ew),
            (ep[113] = eu))
          : (eu = ep[113]),
        ep[114] !== M ||
        ep[115] !== et ||
        ep[116] !== es ||
        ep[117] !== ei ||
        ep[118] !== en ||
        ep[119] !== ed ||
        ep[120] !== eu
          ? ((ec = (0, i.jsxs)("form", {
              className: "m-auto flex w-full max-w-xl flex-col gap-6 px-8 py-20",
              onSubmit: M,
              children: [E, et, es, ei, en, ed, eu],
            })),
            (ep[114] = M),
            (ep[115] = et),
            (ep[116] = es),
            (ep[117] = ei),
            (ep[118] = en),
            (ep[119] = ed),
            (ep[120] = eu),
            (ep[121] = ec))
          : (ec = ep[121]),
        ep[122] !== eW || ep[123] !== e_ || ep[124] !== ec
          ? ((ef = (0, i.jsx)(I.I, { title: eX, busy: eW, onExit: e_, children: ec })),
            (ep[122] = eW),
            (ep[123] = e_),
            (ep[124] = ec),
            (ep[125] = ef))
          : (ef = ep[125]),
        ef
      )
    }
    function F(e) {
      return (0, i.jsx)(
        "option",
        {
          value: e,
          children: (0, i.jsx)(d.A, {
            id: "businessProfiles.feeds.hosted.editFrequencyOption",
            defaultMessage:
              "{frequency, select, once {No automatic refresh} hourly {Hourly} daily {Daily} weekly {Weekly} other {Every two weeks}}",
            values: { frequency: e },
          }),
        },
        e,
      )
    }
    function U(e) {
      return (0, i.jsx)("span", { className: "font-normal text-tertiary", children: e }, "optional")
    }
    function D(e) {
      return (0, i.jsx)("span", { className: "font-normal text-tertiary", children: e }, "optional")
    }
    var z = s("Fl1P"),
      B = s("B7Dw")
    function V(e) {
      let t,
        s,
        a,
        o,
        u = (0, n.c)(55),
        { accountId: c, manager: p, feedId: h, existingFeedName: m, onBack: x, onClose: b, onSubmitted: y } = e,
        _ = p.profile.business_profile_id,
        v = (0, r.jE)(),
        [A, S] = (0, f.ok)()
      u[0] !== A ? ((t = A.get("submitted_run")), (u[0] = A), (u[1] = t)) : (t = u[1])
      let P = t,
        k = null == P
      u[2] !== c || u[3] !== h || u[4] !== _ || u[5] !== k
        ? ((s = (0, w.A)(c, _, h, k)), (u[2] = c), (u[3] = h), (u[4] = _), (u[5] = k), (u[6] = s))
        : (s = u[6])
      let C = s,
        { data: M, error: N, refetch: q } = (0, l.I)(C)
      if (null != P) {
        let e, t
        return (
          u[7] !== y || u[8] !== P ? ((e = () => y(P)), (u[7] = y), (u[8] = P), (u[9] = e)) : (e = u[9]),
          u[10] !== p || u[11] !== e
            ? ((t = (0, i.jsx)(B.H, { manager: p, onClose: e })), (u[10] = p), (u[11] = e), (u[12] = t))
            : (t = u[12]),
          t
        )
      }
      if (null != N || null == M) {
        let e, t, s, n
        return (
          u[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(d.A, { id: "businessProfiles.feeds.uploadBack", defaultMessage: "Back" })), (u[13] = e))
            : (e = u[13]),
          u[14] !== x
            ? ((t = (0, i.jsx)("div", { children: (0, i.jsx)(j.d, { color: "ghost", onClick: x, children: e }) })),
              (u[14] = x),
              (u[15] = t))
            : (t = u[15]),
          u[16] !== N || u[17] !== q
            ? ((s = null != N ? (0, i.jsx)(R.AB, { error: N, onRetry: () => void q() }) : (0, i.jsx)(g.y, {})),
              (u[16] = N),
              (u[17] = q),
              (u[18] = s))
            : (s = u[18]),
          u[19] !== t || u[20] !== s
            ? ((n = (0, i.jsxs)("div", { className: "flex flex-col gap-4 p-6", children: [t, s] })),
              (u[19] = t),
              (u[20] = s),
              (u[21] = n))
            : (n = u[21]),
          n
        )
      }
      if (null != m) {
        let e, t, s, n
        return (
          u[22] !== c || u[23] !== h || u[24] !== _
            ? ((e = JSON.stringify([c, _, h])), (u[22] = c), (u[23] = h), (u[24] = _), (u[25] = e))
            : (e = u[25]),
          u[26] !== _ || u[27] !== S
            ? ((t = (e) => S((t) => $(t, _, e), { replace: !0 })), (u[26] = _), (u[27] = S), (u[28] = t))
            : (t = u[28]),
          u[29] !== c || u[30] !== h || u[31] !== C.queryKey || u[32] !== _ || u[33] !== v
            ? ((s = (e) => {
                ;(v.setQueryData(C.queryKey, e),
                  v.invalidateQueries({
                    queryKey: ["business-profiles", c, _, "feed-connection-summaries"],
                    predicate: (e) => Array.isArray(e.queryKey[4]) && e.queryKey[4].includes(h),
                  }))
              }),
              (u[29] = c),
              (u[30] = h),
              (u[31] = C.queryKey),
              (u[32] = _),
              (u[33] = v),
              (u[34] = s))
            : (s = u[34]),
          u[35] !== c ||
          u[36] !== M ||
          u[37] !== h ||
          u[38] !== x ||
          u[39] !== _ ||
          u[40] !== e ||
          u[41] !== t ||
          u[42] !== s
            ? ((n = (0, i.jsx)(
                E,
                { accountId: c, profileId: _, feedId: h, configuration: M, onBack: x, onAccepted: t, onSaved: s },
                e,
              )),
              (u[35] = c),
              (u[36] = M),
              (u[37] = h),
              (u[38] = x),
              (u[39] = _),
              (u[40] = e),
              (u[41] = t),
              (u[42] = s),
              (u[43] = n))
            : (n = u[43]),
          n
        )
      }
      let I = `${c}:${_}:${h}`
      return (
        u[44] !== h ? ((a = async () => h), (u[44] = h), (u[45] = a)) : (a = u[45]),
        u[46] !== c ||
        u[47] !== M ||
        u[48] !== p ||
        u[49] !== x ||
        u[50] !== b ||
        u[51] !== y ||
        u[52] !== I ||
        u[53] !== a
          ? ((o = (0, i.jsx)(
              O,
              { accountId: c, manager: p, configuration: M, getFeedId: a, onBack: x, onClose: b, onSubmitted: y },
              I,
            )),
            (u[46] = c),
            (u[47] = M),
            (u[48] = p),
            (u[49] = x),
            (u[50] = b),
            (u[51] = y),
            (u[52] = I),
            (u[53] = a),
            (u[54] = o))
          : (o = u[54]),
        o
      )
    }
    function O(e) {
      let t,
        s,
        l,
        c,
        g,
        w,
        k,
        M,
        T,
        E,
        F,
        U,
        D,
        V,
        O,
        H,
        Q,
        Y,
        W,
        J,
        Z,
        X,
        ee,
        et,
        es,
        ei,
        en,
        er,
        el = (0, n.c)(119),
        { accountId: ea, manager: eo, configuration: ed, getFeedId: eu, onBack: ec, onClose: ef, onSubmitted: ep } = e,
        { userId: eh } = (0, p.As)(),
        em = ed?.feed_id
      el[0] !== ea || el[1] !== eo.profile.business_profile_id || el[2] !== em || el[3] !== eh
        ? ((t = { accountId: ea, userId: eh, profileId: eo.profile.business_profile_id, feedId: em }),
          (el[0] = ea),
          (el[1] = eo.profile.business_profile_id),
          (el[2] = em),
          (el[3] = eh),
          (el[4] = t))
        : (t = el[4])
      let eg = t,
        ex = (0, o.useRef)(!1),
        eb = (0, r.jE)(),
        ey = (0, u.A)(),
        [e_, ev] = (0, f.ok)()
      el[5] !== e_ ? ((s = e_.get("submitted_run")), (el[5] = e_), (el[6] = s)) : (s = el[6])
      let ej = s,
        [ew, eA] = (0, o.useState)("source"),
        [eS, eP] = (0, o.useState)(ed?.source_url ?? "")
      el[7] !== eS ? ((l = (0, N.eg)(eS)), (el[7] = eS), (el[8] = l)) : (l = el[8])
      let ek = l,
        [eC, eM] = (0, o.useState)(""),
        [eN, eq] = (0, o.useState)(""),
        [eR, eI] = (0, o.useState)(!1),
        [eT, eE] = (0, o.useState)(
          ed?.recurring_schedule?.frequency === "weekly" || ed?.recurring_schedule?.frequency === "biweekly"
            ? ed.recurring_schedule.frequency
            : "daily",
        ),
        eF = (0, o.useRef)(null),
        [eU, eD] = (0, o.useState)(),
        ez = eo.profile.business_profile_id
      el[9] !== eS ? ((c = eS.trim()), (el[9] = eS), (el[10] = c)) : (c = el[10])
      let eB = eC || eN ? eC : void 0,
        eV = eC || eN ? eN : void 0
      el[11] !== eR || el[12] !== c || el[13] !== eB || el[14] !== eV
        ? ((g = { source_url: c, username: eB, password: eV, clear_credentials: eR }),
          (el[11] = eR),
          (el[12] = c),
          (el[13] = eB),
          (el[14] = eV),
          (el[15] = g))
        : (g = el[15])
      let eO = g
      el[16] !== eu || el[17] !== ek
        ? ((w = function () {
            return ((eF.current = eF.current ?? ek ?? null), eu(eF.current ?? void 0))
          }),
          (el[16] = eu),
          (el[17] = ek),
          (el[18] = w))
        : (w = el[18])
      let eL = w,
        eK = (0, o.useRef)(null)
      ;(el[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = () => () => eK.current?.abort()), (M = []), (el[19] = k), (el[20] = M))
        : ((k = el[19]), (M = el[20])),
        (0, o.useEffect)(k, M),
        el[21] !== ea || el[22] !== ez || el[23] !== eL || el[24] !== eO || el[25] !== ek
          ? ((T = {
              mutationFn: async () => {
                let e = (0, N.lL)(ek)
                if (null != e) throw e
                let t = new AbortController()
                return (
                  eK.current?.abort(),
                  (eK.current = t),
                  (0, N.B)({ accountId: ea, profileId: ez, source: eO, getFeedId: eL, signal: t.signal })
                )
              },
              retry: !1,
              gcTime: 0,
            }),
            (el[21] = ea),
            (el[22] = ez),
            (el[23] = eL),
            (el[24] = eO),
            (el[25] = ek),
            (el[26] = T))
          : (T = el[26]))
      let { mutate: e$, isPending: eG, data: eH, error: eQ, reset: eY } = (0, a.n)(T),
        eW = eQ instanceof S.z8 ? eQ : null
      el[27] !== ea ? ((E = { "ChatGPT-Account-ID": ea }), (el[27] = ea), (el[28] = E)) : (E = el[28])
      let eJ = E
      el[29] !== ea ||
      el[30] !== eJ ||
      el[31] !== eT ||
      el[32] !== eo.profile.business_profile_id ||
      el[33] !== ez ||
      el[34] !== eb ||
      el[35] !== eL ||
      el[36] !== eU ||
      el[37] !== eg ||
      el[38] !== eO
        ? ((F = {
            mutationFn: async () => {
              let e = await eL(),
                t = {
                  queryKey: ["business-profiles", ea, eo.profile.business_profile_id, "feed-connection-summaries"],
                  predicate: (t) => Array.isArray(t.queryKey[4]) && t.queryKey[4].includes(e),
                },
                s = !1,
                i = { path: { business_profile_id: eo.profile.business_profile_id, feed_id: e } },
                n = eU
              if (null == n) {
                let r = await h.Request.safePut(
                  "/shopping/business-profiles/{business_profile_id}/feeds/{feed_id}/hosted-url",
                  {
                    additionalHeaders: eJ,
                    parameters: i,
                    requestBody: { ...eO, frequency: eT, enabled: !0 },
                    expectedErrorStatuses: [400, 401, 403, 404, 409, 422],
                  },
                ).catch((0, z.Z)({ ...eg, feedId: e }, "hosted_schedule"))
                ;(eb.setQueryData(["business-profiles", ea, eo.profile.business_profile_id, "hosted-url", e], r),
                  (s = !0),
                  eb.invalidateQueries({ ...t, refetchType: "none" }),
                  eD((n = { id: crypto.randomUUID(), revision: r.source_revision || void 0 })),
                  eM(""),
                  eq(""))
              }
              return C(eb, ea, ez, e, n.id, n.revision).catch((i) => {
                throw (
                  (0, z.Nd)({ ...eg, feedId: e }, "hosted_run_create", i),
                  s && eb.invalidateQueries({ ...t, refetchType: "active" }),
                  i
                )
              })
            },
            retry: !1,
            gcTime: 0,
          }),
          (el[29] = ea),
          (el[30] = eJ),
          (el[31] = eT),
          (el[32] = eo.profile.business_profile_id),
          (el[33] = ez),
          (el[34] = eb),
          (el[35] = eL),
          (el[36] = eU),
          (el[37] = eg),
          (el[38] = eO),
          (el[39] = F))
        : (F = el[39])
      let { mutate: eZ, isPending: eX, error: e0, reset: e1 } = (0, a.n)(F)
      el[40] !== e1 || el[41] !== eY
        ? ((U = function () {
            ;(eY(), e1())
          }),
          (el[40] = e1),
          (el[41] = eY),
          (el[42] = U))
        : (U = el[42])
      let e2 = U,
        e4 = eG || eX
      el[43] !== e0 || el[44] !== eU
        ? ((D = null != eU && e0 instanceof v.FetchError && [400, 409].includes(e0.status)),
          (el[43] = e0),
          (el[44] = eU),
          (el[45] = D))
        : (D = el[45])
      let e3 = D
      el[46] !== ez || el[47] !== eH
        ? ((V =
            eH?.status === "parquet_format_checked" ||
            (eH?.status === "checked" && "valid" !== (0, b.p)(eH.report, ez))),
          (el[46] = ez),
          (el[47] = eH),
          (el[48] = V))
        : (V = el[48])
      let e5 = V
      if (null != ej) {
        let e, t
        return (
          el[49] !== ep || el[50] !== ej
            ? ((e = () => ep(ej)), (el[49] = ep), (el[50] = ej), (el[51] = e))
            : (e = el[51]),
          el[52] !== eo || el[53] !== e
            ? ((t = (0, i.jsx)(B.H, { manager: eo, onClose: e })), (el[52] = eo), (el[53] = e), (el[54] = t))
            : (t = el[54]),
          t
        )
      }
      ;(el[55] !== e4 ||
      el[56] !== eZ ||
      el[57] !== ez ||
      el[58] !== e3 ||
      el[59] !== ev ||
      el[60] !== ew ||
      el[61] !== e$
        ? ((O = (e) => {
            ;(e.preventDefault(),
              e4 ||
                e3 ||
                ("source" === ew
                  ? e$(void 0, {
                      onSuccess: (e) => {
                        ;(0, N.Rj)(e, ez) && eA("cadence")
                      },
                    })
                  : eZ(void 0, { onSuccess: (e) => ev((t) => $(t, ez, e), { replace: !0 }) })))
          }),
          (el[55] = e4),
          (el[56] = eZ),
          (el[57] = ez),
          (el[58] = e3),
          (el[59] = ev),
          (el[60] = ew),
          (el[61] = e$),
          (el[62] = O))
        : (O = el[62]),
        el[63] !== ew
          ? ((H = (0, i.jsx)("h1", {
              className: "text-heading-lg leading-tight font-normal select-none md:text-heading-app",
              children:
                "source" === ew
                  ? (0, i.jsx)(d.A, {
                      id: "businessProfiles.feeds.hosted.connectTitle",
                      defaultMessage: "Use a hosted URL",
                    })
                  : (0, i.jsx)(d.A, {
                      id: "businessProfiles.feeds.hosted.cadenceTitle",
                      defaultMessage: "Set update cadence",
                    }),
            })),
            (el[63] = ew),
            (el[64] = H))
          : (H = el[64]))
      let e8 = e4 || null != eU
      ;(el[65] !== eR ||
      el[66] !== ed?.has_credentials ||
      el[67] !== eW ||
      el[68] !== eT ||
      el[69] !== ey ||
      el[70] !== eN ||
      el[71] !== e2 ||
      el[72] !== eg ||
      el[73] !== ek ||
      el[74] !== eS ||
      el[75] !== ew ||
      el[76] !== eC
        ? ((Q =
            "source" === ew
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsxs)(m.RW, {
                      children: [
                        (0, i.jsx)("label", {
                          htmlFor: "feed-source-url",
                          className: "text-sm font-medium select-none",
                          children: (0, i.jsx)(d.A, {
                            id: "businessProfiles.feeds.hosted.fileUrl",
                            defaultMessage: "File URL",
                          }),
                        }),
                        (0, i.jsx)(x.pd, {
                          id: "feed-source-url",
                          variant: "onboarding",
                          type: "url",
                          required: !0,
                          pattern: "https://.*",
                          placeholder: "https://",
                          maxLength: 4096,
                          value: eS,
                          onBlur: (e) => {
                            ;(ex.current &&
                              eS.trim() &&
                              (0, z.Rq)(
                                eg,
                                "hosted_url",
                                e.currentTarget.validity.valid && null == (0, N.lL)(ek) ? null : "invalid_url",
                              ),
                              (ex.current = !1))
                          },
                          onChange: (e) => {
                            ;((ex.current = !0), e2(), eP(e.target.value))
                          },
                          "aria-invalid": null != eW || void 0,
                          "aria-describedby": eW ? "feed-source-url-format-error" : "feed-source-url-help",
                        }),
                        (0, i.jsx)("p", {
                          id: "feed-source-url-help",
                          className: "text-sm text-secondary",
                          children: (0, i.jsx)(d.A, {
                            id: "businessProfiles.feeds.hosted.directFileLink",
                            defaultMessage:
                              "Enter a direct HTTPS link to your feed file. The default download limit is 10 GiB per file.",
                          }),
                        }),
                        null == eW
                          ? (0, i.jsx)(P.zQ, {})
                          : (0, i.jsx)("div", {
                              id: "feed-source-url-format-error",
                              children: (0, i.jsx)(A.mx, { error: eW, manualUpload: !1 }),
                            }),
                      ],
                    }),
                    (0, i.jsxs)(m.RW, {
                      children: [
                        (0, i.jsx)("label", {
                          htmlFor: "feed-source-username",
                          className: "text-sm font-medium select-none",
                          children: (0, i.jsx)(d.A, {
                            id: "businessProfiles.feeds.hosted.usernameOptional",
                            defaultMessage: "Username <optional>(optional)</optional>",
                            values: { optional: K },
                          }),
                        }),
                        (0, i.jsx)(x.pd, {
                          id: "feed-source-username",
                          variant: "onboarding",
                          autoComplete: "off",
                          value: eC,
                          required: eN.length > 0,
                          onChange: (e) => {
                            ;(e2(), eM(e.target.value), eI(!1))
                          },
                        }),
                      ],
                    }),
                    (0, i.jsxs)(m.RW, {
                      children: [
                        (0, i.jsx)("label", {
                          htmlFor: "feed-source-password",
                          className: "text-sm font-medium select-none",
                          children: (0, i.jsx)(d.A, {
                            id: "businessProfiles.feeds.hosted.passwordOptional",
                            defaultMessage: "Password <optional>(optional)</optional>",
                            values: { optional: L },
                          }),
                        }),
                        (0, i.jsx)(x.pd, {
                          id: "feed-source-password",
                          variant: "onboarding",
                          type: "password",
                          autoComplete: "new-password",
                          value: eN,
                          required: eC.length > 0,
                          onChange: (e) => {
                            ;(e2(), eq(e.target.value), eI(!1))
                          },
                        }),
                      ],
                    }),
                    ed?.has_credentials
                      ? (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)("p", {
                              className: "text-sm text-secondary",
                              children: (0, i.jsx)(d.A, {
                                id: "businessProfiles.feeds.hosted.savedCredentials",
                                defaultMessage: "Leave both fields empty to keep saved credentials",
                              }),
                            }),
                            (0, i.jsx)(j.d, {
                              color: "secondary",
                              disabled: eR,
                              onClick: () => {
                                ;(e2(), eI(!0), eM(""), eq(""))
                              },
                              children: (0, i.jsx)(d.A, {
                                id: "businessProfiles.feeds.hosted.removeCredentials",
                                defaultMessage: "Remove saved credentials",
                              }),
                            }),
                          ],
                        })
                      : null,
                  ],
                })
              : (0, i.jsx)("div", {
                  role: "radiogroup",
                  "aria-label": ey.formatMessage({
                    id: "businessProfiles.feeds.hosted.updateCadence",
                    defaultMessage: "Update cadence",
                  }),
                  children: (0, i.jsx)(_.t, {
                    variant: "form",
                    children: ["daily", "weekly", "biweekly"].map((e) =>
                      (0, i.jsx)(
                        y.lu,
                        {
                          id: `feed-frequency-${e}`,
                          ariaLabel: ey.formatMessage(G[e]),
                          label: (0, i.jsx)(d.A, { ...G[e] }),
                          description: null,
                          name: "feed-frequency",
                          value: e,
                          checked: eT === e,
                          onChange: () => eE(e),
                          variant: "form",
                        },
                        e,
                      ),
                    ),
                  }),
                })),
          (el[65] = eR),
          (el[66] = ed?.has_credentials),
          (el[67] = eW),
          (el[68] = eT),
          (el[69] = ey),
          (el[70] = eN),
          (el[71] = e2),
          (el[72] = eg),
          (el[73] = ek),
          (el[74] = eS),
          (el[75] = ew),
          (el[76] = eC),
          (el[77] = Q))
        : (Q = el[77]),
        el[78] !== e8 || el[79] !== Q
          ? ((Y = (0, i.jsx)("fieldset", { className: "flex flex-col gap-3", disabled: e8, children: Q })),
            (el[78] = e8),
            (el[79] = Q),
            (el[80] = Y))
          : (Y = el[80]),
        el[81] !== eW || el[82] !== ez || el[83] !== e5 || el[84] !== eH || el[85] !== eQ
          ? ((W =
              null == eW && (e5 || null != eQ) ? (0, i.jsx)(q.B, { validation: eH, error: eQ, profileId: ez }) : null),
            (el[81] = eW),
            (el[82] = ez),
            (el[83] = e5),
            (el[84] = eH),
            (el[85] = eQ),
            (el[86] = W))
          : (W = el[86]),
        el[87] !== e0
          ? ((J = null != e0 ? (0, i.jsx)(R.AB, { error: e0 }) : null), (el[87] = e0), (el[88] = J))
          : (J = el[88]))
      let e7 = e4 || (null != eU && !e3)
      ;(el[89] !== ec || el[90] !== ef || el[91] !== e2 || el[92] !== e3 || el[93] !== ew
        ? ((Z = () => {
            e3 ? ef() : (e2(), "cadence" === ew ? eA("source") : ec())
          }),
          (el[89] = ec),
          (el[90] = ef),
          (el[91] = e2),
          (el[92] = e3),
          (el[93] = ew),
          (el[94] = Z))
        : (Z = el[94]),
        el[95] === Symbol.for("react.memo_cache_sentinel")
          ? ((X = (0, i.jsx)(d.A, { id: "businessProfiles.feeds.uploadBack", defaultMessage: "Back" })), (el[95] = X))
          : (X = el[95]),
        el[96] !== e7 || el[97] !== Z
          ? ((ee = (0, i.jsx)(j.d, {
              color: "outlineGhost",
              size: "formAction",
              radius: "full",
              disabled: e7,
              onClick: Z,
              children: X,
            })),
            (el[96] = e7),
            (el[97] = Z),
            (el[98] = ee))
          : (ee = el[98]))
      let e6 = e4 || e3
      return (
        el[99] !== ew
          ? ((et =
              "source" === ew
                ? (0, i.jsx)(d.A, {
                    id: "businessProfiles.feeds.hosted.continueAfterValidation",
                    defaultMessage: "Continue",
                  })
                : (0, i.jsx)(d.A, { id: "businessProfiles.feeds.hosted.submit", defaultMessage: "Submit" })),
            (el[99] = ew),
            (el[100] = et))
          : (et = el[100]),
        el[101] !== e4 || el[102] !== e6 || el[103] !== et
          ? ((es = (0, i.jsx)(j.d, {
              color: "primary",
              size: "formAction",
              radius: "full",
              type: "submit",
              loading: e4,
              disabled: e6,
              children: et,
            })),
            (el[101] = e4),
            (el[102] = e6),
            (el[103] = et),
            (el[104] = es))
          : (es = el[104]),
        el[105] !== ee || el[106] !== es
          ? ((ei = (0, i.jsxs)("div", { className: "flex gap-2 select-none", children: [ee, es] })),
            (el[105] = ee),
            (el[106] = es),
            (el[107] = ei))
          : (ei = el[107]),
        el[108] !== O || el[109] !== H || el[110] !== Y || el[111] !== W || el[112] !== J || el[113] !== ei
          ? ((en = (0, i.jsxs)("form", {
              className: "m-auto flex w-full max-w-xl flex-col gap-6 px-8 py-20",
              onSubmit: O,
              children: [H, Y, W, J, ei],
            })),
            (el[108] = O),
            (el[109] = H),
            (el[110] = Y),
            (el[111] = W),
            (el[112] = J),
            (el[113] = ei),
            (el[114] = en))
          : (en = el[114]),
        el[115] !== e4 || el[116] !== ef || el[117] !== en
          ? ((er = (0, i.jsx)(I.I, { onExit: ef, busy: e4, children: en })),
            (el[115] = e4),
            (el[116] = ef),
            (el[117] = en),
            (el[118] = er))
          : (er = el[118]),
        er
      )
    }
    function L(e) {
      return (0, i.jsx)("span", { className: "font-normal text-tertiary", children: e })
    }
    function K(e) {
      return (0, i.jsx)("span", { className: "font-normal text-tertiary", children: e })
    }
    function $(e, t, s) {
      let i = new URLSearchParams(e)
      return (
        i.delete("update"),
        i.delete("upload"),
        i.set("profile", t),
        i.set("feed", s.feed_id),
        i.set("hosted", "1"),
        i.set("submitted_run", s.upload_id),
        i
      )
    }
    let G = (0, c.YK)({
      daily: { id: "businessProfiles.feeds.hosted.daily", defaultMessage: "Daily" },
      weekly: { id: "businessProfiles.feeds.hosted.weekly", defaultMessage: "Weekly" },
      biweekly: { id: "businessProfiles.feeds.hosted.biweekly", defaultMessage: "Every two weeks" },
    })
  },
  gtGM(e, t, s) {
    var i = s("ABep"),
      n = s("QosV"),
      r = s("oyxz"),
      l = s("MM0V"),
      a = s("Bbed"),
      o = s("eShZ"),
      d = s("gRkg"),
      u = s("ahBJ"),
      c = s("tzGG")
    let f = (0, a._)(async () => (await Promise.resolve().then(s.bind(s, "NoEg"))).FeedValidationReport),
      p = (0, a._)(async () => (await Promise.resolve().then(s.bind(s, "NoEg"))).FeedValidationError)
    function h(e) {
      let t =
        /^Record near line (\d+) has (\d+) columns; the header has (\d+)\. Use the same number of columns in every record\. Quote cells containing delimiters or newlines\.$/.exec(
          e,
        )
      if (t) {
        let [, e, s, n] = t
        return (0, i.jsx)(r.A, {
          id: "businessProfiles.feeds.hosted.columnMismatch",
          defaultMessage:
            "The header has {expected, plural, one {# column} other {# columns}}, but the record near line {line, number} has {actual, number}. Use the same number of columns in every record and quote fields containing delimiters or line breaks.",
          values: { line: Number(e), actual: Number(s), expected: Number(n) },
        })
      }
      let s =
        /^Invalid quoted record near line (\d+)\. Quote cells containing delimiters or newlines, and double quotes inside a quoted cell\.$/.exec(
          e,
        )
      if (s)
        return (0, i.jsx)(r.A, {
          id: "businessProfiles.feeds.hosted.invalidQuotes",
          defaultMessage:
            "Check the quotes in the record near line {line, number}. Enclose fields containing delimiters or line breaks in double quotes, and double any quotes inside a quoted field.",
          values: { line: Number(s[1]) },
        })
      let n = /^Hosted URL host resolves to a blocked address: (\S+)\.$/.exec(e)
      return n
        ? (0, i.jsx)(r.A, {
            id: "businessProfiles.feeds.hosted.blockedAddress",
            defaultMessage:
              "The feed URL or one of its redirects resolves to a restricted address ({address}). Use a public HTTPS URL and check any redirects.",
            values: { address: n[1] },
          })
        : null
    }
    s.d(
      t,
      {},
      {
        B: function (e) {
          let t,
            s = (0, n.c)(8),
            { validation: a, error: m, profileId: g } = e
          if (m instanceof u.z8) {
            let e
            return (
              s[0] !== m
                ? ((e = (0, i.jsx)(d.mx, { error: m, manualUpload: !1 })), (s[0] = m), (s[1] = e))
                : (e = s[1]),
              e
            )
          }
          if (null != m) {
            let e
            return (
              s[2] !== m
                ? ((e =
                    m instanceof o.FetchError && [401, 403, 404].includes(m.status)
                      ? (0, i.jsx)(c.AB, { error: m })
                      : (0, i.jsx)(p, { error: m, source: "hosted_url", renderDetail: h })),
                  (s[2] = m),
                  (s[3] = e))
                : (e = s[3]),
              e
            )
          }
          if (a?.status === "parquet_format_checked") {
            let e
            return (
              s[4] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, i.jsx)(l.l, {
                    variant: "callout",
                    type: "infoAccent",
                    content: (0, i.jsx)(r.A, {
                      id: "businessProfiles.feeds.hosted.parquetFormatChecked",
                      defaultMessage:
                        "Parquet format detected. This file is too large to preview. Its products will be checked during processing.",
                    }),
                  })),
                  (s[4] = e))
                : (e = s[4]),
              e
            )
          }
          return (
            s[5] !== g || s[6] !== a
              ? ((t = a?.status === "checked" ? (0, i.jsx)(f, { report: a.report, businessProfileId: g }) : null),
                (s[5] = g),
                (s[6] = a),
                (s[7] = t))
              : (t = s[7]),
            t
          )
        },
      },
    )
  },
  wJOJ(e, t, s) {
    var i = s("zkY4"),
      n = s("Kwur"),
      r = s("U5No"),
      l = s("eShZ"),
      a = s("ahBJ")
    function o(e) {
      let t = URL.parse(e.trim())?.pathname.split("/").pop()
      try {
        return null == t ? void 0 : decodeURIComponent(t)
      } catch {
        return t
      }
    }
    s.d(
      t,
      {},
      {
        B: async function ({ accountId: e, profileId: t, source: s, getFeedId: i, signal: r, onRequestError: d }) {
          r.throwIfAborted()
          let u = o(s.source_url)
          if (/\.(?:json|jsonl|ndjson)$/i.test(u ?? "")) throw new a.z8("json_format")
          if (/\.(?:pdf|xlsx?|docx?|pptx?|zip)$/i.test(u ?? "")) throw new a.z8("unsupported_type")
          let c = await i(u)
          r.throwIfAborted()
          try {
            let i = await n.Request.safePost("/shopping/feeds/{feed_id}/validate", {
              additionalHeaders: { "ChatGPT-Account-ID": e },
              parameters: { path: { feed_id: c }, query: { business_profile_id: t } },
              requestBody: { source: "hosted_url", profile_source: s, require_supported_filename: !1 },
              expectedErrorStatuses: [400, 401, 403, 404, 409, 413, 422, 429, 502, 504],
              signal: r,
            }).catch((e) => {
              throw (d?.(e, c), e)
            })
            return (r.throwIfAborted(), { status: "checked", report: i })
          } catch (e) {
            if ((r.throwIfAborted(), e instanceof l.FetchError)) {
              if (400 === e.status && "hosted_feed_invalid_format" === e.errorCode) throw new a.z8("unsupported_type")
              if (413 === e.status && "hosted_parquet_sample_too_large" === e.errorCode)
                return { status: "parquet_format_checked" }
            }
            throw e
          }
        },
        Rj: function (e, t) {
          return e?.status === "parquet_format_checked" || (e?.status === "checked" && (0, r.i)(e.report, t))
        },
        eg: o,
        lL: function (e) {
          if (!e) return null
          if ((0, a.CH)(e)) return new a.z8("gzipped_parquet")
          if (/\.(?:json|jsonl|ndjson)$/i.test(e)) return new a.z8("json_format")
          let t = e.replace(/\.(?:gz|gzip)$/i, "")
          if (
            /\.(?:parquet|(?:csv|tsv|txt)(?:\.(?:gz|gzip))?|jsonl\.(?:gz|gzip))$/i.test(e) ||
            /\.(?:php\d*|phtml|pl|svc)$/i.test(e) ||
            !t.includes(".")
          )
            return null
          let s = (0, i.lookup)(t)
          return s && "application/octet-stream" !== s ? new a.z8("unsupported_type") : null
        },
      },
    )
  },
  VVBW(e, t, s) {
    var i = s("ABep"),
      n = s("QosV"),
      r = s("on57"),
      l = s("Wf1j"),
      a = s("oyxz"),
      o = s("Sm6l"),
      d = s("JNtf"),
      u = s("bVeK")
    function c(e) {
      let t,
        s,
        c,
        p,
        h,
        m,
        g,
        x,
        b,
        y,
        _ = (0, n.c)(24),
        { children: v, title: j, preview: w, showPreview: A, busy: S, completed: P, onExit: k } = e,
        C = void 0 !== A && A,
        M = void 0 !== S && S,
        N = void 0 !== P && P,
        q = (0, l.A)()
      return (
        _[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = { "aria-describedby": void 0, onEscapeKeyDown: f }), (_[0] = t))
          : (t = _[0]),
        _[1] !== j
          ? ((s =
              j ??
              (0, i.jsx)(a.A, { id: "businessProfiles.feeds.setupDialogTitle", defaultMessage: "Product feed setup" })),
            (_[1] = j),
            (_[2] = s))
          : (s = _[2]),
        _[3] !== s
          ? ((c = (0, i.jsx)(d.L3, { className: "sr-only", children: s })), (_[3] = s), (_[4] = c))
          : (c = _[4]),
        _[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, i.jsx)(u.KBq, {})),
            (h = (0, i.jsx)(a.A, { id: "businessProfiles.feeds.businessBack", defaultMessage: "ChatGPT" })),
            (_[5] = p),
            (_[6] = h))
          : ((p = _[5]), (h = _[6])),
        _[7] !== M || _[8] !== k
          ? ((m = (0, i.jsx)("div", {
              className: "absolute start-3 top-3 select-none",
              children: (0, i.jsxs)(o.$, {
                color: "ghostActive",
                size: "dialogGhost",
                disabled: M,
                onClick: k,
                children: [p, h],
              }),
            })),
            (_[7] = M),
            (_[8] = k),
            (_[9] = m))
          : (m = _[9]),
        _[10] !== v || _[11] !== m
          ? ((g = (0, i.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col overflow-y-auto", children: [m, v] })),
            (_[10] = v),
            (_[11] = m),
            (_[12] = g))
          : (g = _[12]),
        _[13] !== N || _[14] !== q || _[15] !== w || _[16] !== C
          ? ((x =
              N || C
                ? (0, i.jsx)("aside", {
                    className: (0, r.A)(
                      "hidden h-full shrink-0 overflow-y-auto @5xl/business-editor:block",
                      N ? "w-1/2 bg-surface-secondary" : "w-105 border-s border-default",
                    ),
                    "aria-label": q.formatMessage({
                      id: "businessProfiles.feeds.previewPanel",
                      defaultMessage: "Business profile preview",
                    }),
                    children: w,
                  })
                : null),
            (_[13] = N),
            (_[14] = q),
            (_[15] = w),
            (_[16] = C),
            (_[17] = x))
          : (x = _[17]),
        _[18] !== g || _[19] !== x
          ? ((b = (0, i.jsxs)("div", {
              className:
                "@container/business-editor relative flex h-full min-h-0 w-full overflow-hidden bg-surface text-default",
              children: [g, x],
            })),
            (_[18] = g),
            (_[19] = x),
            (_[20] = b))
          : (b = _[20]),
        _[21] !== b || _[22] !== c
          ? ((y = (0, i.jsxs)(d.lG, {
              open: !0,
              showDialogClose: !1,
              shouldIgnoreClickOutside: !0,
              unstyledContent: !0,
              viewportSized: !0,
              contentProps: t,
              children: [c, b],
            })),
            (_[21] = b),
            (_[22] = c),
            (_[23] = y))
          : (y = _[23]),
        y
      )
    }
    function f(e) {
      return e.preventDefault()
    }
    s.d(
      t,
      {},
      {
        I: c,
        a: function (e) {
          let t,
            s,
            r = (0, n.c)(3),
            { onExit: l } = e
          return (
            r[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, i.jsx)("p", {
                  role: "status",
                  className: "m-auto p-6 select-none",
                  children: (0, i.jsx)(a.A, {
                    id: "businessProfiles.feeds.updateLoading",
                    defaultMessage: "Loading feed details\u2026",
                  }),
                })),
                (r[0] = t))
              : (t = r[0]),
            r[1] !== l ? ((s = (0, i.jsx)(c, { onExit: l, children: t })), (r[1] = l), (r[2] = s)) : (s = r[2]),
            s
          )
        },
      },
    )
  },
  sNdy(e, t, s) {
    var i = s("ABep"),
      n = s("QosV"),
      r = s("T0Rc"),
      l = s("oyxz"),
      a = s("UOa8"),
      o = s("Sm6l"),
      d = s("Bbed"),
      u = s("eShZ"),
      c = s("lFwx"),
      f = s("Fl1P"),
      p = s("tzGG"),
      h = s("VVBW")
    let m = (0, d._)(async () => (await s.e(84934).then(s.bind(s, "mIK0"))).FeedSftpFlow, {
      fallback: ({ onClose: e }) => (0, i.jsx)(h.a, { onExit: e }),
    })
    s.d(
      t,
      {},
      {
        W: function (e) {
          let t,
            s,
            d,
            g,
            x = (0, n.c)(37),
            { accountId: b, manager: y, feedId: _, existingFeedName: v, onBack: j, onClose: w } = e,
            { userId: A } = (0, a.As)(),
            S = y.profile.business_profile_id
          ;(x[0] !== b || x[1] !== _ || x[2] !== S || x[3] !== A
            ? ((t = (e, t) => {
                ;(0, f.Z)({ accountId: b, userId: A, profileId: S, feedId: _ }, "sftp_details", t)(e)
              }),
              (x[0] = b),
              (x[1] = _),
              (x[2] = S),
              (x[3] = A),
              (x[4] = t))
            : (t = x[4]),
            x[5] !== b || x[6] !== _ || x[7] !== S || x[8] !== t
              ? ((s = (0, c.I)(b, S, _, t)), (x[5] = b), (x[6] = _), (x[7] = S), (x[8] = t), (x[9] = s))
              : (s = x[9]))
          let { data: P, error: k, refetch: C } = (0, r.I)(s)
          if ((k instanceof u.FetchError && [401, 403, 404].includes(k.status)) || null == P) {
            let e, t, s, n, r, a
            if (null == k) {
              let e
              return (x[10] !== w ? ((e = (0, i.jsx)(h.a, { onExit: w })), (x[10] = w), (x[11] = e)) : (e = x[11]), e)
            }
            return (
              x[12] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, i.jsx)(l.A, { id: "businessProfiles.feeds.sftp.back", defaultMessage: "Back" })),
                  (x[12] = e))
                : (e = x[12]),
              x[13] !== j
                ? ((t = (0, i.jsx)(o.$, { color: "secondary", onClick: j, children: e })), (x[13] = j), (x[14] = t))
                : (t = x[14]),
              x[15] !== C ? ((s = () => void C()), (x[15] = C), (x[16] = s)) : (s = x[16]),
              x[17] !== k || x[18] !== s
                ? ((n = (0, i.jsx)(p.AB, { error: k, onRetry: s })), (x[17] = k), (x[18] = s), (x[19] = n))
                : (n = x[19]),
              x[20] !== t || x[21] !== n
                ? ((r = (0, i.jsxs)("div", {
                    className: "m-auto flex w-full max-w-xl flex-col gap-4 px-8 py-20",
                    children: [t, n],
                  })),
                  (x[20] = t),
                  (x[21] = n),
                  (x[22] = r))
                : (r = x[22]),
              x[23] !== w || x[24] !== r
                ? ((a = (0, i.jsx)(h.I, { onExit: w, children: r })), (x[23] = w), (x[24] = r), (x[25] = a))
                : (a = x[25]),
              a
            )
          }
          return (
            x[26] !== _ ? ((d = async () => _), (x[26] = _), (x[27] = d)) : (d = x[27]),
            x[28] !== b ||
            x[29] !== P ||
            x[30] !== v ||
            x[31] !== _ ||
            x[32] !== y ||
            x[33] !== j ||
            x[34] !== w ||
            x[35] !== d
              ? ((g = (0, i.jsx)(m, {
                  accountId: b,
                  manager: y,
                  initialFeedId: _,
                  getFeedId: d,
                  existingFeedName: v,
                  configuration: P,
                  onBack: j,
                  onClose: w,
                })),
                (x[28] = b),
                (x[29] = P),
                (x[30] = v),
                (x[31] = _),
                (x[32] = y),
                (x[33] = j),
                (x[34] = w),
                (x[35] = d),
                (x[36] = g))
              : (g = x[36]),
            g
          )
        },
      },
    )
  },
  B7Dw(e, t, s) {
    var i = s("ABep"),
      n = s("QosV"),
      r = s("oyxz"),
      l = s("Sm6l"),
      a = s("DcH0"),
      o = s("b8rs"),
      d = s("VVBW")
    function u(e) {
      return (0, i.jsx)(
        "div",
        {
          className: "h-75 w-40 shrink-0",
          children: (0, i.jsx)(a._, { animate: !1, variant: "prominent", className: "size-40 rounded-2xl" }),
        },
        e,
      )
    }
    s.d(
      t,
      {},
      {
        H: function (e) {
          let t,
            s,
            a,
            c,
            f,
            p,
            h,
            m,
            g,
            x,
            b,
            y = (0, n.c)(18),
            { manager: _, onClose: v } = e
          return (
            y[0] !== _
              ? ((t = (0, i.jsx)("div", {
                  className: "h-132 overflow-hidden opacity-30",
                  children: (0, i.jsx)(o.G, { manager: _, showMediaPlaceholder: !0 }),
                })),
                (y[0] = _),
                (y[1] = t))
              : (t = y[1]),
            y[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((s = (0, i.jsx)("h2", {
                  className: "px-6 py-3 text-heading-md leading-tight font-medium opacity-30",
                  children: (0, i.jsx)(r.A, {
                    id: "businessProfiles.feeds.processingProducts",
                    defaultMessage: "Products",
                  }),
                })),
                (y[2] = s))
              : (s = y[2]),
            y[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (0, i.jsx)("div", { className: "flex gap-3 px-6 pb-4", children: [0, 1, 2].map(u) })), (y[3] = a))
              : (a = y[3]),
            y[4] !== t
              ? ((c = (0, i.jsxs)("div", {
                  className: "mx-auto -mt-48 w-full max-w-sm overflow-hidden rounded-3xl bg-surface-card",
                  children: [t, s, a],
                })),
                (y[4] = t),
                (y[5] = c))
              : (c = y[5]),
            y[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((f = (0, i.jsx)("div", {
                  className:
                    "pointer-events-none absolute inset-x-0 top-0 h-86 bg-linear-to-b from-surface-tertiary to-transparent",
                })),
                (y[6] = f))
              : (f = y[6]),
            y[7] !== c
              ? ((p = (0, i.jsxs)("div", {
                  inert: !0,
                  "aria-hidden": !0,
                  className: "relative h-full overflow-hidden bg-surface-tertiary",
                  children: [c, f],
                })),
                (y[7] = c),
                (y[8] = p))
              : (p = y[8]),
            y[9] === Symbol.for("react.memo_cache_sentinel")
              ? ((h = (0, i.jsx)("h1", {
                  className: "text-heading-lg leading-tight font-normal md:text-heading-app",
                  children: (0, i.jsx)(r.A, {
                    id: "businessProfiles.feeds.uploadProcessing",
                    defaultMessage: "We\u2019re processing your products",
                  }),
                })),
                (y[9] = h))
              : (h = y[9]),
            y[10] === Symbol.for("react.memo_cache_sentinel")
              ? ((m = (0, i.jsxs)("div", {
                  role: "status",
                  className: "flex flex-col gap-1.5",
                  children: [
                    h,
                    (0, i.jsx)("p", {
                      className: "text-sm leading-5 text-secondary",
                      children: (0, i.jsx)(r.A, {
                        id: "businessProfiles.feeds.uploadProcessingDescription",
                        defaultMessage:
                          "Your products are being checked before they can appear on your business profile. This may take a few minutes to a few hours.",
                      }),
                    }),
                  ],
                })),
                (y[10] = m))
              : (m = y[10]),
            y[11] === Symbol.for("react.memo_cache_sentinel")
              ? ((g = (0, i.jsx)(r.A, {
                  id: "businessProfiles.feeds.uploadBackToBusiness",
                  defaultMessage: "Back to business page",
                })),
                (y[11] = g))
              : (g = y[11]),
            y[12] !== v
              ? ((x = (0, i.jsx)("div", {
                  className: "flex min-h-full flex-col bg-surface-card",
                  children: (0, i.jsxs)("div", {
                    className: "m-auto flex w-full max-w-xl flex-col items-start gap-12 px-8 py-20 select-none",
                    children: [
                      m,
                      (0, i.jsx)(l.$, {
                        type: "button",
                        color: "primary",
                        size: "formAction",
                        radius: "full",
                        onClick: v,
                        children: g,
                      }),
                    ],
                  }),
                })),
                (y[12] = v),
                (y[13] = x))
              : (x = y[13]),
            y[14] !== v || y[15] !== x || y[16] !== p
              ? ((b = (0, i.jsx)(d.I, { onExit: v, completed: !0, preview: p, children: x })),
                (y[14] = v),
                (y[15] = x),
                (y[16] = p),
                (y[17] = b))
              : (b = y[17]),
            b
          )
        },
      },
    )
  },
  DZTm(e, t, s) {
    s.d(
      t,
      {},
      {
        l: async function () {
          return (await s.e(256186).then(s.bind(s, "jqO9"))).MerchantAgreementForm
        },
        x: async function () {
          return (await Promise.all([s.e(734039), s.e(380966)]).then(s.bind(s, "HFjV"))).MerchantSettingsPage
        },
      },
    )
  },
  BSnr(e, t, s) {
    s.d(t, { X: () => l })
    var i = s("ABep"),
      n = s("QosV"),
      r = s("on57")
    let l = Object.assign(
      function (e) {
        let t,
          s,
          l = (0, n.c)(6),
          { children: a, id: o, className: d } = e
        return (
          l[0] !== d ? ((t = (0, r.A)("flex flex-col", d)), (l[0] = d), (l[1] = t)) : (t = l[1]),
          l[2] !== a || l[3] !== o || l[4] !== t
            ? ((s = (0, i.jsx)("section", { id: o, className: t, children: a })),
              (l[2] = a),
              (l[3] = o),
              (l[4] = t),
              (l[5] = s))
            : (s = l[5]),
          s
        )
      },
      {
        Header: function (e) {
          let t,
            s,
            l,
            a,
            o,
            d,
            u,
            c = (0, n.c)(33),
            {
              title: f,
              subtitle: p,
              actions: h,
              actionsAlignment: m,
              className: g,
              size: x,
              showDivider: b,
              titleGap: y,
              spacing: _,
              subtitlePlacement: v,
              subtitleWrap: j,
            } = e,
            w = void 0 === x ? "default" : x,
            A = void 0 === _ ? "default" : _,
            S = void 0 === v ? "below-title" : v,
            P = void 0 === j ? "balance" : j,
            k = null != f,
            C = null != p,
            M = null != h,
            N = "compact" === w
          c[0] !== N || c[1] !== p || c[2] !== S || c[3] !== P
            ? ((t = p
                ? (0, i.jsx)("div", {
                    className: (0, r.A)(
                      "font-normal text-secondary group-data-[density=compact]/settings:text-wrap",
                      "balance" === P ? "text-balance" : "text-wrap",
                      N ? "text-xs leading-4" : "text-sm leading-[18px]",
                      "below-header" === S && "w-full",
                    ),
                    children: p,
                  })
                : null),
              (c[0] = N),
              (c[1] = p),
              (c[2] = S),
              (c[3] = P),
              (c[4] = t))
            : (t = c[4])
          let q = t
          if (!k && !C && !M) {
            let e
            return (
              c[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, i.jsx)(i.Fragment, {})), (c[5] = e))
                : (e = c[5]),
              e
            )
          }
          let R =
              k && (void 0 === b || b) && "[[data-settings-panel]_&]:border-b [[data-settings-panel]_&]:border-default",
            I = "below-header" === S ? "flex-wrap gap-x-4 gap-y-0.5" : "gap-4",
            T = C && "compact" === A && "pb-2",
            E = C && "compact" !== A && "pb-3"
          c[6] !== g ||
          c[7] !== C ||
          c[8] !== N ||
          c[9] !== A ||
          c[10] !== T ||
          c[11] !== E ||
          c[12] !== R ||
          c[13] !== I
            ? ((s = (0, r.A)(
                "flex justify-between group-data-[density=compact]/settings:min-h-0 group-data-[density=compact]/settings:pb-3",
                R,
                I,
                T,
                E,
                !C && (0, r.A)("items-center pb-1.5", "compact" === A ? "min-h-8" : "min-h-toolbar"),
                C && N && "items-center",
                C && !N && "items-start",
                g,
              )),
              (c[6] = g),
              (c[7] = C),
              (c[8] = N),
              (c[9] = A),
              (c[10] = T),
              (c[11] = E),
              (c[12] = R),
              (c[13] = I),
              (c[14] = s))
            : (s = c[14])
          let F =
            "none" === (void 0 === y ? "default" : y)
              ? "gap-0"
              : "gap-0.5 group-data-[density=compact]/settings:gap-0.75"
          ;(c[15] !== F ? ((l = (0, r.A)("flex min-w-0 flex-1 flex-col", F)), (c[15] = F), (c[16] = l)) : (l = c[16]),
            c[17] !== C || c[18] !== w || c[19] !== f
              ? ((a = f
                  ? (0, i.jsx)("div", {
                      className: (0, r.A)(
                        "font-medium text-default group-data-[density=compact]/settings:text-lg group-data-[density=compact]/settings:leading-5",
                        "compact" === w && "text-sm leading-[18px]",
                        ("large" === w || ("default" === w && C)) && "text-lg",
                        ("base" === w || ("default" === w && !C)) && "text-base",
                      ),
                      children: f,
                    })
                  : null),
                (c[17] = C),
                (c[18] = w),
                (c[19] = f),
                (c[20] = a))
              : (a = c[20]))
          let U = "below-title" === S ? q : null
          ;(c[21] !== l || c[22] !== a || c[23] !== U
            ? ((o = (0, i.jsxs)("div", { className: l, children: [a, U] })),
              (c[21] = l),
              (c[22] = a),
              (c[23] = U),
              (c[24] = o))
            : (o = c[24]),
            c[25] !== h || c[26] !== m
              ? ((d = h
                  ? (0, i.jsx)("div", {
                      className: (0, r.A)("flex items-center gap-2", "end" === m && "self-end"),
                      children: h,
                    })
                  : null),
                (c[25] = h),
                (c[26] = m),
                (c[27] = d))
              : (d = c[27]))
          let D = "below-header" === S ? q : null
          return (
            c[28] !== s || c[29] !== o || c[30] !== d || c[31] !== D
              ? ((u = (0, i.jsxs)("div", { className: s, children: [o, d, D] })),
                (c[28] = s),
                (c[29] = o),
                (c[30] = d),
                (c[31] = D),
                (c[32] = u))
              : (u = c[32]),
            u
          )
        },
        Content: function (e) {
          let t,
            s,
            l = (0, n.c)(5),
            { children: a, className: o } = e
          return (
            l[0] !== o ? ((t = (0, r.A)("flex flex-col gap-1.5", o)), (l[0] = o), (l[1] = t)) : (t = l[1]),
            l[2] !== a || l[3] !== t
              ? ((s = (0, i.jsx)("div", { className: t, children: a })), (l[2] = a), (l[3] = t), (l[4] = s))
              : (s = l[4]),
            s
          )
        },
        Footer: function (e) {
          let t,
            s,
            l = (0, n.c)(6),
            { children: a, className: o, variant: d } = e,
            u =
              "action" === (void 0 === d ? "description" : d)
                ? "pt-4 text-sm leading-5"
                : "px-4 pt-1.5 text-xs leading-4"
          return (
            l[0] !== o || l[1] !== u
              ? ((t = (0, r.A)("text-balance text-secondary", u, o)), (l[0] = o), (l[1] = u), (l[2] = t))
              : (t = l[2]),
            l[3] !== a || l[4] !== t
              ? ((s = (0, i.jsx)("div", { className: t, children: a })), (l[3] = a), (l[4] = t), (l[5] = s))
              : (s = l[5]),
            s
          )
        },
      },
    )
  },
  qUxy(e, t, s) {
    let i = (0, s("ESTr").a)({
      name: "photo-badge-plus-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 2.060547, y: 2.512695, width: 13.111328, height: 11.839844 },
        visualBounds: { x: 2.060547, y: 2.512695, width: 13.111328, height: 11.839844 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.060547, y: 2.512695, width: 13.111328, height: 11.839844 },
        center: { x: 8.616211, y: 8.432617 },
        insets: { top: 2.512695, right: 0.828125, bottom: 1.647461, left: 2.060547 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.616211, y: 8.432617 }, foreground: { x: 8.616211, y: 8.432617 } },
      },
      capabilities: ["icon"],
      body: '<path d="M12.6465 9.30176C12.9363 9.30176 13.1717 9.53739 13.1719 9.82715V11.3018H14.6465C14.9363 11.3018 15.1717 11.5374 15.1719 11.8271C15.1719 12.1171 14.9364 12.3525 14.6465 12.3525H13.1719V13.8271C13.1719 14.1171 12.9364 14.3525 12.6465 14.3525C12.3565 14.3525 12.1211 14.1171 12.1211 13.8271V12.3525H10.6465C10.3565 12.3525 10.1211 12.1171 10.1211 11.8271C10.1213 11.5374 10.3567 11.3018 10.6465 11.3018H12.1211V9.82715C12.1213 9.53739 12.3567 9.30176 12.6465 9.30176Z" fill="currentColor"/> <path d="M11.5459 2.5127C12.8666 2.5127 13.9373 3.58363 13.9375 4.9043V7.05273C13.9375 7.34258 13.7029 7.57795 13.4131 7.57812C13.1231 7.57812 12.8877 7.34268 12.8877 7.05273V4.9043C12.8874 4.16352 12.2867 3.56348 11.5459 3.56348H4.45215C3.71153 3.56372 3.11158 4.16368 3.11133 4.9043V8.96777L3.68945 8.38965C4.54529 7.53382 5.93315 7.53394 6.78906 8.38965L8.36328 9.96387C8.56831 10.1689 8.56831 10.501 8.36328 10.7061C8.15824 10.9108 7.82604 10.911 7.62109 10.7061L6.04688 9.13184C5.60101 8.68618 4.87743 8.68605 4.43164 9.13184L3.12793 10.4355C3.123 10.4405 3.1164 10.4436 3.11133 10.4482V10.7949C3.11133 11.5358 3.71138 12.1365 4.45215 12.1367H8.04004C8.32997 12.1367 8.56543 12.3722 8.56543 12.6621C8.56533 12.952 8.32991 13.1865 8.04004 13.1865H4.45215C3.13148 13.1863 2.06055 12.1157 2.06055 10.7949V4.9043C2.06079 3.58378 3.13163 2.51294 4.45215 2.5127H11.5459Z" fill="currentColor"/> <path d="M9.84277 4.55762C10.8966 4.55781 11.7509 5.41296 11.751 6.4668C11.7508 7.5205 10.8965 8.3748 9.84277 8.375C8.7889 8.375 7.93379 7.52063 7.93359 6.4668C7.93364 5.41284 8.78881 4.55762 9.84277 4.55762ZM9.84277 5.6084C9.36871 5.6084 8.98442 5.99274 8.98438 6.4668C8.98457 6.94073 9.3688 7.3252 9.84277 7.3252C10.3166 7.325 10.701 6.94061 10.7012 6.4668C10.7011 5.99286 10.3167 5.60859 9.84277 5.6084Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    s.d(t, {}, { r: i })
  },
}
//# sourceMappingURL=567441.c6f350f128.js.map
