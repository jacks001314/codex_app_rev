import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  B3 as r,
  FBt as i,
  HO as a,
  IO as o,
  JO as s,
  KO as c,
  LNt as l,
  LO as u,
  PBt as d,
  Qst as f,
  RO as p,
  WO as m,
  XOt as h,
  Y3 as g,
  YOt as _,
  Z3 as v,
  ZSt as y,
  okt as b,
  qO as x,
  tkt as S,
  z3 as C,
  zO as w,
} from "./app-shared-2feb3d4c6fcc.js";
import { t as T, u as E } from "./src-64808839b2f3.js";
import { n as D, t as O } from "./plus-sm-eb9633699097.js";
import { n as k, t as A } from "./telemetry-ec8e0eb23919.js";
function j(e) {
  return new Promise((t, n) => {
    let r = new FileReader();
    ((r.onerror = () => {
      n(r.error ?? Error(`Unable to read profile photo`));
    }),
      (r.onload = () => {
        if (typeof r.result != `string`) {
          n(Error(`Unable to read profile photo`));
          return;
        }
        t({
          contentType: e.type.trim() || `image/jpeg`,
          dataUrl: r.result,
          filename: e.name.trim() || `profile-photo.jpg`,
        });
      }),
      r.readAsDataURL(e));
  });
}
function M() {
  return (M = e(() => {}))();
}
function N() {
  return (N = e(() => {
    T();
  }))();
}
var P, F;
function I() {
  return (I = e(() => {
    (i(),
      (P = l()),
      (F = (e) =>
        (0, P.jsx)(`svg`, {
          width: 16,
          height: 16,
          viewBox: `0 0 16 16`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, P.jsx)(`path`, {
            d: `M11.6002 7.46777L11.7072 7.47871C11.9497 7.52826 12.1322 7.74266 12.1322 7.9998C12.1322 8.25695 11.9497 8.47135 11.7072 8.5209L11.6002 8.53184H4.4002C4.10638 8.53184 3.86816 8.29362 3.86816 7.9998C3.86816 7.70599 4.10638 7.46777 4.4002 7.46777H11.6002Z`,
            fill: `currentColor`,
          }),
        })));
  }))();
}
function L(e) {
  let n = (0, z.c)(18),
    { source: i, onCancel: a, onSave: s, purpose: l } = e,
    d = l === void 0 ? `profile` : l,
    h = t(f),
    _ = b(),
    [v, y] = (0, B.useState)(!1),
    C;
  n[0] !== d || n[1] !== h
    ? ((C = () => {
        (d === `profile` && k(h, `failure`),
          r(Error(d === `profile` ? `Profile photo processing failed` : `Workspace logo processing failed`)));
      }),
      (n[0] = d),
      (n[1] = h),
      (n[2] = C))
    : (C = n[2]);
  let T;
  n[3] !== s || n[4] !== d || n[5] !== h
    ? ((T = (e) => {
        (s(e), d === `profile` && k(h, `success`));
      }),
      (n[3] = s),
      (n[4] = d),
      (n[5] = h),
      (n[6] = T))
    : (T = n[6]);
  let D;
  n[7] !== v || n[8] !== a || n[9] !== d
    ? ((D = (e) => {
        let { preview: t, zoomControls: n, hasCropError: r, canSave: i, saveCrop: s } = e;
        return (0, V.jsx)(m, {
          open: !0,
          onOpenChange: (e) => {
            !e && !v && a();
          },
          showDialogClose: !v,
          size: `default`,
          children: (0, V.jsxs)(o, {
            as: `form`,
            className: `gap-5`,
            onSubmit: (e) => {
              (e.preventDefault(), s());
            },
            children: [
              (0, V.jsx)(x, { className: `sr-only`, children: (0, V.jsx)(S, { ...H.title }) }),
              (0, V.jsx)(c, {
                className: `sr-only`,
                children: (0, V.jsx)(S, {
                  id: `profile.photoCrop.description`,
                  defaultMessage: `Drag the image to reposition it, and adjust zoom with the slider`,
                  description: `Description for the profile picture crop dialog`,
                }),
              }),
              (0, V.jsx)(p, { title: (0, V.jsx)(S, { ...H.title }) }),
              (0, V.jsx)(w, { className: `items-center`, children: t }),
              (0, V.jsx)(w, { className: `relative z-10 items-center`, children: n }),
              r
                ? (0, V.jsx)(w, {
                    className: `items-center`,
                    children: (0, V.jsx)(`div`, {
                      className: `text-center text-sm leading-5 text-danger`,
                      role: `alert`,
                      children:
                        d === `profile`
                          ? (0, V.jsx)(S, {
                              id: `profile.photoCrop.error`,
                              defaultMessage: `Unable to process the profile picture`,
                              description: `Error shown when profile picture cropping fails`,
                            })
                          : (0, V.jsx)(S, {
                              id: `workspaceOwnerOnboarding.logo.cropError`,
                              defaultMessage: `Unable to process the workspace logo`,
                              description: `Error shown when the selected workspace logo cannot be cropped`,
                            }),
                    }),
                  })
                : null,
              (0, V.jsxs)(u, {
                children: [
                  (0, V.jsx)(g, {
                    color: `ghost`,
                    disabled: v,
                    onClick: a,
                    children: (0, V.jsx)(S, {
                      id: `profile.photoCrop.cancel`,
                      defaultMessage: `Cancel`,
                      description: `Button that cancels profile picture cropping`,
                    }),
                  }),
                  (0, V.jsx)(g, {
                    type: `submit`,
                    color: `primary`,
                    disabled: !i,
                    loading: v,
                    children: (0, V.jsx)(S, {
                      id: `profile.photoCrop.save`,
                      defaultMessage: `Save`,
                      description: `Button that saves a cropped profile picture`,
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }),
      (n[7] = v),
      (n[8] = a),
      (n[9] = d),
      (n[10] = D))
    : (D = n[10]);
  let O;
  return (
    n[11] !== _ || n[12] !== v || n[13] !== i || n[14] !== C || n[15] !== T || n[16] !== D
      ? ((O = (0, V.jsx)(E, {
          source: i,
          intl: _,
          isSavingCrop: v,
          setIsSavingCrop: y,
          onSaveError: C,
          onSave: T,
          renderZoomButton: R,
          children: D,
        })),
        (n[11] = _),
        (n[12] = v),
        (n[13] = i),
        (n[14] = C),
        (n[15] = T),
        (n[16] = D),
        (n[17] = O))
      : (O = n[17]),
    O
  );
}
function R(e) {
  let { direction: t, label: n, disabled: r, onClick: i } = e;
  return (0, V.jsx)(g, {
    "aria-label": n,
    color: `ghost`,
    disabled: r,
    size: `iconMd`,
    onClick: i,
    children:
      t === `out` ? (0, V.jsx)(F, { className: `icon-2xs` }) : (0, V.jsx)(O, { className: `icon-2xs` }),
  });
}
var z, B, V, H;
function U() {
  return (U = e(() => {
    ((z = d()),
      T(),
      y(),
      (B = i()),
      h(),
      v(),
      s(),
      a(),
      I(),
      D(),
      A(),
      n(),
      C(),
      (V = l()),
      (H = _({
        title: {
          id: `profile.photoCrop.title`,
          defaultMessage: `Adjust your image`,
          description: `Title for the profile picture crop dialog`,
        },
      })));
  }))();
}
export { M as a, j as i, U as n, N as r, L as t };
//# sourceMappingURL=profile-photo-crop-dialog-5ad330c6ebe0.js.map
