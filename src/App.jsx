import "./assets/styles/output.css";

import Page from "./components/Page";
import { NewsProvider, NewsCategoryProvider } from "./provider";

function App() {
  return (
    <>
      <NewsCategoryProvider>
        <NewsProvider>
          <Page />
        </NewsProvider>
      </NewsCategoryProvider>
    </>
  );
}

export default App;
