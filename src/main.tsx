// main.tsx

// src/main.tsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root") as HTMLElement).render(
  <div>
    <h1>Welcome to React</h1>
    <p>
      This is JSX — it looks like HTML, but it's not quite the same. It has its
      own rules!
    </p>
  </div>
);
