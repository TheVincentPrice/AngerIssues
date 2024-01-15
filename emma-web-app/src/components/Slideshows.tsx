const slides1 = import.meta.glob(
  "../../content/Images/SCREENSHOTS_ANGER/Slides1/*.png",
  { eager: true }
) as Record<string, { default: string }>;

const slides2 = import.meta.glob(
  "../../content/Images/SCREENSHOTS_ANGER/Slides2/*.png",
  { eager: true }
) as Record<string, { default: string }>;

const slides3 = import.meta.glob(
  "../../content/Images/SCREENSHOTS_ANGER/Slides3/*.png",
  { eager: true }
) as Record<string, { default: string }>;

export const slideshow1 = Object.values(slides1).map((s) => s.default);

export const slideshow2 = Object.values(slides2).map((s) => s.default);

export const slideshow3 = Object.values(slides3).map((s) => s.default);
