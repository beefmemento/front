import Router from "./Router";
import GlobalStyle from "./style/GlobalStyle";
import "./style/font.css";
import MentoMain from "./components/MentoMain";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
