import video from "../data/video.js";
import React from "react";
import Video from "./Video.js";



function App() {


  console.log("Here's your data:", video)
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dpw9EHDh2bM"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
        <Video videoDetails = {video}/>

    </div>
  );
}

export default App;
