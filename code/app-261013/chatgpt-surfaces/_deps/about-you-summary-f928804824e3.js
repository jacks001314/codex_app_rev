import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $It as n,
  AO as r,
  BE as i,
  BU as a,
  CJ as o,
  CO as s,
  Cat as c,
  Cot as l,
  Cwt as u,
  DIt as d,
  EPt as f,
  FD as p,
  Fat as m,
  IDt as h,
  Iot as g,
  Ixt as ee,
  J as _,
  JR as v,
  Lot as te,
  MJ as y,
  Mz as b,
  NB as ne,
  ND as x,
  NV as S,
  Nz as C,
  Pat as re,
  Pxt as w,
  RE as T,
  RLt as E,
  Rot as D,
  Sj as O,
  Swt as ie,
  TJ as k,
  TLt as A,
  TO as j,
  UE as M,
  VDt as ae,
  Vxt as oe,
  Xot as se,
  YR as ce,
  Yot as le,
  ZB as ue,
  _It as N,
  _Mt as P,
  _O as de,
  _wt as fe,
  aj as pe,
  c2 as F,
  cO as me,
  cz as I,
  fLt as L,
  fO as R,
  gMt as he,
  gO as ge,
  gwt as _e,
  hot as ve,
  iot as z,
  jDt as ye,
  jH as be,
  lO as xe,
  lot as B,
  mO as Se,
  nst as Ce,
  oIt as we,
  oO as Te,
  oj as Ee,
  pIt as V,
  pLt as H,
  q as De,
  qz as Oe,
  s2 as ke,
  sJ as Ae,
  sO as je,
  sj as U,
  sz as Me,
  t3 as W,
  tst as Ne,
  vO as Pe,
  vzt as Fe,
  wot as Ie,
  xMt as G,
  xat as Le,
  yat as Re,
  yzt as ze,
  z4 as Be,
  zE as Ve,
  zot as He,
  zxt as Ue,
} from "./app-shared-bbfeca5e5737.js";
import {
  CPn as We,
  Cwr as Ge,
  Ko as Ke,
  NDr as qe,
  QQn as Je,
  SG as Ye,
  SPn as Xe,
  Xl as K,
  Ymr as Ze,
  Zl as Qe,
  _On as $e,
  aWn as et,
  bOn as tt,
  d6n as nt,
  e$n as rt,
  eDr as it,
  ehr as at,
  fa as ot,
  gwr as st,
  ha as ct,
  jDr as lt,
  nDr as ut,
  oFr as dt,
  p6n as ft,
  qo as pt,
  rWn as mt,
  wOn as ht,
  wPn as gt,
  xG as _t,
  xPn as vt,
  yPn as yt,
} from "./app-initial-5851df3f6cb1.js";
import { Gs as bt, Jg as xt, Ks as St, qg as Ct } from "./app-primary-fe8a450b3b04.js";
import { n as wt, t as Tt } from "./chatgpt-assistant-message-content-657f67d40f20.js";
import { r as Et, t as Dt } from "./open-chatgpt-entity-side-panel-20bc8764b553.js";
import { n as Ot, t as kt } from "./animated-icon-f572a9e84123.js";
function At(e, t) {
  if (e === void 0) return [];
  let n = V(jt).safeParse(e);
  if (!n.success) throw Error(`Invalid About You section changes`);
  let r = new Set();
  return n.data.map((e) => {
    let n = e.sectionId ?? e.section_id,
      i = t.find((e) => e.id === n);
    if (i == null || r.has(i.id)) throw Error(`Invalid About You section changes`);
    return (
      r.add(i.id),
      {
        sectionId: i.id,
        titleRanges: q(e.titleRanges ?? e.title_ranges, i.title, `title ranges`),
        descriptionRanges: q(
          e.descriptionRanges ?? e.description_ranges,
          i.description,
          `description ranges`,
        ),
      }
    );
  });
}
function q(e, t, n) {
  let r = Mt.safeParse(e);
  if (!r.success) throw Error(`Invalid About You ${n}`);
  let i = 0;
  return r.data.map((e) => {
    let r = e.startUtf16 ?? e.start_utf16,
      a = e.endUtf16 ?? e.end_utf16;
    if (
      r == null ||
      a == null ||
      !Number.isSafeInteger(r) ||
      !Number.isSafeInteger(a) ||
      r < i ||
      r >= a ||
      a > t.length
    )
      throw Error(`Invalid About You ${n}`);
    return ((i = a), { startUtf16: r, endUtf16: a });
  });
}
var jt, Mt;
function Nt() {
  return (Nt = e(() => {
    (f(),
      (jt = H({
        sectionId: A().optional(),
        section_id: A().optional(),
        titleRanges: E().optional(),
        title_ranges: E().optional(),
        descriptionRanges: E().optional(),
        description_ranges: E().optional(),
      })),
      (Mt = V(
        H({
          startUtf16: L().optional(),
          start_utf16: L().optional(),
          endUtf16: L().optional(),
          end_utf16: L().optional(),
        }),
      )));
  }))();
}
function Pt(e) {
  return !!e.description.trim() || !!e.followUps?.length;
}
function Ft(e, t) {
  let n = new Set(e.filter((e) => !Pt(e)).map((e) => e.id));
  return {
    sections: e.filter(Pt),
    sectionChanges: Array.isArray(t)
      ? t.filter((e) => {
          let t = Lt.safeParse(e),
            r = t.success ? (t.data.sectionId ?? t.data.section_id) : void 0;
          return r == null || !n.has(r);
        })
      : t,
  };
}
var It, J, Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt, Gt, Kt, qt;
function Jt() {
  return (Jt = e(() => {
    (f(),
      (It = H({ action: we([`auto_send`, `targeted_reply`, `fill_composer`]), preview: A(), prompt: A() })),
      (J = H({
        description: A().default(``),
        followUps: V(It).optional(),
        follow_ups: V(It).optional(),
        id: A(),
        title: A(),
      }).transform(({ followUps: e, follow_ups: t, ...n }) => ({ ...n, followUps: e ?? t }))),
      (Lt = H({ sectionId: A().optional(), section_id: A().optional() })),
      (Rt = H({
        sectionChanges: E().optional(),
        section_changes: E().optional(),
        debugConversationId: A().nullable().optional(),
        debug_conversation_id: A().nullable().optional(),
        emptyStateMessage: A().optional(),
        empty_state_message: A().optional(),
        generatedAtIso: A().optional(),
        generated_at_iso: A().optional(),
        sections: V(J),
        sourceChecksum: A().nullable().optional(),
        source_checksum: A().nullable().optional(),
      }).transform(
        ({
          sectionChanges: e,
          section_changes: t,
          debugConversationId: n,
          debug_conversation_id: r,
          emptyStateMessage: i,
          empty_state_message: a,
          generatedAtIso: o,
          generated_at_iso: s,
          sections: c,
          sourceChecksum: l,
          source_checksum: u,
        }) => ({
          ...Ft(c, e ?? t),
          debugConversationId: n ?? r ?? null,
          emptyStateMessage: i ?? a ?? ``,
          generatedAtIso: o ?? s ?? ``,
          sourceChecksum: l ?? u ?? null,
        }),
      )),
      (zt = H({
        cachedGeneratedAtIso: A().nullable().optional(),
        cachedSourceChecksum: A().nullable().optional(),
        cached_generated_at_iso: A().nullable().optional(),
        cached_source_checksum: A().nullable().optional(),
        isStale: N().optional(),
        is_stale: N().optional(),
        sourceChecksum: A().nullable().optional(),
        source_checksum: A().nullable().optional(),
      }).transform(
        ({
          cachedGeneratedAtIso: e,
          cachedSourceChecksum: t,
          cached_generated_at_iso: n,
          cached_source_checksum: r,
          isStale: i,
          is_stale: a,
          sourceChecksum: o,
          source_checksum: s,
        }) => ({
          cachedGeneratedAtIso: e ?? n ?? null,
          cachedSourceChecksum: t ?? r ?? null,
          isStale: i === !0 || a === !0,
          sourceChecksum: o ?? s ?? null,
        }),
      )),
      (Bt = H({
        sectionChanges: E().optional(),
        section_changes: E().optional(),
        assistantResponse: A().nullable().optional(),
        assistant_response: A().nullable().optional(),
        conversationId: A().nullable().optional(),
        conversation_id: A().nullable().optional(),
        deletedSectionIds: V(A()).optional(),
        deleted_section_ids: V(A()).optional(),
        ok: N(),
        summaryChecksum: zt.nullable().optional(),
        summary_checksum: zt.nullable().optional(),
        updatedSection: J.nullable().optional(),
        updatedSections: V(J).optional(),
        updated_section: J.nullable().optional(),
        updated_sections: V(J).optional(),
      }).transform(
        ({
          sectionChanges: e,
          section_changes: t,
          assistantResponse: n,
          assistant_response: r,
          conversationId: i,
          conversation_id: a,
          deletedSectionIds: o,
          deleted_section_ids: s,
          ok: c,
          summaryChecksum: l,
          summary_checksum: u,
          updatedSection: d,
          updatedSections: f,
          updated_section: p,
          updated_sections: m,
        }) => {
          let h = d ?? p,
            g = Ft(f ?? m ?? (h == null ? [] : [h]), e ?? t);
          return {
            sectionChanges: g.sectionChanges,
            assistantResponse: n ?? r ?? null,
            conversationId: i ?? a ?? null,
            deletedSectionIds: o ?? s ?? [],
            ok: c,
            summaryChecksum: l ?? u ?? null,
            updatedSections: g.sections,
          };
        },
      )),
      (Vt = H({
        didUpdateSummary: N().optional(),
        did_update_summary: N().optional(),
        response: A(),
      }).transform(({ didUpdateSummary: e, did_update_summary: t, response: n }) => ({
        didUpdateSummary: e === !0 || t === !0,
        response: n,
      }))),
      (Ht = H({ changes: E().optional(), section: J.transform((e) => (Pt(e) ? e : null)) })),
      (Ut = H({ sectionId: A().optional(), section_id: A().optional() }).transform(
        ({ sectionId: e, section_id: t }) => ({ sectionId: e ?? t }),
      )),
      (Wt = H({ id: A(), title: A() })),
      (Gt = H({
        sections: V(Wt).default([]),
        createNewSection: N().optional(),
        create_new_section: N().optional(),
        newSection: Wt.nullable().optional(),
        new_section: Wt.nullable().optional(),
      }).transform((e) => ({
        sections: e.sections,
        createNewSection: e.createNewSection === !0 || e.create_new_section === !0,
        newSection: e.newSection ?? e.new_section ?? null,
      }))),
      (Kt = H({
        id: we([`make_correction`, `dont_mention_again`]),
        label: A().trim().min(1),
        action: H({
          type: we([`open_correction_composer`, `submit_correction`]),
          targetAction: we([`correct`, `forget`]).optional(),
          target_action: we([`correct`, `forget`]).optional(),
          submissionText: A().optional(),
          submission_text: A().optional(),
        }).transform((e) => ({
          type: e.type,
          targetAction: e.targetAction ?? e.target_action,
          submissionText: e.submissionText ?? e.submission_text,
        })),
      }).transform((e) => {
        let t = d(`id`, [
          H({
            id: n(`make_correction`),
            label: A(),
            action: H({
              type: n(`open_correction_composer`),
              targetAction: n(`correct`),
              submissionText: A().optional(),
            }),
          }),
          H({
            id: n(`dont_mention_again`),
            label: A(),
            action: H({
              type: n(`submit_correction`),
              targetAction: n(`forget`),
              submissionText: A().trim().min(1),
            }),
          }),
        ]).safeParse(e);
        return t.success ? t.data : null;
      })),
      (qt = H({
        schemaVersion: L().optional(),
        schema_version: L().optional(),
        actions: V(Kt.nullable().catch(null)),
      })
        .refine((e) => (e.schemaVersion ?? e.schema_version) === 1)
        .transform((e) => ({
          actions: e.actions
            .filter((e, t, n) => e != null && n.findIndex((t) => t?.id === e.id) === t)
            .filter((e) => e != null),
        }))));
  }))();
}
function Yt(e) {
  let n = (0, Xt.c)(10),
    { children: r, removeLabel: i, onRemove: a } = e,
    s;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Zt.jsx)(`span`, {
        className: `flex size-8 shrink-0 items-center justify-center`,
        children: (0, Zt.jsx)(Oe, {}),
      })),
      (n[0] = s))
    : (s = n[0]);
  let c;
  n[1] === r
    ? (c = n[2])
    : ((c = (0, Zt.jsx)(`span`, { className: `min-w-0 flex-1 truncate`, children: r })),
      (n[1] = r),
      (n[2] = c));
  let l;
  n[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((l = (0, Zt.jsx)(o, {})), (n[3] = l)) : (l = n[3]);
  let u;
  n[4] !== a || n[5] !== i
    ? ((u = (0, Zt.jsx)(t, {
        "aria-label": i,
        className: `size-8`,
        color: `ghostSecondary`,
        radius: `full`,
        size: `inline`,
        uniform: !0,
        onClick: a,
        children: l,
      })),
      (n[4] = a),
      (n[5] = i),
      (n[6] = u))
    : (u = n[6]);
  let d;
  return (
    n[7] !== c || n[8] !== u
      ? ((d = (0, Zt.jsxs)(`div`, {
          className: `flex items-center gap-1.5 rounded-t-3xl rounded-b-lg bg-secondary-soft px-1.5 py-2 text-sm leading-5 text-secondary`,
          children: [s, c, u],
        })),
        (n[7] = c),
        (n[8] = u),
        (n[9] = d))
      : (d = n[9]),
    d
  );
}
var Xt, Zt;
function Qt() {
  return (Qt = e(() => {
    ((Xt = Fe()), W(), k(), (Zt = G()));
  }))();
}
function $t(e) {
  let n = (0, tn.c)(61),
    {
      draft: r,
      targetSection: i,
      targetText: a,
      disabled: o,
      canAsk: s,
      inputRef: c,
      response: l,
      onDraftChange: u,
      onClearTarget: d,
      onSubmit: f,
    } = e,
    m = ae(),
    g = ce(),
    [ee, _] = (0, nn.useState)(null),
    v =
      r.length > 0 &&
      (ee === r ||
        r.includes(`
`))
        ? `multiline`
        : `single-line`,
    te;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (e, t) => {
        let n = getComputedStyle(t),
          r = parseFloat(n.lineHeight) + parseFloat(n.paddingTop) + parseFloat(n.paddingBottom);
        t.value.length > 0 && t.scrollHeight > r && _(t.value);
      }),
      (n[0] = te))
    : (te = n[0]);
  let y = p(te),
    ne;
  if (i != null) {
    let e;
    (n[1] === m
      ? (e = n[2])
      : ((e = m.formatMessage({
          id: `chatgpt.settings.about_you.correction.input.placeholder.targeted`,
          defaultMessage: `Make a correction`,
          description: `Placeholder in the Memory summary composer when a section is targeted`,
        })),
        (n[1] = m),
        (n[2] = e)),
      (ne = e));
  } else if (s) {
    let e;
    (n[3] === m
      ? (e = n[4])
      : ((e = m.formatMessage({
          id: `chatgpt.settings.about_you.correction.input.placeholder.untargeted`,
          defaultMessage: `Ask or update`,
          description: `Placeholder in the Memory summary composer when no section is targeted and questions are enabled`,
        })),
        (n[3] = m),
        (n[4] = e)),
      (ne = e));
  } else {
    let e;
    (n[5] === m
      ? (e = n[6])
      : ((e = m.formatMessage({
          id: `chatgpt.settings.about_you.correction.input.placeholder.untargeted.update_only`,
          defaultMessage: `Ask or update`,
          description: `Placeholder in the Memory summary composer when no section is targeted and questions are disabled`,
        })),
        (n[5] = m),
        (n[6] = e)),
      (ne = e));
  }
  let x;
  n[7] === l
    ? (x = n[8])
    : ((x = (0, Y.jsx)(`div`, { className: `relative`, children: l })), (n[7] = l), (n[8] = x));
  let S;
  n[9] !== m || n[10] !== d || n[11] !== g || n[12] !== i || n[13] !== a
    ? ((S =
        i == null
          ? null
          : (0, Y.jsx)(
              fe.div,
              {
                className: `-mx-2.5 grid overflow-hidden`,
                initial: { gridTemplateRows: `0fr`, marginTop: 0, opacity: 0 },
                animate: { gridTemplateRows: `1fr`, marginTop: -10, opacity: 1 },
                exit: { gridTemplateRows: `0fr`, marginTop: 0, opacity: 0 },
                transition: g ? { duration: 0 } : U,
                children: (0, Y.jsx)(`div`, {
                  className: `min-h-0 overflow-hidden`,
                  children: (0, Y.jsx)(`div`, {
                    className: `px-1 pt-1 pb-2.5`,
                    children: (0, Y.jsx)(Yt, {
                      removeLabel: m.formatMessage({
                        id: `settings.chatGpt.personalization.memory.summary.clearTarget`,
                        defaultMessage: `Clear correction target`,
                        description: `Accessible label for removing the targeted Memory summary section from the composer`,
                      }),
                      onRemove: d,
                      children: a
                        ? (0, Y.jsx)(h, {
                            id: `settings.chatGpt.personalization.memory.summary.targetPrompt`,
                            defaultMessage: `“{prompt}”`,
                            description: `Selected memory text or targeted follow-up prompt quoted above the Memory summary composer`,
                            values: { prompt: a },
                          })
                        : i.title,
                    }),
                  }),
                }),
              },
              `correction-target`,
            )),
      (n[9] = m),
      (n[10] = d),
      (n[11] = g),
      (n[12] = i),
      (n[13] = a),
      (n[14] = S))
    : (S = n[14]);
  let C;
  n[15] === S ? (C = n[16]) : ((C = (0, Y.jsx)(ie, { initial: !1, children: S })), (n[15] = S), (n[16] = C));
  let re = v === `multiline` && `mb-0 gap-y-2 ps-0`,
    w;
  n[17] === re
    ? (w = n[18])
    : ((w = he(`-my-2.5 grid min-h-14 grid-cols-[minmax(0,1fr)_auto] items-center gap-x-1.5 ps-1.5`, re)),
      (n[17] = re),
      (n[18] = w));
  let T = v === `multiline` ? `col-span-full min-h-9` : `min-h-14`,
    E;
  n[19] === T ? (E = n[20]) : ((E = he(`flex min-w-0 items-center`, T)), (n[19] = T), (n[20] = E));
  let D;
  n[21] !== c || n[22] !== y ? ((D = Ee(c, y)), (n[21] = c), (n[22] = y), (n[23] = D)) : (D = n[23]);
  let O;
  n[24] === m
    ? (O = n[25])
    : ((O = m.formatMessage({
        id: `settings.chatGpt.personalization.memory.summary.correctionInput`,
        defaultMessage: `About You correction`,
        description: `Accessible label for the Memory summary Ask or update input`,
      })),
      (n[24] = m),
      (n[25] = O));
  let k;
  n[26] === u ? (k = n[27]) : ((k = (e) => u(e.currentTarget.value)), (n[26] = u), (n[27] = k));
  let A;
  n[28] !== o || n[29] !== r || n[30] !== ne || n[31] !== O || n[32] !== k || n[33] !== D
    ? ((A = (0, Y.jsx)(`textarea`, {
        ref: D,
        "aria-label": O,
        className: `block field-sizing-content max-h-28 min-h-9 w-full min-w-0 resize-none overflow-y-auto bg-transparent px-3 py-2 text-base leading-5 text-default outline-none placeholder:text-tertiary`,
        disabled: o,
        maxLength: 5e3,
        name: `memory-correction`,
        placeholder: ne,
        rows: 1,
        value: r,
        onChange: k,
        onKeyDown: en,
      })),
      (n[28] = o),
      (n[29] = r),
      (n[30] = ne),
      (n[31] = O),
      (n[32] = k),
      (n[33] = D),
      (n[34] = A))
    : (A = n[34]);
  let j;
  n[35] !== A || n[36] !== E
    ? ((j = (0, Y.jsx)(`div`, { className: E, children: A })), (n[35] = A), (n[36] = E), (n[37] = j))
    : (j = n[37]);
  let M;
  n[38] === m
    ? (M = n[39])
    : ((M = m.formatMessage({
        id: `settings.chatGpt.personalization.memory.summary.submitCorrection`,
        defaultMessage: `Submit About You correction`,
        description: `Accessible label for submitting an Ask or update request in the Memory summary dialog`,
      })),
      (n[38] = m),
      (n[39] = M));
  let oe;
  n[40] !== o || n[41] !== r ? ((oe = !r.trim() || o), (n[40] = o), (n[41] = r), (n[42] = oe)) : (oe = n[42]);
  let se;
  n[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((se = (0, Y.jsx)(b, { asset: De })), (n[43] = se))
    : (se = n[43]);
  let le;
  n[44] !== M || n[45] !== oe
    ? ((le = (0, Y.jsx)(t, {
        "aria-label": M,
        color: `primary`,
        className: `col-start-2 size-9 justify-self-end disabled:opacity-50`,
        disabled: oe,
        radius: `full`,
        size: `inline`,
        type: `submit`,
        uniform: !0,
        children: se,
      })),
      (n[44] = M),
      (n[45] = oe),
      (n[46] = le))
    : (le = n[46]);
  let ue;
  n[47] !== j || n[48] !== le || n[49] !== w
    ? ((ue = (0, Y.jsxs)(`div`, { className: w, children: [j, le] })),
      (n[47] = j),
      (n[48] = le),
      (n[49] = w),
      (n[50] = ue))
    : (ue = n[50]);
  let N;
  n[51] !== v || n[52] !== ue || n[53] !== C
    ? ((N = (0, Y.jsxs)(nt, {
        layout: v,
        paddingVariant: `inset`,
        radiusVariant: `large`,
        surfaceVariant: `opaque`,
        children: [C, ue],
      })),
      (n[51] = v),
      (n[52] = ue),
      (n[53] = C),
      (n[54] = N))
    : (N = n[54]);
  let P;
  n[55] !== f || n[56] !== N
    ? ((P = (0, Y.jsx)(`form`, { onSubmit: f, children: N })), (n[55] = f), (n[56] = N), (n[57] = P))
    : (P = n[57]);
  let de;
  return (
    n[58] !== x || n[59] !== P
      ? ((de = (0, Y.jsxs)(`div`, { className: `relative min-w-0`, children: [x, P] })),
        (n[58] = x),
        (n[59] = P),
        (n[60] = de))
      : (de = n[60]),
    de
  );
}
function en(e) {
  e.nativeEvent.isComposing ||
    e.key !== `Enter` ||
    e.shiftKey ||
    (e.preventDefault(), e.currentTarget.form?.requestSubmit());
}
var tn, nn, Y;
function rn() {
  return (rn = e(() => {
    ((tn = Fe()),
      _(),
      P(),
      u(),
      _e(),
      (nn = ze()),
      ye(),
      ft(),
      Qt(),
      W(),
      C(),
      v(),
      x(),
      O(),
      pe(),
      (Y = G()));
  }))();
}
var an, on, sn, cn;
function ln() {
  return (ln = e(() => {
    ((an = `_shimmer_18iay_10`),
      (on = `_book_18iay_34`),
      (sn = `_label_18iay_48`),
      (cn = { shimmer: an, book: on, label: sn }));
  }))();
}
function un() {
  let e = (0, dn.c)(11),
    t = ae(),
    n = ce(),
    r;
  e[0] === t
    ? (r = e[1])
    : ((r = t.formatMessage({
        id: `settings.about_you.summary.loading_sections_aria_label`,
        defaultMessage: `Loading About You summary…`,
        description: `Accessible status label for the Memory summary modal while ChatGPT generates the user's initial summary.`,
      })),
      (e[0] = t),
      (e[1] = r));
  let i = !n && cn.shimmer,
    a;
  e[2] === i
    ? (a = e[3])
    : ((a = he(`flex flex-col items-center text-secondary opacity-50`, i)), (e[2] = i), (e[3] = a));
  let o, s;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, fn.jsx)(`div`, {
        className: cn.book,
        "aria-hidden": !0,
        children: (0, fn.jsx)(kt, {
          animation: `memory`,
          loop: !0,
          fallbackIcon: (0, fn.jsx)(b, { asset: y(ke), className: `shrink-0`, focusable: `false` }),
        }),
      })),
      (s = (0, fn.jsx)(`div`, {
        className: he(`mt-2 text-lg font-normal`, cn.label),
        children: (0, fn.jsx)(h, {
          id: `settings.about_you.summary.generating`,
          defaultMessage: `Generating`,
          description: `Status displayed while ChatGPT generates the Memory summary`,
        }),
      })),
      (e[4] = o),
      (e[5] = s))
    : ((o = e[4]), (s = e[5]));
  let c;
  e[6] === a
    ? (c = e[7])
    : ((c = (0, fn.jsxs)(`div`, { className: a, children: [o, s] })), (e[6] = a), (e[7] = c));
  let l;
  return (
    e[8] !== r || e[9] !== c
      ? ((l = (0, fn.jsx)(`div`, {
          className: `flex min-h-80 flex-1 items-center justify-center pb-16 select-none`,
          role: `status`,
          "aria-busy": !0,
          "aria-label": r,
          children: c,
        })),
        (e[8] = r),
        (e[9] = c),
        (e[10] = l))
      : (l = e[10]),
    l
  );
}
var dn, fn;
function pn() {
  return (pn = e(() => {
    ((dn = Fe()), F(), P(), ye(), Ot(), C(), v(), ln(), (fn = G()));
  }))();
}
function mn(e) {
  let n = (0, vn.c)(43),
    { accountId: r, conversationId: i, response: a, version: s, onOpenConversation: c } = e,
    l = ee(st),
    u = ae(),
    d;
  n[0] === u
    ? (d = n[1])
    : ((d = u.formatMessage({
        id: `settings.memory_summary.response.show`,
        defaultMessage: `Show conversation`,
        description: `Restores the latest Memory summary answer preview above the composer`,
      })),
      (n[0] = u),
      (n[1] = d));
  let f = d,
    p = oe($e),
    m = Ue(i == null ? null : tt, i ?? ``),
    h = (0, yn.useContext)(K),
    g = (m ?? p !== `disabled`) ? `restricted` : h,
    [_, v] = (0, yn.useState)(!1),
    te;
  n[2] !== r || n[3] !== i || n[4] !== s
    ? ((te = [`chatgpt-about-you-conversation`, r, i, s]), (n[2] = r), (n[3] = i), (n[4] = s), (n[5] = te))
    : (te = n[5]);
  let y;
  n[6] !== r || n[7] !== i
    ? ((y = (e) => {
        let { signal: t } = e;
        return i == null
          ? null
          : Ze.safeGet(`/conversation/{conversation_id}`, {
              additionalHeaders: { "ChatGPT-Account-ID": r },
              parameters: { path: { conversation_id: i } },
              signal: t,
            });
      }),
      (n[6] = r),
      (n[7] = i),
      (n[8] = y))
    : (y = n[8]);
  let b = i != null,
    ne;
  n[9] !== te || n[10] !== y || n[11] !== b
    ? ((ne = {
        queryKey: te,
        queryFn: y,
        enabled: b,
        staleTime: re.INFINITE,
        gcTime: 0,
        retry: !1,
        refetchOnWindowFocus: !1,
      }),
      (n[9] = te),
      (n[10] = y),
      (n[11] = b),
      (n[12] = ne))
    : (ne = n[12]);
  let { data: x } = se(ne),
    C,
    w;
  n[13] === x
    ? ((C = n[14]), (w = n[15]))
    : ((C = (x == null ? null : mt(x))?.findLast(gn)),
      (w = C?.turn.items.findLast(hn)),
      (n[13] = x),
      (n[14] = C),
      (n[15] = w));
  let T = w,
    E = T?.content,
    D;
  n[16] !== E || n[17] !== a
    ? ((D = a
        ? null
        : (0, X.jsx)(`div`, { role: `status`, "aria-atomic": `true`, className: `sr-only`, children: E })),
      (n[16] = E),
      (n[17] = a),
      (n[18] = D))
    : (D = n[18]);
  let O;
  n[19] !== c || n[20] !== l
    ? ((O = {
        externalLinkTarget: `external-browser`,
        openEntity: (e, t) => {
          (c(), Et(l, e, t));
        },
      }),
      (n[19] = c),
      (n[20] = l),
      (n[21] = O))
    : (O = n[21]);
  let ie;
  n[22] !== _ || n[23] !== f
    ? ((ie = _
        ? (0, X.jsx)(`div`, {
            className: `absolute inset-x-0 bottom-full z-10 flex justify-center pb-2`,
            children: (0, X.jsx)(Me, {
              cloneCustomTrigger: !0,
              tooltipContent: f,
              children: (0, X.jsx)(t, {
                className: `size-6 border border-primary-outline bg-surface/50`,
                "aria-label": f,
                color: `ghostSecondary`,
                radius: `full`,
                size: `inline`,
                uniform: !0,
                onClick: () => v(!1),
                children: (0, X.jsx)(S, { className: `rotate-180` }),
              }),
            }),
          })
        : null),
      (n[22] = _),
      (n[23] = f),
      (n[24] = ie))
    : (ie = n[24]);
  let k;
  n[25] !== i || n[26] !== _ || n[27] !== g || n[28] !== u || n[29] !== T || n[30] !== C?.id || n[31] !== a
    ? ((k =
        !_ && (a || T != null)
          ? (0, X.jsxs)(`div`, {
              className: `absolute inset-x-0 bottom-full z-10 mb-2 h-32 rounded-3xl bg-surface py-3 ps-5 pe-12 text-default shadow-lg select-text`,
              children: [
                (0, X.jsx)(t, {
                  "aria-label": u.formatMessage({
                    id: `settings.memory_summary.response.dismiss`,
                    defaultMessage: `Dismiss`,
                    description: `Hides the latest Memory summary answer preview while keeping the answer available to restore`,
                  }),
                  className: `absolute end-2 top-2 size-8`,
                  color: `ghostSecondary`,
                  radius: `full`,
                  size: `inline`,
                  uniform: !0,
                  onClick: () => v(!0),
                  children: (0, X.jsx)(o, {}),
                }),
                (0, X.jsx)(`div`, {
                  className: `h-full min-w-0 overflow-y-auto`,
                  children:
                    i != null && T != null
                      ? (0, X.jsx)(_t, {
                          route: {
                            conversationId: i,
                            pathname: Le(i),
                            routeKind: `chatgpt-thread`,
                            routeTemplate: Re,
                          },
                          children: (0, X.jsx)(Tt, {
                            item: T,
                            conversationId: Je(i),
                            cwd: null,
                            hostId: z,
                            trackShownImpressions: !1,
                            turnId: C?.id,
                          }),
                        })
                      : (0, X.jsx)(ct, {
                          components: {
                            a: Ke({
                              conversationId: null,
                              externalResourcePolicy: g,
                              isBrowserEnabled: !1,
                              openFileLinksInSidePanel: !1,
                              openTarget: `external-browser`,
                            }),
                          },
                          externalResourcePolicy: g,
                          textStyle: { kind: `assistant-message` },
                          children: a,
                        }),
                }),
              ],
            })
          : null),
      (n[25] = i),
      (n[26] = _),
      (n[27] = g),
      (n[28] = u),
      (n[29] = T),
      (n[30] = C?.id),
      (n[31] = a),
      (n[32] = k))
    : (k = n[32]);
  let A;
  n[33] !== k || n[34] !== O || n[35] !== ie
    ? ((A = (0, X.jsxs)(bt, { value: O, children: [ie, k] })),
      (n[33] = k),
      (n[34] = O),
      (n[35] = ie),
      (n[36] = A))
    : (A = n[36]);
  let j;
  n[37] !== g || n[38] !== A
    ? ((j = (0, X.jsx)(K, { value: g, children: A })), (n[37] = g), (n[38] = A), (n[39] = j))
    : (j = n[39]);
  let M;
  return (
    n[40] !== j || n[41] !== D
      ? ((M = (0, X.jsxs)(X.Fragment, { children: [D, j] })), (n[40] = j), (n[41] = D), (n[42] = M))
      : (M = n[42]),
    M
  );
}
function hn(e) {
  return e.type === `assistant-message`;
}
function gn(e) {
  let { turn: t } = e;
  return t.items.some(_n);
}
function _n(e) {
  return e.type === `assistant-message`;
}
var vn, yn, X;
function bn() {
  return (bn = e(() => {
    ((vn = Fe()),
      le(),
      w(),
      (yn = ze()),
      ye(),
      wt(),
      et(),
      St(),
      at(),
      rt(),
      ht(),
      Dt(),
      c(),
      W(),
      k(),
      I(),
      ot(),
      pt(),
      Qe(),
      Ge(),
      Ye(),
      dt(),
      m(),
      (X = G()));
  }))();
}
var xn, Sn;
function Cn() {
  return (Cn = e(() => {
    ((xn = `_changed_1wjrg_2`),
      (Sn = {
        changed: xn,
        "changed-text": `_changed-text_1wjrg_2`,
        "changed-text-reduced": `_changed-text-reduced_1wjrg_2`,
      }));
  }))();
}
function wn(e) {
  let t = (0, Tn.c)(9),
    { text: n, ranges: r } = e,
    [i, a] = (0, En.useState)(!1);
  if (i || !r?.length) return n;
  let o;
  t[0] !== r || t[1] !== n
    ? ((o = r.map((e, t) =>
        (0, Dn.jsxs)(
          En.Fragment,
          {
            children: [
              n.slice(t === 0 ? 0 : r[t - 1].endUtf16, e.startUtf16),
              (0, Dn.jsx)(`mark`, {
                className: Sn.changed,
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
      ? ((c = (0, Dn.jsxs)(Dn.Fragment, { children: [o, s] })), (t[6] = o), (t[7] = s), (t[8] = c))
      : (c = t[8]),
    c
  );
}
var Tn, En, Dn;
function On() {
  return (On = e(() => {
    ((Tn = Fe()), (En = ze()), Cn(), (Dn = G()));
  }))();
}
function kn(e) {
  let t = (0, Fn.c)(49),
    {
      section: n,
      changes: r,
      highlightRevision: i,
      isUpdating: a,
      disabled: o,
      onEdit: s,
      onFollowUp: c,
      onSelectText: l,
    } = e,
    u = (0, In.useRef)(null),
    d;
  t[0] === n.title ? (d = t[1]) : ((d = Pn(n.title)), (t[0] = n.title), (t[1] = d));
  let f = d,
    p = n.title.length,
    m;
  t[2] === n.title ? (m = t[3]) : ((m = n.title.trimStart()), (t[2] = n.title), (t[3] = m));
  let h = p - m.length,
    g;
  t[4] !== r?.titleRanges || t[5] !== f || t[6] !== h
    ? ((g = r?.titleRanges.flatMap((e) => {
        let t = Math.max(0, e.startUtf16 - h),
          n = Math.min(f.length, e.endUtf16 - h);
        return t < n ? [{ startUtf16: t, endUtf16: n }] : [];
      })),
      (t[4] = r?.titleRanges),
      (t[5] = f),
      (t[6] = h),
      (t[7] = g))
    : (g = t[7]);
  let ee = g,
    _;
  t[8] !== o || t[9] !== l || t[10] !== n
    ? ((_ = function () {
        let e = window.getSelection(),
          t = u.current;
        if (o || !t || !e || e.isCollapsed || !e.rangeCount) {
          l(null);
          return;
        }
        let r = e.getRangeAt(0).cloneRange();
        if (!r.intersectsNode(t)) {
          l(null);
          return;
        }
        let i = document.createRange();
        (i.selectNodeContents(t),
          r.compareBoundaryPoints(Range.START_TO_START, i) < 0 && r.setStart(i.startContainer, i.startOffset),
          r.compareBoundaryPoints(Range.END_TO_END, i) > 0 && r.setEnd(i.endContainer, i.endOffset));
        let a = r.toString().replace(/\s+/g, ` `).trim();
        if (!a) {
          l(null);
          return;
        }
        l({ section: n, text: a.length > 500 ? `${a.slice(0, 497).trimEnd()}...` : a, range: r, element: t });
      }),
      (t[8] = o),
      (t[9] = l),
      (t[10] = n),
      (t[11] = _))
    : (_ = t[11]);
  let v = _,
    te = n.id,
    y = o || !n.description,
    b;
  t[12] !== s || t[13] !== n ? ((b = () => s(n)), (t[12] = s), (t[13] = n), (t[14] = b)) : (b = t[14]);
  let ne = a && `loading-shimmer`,
    x;
  t[15] === ne ? (x = t[16]) : ((x = he(ne)), (t[15] = ne), (t[16] = x));
  let S;
  t[17] !== i || t[18] !== f || t[19] !== ee
    ? ((S = (0, Z.jsx)(wn, { text: f, ranges: ee }, i)), (t[17] = i), (t[18] = f), (t[19] = ee), (t[20] = S))
    : (S = t[20]);
  let C;
  t[21] !== x || t[22] !== S
    ? ((C = (0, Z.jsx)(`span`, { className: x, children: S })), (t[21] = x), (t[22] = S), (t[23] = C))
    : (C = t[23]);
  let re;
  t[24] !== C || t[25] !== y || t[26] !== b
    ? ((re = (0, Z.jsx)(`h3`, {
        className: `text-heading-sm leading-6.5 font-semibold text-default`,
        children: (0, Z.jsx)(`button`, {
          type: `button`,
          className: `max-w-full cursor-interaction rounded text-start focus-visible:outline-ring`,
          disabled: y,
          onClick: b,
          children: C,
        }),
      })),
      (t[24] = C),
      (t[25] = y),
      (t[26] = b),
      (t[27] = re))
    : (re = t[27]);
  let w;
  t[28] !== r?.descriptionRanges || t[29] !== i || t[30] !== a || t[31] !== n.description
    ? ((w = n.description.trim()
        ? (0, Z.jsx)(`p`, {
            ref: u,
            className: he(
              `mt-1 text-base leading-6 font-normal whitespace-pre-wrap text-default select-text`,
              a && `loading-shimmer`,
            ),
            children: (0, Z.jsx)(wn, { text: n.description, ranges: r?.descriptionRanges }, i),
          })
        : null),
      (t[28] = r?.descriptionRanges),
      (t[29] = i),
      (t[30] = a),
      (t[31] = n.description),
      (t[32] = w))
    : (w = t[32]);
  let T;
  t[33] !== a || t[34] !== n.description
    ? ((T =
        !n.description.trim() && a
          ? (0, Z.jsx)(`div`, { className: `my-2 h-6 rounded bg-text/10 motion-safe:animate-pulse` })
          : null),
      (t[33] = a),
      (t[34] = n.description),
      (t[35] = T))
    : (T = t[35]);
  let E;
  t[36] !== o || t[37] !== c || t[38] !== n
    ? ((E = n.followUps?.length
        ? (0, Z.jsx)(`div`, {
            className: `mt-2 flex max-w-full flex-col items-start gap-1.5`,
            children: n.followUps.map((e) =>
              (0, Z.jsxs)(
                `button`,
                {
                  type: `button`,
                  className: `group flex max-w-full cursor-interaction items-start gap-2 rounded-md text-start select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-default disabled:opacity-50`,
                  disabled: o,
                  onClick: () => c(e, n),
                  children: [
                    (0, Z.jsx)(Oe, {
                      className: `mt-0.5 text-tertiary transition-transform duration-basic ease-enter-snappy group-hover:translate-x-1.5 group-hover:text-info`,
                    }),
                    (0, Z.jsx)(`span`, {
                      className: `text-base leading-6 font-normal text-default underline decoration-text-tertiary decoration-dotted underline-offset-2 group-hover:text-info group-hover:decoration-inherit`,
                      children: e.preview,
                    }),
                  ],
                },
                `${e.action}:${e.prompt}`,
              ),
            ),
          })
        : null),
      (t[36] = o),
      (t[37] = c),
      (t[38] = n),
      (t[39] = E))
    : (E = t[39]);
  let D;
  return (
    t[40] !== a ||
    t[41] !== n.id ||
    t[42] !== v ||
    t[43] !== re ||
    t[44] !== w ||
    t[45] !== T ||
    t[46] !== E ||
    t[47] !== f
      ? ((D = (0, Z.jsxs)(`section`, {
          "aria-label": f,
          "aria-busy": a,
          className: `py-2`,
          "data-memory-section-id": te,
          onKeyUp: v,
          onMouseUp: v,
          children: [re, w, T, E],
        })),
        (t[40] = a),
        (t[41] = n.id),
        (t[42] = v),
        (t[43] = re),
        (t[44] = w),
        (t[45] = T),
        (t[46] = E),
        (t[47] = f),
        (t[48] = D))
      : (D = t[48]),
    D
  );
}
function An(e) {
  let t = (0, Fn.c)(27),
    { selection: n, actions: r, onAction: a, onDismiss: o } = e,
    s;
  t[0] === o
    ? (s = t[1])
    : ((s = () => {
        window.getSelection()?.isCollapsed && o();
      }),
      (t[0] = o),
      (t[1] = s));
  let c = (0, In.useEffectEvent)(s),
    l;
  t[2] === c
    ? (l = t[3])
    : ((l = () => (
        document.addEventListener(`selectionchange`, c),
        () => document.removeEventListener(`selectionchange`, c)
      )),
      (t[2] = c),
      (t[3] = l));
  let u;
  (t[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((u = []), (t[4] = u)) : (u = t[4]),
    (0, In.useEffect)(l, u));
  let d;
  t[5] === n.range
    ? (d = t[6])
    : ((d = () => n.range.getClientRects()[0] ?? n.range.getBoundingClientRect()),
      (t[5] = n.range),
      (t[6] = d));
  let f;
  t[7] !== n.element || t[8] !== d
    ? ((f = { getBoundingClientRect: d, contextElement: n.element }),
      (t[7] = n.element),
      (t[8] = d),
      (t[9] = f))
    : (f = t[9]);
  let p = f,
    m;
  t[10] === o
    ? (m = t[11])
    : ((m = (e) => {
        e || o();
      }),
      (t[10] = o),
      (t[11] = m));
  let h;
  t[12] === p
    ? (h = t[13])
    : ((h = (0, Z.jsx)(Ve, { virtualRef: { current: p } })), (t[12] = p), (t[13] = h));
  let g;
  if (t[14] !== r || t[15] !== a || t[16] !== n) {
    let e;
    (t[18] !== a || t[19] !== n
      ? ((e = (e) => (0, Z.jsx)(We, { onClick: () => a(e, n), children: e.label }, e.id)),
        (t[18] = a),
        (t[19] = n),
        (t[20] = e))
      : (e = t[20]),
      (g = r.map(e)),
      (t[14] = r),
      (t[15] = a),
      (t[16] = n),
      (t[17] = g));
  } else g = t[17];
  let ee;
  t[21] === g
    ? (ee = t[22])
    : ((ee = (0, Z.jsx)(i, {
        className: `z-50 outline-hidden`,
        unstyled: !0,
        size: `content`,
        side: `top`,
        align: `start`,
        onOpenAutoFocus: Nn,
        onCloseAutoFocus: Mn,
        onEscapeKeyDown: jn,
        children: (0, Z.jsx)(Xe, { children: g }),
      })),
      (t[21] = g),
      (t[22] = ee));
  let _;
  return (
    t[23] !== m || t[24] !== h || t[25] !== ee
      ? ((_ = (0, Z.jsxs)(T, { open: !0, onOpenChange: m, children: [h, ee] })),
        (t[23] = m),
        (t[24] = h),
        (t[25] = ee),
        (t[26] = _))
      : (_ = t[26]),
    _
  );
}
function jn(e) {
  return e.stopPropagation();
}
function Mn(e) {
  return e.preventDefault();
}
function Nn(e) {
  return e.preventDefault();
}
function Pn(e) {
  let t = e.trim().split(/(\s+)/);
  return t
    .map((e, n) =>
      n > 0 &&
      n < t.length - 1 &&
      /^(a|an|and|as|at|but|by|for|from|in|nor|of|on|or|per|the|to|vs|via|with)$/i.test(e)
        ? e.toLowerCase()
        : e,
    )
    .join(``);
}
var Fn, In, Z;
function Ln() {
  return (Ln = e(() => {
    ((Fn = Fe()), P(), (In = ze()), gt(), k(), M(), On(), (Z = G()));
  }))();
}
function Rn(e) {
  let t = (0, Qn.c)(11),
    { accountId: n, forceRefresh: r, contextualHint: i, source: a, onClose: o } = e,
    s = ee(l),
    { data: c } = oe(lt),
    u;
  t[0] !== n || t[1] !== s || t[2] !== c?.memoryInSearchEnabled
    ? ((u = async function () {
        (await xt(s, n, `m3m`, !1),
          c?.memoryInSearchEnabled === !0 && (await xt(s, n, `memory_in_search`, !1)),
          await Ze.safePost(`/memories/about_you/summary/cache/delete`, {
            additionalHeaders: { "ChatGPT-Account-ID": n },
            requestBody: { disableMemory: !0 },
          }));
      }),
      (t[0] = n),
      (t[1] = s),
      (t[2] = c?.memoryInSearchEnabled),
      (t[3] = u))
    : (u = t[3]);
  let d = u,
    f;
  return (
    t[4] !== n || t[5] !== i || t[6] !== d || t[7] !== r || t[8] !== o || t[9] !== a
      ? ((f = (0, $.jsx)(
          zn,
          {
            accountId: n,
            forceRefresh: r,
            contextualHint: i,
            source: a,
            onClose: o,
            onDeleteAndTurnOffMemory: d,
          },
          n,
        )),
        (t[4] = n),
        (t[5] = i),
        (t[6] = d),
        (t[7] = r),
        (t[8] = o),
        (t[9] = a),
        (t[10] = f))
      : (f = t[10]),
    f
  );
}
function zn(e) {
  let n = (0, Qn.c)(304),
    {
      accountId: r,
      forceRefresh: i,
      contextualHint: o,
      source: c,
      onClose: u,
      onDeleteAndTurnOffMemory: d,
    } = e,
    f = i !== void 0 && i,
    p = c === void 0 ? `personalization-setting` : c,
    m = ee(l),
    g = ae(),
    _ = Ce(),
    v = ut(`820196652`),
    y;
  n[0] === r ? (y = n[1]) : ((y = [`chatgpt-about-you-summary`, r]), (n[0] = r), (n[1] = y));
  let b = y,
    x;
  n[2] !== b || n[3] !== o
    ? ((x = o == null ? b : [...b, o]), (n[2] = b), (n[3] = o), (n[4] = x))
    : (x = n[4]);
  let S = x,
    C;
  n[5] === r ? (C = n[6]) : ((C = [`chatgpt-about-you-summary-checksum`, r]), (n[5] = r), (n[6] = C));
  let w = C,
    [T, E] = (0, Q.useState)(!1),
    {
      data: D,
      isError: O,
      isLoading: ie,
      isFetching: k,
      refetch: A,
    } = se({
      queryKey: S,
      queryFn: async (e) => {
        let { signal: t } = e;
        E(!1);
        let n = {
          contextualHint: o,
          source: p,
          signal: t,
          onStarted: (e) => {
            (_.setQueryData(S, e), E(!0));
          },
          onSectionTypes: Je,
          onUpdatedSection: it,
        };
        if (
          f &&
          o == null &&
          (
            await _.fetchQuery({
              queryKey: w,
              queryFn: () =>
                Ze.safeGet(`/memories/about_you/summary/checksum`, {
                  additionalHeaders: { "ChatGPT-Account-ID": r },
                  parameters: { query: { source: p } },
                }),
              staleTime: 0,
            })
          ).isStale
        ) {
          let e = await Yn({ accountId: r, ...n });
          return (
            await Promise.all([
              _.invalidateQueries({ queryKey: w }),
              _.invalidateQueries({ queryKey: b, refetchType: `none` }),
            ]),
            e
          );
        }
        let i = await Zn(r, n);
        return (
          o != null &&
            (await Promise.all([
              _.invalidateQueries({ queryKey: w }),
              _.invalidateQueries({ queryKey: b, refetchType: `none` }),
            ]),
            rt(i.sections, i.sectionChanges ?? [])),
          i
        );
      },
      refetchOnMount: f || o != null ? `always` : !0,
      staleTime: re.ONE_MINUTE,
    }),
    M = ie || ((f || o != null) && k && !T),
    oe;
  n[7] !== r || n[8] !== p
    ? ((oe = () =>
        Ze.safeGet(`/memories/about_you/summary/checksum`, {
          additionalHeaders: { "ChatGPT-Account-ID": r },
          parameters: { query: { source: p } },
        })),
      (n[7] = r),
      (n[8] = p),
      (n[9] = oe))
    : (oe = n[9]);
  let ce;
  n[10] !== w || n[11] !== oe
    ? ((ce = { queryKey: w, queryFn: oe, staleTime: re.ONE_MINUTE }), (n[10] = w), (n[11] = oe), (n[12] = ce))
    : (ce = n[12]);
  let { data: le } = se(ce),
    N;
  n[13] !== r || n[14] !== g.locale
    ? ((N = [`chatgpt-about-you-selection-actions`, r, g.locale]),
      (n[13] = r),
      (n[14] = g.locale),
      (n[15] = N))
    : (N = n[15]);
  let P;
  n[16] === r
    ? (P = n[17])
    : ((P = async () => {
        let e = await Ze.safeGet(`/memories/about_you/selection_correction_actions`, {
          additionalHeaders: { "ChatGPT-Account-ID": r },
        });
        return qt.parse(e).actions;
      }),
      (n[16] = r),
      (n[17] = P));
  let fe;
  n[18] !== P || n[19] !== N
    ? ((fe = { queryKey: N, queryFn: P, staleTime: re.ONE_MINUTE, retry: !1, refetchOnMount: `always` }),
      (n[18] = P),
      (n[19] = N),
      (n[20] = fe))
    : (fe = n[20]);
  let { data: pe } = se(fe),
    [F, I] = (0, Q.useState)(``),
    [L, R] = (0, Q.useState)(null),
    [_e, z] = (0, Q.useState)(null),
    [ye, B] = (0, Q.useState)(`correct`),
    [we, Ee] = (0, Q.useState)(null),
    [V, H] = (0, Q.useState)(null),
    [De, Oe] = (0, Q.useState)(0),
    [ke, U] = (0, Q.useState)(null),
    [Me, W] = (0, Q.useState)(null),
    Ne = (0, Q.useRef)(null),
    Pe = (0, Q.useRef)(null),
    Fe = (0, Q.useRef)(null),
    [Ie, G] = (0, Q.useState)(null),
    [Le, Re] = (0, Q.useState)(null),
    ze =
      Le?.sections[0]?.id ?? (Le?.createNewSection ? (Le.newSection?.id ?? `pending-memory-section`) : null),
    Be,
    Ve;
  (n[21] === ze
    ? ((Be = n[22]), (Ve = n[23]))
    : ((Be = () => {
        ze != null &&
          Array.from(Fe.current?.querySelectorAll(`[data-memory-section-id]`) ?? [])
            .find((e) => e.dataset.memorySectionId === ze)
            ?.scrollIntoView({ block: `center`, behavior: `instant` });
      }),
      (Ve = [ze]),
      (n[21] = ze),
      (n[22] = Be),
      (n[23] = Ve)),
    (0, Q.useEffect)(Be, Ve));
  let Ue;
  n[24] === Symbol.for(`react.memo_cache_sentinel`) ? ((Ue = new Set()), (n[24] = Ue)) : (Ue = n[24]);
  let We = (0, Q.useRef)(Ue),
    Ge = (0, Q.useRef)(null),
    Ke,
    qe;
  (n[25] !== r || n[26] !== _
    ? ((Ke = () => () => {
        Ge.current != null &&
          (Ge.current.abort(),
          _.invalidateQueries({ queryKey: [`chatgpt-about-you-summary`, r], refetchType: `none` }),
          _.invalidateQueries({ queryKey: [`chatgpt-about-you-summary-checksum`, r], refetchType: `none` }));
      }),
      (qe = [r, _]),
      (n[25] = r),
      (n[26] = _),
      (n[27] = Ke),
      (n[28] = qe))
    : ((Ke = n[27]), (qe = n[28])),
    (0, Q.useEffect)(Ke, qe));
  function Je(e) {
    _.setQueryData(S, (t) => (t == null ? t : { ...t, sections: e.map(Gn) }));
  }
  let Ye;
  n[29] === Symbol.for(`react.memo_cache_sentinel`) ? ((Ye = {}), (n[29] = Ye)) : (Ye = n[29]);
  let [Xe, K] = (0, Q.useState)(Ye),
    Qe = (0, Q.useRef)(0),
    $e;
  n[30] === Symbol.for(`react.memo_cache_sentinel`) ? (($e = new Map()), (n[30] = $e)) : ($e = n[30]);
  let et = (0, Q.useRef)($e),
    tt;
  n[31] === K
    ? (tt = n[32])
    : ((tt = (e, t) => {
        let n = (Qe.current += 1);
        K((r) => ({ ...r, [e.id]: t == null ? void 0 : { section: e, changes: t, revision: n } }));
      }),
      (n[31] = K),
      (n[32] = tt));
  let nt = tt,
    rt = (e, t) => {
      for (let n of e) {
        let e = et.current.get(n.id);
        (e?.title !== n.title || e.description !== n.description) &&
          nt(n, t.find((e) => e.sectionId === n.id) ?? null);
      }
    };
  function it(e, t) {
    (t == null ? et.current.delete(e.id) : et.current.set(e.id, e),
      nt(e, t),
      _.setQueryData(S, (t) => {
        if (t == null) return t;
        let n = t.sections.findIndex((t) => t.id === e.id),
          r = [...t.sections];
        return (n === -1 ? r.push(e) : (r[n] = e), { ...t, sections: r });
      }));
  }
  let at;
  n[33] !== _ || n[34] !== K || n[35] !== S
    ? ((at = (e) => {
        (et.current.delete(e),
          K((t) => ({ ...t, [e]: void 0 })),
          _.setQueryData(S, (t) =>
            t == null ? t : { ...t, sections: t.sections.filter((t) => t.id !== e) },
          ));
      }),
      (n[33] = _),
      (n[34] = K),
      (n[35] = S),
      (n[36] = at))
    : (at = n[36]);
  let ot = at,
    st;
  n[37] !== _ || n[38] !== S
    ? ((st = (e) => {
        _.setQueryData(S, (t) => {
          if (t == null) return t;
          let n = new Set(e.deletedSectionIds),
            r = new Map(e.updatedSections.map(Wn)),
            i = t.sections.filter((e) => !n.has(e.id)).map((e) => r.get(e.id) ?? e),
            a = new Set(i.map(Un));
          for (let t of e.updatedSections) a.has(t.id) || i.push(t);
          return {
            ...t,
            generatedAtIso: e.summaryChecksum?.cachedGeneratedAtIso ?? t.generatedAtIso,
            sections: i,
            sourceChecksum: e.summaryChecksum?.cachedSourceChecksum ?? t.sourceChecksum,
          };
        });
      }),
      (n[37] = _),
      (n[38] = S),
      (n[39] = st))
    : (st = n[39]);
  let ct = st,
    lt;
  n[40] !== r ||
  n[41] !== v ||
  n[42] !== we ||
  n[43] !== ot ||
  n[44] !== _ ||
  n[45] !== H ||
  n[46] !== Re ||
  n[47] !== it ||
  n[48] !== S
    ? ((lt = (e) => {
        Ge.current = new AbortController();
        let t = _.getQueryData(S);
        if (t == null) throw Error(`Memory summary is unavailable`);
        let n = t.sections.filter(Hn).map(Kn),
          i = e.targetSection == null ? null : Kn(e.targetSection);
        return Jn(
          {
            conversationId: we,
            correction: e.correction,
            currentSections: n,
            targetAction: e.targetAction,
            targetSection: i,
            targetSectionId: i?.id ?? null,
            targetText: i == null ? null : e.targetText,
          },
          {
            accountId: r,
            signal: Ge.current.signal,
            onAssistantResponse: (e) => {
              let { didUpdateSummary: t, text: n } = e;
              v && !t && H(n);
            },
            onCorrectionTargets: Re,
            onDeletedSection: (e) => {
              (We.current.add(e), ot(e));
            },
            onUpdatedSection: (e, t) => {
              let n = !_.getQueryData(S)?.sections.some((t) => t.id === e.id);
              (Re((t) =>
                t == null
                  ? t
                  : {
                      ...t,
                      createNewSection:
                        t.createNewSection && (!n || (t.newSection != null && t.newSection.id !== e.id)),
                      sections: t.sections.filter((t) => t.id !== e.id),
                    },
              ),
                We.current.add(e.id),
                it(e, t));
            },
          },
        );
      }),
      (n[40] = r),
      (n[41] = v),
      (n[42] = we),
      (n[43] = ot),
      (n[44] = _),
      (n[45] = H),
      (n[46] = Re),
      (n[47] = it),
      (n[48] = S),
      (n[49] = lt))
    : (lt = n[49]);
  let dt;
  n[50] !== b || n[51] !== _ || n[52] !== K || n[53] !== S
    ? ((dt = async () => (
        await _.cancelQueries({ queryKey: b }),
        K({}),
        et.current.clear(),
        _.getQueryData(S)
      )),
      (n[50] = b),
      (n[51] = _),
      (n[52] = K),
      (n[53] = S),
      (n[54] = dt))
    : (dt = n[54]);
  let ft;
  n[55] !== b ||
  n[56] !== ct ||
  n[57] !== v ||
  n[58] !== w ||
  n[59] !== rt ||
  n[60] !== g ||
  n[61] !== _ ||
  n[62] !== m ||
  n[63] !== H ||
  n[64] !== Ee ||
  n[65] !== Re ||
  n[66] !== Oe
    ? ((ft = async (e) => {
        (await _.invalidateQueries({ queryKey: b, refetchType: `none` }),
          ct(e),
          rt(e.updatedSections, e.sectionChanges));
        let t = We.current.size > 0 || e.updatedSections.length > 0 || e.deletedSectionIds.length > 0,
          n = v && !t ? e.assistantResponse?.trim() : null;
        (v && !t && (n || e.conversationId != null) ? (H(n ?? ``), Oe(Vn)) : H(null),
          Re(null),
          Ee(e.conversationId),
          _.invalidateQueries({ queryKey: w }),
          e.ok &&
            !n &&
            !t &&
            (!v || e.conversationId == null) &&
            m
              .get(ve)
              .info(
                g.formatMessage({
                  id: `chatgpt.settings.about_you.correction.toast.noop`,
                  defaultMessage: `No memory changes were made`,
                  description: `Toast shown when an About You request does not change any memory summary information`,
                }),
                { id: `about_you_memory_correction_noop` },
              ));
      }),
      (n[55] = b),
      (n[56] = ct),
      (n[57] = v),
      (n[58] = w),
      (n[59] = rt),
      (n[60] = g),
      (n[61] = _),
      (n[62] = m),
      (n[63] = H),
      (n[64] = Ee),
      (n[65] = Re),
      (n[66] = Oe),
      (n[67] = ft))
    : (ft = n[67]);
  let pt;
  n[68] !== g ||
  n[69] !== _ ||
  n[70] !== m ||
  n[71] !== H ||
  n[72] !== Re ||
  n[73] !== I ||
  n[74] !== K ||
  n[75] !== B ||
  n[76] !== R ||
  n[77] !== z ||
  n[78] !== S
    ? ((pt = (e, t, n) => {
        Ge.current?.signal.aborted ||
          (K({}),
          H(null),
          Re(null),
          I(t.correction),
          R(t.targetSection),
          z(t.targetText),
          B(t.targetAction),
          n != null && _.setQueryData(S, n),
          _.refetchQueries({ queryKey: S }),
          m
            .get(ve)
            .danger(
              g.formatMessage({
                id: `settings.chatGpt.personalization.memory.summary.correction.error`,
                defaultMessage: `Could not update your memory summary. Please try again.`,
                description: `Error toast after an Ask or update request in the Memory summary dialog fails`,
              }),
              { errorAnalytics: { toastId: `about_you_memory_correction_failed` } },
            ));
      }),
      (n[68] = g),
      (n[69] = _),
      (n[70] = m),
      (n[71] = H),
      (n[72] = Re),
      (n[73] = I),
      (n[74] = K),
      (n[75] = B),
      (n[76] = R),
      (n[77] = z),
      (n[78] = S),
      (n[79] = pt))
    : (pt = n[79]);
  let mt;
  n[80] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((mt = () => {
        Ge.current = null;
      }),
      (n[80] = mt))
    : (mt = n[80]);
  let ht;
  n[81] !== lt || n[82] !== dt || n[83] !== ft || n[84] !== pt
    ? ((ht = { mutationFn: lt, onMutate: dt, onSuccess: ft, onError: pt, onSettled: mt }),
      (n[81] = lt),
      (n[82] = dt),
      (n[83] = ft),
      (n[84] = pt),
      (n[85] = ht))
    : (ht = n[85]);
  let gt = te(ht),
    _t;
  n[86] !== r || n[87] !== o || n[88] !== _ || n[89] !== it || n[90] !== Je || n[91] !== p || n[92] !== S
    ? ((_t = () => (
        (Ge.current = new AbortController()),
        Yn({
          accountId: r,
          contextualHint: o,
          source: p,
          signal: Ge.current.signal,
          onStarted: (e) => _.setQueryData(S, e),
          onSectionTypes: Je,
          onUpdatedSection: it,
        })
      )),
      (n[86] = r),
      (n[87] = o),
      (n[88] = _),
      (n[89] = it),
      (n[90] = Je),
      (n[91] = p),
      (n[92] = S),
      (n[93] = _t))
    : (_t = n[93]);
  let vt;
  n[94] !== b ||
  n[95] !== _ ||
  n[96] !== K ||
  n[97] !== B ||
  n[98] !== R ||
  n[99] !== z ||
  n[100] !== G ||
  n[101] !== S ||
  n[102] !== ye ||
  n[103] !== L ||
  n[104] !== _e
    ? ((vt = async () => {
        await _.cancelQueries({ queryKey: b });
        let e = { summary: _.getQueryData(S), targetSection: L, targetText: _e, targetAction: ye };
        return (
          e.summary != null && _.setQueryData(S, { ...e.summary, sections: [] }),
          K({}),
          et.current.clear(),
          R(null),
          z(null),
          B(`correct`),
          G(null),
          e
        );
      }),
      (n[94] = b),
      (n[95] = _),
      (n[96] = K),
      (n[97] = B),
      (n[98] = R),
      (n[99] = z),
      (n[100] = G),
      (n[101] = S),
      (n[102] = ye),
      (n[103] = L),
      (n[104] = _e),
      (n[105] = vt))
    : (vt = n[105]);
  let bt;
  n[106] !== b ||
  n[107] !== w ||
  n[108] !== rt ||
  n[109] !== _ ||
  n[110] !== H ||
  n[111] !== Ee ||
  n[112] !== S
    ? ((bt = async (e) => {
        let { sectionChanges: t, ...n } = e;
        (await _.invalidateQueries({ queryKey: b, refetchType: `none` }),
          _.setQueryData(S, n),
          rt(n.sections, t),
          H(null),
          Ee(null),
          _.invalidateQueries({ queryKey: w }));
      }),
      (n[106] = b),
      (n[107] = w),
      (n[108] = rt),
      (n[109] = _),
      (n[110] = H),
      (n[111] = Ee),
      (n[112] = S),
      (n[113] = bt))
    : (bt = n[113]);
  let xt;
  n[114] !== g ||
  n[115] !== _ ||
  n[116] !== m ||
  n[117] !== K ||
  n[118] !== B ||
  n[119] !== R ||
  n[120] !== z ||
  n[121] !== S
    ? ((xt = (e, t, n) => {
        Ge.current?.signal.aborted ||
          (K({}),
          n != null && (_.setQueryData(S, n.summary), R(n.targetSection), z(n.targetText), B(n.targetAction)),
          m
            .get(ve)
            .danger(
              g.formatMessage({
                id: `settings.chatGpt.personalization.memory.summary.refresh.error`,
                defaultMessage: `Could not refresh your memory summary. Please try again.`,
                description: `Error toast after refreshing the Memory summary fails`,
              }),
              { errorAnalytics: { toastId: `about_you_summary_regenerate_failed` } },
            ));
      }),
      (n[114] = g),
      (n[115] = _),
      (n[116] = m),
      (n[117] = K),
      (n[118] = B),
      (n[119] = R),
      (n[120] = z),
      (n[121] = S),
      (n[122] = xt))
    : (xt = n[122]);
  let St;
  n[123] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((St = () => {
        Ge.current = null;
      }),
      (n[123] = St))
    : (St = n[123]);
  let Ct;
  n[124] !== _t || n[125] !== vt || n[126] !== bt || n[127] !== xt
    ? ((Ct = { mutationFn: _t, onMutate: vt, onSuccess: bt, onError: xt, onSettled: St }),
      (n[124] = _t),
      (n[125] = vt),
      (n[126] = bt),
      (n[127] = xt),
      (n[128] = Ct))
    : (Ct = n[128]);
  let wt = te(Ct),
    Tt;
  n[129] !== b || n[130] !== w || n[131] !== u || n[132] !== _ || n[133] !== U
    ? ((Tt = async () => {
        (await _.cancelQueries({ queryKey: b }),
          _.removeQueries({ queryKey: b }),
          _.removeQueries({ queryKey: w }),
          U(null),
          u());
      }),
      (n[129] = b),
      (n[130] = w),
      (n[131] = u),
      (n[132] = _),
      (n[133] = U),
      (n[134] = Tt))
    : (Tt = n[134]);
  let Et;
  n[135] !== g || n[136] !== m
    ? ((Et = () => {
        m.get(ve).danger(
          g.formatMessage({
            id: `settings.memory_summary.delete_and_turn_off.error_toast`,
            defaultMessage: `Could not delete and turn off memory. Please try again.`,
            description: `Error toast shown when deleting improved memory and turning Memory off fails`,
          }),
          { errorAnalytics: { toastId: `memory_summary_turn_off_failed` } },
        );
      }),
      (n[135] = g),
      (n[136] = m),
      (n[137] = Et))
    : (Et = n[137]);
  let Dt;
  n[138] !== d || n[139] !== Tt || n[140] !== Et
    ? ((Dt = { mutationFn: d, onSuccess: Tt, onError: Et }),
      (n[138] = d),
      (n[139] = Tt),
      (n[140] = Et),
      (n[141] = Dt))
    : (Dt = n[141]);
  let Ot = te(Dt),
    kt;
  n[142] === b ? (kt = n[143]) : ((kt = { mutationKey: b }), (n[142] = b), (n[143] = kt));
  let At = He(kt),
    q = k || gt.isPending || At > 0 || wt.isPending || Ot.isPending,
    jt = M || ((k || wt.isPending) && (O || D?.sections.length === 0)),
    Mt = D != null && D.sections.length > 0 && !O,
    Nt = le?.isStale === !0 && le.sourceChecksum != null,
    Pt;
  n[144] !== r ||
  n[145] !== g ||
  n[146] !== q ||
  n[147] !== u ||
  n[148] !== wt ||
  n[149] !== U ||
  n[150] !== Nt ||
  n[151] !== Mt ||
  n[152] !== D?.debugConversationId
    ? ((Pt = Mt
        ? (0, $.jsxs)(s, {
            align: `end`,
            contentWidth: `menu`,
            side: `bottom`,
            sideOffset: 4,
            triggerButton: (0, $.jsx)(t, {
              "aria-label": g.formatMessage({
                id: `settings.chatGpt.personalization.memory.summary.menu`,
                defaultMessage: `About You menu`,
                description: `Accessible label for the Memory summary overflow menu`,
              }),
              className: `size-8`,
              color: `ghostActive`,
              radius: `full`,
              size: `icon`,
              uniform: !0,
              children: (0, $.jsx)(be, {}),
            }),
            children: [
              (0, $.jsx)(j.Item, {
                leftIcon: (0, $.jsx)(a, {}),
                onSelect: () => U(`about`),
                children: (0, $.jsx)(h, {
                  id: `settings.memory_summary.actions.about_memory`,
                  defaultMessage: `About memory`,
                  description: `Overflow menu item that explains the Memory summary`,
                }),
              }),
              Nt
                ? (0, $.jsx)(j.Item, {
                    disabled: q,
                    leftIcon: (0, $.jsx)(ne, {}),
                    onSelect: () => wt.mutate(),
                    children: (0, $.jsx)(h, {
                      id: `settings.chatGpt.personalization.memory.summary.refresh`,
                      defaultMessage: `Refresh summary`,
                      description: `Overflow menu item that refreshes the Memory summary`,
                    }),
                  })
                : null,
              null,
              (0, $.jsx)(j.Group, {
                children: (0, $.jsx)(j.Item, {
                  disabled: q,
                  leftIcon: (0, $.jsx)(Ae, {}),
                  onSelect: () => U(`delete-and-turn-off`),
                  tone: `danger`,
                  children: (0, $.jsx)(h, {
                    id: `settings.memory_summary.actions.delete_and_turn_off`,
                    defaultMessage: `Delete and turn off memory`,
                    description: `Destructive overflow menu item that deletes improved memory and turns Memory off`,
                  }),
                }),
              }),
            ],
          })
        : null),
      (n[144] = r),
      (n[145] = g),
      (n[146] = q),
      (n[147] = u),
      (n[148] = wt),
      (n[149] = U),
      (n[150] = Nt),
      (n[151] = Mt),
      (n[152] = D?.debugConversationId),
      (n[153] = Pt))
    : (Pt = n[153]);
  let Ft = Pt,
    It;
  n[154] !== gt ||
  n[155] !== q ||
  n[156] !== H ||
  n[157] !== Re ||
  n[158] !== I ||
  n[159] !== K ||
  n[160] !== B ||
  n[161] !== R ||
  n[162] !== z ||
  n[163] !== G
    ? ((It = (e) => {
        q ||
          (H(null),
          G(null),
          Re(null),
          K({}),
          We.current.clear(),
          I(``),
          R(null),
          z(null),
          B(`correct`),
          (Ne.current = null),
          gt.mutate(e));
      }),
      (n[154] = gt),
      (n[155] = q),
      (n[156] = H),
      (n[157] = Re),
      (n[158] = I),
      (n[159] = K),
      (n[160] = B),
      (n[161] = R),
      (n[162] = z),
      (n[163] = G),
      (n[164] = It))
    : (It = n[164]);
  let J = It,
    Lt;
  n[165] !== H || n[166] !== I || n[167] !== B || n[168] !== R || n[169] !== z || n[170] !== J
    ? ((Lt = (e) => {
        let { followUp: t, section: n } = e;
        if (t.action === `auto_send`) {
          J({ correction: t.prompt, targetAction: `correct`, targetSection: n, targetText: null });
          return;
        }
        ((Ne.current = e),
          H(null),
          B(`correct`),
          t.action === `targeted_reply` ? (I(``), R(n), z(t.prompt)) : (I(t.prompt), R(null), z(null)),
          Pe.current?.focus());
      }),
      (n[165] = H),
      (n[166] = I),
      (n[167] = B),
      (n[168] = R),
      (n[169] = z),
      (n[170] = J),
      (n[171] = Lt))
    : (Lt = n[171]);
  let Rt = Lt,
    zt;
  n[172] !== Rt || n[173] !== F.length || n[174] !== q || n[175] !== W
    ? ((zt = (e, t) => {
        if (q) return;
        let n = Ne.current;
        if (
          F.length > 0 &&
          n?.section.id === t.id &&
          n.followUp.action === e.action &&
          n.followUp.prompt === e.prompt
        )
          return;
        let r = { followUp: e, section: t };
        F.length > 0 ? W(r) : Rt(r);
      }),
      (n[172] = Rt),
      (n[173] = F.length),
      (n[174] = q),
      (n[175] = W),
      (n[176] = zt))
    : (zt = n[176]);
  let Bt = zt,
    Vt;
  n[177] !== F || n[178] !== q || n[179] !== J || n[180] !== ye || n[181] !== L || n[182] !== _e
    ? ((Vt = (e) => {
        e.preventDefault();
        let t = F.trim();
        t && !q && J({ correction: t, targetAction: ye, targetSection: L, targetText: _e });
      }),
      (n[177] = F),
      (n[178] = q),
      (n[179] = J),
      (n[180] = ye),
      (n[181] = L),
      (n[182] = _e),
      (n[183] = Vt))
    : (Vt = n[183]);
  let Ht = Vt,
    Ut;
  n[184] !== B || n[185] !== R || n[186] !== z || n[187] !== G
    ? ((Ut = function (e, t) {
        (R(e),
          z(t),
          B(`correct`),
          G(null),
          (Ne.current = null),
          window.getSelection()?.removeAllRanges(),
          Pe.current?.focus());
      }),
      (n[184] = B),
      (n[185] = R),
      (n[186] = z),
      (n[187] = G),
      (n[188] = Ut))
    : (Ut = n[188]);
  let Wt = Ut,
    Gt;
  n[189] !== F.length || n[190] !== q || n[191] !== Wt || n[192] !== W || n[193] !== J
    ? ((Gt = function (e, t) {
        if (!q) {
          if (e.action.type === `open_correction_composer`) Wt(t.section, t.text);
          else {
            window.getSelection()?.removeAllRanges();
            let n = {
              correction: e.action.submissionText,
              targetAction: e.action.targetAction,
              targetSection: t.section,
              targetText: t.text,
            };
            F.length > 0 ? W(n) : J(n);
          }
        }
      }),
      (n[189] = F.length),
      (n[190] = q),
      (n[191] = Wt),
      (n[192] = W),
      (n[193] = J),
      (n[194] = Gt))
    : (Gt = n[194]);
  let Kt = Gt,
    Jt;
  n[195] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Jt = { "aria-describedby": void 0 }), (n[195] = Jt))
    : (Jt = n[195]);
  let Yt;
  n[196] === u
    ? (Yt = n[197])
    : ((Yt = (e) => {
        e || u();
      }),
      (n[196] = u),
      (n[197] = Yt));
  let Xt;
  n[198] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Xt = (0, $.jsx)(de, {
        className: `min-w-0 truncate text-heading-sm leading-5 font-normal text-default`,
        children: (0, $.jsx)(h, {
          id: `settings.chatGpt.personalization.memory.summary`,
          defaultMessage: `Memory summary`,
          description: `Title for the ChatGPT memory summary dialog`,
        }),
      })),
      (n[198] = Xt))
    : (Xt = n[198]);
  let Zt;
  n[199] !== g || n[200] !== q || n[201] !== Mt || n[202] !== Ft || n[203] !== D
    ? ((Zt =
        Mt && D != null
          ? (0, $.jsxs)($.Fragment, {
              children: [
                (0, $.jsx)(`span`, {
                  className: `min-w-0 flex-1 truncate text-sm leading-5 font-normal text-secondary max-sm:hidden`,
                  children: qn(g, q ? void 0 : D.generatedAtIso),
                }),
                (0, $.jsx)(`div`, { className: `ms-auto shrink-0`, children: Ft }),
              ],
            })
          : null),
      (n[199] = g),
      (n[200] = q),
      (n[201] = Mt),
      (n[202] = Ft),
      (n[203] = D),
      (n[204] = Zt))
    : (Zt = n[204]);
  let Qt;
  n[205] === Zt
    ? (Qt = n[206])
    : ((Qt = (0, $.jsx)(xe, {
        className: `shrink-0 border-b border-default px-6 pe-14 pt-3 pb-3 first:pt-3`,
        children: (0, $.jsxs)(`div`, {
          className: `flex min-h-8 min-w-0 items-center gap-3`,
          children: [Xt, Zt],
        }),
      })),
      (n[205] = Zt),
      (n[206] = Qt));
  let en = jt ? `flex flex-col overflow-hidden` : `overflow-y-auto px-6 pt-2 pb-4`,
    tn;
  n[207] === en
    ? (tn = n[208])
    : ((tn = he(`min-h-0 flex-1 overscroll-contain`, en)), (n[207] = en), (n[208] = tn));
  let nn;
  n[209] === g
    ? (nn = n[210])
    : ((nn = g.formatMessage({
        id: `settings.chatGpt.personalization.memory.summary.sections`,
        defaultMessage: `About You summary sections`,
        description: `Accessible label for the scrollable Memory summary sections`,
      })),
      (n[209] = g),
      (n[210] = nn));
  let Y;
  n[211] === G ? (Y = n[212]) : ((Y = () => G(null)), (n[211] = G), (n[212] = Y));
  let rn;
  n[213] === jt ? (rn = n[214]) : ((rn = jt ? (0, $.jsx)(un, {}) : null), (n[213] = jt), (n[214] = rn));
  let an;
  n[215] !== O || n[216] !== jt || n[217] !== A
    ? ((an =
        !jt && O
          ? (0, $.jsxs)(`div`, {
              className: `flex h-full flex-col items-center justify-center gap-3 py-6 text-center`,
              children: [
                (0, $.jsx)(ue, { className: `text-tertiary` }),
                (0, $.jsx)(`p`, {
                  className: `text-sm text-danger`,
                  children: (0, $.jsx)(h, {
                    id: `settings.chatGpt.personalization.memory.summary.error`,
                    defaultMessage: `There was a problem generating this memory summary`,
                    description: `Error in the ChatGPT memory summary dialog`,
                  }),
                }),
                (0, $.jsx)(t, {
                  color: `secondary`,
                  onClick: () => void A(),
                  children: (0, $.jsx)(h, {
                    id: `settings.chatGpt.personalization.memory.summary.retry`,
                    defaultMessage: `Try again`,
                    description: `Button to retry loading the Memory summary`,
                  }),
                }),
              ],
            })
          : null),
      (n[215] = O),
      (n[216] = jt),
      (n[217] = A),
      (n[218] = an))
    : (an = n[218]);
  let on;
  n[219] !== O || n[220] !== jt || n[221] !== D
    ? ((on =
        !jt && !O && D?.sections.length === 0
          ? (0, $.jsxs)(`div`, {
              className: `flex h-full flex-col items-center justify-center gap-3 px-6 text-center text-secondary`,
              children: [
                (0, $.jsx)(ue, {}),
                (0, $.jsx)(`p`, {
                  className: `max-w-md text-base leading-6`,
                  children:
                    D.emptyStateMessage ||
                    (0, $.jsx)(h, {
                      id: `settings.chatGpt.personalization.memory.summary.empty`,
                      defaultMessage: `ChatGPT doesn’t know much about you yet. As you chat, you’ll see what it’s learned here.`,
                      description: `Empty Memory summary explaining that information will appear as the user chats`,
                    }),
                }),
              ],
            })
          : null),
      (n[219] = O),
      (n[220] = jt),
      (n[221] = D),
      (n[222] = on))
    : (on = n[222]);
  let sn;
  n[223] !== V ||
  n[224] !== gt ||
  n[225] !== Le ||
  n[226] !== Bt ||
  n[227] !== Xe ||
  n[228] !== g ||
  n[229] !== O ||
  n[230] !== k ||
  n[231] !== M ||
  n[232] !== q ||
  n[233] !== wt ||
  n[234] !== Wt ||
  n[235] !== G ||
  n[236] !== D
    ? ((sn =
        !M && !O && D != null
          ? (0, $.jsxs)(`div`, {
              ref: Fe,
              className: `flex flex-col`,
              children: [
                D.sections.map((e) => {
                  let t = Xe[e.id],
                    n = t?.section.title === e.title && t.section.description === e.description;
                  return (0, $.jsx)(
                    kn,
                    {
                      section: e,
                      changes: n ? t.changes : void 0,
                      highlightRevision: t?.revision,
                      disabled: q,
                      isUpdating:
                        ((k || wt.isPending) && !e.description) ||
                        (gt.isPending && V == null && (Le == null || Le.sections.some((t) => t.id === e.id))),
                      onEdit: (e) => Wt(e, null),
                      onFollowUp: Bt,
                      onSelectText: G,
                    },
                    e.id,
                  );
                }),
                gt.isPending && Le?.createNewSection && !D.sections.some((e) => e.id === Le.newSection?.id)
                  ? (0, $.jsx)(kn, {
                      section: {
                        id: Le.newSection?.id ?? `pending-memory-section`,
                        title:
                          Le.newSection?.title ??
                          g.formatMessage({
                            id: `settings.chatGpt.personalization.memory.summary.newSection`,
                            defaultMessage: `New section`,
                            description: `Temporary heading while a new memory summary section is being generated`,
                          }),
                        description: ``,
                      },
                      changes: void 0,
                      highlightRevision: void 0,
                      disabled: !0,
                      isUpdating: !0,
                      onEdit: Bn,
                      onFollowUp: Bt,
                      onSelectText: G,
                    })
                  : null,
              ],
            })
          : null),
      (n[223] = V),
      (n[224] = gt),
      (n[225] = Le),
      (n[226] = Bt),
      (n[227] = Xe),
      (n[228] = g),
      (n[229] = O),
      (n[230] = k),
      (n[231] = M),
      (n[232] = q),
      (n[233] = wt),
      (n[234] = Wt),
      (n[235] = G),
      (n[236] = D),
      (n[237] = sn))
    : (sn = n[237]);
  let cn;
  n[238] !== tn ||
  n[239] !== nn ||
  n[240] !== Y ||
  n[241] !== rn ||
  n[242] !== an ||
  n[243] !== on ||
  n[244] !== sn
    ? ((cn = (0, $.jsxs)(`div`, {
        className: tn,
        role: `region`,
        "aria-label": nn,
        onScroll: Y,
        children: [rn, an, on, sn],
      })),
      (n[238] = tn),
      (n[239] = nn),
      (n[240] = Y),
      (n[241] = rn),
      (n[242] = an),
      (n[243] = on),
      (n[244] = sn),
      (n[245] = cn))
    : (cn = n[245]);
  let ln;
  n[246] !== Kt || n[247] !== q || n[248] !== pe || n[249] !== G || n[250] !== Ie
    ? ((ln =
        Ie != null && pe?.length && !q
          ? (0, $.jsx)(An, { selection: Ie, actions: pe, onAction: Kt, onDismiss: () => G(null) })
          : null),
      (n[246] = Kt),
      (n[247] = q),
      (n[248] = pe),
      (n[249] = G),
      (n[250] = Ie),
      (n[251] = ln))
    : (ln = n[251]);
  let dn = v && !q ? V : null,
    fn;
  n[252] === dn
    ? (fn = n[253])
    : ((fn = (0, $.jsx)(`div`, {
        role: `status`,
        "aria-atomic": `true`,
        className: `sr-only`,
        children: dn,
      })),
      (n[252] = dn),
      (n[253] = fn));
  let pn;
  n[254] !== r ||
  n[255] !== V ||
  n[256] !== v ||
  n[257] !== we ||
  n[258] !== F ||
  n[259] !== Ht ||
  n[260] !== O ||
  n[261] !== M ||
  n[262] !== q ||
  n[263] !== u ||
  n[264] !== De ||
  n[265] !== I ||
  n[266] !== B ||
  n[267] !== R ||
  n[268] !== z ||
  n[269] !== D?.sections ||
  n[270] !== L ||
  n[271] !== _e
    ? ((pn =
        !M && !O && D?.sections.length
          ? (0, $.jsx)(xe, {
              className: `shrink-0 px-6 pt-2 pb-6`,
              children: (0, $.jsx)($t, {
                draft: F,
                targetSection: L,
                targetText: _e,
                disabled: q,
                canAsk: v,
                inputRef: Pe,
                onDraftChange: I,
                onClearTarget: () => {
                  (R(null), z(null), B(`correct`), (Ne.current = null), Pe.current?.focus());
                },
                onSubmit: Ht,
                response:
                  v && V != null && !q
                    ? (0, $.jsx)(
                        mn,
                        { accountId: r, conversationId: we, response: V, version: De, onOpenConversation: u },
                        De,
                      )
                    : null,
              }),
            })
          : null),
      (n[254] = r),
      (n[255] = V),
      (n[256] = v),
      (n[257] = we),
      (n[258] = F),
      (n[259] = Ht),
      (n[260] = O),
      (n[261] = M),
      (n[262] = q),
      (n[263] = u),
      (n[264] = De),
      (n[265] = I),
      (n[266] = B),
      (n[267] = R),
      (n[268] = z),
      (n[269] = D?.sections),
      (n[270] = L),
      (n[271] = _e),
      (n[272] = pn))
    : (pn = n[272]);
  let hn;
  n[273] !== Qt || n[274] !== cn || n[275] !== ln || n[276] !== fn || n[277] !== pn
    ? ((hn = (0, $.jsxs)(Te, {
        className: `overflow-hidden`,
        size: `full`,
        variant: `chatgpt`,
        children: [Qt, cn, ln, fn, pn],
      })),
      (n[273] = Qt),
      (n[274] = cn),
      (n[275] = ln),
      (n[276] = fn),
      (n[277] = pn),
      (n[278] = hn))
    : (hn = n[278]);
  let gn;
  n[279] !== Yt || n[280] !== hn
    ? ((gn = (0, $.jsx)(Se, {
        open: !0,
        contentProps: Jt,
        size: `xwideTall`,
        variant: `chatgpt`,
        onOpenChange: Yt,
        children: hn,
      })),
      (n[279] = Yt),
      (n[280] = hn),
      (n[281] = gn))
    : (gn = n[281]);
  let _n;
  n[282] !== ke || n[283] !== U
    ? ((_n =
        ke === `about`
          ? (0, $.jsx)(Se, {
              open: !0,
              size: `compact`,
              variant: `chatgpt`,
              onOpenChange: (e) => {
                e || U(null);
              },
              children: (0, $.jsxs)(Te, {
                children: [
                  (0, $.jsx)(xe, {
                    children: (0, $.jsx)(me, {
                      title: (0, $.jsx)(de, {
                        children: (0, $.jsx)(h, {
                          id: `settings.memory_summary.about_memory_dialog.title`,
                          defaultMessage: `About memory`,
                          description: `Title of the informational Memory summary dialog`,
                        }),
                      }),
                      subtitle: (0, $.jsx)(ge, {
                        children: (0, $.jsx)(h, {
                          id: `settings.memory_summary.about_memory_dialog.description`,
                          defaultMessage: `ChatGPT automatically remembers important information about you, and keeps it up to date. This summary page is a brief overview of what’s been remembered — not a complete list.`,
                          description: `Explanation of what the Memory summary represents`,
                        }),
                      }),
                    }),
                  }),
                  (0, $.jsx)(xe, {
                    children: (0, $.jsx)(yt, {
                      className: `text-info`,
                      href: $n,
                      initiator: `external_link`,
                      openTarget: `external-browser`,
                      children: (0, $.jsx)(h, {
                        id: `settings.memory_summary.about_memory_dialog.learn_more_button`,
                        defaultMessage: `Learn more`,
                        description: `Link to the ChatGPT Memory Help Center collection`,
                      }),
                    }),
                  }),
                  (0, $.jsx)(xe, {
                    children: (0, $.jsx)(je, {
                      children: (0, $.jsx)(t, {
                        onClick: () => U(null),
                        children: (0, $.jsx)(h, {
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
      (n[282] = ke),
      (n[283] = U),
      (n[284] = _n))
    : (_n = n[284]);
  let vn;
  n[285] !== r || n[286] !== ke || n[287] !== U
    ? ((vn = null), (n[285] = r), (n[286] = ke), (n[287] = U), (n[288] = vn))
    : (vn = n[288]);
  let yn;
  n[289] !== Ot || n[290] !== ke || n[291] !== U
    ? ((yn =
        ke === `delete-and-turn-off`
          ? (0, $.jsx)(Se, {
              open: !0,
              showDialogClose: !Ot.isPending,
              shouldIgnoreClickOutside: Ot.isPending,
              size: `compact`,
              variant: `chatgpt`,
              onOpenChange: (e) => {
                !e && !Ot.isPending && U(null);
              },
              children: (0, $.jsxs)(Te, {
                as: `form`,
                onSubmit: (e) => {
                  (e.preventDefault(), Ot.mutate());
                },
                children: [
                  (0, $.jsx)(xe, {
                    children: (0, $.jsx)(me, {
                      title: (0, $.jsx)(de, {
                        children: (0, $.jsx)(h, {
                          id: `settings.memory_summary.delete_and_turn_off_dialog.title`,
                          defaultMessage: `Delete and turn off memory?`,
                          description: `Confirmation title before deleting improved memory and turning Memory off`,
                        }),
                      }),
                      subtitle: (0, $.jsx)(ge, {
                        children: (0, $.jsx)(h, {
                          id: `settings.memory_summary.delete_and_turn_off_dialog.description`,
                          defaultMessage: `ChatGPT will no longer remember important information about you, so your experience will be less personalized`,
                          description: `Warning shown before deleting improved memory and turning Memory off`,
                        }),
                      }),
                    }),
                  }),
                  (0, $.jsx)(xe, {
                    children: (0, $.jsxs)(je, {
                      expandSingleButton: !1,
                      children: [
                        (0, $.jsx)(t, {
                          color: `secondary`,
                          disabled: Ot.isPending,
                          onClick: () => U(null),
                          children: (0, $.jsx)(h, {
                            id: `settings.memory_summary.delete_and_turn_off_dialog.cancel_button`,
                            defaultMessage: `Cancel`,
                            description: `Button cancelling deletion and leaving Memory on`,
                          }),
                        }),
                        (0, $.jsx)(t, {
                          color: `danger`,
                          loading: Ot.isPending,
                          type: `submit`,
                          children: (0, $.jsx)(h, {
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
      (n[289] = Ot),
      (n[290] = ke),
      (n[291] = U),
      (n[292] = yn))
    : (yn = n[292]);
  let X;
  n[293] !== Rt || n[294] !== Me || n[295] !== W || n[296] !== J
    ? ((X =
        Me == null
          ? null
          : (0, $.jsx)(Se, {
              open: !0,
              size: `compact`,
              variant: `chatgpt`,
              contentProps: {
                onCloseAutoFocus: (e) => {
                  (e.preventDefault(), Pe.current?.focus());
                },
              },
              onOpenChange: (e) => {
                e || W(null);
              },
              children: (0, $.jsxs)(Te, {
                as: `form`,
                onSubmit: (e) => {
                  e.preventDefault();
                  let t = Me;
                  (W(null), `followUp` in t ? Rt(t) : J(t));
                },
                children: [
                  (0, $.jsx)(xe, {
                    children: (0, $.jsx)(me, {
                      title: (0, $.jsx)(de, {
                        children: (0, $.jsx)(h, {
                          id: `chatgpt.settings.about_you.follow_up.replace_draft.dialog.title`,
                          defaultMessage: `Replace your drafted response?`,
                          description: `Title warning that a memory action will replace the current draft`,
                        }),
                      }),
                      subtitle: (0, $.jsx)(ge, {
                        children: (0, $.jsx)(h, {
                          id: `chatgpt.settings.about_you.follow_up.replace_draft.dialog.description`,
                          defaultMessage: `The text you’ve entered won’t be saved`,
                          description: `Warning that replacing the Memory summary composer draft discards it`,
                        }),
                      }),
                    }),
                  }),
                  (0, $.jsx)(xe, {
                    children: (0, $.jsxs)(je, {
                      expandSingleButton: !1,
                      children: [
                        (0, $.jsx)(t, {
                          color: `secondary`,
                          onClick: () => W(null),
                          children: (0, $.jsx)(h, {
                            id: `chatgpt.settings.about_you.follow_up.replace_draft.dialog.button.cancel`,
                            defaultMessage: `Cancel`,
                            description: `Button keeping the current Memory summary composer draft`,
                          }),
                        }),
                        (0, $.jsx)(t, {
                          type: `submit`,
                          children: (0, $.jsx)(h, {
                            id: `chatgpt.settings.about_you.follow_up.replace_draft.dialog.button.confirm`,
                            defaultMessage: `Replace`,
                            description: `Button replacing the current draft with a memory action`,
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            })),
      (n[293] = Rt),
      (n[294] = Me),
      (n[295] = W),
      (n[296] = J),
      (n[297] = X))
    : (X = n[297]);
  let bn;
  return (
    n[298] !== gn || n[299] !== _n || n[300] !== vn || n[301] !== yn || n[302] !== X
      ? ((bn = (0, $.jsxs)($.Fragment, { children: [gn, _n, vn, yn, X] })),
        (n[298] = gn),
        (n[299] = _n),
        (n[300] = vn),
        (n[301] = yn),
        (n[302] = X),
        (n[303] = bn))
      : (bn = n[303]),
    bn
  );
}
function Bn() {}
function Vn(e) {
  return e + 1;
}
function Hn(e) {
  return e.description.trim().length > 0;
}
function Un(e) {
  return e.id;
}
function Wn(e) {
  return [e.id, e];
}
function Gn(e) {
  return { ...e, description: `` };
}
function Kn(e) {
  return { description: e.description, id: e.id, title: e.title };
}
function qn(e, t) {
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
function Jn(e, t) {
  return new Promise((n, r) => {
    let i = null,
      a = !1,
      o = null,
      s = () => {
        a ||
          ((a = !0),
          o != null && Ze.cancelStream(o),
          r(new DOMException(`Memory correction cancelled`, `AbortError`)));
      },
      c = (e) => {
        a || ((a = !0), t.signal?.removeEventListener(`abort`, s), r(Error(e)));
      };
    if (t.signal?.aborted) {
      s();
      return;
    }
    ((o = Ze.streamPost(`/memories/about_you/correction`, {
      additionalHeaders: { "ChatGPT-Account-ID": t.accountId },
      body: JSON.stringify(e),
      onComplete: () => {
        c(`About You correction stream ended without a result`);
      },
      onError: (e) => {
        c(e.error);
      },
      onEvent: (e) => {
        if (!a) {
          if (e.event === `correction_targets`) {
            let n = Gt.safeParse(e.data);
            n.success && t.onCorrectionTargets?.(n.data);
            return;
          }
          if (e.event === `assistant_response`) {
            let n = Vt.safeParse(e.data);
            n.success &&
              n.data.response.trim() &&
              ((i = n.data.response.trim()),
              t.onAssistantResponse?.({ didUpdateSummary: n.data.didUpdateSummary, text: i }));
            return;
          }
          if (e.event === `section`) {
            let n = Ht.safeParse(e.data);
            if (n.success && n.data.section != null)
              try {
                let e = At(n.data.changes === void 0 ? void 0 : [n.data.changes], [n.data.section]);
                t.onUpdatedSection?.(n.data.section, e[0] ?? null);
              } catch (e) {
                c(e instanceof Error ? e.message : `Invalid About You section changes`);
              }
            return;
          }
          if (e.event === `section_deleted`) {
            let n = Ut.safeParse(e.data);
            n.success && n.data.sectionId != null && t.onDeletedSection?.(n.data.sectionId);
            return;
          }
          if (e.event === `error`) {
            c(`About You correction stream failed`);
            return;
          }
          if (!(e.event !== `done` || a))
            try {
              let r = Xn(e.data, i);
              if (!r.ok) {
                c(`About You correction failed`);
                return;
              }
              ((a = !0), t.signal?.removeEventListener(`abort`, s), n(r));
            } catch (e) {
              c(e instanceof Error ? e.message : `Invalid About You correction response`);
            }
        }
      },
    })),
      a || t.signal?.addEventListener(`abort`, s, { once: !0 }));
  });
}
function Yn(e, t = `/memories/about_you/summary/regenerate`) {
  return new Promise((n, r) => {
    let i = !1,
      a = null,
      o = () => {
        i ||
          ((i = !0),
          a != null && Ze.cancelStream(a),
          r(new DOMException(`Memory summary cancelled`, `AbortError`)));
      },
      s = (t) => {
        i || ((i = !0), e.signal?.removeEventListener(`abort`, o), r(Error(t)));
      };
    if (e.signal?.aborted) {
      o();
      return;
    }
    ((a = Ze.streamPost(t, {
      additionalHeaders: { "ChatGPT-Account-ID": e.accountId },
      body: JSON.stringify({
        contextual_hint: e.contextualHint,
        force_regenerate: e.contextualHint != null || void 0,
      }),
      onComplete: () => {
        s(`About You regeneration stream ended without a result`);
      },
      onError: (e) => {
        s(e.error);
      },
      onEvent: (t) => {
        if (i) return;
        if (t.event === `started` && t.data != null && typeof t.data == `object`) {
          let n = Rt.safeParse({ ...t.data, sections: [] });
          n.success && e.onStarted?.({ ...n.data, sectionChanges: [] });
          return;
        }
        if (t.event === `section_types`) {
          let n = Gt.safeParse(t.data);
          n.success && e.onSectionTypes?.(n.data.sections);
          return;
        }
        if (t.event === `section`) {
          let n = Ht.safeParse(t.data);
          if (n.success && n.data.section != null)
            try {
              let t = At(n.data.changes === void 0 ? void 0 : [n.data.changes], [n.data.section]);
              e.onUpdatedSection?.(n.data.section, t[0] ?? null);
            } catch (e) {
              s(e instanceof Error ? e.message : `Invalid About You section changes`);
            }
          return;
        }
        if (t.event === `error`) {
          s(`About You regeneration stream failed`);
          return;
        }
        if (t.event !== `done` || i) return;
        let r = Rt.safeParse(t.data);
        if (!r.success || !r.data.generatedAtIso) {
          s(`Invalid About You regeneration response`);
          return;
        }
        try {
          let t = At(r.data.sectionChanges, r.data.sections);
          ((i = !0), e.signal?.removeEventListener(`abort`, o), n({ ...r.data, sectionChanges: t }));
        } catch (e) {
          s(e instanceof Error ? e.message : `Invalid About You section changes`);
        }
      },
      parameters: { query: { source: e.source ?? `personalization-setting` } },
    })),
      i || e.signal?.addEventListener(`abort`, o, { once: !0 }));
  });
}
function Xn(e, t) {
  let n = Bt.parse(e);
  return {
    ...n,
    sectionChanges: At(n.sectionChanges, n.updatedSections),
    assistantResponse: n.assistantResponse ?? t,
  };
}
async function Zn(e, t) {
  if (t != null && e != null)
    try {
      return await Yn({ ...t, accountId: e }, `/memories/about_you/summary/stream`);
    } catch (e) {
      if (t.signal?.aborted) throw e;
    }
  let n = await Ze.safePost(`/memories/about_you/summary`, {
      signal: t?.signal,
      additionalHeaders: e == null ? void 0 : { "ChatGPT-Account-ID": e },
      parameters: { query: { source: t?.source ?? `personalization-setting` } },
      requestBody:
        t?.contextualHint == null ? void 0 : { contextual_hint: t.contextualHint, force_regenerate: !0 },
    }),
    r = Rt.parse(n);
  return { ...r, sectionChanges: At(r.sectionChanges, r.sections) };
}
var Qn, Q, $, $n;
function er() {
  return (er = e(() => {
    ((Qn = Fe()),
      D(),
      g(),
      le(),
      Ne(),
      P(),
      w(),
      (Q = ze()),
      ye(),
      Nt(),
      Jt(),
      at(),
      qe(),
      W(),
      Pe(),
      R(),
      r(),
      vt(),
      k(),
      Be(),
      B(),
      Ie(),
      it(),
      m(),
      rn(),
      pn(),
      bn(),
      Ln(),
      Ct(),
      ($ = G()),
      ($n = `https://help.openai.com/en/collections/8471548-memory`));
  }))();
}
export { Yn as a, er as i, Rn as n, Jn as o, Zn as r, zn as t };
//# sourceMappingURL=about-you-summary-f928804824e3.js.map
