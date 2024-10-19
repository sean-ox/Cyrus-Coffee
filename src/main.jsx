import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider>
      <main className="min-h-screen w-screen bg-background text-foreground dark">
        <App />
      </main>
    </NextUIProvider>
  </StrictMode>,
);
