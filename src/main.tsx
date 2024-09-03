import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import RQProvider from "./lib/rq-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RQProvider>
      <App />
      <div className="fixed bottom-2 right-2 flex justify-center items-center text-sm text-purple-500 z-[100]">
        By Arsenti
      </div>
    </RQProvider>
  </StrictMode>
);
