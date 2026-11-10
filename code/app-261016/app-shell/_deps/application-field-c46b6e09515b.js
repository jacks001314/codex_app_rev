import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $z as t,
  BLt as n,
  BSt as r,
  HFt as i,
  LNt as a,
  MNt as o,
  NLt as s,
  NNt as c,
  NSt as l,
  PBt as u,
  Qz as d,
  VRt as f,
  VSt as p,
  XOt as m,
  Y3 as h,
  Z3 as g,
  bB as ee,
  bSt as _,
  eB as v,
  hRt as y,
  kLt as b,
  kRt as x,
  okt as te,
  tB as S,
  tkt as C,
  vB as ne,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  C2 as re,
  Fet as ie,
  Iet as ae,
  S2 as oe,
  _9t as se,
  imr as ce,
  jcn as le,
  oon as ue,
  rmr as de,
  son as fe,
  v9t as pe,
  wcn as me,
} from "./app-initial-ad16eaadf81f.js";
function he(e) {
  let t = (0, w.c)(15),
    { children: n, embedded: r, onHome: i } = e,
    a = r !== void 0 && r,
    o = te(),
    s = pe(),
    c = ee(),
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, T.jsx)(v, { className: `size-6 text-default`, "aria-hidden": `true` })), (t[0] = l))
    : (l = t[0]);
  let u, d;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, T.jsxs)(`span`, {
        className: `flex shrink-0 items-center gap-2`,
        children: [
          l,
          (0, T.jsx)(`span`, {
            className: `hidden text-base font-medium text-default sm:inline`,
            children: (0, T.jsx)(C, {
              id: `rosalindAccess.application.openai`,
              defaultMessage: `OpenAI`,
              description: `OpenAI brand name in the Rosalind application header; do not translate`,
            }),
          }),
        ],
      })),
      (d = (0, T.jsx)(`span`, { "aria-hidden": `true`, className: `h-5 w-px shrink-0 bg-border` })),
      (t[1] = u),
      (t[2] = d))
    : ((u = t[1]), (d = t[2]));
  let f;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, T.jsxs)(T.Fragment, {
        children: [
          u,
          d,
          (0, T.jsx)(`span`, {
            className: `truncate text-sm`,
            children: (0, T.jsx)(C, {
              id: `rosalindAccess.application.productName`,
              defaultMessage: `GPT-Rosalind`,
              description: `GPT-Rosalind product name in the application header; do not translate`,
            }),
          }),
        ],
      })),
      (t[3] = f))
    : (f = t[3]);
  let p = f,
    m;
  t[4] !== a || t[5] !== o || t[6] !== i || t[7] !== s || t[8] !== c
    ? ((m =
        !a &&
        (0, T.jsxs)(`header`, {
          className: `flex h-15 shrink-0 items-center justify-between gap-4 border-b border-default px-4 draggable select-none md:h-16 md:px-10`,
          style: { paddingLeft: s.left / c || void 0, paddingRight: s.right / c || void 0 },
          children: [
            i == null
              ? (0, T.jsx)(_, {
                  className: `flex min-w-0 items-center gap-2 no-drag md:gap-4`,
                  to: `/`,
                  "aria-label": o.formatMessage({
                    id: `rosalindAccess.application.home`,
                    defaultMessage: `OpenAI home`,
                    description: `Accessible label for the OpenAI brand link in the Rosalind application header that returns to ChatGPT home`,
                  }),
                  children: p,
                })
              : (0, T.jsx)(h, {
                  className: `min-w-0 gap-2 md:gap-4`,
                  unstyled: !0,
                  onClick: i,
                  "aria-label": o.formatMessage({
                    id: `rosalindAccess.application.backToEntry`,
                    defaultMessage: `Back to GPT-Rosalind application entry`,
                    description: `Accessible label for the full OpenAI and GPT-Rosalind header button that returns to the lab application entry screen`,
                  }),
                  children: p,
                }),
            (0, T.jsx)(ge, {}),
          ],
        })),
      (t[4] = a),
      (t[5] = o),
      (t[6] = i),
      (t[7] = s),
      (t[8] = c),
      (t[9] = m))
    : (m = t[9]);
  let g;
  t[10] === n
    ? (g = t[11])
    : ((g = (0, T.jsx)(`div`, {
        className: `min-h-0 flex-1 overflow-y-auto`,
        children: (0, T.jsx)(`main`, {
          className: `mx-auto w-full max-w-155 px-5 pt-12 pb-14 md:max-w-195 md:px-10 md:pt-18 md:pb-16`,
          children: n,
        }),
      })),
      (t[10] = n),
      (t[11] = g));
  let y;
  return (
    t[12] !== m || t[13] !== g
      ? ((y = (0, T.jsxs)(`div`, {
          className: `flex h-full w-full flex-col overflow-hidden bg-surface text-default`,
          children: [m, g],
        })),
        (t[12] = m),
        (t[13] = g),
        (t[14] = y))
      : (y = t[14]),
    y
  );
}
function ge() {
  let e = (0, w.c)(12),
    n = te(),
    i = p(),
    a = r(i),
    o = t(),
    {
      accountId: s,
      accountStructureAtLogin: c,
      email: l,
      nameAtLogin: u,
      profilePictureUrlAtLogin: d,
      userId: f,
    } = ce(),
    { data: m } = le(),
    g = o && (m?.structure ?? c)?.toLowerCase() === `workspace`,
    ee = ae(g ? m?.profile_picture_url : d),
    _;
  e[0] === n
    ? (_ = e[1])
    : ((_ = n.formatMessage({
        id: `rosalindAccess.application.accountMenu`,
        defaultMessage: `Open account menu`,
        description: `Accessible label for the account menu in the Rosalind application header`,
      })),
      (e[0] = n),
      (e[1] = _));
  let v = (g ? s : f) ?? void 0,
    y = (g ? m?.name : null) ?? u ?? l,
    b = o ? ee : null,
    x;
  e[2] !== v || e[3] !== y || e[4] !== b
    ? ((x = (0, T.jsx)(ue, { alt: ``, colorKey: v, name: y, size: `sm`, src: b })),
      (e[2] = v),
      (e[3] = y),
      (e[4] = b),
      (e[5] = x))
    : (x = e[5]);
  let S;
  e[6] !== _ || e[7] !== x
    ? ((S = (0, T.jsx)(h, {
        className: `no-drag`,
        color: `ghost`,
        size: `iconTouch`,
        "aria-label": _,
        children: x,
      })),
      (e[6] = _),
      (e[7] = x),
      (e[8] = S))
    : (S = e[8]);
  let C;
  return (
    e[9] !== a || e[10] !== S
      ? ((C = (0, T.jsx)(oe, { accountSwitchReturnHref: a, hideUsage: !0, triggerButton: S })),
        (e[9] = a),
        (e[10] = S),
        (e[11] = C))
      : (C = e[11]),
    C
  );
}
var w, T;
function _e() {
  return (_e = e(() => {
    ((w = u()), m(), l(), se(), ne(), de(), ie(), me(), fe(), g(), S(), re(), d(), (T = a()));
  }))();
}
var ve, ye, be, xe, E, D, O, k, A, j;
function M() {
  return (M = e(() => {
    ((ve = {
      AdditionalLocationsStatus: {
        enum: [`no`, `yes`, `unsure`],
        title: `AdditionalLocationsStatus`,
        type: `string`,
      },
      RequestedAccessSurface: {
        enum: [`chatgpt-codex`, `internal-api`, `external-api`],
        title: `RequestedAccessSurface`,
        type: `string`,
      },
      ResearchSafeguard: {
        enum: [
          `authorized-personnel`,
          `institutional-oversight`,
          `training-and-sops`,
          `secure-research-data`,
          `human-review`,
          `incident-reporting`,
          `dual-use-review`,
          `other`,
        ],
        title: `ResearchSafeguard`,
        type: `string`,
      },
      ResearchScope: {
        enum: [
          `regulated-materials`,
          `pathogen-engineering`,
          `biological-toxins`,
          `high-containment`,
          `gene-drive`,
          `human-animal-infection`,
          `wet-lab`,
          `none`,
        ],
        title: `ResearchScope`,
        type: `string`,
      },
      RosalindRequestedResearchMode: {
        description: `Research modes requiring an organization-scoped application.`,
        enum: [`research_non_zdr`, `research_zdr`],
        title: `RosalindRequestedResearchMode`,
        type: `string`,
      },
    }),
      (ye = `urn:openai:rosalind:application-form:gpt-rosalind-access-v3`),
      (be = `https://json-schema.org/draft/2020-12/schema`),
      (xe = [
        {
          else: { not: { required: [`additionalCountries`] } },
          if: { properties: { additionalLocations: { const: `yes` } }, required: [`additionalLocations`] },
          then: { properties: { additionalCountries: { type: `array` } }, required: [`additionalCountries`] },
        },
        {
          else: { not: { required: [`otherSafeguardDetails`] } },
          if: {
            properties: { selectedSafeguards: { contains: { const: `other` } } },
            required: [`selectedSafeguards`],
          },
          then: {
            properties: { otherSafeguardDetails: { type: `string` } },
            required: [`otherSafeguardDetails`],
          },
        },
        {
          if: {
            properties: { researchScopes: { contains: { const: `none` } } },
            required: [`researchScopes`],
          },
          then: { properties: { researchScopes: { maxItems: 1 } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `AD` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `AD` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `AE` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `AE` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `AF` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `AF` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `AG` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `AG` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `AI` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `AI` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `AL` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `AL` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `AM` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `AM` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `AO` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `AO` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `AQ` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `AQ` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `AR` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `AR` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `AS` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `AS` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `AT` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `AT` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `AU` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `AU` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `AW` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `AW` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `AX` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `AX` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `AZ` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `AZ` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `BA` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `BA` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `BB` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `BB` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `BD` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `BD` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `BE` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `BE` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `BF` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `BF` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `BG` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `BG` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `BH` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `BH` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `BI` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `BI` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `BJ` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `BJ` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `BL` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `BL` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `BM` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `BM` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `BN` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `BN` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `BO` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `BO` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `BQ` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `BQ` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `BR` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `BR` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `BS` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `BS` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `BT` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `BT` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `BV` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `BV` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `BW` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `BW` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `BY` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `BY` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `BZ` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `BZ` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `CA` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `CA` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `CC` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `CC` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `CD` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `CD` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `CF` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `CF` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `CG` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `CG` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `CH` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `CH` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `CI` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `CI` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `CK` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `CK` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `CL` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `CL` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `CM` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `CM` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `CN` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `CN` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `CO` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `CO` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `CR` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `CR` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `CU` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `CU` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `CV` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `CV` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `CW` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `CW` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `CX` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `CX` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `CY` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `CY` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `CZ` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `CZ` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `DE` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `DE` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `DJ` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `DJ` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `DK` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `DK` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `DM` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `DM` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `DO` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `DO` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `DZ` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `DZ` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `EC` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `EC` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `EE` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `EE` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `EG` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `EG` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `EH` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `EH` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `ER` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `ER` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `ES` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `ES` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `ET` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `ET` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `FI` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `FI` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `FJ` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `FJ` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `FK` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `FK` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `FM` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `FM` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `FO` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `FO` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `FR` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `FR` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `GA` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `GA` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `GB` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `GB` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `GD` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `GD` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `GE` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `GE` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `GF` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `GF` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `GG` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `GG` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `GH` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `GH` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `GI` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `GI` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `GL` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `GL` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `GM` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `GM` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `GN` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `GN` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `GP` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `GP` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `GQ` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `GQ` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `GR` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `GR` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `GS` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `GS` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `GT` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `GT` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `GU` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `GU` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `GW` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `GW` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `GY` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `GY` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `HK` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `HK` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `HM` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `HM` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `HN` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `HN` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `HR` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `HR` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `HT` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `HT` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `HU` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `HU` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `ID` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `ID` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `IE` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `IE` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `IL` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `IL` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `IM` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `IM` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `IN` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `IN` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `IO` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `IO` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `IQ` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `IQ` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `IR` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `IR` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `IS` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `IS` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `IT` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `IT` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `JE` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `JE` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `JM` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `JM` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `JO` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `JO` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `JP` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `JP` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `KE` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `KE` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `KG` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `KG` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `KH` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `KH` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `KI` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `KI` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `KM` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `KM` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `KN` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `KN` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `KP` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `KP` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `KR` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `KR` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `KW` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `KW` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `KY` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `KY` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `KZ` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `KZ` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `LA` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `LA` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `LB` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `LB` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `LC` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `LC` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `LI` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `LI` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `LK` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `LK` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `LR` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `LR` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `LS` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `LS` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `LT` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `LT` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `LU` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `LU` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `LV` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `LV` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `LY` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `LY` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `MA` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `MA` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `MC` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `MC` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `MD` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `MD` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `ME` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `ME` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `MF` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `MF` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `MG` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `MG` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `MH` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `MH` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `MK` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `MK` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `ML` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `ML` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `MM` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `MM` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `MN` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `MN` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `MO` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `MO` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `MP` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `MP` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `MQ` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `MQ` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `MR` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `MR` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `MS` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `MS` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `MT` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `MT` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `MU` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `MU` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `MV` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `MV` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `MW` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `MW` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `MX` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `MX` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `MY` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `MY` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `MZ` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `MZ` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `NA` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `NA` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `NC` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `NC` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `NE` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `NE` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `NF` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `NF` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `NG` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `NG` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `NI` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `NI` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `NL` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `NL` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `NO` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `NO` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `NP` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `NP` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `NR` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `NR` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `NU` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `NU` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `NZ` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `NZ` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `OM` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `OM` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `PA` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `PA` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `PE` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `PE` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `PF` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `PF` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `PG` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `PG` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `PH` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `PH` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `PK` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `PK` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `PL` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `PL` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `PM` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `PM` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `PN` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `PN` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `PR` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `PR` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `PS` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `PS` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `PT` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `PT` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `PW` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `PW` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `PY` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `PY` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `QA` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `QA` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `RE` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `RE` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `RO` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `RO` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `RS` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `RS` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `RU` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `RU` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `RW` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `RW` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `SA` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `SA` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `SB` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `SB` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `SC` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `SC` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `SD` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `SD` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `SE` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `SE` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `SG` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `SG` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `SH` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `SH` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `SI` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `SI` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `SJ` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `SJ` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `SK` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `SK` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `SL` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `SL` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `SM` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `SM` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `SN` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `SN` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `SO` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `SO` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `SR` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `SR` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `SS` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `SS` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `ST` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `ST` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `SV` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `SV` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `SX` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `SX` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `SY` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `SY` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `SZ` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `SZ` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `TC` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `TC` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `TD` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `TD` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `TF` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `TF` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `TG` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `TG` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `TH` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `TH` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `TJ` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `TJ` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `TK` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `TK` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `TL` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `TL` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `TM` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `TM` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `TN` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `TN` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `TO` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `TO` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `TR` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `TR` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `TT` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `TT` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `TV` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `TV` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `TW` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `TW` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `TZ` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `TZ` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `UA` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `UA` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `UG` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `UG` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `UM` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `UM` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `US` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `US` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `UY` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `UY` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `UZ` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `UZ` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `VA` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `VA` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `VC` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `VC` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `VE` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `VE` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `VG` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `VG` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `VI` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `VI` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `VN` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `VN` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `VU` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `VU` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `WF` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `WF` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `WS` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `WS` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `XK` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `XK` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `YE` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `YE` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `YT` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `YT` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `ZA` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `ZA` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `ZM` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `ZM` } } } } },
        },
        {
          if: {
            properties: { primaryCountry: { const: `ZW` } },
            required: [`primaryCountry`, `additionalCountries`],
          },
          then: { properties: { additionalCountries: { not: { contains: { const: `ZW` } } } } },
        },
      ]),
      (E = `A production-form submission whose identity still requires independent verification.`),
      (D = {
        acceptAddendum: {
          default: !1,
          title: `Acceptaddendum`,
          type: `boolean`,
          "x-ui": { control: `hidden`, order: 2, step: 3 },
        },
        additionalCountries: {
          anyOf: [
            {
              items: {
                enum: `AD.AE.AF.AG.AI.AL.AM.AO.AQ.AR.AS.AT.AU.AW.AX.AZ.BA.BB.BD.BE.BF.BG.BH.BI.BJ.BL.BM.BN.BO.BQ.BR.BS.BT.BV.BW.BY.BZ.CA.CC.CD.CF.CG.CH.CI.CK.CL.CM.CN.CO.CR.CU.CV.CW.CX.CY.CZ.DE.DJ.DK.DM.DO.DZ.EC.EE.EG.EH.ER.ES.ET.FI.FJ.FK.FM.FO.FR.GA.GB.GD.GE.GF.GG.GH.GI.GL.GM.GN.GP.GQ.GR.GS.GT.GU.GW.GY.HK.HM.HN.HR.HT.HU.ID.IE.IL.IM.IN.IO.IQ.IR.IS.IT.JE.JM.JO.JP.KE.KG.KH.KI.KM.KN.KP.KR.KW.KY.KZ.LA.LB.LC.LI.LK.LR.LS.LT.LU.LV.LY.MA.MC.MD.ME.MF.MG.MH.MK.ML.MM.MN.MO.MP.MQ.MR.MS.MT.MU.MV.MW.MX.MY.MZ.NA.NC.NE.NF.NG.NI.NL.NO.NP.NR.NU.NZ.OM.PA.PE.PF.PG.PH.PK.PL.PM.PN.PR.PS.PT.PW.PY.QA.RE.RO.RS.RU.RW.SA.SB.SC.SD.SE.SG.SH.SI.SJ.SK.SL.SM.SN.SO.SR.SS.ST.SV.SX.SY.SZ.TC.TD.TF.TG.TH.TJ.TK.TL.TM.TN.TO.TR.TT.TV.TW.TZ.UA.UG.UM.US.UY.UZ.VA.VC.VE.VG.VI.VN.VU.WF.WS.XK.YE.YT.ZA.ZM.ZW`.split(
                  `.`,
                ),
                maxLength: 2,
                minLength: 2,
                pattern: `^[A-Z]{2}$`,
                type: `string`,
              },
              maxItems: 250,
              minItems: 1,
              type: `array`,
              uniqueItems: !0,
            },
            { type: `null` },
          ],
          default: null,
          title: `Additionalcountries`,
          "x-disallow-field-value": `primaryCountry`,
          "x-ui": {
            control: `country-multiselect`,
            order: 5,
            step: 2,
            visibleWhen: { field: `additionalLocations`, values: [`yes`] },
          },
        },
        additionalLocations: {
          $ref: `#/$defs/AdditionalLocationsStatus`,
          "x-ui": { control: `radio-group`, order: 4, step: 2 },
        },
        certifyAccuracy: {
          const: !0,
          title: `Certifyaccuracy`,
          type: `boolean`,
          "x-ui": { control: `checkbox`, order: 0, step: 3 },
        },
        certifyAuthority: {
          const: !0,
          title: `Certifyauthority`,
          type: `boolean`,
          "x-ui": { control: `checkbox`, order: 1, step: 3 },
        },
        confirmResearchSafeguards: {
          const: !0,
          title: `Confirmresearchsafeguards`,
          type: `boolean`,
          "x-ui": { control: `checkbox`, order: 0, step: 2 },
        },
        organizationId: {
          maxLength: 128,
          minLength: 5,
          pattern: `^org[-_][A-Za-z0-9_-]+$`,
          title: `Organizationid`,
          type: `string`,
          "x-ui": { control: `organization-select`, order: 0, step: 0 },
        },
        otherSafeguardDetails: {
          anyOf: [
            { maxLength: 4e3, minLength: 1, pattern: `^\\S(?:[\\s\\S]*\\S)?$(?![\\s\\S])`, type: `string` },
            { type: `null` },
          ],
          default: null,
          title: `Othersafeguarddetails`,
          "x-ui": {
            control: `textarea`,
            order: 2,
            step: 2,
            visibleWhen: { contains: `other`, field: `selectedSafeguards` },
          },
        },
        primaryCountry: {
          enum: `AD.AE.AF.AG.AI.AL.AM.AO.AQ.AR.AS.AT.AU.AW.AX.AZ.BA.BB.BD.BE.BF.BG.BH.BI.BJ.BL.BM.BN.BO.BQ.BR.BS.BT.BV.BW.BY.BZ.CA.CC.CD.CF.CG.CH.CI.CK.CL.CM.CN.CO.CR.CU.CV.CW.CX.CY.CZ.DE.DJ.DK.DM.DO.DZ.EC.EE.EG.EH.ER.ES.ET.FI.FJ.FK.FM.FO.FR.GA.GB.GD.GE.GF.GG.GH.GI.GL.GM.GN.GP.GQ.GR.GS.GT.GU.GW.GY.HK.HM.HN.HR.HT.HU.ID.IE.IL.IM.IN.IO.IQ.IR.IS.IT.JE.JM.JO.JP.KE.KG.KH.KI.KM.KN.KP.KR.KW.KY.KZ.LA.LB.LC.LI.LK.LR.LS.LT.LU.LV.LY.MA.MC.MD.ME.MF.MG.MH.MK.ML.MM.MN.MO.MP.MQ.MR.MS.MT.MU.MV.MW.MX.MY.MZ.NA.NC.NE.NF.NG.NI.NL.NO.NP.NR.NU.NZ.OM.PA.PE.PF.PG.PH.PK.PL.PM.PN.PR.PS.PT.PW.PY.QA.RE.RO.RS.RU.RW.SA.SB.SC.SD.SE.SG.SH.SI.SJ.SK.SL.SM.SN.SO.SR.SS.ST.SV.SX.SY.SZ.TC.TD.TF.TG.TH.TJ.TK.TL.TM.TN.TO.TR.TT.TV.TW.TZ.UA.UG.UM.US.UY.UZ.VA.VC.VE.VG.VI.VN.VU.WF.WS.XK.YE.YT.ZA.ZM.ZW`.split(
            `.`,
          ),
          maxLength: 2,
          minLength: 2,
          pattern: `^[A-Z]{2}$`,
          title: `Primarycountry`,
          type: `string`,
          "x-ui": { control: `country-select`, order: 3, step: 2 },
        },
        products: {
          items: { $ref: `#/$defs/RequestedAccessSurface` },
          maxItems: 3,
          minItems: 1,
          title: `Products`,
          type: `array`,
          uniqueItems: !0,
          "x-ui": { control: `checkbox-group`, order: 0, step: 1 },
        },
        requestedEnhancedPrivacy: {
          title: `Requestedenhancedprivacy`,
          type: `boolean`,
          "x-ui": { control: `checkbox`, order: 1, step: 0 },
        },
        researchPurpose: {
          maxLength: 1e4,
          minLength: 40,
          pattern: `^\\S(?:[\\s\\S]*\\S)?$(?![\\s\\S])`,
          title: `Researchpurpose`,
          type: `string`,
          "x-ui": { control: `textarea`, order: 1, step: 1 },
        },
        researchScopes: {
          items: { $ref: `#/$defs/ResearchScope` },
          maxItems: 5,
          minItems: 1,
          title: `Researchscopes`,
          type: `array`,
          uniqueItems: !0,
          "x-ui": { control: `checkbox-group`, order: 2, step: 1 },
        },
        selectedSafeguards: {
          items: { $ref: `#/$defs/ResearchSafeguard` },
          maxItems: 8,
          title: `Selectedsafeguards`,
          type: `array`,
          uniqueItems: !0,
          "x-ui": { control: `checkbox-group`, order: 1, step: 2 },
        },
      }),
      (O = [
        `products`,
        `researchPurpose`,
        `researchScopes`,
        `primaryCountry`,
        `additionalLocations`,
        `confirmResearchSafeguards`,
        `certifyAccuracy`,
        `certifyAuthority`,
        `organizationId`,
        `requestedEnhancedPrivacy`,
      ]),
      (k = `CreateApplicationRequest`),
      (A = `object`),
      (j = {
        $defs: ve,
        $id: ye,
        $schema: be,
        additionalProperties: !1,
        allOf: xe,
        description: E,
        properties: D,
        required: O,
        title: k,
        type: A,
        "x-form-schema-version": `gpt-rosalind-access-v3`,
        "x-ui": {
          steps: [
            { id: `organization`, order: 0, title: `Organization` },
            { id: `research`, order: 1, title: `Research` },
            { id: `locations_and_safeguards`, order: 2, title: `Locations and safeguards` },
            { id: `review_and_terms`, order: 3, title: `Review and terms` },
          ],
        },
      }));
  }))();
}
function Se(e) {
  return typeof e == `string` && je.has(e);
}
function Ce(e) {
  return typeof e == `string` && Fe.has(e);
}
function we(e, t, n) {
  return f()
    .refine((n) => {
      let r = Array.from(n).length;
      return r >= e && r <= t;
    })
    .regex(new RegExp(n));
}
function N(e, t, r) {
  return b(n((t) => typeof t == `string` && e.has(t)))
    .min(t)
    .max(r)
    .refine((e) => new Set(e).size === e.length);
}
function Te(e, t) {
  (e.researchScopes.includes(`none`) &&
    e.researchScopes.length !== 1 &&
    t.addIssue({
      code: `custom`,
      message: `'None' cannot be combined with another research scope.`,
      path: [`researchScopes`],
    }),
    e.additionalLocations === `yes`
      ? e.additionalCountries
        ? e.additionalCountries.includes(e.primaryCountry) &&
          t.addIssue({
            code: `custom`,
            message: `The primary country cannot also be an additional country.`,
            path: [`additionalCountries`],
          })
        : t.addIssue({
            code: `custom`,
            message: `Select at least one additional access country.`,
            path: [`additionalCountries`],
          })
      : e.additionalCountries !== void 0 &&
        t.addIssue({
          code: `custom`,
          message: `Additional countries must be omitted when not applicable.`,
          path: [`additionalCountries`],
        }),
    e.selectedSafeguards.includes(`other`)
      ? e.otherSafeguardDetails ||
        t.addIssue({
          code: `custom`,
          message: `Describe the other research safeguards currently in place.`,
          path: [`otherSafeguardDetails`],
        })
      : e.otherSafeguardDetails !== void 0 &&
        t.addIssue({
          code: `custom`,
          message: `Other safeguard details must be omitted when not applicable.`,
          path: [`otherSafeguardDetails`],
        }));
}
function Ee(e) {
  return ze.safeParse(e).success;
}
function De(e) {
  switch (e) {
    case `invalid_type`:
      return `INVALID_TYPE`;
    case `too_small`:
      return `TOO_SMALL`;
    case `too_big`:
      return `TOO_BIG`;
    case `invalid_format`:
      return `INVALID_FORMAT`;
    case `invalid_value`:
    case `custom`:
      return `INVALID_VALUE`;
    default:
      return `OTHER`;
  }
}
function Oe(e) {
  let t = K.safeParse(e);
  if (t.success) return [];
  let n = [],
    r = new Set();
  for (let i of t.error.issues) {
    let t = J.find((e) => e === i.path[0]);
    if (t === void 0 || !q.has(t)) continue;
    let a =
        i.code === `invalid_type` && typeof e == `object` && e && !Object.prototype.hasOwnProperty.call(e, t)
          ? `REQUIRED`
          : De(i.code),
      o = `${t}:${a}`;
    if (!r.has(o) && (r.add(o), n.push({ field: t, issue: a }), n.length >= q.size)) break;
  }
  return n;
}
function ke(e) {
  return K.safeParse(e).success;
}
var P, Ae, F, je, I, L, R, z, B, Me, V, H, Ne, U, Pe, Fe, Ie, Le, Re, W, G, ze, K, q, J;
function Be() {
  return (Be = e(() => {
    if (
      (i(),
      M(),
      (P = j),
      (Ae = P[`x-form-schema-version`]),
      (F = [
        `submitted`,
        `in_progress`,
        `action_required`,
        `approved`,
        `access_granted`,
        `denied`,
        `revoked`,
      ]),
      (je = new Set(F)),
      (I = P.properties),
      (L = I.additionalCountries.anyOf.find((e) => e.type === `array`)),
      (R = I.otherSafeguardDetails.anyOf.find((e) => e.type === `string`)),
      !L?.items ||
        !I.primaryCountry.enum ||
        !L.items.enum ||
        I.primaryCountry.enum.length !== L.items.enum.length ||
        I.primaryCountry.enum.some((e, t) => e !== L.items.enum[t]) ||
        L.minItems === void 0 ||
        L.maxItems === void 0 ||
        R?.minLength === void 0 ||
        R.maxLength === void 0)
    )
      throw Error(`The canonical Rosalind application schema is invalid.`);
    ((z = {
      organizationId: { min: I.organizationId.minLength, max: I.organizationId.maxLength },
      researchPurpose: { min: I.researchPurpose.minLength, max: I.researchPurpose.maxLength },
      primaryCountry: { min: I.primaryCountry.minLength, max: I.primaryCountry.maxLength },
      additionalCountries: { min: L.minItems, max: L.maxItems },
      otherSafeguardDetails: { min: R.minLength, max: R.maxLength },
    }),
      (B = P.$defs.RequestedAccessSurface.enum),
      (Me = P.$defs.RosalindRequestedResearchMode.enum),
      (V = P.$defs.ResearchScope.enum),
      (H = P.$defs.ResearchSafeguard.enum),
      (Ne = P.$defs.AdditionalLocationsStatus.enum),
      (U = I.primaryCountry.enum),
      (Pe = new Set(B)),
      (Fe = new Set(Me)),
      (Ie = new Set(V)),
      (Le = new Set(H)),
      (Re = new Set(Ne)),
      (W = new Set(U)),
      (G = x({
        organizationId: f()
          .min(z.organizationId.min)
          .max(z.organizationId.max)
          .regex(new RegExp(I.organizationId.pattern)),
        products: N(Pe, I.products.minItems, I.products.maxItems),
        researchPurpose: we(z.researchPurpose.min, z.researchPurpose.max, I.researchPurpose.pattern),
        researchScopes: N(Ie, I.researchScopes.minItems, I.researchScopes.maxItems),
        primaryCountry: n((e) => typeof e == `string` && W.has(e)),
        additionalLocations: n((e) => typeof e == `string` && Re.has(e)),
        additionalCountries: N(W, z.additionalCountries.min, z.additionalCountries.max).optional(),
        confirmResearchSafeguards: y(!0),
        selectedSafeguards: N(Le, 0, I.selectedSafeguards.maxItems).default([]),
        otherSafeguardDetails: we(
          z.otherSafeguardDetails.min,
          z.otherSafeguardDetails.max,
          R.pattern,
        ).optional(),
        acceptAddendum: s().optional(),
        certifyAccuracy: y(!0),
        certifyAuthority: y(!0),
      }).strict()),
      (ze = G.extend({ requestedResearchMode: n(Ce).default(`research_non_zdr`) }).superRefine(Te)),
      (K = G.extend({ requestedEnhancedPrivacy: s() }).superRefine(Te)),
      (q = new Set(Object.keys(I))),
      (J = K.keyof().options));
  }))();
}
function Ve(e) {
  let t = (0, X.c)(4),
    { children: n, htmlFor: r } = e,
    i = `${r}-label`,
    a;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i
      ? ((a = (0, Z.jsx)(`label`, {
          id: i,
          className: `text-sm leading-5 font-medium select-none`,
          htmlFor: r,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = a))
      : (a = t[3]),
    a
  );
}
function He(e) {
  let t = (0, X.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Z.jsx)(`h2`, {
          className: `text-heading-sm leading-6 font-medium select-none`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function Y(e) {
  let t = (0, X.c)(7),
    { children: n, id: r, as: i, size: a } = e,
    s = i === void 0 ? `p` : i,
    c = (a === void 0 ? `caption` : a) === `body` ? `text-sm leading-5` : `text-xs leading-4.5`,
    l;
  t[0] === c ? (l = t[1]) : ((l = o(`font-normal text-secondary select-text`, c)), (t[0] = c), (t[1] = l));
  let u;
  return (
    t[2] !== s || t[3] !== n || t[4] !== r || t[5] !== l
      ? ((u = (0, Z.jsx)(s, { id: r, className: l, children: n })),
        (t[2] = s),
        (t[3] = n),
        (t[4] = r),
        (t[5] = l),
        (t[6] = u))
      : (u = t[6]),
    u
  );
}
function Ue(e) {
  let t = (0, X.c)(14),
    { children: n, id: r, as: i, description: a, descriptionId: s, emphasis: c } = e,
    l = i === void 0 ? `h3` : i,
    u = c !== void 0 && c ? `font-semibold` : `font-medium`,
    d = l === `legend` && (a == null ? `mb-4` : `mb-1`),
    f;
  t[0] !== u || t[1] !== d
    ? ((f = o(`text-sm leading-5 select-none`, u, d)), (t[0] = u), (t[1] = d), (t[2] = f))
    : (f = t[2]);
  let p;
  t[3] !== l || t[4] !== n || t[5] !== r || t[6] !== f
    ? ((p = (0, Z.jsx)(l, { id: r, className: f, children: n })),
      (t[3] = l),
      (t[4] = n),
      (t[5] = r),
      (t[6] = f),
      (t[7] = p))
    : (p = t[7]);
  let m;
  t[8] !== a || t[9] !== s
    ? ((m = a != null && (0, Z.jsx)(Y, { id: s, size: `body`, children: a })),
      (t[8] = a),
      (t[9] = s),
      (t[10] = m))
    : (m = t[10]);
  let h;
  return (
    t[11] !== p || t[12] !== m
      ? ((h = (0, Z.jsxs)(Z.Fragment, { children: [p, m] })), (t[11] = p), (t[12] = m), (t[13] = h))
      : (h = t[13]),
    h
  );
}
var X, Z;
function Q() {
  return (Q = e(() => {
    ((X = u()), c(), (Z = a()));
  }))();
}
function We(e) {
  let t = (0, Ge.c)(11),
    { children: n, description: r, descriptionId: i, descriptionSize: a, htmlFor: o, title: s } = e,
    c = a === void 0 ? `caption` : a,
    l;
  t[0] !== o || t[1] !== s
    ? ((l = (0, $.jsx)(Ve, { htmlFor: o, children: s })), (t[0] = o), (t[1] = s), (t[2] = l))
    : (l = t[2]);
  let u;
  t[3] !== r || t[4] !== i || t[5] !== c
    ? ((u = r != null && (0, $.jsx)(Y, { id: i, size: c, children: r })),
      (t[3] = r),
      (t[4] = i),
      (t[5] = c),
      (t[6] = u))
    : (u = t[6]);
  let d;
  return (
    t[7] !== n || t[8] !== l || t[9] !== u
      ? ((d = (0, $.jsxs)(`div`, { className: `flex min-w-0 flex-col gap-1`, children: [l, u, n] })),
        (t[7] = n),
        (t[8] = l),
        (t[9] = u),
        (t[10] = d))
      : (d = t[10]),
    d
  );
}
var Ge, $;
function Ke() {
  return (Ke = e(() => {
    ((Ge = u()), Q(), ($ = a()));
  }))();
}
export {
  _e as S,
  Ce as _,
  He as a,
  K as b,
  z as c,
  B as d,
  H as f,
  Se as g,
  Be as h,
  Ue as i,
  U as l,
  Oe as m,
  Ke as n,
  Q as o,
  V as p,
  Y as r,
  F as s,
  We as t,
  Ae as u,
  Ee as v,
  he as x,
  ke as y,
};
//# sourceMappingURL=application-field-c46b6e09515b.js.map
