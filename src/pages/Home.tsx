import React, { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getIngredients } from "store/actions/product";
import { RootState } from "store/store";
import Card from "components/Card";
import { Product } from "store/types";
import SidebarItem from "components/SidebarItem";
import NoData from "components/NoData";
import Loader from "components/Loader";

const Home: FC<{}> = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");
  const dispatch = useDispatch();
  const getHomeData = async () => {
    setLoading(true);
    await dispatch(getAllProducts(selected));
    setLoading(false);
  };
  useEffect(() => {
    getHomeData();
  }, [selected]);
  useEffect(() => {
    dispatch(getIngredients());
  }, []);
  const { products, ingredients } = useSelector(
    (state: RootState) => state.product
  );
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="content">
      <div className="container">
        {products?.length > 0 ? (
          <>
            <div className="sidebar">
              <div className="sidebar_item" onClick={() => setSelected("")}>
                <span className={`${selected === "" ? "active" : ""}`}></span>
                All
              </div>
              {ingredients?.map((item: string, idx: number) => {
                return (
                  <SidebarItem
                    key={idx}
                    item={item}
                    setSelected={(item: string) => setSelected(item)}
                    selected={selected}
                  />
                );
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
