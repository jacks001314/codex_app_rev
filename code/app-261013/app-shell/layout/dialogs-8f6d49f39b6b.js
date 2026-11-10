import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ADt as n,
  IDt as r,
  Iot as i,
  Lot as a,
  _O as ee,
  cO as te,
  fO as o,
  frt as s,
  gO as c,
  hrt as l,
  jDt as u,
  lO as d,
  mO as ne,
  oO as re,
  sO as ie,
  t3 as f,
  vO as p,
  vzt as m,
  xMt as h,
  yzt as g,
} from "./app-shared-bbfeca5e5737.js";
import {
  Fin as _,
  Fur as v,
  Hin as y,
  Pur as b,
  eDr as x,
  fur as S,
  iDr as C,
  iPr as w,
  nDr as T,
  pur as ae,
  sPr as E,
} from "./app-initial-5851df3f6cb1.js";
import { n as D, t as O } from "./es-b1d3b672b686.js";
import { a as k } from "./permissions-a20c840b1cd8.js";
import { a as A, o as j, s as M } from "./api-49bbf2d5ef8a.js";
import { n as N, t as P } from "./dialog-messages-8f97c72ff067.js";
function F(e) {
  let n = (0, L.c)(42),
    { pluginId: i, accountId: o, onClose: s, onUpdated: l } = e,
    { accountId: u } = ae(),
    f;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((f = { preview: !1 }), (n[0] = f)) : (f = n[0]);
  let { data: p } = y(void 0, f),
    m = T(`2911503418`),
    { client: h } = C(),
    g;
  n[1] !== p || n[2] !== m || n[3] !== h
    ? ((g = k({
        account: p,
        statsigWorkspaceId: h.getContext().user.customIDs?.workspace_id,
        authoringDisabled: m,
      })),
      (n[1] = p),
      (n[2] = m),
      (n[3] = h),
      (n[4] = g))
    : (g = n[4]);
  let _ = g,
    v = u === o && p?.id === o && _,
    [b, x] = (0, R.useState)(!1),
    S;
  n[5] !== o || n[6] !== i ? ((S = (e) => M(i, o, e)), (n[5] = o), (n[6] = i), (n[7] = S)) : (S = n[7]);
  let w;
  n[8] !== l || n[9] !== S
    ? ((w = { mutationFn: S, onSuccess: l }), (n[8] = l), (n[9] = S), (n[10] = w))
    : (w = n[10]);
  let { mutate: E, isPending: O, isSuccess: j, error: N, variables: P } = a(w),
    F;
  n[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = { "application/zip": [`.zip`], "application/gzip": [`.tar.gz`, `.tgz`] }), (n[11] = F))
    : (F = n[11]);
  let I;
  n[12] === Symbol.for(`react.memo_cache_sentinel`) ? ((I = () => x(!0)), (n[12] = I)) : (I = n[12]);
  let {
      getRootProps: V,
      getInputProps: H,
      inputRef: U,
      open: W,
    } = D({
      multiple: !1,
      noClick: !0,
      noKeyboard: !0,
      disabled: O || j || !v,
      accept: F,
      onDrop: (e, t) => {
        if (!v || !oe.current?.isConnected || oe.current.disabled) return;
        let n = e[0];
        if (t.length > 0 || n == null || A(n) != null) {
          x(!0);
          return;
        }
        (x(!1), E(n));
      },
      onError: I,
    }),
    oe = U,
    G;
  n[13] !== O || n[14] !== s
    ? ((G = (e) => {
        !e && !O && s();
      }),
      (n[13] = O),
      (n[14] = s),
      (n[15] = G))
    : (G = n[15]);
  let K = !O,
    q;
  n[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((q = (0, z.jsx)(d, {
        children: (0, z.jsx)(te, { title: (0, z.jsx)(ee, { children: (0, z.jsx)(r, { ...B.upload }) }) }),
      })),
      (n[16] = q))
    : (q = n[16]);
  let J;
  n[17] !== v ||
  n[18] !== N ||
  n[19] !== P?.name ||
  n[20] !== H ||
  n[21] !== V ||
  n[22] !== O ||
  n[23] !== j ||
  n[24] !== W ||
  n[25] !== b
    ? ((J = (0, z.jsx)(d, {
        spacing: `large`,
        children: j
          ? (0, z.jsx)(c, {
              role: `status`,
              className: `text-sm text-secondary`,
              children: (0, z.jsx)(r, {
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
                (0, z.jsx)(c, {
                  className: `text-sm text-secondary`,
                  children: (0, z.jsx)(r, {
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
                      children: (0, z.jsx)(r, {
                        id: `plugins.management.uploading`,
                        defaultMessage: `Uploading {filename}…`,
                        description: `Progress message while replacing a plugin version; filename is the selected archive name`,
                        values: { filename: P?.name },
                      }),
                    })
                  : null,
                b
                  ? (0, z.jsx)(`span`, {
                      role: `alert`,
                      className: `text-sm text-danger`,
                      children: (0, z.jsx)(r, {
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
                      children: (0, z.jsx)(r, {
                        id: `plugins.management.uploadFailed`,
                        defaultMessage: `Couldn't upload the new version. {reason}`,
                        description: `Plugin upload error followed by the server's explanation`,
                        values: { reason: N.message },
                      }),
                    }),
                (0, z.jsx)(t, {
                  color: `secondary`,
                  size: `medium`,
                  disabled: O || !v,
                  loading: O,
                  onClick: W,
                  children: (0, z.jsx)(r, {
                    id: `plugins.management.chooseFile`,
                    defaultMessage: `Choose file`,
                    description: `Open the file picker for a new plugin version, including retrying an upload`,
                  }),
                }),
              ],
            }),
      })),
      (n[17] = v),
      (n[18] = N),
      (n[19] = P?.name),
      (n[20] = H),
      (n[21] = V),
      (n[22] = O),
      (n[23] = j),
      (n[24] = W),
      (n[25] = b),
      (n[26] = J))
    : (J = n[26]);
  let Y = j ? `primary` : `secondary`,
    X;
  n[27] === j
    ? (X = n[28])
    : ((X = j
        ? (0, z.jsx)(r, {
            id: `plugins.management.viewPlugin`,
            defaultMessage: `View plugin`,
            description: `Close the successful upload dialog and view the updated plugin`,
          })
        : (0, z.jsx)(r, { ...B.cancel })),
      (n[27] = j),
      (n[28] = X));
  let Z;
  n[29] !== O || n[30] !== s || n[31] !== Y || n[32] !== X
    ? ((Z = (0, z.jsx)(d, {
        spacing: `large`,
        children: (0, z.jsx)(ie, {
          expandSingleButton: !1,
          children: (0, z.jsx)(t, { color: Y, disabled: O, onClick: s, children: X }),
        }),
      })),
      (n[29] = O),
      (n[30] = s),
      (n[31] = Y),
      (n[32] = X),
      (n[33] = Z))
    : (Z = n[33]);
  let Q;
  n[34] !== J || n[35] !== Z
    ? ((Q = (0, z.jsxs)(re, { children: [q, J, Z] })), (n[34] = J), (n[35] = Z), (n[36] = Q))
    : (Q = n[36]);
  let $;
  return (
    n[37] !== O || n[38] !== Q || n[39] !== G || n[40] !== K
      ? (($ = (0, z.jsx)(ne, {
          open: !0,
          onOpenChange: G,
          showDialogClose: K,
          shouldIgnoreClickOutside: O,
          children: Q,
        })),
        (n[37] = O),
        (n[38] = Q),
        (n[39] = G),
        (n[40] = K),
        (n[41] = $))
      : ($ = n[41]),
    $
  );
}
function I(e) {
  let n = (0, L.c)(49),
    { target: i, name: o, kind: s, accountId: u, onClose: f, onDeleted: p } = e,
    { accountId: m } = ae(),
    h = m === u,
    g;
  n[0] !== u || n[1] !== i
    ? ((g = () =>
        i.type === `connector`
          ? w.safeDelete(`/aip/connectors/{connector_id}`, {
              surface: `plugin_management`,
              additionalHeaders: { ...b(), "ChatGPT-Account-Id": u },
              parameters: { path: { connector_id: i.connectorId } },
              expectedErrorStatuses: [400, 403, 404, 409],
            })
          : w.safeDelete(
              i.type === `plugin` ? `/ps/plugins/{plugin_id}` : `/public/plugins/workspace/{plugin_id}`,
              {
                surface: `plugin_management`,
                additionalHeaders: { "ChatGPT-Account-Id": u },
                parameters: { path: { plugin_id: i.pluginId } },
                expectedErrorStatuses: [400, 403, 404, 409],
              },
            )),
      (n[0] = u),
      (n[1] = i),
      (n[2] = g))
    : (g = n[2]);
  let _;
  n[3] !== f || n[4] !== p
    ? ((_ = async () => {
        (f(), await p());
      }),
      (n[3] = f),
      (n[4] = p),
      (n[5] = _))
    : (_ = n[5]);
  let v;
  n[6] !== g || n[7] !== _
    ? ((v = { mutationFn: g, onSuccess: _ }), (n[6] = g), (n[7] = _), (n[8] = v))
    : (v = n[8]);
  let { mutate: y, isPending: x, error: S } = a(v),
    C;
  n[9] !== S || n[10] !== s
    ? ((C =
        s === `app` &&
        S instanceof l &&
        S.status === 400 &&
        S.message.includes(`Connector must not be enabled for the workspace before deletion`)),
      (n[9] = S),
      (n[10] = s),
      (n[11] = C))
    : (C = n[11]);
  let T = C,
    E;
  n[12] !== x || n[13] !== f
    ? ((E = (e) => {
        !e && !x && f();
      }),
      (n[12] = x),
      (n[13] = f),
      (n[14] = E))
    : (E = n[14]);
  let D = !x,
    O;
  n[15] !== h || n[16] !== x || n[17] !== y
    ? ((O = (e) => {
        (e.preventDefault(), !x && h && y());
      }),
      (n[15] = h),
      (n[16] = x),
      (n[17] = y),
      (n[18] = O))
    : (O = n[18]);
  let k;
  n[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, z.jsx)(ee, { children: (0, z.jsx)(r, { ...B.delete }) })), (n[19] = k))
    : (k = n[19]);
  let A;
  n[20] !== s || n[21] !== o
    ? ((A = (0, z.jsx)(te, {
        title: k,
        subtitle: (0, z.jsx)(c, {
          className: `break-words`,
          children:
            s === `app`
              ? (0, z.jsx)(r, { ...P.deleteWarning, values: { name: o } })
              : (0, z.jsx)(r, {
                  id: `plugins.management.deleteWarning`,
                  defaultMessage: `Permanently delete {name}? People who use this plugin will lose access. This can't be undone`,
                  description: `Confirmation warning before a creator permanently deletes a plugin; name is the plugin display name`,
                  values: { name: o },
                }),
        }),
        subtitleSize: `sm`,
        subtitleTone: `secondary`,
      })),
      (n[20] = s),
      (n[21] = o),
      (n[22] = A))
    : (A = n[22]);
  let j;
  n[23] !== S || n[24] !== T
    ? ((j =
        S == null
          ? null
          : (0, z.jsxs)(`span`, {
              role: `alert`,
              className: `text-sm text-danger`,
              children: [
                T &&
                  (0, z.jsx)(r, {
                    id: `plugins.management.deleteWorkspaceEnabled`,
                    defaultMessage: `This app is enabled for your workspace. A workspace admin must disable it in workspace settings, then delete it.`,
                    description: `Deletion is blocked while the app is enabled for the workspace; an admin must both disable and delete it`,
                  }),
                S instanceof l &&
                  S.status === 403 &&
                  (0, z.jsx)(r, {
                    id: `plugins.management.deleteForbidden`,
                    defaultMessage: `You don't have permission to delete this plugin. If this is a workspace app, ask an admin to disable and delete it. Otherwise, use the account that created it.`,
                    description: `Deletion permission error; workspace apps need an admin to disable and delete them, while other plugins need the creator's account`,
                  }),
                S instanceof l &&
                  S.status === 404 &&
                  (0, z.jsx)(r, {
                    id: `plugins.management.deleteUnavailable`,
                    defaultMessage: `This plugin is unavailable. Check that you're in the correct account or workspace, then reload your plugin list.`,
                    description: `Deletion returned not found; ask the user to check their account or workspace and reload the list without implying deletion succeeded`,
                  }),
                !T &&
                  (!(S instanceof l) || (S.status !== 403 && S.status !== 404)) &&
                  (0, z.jsx)(r, {
                    id: `plugins.management.deleteFailed`,
                    defaultMessage: `Couldn't delete plugin. Try again`,
                    description: `Error after deleting a hosted plugin fails`,
                  }),
              ],
            })),
      (n[23] = S),
      (n[24] = T),
      (n[25] = j))
    : (j = n[25]);
  let M;
  n[26] !== j || n[27] !== A
    ? ((M = (0, z.jsxs)(d, { children: [A, j] })), (n[26] = j), (n[27] = A), (n[28] = M))
    : (M = n[28]);
  let N;
  n[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, z.jsx)(r, { ...B.cancel })), (n[29] = N))
    : (N = n[29]);
  let F;
  n[30] !== x || n[31] !== f
    ? ((F = (0, z.jsx)(t, { color: `secondary`, disabled: x, onClick: f, children: N })),
      (n[30] = x),
      (n[31] = f),
      (n[32] = F))
    : (F = n[32]);
  let I = x || !h,
    R;
  n[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, z.jsx)(r, { ...B.delete })), (n[33] = R))
    : (R = n[33]);
  let V;
  n[34] !== x || n[35] !== I
    ? ((V = (0, z.jsx)(t, { color: `dangerSolid`, type: `submit`, disabled: I, loading: x, children: R })),
      (n[34] = x),
      (n[35] = I),
      (n[36] = V))
    : (V = n[36]);
  let H;
  n[37] !== F || n[38] !== V
    ? ((H = (0, z.jsx)(d, { spacing: `large`, children: (0, z.jsxs)(ie, { children: [F, V] }) })),
      (n[37] = F),
      (n[38] = V),
      (n[39] = H))
    : (H = n[39]);
  let U;
  n[40] !== M || n[41] !== H || n[42] !== O
    ? ((U = (0, z.jsxs)(re, { as: `form`, onSubmit: O, children: [M, H] })),
      (n[40] = M),
      (n[41] = H),
      (n[42] = O),
      (n[43] = U))
    : (U = n[43]);
  let W;
  return (
    n[44] !== x || n[45] !== U || n[46] !== E || n[47] !== D
      ? ((W = (0, z.jsx)(ne, {
          open: !0,
          size: `compact`,
          onOpenChange: E,
          showDialogClose: D,
          shouldIgnoreClickOutside: x,
          children: U,
        })),
        (n[44] = x),
        (n[45] = U),
        (n[46] = E),
        (n[47] = D),
        (n[48] = W))
      : (W = n[48]),
    W
  );
}
var L, R, z, B;
function V() {
  return (V = e(() => {
    ((L = m()),
      i(),
      (R = g()),
      O(),
      u(),
      v(),
      S(),
      _(),
      f(),
      p(),
      o(),
      N(),
      x(),
      E(),
      s(),
      j(),
      (z = h()),
      (B = n({
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
//# sourceMappingURL=dialogs-8f6d49f39b6b.js.map
