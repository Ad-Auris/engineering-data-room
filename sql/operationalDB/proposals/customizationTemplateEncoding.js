/*
Purpose of this file is to illustrate some additional table updates for the customization template.

Proposed Tables Updates:

customization_template (new)

 **/

const customization_template_default = {
  id: "<INT>", // SERIAL PRIMARY KEY NOT NULL, - new
};

const language_customization_template = {
  id: "<INT>", // SERIAL PRIMARY KEY NOT NULL, - new
  organisation_id: "<INT>", //INTEGER REFERENCES organisations(id), - Existing
  language_code: "<STRING>", // - new
};

const rssfeed_customization_template = {
  id: "<INT>", // SERIAL PRIMARY KEY NOT NULL, - new
  organisation_id: "<INT>", //INTEGER REFERENCES organisations(id), - Existing
  rss_feed: "<STRING>", // - new,
};

const publication_audio_branding = {
  id: "<INT>", // SERIAL PRIMARY KEY NOT NULL, - new
  intro_pre_recorded: "<STRING>", //VARCHAR(150), DEFAULT null - new
  outro_pre_recorded: "<STRING>", //VARCHAR(150), DEFAULT null - new
  intro_tts_text: "<STRING>", //VARCHAR(100), DEFAULT null - new
  outro_tts_text: "<STRING>", //VARCHAR(100), DEFAULT null - new
};

const customization_template_voices = {
  id: "<INT>", // SERIAL PRIMARY KEY NOT NULL, - new
  body: "<STRING>", //VARCHAR(50), DEFAULT null - new
  title: "<STRING>", //VARCHAR(50), DEFAULT null - new
  heading: "<STRING>", //VARCHAR(50), DEFAULT null - new
  quote: "<STRING>", //VARCHAR(50), DEFAULT null - new
  blockQuote: "<STRING>", //VARCHAR(50), DEFAULT null - new
  intro: "<STRING>", //VARCHAR(50), DEFAULT null - new
  outro: "<STRING>", //VARCHAR(50), DEFAULT null - new
};
const ssml_settings = {
  id: "<INT>", // SERIAL PRIMARY KEY NOT NULL, - new
  quotes: "<STRING>", //VARCHAR(50), DEFAULT null - new
  // E.G: <break time=\"500ms\" />
  intro: "<STRING>", //VARCHAR(50), DEFAULT null - new
  title: "<STRING>", //VARCHAR(50), DEFAULT null - new
  author: "<STRING>", //VARCHAR(50), DEFAULT null - new
  paragraph: "<STRING>", //VARCHAR(50), DEFAULT null - new
  heading: "<STRING>", //VARCHAR(50), DEFAULT null - new
  bulletPoint: "<STRING>", //VARCHAR(50), DEFAULT null - new
};

const article_narration_settings = {
  id: "<INT>", // SERIAL PRIMARY KEY NOT NULL, - new
  ordering: "<ARRAY>", // DEFAULT ["intro", "title", "belowTitle", "author", "bodyText", "outro"] - new
  read_quote_marks: "<BOOLEAN>",
  read_title: "<BOOLEAN>",
  read_subheading: "<BOOLEAN>",
  read_author: "<BOOLEAN>",
};

const scraping_settings = {
  id: "<INT>", // SERIAL PRIMARY KEY NOT NULL, - new
  scraper_api: "<STRING>", // SERIAL PRIMARY KEY NOT NULL, - new
};
const wordlist = {
  id: "<INT>", // SERIAL PRIMARY KEY NOT NULL, - new
};
