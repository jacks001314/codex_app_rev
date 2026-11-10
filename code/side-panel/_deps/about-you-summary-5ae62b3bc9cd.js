import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  AMt as r,
  Act as i,
  Amn as a,
  Cpn as o,
  D3t as s,
  Dht as c,
  F3t as ee,
  Ict as te,
  JG as l,
  Jdt as ne,
  Jrt as re,
  KG as ie,
  Kxt as u,
  MMt as d,
  O3t as f,
  Opn as ae,
  Plt as oe,
  Qxt as se,
  S3t as ce,
  Spn as p,
  TJt as le,
  Vdt as ue,
  Xdt as de,
  Xrt as fe,
  Yrt as pe,
  ZG as m,
  Zrt as h,
  Zxt as me,
  _St as he,
  a3t as ge,
  aYt as _e,
  d3t as ve,
  eit as g,
  hSt as ye,
  hmn as _,
  iit as be,
  jG as xe,
  jMt as Se,
  jXt as Ce,
  kG as we,
  kMt as v,
  kXt as y,
  kht as b,
  kmn as Te,
  nit as Ee,
  o3t as De,
  rit as Oe,
  rut as ke,
  s3t as Ae,
  sYt as je,
  tit as Me,
  uSt as x,
  wJt as Ne,
} from "./app-initial-f094ef01c64d.js";
import {
  $_ as S,
  KS as Pe,
  US as Fe,
  Xb as C,
  Zb as Ie,
  ev as w,
} from "./app-primary-4c40d73a1074.js";
import { n as Le, t as Re } from "./arrow-curved-right-c429570ec5db.js";
var T,
  E,
  D = e(() => {
    ((T = `_changed_1ak6f_2`),
      (E = {
        changed: T,
        "changed-text": `_changed-text_1ak6f_1`,
        "changed-text-reduced": `_changed-text-reduced_1ak6f_1`,
      }));
  });
function ze(e) {
  let t = (0, O.c)(9),
    { text: n, ranges: r } = e,
    [i, a] = (0, k.useState)(!1);
  if (i || !r?.length) return n;
  let o;
  t[0] !== r || t[1] !== n
    ? ((o = r.map((e, t) =>
        (0, A.jsxs)(
          k.Fragment,
          {
            children: [
              n.slice(t === 0 ? 0 : r[t - 1].endUtf16, e.startUtf16),
              (0, A.jsx)(`mark`, {
                className: E.changed,
                onAnimationEnd: () => a(!0),
                children: n.slice(e.startUtf16, e.endUtf16),
              }),
            ],
          },
          e.startUtf16,
        ),
      )),
      (t[0] = r),
      (t[1] = n),
      (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] !== r || t[4] !== n
    ? ((s = n.slice(r[r.length - 1].endUtf16)), (t[3] = r), (t[4] = n), (t[5] = s))
    : (s = t[5]);
  let c;
  return (
    t[6] !== o || t[7] !== s
      ? ((c = (0, A.jsxs)(A.Fragment, { children: [o, s] })), (t[6] = o), (t[7] = s), (t[8] = c))
      : (c = t[8]),
    c
  );
}
var O,
  k,
  A,
  Be = e(() => {
    ((O = Te()), (k = t(a(), 1)), D(), (A = _()));
  });
function j(e) {
  let t = (0, Ye.c)(10),
    { accountId: r, forceRefresh: i, onClose: a } = e,
    o = n(ge),
    { data: s } = ee(c),
    te;
  t[0] !== r || t[1] !== o || t[2] !== s?.goldenHourEnabled || t[3] !== s?.memoryInSearchEnabled
    ? ((te = async function () {
        (await w(o, r, `m3m`, !1),
          s?.goldenHourEnabled === !0 && (await w(o, r, `golden_hour`, !1)),
          s?.memoryInSearchEnabled === !0 && (await w(o, r, `memory_in_search`, !1)),
          await u(r));
      }),
      (t[0] = r),
      (t[1] = o),
      (t[2] = s?.goldenHourEnabled),
      (t[3] = s?.memoryInSearchEnabled),
      (t[4] = te))
    : (te = t[4]);
  let l = te,
    ne;
  return (
    t[5] !== r || t[6] !== l || t[7] !== i || t[8] !== a
      ? ((ne = (0, P.jsx)(M, {
          accountId: r,
          forceRefresh: i,
          onClose: a,
          onDeleteAndTurnOffMemory: l,
        })),
        (t[5] = r),
        (t[6] = l),
        (t[7] = i),
        (t[8] = a),
        (t[9] = ne))
      : (ne = t[9]),
    ne
  );
}
function M(e) {
  let t = (0, Ye.c)(173),
    { accountId: r, forceRefresh: a, onClose: c, onDeleteAndTurnOffMemory: ee } = e,
    u = a !== void 0 && a,
    d = n(ge),
    f = ae(),
    p = s(),
    le = je(`820196652`),
    de;
  t[0] === r ? (de = t[1]) : ((de = [`chatgpt-about-you-summary`, r]), (t[0] = r), (t[1] = de));
  let m = de,
    _e;
  t[2] === r
    ? (_e = t[3])
    : ((_e = [`chatgpt-about-you-summary-checksum`, r]), (t[2] = r), (t[3] = _e));
  let g = _e,
    _;
  t[4] !== r || t[5] !== g || t[6] !== u || t[7] !== p
    ? ((_ = async () => {
        if (
          u &&
          (await p.fetchQuery({ queryKey: g, queryFn: () => se(r), staleTime: 0 })).isStale
        ) {
          let e = await ye({ accountId: r });
          return (await p.invalidateQueries({ queryKey: g }), e);
        }
        return me(r);
      }),
      (t[4] = r),
      (t[5] = g),
      (t[6] = u),
      (t[7] = p),
      (t[8] = _))
    : (_ = t[8]);
  let be = !u || `always`,
    xe;
  t[9] !== m || t[10] !== _ || t[11] !== be
    ? ((xe = { queryKey: m, queryFn: _, refetchOnMount: be, staleTime: Ne.ONE_MINUTE }),
      (t[9] = m),
      (t[10] = _),
      (t[11] = be),
      (t[12] = xe))
    : (xe = t[12]);
  let { data: y, isError: b, isLoading: Te, isFetching: De, refetch: Ae } = ce(xe),
    x = Te || (u && De),
    S;
  t[13] === r ? (S = t[14]) : ((S = () => se(r)), (t[13] = r), (t[14] = S));
  let Fe;
  t[15] !== g || t[16] !== S
    ? ((Fe = { queryKey: g, queryFn: S, staleTime: Ne.ONE_MINUTE }),
      (t[15] = g),
      (t[16] = S),
      (t[17] = Fe))
    : (Fe = t[17]);
  let { data: Ie } = ce(Fe),
    [w, Le] = (0, N.useState)(``),
    [T, E] = (0, N.useState)(null),
    [D, O] = (0, N.useState)(null),
    [k, A] = (0, N.useState)(null),
    [Be, j] = (0, N.useState)(null),
    [M, F] = (0, N.useState)(null),
    [Qe, $e] = (0, N.useState)(null),
    I = (0, N.useRef)(null),
    [et, tt] = (0, N.useState)(0),
    nt;
  t[18] === Symbol.for(`react.memo_cache_sentinel`) ? ((nt = {}), (t[18] = nt)) : (nt = t[18]);
  let [rt, L] = (0, N.useState)(nt),
    it = (0, N.useRef)(0),
    at;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((at = new Map()), (t[19] = at))
    : (at = t[19]);
  let R = (0, N.useRef)(at),
    ot;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ot = (e, t) => {
        let n = (it.current += 1);
        L((r) => ({ ...r, [e.id]: t == null ? void 0 : { section: e, changes: t, revision: n } }));
      }),
      (t[20] = ot))
    : (ot = t[20]);
  let st = ot,
    ct;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ct = (e, t) => {
        for (let n of e) {
          let e = R.current.get(n.id);
          (e?.title === n.title && e.description === n.description) ||
            st(n, t.find((e) => e.sectionId === n.id) ?? null);
        }
      }),
      (t[21] = ct))
    : (ct = t[21]);
  let lt = ct,
    ut;
  t[22] !== p || t[23] !== m
    ? ((ut = (e, t) => {
        (t == null ? R.current.delete(e.id) : R.current.set(e.id, e),
          st(e, t),
          p.setQueryData(m, (t) => {
            if (t == null) return t;
            let n = t.sections.findIndex((t) => t.id === e.id),
              r = [...t.sections];
            return (n === -1 ? r.push(e) : (r[n] = e), { ...t, sections: r });
          }));
      }),
      (t[22] = p),
      (t[23] = m),
      (t[24] = ut))
    : (ut = t[24]);
  let z = ut,
    dt;
  t[25] !== p || t[26] !== m
    ? ((dt = (e) => {
        (R.current.delete(e),
          L((t) => ({ ...t, [e]: void 0 })),
          p.setQueryData(m, (t) =>
            t == null ? t : { ...t, sections: t.sections.filter((t) => t.id !== e) },
          ));
      }),
      (t[25] = p),
      (t[26] = m),
      (t[27] = dt))
    : (dt = t[27]);
  let ft = dt,
    pt;
  t[28] !== p || t[29] !== m
    ? ((pt = (e) => {
        p.setQueryData(m, (t) => {
          if (t == null) return t;
          let n = new Set(e.deletedSectionIds),
            r = new Map(e.updatedSections.map(Ke)),
            i = t.sections.filter((e) => !n.has(e.id)).map((e) => r.get(e.id) ?? e),
            a = new Set(i.map(Ge));
          for (let t of e.updatedSections) a.has(t.id) || i.push(t);
          return {
            ...t,
            generatedAtIso: e.summaryChecksum?.cachedGeneratedAtIso ?? t.generatedAtIso,
            sections: i,
            sourceChecksum: e.summaryChecksum?.cachedSourceChecksum ?? t.sourceChecksum,
          };
        });
      }),
      (t[28] = p),
      (t[29] = m),
      (t[30] = pt))
    : (pt = t[30]);
  let mt = pt,
    B;
  t[31] !== r || t[32] !== k || t[33] !== ft || t[34] !== p || t[35] !== z || t[36] !== m
    ? ((B = (e) => {
        let t = p.getQueryData(m);
        if (t == null) throw Error(`Memory summary is unavailable`);
        let n = t.sections.filter(We).map(qe),
          i = e.targetSection == null ? null : qe(e.targetSection);
        return he(
          {
            conversationId: k,
            correction: e.correction,
            currentSections: n,
            targetAction: `correct`,
            targetSection: i,
            targetSectionId: i?.id ?? null,
            targetText: i == null ? null : e.targetText,
          },
          {
            accountId: r,
            onAssistantResponse: (e) => {
              let { didUpdateSummary: t, text: n } = e;
              t || j(n);
            },
            onDeletedSection: ft,
            onUpdatedSection: z,
          },
        );
      }),
      (t[31] = r),
      (t[32] = k),
      (t[33] = ft),
      (t[34] = p),
      (t[35] = z),
      (t[36] = m),
      (t[37] = B))
    : (B = t[37]);
  let V;
  t[38] !== p || t[39] !== m
    ? ((V = () => (L({}), R.current.clear(), p.getQueryData(m))),
      (t[38] = p),
      (t[39] = m),
      (t[40] = V))
    : (V = t[40]);
  let H;
  t[41] !== mt || t[42] !== g || t[43] !== f || t[44] !== p || t[45] !== d
    ? ((H = (e) => {
        (mt(e), lt(e.updatedSections, e.sectionChanges));
        let t = e.assistantResponse?.trim();
        (t && j(t),
          e.conversationId != null && A(e.conversationId),
          p.invalidateQueries({ queryKey: g }),
          e.ok &&
            !t &&
            e.updatedSections.length === 0 &&
            e.deletedSectionIds.length === 0 &&
            d.get(Ce).info(
              f.formatMessage({
                id: `chatgpt.settings.about_you.correction.toast.noop`,
                defaultMessage: `No memory changes were made`,
                description: `Toast shown when an About You request does not change any memory summary information`,
              }),
              { id: `about_you_memory_correction_noop` },
            ));
      }),
      (t[41] = mt),
      (t[42] = g),
      (t[43] = f),
      (t[44] = p),
      (t[45] = d),
      (t[46] = H))
    : (H = t[46]);
  let U;
  t[47] !== f || t[48] !== p || t[49] !== d || t[50] !== m
    ? ((U = (e, t, n) => {
        (L({}),
          n != null && p.setQueryData(m, n),
          p.refetchQueries({ queryKey: m }),
          d.get(Ce).danger(
            f.formatMessage({
              id: `settings.chatGpt.personalization.memory.summary.correction.error`,
              defaultMessage: `Could not update your memory summary. Please try again.`,
              description: `Error toast after an Ask or update request in the Memory summary dialog fails`,
            }),
          ));
      }),
      (t[47] = f),
      (t[48] = p),
      (t[49] = d),
      (t[50] = m),
      (t[51] = U))
    : (U = t[51]);
  let ht;
  t[52] !== B || t[53] !== V || t[54] !== H || t[55] !== U
    ? ((ht = { mutationFn: B, onMutate: V, onSuccess: H, onError: U }),
      (t[52] = B),
      (t[53] = V),
      (t[54] = H),
      (t[55] = U),
      (t[56] = ht))
    : (ht = t[56]);
  let W = ve(ht),
    G;
  t[57] !== r || t[58] !== z
    ? ((G = () => ye({ accountId: r, onUpdatedSection: z })), (t[57] = r), (t[58] = z), (t[59] = G))
    : (G = t[59]);
  let gt;
  t[60] !== p || t[61] !== m
    ? ((gt = () => (L({}), R.current.clear(), p.getQueryData(m))),
      (t[60] = p),
      (t[61] = m),
      (t[62] = gt))
    : (gt = t[62]);
  let K;
  t[63] !== g || t[64] !== p || t[65] !== m
    ? ((K = (e) => {
        let { sectionChanges: t, ...n } = e;
        (p.setQueryData(m, n),
          lt(n.sections, t),
          j(null),
          A(null),
          p.invalidateQueries({ queryKey: g }));
      }),
      (t[63] = g),
      (t[64] = p),
      (t[65] = m),
      (t[66] = K))
    : (K = t[66]);
  let q;
  t[67] !== f || t[68] !== p || t[69] !== d || t[70] !== m
    ? ((q = (e, t, n) => {
        (L({}),
          n != null && p.setQueryData(m, n),
          d.get(Ce).danger(
            f.formatMessage({
              id: `settings.chatGpt.personalization.memory.summary.refresh.error`,
              defaultMessage: `Could not refresh your memory summary. Please try again.`,
              description: `Error toast after refreshing the Memory summary fails`,
            }),
          ));
      }),
      (t[67] = f),
      (t[68] = p),
      (t[69] = d),
      (t[70] = m),
      (t[71] = q))
    : (q = t[71]);
  let _t;
  t[72] !== G || t[73] !== gt || t[74] !== K || t[75] !== q
    ? ((_t = { mutationFn: G, onMutate: gt, onSuccess: K, onError: q }),
      (t[72] = G),
      (t[73] = gt),
      (t[74] = K),
      (t[75] = q),
      (t[76] = _t))
    : (_t = t[76]);
  let J = ve(_t),
    Y;
  t[77] !== g || t[78] !== c || t[79] !== p || t[80] !== m
    ? ((Y = () => {
        (p.removeQueries({ queryKey: m }), p.removeQueries({ queryKey: g }), F(null), c());
      }),
      (t[77] = g),
      (t[78] = c),
      (t[79] = p),
      (t[80] = m),
      (t[81] = Y))
    : (Y = t[81]);
  let vt;
  t[82] !== f || t[83] !== d
    ? ((vt = () => {
        d.get(Ce).danger(
          f.formatMessage({
            id: `settings.memory_summary.delete_and_turn_off.error_toast`,
            defaultMessage: `Could not delete and turn off memory. Please try again.`,
            description: `Error toast shown when deleting improved memory and turning Memory off fails`,
          }),
        );
      }),
      (t[82] = f),
      (t[83] = d),
      (t[84] = vt))
    : (vt = t[84]);
  let yt;
  t[85] !== ee || t[86] !== Y || t[87] !== vt
    ? ((yt = { mutationFn: ee, onSuccess: Y, onError: vt }),
      (t[85] = ee),
      (t[86] = Y),
      (t[87] = vt),
      (t[88] = yt))
    : (yt = t[88]);
  let X = ve(yt),
    Z = W.isPending || J.isPending || X.isPending,
    bt;
  t[89] !== w || t[90] !== Z
    ? ((bt = w.trim().length > 0 && !Z), (t[89] = w), (t[90] = Z), (t[91] = bt))
    : (bt = t[91]);
  let xt = bt,
    St;
  if (T != null) {
    let e;
    (t[92] === f
      ? (e = t[93])
      : ((e = f.formatMessage({
          id: `chatgpt.settings.about_you.correction.input.placeholder.targeted`,
          defaultMessage: `Make a correction`,
          description: `Placeholder in the Memory summary composer when a section is targeted`,
        })),
        (t[92] = f),
        (t[93] = e)),
      (St = e));
  } else if (le) {
    let e;
    (t[94] === f
      ? (e = t[95])
      : ((e = f.formatMessage({
          id: `chatgpt.settings.about_you.correction.input.placeholder.untargeted`,
          defaultMessage: `Ask or update`,
          description: `Placeholder in the Memory summary composer when no section is targeted and questions are enabled`,
        })),
        (t[94] = f),
        (t[95] = e)),
      (St = e));
  } else {
    let e;
    (t[96] === f
      ? (e = t[97])
      : ((e = f.formatMessage({
          id: `chatgpt.settings.about_you.correction.input.placeholder.untargeted.update_only`,
          defaultMessage: `Add or update`,
          description: `Placeholder in the Memory summary composer when no section is targeted and questions are disabled`,
        })),
        (t[96] = f),
        (t[97] = e)),
      (St = e));
  }
  let Ct = y != null && y.sections.length > 0 && !b,
    wt = Ie?.isStale === !0 && Ie.sourceChecksum != null,
    Tt;
  t[98] !== f || t[99] !== Z || t[100] !== J || t[101] !== wt || t[102] !== Ct
    ? ((Tt = Ct
        ? (0, P.jsxs)(ie, {
            align: `end`,
            contentWidth: `menu`,
            side: `bottom`,
            sideOffset: 4,
            triggerButton: (0, P.jsx)(v, {
              "aria-label": f.formatMessage({
                id: `settings.chatGpt.personalization.memory.summary.menu`,
                defaultMessage: `About You menu`,
                description: `Accessible label for the Memory summary overflow menu`,
              }),
              className: `size-8`,
              color: `ghostActive`,
              radius: `full`,
              size: `icon`,
              uniform: !0,
              children: (0, P.jsx)(oe, {}),
            }),
            children: [
              (0, P.jsx)(l.Item, {
                leftIcon: (0, P.jsx)(ke, {}),
                onSelect: () => F(`about`),
                children: (0, P.jsx)(o, {
                  id: `settings.memory_summary.actions.about_memory`,
                  defaultMessage: `About memory`,
                  description: `Overflow menu item that explains the Memory summary`,
                }),
              }),
              wt
                ? (0, P.jsx)(l.Item, {
                    disabled: Z,
                    leftIcon: (0, P.jsx)(te, {}),
                    onSelect: () => J.mutate(),
                    children: (0, P.jsx)(o, {
                      id: `settings.chatGpt.personalization.memory.summary.refresh`,
                      defaultMessage: `Refresh summary`,
                      description: `Overflow menu item that refreshes the Memory summary`,
                    }),
                  })
                : null,
              (0, P.jsx)(l.Group, {
                children: (0, P.jsx)(l.Item, {
                  disabled: Z,
                  leftIcon: (0, P.jsx)(ue, {}),
                  onSelect: () => F(`delete-and-turn-off`),
                  tone: `danger`,
                  children: (0, P.jsx)(o, {
                    id: `settings.memory_summary.actions.delete_and_turn_off`,
                    defaultMessage: `Delete and turn off memory`,
                    description: `Destructive overflow menu item that deletes improved memory and turns Memory off`,
                  }),
                }),
              }),
            ],
          })
        : null),
      (t[98] = f),
      (t[99] = Z),
      (t[100] = J),
      (t[101] = wt),
      (t[102] = Ct),
      (t[103] = Tt))
    : (Tt = t[103]);
  let Et = Tt,
    Dt = (e) => {
      Z || (j(null), Le(``), E(null), O(null), (I.current = null), W.mutate(e));
    },
    Ot = (e) => {
      let { followUp: t, section: n } = e;
      if (t.action === `auto_send`) {
        Dt({ correction: t.prompt, targetSection: n, targetText: null });
        return;
      }
      ((I.current = e),
        j(null),
        t.action === `targeted_reply`
          ? (Le(``), E(n), O(t.prompt))
          : (Le(t.prompt), E(null), O(null)),
        tt(Ue));
    },
    kt = (e, t) => {
      if (Z) return;
      let n = I.current;
      if (
        w.length > 0 &&
        n?.section.id === t.id &&
        n.followUp.action === e.action &&
        n.followUp.prompt === e.prompt
      )
        return;
      let r = { followUp: e, section: t };
      w.length > 0 ? $e(r) : Ot(r);
    },
    At = (e) => {
      e.preventDefault();
      let t = w.trim();
      !t || Z || Dt({ correction: t, targetSection: T, targetText: D });
    },
    jt = Me,
    Mt;
  t[104] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Mt = { "aria-describedby": void 0 }), (t[104] = Mt))
    : (Mt = t[104]);
  let Nt;
  t[105] !== f || t[106] !== J || t[107] !== Ct || t[108] !== y || t[109] !== Et
    ? ((Nt =
        Ct && y != null
          ? (0, P.jsxs)(P.Fragment, {
              children: [
                (0, P.jsx)(`span`, {
                  className: `max-w-48 min-w-0 truncate text-sm leading-5 font-normal text-secondary max-sm:hidden`,
                  children: Je(f, J.isPending ? void 0 : y.generatedAtIso),
                }),
                Et,
              ],
            })
          : null),
      (t[105] = f),
      (t[106] = J),
      (t[107] = Ct),
      (t[108] = y),
      (t[109] = Et),
      (t[110] = Nt))
    : (Nt = t[110]);
  let Pt;
  t[111] === Nt
    ? (Pt = t[112])
    : ((Pt = (0, P.jsx)(`div`, { className: `flex min-w-0 items-center gap-1`, children: Nt })),
      (t[111] = Nt),
      (t[112] = Pt));
  let Q;
  t[113] === c
    ? (Q = t[114])
    : ((Q = (e) => {
        e || c();
      }),
      (t[113] = c),
      (t[114] = Q));
  let Ft = re,
    It;
  t[115] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((It = (0, P.jsx)(h, {
        className: `shrink-0 border-b border-default px-6 pe-20 pt-5 pb-5 first:pt-5 sm:pe-72`,
        children: (0, P.jsx)(`div`, {
          className: `flex min-h-8 min-w-0 items-center`,
          children: (0, P.jsx)(Oe, {
            className: `truncate text-heading-sm leading-5 font-normal text-default`,
            children: (0, P.jsx)(o, {
              id: `settings.chatGpt.personalization.memory.summary`,
              defaultMessage: `Memory summary`,
              description: `Title for the ChatGPT memory summary dialog`,
            }),
          }),
        }),
      })),
      (t[115] = It))
    : (It = t[115]);
  let Lt = h,
    Rt;
  t[116] === x
    ? (Rt = t[117])
    : ((Rt = x
        ? (0, P.jsx)(`div`, {
            className: `flex flex-1 items-center justify-center py-8`,
            children: (0, P.jsx)(Se, { className: `icon-sm` }),
          })
        : null),
      (t[116] = x),
      (t[117] = Rt));
  let zt;
  t[118] !== b || t[119] !== x || t[120] !== Ae
    ? ((zt =
        !x && b
          ? (0, P.jsxs)(`div`, {
              className: `flex flex-col items-start gap-3 py-6`,
              children: [
                (0, P.jsx)(`p`, {
                  className: `text-sm text-danger`,
                  children: (0, P.jsx)(o, {
                    id: `settings.chatGpt.personalization.memory.summary.error`,
                    defaultMessage: `Could not load your memory summary`,
                    description: `Error in the ChatGPT memory summary dialog`,
                  }),
                }),
                (0, P.jsx)(v, {
                  color: `secondary`,
                  onClick: () => void Ae(),
                  children: (0, P.jsx)(o, {
                    id: `settings.chatGpt.personalization.memory.summary.retry`,
                    defaultMessage: `Retry`,
                    description: `Button to retry loading the Memory summary`,
                  }),
                }),
              ],
            })
          : null),
      (t[118] = b),
      (t[119] = x),
      (t[120] = Ae),
      (t[121] = zt))
    : (zt = t[121]);
  let Bt;
  t[122] !== b || t[123] !== x || t[124] !== y
    ? ((Bt =
        !x && !b && y?.sections.length === 0
          ? (0, P.jsx)(`p`, {
              className: `py-6 text-sm text-secondary`,
              children: y.emptyStateMessage,
            })
          : null),
      (t[122] = b),
      (t[123] = x),
      (t[124] = y),
      (t[125] = Bt))
    : (Bt = t[125]);
  let Vt =
      !x && !b && y != null
        ? (0, P.jsx)(`div`, {
            className: `flex flex-col`,
            children: y.sections.map((e) => {
              let t = rt[e.id],
                n = t?.section.title === e.title && t.section.description === e.description;
              return (0, P.jsxs)(
                `section`,
                {
                  "aria-busy": W.isPending,
                  className: `py-2`,
                  children: [
                    (0, P.jsx)(`h3`, {
                      className: `text-heading-sm leading-6.5 font-semibold text-default`,
                      children: (0, P.jsx)(
                        ze,
                        { text: e.title, ranges: n ? t.changes.titleRanges : void 0 },
                        t?.revision,
                      ),
                    }),
                    e.description.trim()
                      ? (0, P.jsx)(`p`, {
                          className: `mt-1 text-base leading-6 font-normal whitespace-pre-wrap text-default`,
                          children: (0, P.jsx)(
                            ze,
                            {
                              text: e.description,
                              ranges: n ? t.changes.descriptionRanges : void 0,
                            },
                            t?.revision,
                          ),
                        })
                      : null,
                    e.followUps?.length
                      ? (0, P.jsx)(`div`, {
                          className: `mt-2 flex max-w-full flex-col items-start gap-1.5`,
                          children: e.followUps.map((t) =>
                            (0, P.jsxs)(
                              `button`,
                              {
                                type: `button`,
                                className: `group flex max-w-full cursor-interaction items-start gap-2 rounded-md text-start transition-opacity select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-default disabled:opacity-50`,
                                disabled: Z,
                                onClick: () => kt(t, e),
                                children: [
                                  (0, P.jsx)(Re, {
                                    className: `icon mt-0.5 shrink-0 text-tertiary transition-transform duration-200 ease-out group-hover:translate-x-1.5 group-hover:text-info`,
                                  }),
                                  (0, P.jsx)(`span`, {
                                    className: `text-base leading-6 font-normal tracking-[-0.32px] text-default underline decoration-text-tertiary decoration-dotted decoration-[1px] underline-offset-[2px] transition-colors group-hover:text-info group-hover:decoration-inherit`,
                                    children: t.preview,
                                  }),
                                ],
                              },
                              `${t.action}:${t.prompt}`,
                            ),
                          ),
                        })
                      : null,
                  ],
                },
                e.id,
              );
            }),
          })
        : null,
    Ht;
  t[126] !== Lt || t[127] !== Rt || t[128] !== zt || t[129] !== Bt || t[130] !== Vt
    ? ((Ht = (0, P.jsxs)(Lt, {
        className: `min-h-0 flex-1 overflow-y-auto px-6 pt-2 pb-4`,
        children: [Rt, zt, Bt, Vt],
      })),
      (t[126] = Lt),
      (t[127] = Rt),
      (t[128] = zt),
      (t[129] = Bt),
      (t[130] = Vt),
      (t[131] = Ht))
    : (Ht = t[131]);
  let Ut;
  t[132] !== Be ||
  t[133] !== xt ||
  t[134] !== et ||
  t[135] !== St ||
  t[136] !== W.isPending ||
  t[137] !== w ||
  t[138] !== At ||
  t[139] !== f ||
  t[140] !== b ||
  t[141] !== x ||
  t[142] !== Z ||
  t[143] !== I ||
  t[144] !== tt ||
  t[145] !== y?.sections ||
  t[146] !== T ||
  t[147] !== D
    ? ((Ut =
        !x && !b && y?.sections.length
          ? (0, P.jsxs)(h, {
              className: `shrink-0 px-6 pt-2 pb-6`,
              children: [
                Be == null
                  ? null
                  : (0, P.jsx)(`div`, {
                      className: `mb-2 rounded-xl bg-primary-soft px-3 py-2 text-default`,
                      role: `status`,
                      children: (0, P.jsx)(Pe, {
                        className: `[&>*:first-child]:mt-0 [&>*:last-child]:mb-0`,
                        textStyle: { kind: `small` },
                        children: Be,
                      }),
                    }),
                T == null
                  ? null
                  : (0, P.jsxs)(`div`, {
                      className: `mb-2 flex items-start gap-2 rounded-xl bg-primary-soft px-3 py-2 text-sm text-secondary`,
                      children: [
                        (0, P.jsxs)(`span`, {
                          className: `min-w-0 flex-1`,
                          children: [
                            (0, P.jsx)(`span`, {
                              className: `font-medium text-default`,
                              children: T.title,
                            }),
                            D == null
                              ? null
                              : (0, P.jsx)(`span`, {
                                  className: `mt-1 block text-secondary`,
                                  children: (0, P.jsx)(o, {
                                    id: `settings.chatGpt.personalization.memory.summary.targetPrompt`,
                                    defaultMessage: `“{prompt}”`,
                                    description: `Targeted Dive Deeper prompt shown above the Memory summary composer`,
                                    values: { prompt: D },
                                  }),
                                }),
                          ],
                        }),
                        (0, P.jsx)(v, {
                          "aria-label": f.formatMessage({
                            id: `settings.chatGpt.personalization.memory.summary.clearTarget`,
                            defaultMessage: `Clear correction target`,
                            description: `Accessible label for removing the targeted Memory summary section from the composer`,
                          }),
                          color: `ghost`,
                          size: `iconSm`,
                          uniform: !0,
                          onClick: () => {
                            (E(null), O(null), (I.current = null), tt(He));
                          },
                          children: (0, P.jsx)(ne, {}),
                        }),
                      ],
                    }),
                (0, P.jsx)(`form`, {
                  onSubmit: At,
                  children: (0, P.jsx)(C, {
                    layout: `single-line`,
                    radiusVariant: `single-line`,
                    children: (0, P.jsx)(C.Body, {
                      layout: `single-line`,
                      children: (0, P.jsxs)(C.Footer, {
                        layout: `single-line`,
                        children: [
                          (0, P.jsx)(C.FooterInlineControls, { children: null }),
                          (0, P.jsx)(C.Input, {
                            layout: `single-line`,
                            children: (0, P.jsx)(
                              `textarea`,
                              {
                                "aria-label": f.formatMessage({
                                  id: `settings.chatGpt.personalization.memory.summary.correctionInput`,
                                  defaultMessage: `About You correction`,
                                  description: `Accessible label for the Memory summary Ask or update input`,
                                }),
                                autoFocus: et > 0,
                                className: `block field-sizing-content max-h-28 min-h-7 w-full min-w-0 resize-none overflow-y-auto bg-transparent px-1 py-1 text-base leading-5 tracking-[-0.24px] text-default outline-none placeholder:text-tertiary`,
                                disabled: Z,
                                maxLength: Ze,
                                placeholder: St,
                                rows: 1,
                                value: w,
                                onChange: (e) => Le(e.currentTarget.value),
                                onKeyDown: Ve,
                              },
                              et,
                            ),
                          }),
                          (0, P.jsx)(`div`, {
                            className: `self-end`,
                            children: (0, P.jsx)(C.FooterControls, {
                              layout: `single-line`,
                              children: (0, P.jsx)(C.FooterActions, {
                                children: (0, P.jsx)(C.FooterAction, {
                                  children: (0, P.jsx)(v, {
                                    "aria-label": f.formatMessage({
                                      id: `settings.chatGpt.personalization.memory.summary.submitCorrection`,
                                      defaultMessage: `Submit About You correction`,
                                      description: `Accessible label for submitting an Ask or update request in the Memory summary dialog`,
                                    }),
                                    color: `primary`,
                                    disabled: !xt,
                                    loading: W.isPending,
                                    radius: `full`,
                                    size: `composerSm`,
                                    type: `submit`,
                                    uniform: !0,
                                    children: W.isPending ? null : (0, P.jsx)(i, {}),
                                  }),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              ],
            })
          : null),
      (t[132] = Be),
      (t[133] = xt),
      (t[134] = et),
      (t[135] = St),
      (t[136] = W.isPending),
      (t[137] = w),
      (t[138] = At),
      (t[139] = f),
      (t[140] = b),
      (t[141] = x),
      (t[142] = Z),
      (t[143] = I),
      (t[144] = tt),
      (t[145] = y?.sections),
      (t[146] = T),
      (t[147] = D),
      (t[148] = Ut))
    : (Ut = t[148]);
  let Wt;
  t[149] !== Ft || t[150] !== It || t[151] !== Ht || t[152] !== Ut
    ? ((Wt = (0, P.jsxs)(Ft, {
        className: `overflow-hidden`,
        size: `full`,
        variant: `chatgpt`,
        children: [It, Ht, Ut],
      })),
      (t[149] = Ft),
      (t[150] = It),
      (t[151] = Ht),
      (t[152] = Ut),
      (t[153] = Wt))
    : (Wt = t[153]);
  let Gt;
  t[154] !== jt || t[155] !== Mt || t[156] !== Pt || t[157] !== Q || t[158] !== Wt
    ? ((Gt = (0, P.jsx)(jt, {
        open: !0,
        contentProps: Mt,
        headerActions: Pt,
        size: `xwideTall`,
        variant: `chatgpt`,
        onOpenChange: Q,
        children: Wt,
      })),
      (t[154] = jt),
      (t[155] = Mt),
      (t[156] = Pt),
      (t[157] = Q),
      (t[158] = Wt),
      (t[159] = Gt))
    : (Gt = t[159]);
  let Kt;
  t[160] === M
    ? (Kt = t[161])
    : ((Kt =
        M === `about`
          ? (0, P.jsx)(Me, {
              open: !0,
              size: `compact`,
              variant: `chatgpt`,
              onOpenChange: (e) => {
                e || F(null);
              },
              children: (0, P.jsxs)(re, {
                children: [
                  (0, P.jsx)(h, {
                    children: (0, P.jsx)(fe, {
                      title: (0, P.jsx)(Oe, {
                        children: (0, P.jsx)(o, {
                          id: `settings.memory_summary.about_memory_dialog.title`,
                          defaultMessage: `About memory`,
                          description: `Title of the informational Memory summary dialog`,
                        }),
                      }),
                      subtitle: (0, P.jsx)(Ee, {
                        children: (0, P.jsx)(o, {
                          id: `settings.memory_summary.about_memory_dialog.description`,
                          defaultMessage: `ChatGPT automatically remembers important information about you, and keeps it up to date. This summary page is a brief overview of what’s been remembered — not a complete list.`,
                          description: `Explanation of what the Memory summary represents`,
                        }),
                      }),
                    }),
                  }),
                  (0, P.jsx)(h, {
                    children: (0, P.jsx)(we, {
                      className: `text-info`,
                      href: Xe,
                      initiator: `external_link`,
                      openTarget: `external-browser`,
                      children: (0, P.jsx)(o, {
                        id: `settings.memory_summary.about_memory_dialog.learn_more_button`,
                        defaultMessage: `Learn more`,
                        description: `Link to the ChatGPT Memory Help Center collection`,
                      }),
                    }),
                  }),
                  (0, P.jsx)(h, {
                    children: (0, P.jsx)(pe, {
                      children: (0, P.jsx)(v, {
                        onClick: () => F(null),
                        children: (0, P.jsx)(o, {
                          id: `settings.memory_summary.about_memory_dialog.dismiss_button`,
                          defaultMessage: `Got it`,
                          description: `Button that closes the About memory dialog`,
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            })
          : null),
      (t[160] = M),
      (t[161] = Kt));
  let qt;
  t[162] !== X || t[163] !== M
    ? ((qt =
        M === `delete-and-turn-off`
          ? (0, P.jsx)(Me, {
              open: !0,
              showDialogClose: !X.isPending,
              shouldIgnoreClickOutside: X.isPending,
              size: `compact`,
              variant: `chatgpt`,
              onOpenChange: (e) => {
                !e && !X.isPending && F(null);
              },
              children: (0, P.jsxs)(re, {
                as: `form`,
                onSubmit: (e) => {
                  (e.preventDefault(), X.mutate());
                },
                children: [
                  (0, P.jsx)(h, {
                    children: (0, P.jsx)(fe, {
                      title: (0, P.jsx)(Oe, {
                        children: (0, P.jsx)(o, {
                          id: `settings.memory_summary.delete_and_turn_off_dialog.title`,
                          defaultMessage: `Delete and turn off memory?`,
                          description: `Confirmation title before deleting improved memory and turning Memory off`,
                        }),
                      }),
                      subtitle: (0, P.jsx)(Ee, {
                        children: (0, P.jsx)(o, {
                          id: `settings.memory_summary.delete_and_turn_off_dialog.description`,
                          defaultMessage: `ChatGPT will no longer remember important information about you, so your experience will be less personalized`,
                          description: `Warning shown before deleting improved memory and turning Memory off`,
                        }),
                      }),
                    }),
                  }),
                  (0, P.jsx)(h, {
                    children: (0, P.jsxs)(pe, {
                      expandSingleButton: !1,
                      children: [
                        (0, P.jsx)(v, {
                          color: `secondary`,
                          disabled: X.isPending,
                          onClick: () => F(null),
                          children: (0, P.jsx)(o, {
                            id: `settings.memory_summary.delete_and_turn_off_dialog.cancel_button`,
                            defaultMessage: `Cancel`,
                            description: `Button cancelling deletion and leaving Memory on`,
                          }),
                        }),
                        (0, P.jsx)(v, {
                          color: `danger`,
                          loading: X.isPending,
                          type: `submit`,
                          children: (0, P.jsx)(o, {
                            id: `settings.memory_summary.delete_and_turn_off_dialog.confirm_button`,
                            defaultMessage: `Delete and turn off memory`,
                            description: `Button deleting improved memory and turning Memory off`,
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            })
          : null),
      (t[162] = X),
      (t[163] = M),
      (t[164] = qt))
    : (qt = t[164]);
  let $;
  t[165] !== Ot || t[166] !== Qe
    ? (($ =
        Qe == null
          ? null
          : (0, P.jsx)(Me, {
              open: !0,
              size: `compact`,
              variant: `chatgpt`,
              onOpenChange: (e) => {
                e || $e(null);
              },
              children: (0, P.jsxs)(re, {
                as: `form`,
                onSubmit: (e) => {
                  e.preventDefault();
                  let t = Qe;
                  ($e(null), Ot(t));
                },
                children: [
                  (0, P.jsx)(h, {
                    children: (0, P.jsx)(fe, {
                      title: (0, P.jsx)(Oe, {
                        children: (0, P.jsx)(o, {
                          id: `chatgpt.settings.about_you.follow_up.replace_draft.dialog.title`,
                          defaultMessage: `Replace your drafted response?`,
                          description: `Title warning that a Dive Deeper link will replace the current draft`,
                        }),
                      }),
                      subtitle: (0, P.jsx)(Ee, {
                        children: (0, P.jsx)(o, {
                          id: `chatgpt.settings.about_you.follow_up.replace_draft.dialog.description`,
                          defaultMessage: `The text you’ve entered won’t be saved`,
                          description: `Warning that replacing the Memory summary composer draft discards it`,
                        }),
                      }),
                    }),
                  }),
                  (0, P.jsx)(h, {
                    children: (0, P.jsxs)(pe, {
                      expandSingleButton: !1,
                      children: [
                        (0, P.jsx)(v, {
                          color: `secondary`,
                          onClick: () => $e(null),
                          children: (0, P.jsx)(o, {
                            id: `chatgpt.settings.about_you.follow_up.replace_draft.dialog.button.cancel`,
                            defaultMessage: `Cancel`,
                            description: `Button keeping the current Memory summary composer draft`,
                          }),
                        }),
                        (0, P.jsx)(v, {
                          type: `submit`,
                          children: (0, P.jsx)(o, {
                            id: `chatgpt.settings.about_you.follow_up.replace_draft.dialog.button.confirm`,
                            defaultMessage: `Replace`,
                            description: `Button replacing the current draft with a Dive Deeper action`,
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            })),
      (t[165] = Ot),
      (t[166] = Qe),
      (t[167] = $))
    : ($ = t[167]);
  let Jt;
  return (
    t[168] !== Gt || t[169] !== Kt || t[170] !== qt || t[171] !== $
      ? ((Jt = (0, P.jsxs)(P.Fragment, { children: [Gt, Kt, qt, $] })),
        (t[168] = Gt),
        (t[169] = Kt),
        (t[170] = qt),
        (t[171] = $),
        (t[172] = Jt))
      : (Jt = t[172]),
    Jt
  );
}
function Ve(e) {
  e.nativeEvent.isComposing ||
    e.key !== `Enter` ||
    e.shiftKey ||
    (e.preventDefault(), e.currentTarget.form?.requestSubmit());
}
function He(e) {
  return e + 1;
}
function Ue(e) {
  return e + 1;
}
function We(e) {
  return e.description.trim().length > 0;
}
function Ge(e) {
  return e.id;
}
function Ke(e) {
  return [e.id, e];
}
function qe(e) {
  return { description: e.description, id: e.id, title: e.title };
}
function Je(e, t) {
  if (t == null)
    return e.formatMessage({
      id: `settings.chatGpt.personalization.memory.summary.updating`,
      defaultMessage: `Updating`,
      description: `Status shown while the Memory summary is updating`,
    });
  let n = Date.parse(t);
  if (!Number.isFinite(n))
    return e.formatMessage({
      id: `settings.chatGpt.personalization.memory.summary.updatedJustNow`,
      defaultMessage: `Updated just now`,
      description: `Memory summary timestamp when its exact age is unavailable`,
    });
  let r = Math.max(0, Math.floor((Date.now() - n) / 1e3));
  if (r < 60)
    return e.formatMessage({
      id: `settings.chatGpt.personalization.memory.summary.updatedJustNow`,
      defaultMessage: `Updated just now`,
      description: `Memory summary timestamp for a very recent update`,
    });
  let i = Math.floor(r / 60);
  if (i < 60)
    return e.formatMessage(
      {
        id: `settings.chatGpt.personalization.memory.summary.updatedMinutesAgo`,
        defaultMessage: `Updated {count, plural, one {# minute ago} other {# minutes ago}}`,
        description: `Memory summary timestamp in minutes`,
      },
      { count: i },
    );
  let a = Math.floor(i / 60);
  if (a < 24)
    return e.formatMessage(
      {
        id: `settings.chatGpt.personalization.memory.summary.updatedHoursAgo`,
        defaultMessage: `Updated {count, plural, one {# hour ago} other {# hours ago}}`,
        description: `Memory summary timestamp in hours`,
      },
      { count: a },
    );
  let o = Math.floor(a / 24);
  return e.formatMessage(
    {
      id: `settings.chatGpt.personalization.memory.summary.updatedDaysAgo`,
      defaultMessage: `Updated {count, plural, one {# day ago} other {# days ago}}`,
      description: `Memory summary timestamp in days`,
    },
    { count: o },
  );
}
var Ye,
  N,
  P,
  Xe,
  Ze,
  F = e(() => {
    ((Ye = Te()),
      Ae(),
      f(),
      (N = t(a(), 1)),
      p(),
      x(),
      b(),
      Ie(),
      r(),
      be(),
      g(),
      m(),
      xe(),
      de(),
      d(),
      y(),
      Le(),
      Fe(),
      De(),
      _e(),
      le(),
      Be(),
      S(),
      (P = _()),
      (Xe = `https://help.openai.com/en/collections/8471548-memory`),
      (Ze = 5e3));
  });
export { j as n, F as r, M as t };
//# sourceMappingURL=about-you-summary-5ae62b3bc9cd.js.map
