/**
 * @format
 */
import { AutocompleteDropdownContextProvider } from 'react-native-autocomplete-dropdown';
import { AppRegistry, LogBox } from 'react-native';
import RNTester from './rn-tester';
import { name as appName } from './app.json';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

AppRegistry.registerComponent(appName, () => RNTester);

AppRegistry.setWrapperComponentProvider(appParams => {
  return ({ children }) => (
      <AutocompleteDropdownContextProvider >
        {children}
      </AutocompleteDropdownContextProvider>
  );
});