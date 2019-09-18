import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/home-recipe-tiles.css";

const Home = ({ dataList, loading }) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>
              Latest <b>Recipes</b>
            </h2>
            <div
              id="myCarousel"
              className="carousel slide"
              data-ride="carousel"
              data-interval="0"
            >
              <ol className="carousel-indicators">
                {splitEvery(dataList, 4).map((data, index) => (
                  <li
                    key={index}
                    data-target="#myCarousel"
                    data-slide-to={index}
                    className={index === 0 ? "active" : ""}
                  />
                ))}
              </ol>
              <div className="carousel-inner">
                {!loading
                  ? splitEvery(dataList, 4).map((usersChunk, index) => (
                      <div
                        key={index}
                        className={`item carousel-item ${
                          index === 0 ? "active" : ""
                        } `}
                      >
                        <div className="row">
                          {usersChunk.map((data, index) => {
                            return (
                              <div key={index} className="col-sm-3">
                                <div className="thumb-wrapper">
                                  <span className="wish-icon">
                                    <i className="fa fa-heart-o" />
                                  </span>
                                  <div className="img-box">
                                    <img
                                      height="200"
                                      src={data.image_url}
                                      className="img-responsive img-fluid"
                                      alt={data.title}
                                    />
                                  </div>
                                  <div className="thumb-content">
                                    <h4>
                                      {data.title.length > 30
                                        ? data.title.substring(0, 30) + "..."
                                        : data.title}
                                    </h4>
                                    <div className="star-rating">
                                      <ul className="list-inline">
                                        <li className="list-inline-item">
                                          <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                          <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                          <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                          <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                          <i className="fa fa-star-o" />
                                        </li>
                                      </ul>
                                    </div>
                                    <p className="item-price">
                                      {/* <strike>$400.00</strike> <b>$369.00</b> */}
                                      Social Rank: {data.social_rank}
                                    </p>
                                    <Link
                                      to={`/recipeView/${data.recipe_id}`}
                                      className="btn btn-primary"
                                    >
                                      View Recipe
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))
                  : "Loading..."}
              </div>
              <a
                className="carousel-control left carousel-control-prev"
                href="#myCarousel"
                data-slide="prev"
              >
                <i className="fa fa-angle-left" />
              </a>
              <a
                className="carousel-control right carousel-control-next"
                href="#myCarousel"
                data-slide="next"
              >
                <i className="fa fa-angle-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const splitEvery = (array, length) =>
  array.reduce((result, item, index) => {
    if (index % length === 0) result.push([]);
    result[Math.floor(index / length)].push(item);
    return result;
  }, []);

const RecipeData = () => {
  const [items, setData] = useState([]);
  const [isLoading, setLoad] = useState(true);

  useEffect(() => {
    axios
      .get("./recipes.json")
      .then(res => {
        setData(res.data.recipes);
        setTimeout(() => {
          setLoad(false);
        }, 1000);
      })
      .catch(e => {
        console.log("Error:", e.message);
        setLoad(false);
      });
    //return () => {};
  }, []);
  return <Home dataList={items} loading={isLoading} />;
};
export default RecipeData;
