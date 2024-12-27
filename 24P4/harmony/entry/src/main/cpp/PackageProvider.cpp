#include "RNOH/PackageProvider.h"
#include "SVGPackage.h"
#include "ProgressBarAndroidPackage.h"
#include "SliderPackage.h"
#include "RNImagePickerPackage.h"
#include "GeoLocationPackage.h"
#include "ViewShotPackage.h"
#include "CookiesPackage.h"
#include "AsyncStoragePackage.h"
#include "BlurPackage.h"
#include "PermissionsPackage.h"
#include "ToolbarAndroidPackage.h"
#include "CheckboxPackage.h"
#include "WebViewPackage.h"
#include "RNCVideoPackage.h"
#include "generated/RNOHGeneratedPackage.h"
#include "ReanimatedPackage.h"
#include "PdfViewPackage.h"
#include "SoundPackage.h"
#include "RNTextSizePackage.h"
#include "PushNotificationPackage.h"
#include "ViewPagerPackage.h"
#include "ClipboardPackage.h"   
#include "DateTimePickerPackage.h"
#include "LottieAnimationViewPackage.h"
#include "ProgressViewPackage.h"
#include "RNCNetInfoPackage.h"
#include "PickerPackage.h"
#include "SafeAreaViewPackage.h"
#include "ExceptionHandlerPackage.h"
#include "GestureHandlerPackage.h"

using namespace rnoh;

std::vector<std::shared_ptr<Package>> PackageProvider::getPackages(Package::Context ctx) {
    return {
        std::make_shared<RNOHGeneratedPackage>(ctx),
        std::make_shared<SVGPackage>(ctx),
        std::make_shared<ProgressBarAndroidPackage>(ctx),
        std::make_shared<SliderPackage>(ctx),
        std::make_shared<RNImagePickerPackage>(ctx),
        std::make_shared<PickerPackage>(ctx),
        std::make_shared<GeoLocationPackage>(ctx),
        std::make_shared<AsyncStoragePackage>(ctx),
        std::make_shared<ViewShotPackage>(ctx),
        std::make_shared<RNCVideoPackage>(ctx),
        std::make_shared<PermissionsPackage>(ctx),
        std::make_shared<RNCNetInfoPackage>(ctx),
        std::make_shared<LottieAnimationViewPackage>(ctx),
        std::make_shared<ViewPagerPackage>(ctx),
        std::make_shared<BlurPackage>(ctx),
        std::make_shared<DateTimePickerPackage>(ctx),
        std::make_shared<CookiesPackage>(ctx),
        std::make_shared<ClipboardPackage>(ctx),
        std::make_shared<ToolbarAndroidPackage>(ctx),
        std::make_shared<CheckboxPackage>(ctx),
        std::make_shared<WebViewPackage>(ctx),
        std::make_shared<ReanimatedPackage>(ctx),
        std::make_shared<SafeAreaViewPackage>(ctx),
        std::make_shared<PdfViewPackage>(ctx),
        std::make_shared<ProgressViewPackage>(ctx),
        std::make_shared<SoundPackage>(ctx),
        std::make_shared<RNTextSizePackage>(ctx),
        std::make_shared<PushNotificationPackage>(ctx),
        std::make_shared<ExceptionHandlerPackage>(ctx),
        std::make_shared<GestureHandlerPackage>(ctx),
        
    };
}