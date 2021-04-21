import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'


import ProfileScreen from '../screens/ProfileScreen'
import EditProfileScreen from '../screens/EditProfileScreen'


const Stack = createStackNavigator()

const ProfileNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
              name="ProfileScreen" 
              component = { ProfileScreen }
              options = {{
                title: 'Профиль'
              }}
              />
            <Stack.Screen 
              name="EditProfileScreen" 
              component = { EditProfileScreen }
              options = {{
                title: 'Редактирование профиля'
              }}
              />
        </Stack.Navigator>
    )
}

export default ProfileNavigator