import React from "react";
import ReactDOM from "react-dom/client";
const element = (
    <div>
        <h1>Ending</h1>
    </div>
);
const FunctionalComponentWithoutReturn = () =>(
    <div>
        <h1>Hello</h1>
        <h2>No one</h2>
    </div>
);
const FunctionalComponentWithReturn = () =>{
    return (
        <div>
            {element}
            {FunctionalComponentWithoutReturn()}
            {1+2+3}
            {FunctionalComponentWithoutReturn}
            <FunctionalComponentWithoutReturn />
            <h1>Hello</h1>
            <h2>All</h2>
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionalComponentWithReturn />);
