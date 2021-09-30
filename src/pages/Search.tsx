import React, { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "store/actions/product";
import { RootState } from "store/store";
import { Product } from "store/types";
import Card from "components/Card";
import { useLocation } from "react-router-dom";
import NoData from "components/NoData";
import Loader from "components/Loader";

const Search: FC<{}> = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const search = useLocation().search;
  const name: any = new URLSearchParams(search).get("name");
  const searchData = async () => {
    setLoading(true);
    dispatch(searchProducts(name));
    setLoading(false);
  };
  useEffect(() => {
    searchData();
  }, [name]);
  const { products } = useSelector((state: RootState) => state.search);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="content search_page">
      <div className="container">
        {products?.length > 0 ? (
          <>
            <h4>Found: {products.length} products</h4>
            <div className="search_list">
              {products?.map((item: Product, idx: number) => {
                return <Card key={idx} {...item} />;
              })}
            </div>
          </>
        ) : (
          <NoData />
        )}
      </div>
    </div>
  );
};

export default Search;
