import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { Modal, Button } from 'react-bootstrap';

import "./App.css";

interface IState {
  record: number;
}

function App() {
  const initialSate: IState = {
    record: Number(localStorage.getItem('record')) || 0,
  };
  const [xy, setXY] = useState([
    [3, 3],
    [3, 4],
    [4, 4],
  ]);
  const [xTarget, setXTarget] = useState(Math.round(Math.random() * 14));
  const [yTarget, setYTarget] = useState(Math.round(Math.random() * 14));
  const [error, setError] = useState(false);
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(450);
  const [show, setShow] = useState(false);
  const [record, setRecord] = useState(initialSate.record)

  let direction = useRef('');
  const cell = [];
  const raw = [];
  let intervalID = useRef(NaN);
  let isMoved = useRef(true);

  const newRecord = () => {
    if (count > record) {
      setRecord(count);
      localStorage.setItem('record', count.toString())
    }
  }

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
      setCount((prev) => prev + Math.round(xy.length * 1000 / time));
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
        newRecord();
        setShow(true);
        return console.log("ERRORR!!!!");
      }
    });
  }, [xTarget, xy, yTarget]);

  interface IProp {
    key: string;
  }

  useEffect(() => {
    const arrowClick = ({ key }: IProp) => {
      if (!isMoved.current) {
        return
      }
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

      isMoved.current = false;
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
          newRecord();
          setShow(true);
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
          case "ArrowRight":
            newPoint[0] += 1;
            break;

          case "ArrowLeft":
            newPoint[0] -= 1;
            break;

          case "ArrowDown":
            newPoint[1] += 1;
            break;

          case "ArrowUp":
            newPoint[1] -= 1;
            break;
        }

        if (newPoint[0] > 14 || newPoint[1] > 14 || newPoint[0] < 0 || newPoint[1] < 0) {
          setError(() => true);
          newRecord();
          setShow(true);
          return prev;
        }

        isMoved.current = true
        newCoord.push(newPoint);

        return testFn(newCoord) ? prev : newCoord;
      });
    };

    intervalID.current = window.setInterval(() => {
      switch (direction.current) {
        case "ArrowDown":
          moveFn("ArrowDown")
          break;
        case "ArrowUp":
          moveFn("ArrowUp")
          break;
        case "ArrowRight":
          moveFn("ArrowRight")
          break;
        case "ArrowLeft":
          moveFn("ArrowLeft")
          break;
      }
    }, time);
    return () => {
      clearInterval(intervalID.current);
    };
  }, [error, time]);

  const handleStartClick = () => {
    setError(false);

    setCount(0);
    setTime(450);
    setShow(false);
    setXY([
      [3, 3],
      [3, 4],
      [4, 4],
    ]);
    direction.current = '';
  }

  const handleClearRecord = () => {
    setRecord(0);
    localStorage.clear();
  }

  for (let i = 0; i < 15; i++) {
    cell.push(i);
  }

  for (let i = 0; i < 15; i++) {
    raw.push(cell);
  }

  return (
    <>
      <h1>Record: {record}</h1>
      <Button variant="success" onClick={handleClearRecord}>Clear record</Button>
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
      <Modal
        show={show}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header>
          <Modal.Title id="example-custom-modal-styling-title">
            Your results: {count} points
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button variant="success" onClick={handleStartClick}>Try again</Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default App;