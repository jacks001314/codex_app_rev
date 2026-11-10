const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./inline-c294a2833837.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./app-primary-3e00728c2a4c.js",
      "./app-primary-4d86db640757.css",
      "./chatgpt-audio-playback-button-85cac1e0f7ea.js",
      "./sound-on-4a5084b084e9.js",
      "./chatgpt_learning_flashcards-ea6e2bbcd2f6.js",
      "./open-viewer-dad5e93e7bae.js",
      "./cannon-972c88b689f3.js",
      "./share-link-33a6044f6ad2.js",
      "./queries-f51d0da805fb.js",
      "./data-456ff8b7b618.js",
      "./analytics-e3d6fe450d6b.js",
      "./grid-e2ad61bb5ece.js",
      "./grid-191c1e65b715.css",
      "./inline-623773259ea0.css",
      "./preview-5ad030038d28.js",
      "./preview-cfbe5fcbf83b.js",
      "./persistence-94404ca765fd.js",
      "./dialog-69bf7fe038c1.js",
      "./observe-source-cards-5584f5292380.js",
      "./composer-suggestions-55c179121510.js",
      "./home-suggestion-staggered-item-113eac6d236d.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { OFt as t, kFt as n } from "./app-shared-2feb3d4c6fcc.js";
async function r() {
  return (
    await t(
      async () => {
        let { InlineFlashcards: e } = await import(`./inline-c294a2833837.js`);
        return { InlineFlashcards: e };
      },
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]),
      import.meta.url,
    )
  ).InlineFlashcards;
}
async function i() {
  return (
    await t(
      async () => {
        let { FlashcardsPreview: e } = await import(`./preview-5ad030038d28.js`);
        return { FlashcardsPreview: e };
      },
      __vite__mapDeps([20, 2, 1, 3, 21, 4, 5, 15, 14, 16, 17, 18, 22]),
      import.meta.url,
    )
  ).FlashcardsPreview;
}
async function a() {
  return (
    await t(
      async () => {
        let { FlashcardsDialog: e } = await import(`./dialog-69bf7fe038c1.js`);
        return { FlashcardsDialog: e };
      },
      __vite__mapDeps([23, 1, 2, 3, 21, 4, 5, 15, 14, 16, 17, 18, 22]),
      import.meta.url,
    )
  ).FlashcardsDialog;
}
async function o() {
  return (
    await t(
      async () => {
        let { observeFlashcardSourceCards: e } = await import(`./observe-source-cards-5584f5292380.js`);
        return { observeFlashcardSourceCards: e };
      },
      __vite__mapDeps([24, 1, 2, 3, 22, 4, 5, 15, 16]),
      import.meta.url,
    )
  ).observeFlashcardSourceCards;
}
async function s() {
  return (
    await t(
      async () => {
        let { FlashcardsComposerSuggestions: e } = await import(`./composer-suggestions-55c179121510.js`);
        return { FlashcardsComposerSuggestions: e };
      },
      __vite__mapDeps([25, 1, 2, 3, 4, 5, 26, 14, 15]),
      import.meta.url,
    )
  ).FlashcardsComposerSuggestions;
}
function c() {
  return (c = e(() => {
    n();
  }))();
}
export { i as a, a as i, o as n, r as o, s as r, c as t };
//# sourceMappingURL=entry-9f364e710c7f.js.map
