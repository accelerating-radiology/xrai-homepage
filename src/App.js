import React from "react";
import logo from "./photos/xray.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <img src={logo} className="HeaderLogo" />
        <h1 className="HeaderTitel">X-rai</h1>
      </div>
      <div className="HeadlineWrapper">
        <h1 className="Headline">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h1>
      </div>
      <div className="PitchWrapper">
        <div className="Pitch">
          <h1 className="PitchHeadline">
            etiam tempor orci eu lobortis elementum nibh
          </h1>
          <p className="PitchPoint">et</p>
          <p className="PitchText">
            ornare suspendisse sed nisi lacus sed viverra tellus in hac
            habitasse platea dictumst vestibulum rhoncus est pellentesque elit
            ullamcorper dignissim
          </p>
          <p className="PitchPoint">et</p>

          <p className="PitchText">
            ornare suspendisse sed nisi lacus sed viverra tellus in hac
            habitasse platea dictumst vestibulum rhoncus est pellentesque elit
            ullamcorper dignissim
          </p>
          <p className="PitchPoint">et</p>

          <p className="PitchText">
            ornare suspendisse sed nisi lacus sed viverra tellus in hac
            habitasse platea dictumst vestibulum rhoncus est pellentesque elit
            ullamcorper dignissim
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
