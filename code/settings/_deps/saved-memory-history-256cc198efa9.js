import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as ee,
  AMt as n,
  Amn as r,
  Cpn as i,
  D3t as te,
  FKt as ne,
  Hu as a,
  JG as re,
  Jrt as ie,
  KG as ae,
  Nlt as oe,
  O3t as o,
  Opn as se,
  RKt as s,
  S3t as ce,
  Spn as le,
  TJt as ue,
  Vdt as de,
  Vu as fe,
  Xdt as c,
  Xrt as pe,
  Xu as l,
  Yrt as me,
  ZG as u,
  Zrt as d,
  a3t as he,
  d3t as ge,
  eit as f,
  hmn as p,
  iit as m,
  jXt as _e,
  kMt as h,
  kXt as g,
  kmn as _,
  o3t as v,
  qu as ve,
  rit as ye,
  s3t as y,
  tit as be,
  wJt as xe,
} from "./app-initial-f094ef01c64d.js";
function b(e) {
  let t = (0, we.c)(96),
    { accountId: n, onClose: r } = e,
    a = ee(he),
    o = se(),
    s = te(),
    [le, ue] = (0, Te.useState)(S),
    [c, l] = (0, Te.useState)(null),
    u;
  t[0] === n ? (u = t[1]) : ((u = [`chatgpt-saved-memory-history`, n]), (t[0] = n), (t[1] = u));
  let f = u,
    p;
  t[2] === n
    ? (p = t[3])
    : ((p = () =>
        ne.safeGet(`/memories/history`, {
          additionalHeaders: { "ChatGPT-Account-ID": n },
          parameters: { query: { limit: 50 } },
        })),
      (t[2] = n),
      (t[3] = p));
  let m;
  t[4] !== f || t[5] !== p
    ? ((m = { queryKey: f, queryFn: p, staleTime: xe.ONE_MINUTE }),
      (t[4] = f),
      (t[5] = p),
      (t[6] = m))
    : (m = t[6]);
  let { data: g, isPending: _, isError: v, refetch: ve } = ce(m),
    y;
  t[7] === g?.history ? (y = t[8]) : ((y = g?.history ?? []), (t[7] = g?.history), (t[8] = y));
  let b = y,
    C;
  t[9] !== le || t[10] !== b
    ? ((C = b.find((e) => (e.id ?? S) === le) ?? b.find(Ce) ?? b[0]),
      (t[9] = le),
      (t[10] = b),
      (t[11] = C))
    : (C = t[11]);
  let w = C,
    T;
  t[12] !== n || t[13] !== w
    ? ((T = async (e) => {
        if (w?.id == null) throw Error(`Historical memory snapshot is required`);
        let t = {
          additionalHeaders: { "ChatGPT-Account-ID": n },
          parameters: { path: { memory_history_id: w.id } },
        };
        if (
          !(
            e === `delete`
              ? await ne.safeDelete(`/memories/history/{memory_history_id}`, t)
              : await ne.safePost(`/memories/history/{memory_history_id}/revert`, t)
          ).success
        )
          throw Error(`Memory history update failed`);
      }),
      (t[12] = n),
      (t[13] = w),
      (t[14] = T))
    : (T = t[14]);
  let E;
  t[15] !== n || t[16] !== f || t[17] !== s
    ? ((E = async () => {
        (ue(S),
          l(null),
          await Promise.all([
            s.invalidateQueries({ queryKey: f }),
            s.invalidateQueries({ queryKey: [`chatgpt-saved-memories`, n] }),
          ]));
      }),
      (t[15] = n),
      (t[16] = f),
      (t[17] = s),
      (t[18] = E))
    : (E = t[18]);
  let D;
  t[19] !== o || t[20] !== a
    ? ((D = (e, t) => {
        a.get(_e).danger(
          t === `delete`
            ? o.formatMessage({
                id: `settings.chatGpt.personalization.memoryHistory.deleteError`,
                defaultMessage: `Couldn’t delete this version`,
                description: `Error toast shown in saved memory history when deleting a prior version fails`,
              })
            : o.formatMessage({
                id: `settings.chatGpt.personalization.memoryHistory.restoreError`,
                defaultMessage: `Couldn’t restore this version`,
                description: `Error toast shown in saved memory history when restoring a prior version fails`,
              }),
        );
      }),
      (t[19] = o),
      (t[20] = a),
      (t[21] = D))
    : (D = t[21]);
  let O;
  t[22] !== T || t[23] !== E || t[24] !== D
    ? ((O = { mutationFn: T, onSuccess: E, onError: D }),
      (t[22] = T),
      (t[23] = E),
      (t[24] = D),
      (t[25] = O))
    : (O = t[25]);
  let k = ge(O),
    A;
  t[26] === o
    ? (A = t[27])
    : ((A = function (e) {
        let t = new Date(e * 1e3);
        return o.formatMessage(
          {
            id: `settings.chatGpt.personalization.memoryHistory.snapshotDate`,
            defaultMessage: `{date}, {time}`,
            description: `Date and time shown for a version in saved memories history`,
          },
          {
            date: o.formatDate(t, { day: `numeric`, month: `long` }),
            time: o.formatTime(t, { hour: `numeric`, minute: `2-digit` }),
          },
        );
      }),
      (t[26] = o),
      (t[27] = A));
  let j = A,
    M;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = { "aria-describedby": void 0 }), (t[28] = M))
    : (M = t[28]);
  let N;
  t[29] === r
    ? (N = t[30])
    : ((N = (e) => {
        e || r();
      }),
      (t[29] = r),
      (t[30] = N));
  let P;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, x.jsx)(d, {
        className: `shrink-0 px-4 pt-4 pb-4 first:pt-4`,
        children: (0, x.jsx)(ye, {
          className: `text-base leading-6 font-normal text-default`,
          children: (0, x.jsx)(i, {
            id: `settings.chatGpt.personalization.memoryHistory.title`,
            defaultMessage: `Saved memories history`,
            description: `Title of the dialog where users browse and restore prior versions of their saved ChatGPT memories`,
          }),
        }),
      })),
      (t[31] = P))
    : (P = t[31]);
  let F;
  t[32] === _
    ? (F = t[33])
    : ((F = _
        ? (0, x.jsx)(`p`, {
            className: `text-secondary`,
            role: `status`,
            children: (0, x.jsx)(i, {
              id: `settings.chatGpt.personalization.memoryHistory.loading`,
              defaultMessage: `Loading history…`,
              description: `Status shown while prior versions of saved ChatGPT memories are loading`,
            }),
          })
        : null),
      (t[32] = _),
      (t[33] = F));
  let I;
  t[34] !== v || t[35] !== ve
    ? ((I = v
        ? (0, x.jsx)(h, {
            onClick: () => void ve(),
            children: (0, x.jsx)(i, {
              id: `settings.chatGpt.personalization.memoryHistory.loadError`,
              defaultMessage: `Couldn’t load history. Retry`,
              description: `Retry button shown when prior versions of saved ChatGPT memories cannot be loaded`,
            }),
          })
        : null),
      (t[34] = v),
      (t[35] = ve),
      (t[36] = I))
    : (I = t[36]);
  let L;
  t[37] !== v || t[38] !== _ || t[39] !== b.length
    ? ((L =
        !_ && !v && b.length === 0
          ? (0, x.jsx)(`p`, {
              className: `text-secondary`,
              children: (0, x.jsx)(i, {
                id: `settings.chatGpt.personalization.memoryHistory.empty`,
                defaultMessage: `No saved versions`,
                description: `Empty state when the user has no saved memory history versions to browse`,
              }),
            })
          : null),
      (t[37] = v),
      (t[38] = _),
      (t[39] = b.length),
      (t[40] = L))
    : (L = t[40]);
  let R;
  if (t[41] !== j || t[42] !== w?.id || t[43] !== b) {
    let e;
    (t[45] !== j || t[46] !== w?.id
      ? ((e = (e) => {
          let t = e.id ?? S,
            ee = (w?.id ?? S) === t;
          return (0, x.jsx)(
            h,
            {
              allowShrink: !0,
              "aria-pressed": ee,
              className: `h-10 w-full justify-start text-start font-semibold whitespace-normal`,
              color: ee ? `secondary` : `ghostSecondary`,
              focusRing: `inset`,
              radius: `large`,
              size: `dialogGhost`,
              onClick: () => ue(t),
              children: (0, x.jsx)(`span`, {
                className: `min-w-0 truncate`,
                children: j(e.snapshot_time),
              }),
            },
            t,
          );
        }),
        (t[45] = j),
        (t[46] = w?.id),
        (t[47] = e))
      : (e = t[47]),
      (R = b.map(e)),
      (t[41] = j),
      (t[42] = w?.id),
      (t[43] = b),
      (t[44] = R));
  } else R = t[44];
  let z;
  t[48] !== F || t[49] !== I || t[50] !== L || t[51] !== R
    ? ((z = (0, x.jsxs)(`div`, {
        className: `flex max-h-32 shrink-0 flex-col gap-1 overflow-y-auto sm:max-h-none sm:w-60`,
        children: [F, I, L, R],
      })),
      (t[48] = F),
      (t[49] = I),
      (t[50] = L),
      (t[51] = R),
      (t[52] = z))
    : (z = t[52]);
  let B;
  t[53] !== j || t[54] !== o || t[55] !== w
    ? ((B = w
        ? (0, x.jsxs)(x.Fragment, {
            children: [
              (0, x.jsxs)(`div`, {
                className: `flex flex-wrap items-center justify-between gap-2 p-8 pb-0`,
                children: [
                  (0, x.jsx)(`h3`, {
                    className: `heading-base font-semibold text-default`,
                    children: j(w.snapshot_time),
                  }),
                  (0, x.jsxs)(`div`, {
                    className: `flex items-center gap-2`,
                    children: [
                      w.id == null
                        ? null
                        : (0, x.jsx)(ae, {
                            align: `end`,
                            triggerButton: (0, x.jsx)(h, {
                              "aria-label": o.formatMessage({
                                id: `settings.chatGpt.personalization.memoryHistory.moreOptions`,
                                defaultMessage: `More options for this version`,
                                description: `Accessible label for the selected saved memory history version's actions menu`,
                              }),
                              color: `ghost`,
                              radius: `large`,
                              size: `inputIcon`,
                              children: (0, x.jsx)(oe, {}),
                            }),
                            children: (0, x.jsx)(re.Item, {
                              LeftIcon: de,
                              tone: `danger`,
                              onSelect: () => l(`delete`),
                              children: (0, x.jsx)(i, {
                                id: `settings.chatGpt.personalization.memoryHistory.delete`,
                                defaultMessage: `Delete version`,
                                description: `Menu item opening confirmation before deleting a prior saved memories version`,
                              }),
                            }),
                          }),
                      (0, x.jsx)(h, {
                        color: `outline`,
                        disabled: w.id == null,
                        radius: `full`,
                        size: `dialogAction`,
                        onClick: () => l(`restore`),
                        children:
                          w.id == null
                            ? (0, x.jsx)(i, {
                                id: `settings.chatGpt.personalization.memoryHistory.current`,
                                defaultMessage: `Current version`,
                                description: `Label identifying the current saved memories version in memory history`,
                              })
                            : (0, x.jsx)(i, {
                                id: `settings.chatGpt.personalization.memoryHistory.restore`,
                                defaultMessage: `Restore this version`,
                                description: `Button opening confirmation before replacing current saved memories with a prior version`,
                              }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, x.jsx)(`div`, {
                className: `flex min-h-0 flex-1 overflow-y-auto p-8 pt-4`,
                children:
                  w.memories.length === 0
                    ? (0, x.jsx)(`p`, {
                        className: `m-auto text-base text-secondary select-none`,
                        children: (0, x.jsx)(i, {
                          id: `settings.chatGpt.personalization.memoryHistory.noMemories`,
                          defaultMessage: `No memories`,
                          description: `Empty state when the selected saved memories history version contains no memories`,
                        }),
                      })
                    : (0, x.jsx)(`div`, {
                        className: `w-full self-start`,
                        children: (0, x.jsx)(fe, { children: w.memories.map(Se) }),
                      }),
              }),
            ],
          })
        : null),
      (t[53] = j),
      (t[54] = o),
      (t[55] = w),
      (t[56] = B))
    : (B = t[56]);
  let V;
  t[57] === B
    ? (V = t[58])
    : ((V = (0, x.jsx)(`div`, {
        className: `flex min-h-0 flex-1 flex-col overflow-hidden rounded-lg border border-default`,
        children: B,
      })),
      (t[57] = B),
      (t[58] = V));
  let H;
  t[59] !== z || t[60] !== V
    ? ((H = (0, x.jsxs)(ie, {
        className: `min-h-0 overflow-hidden`,
        size: `full`,
        variant: `chatgpt`,
        children: [
          P,
          (0, x.jsxs)(d, {
            className: `min-h-0 flex-1 gap-4 px-4 pt-0 pb-4 first:pt-0 sm:flex-row`,
            children: [z, V],
          }),
        ],
      })),
      (t[59] = z),
      (t[60] = V),
      (t[61] = H))
    : (H = t[61]);
  let Ee = c != null,
    U;
  t[62] === k.isPending
    ? (U = t[63])
    : ((U = (e) => {
        !e && !k.isPending && l(null);
      }),
      (t[62] = k.isPending),
      (t[63] = U));
  let W;
  t[64] !== c || t[65] !== k
    ? ((W = (e) => {
        (e.preventDefault(), c != null && !k.isPending && k.mutate(c));
      }),
      (t[64] = c),
      (t[65] = k),
      (t[66] = W))
    : (W = t[66]);
  let G;
  t[67] === c
    ? (G = t[68])
    : ((G = (0, x.jsx)(d, {
        children: (0, x.jsx)(pe, {
          title: (0, x.jsx)(ye, {
            children:
              c === `delete`
                ? (0, x.jsx)(i, {
                    id: `settings.chatGpt.personalization.memoryHistory.confirmDeleteTitle`,
                    defaultMessage: `Delete this version?`,
                    description: `Title asking the user to confirm permanent deletion of a prior saved memories version`,
                  })
                : (0, x.jsx)(i, {
                    id: `settings.chatGpt.personalization.memoryHistory.confirmRestoreTitle`,
                    defaultMessage: `Restore this version?`,
                    description: `Title asking the user to confirm restoring a prior saved memories version`,
                  }),
          }),
        }),
      })),
      (t[67] = c),
      (t[68] = G));
  let K;
  t[69] === c
    ? (K = t[70])
    : ((K = (0, x.jsx)(d, {
        children: (0, x.jsx)(`p`, {
          children:
            c === `delete`
              ? (0, x.jsx)(i, {
                  id: `settings.chatGpt.personalization.memoryHistory.confirmDeleteBody`,
                  defaultMessage: `This cannot be undone.`,
                  description: `Warning that deleting a prior saved memories version cannot be undone`,
                })
              : (0, x.jsx)(i, {
                  id: `settings.chatGpt.personalization.memoryHistory.confirmRestoreBody`,
                  defaultMessage: `This will replace your current saved memories`,
                  description: `Warning shown before a prior saved memories version replaces the user's current saved memories`,
                }),
        }),
      })),
      (t[69] = c),
      (t[70] = K));
  let De, Oe;
  t[71] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((De = () => l(null)),
      (Oe = (0, x.jsx)(i, {
        id: `settings.chatGpt.personalization.memoryHistory.cancel`,
        defaultMessage: `Cancel`,
        description: `Button cancelling deletion or restoration of a saved memories version`,
      })),
      (t[71] = De),
      (t[72] = Oe))
    : ((De = t[71]), (Oe = t[72]));
  let q;
  t[73] === k.isPending
    ? (q = t[74])
    : ((q = (0, x.jsx)(h, { disabled: k.isPending, onClick: De, children: Oe })),
      (t[73] = k.isPending),
      (t[74] = q));
  let J;
  t[75] === c
    ? (J = t[76])
    : ((J =
        c === `delete`
          ? (0, x.jsx)(i, {
              id: `settings.chatGpt.personalization.memoryHistory.confirmDelete`,
              defaultMessage: `Delete`,
              description: `Destructive confirmation button permanently deleting a prior saved memories version`,
            })
          : (0, x.jsx)(i, {
              id: `settings.chatGpt.personalization.memoryHistory.confirmRestore`,
              defaultMessage: `Restore`,
              description: `Confirmation button restoring a prior saved memories version as the current memories`,
            })),
      (t[75] = c),
      (t[76] = J));
  let Y;
  t[77] !== k.isPending || t[78] !== J
    ? ((Y = (0, x.jsx)(h, { color: `danger`, loading: k.isPending, type: `submit`, children: J })),
      (t[77] = k.isPending),
      (t[78] = J),
      (t[79] = Y))
    : (Y = t[79]);
  let X;
  t[80] !== q || t[81] !== Y
    ? ((X = (0, x.jsx)(d, { children: (0, x.jsxs)(me, { children: [q, Y] }) })),
      (t[80] = q),
      (t[81] = Y),
      (t[82] = X))
    : (X = t[82]);
  let Z;
  t[83] !== W || t[84] !== G || t[85] !== K || t[86] !== X
    ? ((Z = (0, x.jsxs)(ie, { as: `form`, onSubmit: W, children: [G, K, X] })),
      (t[83] = W),
      (t[84] = G),
      (t[85] = K),
      (t[86] = X),
      (t[87] = Z))
    : (Z = t[87]);
  let Q;
  t[88] !== Ee || t[89] !== U || t[90] !== Z
    ? ((Q = (0, x.jsx)(be, { open: Ee, onOpenChange: U, children: Z })),
      (t[88] = Ee),
      (t[89] = U),
      (t[90] = Z),
      (t[91] = Q))
    : (Q = t[91]);
  let $;
  return (
    t[92] !== N || t[93] !== H || t[94] !== Q
      ? (($ = (0, x.jsxs)(be, {
          open: !0,
          contentProps: M,
          size: `xxxwideTall`,
          variant: `chatgpt`,
          onOpenChange: N,
          children: [H, Q],
        })),
        (t[92] = N),
        (t[93] = H),
        (t[94] = Q),
        (t[95] = $))
      : ($ = t[95]),
    $
  );
}
function Se(e) {
  return (0, x.jsx)(
    ve,
    { label: (0, x.jsx)(`span`, { className: `select-text`, children: e.content }), control: null },
    e.id,
  );
}
function Ce(e) {
  return e.id == null;
}
var we, Te, x, S;
e(() => {
  ((we = _()),
    y(),
    o(),
    (Te = t(r(), 1)),
    le(),
    n(),
    m(),
    f(),
    u(),
    c(),
    g(),
    v(),
    l(),
    a(),
    ue(),
    s(),
    (x = p()),
    (S = `__current__`));
})();
export { b as SavedMemoryHistoryDialog };
//# sourceMappingURL=saved-memory-history-256cc198efa9.js.map
