import {
  NODE_ENV,
  WORKING_DIR_ABSOLUTE,
  CONTENT_PATH_PREFIX,
  CONTENT_DIR,
  PROD_URL,
  DISPLAY_URL,
  CMS_AUTH_URL,
  CMS_REPO,
  CMS_BACKEND,
  CMS_BRANCH,
} from "../../env.config.js";

const commonCollectionFields = [
  {
    name: "lang",
    label: "Language",
    widget: "hidden",
    default: "{{locale}}",
    i18n: true,
  },
  {
    name: "createdAt",
    label: "Created At",
    widget: "hidden",
    default: "{{datetime}}",
    i18n: true,
  },
  {
    name: "uuid",
    label: "UUID",
    widget: "hidden",
    default: "{{uuid_short}}",
    i18n: true,
  },
  {
    name: "localizationKey",
    label: "Localization Key",
    widget: "hidden",
    default: "{{uuid_short}}",
    i18n: "duplicate",
  },
];
const commonPageFields = [
  {
    name: "name",
    label: "Name",
    widget: "string",
    required: true,
    i18n: true,
    // PERSON had ...
    // i18n: "duplicate",
  },
  // {
  //   name: "currentSlug",
  //   label: "Current slug",
  //   widget: "compute",
  //   value: "{{fields.name}}",
  //   i18n: true,
  // },
  // { name: "path", label: "Page URL path", widget: "string", required: true, pattern: ['^(?![\s\/\-]*$)(?!\/)[a-z0-9\/\-]*[a-z0-9\-]$', "URL must contain only letters, numbers, dashes, and forward slashes (not starting or ending with a slash or dash), and at least one letter or number"], hint: "URL-friendly slug or path (may contain '/' and '-'). NOTE: The homepage must be called 'index'"},
  bodyMarkdownField,
  eleventyNavigationField,
  simpleMetadataField,
  pagePreviewField,
  tagsField,
  statusField,
  pageLayoutRelationField,
  generatePageField,
  varsField,
  dataListField,
];

const trainingsCollection = {
  ...mostCommonMarkdownCollectionConfig,
  name: "trainings",
  label: "Trainings",
  label_singular: "Training",
  icon: "description",
  thumbnail: ["pagePreview.image.src", "metadata.image.src"],
  path: "pages/{{slug}}",
  // TODO: check if it works
  slug: "{{name | localize}}", // This allows the slug to be localized
  // slug: "{{fields._slug | localize}}",
  summary:
    "{{name}} {{eleventyNavigation.order | ternary(' (nav ', '')}}{{eleventyNavigation.order}}{{eleventyNavigation.order | ternary(')', '')}}",
  sortable_fields: {
    fields: [
      "eleventyNavigation.parent",
      "name",
      // "eleventyNavigation.add",
      "eleventyNavigation.order",
    ],
    default: {
      field: "eleventyNavigation.order",
      direction: "ascending",
    },
  },
  // view_filters: [
  //   {
  //     label: "Navigation",
  //     field: "eleventyNavigation.add",
  //     pattern: true,
  //   },
  // ],
  // MEDIAS
  media_folder: `/${CONTENT_DIR}/_images`,
  public_folder: "/_images",
  fields: [...commonCollectionFields, ...commonPageFields],
  index_file: {
    name: "_index",
    label: "Page Data",
    // path: "pages.yaml",
    path: "_index",
    extension: "md",
    // file: `${CONTENT_DIR}/_data/brand.yaml`,
    // format: "yaml",
    icon: "home",
    editor: { preview: false },
    i18n: false,
    fields: [
      {
        name: "layout",
        label: "Layout",
        widget: "string",
        default: "base",
        required: false,
      },
    ],
  },
};

export const collections = [trainingsCollection];

export const singletons = [];
