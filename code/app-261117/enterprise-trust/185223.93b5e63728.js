export const __rspack_esm_ids = [185223]
export const __webpack_modules__ = {
  MhWb(e, a, i) {
    var s = i("gbEN"),
      t = i("reLf")
    let n = i.n(t)()(
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
      s.l,
    )
    i.d(a, {}, { N: n })
  },
  VKS3(e, a, i) {
    i.d(a, { RosalindCustomerApplicationRoute: () => a2 })
    var s = i("ABep"),
      t = i("QosV"),
      n = i("qmMi"),
      r = i("Ywss"),
      o = i("UOa8"),
      l = i("E4mZ"),
      c = i("OMIV")
    let d = [
      "team",
      "self_serve_business_prolite",
      "self_serve_business_usage_based",
      "business",
      "enterprise_cbp_usage_based",
      "enterprise_cbp_automation",
      "enterprise_cbp_trial",
      "enterprise_cbp_view_only",
      "hc",
      "finserv",
      "law",
      "ent26",
      "enterprise",
      "education",
      "edu_plus",
      "edu_pro",
      "edu",
    ]
    var u = i("T0Rc"),
      p = i("zd8w"),
      g = i("oyxz"),
      f = i("CLax"),
      m = i("Sm6l"),
      h = i("RNul"),
      _ = i("KJsA"),
      A = i("UR81"),
      x = i("Qgfj"),
      b = i("ASxG"),
      v = i("fDv2"),
      y = i("yGJW"),
      I = i("nPFn"),
      P = i("DBCl"),
      R = i("Kwur"),
      S = i("GDNt")
    let T = b.Ikc({
        inquiryId: b.YjP().regex(/^inq_[A-Za-z0-9]{16,64}$/),
        environmentId: b.YjP().regex(/^env_[A-Za-z0-9]{16,64}$/),
        status: b.k5n([
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
        fields: b.g1P(b.YjP(), b.YjP()),
        sessionToken: b
          .YjP()
          .regex(/^[A-Za-z0-9._~+/=-]{16,2048}$/)
          .optional(),
      }),
      j = b.Ikc({ ok: b.euz(!0), result: T }),
      N = b.Ikc({
        organizationId: b.YjP(),
        state: b.IeY(I.kO),
        bioagentsApplicationReference: b.YjP().regex(/^[0-9a-f]{64}$/),
        canCancel: b.zMY(),
        canResumeVerification: b.zMY().optional(),
        enhancedPrivacyFollowUpRequested: b.zMY().optional(),
        requestedResearchMode: b.IeY(I.PI).optional(),
        kybStatus: b
          .k5n(["not_started", "in_progress", "pending", "action_required", "passed", "failed", "expired", "error"])
          .optional(),
        requiredAction: b.YjP().optional(),
        actionOwner: b.euz("applicant").optional(),
        personaInquiryId: b
          .YjP()
          .regex(/^inq_[A-Za-z0-9]{16,64}$/)
          .optional(),
        personaEnvironmentId: b
          .YjP()
          .regex(/^env_[A-Za-z0-9]{16,64}$/)
          .optional(),
      }),
      C = b._H3({ code: b.YjP().optional() }),
      O = b.k5n([
        "backend_unavailable",
        "invalid_provider_response",
        "invalid_request",
        "not_configured",
        "organization_unavailable",
        "provider_unavailable",
      ])
    class E extends Error {
      code
      status
      constructor(e, a) {
        ;(super("Rosalind business verification is unavailable"),
          (this.code = e),
          (this.status = a),
          (this.name = "RosalindPersonaRequestError"))
      }
    }
    async function L(e, a = {}) {
      return R.Request.safeRequest("get", "/rosalind/access/context", {
        parameters: { query: { fastDiscovery: !1, organizationId: a.organizationId } },
        additionalHeaders: { [P.zBc]: e.accountId },
        expectedIdentity: e,
        expectedErrorStatuses: [400, 401, 403, 404, 422, 502, 503],
        retry: !1,
        signal: a.signal,
      })
    }
    async function M(e) {
      try {
        let a = j.safeParse(await e)
        if (!a.success) throw new E("invalid_provider_response")
        return a.data.result
      } catch (a) {
        if (a instanceof E) throw a
        let e = w(a)
        throw new E(O.safeParse(e?.body.code).data ?? "backend_unavailable", e?.status)
      }
    }
    function w(e) {
      if (!(e instanceof S.fk)) return null
      try {
        let a = C.safeParse(JSON.parse(e.message))
        return a.success ? { body: a.data, status: e.status } : null
      } catch {
        return null
      }
    }
    let z = (0, x.YK)({
        responsibleOfficial: {
          id: "rosalind.customerApplication.responsibleOfficial",
          defaultMessage: "Responsible Official",
        },
        responsibleOfficialName: {
          id: "rosalind.customerApplication.responsibleOfficialName",
          defaultMessage: "Responsible Official\u2019s full name",
        },
        responsibleOfficialRole: {
          id: "rosalind.customerApplication.responsibleOfficialRole",
          defaultMessage: "Responsible Official\u2019s role and responsibilities",
        },
        responsibleOfficialEmail: {
          id: "rosalind.customerApplication.responsibleOfficialEmail",
          defaultMessage: "Responsible Official\u2019s email",
        },
        responsibleOfficialNameRequired: {
          id: "rosalind.customerApplication.responsibleOfficialNameRequired",
          defaultMessage: "Enter the Responsible Official\u2019s full name",
        },
        responsibleOfficialRoleInvalid: {
          id: "rosalind.customerApplication.responsibleOfficialRoleInvalid",
          defaultMessage: "Enter a valid role and responsibilities",
        },
        responsibleOfficialEmailRequired: {
          id: "rosalind.customerApplication.responsibleOfficialEmailRequired",
          defaultMessage: "Enter a valid email for the Responsible Official",
        },
        summaryOrganization: {
          id: "chatgpt.rosalind_access.review.summary.organization.label",
          defaultMessage: "Organization",
        },
        applicationDetailsVisualHeading: {
          id: "chatgpt.rosalind_access.review.summary.visual_heading",
          defaultMessage: "Application details",
        },
        applicationProgress: {
          id: "chatgpt.rosalind_access.progress.navigation.aria_label",
          defaultMessage: "Application progress",
        },
        personaStep: { id: "chatgpt.rosalind_access.progress.persona.title", defaultMessage: "Persona" },
        personaHeading: { id: "chatgpt.rosalind_access.persona.heading", defaultMessage: "Verify your organization." },
        personaVisualHeading: {
          id: "chatgpt.rosalind_access.persona.visual_heading",
          defaultMessage: "Business verification",
        },
        personaVisualDescription: {
          id: "chatgpt.rosalind_access.persona.organization_verification_description",
          defaultMessage: "OpenAI uses Persona to verify your organization.",
        },
        personaRequired: {
          id: "chatgpt.rosalind_access.persona.required",
          defaultMessage: "Complete Persona verification before continuing.",
        },
        personaPending: {
          id: "chatgpt.rosalind_access.persona.required.pending",
          defaultMessage: "Verification is still pending.",
        },
        personaExpired: {
          id: "chatgpt.rosalind_access.persona.required.expired",
          defaultMessage: "Reopen Persona before continuing.",
        },
        organizationStep: { id: "chatgpt.rosalind_access.progress.organization.title", defaultMessage: "Organization" },
        researchStep: { id: "chatgpt.rosalind_access.progress.research.title", defaultMessage: "Research" },
        locationsStep: {
          id: "chatgpt.rosalind_access.progress.locations.title",
          defaultMessage: "Locations and safeguards",
        },
        reviewStep: { id: "chatgpt.rosalind_access.progress.review.title", defaultMessage: "Review" },
        organizationHeading: {
          id: "chatgpt.rosalind_access.organization.heading",
          defaultMessage: "Advance research with GPT-Rosalind.",
        },
        organizationDescription: {
          id: "chatgpt.rosalind_access.organization.description",
          defaultMessage: "Apply for GPT-Rosalind access for biology and life sciences research.",
        },
        researchHeading: {
          id: "chatgpt.rosalind_access.research.heading",
          defaultMessage: "Tell us about your research.",
        },
        researchPurposeVisualPlaceholder: {
          id: "chatgpt.rosalind_access.research.purpose.visual_placeholder",
          defaultMessage: "Describe your planned research",
        },
        researchScopeVisualDescription: {
          id: "chatgpt.rosalind_access.research.scope.visual_description",
          defaultMessage: "Select all that apply to your proposed work.",
        },
        researchDescription: {
          id: "chatgpt.rosalind_access.research.description",
          defaultMessage: "Tell us what you\u2019re working on and where you would like to use GPT-Rosalind.",
        },
        locationsHeading: {
          id: "chatgpt.rosalind_access.locations.heading",
          defaultMessage: "Confirm your access locations.",
        },
        locationsDescription: {
          id: "chatgpt.rosalind_access.locations.description",
          defaultMessage: "Tell us where approved users will primarily access the program.",
        },
        reviewHeading: { id: "chatgpt.rosalind_access.review.heading", defaultMessage: "Review your application." },
        reviewDescription: {
          id: "chatgpt.rosalind_access.review.application_attestations.description",
          defaultMessage: "Check your research details and confirm your authority to apply.",
        },
        organizationVerificationDescription: {
          id: "chatgpt.rosalind_access.organization.selection.verification_description",
          defaultMessage: "Organizations are verified using your signed-in OpenAI account.",
        },
        organizationNotEligible: {
          id: "chatgpt.rosalind_access.organization.selection.submission_unavailable.help_text",
          defaultMessage: "Applications are currently unavailable for this organization.",
        },
        organizationEligibilityUnavailable: {
          id: "chatgpt.rosalind_access.organization.selection.eligibility_unavailable.help_text",
          defaultMessage: "We couldn\u2019t check whether you can apply. Try again.",
        },
        selectOrganization: {
          id: "chatgpt.rosalind_access.organization.selection.placeholder",
          defaultMessage: "Select an OpenAI organization",
        },
        noOrganizations: {
          id: "chatgpt.rosalind_access.organization.selection.empty",
          defaultMessage: "No account organizations available",
        },
        organizationsLoading: {
          id: "chatgpt.rosalind_access.organization.selection.loading.status",
          defaultMessage: "Loading your organizations\u2026",
        },
        retryOrganizationLookup: {
          id: "chatgpt.rosalind_access.organization.selection.lookup_unavailable.retry_button",
          defaultMessage: "Retry loading organizations",
        },
        researchScope: { id: "chatgpt.rosalind_access.research.scope.legend", defaultMessage: "Research scope" },
        pathogenEngineering: {
          id: "chatgpt.rosalind_access.research.scope.option.pathogen_engineering.label",
          defaultMessage: "Pathogen engineering",
        },
        pathogenEngineeringDescription: {
          id: "chatgpt.rosalind_access.research.scope.option.pathogen_engineering.description",
          defaultMessage: "Research involving the modification of pathogenic organisms.",
        },
        biologicalToxins: {
          id: "chatgpt.rosalind_access.research.scope.option.biological_toxins.label",
          defaultMessage: "Biological toxins",
        },
        biologicalToxinsDescription: {
          id: "chatgpt.rosalind_access.research.scope.option.biological_toxins.description",
          defaultMessage: "Research involving biological toxins or related materials.",
        },
        highContainmentResearch: {
          id: "chatgpt.rosalind_access.research.scope.option.high_containment_wet_lab.label",
          defaultMessage: "High-containment wet-lab research",
        },
        highContainmentResearchDescription: {
          id: "chatgpt.rosalind_access.research.scope.option.high_containment_wet_lab.description",
          defaultMessage: "Wet-lab research requiring specialized containment or oversight.",
        },
        geneDriveResearch: {
          id: "chatgpt.rosalind_access.research.scope.option.gene_drive.label",
          defaultMessage: "Gene-drive research",
        },
        geneDriveResearchDescription: {
          id: "chatgpt.rosalind_access.research.scope.option.gene_drive.description",
          defaultMessage: "Research involving gene-drive systems.",
        },
        humanAnimalInfectionStudies: {
          id: "chatgpt.rosalind_access.research.scope.option.human_animal_infection.label",
          defaultMessage: "Human or animal infection studies",
        },
        humanAnimalInfectionStudiesDescription: {
          id: "chatgpt.rosalind_access.research.scope.option.human_animal_infection.description",
          defaultMessage: "Studies involving infection in human or animal subjects.",
        },
        noneOfAbove: {
          id: "chatgpt.rosalind_access.research.scope.option.none.label",
          defaultMessage: "None of the above",
        },
        noneOfAboveDescription: {
          id: "chatgpt.rosalind_access.research.scope.option.none.description",
          defaultMessage: "The proposed work does not involve any listed category.",
        },
        safeguardsConfirmation: {
          id: "chatgpt.rosalind_access.safeguards.confirmation.label",
          defaultMessage:
            "I confirm that our organization maintains reasonable safeguards appropriate to the proposed research, including limiting access to authorized personnel, following relevant research oversight or safety processes where applicable, and requiring qualified human review before AI-generated outputs inform experiments, publications, or other consequential decisions.",
        },
        safeguardAuthorized: {
          id: "chatgpt.rosalind_access.safeguards.options.authorized_personnel.label",
          defaultMessage: "Access limited to authorized researchers or staff",
        },
        safeguardOversight: {
          id: "chatgpt.rosalind_access.safeguards.options.institutional_oversight.label",
          defaultMessage:
            "Institutional research oversight when applicable, such as IRB, IBC, IACUC, EHS, biosafety, or ethics review",
        },
        safeguardTraining: {
          id: "chatgpt.rosalind_access.safeguards.options.training_and_sops.label",
          defaultMessage: "Staff training, SOPs, or laboratory safety procedures",
        },
        safeguardData: {
          id: "chatgpt.rosalind_access.safeguards.options.secure_research_data.label",
          defaultMessage: "Secure storage or access controls for sensitive research data",
        },
        safeguardHumanReview: {
          id: "chatgpt.rosalind_access.safeguards.options.human_review.label",
          defaultMessage: "Human review of AI-generated hypotheses, protocols, analyses, or decisions",
        },
        safeguardIncidents: {
          id: "chatgpt.rosalind_access.safeguards.options.incident_reporting.label",
          defaultMessage: "Incident reporting or escalation process",
        },
        safeguardDualUse: {
          id: "chatgpt.rosalind_access.safeguards.options.dual_use_review.label",
          defaultMessage: "Dual-use, misuse, or biosecurity review when relevant",
        },
        safeguardOther: { id: "chatgpt.rosalind_access.safeguards.options.other.label", defaultMessage: "Other" },
        otherSafeguards: {
          id: "chatgpt.rosalind_access.safeguards.other.label",
          defaultMessage: "Describe the other safeguards currently in place",
        },
        primaryCountryVisualHeading: {
          id: "chatgpt.rosalind_access.locations.primary_country.visual_heading",
          defaultMessage: "Primary country or region",
        },
        primaryCountryVisualDescription: {
          id: "chatgpt.rosalind_access.locations.primary_country.visual_description",
          defaultMessage: "Where will GPT-Rosalind primarily be accessed?",
        },
        additionalLocationsVisualHeading: {
          id: "chatgpt.rosalind_access.locations.additional.visual_heading",
          defaultMessage: "Will access occur from additional countries or regions?",
        },
        safeguardsVisualHeading: {
          id: "chatgpt.rosalind_access.safeguards.options.visual_heading",
          defaultMessage: "Existing safeguards",
        },
        safeguardsOptionalLabel: {
          id: "chatgpt.rosalind_access.safeguards.options.optional_label",
          defaultMessage: "Optional",
        },
        safeguardsVisualDescription: {
          id: "chatgpt.rosalind_access.safeguards.options.visual_description",
          defaultMessage: "Select any research safeguards your organization currently maintains.",
        },
        safeguardAuthorizedVisualLabel: {
          id: "chatgpt.rosalind_access.safeguards.options.authorized_personnel.visual_label",
          defaultMessage: "Authorized personnel",
        },
        safeguardOversightVisualLabel: {
          id: "chatgpt.rosalind_access.safeguards.options.institutional_oversight.visual_label",
          defaultMessage: "Institutional oversight",
        },
        safeguardTrainingVisualLabel: {
          id: "chatgpt.rosalind_access.safeguards.options.training.visual_label",
          defaultMessage: "Training and standard procedures",
        },
        safeguardDataVisualLabel: {
          id: "chatgpt.rosalind_access.safeguards.options.research_data.visual_label",
          defaultMessage: "Secure research data",
        },
        safeguardHumanReviewVisualLabel: {
          id: "chatgpt.rosalind_access.safeguards.options.human_review.visual_label",
          defaultMessage: "Human review",
        },
        safeguardIncidentsVisualLabel: {
          id: "chatgpt.rosalind_access.safeguards.options.incidents.visual_label",
          defaultMessage: "Incident reporting",
        },
        safeguardDualUseVisualLabel: {
          id: "chatgpt.rosalind_access.safeguards.options.dual_use.visual_label",
          defaultMessage: "Dual-use review",
        },
        safeguardOtherVisualLabel: {
          id: "chatgpt.rosalind_access.safeguards.options.other.visual_label",
          defaultMessage: "Other safeguards",
        },
        primaryCountry: {
          id: "chatgpt.rosalind_access.locations.primary_country.label",
          defaultMessage: "Primary country of access",
        },
        countryPlaceholder: {
          id: "chatgpt.rosalind_access.locations.primary_country.placeholder",
          defaultMessage: "Select a country or region",
        },
        additionalLocations: {
          id: "chatgpt.rosalind_access.locations.additional.legend",
          defaultMessage: "Will any users access the program from additional locations?",
        },
        additionalNo: { id: "chatgpt.rosalind_access.locations.additional.option.no.label", defaultMessage: "No" },
        additionalYes: { id: "chatgpt.rosalind_access.locations.additional.option.yes.label", defaultMessage: "Yes" },
        additionalUnsure: {
          id: "chatgpt.rosalind_access.locations.additional.option.unsure.label",
          defaultMessage: "Not sure",
        },
        additionalCountries: {
          id: "chatgpt.rosalind_access.locations.additional.countries.label",
          defaultMessage: "Additional countries or territories",
        },
        additionalCountriesPlaceholder: {
          id: "chatgpt.rosalind_access.locations.additional.countries.placeholder",
          defaultMessage: "Select an additional country or region",
        },
        additionalCountriesSearch: {
          id: "chatgpt.rosalind_access.locations.additional.countries.search.label",
          defaultMessage: "Search countries or territories",
        },
        additionalCountriesNoResults: {
          id: "chatgpt.rosalind_access.locations.additional.countries.search.empty",
          defaultMessage: "No matching countries or territories.",
        },
        editApplication: { id: "chatgpt.rosalind_access.review.summary.edit.button", defaultMessage: "Edit" },
        safeguardsVisualLabel: {
          id: "chatgpt.rosalind_access.review.summary.safeguards.visual_label",
          defaultMessage: "Safeguards",
        },
        requestedAccess: {
          id: "chatgpt.rosalind_access.review.summary.requested_access.label",
          defaultMessage: "Requested access",
        },
        summaryScope: {
          id: "chatgpt.rosalind_access.review.summary.research_scope.label",
          defaultMessage: "Research scope",
        },
        summaryPrimaryLocation: {
          id: "chatgpt.rosalind_access.review.summary.primary_location.label",
          defaultMessage: "Primary access location",
        },
        summaryAdditionalLocations: {
          id: "chatgpt.rosalind_access.review.summary.additional_locations.label",
          defaultMessage: "Additional countries or regions",
        },
        none: { id: "chatgpt.rosalind_access.review.summary.none.label", defaultMessage: "None" },
        researchPurposeSummary: {
          id: "chatgpt.rosalind_access.review.summary.research_purpose.label",
          defaultMessage: "Research purpose",
        },
        termsVisualHeading: {
          id: "chatgpt.rosalind_access.review.application_attestations.visual_heading",
          defaultMessage: "Application attestations",
        },
        confirmOrganizationHeading: {
          id: "chatgpt.rosalind_access.review.organization_confirmation.dialog.title",
          defaultMessage: "Confirm your organization",
        },
        confirmOrganizationQuestion: {
          id: "chatgpt.rosalind_access.review.organization_confirmation.dialog.question",
          defaultMessage: "Submit application for {organizationName} ({organizationId})?",
        },
        confirmOrganizationNameLabel: {
          id: "chatgpt.rosalind_access.review.organization_confirmation.dialog.organization_name.label",
          defaultMessage: "Organization name",
        },
        confirmOrganizationIdLabel: {
          id: "chatgpt.rosalind_access.review.organization_confirmation.dialog.organization_id.label",
          defaultMessage: "Organization ID",
        },
        confirmOrganizationBack: {
          id: "chatgpt.rosalind_access.review.organization_confirmation.dialog.back.button",
          defaultMessage: "Go back",
        },
        confirmOrganizationSubmit: {
          id: "chatgpt.rosalind_access.review.organization_confirmation.dialog.submit.button",
          defaultMessage: "Confirm and submit",
        },
        certifyAccuracy: {
          id: "chatgpt.rosalind_access.review.terms.accuracy.label",
          defaultMessage: "I certify that this application is accurate and complete.",
        },
        certifyAuthority: {
          id: "chatgpt.rosalind_access.review.terms.authority.label",
          defaultMessage: "I am authorized to apply on behalf of this organization.",
        },
        confirmInternalApiUseOnly: {
          id: "chatgpt.rosalind_access.review.terms.internal_api_use_only.label",
          defaultMessage:
            "I confirm that our organization will use the GPT-Rosalind API only for internal workflows and will not use it to serve external users.",
        },
        reviewStartsVisual: {
          id: "chatgpt.rosalind_access.review.submission.visual_notice",
          defaultMessage: "Submitting an application starts a review and does not grant access.",
        },
        reviewStarts: {
          id: "chatgpt.rosalind_access.review.submission.after_agreement.notice",
          defaultMessage:
            "Submitting starts a review. GPT-Rosalind access is enabled only after organization verification and suitability and policy checks.",
        },
        back: { id: "chatgpt.rosalind_access.navigation.back.button", defaultMessage: "Back" },
        next: { id: "chatgpt.rosalind_access.navigation.continue.button", defaultMessage: "Continue" },
        submit: { id: "chatgpt.rosalind_access.review.submit.button", defaultMessage: "Submit application" },
        submitting: {
          id: "chatgpt.rosalind_access.review.submitting.button",
          defaultMessage: "Submitting application\u2026",
        },
        organizationRequired: {
          id: "chatgpt.rosalind_access.validation.organization.error",
          defaultMessage: "Please select an OpenAI organization for this application.",
        },
        productRequired: {
          id: "chatgpt.rosalind_access.validation.products.error",
          defaultMessage: "Please select at least one place to use GPT-Rosalind.",
        },
        researchScopeRequired: {
          id: "chatgpt.rosalind_access.validation.research_scope.error",
          defaultMessage: "Please select the research scope that applies to your work.",
        },
        countryRequired: {
          id: "chatgpt.rosalind_access.validation.primary_country.error",
          defaultMessage: "Please select your primary country of access.",
        },
        additionalLocationsRequired: {
          id: "chatgpt.rosalind_access.validation.additional_locations.error",
          defaultMessage: "Please tell us whether access is expected from additional locations.",
        },
        additionalCountriesRequired: {
          id: "chatgpt.rosalind_access.validation.additional_countries.error",
          defaultMessage: "Please select at least one additional access location.",
        },
        safeguardsRequired: {
          id: "chatgpt.rosalind_access.validation.safeguards.error",
          defaultMessage:
            "Please confirm that your organization maintains reasonable safeguards appropriate to the proposed research.",
        },
        otherSafeguardsRequired: {
          id: "chatgpt.rosalind_access.validation.other_safeguards.error",
          defaultMessage: "Please describe the other safeguards currently in place.",
        },
        internalApiUseOnlyRequired: {
          id: "chatgpt.rosalind_access.validation.internal_api_use_only.required",
          defaultMessage: "Confirm internal-only use of the GPT-Rosalind API to submit",
        },
        accuracyRequired: {
          id: "chatgpt.rosalind_access.validation.accuracy.error",
          defaultMessage: "Please certify that your application is accurate and complete.",
        },
        authorityRequired: {
          id: "chatgpt.rosalind_access.validation.authority.error",
          defaultMessage: "Please certify that you are authorized to apply on behalf of your organization.",
        },
        submissionUnavailable: {
          id: "chatgpt.rosalind_access.validation.submission_unavailable.error",
          defaultMessage: "Applications are not open yet. Your answers cannot be submitted or saved.",
        },
        submissionFailed: {
          id: "chatgpt.rosalind_access.validation.submission_failed.error",
          defaultMessage: "Your application could not be submitted. Please try again.",
        },
        organizationUnavailable: {
          id: "chatgpt.rosalind_access.validation.organization_unavailable.error",
          defaultMessage:
            "The selected organization is unavailable or your membership could not be verified. Please choose an organization you can access.",
        },
        applicationUnprocessable: {
          id: "chatgpt.rosalind_access.validation.application_unprocessable.error",
          defaultMessage: "We couldn't process your application details. Please review your answers and try again.",
        },
        applicationHistoryLimit: {
          id: "chatgpt.rosalind_access.validation.application_history_limit.error",
          defaultMessage: "This organization has reached its application limit and cannot submit another application.",
        },
        submissionUnconfirmed: {
          id: "chatgpt.rosalind_access.validation.submission_unconfirmed.error",
          defaultMessage: "Your application could not be confirmed. Please try again.",
        },
        secureSubmissionFailed: {
          id: "chatgpt.rosalind_access.validation.secure_submission.error",
          defaultMessage: "A secure submission could not be started. Refresh the page and try again.",
        },
        chatgptCodex: {
          id: "chatgpt.rosalind_access.research.products.option.chatgpt_codex.label",
          defaultMessage: "ChatGPT / Codex",
        },
        chatgptCodexDescription: {
          id: "chatgpt.rosalind_access.research.products.option.chatgpt_codex.description",
          defaultMessage: "Use GPT-Rosalind directly in your organization\u2019s workspaces.",
        },
        internalApi: {
          id: "chatgpt.rosalind_access.research.products.option.internal_api.label",
          defaultMessage: "API \xb7 internal applications",
        },
        internalApiDescription: {
          id: "chatgpt.rosalind_access.research.products.option.internal_api.description",
          defaultMessage: "Build research workflows for members of your organization. External API use is not allowed.",
        },
        yourOrganization: {
          id: "chatgpt.rosalind_access.organization.selection.section_label",
          defaultMessage: "Your organization",
        },
        organizationVisualDescription: {
          id: "chatgpt.rosalind_access.organization.visual_description",
          defaultMessage: "Select the organization that will be associated with this application.",
        },
        organizationAccountVerified: {
          id: "chatgpt.rosalind_access.organization.selection.account_verified",
          defaultMessage: "Verified",
        },
        organizationDisplayName: {
          id: "chatgpt.rosalind_access.organization.selection.option.label",
          defaultMessage: "{name} \xb7 {id}",
        },
        organizationWorkspaceDescription: {
          id: "chatgpt.rosalind_access.organization.selection.workspace_description",
          defaultMessage: "OpenAI organization",
        },
        applicationConflict: {
          id: "chatgpt.rosalind_access.validation.application_conflict.organization_error",
          defaultMessage: "Application for {organizationId} already submitted",
        },
        applicationStatusLabel: {
          id: "chatgpt.rosalind_access.application.status.heading",
          defaultMessage: "Application status",
        },
        pricingChatgptRateCardLink: {
          id: "chatgpt.rosalind_access.pricing.chatgpt_rate_card.link.label",
          defaultMessage: "ChatGPT rate card",
        },
        pricingApiLink: { id: "chatgpt.rosalind_access.pricing.api.link.label", defaultMessage: "API pricing page" },
        researchVisualHeading: {
          id: "chatgpt.rosalind_access.research.visual_heading",
          defaultMessage: "Research details",
        },
        researchVisualDescription: {
          id: "chatgpt.rosalind_access.research.visual_description",
          defaultMessage: "Tell us how your organization intends to use GPT-Rosalind.",
        },
        locationsVisualDescription: {
          id: "chatgpt.rosalind_access.locations.visual_description",
          defaultMessage: "Describe where GPT-Rosalind will be accessed and how the research is protected.",
        },
        reviewVisualHeading: {
          id: "chatgpt.rosalind_access.review.visual_heading",
          defaultMessage: "Review your application",
        },
        reviewVisualDescription: {
          id: "chatgpt.rosalind_access.review.application_attestations.screen_description",
          defaultMessage: "Confirm the information below and your authority to apply.",
        },
        requestedAccessVisualHeading: {
          id: "chatgpt.rosalind_access.research.requested_access.visual_heading",
          defaultMessage: "Requested access",
        },
        requestedAccessVisualDescription: {
          id: "chatgpt.rosalind_access.research.requested_access.visual_description",
          defaultMessage: "Select every product surface your organization plans to use.",
        },
        chatgptCodexVisualLabel: {
          id: "chatgpt.rosalind_access.research.products.option.chatgpt_codex.visual_label",
          defaultMessage: "ChatGPT and Codex",
        },
        internalApiVisualLabel: {
          id: "chatgpt.rosalind_access.research.products.option.internal_api.visual_label",
          defaultMessage: "Internal API",
        },
        submittedStatus: {
          id: "chatgpt.rosalind_access.application.status.submitted.label",
          defaultMessage: "Submitted",
        },
        inProgressStatus: {
          id: "chatgpt.rosalind_access.application.status.in_progress.label",
          defaultMessage: "In progress",
        },
        actionRequiredStatus: {
          id: "chatgpt.rosalind_access.application.status.action_required.label",
          defaultMessage: "Action required",
        },
        approvedStatus: { id: "chatgpt.rosalind_access.application.status.approved.label", defaultMessage: "Approved" },
        accessGrantedStatus: {
          id: "chatgpt.rosalind_access.application.status.access_granted.label",
          defaultMessage: "Access granted",
        },
        accessRevokedStatus: {
          id: "chatgpt.rosalind_access.application.status.access_revoked.label",
          defaultMessage: "Access revoked",
        },
        deniedStatus: { id: "chatgpt.rosalind_access.application.status.denied.label", defaultMessage: "Denied" },
        trackOrganizationApplication: {
          id: "chatgpt.rosalind_access.organization.tracking.link.accessible_label",
          defaultMessage: "Track application status for {organizationName} ({organizationId})",
        },
        trackApplicationStatus: {
          id: "chatgpt.rosalind_access.organization.tracking.link.label",
          defaultMessage: "Track application status",
        },
        organizationLabel: {
          id: "chatgpt.rosalind_access.organization.selection.account_organizations.label",
          defaultMessage: "OpenAI organizations associated with your account.",
        },
      }),
      k = (0, x.YK)({
        organizationIdentity: {
          id: "chatgpt.rosalind_access.receipt.organization_identity",
          defaultMessage: "{name} \xb7 {id}",
        },
        canceled: { id: "chatgpt.rosalind_access.customer.receipt.canceled", defaultMessage: "Canceled" },
        title: {
          id: "chatgpt.rosalind_access.customer.receipt.title",
          defaultMessage: "Your application has been submitted",
        },
        description: {
          id: "chatgpt.rosalind_access.customer.receipt.description",
          defaultMessage: "We\u2019ll review your organization, proposed research, access locations, and safeguards",
        },
        details: { id: "chatgpt.rosalind_access.customer.receipt.details", defaultMessage: "Application details" },
        reference: {
          id: "chatgpt.rosalind_access.customer.receipt.reference",
          defaultMessage: "Application reference",
        },
        primaryContact: {
          id: "chatgpt.rosalind_access.customer.receipt.contact_name",
          defaultMessage: "Primary contact",
        },
        contactEmail: { id: "chatgpt.rosalind_access.customer.receipt.contact_email", defaultMessage: "Contact email" },
        verification: {
          id: "chatgpt.rosalind_access.customer.receipt.verification",
          defaultMessage: "Business verification",
        },
        verificationDuringReview: {
          id: "chatgpt.rosalind_access.customer.receipt.verification_review",
          defaultMessage: "Existing verification checked during review",
        },
        unconfirmedLocations: {
          id: "chatgpt.rosalind_access.customer.receipt.locations_unsure",
          defaultMessage: "Not yet confirmed",
        },
        safeguards: {
          id: "chatgpt.rosalind_access.customer.receipt.safeguards",
          defaultMessage: "Research safeguards",
        },
        safeguardsConfirmed: {
          id: "chatgpt.rosalind_access.customer.receipt.safeguards_confirmed",
          defaultMessage: "Reasonable safeguards confirmed",
        },
        safeguardsInPlace: {
          id: "chatgpt.rosalind_access.customer.receipt.safeguards_in_place",
          defaultMessage: "Safeguards in place",
        },
        otherSafeguards: {
          id: "chatgpt.rosalind_access.customer.receipt.other_safeguards",
          defaultMessage: "Other safeguards",
        },
        noAccess: {
          id: "chatgpt.rosalind_access.customer.receipt.no_access",
          defaultMessage: "Submission does not grant access",
        },
        refresh: { id: "chatgpt.rosalind_access.customer.status.refresh", defaultMessage: "Refresh status" },
      }),
      D = {
        submitted: z.submittedStatus,
        in_progress: z.inProgressStatus,
        action_required: z.actionRequiredStatus,
        approved: z.approvedStatus,
        access_granted: z.accessGrantedStatus,
        revoked: z.accessRevokedStatus,
        denied: z.deniedStatus,
        canceled: k.canceled,
      }
    var q = i("AGJY")
    function U(e, a, i, s = "CHATGPT_WEB_ROSALIND_APPLICATION_SURFACE_STATUS") {
      try {
        e.logProductEvent(q.op, {
          surface: s,
          action: a,
          result: i,
          failureReason:
            "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_FAILED" === i
              ? "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_REQUEST_FAILED"
              : void 0,
        })
      } catch {}
    }
    let H = b.k5n(["research_non_zdr", "research_zdr"]),
      B = b.Ikc({
        products: b.YOg(b.k5n(I.ii)),
        researchPurpose: b.YjP(),
        researchScopes: b.YOg(b.k5n(I.tF)),
        primaryCountry: b.YjP(),
        additionalLocations: b.k5n(["no", "yes", "unsure"]),
        additionalCountries: b.YOg(b.YjP()).optional(),
        selectedSafeguards: b.YOg(b.k5n(I.pK)),
        otherSafeguardDetails: b.YjP().optional(),
        requestedResearchMode: H,
      }),
      G = b.k5n([...I.si, "canceled"]),
      V = b.Ikc({
        organizationId: b.YjP(),
        applicantName: b.YjP().optional(),
        applicantEmail: b.YjP().optional(),
        bioagentsApplicationReference: b.YjP().regex(/^[0-9a-f]{64}$/),
        state: G,
        canCancel: b.zMY(),
        canResumeVerification: b.zMY(),
        canApproveProvisioning: b.zMY().optional(),
        requiresInternalApiAcknowledgement: b.zMY().optional(),
        requestedResearchMode: H.optional(),
        grantedResearchMode: H.optional(),
        activeTier: b.k5n(["discovery", "research"]).optional(),
        canRequestResearchUpgrade: b.zMY().optional(),
        researchUpgrade: b
          .Ikc({
            requestId: b.YjP().regex(/^[0-9a-f]{64}$/),
            status: b.k5n(["pending", "approved", "declined"]),
            requestedAt: v.w$({ offset: !0 }),
          })
          .optional(),
        existingZdrEnabled: b.zMY().optional(),
        zdrUpgradeRequested: b.zMY().optional(),
        zdrUpgradeApproved: b.zMY().optional(),
        provisioningPricing: b
          .Ikc({
            pricingVersion: b.YjP(),
            requestedResearchMode: H,
            pricingStatus: b.k5n(["provisional", "final"]),
            rateDisplay: b.YjP(),
            separateCharge: b.zMY(),
          })
          .optional(),
        customerAcceptedAt: v.w$({ offset: !0 }).optional(),
        provisioningApproval: b
          .Ikc({
            approvedAt: v.w$({ offset: !0 }),
            pricingVersion: b.YjP(),
            requestedResearchMode: H,
            pricingStatus: b.k5n(["provisional", "final"]),
            acceptedResearchTerms: b.euz(!0).optional(),
            acceptedInternalApiOnly: b.euz(!0).optional(),
            researchTermsVersion: b.YjP().optional(),
          })
          .optional(),
        researchTermsVersion: b.YjP().optional(),
        researchTermsUrl: b
          .OZ5()
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
        approvalSummary: B.optional(),
        applicationSummary: B.optional(),
        submittedAt: v.w$({ offset: !0 }).optional(),
        statusUpdatedAt: v.w$({ offset: !0 }).optional(),
        decisionAt: v.w$({ offset: !0 }).optional(),
        accessGrantedAt: v.w$({ offset: !0 }).optional(),
        requiredAction: b.YjP().optional(),
        actionOwner: b.k5n(["applicant", "reviewer"]).optional(),
        kybStatus: b
          .k5n(["not_started", "in_progress", "pending", "action_required", "passed", "failed", "expired", "error"])
          .optional(),
        processingPending: b.zMY().optional(),
        personaInquiryId: b
          .YjP()
          .regex(/^inq_[A-Za-z0-9]{16,64}$/)
          .optional(),
        personaEnvironmentId: b
          .YjP()
          .regex(/^env_[A-Za-z0-9]{16,64}$/)
          .optional(),
        personaSessionToken: b
          .YjP()
          .regex(/^[A-Za-z0-9._~+/=-]{16,2048}$/)
          .optional(),
      })
    function W(e, a) {
      let i = V.parse(e)
      if (i.organizationId !== a.organizationId || i.bioagentsApplicationReference !== a.bioagentsApplicationReference)
        throw Error("The Rosalind response belongs to another application")
      return i
    }
    async function Y(e, a, i) {
      return W(
        await R.Request.safeRequest("get", "/rosalind/access/applications/{application_reference}", {
          parameters: {
            path: { application_reference: a.bioagentsApplicationReference },
            query: { organizationId: a.organizationId, includeDecisionMetadata: !0, includeApprovalSummary: !0 },
          },
          additionalHeaders: { [P.zBc]: e.accountId },
          expectedIdentity: e,
          expectedErrorStatuses: [400, 401, 403, 404, 422, 502, 503],
          retry: !1,
          signal: i,
        }),
        a,
      )
    }
    var F = i("irkb"),
      $ = i("xSOA"),
      K = i("bVeK"),
      Z = i("Wf1j"),
      X = i("TjgH"),
      J = i("sgGK"),
      Q = i("Z0qE"),
      ee = i("on57"),
      ea = i("UIGa")
    i("MhWb")
    let ei = "u" > typeof navigator,
      es = ei ? (navigator.userAgent ?? "") : ""
    ;(ei && /(jsdom|happy-dom)/i.test(es)) || Reflect.get(globalThis, "happyDOM")
    let et = (e) => {
      var a
      let i = (0, p.useRef)(null),
        t = (0, p.useId)(),
        n = `search-ui-input-${t}`,
        {
          id: r,
          name: o,
          variant: l = "outline",
          size: c = "md",
          gutterSize: d,
          className: u,
          autoComplete: g,
          disabled: f = !1,
          readOnly: m = !1,
          invalid: h = !1,
          allowAutofillExtensions: _ = !!o || (!!g && "off" !== g),
          onFocus: A,
          onBlur: x,
          onAnimationStart: b,
          onAutofill: v,
          autoSelect: y,
          rows: I = 3,
          maxRows: P,
          autoResize: R,
          maxHeight: S,
          resize: T = "none",
          ref: j,
          onChange: N,
          __isWidget: C,
          ...O
        } = e,
        [E, L] = (0, p.useState)(!1),
        M = R ? Math.max(P ?? 10, I) : I
      ;(0, p.useEffect)(() => {
        y && i.current?.select()
      }, [y])
      let w = (0, p.useCallback)(() => {
        if (!R || !i.current || void 0 === M) return
        i.current.style.height = "0px"
        let e = i.current.scrollHeight
        i.current.style.height = e + "px"
      }, [R, M])
      return (
        (0, p.useEffect)(() => {
          w()
        }, [e.value, I, w]),
        (0, s.jsx)("div", {
          className: (0, ee.A)("Container-g0Lqwa", u),
          "data-w-component": C ? "textarea" : "",
          "data-variant": l,
          "data-size": c,
          "data-gutter-size": d,
          "data-focused": E,
          "data-disabled": f ? "" : void 0,
          "data-readonly": m ? "" : void 0,
          "data-invalid": h ? "" : void 0,
          style: Object.keys(
            (a = {
              "textarea-min-rows": `${I}`,
              "textarea-max-rows": `${M}`,
              "textarea-max-height": S,
              ...("none" !== T ? { "textarea-resize": T, "textarea-resizer-visibility": "visible" } : null),
            }),
          ).reduce((e, i) => {
            let s = a[i]
            if (s || 0 === s) {
              let a = i.startsWith("--") ? "" : "--",
                t = "number" == typeof s ? `${s}px` : s
              e[`${a}${i}`] = t
            }
            return e
          }, {}),
          children: (0, s.jsx)("textarea", {
            ...O,
            onChange: (e) => {
              ;(N?.(e), w())
            },
            ref: (0, ea.P)([i, j]),
            id: r || (_ ? void 0 : n),
            className: "Textarea-tAUmai",
            name: o,
            autoComplete: g,
            readOnly: m,
            disabled: f,
            rows: I,
            onFocus: (e) => {
              ;(L(!0), A?.(e))
            },
            onBlur: (e) => {
              ;(L(!1), x?.(e))
            },
            onAnimationStart: (e) => {
              ;(b?.(e), "native-autofill-in" === e.animationName && v?.())
            },
            "data-lpignore": !_ || void 0,
            "data-1p-ignore": !_ || void 0,
          }),
        })
      )
    }
    var en = i("Sezd"),
      er = i("CtJU"),
      eo = i("qvry"),
      el = i("wgaZ"),
      ec = i("vZhU"),
      ed = i("SARm")
    let eu = (e) => `application-error-${e}`,
      ep = (e, a) => ({ "aria-invalid": !!a || void 0, "aria-describedby": a ? eu(e) : void 0 }),
      eg = {
        organizationId: z.organizationRequired,
        responsibleOfficialName: z.responsibleOfficialNameRequired,
        responsibleOfficialRole: z.responsibleOfficialRoleInvalid,
        responsibleOfficialEmail: z.responsibleOfficialEmailRequired,
        researchScopes: z.researchScopeRequired,
        products: z.productRequired,
        primaryCountry: z.countryRequired,
        additionalLocations: z.additionalLocationsRequired,
        additionalCountries: z.additionalCountriesRequired,
        otherSafeguardDetails: z.otherSafeguardsRequired,
        confirmResearchSafeguards: z.safeguardsRequired,
        certifyAccuracy: z.accuracyRequired,
        certifyAuthority: z.authorityRequired,
        confirmInternalApiUseOnly: z.internalApiUseOnlyRequired,
      }
    function ef(e) {
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
    let em = ["US", "AU", "CA", "FR", "DE", "IN", "JP", "MX", "NL", "SG", "CH", "GB"],
      eh = [
        {
          title: z.organizationStep,
          heading: z.organizationHeading,
          description: z.organizationDescription,
          visualHeading: z.yourOrganization,
          visualDescription: z.organizationVisualDescription,
        },
        {
          title: z.researchStep,
          heading: z.researchHeading,
          description: z.researchDescription,
          visualHeading: z.researchVisualHeading,
          visualDescription: z.researchVisualDescription,
        },
        {
          title: z.locationsStep,
          heading: z.locationsHeading,
          description: z.locationsDescription,
          visualHeading: z.locationsStep,
          visualDescription: z.locationsVisualDescription,
        },
        {
          title: z.reviewStep,
          heading: z.reviewHeading,
          description: z.reviewDescription,
          visualHeading: z.reviewVisualHeading,
          visualDescription: z.reviewVisualDescription,
        },
      ],
      e_ = [
        {
          id: "chatgpt-codex",
          Icon: K.VhP,
          visualTitle: z.chatgptCodexVisualLabel,
          title: z.chatgptCodex,
          description: z.chatgptCodexDescription,
        },
        {
          id: "internal-api",
          Icon: K.u1Q,
          visualTitle: z.internalApiVisualLabel,
          title: z.internalApi,
          description: z.internalApiDescription,
        },
      ].filter((e) => I.ii.includes(e.id)),
      eA = [
        { id: "pathogen-engineering", title: z.pathogenEngineering, description: z.pathogenEngineeringDescription },
        { id: "biological-toxins", title: z.biologicalToxins, description: z.biologicalToxinsDescription },
        { id: "high-containment", title: z.highContainmentResearch, description: z.highContainmentResearchDescription },
        { id: "gene-drive", title: z.geneDriveResearch, description: z.geneDriveResearchDescription },
        {
          id: "human-animal-infection",
          title: z.humanAnimalInfectionStudies,
          description: z.humanAnimalInfectionStudiesDescription,
        },
        { id: "none", title: z.noneOfAbove, description: z.noneOfAboveDescription },
      ].filter((e) => I.tF.includes(e.id)),
      ex = [
        { id: "authorized-personnel", title: z.safeguardAuthorized, visualTitle: z.safeguardAuthorizedVisualLabel },
        { id: "institutional-oversight", title: z.safeguardOversight, visualTitle: z.safeguardOversightVisualLabel },
        { id: "training-and-sops", title: z.safeguardTraining, visualTitle: z.safeguardTrainingVisualLabel },
        { id: "secure-research-data", title: z.safeguardData, visualTitle: z.safeguardDataVisualLabel },
        { id: "human-review", title: z.safeguardHumanReview, visualTitle: z.safeguardHumanReviewVisualLabel },
        { id: "incident-reporting", title: z.safeguardIncidents, visualTitle: z.safeguardIncidentsVisualLabel },
        { id: "dual-use-review", title: z.safeguardDualUse, visualTitle: z.safeguardDualUseVisualLabel },
        { id: "other", title: z.safeguardOther, visualTitle: z.safeguardOtherVisualLabel },
      ].filter((e) => I.pK.includes(e.id))
    function eb(e) {
      let a,
        i,
        n,
        r,
        o,
        l,
        c = (0, t.c)(23),
        { id: d, checked: u, disabled: p, onChange: g, title: f, description: m, invalid: h, describedBy: _ } = e,
        A = void 0 !== p && p,
        x = h || void 0
      return (
        c[0] !== _ || c[1] !== m || c[2] !== d
          ? ((a = m ? `${d}-description ${_ ?? ""}`.trim() : _), (c[0] = _), (c[1] = m), (c[2] = d), (c[3] = a))
          : (a = c[3]),
        c[4] !== u || c[5] !== A || c[6] !== d || c[7] !== g || c[8] !== x || c[9] !== a
          ? ((i = (0, s.jsx)(en.S, {
              id: d,
              name: d,
              className: "mt-0.5",
              checked: u,
              disabled: A,
              onCheckedChange: g,
              "aria-invalid": x,
              "aria-describedby": a,
              size: "sm",
              variant: "choice",
            })),
            (c[4] = u),
            (c[5] = A),
            (c[6] = d),
            (c[7] = g),
            (c[8] = x),
            (c[9] = a),
            (c[10] = i))
          : (i = c[10]),
        c[11] !== d || c[12] !== f
          ? ((n = (0, s.jsx)("label", {
              className: "cursor-interaction text-sm leading-4.5 select-none",
              htmlFor: d,
              children: f,
            })),
            (c[11] = d),
            (c[12] = f),
            (c[13] = n))
          : (n = c[13]),
        c[14] !== m || c[15] !== d
          ? ((r = m && (0, s.jsx)(el.Rr, { id: `${d}-description`, size: "body", children: m })),
            (c[14] = m),
            (c[15] = d),
            (c[16] = r))
          : (r = c[16]),
        c[17] !== n || c[18] !== r
          ? ((o = (0, s.jsxs)("div", { className: "flex min-w-0 flex-col gap-0.5", children: [n, r] })),
            (c[17] = n),
            (c[18] = r),
            (c[19] = o))
          : (o = c[19]),
        c[20] !== i || c[21] !== o
          ? ((l = (0, s.jsxs)("div", { className: "relative flex items-start gap-2.5", children: [i, o] })),
            (c[20] = i),
            (c[21] = o),
            (c[22] = l))
          : (l = c[22]),
        l
      )
    }
    function ev(e) {
      let a,
        i = (0, t.c)(3),
        { field: n, error: r } = e
      return (
        i[0] !== r || i[1] !== n
          ? ((a = r
              ? (0, s.jsx)("p", {
                  className: "text-sm text-danger",
                  "data-field-error": !0,
                  id: eu(n),
                  role: "alert",
                  tabIndex: -1,
                  children: r,
                })
              : null),
            (i[0] = r),
            (i[1] = n),
            (i[2] = a))
          : (a = i[2]),
        a
      )
    }
    function ey(e) {
      let a,
        i,
        n = (0, t.c)(5),
        { label: r, children: o } = e
      return (
        n[0] !== r ? ((a = (0, s.jsx)(g.A, { ...r })), (n[0] = r), (n[1] = a)) : (a = n[1]),
        n[2] !== o || n[3] !== a
          ? ((i = (0, s.jsx)(er.l, { align: "start", spacing: "relaxed", label: a, children: o })),
            (n[2] = o),
            (n[3] = a),
            (n[4] = i))
          : (i = n[4]),
        i
      )
    }
    function eI(e) {
      let a,
        i,
        n,
        r,
        o,
        l,
        c,
        d,
        u,
        f,
        m,
        h = (0, t.c)(30),
        {
          capabilities: _,
          researchPurpose: A,
          researchScopes: x,
          setResearchPurpose: b,
          toggleResearchScope: v,
          fieldErrors: y,
          disabled: I,
        } = e
      h[0] !== y ? ((a = void 0 === y ? {} : y), (h[0] = y), (h[1] = a)) : (a = h[1])
      let P = a,
        R = (0, Z.A)(),
        S = (0, p.useId)()
      h[2] !== R ? ((i = R.formatMessage(z.researchPurposeVisualPlaceholder)), (h[2] = R), (h[3] = i)) : (i = h[3])
      let T = _?.discoveryApplications
      return (
        h[4] !== I || h[5] !== P.researchPurpose || h[6] !== A || h[7] !== b || h[8] !== i || h[9] !== T
          ? ((n = (0, s.jsx)(ec.i, {
              name: "research-purpose",
              value: A,
              onChange: b,
              disabled: I,
              placeholder: i,
              error: P.researchPurpose,
              showTierReview: T,
            })),
            (h[4] = I),
            (h[5] = P.researchPurpose),
            (h[6] = A),
            (h[7] = b),
            (h[8] = i),
            (h[9] = T),
            (h[10] = n))
          : (n = h[10]),
        h[11] !== P.researchScopes
          ? ((r = ep("researchScopes", P.researchScopes)), (h[11] = P.researchScopes), (h[12] = r))
          : (r = h[12]),
        h[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, s.jsx)("legend", {
              className: "text-sm leading-5 font-medium select-none",
              children: (0, s.jsx)(g.A, { ...z.researchScope }),
            })),
            (h[13] = o))
          : (o = h[13]),
        h[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, s.jsx)("p", {
              className: "text-sm leading-5 text-secondary select-text",
              children: (0, s.jsx)(g.A, { ...z.researchScopeVisualDescription }),
            })),
            (h[14] = l))
          : (l = h[14]),
        h[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, s.jsx)("p", {
              className: "text-sm leading-5 text-secondary select-text",
              children: (0, s.jsx)(g.A, {
                id: "chatgpt.rosalind_access.research.scope.eligibility.help_text",
                defaultMessage:
                  "Making a selection does not disqualify you from access. Your responses help us understand your research and review your application.",
              }),
            })),
            (h[15] = c))
          : (c = h[15]),
        h[16] !== S || h[17] !== x || h[18] !== v
          ? ((d = eA.map((e) =>
              (0, s.jsx)(
                eb,
                {
                  id: `${S}-research-scope-${e.id}`,
                  checked: x.includes(e.id),
                  onChange: (a) => v(e.id, a),
                  title: (0, s.jsx)(g.A, { ...e.title }),
                  description: e.description && (0, s.jsx)(g.A, { ...e.description }),
                },
                e.id,
              ),
            )),
            (h[16] = S),
            (h[17] = x),
            (h[18] = v),
            (h[19] = d))
          : (d = h[19]),
        h[20] !== P.researchScopes
          ? ((u = (0, s.jsx)(ev, { field: "researchScopes", error: P.researchScopes })),
            (h[20] = P.researchScopes),
            (h[21] = u))
          : (u = h[21]),
        h[22] !== I || h[23] !== d || h[24] !== u || h[25] !== r
          ? ((f = (0, s.jsxs)("fieldset", {
              className: "flex min-w-0 flex-col gap-3",
              disabled: I,
              "data-validation-field": "researchScopes",
              ...r,
              children: [o, l, c, d, u],
            })),
            (h[22] = I),
            (h[23] = d),
            (h[24] = u),
            (h[25] = r),
            (h[26] = f))
          : (f = h[26]),
        h[27] !== f || h[28] !== n
          ? ((m = (0, s.jsxs)(s.Fragment, { children: [n, f] })), (h[27] = f), (h[28] = n), (h[29] = m))
          : (m = h[29]),
        m
      )
    }
    function eP(e) {
      let a,
        i,
        n,
        r,
        o,
        l,
        c,
        d,
        u,
        f = (0, t.c)(28),
        { answers: m, fieldErrors: h, disabled: _, onChange: A } = e,
        x = (0, p.useId)()
      ;(f[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = (0, s.jsx)(el.I3, {
            as: "legend",
            emphasis: !0,
            description: (0, s.jsx)(g.A, {
              id: "rosalind.customerApplication.responsibleOfficialDescription",
              defaultMessage:
                "Nominate your institution's biosafety, biosecurity, or compliance official. Include their full name, title, office/program, and institutional email.",
            }),
            children: (0, s.jsx)(g.A, {
              id: "rosalind.members.requiredBiosafetyHeading",
              defaultMessage: "Trained biosafety contact",
            }),
          })),
          (f[0] = a))
        : (a = f[0]),
        f[1] !== m || f[2] !== _ || f[3] !== h || f[4] !== x || f[5] !== A
          ? ((i = (0, s.jsx)("div", {
              className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
              children: ["responsibleOfficialName", "responsibleOfficialEmail"].map((e) =>
                (0, s.jsx)(
                  "div",
                  {
                    "data-validation-field": e,
                    children: (0, s.jsxs)(eo.t, {
                      htmlFor: `${x}-${e}`,
                      title:
                        "responsibleOfficialName" === e
                          ? (0, s.jsx)(g.A, {
                              id: "rosalind.customerApplication.responsibleOfficialFullName",
                              defaultMessage: "Full name",
                            })
                          : (0, s.jsx)(g.A, {
                              id: "rosalind.customerApplication.responsibleOfficialEmailAddress",
                              defaultMessage: "Email address",
                            }),
                      children: [
                        (0, s.jsx)(Q.p, {
                          id: `${x}-${e}`,
                          name: e,
                          type: "responsibleOfficialEmail" === e ? "email" : "text",
                          autoComplete: "responsibleOfficialEmail" === e ? "email" : "name",
                          gutterSize: "md",
                          invalid: !!h[e],
                          size: "2xl",
                          variant: "outline",
                          value: m[e],
                          onChange: (a) => A(e, a.target.value),
                          disabled: _,
                          required: !0,
                          maxLength: I.XO[e].max,
                          ...ep(e, h[e]),
                        }),
                        (0, s.jsx)(ev, { field: e, error: h[e] }),
                      ],
                    }),
                  },
                  e,
                ),
              ),
            })),
            (f[1] = m),
            (f[2] = _),
            (f[3] = h),
            (f[4] = x),
            (f[5] = A),
            (f[6] = i))
          : (i = f[6]))
      let b = `${x}-responsibleOfficialRole`
      f[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = (0, s.jsx)(g.A, {
            id: "rosalind.customerApplication.responsibleOfficialRoleOptional",
            defaultMessage: "Role and responsibilities <optional>Optional</optional>",
            values: { optional: eR },
          })),
          (f[7] = n))
        : (n = f[7])
      let v = `${x}-responsibleOfficialRole`,
        y = !!h.responsibleOfficialRole,
        P = m.responsibleOfficialRole
      return (
        f[8] !== A ? ((r = (e) => A("responsibleOfficialRole", e.target.value)), (f[8] = A), (f[9] = r)) : (r = f[9]),
        f[10] !== h.responsibleOfficialRole
          ? ((o = ep("responsibleOfficialRole", h.responsibleOfficialRole)),
            (f[10] = h.responsibleOfficialRole),
            (f[11] = o))
          : (o = f[11]),
        f[12] !== m.responsibleOfficialRole || f[13] !== _ || f[14] !== v || f[15] !== y || f[16] !== r || f[17] !== o
          ? ((l = (0, s.jsx)(et, {
              id: v,
              invalid: y,
              maxHeight: "none",
              name: "responsibleOfficialRole",
              resize: "vertical",
              size: "2xl",
              variant: "outline",
              value: P,
              onChange: r,
              disabled: _,
              rows: 4,
              maxLength: I.XO.responsibleOfficialRole.max,
              ...o,
            })),
            (f[12] = m.responsibleOfficialRole),
            (f[13] = _),
            (f[14] = v),
            (f[15] = y),
            (f[16] = r),
            (f[17] = o),
            (f[18] = l))
          : (l = f[18]),
        f[19] !== h.responsibleOfficialRole
          ? ((c = (0, s.jsx)(ev, { field: "responsibleOfficialRole", error: h.responsibleOfficialRole })),
            (f[19] = h.responsibleOfficialRole),
            (f[20] = c))
          : (c = f[20]),
        f[21] !== l || f[22] !== c || f[23] !== b
          ? ((d = (0, s.jsx)("div", {
              "data-validation-field": "responsibleOfficialRole",
              children: (0, s.jsxs)(eo.t, { htmlFor: b, title: n, children: [l, c] }),
            })),
            (f[21] = l),
            (f[22] = c),
            (f[23] = b),
            (f[24] = d))
          : (d = f[24]),
        f[25] !== d || f[26] !== i
          ? ((u = (0, s.jsxs)("fieldset", { className: "mt-1 flex min-w-0 flex-col gap-4", children: [a, i, d] })),
            (f[25] = d),
            (f[26] = i),
            (f[27] = u))
          : (u = f[27]),
        u
      )
    }
    function eR(e) {
      return (0, s.jsx)("span", { className: "ms-2 text-xs leading-4.5 font-normal text-secondary", children: e })
    }
    function eS(e) {
      let a,
        i,
        n,
        r,
        o,
        l,
        c,
        d,
        u,
        p,
        f,
        m,
        h,
        _,
        A,
        x,
        b,
        v,
        y,
        I,
        P,
        R,
        S,
        T,
        j,
        N,
        C,
        O,
        E,
        L,
        M = (0, t.c)(88),
        {
          application: w,
          answers: q,
          applicantName: U,
          applicantEmail: H,
          organization: B,
          headingRef: G,
          children: V,
          footer: W,
        } = e,
        Y = (0, Z.A)()
      M[0] !== Y ? ((a = (e) => Y.formatDisplayName(e, { type: "region" }) ?? e), (M[0] = Y), (M[1] = a)) : (a = M[1])
      let F = a
      M[2] !== q.selectedSafeguards
        ? ((i = q.selectedSafeguards ?? []), (M[2] = q.selectedSafeguards), (M[3] = i))
        : (i = M[3])
      let $ = i,
        Q = "action_required" === w.state && "applicant" !== w.actionOwner ? "in_progress" : w.state,
        ee = D[Q]
      if (
        (M[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, s.jsx)("span", {
              className: "flex size-12 items-center justify-center rounded-full bg-success-soft text-success-soft",
              "aria-hidden": "true",
              children: (0, s.jsx)(K.lIO, {}),
            })),
            (M[4] = n))
          : (n = M[4]),
        M[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, s.jsx)(g.A, { ...k.title })), (M[5] = r))
          : (r = M[5]),
        M[6] !== G
          ? ((o = (0, s.jsx)("h1", {
              ref: G,
              className: "text-heading-md leading-8 font-semibold outline-none select-text md:text-heading-lg",
              tabIndex: -1,
              children: r,
            })),
            (M[6] = G),
            (M[7] = o))
          : (o = M[7]),
        M[8] !== Q
          ? ((l =
              ("submitted" === Q || "in_progress" === Q) &&
              (0, s.jsx)("p", {
                className: "text-sm leading-5 text-secondary select-text",
                children: (0, s.jsx)(g.A, { ...k.description }),
              })),
            (M[8] = Q),
            (M[9] = l))
          : (l = M[9]),
        M[10] !== o || M[11] !== l
          ? ((c = (0, s.jsxs)("header", { className: "flex flex-col items-start gap-3", children: [n, o, l] })),
            (M[10] = o),
            (M[11] = l),
            (M[12] = c))
          : (c = M[12]),
        M[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, s.jsx)(g.A, { ...k.details })), (M[13] = d))
          : (d = M[13]),
        M[14] !== ee
          ? ((u = (0, s.jsx)(X.E, { variant: "neutral", children: (0, s.jsx)(g.A, { ...ee }) })),
            (M[14] = ee),
            (M[15] = u))
          : (u = M[15]),
        M[16] !== w.bioagentsApplicationReference
          ? ((p = (0, s.jsx)(ey, {
              label: k.reference,
              children: (0, s.jsx)("span", {
                className: "font-mono text-xs break-all",
                children: w.bioagentsApplicationReference,
              }),
            })),
            (M[16] = w.bioagentsApplicationReference),
            (M[17] = p))
          : (p = M[17]),
        M[18] !== U
          ? ((f = U && (0, s.jsx)(ey, { label: k.primaryContact, children: U })), (M[18] = U), (M[19] = f))
          : (f = M[19]),
        M[20] !== H
          ? ((m = H && (0, s.jsx)(ey, { label: k.contactEmail, children: H })), (M[20] = H), (M[21] = m))
          : (m = M[21]),
        M[22] !== B
          ? ((h = (0, s.jsx)(ey, {
              label: z.summaryOrganization,
              children: (0, s.jsx)(g.A, { ...k.organizationIdentity, values: B }),
            })),
            (M[22] = B),
            (M[23] = h))
          : (h = M[23]),
        M[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, s.jsx)(ey, {
              label: k.verification,
              children: (0, s.jsx)(g.A, { ...k.verificationDuringReview }),
            })),
            (M[24] = _))
          : (_ = M[24]),
        M[25] !== q.products || M[26] !== Y)
      ) {
        let e, a
        ;(M[28] !== q.products
          ? ((e = (e) => {
              let { id: a } = e
              return q.products.includes(a)
            }),
            (M[28] = q.products),
            (M[29] = e))
          : (e = M[29]),
          M[30] !== Y
            ? ((a = (e) => {
                let { title: a } = e
                return Y.formatMessage(a)
              }),
              (M[30] = Y),
              (M[31] = a))
            : (a = M[31]),
          (A = Y.formatList(e_.filter(e).map(a))),
          (M[25] = q.products),
          (M[26] = Y),
          (M[27] = A))
      } else A = M[27]
      if (
        (M[32] !== A
          ? ((x = (0, s.jsx)(ey, { label: z.requestedAccess, children: A })), (M[32] = A), (M[33] = x))
          : (x = M[33]),
        M[34] !== q.researchScopes || M[35] !== Y)
      ) {
        let e, a
        ;(M[37] !== q.researchScopes
          ? ((e = (e) => {
              let { id: a } = e
              return q.researchScopes.includes(a)
            }),
            (M[37] = q.researchScopes),
            (M[38] = e))
          : (e = M[38]),
          M[39] !== Y
            ? ((a = (e) => {
                let { title: a } = e
                return Y.formatMessage(a)
              }),
              (M[39] = Y),
              (M[40] = a))
            : (a = M[40]),
          (b = Y.formatList(eA.filter(e).map(a))),
          (M[34] = q.researchScopes),
          (M[35] = Y),
          (M[36] = b))
      } else b = M[36]
      return (
        M[41] !== b
          ? ((v = (0, s.jsx)(ey, { label: z.summaryScope, children: b })), (M[41] = b), (M[42] = v))
          : (v = M[42]),
        M[43] !== q.primaryCountry || M[44] !== F
          ? ((y = F(q.primaryCountry)), (M[43] = q.primaryCountry), (M[44] = F), (M[45] = y))
          : (y = M[45]),
        M[46] !== y
          ? ((I = (0, s.jsx)(ey, { label: z.summaryPrimaryLocation, children: y })), (M[46] = y), (M[47] = I))
          : (I = M[47]),
        M[48] !== q.additionalLocations
          ? ((P = "no" === q.additionalLocations && (0, s.jsx)(g.A, { ...z.none })),
            (M[48] = q.additionalLocations),
            (M[49] = P))
          : (P = M[49]),
        M[50] !== q.additionalLocations
          ? ((R = "unsure" === q.additionalLocations && (0, s.jsx)(g.A, { ...k.unconfirmedLocations })),
            (M[50] = q.additionalLocations),
            (M[51] = R))
          : (R = M[51]),
        M[52] !== q.additionalCountries || M[53] !== q.additionalLocations || M[54] !== F || M[55] !== Y
          ? ((S = "yes" === q.additionalLocations && Y.formatList((q.additionalCountries ?? []).map(F))),
            (M[52] = q.additionalCountries),
            (M[53] = q.additionalLocations),
            (M[54] = F),
            (M[55] = Y),
            (M[56] = S))
          : (S = M[56]),
        M[57] !== P || M[58] !== R || M[59] !== S
          ? ((T = (0, s.jsxs)(ey, { label: z.summaryAdditionalLocations, children: [P, R, S] })),
            (M[57] = P),
            (M[58] = R),
            (M[59] = S),
            (M[60] = T))
          : (T = M[60]),
        M[61] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (0, s.jsx)(ey, { label: k.safeguards, children: (0, s.jsx)(g.A, { ...k.safeguardsConfirmed }) })),
            (M[61] = j))
          : (j = M[61]),
        M[62] !== Y || M[63] !== $
          ? ((N =
              $.length > 0 &&
              (0, s.jsx)(ey, {
                label: k.safeguardsInPlace,
                children: Y.formatList(
                  ex
                    .filter((e) => {
                      let { id: a } = e
                      return $.includes(a)
                    })
                    .map((e) => {
                      let { title: a } = e
                      return Y.formatMessage(a)
                    }),
                ),
              })),
            (M[62] = Y),
            (M[63] = $),
            (M[64] = N))
          : (N = M[64]),
        M[65] !== q.otherSafeguardDetails || M[66] !== $
          ? ((C =
              $.includes("other") &&
              q.otherSafeguardDetails &&
              (0, s.jsx)(ey, { label: k.otherSafeguards, children: q.otherSafeguardDetails })),
            (M[65] = q.otherSafeguardDetails),
            (M[66] = $),
            (M[67] = C))
          : (C = M[67]),
        M[68] !== q.researchPurpose
          ? ((O = (0, s.jsx)(ey, {
              label: z.researchPurposeSummary,
              children: (0, s.jsx)("p", { className: "whitespace-pre-wrap", children: q.researchPurpose }),
            })),
            (M[68] = q.researchPurpose),
            (M[69] = O))
          : (O = M[69]),
        M[70] !== W ||
        M[71] !== p ||
        M[72] !== f ||
        M[73] !== m ||
        M[74] !== h ||
        M[75] !== x ||
        M[76] !== v ||
        M[77] !== I ||
        M[78] !== T ||
        M[79] !== N ||
        M[80] !== C ||
        M[81] !== O ||
        M[82] !== u
          ? ((E = (0, s.jsxs)(J.e, {
              title: d,
              trailing: u,
              footer: W,
              children: [p, f, m, h, _, x, v, I, T, j, N, C, O],
            })),
            (M[70] = W),
            (M[71] = p),
            (M[72] = f),
            (M[73] = m),
            (M[74] = h),
            (M[75] = x),
            (M[76] = v),
            (M[77] = I),
            (M[78] = T),
            (M[79] = N),
            (M[80] = C),
            (M[81] = O),
            (M[82] = u),
            (M[83] = E))
          : (E = M[83]),
        M[84] !== V || M[85] !== E || M[86] !== c
          ? ((L = (0, s.jsxs)("section", {
              className: "flex flex-col gap-6 text-sm text-default",
              "aria-live": "polite",
              children: [c, V, E],
            })),
            (M[84] = V),
            (M[85] = E),
            (M[86] = c),
            (M[87] = L))
          : (L = M[87]),
        L
      )
    }
    let eT = (0, x.YK)({
        expiredVerificationTitle: {
          id: "chatgpt.rosalind_access.tracking.action.expired_verification.title",
          defaultMessage: "Your organization verification expired",
        },
        expiredVerificationDescription: {
          id: "chatgpt.rosalind_access.tracking.action.expired_verification.description",
          defaultMessage:
            "Cancel this application and start a new one to complete your organization's business verification.",
        },
        expiredVerificationUnauthorizedDescription: {
          id: "chatgpt.rosalind_access.tracking.action.expired_verification.description.unauthorized",
          defaultMessage:
            "Your organization's verification expired. Ask an authorized organization administrator to cancel this application and submit a new one.",
        },
        expiredVerificationButton: {
          id: "chatgpt.rosalind_access.tracking.action.expired_verification.button.label",
          defaultMessage: "Review application options",
        },
        organizationVerificationTitle: {
          id: "chatgpt.rosalind_access.tracking.action.organization_verification.title",
          defaultMessage: "Complete Persona verification",
        },
        organizationVerificationDescription: {
          id: "chatgpt.rosalind_access.tracking.action.organization_verification.email.description",
          defaultMessage: "Please go to your email to continue with Persona.",
        },
        additionalInformationTitle: {
          id: "chatgpt.rosalind_access.tracking.action.additional_information.title",
          defaultMessage: "Complete application information",
        },
        additionalInformationDescription: {
          id: "chatgpt.rosalind_access.tracking.action.additional_information.description",
          defaultMessage:
            "Some application information is missing or incomplete. Cancel this application, then submit a new application with the complete information.",
        },
        additionalInformationUnauthorizedDescription: {
          id: "chatgpt.rosalind_access.tracking.action.additional_information.description.unauthorized",
          defaultMessage:
            "Some application information is missing or incomplete. Ask an authorized organization member to cancel this application and submit a new one.",
        },
        additionalInformationButton: {
          id: "chatgpt.rosalind_access.tracking.action.additional_information.button.cancel_and_reapply.label",
          defaultMessage: "Cancel and reapply",
        },
        enterpriseAgreementTitle: {
          id: "chatgpt.rosalind_access.tracking.action.enterprise_agreement.required.title",
          defaultMessage: "Enterprise agreement required",
        },
        enterpriseAgreementDescription: {
          id: "chatgpt.rosalind_access.tracking.action.enterprise_agreement.required.description",
          defaultMessage:
            "Your organization must sign an Enterprise agreement and receive OpenAI approval before access can be granted.",
        },
        enterpriseAgreementButton: {
          id: "chatgpt.rosalind_access.tracking.action.enterprise_agreement.button.label",
          defaultMessage: "Review and sign forms",
        },
        genericActionTitle: {
          id: "chatgpt.rosalind_access.tracking.action.other.title",
          defaultMessage: "Additional action required",
        },
        genericActionDescription: {
          id: "chatgpt.rosalind_access.tracking.action.other.description",
          defaultMessage: "Next step: {action}",
        },
      }),
      ej = {
        cancel_and_reapply_persona_verification: {
          title: eT.expiredVerificationTitle,
          description: eT.expiredVerificationDescription,
        },
        complete_organization_verification: {
          title: eT.organizationVerificationTitle,
          description: eT.organizationVerificationDescription,
        },
        provide_organization_verification: {
          title: eT.organizationVerificationTitle,
          description: eT.organizationVerificationDescription,
        },
        provide_additional_information: {
          title: eT.additionalInformationTitle,
          description: eT.additionalInformationDescription,
        },
        sign_enterprise_zdr_agreement: {
          title: eT.enterpriseAgreementTitle,
          description: eT.enterpriseAgreementDescription,
          buttonLabel: eT.enterpriseAgreementButton,
        },
      }
    function eN(e) {
      if (
        "action_required" !== e.state ||
        "applicant" !== e.actionOwner ||
        void 0 === e.requiredAction ||
        "upload_verification_documents" === e.requiredAction
      )
        return
      if (!Object.hasOwn(ej, e.requiredAction))
        return {
          title: eT.genericActionTitle,
          description: eT.genericActionDescription,
          descriptionValues: { action: e.requiredAction.replaceAll("_", " ") },
        }
      let a = ej[e.requiredAction]
      if ("sign_enterprise_zdr_agreement" !== e.requiredAction || "research_zdr" === e.requestedResearchMode)
        return "provide_additional_information" === e.requiredAction
          ? e.canCancel
            ? { ...a, buttonLabel: eT.additionalInformationButton }
            : { ...a, description: eT.additionalInformationUnauthorizedDescription }
          : "cancel_and_reapply_persona_verification" === e.requiredAction
            ? e.canCancel
              ? { ...a, buttonLabel: eT.expiredVerificationButton, href: "/rosalind/application" }
              : { ...a, description: eT.expiredVerificationUnauthorizedDescription }
            : a
    }
    var eC = i("ZtSy")
    function eO(e) {
      let { provisioningApproval: a, provisioningPricing: i } = e
      return null != e.customerAcceptedAt
        ? !0 !== e.requiresInternalApiAcknowledgement || a?.acceptedInternalApiOnly === !0
        : null != a &&
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
    }
    let eE = (0, x.YK)({
        decisionStage: { id: "chatgpt.rosalind_access.tracking.progress.decision.label", defaultMessage: "Decision" },
        submittedStatus: {
          id: "chatgpt.rosalind_access.application.status.submitted.label",
          defaultMessage: "Submitted",
        },
        actionRequiredStatus: {
          id: "chatgpt.rosalind_access.application.status.action_required.label",
          defaultMessage: "Action required",
        },
        approvedStatus: { id: "chatgpt.rosalind_access.application.status.approved.label", defaultMessage: "Approved" },
        accessGrantedStatus: {
          id: "chatgpt.rosalind_access.application.status.access_granted.label",
          defaultMessage: "Access granted",
        },
        accessRevokedStatus: {
          id: "chatgpt.rosalind_access.application.status.access_revoked.label",
          defaultMessage: "Access revoked",
        },
        deniedStatus: { id: "chatgpt.rosalind_access.application.status.denied.label", defaultMessage: "Denied" },
        canceledStatus: { id: "chatgpt.rosalind_access.application.status.canceled.label", defaultMessage: "Canceled" },
        statusSubmittedHeadline: {
          id: "chatgpt.rosalind_access.tracking.status.submitted.heading",
          defaultMessage: "Application received",
        },
        statusSubmittedDescription: {
          id: "chatgpt.rosalind_access.tracking.status.submitted.description",
          defaultMessage: "Your organization\u2019s application has been submitted and is awaiting review.",
        },
        statusInProgressHeadline: {
          id: "chatgpt.rosalind_access.tracking.status.in_progress.heading",
          defaultMessage: "Your application is under review",
        },
        statusInProgressDescription: {
          id: "chatgpt.rosalind_access.tracking.status.in_progress.description",
          defaultMessage:
            "We\u2019re reviewing your organization and application details. No action is required from you right now.",
        },
        statusInReviewBadge: {
          id: "chatgpt.rosalind_access.tracking.status.in_progress.badge",
          defaultMessage: "In review",
        },
        statusActionRequiredHeadline: {
          id: "chatgpt.rosalind_access.tracking.status.action_required.heading",
          defaultMessage: "Action needed to continue",
        },
        statusActionRequiredDescription: {
          id: "chatgpt.rosalind_access.tracking.status.action_required.description",
          defaultMessage: "Complete the requested next step so your organization\u2019s application can move forward.",
        },
        statusApprovedHeadline: {
          id: "chatgpt.rosalind_access.tracking.status.approved.heading",
          defaultMessage: "Your application has been approved",
        },
        statusApprovedDescription: {
          id: "chatgpt.rosalind_access.tracking.status.approved.description",
          defaultMessage:
            "Your organization has been approved. Access is not available until provisioning is complete.",
        },
        statusAccessGrantedHeadline: {
          id: "chatgpt.rosalind_access.tracking.status.access_granted.heading",
          defaultMessage: "Your organization now has access",
        },
        statusAccessGrantedDescription: {
          id: "chatgpt.rosalind_access.tracking.status.access_granted.description",
          defaultMessage: "GPT-Rosalind access has been granted to your organization.",
        },
        statusDeniedHeadline: {
          id: "chatgpt.rosalind_access.tracking.status.denied.heading",
          defaultMessage: "Application not approved",
        },
        statusDeniedDescription: {
          id: "chatgpt.rosalind_access.tracking.status.denied.description",
          defaultMessage: "Your organization\u2019s application was not approved. Access has not been granted.",
        },
        statusRevokedHeadline: {
          id: "chatgpt.rosalind_access.tracking.status.revoked.heading",
          defaultMessage: "Access has been revoked",
        },
        statusRevokedDescription: {
          id: "chatgpt.rosalind_access.tracking.status.revoked.description",
          defaultMessage: "GPT-Rosalind access previously granted to your organization is no longer available.",
        },
        statusCanceledHeadline: {
          id: "chatgpt.rosalind_access.tracking.status.canceled.heading",
          defaultMessage: "Application canceled",
        },
        statusCanceledDescription: {
          id: "chatgpt.rosalind_access.tracking.status.canceled.description",
          defaultMessage:
            "This application was permanently canceled. Your organization can start a new application if eligible.",
        },
        statusProvisioningApprovalHeading: {
          id: "chatgpt.rosalind_access.tracking.approved.provisioning.heading",
          defaultMessage: "Approve access provisioning",
        },
        statusProvisioningApprovalReceivedHeading: {
          id: "chatgpt.rosalind_access.tracking.approved.provisioning.received.heading",
          defaultMessage: "Provisioning approval received",
        },
        statusProvisioningApprovalReceivedDescription: {
          id: "chatgpt.rosalind_access.tracking.approved.provisioning.received.description",
          defaultMessage:
            "Your organization\u2019s approval has been recorded. You do not have access yet. No action is required while access provisioning is pending.",
        },
        statusProvisioningApprovalAdministratorRequired: {
          id: "chatgpt.rosalind_access.tracking.approved.provisioning.organization_workspace_or_tenant_administrator_required.description",
          defaultMessage:
            "An organization owner or administrator, an Enterprise Global Admin, or an eligible Business workspace owner or administrator must accept the GPT-Rosalind Terms, confirm provisioning, and acknowledge the current pricing notice before access can be granted.",
        },
        statusProvisioningApprovalDescription: {
          id: "chatgpt.rosalind_access.tracking.approved.provisioning.legal_and_pricing_notice.description",
          defaultMessage:
            "Review the application, research terms, and current pricing notice before approving access for your organization.",
        },
        statusProvisioningNoSeparateCharge: {
          id: "chatgpt.rosalind_access.tracking.approved.provisioning.pricing.no_separate_charge.notice",
          defaultMessage:
            "GPT-Rosalind does not currently have a separate charge. We\u2019ll notify your organization before any separate pricing takes effect.",
        },
        statusProvisioningAgreementRates: {
          id: "codex.rosalind.provisioning.agreement_rates",
          defaultMessage:
            "GPT-Rosalind usage is subject to your organization\u2019s pricing agreement and applicable rate card.",
        },
        statusProvisioningApprovalRates: {
          id: "codex.rosalind.provisioning.provisional_rates",
          defaultMessage: "GPT-Rosalind pricing is still to be confirmed.",
        },
        statusProvisioningLegalAttestation: {
          id: "chatgpt.rosalind_access.tracking.approved.provisioning.legal.attestation.current_and_future_accuracy.description",
          defaultMessage:
            "I have reviewed this application with due inquiry and reasonable diligence; it is accurate and complete to the best of my knowledge; I am authorized to bind my organization and have all required internal approvals; and I will immediately notify OpenAI in writing if any information is or becomes inaccurate or incomplete. The GPT-Rosalind Terms are incorporated into our existing signed services agreement or, if none exists, the {servicesAgreement}.",
        },
        statusProvisioningServicesAgreementLink: {
          id: "chatgpt.rosalind_access.tracking.approved.provisioning.legal.services_agreement.link.label",
          defaultMessage: "OpenAI Services Agreement",
        },
        statusProvisioningApprovalConfirmation: {
          id: "chatgpt.rosalind_access.tracking.approved.provisioning.confirmation.provisioning.label",
          defaultMessage: "I confirm that GPT-Rosalind access should be provisioned for this organization.",
        },
        statusProvisioningNoSeparateChargeAcknowledgement: {
          id: "chatgpt.rosalind_access.tracking.approved.provisioning.pricing.no_separate_charge.acknowledgement.label",
          defaultMessage:
            "I understand that GPT-Rosalind does not currently have a separate charge and that my organization will be notified before any separate pricing takes effect.",
        },
        statusProvisioningAgreementPricingAcknowledgement: {
          id: "chatgpt.rosalind_access.tracking.approved.provisioning.pricing.agreement.acknowledgement.label",
          defaultMessage:
            "I acknowledge that GPT-Rosalind usage is subject to my organization\u2019s applicable pricing and billing terms.",
        },
        statusProvisioningApprovalFinalRatesConfirmation: {
          id: "codex.rosalind.provisioning.final_rates_consent",
          defaultMessage: "I accept the GPT-Rosalind rates shown above.",
        },
        statusProvisioningApprovalRatesConfirmation: {
          id: "codex.rosalind.provisioning.provisional_rates_consent",
          defaultMessage: "I acknowledge that final GPT-Rosalind pricing is still to be confirmed.",
        },
        statusProvisioningResearchTermsAgreement: {
          id: "chatgpt.rosalind_access.tracking.approved.provisioning.legal.attestation_and_agreements.label",
          defaultMessage:
            "I certify the statements above and agree to the {researchTerms} and the applicable {servicesAgreement}.",
        },
        statusProvisioningResearchTermsLink: {
          id: "chatgpt.rosalind_access.tracking.approved.provisioning.legal.terms.link.label",
          defaultMessage: "GPT-Rosalind Terms",
        },
        statusProvisioningApplicableServicesAgreementLink: {
          id: "chatgpt.rosalind_access.tracking.approved.provisioning.legal.applicable_services_agreement.link.label",
          defaultMessage: "Services Agreement",
        },
        statusProvisioningApprovalButton: {
          id: "chatgpt.rosalind_access.tracking.approved.provisioning.button.approve.label",
          defaultMessage: "Approve provisioning",
        },
        statusProvisioningApprovalUnavailable: {
          id: "chatgpt.rosalind_access.tracking.approved.provisioning.unavailable.description",
          defaultMessage:
            "Secure administrator approval is not available yet. Access cannot be granted until approval and provisioning are complete.",
        },
        statusProvisioningApprovalFailed: {
          id: "chatgpt.rosalind_access.tracking.approved.provisioning.error.submission_failed",
          defaultMessage: "We couldn\u2019t submit your approval. Please try again.",
        },
        statusProvisioningApplicationReviewUnavailable: {
          id: "chatgpt.rosalind_access.tracking.approved.provisioning.application_review.unavailable.error",
          defaultMessage: "We couldn\u2019t load the submitted application. Please try again.",
        },
        statusProvisioningApplicationReviewRetry: {
          id: "chatgpt.rosalind_access.tracking.approved.provisioning.application_review.retry.button",
          defaultMessage: "Try again",
        },
        statusProvisioningPricingLinks: {
          id: "chatgpt.rosalind_access.tracking.approved.provisioning.pricing.agreement.links.description",
          defaultMessage: "Review the {chatgptRateCard} and {apiPricing} for details.",
        },
        applicationDetailsVisualHeading: {
          id: "chatgpt.rosalind_access.review.summary.visual_heading",
          defaultMessage: "Application details",
        },
        resumeBusinessVerification: {
          id: "chatgpt.rosalind_access.verification.resume.button",
          defaultMessage: "Resume business verification",
        },
        resumingBusinessVerification: {
          id: "chatgpt.rosalind_access.verification.resume.pending.button",
          defaultMessage: "Opening business verification\u2026",
        },
        businessVerificationUnavailable: {
          id: "chatgpt.rosalind_access.verification.unavailable.error",
          defaultMessage: "Business verification is temporarily unavailable. Please try again.",
        },
        cancelApplication: {
          id: "chatgpt.rosalind_access.cancellation.action.button",
          defaultMessage: "Cancel application",
        },
        cancellationComplete: {
          id: "chatgpt.rosalind_access.cancellation.success.notice",
          defaultMessage: "Application canceled. You can submit a new application for this organization.",
        },
        applicationStatusUnavailable: {
          id: "chatgpt.rosalind_access.tracking.application.history.unavailable.error",
          defaultMessage: "We couldn\u2019t check your application status. Please try again.",
        },
        retryOrganizationLookup: {
          id: "chatgpt.rosalind_access.organization.selection.lookup_unavailable.retry_button",
          defaultMessage: "Retry loading organizations",
        },
        noAccessGranted: {
          id: "chatgpt.rosalind_access.confirmation.access.notice",
          defaultMessage: "Submission does not grant access.",
        },
        confirmationReferenceLabel: {
          id: "chatgpt.rosalind_access.confirmation.application_reference.heading",
          defaultMessage: "Application reference",
        },
        requestedAccess: {
          id: "chatgpt.rosalind_access.review.summary.requested_access.label",
          defaultMessage: "Requested access",
        },
        researchPurposeSummary: {
          id: "chatgpt.rosalind_access.review.summary.research_purpose.label",
          defaultMessage: "Research purpose",
        },
        summaryScope: {
          id: "chatgpt.rosalind_access.review.summary.research_scope.label",
          defaultMessage: "Research scope",
        },
        summaryPrimaryLocation: {
          id: "chatgpt.rosalind_access.review.summary.primary_location.label",
          defaultMessage: "Primary access location",
        },
        summaryAdditionalLocations: {
          id: "chatgpt.rosalind_access.review.summary.additional_locations.label",
          defaultMessage: "Additional countries or regions",
        },
        summarySafeguards: {
          id: "chatgpt.rosalind_access.review.summary.safeguards.label",
          defaultMessage: "Research safeguards",
        },
        safeguardsInPlace: {
          id: "chatgpt.rosalind_access.review.summary.safeguards_in_place.label",
          defaultMessage: "Safeguards in place",
        },
        otherSafeguardsSummary: {
          id: "chatgpt.rosalind_access.review.summary.other_safeguards.label",
          defaultMessage: "Other safeguards",
        },
        safeguardsConfirmed: {
          id: "chatgpt.rosalind_access.review.summary.safeguards.confirmed",
          defaultMessage: "Reasonable safeguards confirmed",
        },
        none: { id: "chatgpt.rosalind_access.review.summary.none.label", defaultMessage: "None" },
        additionalLocationsUnconfirmed: {
          id: "chatgpt.rosalind_access.review.summary.additional_locations.unconfirmed",
          defaultMessage: "Not yet confirmed \xb7 policy review required",
        },
        policyReviewRequired: {
          id: "chatgpt.rosalind_access.review.summary.policy_review_required.label",
          defaultMessage: "{locations} \xb7 policy review required",
        },
        externalApi: {
          id: "chatgpt.rosalind_access.research.products.option.external_api.label",
          defaultMessage: "API \xb7 external applications",
        },
        statusUpdatedLabel: {
          id: "chatgpt.rosalind_access.tracking.timeline.status_updated.label",
          defaultMessage: "Last updated",
        },
        pricingChatgptRateCardLink: {
          id: "chatgpt.rosalind_access.pricing.chatgpt_rate_card.link.label",
          defaultMessage: "ChatGPT rate card",
        },
        pricingApiLink: { id: "chatgpt.rosalind_access.pricing.api.link.label", defaultMessage: "API pricing page" },
        regulatedMaterials: {
          id: "chatgpt.rosalind_access.research.scope.option.regulated_materials.label",
          defaultMessage: "Pathogens, toxins, or regulated biological materials",
        },
        wetLab: {
          id: "chatgpt.rosalind_access.research.scope.option.wet_lab.label",
          defaultMessage: "Wet-lab research",
        },
      }),
      eL = "https://openai.com/policies/services-agreement/"
    function eM(e) {
      let a,
        i,
        n,
        r,
        o,
        l,
        c,
        d,
        u,
        f = (0, t.c)(46),
        {
          application: h,
          pending: _,
          refreshing: A,
          error: x,
          onApprove: b,
          onRetry: v,
          showApplicationSummary: y,
        } = e,
        I = void 0 === y || y,
        [P, R] = (0, p.useState)(!1),
        [S, T] = (0, p.useState)(!1),
        [j, N] = (0, p.useState)(!1),
        [C, O] = (0, p.useState)(!1),
        E = (0, p.useId)(),
        { provisioningPricing: L, approvalSummary: M, requestedResearchMode: w } = h
      f[0] !== h ? ((i = eO(h)), (f[0] = h), (f[1] = i)) : (i = f[1])
      let z = i,
        k = !0 === h.canApproveProvisioning,
        D =
          k &&
          !z &&
          null != L &&
          null != M &&
          null != w &&
          L.requestedResearchMode === w &&
          M.requestedResearchMode === w &&
          null != h.researchTermsUrl &&
          null != h.researchTermsVersion,
        q = D && P && S && j && (!0 !== h.requiresInternalApiAcknowledgement || C) && !_ && !A,
        U =
          L?.pricingStatus === "final" &&
          "rosalind-provisioning-agreement-pricing-v1" === L.pricingVersion &&
          L.separateCharge
      f[2] !== h
        ? ((a = h.provisioningPricing),
          (n =
            a?.separateCharge === !1
              ? eE.statusProvisioningNoSeparateChargeAcknowledgement
              : a?.pricingStatus === "final"
                ? "rosalind-provisioning-agreement-pricing-v1" === a.pricingVersion && a.separateCharge
                  ? eE.statusProvisioningAgreementPricingAcknowledgement
                  : eE.statusProvisioningApprovalFinalRatesConfirmation
                : eE.statusProvisioningApprovalRatesConfirmation),
          (f[2] = h),
          (f[3] = n))
        : (n = f[3])
      let H = n,
        B = `${E}-heading`,
        G = `${E}-heading`,
        V = z ? eE.statusProvisioningApprovalReceivedHeading : eE.statusProvisioningApprovalHeading
      return (
        f[4] !== V ? ((r = (0, s.jsx)(g.A, { ...V })), (f[4] = V), (f[5] = r)) : (r = f[5]),
        f[6] !== G || f[7] !== r
          ? ((o = (0, s.jsx)("h3", { className: "text-lg font-semibold", id: G, children: r })),
            (f[6] = G),
            (f[7] = r),
            (f[8] = o))
          : (o = f[8]),
        f[9] !== z
          ? ((l =
              z &&
              (0, s.jsx)("p", {
                role: "status",
                children: (0, s.jsx)(g.A, { ...eE.statusProvisioningApprovalReceivedDescription }),
              })),
            (f[9] = z),
            (f[10] = l))
          : (l = f[10]),
        f[11] !== k || f[12] !== z || f[13] !== A
          ? ((c =
              !z &&
              !k &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, s.jsx)(g.A, { ...eE.statusProvisioningApprovalAdministratorRequired }),
                  }),
                  (0, s.jsx)(m.$, {
                    color: "primary",
                    size: "dialogAction",
                    type: "button",
                    disabled: !0,
                    loading: A,
                    children: (0, s.jsx)(g.A, { ...eE.statusProvisioningApprovalButton }),
                  }),
                ],
              })),
            (f[11] = k),
            (f[12] = z),
            (f[13] = A),
            (f[14] = c))
          : (c = f[14]),
        f[15] !== C ||
        f[16] !== S ||
        f[17] !== j ||
        f[18] !== U ||
        f[19] !== h.organizationId ||
        f[20] !== h.requiresInternalApiAcknowledgement ||
        f[21] !== h.researchTermsUrl ||
        f[22] !== h.researchTermsVersion ||
        f[23] !== k ||
        f[24] !== D ||
        f[25] !== P ||
        f[26] !== z ||
        f[27] !== x ||
        f[28] !== E ||
        f[29] !== b ||
        f[30] !== v ||
        f[31] !== _ ||
        f[32] !== L ||
        f[33] !== H ||
        f[34] !== q ||
        f[35] !== A ||
        f[36] !== w ||
        f[37] !== I ||
        f[38] !== M
          ? ((d =
              !z &&
              k &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, s.jsx)(g.A, { ...eE.statusProvisioningApprovalDescription }),
                  }),
                  w &&
                    (0, s.jsx)("p", {
                      className: "text-sm font-medium",
                      children: (0, s.jsx)(ek, { pricing: L, agreementPricing: U }),
                    }),
                  U &&
                    (0, s.jsx)("p", {
                      className: "text-sm text-secondary",
                      children: (0, s.jsx)(g.A, {
                        ...eE.statusProvisioningPricingLinks,
                        values: {
                          chatgptRateCard: (0, s.jsx)(eC.G, {
                            href: "https://help.openai.com/en/articles/11481834-chatgpt-rate-card-business-enterpriseedu-credit-based-pricing",
                            initiator: "external_link",
                            appearance: "primary",
                            children: (0, s.jsx)(g.A, { ...eE.pricingChatgptRateCardLink }),
                          }),
                          apiPricing: (0, s.jsx)(eC.G, {
                            href: "https://developers.openai.com/api/docs/pricing?latest-pricing=standard",
                            initiator: "external_link",
                            appearance: "primary",
                            children: (0, s.jsx)(g.A, { ...eE.pricingApiLink }),
                          }),
                        },
                      }),
                    }),
                  M
                    ? I && (0, s.jsx)(ew, { summary: M })
                    : (0, s.jsxs)("div", {
                        role: "alert",
                        className: "flex flex-col items-start gap-3",
                        children: [
                          (0, s.jsx)("p", {
                            children: (0, s.jsx)(g.A, { ...eE.statusProvisioningApplicationReviewUnavailable }),
                          }),
                          (0, s.jsx)(m.$, {
                            color: "secondary",
                            size: "dialogAction",
                            type: "button",
                            onClick: v,
                            children: (0, s.jsx)(g.A, { ...eE.statusProvisioningApplicationReviewRetry }),
                          }),
                        ],
                      }),
                  (0, s.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, s.jsx)(g.A, {
                      ...eE.statusProvisioningLegalAttestation,
                      values: {
                        servicesAgreement: (0, s.jsx)(eC.G, {
                          href: eL,
                          appearance: "primary",
                          initiator: "external_link",
                          children: (0, s.jsx)(g.A, { ...eE.statusProvisioningServicesAgreementLink }),
                        }),
                      },
                    }),
                  }),
                  (0, s.jsxs)("div", {
                    className: "flex flex-col gap-4",
                    children: [
                      (0, s.jsx)(eb, {
                        id: `${E}-provisioning`,
                        checked: P,
                        disabled: _ || A || !D,
                        onChange: R,
                        title: (0, s.jsx)(g.A, { ...eE.statusProvisioningApprovalConfirmation }),
                      }),
                      (0, s.jsx)(eb, {
                        id: `${E}-pricing`,
                        checked: S,
                        disabled: _ || A || !D,
                        onChange: T,
                        title: (0, s.jsx)(g.A, { ...H }),
                      }),
                      (0, s.jsx)(eb, {
                        id: `${E}-terms`,
                        checked: j,
                        disabled: _ || A || !D,
                        onChange: N,
                        title: (0, s.jsx)(g.A, {
                          ...eE.statusProvisioningResearchTermsAgreement,
                          values: {
                            researchTerms: h.researchTermsUrl
                              ? (0, s.jsx)(eC.G, {
                                  href: h.researchTermsUrl,
                                  appearance: "primary",
                                  initiator: "external_link",
                                  children: (0, s.jsx)(g.A, { ...eE.statusProvisioningResearchTermsLink }),
                                })
                              : (0, s.jsx)(g.A, { ...eE.statusProvisioningResearchTermsLink }),
                            servicesAgreement: (0, s.jsx)(eC.G, {
                              href: eL,
                              appearance: "primary",
                              initiator: "external_link",
                              children: (0, s.jsx)(g.A, { ...eE.statusProvisioningApplicableServicesAgreementLink }),
                            }),
                          },
                        }),
                      }),
                      h.requiresInternalApiAcknowledgement &&
                        (0, s.jsx)(eb, {
                          id: `${E}-internal-api`,
                          checked: C,
                          disabled: _ || A || !D,
                          onChange: O,
                          title: (0, s.jsx)(g.A, {
                            id: "chatgpt.rosalind_access.tracking.approved.internal_api_only.confirmation",
                            defaultMessage:
                              "I acknowledge that API access is for internal organizational use only and must not be offered to external users",
                          }),
                        }),
                    ],
                  }),
                  (0, s.jsx)(m.$, {
                    color: "primary",
                    size: "dialogAction",
                    type: "button",
                    disabled: !q,
                    loading: _ || A,
                    onClick: () => {
                      q &&
                        L &&
                        w &&
                        h.researchTermsVersion &&
                        b({
                          organizationId: h.organizationId,
                          confirmedProvisioning: !0,
                          acceptedPricing: !0,
                          acceptedResearchTerms: !0,
                          pricingVersion: L.pricingVersion,
                          researchTermsVersion: h.researchTermsVersion,
                          requestedResearchMode: w,
                        })
                    },
                    children: (0, s.jsx)(g.A, { ...eE.statusProvisioningApprovalButton }),
                  }),
                  !D &&
                    (0, s.jsx)("p", {
                      role: "status",
                      className: "text-sm text-secondary",
                      children: (0, s.jsx)(g.A, { ...eE.statusProvisioningApprovalUnavailable }),
                    }),
                  x &&
                    (0, s.jsx)("p", {
                      role: "alert",
                      className: "text-sm text-danger",
                      children: (0, s.jsx)(g.A, { ...eE.statusProvisioningApprovalFailed }),
                    }),
                ],
              })),
            (f[15] = C),
            (f[16] = S),
            (f[17] = j),
            (f[18] = U),
            (f[19] = h.organizationId),
            (f[20] = h.requiresInternalApiAcknowledgement),
            (f[21] = h.researchTermsUrl),
            (f[22] = h.researchTermsVersion),
            (f[23] = k),
            (f[24] = D),
            (f[25] = P),
            (f[26] = z),
            (f[27] = x),
            (f[28] = E),
            (f[29] = b),
            (f[30] = v),
            (f[31] = _),
            (f[32] = L),
            (f[33] = H),
            (f[34] = q),
            (f[35] = A),
            (f[36] = w),
            (f[37] = I),
            (f[38] = M),
            (f[39] = d))
          : (d = f[39]),
        f[40] !== c || f[41] !== d || f[42] !== B || f[43] !== o || f[44] !== l
          ? ((u = (0, s.jsxs)("section", {
              className: "flex flex-col gap-4",
              "aria-labelledby": B,
              children: [o, l, c, d],
            })),
            (f[40] = c),
            (f[41] = d),
            (f[42] = B),
            (f[43] = o),
            (f[44] = l),
            (f[45] = u))
          : (u = f[45]),
        u
      )
    }
    function ew(e) {
      let a,
        i,
        n,
        r,
        o,
        l,
        c,
        d,
        u,
        p,
        f,
        m,
        h,
        _,
        A,
        b,
        v,
        y,
        I,
        P = (0, t.c)(51),
        { summary: R } = e,
        S = (0, Z.A)()
      if (P[0] !== S || P[1] !== R.products || P[2] !== R.researchPurpose || P[3] !== R.researchScopes) {
        let e = new Map([
            ["chatgpt-codex", z.chatgptCodex],
            ["internal-api", z.internalApi],
            ["external-api", eE.externalApi],
          ]),
          t = new Map([...eA.map(ez), ["regulated-materials", eE.regulatedMaterials], ["wet-lab", eE.wetLab]])
        ;((d = "flex flex-col gap-3"),
          P[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((u = (0, s.jsx)("h4", {
                className: "text-base font-semibold",
                children: (0, s.jsx)(g.A, { ...eE.applicationDetailsVisualHeading }),
              })),
              (P[13] = u))
            : (u = P[13]),
          (o = "flex flex-col gap-4"))
        let p = R.products.map((a) => (e.has(a) ? S.formatMessage(e.get(a) ?? eE.externalApi) : a))
        ;(P[14] !== p
          ? ((l = (0, s.jsx)(ey, { label: eE.requestedAccess, children: (0, s.jsx)(x.dT, { value: p }) })),
            (P[14] = p),
            (P[15] = l))
          : (l = P[15]),
          P[16] !== R.researchPurpose
            ? ((c = (0, s.jsx)(ey, { label: eE.researchPurposeSummary, children: R.researchPurpose })),
              (P[16] = R.researchPurpose),
              (P[17] = c))
            : (c = P[17]),
          (i = ey),
          (r = eE.summaryScope),
          (a = x.dT),
          (n = R.researchScopes.map((e) => {
            let a = t.get(e)
            return a ? S.formatMessage(a) : e
          })),
          (P[0] = S),
          (P[1] = R.products),
          (P[2] = R.researchPurpose),
          (P[3] = R.researchScopes),
          (P[4] = a),
          (P[5] = i),
          (P[6] = n),
          (P[7] = r),
          (P[8] = o),
          (P[9] = l),
          (P[10] = c),
          (P[11] = d),
          (P[12] = u))
      } else
        ((a = P[4]), (i = P[5]), (n = P[6]), (r = P[7]), (o = P[8]), (l = P[9]), (c = P[10]), (d = P[11]), (u = P[12]))
      return (
        P[18] !== a || P[19] !== n
          ? ((p = (0, s.jsx)(a, { value: n })), (P[18] = a), (P[19] = n), (P[20] = p))
          : (p = P[20]),
        P[21] !== i || P[22] !== r || P[23] !== p
          ? ((f = (0, s.jsx)(i, { label: r, children: p })), (P[21] = i), (P[22] = r), (P[23] = p), (P[24] = f))
          : (f = P[24]),
        P[25] !== S || P[26] !== R.primaryCountry
          ? ((m = S.formatDisplayName(R.primaryCountry, { type: "region" }) ?? R.primaryCountry),
            (P[25] = S),
            (P[26] = R.primaryCountry),
            (P[27] = m))
          : (m = P[27]),
        P[28] !== m
          ? ((h = (0, s.jsx)(ey, { label: eE.summaryPrimaryLocation, children: m })), (P[28] = m), (P[29] = h))
          : (h = P[29]),
        P[30] !== R
          ? ((_ = (0, s.jsx)(ey, { label: eE.summaryAdditionalLocations, children: (0, s.jsx)(eD, { summary: R }) })),
            (P[30] = R),
            (P[31] = _))
          : (_ = P[31]),
        P[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = (0, s.jsx)(ey, {
              label: eE.summarySafeguards,
              children: (0, s.jsx)(g.A, { ...eE.safeguardsConfirmed }),
            })),
            (P[32] = A))
          : (A = P[32]),
        P[33] !== S || P[34] !== R.selectedSafeguards
          ? ((b =
              R.selectedSafeguards.length > 0 &&
              (0, s.jsx)(ey, {
                label: eE.safeguardsInPlace,
                children: (0, s.jsx)(x.dT, {
                  value: R.selectedSafeguards.map((e) => {
                    let a = ex.find((a) => {
                      let { id: i } = a
                      return i === e
                    })
                    return a ? S.formatMessage(a.title) : e
                  }),
                }),
              })),
            (P[33] = S),
            (P[34] = R.selectedSafeguards),
            (P[35] = b))
          : (b = P[35]),
        P[36] !== R.otherSafeguardDetails
          ? ((v =
              R.otherSafeguardDetails &&
              (0, s.jsx)(ey, { label: eE.otherSafeguardsSummary, children: R.otherSafeguardDetails })),
            (P[36] = R.otherSafeguardDetails),
            (P[37] = v))
          : (v = P[37]),
        P[38] !== h ||
        P[39] !== _ ||
        P[40] !== b ||
        P[41] !== v ||
        P[42] !== o ||
        P[43] !== l ||
        P[44] !== c ||
        P[45] !== f
          ? ((y = (0, s.jsxs)("dl", { className: o, children: [l, c, f, h, _, A, b, v] })),
            (P[38] = h),
            (P[39] = _),
            (P[40] = b),
            (P[41] = v),
            (P[42] = o),
            (P[43] = l),
            (P[44] = c),
            (P[45] = f),
            (P[46] = y))
          : (y = P[46]),
        P[47] !== y || P[48] !== d || P[49] !== u
          ? ((I = (0, s.jsxs)("section", { className: d, children: [u, y] })),
            (P[47] = y),
            (P[48] = d),
            (P[49] = u),
            (P[50] = I))
          : (I = P[50]),
        I
      )
    }
    function ez(e) {
      let { id: a, title: i } = e
      return [a, i]
    }
    function ek(e) {
      let a,
        i = (0, t.c)(3),
        { pricing: n, agreementPricing: r } = e
      if (r) {
        let e
        return (
          i[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)(g.A, { ...eE.statusProvisioningAgreementRates })), (i[0] = e))
            : (e = i[0]),
          e
        )
      }
      if (n?.separateCharge === !1) {
        let e
        return (
          i[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)(g.A, { ...eE.statusProvisioningNoSeparateCharge })), (i[1] = e))
            : (e = i[1]),
          e
        )
      }
      return n?.pricingStatus === "final"
        ? n.rateDisplay
        : (i[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, s.jsx)(g.A, { ...eE.statusProvisioningApprovalRates })), (i[2] = a))
            : (a = i[2]),
          a)
    }
    function eD(e) {
      let a,
        i,
        n = (0, t.c)(11),
        { summary: r } = e,
        o = (0, Z.A)()
      if ("no" === r.additionalLocations) {
        let e
        return (
          n[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)(g.A, { ...eE.none })), (n[0] = e))
            : (e = n[0]),
          e
        )
      }
      if ("unsure" === r.additionalLocations) {
        let e
        return (
          n[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)(g.A, { ...eE.additionalLocationsUnconfirmed })), (n[1] = e))
            : (e = n[1]),
          e
        )
      }
      if (n[2] !== o || n[3] !== r.additionalCountries) {
        let e, i
        ;(n[5] !== r.additionalCountries
          ? ((e = r.additionalCountries ?? []), (n[5] = r.additionalCountries), (n[6] = e))
          : (e = n[6]),
          n[7] !== o
            ? ((i = (e) => o.formatDisplayName(e, { type: "region" }) ?? e), (n[7] = o), (n[8] = i))
            : (i = n[8]),
          (a = o.formatList(e.map(i))),
          (n[2] = o),
          (n[3] = r.additionalCountries),
          (n[4] = a))
      } else a = n[4]
      return (
        n[9] !== a
          ? ((i = (0, s.jsx)(g.A, { ...eE.policyReviewRequired, values: { locations: a } })), (n[9] = a), (n[10] = i))
          : (i = n[10]),
        i
      )
    }
    var eq = i("UgNy")
    function eU(e) {
      let a,
        i,
        r,
        o,
        l,
        c,
        d,
        u,
        f,
        h,
        _,
        A,
        x = (0, t.c)(51),
        {
          application: b,
          identity: v,
          disabled: I,
          surface: S,
          onCanceled: T,
          onRefresh: j,
          onPendingChange: N,
          buttonLabel: C,
          buttonColor: O,
        } = e,
        E = void 0 === O ? "dangerOutline" : O,
        L = (0, n.Ul)(y.YV),
        [M, w] = (0, p.useState)(!1)
      ;(x[0] !== b || x[1] !== v
        ? ((a = () =>
            (async function (e, a) {
              let i = W(
                await R.Request.safeRequest("post", "/rosalind/access/applications/{application_reference}/cancel", {
                  parameters: { path: { application_reference: a.bioagentsApplicationReference } },
                  requestBody: { organizationId: a.organizationId },
                  additionalHeaders: { [P.zBc]: e.accountId },
                  expectedIdentity: e,
                  expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 502, 503],
                  retry: !1,
                }),
                a,
              )
              if ("canceled" !== i.state || i.canCancel) throw Error("The cancellation was not confirmed")
              return i
            })(v, b)),
          (x[0] = b),
          (x[1] = v),
          (x[2] = a))
        : (a = x[2]),
        x[3] !== L || x[4] !== N || x[5] !== S
          ? ((i = () => {
              ;(N?.(!0),
                U(
                  L,
                  "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_CANCEL",
                  "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_STARTED",
                  S,
                ))
            }),
            (x[3] = L),
            (x[4] = N),
            (x[5] = S),
            (x[6] = i))
          : (i = x[6]),
        x[7] !== L || x[8] !== S
          ? ((r = () =>
              U(
                L,
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_CANCEL",
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_FAILED",
                S,
              )),
            (x[7] = L),
            (x[8] = S),
            (x[9] = r))
          : (r = x[9]),
        x[10] !== L || x[11] !== T || x[12] !== S
          ? ((o = (e) => {
              ;(U(
                L,
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_CANCEL",
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_SUCCEEDED",
                S,
              ),
                T?.(e),
                w(!1))
            }),
            (x[10] = L),
            (x[11] = T),
            (x[12] = S),
            (x[13] = o))
          : (o = x[13]),
        x[14] !== N || x[15] !== j
          ? ((l = () => {
              ;(N?.(!1), j())
            }),
            (x[14] = N),
            (x[15] = j),
            (x[16] = l))
          : (l = x[16]),
        x[17] !== a || x[18] !== i || x[19] !== r || x[20] !== o || x[21] !== l
          ? ((c = { mutationFn: a, retry: !1, onMutate: i, onError: r, onSuccess: o, onSettled: l }),
            (x[17] = a),
            (x[18] = i),
            (x[19] = r),
            (x[20] = o),
            (x[21] = l),
            (x[22] = c))
          : (c = x[22]))
      let z = (0, $.n)(c),
        k = I || z.isPending || z.isSuccess,
        D = (0, p.useRef)(!1)
      x[23] !== b.canCancel || x[24] !== k || x[25] !== z || x[26] !== L || x[27] !== S
        ? ((d = () => {
            !k &&
              b.canCancel &&
              (z.reset(),
              (D.current = !0),
              U(
                L,
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_CANCELLATION_CONFIRMATION",
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_STARTED",
                S,
              ),
              w(!0))
          }),
          (x[23] = b.canCancel),
          (x[24] = k),
          (x[25] = z),
          (x[26] = L),
          (x[27] = S),
          (x[28] = d))
        : (d = x[28])
      let q = d
      x[29] !== z.isPending || x[30] !== L || x[31] !== S
        ? ((u = () => {
            z.isPending ||
              (D.current &&
                ((D.current = !1),
                U(
                  L,
                  "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_CANCELLATION_CONFIRMATION",
                  "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_CANCELLED",
                  S,
                )),
              w(!1))
          }),
          (x[29] = z.isPending),
          (x[30] = L),
          (x[31] = S),
          (x[32] = u))
        : (u = x[32])
      let H = u
      return (
        x[33] !== b.canCancel || x[34] !== k || x[35] !== E || x[36] !== C || x[37] !== q
          ? ((f =
              (b.canCancel || null != C) &&
              (0, s.jsx)(m.$, {
                color: E,
                size: "dialogAction",
                type: "button",
                disabled: k || !b.canCancel,
                onClick: q,
                children: (0, s.jsx)(g.A, { ...(C ?? eE.cancelApplication) }),
              })),
            (x[33] = b.canCancel),
            (x[34] = k),
            (x[35] = E),
            (x[36] = C),
            (x[37] = q),
            (x[38] = f))
          : (f = x[38]),
        x[39] !== z.isSuccess
          ? ((h =
              z.isSuccess &&
              (0, s.jsx)("p", { role: "status", children: (0, s.jsx)(g.A, { ...eE.cancellationComplete }) })),
            (x[39] = z.isSuccess),
            (x[40] = h))
          : (h = x[40]),
        x[41] !== b.canCancel || x[42] !== k || x[43] !== z || x[44] !== H || x[45] !== M
          ? ((_ =
              M &&
              b.canCancel &&
              (0, s.jsx)(eq.v, {
                pending: z.isPending,
                failed: z.isError,
                disabled: k || !b.canCancel,
                onClose: H,
                onConfirm: () => z.mutate(),
              })),
            (x[41] = b.canCancel),
            (x[42] = k),
            (x[43] = z),
            (x[44] = H),
            (x[45] = M),
            (x[46] = _))
          : (_ = x[46]),
        x[47] !== f || x[48] !== h || x[49] !== _
          ? ((A = (0, s.jsxs)(s.Fragment, { children: [f, h, _] })), (x[47] = f), (x[48] = h), (x[49] = _), (x[50] = A))
          : (A = x[50]),
        A
      )
    }
    function eH(e) {
      let a,
        i,
        n,
        o = (0, t.c)(9),
        { organizationId: l, reapply: c } = e,
        [d] = (0, r.ok)()
      o[0] !== l || o[1] !== c || o[2] !== d
        ? ((a = new URLSearchParams(d)).set("organization_id", l),
          a.delete("organizationId"),
          c && (a.set("reapply", c), a.delete("view_canceled"), a.delete("workspace_handoff")),
          (o[0] = l),
          (o[1] = c),
          (o[2] = d),
          (o[3] = a))
        : (a = o[3])
      let u = `/rosalind/application?${a}`
      return (
        o[4] !== c
          ? ((i = c
              ? (0, s.jsx)(g.A, {
                  id: "chatgpt.rosalind_access.tracking.reapply.button",
                  defaultMessage: "Apply again",
                })
              : (0, s.jsx)(g.A, {
                  id: "chatgpt.rosalind_access.tracking.no_application.upgrade_access.button",
                  defaultMessage: "Apply for access",
                })),
            (o[4] = c),
            (o[5] = i))
          : (i = o[5]),
        o[6] !== u || o[7] !== i
          ? ((n = (0, s.jsx)(m.z, { to: u, color: "secondary", size: "dialogAction", children: i })),
            (o[6] = u),
            (o[7] = i),
            (o[8] = n))
          : (n = o[8]),
        n
      )
    }
    function eB(e) {
      var a
      let i,
        r,
        o,
        l,
        c,
        d,
        u,
        f,
        h,
        _,
        A,
        x,
        b,
        v,
        I,
        S,
        T,
        j,
        N,
        C,
        O,
        E,
        L,
        M,
        w,
        z,
        D,
        q = (0, t.c)(103),
        { surface: H, application: B, organization: G, identity: V, queryKey: Y, refreshing: Z, onRefresh: X } = e,
        J = void 0 === H ? "CHATGPT_WEB_ROSALIND_APPLICATION_SURFACE_STATUS" : H,
        Q = (0, F.jE)(),
        ee = (0, n.Ul)(y.YV),
        [ea, ei] = (0, p.useState)(!1)
      ;(q[0] !== B || q[1] !== V
        ? ((i = (e) =>
            (async function (e, a, i) {
              if (i.organizationId !== a.organizationId) throw Error("The approval belongs to another organization")
              let s = W(
                  await R.Request.safeRequest(
                    "post",
                    "/rosalind/access/applications/{application_reference}/approve-provisioning",
                    {
                      parameters: { path: { application_reference: a.bioagentsApplicationReference } },
                      requestBody: i,
                      additionalHeaders: { [P.zBc]: e.accountId },
                      expectedIdentity: e,
                      expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 502, 503],
                      retry: !1,
                    },
                  ),
                  a,
                ),
                t = s.provisioningApproval
              if (
                "approved" !== s.state ||
                !1 !== s.canApproveProvisioning ||
                (null == s.customerAcceptedAt &&
                  (t?.acceptedResearchTerms !== !0 ||
                    t.pricingVersion !== i.pricingVersion ||
                    t.researchTermsVersion !== i.researchTermsVersion ||
                    t.requestedResearchMode !== i.requestedResearchMode)) ||
                (!0 === s.requiresInternalApiAcknowledgement && t?.acceptedInternalApiOnly !== !0)
              )
                throw Error("The provisioning approval was not confirmed")
              return s
            })(V, B, e)),
          (q[0] = B),
          (q[1] = V),
          (q[2] = i))
        : (i = q[2]),
        q[3] !== ee || q[4] !== J
          ? ((r = () =>
              U(
                ee,
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_APPROVE_PROVISIONING",
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_STARTED",
                J,
              )),
            (o = () =>
              U(
                ee,
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_APPROVE_PROVISIONING",
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_FAILED",
                J,
              )),
            (q[3] = ee),
            (q[4] = J),
            (q[5] = r),
            (q[6] = o))
          : ((r = q[5]), (o = q[6])),
        q[7] !== ee || q[8] !== Q || q[9] !== Y || q[10] !== J
          ? ((l = (e) => {
              ;(U(
                ee,
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_APPROVE_PROVISIONING",
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_SUCCEEDED",
                J,
              ),
                Q.setQueryData(Y, e))
            }),
            (q[7] = ee),
            (q[8] = Q),
            (q[9] = Y),
            (q[10] = J),
            (q[11] = l))
          : (l = q[11]),
        q[12] !== X || q[13] !== i || q[14] !== r || q[15] !== o || q[16] !== l
          ? ((c = { mutationFn: i, retry: !1, onMutate: r, onError: o, onSuccess: l, onSettled: X }),
            (q[12] = X),
            (q[13] = i),
            (q[14] = r),
            (q[15] = o),
            (q[16] = l),
            (q[17] = c))
          : (c = q[17]))
      let es = (0, $.n)(c)
      q[18] !== B
        ? ((d =
            "action_required" === (a = B).state && "applicant" !== a.actionOwner
              ? { headline: eE.statusInProgressHeadline, description: eE.statusInProgressDescription }
              : {
                  submitted: { headline: eE.statusSubmittedHeadline, description: eE.statusSubmittedDescription },
                  in_progress: { headline: eE.statusInProgressHeadline, description: eE.statusInProgressDescription },
                  action_required: {
                    headline: eE.statusActionRequiredHeadline,
                    description: eE.statusActionRequiredDescription,
                  },
                  approved: { headline: eE.statusApprovedHeadline, description: eE.statusApprovedDescription },
                  access_granted: {
                    headline: eE.statusAccessGrantedHeadline,
                    description: eE.statusAccessGrantedDescription,
                  },
                  denied: { headline: eE.statusDeniedHeadline, description: eE.statusDeniedDescription },
                  revoked: { headline: eE.statusRevokedHeadline, description: eE.statusRevokedDescription },
                  canceled: { headline: eE.statusCanceledHeadline, description: eE.statusCanceledDescription },
                }[a.state]),
          (q[18] = B),
          (q[19] = d))
        : (d = q[19])
      let et = d
      q[20] !== B ? ((u = eN(B)), (q[20] = B), (q[21] = u)) : (u = q[21])
      let en = u,
        er = Z || ea || es.isPending
      ;(q[22] !== Q || q[23] !== Y
        ? ((f = (e) => {
            Q.setQueryData(Y, e)
          }),
          (q[22] = Q),
          (q[23] = Y),
          (q[24] = f))
        : (f = q[24]),
        q[25] !== B || q[26] !== V || q[27] !== X || q[28] !== J || q[29] !== f
          ? ((h = { application: B, identity: V, surface: J, onCanceled: f, onRefresh: X, onPendingChange: ei }),
            (q[25] = B),
            (q[26] = V),
            (q[27] = X),
            (q[28] = J),
            (q[29] = f),
            (q[30] = h))
          : (h = q[30]))
      let eo = h,
        el = B.applicationSummary ?? B.approvalSummary
      if (
        (q[31] !== en || q[32] !== B.requiredAction || q[33] !== er || q[34] !== eo || q[35] !== G || q[36] !== J
          ? ((_ =
              en &&
              (0, s.jsxs)("section", {
                className: "flex flex-col items-start gap-3",
                children: [
                  (0, s.jsx)("h3", { className: "text-lg font-semibold", children: (0, s.jsx)(g.A, { ...en.title }) }),
                  (0, s.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, s.jsx)(g.A, { ...en.description, values: en.descriptionValues }),
                  }),
                  en.buttonLabel &&
                    (en.href
                      ? "CHATGPT_WEB_ROSALIND_APPLICATION_SURFACE_FORM" !== J &&
                        (0, s.jsx)(eH, { organizationId: G.id })
                      : (0, s.jsx)(eU, {
                          ...eo,
                          buttonLabel: en.buttonLabel,
                          buttonColor: "secondary",
                          disabled: er || "sign_enterprise_zdr_agreement" === B.requiredAction,
                        })),
                ],
              })),
            (q[31] = en),
            (q[32] = B.requiredAction),
            (q[33] = er),
            (q[34] = eo),
            (q[35] = G),
            (q[36] = J),
            (q[37] = _))
          : (_ = q[37]),
        q[38] !== B || q[39] !== es || q[40] !== er || q[41] !== X)
      )
        ((A =
          "approved" === B.state &&
          (0, s.jsx)(
            eM,
            {
              application: B,
              showApplicationSummary: !1,
              pending: es.isPending,
              refreshing: er,
              error: es.isError,
              onApprove: (e) => es.mutate(e),
              onRetry: X,
            },
            JSON.stringify([
              B.bioagentsApplicationReference,
              B.canApproveProvisioning,
              B.requestedResearchMode,
              B.provisioningPricing,
              B.researchTermsVersion,
              B.researchTermsUrl,
              B.approvalSummary,
              B.requiresInternalApiAcknowledgement,
            ]),
          )),
          (q[38] = B),
          (q[39] = es),
          (q[40] = er),
          (q[41] = X),
          (q[42] = A))
      else A = q[42]
      ;(q[43] !== B.activeTier || q[44] !== B.bioagentsApplicationReference || q[45] !== B.state || q[46] !== el
        ? ((x =
            (null == el || ("access_granted" === B.state && B.activeTier)) &&
            (0, s.jsxs)("dl", {
              className: "flex flex-col gap-4",
              children: [
                null == el &&
                  (0, s.jsx)(ey, { label: eE.confirmationReferenceLabel, children: B.bioagentsApplicationReference }),
                "access_granted" === B.state &&
                  B.activeTier &&
                  (0, s.jsxs)("div", {
                    className: "flex flex-col gap-1 text-sm",
                    children: [
                      (0, s.jsx)("dt", {
                        className: "text-secondary",
                        children: (0, s.jsx)(g.A, {
                          id: "chatgpt.rosalind_access.tracking.current_tier.label",
                          defaultMessage: "Current tier",
                        }),
                      }),
                      (0, s.jsx)("dd", {
                        children:
                          "discovery" === B.activeTier
                            ? (0, s.jsx)(g.A, {
                                id: "chatgpt.rosalind_access.tracking.current_tier.discovery",
                                defaultMessage: "Rosalind Discovery",
                              })
                            : (0, s.jsx)(g.A, {
                                id: "chatgpt.rosalind_access.tracking.current_tier.research",
                                defaultMessage: "Rosalind Research",
                              }),
                      }),
                    ],
                  }),
              ],
            })),
          (q[43] = B.activeTier),
          (q[44] = B.bioagentsApplicationReference),
          (q[45] = B.state),
          (q[46] = el),
          (q[47] = x))
        : (x = q[47]),
        q[48] !== B.state
          ? ((b =
              ["submitted", "in_progress", "action_required", "approved"].includes(B.state) &&
              (0, s.jsxs)("p", {
                className: "flex items-center gap-2 text-xs text-secondary",
                children: [(0, s.jsx)(K.$Rp, {}), (0, s.jsx)(g.A, { ...k.noAccess })],
              })),
            (q[48] = B.state),
            (q[49] = b))
          : (b = q[49]),
        q[50] !== ee || q[51] !== X || q[52] !== J
          ? ((v = () => {
              ;(U(
                ee,
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_RETRY_STATUS",
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_STARTED",
                J,
              ),
                X())
            }),
            (q[50] = ee),
            (q[51] = X),
            (q[52] = J),
            (q[53] = v))
          : (v = q[53]),
        q[54] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = (0, s.jsx)(g.A, { ...k.refresh })), (S = (0, s.jsx)(K.Imh, {})), (q[54] = I), (q[55] = S))
          : ((I = q[54]), (S = q[55])),
        q[56] !== er || q[57] !== v
          ? ((T = (0, s.jsxs)(m.$, {
              color: "secondary",
              size: "dialogAction",
              type: "button",
              disabled: er,
              onClick: v,
              children: [I, S],
            })),
            (q[56] = er),
            (q[57] = v),
            (q[58] = T))
          : (T = q[58]),
        q[59] !== B.state || q[60] !== er || q[61] !== eo || q[62] !== J
          ? ((j =
              ("CHATGPT_WEB_ROSALIND_APPLICATION_SURFACE_FORM" !== J ||
                ["submitted", "in_progress", "action_required"].includes(B.state)) &&
              (0, s.jsx)(eU, { ...eo, disabled: er })),
            (q[59] = B.state),
            (q[60] = er),
            (q[61] = eo),
            (q[62] = J),
            (q[63] = j))
          : (j = q[63]),
        q[64] !== B.bioagentsApplicationReference || q[65] !== B.state || q[66] !== G
          ? ((N =
              "canceled" === B.state &&
              (0, s.jsx)(eH, { organizationId: G.id, reapply: B.bioagentsApplicationReference })),
            (q[64] = B.bioagentsApplicationReference),
            (q[65] = B.state),
            (q[66] = G),
            (q[67] = N))
          : (N = q[67]),
        q[68] !== T || q[69] !== j || q[70] !== N
          ? ((C = (0, s.jsxs)("div", { className: "flex flex-wrap items-center gap-3", children: [T, j, N] })),
            (q[68] = T),
            (q[69] = j),
            (q[70] = N),
            (q[71] = C))
          : (C = q[71]),
        q[72] !== _ || q[73] !== A || q[74] !== x || q[75] !== b || q[76] !== C
          ? ((O = (0, s.jsxs)("div", { className: "flex w-full flex-col gap-4", children: [_, A, x, b, C] })),
            (q[72] = _),
            (q[73] = A),
            (q[74] = x),
            (q[75] = b),
            (q[76] = C),
            (q[77] = O))
          : (O = q[77]))
      let ec = O
      if (null != el) {
        let e, a
        return (
          q[78] !== B.state || q[79] !== et
            ? ((e =
                ["denied", "revoked", "canceled", "access_granted"].includes(B.state) &&
                (0, s.jsxs)("section", {
                  className: "flex flex-col gap-2",
                  children: [
                    (0, s.jsx)("h2", {
                      className: "text-lg font-semibold",
                      children: (0, s.jsx)(g.A, { ...et.headline }),
                    }),
                    (0, s.jsx)("p", {
                      className: "text-sm text-secondary",
                      children: (0, s.jsx)(g.A, { ...et.description }),
                    }),
                  ],
                })),
              (q[78] = B.state),
              (q[79] = et),
              (q[80] = e))
            : (e = q[80]),
          q[81] !== B || q[82] !== ec || q[83] !== G || q[84] !== el || q[85] !== e
            ? ((a = (0, s.jsx)(eS, {
                application: B,
                answers: el,
                organization: G,
                applicantName: B.applicantName,
                applicantEmail: B.applicantEmail,
                footer: ec,
                children: e,
              })),
              (q[81] = B),
              (q[82] = ec),
              (q[83] = G),
              (q[84] = el),
              (q[85] = e),
              (q[86] = a))
            : (a = q[86]),
          a
        )
      }
      return (
        q[87] !== G.name
          ? ((E = (0, s.jsx)("p", { className: "text-sm font-medium", children: G.name })),
            (q[87] = G.name),
            (q[88] = E))
          : (E = q[88]),
        q[89] !== et.headline
          ? ((L = (0, s.jsx)("h2", {
              className: "text-xl font-semibold",
              children: (0, s.jsx)(g.A, { ...et.headline }),
            })),
            (q[89] = et.headline),
            (q[90] = L))
          : (L = q[90]),
        q[91] !== et.description
          ? ((M = (0, s.jsx)("p", {
              className: "text-sm text-secondary",
              children: (0, s.jsx)(g.A, { ...et.description }),
            })),
            (q[91] = et.description),
            (q[92] = M))
          : (M = q[92]),
        q[93] !== E || q[94] !== L || q[95] !== M
          ? ((w = (0, s.jsxs)("header", { className: "flex flex-col gap-2", children: [E, L, M] })),
            (q[93] = E),
            (q[94] = L),
            (q[95] = M),
            (q[96] = w))
          : (w = q[96]),
        q[97] !== B ? ((z = (0, s.jsx)(eG, { application: B })), (q[97] = B), (q[98] = z)) : (z = q[98]),
        q[99] !== ec || q[100] !== w || q[101] !== z
          ? ((D = (0, s.jsxs)("article", { className: "flex flex-col gap-6", children: [w, z, ec] })),
            (q[99] = ec),
            (q[100] = w),
            (q[101] = z),
            (q[102] = D))
          : (D = q[102]),
        D
      )
    }
    function eG(e) {
      let a,
        i,
        n,
        r = (0, t.c)(9),
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
      let l = a[o.state],
        c = eE.decisionStage
      "denied" === o.state ? (c = eE.deniedStatus) : "approved" !== o.state || eO(o) || (c = eE.actionRequiredStatus)
      let d = "canceled" === o.state ? eE.canceledStatus : eE.submittedStatus,
        u =
          "action_required" === o.state && "applicant" === o.actionOwner
            ? eE.actionRequiredStatus
            : eE.statusInReviewBadge,
        p = "revoked" === o.state ? eE.accessRevokedStatus : eE.accessGrantedStatus
      r[1] !== c || r[2] !== d || r[3] !== u || r[4] !== p
        ? ((i = [d, u, c, p]), (r[1] = c), (r[2] = d), (r[3] = u), (r[4] = p), (r[5] = i))
        : (i = r[5])
      let f = i
      return (
        r[6] !== f || r[7] !== l
          ? ((n = (0, s.jsx)("ol", {
              className: "flex flex-wrap gap-4 text-sm select-none",
              children: f.map((e, a) =>
                (0, s.jsx)(
                  "li",
                  {
                    "aria-current": a === l ? "step" : void 0,
                    className: a === l ? "font-medium" : "text-secondary",
                    children: (0, s.jsx)(g.A, { ...e }),
                  },
                  e.id,
                ),
              ),
            })),
            (r[6] = f),
            (r[7] = l),
            (r[8] = n))
          : (n = r[8]),
        n
      )
    }
    var eV = i("zLIa")
    let eW = (0, x.YK)({
      heading: { id: "chatgpt.rosalind_access.upgrade.heading", defaultMessage: "Request Rosalind Research" },
      description: {
        id: "chatgpt.rosalind_access.upgrade.eligibility.description",
        defaultMessage: "The upgrade form will request more information for further review.",
      },
      label: {
        id: "chatgpt.rosalind_access.upgrade.details.label",
        defaultMessage: "Why do you need Rosalind Research?",
      },
      help: {
        id: "chatgpt.rosalind_access.upgrade.details.help_text",
        defaultMessage:
          "Describe your use case and include 1\u20132 example prompts or tasks. If you have used Rosalind Discovery, explain any limitations you encountered.",
      },
      accessUnchanged: {
        id: "chatgpt.rosalind_access.upgrade.privacy.help_text",
        defaultMessage: "This request does not change your current access or your privacy and data-retention choices.",
      },
      submitting: {
        id: "chatgpt.rosalind_access.upgrade.submit.pending_label",
        defaultMessage: "Submitting request\u2026",
      },
      submit: { id: "chatgpt.rosalind_access.upgrade.submit.label", defaultMessage: "Submit upgrade request" },
      pending: {
        id: "chatgpt.rosalind_access.upgrade.status.pending",
        defaultMessage: "Your Rosalind Research request is under review. You can continue using Rosalind Discovery.",
      },
      approved: {
        id: "chatgpt.rosalind_access.upgrade.status.approved",
        defaultMessage:
          "Your Rosalind Research request is approved and awaiting activation. Your current access is still Rosalind Discovery.",
      },
      declined: {
        id: "chatgpt.rosalind_access.upgrade.status.declined",
        defaultMessage:
          "Your Rosalind Research request was not approved. Your current access is still Rosalind Discovery.",
      },
      currentAccess: {
        id: "chatgpt.rosalind_access.customer.upgrade.current_access",
        defaultMessage: "Current access: Rosalind Discovery",
      },
      privacy: {
        id: "chatgpt.rosalind_access.research.purpose.privacy.help_text",
        defaultMessage:
          "Do not include patient data, personal information, personnel records, genomic sequences, laboratory protocols, or confidential materials.",
      },
      failed: {
        id: "chatgpt.rosalind_access.customer.upgrade.failed",
        defaultMessage: "We couldn\u2019t confirm your request. Refresh status or try submitting again.",
      },
    })
    function eY(e) {
      let a,
        i,
        n,
        r,
        o,
        l,
        c,
        d,
        u,
        f,
        h,
        _,
        A = (0, t.c)(32),
        { application: x, identity: b, queryKey: v, refreshing: y, onRefresh: S } = e,
        T = (0, p.useId)(),
        [j, N] = (0, p.useState)(""),
        C = (0, p.useRef)(null),
        O = (0, p.useRef)(!1),
        E = (0, F.jE)()
      ;(A[0] !== x || A[1] !== b
        ? ((a = (e) => (
            null == C.current && (C.current = crypto.randomUUID()),
            (async function (e, a, i, s) {
              let t = W(
                await R.Request.safeRequest(
                  "post",
                  "/rosalind/access/applications/{application_reference}/research-upgrades",
                  {
                    parameters: {
                      path: { application_reference: a.bioagentsApplicationReference },
                      header: { "Idempotency-Key": s },
                    },
                    requestBody: { organizationId: a.organizationId, details: i },
                    additionalHeaders: { [P.zBc]: e.accountId, "Idempotency-Key": s },
                    expectedIdentity: e,
                    expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 502, 503],
                    retry: !1,
                  },
                ),
                a,
              )
              if (null == t.researchUpgrade || "access_granted" !== t.state || "discovery" !== t.activeTier)
                throw Error("The Research upgrade request was not confirmed")
              return t
            })(b, x, e, C.current)
          )),
          (A[0] = x),
          (A[1] = b),
          (A[2] = a))
        : (a = A[2]),
        A[3] !== E || A[4] !== v
          ? ((i = (e) => {
              ;(E.setQueryData(v, e), N(""))
            }),
            (A[3] = E),
            (A[4] = v),
            (A[5] = i))
          : (i = A[5]),
        A[6] !== S
          ? ((n = () => {
              ;((O.current = !1), S())
            }),
            (A[6] = S),
            (A[7] = n))
          : (n = A[7]),
        A[8] !== a || A[9] !== i || A[10] !== n
          ? ((r = { mutationFn: a, retry: !1, onSuccess: i, onSettled: n, gcTime: 0 }),
            (A[8] = a),
            (A[9] = i),
            (A[10] = n),
            (A[11] = r))
          : (r = A[11]))
      let L = (0, $.n)(r),
        M = x.researchUpgrade ?? L.data?.researchUpgrade
      if ("access_granted" !== x.state || "discovery" !== x.activeTier || (!x.canRequestResearchUpgrade && null == M))
        return null
      A[12] !== j
        ? ((o = j.trim().length >= I.XO.researchPurpose.min && j.length <= I.XO.researchPurpose.max),
          (A[12] = j),
          (A[13] = o))
        : (o = A[13])
      let w = o,
        z = `${T}-heading`,
        k = `${T}-heading`
      return (
        A[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, s.jsx)(g.A, { ...eW.heading })), (A[14] = l))
          : (l = A[14]),
        A[15] !== k
          ? ((c = (0, s.jsx)("h3", { id: k, className: "text-lg font-semibold", children: l })),
            (A[15] = k),
            (A[16] = c))
          : (c = A[16]),
        A[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, s.jsx)("p", {
              className: "text-sm text-secondary",
              children: (0, s.jsx)(g.A, { ...eW.description }),
            })),
            (A[17] = d))
          : (d = A[17]),
        A[18] !== c
          ? ((u = (0, s.jsxs)("div", { className: "flex flex-col gap-2", children: [c, d] })), (A[18] = c), (A[19] = u))
          : (u = A[19]),
        A[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, s.jsx)("p", { className: "text-sm", children: (0, s.jsx)(g.A, { ...eW.currentAccess }) })),
            (A[20] = f))
          : (f = A[20]),
        A[21] !== j || A[22] !== T || A[23] !== L || A[24] !== y || A[25] !== M || A[26] !== w
          ? ((h = M
              ? (0, s.jsx)("p", {
                  role: "status",
                  className: "text-sm text-secondary",
                  children: (0, s.jsx)(g.A, { ...eW[M.status] }),
                })
              : (0, s.jsxs)("form", {
                  className: "flex flex-col items-start gap-4",
                  "aria-busy": L.isPending,
                  onSubmit: (e) => {
                    ;(e.preventDefault(), !w || y || O.current || null != M || ((O.current = !0), L.mutate(j.trim())))
                  },
                  children: [
                    (0, s.jsxs)("div", {
                      className: "flex w-full flex-col gap-2",
                      children: [
                        (0, s.jsx)("label", {
                          htmlFor: `${T}-details`,
                          className: "text-sm font-medium",
                          children: (0, s.jsx)(g.A, { ...eW.label }),
                        }),
                        (0, s.jsx)("p", {
                          id: `${T}-help`,
                          className: "text-sm text-secondary",
                          children: (0, s.jsx)(g.A, { ...eW.help }),
                        }),
                        (0, s.jsx)(eV.TM, {
                          id: `${T}-details`,
                          "aria-describedby": `${T}-help ${T}-privacy${L.isError ? ` ${T}-error` : ""}`,
                          maxLength: I.XO.researchPurpose.max,
                          minLength: I.XO.researchPurpose.min,
                          required: !0,
                          rows: 5,
                          readOnly: L.isPending,
                          value: j,
                          onChange: (e) => N(e.target.value),
                        }),
                        (0, s.jsx)("p", {
                          id: `${T}-privacy`,
                          className: "text-sm text-secondary",
                          children: (0, s.jsx)(g.A, { ...eW.privacy }),
                        }),
                        L.isError &&
                          (0, s.jsx)("p", {
                            id: `${T}-error`,
                            role: "alert",
                            className: "text-sm text-danger",
                            children: (0, s.jsx)(g.A, { ...eW.failed }),
                          }),
                      ],
                    }),
                    (0, s.jsx)("p", {
                      className: "text-sm text-secondary",
                      children: (0, s.jsx)(g.A, { ...eW.accessUnchanged }),
                    }),
                    (0, s.jsx)(m.$, {
                      type: "submit",
                      color: "primary",
                      size: "dialogAction",
                      disabled: !w || y || L.isPending,
                      loading: L.isPending,
                      children: (0, s.jsx)(g.A, { ...(L.isPending ? eW.submitting : eW.submit) }),
                    }),
                  ],
                })),
            (A[21] = j),
            (A[22] = T),
            (A[23] = L),
            (A[24] = y),
            (A[25] = M),
            (A[26] = w),
            (A[27] = h))
          : (h = A[27]),
        A[28] !== u || A[29] !== h || A[30] !== z
          ? ((_ = (0, s.jsxs)("section", {
              className: "flex flex-col gap-4",
              "aria-labelledby": z,
              children: [u, f, h],
            })),
            (A[28] = u),
            (A[29] = h),
            (A[30] = z),
            (A[31] = _))
          : (_ = A[31]),
        _
      )
    }
    function eF(e) {
      let a,
        i,
        s = (0, t.c)(4),
        { view: r } = e,
        o = (0, n.Ul)(y.YV),
        l = (0, p.useRef)(null)
      return (
        s[0] !== o || s[1] !== r
          ? ((a = () => {
              o !== y.Cg && l.current !== r && ((l.current = r), o.logProductEvent(q.Si, { view: r }))
            }),
            (i = [o, r]),
            (s[0] = o),
            (s[1] = r),
            (s[2] = a),
            (s[3] = i))
          : ((a = s[2]), (i = s[3])),
        (0, p.useEffect)(a, i),
        null
      )
    }
    var e$ = i("SPnB")
    i("X1mr")
    var eK = i("ReGc"),
      eZ = i("WuIC")
    function eX(e) {
      let a,
        i,
        r = (0, t.c)(9),
        { application: l } = e,
        c = (0, o.As)(),
        d = (0, n.Ul)(e$.o8),
        { data: u, isError: p, isPending: g } = (0, n._U)(f.sE, c.accountId),
        m = (0, n.Ul)(eK.a)
      if (d !== c.userId || p || g || null == u || ("approved" !== l.state && "access_granted" !== l.state)) return null
      if (r[0] !== l || r[1] !== u.account_ordering || r[2] !== u.accounts) {
        for (let e of ((a = []), u.account_ordering)) {
          let i = u.accounts[e]?.account
          null != i &&
            i.organization_id === l.organizationId &&
            null != i.account_id &&
            /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(i.account_id) &&
            "workspace" === i.structure &&
            !i.is_deactivated &&
            ["account-owner", "account-admin", "standard-user"].includes(i.account_user_role ?? "") &&
            "k12" !== i.plan_type &&
            (0, A.uz)(i.plan_type) &&
            a.push({
              workspaceId: i.account_id,
              workspaceName: i.name?.trim() || i.account_id,
              canConfigure: "account-owner" === i.account_user_role || "account-admin" === i.account_user_role,
            })
        }
        ;((r[0] = l), (r[1] = u.account_ordering), (r[2] = u.accounts), (r[3] = a))
      } else a = r[3]
      if (!a.some((e) => e.workspaceId === c.accountId)) return null
      let h = null
      if ((m?.data != null && (h = null != m.data.chatGptDesktopAuthOrigin), null == h)) return null
      let _ = "access_granted" === l.state,
        x = h ? "https://admin.api.openai.org" : "https://admin.openai.com"
      return (
        r[4] !== c.email || r[5] !== _ || r[6] !== x || r[7] !== a
          ? ((i = (0, s.jsx)(eJ, { workspaces: a, accessGranted: _, portalOrigin: x, email: c.email })),
            (r[4] = c.email),
            (r[5] = _),
            (r[6] = x),
            (r[7] = a),
            (r[8] = i))
          : (i = r[8]),
        i
      )
    }
    function eJ(e) {
      let a,
        i,
        n,
        r,
        o,
        l = (0, t.c)(15),
        { workspaces: c, accessGranted: d, portalOrigin: u, email: p } = e
      if (0 === c.length) return null
      if (
        (l[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, s.jsx)("h3", {
              className: "text-lg font-semibold",
              children: (0, s.jsx)(g.A, {
                id: "chatgpt.rosalind_access.tracking.workspace_model_settings.heading",
                defaultMessage: "Configure workspace model access",
              }),
            })),
            (l[0] = a))
          : (a = l[0]),
        l[1] !== d
          ? ((i = (0, s.jsx)("p", {
              className: "text-sm text-secondary",
              children: d
                ? (0, s.jsx)(g.A, {
                    id: "chatgpt.rosalind_access.tracking.workspace_model_settings.active.description",
                    defaultMessage:
                      "Your organization\u2019s GPT-Rosalind access is active. Workspace owners and admins can turn on GPT-Rosalind by configuring user access in Admin Console",
                  })
                : (0, s.jsx)(g.A, {
                    id: "chatgpt.rosalind_access.tracking.workspace_model_settings.acceptance_required.description",
                    defaultMessage:
                      "Activation can take a few minutes. Workspace owners and admins can turn on GPT-Rosalind by configuring user access in Admin Console",
                  }),
            })),
            (l[1] = d),
            (l[2] = i))
          : (i = l[2]),
        l[3] !== p || l[4] !== u || l[5] !== c)
      ) {
        let e
        ;(l[7] !== p || l[8] !== u
          ? ((e = (e) => {
              let a = new URL(`/workspace/${encodeURIComponent(e.workspaceId)}/models?tab=workspace`, u)
              return (
                a.searchParams.set("redirectfrom", "chatgpt"),
                p && a.searchParams.set("login_hint", p),
                (0, eZ.m)(a),
                (0, s.jsx)(
                  eC.G,
                  {
                    href: a.href,
                    initiator: "external_link",
                    appearance: "button",
                    underline: "none",
                    children: (0, s.jsx)(g.A, {
                      id: "chatgpt.rosalind_access.tracking.workspace_model_settings.configure.button",
                      defaultMessage: "Configure {workspaceName}",
                      values: { workspaceName: e.workspaceName },
                    }),
                  },
                  e.workspaceId,
                )
              )
            }),
            (l[7] = p),
            (l[8] = u),
            (l[9] = e))
          : (e = l[9]),
          (n = c.filter(eQ).map(e)),
          (l[3] = p),
          (l[4] = u),
          (l[5] = c),
          (l[6] = n))
      } else n = l[6]
      return (
        l[10] !== n
          ? ((r = (0, s.jsx)("div", { className: "flex flex-wrap gap-2", children: n })), (l[10] = n), (l[11] = r))
          : (r = l[11]),
        l[12] !== i || l[13] !== r
          ? ((o = (0, s.jsxs)("section", { className: "flex flex-col items-start gap-3", children: [a, i, r] })),
            (l[12] = i),
            (l[13] = r),
            (l[14] = o))
          : (o = l[14]),
        o
      )
    }
    function eQ(e) {
      let { canConfigure: a } = e
      return a
    }
    let e0 = b.Ikc({
      bioagentsApplicationReference: b.YjP().regex(/^[0-9a-f]{64}$/),
      submittedAt: v.w$({ offset: !0 }),
      state: G.optional().catch(void 0),
    })
    function e1(e) {
      let a,
        i,
        n,
        r,
        o,
        l,
        c,
        d,
        p,
        f,
        m = (0, t.c)(54),
        {
          surface: h,
          identity: _,
          organization: A,
          target: b,
          canRequestResearchUpgrade: v,
          contextRefreshing: y,
          refreshContext: I,
        } = e
      m[0] !== _.accountId || m[1] !== _.userId || m[2] !== b.bioagentsApplicationReference || m[3] !== b.organizationId
        ? ((a = ["rosalind-customer-status", _.userId, _.accountId, b.organizationId, b.bioagentsApplicationReference]),
          (m[0] = _.accountId),
          (m[1] = _.userId),
          (m[2] = b.bioagentsApplicationReference),
          (m[3] = b.organizationId),
          (m[4] = a))
        : (a = m[4])
      let P = a
      ;(m[5] !== _ || m[6] !== b
        ? ((i = (e) => {
            let { signal: a } = e
            return Y(_, b, a)
          }),
          (m[5] = _),
          (m[6] = b),
          (m[7] = i))
        : (i = m[7]),
        m[8] !== P || m[9] !== i
          ? ((n = { queryKey: P, queryFn: i, retry: !1, staleTime: 0, refetchOnWindowFocus: !0 }),
            (m[8] = P),
            (m[9] = i),
            (m[10] = n))
          : (n = m[10]))
      let { data: R, error: S, isPending: T, isError: j, isFetching: N, refetch: C } = (0, u.I)(n)
      if (T) {
        let e
        return (
          m[11] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, s.jsx)(e2, {})), (m[11] = e)) : (e = m[11]),
          e
        )
      }
      if (m[12] !== S || m[13] !== b.bioagentsApplicationReference) {
        r = Symbol.for("react.early_return_sentinel")
        e: {
          let e = w(S)
          if (e?.status === 403 && "application_details_restricted" === e.body.code) {
            let a,
              i,
              t = e.body.applicantEmail,
              n = e0.safeParse(e.body),
              o =
                "string" == typeof t && "" !== t.trim()
                  ? (0, s.jsx)(g.A, {
                      id: "rosalind.application.contactSubmitter",
                      defaultMessage:
                        "{email} has already submitted an application for your organization. Please contact them for more details.",
                      values: { email: t },
                    })
                  : (0, s.jsx)(g.A, {
                      id: "rosalind.application.contactAdministrator",
                      defaultMessage:
                        "An application has already been submitted for your organization. Please contact your organization administrator for more details.",
                    })
            m[15] !== o ? ((a = (0, s.jsx)("p", { children: o })), (m[15] = o), (m[16] = a)) : (a = m[16])
            let l =
              n.success &&
              n.data.bioagentsApplicationReference === b.bioagentsApplicationReference &&
              (0, s.jsxs)("dl", {
                className: "flex flex-col gap-3 text-sm",
                children: [
                  n.data.state &&
                    (0, s.jsxs)("div", {
                      children: [
                        (0, s.jsx)("dt", {
                          className: "text-secondary",
                          children: (0, s.jsx)(g.A, {
                            id: "rosalind.application.memberStatus",
                            defaultMessage: "Application status",
                          }),
                        }),
                        (0, s.jsx)("dd", { children: (0, s.jsx)(g.A, { ...D[n.data.state] }) }),
                      ],
                    }),
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("dt", {
                        className: "text-secondary",
                        children: (0, s.jsx)(g.A, {
                          id: "rosalind.application.memberApplicationId",
                          defaultMessage: "Application ID",
                        }),
                      }),
                      (0, s.jsx)("dd", {
                        className: "font-mono break-all select-text",
                        children: n.data.bioagentsApplicationReference,
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("dt", {
                        className: "text-secondary",
                        children: (0, s.jsx)(g.A, {
                          id: "rosalind.application.memberSubmittedAt",
                          defaultMessage: "Submitted",
                        }),
                      }),
                      (0, s.jsx)("dd", {
                        children: (0, s.jsx)("time", {
                          dateTime: n.data.submittedAt,
                          children: (0, s.jsx)(x.XU, {
                            value: n.data.submittedAt,
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                            hour: "numeric",
                            minute: "2-digit",
                            timeZoneName: "short",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              })
            ;(m[17] !== a || m[18] !== l
              ? ((i = (0, s.jsxs)("div", { className: "flex flex-col gap-4", children: [a, l] })),
                (m[17] = a),
                (m[18] = l),
                (m[19] = i))
              : (i = m[19]),
              (r = i))
            break e
          }
        }
        ;((m[12] = S), (m[13] = b.bioagentsApplicationReference), (m[14] = r))
      } else r = m[14]
      if (r !== Symbol.for("react.early_return_sentinel")) return r
      if (j || null == R) {
        let e, a
        return (
          m[20] !== C ? ((e = () => void C()), (m[20] = C), (m[21] = e)) : (e = m[21]),
          m[22] !== h || m[23] !== e
            ? ((a = (0, s.jsx)(e4, { surface: h, onRetry: e })), (m[22] = h), (m[23] = e), (m[24] = a))
            : (a = m[24]),
          a
        )
      }
      m[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((o = (0, s.jsx)(eF, { view: "CHATGPT_WEB_ROSALIND_APPLICATION_STATUS_VIEW_APPLICATION" })), (m[25] = o))
        : (o = m[25])
      let O = N || y
      return (
        m[26] !== C || m[27] !== I
          ? ((l = () => {
              ;(C(), I())
            }),
            (m[26] = C),
            (m[27] = I),
            (m[28] = l))
          : (l = m[28]),
        m[29] !== R || m[30] !== _ || m[31] !== A || m[32] !== P || m[33] !== h || m[34] !== O || m[35] !== l
          ? ((c = (0, s.jsx)(eB, {
              surface: h,
              application: R,
              organization: A,
              identity: _,
              queryKey: P,
              refreshing: O,
              onRefresh: l,
            })),
            (m[29] = R),
            (m[30] = _),
            (m[31] = A),
            (m[32] = P),
            (m[33] = h),
            (m[34] = O),
            (m[35] = l),
            (m[36] = c))
          : (c = m[36]),
        m[37] !== R
          ? ((d = ("approved" === R.state || "access_granted" === R.state) && (0, s.jsx)(eX, { application: R })),
            (m[37] = R),
            (m[38] = d))
          : (d = m[38]),
        m[39] !== v ||
        m[40] !== y ||
        m[41] !== R ||
        m[42] !== _ ||
        m[43] !== N ||
        m[44] !== P ||
        m[45] !== C ||
        m[46] !== I ||
        m[47] !== b.bioagentsApplicationReference ||
        m[48] !== b.organizationId
          ? ((p =
              v &&
              (0, s.jsx)(
                eY,
                {
                  application: R,
                  identity: _,
                  queryKey: P,
                  refreshing: N || y,
                  onRefresh: () => {
                    ;(C(), I())
                  },
                },
                `${_.userId}:${_.accountId}:${b.organizationId}:${b.bioagentsApplicationReference}`,
              )),
            (m[39] = v),
            (m[40] = y),
            (m[41] = R),
            (m[42] = _),
            (m[43] = N),
            (m[44] = P),
            (m[45] = C),
            (m[46] = I),
            (m[47] = b.bioagentsApplicationReference),
            (m[48] = b.organizationId),
            (m[49] = p))
          : (p = m[49]),
        m[50] !== p || m[51] !== c || m[52] !== d
          ? ((f = (0, s.jsxs)(s.Fragment, { children: [o, c, d, p] })),
            (m[50] = p),
            (m[51] = c),
            (m[52] = d),
            (m[53] = f))
          : (f = m[53]),
        f
      )
    }
    function e2() {
      let e,
        a,
        i = (0, t.c)(2)
      return (
        i[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, s.jsx)(h.y, {})), (i[0] = e)) : (e = i[0]),
        i[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, s.jsxs)("div", {
              className: "flex min-h-40 items-center justify-center",
              role: "status",
              children: [
                e,
                (0, s.jsx)("span", {
                  className: "sr-only",
                  children: (0, s.jsx)(g.A, {
                    id: "chatgpt.rosalind_access.customer.status.loading",
                    defaultMessage: "Loading application status",
                  }),
                }),
              ],
            })),
            (i[1] = a))
          : (a = i[1]),
        a
      )
    }
    function e4(e) {
      let a,
        i,
        r,
        o,
        l,
        c = (0, t.c)(9),
        { surface: d, onRetry: u } = e,
        p = (0, n.Ul)(y.YV)
      return (
        c[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, s.jsx)(eF, { view: "CHATGPT_WEB_ROSALIND_APPLICATION_STATUS_VIEW_UNAVAILABLE" })), (c[0] = a))
          : (a = c[0]),
        c[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, s.jsx)("p", {
              role: "alert",
              children: (0, s.jsx)(g.A, { ...eE.applicationStatusUnavailable }),
            })),
            (c[1] = i))
          : (i = c[1]),
        c[2] !== p || c[3] !== u || c[4] !== d
          ? ((r = () => {
              ;(U(
                p,
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_RETRY_STATUS",
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_STARTED",
                d,
              ),
                u())
            }),
            (c[2] = p),
            (c[3] = u),
            (c[4] = d),
            (c[5] = r))
          : (r = c[5]),
        c[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, s.jsx)(g.A, { ...eE.retryOrganizationLookup })), (c[6] = o))
          : (o = c[6]),
        c[7] !== r
          ? ((l = (0, s.jsxs)("div", {
              className: "flex flex-col items-start gap-4",
              children: [
                a,
                i,
                (0, s.jsx)(m.$, { color: "secondary", size: "dialogAction", type: "button", onClick: r, children: o }),
              ],
            })),
            (c[7] = r),
            (c[8] = l))
          : (l = c[8]),
        l
      )
    }
    let e3 = {
      [-1]: "CHATGPT_WEB_ROSALIND_APPLICATION_STEP_PERSONA",
      0: "CHATGPT_WEB_ROSALIND_APPLICATION_STEP_ORGANIZATION",
      1: "CHATGPT_WEB_ROSALIND_APPLICATION_STEP_RESEARCH",
      2: "CHATGPT_WEB_ROSALIND_APPLICATION_STEP_LOCATIONS_AND_SAFEGUARDS",
      3: "CHATGPT_WEB_ROSALIND_APPLICATION_STEP_REVIEW",
    }
    function e5(e, a, i) {
      if (void 0 !== e3[a])
        try {
          e.logProductEvent(q.op, { ...i, step: e3[a], surface: "CHATGPT_WEB_ROSALIND_APPLICATION_SURFACE_FORM" })
        } catch {}
    }
    let e6 = {
      confirmInternalApiUseOnly: void 0,
      responsibleOfficialName: void 0,
      responsibleOfficialRole: void 0,
      responsibleOfficialEmail: void 0,
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
    function e7(e) {
      let a,
        i,
        s = (0, t.c)(4),
        { step: r } = e,
        o = (0, n.Ul)(y.YV),
        l = (0, p.useRef)(null)
      return (
        s[0] !== o || s[1] !== r
          ? ((a = () => {
              if (o !== y.Cg && l.current !== r && ((l.current = r), void 0 !== e3[r]))
                try {
                  o.logProductEvent(q.Oe, { step: e3[r] })
                } catch {}
            }),
            (i = [o, r]),
            (s[0] = o),
            (s[1] = r),
            (s[2] = a),
            (s[3] = i))
          : ((a = s[2]), (i = s[3])),
        (0, p.useEffect)(a, i),
        null
      )
    }
    function e8(e) {
      let a,
        i,
        s = (0, t.c)(11),
        {
          lookupFailed: r,
          displayedOrganizationCount: o,
          hasSelection: l,
          continueEnabled: c,
          createBusinessOrganizationShown: d,
          submissionEligibleCount: u,
          eligibilityUnknownCount: g,
          selectableOrganizationCount: f,
        } = e,
        m = (0, n.Ul)(y.YV),
        h = (0, p.useRef)(null)
      return (
        s[0] !== c ||
        s[1] !== d ||
        s[2] !== o ||
        s[3] !== g ||
        s[4] !== l ||
        s[5] !== m ||
        s[6] !== r ||
        s[7] !== f ||
        s[8] !== u
          ? ((a = () => {
              let e = {
                  lookupFailed: r,
                  displayedOrganizationCount: o,
                  hasSelection: l,
                  continueEnabled: c,
                  createBusinessOrganizationShown: d,
                  submissionEligibleCount: u,
                  eligibilityUnknownCount: g,
                  selectableOrganizationCount: f,
                },
                a = JSON.stringify(e)
              if (m !== y.Cg && h.current !== a) {
                h.current = a
                try {
                  m.logProductEvent(q.Hb, e)
                } catch {}
              }
            }),
            (i = [m, r, o, l, c, d, u, g, f]),
            (s[0] = c),
            (s[1] = d),
            (s[2] = o),
            (s[3] = g),
            (s[4] = l),
            (s[5] = m),
            (s[6] = r),
            (s[7] = f),
            (s[8] = u),
            (s[9] = a),
            (s[10] = i))
          : ((a = s[9]), (i = s[10])),
        (0, p.useEffect)(a, i),
        null
      )
    }
    var e9 = i("slpy"),
      ae = i("MM0V"),
      aa = i("psL3"),
      ai = i("GGiG"),
      as = i("XcNx"),
      at = i("ut5Z"),
      an = i("rY4A"),
      ar = i("JwoO"),
      ao = i("ZZgR")
    function al(e) {
      let a,
        i,
        n,
        r,
        o,
        l = (0, t.c)(52),
        c = (0, Z.A)(),
        [d, u] = (0, p.useState)(""),
        [f, h] = (0, p.useState)(!1)
      if (l[0] !== c || l[1] !== e.organizationId || l[2] !== e.organizations || l[3] !== e.variant) {
        let s, t
        ;(l[8] !== e.organizationId
          ? ((s = (a) => a.id === e.organizationId), (l[8] = e.organizationId), (l[9] = s))
          : (s = l[9]),
          (n = e.organizations.find(s)),
          (a = "application" === e.variant),
          l[10] !== a || l[11] !== c
            ? ((t = a
                ? c.formatMessage({
                    id: "chatgpt.rosalind_access.organization.selection.menu_prompt",
                    defaultMessage: "Select an organization",
                  })
                : c.formatMessage(z.selectOrganization)),
              (l[10] = a),
              (l[11] = c),
              (l[12] = t))
            : (t = l[12]),
          (i = t),
          (r = n
            ? c.formatMessage(
                {
                  id: "chatgpt.rosalind_access.organization.context.current",
                  defaultMessage: "Current organization: {name}",
                },
                { name: n.name },
              )
            : void 0),
          (l[0] = c),
          (l[1] = e.organizationId),
          (l[2] = e.organizations),
          (l[3] = e.variant),
          (l[4] = a),
          (l[5] = i),
          (l[6] = n),
          (l[7] = r))
      } else ((a = l[4]), (i = l[5]), (n = l[6]), (r = l[7]))
      let _ = r
      if (
        l[13] !== a ||
        l[14] !== c.locale ||
        l[15] !== i ||
        l[16] !== f ||
        l[17] !== e ||
        l[18] !== d ||
        l[19] !== n ||
        l[20] !== _
      ) {
        let t, r, p, A, x, b, v, y
        l[22] !== c.locale || l[23] !== d
          ? ((t = (e) => `${e.name} ${e.id}`.toLocaleLowerCase(c.locale).includes(d.toLocaleLowerCase(c.locale))),
            (l[22] = c.locale),
            (l[23] = d),
            (l[24] = t))
          : (t = l[24])
        let I = e.organizations.filter(t),
          P = a ? "start" : void 0,
          R = a ? "w-80 max-w-[var(--radix-popover-content-available-width)]" : void 0
        l[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (e) => {
              ;(h(e), e || u(""))
            }),
            (l[25] = r))
          : (r = l[25])
        let S = a ? "max-w-full self-start" : void 0,
          T = a ? "field" : "secondary",
          j = a ? "large" : void 0,
          N = e.lookupPending || e.disabled
        ;(l[26] !== a || l[27] !== n || l[28] !== _
          ? ((p =
              a && n
                ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(au, { name: n.name }),
                      (0, s.jsx)("span", { className: "truncate", children: n.name }),
                    ],
                  })
                : (_ ?? (0, s.jsx)(g.A, { ...z.selectOrganization }))),
            (l[26] = a),
            (l[27] = n),
            (l[28] = _),
            (l[29] = p))
          : (p = l[29]),
          l[30] !== a
            ? ((A = a && (0, s.jsx)(K.Aq_, { "aria-hidden": "true" })), (l[30] = a), (l[31] = A))
            : (A = l[31]),
          l[32] !== _ || l[33] !== p || l[34] !== A || l[35] !== S || l[36] !== T || l[37] !== j || l[38] !== N
            ? ((x = (0, s.jsxs)(m.$, {
                className: S,
                "aria-label": _,
                color: T,
                radius: j,
                size: "dialogAction",
                type: "button",
                disabled: N,
                children: [p, A],
              })),
              (l[32] = _),
              (l[33] = p),
              (l[34] = A),
              (l[35] = S),
              (l[36] = T),
              (l[37] = j),
              (l[38] = N),
              (l[39] = x))
            : (x = l[39]),
          l[40] !== i || l[41] !== d
            ? ((b = (0, s.jsx)(ao.G.Input, {
                name: "openai-organization-search",
                value: d,
                onValueChange: u,
                placeholder: i,
              })),
              (l[40] = i),
              (l[41] = d),
              (l[42] = b))
            : (b = l[42]),
          l[43] !== a || l[44] !== e
            ? ((v = (i) =>
                (0, s.jsx)(
                  ao.G.Item,
                  {
                    value: i.id,
                    isActive: a && i.id === e.organizationId,
                    RightIcon: a && i.id === e.organizationId ? K.ALZ : void 0,
                    disabled: e.canSelectOrganization?.(i.id) === !1,
                    onSelect: () => {
                      e.disabled ||
                        e.lookupPending ||
                        e.canSelectOrganization?.(i.id) === !1 ||
                        (i.id !== e.organizationId && e.onSelectOrganization(i.id), h(!1), u(""))
                    },
                    children: a
                      ? (0, s.jsxs)("span", {
                          className: "flex min-w-0 items-center gap-2 py-1",
                          children: [
                            (0, s.jsx)(au, { name: i.name }),
                            (0, s.jsxs)("span", {
                              className: "flex min-w-0 flex-col",
                              children: [
                                (0, s.jsx)("span", { className: "truncate", children: i.name }),
                                (0, s.jsxs)("span", {
                                  className: "flex items-center gap-2 truncate text-xs text-secondary",
                                  children: [
                                    e.chatgptWorkspaceOrganizationIds?.includes(i.id) &&
                                      (0, s.jsx)(X.E, {
                                        variant: "neutralCompact",
                                        children: (0, s.jsx)(g.A, {
                                          id: "chatgpt.rosalind_access.organization.selection.membership.chatgpt_codex.label",
                                          defaultMessage: "ChatGPT / Codex",
                                        }),
                                      }),
                                    i.hasDirectApiMembership &&
                                      (0, s.jsx)(X.E, {
                                        variant: "neutralCompact",
                                        children: (0, s.jsx)(g.A, {
                                          id: "chatgpt.rosalind_access.organization.selection.membership.api.label",
                                          defaultMessage: "API",
                                        }),
                                      }),
                                    (0, s.jsx)("span", { className: "truncate", children: i.id }),
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
              (l[43] = a),
              (l[44] = e),
              (l[45] = v))
            : (v = l[45]))
        let C = (0, s.jsxs)(ao.G.Root, {
          defaultValue: a ? e.organizationId : void 0,
          label: i,
          children: [b, (0, s.jsx)(ao.G.List, { children: I.map(v) })],
        })
        l[46] !== f || l[47] !== x || l[48] !== C || l[49] !== P || l[50] !== R
          ? ((y = (0, s.jsx)(ao.A, {
              align: P,
              contentClassName: R,
              open: f,
              onOpenChange: r,
              triggerButton: x,
              children: C,
            })),
            (l[46] = f),
            (l[47] = x),
            (l[48] = C),
            (l[49] = P),
            (l[50] = R),
            (l[51] = y))
          : (y = l[51])
        let O = y
        ;((o = (0, s.jsxs)(s.Fragment, {
          children: [
            e.analytics &&
              (0, s.jsx)(e8, {
                ...e.analytics,
                displayedOrganizationCount: f ? I.length : void 0,
                selectableOrganizationCount:
                  e.lookupPending || e.disabled ? 0 : I.filter((a) => e.canSelectOrganization?.(a.id) !== !1).length,
                submissionEligibleCount: I.filter(ad).length,
                eligibilityUnknownCount: I.filter(ac).length,
                hasSelection: null != n,
              }),
            O,
          ],
        })),
          (l[13] = a),
          (l[14] = c.locale),
          (l[15] = i),
          (l[16] = f),
          (l[17] = e),
          (l[18] = d),
          (l[19] = n),
          (l[20] = _),
          (l[21] = o))
      } else o = l[21]
      return o
    }
    function ac(e) {
      return void 0 === e.submissionEligible
    }
    function ad(e) {
      return !0 === e.submissionEligible
    }
    function au(e) {
      let a,
        i,
        n = (0, t.c)(4),
        { name: r } = e
      n[0] !== r
        ? ((a = r.trim().split(/\s+/u).slice(0, 2).map(ap).join("").toLocaleUpperCase()), (n[0] = r), (n[1] = a))
        : (a = n[1])
      let o = a
      return (
        n[2] !== o
          ? ((i = (0, s.jsx)("span", {
              "aria-hidden": "true",
              className:
                "flex size-7 shrink-0 items-center justify-center rounded-md bg-primary-soft text-xs font-medium text-secondary",
              children: o,
            })),
            (n[2] = o),
            (n[3] = i))
          : (i = n[3]),
        i
      )
    }
    function ap(e) {
      return Array.from(e)[0]
    }
    var ag = i("hAXG"),
      af = i("WFY2")
    let am = (0, x.YK)({
      notStarted: { id: "chatgpt.rosalind_access.persona.not_started", defaultMessage: "Not started" },
      statusCreated: { id: "chatgpt.rosalind_access.persona.status.incomplete.created", defaultMessage: "Incomplete" },
      statusStarted: { id: "chatgpt.rosalind_access.persona.status.incomplete.started", defaultMessage: "Incomplete" },
      statusPending: { id: "chatgpt.rosalind_access.persona.status.pending", defaultMessage: "Pending" },
      statusCompleted: {
        id: "chatgpt.rosalind_access.persona.status.details_submitted",
        defaultMessage: "Details submitted",
      },
      statusNeedsReview: { id: "chatgpt.rosalind_access.persona.status.needs_review", defaultMessage: "Needs review" },
      statusFailed: { id: "chatgpt.rosalind_access.persona.status.unsuccessful", defaultMessage: "Unsuccessful" },
      statusApproved: { id: "chatgpt.rosalind_access.persona.status.verified", defaultMessage: "Verified" },
      statusDeclined: { id: "chatgpt.rosalind_access.persona.status.declined", defaultMessage: "Declined" },
      statusExpired: {
        id: "chatgpt.rosalind_access.persona.status.session_expired",
        defaultMessage: "Session expired",
      },
    })
    function ah(e) {
      let a,
        i,
        n,
        r = (0, t.c)(7),
        { status: o, submittedPill: l } = e,
        c = void 0 !== l && l && "completed" === o ? "infoPill" : "neutral"
      return (
        r[0] !== o
          ? ((a = (function (e) {
              if (null == e) return am.notStarted
              switch (e) {
                case "created":
                  return am.statusCreated
                case "started":
                  return am.statusStarted
                case "pending":
                  return am.statusPending
                case "completed":
                  return am.statusCompleted
                case "needs_review":
                  return am.statusNeedsReview
                case "failed":
                  return am.statusFailed
                case "approved":
                  return am.statusApproved
                case "declined":
                  return am.statusDeclined
                case "expired":
                  return am.statusExpired
              }
            })(o)),
            (r[0] = o),
            (r[1] = a))
          : (a = r[1]),
        r[2] !== a ? ((i = (0, s.jsx)(g.A, { ...a })), (r[2] = a), (r[3] = i)) : (i = r[3]),
        r[4] !== c || r[5] !== i
          ? ((n = (0, s.jsx)("span", {
              "aria-live": "polite",
              children: (0, s.jsx)(X.E, { variant: c, children: i }),
            })),
            (r[4] = c),
            (r[5] = i),
            (r[6] = n))
          : (n = r[6]),
        n
      )
    }
    let a_ = /^inq_[A-Za-z0-9]{16,64}$/,
      aA = /^env_[A-Za-z0-9]{16,64}$/,
      ax = /^[A-Za-z0-9._~+/=-]{16,2048}$/,
      ab = {
        title: z.personaStep,
        heading: z.personaHeading,
        description: z.personaVisualDescription,
        visualHeading: z.personaVisualHeading,
        visualDescription: z.personaVisualDescription,
      },
      av = new Set(["completed", "needs_review", "approved", "declined", "failed"]),
      ay = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/,
      aI = (0, x.YK)({
        personaBrand: { id: "chatgpt.rosalind_access.persona.brand", defaultMessage: "Persona" },
        start: { id: "chatgpt.rosalind_access.persona.start_verification", defaultMessage: "Start verification" },
        starting: { id: "chatgpt.rosalind_access.persona.opening", defaultMessage: "Opening\u2026" },
        open: { id: "chatgpt.rosalind_access.persona.open", defaultMessage: "Verification open" },
        checking: { id: "chatgpt.rosalind_access.persona.checking", defaultMessage: "Checking status\u2026" },
        resume: { id: "chatgpt.rosalind_access.persona.resume", defaultMessage: "Resume verification" },
        reopen: { id: "chatgpt.rosalind_access.persona.reopen", defaultMessage: "Open Persona" },
        retry: { id: "chatgpt.rosalind_access.persona.retry", defaultMessage: "Try again" },
        checkAgain: { id: "chatgpt.rosalind_access.persona.check_again", defaultMessage: "Check again" },
        openError: {
          id: "chatgpt.rosalind_access.persona.error.open",
          defaultMessage: "Couldn\u2019t open verification.",
        },
        statusError: {
          id: "chatgpt.rosalind_access.persona.error.status",
          defaultMessage: "Couldn\u2019t check verification status.",
        },
        interrupted: {
          id: "chatgpt.rosalind_access.persona.error.interrupted",
          defaultMessage: "Verification was interrupted.",
        },
        needsReview: {
          id: "chatgpt.rosalind_access.persona.guidance.review",
          defaultMessage: "You can continue with your application.",
        },
        negativeResult: {
          id: "chatgpt.rosalind_access.persona.guidance.negative",
          defaultMessage: "You can continue, but OpenAI must review this result.",
        },
      })
    function aP(e) {
      let a,
        n,
        r,
        o,
        l,
        c,
        d,
        u,
        f,
        h,
        _,
        A,
        x,
        b,
        v,
        y,
        I,
        P = (0, t.c)(50),
        {
          organizationId: R,
          previousStatus: S,
          startPersona: T,
          checkPersona: j,
          onStatusChange: N,
          onActivityChange: C,
        } = e,
        O = (0, Z.A)(),
        E = (0, p.useRef)(null),
        L = (0, p.useRef)(null),
        M = (0, p.useRef)(0),
        [w, z] = (0, p.useState)(null),
        [k, D] = (0, p.useState)(null),
        [q, U] = (0, p.useState)(null)
      ;(P[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = () => () => {
            ;((M.current = M.current + 1), E.current?.destroy(), (E.current = null))
          }),
          (n = []),
          (P[0] = a),
          (P[1] = n))
        : ((a = P[0]), (n = P[1])),
        (0, p.useEffect)(a, n),
        P[2] !== R
          ? ((r = function () {
              if (L.current) return L.current
              let e = `rosalind-persona-attempt-id:${R}`,
                a = `${e}:payload-version`,
                i = sessionStorage.getItem(e),
                s = sessionStorage.getItem(a),
                t = null == s && (null == i || i.startsWith("v3:")),
                n = (t ? i?.slice(3) : i) ?? s ?? crypto.randomUUID()
              if (!ay.test(n) || (null != s && s !== n)) throw Error("invalid_attempt_binding")
              let r = null == s ? 1 : 2,
                o = { attemptId: n, payloadVersion: t ? 3 : r }
              return (null == i && sessionStorage.setItem(e, t ? `v3:${n}` : n), (L.current = o), o)
            }),
            (P[2] = R),
            (P[3] = r))
          : (r = P[3]))
      let H = r
      P[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((o = function () {
            ;(E.current?.destroy(), (E.current = null))
          }),
          (P[4] = o))
        : (o = P[4])
      let B = o
      P[5] !== C
        ? ((l = function (e) {
            ;(D(e), C(null != e))
          }),
          (P[5] = C),
          (P[6] = l))
        : (l = P[6])
      let G = l
      P[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = function (e, a) {
            af.v.warning("rosalind.persona.failure", { safe: { stage: e, reason: a } })
          }),
          (P[7] = c))
        : (c = P[7])
      let V = c
      P[8] !== j || P[9] !== N || P[10] !== R || P[11] !== G
        ? ((d = async function (e, a) {
            let i = (M.current = M.current + 1)
            ;(G("refresh"), U(null))
            try {
              let s = await j({ organizationId: R, inquiryId: e, attemptId: a })
              if (i !== M.current) return
              let t = aR(s)
              if (!t || t.inquiryId !== e) {
                ;(G(null), U("status"), V("status", "invalid_provider_response"))
                return
              }
              ;(z(t), N(t.status, { inquiryId: e }), G(null))
            } catch {
              i === M.current && (G(null), U("status"), V("status", "request_failed"))
            }
          }),
          (P[8] = j),
          (P[9] = N),
          (P[10] = R),
          (P[11] = G),
          (P[12] = d))
        : (d = P[12])
      let W = d
      P[13] !== H || P[14] !== N || P[15] !== R || P[16] !== W || P[17] !== G || P[18] !== T
        ? ((u = async function () {
            let e = (M.current = M.current + 1)
            ;(B(), G("start"), U(null))
            try {
              let a = H(),
                s = await T({
                  organizationId: R,
                  attemptId: a.attemptId,
                  ...(1 === a.payloadVersion ? {} : { payloadVersion: a.payloadVersion }),
                })
              if (e !== M.current) return
              let t = aR(s)
              if (!t) {
                ;(G(null), U("open"), V("start", "invalid_provider_response"))
                return
              }
              ;(z(t), N(t.status, { inquiryId: t.inquiryId }))
              let n = !1,
                r = () => {
                  e === M.current && (B(), W(t.inquiryId, a.attemptId))
                },
                o = await (async function (e, a) {
                  let s = (await i.e(891564).then(i.t.bind(i, "Iv8T", 23))).default
                  if (!a()) return null
                  let t = new s.Client(e)
                  return a() ? t : (t.destroy(), null)
                })(
                  {
                    inquiryId: t.inquiryId,
                    environmentId: t.environmentId,
                    sessionToken: t.sessionToken,
                    onCancel: r,
                    onComplete: r,
                    onError: () => {
                      e === M.current && ((n = !0), B(), G(null), U("interrupted"), V("sdk", "sdk_error"))
                    },
                  },
                  () => e === M.current && !n,
                )
              if (!o) return
              ;((E.current = o), o.open(), G("open"))
            } catch {
              e === M.current && (G(null), U("open"), V("start", "request_failed"))
            }
          }),
          (P[13] = H),
          (P[14] = N),
          (P[15] = R),
          (P[16] = W),
          (P[17] = G),
          (P[18] = T),
          (P[19] = u))
        : (u = P[19])
      let Y = u,
        F = w?.status ?? S,
        $ = "completed" === F || "needs_review" === F || "approved" === F,
        K = null
      "needs_review" === F ? (K = aI.needsReview) : ("declined" === F || "failed" === F) && (K = aI.negativeResult)
      let X = "refresh" === k ? aI.checking : aI.starting,
        J = aI.start
      "status" === q ? (J = aI.checkAgain) : q ? (J = aI.retry) : w && (J = aI.resume)
      let Q = aI.openError
      return (
        "status" === q ? (Q = aI.statusError) : "interrupted" === q && (Q = aI.interrupted),
        P[20] !== O ? ((f = O.formatMessage(aI.personaBrand)), (P[20] = O), (P[21] = f)) : (f = P[21]),
        P[22] !== f
          ? ((h = (0, s.jsx)(ag.A, {
              className: "h-auto w-28 shrink-0 text-default select-none",
              role: "img",
              "aria-label": f,
            })),
            (P[22] = f),
            (P[23] = h))
          : (h = P[23]),
        P[24] !== F
          ? ((_ = null != F && (0, s.jsx)(ah, { status: F, submittedPill: !0 })), (P[24] = F), (P[25] = _))
          : (_ = P[25]),
        P[26] !== J ||
        P[27] !== k ||
        P[28] !== X ||
        P[29] !== $ ||
        P[30] !== q ||
        P[31] !== W ||
        P[32] !== w ||
        P[33] !== Y
          ? ((A = k
              ? (0, s.jsx)("p", {
                  className: "text-sm text-secondary",
                  role: "status",
                  children: (0, s.jsx)(g.A, { ...("open" === k ? aI.open : X) }),
                })
              : (!$ || q) &&
                (0, s.jsx)(m.$, {
                  color: "primary",
                  size: "pageAction",
                  type: "button",
                  onClick: () => {
                    "status" === q && w && L.current ? W(w.inquiryId, L.current.attemptId) : Y()
                  },
                  children: (0, s.jsx)(g.A, { ...J }),
                })),
            (P[26] = J),
            (P[27] = k),
            (P[28] = X),
            (P[29] = $),
            (P[30] = q),
            (P[31] = W),
            (P[32] = w),
            (P[33] = Y),
            (P[34] = A))
          : (A = P[34]),
        P[35] !== _ || P[36] !== A
          ? ((x = (0, s.jsxs)("div", { className: "flex flex-wrap items-center gap-2.5", children: [_, A] })),
            (P[35] = _),
            (P[36] = A),
            (P[37] = x))
          : (x = P[37]),
        P[38] !== h || P[39] !== x
          ? ((b = (0, s.jsxs)("div", {
              className:
                "flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-default bg-surface p-6",
              children: [h, x],
            })),
            (P[38] = h),
            (P[39] = x),
            (P[40] = b))
          : (b = P[40]),
        P[41] !== q || P[42] !== Q
          ? ((v =
              q &&
              (0, s.jsx)("p", {
                className: "text-sm text-danger",
                role: "alert",
                children: (0, s.jsx)(g.A, { ...Q }),
              })),
            (P[41] = q),
            (P[42] = Q),
            (P[43] = v))
          : (v = P[43]),
        P[44] !== K
          ? ((y = K && (0, s.jsx)("p", { className: "text-sm text-secondary", children: (0, s.jsx)(g.A, { ...K }) })),
            (P[44] = K),
            (P[45] = y))
          : (y = P[45]),
        P[46] !== b || P[47] !== v || P[48] !== y
          ? ((I = (0, s.jsxs)("div", { className: "flex flex-col gap-3", children: [b, v, y] })),
            (P[46] = b),
            (P[47] = v),
            (P[48] = y),
            (P[49] = I))
          : (I = P[49]),
        I
      )
    }
    function aR(e) {
      return a_.test(e.inquiryId) && aA.test(e.environmentId) && (!e.sessionToken || ax.test(e.sessionToken)) ? e : null
    }
    let aS = new Set([
      "126.com",
      "aol.com",
      "fastmail.com",
      "gmail.com",
      "gmx.ch",
      "googlemail.com",
      "hotmail.co.uk",
      "hotmail.com",
      "hotmail.fr",
      "hotmail.it",
      "icloud.com",
      "interia.pl",
      "live.com",
      "mac.com",
      "mailbox.org",
      "me.com",
      "msn.com",
      "naver.com",
      "outlook.be",
      "outlook.com",
      "pm.me",
      "private.icloud.com",
      "privaterelay.appleid.com",
      "proton.me",
      "protonmail.com",
      "rocketmail.com",
      "tuta.io",
      "volny.cz",
      "web.de",
      "yahoo.com",
      "yahoo.fr",
      "ymail.com",
    ])
    function aT(e) {
      return (
        null != e &&
        !!e.includes("@") &&
        aS.has(
          e
            .slice(e.lastIndexOf("@") + 1)
            .trim()
            .toLowerCase(),
        )
      )
    }
    var aj = i("JNtf"),
      aN = i("mUDD")
    function aC(e) {
      let a,
        i,
        n,
        r,
        o,
        l,
        c,
        d,
        u,
        f,
        h,
        _,
        A,
        x,
        b,
        v,
        y,
        I,
        P,
        R,
        S = (0, t.c)(49),
        { open: T, organizationName: j, organizationId: N, submitting: C, onClose: O, onConfirm: E } = e,
        L = (0, p.useId)(),
        M = !C
      ;(S[0] !== L ? ((a = { "aria-describedby": L }), (S[0] = L), (S[1] = a)) : (a = S[1]),
        S[2] !== O || S[3] !== C
          ? ((i = (e) => {
              e || C || O()
            }),
            (S[2] = O),
            (S[3] = C),
            (S[4] = i))
          : (i = S[4]),
        S[5] !== E
          ? ((n = (e) => {
              ;(e.preventDefault(), E())
            }),
            (S[5] = E),
            (S[6] = n))
          : (n = S[6]),
        S[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, s.jsx)(aN.OO, {
              children: (0, s.jsx)(aN.c7, {
                variant: "chatgptConfirmation",
                title: (0, s.jsx)(aj.L3, { children: (0, s.jsx)(g.A, { ...z.confirmOrganizationHeading }) }),
              }),
            })),
            (S[7] = r))
          : (r = S[7]),
        S[8] !== N || S[9] !== j
          ? ((o = (0, s.jsx)(g.A, {
              ...z.confirmOrganizationQuestion,
              values: { organizationName: j, organizationId: N },
            })),
            (S[8] = N),
            (S[9] = j),
            (S[10] = o))
          : (o = S[10]),
        S[11] !== L || S[12] !== o
          ? ((l = (0, s.jsx)("p", { id: L, className: "text-sm leading-5 text-secondary", children: o })),
            (S[11] = L),
            (S[12] = o),
            (S[13] = l))
          : (l = S[13]),
        S[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, s.jsx)("dt", {
              className: "text-secondary",
              children: (0, s.jsx)(g.A, { ...z.confirmOrganizationNameLabel }),
            })),
            (S[14] = c))
          : (c = S[14]),
        S[15] !== j
          ? ((d = (0, s.jsxs)("div", {
              className: "flex flex-col gap-1",
              children: [c, (0, s.jsx)("dd", { className: "break-words", children: j })],
            })),
            (S[15] = j),
            (S[16] = d))
          : (d = S[16]),
        S[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, s.jsx)("dt", {
              className: "text-secondary",
              children: (0, s.jsx)(g.A, { ...z.confirmOrganizationIdLabel }),
            })),
            (S[17] = u))
          : (u = S[17]),
        S[18] !== N
          ? ((f = (0, s.jsxs)("div", {
              className: "flex flex-col gap-1",
              children: [u, (0, s.jsx)("dd", { className: "break-all", children: N })],
            })),
            (S[18] = N),
            (S[19] = f))
          : (f = S[19]),
        S[20] !== f || S[21] !== d
          ? ((h = (0, s.jsxs)("dl", {
              className: "flex flex-col gap-3 rounded-xl border border-default p-4 text-sm leading-5 select-text",
              children: [d, f],
            })),
            (S[20] = f),
            (S[21] = d),
            (S[22] = h))
          : (h = S[22]),
        S[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, s.jsx)("p", {
              className: "text-sm leading-5 text-secondary",
              children: (0, s.jsx)(g.A, {
                id: "chatgpt.rosalind_access.review.organization_confirmation.dialog.organization_workspace_or_tenant_administrator_approval.description",
                defaultMessage:
                  "Anyone in your organization can submit this application. If it is approved, an organization owner or administrator, an Enterprise Global Admin, or an eligible Business workspace owner or administrator must accept the GPT-Rosalind Terms, acknowledge the current pricing notice, and confirm provisioning before access can be granted.",
              }),
            })),
            (S[23] = _))
          : (_ = S[23]),
        S[24] !== h || S[25] !== l
          ? ((A = (0, s.jsxs)(aN.OO, { className: "gap-4", children: [l, h, _] })),
            (S[24] = h),
            (S[25] = l),
            (S[26] = A))
          : (A = S[26]),
        S[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, s.jsx)(g.A, { ...z.confirmOrganizationBack })), (S[27] = x))
          : (x = S[27]),
        S[28] !== O || S[29] !== C
          ? ((b = (0, s.jsx)(m.$, {
              color: "outlineGhost",
              size: "dialogAction",
              radius: "full",
              type: "button",
              disabled: C,
              onClick: O,
              children: x,
            })),
            (S[28] = O),
            (S[29] = C),
            (S[30] = b))
          : (b = S[30]))
      let w = C ? z.submitting : z.confirmOrganizationSubmit
      return (
        S[31] !== w ? ((v = (0, s.jsx)(g.A, { ...w })), (S[31] = w), (S[32] = v)) : (v = S[32]),
        S[33] !== C || S[34] !== v
          ? ((y = (0, s.jsx)(m.$, {
              color: "primary",
              size: "dialogAction",
              radius: "full",
              type: "submit",
              disabled: C,
              children: v,
            })),
            (S[33] = C),
            (S[34] = v),
            (S[35] = y))
          : (y = S[35]),
        S[36] !== b || S[37] !== y
          ? ((I = (0, s.jsx)(aN.OO, {
              children: (0, s.jsxs)(aN.Es, { variant: "chatgptConfirmation", children: [b, y] }),
            })),
            (S[36] = b),
            (S[37] = y),
            (S[38] = I))
          : (I = S[38]),
        S[39] !== A || S[40] !== I || S[41] !== n
          ? ((P = (0, s.jsxs)(aN.R4, { as: "form", variant: "chatgptConfirmation", onSubmit: n, children: [r, A, I] })),
            (S[39] = A),
            (S[40] = I),
            (S[41] = n),
            (S[42] = P))
          : (P = S[42]),
        S[43] !== T || S[44] !== M || S[45] !== a || S[46] !== P || S[47] !== i
          ? ((R = (0, s.jsx)(aj.lG, {
              open: T,
              size: "medium",
              variant: "chatgptConfirmation",
              showDialogClose: M,
              contentProps: a,
              onOpenChange: i,
              children: P,
            })),
            (S[43] = T),
            (S[44] = M),
            (S[45] = a),
            (S[46] = P),
            (S[47] = i),
            (S[48] = R))
          : (R = S[48]),
        R
      )
    }
    function aO(e) {
      let a,
        i,
        n,
        r,
        o,
        l,
        c,
        d,
        u,
        f,
        m = (0, t.c)(15),
        { capabilities: h } = e,
        _ = (0, p.useId)()
      if (!h?.discoveryApplications) return null
      let A = `${_}-title`,
        x = `${_}-title`
      return (
        m[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, s.jsx)(g.A, {
              id: "chatgpt.rosalind_access.tier.overview.heading",
              defaultMessage: "Rosalind model access",
            })),
            (m[0] = a))
          : (a = m[0]),
        m[1] !== x
          ? ((i = (0, s.jsx)("h2", { className: "text-base font-medium", id: x, children: a })), (m[1] = x), (m[2] = i))
          : (i = m[2]),
        m[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, s.jsx)("p", {
              className: "text-sm leading-relaxed text-secondary",
              children: (0, s.jsx)(g.A, {
                id: "chatgpt.rosalind_access.tier.overview.eligibility.description",
                defaultMessage:
                  "One application covers Rosalind Discovery and Rosalind Research. We review your application to determine which tier you are eligible for.",
              }),
            })),
            (m[3] = n))
          : (n = m[3]),
        m[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, s.jsx)("dt", {
              className: "text-base font-medium",
              children: (0, s.jsx)(g.A, {
                id: "chatgpt.rosalind_access.tier.overview.discovery.label",
                defaultMessage: "Rosalind Discovery",
              }),
            })),
            (m[4] = r))
          : (r = m[4]),
        m[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, s.jsxs)("div", {
              className: "grid content-start gap-1 rounded-xl border border-default p-4",
              children: [
                r,
                (0, s.jsx)("dd", {
                  className: "text-sm leading-relaxed text-secondary",
                  children: (0, s.jsx)(g.A, {
                    id: "chatgpt.rosalind_access.tier.overview.discovery.task_focus.description",
                    defaultMessage: "For everyday scientific tasks.",
                  }),
                }),
              ],
            })),
            (m[5] = o))
          : (o = m[5]),
        m[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, s.jsx)("dt", {
              className: "text-base font-medium",
              children: (0, s.jsx)(g.A, {
                id: "chatgpt.rosalind_access.tier.overview.research.label",
                defaultMessage: "Rosalind Research",
              }),
            })),
            (m[6] = l))
          : (l = m[6]),
        m[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, s.jsxs)("dl", {
              className: "my-3 grid gap-3 sm:grid-cols-2",
              children: [
                o,
                (0, s.jsxs)("div", {
                  className: "grid content-start gap-1 rounded-xl border border-default p-4",
                  children: [
                    l,
                    (0, s.jsx)("dd", {
                      className: "text-sm leading-relaxed text-secondary",
                      children: (0, s.jsx)(g.A, {
                        id: "chatgpt.rosalind_access.tier.overview.research.task_focus.description",
                        defaultMessage: "For complex scientific research requiring advanced reasoning.",
                      }),
                    }),
                  ],
                }),
              ],
            })),
            (m[7] = c))
          : (c = m[7]),
        m[8] !== h.researchUpgradeRequests
          ? ((d =
              h.researchUpgradeRequests &&
              (0, s.jsx)("p", {
                className: "text-sm leading-relaxed text-secondary",
                children: (0, s.jsx)(g.A, {
                  id: "chatgpt.rosalind_access.tier.overview.upgrade.help_text",
                  defaultMessage:
                    "If you're approved for Discovery but need Research, you can request an upgrade. The upgrade form will request more information for further review.",
                }),
              })),
            (m[8] = h.researchUpgradeRequests),
            (m[9] = d))
          : (d = m[9]),
        m[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, s.jsx)("p", {
              className: "text-sm leading-relaxed text-secondary",
              children: (0, s.jsx)(g.A, {
                id: "chatgpt.rosalind_access.tier.overview.privacy.help_text",
                defaultMessage: "Your privacy and data-retention choices are separate from your model access tier.",
              }),
            })),
            (m[10] = u))
          : (u = m[10]),
        m[11] !== A || m[12] !== d || m[13] !== i
          ? ((f = (0, s.jsxs)("section", {
              "aria-labelledby": A,
              className: "flex flex-col gap-3",
              children: [i, n, c, d, u],
            })),
            (m[11] = A),
            (m[12] = d),
            (m[13] = i),
            (m[14] = f))
          : (f = m[14]),
        f
      )
    }
    let aE = [
        { key: "certifyAccuracy", label: z.certifyAccuracy },
        { key: "certifyAuthority", label: z.certifyAuthority },
        { key: "confirmInternalApiUseOnly", label: z.confirmInternalApiUseOnly },
      ],
      aL = {
        organizationId: 0,
        responsibleOfficialName: 4,
        responsibleOfficialRole: 4,
        responsibleOfficialEmail: 4,
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
        confirmInternalApiUseOnly: 3,
      }
    function aM(e) {
      let a,
        i,
        r,
        o,
        l,
        c,
        d = (0, t.c)(28),
        u = (0, n.Ul)(y.YV),
        g = e.selectedOrganizationId,
        f = !0 === e.workEmailCheckEnabled && null == e.existingApplication
      d[0] !== e.applicantEmail || d[1] !== f
        ? ((a = f && aT(e.applicantEmail)), (d[0] = e.applicantEmail), (d[1] = f), (d[2] = a))
        : (a = d[2])
      let m = a,
        h = m ? null : e.createBusinessOrganizationAction,
        _ = !m || !e.contextAvailable || e.hasCanceledApplication
      if (d[3] !== e.organizations || d[4] !== g) {
        let a
        ;(d[6] !== g ? ((a = (e) => e.id === g), (d[6] = g), (d[7] = a)) : (a = d[7]),
          (i = e.organizations.find(a)),
          (d[3] = e.organizations),
          (d[4] = g),
          (d[5] = i))
      } else i = d[5]
      let A = i,
        [x, b] = (0, p.useState)(null)
      d[8] !== h || d[9] !== x || d[10] !== u || d[11] !== m || d[12] !== e || d[13] !== g || d[14] !== _
        ? ((r = (a) =>
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(al, {
                  variant: "application",
                  analytics: {
                    createBusinessOrganizationShown: null != h,
                    continueEnabled: a,
                    lookupFailed: e.lookupFailed ?? !1,
                  },
                  organizations: e.organizations,
                  chatgptWorkspaceOrganizationIds: e.chatgptWorkspaceOrganizationIds,
                  organizationId: g,
                  lookupPending: e.contextPending,
                  onSelectOrganization: (a) => {
                    a !== g &&
                      (e5(u, 0, {
                        action: "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_SELECT_ORGANIZATION",
                        result: "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_SUCCEEDED",
                      }),
                      b(null),
                      e.onSelectOrganization(a))
                  },
                }),
                h,
                _ && e.organizationActions?.(!m && x !== g),
              ],
            })),
          (d[8] = h),
          (d[9] = x),
          (d[10] = u),
          (d[11] = m),
          (d[12] = e),
          (d[13] = g),
          (d[14] = _),
          (d[15] = r))
        : (r = d[15])
      let v = r
      d[16] !== g
        ? ((o = (e) => {
            e.target instanceof HTMLElement && "openai-organization-search" !== e.target.getAttribute("name") && b(g)
          }),
          (d[16] = g),
          (d[17] = o))
        : (o = d[17])
      let I = `${g}:${e.existingApplication?.bioagentsApplicationReference ?? "new"}`
      return (
        d[18] !== m || d[19] !== e || d[20] !== v || d[21] !== A || d[22] !== f || d[23] !== I
          ? ((l = (0, s.jsx)(
              aw,
              { ...e, showWorkEmailCheck: f, needsWorkEmail: m, organization: A, renderOrganizationPicker: v },
              I,
            )),
            (d[18] = m),
            (d[19] = e),
            (d[20] = v),
            (d[21] = A),
            (d[22] = f),
            (d[23] = I),
            (d[24] = l))
          : (l = d[24]),
        d[25] !== o || d[26] !== l
          ? ((c = (0, s.jsx)("div", {
              className:
                "flex flex-col gap-6 rounded-2xl border border-default bg-surface p-4.5 text-sm text-default sm:p-6",
              onChangeCapture: o,
              children: l,
            })),
            (d[25] = o),
            (d[26] = l),
            (d[27] = c))
          : (c = d[27]),
        c
      )
    }
    function aw(e) {
      let a,
        i,
        r,
        o,
        l,
        c,
        d,
        u,
        f,
        h,
        _,
        A,
        b,
        v,
        P,
        R,
        S,
        T,
        j,
        N,
        C,
        O,
        E,
        L,
        M,
        w,
        k,
        D,
        U,
        H,
        B,
        G,
        V,
        W,
        Y,
        F,
        $,
        X,
        Q,
        ee,
        ea,
        ei = (0, t.c)(229),
        es = (0, Z.A)()
      if (ei[0] !== es) {
        let e
        ;((e = new Intl.Collator(es.locale, { sensitivity: "base" })),
          (a = I.PO.map((e) => ({ value: e, label: es.formatDisplayName(e, { type: "region" }) ?? e })).sort((a, i) => {
            let s = em.indexOf(a.value),
              t = em.indexOf(i.value)
            return s >= 0 || t >= 0 ? (s < 0 ? 1 : t < 0 ? -1 : s - t) : e.compare(a.label, i.label)
          })),
          (ei[0] = es),
          (ei[1] = a))
      } else a = ei[1]
      let er = a,
        [eo, ec] = (0, p.useState)(0),
        eR = 4 !== eo || e.showResponsibleOfficial ? eo : 2
      ;(ei[2] === Symbol.for("react.memo_cache_sentinel") ? ((i = []), (ei[2] = i)) : (i = ei[2]),
        ei[3] === Symbol.for("react.memo_cache_sentinel") ? ((r = []), (ei[3] = r)) : (r = ei[3]),
        ei[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = {
              products: i,
              researchPurpose: "",
              responsibleOfficialName: "",
              responsibleOfficialRole: "",
              responsibleOfficialEmail: "",
              researchScopes: r,
              primaryCountry: "",
              additionalLocations: null,
              additionalCountries: [],
              selectedSafeguards: [],
              otherSafeguardDetails: "",
              confirmResearchSafeguards: !1,
              certifyAccuracy: !1,
              certifyAuthority: !1,
              confirmInternalApiUseOnly: !1,
            }),
            (ei[4] = o))
          : (o = ei[4]))
      let [eS, eT] = (0, p.useState)(o),
        [ej, eN] = (0, p.useState)(null),
        [eC, eO] = (0, p.useState)(null),
        [eE, eL] = (0, p.useState)(!1),
        [eM, ew] = (0, p.useState)(!1),
        [ez, ek] = (0, p.useState)(null),
        [eD, eq] = (0, p.useState)(null),
        [eU, eH] = (0, p.useState)(null),
        [eB, eG] = (0, p.useState)(null),
        eV = (0, p.useRef)(null),
        eW = (0, p.useRef)(0)
      ;(ei[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = () => () => {
            eW.current = eW.current + 1
          }),
          (c = []),
          (ei[5] = l),
          (ei[6] = c))
        : ((l = ei[5]), (c = ei[6])),
        (0, p.useEffect)(l, c),
        ei[7] !== ez ? ((d = null != ez && av.has(ez)), (ei[7] = ez), (ei[8] = d)) : (d = ei[8]))
      let eY = d,
        eF =
          null == e.existingApplication &&
          !e.eduApplicationBlocked &&
          e.contextAvailable &&
          !e.contextPending &&
          !e.workspaceHandoffRequired &&
          e.submissionEnabled &&
          e.organization?.submissionEligible === !0,
        e$ = eF && !e.needsWorkEmail,
        eK = e.capabilities?.discoveryApplications ? I.x9 : "gpt-rosalind-access-v2",
        eZ = e.organization?.id ?? "",
        eX = eU === eZ,
        eJ = eS.products.includes("internal-api"),
        eQ = aE.filter((e) => {
          let { key: a } = e
          return "confirmInternalApiUseOnly" !== a || eJ
        }),
        e0 = {
          organizationId: e.organization?.id ?? "",
          products: eS.products,
          ...(e.showResponsibleOfficial
            ? {
                responsibleOfficialName: eS.responsibleOfficialName.trim(),
                responsibleOfficialEmail: eS.responsibleOfficialEmail.trim(),
                ...(eS.responsibleOfficialRole.trim()
                  ? { responsibleOfficialRole: eS.responsibleOfficialRole.trim() }
                  : {}),
              }
            : {}),
          researchPurpose: eS.researchPurpose.trim(),
          researchScopes: eS.researchScopes,
          primaryCountry: eS.primaryCountry,
          additionalLocations: eS.additionalLocations,
          ...("yes" === eS.additionalLocations ? { additionalCountries: eS.additionalCountries } : {}),
          selectedSafeguards: eS.selectedSafeguards,
          ...(eS.selectedSafeguards?.includes("other")
            ? { otherSafeguardDetails: eS.otherSafeguardDetails.trim() }
            : {}),
          confirmResearchSafeguards: eS.confirmResearchSafeguards,
          certifyAccuracy: eX && eS.certifyAccuracy,
          certifyAuthority: eX && eS.certifyAuthority,
          ...(eJ && eX && eS.confirmInternalApiUseOnly ? { confirmInternalApiUseOnly: !0 } : {}),
        },
        e1 = { ...e0, requestedEnhancedPrivacy: !1 },
        e2 = e.capabilities?.discoveryApplications ? e1 : e0,
        e4 = JSON.stringify(e2),
        e3 = eD?.inquiryId,
        e8 =
          eB &&
          eF &&
          eB.organizationId === eZ &&
          eB.formSchemaVersion === eK &&
          eB.payload === e4 &&
          eB.personaInquiryId === e3
            ? eB
            : null,
        at = (0, I.mA)(
          3 === eR
            ? e1
            : {
                ...e1,
                confirmResearchSafeguards: 2 !== eR || eS.confirmResearchSafeguards,
                certifyAccuracy: !0,
                certifyAuthority: !0,
              },
        ),
        ao = {}
      for (let e of at)
        aL[e.field] !== eR ||
          ao[e.field] ||
          (ao[e.field] = (function (e, a) {
            if (
              "TOO_BIG" === e.issue &&
              ("researchPurpose" === e.field ||
                "otherSafeguardDetails" === e.field ||
                "responsibleOfficialName" === e.field ||
                "responsibleOfficialRole" === e.field ||
                "responsibleOfficialEmail" === e.field)
            )
              return a.formatMessage(
                {
                  id: "chatgpt.rosalind_access.validation.text_length",
                  defaultMessage: "Use no more than {maximum} characters.",
                },
                { maximum: I.XO[e.field].max },
              )
            if ("researchPurpose" === e.field) return a.formatMessage(ed.s, { minimum: I.XO.researchPurpose.minWords })
            if ("TOO_BIG" === e.issue && "additionalCountries" === e.field)
              return a.formatMessage(
                {
                  id: "chatgpt.rosalind_access.validation.additional_locations_limit",
                  defaultMessage: "Select no more than {maximum} additional countries or regions.",
                },
                { maximum: I.XO.additionalCountries.max },
              )
            if ("INVALID_VALUE" === e.issue && "researchScopes" === e.field)
              return a.formatMessage({
                id: "chatgpt.rosalind_access.validation.scope_exclusive",
                defaultMessage:
                  "Select the applicable research categories, or select \u201CNone of the above\u201D on its own.",
              })
            let i = eg[e.field]
            return i
              ? a.formatMessage(i)
              : a.formatMessage({
                  id: "chatgpt.rosalind_access.validation.valid_selection",
                  defaultMessage: "Choose a valid option.",
                })
          })(e, es))
      if (-1 === eR && !eY)
        if ("pending" === ez) {
          let e
          ;(ei[9] !== es ? ((e = es.formatMessage(z.personaPending)), (ei[9] = es), (ei[10] = e)) : (e = ei[10]),
            (ao.persona = e))
        } else if ("expired" === ez) {
          let e
          ;(ei[11] !== es ? ((e = es.formatMessage(z.personaExpired)), (ei[11] = es), (ei[12] = e)) : (e = ei[12]),
            (ao.persona = e))
        } else {
          let e
          ;(ei[13] !== es ? ((e = es.formatMessage(z.personaRequired)), (ei[13] = es), (ei[14] = e)) : (e = ei[14]),
            (ao.persona = e))
        }
      let al = ej === eR ? ao : {}
      ei[15] !== e.showResponsibleOfficial
        ? ((u = e.showResponsibleOfficial ? [0, -1, 1, 4, 2, 3] : [0, -1, 1, 2, 3]),
          (ei[15] = e.showResponsibleOfficial),
          (ei[16] = u))
        : (u = ei[16])
      let ac = u,
        ad = -1 === eR ? ab : eh[eR],
        au = eE || eM,
        ap = (0, n.Ul)(y.YV)
      ei[17] !== at || ei[18] !== ap || ei[19] !== eR
        ? ((f = function (e, a, i, s) {
            e5(ap, eR, {
              action: e,
              result: a,
              failureReason: i,
              submissionAttemptId: s,
              validationDetails:
                "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_VALIDATION" === i
                  ? ("CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_ADVANCE" === e
                      ? at.filter((e) => aL[e.field] === eR)
                      : at
                    ).flatMap(({ field: e, issue: a }) => {
                      let i = e6[e]
                      return void 0 === i
                        ? []
                        : [{ field: i, issue: q.Ur[`CHATGPT_WEB_ROSALIND_APPLICATION_VALIDATION_ISSUE_${a}`] }]
                    })
                  : void 0,
            })
          }),
          (ei[17] = at),
          (ei[18] = ap),
          (ei[19] = eR),
          (ei[20] = f))
        : (f = ei[20])
      let ag = f
      ei[21] !== eR
        ? ((h = function (e) {
            e !== eR &&
              (ec(e),
              eN(null),
              eO(null),
              requestAnimationFrame(() => {
                let a = document.getElementById(`rosalind-step-heading-${e}`)
                ;(a?.focus({ preventScroll: !0 }),
                  a?.closest("main")?.parentElement?.scrollTo({ top: 0, behavior: "instant" }))
              }))
          }),
          (ei[21] = eR),
          (ei[22] = h))
        : (h = ei[22])
      let af = h
      ei[23] !== eX || ei[24] !== eZ
        ? ((_ = function (e, a) {
            let i = aE.some((a) => a.key === e)
            ;(eT((s) => ({
              ...s,
              ...(!i || !eX ? { certifyAccuracy: !1, certifyAuthority: !1, confirmInternalApiUseOnly: !1 } : {}),
              [e]: a,
            })),
              eH(i ? eZ : null),
              eO(null))
          }),
          (ei[23] = eX),
          (ei[24] = eZ),
          (ei[25] = _))
        : (_ = ei[25])
      let am = _,
        ah = function () {
          if (au || (0 === eR && e.needsWorkEmail)) return
          if (!eF) {
            ;(ag(
              "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_ADVANCE",
              "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_BLOCKED",
              "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_UNAVAILABLE",
            ),
              eO(z.organizationEligibilityUnavailable))
            return
          }
          if (Object.keys(ao).length) {
            ;(ag(
              "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_ADVANCE",
              "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_BLOCKED",
              "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_VALIDATION",
            ),
              eN(eR),
              ef(eR))
            return
          }
          let a = ac[Math.min(ac.indexOf(eR) + 1, ac.length - 1)]
          ;(ag(
            "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_ADVANCE",
            "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_SUCCEEDED",
          ),
            af(a))
        }
      ei[26] !== e2 ||
      ei[27] !== e4 ||
      ei[28] !== au ||
      ei[29] !== eF ||
      ei[30] !== af ||
      ei[31] !== eK ||
      ei[32] !== at ||
      ei[33] !== eY ||
      ei[34] !== eD ||
      ei[35] !== eZ ||
      ei[36] !== e.organization?.name ||
      ei[37] !== ag
        ? ((A = function () {
            if (!au) {
              if (!eF) {
                ;(ag(
                  "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_SUBMISSION_CONFIRMATION",
                  "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_BLOCKED",
                  "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_UNAVAILABLE",
                ),
                  eO(z.submissionUnavailable))
                return
              }
              if (at.length > 0 || !aV(e2, eK) || !eY || !eD) {
                let e = at.find(aB),
                  a = e ? (aL[e.field] ?? 3) : 3
                ;(eY || (a = -1),
                  ag(
                    "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_SUBMISSION_CONFIRMATION",
                    "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_BLOCKED",
                    "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_VALIDATION",
                  ),
                  af(a),
                  eN(a),
                  ef(a))
                return
              }
              ;(ag(
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_SUBMISSION_CONFIRMATION",
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_STARTED",
              ),
                eG({
                  body: e2,
                  payload: e4,
                  organizationId: eZ,
                  formSchemaVersion: eK,
                  organizationName: e.organization?.name ?? "",
                  personaInquiryId: eD.inquiryId,
                }))
            }
          }),
          (ei[26] = e2),
          (ei[27] = e4),
          (ei[28] = au),
          (ei[29] = eF),
          (ei[30] = af),
          (ei[31] = eK),
          (ei[32] = at),
          (ei[33] = eY),
          (ei[34] = eD),
          (ei[35] = eZ),
          (ei[36] = e.organization?.name),
          (ei[37] = ag),
          (ei[38] = A))
        : (A = ei[38])
      let a_ = A
      ei[39] !== e8 ||
      ei[40] !== e2 ||
      ei[41] !== eF ||
      ei[42] !== eK ||
      ei[43] !== at ||
      ei[44] !== eY ||
      ei[45] !== eD ||
      ei[46] !== e ||
      ei[47] !== ag ||
      ei[48] !== eE
        ? ((b = async function () {
            if (eE || !e8) return
            if (!eF || at.length > 0 || !aV(e2, eK) || !eY || !eD) {
              ;(eG(null),
                ag(
                  "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_SUBMIT",
                  "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_BLOCKED",
                  "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_UNAVAILABLE",
                ),
                eO(z.submissionUnavailable))
              return
            }
            ag(
              "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_SUBMISSION_CONFIRMATION",
              "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_SUCCEEDED",
            )
            try {
              ;(eV.current?.payload !== e8.payload || eV.current.formSchemaVersion !== e8.formSchemaVersion) &&
                (eV.current = {
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
              ;(eG(null),
                ag(
                  "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_SUBMIT",
                  "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_BLOCKED",
                  "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_SECURE_SUBMISSION_UNAVAILABLE",
                ),
                eO(z.secureSubmissionFailed))
              return
            }
            let a = eV.current
            if (!a) return
            let i = (eW.current = eW.current + 1)
            ;(ag(
              "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_SUBMIT",
              "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_STARTED",
              void 0,
              a.correlationId,
            ),
              eL(!0),
              eO(null),
              eG(null),
              await (async () => {
                try {
                  let s = await e.submitApplication({
                    body: e8.body,
                    headers: {
                      "Idempotency-Key": a.key,
                      "X-Rosalind-Form-Schema-Version": a.formSchemaVersion,
                      "X-Rosalind-Persona-Inquiry-Id": e8.personaInquiryId,
                    },
                  })
                  if (i !== eW.current) return
                  if (!s.submitted) {
                    ;(ag(
                      "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_SUBMIT",
                      "application_conflict" === s.code
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
                      })(s.code),
                      a.correlationId,
                    ),
                      "idempotency_conflict" === s.code && (eV.current = null),
                      "organization_unavailable" === s.code || "submission_policy_changed" === s.code
                        ? eO(z.organizationUnavailable)
                        : "application_unprocessable" === s.code
                          ? eO(z.applicationUnprocessable)
                          : "application_history_limit" === s.code
                            ? eO(z.applicationHistoryLimit)
                            : eO(z.submissionFailed))
                    return
                  }
                  s.organizationId === e8.body.organizationId && /^[0-9a-f]{64}$/.test(s.bioagentsApplicationReference)
                    ? ((eV.current = null),
                      ag(
                        "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_SUBMIT",
                        "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_SUCCEEDED",
                        void 0,
                        a.correlationId,
                      ),
                      e.onApplicationSubmitted(s, e8.body))
                    : (ag(
                        "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_SUBMIT",
                        "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_UNCONFIRMED",
                        "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_INVALID_RESPONSE",
                        a.correlationId,
                      ),
                      eO(z.submissionUnconfirmed))
                } catch {
                  i === eW.current &&
                    (ag(
                      "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_SUBMIT",
                      "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_UNCONFIRMED",
                      "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_REQUEST_FAILED",
                      a.correlationId,
                    ),
                    eO(z.submissionUnconfirmed))
                }
              })().finally(() => {
                i === eW.current && eL(!1)
              }))
          }),
          (ei[39] = e8),
          (ei[40] = e2),
          (ei[41] = eF),
          (ei[42] = eK),
          (ei[43] = at),
          (ei[44] = eY),
          (ei[45] = eD),
          (ei[46] = e),
          (ei[47] = ag),
          (ei[48] = eE),
          (ei[49] = b))
        : (b = ei[49])
      let aA = b,
        ax = z.organizationEligibilityUnavailable
      e.organizations.length
        ? e.contextAvailable
          ? e.submissionEnabled
            ? e.organization?.submissionEligible === !1 && (ax = z.organizationNotEligible)
            : (ax = z.submissionUnavailable)
          : (ax = z.organizationEligibilityUnavailable)
        : (ax = z.noOrganizations)
      let ay = ac[Math.max(ac.indexOf(eR) - 1, 0)],
        aI = 3 === eR ? z.submit : z.next
      ;(eE && (aI = z.submitting),
        ei[50] !== eR ? ((v = (0, s.jsx)(e7, { step: eR })), (ei[50] = eR), (ei[51] = v)) : (v = ei[51]))
      let aR = String(eR)
      ;(ei[52] !== es ? ((P = es.formatMessage(z.applicationProgress)), (ei[52] = es), (ei[53] = P)) : (P = ei[53]),
        ei[54] !== au || ei[55] !== ac || ei[56] !== eR
          ? ((R = ac.map((e, a) => {
              let i
              return (
                (i = 4 === e ? z.responsibleOfficial : -1 === e ? ab.title : eh[e].title),
                { id: String(e), label: (0, s.jsx)(g.A, { ...i }), disabled: au || a > ac.indexOf(eR) }
              )
            })),
            (ei[54] = au),
            (ei[55] = ac),
            (ei[56] = eR),
            (ei[57] = R))
          : (R = ei[57]),
        ei[58] !== af ? ((S = (e) => af(Number(e))), (ei[58] = af), (ei[59] = S)) : (S = ei[59]),
        ei[60] !== aR || ei[61] !== P || ei[62] !== R || ei[63] !== S
          ? ((T = (0, s.jsx)(ai.K, { currentStep: aR, ariaLabel: P, steps: R, onStepSelect: S })),
            (ei[60] = aR),
            (ei[61] = P),
            (ei[62] = R),
            (ei[63] = S),
            (ei[64] = T))
          : (T = ei[64]),
        ei[65] !== v || ei[66] !== T
          ? ((j = (0, s.jsxs)(s.Fragment, { children: [v, T] })), (ei[65] = v), (ei[66] = T), (ei[67] = j))
          : (j = ei[67]))
      let aS = j
      if (0 === eR) {
        let a, i, t, n, r, o, l, c, d, u, p, f, h, _, A
        return (
          ei[68] !== eR ? ((a = (0, s.jsx)(e7, { step: eR })), (ei[68] = eR), (ei[69] = a)) : (a = ei[69]),
          ei[70] !== e.showWorkEmailCheck
            ? ((i =
                e.showWorkEmailCheck &&
                (0, s.jsx)("p", {
                  className: "text-base leading-relaxed text-secondary",
                  children: (0, s.jsx)(g.A, {
                    id: "rosalind.customerApplication.organizationEligibility",
                    defaultMessage:
                      "Apply for access to <model>GPT-Rosalind</model> on behalf of your company or institution. Select its eligible ChatGPT workspace (such as Business or Enterprise) or its API organization. We don\u2019t accept applications for personal use.",
                    values: { model: aG },
                  }),
                })),
              (ei[70] = e.showWorkEmailCheck),
              (ei[71] = i))
            : (i = ei[71]),
          ei[72] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, s.jsx)("h2", {
                id: "rosalind-step-heading-0",
                tabIndex: -1,
                className: "text-sm leading-5 text-secondary",
                children: (0, s.jsx)(g.A, {
                  id: "rosalind.customerApplication.currentOrganization",
                  defaultMessage: "Current organization:",
                }),
              })),
              (ei[72] = t))
            : (t = ei[72]),
          ei[73] !== e$ || ei[74] !== e.renderOrganizationPicker
            ? ((n = e.renderOrganizationPicker(e$)), (ei[73] = e$), (ei[74] = e.renderOrganizationPicker), (ei[75] = n))
            : (n = ei[75]),
          ei[76] !== e.eduApplicationBlocked
            ? ((r =
                e.eduApplicationBlocked &&
                (0, s.jsx)(ae.l, {
                  variant: "callout",
                  type: "warning",
                  role: "note",
                  Icon: K.dGN,
                  content: (0, s.jsx)("p", {
                    className: "text-warning-soft",
                    children: (0, s.jsx)(g.A, {
                      id: "rosalind.customerApplication.enterpriseEduUnavailableWithLink",
                      defaultMessage:
                        "You're signed into an Enterprise EDU account. We're actively working on a solution to provide institutional access to universities. If you are part of an academic lab, you can continue with the <lab>Academic lab</lab> flow.",
                      values: { lab: aH },
                    }),
                  }),
                })),
              (ei[76] = e.eduApplicationBlocked),
              (ei[77] = r))
            : (r = ei[77]),
          ei[78] !== e.applicantEmail ||
          ei[79] !== e.embedded ||
          ei[80] !== e.needsWorkEmail ||
          ei[81] !== e.showWorkEmailCheck
            ? ((o =
                e.showWorkEmailCheck &&
                e.applicantEmail &&
                (0, s.jsxs)("div", {
                  className: "flex min-w-0 flex-col items-start gap-1.5",
                  children: [
                    (0, s.jsx)("p", {
                      className: "break-words select-text",
                      children: (0, s.jsx)(g.A, {
                        id: "rosalind.customerApplication.signedInEmail",
                        defaultMessage: "Signed in as {email}",
                        values: { email: (0, s.jsx)("bdi", { children: e.applicantEmail }, "email") },
                      }),
                    }),
                    e.needsWorkEmail
                      ? (0, s.jsx)(ae.l, {
                          variant: "errorNotice",
                          role: "note",
                          content: (0, s.jsx)("p", {
                            className: "text-danger-surface",
                            children: (0, s.jsx)(g.A, {
                              id: "rosalind.customerApplication.personalEmail",
                              defaultMessage:
                                "You\u2019re signed in with a personal email. {hasAccountMenu, select, true {Open the account menu in the top right and switch to a work or institutional email whose domain matches your organization\u2019s website.} other {Open this application in a browser and sign in with a work or institutional email whose domain matches your organization\u2019s website.}}",
                              values: { hasAccountMenu: !e.embedded && (0, as.x)({ browser: !0 }) },
                            }),
                          }),
                        })
                      : (0, s.jsx)("p", {
                          className: "text-sm leading-5 text-secondary",
                          children: (0, s.jsx)(g.A, {
                            id: "rosalind.customerApplication.workEmail",
                            defaultMessage:
                              "Use a work or institutional email whose domain matches your organization\u2019s website. We\u2019ll send a code to this address during verification.",
                          }),
                        }),
                  ],
                })),
              (ei[78] = e.applicantEmail),
              (ei[79] = e.embedded),
              (ei[80] = e.needsWorkEmail),
              (ei[81] = e.showWorkEmailCheck),
              (ei[82] = o))
            : (o = ei[82]),
          ei[83] !== i || ei[84] !== n || ei[85] !== r || ei[86] !== o
            ? ((l = (0, s.jsxs)("section", {
                className: "flex min-w-0 flex-col gap-3 border-b border-default pb-6",
                children: [i, t, n, r, o],
              })),
              (ei[83] = i),
              (ei[84] = n),
              (ei[85] = r),
              (ei[86] = o),
              (ei[87] = l))
            : (l = ei[87]),
          ei[88] !== e.existingApplication || ei[89] !== e.showWorkEmailCheck
            ? ((c =
                !e.existingApplication &&
                (0, s.jsxs)("div", {
                  className: "flex flex-col gap-6",
                  children: [
                    !e.showWorkEmailCheck &&
                      (0, s.jsx)("p", {
                        className: "text-base leading-relaxed text-secondary",
                        children: (0, s.jsx)(g.A, {
                          id: "rosalind.customerApplication.introduction",
                          defaultMessage:
                            "Apply for expanded access to <model>GPT-Rosalind</model> for scientific research in ChatGPT, Codex, or the API.",
                          values: { model: aG },
                        }),
                      }),
                    (0, s.jsxs)("section", {
                      className: "flex flex-col gap-2",
                      children: [
                        (0, s.jsx)("h3", {
                          className: "font-medium",
                          children: (0, s.jsx)(g.A, {
                            id: "rosalind.labEntrypoint.approvalHeading",
                            defaultMessage: "Once you\u2019re approved",
                          }),
                        }),
                        (0, s.jsx)("p", {
                          className: "leading-relaxed text-secondary",
                          children: (0, s.jsx)(g.A, {
                            id: "rosalind.customerApplication.approvalDescription",
                            defaultMessage:
                              "An organization owner or administrator activates access, then assigns it to individuals up to your organization\u2019s seat limit.",
                          }),
                        }),
                      ],
                    }),
                    (0, s.jsxs)("section", {
                      className: "flex flex-col gap-3 rounded-xl bg-secondary-soft p-5",
                      children: [
                        (0, s.jsx)("h3", {
                          className: "font-medium",
                          children: (0, s.jsx)(g.A, {
                            id: "rosalind.labEntrypoint.requirementsHeading",
                            defaultMessage: "What you\u2019ll need",
                          }),
                        }),
                        (0, s.jsxs)("ul", {
                          className: "flex list-disc flex-col gap-2.5 ps-4.5 text-secondary",
                          children: [
                            (0, s.jsx)("li", {
                              children: (0, s.jsx)(g.A, {
                                id: "rosalind.customerApplication.identityRequirements",
                                defaultMessage: "Identity and business details",
                              }),
                            }),
                            (0, s.jsx)("li", {
                              children: (0, s.jsx)(g.A, {
                                id: "rosalind.labEntrypoint.researchPlans",
                                defaultMessage: "Research plans and intended use",
                              }),
                            }),
                            (0, s.jsx)("li", {
                              children: (0, s.jsx)(g.A, {
                                id: "rosalind.labEntrypoint.safeguards",
                                defaultMessage: "Access locations and research safeguards",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })),
              (ei[88] = e.existingApplication),
              (ei[89] = e.showWorkEmailCheck),
              (ei[90] = c))
            : (c = ei[90]),
          ei[91] !== e.contextPending
            ? ((d =
                e.contextPending &&
                (0, s.jsx)("p", {
                  className: "text-xs leading-4.5 text-secondary select-text",
                  role: "status",
                  children: (0, s.jsx)(g.A, { ...z.organizationsLoading }),
                })),
              (ei[91] = e.contextPending),
              (ei[92] = d))
            : (d = ei[92]),
          ei[93] !== eF ||
          ei[94] !== e.contextPending ||
          ei[95] !== e.eduApplicationBlocked ||
          ei[96] !== e.existingApplication ||
          ei[97] !== e.needsWorkEmail ||
          ei[98] !== e.workspaceHandoffRequired ||
          ei[99] !== ax
            ? ((u =
                !e.eduApplicationBlocked &&
                !eF &&
                !e.needsWorkEmail &&
                !e.contextPending &&
                !e.existingApplication &&
                (0, s.jsx)("p", {
                  className: "text-xs leading-4.5 text-secondary select-text",
                  role: "alert",
                  children: e.workspaceHandoffRequired
                    ? (0, s.jsx)(g.A, {
                        id: "codex.rosalind.workspaceRecovery.required",
                        defaultMessage: "Open this organization\u2019s workspace to continue",
                      })
                    : (0, s.jsx)(g.A, { ...ax }),
                })),
              (ei[93] = eF),
              (ei[94] = e.contextPending),
              (ei[95] = e.eduApplicationBlocked),
              (ei[96] = e.existingApplication),
              (ei[97] = e.needsWorkEmail),
              (ei[98] = e.workspaceHandoffRequired),
              (ei[99] = ax),
              (ei[100] = u))
            : (u = ei[100]),
          ei[101] !== eF ||
          ei[102] !== e.contextAvailable ||
          ei[103] !== e.contextPending ||
          ei[104] !== e.eduApplicationBlocked ||
          ei[105] !== e.existingApplication ||
          ei[106] !== e.needsWorkEmail ||
          ei[107] !== e.onRetryContext ||
          ei[108] !== e.submissionEnabled
            ? ((p =
                !e.eduApplicationBlocked &&
                !e.existingApplication &&
                !eF &&
                !e.contextPending &&
                (!e.contextAvailable || (!e.needsWorkEmail && e.submissionEnabled)) &&
                (0, s.jsx)(m.$, {
                  color: "secondary",
                  size: "dialogAction",
                  type: "button",
                  onClick: e.onRetryContext,
                  children: (0, s.jsx)(g.A, { ...z.retryOrganizationLookup }),
                })),
              (ei[101] = eF),
              (ei[102] = e.contextAvailable),
              (ei[103] = e.contextPending),
              (ei[104] = e.eduApplicationBlocked),
              (ei[105] = e.existingApplication),
              (ei[106] = e.needsWorkEmail),
              (ei[107] = e.onRetryContext),
              (ei[108] = e.submissionEnabled),
              (ei[109] = p))
            : (p = ei[109]),
          ei[110] !== eC
            ? ((f =
                eC &&
                (0, s.jsx)("p", {
                  className: "text-sm text-danger",
                  role: "alert",
                  children: (0, s.jsx)(g.A, { ...eC }),
                })),
              (ei[110] = eC),
              (ei[111] = f))
            : (f = ei[111]),
          ei[112] !== e$ ||
          ei[113] !== ah ||
          ei[114] !== e.canceledApplicationUrl ||
          ei[115] !== e.existingApplication ||
          ei[116] !== e.existingApplicationStatus ||
          ei[117] !== e.onRetryContext ||
          ei[118] !== e.workspaceHandoffRequired
            ? ((h = e.existingApplication
                ? (e.existingApplicationStatus ??
                  (!e.workspaceHandoffRequired &&
                    (0, s.jsx)(m.$, {
                      color: "secondary",
                      size: "dialogAction",
                      type: "button",
                      onClick: e.onRetryContext,
                      children: (0, s.jsx)(g.A, { ...z.retryOrganizationLookup }),
                    })))
                : (0, s.jsxs)("div", {
                    className: "flex flex-wrap items-center gap-3",
                    children: [
                      (0, s.jsxs)(m.$, {
                        color: "primary",
                        size: "dialogAction",
                        type: "button",
                        disabled: !e$,
                        onClick: ah,
                        children: [
                          (0, s.jsx)(g.A, {
                            id: "rosalind.labEntrypoint.continueApplication",
                            defaultMessage: "Continue application",
                          }),
                          (0, s.jsx)(K.Imh, {}),
                        ],
                      }),
                      e.canceledApplicationUrl &&
                        (0, s.jsx)(m.z, {
                          to: e.canceledApplicationUrl,
                          color: "secondary",
                          size: "dialogAction",
                          children: (0, s.jsx)(g.A, {
                            id: "chatgpt.rosalind_access.customer.view_canceled_application",
                            defaultMessage: "View canceled application",
                          }),
                        }),
                    ],
                  })),
              (ei[112] = e$),
              (ei[113] = ah),
              (ei[114] = e.canceledApplicationUrl),
              (ei[115] = e.existingApplication),
              (ei[116] = e.existingApplicationStatus),
              (ei[117] = e.onRetryContext),
              (ei[118] = e.workspaceHandoffRequired),
              (ei[119] = h))
            : (h = ei[119]),
          ei[120] !== d || ei[121] !== u || ei[122] !== p || ei[123] !== f || ei[124] !== h
            ? ((_ = (0, s.jsxs)("div", { className: "flex min-w-0 flex-col gap-6", children: [d, u, p, f, h] })),
              (ei[120] = d),
              (ei[121] = u),
              (ei[122] = p),
              (ei[123] = f),
              (ei[124] = h),
              (ei[125] = _))
            : (_ = ei[125]),
          ei[126] !== a || ei[127] !== l || ei[128] !== c || ei[129] !== _
            ? ((A = (0, s.jsxs)(s.Fragment, { children: [a, l, c, _] })),
              (ei[126] = a),
              (ei[127] = l),
              (ei[128] = c),
              (ei[129] = _),
              (ei[130] = A))
            : (A = ei[130]),
          A
        )
      }
      let aT = 4 === eR
      ;(ei[131] !== ah || ei[132] !== a_ || ei[133] !== eR
        ? ((N = (e) => {
            ;(e.preventDefault(), 3 === eR ? a_() : ah())
          }),
          (ei[131] = ah),
          (ei[132] = a_),
          (ei[133] = eR),
          (ei[134] = N))
        : (N = ei[134]),
        ei[135] !== eS ||
        ei[136] !== eF ||
        ei[137] !== au ||
        ei[138] !== ad ||
        ei[139] !== am ||
        ei[140] !== al ||
        ei[141] !== eR
          ? ((C =
              4 === eR
                ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)("h2", {
                        className: "sr-only",
                        id: `rosalind-step-heading-${eR}`,
                        tabIndex: -1,
                        children: (0, s.jsx)(g.A, { ...z.responsibleOfficial }),
                      }),
                      (0, s.jsx)(eP, { answers: eS, fieldErrors: al, disabled: !eF || au, onChange: am }),
                    ],
                  })
                : (0, s.jsxs)("div", {
                    className: "flex flex-col gap-1",
                    children: [
                      (0, s.jsxs)("h2", {
                        className: "text-heading-sm leading-6 font-medium select-none",
                        id: `rosalind-step-heading-${eR}`,
                        tabIndex: -1,
                        children: [
                          (0, s.jsx)("span", { className: "sr-only", children: (0, s.jsx)(g.A, { ...ad.heading }) }),
                          (0, s.jsx)("span", {
                            "aria-hidden": "true",
                            children: (0, s.jsx)(g.A, { ...ad.visualHeading }),
                          }),
                        ],
                      }),
                      (0, s.jsx)("p", {
                        className: "text-sm text-secondary",
                        children: (0, s.jsx)(g.A, { ...ad.visualDescription }),
                      }),
                    ],
                  })),
            (ei[135] = eS),
            (ei[136] = eF),
            (ei[137] = au),
            (ei[138] = ad),
            (ei[139] = am),
            (ei[140] = al),
            (ei[141] = eR),
            (ei[142] = C))
          : (C = ei[142]),
        ei[143] !== al ||
        ei[144] !== ez ||
        ei[145] !== e.checkPersona ||
        ei[146] !== e.organization ||
        ei[147] !== e.startPersona ||
        ei[148] !== eR
          ? ((O =
              -1 === eR &&
              e.organization &&
              (0, s.jsxs)("section", {
                className: "flex flex-col gap-3",
                "data-validation-field": "persona",
                children: [
                  (0, s.jsx)(
                    aP,
                    {
                      organizationId: e.organization.id,
                      previousStatus: ez,
                      startPersona: e.startPersona,
                      checkPersona: e.checkPersona,
                      onStatusChange: (e, a) => {
                        ;(ek(e), eq(a))
                      },
                      onActivityChange: ew,
                    },
                    e.organization.id,
                  ),
                  (0, s.jsx)(ev, { field: "persona", error: al.persona }),
                ],
              })),
            (ei[143] = al),
            (ei[144] = ez),
            (ei[145] = e.checkPersona),
            (ei[146] = e.organization),
            (ei[147] = e.startPersona),
            (ei[148] = eR),
            (ei[149] = O))
          : (O = ei[149]),
        ei[150] !== eS ||
        ei[151] !== au ||
        ei[152] !== am ||
        ei[153] !== al ||
        ei[154] !== e.capabilities ||
        ei[155] !== e.hasWorkspace ||
        ei[156] !== eR
          ? ((E =
              1 === eR &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(aO, { capabilities: e.capabilities }),
                  (0, s.jsxs)("fieldset", {
                    className: "flex min-w-0 flex-col gap-3",
                    disabled: au,
                    "data-validation-field": "products",
                    ...ep("products", al.products),
                    children: [
                      (0, s.jsx)("legend", {
                        className: "text-sm leading-5 font-medium select-none",
                        children: (0, s.jsx)(g.A, { ...z.requestedAccessVisualHeading }),
                      }),
                      (0, s.jsx)("p", {
                        className: "text-sm leading-5 text-secondary select-text",
                        children: (0, s.jsx)(g.A, { ...z.requestedAccessVisualDescription }),
                      }),
                      (0, s.jsx)("div", {
                        className: "flex flex-col gap-2.5",
                        children: e_.map((a) =>
                          (0, s.jsx)(
                            e9.m,
                            {
                              content:
                                "chatgpt-codex" !== a.id || e.hasWorkspace
                                  ? null
                                  : (0, s.jsx)(g.A, {
                                      id: "rosalind.application.workspaceRequiredTooltip",
                                      defaultMessage: "You must be signed into an account with a ChatGPT workspace",
                                    }),
                              children: (0, s.jsx)(e9.m.TriggerDecorator, {
                                focusable: "chatgpt-codex" === a.id && !e.hasWorkspace,
                                unstyled: !0,
                                children: (0, s.jsxs)("label", {
                                  htmlFor: `product-${a.id}`,
                                  className:
                                    "group relative grid min-h-18 cursor-interaction grid-cols-[2.5rem_minmax(0,1fr)_auto] items-center gap-x-3 gap-y-0.5 rounded-xl border border-default p-3 select-none data-[disabled=true]:cursor-not-allowed data-[disabled=true]:bg-secondary-soft data-[disabled=true]:text-disabled data-[state=selected]:border-text",
                                  "data-disabled": "chatgpt-codex" === a.id && !e.hasWorkspace,
                                  "data-state": eS.products.includes(a.id) ? "selected" : "unselected",
                                  children: [
                                    (0, s.jsx)("span", {
                                      className:
                                        "row-span-2 flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary-soft",
                                      children: (0, s.jsx)(a.Icon, {}),
                                    }),
                                    (0, s.jsxs)("span", {
                                      className: "text-sm font-medium",
                                      children: [
                                        (0, s.jsx)("span", {
                                          className: "sr-only",
                                          children: (0, s.jsx)(g.A, { ...a.title }),
                                        }),
                                        (0, s.jsx)("span", {
                                          "aria-hidden": "true",
                                          children: (0, s.jsx)(g.A, { ...a.visualTitle }),
                                        }),
                                      ],
                                    }),
                                    (0, s.jsx)("span", {
                                      className:
                                        "col-start-2 text-xs leading-5 text-secondary select-text group-data-[disabled=true]:text-disabled",
                                      children: (0, s.jsx)(g.A, { ...a.description }),
                                    }),
                                    (0, s.jsx)(en.S, {
                                      id: `product-${a.id}`,
                                      name: `product-${a.id}`,
                                      className: "col-start-3 row-span-2 row-start-1",
                                      checked: eS.products.includes(a.id),
                                      disabled: au || ("chatgpt-codex" === a.id && !e.hasWorkspace),
                                      onCheckedChange: (e) =>
                                        am(
                                          "products",
                                          e ? [...eS.products, a.id] : eS.products.filter((e) => e !== a.id),
                                        ),
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
                      (0, s.jsx)(ev, { field: "products", error: al.products }),
                    ],
                  }),
                  (0, s.jsx)(eI, {
                    capabilities: e.capabilities,
                    researchPurpose: eS.researchPurpose,
                    researchScopes: eS.researchScopes,
                    fieldErrors: al,
                    disabled: au,
                    setResearchPurpose: (e) => am("researchPurpose", e),
                    toggleResearchScope: (e, a) => {
                      let i = eS.researchScopes.filter((a) => a !== e)
                      ;(a &&
                        (i =
                          "none" === e ? ["none"] : [...eS.researchScopes.filter((a) => "none" !== a && a !== e), e]),
                        am("researchScopes", i))
                    },
                  }),
                ],
              })),
            (ei[150] = eS),
            (ei[151] = au),
            (ei[152] = am),
            (ei[153] = al),
            (ei[154] = e.capabilities),
            (ei[155] = e.hasWorkspace),
            (ei[156] = eR),
            (ei[157] = E))
          : (E = ei[157]),
        ei[158] !== eS ||
        ei[159] !== au ||
        ei[160] !== er ||
        ei[161] !== am ||
        ei[162] !== al ||
        ei[163] !== es ||
        ei[164] !== eR
          ? ((L =
              2 === eR &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsxs)("div", {
                    className: "flex flex-col gap-2",
                    "data-validation-field": "primaryCountry",
                    children: [
                      (0, s.jsxs)("label", {
                        id: "primary-country-label",
                        className: "text-sm leading-5 font-medium select-none",
                        htmlFor: "primary-country",
                        children: [
                          (0, s.jsx)("span", {
                            className: "sr-only",
                            children: (0, s.jsx)(g.A, { ...z.primaryCountry }),
                          }),
                          (0, s.jsx)("span", {
                            "aria-hidden": !0,
                            children: (0, s.jsx)(g.A, { ...z.primaryCountryVisualHeading }),
                          }),
                        ],
                      }),
                      (0, s.jsx)("p", {
                        id: "primary-country-help",
                        className: "text-sm leading-5 text-secondary select-text",
                        children: (0, s.jsx)(g.A, { ...z.primaryCountryVisualDescription }),
                      }),
                      (0, s.jsx)(an.x, {
                        id: "primary-country",
                        describedBy: `primary-country-help${al.primaryCountry ? ` ${eu("primaryCountry")}` : ""}`,
                        options: er,
                        placeholder: (0, s.jsx)(g.A, { ...z.countryPlaceholder }),
                        searchLabel: es.formatMessage(z.additionalCountriesSearch),
                        noResults: (0, s.jsx)(g.A, { ...z.additionalCountriesNoResults }),
                        value: eS.primaryCountry,
                        disabled: au,
                        invalid: !!al.primaryCountry || void 0,
                        onChange: (e) => {
                          ;(am("primaryCountry", e),
                            eT((a) => ({ ...a, additionalCountries: a.additionalCountries.filter((a) => a !== e) })))
                        },
                      }),
                      (0, s.jsx)(ev, { field: "primaryCountry", error: al.primaryCountry }),
                    ],
                  }),
                  (0, s.jsxs)("fieldset", {
                    className: "flex min-w-0 flex-col gap-4",
                    disabled: au,
                    "data-validation-field": "additionalLocations",
                    ...ep("additionalLocations", al.additionalLocations),
                    children: [
                      (0, s.jsx)(el.I3, {
                        id: "additional-locations-label",
                        as: "legend",
                        children: (0, s.jsx)(g.A, { ...z.additionalLocationsVisualHeading }),
                      }),
                      (0, s.jsx)("div", {
                        className: "pb-2",
                        children: (0, s.jsx)(aa.e, {
                          className: "flex-wrap gap-2",
                          "aria-labelledby": "additional-locations-label",
                          joined: !1,
                          role: "group",
                          children: ["no", "yes", "unsure"].map((e) =>
                            (0, s.jsx)(
                              m.$,
                              {
                                id: `additional-locations-${e}`,
                                "aria-pressed": eS.additionalLocations === e,
                                color: eS.additionalLocations === e ? "tinted" : "outlineSubtle",
                                radius: "full",
                                size: "cardAction",
                                type: "button",
                                onClick: () => {
                                  ;(am("additionalLocations", e), "yes" !== e && eT(aU))
                                },
                                children: (0, s.jsx)(g.A, {
                                  ...{ yes: z.additionalYes, no: z.additionalNo, unsure: z.additionalUnsure }[e],
                                }),
                              },
                              e,
                            ),
                          ),
                        }),
                      }),
                      (0, s.jsx)(ev, { field: "additionalLocations", error: al.additionalLocations }),
                    ],
                  }),
                  "yes" === eS.additionalLocations &&
                    (0, s.jsxs)("div", {
                      className: "flex flex-col gap-2",
                      "data-validation-field": "additionalCountries",
                      children: [
                        (0, s.jsx)("label", {
                          id: "additional-countries-label",
                          className: "text-sm leading-5 font-medium select-none",
                          htmlFor: "additional-countries",
                          children: (0, s.jsx)(g.A, { ...z.additionalCountries }),
                        }),
                        (0, s.jsx)(an.x, {
                          id: "additional-countries",
                          multiple: !0,
                          value: eS.additionalCountries,
                          options: er
                            .filter((e) => e.value !== eS.primaryCountry)
                            .map((e) => ({
                              ...e,
                              disabled:
                                eS.additionalCountries.length >= I.XO.additionalCountries.max &&
                                !eS.additionalCountries.includes(e.value),
                            })),
                          placeholder: (0, s.jsx)(g.A, { ...z.additionalCountriesPlaceholder }),
                          searchLabel: es.formatMessage(z.additionalCountriesSearch),
                          noResults: (0, s.jsx)(g.A, { ...z.additionalCountriesNoResults }),
                          disabled: au,
                          invalid: !!al.additionalCountries || void 0,
                          describedBy: al.additionalCountries ? eu("additionalCountries") : void 0,
                          onChange: (e) => {
                            ;(e.length < eS.additionalCountries.length || e.length <= I.XO.additionalCountries.max) &&
                              am("additionalCountries", e)
                          },
                        }),
                        (0, s.jsx)(ev, { field: "additionalCountries", error: al.additionalCountries }),
                      ],
                    }),
                  (0, s.jsxs)("fieldset", {
                    className: "flex min-w-0 flex-col gap-3",
                    disabled: au,
                    "data-validation-field": "selectedSafeguards",
                    children: [
                      (0, s.jsxs)("legend", {
                        className: "flex items-baseline gap-2 text-sm leading-5 font-medium select-none",
                        children: [
                          (0, s.jsx)(g.A, { ...z.safeguardsVisualHeading }),
                          (0, s.jsx)("span", {
                            className: "font-normal text-tertiary",
                            children: (0, s.jsx)(g.A, { ...z.safeguardsOptionalLabel }),
                          }),
                        ],
                      }),
                      (0, s.jsx)("p", {
                        className: "text-sm leading-5 text-secondary select-text",
                        children: (0, s.jsx)(g.A, { ...z.safeguardsVisualDescription }),
                      }),
                      (0, s.jsx)("div", {
                        className: "grid gap-3 sm:grid-cols-2",
                        children: ex.map((e) =>
                          (0, s.jsx)(
                            eb,
                            {
                              id: `safeguard-${e.id}`,
                              checked: eS.selectedSafeguards?.includes(e.id) ?? !1,
                              onChange: (a) => {
                                ;(am(
                                  "selectedSafeguards",
                                  a
                                    ? [...(eS.selectedSafeguards ?? []), e.id]
                                    : eS.selectedSafeguards?.filter((a) => a !== e.id),
                                ),
                                  "other" !== e.id || a || eT(aq))
                              },
                              title: (0, s.jsxs)(s.Fragment, {
                                children: [
                                  (0, s.jsx)("span", {
                                    className: "sr-only",
                                    children: (0, s.jsx)(g.A, { ...e.title }),
                                  }),
                                  (0, s.jsx)("span", {
                                    "aria-hidden": !0,
                                    children: (0, s.jsx)(g.A, { ...e.visualTitle }),
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
                  eS.selectedSafeguards?.includes("other") &&
                    (0, s.jsxs)("div", {
                      className: "flex flex-col gap-2",
                      "data-validation-field": "otherSafeguardDetails",
                      children: [
                        (0, s.jsx)("label", {
                          className: "text-sm leading-5 font-medium select-none",
                          htmlFor: "other-safeguard-details",
                          children: (0, s.jsx)(g.A, { ...z.otherSafeguards }),
                        }),
                        (0, s.jsx)(et, {
                          id: "other-safeguard-details",
                          name: "other-safeguard-details",
                          variant: "outline",
                          size: "2xl",
                          resize: "vertical",
                          maxHeight: "none",
                          value: eS.otherSafeguardDetails,
                          onChange: (e) => am("otherSafeguardDetails", e.target.value),
                          maxLength: I.XO.otherSafeguardDetails.max,
                          disabled: au,
                          ...ep("otherSafeguardDetails", al.otherSafeguardDetails),
                        }),
                        (0, s.jsx)(ev, { field: "otherSafeguardDetails", error: al.otherSafeguardDetails }),
                      ],
                    }),
                  (0, s.jsxs)("div", {
                    className: "flex flex-col gap-2 rounded-xl bg-secondary-soft p-4",
                    "data-validation-field": "confirmResearchSafeguards",
                    children: [
                      (0, s.jsx)(eb, {
                        id: "confirm-research-safeguards",
                        checked: eS.confirmResearchSafeguards,
                        onChange: (e) => am("confirmResearchSafeguards", e),
                        invalid: !!al.confirmResearchSafeguards,
                        describedBy: al.confirmResearchSafeguards
                          ? "application-error-confirmResearchSafeguards"
                          : void 0,
                        title: (0, s.jsx)(g.A, { ...z.safeguardsConfirmation }),
                      }),
                      (0, s.jsx)(ev, { field: "confirmResearchSafeguards", error: al.confirmResearchSafeguards }),
                    ],
                  }),
                ],
              })),
            (ei[158] = eS),
            (ei[159] = au),
            (ei[160] = er),
            (ei[161] = am),
            (ei[162] = al),
            (ei[163] = es),
            (ei[164] = eR),
            (ei[165] = L))
          : (L = ei[165]))
      let aj =
        3 === eR &&
        (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)("div", {
              className: "flex flex-col gap-4",
              children: [
                (0, s.jsx)(J.e, {
                  title: (0, s.jsx)(g.A, { ...z.summaryOrganization }),
                  disabled: au,
                  onEdit: () => af(0),
                  children: (0, s.jsx)(ey, { label: z.summaryOrganization, children: e.organization?.name }),
                }),
                (0, s.jsxs)(J.e, {
                  title: (0, s.jsx)(g.A, { id: "rosalind.review.research", defaultMessage: "Research" }),
                  disabled: au,
                  onEdit: () => af(1),
                  children: [
                    (0, s.jsx)(ey, {
                      label: z.researchPurposeSummary,
                      children: (0, s.jsx)("span", { className: "whitespace-pre-wrap", children: eS.researchPurpose }),
                    }),
                    (0, s.jsx)(ey, {
                      label: z.summaryScope,
                      children: (0, s.jsx)(x.dT, {
                        type: "unit",
                        value: eA.filter((e) => eS.researchScopes.includes(e.id)).map(aD),
                      }),
                    }),
                    (0, s.jsx)(ey, {
                      label: z.requestedAccess,
                      children: (0, s.jsx)(x.dT, {
                        type: "unit",
                        value: e_.filter((e) => eS.products.includes(e.id)).map(ak),
                      }),
                    }),
                  ],
                }),
                e.showResponsibleOfficial &&
                  (0, s.jsxs)(J.e, {
                    title: (0, s.jsx)(g.A, { ...z.responsibleOfficial }),
                    disabled: au,
                    onEdit: () => af(4),
                    children: [
                      (0, s.jsx)(ey, { label: z.responsibleOfficialName, children: e0.responsibleOfficialName }),
                      (0, s.jsx)(ey, { label: z.responsibleOfficialEmail, children: e0.responsibleOfficialEmail }),
                      e0.responsibleOfficialRole &&
                        (0, s.jsx)(ey, { label: z.responsibleOfficialRole, children: e0.responsibleOfficialRole }),
                    ],
                  }),
                (0, s.jsxs)(J.e, {
                  title: (0, s.jsx)(g.A, { ...z.locationsStep }),
                  disabled: au,
                  onEdit: () => af(2),
                  children: [
                    (0, s.jsx)(ey, {
                      label: z.summaryPrimaryLocation,
                      children: es.formatDisplayName(eS.primaryCountry, { type: "region" }) ?? eS.primaryCountry,
                    }),
                    (0, s.jsx)(ey, {
                      label: z.summaryAdditionalLocations,
                      children:
                        "yes" === eS.additionalLocations
                          ? es.formatList(
                              eS.additionalCountries.map((e) => es.formatDisplayName(e, { type: "region" }) ?? e),
                              { type: "unit" },
                            )
                          : (0, s.jsx)(g.A, {
                              ...("no" === eS.additionalLocations ? z.additionalNo : z.additionalUnsure),
                            }),
                    }),
                    (0, s.jsx)(ey, {
                      label: z.safeguardsVisualLabel,
                      children: eS.selectedSafeguards?.length
                        ? (0, s.jsxs)("div", {
                            className: "flex min-w-0 flex-col gap-2",
                            children: [
                              (0, s.jsx)("ul", {
                                className: "flex min-w-0 flex-col gap-1",
                                children: ar.Rs.filter((e) => eS.selectedSafeguards?.includes(e.value)).map(az),
                              }),
                              eS.selectedSafeguards.includes("other") &&
                                "" !== eS.otherSafeguardDetails.trim() &&
                                (0, s.jsx)("p", {
                                  className: "whitespace-pre-wrap",
                                  children: eS.otherSafeguardDetails,
                                }),
                            ],
                          })
                        : (0, s.jsx)(g.A, { id: "rosalind.review.notSpecified", defaultMessage: "Not specified" }),
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("fieldset", {
              className: "flex flex-col gap-3",
              disabled: au,
              children: [
                (0, s.jsx)(el.I3, { as: "legend", children: (0, s.jsx)(g.A, { ...z.termsVisualHeading }) }),
                eQ.map((e) => {
                  let { key: a, label: i } = e
                  return (0, s.jsxs)(
                    "div",
                    {
                      className: "flex flex-col gap-2",
                      "data-validation-field": a,
                      children: [
                        (0, s.jsx)(eb, {
                          id: a,
                          checked: eX && eS[a],
                          onChange: (e) => am(a, e),
                          invalid: !!al[a],
                          describedBy: al[a] ? `application-error-${a}` : void 0,
                          title: (0, s.jsx)(g.A, { ...i }),
                        }),
                        (0, s.jsx)(ev, { field: a, error: al[a] }),
                      ],
                    },
                    a,
                  )
                }),
              ],
            }),
          ],
        })
      ;(ei[166] !== eC
        ? ((M =
            eC &&
            (0, s.jsx)("p", { className: "text-sm text-danger", role: "alert", children: (0, s.jsx)(g.A, { ...eC }) })),
          (ei[166] = eC),
          (ei[167] = M))
        : (M = ei[167]),
        ei[168] !== eF ||
        ei[169] !== e.contextAvailable ||
        ei[170] !== e.contextPending ||
        ei[171] !== e.onRetryContext ||
        ei[172] !== e.workspaceHandoffRequired ||
        ei[173] !== ax
          ? ((w =
              !eF &&
              !e.contextPending &&
              !e.workspaceHandoffRequired &&
              (0, s.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [
                  (0, s.jsx)("p", {
                    className: "text-sm text-secondary",
                    role: "alert",
                    children: (0, s.jsx)(g.A, { ...ax }),
                  }),
                  !e.contextAvailable &&
                    (0, s.jsx)(m.$, {
                      color: "secondary",
                      size: "dialogAction",
                      type: "button",
                      onClick: e.onRetryContext,
                      children: (0, s.jsx)(g.A, { ...z.retryOrganizationLookup }),
                    }),
                ],
              })),
            (ei[168] = eF),
            (ei[169] = e.contextAvailable),
            (ei[170] = e.contextPending),
            (ei[171] = e.onRetryContext),
            (ei[172] = e.workspaceHandoffRequired),
            (ei[173] = ax),
            (ei[174] = w))
          : (w = ei[174]),
        ei[175] !== ay || ei[176] !== af
          ? ((k = () => af(ay)), (ei[175] = ay), (ei[176] = af), (ei[177] = k))
          : (k = ei[177]),
        ei[178] === Symbol.for("react.memo_cache_sentinel")
          ? ((D = (0, s.jsx)(K.tOb, {})), (U = (0, s.jsx)(g.A, { ...z.back })), (ei[178] = D), (ei[179] = U))
          : ((D = ei[178]), (U = ei[179])),
        ei[180] !== au || ei[181] !== k
          ? ((H = (0, s.jsxs)(m.$, {
              color: "outline",
              size: "dialogAction",
              type: "button",
              disabled: au,
              onClick: k,
              children: [D, U],
            })),
            (ei[180] = au),
            (ei[181] = k),
            (ei[182] = H))
          : (H = ei[182]))
      let aN = !eF || Object.keys(ao).length > 0
      ;(ei[183] !== aI ? ((B = (0, s.jsx)(g.A, { ...aI })), (ei[183] = aI), (ei[184] = B)) : (B = ei[184]),
        ei[185] !== eR || ei[186] !== eE
          ? ((G = 3 !== eR && !eE && (0, s.jsx)(K.Imh, {})), (ei[185] = eR), (ei[186] = eE), (ei[187] = G))
          : (G = ei[187]),
        ei[188] !== au || ei[189] !== aN || ei[190] !== B || ei[191] !== G
          ? ((V = (0, s.jsxs)(m.$, {
              color: "primary",
              size: "dialogAction",
              type: "submit",
              disabled: au,
              "aria-disabled": aN,
              children: [B, G],
            })),
            (ei[188] = au),
            (ei[189] = aN),
            (ei[190] = B),
            (ei[191] = G),
            (ei[192] = V))
          : (V = ei[192]),
        ei[193] !== H || ei[194] !== V
          ? ((W = (0, s.jsxs)("div", {
              className: "flex flex-wrap items-center justify-between gap-3",
              children: [H, V],
            })),
            (ei[193] = H),
            (ei[194] = V),
            (ei[195] = W))
          : (W = ei[195]),
        ei[196] !== eR
          ? ((Y =
              3 === eR &&
              (0, s.jsxs)("div", {
                className: "mt-1 flex items-start justify-end gap-2 text-end text-secondary",
                children: [
                  (0, s.jsx)(K.$Rp, {}),
                  (0, s.jsx)(el.Rr, { children: (0, s.jsx)(g.A, { ...z.reviewStartsVisual }) }),
                ],
              })),
            (ei[196] = eR),
            (ei[197] = Y))
          : (Y = ei[197]),
        ei[198] !== W || ei[199] !== Y
          ? ((F = (0, s.jsxs)("div", {
              className: "mt-1 flex flex-col gap-4 border-t border-default pt-5",
              children: [W, Y],
            })),
            (ei[198] = W),
            (ei[199] = Y),
            (ei[200] = F))
          : (F = ei[200]),
        ei[201] !== aS ||
        ei[202] !== eR ||
        ei[203] !== aT ||
        ei[204] !== N ||
        ei[205] !== C ||
        ei[206] !== O ||
        ei[207] !== E ||
        ei[208] !== L ||
        ei[209] !== aj ||
        ei[210] !== M ||
        ei[211] !== w ||
        ei[212] !== F
          ? (($ = (0, s.jsxs)("form", {
              className: "flex min-w-0 flex-col gap-6",
              "data-step": eR,
              noValidate: aT,
              onSubmit: N,
              children: [aS, C, O, E, L, aj, M, w, F],
            })),
            (ei[201] = aS),
            (ei[202] = eR),
            (ei[203] = aT),
            (ei[204] = N),
            (ei[205] = C),
            (ei[206] = O),
            (ei[207] = E),
            (ei[208] = L),
            (ei[209] = aj),
            (ei[210] = M),
            (ei[211] = w),
            (ei[212] = F),
            (ei[213] = $))
          : ($ = ei[213]))
      let aM = null != e8,
        aw = e8?.organizationName ?? "",
        aW = e8?.body.organizationId ?? ""
      return (
        ei[214] !== e8 || ei[215] !== ag
          ? ((X = () => {
              ;(e8 &&
                ag(
                  "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_SUBMISSION_CONFIRMATION",
                  "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_CANCELLED",
                ),
                eG(null))
            }),
            (ei[214] = e8),
            (ei[215] = ag),
            (ei[216] = X))
          : (X = ei[216]),
        ei[217] !== aA ? ((Q = () => void aA()), (ei[217] = aA), (ei[218] = Q)) : (Q = ei[218]),
        ei[219] !== eE || ei[220] !== aM || ei[221] !== aw || ei[222] !== aW || ei[223] !== X || ei[224] !== Q
          ? ((ee = (0, s.jsx)(aC, {
              open: aM,
              organizationName: aw,
              organizationId: aW,
              submitting: eE,
              onClose: X,
              onConfirm: Q,
            })),
            (ei[219] = eE),
            (ei[220] = aM),
            (ei[221] = aw),
            (ei[222] = aW),
            (ei[223] = X),
            (ei[224] = Q),
            (ei[225] = ee))
          : (ee = ei[225]),
        ei[226] !== $ || ei[227] !== ee
          ? ((ea = (0, s.jsxs)(s.Fragment, { children: [$, ee] })), (ei[226] = $), (ei[227] = ee), (ei[228] = ea))
          : (ea = ei[228]),
        ea
      )
    }
    function az(e) {
      return (0, s.jsx)("li", { children: e.label }, e.value)
    }
    function ak(e) {
      return (0, s.jsx)(g.A, { ...e.visualTitle }, e.id)
    }
    function aD(e) {
      return (0, s.jsx)(g.A, { ...e.title }, e.id)
    }
    function aq(e) {
      return { ...e, otherSafeguardDetails: "" }
    }
    function aU(e) {
      return { ...e, additionalCountries: [] }
    }
    function aH(e) {
      return (0, s.jsx)(at.f, { children: e })
    }
    function aB(e) {
      return void 0 !== aL[e.field]
    }
    function aG(e) {
      return (0, s.jsx)(
        eC.G,
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
    function aV(e, a) {
      return "gpt-rosalind-access-v2" === a ? (0, I.Ug)(e) : (0, I.R5)(e)
    }
    function aW(e) {
      let a,
        i,
        n,
        r,
        o,
        l,
        c,
        d,
        p,
        f,
        h,
        _,
        A,
        x,
        b,
        v,
        y = (0, t.c)(48),
        {
          application: I,
          answers: P,
          applicantName: R,
          applicantEmail: S,
          organization: T,
          identity: j,
          onRefreshContext: N,
          onCanceled: C,
        } = e
      ;(y[0] !== I.bioagentsApplicationReference ||
      y[1] !== I.organizationId ||
      y[2] !== j.accountId ||
      y[3] !== j.userId
        ? ((a = [
            "rosalind-submission-receipt",
            j.userId,
            j.accountId,
            I.organizationId,
            I.bioagentsApplicationReference,
          ]),
          (y[0] = I.bioagentsApplicationReference),
          (y[1] = I.organizationId),
          (y[2] = j.accountId),
          (y[3] = j.userId),
          (y[4] = a))
        : (a = y[4]),
        y[5] !== I || y[6] !== j
          ? ((i = (e) => {
              let { signal: a } = e
              return Y(j, I, a)
            }),
            (y[5] = I),
            (y[6] = j),
            (y[7] = i))
          : (i = y[7]),
        y[8] !== a || y[9] !== i
          ? ((n = { queryKey: a, queryFn: i, retry: !1, staleTime: 3e4 }), (y[8] = a), (y[9] = i), (y[10] = n))
          : (n = y[10]))
      let { data: O, refetch: E } = (0, u.I)(n)
      y[11] !== I || y[12] !== O
        ? ((r = O ?? { ...I, canResumeVerification: !0 === I.canResumeVerification }),
          (y[11] = I),
          (y[12] = O),
          (y[13] = r))
        : (r = y[13])
      let L = r,
        M = L.state
      y[14] !== L ? ((o = eN(L)), (y[14] = L), (y[15] = o)) : (o = y[15])
      let w = o
      return (
        y[16] !== M
          ? ((l =
              "access_granted" !== M &&
              (0, s.jsxs)("p", {
                className: "flex items-center gap-2 text-xs text-secondary",
                children: [(0, s.jsx)(K.$Rp, {}), (0, s.jsx)(g.A, { ...k.noAccess })],
              })),
            (y[16] = M),
            (y[17] = l))
          : (l = y[17]),
        y[18] !== N || y[19] !== E
          ? ((c = () => {
              ;(E(), N())
            }),
            (y[18] = N),
            (y[19] = E),
            (y[20] = c))
          : (c = y[20]),
        y[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, s.jsx)(g.A, { ...k.refresh })), (p = (0, s.jsx)(K.Imh, {})), (y[21] = d), (y[22] = p))
          : ((d = y[21]), (p = y[22])),
        y[23] !== c
          ? ((f = (0, s.jsxs)(m.$, { onClick: c, color: "secondary", size: "dialogAction", children: [d, p] })),
            (y[23] = c),
            (y[24] = f))
          : (f = y[24]),
        y[25] !== E
          ? ((h = () => {
              E()
            }),
            (y[25] = E),
            (y[26] = h))
          : (h = y[26]),
        y[27] !== L || y[28] !== j || y[29] !== C || y[30] !== h
          ? ((_ = (0, s.jsx)(eU, {
              application: L,
              identity: j,
              disabled: !1,
              surface: "CHATGPT_WEB_ROSALIND_APPLICATION_SURFACE_FORM",
              onCanceled: C,
              onRefresh: h,
            })),
            (y[27] = L),
            (y[28] = j),
            (y[29] = C),
            (y[30] = h),
            (y[31] = _))
          : (_ = y[31]),
        y[32] !== f || y[33] !== _
          ? ((A = (0, s.jsxs)("div", { className: "flex flex-wrap items-center gap-3", children: [f, _] })),
            (y[32] = f),
            (y[33] = _),
            (y[34] = A))
          : (A = y[34]),
        y[35] !== A || y[36] !== l
          ? ((x = (0, s.jsxs)(s.Fragment, { children: [l, A] })), (y[35] = A), (y[36] = l), (y[37] = x))
          : (x = y[37]),
        y[38] !== w
          ? ((b =
              w &&
              (0, s.jsxs)("aside", {
                className: "flex flex-col gap-2 rounded-xl border border-default p-4",
                children: [
                  (0, s.jsx)("h2", { className: "text-sm font-semibold", children: (0, s.jsx)(g.A, { ...w.title }) }),
                  (0, s.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, s.jsx)(g.A, { ...w.description, values: w.descriptionValues }),
                  }),
                ],
              })),
            (y[38] = w),
            (y[39] = b))
          : (b = y[39]),
        y[40] !== P || y[41] !== S || y[42] !== R || y[43] !== L || y[44] !== T || y[45] !== x || y[46] !== b
          ? ((v = (0, s.jsx)(eS, {
              application: L,
              answers: P,
              applicantName: R,
              applicantEmail: S,
              organization: T,
              headingRef: aY,
              footer: x,
              children: b,
            })),
            (y[40] = P),
            (y[41] = S),
            (y[42] = R),
            (y[43] = L),
            (y[44] = T),
            (y[45] = x),
            (y[46] = b),
            (y[47] = v))
          : (v = y[47]),
        v
      )
    }
    function aY(e) {
      ;(e?.focus({ preventScroll: !0 }), e?.closest("main")?.parentElement?.scrollTo({ top: 0, behavior: "instant" }))
    }
    ;(i("OWtl"), i("iPqE"), i("hZax"))
    var aF = i("LjYy")
    function a$() {
      let e,
        a,
        i,
        n = (0, t.c)(13),
        r = (0, o.As)()
      if (r.isLoading) {
        let e
        return (
          n[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, s.jsx)(a0, {})), (n[0] = e)) : (e = n[0]),
          e
        )
      }
      if ("chatgpt" !== r.authMethod || null == r.accountId || null == r.userId) {
        let e
        return (
          n[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)(a1, {
                children: (0, s.jsx)(g.A, {
                  id: "chatgpt.rosalind_access.customer.authentication_required",
                  defaultMessage: "Sign in with your ChatGPT account to apply for GPT-Rosalind access.",
                }),
              })),
              (n[1] = e))
            : (e = n[1]),
          e
        )
      }
      n[2] !== r.accountId || n[3] !== r.userId
        ? ((e = { accountId: r.accountId, userId: r.userId }), (n[2] = r.accountId), (n[3] = r.userId), (n[4] = e))
        : (e = n[4])
      let l = e,
        c = `${l.userId}:${l.accountId}`
      n[5] !== r.email || n[6] !== r.nameAtLogin
        ? ((a = r.nameAtLogin?.trim() || r.email || null), (n[5] = r.email), (n[6] = r.nameAtLogin), (n[7] = a))
        : (a = n[7])
      let d = r.email ?? null
      return (
        n[8] !== l || n[9] !== c || n[10] !== a || n[11] !== d
          ? ((i = (0, s.jsx)(aK, { identity: l, applicantName: a, applicantEmail: d }, c)),
            (n[8] = l),
            (n[9] = c),
            (n[10] = a),
            (n[11] = d),
            (n[12] = i))
          : (i = n[12]),
        i
      )
    }
    function aK(e) {
      let a,
        i,
        o,
        l,
        h,
        x,
        b,
        v,
        y,
        I,
        S,
        T,
        j,
        C,
        O,
        E,
        z,
        k,
        D,
        q,
        U,
        H,
        B,
        G = (0, t.c)(110),
        { identity: V, applicantName: W, applicantEmail: Y } = e,
        [F, $] = (0, r.ok)(),
        K = (0, n._U)(c.JW, "2099503913"),
        Z = (0, n._U)(c.JW, "3175816697"),
        X = F.get("organization_id") ?? F.get("organizationId") ?? void 0,
        [J, Q] = (0, p.useState)(null),
        ee = !K
      G[0] !== ee ? ((a = { enabled: ee }), (G[0] = ee), (G[1] = a)) : (a = G[1])
      let { data: ea, isLoading: ei } = (0, n._U)(f.sE, V.accountId, a),
        es =
          null == ea
            ? void 0
            : Object.values(ea.accounts).find((e) => {
                let { account: a } = e
                return a.account_id === V.accountId
              })?.account,
        et = es?.organization_id,
        en = new Map()
      if (!K && null != ea)
        for (let { account: e } of Object.values(ea.accounts))
          "workspace" === e.structure &&
            !e.is_deactivated &&
            e.organization_id &&
            (0, A.V$)(e.plan_type) &&
            d.includes(e.plan_type ?? "") &&
            en.set(e.organization_id, e.name || e.organization_id)
      ;(G[2] !== V.accountId || G[3] !== V.userId
        ? ((i = ["rosalind-customer-application-discovery", V.userId, V.accountId]),
          (G[2] = V.accountId),
          (G[3] = V.userId),
          (G[4] = i))
        : (i = G[4]),
        G[5] !== V
          ? ((o = (e) => {
              let { signal: a } = e
              return L(V, { signal: a })
            }),
            (G[5] = V),
            (G[6] = o))
          : (o = G[6]),
        G[7] !== i || G[8] !== o
          ? ((l = { queryKey: i, queryFn: o, retry: !1, staleTime: 0, refetchOnWindowFocus: !0 }),
            (G[7] = i),
            (G[8] = o),
            (G[9] = l))
          : (l = G[9]))
      let er = (0, u.I)(l),
        eo = new Set([...(er.data?.applications ?? []), ...(er.data?.latestCanceledApplications ?? [])].map(aQ)),
        [el] = 1 === eo.size ? eo : []
      G[10] !== er.data?.organizations
        ? ((h = er.data?.organizations ?? []), (G[10] = er.data?.organizations), (G[11] = h))
        : (h = G[11])
      let ec = [...h]
      for (let [e, a] of en) ec.some((a) => a.id === e) || ec.push({ id: e, name: a, submissionEligible: !1 })
      let ed =
          ec.find((e) => {
            let { id: a } = e
            return a === et
          }) ??
          ec.find((e) => {
            let { id: a } = e
            return a === el
          }) ??
          ec.find(aJ) ??
          ec[0],
        eu = X ?? ed?.id ?? ""
      null == ea ||
        ((B = Object.values(ea.accounts).filter(
          ({ account: e }) =>
            e.organization_id === eu &&
            null != e.account_id &&
            /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(e.account_id) &&
            "personal" !== e.structure &&
            !e.is_deactivated &&
            ("account-owner" === e.account_user_role ||
              "account-admin" === e.account_user_role ||
              "standard-user" === e.account_user_role) &&
            e.plan_type !== aF.x.K12 &&
            ((0, A.Hw)(e.plan_type) || (0, A.uz)(e.plan_type)),
        )),
        (B.find((e) => e.can_access_with_session) ?? B[0])?.account.account_id)
      let ep = (0, u.I)({
        queryKey: ["rosalind-customer-application-context", V.userId, V.accountId, eu],
        queryFn: (e) => {
          let { signal: a } = e
          return L(V, { organizationId: eu, signal: a })
        },
        enabled: "" !== eu,
        retry: !1,
        staleTime: 0,
        refetchOnWindowFocus: !0,
      })
      if (er.isPending || ei || ("" !== eu && ep.isPending)) {
        let e
        return (
          G[12] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, s.jsx)(a0, {})), (G[12] = e)) : (e = G[12]),
          e
        )
      }
      if (null == er.data) {
        let e, a, i, t, n
        return (
          G[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)(e8, { lookupFailed: !0, createBusinessOrganizationShown: !1 })), (G[13] = e))
            : (e = G[13]),
          G[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, s.jsx)("p", {
                role: "alert",
                children: (0, s.jsx)(g.A, {
                  id: "chatgpt.rosalind_access.customer.context_failed",
                  defaultMessage: "We couldn\u2019t load your GPT-Rosalind application.",
                }),
              })),
              (G[14] = a))
            : (a = G[14]),
          G[15] !== er ? ((i = () => void er.refetch()), (G[15] = er), (G[16] = i)) : (i = G[16]),
          G[17] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, s.jsx)(g.A, {
                id: "chatgpt.rosalind_access.customer.context_retry",
                defaultMessage: "Try again",
              })),
              (G[17] = t))
            : (t = G[17]),
          G[18] !== i
            ? ((n = (0, s.jsxs)(a1, {
                children: [
                  e,
                  a,
                  (0, s.jsx)(m.$, {
                    color: "secondary",
                    size: "dialogAction",
                    type: "button",
                    onClick: i,
                    children: t,
                  }),
                ],
              })),
              (G[18] = i),
              (G[19] = n))
            : (n = G[19]),
          n
        )
      }
      let eg = ep.data?.organizations.find((e) => {
          let { id: a } = e
          return a === eu
        }),
        ef = ec.map((e) => (e.id === eg?.id ? eg : e))
      null == eg ||
        ef.some((e) => {
          let { id: a } = e
          return a === eg.id
        }) ||
        ef.push(eg)
      let em = "" !== eu && ep.data?.applicationHistoryKnownOrganizationIds.includes(eu) === !0,
        eh = em ? ep.data : er.data,
        e_ = eh?.applications.find((e) => {
          let { organizationId: a } = e
          return a === eu
        }),
        eA = eh?.latestCanceledApplications.find((e) => {
          let { organizationId: a } = e
          return a === eu
        }),
        ex = F.get("view_canceled"),
        eb = e_ ?? (eA?.bioagentsApplicationReference === ex ? eA : void 0),
        ev = null == eb && en.has(eu),
        ey = null != eg && em && !ep.isError && !0
      if (ey && null != eA && null == eb) {
        let e = new URLSearchParams(F)
        ;(e.set("organization_id", eu),
          e.set("view_canceled", eA.bioagentsApplicationReference),
          e.delete("organizationId"),
          e.delete("reapply"),
          e.delete("workspace_handoff"),
          (x = `/rosalind/application?${e}`))
      }
      let eI = null != eb && ey
      G[20] !== er || G[21] !== ep
        ? ((b = function () {
            ;(ep.refetch(), er.refetch())
          }),
          (G[20] = er),
          (G[21] = ep),
          (G[22] = b))
        : (b = G[22])
      let eP = b,
        eR = J?.application.organizationId === eu ? J : null
      if (
        null != eR &&
        null == e_ &&
        eA?.bioagentsApplicationReference !== eR.application.bioagentsApplicationReference
      ) {
        let e, a, i
        return (
          G[23] !== eg || G[24] !== eu
            ? ((e = eg ?? { id: eu, name: eu }), (G[23] = eg), (G[24] = eu), (G[25] = e))
            : (e = G[25]),
          G[26] !== eP || G[27] !== Q
            ? ((a = () => {
                ;(Q(null), eP())
              }),
              (G[26] = eP),
              (G[27] = Q),
              (G[28] = a))
            : (a = G[28]),
          G[29] !== Y ||
          G[30] !== W ||
          G[31] !== eR.answers ||
          G[32] !== eR.application ||
          G[33] !== V ||
          G[34] !== eP ||
          G[35] !== e ||
          G[36] !== a
            ? ((i = (0, s.jsx)(
                aW,
                {
                  application: eR.application,
                  answers: eR.answers,
                  applicantName: W,
                  applicantEmail: Y,
                  organization: e,
                  identity: V,
                  onRefreshContext: eP,
                  onCanceled: a,
                },
                eR.application.bioagentsApplicationReference,
              )),
              (G[29] = Y),
              (G[30] = W),
              (G[31] = eR.answers),
              (G[32] = eR.application),
              (G[33] = V),
              (G[34] = eP),
              (G[35] = e),
              (G[36] = a),
              (G[37] = i))
            : (i = G[37]),
          i
        )
      }
      G[38] !== F ? ((v = F.get("workspace_handoff")), (G[38] = F), (G[39] = v)) : (v = G[39])
      let eS = "true" === v
      G[40] !== er.isFetching ||
      G[41] !== eb ||
      G[42] !== V ||
      G[43] !== eP ||
      G[44] !== ep.data ||
      G[45] !== ep.isFetching ||
      G[46] !== eg ||
      G[47] !== eI
        ? ((y = eI
            ? (0, s.jsx)(
                e1,
                {
                  identity: V,
                  organization: eg,
                  target: eb,
                  surface: "CHATGPT_WEB_ROSALIND_APPLICATION_SURFACE_FORM",
                  canRequestResearchUpgrade:
                    ep.data?.capabilities?.applicationSchemaVersion === "gpt-rosalind-access-v3" &&
                    !0 === ep.data.capabilities.researchUpgradeRequests,
                  contextRefreshing: er.isFetching || ep.isFetching,
                  refreshContext: eP,
                },
                eb.bioagentsApplicationReference,
              )
            : null),
          (G[40] = er.isFetching),
          (G[41] = eb),
          (G[42] = V),
          (G[43] = eP),
          (G[44] = ep.data),
          (G[45] = ep.isFetching),
          (G[46] = eg),
          (G[47] = eI),
          (G[48] = y))
        : (y = G[48])
      let eT = y
      ;(G[49] !== eI ? ((I = !eI && (0, s.jsx)(_.Z, {})), (G[49] = eI), (G[50] = I)) : (I = G[50]),
        G[51] !== F ? ((S = F.get("embedded")), (G[51] = F), (G[52] = S)) : (S = G[52]))
      let ej = "codex" === S
      ;(G[53] !== ea
        ? ((T = null == ea ? [] : Object.values(ea.accounts).flatMap(aX)), (G[53] = ea), (G[54] = T))
        : (T = G[54]),
        G[55] !== er || G[56] !== V || G[57] !== ef
          ? ((j = null), (G[55] = er), (G[56] = V), (G[57] = ef), (G[58] = j))
          : (j = G[58]))
      let eN = er.isError || ep.isError,
        eC =
          es?.structure === "workspace" &&
          !es.is_deactivated &&
          et === eu &&
          ((0, A.R2)(es.plan_type) || (K && (0, A.V$)(es.plan_type) && d.includes(es.plan_type ?? ""))),
        eO = "" === eu || em,
        eE = null != eA
      G[59] !== eS || G[60] !== V || G[61] !== eu || G[62] !== eI || G[63] !== eT
        ? ((C = eT), (G[59] = eS), (G[60] = V), (G[61] = eu), (G[62] = eI), (G[63] = eT), (G[64] = C))
        : (C = G[64])
      let eL = ep.data?.submissionEnabled ?? !1,
        eM = ep.data?.capabilities
      return (
        G[65] !== $ || G[66] !== Q
          ? ((O = (e) => {
              ;(Q(null),
                $(
                  (a) => {
                    let i = new URLSearchParams(a)
                    return (
                      i.set("organization_id", e),
                      i.delete("organizationId"),
                      i.delete("reapply"),
                      i.delete("view_canceled"),
                      i.set("workspace_handoff", "true"),
                      i
                    )
                  },
                  { replace: !0 },
                ))
            }),
            (G[65] = $),
            (G[66] = Q),
            (G[67] = O))
          : (O = G[67]),
        G[68] !== er || G[69] !== ep || G[70] !== eu
          ? ((E = () => {
              ;(er.refetch(), "" !== eu && ep.refetch())
            }),
            (G[68] = er),
            (G[69] = ep),
            (G[70] = eu),
            (G[71] = E))
          : (E = G[71]),
        G[72] !== eP || G[73] !== Q
          ? ((z = (e, a) => {
              ;(Q({ application: e, answers: a }), eP())
            }),
            (G[72] = eP),
            (G[73] = Q),
            (G[74] = z))
          : (z = G[74]),
        G[75] !== V
          ? ((k = (e) =>
              (async function (e, a) {
                try {
                  var i, s
                  let t,
                    n = await R.Request.safeRequest("post", "/rosalind/access/applications", {
                      parameters: { header: a.headers },
                      additionalHeaders: { [P.zBc]: e.accountId, ...a.headers },
                      expectedIdentity: e,
                      expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 502, 503],
                      requestBody: a.body,
                      retry: !1,
                      signal: void 0,
                    }),
                    r = N.safeParse(n)
                  if (
                    !r.success ||
                    r.data.organizationId !== a.body.organizationId ||
                    ((i = r.data),
                    (s = a.body),
                    (t =
                      "requestedEnhancedPrivacy" in s
                        ? s.requestedEnhancedPrivacy
                          ? "research_zdr"
                          : "research_non_zdr"
                        : (s.requestedResearchMode ?? "research_non_zdr")),
                    (void 0 !== i.requestedResearchMode && i.requestedResearchMode !== t) ||
                      (void 0 === i.personaInquiryId) != (void 0 === i.personaEnvironmentId))
                  )
                    throw Error("Invalid Rosalind application response")
                  return { submitted: !0, ...r.data }
                } catch (i) {
                  let e = (function (e, a) {
                    let i = w(e)
                    if (null == i) return null
                    let { body: s, status: t } = i
                    if (409 === t && "already_submitted" === s.code) {
                      let e = N.safeParse(s)
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
                    switch (s.code) {
                      case "application_history_limit":
                      case "application_unprocessable":
                      case "backend_unavailable":
                      case "idempotency_conflict":
                      case "invalid_application":
                      case "invalid_idempotency_key":
                      case "organization_unavailable":
                      case "submissions_disabled":
                        return { submitted: !1, code: s.code }
                      case "fresh_persona_required":
                      case "suitability_admission_conflict":
                        return { submitted: !1, code: "application_unprocessable" }
                      case "persona_verification_unavailable":
                        return { submitted: !1, code: "backend_unavailable" }
                      default:
                        if (422 === t) return { submitted: !1, code: "invalid_application" }
                        if (403 === t) return { submitted: !1, code: "organization_unavailable" }
                        if (t >= 500) return { submitted: !1, code: "backend_unavailable" }
                        return { submitted: !1, code: "invalid_backend_response" }
                    }
                  })(i, a.body.organizationId)
                  if (null != e) return e
                  throw i
                }
              })(V, e)),
            (D = (e) =>
              (async function (e, a) {
                return M(
                  R.Request.safeRequest("post", "/rosalind/access/persona/start", {
                    additionalHeaders: { [P.zBc]: e.accountId },
                    expectedIdentity: e,
                    expectedErrorStatuses: [400, 401, 403, 404, 422, 502, 503],
                    requestBody: a,
                    retry: !1,
                    signal: void 0,
                  }),
                )
              })(V, e)),
            (q = (e) =>
              (async function (e, a) {
                return M(
                  R.Request.safeRequest("post", "/rosalind/access/persona/status", {
                    additionalHeaders: { [P.zBc]: e.accountId },
                    expectedIdentity: e,
                    expectedErrorStatuses: [400, 401, 403, 404, 422, 502, 503],
                    requestBody: a,
                    retry: !1,
                    signal: void 0,
                  }),
                )
              })(V, e)),
            (G[75] = V),
            (G[76] = k),
            (G[77] = D),
            (G[78] = q))
          : ((k = G[76]), (D = G[77]), (q = G[78])),
        G[79] !== aM ||
        G[80] !== Y ||
        G[81] !== x ||
        G[82] !== ev ||
        G[83] !== eb ||
        G[84] !== ef ||
        !1 !== G[85] ||
        G[86] !== eu ||
        G[87] !== ej ||
        G[88] !== T ||
        G[89] !== j ||
        G[90] !== aZ ||
        !0 !== G[91] ||
        G[92] !== eN ||
        G[93] !== eC ||
        G[94] !== eO ||
        G[95] !== eE ||
        G[96] !== C ||
        G[97] !== eL ||
        G[98] !== eM ||
        G[99] !== O ||
        G[100] !== E ||
        G[101] !== z ||
        G[102] !== k ||
        G[103] !== D ||
        G[104] !== q ||
        G[105] !== Z
          ? ((U = (0, s.jsx)(aM, {
              applicantEmail: Y,
              embedded: ej,
              workEmailCheckEnabled: Z,
              chatgptWorkspaceOrganizationIds: T,
              createBusinessOrganizationAction: j,
              organizationActions: aZ,
              eduApplicationBlocked: ev,
              workspaceHandoffRequired: !1,
              hasWorkspace: !0,
              lookupFailed: eN,
              organizations: ef,
              selectedOrganizationId: eu,
              showResponsibleOfficial: eC,
              contextAvailable: eO,
              canceledApplicationUrl: x,
              hasCanceledApplication: eE,
              existingApplication: eb,
              existingApplicationStatus: C,
              organizationSource: "verified",
              submissionEnabled: eL,
              capabilities: eM,
              onSelectOrganization: O,
              onRetryContext: E,
              onApplicationSubmitted: z,
              submitApplication: k,
              startPersona: D,
              checkPersona: q,
            })),
            (G[79] = aM),
            (G[80] = Y),
            (G[81] = x),
            (G[82] = ev),
            (G[83] = eb),
            (G[84] = ef),
            (G[85] = !1),
            (G[86] = eu),
            (G[87] = ej),
            (G[88] = T),
            (G[89] = j),
            (G[90] = aZ),
            (G[91] = !0),
            (G[92] = eN),
            (G[93] = eC),
            (G[94] = eO),
            (G[95] = eE),
            (G[96] = C),
            (G[97] = eL),
            (G[98] = eM),
            (G[99] = O),
            (G[100] = E),
            (G[101] = z),
            (G[102] = k),
            (G[103] = D),
            (G[104] = q),
            (G[105] = Z),
            (G[106] = U))
          : (U = G[106]),
        G[107] !== I || G[108] !== U
          ? ((H = (0, s.jsxs)("section", { className: "flex flex-col gap-8 text-sm text-default", children: [I, U] })),
            (G[107] = I),
            (G[108] = U),
            (G[109] = H))
          : (H = G[109]),
        H
      )
    }
    function aZ(e) {
      return null
    }
    function aX(e) {
      let { account: a } = e
      return null == a.organization_id || "personal" === a.structure || a.is_deactivated ? [] : [a.organization_id]
    }
    function aJ(e) {
      let { submissionEligible: a } = e
      return !0 === a
    }
    function aQ(e) {
      let { organizationId: a } = e
      return a
    }
    function a0() {
      let e,
        a,
        i = (0, t.c)(2)
      return (
        i[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, s.jsx)(h.y, {})), (i[0] = e)) : (e = i[0]),
        i[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, s.jsxs)("div", {
              className: "flex min-h-40 items-center justify-center",
              role: "status",
              children: [
                e,
                (0, s.jsx)("span", {
                  className: "sr-only",
                  children: (0, s.jsx)(g.A, {
                    id: "chatgpt.rosalind_access.customer.loading",
                    defaultMessage: "Loading GPT-Rosalind application",
                  }),
                }),
              ],
            })),
            (i[1] = a))
          : (a = i[1]),
        a
      )
    }
    function a1(e) {
      let a,
        i = (0, t.c)(2),
        { children: n } = e
      return (
        i[0] !== n
          ? ((a = (0, s.jsx)("div", { className: "flex flex-col items-start gap-4", children: n })),
            (i[0] = n),
            (i[1] = a))
          : (a = i[1]),
        a
      )
    }
    function a2() {
      let e,
        a,
        i,
        d = (0, t.c)(6),
        [u] = (0, r.ok)(),
        { email: p } = (0, o.As)(),
        g = (0, n._U)(c.JW, "3175816697") && aT(p) ? "/rosalind/application" : void 0
      d[0] !== u ? ((e = u.get("embedded")), (d[0] = u), (d[1] = e)) : (e = d[1])
      let f = "codex" === e
      return (
        d[2] === Symbol.for("react.memo_cache_sentinel") ? ((a = (0, s.jsx)(a$, {})), (d[2] = a)) : (a = d[2]),
        d[3] !== g || d[4] !== f
          ? ((i = (0, s.jsx)(l.x, { accountSwitchReturnTo: g, embedded: f, children: a })),
            (d[3] = g),
            (d[4] = f),
            (d[5] = i))
          : (i = d[5]),
        i
      )
    }
  },
}
//# sourceMappingURL=185223.93b5e63728.js.map
