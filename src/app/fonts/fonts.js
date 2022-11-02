import localFont from "@next/font/local";

export const silkaBlack = localFont({
  src: "./silka/silka-black.woff2",
  // weight: "900",
  // style: "normal",
  // variable: "--silka-black",
});
export const silkaBold = localFont({
  src: "./silka/silka-bold.woff2",
  // weight: "600",
  // style: "normal",
  // variable: "--silka-bold",
});
export const silkaBoldItalic = localFont({
  src: "./silka/silka-bolditalic.woff2",
  // weight: "600",
  // style: "italic",
  // variable: "--silka-bold-italic",
});
export const silkaRegular = localFont({
  src: "./silka/silka-regular.woff2",
  // weight: "400",
  // style: "normal",
  // variable: "--silka-regular",
  fallback: ["sans-serif"],
});
export const silkaRegularItalic = localFont({
  src: "./silka/silka-regularitalic.woff2",
  // weight: "400",
  // style: "italic",
  // variable: "--silka-regular-italic",
});

export const silkaMonoRegular = localFont({
  src: "./silka-mono/silkamono-regular.woff2",
  // weight: "400",
  // style: "normal",
  // variable: "--silka-mono-regular",
});
