/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Main} from './src/pages/Main';
import App from "./App";
import { MyPage } from "./src/pages/MyPage";

AppRegistry.registerComponent(appName, () => Main);
