import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  AO as n,
  CB as r,
  CO as i,
  CS as a,
  Cot as o,
  Ext as s,
  Ixt as c,
  Pxt as l,
  TJ as u,
  VDt as d,
  Vxt as f,
  _xt as p,
  cz as m,
  jDt as h,
  jH as g,
  nE as _,
  sz as v,
  t3 as y,
  vzt as b,
  wot as x,
  xMt as S,
} from "./app-shared-bbfeca5e5737.js";
import { Bmt as C, GMr as w, Hb as T, Wmt as E, tNr as D, zb as O } from "./app-initial-5851df3f6cb1.js";
import { i as k, n as A } from "./writing-block-surface-635635c06cb8.js";
import { n as j, t as M } from "./document-78bc4716b92d.js";
function N(e) {
  let n = (0, P.c)(26),
    {
      appearance: a,
      documentId: l,
      isExpanded: u,
      readOnly: p,
      renderFrame: m,
      showOpenNote: h,
      title: y,
    } = e,
    b = u !== void 0 && u,
    x = h === void 0 || h,
    S = c(o),
    C = d(),
    D = s(),
    O = f(w),
    k = f(E),
    j = a !== `viewer` && !b,
    N;
  n[0] === C
    ? (N = n[1])
    : ((N = C.formatMessage({
        id: `multiplayer.openNote`,
        defaultMessage: `Open note`,
        description: `Tooltip and accessible name for opening a shared note from a conversation in the Library editor`,
      })),
      (n[0] = C),
      (n[1] = N));
  let I = N,
    L;
  n[2] !== O || n[3] !== l || n[4] !== S || n[5] !== k || n[6] !== y
    ? ((L =
        k && O != null
          ? () => {
              T(S, {
                accountId: O,
                fileName: y,
                libraryFileId: l,
                resourceKind: `file`,
                showOrganizationSharing: !1,
              });
            }
          : void 0),
      (n[2] = O),
      (n[3] = l),
      (n[4] = S),
      (n[5] = k),
      (n[6] = y),
      (n[7] = L))
    : (L = n[7]);
  let R;
  n[8] !== a ||
  n[9] !== l ||
  n[10] !== j ||
  n[11] !== C ||
  n[12] !== b ||
  n[13] !== D ||
  n[14] !== I ||
  n[15] !== m ||
  n[16] !== x
    ? ((R = (e) => {
        let {
            content: n,
            editingControls: o,
            historyControls: s,
            isLoading: c,
            menuItems: u,
            sharingControls: d,
            status: f,
            themeStyle: p,
            title: h,
          } = e,
          y = j && p?.[`--color-surface`] != null,
          S = y ? _ : t,
          w = {
            inlineControlsAppearance: y ? `viewer` : void 0,
            style: p,
            viewerEditingControls: o,
            viewerMenuItems: u,
            status: f,
            title: h,
            headerActions: [
              {
                id: `note-actions`,
                collapsePriority: 1,
                content: (0, F.jsxs)(F.Fragment, {
                  children: [
                    (0, F.jsxs)(`div`, {
                      className: `flex min-w-0 items-center gap-2 select-none`,
                      children: [
                        s == null
                          ? null
                          : (0, F.jsx)(`div`, { "data-viewer-header-collapsible": !0, children: s }),
                        d,
                      ],
                    }),
                    a === `viewer`
                      ? null
                      : (0, F.jsx)(i, {
                          align: `end`,
                          contentWidth: `menu`,
                          triggerButton: (0, F.jsx)(S, {
                            "aria-label": C.formatMessage({
                              id: `multiplayer.moreActions`,
                              defaultMessage: `Note actions`,
                              description: `Accessible label for a shared Library note menu containing undo, redo, and download actions`,
                            }),
                            color: y ? void 0 : `ghostActive`,
                            size: y ? void 0 : `imageToolbar`,
                            uniform: !0,
                            children: (0, F.jsx)(g, {}),
                          }),
                          children: u,
                        }),
                    x &&
                      !b &&
                      a !== `viewer` &&
                      (0, F.jsx)(v, {
                        tooltipContent: I,
                        children: (0, F.jsx)(S, {
                          "aria-label": I,
                          color: y ? void 0 : `ghostActive`,
                          size: y ? void 0 : `imageToolbar`,
                          uniform: !0,
                          onClick: () => void D(`/library/file/${encodeURIComponent(l)}`),
                          children: (0, F.jsx)(r, {}),
                        }),
                      }),
                  ],
                }),
              },
            ],
            children: n,
          };
        return m == null ? (0, F.jsx)(A, { ...w }) : m(w, c);
      }),
      (n[8] = a),
      (n[9] = l),
      (n[10] = j),
      (n[11] = C),
      (n[12] = b),
      (n[13] = D),
      (n[14] = I),
      (n[15] = m),
      (n[16] = x),
      (n[17] = R))
    : (R = n[17]);
  let z;
  return (
    n[18] !== a || n[19] !== l || n[20] !== j || n[21] !== p || n[22] !== L || n[23] !== R || n[24] !== y
      ? ((z = (0, F.jsx)(M, {
          appearance: a,
          documentId: l,
          readOnly: p,
          themeInMenu: j,
          title: y,
          onShare: L,
          render: R,
        })),
        (n[18] = a),
        (n[19] = l),
        (n[20] = j),
        (n[21] = p),
        (n[22] = L),
        (n[23] = R),
        (n[24] = y),
        (n[25] = z))
      : (z = n[25]),
    z
  );
}
var P, F;
function I() {
  return (I = e(() => {
    ((P = b()), l(), h(), p(), D(), y(), n(), u(), m(), O(), C(), x(), a(), k(), j(), (F = S()));
  }))();
}
I();
export { N as MultiplayerWritingBlock };
//# sourceMappingURL=writing-block-375a2cf2fb7d.js.map
