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
  const [dirrection, setDirrection] = useState(null);
  const cell = [];
  const raw = [];
  let intervalYD = useRef(null);
  let intervalYUp = useRef(null);
  let intervalXR = useRef(null);
  let intervalXL = useRef(null);

  useEffect(() => {
    const newTarget = () => {
      let isTarget = false;
      let newXTarg = Math.round(Math.random() * 4);
      let newYTarg = Math.round(Math.random() * 4);
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

  useEffect(() => {
    const arowDownFn = () => {
      clearInterval(intervalXR.current);
      clearInterval(intervalXL.current);
      if (dirrection === "ArrowUp") {
        return;
      }
      intervalYD.current = setInterval(() => {
        moveFn("Down");
      }, time);
    };

    const arowUpFn = () => {
      clearInterval(intervalXR.current);
      clearInterval(intervalXL.current);
      if (dirrection === "ArrowDown") {
        return;
      }
      intervalYUp.current = setInterval(() => {
        moveFn("Up");
      }, time);
    };

    const arowRightFn = () => {
      clearInterval(intervalXR.current);
      clearInterval(intervalXL.current);
      if (dirrection === "ArrowLeft") {
        return;
      }
      intervalXR.current = setInterval(() => {
        moveFn("Right");
      }, time);
    };

    const arowLeftFn = () => {
      clearInterval(intervalXR.current);
      clearInterval(intervalXL.current);
      if (dirrection === "ArrowRight") {
        return;
      }
      intervalXL.current = setInterval(() => {
        moveFn("Left");
      }, time);
    };

    if (dirrection && !error) {
      dirrection === "ArrowDown" && arowDownFn();
      dirrection === "ArrowUp" && arowUpFn();
      dirrection === "ArrowRight" && arowRightFn();
      dirrection === "ArrowLeft" && arowLeftFn();
    }
    const moveFn = (moveDown) => {
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

    const arrowClick = ({ key }) => {
      if (key === "ArrowDown") {
        if (dirrection === "ArrowDown") {
          return;
        }
        setDirrection((prev) => "ArrowDown");
        arowDownFn();
      }

      if (key === "ArrowUp") {
        if (dirrection === "ArrowUp") {
          return;
        }
        setDirrection("ArrowUp");
        arowUpFn();
      }

      if (key === "ArrowRight") {
        if (dirrection === "ArrowRight") {
          return;
        }
        setDirrection("ArrowRight");
        arowRightFn();
      }

      if (key === "ArrowLeft") {
        if (dirrection === "ArrowLeft") {
          return;
        }
        setDirrection("ArrowLeft");
        arowLeftFn();
      }
    };

    window.addEventListener("keydown", arrowClick);
    return () => {
      clearInterval(intervalYD.current);
      clearInterval(intervalYUp.current);
      clearInterval(intervalXR.current);
      clearInterval(intervalXL.current);
      window.removeEventListener("keydown", arrowClick);
    };
  }, [dirrection, error, time]);

  for (let i = 0; i < 15; i++) {
    cell.push(i);
  }

  for (let i = 0; i < 15; i++) {
    raw.push(cell);
  }

  return (
    <>
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
    </>
  );
}

export default App;
