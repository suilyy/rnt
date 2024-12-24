#include "RNOH/PackageProvider.h"
#include "generated/RNOHGeneratedPackage.h"
#include "SVGPackage.h"
#include "RNImagePickerPackage.h"
#include "RNCVideoPackage.h"
#include "GestureHandlerPackage.h"
#include "ReanimatedPackage.h"
#include "SkiaPackage.h"
#include "CustomKeyboardPackage.h"
#include "PermissionsPackage.h"

using namespace rnoh;

std::vector<std::shared_ptr<Package>> PackageProvider::getPackages(
    Package::Context ctx) {
  return {
        std::make_shared<RNOHGeneratedPackage>(ctx),
        std::make_shared<SVGPackage>(ctx),
        std::make_shared<RNImagePickerPackage>(ctx),
        std::make_shared<RNCVideoPackage>(ctx),
        std::make_shared<GestureHandlerPackage>(ctx),
        std::make_shared<ReanimatedPackage>(ctx),
        std::make_shared<SkiaPackage>(ctx),
        std::make_shared<CustomKeyboardPackage>(ctx),
        std::make_shared<PermissionsPackage>(ctx)
  };
} 