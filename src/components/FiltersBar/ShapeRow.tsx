import React from "react";
//@ts-ignore
import Slide from "react-reveal/Slide";
import "./style.css";
import constants from "../../utils/constants";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  addFilterShape,
  productSelectedFilters,
} from "../../reducers/product/productSlice";

type Props = {};

const ShapeRow = (props: Props) => {
  const dispatch = useAppDispatch();
  const { shapes: selectedShapes } = useAppSelector(productSelectedFilters);

  const handleShapeFilterClick = (color: string) =>
    dispatch(addFilterShape(color));
  return (
    <>
      <Slide right>
        <div className="box-container no-border-top shapes-box">
          {constants.filters.shapes.map((shape, index) => (
            <div
              className={
                selectedShapes.includes(shape) ? "box selected-box" : "box"
              }
              key={index}
              onClick={() => handleShapeFilterClick(shape)}
            >
              {shape}
            </div>
          ))}
        </div>
      </Slide>
    </>
  );
};

export default ShapeRow;
