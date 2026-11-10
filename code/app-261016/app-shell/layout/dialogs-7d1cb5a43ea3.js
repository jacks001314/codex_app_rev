import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  FBt as t,
  HO as n,
  IO as r,
  JO as i,
  KO as a,
  LNt as o,
  LO as ee,
  Oit as s,
  PBt as c,
  RO as te,
  WO as ne,
  XOt as l,
  Y3 as u,
  YOt as d,
  Z3 as f,
  jit as p,
  qO as re,
  tkt as m,
  vst as h,
  yst as ie,
  zO as g,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Cjr as _,
  Emr as v,
  Tjr as y,
  Tmr as b,
  iRr as x,
  imr as ae,
  jcn as S,
  rmr as C,
  sRr as w,
  wcn as T,
  xjr as E,
} from "./app-initial-ad16eaadf81f.js";
import { n as D, t as O } from "./es-e408b9158134.js";
import { a as k } from "./permissions-a20c840b1cd8.js";
import { a as A, o as j, s as M } from "./api-b14d863c8e83.js";
import { n as N, t as P } from "./dialog-messages-b1c8175cb346.js";
function F(e) {
  let t = (0, L.c)(42),
    { pluginId: n, accountId: i, onClose: o, onUpdated: s } = e,
    { accountId: c } = ae(),
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((l = { preview: !1 }), (t[0] = l)) : (l = t[0]);
  let { data: d } = S(void 0, l),
    f = _(`2911503418`),
    { client: p } = y(),
    h;
  t[1] !== d || t[2] !== f || t[3] !== p
    ? ((h = k({
        account: d,
        statsigWorkspaceId: p.getContext().user.customIDs?.workspace_id,
        authoringDisabled: f,
      })),
      (t[1] = d),
      (t[2] = f),
      (t[3] = p),
      (t[4] = h))
    : (h = t[4]);
  let v = h,
    b = c === i && d?.id === i && v,
    [x, C] = (0, R.useState)(!1),
    w;
  t[5] !== i || t[6] !== n ? ((w = (e) => M(n, i, e)), (t[5] = i), (t[6] = n), (t[7] = w)) : (w = t[7]);
  let T;
  t[8] !== s || t[9] !== w
    ? ((T = { mutationFn: w, onSuccess: s }), (t[8] = s), (t[9] = w), (t[10] = T))
    : (T = t[10]);
  let { mutate: E, isPending: O, isSuccess: j, error: N, variables: P } = ie(T),
    F;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = { "application/zip": [`.zip`], "application/gzip": [`.tar.gz`, `.tgz`] }), (t[11] = F))
    : (F = t[11]);
  let I;
  t[12] === Symbol.for(`react.memo_cache_sentinel`) ? ((I = () => C(!0)), (t[12] = I)) : (I = t[12]);
  let {
      getRootProps: V,
      getInputProps: H,
      inputRef: U,
      open: W,
    } = D({
      multiple: !1,
      noClick: !0,
      noKeyboard: !0,
      disabled: O || j || !b,
      accept: F,
      onDrop: (e, t) => {
        if (!b || !oe.current?.isConnected || oe.current.disabled) return;
        let n = e[0];
        if (t.length > 0 || n == null || A(n) != null) {
          C(!0);
          return;
        }
        (C(!1), E(n));
      },
      onError: I,
    }),
    oe = U,
    G;
  t[13] !== O || t[14] !== o
    ? ((G = (e) => {
        !e && !O && o();
      }),
      (t[13] = O),
      (t[14] = o),
      (t[15] = G))
    : (G = t[15]);
  let K = !O,
    q;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((q = (0, z.jsx)(g, {
        children: (0, z.jsx)(te, { title: (0, z.jsx)(re, { children: (0, z.jsx)(m, { ...B.upload }) }) }),
      })),
      (t[16] = q))
    : (q = t[16]);
  let J;
  t[17] !== b ||
  t[18] !== N ||
  t[19] !== P?.name ||
  t[20] !== H ||
  t[21] !== V ||
  t[22] !== O ||
  t[23] !== j ||
  t[24] !== W ||
  t[25] !== x
    ? ((J = (0, z.jsx)(g, {
        spacing: `large`,
        children: j
          ? (0, z.jsx)(a, {
              role: `status`,
              className: `text-sm text-secondary`,
              children: (0, z.jsx)(m, {
                id: `plugins.management.uploadSuccess`,
                defaultMessage: `New version uploaded`,
                description: `Confirmation that a new plugin version has been saved`,
              }),
            })
          : (0, z.jsxs)(`div`, {
              ...V({
                className: `flex min-h-32 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-primary-outline p-4 text-center`,
              }),
              children: [
                (0, z.jsx)(a, {
                  className: `text-sm text-secondary`,
                  children: (0, z.jsx)(m, {
                    id: `plugins.management.uploadHelp`,
                    defaultMessage: `Drop a .zip, .tar.gz, or .tgz file here, or choose a file. Maximum size: 100 MB`,
                    description: `Instructions for uploading an archive as a new plugin version`,
                  }),
                }),
                (0, z.jsx)(`input`, { ...H({ hidden: !0, name: `plugin-archive` }) }),
                O
                  ? (0, z.jsx)(`span`, {
                      role: `status`,
                      className: `max-w-full text-sm break-words`,
                      children: (0, z.jsx)(m, {
                        id: `plugins.management.uploading`,
                        defaultMessage: `Uploading {filename}…`,
                        description: `Progress message while replacing a plugin version; filename is the selected archive name`,
                        values: { filename: P?.name },
                      }),
                    })
                  : null,
                x
                  ? (0, z.jsx)(`span`, {
                      role: `alert`,
                      className: `text-sm text-danger`,
                      children: (0, z.jsx)(m, {
                        id: `plugins.management.invalidArchive`,
                        defaultMessage: `Choose one .zip, .tar.gz, or .tgz file no larger than 100 MB`,
                        description: `Validation error for an unsupported, oversized, or unreadable plugin archive`,
                      }),
                    })
                  : null,
                N == null
                  ? null
                  : (0, z.jsx)(`span`, {
                      role: `alert`,
                      className: `text-sm text-danger`,
                      children: (0, z.jsx)(m, {
                        id: `plugins.management.uploadFailed`,
                        defaultMessage: `Couldn't upload the new version. {reason}`,
                        description: `Plugin upload error followed by the server's explanation`,
                        values: { reason: N.message },
                      }),
                    }),
                (0, z.jsx)(u, {
                  color: `secondary`,
                  size: `medium`,
                  disabled: O || !b,
                  loading: O,
                  onClick: W,
                  children: (0, z.jsx)(m, {
                    id: `plugins.management.chooseFile`,
                    defaultMessage: `Choose file`,
                    description: `Open the file picker for a new plugin version, including retrying an upload`,
                  }),
                }),
              ],
            }),
      })),
      (t[17] = b),
      (t[18] = N),
      (t[19] = P?.name),
      (t[20] = H),
      (t[21] = V),
      (t[22] = O),
      (t[23] = j),
      (t[24] = W),
      (t[25] = x),
      (t[26] = J))
    : (J = t[26]);
  let Y = j ? `primary` : `secondary`,
    X;
  t[27] === j
    ? (X = t[28])
    : ((X = j
        ? (0, z.jsx)(m, {
            id: `plugins.management.viewPlugin`,
            defaultMessage: `View plugin`,
            description: `Close the successful upload dialog and view the updated plugin`,
          })
        : (0, z.jsx)(m, { ...B.cancel })),
      (t[27] = j),
      (t[28] = X));
  let Z;
  t[29] !== O || t[30] !== o || t[31] !== Y || t[32] !== X
    ? ((Z = (0, z.jsx)(g, {
        spacing: `large`,
        children: (0, z.jsx)(ee, {
          expandSingleButton: !1,
          children: (0, z.jsx)(u, { color: Y, disabled: O, onClick: o, children: X }),
        }),
      })),
      (t[29] = O),
      (t[30] = o),
      (t[31] = Y),
      (t[32] = X),
      (t[33] = Z))
    : (Z = t[33]);
  let Q;
  t[34] !== J || t[35] !== Z
    ? ((Q = (0, z.jsxs)(r, { children: [q, J, Z] })), (t[34] = J), (t[35] = Z), (t[36] = Q))
    : (Q = t[36]);
  let $;
  return (
    t[37] !== O || t[38] !== Q || t[39] !== G || t[40] !== K
      ? (($ = (0, z.jsx)(ne, {
          open: !0,
          onOpenChange: G,
          showDialogClose: K,
          shouldIgnoreClickOutside: O,
          children: Q,
        })),
        (t[37] = O),
        (t[38] = Q),
        (t[39] = G),
        (t[40] = K),
        (t[41] = $))
      : ($ = t[41]),
    $
  );
}
function I(e) {
  let t = (0, L.c)(49),
    { target: n, name: i, kind: o, accountId: s, onClose: c, onDeleted: l } = e,
    { accountId: d } = ae(),
    f = d === s,
    h;
  t[0] !== s || t[1] !== n
    ? ((h = () =>
        n.type === `connector`
          ? x.safeDelete(`/aip/connectors/{connector_id}`, {
              surface: `plugin_management`,
              additionalHeaders: { ...b(), "ChatGPT-Account-Id": s },
              parameters: { path: { connector_id: n.connectorId } },
              expectedErrorStatuses: [400, 403, 404, 409],
            })
          : x.safeDelete(
              n.type === `plugin` ? `/ps/plugins/{plugin_id}` : `/public/plugins/workspace/{plugin_id}`,
              {
                surface: `plugin_management`,
                additionalHeaders: { "ChatGPT-Account-Id": s },
                parameters: { path: { plugin_id: n.pluginId } },
                expectedErrorStatuses: [400, 403, 404, 409],
              },
            )),
      (t[0] = s),
      (t[1] = n),
      (t[2] = h))
    : (h = t[2]);
  let _;
  t[3] !== c || t[4] !== l
    ? ((_ = async () => {
        (c(), await l());
      }),
      (t[3] = c),
      (t[4] = l),
      (t[5] = _))
    : (_ = t[5]);
  let v;
  t[6] !== h || t[7] !== _
    ? ((v = { mutationFn: h, onSuccess: _ }), (t[6] = h), (t[7] = _), (t[8] = v))
    : (v = t[8]);
  let { mutate: y, isPending: S, error: C } = ie(v),
    w;
  t[9] !== C || t[10] !== o
    ? ((w =
        o === `app` &&
        C instanceof p &&
        C.status === 400 &&
        C.message.includes(`Connector must not be enabled for the workspace before deletion`)),
      (t[9] = C),
      (t[10] = o),
      (t[11] = w))
    : (w = t[11]);
  let T = w,
    E;
  t[12] !== S || t[13] !== c
    ? ((E = (e) => {
        !e && !S && c();
      }),
      (t[12] = S),
      (t[13] = c),
      (t[14] = E))
    : (E = t[14]);
  let D = !S,
    O;
  t[15] !== f || t[16] !== S || t[17] !== y
    ? ((O = (e) => {
        (e.preventDefault(), !S && f && y());
      }),
      (t[15] = f),
      (t[16] = S),
      (t[17] = y),
      (t[18] = O))
    : (O = t[18]);
  let k;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, z.jsx)(re, { children: (0, z.jsx)(m, { ...B.delete }) })), (t[19] = k))
    : (k = t[19]);
  let A;
  t[20] !== o || t[21] !== i
    ? ((A = (0, z.jsx)(te, {
        title: k,
        subtitle: (0, z.jsx)(a, {
          className: `break-words`,
          children:
            o === `app`
              ? (0, z.jsx)(m, { ...P.deleteWarning, values: { name: i } })
              : (0, z.jsx)(m, {
                  id: `plugins.management.deleteWarning`,
                  defaultMessage: `Permanently delete {name}? People who use this plugin will lose access. This can't be undone`,
                  description: `Confirmation warning before a creator permanently deletes a plugin; name is the plugin display name`,
                  values: { name: i },
                }),
        }),
        subtitleSize: `sm`,
        subtitleTone: `secondary`,
      })),
      (t[20] = o),
      (t[21] = i),
      (t[22] = A))
    : (A = t[22]);
  let j;
  t[23] !== C || t[24] !== T
    ? ((j =
        C == null
          ? null
          : (0, z.jsxs)(`span`, {
              role: `alert`,
              className: `text-sm text-danger`,
              children: [
                T &&
                  (0, z.jsx)(m, {
                    id: `plugins.management.deleteWorkspaceEnabled`,
                    defaultMessage: `This app is enabled for your workspace. A workspace admin must disable it in workspace settings, then delete it.`,
                    description: `Deletion is blocked while the app is enabled for the workspace; an admin must both disable and delete it`,
                  }),
                C instanceof p &&
                  C.status === 403 &&
                  (0, z.jsx)(m, {
                    id: `plugins.management.deleteForbidden`,
                    defaultMessage: `You don't have permission to delete this plugin. If this is a workspace app, ask an admin to disable and delete it. Otherwise, use the account that created it.`,
                    description: `Deletion permission error; workspace apps need an admin to disable and delete them, while other plugins need the creator's account`,
                  }),
                C instanceof p &&
                  C.status === 404 &&
                  (0, z.jsx)(m, {
                    id: `plugins.management.deleteUnavailable`,
                    defaultMessage: `This plugin is unavailable. Check that you're in the correct account or workspace, then reload your plugin list.`,
                    description: `Deletion returned not found; ask the user to check their account or workspace and reload the list without implying deletion succeeded`,
                  }),
                !T &&
                  (!(C instanceof p) || (C.status !== 403 && C.status !== 404)) &&
                  (0, z.jsx)(m, {
                    id: `plugins.management.deleteFailed`,
                    defaultMessage: `Couldn't delete plugin. Try again`,
                    description: `Error after deleting a hosted plugin fails`,
                  }),
              ],
            })),
      (t[23] = C),
      (t[24] = T),
      (t[25] = j))
    : (j = t[25]);
  let M;
  t[26] !== j || t[27] !== A
    ? ((M = (0, z.jsxs)(g, { children: [A, j] })), (t[26] = j), (t[27] = A), (t[28] = M))
    : (M = t[28]);
  let N;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, z.jsx)(m, { ...B.cancel })), (t[29] = N))
    : (N = t[29]);
  let F;
  t[30] !== S || t[31] !== c
    ? ((F = (0, z.jsx)(u, { color: `secondary`, disabled: S, onClick: c, children: N })),
      (t[30] = S),
      (t[31] = c),
      (t[32] = F))
    : (F = t[32]);
  let I = S || !f,
    R;
  t[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, z.jsx)(m, { ...B.delete })), (t[33] = R))
    : (R = t[33]);
  let V;
  t[34] !== S || t[35] !== I
    ? ((V = (0, z.jsx)(u, { color: `dangerSolid`, type: `submit`, disabled: I, loading: S, children: R })),
      (t[34] = S),
      (t[35] = I),
      (t[36] = V))
    : (V = t[36]);
  let H;
  t[37] !== F || t[38] !== V
    ? ((H = (0, z.jsx)(g, { spacing: `large`, children: (0, z.jsxs)(ee, { children: [F, V] }) })),
      (t[37] = F),
      (t[38] = V),
      (t[39] = H))
    : (H = t[39]);
  let U;
  t[40] !== M || t[41] !== H || t[42] !== O
    ? ((U = (0, z.jsxs)(r, { as: `form`, onSubmit: O, children: [M, H] })),
      (t[40] = M),
      (t[41] = H),
      (t[42] = O),
      (t[43] = U))
    : (U = t[43]);
  let W;
  return (
    t[44] !== S || t[45] !== U || t[46] !== E || t[47] !== D
      ? ((W = (0, z.jsx)(ne, {
          open: !0,
          size: `compact`,
          onOpenChange: E,
          showDialogClose: D,
          shouldIgnoreClickOutside: S,
          children: U,
        })),
        (t[44] = S),
        (t[45] = U),
        (t[46] = E),
        (t[47] = D),
        (t[48] = W))
      : (W = t[48]),
    W
  );
}
var L, R, z, B;
function V() {
  return (V = e(() => {
    ((L = c()),
      h(),
      (R = t()),
      O(),
      l(),
      v(),
      C(),
      T(),
      f(),
      i(),
      n(),
      N(),
      E(),
      w(),
      s(),
      j(),
      (z = o()),
      (B = d({
        upload: {
          id: `plugins.management.upload`,
          defaultMessage: `Upload new version`,
          description: `Upload a new archive to an existing plugin`,
        },
        delete: {
          id: `plugins.management.delete`,
          defaultMessage: `Delete plugin`,
          description: `Permanently delete a hosted plugin`,
        },
        cancel: {
          id: `plugins.management.cancel`,
          defaultMessage: `Cancel`,
          description: `Cancel a plugin management dialog`,
        },
      })));
  }))();
}
V();
export { I as PluginDeleteDialog, F as PluginUploadDialog };
//# sourceMappingURL=dialogs-7d1cb5a43ea3.js.map
