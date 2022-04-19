import logo from "./logo.svg";
import { React, useState } from "react";

import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import html2canvas from "html2canvas";

function App() {
  function download(dataurl, filename) {
    const link = document.createElement("a");
    link.href = dataurl;
    link.download = filename;
    link.click();
  }

  const [waterMarkFlag, setWaterMarkFlag] = useState(false);
  const [quoteIndex, setquoteIndex] = useState(0);

  function removeWatermark() {
    var card = document.getElementById("quoteBody");
    if (waterMarkFlag) {
      var waterMark = card.getElementsByClassName("watermark")[0];
      card.removeChild(waterMark);
      setWaterMarkFlag(!waterMarkFlag);
      waterMark.innerHTML = "";
    }
  }

  function downloadPNG() {
    var card = document.getElementById("quoteBody");
    if (!waterMarkFlag) {
      var waterMark = document.createElement("div");
      waterMark.className = "watermark";
      waterMark.innerHTML = "sometimesin.life";
      card.appendChild(waterMark);
      setWaterMarkFlag(!waterMarkFlag);
    }
    html2canvas(card, { useCORS: true }).then(function (canvas) {
      var img = canvas.toDataURL("image/png");
      download(img, "sometimes.png");
    });

    removeWatermark();
  }

  const quoteArray = [
    "a",
    "b",
    "c",
    "one small decision feels like the biggest decision of your life.",
  ];

  function quoteChange() {
    // console.log(quoteIndex, quoteArray.length);
    if (quoteIndex >= quoteArray.length - 1) {
      setquoteIndex(0);
    } else {
      setquoteIndex(quoteIndex + 1);
    }
  }

  return (
    <div className="App">
      {/* {quoteArray.map((quote) => ( */}
      <div>
        <header className="App-header">
          <div className="leftHeader">
            <p>sometimesin.life</p>
          </div>
          <div className="rightHeader">
            <p></p>
            <a
              className="App-link"
              href={`https://twitter.com/intent/tweet?url=sometimesin.life&text=sometimes, ${quoteArray[quoteIndex]}%0A- `}
              target="_blank"
              rel="noopener noreferrer"
            >
              Tweet
            </a>
            <a
              className="App-link"
              onClick={() => {
                downloadPNG();
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download as PNG
            </a>
          </div>
        </header>
        <div className="body" id="quoteBody">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p className="mainText">
            <div className="smallText">sometimes,</div>
            {quoteArray[quoteIndex]}
          </p>
          {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

          {/* <div className="watermark">
          Made on
          <a href="https://www.polycard.me"> Polycard.me</a>
        </div> */}
        </div>
      </div>
      {/* ))} */}
      <i
        className="fa fa-refresh fa-2xl"
        id="refreshIcon"
        aria-hidden="true"
        onClick={() => {
          quoteChange();
        }}
      ></i>
    </div>
  );
}

export default App;
