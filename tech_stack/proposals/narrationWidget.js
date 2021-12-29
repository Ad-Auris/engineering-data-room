/*
Purpose of this file is to illustrate some additional table updates for the narration widget.

Proposed Tables Updates:

widget_themes (existing)
widget_play_app_link_included_org (new)

 **/

const widget_themes = {
  // It's really widget_settings but keeping current name

  id: "<INT>", // SERIAL PRIMARY KEY NOT NULL, - Existing
  organisation_id: "<INT>", //INTEGER REFERENCES organisations(id), - Existing
  color: "<STRING>", //VARCHAR(10), - Existing
  background_color: "<STRING>", //VARCHAR(10), - Existing
  language: "<STRING>", //VARCHAR(7), - Existing
  border_color: "<STRING>", //VARCHAR(10), - Existing
  border_opacity: "<INT>", // - Existing
  border_thickness: "<INT>", // - Existing
  border_radius: "<INT>", // - Existing
  title: "<BOOLEAN>", //DEFAULT false, - Existing
  image: "<STRING>", // DEFAULT '', - Existing
  label: "<STRING>", // This overwrites the default on the widget - Existing
  font_family: "<STRING>", // - Existing
  font_colour: "<STRING>", // - Existing
  font_size: "<STRING>", // - Existing
  font_weight: "<STRING>", // - Existing
  logo_colour: "<STRING>", // - Existing

  play_app_link_included: "<boolean>", //  DEFAULT false (post launch default is true)  - Proposed
  play_app_link_text: "<STRING>", //  DEFAULT null// VARCHAR(30) - Proposed
  play_app_link: "<STRING>", //  DEFAULT null  - Proposed
};
