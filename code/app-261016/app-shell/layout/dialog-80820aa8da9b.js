import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as n,
  $St as r,
  $i as i,
  $st as a,
  AV as o,
  DB as s,
  FBt as c,
  FK as l,
  HO as u,
  IO as d,
  JO as f,
  LNt as p,
  OB as ee,
  PBt as m,
  Qst as te,
  TY as h,
  WO as ne,
  XOt as g,
  Y3 as _,
  Z3 as v,
  ZSt as y,
  ea as re,
  ew as b,
  iFt as x,
  nCt as ie,
  okt as ae,
  qH as oe,
  qO as se,
  sG as ce,
  sH as le,
  sw as S,
  tkt as C,
  uw as w,
  vW as ue,
  xY as de,
  zO as fe,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as T,
  Air as E,
  BRr as D,
  HAr as O,
  IAr as k,
  MPr as A,
  Mir as j,
  NPr as M,
  QLn as pe,
  hen as me,
  pen as N,
  rJt as P,
  sJt as he,
  wLr as F,
  zRr as I,
} from "./app-initial-ad16eaadf81f.js";
import { As as L, Ms as R } from "./app-primary-3e00728c2a4c.js";
import { n as z, t as B } from "./library-file-metadata-fa02ef64bd6d.js";
import {
  c as V,
  d as H,
  l as U,
  n as ge,
  o as _e,
  r as W,
  s as G,
  u as ve,
} from "./automation-frequency-section-caeb4180ce42.js";
import { n as ye, t as K } from "./PlatformUIKitProvider-8a854188dc59.js";
import { n as be, r as q, t as xe } from "./time-zone-options-f198c7e96682.js";
import { c as Se, d as J, o as Ce, u as Y } from "./types-b46e00871847.js";
import { c as X, n as we, s as Te, t as Z } from "./session-d8ffefe97245.js";
function Ee(e) {
  let t = new Intl.DateTimeFormat(`sv-SE`, { timeZone: e }).format(new Date());
  return (new Date(`${t}T00:00:00Z`).getUTCDay() + 6) % 7;
}
function De(e) {
  let t = (0, je.c)(136),
    { value: r, onChange: i, disabled: a } = e,
    c = ae(),
    l = me(),
    u = r.repeat,
    d;
  t[0] !== u?.isDaily || t[1] !== u?.monthly || t[2] !== u?.weekly
    ? ((d = `never`),
      u?.isDaily ? (d = `daily`) : u?.weekly == null ? u?.monthly != null && (d = `monthly`) : (d = `weekly`),
      (t[0] = u?.isDaily),
      (t[1] = u?.monthly),
      (t[2] = u?.weekly),
      (t[3] = d))
    : (d = t[3]);
  let f;
  t[4] === c
    ? (f = t[5])
    : ((f = c.formatMessage({
        id: `multiplayer.liveNotes.repeat`,
        defaultMessage: `Repeat`,
        description: `Label for how often a Live Note repeats`,
      })),
      (t[4] = c),
      (t[5] = f));
  let p = f,
    ee;
  t[6] === c
    ? (ee = t[7])
    : ((ee = c.formatMessage({
        id: `multiplayer.liveNotes.every`,
        defaultMessage: `Every`,
        description: `Label for the weekday or day of the month on which a Live Note repeats`,
      })),
      (t[6] = c),
      (t[7] = ee));
  let m = ee,
    te;
  t[8] === c
    ? (te = t[9])
    : ((te = c.formatMessage({
        id: `multiplayer.liveNotes.date`,
        defaultMessage: `Date`,
        description: `Date on which a Live Note runs without repeating`,
      })),
      (t[8] = c),
      (t[9] = te));
  let h = te,
    ne;
  t[10] === c
    ? (ne = t[11])
    : ((ne = c.formatMessage({
        id: `multiplayer.liveNotes.timeZone`,
        defaultMessage: `Time zone`,
        description: `Time zone used to interpret this Live Note's dates and clock times`,
      })),
      (t[10] = c),
      (t[11] = ne));
  let g = ne,
    _;
  t[12] === c
    ? (_ = t[13])
    : ((_ = c.formatMessage({
        id: `multiplayer.liveNotes.endRepeat`,
        defaultMessage: `End repeat`,
        description: `Label for when a Live Note schedule stops repeating`,
      })),
      (t[12] = c),
      (t[13] = _));
  let v = _,
    y;
  t[14] === c
    ? (y = t[15])
    : ((y = c.formatMessage({
        id: `multiplayer.liveNotes.doesNotRepeat`,
        defaultMessage: `Does not repeat`,
        description: `Live Note schedule option with no recurrence`,
      })),
      (t[14] = c),
      (t[15] = y));
  let b;
  t[16] === y ? (b = t[17]) : ((b = { id: `never`, label: y }), (t[16] = y), (t[17] = b));
  let x;
  t[18] === c
    ? (x = t[19])
    : ((x = c.formatMessage({
        id: `multiplayer.liveNotes.daily`,
        defaultMessage: `Daily`,
        description: `Live Note repeat frequency of every day`,
      })),
      (t[18] = c),
      (t[19] = x));
  let ie;
  t[20] === x ? (ie = t[21]) : ((ie = { id: `daily`, label: x }), (t[20] = x), (t[21] = ie));
  let se;
  t[22] === c
    ? (se = t[23])
    : ((se = c.formatMessage({
        id: `multiplayer.liveNotes.weekly`,
        defaultMessage: `Weekly`,
        description: `Live Note repeat frequency of every week`,
      })),
      (t[22] = c),
      (t[23] = se));
  let ce;
  t[24] === se ? (ce = t[25]) : ((ce = { id: `weekly`, label: se }), (t[24] = se), (t[25] = ce));
  let w;
  t[26] === c
    ? (w = t[27])
    : ((w = c.formatMessage({
        id: `multiplayer.liveNotes.monthly`,
        defaultMessage: `Monthly`,
        description: `Live Note repeat frequency of every month`,
      })),
      (t[26] = c),
      (t[27] = w));
  let de;
  t[28] === w ? (de = t[29]) : ((de = { id: `monthly`, label: w }), (t[28] = w), (t[29] = de));
  let fe;
  t[30] !== ce || t[31] !== de || t[32] !== b || t[33] !== ie
    ? ((fe = [b, ie, ce, de]), (t[30] = ce), (t[31] = de), (t[32] = b), (t[33] = ie), (t[34] = fe))
    : (fe = t[34]);
  let T = fe,
    E;
  t[35] === c
    ? (E = t[36])
    : ((E = Array.from({ length: 31 }, (e, t) => ({ id: String(t + 1), label: c.formatNumber(t + 1) }))),
      (t[35] = c),
      (t[36] = E));
  let D = E,
    O;
  t[37] === c
    ? (O = t[38])
    : ((O = c.formatMessage({
        id: `multiplayer.liveNotes.never`,
        defaultMessage: `Never`,
        description: `Option for a Live Note that has no end date`,
      })),
      (t[37] = c),
      (t[38] = O));
  let k;
  t[39] === O ? (k = t[40]) : ((k = { id: `never`, label: O }), (t[39] = O), (t[40] = k));
  let j;
  t[41] === c
    ? (j = t[42])
    : ((j = c.formatMessage({
        id: `multiplayer.liveNotes.onDate`,
        defaultMessage: `On date`,
        description: `Option for a Live Note that stops after a chosen date`,
      })),
      (t[41] = c),
      (t[42] = j));
  let M;
  t[43] === j ? (M = t[44]) : ((M = { id: `date`, label: j }), (t[43] = j), (t[44] = M));
  let pe;
  t[45] !== k || t[46] !== M ? ((pe = [k, M]), (t[45] = k), (t[46] = M), (t[47] = pe)) : (pe = t[47]);
  let N = pe,
    P;
  t[48] === Symbol.for(`react.memo_cache_sentinel`) ? ((P = (0, Q.jsx)(o, {})), (t[48] = P)) : (P = t[48]);
  let he =
      T.find((e) => {
        let { id: t } = e;
        return t === d;
      })?.label ?? ``,
    F;
  t[49] !== d || t[50] !== i || t[51] !== u || t[52] !== r
    ? ((F = (e) => {
        if (e === d) return;
        if (e === `never`) {
          let { repeat: e, ...t } = r;
          i({ ...t, time: { ...r.time, localDate: A(r.time.timeZone) } });
          return;
        }
        let t = { ...r.time };
        u ?? delete t.localDate;
        let { weekly: n, monthly: a, ...o } = u ?? { isDaily: !1 };
        i(
          e === `weekly`
            ? { ...r, time: t, repeat: { ...o, isDaily: !1, weekly: [Ee(r.time.timeZone)] } }
            : e === `monthly`
              ? { ...r, time: t, repeat: { ...o, isDaily: !1, monthly: 1 } }
              : { ...r, time: t, repeat: { ...o, isDaily: !0 } },
        );
      }),
      (t[49] = d),
      (t[50] = i),
      (t[51] = u),
      (t[52] = r),
      (t[53] = F))
    : (F = t[53]);
  let I;
  t[54] !== a || t[55] !== d || t[56] !== T || t[57] !== p || t[58] !== he || t[59] !== F
    ? ((I = (0, Q.jsx)(V, {
        appearance: `form`,
        disabled: a,
        ariaLabel: p,
        options: T,
        selectedId: d,
        selectedLabel: he,
        onSelect: F,
      })),
      (t[54] = a),
      (t[55] = d),
      (t[56] = T),
      (t[57] = p),
      (t[58] = he),
      (t[59] = F),
      (t[60] = I))
    : (I = t[60]);
  let L;
  t[61] !== p || t[62] !== I
    ? ((L = (0, Q.jsx)(S, { size: `compact`, labelWeight: `normal`, icon: P, label: p, control: I })),
      (t[61] = p),
      (t[62] = I),
      (t[63] = L))
    : (L = t[63]);
  let R;
  t[64] !== h || t[65] !== i || t[66] !== u || t[67] !== r
    ? ((R =
        u == null &&
        r.time.localDate != null &&
        (0, Q.jsx)(S, {
          size: `compact`,
          labelWeight: `normal`,
          icon: (0, Q.jsx)(le, {}),
          label: h,
          control: (0, Q.jsx)(ge, {
            appearance: `form`,
            ariaLabel: h,
            timeZone: r.time.timeZone,
            value: r.time.localDate,
            onChange: (e) => i({ ...r, time: { ...r.time, localDate: e } }),
          }),
        })),
      (t[64] = h),
      (t[65] = i),
      (t[66] = u),
      (t[67] = r),
      (t[68] = R))
    : (R = t[68]);
  let z;
  t[69] !== m || t[70] !== i || t[71] !== u || t[72] !== r
    ? ((z =
        u?.weekly != null &&
        (0, Q.jsx)(S, {
          size: `compact`,
          labelWeight: `normal`,
          icon: (0, Q.jsx)(le, {}),
          label: m,
          control: (0, Q.jsx)(_e, {
            appearance: `form`,
            value: Me.filter((e) => {
              let { day: t } = e;
              return u.weekly?.includes(t);
            }).map(Ae),
            onChange: (e) =>
              i({
                ...r,
                repeat: {
                  ...u,
                  weekly: Me.filter((t) => {
                    let { rruleDay: n } = t;
                    return e.includes(n);
                  }).map(ke),
                },
              }),
          }),
        })),
      (t[69] = m),
      (t[70] = i),
      (t[71] = u),
      (t[72] = r),
      (t[73] = z))
    : (z = t[73]);
  let B;
  t[74] !== a || t[75] !== m || t[76] !== c || t[77] !== D || t[78] !== i || t[79] !== u || t[80] !== r
    ? ((B =
        u?.monthly != null &&
        (0, Q.jsx)(S, {
          size: `compact`,
          labelWeight: `normal`,
          icon: (0, Q.jsx)(le, {}),
          label: m,
          control: (0, Q.jsx)(V, {
            appearance: `form`,
            disabled: a,
            ariaLabel: m,
            options: D,
            selectedId: String(u.monthly),
            selectedLabel: c.formatNumber(u.monthly),
            onSelect: (e) => i({ ...r, repeat: { ...u, monthly: Number(e) } }),
          }),
        })),
      (t[74] = a),
      (t[75] = m),
      (t[76] = c),
      (t[77] = D),
      (t[78] = i),
      (t[79] = u),
      (t[80] = r),
      (t[81] = B))
    : (B = t[81]);
  let H, U;
  t[82] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, Q.jsx)(oe, {})),
      (U = (0, Q.jsx)(C, {
        id: `multiplayer.liveNotes.time`,
        defaultMessage: `Time`,
        description: `Label for the scheduled time of a Live Note`,
      })),
      (t[82] = H),
      (t[83] = U))
    : ((H = t[82]), (U = t[83]));
  let W;
  t[84] === r.time.localTime
    ? (W = t[85])
    : ((W = r.time.localTime.slice(0, 5)), (t[84] = r.time.localTime), (t[85] = W));
  let G;
  t[86] !== i || t[87] !== r
    ? ((G = (e) => i({ ...r, time: { ...r.time, localTime: e } })), (t[86] = i), (t[87] = r), (t[88] = G))
    : (G = t[88]);
  let ye;
  t[89] !== W || t[90] !== G
    ? ((ye = (0, Q.jsx)(S, {
        size: `compact`,
        labelWeight: `normal`,
        icon: H,
        label: U,
        control: (0, Q.jsx)(ve, { appearance: `form`, value: W, onChange: G }),
      })),
      (t[89] = W),
      (t[90] = G),
      (t[91] = ye))
    : (ye = t[91]);
  let K;
  t[92] === Symbol.for(`react.memo_cache_sentinel`) ? ((K = (0, Q.jsx)(ue, {})), (t[92] = K)) : (K = t[92]);
  let q;
  t[93] !== c || t[94] !== l || t[95] !== r.time.timeZone
    ? ((q = be(c, r.time.timeZone, l).map(Oe)),
      (t[93] = c),
      (t[94] = l),
      (t[95] = r.time.timeZone),
      (t[96] = q))
    : (q = t[96]);
  let Se = r.time.timeZone,
    J;
  t[97] !== c || t[98] !== l || t[99] !== r.time.timeZone
    ? ((J = xe(c, r.time.timeZone, l)), (t[97] = c), (t[98] = l), (t[99] = r.time.timeZone), (t[100] = J))
    : (J = t[100]);
  let Ce;
  t[101] !== i || t[102] !== u || t[103] !== r
    ? ((Ce = (e) =>
        i({
          ...r,
          time: { ...r.time, timeZone: e },
          repeat: u?.endAt == null ? u : { ...u, endAt: { ...u.endAt, timeZone: e } },
        })),
      (t[101] = i),
      (t[102] = u),
      (t[103] = r),
      (t[104] = Ce))
    : (Ce = t[104]);
  let Y;
  t[105] !== a || t[106] !== q || t[107] !== J || t[108] !== Ce || t[109] !== g || t[110] !== r.time.timeZone
    ? ((Y = (0, Q.jsx)(V, {
        appearance: `form`,
        disabled: a,
        ariaLabel: g,
        options: q,
        selectedId: Se,
        selectedLabel: J,
        onSelect: Ce,
      })),
      (t[105] = a),
      (t[106] = q),
      (t[107] = J),
      (t[108] = Ce),
      (t[109] = g),
      (t[110] = r.time.timeZone),
      (t[111] = Y))
    : (Y = t[111]);
  let X;
  t[112] !== Y || t[113] !== g
    ? ((X = (0, Q.jsx)(S, { size: `compact`, labelWeight: `normal`, icon: K, label: g, control: Y })),
      (t[112] = Y),
      (t[113] = g),
      (t[114] = X))
    : (X = t[114]);
  let we;
  t[115] !== a || t[116] !== v || t[117] !== N || t[118] !== i || t[119] !== u || t[120] !== r
    ? ((we =
        u != null &&
        (0, Q.jsx)(S, {
          size: `compact`,
          labelWeight: `normal`,
          icon: (0, Q.jsx)(s, { asset: re }),
          label: v,
          control: (0, Q.jsx)(V, {
            appearance: `form`,
            disabled: a,
            ariaLabel: v,
            options: N,
            selectedId: u.endAt == null ? `never` : `date`,
            selectedLabel: N[u.endAt == null ? 0 : 1].label,
            onSelect: (e) => {
              if (e === `never`) {
                let { endAt: e, ...t } = u;
                i({ ...r, repeat: t });
              } else {
                let e = new Intl.DateTimeFormat(`en-CA`, {
                  timeZone: r.time.timeZone,
                  year: `numeric`,
                  month: `2-digit`,
                  day: `2-digit`,
                }).format(new Date());
                i({
                  ...r,
                  repeat: { ...u, endAt: { localDate: e, localTime: `23:59:59`, timeZone: r.time.timeZone } },
                });
              }
            },
          }),
        })),
      (t[115] = a),
      (t[116] = v),
      (t[117] = N),
      (t[118] = i),
      (t[119] = u),
      (t[120] = r),
      (t[121] = we))
    : (we = t[121]);
  let Te;
  t[122] !== v || t[123] !== i || t[124] !== u || t[125] !== r
    ? ((Te =
        u?.endAt?.localDate != null &&
        (0, Q.jsx)(S, {
          size: `compact`,
          labelWeight: `normal`,
          label: (0, Q.jsx)(C, {
            id: `multiplayer.liveNotes.endDate`,
            defaultMessage: `End date`,
            description: `Label for the last date on which a Live Note may repeat`,
          }),
          control: (0, Q.jsx)(ge, {
            appearance: `form`,
            ariaLabel: v,
            timeZone: r.time.timeZone,
            value: u.endAt.localDate,
            onChange: (e) =>
              i({
                ...r,
                repeat: {
                  ...u,
                  endAt: { ...u.endAt, localDate: e, localTime: `23:59:59`, timeZone: r.time.timeZone },
                },
              }),
          }),
        })),
      (t[122] = v),
      (t[123] = i),
      (t[124] = u),
      (t[125] = r),
      (t[126] = Te))
    : (Te = t[126]);
  let Z;
  return (
    t[127] !== L ||
    t[128] !== R ||
    t[129] !== z ||
    t[130] !== B ||
    t[131] !== ye ||
    t[132] !== X ||
    t[133] !== we ||
    t[134] !== Te
      ? ((Z = (0, Q.jsxs)(n, { children: [L, R, z, B, ye, X, we, Te] })),
        (t[127] = L),
        (t[128] = R),
        (t[129] = z),
        (t[130] = B),
        (t[131] = ye),
        (t[132] = X),
        (t[133] = we),
        (t[134] = Te),
        (t[135] = Z))
      : (Z = t[135]),
    Z
  );
}
function Oe(e) {
  let { value: t, label: n } = e;
  return { id: t, label: n };
}
function ke(e) {
  let { day: t } = e;
  return t;
}
function Ae(e) {
  let { rruleDay: t } = e;
  return t;
}
var je, Q, Me;
function Ne() {
  return (Ne = e(() => {
    ((je = m()),
      i(),
      J(),
      g(),
      W(),
      H(),
      U(),
      G(),
      M(),
      q(),
      ee(),
      h(),
      N(),
      w(),
      b(),
      (Q = p()),
      (Me = [
        { day: Y.MONDAY, rruleDay: `MO` },
        { day: Y.TUESDAY, rruleDay: `TU` },
        { day: Y.WEDNESDAY, rruleDay: `WE` },
        { day: Y.THURSDAY, rruleDay: `TH` },
        { day: Y.FRIDAY, rruleDay: `FR` },
        { day: Y.SATURDAY, rruleDay: `SA` },
        { day: Y.SUNDAY, rruleDay: `SU` },
      ]));
  }))();
}
async function Pe(e, { session: t, documentId: n, title: r, prompt: i, signal: a }) {
  let o = e.get(I),
    s = e.get(D);
  if (
    o == null ||
    s == null ||
    !i.trim() ||
    (t.account != null && (t.account.accountId !== o || t.account.userId !== s))
  )
    return !1;
  let c = new AbortController(),
    l = AbortSignal.any([a, t.signal, c.signal]),
    u = e.watch((e) => {
      (e.get(I) !== o || e.get(D) !== s) && c.abort();
    });
  try {
    await t.save(l);
    let a = await B(n, o, l);
    l.throwIfAborted();
    let s;
    if (`file_name` in a) s = a;
    else {
      if (a.kind !== `file`) return !1;
      if (a.file_id != null || (a.access_kind !== `shared` && a.shared_by == null)) {
        if (a.state == null || a.library_file_category == null) return !1;
        s = {
          ...a,
          file_id: a.file_id ?? a.id,
          file_name: a.name,
          mime_type: a.mime_type ?? null,
          state: a.state,
          library_file_category: a.library_file_category,
          record_creation_time: a.record_creation_time ?? null,
          file_upload_time: a.file_upload_time ?? null,
        };
      }
    }
    let c = P(e, []);
    if (
      s != null &&
      (
        await L(e, c, [s], {
          libraryEntrypoint: `library_start_chat`,
          isSelectionCurrent: () => !l.aborted,
          signal: l,
        })
      ).length === 0
    )
      return !1;
    l.throwIfAborted();
    let u = {
        title: r,
        entrypoint: `library_start_chat`,
        fileId: s?.file_id ?? ``,
        libraryFileId: n,
        libraryArtifactType: a.library_artifact_type ?? `writing_block`,
        mimeType: a.mime_type ?? `text/markdown`,
      },
      d = {
        codexAppMode: `chat`,
        initialChatGptConversationId: c,
        focusComposerNonce: Date.now(),
        prefillPrompt: i,
        prefillLibraryFiles: [u],
      },
      f = e.get(E).prepareNavigation(`/`, { state: d });
    return f != null && (O(e, `chat`), await f(), !0);
  } catch (e) {
    if (l.aborted) return !1;
    throw e;
  } finally {
    u();
  }
}
function Fe() {
  return (Fe = e(() => {
    (j(), F(), he(), k(), z(), R());
  }))();
}
function Ie(e) {
  let t = (0, Re.c)(119),
    { session: n, initialTask: i, documentId: a, title: o, onClose: s } = e,
    c = r(te),
    u = ae(),
    f = ie(we, n)?.find((e) => {
      let { id: t } = e;
      return t === i?.id;
    }),
    [p, ee] = (0, Be.useState)(i),
    m;
  t[0] === i
    ? (m = t[1])
    : ((m = () =>
        i ?? {
          id: crypto.randomUUID(),
          prompt: ``,
          schedule: {
            time: { localTime: `09:00`, timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone },
            repeat: { isDaily: !1, weekly: [Ee(Intl.DateTimeFormat().resolvedOptions().timeZone)] },
          },
        }),
      (t[0] = i),
      (t[1] = m));
  let [h, g] = (0, Be.useState)(m),
    [v, y] = (0, Be.useState)(null),
    [re, b] = (0, Be.useState)(!1),
    [x, oe] = (0, Be.useState)(!1),
    le = (0, Be.useRef)(null),
    S,
    w;
  (t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = () => () => le.current?.abort()), (w = []), (t[2] = S), (t[3] = w))
    : ((S = t[2]), (w = t[3])),
    (0, Be.useEffect)(S, w));
  let ue;
  t[4] === s
    ? (ue = t[5])
    : ((ue = () => {
        (le.current?.abort(), s());
      }),
      (t[4] = s),
      (t[5] = ue));
  let T = ue,
    E = i != null && f == null,
    D = i != null && !E && !(0, ze.default)(f, p),
    O = (0, Be.useSyncExternalStore)(n.subscribeState, n.getSnapshot, Le),
    k;
  t[6] !== D || t[7] !== E || t[8] !== x || t[9] !== n.initialized || t[10] !== O
    ? ((k = Te(O, n.initialized) === `editable` && !E && !D && !x),
      (t[6] = D),
      (t[7] = E),
      (t[8] = x),
      (t[9] = n.initialized),
      (t[10] = O),
      (t[11] = k))
    : (k = t[11]);
  let A = k,
    j;
  t[12] === h.prompt
    ? (j = t[13])
    : ((j = h.prompt.trim().length > 0 && Array.from(h.prompt).length <= 1e4),
      (t[12] = h.prompt),
      (t[13] = j));
  let M = j,
    me;
  t[14] !== p ||
  t[15] !== i?.id ||
  t[16] !== s ||
  t[17] !== E ||
  t[18] !== x ||
  t[19] !== n.editor ||
  t[20] !== n.state?.canEdit ||
  t[21] !== b
    ? ((me = function (e) {
        let t = n.editor.snapshot(),
          r = t.document?.ast.attrs?.liveNotes?.find((e) => {
            let { id: t } = e;
            return t === i?.id;
          });
        if (!n.state?.canEdit || E || x || !(0, ze.default)(r, p)) {
          b(!0);
          return;
        }
        let a = crypto.randomUUID();
        n.editor.applyLocalEdits({ baseRevision: t.revision, editId: a, undoGroup: a, operations: [e] })
          .status === Se.REJECTED
          ? b(!0)
          : s();
      }),
      (t[14] = p),
      (t[15] = i?.id),
      (t[16] = s),
      (t[17] = E),
      (t[18] = x),
      (t[19] = n.editor),
      (t[20] = n.state?.canEdit),
      (t[21] = b),
      (t[22] = me))
    : (me = t[22]);
  let N = me,
    P;
  t[23] !== a ||
  t[24] !== i?.id ||
  t[25] !== s ||
  t[26] !== x ||
  t[27] !== c ||
  t[28] !== n ||
  t[29] !== b ||
  t[30] !== oe ||
  t[31] !== o
    ? ((P = async function () {
        if (n.signal.aborted || a == null || x) return;
        let e = n.editor.snapshot().document?.ast.attrs?.liveNotes?.find((e) => {
          let { id: t } = e;
          return t === i?.id;
        });
        if (e == null) return;
        let t = new AbortController();
        ((le.current = t), oe(!0), b(!1));
        try {
          (await Pe(c, { session: n, documentId: a, title: o, prompt: e.prompt, signal: t.signal }))
            ? s()
            : b(!0);
        } catch {
          b(!0);
        }
        oe(!1);
      }),
      (t[23] = a),
      (t[24] = i?.id),
      (t[25] = s),
      (t[26] = x),
      (t[27] = c),
      (t[28] = n),
      (t[29] = b),
      (t[30] = oe),
      (t[31] = o),
      (t[32] = P))
    : (P = t[32]);
  let he = P,
    F = v ?? void 0,
    I;
  t[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = { shouldStopPointerDownPropagation: !1 }), (t[33] = I))
    : (I = t[33]);
  let L;
  t[34] === T
    ? (L = t[35])
    : ((L = (e) => {
        e || T();
      }),
      (t[34] = T),
      (t[35] = L));
  let R;
  t[36] !== N || t[37] !== h || t[38] !== A || t[39] !== M
    ? ((R = (e) => {
        (e.preventDefault(), A && M && N({ kind: Ce.UPSERT_LIVE_NOTE, upsertLiveNote: { liveNote: h } }));
      }),
      (t[36] = N),
      (t[37] = h),
      (t[38] = A),
      (t[39] = M),
      (t[40] = R))
    : (R = t[40]);
  let z;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, $.jsx)(se, {
        children: (0, $.jsxs)(`span`, {
          className: `flex items-center gap-2`,
          children: [
            (0, $.jsx)(ce, {}),
            (0, $.jsx)(C, {
              id: `multiplayer.liveNotes.title`,
              defaultMessage: `Live Note`,
              description: `Title of the dialog for a note's saved prompt and schedule`,
            }),
          ],
        }),
      })),
      (t[41] = z))
    : (z = t[41]);
  let B = O == null || f == null || a == null || x,
    V;
  t[42] === he ? (V = t[43]) : ((V = () => void he()), (t[42] = he), (t[43] = V));
  let H, U;
  t[44] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, $.jsx)(l, {})),
      (U = (0, $.jsx)(C, {
        id: `multiplayer.liveNotes.runSavedPrompt`,
        defaultMessage: `Run saved prompt`,
        description: `Open a new chat with this Live Note's saved prompt and the note attached`,
      })),
      (t[44] = H),
      (t[45] = U))
    : ((H = t[44]), (U = t[45]));
  let ge;
  t[46] !== B || t[47] !== V
    ? ((ge = (0, $.jsxs)(_, {
        color: `secondary`,
        size: `dialogAction`,
        type: `button`,
        disabled: B,
        onClick: V,
        children: [H, U],
      })),
      (t[46] = B),
      (t[47] = V),
      (t[48] = ge))
    : (ge = t[48]);
  let _e = !A || !M,
    W;
  t[49] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, $.jsx)(C, {
        id: `multiplayer.liveNotes.save`,
        defaultMessage: `Save`,
        description: `Save a Live Note prompt and schedule to the shared note`,
      })),
      (t[49] = W))
    : (W = t[49]);
  let G;
  t[50] === _e
    ? (G = t[51])
    : ((G = (0, $.jsx)(_, { size: `dialogAction`, type: `submit`, disabled: _e, children: W })),
      (t[50] = _e),
      (t[51] = G));
  let ve;
  t[52] === u
    ? (ve = t[53])
    : ((ve = u.formatMessage({
        id: `multiplayer.liveNotes.close`,
        defaultMessage: `Close Live Note`,
        description: `Close the Live Note dialog without saving edits`,
      })),
      (t[52] = u),
      (t[53] = ve));
  let K;
  t[54] === Symbol.for(`react.memo_cache_sentinel`) ? ((K = (0, $.jsx)(de, {})), (t[54] = K)) : (K = t[54]);
  let be;
  t[55] !== T || t[56] !== ve
    ? ((be = (0, $.jsx)(_, {
        color: `ghost`,
        size: `iconCircleLg`,
        type: `button`,
        "aria-label": ve,
        onClick: T,
        children: K,
      })),
      (t[55] = T),
      (t[56] = ve),
      (t[57] = be))
    : (be = t[57]);
  let q;
  t[58] !== ge || t[59] !== G || t[60] !== be
    ? ((q = (0, $.jsx)(fe, {
        children: (0, $.jsxs)(`div`, {
          className: `flex flex-wrap items-center justify-between gap-3 select-none`,
          children: [z, (0, $.jsxs)(`div`, { className: `flex items-center gap-2`, children: [ge, G, be] })],
        }),
      })),
      (t[58] = ge),
      (t[59] = G),
      (t[60] = be),
      (t[61] = q))
    : (q = t[61]);
  let xe = !A,
    J = h.prompt,
    Y;
  t[62] === u
    ? (Y = t[63])
    : ((Y = u.formatMessage({
        id: `multiplayer.liveNotes.prompt`,
        defaultMessage: `Instructions`,
        description: `Accessible label for the Live Note prompt composer`,
      })),
      (t[62] = u),
      (t[63] = Y));
  let X;
  t[64] === u
    ? (X = t[65])
    : ((X = u.formatMessage({
        id: `multiplayer.liveNotes.placeholder`,
        defaultMessage: `What should ChatGPT do with this note?`,
        description: `Placeholder in the Live Note prompt composer`,
      })),
      (t[64] = u),
      (t[65] = X));
  let Z;
  t[66] !== h || t[67] !== g
    ? ((Z = (e) => g({ ...h, prompt: e.target.value })), (t[66] = h), (t[67] = g), (t[68] = Z))
    : (Z = t[68]);
  let Oe;
  t[69] !== h.prompt || t[70] !== Y || t[71] !== X || t[72] !== Z
    ? ((Oe = (0, $.jsx)(pe, {
        autoFocus: !0,
        name: `prompt`,
        rows: 4,
        variant: `rounded`,
        value: J,
        "aria-label": Y,
        placeholder: X,
        onChange: Z,
      })),
      (t[69] = h.prompt),
      (t[70] = Y),
      (t[71] = X),
      (t[72] = Z),
      (t[73] = Oe))
    : (Oe = t[73]);
  let ke = !A,
    Ae;
  t[74] !== h || t[75] !== A || t[76] !== g
    ? ((Ae = (e) => {
        A && g({ ...h, schedule: e });
      }),
      (t[74] = h),
      (t[75] = A),
      (t[76] = g),
      (t[77] = Ae))
    : (Ae = t[77]);
  let je;
  t[78] !== h.schedule || t[79] !== ke || t[80] !== Ae
    ? ((je = (0, $.jsx)(De, { disabled: ke, value: h.schedule, onChange: Ae })),
      (t[78] = h.schedule),
      (t[79] = ke),
      (t[80] = Ae),
      (t[81] = je))
    : (je = t[81]);
  let Q;
  t[82] !== xe || t[83] !== Oe || t[84] !== je
    ? ((Q = (0, $.jsxs)(`fieldset`, {
        disabled: xe,
        className: `flex min-w-0 flex-col gap-3`,
        children: [Oe, je],
      })),
      (t[82] = xe),
      (t[83] = Oe),
      (t[84] = je),
      (t[85] = Q))
    : (Q = t[85]);
  let Me;
  t[86] === E
    ? (Me = t[87])
    : ((Me =
        E &&
        (0, $.jsx)(`p`, {
          role: `status`,
          className: `mt-3 text-sm text-secondary`,
          children: (0, $.jsx)(C, {
            id: `multiplayer.liveNotes.removed`,
            defaultMessage: `This Live Note was removed by another editor`,
            description: `Status when a collaborator removes the Live Note currently being edited`,
          }),
        })),
      (t[86] = E),
      (t[87] = Me));
  let Ne;
  t[88] !== D || t[89] !== f || t[90] !== ee || t[91] !== g || t[92] !== b
    ? ((Ne =
        D &&
        (0, $.jsxs)(`div`, {
          className: `mt-3 flex flex-col gap-2`,
          children: [
            (0, $.jsx)(`p`, {
              role: `status`,
              className: `text-sm text-secondary`,
              children: (0, $.jsx)(C, {
                id: `multiplayer.liveNotes.changed`,
                defaultMessage: `This Live Note changed. Reload to see the latest version`,
                description: `Status when a collaborator changes a Live Note while its editor is open, requiring a reload before saving`,
              }),
            }),
            (0, $.jsx)(_, {
              color: `secondary`,
              size: `dialogAction`,
              type: `button`,
              onClick: () => {
                f != null && (ee(f), g(f), b(!1));
              },
              children: (0, $.jsx)(C, {
                id: `multiplayer.liveNotes.reload`,
                defaultMessage: `Reload`,
                description: `Replace the local Live Note draft with the latest version saved by a collaborator`,
              }),
            }),
          ],
        })),
      (t[88] = D),
      (t[89] = f),
      (t[90] = ee),
      (t[91] = g),
      (t[92] = b),
      (t[93] = Ne))
    : (Ne = t[93]);
  let Fe;
  t[94] === re
    ? (Fe = t[95])
    : ((Fe =
        re &&
        (0, $.jsx)(`p`, {
          role: `alert`,
          className: `mt-3 text-sm text-danger`,
          children: (0, $.jsx)(C, {
            id: `multiplayer.liveNotes.failed`,
            defaultMessage: `Couldn’t complete this action. Try again`,
            description: `Error after a Live Note edit is rejected or its chat cannot be opened`,
          }),
        })),
      (t[94] = re),
      (t[95] = Fe));
  let Ie;
  t[96] !== N || t[97] !== A || t[98] !== i
    ? ((Ie =
        i != null &&
        (0, $.jsx)(_, {
          className: `mt-3 w-full`,
          color: `dangerOutline`,
          size: `detailAction`,
          type: `button`,
          disabled: !A,
          onClick: () => N({ kind: Ce.REMOVE_LIVE_NOTE, removeLiveNote: { id: i.id } }),
          children: (0, $.jsx)(C, {
            id: `multiplayer.liveNotes.remove`,
            defaultMessage: `Remove Live Note`,
            description: `Remove this saved prompt and schedule from the shared note`,
          }),
        })),
      (t[96] = N),
      (t[97] = A),
      (t[98] = i),
      (t[99] = Ie))
    : (Ie = t[99]);
  let Ve;
  t[100] !== Q || t[101] !== Me || t[102] !== Ne || t[103] !== Fe || t[104] !== Ie
    ? ((Ve = (0, $.jsxs)(fe, { children: [Q, Me, Ne, Fe, Ie] })),
      (t[100] = Q),
      (t[101] = Me),
      (t[102] = Ne),
      (t[103] = Fe),
      (t[104] = Ie),
      (t[105] = Ve))
    : (Ve = t[105]);
  let He;
  t[106] !== R || t[107] !== q || t[108] !== Ve
    ? ((He = (0, $.jsxs)(d, { as: `form`, size: `viewport`, onSubmit: R, children: [q, Ve] })),
      (t[106] = R),
      (t[107] = q),
      (t[108] = Ve),
      (t[109] = He))
    : (He = t[109]);
  let Ue;
  t[110] === y ? (Ue = t[111]) : ((Ue = (0, $.jsx)(`div`, { ref: y })), (t[110] = y), (t[111] = Ue));
  let We;
  t[112] !== L || t[113] !== He || t[114] !== Ue
    ? ((We = (0, $.jsxs)(ne, {
        open: !0,
        contentOverflow: `visible`,
        contentProps: I,
        showDialogClose: !1,
        onOpenChange: L,
        size: `compact`,
        children: [He, Ue],
      })),
      (t[112] = L),
      (t[113] = He),
      (t[114] = Ue),
      (t[115] = We))
    : (We = t[115]);
  let Ge;
  return (
    t[116] !== F || t[117] !== We
      ? ((Ge = (0, $.jsx)(ye, { radixPortalContainer: F, children: We })),
        (t[116] = F),
        (t[117] = We),
        (t[118] = Ge))
      : (Ge = t[118]),
    Ge
  );
}
function Le() {
  return null;
}
var Re, ze, Be, $;
function Ve() {
  return (Ve = e(() => {
    ((Re = m()),
      J(),
      K(),
      X(),
      (ze = t(x(), 1)),
      y(),
      (Be = c()),
      g(),
      v(),
      f(),
      u(),
      h(),
      T(),
      a(),
      Z(),
      Ne(),
      Fe(),
      ($ = p()));
  }))();
}
Ve();
export { Ie as LiveNoteDialog };
//# sourceMappingURL=dialog-80820aa8da9b.js.map
