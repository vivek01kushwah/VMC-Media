import { createRoot } from "react-dom/client";
import "./index.css";

// Try to load full app, fallback to mobile version
const loadApp = async () => {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    console.error("Root element not found!");
    return;
  }

  // Check if this is a mobile device
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const isSmallScreen = window.innerWidth < 768;
  
  if (isMobile || isSmallScreen) {
    console.log("Mobile detected, using lightweight version");
    const { default: MobileApp } = await import("./MobileApp.tsx");
    createRoot(rootElement).render(<MobileApp />);
    return;
  }

  try {
    console.log("Loading full app for desktop...");
    const { default: App } = await import("./App.tsx");
    createRoot(rootElement).render(<App />);
  } catch (error) {
    console.error("Failed to load full app, using mobile fallback:", error);
    const { default: MobileApp } = await import("./MobileApp.tsx");
    createRoot(rootElement).render(<MobileApp />);
  }
};

loadApp();
