const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["./persona-dcd82a18594e.js", "./rolldown-runtime-2d059c5e81f4.js"]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  BLt as n,
  CH as r,
  CV as i,
  FBt as a,
  HFt as o,
  LNt as s,
  LRt as c,
  NLt as l,
  OFt as u,
  OT as d,
  Oit as f,
  PBt as p,
  QH as m,
  SLt as h,
  Smt as g,
  TY as _,
  VRt as v,
  X3 as y,
  XOt as b,
  Y3 as x,
  YOt as S,
  Z3 as C,
  aH as w,
  dH as T,
  gRt as E,
  hRt as D,
  jit as O,
  kFt as k,
  kRt as A,
  kT as j,
  okt as M,
  rV as N,
  sct as P,
  tkt as F,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as I,
  BFt as L,
  Cn as R,
  QLn as ee,
  iRr as z,
  tyr as B,
  wn as te,
  zFt as ne,
} from "./app-initial-ad16eaadf81f.js";
import { Gl as V, Kl as re, Wl as ie } from "./app-primary-3e00728c2a4c.js";
import {
  _ as ae,
  c as H,
  d as oe,
  f as se,
  g as ce,
  h as U,
  l as le,
  n as ue,
  o as de,
  p as fe,
  r as pe,
  t as me,
} from "./application-field-c46b6e09515b.js";
async function he(e, t = {}) {
  return z.safeRequest(`get`, `/rosalind/access/context`, {
    parameters: { query: { fastDiscovery: !1, organizationId: t.organizationId } },
    additionalHeaders: { [g]: e.accountId },
    expectedIdentity: e,
    expectedErrorStatuses: [400, 401, 403, 404, 422, 502, 503],
    retry: !1,
    signal: t.signal,
  });
}
async function ge(e, t, n) {
  try {
    let r = await z.safeRequest(`post`, `/rosalind/access/applications`, {
        parameters: { header: t.headers },
        additionalHeaders: { [g]: e.accountId, ...t.headers },
        expectedIdentity: e,
        expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 502, 503],
        requestBody: t.body,
        retry: !1,
        signal: n,
      }),
      i = Te.safeParse(r);
    if (!i.success || i.data.organizationId !== t.body.organizationId || !_e(i.data, t.body))
      throw Error(`Invalid Rosalind application response`);
    return { submitted: !0, ...i.data };
  } catch (e) {
    let n = xe(e, t.body.organizationId);
    if (n != null) return n;
    throw e;
  }
}
function _e(e, t) {
  let n;
  return (
    (n =
      `requestedEnhancedPrivacy` in t
        ? t.requestedEnhancedPrivacy
          ? `research_zdr`
          : `research_non_zdr`
        : (t.requestedResearchMode ?? `research_non_zdr`)),
    e.requestedResearchMode !== void 0 && e.requestedResearchMode !== n
      ? !1
      : (e.personaInquiryId === void 0) == (e.personaEnvironmentId === void 0)
  );
}
async function ve(e, t, n) {
  return be(
    z.safeRequest(`post`, `/rosalind/access/persona/start`, {
      additionalHeaders: { [g]: e.accountId },
      expectedIdentity: e,
      expectedErrorStatuses: [400, 401, 403, 404, 422, 502, 503],
      requestBody: t,
      retry: !1,
      signal: n,
    }),
  );
}
async function ye(e, t, n) {
  return be(
    z.safeRequest(`post`, `/rosalind/access/persona/status`, {
      additionalHeaders: { [g]: e.accountId },
      expectedIdentity: e,
      expectedErrorStatuses: [400, 401, 403, 404, 422, 502, 503],
      requestBody: t,
      retry: !1,
      signal: n,
    }),
  );
}
async function be(e) {
  try {
    let t = we.safeParse(await e);
    if (!t.success) throw new W(`invalid_provider_response`);
    return t.data.result;
  } catch (e) {
    if (e instanceof W) throw e;
    let t = Se(e);
    throw new W(De.safeParse(t?.body.code).data ?? `backend_unavailable`, t?.status);
  }
}
function xe(e, t) {
  let n = Se(e);
  if (n == null) return null;
  let { body: r, status: i } = n;
  if (i === 409 && r.code === `already_submitted`) {
    let e = Te.safeParse(r);
    return !e.success || e.data.organizationId !== t
      ? { submitted: !1, code: `invalid_backend_response` }
      : {
          submitted: !1,
          code: `application_conflict`,
          organizationId: t,
          state: e.data.state,
          bioagentsApplicationReference: e.data.bioagentsApplicationReference,
          canCancel: e.data.canCancel,
          canResumeVerification: e.data.canResumeVerification,
          requestedResearchMode: e.data.requestedResearchMode,
          kybStatus: e.data.kybStatus,
        };
  }
  switch (r.code) {
    case `application_history_limit`:
    case `application_unprocessable`:
    case `backend_unavailable`:
    case `idempotency_conflict`:
    case `invalid_application`:
    case `invalid_idempotency_key`:
    case `organization_unavailable`:
    case `submissions_disabled`:
      return { submitted: !1, code: r.code };
    case `fresh_persona_required`:
    case `suitability_admission_conflict`:
      return { submitted: !1, code: `application_unprocessable` };
    case `persona_verification_unavailable`:
      return { submitted: !1, code: `backend_unavailable` };
    case void 0:
    default:
      return i === 422
        ? { submitted: !1, code: `invalid_application` }
        : i === 403
          ? { submitted: !1, code: `organization_unavailable` }
          : i >= 500
            ? { submitted: !1, code: `backend_unavailable` }
            : { submitted: !1, code: `invalid_backend_response` };
  }
}
function Se(e) {
  if (!(e instanceof O)) return null;
  try {
    let t = Ee.safeParse(JSON.parse(e.message));
    return t.success ? { body: t.data, status: e.status } : null;
  } catch {
    return null;
  }
}
var Ce, we, Te, Ee, De, W;
function Oe() {
  return (Oe = e(() => {
    (U(),
      P(),
      o(),
      B(),
      f(),
      (Ce = A({
        inquiryId: v().regex(/^inq_[A-Za-z0-9]{16,64}$/),
        environmentId: v().regex(/^env_[A-Za-z0-9]{16,64}$/),
        status: h([
          `created`,
          `started`,
          `pending`,
          `completed`,
          `needs_review`,
          `failed`,
          `approved`,
          `declined`,
          `expired`,
        ]),
        fields: c(v(), v()),
        sessionToken: v()
          .regex(/^[A-Za-z0-9._~+/=-]{16,2048}$/)
          .optional(),
      })),
      (we = A({ ok: D(!0), result: Ce })),
      (Te = A({
        organizationId: v(),
        state: n(ce),
        bioagentsApplicationReference: v().regex(/^[0-9a-f]{64}$/),
        canCancel: l(),
        canResumeVerification: l().optional(),
        enhancedPrivacyFollowUpRequested: l().optional(),
        requestedResearchMode: n(ae).optional(),
        kybStatus: h([
          `not_started`,
          `in_progress`,
          `pending`,
          `action_required`,
          `passed`,
          `failed`,
          `expired`,
          `error`,
        ]).optional(),
        requiredAction: v().optional(),
        actionOwner: D(`applicant`).optional(),
        personaInquiryId: v()
          .regex(/^inq_[A-Za-z0-9]{16,64}$/)
          .optional(),
        personaEnvironmentId: v()
          .regex(/^env_[A-Za-z0-9]{16,64}$/)
          .optional(),
      })),
      (Ee = E({ code: v().optional() })),
      (De = h([
        `backend_unavailable`,
        `invalid_provider_response`,
        `invalid_request`,
        `not_configured`,
        `organization_unavailable`,
        `provider_unavailable`,
      ])),
      (W = class extends Error {
        code;
        status;
        constructor(e, t) {
          (super(`Rosalind business verification is unavailable`),
            (this.code = e),
            (this.status = t),
            (this.name = `RosalindPersonaRequestError`));
        }
      }));
  }))();
}
var G;
function K() {
  return (K = e(() => {
    (b(),
      (G = S({
        summaryOrganization: {
          id: `chatgpt.rosalind_access.review.summary.organization.label`,
          defaultMessage: `Organization`,
          description: `Summary row label for the one real OpenAI organization selected for the GPT-Rosalind application.`,
        },
        applicationDetailsVisualHeading: {
          id: `chatgpt.rosalind_access.review.summary.visual_heading`,
          defaultMessage: `Application details`,
          description: `Concise visible heading inside the compact GPT-Rosalind application-review summary card.`,
        },
        applicationProgress: {
          id: `chatgpt.rosalind_access.progress.navigation.aria_label`,
          defaultMessage: `Application progress`,
          description: `Accessible label for the navigation showing the steps of the GPT-Rosalind research access application.`,
        },
        personaStep: {
          id: `chatgpt.rosalind_access.progress.persona.title`,
          defaultMessage: `Persona`,
          description: `Short title of the Persona business-verification step shown first in the GPT-Rosalind application when verification is enabled.`,
        },
        personaHeading: {
          id: `chatgpt.rosalind_access.persona.heading`,
          defaultMessage: `Verify your organization.`,
          description: `Main accessible heading for the Persona business-verification step in the GPT-Rosalind application.`,
        },
        personaVisualDescription: {
          id: `chatgpt.rosalind_access.persona.visual_description`,
          defaultMessage: `Complete the Persona verification before continuing your application.`,
          description: `Visible instructions for completing the required Persona business-verification step before continuing the GPT-Rosalind application.`,
        },
        personaRequired: {
          id: `chatgpt.rosalind_access.persona.required`,
          defaultMessage: `Complete Persona verification before continuing.`,
          description: `Validation message shown when a researcher tries to continue the GPT-Rosalind application before Persona verification reaches a terminal result.`,
        },
        personaPending: {
          id: `chatgpt.rosalind_access.persona.required.pending`,
          description: `Inline validation message on the business-verification step of the GPT-Rosalind application after the researcher tries to continue while Persona still reports a pending inquiry.`,
          defaultMessage: `Verification is still pending.`,
        },
        personaExpired: {
          id: `chatgpt.rosalind_access.persona.required.expired`,
          description: `Inline validation message on the business-verification step of the GPT-Rosalind application after the researcher tries to continue with an expired Persona inquiry. Persona is the verification provider.`,
          defaultMessage: `Reopen Persona before continuing.`,
        },
        organizationStep: {
          id: `chatgpt.rosalind_access.progress.organization.title`,
          defaultMessage: `Organization`,
          description: `Short title of the first step of the GPT-Rosalind application, where the signed-in customer selects exactly one OpenAI organization.`,
        },
        researchStep: {
          id: `chatgpt.rosalind_access.progress.research.title`,
          defaultMessage: `Research`,
          description: `Short title of the second GPT-Rosalind application step covering research purpose and requested product surfaces.`,
        },
        locationsStep: {
          id: `chatgpt.rosalind_access.progress.locations.title`,
          defaultMessage: `Locations and safeguards`,
          description: `Short title of the third GPT-Rosalind application step covering actual access countries and proportionate research safeguards.`,
        },
        reviewStep: {
          id: `chatgpt.rosalind_access.progress.review.title`,
          defaultMessage: `Review`,
          description: `Short title of the fourth GPT-Rosalind application step, where the applicant reviews their answers and confirms their accuracy and authority to apply.`,
        },
        organizationHeading: {
          id: `chatgpt.rosalind_access.organization.heading`,
          defaultMessage: `Advance research with GPT-Rosalind.`,
          description: `Main headline on the first step of the customer-facing GPT-Rosalind biology and life sciences research access application.`,
        },
        organizationDescription: {
          id: `chatgpt.rosalind_access.organization.description`,
          defaultMessage: `Apply for GPT-Rosalind access for biology and life sciences research.`,
          description: `Introductory sentence beneath the headline on the first step of the customer-facing GPT-Rosalind access application.`,
        },
        researchModeVisualHeading: {
          id: `chatgpt.rosalind_access.organization.data_retention.heading`,
          defaultMessage: `Data retention`,
          description: `Short heading above the Standard Data Retention and Enhanced Privacy options on the organization-selection step of the GPT-Rosalind research-access application.`,
        },
        researchModeVisualDescription: {
          id: `chatgpt.rosalind_access.organization.data_retention.options.description`,
          defaultMessage: `Choose Standard Data Retention or Enhanced Privacy for your organization.`,
          description: `Instructions introducing the organization-scoped Standard Data Retention and Enhanced Privacy options on the first step of the GPT-Rosalind research-access application. Standard Data Retention is selected by default, while an Enhanced Privacy request may be evaluated separately.`,
        },
        nonZdrResearchMode: {
          id: `chatgpt.rosalind_access.organization.data_retention.option.standard_data_retention.label`,
          defaultMessage: `Standard Data Retention`,
          description: `Short label for the default Standard Data Retention radio option on the organization-selection step of the GPT-Rosalind research-access application. The alternative option is Enhanced Privacy; the same label also appears in application summaries and status details.`,
        },
        nonZdrResearchModeDescription: {
          id: `chatgpt.rosalind_access.organization.data_retention.option.standard.existing_privacy_preserved.description`,
          defaultMessage: `Standard data retention unless Enhanced Privacy is already enabled for the applicable scope.`,
          description: `Supporting text for the default Standard Data Retention option on the GPT-Rosalind application. Reassures applicants that selecting this option does not remove existing Enhanced Privacy approvals, which continue to apply only to their approved scope. It does not claim that the applicant has such an approval.`,
        },
        zdrResearchMode: {
          id: `chatgpt.rosalind_access.organization.data_retention.option.enhanced_privacy.label`,
          defaultMessage: `Enhanced Privacy`,
          description: `Short label for the optional Enhanced Privacy radio option on the organization-selection step of the GPT-Rosalind research-access application. The alternative option is Standard Data Retention; the same label also appears in application summaries and status details.`,
        },
        zdrResearchModeDescription: {
          id: `chatgpt.rosalind_access.organization.data_retention.option.enhanced_privacy.evaluation_agreement_pricing.description`,
          defaultMessage: `If your organization does not already have Enhanced Privacy, your request will be evaluated separately. GPT-Rosalind usage is subject to your organization’s applicable pricing and billing terms. Review the {chatgptRateCard} and {apiPricing} for details.`,
          description: `Informational disclosure for applicants beneath the Standard Data Retention and Enhanced Privacy options on the GPT-Rosalind research-access application. Explains that Enhanced Privacy requests receive a separate evaluation when not already enabled and that usage follows the organization's applicable pricing and billing terms, without asserting that every organization is charged. The {chatgptRateCard} placeholder is a link labeled ChatGPT rate card covering ChatGPT and Codex pricing, and {apiPricing} is a link labeled API pricing page. Both links open in a new tab and are always present.`,
        },
        privacyApprovalNotice: {
          id: `chatgpt.rosalind_access.data_retention.separate_approval.help_text`,
          defaultMessage: `Existing Enhanced Privacy protections remain in place for their approved scope. Otherwise, Standard Data Retention applies until Enhanced Privacy is separately approved and enabled. Model access approval does not itself change privacy settings.`,
          description: `Informational notice on the GPT-Rosalind application and status pages. Explains to applicants that model access and Enhanced Privacy are separate approvals, that existing protections retain their approved scope, and that standard retention applies until Enhanced Privacy is both approved and enabled. This is a policy explanation, not confirmation of any particular customer's current privacy entitlement.`,
        },
        researchHeading: {
          id: `chatgpt.rosalind_access.research.heading`,
          defaultMessage: `Tell us about your research.`,
          description: `Main headline on the second step of the customer-facing GPT-Rosalind research access application.`,
        },
        researchPurposeVisualPlaceholder: {
          id: `chatgpt.rosalind_access.research.purpose.visual_placeholder`,
          defaultMessage: `Describe your planned research`,
          description: `Concise visible placeholder inside the GPT-Rosalind research-purpose text area.`,
        },
        researchPurposeCharactersMinimum: {
          id: `chatgpt.rosalind_access.research.purpose.characters_minimum`,
          defaultMessage: `{count, number} / {minimum, number} characters minimum`,
          description: `Live character counter shown while the GPT-Rosalind research description remains below the required minimum length.`,
        },
        researchPurposeCharactersCount: {
          id: `chatgpt.rosalind_access.research.purpose.characters_count`,
          defaultMessage: `{count, number} / {maximum, number}`,
          description: `Live character counter showing the current and maximum permitted length of the GPT-Rosalind research description.`,
        },
        researchScopeVisualDescription: {
          id: `chatgpt.rosalind_access.research.scope.visual_description`,
          defaultMessage: `Select all that apply to your proposed work.`,
          description: `Visible supporting instructions beneath the concise research-scope heading.`,
        },
        researchDescription: {
          id: `chatgpt.rosalind_access.research.description`,
          defaultMessage: `Tell us what you’re working on and where you would like to use GPT-Rosalind.`,
          description: `Introductory sentence on the second GPT-Rosalind application step. Here 'where' refers to product surfaces such as ChatGPT, Codex, and the API.`,
        },
        locationsHeading: {
          id: `chatgpt.rosalind_access.locations.heading`,
          defaultMessage: `Confirm your access locations.`,
          description: `Main headline on the third step of the customer-facing GPT-Rosalind research access application.`,
        },
        locationsDescription: {
          id: `chatgpt.rosalind_access.locations.description`,
          defaultMessage: `Tell us where approved users will primarily access the program.`,
          description: `Introductory sentence on the third GPT-Rosalind application step requesting the primary country from which approved users will access the research program.`,
        },
        reviewHeading: {
          id: `chatgpt.rosalind_access.review.heading`,
          defaultMessage: `Review your application.`,
          description: `Main headline on the fourth step of the customer-facing GPT-Rosalind research access application.`,
        },
        reviewDescription: {
          id: `chatgpt.rosalind_access.review.application_attestations.description`,
          defaultMessage: `Check your research details and confirm your authority to apply.`,
          description: `Introductory sentence on the fourth GPT-Rosalind application step explaining that the applicant must review their research details and confirm their authority to submit for the selected organization; legal agreement is completed later by an authorized owner or administrator.`,
        },
        organizationVerificationDescription: {
          id: `chatgpt.rosalind_access.organization.selection.verification_description`,
          defaultMessage: `Organizations are verified using your signed-in OpenAI account.`,
          description: `Instructions explaining that the available organizations come from the authenticated applicant's verified account membership.`,
        },
        organizationNotEligible: {
          id: `chatgpt.rosalind_access.organization.selection.submission_unavailable.help_text`,
          defaultMessage: `Applications are currently unavailable for this organization.`,
          description: `Short explanation beneath an organization on the first GPT-Rosalind application step when a completed eligibility check does not allow the signed-in customer to apply. Do not imply a specific cause such as the organization's subscription plan; the check can reject submission for several reasons. Plain text with no placeholders.`,
        },
        organizationEligibilityUnavailable: {
          id: `chatgpt.rosalind_access.organization.selection.eligibility_unavailable.help_text`,
          defaultMessage: `We couldn’t check whether you can apply. Try again.`,
          description: `Brief error beneath the selected organization on the first GPT-Rosalind application step when its eligibility lookup could not complete. The signed-in customer can use the nearby Retry button to check again; this message does not mean the organization is ineligible. Plain text with no placeholders.`,
        },
        selectOrganization: {
          id: `chatgpt.rosalind_access.organization.selection.placeholder`,
          defaultMessage: `Select an OpenAI organization`,
          description: `Placeholder option prompting an authenticated GPT-Rosalind applicant to choose one associated OpenAI organization.`,
        },
        noOrganizations: {
          id: `chatgpt.rosalind_access.organization.selection.empty`,
          defaultMessage: `No account organizations available`,
          description: `Placeholder shown when the real authenticated account has no OpenAI organizations available for the GPT-Rosalind application. No organization is invented.`,
        },
        organizationsLoading: {
          id: `chatgpt.rosalind_access.organization.selection.loading.status`,
          defaultMessage: `Loading your organizations…`,
          description: `Short accessible status inside the organization selector on the first GPT-Rosalind access-application step while the signed-in customer's verified Business, Enterprise, and API organization memberships are still loading. This is a temporary loading state, not confirmation that the customer has no organizations.`,
        },
        retryOrganizationLookup: {
          id: `chatgpt.rosalind_access.organization.selection.lookup_unavailable.retry_button`,
          defaultMessage: `Retry loading organizations`,
          description: `Short button label on the first GPT-Rosalind application step that reloads the page to retry retrieving every OpenAI organization associated with the signed-in account after a temporary lookup failure.`,
        },
        researchPrivacy: {
          id: `chatgpt.rosalind_access.research.purpose.privacy.help_text`,
          defaultMessage: `Do not include patient data, personal information, personnel records, genomic sequences, laboratory protocols, or confidential materials.`,
          description: `Privacy and safety notice under the GPT-Rosalind research-purpose field warning applicants not to submit sensitive personal, scientific, laboratory, or confidential information.`,
        },
        researchScope: {
          id: `chatgpt.rosalind_access.research.scope.legend`,
          defaultMessage: `Does your research involve any of the following?`,
          description: `Fieldset legend introducing the biosafety research-scope dropdown on the GPT-Rosalind application.`,
        },
        pathogenEngineering: {
          id: `chatgpt.rosalind_access.research.scope.option.pathogen_engineering.label`,
          defaultMessage: `Pathogen engineering`,
          description: `Short checkbox label on the GPT-Rosalind research-access application for an applicant to disclose that their proposed research involves modifying pathogenic organisms.`,
        },
        pathogenEngineeringDescription: {
          id: `chatgpt.rosalind_access.research.scope.option.pathogen_engineering.description`,
          defaultMessage: `Research involving the modification of pathogenic organisms.`,
          description: `Supporting description beneath the Pathogen engineering checkbox on the GPT-Rosalind research-access application, helping an applicant recognize this research category without requesting sensitive scientific details.`,
        },
        biologicalToxins: {
          id: `chatgpt.rosalind_access.research.scope.option.biological_toxins.label`,
          defaultMessage: `Biological toxins`,
          description: `Short checkbox label on the GPT-Rosalind research-access application for an applicant to disclose that their proposed research involves biological toxins or related materials.`,
        },
        biologicalToxinsDescription: {
          id: `chatgpt.rosalind_access.research.scope.option.biological_toxins.description`,
          defaultMessage: `Research involving biological toxins or related materials.`,
          description: `Supporting description beneath the Biological toxins checkbox on the GPT-Rosalind research-access application, helping an applicant recognize this research category without requesting sensitive scientific details.`,
        },
        highContainmentResearch: {
          id: `chatgpt.rosalind_access.research.scope.option.high_containment_wet_lab.label`,
          defaultMessage: `High-containment wet-lab research`,
          description: `Short checkbox label on the GPT-Rosalind research-access application for an applicant to disclose that their proposed wet-lab research requires specialized biological containment or oversight.`,
        },
        highContainmentResearchDescription: {
          id: `chatgpt.rosalind_access.research.scope.option.high_containment_wet_lab.description`,
          defaultMessage: `Wet-lab research requiring specialized containment or oversight.`,
          description: `Supporting description beneath the High-containment wet-lab research checkbox on the GPT-Rosalind research-access application, helping an applicant recognize this research category without requesting sensitive scientific details.`,
        },
        geneDriveResearch: {
          id: `chatgpt.rosalind_access.research.scope.option.gene_drive.label`,
          defaultMessage: `Gene-drive research`,
          description: `Short checkbox label on the GPT-Rosalind research-access application for an applicant to disclose that their proposed research involves gene-drive systems.`,
        },
        humanAnimalInfectionStudies: {
          id: `chatgpt.rosalind_access.research.scope.option.human_animal_infection.label`,
          defaultMessage: `Human or animal infection studies`,
          description: `Short checkbox label on the GPT-Rosalind research-access application for an applicant to disclose that their proposed research involves infection studies with human or animal subjects.`,
        },
        noneOfAbove: {
          id: `chatgpt.rosalind_access.research.scope.option.none.label`,
          defaultMessage: `None of the above`,
          description: `Mutually exclusive checkbox label on the GPT-Rosalind research-access application indicating that none of the listed research categories applies to the applicant's proposed work.`,
        },
        safeguardsConfirmation: {
          id: `chatgpt.rosalind_access.safeguards.confirmation.label`,
          defaultMessage: `I confirm that our organization maintains reasonable safeguards appropriate to the proposed research, including limiting access to authorized personnel, following relevant research oversight or safety processes where applicable, and requiring qualified human review before AI-generated outputs inform experiments, publications, or other consequential decisions.`,
          description: `Mandatory research-safety attestation on step three of the GPT-Rosalind application. The applicant confirms proportionate personnel access control, applicable oversight, and qualified human review of consequential AI outputs.`,
        },
        safeguardAuthorized: {
          id: `chatgpt.rosalind_access.safeguards.options.authorized_personnel.label`,
          defaultMessage: `Access limited to authorized researchers or staff`,
          description: `Research-safeguard checklist option indicating that access to the proposed work is restricted to authorized researchers or staff.`,
        },
        safeguardOversight: {
          id: `chatgpt.rosalind_access.safeguards.options.institutional_oversight.label`,
          defaultMessage: `Institutional research oversight when applicable, such as IRB, IBC, IACUC, EHS, biosafety, or ethics review`,
          description: `Research-safeguard checklist option covering institutional review boards, biosafety committees, animal care committees, environmental health and safety, and ethics review when applicable.`,
        },
        safeguardTraining: {
          id: `chatgpt.rosalind_access.safeguards.options.training_and_sops.label`,
          defaultMessage: `Staff training, SOPs, or laboratory safety procedures`,
          description: `Research-safeguard checklist option covering staff training, standard operating procedures, and laboratory safety practices.`,
        },
        safeguardData: {
          id: `chatgpt.rosalind_access.safeguards.options.secure_research_data.label`,
          defaultMessage: `Secure storage or access controls for sensitive research data`,
          description: `Research-safeguard checklist option covering secure storage and access restrictions for sensitive scientific or research data.`,
        },
        safeguardHumanReview: {
          id: `chatgpt.rosalind_access.safeguards.options.human_review.label`,
          defaultMessage: `Human review of AI-generated hypotheses, protocols, analyses, or decisions`,
          description: `Research-safeguard checklist option indicating that qualified humans review hypotheses, laboratory protocols, analyses, or decisions generated using AI.`,
        },
        safeguardIncidents: {
          id: `chatgpt.rosalind_access.safeguards.options.incident_reporting.label`,
          defaultMessage: `Incident reporting or escalation process`,
          description: `Research-safeguard checklist option indicating that the organization maintains a process for reporting or escalating safety or security incidents.`,
        },
        safeguardDualUse: {
          id: `chatgpt.rosalind_access.safeguards.options.dual_use_review.label`,
          defaultMessage: `Dual-use, misuse, or biosecurity review when relevant`,
          description: `Research-safeguard checklist option indicating that the organization reviews potential dual-use, misuse, or biosecurity risks when relevant to the proposed scientific work.`,
        },
        safeguardOther: {
          id: `chatgpt.rosalind_access.safeguards.options.other.label`,
          defaultMessage: `Other`,
          description: `Checklist option allowing a GPT-Rosalind applicant to describe research or security safeguards not represented by the other listed options.`,
        },
        otherSafeguards: {
          id: `chatgpt.rosalind_access.safeguards.other.label`,
          defaultMessage: `Describe the other safeguards currently in place`,
          description: `Label for the conditional text area displayed when a GPT-Rosalind applicant selects Other in the safeguards checklist.`,
        },
        primaryCountry: {
          id: `chatgpt.rosalind_access.locations.primary_country.label`,
          defaultMessage: `Primary country of access`,
          description: `Label for the country or territory from which authorized users will primarily access GPT-Rosalind. The selector deliberately includes locations that may require policy review.`,
        },
        countryPlaceholder: {
          id: `chatgpt.rosalind_access.locations.primary_country.placeholder`,
          defaultMessage: `Select a country or region`,
          description: `Placeholder for the GPT-Rosalind primary access country selector, which does not imply that any listed location is approved.`,
        },
        additionalLocations: {
          id: `chatgpt.rosalind_access.locations.additional.legend`,
          defaultMessage: `Will any users access the program from additional locations?`,
          description: `Fieldset legend on the GPT-Rosalind access-location step asking whether any users expect to access the program from countries or territories beyond the primary location.`,
        },
        additionalNo: {
          id: `chatgpt.rosalind_access.locations.additional.option.no.label`,
          defaultMessage: `No`,
          description: `Answer to the GPT-Rosalind additional-access-locations question indicating that access is planned only from the primary country.`,
        },
        additionalYes: {
          id: `chatgpt.rosalind_access.locations.additional.option.yes.label`,
          defaultMessage: `Yes`,
          description: `Answer to the GPT-Rosalind additional-access-locations question indicating that the applicant can identify other expected access locations.`,
        },
        additionalUnsure: {
          id: `chatgpt.rosalind_access.locations.additional.option.unsure.label`,
          defaultMessage: `Not sure`,
          description: `Answer to the GPT-Rosalind access-locations question indicating that the applicant needs help confirming other intended access locations.`,
        },
        additionalCountries: {
          id: `chatgpt.rosalind_access.locations.additional.countries.label`,
          defaultMessage: `Additional countries or territories`,
          description: `Label for the country-and-territory multiselect shown on the GPT-Rosalind access-location step only after an applicant confirms that users will access the program from additional locations.`,
        },
        additionalCountriesPlaceholder: {
          id: `chatgpt.rosalind_access.locations.additional.countries.placeholder`,
          defaultMessage: `Select an additional country or region`,
          description: `Placeholder inside the additional-country multiselect on the GPT-Rosalind access-location step, prompting an applicant who confirmed additional access locations to select every relevant country or territory.`,
        },
        additionalCountriesSearch: {
          id: `chatgpt.rosalind_access.locations.additional.countries.search.label`,
          defaultMessage: `Search countries or territories`,
          description: `Accessible label and short search-input placeholder inside the primary-country picker and additional-country multiselect on the GPT-Rosalind access-location step. Instructs applicants to filter available countries or territories by their localized names or two-letter country codes.`,
        },
        additionalCountriesNoResults: {
          id: `chatgpt.rosalind_access.locations.additional.countries.search.empty`,
          defaultMessage: `No matching countries or territories.`,
          description: `Accessible status message inside the GPT-Rosalind additional-access-location multiselect when the applicant's search does not match any available country or territory. Existing selected locations remain selected even when they are temporarily filtered out.`,
        },
        editApplication: {
          id: `chatgpt.rosalind_access.review.summary.edit.button`,
          defaultMessage: `Edit`,
          description: `Compact button inside the application-summary card that returns the applicant to the organization step to edit their application.`,
        },
        safeguardsVisualLabel: {
          id: `chatgpt.rosalind_access.review.summary.safeguards.visual_label`,
          defaultMessage: `Safeguards`,
          description: `Concise visible summary-row label for the applicant's confirmed research safeguards.`,
        },
        requestedAccess: {
          id: `chatgpt.rosalind_access.review.summary.requested_access.label`,
          defaultMessage: `Requested access`,
          description: `Summary row label for the selected ChatGPT, Codex, internal API, and external API product surfaces.`,
        },
        summaryResearchMode: {
          id: `chatgpt.rosalind_access.review.summary.data_retention.label`,
          defaultMessage: `Data retention`,
          description: `Short application-summary row label preceding the organization's selected Standard Data Retention or Enhanced Privacy option on the final GPT-Rosalind application review and submission confirmation.`,
        },
        summaryScope: {
          id: `chatgpt.rosalind_access.review.summary.research_scope.label`,
          defaultMessage: `Research scope`,
          description: `Short summary-row label on the GPT-Rosalind application review screen for the applicant's selected pathogen-engineering, biological-toxin, high-containment wet-lab, gene-drive, or human or animal infection research categories, or none of those categories.`,
        },
        summaryPrimaryLocation: {
          id: `chatgpt.rosalind_access.review.summary.primary_location.label`,
          defaultMessage: `Primary access location`,
          description: `Summary row label for the actual primary country or territory of GPT-Rosalind access.`,
        },
        summaryAdditionalLocations: {
          id: `chatgpt.rosalind_access.review.summary.additional_locations.label`,
          defaultMessage: `Additional countries or regions`,
          description: `Summary row label for disclosed additional or uncertain GPT-Rosalind access countries.`,
        },
        none: {
          id: `chatgpt.rosalind_access.review.summary.none.label`,
          defaultMessage: `None`,
          description: `Short application-summary value indicating that the applicant reported no additional access locations.`,
        },
        researchPurposeSummary: {
          id: `chatgpt.rosalind_access.review.summary.research_purpose.label`,
          defaultMessage: `Research purpose`,
          description: `Summary row label displaying the applicant's own description of their scientific objective and expected research benefit.`,
        },
        termsVisualHeading: {
          id: `chatgpt.rosalind_access.review.application_attestations.visual_heading`,
          defaultMessage: `Application attestations`,
          description: `Concise visible section heading introducing the applicant's two mandatory GPT-Rosalind application attestations: application accuracy and authority to apply on behalf of the selected organization. Legal agreement is completed separately by an organization owner or administrator.`,
        },
        confirmOrganizationHeading: {
          id: `chatgpt.rosalind_access.review.organization_confirmation.dialog.title`,
          defaultMessage: `Confirm your organization`,
          description: `Title of the final confirmation dialog shown after an authenticated researcher chooses Submit application in the GPT-Rosalind access application. The applicant must verify the selected organization's exact name and identifier before the application is actually sent.`,
        },
        confirmOrganizationQuestion: {
          id: `chatgpt.rosalind_access.review.organization_confirmation.dialog.question`,
          defaultMessage: `Submit application for {organizationName} ({organizationId})?`,
          description: `Confirmation question in the final dialog shown before sending a GPT-Rosalind access application. Placeholder {organizationName} is the verified organization's full customer-facing name, and {organizationId} is its exact OpenAI organization identifier. Both values must remain visible so the applicant can verify the intended organization.`,
        },
        confirmOrganizationBack: {
          id: `chatgpt.rosalind_access.review.organization_confirmation.dialog.back.button`,
          defaultMessage: `Go back`,
          description: `Secondary button in the final GPT-Rosalind submission confirmation dialog. Closes the dialog and returns the authenticated researcher to the application review screen without sending or saving their application.`,
        },
        confirmOrganizationSubmit: {
          id: `chatgpt.rosalind_access.review.organization_confirmation.dialog.submit.button`,
          defaultMessage: `Confirm and submit`,
          description: `Primary button in the final GPT-Rosalind submission confirmation dialog. Sends the access application only after the researcher has reviewed the verified organization's exact name and organization identifier. Short button label.`,
        },
        certifyAccuracy: {
          id: `chatgpt.rosalind_access.review.terms.accuracy.label`,
          defaultMessage: `I certify that this application is accurate and complete.`,
          description: `Mandatory attestation certifying the accuracy and completeness of a GPT-Rosalind research access application.`,
        },
        certifyAuthority: {
          id: `chatgpt.rosalind_access.review.terms.authority.label`,
          defaultMessage: `I am authorized to apply on behalf of this organization.`,
          description: `Mandatory attestation confirming that the applicant is authorized to submit a GPT-Rosalind access application for the selected organization.`,
        },
        reviewStarts: {
          id: `chatgpt.rosalind_access.review.submission.after_agreement.notice`,
          defaultMessage: `Submitting starts a review. GPT-Rosalind access is enabled only after organization verification and suitability and policy checks.`,
          description: `Important notice on the final GPT-Rosalind application step explaining that submitting an application never grants immediate access; organization verification and independent suitability and policy checks must still finish first.`,
        },
        back: {
          id: `chatgpt.rosalind_access.navigation.back.button`,
          defaultMessage: `Back`,
          description: `Button returning to the preceding step of the customer-facing GPT-Rosalind access application.`,
        },
        next: {
          id: `chatgpt.rosalind_access.navigation.continue.button`,
          defaultMessage: `Continue`,
          description: `Button validating the current answers and advancing to the next step of the GPT-Rosalind access application.`,
        },
        submit: {
          id: `chatgpt.rosalind_access.review.submit.button`,
          defaultMessage: `Submit application`,
          description: `Primary button for submitting a GPT-Rosalind research access application to the genuine authenticated customer backend. This button is disabled when submission is unavailable.`,
        },
        submitting: {
          id: `chatgpt.rosalind_access.review.submitting.button`,
          defaultMessage: `Submitting application…`,
          description: `Temporary primary-button status shown only while a real authenticated GPT-Rosalind application submission request is in progress.`,
        },
        organizationRequired: {
          id: `chatgpt.rosalind_access.validation.organization.error`,
          defaultMessage: `Please select an OpenAI organization for this application.`,
          description: `Validation error requiring the applicant to select exactly one real OpenAI organization for a GPT-Rosalind application.`,
        },
        productRequired: {
          id: `chatgpt.rosalind_access.validation.products.error`,
          defaultMessage: `Please select at least one place to use GPT-Rosalind.`,
          description: `Validation error requiring at least one requested product surface such as ChatGPT, Codex, or an API application.`,
        },
        researchPurposeRequired: {
          id: `chatgpt.rosalind_access.validation.research_purpose.error`,
          defaultMessage: `Please describe your planned research, scientific objective, and intended benefit in at least 40 characters.`,
          description: `Validation error requesting a meaningful description of the intended scientific research and public-health or research benefit.`,
        },
        researchScopeRequired: {
          id: `chatgpt.rosalind_access.validation.research_scope.error`,
          defaultMessage: `Please select the research scope that applies to your work.`,
          description: `Validation error on the GPT-Rosalind research-access application shown when an applicant has not selected a pathogen-engineering, biological-toxin, high-containment wet-lab, gene-drive, or human or animal infection research category, or none of those categories.`,
        },
        countryRequired: {
          id: `chatgpt.rosalind_access.validation.primary_country.error`,
          defaultMessage: `Please select your primary country of access.`,
          description: `Validation error requiring the applicant to disclose the real primary country from which GPT-Rosalind will be accessed.`,
        },
        additionalLocationsRequired: {
          id: `chatgpt.rosalind_access.validation.additional_locations.error`,
          defaultMessage: `Please tell us whether access is expected from additional locations.`,
          description: `Validation error requiring the applicant to disclose whether approved GPT-Rosalind users expect to access the program from other actual locations.`,
        },
        additionalCountriesRequired: {
          id: `chatgpt.rosalind_access.validation.additional_countries.error`,
          defaultMessage: `Please select at least one additional access location.`,
          description: `Validation error on the GPT-Rosalind access-location step requiring an applicant who answered Yes to additional access locations to select at least one additional country or territory. Applicants who answer that they are unsure do not see this error.`,
        },
        safeguardsRequired: {
          id: `chatgpt.rosalind_access.validation.safeguards.error`,
          defaultMessage: `Please confirm that your organization maintains reasonable safeguards appropriate to the proposed research.`,
          description: `Validation error requiring the mandatory reasonable-research-safeguards attestation on the GPT-Rosalind access application.`,
        },
        otherSafeguardsRequired: {
          id: `chatgpt.rosalind_access.validation.other_safeguards.error`,
          defaultMessage: `Please describe the other safeguards currently in place.`,
          description: `Validation error shown only when a GPT-Rosalind applicant selects the Other safeguard checkbox without describing the existing safeguard.`,
        },
        accuracyRequired: {
          id: `chatgpt.rosalind_access.validation.accuracy.error`,
          defaultMessage: `Please certify that your application is accurate and complete.`,
          description: `Validation error requiring the accuracy and completeness attestation before GPT-Rosalind application submission.`,
        },
        authorityRequired: {
          id: `chatgpt.rosalind_access.validation.authority.error`,
          defaultMessage: `Please certify that you are authorized to apply on behalf of your organization.`,
          description: `Validation error requiring the applicant to confirm legal or organizational authority to apply for GPT-Rosalind access.`,
        },
        submissionUnavailable: {
          id: `chatgpt.rosalind_access.validation.submission_unavailable.error`,
          defaultMessage: `Applications are not open yet. Your answers cannot be submitted or saved.`,
          description: `Fail-closed error shown if a GPT-Rosalind application submission is attempted before the authenticated application service has been enabled.`,
        },
        submissionFailed: {
          id: `chatgpt.rosalind_access.validation.submission_failed.error`,
          defaultMessage: `Your application could not be submitted. Please try again.`,
          description: `Error shown when the genuine server-side GPT-Rosalind application submission fails without providing a more specific safe error message.`,
        },
        organizationUnavailable: {
          id: `chatgpt.rosalind_access.validation.organization_unavailable.error`,
          defaultMessage: `The selected organization is unavailable or your membership could not be verified. Please choose an organization you can access.`,
          description: `Privacy-safe error shown on the GPT-Rosalind application when the authenticated backend cannot verify that the customer currently belongs to their selected organization. Tells the customer to choose an organization they can access without disclosing private backend details.`,
        },
        applicationUnprocessable: {
          id: `chatgpt.rosalind_access.validation.application_unprocessable.error`,
          defaultMessage: `We couldn't process your application details. Please review your answers and try again.`,
          description: `Privacy-safe error shown on the GPT-Rosalind application when the backend cannot process the submitted organization and research answers. Asks the customer to review their answers without displaying internal validation messages.`,
        },
        applicationHistoryLimit: {
          id: `chatgpt.rosalind_access.validation.application_history_limit.error`,
          defaultMessage: `This organization has reached its application limit and cannot submit another application.`,
          description: `Privacy-safe error shown to a signed-in GPT-Rosalind applicant when their verified organization has exhausted the maximum number of application attempts. This is not an active duplicate application and changing form answers or retrying immediately cannot resolve it.`,
        },
        submissionUnconfirmed: {
          id: `chatgpt.rosalind_access.validation.submission_unconfirmed.error`,
          defaultMessage: `Your application could not be confirmed. Please try again.`,
          description: `Fail-closed error shown when the server response does not confirm a real 64-character GPT-Rosalind application reference, submitted state, and matching selected organization.`,
        },
        secureSubmissionFailed: {
          id: `chatgpt.rosalind_access.validation.secure_submission.error`,
          defaultMessage: `A secure submission could not be started. Refresh the page and try again.`,
          description: `Fail-closed error shown when the customer's browser cannot create the cryptographically strong idempotency key required for a GPT-Rosalind application.`,
        },
        chatgptCodex: {
          id: `chatgpt.rosalind_access.research.products.option.chatgpt_codex.label`,
          defaultMessage: `ChatGPT / Codex`,
          description: `Product selection card title for using GPT-Rosalind in ChatGPT or Codex. Other options are internal and external API applications.`,
        },
        chatgptCodexDescription: {
          id: `chatgpt.rosalind_access.research.products.option.chatgpt_codex.description`,
          defaultMessage: `Use GPT-Rosalind directly in your organization’s workspaces.`,
          description: `Description of the ChatGPT and Codex product option on the GPT-Rosalind application.`,
        },
        internalApi: {
          id: `chatgpt.rosalind_access.research.products.option.internal_api.label`,
          defaultMessage: `API · internal applications`,
          description: `Product selection card title for using the OpenAI API in applications accessible only within the applicant's organization.`,
        },
        internalApiDescription: {
          id: `chatgpt.rosalind_access.research.products.option.internal_api.description`,
          defaultMessage: `Build research workflows for members of your organization.`,
          description: `Description of the internal API application option in the GPT-Rosalind research access form.`,
        },
        pageTitle: {
          id: `chatgpt.rosalind_access.page.title.upgrade`,
          defaultMessage: `Upgrade access to GPT-Rosalind`,
          description: `Persistent main heading above the progress navigation on the standalone GPT-Rosalind research-access application, shown to authenticated researchers requesting access for their organization.`,
        },
        pageDescription: {
          id: `chatgpt.rosalind_access.page.description`,
          defaultMessage: `Tell us about your organization and proposed research.`,
          description: `Reassuring introductory sentence below the persistent GPT-Rosalind access application heading that tells authenticated researchers which information they will provide without promising a specific completion time.`,
        },
        yourOrganization: {
          id: `chatgpt.rosalind_access.organization.selection.section_label`,
          defaultMessage: `Your organization`,
          description: `Section heading introducing the single-organization selection on the first GPT-Rosalind research access application step.`,
        },
        organizationVisualDescription: {
          id: `chatgpt.rosalind_access.organization.visual_description`,
          defaultMessage: `Select the organization that will be associated with this application.`,
          description: `Concise visible description beneath the organization heading in the standalone GPT-Rosalind access application.`,
        },
        organizationAccountVerified: {
          id: `chatgpt.rosalind_access.organization.selection.account_verified`,
          defaultMessage: `Verified`,
          description: `Compact badge shown only when the organization's membership was returned by the verified authenticated-account source.`,
        },
        organizationDisplayName: {
          id: `chatgpt.rosalind_access.organization.selection.option.label`,
          defaultMessage: `{name} · {id}`,
          description: `A single real OpenAI organization in the GPT-Rosalind application selector or review summary. The placeholder {name} is the organization name and {id} is its exact organization identifier. Keep both values so applicants can distinguish organizations.`,
        },
        organizationWorkspaceDescription: {
          id: `chatgpt.rosalind_access.organization.selection.workspace_description`,
          defaultMessage: `OpenAI organization`,
          description: `Neutral supporting label for an actual organization associated with the signed-in applicant; does not invent an organization plan or verification status.`,
        },
        researchModeLockedAfterSubmission: {
          id: `chatgpt.rosalind_access.organization.data_retention.submitted.help_text`,
          defaultMessage: `Data retention cannot be changed after submission.`,
          description: `Explanation shown beneath disabled Standard Data Retention and Enhanced Privacy radio options when an organization already has a submitted GPT-Rosalind access application. Reassures the applicant that the displayed data-retention selection is the one already saved for their application.`,
        },
        applicationConflict: {
          id: `chatgpt.rosalind_access.validation.application_conflict.organization_error`,
          defaultMessage: `Application for {organizationId} already submitted`,
          description: `Privacy-safe notice shown when a GPT-Rosalind applicant selects or submits an organization that already has an active application. Placeholder {organizationId} is the exact OpenAI organization identifier selected by the authenticated customer; no internal application identifiers or backend error details are disclosed.`,
        },
        applicationStatusLabel: {
          id: `chatgpt.rosalind_access.application.status.heading`,
          defaultMessage: `Application status`,
          description: `Short heading introducing the current customer-facing status of an existing GPT-Rosalind access application for the verified organization selected by the signed-in researcher.`,
        },
        pricingChatgptRateCardLink: {
          id: `chatgpt.rosalind_access.pricing.chatgpt_rate_card.link.label`,
          defaultMessage: `ChatGPT rate card`,
          description: `Short inline link label on the GPT-Rosalind application and final provisioning-approval pricing notice for applicants and organization administrators. Opens the official ChatGPT rate card in a new tab so readers can find the ChatGPT and Codex rates applicable to their organization's agreement. Appears alongside a separate API pricing link. No placeholders.`,
        },
        pricingApiLink: {
          id: `chatgpt.rosalind_access.pricing.api.link.label`,
          defaultMessage: `API pricing page`,
          description: `Short inline link label on the GPT-Rosalind application and final provisioning-approval pricing notice for applicants and organization administrators. Opens the official OpenAI API pricing page in a new tab so readers can review published Rosalind API rates. Appears alongside a separate ChatGPT rate card link. No placeholders.`,
        },
        researchVisualHeading: {
          id: `chatgpt.rosalind_access.research.visual_heading`,
          defaultMessage: `Research details`,
          description: `Concise visible heading for the research-details step in the standalone GPT-Rosalind access application.`,
        },
        researchVisualDescription: {
          id: `chatgpt.rosalind_access.research.visual_description`,
          defaultMessage: `Tell us how your organization intends to use GPT-Rosalind.`,
          description: `Concise visible description beneath the research-details heading in the standalone GPT-Rosalind access application.`,
        },
        locationsVisualDescription: {
          id: `chatgpt.rosalind_access.locations.visual_description`,
          defaultMessage: `Describe where GPT-Rosalind will be accessed and how the research is protected.`,
          description: `Concise visible description beneath the locations and safeguards heading in the standalone GPT-Rosalind access application.`,
        },
        reviewVisualHeading: {
          id: `chatgpt.rosalind_access.review.visual_heading`,
          defaultMessage: `Review your application`,
          description: `Concise visible title for the final GPT-Rosalind application-review step.`,
        },
        reviewVisualDescription: {
          id: `chatgpt.rosalind_access.review.application_attestations.screen_description`,
          defaultMessage: `Confirm the information below and your authority to apply.`,
          description: `Concise visible description beneath the final-review heading in the standalone GPT-Rosalind access application, asking an applicant to verify their answers and authorization to apply without accepting legal terms.`,
        },
        requestedAccessVisualHeading: {
          id: `chatgpt.rosalind_access.research.requested_access.visual_heading`,
          defaultMessage: `Requested access`,
          description: `Concise visible heading for the requested product-surface choices on the GPT-Rosalind research step.`,
        },
        requestedAccessVisualDescription: {
          id: `chatgpt.rosalind_access.research.requested_access.visual_description`,
          defaultMessage: `Select every product surface your organization plans to use.`,
          description: `Visible supporting instructions for choosing all requested GPT-Rosalind product surfaces.`,
        },
        chatgptCodexVisualLabel: {
          id: `chatgpt.rosalind_access.research.products.option.chatgpt_codex.visual_label`,
          defaultMessage: `ChatGPT and Codex`,
          description: `Concise visible product-card title for requesting GPT-Rosalind access through ChatGPT and Codex.`,
        },
        internalApiVisualLabel: {
          id: `chatgpt.rosalind_access.research.products.option.internal_api.visual_label`,
          defaultMessage: `Internal API`,
          description: `Concise visible product-card title for GPT-Rosalind API applications accessible within the applicant's organization.`,
        },
        submittedStatus: {
          id: `chatgpt.rosalind_access.application.status.submitted.label`,
          defaultMessage: `Submitted`,
          description: `Short application-status badge shown when a GPT-Rosalind application has been submitted successfully but business verification and suitability review have not started. Submission does not grant product access.`,
        },
        inProgressStatus: {
          id: `chatgpt.rosalind_access.application.status.in_progress.label`,
          defaultMessage: `In progress`,
          description: `Short GPT-Rosalind application-status badge shown while business verification, suitability checks, or authorized employee review are underway. This status does not mean access has been granted.`,
        },
        actionRequiredStatus: {
          id: `chatgpt.rosalind_access.application.status.action_required.label`,
          defaultMessage: `Action required`,
          description: `Short GPT-Rosalind application-status badge shown when the applicant or an authorized reviewer must complete an assigned action before the organization's access application can proceed.`,
        },
        approvedStatus: {
          id: `chatgpt.rosalind_access.application.status.approved.label`,
          defaultMessage: `Approved`,
          description: `Short GPT-Rosalind application-status badge shown after business verification and suitability have been approved but before organization-wide product access has been granted.`,
        },
        accessGrantedStatus: {
          id: `chatgpt.rosalind_access.application.status.access_granted.label`,
          defaultMessage: `Access granted`,
          description: `Short GPT-Rosalind application-status badge shown only after the approved organization's product access has actually been provisioned.`,
        },
        accessRevokedStatus: {
          id: `chatgpt.rosalind_access.application.status.access_revoked.label`,
          defaultMessage: `Access revoked`,
          description: `Short GPT-Rosalind application-status badge shown when previously provisioned product access has subsequently been revoked for the organization.`,
        },
        deniedStatus: {
          id: `chatgpt.rosalind_access.application.status.denied.label`,
          defaultMessage: `Denied`,
          description: `Short GPT-Rosalind application-status badge shown when an authorized reviewer has issued a final decision denying an organization's request for access. This status means access was not granted.`,
        },
        trackOrganizationApplication: {
          id: `chatgpt.rosalind_access.organization.tracking.link.accessible_label`,
          defaultMessage: `Track application status for {organizationName} ({organizationId})`,
          description: `Accessible name for an organization-specific application status link. organizationName is the display name and organizationId is the unique OpenAI organization ID, included to distinguish identically named organizations. Opening the page may require workspace authentication; it does not accept terms or grant access.`,
        },
        trackApplicationStatus: {
          id: `chatgpt.rosalind_access.organization.tracking.link.label`,
          defaultMessage: `Track application status`,
          description: `Button-style navigation link for a verified organization or a submitted application. Opens the status page with that exact organization already selected. Users can view their application and authorized administrators can review terms and confirm provisioning there. Clicking this link does not itself accept terms or grant access. Keep the label concise.`,
        },
        organizationLabel: {
          id: `chatgpt.rosalind_access.organization.selection.account_organizations.label`,
          defaultMessage: `OpenAI organizations associated with your account.`,
          description: `Label above the single-select dropdown of real OpenAI organizations associated with the signed-in GPT-Rosalind applicant's account. The applicant must select exactly one organization for this application.`,
        },
        externalApi: {
          id: `chatgpt.rosalind_access.research.products.option.external_api.label`,
          defaultMessage: `API · external applications`,
          description: `Product selection card title for using the OpenAI API in life sciences applications intended for external users.`,
        },
        externalApiVisualLabel: {
          id: `chatgpt.rosalind_access.research.products.option.external_api.visual_label`,
          defaultMessage: `External API`,
          description: `Concise visible product-card title for approved GPT-Rosalind API applications intended for external users.`,
        },
        externalApiDescription: {
          id: `chatgpt.rosalind_access.research.products.option.external_api.description`,
          defaultMessage: `Offer approved research experiences to external users.`,
          description: `Description of the external API application option in the GPT-Rosalind research access form.`,
        },
      })));
  }))();
}
function ke(e, t) {
  if (e.issue === `TOO_BIG` && (e.field === `researchPurpose` || e.field === `otherSafeguardDetails`))
    return t.formatMessage(
      {
        id: `chatgpt.rosalind_access.validation.text_length`,
        description: `Inline validation error beside a GPT-Rosalind free-text application field when it exceeds the unchanged schema limit. Placeholder {maximum} is the numeric maximum character count.`,
        defaultMessage: `Use no more than {maximum} characters.`,
      },
      { maximum: H[e.field].max },
    );
  if (e.issue === `TOO_BIG` && e.field === `additionalCountries`)
    return t.formatMessage(
      {
        id: `chatgpt.rosalind_access.validation.additional_locations_limit`,
        description: `Inline validation error beside the GPT-Rosalind additional countries or regions selector when too many values are selected. Placeholder {maximum} is the numeric schema limit.`,
        defaultMessage: `Select no more than {maximum} additional countries or regions.`,
      },
      { maximum: H.additionalCountries.max },
    );
  if (e.issue === `INVALID_VALUE` && e.field === `researchScopes`)
    return t.formatMessage({
      id: `chatgpt.rosalind_access.validation.scope_exclusive`,
      description: `Inline validation error beside the GPT-Rosalind research-scope checkboxes when None of the above is combined with another category. The applicant must choose categories or None on its own.`,
      defaultMessage: `Select the applicable research categories, or select “None of the above” on its own.`,
    });
  let n = je[e.field];
  return n
    ? t.formatMessage(n)
    : t.formatMessage({
        id: `chatgpt.rosalind_access.validation.valid_selection`,
        description: `Fallback inline validation message beside an invalid option in the GPT-Rosalind access application. Asks the researcher to choose a supported option without exposing internal validation codes.`,
        defaultMessage: `Choose a valid option.`,
      });
}
function Ae(e) {
  requestAnimationFrame(() => {
    let t = document.querySelector(`form[data-step="${e}"] [data-field-error]`);
    if (!t) return;
    let n = t.closest(`[data-validation-field]`);
    ((n?.querySelector(`textarea,select,input:not(:disabled),summary,button:not(:disabled)`) ?? t).focus({
      preventScroll: !0,
    }),
      (n ?? t).scrollIntoView({ block: `start`, behavior: `instant` }));
  });
}
var q, J, je;
function Me() {
  return (Me = e(() => {
    (U(),
      K(),
      (q = (e) => `application-error-${e}`),
      (J = (e, t) => ({ "aria-invalid": t ? !0 : void 0, "aria-describedby": t ? q(e) : void 0 })),
      (je = {
        organizationId: G.organizationRequired,
        researchPurpose: G.researchPurposeRequired,
        researchScopes: G.researchScopeRequired,
        products: G.productRequired,
        primaryCountry: G.countryRequired,
        additionalLocations: G.additionalLocationsRequired,
        additionalCountries: G.additionalCountriesRequired,
        otherSafeguardDetails: G.otherSafeguardsRequired,
        confirmResearchSafeguards: G.safeguardsRequired,
        certifyAccuracy: G.accuracyRequired,
        certifyAuthority: G.authorityRequired,
      }));
  }))();
}
var Ne, Y, Pe, Fe, Ie, Le;
function Re() {
  return (Re = e(() => {
    (U(),
      _(),
      K(),
      (Ne = [`US`, `AU`, `CA`, `FR`, `DE`, `IN`, `JP`, `MX`, `NL`, `SG`, `CH`, `GB`]),
      (Y = (e, t) => e.normalize(`NFKD`).replaceAll(/\p{M}/gu, ``).toLocaleLowerCase(t).trim()),
      (Pe = [
        {
          title: G.organizationStep,
          heading: G.organizationHeading,
          description: G.organizationDescription,
          visualHeading: G.yourOrganization,
          visualDescription: G.organizationVisualDescription,
        },
        {
          title: G.researchStep,
          heading: G.researchHeading,
          description: G.researchDescription,
          visualHeading: G.researchVisualHeading,
          visualDescription: G.researchVisualDescription,
        },
        {
          title: G.locationsStep,
          heading: G.locationsHeading,
          description: G.locationsDescription,
          visualHeading: G.locationsStep,
          visualDescription: G.locationsVisualDescription,
        },
        {
          title: G.reviewStep,
          heading: G.reviewHeading,
          description: G.reviewDescription,
          visualHeading: G.reviewVisualHeading,
          visualDescription: G.reviewVisualDescription,
        },
      ]),
      (Fe = [
        {
          id: `chatgpt-codex`,
          Icon: T,
          visualTitle: G.chatgptCodexVisualLabel,
          title: G.chatgptCodex,
          description: G.chatgptCodexDescription,
        },
        {
          id: `internal-api`,
          Icon: m,
          visualTitle: G.internalApiVisualLabel,
          title: G.internalApi,
          description: G.internalApiDescription,
        },
        {
          id: `external-api`,
          Icon: i,
          visualTitle: G.externalApiVisualLabel,
          title: G.externalApi,
          description: G.externalApiDescription,
        },
      ].filter((e) => oe.includes(e.id))),
      (Ie = [
        {
          id: `pathogen-engineering`,
          title: G.pathogenEngineering,
          description: G.pathogenEngineeringDescription,
        },
        { id: `biological-toxins`, title: G.biologicalToxins, description: G.biologicalToxinsDescription },
        {
          id: `high-containment`,
          title: G.highContainmentResearch,
          description: G.highContainmentResearchDescription,
        },
        { id: `gene-drive`, title: G.geneDriveResearch, description: void 0 },
        { id: `human-animal-infection`, title: G.humanAnimalInfectionStudies, description: void 0 },
        { id: `none`, title: G.noneOfAbove, description: void 0 },
      ].filter((e) => fe.includes(e.id))),
      (Le = [
        { id: `authorized-personnel`, title: G.safeguardAuthorized },
        { id: `institutional-oversight`, title: G.safeguardOversight },
        { id: `training-and-sops`, title: G.safeguardTraining },
        { id: `secure-research-data`, title: G.safeguardData },
        { id: `human-review`, title: G.safeguardHumanReview },
        { id: `incident-reporting`, title: G.safeguardIncidents },
        { id: `dual-use-review`, title: G.safeguardDualUse },
        { id: `other`, title: G.safeguardOther },
      ].filter((e) => se.includes(e.id))));
  }))();
}
function ze(e) {
  let t = (0, X.c)(23),
    { id: n, checked: r, disabled: i, onChange: a, title: o, description: s, invalid: c, describedBy: l } = e,
    u = i !== void 0 && i,
    f = c || void 0,
    p;
  t[0] !== l || t[1] !== s || t[2] !== n
    ? ((p = s ? `${n}-description ${l ?? ``}`.trim() : l), (t[0] = l), (t[1] = s), (t[2] = n), (t[3] = p))
    : (p = t[3]);
  let m;
  t[4] !== r || t[5] !== u || t[6] !== n || t[7] !== a || t[8] !== f || t[9] !== p
    ? ((m = (0, Q.jsx)(d, {
        id: n,
        name: n,
        className: `mt-0.5`,
        checked: r,
        disabled: u,
        onCheckedChange: a,
        "aria-invalid": f,
        "aria-describedby": p,
        size: `sm`,
        variant: `choice`,
      })),
      (t[4] = r),
      (t[5] = u),
      (t[6] = n),
      (t[7] = a),
      (t[8] = f),
      (t[9] = p),
      (t[10] = m))
    : (m = t[10]);
  let h;
  t[11] !== n || t[12] !== o
    ? ((h = (0, Q.jsx)(`label`, {
        className: `cursor-interaction text-sm leading-4.5 select-none`,
        htmlFor: n,
        children: o,
      })),
      (t[11] = n),
      (t[12] = o),
      (t[13] = h))
    : (h = t[13]);
  let g;
  t[14] !== s || t[15] !== n
    ? ((g = s && (0, Q.jsx)(pe, { id: `${n}-description`, size: `body`, children: s })),
      (t[14] = s),
      (t[15] = n),
      (t[16] = g))
    : (g = t[16]);
  let _;
  t[17] !== h || t[18] !== g
    ? ((_ = (0, Q.jsxs)(`div`, { className: `flex min-w-0 flex-col gap-0.5`, children: [h, g] })),
      (t[17] = h),
      (t[18] = g),
      (t[19] = _))
    : (_ = t[19]);
  let v;
  return (
    t[20] !== m || t[21] !== _
      ? ((v = (0, Q.jsxs)(`div`, { className: `relative flex items-start gap-2.5`, children: [m, _] })),
        (t[20] = m),
        (t[21] = _),
        (t[22] = v))
      : (v = t[22]),
    v
  );
}
function Be(e) {
  let t = (0, X.c)(3),
    { field: n, error: r } = e,
    i;
  return (
    t[0] !== r || t[1] !== n
      ? ((i = r
          ? (0, Q.jsx)(`p`, {
              className: `text-sm text-danger`,
              "data-field-error": !0,
              id: q(n),
              role: `alert`,
              tabIndex: -1,
              children: r,
            })
          : null),
        (t[0] = r),
        (t[1] = n),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
function Ve(e) {
  let t = (0, X.c)(72),
    {
      id: n,
      value: i,
      onChange: a,
      multiple: o,
      selectedCountries: s,
      excludedCountry: c,
      error: l,
      disabled: u,
    } = e,
    d = n === void 0 ? `primary-country` : n,
    f = o !== void 0 && o,
    p = M(),
    [m, h] = (0, Z.useState)(!1),
    [g, _] = (0, Z.useState)(``),
    v,
    y,
    b,
    S,
    C,
    w,
    T,
    E,
    D,
    O,
    k;
  if (
    t[0] !== u ||
    t[1] !== l ||
    t[2] !== c ||
    t[3] !== d ||
    t[4] !== p ||
    t[5] !== f ||
    t[6] !== a ||
    t[7] !== m ||
    t[8] !== g ||
    t[9] !== s ||
    t[10] !== i
  ) {
    let e = Y(g, p.locale),
      n = new Intl.Collator(p.locale, { sensitivity: `base` }),
      o;
    t[22] === c ? (o = t[23]) : ((o = (e) => e !== c), (t[22] = c), (t[23] = o));
    let A;
    (t[24] === p
      ? (A = t[25])
      : ((A = (e) => ({ code: e, label: p.formatDisplayName(e, { type: `region` }) ?? e })),
        (t[24] = p),
        (t[25] = A)),
      (S = le
        .filter(o)
        .map(A)
        .sort((e, t) => {
          let r = Ne.indexOf(e.code),
            i = Ne.indexOf(t.code);
          return r >= 0 || i >= 0 ? (r < 0 ? 1 : i < 0 ? -1 : r - i) : n.compare(e.label, t.label);
        })
        .filter((t) => {
          let { code: n, label: r } = t;
          return !e || Y(n, p.locale).includes(e) || Y(r, p.locale).includes(e);
        })));
    let j;
    t[26] !== p || t[27] !== f || t[28] !== i
      ? ((j = i
          ? (p.formatDisplayName(i, { type: `region` }) ?? i)
          : p.formatMessage(f ? G.additionalCountriesPlaceholder : G.countryPlaceholder)),
        (t[26] = p),
        (t[27] = f),
        (t[28] = i),
        (t[29] = j))
      : (j = t[29]);
    let M = j;
    ((b = ie),
      (E = u),
      (D = m),
      t[30] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((O = (e) => {
            (h(e), e || _(``));
          }),
          (t[30] = O))
        : (O = t[30]));
    let N = l ? !0 : void 0,
      P;
    t[31] !== l || t[32] !== f
      ? ((P = l ? q(f ? `additionalCountries` : `primaryCountry`) : void 0),
        (t[31] = l),
        (t[32] = f),
        (t[33] = P))
      : (P = t[33]);
    let F;
    (t[34] !== p || t[35] !== M || t[36] !== f || t[37] !== s
      ? ((F =
          f && s?.length ? p.formatList(s.map((e) => p.formatDisplayName(e, { type: `region` }) ?? e)) : M),
        (t[34] = p),
        (t[35] = M),
        (t[36] = f),
        (t[37] = s),
        (t[38] = F))
      : (F = t[38]),
      t[39] !== u || t[40] !== d || t[41] !== N || t[42] !== P || t[43] !== F
        ? ((k = (0, Q.jsx)(x, {
            id: d,
            color: `secondary`,
            size: `dialogAction`,
            type: `button`,
            disabled: u,
            "aria-invalid": N,
            "aria-describedby": P,
            children: F,
          })),
          (t[39] = u),
          (t[40] = d),
          (t[41] = N),
          (t[42] = P),
          (t[43] = F),
          (t[44] = k))
        : (k = t[44]),
      (y = V.Root),
      (w = M));
    let I;
    (t[45] === p
      ? (I = t[46])
      : ((I = p.formatMessage(G.additionalCountriesSearch)), (t[45] = p), (t[46] = I)),
      t[47] !== g || t[48] !== I
        ? ((T = (0, Q.jsx)(V.Input, { value: g, onValueChange: _, placeholder: I })),
          (t[47] = g),
          (t[48] = I),
          (t[49] = T))
        : (T = t[49]),
      (v = V.List));
    let L;
    (t[50] !== f || t[51] !== a || t[52] !== s
      ? ((L = (e) => {
          let { code: t, label: n } = e;
          return (0, Q.jsx)(
            V.Item,
            {
              value: t,
              disabled: f && (s?.length ?? 0) >= H.additionalCountries.max && !s?.includes(t),
              rightIcon: f && s?.includes(t) ? (0, Q.jsx)(r, {}) : void 0,
              onSelect: () => {
                (a(t), f || (h(!1), _(``)));
              },
              children: n,
            },
            t,
          );
        }),
        (t[50] = f),
        (t[51] = a),
        (t[52] = s),
        (t[53] = L))
      : (L = t[53]),
      (C = S.map(L)),
      (t[0] = u),
      (t[1] = l),
      (t[2] = c),
      (t[3] = d),
      (t[4] = p),
      (t[5] = f),
      (t[6] = a),
      (t[7] = m),
      (t[8] = g),
      (t[9] = s),
      (t[10] = i),
      (t[11] = v),
      (t[12] = y),
      (t[13] = b),
      (t[14] = S),
      (t[15] = C),
      (t[16] = w),
      (t[17] = T),
      (t[18] = E),
      (t[19] = D),
      (t[20] = O),
      (t[21] = k));
  } else
    ((v = t[11]),
      (y = t[12]),
      (b = t[13]),
      (S = t[14]),
      (C = t[15]),
      (w = t[16]),
      (T = t[17]),
      (E = t[18]),
      (D = t[19]),
      (O = t[20]),
      (k = t[21]));
  let A;
  t[54] === S.length
    ? (A = t[55])
    : ((A =
        !S.length &&
        (0, Q.jsx)(`p`, {
          className: `text-sm leading-5 text-secondary select-text`,
          children: (0, Q.jsx)(F, { ...G.additionalCountriesNoResults }),
        })),
      (t[54] = S.length),
      (t[55] = A));
  let j;
  t[56] !== v || t[57] !== A || t[58] !== C
    ? ((j = (0, Q.jsxs)(v, { children: [C, A] })), (t[56] = v), (t[57] = A), (t[58] = C), (t[59] = j))
    : (j = t[59]);
  let N;
  t[60] !== y || t[61] !== j || t[62] !== w || t[63] !== T
    ? ((N = (0, Q.jsxs)(y, { label: w, children: [T, j] })),
      (t[60] = y),
      (t[61] = j),
      (t[62] = w),
      (t[63] = T),
      (t[64] = N))
    : (N = t[64]);
  let P;
  return (
    t[65] !== b || t[66] !== N || t[67] !== E || t[68] !== D || t[69] !== O || t[70] !== k
      ? ((P = (0, Q.jsx)(b, { disabled: E, open: D, onOpenChange: O, triggerButton: k, children: N })),
        (t[65] = b),
        (t[66] = N),
        (t[67] = E),
        (t[68] = D),
        (t[69] = O),
        (t[70] = k),
        (t[71] = P))
      : (P = t[71]),
    P
  );
}
function He(e) {
  let t = (0, X.c)(5),
    { label: n, children: r } = e,
    i;
  t[0] === n ? (i = t[1]) : ((i = (0, Q.jsx)(F, { ...n })), (t[0] = n), (t[1] = i));
  let a;
  return (
    t[2] !== r || t[3] !== i
      ? ((a = (0, Q.jsx)(R, { align: `start`, spacing: `relaxed`, label: i, children: r })),
        (t[2] = r),
        (t[3] = i),
        (t[4] = a))
      : (a = t[4]),
    a
  );
}
function Ue(e) {
  let t = (0, X.c)(55),
    {
      capabilities: n,
      researchPurpose: r,
      researchScopes: i,
      setResearchPurpose: a,
      toggleResearchScope: o,
      fieldErrors: s,
      disabled: c,
    } = e,
    l;
  t[0] === s ? (l = t[1]) : ((l = s === void 0 ? {} : s), (t[0] = s), (t[1] = l));
  let u = l,
    d = M(),
    f = (0, Z.useId)(),
    p = `${f}-research-purpose`,
    m,
    h;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Q.jsx)(F, {
        id: `chatgpt.rosalind_access.research.purpose.use_plan.label`,
        defaultMessage: `How do you plan to use Rosalind?`,
        description: `Visible and accessible label of the research-purpose text area on the GPT-Rosalind access application. Asks applicants for a high-level account of their intended scientific use, without requiring confidential details. Short question with no placeholders; preserve the Rosalind product name.`,
      })),
      (h = (0, Q.jsx)(F, {
        id: `chatgpt.rosalind_access.research.purpose.use_plan.help_text`,
        defaultMessage: `Describe your research goals, how you hope to use Rosalind, and the types of outputs or insights you need. Include any challenges you’d like help with. A high-level overview is sufficient; no confidential details are needed.`,
        description: `Supporting instructions above the research-purpose text area on the GPT-Rosalind access application. Applicants should explain their scientific goals, intended AI use, desired results, and challenges at a high level; they should not disclose confidential details. Reassuring plain-text paragraph with no placeholders; preserve the Rosalind product name.`,
      })),
      (t[2] = m),
      (t[3] = h))
    : ((m = t[2]), (h = t[3]));
  let g = `${f}-research-purpose-help`,
    _ = `${f}-research-purpose`,
    v;
  t[4] === a ? (v = t[5]) : ((v = (e) => a(e.target.value)), (t[4] = a), (t[5] = v));
  let y;
  t[6] === d
    ? (y = t[7])
    : ((y = d.formatMessage(G.researchPurposeVisualPlaceholder)), (t[6] = d), (t[7] = y));
  let b = u.researchPurpose ? !0 : void 0,
    x;
  t[8] === u.researchPurpose
    ? (x = t[9])
    : ((x = u.researchPurpose ? ` ${q(`researchPurpose`)}` : ``), (t[8] = u.researchPurpose), (t[9] = x));
  let S = `${f}-research-purpose-help ${f}-research-purpose-privacy${n?.discoveryApplications ? ` ${f}-research-purpose-review` : ``}${x}`,
    C;
  t[10] === r
    ? (C = t[11])
    : ((C = (0, Q.jsx)(`span`, {
        className: `text-end text-xs leading-4.5 text-secondary`,
        children:
          Array.from(r.trim()).length < H.researchPurpose.min
            ? (0, Q.jsx)(F, {
                ...G.researchPurposeCharactersMinimum,
                values: { count: Array.from(r.trim()).length, minimum: H.researchPurpose.min },
              })
            : (0, Q.jsx)(F, {
                ...G.researchPurposeCharactersCount,
                values: { count: Array.from(r).length, maximum: H.researchPurpose.max },
              }),
      })),
      (t[10] = r),
      (t[11] = C));
  let w;
  t[12] !== c ||
  t[13] !== r ||
  t[14] !== b ||
  t[15] !== S ||
  t[16] !== C ||
  t[17] !== _ ||
  t[18] !== v ||
  t[19] !== y
    ? ((w = (0, Q.jsx)(`div`, {
        className: `pt-3`,
        children: (0, Q.jsx)(ee, {
          variant: `feedback`,
          id: _,
          name: `research-purpose`,
          disabled: c,
          value: r,
          onChange: v,
          maxLength: H.researchPurpose.max,
          placeholder: y,
          rows: 4,
          "aria-invalid": b,
          "aria-describedby": S,
          footer: C,
        }),
      })),
      (t[12] = c),
      (t[13] = r),
      (t[14] = b),
      (t[15] = S),
      (t[16] = C),
      (t[17] = _),
      (t[18] = v),
      (t[19] = y),
      (t[20] = w))
    : (w = t[20]);
  let T;
  t[21] !== n?.discoveryApplications || t[22] !== f
    ? ((T =
        n?.discoveryApplications &&
        (0, Q.jsx)(`p`, {
          className: `text-sm leading-5 text-secondary select-text`,
          id: `${f}-research-purpose-review`,
          children: (0, Q.jsx)(F, {
            id: `chatgpt.rosalind_access.research.purpose.tier_review.help_text`,
            defaultMessage: `Your responses help us understand your research needs and determine the appropriate access tier.`,
            description: `Explanatory text below the research-purpose text area on the GPT-Rosalind access application, shown only when the backend supports tier-aware application review. Tells applicants that their research needs inform eligibility for the Discovery or Research model tier, not privacy settings or a guaranteed approval. Plain-text sentence with no placeholders.`,
          }),
        })),
      (t[21] = n?.discoveryApplications),
      (t[22] = f),
      (t[23] = T))
    : (T = t[23]);
  let E = `${f}-research-purpose-privacy`,
    D;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, Q.jsx)(F, { ...G.researchPrivacy })), (t[24] = D))
    : (D = t[24]);
  let O;
  t[25] === E
    ? (O = t[26])
    : ((O = (0, Q.jsx)(`p`, {
        className: `text-sm leading-5 text-secondary select-text`,
        id: E,
        children: D,
      })),
      (t[25] = E),
      (t[26] = O));
  let k;
  t[27] === u.researchPurpose
    ? (k = t[28])
    : ((k = (0, Q.jsx)(Be, { field: `researchPurpose`, error: u.researchPurpose })),
      (t[27] = u.researchPurpose),
      (t[28] = k));
  let A;
  t[29] !== w || t[30] !== T || t[31] !== O || t[32] !== k || t[33] !== p || t[34] !== g
    ? ((A = (0, Q.jsx)(`div`, {
        "data-validation-field": `researchPurpose`,
        children: (0, Q.jsxs)(me, {
          htmlFor: p,
          title: m,
          description: h,
          descriptionId: g,
          descriptionSize: `body`,
          children: [w, T, O, k],
        }),
      })),
      (t[29] = w),
      (t[30] = T),
      (t[31] = O),
      (t[32] = k),
      (t[33] = p),
      (t[34] = g),
      (t[35] = A))
    : (A = t[35]);
  let j;
  t[36] === u.researchScopes
    ? (j = t[37])
    : ((j = J(`researchScopes`, u.researchScopes)), (t[36] = u.researchScopes), (t[37] = j));
  let N;
  t[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, Q.jsx)(`legend`, {
        className: `text-sm leading-5 font-medium select-none`,
        children: (0, Q.jsx)(F, { ...G.researchScope }),
      })),
      (t[38] = N))
    : (N = t[38]);
  let P;
  t[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, Q.jsx)(`p`, {
        className: `text-sm leading-5 text-secondary select-text`,
        children: (0, Q.jsx)(F, { ...G.researchScopeVisualDescription }),
      })),
      (t[39] = P))
    : (P = t[39]);
  let I;
  t[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, Q.jsx)(`p`, {
        className: `text-sm leading-5 text-secondary select-text`,
        children: (0, Q.jsx)(F, {
          id: `chatgpt.rosalind_access.research.scope.eligibility.help_text`,
          defaultMessage: `Making a selection does not disqualify you from access. Your responses help us understand your research and review your application.`,
          description: `Reassuring helper text beside the research-scope checkboxes in the GPT-Rosalind access application. Selecting a category does not automatically disqualify applicants; their responses still inform review of their research. This is not a promise of approval or a statement that categories are excluded from review. Short plain-text paragraph with no placeholders.`,
        }),
      })),
      (t[40] = I))
    : (I = t[40]);
  let L;
  t[41] !== f || t[42] !== i || t[43] !== o
    ? ((L = Ie.map((e) =>
        (0, Q.jsx)(
          ze,
          {
            id: `${f}-research-scope-${e.id}`,
            checked: i.includes(e.id),
            onChange: (t) => o(e.id, t),
            title: (0, Q.jsx)(F, { ...e.title }),
            description: e.description && (0, Q.jsx)(F, { ...e.description }),
          },
          e.id,
        ),
      )),
      (t[41] = f),
      (t[42] = i),
      (t[43] = o),
      (t[44] = L))
    : (L = t[44]);
  let R;
  t[45] === u.researchScopes
    ? (R = t[46])
    : ((R = (0, Q.jsx)(Be, { field: `researchScopes`, error: u.researchScopes })),
      (t[45] = u.researchScopes),
      (t[46] = R));
  let z;
  t[47] !== c || t[48] !== j || t[49] !== L || t[50] !== R
    ? ((z = (0, Q.jsxs)(`fieldset`, {
        className: `flex min-w-0 flex-col gap-3`,
        disabled: c,
        "data-validation-field": `researchScopes`,
        ...j,
        children: [N, P, I, L, R],
      })),
      (t[47] = c),
      (t[48] = j),
      (t[49] = L),
      (t[50] = R),
      (t[51] = z))
    : (z = t[51]);
  let B;
  return (
    t[52] !== A || t[53] !== z
      ? ((B = (0, Q.jsxs)(Q.Fragment, { children: [A, z] })), (t[52] = A), (t[53] = z), (t[54] = B))
      : (B = t[54]),
    B
  );
}
var X, Z, Q;
function We() {
  return (We = e(() => {
    ((X = p()), U(), (Z = a()), b(), C(), j(), re(), te(), _(), I(), ue(), de(), Me(), K(), Re(), (Q = s()));
  }))();
}
function Ge(e) {
  let t = (0, Ke.c)(46),
    n = M(),
    [r, i] = (0, qe.useState)(``),
    [a, o] = (0, qe.useState)(!1),
    s;
  if (t[0] !== e.organizationId || t[1] !== e.organizations) {
    let n;
    (t[3] === e.organizationId
      ? (n = t[4])
      : ((n = (t) => t.id === e.organizationId), (t[3] = e.organizationId), (t[4] = n)),
      (s = e.organizations.find(n)),
      (t[0] = e.organizationId),
      (t[1] = e.organizations),
      (t[2] = s));
  } else s = t[2];
  let c = s;
  if (e.variant === `cards`) {
    let r;
    t[5] === n ? (r = t[6]) : ((r = n.formatMessage(G.organizationLabel)), (t[5] = n), (t[6] = r));
    let i = e.lookupPending || void 0,
      a;
    t[7] !== n || t[8] !== e
      ? ((a = e.organizations.map((t) => {
          let r = t.id === e.organizationId,
            i = e.disabled || e.lookupPending || e.canSelectOrganization?.(t.id) === !1,
            a = new URLSearchParams({ organization_id: t.id, workspace_handoff: `true` });
          return (
            e.embedded && a.set(`embedded`, `codex`),
            (0, $.jsxs)(
              `div`,
              {
                className: `rounded-xl border border-default data-[state=selected]:border-text`,
                "data-state": r ? `selected` : `unselected`,
                children: [
                  (0, $.jsxs)(`label`, {
                    className: `flex cursor-interaction items-start gap-3 p-4 has-disabled:cursor-default has-disabled:opacity-60`,
                    children: [
                      (0, $.jsx)(`span`, {
                        className: `flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-soft`,
                        children: (0, $.jsx)(w, {}),
                      }),
                      (0, $.jsxs)(`span`, {
                        className: `flex min-w-0 flex-1 flex-col gap-1`,
                        children: [
                          (0, $.jsx)(`span`, {
                            className: `text-sm font-medium wrap-anywhere`,
                            children: t.name,
                          }),
                          (0, $.jsx)(`span`, {
                            className: `font-mono text-xs wrap-anywhere text-secondary`,
                            children: t.id,
                          }),
                          (0, $.jsx)(`span`, {
                            className: `text-xs leading-5 text-secondary`,
                            children: (0, $.jsx)(F, {
                              ...(t.submissionEligible === !1
                                ? G.organizationNotEligible
                                : G.organizationWorkspaceDescription),
                            }),
                          }),
                          e.organizationSource === `verified` &&
                            (0, $.jsx)(`span`, {
                              children: (0, $.jsx)(ne, {
                                variant: `success`,
                                children: (0, $.jsx)(F, { ...G.organizationAccountVerified }),
                              }),
                            }),
                        ],
                      }),
                      (0, $.jsx)(`input`, {
                        className: `mt-1 size-4 shrink-0 appearance-auto accent-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring`,
                        type: `radio`,
                        name: `openai-organization-card`,
                        "aria-label": n.formatMessage(G.organizationDisplayName, { name: t.name, id: t.id }),
                        checked: r,
                        disabled: i,
                        onChange: () => e.onSelectOrganization(t.id),
                      }),
                    ],
                  }),
                  e.organizationSource === `verified` &&
                    (0, $.jsx)(`div`, {
                      className: `px-4 pb-4`,
                      children: (0, $.jsxs)(y, {
                        className: `w-full`,
                        color: `outline`,
                        size: `dialogAction`,
                        to: `/rosalind/application/status?${a.toString()}`,
                        "aria-label": n.formatMessage(G.trackOrganizationApplication, {
                          organizationName: t.name,
                          organizationId: t.id,
                        }),
                        children: [(0, $.jsx)(F, { ...G.trackApplicationStatus }), (0, $.jsx)(N, {})],
                      }),
                    }),
                ],
              },
              t.id,
            )
          );
        })),
        (t[7] = n),
        (t[8] = e),
        (t[9] = a))
      : (a = t[9]);
    let o;
    return (
      t[10] !== r || t[11] !== i || t[12] !== a
        ? ((o = (0, $.jsx)(`div`, {
            className: `flex flex-col gap-3`,
            role: `radiogroup`,
            "aria-label": r,
            "aria-busy": i,
            children: a,
          })),
          (t[10] = r),
          (t[11] = i),
          (t[12] = a),
          (t[13] = o))
        : (o = t[13]),
      o
    );
  }
  let l;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (e) => {
        (o(e), e || i(``));
      }),
      (t[14] = l))
    : (l = t[14]);
  let u = e.lookupPending || e.disabled,
    d;
  t[15] === c
    ? (d = t[16])
    : ((d = c
        ? (0, $.jsx)(F, {
            id: `chatgpt.rosalind_access.organization.context.current`,
            defaultMessage: `Current organization: {name}`,
            description: `Accessible name of the GPT-Rosalind organization picker. Placeholder {name} is the selected organization's display name.`,
            values: { name: c.name },
          })
        : (0, $.jsx)(F, { ...G.selectOrganization })),
      (t[15] = c),
      (t[16] = d));
  let f;
  t[17] !== u || t[18] !== d
    ? ((f = (0, $.jsx)(x, {
        color: `secondary`,
        size: `dialogAction`,
        type: `button`,
        disabled: u,
        children: d,
      })),
      (t[17] = u),
      (t[18] = d),
      (t[19] = f))
    : (f = t[19]);
  let p;
  t[20] === n ? (p = t[21]) : ((p = n.formatMessage(G.selectOrganization)), (t[20] = n), (t[21] = p));
  let m;
  t[22] === n ? (m = t[23]) : ((m = n.formatMessage(G.selectOrganization)), (t[22] = n), (t[23] = m));
  let h;
  t[24] !== r || t[25] !== m
    ? ((h = (0, $.jsx)(V.Input, { value: r, onValueChange: i, placeholder: m })),
      (t[24] = r),
      (t[25] = m),
      (t[26] = h))
    : (h = t[26]);
  let g;
  if (t[27] !== n.locale || t[28] !== e || t[29] !== r) {
    let a;
    t[31] !== n.locale || t[32] !== r
      ? ((a = (e) => `${e.name} ${e.id}`.toLocaleLowerCase(n.locale).includes(r.toLocaleLowerCase(n.locale))),
        (t[31] = n.locale),
        (t[32] = r),
        (t[33] = a))
      : (a = t[33]);
    let s;
    (t[34] === e
      ? (s = t[35])
      : ((s = (t) =>
          (0, $.jsx)(
            V.Item,
            {
              value: t.id,
              disabled: e.canSelectOrganization?.(t.id) === !1,
              onSelect: () => {
                e.disabled ||
                  e.lookupPending ||
                  e.canSelectOrganization?.(t.id) === !1 ||
                  (t.id !== e.organizationId && e.onSelectOrganization(t.id), o(!1), i(``));
              },
              children: t.name,
            },
            t.id,
          )),
        (t[34] = e),
        (t[35] = s)),
      (g = e.organizations.filter(a).map(s)),
      (t[27] = n.locale),
      (t[28] = e),
      (t[29] = r),
      (t[30] = g));
  } else g = t[30];
  let _;
  t[36] === g ? (_ = t[37]) : ((_ = (0, $.jsx)(V.List, { children: g })), (t[36] = g), (t[37] = _));
  let v;
  t[38] !== p || t[39] !== h || t[40] !== _
    ? ((v = (0, $.jsxs)(V.Root, { label: p, children: [h, _] })),
      (t[38] = p),
      (t[39] = h),
      (t[40] = _),
      (t[41] = v))
    : (v = t[41]);
  let b;
  return (
    t[42] !== a || t[43] !== v || t[44] !== f
      ? ((b = (0, $.jsx)(ie, { open: a, onOpenChange: l, triggerButton: f, children: v })),
        (t[42] = a),
        (t[43] = v),
        (t[44] = f),
        (t[45] = b))
      : (b = t[45]),
    b
  );
}
var Ke, qe, $;
function Je() {
  return (Je = e(() => {
    ((Ke = p()), (qe = a()), b(), L(), C(), re(), _(), K(), ($ = s()));
  }))();
}
async function Ye(e, n) {
  let r = (
    await u(
      async () => {
        let { default: e } = await import(`./persona-dcd82a18594e.js`).then((e) => t(e.default, 1));
        return { default: e };
      },
      __vite__mapDeps([0, 1]),
      import.meta.url,
    )
  ).default;
  if (!n()) return null;
  let i = new r.Client(e);
  return n() ? i : (i.destroy(), null);
}
function Xe() {
  return (Xe = e(() => {
    k();
  }))();
}
export {
  he as C,
  ge as E,
  ye as S,
  ve as T,
  ke as _,
  ze as a,
  K as b,
  Be as c,
  Fe as d,
  Ie as f,
  J as g,
  Re as h,
  Je as i,
  Ue as l,
  Pe as m,
  Xe as n,
  He as o,
  Le as p,
  Ge as r,
  Ve as s,
  Ye as t,
  We as u,
  Ae as v,
  Oe as w,
  G as x,
  Me as y,
};
//# sourceMappingURL=persona-client-7dd1d4a8ca29.js.map
