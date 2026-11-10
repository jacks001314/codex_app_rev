import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  HO as i,
  IO as a,
  JO as o,
  KO as s,
  LNt as c,
  LO as l,
  PBt as u,
  Qst as d,
  RO as f,
  TY as p,
  WO as ee,
  XOt as te,
  Y3 as ne,
  YOt as m,
  Z3 as re,
  ZSt as h,
  ck as ie,
  jH as g,
  okt as ae,
  qO as oe,
  rk as se,
  sct as _,
  tk as v,
  tkt as y,
  w_t as ce,
  zO as le,
} from "./app-shared-2feb3d4c6fcc.js";
import { $Ln as b, QLn as ue, ZLn as de, h5n as fe, p5n as pe } from "./app-initial-ad16eaadf81f.js";
function x(e) {
  let n = (0, ge.c)(90),
    { onImport: r, onClose: i } = e,
    o = t(d),
    c = ae(),
    u = (0, S.useId)(),
    [p, te] = (0, S.useState)(`notion`),
    [m, re] = (0, S.useState)(`markdown`),
    [h, ie] = (0, S.useState)(``),
    [g, se] = (0, S.useState)(``),
    [_, v] = (0, S.useState)(null),
    [b, pe] = (0, S.useState)(null),
    [x, T] = (0, S.useState)(),
    [E, _e] = (0, S.useState)(!1),
    [D, ve] = (0, S.useState)(!1),
    O = (0, S.useRef)(null),
    k = _ === `imported`,
    A = m === `url` ? g : h,
    j = m === `url` && b != null && b.connections.length > 1 && x == null,
    M;
  n[0] !== b || n[1] !== x
    ? ((M =
        b?.connections.find((e) => e.link_id === x) ??
        (b?.connections.length === 1 ? b.connections[0] : void 0)),
      (n[0] = b),
      (n[1] = x),
      (n[2] = M))
    : (M = n[2]);
  let N = M,
    P = b?.code === `notion_reauth_required` || N?.reauth_required === !0,
    F,
    I;
  (n[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = () => () => O.current?.abort()), (I = []), (n[3] = F), (n[4] = I))
    : ((F = n[3]), (I = n[4])),
    (0, S.useEffect)(F, I));
  let L;
  n[5] !== i || n[6] !== D
    ? ((L = (e) => {
        !e && !D && i();
      }),
      (n[5] = i),
      (n[6] = D),
      (n[7] = L))
    : (L = n[7]);
  let R;
  n[8] !== E ||
  n[9] !== m ||
  n[10] !== k ||
  n[11] !== x ||
  n[12] !== j ||
  n[13] !== r ||
  n[14] !== D ||
  n[15] !== p ||
  n[16] !== A
    ? ((R = (e) => {
        if ((e.preventDefault(), k || D || E || j || O.current != null || A.trim() === ``)) return;
        if (new TextEncoder().encode(A).byteLength > 262144) {
          v(`too_large`);
          return;
        }
        let t = new AbortController();
        ((O.current = t),
          ve(!0),
          v(null),
          r(
            {
              provider: p,
              format: m,
              content: A,
              idempotency_key: crypto.randomUUID(),
              ...(m === `url` ? { link_id: x } : {}),
            },
            AbortSignal.any([t.signal, AbortSignal.timeout(6e4)]),
          )
            .then(
              (e) => {
                t.signal.aborted ||
                  (typeof e == `object`
                    ? (pe(e.connection),
                      T((t) => (e.connection.connections.some((e) => e.link_id === t) ? t : void 0)))
                    : v(e));
              },
              () => {
                t.signal.aborted || v(`failed`);
              },
            )
            .finally(() => {
              O.current === t && ((O.current = null), t.signal.aborted || ve(!1));
            }));
      }),
      (n[8] = E),
      (n[9] = m),
      (n[10] = k),
      (n[11] = x),
      (n[12] = j),
      (n[13] = r),
      (n[14] = D),
      (n[15] = p),
      (n[16] = A),
      (n[17] = R))
    : (R = n[17]);
  let z;
  n[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, C.jsx)(f, {
        title: (0, C.jsx)(oe, {
          children: (0, C.jsx)(y, {
            id: `codex.pages.import.title`,
            defaultMessage: `Import page`,
            description: `Title of the dialog for importing pasted content as a new Page`,
          }),
        }),
      })),
      (n[18] = z))
    : (z = n[18]);
  let ye;
  n[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ye = (0, C.jsxs)(le, {
        className: `gap-2`,
        children: [
          z,
          (0, C.jsx)(s, {
            children: (0, C.jsx)(y, {
              id: `codex.pages.import.description`,
              defaultMessage: `Paste exported content or a Notion page link to create a new page in this space`,
              description: `Instructions in the Import page dialog: paste exported Markdown or a Notion page URL to create a new Page in the current Space`,
            }),
          }),
        ],
      })),
      (n[19] = ye))
    : (ye = n[19]);
  let be;
  n[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((be = (0, C.jsx)(y, {
        id: `codex.pages.import.provider`,
        defaultMessage: `Provider`,
        description: `Label for selecting the source application of imported Page content`,
      })),
      (n[20] = be))
    : (be = n[20]);
  let B;
  n[21] === c ? (B = n[22]) : ((B = c.formatMessage(w.providerLabel)), (n[21] = c), (n[22] = B));
  let xe = D || k || E,
    Se;
  n[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Se = [{ value: `notion`, label: `Notion` }]), (n[23] = Se))
    : (Se = n[23]);
  let Ce;
  n[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ce = (e) => {
        (te(e), v(null));
      }),
      (n[24] = Ce))
    : (Ce = n[24]);
  let V;
  n[25] !== p || n[26] !== xe || n[27] !== B
    ? ((V = (0, C.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [be, (0, C.jsx)(he, { label: B, disabled: xe, options: Se, value: p, onChange: Ce })],
      })),
      (n[25] = p),
      (n[26] = xe),
      (n[27] = B),
      (n[28] = V))
    : (V = n[28]);
  let we;
  n[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((we = (0, C.jsx)(y, {
        id: `codex.pages.import.format`,
        defaultMessage: `Format`,
        description: `Label for selecting the format of exported Page content`,
      })),
      (n[29] = we))
    : (we = n[29]);
  let H;
  n[30] === c ? (H = n[31]) : ((H = c.formatMessage(w.formatLabel)), (n[30] = c), (n[31] = H));
  let Te = D || k || E,
    Ee;
  n[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ee = [
        { value: `markdown`, label: `Markdown` },
        { value: `url`, label: `URL` },
      ]),
      (n[32] = Ee))
    : (Ee = n[32]);
  let De;
  n[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((De = (e) => {
        (re(e), v(null));
      }),
      (n[33] = De))
    : (De = n[33]);
  let U;
  n[34] !== m || n[35] !== H || n[36] !== Te
    ? ((U = (0, C.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [we, (0, C.jsx)(he, { label: H, disabled: Te, options: Ee, value: m, onChange: De })],
      })),
      (n[34] = m),
      (n[35] = H),
      (n[36] = Te),
      (n[37] = U))
    : (U = n[37]);
  let W;
  n[38] !== E ||
  n[39] !== b ||
  n[40] !== h ||
  n[41] !== m ||
  n[42] !== k ||
  n[43] !== c ||
  n[44] !== x ||
  n[45] !== D ||
  n[46] !== P ||
  n[47] !== N?.link_id ||
  n[48] !== _ ||
  n[49] !== o ||
  n[50] !== u ||
  n[51] !== g
    ? ((W =
        m === `url`
          ? (0, C.jsxs)(C.Fragment, {
              children: [
                (0, C.jsx)(de, {
                  autoFocus: !0,
                  type: `url`,
                  "aria-label": c.formatMessage({
                    id: `codex.pages.import.urlLabel`,
                    defaultMessage: `Notion page URL`,
                    description: `Accessible label for the URL input in Import page; paste the Notion page link to create a new Page`,
                  }),
                  "aria-describedby": _ == null ? void 0 : u,
                  readOnly: k || D || E,
                  maxLength: 2048,
                  value: g,
                  onChange: (e) => {
                    (se(e.target.value), v(null));
                  },
                }),
                (0, C.jsx)(`p`, {
                  className: `text-secondary select-none`,
                  children: (0, C.jsx)(y, {
                    id: `codex.pages.import.urlLimitations`,
                    defaultMessage: `Imports text using your Notion connection. Toggles and columns become linear content, and colors are omitted. Comments, history, and permissions are not imported. Pages with images or files cannot be imported.`,
                    description: `Limitations of the text-only Notion URL importer; media and unverifiable source snapshots are rejected instead of creating partial pages`,
                  }),
                }),
                b == null
                  ? null
                  : (0, C.jsxs)(`div`, {
                      className: `flex flex-col gap-2`,
                      children: [
                        b.connections.length > 1
                          ? (0, C.jsx)(he, {
                              label: c.formatMessage({
                                id: `codex.pages.import.connectionLabel`,
                                defaultMessage: `Notion connection`,
                                description: `Accessible label for choosing which connected Notion account reads the source page in Import page`,
                              }),
                              disabled: D || k || E,
                              options: [
                                {
                                  value: ``,
                                  label: c.formatMessage({
                                    id: `codex.pages.import.chooseConnection`,
                                    defaultMessage: `Choose a Notion connection`,
                                    description: `Placeholder in Import page when several connected Notion accounts require the user to choose one before importing`,
                                  }),
                                },
                                ...b.connections.map(me),
                              ],
                              value: x ?? ``,
                              onChange: (e) => {
                                (T(e || void 0), v(null));
                              },
                            })
                          : null,
                        b.code === `notion_connection_required` || P
                          ? (0, C.jsx)(ne, {
                              color: `secondary`,
                              disabled: D || k || E,
                              type: `button`,
                              onClick: () => {
                                let e = new AbortController();
                                ((O.current = e),
                                  _e(!0),
                                  fe(o, {
                                    connectorId: b.app_id,
                                    hostId: ce,
                                    oauthPresentation: `popup`,
                                    productSku: `CODEX`,
                                    payload: { requireAuth: !0, reauthLinkId: P ? N?.link_id : void 0 },
                                    signal: e.signal,
                                  })
                                    .then(
                                      (t) => {
                                        !e.signal.aborted && t.didConnect && (T(t.linkId), pe(null), v(null));
                                      },
                                      () => {
                                        e.signal.aborted || v(`failed`);
                                      },
                                    )
                                    .finally(() => {
                                      O.current === e && ((O.current = null), e.signal.aborted || _e(!1));
                                    }));
                              },
                              children: P
                                ? (0, C.jsx)(y, {
                                    id: `codex.pages.import.reconnect`,
                                    defaultMessage: `Reconnect Notion`,
                                    description: `Button in Import page that refreshes authorization for the selected Notion account before retrying the import`,
                                  })
                                : (0, C.jsx)(y, {
                                    id: `codex.pages.import.connect`,
                                    defaultMessage: `Connect Notion`,
                                    description: `Button in Import page that opens Notion consent and connection setup before retrying the import`,
                                  }),
                            })
                          : null,
                      ],
                    }),
              ],
            })
          : (0, C.jsx)(ue, {
              autoFocus: !0,
              "aria-label": c.formatMessage(w.contentLabel),
              "aria-describedby": _ == null ? void 0 : u,
              readOnly: k || D,
              rows: 10,
              spellCheck: !1,
              value: h,
              variant: `code`,
              onChange: (e) => {
                (ie(e.target.value), v(null));
              },
            })),
      (n[38] = E),
      (n[39] = b),
      (n[40] = h),
      (n[41] = m),
      (n[42] = k),
      (n[43] = c),
      (n[44] = x),
      (n[45] = D),
      (n[46] = P),
      (n[47] = N?.link_id),
      (n[48] = _),
      (n[49] = o),
      (n[50] = u),
      (n[51] = g),
      (n[52] = W))
    : (W = n[52]);
  let G;
  n[53] !== k || n[54] !== _ || n[55] !== u
    ? ((G =
        _ == null
          ? null
          : (0, C.jsx)(`p`, {
              id: u,
              className: `select-none`,
              role: k ? `status` : `alert`,
              children: (0, C.jsx)(y, { ...w[_] }),
            })),
      (n[53] = k),
      (n[54] = _),
      (n[55] = u),
      (n[56] = G))
    : (G = n[56]);
  let K;
  n[57] !== V || n[58] !== U || n[59] !== W || n[60] !== G
    ? ((K = (0, C.jsxs)(le, { className: `gap-4`, spacing: `large`, children: [V, U, W, G] })),
      (n[57] = V),
      (n[58] = U),
      (n[59] = W),
      (n[60] = G),
      (n[61] = K))
    : (K = n[61]);
  let Oe = D || E,
    ke = k ? w.done : w.cancel,
    q;
  n[62] === ke ? (q = n[63]) : ((q = (0, C.jsx)(y, { ...ke })), (n[62] = ke), (n[63] = q));
  let J;
  n[64] !== i || n[65] !== Oe || n[66] !== q
    ? ((J = (0, C.jsx)(ne, { color: `secondary`, disabled: Oe, onClick: i, type: `button`, children: q })),
      (n[64] = i),
      (n[65] = Oe),
      (n[66] = q),
      (n[67] = J))
    : (J = n[67]);
  let Y;
  n[68] !== E || n[69] !== k || n[70] !== j || n[71] !== D || n[72] !== A
    ? ((Y = k || D || E || A.trim() === `` || j),
      (n[68] = E),
      (n[69] = k),
      (n[70] = j),
      (n[71] = D),
      (n[72] = A),
      (n[73] = Y))
    : (Y = n[73]);
  let Ae = D ? w.importing : w.importAction,
    X;
  n[74] === Ae ? (X = n[75]) : ((X = (0, C.jsx)(y, { ...Ae })), (n[74] = Ae), (n[75] = X));
  let Z;
  n[76] !== Y || n[77] !== X
    ? ((Z = (0, C.jsx)(ne, { color: `primary`, disabled: Y, type: `submit`, children: X })),
      (n[76] = Y),
      (n[77] = X),
      (n[78] = Z))
    : (Z = n[78]);
  let Q;
  n[79] !== J || n[80] !== Z
    ? ((Q = (0, C.jsx)(le, { spacing: `large`, children: (0, C.jsxs)(l, { children: [J, Z] }) })),
      (n[79] = J),
      (n[80] = Z),
      (n[81] = Q))
    : (Q = n[81]);
  let $;
  n[82] !== D || n[83] !== K || n[84] !== Q || n[85] !== R
    ? (($ = (0, C.jsxs)(a, { as: `form`, "aria-busy": D, onSubmit: R, children: [ye, K, Q] })),
      (n[82] = D),
      (n[83] = K),
      (n[84] = Q),
      (n[85] = R),
      (n[86] = $))
    : ($ = n[86]);
  let je;
  return (
    n[87] !== $ || n[88] !== L
      ? ((je = (0, C.jsx)(ee, { open: !0, size: `compact`, onOpenChange: L, children: $ })),
        (n[87] = $),
        (n[88] = L),
        (n[89] = je))
      : (je = n[89]),
    je
  );
}
function me(e) {
  return { value: e.link_id, label: e.label };
}
function he(e) {
  let t = (0, ge.c)(20),
    { label: n, disabled: r, options: i, value: a, onChange: o } = e,
    s;
  t[0] !== i || t[1] !== a
    ? ((s = i.find((e) => e.value === a)?.label), (t[0] = i), (t[1] = a), (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((c = (0, C.jsx)(g, {})), (t[3] = c)) : (c = t[3]);
  let l;
  t[4] !== r || t[5] !== n || t[6] !== s
    ? ((l = (0, C.jsxs)(ne, {
        className: `w-full justify-between`,
        color: `field`,
        contentLayout: `dropdown`,
        size: `field`,
        "aria-label": n,
        disabled: r,
        type: `button`,
        children: [s, c],
      })),
      (t[4] = r),
      (t[5] = n),
      (t[6] = s),
      (t[7] = l))
    : (l = t[7]);
  let u;
  if (t[8] !== o || t[9] !== i) {
    let e;
    (t[11] === o
      ? (e = t[12])
      : ((e = (e) =>
          (0, C.jsx)(
            se.RadioItem,
            { value: e.value, onSelect: () => o(e.value), children: e.label },
            e.value,
          )),
        (t[11] = o),
        (t[12] = e)),
      (u = i.map(e)),
      (t[8] = o),
      (t[9] = i),
      (t[10] = u));
  } else u = t[10];
  let d;
  t[13] !== u || t[14] !== a
    ? ((d = (0, C.jsx)(se.RadioGroup, { value: a, children: u })), (t[13] = u), (t[14] = a), (t[15] = d))
    : (d = t[15]);
  let f;
  return (
    t[16] !== r || t[17] !== l || t[18] !== d
      ? ((f = (0, C.jsx)(v, { disabled: r, matchTriggerWidth: !0, triggerButton: l, children: d })),
        (t[16] = r),
        (t[17] = l),
        (t[18] = d),
        (t[19] = f))
      : (f = t[19]),
    f
  );
}
var ge, S, C, w;
function T() {
  return (T = e(() => {
    ((ge = u()),
      h(),
      _(),
      (S = r()),
      te(),
      pe(),
      re(),
      o(),
      i(),
      ie(),
      p(),
      b(),
      n(),
      (C = c()),
      (w = m({
        source_rejected: {
          id: `codex.pages.import.sourceRejected`,
          defaultMessage: `Couldn’t read this Notion page. Check the link and your Notion access.`,
          description: `Import page error when the selected Notion account cannot access the source page; no Page was created`,
        },
        unverifiable: {
          id: `codex.pages.import.unverifiable`,
          defaultMessage: `Notion did not return a verifiable complete, current page. You can paste a Markdown export instead.`,
          description: `Import rejects a source response without verified completeness or freshness; offer the existing pasted export flow`,
        },
        providerLabel: {
          id: `codex.pages.import.providerLabel`,
          defaultMessage: `Provider`,
          description: `Accessible label for selecting the source application of Page content`,
        },
        formatLabel: {
          id: `codex.pages.import.formatLabel`,
          defaultMessage: `Format`,
          description: `Accessible label for selecting the exported Page content format`,
        },
        contentLabel: {
          id: `codex.pages.import.contentLabel`,
          defaultMessage: `Content`,
          description: `Accessible label for the field where exported Page content is pasted`,
        },
        imported: {
          id: `codex.pages.import.imported`,
          defaultMessage: `Page imported`,
          description: `Confirmation that a new Page was created from imported content`,
        },
        too_large: {
          id: `codex.pages.import.tooLarge`,
          defaultMessage: `This content is too large to import`,
          description: `Error when pasted Page content exceeds the import size limit`,
        },
        unsupported: {
          id: `codex.pages.import.unsupported`,
          defaultMessage: `This content cannot be imported with the selected provider and format`,
          description: `Error when the server rejects imported Page content or its selected format`,
        },
        rejected: {
          id: `codex.pages.import.rejected`,
          defaultMessage: `Couldn’t create a page here. Check your access and try again.`,
          description: `Error when the selected destination no longer permits Page creation`,
        },
        failed: {
          id: `codex.pages.import.failed`,
          defaultMessage: `Couldn’t confirm the import. Try again`,
          description: `Error when creation was not confirmed; retry checks the same import receipt to avoid a duplicate Page`,
        },
        done: {
          id: `codex.pages.import.done`,
          defaultMessage: `Done`,
          description: `Close the dialog after Page import succeeds`,
        },
        cancel: {
          id: `codex.pages.import.cancel`,
          defaultMessage: `Cancel`,
          description: `Close the Page import dialog without submitting content`,
        },
        importAction: {
          id: `codex.pages.import.submit`,
          defaultMessage: `Import`,
          description: `Create a new Page from the selected provider, format, and pasted content`,
        },
        importing: {
          id: `codex.pages.import.pending`,
          defaultMessage: `Importing…`,
          description: `Disabled primary button while a new Page is being imported`,
        },
      })));
  }))();
}
T();
export { x as PageImportDialog };
//# sourceMappingURL=dialog-468646d3979e.js.map
