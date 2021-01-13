import React from "react";
import ReactDOM from "react-dom"

const el = React.createElement(
          "h1",
          null,
          "Hello world, React.js"
        )

ReactDOM.render(
                el,
                document.getElementById("root")
                );