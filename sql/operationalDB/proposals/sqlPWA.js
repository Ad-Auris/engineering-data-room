/*
Purpose of this file is to illustrate some additional table updates for the upcoming PWA build.

Proposed Tables Updates:

article_metadata (new)

text_classification (new)

narration_stats (new)

play_app_excluded_org (new)

play_app_excluded_ttsp (new)
 **/

const article_metadata = {
  id: "<INT>",
  publish_date: "TIMESTAMP",
  category: "<STRING>", // used on UI
  image_url: "<STRING>",
  tts_package_id: "<INT>",
};

const narration_stats = {
  id: "<INT>",
  total_listens: "<INT>", 
  tts_package_id: "<INT>",
};

const text_classification = {
  id: "<INT>",
  article_metadata_id:"<INT>",
  main_class: "<STRING>", //NOT NULL
  subclass_1: "<STRING>",// Can be null
  subclass_2: "<STRING>",// Can be null
  confidence: "DECIMAL(3,2)", //0.00 to 1.00
};

const play_app_excluded_org = {
  id: "<INT>",
  organisation_id: "<INT>", // unique constraint
};

const play_app_excluded_ttsp = {
  id: "<INT>",
  tts_package_id: "<INT>", // unique constraint
};

