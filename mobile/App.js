
import { Provider } from 'react-redux';
import reduxStore from './redux/store';
import Notes from './Notes';

export default function App() {
  return <Provider store={reduxStore}>
    <Notes />
  </Provider>
}

