/*
Purpose of this file is to illustrate some additional table updates for the upcoming PWA build.

Proposed Tables Updates:

article_metadata (new)

text_classification (new)

narration_stats (new)
 **/

const article_metadata = {
  id: "<INT>",
  publish_date: "<STRING",
  category: "<STRING>", // used on UI
  image_url: "<STRING>",
  text_classification_id: "<INT>",
  tts_package_id: "<INT>",
};

const narration_stats = {
  listens: "<INT>", 
  tts_package_id: "<INT>",
};

const text_classification = {
    id: "<INT>",
    ttsp_article_meta_data: "<INT>",
};
