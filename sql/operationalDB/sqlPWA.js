const TTSPUpdate1 = {
  id: "<INT>",
  date: "<STRING",
  user_id: "<STRING>",
  organisation_id: "<STRING>",
  title: "<STRING>",
  route_identifier: "<STRING>",
  file: "<STRING>",
  original_text: "<STRING>",
  modified_text: "<STRING>",
  narration_type: "<STRING>",
  comments: "<STRING>",
  sentiment_analysis: "<STRING>",
  emotion_analysis: "<STRING>",
  keywords_analysis: "<STRING>",
  widget_image: null,
  footer_title: "<STRING>",
  rss_id: "<INT>",
  narration_method: "<STRING>",
  article_url: "<STRING>",
  title_voice: "<STRING>",
  music: "<STRING>",
  ct_link: "<STRING>",
  experiment: "<STRING>",
};

const ttspArticleMetaData = {
  id: "<INT>",
  date: "<STRING",
  article_title: "<STRING>",
  article_url: "<STRING>",
  text_classification: "<Array>",
  category: "<Array>",
  emotions: "<Array>",
  keywords: "<Array>",
  sentiment: "<Array>",
};

const ttspAudioMetaData = {
  // I forsee this growing to hold other pertinent information about the audio as we go beyond sticking, increasing quality, and other useful data for matching

  id: "<INT>",
  audioLength: "<STRING>",
};

const customStylesTemplate = {
  // nulls here result to default ad auris wide styles
  id: 25,
  organisation_id: 318,
  color: "<STRING>",
  background_color: "<STRING>",
  language: "en",
  border_color: "<STRING>",
  border_opacity: "<STRING>",
  border_thickness: "<STRING>",
  border_radius: null,
  // New addition here:
  default_image_src: "<STRING>",
  // addition end
  image: "<STRING>",
  title: true,
  label: null,
  font_family: "<STRING>",
  font_colour: "<STRING>",
  font_size: "<INT>",
  font_weight: "<INT>",
  logo_colour: "<STRING>",
};
