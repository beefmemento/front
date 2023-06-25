import Router from "./Router";
import GlobalStyle from "./style/GlobalStyle";
import "./style/font.css";

export const APIURL = "http://127.0.0.1:8000";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
