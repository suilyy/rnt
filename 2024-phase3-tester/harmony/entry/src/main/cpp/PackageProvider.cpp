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
    std::make_shared<RNQuickBase64Package>(ctx)
  };
} 