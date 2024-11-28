#include "RNOH/PackageProvider.h"
#include "SVGPackage.h"
#include "RNCVideoPackage.h"
#include "generated/RNOHGeneratedPackage.h"
#include "SafeAreaViewPackage.h"
#include "LinearGradientPackage.h"
#include "CardViewPackage.h"
#include "LottieAnimationViewPackage.h"
#include "SpringScrollViewPackage.h"
#include "ViewPagerPackage.h"
#include "LinearTextGradientPackage.h"
#include "MJRefreshPackage.h"
#include "SmartRefreshLayoutPackage.h"
#include "MaskedPackage.h"
#include "RNImagePickerPackage.h"
#include "ReactBindingXPackage.h"
#include "GestureHandlerPackage.h"
#include "FlashListPackage.h"
#include "ClipPathViewPackage.h"
#include "ColorMatrixImageFiltersPackage.h"
#include "MapViewPackage.h"
#include "BaiduMapPackage.h"
#include "AsyncStoragePackage.h"
#include "ReanimatedPackage.h"

using namespace rnoh;

std::vector<std::shared_ptr<Package>> PackageProvider::getPackages(
    Package::Context ctx) {
  return {
     std::make_shared<RNOHGeneratedPackage>(ctx),
     std::make_shared<SVGPackage>(ctx),
     std::make_shared<RNCVideoPackage>(ctx),
     std::make_shared<SafeAreaViewPackage>(ctx),
     std::make_shared<LinearGradientPackage>(ctx),
     std::make_shared<CardViewPackage>(ctx),
     std::make_shared<LottieAnimationViewPackage>(ctx),
     std::make_shared<SpringScrollViewPackage>(ctx),
     std::make_shared<ViewPagerPackage>(ctx),
     std::make_shared<LinearTextGradientPackage>(ctx),
     std::make_shared<MJRefreshPackage>(ctx),
     std::make_shared<SmartRefreshLayoutPackage>(ctx),
     std::make_shared<MaskedPackage>(ctx),
     std::make_shared<RNImagePickerPackage>(ctx),
     std::make_shared<ReactBindingXPackage>(ctx),
     std::make_shared<GestureHandlerPackage>(ctx),
     std::make_shared<FlashListPackage>(ctx),
     std::make_shared<ClipPathViewPackage>(ctx),
     std::make_shared<ColorMatrixImageFiltersPackage>(ctx),
     std::make_shared<MapViewPackage>(ctx),
     std::make_shared<BaiduMapPackage>(ctx),
     std::make_shared<AsyncStoragePackage>(ctx),
     std::make_shared<ReanimatedPackage>(ctx)
  };
} 