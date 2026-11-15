export const __rspack_esm_ids = [194951]
export const __webpack_modules__ = {
  MhWb(e, a, i) {
    var t = i("gbEN"),
      n = i("reLf")
    let s = i.n(n)()(
      {
        backdropStyle: "dim",
        iconNextVariant: "light",
        menuAnimations: !0,
        pill: !0,
        squircle: !1,
        pressable: !1,
        pressableScaleMultiplier: 1,
        tooltipSideOffset: 5,
        tooltipCollisionPadding: 15,
      },
      t.l,
    )
    i.d(a, {}, { N: s })
  },
  sNsH(e, a, i) {
    i.d(a, { RosalindCustomerApplicationRoute: () => aq })
    var t = i("ABep"),
      n = i("QosV"),
      s = i("HZfM"),
      r = i("E4mZ"),
      o = i("T0Rc"),
      c = i("zTeN"),
      l = i("zd8w"),
      d = i("oyxz"),
      p = i("CLax"),
      u = i("EOo5"),
      g = i("Sm6l"),
      h = i("RNul"),
      m = i("KJsA"),
      f = i("yGJW"),
      v = i("AGJY")
    function _(e, a, i, t = "CHATGPT_WEB_ROSALIND_APPLICATION_SURFACE_STATUS") {
      try {
        e.logProductEvent(v.op, {
          surface: t,
          action: a,
          result: i,
          failureReason:
            "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_FAILED" === i
              ? "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_REQUEST_FAILED"
              : void 0,
        })
      } catch {}
    }
    var b = i("nPFn"),
      y = i("DBCl"),
      A = i("ASxG"),
      x = i("fDv2"),
      P = i("Ghh3")
    let T = A.enum(["research_non_zdr", "research_zdr"]),
      R = A.object({
        products: A.array(A.enum(b.ii)),
        researchPurpose: A.string(),
        researchScopes: A.array(A.enum(b.tF)),
        primaryCountry: A.string(),
        additionalLocations: A.enum(["no", "yes", "unsure"]),
        additionalCountries: A.array(A.string()).optional(),
        selectedSafeguards: A.array(A.enum(b.pK)),
        otherSafeguardDetails: A.string().optional(),
        requestedResearchMode: T,
      }),
      I = A.object({
        organizationId: A.string(),
        applicantName: A.string().optional(),
        applicantEmail: A.string().optional(),
        bioagentsApplicationReference: A.string().regex(/^[0-9a-f]{64}$/),
        state: A.enum([...b.si, "canceled"]),
        canCancel: A.boolean(),
        canResumeVerification: A.boolean(),
        canApproveProvisioning: A.boolean().optional(),
        requiresInternalApiAcknowledgement: A.boolean().optional(),
        requestedResearchMode: T.optional(),
        grantedResearchMode: T.optional(),
        activeTier: A.enum(["discovery", "research"]).optional(),
        canRequestResearchUpgrade: A.boolean().optional(),
        researchUpgrade: A.object({
          requestId: A.string().regex(/^[0-9a-f]{64}$/),
          status: A.enum(["pending", "approved", "declined"]),
          requestedAt: x.datetime({ offset: !0 }),
        }).optional(),
        existingZdrEnabled: A.boolean().optional(),
        zdrUpgradeRequested: A.boolean().optional(),
        zdrUpgradeApproved: A.boolean().optional(),
        provisioningPricing: A.object({
          pricingVersion: A.string(),
          requestedResearchMode: T,
          pricingStatus: A.enum(["provisional", "final"]),
          rateDisplay: A.string(),
          separateCharge: A.boolean(),
        }).optional(),
        provisioningApproval: A.object({
          approvedAt: x.datetime({ offset: !0 }),
          pricingVersion: A.string(),
          requestedResearchMode: T,
          pricingStatus: A.enum(["provisional", "final"]),
          acceptedResearchTerms: A.literal(!0).optional(),
          acceptedInternalApiOnly: A.literal(!0).optional(),
          researchTermsVersion: A.string().optional(),
        }).optional(),
        researchTermsVersion: A.string().optional(),
        researchTermsUrl: A.url()
          .refine((e) => {
            let a = new URL(e)
            return (
              "https:" === a.protocol &&
              ["openai.com", "cdn.openai.com"].includes(a.hostname) &&
              !a.username &&
              !a.password
            )
          })
          .optional(),
        approvalSummary: R.optional(),
        applicationSummary: R.optional(),
        submittedAt: x.datetime({ offset: !0 }).optional(),
        statusUpdatedAt: x.datetime({ offset: !0 }).optional(),
        decisionAt: x.datetime({ offset: !0 }).optional(),
        accessGrantedAt: x.datetime({ offset: !0 }).optional(),
        requiredAction: A.string().optional(),
        actionOwner: A.enum(["applicant", "reviewer"]).optional(),
        kybStatus: A.enum([
          "not_started",
          "in_progress",
          "pending",
          "action_required",
          "passed",
          "failed",
          "expired",
          "error",
        ]).optional(),
        processingPending: A.boolean().optional(),
        personaInquiryId: A.string()
          .regex(/^inq_[A-Za-z0-9]{16,64}$/)
          .optional(),
        personaEnvironmentId: A.string()
          .regex(/^env_[A-Za-z0-9]{16,64}$/)
          .optional(),
        personaSessionToken: A.string()
          .regex(/^[A-Za-z0-9._~+/=-]{16,2048}$/)
          .optional(),
      })
    function w(e, a) {
      let i = I.parse(e)
      if (i.organizationId !== a.organizationId || i.bioagentsApplicationReference !== a.bioagentsApplicationReference)
        throw Error("The Rosalind response belongs to another application")
      return i
    }
    async function S(e, a, i) {
      return w(
        await P.Request.safeRequest("get", "/rosalind/access/applications/{application_reference}", {
          parameters: {
            path: { application_reference: a.bioagentsApplicationReference },
            query: { organizationId: a.organizationId, includeDecisionMetadata: !0, includeApprovalSummary: !0 },
          },
          additionalHeaders: { [y.zBc]: e.accountId },
          expectedIdentity: e,
          expectedErrorStatuses: [400, 401, 403, 404, 422, 502, 503],
          retry: !1,
          signal: i,
        }),
        a,
      )
    }
    var C = i("irkb"),
      z = i("xSOA"),
      N = i("bVeK"),
      j = i("Wf1j"),
      O = i("TjgH"),
      L = i("sgGK"),
      k = i("djbx"),
      E = i("CtJU"),
      G = i("zLIa"),
      M = i("qvry"),
      D = i("wgaZ"),
      q = i("Qgfj")
    let H = (0, q.YK)({
        summaryOrganization: {
          id: "chatgpt.rosalind_access.review.summary.organization.label",
          defaultMessage: "Organization",
          description:
            "Summary row label for the one real OpenAI organization selected for the GPT-Rosalind application.",
        },
        applicationDetailsVisualHeading: {
          id: "chatgpt.rosalind_access.review.summary.visual_heading",
          defaultMessage: "Application details",
          description: "Concise visible heading inside the compact GPT-Rosalind application-review summary card.",
        },
        applicationProgress: {
          id: "chatgpt.rosalind_access.progress.navigation.aria_label",
          defaultMessage: "Application progress",
          description:
            "Accessible label for the navigation showing the steps of the GPT-Rosalind research access application.",
        },
        personaStep: {
          id: "chatgpt.rosalind_access.progress.persona.title",
          defaultMessage: "Persona",
          description:
            "Short title of the Persona business-verification step shown first in the GPT-Rosalind application when verification is enabled.",
        },
        personaHeading: {
          id: "chatgpt.rosalind_access.persona.heading",
          defaultMessage: "Verify your organization.",
          description:
            "Main accessible heading for the Persona business-verification step in the GPT-Rosalind application.",
        },
        personaVisualHeading: {
          id: "chatgpt.rosalind_access.persona.visual_heading",
          defaultMessage: "Business verification",
          description: "Visible heading for the Persona business-verification step in the GPT-Rosalind application.",
        },
        personaVisualDescription: {
          id: "chatgpt.rosalind_access.persona.organization_verification_description",
          defaultMessage: "OpenAI uses Persona to verify your organization.",
          description:
            "Explains why OpenAI uses Persona on the business-verification step of the GPT-Rosalind application.",
        },
        personaRequired: {
          id: "chatgpt.rosalind_access.persona.required",
          defaultMessage: "Complete Persona verification before continuing.",
          description:
            "Validation message shown when a researcher tries to continue the GPT-Rosalind application before Persona verification reaches a terminal result.",
        },
        personaPending: {
          id: "chatgpt.rosalind_access.persona.required.pending",
          description:
            "Inline validation message on the business-verification step of the GPT-Rosalind application after the researcher tries to continue while Persona still reports a pending inquiry.",
          defaultMessage: "Verification is still pending.",
        },
        personaExpired: {
          id: "chatgpt.rosalind_access.persona.required.expired",
          description:
            "Inline validation message on the business-verification step of the GPT-Rosalind application after the researcher tries to continue with an expired Persona inquiry. Persona is the verification provider.",
          defaultMessage: "Reopen Persona before continuing.",
        },
        organizationStep: {
          id: "chatgpt.rosalind_access.progress.organization.title",
          defaultMessage: "Organization",
          description:
            "Short title of the first step of the GPT-Rosalind application, where the signed-in customer selects exactly one OpenAI organization.",
        },
        researchStep: {
          id: "chatgpt.rosalind_access.progress.research.title",
          defaultMessage: "Research",
          description:
            "Short title of the second GPT-Rosalind application step covering research purpose and requested product surfaces.",
        },
        locationsStep: {
          id: "chatgpt.rosalind_access.progress.locations.title",
          defaultMessage: "Locations and safeguards",
          description:
            "Short title of the third GPT-Rosalind application step covering actual access countries and proportionate research safeguards.",
        },
        reviewStep: {
          id: "chatgpt.rosalind_access.progress.review.title",
          defaultMessage: "Review",
          description:
            "Short title of the fourth GPT-Rosalind application step, where the applicant reviews their answers and confirms their accuracy and authority to apply.",
        },
        organizationHeading: {
          id: "chatgpt.rosalind_access.organization.heading",
          defaultMessage: "Advance research with GPT-Rosalind.",
          description:
            "Main headline on the first step of the customer-facing GPT-Rosalind biology and life sciences research access application.",
        },
        organizationDescription: {
          id: "chatgpt.rosalind_access.organization.description",
          defaultMessage: "Apply for GPT-Rosalind access for biology and life sciences research.",
          description:
            "Introductory sentence beneath the headline on the first step of the customer-facing GPT-Rosalind access application.",
        },
        researchHeading: {
          id: "chatgpt.rosalind_access.research.heading",
          defaultMessage: "Tell us about your research.",
          description:
            "Main headline on the second step of the customer-facing GPT-Rosalind research access application.",
        },
        researchPurposeVisualPlaceholder: {
          id: "chatgpt.rosalind_access.research.purpose.visual_placeholder",
          defaultMessage: "Describe your planned research",
          description: "Concise visible placeholder inside the GPT-Rosalind research-purpose text area.",
        },
        researchPurposeCharactersMinimum: {
          id: "chatgpt.rosalind_access.research.purpose.characters_minimum",
          defaultMessage: "{count, number} / {minimum, number} characters minimum",
          description:
            "Live character counter shown while the GPT-Rosalind research description remains below the required minimum length.",
        },
        researchPurposeCharactersCount: {
          id: "chatgpt.rosalind_access.research.purpose.characters_count",
          defaultMessage: "{count, number} / {maximum, number}",
          description:
            "Live character counter showing the current and maximum permitted length of the GPT-Rosalind research description.",
        },
        researchScopeVisualDescription: {
          id: "chatgpt.rosalind_access.research.scope.visual_description",
          defaultMessage: "Select all that apply to your proposed work.",
          description: "Visible supporting instructions beneath the concise research-scope heading.",
        },
        researchDescription: {
          id: "chatgpt.rosalind_access.research.description",
          defaultMessage: "Tell us what you’re working on and where you would like to use GPT-Rosalind.",
          description:
            "Introductory sentence on the second GPT-Rosalind application step. Here 'where' refers to product surfaces such as ChatGPT, Codex, and the API.",
        },
        locationsHeading: {
          id: "chatgpt.rosalind_access.locations.heading",
          defaultMessage: "Confirm your access locations.",
          description:
            "Main headline on the third step of the customer-facing GPT-Rosalind research access application.",
        },
        locationsDescription: {
          id: "chatgpt.rosalind_access.locations.description",
          defaultMessage: "Tell us where approved users will primarily access the program.",
          description:
            "Introductory sentence on the third GPT-Rosalind application step requesting the primary country from which approved users will access the research program.",
        },
        reviewHeading: {
          id: "chatgpt.rosalind_access.review.heading",
          defaultMessage: "Review your application.",
          description:
            "Main headline on the fourth step of the customer-facing GPT-Rosalind research access application.",
        },
        reviewDescription: {
          id: "chatgpt.rosalind_access.review.application_attestations.description",
          defaultMessage: "Check your research details and confirm your authority to apply.",
          description:
            "Introductory sentence on the fourth GPT-Rosalind application step explaining that the applicant must review their research details and confirm their authority to submit for the selected organization; legal agreement is completed later by an authorized owner or administrator.",
        },
        organizationVerificationDescription: {
          id: "chatgpt.rosalind_access.organization.selection.verification_description",
          defaultMessage: "Organizations are verified using your signed-in OpenAI account.",
          description:
            "Instructions explaining that the available organizations come from the authenticated applicant's verified account membership.",
        },
        organizationNotEligible: {
          id: "chatgpt.rosalind_access.organization.selection.submission_unavailable.help_text",
          defaultMessage: "Applications are currently unavailable for this organization.",
          description:
            "Short explanation beneath an organization on the first GPT-Rosalind application step when a completed eligibility check does not allow the signed-in customer to apply. Do not imply a specific cause such as the organization's subscription plan; the check can reject submission for several reasons. Plain text with no placeholders.",
        },
        organizationEligibilityUnavailable: {
          id: "chatgpt.rosalind_access.organization.selection.eligibility_unavailable.help_text",
          defaultMessage: "We couldn’t check whether you can apply. Try again.",
          description:
            "Brief error beneath the selected organization on the first GPT-Rosalind application step when its eligibility lookup could not complete. The signed-in customer can use the nearby Retry button to check again; this message does not mean the organization is ineligible. Plain text with no placeholders.",
        },
        selectOrganization: {
          id: "chatgpt.rosalind_access.organization.selection.placeholder",
          defaultMessage: "Select an OpenAI organization",
          description:
            "Placeholder option prompting an authenticated GPT-Rosalind applicant to choose one associated OpenAI organization.",
        },
        noOrganizations: {
          id: "chatgpt.rosalind_access.organization.selection.empty",
          defaultMessage: "No account organizations available",
          description:
            "Placeholder shown when the real authenticated account has no OpenAI organizations available for the GPT-Rosalind application. No organization is invented.",
        },
        organizationsLoading: {
          id: "chatgpt.rosalind_access.organization.selection.loading.status",
          defaultMessage: "Loading your organizations…",
          description:
            "Short accessible status inside the organization selector on the first GPT-Rosalind access-application step while the signed-in customer's verified Business, Enterprise, and API organization memberships are still loading. This is a temporary loading state, not confirmation that the customer has no organizations.",
        },
        retryOrganizationLookup: {
          id: "chatgpt.rosalind_access.organization.selection.lookup_unavailable.retry_button",
          defaultMessage: "Retry loading organizations",
          description:
            "Short button label on the first GPT-Rosalind application step that reloads the page to retry retrieving every OpenAI organization associated with the signed-in account after a temporary lookup failure.",
        },
        researchPrivacy: {
          id: "chatgpt.rosalind_access.research.purpose.privacy.help_text",
          defaultMessage:
            "Do not include patient data, personal information, personnel records, genomic sequences, laboratory protocols, or confidential materials.",
          description:
            "Privacy and safety notice under the GPT-Rosalind research-purpose field warning applicants not to submit sensitive personal, scientific, laboratory, or confidential information.",
        },
        researchScope: {
          id: "chatgpt.rosalind_access.research.scope.legend",
          defaultMessage: "Research scope",
          description: "Fieldset legend introducing the research-scope checkboxes on the GPT-Rosalind application.",
        },
        pathogenEngineering: {
          id: "chatgpt.rosalind_access.research.scope.option.pathogen_engineering.label",
          defaultMessage: "Pathogen engineering",
          description:
            "Short checkbox label on the GPT-Rosalind research-access application for an applicant to disclose that their proposed research involves modifying pathogenic organisms.",
        },
        pathogenEngineeringDescription: {
          id: "chatgpt.rosalind_access.research.scope.option.pathogen_engineering.description",
          defaultMessage: "Research involving the modification of pathogenic organisms.",
          description:
            "Supporting description beneath the Pathogen engineering checkbox on the GPT-Rosalind research-access application, helping an applicant recognize this research category without requesting sensitive scientific details.",
        },
        biologicalToxins: {
          id: "chatgpt.rosalind_access.research.scope.option.biological_toxins.label",
          defaultMessage: "Biological toxins",
          description:
            "Short checkbox label on the GPT-Rosalind research-access application for an applicant to disclose that their proposed research involves biological toxins or related materials.",
        },
        biologicalToxinsDescription: {
          id: "chatgpt.rosalind_access.research.scope.option.biological_toxins.description",
          defaultMessage: "Research involving biological toxins or related materials.",
          description:
            "Supporting description beneath the Biological toxins checkbox on the GPT-Rosalind research-access application, helping an applicant recognize this research category without requesting sensitive scientific details.",
        },
        highContainmentResearch: {
          id: "chatgpt.rosalind_access.research.scope.option.high_containment_wet_lab.label",
          defaultMessage: "High-containment wet-lab research",
          description:
            "Short checkbox label on the GPT-Rosalind research-access application for an applicant to disclose that their proposed wet-lab research requires specialized biological containment or oversight.",
        },
        highContainmentResearchDescription: {
          id: "chatgpt.rosalind_access.research.scope.option.high_containment_wet_lab.description",
          defaultMessage: "Wet-lab research requiring specialized containment or oversight.",
          description:
            "Supporting description beneath the High-containment wet-lab research checkbox on the GPT-Rosalind research-access application, helping an applicant recognize this research category without requesting sensitive scientific details.",
        },
        geneDriveResearch: {
          id: "chatgpt.rosalind_access.research.scope.option.gene_drive.label",
          defaultMessage: "Gene-drive research",
          description:
            "Short checkbox label on the GPT-Rosalind research-access application for an applicant to disclose that their proposed research involves gene-drive systems.",
        },
        geneDriveResearchDescription: {
          id: "chatgpt.rosalind_access.research.scope.option.gene_drive.description",
          defaultMessage: "Research involving gene-drive systems.",
          description:
            "Supporting description beneath the Gene-drive research checkbox on the GPT-Rosalind access application.",
        },
        humanAnimalInfectionStudies: {
          id: "chatgpt.rosalind_access.research.scope.option.human_animal_infection.label",
          defaultMessage: "Human or animal infection studies",
          description:
            "Short checkbox label on the GPT-Rosalind research-access application for an applicant to disclose that their proposed research involves infection studies with human or animal subjects.",
        },
        humanAnimalInfectionStudiesDescription: {
          id: "chatgpt.rosalind_access.research.scope.option.human_animal_infection.description",
          defaultMessage: "Studies involving infection in human or animal subjects.",
          description:
            "Supporting description beneath the Human or animal infection studies checkbox on the GPT-Rosalind access application.",
        },
        noneOfAbove: {
          id: "chatgpt.rosalind_access.research.scope.option.none.label",
          defaultMessage: "None of the above",
          description:
            "Mutually exclusive checkbox label on the GPT-Rosalind research-access application indicating that none of the listed research categories applies to the applicant's proposed work.",
        },
        noneOfAboveDescription: {
          id: "chatgpt.rosalind_access.research.scope.option.none.description",
          defaultMessage: "The proposed work does not involve any listed category.",
          description:
            "Supporting description beneath the mutually exclusive None of the above research-scope checkbox on the GPT-Rosalind access application.",
        },
        safeguardsConfirmation: {
          id: "chatgpt.rosalind_access.safeguards.confirmation.label",
          defaultMessage:
            "I confirm that our organization maintains reasonable safeguards appropriate to the proposed research, including limiting access to authorized personnel, following relevant research oversight or safety processes where applicable, and requiring qualified human review before AI-generated outputs inform experiments, publications, or other consequential decisions.",
          description:
            "Mandatory research-safety attestation on step three of the GPT-Rosalind application. The applicant confirms proportionate personnel access control, applicable oversight, and qualified human review of consequential AI outputs.",
        },
        safeguardAuthorized: {
          id: "chatgpt.rosalind_access.safeguards.options.authorized_personnel.label",
          defaultMessage: "Access limited to authorized researchers or staff",
          description:
            "Research-safeguard checklist option indicating that access to the proposed work is restricted to authorized researchers or staff.",
        },
        safeguardOversight: {
          id: "chatgpt.rosalind_access.safeguards.options.institutional_oversight.label",
          defaultMessage:
            "Institutional research oversight when applicable, such as IRB, IBC, IACUC, EHS, biosafety, or ethics review",
          description:
            "Research-safeguard checklist option covering institutional review boards, biosafety committees, animal care committees, environmental health and safety, and ethics review when applicable.",
        },
        safeguardTraining: {
          id: "chatgpt.rosalind_access.safeguards.options.training_and_sops.label",
          defaultMessage: "Staff training, SOPs, or laboratory safety procedures",
          description:
            "Research-safeguard checklist option covering staff training, standard operating procedures, and laboratory safety practices.",
        },
        safeguardData: {
          id: "chatgpt.rosalind_access.safeguards.options.secure_research_data.label",
          defaultMessage: "Secure storage or access controls for sensitive research data",
          description:
            "Research-safeguard checklist option covering secure storage and access restrictions for sensitive scientific or research data.",
        },
        safeguardHumanReview: {
          id: "chatgpt.rosalind_access.safeguards.options.human_review.label",
          defaultMessage: "Human review of AI-generated hypotheses, protocols, analyses, or decisions",
          description:
            "Research-safeguard checklist option indicating that qualified humans review hypotheses, laboratory protocols, analyses, or decisions generated using AI.",
        },
        safeguardIncidents: {
          id: "chatgpt.rosalind_access.safeguards.options.incident_reporting.label",
          defaultMessage: "Incident reporting or escalation process",
          description:
            "Research-safeguard checklist option indicating that the organization maintains a process for reporting or escalating safety or security incidents.",
        },
        safeguardDualUse: {
          id: "chatgpt.rosalind_access.safeguards.options.dual_use_review.label",
          defaultMessage: "Dual-use, misuse, or biosecurity review when relevant",
          description:
            "Research-safeguard checklist option indicating that the organization reviews potential dual-use, misuse, or biosecurity risks when relevant to the proposed scientific work.",
        },
        safeguardOther: {
          id: "chatgpt.rosalind_access.safeguards.options.other.label",
          defaultMessage: "Other",
          description:
            "Checklist option allowing a GPT-Rosalind applicant to describe research or security safeguards not represented by the other listed options.",
        },
        otherSafeguards: {
          id: "chatgpt.rosalind_access.safeguards.other.label",
          defaultMessage: "Describe the other safeguards currently in place",
          description:
            "Label for the conditional text area displayed when a GPT-Rosalind applicant selects Other in the safeguards checklist.",
        },
        primaryCountryVisualHeading: {
          id: "chatgpt.rosalind_access.locations.primary_country.visual_heading",
          defaultMessage: "Primary country or region",
          description: "Concise visible label for the full accessible primary country of access selector.",
        },
        primaryCountryVisualDescription: {
          id: "chatgpt.rosalind_access.locations.primary_country.visual_description",
          defaultMessage: "Where will GPT-Rosalind primarily be accessed?",
          description: "Concise visible supporting question for the primary GPT-Rosalind access country or region.",
        },
        additionalLocationsVisualHeading: {
          id: "chatgpt.rosalind_access.locations.additional.visual_heading",
          defaultMessage: "Will access occur from additional countries or regions?",
          description:
            "Concise visible heading above the yes, no, and unsure options for additional GPT-Rosalind access locations.",
        },
        safeguardsVisualHeading: {
          id: "chatgpt.rosalind_access.safeguards.options.visual_heading",
          defaultMessage: "Existing safeguards",
          description:
            "Concise visible heading above the optional checklist of existing organizational research safeguards.",
        },
        safeguardsOptionalLabel: {
          id: "chatgpt.rosalind_access.safeguards.options.optional_label",
          defaultMessage: "Optional",
          description:
            "Short visible label clarifying that selecting specific existing research safeguards is optional, while the separate safeguards confirmation remains mandatory.",
        },
        safeguardsVisualDescription: {
          id: "chatgpt.rosalind_access.safeguards.options.visual_description",
          defaultMessage: "Select any research safeguards your organization currently maintains.",
          description: "Visible supporting instructions for selecting existing organizational research safeguards.",
        },
        safeguardAuthorizedVisualLabel: {
          id: "chatgpt.rosalind_access.safeguards.options.authorized_personnel.visual_label",
          defaultMessage: "Authorized personnel",
          description: "Concise visible label for the authenticated-personnel research safeguard.",
        },
        safeguardOversightVisualLabel: {
          id: "chatgpt.rosalind_access.safeguards.options.institutional_oversight.visual_label",
          defaultMessage: "Institutional oversight",
          description: "Concise visible label for the institutional research-oversight safeguard.",
        },
        safeguardTrainingVisualLabel: {
          id: "chatgpt.rosalind_access.safeguards.options.training.visual_label",
          defaultMessage: "Training and standard procedures",
          description: "Concise visible label for the personnel training and standard-procedures safeguard.",
        },
        safeguardDataVisualLabel: {
          id: "chatgpt.rosalind_access.safeguards.options.research_data.visual_label",
          defaultMessage: "Secure research data",
          description: "Concise visible label for the secure research-data safeguard.",
        },
        safeguardHumanReviewVisualLabel: {
          id: "chatgpt.rosalind_access.safeguards.options.human_review.visual_label",
          defaultMessage: "Human review",
          description: "Concise visible label for the qualified human-review safeguard.",
        },
        safeguardIncidentsVisualLabel: {
          id: "chatgpt.rosalind_access.safeguards.options.incidents.visual_label",
          defaultMessage: "Incident reporting",
          description: "Concise visible label for the research incident-reporting safeguard.",
        },
        safeguardDualUseVisualLabel: {
          id: "chatgpt.rosalind_access.safeguards.options.dual_use.visual_label",
          defaultMessage: "Dual-use review",
          description: "Concise visible label for the dual-use and biosecurity-review safeguard.",
        },
        safeguardOtherVisualLabel: {
          id: "chatgpt.rosalind_access.safeguards.options.other.visual_label",
          defaultMessage: "Other safeguards",
          description: "Concise visible label for other organizational research safeguards.",
        },
        primaryCountry: {
          id: "chatgpt.rosalind_access.locations.primary_country.label",
          defaultMessage: "Primary country of access",
          description:
            "Label for the country or territory from which authorized users will primarily access GPT-Rosalind. The selector deliberately includes locations that may require policy review.",
        },
        countryPlaceholder: {
          id: "chatgpt.rosalind_access.locations.primary_country.placeholder",
          defaultMessage: "Select a country or region",
          description:
            "Placeholder for the GPT-Rosalind primary access country selector, which does not imply that any listed location is approved.",
        },
        additionalLocations: {
          id: "chatgpt.rosalind_access.locations.additional.legend",
          defaultMessage: "Will any users access the program from additional locations?",
          description:
            "Fieldset legend on the GPT-Rosalind access-location step asking whether any users expect to access the program from countries or territories beyond the primary location.",
        },
        additionalNo: {
          id: "chatgpt.rosalind_access.locations.additional.option.no.label",
          defaultMessage: "No",
          description:
            "Answer to the GPT-Rosalind additional-access-locations question indicating that access is planned only from the primary country.",
        },
        additionalYes: {
          id: "chatgpt.rosalind_access.locations.additional.option.yes.label",
          defaultMessage: "Yes",
          description:
            "Answer to the GPT-Rosalind additional-access-locations question indicating that the applicant can identify other expected access locations.",
        },
        additionalUnsure: {
          id: "chatgpt.rosalind_access.locations.additional.option.unsure.label",
          defaultMessage: "Not sure",
          description:
            "Answer to the GPT-Rosalind access-locations question indicating that the applicant needs help confirming other intended access locations.",
        },
        additionalCountries: {
          id: "chatgpt.rosalind_access.locations.additional.countries.label",
          defaultMessage: "Additional countries or territories",
          description:
            "Label for the country-and-territory multiselect shown on the GPT-Rosalind access-location step only after an applicant confirms that users will access the program from additional locations.",
        },
        additionalCountriesPlaceholder: {
          id: "chatgpt.rosalind_access.locations.additional.countries.placeholder",
          defaultMessage: "Select an additional country or region",
          description:
            "Placeholder inside the additional-country multiselect on the GPT-Rosalind access-location step, prompting an applicant who confirmed additional access locations to select every relevant country or territory.",
        },
        additionalCountriesSearch: {
          id: "chatgpt.rosalind_access.locations.additional.countries.search.label",
          defaultMessage: "Search countries or territories",
          description:
            "Accessible label and short search-input placeholder inside the primary-country picker and additional-country multiselect on the GPT-Rosalind access-location step. Instructs applicants to filter available countries or territories by their localized names or two-letter country codes.",
        },
        additionalCountriesNoResults: {
          id: "chatgpt.rosalind_access.locations.additional.countries.search.empty",
          defaultMessage: "No matching countries or territories.",
          description:
            "Accessible status message inside the GPT-Rosalind additional-access-location multiselect when the applicant's search does not match any available country or territory. Existing selected locations remain selected even when they are temporarily filtered out.",
        },
        editApplication: {
          id: "chatgpt.rosalind_access.review.summary.edit.button",
          defaultMessage: "Edit",
          description:
            "Compact button inside the application-summary card that returns the applicant to the organization step to edit their application.",
        },
        safeguardsVisualLabel: {
          id: "chatgpt.rosalind_access.review.summary.safeguards.visual_label",
          defaultMessage: "Safeguards",
          description: "Concise visible summary-row label for the applicant's confirmed research safeguards.",
        },
        requestedAccess: {
          id: "chatgpt.rosalind_access.review.summary.requested_access.label",
          defaultMessage: "Requested access",
          description:
            "Summary row label for the selected ChatGPT, Codex, internal API, and external API product surfaces.",
        },
        summaryScope: {
          id: "chatgpt.rosalind_access.review.summary.research_scope.label",
          defaultMessage: "Research scope",
          description:
            "Short summary-row label on the GPT-Rosalind application review screen for the applicant's selected pathogen-engineering, biological-toxin, high-containment wet-lab, gene-drive, or human or animal infection research categories, or none of those categories.",
        },
        summaryPrimaryLocation: {
          id: "chatgpt.rosalind_access.review.summary.primary_location.label",
          defaultMessage: "Primary access location",
          description: "Summary row label for the actual primary country or territory of GPT-Rosalind access.",
        },
        summaryAdditionalLocations: {
          id: "chatgpt.rosalind_access.review.summary.additional_locations.label",
          defaultMessage: "Additional countries or regions",
          description: "Summary row label for disclosed additional or uncertain GPT-Rosalind access countries.",
        },
        none: {
          id: "chatgpt.rosalind_access.review.summary.none.label",
          defaultMessage: "None",
          description:
            "Short application-summary value indicating that the applicant reported no additional access locations.",
        },
        researchPurposeSummary: {
          id: "chatgpt.rosalind_access.review.summary.research_purpose.label",
          defaultMessage: "Research purpose",
          description:
            "Summary row label displaying the applicant's own description of their scientific objective and expected research benefit.",
        },
        termsVisualHeading: {
          id: "chatgpt.rosalind_access.review.application_attestations.visual_heading",
          defaultMessage: "Application attestations",
          description:
            "Concise visible section heading introducing the applicant's two mandatory GPT-Rosalind application attestations: application accuracy and authority to apply on behalf of the selected organization. Legal agreement is completed separately by an organization owner or administrator.",
        },
        confirmOrganizationHeading: {
          id: "chatgpt.rosalind_access.review.organization_confirmation.dialog.title",
          defaultMessage: "Confirm your organization",
          description:
            "Title of the final confirmation dialog shown after an authenticated researcher chooses Submit application in the GPT-Rosalind access application. The applicant must verify the selected organization's exact name and identifier before the application is actually sent.",
        },
        confirmOrganizationQuestion: {
          id: "chatgpt.rosalind_access.review.organization_confirmation.dialog.question",
          defaultMessage: "Submit application for {organizationName} ({organizationId})?",
          description:
            "Confirmation question in the final dialog shown before sending a GPT-Rosalind access application. Placeholder {organizationName} is the verified organization's full customer-facing name, and {organizationId} is its exact OpenAI organization identifier. Both values must remain visible so the applicant can verify the intended organization.",
        },
        confirmOrganizationNameLabel: {
          id: "chatgpt.rosalind_access.review.organization_confirmation.dialog.organization_name.label",
          defaultMessage: "Organization name",
          description:
            "Short row label preceding the verified organization's exact customer-facing name in the final GPT-Rosalind application submission confirmation dialog.",
        },
        confirmOrganizationIdLabel: {
          id: "chatgpt.rosalind_access.review.organization_confirmation.dialog.organization_id.label",
          defaultMessage: "Organization ID",
          description:
            "Short row label preceding the selected organization's exact OpenAI organization identifier in the final GPT-Rosalind application submission confirmation dialog.",
        },
        confirmOrganizationBack: {
          id: "chatgpt.rosalind_access.review.organization_confirmation.dialog.back.button",
          defaultMessage: "Go back",
          description:
            "Secondary button in the final GPT-Rosalind submission confirmation dialog. Closes the dialog and returns the authenticated researcher to the application review screen without sending or saving their application.",
        },
        confirmOrganizationSubmit: {
          id: "chatgpt.rosalind_access.review.organization_confirmation.dialog.submit.button",
          defaultMessage: "Confirm and submit",
          description:
            "Primary button in the final GPT-Rosalind submission confirmation dialog. Sends the access application only after the researcher has reviewed the verified organization's exact name and organization identifier. Short button label.",
        },
        certifyAccuracy: {
          id: "chatgpt.rosalind_access.review.terms.accuracy.label",
          defaultMessage: "I certify that this application is accurate and complete.",
          description:
            "Mandatory attestation certifying the accuracy and completeness of a GPT-Rosalind research access application.",
        },
        certifyAuthority: {
          id: "chatgpt.rosalind_access.review.terms.authority.label",
          defaultMessage: "I am authorized to apply on behalf of this organization.",
          description:
            "Mandatory attestation confirming that the applicant is authorized to submit a GPT-Rosalind access application for the selected organization.",
        },
        reviewStartsVisual: {
          id: "chatgpt.rosalind_access.review.submission.visual_notice",
          defaultMessage: "Submitting an application starts a review and does not grant access.",
          description:
            "Concise visible research-review notice clarifying that application submission never grants access.",
        },
        reviewStarts: {
          id: "chatgpt.rosalind_access.review.submission.after_agreement.notice",
          defaultMessage:
            "Submitting starts a review. GPT-Rosalind access is enabled only after organization verification and suitability and policy checks.",
          description:
            "Important notice on the final GPT-Rosalind application step explaining that submitting an application never grants immediate access; organization verification and independent suitability and policy checks must still finish first.",
        },
        back: {
          id: "chatgpt.rosalind_access.navigation.back.button",
          defaultMessage: "Back",
          description: "Button returning to the preceding step of the customer-facing GPT-Rosalind access application.",
        },
        next: {
          id: "chatgpt.rosalind_access.navigation.continue.button",
          defaultMessage: "Continue",
          description:
            "Button validating the current answers and advancing to the next step of the GPT-Rosalind access application.",
        },
        submit: {
          id: "chatgpt.rosalind_access.review.submit.button",
          defaultMessage: "Submit application",
          description:
            "Primary button for submitting a GPT-Rosalind research access application to the genuine authenticated customer backend. This button is disabled when submission is unavailable.",
        },
        submitting: {
          id: "chatgpt.rosalind_access.review.submitting.button",
          defaultMessage: "Submitting application…",
          description:
            "Temporary primary-button status shown only while a real authenticated GPT-Rosalind application submission request is in progress.",
        },
        organizationRequired: {
          id: "chatgpt.rosalind_access.validation.organization.error",
          defaultMessage: "Please select an OpenAI organization for this application.",
          description:
            "Validation error requiring the applicant to select exactly one real OpenAI organization for a GPT-Rosalind application.",
        },
        productRequired: {
          id: "chatgpt.rosalind_access.validation.products.error",
          defaultMessage: "Please select at least one place to use GPT-Rosalind.",
          description:
            "Validation error requiring at least one requested product surface such as ChatGPT, Codex, or an API application.",
        },
        researchPurposeRequired: {
          id: "chatgpt.rosalind_access.validation.research_purpose.error",
          defaultMessage:
            "Please describe your planned research, scientific objective, and intended benefit in at least 40 characters.",
          description:
            "Validation error requesting a meaningful description of the intended scientific research and public-health or research benefit.",
        },
        researchScopeRequired: {
          id: "chatgpt.rosalind_access.validation.research_scope.error",
          defaultMessage: "Please select the research scope that applies to your work.",
          description:
            "Validation error on the GPT-Rosalind research-access application shown when an applicant has not selected a pathogen-engineering, biological-toxin, high-containment wet-lab, gene-drive, or human or animal infection research category, or none of those categories.",
        },
        countryRequired: {
          id: "chatgpt.rosalind_access.validation.primary_country.error",
          defaultMessage: "Please select your primary country of access.",
          description:
            "Validation error requiring the applicant to disclose the real primary country from which GPT-Rosalind will be accessed.",
        },
        additionalLocationsRequired: {
          id: "chatgpt.rosalind_access.validation.additional_locations.error",
          defaultMessage: "Please tell us whether access is expected from additional locations.",
          description:
            "Validation error requiring the applicant to disclose whether approved GPT-Rosalind users expect to access the program from other actual locations.",
        },
        additionalCountriesRequired: {
          id: "chatgpt.rosalind_access.validation.additional_countries.error",
          defaultMessage: "Please select at least one additional access location.",
          description:
            "Validation error on the GPT-Rosalind access-location step requiring an applicant who answered Yes to additional access locations to select at least one additional country or territory. Applicants who answer that they are unsure do not see this error.",
        },
        safeguardsRequired: {
          id: "chatgpt.rosalind_access.validation.safeguards.error",
          defaultMessage:
            "Please confirm that your organization maintains reasonable safeguards appropriate to the proposed research.",
          description:
            "Validation error requiring the mandatory reasonable-research-safeguards attestation on the GPT-Rosalind access application.",
        },
        otherSafeguardsRequired: {
          id: "chatgpt.rosalind_access.validation.other_safeguards.error",
          defaultMessage: "Please describe the other safeguards currently in place.",
          description:
            "Validation error shown only when a GPT-Rosalind applicant selects the Other safeguard checkbox without describing the existing safeguard.",
        },
        accuracyRequired: {
          id: "chatgpt.rosalind_access.validation.accuracy.error",
          defaultMessage: "Please certify that your application is accurate and complete.",
          description:
            "Validation error requiring the accuracy and completeness attestation before GPT-Rosalind application submission.",
        },
        authorityRequired: {
          id: "chatgpt.rosalind_access.validation.authority.error",
          defaultMessage: "Please certify that you are authorized to apply on behalf of your organization.",
          description:
            "Validation error requiring the applicant to confirm legal or organizational authority to apply for GPT-Rosalind access.",
        },
        submissionUnavailable: {
          id: "chatgpt.rosalind_access.validation.submission_unavailable.error",
          defaultMessage: "Applications are not open yet. Your answers cannot be submitted or saved.",
          description:
            "Fail-closed error shown if a GPT-Rosalind application submission is attempted before the authenticated application service has been enabled.",
        },
        submissionFailed: {
          id: "chatgpt.rosalind_access.validation.submission_failed.error",
          defaultMessage: "Your application could not be submitted. Please try again.",
          description:
            "Error shown when the genuine server-side GPT-Rosalind application submission fails without providing a more specific safe error message.",
        },
        organizationUnavailable: {
          id: "chatgpt.rosalind_access.validation.organization_unavailable.error",
          defaultMessage:
            "The selected organization is unavailable or your membership could not be verified. Please choose an organization you can access.",
          description:
            "Privacy-safe error shown on the GPT-Rosalind application when the authenticated backend cannot verify that the customer currently belongs to their selected organization. Tells the customer to choose an organization they can access without disclosing private backend details.",
        },
        applicationUnprocessable: {
          id: "chatgpt.rosalind_access.validation.application_unprocessable.error",
          defaultMessage: "We couldn't process your application details. Please review your answers and try again.",
          description:
            "Privacy-safe error shown on the GPT-Rosalind application when the backend cannot process the submitted organization and research answers. Asks the customer to review their answers without displaying internal validation messages.",
        },
        applicationHistoryLimit: {
          id: "chatgpt.rosalind_access.validation.application_history_limit.error",
          defaultMessage: "This organization has reached its application limit and cannot submit another application.",
          description:
            "Privacy-safe error shown to a signed-in GPT-Rosalind applicant when their verified organization has exhausted the maximum number of application attempts. This is not an active duplicate application and changing form answers or retrying immediately cannot resolve it.",
        },
        submissionUnconfirmed: {
          id: "chatgpt.rosalind_access.validation.submission_unconfirmed.error",
          defaultMessage: "Your application could not be confirmed. Please try again.",
          description:
            "Fail-closed error shown when the server response does not confirm a real 64-character GPT-Rosalind application reference, submitted state, and matching selected organization.",
        },
        secureSubmissionFailed: {
          id: "chatgpt.rosalind_access.validation.secure_submission.error",
          defaultMessage: "A secure submission could not be started. Refresh the page and try again.",
          description:
            "Fail-closed error shown when the customer's browser cannot create the cryptographically strong idempotency key required for a GPT-Rosalind application.",
        },
        chatgptCodex: {
          id: "chatgpt.rosalind_access.research.products.option.chatgpt_codex.label",
          defaultMessage: "ChatGPT / Codex",
          description:
            "Product selection card title for using GPT-Rosalind in ChatGPT or Codex. Other options are internal and external API applications.",
        },
        chatgptCodexDescription: {
          id: "chatgpt.rosalind_access.research.products.option.chatgpt_codex.description",
          defaultMessage: "Use GPT-Rosalind directly in your organization’s workspaces.",
          description: "Description of the ChatGPT and Codex product option on the GPT-Rosalind application.",
        },
        internalApi: {
          id: "chatgpt.rosalind_access.research.products.option.internal_api.label",
          defaultMessage: "API · internal applications",
          description:
            "Product selection card title for using the OpenAI API in applications accessible only within the applicant's organization.",
        },
        internalApiDescription: {
          id: "chatgpt.rosalind_access.research.products.option.internal_api.description",
          defaultMessage: "Build research workflows for members of your organization.",
          description: "Description of the internal API application option in the GPT-Rosalind research access form.",
        },
        yourOrganization: {
          id: "chatgpt.rosalind_access.organization.selection.section_label",
          defaultMessage: "Your organization",
          description:
            "Section heading introducing the single-organization selection on the first GPT-Rosalind research access application step.",
        },
        organizationVisualDescription: {
          id: "chatgpt.rosalind_access.organization.visual_description",
          defaultMessage: "Select the organization that will be associated with this application.",
          description:
            "Concise visible description beneath the organization heading in the standalone GPT-Rosalind access application.",
        },
        organizationAccountVerified: {
          id: "chatgpt.rosalind_access.organization.selection.account_verified",
          defaultMessage: "Verified",
          description:
            "Compact badge shown only when the organization's membership was returned by the verified authenticated-account source.",
        },
        organizationDisplayName: {
          id: "chatgpt.rosalind_access.organization.selection.option.label",
          defaultMessage: "{name} · {id}",
          description:
            "A single real OpenAI organization in the GPT-Rosalind application selector or review summary. The placeholder {name} is the organization name and {id} is its exact organization identifier. Keep both values so applicants can distinguish organizations.",
        },
        organizationWorkspaceDescription: {
          id: "chatgpt.rosalind_access.organization.selection.workspace_description",
          defaultMessage: "OpenAI organization",
          description:
            "Neutral supporting label for an actual organization associated with the signed-in applicant; does not invent an organization plan or verification status.",
        },
        applicationConflict: {
          id: "chatgpt.rosalind_access.validation.application_conflict.organization_error",
          defaultMessage: "Application for {organizationId} already submitted",
          description:
            "Privacy-safe notice shown when a GPT-Rosalind applicant selects or submits an organization that already has an active application. Placeholder {organizationId} is the exact OpenAI organization identifier selected by the authenticated customer; no internal application identifiers or backend error details are disclosed.",
        },
        applicationStatusLabel: {
          id: "chatgpt.rosalind_access.application.status.heading",
          defaultMessage: "Application status",
          description:
            "Short heading introducing the current customer-facing status of an existing GPT-Rosalind access application for the verified organization selected by the signed-in researcher.",
        },
        pricingChatgptRateCardLink: {
          id: "chatgpt.rosalind_access.pricing.chatgpt_rate_card.link.label",
          defaultMessage: "ChatGPT rate card",
          description:
            "Short inline link label on the GPT-Rosalind application and final provisioning-approval pricing notice for applicants and organization administrators. Opens the official ChatGPT rate card in a new tab so readers can find the ChatGPT and Codex rates applicable to their organization's agreement. Appears alongside a separate API pricing link. No placeholders.",
        },
        pricingApiLink: {
          id: "chatgpt.rosalind_access.pricing.api.link.label",
          defaultMessage: "API pricing page",
          description:
            "Short inline link label on the GPT-Rosalind application and final provisioning-approval pricing notice for applicants and organization administrators. Opens the official OpenAI API pricing page in a new tab so readers can review published Rosalind API rates. Appears alongside a separate ChatGPT rate card link. No placeholders.",
        },
        researchVisualHeading: {
          id: "chatgpt.rosalind_access.research.visual_heading",
          defaultMessage: "Research details",
          description:
            "Concise visible heading for the research-details step in the standalone GPT-Rosalind access application.",
        },
        researchVisualDescription: {
          id: "chatgpt.rosalind_access.research.visual_description",
          defaultMessage: "Tell us how your organization intends to use GPT-Rosalind.",
          description:
            "Concise visible description beneath the research-details heading in the standalone GPT-Rosalind access application.",
        },
        locationsVisualDescription: {
          id: "chatgpt.rosalind_access.locations.visual_description",
          defaultMessage: "Describe where GPT-Rosalind will be accessed and how the research is protected.",
          description:
            "Concise visible description beneath the locations and safeguards heading in the standalone GPT-Rosalind access application.",
        },
        reviewVisualHeading: {
          id: "chatgpt.rosalind_access.review.visual_heading",
          defaultMessage: "Review your application",
          description: "Concise visible title for the final GPT-Rosalind application-review step.",
        },
        reviewVisualDescription: {
          id: "chatgpt.rosalind_access.review.application_attestations.screen_description",
          defaultMessage: "Confirm the information below and your authority to apply.",
          description:
            "Concise visible description beneath the final-review heading in the standalone GPT-Rosalind access application, asking an applicant to verify their answers and authorization to apply without accepting legal terms.",
        },
        requestedAccessVisualHeading: {
          id: "chatgpt.rosalind_access.research.requested_access.visual_heading",
          defaultMessage: "Requested access",
          description:
            "Concise visible heading for the requested product-surface choices on the GPT-Rosalind research step.",
        },
        requestedAccessVisualDescription: {
          id: "chatgpt.rosalind_access.research.requested_access.visual_description",
          defaultMessage: "Select every product surface your organization plans to use.",
          description: "Visible supporting instructions for choosing all requested GPT-Rosalind product surfaces.",
        },
        chatgptCodexVisualLabel: {
          id: "chatgpt.rosalind_access.research.products.option.chatgpt_codex.visual_label",
          defaultMessage: "ChatGPT and Codex",
          description:
            "Concise visible product-card title for requesting GPT-Rosalind access through ChatGPT and Codex.",
        },
        internalApiVisualLabel: {
          id: "chatgpt.rosalind_access.research.products.option.internal_api.visual_label",
          defaultMessage: "Internal API",
          description:
            "Concise visible product-card title for GPT-Rosalind API applications accessible within the applicant's organization.",
        },
        submittedStatus: {
          id: "chatgpt.rosalind_access.application.status.submitted.label",
          defaultMessage: "Submitted",
          description:
            "Short application-status badge shown when a GPT-Rosalind application has been submitted successfully but business verification and suitability review have not started. Submission does not grant product access.",
        },
        inProgressStatus: {
          id: "chatgpt.rosalind_access.application.status.in_progress.label",
          defaultMessage: "In progress",
          description:
            "Short GPT-Rosalind application-status badge shown while business verification, suitability checks, or authorized employee review are underway. This status does not mean access has been granted.",
        },
        actionRequiredStatus: {
          id: "chatgpt.rosalind_access.application.status.action_required.label",
          defaultMessage: "Action required",
          description:
            "Short GPT-Rosalind application-status badge shown when the applicant or an authorized reviewer must complete an assigned action before the organization's access application can proceed.",
        },
        approvedStatus: {
          id: "chatgpt.rosalind_access.application.status.approved.label",
          defaultMessage: "Approved",
          description:
            "Short GPT-Rosalind application-status badge shown after business verification and suitability have been approved but before organization-wide product access has been granted.",
        },
        accessGrantedStatus: {
          id: "chatgpt.rosalind_access.application.status.access_granted.label",
          defaultMessage: "Access granted",
          description:
            "Short GPT-Rosalind application-status badge shown only after the approved organization's product access has actually been provisioned.",
        },
        accessRevokedStatus: {
          id: "chatgpt.rosalind_access.application.status.access_revoked.label",
          defaultMessage: "Access revoked",
          description:
            "Short GPT-Rosalind application-status badge shown when previously provisioned product access has subsequently been revoked for the organization.",
        },
        deniedStatus: {
          id: "chatgpt.rosalind_access.application.status.denied.label",
          defaultMessage: "Denied",
          description:
            "Short GPT-Rosalind application-status badge shown when an authorized reviewer has issued a final decision denying an organization's request for access. This status means access was not granted.",
        },
        trackOrganizationApplication: {
          id: "chatgpt.rosalind_access.organization.tracking.link.accessible_label",
          defaultMessage: "Track application status for {organizationName} ({organizationId})",
          description:
            "Accessible name for an organization-specific application status link. organizationName is the display name and organizationId is the unique OpenAI organization ID, included to distinguish identically named organizations. Opening the page may require workspace authentication; it does not accept terms or grant access.",
        },
        trackApplicationStatus: {
          id: "chatgpt.rosalind_access.organization.tracking.link.label",
          defaultMessage: "Track application status",
          description:
            "Button-style navigation link for a verified organization or a submitted application. Opens the status page with that exact organization already selected. Users can view their application and authorized administrators can review terms and confirm provisioning there. Clicking this link does not itself accept terms or grant access. Keep the label concise.",
        },
        organizationLabel: {
          id: "chatgpt.rosalind_access.organization.selection.account_organizations.label",
          defaultMessage: "OpenAI organizations associated with your account.",
          description:
            "Label above the single-select dropdown of real OpenAI organizations associated with the signed-in GPT-Rosalind applicant's account. The applicant must select exactly one organization for this application.",
        },
      }),
      V = (e) => `application-error-${e}`,
      B = (e, a) => ({ "aria-invalid": !!a || void 0, "aria-describedby": a ? V(e) : void 0 }),
      U = {
        organizationId: H.organizationRequired,
        researchPurpose: H.researchPurposeRequired,
        researchScopes: H.researchScopeRequired,
        products: H.productRequired,
        primaryCountry: H.countryRequired,
        additionalLocations: H.additionalLocationsRequired,
        additionalCountries: H.additionalCountriesRequired,
        otherSafeguardDetails: H.otherSafeguardsRequired,
        confirmResearchSafeguards: H.safeguardsRequired,
        certifyAccuracy: H.accuracyRequired,
        certifyAuthority: H.authorityRequired,
      }
    function W(e) {
      requestAnimationFrame(() => {
        let a = document.querySelector(`form[data-step="${e}"] [data-field-error]`)
        if (!a) return
        let i = a.closest("[data-validation-field]")
        ;((i?.querySelector("textarea,select,input:not(:disabled),summary,button:not(:disabled)") ?? a).focus({
          preventScroll: !0,
        }),
          (i ?? a).scrollIntoView({ block: "start", behavior: "instant" }))
      })
    }
    let F = ["US", "AU", "CA", "FR", "DE", "IN", "JP", "MX", "NL", "SG", "CH", "GB"],
      $ = [
        {
          title: H.organizationStep,
          heading: H.organizationHeading,
          description: H.organizationDescription,
          visualHeading: H.yourOrganization,
          visualDescription: H.organizationVisualDescription,
        },
        {
          title: H.researchStep,
          heading: H.researchHeading,
          description: H.researchDescription,
          visualHeading: H.researchVisualHeading,
          visualDescription: H.researchVisualDescription,
        },
        {
          title: H.locationsStep,
          heading: H.locationsHeading,
          description: H.locationsDescription,
          visualHeading: H.locationsStep,
          visualDescription: H.locationsVisualDescription,
        },
        {
          title: H.reviewStep,
          heading: H.reviewHeading,
          description: H.reviewDescription,
          visualHeading: H.reviewVisualHeading,
          visualDescription: H.reviewVisualDescription,
        },
      ],
      Y = [
        {
          id: "chatgpt-codex",
          Icon: N.VhP,
          visualTitle: H.chatgptCodexVisualLabel,
          title: H.chatgptCodex,
          description: H.chatgptCodexDescription,
        },
        {
          id: "internal-api",
          Icon: N.u1Q,
          visualTitle: H.internalApiVisualLabel,
          title: H.internalApi,
          description: H.internalApiDescription,
        },
      ].filter((e) => b.ii.includes(e.id)),
      K = [
        { id: "pathogen-engineering", title: H.pathogenEngineering, description: H.pathogenEngineeringDescription },
        { id: "biological-toxins", title: H.biologicalToxins, description: H.biologicalToxinsDescription },
        { id: "high-containment", title: H.highContainmentResearch, description: H.highContainmentResearchDescription },
        { id: "gene-drive", title: H.geneDriveResearch, description: H.geneDriveResearchDescription },
        {
          id: "human-animal-infection",
          title: H.humanAnimalInfectionStudies,
          description: H.humanAnimalInfectionStudiesDescription,
        },
        { id: "none", title: H.noneOfAbove, description: H.noneOfAboveDescription },
      ].filter((e) => b.tF.includes(e.id)),
      Z = [
        { id: "authorized-personnel", title: H.safeguardAuthorized, visualTitle: H.safeguardAuthorizedVisualLabel },
        { id: "institutional-oversight", title: H.safeguardOversight, visualTitle: H.safeguardOversightVisualLabel },
        { id: "training-and-sops", title: H.safeguardTraining, visualTitle: H.safeguardTrainingVisualLabel },
        { id: "secure-research-data", title: H.safeguardData, visualTitle: H.safeguardDataVisualLabel },
        { id: "human-review", title: H.safeguardHumanReview, visualTitle: H.safeguardHumanReviewVisualLabel },
        { id: "incident-reporting", title: H.safeguardIncidents, visualTitle: H.safeguardIncidentsVisualLabel },
        { id: "dual-use-review", title: H.safeguardDualUse, visualTitle: H.safeguardDualUseVisualLabel },
        { id: "other", title: H.safeguardOther, visualTitle: H.safeguardOtherVisualLabel },
      ].filter((e) => b.pK.includes(e.id))
    function X(e) {
      let a,
        i,
        s,
        r,
        o,
        c,
        l = (0, n.c)(23),
        { id: d, checked: p, disabled: u, onChange: g, title: h, description: m, invalid: f, describedBy: v } = e,
        _ = void 0 !== u && u,
        b = f || void 0
      return (
        l[0] !== v || l[1] !== m || l[2] !== d
          ? ((a = m ? `${d}-description ${v ?? ""}`.trim() : v), (l[0] = v), (l[1] = m), (l[2] = d), (l[3] = a))
          : (a = l[3]),
        l[4] !== p || l[5] !== _ || l[6] !== d || l[7] !== g || l[8] !== b || l[9] !== a
          ? ((i = (0, t.jsx)(k.S, {
              id: d,
              name: d,
              className: "mt-0.5",
              checked: p,
              disabled: _,
              onCheckedChange: g,
              "aria-invalid": b,
              "aria-describedby": a,
              size: "sm",
              variant: "choice",
            })),
            (l[4] = p),
            (l[5] = _),
            (l[6] = d),
            (l[7] = g),
            (l[8] = b),
            (l[9] = a),
            (l[10] = i))
          : (i = l[10]),
        l[11] !== d || l[12] !== h
          ? ((s = (0, t.jsx)("label", {
              className: "cursor-interaction text-sm leading-4.5 select-none",
              htmlFor: d,
              children: h,
            })),
            (l[11] = d),
            (l[12] = h),
            (l[13] = s))
          : (s = l[13]),
        l[14] !== m || l[15] !== d
          ? ((r = m && (0, t.jsx)(D.Rr, { id: `${d}-description`, size: "body", children: m })),
            (l[14] = m),
            (l[15] = d),
            (l[16] = r))
          : (r = l[16]),
        l[17] !== s || l[18] !== r
          ? ((o = (0, t.jsxs)("div", { className: "flex min-w-0 flex-col gap-0.5", children: [s, r] })),
            (l[17] = s),
            (l[18] = r),
            (l[19] = o))
          : (o = l[19]),
        l[20] !== i || l[21] !== o
          ? ((c = (0, t.jsxs)("div", { className: "relative flex items-start gap-2.5", children: [i, o] })),
            (l[20] = i),
            (l[21] = o),
            (l[22] = c))
          : (c = l[22]),
        c
      )
    }
    function Q(e) {
      let a,
        i = (0, n.c)(3),
        { field: s, error: r } = e
      return (
        i[0] !== r || i[1] !== s
          ? ((a = r
              ? (0, t.jsx)("p", {
                  className: "text-sm text-danger",
                  "data-field-error": !0,
                  id: V(s),
                  role: "alert",
                  tabIndex: -1,
                  children: r,
                })
              : null),
            (i[0] = r),
            (i[1] = s),
            (i[2] = a))
          : (a = i[2]),
        a
      )
    }
    function J(e) {
      let a,
        i,
        s = (0, n.c)(5),
        { label: r, children: o } = e
      return (
        s[0] !== r ? ((a = (0, t.jsx)(d.A, { ...r })), (s[0] = r), (s[1] = a)) : (a = s[1]),
        s[2] !== o || s[3] !== a
          ? ((i = (0, t.jsx)(E.l, { align: "start", spacing: "relaxed", label: a, children: o })),
            (s[2] = o),
            (s[3] = a),
            (s[4] = i))
          : (i = s[4]),
        i
      )
    }
    function ee(e) {
      let a,
        i,
        s,
        r,
        o,
        c,
        p,
        u,
        g,
        h,
        m,
        f,
        v,
        _,
        y,
        A,
        x,
        P,
        T,
        R,
        I,
        w = (0, n.c)(55),
        {
          capabilities: S,
          researchPurpose: C,
          researchScopes: z,
          setResearchPurpose: N,
          toggleResearchScope: O,
          fieldErrors: L,
          disabled: k,
        } = e
      w[0] !== L ? ((a = void 0 === L ? {} : L), (w[0] = L), (w[1] = a)) : (a = w[1])
      let E = a,
        D = (0, j.A)(),
        q = (0, l.useId)(),
        U = `${q}-research-purpose`
      w[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = (0, t.jsx)(d.A, {
            id: "chatgpt.rosalind_access.research.purpose.use_plan.label",
            defaultMessage: "How do you plan to use Rosalind?",
            description:
              "Visible and accessible label of the research-purpose text area on the GPT-Rosalind access application. Asks applicants for a high-level account of their intended scientific use, without requiring confidential details. Short question with no placeholders; preserve the Rosalind product name.",
          })),
          (s = (0, t.jsx)(d.A, {
            id: "chatgpt.rosalind_access.research.purpose.use_plan.help_text",
            defaultMessage:
              "Describe your research goals, how you hope to use Rosalind, and the types of outputs or insights you need. Include any challenges you’d like help with. A high-level overview is sufficient; no confidential details are needed.",
            description:
              "Supporting instructions above the research-purpose text area on the GPT-Rosalind access application. Applicants should explain their scientific goals, intended AI use, desired results, and challenges at a high level; they should not disclose confidential details. Reassuring plain-text paragraph with no placeholders; preserve the Rosalind product name.",
          })),
          (w[2] = i),
          (w[3] = s))
        : ((i = w[2]), (s = w[3]))
      let W = `${q}-research-purpose-help`,
        F = `${q}-research-purpose`
      ;(w[4] !== N ? ((r = (e) => N(e.target.value)), (w[4] = N), (w[5] = r)) : (r = w[5]),
        w[6] !== D ? ((o = D.formatMessage(H.researchPurposeVisualPlaceholder)), (w[6] = D), (w[7] = o)) : (o = w[7]))
      let $ = !!E.researchPurpose || void 0
      w[8] !== E.researchPurpose
        ? ((c = E.researchPurpose ? ` ${V("researchPurpose")}` : ""), (w[8] = E.researchPurpose), (w[9] = c))
        : (c = w[9])
      let Y = `${q}-research-purpose-help ${q}-research-purpose-privacy${S?.discoveryApplications ? ` ${q}-research-purpose-review` : ""}${c}`
      ;(w[10] !== C
        ? ((p = (0, t.jsx)("span", {
            className: "text-end text-xs leading-4.5 text-secondary",
            children:
              Array.from(C.trim()).length < b.XO.researchPurpose.min
                ? (0, t.jsx)(d.A, {
                    ...H.researchPurposeCharactersMinimum,
                    values: { count: Array.from(C.trim()).length, minimum: b.XO.researchPurpose.min },
                  })
                : (0, t.jsx)(d.A, {
                    ...H.researchPurposeCharactersCount,
                    values: { count: Array.from(C).length, maximum: b.XO.researchPurpose.max },
                  }),
          })),
          (w[10] = C),
          (w[11] = p))
        : (p = w[11]),
        w[12] !== k ||
        w[13] !== C ||
        w[14] !== $ ||
        w[15] !== Y ||
        w[16] !== p ||
        w[17] !== F ||
        w[18] !== r ||
        w[19] !== o
          ? ((u = (0, t.jsx)("div", {
              className: "pt-3",
              children: (0, t.jsx)(G.TM, {
                variant: "feedback",
                id: F,
                name: "research-purpose",
                disabled: k,
                value: C,
                onChange: r,
                maxLength: b.XO.researchPurpose.max,
                placeholder: o,
                rows: 4,
                "aria-invalid": $,
                "aria-describedby": Y,
                footer: p,
              }),
            })),
            (w[12] = k),
            (w[13] = C),
            (w[14] = $),
            (w[15] = Y),
            (w[16] = p),
            (w[17] = F),
            (w[18] = r),
            (w[19] = o),
            (w[20] = u))
          : (u = w[20]),
        w[21] !== S?.discoveryApplications || w[22] !== q
          ? ((g =
              S?.discoveryApplications &&
              (0, t.jsx)("p", {
                className: "text-sm leading-5 text-secondary select-text",
                id: `${q}-research-purpose-review`,
                children: (0, t.jsx)(d.A, {
                  id: "chatgpt.rosalind_access.research.purpose.tier_review.help_text",
                  defaultMessage:
                    "Your responses help us understand your research needs and determine the appropriate access tier.",
                  description:
                    "Explanatory text below the research-purpose text area on the GPT-Rosalind access application, shown only when the backend supports tier-aware application review. Tells applicants that their research needs inform eligibility for the Discovery or Research model tier, not privacy settings or a guaranteed approval. Plain-text sentence with no placeholders.",
                }),
              })),
            (w[21] = S?.discoveryApplications),
            (w[22] = q),
            (w[23] = g))
          : (g = w[23]))
      let Z = `${q}-research-purpose-privacy`
      return (
        w[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, t.jsx)(d.A, { ...H.researchPrivacy })), (w[24] = h))
          : (h = w[24]),
        w[25] !== Z
          ? ((m = (0, t.jsx)("p", { className: "text-sm leading-5 text-secondary select-text", id: Z, children: h })),
            (w[25] = Z),
            (w[26] = m))
          : (m = w[26]),
        w[27] !== E.researchPurpose
          ? ((f = (0, t.jsx)(Q, { field: "researchPurpose", error: E.researchPurpose })),
            (w[27] = E.researchPurpose),
            (w[28] = f))
          : (f = w[28]),
        w[29] !== u || w[30] !== g || w[31] !== m || w[32] !== f || w[33] !== U || w[34] !== W
          ? ((v = (0, t.jsx)("div", {
              "data-validation-field": "researchPurpose",
              children: (0, t.jsxs)(M.t, {
                htmlFor: U,
                title: i,
                description: s,
                descriptionId: W,
                descriptionSize: "body",
                children: [u, g, m, f],
              }),
            })),
            (w[29] = u),
            (w[30] = g),
            (w[31] = m),
            (w[32] = f),
            (w[33] = U),
            (w[34] = W),
            (w[35] = v))
          : (v = w[35]),
        w[36] !== E.researchScopes
          ? ((_ = B("researchScopes", E.researchScopes)), (w[36] = E.researchScopes), (w[37] = _))
          : (_ = w[37]),
        w[38] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, t.jsx)("legend", {
              className: "text-sm leading-5 font-medium select-none",
              children: (0, t.jsx)(d.A, { ...H.researchScope }),
            })),
            (w[38] = y))
          : (y = w[38]),
        w[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = (0, t.jsx)("p", {
              className: "text-sm leading-5 text-secondary select-text",
              children: (0, t.jsx)(d.A, { ...H.researchScopeVisualDescription }),
            })),
            (w[39] = A))
          : (A = w[39]),
        w[40] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, t.jsx)("p", {
              className: "text-sm leading-5 text-secondary select-text",
              children: (0, t.jsx)(d.A, {
                id: "chatgpt.rosalind_access.research.scope.eligibility.help_text",
                defaultMessage:
                  "Making a selection does not disqualify you from access. Your responses help us understand your research and review your application.",
                description:
                  "Reassuring helper text beside the research-scope checkboxes in the GPT-Rosalind access application. Selecting a category does not automatically disqualify applicants; their responses still inform review of their research. This is not a promise of approval or a statement that categories are excluded from review. Short plain-text paragraph with no placeholders.",
              }),
            })),
            (w[40] = x))
          : (x = w[40]),
        w[41] !== q || w[42] !== z || w[43] !== O
          ? ((P = K.map((e) =>
              (0, t.jsx)(
                X,
                {
                  id: `${q}-research-scope-${e.id}`,
                  checked: z.includes(e.id),
                  onChange: (a) => O(e.id, a),
                  title: (0, t.jsx)(d.A, { ...e.title }),
                  description: e.description && (0, t.jsx)(d.A, { ...e.description }),
                },
                e.id,
              ),
            )),
            (w[41] = q),
            (w[42] = z),
            (w[43] = O),
            (w[44] = P))
          : (P = w[44]),
        w[45] !== E.researchScopes
          ? ((T = (0, t.jsx)(Q, { field: "researchScopes", error: E.researchScopes })),
            (w[45] = E.researchScopes),
            (w[46] = T))
          : (T = w[46]),
        w[47] !== k || w[48] !== _ || w[49] !== P || w[50] !== T
          ? ((R = (0, t.jsxs)("fieldset", {
              className: "flex min-w-0 flex-col gap-3",
              disabled: k,
              "data-validation-field": "researchScopes",
              ..._,
              children: [y, A, x, P, T],
            })),
            (w[47] = k),
            (w[48] = _),
            (w[49] = P),
            (w[50] = T),
            (w[51] = R))
          : (R = w[51]),
        w[52] !== v || w[53] !== R
          ? ((I = (0, t.jsxs)(t.Fragment, { children: [v, R] })), (w[52] = v), (w[53] = R), (w[54] = I))
          : (I = w[54]),
        I
      )
    }
    let ea = (0, q.YK)({
      organizationIdentity: {
        id: "chatgpt.rosalind_access.receipt.organization_identity",
        defaultMessage: "{name} · {id}",
        description: "Organization name followed by its ID in the submission receipt",
      },
      canceled: {
        id: "chatgpt.rosalind_access.customer.receipt.canceled",
        defaultMessage: "Canceled",
        description: "Status badge when an already submitted organization application has since been canceled.",
      },
      title: {
        id: "chatgpt.rosalind_access.customer.receipt.title",
        defaultMessage: "Your application has been submitted",
        description:
          "Success heading after the organization access application is confirmed by the server; submission does not grant access.",
      },
      description: {
        id: "chatgpt.rosalind_access.customer.receipt.description",
        defaultMessage: "We’ll review your organization, proposed research, access locations, and safeguards",
        description: "Explains what OpenAI reviews after an organization submits its GPT-Rosalind application.",
      },
      details: {
        id: "chatgpt.rosalind_access.customer.receipt.details",
        defaultMessage: "Application details",
        description: "Heading for the submitted organization application's receipt summary.",
      },
      reference: {
        id: "chatgpt.rosalind_access.customer.receipt.reference",
        defaultMessage: "Application reference",
        description: "Label for the immutable reference of the submitted organization application.",
      },
      primaryContact: {
        id: "chatgpt.rosalind_access.customer.receipt.contact_name",
        defaultMessage: "Primary contact",
        description: "Label for the applicant name from the authenticated session that submitted the application.",
      },
      contactEmail: {
        id: "chatgpt.rosalind_access.customer.receipt.contact_email",
        defaultMessage: "Contact email",
        description: "Label for the applicant email from the authenticated session that submitted the application.",
      },
      verification: {
        id: "chatgpt.rosalind_access.customer.receipt.verification",
        defaultMessage: "Business verification",
        description: "Label for the organization verification review shown on the receipt.",
      },
      verificationDuringReview: {
        id: "chatgpt.rosalind_access.customer.receipt.verification_review",
        defaultMessage: "Existing verification checked during review",
        description:
          "Explains that existing organization verification will be checked as part of application review, without claiming approval.",
      },
      unconfirmedLocations: {
        id: "chatgpt.rosalind_access.customer.receipt.locations_unsure",
        defaultMessage: "Not yet confirmed",
        description: "Receipt summary when the applicant is unsure about additional countries of access.",
      },
      safeguards: {
        id: "chatgpt.rosalind_access.customer.receipt.safeguards",
        defaultMessage: "Research safeguards",
        description: "Label for the submitted research safety attestation.",
      },
      safeguardsConfirmed: {
        id: "chatgpt.rosalind_access.customer.receipt.safeguards_confirmed",
        defaultMessage: "Reasonable safeguards confirmed",
        description:
          "Records the applicant's mandatory safeguards attestation; this does not claim OpenAI has verified or approved them.",
      },
      safeguardsInPlace: {
        id: "chatgpt.rosalind_access.customer.receipt.safeguards_in_place",
        defaultMessage: "Safeguards in place",
        description: "Label for optional research safeguards selected in the submitted application.",
      },
      otherSafeguards: {
        id: "chatgpt.rosalind_access.customer.receipt.other_safeguards",
        defaultMessage: "Other safeguards",
        description: "Label for the applicant's submitted description of other safeguards.",
      },
      noAccess: {
        id: "chatgpt.rosalind_access.customer.receipt.no_access",
        defaultMessage: "Submission does not grant access",
        description:
          "Notice on the receipt explaining that application submission alone does not enable GPT-Rosalind access.",
      },
      refresh: {
        id: "chatgpt.rosalind_access.customer.status.refresh",
        defaultMessage: "Refresh status",
        description: "Button that reloads the persisted Rosalind application status without changing the application",
      },
    })
    function ei(e) {
      let a,
        i,
        s,
        r,
        o,
        c,
        l,
        p,
        u,
        g,
        h,
        m,
        f,
        v,
        _,
        b,
        y,
        A,
        x,
        P,
        T,
        R,
        I,
        w,
        S,
        C,
        z,
        k,
        E,
        G,
        M,
        D = (0, n.c)(90),
        {
          application: q,
          answers: V,
          applicantName: B,
          applicantEmail: U,
          organization: W,
          headingRef: F,
          children: $,
          footer: X,
        } = e,
        Q = (0, j.A)()
      D[0] !== Q ? ((a = (e) => Q.formatDisplayName(e, { type: "region" }) ?? e), (D[0] = Q), (D[1] = a)) : (a = D[1])
      let ee = a
      D[2] !== V.selectedSafeguards
        ? ((i = V.selectedSafeguards ?? []), (D[2] = V.selectedSafeguards), (D[3] = i))
        : (i = D[3])
      let ei = i,
        et = "action_required" === q.state && "applicant" !== q.actionOwner ? "in_progress" : q.state
      D[4] !== et
        ? ((s =
            "canceled" === et
              ? ea.canceled
              : {
                  submitted: H.submittedStatus,
                  in_progress: H.inProgressStatus,
                  action_required: H.actionRequiredStatus,
                  approved: H.approvedStatus,
                  access_granted: H.accessGrantedStatus,
                  revoked: H.accessRevokedStatus,
                  denied: H.deniedStatus,
                }[et]),
          (D[4] = et),
          (D[5] = s))
        : (s = D[5])
      let en = s
      if (
        (D[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, t.jsx)("span", {
              className: "flex size-12 items-center justify-center rounded-full bg-success-soft text-success-soft",
              "aria-hidden": "true",
              children: (0, t.jsx)(N.lIO, {}),
            })),
            (D[6] = r))
          : (r = D[6]),
        D[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, t.jsx)(d.A, { ...ea.title })), (D[7] = o))
          : (o = D[7]),
        D[8] !== F
          ? ((c = (0, t.jsx)("h1", {
              ref: F,
              className: "text-heading-md leading-8 font-semibold outline-none select-text md:text-heading-lg",
              tabIndex: -1,
              children: o,
            })),
            (D[8] = F),
            (D[9] = c))
          : (c = D[9]),
        D[10] !== et
          ? ((l =
              ("submitted" === et || "in_progress" === et) &&
              (0, t.jsx)("p", {
                className: "text-sm leading-5 text-secondary select-text",
                children: (0, t.jsx)(d.A, { ...ea.description }),
              })),
            (D[10] = et),
            (D[11] = l))
          : (l = D[11]),
        D[12] !== c || D[13] !== l
          ? ((p = (0, t.jsxs)("header", { className: "flex flex-col items-start gap-3", children: [r, c, l] })),
            (D[12] = c),
            (D[13] = l),
            (D[14] = p))
          : (p = D[14]),
        D[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, t.jsx)(d.A, { ...ea.details })), (D[15] = u))
          : (u = D[15]),
        D[16] !== en
          ? ((g = (0, t.jsx)(O.E, { variant: "neutral", children: (0, t.jsx)(d.A, { ...en }) })),
            (D[16] = en),
            (D[17] = g))
          : (g = D[17]),
        D[18] !== q.bioagentsApplicationReference
          ? ((h = (0, t.jsx)(J, {
              label: ea.reference,
              children: (0, t.jsx)("span", {
                className: "font-mono text-xs break-all",
                children: q.bioagentsApplicationReference,
              }),
            })),
            (D[18] = q.bioagentsApplicationReference),
            (D[19] = h))
          : (h = D[19]),
        D[20] !== B
          ? ((m = B && (0, t.jsx)(J, { label: ea.primaryContact, children: B })), (D[20] = B), (D[21] = m))
          : (m = D[21]),
        D[22] !== U
          ? ((f = U && (0, t.jsx)(J, { label: ea.contactEmail, children: U })), (D[22] = U), (D[23] = f))
          : (f = D[23]),
        D[24] !== W
          ? ((v = (0, t.jsx)(J, {
              label: H.summaryOrganization,
              children: (0, t.jsx)(d.A, { ...ea.organizationIdentity, values: W }),
            })),
            (D[24] = W),
            (D[25] = v))
          : (v = D[25]),
        D[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, t.jsx)(J, {
              label: ea.verification,
              children: (0, t.jsx)(d.A, { ...ea.verificationDuringReview }),
            })),
            (D[26] = _))
          : (_ = D[26]),
        D[27] !== V.products || D[28] !== Q)
      ) {
        let e, a
        ;(D[30] !== V.products
          ? ((e = (e) => {
              let { id: a } = e
              return V.products.includes(a)
            }),
            (D[30] = V.products),
            (D[31] = e))
          : (e = D[31]),
          D[32] !== Q
            ? ((a = (e) => {
                let { title: a } = e
                return Q.formatMessage(a)
              }),
              (D[32] = Q),
              (D[33] = a))
            : (a = D[33]),
          (b = Q.formatList(Y.filter(e).map(a))),
          (D[27] = V.products),
          (D[28] = Q),
          (D[29] = b))
      } else b = D[29]
      if (
        (D[34] !== b
          ? ((y = (0, t.jsx)(J, { label: H.requestedAccess, children: b })), (D[34] = b), (D[35] = y))
          : (y = D[35]),
        D[36] !== V.researchScopes || D[37] !== Q)
      ) {
        let e, a
        ;(D[39] !== V.researchScopes
          ? ((e = (e) => {
              let { id: a } = e
              return V.researchScopes.includes(a)
            }),
            (D[39] = V.researchScopes),
            (D[40] = e))
          : (e = D[40]),
          D[41] !== Q
            ? ((a = (e) => {
                let { title: a } = e
                return Q.formatMessage(a)
              }),
              (D[41] = Q),
              (D[42] = a))
            : (a = D[42]),
          (A = Q.formatList(K.filter(e).map(a))),
          (D[36] = V.researchScopes),
          (D[37] = Q),
          (D[38] = A))
      } else A = D[38]
      return (
        D[43] !== A
          ? ((x = (0, t.jsx)(J, { label: H.summaryScope, children: A })), (D[43] = A), (D[44] = x))
          : (x = D[44]),
        D[45] !== V.primaryCountry || D[46] !== ee
          ? ((P = ee(V.primaryCountry)), (D[45] = V.primaryCountry), (D[46] = ee), (D[47] = P))
          : (P = D[47]),
        D[48] !== P
          ? ((T = (0, t.jsx)(J, { label: H.summaryPrimaryLocation, children: P })), (D[48] = P), (D[49] = T))
          : (T = D[49]),
        D[50] !== V.additionalLocations
          ? ((R = "no" === V.additionalLocations && (0, t.jsx)(d.A, { ...H.none })),
            (D[50] = V.additionalLocations),
            (D[51] = R))
          : (R = D[51]),
        D[52] !== V.additionalLocations
          ? ((I = "unsure" === V.additionalLocations && (0, t.jsx)(d.A, { ...ea.unconfirmedLocations })),
            (D[52] = V.additionalLocations),
            (D[53] = I))
          : (I = D[53]),
        D[54] !== V.additionalCountries || D[55] !== V.additionalLocations || D[56] !== ee || D[57] !== Q
          ? ((w = "yes" === V.additionalLocations && Q.formatList((V.additionalCountries ?? []).map(ee))),
            (D[54] = V.additionalCountries),
            (D[55] = V.additionalLocations),
            (D[56] = ee),
            (D[57] = Q),
            (D[58] = w))
          : (w = D[58]),
        D[59] !== R || D[60] !== I || D[61] !== w
          ? ((S = (0, t.jsxs)(J, { label: H.summaryAdditionalLocations, children: [R, I, w] })),
            (D[59] = R),
            (D[60] = I),
            (D[61] = w),
            (D[62] = S))
          : (S = D[62]),
        D[63] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, t.jsx)(J, { label: ea.safeguards, children: (0, t.jsx)(d.A, { ...ea.safeguardsConfirmed }) })),
            (D[63] = C))
          : (C = D[63]),
        D[64] !== Q || D[65] !== ei
          ? ((z =
              ei.length > 0 &&
              (0, t.jsx)(J, {
                label: ea.safeguardsInPlace,
                children: Q.formatList(
                  Z.filter((e) => {
                    let { id: a } = e
                    return ei.includes(a)
                  }).map((e) => {
                    let { title: a } = e
                    return Q.formatMessage(a)
                  }),
                ),
              })),
            (D[64] = Q),
            (D[65] = ei),
            (D[66] = z))
          : (z = D[66]),
        D[67] !== V.otherSafeguardDetails || D[68] !== ei
          ? ((k =
              ei.includes("other") &&
              V.otherSafeguardDetails &&
              (0, t.jsx)(J, { label: ea.otherSafeguards, children: V.otherSafeguardDetails })),
            (D[67] = V.otherSafeguardDetails),
            (D[68] = ei),
            (D[69] = k))
          : (k = D[69]),
        D[70] !== V.researchPurpose
          ? ((E = (0, t.jsx)(J, {
              label: H.researchPurposeSummary,
              children: (0, t.jsx)("p", { className: "whitespace-pre-wrap", children: V.researchPurpose }),
            })),
            (D[70] = V.researchPurpose),
            (D[71] = E))
          : (E = D[71]),
        D[72] !== X ||
        D[73] !== g ||
        D[74] !== h ||
        D[75] !== m ||
        D[76] !== f ||
        D[77] !== v ||
        D[78] !== y ||
        D[79] !== x ||
        D[80] !== T ||
        D[81] !== S ||
        D[82] !== z ||
        D[83] !== k ||
        D[84] !== E
          ? ((G = (0, t.jsxs)(L.e, {
              title: u,
              trailing: g,
              footer: X,
              children: [h, m, f, v, _, y, x, T, S, C, z, k, E],
            })),
            (D[72] = X),
            (D[73] = g),
            (D[74] = h),
            (D[75] = m),
            (D[76] = f),
            (D[77] = v),
            (D[78] = y),
            (D[79] = x),
            (D[80] = T),
            (D[81] = S),
            (D[82] = z),
            (D[83] = k),
            (D[84] = E),
            (D[85] = G))
          : (G = D[85]),
        D[86] !== $ || D[87] !== G || D[88] !== p
          ? ((M = (0, t.jsxs)("section", {
              className: "flex flex-col gap-6 text-sm text-default",
              "aria-live": "polite",
              children: [p, $, G],
            })),
            (D[86] = $),
            (D[87] = G),
            (D[88] = p),
            (D[89] = M))
          : (M = D[89]),
        M
      )
    }
    let et = (0, q.YK)({
        expiredVerificationTitle: {
          id: "chatgpt.rosalind_access.tracking.action.expired_verification.title",
          defaultMessage: "Your organization verification expired",
          description:
            "Heading inside the action-required panel on the GPT-Rosalind application status page when an organization's Persona business-verification inquiry has expired and cannot be resumed.",
        },
        expiredVerificationDescription: {
          id: "chatgpt.rosalind_access.tracking.action.expired_verification.description",
          defaultMessage:
            "Cancel this application and start a new one to complete your organization's business verification.",
          description:
            "Explanation inside the GPT-Rosalind application status page's action-required panel when an expired business-verification inquiry requires an authorized organization member to cancel the current application and submit a new one.",
        },
        expiredVerificationUnauthorizedDescription: {
          id: "chatgpt.rosalind_access.tracking.action.expired_verification.description.unauthorized",
          defaultMessage:
            "Your organization's verification expired. Ask an authorized organization administrator to cancel this application and submit a new one.",
          description:
            "Explanation inside the authenticated GPT-Rosalind application status page's expired business-verification action panel when the signed-in organization member is not authorized to cancel the active application. Instructs them to contact an authorized organization administrator; it never implies the viewer can cancel or resubmit the application.",
        },
        expiredVerificationButton: {
          id: "chatgpt.rosalind_access.tracking.action.expired_verification.button.label",
          defaultMessage: "Review application options",
          description:
            "Button in the GPT-Rosalind application status page's expired-verification action panel that opens the existing authenticated application page, where an authorized member can review cancellation and reapplication options. Clicking does not itself cancel an application.",
        },
        organizationVerificationTitle: {
          id: "chatgpt.rosalind_access.tracking.action.organization_verification.title",
          defaultMessage: "Complete Persona verification",
          description:
            "Heading inside the authenticated GPT-Rosalind application status page's action-required panel when the applicant must finish their organization's business verification with Persona, the identity-verification provider. Keep the Persona brand name unchanged.",
        },
        organizationVerificationDescription: {
          id: "chatgpt.rosalind_access.tracking.action.organization_verification.email.description",
          defaultMessage: "Please go to your email to continue with Persona.",
          description:
            "Instructions inside the authenticated GPT-Rosalind application status page's action-required panel when the applicant must complete or continue their organization's business verification with Persona. Directs the applicant to their email without presenting a separate verification button or implying verification has already passed.",
        },
        additionalInformationTitle: {
          id: "chatgpt.rosalind_access.tracking.action.additional_information.title",
          defaultMessage: "Complete application information",
          description:
            "Heading inside the authenticated GPT-Rosalind application status page's action-required panel when an authorized reviewer identifies missing or incomplete organization application information and requires a complete replacement application.",
        },
        additionalInformationDescription: {
          id: "chatgpt.rosalind_access.tracking.action.additional_information.description",
          defaultMessage:
            "Some application information is missing or incomplete. Cancel this application, then submit a new application with the complete information.",
          description:
            "Explanation inside the authenticated GPT-Rosalind application status page's missing-information action panel for a member authorized to cancel the current application. Clearly explains that resubmission requires canceling the current case first, then creating a separate complete application; it does not claim that an active case can be edited or directly resubmitted.",
        },
        additionalInformationUnauthorizedDescription: {
          id: "chatgpt.rosalind_access.tracking.action.additional_information.description.unauthorized",
          defaultMessage:
            "Some application information is missing or incomplete. Ask an authorized organization member to cancel this application and submit a new one.",
          description:
            "Explanation inside the authenticated GPT-Rosalind application status page's missing-information action panel when the signed-in organization member is not authorized to cancel the active application. Instructs them to contact an authorized organization member; it never implies the viewer can cancel, edit, or directly resubmit the case.",
        },
        additionalInformationButton: {
          id: "chatgpt.rosalind_access.tracking.action.additional_information.button.cancel_and_reapply.label",
          defaultMessage: "Cancel and reapply",
          description:
            "Short primary button label in the authenticated GPT-Rosalind application status page's missing-information action panel, shown only to an organization member authorized to cancel the existing case. Opens the same-page irreversible cancellation confirmation for that exact organization and application; only after explicit confirmation and successful cancellation can the member start a separate complete application.",
        },
        enterpriseAgreementTitle: {
          id: "chatgpt.rosalind_access.tracking.action.enterprise_agreement.required.title",
          defaultMessage: "Enterprise agreement required",
          description:
            "Heading inside the authenticated GPT-Rosalind application-status page's action-required panel when an organization requested the optional Enhanced Privacy upgrade and must complete an Enterprise agreement before access can be granted.",
        },
        enterpriseAgreementDescription: {
          id: "chatgpt.rosalind_access.tracking.action.enterprise_agreement.required.description",
          defaultMessage:
            "Your organization must sign an Enterprise agreement and receive OpenAI approval before access can be granted.",
          description:
            "Explanation inside the authenticated GPT-Rosalind application-status page's action-required panel when an organization requested Enhanced Privacy. Clearly states that an Enterprise agreement must be signed and OpenAI approval is required before access can be granted; it does not imply that the upgrade is active or that an agreement-signing provider is available.",
        },
        enterpriseAgreementButton: {
          id: "chatgpt.rosalind_access.tracking.action.enterprise_agreement.button.label",
          defaultMessage: "Review and sign forms",
          description:
            "Short disabled button label inside the GPT-Rosalind application-status page's Enhanced Privacy Enterprise-agreement action panel. The button remains disabled until a genuine authenticated agreement-signing integration exists; it must not imply that the organization can sign documents or gain access today.",
        },
        genericActionTitle: {
          id: "chatgpt.rosalind_access.tracking.action.other.title",
          defaultMessage: "Additional action required",
          description:
            "Fallback heading inside the GPT-Rosalind application status page's action-required panel when the backend supplies a valid applicant-owned action code that does not yet have a dedicated customer-facing presentation.",
        },
        genericActionDescription: {
          id: "chatgpt.rosalind_access.tracking.action.other.description",
          defaultMessage: "Next step: {action}",
          description:
            "Fallback explanation inside the GPT-Rosalind application status page's action-required panel for an applicant-owned action without a dedicated presentation. Placeholder {action} is the backend-authorized action code rendered with spaces instead of underscores.",
        },
      }),
      en = {
        cancel_and_reapply_persona_verification: {
          title: et.expiredVerificationTitle,
          description: et.expiredVerificationDescription,
        },
        complete_organization_verification: {
          title: et.organizationVerificationTitle,
          description: et.organizationVerificationDescription,
        },
        provide_organization_verification: {
          title: et.organizationVerificationTitle,
          description: et.organizationVerificationDescription,
        },
        provide_additional_information: {
          title: et.additionalInformationTitle,
          description: et.additionalInformationDescription,
        },
        sign_enterprise_zdr_agreement: {
          title: et.enterpriseAgreementTitle,
          description: et.enterpriseAgreementDescription,
          buttonLabel: et.enterpriseAgreementButton,
        },
      }
    function es(e) {
      if (
        "action_required" !== e.state ||
        "applicant" !== e.actionOwner ||
        void 0 === e.requiredAction ||
        "upload_verification_documents" === e.requiredAction
      )
        return
      if (!Object.hasOwn(en, e.requiredAction))
        return {
          title: et.genericActionTitle,
          description: et.genericActionDescription,
          descriptionValues: { action: e.requiredAction.replaceAll("_", " ") },
        }
      let a = en[e.requiredAction]
      if ("sign_enterprise_zdr_agreement" !== e.requiredAction || "research_zdr" === e.requestedResearchMode)
        return "provide_additional_information" === e.requiredAction
          ? e.canCancel
            ? { ...a, buttonLabel: et.additionalInformationButton }
            : { ...a, description: et.additionalInformationUnauthorizedDescription }
          : "cancel_and_reapply_persona_verification" === e.requiredAction
            ? e.canCancel
              ? { ...a, buttonLabel: et.expiredVerificationButton, href: "/rosalind/application" }
              : { ...a, description: et.expiredVerificationUnauthorizedDescription }
            : a
    }
    var er = i("ZtSy")
    function eo(e) {
      let { provisioningApproval: a, provisioningPricing: i } = e
      return (
        null != a &&
        null != i &&
        (a.pricingVersion === i.pricingVersion ||
          (!1 === e.canApproveProvisioning &&
            !0 === a.acceptedResearchTerms &&
            "rosalind-provisioning-no-separate-charge-v1" === a.pricingVersion &&
            "rosalind-provisioning-agreement-pricing-v1" === i.pricingVersion &&
            "final" === i.pricingStatus &&
            i.separateCharge)) &&
        a.requestedResearchMode === i.requestedResearchMode &&
        a.pricingStatus === i.pricingStatus &&
        a.researchTermsVersion === e.researchTermsVersion &&
        (!0 !== e.requiresInternalApiAcknowledgement || !0 === a.acceptedInternalApiOnly)
      )
    }
    let ec = (0, q.YK)({
        decisionStage: {
          id: "chatgpt.rosalind_access.tracking.progress.decision.label",
          defaultMessage: "Decision",
          description:
            "Label for the decision stage of the Rosalind application tracker; a decision does not mean access has been provisioned",
        },
        submittedStatus: {
          id: "chatgpt.rosalind_access.application.status.submitted.label",
          defaultMessage: "Submitted",
          description:
            "Short application-status badge shown when a GPT-Rosalind application has been submitted successfully but business verification and suitability review have not started. Submission does not grant product access.",
        },
        actionRequiredStatus: {
          id: "chatgpt.rosalind_access.application.status.action_required.label",
          defaultMessage: "Action required",
          description:
            "Short GPT-Rosalind application-status badge shown when the applicant or an authorized reviewer must complete an assigned action before the organization's access application can proceed.",
        },
        approvedStatus: {
          id: "chatgpt.rosalind_access.application.status.approved.label",
          defaultMessage: "Approved",
          description:
            "Short GPT-Rosalind application-status badge shown after business verification and suitability have been approved but before organization-wide product access has been granted.",
        },
        accessGrantedStatus: {
          id: "chatgpt.rosalind_access.application.status.access_granted.label",
          defaultMessage: "Access granted",
          description:
            "Short GPT-Rosalind application-status badge shown only after the approved organization's product access has actually been provisioned.",
        },
        accessRevokedStatus: {
          id: "chatgpt.rosalind_access.application.status.access_revoked.label",
          defaultMessage: "Access revoked",
          description:
            "Short GPT-Rosalind application-status badge shown when previously provisioned product access has subsequently been revoked for the organization.",
        },
        deniedStatus: {
          id: "chatgpt.rosalind_access.application.status.denied.label",
          defaultMessage: "Denied",
          description:
            "Short GPT-Rosalind application-status badge shown when an authorized reviewer has issued a final decision denying an organization's request for access. This status means access was not granted.",
        },
        canceledStatus: {
          id: "chatgpt.rosalind_access.application.status.canceled.label",
          defaultMessage: "Canceled",
          description:
            "Short application-status badge displayed when the signed-in researcher selects an organization whose latest GPT-Rosalind access application was permanently canceled. A canceled application cannot be restored, but an eligible organization can submit a separate new application.",
        },
        statusSubmittedHeadline: {
          id: "chatgpt.rosalind_access.tracking.status.submitted.heading",
          defaultMessage: "Application received",
          description:
            "Reassuring headline on the authenticated GPT-Rosalind organization application-status page when the submitted application has been received but review has not started. Receiving an application does not approve or grant access.",
        },
        statusSubmittedDescription: {
          id: "chatgpt.rosalind_access.tracking.status.submitted.description",
          defaultMessage: "Your organization’s application has been submitted and is awaiting review.",
          description:
            "Supporting explanation on the authenticated GPT-Rosalind organization application-status page when a real application has been submitted and is waiting for review. This message must not imply approval, access, or a guaranteed review timeframe.",
        },
        statusInProgressHeadline: {
          id: "chatgpt.rosalind_access.tracking.status.in_progress.heading",
          defaultMessage: "Your application is under review",
          description:
            "Reassuring headline on the authenticated GPT-Rosalind organization application-status page while business verification, suitability checks, or employee review are in progress. It does not mean access has been approved or granted.",
        },
        statusInProgressDescription: {
          id: "chatgpt.rosalind_access.tracking.status.in_progress.description",
          defaultMessage:
            "We’re reviewing your organization and application details. No action is required from you right now.",
          description:
            "Reassuring explanation on the authenticated GPT-Rosalind organization application-status page while authorized internal review is underway. Clearly tells the researcher they have no action to complete right now; applicant-owned next steps are shown only in the separate action-required state.",
        },
        statusInReviewBadge: {
          id: "chatgpt.rosalind_access.tracking.status.in_progress.badge",
          defaultMessage: "In review",
          description:
            "Short status badge on the authenticated GPT-Rosalind organization application-tracking page while authorized internal review is underway and the applicant has no action to complete. Reviewer-owned actions remain private and use this same customer-facing badge.",
        },
        statusActionRequiredHeadline: {
          id: "chatgpt.rosalind_access.tracking.status.action_required.heading",
          defaultMessage: "Action needed to continue",
          description:
            "Clear, gently urgent headline on the authenticated GPT-Rosalind organization application-status page when the signed-in applicant has an authorized next step to complete. Actions assigned only to an internal reviewer do not display this headline.",
        },
        statusActionRequiredDescription: {
          id: "chatgpt.rosalind_access.tracking.status.action_required.description",
          defaultMessage: "Complete the requested next step so your organization’s application can move forward.",
          description:
            "Supporting instructions on the authenticated GPT-Rosalind organization application-status page when an applicant-owned action is required. The precise authorized action appears separately; this message does not imply access will be granted.",
        },
        statusApprovedHeadline: {
          id: "chatgpt.rosalind_access.tracking.status.approved.heading",
          defaultMessage: "Your application has been approved",
          description:
            "Positive headline on the authenticated GPT-Rosalind organization application-status page after an authorized reviewer approves the application. Approval is distinct from actual product-access provisioning.",
        },
        statusApprovedDescription: {
          id: "chatgpt.rosalind_access.tracking.status.approved.description",
          defaultMessage:
            "Your organization has been approved. Access is not available until provisioning is complete.",
          description:
            "Supporting explanation on the authenticated GPT-Rosalind organization application-status page after application approval but before access is granted. Clearly distinguishes reviewer approval from the separate, unfinished access-provisioning step.",
        },
        statusAccessGrantedHeadline: {
          id: "chatgpt.rosalind_access.tracking.status.access_granted.heading",
          defaultMessage: "Your organization now has access",
          description:
            "Celebratory headline on the authenticated GPT-Rosalind organization application-status page shown only after organization-wide product access has actually been provisioned. This must never appear for mere application approval.",
        },
        statusAccessGrantedDescription: {
          id: "chatgpt.rosalind_access.tracking.status.access_granted.description",
          defaultMessage: "GPT-Rosalind access has been granted to your organization.",
          description:
            "Supporting confirmation on the authenticated GPT-Rosalind organization application-status page after an authoritative provisioning receipt establishes that the organization has real product access.",
        },
        statusDeniedHeadline: {
          id: "chatgpt.rosalind_access.tracking.status.denied.heading",
          defaultMessage: "Application not approved",
          description:
            "Calm, customer-safe headline on the authenticated GPT-Rosalind organization application-status page when an authorized reviewer issues a final denial. Do not imply a future retry, disclose internal decision reasons, or suggest that access was granted.",
        },
        statusDeniedDescription: {
          id: "chatgpt.rosalind_access.tracking.status.denied.description",
          defaultMessage: "Your organization’s application was not approved. Access has not been granted.",
          description:
            "Customer-safe explanation on the authenticated GPT-Rosalind organization application-status page after a final denial. Confirms access was not granted without exposing internal policy findings, reviewer identities, or sensitive denial reasons.",
        },
        statusRevokedHeadline: {
          id: "chatgpt.rosalind_access.tracking.status.revoked.heading",
          defaultMessage: "Access has been revoked",
          description:
            "Clear, customer-safe headline on the authenticated GPT-Rosalind organization application-status page after previously provisioned organization-wide access is revoked. This state differs from an application that was denied before access existed.",
        },
        statusRevokedDescription: {
          id: "chatgpt.rosalind_access.tracking.status.revoked.description",
          defaultMessage: "GPT-Rosalind access previously granted to your organization is no longer available.",
          description:
            "Customer-safe explanation on the authenticated GPT-Rosalind organization application-status page when an existing access grant has been revoked. Confirms access is no longer available without exposing internal policy findings or reviewer identities.",
        },
        statusCanceledHeadline: {
          id: "chatgpt.rosalind_access.tracking.status.canceled.heading",
          defaultMessage: "Application canceled",
          description:
            "Neutral headline on the authenticated GPT-Rosalind organization application-status page when the organization's latest application has been permanently canceled. A canceled application cannot be restored.",
        },
        statusCanceledDescription: {
          id: "chatgpt.rosalind_access.tracking.status.canceled.description",
          defaultMessage:
            "This application was permanently canceled. Your organization can start a new application if eligible.",
          description:
            "Supporting explanation on the authenticated GPT-Rosalind organization application-status page after an irreversible cancellation. Clarifies that the old case cannot be restored and that a separate new application depends on the organization's eligibility.",
        },
        statusProvisioningApprovalHeading: {
          id: "chatgpt.rosalind_access.tracking.approved.provisioning.heading",
          defaultMessage: "Approve access provisioning",
          description:
            "Heading of the final approval panel on the authenticated GPT-Rosalind application-status page after an internal reviewer approves the application. The backend independently verifies the signer as an organization owner, organization administrator, or Global Admin of the Enterprise tenant linked to that organization. Approval is a separate prerequisite for provisioning and does not itself mean access has already been granted.",
        },
        statusProvisioningApprovalReceivedHeading: {
          id: "chatgpt.rosalind_access.tracking.approved.provisioning.received.heading",
          defaultMessage: "Provisioning approval received",
          description:
            "Reassuring heading on the authenticated GPT-Rosalind application-status page after a verified organization owner or administrator durably confirms provisioning and accepts the current research-pricing policy. This receipt does not mean product access has been provisioned.",
        },
        statusProvisioningApprovalReceivedDescription: {
          id: "chatgpt.rosalind_access.tracking.approved.provisioning.received.description",
          defaultMessage:
            "Your organization’s approval has been recorded. You do not have access yet. No action is required while access provisioning is pending.",
          description:
            "Reassuring confirmation shown to every authorized organization member on the authenticated GPT-Rosalind application-status page after a verified owner or administrator accepts the current provisional or final research-pricing policy. The approval is durably recorded and no immediate action is required, but product access has not been granted and access provisioning remains pending.",
        },
        statusProvisioningApprovalAdministratorRequired: {
          id: "chatgpt.rosalind_access.tracking.approved.provisioning.organization_workspace_or_tenant_administrator_required.description",
          defaultMessage:
            "An organization owner or administrator, an Enterprise Global Admin, or an eligible Business workspace owner or administrator must accept the GPT-Rosalind Terms, confirm provisioning, and acknowledge the current pricing notice before access can be granted.",
          description:
            "Explanation shown to an authenticated GPT-Rosalind application-status viewer after reviewer approval when the backend has not independently authorized that viewer to sign for the selected organization. An organization owner or administrator, Global Admin of the Enterprise tenant linked to that exact organization, or owner or administrator of an eligible self-serve Business organization's sole verified workspace must accept the GPT-Rosalind Terms, confirm provisioning, and acknowledge the current pricing notice. Enterprise Global Admin is the tenant-wide administrative role. Business workspace authority applies only to the eligible sole-workspace case; other workspace roles, application-submission permission, and cancellation permission alone do not grant approval authority. Informational paragraph with no placeholders.",
        },
        statusProvisioningApprovalDescription: {
          id: "chatgpt.rosalind_access.tracking.approved.provisioning.legal_and_pricing_notice.description",
          defaultMessage:
            "Review the application, research terms, and current pricing notice before approving access for your organization.",
          description:
            "Instructions inside the authenticated GPT-Rosalind application-status page's final provisioning-approval panel for an independently verified organization owner or administrator. Explains that they must review the submitted application, agree to the GPT-Rosalind Terms and applicable Services Agreement, acknowledge the current pricing notice, and confirm access provisioning before real secure approval can be submitted.",
        },
        statusProvisioningNoSeparateCharge: {
          id: "chatgpt.rosalind_access.tracking.approved.provisioning.pricing.no_separate_charge.notice",
          defaultMessage:
            "GPT-Rosalind does not currently have a separate charge. We’ll notify your organization before any separate pricing takes effect.",
          description:
            "Current GPT-Rosalind pricing notice displayed during organization provisioning approval for either Standard Data Retention or Enhanced Privacy. Explains that no separate charge currently applies and the organization will be notified before any future separate pricing takes effect.",
        },
        statusProvisioningAgreementRates: {
          id: "codex.rosalind.provisioning.agreement_rates",
          defaultMessage:
            "GPT-Rosalind usage is subject to your organization’s pricing agreement and applicable rate card.",
          description: "Pricing notice for administrators reviewing the organization’s agreement-based pricing policy.",
        },
        statusProvisioningApprovalRates: {
          id: "codex.rosalind.provisioning.provisional_rates",
          defaultMessage: "GPT-Rosalind pricing is still to be confirmed.",
          description: "Pricing notice displayed before final rates are available.",
        },
        statusProvisioningLegalAttestation: {
          id: "chatgpt.rosalind_access.tracking.approved.provisioning.legal.attestation.current_and_future_accuracy.description",
          defaultMessage:
            "I have reviewed this application with due inquiry and reasonable diligence; it is accurate and complete to the best of my knowledge; I am authorized to bind my organization and have all required internal approvals; and I will immediately notify OpenAI in writing if any information is or becomes inaccurate or incomplete. The GPT-Rosalind Terms are incorporated into our existing signed services agreement or, if none exists, the {servicesAgreement}.",
          description:
            "Complete legal attestation shown only to an independently verified organization owner or administrator in the authenticated GPT-Rosalind application-status provisioning-approval panel. Confirms application diligence and accuracy, authority and internal approvals to bind the organization, immediate written notice of existing or future inaccuracies, and incorporation of GPT-Rosalind Terms into an existing signed services agreement or, only when none exists, the fallback OpenAI Services Agreement. Placeholder {servicesAgreement} is an accessible external link to the official OpenAI Services Agreement.",
        },
        statusProvisioningServicesAgreementLink: {
          id: "chatgpt.rosalind_access.tracking.approved.provisioning.legal.services_agreement.link.label",
          defaultMessage: "OpenAI Services Agreement",
          description:
            "Accessible external-link label opening the official OpenAI Services Agreement from the legal attestation in the authenticated GPT-Rosalind application-status provisioning-approval panel. An independently verified organization owner or administrator reads this fallback agreement when the organization has no existing signed services agreement. Short legal document title.",
        },
        statusProvisioningApprovalConfirmation: {
          id: "chatgpt.rosalind_access.tracking.approved.provisioning.confirmation.provisioning.label",
          defaultMessage: "I confirm that GPT-Rosalind access should be provisioned for this organization.",
          description:
            "First mandatory consent checkbox in the authenticated GPT-Rosalind application-status page's final provisioning-approval panel. An independently verified organization owner or administrator confirms their organization should receive product access; selecting this checkbox alone never provisions access or submits approval.",
        },
        statusProvisioningNoSeparateChargeAcknowledgement: {
          id: "chatgpt.rosalind_access.tracking.approved.provisioning.pricing.no_separate_charge.acknowledgement.label",
          defaultMessage:
            "I understand that GPT-Rosalind does not currently have a separate charge and that my organization will be notified before any separate pricing takes effect.",
          description:
            "Required organization-owner-or-administrator acknowledgment of the current GPT-Rosalind pricing notice. Confirms understanding that there is currently no separate charge and that the organization will be notified before any future separate pricing takes effect; accepting this notice preserves the existing secure provisioning approval contract.",
        },
        statusProvisioningAgreementPricingAcknowledgement: {
          id: "chatgpt.rosalind_access.tracking.approved.provisioning.pricing.agreement.acknowledgement.label",
          defaultMessage:
            "I acknowledge that GPT-Rosalind usage is subject to my organization’s applicable pricing and billing terms.",
          description:
            "Required pricing acknowledgment checkbox for a verified organization owner or administrator in the GPT-Rosalind final provisioning-approval panel when the server supplies the agreement-based pricing policy. Acknowledges the organization's applicable pricing and billing terms without asserting a universal rate or that every organization is charged. Separate checkboxes confirm provisioning and accept the legal terms. No placeholders.",
        },
        statusProvisioningApprovalFinalRatesConfirmation: {
          id: "codex.rosalind.provisioning.final_rates_consent",
          defaultMessage: "I accept the GPT-Rosalind rates shown above.",
          description: "Required administrator consent to the displayed final rates.",
        },
        statusProvisioningApprovalRatesConfirmation: {
          id: "codex.rosalind.provisioning.provisional_rates_consent",
          defaultMessage: "I acknowledge that final GPT-Rosalind pricing is still to be confirmed.",
          description: "Required administrator acknowledgement when pricing is provisional.",
        },
        statusProvisioningResearchTermsAgreement: {
          id: "chatgpt.rosalind_access.tracking.approved.provisioning.legal.attestation_and_agreements.label",
          defaultMessage:
            "I certify the statements above and agree to the {researchTerms} and the applicable {servicesAgreement}.",
          description:
            "Mandatory legal-agreement checkbox shown only to an independently verified organization owner or administrator in the authenticated GPT-Rosalind application-status provisioning-approval panel. Selecting this single checkbox certifies the preceding application-accuracy and organizational-authority statements and explicitly accepts both applicable agreements; an existing signed services agreement takes precedence over the linked fallback, and approval still requires separate pricing and provisioning confirmations. Placeholder {researchTerms} is an accessible external link to the official GPT-Rosalind Terms PDF. Placeholder {servicesAgreement} is a separate accessible external link to the OpenAI Services Agreement used when no signed services agreement already governs.",
        },
        statusProvisioningResearchTermsLink: {
          id: "chatgpt.rosalind_access.tracking.approved.provisioning.legal.terms.link.label",
          defaultMessage: "GPT-Rosalind Terms",
          description:
            "Accessible external-link label opening the official GPT-Rosalind Terms PDF from the mandatory organization-owner-or-administrator agreement checkbox on the authenticated GPT-Rosalind application-status provisioning-approval panel. Short legal document title.",
        },
        statusProvisioningApplicableServicesAgreementLink: {
          id: "chatgpt.rosalind_access.tracking.approved.provisioning.legal.applicable_services_agreement.link.label",
          defaultMessage: "Services Agreement",
          description:
            "Short accessible external-link label embedded in the mandatory GPT-Rosalind provisioning legal-agreement checkbox for an independently verified organization owner or administrator. The link opens the OpenAI Services Agreement, which applies only when the organization does not already have a signed governing services agreement; a separate preceding attestation explains this precedence.",
        },
        statusProvisioningApprovalButton: {
          id: "chatgpt.rosalind_access.tracking.approved.provisioning.button.approve.label",
          defaultMessage: "Approve provisioning",
          description:
            "Short primary button label in the authenticated GPT-Rosalind application-status page's final provisioning-approval panel for an independently verified organization owner or administrator. The button becomes available only when the provisioning, pricing, and combined GPT-Rosalind Terms and Services Agreement consents are all selected and a genuine secure server-backed approval integration exists; approving is distinct from actually provisioning access.",
        },
        statusProvisioningApprovalUnavailable: {
          id: "chatgpt.rosalind_access.tracking.approved.provisioning.unavailable.description",
          defaultMessage:
            "Secure administrator approval is not available yet. Access cannot be granted until approval and provisioning are complete.",
          description:
            "Honest explanation beside the disabled final provisioning-approval button on the authenticated GPT-Rosalind application-status page when no real secure owner-or-administrator approval integration or applicable research-pricing mode is available. Makes clear that selecting local checkboxes does not submit, approve, or provision product access.",
        },
        statusProvisioningApprovalFailed: {
          id: "chatgpt.rosalind_access.tracking.approved.provisioning.error.submission_failed",
          defaultMessage: "We couldn’t submit your approval. Please try again.",
          description:
            "Recoverable error alert in the authenticated GPT-Rosalind final provisioning-approval panel when a genuine secure API-organization owner or administrator approval request fails. Reassuringly invites the administrator to retry while keeping the existing reviewer-approved application unchanged; it must not suggest that access was granted or provisioning succeeded.",
        },
        statusProvisioningApplicationReviewUnavailable: {
          id: "chatgpt.rosalind_access.tracking.approved.provisioning.application_review.unavailable.error",
          defaultMessage: "We couldn’t load the submitted application. Please try again.",
          description:
            "Recoverable error alert shown to an independently verified organization owner or administrator in the GPT-Rosalind final provisioning-approval panel when the submitted application cannot be retrieved. Explains that approval remains unavailable until the existing secure application request succeeds; it must not suggest that the application needs to be submitted again.",
        },
        statusProvisioningApplicationReviewRetry: {
          id: "chatgpt.rosalind_access.tracking.approved.provisioning.application_review.retry.button",
          defaultMessage: "Try again",
          description:
            "Short recovery button label in the GPT-Rosalind final provisioning-approval panel for an independently verified organization owner or administrator after the submitted application fails to load. Selecting it retries the existing authenticated application request without creating another application or granting product access.",
        },
        statusProvisioningPricingLinks: {
          id: "chatgpt.rosalind_access.tracking.approved.provisioning.pricing.agreement.links.description",
          defaultMessage: "Review the {chatgptRateCard} and {apiPricing} for details.",
          description:
            "Informational paragraph below the authoritative final pricing notice in the GPT-Rosalind provisioning-approval panel, shown to a verified organization owner or administrator when the server supplies the agreement-based pricing policy. The {chatgptRateCard} placeholder is a link labeled ChatGPT rate card covering ChatGPT and Codex pricing, and {apiPricing} is a link labeled API pricing page. Both links open in a new tab and are always present; the organization's applicable agreement determines its pricing and billing terms.",
        },
        applicationDetailsVisualHeading: {
          id: "chatgpt.rosalind_access.review.summary.visual_heading",
          defaultMessage: "Application details",
          description: "Concise visible heading inside the compact GPT-Rosalind application-review summary card.",
        },
        resumeBusinessVerification: {
          id: "chatgpt.rosalind_access.verification.resume.button",
          defaultMessage: "Resume business verification",
          description:
            "Short primary action button shown on the GPT-Rosalind application confirmation or an existing organization's application when its business verification is incomplete. Opens the same authenticated Persona business-verification inquiry without creating, canceling, or resubmitting the application.",
        },
        resumingBusinessVerification: {
          id: "chatgpt.rosalind_access.verification.resume.pending.button",
          defaultMessage: "Opening business verification…",
          description:
            "Temporary short primary-button label shown on the GPT-Rosalind application confirmation or an existing organization's application while the authenticated service retrieves a one-time Persona session for its existing business-verification inquiry.",
        },
        businessVerificationUnavailable: {
          id: "chatgpt.rosalind_access.verification.unavailable.error",
          defaultMessage: "Business verification is temporarily unavailable. Please try again.",
          description:
            "Privacy-safe error shown to a signed-in GPT-Rosalind applicant when the existing business-verification inquiry cannot be opened or resumed. The application is retained, and the applicant can retry without creating a replacement inquiry.",
        },
        cancelApplication: {
          id: "chatgpt.rosalind_access.cancellation.action.button",
          defaultMessage: "Cancel application",
          description:
            "Button on the GPT-Rosalind organization selection or submission confirmation screen that opens an explicit irreversible cancellation confirmation for one existing organization application. Short button label.",
        },
        cancellationComplete: {
          id: "chatgpt.rosalind_access.cancellation.success.notice",
          defaultMessage: "Application canceled. You can submit a new application for this organization.",
          description:
            "Confirmation notice displayed after the authenticated GPT-Rosalind backend permanently cancels one application. Explains that the organization can now create a separate new application; the canceled application is not restored.",
        },
        applicationStatusUnavailable: {
          id: "chatgpt.rosalind_access.tracking.application.history.unavailable.error",
          defaultMessage: "We couldn’t check your application status. Please try again.",
          description:
            "Privacy-safe error shown on the GPT-Rosalind application-status page when the signed-in researcher's selected-organization application history cannot be retrieved. Explains that the application-status check failed and can be retried without implying that the researcher lacks an application.",
        },
        retryOrganizationLookup: {
          id: "chatgpt.rosalind_access.organization.selection.lookup_unavailable.retry_button",
          defaultMessage: "Retry loading organizations",
          description:
            "Short button label on the first GPT-Rosalind application step that reloads the page to retry retrieving every OpenAI organization associated with the signed-in account after a temporary lookup failure.",
        },
        noAccessGranted: {
          id: "chatgpt.rosalind_access.confirmation.access.notice",
          defaultMessage: "Submission does not grant access.",
          description:
            "Safety notice on the real application confirmation screen explaining that receiving an application does not authorize use of GPT-Rosalind.",
        },
        confirmationReferenceLabel: {
          id: "chatgpt.rosalind_access.confirmation.application_reference.heading",
          defaultMessage: "Application reference",
          description: "Label for the actual backend-issued reference on a confirmed GPT-Rosalind application.",
        },
        requestedAccess: {
          id: "chatgpt.rosalind_access.review.summary.requested_access.label",
          defaultMessage: "Requested access",
          description:
            "Summary row label for the selected ChatGPT, Codex, internal API, and external API product surfaces.",
        },
        researchPurposeSummary: {
          id: "chatgpt.rosalind_access.review.summary.research_purpose.label",
          defaultMessage: "Research purpose",
          description:
            "Summary row label displaying the applicant's own description of their scientific objective and expected research benefit.",
        },
        summaryScope: {
          id: "chatgpt.rosalind_access.review.summary.research_scope.label",
          defaultMessage: "Research scope",
          description:
            "Short summary-row label on the GPT-Rosalind application review screen for the applicant's selected pathogen-engineering, biological-toxin, high-containment wet-lab, gene-drive, or human or animal infection research categories, or none of those categories.",
        },
        summaryPrimaryLocation: {
          id: "chatgpt.rosalind_access.review.summary.primary_location.label",
          defaultMessage: "Primary access location",
          description: "Summary row label for the actual primary country or territory of GPT-Rosalind access.",
        },
        summaryAdditionalLocations: {
          id: "chatgpt.rosalind_access.review.summary.additional_locations.label",
          defaultMessage: "Additional countries or regions",
          description: "Summary row label for disclosed additional or uncertain GPT-Rosalind access countries.",
        },
        summarySafeguards: {
          id: "chatgpt.rosalind_access.review.summary.safeguards.label",
          defaultMessage: "Research safeguards",
          description:
            "Summary row label for the mandatory reasonable-research-safeguards attestation in a GPT-Rosalind application.",
        },
        safeguardsInPlace: {
          id: "chatgpt.rosalind_access.review.summary.safeguards_in_place.label",
          defaultMessage: "Safeguards in place",
          description:
            "Summary row label listing any optional existing research and security safeguards selected by the GPT-Rosalind applicant.",
        },
        otherSafeguardsSummary: {
          id: "chatgpt.rosalind_access.review.summary.other_safeguards.label",
          defaultMessage: "Other safeguards",
          description:
            "Summary row label for the applicant's conditional free-text description of other existing research and security safeguards.",
        },
        safeguardsConfirmed: {
          id: "chatgpt.rosalind_access.review.summary.safeguards.confirmed",
          defaultMessage: "Reasonable safeguards confirmed",
          description:
            "Application-summary value confirming that the applicant completed the mandatory proportionate research-safeguards attestation.",
        },
        none: {
          id: "chatgpt.rosalind_access.review.summary.none.label",
          defaultMessage: "None",
          description:
            "Short application-summary value indicating that the applicant reported no additional access locations.",
        },
        additionalLocationsUnconfirmed: {
          id: "chatgpt.rosalind_access.review.summary.additional_locations.unconfirmed",
          defaultMessage: "Not yet confirmed · policy review required",
          description:
            "Application-summary value shown when a GPT-Rosalind applicant does not yet know whether users will access the program from additional countries or territories. It explains that locations remain unconfirmed and require policy review without asking the applicant to identify countries.",
        },
        policyReviewRequired: {
          id: "chatgpt.rosalind_access.review.summary.policy_review_required.label",
          defaultMessage: "{locations} · policy review required",
          description:
            "Application-summary value for additional GPT-Rosalind access locations. The placeholder {locations} is a localized list of the countries or territories selected by the applicant.",
        },
        externalApi: {
          id: "chatgpt.rosalind_access.research.products.option.external_api.label",
          defaultMessage: "API · external applications",
          description:
            "Product selection card title for using the OpenAI API in life sciences applications intended for external users.",
        },
        statusUpdatedLabel: {
          id: "chatgpt.rosalind_access.tracking.timeline.status_updated.label",
          defaultMessage: "Last updated",
          description:
            "Short date-row label on the authenticated GPT-Rosalind organization application-status page. The adjacent localized date and time comes from the authoritative latest application-state update.",
        },
        pricingChatgptRateCardLink: {
          id: "chatgpt.rosalind_access.pricing.chatgpt_rate_card.link.label",
          defaultMessage: "ChatGPT rate card",
          description:
            "Short inline link label on the GPT-Rosalind application and final provisioning-approval pricing notice for applicants and organization administrators. Opens the official ChatGPT rate card in a new tab so readers can find the ChatGPT and Codex rates applicable to their organization's agreement. Appears alongside a separate API pricing link. No placeholders.",
        },
        pricingApiLink: {
          id: "chatgpt.rosalind_access.pricing.api.link.label",
          defaultMessage: "API pricing page",
          description:
            "Short inline link label on the GPT-Rosalind application and final provisioning-approval pricing notice for applicants and organization administrators. Opens the official OpenAI API pricing page in a new tab so readers can review published Rosalind API rates. Appears alongside a separate ChatGPT rate card link. No placeholders.",
        },
        regulatedMaterials: {
          id: "chatgpt.rosalind_access.research.scope.option.regulated_materials.label",
          defaultMessage: "Pathogens, toxins, or regulated biological materials",
          description:
            "Biosafety scope option indicating that the proposed GPT-Rosalind research may involve infectious agents, toxins, or regulated biological materials.",
        },
        wetLab: {
          id: "chatgpt.rosalind_access.research.scope.option.wet_lab.label",
          defaultMessage: "Wet-lab research",
          description:
            "Biosafety scope option for research involving physical laboratory experiments with biological materials.",
        },
      }),
      el = "https://openai.com/policies/services-agreement/"
    function ed(e) {
      let a,
        i,
        s,
        r,
        o,
        c,
        p,
        u,
        h,
        m = (0, n.c)(46),
        {
          application: f,
          pending: v,
          refreshing: _,
          error: b,
          onApprove: y,
          onRetry: A,
          showApplicationSummary: x,
        } = e,
        P = void 0 === x || x,
        [T, R] = (0, l.useState)(!1),
        [I, w] = (0, l.useState)(!1),
        [S, C] = (0, l.useState)(!1),
        [z, N] = (0, l.useState)(!1),
        j = (0, l.useId)(),
        { provisioningPricing: O, approvalSummary: L, requestedResearchMode: k } = f
      m[0] !== f ? ((i = eo(f)), (m[0] = f), (m[1] = i)) : (i = m[1])
      let E = i,
        G = !0 === f.canApproveProvisioning,
        M =
          G &&
          !E &&
          null != O &&
          null != L &&
          null != k &&
          O.requestedResearchMode === k &&
          L.requestedResearchMode === k &&
          null != f.researchTermsUrl &&
          null != f.researchTermsVersion,
        D = M && T && I && S && (!0 !== f.requiresInternalApiAcknowledgement || z) && !v && !_,
        q =
          O?.pricingStatus === "final" &&
          "rosalind-provisioning-agreement-pricing-v1" === O.pricingVersion &&
          O.separateCharge
      m[2] !== f
        ? ((a = f.provisioningPricing),
          (s =
            a?.separateCharge === !1
              ? ec.statusProvisioningNoSeparateChargeAcknowledgement
              : a?.pricingStatus === "final"
                ? "rosalind-provisioning-agreement-pricing-v1" === a.pricingVersion && a.separateCharge
                  ? ec.statusProvisioningAgreementPricingAcknowledgement
                  : ec.statusProvisioningApprovalFinalRatesConfirmation
                : ec.statusProvisioningApprovalRatesConfirmation),
          (m[2] = f),
          (m[3] = s))
        : (s = m[3])
      let H = s,
        V = `${j}-heading`,
        B = `${j}-heading`,
        U = E ? ec.statusProvisioningApprovalReceivedHeading : ec.statusProvisioningApprovalHeading
      return (
        m[4] !== U ? ((r = (0, t.jsx)(d.A, { ...U })), (m[4] = U), (m[5] = r)) : (r = m[5]),
        m[6] !== B || m[7] !== r
          ? ((o = (0, t.jsx)("h3", { className: "text-lg font-semibold", id: B, children: r })),
            (m[6] = B),
            (m[7] = r),
            (m[8] = o))
          : (o = m[8]),
        m[9] !== E
          ? ((c =
              E &&
              (0, t.jsx)("p", {
                role: "status",
                children: (0, t.jsx)(d.A, { ...ec.statusProvisioningApprovalReceivedDescription }),
              })),
            (m[9] = E),
            (m[10] = c))
          : (c = m[10]),
        m[11] !== G || m[12] !== E || m[13] !== _
          ? ((p =
              !E &&
              !G &&
              (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, t.jsx)(d.A, { ...ec.statusProvisioningApprovalAdministratorRequired }),
                  }),
                  (0, t.jsx)(g.$, {
                    color: "primary",
                    size: "dialogAction",
                    type: "button",
                    disabled: !0,
                    loading: _,
                    children: (0, t.jsx)(d.A, { ...ec.statusProvisioningApprovalButton }),
                  }),
                ],
              })),
            (m[11] = G),
            (m[12] = E),
            (m[13] = _),
            (m[14] = p))
          : (p = m[14]),
        m[15] !== z ||
        m[16] !== I ||
        m[17] !== S ||
        m[18] !== q ||
        m[19] !== f.organizationId ||
        m[20] !== f.requiresInternalApiAcknowledgement ||
        m[21] !== f.researchTermsUrl ||
        m[22] !== f.researchTermsVersion ||
        m[23] !== G ||
        m[24] !== M ||
        m[25] !== T ||
        m[26] !== E ||
        m[27] !== b ||
        m[28] !== j ||
        m[29] !== y ||
        m[30] !== A ||
        m[31] !== v ||
        m[32] !== O ||
        m[33] !== H ||
        m[34] !== D ||
        m[35] !== _ ||
        m[36] !== k ||
        m[37] !== P ||
        m[38] !== L
          ? ((u =
              !E &&
              G &&
              (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, t.jsx)(d.A, { ...ec.statusProvisioningApprovalDescription }),
                  }),
                  k &&
                    (0, t.jsx)("p", {
                      className: "text-sm font-medium",
                      children: (0, t.jsx)(eg, { pricing: O, agreementPricing: q }),
                    }),
                  q &&
                    (0, t.jsx)("p", {
                      className: "text-sm text-secondary",
                      children: (0, t.jsx)(d.A, {
                        ...ec.statusProvisioningPricingLinks,
                        values: {
                          chatgptRateCard: (0, t.jsx)(er.G, {
                            href: "https://help.openai.com/en/articles/11481834-chatgpt-rate-card-business-enterpriseedu-credit-based-pricing",
                            initiator: "external_link",
                            appearance: "primary",
                            children: (0, t.jsx)(d.A, { ...ec.pricingChatgptRateCardLink }),
                          }),
                          apiPricing: (0, t.jsx)(er.G, {
                            href: "https://developers.openai.com/api/docs/pricing?latest-pricing=standard",
                            initiator: "external_link",
                            appearance: "primary",
                            children: (0, t.jsx)(d.A, { ...ec.pricingApiLink }),
                          }),
                        },
                      }),
                    }),
                  L
                    ? P && (0, t.jsx)(ep, { summary: L })
                    : (0, t.jsxs)("div", {
                        role: "alert",
                        className: "flex flex-col items-start gap-3",
                        children: [
                          (0, t.jsx)("p", {
                            children: (0, t.jsx)(d.A, { ...ec.statusProvisioningApplicationReviewUnavailable }),
                          }),
                          (0, t.jsx)(g.$, {
                            color: "secondary",
                            size: "dialogAction",
                            type: "button",
                            onClick: A,
                            children: (0, t.jsx)(d.A, { ...ec.statusProvisioningApplicationReviewRetry }),
                          }),
                        ],
                      }),
                  (0, t.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, t.jsx)(d.A, {
                      ...ec.statusProvisioningLegalAttestation,
                      values: {
                        servicesAgreement: (0, t.jsx)(er.G, {
                          href: el,
                          appearance: "primary",
                          initiator: "external_link",
                          children: (0, t.jsx)(d.A, { ...ec.statusProvisioningServicesAgreementLink }),
                        }),
                      },
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className: "flex flex-col gap-4",
                    children: [
                      (0, t.jsx)(X, {
                        id: `${j}-provisioning`,
                        checked: T,
                        disabled: v || _ || !M,
                        onChange: R,
                        title: (0, t.jsx)(d.A, { ...ec.statusProvisioningApprovalConfirmation }),
                      }),
                      (0, t.jsx)(X, {
                        id: `${j}-pricing`,
                        checked: I,
                        disabled: v || _ || !M,
                        onChange: w,
                        title: (0, t.jsx)(d.A, { ...H }),
                      }),
                      (0, t.jsx)(X, {
                        id: `${j}-terms`,
                        checked: S,
                        disabled: v || _ || !M,
                        onChange: C,
                        title: (0, t.jsx)(d.A, {
                          ...ec.statusProvisioningResearchTermsAgreement,
                          values: {
                            researchTerms: f.researchTermsUrl
                              ? (0, t.jsx)(er.G, {
                                  href: f.researchTermsUrl,
                                  appearance: "primary",
                                  initiator: "external_link",
                                  children: (0, t.jsx)(d.A, { ...ec.statusProvisioningResearchTermsLink }),
                                })
                              : (0, t.jsx)(d.A, { ...ec.statusProvisioningResearchTermsLink }),
                            servicesAgreement: (0, t.jsx)(er.G, {
                              href: el,
                              appearance: "primary",
                              initiator: "external_link",
                              children: (0, t.jsx)(d.A, { ...ec.statusProvisioningApplicableServicesAgreementLink }),
                            }),
                          },
                        }),
                      }),
                      f.requiresInternalApiAcknowledgement &&
                        (0, t.jsx)(X, {
                          id: `${j}-internal-api`,
                          checked: z,
                          disabled: v || _ || !M,
                          onChange: N,
                          title: (0, t.jsx)(d.A, {
                            id: "chatgpt.rosalind_access.tracking.approved.internal_api_only.confirmation",
                            defaultMessage:
                              "I acknowledge that API access is for internal organizational use only and must not be offered to external users",
                            description:
                              "Required acknowledgement for the organization's legal signer before activating internal-only Rosalind API access",
                          }),
                        }),
                    ],
                  }),
                  (0, t.jsx)(g.$, {
                    color: "primary",
                    size: "dialogAction",
                    type: "button",
                    disabled: !D,
                    loading: v || _,
                    onClick: () => {
                      D &&
                        O &&
                        k &&
                        f.researchTermsVersion &&
                        y({
                          organizationId: f.organizationId,
                          confirmedProvisioning: !0,
                          acceptedPricing: !0,
                          acceptedResearchTerms: !0,
                          pricingVersion: O.pricingVersion,
                          researchTermsVersion: f.researchTermsVersion,
                          requestedResearchMode: k,
                        })
                    },
                    children: (0, t.jsx)(d.A, { ...ec.statusProvisioningApprovalButton }),
                  }),
                  !M &&
                    (0, t.jsx)("p", {
                      role: "status",
                      className: "text-sm text-secondary",
                      children: (0, t.jsx)(d.A, { ...ec.statusProvisioningApprovalUnavailable }),
                    }),
                  b &&
                    (0, t.jsx)("p", {
                      role: "alert",
                      className: "text-sm text-danger",
                      children: (0, t.jsx)(d.A, { ...ec.statusProvisioningApprovalFailed }),
                    }),
                ],
              })),
            (m[15] = z),
            (m[16] = I),
            (m[17] = S),
            (m[18] = q),
            (m[19] = f.organizationId),
            (m[20] = f.requiresInternalApiAcknowledgement),
            (m[21] = f.researchTermsUrl),
            (m[22] = f.researchTermsVersion),
            (m[23] = G),
            (m[24] = M),
            (m[25] = T),
            (m[26] = E),
            (m[27] = b),
            (m[28] = j),
            (m[29] = y),
            (m[30] = A),
            (m[31] = v),
            (m[32] = O),
            (m[33] = H),
            (m[34] = D),
            (m[35] = _),
            (m[36] = k),
            (m[37] = P),
            (m[38] = L),
            (m[39] = u))
          : (u = m[39]),
        m[40] !== p || m[41] !== u || m[42] !== V || m[43] !== o || m[44] !== c
          ? ((h = (0, t.jsxs)("section", {
              className: "flex flex-col gap-4",
              "aria-labelledby": V,
              children: [o, c, p, u],
            })),
            (m[40] = p),
            (m[41] = u),
            (m[42] = V),
            (m[43] = o),
            (m[44] = c),
            (m[45] = h))
          : (h = m[45]),
        h
      )
    }
    function ep(e) {
      let a,
        i,
        s,
        r,
        o,
        c,
        l,
        p,
        u,
        g,
        h,
        m,
        f,
        v,
        _,
        b,
        y,
        A,
        x,
        P = (0, n.c)(51),
        { summary: T } = e,
        R = (0, j.A)()
      if (P[0] !== R || P[1] !== T.products || P[2] !== T.researchPurpose || P[3] !== T.researchScopes) {
        let e = new Map([
            ["chatgpt-codex", H.chatgptCodex],
            ["internal-api", H.internalApi],
            ["external-api", ec.externalApi],
          ]),
          n = new Map([...K.map(eu), ["regulated-materials", ec.regulatedMaterials], ["wet-lab", ec.wetLab]])
        ;((p = "flex flex-col gap-3"),
          P[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((u = (0, t.jsx)("h4", {
                className: "text-base font-semibold",
                children: (0, t.jsx)(d.A, { ...ec.applicationDetailsVisualHeading }),
              })),
              (P[13] = u))
            : (u = P[13]),
          (o = "flex flex-col gap-4"))
        let g = T.products.map((a) => (e.has(a) ? R.formatMessage(e.get(a) ?? ec.externalApi) : a))
        ;(P[14] !== g
          ? ((c = (0, t.jsx)(J, { label: ec.requestedAccess, children: (0, t.jsx)(q.dT, { value: g }) })),
            (P[14] = g),
            (P[15] = c))
          : (c = P[15]),
          P[16] !== T.researchPurpose
            ? ((l = (0, t.jsx)(J, { label: ec.researchPurposeSummary, children: T.researchPurpose })),
              (P[16] = T.researchPurpose),
              (P[17] = l))
            : (l = P[17]),
          (i = J),
          (r = ec.summaryScope),
          (a = q.dT),
          (s = T.researchScopes.map((e) => {
            let a = n.get(e)
            return a ? R.formatMessage(a) : e
          })),
          (P[0] = R),
          (P[1] = T.products),
          (P[2] = T.researchPurpose),
          (P[3] = T.researchScopes),
          (P[4] = a),
          (P[5] = i),
          (P[6] = s),
          (P[7] = r),
          (P[8] = o),
          (P[9] = c),
          (P[10] = l),
          (P[11] = p),
          (P[12] = u))
      } else
        ((a = P[4]), (i = P[5]), (s = P[6]), (r = P[7]), (o = P[8]), (c = P[9]), (l = P[10]), (p = P[11]), (u = P[12]))
      return (
        P[18] !== a || P[19] !== s
          ? ((g = (0, t.jsx)(a, { value: s })), (P[18] = a), (P[19] = s), (P[20] = g))
          : (g = P[20]),
        P[21] !== i || P[22] !== r || P[23] !== g
          ? ((h = (0, t.jsx)(i, { label: r, children: g })), (P[21] = i), (P[22] = r), (P[23] = g), (P[24] = h))
          : (h = P[24]),
        P[25] !== R || P[26] !== T.primaryCountry
          ? ((m = R.formatDisplayName(T.primaryCountry, { type: "region" }) ?? T.primaryCountry),
            (P[25] = R),
            (P[26] = T.primaryCountry),
            (P[27] = m))
          : (m = P[27]),
        P[28] !== m
          ? ((f = (0, t.jsx)(J, { label: ec.summaryPrimaryLocation, children: m })), (P[28] = m), (P[29] = f))
          : (f = P[29]),
        P[30] !== T
          ? ((v = (0, t.jsx)(J, { label: ec.summaryAdditionalLocations, children: (0, t.jsx)(eh, { summary: T }) })),
            (P[30] = T),
            (P[31] = v))
          : (v = P[31]),
        P[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, t.jsx)(J, {
              label: ec.summarySafeguards,
              children: (0, t.jsx)(d.A, { ...ec.safeguardsConfirmed }),
            })),
            (P[32] = _))
          : (_ = P[32]),
        P[33] !== R || P[34] !== T.selectedSafeguards
          ? ((b =
              T.selectedSafeguards.length > 0 &&
              (0, t.jsx)(J, {
                label: ec.safeguardsInPlace,
                children: (0, t.jsx)(q.dT, {
                  value: T.selectedSafeguards.map((e) => {
                    let a = Z.find((a) => {
                      let { id: i } = a
                      return i === e
                    })
                    return a ? R.formatMessage(a.title) : e
                  }),
                }),
              })),
            (P[33] = R),
            (P[34] = T.selectedSafeguards),
            (P[35] = b))
          : (b = P[35]),
        P[36] !== T.otherSafeguardDetails
          ? ((y =
              T.otherSafeguardDetails &&
              (0, t.jsx)(J, { label: ec.otherSafeguardsSummary, children: T.otherSafeguardDetails })),
            (P[36] = T.otherSafeguardDetails),
            (P[37] = y))
          : (y = P[37]),
        P[38] !== f ||
        P[39] !== v ||
        P[40] !== b ||
        P[41] !== y ||
        P[42] !== o ||
        P[43] !== c ||
        P[44] !== l ||
        P[45] !== h
          ? ((A = (0, t.jsxs)("dl", { className: o, children: [c, l, h, f, v, _, b, y] })),
            (P[38] = f),
            (P[39] = v),
            (P[40] = b),
            (P[41] = y),
            (P[42] = o),
            (P[43] = c),
            (P[44] = l),
            (P[45] = h),
            (P[46] = A))
          : (A = P[46]),
        P[47] !== A || P[48] !== p || P[49] !== u
          ? ((x = (0, t.jsxs)("section", { className: p, children: [u, A] })),
            (P[47] = A),
            (P[48] = p),
            (P[49] = u),
            (P[50] = x))
          : (x = P[50]),
        x
      )
    }
    function eu(e) {
      let { id: a, title: i } = e
      return [a, i]
    }
    function eg(e) {
      let a,
        i = (0, n.c)(3),
        { pricing: s, agreementPricing: r } = e
      if (r) {
        let e
        return (
          i[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsx)(d.A, { ...ec.statusProvisioningAgreementRates })), (i[0] = e))
            : (e = i[0]),
          e
        )
      }
      if (s?.separateCharge === !1) {
        let e
        return (
          i[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsx)(d.A, { ...ec.statusProvisioningNoSeparateCharge })), (i[1] = e))
            : (e = i[1]),
          e
        )
      }
      return s?.pricingStatus === "final"
        ? s.rateDisplay
        : (i[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, t.jsx)(d.A, { ...ec.statusProvisioningApprovalRates })), (i[2] = a))
            : (a = i[2]),
          a)
    }
    function eh(e) {
      let a,
        i,
        s = (0, n.c)(11),
        { summary: r } = e,
        o = (0, j.A)()
      if ("no" === r.additionalLocations) {
        let e
        return (
          s[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsx)(d.A, { ...ec.none })), (s[0] = e))
            : (e = s[0]),
          e
        )
      }
      if ("unsure" === r.additionalLocations) {
        let e
        return (
          s[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsx)(d.A, { ...ec.additionalLocationsUnconfirmed })), (s[1] = e))
            : (e = s[1]),
          e
        )
      }
      if (s[2] !== o || s[3] !== r.additionalCountries) {
        let e, i
        ;(s[5] !== r.additionalCountries
          ? ((e = r.additionalCountries ?? []), (s[5] = r.additionalCountries), (s[6] = e))
          : (e = s[6]),
          s[7] !== o
            ? ((i = (e) => o.formatDisplayName(e, { type: "region" }) ?? e), (s[7] = o), (s[8] = i))
            : (i = s[8]),
          (a = o.formatList(e.map(i))),
          (s[2] = o),
          (s[3] = r.additionalCountries),
          (s[4] = a))
      } else a = s[4]
      return (
        s[9] !== a
          ? ((i = (0, t.jsx)(d.A, { ...ec.policyReviewRequired, values: { locations: a } })), (s[9] = a), (s[10] = i))
          : (i = s[10]),
        i
      )
    }
    var em = i("UgNy")
    function ef(e) {
      let a,
        i,
        s,
        r,
        o,
        p,
        u,
        h,
        m,
        v,
        b,
        A,
        x = (0, n.c)(51),
        {
          application: T,
          identity: R,
          disabled: I,
          surface: S,
          onCanceled: C,
          onRefresh: N,
          onPendingChange: j,
          buttonLabel: O,
          buttonColor: L,
        } = e,
        k = void 0 === L ? "dangerOutline" : L,
        E = (0, c.Ul)(f.YV),
        [G, M] = (0, l.useState)(!1)
      ;(x[0] !== T || x[1] !== R
        ? ((a = () =>
            (async function (e, a) {
              let i = w(
                await P.Request.safeRequest("post", "/rosalind/access/applications/{application_reference}/cancel", {
                  parameters: { path: { application_reference: a.bioagentsApplicationReference } },
                  requestBody: { organizationId: a.organizationId },
                  additionalHeaders: { [y.zBc]: e.accountId },
                  expectedIdentity: e,
                  expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 502, 503],
                  retry: !1,
                }),
                a,
              )
              if ("canceled" !== i.state || i.canCancel) throw Error("The cancellation was not confirmed")
              return i
            })(R, T)),
          (x[0] = T),
          (x[1] = R),
          (x[2] = a))
        : (a = x[2]),
        x[3] !== E || x[4] !== j || x[5] !== S
          ? ((i = () => {
              ;(j?.(!0),
                _(
                  E,
                  "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_CANCEL",
                  "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_STARTED",
                  S,
                ))
            }),
            (x[3] = E),
            (x[4] = j),
            (x[5] = S),
            (x[6] = i))
          : (i = x[6]),
        x[7] !== E || x[8] !== S
          ? ((s = () =>
              _(
                E,
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_CANCEL",
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_FAILED",
                S,
              )),
            (x[7] = E),
            (x[8] = S),
            (x[9] = s))
          : (s = x[9]),
        x[10] !== E || x[11] !== C || x[12] !== S
          ? ((r = (e) => {
              ;(_(
                E,
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_CANCEL",
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_SUCCEEDED",
                S,
              ),
                C?.(e),
                M(!1))
            }),
            (x[10] = E),
            (x[11] = C),
            (x[12] = S),
            (x[13] = r))
          : (r = x[13]),
        x[14] !== j || x[15] !== N
          ? ((o = () => {
              ;(j?.(!1), N())
            }),
            (x[14] = j),
            (x[15] = N),
            (x[16] = o))
          : (o = x[16]),
        x[17] !== a || x[18] !== i || x[19] !== s || x[20] !== r || x[21] !== o
          ? ((p = { mutationFn: a, retry: !1, onMutate: i, onError: s, onSuccess: r, onSettled: o }),
            (x[17] = a),
            (x[18] = i),
            (x[19] = s),
            (x[20] = r),
            (x[21] = o),
            (x[22] = p))
          : (p = x[22]))
      let D = (0, z.n)(p),
        q = I || D.isPending || D.isSuccess,
        H = (0, l.useRef)(!1)
      x[23] !== T.canCancel || x[24] !== q || x[25] !== D || x[26] !== E || x[27] !== S
        ? ((u = () => {
            !q &&
              T.canCancel &&
              (D.reset(),
              (H.current = !0),
              _(
                E,
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_CANCELLATION_CONFIRMATION",
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_STARTED",
                S,
              ),
              M(!0))
          }),
          (x[23] = T.canCancel),
          (x[24] = q),
          (x[25] = D),
          (x[26] = E),
          (x[27] = S),
          (x[28] = u))
        : (u = x[28])
      let V = u
      x[29] !== D.isPending || x[30] !== E || x[31] !== S
        ? ((h = () => {
            D.isPending ||
              (H.current &&
                ((H.current = !1),
                _(
                  E,
                  "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_CANCELLATION_CONFIRMATION",
                  "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_CANCELLED",
                  S,
                )),
              M(!1))
          }),
          (x[29] = D.isPending),
          (x[30] = E),
          (x[31] = S),
          (x[32] = h))
        : (h = x[32])
      let B = h
      return (
        x[33] !== T.canCancel || x[34] !== q || x[35] !== k || x[36] !== O || x[37] !== V
          ? ((m =
              (T.canCancel || null != O) &&
              (0, t.jsx)(g.$, {
                color: k,
                size: "dialogAction",
                type: "button",
                disabled: q || !T.canCancel,
                onClick: V,
                children: (0, t.jsx)(d.A, { ...(O ?? ec.cancelApplication) }),
              })),
            (x[33] = T.canCancel),
            (x[34] = q),
            (x[35] = k),
            (x[36] = O),
            (x[37] = V),
            (x[38] = m))
          : (m = x[38]),
        x[39] !== D.isSuccess
          ? ((v =
              D.isSuccess &&
              (0, t.jsx)("p", { role: "status", children: (0, t.jsx)(d.A, { ...ec.cancellationComplete }) })),
            (x[39] = D.isSuccess),
            (x[40] = v))
          : (v = x[40]),
        x[41] !== T.canCancel || x[42] !== q || x[43] !== D || x[44] !== B || x[45] !== G
          ? ((b =
              G &&
              T.canCancel &&
              (0, t.jsx)(em.v, {
                pending: D.isPending,
                failed: D.isError,
                disabled: q || !T.canCancel,
                onClose: B,
                onConfirm: () => D.mutate(),
              })),
            (x[41] = T.canCancel),
            (x[42] = q),
            (x[43] = D),
            (x[44] = B),
            (x[45] = G),
            (x[46] = b))
          : (b = x[46]),
        x[47] !== m || x[48] !== v || x[49] !== b
          ? ((A = (0, t.jsxs)(t.Fragment, { children: [m, v, b] })), (x[47] = m), (x[48] = v), (x[49] = b), (x[50] = A))
          : (A = x[50]),
        A
      )
    }
    function ev(e) {
      let a,
        i,
        r,
        o = (0, n.c)(9),
        { organizationId: c, reapply: l } = e,
        [p] = (0, s.ok)()
      o[0] !== c || o[1] !== l || o[2] !== p
        ? ((a = new URLSearchParams(p)).set("organization_id", c),
          a.delete("organizationId"),
          l && (a.set("reapply", l), a.delete("workspace_handoff")),
          (o[0] = c),
          (o[1] = l),
          (o[2] = p),
          (o[3] = a))
        : (a = o[3])
      let u = `/rosalind/application?${a}`
      return (
        o[4] !== l
          ? ((i = l
              ? (0, t.jsx)(d.A, {
                  id: "chatgpt.rosalind_access.tracking.reapply.button",
                  defaultMessage: "Apply again",
                  description:
                    "Button on a canceled Rosalind application that starts a separate new application with fresh verification. This action is not available for denied applications.",
                })
              : (0, t.jsx)(d.A, {
                  id: "chatgpt.rosalind_access.tracking.no_application.upgrade_access.button",
                  defaultMessage: "Apply for access",
                  description: "Button on the Rosalind tracker to open the organization-scoped access application",
                })),
            (o[4] = l),
            (o[5] = i))
          : (i = o[5]),
        o[6] !== u || o[7] !== i
          ? ((r = (0, t.jsx)(g.z, { to: u, color: "secondary", size: "dialogAction", children: i })),
            (o[6] = u),
            (o[7] = i),
            (o[8] = r))
          : (r = o[8]),
        r
      )
    }
    function e_(e) {
      var a
      let i,
        s,
        r,
        o,
        p,
        u,
        h,
        m,
        v,
        b,
        A,
        x,
        T,
        R,
        I,
        S,
        j,
        O,
        L,
        k,
        E,
        G,
        M,
        D,
        q,
        H,
        V,
        B = (0, n.c)(103),
        { surface: U, application: W, organization: F, identity: $, queryKey: Y, refreshing: K, onRefresh: Z } = e,
        X = void 0 === U ? "CHATGPT_WEB_ROSALIND_APPLICATION_SURFACE_STATUS" : U,
        Q = (0, C.jE)(),
        ee = (0, c.Ul)(f.YV),
        [et, en] = (0, l.useState)(!1)
      ;(B[0] !== W || B[1] !== $
        ? ((i = (e) =>
            (async function (e, a, i) {
              if (i.organizationId !== a.organizationId) throw Error("The approval belongs to another organization")
              let t = w(
                  await P.Request.safeRequest(
                    "post",
                    "/rosalind/access/applications/{application_reference}/approve-provisioning",
                    {
                      parameters: { path: { application_reference: a.bioagentsApplicationReference } },
                      requestBody: i,
                      additionalHeaders: { [y.zBc]: e.accountId },
                      expectedIdentity: e,
                      expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 502, 503],
                      retry: !1,
                    },
                  ),
                  a,
                ),
                n = t.provisioningApproval
              if (
                "approved" !== t.state ||
                !1 !== t.canApproveProvisioning ||
                n?.acceptedResearchTerms !== !0 ||
                n.pricingVersion !== i.pricingVersion ||
                n.researchTermsVersion !== i.researchTermsVersion ||
                n.requestedResearchMode !== i.requestedResearchMode ||
                (!0 === t.requiresInternalApiAcknowledgement && !0 !== n.acceptedInternalApiOnly)
              )
                throw Error("The provisioning approval was not confirmed")
              return t
            })($, W, e)),
          (B[0] = W),
          (B[1] = $),
          (B[2] = i))
        : (i = B[2]),
        B[3] !== ee || B[4] !== X
          ? ((s = () =>
              _(
                ee,
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_APPROVE_PROVISIONING",
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_STARTED",
                X,
              )),
            (r = () =>
              _(
                ee,
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_APPROVE_PROVISIONING",
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_FAILED",
                X,
              )),
            (B[3] = ee),
            (B[4] = X),
            (B[5] = s),
            (B[6] = r))
          : ((s = B[5]), (r = B[6])),
        B[7] !== ee || B[8] !== Q || B[9] !== Y || B[10] !== X
          ? ((o = (e) => {
              ;(_(
                ee,
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_APPROVE_PROVISIONING",
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_SUCCEEDED",
                X,
              ),
                Q.setQueryData(Y, e))
            }),
            (B[7] = ee),
            (B[8] = Q),
            (B[9] = Y),
            (B[10] = X),
            (B[11] = o))
          : (o = B[11]),
        B[12] !== Z || B[13] !== i || B[14] !== s || B[15] !== r || B[16] !== o
          ? ((p = { mutationFn: i, retry: !1, onMutate: s, onError: r, onSuccess: o, onSettled: Z }),
            (B[12] = Z),
            (B[13] = i),
            (B[14] = s),
            (B[15] = r),
            (B[16] = o),
            (B[17] = p))
          : (p = B[17]))
      let er = (0, z.n)(p)
      B[18] !== W
        ? ((u =
            "action_required" === (a = W).state && "applicant" !== a.actionOwner
              ? { headline: ec.statusInProgressHeadline, description: ec.statusInProgressDescription }
              : {
                  submitted: { headline: ec.statusSubmittedHeadline, description: ec.statusSubmittedDescription },
                  in_progress: { headline: ec.statusInProgressHeadline, description: ec.statusInProgressDescription },
                  action_required: {
                    headline: ec.statusActionRequiredHeadline,
                    description: ec.statusActionRequiredDescription,
                  },
                  approved: { headline: ec.statusApprovedHeadline, description: ec.statusApprovedDescription },
                  access_granted: {
                    headline: ec.statusAccessGrantedHeadline,
                    description: ec.statusAccessGrantedDescription,
                  },
                  denied: { headline: ec.statusDeniedHeadline, description: ec.statusDeniedDescription },
                  revoked: { headline: ec.statusRevokedHeadline, description: ec.statusRevokedDescription },
                  canceled: { headline: ec.statusCanceledHeadline, description: ec.statusCanceledDescription },
                }[a.state]),
          (B[18] = W),
          (B[19] = u))
        : (u = B[19])
      let eo = u
      B[20] !== W ? ((h = es(W)), (B[20] = W), (B[21] = h)) : (h = B[21])
      let el = h,
        ep = K || et || er.isPending
      ;(B[22] !== Q || B[23] !== Y
        ? ((m = (e) => {
            Q.setQueryData(Y, e)
          }),
          (B[22] = Q),
          (B[23] = Y),
          (B[24] = m))
        : (m = B[24]),
        B[25] !== W || B[26] !== $ || B[27] !== Z || B[28] !== X || B[29] !== m
          ? ((v = { application: W, identity: $, surface: X, onCanceled: m, onRefresh: Z, onPendingChange: en }),
            (B[25] = W),
            (B[26] = $),
            (B[27] = Z),
            (B[28] = X),
            (B[29] = m),
            (B[30] = v))
          : (v = B[30]))
      let eu = v,
        eg = W.applicationSummary ?? W.approvalSummary
      if (
        (B[31] !== el || B[32] !== W.requiredAction || B[33] !== ep || B[34] !== eu || B[35] !== F || B[36] !== X
          ? ((b =
              el &&
              (0, t.jsxs)("section", {
                className: "flex flex-col items-start gap-3",
                children: [
                  (0, t.jsx)("h3", { className: "text-lg font-semibold", children: (0, t.jsx)(d.A, { ...el.title }) }),
                  (0, t.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, t.jsx)(d.A, { ...el.description, values: el.descriptionValues }),
                  }),
                  el.buttonLabel &&
                    (el.href
                      ? "CHATGPT_WEB_ROSALIND_APPLICATION_SURFACE_FORM" !== X &&
                        (0, t.jsx)(ev, { organizationId: F.id })
                      : (0, t.jsx)(ef, {
                          ...eu,
                          buttonLabel: el.buttonLabel,
                          buttonColor: "secondary",
                          disabled: ep || "sign_enterprise_zdr_agreement" === W.requiredAction,
                        })),
                ],
              })),
            (B[31] = el),
            (B[32] = W.requiredAction),
            (B[33] = ep),
            (B[34] = eu),
            (B[35] = F),
            (B[36] = X),
            (B[37] = b))
          : (b = B[37]),
        B[38] !== W || B[39] !== er || B[40] !== ep || B[41] !== Z)
      )
        ((A =
          "approved" === W.state &&
          (0, t.jsx)(
            ed,
            {
              application: W,
              showApplicationSummary: !1,
              pending: er.isPending,
              refreshing: ep,
              error: er.isError,
              onApprove: (e) => er.mutate(e),
              onRetry: Z,
            },
            JSON.stringify([
              W.bioagentsApplicationReference,
              W.canApproveProvisioning,
              W.requestedResearchMode,
              W.provisioningPricing,
              W.researchTermsVersion,
              W.researchTermsUrl,
              W.approvalSummary,
              W.requiresInternalApiAcknowledgement,
            ]),
          )),
          (B[38] = W),
          (B[39] = er),
          (B[40] = ep),
          (B[41] = Z),
          (B[42] = A))
      else A = B[42]
      ;(B[43] !== W.activeTier || B[44] !== W.bioagentsApplicationReference || B[45] !== W.state || B[46] !== eg
        ? ((x =
            (null == eg || ("access_granted" === W.state && W.activeTier)) &&
            (0, t.jsxs)("dl", {
              className: "flex flex-col gap-4",
              children: [
                null == eg &&
                  (0, t.jsx)(J, { label: ec.confirmationReferenceLabel, children: W.bioagentsApplicationReference }),
                "access_granted" === W.state &&
                  W.activeTier &&
                  (0, t.jsxs)("div", {
                    className: "flex flex-col gap-1 text-sm",
                    children: [
                      (0, t.jsx)("dt", {
                        className: "text-secondary",
                        children: (0, t.jsx)(d.A, {
                          id: "chatgpt.rosalind_access.tracking.current_tier.label",
                          defaultMessage: "Current tier",
                          description:
                            "Label for the backend-confirmed active Rosalind model tier, shown only after access is provisioned",
                        }),
                      }),
                      (0, t.jsx)("dd", {
                        children:
                          "discovery" === W.activeTier
                            ? (0, t.jsx)(d.A, {
                                id: "chatgpt.rosalind_access.tracking.current_tier.discovery",
                                defaultMessage: "Rosalind Discovery",
                                description:
                                  "Confirmed active Rosalind Discovery model tier; preserve the product name",
                              })
                            : (0, t.jsx)(d.A, {
                                id: "chatgpt.rosalind_access.tracking.current_tier.research",
                                defaultMessage: "Rosalind Research",
                                description: "Confirmed active Rosalind Research model tier; preserve the product name",
                              }),
                      }),
                    ],
                  }),
              ],
            })),
          (B[43] = W.activeTier),
          (B[44] = W.bioagentsApplicationReference),
          (B[45] = W.state),
          (B[46] = eg),
          (B[47] = x))
        : (x = B[47]),
        B[48] !== W.state
          ? ((T =
              ["submitted", "in_progress", "action_required", "approved"].includes(W.state) &&
              (0, t.jsxs)("p", {
                className: "flex items-center gap-2 text-xs text-secondary",
                children: [(0, t.jsx)(N.$Rp, {}), (0, t.jsx)(d.A, { ...ea.noAccess })],
              })),
            (B[48] = W.state),
            (B[49] = T))
          : (T = B[49]),
        B[50] !== ee || B[51] !== Z || B[52] !== X
          ? ((R = () => {
              ;(_(
                ee,
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_RETRY_STATUS",
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_STARTED",
                X,
              ),
                Z())
            }),
            (B[50] = ee),
            (B[51] = Z),
            (B[52] = X),
            (B[53] = R))
          : (R = B[53]),
        B[54] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = (0, t.jsx)(d.A, { ...ea.refresh })), (S = (0, t.jsx)(N.Imh, {})), (B[54] = I), (B[55] = S))
          : ((I = B[54]), (S = B[55])),
        B[56] !== ep || B[57] !== R
          ? ((j = (0, t.jsxs)(g.$, {
              color: "secondary",
              size: "dialogAction",
              type: "button",
              disabled: ep,
              onClick: R,
              children: [I, S],
            })),
            (B[56] = ep),
            (B[57] = R),
            (B[58] = j))
          : (j = B[58]),
        B[59] !== W.state || B[60] !== ep || B[61] !== eu || B[62] !== X
          ? ((O =
              ("CHATGPT_WEB_ROSALIND_APPLICATION_SURFACE_FORM" !== X ||
                ["submitted", "in_progress", "action_required"].includes(W.state)) &&
              (0, t.jsx)(ef, { ...eu, disabled: ep })),
            (B[59] = W.state),
            (B[60] = ep),
            (B[61] = eu),
            (B[62] = X),
            (B[63] = O))
          : (O = B[63]),
        B[64] !== W.bioagentsApplicationReference || B[65] !== W.state || B[66] !== F
          ? ((L =
              "canceled" === W.state &&
              (0, t.jsx)(ev, { organizationId: F.id, reapply: W.bioagentsApplicationReference })),
            (B[64] = W.bioagentsApplicationReference),
            (B[65] = W.state),
            (B[66] = F),
            (B[67] = L))
          : (L = B[67]),
        B[68] !== j || B[69] !== O || B[70] !== L
          ? ((k = (0, t.jsxs)("div", { className: "flex flex-wrap items-center gap-3", children: [j, O, L] })),
            (B[68] = j),
            (B[69] = O),
            (B[70] = L),
            (B[71] = k))
          : (k = B[71]),
        B[72] !== b || B[73] !== A || B[74] !== x || B[75] !== T || B[76] !== k
          ? ((E = (0, t.jsxs)("div", { className: "flex w-full flex-col gap-4", children: [b, A, x, T, k] })),
            (B[72] = b),
            (B[73] = A),
            (B[74] = x),
            (B[75] = T),
            (B[76] = k),
            (B[77] = E))
          : (E = B[77]))
      let eh = E
      if (null != eg) {
        let e, a
        return (
          B[78] !== W.state || B[79] !== eo
            ? ((e =
                ["denied", "revoked", "canceled", "access_granted"].includes(W.state) &&
                (0, t.jsxs)("section", {
                  className: "flex flex-col gap-2",
                  children: [
                    (0, t.jsx)("h2", {
                      className: "text-lg font-semibold",
                      children: (0, t.jsx)(d.A, { ...eo.headline }),
                    }),
                    (0, t.jsx)("p", {
                      className: "text-sm text-secondary",
                      children: (0, t.jsx)(d.A, { ...eo.description }),
                    }),
                  ],
                })),
              (B[78] = W.state),
              (B[79] = eo),
              (B[80] = e))
            : (e = B[80]),
          B[81] !== W || B[82] !== eh || B[83] !== F || B[84] !== eg || B[85] !== e
            ? ((a = (0, t.jsx)(ei, {
                application: W,
                answers: eg,
                organization: F,
                applicantName: W.applicantName,
                applicantEmail: W.applicantEmail,
                footer: eh,
                children: e,
              })),
              (B[81] = W),
              (B[82] = eh),
              (B[83] = F),
              (B[84] = eg),
              (B[85] = e),
              (B[86] = a))
            : (a = B[86]),
          a
        )
      }
      return (
        B[87] !== F.name
          ? ((G = (0, t.jsx)("p", { className: "text-sm font-medium", children: F.name })),
            (B[87] = F.name),
            (B[88] = G))
          : (G = B[88]),
        B[89] !== eo.headline
          ? ((M = (0, t.jsx)("h2", {
              className: "text-xl font-semibold",
              children: (0, t.jsx)(d.A, { ...eo.headline }),
            })),
            (B[89] = eo.headline),
            (B[90] = M))
          : (M = B[90]),
        B[91] !== eo.description
          ? ((D = (0, t.jsx)("p", {
              className: "text-sm text-secondary",
              children: (0, t.jsx)(d.A, { ...eo.description }),
            })),
            (B[91] = eo.description),
            (B[92] = D))
          : (D = B[92]),
        B[93] !== G || B[94] !== M || B[95] !== D
          ? ((q = (0, t.jsxs)("header", { className: "flex flex-col gap-2", children: [G, M, D] })),
            (B[93] = G),
            (B[94] = M),
            (B[95] = D),
            (B[96] = q))
          : (q = B[96]),
        B[97] !== W ? ((H = (0, t.jsx)(eb, { application: W })), (B[97] = W), (B[98] = H)) : (H = B[98]),
        B[99] !== eh || B[100] !== q || B[101] !== H
          ? ((V = (0, t.jsxs)("article", { className: "flex flex-col gap-6", children: [q, H, eh] })),
            (B[99] = eh),
            (B[100] = q),
            (B[101] = H),
            (B[102] = V))
          : (V = B[102]),
        V
      )
    }
    function eb(e) {
      let a,
        i,
        s,
        r = (0, n.c)(9),
        { application: o } = e
      r[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = {
            submitted: 0,
            in_progress: 1,
            action_required: 1,
            approved: 2,
            access_granted: 3,
            denied: 2,
            revoked: 3,
            canceled: 0,
          }),
          (r[0] = a))
        : (a = r[0])
      let c = a[o.state],
        l = ec.decisionStage
      "denied" === o.state ? (l = ec.deniedStatus) : "approved" !== o.state || eo(o) || (l = ec.actionRequiredStatus)
      let p = "canceled" === o.state ? ec.canceledStatus : ec.submittedStatus,
        u =
          "action_required" === o.state && "applicant" === o.actionOwner
            ? ec.actionRequiredStatus
            : ec.statusInReviewBadge,
        g = "revoked" === o.state ? ec.accessRevokedStatus : ec.accessGrantedStatus
      r[1] !== l || r[2] !== p || r[3] !== u || r[4] !== g
        ? ((i = [p, u, l, g]), (r[1] = l), (r[2] = p), (r[3] = u), (r[4] = g), (r[5] = i))
        : (i = r[5])
      let h = i
      return (
        r[6] !== h || r[7] !== c
          ? ((s = (0, t.jsx)("ol", {
              className: "flex flex-wrap gap-4 text-sm select-none",
              children: h.map((e, a) =>
                (0, t.jsx)(
                  "li",
                  {
                    "aria-current": a === c ? "step" : void 0,
                    className: a === c ? "font-medium" : "text-secondary",
                    children: (0, t.jsx)(d.A, { ...e }),
                  },
                  e.id,
                ),
              ),
            })),
            (r[6] = h),
            (r[7] = c),
            (r[8] = s))
          : (s = r[8]),
        s
      )
    }
    let ey = (0, q.YK)({
      heading: {
        id: "chatgpt.rosalind_access.upgrade.heading",
        defaultMessage: "Request Rosalind Research",
        description:
          "Heading of the Research upgrade request panel shown to customers with confirmed Rosalind Discovery access. Research is the frontier model tier; requesting it does not change active access. Preserve the product name.",
      },
      description: {
        id: "chatgpt.rosalind_access.upgrade.eligibility.description",
        defaultMessage: "The upgrade form will request more information for further review.",
        description:
          "Introduction to the Rosalind Research upgrade request panel for customers with Discovery access. Additional scientific use-case details support another backend eligibility review for the frontier tier, not an automatic upgrade. Preserve the product name.",
      },
      label: {
        id: "chatgpt.rosalind_access.upgrade.details.label",
        defaultMessage: "Why do you need Rosalind Research?",
        description:
          "Visible label of the free-text field in the Rosalind Research upgrade form. Customers describe why their scientific work requires the frontier model tier.",
      },
      help: {
        id: "chatgpt.rosalind_access.upgrade.details.help_text",
        defaultMessage:
          "Describe your use case and include 1–2 example prompts or tasks. If you have used Rosalind Discovery, explain any limitations you encountered.",
        description:
          "Instructions for the single free-text field in the Rosalind Research upgrade form. Applicants should include their scientific use case and one or two example AI requests. They should describe Discovery limitations only if they have used it; prior use is not required. Preserve the product name.",
      },
      accessUnchanged: {
        id: "chatgpt.rosalind_access.upgrade.privacy.help_text",
        defaultMessage: "This request does not change your current access or your privacy and data-retention choices.",
        description:
          "Reassuring helper text before submission of a Rosalind Research upgrade request. Submitting the request itself does not change the customer's existing Discovery access or independent privacy and retention choices.",
      },
      submitting: {
        id: "chatgpt.rosalind_access.upgrade.submit.pending_label",
        defaultMessage: "Submitting request…",
        description:
          "Temporarily unavailable submit-button label while a Rosalind Research upgrade request is being sent. This does not mean the request has been accepted or approved.",
      },
      submit: {
        id: "chatgpt.rosalind_access.upgrade.submit.label",
        defaultMessage: "Submit upgrade request",
        description:
          "Primary button on the Rosalind Research upgrade form. Sends the customer's research needs for review; it does not immediately enable the frontier model tier.",
      },
      pending: {
        id: "chatgpt.rosalind_access.upgrade.status.pending",
        defaultMessage: "Your Rosalind Research request is under review. You can continue using Rosalind Discovery.",
        description:
          "Status message when the caller has confirmed a pending Research upgrade request. It distinguishes the pending frontier-tier request from the customer's still-active Discovery access. Preserve both product names.",
      },
      approved: {
        id: "chatgpt.rosalind_access.upgrade.status.approved",
        defaultMessage:
          "Your Rosalind Research request is approved and awaiting activation. Your current access is still Rosalind Discovery.",
        description:
          "Status message when the caller has confirmed approval of a Research upgrade but frontier access has not been activated. It distinguishes approval from provisioning and preserves the displayed current Discovery access. Preserve both product names.",
      },
      declined: {
        id: "chatgpt.rosalind_access.upgrade.status.declined",
        defaultMessage:
          "Your Rosalind Research request was not approved. Your current access is still Rosalind Discovery.",
        description:
          "Status message when the caller has confirmed a declined Research upgrade request. This is a decision about the requested frontier tier, not a revocation of existing Discovery access or a submission error. Preserve both product names.",
      },
      currentAccess: {
        id: "chatgpt.rosalind_access.customer.upgrade.current_access",
        defaultMessage: "Current access: Rosalind Discovery",
        description:
          "Confirmed current access on the Research upgrade panel; pending or approved requests do not change this tier. Preserve Rosalind Discovery.",
      },
      privacy: {
        id: "chatgpt.rosalind_access.research.purpose.privacy.help_text",
        defaultMessage:
          "Do not include patient data, personal information, personnel records, genomic sequences, laboratory protocols, or confidential materials.",
        description: "Privacy reminder under the free-text research use-case field",
      },
      failed: {
        id: "chatgpt.rosalind_access.customer.upgrade.failed",
        defaultMessage: "We couldn’t confirm your request. Refresh status or try submitting again.",
        description: "Research upgrade request failed or its outcome is unknown; retrying the same request is safe",
      },
    })
    function eA(e) {
      let a,
        i,
        s,
        r,
        o,
        c,
        p,
        u,
        h,
        m,
        f,
        v,
        _ = (0, n.c)(32),
        { application: A, identity: x, queryKey: T, refreshing: R, onRefresh: I } = e,
        S = (0, l.useId)(),
        [N, j] = (0, l.useState)(""),
        O = (0, l.useRef)(null),
        L = (0, l.useRef)(!1),
        k = (0, C.jE)()
      ;(_[0] !== A || _[1] !== x
        ? ((a = (e) => (
            null == O.current && (O.current = crypto.randomUUID()),
            (async function (e, a, i, t) {
              let n = w(
                await P.Request.safeRequest(
                  "post",
                  "/rosalind/access/applications/{application_reference}/research-upgrades",
                  {
                    parameters: {
                      path: { application_reference: a.bioagentsApplicationReference },
                      header: { "Idempotency-Key": t },
                    },
                    requestBody: { organizationId: a.organizationId, details: i },
                    additionalHeaders: { [y.zBc]: e.accountId, "Idempotency-Key": t },
                    expectedIdentity: e,
                    expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 502, 503],
                    retry: !1,
                  },
                ),
                a,
              )
              if (null == n.researchUpgrade || "access_granted" !== n.state || "discovery" !== n.activeTier)
                throw Error("The Research upgrade request was not confirmed")
              return n
            })(x, A, e, O.current)
          )),
          (_[0] = A),
          (_[1] = x),
          (_[2] = a))
        : (a = _[2]),
        _[3] !== k || _[4] !== T
          ? ((i = (e) => {
              ;(k.setQueryData(T, e), j(""))
            }),
            (_[3] = k),
            (_[4] = T),
            (_[5] = i))
          : (i = _[5]),
        _[6] !== I
          ? ((s = () => {
              ;((L.current = !1), I())
            }),
            (_[6] = I),
            (_[7] = s))
          : (s = _[7]),
        _[8] !== a || _[9] !== i || _[10] !== s
          ? ((r = { mutationFn: a, retry: !1, onSuccess: i, onSettled: s, gcTime: 0 }),
            (_[8] = a),
            (_[9] = i),
            (_[10] = s),
            (_[11] = r))
          : (r = _[11]))
      let E = (0, z.n)(r),
        M = A.researchUpgrade ?? E.data?.researchUpgrade
      if ("access_granted" !== A.state || "discovery" !== A.activeTier || (!A.canRequestResearchUpgrade && null == M))
        return null
      _[12] !== N
        ? ((o = N.trim().length >= b.XO.researchPurpose.min && N.length <= b.XO.researchPurpose.max),
          (_[12] = N),
          (_[13] = o))
        : (o = _[13])
      let D = o,
        q = `${S}-heading`,
        H = `${S}-heading`
      return (
        _[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, t.jsx)(d.A, { ...ey.heading })), (_[14] = c))
          : (c = _[14]),
        _[15] !== H
          ? ((p = (0, t.jsx)("h3", { id: H, className: "text-lg font-semibold", children: c })),
            (_[15] = H),
            (_[16] = p))
          : (p = _[16]),
        _[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, t.jsx)("p", {
              className: "text-sm text-secondary",
              children: (0, t.jsx)(d.A, { ...ey.description }),
            })),
            (_[17] = u))
          : (u = _[17]),
        _[18] !== p
          ? ((h = (0, t.jsxs)("div", { className: "flex flex-col gap-2", children: [p, u] })), (_[18] = p), (_[19] = h))
          : (h = _[19]),
        _[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, t.jsx)("p", { className: "text-sm", children: (0, t.jsx)(d.A, { ...ey.currentAccess }) })),
            (_[20] = m))
          : (m = _[20]),
        _[21] !== N || _[22] !== S || _[23] !== E || _[24] !== R || _[25] !== M || _[26] !== D
          ? ((f = M
              ? (0, t.jsx)("p", {
                  role: "status",
                  className: "text-sm text-secondary",
                  children: (0, t.jsx)(d.A, { ...ey[M.status] }),
                })
              : (0, t.jsxs)("form", {
                  className: "flex flex-col items-start gap-4",
                  "aria-busy": E.isPending,
                  onSubmit: (e) => {
                    ;(e.preventDefault(), !D || R || L.current || null != M || ((L.current = !0), E.mutate(N.trim())))
                  },
                  children: [
                    (0, t.jsxs)("div", {
                      className: "flex w-full flex-col gap-2",
                      children: [
                        (0, t.jsx)("label", {
                          htmlFor: `${S}-details`,
                          className: "text-sm font-medium",
                          children: (0, t.jsx)(d.A, { ...ey.label }),
                        }),
                        (0, t.jsx)("p", {
                          id: `${S}-help`,
                          className: "text-sm text-secondary",
                          children: (0, t.jsx)(d.A, { ...ey.help }),
                        }),
                        (0, t.jsx)(G.TM, {
                          id: `${S}-details`,
                          "aria-describedby": `${S}-help ${S}-privacy${E.isError ? ` ${S}-error` : ""}`,
                          maxLength: b.XO.researchPurpose.max,
                          minLength: b.XO.researchPurpose.min,
                          required: !0,
                          rows: 5,
                          readOnly: E.isPending,
                          value: N,
                          onChange: (e) => j(e.target.value),
                        }),
                        (0, t.jsx)("p", {
                          id: `${S}-privacy`,
                          className: "text-sm text-secondary",
                          children: (0, t.jsx)(d.A, { ...ey.privacy }),
                        }),
                        E.isError &&
                          (0, t.jsx)("p", {
                            id: `${S}-error`,
                            role: "alert",
                            className: "text-sm text-danger",
                            children: (0, t.jsx)(d.A, { ...ey.failed }),
                          }),
                      ],
                    }),
                    (0, t.jsx)("p", {
                      className: "text-sm text-secondary",
                      children: (0, t.jsx)(d.A, { ...ey.accessUnchanged }),
                    }),
                    (0, t.jsx)(g.$, {
                      type: "submit",
                      color: "primary",
                      size: "dialogAction",
                      disabled: !D || R || E.isPending,
                      loading: E.isPending,
                      children: (0, t.jsx)(d.A, { ...(E.isPending ? ey.submitting : ey.submit) }),
                    }),
                  ],
                })),
            (_[21] = N),
            (_[22] = S),
            (_[23] = E),
            (_[24] = R),
            (_[25] = M),
            (_[26] = D),
            (_[27] = f))
          : (f = _[27]),
        _[28] !== h || _[29] !== f || _[30] !== q
          ? ((v = (0, t.jsxs)("section", {
              className: "flex flex-col gap-4",
              "aria-labelledby": q,
              children: [h, m, f],
            })),
            (_[28] = h),
            (_[29] = f),
            (_[30] = q),
            (_[31] = v))
          : (v = _[31]),
        v
      )
    }
    function ex(e) {
      let a,
        i,
        t = (0, n.c)(4),
        { view: s } = e,
        r = (0, c.Ul)(f.YV),
        o = (0, l.useRef)(null)
      return (
        t[0] !== r || t[1] !== s
          ? ((a = () => {
              r !== f.Cg && o.current !== s && ((o.current = s), r.logProductEvent(v.Si, { view: s }))
            }),
            (i = [r, s]),
            (t[0] = r),
            (t[1] = s),
            (t[2] = a),
            (t[3] = i))
          : ((a = t[2]), (i = t[3])),
        (0, l.useEffect)(a, i),
        null
      )
    }
    var eP = i("SPnB")
    i("X1mr")
    var eT = i("ReGc"),
      eR = i("WuIC"),
      eI = i("UR81")
    function ew(e) {
      let a,
        i,
        s = (0, n.c)(9),
        { application: r } = e,
        o = (0, u.As)(),
        l = (0, c.Ul)(eP.o8),
        { data: d, isError: g, isPending: h } = (0, c._U)(p.sE, o.accountId),
        m = (0, c.Ul)(eT.a)
      if (l !== o.userId || g || h || null == d || ("approved" !== r.state && "access_granted" !== r.state)) return null
      if (s[0] !== r || s[1] !== d.account_ordering || s[2] !== d.accounts) {
        for (let e of ((a = []), d.account_ordering)) {
          let i = d.accounts[e]?.account
          null != i &&
            i.organization_id === r.organizationId &&
            null != i.account_id &&
            /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(i.account_id) &&
            "workspace" === i.structure &&
            !i.is_deactivated &&
            ["account-owner", "account-admin", "standard-user"].includes(i.account_user_role ?? "") &&
            "k12" !== i.plan_type &&
            (0, eI.uz)(i.plan_type) &&
            a.push({
              workspaceId: i.account_id,
              workspaceName: i.name?.trim() || i.account_id,
              canConfigure: "account-owner" === i.account_user_role || "account-admin" === i.account_user_role,
            })
        }
        ;((s[0] = r), (s[1] = d.account_ordering), (s[2] = d.accounts), (s[3] = a))
      } else a = s[3]
      if (!a.some((e) => e.workspaceId === o.accountId)) return null
      let f = null
      if ((m?.data != null && (f = null != m.data.chatGptDesktopAuthOrigin), null == f)) return null
      let v = "access_granted" === r.state,
        _ = f ? "https://admin.api.openai.org" : "https://admin.openai.com"
      return (
        s[4] !== o.email || s[5] !== v || s[6] !== _ || s[7] !== a
          ? ((i = (0, t.jsx)(eS, { workspaces: a, accessGranted: v, portalOrigin: _, email: o.email })),
            (s[4] = o.email),
            (s[5] = v),
            (s[6] = _),
            (s[7] = a),
            (s[8] = i))
          : (i = s[8]),
        i
      )
    }
    function eS(e) {
      let a,
        i,
        s,
        r,
        o,
        c = (0, n.c)(15),
        { workspaces: l, accessGranted: p, portalOrigin: u, email: g } = e
      if (0 === l.length) return null
      if (
        (c[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, t.jsx)("h3", {
              className: "text-lg font-semibold",
              children: (0, t.jsx)(d.A, {
                id: "chatgpt.rosalind_access.tracking.workspace_model_settings.heading",
                defaultMessage: "Configure workspace model access",
                description:
                  "Heading above workspace-specific Admin Console links on the GPT-Rosalind application tracker. Workspace configuration is separate from organization-level provisioning.",
              }),
            })),
            (c[0] = a))
          : (a = c[0]),
        c[1] !== p
          ? ((i = (0, t.jsx)("p", {
              className: "text-sm text-secondary",
              children: p
                ? (0, t.jsx)(d.A, {
                    id: "chatgpt.rosalind_access.tracking.workspace_model_settings.active.description",
                    defaultMessage:
                      "Your organization’s GPT-Rosalind access is active. Workspace owners and admins can turn on GPT-Rosalind by configuring user access in Admin Console",
                    description:
                      "Instructions shown only after organization access is granted; workspace admins must configure user access separately",
                  })
                : (0, t.jsx)(d.A, {
                    id: "chatgpt.rosalind_access.tracking.workspace_model_settings.acceptance_required.description",
                    defaultMessage:
                      "Activation can take a few minutes. Workspace owners and admins can turn on GPT-Rosalind by configuring user access in Admin Console",
                    description:
                      "Workspace configuration guidance while organization activation is still pending; does not claim that access is active",
                  }),
            })),
            (c[1] = p),
            (c[2] = i))
          : (i = c[2]),
        c[3] !== g || c[4] !== u || c[5] !== l)
      ) {
        let e
        ;(c[7] !== g || c[8] !== u
          ? ((e = (e) => {
              let a = new URL(`/workspace/${encodeURIComponent(e.workspaceId)}/models?tab=workspace`, u)
              return (
                a.searchParams.set("redirectfrom", "chatgpt"),
                g && a.searchParams.set("login_hint", g),
                (0, eR.m)(a),
                (0, t.jsx)(
                  er.G,
                  {
                    href: a.href,
                    initiator: "external_link",
                    appearance: "button",
                    underline: "none",
                    children: (0, t.jsx)(d.A, {
                      id: "chatgpt.rosalind_access.tracking.workspace_model_settings.configure.button",
                      defaultMessage: "Configure {workspaceName}",
                      description:
                        "Opens the named workspace's model settings in Admin Console. The workspace belongs to the selected organization.",
                      values: { workspaceName: e.workspaceName },
                    }),
                  },
                  e.workspaceId,
                )
              )
            }),
            (c[7] = g),
            (c[8] = u),
            (c[9] = e))
          : (e = c[9]),
          (s = l.filter(eC).map(e)),
          (c[3] = g),
          (c[4] = u),
          (c[5] = l),
          (c[6] = s))
      } else s = c[6]
      return (
        c[10] !== s
          ? ((r = (0, t.jsx)("div", { className: "flex flex-wrap gap-2", children: s })), (c[10] = s), (c[11] = r))
          : (r = c[11]),
        c[12] !== i || c[13] !== r
          ? ((o = (0, t.jsxs)("section", { className: "flex flex-col items-start gap-3", children: [a, i, r] })),
            (c[12] = i),
            (c[13] = r),
            (c[14] = o))
          : (o = c[14]),
        o
      )
    }
    function eC(e) {
      let { canConfigure: a } = e
      return a
    }
    function ez(e) {
      let a,
        i,
        s,
        r,
        c,
        l,
        d,
        p,
        u,
        g = (0, n.c)(46),
        {
          surface: h,
          identity: m,
          organization: f,
          target: v,
          canRequestResearchUpgrade: _,
          contextRefreshing: b,
          refreshContext: y,
        } = e
      g[0] !== m.accountId || g[1] !== m.userId || g[2] !== v.bioagentsApplicationReference || g[3] !== v.organizationId
        ? ((a = ["rosalind-customer-status", m.userId, m.accountId, v.organizationId, v.bioagentsApplicationReference]),
          (g[0] = m.accountId),
          (g[1] = m.userId),
          (g[2] = v.bioagentsApplicationReference),
          (g[3] = v.organizationId),
          (g[4] = a))
        : (a = g[4])
      let A = a
      ;(g[5] !== m || g[6] !== v
        ? ((i = (e) => {
            let { signal: a } = e
            return S(m, v, a)
          }),
          (g[5] = m),
          (g[6] = v),
          (g[7] = i))
        : (i = g[7]),
        g[8] !== A || g[9] !== i
          ? ((s = { queryKey: A, queryFn: i, retry: !1, staleTime: 0, refetchOnWindowFocus: !0 }),
            (g[8] = A),
            (g[9] = i),
            (g[10] = s))
          : (s = g[10]))
      let { data: x, isPending: P, isError: T, isFetching: R, refetch: I } = (0, o.I)(s)
      if (P) {
        let e
        return (
          g[11] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, t.jsx)(eN, {})), (g[11] = e)) : (e = g[11]),
          e
        )
      }
      if (T || null == x) {
        let e, a
        return (
          g[12] !== I ? ((e = () => void I()), (g[12] = I), (g[13] = e)) : (e = g[13]),
          g[14] !== h || g[15] !== e
            ? ((a = (0, t.jsx)(ej, { surface: h, onRetry: e })), (g[14] = h), (g[15] = e), (g[16] = a))
            : (a = g[16]),
          a
        )
      }
      g[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = (0, t.jsx)(ex, { view: "CHATGPT_WEB_ROSALIND_APPLICATION_STATUS_VIEW_APPLICATION" })), (g[17] = r))
        : (r = g[17])
      let w = R || b
      return (
        g[18] !== I || g[19] !== y
          ? ((c = () => {
              ;(I(), y())
            }),
            (g[18] = I),
            (g[19] = y),
            (g[20] = c))
          : (c = g[20]),
        g[21] !== x || g[22] !== m || g[23] !== f || g[24] !== A || g[25] !== h || g[26] !== w || g[27] !== c
          ? ((l = (0, t.jsx)(e_, {
              surface: h,
              application: x,
              organization: f,
              identity: m,
              queryKey: A,
              refreshing: w,
              onRefresh: c,
            })),
            (g[21] = x),
            (g[22] = m),
            (g[23] = f),
            (g[24] = A),
            (g[25] = h),
            (g[26] = w),
            (g[27] = c),
            (g[28] = l))
          : (l = g[28]),
        g[29] !== x
          ? ((d = ("approved" === x.state || "access_granted" === x.state) && (0, t.jsx)(ew, { application: x })),
            (g[29] = x),
            (g[30] = d))
          : (d = g[30]),
        g[31] !== _ ||
        g[32] !== b ||
        g[33] !== x ||
        g[34] !== m ||
        g[35] !== R ||
        g[36] !== A ||
        g[37] !== I ||
        g[38] !== y ||
        g[39] !== v.bioagentsApplicationReference ||
        g[40] !== v.organizationId
          ? ((p =
              _ &&
              (0, t.jsx)(
                eA,
                {
                  application: x,
                  identity: m,
                  queryKey: A,
                  refreshing: R || b,
                  onRefresh: () => {
                    ;(I(), y())
                  },
                },
                `${m.userId}:${m.accountId}:${v.organizationId}:${v.bioagentsApplicationReference}`,
              )),
            (g[31] = _),
            (g[32] = b),
            (g[33] = x),
            (g[34] = m),
            (g[35] = R),
            (g[36] = A),
            (g[37] = I),
            (g[38] = y),
            (g[39] = v.bioagentsApplicationReference),
            (g[40] = v.organizationId),
            (g[41] = p))
          : (p = g[41]),
        g[42] !== l || g[43] !== d || g[44] !== p
          ? ((u = (0, t.jsxs)(t.Fragment, { children: [r, l, d, p] })),
            (g[42] = l),
            (g[43] = d),
            (g[44] = p),
            (g[45] = u))
          : (u = g[45]),
        u
      )
    }
    function eN() {
      let e,
        a,
        i = (0, n.c)(2)
      return (
        i[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, t.jsx)(h.y, {})), (i[0] = e)) : (e = i[0]),
        i[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, t.jsxs)("div", {
              className: "flex min-h-40 items-center justify-center",
              role: "status",
              children: [
                e,
                (0, t.jsx)("span", {
                  className: "sr-only",
                  children: (0, t.jsx)(d.A, {
                    id: "chatgpt.rosalind_access.customer.status.loading",
                    defaultMessage: "Loading application status",
                    description: "Accessible loading announcement on the Rosalind application tracker",
                  }),
                }),
              ],
            })),
            (i[1] = a))
          : (a = i[1]),
        a
      )
    }
    function ej(e) {
      let a,
        i,
        s,
        r,
        o,
        l = (0, n.c)(9),
        { surface: p, onRetry: u } = e,
        h = (0, c.Ul)(f.YV)
      return (
        l[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, t.jsx)(ex, { view: "CHATGPT_WEB_ROSALIND_APPLICATION_STATUS_VIEW_UNAVAILABLE" })), (l[0] = a))
          : (a = l[0]),
        l[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, t.jsx)("p", {
              role: "alert",
              children: (0, t.jsx)(d.A, { ...ec.applicationStatusUnavailable }),
            })),
            (l[1] = i))
          : (i = l[1]),
        l[2] !== h || l[3] !== u || l[4] !== p
          ? ((s = () => {
              ;(_(
                h,
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_RETRY_STATUS",
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_STARTED",
                p,
              ),
                u())
            }),
            (l[2] = h),
            (l[3] = u),
            (l[4] = p),
            (l[5] = s))
          : (s = l[5]),
        l[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, t.jsx)(d.A, { ...ec.retryOrganizationLookup })), (l[6] = r))
          : (r = l[6]),
        l[7] !== s
          ? ((o = (0, t.jsxs)("div", {
              className: "flex flex-col items-start gap-4",
              children: [
                a,
                i,
                (0, t.jsx)(g.$, { color: "secondary", size: "dialogAction", type: "button", onClick: s, children: r }),
              ],
            })),
            (l[7] = s),
            (l[8] = o))
          : (o = l[8]),
        o
      )
    }
    let eO = {
      [-1]: "CHATGPT_WEB_ROSALIND_APPLICATION_STEP_PERSONA",
      0: "CHATGPT_WEB_ROSALIND_APPLICATION_STEP_ORGANIZATION",
      1: "CHATGPT_WEB_ROSALIND_APPLICATION_STEP_RESEARCH",
      2: "CHATGPT_WEB_ROSALIND_APPLICATION_STEP_LOCATIONS_AND_SAFEGUARDS",
      3: "CHATGPT_WEB_ROSALIND_APPLICATION_STEP_REVIEW",
    }
    function eL(e, a, i) {
      if (void 0 !== eO[a])
        try {
          e.logProductEvent(v.op, { ...i, step: eO[a], surface: "CHATGPT_WEB_ROSALIND_APPLICATION_SURFACE_FORM" })
        } catch {}
    }
    let ek = {
      organizationId: "CHATGPT_WEB_ROSALIND_APPLICATION_VALIDATION_FIELD_ORGANIZATION_ID",
      requestedEnhancedPrivacy: "CHATGPT_WEB_ROSALIND_APPLICATION_VALIDATION_FIELD_REQUESTED_RESEARCH_MODE",
      products: "CHATGPT_WEB_ROSALIND_APPLICATION_VALIDATION_FIELD_PRODUCTS",
      researchPurpose: "CHATGPT_WEB_ROSALIND_APPLICATION_VALIDATION_FIELD_RESEARCH_PURPOSE",
      researchScopes: "CHATGPT_WEB_ROSALIND_APPLICATION_VALIDATION_FIELD_RESEARCH_SCOPES",
      primaryCountry: "CHATGPT_WEB_ROSALIND_APPLICATION_VALIDATION_FIELD_PRIMARY_COUNTRY",
      additionalLocations: "CHATGPT_WEB_ROSALIND_APPLICATION_VALIDATION_FIELD_ADDITIONAL_LOCATIONS",
      additionalCountries: "CHATGPT_WEB_ROSALIND_APPLICATION_VALIDATION_FIELD_ADDITIONAL_COUNTRIES",
      confirmResearchSafeguards: "CHATGPT_WEB_ROSALIND_APPLICATION_VALIDATION_FIELD_CONFIRM_RESEARCH_SAFEGUARDS",
      selectedSafeguards: "CHATGPT_WEB_ROSALIND_APPLICATION_VALIDATION_FIELD_SELECTED_SAFEGUARDS",
      otherSafeguardDetails: "CHATGPT_WEB_ROSALIND_APPLICATION_VALIDATION_FIELD_OTHER_SAFEGUARD_DETAILS",
      acceptAddendum: "CHATGPT_WEB_ROSALIND_APPLICATION_VALIDATION_FIELD_ACCEPT_ADDENDUM",
      certifyAccuracy: "CHATGPT_WEB_ROSALIND_APPLICATION_VALIDATION_FIELD_CERTIFY_ACCURACY",
      certifyAuthority: "CHATGPT_WEB_ROSALIND_APPLICATION_VALIDATION_FIELD_CERTIFY_AUTHORITY",
    }
    function eE(e) {
      let a,
        i,
        t = (0, n.c)(4),
        { step: s } = e,
        r = (0, c.Ul)(f.YV),
        o = (0, l.useRef)(null)
      return (
        t[0] !== r || t[1] !== s
          ? ((a = () => {
              if (r !== f.Cg && o.current !== s && ((o.current = s), void 0 !== eO[s]))
                try {
                  r.logProductEvent(v.Oe, { step: eO[s] })
                } catch {}
            }),
            (i = [r, s]),
            (t[0] = r),
            (t[1] = s),
            (t[2] = a),
            (t[3] = i))
          : ((a = t[2]), (i = t[3])),
        (0, l.useEffect)(a, i),
        null
      )
    }
    function eG(e) {
      let a,
        i,
        t = (0, n.c)(11),
        {
          lookupFailed: s,
          displayedOrganizationCount: r,
          hasSelection: o,
          continueEnabled: d,
          createBusinessOrganizationShown: p,
          submissionEligibleCount: u,
          eligibilityUnknownCount: g,
          selectableOrganizationCount: h,
        } = e,
        m = (0, c.Ul)(f.YV),
        _ = (0, l.useRef)(null)
      return (
        t[0] !== d ||
        t[1] !== p ||
        t[2] !== r ||
        t[3] !== g ||
        t[4] !== o ||
        t[5] !== m ||
        t[6] !== s ||
        t[7] !== h ||
        t[8] !== u
          ? ((a = () => {
              let e = {
                  lookupFailed: s,
                  displayedOrganizationCount: r,
                  hasSelection: o,
                  continueEnabled: d,
                  createBusinessOrganizationShown: p,
                  submissionEligibleCount: u,
                  eligibilityUnknownCount: g,
                  selectableOrganizationCount: h,
                },
                a = JSON.stringify(e)
              if (m !== f.Cg && _.current !== a) {
                _.current = a
                try {
                  m.logProductEvent(v.Hb, e)
                } catch {}
              }
            }),
            (i = [m, s, r, o, d, p, u, g, h]),
            (t[0] = d),
            (t[1] = p),
            (t[2] = r),
            (t[3] = g),
            (t[4] = o),
            (t[5] = m),
            (t[6] = s),
            (t[7] = h),
            (t[8] = u),
            (t[9] = a),
            (t[10] = i))
          : ((a = t[9]), (i = t[10])),
        (0, l.useEffect)(a, i),
        null
      )
    }
    var eM = i("GDNt")
    let eD = A.object({
        inquiryId: A.string().regex(/^inq_[A-Za-z0-9]{16,64}$/),
        environmentId: A.string().regex(/^env_[A-Za-z0-9]{16,64}$/),
        status: A.enum([
          "created",
          "started",
          "pending",
          "completed",
          "needs_review",
          "failed",
          "approved",
          "declined",
          "expired",
        ]),
        fields: A.record(A.string(), A.string()),
        sessionToken: A.string()
          .regex(/^[A-Za-z0-9._~+/=-]{16,2048}$/)
          .optional(),
      }),
      eq = A.object({ ok: A.literal(!0), result: eD }),
      eH = A.object({
        organizationId: A.string(),
        state: A.custom(b.kO),
        bioagentsApplicationReference: A.string().regex(/^[0-9a-f]{64}$/),
        canCancel: A.boolean(),
        canResumeVerification: A.boolean().optional(),
        enhancedPrivacyFollowUpRequested: A.boolean().optional(),
        requestedResearchMode: A.custom(b.PI).optional(),
        kybStatus: A.enum([
          "not_started",
          "in_progress",
          "pending",
          "action_required",
          "passed",
          "failed",
          "expired",
          "error",
        ]).optional(),
        requiredAction: A.string().optional(),
        actionOwner: A.literal("applicant").optional(),
        personaInquiryId: A.string()
          .regex(/^inq_[A-Za-z0-9]{16,64}$/)
          .optional(),
        personaEnvironmentId: A.string()
          .regex(/^env_[A-Za-z0-9]{16,64}$/)
          .optional(),
      }),
      eV = A.looseObject({ code: A.string().optional() }),
      eB = A.enum([
        "backend_unavailable",
        "invalid_provider_response",
        "invalid_request",
        "not_configured",
        "organization_unavailable",
        "provider_unavailable",
      ])
    class eU extends Error {
      code
      status
      constructor(e, a) {
        ;(super("Rosalind business verification is unavailable"),
          (this.code = e),
          (this.status = a),
          (this.name = "RosalindPersonaRequestError"))
      }
    }
    async function eW(e, a = {}) {
      return P.Request.safeRequest("get", "/rosalind/access/context", {
        parameters: { query: { fastDiscovery: !1, organizationId: a.organizationId } },
        additionalHeaders: { [y.zBc]: e.accountId },
        expectedIdentity: e,
        expectedErrorStatuses: [400, 401, 403, 404, 422, 502, 503],
        retry: !1,
        signal: a.signal,
      })
    }
    async function eF(e) {
      try {
        let a = eq.safeParse(await e)
        if (!a.success) throw new eU("invalid_provider_response")
        return a.data.result
      } catch (a) {
        if (a instanceof eU) throw a
        let e = e$(a)
        throw new eU(eB.safeParse(e?.body.code).data ?? "backend_unavailable", e?.status)
      }
    }
    function e$(e) {
      if (!(e instanceof eM.fk)) return null
      try {
        let a = eV.safeParse(JSON.parse(e.message))
        return a.success ? { body: a.data, status: e.status } : null
      } catch {
        return null
      }
    }
    var eY = i("on57"),
      eK = i("UIGa")
    i("MhWb")
    let eZ = "u" > typeof navigator,
      eX = eZ ? (navigator.userAgent ?? "") : ""
    ;(eZ && /(jsdom|happy-dom)/i.test(eX)) || Reflect.get(globalThis, "happyDOM")
    let eQ = (e) => {
      var a
      let i = (0, l.useRef)(null),
        n = (0, l.useId)(),
        s = `search-ui-input-${n}`,
        {
          id: r,
          name: o,
          variant: c = "outline",
          size: d = "md",
          gutterSize: p,
          className: u,
          autoComplete: g,
          disabled: h = !1,
          readOnly: m = !1,
          invalid: f = !1,
          allowAutofillExtensions: v = !!o || (!!g && "off" !== g),
          onFocus: _,
          onBlur: b,
          onAnimationStart: y,
          onAutofill: A,
          autoSelect: x,
          rows: P = 3,
          maxRows: T,
          autoResize: R,
          maxHeight: I,
          resize: w = "none",
          ref: S,
          onChange: C,
          __isWidget: z,
          ...N
        } = e,
        [j, O] = (0, l.useState)(!1),
        L = R ? Math.max(T ?? 10, P) : P
      ;(0, l.useEffect)(() => {
        x && i.current?.select()
      }, [x])
      let k = (0, l.useCallback)(() => {
        if (!R || !i.current || void 0 === L) return
        i.current.style.height = "0px"
        let e = i.current.scrollHeight
        i.current.style.height = e + "px"
      }, [R, L])
      return (
        (0, l.useEffect)(() => {
          k()
        }, [e.value, P, k]),
        (0, t.jsx)("div", {
          className: (0, eY.A)("Container-g0Lqwa", u),
          "data-w-component": z ? "textarea" : "",
          "data-variant": c,
          "data-size": d,
          "data-gutter-size": p,
          "data-focused": j,
          "data-disabled": h ? "" : void 0,
          "data-readonly": m ? "" : void 0,
          "data-invalid": f ? "" : void 0,
          style: Object.keys(
            (a = {
              "textarea-min-rows": `${P}`,
              "textarea-max-rows": `${L}`,
              "textarea-max-height": I,
              ...("none" !== w ? { "textarea-resize": w, "textarea-resizer-visibility": "visible" } : null),
            }),
          ).reduce((e, i) => {
            let t = a[i]
            if (t || 0 === t) {
              let a = i.startsWith("--") ? "" : "--",
                n = "number" == typeof t ? `${t}px` : t
              e[`${a}${i}`] = n
            }
            return e
          }, {}),
          children: (0, t.jsx)("textarea", {
            ...N,
            onChange: (e) => {
              ;(C?.(e), k())
            },
            ref: (0, eK.P)([i, S]),
            id: r || (v ? void 0 : s),
            className: "Textarea-tAUmai",
            name: o,
            autoComplete: g,
            readOnly: m,
            disabled: h,
            rows: P,
            onFocus: (e) => {
              ;(O(!0), _?.(e))
            },
            onBlur: (e) => {
              ;(O(!1), b?.(e))
            },
            onAnimationStart: (e) => {
              ;(y?.(e), "native-autofill-in" === e.animationName && A?.())
            },
            "data-lpignore": !v || void 0,
            "data-1p-ignore": !v || void 0,
          }),
        })
      )
    }
    var eJ = i("slpy"),
      e0 = i("psL3"),
      e1 = i("GGiG"),
      e2 = i("rY4A"),
      e4 = i("Pk1v"),
      e3 = i("ZZgR")
    function e5(e) {
      let a,
        i,
        s,
        r,
        o,
        c = (0, n.c)(52),
        p = (0, j.A)(),
        [u, h] = (0, l.useState)(""),
        [m, f] = (0, l.useState)(!1)
      if (c[0] !== p || c[1] !== e.organizationId || c[2] !== e.organizations || c[3] !== e.variant) {
        let t, n
        ;(c[8] !== e.organizationId
          ? ((t = (a) => a.id === e.organizationId), (c[8] = e.organizationId), (c[9] = t))
          : (t = c[9]),
          (s = e.organizations.find(t)),
          (a = "application" === e.variant),
          c[10] !== a || c[11] !== p
            ? ((n = a
                ? p.formatMessage({
                    id: "chatgpt.rosalind_access.organization.selection.menu_prompt",
                    defaultMessage: "Select an organization",
                    description: "Search prompt in the expanded organization picker on the Rosalind application form.",
                  })
                : p.formatMessage(H.selectOrganization)),
              (c[10] = a),
              (c[11] = p),
              (c[12] = n))
            : (n = c[12]),
          (i = n),
          (r = s
            ? p.formatMessage(
                {
                  id: "chatgpt.rosalind_access.organization.context.current",
                  defaultMessage: "Current organization: {name}",
                  description:
                    "Accessible name of the GPT-Rosalind organization picker. Placeholder {name} is the selected organization's display name.",
                },
                { name: s.name },
              )
            : void 0),
          (c[0] = p),
          (c[1] = e.organizationId),
          (c[2] = e.organizations),
          (c[3] = e.variant),
          (c[4] = a),
          (c[5] = i),
          (c[6] = s),
          (c[7] = r))
      } else ((a = c[4]), (i = c[5]), (s = c[6]), (r = c[7]))
      let v = r
      if (
        c[13] !== a ||
        c[14] !== p.locale ||
        c[15] !== i ||
        c[16] !== m ||
        c[17] !== e ||
        c[18] !== u ||
        c[19] !== s ||
        c[20] !== v
      ) {
        let n, r, l, _, b, y, A, x
        c[22] !== p.locale || c[23] !== u
          ? ((n = (e) => `${e.name} ${e.id}`.toLocaleLowerCase(p.locale).includes(u.toLocaleLowerCase(p.locale))),
            (c[22] = p.locale),
            (c[23] = u),
            (c[24] = n))
          : (n = c[24])
        let P = e.organizations.filter(n),
          T = a ? "start" : void 0,
          R = a ? "w-80 max-w-[var(--radix-popover-content-available-width)]" : void 0
        c[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (e) => {
              ;(f(e), e || h(""))
            }),
            (c[25] = r))
          : (r = c[25])
        let I = a ? "max-w-full self-start" : void 0,
          w = a ? "field" : "secondary",
          S = a ? "large" : void 0,
          C = e.lookupPending || e.disabled
        ;(c[26] !== a || c[27] !== s || c[28] !== v
          ? ((l =
              a && s
                ? (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)(e9, { name: s.name }),
                      (0, t.jsx)("span", { className: "truncate", children: s.name }),
                    ],
                  })
                : (v ?? (0, t.jsx)(d.A, { ...H.selectOrganization }))),
            (c[26] = a),
            (c[27] = s),
            (c[28] = v),
            (c[29] = l))
          : (l = c[29]),
          c[30] !== a
            ? ((_ = a && (0, t.jsx)(N.Aq_, { "aria-hidden": "true" })), (c[30] = a), (c[31] = _))
            : (_ = c[31]),
          c[32] !== v || c[33] !== l || c[34] !== _ || c[35] !== I || c[36] !== w || c[37] !== S || c[38] !== C
            ? ((b = (0, t.jsxs)(g.$, {
                className: I,
                "aria-label": v,
                color: w,
                radius: S,
                size: "dialogAction",
                type: "button",
                disabled: C,
                children: [l, _],
              })),
              (c[32] = v),
              (c[33] = l),
              (c[34] = _),
              (c[35] = I),
              (c[36] = w),
              (c[37] = S),
              (c[38] = C),
              (c[39] = b))
            : (b = c[39]),
          c[40] !== i || c[41] !== u
            ? ((y = (0, t.jsx)(e3.G.Input, {
                name: "openai-organization-search",
                value: u,
                onValueChange: h,
                placeholder: i,
              })),
              (c[40] = i),
              (c[41] = u),
              (c[42] = y))
            : (y = c[42]),
          c[43] !== a || c[44] !== e
            ? ((A = (i) =>
                (0, t.jsx)(
                  e3.G.Item,
                  {
                    value: i.id,
                    isActive: a && i.id === e.organizationId,
                    RightIcon: a && i.id === e.organizationId ? N.ALZ : void 0,
                    disabled: e.canSelectOrganization?.(i.id) === !1,
                    onSelect: () => {
                      e.disabled ||
                        e.lookupPending ||
                        e.canSelectOrganization?.(i.id) === !1 ||
                        (i.id !== e.organizationId && e.onSelectOrganization(i.id), f(!1), h(""))
                    },
                    children: a
                      ? (0, t.jsxs)("span", {
                          className: "flex min-w-0 items-center gap-2 py-1",
                          children: [
                            (0, t.jsx)(e9, { name: i.name }),
                            (0, t.jsxs)("span", {
                              className: "flex min-w-0 flex-col",
                              children: [
                                (0, t.jsx)("span", { className: "truncate", children: i.name }),
                                (0, t.jsxs)("span", {
                                  className: "flex items-center gap-2 truncate text-xs text-secondary",
                                  children: [
                                    e.chatgptWorkspaceOrganizationIds?.includes(i.id) &&
                                      (0, t.jsx)(O.E, {
                                        variant: "neutralCompact",
                                        children: (0, t.jsx)(d.A, {
                                          id: "chatgpt.rosalind_access.organization.selection.membership.chatgpt_codex.label",
                                          defaultMessage: "ChatGPT / Codex",
                                          description:
                                            "Short neutral pill on an organization card in the GPT-Rosalind application, shown to applicants who belong to a ChatGPT workspace linked to that organization. Identifies workspace membership, not approved Rosalind model access. ChatGPT and Codex are product names. May appear beside an API membership pill. No placeholders.",
                                        }),
                                      }),
                                    i.hasDirectApiMembership &&
                                      (0, t.jsx)(O.E, {
                                        variant: "neutralCompact",
                                        children: (0, t.jsx)(d.A, {
                                          id: "chatgpt.rosalind_access.organization.selection.membership.api.label",
                                          defaultMessage: "API",
                                          description:
                                            "Short neutral pill on an organization card in the GPT-Rosalind application, shown to applicants who are direct members of that OpenAI API organization. Identifies organization membership, not approved Rosalind model access. API means application programming interface. May appear beside a ChatGPT/Codex workspace membership pill. No placeholders.",
                                        }),
                                      }),
                                    (0, t.jsx)("span", { className: "truncate", children: i.id }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        })
                      : i.name,
                  },
                  i.id,
                )),
              (c[43] = a),
              (c[44] = e),
              (c[45] = A))
            : (A = c[45]))
        let z = (0, t.jsxs)(e3.G.Root, {
          defaultValue: a ? e.organizationId : void 0,
          label: i,
          children: [y, (0, t.jsx)(e3.G.List, { children: P.map(A) })],
        })
        c[46] !== m || c[47] !== b || c[48] !== z || c[49] !== T || c[50] !== R
          ? ((x = (0, t.jsx)(e3.A, {
              align: T,
              contentClassName: R,
              open: m,
              onOpenChange: r,
              triggerButton: b,
              children: z,
            })),
            (c[46] = m),
            (c[47] = b),
            (c[48] = z),
            (c[49] = T),
            (c[50] = R),
            (c[51] = x))
          : (x = c[51])
        let j = x
        ;((o = (0, t.jsxs)(t.Fragment, {
          children: [
            e.analytics &&
              (0, t.jsx)(eG, {
                ...e.analytics,
                displayedOrganizationCount: m ? P.length : void 0,
                selectableOrganizationCount:
                  e.lookupPending || e.disabled ? 0 : P.filter((a) => e.canSelectOrganization?.(a.id) !== !1).length,
                submissionEligibleCount: P.filter(e8).length,
                eligibilityUnknownCount: P.filter(e6).length,
                hasSelection: null != s,
              }),
            j,
          ],
        })),
          (c[13] = a),
          (c[14] = p.locale),
          (c[15] = i),
          (c[16] = m),
          (c[17] = e),
          (c[18] = u),
          (c[19] = s),
          (c[20] = v),
          (c[21] = o))
      } else o = c[21]
      return o
    }
    function e6(e) {
      return void 0 === e.submissionEligible
    }
    function e8(e) {
      return !0 === e.submissionEligible
    }
    function e9(e) {
      let a,
        i,
        s = (0, n.c)(4),
        { name: r } = e
      s[0] !== r
        ? ((a = r.trim().split(/\s+/u).slice(0, 2).map(e7).join("").toLocaleUpperCase()), (s[0] = r), (s[1] = a))
        : (a = s[1])
      let o = a
      return (
        s[2] !== o
          ? ((i = (0, t.jsx)("span", {
              "aria-hidden": "true",
              className:
                "flex size-7 shrink-0 items-center justify-center rounded-md bg-primary-soft text-xs font-medium text-secondary",
              children: o,
            })),
            (s[2] = o),
            (s[3] = i))
          : (i = s[3]),
        i
      )
    }
    function e7(e) {
      return Array.from(e)[0]
    }
    var ae = i("jLVq"),
      aa = i("WFY2")
    let ai = (0, q.YK)({
      notStarted: {
        id: "chatgpt.rosalind_access.persona.not_started",
        defaultMessage: "Not started",
        description:
          "Compact business-verification status badge on the GPT-Rosalind Review screen or Persona step before the applicant starts an inquiry. Not started describes the provider verification process, not the entire access application.",
      },
      statusCreated: {
        id: "chatgpt.rosalind_access.persona.status.incomplete.created",
        defaultMessage: "Incomplete",
        description:
          "Compact business-verification status badge in the GPT-Rosalind Review summary when a Persona inquiry exists but the applicant has not begun its steps. Incomplete describes the verification inquiry; it does not mean the access application has been denied.",
      },
      statusStarted: {
        id: "chatgpt.rosalind_access.persona.status.incomplete.started",
        defaultMessage: "Incomplete",
        description:
          "Compact business-verification status badge in the GPT-Rosalind Review summary when the applicant has started but not finished the Persona inquiry. Incomplete describes unfinished provider steps and does not mean verification has failed.",
      },
      statusPending: {
        id: "chatgpt.rosalind_access.persona.status.pending",
        defaultMessage: "Pending",
        description:
          "Compact business-verification status badge on the GPT-Rosalind Persona step or Review summary while the provider reports a pending inquiry. The applicant cannot continue past this verification state yet. Do not translate Pending as approved or verified.",
      },
      statusCompleted: {
        id: "chatgpt.rosalind_access.persona.status.details_submitted",
        defaultMessage: "Details submitted",
        description:
          "Compact business-verification status badge on the GPT-Rosalind Persona step or Review summary after the applicant completes and submits the provider inquiry. Details submitted confirms receipt of information; it does not claim the business is verified or GPT-Rosalind access is approved.",
      },
      statusNeedsReview: {
        id: "chatgpt.rosalind_access.persona.status.needs_review",
        defaultMessage: "Needs review",
        description:
          "Compact business-verification status badge on the GPT-Rosalind Persona step or Review summary when the provider has referred the submitted inquiry for manual review. It describes a reviewer task, not an action the applicant can perform in this badge.",
      },
      statusFailed: {
        id: "chatgpt.rosalind_access.persona.status.unsuccessful",
        defaultMessage: "Unsuccessful",
        description:
          "Compact business-verification status badge on the GPT-Rosalind Persona step or Review summary when the provider reports an unsuccessful inquiry. Use neutral wording for the verification outcome; this is not a final denial of the GPT-Rosalind access application.",
      },
      statusApproved: {
        id: "chatgpt.rosalind_access.persona.status.verified",
        defaultMessage: "Verified",
        description:
          "Compact business-verification status badge on the GPT-Rosalind Persona step or Review summary when Persona approves the organization verification inquiry. Verified refers only to business verification and must not imply that the separate GPT-Rosalind application or product access is approved.",
      },
      statusDeclined: {
        id: "chatgpt.rosalind_access.persona.status.declined",
        defaultMessage: "Declined",
        description:
          "Compact business-verification status badge on the GPT-Rosalind Persona step or Review summary when Persona declines the inquiry. It reports the verification provider outcome, not a final decision on the separate GPT-Rosalind application.",
      },
      statusExpired: {
        id: "chatgpt.rosalind_access.persona.status.session_expired",
        defaultMessage: "Session expired",
        description:
          "Compact business-verification status badge on the GPT-Rosalind Persona step or Review summary when the provider inquiry has expired. Session means the Persona verification process, not the signed-in OpenAI account session; the applicant must reopen Persona before continuing.",
      },
    })
    function at(e) {
      let a,
        i,
        s,
        r = (0, n.c)(7),
        { status: o, submittedPill: c } = e,
        l = void 0 !== c && c && "completed" === o ? "infoPill" : "neutral"
      return (
        r[0] !== o
          ? ((a = (function (e) {
              if (null == e) return ai.notStarted
              switch (e) {
                case "created":
                  return ai.statusCreated
                case "started":
                  return ai.statusStarted
                case "pending":
                  return ai.statusPending
                case "completed":
                  return ai.statusCompleted
                case "needs_review":
                  return ai.statusNeedsReview
                case "failed":
                  return ai.statusFailed
                case "approved":
                  return ai.statusApproved
                case "declined":
                  return ai.statusDeclined
                case "expired":
                  return ai.statusExpired
              }
            })(o)),
            (r[0] = o),
            (r[1] = a))
          : (a = r[1]),
        r[2] !== a ? ((i = (0, t.jsx)(d.A, { ...a })), (r[2] = a), (r[3] = i)) : (i = r[3]),
        r[4] !== l || r[5] !== i
          ? ((s = (0, t.jsx)("span", {
              "aria-live": "polite",
              children: (0, t.jsx)(O.E, { variant: l, children: i }),
            })),
            (r[4] = l),
            (r[5] = i),
            (r[6] = s))
          : (s = r[6]),
        s
      )
    }
    let an = /^inq_[A-Za-z0-9]{16,64}$/,
      as = /^env_[A-Za-z0-9]{16,64}$/,
      ar = /^[A-Za-z0-9._~+/=-]{16,2048}$/,
      ao = {
        title: H.personaStep,
        heading: H.personaHeading,
        description: H.personaVisualDescription,
        visualHeading: H.personaVisualHeading,
        visualDescription: H.personaVisualDescription,
      },
      ac = new Set(["completed", "needs_review", "approved", "declined", "failed"]),
      al = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/,
      ad = (0, q.YK)({
        personaBrand: {
          id: "chatgpt.rosalind_access.persona.brand",
          description:
            "Accessible brand name for the Persona logo in the GPT-Rosalind business-verification card. Persona is a proper name and should retain its brand spelling.",
          defaultMessage: "Persona",
        },
        start: {
          id: "chatgpt.rosalind_access.persona.start_verification",
          description:
            "Primary button in the GPT-Rosalind business-verification card that opens the real Persona verification flow for the selected organization.",
          defaultMessage: "Start verification",
        },
        starting: {
          id: "chatgpt.rosalind_access.persona.opening",
          description:
            "Temporary compact status in the GPT-Rosalind business-verification card while the Persona verification dialog is opening.",
          defaultMessage: "Opening…",
        },
        open: {
          id: "chatgpt.rosalind_access.persona.open",
          description:
            "Temporary compact status in the GPT-Rosalind business-verification card while the Persona verification dialog is open.",
          defaultMessage: "Verification open",
        },
        checking: {
          id: "chatgpt.rosalind_access.persona.checking",
          description:
            "Temporary compact status in the GPT-Rosalind business-verification card while the backend checks the current Persona inquiry status.",
          defaultMessage: "Checking status…",
        },
        resume: {
          id: "chatgpt.rosalind_access.persona.resume",
          description:
            "Button in the GPT-Rosalind business-verification card that reopens an incomplete Persona inquiry so the applicant can continue.",
          defaultMessage: "Resume verification",
        },
        reopen: {
          id: "chatgpt.rosalind_access.persona.reopen",
          description:
            "Button in the GPT-Rosalind business-verification card that opens Persona again for a pending or expired verification inquiry.",
          defaultMessage: "Open Persona",
        },
        retry: {
          id: "chatgpt.rosalind_access.persona.retry",
          description: "Retry button in the GPT-Rosalind business-verification card after Persona could not be opened.",
          defaultMessage: "Try again",
        },
        checkAgain: {
          id: "chatgpt.rosalind_access.persona.check_again",
          description:
            "Retry button in the GPT-Rosalind business-verification card after the backend could not retrieve the inquiry status. Requests status again without starting a separate inquiry.",
          defaultMessage: "Check again",
        },
        openError: {
          id: "chatgpt.rosalind_access.persona.error.open",
          description:
            "Concise error message in the GPT-Rosalind business-verification card when the real Persona verification dialog fails to open.",
          defaultMessage: "Couldn’t open verification.",
        },
        statusError: {
          id: "chatgpt.rosalind_access.persona.error.status",
          description:
            "Concise error message in the GPT-Rosalind business-verification card when the backend cannot check the current Persona inquiry status.",
          defaultMessage: "Couldn’t check verification status.",
        },
        interrupted: {
          id: "chatgpt.rosalind_access.persona.error.interrupted",
          description:
            "Concise error message in the GPT-Rosalind business-verification card when an opened Persona verification session is interrupted before the status can be confirmed.",
          defaultMessage: "Verification was interrupted.",
        },
        needsReview: {
          id: "chatgpt.rosalind_access.persona.guidance.review",
          description:
            "Supporting guidance in the GPT-Rosalind business-verification card when Persona has received details and requires review. The applicant may continue the access application; this does not mean the business is verified.",
          defaultMessage: "You can continue with your application.",
        },
        negativeResult: {
          id: "chatgpt.rosalind_access.persona.guidance.negative",
          description:
            "Supporting guidance in the GPT-Rosalind business-verification card after a declined or failed Persona outcome. The existing application gate allows continuing, but OpenAI must review the outcome before granting access.",
          defaultMessage: "You can continue, but OpenAI must review this result.",
        },
      })
    function ap(e) {
      let a,
        s,
        r,
        o,
        c,
        p,
        u,
        h,
        m,
        f,
        v,
        _,
        b,
        y,
        A,
        x,
        P,
        T = (0, n.c)(50),
        {
          organizationId: R,
          previousStatus: I,
          startPersona: w,
          checkPersona: S,
          onStatusChange: C,
          onActivityChange: z,
        } = e,
        N = (0, j.A)(),
        O = (0, l.useRef)(null),
        L = (0, l.useRef)(null),
        k = (0, l.useRef)(0),
        [E, G] = (0, l.useState)(null),
        [M, D] = (0, l.useState)(null),
        [q, H] = (0, l.useState)(null)
      ;(T[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = () => () => {
            ;((k.current = k.current + 1), O.current?.destroy(), (O.current = null))
          }),
          (s = []),
          (T[0] = a),
          (T[1] = s))
        : ((a = T[0]), (s = T[1])),
        (0, l.useEffect)(a, s),
        T[2] !== R
          ? ((r = function () {
              if (L.current) return L.current
              let e = `rosalind-persona-attempt-id:${R}`,
                a = `${e}:payload-version`,
                i = sessionStorage.getItem(e),
                t = sessionStorage.getItem(a)
              if ((null != i && !al.test(i)) || (null != t && (!al.test(t) || (null != i && i !== t))))
                throw Error("invalid_attempt_binding")
              let n = { attemptId: i ?? t ?? crypto.randomUUID(), payloadVersion: null != i && null == t ? 1 : 2 }
              return (
                null == i &&
                  (null == t && sessionStorage.setItem(a, n.attemptId), sessionStorage.setItem(e, n.attemptId)),
                (L.current = n),
                n
              )
            }),
            (T[2] = R),
            (T[3] = r))
          : (r = T[3]))
      let V = r
      T[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((o = function () {
            ;(O.current?.destroy(), (O.current = null))
          }),
          (T[4] = o))
        : (o = T[4])
      let B = o
      T[5] !== z
        ? ((c = function (e) {
            ;(D(e), z(null != e))
          }),
          (T[5] = z),
          (T[6] = c))
        : (c = T[6])
      let U = c
      T[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = function (e, a) {
            aa.v.warning("rosalind.persona.failure", { safe: { stage: e, reason: a } })
          }),
          (T[7] = p))
        : (p = T[7])
      let W = p
      T[8] !== S || T[9] !== C || T[10] !== R || T[11] !== U
        ? ((u = async function (e, a) {
            let i = (k.current = k.current + 1)
            ;(U("refresh"), H(null))
            try {
              let t = await S({ organizationId: R, inquiryId: e, attemptId: a })
              if (i !== k.current) return
              let n = au(t)
              if (!n || n.inquiryId !== e) {
                ;(U(null), H("status"), W("status", "invalid_provider_response"))
                return
              }
              ;(G(n), C(n.status, { inquiryId: e }), U(null))
            } catch {
              i === k.current && (U(null), H("status"), W("status", "request_failed"))
            }
          }),
          (T[8] = S),
          (T[9] = C),
          (T[10] = R),
          (T[11] = U),
          (T[12] = u))
        : (u = T[12])
      let F = u
      T[13] !== V || T[14] !== C || T[15] !== R || T[16] !== F || T[17] !== U || T[18] !== w
        ? ((h = async function () {
            let e = (k.current = k.current + 1)
            ;(B(), U("start"), H(null))
            try {
              let a = V(),
                t = await w({
                  organizationId: R,
                  attemptId: a.attemptId,
                  ...(2 === a.payloadVersion ? { payloadVersion: 2 } : {}),
                })
              if (e !== k.current) return
              let n = au(t)
              if (!n) {
                ;(U(null), H("open"), W("start", "invalid_provider_response"))
                return
              }
              ;(G(n), C(n.status, { inquiryId: n.inquiryId }))
              let s = !1,
                r = () => {
                  e === k.current && (B(), F(n.inquiryId, a.attemptId))
                },
                o = await (async function (e, a) {
                  let t = (await i.e(891564).then(i.t.bind(i, "Iv8T", 23))).default
                  if (!a()) return null
                  let n = new t.Client(e)
                  return a() ? n : (n.destroy(), null)
                })(
                  {
                    inquiryId: n.inquiryId,
                    environmentId: n.environmentId,
                    sessionToken: n.sessionToken,
                    onCancel: r,
                    onComplete: r,
                    onError: () => {
                      e === k.current && ((s = !0), B(), U(null), H("interrupted"), W("sdk", "sdk_error"))
                    },
                  },
                  () => e === k.current && !s,
                )
              if (!o) return
              ;((O.current = o), o.open(), U("open"))
            } catch {
              e === k.current && (U(null), H("open"), W("start", "request_failed"))
            }
          }),
          (T[13] = V),
          (T[14] = C),
          (T[15] = R),
          (T[16] = F),
          (T[17] = U),
          (T[18] = w),
          (T[19] = h))
        : (h = T[19])
      let $ = h,
        Y = E?.status ?? I,
        K = "completed" === Y || "needs_review" === Y || "approved" === Y,
        Z = null
      "needs_review" === Y ? (Z = ad.needsReview) : ("declined" === Y || "failed" === Y) && (Z = ad.negativeResult)
      let X = "refresh" === M ? ad.checking : ad.starting,
        Q = ad.start
      "status" === q ? (Q = ad.checkAgain) : q ? (Q = ad.retry) : E && (Q = ad.resume)
      let J = ad.openError
      return (
        "status" === q ? (J = ad.statusError) : "interrupted" === q && (J = ad.interrupted),
        T[20] !== N ? ((m = N.formatMessage(ad.personaBrand)), (T[20] = N), (T[21] = m)) : (m = T[21]),
        T[22] !== m
          ? ((f = (0, t.jsx)(ae.A, {
              className: "h-auto w-28 shrink-0 text-default select-none",
              role: "img",
              "aria-label": m,
            })),
            (T[22] = m),
            (T[23] = f))
          : (f = T[23]),
        T[24] !== Y
          ? ((v = null != Y && (0, t.jsx)(at, { status: Y, submittedPill: !0 })), (T[24] = Y), (T[25] = v))
          : (v = T[25]),
        T[26] !== Q ||
        T[27] !== M ||
        T[28] !== X ||
        T[29] !== K ||
        T[30] !== q ||
        T[31] !== F ||
        T[32] !== E ||
        T[33] !== $
          ? ((_ = M
              ? (0, t.jsx)("p", {
                  className: "text-sm text-secondary",
                  role: "status",
                  children: (0, t.jsx)(d.A, { ...("open" === M ? ad.open : X) }),
                })
              : (!K || q) &&
                (0, t.jsx)(g.$, {
                  color: "primary",
                  size: "pageAction",
                  type: "button",
                  onClick: () => {
                    "status" === q && E && L.current ? F(E.inquiryId, L.current.attemptId) : $()
                  },
                  children: (0, t.jsx)(d.A, { ...Q }),
                })),
            (T[26] = Q),
            (T[27] = M),
            (T[28] = X),
            (T[29] = K),
            (T[30] = q),
            (T[31] = F),
            (T[32] = E),
            (T[33] = $),
            (T[34] = _))
          : (_ = T[34]),
        T[35] !== v || T[36] !== _
          ? ((b = (0, t.jsxs)("div", { className: "flex flex-wrap items-center gap-2.5", children: [v, _] })),
            (T[35] = v),
            (T[36] = _),
            (T[37] = b))
          : (b = T[37]),
        T[38] !== f || T[39] !== b
          ? ((y = (0, t.jsxs)("div", {
              className:
                "flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-default bg-surface p-6",
              children: [f, b],
            })),
            (T[38] = f),
            (T[39] = b),
            (T[40] = y))
          : (y = T[40]),
        T[41] !== q || T[42] !== J
          ? ((A =
              q &&
              (0, t.jsx)("p", {
                className: "text-sm text-danger",
                role: "alert",
                children: (0, t.jsx)(d.A, { ...J }),
              })),
            (T[41] = q),
            (T[42] = J),
            (T[43] = A))
          : (A = T[43]),
        T[44] !== Z
          ? ((x = Z && (0, t.jsx)("p", { className: "text-sm text-secondary", children: (0, t.jsx)(d.A, { ...Z }) })),
            (T[44] = Z),
            (T[45] = x))
          : (x = T[45]),
        T[46] !== y || T[47] !== A || T[48] !== x
          ? ((P = (0, t.jsxs)("div", { className: "flex flex-col gap-3", children: [y, A, x] })),
            (T[46] = y),
            (T[47] = A),
            (T[48] = x),
            (T[49] = P))
          : (P = T[49]),
        P
      )
    }
    function au(e) {
      return an.test(e.inquiryId) && as.test(e.environmentId) && (!e.sessionToken || ar.test(e.sessionToken)) ? e : null
    }
    var ag = i("JNtf"),
      ah = i("mUDD")
    function am(e) {
      let a,
        i,
        s,
        r,
        o,
        c,
        p,
        u,
        h,
        m,
        f,
        v,
        _,
        b,
        y,
        A,
        x,
        P,
        T,
        R,
        I = (0, n.c)(49),
        { open: w, organizationName: S, organizationId: C, submitting: z, onClose: N, onConfirm: j } = e,
        O = (0, l.useId)(),
        L = !z
      ;(I[0] !== O ? ((a = { "aria-describedby": O }), (I[0] = O), (I[1] = a)) : (a = I[1]),
        I[2] !== N || I[3] !== z
          ? ((i = (e) => {
              e || z || N()
            }),
            (I[2] = N),
            (I[3] = z),
            (I[4] = i))
          : (i = I[4]),
        I[5] !== j
          ? ((s = (e) => {
              ;(e.preventDefault(), j())
            }),
            (I[5] = j),
            (I[6] = s))
          : (s = I[6]),
        I[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, t.jsx)(ah.OO, {
              children: (0, t.jsx)(ah.c7, {
                variant: "chatgptConfirmation",
                title: (0, t.jsx)(ag.L3, { children: (0, t.jsx)(d.A, { ...H.confirmOrganizationHeading }) }),
              }),
            })),
            (I[7] = r))
          : (r = I[7]),
        I[8] !== C || I[9] !== S
          ? ((o = (0, t.jsx)(d.A, {
              ...H.confirmOrganizationQuestion,
              values: { organizationName: S, organizationId: C },
            })),
            (I[8] = C),
            (I[9] = S),
            (I[10] = o))
          : (o = I[10]),
        I[11] !== O || I[12] !== o
          ? ((c = (0, t.jsx)("p", { id: O, className: "text-sm leading-5 text-secondary", children: o })),
            (I[11] = O),
            (I[12] = o),
            (I[13] = c))
          : (c = I[13]),
        I[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, t.jsx)("dt", {
              className: "text-secondary",
              children: (0, t.jsx)(d.A, { ...H.confirmOrganizationNameLabel }),
            })),
            (I[14] = p))
          : (p = I[14]),
        I[15] !== S
          ? ((u = (0, t.jsxs)("div", {
              className: "flex flex-col gap-1",
              children: [p, (0, t.jsx)("dd", { className: "break-words", children: S })],
            })),
            (I[15] = S),
            (I[16] = u))
          : (u = I[16]),
        I[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, t.jsx)("dt", {
              className: "text-secondary",
              children: (0, t.jsx)(d.A, { ...H.confirmOrganizationIdLabel }),
            })),
            (I[17] = h))
          : (h = I[17]),
        I[18] !== C
          ? ((m = (0, t.jsxs)("div", {
              className: "flex flex-col gap-1",
              children: [h, (0, t.jsx)("dd", { className: "break-all", children: C })],
            })),
            (I[18] = C),
            (I[19] = m))
          : (m = I[19]),
        I[20] !== m || I[21] !== u
          ? ((f = (0, t.jsxs)("dl", {
              className: "flex flex-col gap-3 rounded-xl border border-default p-4 text-sm leading-5 select-text",
              children: [u, m],
            })),
            (I[20] = m),
            (I[21] = u),
            (I[22] = f))
          : (f = I[22]),
        I[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, t.jsx)("p", {
              className: "text-sm leading-5 text-secondary",
              children: (0, t.jsx)(d.A, {
                id: "chatgpt.rosalind_access.review.organization_confirmation.dialog.organization_workspace_or_tenant_administrator_approval.description",
                defaultMessage:
                  "Anyone in your organization can submit this application. If it is approved, an organization owner or administrator, an Enterprise Global Admin, or an eligible Business workspace owner or administrator must accept the GPT-Rosalind Terms, acknowledge the current pricing notice, and confirm provisioning before access can be granted.",
                description:
                  "Notice in the authenticated GPT-Rosalind application submission confirmation dialog, shown to every organization member after the exact verified organization name and identifier. Any eligible member may submit without signing legal terms. An independently verified organization owner or administrator, Global Admin of the Enterprise tenant linked to that exact organization, or owner or administrator of an eligible self-serve Business organization's sole verified workspace must separately accept the GPT-Rosalind Terms, acknowledge the current pricing notice, and confirm provisioning after internal application approval and before access is granted. Enterprise Global Admin is the tenant-wide administrative role. Business workspace authority applies only to the eligible sole-workspace case; other workspace roles do not grant approval authority. This informational paragraph has no placeholders and does not restrict submission.",
              }),
            })),
            (I[23] = v))
          : (v = I[23]),
        I[24] !== f || I[25] !== c
          ? ((_ = (0, t.jsxs)(ah.OO, { className: "gap-4", children: [c, f, v] })),
            (I[24] = f),
            (I[25] = c),
            (I[26] = _))
          : (_ = I[26]),
        I[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, t.jsx)(d.A, { ...H.confirmOrganizationBack })), (I[27] = b))
          : (b = I[27]),
        I[28] !== N || I[29] !== z
          ? ((y = (0, t.jsx)(g.$, {
              color: "outlineGhost",
              size: "dialogAction",
              radius: "full",
              type: "button",
              disabled: z,
              onClick: N,
              children: b,
            })),
            (I[28] = N),
            (I[29] = z),
            (I[30] = y))
          : (y = I[30]))
      let k = z ? H.submitting : H.confirmOrganizationSubmit
      return (
        I[31] !== k ? ((A = (0, t.jsx)(d.A, { ...k })), (I[31] = k), (I[32] = A)) : (A = I[32]),
        I[33] !== z || I[34] !== A
          ? ((x = (0, t.jsx)(g.$, {
              color: "primary",
              size: "dialogAction",
              radius: "full",
              type: "submit",
              disabled: z,
              children: A,
            })),
            (I[33] = z),
            (I[34] = A),
            (I[35] = x))
          : (x = I[35]),
        I[36] !== y || I[37] !== x
          ? ((P = (0, t.jsx)(ah.OO, {
              children: (0, t.jsxs)(ah.Es, { variant: "chatgptConfirmation", children: [y, x] }),
            })),
            (I[36] = y),
            (I[37] = x),
            (I[38] = P))
          : (P = I[38]),
        I[39] !== _ || I[40] !== P || I[41] !== s
          ? ((T = (0, t.jsxs)(ah.R4, { as: "form", variant: "chatgptConfirmation", onSubmit: s, children: [r, _, P] })),
            (I[39] = _),
            (I[40] = P),
            (I[41] = s),
            (I[42] = T))
          : (T = I[42]),
        I[43] !== w || I[44] !== L || I[45] !== a || I[46] !== T || I[47] !== i
          ? ((R = (0, t.jsx)(ag.lG, {
              open: w,
              size: "medium",
              variant: "chatgptConfirmation",
              showDialogClose: L,
              contentProps: a,
              onOpenChange: i,
              children: T,
            })),
            (I[43] = w),
            (I[44] = L),
            (I[45] = a),
            (I[46] = T),
            (I[47] = i),
            (I[48] = R))
          : (R = I[48]),
        R
      )
    }
    function af(e) {
      let a,
        i,
        s,
        r,
        o,
        c,
        p,
        u,
        g,
        h,
        m = (0, n.c)(15),
        { capabilities: f } = e,
        v = (0, l.useId)()
      if (!f?.discoveryApplications) return null
      let _ = `${v}-title`,
        b = `${v}-title`
      return (
        m[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, t.jsx)(d.A, {
              id: "chatgpt.rosalind_access.tier.overview.heading",
              defaultMessage: "Rosalind model access",
              description:
                "Heading of the informational tier overview in the Rosalind access application. Applicants learn about Discovery and Research but do not select a tier. Preserve the product name.",
            })),
            (m[0] = a))
          : (a = m[0]),
        m[1] !== b
          ? ((i = (0, t.jsx)("h2", { className: "text-base font-medium", id: b, children: a })), (m[1] = b), (m[2] = i))
          : (i = m[2]),
        m[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, t.jsx)("p", {
              className: "text-sm leading-relaxed text-secondary",
              children: (0, t.jsx)(d.A, {
                id: "chatgpt.rosalind_access.tier.overview.eligibility.description",
                defaultMessage:
                  "One application covers Rosalind Discovery and Rosalind Research. We review your application to determine which tier you are eligible for.",
                description:
                  "Introduction to the informational Rosalind access overview for applicants. A backend eligibility review determines the tier; applicants cannot select one, and submitting an application does not guarantee approval. Preserve both product names.",
              }),
            })),
            (m[3] = s))
          : (s = m[3]),
        m[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, t.jsx)("dt", {
              className: "text-base font-medium",
              children: (0, t.jsx)(d.A, {
                id: "chatgpt.rosalind_access.tier.overview.discovery.label",
                defaultMessage: "Rosalind Discovery",
                description:
                  "Name of the mid tier model offering in the informational Rosalind access overview. This is a static label, not a selectable option. The other offering is Rosalind Research. Preserve the product name.",
              }),
            })),
            (m[4] = r))
          : (r = m[4]),
        m[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, t.jsxs)("div", {
              className: "grid content-start gap-1 rounded-xl border border-default p-4",
              children: [
                r,
                (0, t.jsx)("dd", {
                  className: "text-sm leading-relaxed text-secondary",
                  children: (0, t.jsx)(d.A, {
                    id: "chatgpt.rosalind_access.tier.overview.discovery.task_focus.description",
                    defaultMessage: "For everyday scientific tasks.",
                    description:
                      "Short static description of Rosalind Discovery in the access application's informational tier overview. It describes the offering's focus on everyday scientific work, contrasted with Research for complex work requiring advanced reasoning. Applicants do not select a tier, and privacy choices are separate. Plain text with no placeholders.",
                  }),
                }),
              ],
            })),
            (m[5] = o))
          : (o = m[5]),
        m[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, t.jsx)("dt", {
              className: "text-base font-medium",
              children: (0, t.jsx)(d.A, {
                id: "chatgpt.rosalind_access.tier.overview.research.label",
                defaultMessage: "Rosalind Research",
                description:
                  "Name of the frontier model offering in the informational Rosalind access overview. This is a static label, not a selectable option. The other offering is Rosalind Discovery. Preserve the product name.",
              }),
            })),
            (m[6] = c))
          : (c = m[6]),
        m[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, t.jsxs)("dl", {
              className: "my-3 grid gap-3 sm:grid-cols-2",
              children: [
                o,
                (0, t.jsxs)("div", {
                  className: "grid content-start gap-1 rounded-xl border border-default p-4",
                  children: [
                    c,
                    (0, t.jsx)("dd", {
                      className: "text-sm leading-relaxed text-secondary",
                      children: (0, t.jsx)(d.A, {
                        id: "chatgpt.rosalind_access.tier.overview.research.task_focus.description",
                        defaultMessage: "For complex scientific research requiring advanced reasoning.",
                        description:
                          "Short static description of Rosalind Research in the access application's informational tier overview. It describes the offering's focus on complex scientific work requiring advanced reasoning, contrasted with Discovery for everyday tasks. Applicants do not select a tier, and privacy choices are separate. Plain text with no placeholders.",
                      }),
                    }),
                  ],
                }),
              ],
            })),
            (m[7] = p))
          : (p = m[7]),
        m[8] !== f.researchUpgradeRequests
          ? ((u =
              f.researchUpgradeRequests &&
              (0, t.jsx)("p", {
                className: "text-sm leading-relaxed text-secondary",
                children: (0, t.jsx)(d.A, {
                  id: "chatgpt.rosalind_access.tier.overview.upgrade.help_text",
                  defaultMessage:
                    "If you're approved for Discovery but need Research, you can request an upgrade. The upgrade form will request more information for further review.",
                  description:
                    "Helper text in the Rosalind application explaining the upgrade path when the backend supports upgrade requests. Applicants approved for Discovery can submit more scientific use-case information for Research eligibility review. This is informational, not a clickable control or a promise of approval. Discovery and Research are product names.",
                }),
              })),
            (m[8] = f.researchUpgradeRequests),
            (m[9] = u))
          : (u = m[9]),
        m[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, t.jsx)("p", {
              className: "text-sm leading-relaxed text-secondary",
              children: (0, t.jsx)(d.A, {
                id: "chatgpt.rosalind_access.tier.overview.privacy.help_text",
                defaultMessage: "Your privacy and data-retention choices are separate from your model access tier.",
                description:
                  "Helper text beneath the informational Discovery and Research overview in the Rosalind application. It clarifies that the model tier determined by eligibility review does not determine privacy or data-retention settings.",
              }),
            })),
            (m[10] = g))
          : (g = m[10]),
        m[11] !== _ || m[12] !== u || m[13] !== i
          ? ((h = (0, t.jsxs)("section", {
              "aria-labelledby": _,
              className: "flex flex-col gap-3",
              children: [i, s, p, u, g],
            })),
            (m[11] = _),
            (m[12] = u),
            (m[13] = i),
            (m[14] = h))
          : (h = m[14]),
        h
      )
    }
    let av = [
        { key: "certifyAccuracy", label: H.certifyAccuracy },
        { key: "certifyAuthority", label: H.certifyAuthority },
      ],
      a_ = {
        organizationId: 0,
        products: 1,
        researchPurpose: 1,
        researchScopes: 1,
        primaryCountry: 2,
        additionalLocations: 2,
        additionalCountries: 2,
        selectedSafeguards: 2,
        otherSafeguardDetails: 2,
        confirmResearchSafeguards: 2,
        certifyAccuracy: 3,
        certifyAuthority: 3,
      }
    function ab(e) {
      let a,
        i,
        s,
        r,
        o,
        d = (0, n.c)(20),
        p = (0, c.Ul)(f.YV),
        u = e.selectedOrganizationId
      if (d[0] !== e.organizations || d[1] !== u) {
        let i
        ;(d[3] !== u ? ((i = (e) => e.id === u), (d[3] = u), (d[4] = i)) : (i = d[4]),
          (a = e.organizations.find(i)),
          (d[0] = e.organizations),
          (d[1] = u),
          (d[2] = a))
      } else a = d[2]
      let g = a,
        [h, m] = (0, l.useState)(null)
      d[5] !== h || d[6] !== p || d[7] !== e || d[8] !== u
        ? ((i = (a) =>
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(e5, {
                  variant: "application",
                  analytics: {
                    createBusinessOrganizationShown: null != e.createBusinessOrganizationAction,
                    continueEnabled: a,
                    lookupFailed: e.lookupFailed ?? !1,
                  },
                  organizations: e.organizations,
                  chatgptWorkspaceOrganizationIds: e.chatgptWorkspaceOrganizationIds,
                  organizationId: u,
                  lookupPending: e.contextPending,
                  onSelectOrganization: (a) => {
                    a !== u &&
                      (eL(p, 0, {
                        action: "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_SELECT_ORGANIZATION",
                        result: "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_SUCCEEDED",
                      }),
                      m(null),
                      e.onSelectOrganization(a))
                  },
                }),
                e.createBusinessOrganizationAction,
                e.organizationActions?.(h !== u),
              ],
            })),
          (d[5] = h),
          (d[6] = p),
          (d[7] = e),
          (d[8] = u),
          (d[9] = i))
        : (i = d[9])
      let v = i
      d[10] !== u
        ? ((s = (e) => {
            e.target instanceof HTMLElement && "openai-organization-search" !== e.target.getAttribute("name") && m(u)
          }),
          (d[10] = u),
          (d[11] = s))
        : (s = d[11])
      let _ = `${u}:${e.existingApplication?.bioagentsApplicationReference ?? "new"}`
      return (
        d[12] !== e || d[13] !== v || d[14] !== g || d[15] !== _
          ? ((r = (0, t.jsx)(ay, { ...e, organization: g, renderOrganizationPicker: v }, _)),
            (d[12] = e),
            (d[13] = v),
            (d[14] = g),
            (d[15] = _),
            (d[16] = r))
          : (r = d[16]),
        d[17] !== s || d[18] !== r
          ? ((o = (0, t.jsx)("div", {
              className:
                "flex flex-col gap-6 rounded-2xl border border-default bg-surface p-4.5 text-sm text-default sm:p-6",
              onChangeCapture: s,
              children: r,
            })),
            (d[17] = s),
            (d[18] = r),
            (d[19] = o))
          : (o = d[19]),
        o
      )
    }
    function ay(e) {
      let a,
        i,
        s,
        r,
        o,
        p,
        u,
        h,
        m,
        _,
        y,
        A,
        x,
        P,
        T,
        R,
        I,
        w,
        S,
        C,
        z,
        O,
        E,
        G,
        M,
        ea,
        ei,
        et,
        en,
        es,
        er,
        eo,
        ec,
        el,
        ed,
        ep,
        eu,
        eg,
        eh,
        em,
        ef,
        ev = (0, n.c)(165),
        e_ = (0, j.A)()
      if (ev[0] !== e_) {
        let e
        ;((e = new Intl.Collator(e_.locale, { sensitivity: "base" })),
          (a = b.PO.map((e) => ({ value: e, label: e_.formatDisplayName(e, { type: "region" }) ?? e })).sort((a, i) => {
            let t = F.indexOf(a.value),
              n = F.indexOf(i.value)
            return t >= 0 || n >= 0 ? (t < 0 ? 1 : n < 0 ? -1 : t - n) : e.compare(a.label, i.label)
          })),
          (ev[0] = e_),
          (ev[1] = a))
      } else a = ev[1]
      let eb = a,
        [ey, eA] = (0, l.useState)(0)
      ;(ev[2] === Symbol.for("react.memo_cache_sentinel") ? ((i = []), (ev[2] = i)) : (i = ev[2]),
        ev[3] === Symbol.for("react.memo_cache_sentinel") ? ((s = []), (ev[3] = s)) : (s = ev[3]),
        ev[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = {
              products: i,
              researchPurpose: "",
              researchScopes: s,
              primaryCountry: "",
              additionalLocations: null,
              additionalCountries: [],
              selectedSafeguards: [],
              otherSafeguardDetails: "",
              confirmResearchSafeguards: !1,
              certifyAccuracy: !1,
              certifyAuthority: !1,
            }),
            (ev[4] = r))
          : (r = ev[4]))
      let [ex, eP] = (0, l.useState)(r),
        [eT, eR] = (0, l.useState)(null),
        [eI, ew] = (0, l.useState)(null),
        [eS, eC] = (0, l.useState)(!1),
        [ez, eN] = (0, l.useState)(!1),
        [ej, eO] = (0, l.useState)(null),
        [eG, eM] = (0, l.useState)(null),
        [eD, eq] = (0, l.useState)(null),
        [eH, eV] = (0, l.useState)(null),
        eB = (0, l.useRef)(null),
        eU = (0, l.useRef)(0)
      ;(ev[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((o = () => () => {
            eU.current = eU.current + 1
          }),
          (p = []),
          (ev[5] = o),
          (ev[6] = p))
        : ((o = ev[5]), (p = ev[6])),
        (0, l.useEffect)(o, p),
        ev[7] !== ej ? ((u = null != ej && ac.has(ej)), (ev[7] = ej), (ev[8] = u)) : (u = ev[8]))
      let eW = u,
        eF =
          null == e.existingApplication &&
          e.contextAvailable &&
          !e.contextPending &&
          !e.workspaceHandoffRequired &&
          e.submissionEnabled &&
          e.organization?.submissionEligible === !0,
        e$ = e.capabilities?.discoveryApplications ? b.x9 : "gpt-rosalind-access-v2",
        eY = e.organization?.id ?? "",
        eK = eD === eY,
        eZ = {
          organizationId: e.organization?.id ?? "",
          products: ex.products,
          researchPurpose: ex.researchPurpose.trim(),
          researchScopes: ex.researchScopes,
          primaryCountry: ex.primaryCountry,
          additionalLocations: ex.additionalLocations,
          ...("yes" === ex.additionalLocations ? { additionalCountries: ex.additionalCountries } : {}),
          selectedSafeguards: ex.selectedSafeguards,
          ...(ex.selectedSafeguards?.includes("other")
            ? { otherSafeguardDetails: ex.otherSafeguardDetails.trim() }
            : {}),
          confirmResearchSafeguards: ex.confirmResearchSafeguards,
          certifyAccuracy: eK && ex.certifyAccuracy,
          certifyAuthority: eK && ex.certifyAuthority,
        },
        eX = { ...eZ, requestedEnhancedPrivacy: !1 },
        e3 = e.capabilities?.discoveryApplications ? eX : eZ,
        e5 = JSON.stringify(e3),
        e6 = eG?.inquiryId,
        e8 =
          eH &&
          eF &&
          eH.organizationId === eY &&
          eH.formSchemaVersion === e$ &&
          eH.payload === e5 &&
          eH.personaInquiryId === e6
            ? eH
            : null,
        e9 = (0, b.mA)(
          3 === ey
            ? eX
            : {
                ...eX,
                confirmResearchSafeguards: ey < 2 || ex.confirmResearchSafeguards,
                certifyAccuracy: !0,
                certifyAuthority: !0,
              },
        ),
        e7 = {}
      for (let e of e9)
        a_[e.field] !== ey ||
          e7[e.field] ||
          (e7[e.field] = (function (e, a) {
            if ("TOO_BIG" === e.issue && ("researchPurpose" === e.field || "otherSafeguardDetails" === e.field))
              return a.formatMessage(
                {
                  id: "chatgpt.rosalind_access.validation.text_length",
                  description:
                    "Inline validation error beside a GPT-Rosalind free-text application field when it exceeds the unchanged schema limit. Placeholder {maximum} is the numeric maximum character count.",
                  defaultMessage: "Use no more than {maximum} characters.",
                },
                { maximum: b.XO[e.field].max },
              )
            if ("TOO_BIG" === e.issue && "additionalCountries" === e.field)
              return a.formatMessage(
                {
                  id: "chatgpt.rosalind_access.validation.additional_locations_limit",
                  description:
                    "Inline validation error beside the GPT-Rosalind additional countries or regions selector when too many values are selected. Placeholder {maximum} is the numeric schema limit.",
                  defaultMessage: "Select no more than {maximum} additional countries or regions.",
                },
                { maximum: b.XO.additionalCountries.max },
              )
            if ("INVALID_VALUE" === e.issue && "researchScopes" === e.field)
              return a.formatMessage({
                id: "chatgpt.rosalind_access.validation.scope_exclusive",
                description:
                  "Inline validation error beside the GPT-Rosalind research-scope checkboxes when None of the above is combined with another category. The applicant must choose categories or None on its own.",
                defaultMessage: "Select the applicable research categories, or select “None of the above” on its own.",
              })
            let i = U[e.field]
            return i
              ? a.formatMessage(i)
              : a.formatMessage({
                  id: "chatgpt.rosalind_access.validation.valid_selection",
                  description:
                    "Fallback inline validation message beside an invalid option in the GPT-Rosalind access application. Asks the researcher to choose a supported option without exposing internal validation codes.",
                  defaultMessage: "Choose a valid option.",
                })
          })(e, e_))
      ;-1 !== ey ||
        eW ||
        ("pending" === ej
          ? (e7.persona = e_.formatMessage(H.personaPending))
          : "expired" === ej
            ? (e7.persona = e_.formatMessage(H.personaExpired))
            : (e7.persona = e_.formatMessage(H.personaRequired)))
      let ae = eT === ey ? e7 : {}
      ev[9] === Symbol.for("react.memo_cache_sentinel") ? ((h = [0, -1, 1, 2, 3]), (ev[9] = h)) : (h = ev[9])
      let aa = h,
        ai = -1 === ey ? ao : $[ey],
        at = eS || ez,
        an = (0, c.Ul)(f.YV),
        as = function (e, a, i, t) {
          eL(an, ey, {
            action: e,
            result: a,
            failureReason: i,
            submissionAttemptId: t,
            validationDetails:
              "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_VALIDATION" === i
                ? ("CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_ADVANCE" === e
                    ? e9.filter((e) => a_[e.field] === ey)
                    : e9
                  ).map(({ field: e, issue: a }) => ({
                    field: ek[e],
                    issue: v.Ur[`CHATGPT_WEB_ROSALIND_APPLICATION_VALIDATION_ISSUE_${a}`],
                  }))
                : void 0,
          })
        }
      ev[10] !== ey
        ? ((m = function (e) {
            e !== ey &&
              (eA(e),
              eR(null),
              ew(null),
              requestAnimationFrame(() => {
                let a = document.getElementById(`rosalind-step-heading-${e}`)
                ;(a?.focus({ preventScroll: !0 }),
                  a?.closest("main")?.parentElement?.scrollTo({ top: 0, behavior: "instant" }))
              }))
          }),
          (ev[10] = ey),
          (ev[11] = m))
        : (m = ev[11])
      let ar = m
      ev[12] !== eK || ev[13] !== eY
        ? ((_ = function (e, a) {
            let i = "certifyAccuracy" === e || "certifyAuthority" === e
            ;(eP((t) => ({ ...t, ...(!i || !eK ? { certifyAccuracy: !1, certifyAuthority: !1 } : {}), [e]: a })),
              eq(i ? eY : null),
              ew(null))
          }),
          (ev[12] = eK),
          (ev[13] = eY),
          (ev[14] = _))
        : (_ = ev[14])
      let al = _,
        ad = function () {
          if (at) return
          if (!eF) {
            ;(as(
              "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_ADVANCE",
              "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_BLOCKED",
              "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_UNAVAILABLE",
            ),
              ew(H.organizationEligibilityUnavailable))
            return
          }
          if (Object.keys(e7).length) {
            ;(as(
              "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_ADVANCE",
              "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_BLOCKED",
              "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_VALIDATION",
            ),
              eR(ey),
              W(ey))
            return
          }
          let e = Math.min(ey + 1, 3)
          ;(0 === ey ? (e = -1) : -1 === ey && (e = 1),
            as(
              "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_ADVANCE",
              "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_SUCCEEDED",
            ),
            ar(e))
        },
        au = function () {
          if (!at) {
            if (!eF) {
              ;(as(
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_SUBMISSION_CONFIRMATION",
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_BLOCKED",
                "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_UNAVAILABLE",
              ),
                ew(H.submissionUnavailable))
              return
            }
            if (!aS(e3, e$) || !eW || !eG) {
              let e = (0, b.mA)(eX).find(aw),
                a = e ? (a_[e.field] ?? 3) : 3
              ;(eW || (a = -1),
                as(
                  "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_SUBMISSION_CONFIRMATION",
                  "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_BLOCKED",
                  "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_VALIDATION",
                ),
                ar(a),
                eR(a),
                W(a))
              return
            }
            ;(as(
              "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_SUBMISSION_CONFIRMATION",
              "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_STARTED",
            ),
              eV({
                body: e3,
                payload: e5,
                organizationId: eY,
                formSchemaVersion: e$,
                organizationName: e.organization?.name ?? "",
                personaInquiryId: eG.inquiryId,
              }))
          }
        },
        ag = async function () {
          if (eS || !e8) return
          if (!eF || !aS(e3, e$) || !eW || !eG) {
            ;(eV(null),
              as(
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_SUBMIT",
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_BLOCKED",
                "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_UNAVAILABLE",
              ),
              ew(H.submissionUnavailable))
            return
          }
          as(
            "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_SUBMISSION_CONFIRMATION",
            "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_SUCCEEDED",
          )
          try {
            ;(eB.current?.payload !== e8.payload || eB.current.formSchemaVersion !== e8.formSchemaVersion) &&
              (eB.current = {
                key: crypto.randomUUID(),
                correlationId: (function () {
                  try {
                    return crypto.randomUUID()
                  } catch {
                    return
                  }
                })(),
                payload: e8.payload,
                formSchemaVersion: e8.formSchemaVersion,
              })
          } catch {
            ;(eV(null),
              as(
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_SUBMIT",
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_BLOCKED",
                "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_SECURE_SUBMISSION_UNAVAILABLE",
              ),
              ew(H.secureSubmissionFailed))
            return
          }
          let a = eB.current
          if (!a) return
          let i = (eU.current = eU.current + 1)
          ;(as(
            "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_SUBMIT",
            "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_STARTED",
            void 0,
            a.correlationId,
          ),
            eC(!0),
            ew(null),
            eV(null),
            await (async () => {
              try {
                let t = await e.submitApplication({
                  body: e8.body,
                  headers: {
                    "Idempotency-Key": a.key,
                    "X-Rosalind-Form-Schema-Version": a.formSchemaVersion,
                    "X-Rosalind-Persona-Inquiry-Id": e8.personaInquiryId,
                  },
                })
                if (i !== eU.current) return
                if (!t.submitted) {
                  ;(as(
                    "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_SUBMIT",
                    "application_conflict" === t.code
                      ? "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_BLOCKED"
                      : "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_FAILED",
                    (function (e) {
                      switch (e) {
                        case "application_conflict":
                          return "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_APPLICATION_CONFLICT"
                        case "application_history_limit":
                          return "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_APPLICATION_HISTORY_LIMIT"
                        case "application_unprocessable":
                          return "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_APPLICATION_UNPROCESSABLE"
                        case "idempotency_conflict":
                          return "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_IDEMPOTENCY_CONFLICT"
                        case "organization_unavailable":
                        case "submission_policy_changed":
                          return "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_ORGANIZATION_UNAVAILABLE"
                        case "submissions_disabled":
                          return "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_UNAVAILABLE"
                        case "invalid_backend_response":
                          return "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_INVALID_RESPONSE"
                        case "backend_unavailable":
                        case "invalid_application":
                        case "invalid_idempotency_key":
                          return "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_REQUEST_FAILED"
                      }
                    })(t.code),
                    a.correlationId,
                  ),
                    "idempotency_conflict" === t.code && (eB.current = null),
                    "organization_unavailable" === t.code || "submission_policy_changed" === t.code
                      ? ew(H.organizationUnavailable)
                      : "application_unprocessable" === t.code
                        ? ew(H.applicationUnprocessable)
                        : "application_history_limit" === t.code
                          ? ew(H.applicationHistoryLimit)
                          : ew(H.submissionFailed))
                  return
                }
                t.organizationId === e8.body.organizationId && /^[0-9a-f]{64}$/.test(t.bioagentsApplicationReference)
                  ? ((eB.current = null),
                    as(
                      "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_SUBMIT",
                      "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_SUCCEEDED",
                      void 0,
                      a.correlationId,
                    ),
                    e.onApplicationSubmitted(t, e8.body))
                  : (as(
                      "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_SUBMIT",
                      "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_UNCONFIRMED",
                      "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_INVALID_RESPONSE",
                      a.correlationId,
                    ),
                    ew(H.submissionUnconfirmed))
              } catch {
                i === eU.current &&
                  (as(
                    "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_SUBMIT",
                    "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_UNCONFIRMED",
                    "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_REQUEST_FAILED",
                    a.correlationId,
                  ),
                  ew(H.submissionUnconfirmed))
              }
            })().finally(() => {
              i === eU.current && eC(!1)
            }))
        },
        ah = H.organizationEligibilityUnavailable
      ;(e.organizations.length
        ? e.contextAvailable
          ? e.submissionEnabled
            ? e.organization?.submissionEligible === !1 && (ah = H.organizationNotEligible)
            : (ah = H.submissionUnavailable)
          : (ah = H.organizationEligibilityUnavailable)
        : (ah = H.noOrganizations),
        ev[15] !== ey
          ? ((y = ey - 1), -1 === ey ? (y = 0) : 1 === ey && (y = -1), (ev[15] = ey), (ev[16] = y))
          : (y = ev[16]))
      let ab = 3 === ey ? H.submit : H.next
      ;(eS && (ab = H.submitting),
        ev[17] !== ey ? ((A = (0, t.jsx)(eE, { step: ey })), (ev[17] = ey), (ev[18] = A)) : (A = ev[18]))
      let ay = String(ey)
      ;(ev[19] !== e_ ? ((x = e_.formatMessage(H.applicationProgress)), (ev[19] = e_), (ev[20] = x)) : (x = ev[20]),
        ev[21] !== at || ev[22] !== ey
          ? ((P = aa.map((e, a) => ({
              id: String(e),
              label: (0, t.jsx)(d.A, { ...(-1 === e ? ao.title : $[e].title) }),
              disabled: at || a > aa.indexOf(ey),
            }))),
            (ev[21] = at),
            (ev[22] = ey),
            (ev[23] = P))
          : (P = ev[23]),
        ev[24] !== ar ? ((T = (e) => ar(Number(e))), (ev[24] = ar), (ev[25] = T)) : (T = ev[25]),
        ev[26] !== ay || ev[27] !== x || ev[28] !== P || ev[29] !== T
          ? ((R = (0, t.jsx)(e1.K, { currentStep: ay, ariaLabel: x, steps: P, onStepSelect: T })),
            (ev[26] = ay),
            (ev[27] = x),
            (ev[28] = P),
            (ev[29] = T),
            (ev[30] = R))
          : (R = ev[30]),
        ev[31] !== A || ev[32] !== R
          ? ((I = (0, t.jsxs)(t.Fragment, { children: [A, R] })), (ev[31] = A), (ev[32] = R), (ev[33] = I))
          : (I = ev[33]))
      let aC = I
      if (0 === ey) {
        let a, i, n, s, r, o, c, l, p, u, h
        ;(ev[34] !== ey ? ((a = (0, t.jsx)(eE, { step: ey })), (ev[34] = ey), (ev[35] = a)) : (a = ev[35]),
          ev[36] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = (0, t.jsx)("h2", {
                id: "rosalind-step-heading-0",
                tabIndex: -1,
                className: "text-sm leading-5 text-secondary",
                children: (0, t.jsx)(d.A, {
                  id: "rosalind.customerApplication.currentOrganization",
                  defaultMessage: "Current organization:",
                  description: "Label above the organization selector on the first page of the Rosalind application.",
                }),
              })),
              (ev[36] = i))
            : (i = ev[36]),
          ev[37] !== eF || ev[38] !== e.renderOrganizationPicker
            ? ((n = e.renderOrganizationPicker(eF)), (ev[37] = eF), (ev[38] = e.renderOrganizationPicker), (ev[39] = n))
            : (n = ev[39]),
          ev[40] !== n
            ? ((s = (0, t.jsxs)("section", {
                className: "flex min-w-0 flex-col gap-3 border-b border-default pb-6",
                children: [i, n],
              })),
              (ev[40] = n),
              (ev[41] = s))
            : (s = ev[41]),
          ev[42] !== e.existingApplication
            ? ((r =
                !e.existingApplication &&
                (0, t.jsxs)("div", {
                  className: "flex flex-col gap-6",
                  children: [
                    (0, t.jsx)("p", {
                      className: "text-base leading-relaxed text-secondary",
                      children: (0, t.jsx)(d.A, {
                        id: "rosalind.customerApplication.introduction",
                        defaultMessage:
                          "Apply for expanded access to <model>GPT-Rosalind</model> for scientific research in ChatGPT, Codex, or the API.",
                        description: "Introduction to the organization application for GPT-Rosalind.",
                        values: { model: aI },
                      }),
                    }),
                    (0, t.jsxs)("section", {
                      className: "flex flex-col gap-2",
                      children: [
                        (0, t.jsx)("h3", {
                          className: "font-medium",
                          children: (0, t.jsx)(d.A, {
                            id: "rosalind.labEntrypoint.approvalHeading",
                            defaultMessage: "Once you’re approved",
                            description:
                              "Heading for what happens after an application for expanded GPT-Rosalind access is approved",
                          }),
                        }),
                        (0, t.jsx)("p", {
                          className: "leading-relaxed text-secondary",
                          children: (0, t.jsx)(d.A, {
                            id: "rosalind.customerApplication.approvalDescription",
                            defaultMessage:
                              "An organization owner or administrator activates access, then assigns it to individuals up to your organization’s seat limit.",
                            description: "Explains how approved organizations activate and assign access.",
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("section", {
                      className: "flex flex-col gap-3 rounded-xl bg-secondary-soft p-5",
                      children: [
                        (0, t.jsx)("h3", {
                          className: "font-medium",
                          children: (0, t.jsx)(d.A, {
                            id: "rosalind.labEntrypoint.requirementsHeading",
                            defaultMessage: "What you’ll need",
                            description:
                              "Heading for the information needed to complete an application for expanded GPT-Rosalind access",
                          }),
                        }),
                        (0, t.jsxs)("ul", {
                          className: "flex list-disc flex-col gap-2.5 ps-4.5 text-secondary",
                          children: [
                            (0, t.jsx)("li", {
                              children: (0, t.jsx)(d.A, {
                                id: "rosalind.customerApplication.identityRequirements",
                                defaultMessage: "Identity and business details",
                                description: "Identity requirements for the organization application.",
                              }),
                            }),
                            (0, t.jsx)("li", {
                              children: (0, t.jsx)(d.A, {
                                id: "rosalind.labEntrypoint.researchPlans",
                                defaultMessage: "Research plans and intended use",
                                description:
                                  "Required description of the applicant’s research plans and intended use of GPT-Rosalind",
                              }),
                            }),
                            (0, t.jsx)("li", {
                              children: (0, t.jsx)(d.A, {
                                id: "rosalind.labEntrypoint.safeguards",
                                defaultMessage: "Access locations and research safeguards",
                                description:
                                  "Required information about where GPT-Rosalind will be accessed and the applicant’s research safeguards",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })),
              (ev[42] = e.existingApplication),
              (ev[43] = r))
            : (r = ev[43]),
          ev[44] !== e.contextPending
            ? ((o =
                e.contextPending &&
                (0, t.jsx)("p", {
                  className: "text-xs leading-4.5 text-secondary select-text",
                  role: "status",
                  children: (0, t.jsx)(d.A, { ...H.organizationsLoading }),
                })),
              (ev[44] = e.contextPending),
              (ev[45] = o))
            : (o = ev[45]),
          ev[46] !== eF ||
          ev[47] !== e.contextPending ||
          ev[48] !== e.existingApplication ||
          ev[49] !== e.workspaceHandoffRequired ||
          ev[50] !== ah
            ? ((c =
                !eF &&
                !e.contextPending &&
                !e.existingApplication &&
                (0, t.jsx)("p", {
                  className: "text-xs leading-4.5 text-secondary select-text",
                  role: "alert",
                  children: e.workspaceHandoffRequired
                    ? (0, t.jsx)(d.A, {
                        id: "codex.rosalind.workspaceRecovery.required",
                        defaultMessage: "Open this organization’s workspace to continue",
                        description:
                          "Instruction on the Rosalind organization step while a verified business workspace needs to be selected or authenticated before the application can continue",
                      })
                    : (0, t.jsx)(d.A, { ...ah }),
                })),
              (ev[46] = eF),
              (ev[47] = e.contextPending),
              (ev[48] = e.existingApplication),
              (ev[49] = e.workspaceHandoffRequired),
              (ev[50] = ah),
              (ev[51] = c))
            : (c = ev[51]),
          ev[52] !== eF ||
          ev[53] !== e.contextAvailable ||
          ev[54] !== e.contextPending ||
          ev[55] !== e.existingApplication ||
          ev[56] !== e.onRetryContext ||
          ev[57] !== e.submissionEnabled
            ? ((l =
                !e.existingApplication &&
                !eF &&
                !e.contextPending &&
                (!e.contextAvailable || e.submissionEnabled) &&
                (0, t.jsx)(g.$, {
                  color: "secondary",
                  size: "dialogAction",
                  type: "button",
                  onClick: e.onRetryContext,
                  children: (0, t.jsx)(d.A, { ...H.retryOrganizationLookup }),
                })),
              (ev[52] = eF),
              (ev[53] = e.contextAvailable),
              (ev[54] = e.contextPending),
              (ev[55] = e.existingApplication),
              (ev[56] = e.onRetryContext),
              (ev[57] = e.submissionEnabled),
              (ev[58] = l))
            : (l = ev[58]),
          ev[59] !== eI
            ? ((p =
                eI &&
                (0, t.jsx)("p", {
                  className: "text-sm text-danger",
                  role: "alert",
                  children: (0, t.jsx)(d.A, { ...eI }),
                })),
              (ev[59] = eI),
              (ev[60] = p))
            : (p = ev[60]))
        let m = e.existingApplication
          ? (e.existingApplicationStatus ??
            (!e.workspaceHandoffRequired &&
              (0, t.jsx)(g.$, {
                color: "secondary",
                size: "dialogAction",
                type: "button",
                onClick: e.onRetryContext,
                children: (0, t.jsx)(d.A, { ...H.retryOrganizationLookup }),
              })))
          : (0, t.jsx)("div", {
              className: "flex flex-wrap items-center gap-3",
              children: (0, t.jsxs)(g.$, {
                color: "primary",
                size: "dialogAction",
                type: "button",
                disabled: !eF,
                onClick: ad,
                children: [
                  (0, t.jsx)(d.A, {
                    id: "rosalind.labEntrypoint.continueApplication",
                    defaultMessage: "Continue application",
                    description: "Button to continue the GPT-Rosalind application.",
                  }),
                  (0, t.jsx)(N.Imh, {}),
                ],
              }),
            })
        return (
          ev[61] !== o || ev[62] !== c || ev[63] !== l || ev[64] !== p || ev[65] !== m
            ? ((u = (0, t.jsxs)("div", { className: "flex min-w-0 flex-col gap-6", children: [o, c, l, p, m] })),
              (ev[61] = o),
              (ev[62] = c),
              (ev[63] = l),
              (ev[64] = p),
              (ev[65] = m),
              (ev[66] = u))
            : (u = ev[66]),
          ev[67] !== a || ev[68] !== s || ev[69] !== r || ev[70] !== u
            ? ((h = (0, t.jsxs)(t.Fragment, { children: [a, s, r, u] })),
              (ev[67] = a),
              (ev[68] = s),
              (ev[69] = r),
              (ev[70] = u),
              (ev[71] = h))
            : (h = ev[71]),
          h
        )
      }
      let az = (e) => {
          ;(e.preventDefault(), 3 === ey ? au() : ad())
        },
        aN = `rosalind-step-heading-${ey}`
      ;(ev[72] !== ai.heading
        ? ((w = (0, t.jsx)("span", { className: "sr-only", children: (0, t.jsx)(d.A, { ...ai.heading }) })),
          (ev[72] = ai.heading),
          (ev[73] = w))
        : (w = ev[73]),
        ev[74] !== ai.visualHeading
          ? ((S = (0, t.jsx)("span", { "aria-hidden": "true", children: (0, t.jsx)(d.A, { ...ai.visualHeading }) })),
            (ev[74] = ai.visualHeading),
            (ev[75] = S))
          : (S = ev[75]),
        ev[76] !== aN || ev[77] !== w || ev[78] !== S
          ? ((C = (0, t.jsxs)("h2", {
              className: "text-heading-sm leading-6 font-medium select-none",
              id: aN,
              tabIndex: -1,
              children: [w, S],
            })),
            (ev[76] = aN),
            (ev[77] = w),
            (ev[78] = S),
            (ev[79] = C))
          : (C = ev[79]),
        ev[80] !== ai.visualDescription
          ? ((z = (0, t.jsx)("p", {
              className: "text-sm text-secondary",
              children: (0, t.jsx)(d.A, { ...ai.visualDescription }),
            })),
            (ev[80] = ai.visualDescription),
            (ev[81] = z))
          : (z = ev[81]),
        ev[82] !== C || ev[83] !== z
          ? ((O = (0, t.jsxs)("div", { className: "flex flex-col gap-1", children: [C, z] })),
            (ev[82] = C),
            (ev[83] = z),
            (ev[84] = O))
          : (O = ev[84]))
      let aj =
          -1 === ey &&
          e.organization &&
          (0, t.jsxs)("section", {
            className: "flex flex-col gap-3",
            "data-validation-field": "persona",
            children: [
              (0, t.jsx)(
                ap,
                {
                  organizationId: e.organization.id,
                  previousStatus: ej,
                  startPersona: e.startPersona,
                  checkPersona: e.checkPersona,
                  onStatusChange: (e, a) => {
                    ;(eO(e), eM(a))
                  },
                  onActivityChange: eN,
                },
                e.organization.id,
              ),
              (0, t.jsx)(Q, { field: "persona", error: ae.persona }),
            ],
          }),
        aO =
          1 === ey &&
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(af, { capabilities: e.capabilities }),
              (0, t.jsxs)("fieldset", {
                className: "flex min-w-0 flex-col gap-3",
                disabled: at,
                "data-validation-field": "products",
                ...B("products", ae.products),
                children: [
                  (0, t.jsx)("legend", {
                    className: "text-sm leading-5 font-medium select-none",
                    children: (0, t.jsx)(d.A, { ...H.requestedAccessVisualHeading }),
                  }),
                  (0, t.jsx)("p", {
                    className: "text-sm leading-5 text-secondary select-text",
                    children: (0, t.jsx)(d.A, { ...H.requestedAccessVisualDescription }),
                  }),
                  (0, t.jsx)("div", {
                    className: "flex flex-col gap-2.5",
                    children: Y.map((a) =>
                      (0, t.jsx)(
                        eJ.m,
                        {
                          content:
                            "chatgpt-codex" !== a.id || e.hasWorkspace
                              ? null
                              : e_.formatMessage({
                                  id: "rosalind.application.workspaceRequiredTooltip",
                                  defaultMessage: "You must be signed into an account with a ChatGPT workspace",
                                  description:
                                    "Explains why ChatGPT and Codex access cannot be selected without a linked ChatGPT workspace",
                                }),
                          children: (0, t.jsx)(eJ.m.TriggerDecorator, {
                            focusable: "chatgpt-codex" === a.id && !e.hasWorkspace,
                            unstyled: !0,
                            children: (0, t.jsxs)("label", {
                              htmlFor: `product-${a.id}`,
                              className:
                                "group relative grid min-h-18 cursor-interaction grid-cols-[2.5rem_minmax(0,1fr)_auto] items-center gap-x-3 gap-y-0.5 rounded-xl border border-default p-3 select-none data-[disabled=true]:cursor-not-allowed data-[disabled=true]:bg-secondary-soft data-[disabled=true]:text-disabled data-[state=selected]:border-text",
                              "data-disabled": "chatgpt-codex" === a.id && !e.hasWorkspace,
                              "data-state": ex.products.includes(a.id) ? "selected" : "unselected",
                              children: [
                                (0, t.jsx)("span", {
                                  className:
                                    "row-span-2 flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary-soft",
                                  children: (0, t.jsx)(a.Icon, {}),
                                }),
                                (0, t.jsxs)("span", {
                                  className: "text-sm font-medium",
                                  children: [
                                    (0, t.jsx)("span", {
                                      className: "sr-only",
                                      children: (0, t.jsx)(d.A, { ...a.title }),
                                    }),
                                    (0, t.jsx)("span", {
                                      "aria-hidden": "true",
                                      children: (0, t.jsx)(d.A, { ...a.visualTitle }),
                                    }),
                                  ],
                                }),
                                (0, t.jsx)("span", {
                                  className:
                                    "col-start-2 text-xs leading-5 text-secondary select-text group-data-[disabled=true]:text-disabled",
                                  children: (0, t.jsx)(d.A, { ...a.description }),
                                }),
                                (0, t.jsx)(k.S, {
                                  id: `product-${a.id}`,
                                  name: `product-${a.id}`,
                                  className: "col-start-3 row-span-2 row-start-1",
                                  checked: ex.products.includes(a.id),
                                  disabled: at || ("chatgpt-codex" === a.id && !e.hasWorkspace),
                                  onCheckedChange: (e) =>
                                    al("products", e ? [...ex.products, a.id] : ex.products.filter((e) => e !== a.id)),
                                  size: "sm",
                                  variant: "choice",
                                }),
                              ],
                            }),
                          }),
                        },
                        a.id,
                      ),
                    ),
                  }),
                  (0, t.jsx)(Q, { field: "products", error: ae.products }),
                ],
              }),
              (0, t.jsx)(ee, {
                capabilities: e.capabilities,
                researchPurpose: ex.researchPurpose,
                researchScopes: ex.researchScopes,
                fieldErrors: ae,
                disabled: at,
                setResearchPurpose: (e) => al("researchPurpose", e),
                toggleResearchScope: (e, a) => {
                  let i = ex.researchScopes.filter((a) => a !== e)
                  ;(a &&
                    (i = "none" === e ? ["none"] : [...ex.researchScopes.filter((a) => "none" !== a && a !== e), e]),
                    al("researchScopes", i))
                },
              }),
            ],
          })
      ;(ev[85] !== ex ||
      ev[86] !== at ||
      ev[87] !== eb ||
      ev[88] !== al ||
      ev[89] !== ae ||
      ev[90] !== e_ ||
      ev[91] !== ey
        ? ((E =
            2 === ey &&
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsxs)("div", {
                  className: "flex flex-col gap-2",
                  "data-validation-field": "primaryCountry",
                  children: [
                    (0, t.jsxs)("label", {
                      id: "primary-country-label",
                      className: "text-sm leading-5 font-medium select-none",
                      htmlFor: "primary-country",
                      children: [
                        (0, t.jsx)("span", {
                          className: "sr-only",
                          children: (0, t.jsx)(d.A, { ...H.primaryCountry }),
                        }),
                        (0, t.jsx)("span", {
                          "aria-hidden": !0,
                          children: (0, t.jsx)(d.A, { ...H.primaryCountryVisualHeading }),
                        }),
                      ],
                    }),
                    (0, t.jsx)("p", {
                      id: "primary-country-help",
                      className: "text-sm leading-5 text-secondary select-text",
                      children: (0, t.jsx)(d.A, { ...H.primaryCountryVisualDescription }),
                    }),
                    (0, t.jsx)(e2.x, {
                      id: "primary-country",
                      describedBy: `primary-country-help${ae.primaryCountry ? ` ${V("primaryCountry")}` : ""}`,
                      options: eb,
                      placeholder: (0, t.jsx)(d.A, { ...H.countryPlaceholder }),
                      searchLabel: e_.formatMessage(H.additionalCountriesSearch),
                      noResults: (0, t.jsx)(d.A, { ...H.additionalCountriesNoResults }),
                      value: ex.primaryCountry,
                      disabled: at,
                      invalid: !!ae.primaryCountry || void 0,
                      onChange: (e) => {
                        ;(al("primaryCountry", e),
                          eP((a) => ({ ...a, additionalCountries: a.additionalCountries.filter((a) => a !== e) })))
                      },
                    }),
                    (0, t.jsx)(Q, { field: "primaryCountry", error: ae.primaryCountry }),
                  ],
                }),
                (0, t.jsxs)("fieldset", {
                  className: "flex min-w-0 flex-col gap-4",
                  disabled: at,
                  "data-validation-field": "additionalLocations",
                  ...B("additionalLocations", ae.additionalLocations),
                  children: [
                    (0, t.jsx)(D.I3, {
                      id: "additional-locations-label",
                      as: "legend",
                      children: (0, t.jsx)(d.A, { ...H.additionalLocationsVisualHeading }),
                    }),
                    (0, t.jsx)("div", {
                      className: "pb-2",
                      children: (0, t.jsx)(e0.e, {
                        className: "flex-wrap gap-2",
                        "aria-labelledby": "additional-locations-label",
                        joined: !1,
                        role: "group",
                        children: ["no", "yes", "unsure"].map((e) =>
                          (0, t.jsx)(
                            g.$,
                            {
                              id: `additional-locations-${e}`,
                              "aria-pressed": ex.additionalLocations === e,
                              color: ex.additionalLocations === e ? "tinted" : "outlineSubtle",
                              radius: "full",
                              size: "cardAction",
                              type: "button",
                              onClick: () => {
                                ;(al("additionalLocations", e), "yes" !== e && eP(aR))
                              },
                              children: (0, t.jsx)(d.A, {
                                ...{ yes: H.additionalYes, no: H.additionalNo, unsure: H.additionalUnsure }[e],
                              }),
                            },
                            e,
                          ),
                        ),
                      }),
                    }),
                    (0, t.jsx)(Q, { field: "additionalLocations", error: ae.additionalLocations }),
                  ],
                }),
                "yes" === ex.additionalLocations &&
                  (0, t.jsxs)("div", {
                    className: "flex flex-col gap-2",
                    "data-validation-field": "additionalCountries",
                    children: [
                      (0, t.jsx)("label", {
                        id: "additional-countries-label",
                        className: "text-sm leading-5 font-medium select-none",
                        htmlFor: "additional-countries",
                        children: (0, t.jsx)(d.A, { ...H.additionalCountries }),
                      }),
                      (0, t.jsx)(e2.x, {
                        id: "additional-countries",
                        multiple: !0,
                        value: ex.additionalCountries,
                        options: eb
                          .filter((e) => e.value !== ex.primaryCountry)
                          .map((e) => ({
                            ...e,
                            disabled:
                              ex.additionalCountries.length >= b.XO.additionalCountries.max &&
                              !ex.additionalCountries.includes(e.value),
                          })),
                        placeholder: (0, t.jsx)(d.A, { ...H.additionalCountriesPlaceholder }),
                        searchLabel: e_.formatMessage(H.additionalCountriesSearch),
                        noResults: (0, t.jsx)(d.A, { ...H.additionalCountriesNoResults }),
                        disabled: at,
                        invalid: !!ae.additionalCountries || void 0,
                        describedBy: ae.additionalCountries ? V("additionalCountries") : void 0,
                        onChange: (e) => {
                          ;(e.length < ex.additionalCountries.length || e.length <= b.XO.additionalCountries.max) &&
                            al("additionalCountries", e)
                        },
                      }),
                      (0, t.jsx)(Q, { field: "additionalCountries", error: ae.additionalCountries }),
                    ],
                  }),
                (0, t.jsxs)("fieldset", {
                  className: "flex min-w-0 flex-col gap-3",
                  disabled: at,
                  "data-validation-field": "selectedSafeguards",
                  children: [
                    (0, t.jsxs)("legend", {
                      className: "flex items-baseline gap-2 text-sm leading-5 font-medium select-none",
                      children: [
                        (0, t.jsx)(d.A, { ...H.safeguardsVisualHeading }),
                        (0, t.jsx)("span", {
                          className: "font-normal text-tertiary",
                          children: (0, t.jsx)(d.A, { ...H.safeguardsOptionalLabel }),
                        }),
                      ],
                    }),
                    (0, t.jsx)("p", {
                      className: "text-sm leading-5 text-secondary select-text",
                      children: (0, t.jsx)(d.A, { ...H.safeguardsVisualDescription }),
                    }),
                    (0, t.jsx)("div", {
                      className: "grid gap-3 sm:grid-cols-2",
                      children: Z.map((e) =>
                        (0, t.jsx)(
                          X,
                          {
                            id: `safeguard-${e.id}`,
                            checked: ex.selectedSafeguards?.includes(e.id) ?? !1,
                            onChange: (a) => {
                              ;(al(
                                "selectedSafeguards",
                                a
                                  ? [...(ex.selectedSafeguards ?? []), e.id]
                                  : ex.selectedSafeguards?.filter((a) => a !== e.id),
                              ),
                                "other" !== e.id || a || eP(aT))
                            },
                            title: (0, t.jsxs)(t.Fragment, {
                              children: [
                                (0, t.jsx)("span", { className: "sr-only", children: (0, t.jsx)(d.A, { ...e.title }) }),
                                (0, t.jsx)("span", {
                                  "aria-hidden": !0,
                                  children: (0, t.jsx)(d.A, { ...e.visualTitle }),
                                }),
                              ],
                            }),
                          },
                          e.id,
                        ),
                      ),
                    }),
                  ],
                }),
                ex.selectedSafeguards?.includes("other") &&
                  (0, t.jsxs)("div", {
                    className: "flex flex-col gap-2",
                    "data-validation-field": "otherSafeguardDetails",
                    children: [
                      (0, t.jsx)("label", {
                        className: "text-sm leading-5 font-medium select-none",
                        htmlFor: "other-safeguard-details",
                        children: (0, t.jsx)(d.A, { ...H.otherSafeguards }),
                      }),
                      (0, t.jsx)(eQ, {
                        id: "other-safeguard-details",
                        name: "other-safeguard-details",
                        variant: "outline",
                        size: "2xl",
                        resize: "vertical",
                        maxHeight: "none",
                        value: ex.otherSafeguardDetails,
                        onChange: (e) => al("otherSafeguardDetails", e.target.value),
                        maxLength: b.XO.otherSafeguardDetails.max,
                        disabled: at,
                        ...B("otherSafeguardDetails", ae.otherSafeguardDetails),
                      }),
                      (0, t.jsx)(Q, { field: "otherSafeguardDetails", error: ae.otherSafeguardDetails }),
                    ],
                  }),
                (0, t.jsxs)("div", {
                  className: "flex flex-col gap-2 rounded-xl bg-secondary-soft p-4",
                  "data-validation-field": "confirmResearchSafeguards",
                  children: [
                    (0, t.jsx)(X, {
                      id: "confirm-research-safeguards",
                      checked: ex.confirmResearchSafeguards,
                      onChange: (e) => al("confirmResearchSafeguards", e),
                      invalid: !!ae.confirmResearchSafeguards,
                      describedBy: ae.confirmResearchSafeguards
                        ? "application-error-confirmResearchSafeguards"
                        : void 0,
                      title: (0, t.jsx)(d.A, { ...H.safeguardsConfirmation }),
                    }),
                    (0, t.jsx)(Q, { field: "confirmResearchSafeguards", error: ae.confirmResearchSafeguards }),
                  ],
                }),
              ],
            })),
          (ev[85] = ex),
          (ev[86] = at),
          (ev[87] = eb),
          (ev[88] = al),
          (ev[89] = ae),
          (ev[90] = e_),
          (ev[91] = ey),
          (ev[92] = E))
        : (E = ev[92]),
        ev[93] !== ex ||
        ev[94] !== eK ||
        ev[95] !== at ||
        ev[96] !== ar ||
        ev[97] !== al ||
        ev[98] !== ae ||
        ev[99] !== e_ ||
        ev[100] !== e.organization?.name ||
        ev[101] !== ey
          ? ((G =
              3 === ey &&
              (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsxs)("div", {
                    className: "flex flex-col gap-4",
                    children: [
                      (0, t.jsx)(L.e, {
                        title: (0, t.jsx)(d.A, { ...H.summaryOrganization }),
                        disabled: at,
                        onEdit: () => ar(0),
                        children: (0, t.jsx)(J, { label: H.summaryOrganization, children: e.organization?.name }),
                      }),
                      (0, t.jsxs)(L.e, {
                        title: (0, t.jsx)(d.A, {
                          id: "rosalind.review.research",
                          defaultMessage: "Research",
                          description: "Heading for the research summary in a GPT-Rosalind application review",
                        }),
                        disabled: at,
                        onEdit: () => ar(1),
                        children: [
                          (0, t.jsx)(J, {
                            label: H.researchPurposeSummary,
                            children: (0, t.jsx)("span", {
                              className: "whitespace-pre-wrap",
                              children: ex.researchPurpose,
                            }),
                          }),
                          (0, t.jsx)(J, {
                            label: H.summaryScope,
                            children: (0, t.jsx)(q.dT, {
                              type: "unit",
                              value: K.filter((e) => ex.researchScopes.includes(e.id)).map(aP),
                            }),
                          }),
                          (0, t.jsx)(J, {
                            label: H.requestedAccess,
                            children: (0, t.jsx)(q.dT, {
                              type: "unit",
                              value: Y.filter((e) => ex.products.includes(e.id)).map(ax),
                            }),
                          }),
                        ],
                      }),
                      (0, t.jsxs)(L.e, {
                        title: (0, t.jsx)(d.A, { ...H.locationsStep }),
                        disabled: at,
                        onEdit: () => ar(2),
                        children: [
                          (0, t.jsx)(J, {
                            label: H.summaryPrimaryLocation,
                            children: e_.formatDisplayName(ex.primaryCountry, { type: "region" }) ?? ex.primaryCountry,
                          }),
                          (0, t.jsx)(J, {
                            label: H.summaryAdditionalLocations,
                            children:
                              "yes" === ex.additionalLocations
                                ? e_.formatList(
                                    ex.additionalCountries.map((e) => e_.formatDisplayName(e, { type: "region" }) ?? e),
                                    { type: "unit" },
                                  )
                                : (0, t.jsx)(d.A, {
                                    ...("no" === ex.additionalLocations ? H.additionalNo : H.additionalUnsure),
                                  }),
                          }),
                          (0, t.jsx)(J, {
                            label: H.safeguardsVisualLabel,
                            children: ex.selectedSafeguards?.length
                              ? (0, t.jsxs)("div", {
                                  className: "flex min-w-0 flex-col gap-2",
                                  children: [
                                    (0, t.jsx)("ul", {
                                      className: "flex min-w-0 flex-col gap-1",
                                      children: e4.Rs.filter((e) => ex.selectedSafeguards?.includes(e.value)).map(aA),
                                    }),
                                    ex.selectedSafeguards.includes("other") &&
                                      "" !== ex.otherSafeguardDetails.trim() &&
                                      (0, t.jsx)("p", {
                                        className: "whitespace-pre-wrap",
                                        children: ex.otherSafeguardDetails,
                                      }),
                                  ],
                                })
                              : (0, t.jsx)(d.A, {
                                  id: "rosalind.review.notSpecified",
                                  defaultMessage: "Not specified",
                                  description: "Review summary value when the applicant has not selected an option",
                                }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("fieldset", {
                    className: "flex flex-col gap-3",
                    disabled: at,
                    children: [
                      (0, t.jsx)(D.I3, { as: "legend", children: (0, t.jsx)(d.A, { ...H.termsVisualHeading }) }),
                      av.map((e) => {
                        let { key: a, label: i } = e
                        return (0, t.jsxs)(
                          "div",
                          {
                            className: "flex flex-col gap-2",
                            "data-validation-field": a,
                            children: [
                              (0, t.jsx)(X, {
                                id: a,
                                checked: eK && ex[a],
                                onChange: (e) => al(a, e),
                                invalid: !!ae[a],
                                describedBy: ae[a] ? `application-error-${a}` : void 0,
                                title: (0, t.jsx)(d.A, { ...i }),
                              }),
                              (0, t.jsx)(Q, { field: a, error: ae[a] }),
                            ],
                          },
                          a,
                        )
                      }),
                    ],
                  }),
                ],
              })),
            (ev[93] = ex),
            (ev[94] = eK),
            (ev[95] = at),
            (ev[96] = ar),
            (ev[97] = al),
            (ev[98] = ae),
            (ev[99] = e_),
            (ev[100] = e.organization?.name),
            (ev[101] = ey),
            (ev[102] = G))
          : (G = ev[102]),
        ev[103] !== eI
          ? ((M =
              eI &&
              (0, t.jsx)("p", {
                className: "text-sm text-danger",
                role: "alert",
                children: (0, t.jsx)(d.A, { ...eI }),
              })),
            (ev[103] = eI),
            (ev[104] = M))
          : (M = ev[104]),
        ev[105] !== eF ||
        ev[106] !== e.contextAvailable ||
        ev[107] !== e.contextPending ||
        ev[108] !== e.onRetryContext ||
        ev[109] !== e.workspaceHandoffRequired ||
        ev[110] !== ah
          ? ((ea =
              !eF &&
              !e.contextPending &&
              !e.workspaceHandoffRequired &&
              (0, t.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [
                  (0, t.jsx)("p", {
                    className: "text-sm text-secondary",
                    role: "alert",
                    children: (0, t.jsx)(d.A, { ...ah }),
                  }),
                  !e.contextAvailable &&
                    (0, t.jsx)(g.$, {
                      color: "secondary",
                      size: "dialogAction",
                      type: "button",
                      onClick: e.onRetryContext,
                      children: (0, t.jsx)(d.A, { ...H.retryOrganizationLookup }),
                    }),
                ],
              })),
            (ev[105] = eF),
            (ev[106] = e.contextAvailable),
            (ev[107] = e.contextPending),
            (ev[108] = e.onRetryContext),
            (ev[109] = e.workspaceHandoffRequired),
            (ev[110] = ah),
            (ev[111] = ea))
          : (ea = ev[111]),
        ev[112] !== y || ev[113] !== ar
          ? ((ei = () => ar(y)), (ev[112] = y), (ev[113] = ar), (ev[114] = ei))
          : (ei = ev[114]),
        ev[115] === Symbol.for("react.memo_cache_sentinel")
          ? ((et = (0, t.jsx)(N.tOb, {})), (en = (0, t.jsx)(d.A, { ...H.back })), (ev[115] = et), (ev[116] = en))
          : ((et = ev[115]), (en = ev[116])),
        ev[117] !== at || ev[118] !== ei
          ? ((es = (0, t.jsxs)(g.$, {
              color: "outline",
              size: "dialogAction",
              type: "button",
              disabled: at,
              onClick: ei,
              children: [et, en],
            })),
            (ev[117] = at),
            (ev[118] = ei),
            (ev[119] = es))
          : (es = ev[119]))
      let aL = !eF || Object.keys(e7).length > 0
      ;(ev[120] !== ab ? ((er = (0, t.jsx)(d.A, { ...ab })), (ev[120] = ab), (ev[121] = er)) : (er = ev[121]),
        ev[122] !== ey || ev[123] !== eS
          ? ((eo = 3 !== ey && !eS && (0, t.jsx)(N.Imh, {})), (ev[122] = ey), (ev[123] = eS), (ev[124] = eo))
          : (eo = ev[124]),
        ev[125] !== at || ev[126] !== aL || ev[127] !== er || ev[128] !== eo
          ? ((ec = (0, t.jsxs)(g.$, {
              color: "primary",
              size: "dialogAction",
              type: "submit",
              disabled: at,
              "aria-disabled": aL,
              children: [er, eo],
            })),
            (ev[125] = at),
            (ev[126] = aL),
            (ev[127] = er),
            (ev[128] = eo),
            (ev[129] = ec))
          : (ec = ev[129]),
        ev[130] !== es || ev[131] !== ec
          ? ((el = (0, t.jsxs)("div", {
              className: "flex flex-wrap items-center justify-between gap-3",
              children: [es, ec],
            })),
            (ev[130] = es),
            (ev[131] = ec),
            (ev[132] = el))
          : (el = ev[132]),
        ev[133] !== ey
          ? ((ed =
              3 === ey &&
              (0, t.jsxs)("div", {
                className: "mt-1 flex items-start justify-end gap-2 text-end text-secondary",
                children: [
                  (0, t.jsx)(N.$Rp, {}),
                  (0, t.jsx)(D.Rr, { children: (0, t.jsx)(d.A, { ...H.reviewStartsVisual }) }),
                ],
              })),
            (ev[133] = ey),
            (ev[134] = ed))
          : (ed = ev[134]),
        ev[135] !== el || ev[136] !== ed
          ? ((ep = (0, t.jsxs)("div", {
              className: "mt-1 flex flex-col gap-4 border-t border-default pt-5",
              children: [el, ed],
            })),
            (ev[135] = el),
            (ev[136] = ed),
            (ev[137] = ep))
          : (ep = ev[137]),
        ev[138] !== aC ||
        ev[139] !== ey ||
        ev[140] !== az ||
        ev[141] !== O ||
        ev[142] !== aj ||
        ev[143] !== aO ||
        ev[144] !== E ||
        ev[145] !== G ||
        ev[146] !== M ||
        ev[147] !== ea ||
        ev[148] !== ep
          ? ((eu = (0, t.jsxs)("form", {
              className: "flex min-w-0 flex-col gap-6",
              "data-step": ey,
              onSubmit: az,
              children: [aC, O, aj, aO, E, G, M, ea, ep],
            })),
            (ev[138] = aC),
            (ev[139] = ey),
            (ev[140] = az),
            (ev[141] = O),
            (ev[142] = aj),
            (ev[143] = aO),
            (ev[144] = E),
            (ev[145] = G),
            (ev[146] = M),
            (ev[147] = ea),
            (ev[148] = ep),
            (ev[149] = eu))
          : (eu = ev[149]))
      let ak = null != e8,
        aE = e8?.organizationName ?? "",
        aG = e8?.body.organizationId ?? ""
      return (
        ev[150] !== e8 || ev[151] !== as
          ? ((eg = () => {
              ;(e8 &&
                as(
                  "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_SUBMISSION_CONFIRMATION",
                  "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_CANCELLED",
                ),
                eV(null))
            }),
            (ev[150] = e8),
            (ev[151] = as),
            (ev[152] = eg))
          : (eg = ev[152]),
        ev[153] !== ag ? ((eh = () => void ag()), (ev[153] = ag), (ev[154] = eh)) : (eh = ev[154]),
        ev[155] !== eS || ev[156] !== ak || ev[157] !== aE || ev[158] !== aG || ev[159] !== eg || ev[160] !== eh
          ? ((em = (0, t.jsx)(am, {
              open: ak,
              organizationName: aE,
              organizationId: aG,
              submitting: eS,
              onClose: eg,
              onConfirm: eh,
            })),
            (ev[155] = eS),
            (ev[156] = ak),
            (ev[157] = aE),
            (ev[158] = aG),
            (ev[159] = eg),
            (ev[160] = eh),
            (ev[161] = em))
          : (em = ev[161]),
        ev[162] !== eu || ev[163] !== em
          ? ((ef = (0, t.jsxs)(t.Fragment, { children: [eu, em] })), (ev[162] = eu), (ev[163] = em), (ev[164] = ef))
          : (ef = ev[164]),
        ef
      )
    }
    function aA(e) {
      return (0, t.jsx)("li", { children: e.label }, e.value)
    }
    function ax(e) {
      return (0, t.jsx)(d.A, { ...e.visualTitle }, e.id)
    }
    function aP(e) {
      return (0, t.jsx)(d.A, { ...e.title }, e.id)
    }
    function aT(e) {
      return { ...e, otherSafeguardDetails: "" }
    }
    function aR(e) {
      return { ...e, additionalCountries: [] }
    }
    function aI(e) {
      return (0, t.jsx)(
        er.G,
        {
          appearance: "primary",
          href: "https://openai.com/rosalind/",
          initiator: "external_link",
          underline: "always",
          children: e,
        },
        "model",
      )
    }
    function aw(e) {
      return void 0 !== a_[e.field]
    }
    function aS(e, a) {
      return "gpt-rosalind-access-v2" === a ? (0, b.Ug)(e) : (0, b.R5)(e)
    }
    function aC(e) {
      let a,
        i,
        s,
        r,
        c,
        l,
        p,
        u,
        h,
        m,
        f,
        v,
        _,
        b,
        y,
        A,
        x = (0, n.c)(48),
        {
          application: P,
          answers: T,
          applicantName: R,
          applicantEmail: I,
          organization: w,
          identity: C,
          onRefreshContext: z,
          onCanceled: j,
        } = e
      ;(x[0] !== P.bioagentsApplicationReference ||
      x[1] !== P.organizationId ||
      x[2] !== C.accountId ||
      x[3] !== C.userId
        ? ((a = [
            "rosalind-submission-receipt",
            C.userId,
            C.accountId,
            P.organizationId,
            P.bioagentsApplicationReference,
          ]),
          (x[0] = P.bioagentsApplicationReference),
          (x[1] = P.organizationId),
          (x[2] = C.accountId),
          (x[3] = C.userId),
          (x[4] = a))
        : (a = x[4]),
        x[5] !== P || x[6] !== C
          ? ((i = (e) => {
              let { signal: a } = e
              return S(C, P, a)
            }),
            (x[5] = P),
            (x[6] = C),
            (x[7] = i))
          : (i = x[7]),
        x[8] !== a || x[9] !== i
          ? ((s = { queryKey: a, queryFn: i, retry: !1, staleTime: 3e4 }), (x[8] = a), (x[9] = i), (x[10] = s))
          : (s = x[10]))
      let { data: O, refetch: L } = (0, o.I)(s)
      x[11] !== P || x[12] !== O
        ? ((r = O ?? { ...P, canResumeVerification: !0 === P.canResumeVerification }),
          (x[11] = P),
          (x[12] = O),
          (x[13] = r))
        : (r = x[13])
      let k = r,
        E = k.state
      x[14] !== k ? ((c = es(k)), (x[14] = k), (x[15] = c)) : (c = x[15])
      let G = c
      return (
        x[16] !== E
          ? ((l =
              "access_granted" !== E &&
              (0, t.jsxs)("p", {
                className: "flex items-center gap-2 text-xs text-secondary",
                children: [(0, t.jsx)(N.$Rp, {}), (0, t.jsx)(d.A, { ...ea.noAccess })],
              })),
            (x[16] = E),
            (x[17] = l))
          : (l = x[17]),
        x[18] !== z || x[19] !== L
          ? ((p = () => {
              ;(L(), z())
            }),
            (x[18] = z),
            (x[19] = L),
            (x[20] = p))
          : (p = x[20]),
        x[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, t.jsx)(d.A, { ...ea.refresh })), (h = (0, t.jsx)(N.Imh, {})), (x[21] = u), (x[22] = h))
          : ((u = x[21]), (h = x[22])),
        x[23] !== p
          ? ((m = (0, t.jsxs)(g.$, { onClick: p, color: "secondary", size: "dialogAction", children: [u, h] })),
            (x[23] = p),
            (x[24] = m))
          : (m = x[24]),
        x[25] !== L
          ? ((f = () => {
              L()
            }),
            (x[25] = L),
            (x[26] = f))
          : (f = x[26]),
        x[27] !== k || x[28] !== C || x[29] !== j || x[30] !== f
          ? ((v = (0, t.jsx)(ef, {
              application: k,
              identity: C,
              disabled: !1,
              surface: "CHATGPT_WEB_ROSALIND_APPLICATION_SURFACE_FORM",
              onCanceled: j,
              onRefresh: f,
            })),
            (x[27] = k),
            (x[28] = C),
            (x[29] = j),
            (x[30] = f),
            (x[31] = v))
          : (v = x[31]),
        x[32] !== m || x[33] !== v
          ? ((_ = (0, t.jsxs)("div", { className: "flex flex-wrap items-center gap-3", children: [m, v] })),
            (x[32] = m),
            (x[33] = v),
            (x[34] = _))
          : (_ = x[34]),
        x[35] !== _ || x[36] !== l
          ? ((b = (0, t.jsxs)(t.Fragment, { children: [l, _] })), (x[35] = _), (x[36] = l), (x[37] = b))
          : (b = x[37]),
        x[38] !== G
          ? ((y =
              G &&
              (0, t.jsxs)("aside", {
                className: "flex flex-col gap-2 rounded-xl border border-default p-4",
                children: [
                  (0, t.jsx)("h2", { className: "text-sm font-semibold", children: (0, t.jsx)(d.A, { ...G.title }) }),
                  (0, t.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, t.jsx)(d.A, { ...G.description, values: G.descriptionValues }),
                  }),
                ],
              })),
            (x[38] = G),
            (x[39] = y))
          : (y = x[39]),
        x[40] !== T || x[41] !== I || x[42] !== R || x[43] !== k || x[44] !== w || x[45] !== b || x[46] !== y
          ? ((A = (0, t.jsx)(ei, {
              application: k,
              answers: T,
              applicantName: R,
              applicantEmail: I,
              organization: w,
              headingRef: az,
              footer: b,
              children: y,
            })),
            (x[40] = T),
            (x[41] = I),
            (x[42] = R),
            (x[43] = k),
            (x[44] = w),
            (x[45] = b),
            (x[46] = y),
            (x[47] = A))
          : (A = x[47]),
        A
      )
    }
    function az(e) {
      ;(e?.focus({ preventScroll: !0 }), e?.closest("main")?.parentElement?.scrollTo({ top: 0, behavior: "instant" }))
    }
    ;(i("OWtl"), i("iPqE"), i("hZax"))
    var aN = i("LjYy")
    function aj() {
      let e,
        a,
        i,
        s = (0, n.c)(13),
        r = (0, u.As)()
      if (r.isLoading) {
        let e
        return (
          s[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, t.jsx)(aM, {})), (s[0] = e)) : (e = s[0]),
          e
        )
      }
      if ("chatgpt" !== r.authMethod || null == r.accountId || null == r.userId) {
        let e
        return (
          s[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsx)(aD, {
                children: (0, t.jsx)(d.A, {
                  id: "chatgpt.rosalind_access.customer.authentication_required",
                  defaultMessage: "Sign in with your ChatGPT account to apply for GPT-Rosalind access.",
                  description:
                    "Message on the GPT-Rosalind customer application when ChatGPT authentication is unavailable",
                }),
              })),
              (s[1] = e))
            : (e = s[1]),
          e
        )
      }
      s[2] !== r.accountId || s[3] !== r.userId
        ? ((e = { accountId: r.accountId, userId: r.userId }), (s[2] = r.accountId), (s[3] = r.userId), (s[4] = e))
        : (e = s[4])
      let o = e,
        c = `${o.userId}:${o.accountId}`
      s[5] !== r.email || s[6] !== r.nameAtLogin
        ? ((a = r.nameAtLogin?.trim() || r.email || null), (s[5] = r.email), (s[6] = r.nameAtLogin), (s[7] = a))
        : (a = s[7])
      let l = r.email ?? null
      return (
        s[8] !== o || s[9] !== c || s[10] !== a || s[11] !== l
          ? ((i = (0, t.jsx)(aO, { identity: o, applicantName: a, applicantEmail: l }, c)),
            (s[8] = o),
            (s[9] = c),
            (s[10] = a),
            (s[11] = l),
            (s[12] = i))
          : (i = s[12]),
        i
      )
    }
    function aO(e) {
      let a,
        i,
        r,
        u,
        h,
        f,
        v,
        _,
        b,
        A,
        x,
        T,
        R,
        I,
        w,
        S,
        C,
        z,
        N,
        j,
        O,
        L,
        k,
        E,
        G,
        M,
        D,
        q,
        H,
        V,
        B,
        U,
        W,
        F,
        $,
        Y,
        K = (0, n.c)(149),
        { identity: Z, applicantName: X, applicantEmail: Q } = e,
        [J, ee] = (0, s.ok)()
      K[0] !== J
        ? ((a = J.get("organization_id") ?? J.get("organizationId") ?? void 0), (K[0] = J), (K[1] = a))
        : (a = K[1])
      let ea = a,
        [ei, et] = (0, l.useState)(null)
      K[2] === Symbol.for("react.memo_cache_sentinel") ? ((i = { enabled: !1 }), (K[2] = i)) : (i = K[2])
      let { data: en, isLoading: es } = (0, c._U)(p.sE, Z.accountId, i),
        er =
          null == en
            ? void 0
            : Object.values(en.accounts).find((e) => {
                let { account: a } = e
                return a.account_id === Z.accountId
              })?.account.organization_id
      ;(K[3] !== Z.accountId || K[4] !== Z.userId
        ? ((r = ["rosalind-customer-application-discovery", Z.userId, Z.accountId]),
          (K[3] = Z.accountId),
          (K[4] = Z.userId),
          (K[5] = r))
        : (r = K[5]),
        K[6] !== Z
          ? ((u = (e) => {
              let { signal: a } = e
              return eW(Z, { signal: a })
            }),
            (K[6] = Z),
            (K[7] = u))
          : (u = K[7]),
        K[8] !== r || K[9] !== u
          ? ((h = { queryKey: r, queryFn: u, retry: !1, staleTime: 0, refetchOnWindowFocus: !0 }),
            (K[8] = r),
            (K[9] = u),
            (K[10] = h))
          : (h = K[10]))
      let eo = (0, o.I)(h)
      ;(K[11] !== eo.data?.applications
        ? ((f = eo.data?.applications ?? []), (K[11] = eo.data?.applications), (K[12] = f))
        : (f = K[12]),
        K[13] !== eo.data?.latestCanceledApplications
          ? ((v = eo.data?.latestCanceledApplications ?? []),
            (K[13] = eo.data?.latestCanceledApplications),
            (K[14] = v))
          : (v = K[14]),
        K[15] !== f || K[16] !== v
          ? ((_ = new Set([...f, ...v].map(aG))), (K[15] = f), (K[16] = v), (K[17] = _))
          : (_ = K[17]))
      let ec = _
      K[18] !== ec ? ((b = 1 === ec.size ? ec : []), (K[18] = ec), (K[19] = b)) : (b = K[19])
      let [el] = b
      K[20] !== er ||
      K[21] !== eo.data?.organizations ||
      K[22] !== eo.data?.organizations[0] ||
      K[23] !== eo.data?.organizations.find ||
      K[24] !== el
        ? ((A =
            eo.data?.organizations.find((e) => {
              let { id: a } = e
              return a === er
            }) ??
            eo.data?.organizations.find((e) => {
              let { id: a } = e
              return a === el
            }) ??
            eo.data?.organizations.find(aE) ??
            eo.data?.organizations[0]),
          (K[20] = er),
          (K[21] = eo.data?.organizations),
          (K[22] = eo.data?.organizations[0]),
          (K[23] = eo.data?.organizations.find),
          (K[24] = el),
          (K[25] = A))
        : (A = K[25])
      let ed = A,
        ep = ea ?? ed?.id ?? ""
      if (K[26] !== ep || K[27] !== en) {
        let e
        ;((x =
          null == en
            ? void 0
            : ((e = Object.values(en.accounts).filter(
                ({ account: e }) =>
                  e.organization_id === ep &&
                  null != e.account_id &&
                  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(e.account_id) &&
                  "personal" !== e.structure &&
                  !e.is_deactivated &&
                  ("account-owner" === e.account_user_role ||
                    "account-admin" === e.account_user_role ||
                    "standard-user" === e.account_user_role) &&
                  e.plan_type !== aN.x.K12 &&
                  (e.plan_type === aN.x.SCI || (0, eI.Hw)(e.plan_type) || (0, eI.uz)(e.plan_type)),
              )),
              (e.find((e) => e.can_access_with_session) ?? e[0])?.account.account_id ?? void 0)),
          (K[26] = ep),
          (K[27] = en),
          (K[28] = x))
      } else x = K[28]
      let eu = x
      K[29] !== Z.accountId || K[30] !== eu || K[31] !== en
        ? ((T =
            null != en &&
            null != eu &&
            (eu !== Z.accountId ||
              Object.values(en.accounts).some((e) => {
                let { account: a, can_access_with_session: i } = e
                return a.account_id === eu && !1 === i
              }))),
          (K[29] = Z.accountId),
          (K[30] = eu),
          (K[31] = en),
          (K[32] = T))
        : (T = K[32])
      let eg = T
      ;(K[33] !== Z.accountId || K[34] !== Z.userId || K[35] !== ep
        ? ((R = ["rosalind-customer-application-context", Z.userId, Z.accountId, ep]),
          (K[33] = Z.accountId),
          (K[34] = Z.userId),
          (K[35] = ep),
          (K[36] = R))
        : (R = K[36]),
        K[37] !== Z || K[38] !== ep
          ? ((I = (e) => {
              let { signal: a } = e
              return eW(Z, { organizationId: ep, signal: a })
            }),
            (K[37] = Z),
            (K[38] = ep),
            (K[39] = I))
          : (I = K[39]))
      let eh = "" !== ep
      K[40] !== R || K[41] !== I || K[42] !== eh
        ? ((w = { queryKey: R, queryFn: I, enabled: eh, retry: !1, staleTime: 0, refetchOnWindowFocus: !0 }),
          (K[40] = R),
          (K[41] = I),
          (K[42] = eh),
          (K[43] = w))
        : (w = K[43])
      let em = (0, o.I)(w)
      if (eo.isPending || ("" !== ep && em.isPending)) {
        let e
        return (
          K[44] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, t.jsx)(aM, {})), (K[44] = e)) : (e = K[44]),
          e
        )
      }
      if (null == eo.data) {
        let e, a, i, n, s
        return (
          K[45] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsx)(eG, { lookupFailed: !0, createBusinessOrganizationShown: !1 })), (K[45] = e))
            : (e = K[45]),
          K[46] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, t.jsx)("p", {
                role: "alert",
                children: (0, t.jsx)(d.A, {
                  id: "chatgpt.rosalind_access.customer.context_failed",
                  defaultMessage: "We couldn’t load your GPT-Rosalind application.",
                  description: "Error shown when the GPT-Rosalind customer application context could not be loaded",
                }),
              })),
              (K[46] = a))
            : (a = K[46]),
          K[47] !== eo ? ((i = () => void eo.refetch()), (K[47] = eo), (K[48] = i)) : (i = K[48]),
          K[49] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, t.jsx)(d.A, {
                id: "chatgpt.rosalind_access.customer.context_retry",
                defaultMessage: "Try again",
                description: "Button that retries loading the GPT-Rosalind customer application context",
              })),
              (K[49] = n))
            : (n = K[49]),
          K[50] !== i
            ? ((s = (0, t.jsxs)(aD, {
                children: [
                  e,
                  a,
                  (0, t.jsx)(g.$, {
                    color: "secondary",
                    size: "dialogAction",
                    type: "button",
                    onClick: i,
                    children: n,
                  }),
                ],
              })),
              (K[50] = i),
              (K[51] = s))
            : (s = K[51]),
          s
        )
      }
      ;(K[52] !== eo.data.organizations ||
      K[53] !== em.data?.organizations ||
      K[54] !== em.data?.organizations.find ||
      K[55] !== ep
        ? ((C = em.data?.organizations.find((e) => {
            let { id: a } = e
            return a === ep
          })),
          (S = eo.data.organizations.map((e) => (e.id === C?.id ? C : e))),
          null == C ||
            S.some((e) => {
              let { id: a } = e
              return a === C.id
            }) ||
            S.push(C),
          (K[52] = eo.data.organizations),
          (K[53] = em.data?.organizations),
          (K[54] = em.data?.organizations.find),
          (K[55] = ep),
          (K[56] = S),
          (K[57] = C))
        : ((S = K[56]), (C = K[57])),
        K[58] !== em.data || K[59] !== ep
          ? ((z = "" !== ep && em.data?.applicationHistoryKnownOrganizationIds.includes(ep) === !0),
            (K[58] = em.data),
            (K[59] = ep),
            (K[60] = z))
          : (z = K[60]))
      let ef = z,
        ev = ef ? em.data : eo.data
      K[61] !== ev?.applications || K[62] !== ev?.applications.find || K[63] !== ep
        ? ((N = ev?.applications.find((e) => {
            let { organizationId: a } = e
            return a === ep
          })),
          (K[61] = ev?.applications),
          (K[62] = ev?.applications.find),
          (K[63] = ep),
          (K[64] = N))
        : (N = K[64])
      let e_ = N
      K[65] !== ev?.latestCanceledApplications || K[66] !== ev?.latestCanceledApplications.find || K[67] !== ep
        ? ((j = ev?.latestCanceledApplications.find((e) => {
            let { organizationId: a } = e
            return a === ep
          })),
          (K[65] = ev?.latestCanceledApplications),
          (K[66] = ev?.latestCanceledApplications.find),
          (K[67] = ep),
          (K[68] = j))
        : (j = K[68])
      let eb = j
      K[69] !== e_ || K[70] !== eb || K[71] !== J
        ? ((O = e_ ?? (eb?.bioagentsApplicationReference === J.get("reapply") ? void 0 : eb)),
          (K[69] = e_),
          (K[70] = eb),
          (K[71] = J),
          (K[72] = O))
        : (O = K[72])
      let ey = O,
        eA = null != ey && null != C && ef && !em.isError && !eg
      K[73] !== eo || K[74] !== em
        ? ((L = function () {
            ;(em.refetch(), eo.refetch())
          }),
          (K[73] = eo),
          (K[74] = em),
          (K[75] = L))
        : (L = K[75])
      let ex = L,
        eP = ei?.application.organizationId === ep ? ei : null
      if (
        null != eP &&
        !eg &&
        null == e_ &&
        eb?.bioagentsApplicationReference !== eP.application.bioagentsApplicationReference
      ) {
        let e, a, i
        return (
          K[76] !== C || K[77] !== ep
            ? ((e = C ?? { id: ep, name: ep }), (K[76] = C), (K[77] = ep), (K[78] = e))
            : (e = K[78]),
          K[79] !== ex
            ? ((a = () => {
                ;(et(null), ex())
              }),
              (K[79] = ex),
              (K[80] = a))
            : (a = K[80]),
          K[81] !== Q ||
          K[82] !== X ||
          K[83] !== eP.answers ||
          K[84] !== eP.application ||
          K[85] !== Z ||
          K[86] !== ex ||
          K[87] !== e ||
          K[88] !== a
            ? ((i = (0, t.jsx)(
                aC,
                {
                  application: eP.application,
                  answers: eP.answers,
                  applicantName: X,
                  applicantEmail: Q,
                  organization: e,
                  identity: Z,
                  onRefreshContext: ex,
                  onCanceled: a,
                },
                eP.application.bioagentsApplicationReference,
              )),
              (K[81] = Q),
              (K[82] = X),
              (K[83] = eP.answers),
              (K[84] = eP.application),
              (K[85] = Z),
              (K[86] = ex),
              (K[87] = e),
              (K[88] = a),
              (K[89] = i))
            : (i = K[89]),
          i
        )
      }
      K[90] !== J ? ((k = J.get("workspace_handoff")), (K[90] = J), (K[91] = k)) : (k = K[91])
      let eT = "true" === k
      K[92] !== eo.isFetching ||
      K[93] !== ey ||
      K[94] !== Z ||
      K[95] !== ex ||
      K[96] !== em.data ||
      K[97] !== em.isFetching ||
      K[98] !== C ||
      K[99] !== eA
        ? ((E = eA
            ? (0, t.jsx)(
                ez,
                {
                  identity: Z,
                  organization: C,
                  target: ey,
                  surface: "CHATGPT_WEB_ROSALIND_APPLICATION_SURFACE_FORM",
                  canRequestResearchUpgrade:
                    em.data?.capabilities?.applicationSchemaVersion === "gpt-rosalind-access-v3" &&
                    !0 === em.data.capabilities.researchUpgradeRequests,
                  contextRefreshing: eo.isFetching || em.isFetching,
                  refreshContext: ex,
                },
                ey.bioagentsApplicationReference,
              )
            : null),
          (K[92] = eo.isFetching),
          (K[93] = ey),
          (K[94] = Z),
          (K[95] = ex),
          (K[96] = em.data),
          (K[97] = em.isFetching),
          (K[98] = C),
          (K[99] = eA),
          (K[100] = E))
        : (E = K[100])
      let eR = E
      ;(K[101] !== eA ? ((G = !eA && (0, t.jsx)(m.Z, {})), (K[101] = eA), (K[102] = G)) : (G = K[102]),
        K[103] !== en
          ? ((M = null == en ? [] : Object.values(en.accounts).flatMap(ak)), (K[103] = en), (K[104] = M))
          : (M = K[104]),
        K[105] !== eo || K[106] !== Z || K[107] !== S
          ? ((D = null), (K[105] = eo), (K[106] = Z), (K[107] = S), (K[108] = D))
          : (D = K[108]))
      let ew = null == en || null != eu,
        eS = eo.isError || em.isError,
        eC = "" === ep || ef
      K[109] !== eT || K[110] !== Z || K[111] !== ep || K[112] !== eA || K[113] !== eR
        ? ((q = eR), (K[109] = eT), (K[110] = Z), (K[111] = ep), (K[112] = eA), (K[113] = eR), (K[114] = q))
        : (q = K[114])
      let eN = em.data?.submissionEnabled ?? !1,
        ej = em.data?.capabilities
      return (
        K[115] !== ee
          ? ((H = (e) => {
              ;(et(null),
                ee(
                  (a) => {
                    let i = new URLSearchParams(a)
                    return (
                      i.set("organization_id", e),
                      i.delete("organizationId"),
                      i.delete("reapply"),
                      i.set("workspace_handoff", "true"),
                      i
                    )
                  },
                  { replace: !0 },
                ))
            }),
            (K[115] = ee),
            (K[116] = H))
          : (H = K[116]),
        K[117] !== eo || K[118] !== em || K[119] !== ep
          ? ((V = () => {
              ;(eo.refetch(), "" !== ep && em.refetch())
            }),
            (K[117] = eo),
            (K[118] = em),
            (K[119] = ep),
            (K[120] = V))
          : (V = K[120]),
        K[121] !== ex
          ? ((B = (e, a) => {
              ;(et({ application: e, answers: a }), ex())
            }),
            (K[121] = ex),
            (K[122] = B))
          : (B = K[122]),
        K[123] !== Z
          ? ((U = (e) =>
              (async function (e, a) {
                try {
                  var i, t
                  let n,
                    s = await P.Request.safeRequest("post", "/rosalind/access/applications", {
                      parameters: { header: a.headers },
                      additionalHeaders: { [y.zBc]: e.accountId, ...a.headers },
                      expectedIdentity: e,
                      expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 502, 503],
                      requestBody: a.body,
                      retry: !1,
                      signal: void 0,
                    }),
                    r = eH.safeParse(s)
                  if (
                    !r.success ||
                    r.data.organizationId !== a.body.organizationId ||
                    ((i = r.data),
                    (t = a.body),
                    (n =
                      "requestedEnhancedPrivacy" in t
                        ? t.requestedEnhancedPrivacy
                          ? "research_zdr"
                          : "research_non_zdr"
                        : (t.requestedResearchMode ?? "research_non_zdr")),
                    (void 0 !== i.requestedResearchMode && i.requestedResearchMode !== n) ||
                      (void 0 === i.personaInquiryId) != (void 0 === i.personaEnvironmentId))
                  )
                    throw Error("Invalid Rosalind application response")
                  return { submitted: !0, ...r.data }
                } catch (i) {
                  let e = (function (e, a) {
                    let i = e$(e)
                    if (null == i) return null
                    let { body: t, status: n } = i
                    if (409 === n && "already_submitted" === t.code) {
                      let e = eH.safeParse(t)
                      return e.success && e.data.organizationId === a
                        ? {
                            submitted: !1,
                            code: "application_conflict",
                            organizationId: a,
                            state: e.data.state,
                            bioagentsApplicationReference: e.data.bioagentsApplicationReference,
                            canCancel: e.data.canCancel,
                            canResumeVerification: e.data.canResumeVerification,
                            requestedResearchMode: e.data.requestedResearchMode,
                            kybStatus: e.data.kybStatus,
                          }
                        : { submitted: !1, code: "invalid_backend_response" }
                    }
                    switch (t.code) {
                      case "application_history_limit":
                      case "application_unprocessable":
                      case "backend_unavailable":
                      case "idempotency_conflict":
                      case "invalid_application":
                      case "invalid_idempotency_key":
                      case "organization_unavailable":
                      case "submissions_disabled":
                        return { submitted: !1, code: t.code }
                      case "fresh_persona_required":
                      case "suitability_admission_conflict":
                        return { submitted: !1, code: "application_unprocessable" }
                      case "persona_verification_unavailable":
                        return { submitted: !1, code: "backend_unavailable" }
                      default:
                        if (422 === n) return { submitted: !1, code: "invalid_application" }
                        if (403 === n) return { submitted: !1, code: "organization_unavailable" }
                        if (n >= 500) return { submitted: !1, code: "backend_unavailable" }
                        return { submitted: !1, code: "invalid_backend_response" }
                    }
                  })(i, a.body.organizationId)
                  if (null != e) return e
                  throw i
                }
              })(Z, e)),
            (W = (e) =>
              (async function (e, a) {
                return eF(
                  P.Request.safeRequest("post", "/rosalind/access/persona/start", {
                    additionalHeaders: { [y.zBc]: e.accountId },
                    expectedIdentity: e,
                    expectedErrorStatuses: [400, 401, 403, 404, 422, 502, 503],
                    requestBody: a,
                    retry: !1,
                    signal: void 0,
                  }),
                )
              })(Z, {
                attemptId: e.attemptId,
                organizationId: e.organizationId,
                ...(2 === e.payloadVersion ? { payloadVersion: 2 } : {}),
              })),
            (F = (e) =>
              (async function (e, a) {
                return eF(
                  P.Request.safeRequest("post", "/rosalind/access/persona/status", {
                    additionalHeaders: { [y.zBc]: e.accountId },
                    expectedIdentity: e,
                    expectedErrorStatuses: [400, 401, 403, 404, 422, 502, 503],
                    requestBody: a,
                    retry: !1,
                    signal: void 0,
                  }),
                )
              })(Z, e)),
            (K[123] = Z),
            (K[124] = U),
            (K[125] = W),
            (K[126] = F))
          : ((U = K[124]), (W = K[125]), (F = K[126])),
        K[127] !== ey ||
        K[128] !== S ||
        K[129] !== eg ||
        K[130] !== ep ||
        K[131] !== M ||
        K[132] !== D ||
        K[133] !== ew ||
        K[134] !== eS ||
        K[135] !== eC ||
        K[136] !== q ||
        K[137] !== eN ||
        K[138] !== ej ||
        K[139] !== H ||
        K[140] !== V ||
        K[141] !== B ||
        K[142] !== U ||
        K[143] !== W ||
        K[144] !== F
          ? (($ = (0, t.jsx)(ab, {
              chatgptWorkspaceOrganizationIds: M,
              createBusinessOrganizationAction: D,
              organizationActions: aL,
              workspaceHandoffRequired: eg,
              hasWorkspace: ew,
              lookupFailed: eS,
              organizations: S,
              selectedOrganizationId: ep,
              contextAvailable: eC,
              existingApplication: ey,
              existingApplicationStatus: q,
              organizationSource: "verified",
              submissionEnabled: eN,
              capabilities: ej,
              onSelectOrganization: H,
              onRetryContext: V,
              onApplicationSubmitted: B,
              submitApplication: U,
              startPersona: W,
              checkPersona: F,
            })),
            (K[127] = ey),
            (K[128] = S),
            (K[129] = eg),
            (K[130] = ep),
            (K[131] = M),
            (K[132] = D),
            (K[133] = ew),
            (K[134] = eS),
            (K[135] = eC),
            (K[136] = q),
            (K[137] = eN),
            (K[138] = ej),
            (K[139] = H),
            (K[140] = V),
            (K[141] = B),
            (K[142] = U),
            (K[143] = W),
            (K[144] = F),
            (K[145] = $))
          : ($ = K[145]),
        K[146] !== G || K[147] !== $
          ? ((Y = (0, t.jsxs)("section", { className: "flex flex-col gap-8 text-sm text-default", children: [G, $] })),
            (K[146] = G),
            (K[147] = $),
            (K[148] = Y))
          : (Y = K[148]),
        Y
      )
    }
    function aL(e) {
      return null
    }
    function ak(e) {
      let { account: a } = e
      return null == a.organization_id || "personal" === a.structure || a.is_deactivated ? [] : [a.organization_id]
    }
    function aE(e) {
      let { submissionEligible: a } = e
      return !0 === a
    }
    function aG(e) {
      let { organizationId: a } = e
      return a
    }
    function aM() {
      let e,
        a,
        i = (0, n.c)(2)
      return (
        i[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, t.jsx)(h.y, {})), (i[0] = e)) : (e = i[0]),
        i[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, t.jsxs)("div", {
              className: "flex min-h-40 items-center justify-center",
              role: "status",
              children: [
                e,
                (0, t.jsx)("span", {
                  className: "sr-only",
                  children: (0, t.jsx)(d.A, {
                    id: "chatgpt.rosalind_access.customer.loading",
                    defaultMessage: "Loading GPT-Rosalind application",
                    description: "Accessible loading message for the GPT-Rosalind customer application",
                  }),
                }),
              ],
            })),
            (i[1] = a))
          : (a = i[1]),
        a
      )
    }
    function aD(e) {
      let a,
        i = (0, n.c)(2),
        { children: s } = e
      return (
        i[0] !== s
          ? ((a = (0, t.jsx)("div", { className: "flex flex-col items-start gap-4", children: s })),
            (i[0] = s),
            (i[1] = a))
          : (a = i[1]),
        a
      )
    }
    function aq() {
      let e,
        a,
        i,
        o = (0, n.c)(5),
        [c] = (0, s.ok)()
      o[0] !== c ? ((e = c.get("embedded")), (o[0] = c), (o[1] = e)) : (e = o[1])
      let l = "codex" === e
      return (
        o[2] === Symbol.for("react.memo_cache_sentinel") ? ((a = (0, t.jsx)(aj, {})), (o[2] = a)) : (a = o[2]),
        o[3] !== l ? ((i = (0, t.jsx)(r.x, { embedded: l, children: a })), (o[3] = l), (o[4] = i)) : (i = o[4]),
        i
      )
    }
  },
}
//# sourceMappingURL=194951.fdfe2ab0d6.js.map
