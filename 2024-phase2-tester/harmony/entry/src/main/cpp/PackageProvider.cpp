#include "RNOH/PackageProvider.h"
#include "generated/RNOHGeneratedPackage.h"
#include "SVGPackage.h"
#include "SafeAreaViewPackage.h"
#include "LinearGradientPackage.h"
#include "HoleViewPackage.h"
#include "GestureHandlerPackage.h"
#include "ReanimatedPackage.h"
#include "SafeAreaViewPackage.h"
#include "ViewPagerPackage.h"
#include "ContextMenuPackage.h"
#include "RNCNetInfoPackage.h"
#include "MaskedPackage.h"
#include "UnistylesPackage.h"
#include "BlurhashPackage.h"
using namespace rnoh;

std::vector<std::shared_ptr<Package>> PackageProvider::getPackages(
    Package::Context ctx) {
  return {
    std::make_shared<RNOHGeneratedPackage>(ctx),
    std::make_shared<SVGPackage>(ctx),
    std::make_shared<SafeAreaViewPackage>(ctx),
    std::make_shared<LinearGradientPackage>(ctx),
    std::make_shared<RNOHHoleViewPackage>(ctx),
    std::make_shared<GestureHandlerPackage>(ctx),
    std::make_shared<ReanimatedPackage>(ctx),
    std::make_shared<SafeAreaViewPackage>(ctx),
    std::make_shared<ViewPagerPackage>(ctx),
    std::make_shared<ContextMenuPackage>(ctx),   
    std::make_shared<RNCNetInfoPackage>(ctx),		
    std::make_shared<MaskedPackage>(ctx),
	std::make_shared<UnistylesPackage>(ctx),
	std::make_shared<BlurhashPackage>(ctx)
  };
} 