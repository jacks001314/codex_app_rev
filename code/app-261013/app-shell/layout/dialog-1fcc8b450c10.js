import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ADt as n,
  AO as r,
  CO as i,
  Cot as a,
  FV as ee,
  IDt as o,
  Ixt as s,
  Pxt as c,
  TJ as l,
  TO as u,
  VDt as d,
  _O as f,
  cO as p,
  fO as m,
  gO as h,
  jDt as g,
  lO as te,
  lgt as ne,
  mO as re,
  oO as ie,
  rst as ae,
  sO as oe,
  t3 as _,
  vO as se,
  vzt as v,
  wot as ce,
  xMt as y,
  yzt as b,
} from "./app-shared-bbfeca5e5737.js";
import { DPn as x, EPn as le, N4n as ue, TPn as de, j4n as fe } from "./app-initial-5851df3f6cb1.js";
function S(e) {
  let n = (0, he.c)(90),
    { onImport: r, onClose: i } = e,
    ee = s(a),
    c = d(),
    l = (0, C.useId)(),
    [u, m] = (0, C.useState)(`notion`),
    [g, ae] = (0, C.useState)(`markdown`),
    [_, se] = (0, C.useState)(``),
    [v, ce] = (0, C.useState)(``),
    [y, b] = (0, C.useState)(null),
    [x, fe] = (0, C.useState)(null),
    [S, E] = (0, C.useState)(),
    [D, ge] = (0, C.useState)(!1),
    [O, _e] = (0, C.useState)(!1),
    k = (0, C.useRef)(null),
    A = y === `imported`,
    j = g === `url` ? v : _,
    M = g === `url` && x != null && x.connections.length > 1 && S == null,
    ve;
  n[0] !== x || n[1] !== S
    ? ((ve =
        x?.connections.find((e) => e.link_id === S) ??
        (x?.connections.length === 1 ? x.connections[0] : void 0)),
      (n[0] = x),
      (n[1] = S),
      (n[2] = ve))
    : (ve = n[2]);
  let N = ve,
    P = x?.code === `notion_reauth_required` || N?.reauth_required === !0,
    F,
    I;
  (n[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = () => () => k.current?.abort()), (I = []), (n[3] = F), (n[4] = I))
    : ((F = n[3]), (I = n[4])),
    (0, C.useEffect)(F, I));
  let L;
  n[5] !== i || n[6] !== O
    ? ((L = (e) => {
        !e && !O && i();
      }),
      (n[5] = i),
      (n[6] = O),
      (n[7] = L))
    : (L = n[7]);
  let R;
  n[8] !== D ||
  n[9] !== g ||
  n[10] !== A ||
  n[11] !== S ||
  n[12] !== M ||
  n[13] !== r ||
  n[14] !== O ||
  n[15] !== u ||
  n[16] !== j
    ? ((R = (e) => {
        if ((e.preventDefault(), A || O || D || M || k.current != null || j.trim() === ``)) return;
        if (new TextEncoder().encode(j).byteLength > 262144) {
          b(`too_large`);
          return;
        }
        let t = new AbortController();
        ((k.current = t),
          _e(!0),
          b(null),
          r(
            {
              provider: u,
              format: g,
              content: j,
              idempotency_key: crypto.randomUUID(),
              ...(g === `url` ? { link_id: S } : {}),
            },
            AbortSignal.any([t.signal, AbortSignal.timeout(6e4)]),
          )
            .then(
              (e) => {
                t.signal.aborted ||
                  (typeof e == `object`
                    ? (fe(e.connection),
                      E((t) => (e.connection.connections.some((e) => e.link_id === t) ? t : void 0)))
                    : b(e));
              },
              () => {
                t.signal.aborted || b(`failed`);
              },
            )
            .finally(() => {
              k.current === t && ((k.current = null), t.signal.aborted || _e(!1));
            }));
      }),
      (n[8] = D),
      (n[9] = g),
      (n[10] = A),
      (n[11] = S),
      (n[12] = M),
      (n[13] = r),
      (n[14] = O),
      (n[15] = u),
      (n[16] = j),
      (n[17] = R))
    : (R = n[17]);
  let ye;
  n[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ye = (0, w.jsx)(p, {
        title: (0, w.jsx)(f, {
          children: (0, w.jsx)(o, {
            id: `codex.pages.import.title`,
            defaultMessage: `Import page`,
            description: `Title of the dialog for importing pasted content as a new Page`,
          }),
        }),
      })),
      (n[18] = ye))
    : (ye = n[18]);
  let be;
  n[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((be = (0, w.jsxs)(te, {
        className: `gap-2`,
        children: [
          ye,
          (0, w.jsx)(h, {
            children: (0, w.jsx)(o, {
              id: `codex.pages.import.description`,
              defaultMessage: `Paste exported content or a Notion page link to create a new page in this space`,
              description: `Instructions in the Import page dialog: paste exported Markdown or a Notion page URL to create a new Page in the current Space`,
            }),
          }),
        ],
      })),
      (n[19] = be))
    : (be = n[19]);
  let xe;
  n[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((xe = (0, w.jsx)(o, {
        id: `codex.pages.import.provider`,
        defaultMessage: `Provider`,
        description: `Label for selecting the source application of imported Page content`,
      })),
      (n[20] = xe))
    : (xe = n[20]);
  let z;
  n[21] === c ? (z = n[22]) : ((z = c.formatMessage(T.providerLabel)), (n[21] = c), (n[22] = z));
  let Se = O || A || D,
    Ce;
  n[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ce = [{ value: `notion`, label: `Notion` }]), (n[23] = Ce))
    : (Ce = n[23]);
  let B;
  n[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (e) => {
        (m(e), b(null));
      }),
      (n[24] = B))
    : (B = n[24]);
  let V;
  n[25] !== u || n[26] !== Se || n[27] !== z
    ? ((V = (0, w.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [xe, (0, w.jsx)(me, { label: z, disabled: Se, options: Ce, value: u, onChange: B })],
      })),
      (n[25] = u),
      (n[26] = Se),
      (n[27] = z),
      (n[28] = V))
    : (V = n[28]);
  let we;
  n[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((we = (0, w.jsx)(o, {
        id: `codex.pages.import.format`,
        defaultMessage: `Format`,
        description: `Label for selecting the format of exported Page content`,
      })),
      (n[29] = we))
    : (we = n[29]);
  let H;
  n[30] === c ? (H = n[31]) : ((H = c.formatMessage(T.formatLabel)), (n[30] = c), (n[31] = H));
  let Te = O || A || D,
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
        (ae(e), b(null));
      }),
      (n[33] = De))
    : (De = n[33]);
  let U;
  n[34] !== g || n[35] !== H || n[36] !== Te
    ? ((U = (0, w.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [we, (0, w.jsx)(me, { label: H, disabled: Te, options: Ee, value: g, onChange: De })],
      })),
      (n[34] = g),
      (n[35] = H),
      (n[36] = Te),
      (n[37] = U))
    : (U = n[37]);
  let W;
  n[38] !== D ||
  n[39] !== x ||
  n[40] !== _ ||
  n[41] !== g ||
  n[42] !== A ||
  n[43] !== c ||
  n[44] !== S ||
  n[45] !== O ||
  n[46] !== P ||
  n[47] !== N?.link_id ||
  n[48] !== y ||
  n[49] !== ee ||
  n[50] !== l ||
  n[51] !== v
    ? ((W =
        g === `url`
          ? (0, w.jsxs)(w.Fragment, {
              children: [
                (0, w.jsx)(de, {
                  autoFocus: !0,
                  type: `url`,
                  "aria-label": c.formatMessage({
                    id: `codex.pages.import.urlLabel`,
                    defaultMessage: `Notion page URL`,
                    description: `Accessible label for the URL input in Import page; paste the Notion page link to create a new Page`,
                  }),
                  "aria-describedby": y == null ? void 0 : l,
                  readOnly: A || O || D,
                  maxLength: 2048,
                  value: v,
                  onChange: (e) => {
                    (ce(e.target.value), b(null));
                  },
                }),
                (0, w.jsx)(`p`, {
                  className: `text-secondary select-none`,
                  children: (0, w.jsx)(o, {
                    id: `codex.pages.import.urlLimitations`,
                    defaultMessage: `Imports text using your Notion connection. Toggles and columns become linear content, and colors are omitted. Comments, history, and permissions are not imported. Pages with images or files cannot be imported.`,
                    description: `Limitations of the text-only Notion URL importer; media and unverifiable source snapshots are rejected instead of creating partial pages`,
                  }),
                }),
                x == null
                  ? null
                  : (0, w.jsxs)(`div`, {
                      className: `flex flex-col gap-2`,
                      children: [
                        x.connections.length > 1
                          ? (0, w.jsx)(me, {
                              label: c.formatMessage({
                                id: `codex.pages.import.connectionLabel`,
                                defaultMessage: `Notion connection`,
                                description: `Accessible label for choosing which connected Notion account reads the source page in Import page`,
                              }),
                              disabled: O || A || D,
                              options: [
                                {
                                  value: ``,
                                  label: c.formatMessage({
                                    id: `codex.pages.import.chooseConnection`,
                                    defaultMessage: `Choose a Notion connection`,
                                    description: `Placeholder in Import page when several connected Notion accounts require the user to choose one before importing`,
                                  }),
                                },
                                ...x.connections.map(pe),
                              ],
                              value: S ?? ``,
                              onChange: (e) => {
                                (E(e || void 0), b(null));
                              },
                            })
                          : null,
                        x.code === `notion_connection_required` || P
                          ? (0, w.jsx)(t, {
                              color: `secondary`,
                              disabled: O || A || D,
                              type: `button`,
                              onClick: () => {
                                let e = new AbortController();
                                ((k.current = e),
                                  ge(!0),
                                  ue(ee, {
                                    connectorId: x.app_id,
                                    hostId: ne,
                                    oauthPresentation: `popup`,
                                    productSku: `CODEX`,
                                    payload: { requireAuth: !0, reauthLinkId: P ? N?.link_id : void 0 },
                                    signal: e.signal,
                                  })
                                    .then(
                                      (t) => {
                                        !e.signal.aborted && t.didConnect && (E(t.linkId), fe(null), b(null));
                                      },
                                      () => {
                                        e.signal.aborted || b(`failed`);
                                      },
                                    )
                                    .finally(() => {
                                      k.current === e && ((k.current = null), e.signal.aborted || ge(!1));
                                    }));
                              },
                              children: P
                                ? (0, w.jsx)(o, {
                                    id: `codex.pages.import.reconnect`,
                                    defaultMessage: `Reconnect Notion`,
                                    description: `Button in Import page that refreshes authorization for the selected Notion account before retrying the import`,
                                  })
                                : (0, w.jsx)(o, {
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
          : (0, w.jsx)(le, {
              autoFocus: !0,
              "aria-label": c.formatMessage(T.contentLabel),
              "aria-describedby": y == null ? void 0 : l,
              readOnly: A || O,
              rows: 10,
              spellCheck: !1,
              value: _,
              variant: `code`,
              onChange: (e) => {
                (se(e.target.value), b(null));
              },
            })),
      (n[38] = D),
      (n[39] = x),
      (n[40] = _),
      (n[41] = g),
      (n[42] = A),
      (n[43] = c),
      (n[44] = S),
      (n[45] = O),
      (n[46] = P),
      (n[47] = N?.link_id),
      (n[48] = y),
      (n[49] = ee),
      (n[50] = l),
      (n[51] = v),
      (n[52] = W))
    : (W = n[52]);
  let G;
  n[53] !== A || n[54] !== y || n[55] !== l
    ? ((G =
        y == null
          ? null
          : (0, w.jsx)(`p`, {
              id: l,
              className: `select-none`,
              role: A ? `status` : `alert`,
              children: (0, w.jsx)(o, { ...T[y] }),
            })),
      (n[53] = A),
      (n[54] = y),
      (n[55] = l),
      (n[56] = G))
    : (G = n[56]);
  let K;
  n[57] !== V || n[58] !== U || n[59] !== W || n[60] !== G
    ? ((K = (0, w.jsxs)(te, { className: `gap-4`, spacing: `large`, children: [V, U, W, G] })),
      (n[57] = V),
      (n[58] = U),
      (n[59] = W),
      (n[60] = G),
      (n[61] = K))
    : (K = n[61]);
  let Oe = O || D,
    ke = A ? T.done : T.cancel,
    q;
  n[62] === ke ? (q = n[63]) : ((q = (0, w.jsx)(o, { ...ke })), (n[62] = ke), (n[63] = q));
  let J;
  n[64] !== i || n[65] !== Oe || n[66] !== q
    ? ((J = (0, w.jsx)(t, { color: `secondary`, disabled: Oe, onClick: i, type: `button`, children: q })),
      (n[64] = i),
      (n[65] = Oe),
      (n[66] = q),
      (n[67] = J))
    : (J = n[67]);
  let Y;
  n[68] !== D || n[69] !== A || n[70] !== M || n[71] !== O || n[72] !== j
    ? ((Y = A || O || D || j.trim() === `` || M),
      (n[68] = D),
      (n[69] = A),
      (n[70] = M),
      (n[71] = O),
      (n[72] = j),
      (n[73] = Y))
    : (Y = n[73]);
  let Ae = O ? T.importing : T.importAction,
    X;
  n[74] === Ae ? (X = n[75]) : ((X = (0, w.jsx)(o, { ...Ae })), (n[74] = Ae), (n[75] = X));
  let Z;
  n[76] !== Y || n[77] !== X
    ? ((Z = (0, w.jsx)(t, { color: `primary`, disabled: Y, type: `submit`, children: X })),
      (n[76] = Y),
      (n[77] = X),
      (n[78] = Z))
    : (Z = n[78]);
  let Q;
  n[79] !== J || n[80] !== Z
    ? ((Q = (0, w.jsx)(te, { spacing: `large`, children: (0, w.jsxs)(oe, { children: [J, Z] }) })),
      (n[79] = J),
      (n[80] = Z),
      (n[81] = Q))
    : (Q = n[81]);
  let $;
  n[82] !== O || n[83] !== K || n[84] !== Q || n[85] !== R
    ? (($ = (0, w.jsxs)(ie, { as: `form`, "aria-busy": O, onSubmit: R, children: [be, K, Q] })),
      (n[82] = O),
      (n[83] = K),
      (n[84] = Q),
      (n[85] = R),
      (n[86] = $))
    : ($ = n[86]);
  let je;
  return (
    n[87] !== $ || n[88] !== L
      ? ((je = (0, w.jsx)(re, { open: !0, size: `compact`, onOpenChange: L, children: $ })),
        (n[87] = $),
        (n[88] = L),
        (n[89] = je))
      : (je = n[89]),
    je
  );
}
function pe(e) {
  return { value: e.link_id, label: e.label };
}
function me(e) {
  let n = (0, he.c)(20),
    { label: r, disabled: a, options: o, value: s, onChange: c } = e,
    l;
  n[0] !== o || n[1] !== s
    ? ((l = o.find((e) => e.value === s)?.label), (n[0] = o), (n[1] = s), (n[2] = l))
    : (l = n[2]);
  let d;
  n[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((d = (0, w.jsx)(ee, {})), (n[3] = d)) : (d = n[3]);
  let f;
  n[4] !== a || n[5] !== r || n[6] !== l
    ? ((f = (0, w.jsxs)(t, {
        className: `w-full justify-between`,
        color: `field`,
        contentLayout: `dropdown`,
        size: `field`,
        "aria-label": r,
        disabled: a,
        type: `button`,
        children: [l, d],
      })),
      (n[4] = a),
      (n[5] = r),
      (n[6] = l),
      (n[7] = f))
    : (f = n[7]);
  let p;
  if (n[8] !== c || n[9] !== o) {
    let e;
    (n[11] === c
      ? (e = n[12])
      : ((e = (e) =>
          (0, w.jsx)(
            u.RadioItem,
            { value: e.value, onSelect: () => c(e.value), children: e.label },
            e.value,
          )),
        (n[11] = c),
        (n[12] = e)),
      (p = o.map(e)),
      (n[8] = c),
      (n[9] = o),
      (n[10] = p));
  } else p = n[10];
  let m;
  n[13] !== p || n[14] !== s
    ? ((m = (0, w.jsx)(u.RadioGroup, { value: s, children: p })), (n[13] = p), (n[14] = s), (n[15] = m))
    : (m = n[15]);
  let h;
  return (
    n[16] !== a || n[17] !== f || n[18] !== m
      ? ((h = (0, w.jsx)(i, { disabled: a, matchTriggerWidth: !0, triggerButton: f, children: m })),
        (n[16] = a),
        (n[17] = f),
        (n[18] = m),
        (n[19] = h))
      : (h = n[19]),
    h
  );
}
var he, C, w, T;
function E() {
  return (E = e(() => {
    ((he = v()),
      c(),
      ae(),
      (C = b()),
      g(),
      fe(),
      _(),
      se(),
      m(),
      r(),
      l(),
      x(),
      ce(),
      (w = y()),
      (T = n({
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
E();
export { S as PageImportDialog };
//# sourceMappingURL=dialog-1fcc8b450c10.js.map
