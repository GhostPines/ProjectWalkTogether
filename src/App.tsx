import { RecoilRoot } from 'recoil';
import { MessageWindowComponent } from './messagewindow/MessageWindow';
import Router from './routes/router';

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <Router />
      <MessageWindowComponent />
    </RecoilRoot>
  );
}

export default App;
