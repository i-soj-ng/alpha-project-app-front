/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { SignupAccept } from "./src/pages/SignupAccept";
import App from "./App";

AppRegistry.registerComponent(appName, () => SignupAccept);
