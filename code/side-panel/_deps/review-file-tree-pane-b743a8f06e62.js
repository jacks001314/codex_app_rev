import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  AMt as r,
  Amn as i,
  B6t as a,
  Bx as o,
  Byt as s,
  Cpn as c,
  D1 as l,
  Dmn as u,
  E1 as d,
  G4t as f,
  GG as p,
  H4t as m,
  Hx as h,
  KL as g,
  KYt as _,
  O3t as v,
  OW as ee,
  Omn as y,
  Opn as te,
  Qit as ne,
  R4t as b,
  S1 as x,
  Spn as S,
  TJt as C,
  Vx as w,
  WG as re,
  XD as T,
  ZD as ie,
  Zit as E,
  _1 as D,
  _Jt as O,
  b1 as k,
  bpn as A,
  cO as j,
  dO as M,
  dit as ae,
  e9t as oe,
  fO as se,
  fit as N,
  g1 as P,
  gMt as F,
  gRt as I,
  hMt as L,
  hmn as R,
  hz as z,
  kMt as ce,
  kW as B,
  kmn as V,
  m1 as H,
  mJt as le,
  mO as ue,
  mz as de,
  p1 as fe,
  pJt as pe,
  pO as U,
  q4t as W,
  qL as me,
  s3t as he,
  sO as ge,
  v1 as _e,
  vJt as G,
  w3t as ve,
  wJt as ye,
  xRt as be,
  yJt as xe,
  zyt as Se,
} from "./app-initial-f094ef01c64d.js";
import { Kb as Ce, Qy as we, eb as Te, qb as K } from "./app-primary-4c40d73a1074.js";
import { n as Ee, r as De, t as Oe } from "./use-target-apps-964e2197265b.js";
function ke(e, t, n) {
  let r = e == null ? null : (0, J.jsx)(`div`, { slot: U, children: e }),
    i =
      t != null && n != null
        ? (0, J.jsx)(`div`, { slot: M, children: t(n.item, n.context) })
        : null;
  return r == null && i == null ? null : (0, J.jsxs)(J.Fragment, { children: [r, i] });
}
function Ae(e, t) {
  return typeof window > `u` && t != null
    ? (0, J.jsxs)(J.Fragment, {
        children: [
          (0, J.jsx)(`template`, {
            shadowrootmode: `open`,
            dangerouslySetInnerHTML: { __html: t.shadowHtml },
          }),
          e,
        ],
      })
    : (0, J.jsx)(J.Fragment, { children: e });
}
function je(e) {
  let t = e.shadowRoot;
  return (
    t?.querySelector(`[data-file-tree-id]`) instanceof HTMLElement ||
    t?.querySelector(`[data-file-tree-id]`) instanceof SVGElement ||
    e.querySelector(`template[shadowrootmode="open"]`) instanceof HTMLTemplateElement
  );
}
function Me(e, t, n, r, i) {
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
function Ne({ header: e, id: t, model: n, preloadedData: r, renderContextMenu: i, ...a }) {
  let [o, s] = (0, q.useState)(null),
    [c, l] = (0, q.useState)(null),
    u = (0, q.useRef)(n.getComposition()),
    d = (0, q.useRef)(n);
  d.current !== n && ((d.current = n), (u.current = n.getComposition()));
  let f = i != null,
    p = (0, q.useCallback)(() => {
      s(null);
    }, []),
    m = (0, q.useCallback)((e, t) => {
      s({ context: t, item: e });
    }, []),
    h = u.current,
    g = (0, q.useMemo)(() => Me(h, e, f, p, m), [h, p, m, f, e]),
    _ = (0, q.useCallback)((e) => {
      l(e);
    }, []);
  ((0, q.useEffect)(() => {
    f || s(null);
  }, [f]),
    Pe(() => {
      n.setComposition(g);
    }, [g, n]),
    Pe(() => {
      if (c != null)
        return (
          r != null && je(c)
            ? n.hydrate({ fileTreeContainer: c })
            : n.render({ fileTreeContainer: c }),
          () => {
            (n.unmount(), n.setComposition(h));
          }
        );
    }, [h, c, n, r]));
  let v = Ae(ke(e, i, o), r),
    ee = t ?? r?.id,
    y = {
      "--trees-item-height": `${String(n.getItemHeight())}px`,
      "--trees-density-override": n.getDensityFactor(),
      ...a.style,
    };
  return (0, J.jsx)(se, {
    ...a,
    id: ee,
    ref: _,
    style: y,
    suppressHydrationWarning: r != null,
    children: v,
  });
}
var q,
  J,
  Pe,
  Fe = e(() => {
    (ue(),
      (q = t(i(), 1)),
      (J = R()),
      (Pe = typeof window > `u` ? q.useEffect : q.useLayoutEffect));
  });
function Ie(e) {
  let [t] = (0, Le.useState)(() => new ge(e)),
    n = (0, Le.useRef)({ timeout: null, model: t });
  return (
    (0, Le.useEffect)(() => {
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
var Le,
  Re = e(() => {
    (j(), (Le = t(i(), 1)));
  }),
  ze = e(() => {
    (Fe(), Re());
  });
function Be({
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
    l = [];
  return (
    i != null &&
      l.push({
        id: `save-as`,
        message: A({
          id: `markdown.fileReference.saveAs`,
          defaultMessage: `Save as…`,
          description: `Context menu action to save a file tree item to a user-selected location`,
        }),
        onSelect: () => {
          i(o);
        },
      }),
    n != null &&
      l.push({
        id: `copy-path`,
        message: A({
          id: `codex.review.fileTree.contextMenu.copyPath`,
          defaultMessage: `Copy path`,
          description: `Context menu action to copy the path of a file tree item`,
        }),
        onSelect: () => {
          n(o);
        },
      }),
    t != null &&
      l.push({
        id: `add-to-chat`,
        message: A({
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
            message: Ue(c),
            tooltipMessage: A({
              id: `threadSidePanel.workspaceBrowser.openIn.loading`,
              defaultMessage: `Loading available apps…`,
              description: `Tooltip shown when the file tree is still loading app options for opening a file`,
            }),
            enabled: !1,
          },
          { id: `open-in-separator`, type: `separator` },
          ...l,
        ]
      : a == null
        ? l
        : [
            ...k({
              idPrefix: Ve(c),
              messages: He(c),
              onOpenInTarget: (e, t) => {
                r(e, t, o);
              },
              primaryTarget: a,
              visibleTargets: s,
            }),
            { id: `open-in-separator`, type: `separator` },
            ...l,
          ]
  );
}
function Ve(e) {
  switch (e) {
    case `review`:
      return `review-file-tree-open`;
    case `workspace`:
      return `workspace-directory-tree-open`;
  }
}
function He(e) {
  switch (e) {
    case `review`:
      return {
        openInTarget: A({
          id: `codex.review.fileTree.contextMenu.openInTarget`,
          defaultMessage: `Open in {target}`,
          description: `Context menu action to open a review file in the preferred app`,
        }),
        openIn: Ue(e),
        openInTargetSubmenu: A({
          id: `codex.review.fileTree.contextMenu.openWithTarget`,
          defaultMessage: `{target}`,
          description: `Context menu action to open a review file in a specific app`,
        }),
      };
    case `workspace`:
      return {
        openInTarget: A({
          id: `threadSidePanel.workspaceBrowser.openInTarget`,
          defaultMessage: `Open in {target}`,
          description: `Context menu action to open a workspace browser file in the preferred app`,
        }),
        openIn: Ue(e),
        openInTargetSubmenu: A({
          id: `threadSidePanel.workspaceBrowser.openInTargetSubmenu`,
          defaultMessage: `{target}`,
          description: `Context menu action to open a workspace browser file in a specific app`,
        }),
      };
  }
}
function Ue(e) {
  switch (e) {
    case `review`:
      return A({
        id: `codex.review.fileTree.contextMenu.openWith`,
        defaultMessage: `Open with`,
        description: `Context menu submenu label for choosing an app to open a review file`,
      });
    case `workspace`:
      return A({
        id: `threadSidePanel.workspaceBrowser.openIn`,
        defaultMessage: `Open in…`,
        description: `Context menu submenu label for choosing an app to open a workspace browser file`,
      });
  }
}
function We({ cwd: e, isWindowsHost: t, itemPath: n, targetPathByDisplayPath: r }) {
  return n == null ? null : (r.get(n) ?? b(e ?? ``, n, t));
}
var Ge = e(() => {
  (S(), x(), m());
});
function Ke(e) {
  for (let t of e.composedPath()) {
    if (!(t instanceof Element) || t.getAttribute(`data-item-type`) !== `file`) continue;
    let e = t.getAttribute(`data-item-path`);
    if (e) return e;
  }
  return null;
}
var qe = e(() => {}),
  Je,
  Ye = e(() => {
    Je = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 6.41797C10.367 6.41815 10.6649 6.71599 10.665 7.08301V9.33496H12.916C13.2832 9.33496 13.5809 9.63287 13.5811 10C13.5809 10.3671 13.2832 10.665 12.916 10.665H10.665V12.916C10.665 13.2832 10.3671 13.5809 10 13.5811C9.63284 13.5809 9.33496 13.2832 9.33496 12.916V10.665H7.08301C6.71596 10.6649 6.41815 10.367 6.41797 10C6.41813 9.63295 6.71595 9.33509 7.08301 9.33496H9.33496V7.08301C9.33513 6.71596 9.63295 6.4181 10 6.41797Z" fill="currentColor" />
  <path d="M12.666 2.66797C13.3549 2.66797 13.9121 2.66735 14.3623 2.7041C14.8202 2.74151 15.2268 2.82084 15.6035 3.0127C16.1989 3.31608 16.6829 3.80115 16.9863 4.39649C17.1781 4.77304 17.2575 5.17902 17.2949 5.63672C17.3317 6.08689 17.3311 6.64406 17.3311 7.33301V12.666C17.3311 13.3549 17.3317 13.9121 17.2949 14.3623C17.2575 14.8203 17.1782 15.2268 16.9863 15.6035C16.6829 16.1988 16.1988 16.6829 15.6035 16.9863C15.2268 17.1783 14.8203 17.2575 14.3623 17.2949C13.9121 17.3317 13.3549 17.3311 12.666 17.3311H7.33301C6.64403 17.3311 6.08691 17.3317 5.63672 17.2949C5.17899 17.2575 4.77306 17.1781 4.39649 16.9863C3.80114 16.6829 3.31609 16.1989 3.0127 15.6035C2.82085 15.2269 2.74151 14.8202 2.7041 14.3623C2.66736 13.9122 2.66797 13.3548 2.66797 12.666V7.33301C2.66797 6.64406 2.66732 6.08689 2.7041 5.63672C2.74152 5.17904 2.82093 4.77302 3.0127 4.39649C3.31613 3.80104 3.80103 3.31611 4.39649 3.0127C4.77304 2.82092 5.17902 2.74152 5.63672 2.7041C6.08691 2.66732 6.64403 2.66797 7.33301 2.66797H12.666ZM7.33301 3.99805C6.6221 3.99805 6.12859 3.99894 5.74512 4.03027C5.36955 4.06098 5.15798 4.11775 5 4.19824C4.65484 4.37414 4.37416 4.65485 4.19824 5C4.11775 5.15797 4.06098 5.36959 4.03027 5.74512C3.99894 6.12858 3.99805 6.62214 3.99805 7.33301V12.666C3.99805 13.3767 3.99898 13.8705 4.03027 14.2539C4.06094 14.6292 4.11788 14.8411 4.19824 14.999C4.37412 15.3442 4.65487 15.6258 5 15.8018C5.15795 15.8822 5.36972 15.939 5.74512 15.9697C6.12859 16.0011 6.6221 16.001 7.33301 16.001H12.666C13.3767 16.001 13.8705 16.001 14.2539 15.9697C14.6292 15.9391 14.8411 15.8821 14.999 15.8018C15.3443 15.6258 15.6258 15.3443 15.8018 14.999C15.8821 14.8411 15.9391 14.6292 15.9697 14.2539C16.001 13.8705 16.001 13.3767 16.001 12.666V7.33301C16.001 6.62213 16.0011 6.12858 15.9697 5.74512C15.939 5.36976 15.8822 5.15795 15.8018 5C15.6258 4.65488 15.3442 4.37411 14.999 4.19824C14.8411 4.11787 14.6292 4.06094 14.2539 4.03027C13.8705 3.99898 13.3767 3.99805 12.666 3.99805H7.33301Z" fill="currentColor" />
</svg>
`;
  }),
  Xe,
  Ze = e(() => {
    Xe = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.916 9.33496C13.2833 9.33496 13.5811 9.63273 13.5811 10C13.5811 10.3673 13.2833 10.665 12.916 10.665H7.08301C6.71585 10.6649 6.41797 10.3672 6.41797 10C6.41797 9.63281 6.71585 9.33509 7.08301 9.33496H12.916Z" fill="currentColor" />
  <path d="M12.666 2.66797C13.3549 2.66797 13.9121 2.66735 14.3623 2.7041C14.8202 2.74151 15.2268 2.82084 15.6035 3.0127C16.1989 3.31608 16.6829 3.80115 16.9863 4.39649C17.1781 4.77304 17.2575 5.17902 17.2949 5.63672C17.3317 6.08689 17.3311 6.64406 17.3311 7.33301V12.666C17.3311 13.3549 17.3317 13.9121 17.2949 14.3623C17.2575 14.8203 17.1782 15.2268 16.9863 15.6035C16.6829 16.1988 16.1988 16.6829 15.6035 16.9863C15.2268 17.1783 14.8203 17.2575 14.3623 17.2949C13.9121 17.3317 13.3549 17.3311 12.666 17.3311H7.33301C6.64403 17.3311 6.08691 17.3317 5.63672 17.2949C5.17899 17.2575 4.77306 17.1781 4.39649 16.9863C3.80114 16.6829 3.31609 16.1989 3.0127 15.6035C2.82085 15.2269 2.74151 14.8202 2.7041 14.3623C2.66736 13.9122 2.66797 13.3548 2.66797 12.666V7.33301C2.66797 6.64406 2.66732 6.08689 2.7041 5.63672C2.74152 5.17904 2.82093 4.77302 3.0127 4.39649C3.31613 3.80104 3.80103 3.31611 4.39649 3.0127C4.77304 2.82092 5.17902 2.74152 5.63672 2.7041C6.08691 2.66732 6.64403 2.66797 7.33301 2.66797H12.666ZM7.33301 3.99805C6.6221 3.99805 6.12859 3.99894 5.74512 4.03027C5.36955 4.06098 5.15798 4.11775 5 4.19824C4.65484 4.37414 4.37416 4.65485 4.19824 5C4.11775 5.15797 4.06098 5.36959 4.03027 5.74512C3.99894 6.12858 3.99805 6.62214 3.99805 7.33301V12.666C3.99805 13.3767 3.99898 13.8705 4.03027 14.2539C4.06094 14.6292 4.11788 14.8411 4.19824 14.999C4.37412 15.3442 4.65487 15.6258 5 15.8018C5.15795 15.8822 5.36972 15.939 5.74512 15.9697C6.12859 16.0011 6.6221 16.001 7.33301 16.001H12.666C13.3767 16.001 13.8705 16.001 14.2539 15.9697C14.6292 15.9391 14.8411 15.8821 14.999 15.8018C15.3443 15.6258 15.6258 15.3443 15.8018 14.999C15.8821 14.8411 15.9391 14.6292 15.9697 14.2539C16.001 13.8705 16.001 13.3767 16.001 12.666V7.33301C16.001 6.62213 16.0011 6.12858 15.9697 5.74512C15.939 5.36976 15.8822 5.15795 15.8018 5C15.6258 4.65488 15.3442 4.37411 14.999 4.19824C14.8411 4.11787 14.6292 4.06094 14.2539 4.03027C13.8705 3.99898 13.3767 3.99805 12.666 3.99805H7.33301Z" fill="currentColor" />
</svg>
`;
  }),
  Qe,
  $e = e(() => {
    Qe = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 8.33301C10.9205 8.33301 11.667 9.07953 11.667 10C11.667 10.9205 10.9205 11.667 10 11.667C9.07961 11.6669 8.334 10.9204 8.33399 10C8.33399 9.07958 9.0796 8.3331 10 8.33301Z" fill="currentColor" />
  <path d="M12.667 2.66797C13.3558 2.66797 13.9132 2.66734 14.3633 2.7041C14.8211 2.74154 15.2279 2.82079 15.6045 3.0127C16.1998 3.31614 16.6839 3.8011 16.9873 4.39649C17.1791 4.77306 17.2585 5.17899 17.2959 5.63672C17.3327 6.08689 17.332 6.64406 17.332 7.33301V12.666C17.332 13.3548 17.3326 13.9122 17.2959 14.3623C17.2585 14.8201 17.1791 15.2269 16.9873 15.6035C16.684 16.1987 16.1996 16.6829 15.6045 16.9863C15.2279 17.1782 14.8211 17.2575 14.3633 17.2949C13.9132 17.3317 13.3558 17.3311 12.667 17.3311H7.33399C6.64513 17.3311 6.08786 17.3317 5.6377 17.2949C5.17997 17.2575 4.77403 17.1781 4.39746 16.9863C3.80197 16.6829 3.31712 16.199 3.01367 15.6035C2.82172 15.2268 2.7425 14.8203 2.70508 14.3623C2.66833 13.9121 2.66895 13.3549 2.66895 12.666V7.33301C2.66895 6.64406 2.6683 6.08689 2.70508 5.63672C2.7425 5.17907 2.82191 4.77301 3.01367 4.39649C3.31713 3.80115 3.80208 3.31606 4.39746 3.0127C4.77393 2.82108 5.18011 2.7415 5.6377 2.7041C6.08785 2.66736 6.64515 2.66797 7.33399 2.66797H12.667ZM7.33399 3.99805C6.62326 3.99805 6.12954 3.99898 5.74609 4.03027C5.37079 4.06094 5.15893 4.11787 5.00098 4.19824C4.65588 4.37409 4.37516 4.65496 4.19922 5C4.11874 5.15796 4.06196 5.36963 4.03125 5.74512C3.99992 6.12858 3.99902 6.62213 3.99902 7.33301V12.666C3.99902 13.3767 3.99996 13.8705 4.03125 14.2539C4.06193 14.6295 4.11878 14.841 4.19922 14.999C4.37515 15.3443 4.6557 15.6258 5.00098 15.8018C5.15894 15.8821 5.37074 15.9391 5.74609 15.9697C6.12955 16.001 6.62323 16.001 7.33399 16.001H12.667C13.3776 16.001 13.8715 16.001 14.2549 15.9697C14.6299 15.939 14.8421 15.8821 15 15.8018C15.345 15.6258 15.6269 15.3441 15.8027 14.999C15.883 14.8411 15.9401 14.6289 15.9707 14.2539C16.002 13.8705 16.002 13.3767 16.002 12.666V7.33301C16.002 6.62213 16.002 6.12858 15.9707 5.74512C15.94 5.36972 15.8832 5.15795 15.8027 5C15.6269 4.65483 15.3451 4.37417 15 4.19824C14.8421 4.11782 14.6302 4.06097 14.2549 4.03027C13.8715 3.99897 13.3776 3.99805 12.667 3.99805H7.33399Z" fill="currentColor" />
</svg>
`;
  });
function et(e) {
  let t = (0, gt.c)(111),
    {
      cwd: r,
      contextMenuEnabled: i,
      decorationIcons: a,
      flattenEmptyDirectories: o,
      gitStatus: c,
      hostId: l,
      icons: u,
      initialExpandedPaths: d,
      initialScrollTop: f,
      itemHeight: p,
      onClick: m,
      onDoubleClick: g,
      onExpandedPathsChange: _,
      onSelectionChange: v,
      onStateChange: ee,
      paths: y,
      revealSelectedPath: te,
      revealSelectedPathScrollOffset: x,
      renderRowDecoration: S,
      resetKey: C,
      selectedPath: T,
      surface: ie,
      unsafeCSS: E,
    } = e,
    D = i === void 0 || i,
    O = o !== void 0 && o,
    k = f === void 0 ? 0 : f,
    A = p === void 0 ? vt : p,
    j = te !== void 0 && te,
    M = x === void 0 ? `nearest` : x,
    ae = ie === void 0 ? `main` : ie,
    oe = n(I),
    se = h(w()),
    { platform: N } = s(),
    P = xe(`add-context-file`),
    F;
  t[0] !== r || t[1] !== l
    ? ((F = { cwd: r, hostId: l }), (t[0] = r), (t[1] = l), (t[2] = F))
    : (F = t[2]);
  let L = De(F),
    R;
  t[3] === y ? (R = t[4]) : ((R = y.map(nt)), (t[3] = y), (t[4] = R));
  let z = R,
    ce;
  if (t[5] !== r || t[6] !== y || t[7] !== N) {
    ce = new Map();
    for (let e of y)
      typeof e != `string` && ce.set(e.displayPath, b(r ?? ``, e.path, N === `windows`));
    ((t[5] = r), (t[6] = y), (t[7] = N), (t[8] = ce));
  } else ce = t[8];
  let B = ce,
    V;
  t[9] !== a || t[10] !== u ? ((V = at(u, a)), (t[9] = a), (t[10] = u), (t[11] = V)) : (V = t[11]);
  let H = V,
    le = ae === `dropdown` ? `var(--color-surface-elevated-secondary)` : `var(--color-surface)`,
    ue = (0, Y.useRef)(null),
    pe;
  t[12] === d ? (pe = t[13]) : ((pe = Array.from(d ?? [])), (t[12] = d), (t[13] = pe));
  let U = (0, Y.useRef)(pe),
    W = (0, Y.useRef)(null),
    me = (0, Y.useRef)(null),
    he = (0, Y.useRef)(k),
    ge = (0, Y.useRef)(T ?? null),
    _e;
  t[14] === ee
    ? (_e = t[15])
    : ((_e = () => {
        ee?.({ expandedPaths: U.current, scrollTop: he.current, selectedPath: ge.current });
      }),
      (t[14] = ee),
      (t[15] = _e));
  let G = ne(_e),
    ve;
  t[16] !== _ || t[17] !== G
    ? ((ve = (e) => {
        ((U.current = e), _?.(e), G());
      }),
      (t[16] = _),
      (t[17] = G),
      (t[18] = ve))
    : (ve = t[18]);
  let ye = ne(ve),
    be;
  t[19] !== v || t[20] !== G
    ? ((be = (e) => {
        ((ge.current = e[0] ?? null), v?.(e), G());
      }),
      (t[19] = v),
      (t[20] = G),
      (t[21] = be))
    : (be = t[21]);
  let Se = ne(be),
    Ce;
  t[22] === T ? (Ce = t[23]) : ((Ce = T == null ? void 0 : [T]), (t[22] = T), (t[23] = Ce));
  let we = `
      :host {
        --trees-bg-override: ${le};
        --trees-bg-muted-override: var(--color-background-primary-ghost-hover);
        --trees-border-color-override: var(--color-border);
        --trees-fg-override: var(--color-text);
        --trees-font-size-override: 13px;
        --trees-focus-ring-color-override: var(--color-ring);
        --trees-git-added-color-override: var(--color-codex-git-added);
        --trees-git-deleted-color-override: var(--color-codex-git-deleted);
        --trees-git-ignored-color-override: var(--color-codex-git-ignored);
        --trees-git-lane-width-override: 20px;
        --trees-git-modified-color-override: var(--color-codex-git-modified);
        --trees-git-renamed-color-override: var(--color-codex-git-modified);
        --trees-git-untracked-color-override: var(--color-codex-git-added);
        --trees-item-padding-x-override: 6px;
        --trees-item-margin-x-override: 0px;
        --trees-level-gap-override: 0px;
        --trees-padding-inline-override: 0px;
        --trees-scrollbar-gutter-override: 0px;
        --trees-scrollbar-gutter-measured: 0px;
        --trees-selected-bg-override: var(--color-background-primary-soft-active);
        --trees-selected-fg-override: var(--color-text-emphasis);
        --trees-item-row-gap-override: 10px;
      }

      [data-file-tree-sticky-overlay-content='true'],
      [data-file-tree-sticky-row='true'] {
        background-color: ${le};
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
        color: inherit;
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
        --base-file-tree-git-status-icon: url("${bt}");
      }

      [data-item-git-status='deleted'] > [data-item-section='git'] > span::before {
        --base-file-tree-git-status-icon: url("${xt}");
      }

      [data-item-git-status='modified'] > [data-item-section='git'] > span::before {
        --base-file-tree-git-status-icon: url("${St}");
      }

      /* Filter out @pierre/truncate's subpixel one-line overflow false positives. */
      @container measure (height <= calc(1lh + 1px)) {
        [data-truncate-marker] {
          opacity: 0;
        }
      }

      ${E ?? ``}
    `,
    Te;
  t[24] !== H ||
  t[25] !== O ||
  t[26] !== c ||
  t[27] !== Se ||
  t[28] !== d ||
  t[29] !== A ||
  t[30] !== S ||
  t[31] !== Ce ||
  t[32] !== we ||
  t[33] !== z
    ? ((Te = {
        fileTreeSearchMode: `hide-non-matches`,
        flattenEmptyDirectories: O,
        gitStatus: c,
        icons: H,
        initialExpandedPaths: d,
        initialSelectedPaths: Ce,
        itemHeight: A,
        onSelectionChange: Se,
        paths: z,
        renderRowDecoration: S,
        search: !1,
        stickyFolders: !0,
        unsafeCSS: we,
      }),
      (t[24] = H),
      (t[25] = O),
      (t[26] = c),
      (t[27] = Se),
      (t[28] = d),
      (t[29] = A),
      (t[30] = S),
      (t[31] = Ce),
      (t[32] = we),
      (t[33] = z),
      (t[34] = Te))
    : (Te = t[34]);
  let { model: K } = Ie(Te),
    Ee,
    ke;
  (t[35] !== d || t[36] !== K || t[37] !== C || t[38] !== z
    ? ((Ee = () => {
        let e = Array.from(d ?? []),
          t = W.current;
        if (
          t?.model === K &&
          t.resetKey === C &&
          rt(t.treePaths, z) &&
          rt(t.initialExpandedPaths, e)
        )
          return;
        let n = t?.model !== K || t?.resetKey !== C;
        ((W.current = { initialExpandedPaths: e, model: K, resetKey: C, treePaths: Array.from(z) }),
          (U.current = e),
          K.resetPaths(z, { initialExpandedPaths: d }));
        let r = me.current?.path;
        (n || (r != null && K.getItem(r) == null)) && (me.current = null);
      }),
      (ke = [d, K, C, z]),
      (t[35] = d),
      (t[36] = K),
      (t[37] = C),
      (t[38] = z),
      (t[39] = Ee),
      (t[40] = ke))
    : ((Ee = t[39]), (ke = t[40])),
    (0, Y.useEffect)(Ee, ke));
  let Ae, je;
  (t[41] !== k || t[42] !== K || t[43] !== j || t[44] !== T
    ? ((Ae = () => {
        let e = null,
          t = 0,
          n = () => {
            ((e = null),
              !mt(K, k) && (t >= yt || ((t += 1), (e = window.requestAnimationFrame(n)))));
          };
        return (
          k > 0 && !(j && T != null) ? ((he.current = k), n()) : (he.current = 0),
          () => {
            e != null && window.cancelAnimationFrame(e);
          }
        );
      }),
      (je = [k, K, j, T]),
      (t[41] = k),
      (t[42] = K),
      (t[43] = j),
      (t[44] = T),
      (t[45] = Ae),
      (t[46] = je))
    : ((Ae = t[45]), (je = t[46])),
    (0, Y.useEffect)(Ae, je));
  let Me;
  t[47] !== K || t[48] !== j || t[49] !== M || t[50] !== T
    ? ((Me = () => {
        if (((ge.current = T ?? null), ut(K, T), !j || T == null)) {
          me.current = null;
          return;
        }
        (me.current?.path === T && me.current.scrollOffset === M) ||
          (dt(K, T, M) && (me.current = { path: T, scrollOffset: M }));
      }),
      (t[47] = K),
      (t[48] = j),
      (t[49] = M),
      (t[50] = T),
      (t[51] = Me))
    : (Me = t[51]);
  let q;
  (t[52] !== K || t[53] !== C || t[54] !== j || t[55] !== M || t[56] !== T || t[57] !== z
    ? ((q = [K, j, M, C, T, z]),
      (t[52] = K),
      (t[53] = C),
      (t[54] = j),
      (t[55] = M),
      (t[56] = T),
      (t[57] = z),
      (t[58] = q))
    : (q = t[58]),
    (0, Y.useEffect)(Me, q));
  let J, Pe;
  (t[59] !== c || t[60] !== K
    ? ((J = () => {
        K.setGitStatus(c);
      }),
      (Pe = [c, K]),
      (t[59] = c),
      (t[60] = K),
      (t[61] = J),
      (t[62] = Pe))
    : ((J = t[61]), (Pe = t[62])),
    (0, Y.useEffect)(J, Pe));
  let Fe, Le;
  (t[63] !== H || t[64] !== K
    ? ((Fe = () => {
        K.setIcons(H);
      }),
      (Le = [H, K]),
      (t[63] = H),
      (t[64] = K),
      (t[65] = Fe),
      (t[66] = Le))
    : ((Fe = t[65]), (Le = t[66])),
    (0, Y.useEffect)(Fe, Le));
  let Re, ze;
  (t[67] !== ye || t[68] !== K || t[69] !== z
    ? ((Re = () =>
        K.subscribe(() => {
          ((he.current = pt(K)), ye(lt(K, z)));
        })),
      (ze = [ye, K, z]),
      (t[67] = ye),
      (t[68] = K),
      (t[69] = z),
      (t[70] = Re),
      (t[71] = ze))
    : ((Re = t[70]), (ze = t[71])),
    (0, Y.useEffect)(Re, ze));
  let Ve, He;
  (t[72] !== K || t[73] !== G
    ? ((Ve = () => {
        let e = null,
          t = 0,
          n = null,
          r = () => {
            e = null;
            let i = ft(K);
            if (i != null) {
              let e = () => {
                ((he.current = i.scrollTop), G());
              };
              (i.addEventListener(`scroll`, e, { passive: !0 }),
                (n = () => {
                  i.removeEventListener(`scroll`, e);
                }));
              return;
            }
            t >= yt || ((t += 1), (e = window.requestAnimationFrame(r)));
          };
        return (
          r(),
          () => {
            (e != null && window.cancelAnimationFrame(e), n?.());
          }
        );
      }),
      (He = [K, G]),
      (t[72] = K),
      (t[73] = G),
      (t[74] = Ve),
      (t[75] = He))
    : ((Ve = t[74]), (He = t[75])),
    (0, Y.useEffect)(Ve, He));
  let Ue;
  t[76] !== D || t[77] !== r || t[78] !== l
    ? ((Ue = D ? (0, _t.jsx)(Oe, { cwd: r, hostId: l }) : null),
      (t[76] = D),
      (t[77] = r),
      (t[78] = l),
      (t[79] = Ue))
    : (Ue = t[79]);
  let Ge;
  t[80] !== P ||
  t[81] !== D ||
  t[82] !== r ||
  t[83] !== L ||
  t[84] !== l ||
  t[85] !== N ||
  t[86] !== oe ||
  t[87] !== B
    ? ((Ge = () => {
        if (!D) return [];
        let e = We({
          cwd: r,
          isWindowsHost: N === `windows`,
          itemPath: ue.current,
          targetPathByDisplayPath: B,
        });
        return Be({
          ...st({ scope: oe, cwd: r, fallbackOpenTargets: L, hostId: l, targetPath: e }),
          onAddToChat:
            l == null
              ? void 0
              : (e) => {
                  P.mutateAsync({ hostId: l, path: e });
                },
          onCopyPath: fe,
          onOpenInTarget: (e, t, n) => {
            L.open(e, { appPath: t, persistPreferred: !1, path: n });
          },
          onSaveAs:
            de.workspaceFiles.saveCopy == null
              ? void 0
              : (e) => {
                  de.workspaceFiles.saveCopy?.({ hostId: l ?? `local`, path: e }).catch(tt);
                },
          targetPath: e,
        });
      }),
      (t[80] = P),
      (t[81] = D),
      (t[82] = r),
      (t[83] = L),
      (t[84] = l),
      (t[85] = N),
      (t[86] = oe),
      (t[87] = B),
      (t[88] = Ge))
    : (Ge = t[88]);
  let qe;
  t[89] !== D || t[90] !== r || t[91] !== l || t[92] !== N || t[93] !== oe || t[94] !== B
    ? ((qe = () => {
        if (D)
          return ct({
            scope: oe,
            cwd: r,
            hostId: l,
            targetPath: We({
              cwd: r,
              isWindowsHost: N === `windows`,
              itemPath: ue.current,
              targetPathByDisplayPath: B,
            }),
          });
      }),
      (t[89] = D),
      (t[90] = r),
      (t[91] = l),
      (t[92] = N),
      (t[93] = oe),
      (t[94] = B),
      (t[95] = qe))
    : (qe = t[95]);
  let Je;
  t[96] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Je = (e) => {
        ue.current = Ke(e.nativeEvent);
      }),
      (t[96] = Je))
    : (Je = t[96]);
  let Ye;
  t[97] === se
    ? (Ye = t[98])
    : ((Ye = {
        backgroundColor: `var(--color-surface)`,
        color: `var(--color-text)`,
        colorScheme: se,
        width: `100%`,
      }),
      (t[97] = se),
      (t[98] = Ye));
  let Xe;
  t[99] !== K || t[100] !== m || t[101] !== g || t[102] !== Ye
    ? ((Xe = (0, _t.jsx)(Ne, {
        "data-tab-preview-pin-exempt": !0,
        onClick: m,
        onContextMenu: Je,
        onDoubleClick: g,
        model: K,
        style: Ye,
      })),
      (t[99] = K),
      (t[100] = m),
      (t[101] = g),
      (t[102] = Ye),
      (t[103] = Xe))
    : (Xe = t[103]);
  let Ze;
  t[104] !== Ge || t[105] !== qe || t[106] !== Xe
    ? ((Ze = (0, _t.jsx)(re, {
        awaitBeforeOpen: !1,
        getItems: Ge,
        onBeforeOpen: qe,
        children: Xe,
      })),
      (t[104] = Ge),
      (t[105] = qe),
      (t[106] = Xe),
      (t[107] = Ze))
    : (Ze = t[107]);
  let Qe;
  return (
    t[108] !== Ue || t[109] !== Ze
      ? ((Qe = (0, _t.jsxs)(_t.Fragment, { children: [Ue, Ze] })),
        (t[108] = Ue),
        (t[109] = Ze),
        (t[110] = Qe))
      : (Qe = t[110]),
    Qe
  );
}
function tt(e) {
  y.warning(`Workspace file save failed`, { safe: {}, sensitive: { error: e } });
}
function nt(e) {
  return typeof e == `string` ? e : e.displayPath;
}
function rt(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
function it(e) {
  return `data:image/svg+xml,${encodeURIComponent(e)}`;
}
function at(e, t) {
  if (t == null || t.length === 0) return e;
  let n = t
      .map(
        (e) =>
          `<symbol id="${e.name}" viewBox="${e.viewBox ?? `0 0 ${e.width ?? 0} ${e.height ?? 0}`}">${e.body}</symbol>`,
      )
      .join(``),
    r = ot(typeof e == `string` ? void 0 : e?.spriteSheet, n);
  return e == null
    ? { set: `complete`, spriteSheet: r }
    : typeof e == `string`
      ? { set: e, spriteSheet: r }
      : { ...e, spriteSheet: r };
}
function ot(e, t) {
  return e == null
    ? `<svg data-icon-sprite aria-hidden="true" width="0" height="0" xmlns="http://www.w3.org/2000/svg">${t}</svg>`
    : e.replace(`</svg>`, `${t}</svg>`);
}
function st({ scope: e, cwd: t, fallbackOpenTargets: n, hostId: r, targetPath: i }) {
  if (i == null) return { isLoadingOpenTargets: !1, primaryTarget: null, visibleTargets: [] };
  let a = e.query.snapshot(l, { cwd: t, hostId: r, path: i }),
    o = a.getData(),
    s = o?.targets ?? n.targets,
    c = o?.availableTargets ?? n.availableTargets,
    u = o?.preferredTarget ?? n.preferredTarget,
    d = o?.mode ?? n.mode;
  return {
    isLoadingOpenTargets:
      o == null &&
      !n.hasLoadedTargets &&
      e.queryClient.getQueryState(a.queryKey)?.status !== `error`,
    primaryTarget: D({ preferredTarget: u, targets: s, availableTargets: c, mode: d }),
    visibleTargets: P({ targets: s, availableTargets: c, includeHiddenTargets: !0, mode: d }),
  };
}
function ct({ scope: e, cwd: t, hostId: n, targetPath: r }) {
  if (r != null)
    return e.queryClient.prefetchQuery({
      ...e.query.getOptions(l, { cwd: t, hostId: n, path: r }),
      gcTime: ye.INFINITE,
    });
}
function lt(e, t) {
  let n = [];
  for (let r of t) {
    if (!r.endsWith(`/`)) continue;
    let t = r.slice(0, -1),
      i = e.getItem(t);
    i == null || !ht(i) || !i.isExpanded() || n.push(t);
  }
  return n;
}
function ut(e, t) {
  let n = e.getSelectedPaths();
  if (t == null) {
    for (let t of n) e.getItem(t)?.deselect();
    return;
  }
  if (!(n.length === 1 && n[0] === t)) {
    for (let t of n) e.getItem(t)?.deselect();
    e.getItem(t)?.select();
  }
}
function dt(e, t, n) {
  return e.getItem(t) == null ? !1 : (e.scrollToPath(t, { offset: n }), !0);
}
function ft(e) {
  return (
    e
      .getFileTreeContainer()
      ?.shadowRoot?.querySelector(`[data-file-tree-virtualized-scroll='true']`) ?? null
  );
}
function pt(e) {
  return ft(e)?.scrollTop ?? 0;
}
function mt(e, t) {
  let n = ft(e);
  return n == null ? !1 : ((n.scrollTop = Math.max(0, t)), !0);
}
function ht(e) {
  return e.isDirectory();
}
var gt,
  Y,
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct = e(() => {
    ((gt = V()),
      ze(),
      v(),
      (Y = t(i(), 1)),
      p(),
      Ge(),
      d(),
      qe(),
      Se(),
      Ye(),
      Ze(),
      $e(),
      _e(),
      Ee(),
      z(),
      be(),
      _(),
      o(),
      H(),
      u(),
      m(),
      C(),
      E(),
      O(),
      (_t = R()),
      (vt = 28),
      (yt = 60),
      (bt = it(Je)),
      (xt = it(Xe)),
      (St = it(Qe)));
  });
function wt(e) {
  let t = (0, Tt.c)(23),
    { autoFocus: n, inputId: r, inputRef: i, onQueryChange: a, searchQuery: o } = e,
    s = r === void 0 ? `file-tree-search` : r,
    l = te(),
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Et.jsx)(c, {
        id: `codex.fileTreeSearch.label`,
        defaultMessage: `Filter files`,
        description: `Label for a file tree filter input`,
      })),
      (t[0] = u))
    : (u = t[0]);
  let d;
  t[1] === s
    ? (d = t[2])
    : ((d = (0, Et.jsx)(`label`, { className: `sr-only`, htmlFor: s, children: u })),
      (t[1] = s),
      (t[2] = d));
  let f;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Et.jsx)(L, {
        className: `ms-2 shrink-0 text-tertiary`,
        "aria-hidden": !1,
        asset: K,
      })),
      (t[3] = f))
    : (f = t[3]);
  let p;
  t[4] === a ? (p = t[5]) : ((p = (e) => a(e.target.value)), (t[4] = a), (t[5] = p));
  let m;
  t[6] === l
    ? (m = t[7])
    : ((m = l.formatMessage({
        id: `codex.fileTreeSearch.placeholder`,
        defaultMessage: `Filter files…`,
        description: `Placeholder text for a file tree filter input`,
      })),
      (t[6] = l),
      (t[7] = m));
  let h;
  t[8] !== n || t[9] !== s || t[10] !== i || t[11] !== o || t[12] !== p || t[13] !== m
    ? ((h = (0, Et.jsx)(`input`, {
        autoFocus: n,
        id: s,
        ref: i,
        className: `w-full appearance-none border-none bg-transparent py-0 ps-0 pe-1.5 text-default ring-0 outline-none select-text placeholder:text-tertiary focus:border-none focus:ring-0 focus:outline-none [&::placeholder]:select-none`,
        type: `text`,
        value: o,
        onChange: p,
        placeholder: m,
      })),
      (t[8] = n),
      (t[9] = s),
      (t[10] = i),
      (t[11] = o),
      (t[12] = p),
      (t[13] = m),
      (t[14] = h))
    : (h = t[14]);
  let g;
  t[15] !== l || t[16] !== a || t[17] !== o.length
    ? ((g =
        o.length > 0
          ? (0, Et.jsx)(ce, {
              "aria-label": l.formatMessage({
                id: `codex.fileTreeSearch.clear`,
                defaultMessage: `Clear file filter`,
                description: `Button label to clear a file tree filter input`,
              }),
              className: `text-tertiary hover:text-default`,
              color: `ghost`,
              size: `icon`,
              onClick: () => a(``),
              children: (0, Et.jsx)(ae, { className: `icon-2xs` }),
            })
          : null),
      (t[15] = l),
      (t[16] = a),
      (t[17] = o.length),
      (t[18] = g))
    : (g = t[18]);
  let _;
  return (
    t[19] !== d || t[20] !== h || t[21] !== g
      ? ((_ = (0, Et.jsxs)(`div`, {
          className: `relative flex h-token-button-composer w-full items-center gap-1.5 rounded-lg border border-default bg-primary-soft-alpha text-base leading-[18px]`,
          children: [d, f, h, g],
        })),
        (t[19] = d),
        (t[20] = h),
        (t[21] = g),
        (t[22] = _))
      : (_ = t[22]),
    _
  );
}
var Tt,
  Et,
  Dt = e(() => {
    ((Tt = V()), Ce(), S(), r(), F(), N(), (Et = R()));
  }),
  Ot,
  kt,
  At,
  jt = e(() => {
    ((Ot = (e, t, n) => {
      let r = e instanceof RegExp ? kt(e, n) : e,
        i = t instanceof RegExp ? kt(t, n) : t,
        a = r !== null && i != null && At(r, i, n);
      return (
        a && {
          start: a[0],
          end: a[1],
          pre: n.slice(0, a[0]),
          body: n.slice(a[0] + r.length, a[1]),
          post: n.slice(a[1] + i.length),
        }
      );
    }),
      (kt = (e, t) => {
        let n = t.match(e);
        return n ? n[0] : null;
      }),
      (At = (e, t, n) => {
        let r,
          i,
          a,
          o,
          s,
          c = n.indexOf(e),
          l = n.indexOf(t, c + 1),
          u = c;
        if (c >= 0 && l > 0) {
          if (e === t) return [c, l];
          for (r = [], a = n.length; u >= 0 && !s;) {
            if (u === c) (r.push(u), (c = n.indexOf(e, u + 1)));
            else if (r.length === 1) {
              let e = r.pop();
              e !== void 0 && (s = [e, l]);
            } else
              ((i = r.pop()),
                i !== void 0 && i < a && ((a = i), (o = l)),
                (l = n.indexOf(t, u + 1)));
            u = c < l && c >= 0 ? c : l;
          }
          r.length && o !== void 0 && (s = [a, o]);
        }
        return s;
      }));
  });
function Mt(e) {
  return isNaN(e) ? e.charCodeAt(0) : parseInt(e, 10);
}
function Nt(e) {
  return e.replace(Qt, Ht).replace($t, Ut).replace(en, Wt).replace(tn, Gt).replace(nn, Kt);
}
function Pt(e) {
  return e.replace(qt, `\\`).replace(Jt, `{`).replace(Yt, `}`).replace(Xt, `,`).replace(Zt, `.`);
}
function Ft(e) {
  if (!e) return [``];
  let t = [],
    n = Ot(`{`, `}`, e);
  if (!n) return e.split(`,`);
  let { pre: r, body: i, post: a } = n,
    o = r.split(`,`);
  o[o.length - 1] += `{` + i + `}`;
  let s = Ft(a);
  return (a.length && ((o[o.length - 1] += s.shift()), o.push.apply(o, s)), t.push.apply(t, o), t);
}
function It(e, t = {}) {
  if (!e) return [];
  let { max: n = rn } = t;
  return (e.slice(0, 2) === `{}` && (e = `\\{\\}` + e.slice(2)), Vt(Nt(e), n, !0).map(Pt));
}
function Lt(e) {
  return `{` + e + `}`;
}
function Rt(e) {
  return /^-?0\d/.test(e);
}
function zt(e, t) {
  return e <= t;
}
function Bt(e, t) {
  return e >= t;
}
function Vt(e, t, n) {
  let r = [];
  for (;;) {
    let i = Ot(`{`, `}`, e);
    if (!i) return [e];
    let a = i.pre;
    if (/\$$/.test(i.pre)) {
      let e = i.post.length ? Vt(i.post, t, !1) : [``];
      for (let n = 0; n < e.length && n < t; n++) {
        let t = a + `{` + i.body + `}` + e[n];
        r.push(t);
      }
      return r;
    }
    let o = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(i.body),
      s = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(i.body),
      c = o || s,
      l = i.body.indexOf(`,`) >= 0;
    if (!c && !l) {
      if (i.post.match(/,(?!,).*\}/)) {
        ((e = i.pre + `{` + i.body + Wt + i.post), (n = !0));
        continue;
      }
      return [e];
    }
    let u = i.post.length ? Vt(i.post, t, !1) : [``],
      d;
    if (c) d = i.body.split(/\.\./);
    else if (
      ((d = Ft(i.body)),
      d.length === 1 && d[0] !== void 0 && ((d = Vt(d[0], t, !1).map(Lt)), d.length === 1))
    )
      return u.map((e) => i.pre + d[0] + e);
    let f;
    if (c && d[0] !== void 0 && d[1] !== void 0) {
      let e = Mt(d[0]),
        n = Mt(d[1]),
        r = Math.max(d[0].length, d[1].length),
        i = d.length === 3 && d[2] !== void 0 ? Math.max(Math.abs(Mt(d[2])), 1) : 1,
        a = zt;
      n < e && ((i *= -1), (a = Bt));
      let o = d.some(Rt);
      f = [];
      for (let c = e; a(c, n) && f.length < t; c += i) {
        let e;
        if (s) ((e = String.fromCharCode(c)), e === `\\` && (e = ``));
        else if (((e = String(c)), o)) {
          let t = r - e.length;
          if (t > 0) {
            let n = Array(t + 1).join(`0`);
            e = c < 0 ? `-` + n + e.slice(1) : n + e;
          }
        }
        f.push(e);
      }
    } else {
      f = [];
      for (let e = 0; e < d.length; e++) f.push.apply(f, Vt(d[e], t, !1));
    }
    for (let e = 0; e < f.length; e++)
      for (let i = 0; i < u.length && r.length < t; i++) {
        let t = a + f[e] + u[i];
        (!n || c || t) && r.push(t);
      }
    return r;
  }
}
var Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  an = e(() => {
    (jt(),
      (Ht = `\0SLASH` + Math.random() + `\0`),
      (Ut = `\0OPEN` + Math.random() + `\0`),
      (Wt = `\0CLOSE` + Math.random() + `\0`),
      (Gt = `\0COMMA` + Math.random() + `\0`),
      (Kt = `\0PERIOD` + Math.random() + `\0`),
      (qt = new RegExp(Ht, `g`)),
      (Jt = new RegExp(Ut, `g`)),
      (Yt = new RegExp(Wt, `g`)),
      (Xt = new RegExp(Gt, `g`)),
      (Zt = new RegExp(Kt, `g`)),
      (Qt = /\\\\/g),
      ($t = /\\{/g),
      (en = /\\}/g),
      (tn = /\\,/g),
      (nn = /\\\./g),
      (rn = 1e5));
  }),
  on,
  sn,
  cn = e(() => {
    ((on = 1024 * 64),
      (sn = (e) => {
        if (typeof e != `string`) throw TypeError(`invalid pattern`);
        if (e.length > on) throw TypeError(`pattern is too long`);
      }));
  }),
  ln,
  un,
  dn,
  fn,
  pn,
  mn = e(() => {
    ((ln = {
      "[:alnum:]": [`\\p{L}\\p{Nl}\\p{Nd}`, !0],
      "[:alpha:]": [`\\p{L}\\p{Nl}`, !0],
      "[:ascii:]": [`\\x00-\\x7f`, !1],
      "[:blank:]": [`\\p{Zs}\\t`, !0],
      "[:cntrl:]": [`\\p{Cc}`, !0],
      "[:digit:]": [`\\p{Nd}`, !0],
      "[:graph:]": [`\\p{Z}\\p{C}`, !0, !0],
      "[:lower:]": [`\\p{Ll}`, !0],
      "[:print:]": [`\\p{C}`, !0],
      "[:punct:]": [`\\p{P}`, !0],
      "[:space:]": [`\\p{Z}\\t\\r\\n\\v\\f`, !0],
      "[:upper:]": [`\\p{Lu}`, !0],
      "[:word:]": [`\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}`, !0],
      "[:xdigit:]": [`A-Fa-f0-9`, !1],
    }),
      (un = (e) => e.replace(/[[\]\\-]/g, `\\$&`)),
      (dn = (e) => e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, `\\$&`)),
      (fn = (e) => e.join(``)),
      (pn = (e, t) => {
        let n = t;
        if (e.charAt(n) !== `[`) throw Error(`not in a brace expression`);
        let r = [],
          i = [],
          a = n + 1,
          o = !1,
          s = !1,
          c = !1,
          l = !1,
          u = n,
          d = ``;
        WHILE: for (; a < e.length;) {
          let t = e.charAt(a);
          if ((t === `!` || t === `^`) && a === n + 1) {
            ((l = !0), a++);
            continue;
          }
          if (t === `]` && o && !c) {
            u = a + 1;
            break;
          }
          if (((o = !0), t === `\\` && !c)) {
            ((c = !0), a++);
            continue;
          }
          if (t === `[` && !c) {
            for (let [t, [o, c, l]] of Object.entries(ln))
              if (e.startsWith(t, a)) {
                if (d) return [`$.`, !1, e.length - n, !0];
                ((a += t.length), l ? i.push(o) : r.push(o), (s ||= c));
                continue WHILE;
              }
          }
          if (((c = !1), d)) {
            (t > d ? r.push(un(d) + `-` + un(t)) : t === d && r.push(un(t)), (d = ``), a++);
            continue;
          }
          if (e.startsWith(`-]`, a + 1)) {
            (r.push(un(t + `-`)), (a += 2));
            continue;
          }
          if (e.startsWith(`-`, a + 1)) {
            ((d = t), (a += 2));
            continue;
          }
          (r.push(un(t)), a++);
        }
        if (u < a) return [``, !1, 0, !1];
        if (!r.length && !i.length) return [`$.`, !1, e.length - n, !0];
        if (i.length === 0 && r.length === 1 && /^\\?.$/.test(r[0]) && !l) {
          let e = r[0].length === 2 ? r[0].slice(-1) : r[0];
          return [dn(e), !1, u - n, !1];
        }
        let f = `[` + (l ? `^` : ``) + fn(r) + `]`,
          p = `[` + (l ? `` : `^`) + fn(i) + `]`;
        return [r.length && i.length ? `(` + f + `|` + p + `)` : r.length ? f : p, s, u - n, !0];
      }));
  }),
  hn,
  gn = e(() => {
    hn = (e, { windowsPathsNoEscape: t = !1, magicalBraces: n = !0 } = {}) =>
      n
        ? t
          ? e.replace(/\[([^/\\])\]/g, `$1`)
          : e.replace(/((?!\\).|^)\[([^/\\])\]/g, `$1$2`).replace(/\\([^/])/g, `$1`)
        : t
          ? e.replace(/\[([^/\\{}])\]/g, `$1`)
          : e.replace(/((?!\\).|^)\[([^/\\{}])\]/g, `$1$2`).replace(/\\([^/{}])/g, `$1`);
  }),
  X,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn = e(() => {
    (mn(),
      gn(),
      (_n = new Set([`!`, `?`, `+`, `*`, `@`])),
      (vn = (e) => _n.has(e)),
      (yn = (e) => vn(e.type)),
      (bn = new Map([
        [`!`, [`@`]],
        [`?`, [`?`, `@`]],
        [`@`, [`@`]],
        [`*`, [`*`, `+`, `?`, `@`]],
        [`+`, [`+`, `@`]],
      ])),
      (xn = new Map([
        [`!`, [`?`]],
        [`@`, [`?`]],
        [`+`, [`?`, `*`]],
      ])),
      (Sn = new Map([
        [`!`, [`?`, `@`]],
        [`?`, [`?`, `@`]],
        [`@`, [`?`, `@`]],
        [`*`, [`*`, `+`, `?`, `@`]],
        [`+`, [`+`, `@`, `?`, `*`]],
      ])),
      (Cn = new Map([
        [`!`, new Map([[`!`, `@`]])],
        [
          `?`,
          new Map([
            [`*`, `*`],
            [`+`, `*`],
          ]),
        ],
        [
          `@`,
          new Map([
            [`!`, `!`],
            [`?`, `?`],
            [`@`, `@`],
            [`*`, `*`],
            [`+`, `+`],
          ]),
        ],
        [
          `+`,
          new Map([
            [`?`, `*`],
            [`*`, `*`],
          ]),
        ],
      ])),
      (wn = `(?!(?:^|/)\\.\\.?(?:$|/))`),
      (Tn = `(?!\\.)`),
      (En = new Set([`[`, `.`])),
      (Dn = new Set([`..`, `.`])),
      (On = new Set(`().*{}+?[]^$\\!`)),
      (kn = (e) => e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, `\\$&`)),
      (An = `[^/]`),
      (jn = `[^/]*?`),
      (Mn = `[^/]+?`),
      (Nn = 0),
      (Pn = class {
        type;
        #e;
        #t;
        #n = !1;
        #r = [];
        #i;
        #a;
        #o;
        #s = !1;
        #c;
        #l;
        #u = !1;
        id = ++Nn;
        get depth() {
          return (this.#i?.depth ?? -1) + 1;
        }
        [Symbol.for(`nodejs.util.inspect.custom`)]() {
          return {
            "@@type": `AST`,
            id: this.id,
            type: this.type,
            root: this.#e.id,
            parent: this.#i?.id,
            depth: this.depth,
            partsLength: this.#r.length,
            parts: this.#r,
          };
        }
        constructor(e, t, n = {}) {
          ((this.type = e),
            e && (this.#t = !0),
            (this.#i = t),
            (this.#e = this.#i ? this.#i.#e : this),
            (this.#c = this.#e === this ? n : this.#e.#c),
            (this.#o = this.#e === this ? [] : this.#e.#o),
            e === `!` && !this.#e.#s && this.#o.push(this),
            (this.#a = this.#i ? this.#i.#r.length : 0));
        }
        get hasMagic() {
          if (this.#t !== void 0) return this.#t;
          for (let e of this.#r)
            if (typeof e != `string` && (e.type || e.hasMagic)) return (this.#t = !0);
          return this.#t;
        }
        toString() {
          return this.#l === void 0
            ? this.type
              ? (this.#l = this.type + `(` + this.#r.map((e) => String(e)).join(`|`) + `)`)
              : (this.#l = this.#r.map((e) => String(e)).join(``))
            : this.#l;
        }
        #d() {
          if (this !== this.#e) throw Error(`should only call on root`);
          if (this.#s) return this;
          (this.toString(), (this.#s = !0));
          let e;
          for (; (e = this.#o.pop());) {
            if (e.type !== `!`) continue;
            let t = e,
              n = t.#i;
            for (; n;) {
              for (let r = t.#a + 1; !n.type && r < n.#r.length; r++)
                for (let t of e.#r) {
                  if (typeof t == `string`) throw Error(`string part in extglob AST??`);
                  t.copyIn(n.#r[r]);
                }
              ((t = n), (n = t.#i));
            }
          }
          return this;
        }
        push(...e) {
          for (let t of e)
            if (t !== ``) {
              if (typeof t != `string` && !(t instanceof X && t.#i === this))
                throw Error(`invalid part: ` + t);
              this.#r.push(t);
            }
        }
        toJSON() {
          let e =
            this.type === null
              ? this.#r.slice().map((e) => (typeof e == `string` ? e : e.toJSON()))
              : [this.type, ...this.#r.map((e) => e.toJSON())];
          return (
            this.isStart() && !this.type && e.unshift([]),
            this.isEnd() &&
              (this === this.#e || (this.#e.#s && this.#i?.type === `!`)) &&
              e.push({}),
            e
          );
        }
        isStart() {
          if (this.#e === this) return !0;
          if (!this.#i?.isStart()) return !1;
          if (this.#a === 0) return !0;
          let e = this.#i;
          for (let t = 0; t < this.#a; t++) {
            let n = e.#r[t];
            if (!(n instanceof X && n.type === `!`)) return !1;
          }
          return !0;
        }
        isEnd() {
          if (this.#e === this || this.#i?.type === `!`) return !0;
          if (!this.#i?.isEnd()) return !1;
          if (!this.type) return this.#i?.isEnd();
          let e = this.#i ? this.#i.#r.length : 0;
          return this.#a === e - 1;
        }
        copyIn(e) {
          typeof e == `string` ? this.push(e) : this.push(e.clone(this));
        }
        clone(e) {
          let t = new X(this.type, e);
          for (let e of this.#r) t.copyIn(e);
          return t;
        }
        static #f(e, t, n, r, i) {
          let a = r.maxExtglobRecursion ?? 2,
            o = !1,
            s = !1,
            c = -1,
            l = !1;
          if (t.type === null) {
            let u = n,
              d = ``;
            for (; u < e.length;) {
              let n = e.charAt(u++);
              if (o || n === `\\`) {
                ((o = !o), (d += n));
                continue;
              }
              if (s) {
                (u === c + 1
                  ? (n === `^` || n === `!`) && (l = !0)
                  : n === `]` && !(u === c + 2 && l) && (s = !1),
                  (d += n));
                continue;
              } else if (n === `[`) {
                ((s = !0), (c = u), (l = !1), (d += n));
                continue;
              }
              if (!r.noext && vn(n) && e.charAt(u) === `(` && i <= a) {
                (t.push(d), (d = ``));
                let a = new X(n, t);
                ((u = X.#f(e, a, u, r, i + 1)), t.push(a));
                continue;
              }
              d += n;
            }
            return (t.push(d), u);
          }
          let u = n + 1,
            d = new X(null, t),
            f = [],
            p = ``;
          for (; u < e.length;) {
            let n = e.charAt(u++);
            if (o || n === `\\`) {
              ((o = !o), (p += n));
              continue;
            }
            if (s) {
              (u === c + 1
                ? (n === `^` || n === `!`) && (l = !0)
                : n === `]` && !(u === c + 2 && l) && (s = !1),
                (p += n));
              continue;
            } else if (n === `[`) {
              ((s = !0), (c = u), (l = !1), (p += n));
              continue;
            }
            if (!r.noext && vn(n) && e.charAt(u) === `(` && (i <= a || (t && t.#h(n)))) {
              let a = t && t.#h(n) ? 0 : 1;
              (d.push(p), (p = ``));
              let o = new X(n, d);
              (d.push(o), (u = X.#f(e, o, u, r, i + a)));
              continue;
            }
            if (n === `|`) {
              (d.push(p), (p = ``), f.push(d), (d = new X(null, t)));
              continue;
            }
            if (n === `)`)
              return (
                p === `` && t.#r.length === 0 && (t.#u = !0),
                d.push(p),
                (p = ``),
                t.push(...f, d),
                u
              );
            p += n;
          }
          return ((t.type = null), (t.#t = void 0), (t.#r = [e.substring(n - 1)]), u);
        }
        #p(e) {
          return this.#m(e, xn);
        }
        #m(e, t = bn) {
          if (
            !e ||
            typeof e != `object` ||
            e.type !== null ||
            e.#r.length !== 1 ||
            this.type === null
          )
            return !1;
          let n = e.#r[0];
          return !n || typeof n != `object` || n.type === null ? !1 : this.#h(n.type, t);
        }
        #h(e, t = Sn) {
          return !!t.get(this.type)?.includes(e);
        }
        #g(e, t) {
          let n = e.#r[0],
            r = new X(null, n, this.options);
          (r.#r.push(``), n.push(r), this.#_(e, t));
        }
        #_(e, t) {
          let n = e.#r[0];
          this.#r.splice(t, 1, ...n.#r);
          for (let e of n.#r) typeof e == `object` && (e.#i = this);
          this.#l = void 0;
        }
        #v(e) {
          return !!Cn.get(this.type)?.has(e);
        }
        #y(e) {
          if (
            !e ||
            typeof e != `object` ||
            e.type !== null ||
            e.#r.length !== 1 ||
            this.type === null ||
            this.#r.length !== 1
          )
            return !1;
          let t = e.#r[0];
          return !t || typeof t != `object` || t.type === null ? !1 : this.#v(t.type);
        }
        #b(e) {
          let t = Cn.get(this.type),
            n = e.#r[0],
            r = t?.get(n.type);
          if (!r) return !1;
          this.#r = n.#r;
          for (let e of this.#r) typeof e == `object` && (e.#i = this);
          ((this.type = r), (this.#l = void 0), (this.#u = !1));
        }
        static fromGlob(e, t = {}) {
          let n = new X(null, void 0, t);
          return (X.#f(e, n, 0, t, 0), n);
        }
        toMMPattern() {
          if (this !== this.#e) return this.#e.toMMPattern();
          let e = this.toString(),
            [t, n, r, i] = this.toRegExpSource();
          if (
            !(
              r ||
              this.#t ||
              (this.#c.nocase && !this.#c.nocaseMagicOnly && e.toUpperCase() !== e.toLowerCase())
            )
          )
            return n;
          let a = (this.#c.nocase ? `i` : ``) + (i ? `u` : ``);
          return Object.assign(RegExp(`^${t}$`, a), { _src: t, _glob: e });
        }
        get options() {
          return this.#c;
        }
        toRegExpSource(e) {
          let t = e ?? !!this.#c.dot;
          if ((this.#e === this && (this.#x(), this.#d()), !yn(this))) {
            let n = this.isStart() && this.isEnd() && !this.#r.some((e) => typeof e != `string`),
              r = this.#r
                .map((t) => {
                  let [r, i, a, o] =
                    typeof t == `string` ? X.#C(t, this.#t, n) : t.toRegExpSource(e);
                  return ((this.#t = this.#t || a), (this.#n = this.#n || o), r);
                })
                .join(``),
              i = ``;
            if (
              this.isStart() &&
              typeof this.#r[0] == `string` &&
              !(this.#r.length === 1 && Dn.has(this.#r[0]))
            ) {
              let n = En,
                a =
                  (t && n.has(r.charAt(0))) ||
                  (r.startsWith(`\\.`) && n.has(r.charAt(2))) ||
                  (r.startsWith(`\\.\\.`) && n.has(r.charAt(4))),
                o = !t && !e && n.has(r.charAt(0));
              i = a ? wn : o ? Tn : ``;
            }
            let a = ``;
            return (
              this.isEnd() && this.#e.#s && this.#i?.type === `!` && (a = `(?:$|\\/)`),
              [i + r + a, hn(r), (this.#t = !!this.#t), this.#n]
            );
          }
          let n = this.type === `*` || this.type === `+`,
            r = this.type === `!` ? `(?:(?!(?:` : `(?:`,
            i = this.#S(t);
          if (this.isStart() && this.isEnd() && !i && this.type !== `!`) {
            let e = this.toString(),
              t = this;
            return (
              (t.#r = [e]), (t.type = null), (t.#t = void 0), [e, hn(this.toString()), !1, !1]
            );
          }
          let a = !n || e || t ? `` : this.#S(!0);
          (a === i && (a = ``), a && (i = `(?:${i})(?:${a})*?`));
          let o = ``;
          if (this.type === `!` && this.#u) o = (this.isStart() && !t ? Tn : ``) + Mn;
          else {
            let n =
              this.type === `!`
                ? `))` + (this.isStart() && !t && !e ? Tn : ``) + `[^/]*?)`
                : this.type === `@`
                  ? `)`
                  : this.type === `?`
                    ? `)?`
                    : this.type === `+` && a
                      ? `)`
                      : this.type === `*` && a
                        ? `)?`
                        : `)${this.type}`;
            o = r + i + n;
          }
          return [o, hn(i), (this.#t = !!this.#t), this.#n];
        }
        #x() {
          if (yn(this)) {
            let e = 0,
              t = !1;
            do {
              t = !0;
              for (let e = 0; e < this.#r.length; e++) {
                let n = this.#r[e];
                typeof n == `object` &&
                  (n.#x(),
                  this.#m(n)
                    ? ((t = !1), this.#_(n, e))
                    : this.#p(n)
                      ? ((t = !1), this.#g(n, e))
                      : this.#y(n) && ((t = !1), this.#b(n)));
              }
            } while (!t && ++e < 10);
          } else for (let e of this.#r) typeof e == `object` && e.#x();
          this.#l = void 0;
        }
        #S(e) {
          return this.#r
            .map((t) => {
              if (typeof t == `string`) throw Error(`string type in extglob ast??`);
              let [n, r, i, a] = t.toRegExpSource(e);
              return ((this.#n = this.#n || a), n);
            })
            .filter((e) => !(this.isStart() && this.isEnd()) || !!e)
            .join(`|`);
        }
        static #C(e, t, n = !1) {
          let r = !1,
            i = ``,
            a = !1,
            o = !1;
          for (let s = 0; s < e.length; s++) {
            let c = e.charAt(s);
            if (r) {
              ((r = !1), (i += (On.has(c) ? `\\` : ``) + c));
              continue;
            }
            if (c === `*`) {
              if (o) continue;
              ((o = !0), (i += n && /^[*]+$/.test(e) ? Mn : jn), (t = !0));
              continue;
            } else o = !1;
            if (c === `\\`) {
              s === e.length - 1 ? (i += `\\\\`) : (r = !0);
              continue;
            }
            if (c === `[`) {
              let [n, r, o, c] = pn(e, s);
              if (o) {
                ((i += n), (a ||= r), (s += o - 1), (t ||= c));
                continue;
              }
            }
            if (c === `?`) {
              ((i += An), (t = !0));
              continue;
            }
            i += kn(c);
          }
          return [i, hn(e), !!t, a];
        }
      }),
      (X = Pn));
  }),
  In,
  Ln = e(() => {
    In = (e, { windowsPathsNoEscape: t = !1, magicalBraces: n = !1 } = {}) =>
      n
        ? t
          ? e.replace(/[?*()[\]{}]/g, `[$&]`)
          : e.replace(/[?*()[\]\\{}]/g, `\\$&`)
        : t
          ? e.replace(/[?*()[\]]/g, `[$&]`)
          : e.replace(/[?*()[\]\\]/g, `\\$&`);
  }),
  Z,
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  Wn,
  Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr,
  nr,
  rr,
  ir,
  ar,
  or,
  Q,
  sr,
  cr,
  lr,
  ur,
  $,
  dr,
  fr,
  pr,
  mr,
  hr,
  gr,
  _r,
  vr = e(() => {
    (an(),
      cn(),
      Fn(),
      Ln(),
      gn(),
      (Z = (e, t, n = {}) => (
        sn(t),
        !n.nocomment && t.charAt(0) === `#` ? !1 : new _r(t, n).match(e)
      )),
      (Rn = /^\*+([^+@!?*[(]*)$/),
      (zn = (e) => (t) => !t.startsWith(`.`) && t.endsWith(e)),
      (Bn = (e) => (t) => t.endsWith(e)),
      (Vn = (e) => (
        (e = e.toLowerCase()),
        (t) => !t.startsWith(`.`) && t.toLowerCase().endsWith(e)
      )),
      (Hn = (e) => ((e = e.toLowerCase()), (t) => t.toLowerCase().endsWith(e))),
      (Un = /^\*+\.\*+$/),
      (Wn = (e) => !e.startsWith(`.`) && e.includes(`.`)),
      (Gn = (e) => e !== `.` && e !== `..` && e.includes(`.`)),
      (Kn = /^\.\*+$/),
      (qn = (e) => e !== `.` && e !== `..` && e.startsWith(`.`)),
      (Jn = /^\*+$/),
      (Yn = (e) => e.length !== 0 && !e.startsWith(`.`)),
      (Xn = (e) => e.length !== 0 && e !== `.` && e !== `..`),
      (Zn = /^\?+([^+@!?*[(]*)?$/),
      (Qn = ([e, t = ``]) => {
        let n = nr([e]);
        return t ? ((t = t.toLowerCase()), (e) => n(e) && e.toLowerCase().endsWith(t)) : n;
      }),
      ($n = ([e, t = ``]) => {
        let n = rr([e]);
        return t ? ((t = t.toLowerCase()), (e) => n(e) && e.toLowerCase().endsWith(t)) : n;
      }),
      (er = ([e, t = ``]) => {
        let n = rr([e]);
        return t ? (e) => n(e) && e.endsWith(t) : n;
      }),
      (tr = ([e, t = ``]) => {
        let n = nr([e]);
        return t ? (e) => n(e) && e.endsWith(t) : n;
      }),
      (nr = ([e]) => {
        let t = e.length;
        return (e) => e.length === t && !e.startsWith(`.`);
      }),
      (rr = ([e]) => {
        let t = e.length;
        return (e) => e.length === t && e !== `.` && e !== `..`;
      }),
      (ir =
        typeof process == `object` && process
          ? {}.__MINIMATCH_TESTING_PLATFORM__ || process.platform
          : `posix`),
      (ar = { win32: { sep: `\\` }, posix: { sep: `/` } }),
      (or = ir === `win32` ? ar.win32.sep : ar.posix.sep),
      (Z.sep = or),
      (Q = Symbol(`globstar **`)),
      (Z.GLOBSTAR = Q),
      (sr = `[^/]*?`),
      (cr = `(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?`),
      (lr = `(?:(?!(?:\\/|^)\\.).)*?`),
      (ur =
        (e, t = {}) =>
        (n) =>
          Z(n, e, t)),
      (Z.filter = ur),
      ($ = (e, t = {}) => Object.assign({}, e, t)),
      (dr = (e) => {
        if (!e || typeof e != `object` || !Object.keys(e).length) return Z;
        let t = Z;
        return Object.assign((n, r, i = {}) => t(n, r, $(e, i)), {
          Minimatch: class extends t.Minimatch {
            constructor(t, n = {}) {
              super(t, $(e, n));
            }
            static defaults(n) {
              return t.defaults($(e, n)).Minimatch;
            }
          },
          AST: class extends t.AST {
            constructor(t, n, r = {}) {
              super(t, n, $(e, r));
            }
            static fromGlob(n, r = {}) {
              return t.AST.fromGlob(n, $(e, r));
            }
          },
          unescape: (n, r = {}) => t.unescape(n, $(e, r)),
          escape: (n, r = {}) => t.escape(n, $(e, r)),
          filter: (n, r = {}) => t.filter(n, $(e, r)),
          defaults: (n) => t.defaults($(e, n)),
          makeRe: (n, r = {}) => t.makeRe(n, $(e, r)),
          braceExpand: (n, r = {}) => t.braceExpand(n, $(e, r)),
          match: (n, r, i = {}) => t.match(n, r, $(e, i)),
          sep: t.sep,
          GLOBSTAR: Q,
        });
      }),
      (Z.defaults = dr),
      (fr = (e, t = {}) => (
        sn(e),
        t.nobrace || !/\{(?:(?!\{).)*\}/.test(e) ? [e] : It(e, { max: t.braceExpandMax })
      )),
      (Z.braceExpand = fr),
      (pr = (e, t = {}) => new _r(e, t).makeRe()),
      (Z.makeRe = pr),
      (mr = (e, t, n = {}) => {
        let r = new _r(t, n);
        return ((e = e.filter((e) => r.match(e))), r.options.nonull && !e.length && e.push(t), e);
      }),
      (Z.match = mr),
      (hr = /[?*]|[+@!]\(.*?\)|\[|\]/),
      (gr = (e) => e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, `\\$&`)),
      (_r = class {
        options;
        set;
        pattern;
        windowsPathsNoEscape;
        nonegate;
        negate;
        comment;
        empty;
        preserveMultipleSlashes;
        partial;
        globSet;
        globParts;
        nocase;
        isWindows;
        platform;
        windowsNoMagicRoot;
        maxGlobstarRecursion;
        regexp;
        constructor(e, t = {}) {
          (sn(e),
            (t ||= {}),
            (this.options = t),
            (this.maxGlobstarRecursion = t.maxGlobstarRecursion ?? 200),
            (this.pattern = e),
            (this.platform = t.platform || ir),
            (this.isWindows = this.platform === `win32`),
            (this.windowsPathsNoEscape = !!t.windowsPathsNoEscape || t.allowWindowsEscape === !1),
            this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, `/`)),
            (this.preserveMultipleSlashes = !!t.preserveMultipleSlashes),
            (this.regexp = null),
            (this.negate = !1),
            (this.nonegate = !!t.nonegate),
            (this.comment = !1),
            (this.empty = !1),
            (this.partial = !!t.partial),
            (this.nocase = !!this.options.nocase),
            (this.windowsNoMagicRoot =
              t.windowsNoMagicRoot === void 0
                ? !!(this.isWindows && this.nocase)
                : t.windowsNoMagicRoot),
            (this.globSet = []),
            (this.globParts = []),
            (this.set = []),
            this.make());
        }
        hasMagic() {
          if (this.options.magicalBraces && this.set.length > 1) return !0;
          for (let e of this.set) for (let t of e) if (typeof t != `string`) return !0;
          return !1;
        }
        debug(...e) {}
        make() {
          let e = this.pattern,
            t = this.options;
          if (!t.nocomment && e.charAt(0) === `#`) {
            this.comment = !0;
            return;
          }
          if (!e) {
            this.empty = !0;
            return;
          }
          (this.parseNegate(),
            (this.globSet = [...new Set(this.braceExpand())]),
            t.debug && (this.debug = (...e) => console.error(...e)),
            this.debug(this.pattern, this.globSet));
          let n = this.globSet.map((e) => this.slashSplit(e));
          ((this.globParts = this.preprocess(n)), this.debug(this.pattern, this.globParts));
          let r = this.globParts.map((e, t, n) => {
            if (this.isWindows && this.windowsNoMagicRoot) {
              let t =
                  e[0] === `` && e[1] === `` && (e[2] === `?` || !hr.test(e[2])) && !hr.test(e[3]),
                n = /^[a-z]:/i.test(e[0]);
              if (t) return [...e.slice(0, 4), ...e.slice(4).map((e) => this.parse(e))];
              if (n) return [e[0], ...e.slice(1).map((e) => this.parse(e))];
            }
            return e.map((e) => this.parse(e));
          });
          if (
            (this.debug(this.pattern, r),
            (this.set = r.filter((e) => e.indexOf(!1) === -1)),
            this.isWindows)
          )
            for (let e = 0; e < this.set.length; e++) {
              let t = this.set[e];
              t[0] === `` &&
                t[1] === `` &&
                this.globParts[e][2] === `?` &&
                typeof t[3] == `string` &&
                /^[a-z]:$/i.test(t[3]) &&
                (t[2] = `?`);
            }
          this.debug(this.pattern, this.set);
        }
        preprocess(e) {
          if (this.options.noglobstar)
            for (let t of e) for (let e = 0; e < t.length; e++) t[e] === `**` && (t[e] = `*`);
          let { optimizationLevel: t = 1 } = this.options;
          return (
            t >= 2
              ? ((e = this.firstPhasePreProcess(e)), (e = this.secondPhasePreProcess(e)))
              : (e = t >= 1 ? this.levelOneOptimize(e) : this.adjascentGlobstarOptimize(e)),
            e
          );
        }
        adjascentGlobstarOptimize(e) {
          return e.map((e) => {
            let t = -1;
            for (; (t = e.indexOf(`**`, t + 1)) !== -1;) {
              let n = t;
              for (; e[n + 1] === `**`;) n++;
              n !== t && e.splice(t, n - t);
            }
            return e;
          });
        }
        levelOneOptimize(e) {
          return e.map(
            (e) => (
              (e = e.reduce((e, t) => {
                let n = e[e.length - 1];
                return t === `**` && n === `**`
                  ? e
                  : t === `..` && n && n !== `..` && n !== `.` && n !== `**`
                    ? (e.pop(), e)
                    : (e.push(t), e);
              }, [])),
              e.length === 0 ? [``] : e
            ),
          );
        }
        levelTwoFileOptimize(e) {
          Array.isArray(e) || (e = this.slashSplit(e));
          let t = !1;
          do {
            if (((t = !1), !this.preserveMultipleSlashes)) {
              for (let n = 1; n < e.length - 1; n++) {
                let r = e[n];
                (n === 1 && r === `` && e[0] === ``) ||
                  ((r === `.` || r === ``) && ((t = !0), e.splice(n, 1), n--));
              }
              e[0] === `.` &&
                e.length === 2 &&
                (e[1] === `.` || e[1] === ``) &&
                ((t = !0), e.pop());
            }
            let n = 0;
            for (; (n = e.indexOf(`..`, n + 1)) !== -1;) {
              let r = e[n - 1];
              r &&
                r !== `.` &&
                r !== `..` &&
                r !== `**` &&
                !(this.isWindows && /^[a-z]:$/i.test(r)) &&
                ((t = !0), e.splice(n - 1, 2), (n -= 2));
            }
          } while (t);
          return e.length === 0 ? [``] : e;
        }
        firstPhasePreProcess(e) {
          let t = !1;
          do {
            t = !1;
            for (let n of e) {
              let r = -1;
              for (; (r = n.indexOf(`**`, r + 1)) !== -1;) {
                let i = r;
                for (; n[i + 1] === `**`;) i++;
                i > r && n.splice(r + 1, i - r);
                let a = n[r + 1],
                  o = n[r + 2],
                  s = n[r + 3];
                if (a !== `..` || !o || o === `.` || o === `..` || !s || s === `.` || s === `..`)
                  continue;
                ((t = !0), n.splice(r, 1));
                let c = n.slice(0);
                ((c[r] = `**`), e.push(c), r--);
              }
              if (!this.preserveMultipleSlashes) {
                for (let e = 1; e < n.length - 1; e++) {
                  let r = n[e];
                  (e === 1 && r === `` && n[0] === ``) ||
                    ((r === `.` || r === ``) && ((t = !0), n.splice(e, 1), e--));
                }
                n[0] === `.` &&
                  n.length === 2 &&
                  (n[1] === `.` || n[1] === ``) &&
                  ((t = !0), n.pop());
              }
              let i = 0;
              for (; (i = n.indexOf(`..`, i + 1)) !== -1;) {
                let e = n[i - 1];
                if (e && e !== `.` && e !== `..` && e !== `**`) {
                  t = !0;
                  let e = i === 1 && n[i + 1] === `**` ? [`.`] : [];
                  (n.splice(i - 1, 2, ...e), n.length === 0 && n.push(``), (i -= 2));
                }
              }
            }
          } while (t);
          return e;
        }
        secondPhasePreProcess(e) {
          for (let t = 0; t < e.length - 1; t++)
            for (let n = t + 1; n < e.length; n++) {
              let r = this.partsMatch(e[t], e[n], !this.preserveMultipleSlashes);
              if (r) {
                ((e[t] = []), (e[n] = r));
                break;
              }
            }
          return e.filter((e) => e.length);
        }
        partsMatch(e, t, n = !1) {
          let r = 0,
            i = 0,
            a = [],
            o = ``;
          for (; r < e.length && i < t.length;)
            if (e[r] === t[i]) (a.push(o === `b` ? t[i] : e[r]), r++, i++);
            else if (n && e[r] === `**` && t[i] === e[r + 1]) (a.push(e[r]), r++);
            else if (n && t[i] === `**` && e[r] === t[i + 1]) (a.push(t[i]), i++);
            else if (
              e[r] === `*` &&
              t[i] &&
              (this.options.dot || !t[i].startsWith(`.`)) &&
              t[i] !== `**`
            ) {
              if (o === `b`) return !1;
              ((o = `a`), a.push(e[r]), r++, i++);
            } else if (
              t[i] === `*` &&
              e[r] &&
              (this.options.dot || !e[r].startsWith(`.`)) &&
              e[r] !== `**`
            ) {
              if (o === `a`) return !1;
              ((o = `b`), a.push(t[i]), r++, i++);
            } else return !1;
          return e.length === t.length && a;
        }
        parseNegate() {
          if (this.nonegate) return;
          let e = this.pattern,
            t = !1,
            n = 0;
          for (let r = 0; r < e.length && e.charAt(r) === `!`; r++) ((t = !t), n++);
          (n && (this.pattern = e.slice(n)), (this.negate = t));
        }
        matchOne(e, t, n = !1) {
          let r = 0,
            i = 0;
          if (this.isWindows) {
            let n = typeof e[0] == `string` && /^[a-z]:$/i.test(e[0]),
              a = !n && e[0] === `` && e[1] === `` && e[2] === `?` && /^[a-z]:$/i.test(e[3]),
              o = typeof t[0] == `string` && /^[a-z]:$/i.test(t[0]),
              s =
                !o &&
                t[0] === `` &&
                t[1] === `` &&
                t[2] === `?` &&
                typeof t[3] == `string` &&
                /^[a-z]:$/i.test(t[3]),
              c = a ? 3 : n ? 0 : void 0,
              l = s ? 3 : o ? 0 : void 0;
            if (typeof c == `number` && typeof l == `number`) {
              let [n, a] = [e[c], t[l]];
              n.toLowerCase() === a.toLowerCase() && ((t[l] = n), (i = l), (r = c));
            }
          }
          let { optimizationLevel: a = 1 } = this.options;
          return (
            a >= 2 && (e = this.levelTwoFileOptimize(e)),
            t.includes(Q) ? this.#e(e, t, n, r, i) : this.#n(e, t, n, r, i)
          );
        }
        #e(e, t, n, r, i) {
          let a = t.indexOf(Q, i),
            o = t.lastIndexOf(Q),
            [s, c, l] = n
              ? [t.slice(i, a), t.slice(a + 1), []]
              : [t.slice(i, a), t.slice(a + 1, o), t.slice(o + 1)];
          if (s.length) {
            let t = e.slice(r, r + s.length);
            if (!this.#n(t, s, n, 0, 0)) return !1;
            ((r += s.length), (i += s.length));
          }
          let u = 0;
          if (l.length) {
            if (l.length + r > e.length) return !1;
            let t = e.length - l.length;
            if (this.#n(e, l, n, t, 0)) u = l.length;
            else {
              if (
                e[e.length - 1] !== `` ||
                r + l.length === e.length ||
                (t--, !this.#n(e, l, n, t, 0))
              )
                return !1;
              u = l.length + 1;
            }
          }
          if (!c.length) {
            let t = !!u;
            for (let n = r; n < e.length - u; n++) {
              let r = String(e[n]);
              if (((t = !0), r === `.` || r === `..` || (!this.options.dot && r.startsWith(`.`))))
                return !1;
            }
            return n || t;
          }
          let d = [[[], 0]],
            f = d[0],
            p = 0,
            m = [0];
          for (let e of c) e === Q ? (m.push(p), (f = [[], 0]), d.push(f)) : (f[0].push(e), p++);
          let h = d.length - 1,
            g = e.length - u;
          for (let e of d) e[1] = g - (m[h--] + e[0].length);
          return !!this.#t(e, d, r, 0, n, 0, !!u);
        }
        #t(e, t, n, r, i, a, o) {
          let s = t[r];
          if (!s) {
            for (let t = n; t < e.length; t++) {
              o = !0;
              let n = e[t];
              if (n === `.` || n === `..` || (!this.options.dot && n.startsWith(`.`))) return !1;
            }
            return o;
          }
          let [c, l] = s;
          for (; n <= l;) {
            if (this.#n(e.slice(0, n + c.length), c, i, n, 0) && a < this.maxGlobstarRecursion) {
              let s = this.#t(e, t, n + c.length, r + 1, i, a + 1, o);
              if (s !== !1) return s;
            }
            let s = e[n];
            if (s === `.` || s === `..` || (!this.options.dot && s.startsWith(`.`))) return !1;
            n++;
          }
          return i || null;
        }
        #n(e, t, n, r, i) {
          let a, o, s, c;
          for (a = r, o = i, c = e.length, s = t.length; a < c && o < s; a++, o++) {
            this.debug(`matchOne loop`);
            let n = t[o],
              r = e[a];
            if ((this.debug(t, n, r), n === !1 || n === Q)) return !1;
            let i;
            if (
              (typeof n == `string`
                ? ((i = r === n), this.debug(`string match`, n, r, i))
                : ((i = n.test(r)), this.debug(`pattern match`, n, r, i)),
              !i)
            )
              return !1;
          }
          if (a === c && o === s) return !0;
          if (a === c) return n;
          if (o === s) return a === c - 1 && e[a] === ``;
          throw Error(`wtf?`);
        }
        braceExpand() {
          return fr(this.pattern, this.options);
        }
        parse(e) {
          sn(e);
          let t = this.options;
          if (e === `**`) return Q;
          if (e === ``) return ``;
          let n,
            r = null;
          (n = e.match(Jn))
            ? (r = t.dot ? Xn : Yn)
            : (n = e.match(Rn))
              ? (r = (t.nocase ? (t.dot ? Hn : Vn) : t.dot ? Bn : zn)(n[1]))
              : (n = e.match(Zn))
                ? (r = (t.nocase ? (t.dot ? $n : Qn) : t.dot ? er : tr)(n))
                : (n = e.match(Un))
                  ? (r = t.dot ? Gn : Wn)
                  : (n = e.match(Kn)) && (r = qn);
          let i = Pn.fromGlob(e, this.options).toMMPattern();
          return (r && typeof i == `object` && Reflect.defineProperty(i, "test", { value: r }), i);
        }
        makeRe() {
          if (this.regexp || this.regexp === !1) return this.regexp;
          let e = this.set;
          if (!e.length) return ((this.regexp = !1), this.regexp);
          let t = this.options,
            n = t.noglobstar ? sr : t.dot ? cr : lr,
            r = new Set(t.nocase ? [`i`] : []),
            i = e
              .map((e) => {
                let t = e.map((e) => {
                  if (e instanceof RegExp) for (let t of e.flags.split(``)) r.add(t);
                  return typeof e == `string` ? gr(e) : e === Q ? Q : e._src;
                });
                t.forEach((e, r) => {
                  let i = t[r + 1],
                    a = t[r - 1];
                  e !== Q ||
                    a === Q ||
                    (a === void 0
                      ? i !== void 0 && i !== Q
                        ? (t[r + 1] = `(?:\\/|` + n + `\\/)?` + i)
                        : (t[r] = n)
                      : i === void 0
                        ? (t[r - 1] = a + `(?:\\/|\\/` + n + `)?`)
                        : i !== Q &&
                          ((t[r - 1] = a + `(?:\\/|\\/` + n + `\\/)` + i), (t[r + 1] = Q)));
                });
                let i = t.filter((e) => e !== Q);
                if (this.partial && i.length >= 1) {
                  let e = [];
                  for (let t = 1; t <= i.length; t++) e.push(i.slice(0, t).join(`/`));
                  return `(?:` + e.join(`|`) + `)`;
                }
                return i.join(`/`);
              })
              .join(`|`),
            [a, o] = e.length > 1 ? [`(?:`, `)`] : [``, ``];
          ((i = `^` + a + i + o + `$`),
            this.partial && (i = `^(?:\\/|` + a + i.slice(1, -1) + o + `)$`),
            this.negate && (i = `^(?!` + i + `).+$`));
          try {
            this.regexp = new RegExp(i, [...r].join(``));
          } catch {
            this.regexp = !1;
          }
          return this.regexp;
        }
        slashSplit(e) {
          return this.preserveMultipleSlashes
            ? e.split(`/`)
            : this.isWindows && /^\/\/[^/]+/.test(e)
              ? [``, ...e.split(/\/+/)]
              : e.split(/\/+/);
        }
        match(e, t = this.partial) {
          if ((this.debug(`match`, e, this.pattern), this.comment)) return !1;
          if (this.empty) return e === ``;
          if (e === `/` && t) return !0;
          let n = this.options;
          this.isWindows && (e = e.split(`\\`).join(`/`));
          let r = this.slashSplit(e);
          this.debug(this.pattern, `split`, r);
          let i = this.set;
          this.debug(this.pattern, `set`, i);
          let a = r[r.length - 1];
          if (!a) for (let e = r.length - 2; !a && e >= 0; e--) a = r[e];
          for (let e of i) {
            let i = r;
            if ((n.matchBase && e.length === 1 && (i = [a]), this.matchOne(i, e, t)))
              return n.flipNegate ? !0 : !this.negate;
          }
          return !n.flipNegate && this.negate;
        }
        static defaults(e) {
          return Z.defaults(e).Minimatch;
        }
      }),
      (Z.AST = Pn),
      (Z.Minimatch = _r),
      (Z.escape = In),
      (Z.unescape = hn));
  });
function yr(e) {
  let t = (0, Ir.c)(111),
    { gitRoot: n, gitCommonDir: r, cwd: i, hostId: a, paths: o } = e,
    s;
  t[0] !== i || t[1] !== n ? ((s = jr(n, i)), (t[0] = i), (t[1] = n), (t[2] = s)) : (s = t[2]);
  let { normalizedGitRoot: c, normalizedCwd: l, cwdRelativeToGitRoot: u } = s,
    d = c == null ? null : `${c}/.gitattributes`,
    f = u != null && u !== `` ? `${l}/.gitattributes` : null,
    p;
  t[3] !== c || t[4] !== o ? ((p = Sr(c, o)), (t[3] = c), (t[4] = o), (t[5] = p)) : (p = t[5]);
  let m = p,
    h;
  t[6] === r
    ? (h = t[7])
    : ((h = r == null ? null : `${W(r)}/info/attributes`), (t[6] = r), (t[7] = h));
  let g = h,
    _;
  t[8] !== f || t[9] !== g || t[10] !== d || t[11] !== m
    ? ((_ = [d, f, g, ...m].filter(xr)),
      (t[8] = f),
      (t[9] = g),
      (t[10] = d),
      (t[11] = m),
      (t[12] = _))
    : (_ = t[12]);
  let v = _,
    ee;
  t[13] === v ? (ee = t[14]) : ((ee = Array.from(new Set(v))), (t[13] = v), (t[14] = ee));
  let y = kr(ee, a),
    te;
  t[15] !== y.paths || t[16] !== d
    ? ((te = d != null && y.paths.has(d)), (t[15] = y.paths), (t[16] = d), (t[17] = te))
    : (te = t[17]);
  let ne = te,
    b;
  t[18] !== f || t[19] !== y.paths
    ? ((b = f != null && y.paths.has(f)), (t[18] = f), (t[19] = y.paths), (t[20] = b))
    : (b = t[20]);
  let x = b,
    S;
  t[21] === y.paths ? (S = t[22]) : ((S = Array.from(y.paths)), (t[21] = y.paths), (t[22] = S));
  let C;
  t[23] !== f || t[24] !== d || t[25] !== S
    ? ((C = S.filter((e) => e !== d && e !== f)),
      (t[23] = f),
      (t[24] = d),
      (t[25] = S),
      (t[26] = C))
    : (C = t[26]);
  let w = C,
    re;
  t[27] !== w || t[28] !== a
    ? ((re = {
        queries: w.map((e) => ({
          queryKey: le(`read-file`, { hostId: a, path: e }),
          queryFn: (t) => {
            let { signal: n } = t;
            return pe(`read-file`, { params: { hostId: a, path: e }, signal: n });
          },
          staleTime: ye.FIVE_SECONDS,
        })),
      }),
      (t[27] = w),
      (t[28] = a),
      (t[29] = re))
    : (re = t[29]);
  let T = ve(re),
    ie;
  bb0: {
    if (u == null || u === ``) {
      let e;
      (t[30] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = []), (t[30] = e)) : (e = t[30]),
        (ie = e));
      break bb0;
    }
    let e;
    if (t[31] !== u || t[32] !== o) {
      let n;
      (t[34] === u
        ? (n = t[35])
        : ((n = (e) => {
            let t = W(e);
            return t.includes(`/`) && wr(t, u) == null;
          }),
          (t[34] = u),
          (t[35] = n)),
        (e = o.filter(n)),
        (t[31] = u),
        (t[32] = o),
        (t[33] = e));
    } else e = t[33];
    ie = e;
  }
  let E = ie,
    D;
  t[36] !== E || t[37] !== l || t[38] !== c
    ? ((D = Pr({ ambiguousSlashPaths: E, normalizedCwd: l, normalizedGitRoot: c })),
      (t[36] = E),
      (t[37] = l),
      (t[38] = c),
      (t[39] = D))
    : (D = t[39]);
  let O = kr(D, a),
    k = d ?? ``,
    A;
  t[40] !== a || t[41] !== k
    ? ((A = { hostId: a, path: k }), (t[40] = a), (t[41] = k), (t[42] = A))
    : (A = t[42]);
  let j;
  t[43] === ne ? (j = t[44]) : ((j = { enabled: ne }), (t[43] = ne), (t[44] = j));
  let M;
  t[45] !== A || t[46] !== j
    ? ((M = { params: A, queryConfig: j }), (t[45] = A), (t[46] = j), (t[47] = M))
    : (M = t[47]);
  let { data: ae, isLoading: oe } = G(`read-file`, M),
    se = f ?? ``,
    N;
  t[48] !== a || t[49] !== se
    ? ((N = { hostId: a, path: se }), (t[48] = a), (t[49] = se), (t[50] = N))
    : (N = t[50]);
  let P;
  t[51] === x ? (P = t[52]) : ((P = { enabled: x }), (t[51] = x), (t[52] = P));
  let F;
  t[53] !== N || t[54] !== P
    ? ((F = { params: N, queryConfig: P }), (t[53] = N), (t[54] = P), (t[55] = F))
    : (F = t[55]);
  let { data: I, isLoading: L } = G(`read-file`, F);
  ae?.contents;
  let R = ae?.contents ?? null,
    z;
  t[56] === R ? (z = t[57]) : ((z = Cr(R)), (t[56] = R), (t[57] = z));
  let ce = z,
    B;
  (t[58] !== I?.contents || t[59] !== u
    ? ((B = () => (u == null || u === `` ? null : Cr(I?.contents ?? null, { basePath: u }))),
      (t[58] = I?.contents),
      (t[59] = u),
      (t[60] = B))
    : (B = t[60]),
    I?.contents);
  let V;
  t[61] === B ? (V = t[62]) : ((V = B()), (t[61] = B), (t[62] = V));
  let H = V;
  I?.contents;
  let ue;
  bb1: {
    if (u == null || u === ``) {
      ue = null;
      break bb1;
    }
    let e = I?.contents ?? null,
      n;
    (t[63] === e ? (n = t[64]) : ((n = Cr(e)), (t[63] = e), (t[64] = n)), (ue = n));
  }
  let de = ue,
    fe;
  if (
    t[65] !== w ||
    t[66] !== T ||
    t[67] !== f ||
    t[68] !== g ||
    t[69] !== d ||
    t[70] !== H ||
    t[71] !== ce ||
    t[72] !== c
  ) {
    let e;
    (t[74] === g
      ? (e = t[75])
      : ((e = (e, t) =>
          e.attributesPath === g
            ? -1
            : t.attributesPath === g
              ? 1
              : t.attributesPath.length - e.attributesPath.length),
        (t[74] = g),
        (t[75] = e)),
      (fe = [
        ...(d != null && ce != null ? [{ attributesPath: d, matcher: ce }] : []),
        ...(f != null && H != null ? [{ attributesPath: f, matcher: H }] : []),
        ...w.flatMap((e, t) => {
          let n = T[t]?.data?.contents,
            r = e === g ? null : wr(e.slice(0, -15), c),
            i = Cr(n ?? null, { basePath: r });
          return i == null ? [] : [{ attributesPath: e, matcher: i }];
        }),
      ].sort(e)),
      (t[65] = w),
      (t[66] = T),
      (t[67] = f),
      (t[68] = g),
      (t[69] = d),
      (t[70] = H),
      (t[71] = ce),
      (t[72] = c),
      (t[73] = fe));
  } else fe = t[73];
  let U = fe,
    me;
  t[76] !== E || t[77] !== O.paths || t[78] !== l || t[79] !== c
    ? ((me = Fr({
        ambiguousSlashPaths: E,
        normalizedCwd: l,
        normalizedGitRoot: c,
        existingCandidatePaths: O.paths,
      })),
      (t[76] = E),
      (t[77] = O.paths),
      (t[78] = l),
      (t[79] = c),
      (t[80] = me))
    : (me = t[80]);
  let he = me,
    ge;
  t[81] !== f || t[82] !== he || t[83] !== u || t[84] !== de || t[85] !== U
    ? ((ge = (e) => {
        let t = W(e);
        for (let { attributesPath: e, matcher: n } of U) {
          let r = n(t);
          if (r != null) return r === `set`;
          if (e === f && Tr(t, u, he)) {
            let e = de?.(t) ?? null;
            if (e != null) return e === `set`;
          }
        }
        return !1;
      }),
      (t[81] = f),
      (t[82] = he),
      (t[83] = u),
      (t[84] = de),
      (t[85] = U),
      (t[86] = ge))
    : (ge = t[86]);
  let _e = ge,
    be;
  bb2: {
    if (U.length === 0) {
      let e;
      (t[87] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = new Set()), (t[87] = e))
        : (e = t[87]),
        (be = e));
      break bb2;
    }
    let e;
    if (t[88] !== _e || t[89] !== o) {
      let n;
      (t[91] === _e ? (n = t[92]) : ((n = (e) => _e(e)), (t[91] = _e), (t[92] = n)),
        (e = new Set(o.filter(n))),
        (t[88] = _e),
        (t[89] = o),
        (t[90] = e));
    } else e = t[90];
    be = e;
  }
  let xe = be,
    Se;
  if (t[93] !== g || t[94] !== U) {
    let e;
    (t[96] === g
      ? (e = t[97])
      : ((e = (e) => {
          let { attributesPath: t } = e;
          return t !== g;
        }),
        (t[96] = g),
        (t[97] = e)),
      (Se = U.some(e)),
      (t[93] = g),
      (t[94] = U),
      (t[95] = Se));
  } else Se = t[95];
  let Ce = w.length > 0,
    we;
  t[98] !== T ||
  t[99] !== x ||
  t[100] !== L ||
  t[101] !== O.isLoading ||
  t[102] !== y.isLoading ||
  t[103] !== ne ||
  t[104] !== oe
    ? ((we = !y.isLoading && !O.isLoading && (!ne || !oe) && (!x || !L) && T.every(br)),
      (t[98] = T),
      (t[99] = x),
      (t[100] = L),
      (t[101] = O.isLoading),
      (t[102] = y.isLoading),
      (t[103] = ne),
      (t[104] = oe),
      (t[105] = we))
    : (we = t[105]);
  let Te;
  return (
    t[106] !== xe || t[107] !== Se || t[108] !== Ce || t[109] !== we
      ? ((Te = {
          hasLinguistGeneratedAttributes: Se,
          hasUnhandledAttributesFiles: Ce,
          isReady: we,
          paths: xe,
        }),
        (t[106] = xe),
        (t[107] = Se),
        (t[108] = Ce),
        (t[109] = we),
        (t[110] = Te))
      : (Te = t[110]),
    Te
  );
}
function br(e) {
  return !e.isLoading;
}
function xr(e) {
  return e != null && e.length > 0;
}
function Sr(e, t) {
  if (e == null) return [];
  let n = new Set();
  for (let r of t) {
    let t = W(r).split(`/`).filter(Boolean);
    for (let r = 0; r < t.length - 1; r += 1)
      n.add(f(e, `${t.slice(0, r + 1).join(`/`)}/.gitattributes`));
  }
  return Array.from(n);
}
function Cr(e, t = {}) {
  if (!e) return null;
  let n = t.basePath == null ? null : W(t.basePath).replace(/^\/+/, ``).replace(/\/+$/, ``),
    r = e
      .split(/\r?\n/)
      .map((e) => Er(e))
      .filter((e) => e != null);
  return r.length === 0
    ? null
    : (e) => {
        let t = null,
          i = wr(W(e), n);
        if (i == null) return null;
        for (let e of r) e.matches(i) && (t = e.state);
        return t;
      };
}
function wr(e, t) {
  if (t == null) return e;
  let n = `${t}/`;
  return e === t ? `` : e.startsWith(n) ? e.slice(n.length) : null;
}
function Tr(e, t, n) {
  return t == null || t === `` ? !1 : e.includes(`/`) ? n.has(e) : wr(e, t) == null;
}
function Er(e) {
  let t = e.trim();
  if (t.length === 0 || t.startsWith(`#`) || t.startsWith(`[attr]`)) return null;
  let n = t.split(/\s+/);
  if (n.length < 2) return null;
  let r = Or(n[0]);
  if (!r) return null;
  let i = Dr(n.slice(1));
  return i == null ? null : { matches: r, state: i };
}
function Dr(e) {
  let t = null;
  for (let n of e) {
    if (n === `linguist-generated` || n === `linguist-generated=true`) {
      t = `set`;
      continue;
    }
    if (n === `-linguist-generated` || n === `linguist-generated=false`) {
      t = `unset`;
      continue;
    }
    n === `!linguist-generated` && (t = `unspecified`);
  }
  return t;
}
function Or(e) {
  if (!e) return null;
  let t = new _r(e.replace(/^\/+/, ``), {
    dot: !0,
    matchBase: !e.includes(`/`),
    nobrace: !0,
    noext: !0,
    nonegate: !0,
    nocomment: !0,
    platform: `linux`,
  });
  return (e) => t.match(W(e));
}
function kr(e, t) {
  let n = (0, Ir.c)(13),
    r;
  n[0] !== t || n[1] !== e
    ? ((r = { hostId: t, paths: e }), (n[0] = t), (n[1] = e), (n[2] = r))
    : (r = n[2]);
  let i = e.length > 0,
    a;
  n[3] === i ? (a = n[4]) : ((a = { enabled: i }), (n[3] = i), (n[4] = a));
  let o;
  n[5] !== r || n[6] !== a
    ? ((o = { params: r, queryConfig: a }), (n[5] = r), (n[6] = a), (n[7] = o))
    : (o = n[7]);
  let { data: s, isLoading: c } = G(`paths-exist`, o);
  s?.existingPaths;
  let l;
  n[8] === s?.existingPaths
    ? (l = n[9])
    : ((l = new Set(s?.existingPaths.map(Ar) ?? [])), (n[8] = s?.existingPaths), (n[9] = l));
  let u = l,
    d;
  return (
    n[10] !== u || n[11] !== c
      ? ((d = { isLoading: c, paths: u }), (n[10] = u), (n[11] = c), (n[12] = d))
      : (d = n[12]),
    d
  );
}
function Ar(e) {
  return W(e);
}
function jr(e, t) {
  let n = Mr(e),
    r = Mr(t);
  return { normalizedGitRoot: n, normalizedCwd: r, cwdRelativeToGitRoot: Nr(n, r) };
}
function Mr(e) {
  return e == null ? null : W(e).replace(/\/+$/, ``);
}
function Nr(e, t) {
  if (e == null || t == null) return null;
  if (t === e) return ``;
  let n = `${e}/`;
  return t.startsWith(n) ? t.slice(n.length) : null;
}
function Pr({ ambiguousSlashPaths: e, normalizedCwd: t, normalizedGitRoot: n }) {
  return n == null || t == null
    ? []
    : e.flatMap((e) => {
        let r = W(e);
        return [f(n, r), f(t, r)];
      });
}
function Fr({
  ambiguousSlashPaths: e,
  normalizedCwd: t,
  normalizedGitRoot: n,
  existingCandidatePaths: r,
}) {
  return n == null || t == null
    ? new Set()
    : new Set(
        e.filter((e) => {
          let i = W(e),
            a = W(f(n, i)),
            o = W(f(t, i));
          return r.has(o) && !r.has(a);
        }),
      );
}
var Ir,
  Lr = e(() => {
    ((Ir = V()), he(), vr(), m(), C(), O());
  }),
  Rr,
  zr = e(() => {
    Rr = `<svg
  width="21"
  height="21"
  viewBox="0 0 21 21"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M17.2379 7.69907C17.2379 6.95248 17.237 6.43448 17.2041 6.03179C17.1799 5.73568 17.1402 5.53676 17.0862 5.38579L17.0277 5.24941C16.866 4.93211 16.6201 4.66653 16.3181 4.4814L16.1859 4.40757C16.02 4.32306 15.7978 4.26345 15.4035 4.2312C15.0009 4.19831 14.4826 4.19736 13.7362 4.19736H7.26086C6.51427 4.19736 5.99627 4.1983 5.59357 4.2312C5.29763 4.25539 5.09852 4.29409 4.94758 4.3481L4.8112 4.40757C4.49383 4.56929 4.22831 4.81512 4.04318 5.11714L3.96936 5.24941C3.88482 5.41532 3.82523 5.6373 3.79299 6.03179C3.76009 6.43448 3.75915 6.95248 3.75915 7.69907V12.8732C3.75915 13.548 3.76318 13.7789 3.80017 13.956L3.834 14.0944C4.03021 14.777 4.58934 15.3012 5.29211 15.448L5.44079 15.4695C5.61188 15.4861 5.86792 15.4879 6.3739 15.4879C6.58107 15.4879 6.7238 15.4877 6.86506 15.4992L7.05373 15.5197C7.49382 15.5811 7.91814 15.7309 8.30061 15.9596L8.48518 16.0796C8.55028 16.1245 8.62134 16.1752 8.70564 16.2355L10.0909 17.225L10.3996 17.4382C10.4603 17.4756 10.4695 17.4737 10.455 17.47L10.498 17.4751C10.5127 17.4752 10.5278 17.4737 10.5421 17.47L10.5965 17.4382C10.6645 17.3964 10.7522 17.3349 10.9061 17.225L12.2914 16.2355L12.5109 16.0796C12.576 16.0346 12.6356 15.996 12.6965 15.9596L12.8626 15.8663C13.2563 15.6605 13.6879 15.5354 14.132 15.4992L14.3525 15.49C14.4315 15.4887 14.5187 15.4879 14.6221 15.4879C15.2969 15.4879 15.5279 15.4849 15.705 15.448L15.8434 15.4131C16.5259 15.217 17.05 14.6586 17.1969 13.956L17.2184 13.8063C17.2351 13.6352 17.2379 13.379 17.2379 12.8732V7.69907ZM10.6785 10.6758C11.0641 10.6758 11.3768 10.9884 11.3768 11.3741C11.3768 11.7597 11.0641 12.0724 10.6785 12.0724H7.69665C7.31102 12.0724 6.99836 11.7597 6.99836 11.3741C6.99836 10.9884 7.31102 10.6758 7.69665 10.6758H10.6785ZM13.3035 7.17612L13.444 7.19048C13.7623 7.2555 14.0018 7.5369 14.0018 7.87442C14.0016 8.21182 13.7622 8.49341 13.444 8.55835L13.3035 8.57271H7.69665C7.31113 8.57271 6.99854 8.25989 6.99836 7.87442C6.99836 7.48878 7.31102 7.17612 7.69665 7.17612H13.3035ZM18.6345 12.8732C18.6345 13.3267 18.6359 13.6704 18.6058 13.9632L18.5637 14.2411C18.3105 15.4535 17.4066 16.4171 16.2289 16.7553L15.99 16.8148C15.6362 16.8886 15.2264 16.8845 14.6221 16.8845L14.2458 16.8917C14.0252 16.9097 13.8098 16.9651 13.6091 17.0558L13.4132 17.1583L13.1025 17.3716L11.7182 18.3611C11.504 18.5141 11.2697 18.6916 11.0015 18.7876L10.8846 18.8235C10.6945 18.8717 10.4977 18.8845 10.3042 18.8605L10.1125 18.8235C9.87394 18.7631 9.66181 18.6313 9.4675 18.4954L9.27883 18.3611L7.89353 17.3716L7.58386 17.1583C7.39381 17.0447 7.18578 16.9643 6.96965 16.9214L6.75124 16.8917C6.67965 16.8859 6.60316 16.8845 6.3739 16.8845C5.92038 16.8845 5.57673 16.887 5.28391 16.8568L5.00603 16.8148C3.79382 16.5615 2.82999 15.6574 2.49177 14.48L2.43332 14.2411C2.3594 13.8871 2.36257 13.4777 2.36257 12.8732V7.69907C2.36257 6.97553 2.36188 6.39072 2.40051 5.91797C2.43979 5.43729 2.52314 5.01117 2.72453 4.61572L2.85271 4.38604C3.172 3.86554 3.63042 3.4415 4.17751 3.16274L4.32722 3.09302C4.68032 2.94157 5.05908 2.8731 5.47976 2.83872C5.95251 2.8001 6.53731 2.80078 7.26086 2.80078H13.7362C14.4596 2.80078 15.0446 2.8001 15.5173 2.83872C15.998 2.87802 16.4241 2.9613 16.8196 3.16274L17.0482 3.29092C17.5689 3.61023 17.9927 4.06846 18.2715 4.61572L18.3423 4.76543C18.4937 5.11849 18.5612 5.49736 18.5955 5.91797C18.6342 6.39072 18.6345 6.97553 18.6345 7.69907V12.8732Z"
    fill="currentColor"
  />
</svg>
`;
  });
function Br(e) {
  let t = (0, Qr.c)(50),
    {
      activePath: n,
      allowSelectingActivePath: r,
      cwd: i,
      hostId: a,
      onSelectPath: o,
      commentCountByPath: s,
      entries: l,
      reserveBottomPadding: u,
    } = e,
    d = r !== void 0 && r,
    f = u !== void 0 && u,
    p;
  t[0] === i ? (p = t[1]) : ((p = i == null ? null : oe(i)), (t[0] = i), (t[1] = p));
  let m = p,
    h;
  t[2] === l ? (h = t[3]) : ((h = T(l)), (t[2] = l), (t[3] = h));
  let _ = h,
    v;
  t[4] === _ ? (v = t[5]) : ((v = _.map(Gr)), (t[4] = _), (t[5] = v));
  let y = v,
    te;
  t[6] === _ ? (te = t[7]) : ((te = _.map(Wr)), (t[6] = _), (t[7] = te));
  let b = te,
    x;
  t[8] === b ? (x = t[9]) : ((x = b.map(Ur).join(`\0`)), (t[8] = b), (t[9] = x));
  let S = x,
    C;
  t[10] === _ ? (C = t[11]) : ((C = new Map(_.map(Hr))), (t[10] = _), (t[11] = C));
  let w = C,
    re;
  t[12] === y ? (re = t[13]) : ((re = qr(y)), (t[12] = y), (t[13] = re));
  let ie = re,
    E;
  t[14] === _ ? (E = t[15]) : ((E = _.map(Vr)), (t[14] = _), (t[15] = E));
  let D = E,
    O;
  bb0: {
    if (s == null) {
      O = void 0;
      break bb0;
    }
    let e;
    (t[16] === s ? (e = t[17]) : ((e = Xr(s.values())), (t[16] = s), (t[17] = e)), (O = e));
  }
  let k = O,
    A;
  t[18] !== s || t[19] !== w
    ? ((A = (e) => {
        let { item: t } = e;
        if (t.kind !== `file`) return null;
        let n = w.get(t.path),
          r = n == null ? 0 : (s?.get(n.path) ?? 0);
        return r === 0 ? null : { icon: Yr(r) };
      }),
      (t[18] = s),
      (t[19] = w),
      (t[20] = A))
    : (A = t[20]);
  let j = ne(A),
    M;
  t[21] !== n || t[22] !== _
    ? ((M = n == null ? void 0 : _.find((e) => e.entry.path === n)?.treePath),
      (t[21] = n),
      (t[22] = _),
      (t[23] = M))
    : (M = t[23]);
  let ae = M,
    se;
  t[24] !== n || t[25] !== w || t[26] !== o
    ? ((se = (e) => {
        let t = e.find((e) => w.get(e) != null);
        if (t == null) return;
        let r = w.get(t)?.path;
        r != null && r !== n && o(r);
      }),
      (t[24] = n),
      (t[25] = w),
      (t[26] = o),
      (t[27] = se))
    : (se = t[27]);
  let N = ne(se),
    P;
  t[28] !== d || t[29] !== w || t[30] !== o
    ? ((P = (e) => {
        if (!d) return;
        let t = Ke(e.nativeEvent);
        if (t == null) return;
        let n = w.get(t)?.path;
        n != null && o(n);
      }),
      (t[28] = d),
      (t[29] = w),
      (t[30] = o),
      (t[31] = P))
    : (P = t[31]);
  let F = P,
    I;
  t[32] === f ? (I = t[33]) : ((I = f ? { paddingBottom: we } : void 0), (t[32] = f), (t[33] = I));
  let L;
  t[34] !== ae ||
  t[35] !== k ||
  t[36] !== ie ||
  t[37] !== b ||
  t[38] !== S ||
  t[39] !== _.length ||
  t[40] !== m ||
  t[41] !== D ||
  t[42] !== F ||
  t[43] !== N ||
  t[44] !== a ||
  t[45] !== j
    ? ((L =
        _.length > 0
          ? (0, $r.jsx)(g, {
              name: `ReviewFileTree`,
              resetKey: S,
              fallback: (0, $r.jsx)(ee, {
                align: `start`,
                className: `px-2 py-2`,
                children: (0, $r.jsx)(c, {
                  id: `codex.review.fileTree.renderError`,
                  defaultMessage: `File tree couldn't render`,
                  description: `Error shown when the review file tree fails to render`,
                }),
              }),
              children: (0, $r.jsx)(et, {
                flattenEmptyDirectories: !0,
                cwd: m,
                decorationIcons: k,
                gitStatus: D,
                hostId: a,
                initialExpandedPaths: ie,
                itemHeight: ei,
                onClick: F,
                onSelectionChange: N,
                paths: b,
                renderRowDecoration: j,
                selectedPath: ae,
                unsafeCSS: `
              [data-item-type='file'] {
                color: var(--color-text-tertiary);
              }

              [data-item-type='file']:hover,
              [data-item-type='file'][aria-selected='true'] {
                color: var(--color-text);
              }
            `,
              }),
            })
          : (0, $r.jsx)(Kr, {})),
      (t[34] = ae),
      (t[35] = k),
      (t[36] = ie),
      (t[37] = b),
      (t[38] = S),
      (t[39] = _.length),
      (t[40] = m),
      (t[41] = D),
      (t[42] = F),
      (t[43] = N),
      (t[44] = a),
      (t[45] = j),
      (t[46] = L))
    : (L = t[46]);
  let R;
  return (
    t[47] !== I || t[48] !== L
      ? ((R = (0, $r.jsx)(`div`, {
          className: `h-full min-h-0 w-full px-2`,
          style: I,
          children: L,
        })),
        (t[47] = I),
        (t[48] = L),
        (t[49] = R))
      : (R = t[49]),
    R
  );
}
function Vr(e) {
  let { entry: t, treePath: n } = e;
  return { path: n, status: Jr(t.changeKind) };
}
function Hr(e) {
  let { entry: t, treePath: n } = e;
  return [n, t];
}
function Ur(e) {
  let { displayPath: t, path: n } = e;
  return `${t}\0${n}`;
}
function Wr(e) {
  let { entry: t, treePath: n } = e;
  return { displayPath: n, path: t.path };
}
function Gr(e) {
  return e.treePath;
}
function Kr() {
  let e = (0, Qr.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $r.jsx)(ee, {
          align: `start`,
          className: `px-2 py-2`,
          children: (0, $r.jsx)(c, {
            id: `codex.review.fileSearch.empty`,
            defaultMessage: `No matching files`,
            description: `Empty state shown when the file filter hides all files in review`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function qr(e) {
  let t = new Set();
  for (let n of e) {
    let e = n.endsWith(`/`) ? n.slice(0, -1) : n,
      r = e.indexOf(`/`);
    for (; r !== -1;) (t.add(e.slice(0, r)), (r = e.indexOf(`/`, r + 1)));
  }
  return Array.from(t);
}
function Jr(e) {
  switch (e) {
    case `added`:
    case `deleted`:
    case `modified`:
    case `renamed`:
    case `untracked`:
      return e;
    case `copied`:
      return `added`;
    case `type-changed`:
    case `unmerged`:
      return `modified`;
  }
}
function Yr(e) {
  let t = Zr(e);
  return { height: ni, name: `review-file-tree-comment-${e}`, viewBox: `0 0 ${t} ${ni}`, width: t };
}
function Xr(e) {
  return Array.from(new Set(e))
    .filter((e) => e > 0)
    .map((e) => {
      let t = ni / 2;
      return {
        ...Yr(e),
        body: `<g transform="scale(${ii})">${ti}</g><text x="22" y="${t}" fill="currentColor" font-size="12" font-family="system-ui" dominant-baseline="middle">${e}</text>`,
      };
    });
}
function Zr(e) {
  return 22 + String(e).length * ri;
}
var Qr,
  $r,
  ei,
  ti,
  ni,
  ri,
  ii,
  ai = e(() => {
    ((Qr = V()),
      a(),
      S(),
      me(),
      B(),
      Ct(),
      ie(),
      qe(),
      zr(),
      Te(),
      E(),
      ($r = R()),
      (ei = 29),
      (ti = Rr.replace(/<svg[^>]*>/, ``).replace(`</svg>`, ``)),
      (ni = 18),
      (ri = 7),
      (ii = ni / 21));
  });
export {
  Lr as a,
  Dt as c,
  Ke as d,
  qe as f,
  Cr as i,
  et as l,
  Br as n,
  yr as o,
  ai as r,
  wt as s,
  Kr as t,
  Ct as u,
};
//# sourceMappingURL=review-file-tree-pane-b743a8f06e62.js.map
