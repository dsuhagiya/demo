import React, { useState, useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
import AliceCarousel from "react-alice-carousel";
// import { Route, Redirect } from "react-router";
import "react-alice-carousel/lib/alice-carousel.css";
// import Charts from "./Charts";

function Login(props) {
  const [galleryItems, setGalleryItems] = useState(() => []);
  const getData = () => {
    axios
      .get(`https://picsum.photos/v2/list?limit=6`, {})
      .then((res) => {
        const data = res.data;
        const img = data.map((m) => (
          <img src={m.download_url} style={{ height: "625px" }} alt="" />
        ));
        setGalleryItems(img);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const responsive = {
    0: { items: 1 },
    1024: { items: 1 },
  };
  useEffect(() => {
    getData();
  }, []);
  let darkmode = props.isDarkMode
    ? {
        backgroundImage: "linear-gradient(to right, #e6e600,#008000)",
        color: "black",
        border: "none",
      }
    : { backgroundColor: "indigo", color: "white" };
  return (
    <div className="d-flex align-content-center flex-wrap">
      <div className="w-50 mt-4 p-4 ">
        <h1 className="text-center mt-4 ">Welcome</h1>
        <form className="m-3">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className={
                props.isDarkMode
                  ? "form-control bg-dark"
                  : "form-control bg-light"
              }
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className={
                props.isDarkMode
                  ? "form-control bg-dark"
                  : "form-control bg-light"
              }
              id="exampleInputPassword1"
              placeholder="Enter Password"
            />
          </div>

          <button type="submit" className="btn w-100 mb-3" style={darkmode}>
            Submit
          </button>
          <p className="text-center">Or</p>
          <div className="text-center">
            <GoogleLogin
              theme={props.isDarkMode ? "dark" : "light"}
              clientId={props.clientId}
              buttonText="Login with Google"
              onSuccess={props.onLoginSuccess}
              onFailure={props.onLoginFailure}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />
          </div>
        </form>
      </div>
      <div className="w-50">
        <AliceCarousel
          items={galleryItems}
          responsive={responsive}
          autoPlayInterval={1000}
          infinite={true}
          autoPlay={true}
          animationType="fadeout"
          mouseTrackingEnabled={true}
          disableAutoPlayOnAction={true}
          disableButtonsControls={true}
          disableDotsControls={true}
        />
      </div>
    </div>
  );
}
export default Login;
