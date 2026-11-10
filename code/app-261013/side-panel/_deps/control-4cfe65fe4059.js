import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as n,
  Cwt as r,
  IDt as i,
  Iot as a,
  Ixt as o,
  JR as s,
  Kat as c,
  Lot as l,
  OV as u,
  Pxt as d,
  Sj as f,
  Swt as p,
  TJ as m,
  VDt as h,
  Vxt as g,
  YR as _,
  _wt as v,
  aAt as y,
  dV as ee,
  dj as te,
  gwt as b,
  hot as x,
  iAt as S,
  jDt as C,
  lB as w,
  lot as T,
  qat as E,
  rst as D,
  spt as O,
  t3 as k,
  vzt as A,
  wot as j,
  xMt as M,
  yzt as N,
  zxt as P,
} from "./app-shared-bbfeca5e5737.js";
import {
  DPn as F,
  GMr as I,
  Opr as L,
  TPn as R,
  XMr as z,
  Ymr as B,
  ehr as V,
  kpr as H,
  tNr as U,
  wpr as W,
} from "./app-initial-5851df3f6cb1.js";
import { n as G, t as K } from "./channel-button-bad94b04d4c2.js";
function q(e) {
  let t = (0, X.c)(5),
    { conversationId: n, disabled: r } = e,
    { data: i } = P(W, n),
    a = g(I),
    o = g(z);
  if (a == null || o == null || !H(i, n)) return null;
  let s = `${a}:${o}:${i.id}`,
    c;
  return (
    t[0] !== a || t[1] !== r || t[2] !== i.id || t[3] !== s
      ? ((c = (0, Q.jsx)(J, { dotId: i.id, accountId: a, disabled: r }, s)),
        (t[0] = a),
        (t[1] = r),
        (t[2] = i.id),
        (t[3] = s),
        (t[4] = c))
      : (c = t[4]),
    c
  );
}
function J(e) {
  let r = (0, X.c)(26),
    { dotId: a, accountId: s, disabled: d } = e,
    f = o(n),
    m = _(),
    g = h(),
    [y, b] = (0, Z.useState)(null),
    [C, T] = (0, Z.useState)(null),
    [E, D] = (0, Z.useState)(null),
    k = E != null,
    A,
    j;
  (r[0] === E
    ? ((A = r[1]), (j = r[2]))
    : ((A = () => {
        if (E == null) return;
        let e = setTimeout(() => D(null), Math.max(0, E - Date.now()));
        return () => clearTimeout(e);
      }),
      (j = [E]),
      (r[0] = E),
      (r[1] = A),
      (r[2] = j)),
    (0, Z.useEffect)(A, j));
  let M;
  r[3] !== s || r[4] !== a
    ? ((M = {
        mutationFn: (e) => {
          let { meetingUrl: t, key: n } = e;
          return B.safePost(`/tbo/{tbo_id}/meeting-sessions`, {
            parameters: { path: { tbo_id: a }, header: { "Idempotency-Key": n } },
            requestBody: { meeting_url: t },
            additionalHeaders: { [O]: s, "Idempotency-Key": n },
          });
        },
        retry: !1,
      }),
      (r[3] = s),
      (r[4] = a),
      (r[5] = M))
    : (M = r[5]);
  let { mutate: N, isPending: P } = l(M),
    F = y != null,
    I;
  r[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = async function () {
        let e = { url: `` };
        b(e);
        try {
          let t = Y(await c.clipboard.readText());
          t != null && b((n) => (n === e ? { url: t } : n));
        } catch {}
      }),
      (r[6] = I))
    : (I = r[6]);
  let L = I,
    z = F ? `editor` : `button-${k}`,
    V,
    H,
    U;
  r[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = { opacity: 0 }), (H = { opacity: 1 }), (U = { opacity: 0 }), (r[7] = V), (r[8] = H), (r[9] = U))
    : ((V = r[7]), (H = r[8]), (U = r[9]));
  let W = m ? 0 : 150 / 1e3,
    G;
  r[10] === W ? (G = r[11]) : ((G = { duration: W, ease: te }), (r[10] = W), (r[11] = G));
  let q;
  r[12] !== C ||
  r[13] !== d ||
  r[14] !== y ||
  r[15] !== F ||
  r[16] !== g ||
  r[17] !== N ||
  r[18] !== k ||
  r[19] !== P ||
  r[20] !== f
    ? ((q = F
        ? (0, Q.jsx)(S, {
            asChild: !0,
            onDismiss: () => {
              P || b(null);
            },
            children: (0, Q.jsx)(`form`, {
              onSubmit: (e) => {
                if ((e.preventDefault(), d || P)) return;
                let t = Y(y.url);
                if (t == null) return;
                let n = C?.meetingUrl === t ? C : { meetingUrl: t, key: crypto.randomUUID() };
                (T(n),
                  N(n, {
                    onSuccess: () => {
                      (T(null), b(null), D(Date.now() + 2e3));
                    },
                    onError: () => {
                      f.get(x).danger(
                        g.formatMessage({
                          id: `orbit.meetings.inviteError`,
                          defaultMessage: `Could not confirm the invitation. Try again`,
                          description: `A meeting invite request failed or its response was lost; the user can retry safely`,
                        }),
                        { errorAnalytics: { toastId: `orbit.meetings.inviteError` } },
                      );
                    },
                  }));
              },
              children: (0, Q.jsx)(R, {
                autoFocus: !0,
                disabled: d || P,
                required: !0,
                maxLength: 2048,
                "aria-label": g.formatMessage({
                  id: `orbit.meetings.url`,
                  defaultMessage: `Google Meet URL`,
                  description: `Accessible label for the meeting URL input`,
                }),
                placeholder: g.formatMessage({
                  id: `orbit.meetings.urlPlaceholder`,
                  defaultMessage: `https://meet.google.com/voe-cyip-xen`,
                  description: `Example Google Meet URL shown in the empty invite field; keep the URL unchanged`,
                }),
                title: g.formatMessage({
                  id: `orbit.meetings.urlHelp`,
                  defaultMessage: `Enter a Google Meet link such as https://meet.google.com/abc-defg-hij`,
                  description: `Validation hint for a Google Meet URL`,
                }),
                pattern: `(https://meet\\.google\\.com/|meet\\.google\\.com/)?[a-z]{3}-[a-z]{4}-[a-z]{3}/?(\\?.*)?`,
                value: y?.url ?? ``,
                trailingControl: (0, Q.jsx)(t, {
                  type: `submit`,
                  color: `ghost`,
                  size: `iconSm`,
                  loading: P,
                  disabled: d || P || Y(y?.url ?? ``) == null,
                  "aria-label": g.formatMessage({
                    id: `orbit.meetings.submitInvite`,
                    defaultMessage: `Send invitation`,
                    description: `Submit the Google Meet URL to invite the user's dot`,
                  }),
                  children: (0, Q.jsx)(w, {}),
                }),
                onChange: (e) => b({ url: e.target.value }),
              }),
            }),
          })
        : (0, Q.jsx)(K, {
            mode: `shortcut`,
            icon: k ? (0, Q.jsx)(u, {}) : (0, Q.jsx)(ee, {}),
            disabled: d || k,
            onClick: () => void L(),
            children: k
              ? (0, Q.jsx)(i, {
                  id: `orbit.meetings.invited`,
                  defaultMessage: `Invited`,
                  description: `The Google Meet invitation was accepted; this does not mean the dot has joined yet`,
                })
              : (0, Q.jsx)(i, {
                  id: `orbit.meetings.invite`,
                  defaultMessage: `Invite to Google Meet`,
                  description: `Show an inline meeting URL field to invite the user's dot; keep dot untranslated`,
                }),
          })),
      (r[12] = C),
      (r[13] = d),
      (r[14] = y),
      (r[15] = F),
      (r[16] = g),
      (r[17] = N),
      (r[18] = k),
      (r[19] = P),
      (r[20] = f),
      (r[21] = q))
    : (q = r[21]);
  let J;
  return (
    r[22] !== G || r[23] !== q || r[24] !== z
      ? ((J = (0, Q.jsx)(`div`, {
          className: `min-w-0`,
          "aria-live": `polite`,
          children: (0, Q.jsx)(p, {
            initial: !1,
            mode: `wait`,
            children: (0, Q.jsx)(v.div, { initial: V, animate: H, exit: U, transition: G, children: q }, z),
          }),
        })),
        (r[22] = G),
        (r[23] = q),
        (r[24] = z),
        (r[25] = J))
      : (J = r[25]),
    J
  );
}
function Y(e) {
  let t =
    /^(?:https:\/\/meet\.google\.com\/|meet\.google\.com\/)?([a-z]{3}-[a-z]{4}-[a-z]{3})(?:\/)?(?:\?[^\s]*)?$/.exec(
      e.trim(),
    );
  return t == null ? null : `https://meet.google.com/${t[1]}`;
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    ((X = A()),
      y(),
      a(),
      r(),
      b(),
      d(),
      D(),
      (Z = N()),
      C(),
      U(),
      V(),
      k(),
      m(),
      F(),
      T(),
      s(),
      E(),
      j(),
      f(),
      L(),
      G(),
      (Q = M()));
  }))();
}
$();
export { q as MeetingControl };
//# sourceMappingURL=control-4cfe65fe4059.js.map
