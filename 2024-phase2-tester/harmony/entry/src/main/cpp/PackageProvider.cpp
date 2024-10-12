#include "RNOH/PackageProvider.h"
#include "SVGPackage.h"
#include "SafeAreaViewPackage.h"
#include "LinearGradientPackage.h"
using namespace rnoh;

std::vector<std::shared_ptr<Package>> PackageProvider::getPackages(
    Package::Context ctx) {
  return {
    std::make_shared<SVGPackage>(ctx),
    std::make_shared<SafeAreaViewPackage>(ctx),
    std::make_shared<LinearGradientPackage>(ctx),
  };
} 