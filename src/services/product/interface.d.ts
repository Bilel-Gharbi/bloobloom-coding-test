export interface GetProductParams {
  page: number;
  limit: number;
  category: string;
  shapes: string[];
  colors: string[];
  lens_variant_presciptions: string;
  lens_variant_types: string;
  frame_variant_home_trial_available: boolean;
  glass_variant_frame_variant_colour_tag_configuration_names: any;
  Glass_variant_frame_variant_frame_tag_configuration_names: any;
}
