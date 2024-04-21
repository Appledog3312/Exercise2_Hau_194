import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
import HomeScreen from './screens/HomeScreen';
import Favourite from './screens/Favourite';
import Profile from './screens/Profile';
import Notifications from './screens/Notifications';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function TabNavigator({ navigation }) {
  React.useEffect(() => {
    const unsubscribeTabPress = navigation.addListener('tabPress', e => {
      const routeName = e.target.options.title;
      navigation.setOptions({
        headerTitle: routeName
      });
    });

    return unsubscribeTabPress;
  }, [navigation]);

  return (
    <Tab.Navigator
      shifting={true}
      activeColor="blue"
      inactiveColor="gray"
      barStyle={{ backgroundColor: 'lightgray' }}
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          display: 'flex', 
        },
      }}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="favourite"
        component={Favourite}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bell" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function DrawerNavigator() {
  const navigation = useNavigation();

  React.useEffect(() => {
    const unsubscribeDrawerOpen = navigation.addListener('drawerOpen', () => {
      navigation.setParams({ title: 'Menu' });
    });

    const unsubscribeDrawerClose = navigation.addListener('drawerClose', () => {
      const currentRoute = navigation.dangerouslyGetState().routes[
        navigation.dangerouslyGetState().index
      ];
      const routeName = currentRoute.state?.routes[currentRoute.state.index]?.name;

      if (routeName) {
        navigation.setParams({ title: routeName });
      }
    });

    return () => {
      unsubscribeDrawerOpen();
      unsubscribeDrawerClose();
    };
  }, [navigation]);

  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={TabNavigator}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="user" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favourite"
        component={TabNavigator}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="heart" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={TabNavigator}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="bell" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
