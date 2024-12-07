import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { SnackbarProvider } from 'notistack';

// // Create a root for the app
// const root = ReactDOM.createRoot(document.getElementById('root')); 

// // Render your application
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <SnackbarProvider
//         maxSnack={2}
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'center',
//         }}
//       >
//         <Router>
//           <App />
//         </Router>
//       </SnackbarProvider>
//     </Provider>
//   </React.StrictMode>
// );


import React from 'react';
import { createRoot } from 'react-dom'; 
const container = document.getElementById('root');
const root = createRoot(container); 

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider
        maxSnack={2}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Router>
          <App />
        </Router>
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>
);

