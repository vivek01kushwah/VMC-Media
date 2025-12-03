import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Debug function to check if components load
const checkComponents = async () => {
  try {
    console.log("Loading components...");
    const Index = await import("./pages/Index");
    console.log("Index component loaded:", !!Index.default);
    return true;
  } catch (error) {
    console.error("Component loading error:", error);
    return false;
  }
};

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("Root element not found!");
} else {
  console.log("Root element found, rendering app...");
  
  checkComponents().then((success) => {
    if (success) {
      createRoot(rootElement).render(<App />);
    } else {
      rootElement.innerHTML = '<div style="padding: 2rem; font-family: Inter, sans-serif;"><h1>Loading Error</h1><p>Failed to load components. Check console for details.</p></div>';
    }
  });
}
