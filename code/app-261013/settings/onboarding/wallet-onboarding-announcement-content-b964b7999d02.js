const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./wallet-onboarding-announcement-modal-6a46460c9291.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./wallet-onboarding-announcement-modal-d1eb7efda70f.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $It as n,
  ADt as r,
  B4 as i,
  CPt as a,
  Cot as o,
  EPt as s,
  IDt as c,
  Ixt as l,
  JR as u,
  Mz as d,
  Nz as f,
  Pxt as p,
  RSt as m,
  SPt as h,
  TLt as g,
  VDt as _,
  Vxt as v,
  YR as y,
  _0 as ee,
  _O as b,
  _wt as x,
  cO as S,
  fLt as C,
  fO as w,
  fPt as T,
  gwt as E,
  ift as D,
  jDt as O,
  mO as te,
  nft as ne,
  oIt as k,
  pIt as re,
  pLt as A,
  pPt as j,
  rst as ie,
  t3 as M,
  tft as ae,
  v0 as oe,
  vO as N,
  vzt as P,
  wot as se,
  xMt as F,
  yzt as I,
  z4 as L,
  zSt as R,
  zxt as ce,
} from "./app-shared-bbfeca5e5737.js";
import {
  Djr as le,
  Ejr as z,
  Sjr as ue,
  bjr as de,
  djr as fe,
  f4n as pe,
  fMn as B,
  fjr as me,
  mMn as he,
  nbt as ge,
  pjr as _e,
  rbt as ve,
  tbt as ye,
  u4n as be,
  uMn as xe,
} from "./app-initial-5851df3f6cb1.js";
import { n as Se, t as Ce } from "./mcp-app-host-styles-55af4a679ef7.js";
import { i as V, o as H, r as we } from "./mcp-sandbox-rpc-ca8003ff80ff.js";
import { n as U, r as Te, t as Ee } from "./sandbox-origin-6479c97e7d45.js";
import { n as De, r as Oe } from "./view-queries-5ab962aa3a9a.js";
function ke(e, { styleVariables: t = {}, theme: n = `light` } = {}) {
  return `<!doctype html>
<html data-theme="${n}" style="color-scheme: ${n}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <style>
      html, body { min-height: 100%; margin: 0; background: var(--color-background-primary, #fff); }
      body { color: var(--color-text-primary, #171717); font-family: var(--font-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif); }
      * { box-sizing: border-box; }
      form { display: flex; flex-direction: column; width: 100%; min-height: 100vh; padding: 28px 24px 8px; }
      .enrollment-content { display: flex; flex: 1; flex-direction: column; justify-content: center; }
      h1 { margin: 0 0 28px; color: var(--color-text-primary, #171717); font-size: 20px; font-weight: var(--font-weight-semibold, 600); line-height: 25px; letter-spacing: -0.45px; text-align: center; }
      .fields { overflow: hidden; border: 1px solid var(--color-border-primary, #d8d8d8); border-radius: 13px; background: var(--color-background-secondary, #fff); }
      label { display: grid; min-width: 0; padding: 7px 16px 6px; color: var(--color-text-primary, #171717); font-size: 13px; line-height: 17px; }
      label:focus-within { outline: none; box-shadow: inset 0 0 0 2px var(--color-ring-primary, #6b6b6b); }
      .row { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid var(--color-border-secondary, #d8d8d8); }
      .row label + label { border-left: 1px solid var(--color-border-secondary, #d8d8d8); }
      .field { position: relative; height: 24px; overflow: hidden; }
      .hosted { position: absolute; inset: 0; opacity: 0; }
      /* Match the VGS document scheme to keep its loading canvas transparent. */
      .hosted iframe { display: block; width: 100%; height: 100%; border: 0; color-scheme: light; }
      .field::before { position: absolute; top: 7px; left: 0; width: 42%; height: 10px; border-radius: 999px; background: var(--color-background-disabled, #dedede); content: ""; opacity: 0.8; }
      [data-fields-ready="true"] .hosted { opacity: 1; }
      [data-fields-ready="true"] .field::before { content: none; }
      .privacy { margin: 24px 0 0; color: var(--color-text-tertiary, #8f8f8f); font-size: 12px; line-height: 16px; text-align: center; }
      .verification select, .verification input { width: 100%; height: 32px; border: 0; background: transparent; color: inherit; font: inherit; font-size: 16px; }
      .actions { display: flex; flex-shrink: 0; flex-direction: column; }
      .status { min-height: 16px; margin: 16px 0 0; color: var(--color-text-secondary, #666); font-size: 14px; line-height: 16px; text-align: center; }
      .error { display: none; margin-top: 16px; padding: 12px; border: 1px solid var(--color-border-danger, #efc4c4); border-radius: 12px; background: var(--color-background-danger, #fff5f5); color: var(--color-text-danger, #a12020); font-size: 14px; line-height: 20px; text-align: center; }
      .error[data-visible="true"] { display: block; }
      button { width: 100%; min-height: 44px; margin-top: 16px; border: 0; border-radius: 999px; background: var(--color-background-inverse, #171717); color: var(--color-text-inverse, #fff); font: inherit; font-size: 15px; font-weight: var(--font-weight-medium, 500); cursor: var(--cursor-interaction); }
      button:disabled { background: var(--color-background-disabled, #dedede); color: var(--color-text-disabled, #8a8a8a); cursor: not-allowed; }
      .retry { display: none; }
      .retry[data-visible="true"] { display: block; }
      [hidden] { display: none !important; }
      html[data-theme="dark"], html[data-theme="dark"] body { background: var(--color-background-primary, #171717); }
      html[data-theme="dark"] body, html[data-theme="dark"] h1, html[data-theme="dark"] label { color: var(--color-text-primary, #f5f5f5); }
      html[data-theme="dark"] .fields { border-color: var(--color-border-primary, #555); background: var(--color-background-secondary, #242424); }
      html[data-theme="dark"] .row, html[data-theme="dark"] .row label + label { border-color: var(--color-border-secondary, #555); }
      html[data-theme="dark"] .privacy { color: var(--color-text-tertiary, #a3a3a3); }
      html[data-theme="dark"] .status { color: var(--color-text-secondary, #c7c7c7); }
      html[data-theme="dark"] label:focus-within { box-shadow: inset 0 0 0 2px var(--color-ring-primary, #b8b8b8); }
      html[data-theme="dark"] button { background: var(--color-background-inverse, #f5f5f5); color: var(--color-text-inverse, #171717); }
      html[data-theme="dark"] button:disabled { background: var(--color-background-disabled, #484848); color: var(--color-text-disabled, #999); }
      html[data-theme="dark"] .error { border-color: var(--color-border-danger, #744343); background: var(--color-background-danger, #342424); color: var(--color-text-danger, #f3b6b6); }
      @media (max-width: 420px) { form { padding: 22px 18px 8px; } label { padding-right: 14px; padding-left: 14px; } }
    </style>
  </head>
  <body>
    <form id="form" data-fields-ready="false">
      <div class="enrollment-content">
        <h1 id="title"></h1>
        <div class="fields" id="fields" aria-busy="true">
          <label><span id="card-number-label"></span><span class="field"><span class="hosted" id="vgs-card-number"></span></span></label>
          <div class="row">
            <label><span id="expiration-label"></span><span class="field"><span class="hosted" id="vgs-card-expiration"></span></span></label>
            <label><span id="cvc-label"></span><span class="field"><span class="hosted" id="vgs-card-cvc"></span></span></label>
          </div>
        </div>
        <p class="privacy" id="privacy"></p>
        <div class="verification" id="verification" hidden>
          <div class="fields">
            <label><span id="verification-option-label"></span><select id="verification-option"></select></label>
          </div>
          <button id="request-code" type="button"></button>
          <div id="code-fields" hidden>
            <div class="fields">
              <label><span id="verification-code-label"></span><input id="verification-code" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" pattern="[0-9]{6}" /></label>
            </div>
            <button id="verify-code" type="button"></button>
          </div>
        </div>
      </div>
      <div class="actions">
        <p class="status" id="status" role="status"></p>
        <div class="error" id="error" role="alert"></div>
        <button id="submit" type="submit" disabled></button>
        <button class="retry" id="retry" type="button"></button>
      </div>
    </form>
    <script>
      (() => {
        const messages = ${JSON.stringify(e).replaceAll(`<`, `\\u003c`)};
        const initialStyleVariables = ${JSON.stringify(t).replaceAll(`<`, `\\u003c`)};
        const initialTheme = ${JSON.stringify(n)};
        const sdkUrl = ${JSON.stringify(je)};
        const fieldInitializationTimeoutMs = ${JSON.stringify(Me)};
        const retryTool = ${JSON.stringify(W)};
        const registerTool = ${JSON.stringify(G)};
        const requestCodeTool = ${JSON.stringify(K)};
        const verifyTool = ${JSON.stringify(q)};
        const finalizeTool = ${JSON.stringify(J)};
        const stageTool = ${JSON.stringify(Y)};
        const formRoot = document.getElementById("form");
        const fieldsRoot = document.getElementById("fields");
        const status = document.getElementById("status");
        const error = document.getElementById("error");
        const submit = document.getElementById("submit");
        const retry = document.getElementById("retry");
        const verification = document.getElementById("verification");
        const verificationOption = document.getElementById("verification-option");
        const requestCodeButton = document.getElementById("request-code");
        const codeFields = document.getElementById("code-fields");
        const verificationCode = document.getElementById("verification-code");
        const verifyCodeButton = document.getElementById("verify-code");
        let sdkPromise = null;
        let sdkError = false;
        let activeAttempt = null;
        let form = null;
        let fields = [];
        let fieldValidity = [false, false, false];
        let vaultedCardId = null;
        let registrationReadyToFinalize = false;

        document.getElementById("verification-option-label").textContent = messages.verificationOption;
        document.getElementById("verification-code-label").textContent = messages.verificationCode;
        requestCodeButton.textContent = messages.sendCode;
        verifyCodeButton.textContent = messages.verifyCode;

        const applyHostStyles = () => {
          const root = document.documentElement;
          const theme = globalThis.openai?.theme === "dark" || globalThis.openai?.theme === "light"
            ? globalThis.openai.theme
            : initialTheme;
          root.dataset.theme = theme;
          root.style.colorScheme = theme;
          const styleVariables = globalThis.openai?.toolInput?.style_variables ?? initialStyleVariables;
          for (const [name, value] of Object.entries(styleVariables)) {
            if (typeof value === "string") root.style.setProperty(name, value);
          }
        };

        applyHostStyles();

        document.getElementById("title").textContent = messages.title;
        document.getElementById("card-number-label").textContent = messages.cardNumber;
        document.getElementById("expiration-label").textContent = messages.expiration;
        document.getElementById("cvc-label").textContent = messages.cvc;
        document.getElementById("privacy").textContent = messages.privacy;
        submit.textContent = messages.submit;

        const reportStage = (stage, startedAt, result) => {
          const api = globalThis.openai;
          if (!api || typeof api.callTool !== "function") return;
          void api.callTool(stageTool, {
            duration_ms: Math.max(0, Math.round(performance.now() - startedAt)),
            result,
            stage,
          }).catch(() => undefined);
        };

        const showError = (message, retryLabel) => {
          fieldsRoot.setAttribute("aria-busy", "false");
          status.textContent = "";
          error.textContent = message;
          error.dataset.visible = "true";
          submit.hidden = true;
          retry.textContent = retryLabel;
          retry.dataset.visible = "true";
        };

        const showLoading = () => {
          formRoot.hidden = false;
          formRoot.dataset.fieldsReady = "false";
          fieldsRoot.setAttribute("aria-busy", "true");
          status.textContent = messages.initializing;
          error.textContent = "";
          error.dataset.visible = "false";
          submit.hidden = false;
          submit.disabled = true;
          submit.textContent = messages.submit;
          retry.dataset.visible = "false";
        };

        const resetForm = () => {
          form = null;
          fields = [];
          fieldValidity = [false, false, false];
          vaultedCardId = null;
          registrationReadyToFinalize = false;
          verification.hidden = true;
          fieldsRoot.hidden = false;
          document.getElementById("privacy").hidden = false;
          codeFields.hidden = true;
          verificationCode.value = "";
          for (const id of ["vgs-card-number", "vgs-card-expiration", "vgs-card-cvc"]) {
            document.getElementById(id).replaceChildren();
          }
          showLoading();
        };

        const getStyle = (name, fallback) => {
          const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
          return value || fallback;
        };

        const getFieldBackground = () => {
          const background = getComputedStyle(fieldsRoot).backgroundColor;
          if (background.startsWith("rgb(")) return background;

          const canvas = document.createElement("canvas");
          canvas.width = 1;
          canvas.height = 1;
          const context = canvas.getContext("2d");
          if (!context) return background;

          for (const element of [document.documentElement, document.body, fieldsRoot]) {
            context.fillStyle = getComputedStyle(element).backgroundColor;
            context.fillRect(0, 0, 1, 1);
          }
          const [red, green, blue] = context.getImageData(0, 0, 1, 1).data;
          return "rgb(" + red + ", " + green + ", " + blue + ")";
        };

        const getFieldCss = () => {
          const isDark = document.documentElement.dataset.theme === "dark";
          return {
            "&::placeholder": { color: getStyle("--color-text-tertiary", isDark ? "#a3a3a3" : "#8b8b8b") },
            "background-color": getFieldBackground(),
            border: "0",
            "box-sizing": "border-box",
            color: getStyle("--color-text-primary", isDark ? "#f5f5f5" : "#171717"),
            "font-family": getStyle("--font-sans", "-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"),
            "font-size": "16px",
            height: "24px",
            "line-height": "24px",
            padding: "0",
            width: "100%",
          };
        };

        const loadSdk = () => {
          if (globalThis.VGSCollect && typeof globalThis.VGSCollect.create === "function") {
            return Promise.resolve(globalThis.VGSCollect);
          }
          if (sdkPromise) return sdkPromise;
          const startedAt = performance.now();
          sdkPromise = new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.async = true;
            script.src = sdkUrl;
            script.onload = () => {
              if (globalThis.VGSCollect && typeof globalThis.VGSCollect.create === "function") {
                sdkError = false;
                reportStage("sdk_load", startedAt, "success");
                resolve(globalThis.VGSCollect);
              } else {
                reject(new Error("VGS Collect did not initialize"));
              }
            };
            script.onerror = () => reject(new Error("VGS Collect failed to load"));
            document.head.appendChild(script);
          }).catch((loadError) => {
            sdkError = true;
            sdkPromise = null;
            reportStage("sdk_load", startedAt, "failure");
            throw loadError;
          });
          return sdkPromise;
        };

        const parseBootstrap = () => {
          const bootstrap = globalThis.openai?.toolResponseMetadata?.vgs_collect_bootstrap;
          if (!bootstrap || typeof bootstrap !== "object") return null;
          if (typeof bootstrap.vault_id !== "string" || !bootstrap.vault_id.trim()) return null;
          if (typeof bootstrap.access_token !== "string" || !bootstrap.access_token.trim()) return null;
          if (bootstrap.environment !== "sandbox" && bootstrap.environment !== "live") return null;
          return bootstrap;
        };

        const successfulResult = (response) => {
          const content = response?.structuredContent ?? response?.structured_content;
          if (response?.isError === true || content?.ok !== true) {
            throw new Error("Wallet did not confirm card registration");
          }
          return content;
        };

        const finalizeCard = async () => {
          if (!registrationReadyToFinalize) return;
          const startedAt = performance.now();
          submit.disabled = true;
          submit.textContent = messages.submitting;
          try {
            const result = successfulResult(await globalThis.openai.callTool(finalizeTool, {}));
            if (!result.card || typeof result.card.last4 !== "string") {
              throw new Error("Wallet did not confirm the saved card");
            }
            vaultedCardId = null;
            registrationReadyToFinalize = false;
            reportStage("save", startedAt, "success");
          } catch {
            reportStage("save", startedAt, "failure");
            showError(messages.saveError, messages.retrySave);
          }
        };

        const registerCard = async () => {
          if (!vaultedCardId) return;
          const startedAt = performance.now();
          submit.disabled = true;
          submit.textContent = messages.submitting;
          try {
            const response = await globalThis.openai.callTool(registerTool, {
              vgs_card_id: vaultedCardId,
            });
            const errorCode = (response?.structuredContent ?? response?.structured_content)?.error?.code;
            if (errorCode === "WalletDeviceRequired" || errorCode === "WalletAmexUnavailable") {
              vaultedCardId = null;
              reportStage("save", startedAt, "failure");
              const failureMessage = errorCode === "WalletAmexUnavailable" ? messages.amexUnavailable : messages.deviceRequired;
              showError(failureMessage, messages.useDifferentCard);
              return;
            }
            const result = successfulResult(response);
            if (typeof result.registration_id !== "string" || !result.registration_id.trim()) {
              throw new Error("Wallet did not provide a registration session");
            }
            vaultedCardId = null;
            if (result.status === "verification_required") {
              if (!Array.isArray(result.verification_options) || result.verification_options.length === 0) {
                throw new Error("Wallet did not provide a verification option");
              }
              verificationOption.replaceChildren();
              for (const option of result.verification_options) {
                if (typeof option?.option_id !== "string" || typeof option?.value !== "string") {
                  throw new Error("Wallet returned an invalid verification option");
                }
                const choice = document.createElement("option");
                choice.value = option.option_id;
                choice.textContent = option.value;
                verificationOption.append(choice);
              }
              fieldsRoot.hidden = true;
              document.getElementById("privacy").hidden = true;
              verification.hidden = false;
              submit.hidden = true;
              return;
            }
            if (result.status !== "ready_to_finalize") {
              throw new Error("Wallet returned an unknown verification status");
            }
            registrationReadyToFinalize = true;
            await finalizeCard();
          } catch {
            reportStage("save", startedAt, "failure");
            showError(messages.saveError, messages.retrySave);
          }
        };

        requestCodeButton.addEventListener("click", async () => {
          requestCodeButton.disabled = true;
          try {
            const result = successfulResult(await globalThis.openai.callTool(requestCodeTool, {
              option_id: verificationOption.value,
            }));
            if (result.status !== "verification_code_sent") {
              throw new Error("Wallet did not send a verification code");
            }
            codeFields.hidden = false;
            verificationCode.value = "";
            error.dataset.visible = "false";
            verificationCode.focus();
          } catch {
            error.textContent = messages.verificationError;
            error.dataset.visible = "true";
          } finally {
            requestCodeButton.disabled = false;
          }
        });

        verifyCodeButton.addEventListener("click", async () => {
          if (!/^[0-9]{6}$/.test(verificationCode.value)) {
            error.textContent = messages.verificationError;
            error.dataset.visible = "true";
            return;
          }
          verifyCodeButton.disabled = true;
          try {
            const result = successfulResult(await globalThis.openai.callTool(verifyTool, {
              otp: verificationCode.value,
            }));
            if (result.status !== "ready_to_finalize") {
              throw new Error("Wallet did not verify the card");
            }
            registrationReadyToFinalize = true;
            verification.hidden = true;
            await finalizeCard();
          } catch {
            error.textContent = messages.verificationError;
            error.dataset.visible = "true";
          } finally {
            verifyCodeButton.disabled = false;
          }
        });

        const initializeFields = async (attempt, bootstrap) => {
          const startedAt = performance.now();
          resetForm();
          let initializationTimeout;
          let timedOut = false;
          try {
            await Promise.race([
              (async () => {
                const collect = await loadSdk();
                if (activeAttempt !== attempt || timedOut) return;
                form = collect.create(bootstrap.vault_id, bootstrap.environment, () => undefined);
                form.on?.("enterPress", () => {
                  if (!submit.disabled) formRoot.requestSubmit(submit);
                });
                const css = getFieldCss();
                fields = [
                  form.cardNumberField("#vgs-card-number", { css, placeholder: "" }),
                  form.cardExpirationDateField("#vgs-card-expiration", { css, placeholder: messages.expirationPlaceholder }),
                  form.cardCVCField("#vgs-card-cvc", { css, placeholder: messages.cvcPlaceholder }),
                ];
                fields.forEach((field, index) => {
                  field.on("update", (state) => {
                    fieldValidity[index] = state?.isValid === true;
                    submit.disabled = fieldValidity.some((valid) => !valid);
                  });
                });
                await Promise.all(fields.map((field) => field.promise ?? Promise.resolve()));
                if (activeAttempt !== attempt || timedOut) return;
                if (fields.some((field) => field.loadingState !== "loaded")) {
                  throw new Error("A VGS field did not finish loading");
                }
                formRoot.dataset.fieldsReady = "true";
                fieldsRoot.setAttribute("aria-busy", "false");
                status.textContent = "";
                reportStage("fields_ready", startedAt, "success");
              })(),
              new Promise((_, reject) => {
                initializationTimeout = setTimeout(() => {
                  timedOut = true;
                  reject(new Error("VGS fields did not finish loading in time"));
                }, fieldInitializationTimeoutMs);
              }),
            ]);
          } catch {
            if (activeAttempt !== attempt) return;
            reportStage("fields_ready", startedAt, "failure");
            showError(sdkError ? messages.error : messages.bootstrapError, messages.retry);
          } finally {
            clearTimeout(initializationTimeout);
          }
        };

        const syncGlobals = () => {
          applyHostStyles();
          const css = getFieldCss();
          for (const field of fields) {
            field.update?.({ css });
          }
          const input = globalThis.openai?.toolInput;
          if (!input || input.enrollment_requested !== true) {
            if (activeAttempt !== null) {
              activeAttempt = null;
              resetForm();
            }
            return;
          }
          const attempt = String(input.enrollment_attempt) + ":" + String(input.bootstrap_retry);
          if (input.bootstrap_status === "error") {
            activeAttempt = attempt;
            showError(messages.bootstrapError, messages.retry);
            return;
          }
          if (input.bootstrap_status !== "ready") {
            showLoading();
            return;
          }
          if (activeAttempt === attempt) return;
          const bootstrap = parseBootstrap();
          if (!bootstrap) {
            activeAttempt = attempt;
            showError(messages.bootstrapError, messages.retry);
            return;
          }
          activeAttempt = attempt;
          void initializeFields(attempt, bootstrap);
        };

        formRoot.addEventListener("submit", (event) => {
          event.preventDefault();
          if (!verification.hidden) {
            if (!codeFields.hidden) verifyCodeButton.click();
            return;
          }
          const bootstrap = parseBootstrap();
          if (!form || !bootstrap || fieldValidity.some((valid) => !valid)) return;
          const startedAt = performance.now();
          submit.disabled = true;
          submit.textContent = messages.submitting;
          error.dataset.visible = "false";
          try {
            form.createCard(
              { auth: bootstrap.access_token, data: { cardholder: {} } },
              (statusCode, payload) => {
                if (statusCode === 401 || statusCode === 403) {
                  reportStage("submit", startedAt, "failure");
                  showError(messages.bootstrapError, messages.retry);
                  return;
                }
                const card = payload?.data;
                if (statusCode < 200 || statusCode >= 300 || !card || typeof card.id !== "string" || !card.id.trim()) {
                  reportStage("submit", startedAt, "failure");
                  showError(messages.error, messages.retry);
                  return;
                }
                vaultedCardId = card.id;
                reportStage("submit", startedAt, "success");
                void registerCard();
              },
              () => {
                reportStage("submit", startedAt, "failure");
                error.textContent = messages.validationError;
                error.dataset.visible = "true";
                submit.disabled = fieldValidity.some((valid) => !valid);
                submit.textContent = messages.submit;
              },
            );
          } catch {
            reportStage("submit", startedAt, "failure");
            showError(messages.error, messages.retry);
          }
        });

        retry.addEventListener("click", () => {
          if (registrationReadyToFinalize || vaultedCardId) {
            error.dataset.visible = "false";
            retry.dataset.visible = "false";
            submit.hidden = false;
            if (registrationReadyToFinalize) void finalizeCard();
            else void registerCard();
            return;
          }
          showLoading();
          void globalThis.openai.callTool(retryTool, {}).catch(() => {
            showError(messages.bootstrapError, messages.retry);
          });
        });

        globalThis.addEventListener("openai:set_globals", syncGlobals);
        void loadSdk().catch(() => undefined);
        syncGlobals();
      })();
    <\/script>
  </body>
</html>`;
}
var W, G, K, q, J, Y, Ae, je, Me;
function Ne() {
  return (Ne = e(() => {
    ((W = `__wallet_onboarding_retry_bootstrap`),
      (G = `__wallet_onboarding_register_vgs_card`),
      (K = `__wallet_onboarding_request_verification`),
      (q = `__wallet_onboarding_verify_card`),
      (J = `__wallet_onboarding_finalize_card`),
      (Y = `__wallet_onboarding_stage`),
      (Ae = {
        baseUriDomains: [],
        connectDomains: [
          `https://js.verygoodvault.com`,
          `https://js3.verygoodvault.com`,
          `https://vgs-collect-keeper.apps.verygood.systems`,
          `https://*.verygoodproxy.com`,
        ],
        frameDomains: [
          `https://js.verygoodvault.com`,
          `https://js3.verygoodvault.com`,
          `https://vgs-collect-keeper.apps.verygood.systems`,
        ],
        includeDefaultDomains: !1,
        isTrusted: !0,
        resourceDomains: [
          `https://js.verygoodvault.com`,
          `https://js3.verygoodvault.com`,
          `https://vgs-collect-keeper.apps.verygood.systems`,
        ],
      }),
      (je = `https://js.verygoodvault.com/vgs-collect/3.2.2/vgs-collect.js`),
      (Me = 15e3));
  }))();
}
function Pe(e) {
  let t = (0, Ze.c)(6),
    n;
  t[0] === e.enrollmentView
    ? (n = t[1])
    : ((n = De({ view: e.enrollmentView })), (t[0] = e.enrollmentView), (t[1] = n));
  let r = n,
    i = ce(B, r),
    a;
  return (
    t[2] !== r || t[3] !== i || t[4] !== e
      ? ((a =
          i == null
            ? null
            : (0, Qe.jsx)(Fe, { ...e, resourceIdentity: { context: r, identity: i } }, m([i]))),
        (t[2] = r),
        (t[3] = i),
        (t[4] = e),
        (t[5] = a))
      : (a = t[5]),
    a
  );
}
function Fe(e) {
  let t = (0, Ze.c)(87),
    {
      active: n,
      enrollmentAttempt: r,
      enrollmentView: i,
      onComplete: s,
      onPreparationError: c,
      onPrepared: u,
      preparing: d,
      targetElement: f,
      resourceIdentity: p,
    } = e,
    m = l(o),
    h = _(),
    y = v(Se),
    ee = (0, X.useId)(),
    b = (0, X.useRef)(n),
    x = (0, X.useRef)(!1),
    S = (0, X.useRef)(null),
    C = (0, X.useRef)(null),
    w;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((w = new Map()), (t[0] = w)) : (w = t[0]);
  let T = (0, X.useRef)(w),
    [E, D] = (0, X.useState)(0),
    [O, te] = (0, X.useState)(null),
    [k, re] = (0, X.useState)(null),
    [j, ie] = (0, X.useState)(null),
    [M, oe] = (0, X.useState)(!1),
    N = p.identity.kind === `connector` ? p.identity.connectorId : null,
    P;
  t[1] !== h.locale || t[2] !== p.identity
    ? ((P = { identity: p.identity, locale: h.locale, widgetDomain: null }),
      (t[1] = h.locale),
      (t[2] = p.identity),
      (t[3] = P))
    : (P = t[3]);
  let { data: se } = ce(Te, P),
    F = se?.sourceUrl,
    I;
  t[4] === F ? (I = t[5]) : ((I = F == null ? null : Ee(F)), (t[4] = F), (t[5] = I));
  let L = I,
    R = `wallet-onboarding-${ee}`,
    z;
  t[6] !== n ||
  t[7] !== O?.metadata ||
  t[8] !== N ||
  t[9] !== i.hostId ||
  t[10] !== i.server ||
  t[11] !== i.serverTools ||
  t[12] !== s ||
  t[13] !== c ||
  t[14] !== u ||
  t[15] !== d ||
  t[16] !== p ||
  t[17] !== m
    ? ((z = async (e, t) => {
        if (m.get(he, p) !== `current`) throw Error(`Wallet enrollment account changed`);
        if (e === `__wallet_onboarding_stage`) {
          let e = rt.parse(t);
          return (
            a.info(`wallet_onboarding_sandbox.stage`, { safe: e }),
            d && e.stage === `fields_ready` && (e.result === `success` ? u() : c()),
            {}
          );
        }
        if (e === `__wallet_onboarding_retry_bootstrap`) {
          if (!n) throw Error(`Wallet onboarding enrollment is not active`);
          return (it.parse(t), D(Ye), {});
        }
        if (
          e !== `__wallet_onboarding_register_vgs_card` &&
          e !== `__wallet_onboarding_request_verification` &&
          e !== `__wallet_onboarding_verify_card` &&
          e !== `__wallet_onboarding_finalize_card`
        )
          throw Error(`Wallet onboarding sandbox cannot call this tool`);
        if (!n && (e !== `__wallet_onboarding_finalize_card` || S.current == null))
          throw Error(`Wallet onboarding enrollment is not active`);
        let r = async (e, t) => {
          let n = RegExp(`(?:^|[._])(?:wallet_)?${e}$`),
            r = i.serverTools.find((e) => n.test(e.name));
          if (r == null) throw Error(`Wallet registration tool is unavailable`);
          let a = ue({ connectorId: N, server: i.server, toolName: r.name, tools: i.serverTools }),
            o = () => {
              if (m.get(he, p) !== `current`)
                throw Error(`Wallet enrollment account changed while calling its tool`);
            };
          if (e === `register_vgs_agentic_token`) {
            let e = ge(a.codexAppsToolIdentity);
            if (e == null) throw Error(`Wallet registration tool is unavailable`);
            return ye({ scope: m, resourceIdentity: p, ...e, toolArguments: t });
          }
          let s = await be(m, i.hostId, i.server, a.name, t);
          return (o(), fe({ isCodexAppsServer: le(i.server), toolResult: s }));
        };
        if (e === `__wallet_onboarding_register_vgs_card`) {
          let e = et.parse(t);
          if (!$e.safeParse(O?.metadata).success) throw Error(`Wallet card enrollment is unavailable`);
          S.current = null;
          let { width: n, height: i } = window.screen,
            a = await r(`register_vgs_agentic_token`, {
              vgs_card_id: e.vgs_card_id,
              device_type: `desktop`,
              ...(n > 0 && i > 0 ? { screen_dimensions: { width: n, height: i } } : {}),
            }),
            o = tt.safeParse(a.structuredContent);
          return (
            a.isError !== !0 &&
              o.success &&
              (S.current = {
                id: o.data.registration_id,
                optionIds: new Set(o.data.verification_options.map(Je)),
              }),
            a
          );
        }
        let o = S.current;
        if (o == null) throw Error(`Wallet card registration is unavailable`);
        if (e === `__wallet_onboarding_request_verification`) {
          let { option_id: e } = A({ option_id: g() }).parse(t);
          if (!o.optionIds.has(e)) throw Error(`Wallet verification option is unavailable`);
          return r(`request_vgs_card_verification`, { registration_id: o.id, option_id: e });
        }
        if (e === `__wallet_onboarding_verify_card`) {
          let { otp: e } = A({ otp: g().regex(/^[0-9]{6}$/) }).parse(t);
          return r(`verify_vgs_card`, { registration_id: o.id, otp: e });
        }
        A({}).strict().parse(t);
        let l = await r(`finalize_vgs_card_registration`, { registration_id: o.id });
        return (
          l.isError !== !0 &&
            nt.safeParse(l.structuredContent).success &&
            ((S.current = null), b.current ? s() : (x.current = !0)),
          l
        );
      }),
      (t[6] = n),
      (t[7] = O?.metadata),
      (t[8] = N),
      (t[9] = i.hostId),
      (t[10] = i.server),
      (t[11] = i.serverTools),
      (t[12] = s),
      (t[13] = c),
      (t[14] = u),
      (t[15] = d),
      (t[16] = p),
      (t[17] = m),
      (t[18] = z))
    : (z = t[18]);
  let de = (0, X.useEffectEvent)(z),
    pe;
  t[19] === c
    ? (pe = t[20])
    : ((pe = () => {
        c();
      }),
      (t[19] = c),
      (t[20] = pe));
  let B = (0, X.useEffectEvent)(pe),
    _e;
  t[21] !== n || t[22] !== s
    ? ((_e = () => {
        n && x.current && ((x.current = !1), s());
      }),
      (t[21] = n),
      (t[22] = s),
      (t[23] = _e))
    : (_e = t[23]);
  let ve = (0, X.useEffectEvent)(_e),
    xe,
    Ce;
  (t[24] === L
    ? ((xe = t[25]), (Ce = t[26]))
    : ((xe = () => {
        if (L == null) return;
        let e = document.createElement(`webview`);
        return (
          (e.className = `h-full w-full overflow-hidden border-0`),
          e.setAttribute(`partition`, ae(L)),
          ie(e),
          () => {
            (e.remove(), e.destroy?.(), ie((t) => (t === e ? null : t)));
          }
        );
      }),
      (Ce = [L]),
      (t[24] = L),
      (t[25] = xe),
      (t[26] = Ce)),
    (0, X.useLayoutEffect)(xe, Ce));
  let V;
  t[27] !== n || t[28] !== ve || t[29] !== j || t[30] !== f
    ? ((V = () => {
        if (((b.current = n), ve(), j == null)) return;
        let e = n ? f : C.current;
        e != null && j.parentElement !== e && e.appendChild(j);
      }),
      (t[27] = n),
      (t[28] = ve),
      (t[29] = j),
      (t[30] = f),
      (t[31] = V))
    : (V = t[31]);
  let H;
  (t[32] !== n || t[33] !== j || t[34] !== f
    ? ((H = [n, j, f]), (t[32] = n), (t[33] = j), (t[34] = f), (t[35] = H))
    : (H = t[35]),
    (0, X.useLayoutEffect)(V, H));
  let U;
  t[36] !== B ||
  t[37] !== de ||
  t[38] !== h ||
  t[39] !== j ||
  t[40] !== L ||
  t[41] !== m ||
  t[42] !== F ||
  t[43] !== R
    ? ((U = () => {
        if (j == null || L == null || F == null) return;
        let e = ne(F, { requireSkybridge: !0 });
        if (e == null) {
          (a.warning(`wallet_onboarding_sandbox.invalid_origin`, { safe: {} }), B());
          return;
        }
        let t = new AbortController(),
          n,
          r = performance.now();
        oe(!1);
        let i = document.documentElement.dataset.theme === `dark` ? `dark` : `light`,
          o = m.get(Se),
          s = ke(
            {
              bootstrapError: h.formatMessage(Z.bootstrapError),
              amexUnavailable: h.formatMessage(Z.amexUnavailable),
              cardNumber: h.formatMessage(Z.cardNumber),
              cvc: h.formatMessage(Z.cvc),
              cvcPlaceholder: h.formatMessage(Z.cvcPlaceholder),
              deviceRequired: h.formatMessage(Z.deviceRequired),
              error: h.formatMessage(Z.error),
              expiration: h.formatMessage(Z.expiration),
              expirationPlaceholder: h.formatMessage(Z.expirationPlaceholder),
              initializing: h.formatMessage(Z.initializing),
              privacy: h.formatMessage(Z.privacy),
              retry: h.formatMessage(Z.retry),
              retrySave: h.formatMessage(Z.retrySave),
              saveError: h.formatMessage(Z.saveError),
              sendCode: h.formatMessage(Z.sendCode),
              submit: h.formatMessage(Z.submit),
              submitting: h.formatMessage(Z.submitting),
              title: h.formatMessage(Z.title),
              useDifferentCard: h.formatMessage(Z.useDifferentCard),
              validationError: h.formatMessage(Z.validationError),
              verificationCode: h.formatMessage(Z.verificationCode),
              verificationError: h.formatMessage(Z.verificationError),
              verificationOption: h.formatMessage(Z.verificationOption),
              verifyCode: h.formatMessage(Z.verifyCode),
            },
            { styleVariables: o, theme: i },
          );
        return (
          we({
            hostApiHandlers: {
              callMcp: qe,
              callTool: (e, t) => de(e, t),
              notifyBackgroundColor: Ke,
              notifyEnvironmentError: () => {
                (a.warning(`wallet_onboarding_sandbox.environment_error`, { safe: {} }), B());
              },
              notifyIntrinsicHeight: Ge,
              notifyIntrinsicWidth: We,
              notifyNavigation: Ue,
              notifySecurityPolicyViolation: () => {
                (a.warning(`wallet_onboarding_sandbox.csp_violation`, { safe: {} }), B());
              },
              openExternal: He,
              requestDisplayMode: Ve,
              sendFollowUpMessage: Be,
              sendInstrument: ze,
              updateWidgetState: Re,
            },
            origin: e,
            sandboxId: L,
            signal: t.signal,
            sourceUrl: F,
            webview: j,
          })
            .then(async (e) => {
              if (t.signal.aborted) return;
              re(e);
              let c = e.runWidgetCode({
                csp: Ae,
                displayMode: `inline`,
                features: [],
                html: s,
                isFirstParty: !1,
                isSidebarOpen: !1,
                isTombstone: !1,
                maxHeight: 620,
                maxWidth: 568,
                measureWidth: !1,
                mcpApps: {
                  hostCapabilities: { sandbox: { csp: Ae } },
                  hostContext: {
                    availableDisplayModes: [`inline`],
                    containerDimensions: { maxHeight: 620, maxWidth: 568 },
                    deviceCapabilities: { hover: !0, touch: !1 },
                    displayMode: `inline`,
                    locale: h.locale,
                    platform: `desktop`,
                    safeAreaInsets: { bottom: 0, left: 0, right: 0, top: 0 },
                    styles: { variables: o },
                    theme: i,
                    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                    userAgent: `chatgpt`,
                  },
                  hostInfo: { name: `chatgpt` },
                },
                safeArea: { insets: { bottom: 0, left: 0, right: 0, top: 0 } },
                theme: i,
                toolInput: null,
                toolOutput: null,
                toolResponseMetadata: null,
                userAgent: {
                  capabilities: { hover: !0, touch: !1 },
                  device: { os: `unknown`, platform: `native`, type: `desktop` },
                },
                viewParams: null,
                widgetId: R,
                widgetState: null,
              });
              ((n = setTimeout(() => {
                t.signal.aborted ||
                  (a.warning(`wallet_onboarding_sandbox.init_failed`, {
                    safe: { errorName: `TimeoutError` },
                  }),
                  B(),
                  t.abort());
              }, at)),
                (await Xe(c, t.signal, () => {
                  (clearTimeout(n),
                    oe(!0),
                    a.info(`wallet_onboarding_sandbox.initialized`, {
                      safe: { durationMs: Math.max(0, Math.round(performance.now() - r)) },
                    }));
                })) === `ended` &&
                  (clearTimeout(n),
                  t.signal.aborted ||
                    (a.warning(`wallet_onboarding_sandbox.init_failed`, {
                      safe: { errorName: `MissingRunningStatus` },
                    }),
                    B())));
            })
            .catch((e) => {
              t.signal.aborted ||
                (a.warning(`wallet_onboarding_sandbox.init_failed`, {
                  safe: { errorName: e instanceof Error ? e.name : `UnknownError` },
                }),
                B());
            }),
          () => {
            (clearTimeout(n), t.abort(), oe(!1), re(null));
          }
        );
      }),
      (t[36] = B),
      (t[37] = de),
      (t[38] = h),
      (t[39] = j),
      (t[40] = L),
      (t[41] = m),
      (t[42] = F),
      (t[43] = R),
      (t[44] = U))
    : (U = t[44]);
  let De;
  (t[45] !== h || t[46] !== j || t[47] !== L || t[48] !== m || t[49] !== F || t[50] !== R
    ? ((De = [h, j, L, m, F, R]),
      (t[45] = h),
      (t[46] = j),
      (t[47] = L),
      (t[48] = m),
      (t[49] = F),
      (t[50] = R),
      (t[51] = De))
    : (De = t[51]),
    (0, X.useLayoutEffect)(U, De));
  let Oe;
  t[52] !== E ||
  t[53] !== N ||
  t[54] !== r ||
  t[55] !== i.hostId ||
  t[56] !== i.server ||
  t[57] !== i.tool.name ||
  t[58] !== B ||
  t[59] !== d ||
  t[60] !== m
    ? ((Oe = () => {
        if (!d || r === 0) return;
        let e = JSON.stringify([N, i.hostId, i.server, i.tool.name, r, E]);
        te({ attempt: r, metadata: null, retry: E, status: `loading` });
        let t = T.current.get(e);
        if (t == null) {
          let n = performance.now();
          ((t = be(m, i.hostId, i.server, i.tool.name, {}).then(
            (e) => (
              a.info(`wallet_onboarding_sandbox.bootstrap`, {
                safe: { durationMs: Math.max(0, Math.round(performance.now() - n)) },
              }),
              e
            ),
          )),
            T.current.set(e, t));
        }
        let n = !1,
          o = setTimeout(() => {
            n ||
              ((n = !0),
              a.warning(`wallet_onboarding_sandbox.bootstrap_failed`, {
                safe: { errorName: `TimeoutError` },
              }),
              te({ attempt: r, metadata: null, retry: E, status: `error` }),
              B());
          }, at);
        return (
          t
            .then((e) => {
              if (n) return;
              let t = fe({ isCodexAppsServer: le(i.server), toolResult: e }),
                a = me({ toolResult: t }),
                o = $e.safeParse(a);
              (te({
                attempt: r,
                metadata: o.success ? o.data : null,
                retry: E,
                status: o.success ? `ready` : `error`,
              }),
                o.success || B());
            })
            .catch((e) => {
              n ||
                (a.warning(`wallet_onboarding_sandbox.bootstrap_failed`, {
                  safe: { errorName: e instanceof Error ? e.name : `UnknownError` },
                }),
                te({ attempt: r, metadata: null, retry: E, status: `error` }),
                B());
            })
            .finally(() => {
              clearTimeout(o);
            }),
          () => {
            ((n = !0), clearTimeout(o));
          }
        );
      }),
      (t[52] = E),
      (t[53] = N),
      (t[54] = r),
      (t[55] = i.hostId),
      (t[56] = i.server),
      (t[57] = i.tool.name),
      (t[58] = B),
      (t[59] = d),
      (t[60] = m),
      (t[61] = Oe))
    : (Oe = t[61]);
  let W;
  (t[62] !== E ||
  t[63] !== N ||
  t[64] !== r ||
  t[65] !== i.hostId ||
  t[66] !== i.server ||
  t[67] !== i.tool.name ||
  t[68] !== d ||
  t[69] !== m
    ? ((W = [E, N, r, i.hostId, i.server, i.tool.name, d, m]),
      (t[62] = E),
      (t[63] = N),
      (t[64] = r),
      (t[65] = i.hostId),
      (t[66] = i.server),
      (t[67] = i.tool.name),
      (t[68] = d),
      (t[69] = m),
      (t[70] = W))
    : (W = t[70]),
    (0, X.useEffect)(Oe, W));
  let G, K;
  (t[71] !== y || t[72] !== h.locale || t[73] !== M || t[74] !== k
    ? ((G = () => {
        if (!M || k == null) return;
        let e = document.documentElement.dataset.theme === `dark` ? `dark` : `light`;
        Promise.all([
          k.setTheme({ theme: e }),
          k.notifyMcpAppsHostContext({
            hostContext: {
              availableDisplayModes: [`inline`],
              containerDimensions: { maxHeight: 620, maxWidth: 568 },
              deviceCapabilities: { hover: !0, touch: !1 },
              displayMode: `inline`,
              locale: h.locale,
              platform: `desktop`,
              safeAreaInsets: { bottom: 0, left: 0, right: 0, top: 0 },
              styles: { variables: y },
              theme: e,
              timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
              userAgent: `chatgpt`,
            },
          }),
        ]).catch(Le);
      }),
      (K = [y, h.locale, M, k]),
      (t[71] = y),
      (t[72] = h.locale),
      (t[73] = M),
      (t[74] = k),
      (t[75] = G),
      (t[76] = K))
    : ((G = t[75]), (K = t[76])),
    (0, X.useEffect)(G, K));
  let q, J;
  (t[77] !== O || t[78] !== r || t[79] !== y || t[80] !== M || t[81] !== d || t[82] !== k || t[83] !== R
    ? ((q = () => {
        if (!M || k == null) return;
        let e = d && O?.attempt === r ? O : null;
        k.setWidgetData({
          toolInput:
            e == null
              ? null
              : {
                  bootstrap_retry: e.retry,
                  bootstrap_status: e.status,
                  enrollment_attempt: e.attempt,
                  enrollment_requested: !0,
                  style_variables: y,
                },
          toolOutput: null,
          toolResponseMetadata: e?.metadata ?? null,
          widgetId: R,
          widgetState: null,
        }).catch(Ie);
      }),
      (J = [O, r, y, M, d, k, R]),
      (t[77] = O),
      (t[78] = r),
      (t[79] = y),
      (t[80] = M),
      (t[81] = d),
      (t[82] = k),
      (t[83] = R),
      (t[84] = q),
      (t[85] = J))
    : ((q = t[84]), (J = t[85])),
    (0, X.useEffect)(q, J));
  let Y;
  return (
    t[86] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((Y = (0, Qe.jsx)(`div`, {
          ref: C,
          "aria-hidden": `true`,
          className: `pointer-events-none fixed h-px w-px overflow-hidden opacity-0`,
        })),
        (t[86] = Y))
      : (Y = t[86]),
    Y
  );
}
function Ie() {}
function Le() {}
function Re() {}
function ze() {}
function Be() {
  return Promise.reject(Error(`Wallet onboarding sandbox cannot send follow-ups`));
}
function Ve() {
  return { mode: `inline` };
}
function He() {}
function Ue() {}
function We() {}
function Ge() {}
function Ke() {}
function qe() {
  return Promise.reject(Error(`Wallet onboarding sandbox cannot make MCP requests`));
}
function Je(e) {
  return e.option_id;
}
function Ye(e) {
  return e + 1;
}
async function Xe(e, t, n) {
  for await (let r of e) {
    if (t.aborted) return `aborted`;
    if (H.safeParse(r).success) return (n(), `running`);
  }
  return `ended`;
}
var Ze, X, Qe, $e, et, tt, nt, rt, it, at, Z;
function ot() {
  return (ot = e(() => {
    ((Ze = P()),
      R(),
      p(),
      ie(),
      D(),
      (X = I()),
      O(),
      s(),
      xe(),
      z(),
      ve(),
      Ce(),
      V(),
      _e(),
      U(),
      de(),
      pe(),
      Oe(),
      se(),
      h(),
      Ne(),
      (Qe = F()),
      ($e = A({
        vgs_collect_bootstrap: A({
          access_token: g().trim().min(1),
          environment: k([`sandbox`, `live`]),
          vault_id: g().trim().min(1),
        }),
      })),
      (et = A({ vgs_card_id: g().trim().min(1) })),
      (tt = A({
        ok: n(!0),
        registration_id: g().trim().min(1),
        status: k([`ready_to_finalize`, `verification_required`]),
        verification_options: re(A({ option_id: g() })),
      })),
      (nt = A({ card: A({ last4: g() }), ok: n(!0) })),
      (rt = A({
        duration_ms: C().nonnegative(),
        result: k([`failure`, `success`]),
        stage: k([`fields_ready`, `save`, `sdk_load`, `submit`]),
      })),
      (it = A({}).strict()),
      (at = 15e3),
      (Z = r({
        amexUnavailable: {
          id: `codexWalletOnboardingEnrollment.amexUnavailable`,
          defaultMessage: `Wallet can’t add an American Express card from this location. You can use a different card.`,
          description: `Wallet enrollment error when American Express is unavailable from the user’s location.`,
        },
        bootstrapError: {
          id: `codexWalletOnboardingEnrollment.bootstrapError`,
          defaultMessage: `The secure card session is unavailable or expired`,
          description: `Error shown when Wallet onboarding cannot authorize VGS Collect`,
        },
        cardNumber: {
          id: `codexWalletOnboardingEnrollment.cardNumber`,
          defaultMessage: `Card number`,
          description: `Label for the Wallet onboarding secure card-number field`,
        },
        cvc: {
          id: `codexWalletOnboardingEnrollment.cvc`,
          defaultMessage: `Security code`,
          description: `Label for the Wallet onboarding secure card-security-code field`,
        },
        cvcPlaceholder: {
          id: `codexWalletOnboardingEnrollment.cvcPlaceholder`,
          defaultMessage: `3 digits`,
          description: `Placeholder for the Wallet onboarding secure card-security-code field`,
        },
        deviceRequired: {
          id: `codexWalletOnboardingEnrollment.deviceRequired`,
          defaultMessage: `Wallet couldn’t confirm the information needed to add this American Express card. You can use a different card.`,
          description: `Wallet enrollment error when the information needed to add an American Express card could not be confirmed.`,
        },
        error: {
          id: `codexWalletOnboardingEnrollment.error`,
          defaultMessage: `We couldn't add this card`,
          description: `Generic error shown when Wallet onboarding cannot add a card`,
        },
        expiration: {
          id: `codexWalletOnboardingEnrollment.expiration`,
          defaultMessage: `Expiration date`,
          description: `Label for the Wallet onboarding secure card-expiration field`,
        },
        expirationPlaceholder: {
          id: `codexWalletOnboardingEnrollment.expirationMonthYearPlaceholder`,
          defaultMessage: `MM/YY`,
          description: `Format hint inside the Wallet onboarding secure card-expiration field. The input always accepts a two-digit month followed by a slash and a two-digit year, for example 03/30. Translate the month and year abbreviations if needed, but always keep month before year, including in Chinese. Do not use the locale's usual date order.`,
        },
        initializing: {
          id: `codexWalletOnboardingEnrollment.initializing`,
          defaultMessage: `Preparing secure card fields…`,
          description: `Status shown while Wallet onboarding prepares the secure card fields`,
        },
        privacy: {
          id: `codexWalletOnboardingEnrollment.privacy`,
          defaultMessage: `Fully encrypted and never shared with third party apps`,
          description: `Privacy explanation shown below Wallet onboarding secure card fields`,
        },
        retry: {
          id: `codexWalletOnboardingEnrollment.retry`,
          defaultMessage: `Try again`,
          description: `Button that retries Wallet onboarding secure-field initialization`,
        },
        retrySave: {
          id: `codexWalletOnboardingEnrollment.retrySave`,
          defaultMessage: `Save to Wallet`,
          description: `Button that retries saving a secured card to Wallet`,
        },
        saveError: {
          id: `codexWalletOnboardingEnrollment.saveError`,
          defaultMessage: `Your card was secured, but Wallet couldn't save it`,
          description: `Error shown when Wallet onboarding cannot save an already secured card`,
        },
        sendCode: {
          id: `codexWalletOnboardingEnrollment.sendCode`,
          defaultMessage: `Send verification code`,
          description: `Button to request a one-time card issuer verification code`,
        },
        submit: {
          id: `codexWalletOnboardingEnrollment.submit`,
          defaultMessage: `Add card`,
          description: `Button that submits the Wallet onboarding secure card form`,
        },
        submitting: {
          id: `codexWalletOnboardingEnrollment.submitting`,
          defaultMessage: `Adding card…`,
          description: `Status shown while Wallet onboarding adds the secured card`,
        },
        title: {
          id: `codexWalletOnboardingEnrollment.title`,
          defaultMessage: `Add new card`,
          description: `Heading for the Wallet onboarding secure card form`,
        },
        useDifferentCard: {
          id: `codexWalletOnboardingEnrollment.useDifferentCard`,
          defaultMessage: `Use a different card`,
          description: `Button that opens a new secure card form when the previous card could not be added.`,
        },
        validationError: {
          id: `codexWalletOnboardingEnrollment.validationError`,
          defaultMessage: `Check your card details and try again`,
          description: `Error shown when Wallet onboarding secure fields reject card details`,
        },
        verificationCode: {
          id: `codexWalletOnboardingEnrollment.verificationCode`,
          defaultMessage: `Six-digit verification code`,
          description: `Label for the one-time code received from the card issuer`,
        },
        verificationError: {
          id: `codexWalletOnboardingEnrollment.verificationError`,
          defaultMessage: `We couldn't verify this card. Try again`,
          description: `Error shown when the card issuer rejects a verification request or code`,
        },
        verificationOption: {
          id: `codexWalletOnboardingEnrollment.verificationOption`,
          defaultMessage: `Where should we send the verification code?`,
          description: `Label for choosing a masked email address or phone number supplied by the card issuer`,
        },
        verifyCode: {
          id: `codexWalletOnboardingEnrollment.verifyCode`,
          defaultMessage: `Verify and save`,
          description: `Button to verify the card issuer's code and save the card to Wallet`,
        },
      })));
  }))();
}
function st(e) {
  let t = (0, dt.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = (0, $.jsx)(ct, { ...e }, e.enrollmentView.hostId)), (t[0] = e), (t[1] = n)),
    n
  );
}
function ct(e) {
  let t = (0, dt.c)(21),
    { dismissAnnouncement: n, enrollmentView: r, onCloseAutoFocus: i } = e,
    [a, o] = (0, Q.useState)(`introduction`),
    [s, c] = (0, Q.useState)(1),
    [l, u] = (0, Q.useState)(!1),
    [d, f] = (0, Q.useState)(`loading`),
    [p, m] = (0, Q.useState)(null),
    h;
  t[0] !== n || t[1] !== l || t[2] !== i || t[3] !== d || t[4] !== a
    ? ((h =
        a === `introduction`
          ? (0, $.jsx)(ft, {
              dismissAnnouncement: n,
              onCloseAutoFocus: i,
              isSettingUpWallet: l && d === `loading`,
              onSetUpWallet: () => {
                (u(!0), d !== `loading` && o(`enrollment`));
              },
            })
          : (0, $.jsx)(ut, {
              completed: a === `success`,
              dismissAnnouncement: n,
              onCloseAutoFocus: i,
              preparationFailed: d === `error`,
              setSandboxTarget: m,
              onBack: () => {
                (u(!1), o(`introduction`));
              },
              onRetry: () => {
                (f(`loading`), c(lt));
              },
            })),
      (t[0] = n),
      (t[1] = l),
      (t[2] = i),
      (t[3] = d),
      (t[4] = a),
      (t[5] = h))
    : (h = t[5]);
  let g = a === `enrollment` && d !== `error`,
    _;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = () => {
        o(`success`);
      }),
      (t[6] = _))
    : (_ = t[6]);
  let v, y;
  t[7] === l
    ? ((v = t[8]), (y = t[9]))
    : ((v = () => {
        (f(`error`), l && o(`enrollment`));
      }),
      (y = () => {
        (f(`ready`), l && o(`enrollment`));
      }),
      (t[7] = l),
      (t[8] = v),
      (t[9] = y));
  let ee = a !== `success` && d !== `error`,
    b;
  t[10] !== s || t[11] !== r || t[12] !== p || t[13] !== g || t[14] !== v || t[15] !== y || t[16] !== ee
    ? ((b = (0, $.jsx)(
        Pe,
        {
          active: g,
          enrollmentAttempt: s,
          enrollmentView: r,
          onComplete: _,
          onPreparationError: v,
          onPrepared: y,
          preparing: ee,
          targetElement: p,
        },
        s,
      )),
      (t[10] = s),
      (t[11] = r),
      (t[12] = p),
      (t[13] = g),
      (t[14] = v),
      (t[15] = y),
      (t[16] = ee),
      (t[17] = b))
    : (b = t[17]);
  let x;
  return (
    t[18] !== h || t[19] !== b
      ? ((x = (0, $.jsxs)($.Fragment, { children: [h, b] })), (t[18] = h), (t[19] = b), (t[20] = x))
      : (x = t[20]),
    x
  );
}
function lt(e) {
  return e + 1;
}
function ut(e) {
  let n = (0, dt.c)(24),
    {
      completed: r,
      dismissAnnouncement: i,
      onBack: a,
      onCloseAutoFocus: o,
      onRetry: s,
      preparationFailed: l,
      setSandboxTarget: u,
    } = e,
    f = l !== void 0 && l,
    p = y(),
    m;
  n[0] === o
    ? (m = n[1])
    : ((m = { "aria-describedby": void 0, onCloseAutoFocus: o }), (n[0] = o), (n[1] = m));
  let h;
  n[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, $.jsx)(c, {
        id: `codexWalletOnboardingEnrollmentModal.close`,
        defaultMessage: `Close`,
        description: `Accessible label for closing ChatGPT Wallet card enrollment`,
      })),
      (n[2] = h))
    : (h = n[2]);
  let g;
  n[3] === i
    ? (g = n[4])
    : ((g = (e) => {
        e || i();
      }),
      (n[3] = i),
      (n[4] = g));
  let _;
  n[5] !== r || n[6] !== s || n[7] !== f || n[8] !== u || n[9] !== p
    ? ((_ = r
        ? (0, $.jsx)(x.div, {
            animate: { opacity: 1, y: 0 },
            className: `flex min-h-0 flex-1 items-center justify-center px-6 select-none`,
            initial: !p && { opacity: 0, y: 12 },
            transition: { duration: p ? 0 : 0.28 },
            children: (0, $.jsx)(S, {
              className: `items-center text-center`,
              icon: (0, $.jsx)(x.span, {
                animate: { rotate: 0, scale: 1 },
                className: `flex`,
                initial: !p && { rotate: -18, scale: 0 },
                transition: p
                  ? { duration: 0 }
                  : { damping: 18, delay: 0.12, stiffness: 320, type: `spring` },
                children: (0, $.jsx)(d, { "aria-hidden": !1, asset: ee }),
              }),
              iconBackgroundClassName: `bg-chart-green/20`,
              iconClassName: `mx-auto text-chart-green`,
              title: (0, $.jsx)(b, {
                children: (0, $.jsx)(c, {
                  id: `codexWalletOnboardingEnrollmentModal.successTitle`,
                  defaultMessage: `Your card was successfully saved`,
                  description: `Heading shown after a card is saved during ChatGPT Wallet onboarding`,
                }),
              }),
              subtitle: (0, $.jsx)(c, {
                id: `codexWalletOnboardingEnrollmentModal.successDescription`,
                defaultMessage: `You’re ready to go`,
                description: `Confirmation shown after a card is saved during ChatGPT Wallet onboarding`,
              }),
            }),
          })
        : f
          ? (0, $.jsxs)(`div`, {
              className: `flex min-h-0 flex-1 flex-col items-center justify-center gap-4 px-6 text-center select-none`,
              children: [
                (0, $.jsx)(b, {
                  children: (0, $.jsx)(c, {
                    id: `codexWalletOnboardingEnrollmentModal.preparationErrorTitle`,
                    defaultMessage: `Unable to add your card`,
                    description: `Heading shown when Wallet onboarding cannot initialize secure card enrollment`,
                  }),
                }),
                (0, $.jsx)(`p`, {
                  role: `alert`,
                  className: `text-secondary`,
                  children: (0, $.jsx)(c, {
                    id: `codexWalletOnboardingEnrollmentModal.preparationError`,
                    defaultMessage: `The secure card session is unavailable or expired`,
                    description: `Error shown when Wallet onboarding cannot initialize secure card enrollment`,
                  }),
                }),
                (0, $.jsx)(t, {
                  className: `w-full justify-center`,
                  color: `primary`,
                  size: `large`,
                  onClick: s,
                  children: (0, $.jsx)(c, {
                    id: `codexWalletOnboardingEnrollmentModal.retryPreparation`,
                    defaultMessage: `Try again`,
                    description: `Button that retries secure Wallet card-enrollment initialization`,
                  }),
                }),
              ],
            })
          : (0, $.jsxs)($.Fragment, {
              children: [
                (0, $.jsx)(b, {
                  className: `sr-only`,
                  children: (0, $.jsx)(c, {
                    id: `codexWalletOnboardingEnrollmentModal.title`,
                    defaultMessage: `Add a card to ChatGPT Wallet`,
                    description: `Accessible title for ChatGPT Wallet card enrollment`,
                  }),
                }),
                (0, $.jsx)(`div`, {
                  ref: u,
                  className: `relative min-h-0 flex-1 overflow-hidden bg-surface`,
                }),
              ],
            })),
      (n[5] = r),
      (n[6] = s),
      (n[7] = f),
      (n[8] = u),
      (n[9] = p),
      (n[10] = _))
    : (_ = n[10]);
  let v = r ? `primary` : `ghostTertiary`,
    C = r ? i : a,
    w;
  n[11] === r
    ? (w = n[12])
    : ((w = r
        ? (0, $.jsx)(c, {
            id: `codexWalletOnboardingEnrollmentModal.continue`,
            defaultMessage: `Continue`,
            description: `Button that closes the ChatGPT Wallet onboarding announcement after a card is saved`,
          })
        : (0, $.jsx)(c, {
            id: `codexWalletOnboardingEnrollmentModal.back`,
            defaultMessage: `Back`,
            description: `Button that returns from Wallet card enrollment to the Wallet introduction`,
          })),
      (n[11] = r),
      (n[12] = w));
  let T;
  n[13] !== v || n[14] !== C || n[15] !== w
    ? ((T = (0, $.jsx)(`div`, {
        className: `shrink-0 bg-surface px-6 pb-6`,
        children: (0, $.jsx)(t, {
          className: `w-full justify-center`,
          color: v,
          size: `large`,
          onClick: C,
          children: w,
        }),
      })),
      (n[13] = v),
      (n[14] = C),
      (n[15] = w),
      (n[16] = T))
    : (T = n[16]);
  let E;
  n[17] !== _ || n[18] !== T
    ? ((E = (0, $.jsxs)(`div`, { className: `flex h-full min-h-0 flex-col`, children: [_, T] })),
      (n[17] = _),
      (n[18] = T),
      (n[19] = E))
    : (E = n[19]);
  let D;
  return (
    n[20] !== E || n[21] !== m || n[22] !== g
      ? ((D = (0, $.jsx)(te, {
          open: !0,
          shouldIgnoreClickOutside: !0,
          contentClassName: `h-[min(504px,calc(100dvh-32px))] w-[min(480px,92vw)] !rounded-[16px] !bg-surface !ring-0 !backdrop-blur-none`,
          contentProps: m,
          dialogCloseClassName: `z-10`,
          dialogCloseLabel: h,
          onOpenChange: g,
          size: `feature`,
          children: E,
        })),
        (n[20] = E),
        (n[21] = m),
        (n[22] = g),
        (n[23] = D))
      : (D = n[23]),
    D
  );
}
var dt, Q, $, ft;
function pt() {
  return (pt = e(() => {
    ((dt = P()),
      oe(),
      E(),
      (Q = I()),
      O(),
      M(),
      N(),
      w(),
      f(),
      L(),
      u(),
      ot(),
      ($ = F()),
      j(),
      (ft = i(
        async () =>
          (
            await T(
              async () => {
                let { WalletOnboardingAnnouncementModal: e } = await import(
                  `./wallet-onboarding-announcement-modal-6a46460c9291.js`
                );
                return { WalletOnboardingAnnouncementModal: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]),
              import.meta.url,
            )
          ).WalletOnboardingAnnouncementModal,
        { propagateLoadError: !0, suspendToParent: !0 },
      )));
  }))();
}
pt();
export { st as WalletOnboardingAnnouncement };
//# sourceMappingURL=wallet-onboarding-announcement-content-b964b7999d02.js.map
