import ForegroundExtrapolate from './Pages/ForegroundExtrapolate';
import FadeOutForeground from './Pages/FadeOutForeground';
import MaxHeight from './Pages/MinHeight';
import MinHeight from './Pages/MinHeight';
import FixedForegroundContainerStyles from './Pages/FixedForegroundContainerStyles';
import RenderHeader from './Pages/RenderHeader';
import OverlayColor from './Pages/OverlayColor';
import RenderFixedForeground from './Pages/RenderFixedForeground';
import ScrollViewBackgroundColor from './Pages/ScrollViewBackgroundColor';
import RenderForeground from './Pages/RenderForeground';
import ForegroundParallaxRatio from './Pages/ForegroundParallaxRatio';
import UseNativeDriver from './Pages/UseNativeDriver';
import DisableHeaderGrow from './Pages/DisableHeaderGrow';
import ScrollViewComponent from './Pages/ScrollViewComponent';
import RenderTouchableFixedForeground from './Pages/RenderTouchableFixedForeground';
import TriggeringViewOnHideAndOnDisplay from './Pages/TriggeringViewOnHideAndOnDisplay';
import TriggeringViewOnBeginHiddenAndOnBeginDisplayed from './Pages/TriggeringViewOnBeginHiddenAndOnBeginDisplayed';
import TriggeringViewOnTouchTopAndOnTouchBottom from './Pages/TriggeringViewOnTouchTopAndOnTouchBottom';
import TriggeringViewBottomOffsetAndTopOffset from './Pages/TriggeringViewBottomOffsetAndTopOffset';

function App() {
  return (
    <NavigationContainer >
    <Page name="ImageHeaderScrollView">
      <ImageHeaderScrollView />
    </Page>
    <Page name="HeaderContainerStyle">
      <HeaderContainerStyle />
    </Page>
    <Page name="MaxOverlayOpacity">
      <MaxOverlayOpacity />
    </Page>
    <Page name="MinOverlayOpacity">
      <MinOverlayOpacity />
    </Page>
    <Page name="FadeOutForeground">
      <FadeOutForeground />
    </Page>
    <Page name="OverlayColor">
      <OverlayColor />
    </Page>
    <Page name="ForegroundExtrapolate">
      <ForegroundExtrapolate />
    </Page>
    <Page name="ForegroundParallaxRatio">
      <ForegroundParallaxRatio />
    </Page>
    <Page name="FixedForegroundContainerStyles">
      <FixedForegroundContainerStyles />
    </Page>
    <Page name="RenderHeader">
      <RenderHeader />
    </Page>
    <Page name="MaxHeight">
      <MaxHeight />
    </Page>
    <Page name="MinHeight">
      <MinHeight />
    </Page>
    <Page name="RenderFixedForeground">
      <RenderFixedForeground />
    </Page>
    <Page name="RenderForeground">
      <RenderForeground />
    </Page>
    <Page name="ScrollViewBackgroundColor">
      <ScrollViewBackgroundColor />
    </Page>
    <Page name="ScrollViewComponent">
      <ScrollViewComponent />
    </Page>
    <Page name="UseNativeDriver">
      <UseNativeDriver />
    </Page>
    <Page name="DisableHeaderGrow">
      <DisableHeaderGrow />
    </Page>
    <Page name="RenderTouchableFixedForeground">
      <RenderTouchableFixedForeground />
    </Page>
    <Page name="TriggeringViewOnHideAndOnDisplay">
      <TriggeringViewOnHideAndOnDisplay />
    </Page>
    <Page name="TriggeringViewOnBeginHiddenAndOnBeginDisplayed">
      <TriggeringViewOnBeginHiddenAndOnBeginDisplayed />
    </Page>
    <Page name="TriggeringViewOnTouchTopAndOnTouchBottom">
      <TriggeringViewOnTouchTopAndOnTouchBottom />
    </Page>
    <Page name="TriggeringViewBottomOffsetAndTopOffset">
      <TriggeringViewBottomOffsetAndTopOffset />
    </Page>
  </NavigationContainer>
  );
}

export const displayName = 'React Native image header scroll view';
export const framework = 'React';
export const category = 'UI';
export const title = 'React Native image header scroll view';
export const documentationURL = 'https://github.com/bamlab/react-native-image-header-scroll-view';
export const description = 'React Native image header scroll view';

export const examples = [
  {
    title: 'React Native image header scroll view',
    render: function (): any {
      return <App />;
    },
  },
];
