const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./site-automation-create-dialog-1632ebebbecd.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./configuration-schedule-349da7cdee3c.js",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./app-primary-3e00728c2a4c.js",
      "./app-primary-4d86db640757.css",
      "./schedule-draft-f9ea92400312.js",
      "./automation-notification-policy-dropdown-2708acfbf470.js",
      "./automation-dialog-843b9afb1cdf.js",
      "./model-and-reasoning-effort-translations-ac0973a6e9a8.js",
      "./automation-frequency-section-caeb4180ce42.js",
      "./DatePicker-aa68df19788f.js",
      "./helpers-97e80d920c48.js",
      "./PlatformUIKitContext-db1b777cfbe7.js",
      "./DatePicker-f2d11cc034ea.css",
      "./PlatformUIKitProvider-8a854188dc59.js",
      "./time-zone-options-f198c7e96682.js",
      "./plugins-state-ed3d4c958838.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  DB as n,
  F3 as r,
  I3 as i,
  Jm as a,
  LNt as o,
  NSt as s,
  OB as c,
  OFt as l,
  Oit as u,
  PBt as d,
  USt as ee,
  Vrt as f,
  XOt as p,
  Y3 as m,
  Z3 as h,
  ZSt as g,
  jit as _,
  kFt as v,
  nCt as y,
  okt as te,
  qm as ne,
  qrt as re,
  tkt as b,
  vD as x,
  yD as S,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Pr as ie,
  $vn as C,
  Avn as ae,
  BRr as w,
  DC as oe,
  DNr as T,
  EC as E,
  ENr as se,
  I2n as D,
  IPr as ce,
  MOr as le,
  NNr as ue,
  NPr as O,
  OC as k,
  P2n as de,
  Swn as A,
  TFr as fe,
  X5n as pe,
  Z5n as j,
  bNr as me,
  bwn as he,
  hPr as ge,
  iFr as M,
  iRr as _e,
  imr as ve,
  jC as N,
  jNr as ye,
  kC as be,
  njr as P,
  rmr as F,
  tjr as xe,
  tyr as I,
  vNr as L,
  wLr as R,
  xFr as z,
  xwn as Se,
  zOr as B,
  zvn as V,
} from "./app-initial-ad16eaadf81f.js";
import { i as H, n as U, r as Ce, t as we } from "./automation-detail-panel-9f15dc42249c.js";
function W(e) {
  let r = (0, De.c)(97),
    i = t(le),
    { proposal: a } = e,
    o = te(),
    s = ee(),
    c;
  r[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = { name: `automations.cloud` }), (r[0] = c))
    : (c = r[0]);
  let { isCapable: l } = y(xe, c),
    { data: u, refetch: d } = y(ae, a.projectId),
    { accountId: f, userId: p } = ve(),
    h;
  r[1] !== f || r[2] !== a.projectId || r[3] !== p
    ? ((h = JSON.stringify([f, p, a.projectId])), (r[1] = f), (r[2] = a.projectId), (r[3] = p), (r[4] = h))
    : (h = r[4]);
  let g = h,
    _ = y(k, g),
    v = _?.status === `pending`,
    S = _?.status === `failed`,
    T;
  r[5] === o
    ? (T = r[6])
    : ((T = o.formatMessage({
        id: `siteAutomation.createError`,
        defaultMessage: `Couldn’t finish setting up this scheduled task. Try again here to continue.`,
        description: `Error when saving, linking, or enabling a Site schedule fails; retry reuses the paused task if it was already created`,
      })),
      (r[5] = o),
      (r[6] = T));
  let E = T,
    D;
  r[7] !== e.presentation || r[8] !== e.tabState || r[9] !== _
    ? ((D = _?.status === `saved` ? _.automationId : null),
      D == null && e.presentation !== `dialog` && (D = e.tabState.savedAutomationId),
      (r[7] = e.presentation),
      (r[8] = e.tabState),
      (r[9] = _),
      (r[10] = D))
    : (D = r[10]);
  let O;
  r[11] !== a.prompt || r[12] !== a.rrule || r[13] !== a.title || r[14] !== _?.draft
    ? ((O = _?.draft ?? {
        ...ce,
        kind: `cron`,
        name: a.title,
        prompt: a.prompt,
        scheduleConfig: fe(a.rrule ?? null),
      }),
      (r[11] = a.prompt),
      (r[12] = a.rrule),
      (r[13] = a.title),
      (r[14] = _?.draft),
      (r[15] = O))
    : (O = r[15]);
  let A = O,
    j;
  r[16] !== A || r[17] !== i || r[18] !== g
    ? ((j = (e) => {
        let t = i.get(k, g);
        t?.status !== `pending` &&
          t?.status !== `saved` &&
          i.set(k, g, {
            automationId: t?.automationId ?? null,
            status: `draft`,
            draft: typeof e == `function` ? e(t?.draft ?? A) : e,
          });
      }),
      (r[16] = A),
      (r[17] = i),
      (r[18] = g),
      (r[19] = j))
    : (j = r[19]);
  let M = j,
    N;
  r[20] !== f || r[21] !== A || r[22] !== l || r[23] !== D || r[24] !== v || r[25] !== u || r[26] !== p
    ? ((N =
        l &&
        C(u) &&
        u?.status === `active` &&
        f != null &&
        p != null &&
        !v &&
        D == null &&
        ie(A, `cloud`).canSave),
      (r[20] = f),
      (r[21] = A),
      (r[22] = l),
      (r[23] = D),
      (r[24] = v),
      (r[25] = u),
      (r[26] = p),
      (r[27] = N))
    : (N = r[27]);
  let P = N,
    F;
  r[28] !== e || r[29] !== i || r[30] !== g
    ? ((F = () => {
        if (e.presentation === `dialog`) {
          e.onClose();
          return;
        }
        i.get(k, g)?.status === `saved` && i.set(k, g, null);
        let t = Se(i, e.tabId);
        t != null && he(t).closeTab(i, e.tabId);
      }),
      (r[28] = e),
      (r[29] = i),
      (r[30] = g),
      (r[31] = F))
    : (F = r[31]);
  let I = F,
    R;
  r[32] !== f ||
  r[33] !== P ||
  r[34] !== I ||
  r[35] !== A ||
  r[36] !== E ||
  r[37] !== o ||
  r[38] !== a.closeOnSave ||
  r[39] !== a.projectId ||
  r[40] !== e ||
  r[41] !== d ||
  r[42] !== i ||
  r[43] !== g ||
  r[44] !== p
    ? ((R = async () => {
        let t = i.get(k, g);
        if (!P || t?.status === `pending` || t?.status === `saved`) return;
        let r = t?.automationId ?? null,
          s = (e) => {
            i.set(k, g, { draft: A, automationId: r, status: `failed`, errorMessage: de(e, E) });
          };
        i.set(k, g, { draft: A, automationId: r, status: `pending` });
        try {
          let { data: c } = await d({ throwOnError: !0 });
          if (i.get(L) !== f || i.get(w) !== p || !C(c) || c?.status !== `active`) {
            s();
            return;
          }
          if (r != null) {
            let [e, n] = await Promise.all([
                i.queryClient.fetchQuery({ ...se(r, f), staleTime: 0 }).catch(Ee),
                i.get(be, [a.projectId]).refetch(),
              ]),
              { error: o } = n;
            if (i.get(L) !== f || i.get(w) !== p) {
              s();
              return;
            }
            if (e != null && o != null) {
              s(o);
              return;
            }
            if (e == null || oe(i, a.projectId, t)) {
              i.set(k, g, null);
              return;
            }
          }
          let l = {
              ...ge(A, Intl.DateTimeFormat().resolvedOptions().timeZone, i.get(me)),
              jawbone_id: r,
              sites_creation_mode: r == null ? `manual` : void 0,
              source_conversation_origin: `tpp`,
              executor: `cloud`,
              is_enabled: !1,
              prompt: `${A.prompt.trim()}\n\nWork on the existing Site with project_id ${a.projectId}. Use the Sites tools to inspect its current implementation before making changes.`,
            },
            u = await i.get(ye).mutateAsync({ requestBody: l });
          if (((r = u.id), i.set(k, g, { draft: A, automationId: r, status: `pending` }), i.get(L) !== f)) {
            s();
            return;
          }
          if (
            (await _e.safePost(`/websites/{project_id}/automation-attachments`, {
              parameters: { path: { project_id: a.projectId } },
              requestBody: { automation_id: u.id },
            }),
            i.get(L) !== f)
          ) {
            s();
            return;
          }
          if (
            (i.queryClient.invalidateQueries({ queryKey: [`site-automation-attachments`] }),
            i.queryClient.invalidateQueries({ queryKey: [`site-automation-backlinks`, f, u.id] }),
            await i.get(ue).mutateAsync({ automationId: u.id, isEnabled: !0 }),
            i.set(k, g, { draft: A, automationId: u.id, status: `saved` }),
            i.get(L) !== f)
          )
            return;
          (e.presentation !== `dialog` && e.setTabState((e) => ({ ...e, savedAutomationId: u.id })),
            a.closeOnSave &&
              (i
                .get(re)
                .success(
                  o.formatMessage({
                    id: `appgenAutomations.saved`,
                    defaultMessage: `Schedule saved`,
                    description: `Confirmation after creating, linking, and enabling a Site scheduled task`,
                  }),
                  { leading: (0, G.jsx)(n, { asset: ne }) },
                ),
              I()));
        } catch (e) {
          s(e);
        }
      }),
      (r[32] = f),
      (r[33] = P),
      (r[34] = I),
      (r[35] = A),
      (r[36] = E),
      (r[37] = o),
      (r[38] = a.closeOnSave),
      (r[39] = a.projectId),
      (r[40] = e),
      (r[41] = d),
      (r[42] = i),
      (r[43] = g),
      (r[44] = p),
      (r[45] = R))
    : (R = r[45]);
  let z = R,
    B;
  r[46] !== S || r[47] !== E || r[48] !== _?.errorMessage
    ? ((B = S ? (0, G.jsx)(x, { type: `error`, content: _?.errorMessage ?? E }) : null),
      (r[46] = S),
      (r[47] = E),
      (r[48] = _?.errorMessage),
      (r[49] = B))
    : (B = r[49]);
  let V = B,
    H;
  r[50] === D
    ? (H = r[51])
    : ((H =
        D == null
          ? null
          : (0, G.jsx)(x, {
              type: `success`,
              content: (0, G.jsx)(b, {
                id: `siteAutomation.created`,
                defaultMessage: `Your Site’s scheduled task is ready and runs in the cloud`,
                description: `Confirmation after saving and linking a cloud schedule to a Site`,
              }),
            })),
      (r[50] = D),
      (r[51] = H));
  let U = H;
  if (e.presentation === `dialog` && K != null) {
    let e = u?.title ?? a.title,
      t = D != null,
      n;
    r[52] === z ? (n = r[53]) : ((n = () => void z()), (r[52] = z), (r[53] = n));
    let i;
    return (
      r[54] !== P ||
      r[55] !== I ||
      r[56] !== U ||
      r[57] !== A ||
      r[58] !== V ||
      r[59] !== v ||
      r[60] !== M ||
      r[61] !== g ||
      r[62] !== e ||
      r[63] !== t ||
      r[64] !== n
        ? ((i = (0, G.jsx)(
            K,
            {
              siteTitle: e,
              draft: A,
              setDraft: M,
              canSave: P,
              isSaving: v,
              disabled: t,
              error: V,
              confirmation: U,
              onClose: I,
              onSubmit: n,
            },
            g,
          )),
          (r[54] = P),
          (r[55] = I),
          (r[56] = U),
          (r[57] = A),
          (r[58] = V),
          (r[59] = v),
          (r[60] = M),
          (r[61] = g),
          (r[62] = e),
          (r[63] = t),
          (r[64] = n),
          (r[65] = i))
        : (i = r[65]),
      i
    );
  }
  if (e.presentation === `dialog`) return null;
  let W = A.name,
    q = e.renderSlots,
    J;
  r[66] !== D || r[67] !== v || r[68] !== M
    ? ((J = v || D != null ? null : (e) => M((t) => ({ ...t, name: e }))),
      (r[66] = D),
      (r[67] = v),
      (r[68] = M),
      (r[69] = J))
    : (J = r[69]);
  let Y;
  r[70] === o
    ? (Y = r[71])
    : ((Y = o.formatMessage({
        id: `siteAutomation.close`,
        defaultMessage: `Close scheduled task setup`,
        description: `Accessible label for closing the Site cloud schedule setup panel`,
      })),
      (r[70] = o),
      (r[71] = Y));
  let X;
  r[72] !== I || r[73] !== Y
    ? ((X = { label: Y, onClose: I }), (r[72] = I), (r[73] = Y), (r[74] = X))
    : (X = r[74]);
  let Z;
  r[75] !== P || r[76] !== I || r[77] !== s || r[78] !== e.tabState || r[79] !== D || r[80] !== v
    ? ((Z =
        D == null
          ? (0, G.jsx)(m, {
              type: `submit`,
              form: `site-schedule-${e.tabState.draftInstanceId}`,
              disabled: !P,
              loading: v,
              children: (0, G.jsx)(b, {
                id: `appgenAutomations.create`,
                defaultMessage: `Create scheduled task`,
                description: `Button to open the existing cloud task setup for this Site`,
              }),
            })
          : (0, G.jsx)(m, {
              onClick: () => {
                (I(), s(`${pe()}?automationId=${encodeURIComponent(D)}&automationSource=cloud`));
              },
              children: (0, G.jsx)(b, {
                id: `siteAutomation.openSchedules`,
                defaultMessage: `Open scheduled tasks`,
                description: `Button after creating a Site schedule that opens it in the Scheduled page`,
              }),
            })),
      (r[75] = P),
      (r[76] = I),
      (r[77] = s),
      (r[78] = e.tabState),
      (r[79] = D),
      (r[80] = v),
      (r[81] = Z))
    : (Z = r[81]);
  let Q;
  r[82] !== U || r[83] !== A || r[84] !== e.tabState || r[85] !== v || r[86] !== M || r[87] !== z
    ? ((Q =
        U ??
        (0, G.jsx)(Ce, {
          allowNewThread: !0,
          disablePromptAutoFocus: !0,
          allowCloudTeamSelection: !1,
          draft: A,
          executionLocation: { selectedLocation: `cloud`, onSelect: void 0 },
          formId: `site-schedule-${e.tabState.draftInstanceId}`,
          setDraft: v ? Te : M,
          resolvedProjects: [],
          onSubmit: (e) => {
            (e.preventDefault(), z());
          },
        })),
      (r[82] = U),
      (r[83] = A),
      (r[84] = e.tabState),
      (r[85] = v),
      (r[86] = M),
      (r[87] = z),
      (r[88] = Q))
    : (Q = r[88]);
  let $;
  return (
    r[89] !== A.name ||
    r[90] !== V ||
    r[91] !== e.renderSlots ||
    r[92] !== J ||
    r[93] !== X ||
    r[94] !== Z ||
    r[95] !== Q
      ? (($ = (0, G.jsxs)(we, {
          actions: null,
          autoFocusName: !0,
          name: W,
          renderSlots: q,
          onNameChange: J,
          closeAction: X,
          footer: Z,
          children: [V, Q],
        })),
        (r[89] = A.name),
        (r[90] = V),
        (r[91] = e.renderSlots),
        (r[92] = J),
        (r[93] = X),
        (r[94] = Z),
        (r[95] = Q),
        (r[96] = $))
      : ($ = r[96]),
    $
  );
}
function Te() {}
function Ee(e) {
  if (e instanceof _ && e.status === 410) return null;
  throw e;
}
var De, G, K;
function q() {
  return (q = e(() => {
    ((De = d()),
      a(),
      g(),
      p(),
      s(),
      P(),
      N(),
      V(),
      R(),
      F(),
      D(),
      I(),
      S(),
      h(),
      c(),
      r(),
      f(),
      B(),
      A(),
      u(),
      U(),
      H(),
      j(),
      z(),
      M(),
      O(),
      T(),
      E(),
      (G = o()),
      v(),
      (K = i(async () => {
        let { SiteAutomationCreateDialog: e } = await l(
          async () => {
            let { SiteAutomationCreateDialog: e } = await import(
              `./site-automation-create-dialog-1632ebebbecd.js`
            );
            return { SiteAutomationCreateDialog: e };
          },
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
          import.meta.url,
        );
        return e;
      })));
  }))();
}
export { q as n, W as t };
//# sourceMappingURL=site-automation-create-panel-399dee493ef4.js.map
