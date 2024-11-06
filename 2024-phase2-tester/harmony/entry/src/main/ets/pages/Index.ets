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
import { SpinKitView } from "@react-native-oh-tpl/react-native-spinkit";
import { SVG_VIEW_TYPE_NAME, SVGView } from "@react-native-oh-tpl/svg"
import { createRNPackages } from '../RNPackagesFactory';
import { RTNCameraKitView } from "@react-native-oh-tpl/react-native-camera-kit";
import { SignatureCaptureArkView } from '@react-native-oh-tpl/react-native-signature-capture';
import { RNPDFView } from '@react-native-oh-tpl/react-native-view-pdf'
import {
  BarCharts,
  LineCharts,
  HorizontalBarCharts,
  BubbleCharts,
  PieCharts,
  RadarCharts,
  ScatterCharts,
  CandleStickCharts,
  CombinedCharts
} from "@react-native-oh-tpl/react-native-charts-wrapper"
import { abilityAccessCtrl, bundleManager, common, Permissions } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { RNCPicker, PICKER_TYPE } from "@react-native-oh-tpl/picker"
import { RNCSkiaDomView, SKIA_DOM_VIEW_TYPE } from '@react-native-oh-tpl/react-native-skia';
import { RNDateTimePicker, DATETIME_PICKER_VIEW_TYPE } from "@react-native-oh-tpl/datetimepicker";
import {  BlurView, BLUR_TYPE } from "@react-native-oh-tpl/blur";
import { HighlighterView } from "@react-native-oh-tpl/react-native-ui-lib";

const permissions: Array<Permissions> = [
  'ohos.permission.ACCESS_BLUETOOTH',
  'ohos.permission.APPROXIMATELY_LOCATION',
  'ohos.permission.LOCATION'
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

const arkTsComponentNames: Array<string> = [
  "SampleView",
  "GeneratedSampleView",
  "PropsDisplayer",
  SpinKitView.NAME,
  SVG_VIEW_TYPE_NAME,
  RTNCameraKitView.NAME,
  BarCharts.NAME,
  LineCharts.NAME,
  HorizontalBarCharts.NAME,
  BubbleCharts.NAME,
  PieCharts.NAME,
  RadarCharts.NAME,
  ScatterCharts.NAME,
  CandleStickCharts.NAME,
  CombinedCharts.NAME,
  SignatureCaptureArkView.NAME,
  RNPDFView.NAME,
  PICKER_TYPE,
  SKIA_DOM_VIEW_TYPE,
  DATETIME_PICKER_VIEW_TYPE,
  BLUR_TYPE,
  HighlighterView.NAME,
];

@Builder
export function buildCustomRNComponent(ctx: ComponentBuilderContext) {
  // There seems to be a problem with the placement of ArkTS components in mixed mode. Nested Stack temporarily avoided.
  Stack() {
    if (ctx.componentName === SVG_VIEW_TYPE_NAME) {
      SVGView({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag
      })
    }
    if (ctx.componentName === RTNCameraKitView.NAME) {
      RTNCameraKitView({
       ctx: ctx.rnComponentContext,
       tag: ctx.tag,
      })
    }
    if (ctx.componentName === SpinKitView.NAME) {
      SpinKitView({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag
      })
    }
    if (ctx.componentName === BarCharts.NAME) {
      BarCharts({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag
      })
    }
    if (ctx.componentName === LineCharts.NAME) {
      LineCharts({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag
      })
    }
    if (ctx.componentName === HorizontalBarCharts.NAME) {
      HorizontalBarCharts({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag
      })
    }
    if (ctx.componentName === BubbleCharts.NAME) {
      BubbleCharts({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag
      })
    }
    if (ctx.componentName === PieCharts.NAME) {
      PieCharts({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag
      })
    }
    if (ctx.componentName === RadarCharts.NAME) {
      RadarCharts({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag
      })
    }
    if (ctx.componentName === ScatterCharts.NAME) {
      ScatterCharts({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag
      })
    }
    if (ctx.componentName === CandleStickCharts.NAME) {
      CandleStickCharts({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag
      })
    }
    if (ctx.componentName === CombinedCharts.NAME) {
      CombinedCharts({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag
      })
    }
	if (ctx.componentName === SignatureCaptureArkView.NAME) {
      SignatureCaptureArkView({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag
      })
    }
	if (ctx.componentName === RNPDFView.NAME) {
      RNPDFView({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag
      })
    }
	if (ctx.componentName === PICKER_TYPE) {
      RNCPicker({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag
      })
    }
	if (ctx.componentName === SKIA_DOM_VIEW_TYPE) {
      RNCSkiaDomView({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag
      })
    }
	if (ctx.componentName === DATETIME_PICKER_VIEW_TYPE) {
      RNDateTimePicker({
        ctx: ctx.rnComponentContext,
        tag: ctx.tag,
      })
    }
	if (ctx.componentName === BLUR_TYPE) {
      BlurView({
        ctx: ctx.rnohContext,
        tag: ctx.tag,
      })
    }
	if (ctx.componentName === HighlighterView.NAME) {
      HighlighterView({
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
  },
    {
    familyName: 'FontAwesome',
    familySrc: '/assets/fonts/FontAwesome.ttf'
  },
  {
    familyName: 'FontAwesome5_Brands',
    familySrc: '/assets/fonts/FontAwesome5_Brands.ttf'
  },
  {
    familyName: 'FontAwesome5_Regular',
    familySrc: '/assets/fonts/FontAwesome5_Regular.ttf'
  },
  {
    familyName: 'FontAwesome5_Solid',
    familySrc: '/assets/fonts/FontAwesome5_Solid.ttf'
  },
  {
    familyName: 'Material Icons',
    familySrc: $rawfile('assets/assets/fonts/MaterialIcons.ttf')
  },
  {
    familyName: 'Entypo',
    familySrc: $rawfile('assets/assets/fonts/Entypo.ttf')
  },
  {
    familyName: 'EvilIcons',
    familySrc: $rawfile('assets/assets/fonts/EvilIcons.ttf')
  },
  {
    familyName: 'Feather',
    familySrc: $rawfile('assets/assets/fonts/Feather.ttf')
  },
  {
    familyName: 'Foundation',
    familySrc: $rawfile('assets/assets/fonts/Foundation.ttf')
  },
  {
    familyName: 'Ionicons',
    familySrc: $rawfile('assets/assets/fonts/Ionicons.ttf')
  },
  {
    familyName: 'Foundation',
    familySrc: $rawfile('assets/assets/fonts/Foundation.ttf')
  },
  {
    familyName: 'MaterialCommunityIcons',
    familySrc: $rawfile('assets/assets/fonts/MaterialCommunityIcons.ttf')
  },
  {
    familyName: 'Octicons',
    familySrc: $rawfile('assets/assets/fonts/Octicons.ttf')
  },
  {
    familyName: 'SimpleLineIcons',
    familySrc: $rawfile('assets/assets/fonts/SimpleLineIcons.ttf')
  },
  {
    familyName: 'Octicons',
    familySrc: $rawfile('assets/assets/fonts/Octicons.ttf')
  },
  {
    familyName: 'Zocial',
    familySrc: $rawfile('assets/assets/fonts/Zocial.ttf')
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
              'FontAwesome': $rawfile('fonts/Pacifico-Regular.ttf'),
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