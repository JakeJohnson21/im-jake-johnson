import { useEffect, useState } from "react";
import "./App.css";
import DevBanner from "./components/DevBanner";
// import Footer from "./components/Footer";

function App() {
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReload(true);
    }, 800);
  }, []);

  return (
    <main className="app app-dark">
      <DevBanner reload={reload} />
      {/* <Footer /> */}
    </main>
  );
}

export default App;
