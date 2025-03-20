#include "RNOH/PackageProvider.h"
#include "generated/RNOHGeneratedPackage.h"
#include "RNWechatLibPackage.h"
#include "RNImagePickerPackage.h"
#include "RNCVideoPackage.h"

using namespace rnoh;

std::vector<std::shared_ptr<Package>> PackageProvider::getPackages(
    Package::Context ctx) {
  return {
    std::make_shared<RNOHGeneratedPackage>(ctx),
    std::make_shared<RNWechatLibPackage>(ctx),
	std::make_shared<RNImagePickerPackage>(ctx),
    std::make_shared<RNCVideoPackage>(ctx)
  };
} 