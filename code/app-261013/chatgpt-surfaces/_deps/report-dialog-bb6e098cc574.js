import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Fat as n,
  IDt as r,
  Iot as i,
  Lot as a,
  Pat as o,
  VDt as ee,
  Xot as s,
  Yot as c,
  _Mt as te,
  _O as ne,
  cO as re,
  fO as l,
  gMt as ie,
  gO as ae,
  jDt as oe,
  lO as se,
  mO as ce,
  oO as le,
  sO as ue,
  t3 as u,
  uO as de,
  vO as fe,
  vzt as d,
  xMt as f,
  yzt as pe,
} from "./app-shared-bbfeca5e5737.js";
import {
  DPn as me,
  EPn as he,
  JPn as p,
  TPn as ge,
  XPn as _e,
  ZPn as ve,
} from "./app-initial-5851df3f6cb1.js";
function ye(e) {
  let n = (0, h.c)(111),
    {
      onBack: i,
      onClose: c,
      onCloseAutoFocus: te,
      queryKey: l,
      loadReasons: ie,
      submitReport: oe,
      openExternalForm: u,
      successBody: fe,
      title: d,
      gcTime: f,
      includeServerFields: pe,
      preventCloseWhileSubmitting: me,
      dialogVariant: p,
      contentClassName: ye,
    } = e,
    v = pe !== void 0 && pe,
    Te = me !== void 0 && me,
    Ee = ee(),
    y;
  n[0] === f ? (y = n[1]) : ((y = f == null ? {} : { gcTime: f }), (n[0] = f), (n[1] = y));
  let b;
  n[2] !== ie || n[3] !== l || n[4] !== y
    ? ((b = { queryKey: l, queryFn: ie, ...y, staleTime: o.ONE_MINUTE }),
      (n[2] = ie),
      (n[3] = l),
      (n[4] = y),
      (n[5] = b))
    : (b = n[5]);
  let { data: x, isPending: S, isError: C } = s(b),
    w;
  n[6] === oe ? (w = n[7]) : ((w = { mutationFn: oe }), (n[6] = oe), (n[7] = w));
  let T = a(w),
    [E, De] = (0, g.useState)(``),
    D;
  n[8] === Symbol.for(`react.memo_cache_sentinel`) ? ((D = {}), (n[8] = D)) : (D = n[8]);
  let [O, k] = (0, g.useState)(D),
    [A, Oe] = (0, g.useState)(null),
    j;
  n[9] === Symbol.for(`react.memo_cache_sentinel`) ? ((j = []), (n[9] = j)) : (j = n[9]);
  let [M, ke] = (0, g.useState)(j),
    N = M.length === 0 ? null : M[M.length - 1],
    P,
    F,
    I,
    L,
    R,
    Ae,
    z;
  n[10] !== N || n[11] !== v || n[12] !== x?.reasons || n[13] !== A
    ? ((z = (N == null ? x?.reasons : N.sub_reasons) ?? []),
      (R = z.find((e) => e.id === A) ?? null),
      (P = N?.details_placeholder != null || (v && N?.has_details === !0)),
      (F = P || (v && (N?.additional_fields?.length ?? 0) > 0)),
      (L = N?.link_attachment != null),
      (I = N?.subtext != null && z.length === 0 && !F && !L),
      (Ae = F || (R != null && we(R, v))),
      (n[10] = N),
      (n[11] = v),
      (n[12] = x?.reasons),
      (n[13] = A),
      (n[14] = P),
      (n[15] = F),
      (n[16] = I),
      (n[17] = L),
      (n[18] = R),
      (n[19] = Ae),
      (n[20] = z))
    : ((P = n[14]), (F = n[15]), (I = n[16]), (L = n[17]), (R = n[18]), (Ae = n[19]), (z = n[20]));
  let je = Ae,
    Me = R == null || S || T.isPending,
    B = T.isSuccess || C,
    Ne = !B && !je && !L && Me,
    Pe;
  n[21] !== c || n[22] !== Te || n[23] !== T.isPending
    ? ((Pe = (e) => {
        !e && (!Te || !T.isPending) && c();
      }),
      (n[21] = c),
      (n[22] = Te),
      (n[23] = T.isPending),
      (n[24] = Pe))
    : (Pe = n[24]);
  let Fe = Pe,
    Ie;
  n[25] !== N || n[26] !== i || n[27] !== M
    ? ((Ie = () => {
        if (N == null) {
          i?.();
          return;
        }
        let e = M[M.length - 1];
        (ke(be), Oe(e?.id ?? null), De(``), k({}));
      }),
      (n[25] = N),
      (n[26] = i),
      (n[27] = M),
      (n[28] = Ie))
    : (Ie = n[28]);
  let Le = Ie,
    Re;
  n[29] !== N ||
  n[30] !== O ||
  n[31] !== E ||
  n[32] !== v ||
  n[33] !== F ||
  n[34] !== I ||
  n[35] !== L ||
  n[36] !== c ||
  n[37] !== u ||
  n[38] !== T ||
  n[39] !== R ||
  n[40] !== M ||
  n[41] !== B
    ? ((Re = (e) => {
        if ((e.preventDefault(), !T.isPending && (!v || e.currentTarget.reportValidity()))) {
          if (B) {
            c();
            return;
          }
          if (!I) {
            if (L && N?.link_attachment != null) {
              if (u != null) {
                u(N.link_attachment);
                return;
              }
              ve({
                href: N.link_attachment,
                initiator: `open_in_browser_bridge`,
                openTarget: `external-browser`,
              });
              return;
            }
            if (F && N != null) {
              T.mutate({ details: E.trim(), reason: N, path: M, ...(v ? { additionalFields: O } : {}) });
              return;
            }
            if (R != null) {
              if (we(R, v)) {
                T.mutate({ details: ``, reason: R, path: [...M, R] });
                return;
              }
              (ke((e) => [...e, R]), Oe(null), De(``), k({}));
            }
          }
        }
      }),
      (n[29] = N),
      (n[30] = O),
      (n[31] = E),
      (n[32] = v),
      (n[33] = F),
      (n[34] = I),
      (n[35] = L),
      (n[36] = c),
      (n[37] = u),
      (n[38] = T),
      (n[39] = R),
      (n[40] = M),
      (n[41] = B),
      (n[42] = Re))
    : (Re = n[42]);
  let ze = Re,
    Be;
  n[43] !== N || n[44] !== u
    ? ((Be = (e) => {
        if (N?.link_attachment != null) {
          if (u != null) {
            u(N.link_attachment);
            return;
          }
          _e({
            event: e,
            href: N.link_attachment,
            initiator: `open_in_browser_bridge`,
            openTarget: `external-browser`,
          });
        }
      }),
      (n[43] = N),
      (n[44] = u),
      (n[45] = Be))
    : (Be = n[45]);
  let Ve = Be,
    He;
  n[46] !== N || n[47] !== x || n[48] !== T.isSuccess
    ? ((He = Ce({ activeReason: N, reportReasons: x, isSuccess: T.isSuccess })),
      (n[46] = N),
      (n[47] = x),
      (n[48] = T.isSuccess),
      (n[49] = He))
    : (He = n[49]);
  let Ue = He,
    V;
  n[50] === te ? (V = n[51]) : ((V = { onCloseAutoFocus: te }), (n[50] = te), (n[51] = V));
  let H;
  n[52] !== T.isSuccess || n[53] !== d
    ? ((H = T.isSuccess
        ? (0, _.jsx)(r, {
            id: `codexThreadReportDialog.successTitle`,
            defaultMessage: `Thanks for your report`,
            description: `Title shown after a safety or legal report is submitted`,
          })
        : d),
      (n[52] = T.isSuccess),
      (n[53] = d),
      (n[54] = H))
    : (H = n[54]);
  let U;
  n[55] === H ? (U = n[56]) : ((U = (0, _.jsx)(ne, { children: H })), (n[55] = H), (n[56] = U));
  let W;
  n[57] === Ue
    ? (W = n[58])
    : ((W = Ue == null ? void 0 : (0, _.jsx)(ae, { children: Ue })), (n[57] = Ue), (n[58] = W));
  let G;
  n[59] !== U || n[60] !== W
    ? ((G = (0, _.jsx)(se, { children: (0, _.jsx)(re, { title: U, subtitle: W, titleSize: `dialog` }) })),
      (n[59] = U),
      (n[60] = W),
      (n[61] = G))
    : (G = n[61]);
  let K;
  n[62] !== N ||
  n[63] !== O ||
  n[64] !== E ||
  n[65] !== P ||
  n[66] !== v ||
  n[67] !== Ee ||
  n[68] !== F ||
  n[69] !== I ||
  n[70] !== L ||
  n[71] !== S ||
  n[72] !== C ||
  n[73] !== T.isSuccess ||
  n[74] !== A ||
  n[75] !== fe ||
  n[76] !== z
    ? ((K = T.isSuccess
        ? (0, _.jsx)(m, {
            children:
              fe ??
              (0, _.jsx)(r, {
                id: `codexThreadReportDialog.successBody`,
                defaultMessage: `Our team will review the content to determine if it violates our policies`,
                description: `Body shown after a Codex thread safety or legal report is submitted`,
              }),
          })
        : S
          ? (0, _.jsx)(m, {
              children: (0, _.jsx)(r, {
                id: `codexThreadReportDialog.loading`,
                defaultMessage: `Loading reporting options…`,
                description: `Loading text while Codex thread report reasons are fetched`,
              }),
            })
          : C
            ? (0, _.jsx)(m, {
                children: (0, _.jsx)(r, {
                  id: `codexThreadReportDialog.loadError`,
                  defaultMessage: `We couldn't load reporting options. Please try again in a moment`,
                  description: `Error text shown when Codex thread report reasons fail to load`,
                }),
              })
            : F && N != null
              ? (0, _.jsxs)(de, {
                  className: `gap-3`,
                  children: [
                    v && N.explanation != null ? (0, _.jsx)(m, { children: N.explanation }) : null,
                    P
                      ? (0, _.jsx)(he, {
                          autoFocus: !0,
                          rows: 5,
                          placeholder: N.details_placeholder ?? void 0,
                          "aria-label": Ee.formatMessage({
                            id: `codexThreadReportDialog.detailsLabel`,
                            defaultMessage: `Add details`,
                            description: `Accessible label for Codex thread report details field`,
                          }),
                          value: E,
                          onChange: (e) => {
                            De(e.target.value);
                          },
                        })
                      : null,
                    N.subtext == null ? null : (0, _.jsx)(m, { children: N.subtext }),
                    v
                      ? N.additional_fields?.map((e) => {
                          let t = `text`;
                          return (
                            e.type === `int`
                              ? (t = `number`)
                              : (e.type === `email` || e.type === `url`) && (t = e.type),
                            (0, _.jsxs)(
                              `label`,
                              {
                                className: `flex flex-col gap-2 text-sm`,
                                children: [
                                  e.placeholder,
                                  e.type === `multi_line_text`
                                    ? (0, _.jsx)(he, {
                                        required: e.required,
                                        value: O[e.id] ?? ``,
                                        onChange: (t) => k((n) => ({ ...n, [e.id]: t.target.value })),
                                      })
                                    : (0, _.jsx)(ge, {
                                        type: t,
                                        required: e.required,
                                        value: O[e.id] ?? ``,
                                        onChange: (t) => k((n) => ({ ...n, [e.id]: t.target.value })),
                                      }),
                                ],
                              },
                              e.id,
                            )
                          );
                        })
                      : null,
                  ],
                })
              : L
                ? (0, _.jsx)(m, {
                    children:
                      (v ? (N?.link_explanation ?? N?.explanation) : (N?.link_explanation ?? N?.subtext)) ??
                      (0, _.jsx)(r, {
                        id: `codexThreadReportDialog.linkBody`,
                        defaultMessage: `Open the linked form to finish this report`,
                        description: `Body shown when a Codex thread report reason needs an external form`,
                      }),
                  })
                : (0, _.jsxs)(_.Fragment, {
                    children: [
                      I ? (0, _.jsx)(m, { children: N?.subtext }) : null,
                      I ? null : (0, _.jsx)(Se, { reasons: z, selectedReasonId: A, setSelectedReasonId: Oe }),
                    ],
                  })),
      (n[62] = N),
      (n[63] = O),
      (n[64] = E),
      (n[65] = P),
      (n[66] = v),
      (n[67] = Ee),
      (n[68] = F),
      (n[69] = I),
      (n[70] = L),
      (n[71] = S),
      (n[72] = C),
      (n[73] = T.isSuccess),
      (n[74] = A),
      (n[75] = fe),
      (n[76] = z),
      (n[77] = K))
    : (K = n[77]);
  let q;
  n[78] === T.isError
    ? (q = n[79])
    : ((q = T.isError
        ? (0, _.jsx)(`p`, {
            className: `text-sm`,
            children: (0, _.jsx)(r, {
              id: `codexThreadReportDialog.submitError`,
              defaultMessage: `We couldn't submit your report. Please try again in a moment`,
              description: `Error text shown when Codex thread report submission fails`,
            }),
          })
        : null),
      (n[78] = T.isError),
      (n[79] = q));
  let J;
  n[80] !== K || n[81] !== q
    ? ((J = (0, _.jsxs)(se, { children: [K, q] })), (n[80] = K), (n[81] = q), (n[82] = J))
    : (J = n[82]);
  let Y;
  n[83] !== N || n[84] !== Le || n[85] !== i || n[86] !== T.isPending || n[87] !== T.isSuccess
    ? ((Y =
        (N != null || i != null) && !T.isSuccess
          ? (0, _.jsx)(t, {
              color: `secondary`,
              disabled: T.isPending,
              type: `button`,
              onClick: Le,
              children: (0, _.jsx)(r, {
                id: `codexThreadReportDialog.back`,
                defaultMessage: `Back`,
                description: `Back button for Codex thread report reason selection`,
              }),
            })
          : null),
      (n[83] = N),
      (n[84] = Le),
      (n[85] = i),
      (n[86] = T.isPending),
      (n[87] = T.isSuccess),
      (n[88] = Y))
    : (Y = n[88]);
  let X;
  n[89] !== Ve ||
  n[90] !== I ||
  n[91] !== L ||
  n[92] !== Ne ||
  n[93] !== je ||
  n[94] !== T.isPending ||
  n[95] !== B
    ? ((X =
        !I || B
          ? (0, _.jsx)(t, {
              color: `primary`,
              disabled: Ne,
              loading: T.isPending,
              type: L ? `button` : `submit`,
              onClick: L ? Ve : void 0,
              children: (0, _.jsx)(xe, { close: B, isLinkStep: L, isSubmitStep: je }),
            })
          : null),
      (n[89] = Ve),
      (n[90] = I),
      (n[91] = L),
      (n[92] = Ne),
      (n[93] = je),
      (n[94] = T.isPending),
      (n[95] = B),
      (n[96] = X))
    : (X = n[96]);
  let Z;
  n[97] !== Y || n[98] !== X
    ? ((Z = (0, _.jsx)(se, { children: (0, _.jsxs)(ue, { children: [Y, X] }) })),
      (n[97] = Y),
      (n[98] = X),
      (n[99] = Z))
    : (Z = n[99]);
  let Q;
  n[100] !== ze || n[101] !== G || n[102] !== J || n[103] !== Z
    ? ((Q = (0, _.jsxs)(le, { as: `form`, className: `gap-4`, onSubmit: ze, children: [G, J, Z] })),
      (n[100] = ze),
      (n[101] = G),
      (n[102] = J),
      (n[103] = Z),
      (n[104] = Q))
    : (Q = n[104]);
  let $;
  return (
    n[105] !== ye || n[106] !== p || n[107] !== Fe || n[108] !== V || n[109] !== Q
      ? (($ = (0, _.jsx)(ce, {
          open: !0,
          onOpenChange: Fe,
          contentProps: V,
          size: `wide`,
          variant: p,
          contentClassName: ye,
          children: Q,
        })),
        (n[105] = ye),
        (n[106] = p),
        (n[107] = Fe),
        (n[108] = V),
        (n[109] = Q),
        (n[110] = $))
      : ($ = n[110]),
    $
  );
}
function be(e) {
  return e.slice(0, -1);
}
function xe(e) {
  let t = (0, h.c)(4),
    { close: n, isLinkStep: i, isSubmitStep: a } = e;
  if (n) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, _.jsx)(r, {
            id: `codexThreadReportDialog.close`,
            defaultMessage: `Close`,
            description: `Close button for Codex thread report dialog`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (i) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, _.jsx)(r, {
            id: `codexThreadReportDialog.viewForm`,
            defaultMessage: `View form`,
            description: `Button label for opening an external Codex report form`,
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  if (a) {
    let e;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, _.jsx)(r, {
            id: `codexThreadReportDialog.submit`,
            defaultMessage: `Submit`,
            description: `Submit button for Codex thread report dialog`,
          })),
          (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  let o;
  return (
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((o = (0, _.jsx)(r, {
          id: `codexThreadReportDialog.next`,
          defaultMessage: `Next`,
          description: `Next button for Codex thread report reason selection`,
        })),
        (t[3] = o))
      : (o = t[3]),
    o
  );
}
function Se(e) {
  let t = (0, h.c)(12),
    { reasons: n, selectedReasonId: r, setSelectedReasonId: i } = e,
    a = ee(),
    o;
  t[0] === a
    ? (o = t[1])
    : ((o = a.formatMessage({
        id: `codexThreadReportDialog.optionsLabel`,
        defaultMessage: `Reporting options`,
        description: `Accessible label for Codex thread report reason options`,
      })),
      (t[0] = a),
      (t[1] = o));
  let s;
  if (t[2] !== n || t[3] !== r || t[4] !== i) {
    let e;
    (t[6] !== r || t[7] !== i
      ? ((e = (e) => {
          let t = r === e.id;
          return (0, _.jsx)(
            `button`,
            {
              type: `button`,
              role: `radio`,
              "aria-checked": t,
              onClick: () => {
                i(e.id);
              },
              className: ie(
                `border-default cursor-interaction rounded-lg border px-3 py-2 text-start text-sm`,
                `focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2`,
                t ? `bg-primary-solid text-primary-solid` : `text-default hover:bg-surface-elevated/60`,
              ),
              children: e.cta,
            },
            e.id,
          );
        }),
        (t[6] = r),
        (t[7] = i),
        (t[8] = e))
      : (e = t[8]),
      (s = n.map(e)),
      (t[2] = n),
      (t[3] = r),
      (t[4] = i),
      (t[5] = s));
  } else s = t[5];
  let c;
  return (
    t[9] !== o || t[10] !== s
      ? ((c = (0, _.jsx)(`div`, {
          role: `radiogroup`,
          "aria-label": o,
          className: `flex flex-col gap-2 select-none`,
          children: s,
        })),
        (t[9] = o),
        (t[10] = s),
        (t[11] = c))
      : (c = t[11]),
    c
  );
}
function m(e) {
  let t = (0, h.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, _.jsx)(`div`, { className: `text-sm text-codex-description`, children: n })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function Ce({ activeReason: e, isSuccess: t, reportReasons: n }) {
  return t ? null : e == null ? n?.header_explanation || n?.header || null : e.cta;
}
function we(e, t) {
  return (
    (!t || (!e.has_details && (e.additional_fields?.length ?? 0) === 0)) &&
    (e.sub_reasons?.length ?? 0) === 0 &&
    e.details_placeholder == null &&
    e.link_attachment == null &&
    e.subtext == null
  );
}
var h, g, _;
function v() {
  return (v = e(() => {
    ((h = d()), i(), c(), te(), (g = pe()), oe(), u(), fe(), l(), p(), me(), n(), (_ = f()));
  }))();
}
export { v as n, ye as t };
//# sourceMappingURL=report-dialog-bb6e098cc574.js.map
