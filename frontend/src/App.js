import { Box, Container, Stack } from "@mui/material";
import Navigation from "./route/Navigation";
import { Provider } from 'react-redux';
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react';
import { store, persistor } from './redux/store';


function App() {
  // const userData = useSelector(state => state.UserReducer.value);
  // console.log('userData', userData);

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
          <Navigation />
        </PersistGate>
      </Provider>
    </Stack>

  );
}

export default App;
