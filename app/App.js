import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { StackNavigation } from "./src/Navigations/StackNavigation/StackNavigation";
import { UserIdContext } from "./src/Components/Context/AppContext";

import { Provider } from "react-redux";
import store from "./src/App/Store";
// import { useDispatch } from "react-redux";
// import { setUsersData } from "./src/Feature/users.slice";

// const AppWrapper = () => {
//   const store =
// }

export default function App() {
  // const [uid, setUid] = useState(null);
  // const [usersData, setUsersData] = useState([]);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchToken = async () => {
  //     await axios
  //       .get(`http://10.0.2.2:8080/jwtid`)
  //       .then((res) => {
  //         setUid(res.data);
  //       })
  //       .catch((err) => console.log("No token"));
  //   };
  //   fetchToken();
  // }, [uid]);

  //console.log(usersData);
  // console.log(uid);
  return (
    <Provider store={store}>
      <StackNavigation />
    </Provider>
  );
}
