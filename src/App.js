import Header from './components/Header';
import './App.css';
import MainBody from './components/MainBody';
import { Provider } from 'react-redux';
import store from './utils/appStore';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Maincontainer from './components/Maincontainer';
import WatchPage from './components/WatchPage';


const appRouter= createBrowserRouter([{
  path: '/',
  element: <MainBody/>,
  children:[
    {
      path: '/',
      element: <Maincontainer/>
    },
    {
      path: '/watch',
      element: <WatchPage/>
    }
  ]
}])

function App() {
  return (

    <Provider store={store}>
    <div className="text-center">
      <Header/>
      <RouterProvider router={appRouter}/>

    </div>
    </Provider>
  );
}

export default App;
