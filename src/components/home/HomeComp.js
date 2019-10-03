import React, { Component } from "react";
import LazyLoad from "react-lazyload";
import { Link, Route } from "react-router-dom";
import API from "../API/api";
import "../../styles/home-recipe-tiles.css";

class HomeComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: true,
      error: ""
    };
  }
  componentDidMount() {
    console.log("re-render");
    const data = API.posts("./recipes.json").getAll();
    data
      .then(res => {
        this.setState({
          data: res.data.recipes,
          loading: false
        });

        //console.log(res.data.recipes);
      })
      .catch(e => {
        this.setState({
          error: e.message,
          loading: false
        });
      });
  }
  componentDidUpdate(prevProps, prevState) {
    //  console.log(prevState);
    if (prevState.loading != this.state.loading) {
      return true;
    }
  }
  splitEvery = (array, length) =>
    array.reduce((result, item, index) => {
      if (index % length === 0) result.push([]);
      result[Math.floor(index / length)].push(item);

      return result;
    }, []);

  render() {
    const items = this.state.data;
    const loading = this.state.loading;

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            {console.log("Render")}
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
                {
                  <ol className="carousel-indicators">
                    {this.splitEvery(items, 4).map((data, index) => (
                      <li
                        key={index}
                        data-target="#myCarousel"
                        data-slide-to={index}
                        className={index === 0 ? "active" : ""}
                      />
                    ))}
                  </ol>
                }
                <div className="carousel-inner">
                  {!loading
                    ? this.splitEvery(items, 4).map((usersChunk, index) => (
                        <div
                          key={index}
                          className={`item carousel-item ${
                            index === 0 ? "active" : ""
                          } `}
                        >
                          <div className="row display-flex">
                            {usersChunk.map((data, index) => {
                              return (
                                <div key={index} className="col-sm-3 col-xs-12">
                                  <div className="thumb-wrapper">
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
                                          ? data.title.substring(0, 40) + "..."
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
                                        to={{
                                          pathname: `/recipeView/${data.recipe_id}`,
                                          state: {
                                            prevPath: this.props.location
                                              .pathname
                                          }
                                        }}
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
      </React.Fragment>
    );
  }
}

export default HomeComp;
