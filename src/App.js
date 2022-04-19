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
  var rand = Math.floor(Math.random() * 20);
  const [quoteIndex, setquoteIndex] = useState(rand);

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

  // {quote, textcolor, bgcolor}
  const quoteArray = [
    ["it's just better to let things be.", "#d13642", "#fdedb2"],
    ["it's all a scam.", "#ffd15e", "#009bc6"],
    ["wasting time is more productive.", "#1539CF", "#F1D3D3"],
    [
      "one small decision feels like the biggest decision of your life.",
      "#28292B",
      "#B1FDEA",
    ],
    [
      "one decision feels too small to be the biggest decision of your life.",
      "#FF0046",
      "#28292B",
    ],
    ["no-music workout is what you need.", "red", "yellow"],
    ["coffee is all you need.", "red", "yellow"],
    ["caffeine hits the g-spot.", "red", "yellow"],
    [
      "what didn't work out for you really worked out for you.",
      "red",
      "yellow",
    ],
    ["it's all the time.", "red", "yellow"],
    ["enough is not enough.", "red", "yellow"],
    ["silence says a lot more than words.", "red", "yellow"],
    ["listening to a song on loop makes everything go away.", "red", "yellow"],
    ["taking a nap makes everything go away.", "red", "yellow"],
    ["", "red", "yellow"],
  ];

  // {
  //   "red&black":["#eree", "#erg"]
  // }

  function quoteChange() {
    // while (true) {
    //   rand = Math.floor(Math.random() * 20);
    //   if (rand < quoteArray.length) {
    //     setquoteIndex(rand);
    //     break;
    //   }
    // }
    console.log(
      quoteArray[quoteIndex][0],
      quoteArray[quoteIndex][1],
      quoteArray[quoteIndex][2]
    );
    if (quoteIndex >= quoteArray.length - 1) {
      setquoteIndex(0);
    } else {
      setquoteIndex(quoteIndex + 1);
    }

    var appColors = document.getElementById("App");
    // var appColors = card.getElementsByClassName("watermark")[0];
    // card.removeChild(waterMark);
    var downloadBtn = document.getElementById("downloadBtn");
    var tweetBtn = document.getElementById("tweetBtn");
    appColors.style.color = `${quoteArray[quoteIndex][1]}`;
    appColors.style.backgroundColor = `${quoteArray[quoteIndex][2]}`;
    downloadBtn.style.color = `${quoteArray[quoteIndex][2]}`;
    downloadBtn.style.backgroundColor = `${quoteArray[quoteIndex][1]}`;
    downloadBtn.style.border = `solid ${quoteArray[quoteIndex][1]}`;
    tweetBtn.style.border = `solid ${quoteArray[quoteIndex][1]}`;
    tweetBtn.style.color = `${quoteArray[quoteIndex][1]}`;
    tweetBtn.style.opacity = ".7";
  }

  return (
    <div className="App" id="App">
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
              href={`https://twitter.com/intent/tweet?url=sometimesin.life&text=sometimes, ${quoteArray[quoteIndex][0]}%0A- `}
              target="_blank"
              rel="noopener noreferrer"
              id="tweetBtn"
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
              id="downloadBtn"
            >
              Download as PNG
            </a>
          </div>
        </header>
        <div className="body" id="quoteBody">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p className="mainText">
            <div className="smallText">sometimes,</div>
            {quoteArray[quoteIndex][0]}
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
