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
  const [time, setTime] = useState(300);

  let direction = useRef('');
  const cell = [];
  const raw = [];
  let intervalID = useRef(NaN);

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

      setTime((prev) => Math.round(prev * 0.96));
      return;
    }

    xy.slice(0, xy.length - 2).forEach((coord) => {
      if (firstEl[0] === coord[0] && firstEl[1] === coord[1]) {
        setError(true);
        return console.log("ERRORR!!!!");
      }
    });
  }, [xTarget, xy, yTarget]);

  interface IProp {
    key: string;
  }

  useEffect(() => {
    const arrowClick = ({ key }: IProp) => {
      if (key === "ArrowDown") {
        if (direction.current === "ArrowUp") {
          return;
        }

        direction.current = "ArrowDown";
      }

      if (key === "ArrowUp") {
        if (direction.current === "ArrowDown") {
          return;
        }

        direction.current = "ArrowUp";
      }

      if (key === "ArrowRight") {
        if (direction.current === "ArrowLeft") {
          return;
        }

        direction.current = "ArrowRight";
      }

      if (key === "ArrowLeft") {
        if (direction.current === "ArrowRight") {
          return;
        }

        direction.current = "ArrowLeft";
      }
    };

    window.addEventListener("keydown", arrowClick);
    return () => {
      window.removeEventListener("keydown", arrowClick);
    };
  }, [error]);

  useEffect(() => {
    if (error) {
      clearInterval(intervalID.current);
      return;
    }

    const testFn = (array: number[][]) => {
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

    const moveFn = (moveDown: string) => {
      setXY((prev) => {
        let newCoord = prev.slice(1);
        let newPoint = JSON.parse(JSON.stringify(newCoord[newCoord.length - 1]));
        // eslint-disable-next-line default-case
        switch (moveDown) {
          case "Right":
            newPoint[0] += 1;
            break;

          case "Left":
            newPoint[0] -= 1;
            break;

          case "Down":
            newPoint[1] += 1;
            break;

          case "Up":
            newPoint[1] -= 1;
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
    intervalID.current = window.setInterval(() => {
      switch (direction.current) {
        case "ArrowDown":
          moveFn("Down")
          break;
        case "ArrowUp":
          moveFn("Up")
          break;
        case "ArrowRight":
          moveFn("Right")
          break;
        case "ArrowLeft":
          moveFn("Left")
          break;
      }
    }, time);
    return () => {
      clearInterval(intervalID.current);
    };
  }, [error, time]);

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