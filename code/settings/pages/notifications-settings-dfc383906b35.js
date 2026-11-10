import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $G as n,
  $u as r,
  A3t as i,
  Amn as a,
  B6t as o,
  BS as s,
  Cpn as c,
  D3t as l,
  F3t as u,
  Hu as d,
  JG as f,
  JK as p,
  JS as m,
  KG as h,
  KWt as g,
  O3t as _,
  Opn as v,
  QG as y,
  QKt as b,
  QWt as x,
  Qu as S,
  RS as C,
  S3t as w,
  Spn as T,
  T8t as E,
  TJt as D,
  VS as O,
  Vu as k,
  XS as A,
  Xu as j,
  YKt as ee,
  ZG as M,
  ZWt as N,
  Zu as P,
  a3t as te,
  bSt as F,
  d3t as I,
  ed as L,
  hmn as R,
  jXt as z,
  kXt as B,
  kmn as V,
  o3t as H,
  qK as ne,
  qKt as U,
  qu as W,
  rSt as G,
  s3t as K,
  uSt as q,
  wJt as J,
} from "./app-initial-f094ef01c64d.js";
import { n as re, t as ie } from "./settings-loading-row-de4ab81779d6.js";
function ae() {
  let e = (0, X.c)(28),
    t = i(te),
    n = v(),
    r = l(),
    a;
  e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((a = new Map()), (e[0] = a)) : (a = e[0]);
  let o = (0, ue.useRef)(a),
    s = u(g),
    d;
  e[1] === s ? (d = e[2]) : ((d = [Q, s]), (e[1] = s), (e[2] = d));
  let f = d,
    p = s != null,
    m;
  e[3] !== f || e[4] !== p
    ? ((m = { queryKey: f, queryFn: G, enabled: p, staleTime: J.ONE_MINUTE }),
      (e[3] = f),
      (e[4] = p),
      (e[5] = m))
    : (m = e[5]);
  let { data: h, isLoading: _ } = w(m),
    y,
    b;
  e[6] === r
    ? ((y = e[7]), (b = e[8]))
    : ((y = async (e) => {
        let t = `${e.accountId}\0${e.category}\0${e.channel}`,
          n = (o.current.get(t) ?? 0) + 1;
        o.current.set(t, n);
        let i = [Q, e.accountId];
        await r.cancelQueries({ queryKey: i });
        let a = r
          .getQueryData(i)
          ?.settings.find((t) => {
            let { category: n } = t;
            return n === e.category;
          })
          ?.options.find((t) => {
            let { channel: n } = t;
            return n === e.channel;
          })?.enabled;
        return (
          r.setQueryData(i, (t) => Y(t, e, e.enabled)),
          { mutationId: n, mutationKey: t, previousEnabled: a }
        );
      }),
      (b = (e, t, n) => {
        if (n == null || n.mutationId !== o.current.get(n.mutationKey)) return;
        let i = e.settings
          .find((e) => {
            let { category: n } = e;
            return n === t.category;
          })
          ?.options.find((e) => {
            let { channel: n } = e;
            return n === t.channel;
          })?.enabled;
        (r.setQueryData([Q, t.accountId], (e) => Y(e, t, i ?? t.enabled)),
          o.current.delete(n.mutationKey));
      }),
      (e[6] = r),
      (e[7] = y),
      (e[8] = b));
  let x;
  e[9] !== n || e[10] !== r || e[11] !== t
    ? ((x = (e, i, a) => {
        if (a != null && a.mutationId === o.current.get(a.mutationKey)) {
          if (a.previousEnabled != null) {
            let { previousEnabled: e } = a;
            r.setQueryData([Q, i.accountId], (t) => Y(t, i, e));
          }
          o.current.delete(a.mutationKey);
        }
        t.get(z).danger(
          n.formatMessage({
            id: `settings.notifications.chatGpt.updateError`,
            defaultMessage: `Failed to update ChatGPT notification settings`,
            description: `Error shown when a ChatGPT notification setting could not be updated`,
          }),
        );
      }),
      (e[9] = n),
      (e[10] = r),
      (e[11] = t),
      (e[12] = x))
    : (x = e[12]);
  let S;
  e[13] !== y || e[14] !== b || e[15] !== x
    ? ((S = { mutationFn: oe, onMutate: y, onSuccess: b, onError: x }),
      (e[13] = y),
      (e[14] = b),
      (e[15] = x),
      (e[16] = S))
    : (S = e[16]);
  let { mutate: C } = I(S);
  if (s == null || _) {
    let t;
    return (
      e[17] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, Z.jsx)(ie, {
            children: (0, Z.jsx)(c, {
              id: `settings.notifications.chatGpt.loading`,
              defaultMessage: `Loading ChatGPT notification settings`,
              description: `Loading state for ChatGPT notification settings`,
            }),
          })),
          (e[17] = t))
        : (t = e[17]),
      t
    );
  }
  if (h == null) {
    let t;
    return (
      e[18] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, Z.jsx)(W, {
            label: (0, Z.jsx)(c, {
              id: `settings.notifications.chatGpt.error`,
              defaultMessage: `ChatGPT notification settings could not be loaded`,
              description: `Error state for ChatGPT notification settings`,
            }),
            control: null,
          })),
          (e[18] = t))
        : (t = e[18]),
      t
    );
  }
  let T;
  if (e[19] !== s || e[20] !== h.settings || e[21] !== C) {
    let t;
    (e[23] !== s || e[24] !== C
      ? ((t = (e) =>
          (0, Z.jsx)(
            se,
            {
              setting: e,
              updateSetting: (t, n) => {
                C({ accountId: s, category: e.category, channel: t, enabled: n });
              },
            },
            e.category,
          )),
        (e[23] = s),
        (e[24] = C),
        (e[25] = t))
      : (t = e[25]),
      (T = h.settings.map(t)),
      (e[19] = s),
      (e[20] = h.settings),
      (e[21] = C),
      (e[22] = T));
  } else T = e[22];
  let E;
  return (
    e[26] === T
      ? (E = e[27])
      : ((E = (0, Z.jsx)(Z.Fragment, { children: T })), (e[26] = T), (e[27] = E)),
    E
  );
}
function oe(e) {
  let { accountId: t, ...n } = e;
  return F(n);
}
function Y(e, t, n) {
  return e == null
    ? e
    : {
        ...e,
        settings: e.settings.map((e) =>
          e.category === t.category
            ? {
                ...e,
                options: e.options.map((e) => (e.channel === t.channel ? { ...e, enabled: n } : e)),
              }
            : e,
        ),
      };
}
function se(e) {
  let t = (0, X.c)(17),
    { setting: n, updateSetting: r } = e,
    i = v(),
    a;
  if (t[0] !== i || t[1] !== n.options) {
    let e = n.options.filter(le);
    ((a =
      e.length === 0
        ? i.formatMessage({
            id: `settings.notifications.chatGpt.off`,
            defaultMessage: `Off`,
            description: `Summary shown when every channel for a ChatGPT notification category is disabled`,
          })
        : e.map(ce).join(`, `)),
      (t[0] = i),
      (t[1] = n.options),
      (t[2] = a));
  } else a = t[2];
  let o = a,
    s = n.name,
    c = n.description,
    l;
  t[3] === o
    ? (l = t[4])
    : ((l = (0, Z.jsx)(C, {
        children: (0, Z.jsx)(`span`, { className: `truncate`, children: o }),
      })),
      (t[3] = o),
      (t[4] = l));
  let u;
  if (t[5] !== n.options || t[6] !== r) {
    let e;
    (t[8] === r
      ? (e = t[9])
      : ((e = (e) =>
          (0, Z.jsx)(
            f.CheckboxItem,
            {
              checked: e.enabled,
              onCheckedChange: (t) => {
                r(e.channel, t);
              },
              children: e.name,
            },
            e.channel,
          )),
        (t[8] = r),
        (t[9] = e)),
      (u = n.options.map(e)),
      (t[5] = n.options),
      (t[6] = r),
      (t[7] = u));
  } else u = t[7];
  let d;
  t[10] !== l || t[11] !== u
    ? ((d = (0, Z.jsx)(h, {
        align: `end`,
        contentWidth: `menuWide`,
        triggerButton: l,
        children: u,
      })),
      (t[10] = l),
      (t[11] = u),
      (t[12] = d))
    : (d = t[12]);
  let p;
  return (
    t[13] !== n.description || t[14] !== n.name || t[15] !== d
      ? ((p = (0, Z.jsx)(W, { label: s, description: c, control: d })),
        (t[13] = n.description),
        (t[14] = n.name),
        (t[15] = d),
        (t[16] = p))
      : (p = t[16]),
    p
  );
}
function ce(e) {
  return e.name;
}
function le(e) {
  return e.enabled;
}
var X,
  ue,
  Z,
  Q,
  de = e(() => {
    ((X = V()),
      K(),
      _(),
      (ue = t(a(), 1)),
      T(),
      x(),
      q(),
      M(),
      B(),
      H(),
      re(),
      j(),
      O(),
      D(),
      (Z = R()),
      (Q = `chatgpt-notification-settings`));
  });
function fe() {
  let e = (0, me.c)(5),
    t = u(N),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, $.jsx)(s, { slug: `notifications` })), (e[0] = n))
    : (n = e[0]);
  let r;
  e[1] === t
    ? (r = e[2])
    : ((r = t
        ? (0, $.jsxs)(P, {
            children: [
              (0, $.jsx)(P.Header, {
                title: (0, $.jsx)(c, {
                  id: `settings.notifications.chatGptGroupTitle`,
                  defaultMessage: `ChatGPT`,
                  description: `Heading for ChatGPT notification settings`,
                }),
              }),
              (0, $.jsx)(P.Content, { children: (0, $.jsx)(k, { children: (0, $.jsx)(ae, {}) }) }),
            ],
          })
        : null),
      (e[1] = t),
      (e[2] = r));
  let i;
  return (
    e[3] === r
      ? (i = e[4])
      : ((i = (0, $.jsx)(m, { title: n, children: r })), (e[3] = r), (e[4] = i)),
    i
  );
}
function pe() {
  let e = (0, me.c)(55),
    t = i(te),
    n = v(),
    a = b(E.turnMode),
    o = b(E.permissionsEnabled),
    s = b(E.questionsEnabled),
    l = a ?? `unfocused`,
    u;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, $.jsx)(c, { ...r.never })), (e[0] = u))
    : (u = e[0]);
  let d;
  e[1] === n ? (d = e[2]) : ((d = n.formatMessage(r.never)), (e[1] = n), (e[2] = d));
  let p;
  e[3] === d ? (p = e[4]) : ((p = { id: `off`, label: u, ariaLabel: d }), (e[3] = d), (e[4] = p));
  let m;
  e[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, $.jsx)(c, { ...r.onlyWhenUnfocused })), (e[5] = m))
    : (m = e[5]);
  let g;
  e[6] === n ? (g = e[7]) : ((g = n.formatMessage(r.onlyWhenUnfocused)), (e[6] = n), (e[7] = g));
  let _;
  e[8] === g
    ? (_ = e[9])
    : ((_ = { id: `unfocused`, label: m, ariaLabel: g }), (e[8] = g), (e[9] = _));
  let x;
  e[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, $.jsx)(c, { ...r.always })), (e[10] = x))
    : (x = e[10]);
  let S;
  e[11] === n ? (S = e[12]) : ((S = n.formatMessage(r.always)), (e[11] = n), (e[12] = S));
  let w;
  e[13] === S
    ? (w = e[14])
    : ((w = { id: `always`, label: x, ariaLabel: S }), (e[13] = S), (e[14] = w));
  let T;
  e[15] !== p || e[16] !== _ || e[17] !== w
    ? ((T = [p, _, w]), (e[15] = p), (e[16] = _), (e[17] = w), (e[18] = T))
    : (T = e[18]);
  let D = T,
    O,
    k;
  e[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, $.jsx)(c, { ...r.turnCompletionNotifications })),
      (k = (0, $.jsx)(c, {
        id: `notifications.turnMode.description`,
        defaultMessage: `Set when ChatGPT alerts you that it's finished`,
        description: `Explains that this setting controls when the app sends an alert after ChatGPT finishes an agent response or run`,
      })),
      (e[19] = O),
      (e[20] = k))
    : ((O = e[19]), (k = e[20]));
  let A = D.find((e) => e.id === l)?.label,
    j;
  e[21] === A
    ? (j = e[22])
    : ((j = (0, $.jsx)(C, {
        children: (0, $.jsx)(`span`, { className: `truncate`, children: A }),
      })),
      (e[21] = A),
      (e[22] = j));
  let M;
  e[23] !== t || e[24] !== l || e[25] !== D
    ? ((M = (0, $.jsx)(`div`, {
        className: `max-h-80 overflow-y-auto`,
        children: D.map((e) => {
          let n = e.id === l;
          return (0, $.jsx)(
            f.Item,
            {
              RightIcon: n ? ne : void 0,
              onSelect: () => {
                ee(t, E.turnMode, e.id);
              },
              "aria-label": e.ariaLabel,
              children: (0, $.jsx)(`span`, { className: `truncate`, children: e.label }),
            },
            e.id,
          );
        }),
      })),
      (e[23] = t),
      (e[24] = l),
      (e[25] = D),
      (e[26] = M))
    : (M = e[26]);
  let N;
  e[27] !== j || e[28] !== M
    ? ((N = (0, $.jsx)(W, {
        label: O,
        description: k,
        control: (0, $.jsx)(h, {
          contentWidth: `menuWide`,
          align: `end`,
          triggerButton: j,
          children: M,
        }),
      })),
      (e[27] = j),
      (e[28] = M),
      (e[29] = N))
    : (N = e[29]);
  let P, F;
  e[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, $.jsx)(c, { ...r.permissionNotifications })),
      (F = (0, $.jsx)(c, {
        id: `notifications.permissions.description`,
        defaultMessage: `Show alerts when notification permissions are required`,
        description: `Description for permission notification toggle`,
      })),
      (e[30] = P),
      (e[31] = F))
    : ((P = e[30]), (F = e[31]));
  let I = o ?? !0,
    L;
  e[32] === t
    ? (L = e[33])
    : ((L = (e) => {
        ee(t, E.permissionsEnabled, e);
      }),
      (e[32] = t),
      (e[33] = L));
  let R;
  e[34] === n
    ? (R = e[35])
    : ((R = n.formatMessage(r.permissionNotifications)), (e[34] = n), (e[35] = R));
  let z;
  e[36] !== I || e[37] !== L || e[38] !== R
    ? ((z = (0, $.jsx)(W, {
        label: P,
        description: F,
        control: (0, $.jsx)(y, { checked: I, onChange: L, ariaLabel: R }),
      })),
      (e[36] = I),
      (e[37] = L),
      (e[38] = R),
      (e[39] = z))
    : (z = e[39]);
  let B, V;
  e[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, $.jsx)(c, { ...r.questionNotifications })),
      (V = (0, $.jsx)(c, {
        id: `notifications.questions.description`,
        defaultMessage: `Show alerts when input is needed to continue`,
        description: `Description for question notification toggle`,
      })),
      (e[40] = B),
      (e[41] = V))
    : ((B = e[40]), (V = e[41]));
  let H = s ?? !0,
    U;
  e[42] === t
    ? (U = e[43])
    : ((U = (e) => {
        ee(t, E.questionsEnabled, e);
      }),
      (e[42] = t),
      (e[43] = U));
  let G;
  e[44] === n
    ? (G = e[45])
    : ((G = n.formatMessage(r.questionNotifications)), (e[44] = n), (e[45] = G));
  let K;
  e[46] !== H || e[47] !== U || e[48] !== G
    ? ((K = (0, $.jsx)(W, {
        label: B,
        description: V,
        control: (0, $.jsx)(y, { checked: H, onChange: U, ariaLabel: G }),
      })),
      (e[46] = H),
      (e[47] = U),
      (e[48] = G),
      (e[49] = K))
    : (K = e[49]);
  let q;
  e[50] === Symbol.for(`react.memo_cache_sentinel`) ? ((q = null), (e[50] = q)) : (q = e[50]);
  let J;
  return (
    e[51] !== N || e[52] !== z || e[53] !== K
      ? ((J = (0, $.jsxs)($.Fragment, { children: [N, z, K, q] })),
        (e[51] = N),
        (e[52] = z),
        (e[53] = K),
        (e[54] = J))
      : (J = e[54]),
    J
  );
}
var me,
  $,
  he = e(() => {
    ((me = V()),
      _(),
      o(),
      T(),
      x(),
      M(),
      n(),
      p(),
      H(),
      U(),
      A(),
      L(),
      S(),
      j(),
      O(),
      d(),
      de(),
      ($ = R()));
  });
export { fe as n, he as r, pe as t };
//# sourceMappingURL=notifications-settings-dfc383906b35.js.map
