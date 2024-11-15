import { RNTesterEmptyBookmarksState } from './components/RNTesterEmptyBookmarksState';
import RNTesterModuleContainer from './components/RNTesterModuleContainer';
import RNTesterModuleList from './components/RNTesterModuleList';
import RNTesterNavBar, { navBarHeight } from './components/RNTesterNavbar';
import { RNTesterThemeContext, themes } from './components/RNTesterTheme';
import RNTTitleBar from './components/RNTTitleBar';
import RNTesterList from './utils/RNTesterList';
import {
  RNTesterNavigationActionsType,
  RNTesterNavigationReducer,
} from './utils/RNTesterNavigationReducer';
import {
  Screens,
  getExamplesListWithBookmarksAndRecentlyUsed,
  initialNavigationState,
} from './utils/testerStateUtils';
import * as React from 'react';
import { BackHandler, StyleSheet, View } from 'react-native';
import BootSplash from 'react-native-bootsplash';

const RNTesterApp = () => {
  const [state, dispatch] = React.useReducer(RNTesterNavigationReducer, initialNavigationState);

  const {
    activeModuleKey,
    activeModuleTitle,
    activeModuleExampleKey,
    screen,
    bookmarks,
    recentlyUsed,
  } = state;

  const examplesList = React.useMemo(
    () => getExamplesListWithBookmarksAndRecentlyUsed({ bookmarks, recentlyUsed }),
    [bookmarks, recentlyUsed],
  );

  const handleBackPress = React.useCallback(() => {
    if (activeModuleKey != null) {
      dispatch({ type: RNTesterNavigationActionsType.BACK_BUTTON_PRESS });
    }
  }, [dispatch, activeModuleKey]);

  // Setup hardware back button press listener
  React.useEffect(() => {
    BootSplash.hide();
    const handleHardwareBackPress = () => {
      if (activeModuleKey) {
        handleBackPress();
        return true;
      }
      return false;
    };

    BackHandler.addEventListener('hardwareBackPress', handleHardwareBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleHardwareBackPress);
    };
  }, [activeModuleKey, handleBackPress]);

  const handleModuleCardPress = React.useCallback(
    ({ exampleType, key, title }: any) => {
      dispatch({
        type: RNTesterNavigationActionsType.MODULE_CARD_PRESS,
        data: { exampleType, key, title },
      });
    },
    [dispatch],
  );

  const handleModuleExampleCardPress = React.useCallback(
    (exampleName: string) => {
      dispatch({
        type: RNTesterNavigationActionsType.EXAMPLE_CARD_PRESS,
        data: { key: exampleName },
      });
    },
    [dispatch],
  );

  const toggleBookmark = React.useCallback(
    ({ exampleType, key }: any) => {
      dispatch({
        type: RNTesterNavigationActionsType.BOOKMARK_PRESS,
        data: { exampleType, key },
      });
    },
    [dispatch],
  );

  const handleNavBarPress = React.useCallback(
    (args: { screen: string }) => {
      dispatch({
        type: RNTesterNavigationActionsType.NAVBAR_PRESS,
        data: { screen: args.screen },
      });
    },
    [dispatch],
  );

  const theme = themes.light;

  if (examplesList === null) {
    return null;
  }

  const activeModule = activeModuleKey != null ? RNTesterList.Modules[activeModuleKey] : null;
  const activeModuleExample =
    activeModuleExampleKey != null
      ? activeModule?.examples.find(e => e.name === activeModuleExampleKey)
      : null;

  const screenMappings = {
    [Screens.COMPONENTS]: {
      title: 'Components',
      examples: examplesList.components,
    },
    [Screens.APIS]: {
      title: 'APIs',
      examples: examplesList.apis,
    },
    [Screens.BOOKMARKS]: {
      title: 'Bookmarks',
      examples: examplesList.bookmarks,
    },
  };

  const title = activeModuleTitle || (screen ? screenMappings[screen]?.title : 'Bookmarks');
  const activeExampleList =
    (screen ? screenMappings[screen]?.examples : examplesList.bookmarks) || examplesList.bookmarks;

  const showEmptyBookmark = screen === Screens.BOOKMARKS && examplesList.bookmarks.length === 0;
  return (
    <RNTesterThemeContext.Provider value={theme}>
      <RNTTitleBar
        title={title}
        theme={theme}
        onBack={activeModule ? handleBackPress : undefined}
        documentationURL={activeModule?.documentationURL}
      />
      <View
        style={StyleSheet.compose(styles.container, {
          backgroundColor: theme.GroupedBackgroundColor,
        })}>
        {activeModule != null ? (
          <RNTesterModuleContainer
            module={activeModule}
            example={activeModuleExample}
            onExampleCardPress={handleModuleExampleCardPress}
          />
        ) : showEmptyBookmark ? (
          <RNTesterEmptyBookmarksState />
        ) : (
          <RNTesterModuleList
            sections={activeExampleList}
            toggleBookmark={toggleBookmark}
            handleModuleCardPress={handleModuleCardPress}
          />
        )}
      </View>
      <View style={styles.bottomNavbar}>
        <RNTesterNavBar
          screen={screen || Screens.COMPONENTS}
          isExamplePageOpen={!!activeModule}
          handleNavBarPress={handleNavBarPress}
        />
      </View>
    </RNTesterThemeContext.Provider>
  );
};

export default RNTesterApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomNavbar: {
    height: navBarHeight,
  },
  hidden: {
    display: 'none',
  },
});
