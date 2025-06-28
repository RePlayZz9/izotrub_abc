import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Proto } from "./screens/Proto";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Proto />
  </StrictMode>,
);
