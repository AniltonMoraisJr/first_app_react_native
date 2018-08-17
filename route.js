import { createStackNavigator, createDrawerNavigator, createSwitchNavigator } from 'react-navigation';
/* Components */
import  LoginScreen from './Components/LoginScreen'
import  HomeScreen  from './Components/HomeScreen';
import  SettingsScreen  from './Components/SettingsScreen';
import customDrawerContent from './Components/Utils/CustomDrawerContent';

export const LoginNav = createStackNavigator (
    {
      Login: {
          screen: LoginScreen,
      },
    },
    {
      initialRouteName: 'Login',
      headerMode: 'none'
    }
)

export const AdminNav = createDrawerNavigator(
    {
      Home: {
        screen: HomeScreen,
      },
      Settings: {
        screen: SettingsScreen
      },
      
    }, 
    {
      initialRouteName: 'Home',
      drawerPosition: 'left',
      contentComponent: customDrawerContent,
    
    }
);

export const SwitchNav = (signedIn = false) => {
    return createSwitchNavigator(
        {
            AdminNav: {
                screen: AdminNav
            },
            LoginNav: {
                screen: LoginNav
            }
        },
        {
            initialRouteName: signedIn ? "AdminNav" : "LoginNav" 
        }
    )
}