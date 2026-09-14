import { defineConfig } from "vite";
import { resolve } from "path";

const root = import.meta.dirname;

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
