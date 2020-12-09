import React from "react";
import "./App.css";
import "./index.css";
import Layout from "./features/Layout";
import Slider from "./features/Slider";
import VideoSlider from "./features/VideoSlider";

function App() {
  return (
    <Layout>
      <Slider />
      <VideoSlider />
    </Layout>
  );
}

export default App;
