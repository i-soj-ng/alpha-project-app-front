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
import { MakeFilter } from "./src/pages/MakeFilter";
import { MakeAccessory } from "./src/pages/MakeAccessory";
import { LookAround } from "./src/pages/LookAround";

AppRegistry.registerComponent(appName, () => App);
