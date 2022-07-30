import { AxiosResponse } from "axios";
import request from "../../utils/request";
import { GetProductParams } from "./interface";

export const getProductService = (
  params: GetProductParams
): Promise<AxiosResponse> => {
  const {
    category,
    shapes,
    colors,
    page,
    limit,
    lens_variant_presciptions,
    lens_variant_types,
    frame_variant_home_trial_available,
  } = params;

  const shapesFilters = shapes
    .map(
      (shape: string) =>
        `filters[glass_variant_frame_variant_frame_tag_configuration_names][]=${shape.toLocaleLowerCase()}`
    )
    .join("&");

  const colorsFilters = colors
    .map(
      (color: string) =>
        `filters[glass_variant_frame_variant_colour_tag_configuration_names][]=${color.toLocaleLowerCase()}`
    )
    .join("&");

  return request.get(
    `/collections/${category}/glasses?${colorsFilters}&${shapesFilters}`,
    {
      params: {
        "page['limit']": limit,
        "page['number']": page,
        "filters[lens_variant_prescriptions][]": lens_variant_presciptions,
        "filters[lens_variant_types][]": lens_variant_types,
        "filters[frame_variant_home_trial_available]":
          frame_variant_home_trial_available,
      },
    }
  );
};
