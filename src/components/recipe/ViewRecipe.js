import React from "react";
import { Link } from "react-router-dom";

import SharedDataComponent from "../DataHoc/SharedDataComponent";

export const RecipeDetails = ({ match, state }) => {
  const id = match.params.id;

  let data = {};
  state.data.forEach(element => {
    if (element.recipe_id == id) {
      data = element;
    }
  });

  //data.reduce((acc, cur) => ({ ...acc, [cur.title]: cur.recipe_id }), {})

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-xs-4 item-photo">
            <img
              style={{ maxWidth: "100%" }}
              src={data.image_url}
              alt={data.title}
            />
          </div>
          <div className="col-xs-5" style={{ border: "0px solid gray" }}>
            <h3>{data.title}</h3>
            <h5 style={{ color: "#337ab7" }}>
              Social Rank: <Link to="">{data.social_rank}</Link> ·
              <small style={{ color: "#337ab7" }}>(5054 views)</small>
            </h5>

            <h6 className="title-price">
              <small>Publisher: {data.publisher}</small>
            </h6>
            <h4 style={{ marginTop: "0px" }}>Recipe Id: {data.recipe_id}</h4>

            <div className="section" style={{ paddingBottom: "20px" }}>
              <button className="btn btn-success">
                <span
                  style={{ marginRight: "20px" }}
                  className="glyphicon glyphicon-shopping-cart"
                  aria-hidden="true"
                />
                Ask to Prepare
              </button>
              <h6>
                <Link to="">
                  <span
                    className="glyphicon glyphicon-heart-empty"
                    style={{ cursor: "pointer" }}
                  />
                  &nbsp;
                  {data.title}
                </Link>
              </h6>
            </div>
          </div>

          <div className="col-xs-9">
            <h4>Description:</h4>
            <div style={{ width: "100%", borderTop: "1px solid silver" }}>
              <p style={{ padding: "15px" }}>
                <small>
                  Stay connected either on the phone or the Web with the Galaxy
                  S4 I337 from Samsung. With 16 GB of memory and a 4G
                  connection, this phone stores precious photos and video and
                  lets you upload them to a cloud or social network at
                  blinding-fast speed. With a 17-hour operating life from one
                  charge, this phone allows you keep in touch even on the go.
                  With its built-in photo editor, the Galaxy S4 allows you to
                  edit photos with the touch of a finger, eliminating extraneous
                  background items. Usable with most carriers, this smartphone
                  is the perfect companion for work or entertainment.
                </small>
              </p>
              <small>
                <ul>
                  <li>
                    Super AMOLED capacitive touchscreen display with 16M colors
                  </li>
                  <li>Available on GSM, AT T, T-Mobile and other carriers</li>
                  <li>
                    Compatible with GSM 850 / 900 / 1800; HSDPA 850 / 1900 /
                    2100 LTE; 700 MHz Class 17 / 1700 / 2100 networks
                  </li>
                  <li>MicroUSB and USB connectivity</li>
                  <li>
                    Interfaces with Wi-Fi 802.11 a/b/g/n/ac, dual band and
                    Bluetooth
                  </li>
                  <li>
                    Wi-Fi hotspot to keep other devices online when a connection
                    is not available
                  </li>
                  <li>SMS, MMS, email, Push Mail, IM and RSS messaging</li>
                  <li>
                    Front-facing camera features autofocus, an LED flash, dual
                    video call capability and a sharp 4128 x 3096 pixel picture
                  </li>
                  <li>Features 16 GB memory and 2 GB RAM</li>
                  <li>
                    Upgradeable Jelly Bean v4.2.2 to Jelly Bean v4.3 Android OS
                  </li>
                  <li>
                    17 hours of talk time, 350 hours standby time on one charge
                  </li>
                  <li>Available in white or black</li>
                  <li>Model I337</li>
                  <li>
                    Package includes phone, charger, battery and user manual
                  </li>
                  <li>
                    Phone is 5.38 inches high x 2.75 inches wide x 0.13 inches
                    deep and weighs a mere 4.59 oz
                  </li>
                </ul>
              </small>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
const ViewRecipe = SharedDataComponent(RecipeDetails);

export default ViewRecipe;
