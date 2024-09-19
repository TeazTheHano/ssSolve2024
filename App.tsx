import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ProviderTotal } from './data/store';

// screen import
import OnBoarding from './screens/OnBoarding';
import Login from './screens/Login';
import Home from './screens/Home';
import BottomTab from './assets/BottomTab';
import clrStyle from './assets/componentStyleSheet';

// ____________________END OF IMPORT_______________________

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  return (
    <ProviderTotal>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: clrStyle.white } }}>
          <Stack.Screen name="BottomTab" component={BottomTab} />
          <Stack.Screen name="OnBoarding" component={OnBoarding} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />

        </Stack.Navigator>
      </NavigationContainer>
    </ProviderTotal>
  )
}

export default App;
