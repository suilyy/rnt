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
import { RNCVideo, RNC_VIDEO_TYPE } from "@react-native-oh-tpl/react-native-video";
import { createRNPackages } from '../RNPackagesFactory';
import { LottieAnimationView, LOTTIE_TYPE } from "@react-native-oh-tpl/lottie-react-native"
import {
  A_MAP_CIRCLE_VIEW_TYPE,
  A_MAP_MARKER_TYPE,
  A_MAP_POLYGON_TYPE,
  A_MAP_POLYLINE_TYPE,
  AMapCircle,
  AMapMarker,
  AMapPolygon,
  AMapPolyline,
  AMapView,
  GOADE_MAP_VIEW_TYPE
  } from '@react-native-oh-tpl/react-native-amap3d';
import {
  BAIDU_MAP_OVERLAY_CIRCLE_TYPE,
  BAIDU_MAP_OVERLAY_MARKER_TYPE,
  BAIDU_MAP_OVERLAY_POLYGON_TYPE,
  BAIDU_MAP_OVERLAY_POLYLINE_TYPE,
  BAIDU_MAP_OVERLAY_TEXT_TYPE,
  BAIDU_MAP_VIEW_TYPE,
  BaiduMapOverlayCircle,
  BaiduMapOverlayPolygon,
  BaiduMapOverlayPolyline,
  BaiduMapOverlayText,
  BaiduMapOverlayMarker,
  BaiduMapView
  } from '@react-native-oh-tpl/react-native-baidu-map';

const arkTsComponentNames: Array<string> = [
  "SampleView",
  "GeneratedSampleView",
  "PropsDisplayer",
  "LottieAnimationView",
  RNC_VIDEO_TYPE,
  LOTTIE_TYPE,
  A_MAP_CIRCLE_VIEW_TYPE,
  A_MAP_MARKER_TYPE,
  A_MAP_POLYGON_TYPE,
  A_MAP_POLYLINE_TYPE,
  GOADE_MAP_VIEW_TYPE,
  BAIDU_MAP_VIEW_TYPE,
  BAIDU_MAP_OVERLAY_CIRCLE_TYPE,
  BAIDU_MAP_OVERLAY_MARKER_TYPE,
  BAIDU_MAP_OVERLAY_POLYGON_TYPE,
  BAIDU_MAP_OVERLAY_POLYLINE_TYPE,
  BAIDU_MAP_OVERLAY_TEXT_TYPE
];

@Builder
export function buildCustomRNComponent(ctx: ComponentBuilderContext) {
  // There seems to be a problem with the placement of ArkTS components in mixed mode. Nested Stack temporarily avoided.
  Stack() {
    if (ctx.componentName === RNC_VIDEO_TYPE) {
      RNCVideo({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag
      })
    }
    if (ctx.componentName === LOTTIE_TYPE) {
      LottieAnimationView({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag
      })
    }
    if (ctx.componentName === GOADE_MAP_VIEW_TYPE) {
      AMapView({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag,
      })
    }
    if (ctx.componentName === A_MAP_CIRCLE_VIEW_TYPE) {
      AMapCircle({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag,
      })
    }
    if (ctx.componentName === A_MAP_MARKER_TYPE) {
      AMapMarker({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag,
      })
    }
    if (ctx.componentName === A_MAP_POLYGON_TYPE) {
      AMapPolygon({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag,
      })
    }
    if (ctx.componentName === A_MAP_POLYLINE_TYPE) {
      AMapPolyline({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag,
      })
    }
    if (ctx.componentName === BAIDU_MAP_VIEW_TYPE) {
            BaiduMapView({
                ctx: ctx.rnComponentContext,
                tag: ctx.tag
                })
            }
        if (ctx.componentName === BAIDU_MAP_OVERLAY_CIRCLE_TYPE) {
            BaiduMapOverlayCircle({
                ctx: ctx.rnComponentContext,
                tag: ctx.tag
                })
            }
        if (ctx.componentName === BAIDU_MAP_OVERLAY_MARKER_TYPE) {
            BaiduMapOverlayMarker({
                ctx: ctx.rnComponentContext,
                tag: ctx.tag
                })
            }
        if (ctx.componentName === BAIDU_MAP_OVERLAY_POLYGON_TYPE) {
            BaiduMapOverlayPolygon({
                ctx: ctx.rnComponentContext,
                tag: ctx.tag
                })
            }
        if (ctx.componentName === BAIDU_MAP_OVERLAY_POLYLINE_TYPE) {
            BaiduMapOverlayPolyline({
                ctx: ctx.rnComponentContext,
                tag: ctx.tag
                })
            }
        if (ctx.componentName === BAIDU_MAP_OVERLAY_TEXT_TYPE) {
            BaiduMapOverlayText({
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