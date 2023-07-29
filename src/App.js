import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import { useState } from "react";
import Add from "./pages/Add";
import About from "./pages/About";
import { LinkContext } from "./context/link-context";

function App() {
  const dataList = [
    { linkName: "Hacker News", linkUrl: "www.hackernews.com", points: 6 },
    { linkName: "Google", linkUrl: "www.google.com", points: 3 },
  ];

  const [linkData, setLinkData] = useState(dataList);

  return (
    <LinkContext.Provider value={{ linkData, setLinkData }}>
      <div className="App">
        <Header />
        <hr />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/hakkımızda" element={<About />}></Route>
        </Routes>
      </div>
    </LinkContext.Provider>
  );
}

export default App;
