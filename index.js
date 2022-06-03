/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Main} from './src/pages/Main';
import App from "./App";
import { MyPage } from "./src/pages/MyPage";
import { TabNavigation } from "./src/navigations/TabNavigation";
import { MyFilter } from "./src/pages/MyFilter";
import { QRPop } from "./src/pages/QRPop";
import { MainStackNavigation } from "./src/navigations/MainStackNavigation";

AppRegistry.registerComponent(appName, () => App);
