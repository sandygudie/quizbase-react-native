import Login from "./src/screen/Login.jsx";
import Dashboard from "./src/components/Dashboard.jsx";
import StartQuiz from "./src/screen/StartQuiz.jsx";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "./src/context/index.jsx";
import Questionboard from "./src/screen/Questionboard.jsx";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="StartQuiz"
            component={StartQuiz}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Questionboard"
            component={Questionboard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

// todo
// use firebase to store user profile and create new user and store user info and recordings
