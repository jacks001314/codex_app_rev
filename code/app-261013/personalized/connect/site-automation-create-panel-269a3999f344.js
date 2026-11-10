const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./site-automation-create-dialog-ab46820ab5fd.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./configuration-schedule-48b79a5c9f8a.js",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./app-primary-fe8a450b3b04.js",
      "./app-primary-71492d0e9e92.css",
      "./schedule-draft-871290737b78.js",
      "./automation-notification-policy-dropdown-53dcfcad0c55.js",
      "./automation-dialog-8a01873d44d2.js",
      "./model-and-reasoning-effort-translations-96be4f100801.js",
      "./automation-frequency-section-b14557c3b8fc.js",
      "./DatePicker-ab3817e664c5.js",
      "./helpers-a3a9f6ff3e2c.js",
      "./PlatformUIKitContext-75518ab926e7.js",
      "./ChevronRight-ffca387b610d.js",
      "./DatePicker-916e4078b8cc.css",
      "./PlatformUIKitProvider-8f7f0fbad1d5.js",
      "./time-zone-options-5cb947c6c324.js",
      "./plugins-state-17abea2c5736.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  B4 as n,
  Ext as r,
  GE as i,
  IDt as a,
  Ixt as o,
  Mz as ee,
  Nz as s,
  Pxt as c,
  VDt as l,
  WE as u,
  _xt as d,
  fPt as f,
  frt as p,
  gm as m,
  hm as te,
  hot as ne,
  hrt as h,
  jDt as g,
  lot as _,
  pPt as v,
  t3 as y,
  vzt as b,
  xMt as x,
  z4 as S,
  zxt as C,
} from "./app-shared-bbfeca5e5737.js";
import {
  $S as w,
  Cwr as T,
  FEr as E,
  Gkr as re,
  JOr as D,
  Ngn as O,
  PAr as k,
  PEr as ie,
  QAr as A,
  QS as ae,
  XMr as j,
  XOr as oe,
  Ymr as se,
  ZS as M,
  c$n as N,
  dxn as P,
  eC as ce,
  ehr as F,
  fAr as le,
  fur as I,
  gwr as ue,
  h3n as L,
  kAr as de,
  lAr as R,
  lkr as fe,
  lxn as pe,
  m3n as me,
  nC as z,
  njr as he,
  nkr as ge,
  o$n as _e,
  pur as ve,
  rkr as B,
  skr as ye,
  tNr as V,
  ugn as be,
  uxn as xe,
  ygn as H,
} from "./app-initial-5851df3f6cb1.js";
import { i as U, n as W, r as Se, t as Ce } from "./automation-detail-panel-d783fffd1a5b.js";
function we(e) {
  let n = (0, De.c)(97),
    i = o(ue),
    { proposal: s } = e,
    c = l(),
    d = r(),
    f;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = { name: `automations.cloud` }), (n[0] = f))
    : (f = n[0]);
  let { isCapable: p } = C(ie, f),
    { data: m, refetch: h } = C(be, s.projectId),
    { accountId: g, userId: _ } = ve(),
    v;
  n[1] !== g || n[2] !== s.projectId || n[3] !== _
    ? ((v = JSON.stringify([g, _, s.projectId])), (n[1] = g), (n[2] = s.projectId), (n[3] = _), (n[4] = v))
    : (v = n[4]);
  let y = v,
    b = C(w, y),
    x = b?.status === `pending`,
    S = b?.status === `failed`,
    T;
  n[5] === c
    ? (T = n[6])
    : ((T = c.formatMessage({
        id: `siteAutomation.createError`,
        defaultMessage: `Couldn’t finish setting up this scheduled task. Try again here to continue.`,
        description: `Error when saving, linking, or enabling a Site schedule fails; retry reuses the paused task if it was already created`,
      })),
      (n[5] = c),
      (n[6] = T));
  let E = T,
    k;
  n[7] !== e.presentation || n[8] !== e.tabState || n[9] !== b
    ? ((k = b?.status === `saved` ? b.automationId : null),
      k == null && e.presentation !== `dialog` && (k = e.tabState.savedAutomationId),
      (n[7] = e.presentation),
      (n[8] = e.tabState),
      (n[9] = b),
      (n[10] = k))
    : (k = n[10]);
  let A;
  n[11] !== s.prompt || n[12] !== s.rrule || n[13] !== s.title || n[14] !== b?.draft
    ? ((A = b?.draft ?? {
        ...le,
        kind: `cron`,
        name: s.title,
        prompt: s.prompt,
        scheduleConfig: he(s.rrule ?? null),
      }),
      (n[11] = s.prompt),
      (n[12] = s.rrule),
      (n[13] = s.title),
      (n[14] = b?.draft),
      (n[15] = A))
    : (A = n[15]);
  let M = A,
    N;
  n[16] !== M || n[17] !== i || n[18] !== y
    ? ((N = (e) => {
        let t = i.get(w, y);
        t?.status !== `pending` &&
          t?.status !== `saved` &&
          i.set(w, y, {
            automationId: t?.automationId ?? null,
            status: `draft`,
            draft: typeof e == `function` ? e(t?.draft ?? M) : e,
          });
      }),
      (n[16] = M),
      (n[17] = i),
      (n[18] = y),
      (n[19] = N))
    : (N = n[19]);
  let P = N,
    F;
  n[20] !== g || n[21] !== M || n[22] !== p || n[23] !== k || n[24] !== x || n[25] !== m || n[26] !== _
    ? ((F =
        p &&
        O(m) &&
        m?.status === `active` &&
        g != null &&
        _ != null &&
        !x &&
        k == null &&
        de(M, `cloud`).canSave),
      (n[20] = g),
      (n[21] = M),
      (n[22] = p),
      (n[23] = k),
      (n[24] = x),
      (n[25] = m),
      (n[26] = _),
      (n[27] = F))
    : (F = n[27]);
  let I = F,
    L;
  n[28] !== e || n[29] !== i || n[30] !== y
    ? ((L = () => {
        if (e.presentation === `dialog`) {
          e.onClose();
          return;
        }
        i.get(w, y)?.status === `saved` && i.set(w, y, null);
        let t = xe(i, e.tabId);
        t != null && pe(t).closeTab(i, e.tabId);
      }),
      (n[28] = e),
      (n[29] = i),
      (n[30] = y),
      (n[31] = L))
    : (L = n[31]);
  let R = L,
    z;
  n[32] !== g ||
  n[33] !== I ||
  n[34] !== R ||
  n[35] !== M ||
  n[36] !== E ||
  n[37] !== c ||
  n[38] !== s.closeOnSave ||
  n[39] !== s.projectId ||
  n[40] !== e ||
  n[41] !== h ||
  n[42] !== i ||
  n[43] !== y ||
  n[44] !== _
    ? ((z = async () => {
        let t = i.get(w, y);
        if (!I || t?.status === `pending` || t?.status === `saved`) return;
        let n = t?.automationId ?? null,
          r = (e) => {
            i.set(w, y, { draft: M, automationId: n, status: `failed`, errorMessage: _e(e, E) });
          };
        i.set(w, y, { draft: M, automationId: n, status: `pending` });
        try {
          let { data: a } = await h({ throwOnError: !0 });
          if (i.get(D) !== g || i.get(j) !== _ || !O(a) || a?.status !== `active`) {
            r();
            return;
          }
          if (n != null) {
            let [e, a] = await Promise.all([
                i.queryClient.fetchQuery({ ...ge(n, g), staleTime: 0 }).catch(Ee),
                i.get(ce, [s.projectId]).refetch(),
              ]),
              { error: o } = a;
            if (i.get(D) !== g || i.get(j) !== _) {
              r();
              return;
            }
            if (e != null && o != null) {
              r(o);
              return;
            }
            if (e == null || ae(i, s.projectId, t)) {
              i.set(w, y, null);
              return;
            }
          }
          let o = {
              ...re(M, Intl.DateTimeFormat().resolvedOptions().timeZone, i.get(oe)),
              jawbone_id: n,
              sites_creation_mode: n == null ? `manual` : void 0,
              source_conversation_origin: `tpp`,
              executor: `cloud`,
              is_enabled: !1,
              prompt: `${M.prompt.trim()}\n\nWork on the existing Site with project_id ${s.projectId}. Use the Sites tools to inspect its current implementation before making changes.`,
            },
            l = await i.get(ye).mutateAsync({ requestBody: o });
          if (((n = l.id), i.set(w, y, { draft: M, automationId: n, status: `pending` }), i.get(D) !== g)) {
            r();
            return;
          }
          if (
            (await se.safePost(`/websites/{project_id}/automation-attachments`, {
              parameters: { path: { project_id: s.projectId } },
              requestBody: { automation_id: l.id },
            }),
            i.get(D) !== g)
          ) {
            r();
            return;
          }
          if (
            (i.queryClient.invalidateQueries({ queryKey: [`site-automation-attachments`] }),
            i.queryClient.invalidateQueries({ queryKey: [`site-automation-backlinks`, g, l.id] }),
            await i.get(fe).mutateAsync({ automationId: l.id, isEnabled: !0 }),
            i.set(w, y, { draft: M, automationId: l.id, status: `saved` }),
            i.get(D) !== g)
          )
            return;
          (e.presentation !== `dialog` && e.setTabState((e) => ({ ...e, savedAutomationId: l.id })),
            s.closeOnSave &&
              (i
                .get(ne)
                .success(
                  c.formatMessage({
                    id: `appgenAutomations.saved`,
                    defaultMessage: `Schedule saved`,
                    description: `Confirmation after creating, linking, and enabling a Site scheduled task`,
                  }),
                  { leading: (0, G.jsx)(ee, { asset: te }) },
                ),
              R()));
        } catch (e) {
          r(e);
        }
      }),
      (n[32] = g),
      (n[33] = I),
      (n[34] = R),
      (n[35] = M),
      (n[36] = E),
      (n[37] = c),
      (n[38] = s.closeOnSave),
      (n[39] = s.projectId),
      (n[40] = e),
      (n[41] = h),
      (n[42] = i),
      (n[43] = y),
      (n[44] = _),
      (n[45] = z))
    : (z = n[45]);
  let B = z,
    V;
  n[46] !== S || n[47] !== E || n[48] !== b?.errorMessage
    ? ((V = S ? (0, G.jsx)(u, { type: `error`, content: b?.errorMessage ?? E }) : null),
      (n[46] = S),
      (n[47] = E),
      (n[48] = b?.errorMessage),
      (n[49] = V))
    : (V = n[49]);
  let H = V,
    U;
  n[50] === k
    ? (U = n[51])
    : ((U =
        k == null
          ? null
          : (0, G.jsx)(u, {
              type: `success`,
              content: (0, G.jsx)(a, {
                id: `siteAutomation.created`,
                defaultMessage: `Your Site’s scheduled task is ready and runs in the cloud`,
                description: `Confirmation after saving and linking a cloud schedule to a Site`,
              }),
            })),
      (n[50] = k),
      (n[51] = U));
  let W = U;
  if (e.presentation === `dialog` && K != null) {
    let e = m?.title ?? s.title,
      t = k != null,
      r;
    n[52] === B ? (r = n[53]) : ((r = () => void B()), (n[52] = B), (n[53] = r));
    let i;
    return (
      n[54] !== I ||
      n[55] !== R ||
      n[56] !== W ||
      n[57] !== M ||
      n[58] !== H ||
      n[59] !== x ||
      n[60] !== P ||
      n[61] !== y ||
      n[62] !== e ||
      n[63] !== t ||
      n[64] !== r
        ? ((i = (0, G.jsx)(
            K,
            {
              siteTitle: e,
              draft: M,
              setDraft: P,
              canSave: I,
              isSaving: x,
              disabled: t,
              error: H,
              confirmation: W,
              onClose: R,
              onSubmit: r,
            },
            y,
          )),
          (n[54] = I),
          (n[55] = R),
          (n[56] = W),
          (n[57] = M),
          (n[58] = H),
          (n[59] = x),
          (n[60] = P),
          (n[61] = y),
          (n[62] = e),
          (n[63] = t),
          (n[64] = r),
          (n[65] = i))
        : (i = n[65]),
      i
    );
  }
  if (e.presentation === `dialog`) return null;
  let we = M.name,
    q = e.renderSlots,
    J;
  n[66] !== k || n[67] !== x || n[68] !== P
    ? ((J = x || k != null ? null : (e) => P((t) => ({ ...t, name: e }))),
      (n[66] = k),
      (n[67] = x),
      (n[68] = P),
      (n[69] = J))
    : (J = n[69]);
  let Y;
  n[70] === c
    ? (Y = n[71])
    : ((Y = c.formatMessage({
        id: `siteAutomation.close`,
        defaultMessage: `Close scheduled task setup`,
        description: `Accessible label for closing the Site cloud schedule setup panel`,
      })),
      (n[70] = c),
      (n[71] = Y));
  let X;
  n[72] !== R || n[73] !== Y
    ? ((X = { label: Y, onClose: R }), (n[72] = R), (n[73] = Y), (n[74] = X))
    : (X = n[74]);
  let Z;
  n[75] !== I || n[76] !== R || n[77] !== d || n[78] !== e.tabState || n[79] !== k || n[80] !== x
    ? ((Z =
        k == null
          ? (0, G.jsx)(t, {
              type: `submit`,
              form: `site-schedule-${e.tabState.draftInstanceId}`,
              disabled: !I,
              loading: x,
              children: (0, G.jsx)(a, {
                id: `appgenAutomations.create`,
                defaultMessage: `Create scheduled task`,
                description: `Button to open the existing cloud task setup for this Site`,
              }),
            })
          : (0, G.jsx)(t, {
              onClick: () => {
                (R(), d(`${me()}?automationId=${encodeURIComponent(k)}&automationSource=cloud`));
              },
              children: (0, G.jsx)(a, {
                id: `siteAutomation.openSchedules`,
                defaultMessage: `Open scheduled tasks`,
                description: `Button after creating a Site schedule that opens it in the Scheduled page`,
              }),
            })),
      (n[75] = I),
      (n[76] = R),
      (n[77] = d),
      (n[78] = e.tabState),
      (n[79] = k),
      (n[80] = x),
      (n[81] = Z))
    : (Z = n[81]);
  let Q;
  n[82] !== W || n[83] !== M || n[84] !== e.tabState || n[85] !== x || n[86] !== P || n[87] !== B
    ? ((Q =
        W ??
        (0, G.jsx)(Se, {
          allowNewThread: !0,
          disablePromptAutoFocus: !0,
          allowCloudTeamSelection: !1,
          draft: M,
          executionLocation: { selectedLocation: `cloud`, onSelect: void 0 },
          formId: `site-schedule-${e.tabState.draftInstanceId}`,
          setDraft: x ? Te : P,
          resolvedProjects: [],
          onSubmit: (e) => {
            (e.preventDefault(), B());
          },
        })),
      (n[82] = W),
      (n[83] = M),
      (n[84] = e.tabState),
      (n[85] = x),
      (n[86] = P),
      (n[87] = B),
      (n[88] = Q))
    : (Q = n[88]);
  let $;
  return (
    n[89] !== M.name ||
    n[90] !== H ||
    n[91] !== e.renderSlots ||
    n[92] !== J ||
    n[93] !== X ||
    n[94] !== Z ||
    n[95] !== Q
      ? (($ = (0, G.jsxs)(Ce, {
          actions: null,
          autoFocusName: !0,
          name: we,
          renderSlots: q,
          onNameChange: J,
          closeAction: X,
          footer: Z,
          children: [H, Q],
        })),
        (n[89] = M.name),
        (n[90] = H),
        (n[91] = e.renderSlots),
        (n[92] = J),
        (n[93] = X),
        (n[94] = Z),
        (n[95] = Q),
        (n[96] = $))
      : ($ = n[96]),
    $
  );
}
function Te() {}
function Ee(e) {
  if (e instanceof h && e.status === 410) return null;
  throw e;
}
var De, G, K;
function q() {
  return (q = e(() => {
    ((De = b()),
      m(),
      c(),
      g(),
      d(),
      E(),
      z(),
      H(),
      V(),
      I(),
      N(),
      F(),
      i(),
      y(),
      s(),
      S(),
      _(),
      T(),
      P(),
      p(),
      W(),
      U(),
      L(),
      A(),
      k(),
      R(),
      B(),
      M(),
      (G = x()),
      v(),
      (K = n(async () => {
        let { SiteAutomationCreateDialog: e } = await f(
          async () => {
            let { SiteAutomationCreateDialog: e } = await import(
              `./site-automation-create-dialog-ab46820ab5fd.js`
            );
            return { SiteAutomationCreateDialog: e };
          },
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]),
          import.meta.url,
        );
        return e;
      })));
  }))();
}
export { q as n, we as t };
//# sourceMappingURL=site-automation-create-panel-269a3999f344.js.map
