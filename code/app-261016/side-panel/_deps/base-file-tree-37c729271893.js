import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $O as n,
  $St as r,
  AY as i,
  Bst as a,
  FBt as o,
  Fgt as s,
  Igt as c,
  JOt as l,
  LNt as u,
  MFt as d,
  Mgt as f,
  NO as p,
  Oz as m,
  PBt as h,
  PO as g,
  RFt as _,
  XOt as v,
  ZSt as y,
  ast as ee,
  d2 as b,
  ek as x,
  f2 as te,
  gB as ne,
  hB as re,
  ist as ie,
  jFt as S,
  kY as C,
  nB as w,
  rB as ae,
  wz as oe,
  yft as T,
  zFt as se,
  zst as ce,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  GEr as le,
  Hpr as E,
  KBr as ue,
  MOr as de,
  Man as fe,
  Nan as pe,
  S7t as me,
  Upr as he,
  abt as D,
  b7t as ge,
  c7t as O,
  dbt as k,
  fbt as _e,
  jan as ve,
  mbt as A,
  obt as ye,
  pbt as be,
  s7t as j,
  v7t as xe,
  y7t as Se,
  zOr as Ce,
} from "./app-initial-ad16eaadf81f.js";
import { i as we, r as M, t as Te } from "./use-target-apps-cd0cca389b7c.js";
function N(e, t, n) {
  let r = e == null ? null : (0, L.jsx)(`div`, { slot: be, children: e }),
    i = t != null && n != null ? (0, L.jsx)(`div`, { slot: k, children: t(n.item, n.context) }) : null;
  return r == null && i == null ? null : (0, L.jsxs)(L.Fragment, { children: [r, i] });
}
function P(e, t) {
  return typeof window > `u` && t != null
    ? (0, L.jsxs)(L.Fragment, {
        children: [
          (0, L.jsx)(`template`, {
            shadowrootmode: `open`,
            dangerouslySetInnerHTML: { __html: t.shadowHtml },
          }),
          e,
        ],
      })
    : (0, L.jsx)(L.Fragment, { children: e });
}
function Ee(e) {
  let t = e.shadowRoot;
  return (
    t?.querySelector(`[data-file-tree-id]`) instanceof HTMLElement ||
    t?.querySelector(`[data-file-tree-id]`) instanceof SVGElement ||
    e.querySelector(`template[shadowrootmode="open"]`) instanceof HTMLTemplateElement
  );
}
function F(e, t, n, r, i) {
  let a = { ...(e ?? {}) };
  if ((t != null && delete a.header, n)) {
    let t = e?.contextMenu,
      n = t?.onClose,
      o = t?.onOpen;
    ((a.contextMenu = {
      ...(t ?? {}),
      enabled: !0,
      onClose: () => {
        (n?.(), r());
      },
      onOpen: (e, t) => {
        (i(e, t), o?.(e, t));
      },
    }),
      delete a.contextMenu.render);
  }
  return a.header != null || a.contextMenu != null ? a : void 0;
}
function De({ header: e, id: t, model: n, preloadedData: r, renderContextMenu: i, ...a }) {
  let [o, s] = (0, I.useState)(null),
    [c, l] = (0, I.useState)(null),
    u = (0, I.useRef)(n.getComposition()),
    d = (0, I.useRef)(n);
  d.current !== n && ((d.current = n), (u.current = n.getComposition()));
  let f = i != null,
    p = (0, I.useCallback)(() => {
      s(null);
    }, []),
    m = (0, I.useCallback)((e, t) => {
      s({ context: t, item: e });
    }, []),
    h = u.current,
    g = (0, I.useMemo)(() => F(h, e, f, p, m), [h, p, m, f, e]),
    _ = (0, I.useCallback)((e) => {
      l(e);
    }, []);
  ((0, I.useEffect)(() => {
    f || s(null);
  }, [f]),
    R(() => {
      n.setComposition(g);
    }, [g, n]),
    R(() => {
      if (c != null)
        return (
          r != null && Ee(c) ? n.hydrate({ fileTreeContainer: c }) : n.render({ fileTreeContainer: c }),
          () => {
            (n.unmount(), n.setComposition(h));
          }
        );
    }, [h, c, n, r]));
  let v = P(N(e, i, o), r),
    y = t ?? r?.id,
    ee = {
      "--trees-item-height": `${String(n.getItemHeight())}px`,
      "--trees-density-override": n.getDensityFactor(),
      ...a.style,
    };
  return (0, L.jsx)(_e, { ...a, id: y, ref: _, style: ee, suppressHydrationWarning: r != null, children: v });
}
var I, L, R;
function z() {
  return (z = e(() => {
    (A(), (I = o()), (L = u()), (R = typeof window > `u` ? I.useEffect : I.useLayoutEffect));
  }))();
}
function Oe(e) {
  let [t] = (0, B.useState)(() => new D(e)),
    n = (0, B.useRef)({ timeout: null, model: t });
  return (
    (0, B.useEffect)(() => {
      let { current: e } = n;
      return (
        e.timeout != null && (clearTimeout(e.timeout), (e.timeout = null)),
        () => {
          e.timeout = setTimeout(() => e.model.cleanUp(), 1);
        }
      );
    }, []),
    { model: t }
  );
}
var B;
function V() {
  return (V = e(() => {
    (ye(), (B = o()));
  }))();
}
function ke({
  isLoadingOpenTargets: e = !1,
  onAddToChat: t,
  onCopyPath: n,
  onOpenInTarget: r,
  onSaveAs: i,
  primaryTarget: a,
  targetPath: o,
  visibleTargets: s,
}) {
  if (o == null) return [];
  let c = n == null ? `workspace` : `review`,
    u = [];
  return (
    i != null &&
      u.push({
        id: `save-as`,
        message: l({
          id: `markdown.fileReference.saveAs`,
          defaultMessage: `Save as…`,
          description: `Context menu action to save a file tree item to a user-selected location`,
        }),
        onSelect: () => {
          i(o);
        },
      }),
    n != null &&
      u.push({
        id: `copy-path`,
        message: l({
          id: `codex.review.fileTree.contextMenu.copyPath`,
          defaultMessage: `Copy path`,
          description: `Context menu action to copy the path of a file tree item`,
        }),
        onSelect: () => {
          n(o);
        },
      }),
    t != null &&
      u.push({
        id: `add-to-chat`,
        selectAfterClose: !0,
        message: l({
          id: `threadSidePanel.workspaceBrowser.addToChat`,
          defaultMessage: `Add to chat`,
          description: `Context menu action for adding a file from the file tree to the current chat`,
        }),
        onSelect: () => {
          t(o);
        },
      }),
    e
      ? [
          {
            id: `open-in-loading`,
            message: H(c),
            tooltipMessage: l({
              id: `threadSidePanel.workspaceBrowser.openIn.loading`,
              defaultMessage: `Loading available apps…`,
              description: `Tooltip shown when the file tree is still loading app options for opening a file`,
            }),
            enabled: !1,
          },
          { id: `open-in-separator`, type: `separator` },
          ...u,
        ]
      : a == null
        ? u
        : [
            ...me({
              idPrefix: Ae(c),
              messages: je(c),
              onOpenInTarget: (e, t) => {
                r(e, t, o);
              },
              primaryTarget: a,
              visibleTargets: s,
            }),
            { id: `open-in-separator`, type: `separator` },
            ...u,
          ]
  );
}
function Ae(e) {
  switch (e) {
    case `review`:
      return `review-file-tree-open`;
    case `workspace`:
      return `workspace-directory-tree-open`;
  }
}
function je(e) {
  switch (e) {
    case `review`:
      return {
        openInTarget: l({
          id: `codex.review.fileTree.contextMenu.openInTarget`,
          defaultMessage: `Open in {target}`,
          description: `Context menu action to open a review file in the preferred app`,
        }),
        openIn: H(e),
        openInTargetSubmenu: l({
          id: `codex.review.fileTree.contextMenu.openWithTarget`,
          defaultMessage: `{target}`,
          description: `Context menu action to open a review file in a specific app`,
        }),
      };
    case `workspace`:
      return {
        openInTarget: l({
          id: `threadSidePanel.workspaceBrowser.openInTarget`,
          defaultMessage: `Open in {target}`,
          description: `Context menu action to open a workspace browser file in the preferred app`,
        }),
        openIn: H(e),
        openInTargetSubmenu: l({
          id: `threadSidePanel.workspaceBrowser.openInTargetSubmenu`,
          defaultMessage: `{target}`,
          description: `Context menu action to open a workspace browser file in a specific app`,
        }),
      };
  }
}
function H(e) {
  switch (e) {
    case `review`:
      return l({
        id: `codex.review.fileTree.contextMenu.openWith`,
        defaultMessage: `Open with`,
        description: `Context menu submenu label for choosing an app to open a review file`,
      });
    case `workspace`:
      return l({
        id: `threadSidePanel.workspaceBrowser.openIn`,
        defaultMessage: `Open in…`,
        description: `Context menu submenu label for choosing an app to open a workspace browser file`,
      });
  }
}
function Me({ cwd: e, isWindowsHost: t, itemPath: n, targetPathByDisplayPath: r }) {
  return n == null ? null : (r.get(n) ?? oe(e ?? ``, n, t));
}
function U() {
  return (U = e(() => {
    (v(), m());
  }))();
}
function Ne(e, { includeDirectories: t = !1 } = {}) {
  for (let n of e.composedPath()) {
    if (!(n instanceof Element)) continue;
    let e = n.getAttribute(`data-item-type`);
    if (e !== `file` && !(t && e === `folder`)) continue;
    let r = n.getAttribute(`data-item-path`);
    if (r) return r;
  }
  return null;
}
function Pe() {
  return (Pe = e(() => {}))();
}
var Fe;
function Ie() {
  return (Ie = e(() => {
    Fe = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 6.41797C10.367 6.41815 10.6649 6.71599 10.665 7.08301V9.33496H12.916C13.2832 9.33496 13.5809 9.63287 13.5811 10C13.5809 10.3671 13.2832 10.665 12.916 10.665H10.665V12.916C10.665 13.2832 10.3671 13.5809 10 13.5811C9.63284 13.5809 9.33496 13.2832 9.33496 12.916V10.665H7.08301C6.71596 10.6649 6.41815 10.367 6.41797 10C6.41813 9.63295 6.71595 9.33509 7.08301 9.33496H9.33496V7.08301C9.33513 6.71596 9.63295 6.4181 10 6.41797Z" fill="currentColor" />
  <path d="M12.666 2.66797C13.3549 2.66797 13.9121 2.66735 14.3623 2.7041C14.8202 2.74151 15.2268 2.82084 15.6035 3.0127C16.1989 3.31608 16.6829 3.80115 16.9863 4.39649C17.1781 4.77304 17.2575 5.17902 17.2949 5.63672C17.3317 6.08689 17.3311 6.64406 17.3311 7.33301V12.666C17.3311 13.3549 17.3317 13.9121 17.2949 14.3623C17.2575 14.8203 17.1782 15.2268 16.9863 15.6035C16.6829 16.1988 16.1988 16.6829 15.6035 16.9863C15.2268 17.1783 14.8203 17.2575 14.3623 17.2949C13.9121 17.3317 13.3549 17.3311 12.666 17.3311H7.33301C6.64403 17.3311 6.08691 17.3317 5.63672 17.2949C5.17899 17.2575 4.77306 17.1781 4.39649 16.9863C3.80114 16.6829 3.31609 16.1989 3.0127 15.6035C2.82085 15.2269 2.74151 14.8202 2.7041 14.3623C2.66736 13.9122 2.66797 13.3548 2.66797 12.666V7.33301C2.66797 6.64406 2.66732 6.08689 2.7041 5.63672C2.74152 5.17904 2.82093 4.77302 3.0127 4.39649C3.31613 3.80104 3.80103 3.31611 4.39649 3.0127C4.77304 2.82092 5.17902 2.74152 5.63672 2.7041C6.08691 2.66732 6.64403 2.66797 7.33301 2.66797H12.666ZM7.33301 3.99805C6.6221 3.99805 6.12859 3.99894 5.74512 4.03027C5.36955 4.06098 5.15798 4.11775 5 4.19824C4.65484 4.37414 4.37416 4.65485 4.19824 5C4.11775 5.15797 4.06098 5.36959 4.03027 5.74512C3.99894 6.12858 3.99805 6.62214 3.99805 7.33301V12.666C3.99805 13.3767 3.99898 13.8705 4.03027 14.2539C4.06094 14.6292 4.11788 14.8411 4.19824 14.999C4.37412 15.3442 4.65487 15.6258 5 15.8018C5.15795 15.8822 5.36972 15.939 5.74512 15.9697C6.12859 16.0011 6.6221 16.001 7.33301 16.001H12.666C13.3767 16.001 13.8705 16.001 14.2539 15.9697C14.6292 15.9391 14.8411 15.8821 14.999 15.8018C15.3443 15.6258 15.6258 15.3443 15.8018 14.999C15.8821 14.8411 15.9391 14.6292 15.9697 14.2539C16.001 13.8705 16.001 13.3767 16.001 12.666V7.33301C16.001 6.62213 16.0011 6.12858 15.9697 5.74512C15.939 5.36976 15.8822 5.15795 15.8018 5C15.6258 4.65488 15.3442 4.37411 14.999 4.19824C14.8411 4.11787 14.6292 4.06094 14.2539 4.03027C13.8705 3.99898 13.3767 3.99805 12.666 3.99805H7.33301Z" fill="currentColor" />
</svg>
`;
  }))();
}
var Le;
function W() {
  return (W = e(() => {
    Le = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.916 9.33496C13.2833 9.33496 13.5811 9.63273 13.5811 10C13.5811 10.3673 13.2833 10.665 12.916 10.665H7.08301C6.71585 10.6649 6.41797 10.3672 6.41797 10C6.41797 9.63281 6.71585 9.33509 7.08301 9.33496H12.916Z" fill="currentColor" />
  <path d="M12.666 2.66797C13.3549 2.66797 13.9121 2.66735 14.3623 2.7041C14.8202 2.74151 15.2268 2.82084 15.6035 3.0127C16.1989 3.31608 16.6829 3.80115 16.9863 4.39649C17.1781 4.77304 17.2575 5.17902 17.2949 5.63672C17.3317 6.08689 17.3311 6.64406 17.3311 7.33301V12.666C17.3311 13.3549 17.3317 13.9121 17.2949 14.3623C17.2575 14.8203 17.1782 15.2268 16.9863 15.6035C16.6829 16.1988 16.1988 16.6829 15.6035 16.9863C15.2268 17.1783 14.8203 17.2575 14.3623 17.2949C13.9121 17.3317 13.3549 17.3311 12.666 17.3311H7.33301C6.64403 17.3311 6.08691 17.3317 5.63672 17.2949C5.17899 17.2575 4.77306 17.1781 4.39649 16.9863C3.80114 16.6829 3.31609 16.1989 3.0127 15.6035C2.82085 15.2269 2.74151 14.8202 2.7041 14.3623C2.66736 13.9122 2.66797 13.3548 2.66797 12.666V7.33301C2.66797 6.64406 2.66732 6.08689 2.7041 5.63672C2.74152 5.17904 2.82093 4.77302 3.0127 4.39649C3.31613 3.80104 3.80103 3.31611 4.39649 3.0127C4.77304 2.82092 5.17902 2.74152 5.63672 2.7041C6.08691 2.66732 6.64403 2.66797 7.33301 2.66797H12.666ZM7.33301 3.99805C6.6221 3.99805 6.12859 3.99894 5.74512 4.03027C5.36955 4.06098 5.15798 4.11775 5 4.19824C4.65484 4.37414 4.37416 4.65485 4.19824 5C4.11775 5.15797 4.06098 5.36959 4.03027 5.74512C3.99894 6.12858 3.99805 6.62214 3.99805 7.33301V12.666C3.99805 13.3767 3.99898 13.8705 4.03027 14.2539C4.06094 14.6292 4.11788 14.8411 4.19824 14.999C4.37412 15.3442 4.65487 15.6258 5 15.8018C5.15795 15.8822 5.36972 15.939 5.74512 15.9697C6.12859 16.0011 6.6221 16.001 7.33301 16.001H12.666C13.3767 16.001 13.8705 16.001 14.2539 15.9697C14.6292 15.9391 14.8411 15.8821 14.999 15.8018C15.3443 15.6258 15.6258 15.3443 15.8018 14.999C15.8821 14.8411 15.9391 14.6292 15.9697 14.2539C16.001 13.8705 16.001 13.3767 16.001 12.666V7.33301C16.001 6.62213 16.0011 6.12858 15.9697 5.74512C15.939 5.36976 15.8822 5.15795 15.8018 5C15.6258 4.65488 15.3442 4.37411 14.999 4.19824C14.8411 4.11787 14.6292 4.06094 14.2539 4.03027C13.8705 3.99898 13.3767 3.99805 12.666 3.99805H7.33301Z" fill="currentColor" />
</svg>
`;
  }))();
}
var Re;
function G() {
  return (G = e(() => {
    Re = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 8.33301C10.9205 8.33301 11.667 9.07953 11.667 10C11.667 10.9205 10.9205 11.667 10 11.667C9.07961 11.6669 8.334 10.9204 8.33399 10C8.33399 9.07958 9.0796 8.3331 10 8.33301Z" fill="currentColor" />
  <path d="M12.667 2.66797C13.3558 2.66797 13.9132 2.66734 14.3633 2.7041C14.8211 2.74154 15.2279 2.82079 15.6045 3.0127C16.1998 3.31614 16.6839 3.8011 16.9873 4.39649C17.1791 4.77306 17.2585 5.17899 17.2959 5.63672C17.3327 6.08689 17.332 6.64406 17.332 7.33301V12.666C17.332 13.3548 17.3326 13.9122 17.2959 14.3623C17.2585 14.8201 17.1791 15.2269 16.9873 15.6035C16.684 16.1987 16.1996 16.6829 15.6045 16.9863C15.2279 17.1782 14.8211 17.2575 14.3633 17.2949C13.9132 17.3317 13.3558 17.3311 12.667 17.3311H7.33399C6.64513 17.3311 6.08786 17.3317 5.6377 17.2949C5.17997 17.2575 4.77403 17.1781 4.39746 16.9863C3.80197 16.6829 3.31712 16.199 3.01367 15.6035C2.82172 15.2268 2.7425 14.8203 2.70508 14.3623C2.66833 13.9121 2.66895 13.3549 2.66895 12.666V7.33301C2.66895 6.64406 2.6683 6.08689 2.70508 5.63672C2.7425 5.17907 2.82191 4.77301 3.01367 4.39649C3.31713 3.80115 3.80208 3.31606 4.39746 3.0127C4.77393 2.82108 5.18011 2.7415 5.6377 2.7041C6.08785 2.66736 6.64515 2.66797 7.33399 2.66797H12.667ZM7.33399 3.99805C6.62326 3.99805 6.12954 3.99898 5.74609 4.03027C5.37079 4.06094 5.15893 4.11787 5.00098 4.19824C4.65588 4.37409 4.37516 4.65496 4.19922 5C4.11874 5.15796 4.06196 5.36963 4.03125 5.74512C3.99992 6.12858 3.99902 6.62213 3.99902 7.33301V12.666C3.99902 13.3767 3.99996 13.8705 4.03125 14.2539C4.06193 14.6295 4.11878 14.841 4.19922 14.999C4.37515 15.3443 4.6557 15.6258 5.00098 15.8018C5.15894 15.8821 5.37074 15.9391 5.74609 15.9697C6.12955 16.001 6.62323 16.001 7.33399 16.001H12.667C13.3776 16.001 13.8715 16.001 14.2549 15.9697C14.6299 15.939 14.8421 15.8821 15 15.8018C15.345 15.6258 15.6269 15.3441 15.8027 14.999C15.883 14.8411 15.9401 14.6289 15.9707 14.2539C16.002 13.8705 16.002 13.3767 16.002 12.666V7.33301C16.002 6.62213 16.002 6.12858 15.9707 5.74512C15.94 5.36972 15.8832 5.15795 15.8027 5C15.6269 4.65483 15.3451 4.37417 15 4.19824C14.8421 4.11782 14.6302 4.06097 14.2549 4.03027C13.8715 3.99897 13.3776 3.99805 12.667 3.99805H7.33399Z" fill="currentColor" />
</svg>
`;
  }))();
}
function ze(e) {
  let t = (0, Be.c)(21),
    { children: n, model: r, pathDescriptions: i, targetPathByDisplayPath: a } = e,
    [o, s] = (0, q.useState)(null),
    [c, l] = (0, q.useState)(null),
    u;
  t[0] !== c || t[1] !== a
    ? ((u = c == null ? null : (a.get(c.path) ?? c.path)), (t[0] = c), (t[1] = a), (t[2] = u))
    : (u = t[2]);
  let d = u,
    f;
  t[3] !== d || t[4] !== i || t[5] !== c
    ? ((f = c == null ? null : (i?.get(c.path) ?? d)), (t[3] = d), (t[4] = i), (t[5] = c), (t[6] = f))
    : (f = t[6]);
  let p = f,
    m,
    h;
  (t[7] !== o || t[8] !== r
    ? ((m = () => {
        let e = r.getFileTreeContainer()?.shadowRoot?.querySelector(`[data-file-tree-id]`);
        if (o == null || e == null) return;
        let t,
          n = () => clearTimeout(t),
          i = () => {
            (n(), l(null));
          },
          a = (e) => {
            let r = K(e.composedPath()[0]);
            if (r == null) {
              i();
              return;
            }
            if (r.element !== K(e.relatedTarget)?.element) {
              if (e instanceof PointerEvent) {
                if (e.pointerType === `touch` || e.buttons !== 0) return;
                (n(),
                  (t = setTimeout(() => {
                    r.element.isConnected && l(r);
                  }, Ve)));
              } else r.element.matches(`:focus-visible`) && (n(), l(r));
            }
          },
          s = (e) => {
            K(e.composedPath()[0])?.element !== K(e.relatedTarget)?.element && n();
          },
          c = new AbortController(),
          u = { signal: c.signal };
        (e.addEventListener(`pointerover`, a, u),
          e.addEventListener(`pointerout`, s, u),
          e.addEventListener(`focusin`, a, u),
          e.addEventListener(`focusout`, s, u),
          e.addEventListener(`pointerdown`, i, u),
          e.addEventListener(`scroll`, i, { ...u, capture: !0 }),
          e.addEventListener(
            `keydown`,
            (e) => {
              e.key === `Escape` && i();
            },
            u,
          ));
        let d = r.onMutation(`*`, i);
        return () => {
          (n(), c.abort(), d());
        };
      }),
      (h = [o, r]),
      (t[7] = o),
      (t[8] = r),
      (t[9] = m),
      (t[10] = h))
    : ((m = t[9]), (h = t[10])),
    (0, q.useEffect)(m, h));
  let g, _;
  (t[11] !== p || t[12] !== c
    ? ((g = () => {
        if (c != null && p != null)
          return (
            c.element.setAttribute(`aria-description`, p),
            () => c.element.removeAttribute(`aria-description`)
          );
      }),
      (_ = [p, c]),
      (t[11] = p),
      (t[12] = c),
      (t[13] = g),
      (t[14] = _))
    : ((g = t[13]), (_ = t[14])),
    (0, q.useEffect)(g, _));
  let v;
  t[15] !== p || t[16] !== c
    ? ((v =
        c == null
          ? null
          : (0, J.jsx)(w, {
              align: `start`,
              closeOnTriggerClick: !0,
              disableHoverOpen: !0,
              open: !0,
              onOpenChange: (e) => {
                e || l(null);
              },
              scaleAvailableSizeWithZoom: !0,
              selectable: !0,
              side: `bottom`,
              tooltipContent: (0, J.jsx)(`div`, { className: `text-start wrap-anywhere`, children: p }),
              triggerElement: c.element,
              children: null,
            })),
      (t[15] = p),
      (t[16] = c),
      (t[17] = v))
    : (v = t[17]);
  let y;
  return (
    t[18] !== n || t[19] !== v
      ? ((y = (0, J.jsxs)(`div`, { ref: s, className: `contents`, children: [n, v] })),
        (t[18] = n),
        (t[19] = v),
        (t[20] = y))
      : (y = t[20]),
    y
  );
}
function K(e) {
  if (
    !(e instanceof Element) ||
    e.closest(
      `[data-item-section='git'], [data-item-section='decoration'], [data-item-section='action'], input`,
    ) != null
  )
    return null;
  let t = e.closest(`[data-item-path]`),
    n = t?.getAttribute(`data-item-path`);
  return t != null && n ? { element: t, path: n } : null;
}
var Be, q, J, Ve;
function He() {
  return (He = e(() => {
    ((Be = h()), (q = o()), ae(), (J = u()), (Ve = 500));
  }))();
}
function Ue(e) {
  let t = (0, at.c)(132),
    {
      cwd: i,
      contextMenuEnabled: a,
      decorationAlignment: o,
      decorationIcons: s,
      flattenEmptyDirectories: c,
      gitStatus: l,
      hostId: u,
      icons: d,
      initialExpandedPaths: f,
      initialScrollTop: m,
      itemHeight: h,
      onClick: g,
      onDoubleClick: _,
      onExpandedPathsChange: v,
      onSelectionChange: y,
      onStateChange: ee,
      pathDescriptions: b,
      paths: x,
      revealSelectedPath: te,
      revealSelectedPathScrollOffset: re,
      renderRowDecoration: S,
      resetKey: C,
      selectedPath: w,
      sectioned: ae,
      sort: T,
      surface: se,
      unsafeCSS: ce,
    } = e,
    E = a === void 0 || a,
    ue = o === void 0 ? `inline` : o,
    me = c !== void 0 && c,
    D = m === void 0 ? 0 : m,
    ge = h === void 0 ? ot : h,
    O = te !== void 0 && te,
    k = re === void 0 ? `nearest` : re,
    _e = ae !== void 0 && ae,
    ve = se === void 0 ? `main` : se,
    A = r(de),
    ye = fe(),
    be = pe(ye),
    { platform: j } = he(),
    xe;
  t[0] !== i || t[1] !== u
    ? ((xe = { cwd: i, hostId: u }), (t[0] = i), (t[1] = u), (t[2] = xe))
    : (xe = t[2]);
  let Se = we(xe),
    Ce;
  t[3] === x ? (Ce = t[4]) : ((Ce = x.map(qe)), (t[3] = x), (t[4] = Ce));
  let M = Ce,
    N;
  if (t[5] !== i || t[6] !== x || t[7] !== j) {
    N = new Map();
    for (let e of x) typeof e != `string` && N.set(e.displayPath, oe(i ?? ``, e.path, j === `windows`));
    ((t[5] = i), (t[6] = x), (t[7] = j), (t[8] = N));
  } else N = t[8];
  let P = N,
    Ee;
  t[9] !== s || t[10] !== d ? ((Ee = Je(d, s)), (t[9] = s), (t[10] = d), (t[11] = Ee)) : (Ee = t[11]);
  let F = Ee,
    I = ve === `dropdown` ? `var(--color-surface-elevated-secondary)` : `var(--color-surface)`,
    L = _e ? `var(--color-blue)` : `var(--color-codex-git-modified)`,
    R = (0, Z.useRef)(null),
    z;
  t[12] === f ? (z = t[13]) : ((z = Array.from(f ?? [])), (t[12] = f), (t[13] = z));
  let B = (0, Z.useRef)(z),
    V = (0, Z.useRef)(null),
    Ae = (0, Z.useRef)(D),
    je = (0, Z.useRef)(w ?? null),
    H;
  t[14] === ee
    ? (H = t[15])
    : ((H = () => {
        ee?.({ expandedPaths: B.current, scrollTop: Ae.current, selectedPath: je.current });
      }),
      (t[14] = ee),
      (t[15] = H));
  let U = ne(H),
    Pe;
  t[16] !== v || t[17] !== U
    ? ((Pe = (e) => {
        ((B.current = e), v?.(e), U());
      }),
      (t[16] = v),
      (t[17] = U),
      (t[18] = Pe))
    : (Pe = t[18]);
  let Fe = ne(Pe),
    Ie;
  t[19] !== y || t[20] !== U
    ? ((Ie = (e) => {
        ((je.current = e[0] ?? null), y?.(e), U());
      }),
      (t[19] = y),
      (t[20] = U),
      (t[21] = Ie))
    : (Ie = t[21]);
  let Le = ne(Ie),
    W;
  t[22] === S ? (W = t[23]) : ((W = (e) => S?.(e) ?? null), (t[22] = S), (t[23] = W));
  let Re = ne(W),
    G;
  t[24] === w ? (G = t[25]) : ((G = w == null ? void 0 : [w]), (t[24] = w), (t[25] = G));
  let K = `
      :host {
        --trees-bg-override: ${I};
        --trees-bg-muted-override: var(--color-background-primary-ghost-hover);
        --trees-border-color-override: var(--color-border);
        --trees-fg-override: var(--color-text);
        --trees-font-size-override: 13px;
        --trees-focus-ring-color-override: var(--color-ring);
        --trees-git-added-color-override: var(--color-codex-git-added);
        --trees-git-deleted-color-override: var(--color-codex-git-deleted);
        --trees-git-ignored-color-override: var(--color-codex-git-ignored);
        --trees-git-lane-width-override: 20px;
        --trees-git-modified-color-override: ${L};
        --trees-git-renamed-color-override: ${L};
        --trees-git-untracked-color-override: var(--color-codex-git-added);
        --trees-item-padding-x-override: 3px;
        --trees-item-margin-x-override: 0px;
        --trees-level-gap-override: 0px;
        --trees-padding-inline-override: 0px;
        --trees-scrollbar-gutter-override: 0px;
        --trees-scrollbar-gutter-measured: 0px;
        --trees-selected-bg-override: var(--color-background-primary-soft-active);
        --trees-selected-fg-override: var(--color-text-emphasis);
        --trees-item-row-gap-override: 5px;
      }

      /* Halve indentation while keeping guides aligned with full-size icon centers. */
      [data-item-section='spacing']:not(:empty) {
        margin-right: calc((1px - var(--trees-icon-width)) / 4);
      }

      [data-item-section='spacing-item'] + [data-item-section='spacing-item'] {
        margin-left: calc(var(--trees-item-row-gap) + (var(--trees-icon-width) - 1px) / 4);
      }

      [data-item-type='file'] > [data-item-section='spacing']:not(:empty) {
        margin-right: 0;
      }

      [data-file-tree-sticky-overlay-content='true'],
      [data-file-tree-sticky-row='true'] {
        background-color: ${I};
      }

      [data-file-tree-virtualized-scroll='true'] {
        scrollbar-gutter: auto;
      }

      [role="treeitem"] {
        cursor: var(--cursor-interaction) !important;
      }

      [role="treeitem"] * {
        cursor: var(--cursor-interaction) !important;
      }

      [data-item-type='file'][data-item-path$='/']:has([data-item-section='content']:empty) {
        display: none;
      }

      [data-item-git-status] > [data-item-section='content'] {
        color: ${_e ? `var(--trees-item-git-status-color)` : `inherit`};
      }

      /* Preserve spaces when Pierre splits a label into truncation segments. */
      [data-truncate-content='visible'] {
        white-space: pre;
      }

      ${
        _e
          ? `[role='treeitem'][aria-level='1'][aria-posinset='2'] {
              border-top: 1px solid var(--color-border);
            }`
          : ``
      }

      ${
        ue === `end`
          ? `[data-item-section='decoration'] {
              flex: 1 0 auto;
              justify-content: flex-end;
            }`
          : ``
      }

      /* Clip at the row edge instead of shortening every folder or filename. */
      [data-item-flattened-subitems],
      [data-truncate-group-container='middle'] {
        min-width: max-content;
      }

      [data-item-git-status='added'] > [data-item-section='git'] > span,
      [data-item-git-status='deleted'] > [data-item-section='git'] > span,
      [data-item-git-status='modified'] > [data-item-section='git'] > span {
        font-size: 0;
      }

      [data-item-git-status='added'] > [data-item-section='git'] > span::before,
      [data-item-git-status='deleted'] > [data-item-section='git'] > span::before,
      [data-item-git-status='modified'] > [data-item-section='git'] > span::before {
        width: 20px;
        height: 20px;
        background-color: currentColor;
        content: '';
        mask: var(--base-file-tree-git-status-icon) center / contain no-repeat;
      }

      [data-item-git-status='added'] > [data-item-section='git'] > span::before {
        --base-file-tree-git-status-icon: url("${ct}");
      }

      [data-item-git-status='deleted'] > [data-item-section='git'] > span::before {
        --base-file-tree-git-status-icon: url("${lt}");
      }

      [data-item-git-status='modified'] > [data-item-section='git'] > span::before {
        --base-file-tree-git-status-icon: url("${ut}");
      }

      /* Filter out @pierre/truncate's subpixel one-line overflow false positives. */
      @container measure (height <= calc(1lh + 1px)) {
        [data-truncate-marker] {
          opacity: 0;
        }
      }

      ${ce ?? ``}
    `,
    Be;
  t[26] !== F ||
  t[27] !== me ||
  t[28] !== l ||
  t[29] !== Le ||
  t[30] !== f ||
  t[31] !== ge ||
  t[32] !== Re ||
  t[33] !== T ||
  t[34] !== G ||
  t[35] !== K ||
  t[36] !== M
    ? ((Be = {
        fileTreeSearchMode: `hide-non-matches`,
        flattenEmptyDirectories: me,
        gitStatus: l,
        icons: F,
        initialExpandedPaths: f,
        initialSelectedPaths: G,
        itemHeight: ge,
        onSelectionChange: Le,
        paths: M,
        renderRowDecoration: Re,
        search: !1,
        sort: T,
        stickyFolders: !0,
        unsafeCSS: K,
      }),
      (t[26] = F),
      (t[27] = me),
      (t[28] = l),
      (t[29] = Le),
      (t[30] = f),
      (t[31] = ge),
      (t[32] = Re),
      (t[33] = T),
      (t[34] = G),
      (t[35] = K),
      (t[36] = M),
      (t[37] = Be))
    : (Be = t[37]);
  let { model: q } = Oe(Be),
    J;
  t[38] !== f || t[39] !== T
    ? ((J = T == null ? (f ?? []) : []), (t[38] = f), (t[39] = T), (t[40] = J))
    : (J = t[40]);
  let Ve;
  t[41] !== q || t[42] !== C || t[43] !== J || t[44] !== M
    ? ((Ve = { initialExpandedPaths: J, model: q, resetKey: C, treePaths: M }),
      (t[41] = q),
      (t[42] = C),
      (t[43] = J),
      (t[44] = M),
      (t[45] = Ve))
    : (Ve = t[45]);
  let He = (0, Z.useRef)(Ve),
    Ue,
    Y;
  (t[46] !== f || t[47] !== q || t[48] !== C || t[49] !== T || t[50] !== M
    ? ((Ue = () => {
        let e = Array.from(f ?? []),
          t = He.current;
        if (t.model === q && t.resetKey === C && le(t.treePaths, M) && le(t.initialExpandedPaths, e)) return;
        let n = t.model !== q || t.resetKey !== C;
        if (
          ((He.current = { initialExpandedPaths: e, model: q, resetKey: C, treePaths: Array.from(M) }),
          (B.current = e),
          q.resetPaths(M, { initialExpandedPaths: f }),
          T != null)
        ) {
          let t = new Set(e.map(Ke));
          for (let e of t) {
            let t = q.getItem(e);
            t != null && it(t) && !t.isExpanded() && t.expand();
          }
          for (let e of M) {
            if (!e.endsWith(`/`) || t.has(e.slice(0, -1))) continue;
            let n = q.getItem(e);
            n != null && it(n) && n.isExpanded() && n.collapse();
          }
        }
        let r = V.current?.path;
        (n || (r != null && q.getItem(r) == null)) && (V.current = null);
      }),
      (Y = [f, q, C, T, M]),
      (t[46] = f),
      (t[47] = q),
      (t[48] = C),
      (t[49] = T),
      (t[50] = M),
      (t[51] = Ue),
      (t[52] = Y))
    : ((Ue = t[51]), (Y = t[52])),
    (0, Z.useEffect)(Ue, Y));
  let Ye, X;
  (t[53] !== D || t[54] !== q || t[55] !== O || t[56] !== w
    ? ((Ye = () => {
        let e = null,
          t = 0,
          n = () => {
            ((e = null), !rt(q, D) && (t >= st || ((t += 1), (e = window.requestAnimationFrame(n)))));
          };
        return (
          D > 0 && !(O && w != null) ? ((Ae.current = D), n()) : (Ae.current = 0),
          () => {
            e != null && window.cancelAnimationFrame(e);
          }
        );
      }),
      (X = [D, q, O, w]),
      (t[53] = D),
      (t[54] = q),
      (t[55] = O),
      (t[56] = w),
      (t[57] = Ye),
      (t[58] = X))
    : ((Ye = t[57]), (X = t[58])),
    (0, Z.useEffect)(Ye, X));
  let dt;
  t[59] !== q || t[60] !== O || t[61] !== k || t[62] !== w
    ? ((dt = () => {
        if (((je.current = w ?? null), $e(q, w), !O || w == null)) {
          V.current = null;
          return;
        }
        (V.current?.path !== w || V.current.scrollOffset !== k) &&
          et(q, w, k) &&
          (V.current = { path: w, scrollOffset: k });
      }),
      (t[59] = q),
      (t[60] = O),
      (t[61] = k),
      (t[62] = w),
      (t[63] = dt))
    : (dt = t[63]);
  let ft;
  (t[64] !== q || t[65] !== C || t[66] !== O || t[67] !== k || t[68] !== w || t[69] !== M
    ? ((ft = [q, O, k, C, w, M]),
      (t[64] = q),
      (t[65] = C),
      (t[66] = O),
      (t[67] = k),
      (t[68] = w),
      (t[69] = M),
      (t[70] = ft))
    : (ft = t[70]),
    (0, Z.useEffect)(dt, ft));
  let pt;
  t[71] === q
    ? (pt = t[72])
    : ((pt = () => {
        let e = q.getFileTreeContainer();
        e != null && q.render({ fileTreeContainer: e });
      }),
      (t[71] = q),
      (t[72] = pt));
  let mt;
  (t[73] !== q || t[74] !== S ? ((mt = [q, S]), (t[73] = q), (t[74] = S), (t[75] = mt)) : (mt = t[75]),
    (0, Z.useEffect)(pt, mt));
  let ht, gt;
  (t[76] !== l || t[77] !== q
    ? ((ht = () => {
        q.setGitStatus(l);
      }),
      (gt = [l, q]),
      (t[76] = l),
      (t[77] = q),
      (t[78] = ht),
      (t[79] = gt))
    : ((ht = t[78]), (gt = t[79])),
    (0, Z.useEffect)(ht, gt));
  let _t, vt;
  (t[80] !== F || t[81] !== q
    ? ((_t = () => {
        q.setIcons(F);
      }),
      (vt = [F, q]),
      (t[80] = F),
      (t[81] = q),
      (t[82] = _t),
      (t[83] = vt))
    : ((_t = t[82]), (vt = t[83])),
    (0, Z.useEffect)(_t, vt));
  let yt, bt;
  (t[84] !== Fe || t[85] !== q || t[86] !== M
    ? ((yt = () =>
        q.subscribe(() => {
          ((Ae.current = nt(q)), Fe(Qe(q, M)));
        })),
      (bt = [Fe, q, M]),
      (t[84] = Fe),
      (t[85] = q),
      (t[86] = M),
      (t[87] = yt),
      (t[88] = bt))
    : ((yt = t[87]), (bt = t[88])),
    (0, Z.useEffect)(yt, bt));
  let xt, St;
  (t[89] !== q || t[90] !== U
    ? ((xt = () => {
        let e = null,
          t = 0,
          n = null,
          r = () => {
            e = null;
            let i = tt(q);
            if (i != null) {
              let e = () => {
                ((Ae.current = i.scrollTop), U());
              };
              (i.addEventListener(`scroll`, e, { passive: !0 }),
                (n = () => {
                  i.removeEventListener(`scroll`, e);
                }));
              return;
            }
            t >= st || ((t += 1), (e = window.requestAnimationFrame(r)));
          };
        return (
          r(),
          () => {
            (e != null && window.cancelAnimationFrame(e), n?.());
          }
        );
      }),
      (St = [q, U]),
      (t[89] = q),
      (t[90] = U),
      (t[91] = xt),
      (t[92] = St))
    : ((xt = t[91]), (St = t[92])),
    (0, Z.useEffect)(xt, St));
  let Ct;
  t[93] !== E || t[94] !== i || t[95] !== u
    ? ((Ct = E ? (0, Q.jsx)(Te, { cwd: i, hostId: u }) : null),
      (t[93] = E),
      (t[94] = i),
      (t[95] = u),
      (t[96] = Ct))
    : (Ct = t[96]);
  let wt;
  t[97] !== E || t[98] !== i || t[99] !== Se || t[100] !== u || t[101] !== j || t[102] !== A || t[103] !== P
    ? ((wt = () => {
        if (!E) return [];
        let e = Me({
          cwd: i,
          isWindowsHost: j === `windows`,
          itemPath: R.current,
          targetPathByDisplayPath: P,
        });
        return ke({
          ...Xe({ scope: A, cwd: i, fallbackOpenTargets: Se, hostId: u, targetPath: e }),
          onAddToChat: u != null && !R.current?.endsWith(`/`) ? Ge : void 0,
          onCopyPath: p,
          onOpenInTarget: (e, t, n) => {
            Se.open(e, { appPath: t, persistPreferred: !1, path: n });
          },
          onSaveAs:
            !R.current?.endsWith(`/`) && ie.workspaceFiles.saveCopy != null
              ? (e) => {
                  ie.workspaceFiles.saveCopy?.({ hostId: u ?? `local`, path: e }).catch(We);
                }
              : void 0,
          targetPath: e,
        });
      }),
      (t[97] = E),
      (t[98] = i),
      (t[99] = Se),
      (t[100] = u),
      (t[101] = j),
      (t[102] = A),
      (t[103] = P),
      (t[104] = wt))
    : (wt = t[104]);
  let Tt;
  t[105] !== E || t[106] !== i || t[107] !== u || t[108] !== j || t[109] !== A || t[110] !== P
    ? ((Tt = () => {
        if (E)
          return Ze({
            scope: A,
            cwd: i,
            hostId: u,
            targetPath: Me({
              cwd: i,
              isWindowsHost: j === `windows`,
              itemPath: R.current,
              targetPathByDisplayPath: P,
            }),
          });
      }),
      (t[105] = E),
      (t[106] = i),
      (t[107] = u),
      (t[108] = j),
      (t[109] = A),
      (t[110] = P),
      (t[111] = Tt))
    : (Tt = t[111]);
  let Et;
  t[112] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Et = (e) => {
        R.current = Ne(e.nativeEvent, { includeDirectories: !0 });
      }),
      (t[112] = Et))
    : (Et = t[112]);
  let Dt;
  t[113] === be
    ? (Dt = t[114])
    : ((Dt = {
        backgroundColor: `var(--color-surface)`,
        color: `var(--color-text)`,
        colorScheme: be,
        width: `100%`,
      }),
      (t[113] = be),
      (t[114] = Dt));
  let Ot;
  t[115] !== q || t[116] !== g || t[117] !== _ || t[118] !== Dt
    ? ((Ot = (0, Q.jsx)(De, {
        "data-tab-preview-pin-exempt": !0,
        onClick: g,
        onContextMenu: Et,
        onDoubleClick: _,
        model: q,
        style: Dt,
      })),
      (t[115] = q),
      (t[116] = g),
      (t[117] = _),
      (t[118] = Dt),
      (t[119] = Ot))
    : (Ot = t[119]);
  let kt;
  t[120] !== wt || t[121] !== Tt || t[122] !== Ot
    ? ((kt = (0, Q.jsx)(n, { awaitBeforeOpen: !1, getItems: wt, onBeforeOpen: Tt, children: Ot })),
      (t[120] = wt),
      (t[121] = Tt),
      (t[122] = Ot),
      (t[123] = kt))
    : (kt = t[123]);
  let $;
  t[124] !== q || t[125] !== b || t[126] !== kt || t[127] !== P
    ? (($ = (0, Q.jsx)(ze, { model: q, pathDescriptions: b, targetPathByDisplayPath: P, children: kt })),
      (t[124] = q),
      (t[125] = b),
      (t[126] = kt),
      (t[127] = P),
      (t[128] = $))
    : ($ = t[128]);
  let At;
  return (
    t[129] !== Ct || t[130] !== $
      ? ((At = (0, Q.jsxs)(Q.Fragment, { children: [Ct, $] })), (t[129] = Ct), (t[130] = $), (t[131] = At))
      : (At = t[131]),
    At
  );
}
function We(e) {
  se.warning(`Workspace file save failed`, { safe: {}, sensitive: { error: e } });
}
function Ge(e) {
  let t = s(e) || c(e) ? X.default.win32 : X.default.posix;
  d.dispatchHostMessage({ type: `add-context-file`, file: { label: t.basename(e), path: e, fsPath: e } });
}
function Ke(e) {
  return e.replace(/\/$/, ``);
}
function qe(e) {
  return typeof e == `string` ? e : e.displayPath;
}
function Y(e) {
  return `data:image/svg+xml,${encodeURIComponent(e)}`;
}
function Je(e, t) {
  let n = typeof e == `string` ? { set: e } : e,
    r = [{ name: b.name, ...b.canvas, body: i(b).body }, ...(t ?? [])]
      .map(
        (e) =>
          `<symbol id="${e.name}" viewBox="${e.viewBox ?? `0 0 ${e.width ?? 0} ${e.height ?? 0}`}">${e.body}</symbol>`,
      )
      .join(``),
    a = Ye(n?.spriteSheet, r);
  return {
    ...n,
    set: n?.set ?? `complete`,
    spriteSheet: a,
    remap: {
      ...n?.remap,
      "file-tree-icon-chevron": { name: b.name, width: b.canvas.width, height: b.canvas.height },
    },
  };
}
function Ye(e, t) {
  return e == null
    ? `<svg data-icon-sprite aria-hidden="true" width="0" height="0" xmlns="http://www.w3.org/2000/svg">${t}</svg>`
    : e.replace(`</svg>`, `${t}</svg>`);
}
function Xe({ scope: e, cwd: t, fallbackOpenTargets: n, hostId: r, targetPath: i }) {
  if (i == null) return { isLoadingOpenTargets: !1, primaryTarget: null, visibleTargets: [] };
  let a = e.query.snapshot(O, { cwd: t, hostId: r, path: i }),
    o = a.getData(),
    s = o?.targets ?? n.targets,
    c = o?.availableTargets ?? n.availableTargets,
    l = o?.preferredTarget ?? n.preferredTarget,
    u = o?.mode ?? n.mode;
  return {
    isLoadingOpenTargets:
      o == null && !n.hasLoadedTargets && e.queryClient.getQueryState(a.queryKey)?.status !== `error`,
    primaryTarget: Se({ preferredTarget: l, targets: s, availableTargets: c, mode: u }),
    visibleTargets: xe({ targets: s, availableTargets: c, includeHiddenTargets: !0, mode: u }),
  };
}
function Ze({ scope: e, cwd: t, hostId: n, targetPath: r }) {
  if (r != null)
    return e.queryClient.prefetchQuery({
      ...e.query.getOptions(O, { cwd: t, hostId: n, path: r }),
      gcTime: ce.INFINITE,
    });
}
function Qe(e, t) {
  let n = [];
  for (let r of t) {
    if (!r.endsWith(`/`)) continue;
    let t = r.slice(0, -1),
      i = e.getItem(t);
    i != null && it(i) && i.isExpanded() && n.push(t);
  }
  return n;
}
function $e(e, t) {
  let n = e.getSelectedPaths();
  if (t == null) {
    for (let t of n) e.getItem(t)?.deselect();
    return;
  }
  if (n.length !== 1 || n[0] !== t) {
    for (let t of n) e.getItem(t)?.deselect();
    e.getItem(t)?.select();
  }
}
function et(e, t, n) {
  return e.getItem(t) != null && (e.scrollToPath(t, { offset: n }), !0);
}
function tt(e) {
  return (
    e.getFileTreeContainer()?.shadowRoot?.querySelector(`[data-file-tree-virtualized-scroll='true']`) ?? null
  );
}
function nt(e) {
  return tt(e)?.scrollTop ?? 0;
}
function rt(e, t) {
  let n = tt(e);
  return n != null && ((n.scrollTop = Math.max(0, t)), !0);
}
function it(e) {
  return e.isDirectory();
}
var at, X, Z, Q, ot, st, ct, lt, ut;
function dt() {
  return (dt = e(() => {
    ((at = h()),
      te(),
      z(),
      V(),
      y(),
      (X = t(T(), 1)),
      f(),
      (Z = o()),
      x(),
      C(),
      U(),
      j(),
      E(),
      Ie(),
      W(),
      G(),
      ge(),
      M(),
      S(),
      ee(),
      Ce(),
      ue(),
      ve(),
      g(),
      _(),
      m(),
      a(),
      re(),
      He(),
      (Q = u()),
      (ot = 28),
      (st = 60),
      (ct = Y(Fe)),
      (lt = Y(Le)),
      (ut = Y(Re)));
  }))();
}
export { Pe as i, dt as n, Ne as r, Ue as t };
//# sourceMappingURL=base-file-tree-37c729271893.js.map
