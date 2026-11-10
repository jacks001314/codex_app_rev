import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  HO as i,
  IO as a,
  JO as o,
  LNt as s,
  LO as c,
  PBt as l,
  Qst as u,
  RO as d,
  WO as f,
  XOt as p,
  ZSt as m,
  iCt as h,
  okt as g,
  qO as _,
  tkt as v,
  zO as y,
} from "./app-shared-2feb3d4c6fcc.js";
import { GLn as b, iRr as x, qLn as S, tyr as C, wLr as w, zRr as T } from "./app-initial-ad16eaadf81f.js";
import { n as E, t as D } from "./report-dialog-a40f359edbd2.js";
function O(e) {
  let n = (0, j.c)(47),
    { accountId: r, params: i, onClose: o } = e,
    s = t(u),
    l = g(),
    p = h(T),
    m = (0, M.useEffectEvent)(o),
    S;
  n[0] !== r || n[1] !== m || n[2] !== s
    ? ((S = () =>
        s.watch((e) => {
          e.get(T) !== r && m();
        })),
      (n[0] = r),
      (n[1] = m),
      (n[2] = s),
      (n[3] = S))
    : (S = n[3]);
  let C;
  (n[4] !== r || n[5] !== s ? ((C = [r, s]), (n[4] = r), (n[5] = s), (n[6] = C)) : (C = n[6]),
    (0, M.useEffect)(S, C));
  let w = i.extraParams?.entity_lookup_id,
    E = i.extraParams?.business_id,
    O;
  n[7] !== i.entityId || n[8] !== w || n[9] !== E
    ? ((O = [w, E, i.entityId].find(A)), (n[7] = i.entityId), (n[8] = w), (n[9] = E), (n[10] = O))
    : (O = n[10]);
  let P = O,
    F;
  n[11] === i.query
    ? (F = n[12])
    : ((F = i.query.length <= 30 ? i.query : `${i.query.slice(0, 27)}…`), (n[11] = i.query), (n[12] = F));
  let I;
  n[13] === F
    ? (I = n[14])
    : ((I = (0, N.jsx)(v, {
        id: `chatgpt.localBusiness.report.title`,
        defaultMessage: `Report {name}`,
        description: `Title of the reporting dialog opened from a local place details sidebar. The name placeholder is the business or place name, truncated when long.`,
        values: { name: F },
      })),
      (n[13] = F),
      (n[14] = I));
  let L = I;
  if (p !== r) return null;
  if (r != null && P != null) {
    let e;
    n[15] !== r || n[16] !== l.locale
      ? ((e = [`local-business-report-reasons`, r, l.locale]), (n[15] = r), (n[16] = l.locale), (n[17] = e))
      : (e = n[17]);
    let t;
    n[18] !== r ||
    n[19] !== P ||
    n[20] !== o ||
    n[21] !== i.businessPreview?.provider_url ||
    n[22] !== i.businessPreview?.website_url ||
    n[23] !== i.extraParams ||
    n[24] !== i.libraryOrigin?.conversation_id ||
    n[25] !== i.libraryOrigin?.message_id ||
    n[26] !== i.messageId ||
    n[27] !== i.query ||
    n[28] !== i.sourceConversationId ||
    n[29] !== s
      ? ((t = async (e) => {
          let { reason: t, details: n, additionalFields: a } = e;
          if (s.get(T) !== r) {
            o();
            return;
          }
          await x.safePost(`/report_flow/report`, {
            requestBody: {
              entity_id: P,
              entity_type: `business_profile`,
              product_area: `1p`,
              reason: { id: t.id, details: n },
              additional_fields_values: {
                ...a,
                entity_name: i.query,
                entity_url: i.businessPreview?.website_url ?? i.businessPreview?.provider_url ?? ``,
                conversation_id: i.libraryOrigin?.conversation_id ?? i.sourceConversationId,
                message_id: i.libraryOrigin?.message_id ?? i.messageId,
                ...(typeof i.extraParams?.provider == `string` ? { provider: i.extraParams.provider } : {}),
              },
            },
          });
        }),
        (n[18] = r),
        (n[19] = P),
        (n[20] = o),
        (n[21] = i.businessPreview?.provider_url),
        (n[22] = i.businessPreview?.website_url),
        (n[23] = i.extraParams),
        (n[24] = i.libraryOrigin?.conversation_id),
        (n[25] = i.libraryOrigin?.message_id),
        (n[26] = i.messageId),
        (n[27] = i.query),
        (n[28] = i.sourceConversationId),
        (n[29] = s),
        (n[30] = t))
      : (t = n[30]);
    let a;
    return (
      n[31] !== o || n[32] !== e || n[33] !== t || n[34] !== L
        ? ((a = (0, N.jsx)(D, {
            onClose: o,
            title: L,
            includeServerFields: !0,
            queryKey: e,
            loadReasons: k,
            submitReport: t,
          })),
          (n[31] = o),
          (n[32] = e),
          (n[33] = t),
          (n[34] = L),
          (n[35] = a))
        : (a = n[35]),
      a
    );
  }
  let R;
  n[36] === o ? (R = n[37]) : ((R = (e) => !e && o()), (n[36] = o), (n[37] = R));
  let z;
  n[38] === L
    ? (z = n[39])
    : ((z = (0, N.jsx)(y, {
        children: (0, N.jsx)(d, { title: (0, N.jsx)(_, { children: L }), titleSize: `dialog` }),
      })),
      (n[38] = L),
      (n[39] = z));
  let B;
  n[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, N.jsx)(y, {
        children: (0, N.jsx)(v, {
          id: `chatgpt.localBusiness.report.externalInstruction`,
          defaultMessage: `Please use this form to report the issue`,
          description: `Instruction in a local place report dialog when the user is signed out or a business identifier is unavailable. The action below opens the external content reporting form.`,
        }),
      })),
      (n[40] = B))
    : (B = n[40]);
  let V;
  n[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, N.jsx)(y, {
        children: (0, N.jsx)(c, {
          children: (0, N.jsx)(b, {
            initiator: `open_in_browser_bridge`,
            href: `https://openai.com/form/report-content`,
            openTarget: `external-browser`,
            children: (0, N.jsx)(v, {
              id: `chatgpt.localBusiness.report.externalForm`,
              defaultMessage: `Go to Form`,
              description: `Link in the local place report dialog that opens the external OpenAI content reporting form in the system browser.`,
            }),
          }),
        }),
      })),
      (n[41] = V))
    : (V = n[41]);
  let H;
  n[42] === z
    ? (H = n[43])
    : ((H = (0, N.jsxs)(a, { className: `gap-4`, children: [z, B, V] })), (n[42] = z), (n[43] = H));
  let U;
  return (
    n[44] !== H || n[45] !== R
      ? ((U = (0, N.jsx)(f, { open: !0, onOpenChange: R, size: `wide`, children: H })),
        (n[44] = H),
        (n[45] = R),
        (n[46] = U))
      : (U = n[46]),
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
    ((j = l()), m(), (M = r()), p(), w(), o(), i(), S(), E(), n(), C(), (N = s()));
  }))();
}
P();
export { O as LocalBusinessReportDialog };
//# sourceMappingURL=report-dialog-3ff7694db812.js.map
