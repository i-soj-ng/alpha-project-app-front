/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {HelloWorldApp} from './src/components/login/login.js';

AppRegistry.registerComponent(appName, () => HelloWorldApp);
