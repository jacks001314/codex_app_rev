import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  IDt as n,
  Ixt as r,
  Pxt as i,
  VDt as a,
  Vxt as o,
  _O as s,
  cO as c,
  fO as l,
  jDt as u,
  lO as d,
  mO as f,
  oO as p,
  sO as m,
  vO as h,
  vzt as g,
  wot as _,
  xMt as v,
  yzt as y,
} from "./app-shared-bbfeca5e5737.js";
import { GMr as b, Ymr as x, ehr as S, tNr as C, xPn as w, yPn as T } from "./app-initial-5851df3f6cb1.js";
import { n as E, t as D } from "./report-dialog-bb6e098cc574.js";
function O(e) {
  let i = (0, j.c)(47),
    { accountId: l, params: u, onClose: h } = e,
    g = r(t),
    _ = a(),
    v = o(b),
    y = (0, M.useEffectEvent)(h),
    S;
  i[0] !== l || i[1] !== y || i[2] !== g
    ? ((S = () =>
        g.watch((e) => {
          e.get(b) !== l && y();
        })),
      (i[0] = l),
      (i[1] = y),
      (i[2] = g),
      (i[3] = S))
    : (S = i[3]);
  let C;
  (i[4] !== l || i[5] !== g ? ((C = [l, g]), (i[4] = l), (i[5] = g), (i[6] = C)) : (C = i[6]),
    (0, M.useEffect)(S, C));
  let w = u.extraParams?.entity_lookup_id,
    E = u.extraParams?.business_id,
    O;
  i[7] !== u.entityId || i[8] !== w || i[9] !== E
    ? ((O = [w, E, u.entityId].find(A)), (i[7] = u.entityId), (i[8] = w), (i[9] = E), (i[10] = O))
    : (O = i[10]);
  let P = O,
    F;
  i[11] === u.query
    ? (F = i[12])
    : ((F = u.query.length <= 30 ? u.query : `${u.query.slice(0, 27)}…`), (i[11] = u.query), (i[12] = F));
  let I;
  i[13] === F
    ? (I = i[14])
    : ((I = (0, N.jsx)(n, {
        id: `chatgpt.localBusiness.report.title`,
        defaultMessage: `Report {name}`,
        description: `Title of the reporting dialog opened from a local place details sidebar. The name placeholder is the business or place name, truncated when long.`,
        values: { name: F },
      })),
      (i[13] = F),
      (i[14] = I));
  let L = I;
  if (v !== l) return null;
  if (l != null && P != null) {
    let e;
    i[15] !== l || i[16] !== _.locale
      ? ((e = [`local-business-report-reasons`, l, _.locale]), (i[15] = l), (i[16] = _.locale), (i[17] = e))
      : (e = i[17]);
    let t;
    i[18] !== l ||
    i[19] !== P ||
    i[20] !== h ||
    i[21] !== u.businessPreview?.provider_url ||
    i[22] !== u.businessPreview?.website_url ||
    i[23] !== u.extraParams ||
    i[24] !== u.libraryOrigin?.conversation_id ||
    i[25] !== u.libraryOrigin?.message_id ||
    i[26] !== u.messageId ||
    i[27] !== u.query ||
    i[28] !== u.sourceConversationId ||
    i[29] !== g
      ? ((t = async (e) => {
          let { reason: t, details: n, additionalFields: r } = e;
          if (g.get(b) !== l) {
            h();
            return;
          }
          await x.safePost(`/report_flow/report`, {
            requestBody: {
              entity_id: P,
              entity_type: `business_profile`,
              product_area: `1p`,
              reason: { id: t.id, details: n },
              additional_fields_values: {
                ...r,
                entity_name: u.query,
                entity_url: u.businessPreview?.website_url ?? u.businessPreview?.provider_url ?? ``,
                conversation_id: u.libraryOrigin?.conversation_id ?? u.sourceConversationId,
                message_id: u.libraryOrigin?.message_id ?? u.messageId,
                ...(typeof u.extraParams?.provider == `string` ? { provider: u.extraParams.provider } : {}),
              },
            },
          });
        }),
        (i[18] = l),
        (i[19] = P),
        (i[20] = h),
        (i[21] = u.businessPreview?.provider_url),
        (i[22] = u.businessPreview?.website_url),
        (i[23] = u.extraParams),
        (i[24] = u.libraryOrigin?.conversation_id),
        (i[25] = u.libraryOrigin?.message_id),
        (i[26] = u.messageId),
        (i[27] = u.query),
        (i[28] = u.sourceConversationId),
        (i[29] = g),
        (i[30] = t))
      : (t = i[30]);
    let n;
    return (
      i[31] !== h || i[32] !== e || i[33] !== t || i[34] !== L
        ? ((n = (0, N.jsx)(D, {
            onClose: h,
            title: L,
            includeServerFields: !0,
            queryKey: e,
            loadReasons: k,
            submitReport: t,
          })),
          (i[31] = h),
          (i[32] = e),
          (i[33] = t),
          (i[34] = L),
          (i[35] = n))
        : (n = i[35]),
      n
    );
  }
  let R;
  i[36] === h ? (R = i[37]) : ((R = (e) => !e && h()), (i[36] = h), (i[37] = R));
  let z;
  i[38] === L
    ? (z = i[39])
    : ((z = (0, N.jsx)(d, {
        children: (0, N.jsx)(c, { title: (0, N.jsx)(s, { children: L }), titleSize: `dialog` }),
      })),
      (i[38] = L),
      (i[39] = z));
  let B;
  i[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, N.jsx)(d, {
        children: (0, N.jsx)(n, {
          id: `chatgpt.localBusiness.report.externalInstruction`,
          defaultMessage: `Please use this form to report the issue`,
          description: `Instruction in a local place report dialog when the user is signed out or a business identifier is unavailable. The action below opens the external content reporting form.`,
        }),
      })),
      (i[40] = B))
    : (B = i[40]);
  let V;
  i[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, N.jsx)(d, {
        children: (0, N.jsx)(m, {
          children: (0, N.jsx)(T, {
            initiator: `open_in_browser_bridge`,
            href: `https://openai.com/form/report-content`,
            openTarget: `external-browser`,
            children: (0, N.jsx)(n, {
              id: `chatgpt.localBusiness.report.externalForm`,
              defaultMessage: `Go to Form`,
              description: `Link in the local place report dialog that opens the external OpenAI content reporting form in the system browser.`,
            }),
          }),
        }),
      })),
      (i[41] = V))
    : (V = i[41]);
  let H;
  i[42] === z
    ? (H = i[43])
    : ((H = (0, N.jsxs)(p, { className: `gap-4`, children: [z, B, V] })), (i[42] = z), (i[43] = H));
  let U;
  return (
    i[44] !== H || i[45] !== R
      ? ((U = (0, N.jsx)(f, { open: !0, onOpenChange: R, size: `wide`, children: H })),
        (i[44] = H),
        (i[45] = R),
        (i[46] = U))
      : (U = i[46]),
    U
  );
}
function k() {
  return x.safeGet(`/report_flow/reasons/{entity_type}`, {
    parameters: { path: { entity_type: `business_profile` } },
  });
}
function A(e) {
  return typeof e == `string` && e.trim().length > 0;
}
var j, M, N;
function P() {
  return (P = e(() => {
    ((j = g()), i(), (M = y()), u(), C(), h(), l(), w(), E(), _(), S(), (N = v()));
  }))();
}
P();
export { O as LocalBusinessReportDialog };
//# sourceMappingURL=report-dialog-3ddbd73f3ad1.js.map
