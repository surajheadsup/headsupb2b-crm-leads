import React, { useEffect } from "react";
import "@fontsource/hind-vadodara/300.css";
import "@fontsource/hind-vadodara/400.css";
import "@fontsource/hind-vadodara/500.css";
import "@fontsource/hind-vadodara/600.css";
import "@fontsource/hind-vadodara/700.css";
import "./App.css";
import "./custom.css";
import "react-loading-skeleton/dist/skeleton.css";

import LeadMaster from "./WebView/lead-master/lead-master";
export default function App() {
  
  useEffect(() => {}, []);

  return (
   <div>
      <LeadMaster/>
    </div>
  );
}
