import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screen/Profile";
import Quiz from "../screen/Quiz";
import Leaderboard from "../screen/Leaderboard";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Text } from "react-native";

export default function Dashboard({ navigation }) {

  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarIndicatorStyle: {},
          tabBarItemStyle: {
            width: 150,
            flexDirection: "column",
          },
          tabBarStyle: {
            height: 90,
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Quiz"
          component={Quiz}
          initialParams={{ navigate: () => navigation.navigate("StartQuiz") }}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="code-slash"
                size={30}
                color={focused ? "#ec4899" : "#2c3544"}
              />
            ),
            tabBarLabel: ({ focused }) => (
              <Text style={{ color: focused ? "#ec4899" : "#2c3544" }}>
                Quiz
              </Text>
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="user"
                size={30}
                color={focused ? "#ec4899" : "#2c3544"}
              />
            ),
            tabBarLabel: ({ focused }) => (
              <Text style={{ color: focused ? "#ec4899" : "#2c3544" }}>
                Profile
              </Text>
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Leaderboard"
          component={Leaderboard}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="trophy-outline"
                size={30}
                color={focused ? "#ec4899" : "#2c3544"}
              />
            ),
            tabBarLabel: ({ focused }) => (
              <Text style={{ color: focused ? "#ec4899" : "#2c3544" }}>
                Leaderboard
              </Text>
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
