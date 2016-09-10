import { createRouter } from '@exponent/ex-navigation'

import HomeScreen from '../screens/HomeScreen'
import UserEvents from '../screens/UserEvents'
import LinksScreen from '../screens/LinksScreen'
import SettingsScreen from '../screens/SettingsScreen'
// import OnboardingForm from '../screens/OnboardingForm';
import RootNavigation from './RootNavigation'

export default createRouter(() => ({
    home: () => HomeScreen,
    userEvents: () => UserEvents,
    links: () => LinksScreen,
    settings: () => SettingsScreen,
    // onboarding: () => OnboardingForm,
    rootNavigation: () => RootNavigation,
}))
