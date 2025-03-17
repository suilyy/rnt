#include "RNOH/PackageProvider.h"
#include "SVGPackage.h"
#include "generated/RNOHGeneratedPackage.h"
#include "SafeAreaViewPackage.h"
#include "LinearGradientPackage.h"
#include "DocumentPickerPackage.h"

using namespace rnoh;

std::vector<std::shared_ptr<Package>> PackageProvider::getPackages(
    Package::Context ctx) {
  return {
    std::make_shared<RNOHGeneratedPackage>(ctx),
    std::make_shared<SVGPackage>(ctx),
    std::make_shared<SafeAreaViewPackage>(ctx),
    std::make_shared<LinearGradientPackage>(ctx),
    std::make_shared<DocumentPickerPackage>(ctx),
  };
} 