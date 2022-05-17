/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Login} from './src/pages/Login';
import {Signup} from "./src/pages/Signup";
import App from "./App";

AppRegistry.registerComponent(appName, () => App);
