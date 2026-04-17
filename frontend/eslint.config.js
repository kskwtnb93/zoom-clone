import js from "@eslint/js";
import boundaries from "eslint-plugin-boundaries";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

/**
 * Feature-Sliced Design
 * - レイヤー順: app → processes → pages(スライス単位) → widgets → features → entities → shared
 * - 同一レイヤー内の別スライス同士の import は禁止（pages/home → pages/login など）
 * @see https://feature-sliced.design/docs/reference/layers
 */
const PAGE_SLICE_TYPES = [
  "page-home",
  "page-login",
  "page-signup",
  "page-meeting",
  "page-settings",
];

const LAYERS_BELOW_APP = [
  "processes",
  "widgets",
  "features",
  "entities",
  "shared",
  ...PAGE_SLICE_TYPES,
];

const PROCESS_ALLOWS = [
  "processes",
  "widgets",
  "features",
  "entities",
  "shared",
  ...PAGE_SLICE_TYPES,
];

const pageSliceRules = PAGE_SLICE_TYPES.map((slice) => ({
  from: { type: slice },
  allow: {
    to: {
      type: [slice, "widgets", "features", "entities", "shared"],
    },
  },
}));

const fsdDependencyRules = {
  default: "disallow",
  rules: [
    {
      from: { type: "app" },
      allow: {
        to: {
          type: ["app", ...LAYERS_BELOW_APP],
        },
      },
    },
    {
      from: { type: "processes" },
      allow: {
        to: {
          type: PROCESS_ALLOWS,
        },
      },
    },
    ...pageSliceRules,
    {
      from: { type: "widgets" },
      allow: {
        to: {
          type: ["widgets", "features", "entities", "shared"],
        },
      },
    },
    {
      from: { type: "features" },
      allow: {
        to: {
          type: ["features", "entities", "shared"],
        },
      },
    },
    {
      from: { type: "entities" },
      allow: {
        to: {
          type: ["entities", "shared"],
        },
      },
    },
    {
      from: { type: "shared" },
      allow: {
        to: {
          type: ["shared"],
        },
      },
    },
  ],
};

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    plugins: {
      boundaries,
    },
    settings: {
      "boundaries/elements": [
        { type: "app", pattern: "src/app/**/*" },
        { type: "processes", pattern: "src/processes/**/*" },
        { type: "page-home", pattern: "src/pages/home/**/*" },
        { type: "page-login", pattern: "src/pages/login/**/*" },
        { type: "page-signup", pattern: "src/pages/signup/**/*" },
        { type: "page-meeting", pattern: "src/pages/meeting/**/*" },
        { type: "page-settings", pattern: "src/pages/settings/**/*" },
        { type: "widgets", pattern: "src/widgets/**/*" },
        { type: "features", pattern: "src/features/**/*" },
        { type: "entities", pattern: "src/entities/**/*" },
        { type: "shared", pattern: "src/shared/**/*" },
      ],
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      ...boundaries.configs.recommended.rules,
      "boundaries/element-types": "off",
      "boundaries/dependencies": [2, fsdDependencyRules],
    },
  },
]);
