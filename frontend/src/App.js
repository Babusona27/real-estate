import { Box, Container, Stack } from "@mui/material";
import AllProperties from "./components/AllProperties";
import ProductDetails from "./pages/ProductDetails";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Navigate,
} from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
 
      <Stack
        //   direction="row"
        // justifyContent="space-between"
        // alignItems="center"
        // paddingTop={5}
      >
        {/* <AllProperties /> */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Properties" element={<AllProperties />} />
            <Route path="/ProductDetails" element={<ProductDetails />} />
          </Routes>
        </Router>
      </Stack>

  );
}

export default App;
