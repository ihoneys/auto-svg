import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Icon } from "./components/Icon";
// import SvgIcon from "./svg/add-student.svg";
import { ReactComponent as ReactIcon } from "./svg/react.svg";

function App() {
  const [count, setCount] = useState(0);
  // console.log(SvgIcon);
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Icon icon="wechat" size={66} className="wechat-color" />
      <div
        style={{
          background: "#F1F1FF",
          color: "#8871E5 !important"
        }}
      >
        <Icon icon="add-student" size={66} />
        <ReactIcon />
      </div>
    </div>
  );
}

export default App;
