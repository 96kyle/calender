import React, { useEffect, useState } from "react";

var now = new Date();
var year = now.getFullYear();
var month = now.getMonth();

var tempData = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

function App() {
  const [days, setDays] = useState([], [], [], [], [], []);

  useEffect(() => {
    var dummyDays = [];
    var firstDate = new Date(year, month, 1);
    var startDay = firstDate.getDay();
    var lastDate = new Date(year, month + 1, 0).getDate();

    for (var i = 0; i < lastDate; i++) {
      dummyDays[startDay + i] = i + 1;
    }
    var start = 0,
      end = 7;
    for (var j = 0; j < tempData.length; j++) {
      tempData[j] = dummyDays.slice(start, end);
      start = start + 7;
      end = end + 7;
    }
    setDays(tempData);
  }, [days]);

  const renderCalender = days.map((v) => {
    console.log("v", v);
    return (
      <div style={{ display: "flex" }}>
        <div
          style={{
            border: "solid 1px grey",
            width: "30px",
            height: "30px",
          }}
        >
          {v[0] === 0 ? "" : v[0]}
        </div>
        <div
          style={{
            border: "solid 1px grey",
            width: "30px",
            height: "30px",
          }}
        >
          {v[1] === 0 ? "" : v[1]}
        </div>
        <div
          style={{
            border: "solid 1px grey",
            width: "30px",
            height: "30px",
          }}
        >
          {v[2] === 0 ? "" : v[2]}
        </div>
        <div
          style={{
            border: "solid 1px grey",
            width: "30px",
            height: "30px",
          }}
        >
          {v[3] === 0 ? "" : v[3]}
        </div>
        <div
          style={{
            border: "solid 1px grey",
            width: "30px",
            height: "30px",
          }}
        >
          {v[4] === 0 ? "" : v[4]}
        </div>
        <div
          style={{
            border: "solid 1px grey",
            width: "30px",
            height: "30px",
          }}
        >
          {v[5] === 0 ? "" : v[5]}
        </div>
        <div
          style={{
            border: "solid 1px grey",
            width: "30px",
            height: "30px",
          }}
        >
          {v[6] === 0 ? "" : v[6]}
        </div>
      </div>
    );
  });

  const next = () => {
    if (month !== 11) {
      month = month + 1;
      setDays([]);
    } else {
      year = year + 1;
      month = 0;
      setDays([]);
    }
  };

  const prev = () => {
    if (month !== 0) {
      month = month + -1;
      setDays([]);
    } else {
      year = year - 1;
      month = 11;
      setDays([]);
    }
  };

  return (
    <div className="App">
      <div>{year}</div>
      <div>{month + 1}</div>
      <div>{renderCalender}</div>
      <button onClick={prev}>이전달</button>
      <button onClick={next}>다음달</button>
    </div>
  );
}

export default App;
