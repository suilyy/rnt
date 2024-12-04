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
// import { SVG_VIEW_TYPE_NAME, SVGView } from "@react-native-oh-tpl/svg"
import { createRNPackages } from '../RNPackagesFactory';
import { WebView, WEB_VIEW } from "@react-native-oh-tpl/react-native-webview";
import { VisionCameraView } from "@react-native-oh-tpl/react-native-vision-camera";
import { abilityAccessCtrl, Permissions, bundleManager, common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import {
  AIRMap,
  AIR_MAP_TYPE,
  AIRMapMarker,
  AIR_MAP_MARKER_TYPE,
  AIRMapPolyline,
  AIR_MAP_POLYLINE_TYPE,
  AIRMapPolygon,
  AIR_MAP_POLYGON_TYPE,
  AIRMapCircle,
  AIR_MAP_CIRCLE_TYPE,
  AIR_MAP_CALLOUT_SUBVIEW_TYPE,
  AIR_MAP_CALLOUT_TYPE,
  AIRMapCallout,
  AIRMapCalloutSubview,
  Geojson,
  AIR_GEOJSON_TYPE,
  AIRMapUrlTile,
  AIR_URLTILE_TYPE,
  AIRMapWMSTile,
  AIR_WMSTILE_TYPE,
  AIR_OVERLAY_TYPE,
  AIRMapOverlay,
  AIR_MAP_CLUSTER_TYPE,
  AIRMapCluster,
} from "@react-native-oh-tpl/react-native-maps"
import { IMAGE_CAP_INSETS, RNCImageCapInsets } from "@react-native-oh-tpl/react-native-image-capinsets-next"
import { RNCVideo, RNC_VIDEO_TYPE } from "@react-native-oh-tpl/react-native-video"
import { RNCSkiaDomView, SKIA_DOM_VIEW_TYPE } from '@react-native-oh-tpl/react-native-skia';

const arkTsComponentNames: Array<string> = [
  "SampleView",
  "GeneratedSampleView",
  "PropsDisplayer",
  // SVG_VIEW_TYPE_NAME,
  WEB_VIEW,
  VisionCameraView.NAME,
  AIR_MAP_TYPE,
  AIR_MAP_MARKER_TYPE,
  AIR_MAP_POLYLINE_TYPE,
  AIR_MAP_POLYGON_TYPE,
  AIR_MAP_CIRCLE_TYPE,
  AIR_MAP_CALLOUT_TYPE,
  AIR_GEOJSON_TYPE,
  AIR_URLTILE_TYPE,
  AIR_WMSTILE_TYPE,
  AIR_OVERLAY_TYPE,
  AIR_MAP_CLUSTER_TYPE,
  IMAGE_CAP_INSETS,
  RNC_VIDEO_TYPE,
  SKIA_DOM_VIEW_TYPE
];

// 使用UIExtensionAbility：将common.UIAbilityContext 替换为common.UIExtensionContext
function reqPermissionsFromUser(permissions: Array<Permissions>, context: common.UIAbilityContext): void {
  let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
  // requestPermissionsFromUser会判断权限的授权状态来决定是否唤起弹窗
  atManager.requestPermissionsFromUser(context, permissions).then((data) => {
    let grantStatus: Array<number> = data.authResults;
    let length: number = grantStatus.length;
    for (let i = 0; i < length; i++) {
      if (grantStatus[i] === 0) {
        // 用户授权，可以继续访问目标操作
      } else {
        // 用户拒绝授权，提示用户必须授权才能访问当前页面的功能，并引导用户到系统设置中打开相应的权限
        return;
      }
    }
    // 授权成功
  }).catch((err: BusinessError) => {
    console.error(`Failed to request permissions from user. Code is ${err.code}, message is ${err.message}`);
  })
}

async function checkAccessToken(permission: Permissions): Promise<abilityAccessCtrl.GrantStatus> {
  let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
  let grantStatus: abilityAccessCtrl.GrantStatus = abilityAccessCtrl.GrantStatus.PERMISSION_DENIED;

  // 获取应用程序的accessTokenID
  let tokenId: number = 0;
  try {
    let bundleInfo: bundleManager.BundleInfo =
      await bundleManager.getBundleInfoForSelf(bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_APPLICATION);
    let appInfo: bundleManager.ApplicationInfo = bundleInfo.appInfo;
    tokenId = appInfo.accessTokenId;
  } catch (error) {
    const err: BusinessError = error as BusinessError;
    console.error(`Failed to get bundle info for self. Code is ${err.code}, message is ${err.message}`);
  }

  // 校验应用是否被授予权限
  try {
    grantStatus = await atManager.checkAccessToken(tokenId, permission);
  } catch (error) {
    const err: BusinessError = error as BusinessError;
    console.error(`Failed to check access token. Code is ${err.code}, message is ${err.message}`);
  }

  return grantStatus;
}

const permissions: Array<Permissions> = [
  'ohos.permission.ACCESS_BLUETOOTH',
  'ohos.permission.APPROXIMATELY_LOCATION',
  'ohos.permission.LOCATION',
];


@Builder
export function buildCustomRNComponent(ctx: ComponentBuilderContext) {
  // There seems to be a problem with the placement of ArkTS components in mixed mode. Nested Stack temporarily avoided.
  Stack() {
    // if (ctx.componentName === SVG_VIEW_TYPE_NAME) {
    //   SVGView({
    //     ctx: ctx.rnComponentContext,
    //     tag: ctx.tag
    //   })
    // },
    if (ctx.componentName === WEB_VIEW) {
      WebView({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag
      })
    }
    if (ctx.componentName === VisionCameraView.NAME) {
      VisionCameraView({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag,
      })
    }
    if (ctx.componentName === AIR_MAP_TYPE) {
      AIRMap({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag,
      })
    } else if (ctx.componentName === AIR_MAP_MARKER_TYPE) {
      AIRMapMarker({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag,
      })
    } else if (ctx.componentName === AIR_MAP_POLYLINE_TYPE) {
      AIRMapPolyline({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag,
      })
    } else if (ctx.componentName === AIR_MAP_POLYGON_TYPE) {
      AIRMapPolygon({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag,
      })
    } else if (ctx.componentName === AIR_MAP_CIRCLE_TYPE) {
      AIRMapCircle({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag,
      })
    } else if (ctx.componentName === AIR_MAP_CALLOUT_TYPE) {
      AIRMapCallout({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag,
      })
    } else if (ctx.componentName === AIR_MAP_CALLOUT_SUBVIEW_TYPE) {
      AIRMapCalloutSubview({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag,
      })
    } else if (ctx.componentName === AIR_MAP_CALLOUT_SUBVIEW_TYPE) {
      AIRMapCalloutSubview({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag,
      })
    } else if (ctx.componentName === AIR_GEOJSON_TYPE) {
      Geojson({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag,
      })
    } else if (ctx.componentName === AIR_URLTILE_TYPE) {
      AIRMapUrlTile({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag,
      })
    } else if (ctx.componentName === AIR_WMSTILE_TYPE) {
      AIRMapWMSTile({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag,
      })
    } else if (ctx.componentName === AIR_OVERLAY_TYPE) {
      AIRMapOverlay({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag,
      })
    } else if (ctx.componentName === AIR_MAP_CLUSTER_TYPE) {
      AIRMapCluster({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag,
      })
    }
    if (ctx.componentName === IMAGE_CAP_INSETS) {
      RNCImageCapInsets({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag,
      })
    }
    if (ctx.componentName === RNC_VIDEO_TYPE) {
      RNCVideo({
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

  async aboutToAppear() {
    this.logger = this.rnohCoreContext!.logger.clone("Index")
    const stopTracing = this.logger.clone("aboutToAppear").startTracing()
    for (const customFont of fonts) {
      font.registerFont(customFont)
    }

    this.shouldShow = true
    stopTracing()
    const context: common.UIAbilityContext = getContext(this) as common.UIAbilityContext;
    let grantStatus1: abilityAccessCtrl.GrantStatus = await checkAccessToken(permissions[0]);
    let grantStatus2: abilityAccessCtrl.GrantStatus = await checkAccessToken(permissions[1]);
    let grantStatus3: abilityAccessCtrl.GrantStatus = await checkAccessToken(permissions[2]);
    if (grantStatus1 === abilityAccessCtrl.GrantStatus.PERMISSION_GRANTED &&
      grantStatus2 === abilityAccessCtrl.GrantStatus.PERMISSION_GRANTED &&
      grantStatus3 === abilityAccessCtrl.GrantStatus.PERMISSION_GRANTED
    ) {
      // 已经授权，可以继续访问目标操作
    } else {
      // 申请权限
      reqPermissionsFromUser(permissions, context);
    }
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
              'Pacifico-Regular': $rawfile("fonts/Pacifico-Regular.ttf"),
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
            }
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