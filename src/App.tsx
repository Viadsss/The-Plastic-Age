import { useState } from "react";
import Bangus from "./components/Bangus";
import Countries from "./components/Countries";
import Fish from "./components/Fish";
import Hero from "./components/Hero";
import Plastic from "./components/Plastic";
import Quantity from "./components/Quantity";
import Rivers from "./components/Rivers";
import SingleUse from "./components/SingleUse";
import WeCanDo from "./components/WeCanDo";

function App() {
  const [language, setLanguage] = useState("English");

  return (
    <div className="min-h-screen bg-slate-200">
      <Hero setLanguage={setLanguage} language={language} />
      <Plastic language={language} />
      <Quantity language={language} />
      <SingleUse language={language} />
      <Countries language={language} />
      <Fish language={language} />
      <Rivers language={language} />
      <Bangus language={language} />
      <WeCanDo language={language} />
    </div>
  );
}

export default App;


