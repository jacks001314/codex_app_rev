const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./preview-2ec4b25a4f03.js",
      "./app-shared-bbfeca5e5737.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-dc7535e633d7.css",
      "./preview-58dcd2a67a7c.js",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./data-e702d913cf8e.js",
      "./queries-d88f39aa01b3.js",
      "./persistence-c98185fa37e8.js",
      "./preview-191c1e65b715.css",
      "./dialog-b16951ee3d5c.js",
      "./observe-source-cards-6a602c0c1e03.js",
      "./composer-suggestions-b7c168e19e97.js",
      "./home-suggestion-staggered-item-85bcd6ed2372.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { fPt as t, pPt as n } from "./app-shared-bbfeca5e5737.js";
async function r() {
  return (
    await t(
      async () => {
        let { FlashcardsPreview: e } = await import(`./preview-2ec4b25a4f03.js`);
        return { FlashcardsPreview: e };
      },
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
      import.meta.url,
    )
  ).FlashcardsPreview;
}
async function i() {
  return (
    await t(
      async () => {
        let { FlashcardsDialog: e } = await import(`./dialog-b16951ee3d5c.js`);
        return { FlashcardsDialog: e };
      },
      __vite__mapDeps([11, 2, 1, 3, 4, 5, 6, 7, 8, 9, 10]),
      import.meta.url,
    )
  ).FlashcardsDialog;
}
async function a() {
  return (
    await t(
      async () => {
        let { observeFlashcardSourceCards: e } = await import(`./observe-source-cards-6a602c0c1e03.js`);
        return { observeFlashcardSourceCards: e };
      },
      __vite__mapDeps([12, 2, 1, 3, 9, 5, 6, 7]),
      import.meta.url,
    )
  ).observeFlashcardSourceCards;
}
async function o() {
  return (
    await t(
      async () => {
        let { FlashcardsComposerSuggestions: e } = await import(`./composer-suggestions-b7c168e19e97.js`);
        return { FlashcardsComposerSuggestions: e };
      },
      __vite__mapDeps([13, 2, 1, 3, 5, 6, 14, 8, 7]),
      import.meta.url,
    )
  ).FlashcardsComposerSuggestions;
}
function s() {
  return (s = e(() => {
    n();
  }))();
}
export { r as a, i, a as n, o as r, s as t };
//# sourceMappingURL=entry-c845dec45605.js.map
