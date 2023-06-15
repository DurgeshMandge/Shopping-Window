import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Components/Body";
import Header from "./Components/Header";

const AppLayout = () =>{
    return (
        <>
        <Header />
        <Body />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
