import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hanning Lu",
    short_name: "Hanning Lu",
    description:
      "Personal academic website of Hanning Lu, a Computer Science undergraduate and researcher at the University of Leeds.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#625b53",
    orientation: "portrait-primary",
    scope: "/",
    lang: "en",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
