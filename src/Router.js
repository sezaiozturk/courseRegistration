import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import First from './pages/first'
import Second from './pages/second'
import { Provider } from 'react-redux';
import { store } from './context/store'

const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='FirstScreen' component={First} />
          <Tab.Screen name='SecondScreen' component={Second} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App