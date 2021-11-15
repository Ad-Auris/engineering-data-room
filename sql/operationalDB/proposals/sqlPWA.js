/*
Purpose of this file is to illustrate some additional table updates for the upcoming PWA build.

Proposed Tables Updates:

article_metadata (new)

text_classification (new)
 **/

const article_metadata = {
  id: "<INT>",
  publish_date: "<STRING",
    // duplicates
  article_title: "<STRING>",
  article_url: "<STRING>",
    // duplicates
  category: "<STRING>", // used on UI
  image_url: "<STRING>",
  text_classification_id: "<INT>",
  tts_package_id: "<INT>",
};

const text_classification = {
    id: "<INT>",
    ttsp_article_meta_data: "<INT>",
};
