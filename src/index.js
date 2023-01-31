import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import ClassTrainTest from "./Component/ClassComponentTrain";
import Learn from "./Component/TypePropstraining";
import StateTestLearn from "./Component/StatePropsTrain";
const root = ReactDOM.createRoot(document.getElementById("root"));

/////////////////////////////////// without probs
function Learn1() {
  return <div>Learn Test 1</div>;
}

const Learn2 = () => {
  return <div>Learn Test 2</div>;
};

const Learn3 = () => {
  return (
    <div>
      {/* hello {Math.floor(Math.random()*40)} */}
      <div>
        <Learn2 />
        <p>test learn 3</p>
      </div>
    </div>
  );
};
/////////////////////////////

///////////////////// with probs
function Learn4(props) {
  return <div>Learn Test 1 {props.name}</div>;
}
function FunctionTest() {
  return <div>Learn Test props value</div>;
}
const Learn5 = (props) => {
  return <div>Learn Test 2 {props.testF()}</div>;
};

const Learn6 = (props) => {
  return <div>{props.children}</div>;
};

const Learn7 = (props) => {
  return (
    <div>
      <div>
        <Learn3>
          <p>test learn children</p>
        </Learn3>
        <Learn2 />
        <Learn5 testF={FunctionTest} />
        <p>test learn 4 {props.name}</p>
      </div>
    </div>
  );
};
////////////////////

root.render(
  <React.StrictMode>
    <div>
      <Learn1 />
      {Learn1()}
      <Learn3 />

      <Learn7 name="test props 7" />

      <ClassTrainTest name="Test Class Props" />

      <Learn age={25} />
      <StateTestLearn />
    </div>
  </React.StrictMode>
);
reportWebVitals();
