import { useEffect, useState } from "react";
import "./App.css";
import DevBanner from "./components/DevBanner";
import Footer from "./components/Footer";

function App() {
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReload(true);
    }, 800);
    console.log("reload in effect: ", reload);
  }, []);

  console.log("reload: ", reload);
  return (
    <main className="app">
      <DevBanner reload={reload} />
      {/* <Footer /> */}
    </main>
  );
}

export default App;
