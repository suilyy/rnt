import {
  AnyJSBundleProvider,
  ComponentBuilderContext,
  FileJSBundleProvider,
  MetroJSBundleProvider,
  ResourceJSBundleProvider,
  RNApp,
  RNOHErrorDialog,
  RNOHLogger,
  TraceJSBundleProviderDecorator,
  RNOHCoreContext
} from '@rnoh/react-native-openharmony';
import font from '@ohos.font';
import { createRNPackages } from '../RNPackagesFactory';
import { ProgressBarAndroid, PROGRESS_BAR_TYPE } from "@react-native-oh-tpl/progress-bar-android"
import { BlurView, BLUR_TYPE } from "@react-native-oh-tpl/blur"
import { RNCSlider, SLIDER_TYPE } from "@react-native-oh-tpl/slider"
import { WebView, WEB_VIEW } from "@react-native-oh-tpl/react-native-webview"
import {
  RNCToolbarAndroid,
  RNC_TOOLBAR_ANDROID_TYPE
} from '@react-native-oh-tpl/toolbar-android/src/main/ets/RNCToolbarAndroid'
import { RNCCheckbox, CHECKBOX_TYPE } from "@react-native-oh-tpl/checkbox"

const arkTsComponentNames: Array<string> = [
  "SampleView",
  "GeneratedSampleView",
  "PropsDisplayer",
  PROGRESS_BAR_TYPE,
  RNC_TOOLBAR_ANDROID_TYPE,
  BLUR_TYPE,
  SLIDER_TYPE,
  WEB_VIEW,
  CHECKBOX_TYPE
];

@Builder
export function buildCustomRNComponent(ctx: ComponentBuilderContext) {
  // There seems to be a problem with the placement of ArkTS components in mixed mode. Nested Stack temporarily avoided.
  Stack() {
    if (ctx.componentName === BLUR_TYPE) {
      BlurView({
        ctx: ctx.rnohContext,
        tag: ctx.tag,
      })
    }
    if (ctx.componentName === CHECKBOX_TYPE) {
      RNCCheckbox({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag,
      })
    }
    if (ctx.componentName === RNC_TOOLBAR_ANDROID_TYPE) {
      RNCToolbarAndroid({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag
      })
    }
    if (ctx.componentName === WEB_VIEW) {
      WebView({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag
      })
    }
    if (ctx.componentName === SLIDER_TYPE) {
      RNCSlider({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag,
      })
    }
    if (ctx.componentName === PROGRESS_BAR_TYPE) {
      ProgressBarAndroid({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag
      })
    }
  }
  .position({ x: 0, y: 0 })

}

const wrappedCustomRNComponentBuilder = wrapBuilder(buildCustomRNComponent)

/**
 * If you want to use custom fonts, you need to register them here.
 * We should support react-native-asset to handle registering fonts automatically.
 */
const fonts: font.FontOptions[] = [
  {
    familyName: 'Pacifico-Regular',
    familySrc: '/assets/fonts/Pacifico-Regular.ttf'
  },
  {
    familyName: 'StintUltraCondensed-Regular',
    familySrc: '/assets/fonts/StintUltraCondensed-Regular.ttf'
  }
]

@Entry
@Component
struct Index {
  @StorageLink('RNOHCoreContext') private rnohCoreContext: RNOHCoreContext | undefined = undefined
  @State shouldShow: boolean = false
  private logger!: RNOHLogger

  aboutToAppear() {
    this.logger = this.rnohCoreContext!.logger.clone("Index")
    const stopTracing = this.logger.clone("aboutToAppear").startTracing()
    for (const customFont of fonts) {
      font.registerFont(customFont)
    }

    this.shouldShow = true
    stopTracing()
  }

  onBackPress(): boolean | undefined {
    // NOTE: this is required since `Ability`'s `onBackPressed` function always
    // terminates or puts the app in the background, but we want Ark to ignore it completely
    // when handled by RN
    this.rnohCoreContext!.dispatchBackPress()
    return true
  }

  build() {
    Column() {
      if (this.rnohCoreContext && this.shouldShow) {
        if (this.rnohCoreContext?.isDebugModeEnabled) {
          RNOHErrorDialog({ ctx: this.rnohCoreContext })
        }
        RNApp({
          rnInstanceConfig: {
            createRNPackages,
            enableNDKTextMeasuring: true,
            enableBackgroundExecutor: false,
            enableCAPIArchitecture: true,
            arkTsComponentNames: arkTsComponentNames,
            fontResourceByFontFamily: {
              'anticon': $rawfile('fonts/AntDesign.ttf'),
              'Entypo': $rawfile('fonts/Entypo.ttf'),
              'EvilIcons': $rawfile('fonts/EvilIcons.ttf'),
              'Feather': $rawfile('fonts/Feather.ttf'),
              'FontAwesome': $rawfile('fonts/FontAwesome.ttf'),
              'FontAwesome5Brands-Regular': $rawfile('fonts/FontAwesome5_Brands.ttf'),
              'FontAwesome5Free-Regular': $rawfile('fonts/FontAwesome5_Regular.ttf'),
              'FontAwesome5Free-Solid': $rawfile('fonts/FontAwesome5_Solid.ttf'),
              'FontAwesome6Brands-Regular': $rawfile('fonts/FontAwesome6_Brands.ttf'),
              'FontAwesome6Free-Regular': $rawfile('fonts/FontAwesome6_Regular.ttf'),
              'FontAwesome6Free-Solid': $rawfile('fonts/FontAwesome6_Solid.ttf'),
              'Fontisto': $rawfile('fonts/Fontisto.ttf'),
              'fontcustom': $rawfile('fonts/Foundation.ttf'),
              'Ionicons': $rawfile('fonts/Ionicons.ttf'),
              'Material Design Icons': $rawfile('fonts/MaterialCommunityIcons.ttf'),
              'Material Icons': $rawfile('fonts/MaterialIcons.ttf'),
              'Octicons': $rawfile('fonts/Octicons.ttf'),
              'simple-line-icons': $rawfile('fonts/SimpleLineIcons.ttf'),
              'zocial': $rawfile('fonts/Zocial.ttf'),
              'home': $rawfile('fonts/home.ttf'),
              'pencil': $rawfile('fonts/pencil.ttf'),
              'fontello': $rawfile('fonts/fontello.ttf'),
            },
          },

          initialProps: { "foo": "bar" } as Record<string, string>,
          appKey: "app_name",
          wrappedCustomRNComponentBuilder: wrappedCustomRNComponentBuilder,
          onSetUp: (rnInstance) => {
            rnInstance.enableFeatureFlag("ENABLE_RN_INSTANCE_CLEAN_UP")
          },
          jsBundleProvider: new TraceJSBundleProviderDecorator(
            new AnyJSBundleProvider([
              new MetroJSBundleProvider(),
              // NOTE: to load the bundle from file, place it in
              // `/data/app/el2/100/base/com.rnoh.tester/files/bundle.harmony.js`
              // on your device. The path mismatch is due to app sandboxing on HarmonyOS
              new FileJSBundleProvider('/data/storage/el2/base/files/bundle.harmony.js'),
              new ResourceJSBundleProvider(this.rnohCoreContext.uiAbilityContext.resourceManager, 'hermes_bundle.hbc'),
              new ResourceJSBundleProvider(this.rnohCoreContext.uiAbilityContext.resourceManager, 'bundle.harmony.js')
            ]),
            this.rnohCoreContext.logger),
        })
      }
    }
    .height('100%')
    .width('100%')
  }
}