import { RecoilRoot } from "recoil";
import Router from "./routes/router";
import GlobalStyle from "./styles/globalStyles";

function App(): JSX.Element {
    return (
        <RecoilRoot>
            <GlobalStyle />

            <Router />
        </RecoilRoot>
    );
}

export default App;