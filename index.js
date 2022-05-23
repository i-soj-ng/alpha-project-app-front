/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Main} from './src/pages/Main';
import App from "./App";

AppRegistry.registerComponent(appName, () => Main);
