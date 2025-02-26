/**
 * @format
 */

import { AppRegistry } from 'react-native';
import RNTester from './rn-tester';
import { name as appName } from './app.json';
import Config from "react-native-config";

Config.API_URL; // 'https://myapi.com'
Config.GOOGLE_MAPS_API_KEY; // 'abcdefgh'

AppRegistry.registerComponent(appName, () => RNTester);
