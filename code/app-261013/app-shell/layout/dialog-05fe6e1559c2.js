import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  Bi as r,
  Cot as i,
  HNt as a,
  IDt as o,
  Ixt as s,
  JC as c,
  Mz as l,
  Nz as u,
  PB as ee,
  Pxt as d,
  RG as te,
  SU as f,
  TJ as p,
  VDt as ne,
  ZV as re,
  _O as ie,
  dV as ae,
  dW as oe,
  fO as m,
  iw as h,
  jDt as se,
  lO as ce,
  mO as le,
  oO as ue,
  qC as de,
  t3 as g,
  tw as _,
  vO as v,
  vzt as y,
  wot as b,
  xJ as fe,
  xMt as x,
  yzt as S,
  zi as C,
  zxt as pe,
} from "./app-shared-bbfeca5e5737.js";
import {
  DPn as w,
  EPn as me,
  GMr as T,
  J5t as he,
  K5t as E,
  XMr as D,
  cAr as O,
  lAr as k,
  lIr as A,
  oXt as j,
  sIr as M,
  tNr as N,
  uXt as ge,
  vEr as P,
  wEr as F,
} from "./app-initial-5851df3f6cb1.js";
import { xs as I, ys as L } from "./app-primary-fe8a450b3b04.js";
import { n as R, t as z } from "./library-file-metadata-18e455d7ac7c.js";
import {
  c as B,
  d as V,
  l as H,
  n as _e,
  o as ve,
  r as U,
  s as W,
  u as ye,
} from "./automation-frequency-section-b14557c3b8fc.js";
import { n as be, t as G } from "./PlatformUIKitProvider-8f7f0fbad1d5.js";
import { n as xe, r as K, t as Se } from "./time-zone-options-5cb947c6c324.js";
import { c as Ce, d as q, o as we, u as J } from "./types-b46e00871847.js";
import { c as Y, n as Te, s as Ee, t as X } from "./session-12d6246f853b.js";
function De(e) {
  let t = new Intl.DateTimeFormat(`sv-SE`, { timeZone: e }).format(new Date());
  return (new Date(`${t}T00:00:00Z`).getUTCDay() + 6) % 7;
}
function Oe(e) {
  let t = (0, Me.c)(136),
    { value: n, onChange: i, disabled: a } = e,
    s = ne(),
    c = he(),
    u = n.repeat,
    d;
  t[0] !== u?.isDaily || t[1] !== u?.monthly || t[2] !== u?.weekly
    ? ((d = `never`),
      u?.isDaily ? (d = `daily`) : u?.weekly == null ? u?.monthly != null && (d = `monthly`) : (d = `weekly`),
      (t[0] = u?.isDaily),
      (t[1] = u?.monthly),
      (t[2] = u?.weekly),
      (t[3] = d))
    : (d = t[3]);
  let te;
  t[4] === s
    ? (te = t[5])
    : ((te = s.formatMessage({
        id: `multiplayer.liveNotes.repeat`,
        defaultMessage: `Repeat`,
        description: `Label for how often a Live Note repeats`,
      })),
      (t[4] = s),
      (t[5] = te));
  let p = te,
    ie;
  t[6] === s
    ? (ie = t[7])
    : ((ie = s.formatMessage({
        id: `multiplayer.liveNotes.every`,
        defaultMessage: `Every`,
        description: `Label for the weekday or day of the month on which a Live Note repeats`,
      })),
      (t[6] = s),
      (t[7] = ie));
  let oe = ie,
    m;
  t[8] === s
    ? (m = t[9])
    : ((m = s.formatMessage({
        id: `multiplayer.liveNotes.date`,
        defaultMessage: `Date`,
        description: `Date on which a Live Note runs without repeating`,
      })),
      (t[8] = s),
      (t[9] = m));
  let h = m,
    se;
  t[10] === s
    ? (se = t[11])
    : ((se = s.formatMessage({
        id: `multiplayer.liveNotes.timeZone`,
        defaultMessage: `Time zone`,
        description: `Time zone used to interpret this Live Note's dates and clock times`,
      })),
      (t[10] = s),
      (t[11] = se));
  let ce = se,
    le;
  t[12] === s
    ? (le = t[13])
    : ((le = s.formatMessage({
        id: `multiplayer.liveNotes.endRepeat`,
        defaultMessage: `End repeat`,
        description: `Label for when a Live Note schedule stops repeating`,
      })),
      (t[12] = s),
      (t[13] = le));
  let ue = le,
    g;
  t[14] === s
    ? (g = t[15])
    : ((g = s.formatMessage({
        id: `multiplayer.liveNotes.doesNotRepeat`,
        defaultMessage: `Does not repeat`,
        description: `Live Note schedule option with no recurrence`,
      })),
      (t[14] = s),
      (t[15] = g));
  let v;
  t[16] === g ? (v = t[17]) : ((v = { id: `never`, label: g }), (t[16] = g), (t[17] = v));
  let y;
  t[18] === s
    ? (y = t[19])
    : ((y = s.formatMessage({
        id: `multiplayer.liveNotes.daily`,
        defaultMessage: `Daily`,
        description: `Live Note repeat frequency of every day`,
      })),
      (t[18] = s),
      (t[19] = y));
  let b;
  t[20] === y ? (b = t[21]) : ((b = { id: `daily`, label: y }), (t[20] = y), (t[21] = b));
  let fe;
  t[22] === s
    ? (fe = t[23])
    : ((fe = s.formatMessage({
        id: `multiplayer.liveNotes.weekly`,
        defaultMessage: `Weekly`,
        description: `Live Note repeat frequency of every week`,
      })),
      (t[22] = s),
      (t[23] = fe));
  let x;
  t[24] === fe ? (x = t[25]) : ((x = { id: `weekly`, label: fe }), (t[24] = fe), (t[25] = x));
  let S;
  t[26] === s
    ? (S = t[27])
    : ((S = s.formatMessage({
        id: `multiplayer.liveNotes.monthly`,
        defaultMessage: `Monthly`,
        description: `Live Note repeat frequency of every month`,
      })),
      (t[26] = s),
      (t[27] = S));
  let C;
  t[28] === S ? (C = t[29]) : ((C = { id: `monthly`, label: S }), (t[28] = S), (t[29] = C));
  let pe;
  t[30] !== x || t[31] !== C || t[32] !== v || t[33] !== b
    ? ((pe = [v, b, x, C]), (t[30] = x), (t[31] = C), (t[32] = v), (t[33] = b), (t[34] = pe))
    : (pe = t[34]);
  let w = pe,
    me;
  t[35] === s
    ? (me = t[36])
    : ((me = Array.from({ length: 31 }, (e, t) => ({ id: String(t + 1), label: s.formatNumber(t + 1) }))),
      (t[35] = s),
      (t[36] = me));
  let T = me,
    E;
  t[37] === s
    ? (E = t[38])
    : ((E = s.formatMessage({
        id: `multiplayer.liveNotes.never`,
        defaultMessage: `Never`,
        description: `Option for a Live Note that has no end date`,
      })),
      (t[37] = s),
      (t[38] = E));
  let D;
  t[39] === E ? (D = t[40]) : ((D = { id: `never`, label: E }), (t[39] = E), (t[40] = D));
  let k;
  t[41] === s
    ? (k = t[42])
    : ((k = s.formatMessage({
        id: `multiplayer.liveNotes.onDate`,
        defaultMessage: `On date`,
        description: `Option for a Live Note that stops after a chosen date`,
      })),
      (t[41] = s),
      (t[42] = k));
  let A;
  t[43] === k ? (A = t[44]) : ((A = { id: `date`, label: k }), (t[43] = k), (t[44] = A));
  let j;
  t[45] !== D || t[46] !== A ? ((j = [D, A]), (t[45] = D), (t[46] = A), (t[47] = j)) : (j = t[47]);
  let M = j,
    N;
  t[48] === Symbol.for(`react.memo_cache_sentinel`) ? ((N = (0, Z.jsx)(ee, {})), (t[48] = N)) : (N = t[48]);
  let ge =
      w.find((e) => {
        let { id: t } = e;
        return t === d;
      })?.label ?? ``,
    P;
  t[49] !== d || t[50] !== i || t[51] !== u || t[52] !== n
    ? ((P = (e) => {
        if (e === d) return;
        if (e === `never`) {
          let { repeat: e, ...t } = n;
          i({ ...t, time: { ...n.time, localDate: O(n.time.timeZone) } });
          return;
        }
        let t = { ...n.time };
        u ?? delete t.localDate;
        let { weekly: r, monthly: a, ...o } = u ?? { isDaily: !1 };
        i(
          e === `weekly`
            ? { ...n, time: t, repeat: { ...o, isDaily: !1, weekly: [De(n.time.timeZone)] } }
            : e === `monthly`
              ? { ...n, time: t, repeat: { ...o, isDaily: !1, monthly: 1 } }
              : { ...n, time: t, repeat: { ...o, isDaily: !0 } },
        );
      }),
      (t[49] = d),
      (t[50] = i),
      (t[51] = u),
      (t[52] = n),
      (t[53] = P))
    : (P = t[53]);
  let F;
  t[54] !== a || t[55] !== d || t[56] !== w || t[57] !== p || t[58] !== ge || t[59] !== P
    ? ((F = (0, Z.jsx)(B, {
        appearance: `form`,
        disabled: a,
        ariaLabel: p,
        options: w,
        selectedId: d,
        selectedLabel: ge,
        onSelect: P,
      })),
      (t[54] = a),
      (t[55] = d),
      (t[56] = w),
      (t[57] = p),
      (t[58] = ge),
      (t[59] = P),
      (t[60] = F))
    : (F = t[60]);
  let I;
  t[61] !== p || t[62] !== F
    ? ((I = (0, Z.jsx)(_, { size: `compact`, labelWeight: `normal`, icon: N, label: p, control: F })),
      (t[61] = p),
      (t[62] = F),
      (t[63] = I))
    : (I = t[63]);
  let L;
  t[64] !== h || t[65] !== i || t[66] !== u || t[67] !== n
    ? ((L =
        u == null &&
        n.time.localDate != null &&
        (0, Z.jsx)(_, {
          size: `compact`,
          labelWeight: `normal`,
          icon: (0, Z.jsx)(ae, {}),
          label: h,
          control: (0, Z.jsx)(_e, {
            appearance: `form`,
            ariaLabel: h,
            timeZone: n.time.timeZone,
            value: n.time.localDate,
            onChange: (e) => i({ ...n, time: { ...n.time, localDate: e } }),
          }),
        })),
      (t[64] = h),
      (t[65] = i),
      (t[66] = u),
      (t[67] = n),
      (t[68] = L))
    : (L = t[68]);
  let R;
  t[69] !== oe || t[70] !== i || t[71] !== u || t[72] !== n
    ? ((R =
        u?.weekly != null &&
        (0, Z.jsx)(_, {
          size: `compact`,
          labelWeight: `normal`,
          icon: (0, Z.jsx)(ae, {}),
          label: oe,
          control: (0, Z.jsx)(ve, {
            appearance: `form`,
            value: Q.filter((e) => {
              let { day: t } = e;
              return u.weekly?.includes(t);
            }).map(je),
            onChange: (e) =>
              i({
                ...n,
                repeat: {
                  ...u,
                  weekly: Q.filter((t) => {
                    let { rruleDay: n } = t;
                    return e.includes(n);
                  }).map(Ae),
                },
              }),
          }),
        })),
      (t[69] = oe),
      (t[70] = i),
      (t[71] = u),
      (t[72] = n),
      (t[73] = R))
    : (R = t[73]);
  let z;
  t[74] !== a || t[75] !== oe || t[76] !== s || t[77] !== T || t[78] !== i || t[79] !== u || t[80] !== n
    ? ((z =
        u?.monthly != null &&
        (0, Z.jsx)(_, {
          size: `compact`,
          labelWeight: `normal`,
          icon: (0, Z.jsx)(ae, {}),
          label: oe,
          control: (0, Z.jsx)(B, {
            appearance: `form`,
            disabled: a,
            ariaLabel: oe,
            options: T,
            selectedId: String(u.monthly),
            selectedLabel: s.formatNumber(u.monthly),
            onSelect: (e) => i({ ...n, repeat: { ...u, monthly: Number(e) } }),
          }),
        })),
      (t[74] = a),
      (t[75] = oe),
      (t[76] = s),
      (t[77] = T),
      (t[78] = i),
      (t[79] = u),
      (t[80] = n),
      (t[81] = z))
    : (z = t[81]);
  let V, H;
  t[82] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, Z.jsx)(re, {})),
      (H = (0, Z.jsx)(o, {
        id: `multiplayer.liveNotes.time`,
        defaultMessage: `Time`,
        description: `Label for the scheduled time of a Live Note`,
      })),
      (t[82] = V),
      (t[83] = H))
    : ((V = t[82]), (H = t[83]));
  let U;
  t[84] === n.time.localTime
    ? (U = t[85])
    : ((U = n.time.localTime.slice(0, 5)), (t[84] = n.time.localTime), (t[85] = U));
  let W;
  t[86] !== i || t[87] !== n
    ? ((W = (e) => i({ ...n, time: { ...n.time, localTime: e } })), (t[86] = i), (t[87] = n), (t[88] = W))
    : (W = t[88]);
  let be;
  t[89] !== U || t[90] !== W
    ? ((be = (0, Z.jsx)(_, {
        size: `compact`,
        labelWeight: `normal`,
        icon: V,
        label: H,
        control: (0, Z.jsx)(ye, { appearance: `form`, value: U, onChange: W }),
      })),
      (t[89] = U),
      (t[90] = W),
      (t[91] = be))
    : (be = t[91]);
  let G;
  t[92] === Symbol.for(`react.memo_cache_sentinel`) ? ((G = (0, Z.jsx)(f, {})), (t[92] = G)) : (G = t[92]);
  let K;
  t[93] !== s || t[94] !== c || t[95] !== n.time.timeZone
    ? ((K = xe(s, n.time.timeZone, c).map(ke)),
      (t[93] = s),
      (t[94] = c),
      (t[95] = n.time.timeZone),
      (t[96] = K))
    : (K = t[96]);
  let Ce = n.time.timeZone,
    q;
  t[97] !== s || t[98] !== c || t[99] !== n.time.timeZone
    ? ((q = Se(s, n.time.timeZone, c)), (t[97] = s), (t[98] = c), (t[99] = n.time.timeZone), (t[100] = q))
    : (q = t[100]);
  let we;
  t[101] !== i || t[102] !== u || t[103] !== n
    ? ((we = (e) =>
        i({
          ...n,
          time: { ...n.time, timeZone: e },
          repeat: u?.endAt == null ? u : { ...u, endAt: { ...u.endAt, timeZone: e } },
        })),
      (t[101] = i),
      (t[102] = u),
      (t[103] = n),
      (t[104] = we))
    : (we = t[104]);
  let J;
  t[105] !== a || t[106] !== K || t[107] !== q || t[108] !== we || t[109] !== ce || t[110] !== n.time.timeZone
    ? ((J = (0, Z.jsx)(B, {
        appearance: `form`,
        disabled: a,
        ariaLabel: ce,
        options: K,
        selectedId: Ce,
        selectedLabel: q,
        onSelect: we,
      })),
      (t[105] = a),
      (t[106] = K),
      (t[107] = q),
      (t[108] = we),
      (t[109] = ce),
      (t[110] = n.time.timeZone),
      (t[111] = J))
    : (J = t[111]);
  let Y;
  t[112] !== J || t[113] !== ce
    ? ((Y = (0, Z.jsx)(_, { size: `compact`, labelWeight: `normal`, icon: G, label: ce, control: J })),
      (t[112] = J),
      (t[113] = ce),
      (t[114] = Y))
    : (Y = t[114]);
  let Te;
  t[115] !== a || t[116] !== ue || t[117] !== M || t[118] !== i || t[119] !== u || t[120] !== n
    ? ((Te =
        u != null &&
        (0, Z.jsx)(_, {
          size: `compact`,
          labelWeight: `normal`,
          icon: (0, Z.jsx)(l, { asset: r }),
          label: ue,
          control: (0, Z.jsx)(B, {
            appearance: `form`,
            disabled: a,
            ariaLabel: ue,
            options: M,
            selectedId: u.endAt == null ? `never` : `date`,
            selectedLabel: M[u.endAt == null ? 0 : 1].label,
            onSelect: (e) => {
              if (e === `never`) {
                let { endAt: e, ...t } = u;
                i({ ...n, repeat: t });
              } else {
                let e = new Intl.DateTimeFormat(`en-CA`, {
                  timeZone: n.time.timeZone,
                  year: `numeric`,
                  month: `2-digit`,
                  day: `2-digit`,
                }).format(new Date());
                i({
                  ...n,
                  repeat: { ...u, endAt: { localDate: e, localTime: `23:59:59`, timeZone: n.time.timeZone } },
                });
              }
            },
          }),
        })),
      (t[115] = a),
      (t[116] = ue),
      (t[117] = M),
      (t[118] = i),
      (t[119] = u),
      (t[120] = n),
      (t[121] = Te))
    : (Te = t[121]);
  let Ee;
  t[122] !== ue || t[123] !== i || t[124] !== u || t[125] !== n
    ? ((Ee =
        u?.endAt?.localDate != null &&
        (0, Z.jsx)(_, {
          size: `compact`,
          labelWeight: `normal`,
          label: (0, Z.jsx)(o, {
            id: `multiplayer.liveNotes.endDate`,
            defaultMessage: `End date`,
            description: `Label for the last date on which a Live Note may repeat`,
          }),
          control: (0, Z.jsx)(_e, {
            appearance: `form`,
            ariaLabel: ue,
            timeZone: n.time.timeZone,
            value: u.endAt.localDate,
            onChange: (e) =>
              i({
                ...n,
                repeat: {
                  ...u,
                  endAt: { ...u.endAt, localDate: e, localTime: `23:59:59`, timeZone: n.time.timeZone },
                },
              }),
          }),
        })),
      (t[122] = ue),
      (t[123] = i),
      (t[124] = u),
      (t[125] = n),
      (t[126] = Ee))
    : (Ee = t[126]);
  let X;
  return (
    t[127] !== I ||
    t[128] !== L ||
    t[129] !== R ||
    t[130] !== z ||
    t[131] !== be ||
    t[132] !== Y ||
    t[133] !== Te ||
    t[134] !== Ee
      ? ((X = (0, Z.jsxs)(de, { children: [I, L, R, z, be, Y, Te, Ee] })),
        (t[127] = I),
        (t[128] = L),
        (t[129] = R),
        (t[130] = z),
        (t[131] = be),
        (t[132] = Y),
        (t[133] = Te),
        (t[134] = Ee),
        (t[135] = X))
      : (X = t[135]),
    X
  );
}
function ke(e) {
  let { value: t, label: n } = e;
  return { id: t, label: n };
}
function Ae(e) {
  let { day: t } = e;
  return t;
}
function je(e) {
  let { rruleDay: t } = e;
  return t;
}
var Me, Z, Q;
function Ne() {
  return (Ne = e(() => {
    ((Me = y()),
      C(),
      q(),
      se(),
      U(),
      V(),
      H(),
      W(),
      k(),
      K(),
      u(),
      p(),
      E(),
      h(),
      c(),
      (Z = x()),
      (Q = [
        { day: J.MONDAY, rruleDay: `MO` },
        { day: J.TUESDAY, rruleDay: `TU` },
        { day: J.WEDNESDAY, rruleDay: `WE` },
        { day: J.THURSDAY, rruleDay: `TH` },
        { day: J.FRIDAY, rruleDay: `FR` },
        { day: J.SATURDAY, rruleDay: `SA` },
        { day: J.SUNDAY, rruleDay: `SU` },
      ]));
  }))();
}
async function Pe(e, { session: t, documentId: n, title: r, prompt: i, signal: a }) {
  let o = e.get(T),
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
      (e.get(T) !== o || e.get(D) !== s) && c.abort();
    });
  try {
    await t.save(l);
    let a = await z(n, o, l);
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
    let c = j(e, []);
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
      ee = {
        codexAppMode: `chat`,
        initialChatGptConversationId: c,
        focusComposerNonce: Date.now(),
        prefillPrompt: i,
        prefillLibraryFiles: [u],
      },
      d = e.get(M).prepareNavigation(`/`, { state: ee });
    return d != null && (F(e, `chat`), await d(), !0);
  } catch (e) {
    if (l.aborted) return !1;
    throw e;
  } finally {
    u();
  }
}
function Fe() {
  return (Fe = e(() => {
    (A(), N(), ge(), P(), R(), I());
  }))();
}
function Ie(e) {
  let t = (0, Re.c)(119),
    { session: r, initialTask: a, documentId: c, title: l, onClose: u } = e,
    ee = s(i),
    d = ne(),
    f = pe(Te, r)?.find((e) => {
      let { id: t } = e;
      return t === a?.id;
    }),
    [p, re] = (0, Be.useState)(a),
    ae;
  t[0] === a
    ? (ae = t[1])
    : ((ae = () =>
        a ?? {
          id: crypto.randomUUID(),
          prompt: ``,
          schedule: {
            time: { localTime: `09:00`, timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone },
            repeat: { isDaily: !1, weekly: [De(Intl.DateTimeFormat().resolvedOptions().timeZone)] },
          },
        }),
      (t[0] = a),
      (t[1] = ae));
  let [m, h] = (0, Be.useState)(ae),
    [se, de] = (0, Be.useState)(null),
    [g, _] = (0, Be.useState)(!1),
    [v, y] = (0, Be.useState)(!1),
    b = (0, Be.useRef)(null),
    x,
    S;
  (t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = () => () => b.current?.abort()), (S = []), (t[2] = x), (t[3] = S))
    : ((x = t[2]), (S = t[3])),
    (0, Be.useEffect)(x, S));
  let C;
  t[4] === u
    ? (C = t[5])
    : ((C = () => {
        (b.current?.abort(), u());
      }),
      (t[4] = u),
      (t[5] = C));
  let w = C,
    T = a != null && f == null,
    he = a != null && !T && !(0, ze.default)(f, p),
    E = (0, Be.useSyncExternalStore)(r.subscribeState, r.getSnapshot, Le),
    D;
  t[6] !== he || t[7] !== T || t[8] !== v || t[9] !== r.initialized || t[10] !== E
    ? ((D = Ee(E, r.initialized) === `editable` && !T && !he && !v),
      (t[6] = he),
      (t[7] = T),
      (t[8] = v),
      (t[9] = r.initialized),
      (t[10] = E),
      (t[11] = D))
    : (D = t[11]);
  let O = D,
    k;
  t[12] === m.prompt
    ? (k = t[13])
    : ((k = m.prompt.trim().length > 0 && Array.from(m.prompt).length <= 1e4),
      (t[12] = m.prompt),
      (t[13] = k));
  let A = k,
    j;
  t[14] !== p ||
  t[15] !== a?.id ||
  t[16] !== u ||
  t[17] !== T ||
  t[18] !== v ||
  t[19] !== r.editor ||
  t[20] !== r.state?.canEdit ||
  t[21] !== _
    ? ((j = function (e) {
        let t = r.editor.snapshot(),
          n = t.document?.ast.attrs?.liveNotes?.find((e) => {
            let { id: t } = e;
            return t === a?.id;
          });
        if (!r.state?.canEdit || T || v || !(0, ze.default)(n, p)) {
          _(!0);
          return;
        }
        let i = crypto.randomUUID();
        r.editor.applyLocalEdits({ baseRevision: t.revision, editId: i, undoGroup: i, operations: [e] })
          .status === Ce.REJECTED
          ? _(!0)
          : u();
      }),
      (t[14] = p),
      (t[15] = a?.id),
      (t[16] = u),
      (t[17] = T),
      (t[18] = v),
      (t[19] = r.editor),
      (t[20] = r.state?.canEdit),
      (t[21] = _),
      (t[22] = j))
    : (j = t[22]);
  let M = j,
    N;
  t[23] !== c ||
  t[24] !== a?.id ||
  t[25] !== u ||
  t[26] !== v ||
  t[27] !== ee ||
  t[28] !== r ||
  t[29] !== _ ||
  t[30] !== y ||
  t[31] !== l
    ? ((N = async function () {
        if (r.signal.aborted || c == null || v) return;
        let e = r.editor.snapshot().document?.ast.attrs?.liveNotes?.find((e) => {
          let { id: t } = e;
          return t === a?.id;
        });
        if (e == null) return;
        let t = new AbortController();
        ((b.current = t), y(!0), _(!1));
        try {
          (await Pe(ee, { session: r, documentId: c, title: l, prompt: e.prompt, signal: t.signal }))
            ? u()
            : _(!0);
        } catch {
          _(!0);
        }
        y(!1);
      }),
      (t[23] = c),
      (t[24] = a?.id),
      (t[25] = u),
      (t[26] = v),
      (t[27] = ee),
      (t[28] = r),
      (t[29] = _),
      (t[30] = y),
      (t[31] = l),
      (t[32] = N))
    : (N = t[32]);
  let ge = N,
    P = se ?? void 0,
    F;
  t[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = { shouldStopPointerDownPropagation: !1 }), (t[33] = F))
    : (F = t[33]);
  let I;
  t[34] === w
    ? (I = t[35])
    : ((I = (e) => {
        e || w();
      }),
      (t[34] = w),
      (t[35] = I));
  let L;
  t[36] !== M || t[37] !== m || t[38] !== O || t[39] !== A
    ? ((L = (e) => {
        (e.preventDefault(), O && A && M({ kind: we.UPSERT_LIVE_NOTE, upsertLiveNote: { liveNote: m } }));
      }),
      (t[36] = M),
      (t[37] = m),
      (t[38] = O),
      (t[39] = A),
      (t[40] = L))
    : (L = t[40]);
  let R;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, $.jsx)(ie, {
        children: (0, $.jsxs)(`span`, {
          className: `flex items-center gap-2`,
          children: [
            (0, $.jsx)(oe, {}),
            (0, $.jsx)(o, {
              id: `multiplayer.liveNotes.title`,
              defaultMessage: `Live Note`,
              description: `Title of the dialog for a note's saved prompt and schedule`,
            }),
          ],
        }),
      })),
      (t[41] = R))
    : (R = t[41]);
  let z = E == null || f == null || c == null || v,
    B;
  t[42] === ge ? (B = t[43]) : ((B = () => void ge()), (t[42] = ge), (t[43] = B));
  let V, H;
  t[44] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, $.jsx)(te, {})),
      (H = (0, $.jsx)(o, {
        id: `multiplayer.liveNotes.runSavedPrompt`,
        defaultMessage: `Run saved prompt`,
        description: `Open a new chat with this Live Note's saved prompt and the note attached`,
      })),
      (t[44] = V),
      (t[45] = H))
    : ((V = t[44]), (H = t[45]));
  let _e;
  t[46] !== z || t[47] !== B
    ? ((_e = (0, $.jsxs)(n, {
        color: `secondary`,
        size: `dialogAction`,
        type: `button`,
        disabled: z,
        onClick: B,
        children: [V, H],
      })),
      (t[46] = z),
      (t[47] = B),
      (t[48] = _e))
    : (_e = t[48]);
  let ve = !O || !A,
    U;
  t[49] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, $.jsx)(o, {
        id: `multiplayer.liveNotes.save`,
        defaultMessage: `Save`,
        description: `Save a Live Note prompt and schedule to the shared note`,
      })),
      (t[49] = U))
    : (U = t[49]);
  let W;
  t[50] === ve
    ? (W = t[51])
    : ((W = (0, $.jsx)(n, { size: `dialogAction`, type: `submit`, disabled: ve, children: U })),
      (t[50] = ve),
      (t[51] = W));
  let ye;
  t[52] === d
    ? (ye = t[53])
    : ((ye = d.formatMessage({
        id: `multiplayer.liveNotes.close`,
        defaultMessage: `Close Live Note`,
        description: `Close the Live Note dialog without saving edits`,
      })),
      (t[52] = d),
      (t[53] = ye));
  let G;
  t[54] === Symbol.for(`react.memo_cache_sentinel`) ? ((G = (0, $.jsx)(fe, {})), (t[54] = G)) : (G = t[54]);
  let xe;
  t[55] !== w || t[56] !== ye
    ? ((xe = (0, $.jsx)(n, {
        color: `ghost`,
        size: `iconCircleLg`,
        type: `button`,
        "aria-label": ye,
        onClick: w,
        children: G,
      })),
      (t[55] = w),
      (t[56] = ye),
      (t[57] = xe))
    : (xe = t[57]);
  let K;
  t[58] !== _e || t[59] !== W || t[60] !== xe
    ? ((K = (0, $.jsx)(ce, {
        children: (0, $.jsxs)(`div`, {
          className: `flex flex-wrap items-center justify-between gap-3 select-none`,
          children: [R, (0, $.jsxs)(`div`, { className: `flex items-center gap-2`, children: [_e, W, xe] })],
        }),
      })),
      (t[58] = _e),
      (t[59] = W),
      (t[60] = xe),
      (t[61] = K))
    : (K = t[61]);
  let Se = !O,
    q = m.prompt,
    J;
  t[62] === d
    ? (J = t[63])
    : ((J = d.formatMessage({
        id: `multiplayer.liveNotes.prompt`,
        defaultMessage: `Instructions`,
        description: `Accessible label for the Live Note prompt composer`,
      })),
      (t[62] = d),
      (t[63] = J));
  let Y;
  t[64] === d
    ? (Y = t[65])
    : ((Y = d.formatMessage({
        id: `multiplayer.liveNotes.placeholder`,
        defaultMessage: `What should ChatGPT do with this note?`,
        description: `Placeholder in the Live Note prompt composer`,
      })),
      (t[64] = d),
      (t[65] = Y));
  let X;
  t[66] !== m || t[67] !== h
    ? ((X = (e) => h({ ...m, prompt: e.target.value })), (t[66] = m), (t[67] = h), (t[68] = X))
    : (X = t[68]);
  let ke;
  t[69] !== m.prompt || t[70] !== J || t[71] !== Y || t[72] !== X
    ? ((ke = (0, $.jsx)(me, {
        autoFocus: !0,
        name: `prompt`,
        rows: 4,
        variant: `rounded`,
        value: q,
        "aria-label": J,
        placeholder: Y,
        onChange: X,
      })),
      (t[69] = m.prompt),
      (t[70] = J),
      (t[71] = Y),
      (t[72] = X),
      (t[73] = ke))
    : (ke = t[73]);
  let Ae = !O,
    je;
  t[74] !== m || t[75] !== O || t[76] !== h
    ? ((je = (e) => {
        O && h({ ...m, schedule: e });
      }),
      (t[74] = m),
      (t[75] = O),
      (t[76] = h),
      (t[77] = je))
    : (je = t[77]);
  let Me;
  t[78] !== m.schedule || t[79] !== Ae || t[80] !== je
    ? ((Me = (0, $.jsx)(Oe, { disabled: Ae, value: m.schedule, onChange: je })),
      (t[78] = m.schedule),
      (t[79] = Ae),
      (t[80] = je),
      (t[81] = Me))
    : (Me = t[81]);
  let Z;
  t[82] !== Se || t[83] !== ke || t[84] !== Me
    ? ((Z = (0, $.jsxs)(`fieldset`, {
        disabled: Se,
        className: `flex min-w-0 flex-col gap-3`,
        children: [ke, Me],
      })),
      (t[82] = Se),
      (t[83] = ke),
      (t[84] = Me),
      (t[85] = Z))
    : (Z = t[85]);
  let Q;
  t[86] === T
    ? (Q = t[87])
    : ((Q =
        T &&
        (0, $.jsx)(`p`, {
          role: `status`,
          className: `mt-3 text-sm text-secondary`,
          children: (0, $.jsx)(o, {
            id: `multiplayer.liveNotes.removed`,
            defaultMessage: `This Live Note was removed by another editor`,
            description: `Status when a collaborator removes the Live Note currently being edited`,
          }),
        })),
      (t[86] = T),
      (t[87] = Q));
  let Ne;
  t[88] !== he || t[89] !== f || t[90] !== re || t[91] !== h || t[92] !== _
    ? ((Ne =
        he &&
        (0, $.jsxs)(`div`, {
          className: `mt-3 flex flex-col gap-2`,
          children: [
            (0, $.jsx)(`p`, {
              role: `status`,
              className: `text-sm text-secondary`,
              children: (0, $.jsx)(o, {
                id: `multiplayer.liveNotes.changed`,
                defaultMessage: `This Live Note changed. Reload to see the latest version`,
                description: `Status when a collaborator changes a Live Note while its editor is open, requiring a reload before saving`,
              }),
            }),
            (0, $.jsx)(n, {
              color: `secondary`,
              size: `dialogAction`,
              type: `button`,
              onClick: () => {
                f != null && (re(f), h(f), _(!1));
              },
              children: (0, $.jsx)(o, {
                id: `multiplayer.liveNotes.reload`,
                defaultMessage: `Reload`,
                description: `Replace the local Live Note draft with the latest version saved by a collaborator`,
              }),
            }),
          ],
        })),
      (t[88] = he),
      (t[89] = f),
      (t[90] = re),
      (t[91] = h),
      (t[92] = _),
      (t[93] = Ne))
    : (Ne = t[93]);
  let Fe;
  t[94] === g
    ? (Fe = t[95])
    : ((Fe =
        g &&
        (0, $.jsx)(`p`, {
          role: `alert`,
          className: `mt-3 text-sm text-danger`,
          children: (0, $.jsx)(o, {
            id: `multiplayer.liveNotes.failed`,
            defaultMessage: `Couldn’t complete this action. Try again`,
            description: `Error after a Live Note edit is rejected or its chat cannot be opened`,
          }),
        })),
      (t[94] = g),
      (t[95] = Fe));
  let Ie;
  t[96] !== M || t[97] !== O || t[98] !== a
    ? ((Ie =
        a != null &&
        (0, $.jsx)(n, {
          className: `mt-3 w-full`,
          color: `dangerOutline`,
          size: `detailAction`,
          type: `button`,
          disabled: !O,
          onClick: () => M({ kind: we.REMOVE_LIVE_NOTE, removeLiveNote: { id: a.id } }),
          children: (0, $.jsx)(o, {
            id: `multiplayer.liveNotes.remove`,
            defaultMessage: `Remove Live Note`,
            description: `Remove this saved prompt and schedule from the shared note`,
          }),
        })),
      (t[96] = M),
      (t[97] = O),
      (t[98] = a),
      (t[99] = Ie))
    : (Ie = t[99]);
  let Ve;
  t[100] !== Z || t[101] !== Q || t[102] !== Ne || t[103] !== Fe || t[104] !== Ie
    ? ((Ve = (0, $.jsxs)(ce, { children: [Z, Q, Ne, Fe, Ie] })),
      (t[100] = Z),
      (t[101] = Q),
      (t[102] = Ne),
      (t[103] = Fe),
      (t[104] = Ie),
      (t[105] = Ve))
    : (Ve = t[105]);
  let He;
  t[106] !== L || t[107] !== K || t[108] !== Ve
    ? ((He = (0, $.jsxs)(ue, { as: `form`, size: `viewport`, onSubmit: L, children: [K, Ve] })),
      (t[106] = L),
      (t[107] = K),
      (t[108] = Ve),
      (t[109] = He))
    : (He = t[109]);
  let Ue;
  t[110] === de ? (Ue = t[111]) : ((Ue = (0, $.jsx)(`div`, { ref: de })), (t[110] = de), (t[111] = Ue));
  let We;
  t[112] !== I || t[113] !== He || t[114] !== Ue
    ? ((We = (0, $.jsxs)(le, {
        open: !0,
        contentOverflow: `visible`,
        contentProps: F,
        showDialogClose: !1,
        onOpenChange: I,
        size: `compact`,
        children: [He, Ue],
      })),
      (t[112] = I),
      (t[113] = He),
      (t[114] = Ue),
      (t[115] = We))
    : (We = t[115]);
  let Ge;
  return (
    t[116] !== P || t[117] !== We
      ? ((Ge = (0, $.jsx)(be, { radixPortalContainer: P, children: We })),
        (t[116] = P),
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
    ((Re = y()),
      q(),
      G(),
      Y(),
      (ze = t(a(), 1)),
      d(),
      (Be = S()),
      se(),
      g(),
      v(),
      m(),
      p(),
      w(),
      b(),
      X(),
      Ne(),
      Fe(),
      ($ = x()));
  }))();
}
Ve();
export { Ie as LiveNoteDialog };
//# sourceMappingURL=dialog-05fe6e1559c2.js.map
