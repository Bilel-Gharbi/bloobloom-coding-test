import React from "react";
import { useAppSelector } from "../../hooks";
import {
  isColorFilterActive,
  isShapeFilterActive,
} from "../../reducers/ui/uiSlice";
import ColorRow from "./ColorRow";
import FiltersRow from "./FiltersRow";
import ShapeRow from "./ShapeRow";
import "./style.css";

type Props = {};

const FiltersBar = (props: Props) => {
  const showColorRow = useAppSelector(isColorFilterActive);
  const showShapeRow = useAppSelector(isShapeFilterActive);
  return (
    <>
      <FiltersRow />
      {showShapeRow && <ShapeRow />}
      {showColorRow && <ColorRow />}
    </>
  );
};

export default FiltersBar;
