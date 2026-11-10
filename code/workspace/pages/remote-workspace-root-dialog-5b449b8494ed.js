import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  AMt as r,
  Amn as i,
  B6t as a,
  Cpn as o,
  DMt as s,
  DQ as c,
  Dbt as l,
  Dmn as u,
  F3t as d,
  FO as f,
  Fw as ee,
  G$t as p,
  Gx as te,
  I5t as m,
  IXt as h,
  J$t as g,
  JG as _,
  JK as ne,
  JXt as re,
  Jrt as ie,
  K$t as ae,
  KG as oe,
  KXt as v,
  Km as se,
  Kx as ce,
  N8 as le,
  O3t as ue,
  OMt as y,
  OQ as de,
  Omn as fe,
  Opn as pe,
  P8 as me,
  PO as he,
  Pw as ge,
  QV as b,
  QXt as x,
  Rpn as _e,
  Sh as ve,
  Smn as ye,
  Spn as S,
  Xen as C,
  Xrt as be,
  Y$t as xe,
  Y7t as Se,
  Yrt as Ce,
  Z7t as w,
  ZG as we,
  ZV as Te,
  Zrt as T,
  _8 as Ee,
  _Jt as E,
  _bt as De,
  _st as Oe,
  a3t as ke,
  apt as Ae,
  bmn as je,
  bpn as Me,
  c8t as Ne,
  dJt as Pe,
  dXt as Fe,
  e0t as D,
  eit as O,
  gMt as k,
  gbt as A,
  gst as Ie,
  hMt as Le,
  hmn as Re,
  hst as ze,
  hz as Be,
  iit as Ve,
  jXt as He,
  kMt as Ue,
  kXt as We,
  kbt as Ge,
  ken as Ke,
  kmn as qe,
  l8t as Je,
  mst as Ye,
  mz as Xe,
  nJt as Ze,
  nZt as Qe,
  nit as $e,
  o3t as et,
  o7t as tt,
  o8t as nt,
  opt as rt,
  pJt as it,
  pst as at,
  qK as ot,
  qm as st,
  qqt as ct,
  rit as lt,
  sJt as ut,
  tJt as dt,
  tit as ft,
  uJt as pt,
  uXt as mt,
  vJt as ht,
  xh as gt,
  xmn as _t,
  y8 as vt,
  z5t as yt,
  zpn as j,
} from "./app-initial-f094ef01c64d.js";
import { Xw as M, Yw as bt, br as N, yr as xt } from "./app-primary-4c40d73a1074.js";
import { r as St, t as P } from "./remote-connection-editor-draft-82bd39e6a7c1.js";
function Ct({
  hasConnectedRemoteConnections: e,
  isRemoteProjectPathReady: t,
  selectedConnection: n,
}) {
  return e
    ? n == null
      ? { kind: `selected-remote-unavailable` }
      : t
        ? null
        : { kind: `path-not-ready` }
    : { kind: `no-connected-remote` };
}
function wt({ submitBlocker: e }) {
  if (e != null)
    switch (e.kind) {
      case `no-connected-remote`:
        return {
          message: Me({
            id: `projectSetupDialog.noConnectedRemotes`,
            defaultMessage: `No remote hosts are connected right now.`,
            description: `Message shown in the remote project setup dialog when no remote hosts are connected`,
          }),
        };
      case `selected-remote-unavailable`:
        return {
          message: Me({
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
var F = e(() => {
  S();
});
function Tt(e) {
  let t = (0, Mt.c)(106),
    r;
  t[0] === e ? (r = t[1]) : ((r = e === void 0 ? {} : e), (t[0] = e), (t[1] = r));
  let { initialRequest: i } = r,
    a = n(ke),
    c = d(Qe),
    l = pe(),
    u = ce(),
    f = Ge(),
    te = d(st),
    { remoteConnections: h, selectedRemoteHostId: ne } = d(de),
    re = d(dt),
    v = ee(h),
    { data: se } = De(C.REMOTE_PROJECTS),
    { isLoading: le } = De(C.PROJECT_APPEARANCES),
    ue;
  t[2] !== v || t[3] !== ne || t[4] !== re?.hostId
    ? ((ue =
        v.find((e) => e.hostId === re?.hostId)?.hostId ??
        v.find((e) => e.hostId === ne)?.hostId ??
        v[0]?.hostId ??
        null),
      (t[2] = v),
      (t[3] = ne),
      (t[4] = re?.hostId),
      (t[5] = ue))
    : (ue = t[5]);
  let y = ue,
    ge;
  t[6] !== v || t[7] !== i || t[8] !== y
    ? ((ge = () => {
        if (i == null) return null;
        if (i.type === `open-create-remote-project-modal`)
          return {
            mode: `setup`,
            initialDirectoryPath: null,
            selectedHostId: v.find((e) => e.hostId === i.hostId)?.hostId ?? y,
            setActive: i.setActive,
          };
        let e = i.host.trim(),
          t = i.hostId ?? v.find((t) => t.displayName === e)?.hostId ?? y;
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
      (t[6] = v),
      (t[7] = i),
      (t[8] = y),
      (t[9] = ge))
    : (ge = t[9]);
  let [b, x] = (0, I.useState)(ge),
    [ve, S] = (0, I.useState)(``),
    [w, we] = (0, I.useState)(null),
    Te;
  t[10] === i
    ? (Te = t[11])
    : ((Te = () =>
        i?.type === `remote-workspace-root-requested` ? (i.initialPath?.trim() ?? null) : null),
      (t[10] = i),
      (t[11] = Te));
  let [E, je] = (0, I.useState)(Te),
    [Me, D] = (0, I.useState)(null),
    [O, k] = (0, I.useState)(null),
    [A, Re] = (0, I.useState)(!1),
    [Be, Ve] = (0, I.useState)(null),
    We = (0, I.useRef)(null),
    qe = E?.trim() ?? ``,
    et;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((et = () => {
        (je(null), D(null), k(null));
      }),
      (t[12] = et))
    : (et = t[12]);
  let rt = et,
    it = E != null && qe.length > 0 ? Je(qe) : null,
    { data: at } = ht(`remote-workspace-directory-entries`, {
      params: { hostId: b?.selectedHostId ?? ``, directoryPath: it, directoriesOnly: !0 },
      queryConfig: { enabled: b?.selectedHostId != null && E == null },
    }),
    ct;
  t[13] !== v || t[14] !== u || t[15] !== f || t[16] !== a || t[17] !== y
    ? ((ct = (e) => {
        if (!f || u) return;
        Ie({ scope: a, projectType: `remote` });
        let t = v.find((t) => t.hostId === e.hostId)?.hostId ?? y;
        (x({
          mode: `setup`,
          initialDirectoryPath: null,
          selectedHostId: t,
          setActive: e.setActive,
        }),
          S(``),
          we(null),
          rt());
      }),
      (t[13] = v),
      (t[14] = u),
      (t[15] = f),
      (t[16] = a),
      (t[17] = y),
      (t[18] = ct))
    : (ct = t[18]);
  let pt;
  (t[19] !== u || t[20] !== f || t[21] !== a || t[22] !== y
    ? ((pt = [u, f, a, y]), (t[19] = u), (t[20] = f), (t[21] = a), (t[22] = y), (t[23] = pt))
    : (pt = t[23]),
    ye(`open-create-remote-project-modal`, ct, pt));
  let mt;
  t[24] !== v || t[25] !== f || t[26] !== a || t[27] !== y
    ? ((mt = (e) => {
        if (!f) return;
        let t = e.host.trim(),
          n = e.hostId ?? v.find((e) => e.displayName === t)?.hostId ?? y ?? null;
        if (e.mode === `pick`) {
          (x({
            mode: `choose-remote-folder`,
            host: t,
            initialDirectoryPath: e.initialPath?.trim() ?? null,
            selectedHostId: n,
          }),
            je(e.initialPath == null ? null : e.initialPath.trim()),
            D(null),
            k(null));
          return;
        }
        (Ie({ scope: a, projectType: `remote` }),
          x({
            mode: `setup`,
            initialDirectoryPath: e.initialPath?.trim() ?? null,
            selectedHostId: n,
            setActive: e.setActive,
          }),
          S(``),
          we(null),
          je(e.initialPath == null ? null : e.initialPath.trim()),
          D(null),
          k(null));
      }),
      (t[24] = v),
      (t[25] = f),
      (t[26] = a),
      (t[27] = y),
      (t[28] = mt))
    : (mt = t[28]);
  let vt;
  if (
    (t[29] !== v || t[30] !== u || t[31] !== f || t[32] !== a || t[33] !== y
      ? ((vt = [v, u, f, a, y]),
        (t[29] = v),
        (t[30] = u),
        (t[31] = f),
        (t[32] = a),
        (t[33] = y),
        (t[34] = vt))
      : (vt = t[34]),
    ye(`remote-workspace-root-requested`, mt, vt),
    !b || te != null)
  )
    return null;
  let j = b.mode === `choose-remote-folder`,
    M = v.length > 0,
    N = v.find((e) => e.hostId === b.selectedHostId) ?? null,
    St = N != null && Se(N) ? N : null,
    P = E == null && at != null ? Je(at.directoryPath) : it,
    F = P == null ? null : Ne(P),
    Tt = Ct({
      hasConnectedRemoteConnections: M,
      isRemoteProjectPathReady: P != null && Ke(P),
      selectedConnection: N,
    }),
    Ft = wt({ submitBlocker: Tt }),
    R = Me?.hostId === b.selectedHostId && Me.comparablePath === F ? Me : null,
    It = A || Tt != null || (w != null && le),
    Lt;
  t[35] === A
    ? (Lt = t[36])
    : ((Lt = (e) => {
        A || (je(e), D(null), k(null));
      }),
      (t[35] = A),
      (t[36] = Lt));
  let Rt = Lt,
    zt;
  t[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((zt = () => {
        (x(null), S(``), we(null), rt());
      }),
      (t[37] = zt))
    : (zt = t[37]);
  let Bt = zt,
    Vt;
  t[38] !== j || t[39] !== A || t[40] !== a
    ? ((Vt = () => {
        A || (j || Ye({ scope: a }), Bt());
      }),
      (t[38] = j),
      (t[39] = A),
      (t[40] = a),
      (t[41] = Vt))
    : (Vt = t[41]);
  let z = Vt,
    Ht;
  t[42] === E
    ? (Ht = t[43])
    : ((Ht = (e) => {
        (D(null),
          k(null),
          x((t) =>
            t == null ? t : { ...t, initialDirectoryPath: E?.trim() || null, selectedHostId: e },
          ));
      }),
      (t[42] = E),
      (t[43] = Ht));
  let Ut = Ht,
    Wt = async (e) => {
      if (It) return;
      let t = b.selectedHostId;
      if (t == null || N == null || P == null || F == null) return;
      if (e != null && (e.hostId !== t || e.path !== P || e.comparablePath !== F)) {
        k(null);
        return;
      }
      let n = b.mode === `setup` && b.setActive === !0;
      await (async () => {
        try {
          (Re(!0), D(null));
          let r = await kt(t, P, F),
            i = j ? se : (ut(a.get, C.REMOTE_PROJECTS) ?? se);
          if (!j) {
            let e = Ee(i, t, P);
            if (e != null) {
              D({
                comparablePath: F,
                conflictingProjectName: e.label,
                hostId: t,
                kind: `duplicate-project`,
                remoteName: N.displayName,
              });
              return;
            }
          }
          if (!r && !j && e == null && Xe.workspaceFiles.createDirectory != null) {
            k({ comparablePath: F, hostId: t, path: P, remoteName: N.displayName });
            return;
          }
          if (
            (!r && e != null && (await At(e.hostId, e.path)) && (r = await kt(t, P, F)),
            k(null),
            !r)
          ) {
            D({ comparablePath: F, hostId: t, kind: `verification` });
            return;
          }
          if (j) {
            (_t.dispatchHostMessage({ type: `workspace-root-option-picked`, root: P }), Bt());
            return;
          }
          let o = { appearance: w, hostId: t, label: ve.trim() || nt(P), remotePath: P },
            s;
          (Xe.projects == null
            ? ((s = {
                id: tt(crypto.randomUUID()),
                hostId: o.hostId,
                label: o.label,
                remotePath: o.remotePath,
              }),
              await Pe(a, C.REMOTE_PROJECTS, [s, ...(i ?? [])]),
              w != null &&
                (await Pe(
                  a,
                  C.PROJECT_APPEARANCES,
                  m({
                    projectAppearances: yt(ut(a.get, C.PROJECT_APPEARANCES)),
                    projectId: s.id,
                    appearance: w,
                  }),
                )),
              await me(a, [s.id, ...(ut(a.get, C.PROJECT_ORDER)?.filter((e) => e !== s.id) ?? [])]))
            : (s = await Xe.projects.createRemote(o)),
            n &&
              (Ze(a, s.id),
              await Pe(a, C.SELECTED_PROJECT, { type: `remote`, projectId: tt(s.id) })),
            St != null &&
              Fe(c, {
                action: p.CODEX_REMOTE_SSH_CONNECTION_ACTION_CREATE_REMOTE_PROJECT,
                result: xe.CODEX_REMOTE_SSH_CONNECTION_RESULT_SUCCEEDED,
                source: g.CODEX_REMOTE_SSH_CONNECTION_EVENT_SOURCE_PROJECT_SETUP,
                connection: St,
                setActiveRemoteProject: n,
              }),
            Oe({ scope: a, projectType: `remote`, projectId: s.id }),
            Bt());
        } catch (e) {
          let t = e;
          (k(null),
            j || ze({ scope: a, projectType: `remote`, error: t }),
            St != null &&
              Fe(c, {
                action: p.CODEX_REMOTE_SSH_CONNECTION_ACTION_CREATE_REMOTE_PROJECT,
                result: xe.CODEX_REMOTE_SSH_CONNECTION_RESULT_FAILED,
                source: g.CODEX_REMOTE_SSH_CONNECTION_EVENT_SOURCE_PROJECT_SETUP,
                connection: St,
                errorCategory: ae.CODEX_REMOTE_SSH_CONNECTION_ERROR_CATEGORY_UNKNOWN,
                setActiveRemoteProject: n,
              }),
            fe.error(`${Nt} save_failed`, {
              safe: {},
              sensitive: { hostId: b.selectedHostId, remoteProjectPath: P, error: t },
            }),
            a.get(He).danger(
              l.formatMessage({
                id: `projectSetupDialog.saveError`,
                defaultMessage: `Failed to save project`,
                description: `Toast shown when project setup fails`,
              }),
            ));
        }
      })().finally(() => {
        (Re(!1),
          e != null &&
            requestAnimationFrame(() => {
              We.current?.focus();
            }));
      });
    },
    Gt = (e) => {
      (e.preventDefault(), Wt(null));
    },
    Kt;
  t[44] === j
    ? (Kt = t[45])
    : ((Kt = j
        ? (0, L.jsx)(o, {
            id: `workspaceRootDialog.title.pick`,
            defaultMessage: `Choose folder path`,
            description: `Title for the remote workspace path dialog when selecting a workspace`,
          })
        : (0, L.jsx)(o, {
            id: `projectSetupDialog.newRemoteProjectTitle`,
            defaultMessage: `New remote project`,
            description: `Title for the remote project setup dialog`,
          })),
      (t[44] = j),
      (t[45] = Kt));
  let qt = Kt,
    Jt = j
      ? (0, L.jsx)(o, {
          id: `workspaceRootDialog.description.pick`,
          defaultMessage: `Enter a folder path on {host} to use for this project.`,
          description: `Description for the remote workspace path dialog`,
          values: {
            host: (0, L.jsx)(`span`, {
              className: `font-medium text-default`,
              children: N?.displayName ?? (b.mode === `choose-remote-folder` ? b.host : ``),
            }),
          },
        })
      : M
        ? null
        : (0, L.jsx)(o, {
            id: `projectSetupDialog.description.noConnectedRemotes`,
            defaultMessage: `Set up a remote host first. Then you can choose a host and folder here.`,
            description: `Description for the remote project setup dialog when no remote hosts are connected`,
          }),
    Yt = ft,
    B;
  t[46] === z
    ? (B = t[47])
    : ((B = (e) => {
        e || z();
      }),
      (t[46] = z),
      (t[47] = B));
  let Xt = ie,
    V;
  t[48] === qt
    ? (V = t[49])
    : ((V = (0, L.jsx)(lt, { className: `contents`, children: qt })), (t[48] = qt), (t[49] = V));
  let H;
  t[50] === Jt
    ? (H = t[51])
    : ((H = Jt == null ? void 0 : (0, L.jsx)($e, { className: `contents`, children: Jt })),
      (t[50] = Jt),
      (t[51] = H));
  let U;
  t[52] !== V || t[53] !== H
    ? ((U = (0, L.jsx)(T, { children: (0, L.jsx)(be, { title: V, subtitle: H }) })),
      (t[52] = V),
      (t[53] = H),
      (t[54] = U))
    : (U = t[54]);
  let Zt =
      b.mode === `setup`
        ? (0, L.jsx)(`fieldset`, {
            className: `contents`,
            disabled: A,
            children: (0, L.jsx)(T, {
              className: `gap-2 pt-4 first:pt-4`,
              children: (0, L.jsx)(gt, {
                appearance: w,
                name: ve,
                onAppearanceChange: (e) => {
                  A || we(e);
                },
                onNameChange: (e) => {
                  A || S(e);
                },
                projectName: ve || (P == null ? `` : nt(P)),
              }),
            }),
          })
        : null,
    W;
  t[55] !== v ||
  t[56] !== R ||
  t[57] !== b.initialDirectoryPath ||
  t[58] !== b.mode ||
  t[59] !== b.selectedHostId ||
  t[60] !== Rt ||
  t[61] !== Ut ||
  t[62] !== M ||
  t[63] !== j ||
  t[64] !== A ||
  t[65] !== E ||
  t[66] !== Be ||
  t[67] !== N
    ? ((W =
        j || b.mode === `setup`
          ? (0, L.jsxs)(L.Fragment, {
              children: [
                (0, L.jsx)(T, {
                  className: _e(`gap-2`, j && `pt-4`),
                  children: (0, L.jsxs)(`label`, {
                    className: `flex flex-col gap-2`,
                    children: [
                      (0, L.jsx)(`span`, {
                        className: `font-medium text-default`,
                        children: (0, L.jsx)(o, {
                          id: `workspaceRootDialog.remoteLabel`,
                          defaultMessage: `Remote host`,
                          description: `Label for the remote connection dropdown in the remote workspace path dialog`,
                        }),
                      }),
                      (0, L.jsx)(`div`, {
                        ref: (e) => {
                          if (typeof document > `u`) {
                            Ve(null);
                            return;
                          }
                          let t = e?.closest(`.codex-dialog`) ?? document.body;
                          Ve(t);
                        },
                        children: (0, L.jsxs)(oe, {
                          align: `start`,
                          disabled: A,
                          contentWidth: `menuBounded`,
                          portalContainer: Be,
                          triggerButton: (0, L.jsxs)(`button`, {
                            type: `button`,
                            disabled: A,
                            className: `flex h-10 w-full items-center justify-between gap-2 rounded-xl border border-default bg-surface-elevated-secondary px-3 text-sm text-default disabled:cursor-not-allowed disabled:opacity-50`,
                            children: [
                              (0, L.jsxs)(`span`, {
                                className: `flex min-w-0 items-center gap-2`,
                                children: [
                                  N
                                    ? (0, L.jsx)(bt, {
                                        className: `icon-xs shrink-0`,
                                        hostId: N.hostId,
                                      })
                                    : null,
                                  (0, L.jsx)(`span`, {
                                    className:
                                      N == null
                                        ? `truncate text-start text-codex-description`
                                        : `truncate text-start`,
                                    children:
                                      N?.displayName ??
                                      (0, L.jsx)(o, {
                                        id: `workspaceRootDialog.remotePlaceholder`,
                                        defaultMessage: `No connected remote`,
                                        description: `Placeholder shown when no connected remote is available in the remote workspace path dialog`,
                                      }),
                                  }),
                                ],
                              }),
                              (0, L.jsx)(Le, {
                                className: `shrink-0 text-codex-description`,
                                "aria-hidden": !1,
                                asset: Ae,
                              }),
                            ],
                          }),
                          children: [
                            v.length === 0
                              ? (0, L.jsx)(_.Item, {
                                  disabled: !0,
                                  children: (0, L.jsx)(o, {
                                    id: `workspaceRootDialog.remoteEmpty`,
                                    defaultMessage: `No connected remotes`,
                                    description: `Label shown when no connected remotes are available in the remote workspace path dialog`,
                                  }),
                                })
                              : (0, L.jsx)(_.Section, {
                                  children: v.map((e) =>
                                    (0, L.jsxs)(
                                      _.Item,
                                      {
                                        RightIcon: b.selectedHostId === e.hostId ? ot : void 0,
                                        subTextAllowWrap: !0,
                                        SubText: (0, L.jsx)(`span`, {
                                          className: `text-xs text-codex-description`,
                                          children: Ot(e),
                                        }),
                                        onSelect: () => {
                                          A ||
                                            b.selectedHostId === e.hostId ||
                                            (D(null),
                                            x(
                                              (t) =>
                                                t && {
                                                  ...t,
                                                  initialDirectoryPath: E?.trim() || null,
                                                  selectedHostId: e.hostId,
                                                },
                                            ));
                                        },
                                        children: [
                                          (0, L.jsx)(_.ItemIcon, {
                                            size: `xs`,
                                            children: (0, L.jsx)(bt, {
                                              className: `icon-xs`,
                                              hostId: e.hostId,
                                            }),
                                          }),
                                          (0, L.jsx)(`span`, {
                                            className: `block truncate`,
                                            children: e.displayName,
                                          }),
                                        ],
                                      },
                                      e.hostId,
                                    ),
                                  ),
                                }),
                            (0, L.jsxs)(L.Fragment, {
                              children: [
                                M ? (0, L.jsx)(_.Separator, {}) : null,
                                (0, L.jsx)(Dt, { onConnected: Ut }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
                (0, L.jsx)(T, {
                  className: `gap-2`,
                  children: (0, L.jsxs)(`label`, {
                    className: `flex flex-col gap-0.5`,
                    children: [
                      (0, L.jsx)(`span`, {
                        className: `font-medium text-default`,
                        children: j
                          ? (0, L.jsx)(o, {
                              id: `workspaceRootDialog.pathLabel`,
                              defaultMessage: `Folder path`,
                              description: `Label for the remote workspace path input`,
                            })
                          : (0, L.jsx)(o, {
                              id: `projectSetupDialog.remoteSourceFolder`,
                              defaultMessage: `Source folder`,
                              description: `Label for the remote project source folder`,
                            }),
                      }),
                      b.selectedHostId == null
                        ? null
                        : (0, L.jsx)(
                            xt,
                            {
                              disabled: A,
                              hostId: b.selectedHostId,
                              initialDirectoryPath: b.initialDirectoryPath,
                              inputDescriptionId: R == null ? void 0 : Pt,
                              inputInvalid: R != null,
                              selectedPath: E,
                              setSelectedPath: Rt,
                            },
                            b.selectedHostId,
                          ),
                      R == null
                        ? null
                        : (0, L.jsx)(`div`, {
                            id: Pt,
                            role: `alert`,
                            children: (0, L.jsx)(jt, {
                              Icon: s,
                              tone: `danger`,
                              children:
                                R.kind === `verification`
                                  ? (0, L.jsx)(o, {
                                      id: `projectSetupDialog.pathVerificationFailed`,
                                      defaultMessage: `We couldn’t verify this folder on the remote host. Check that it exists and try again`,
                                      description: `Error shown after the app cannot verify a submitted remote folder path`,
                                    })
                                  : (0, L.jsx)(o, {
                                      id: `projectSetupDialog.conflict.remoteProjectAlreadyMapped.standalone`,
                                      defaultMessage: `This remote project on {remoteName} is already set up for {projectName}. Choose a different folder or remove that setup first.`,
                                      description: `Error shown after submitting a remote project that is already set up for a different sidebar project on the same host`,
                                      values: {
                                        projectName: R.conflictingProjectName,
                                        remoteName: R.remoteName,
                                      },
                                    }),
                            }),
                          }),
                    ],
                  }),
                }),
              ],
            })
          : null),
      (t[55] = v),
      (t[56] = R),
      (t[57] = b.initialDirectoryPath),
      (t[58] = b.mode),
      (t[59] = b.selectedHostId),
      (t[60] = Rt),
      (t[61] = Ut),
      (t[62] = M),
      (t[63] = j),
      (t[64] = A),
      (t[65] = E),
      (t[66] = Be),
      (t[67] = N),
      (t[68] = W))
    : (W = t[68]);
  let G;
  t[69] === Ft
    ? (G = t[70])
    : ((G =
        Ft == null
          ? null
          : (0, L.jsx)(jt, {
              Icon: he,
              tone: `warning`,
              children: (0, L.jsx)(o, { ...Ft.message }),
            })),
      (t[69] = Ft),
      (t[70] = G));
  let K;
  t[71] === G
    ? (K = t[72])
    : ((K = (0, L.jsx)(`div`, { className: `min-h-5`, children: G })), (t[71] = G), (t[72] = K));
  let Qt;
  t[73] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Qt = (0, L.jsx)(o, {
        id: `workspaceRootDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for the project setup dialog`,
      })),
      (t[73] = Qt))
    : (Qt = t[73]);
  let q;
  t[74] === z
    ? (q = t[75])
    : ((q = (0, L.jsx)(Ue, { color: `ghost`, onClick: z, type: `button`, children: Qt })),
      (t[74] = z),
      (t[75] = q));
  let J;
  t[76] === j
    ? (J = t[77])
    : ((J = j
        ? (0, L.jsx)(o, {
            id: `workspaceRootDialog.confirmPick`,
            defaultMessage: `Use folder`,
            description: `Confirm button label for selecting a remote workspace path`,
          })
        : (0, L.jsx)(o, {
            id: `workspaceRootDialog.confirmAdd`,
            defaultMessage: `Add project`,
            description: `Confirm button label for saving project setup`,
          })),
      (t[76] = j),
      (t[77] = J));
  let Y;
  t[78] !== It || t[79] !== A || t[80] !== J
    ? ((Y = (0, L.jsx)(Ue, {
        ref: We,
        color: `primary`,
        type: `submit`,
        loading: A,
        disabled: It,
        children: J,
      })),
      (t[78] = It),
      (t[79] = A),
      (t[80] = J),
      (t[81] = Y))
    : (Y = t[81]);
  let X;
  t[82] !== q || t[83] !== Y
    ? ((X = (0, L.jsxs)(Ce, { children: [q, Y] })), (t[82] = q), (t[83] = Y), (t[84] = X))
    : (X = t[84]);
  let Z;
  t[85] !== K || t[86] !== X
    ? ((Z = (0, L.jsxs)(T, { children: [K, X] })), (t[85] = K), (t[86] = X), (t[87] = Z))
    : (Z = t[87]);
  let Q;
  t[88] !== Xt || t[89] !== U || t[90] !== Zt || t[91] !== W || t[92] !== Z
    ? ((Q = (0, L.jsxs)(Xt, { children: [U, Zt, W, Z] })),
      (t[88] = Xt),
      (t[89] = U),
      (t[90] = Zt),
      (t[91] = W),
      (t[92] = Z),
      (t[93] = Q))
    : (Q = t[93]);
  let $t;
  t[94] !== Gt || t[95] !== Q
    ? (($t = (0, L.jsx)(`form`, { className: `flex flex-col gap-0`, onSubmit: Gt, children: Q })),
      (t[94] = Gt),
      (t[95] = Q),
      (t[96] = $t))
    : ($t = t[96]);
  let $;
  t[97] !== A || t[98] !== O || t[99] !== Wt
    ? (($ =
        O == null
          ? null
          : (0, L.jsx)(Et, {
              isCreating: A,
              missingDirectory: O,
              onCancel: () => {
                k(null);
              },
              onCloseAutoFocus: () => {
                We.current?.focus();
              },
              onConfirm: () => {
                Wt(O);
              },
            })),
      (t[97] = A),
      (t[98] = O),
      (t[99] = Wt),
      (t[100] = $))
    : ($ = t[100]);
  let en;
  return (
    t[101] !== Yt || t[102] !== B || t[103] !== $t || t[104] !== $
      ? ((en = (0, L.jsxs)(Yt, {
          contentOverflow: `visible`,
          open: !0,
          onOpenChange: B,
          children: [$t, $],
        })),
        (t[101] = Yt),
        (t[102] = B),
        (t[103] = $t),
        (t[104] = $),
        (t[105] = en))
      : (en = t[105]),
    en
  );
}
function Et(e) {
  let t = (0, Mt.c)(29),
    { isCreating: n, missingDirectory: r, onCancel: i, onCloseAutoFocus: a, onConfirm: s } = e,
    c;
  t[0] === a
    ? (c = t[1])
    : ((c = {
        onCloseAutoFocus: (e) => {
          (e.preventDefault(), a());
        },
      }),
      (t[0] = a),
      (t[1] = c));
  let l;
  t[2] !== n || t[3] !== i
    ? ((l = (e) => {
        !e && !n && i();
      }),
      (t[2] = n),
      (t[3] = i),
      (t[4] = l))
    : (l = t[4]);
  let u;
  t[5] === s
    ? (u = t[6])
    : ((u = (e) => {
        (e.preventDefault(), s());
      }),
      (t[5] = s),
      (t[6] = u));
  let d;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, L.jsx)(lt, {
        className: `contents`,
        children: (0, L.jsx)(o, {
          id: `projectSetupDialog.createMissingRemoteFolderTitle`,
          defaultMessage: `Create missing folder?`,
          description: `Title for a confirmation dialog shown before creating a missing folder on a remote host`,
        }),
      })),
      (t[7] = d))
    : (d = t[7]);
  let f;
  t[8] !== r.path || t[9] !== r.remoteName
    ? ((f = (0, L.jsx)(T, {
        children: (0, L.jsx)(be, {
          title: d,
          subtitle: (0, L.jsx)($e, {
            className: `contents`,
            children: (0, L.jsx)(o, {
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
  let ee;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = (0, L.jsx)(o, {
        id: `projectSetupDialog.createMissingRemoteFolderCancel`,
        defaultMessage: `Cancel`,
        description: `Button label that cancels creating a missing folder on a remote host`,
      })),
      (t[11] = ee))
    : (ee = t[11]);
  let p;
  t[12] !== n || t[13] !== i
    ? ((p = (0, L.jsx)(Ue, {
        autoFocus: !0,
        color: `secondary`,
        disabled: n,
        type: `button`,
        onClick: i,
        children: ee,
      })),
      (t[12] = n),
      (t[13] = i),
      (t[14] = p))
    : (p = t[14]);
  let te;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, L.jsx)(o, {
        id: `projectSetupDialog.createMissingRemoteFolderConfirm`,
        defaultMessage: `Create folder`,
        description: `Button label that confirms creating a missing folder on a remote host`,
      })),
      (t[15] = te))
    : (te = t[15]);
  let m;
  t[16] === n
    ? (m = t[17])
    : ((m = (0, L.jsx)(Ue, { color: `primary`, loading: n, type: `submit`, children: te })),
      (t[16] = n),
      (t[17] = m));
  let h;
  t[18] !== p || t[19] !== m
    ? ((h = (0, L.jsx)(T, { children: (0, L.jsxs)(Ce, { children: [p, m] }) })),
      (t[18] = p),
      (t[19] = m),
      (t[20] = h))
    : (h = t[20]);
  let g;
  t[21] !== h || t[22] !== u || t[23] !== f
    ? ((g = (0, L.jsxs)(ie, { as: `form`, onSubmit: u, children: [f, h] })),
      (t[21] = h),
      (t[22] = u),
      (t[23] = f),
      (t[24] = g))
    : (g = t[24]);
  let _;
  return (
    t[25] !== c || t[26] !== g || t[27] !== l
      ? ((_ = (0, L.jsx)(ft, {
          open: !0,
          contentProps: c,
          showDialogClose: !1,
          size: `compact`,
          onOpenChange: l,
          children: g,
        })),
        (t[25] = c),
        (t[26] = g),
        (t[27] = l),
        (t[28] = _))
      : (_ = t[28]),
    _
  );
}
function Dt(e) {
  let t = (0, Mt.c)(11),
    { onConnected: r } = e,
    i = n(ke),
    a = v(),
    s = re(),
    c;
  t[0] !== a.hash ||
  t[1] !== a.pathname ||
  t[2] !== a.search ||
  t[3] !== a.state ||
  t[4] !== s ||
  t[5] !== r ||
  t[6] !== i
    ? ((c = () => {
        let e = `${a.pathname}${a.search}${a.hash}`;
        (i.set(st, {
          draft: P(),
          hostId: null,
          onCancel: () => {
            (i.set(st, null), s(e, { replace: !0, state: a.state }));
          },
          onConnected: (t) => {
            (r(t), i.set(st, null), s(e, { replace: !0, state: a.state }));
          },
        }),
          s(`/settings/connections/ssh/add`));
      }),
      (t[0] = a.hash),
      (t[1] = a.pathname),
      (t[2] = a.search),
      (t[3] = a.state),
      (t[4] = s),
      (t[5] = r),
      (t[6] = i),
      (t[7] = c))
    : (c = t[7]);
  let l;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, L.jsx)(o, {
        id: `projectSetupDialog.addRemoteConnection`,
        defaultMessage: `Add remote`,
        description: `Menu item that sets up a new SSH connection while creating a remote project`,
      })),
      (t[8] = l))
    : (l = t[8]);
  let u;
  return (
    t[9] === c
      ? (u = t[10])
      : ((u = (0, L.jsx)(_.Item, { LeftIcon: Te, onSelect: c, children: l })),
        (t[9] = c),
        (t[10] = u)),
    u
  );
}
function Ot(e) {
  return Se(e)
    ? (e.sshAlias ?? e.sshHost)
    : w(e)
      ? e.distro
      : [e.os, e.arch].filter((e) => e.trim().length > 0).join(` / `);
}
async function kt(e, t, n) {
  if (!Ke(t.trim())) return !1;
  try {
    return (
      Ne(
        (
          await it(`remote-workspace-directory-entries`, {
            params: { hostId: e, directoryPath: t, directoriesOnly: !0 },
          })
        ).directoryPath,
      ) === n
    );
  } catch {
    return !1;
  }
}
async function At(e, t) {
  let n = Xe.workspaceFiles.createDirectory;
  if (n == null) return !1;
  try {
    return (await n({ hostId: e, path: t }), !0);
  } catch {
    return !1;
  }
}
function jt(e) {
  let t = (0, Mt.c)(11),
    { children: n, Icon: r, tone: i } = e,
    a = i === `warning` ? `text-warning` : `text-danger`,
    o;
  t[0] === a
    ? (o = t[1])
    : ((o = _e(`mt-1 flex items-start gap-1.5 text-sm leading-5`, a)), (t[0] = a), (t[1] = o));
  let s;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = _e(`icon-xs mt-1 shrink-0`)), (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] === r ? (c = t[4]) : ((c = (0, L.jsx)(r, { className: s })), (t[3] = r), (t[4] = c));
  let l;
  t[5] === n ? (l = t[6]) : ((l = (0, L.jsx)(`div`, { children: n })), (t[5] = n), (t[6] = l));
  let u;
  return (
    t[7] !== o || t[8] !== c || t[9] !== l
      ? ((u = (0, L.jsxs)(`div`, { className: o, children: [c, l] })),
        (t[7] = o),
        (t[8] = c),
        (t[9] = l),
        (t[10] = u))
      : (u = t[10]),
    u
  );
}
var Mt, I, L, Nt, Pt;
e(() => {
  ((Mt = qe()),
    D(),
    rt(),
    j(),
    ue(),
    a(),
    (I = t(i(), 1)),
    S(),
    h(),
    mt(),
    ge(),
    r(),
    Ve(),
    O(),
    we(),
    k(),
    We(),
    pt(),
    A(),
    te(),
    y(),
    ne(),
    b(),
    f(),
    je(),
    x(),
    at(),
    ve(),
    N(),
    le(),
    se(),
    St(),
    l(),
    M(),
    c(),
    vt(),
    Be(),
    et(),
    ct(),
    u(),
    E(),
    F(),
    (L = Re()),
    (Nt = `[remote-connections/mapping]`),
    (Pt = `remote-project-path-submit-error`));
})();
export { Tt as CreateRemoteProjectModal };
//# sourceMappingURL=remote-workspace-root-dialog-5b449b8494ed.js.map
