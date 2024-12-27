#include "RNOH/PackageProvider.h"
#include "generated/RNOHGeneratedPackage.h"
#include "SVGPackage.h"
#include "RealmPackage.h"
#include "RNBuglyPackage.h"
#include "SearchBarPackage.h"
#include "SafeAreaViewPackage.h"

using namespace rnoh;

std::vector<std::shared_ptr<Package>> PackageProvider::getPackages(
    Package::Context ctx) {
  return {
    std::make_shared<RNOHGeneratedPackage>(ctx),
    std::make_shared<SVGPackage>(ctx),
	std::make_shared<RealmPackage>(ctx),
	std::make_shared<RNBuglyPackage>(ctx),
	std::make_shared<SearchBarPackage>(ctx),
    std::make_shared<SafeAreaViewPackage>(ctx),
  };
} 