import React from "react";
import { Glasses } from "../../models/Glasses";
import "./style.css";

type Props = {
  item: Glasses;
};

const GlassCard = ({ item }: Props) => {
  return (
    <>
      <div className="item">
        <div className="label-product">
          <div className="label">{item.name}</div>
        </div>
        <img
          className="glass-img"
          src={item.glass_variants[0].media[0]?.url}
          alt="img  "
        />
      </div>
    </>
  );
};

export default GlassCard;
