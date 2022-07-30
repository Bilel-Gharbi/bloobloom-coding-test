import React, { useRef } from "react";
import { Glasses } from "../../models/Glasses";
import GlassCard from "../GlassCard";
import Logo from "../Navbar/Logo";
import "./style.css";
type Props = {
  data: Glasses[];
  loading: boolean;
  handleLoadMore: () => void;
};

const GlassesList = ({ data, loading, handleLoadMore }: Props) => {
  const listInnerRef = useRef<HTMLInputElement | null>(null);

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        handleLoadMore();
      }
    }
  };

  return (
    <>
      {loading ? (
        <div className="loading">
          <div className="ogo-loading rotate">
            <Logo />
          </div>
        </div>
      ) : (
        <div
          className="list-container"
          ref={listInnerRef}
          onScroll={() => onScroll()}
        >
          {data.map((item: Glasses) => (
            <GlassCard item={item} key={item.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default GlassesList;
