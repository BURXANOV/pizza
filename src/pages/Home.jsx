import React from "react";
import { useEffect } from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import axios from "axios";
import { Router } from "react-router";

export default function Home() {
  const [items, setItems] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: "популярности",
    sort: "rating",
  });

  useEffect(() => {
    setIsLoading(false);
    const order = sortType.sort.includes("-") ? "acs" : "desc";
    const sortBy = sortType.sort.replace("-", "");
    axios
      .get(
        `http://localhost:8080/items?${
          categoryId > 0 ? `category=${categoryId}` : ""
        }&sortBy=${sortBy}&order=${order}`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);
  return (
    <div className="conatainer">
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategory={(i) => setCategoryId(i)}
        />
        <Sort value={sortType} onChangeCategory={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {/* {items.map((obj) =>isLoading ?<Skeleton/> (
              <Skeleton key={obj.id} {...obj} />
            ))} */}
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}
