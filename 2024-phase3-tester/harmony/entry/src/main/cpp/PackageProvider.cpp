#include "RNOH/PackageProvider.h"
#include "SVGPackage.h"
#include "FastImagePackage.h"
#include "RNAudioRecorderPlayerPackage.h"
#include "VisionCameraPackage.h"

using namespace rnoh;

std::vector<std::shared_ptr<Package>> PackageProvider::getPackages(
    Package::Context ctx) {
  return {
    std::make_shared<SVGPackage>(ctx),
    std::make_shared<FastImagePackage>(ctx),
    std::make_shared<RNAudioRecorderPlayerPackage>(ctx),
    std::make_shared<VisionCameraPackage>(ctx),
  };
} 