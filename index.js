/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Login} from './src/pages/Login';
import {Signup} from "./src/pages/Signup";

AppRegistry.registerComponent(appName, () => Signup);
