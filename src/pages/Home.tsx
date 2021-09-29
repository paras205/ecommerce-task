import React, { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "store/actions/product";
import { RootState } from "store/store";
import Card from "components/Card";
import { Product } from "store/types";
import SidebarItem from "components/SidebarItem";
import NoData from "components/NoData";

const Home: FC<{}> = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const getHomeData = async () => {
    setLoading(true);
    dispatch(getAllProducts());
    setLoading(false);
  };
  useEffect(() => {
    getHomeData();
  }, []);
  const { products } = useSelector((state: RootState) => state.product);
  const ingredients = products?.map((item: Product) => {
    return item?.ingredient?.ingredient_name;
  });
  const _ingredients: any = Array.from(new Set(ingredients));
  if (loading) {
    return <p>loading...</p>;
  }
  return (
    <div className="content">
      <div className="container">
        {products?.length > 0 ? (
          <>
            <div className="sidebar">
              {_ingredients?.map((item: string, idx: number) => {
                return <SidebarItem key={idx} item={item} />;
              })}
            </div>
            <div className="products">
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

export default Home;
