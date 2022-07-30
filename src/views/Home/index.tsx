import React, { useCallback, useEffect, useRef, useState } from "react";
import FiltersBar from "../../components/FiltersBar";
import GlassesList from "../../components/GlassesList";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  fetchProduct,
  productList,
  productSelectedFilters,
  queryFilters,
} from "../../reducers/product/productSlice";

const Home = () => {
  const [page, setPage] = useState<number>(1);
  const { category, colors, shapes } = useAppSelector(productSelectedFilters);

  const _queryFilters = useAppSelector(queryFilters);
  const { data, status } = useAppSelector(productList);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (dispatch)
      dispatch(
        fetchProduct({
          page,
          limit: 12,
          category,
          ..._queryFilters,
          colors,
          shapes,
        })
      );
  }, [category, page, colors, shapes, _queryFilters, dispatch]);

  const handleLoadMore = () => setPage(page + 1);

  return (
    <>
      <FiltersBar />
      <GlassesList
        data={data}
        handleLoadMore={handleLoadMore}
        loading={status === "loading"}
      />
    </>
  );
};

export default Home;
