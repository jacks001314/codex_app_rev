import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  AO as n,
  CO as r,
  Cot as i,
  En as a,
  IDt as o,
  Ixt as s,
  Mz as ee,
  NV as c,
  Nz as l,
  Pxt as u,
  TJ as d,
  TO as f,
  Tn as te,
  VDt as ne,
  _O as p,
  cO as re,
  fO as m,
  gO as ie,
  hot as ae,
  jDt as oe,
  lO as se,
  lot as h,
  oB as ce,
  oO as le,
  sO as ue,
  t3 as g,
  vO as _,
  vzt as v,
  wot as y,
  xMt as b,
  yzt as x,
  zxt as de,
} from "./app-shared-bbfeca5e5737.js";
import {
  DPn as S,
  GMr as fe,
  TPn as C,
  XMr as pe,
  fbn as w,
  fur as T,
  nT as E,
  pur as me,
  rT as he,
  tNr as D,
} from "./app-initial-5851df3f6cb1.js";
import { n as ge, t as _e } from "./contact-ready-7c923836a87f.js";
import { a as ve, i as O, o as k, s as A } from "./text-message-instructions-c51c87e9d826.js";
import { a as j, c as ye, l as be, n as xe, r as Se, t as Ce } from "./state-d33b90e079dc.js";
function we(e) {
  let t = (0, Ae.c)(42),
    {
      aeonId: n,
      threadId: r,
      initialMode: a,
      initialHandle: ee,
      embedded: c,
      onLinked: l,
      onClaimResult: u,
    } = e,
    d = c !== void 0 && c,
    f = s(i),
    [te, ne] = (0, M.useState)(a),
    p = he(),
    { data: re, isPending: m, isFetching: ie, error: oe, refetch: se } = de(Ce, n),
    { data: h, isPending: ce, isFetching: le, error: ue, refetch: g } = de(xe, n),
    { mutate: _, isPending: v } = de(j, n),
    [y, b] = (0, M.useState)(null),
    x = y?.error ?? null,
    S;
  t[0] !== n || t[1] !== d || t[2] !== p || t[3] !== _ || t[4] !== u || t[5] !== l || t[6] !== f
    ? ((S = (e) => {
        if (f.get(j, n).isPending) return;
        b(null);
        let t = performance.now(),
          r = f.get(fe),
          i = f.get(pe),
          a = () => {
            d &&
              f.get(fe) === r &&
              f.get(pe) === i &&
              f
                .get(ae)
                .success(
                  (0, N.jsx)(o, {
                    id: `restricted.aeon.email.connected`,
                    defaultMessage: `Email connected`,
                    description: `Confirmation after connecting a dot's email address`,
                  }),
                );
          };
        _(e, {
          onError: (r) => {
            let i = f.get(Ce, n),
              o = i.isSuccess && i.data.status === `linked` && i.data.narrow_email_consent_version === 1,
              s = ye(r);
            if (
              (e.type === `claim` && u?.(t, o ? `success` : s.code),
              e.type !== `unlink` && o && a(),
              p() && !(e.type === `unlink` && i.isSuccess && i.data.status === `unlinked`))
            ) {
              if (e.type !== `unlink` && o) {
                l?.();
                return;
              }
              b({ operation: e.type, error: s });
            }
          },
          onSuccess: () => {
            (e.type === `claim` && u?.(t, `success`),
              e.type !== `unlink` && a(),
              p() && e.type !== `unlink` && l?.());
          },
        });
      }),
      (t[0] = n),
      (t[1] = d),
      (t[2] = p),
      (t[3] = _),
      (t[4] = u),
      (t[5] = l),
      (t[6] = f),
      (t[7] = S))
    : (S = t[7]);
  let C = S,
    w = oe == null ? re : void 0,
    T = ce || le,
    E = ie || le,
    me;
  t[8] !== oe || t[9] !== y?.operation
    ? ((me = oe == null || y?.operation === `claim` ? null : ye(oe)),
      (t[8] = oe),
      (t[9] = y?.operation),
      (t[10] = me))
    : (me = t[10]);
  let D;
  t[11] === ue ? (D = t[12]) : ((D = ue == null ? null : ye(ue)), (t[11] = ue), (t[12] = D));
  let ge = y?.operation === `unlink`,
    _e,
    ve,
    O;
  t[13] === C
    ? ((_e = t[14]), (ve = t[15]), (O = t[16]))
    : ((O = (e) => C({ type: `claim`, body: e })),
      (_e = (e) => C({ type: `link`, body: e })),
      (ve = () => C({ type: `unlink` })),
      (t[13] = C),
      (t[14] = _e),
      (t[15] = ve),
      (t[16] = O));
  let k;
  t[17] !== y?.operation || t[18] !== p || t[19] !== l || t[20] !== se || t[21] !== g
    ? ((k = () => {
        (g(),
          se().then((e) => {
            p() &&
              (e.isError ||
                (b((t) => (t?.operation === `unlink` && e.data?.status !== `unlinked` ? t : null)),
                y?.operation !== `unlink` &&
                  e.data?.status === `linked` &&
                  e.data.narrow_email_consent_version === 1 &&
                  l?.()));
          }));
      }),
      (t[17] = y?.operation),
      (t[18] = p),
      (t[19] = l),
      (t[20] = se),
      (t[21] = g),
      (t[22] = k))
    : (k = t[22]);
  let A;
  return (
    t[23] !== d ||
    t[24] !== ee ||
    t[25] !== m ||
    t[26] !== v ||
    t[27] !== te ||
    t[28] !== h ||
    t[29] !== x ||
    t[30] !== _e ||
    t[31] !== ve ||
    t[32] !== k ||
    t[33] !== w ||
    t[34] !== T ||
    t[35] !== E ||
    t[36] !== me ||
    t[37] !== D ||
    t[38] !== ge ||
    t[39] !== O ||
    t[40] !== r
      ? ((A = (0, N.jsx)(Te, {
          initialHandle: ee,
          embedded: d,
          mode: te,
          onModeChange: ne,
          email: w,
          options: h,
          isLoading: m,
          isLoadingOptions: T,
          isRefreshing: E,
          loadError: me,
          optionsError: D,
          isUpdating: v,
          requestError: x,
          retryingUnlink: ge,
          threadId: r,
          onClaim: O,
          onLink: _e,
          onUnlink: ve,
          onRefresh: k,
        })),
        (t[23] = d),
        (t[24] = ee),
        (t[25] = m),
        (t[26] = v),
        (t[27] = te),
        (t[28] = h),
        (t[29] = x),
        (t[30] = _e),
        (t[31] = ve),
        (t[32] = k),
        (t[33] = w),
        (t[34] = T),
        (t[35] = E),
        (t[36] = me),
        (t[37] = D),
        (t[38] = ge),
        (t[39] = O),
        (t[40] = r),
        (t[41] = A))
      : (A = t[41]),
    A
  );
}
function Te(e) {
  let n = (0, Ae.c)(155),
    {
      initialHandle: i,
      embedded: a,
      mode: s,
      onModeChange: l,
      email: u,
      options: d,
      isLoading: m,
      isLoadingOptions: ae,
      isRefreshing: oe,
      loadError: h,
      optionsError: g,
      isUpdating: _,
      requestError: v,
      retryingUnlink: y,
      threadId: b,
      onClaim: x,
      onLink: de,
      onUnlink: S,
      onRefresh: fe,
    } = e,
    pe = i === void 0 ? `` : i,
    w = a !== void 0 && a,
    T = y !== void 0 && y,
    E = ne(),
    { email: he } = me(),
    D = (0, M.useId)(),
    ge = w ? `h3` : p,
    A = w ? `p` : ie,
    [j, ye] = (0, M.useState)(pe),
    [be, xe] = (0, M.useState)(!1),
    [Se, Ce] = (0, M.useState)(!1),
    [we, Te] = (0, M.useState)(null),
    [je, Me] = (0, M.useState)(null),
    P = d?.current_claim?.email_address,
    F = d?.default_domain != null && d.available_domains.includes(d.default_domain) ? d.default_domain : null,
    I = P == null && d?.auto_allocate_work_address === !0,
    L = P ?? (I ? d?.suggested_email_address : null),
    Ne;
  n[0] !== L || n[1] !== F
    ? ((Ne = L?.split(`@`)[1] ?? F), (n[0] = L), (n[1] = F), (n[2] = Ne))
    : (Ne = n[2]);
  let Pe = Ne,
    Fe;
  n[3] !== Pe || n[4] !== I
    ? ((Fe = I || (Pe != null && /^[^.]+\.chatgpt(?:-staging|-testing)?\.email$/.test(Pe))),
      (n[3] = Pe),
      (n[4] = I),
      (n[5] = Fe))
    : (Fe = n[5]);
  let R = Fe,
    z = L != null || R,
    B;
  n[6] !== I || n[7] !== he
    ? ((B = he?.split(`@`)[0].toLowerCase() ?? null),
      I && B != null && (B = B.replaceAll(`-`, ``)),
      (n[6] = I),
      (n[7] = he),
      (n[8] = B))
    : (B = n[8]);
  let V = L ?? (R && B && F ? `${B}-dot@${F}` : null),
    Ie;
  n[9] !== je || n[10] !== d?.inboxes
    ? ((Ie = d?.inboxes.find((e) => e.inbox_id === je)), (n[9] = je), (n[10] = d?.inboxes), (n[11] = Ie))
    : (Ie = n[11]);
  let H = Ie,
    U = u?.status === `linked`,
    W = m || (!U && h == null && d == null && ae),
    Le = d?.narrow_email_enabled === !0,
    Re = U && Le && u.narrow_email_consent_version !== 1,
    ze = h ?? g ?? (v === we ? null : v),
    Be = d != null && !Le,
    Ve = !m && ((s === `debug` && (U || h != null)) || h?.code === `conflict` || T),
    G = !m && h == null && Le,
    K = G && !U,
    q = K && s === `claim` && L == null && R && !B,
    He = K && s === `claim` && d != null && L == null && F == null,
    J = !m && (h != null || g != null || He),
    Y = ae || (J && oe),
    Ue =
      K &&
      s === `claim` &&
      (Se ||
        ze?.code === `invalid_address` ||
        ze?.code === `disallowed_address` ||
        ze?.code === `address_unavailable`),
    X = J || T || ze != null,
    We;
  n[12] !== P || n[13] !== ze || n[14] !== Se || n[15] !== s || n[16] !== K
    ? ((We = K && s === `claim` && P == null && Se ? { code: `invalid_address` } : ze),
      (n[12] = P),
      (n[13] = ze),
      (n[14] = Se),
      (n[15] = s),
      (n[16] = K),
      (n[17] = We))
    : (We = n[17]);
  let Z = We,
    Ge = w && !W && (h != null || (!U && (Be || He || q || (g != null && d == null))));
  if (w && W && !_) {
    let e;
    return (
      n[18] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, N.jsx)(ve, {})), (n[18] = e))
        : (e = n[18]),
      e
    );
  }
  if (w && s === `claim` && U && u.email_address != null && !Re && h == null && d != null) {
    let e;
    return (
      n[19] !== u.email_address || n[20] !== b
        ? ((e = (0, N.jsx)(_e, { conversationId: b, method: `email`, destination: u.email_address })),
          (n[19] = u.email_address),
          (n[20] = b),
          (n[21] = e))
        : (e = n[21]),
      e
    );
  }
  let Q = Z != null || He || q,
    Ke = `${D}-description`,
    qe = Q && !Ge ? `text-danger` : void 0,
    Je = Q && !Ge ? `alert` : void 0,
    Ye;
  n[22] !== z || n[23] !== Z || n[24] !== s || n[25] !== K
    ? ((Ye =
        Z == null ? null : (0, N.jsx)(ke, { error: Z, editingHandle: K && s === `claim`, fixedHandle: z })),
      (n[22] = z),
      (n[23] = Z),
      (n[24] = s),
      (n[25] = K),
      (n[26] = Ye))
    : (Ye = n[26]);
  let Xe;
  n[27] !== Z || n[28] !== He
    ? ((Xe =
        Z == null && He
          ? (0, N.jsx)(o, {
              id: `restricted.aeon.email.settings.domain.unavailable.helpText`,
              defaultMessage: `No email domain is available for this workspace. Try again`,
              description: `Error in email setup when the server has not supplied an available default domain for this account`,
            })
          : null),
      (n[27] = Z),
      (n[28] = He),
      (n[29] = Xe))
    : (Xe = n[29]);
  let Ze;
  n[30] !== Z || n[31] !== q
    ? ((Ze =
        Z == null && q
          ? (0, N.jsx)(o, {
              id: `restricted.aeon.email.dialog.employeeAlias.unavailable`,
              defaultMessage: `Email setup is unavailable for your work email address`,
              description: `Shown when the signed-in employee email is missing, so the required workspace email address cannot be determined`,
            })
          : null),
      (n[30] = Z),
      (n[31] = q),
      (n[32] = Ze))
    : (Ze = n[32]);
  let Qe;
  n[33] !== P || n[34] !== Q || n[35] !== s || n[36] !== Be
    ? ((Qe = Q
        ? null
        : (0, N.jsxs)(N.Fragment, {
            children: [
              Be
                ? (0, N.jsx)(o, {
                    id: `restricted.aeon.email.settings.previewUnavailable.productName`,
                    defaultMessage: `Email is unavailable for your {dot}`,
                    description: `Message in email settings when the account cannot set up or refresh email access. {dot} is the untranslated term for the user's agent.`,
                    values: { dot: `dot` },
                  })
                : null,
              !Be && s === `claim` && P != null
                ? (0, N.jsx)(o, {
                    id: `restricted.aeon.email.dialog.fixedAddress.description.productName`,
                    defaultMessage: `Connect this address to keep emailing your {dot}`,
                    description: `Guidance for reconnecting an email address already owned by the user. {dot} is the untranslated term for the user's agent.`,
                    values: { dot: `dot` },
                  })
                : null,
              !Be && s === `claim` && P == null
                ? (0, N.jsx)(o, {
                    id: `restricted.aeon.email.dialog.claim.description.productName`,
                    defaultMessage: `Claim an email address to email your {dot}`,
                    description: `Instruction below the new email address field. {dot} is the untranslated term for the user's agent.`,
                    values: { dot: `dot` },
                  })
                : null,
              !Be && s === `debug`
                ? (0, N.jsx)(o, {
                    id: `restricted.aeon.email.dialog.debug.description`,
                    defaultMessage: `Link an existing address or manage email setup`,
                    description: `Short description of the dot email debug controls`,
                  })
                : null,
            ],
          })),
      (n[33] = P),
      (n[34] = Q),
      (n[35] = s),
      (n[36] = Be),
      (n[37] = Qe))
    : (Qe = n[37]);
  let $e;
  n[38] !== Je || n[39] !== Ye || n[40] !== Xe || n[41] !== Ze || n[42] !== Qe || n[43] !== Ke || n[44] !== qe
    ? (($e = (0, N.jsxs)(`span`, { id: Ke, className: qe, role: Je, children: [Ye, Xe, Ze, Qe] })),
      (n[38] = Je),
      (n[39] = Ye),
      (n[40] = Xe),
      (n[41] = Ze),
      (n[42] = Qe),
      (n[43] = Ke),
      (n[44] = qe),
      (n[45] = $e))
    : ($e = n[45]);
  let $ = $e,
    et;
  n[46] !== A ||
  n[47] !== $ ||
  n[48] !== w ||
  n[49] !== W ||
  n[50] !== s ||
  n[51] !== D ||
  n[52] !== R ||
  n[53] !== K
    ? ((et = W
        ? null
        : (0, N.jsxs)(A, {
            className: w
              ? `flex flex-col gap-3 text-sm text-secondary select-none`
              : `text-sm text-secondary select-none`,
            children: [
              $,
              K && s === `claim` && R
                ? (0, N.jsx)(`span`, {
                    id: `${D}-work-account`,
                    className: `block`,
                    children: (0, N.jsx)(o, {
                      id: `restricted.aeon.email.dialog.employeeAlias.fixed`,
                      defaultMessage: `Email addresses can’t be customized for work accounts`,
                      description: `Helper text explaining that the displayed email handle is read-only because this work account requires the signed-in employee's email alias`,
                    }),
                  })
                : null,
            ],
          })),
      (n[46] = A),
      (n[47] = $),
      (n[48] = w),
      (n[49] = W),
      (n[50] = s),
      (n[51] = D),
      (n[52] = R),
      (n[53] = K),
      (n[54] = et))
    : (et = n[54]);
  let tt = et,
    nt;
  n[55] !== w || n[56] !== z || n[57] !== s || n[58] !== D || n[59] !== K
    ? ((nt =
        !w && K && s === `claim` && !z
          ? (0, N.jsx)(`p`, {
              id: `${D}-permanent`,
              className: `text-sm text-secondary select-none`,
              children: (0, N.jsx)(o, {
                id: `restricted.aeon.email.dialog.claim.permanent`,
                defaultMessage: `This email is permanent and cannot be edited`,
                description: `Explains that a Personal dot email address cannot be changed after the user claims it`,
              }),
            })
          : null),
      (n[55] = w),
      (n[56] = z),
      (n[57] = s),
      (n[58] = D),
      (n[59] = K),
      (n[60] = nt))
    : (nt = n[60]);
  let rt = nt;
  if (w && s === `claim` && K && !Ge && Z == null && P == null && !be) {
    let e;
    n[61] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (e) => {
          (e.preventDefault(), xe(!0));
        }),
        (n[61] = e))
      : (e = n[61]);
    let r, i;
    n[62] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, N.jsx)(ee, { asset: te, className: `text-secondary` })),
        (i = (0, N.jsx)(o, {
          id: `restricted.aeon.email.setup.connect`,
          defaultMessage: `Connect Email`,
          description: `Title and action for starting the dot email connection flow`,
        })),
        (n[62] = r),
        (n[63] = i))
      : ((r = n[62]), (i = n[63]));
    let a;
    n[64] === $
      ? (a = n[65])
      : ((a = (0, N.jsx)(O, { icon: r, title: i, description: $ })), (n[64] = $), (n[65] = a));
    let s;
    n[66] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((s = (0, N.jsx)(ue, {
          children: (0, N.jsx)(t, {
            color: `primary`,
            size: `detailAction`,
            type: `submit`,
            children: (0, N.jsx)(o, {
              id: `restricted.aeon.email.setup.connect`,
              defaultMessage: `Connect Email`,
              description: `Title and action for starting the dot email connection flow`,
            }),
          }),
        })),
        (n[66] = s))
      : (s = n[66]);
    let c;
    return (
      n[67] === a
        ? (c = n[68])
        : ((c = (0, N.jsxs)(`form`, { className: `flex flex-col gap-6`, onSubmit: e, children: [a, s] })),
          (n[67] = a),
          (n[68] = c)),
      c
    );
  }
  let it = w ? void 0 : `viewport`,
    at = w ? `chatgpt` : `default`,
    ot;
  n[69] !== u ||
  n[70] !== B ||
  n[71] !== L ||
  n[72] !== _ ||
  n[73] !== U ||
  n[74] !== j ||
  n[75] !== q ||
  n[76] !== s ||
  n[77] !== J ||
  n[78] !== x ||
  n[79] !== de ||
  n[80] !== fe ||
  n[81] !== S ||
  n[82] !== d ||
  n[83] !== Y ||
  n[84] !== R ||
  n[85] !== T ||
  n[86] !== F ||
  n[87] !== H ||
  n[88] !== G
    ? ((ot = (e) => {
        if ((e.preventDefault(), _ || Y)) return;
        if (J) {
          fe();
          return;
        }
        if (T) {
          S();
          return;
        }
        if (!G) return;
        let t = U ? u.inbox_id : null;
        if (t != null) de({ inbox_id: t, narrow_email_consent_version: 1 });
        else if (d != null) {
          if (s === `debug` && H != null) de({ inbox_id: H.inbox_id, narrow_email_consent_version: 1 });
          else if (s === `claim` && L != null) {
            let e = L.lastIndexOf(`@`);
            x({ local_part: L.slice(0, e), domain: L.slice(e + 1), narrow_email_consent_version: 1 });
          } else if (s === `claim` && F != null) {
            if (q) return;
            let e = j.trim().toLowerCase();
            if (!R && (ye(e), !/^(?=.{1,30}$)[a-z0-9-]+(?:\.[a-z0-9-]+)*$/.test(e))) {
              Ce(!0);
              return;
            }
            x({ local_part: R ? `${B}-dot` : e, domain: F, narrow_email_consent_version: 1 });
          }
        }
      }),
      (n[69] = u),
      (n[70] = B),
      (n[71] = L),
      (n[72] = _),
      (n[73] = U),
      (n[74] = j),
      (n[75] = q),
      (n[76] = s),
      (n[77] = J),
      (n[78] = x),
      (n[79] = de),
      (n[80] = fe),
      (n[81] = S),
      (n[82] = d),
      (n[83] = Y),
      (n[84] = R),
      (n[85] = T),
      (n[86] = F),
      (n[87] = H),
      (n[88] = G),
      (n[89] = ot))
    : (ot = n[89]);
  let st;
  n[90] !== ge || n[91] !== w || n[92] !== z || n[93] !== _ || n[94] !== U || n[95] !== s || n[96] !== l
    ? ((st =
        !w || s === `debug`
          ? (0, N.jsxs)(`div`, {
              className: `flex min-h-6 items-center justify-between gap-2 pe-8`,
              children: [
                (0, N.jsx)(re, {
                  title: (0, N.jsxs)(ge, {
                    children: [
                      s === `debug`
                        ? (0, N.jsx)(o, {
                            id: `restricted.aeon.email.dialog.debug.title`,
                            defaultMessage: `Email debug`,
                            description: `Accessible title of the dot email debug dialog for linking an existing address, repairing setup, or removing a link`,
                          })
                        : null,
                      s === `claim` && z
                        ? (0, N.jsx)(o, {
                            id: `restricted.aeon.email.dialog.title.work`,
                            defaultMessage: `Activate email`,
                            description: `Accessible title of the email setup dialog when activating an already claimed address or a fixed work address`,
                          })
                        : null,
                      s === `claim` && !z
                        ? (0, N.jsx)(o, {
                            id: `restricted.aeon.email.dialog.title.claim`,
                            defaultMessage: `Claim an email address`,
                            description: `Accessible title of the dialog for choosing a new email address for a dot`,
                          })
                        : null,
                    ],
                  }),
                }),
                s === `debug` && !U
                  ? (0, N.jsxs)(t, {
                      color: `ghost`,
                      size: `compact`,
                      type: `button`,
                      disabled: _,
                      onClick: () => l(`claim`),
                      children: [
                        (0, N.jsx)(ce, {}),
                        (0, N.jsx)(o, {
                          id: `restricted.aeon.email.dialog.back`,
                          defaultMessage: `Back`,
                          description: `Returns from the dot email debug controls to the new email handle form`,
                        }),
                      ],
                    })
                  : (0, N.jsx)(`span`, {}),
                s === `claim`
                  ? (0, N.jsx)(t, {
                      color: `ghost`,
                      size: `compact`,
                      type: `button`,
                      disabled: _,
                      onClick: () => l(`debug`),
                      children: (0, N.jsx)(o, {
                        id: `restricted.aeon.email.dialog.debug`,
                        defaultMessage: `Debug`,
                        description: `Opens dot email debug controls for linking an existing address or repairing setup`,
                      }),
                    })
                  : null,
              ],
            })
          : null),
      (n[90] = ge),
      (n[91] = w),
      (n[92] = z),
      (n[93] = _),
      (n[94] = U),
      (n[95] = s),
      (n[96] = l),
      (n[97] = st))
    : (st = n[97]);
  let ct = w ? `flex-1` : void 0,
    lt;
  n[98] !== V ||
  n[99] !== $ ||
  n[100] !== u ||
  n[101] !== w ||
  n[102] !== z ||
  n[103] !== Ue ||
  n[104] !== Q ||
  n[105] !== E ||
  n[106] !== m ||
  n[107] !== _ ||
  n[108] !== U ||
  n[109] !== h ||
  n[110] !== W ||
  n[111] !== j ||
  n[112] !== s ||
  n[113] !== D ||
  n[114] !== d ||
  n[115] !== g ||
  n[116] !== tt ||
  n[117] !== rt ||
  n[118] !== v ||
  n[119] !== R ||
  n[120] !== F ||
  n[121] !== H?.email_address ||
  n[122] !== H?.inbox_id ||
  n[123] !== Ge ||
  n[124] !== K
    ? ((lt = Ge
        ? (0, N.jsx)(O, {
            role: Q ? `alert` : `status`,
            title:
              h != null || g != null
                ? (0, N.jsx)(o, {
                    id: `restricted.aeon.email.dialog.loadErrorTitle`,
                    defaultMessage: `Couldn’t set up Email`,
                    description: `Heading in the contact card when loading email settings fails`,
                  })
                : (0, N.jsx)(o, {
                    id: `restricted.aeon.email.dialog.unavailableTitle`,
                    defaultMessage: `Email unavailable`,
                    description: `Heading when this account has no available email setup`,
                  }),
            description: $,
          })
        : (0, N.jsxs)(k, {
            description: tt,
            children: [
              W ? (0, N.jsx)(Oe, {}) : null,
              !m && h == null && U
                ? (0, N.jsx)(`p`, {
                    className: `text-base font-semibold break-all text-default select-text`,
                    role: `status`,
                    children: u.email_address,
                  })
                : null,
              K &&
                s === `claim` &&
                V != null &&
                (w
                  ? (0, N.jsxs)(`div`, {
                      className: `flex w-full min-w-0 flex-col items-center justify-center gap-1`,
                      children: [
                        (0, N.jsx)(C, {
                          id: D,
                          variant: `inline`,
                          autoSize: !0,
                          readOnly: !0,
                          value: V.slice(0, V.lastIndexOf(`@`)),
                          "aria-label": E.formatMessage({
                            id: `restricted.aeon.email.settings.fixedHandle.label`,
                            defaultMessage: `Email handle`,
                            description: `Accessible label for the read-only dot email handle, the part before the at sign in an existing or work account address`,
                          }),
                          "aria-describedby": `${D}-description ${D}-domain${R ? ` ${D}-work-account` : ``}`,
                        }),
                        (0, N.jsx)(`span`, {
                          id: `${D}-domain`,
                          className: `min-w-0 text-heading-lg leading-snug font-medium text-balance wrap-anywhere text-tertiary select-text`,
                          children: V.slice(V.lastIndexOf(`@`)),
                        }),
                      ],
                    })
                  : (0, N.jsxs)(`p`, {
                      className: `max-w-full text-heading-lg leading-7 font-medium wrap-anywhere text-default select-text`,
                      children: [
                        V.slice(0, V.lastIndexOf(`@`)),
                        (0, N.jsx)(`br`, {}),
                        V.slice(V.lastIndexOf(`@`)),
                      ],
                    })),
              K && d != null && s === `claim` && !z
                ? (0, N.jsxs)(`div`, {
                    className: w
                      ? `flex w-full min-w-0 flex-col items-center justify-center gap-1`
                      : `flex w-full min-w-0 flex-wrap items-center justify-center gap-1`,
                    children: [
                      (0, N.jsx)(`div`, {
                        className: w
                          ? `flex max-w-full min-w-0 items-center gap-1`
                          : `flex w-36 max-w-full items-center`,
                        children: (0, N.jsx)(C, {
                          id: D,
                          variant: w ? `inline` : `rounded`,
                          autoSize: w,
                          autoFocus: !0,
                          autoComplete: `off`,
                          "data-1p-ignore": !0,
                          autoCapitalize: `none`,
                          spellCheck: !1,
                          required: !0,
                          minLength: 1,
                          name: `local_part`,
                          pattern: `[a-z0-9\\-]+(?:\\.[a-z0-9\\-]+)*`,
                          "aria-label": E.formatMessage({
                            id: `restricted.aeon.email.settings.handle.label.handle`,
                            defaultMessage: `Handle`,
                            description: `Accessible label for the Personal email handle, the part before the at sign in a dot email address`,
                          }),
                          "aria-invalid": Ue || void 0,
                          "aria-describedby": `${D}-description${w ? `` : ` ${D}-permanent`}${F == null ? `` : ` ${D}-domain`}`,
                          placeholder: E.formatMessage({
                            id: `restricted.aeon.email.settings.handle.placeholder.handle`,
                            defaultMessage: `Handle`,
                            description: `Placeholder in the empty Personal email handle field, the part before the at sign in a dot email address`,
                          }),
                          title: E.formatMessage({
                            id: `restricted.aeon.email.settings.name.helpText.completeAddress`,
                            defaultMessage: `Use 1–30 letters (a–z), numbers, hyphens, or dots. Don’t start or end with a dot or use two in a row`,
                            description: `Guidance for choosing a Personal dot email handle, the part before the at sign; lowercase ASCII letters, digits, hyphens, and single interior dots are supported, but leading, trailing, and consecutive dots are not. No suffix is added.`,
                          }),
                          value: j,
                          disabled: _ || F == null,
                          onChange: (e) => {
                            (ye(e.target.value),
                              Ce(!1),
                              (v?.code === `invalid_address` ||
                                v?.code === `disallowed_address` ||
                                v?.code === `address_unavailable`) &&
                                Te(v));
                          },
                        }),
                      }),
                      F == null
                        ? null
                        : (0, N.jsx)(`span`, {
                            id: `${D}-domain`,
                            className: w
                              ? `min-w-0 text-heading-lg leading-snug font-medium text-balance wrap-anywhere text-tertiary select-text`
                              : `min-w-0 text-base break-all text-secondary select-text`,
                            children: `@${F}`.split(`.`).map(De),
                          }),
                    ],
                  })
                : null,
              rt,
              K && d != null && s === `debug` && d.inboxes.length === 0
                ? (0, N.jsx)(`p`, {
                    className: `text-sm text-secondary select-none`,
                    children: (0, N.jsx)(o, {
                      id: `restricted.aeon.email.settings.existing.empty`,
                      defaultMessage: `No existing unlinked addresses`,
                      description: `Empty state in dot email debug controls when the user has no owned, unlinked email addresses available`,
                    }),
                  })
                : null,
              K && d != null && s === `debug` && d.inboxes.length > 0
                ? (0, N.jsx)(r, {
                    align: `start`,
                    contentWidth: `menu`,
                    triggerButton: (0, N.jsxs)(t, {
                      className: `w-full`,
                      allowShrink: !0,
                      color: `outlineSurface`,
                      size: `dialogAction`,
                      disabled: _,
                      type: `button`,
                      "aria-label": E.formatMessage({
                        id: `restricted.aeon.email.settings.existing.label`,
                        defaultMessage: `Existing address`,
                        description: `Accessible label for choosing an existing owned email address that is not already linked to a dot`,
                      }),
                      children: [
                        (0, N.jsx)(`span`, {
                          className: `flex min-w-0 flex-1 items-center gap-2`,
                          children: (0, N.jsx)(`span`, {
                            className: `truncate`,
                            children:
                              H?.email_address ??
                              (0, N.jsx)(o, {
                                id: `restricted.aeon.email.settings.existing.placeholder`,
                                defaultMessage: `Choose an existing address`,
                                description: `Placeholder in dot email debug controls for the dropdown of owned addresses that can be linked`,
                              }),
                          }),
                        }),
                        (0, N.jsx)(c, {}),
                      ],
                    }),
                    children: (0, N.jsx)(f.RadioGroup, {
                      value: H?.inbox_id ?? ``,
                      onValueChange: Me,
                      children: d.inboxes.map(Ee),
                    }),
                  })
                : null,
            ],
          })),
      (n[98] = V),
      (n[99] = $),
      (n[100] = u),
      (n[101] = w),
      (n[102] = z),
      (n[103] = Ue),
      (n[104] = Q),
      (n[105] = E),
      (n[106] = m),
      (n[107] = _),
      (n[108] = U),
      (n[109] = h),
      (n[110] = W),
      (n[111] = j),
      (n[112] = s),
      (n[113] = D),
      (n[114] = d),
      (n[115] = g),
      (n[116] = tt),
      (n[117] = rt),
      (n[118] = v),
      (n[119] = R),
      (n[120] = F),
      (n[121] = H?.email_address),
      (n[122] = H?.inbox_id),
      (n[123] = Ge),
      (n[124] = K),
      (n[125] = lt))
    : (lt = n[125]);
  let ut;
  n[126] !== ct || n[127] !== lt
    ? ((ut = (0, N.jsx)(se, { className: ct, children: lt })), (n[126] = ct), (n[127] = lt), (n[128] = ut))
    : (ut = n[128]);
  let dt;
  n[129] !== P ||
  n[130] !== w ||
  n[131] !== z ||
  n[132] !== m ||
  n[133] !== _ ||
  n[134] !== U ||
  n[135] !== q ||
  n[136] !== s ||
  n[137] !== Re ||
  n[138] !== J ||
  n[139] !== S ||
  n[140] !== Y ||
  n[141] !== R ||
  n[142] !== X ||
  n[143] !== T ||
  n[144] !== H ||
  n[145] !== G ||
  n[146] !== Ve
    ? ((dt =
        w || Ve || G || J
          ? (0, N.jsx)(`div`, {
              className: w ? `mt-6` : `mt-3`,
              children: (0, N.jsxs)(ue, {
                children: [
                  w || G || J
                    ? (0, N.jsx)(t, {
                        autoFocus: w && s === `claim` && z,
                        color: w ? `primary` : `accent`,
                        size: w ? `detailAction` : void 0,
                        disabled: m || (!G && !J) || _ || Y || q || (!J && !U && s === `debug` && H == null),
                        loading: _ || Y,
                        type: `submit`,
                        children:
                          w && s === `claim` && !T && (_ || !X)
                            ? (0, N.jsx)(o, {
                                id: `restricted.aeon.email.setup.connectAction`,
                                defaultMessage: `{pending, select, true {Connecting…} other {Connect Email}}`,
                                description: `Connects the dot's email address, or shows progress while connecting`,
                                values: { pending: _ },
                              })
                            : (0, N.jsxs)(N.Fragment, {
                                children: [
                                  Re && !X
                                    ? (0, N.jsx)(o, {
                                        id: `restricted.aeon.email.settings.enableSending`,
                                        defaultMessage: `Enable email sending`,
                                        description: `Saves the email permission for an address already linked to this dot`,
                                      })
                                    : null,
                                  U && !Re && !X
                                    ? (0, N.jsx)(o, {
                                        id: `restricted.aeon.email.settings.refreshSetup.label`,
                                        defaultMessage: `Refresh email setup`,
                                        description: `Repeats setup for the linked dot address to repair an interrupted setup without claiming another address`,
                                      })
                                    : null,
                                  X
                                    ? (0, N.jsx)(o, {
                                        id: `restricted.aeon.email.dialog.recovery.retry.label`,
                                        defaultMessage: `Try again`,
                                        description: `Retries email setup using the current form, or refreshes settings when required information could not be loaded`,
                                      })
                                    : null,
                                  !X && !U && s === `claim` && z
                                    ? (0, N.jsx)(o, {
                                        id: `restricted.aeon.email.settings.employeeAlias.activate.label`,
                                        defaultMessage: `Activate email`,
                                        description: `Activates an already claimed address or a fixed work address, links it to this dot, and enables email under the dot's normal permissions`,
                                      })
                                    : null,
                                  !X && !U && s === `claim` && P == null && !R
                                    ? (0, N.jsx)(o, {
                                        id: `restricted.aeon.email.settings.claim.label`,
                                        defaultMessage: `Claim email address`,
                                        description: `Claims the chosen email address, links it to this dot, and enables email under the dot's normal permissions`,
                                      })
                                    : null,
                                  !X && !U && s === `debug`
                                    ? (0, N.jsx)(o, {
                                        id: `restricted.aeon.email.settings.link.label`,
                                        defaultMessage: `Link address`,
                                        description: `Links the selected existing address to this dot and enables email under its normal permissions`,
                                      })
                                    : null,
                                ],
                              }),
                      })
                    : null,
                  Ve
                    ? (0, N.jsx)(t, {
                        color: `ghost`,
                        disabled: _ || Y,
                        type: `button`,
                        onClick: S,
                        children: (0, N.jsx)(o, {
                          id: `restricted.aeon.email.settings.unlink.label`,
                          defaultMessage: `Remove email`,
                          description: `Removes the address's link to this dot while keeping the address owned by the user; available in email debug controls or after a link conflict`,
                        }),
                      })
                    : null,
                ],
              }),
            })
          : null),
      (n[129] = P),
      (n[130] = w),
      (n[131] = z),
      (n[132] = m),
      (n[133] = _),
      (n[134] = U),
      (n[135] = q),
      (n[136] = s),
      (n[137] = Re),
      (n[138] = J),
      (n[139] = S),
      (n[140] = Y),
      (n[141] = R),
      (n[142] = X),
      (n[143] = T),
      (n[144] = H),
      (n[145] = G),
      (n[146] = Ve),
      (n[147] = dt))
    : (dt = n[147]);
  let ft;
  return (
    n[148] !== it || n[149] !== at || n[150] !== ot || n[151] !== st || n[152] !== ut || n[153] !== dt
      ? ((ft = (0, N.jsxs)(le, {
          as: `form`,
          size: it,
          variant: at,
          noValidate: !0,
          onSubmit: ot,
          children: [st, ut, dt],
        })),
        (n[148] = it),
        (n[149] = at),
        (n[150] = ot),
        (n[151] = st),
        (n[152] = ut),
        (n[153] = dt),
        (n[154] = ft))
      : (ft = n[154]),
    ft
  );
}
function Ee(e) {
  return (0, N.jsx)(f.RadioItem, { value: e.inbox_id, children: e.email_address }, e.inbox_id);
}
function De(e, t, n) {
  let r = t < n.length - 1 ? `${e}.` : e;
  return (0, N.jsxs)(
    M.Fragment,
    { children: [r, t < n.length - 1 ? (0, N.jsx)(`wbr`, {}) : null] },
    `${t}-${e}`,
  );
}
function Oe() {
  let e = (0, Ae.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, N.jsx)(`p`, {
          className: `text-sm text-secondary select-none`,
          role: `status`,
          children: (0, N.jsx)(o, {
            id: `restricted.aeon.email.settings.loading`,
            defaultMessage: `Loading email settings…`,
            description: `Loading indicator while reading the selected dot's email binding or available addresses`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function ke(e) {
  let t = (0, Ae.c)(5),
    { error: n, editingHandle: r, fixedHandle: i } = e;
  if (
    i &&
    (n.code === `invalid_address` || n.code === `disallowed_address` || n.code === `address_unavailable`)
  ) {
    let e;
    return (
      t[0] === n.code
        ? (e = t[1])
        : ((e = (0, N.jsx)(o, {
            id: `restricted.aeon.email.dialog.fixedAddress.error`,
            defaultMessage: `{code, select, address_unavailable {This email address is already taken} disallowed_address {This email address isn’t allowed} other {Email setup is unavailable for this address}}`,
            description: `Explains a setup failure for a fixed email address, either previously claimed or derived from an employee login; the user cannot choose a different handle`,
            values: { code: n.code },
          })),
          (t[0] = n.code),
          (t[1] = e)),
      e
    );
  }
  let a;
  return (
    t[2] !== r || t[3] !== n.code
      ? ((a =
          r &&
          (n.code === `invalid_address` ||
            n.code === `disallowed_address` ||
            n.code === `address_unavailable`)
            ? (0, N.jsx)(o, {
                id: `restricted.aeon.email.dialog.handleError.dot`,
                defaultMessage: `{code, select, address_unavailable {This email address is already taken. Try another} disallowed_address {This email address isn’t allowed. Try another} other {Use 1–30 letters (a–z), numbers, hyphens, or dots. Don’t start or end with a dot or use two in a row}}`,
                description: `Inline feedback after submitting a new email handle, explaining whether its name is taken, rejected by name policy, or incorrectly formatted`,
                values: { code: n.code },
              })
            : (0, N.jsx)(o, {
                id: `restricted.aeon.email.dialog.operationError.productName`,
                defaultMessage: `{code, select, ineligible {Email isn’t available in this workspace} workspace_disabled {Email is disabled by your workspace admin} invalid_address {This email address has an invalid format} disallowed_address {This email address isn’t allowed. Try another} address_unavailable {This email address is already taken. Try another} quota_exceeded {You’ve reached the email address limit for this account} workspace_setup {Email setup isn’t ready for this workspace. Try again} permission_required {Your {dot}’s email needs permission to send messages. Update its app permissions, then retry.} conflict {This address couldn’t be linked to this {dot}} access_denied {Email settings are unavailable. Check your access to this {dot} and workspace.} other {Email setup failed. Try again}}`,
                description: `Email error messages for workspace eligibility, access, address validation, account quota, workspace setup, send permissions, concurrent link changes, or provider failure. {dot} is the untranslated term for the user's agent.`,
                values: { code: n.code, dot: `dot` },
              })),
        (t[2] = r),
        (t[3] = n.code),
        (t[4] = a))
      : (a = t[4]),
    a
  );
}
var Ae, M, N;
function je() {
  return (je = e(() => {
    ((Ae = v()),
      a(),
      u(),
      (M = x()),
      oe(),
      D(),
      T(),
      g(),
      _(),
      m(),
      n(),
      l(),
      d(),
      S(),
      h(),
      y(),
      E(),
      w(),
      ge(),
      A(),
      be(),
      Se(),
      (N = b()));
  }))();
}
je();
export { we as EmailSettingsDialogBody };
//# sourceMappingURL=dialog-9d2a86f6a26c.js.map
