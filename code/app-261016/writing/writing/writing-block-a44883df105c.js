import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  LNt as r,
  NSt as i,
  OU as a,
  PBt as o,
  Qst as s,
  TE as c,
  TY as l,
  USt as u,
  XOt as d,
  XS as f,
  Y3 as p,
  Z3 as m,
  ZSt as h,
  ck as g,
  iCt as _,
  nB as v,
  okt as y,
  rB as b,
  tk as x,
  yV as S,
} from "./app-shared-2feb3d4c6fcc.js";
import { Zht as C, dx as w, mx as T, tgt as E, wLr as D, zRr as O } from "./app-initial-ad16eaadf81f.js";
import { i as k, n as A } from "./writing-block-surface-2bef314d86c0.js";
import { n as j, t as M } from "./document-fe49a78fa84b.js";
function N(e) {
  let n = (0, P.c)(26),
    {
      appearance: r,
      documentId: i,
      isExpanded: o,
      readOnly: l,
      renderFrame: d,
      showOpenNote: f,
      title: m,
    } = e,
    h = o !== void 0 && o,
    g = f === void 0 || f,
    b = t(s),
    C = y(),
    w = u(),
    D = _(O),
    k = _(E),
    j = r !== `viewer` && !h,
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
  n[2] !== D || n[3] !== i || n[4] !== b || n[5] !== k || n[6] !== m
    ? ((L =
        k && D != null
          ? () => {
              T(b, {
                accountId: D,
                fileName: m,
                libraryFileId: i,
                resourceKind: `file`,
                showOrganizationSharing: !1,
              });
            }
          : void 0),
      (n[2] = D),
      (n[3] = i),
      (n[4] = b),
      (n[5] = k),
      (n[6] = m),
      (n[7] = L))
    : (L = n[7]);
  let R;
  n[8] !== r ||
  n[9] !== i ||
  n[10] !== j ||
  n[11] !== C ||
  n[12] !== h ||
  n[13] !== w ||
  n[14] !== I ||
  n[15] !== d ||
  n[16] !== g
    ? ((R = (e) => {
        let {
            content: t,
            editingControls: n,
            historyControls: o,
            isLoading: s,
            menuItems: l,
            sharingControls: u,
            status: f,
            themeStyle: m,
            title: _,
          } = e,
          y = j && m?.[`--color-surface`] != null,
          b = y ? c : p,
          T = {
            inlineControlsAppearance: y ? `viewer` : void 0,
            style: m,
            viewerEditingControls: n,
            viewerMenuItems: l,
            status: f,
            title: _,
            headerActions: [
              {
                id: `note-actions`,
                collapsePriority: 1,
                content: (0, F.jsxs)(F.Fragment, {
                  children: [
                    (0, F.jsxs)(`div`, {
                      className: `flex min-w-0 items-center gap-2 select-none`,
                      children: [
                        o == null
                          ? null
                          : (0, F.jsx)(`div`, { "data-viewer-header-collapsible": !0, children: o }),
                        u,
                      ],
                    }),
                    r === `viewer`
                      ? null
                      : (0, F.jsx)(x, {
                          align: `end`,
                          contentWidth: `menu`,
                          triggerButton: (0, F.jsx)(b, {
                            "aria-label": C.formatMessage({
                              id: `multiplayer.moreActions`,
                              defaultMessage: `Note actions`,
                              description: `Accessible label for a shared Library note menu containing undo, redo, and download actions`,
                            }),
                            color: y ? void 0 : `ghostActive`,
                            size: y ? void 0 : `imageToolbar`,
                            uniform: !0,
                            children: (0, F.jsx)(a, {}),
                          }),
                          children: l,
                        }),
                    g &&
                      !h &&
                      r !== `viewer` &&
                      (0, F.jsx)(v, {
                        tooltipContent: I,
                        children: (0, F.jsx)(b, {
                          "aria-label": I,
                          color: y ? void 0 : `ghostActive`,
                          size: y ? void 0 : `imageToolbar`,
                          uniform: !0,
                          onClick: () => void w(`/library/file/${encodeURIComponent(i)}`),
                          children: (0, F.jsx)(S, {}),
                        }),
                      }),
                  ],
                }),
              },
            ],
            children: t,
          };
        return d == null ? (0, F.jsx)(A, { ...T }) : d(T, s);
      }),
      (n[8] = r),
      (n[9] = i),
      (n[10] = j),
      (n[11] = C),
      (n[12] = h),
      (n[13] = w),
      (n[14] = I),
      (n[15] = d),
      (n[16] = g),
      (n[17] = R))
    : (R = n[17]);
  let z;
  return (
    n[18] !== r || n[19] !== i || n[20] !== j || n[21] !== l || n[22] !== L || n[23] !== R || n[24] !== m
      ? ((z = (0, F.jsx)(M, {
          appearance: r,
          documentId: i,
          readOnly: l,
          themeInMenu: j,
          title: m,
          onShare: L,
          render: R,
        })),
        (n[18] = r),
        (n[19] = i),
        (n[20] = j),
        (n[21] = l),
        (n[22] = L),
        (n[23] = R),
        (n[24] = m),
        (n[25] = z))
      : (z = n[25]),
    z
  );
}
var P, F;
function I() {
  return (I = e(() => {
    ((P = o()), h(), d(), i(), D(), m(), g(), l(), b(), w(), C(), n(), f(), k(), j(), (F = r()));
  }))();
}
I();
export { N as MultiplayerWritingBlock };
//# sourceMappingURL=writing-block-a44883df105c.js.map
