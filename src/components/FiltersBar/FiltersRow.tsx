import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { productSelectedFilters } from "../../reducers/product/productSlice";
import { toggleColorBar, toggleShapeBar } from "../../reducers/ui/uiSlice";
import "./style.css";

type Props = {};

const FiltersRow = (props: Props) => {
  const dispatch = useAppDispatch();
  const { category } = useAppSelector(productSelectedFilters);

  // dispatch toggle color ui
  const handleColorClick = () => dispatch(toggleColorBar());

  // dispatch toggle color ui
  const handleShapeClick = () => dispatch(toggleShapeBar());

  return (
    <>
      <div className="box-container no-border-top filters-box">
        <div className="box" id="first"></div>
        <div className="box">{category}</div>
        <div className="box box-default">
          <div className="box no-border" onClick={handleColorClick}>
            Color
          </div>
          <div className="box" onClick={handleShapeClick}>
            Shape
          </div>
          {/* <div id="last"></div> */}
        </div>
      </div>
    </>
  );
};

export default FiltersRow;
