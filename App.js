import Login from "./src/screen/Login.jsx";
import Dashboard from "./src/components/Dashboard.jsx";
import StartQuiz from "./src/screen/StartQuiz.jsx"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// todo
// use usecontext and useReducer
// use firebase to store user profile and create new user and store user info and recordings