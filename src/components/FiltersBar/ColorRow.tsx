import React from "react";
//@ts-ignore
import Slide from "react-reveal/Slide";
import "./style.css";
import constants from "../../utils/constants";
import {
  addFilterColor,
  productSelectedFilters,
} from "../../reducers/product/productSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";

type Props = {};

const ColorRow = (props: Props) => {
  const dispatch = useAppDispatch();
  const { colors: selectedColors } = useAppSelector(productSelectedFilters);

  const handleColorFilterClick = (color: string) =>
    dispatch(addFilterColor(color));
  return (
    <Slide left>
      <div className="box-container no-border-top colors-box">
        {constants.filters.colors.map((color, index) => (
          <div
            className={
              selectedColors.includes(color) ? "box selected-box" : "box"
            }
            key={index}
            onClick={() => handleColorFilterClick(color)}
          >
            {color}
          </div>
        ))}
      </div>
    </Slide>
  );
};

export default ColorRow;
