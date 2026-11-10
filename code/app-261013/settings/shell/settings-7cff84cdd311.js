import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  BV as t,
  IDt as n,
  JC as r,
  QC as i,
  TJ as a,
  USt as o,
  Xot as s,
  Yot as c,
  iw as l,
  jDt as u,
  qC as d,
  tw as f,
  vzt as p,
  xMt as m,
  zSt as h,
} from "./app-shared-bbfeca5e5737.js";
import { Ymr as g, ehr as _, fur as v, pur as y } from "./app-initial-5851df3f6cb1.js";
import { i as b, n as x, r as S } from "./shared-68e21d781554.js";
function C(e) {
  let t = (0, T.c)(16),
    { accountId: n, isSubview: r, onOpen: i, onBack: a } = e,
    { userId: c } = y(),
    l,
    u;
  t[0] !== n || t[1] !== c
    ? ((l = [`biometric-settings`, c, n]),
      (u =
        c == null
          ? o
          : (e) => {
              let { signal: t } = e,
                r = `${window.location.origin}/api/identity/service/biometric-factors`;
              return g.safeRequest(`get`, r, {
                signal: t,
                retry: !1,
                expectedErrorStatuses: [401, 403, 404, 502, 503],
                expectedIdentity: { accountId: n, userId: c },
              });
            }),
      (t[0] = n),
      (t[1] = c),
      (t[2] = l),
      (t[3] = u))
    : ((l = t[2]), (u = t[3]));
  let d;
  t[4] !== l || t[5] !== u
    ? ((d = { queryKey: l, queryFn: u, staleTime: 0, gcTime: 0, retry: !1 }),
      (t[4] = l),
      (t[5] = u),
      (t[6] = d))
    : (d = t[6]);
  let { data: f, isError: p, refetch: m } = s(d),
    h = p || c == null,
    _;
  t[7] === m ? (_ = t[8]) : ((_ = () => void m()), (t[7] = m), (t[8] = _));
  let v;
  return (
    t[9] !== f || t[10] !== r || t[11] !== a || t[12] !== i || t[13] !== h || t[14] !== _
      ? ((v = (0, E.jsx)(w, { data: f, isError: h, isSubview: r, onOpen: i, onBack: a, onRetry: _ })),
        (t[9] = f),
        (t[10] = r),
        (t[11] = a),
        (t[12] = i),
        (t[13] = h),
        (t[14] = _),
        (t[15] = v))
      : (v = t[15]),
    v
  );
}
function w(e) {
  let r = (0, T.c)(13),
    { data: a, isError: o, isSubview: s, onOpen: c, onBack: l, onRetry: u } = e,
    p;
  r[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, E.jsx)(n, {
        id: `settings.biometric.title`,
        defaultMessage: `Face and voice verification`,
        description: `Title of the optional face and voice verification page and its entry in the signed-in user's Security settings. No placeholders.`,
      })),
      (r[0] = p))
    : (p = r[0]);
  let m = p;
  if (!s) {
    if (
      !a ||
      (a.capabilities.enrollment !== `enabled` && a.face.factor_id == null && a.voice.factor_id == null)
    )
      return null;
    if (o) {
      let e;
      return (
        r[1] === u ? (e = r[2]) : ((e = (0, E.jsx)(x, { isError: !0, onRetry: u })), (r[1] = u), (r[2] = e)),
        e
      );
    }
    let e;
    r[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, E.jsx)(t, {})), (r[3] = e)) : (e = r[3]);
    let n;
    return (
      r[4] === c
        ? (n = r[5])
        : ((n = (0, E.jsx)(d, {
            children: (0, E.jsx)(i, { edgeRounding: `surface`, label: m, onClick: c, trailing: e }),
          })),
          (r[4] = c),
          (r[5] = n)),
      n
    );
  }
  let h;
  r[6] !== a || r[7] !== o || r[8] !== u
    ? ((h =
        o || !a
          ? (0, E.jsx)(x, { isError: o, onRetry: u })
          : (0, E.jsxs)(E.Fragment, {
              children: [
                (0, E.jsx)(`p`, {
                  className: `text-sm text-secondary`,
                  children: (0, E.jsx)(n, {
                    id: `settings.biometric.privacy`,
                    defaultMessage: `Face and voice verification uses an encrypted representation of your face or voice. Photos and recordings aren’t saved.`,
                    description: `Privacy explanation before optional face or voice enrollment in Security settings. The service stores an encrypted mathematical reference, not the original photo or audio recording. No placeholders.`,
                  }),
                }),
                (0, E.jsx)(`p`, {
                  className: `text-sm text-secondary`,
                  children: (0, E.jsx)(n, {
                    id: `settings.biometric.optional`,
                    defaultMessage: `Setup is optional. You’ll be asked for consent before using your camera or microphone. This does not replace your password or other sign-in methods.`,
                    description: `Explains the optional enrollment process in face and voice verification settings. Consent precedes capture, and existing sign-in methods are unchanged.`,
                  }),
                }),
                (0, E.jsx)(d, {
                  children: [`face`, `voice`].map((e) =>
                    (0, E.jsx)(
                      f,
                      {
                        label:
                          e === `face`
                            ? (0, E.jsx)(n, {
                                id: `settings.biometric.face`,
                                defaultMessage: `Face`,
                                description: `Label for the face reference in the signed-in user's face and voice verification settings.`,
                              })
                            : (0, E.jsx)(n, {
                                id: `settings.biometric.voice`,
                                defaultMessage: `Voice`,
                                description: `Label for the voice reference in the signed-in user's face and voice verification settings.`,
                              }),
                        control:
                          a[e].factor_id == null
                            ? (0, E.jsx)(n, {
                                id: `settings.biometric.notSetUp`,
                                defaultMessage: `No enrollment recorded`,
                                description: `Short status beside Face or Voice in Security settings when no enrollment record is on file for the signed-in user. No placeholders.`,
                              })
                            : (0, E.jsx)(n, {
                                id: `settings.biometric.setUp`,
                                defaultMessage: `Enrollment recorded`,
                                description: `Short status beside Face or Voice in Security settings when an enrollment record is on file. It describes enrollment history, not whether the reference is unexpired or currently usable for verification. No placeholders.`,
                              }),
                      },
                      e,
                    ),
                  ),
                }),
                a.capabilities.enrollment === `enabled`
                  ? null
                  : (0, E.jsx)(`p`, {
                      className: `text-sm text-secondary`,
                      children: (0, E.jsx)(n, {
                        id: `settings.biometric.enrollmentUnavailable`,
                        defaultMessage: `New enrollment is currently unavailable`,
                        description: `Notice in face and voice verification settings when setup is disabled or temporarily unavailable. Existing reference status remains visible.`,
                      }),
                    }),
              ],
            })),
      (r[6] = a),
      (r[7] = o),
      (r[8] = u),
      (r[9] = h))
    : (h = r[9]);
  let g;
  return (
    r[10] !== l || r[11] !== h
      ? ((g = (0, E.jsx)(S, { title: m, onBack: l, children: h })), (r[10] = l), (r[11] = h), (r[12] = g))
      : (g = r[12]),
    g
  );
}
var T, E;
function D() {
  return (D = e(() => {
    ((T = p()), h(), c(), u(), v(), _(), a(), b(), l(), r(), (E = m()));
  }))();
}
D();
export { C as BiometricSettings };
//# sourceMappingURL=settings-7cff84cdd311.js.map
