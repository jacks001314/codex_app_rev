import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  Bst as r,
  Ez as i,
  FBt as a,
  Gtt as o,
  HO as s,
  Hft as c,
  IO as l,
  JO as u,
  JOt as d,
  Jtt as f,
  KO as ee,
  Ktt as p,
  LNt as m,
  LO as te,
  MFt as h,
  MNt as g,
  Mst as _,
  NNt as v,
  Ngt as y,
  Oz as b,
  PBt as ne,
  Qst as re,
  RFt as ie,
  RO as ae,
  R_t as oe,
  Rrt as se,
  SY as x,
  TY as ce,
  Vrt as le,
  WO as ue,
  XOt as S,
  Y3 as C,
  Ytt as de,
  Z3 as w,
  ZSt as fe,
  ZU as T,
  alt as pe,
  ast as me,
  clt as he,
  iCt as ge,
  iSt as E,
  ift as _e,
  ist as ve,
  jFt as D,
  jst as ye,
  nB as be,
  okt as xe,
  qO as Se,
  qrt as Ce,
  rB as O,
  sct as we,
  slt as Te,
  tft as Ee,
  tkt as k,
  zFt as De,
  zO as A,
  zst as Oe,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $yn as j,
  At as ke,
  Aun as Ae,
  CMr as je,
  Ctn as Me,
  Cxr as Ne,
  Hyn as Pe,
  Ixr as Fe,
  Ktn as Ie,
  Lxr as Le,
  Nxr as Re,
  RAn as M,
  Tt as ze,
  Wyn as Be,
  XAr as N,
  Xen as Ve,
  ZAr as He,
  Zen as P,
  _xn as Ue,
  ben as F,
  dat as We,
  ebn as Ge,
  eir as Ke,
  fxr as I,
  gxn as qe,
  hxn as Je,
  jt as L,
  kt as Ye,
  kun as Xe,
  lDr as Ze,
  mmr as Qe,
  nbn as $e,
  pmr as R,
  tbn as et,
  uDr as tt,
  uat as z,
  vxn as nt,
  wt as rt,
  wtn as B,
  wxr as it,
  xen as at,
  yMr as ot,
  yxn as st,
  zAn as ct,
} from "./app-initial-ad16eaadf81f.js";
import { Hy as lt, Uy as V, _h as ut, vh as dt } from "./app-primary-3e00728c2a4c.js";
import { n as ft, r as H, t as pt } from "./project-device-picker-6ff444454d02.js";
function mt({ hasConnectedRemoteConnections: e, isRemoteProjectPathReady: t, selectedConnection: n }) {
  return e
    ? n == null
      ? { kind: `selected-remote-unavailable` }
      : t
        ? null
        : { kind: `path-not-ready` }
    : { kind: `no-connected-remote` };
}
function ht({ submitBlocker: e }) {
  if (e != null)
    switch (e.kind) {
      case `no-connected-remote`:
        return {
          message: d({
            id: `projectSetupDialog.noConnectedRemotes`,
            defaultMessage: `No remote hosts are connected right now.`,
            description: `Message shown in the remote project setup dialog when no remote hosts are connected`,
          }),
        };
      case `selected-remote-unavailable`:
        return {
          message: d({
            id: `projectSetupDialog.selectedRemoteUnavailable`,
            defaultMessage: `Choose a connected remote host to continue.`,
            description: `Message shown when the selected remote host is no longer available for project setup`,
          }),
        };
      case `path-not-ready`:
        return null;
    }
  return null;
}
function U() {
  return (U = e(() => {
    S();
  }))();
}
function gt(e) {
  let t = (0, _t.c)(21),
    {
      devicePicker: n,
      hostId: r,
      path: a,
      defaultPath: o,
      onPathChange: s,
      disabled: c,
      isConnected: u,
      errorId: d,
    } = e,
    f = xe(),
    [ee, p] = (0, vt.useState)(!1),
    [m, h] = (0, vt.useState)(null),
    g = m ?? o,
    _;
  t[0] !== n || t[1] !== c || t[2] !== d || t[3] !== f || t[4] !== u || t[5] !== s || t[6] !== a
    ? ((_ = (0, W.jsx)(`div`, {
        className: `divide-y divide-border overflow-hidden rounded-lg border border-default bg-primary-soft`,
        children: a
          ? (0, W.jsxs)(`div`, {
              className: `flex h-12 min-w-0 items-center gap-2 px-3 text-sm`,
              children: [
                (0, W.jsx)(T, { className: `text-secondary` }),
                (0, W.jsx)(be, {
                  tooltipContent: a,
                  children: (0, W.jsx)(`button`, {
                    type: `button`,
                    className: `min-w-0 flex-1 cursor-interaction truncate text-start`,
                    disabled: c || !u,
                    "aria-describedby": d,
                    onClick: () => {
                      (h(a), p(!0));
                    },
                    children: i(a) || a,
                  }),
                }),
                (0, W.jsx)(C, {
                  color: `ghost`,
                  size: `icon`,
                  type: `button`,
                  disabled: c,
                  "aria-label": f.formatMessage({
                    id: `projectSetup.remoteSource.remove`,
                    defaultMessage: `Remove folder`,
                    description: `Removes the chosen folder from the new remote project`,
                  }),
                  onClick: () => s(null),
                  children: (0, W.jsx)(x, {}),
                }),
              ],
            })
          : (0, W.jsx)(ft, {
              disabled: c || !u,
              onAdd: () => {
                (h(null), p(!0));
              },
              children: n,
            }),
      })),
      (t[0] = n),
      (t[1] = c),
      (t[2] = d),
      (t[3] = f),
      (t[4] = u),
      (t[5] = s),
      (t[6] = a),
      (t[7] = _))
    : (_ = t[7]);
  let v;
  t[8] !== c ||
  t[9] !== m ||
  t[10] !== d ||
  t[11] !== r ||
  t[12] !== u ||
  t[13] !== ee ||
  t[14] !== s ||
  t[15] !== a ||
  t[16] !== g
    ? ((v =
        ee && r != null
          ? (0, W.jsx)(ue, {
              open: !0,
              onOpenChange: p,
              children: (0, W.jsxs)(l, {
                as: `form`,
                onSubmit: (e) => {
                  (e.preventDefault(),
                    e.stopPropagation(),
                    !c && u && g != null && y(g.trim()) && (s(g.trim()), p(!1)));
                },
                children: [
                  (0, W.jsx)(A, {
                    children: (0, W.jsx)(ae, {
                      title: (0, W.jsx)(Se, {
                        className: `contents`,
                        children: (0, W.jsx)(k, {
                          id: `projectSetup.remoteSource.choose`,
                          defaultMessage: `Choose a source folder`,
                          description: `Title of the remote source folder picker opened from project creation`,
                        }),
                      }),
                    }),
                  }),
                  (0, W.jsx)(A, {
                    children: (0, W.jsx)(rt, {
                      hostId: r,
                      initialDirectoryPath: a,
                      selectedPath: m,
                      inputDescriptionId: d,
                      inputInvalid: d != null,
                      setSelectedPath: h,
                      disabled: c || !u,
                    }),
                  }),
                  (0, W.jsx)(A, {
                    children: (0, W.jsxs)(te, {
                      children: [
                        (0, W.jsx)(C, {
                          type: `button`,
                          color: `ghost`,
                          onClick: () => p(!1),
                          children: (0, W.jsx)(k, {
                            id: `projectSetup.remoteSource.cancel`,
                            defaultMessage: `Cancel`,
                            description: `Cancels choosing a remote project source folder`,
                          }),
                        }),
                        (0, W.jsx)(C, {
                          type: `submit`,
                          color: `primary`,
                          disabled: c || !u || g == null || !y(g.trim()),
                          children: (0, W.jsx)(k, {
                            id: `projectSetup.remoteSource.useFolder`,
                            defaultMessage: `Use folder`,
                            description: `Adds the selected remote folder to the project creation form`,
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            })
          : null),
      (t[8] = c),
      (t[9] = m),
      (t[10] = d),
      (t[11] = r),
      (t[12] = u),
      (t[13] = ee),
      (t[14] = s),
      (t[15] = a),
      (t[16] = g),
      (t[17] = v))
    : (v = t[17]);
  let b;
  return (
    t[18] !== _ || t[19] !== v
      ? ((b = (0, W.jsxs)(W.Fragment, { children: [_, v] })), (t[18] = _), (t[19] = v), (t[20] = b))
      : (b = t[20]),
    b
  );
}
var _t, vt, W;
function G() {
  return (G = e(() => {
    ((_t = ne()), we(), (vt = a()), S(), w(), u(), s(), ce(), O(), b(), H(), ze(), (W = m()));
  }))();
}
function K(e) {
  let n = (0, Ct.c)(97),
    { initialName: r, initialRequest: i, onSelectLocalDevice: a, onClose: s, onProjectCreated: u } = e,
    d = r === void 0 ? `` : r,
    m = t(re),
    g = ge(je),
    v = xe(),
    b = ge(at),
    { remoteConnections: ne, selectedRemoteHostId: ie } = ge(ct),
    se = ge(Ne),
    x = We(ne),
    { data: ce } = Qe(E.REMOTE_PROJECTS),
    { isLoading: le } = Qe(E.PROJECT_APPEARANCES),
    S;
  n[0] !== x || n[1] !== ie || n[2] !== se?.hostId
    ? ((S =
        x.find((e) => e.hostId === se?.hostId)?.hostId ??
        x.find((e) => e.hostId === ie)?.hostId ??
        x[0]?.hostId ??
        null),
      (n[0] = x),
      (n[1] = ie),
      (n[2] = se?.hostId),
      (n[3] = S))
    : (S = n[3]);
  let w = S,
    fe;
  n[4] !== x || n[5] !== i || n[6] !== w
    ? ((fe = () => {
        if (i == null)
          return { mode: `setup`, initialDirectoryPath: null, selectedHostId: `local`, setActive: !0 };
        if (i.type === `open-create-remote-project-modal`)
          return {
            mode: `setup`,
            initialDirectoryPath: null,
            selectedHostId: x.find((e) => e.hostId === i.hostId)?.hostId ?? w,
            setActive: i.setActive,
          };
        let e = i.host.trim(),
          t = i.hostId ?? x.find((t) => t.displayName === e)?.hostId ?? w;
        return i.mode === `pick`
          ? {
              mode: `choose-remote-folder`,
              host: e,
              initialDirectoryPath: i.initialPath?.trim() ?? null,
              selectedHostId: t,
            }
          : {
              mode: `setup`,
              initialDirectoryPath: i.initialPath?.trim() ?? null,
              selectedHostId: t,
              setActive: i.setActive,
            };
      }),
      (n[4] = x),
      (n[5] = i),
      (n[6] = w),
      (n[7] = fe))
    : (fe = n[7]);
  let [T, me] = (0, q.useState)(fe),
    [D, ye] = (0, q.useState)(d),
    be;
  n[8] === Symbol.for(`react.memo_cache_sentinel`) ? ((be = []), (n[8] = be)) : (be = n[8]);
  let [O, we] = (0, q.useState)(be),
    [j, Fe] = (0, q.useState)(null),
    Ie;
  n[9] === i
    ? (Ie = n[10])
    : ((Ie = () => (i?.type === `remote-workspace-root-requested` ? (i.initialPath?.trim() ?? null) : null)),
      (n[9] = i),
      (n[10] = Ie));
  let [M, ze] = (0, q.useState)(Ie),
    [Be, N] = (0, q.useState)(null),
    [P, F] = (0, q.useState)(null),
    [I, Je] = (0, q.useState)(!1),
    L = (0, q.useRef)(null),
    Ye = M?.trim() ?? ``,
    Xe;
  n[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Xe = () => {
        (ze(null), N(null), F(null));
      }),
      (n[11] = Xe))
    : (Xe = n[11]);
  let Ze = Xe,
    $e = M != null && Ye.length > 0 ? he(Ye) : null,
    { data: R } = _({
      staleTime: Oe.FIVE_SECONDS,
      ...ke({ hostId: T?.selectedHostId ?? ``, directoryPath: $e, directoriesOnly: !0 }),
      enabled: T?.selectedHostId != null && T.selectedHostId !== `local` && M == null,
    });
  if (b != null) return null;
  let z = T.mode === `choose-remote-folder`,
    B = !z && T.selectedHostId === `local`,
    ot = x.length > 0,
    V = x.find((e) => e.hostId === T.selectedHostId) ?? null,
    dt = V != null && oe(V) ? V : null,
    H = z && M == null && R != null ? he(R.directoryPath) : $e,
    U = H == null ? null : Te(H),
    _t = H != null && y(H),
    vt = B
      ? null
      : mt({ hasConnectedRemoteConnections: ot, isRemoteProjectPathReady: _t, selectedConnection: V }),
    W = ht({ submitBlocker: vt }),
    G = Be?.hostId === T.selectedHostId && Be.comparablePath === U ? Be : null,
    K = I || vt != null || (j != null && le),
    Y;
  n[12] === I
    ? (Y = n[13])
    : ((Y = (e) => {
        I || (ze(e), N(null), F(null));
      }),
      (n[12] = I),
      (n[13] = Y));
  let Tt = Y,
    Et;
  n[14] === s
    ? (Et = n[15])
    : ((Et = () => {
        s();
      }),
      (n[14] = s),
      (n[15] = Et));
  let Dt = Et,
    Ot;
  n[16] !== Dt || n[17] !== z || n[18] !== I || n[19] !== m
    ? ((Ot = () => {
        I || (z || qe({ scope: m }), Dt());
      }),
      (n[16] = Dt),
      (n[17] = z),
      (n[18] = I),
      (n[19] = m),
      (n[20] = Ot))
    : (Ot = n[20]);
  let X = Ot,
    kt;
  n[21] !== T || n[22] !== z || n[23] !== I || n[24] !== D || n[25] !== a || n[26] !== m
    ? ((kt = (e) => {
        if (!(I || e === T.selectedHostId)) {
          if (
            (z || nt({ scope: m, projectType: e === `local` ? `local` : `remote` }),
            e === `local` && a != null)
          ) {
            a(D);
            return;
          }
          (Ze(), me({ ...T, initialDirectoryPath: null, selectedHostId: e }));
        }
      }),
      (n[21] = T),
      (n[22] = z),
      (n[23] = I),
      (n[24] = D),
      (n[25] = a),
      (n[26] = m),
      (n[27] = kt))
    : (kt = n[27]);
  let At = kt,
    jt = async () => {
      K ||
        (Je(!0),
        await (async () => {
          try {
            let e = await et().createLocal({
              appearance: j,
              initializeDefaultWorkspaceGitRepository: !m.get(He),
              name: D.trim(),
              setActive: u == null,
              sources: O,
            });
            if (e == null) {
              requestAnimationFrame(() => {
                L.current?.focus();
              });
              return;
            }
            (Ae(m, Ke(e.projectId)),
              u == null ? it(m, e.projectId) : u({ type: `local`, projectId: c(e.projectId) }),
              st({ scope: m, projectType: `local`, projectId: e.projectId }),
              s());
          } catch (e) {
            (Ue({ scope: m, projectType: `local`, error: e }),
              m
                .get(Ce)
                .danger(
                  v.formatMessage({
                    id: `projectSetup.createLocalProject.saveError`,
                    defaultMessage: `Failed to create project`,
                    description: `Toast shown when creating a local project fails`,
                  }),
                  { errorAnalytics: { toastId: `projectSetup.createLocalProject.saveError` } },
                ));
          }
        })().finally(() => Je(!1)));
    },
    Mt = async (e) => {
      if (K) return;
      let t = T.selectedHostId;
      if (t == null || V == null || H == null || U == null) return;
      if (e != null && (e.hostId !== t || e.path !== H || e.comparablePath !== U)) {
        F(null);
        return;
      }
      let n = u == null && T.mode === `setup` && T.setActive === !0;
      await (async () => {
        try {
          (Je(!0), N(null));
          let r = await bt(t, H, U),
            i = z ? ce : (Re(m.get, E.REMOTE_PROJECTS) ?? ce);
          if (!z) {
            let e = Pe(i, t, H);
            if (e != null) {
              N({
                comparablePath: U,
                conflictingProjectName: e.label,
                hostId: t,
                kind: `duplicate-project`,
                remoteName: V.displayName,
              });
              return;
            }
          }
          if (!r && !z && e == null && ve.workspaceFiles.createDirectory != null) {
            F({ comparablePath: U, hostId: t, path: H, remoteName: V.displayName });
            return;
          }
          if ((!r && e != null && (await xt(e.hostId, e.path)) && (r = await bt(t, H, U)), F(null), !r)) {
            N({ comparablePath: U, hostId: t, kind: `verification` });
            return;
          }
          if (z) {
            (h.dispatchHostMessage({ type: `workspace-root-option-picked`, root: H }), Dt());
            return;
          }
          let a = { appearance: j, hostId: t, label: D.trim() || pe(H), remotePath: H },
            s;
          if (ve.projects != null) {
            let e = await ve.projects.createRemote(a);
            if (e == null) {
              requestAnimationFrame(() => {
                L.current?.focus();
              });
              return;
            }
            s = e;
          } else
            ((s = { id: c(crypto.randomUUID()), hostId: a.hostId, label: a.label, remotePath: a.remotePath }),
              await Le(m, E.REMOTE_PROJECTS, [s, ...(i ?? [])]),
              j != null &&
                (await Le(
                  m,
                  E.PROJECT_APPEARANCES,
                  Ee({
                    projectAppearances: _e(Re(m.get, E.PROJECT_APPEARANCES)),
                    projectId: s.id,
                    appearance: j,
                  }),
                )),
              await Ge(m, [s.id, ...(Re(m.get, E.PROJECT_ORDER)?.filter((e) => e !== s.id) ?? [])]));
          (Ae(m, Ke(s.id)),
            n && (it(m, s.id), await Le(m, E.SELECTED_PROJECT, { type: `remote`, projectId: c(s.id) })),
            dt != null &&
              tt(g, {
                action: o.CODEX_REMOTE_SSH_CONNECTION_ACTION_CREATE_REMOTE_PROJECT,
                result: de.CODEX_REMOTE_SSH_CONNECTION_RESULT_SUCCEEDED,
                source: f.CODEX_REMOTE_SSH_CONNECTION_EVENT_SOURCE_PROJECT_SETUP,
                connection: dt,
                setActiveRemoteProject: n,
              }),
            st({ scope: m, projectType: `remote`, projectId: s.id }),
            u?.({ type: `remote`, projectId: c(s.id) }),
            Dt());
        } catch (e) {
          let t = e;
          (F(null),
            z || Ue({ scope: m, projectType: `remote`, error: t }),
            dt != null &&
              tt(g, {
                action: o.CODEX_REMOTE_SSH_CONNECTION_ACTION_CREATE_REMOTE_PROJECT,
                result: de.CODEX_REMOTE_SSH_CONNECTION_RESULT_FAILED,
                source: f.CODEX_REMOTE_SSH_CONNECTION_EVENT_SOURCE_PROJECT_SETUP,
                connection: dt,
                errorCategory: p.CODEX_REMOTE_SSH_CONNECTION_ERROR_CATEGORY_UNKNOWN,
                setActiveRemoteProject: n,
              }),
            De.error(`[remote-connections/mapping] save_failed`, {
              safe: {},
              sensitive: { hostId: T.selectedHostId, remoteProjectPath: H, error: t },
            }),
            m
              .get(Ce)
              .danger(
                v.formatMessage({
                  id: `projectSetupDialog.saveError`,
                  defaultMessage: `Failed to save project`,
                  description: `Toast shown when project setup fails`,
                }),
                { errorAnalytics: { toastId: `projectSetupDialog.saveError` } },
              ));
        }
      })().finally(() => {
        (Je(!1),
          e != null &&
            requestAnimationFrame(() => {
              L.current?.focus();
            }));
      });
    },
    Nt = (e) => {
      (e.preventDefault(), B ? jt() : Mt(null));
    },
    Z = B ? O.length > 0 : Ye.length > 0,
    Pt = !z && Z,
    Ft;
  n[28] !== T.selectedHostId || n[29] !== At || n[30] !== z || n[31] !== I || n[32] !== Pt
    ? ((Ft = (0, J.jsx)(pt, {
        disabled: I,
        readOnly: Pt,
        selectedHostId: T.selectedHostId,
        onSelect: At,
        remoteOnly: z,
      })),
      (n[28] = T.selectedHostId),
      (n[29] = At),
      (n[30] = z),
      (n[31] = I),
      (n[32] = Pt),
      (n[33] = Ft))
    : (Ft = n[33]);
  let Q = Ft,
    It;
  n[34] === z
    ? (It = n[35])
    : ((It = z
        ? (0, J.jsx)(k, {
            id: `workspaceRootDialog.title.pick`,
            defaultMessage: `Choose folder path`,
            description: `Title for the remote workspace path dialog when selecting a workspace`,
          })
        : (0, J.jsx)(k, {
            id: `projectSetup.createProject.title`,
            defaultMessage: `Create project`,
            description: `Title for the project creation dialog for local and remote devices`,
          })),
      (n[34] = z),
      (n[35] = It));
  let Lt = It,
    Rt = z
      ? (0, J.jsx)(k, {
          id: `workspaceRootDialog.description.pick`,
          defaultMessage: `Enter a folder path on {host} to use for this project.`,
          description: `Description for the remote workspace path dialog`,
          values: {
            host: (0, J.jsx)(`span`, {
              className: `font-medium text-default`,
              children: V?.displayName ?? (T.mode === `choose-remote-folder` ? T.host : ``),
            }),
          },
        })
      : null,
    zt = ue,
    $;
  n[36] === X
    ? ($ = n[37])
    : (($ = (e) => {
        e || X();
      }),
      (n[36] = X),
      (n[37] = $));
  let Bt = l,
    Vt;
  n[38] === Lt
    ? (Vt = n[39])
    : ((Vt = (0, J.jsx)(Se, { className: `contents`, children: Lt })), (n[38] = Lt), (n[39] = Vt));
  let Ht;
  n[40] === Rt
    ? (Ht = n[41])
    : ((Ht = Rt == null ? void 0 : (0, J.jsx)(ee, { className: `contents`, children: Rt })),
      (n[40] = Rt),
      (n[41] = Ht));
  let Ut;
  n[42] !== Vt || n[43] !== Ht
    ? ((Ut = (0, J.jsx)(A, { children: (0, J.jsx)(ae, { title: Vt, subtitle: Ht }) })),
      (n[42] = Vt),
      (n[43] = Ht),
      (n[44] = Ut))
    : (Ut = n[44]);
  let Wt =
      T.mode === `setup`
        ? (0, J.jsx)(A, {
            className: `gap-2`,
            children: (0, J.jsx)(Ve, {
              appearance: j,
              name: D,
              onAppearanceChange: (e) => {
                I || Fe(e);
              },
              onNameChange: (e) => {
                I || ye(e);
              },
              projectName: D || (H == null ? `` : pe(H)),
            }),
          })
        : null,
    Gt;
  n[45] !== G ||
  n[46] !== Q ||
  n[47] !== T.initialDirectoryPath ||
  n[48] !== T.selectedHostId ||
  n[49] !== Tt ||
  n[50] !== Z ||
  n[51] !== z ||
  n[52] !== B ||
  n[53] !== I ||
  n[54] !== O ||
  n[55] !== M ||
  n[56] !== V ||
  n[57] !== R?.directoryPath
    ? ((Gt = B
        ? (0, J.jsx)(Me, {
            disabled: I,
            sources: O,
            setSources: we,
            deviceLabel: Z ? Q : void 0,
            renderAddFolder: Z ? void 0 : (e) => (0, J.jsx)(ft, { onAdd: e, children: Q }),
          })
        : (0, J.jsxs)(A, {
            className: `gap-2`,
            children: [
              (0, J.jsxs)(`div`, {
                className: `flex items-center justify-between gap-2`,
                children: [
                  (0, J.jsx)(`span`, {
                    className: `shrink-0 text-sm font-medium text-default select-none`,
                    children: (0, J.jsx)(k, {
                      id: `projectSetup.createProject.sourceFolders`,
                      defaultMessage: `Source folders`,
                      description: `Label for project source folders on the selected device`,
                    }),
                  }),
                  !z && Z ? Q : null,
                ],
              }),
              z
                ? (0, J.jsxs)(J.Fragment, {
                    children: [
                      Q,
                      T.selectedHostId == null
                        ? null
                        : (0, J.jsx)(
                            rt,
                            {
                              disabled: I,
                              hostId: T.selectedHostId,
                              initialDirectoryPath: T.initialDirectoryPath,
                              inputDescriptionId: G == null ? void 0 : wt,
                              inputInvalid: G != null,
                              selectedPath: M,
                              setSelectedPath: Tt,
                            },
                            T.selectedHostId,
                          ),
                    ],
                  })
                : (0, J.jsx)(
                    gt,
                    {
                      hostId: T.selectedHostId,
                      path: M,
                      errorId: G == null ? void 0 : wt,
                      defaultPath: R?.directoryPath ?? null,
                      onPathChange: Tt,
                      disabled: I,
                      isConnected: V != null,
                      devicePicker: Q,
                    },
                    T.selectedHostId,
                  ),
              G == null
                ? null
                : (0, J.jsx)(`div`, {
                    id: wt,
                    role: `alert`,
                    children: (0, J.jsx)(St, {
                      Icon: ut,
                      tone: `danger`,
                      children:
                        G.kind === `verification`
                          ? (0, J.jsx)(k, {
                              id: `projectSetupDialog.pathVerificationFailed`,
                              defaultMessage: `We couldn’t verify this folder on the remote host. Check that it exists and try again`,
                              description: `Error shown after the app cannot verify a submitted remote folder path`,
                            })
                          : (0, J.jsx)(k, {
                              id: `projectSetupDialog.conflict.remoteProjectAlreadyMapped.standalone`,
                              defaultMessage: `This remote project on {remoteName} is already set up for {projectName}. Choose a different folder or remove that setup first.`,
                              description: `Error shown after submitting a remote project that is already set up for a different sidebar project on the same host`,
                              values: { projectName: G.conflictingProjectName, remoteName: G.remoteName },
                            }),
                    }),
                  }),
            ],
          })),
      (n[45] = G),
      (n[46] = Q),
      (n[47] = T.initialDirectoryPath),
      (n[48] = T.selectedHostId),
      (n[49] = Tt),
      (n[50] = Z),
      (n[51] = z),
      (n[52] = B),
      (n[53] = I),
      (n[54] = O),
      (n[55] = M),
      (n[56] = V),
      (n[57] = R?.directoryPath),
      (n[58] = Gt))
    : (Gt = n[58]);
  let Kt;
  n[59] === W
    ? (Kt = n[60])
    : ((Kt =
        W == null
          ? null
          : (0, J.jsx)(St, { Icon: lt, tone: `warning`, children: (0, J.jsx)(k, { ...W.message }) })),
      (n[59] = W),
      (n[60] = Kt));
  let qt;
  n[61] === Kt
    ? (qt = n[62])
    : ((qt = (0, J.jsx)(`div`, { className: `min-h-5`, children: Kt })), (n[61] = Kt), (n[62] = qt));
  let Jt;
  n[63] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Jt = (0, J.jsx)(k, {
        id: `workspaceRootDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for the project setup dialog`,
      })),
      (n[63] = Jt))
    : (Jt = n[63]);
  let Yt;
  n[64] === X
    ? (Yt = n[65])
    : ((Yt = (0, J.jsx)(C, { color: `ghost`, onClick: X, type: `button`, children: Jt })),
      (n[64] = X),
      (n[65] = Yt));
  let Xt;
  n[66] === z
    ? (Xt = n[67])
    : ((Xt = z
        ? (0, J.jsx)(k, {
            id: `workspaceRootDialog.confirmPick`,
            defaultMessage: `Use folder`,
            description: `Confirm button label for selecting a remote workspace path`,
          })
        : (0, J.jsx)(k, {
            id: `projectSetup.createProject.submit`,
            defaultMessage: `Create project`,
            description: `Confirm button label for creating a local or remote project`,
          })),
      (n[66] = z),
      (n[67] = Xt));
  let Zt;
  n[68] !== K || n[69] !== I || n[70] !== Xt
    ? ((Zt = (0, J.jsx)(C, {
        ref: L,
        color: `primary`,
        type: `submit`,
        loading: I,
        disabled: K,
        children: Xt,
      })),
      (n[68] = K),
      (n[69] = I),
      (n[70] = Xt),
      (n[71] = Zt))
    : (Zt = n[71]);
  let Qt;
  n[72] !== Yt || n[73] !== Zt
    ? ((Qt = (0, J.jsxs)(te, { children: [Yt, Zt] })), (n[72] = Yt), (n[73] = Zt), (n[74] = Qt))
    : (Qt = n[74]);
  let $t;
  n[75] !== qt || n[76] !== Qt
    ? (($t = (0, J.jsxs)(A, { children: [qt, Qt] })), (n[75] = qt), (n[76] = Qt), (n[77] = $t))
    : ($t = n[77]);
  let en;
  n[78] !== I || n[79] !== Ut || n[80] !== Wt || n[81] !== Gt || n[82] !== $t
    ? ((en = (0, J.jsxs)(`fieldset`, { className: `contents`, disabled: I, children: [Ut, Wt, Gt, $t] })),
      (n[78] = I),
      (n[79] = Ut),
      (n[80] = Wt),
      (n[81] = Gt),
      (n[82] = $t),
      (n[83] = en))
    : (en = n[83]);
  let tn;
  n[84] !== Bt || n[85] !== Nt || n[86] !== en
    ? ((tn = (0, J.jsx)(Bt, { as: `form`, onSubmit: Nt, children: en })),
      (n[84] = Bt),
      (n[85] = Nt),
      (n[86] = en),
      (n[87] = tn))
    : (tn = n[87]);
  let nn;
  n[88] !== I || n[89] !== P || n[90] !== Mt
    ? ((nn =
        P == null
          ? null
          : (0, J.jsx)(yt, {
              isCreating: I,
              missingDirectory: P,
              onCancel: () => {
                F(null);
              },
              onCloseAutoFocus: () => {
                L.current?.focus();
              },
              onConfirm: () => {
                Mt(P);
              },
            })),
      (n[88] = I),
      (n[89] = P),
      (n[90] = Mt),
      (n[91] = nn))
    : (nn = n[91]);
  let rn;
  return (
    n[92] !== zt || n[93] !== $ || n[94] !== tn || n[95] !== nn
      ? ((rn = (0, J.jsxs)(zt, {
          contentOverflow: `visible`,
          open: !0,
          onOpenChange: $,
          children: [tn, nn],
        })),
        (n[92] = zt),
        (n[93] = $),
        (n[94] = tn),
        (n[95] = nn),
        (n[96] = rn))
      : (rn = n[96]),
    rn
  );
}
function yt(e) {
  let t = (0, Ct.c)(29),
    { isCreating: n, missingDirectory: r, onCancel: i, onCloseAutoFocus: a, onConfirm: o } = e,
    s;
  t[0] === a
    ? (s = t[1])
    : ((s = {
        onCloseAutoFocus: (e) => {
          (e.preventDefault(), a());
        },
      }),
      (t[0] = a),
      (t[1] = s));
  let c;
  t[2] !== n || t[3] !== i
    ? ((c = (e) => {
        !e && !n && i();
      }),
      (t[2] = n),
      (t[3] = i),
      (t[4] = c))
    : (c = t[4]);
  let u;
  t[5] === o
    ? (u = t[6])
    : ((u = (e) => {
        (e.preventDefault(), o());
      }),
      (t[5] = o),
      (t[6] = u));
  let d;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, J.jsx)(Se, {
        className: `contents`,
        children: (0, J.jsx)(k, {
          id: `projectSetupDialog.createMissingRemoteFolderTitle`,
          defaultMessage: `Create missing folder?`,
          description: `Title for a confirmation dialog shown before creating a missing folder on a remote host`,
        }),
      })),
      (t[7] = d))
    : (d = t[7]);
  let f;
  t[8] !== r.path || t[9] !== r.remoteName
    ? ((f = (0, J.jsx)(A, {
        children: (0, J.jsx)(ae, {
          title: d,
          subtitle: (0, J.jsx)(ee, {
            className: `contents`,
            children: (0, J.jsx)(k, {
              id: `projectSetupDialog.createMissingRemoteFolderDescription`,
              defaultMessage: `Create {path} on {remoteName} before adding the project?`,
              description: `Confirmation question shown before creating a missing folder on a remote host. The path is the folder path and the remote name identifies the remote host`,
              values: { path: r.path, remoteName: r.remoteName },
            }),
          }),
        }),
      })),
      (t[8] = r.path),
      (t[9] = r.remoteName),
      (t[10] = f))
    : (f = t[10]);
  let p;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, J.jsx)(k, {
        id: `projectSetupDialog.createMissingRemoteFolderCancel`,
        defaultMessage: `Cancel`,
        description: `Button label that cancels creating a missing folder on a remote host`,
      })),
      (t[11] = p))
    : (p = t[11]);
  let m;
  t[12] !== n || t[13] !== i
    ? ((m = (0, J.jsx)(C, {
        autoFocus: !0,
        color: `secondary`,
        disabled: n,
        type: `button`,
        onClick: i,
        children: p,
      })),
      (t[12] = n),
      (t[13] = i),
      (t[14] = m))
    : (m = t[14]);
  let h;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, J.jsx)(k, {
        id: `projectSetupDialog.createMissingRemoteFolderConfirm`,
        defaultMessage: `Create folder`,
        description: `Button label that confirms creating a missing folder on a remote host`,
      })),
      (t[15] = h))
    : (h = t[15]);
  let g;
  t[16] === n
    ? (g = t[17])
    : ((g = (0, J.jsx)(C, { color: `primary`, loading: n, type: `submit`, children: h })),
      (t[16] = n),
      (t[17] = g));
  let _;
  t[18] !== m || t[19] !== g
    ? ((_ = (0, J.jsx)(A, { children: (0, J.jsxs)(te, { children: [m, g] }) })),
      (t[18] = m),
      (t[19] = g),
      (t[20] = _))
    : (_ = t[20]);
  let v;
  t[21] !== _ || t[22] !== u || t[23] !== f
    ? ((v = (0, J.jsxs)(l, { as: `form`, onSubmit: u, children: [f, _] })),
      (t[21] = _),
      (t[22] = u),
      (t[23] = f),
      (t[24] = v))
    : (v = t[24]);
  let y;
  return (
    t[25] !== s || t[26] !== v || t[27] !== c
      ? ((y = (0, J.jsx)(ue, {
          open: !0,
          contentProps: s,
          showDialogClose: !1,
          size: `compact`,
          onOpenChange: c,
          children: v,
        })),
        (t[25] = s),
        (t[26] = v),
        (t[27] = c),
        (t[28] = y))
      : (y = t[28]),
    y
  );
}
async function bt(e, t, n) {
  if (!y(t.trim())) return !1;
  try {
    let r = await Ye({ hostId: e, directoryPath: t, directoriesOnly: !0 });
    return Te(r.directoryPath) === n;
  } catch {
    return !1;
  }
}
async function xt(e, t) {
  let n = ve.workspaceFiles.createDirectory;
  if (n == null) return !1;
  try {
    return (await n({ hostId: e, path: t }), !0);
  } catch {
    return !1;
  }
}
function St(e) {
  let t = (0, Ct.c)(11),
    { children: n, Icon: r, tone: i } = e,
    a = i === `warning` ? `text-warning` : `text-danger`,
    o;
  t[0] === a
    ? (o = t[1])
    : ((o = g(`mt-1 flex items-start gap-1.5 text-sm leading-5`, a)), (t[0] = a), (t[1] = o));
  let s;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = g(`icon-xs mt-1 shrink-0`)), (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] === r ? (c = t[4]) : ((c = (0, J.jsx)(r, { className: s })), (t[3] = r), (t[4] = c));
  let l;
  t[5] === n ? (l = t[6]) : ((l = (0, J.jsx)(`div`, { children: n })), (t[5] = n), (t[6] = l));
  let u;
  return (
    t[7] !== o || t[8] !== c || t[9] !== l
      ? ((u = (0, J.jsxs)(`div`, { className: o, children: [c, l] })),
        (t[7] = o),
        (t[8] = c),
        (t[9] = l),
        (t[10] = u))
      : (u = t[10]),
    u
  );
}
var Ct, q, J, wt;
function Y() {
  return (Y = e(() => {
    ((Ct = ne()),
      se(),
      ye(),
      v(),
      fe(),
      we(),
      (q = a()),
      S(),
      Ze(),
      z(),
      w(),
      u(),
      s(),
      le(),
      Ie(),
      Fe(),
      R(),
      dt(),
      V(),
      D(),
      ot(),
      Je(),
      P(),
      ze(),
      j(),
      $e(),
      F(),
      M(),
      Be(),
      me(),
      L(),
      n(),
      I(),
      N(),
      Xe(),
      ie(),
      r(),
      B(),
      U(),
      H(),
      G(),
      (J = m()),
      (wt = `remote-project-path-submit-error`));
  }))();
}
export { yt as n, Y as r, K as t };
//# sourceMappingURL=create-project-dialog-d89806da2478.js.map
