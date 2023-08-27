// import logo from "./logo.svg";
import { React, useState } from "react";

import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import html2canvas from "html2canvas";
// import { buildQueries } from "@testing-library/react";

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
  const [colorIndex, setcolorIndex] = useState(rand);

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
  const colorArray = [
    ["#d13642", "#fdedb2"], //red, yellow (basic)
    ["#ffd15e", "#009bc6"],
    ["#1539CF", "#F1D3D3"],
    ["#28292B", "#B1FDEA"],
    ["#FF0046", "#28292B"],
    ["#0D3934", "#FFC5D6"],
    ["#F02F3B", "#481B19"],
    ["#F7CE17", "#B8237E"],
    ["#19227D", "#F1C2B8"],
    ["#FDF06E", "#D31B33"],
    ["#16C37B", "#F4F4F4"],
    ["#14E1E3", "#44266D"],
    ["#6136BA", "#00FFC3"],
    ["#FF8C8B", "#32145D"],
    ["#90FFE4", "#073EA7"],
    ["#E289DE", "#7912D9"],
    ["#EDB200", "#502F7E"],
    ["#1E3B34", "#FEBC00"], //
    ["#F6748D", "#E5E8DC"], //
    ["#FF8C8B", "#821E74"], //
    ["#141A46", "#EC8B5E"], //dark blue, orange
    ["#143D59", "#F4B41A"], //dark blue, yellow
    ["#F4A896", "#358597"], //pink, turquoise
  ];

  const quoteArray = [
    "success and happiness starts with a f**k you.",
    "enough is enough is enough",
    "there's no next time.",
    "efforts are better than promises.",
    "some chapters end quickly, before we're even ready..",
    "you just have to trust, you cannot have it confirmed.",
    "you already knew, but just didn't know.",
    "not all changes are new; some are just realizations, while some were just overdue.",
    "success and happiness starts with f**k you",
    "you stay in touch, but out of reach.",
    "✨✨✨✨✨",
    "it was meant to be just a chapter.",
    "can not is better than can't.",
    "you just wish for a path through the middle",
    "coffee is all you need.",
    "it's just better to let things be.",
    "it's all a scam.",
    "we just need a little help.",
    "you have to take the first step.",
    "one small decision feels like the biggest decision of your life.",
    "it's all the time.",
    "caffeine hits the g-spot.",
    "one decision feels too small to be the biggest decision of your life.",
    "no-music workout is what you need.",
    "doing nothing is more productive.",
    "what didn't work out for you really worked out for you.",
    "enough is not enough.",
    "silence says a lot more than words.",
    "listening to a song on loop makes everything else fade away.",
    "taking a nap makes everything go away.",
    "just sometimes.",
    "it's better to embrace the silence.",
    "I'm like, what the hell?!",
    "it's too soon",
    "",
    "I'll just start without even knowing where it's going.",
    "you will never know the value of a moment until it becomes a memory.",
    "life is like coffee. You have to let it brew for the best taste.",
    "life is like coffee, brew it for too long and it goes bitter.",
    "it's the new beginning that make the ending special.",
    "it's neither hot, nor cold. Just lukeworm.",
    "familiar starts feeling unfamiliar",
    "🤌🤌🤌",
    "when you lose something, you gain something else.",
    "it's okay to say no to plans to be by yourself.",
    "you just have to rip off the band-aid.",
    "I don't want it to end.",
    "it is what it is.",
    "it's the little things that end up being not so little.",
    "timebound moments create timeless memories",
  ];

  // {
  //   "red&black":["#eree", "#erg"]
  // }
  // var temp = -1;
  const [temp, settemp] = useState(-1);

  function quoteChange() {
    // while (true) {
    while (true) {
      rand = Math.floor(Math.random() * 20);
      if ((rand !== temp) & (rand < colorArray.length)) {
        setcolorIndex(rand);
        console.log(colorIndex, temp, rand);
        settemp(rand);
        break;
      }
    }
    // if (rand < colorArray.length) {
    //   setcolorIndex(rand);
    // break;
    // }
    // }
    // console.log(
    //   quoteArray[quoteIndex][0],
    //   quoteArray[quoteIndex][1],
    //   quoteArray[quoteIndex][2]
    // );
    if (quoteIndex >= quoteArray.length - 1) {
      setquoteIndex(0);
    } else {
      setquoteIndex(quoteIndex + 1);
    }

    var appColors = document.getElementById("App");
    var bodyColors = document.getElementById("quoteBody");
    // var appColors = card.getElementsByClassName("watermark")[0];
    // card.removeChild(waterMark);
    var downloadBtn = document.getElementById("downloadBtn");
    var tweetBtn = document.getElementById("tweetBtn");
    var giftBtn = document.getElementById("giftBtn");
    appColors.style.color = `${colorArray[colorIndex][0]}`;
    appColors.style.backgroundColor = `${colorArray[colorIndex][1]}`;
    bodyColors.style.color = `${colorArray[colorIndex][0]}`;
    bodyColors.style.backgroundColor = `${colorArray[colorIndex][1]}`;
    downloadBtn.style.color = `${colorArray[colorIndex][1]}`;
    downloadBtn.style.backgroundColor = `${colorArray[colorIndex][0]}`;
    downloadBtn.style.border = `solid ${colorArray[colorIndex][0]}`;
    tweetBtn.style.border = `solid ${colorArray[colorIndex][0]}`;
    tweetBtn.style.color = `${colorArray[colorIndex][0]}`;
    tweetBtn.style.opacity = ".7";
    giftBtn.style.border = `solid ${colorArray[colorIndex][0]}`;
    giftBtn.style.color = `${colorArray[colorIndex][0]}`;
    giftBtn.style.opacity = ".7";
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
              href="https://forms.gle/zgAGVkZRAcRLFf6QA"
              target="_blank"
              rel="noopener noreferrer"
              id="giftBtn"
            >
              <i class="fa fa-gift fa-lg" aria-hidden="true"></i>
            </a>
            <a
              className="App-link"
              href={`https://twitter.com/intent/tweet?url=sometimesin.life&text=sometimes, ${quoteArray[quoteIndex]}%0A- `}
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
