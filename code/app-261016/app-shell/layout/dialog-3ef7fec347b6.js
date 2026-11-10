import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  Bn as r,
  DB as i,
  FBt as a,
  HO as o,
  IO as s,
  JO as c,
  KO as ee,
  LNt as l,
  LO as u,
  OB as d,
  PBt as te,
  Qst as ne,
  RO as f,
  TY as p,
  Vrt as m,
  XOt as h,
  Y3 as g,
  Z3 as _,
  ZSt as re,
  ck as ie,
  kH as ae,
  nCt as v,
  okt as oe,
  qO as se,
  qrt as ce,
  rk as le,
  tV as ue,
  tk as y,
  tkt as b,
  zO as de,
  zn as fe,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as x,
  BRr as pe,
  CCn as S,
  MT as C,
  ZLn as me,
  imr as he,
  jT as w,
  rmr as T,
  wLr as E,
  zRr as D,
} from "./app-initial-ad16eaadf81f.js";
import { n as ge, t as _e } from "./contact-ready-a5c1b12887b2.js";
import { a as O, i as k, o as ve, s as A } from "./text-message-instructions-b6697bc2c9ac.js";
import { a as j, c as ye, l as be, n as xe, r as Se, t as Ce } from "./state-adcafba6da33.js";
function we(e) {
  let n = (0, Ae.c)(42),
    {
      aeonId: r,
      threadId: i,
      initialMode: a,
      initialHandle: o,
      embedded: s,
      onLinked: c,
      onClaimResult: ee,
    } = e,
    l = s !== void 0 && s,
    u = t(ne),
    [d, te] = (0, M.useState)(a),
    f = C(),
    { data: p, isPending: m, isFetching: h, error: g, refetch: _ } = v(Ce, r),
    { data: re, isPending: ie, isFetching: ae, error: oe, refetch: se } = v(xe, r),
    { mutate: le, isPending: ue } = v(j, r),
    [y, de] = (0, M.useState)(null),
    fe = y?.error ?? null,
    x;
  n[0] !== r || n[1] !== l || n[2] !== f || n[3] !== le || n[4] !== ee || n[5] !== c || n[6] !== u
    ? ((x = (e) => {
        if (u.get(j, r).isPending) return;
        de(null);
        let t = performance.now(),
          n = u.get(D),
          i = u.get(pe),
          a = () => {
            l &&
              u.get(D) === n &&
              u.get(pe) === i &&
              u
                .get(ce)
                .success(
                  (0, N.jsx)(b, {
                    id: `restricted.aeon.email.connected`,
                    defaultMessage: `Email connected`,
                    description: `Confirmation after connecting a dot's email address`,
                  }),
                );
          };
        le(e, {
          onError: (n) => {
            let i = u.get(Ce, r),
              o = i.isSuccess && i.data.status === `linked` && i.data.narrow_email_consent_version === 1,
              s = ye(n);
            if (
              (e.type === `claim` && ee?.(t, o ? `success` : s.code),
              e.type !== `unlink` && o && a(),
              f() && !(e.type === `unlink` && i.isSuccess && i.data.status === `unlinked`))
            ) {
              if (e.type !== `unlink` && o) {
                c?.();
                return;
              }
              de({ operation: e.type, error: s });
            }
          },
          onSuccess: () => {
            (e.type === `claim` && ee?.(t, `success`),
              e.type !== `unlink` && a(),
              f() && e.type !== `unlink` && c?.());
          },
        });
      }),
      (n[0] = r),
      (n[1] = l),
      (n[2] = f),
      (n[3] = le),
      (n[4] = ee),
      (n[5] = c),
      (n[6] = u),
      (n[7] = x))
    : (x = n[7]);
  let S = x,
    me = g == null ? p : void 0,
    he = ie || ae,
    w = h || ae,
    T;
  n[8] !== g || n[9] !== y?.operation
    ? ((T = g == null || y?.operation === `claim` ? null : ye(g)),
      (n[8] = g),
      (n[9] = y?.operation),
      (n[10] = T))
    : (T = n[10]);
  let E;
  n[11] === oe ? (E = n[12]) : ((E = oe == null ? null : ye(oe)), (n[11] = oe), (n[12] = E));
  let ge = y?.operation === `unlink`,
    _e,
    O,
    k;
  n[13] === S
    ? ((_e = n[14]), (O = n[15]), (k = n[16]))
    : ((k = (e) => S({ type: `claim`, body: e })),
      (_e = (e) => S({ type: `link`, body: e })),
      (O = () => S({ type: `unlink` })),
      (n[13] = S),
      (n[14] = _e),
      (n[15] = O),
      (n[16] = k));
  let ve;
  n[17] !== y?.operation || n[18] !== f || n[19] !== c || n[20] !== _ || n[21] !== se
    ? ((ve = () => {
        (se(),
          _().then((e) => {
            f() &&
              (e.isError ||
                (de((t) => (t?.operation === `unlink` && e.data?.status !== `unlinked` ? t : null)),
                y?.operation !== `unlink` &&
                  e.data?.status === `linked` &&
                  e.data.narrow_email_consent_version === 1 &&
                  c?.()));
          }));
      }),
      (n[17] = y?.operation),
      (n[18] = f),
      (n[19] = c),
      (n[20] = _),
      (n[21] = se),
      (n[22] = ve))
    : (ve = n[22]);
  let A;
  return (
    n[23] !== l ||
    n[24] !== o ||
    n[25] !== m ||
    n[26] !== ue ||
    n[27] !== d ||
    n[28] !== re ||
    n[29] !== fe ||
    n[30] !== _e ||
    n[31] !== O ||
    n[32] !== ve ||
    n[33] !== me ||
    n[34] !== he ||
    n[35] !== w ||
    n[36] !== T ||
    n[37] !== E ||
    n[38] !== ge ||
    n[39] !== k ||
    n[40] !== i
      ? ((A = (0, N.jsx)(Te, {
          initialHandle: o,
          embedded: l,
          mode: d,
          onModeChange: te,
          email: me,
          options: re,
          isLoading: m,
          isLoadingOptions: he,
          isRefreshing: w,
          loadError: T,
          optionsError: E,
          isUpdating: ue,
          requestError: fe,
          retryingUnlink: ge,
          threadId: i,
          onClaim: k,
          onLink: _e,
          onUnlink: O,
          onRefresh: ve,
        })),
        (n[23] = l),
        (n[24] = o),
        (n[25] = m),
        (n[26] = ue),
        (n[27] = d),
        (n[28] = re),
        (n[29] = fe),
        (n[30] = _e),
        (n[31] = O),
        (n[32] = ve),
        (n[33] = me),
        (n[34] = he),
        (n[35] = w),
        (n[36] = T),
        (n[37] = E),
        (n[38] = ge),
        (n[39] = k),
        (n[40] = i),
        (n[41] = A))
      : (A = n[41]),
    A
  );
}
function Te(e) {
  let t = (0, Ae.c)(155),
    {
      initialHandle: n,
      embedded: r,
      mode: a,
      onModeChange: o,
      email: c,
      options: l,
      isLoading: d,
      isLoadingOptions: te,
      isRefreshing: ne,
      loadError: p,
      optionsError: m,
      isUpdating: h,
      requestError: _,
      retryingUnlink: re,
      threadId: ie,
      onClaim: v,
      onLink: ce,
      onUnlink: x,
      onRefresh: pe,
    } = e,
    S = n === void 0 ? `` : n,
    C = r !== void 0 && r,
    w = re !== void 0 && re,
    T = oe(),
    { email: E } = he(),
    D = (0, M.useId)(),
    ge = C ? `h3` : se,
    A = C ? `p` : ee,
    [j, ye] = (0, M.useState)(S),
    [be, xe] = (0, M.useState)(!1),
    [Se, Ce] = (0, M.useState)(!1),
    [we, Te] = (0, M.useState)(null),
    [je, Me] = (0, M.useState)(null),
    P = l?.current_claim?.email_address,
    F = l?.default_domain != null && l.available_domains.includes(l.default_domain) ? l.default_domain : null,
    I = P == null && l?.auto_allocate_work_address === !0,
    L = P ?? (I ? l?.suggested_email_address : null),
    Ne;
  t[0] !== L || t[1] !== F
    ? ((Ne = L?.split(`@`)[1] ?? F), (t[0] = L), (t[1] = F), (t[2] = Ne))
    : (Ne = t[2]);
  let Pe = Ne,
    Fe;
  t[3] !== Pe || t[4] !== I
    ? ((Fe = I || (Pe != null && /^[^.]+\.chatgpt(?:-staging|-testing)?\.email$/.test(Pe))),
      (t[3] = Pe),
      (t[4] = I),
      (t[5] = Fe))
    : (Fe = t[5]);
  let R = Fe,
    z = L != null || R,
    B;
  t[6] !== I || t[7] !== E
    ? ((B = E?.split(`@`)[0].toLowerCase() ?? null),
      I && B != null && (B = B.replaceAll(`-`, ``)),
      (t[6] = I),
      (t[7] = E),
      (t[8] = B))
    : (B = t[8]);
  let V = L ?? (R && B && F ? `${B}-dot@${F}` : null),
    Ie;
  t[9] !== je || t[10] !== l?.inboxes
    ? ((Ie = l?.inboxes.find((e) => e.inbox_id === je)), (t[9] = je), (t[10] = l?.inboxes), (t[11] = Ie))
    : (Ie = t[11]);
  let H = Ie,
    U = c?.status === `linked`,
    W = d || (!U && p == null && l == null && te),
    Le = l?.narrow_email_enabled === !0,
    Re = U && Le && c.narrow_email_consent_version !== 1,
    ze = p ?? m ?? (_ === we ? null : _),
    Be = l != null && !Le,
    Ve = !d && ((a === `debug` && (U || p != null)) || p?.code === `conflict` || w),
    G = !d && p == null && Le,
    K = G && !U,
    q = K && a === `claim` && L == null && R && !B,
    He = K && a === `claim` && l != null && L == null && F == null,
    J = !d && (p != null || m != null || He),
    Y = te || (J && ne),
    Ue =
      K &&
      a === `claim` &&
      (Se ||
        ze?.code === `invalid_address` ||
        ze?.code === `disallowed_address` ||
        ze?.code === `address_unavailable`),
    X = J || w || ze != null,
    We;
  t[12] !== P || t[13] !== ze || t[14] !== Se || t[15] !== a || t[16] !== K
    ? ((We = K && a === `claim` && P == null && Se ? { code: `invalid_address` } : ze),
      (t[12] = P),
      (t[13] = ze),
      (t[14] = Se),
      (t[15] = a),
      (t[16] = K),
      (t[17] = We))
    : (We = t[17]);
  let Z = We,
    Ge = C && !W && (p != null || (!U && (Be || He || q || (m != null && l == null))));
  if (C && W && !h) {
    let e;
    return (
      t[18] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, N.jsx)(O, {})), (t[18] = e))
        : (e = t[18]),
      e
    );
  }
  if (C && a === `claim` && U && c.email_address != null && !Re && p == null && l != null) {
    let e;
    return (
      t[19] !== c.email_address || t[20] !== ie
        ? ((e = (0, N.jsx)(_e, { conversationId: ie, method: `email`, destination: c.email_address })),
          (t[19] = c.email_address),
          (t[20] = ie),
          (t[21] = e))
        : (e = t[21]),
      e
    );
  }
  let Q = Z != null || He || q,
    Ke = `${D}-description`,
    qe = Q && !Ge ? `text-danger` : void 0,
    Je = Q && !Ge ? `alert` : void 0,
    Ye;
  t[22] !== z || t[23] !== Z || t[24] !== a || t[25] !== K
    ? ((Ye =
        Z == null ? null : (0, N.jsx)(ke, { error: Z, editingHandle: K && a === `claim`, fixedHandle: z })),
      (t[22] = z),
      (t[23] = Z),
      (t[24] = a),
      (t[25] = K),
      (t[26] = Ye))
    : (Ye = t[26]);
  let Xe;
  t[27] !== Z || t[28] !== He
    ? ((Xe =
        Z == null && He
          ? (0, N.jsx)(b, {
              id: `restricted.aeon.email.settings.domain.unavailable.helpText`,
              defaultMessage: `No email domain is available for this workspace. Try again`,
              description: `Error in email setup when the server has not supplied an available default domain for this account`,
            })
          : null),
      (t[27] = Z),
      (t[28] = He),
      (t[29] = Xe))
    : (Xe = t[29]);
  let Ze;
  t[30] !== Z || t[31] !== q
    ? ((Ze =
        Z == null && q
          ? (0, N.jsx)(b, {
              id: `restricted.aeon.email.dialog.employeeAlias.unavailable`,
              defaultMessage: `Email setup is unavailable for your work email address`,
              description: `Shown when the signed-in employee email is missing, so the required workspace email address cannot be determined`,
            })
          : null),
      (t[30] = Z),
      (t[31] = q),
      (t[32] = Ze))
    : (Ze = t[32]);
  let Qe;
  t[33] !== P || t[34] !== Q || t[35] !== a || t[36] !== Be
    ? ((Qe = Q
        ? null
        : (0, N.jsxs)(N.Fragment, {
            children: [
              Be
                ? (0, N.jsx)(b, {
                    id: `restricted.aeon.email.settings.previewUnavailable.productName`,
                    defaultMessage: `Email is unavailable for your {dot}`,
                    description: `Message in email settings when the account cannot set up or refresh email access. {dot} is the untranslated term for the user's agent.`,
                    values: { dot: `dot` },
                  })
                : null,
              !Be && a === `claim` && P != null
                ? (0, N.jsx)(b, {
                    id: `restricted.aeon.email.dialog.fixedAddress.description.productName`,
                    defaultMessage: `Connect this address to keep emailing your {dot}`,
                    description: `Guidance for reconnecting an email address already owned by the user. {dot} is the untranslated term for the user's agent.`,
                    values: { dot: `dot` },
                  })
                : null,
              !Be && a === `claim` && P == null
                ? (0, N.jsx)(b, {
                    id: `restricted.aeon.email.dialog.claim.description.productName`,
                    defaultMessage: `Claim an email address to email your {dot}`,
                    description: `Instruction below the new email address field. {dot} is the untranslated term for the user's agent.`,
                    values: { dot: `dot` },
                  })
                : null,
              !Be && a === `debug`
                ? (0, N.jsx)(b, {
                    id: `restricted.aeon.email.dialog.debug.description`,
                    defaultMessage: `Link an existing address or manage email setup`,
                    description: `Short description of the dot email debug controls`,
                  })
                : null,
            ],
          })),
      (t[33] = P),
      (t[34] = Q),
      (t[35] = a),
      (t[36] = Be),
      (t[37] = Qe))
    : (Qe = t[37]);
  let $e;
  t[38] !== Je || t[39] !== Ye || t[40] !== Xe || t[41] !== Ze || t[42] !== Qe || t[43] !== Ke || t[44] !== qe
    ? (($e = (0, N.jsxs)(`span`, { id: Ke, className: qe, role: Je, children: [Ye, Xe, Ze, Qe] })),
      (t[38] = Je),
      (t[39] = Ye),
      (t[40] = Xe),
      (t[41] = Ze),
      (t[42] = Qe),
      (t[43] = Ke),
      (t[44] = qe),
      (t[45] = $e))
    : ($e = t[45]);
  let $ = $e,
    et;
  t[46] !== A ||
  t[47] !== $ ||
  t[48] !== C ||
  t[49] !== W ||
  t[50] !== a ||
  t[51] !== D ||
  t[52] !== R ||
  t[53] !== K
    ? ((et = W
        ? null
        : (0, N.jsxs)(A, {
            className: C
              ? `flex flex-col gap-3 text-sm text-secondary select-none`
              : `text-sm text-secondary select-none`,
            children: [
              $,
              K && a === `claim` && R
                ? (0, N.jsx)(`span`, {
                    id: `${D}-work-account`,
                    className: `block`,
                    children: (0, N.jsx)(b, {
                      id: `restricted.aeon.email.dialog.employeeAlias.fixed`,
                      defaultMessage: `Email addresses can’t be customized for work accounts`,
                      description: `Helper text explaining that the displayed email handle is read-only because this work account requires the signed-in employee's email alias`,
                    }),
                  })
                : null,
            ],
          })),
      (t[46] = A),
      (t[47] = $),
      (t[48] = C),
      (t[49] = W),
      (t[50] = a),
      (t[51] = D),
      (t[52] = R),
      (t[53] = K),
      (t[54] = et))
    : (et = t[54]);
  let tt = et,
    nt;
  t[55] !== C || t[56] !== z || t[57] !== a || t[58] !== D || t[59] !== K
    ? ((nt =
        !C && K && a === `claim` && !z
          ? (0, N.jsx)(`p`, {
              id: `${D}-permanent`,
              className: `text-sm text-secondary select-none`,
              children: (0, N.jsx)(b, {
                id: `restricted.aeon.email.dialog.claim.permanent`,
                defaultMessage: `This email is permanent and cannot be edited`,
                description: `Explains that a Personal dot email address cannot be changed after the user claims it`,
              }),
            })
          : null),
      (t[55] = C),
      (t[56] = z),
      (t[57] = a),
      (t[58] = D),
      (t[59] = K),
      (t[60] = nt))
    : (nt = t[60]);
  let rt = nt;
  if (C && a === `claim` && K && !Ge && Z == null && P == null && !be) {
    let e;
    t[61] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (e) => {
          (e.preventDefault(), xe(!0));
        }),
        (t[61] = e))
      : (e = t[61]);
    let n, r;
    t[62] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, N.jsx)(i, { asset: fe, className: `text-secondary` })),
        (r = (0, N.jsx)(b, {
          id: `restricted.aeon.email.setup.connect`,
          defaultMessage: `Connect Email`,
          description: `Title and action for starting the dot email connection flow`,
        })),
        (t[62] = n),
        (t[63] = r))
      : ((n = t[62]), (r = t[63]));
    let a;
    t[64] === $
      ? (a = t[65])
      : ((a = (0, N.jsx)(k, { icon: n, title: r, description: $ })), (t[64] = $), (t[65] = a));
    let o;
    t[66] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((o = (0, N.jsx)(u, {
          children: (0, N.jsx)(g, {
            color: `primary`,
            size: `detailAction`,
            type: `submit`,
            children: (0, N.jsx)(b, {
              id: `restricted.aeon.email.setup.connect`,
              defaultMessage: `Connect Email`,
              description: `Title and action for starting the dot email connection flow`,
            }),
          }),
        })),
        (t[66] = o))
      : (o = t[66]);
    let s;
    return (
      t[67] === a
        ? (s = t[68])
        : ((s = (0, N.jsxs)(`form`, { className: `flex flex-col gap-6`, onSubmit: e, children: [a, o] })),
          (t[67] = a),
          (t[68] = s)),
      s
    );
  }
  let it = C ? void 0 : `viewport`,
    at = C ? `chatgpt` : `default`,
    ot;
  t[69] !== c ||
  t[70] !== B ||
  t[71] !== L ||
  t[72] !== h ||
  t[73] !== U ||
  t[74] !== j ||
  t[75] !== q ||
  t[76] !== a ||
  t[77] !== J ||
  t[78] !== v ||
  t[79] !== ce ||
  t[80] !== pe ||
  t[81] !== x ||
  t[82] !== l ||
  t[83] !== Y ||
  t[84] !== R ||
  t[85] !== w ||
  t[86] !== F ||
  t[87] !== H ||
  t[88] !== G
    ? ((ot = (e) => {
        if ((e.preventDefault(), h || Y)) return;
        if (J) {
          pe();
          return;
        }
        if (w) {
          x();
          return;
        }
        if (!G) return;
        let t = U ? c.inbox_id : null;
        if (t != null) ce({ inbox_id: t, narrow_email_consent_version: 1 });
        else if (l != null) {
          if (a === `debug` && H != null) ce({ inbox_id: H.inbox_id, narrow_email_consent_version: 1 });
          else if (a === `claim` && L != null) {
            let e = L.lastIndexOf(`@`);
            v({ local_part: L.slice(0, e), domain: L.slice(e + 1), narrow_email_consent_version: 1 });
          } else if (a === `claim` && F != null) {
            if (q) return;
            let e = j.trim().toLowerCase();
            if (!R && (ye(e), !/^(?=.{1,30}$)[a-z0-9-]+(?:\.[a-z0-9-]+)*$/.test(e))) {
              Ce(!0);
              return;
            }
            v({ local_part: R ? `${B}-dot` : e, domain: F, narrow_email_consent_version: 1 });
          }
        }
      }),
      (t[69] = c),
      (t[70] = B),
      (t[71] = L),
      (t[72] = h),
      (t[73] = U),
      (t[74] = j),
      (t[75] = q),
      (t[76] = a),
      (t[77] = J),
      (t[78] = v),
      (t[79] = ce),
      (t[80] = pe),
      (t[81] = x),
      (t[82] = l),
      (t[83] = Y),
      (t[84] = R),
      (t[85] = w),
      (t[86] = F),
      (t[87] = H),
      (t[88] = G),
      (t[89] = ot))
    : (ot = t[89]);
  let st;
  t[90] !== ge || t[91] !== C || t[92] !== z || t[93] !== h || t[94] !== U || t[95] !== a || t[96] !== o
    ? ((st =
        !C || a === `debug`
          ? (0, N.jsxs)(`div`, {
              className: `flex min-h-6 items-center justify-between gap-2 pe-8`,
              children: [
                (0, N.jsx)(f, {
                  title: (0, N.jsxs)(ge, {
                    children: [
                      a === `debug`
                        ? (0, N.jsx)(b, {
                            id: `restricted.aeon.email.dialog.debug.title`,
                            defaultMessage: `Email debug`,
                            description: `Accessible title of the dot email debug dialog for linking an existing address, repairing setup, or removing a link`,
                          })
                        : null,
                      a === `claim` && z
                        ? (0, N.jsx)(b, {
                            id: `restricted.aeon.email.dialog.title.work`,
                            defaultMessage: `Activate email`,
                            description: `Accessible title of the email setup dialog when activating an already claimed address or a fixed work address`,
                          })
                        : null,
                      a === `claim` && !z
                        ? (0, N.jsx)(b, {
                            id: `restricted.aeon.email.dialog.title.claim`,
                            defaultMessage: `Claim an email address`,
                            description: `Accessible title of the dialog for choosing a new email address for a dot`,
                          })
                        : null,
                    ],
                  }),
                }),
                a === `debug` && !U
                  ? (0, N.jsxs)(g, {
                      color: `ghost`,
                      size: `compact`,
                      type: `button`,
                      disabled: h,
                      onClick: () => o(`claim`),
                      children: [
                        (0, N.jsx)(ue, {}),
                        (0, N.jsx)(b, {
                          id: `restricted.aeon.email.dialog.back`,
                          defaultMessage: `Back`,
                          description: `Returns from the dot email debug controls to the new email handle form`,
                        }),
                      ],
                    })
                  : (0, N.jsx)(`span`, {}),
                a === `claim`
                  ? (0, N.jsx)(g, {
                      color: `ghost`,
                      size: `compact`,
                      type: `button`,
                      disabled: h,
                      onClick: () => o(`debug`),
                      children: (0, N.jsx)(b, {
                        id: `restricted.aeon.email.dialog.debug`,
                        defaultMessage: `Debug`,
                        description: `Opens dot email debug controls for linking an existing address or repairing setup`,
                      }),
                    })
                  : null,
              ],
            })
          : null),
      (t[90] = ge),
      (t[91] = C),
      (t[92] = z),
      (t[93] = h),
      (t[94] = U),
      (t[95] = a),
      (t[96] = o),
      (t[97] = st))
    : (st = t[97]);
  let ct = C ? `flex-1` : void 0,
    lt;
  t[98] !== V ||
  t[99] !== $ ||
  t[100] !== c ||
  t[101] !== C ||
  t[102] !== z ||
  t[103] !== Ue ||
  t[104] !== Q ||
  t[105] !== T ||
  t[106] !== d ||
  t[107] !== h ||
  t[108] !== U ||
  t[109] !== p ||
  t[110] !== W ||
  t[111] !== j ||
  t[112] !== a ||
  t[113] !== D ||
  t[114] !== l ||
  t[115] !== m ||
  t[116] !== tt ||
  t[117] !== rt ||
  t[118] !== _ ||
  t[119] !== R ||
  t[120] !== F ||
  t[121] !== H?.email_address ||
  t[122] !== H?.inbox_id ||
  t[123] !== Ge ||
  t[124] !== K
    ? ((lt = Ge
        ? (0, N.jsx)(k, {
            role: Q ? `alert` : `status`,
            title:
              p != null || m != null
                ? (0, N.jsx)(b, {
                    id: `restricted.aeon.email.dialog.loadErrorTitle`,
                    defaultMessage: `Couldn’t set up Email`,
                    description: `Heading in the contact card when loading email settings fails`,
                  })
                : (0, N.jsx)(b, {
                    id: `restricted.aeon.email.dialog.unavailableTitle`,
                    defaultMessage: `Email unavailable`,
                    description: `Heading when this account has no available email setup`,
                  }),
            description: $,
          })
        : (0, N.jsxs)(ve, {
            description: tt,
            children: [
              W ? (0, N.jsx)(Oe, {}) : null,
              !d && p == null && U
                ? (0, N.jsx)(`p`, {
                    className: `text-base font-semibold break-all text-default select-text`,
                    role: `status`,
                    children: c.email_address,
                  })
                : null,
              K &&
                a === `claim` &&
                V != null &&
                (C
                  ? (0, N.jsxs)(`div`, {
                      className: `flex w-full min-w-0 flex-col items-center justify-center gap-1`,
                      children: [
                        (0, N.jsx)(me, {
                          id: D,
                          variant: `inline`,
                          autoSize: !0,
                          readOnly: !0,
                          value: V.slice(0, V.lastIndexOf(`@`)),
                          "aria-label": T.formatMessage({
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
              K && l != null && a === `claim` && !z
                ? (0, N.jsxs)(`div`, {
                    className: C
                      ? `flex w-full min-w-0 flex-col items-center justify-center gap-1`
                      : `flex w-full min-w-0 flex-wrap items-center justify-center gap-1`,
                    children: [
                      (0, N.jsx)(`div`, {
                        className: C
                          ? `flex max-w-full min-w-0 items-center gap-1`
                          : `flex w-36 max-w-full items-center`,
                        children: (0, N.jsx)(me, {
                          id: D,
                          variant: C ? `inline` : `rounded`,
                          autoSize: C,
                          autoFocus: !0,
                          autoComplete: `off`,
                          "data-1p-ignore": !0,
                          autoCapitalize: `none`,
                          spellCheck: !1,
                          required: !0,
                          minLength: 1,
                          name: `local_part`,
                          pattern: `[a-z0-9\\-]+(?:\\.[a-z0-9\\-]+)*`,
                          "aria-label": T.formatMessage({
                            id: `restricted.aeon.email.settings.handle.label.handle`,
                            defaultMessage: `Handle`,
                            description: `Accessible label for the Personal email handle, the part before the at sign in a dot email address`,
                          }),
                          "aria-invalid": Ue || void 0,
                          "aria-describedby": `${D}-description${C ? `` : ` ${D}-permanent`}${F == null ? `` : ` ${D}-domain`}`,
                          placeholder: T.formatMessage({
                            id: `restricted.aeon.email.settings.handle.placeholder.handle`,
                            defaultMessage: `Handle`,
                            description: `Placeholder in the empty Personal email handle field, the part before the at sign in a dot email address`,
                          }),
                          title: T.formatMessage({
                            id: `restricted.aeon.email.settings.name.helpText.completeAddress`,
                            defaultMessage: `Use 1–30 letters (a–z), numbers, hyphens, or dots. Don’t start or end with a dot or use two in a row`,
                            description: `Guidance for choosing a Personal dot email handle, the part before the at sign; lowercase ASCII letters, digits, hyphens, and single interior dots are supported, but leading, trailing, and consecutive dots are not. No suffix is added.`,
                          }),
                          value: j,
                          disabled: h || F == null,
                          onChange: (e) => {
                            (ye(e.target.value),
                              Ce(!1),
                              (_?.code === `invalid_address` ||
                                _?.code === `disallowed_address` ||
                                _?.code === `address_unavailable`) &&
                                Te(_));
                          },
                        }),
                      }),
                      F == null
                        ? null
                        : (0, N.jsx)(`span`, {
                            id: `${D}-domain`,
                            className: C
                              ? `min-w-0 text-heading-lg leading-snug font-medium text-balance wrap-anywhere text-tertiary select-text`
                              : `min-w-0 text-base break-all text-secondary select-text`,
                            children: `@${F}`.split(`.`).map(De),
                          }),
                    ],
                  })
                : null,
              rt,
              K && l != null && a === `debug` && l.inboxes.length === 0
                ? (0, N.jsx)(`p`, {
                    className: `text-sm text-secondary select-none`,
                    children: (0, N.jsx)(b, {
                      id: `restricted.aeon.email.settings.existing.empty`,
                      defaultMessage: `No existing unlinked addresses`,
                      description: `Empty state in dot email debug controls when the user has no owned, unlinked email addresses available`,
                    }),
                  })
                : null,
              K && l != null && a === `debug` && l.inboxes.length > 0
                ? (0, N.jsx)(y, {
                    align: `start`,
                    contentWidth: `menu`,
                    triggerButton: (0, N.jsxs)(g, {
                      className: `w-full`,
                      allowShrink: !0,
                      color: `outlineSurface`,
                      size: `dialogAction`,
                      disabled: h,
                      type: `button`,
                      "aria-label": T.formatMessage({
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
                              (0, N.jsx)(b, {
                                id: `restricted.aeon.email.settings.existing.placeholder`,
                                defaultMessage: `Choose an existing address`,
                                description: `Placeholder in dot email debug controls for the dropdown of owned addresses that can be linked`,
                              }),
                          }),
                        }),
                        (0, N.jsx)(ae, {}),
                      ],
                    }),
                    children: (0, N.jsx)(le.RadioGroup, {
                      value: H?.inbox_id ?? ``,
                      onValueChange: Me,
                      children: l.inboxes.map(Ee),
                    }),
                  })
                : null,
            ],
          })),
      (t[98] = V),
      (t[99] = $),
      (t[100] = c),
      (t[101] = C),
      (t[102] = z),
      (t[103] = Ue),
      (t[104] = Q),
      (t[105] = T),
      (t[106] = d),
      (t[107] = h),
      (t[108] = U),
      (t[109] = p),
      (t[110] = W),
      (t[111] = j),
      (t[112] = a),
      (t[113] = D),
      (t[114] = l),
      (t[115] = m),
      (t[116] = tt),
      (t[117] = rt),
      (t[118] = _),
      (t[119] = R),
      (t[120] = F),
      (t[121] = H?.email_address),
      (t[122] = H?.inbox_id),
      (t[123] = Ge),
      (t[124] = K),
      (t[125] = lt))
    : (lt = t[125]);
  let ut;
  t[126] !== ct || t[127] !== lt
    ? ((ut = (0, N.jsx)(de, { className: ct, children: lt })), (t[126] = ct), (t[127] = lt), (t[128] = ut))
    : (ut = t[128]);
  let dt;
  t[129] !== P ||
  t[130] !== C ||
  t[131] !== z ||
  t[132] !== d ||
  t[133] !== h ||
  t[134] !== U ||
  t[135] !== q ||
  t[136] !== a ||
  t[137] !== Re ||
  t[138] !== J ||
  t[139] !== x ||
  t[140] !== Y ||
  t[141] !== R ||
  t[142] !== X ||
  t[143] !== w ||
  t[144] !== H ||
  t[145] !== G ||
  t[146] !== Ve
    ? ((dt =
        C || Ve || G || J
          ? (0, N.jsx)(`div`, {
              className: C ? `mt-6` : `mt-3`,
              children: (0, N.jsxs)(u, {
                children: [
                  C || G || J
                    ? (0, N.jsx)(g, {
                        autoFocus: C && a === `claim` && z,
                        color: C ? `primary` : `accent`,
                        size: C ? `detailAction` : void 0,
                        disabled: d || (!G && !J) || h || Y || q || (!J && !U && a === `debug` && H == null),
                        loading: h || Y,
                        type: `submit`,
                        children:
                          C && a === `claim` && !w && (h || !X)
                            ? (0, N.jsx)(b, {
                                id: `restricted.aeon.email.setup.connectAction`,
                                defaultMessage: `{pending, select, true {Connecting…} other {Connect Email}}`,
                                description: `Connects the dot's email address, or shows progress while connecting`,
                                values: { pending: h },
                              })
                            : (0, N.jsxs)(N.Fragment, {
                                children: [
                                  Re && !X
                                    ? (0, N.jsx)(b, {
                                        id: `restricted.aeon.email.settings.enableSending`,
                                        defaultMessage: `Enable email sending`,
                                        description: `Saves the email permission for an address already linked to this dot`,
                                      })
                                    : null,
                                  U && !Re && !X
                                    ? (0, N.jsx)(b, {
                                        id: `restricted.aeon.email.settings.refreshSetup.label`,
                                        defaultMessage: `Refresh email setup`,
                                        description: `Repeats setup for the linked dot address to repair an interrupted setup without claiming another address`,
                                      })
                                    : null,
                                  X
                                    ? (0, N.jsx)(b, {
                                        id: `restricted.aeon.email.dialog.recovery.retry.label`,
                                        defaultMessage: `Try again`,
                                        description: `Retries email setup using the current form, or refreshes settings when required information could not be loaded`,
                                      })
                                    : null,
                                  !X && !U && a === `claim` && z
                                    ? (0, N.jsx)(b, {
                                        id: `restricted.aeon.email.settings.employeeAlias.activate.label`,
                                        defaultMessage: `Activate email`,
                                        description: `Activates an already claimed address or a fixed work address, links it to this dot, and enables email under the dot's normal permissions`,
                                      })
                                    : null,
                                  !X && !U && a === `claim` && P == null && !R
                                    ? (0, N.jsx)(b, {
                                        id: `restricted.aeon.email.settings.claim.label`,
                                        defaultMessage: `Claim email address`,
                                        description: `Claims the chosen email address, links it to this dot, and enables email under the dot's normal permissions`,
                                      })
                                    : null,
                                  !X && !U && a === `debug`
                                    ? (0, N.jsx)(b, {
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
                    ? (0, N.jsx)(g, {
                        color: `ghost`,
                        disabled: h || Y,
                        type: `button`,
                        onClick: x,
                        children: (0, N.jsx)(b, {
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
      (t[129] = P),
      (t[130] = C),
      (t[131] = z),
      (t[132] = d),
      (t[133] = h),
      (t[134] = U),
      (t[135] = q),
      (t[136] = a),
      (t[137] = Re),
      (t[138] = J),
      (t[139] = x),
      (t[140] = Y),
      (t[141] = R),
      (t[142] = X),
      (t[143] = w),
      (t[144] = H),
      (t[145] = G),
      (t[146] = Ve),
      (t[147] = dt))
    : (dt = t[147]);
  let ft;
  return (
    t[148] !== it || t[149] !== at || t[150] !== ot || t[151] !== st || t[152] !== ut || t[153] !== dt
      ? ((ft = (0, N.jsxs)(s, {
          as: `form`,
          size: it,
          variant: at,
          noValidate: !0,
          onSubmit: ot,
          children: [st, ut, dt],
        })),
        (t[148] = it),
        (t[149] = at),
        (t[150] = ot),
        (t[151] = st),
        (t[152] = ut),
        (t[153] = dt),
        (t[154] = ft))
      : (ft = t[154]),
    ft
  );
}
function Ee(e) {
  return (0, N.jsx)(le.RadioItem, { value: e.inbox_id, children: e.email_address }, e.inbox_id);
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
          children: (0, N.jsx)(b, {
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
        : ((e = (0, N.jsx)(b, {
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
            ? (0, N.jsx)(b, {
                id: `restricted.aeon.email.dialog.handleError.dot`,
                defaultMessage: `{code, select, address_unavailable {This email address is already taken. Try another} disallowed_address {This email address isn’t allowed. Try another} other {Use 1–30 letters (a–z), numbers, hyphens, or dots. Don’t start or end with a dot or use two in a row}}`,
                description: `Inline feedback after submitting a new email handle, explaining whether its name is taken, rejected by name policy, or incorrectly formatted`,
                values: { code: n.code },
              })
            : (0, N.jsx)(b, {
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
    ((Ae = te()),
      r(),
      re(),
      (M = a()),
      h(),
      E(),
      T(),
      _(),
      c(),
      o(),
      ie(),
      d(),
      p(),
      x(),
      m(),
      n(),
      w(),
      S(),
      ge(),
      A(),
      be(),
      Se(),
      (N = l()));
  }))();
}
je();
export { we as EmailSettingsDialogBody };
//# sourceMappingURL=dialog-3ef7fec347b6.js.map
