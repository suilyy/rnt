#include "RNOH/PackageProvider.h"
#include "SVGPackage.h"
#include "FastImagePackage.h"
#include "RNAudioRecorderPlayerPackage.h"
#include "VisionCameraPackage.h"
#include "generated/RNOHGeneratedPackage.h"
#include "RNKeysPackage.h"
#include "GestureHandlerPackage.h"
#include "ReanimatedPackage.h"
#include "RNQuickBase64Package.h"
#include "SafeAreaViewPackage.h"
#include "RNInCallManagerPackage.h"
#include "RNMlkitOcrPackage.h"
#include "LinearGradientPackage.h"
#include "AsyncStoragePackage.h"
using namespace rnoh;

std::vector<std::shared_ptr<Package>> PackageProvider::getPackages(
    Package::Context ctx) {
  return {
    std::make_shared<RNOHGeneratedPackage>(ctx),
    std::make_shared<SVGPackage>(ctx),
    std::make_shared<FastImagePackage>(ctx),
    std::make_shared<RNAudioRecorderPlayerPackage>(ctx),
    std::make_shared<VisionCameraPackage>(ctx), 
    std::make_shared<RNOHKeysPackage>(ctx),
    std::make_shared<GestureHandlerPackage>(ctx),
    std::make_shared<ReanimatedPackage>(ctx),
    std::make_shared<RNQuickBase64Package>(ctx),
    std::make_shared<SafeAreaViewPackage>(ctx),
    std::make_shared<RNInCallManagerPackage>(ctx),
    std::make_shared<RNMlkitOcrPackage>(ctx),
    std::make_shared<LinearGradientPackage>(ctx),
    std::make_shared<AsyncStoragePackage>(ctx)
  };
} 