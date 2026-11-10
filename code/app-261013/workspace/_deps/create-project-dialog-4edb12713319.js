import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  CPt as n,
  Cgt as r,
  Cot as i,
  FR as a,
  Get as o,
  Gut as s,
  Hbt as c,
  IDt as l,
  Ixt as u,
  Jet as d,
  Jut as f,
  Kat as p,
  Ket as m,
  LR as h,
  Mdt as g,
  Pxt as _,
  Rnt as v,
  SJ as y,
  SPt as b,
  TJ as x,
  VDt as ee,
  Vxt as S,
  Yet as te,
  _Mt as C,
  _O as ne,
  cO as re,
  crt as ie,
  cz as ae,
  eU as oe,
  fO as se,
  gMt as ce,
  gO as le,
  gPt as ue,
  hPt as de,
  hot as fe,
  ict as pe,
  jDt as w,
  kDt as T,
  lO as E,
  lot as me,
  mO as he,
  oO as ge,
  qat as _e,
  rct as ve,
  rrt as ye,
  rst as D,
  sO as be,
  srt as xe,
  sz as O,
  t3 as Se,
  tct as Ce,
  vO as k,
  vht as we,
  vzt as Te,
  wot as Ee,
  xMt as A,
  yzt as De,
} from "./app-shared-bbfeca5e5737.js";
import {
  $5t as j,
  A7t as Oe,
  AEr as ke,
  Cur as Ae,
  E_r as je,
  F_r as Me,
  Fon as Ne,
  Grt as Pe,
  Her as Fe,
  Ion as Ie,
  JSr as Le,
  Jun as M,
  M_n as Re,
  N_n as ze,
  P_n as Be,
  P_r as Ve,
  S_n as N,
  St as P,
  Sur as F,
  T_r as He,
  Wrt as I,
  XDr as Ue,
  _vn as We,
  b_n as Ge,
  e7t as Ke,
  eOr as qe,
  gDn as Je,
  gvn as Ye,
  hDn as L,
  hvn as Xe,
  j_n as Ze,
  j_r as Qe,
  k7t as $e,
  kEr as et,
  m_r as tt,
  mvn as nt,
  n9t as rt,
  pvn as it,
  qSr as R,
  r9t as z,
  xt as at,
} from "./app-initial-5851df3f6cb1.js";
import { by as ot, oh as st, sh as B, xy as ct } from "./app-primary-fe8a450b3b04.js";
import { n as lt, r as V, t as ut } from "./project-device-picker-c835093b649c.js";
function dt({ hasConnectedRemoteConnections: e, isRemoteProjectPathReady: t, selectedConnection: n }) {
  return e
    ? n == null
      ? { kind: `selected-remote-unavailable` }
      : t
        ? null
        : { kind: `path-not-ready` }
    : { kind: `no-connected-remote` };
}
function ft({ submitBlocker: e }) {
  if (e != null)
    switch (e.kind) {
      case `no-connected-remote`:
        return {
          message: T({
            id: `projectSetupDialog.noConnectedRemotes`,
            defaultMessage: `No remote hosts are connected right now.`,
            description: `Message shown in the remote project setup dialog when no remote hosts are connected`,
          }),
        };
      case `selected-remote-unavailable`:
        return {
          message: T({
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
function H() {
  return (H = e(() => {
    w();
  }))();
}
function pt(e) {
  let n = (0, U.c)(21),
    {
      devicePicker: r,
      hostId: i,
      path: o,
      defaultPath: s,
      onPathChange: c,
      disabled: u,
      isConnected: d,
      errorId: f,
    } = e,
    p = ee(),
    [m, h] = (0, W.useState)(!1),
    [g, _] = (0, W.useState)(null),
    v = g ?? s,
    b;
  n[0] !== r || n[1] !== u || n[2] !== f || n[3] !== p || n[4] !== d || n[5] !== c || n[6] !== o
    ? ((b = (0, G.jsx)(`div`, {
        className: `divide-y divide-border overflow-hidden rounded-lg border border-default bg-primary-soft`,
        children: o
          ? (0, G.jsxs)(`div`, {
              className: `flex h-12 min-w-0 items-center gap-2 px-3 text-sm`,
              children: [
                (0, G.jsx)(oe, { className: `text-secondary` }),
                (0, G.jsx)(O, {
                  tooltipContent: o,
                  children: (0, G.jsx)(`button`, {
                    type: `button`,
                    className: `min-w-0 flex-1 cursor-interaction truncate text-start`,
                    disabled: u || !d,
                    "aria-describedby": f,
                    onClick: () => {
                      (_(o), h(!0));
                    },
                    children: a(o) || o,
                  }),
                }),
                (0, G.jsx)(t, {
                  color: `ghost`,
                  size: `icon`,
                  type: `button`,
                  disabled: u,
                  "aria-label": p.formatMessage({
                    id: `projectSetup.remoteSource.remove`,
                    defaultMessage: `Remove folder`,
                    description: `Removes the chosen folder from the new remote project`,
                  }),
                  onClick: () => c(null),
                  children: (0, G.jsx)(y, {}),
                }),
              ],
            })
          : (0, G.jsx)(lt, {
              disabled: u || !d,
              onAdd: () => {
                (_(null), h(!0));
              },
              children: r,
            }),
      })),
      (n[0] = r),
      (n[1] = u),
      (n[2] = f),
      (n[3] = p),
      (n[4] = d),
      (n[5] = c),
      (n[6] = o),
      (n[7] = b))
    : (b = n[7]);
  let x;
  n[8] !== u ||
  n[9] !== g ||
  n[10] !== f ||
  n[11] !== i ||
  n[12] !== d ||
  n[13] !== m ||
  n[14] !== c ||
  n[15] !== o ||
  n[16] !== v
    ? ((x =
        m && i != null
          ? (0, G.jsx)(he, {
              open: !0,
              onOpenChange: h,
              children: (0, G.jsxs)(ge, {
                as: `form`,
                onSubmit: (e) => {
                  (e.preventDefault(),
                    e.stopPropagation(),
                    !u && d && v != null && we(v.trim()) && (c(v.trim()), h(!1)));
                },
                children: [
                  (0, G.jsx)(E, {
                    children: (0, G.jsx)(re, {
                      title: (0, G.jsx)(ne, {
                        className: `contents`,
                        children: (0, G.jsx)(l, {
                          id: `projectSetup.remoteSource.choose`,
                          defaultMessage: `Choose a source folder`,
                          description: `Title of the remote source folder picker opened from project creation`,
                        }),
                      }),
                    }),
                  }),
                  (0, G.jsx)(E, {
                    children: (0, G.jsx)(at, {
                      hostId: i,
                      initialDirectoryPath: o,
                      selectedPath: g,
                      inputDescriptionId: f,
                      inputInvalid: f != null,
                      setSelectedPath: _,
                      disabled: u || !d,
                    }),
                  }),
                  (0, G.jsx)(E, {
                    children: (0, G.jsxs)(be, {
                      children: [
                        (0, G.jsx)(t, {
                          type: `button`,
                          color: `ghost`,
                          onClick: () => h(!1),
                          children: (0, G.jsx)(l, {
                            id: `projectSetup.remoteSource.cancel`,
                            defaultMessage: `Cancel`,
                            description: `Cancels choosing a remote project source folder`,
                          }),
                        }),
                        (0, G.jsx)(t, {
                          type: `submit`,
                          color: `primary`,
                          disabled: u || !d || v == null || !we(v.trim()),
                          children: (0, G.jsx)(l, {
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
      (n[8] = u),
      (n[9] = g),
      (n[10] = f),
      (n[11] = i),
      (n[12] = d),
      (n[13] = m),
      (n[14] = c),
      (n[15] = o),
      (n[16] = v),
      (n[17] = x))
    : (x = n[17]);
  let S;
  return (
    n[18] !== b || n[19] !== x
      ? ((S = (0, G.jsxs)(G.Fragment, { children: [b, x] })), (n[18] = b), (n[19] = x), (n[20] = S))
      : (S = n[20]),
    S
  );
}
var U, W, G;
function mt() {
  return (mt = e(() => {
    ((U = Te()), D(), (W = De()), w(), Se(), k(), se(), x(), ae(), h(), V(), P(), (G = A()));
  }))();
}
function ht(e) {
  let a = (0, bt.c)(97),
    { initialName: h, initialRequest: _, onSelectLocalDevice: v, onClose: y, onProjectCreated: b } = e,
    x = h === void 0 ? `` : h,
    C = u(i),
    ae = S(qe),
    oe = ee(),
    se = S(Ke),
    { remoteConnections: ce, selectedRemoteHostId: de } = S(Je),
    w = S(He),
    T = Pe(ce),
    { data: me } = Ae(c.REMOTE_PROJECTS),
    { isLoading: _e } = Ae(c.PROJECT_APPEARANCES),
    ye;
  a[0] !== T || a[1] !== de || a[2] !== w?.hostId
    ? ((ye =
        T.find((e) => e.hostId === w?.hostId)?.hostId ??
        T.find((e) => e.hostId === de)?.hostId ??
        T[0]?.hostId ??
        null),
      (a[0] = T),
      (a[1] = de),
      (a[2] = w?.hostId),
      (a[3] = ye))
    : (ye = a[3]);
  let D = ye,
    xe;
  a[4] !== T || a[5] !== _ || a[6] !== D
    ? ((xe = () => {
        if (_ == null)
          return { mode: `setup`, initialDirectoryPath: null, selectedHostId: `local`, setActive: !0 };
        if (_.type === `open-create-remote-project-modal`)
          return {
            mode: `setup`,
            initialDirectoryPath: null,
            selectedHostId: T.find((e) => e.hostId === _.hostId)?.hostId ?? D,
            setActive: _.setActive,
          };
        let e = _.host.trim(),
          t = _.hostId ?? T.find((t) => t.displayName === e)?.hostId ?? D;
        return _.mode === `pick`
          ? {
              mode: `choose-remote-folder`,
              host: e,
              initialDirectoryPath: _.initialPath?.trim() ?? null,
              selectedHostId: t,
            }
          : {
              mode: `setup`,
              initialDirectoryPath: _.initialPath?.trim() ?? null,
              selectedHostId: t,
              setActive: _.setActive,
            };
      }),
      (a[4] = T),
      (a[5] = _),
      (a[6] = D),
      (a[7] = xe))
    : (xe = a[7]);
  let [O, Se] = (0, K.useState)(xe),
    [k, Te] = (0, K.useState)(x),
    Ee;
  a[8] === Symbol.for(`react.memo_cache_sentinel`) ? ((Ee = []), (a[8] = Ee)) : (Ee = a[8]);
  let [A, De] = (0, K.useState)(Ee),
    [j, Oe] = (0, K.useState)(null),
    Ne;
  a[9] === _
    ? (Ne = a[10])
    : ((Ne = () => (_?.type === `remote-workspace-root-requested` ? (_.initialPath?.trim() ?? null) : null)),
      (a[9] = _),
      (a[10] = Ne));
  let [M, Be] = (0, K.useState)(Ne),
    [Ve, N] = (0, K.useState)(null),
    [P, F] = (0, K.useState)(null),
    [I, Ue] = (0, K.useState)(!1),
    L = (0, K.useRef)(null),
    Ze = M?.trim() ?? ``,
    et;
  a[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((et = () => {
        (Be(null), N(null), F(null));
      }),
      (a[11] = et))
    : (et = a[11]);
  let tt = et,
    it = M != null && Ze.length > 0 ? pe(Ze) : null,
    { data: R } = ie(`remote-workspace-directory-entries`, {
      params: { hostId: O?.selectedHostId ?? ``, directoryPath: it, directoriesOnly: !0 },
      queryConfig: { enabled: O?.selectedHostId != null && O.selectedHostId !== `local` && M == null },
    });
  if (se != null) return null;
  let z = O.mode === `choose-remote-folder`,
    B = !z && O.selectedHostId === `local`,
    ct = T.length > 0,
    V = T.find((e) => e.hostId === O.selectedHostId) ?? null,
    H = V != null && r(V) ? V : null,
    U = z && M == null && R != null ? pe(R.directoryPath) : it,
    W = U == null ? null : ve(U),
    G = U != null && we(U),
    mt = B
      ? null
      : dt({ hasConnectedRemoteConnections: ct, isRemoteProjectPathReady: G, selectedConnection: V }),
    ht = ft({ submitBlocker: mt }),
    J = Ve?.hostId === O.selectedHostId && Ve.comparablePath === W ? Ve : null,
    St = I || mt != null || (j != null && _e),
    Ct;
  a[12] === I
    ? (Ct = a[13])
    : ((Ct = (e) => {
        I || (Be(e), N(null), F(null));
      }),
      (a[12] = I),
      (a[13] = Ct));
  let wt = Ct,
    Tt;
  a[14] === y
    ? (Tt = a[15])
    : ((Tt = () => {
        y();
      }),
      (a[14] = y),
      (a[15] = Tt));
  let Et = Tt,
    Dt;
  a[16] !== Et || a[17] !== z || a[18] !== I || a[19] !== C
    ? ((Dt = () => {
        I || (z || nt({ scope: C }), Et());
      }),
      (a[16] = Et),
      (a[17] = z),
      (a[18] = I),
      (a[19] = C),
      (a[20] = Dt))
    : (Dt = a[20]);
  let Y = Dt,
    Ot;
  a[21] !== O || a[22] !== z || a[23] !== I || a[24] !== k || a[25] !== v || a[26] !== C
    ? ((Ot = (e) => {
        if (!(I || e === O.selectedHostId)) {
          if (
            (z || Ye({ scope: C, projectType: e === `local` ? `local` : `remote` }),
            e === `local` && v != null)
          ) {
            v(k);
            return;
          }
          (tt(), Se({ ...O, initialDirectoryPath: null, selectedHostId: e }));
        }
      }),
      (a[21] = O),
      (a[22] = z),
      (a[23] = I),
      (a[24] = k),
      (a[25] = v),
      (a[26] = C),
      (a[27] = Ot))
    : (Ot = a[27]);
  let kt = Ot,
    At = async () => {
      St ||
        (Ue(!0),
        await (async () => {
          try {
            let e = await ze().createLocal({
              appearance: j,
              initializeDefaultWorkspaceGitRepository: !C.get(ke),
              name: k.trim(),
              setActive: b == null,
              sources: A,
            });
            if (e == null) {
              requestAnimationFrame(() => {
                L.current?.focus();
              });
              return;
            }
            (Ie(C, Fe(e.projectId)),
              b == null ? je(C, e.projectId) : b({ type: `local`, projectId: g(e.projectId) }),
              We({ scope: C, projectType: `local`, projectId: e.projectId }),
              y());
          } catch (e) {
            (Xe({ scope: C, projectType: `local`, error: e }),
              C.get(fe).danger(
                oe.formatMessage({
                  id: `projectSetup.createLocalProject.saveError`,
                  defaultMessage: `Failed to create project`,
                  description: `Toast shown when creating a local project fails`,
                }),
                { errorAnalytics: { toastId: `projectSetup.createLocalProject.saveError` } },
              ));
          }
        })().finally(() => Ue(!1)));
    },
    jt = async (e) => {
      if (St) return;
      let t = O.selectedHostId;
      if (t == null || V == null || U == null || W == null) return;
      if (e != null && (e.hostId !== t || e.path !== U || e.comparablePath !== W)) {
        F(null);
        return;
      }
      let r = b == null && O.mode === `setup` && O.setActive === !0;
      await (async () => {
        try {
          (Ue(!0), N(null));
          let n = await _t(t, U, W),
            i = z ? me : (Qe(C.get, c.REMOTE_PROJECTS) ?? me);
          if (!z) {
            let e = Ge(i, t, U);
            if (e != null) {
              N({
                comparablePath: W,
                conflictingProjectName: e.label,
                hostId: t,
                kind: `duplicate-project`,
                remoteName: V.displayName,
              });
              return;
            }
          }
          if (!n && !z && e == null && p.workspaceFiles.createDirectory != null) {
            F({ comparablePath: W, hostId: t, path: U, remoteName: V.displayName });
            return;
          }
          if ((!n && e != null && (await vt(e.hostId, e.path)) && (n = await _t(t, U, W)), F(null), !n)) {
            N({ comparablePath: W, hostId: t, kind: `verification` });
            return;
          }
          if (z) {
            (ue.dispatchHostMessage({ type: `workspace-root-option-picked`, root: U }), Et());
            return;
          }
          let a = { appearance: j, hostId: t, label: k.trim() || Ce(U), remotePath: U },
            l;
          if (p.projects != null) {
            let e = await p.projects.createRemote(a);
            if (e == null) {
              requestAnimationFrame(() => {
                L.current?.focus();
              });
              return;
            }
            l = e;
          } else
            ((l = { id: g(crypto.randomUUID()), hostId: a.hostId, label: a.label, remotePath: a.remotePath }),
              await Me(C, c.REMOTE_PROJECTS, [l, ...(i ?? [])]),
              j != null &&
                (await Me(
                  C,
                  c.PROJECT_APPEARANCES,
                  s({
                    projectAppearances: f(Qe(C.get, c.PROJECT_APPEARANCES)),
                    projectId: l.id,
                    appearance: j,
                  }),
                )),
              await Re(C, [l.id, ...(Qe(C.get, c.PROJECT_ORDER)?.filter((e) => e !== l.id) ?? [])]));
          (Ie(C, Fe(l.id)),
            r && (je(C, l.id), await Me(C, c.SELECTED_PROJECT, { type: `remote`, projectId: g(l.id) })),
            H != null &&
              Le(ae, {
                action: o.CODEX_REMOTE_SSH_CONNECTION_ACTION_CREATE_REMOTE_PROJECT,
                result: te.CODEX_REMOTE_SSH_CONNECTION_RESULT_SUCCEEDED,
                source: d.CODEX_REMOTE_SSH_CONNECTION_EVENT_SOURCE_PROJECT_SETUP,
                connection: H,
                setActiveRemoteProject: r,
              }),
            We({ scope: C, projectType: `remote`, projectId: l.id }),
            b?.({ type: `remote`, projectId: g(l.id) }),
            Et());
        } catch (e) {
          let t = e;
          (F(null),
            z || Xe({ scope: C, projectType: `remote`, error: t }),
            H != null &&
              Le(ae, {
                action: o.CODEX_REMOTE_SSH_CONNECTION_ACTION_CREATE_REMOTE_PROJECT,
                result: te.CODEX_REMOTE_SSH_CONNECTION_RESULT_FAILED,
                source: d.CODEX_REMOTE_SSH_CONNECTION_EVENT_SOURCE_PROJECT_SETUP,
                connection: H,
                errorCategory: m.CODEX_REMOTE_SSH_CONNECTION_ERROR_CATEGORY_UNKNOWN,
                setActiveRemoteProject: r,
              }),
            n.error(`[remote-connections/mapping] save_failed`, {
              safe: {},
              sensitive: { hostId: O.selectedHostId, remoteProjectPath: U, error: t },
            }),
            C.get(fe).danger(
              oe.formatMessage({
                id: `projectSetupDialog.saveError`,
                defaultMessage: `Failed to save project`,
                description: `Toast shown when project setup fails`,
              }),
              { errorAnalytics: { toastId: `projectSetupDialog.saveError` } },
            ));
        }
      })().finally(() => {
        (Ue(!1),
          e != null &&
            requestAnimationFrame(() => {
              L.current?.focus();
            }));
      });
    },
    Mt = (e) => {
      (e.preventDefault(), B ? At() : jt(null));
    },
    X = B ? A.length > 0 : Ze.length > 0,
    Nt = !z && X,
    Pt;
  a[28] !== O.selectedHostId || a[29] !== kt || a[30] !== z || a[31] !== I || a[32] !== Nt
    ? ((Pt = (0, q.jsx)(ut, {
        disabled: I,
        readOnly: Nt,
        selectedHostId: O.selectedHostId,
        onSelect: kt,
        remoteOnly: z,
      })),
      (a[28] = O.selectedHostId),
      (a[29] = kt),
      (a[30] = z),
      (a[31] = I),
      (a[32] = Nt),
      (a[33] = Pt))
    : (Pt = a[33]);
  let Z = Pt,
    Ft;
  a[34] === z
    ? (Ft = a[35])
    : ((Ft = z
        ? (0, q.jsx)(l, {
            id: `workspaceRootDialog.title.pick`,
            defaultMessage: `Choose folder path`,
            description: `Title for the remote workspace path dialog when selecting a workspace`,
          })
        : (0, q.jsx)(l, {
            id: `projectSetup.createProject.title`,
            defaultMessage: `Create project`,
            description: `Title for the project creation dialog for local and remote devices`,
          })),
      (a[34] = z),
      (a[35] = Ft));
  let It = Ft,
    Lt = z
      ? (0, q.jsx)(l, {
          id: `workspaceRootDialog.description.pick`,
          defaultMessage: `Enter a folder path on {host} to use for this project.`,
          description: `Description for the remote workspace path dialog`,
          values: {
            host: (0, q.jsx)(`span`, {
              className: `font-medium text-default`,
              children: V?.displayName ?? (O.mode === `choose-remote-folder` ? O.host : ``),
            }),
          },
        })
      : null,
    Rt = he,
    Q;
  a[36] === Y
    ? (Q = a[37])
    : ((Q = (e) => {
        e || Y();
      }),
      (a[36] = Y),
      (a[37] = Q));
  let zt = ge,
    Bt;
  a[38] === It
    ? (Bt = a[39])
    : ((Bt = (0, q.jsx)(ne, { className: `contents`, children: It })), (a[38] = It), (a[39] = Bt));
  let $;
  a[40] === Lt
    ? ($ = a[41])
    : (($ = Lt == null ? void 0 : (0, q.jsx)(le, { className: `contents`, children: Lt })),
      (a[40] = Lt),
      (a[41] = $));
  let Vt;
  a[42] !== Bt || a[43] !== $
    ? ((Vt = (0, q.jsx)(E, { children: (0, q.jsx)(re, { title: Bt, subtitle: $ }) })),
      (a[42] = Bt),
      (a[43] = $),
      (a[44] = Vt))
    : (Vt = a[44]);
  let Ht =
      O.mode === `setup`
        ? (0, q.jsx)(E, {
            className: `gap-2`,
            children: (0, q.jsx)($e, {
              appearance: j,
              name: k,
              onAppearanceChange: (e) => {
                I || Oe(e);
              },
              onNameChange: (e) => {
                I || Te(e);
              },
              projectName: k || (U == null ? `` : Ce(U)),
            }),
          })
        : null,
    Ut;
  a[45] !== J ||
  a[46] !== Z ||
  a[47] !== O.initialDirectoryPath ||
  a[48] !== O.selectedHostId ||
  a[49] !== wt ||
  a[50] !== X ||
  a[51] !== z ||
  a[52] !== B ||
  a[53] !== I ||
  a[54] !== A ||
  a[55] !== M ||
  a[56] !== V ||
  a[57] !== R?.directoryPath
    ? ((Ut = B
        ? (0, q.jsx)(rt, {
            disabled: I,
            sources: A,
            setSources: De,
            deviceLabel: X ? Z : void 0,
            renderAddFolder: X ? void 0 : (e) => (0, q.jsx)(lt, { onAdd: e, children: Z }),
          })
        : (0, q.jsxs)(E, {
            className: `gap-2`,
            children: [
              (0, q.jsxs)(`div`, {
                className: `flex items-center justify-between gap-2`,
                children: [
                  (0, q.jsx)(`span`, {
                    className: `shrink-0 text-sm font-medium text-default select-none`,
                    children: (0, q.jsx)(l, {
                      id: `projectSetup.createProject.sourceFolders`,
                      defaultMessage: `Source folders`,
                      description: `Label for project source folders on the selected device`,
                    }),
                  }),
                  !z && X ? Z : null,
                ],
              }),
              z
                ? (0, q.jsxs)(q.Fragment, {
                    children: [
                      Z,
                      O.selectedHostId == null
                        ? null
                        : (0, q.jsx)(
                            at,
                            {
                              disabled: I,
                              hostId: O.selectedHostId,
                              initialDirectoryPath: O.initialDirectoryPath,
                              inputDescriptionId: J == null ? void 0 : xt,
                              inputInvalid: J != null,
                              selectedPath: M,
                              setSelectedPath: wt,
                            },
                            O.selectedHostId,
                          ),
                    ],
                  })
                : (0, q.jsx)(
                    pt,
                    {
                      hostId: O.selectedHostId,
                      path: M,
                      errorId: J == null ? void 0 : xt,
                      defaultPath: R?.directoryPath ?? null,
                      onPathChange: wt,
                      disabled: I,
                      isConnected: V != null,
                      devicePicker: Z,
                    },
                    O.selectedHostId,
                  ),
              J == null
                ? null
                : (0, q.jsx)(`div`, {
                    id: xt,
                    role: `alert`,
                    children: (0, q.jsx)(yt, {
                      Icon: st,
                      tone: `danger`,
                      children:
                        J.kind === `verification`
                          ? (0, q.jsx)(l, {
                              id: `projectSetupDialog.pathVerificationFailed`,
                              defaultMessage: `We couldn’t verify this folder on the remote host. Check that it exists and try again`,
                              description: `Error shown after the app cannot verify a submitted remote folder path`,
                            })
                          : (0, q.jsx)(l, {
                              id: `projectSetupDialog.conflict.remoteProjectAlreadyMapped.standalone`,
                              defaultMessage: `This remote project on {remoteName} is already set up for {projectName}. Choose a different folder or remove that setup first.`,
                              description: `Error shown after submitting a remote project that is already set up for a different sidebar project on the same host`,
                              values: { projectName: J.conflictingProjectName, remoteName: J.remoteName },
                            }),
                    }),
                  }),
            ],
          })),
      (a[45] = J),
      (a[46] = Z),
      (a[47] = O.initialDirectoryPath),
      (a[48] = O.selectedHostId),
      (a[49] = wt),
      (a[50] = X),
      (a[51] = z),
      (a[52] = B),
      (a[53] = I),
      (a[54] = A),
      (a[55] = M),
      (a[56] = V),
      (a[57] = R?.directoryPath),
      (a[58] = Ut))
    : (Ut = a[58]);
  let Wt;
  a[59] === ht
    ? (Wt = a[60])
    : ((Wt =
        ht == null
          ? null
          : (0, q.jsx)(yt, { Icon: ot, tone: `warning`, children: (0, q.jsx)(l, { ...ht.message }) })),
      (a[59] = ht),
      (a[60] = Wt));
  let Gt;
  a[61] === Wt
    ? (Gt = a[62])
    : ((Gt = (0, q.jsx)(`div`, { className: `min-h-5`, children: Wt })), (a[61] = Wt), (a[62] = Gt));
  let Kt;
  a[63] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Kt = (0, q.jsx)(l, {
        id: `workspaceRootDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for the project setup dialog`,
      })),
      (a[63] = Kt))
    : (Kt = a[63]);
  let qt;
  a[64] === Y
    ? (qt = a[65])
    : ((qt = (0, q.jsx)(t, { color: `ghost`, onClick: Y, type: `button`, children: Kt })),
      (a[64] = Y),
      (a[65] = qt));
  let Jt;
  a[66] === z
    ? (Jt = a[67])
    : ((Jt = z
        ? (0, q.jsx)(l, {
            id: `workspaceRootDialog.confirmPick`,
            defaultMessage: `Use folder`,
            description: `Confirm button label for selecting a remote workspace path`,
          })
        : (0, q.jsx)(l, {
            id: `projectSetup.createProject.submit`,
            defaultMessage: `Create project`,
            description: `Confirm button label for creating a local or remote project`,
          })),
      (a[66] = z),
      (a[67] = Jt));
  let Yt;
  a[68] !== St || a[69] !== I || a[70] !== Jt
    ? ((Yt = (0, q.jsx)(t, {
        ref: L,
        color: `primary`,
        type: `submit`,
        loading: I,
        disabled: St,
        children: Jt,
      })),
      (a[68] = St),
      (a[69] = I),
      (a[70] = Jt),
      (a[71] = Yt))
    : (Yt = a[71]);
  let Xt;
  a[72] !== qt || a[73] !== Yt
    ? ((Xt = (0, q.jsxs)(be, { children: [qt, Yt] })), (a[72] = qt), (a[73] = Yt), (a[74] = Xt))
    : (Xt = a[74]);
  let Zt;
  a[75] !== Gt || a[76] !== Xt
    ? ((Zt = (0, q.jsxs)(E, { children: [Gt, Xt] })), (a[75] = Gt), (a[76] = Xt), (a[77] = Zt))
    : (Zt = a[77]);
  let Qt;
  a[78] !== I || a[79] !== Vt || a[80] !== Ht || a[81] !== Ut || a[82] !== Zt
    ? ((Qt = (0, q.jsxs)(`fieldset`, { className: `contents`, disabled: I, children: [Vt, Ht, Ut, Zt] })),
      (a[78] = I),
      (a[79] = Vt),
      (a[80] = Ht),
      (a[81] = Ut),
      (a[82] = Zt),
      (a[83] = Qt))
    : (Qt = a[83]);
  let $t;
  a[84] !== zt || a[85] !== Mt || a[86] !== Qt
    ? (($t = (0, q.jsx)(zt, { as: `form`, onSubmit: Mt, children: Qt })),
      (a[84] = zt),
      (a[85] = Mt),
      (a[86] = Qt),
      (a[87] = $t))
    : ($t = a[87]);
  let en;
  a[88] !== I || a[89] !== P || a[90] !== jt
    ? ((en =
        P == null
          ? null
          : (0, q.jsx)(gt, {
              isCreating: I,
              missingDirectory: P,
              onCancel: () => {
                F(null);
              },
              onCloseAutoFocus: () => {
                L.current?.focus();
              },
              onConfirm: () => {
                jt(P);
              },
            })),
      (a[88] = I),
      (a[89] = P),
      (a[90] = jt),
      (a[91] = en))
    : (en = a[91]);
  let tn;
  return (
    a[92] !== Rt || a[93] !== Q || a[94] !== $t || a[95] !== en
      ? ((tn = (0, q.jsxs)(Rt, {
          contentOverflow: `visible`,
          open: !0,
          onOpenChange: Q,
          children: [$t, en],
        })),
        (a[92] = Rt),
        (a[93] = Q),
        (a[94] = $t),
        (a[95] = en),
        (a[96] = tn))
      : (tn = a[96]),
    tn
  );
}
function gt(e) {
  let n = (0, bt.c)(29),
    { isCreating: r, missingDirectory: i, onCancel: a, onCloseAutoFocus: o, onConfirm: s } = e,
    c;
  n[0] === o
    ? (c = n[1])
    : ((c = {
        onCloseAutoFocus: (e) => {
          (e.preventDefault(), o());
        },
      }),
      (n[0] = o),
      (n[1] = c));
  let u;
  n[2] !== r || n[3] !== a
    ? ((u = (e) => {
        !e && !r && a();
      }),
      (n[2] = r),
      (n[3] = a),
      (n[4] = u))
    : (u = n[4]);
  let d;
  n[5] === s
    ? (d = n[6])
    : ((d = (e) => {
        (e.preventDefault(), s());
      }),
      (n[5] = s),
      (n[6] = d));
  let f;
  n[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, q.jsx)(ne, {
        className: `contents`,
        children: (0, q.jsx)(l, {
          id: `projectSetupDialog.createMissingRemoteFolderTitle`,
          defaultMessage: `Create missing folder?`,
          description: `Title for a confirmation dialog shown before creating a missing folder on a remote host`,
        }),
      })),
      (n[7] = f))
    : (f = n[7]);
  let p;
  n[8] !== i.path || n[9] !== i.remoteName
    ? ((p = (0, q.jsx)(E, {
        children: (0, q.jsx)(re, {
          title: f,
          subtitle: (0, q.jsx)(le, {
            className: `contents`,
            children: (0, q.jsx)(l, {
              id: `projectSetupDialog.createMissingRemoteFolderDescription`,
              defaultMessage: `Create {path} on {remoteName} before adding the project?`,
              description: `Confirmation question shown before creating a missing folder on a remote host. The path is the folder path and the remote name identifies the remote host`,
              values: { path: i.path, remoteName: i.remoteName },
            }),
          }),
        }),
      })),
      (n[8] = i.path),
      (n[9] = i.remoteName),
      (n[10] = p))
    : (p = n[10]);
  let m;
  n[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, q.jsx)(l, {
        id: `projectSetupDialog.createMissingRemoteFolderCancel`,
        defaultMessage: `Cancel`,
        description: `Button label that cancels creating a missing folder on a remote host`,
      })),
      (n[11] = m))
    : (m = n[11]);
  let h;
  n[12] !== r || n[13] !== a
    ? ((h = (0, q.jsx)(t, {
        autoFocus: !0,
        color: `secondary`,
        disabled: r,
        type: `button`,
        onClick: a,
        children: m,
      })),
      (n[12] = r),
      (n[13] = a),
      (n[14] = h))
    : (h = n[14]);
  let g;
  n[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, q.jsx)(l, {
        id: `projectSetupDialog.createMissingRemoteFolderConfirm`,
        defaultMessage: `Create folder`,
        description: `Button label that confirms creating a missing folder on a remote host`,
      })),
      (n[15] = g))
    : (g = n[15]);
  let _;
  n[16] === r
    ? (_ = n[17])
    : ((_ = (0, q.jsx)(t, { color: `primary`, loading: r, type: `submit`, children: g })),
      (n[16] = r),
      (n[17] = _));
  let v;
  n[18] !== h || n[19] !== _
    ? ((v = (0, q.jsx)(E, { children: (0, q.jsxs)(be, { children: [h, _] }) })),
      (n[18] = h),
      (n[19] = _),
      (n[20] = v))
    : (v = n[20]);
  let y;
  n[21] !== v || n[22] !== d || n[23] !== p
    ? ((y = (0, q.jsxs)(ge, { as: `form`, onSubmit: d, children: [p, v] })),
      (n[21] = v),
      (n[22] = d),
      (n[23] = p),
      (n[24] = y))
    : (y = n[24]);
  let b;
  return (
    n[25] !== c || n[26] !== y || n[27] !== u
      ? ((b = (0, q.jsx)(he, {
          open: !0,
          contentProps: c,
          showDialogClose: !1,
          size: `compact`,
          onOpenChange: u,
          children: y,
        })),
        (n[25] = c),
        (n[26] = y),
        (n[27] = u),
        (n[28] = b))
      : (b = n[28]),
    b
  );
}
async function _t(e, t, n) {
  if (!we(t.trim())) return !1;
  try {
    let r = await ye(`remote-workspace-directory-entries`, {
      params: { hostId: e, directoryPath: t, directoriesOnly: !0 },
    });
    return ve(r.directoryPath) === n;
  } catch {
    return !1;
  }
}
async function vt(e, t) {
  let n = p.workspaceFiles.createDirectory;
  if (n == null) return !1;
  try {
    return (await n({ hostId: e, path: t }), !0);
  } catch {
    return !1;
  }
}
function yt(e) {
  let t = (0, bt.c)(11),
    { children: n, Icon: r, tone: i } = e,
    a = i === `warning` ? `text-warning` : `text-danger`,
    o;
  t[0] === a
    ? (o = t[1])
    : ((o = ce(`mt-1 flex items-start gap-1.5 text-sm leading-5`, a)), (t[0] = a), (t[1] = o));
  let s;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = ce(`icon-xs mt-1 shrink-0`)), (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] === r ? (c = t[4]) : ((c = (0, q.jsx)(r, { className: s })), (t[3] = r), (t[4] = c));
  let l;
  t[5] === n ? (l = t[6]) : ((l = (0, q.jsx)(`div`, { children: n })), (t[5] = n), (t[6] = l));
  let u;
  return (
    t[7] !== o || t[8] !== c || t[9] !== l
      ? ((u = (0, q.jsxs)(`div`, { className: o, children: [c, l] })),
        (t[7] = o),
        (t[8] = c),
        (t[9] = l),
        (t[10] = u))
      : (u = t[10]),
    u
  );
}
var bt, K, q, xt;
function J() {
  return (J = e(() => {
    ((bt = Te()),
      v(),
      C(),
      _(),
      D(),
      (K = De()),
      w(),
      R(),
      I(),
      Se(),
      k(),
      se(),
      me(),
      M(),
      Ve(),
      F(),
      B(),
      ct(),
      de(),
      Ue(),
      it(),
      Oe(),
      P(),
      Ze(),
      Be(),
      j(),
      L(),
      N(),
      _e(),
      Ee(),
      tt(),
      et(),
      Ne(),
      b(),
      xe(),
      z(),
      H(),
      V(),
      mt(),
      (q = A()),
      (xt = `remote-project-path-submit-error`));
  }))();
}
export { gt as n, J as r, ht as t };
//# sourceMappingURL=create-project-dialog-4edb12713319.js.map
