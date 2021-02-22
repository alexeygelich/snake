import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [xy, setXY] = useState([
    [3, 3],
    [3, 4],
    [4, 4],
  ]);
  const [xTarget, setXTarget] = useState(1);
  const [yTarget, setYTarget] = useState(1);
  const [error, setError] = useState(false);
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(500);
  const [direction, setDirection] = useState(null);
  const [moved, setMoved] = useState(null);
  const cell = [];
  const raw = [];
  let intervalID = useRef(null);

  useEffect(() => {
    const newTarget = () => {
      let isTarget = false;
      let newXTarg = Math.round(Math.random() * 14);
      let newYTarg = Math.round(Math.random() * 14);
      xy.forEach((coord) => {
        if (coord[0] === newXTarg && coord[1] === newYTarg) {
          isTarget = true;
          newTarget();
          return;
        }
      });
      if (isTarget) return;
      setXTarget(newXTarg);
      setYTarget(newYTarg);
    };

    const firstEl = xy[xy.length - 1];

    if (firstEl[0] === xTarget && firstEl[1] === yTarget) {
      setCount((prev) => prev + 1);
      setXY((prev) => {
        let newCoords = [...prev];
        let newCell = [...newCoords[0]];
        newCoords.unshift(newCell);
        return [...newCoords];
      });

      newTarget();

      setTime((prev) => Math.round(prev * 0.93));
      return;
    }

    xy.slice(0, xy.length - 2).forEach((coord) => {
      if (firstEl[0] === coord[0] && firstEl[1] === coord[1]) {
        setError(true);
        return console.log("ERRORR!!!!");
      }
    });
  }, [xTarget, xy, yTarget]);

  useEffect(() => {
    const testFn = (array) => {
      let isError = false;
      const firstEl = array[array.length - 1];
      array.slice(0, array.length - 2).forEach((coord) => {
        if (firstEl[0] === coord[0] && firstEl[1] === coord[1]) {
          setError(true);
          return (isError = true);
        }
      });
      return isError;
    };

    const moveFn = (moveDown) => {
      setXY((prev) => {
        let newCoord = prev.slice(1);
        let newPoint = JSON.parse(JSON.stringify(newCoord[newCoord.length - 1]));
        // eslint-disable-next-line default-case
        switch (moveDown) {
          case "Right":
            newPoint[0] += 1;
            setMoved("ArrowRight");
            break;

          case "Left":
            newPoint[0] -= 1;
            setMoved("ArrowLeft");
            break;

          case "Down":
            newPoint[1] += 1;
            setMoved("ArrowDown");
            break;

          case "Up":
            newPoint[1] -= 1;
            setMoved("ArrowUp");
            break;
        }
        if (newPoint[0] > 14 || newPoint[1] > 14 || newPoint[0] < 0 || newPoint[1] < 0) {
          setError(() => true);
          return prev;
        }
        newCoord.push(newPoint);

        return testFn(newCoord) ? prev : newCoord;
      });
    };

    const arowDownFn = () => {
      clearInterval(intervalID.current);

      intervalID.current = setInterval(() => {
        moveFn("Down");
      }, time);
    };

    const arowUpFn = () => {
      clearInterval(intervalID.current);

      intervalID.current = setInterval(() => {
        moveFn("Up");
      }, time);
    };

    const arowRightFn = () => {
      clearInterval(intervalID.current);

      intervalID.current = setInterval(() => {
        moveFn("Right");
      }, time);
    };

    const arowLeftFn = () => {
      clearInterval(intervalID.current);

      intervalID.current = setInterval(() => {
        moveFn("Left");
      }, time);
    };

    if (moved && !error) {
      moved === "ArrowDown" && arowDownFn();
      moved === "ArrowUp" && arowUpFn();
      moved === "ArrowRight" && arowRightFn();
      moved === "ArrowLeft" && arowLeftFn();
    }

    const arrowClick = ({ key }) => {
      if (error) {
        return window.removeEventListener("keydown", arrowClick);
      }
      if (key === "ArrowDown") {
        if (direction === "ArrowDown" || moved === "ArrowUp") {
          return;
        }
        clearInterval(intervalID.current);
        setDirection("ArrowDown");
        moveFn("Down");
        arowDownFn();
      }

      if (key === "ArrowUp") {
        if (direction === "ArrowUp" || moved === "ArrowDown") {
          return;
        }
        clearInterval(intervalID.current);
        setDirection("ArrowUp");
        moveFn("Up");
        arowUpFn();
      }

      if (key === "ArrowRight") {
        if (direction === "ArrowRight" || moved === "ArrowLeft") {
          return;
        }
        clearInterval(intervalID.current);
        setDirection("ArrowRight");
        moveFn("Right");
        arowRightFn();
      }

      if (key === "ArrowLeft") {
        if (direction === "ArrowLeft" || moved === "ArrowRight") {
          return;
        }
        clearInterval(intervalID.current);
        setDirection("ArrowLeft");
        moveFn("Left");
        arowLeftFn();
      }
    };

    window.addEventListener("keydown", arrowClick);
    return () => {
      clearInterval(intervalID.current);
      window.removeEventListener("keydown", arrowClick);
    };
  }, [direction, error, moved, time]);

  for (let i = 0; i < 15; i++) {
    cell.push(i);
  }

  for (let i = 0; i < 15; i++) {
    raw.push(cell);
  }

  return (
    <div className="wrapper">
      <ul>
        {raw.map((rawItem, idxRaw) => (
          <li key={uuidv4()}>
            {rawItem.map((cell, idxCell) => {
              if (idxRaw === yTarget && idxCell === xTarget) {
                return <div key={uuidv4()} className="cell target"></div>;
              }
              let isActive = false;
              xy.forEach((coord) => {
                if (coord[0] === idxCell && coord[1] === idxRaw) {
                  isActive = true;
                }
              });
              return <div key={uuidv4()} className={isActive ? "cell isActive" : "cell"}></div>;
            })}
          </li>
        ))}
      </ul>
      <h1>Points: {count}</h1>
    </div>
  );
}

export default App;
