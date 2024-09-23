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
using namespace rnoh;

std::vector<std::shared_ptr<Package>> PackageProvider::getPackages(Package::Context ctx) {
    return {
        std::make_shared<SVGPackage>(ctx),
        std::make_shared<ProgressBarAndroidPackage>(ctx),
        std::make_shared<SliderPackage>(ctx),
        std::make_shared<RNImagePickerPackage>(ctx),
        std::make_shared<GeoLocationPackage>(ctx),
        std::make_shared<AsyncStoragePackage>(ctx),
        std::make_shared<ViewShotPackage>(ctx),
        std::make_shared<PermissionsPackage>(ctx),
        std::make_shared<BlurPackage>(ctx),
        std::make_shared<CookiesPackage>(ctx),
        std::make_shared<ToolbarAndroidPackage>(ctx),
        std::make_shared<CheckboxPackage>(ctx),
        std::make_shared<WebViewPackage>(ctx)

    };
}