import { defineConfig } from "vite";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const root = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        caseStudy: resolve(root, "case-study.html"),
        caseStudyOneRAI: resolve(root, "case-study-onerai.html"),
        caseStudyReferral: resolve(root, "case-study-referral.html"),
        caseStudyCheggmate: resolve(root, "case-study-cheggmate.html"),
        caseStudyAllenInstitute: resolve(root, "case-study-allen-institute.html"),
      },
    },
  },
});
