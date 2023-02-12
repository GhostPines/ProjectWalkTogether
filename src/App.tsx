import { RecoilRoot } from 'recoil';
import Router from './routes/router';

function App(): JSX.Element {
    return (
        <RecoilRoot>
            <Router />
        </RecoilRoot>
    );
}

export default App;
