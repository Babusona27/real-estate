import { Box, Container, Stack } from "@mui/material";
import AllProperties from "./components/AllProperties";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import AddNewProperty from "./pages/AddNewProperty";
import { Provider } from 'react-redux';
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react';
import { store, persistor } from './redux/store';
function App() {
  return (

    <Stack
    //   direction="row"
    // justifyContent="space-between"
    // alignItems="center"
    // paddingTop={5}
    >
      {/* <AllProperties /> */}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/Properties" element={<AllProperties />} />
              <Route path="/ProductDetails/:id" element={<ProductDetails />} />
              <Route path="/AddNewProperty" element={<AddNewProperty />} />

            </Routes>
          </Router>
        </PersistGate>
      </Provider>
    </Stack>

  );
}

export default App;
