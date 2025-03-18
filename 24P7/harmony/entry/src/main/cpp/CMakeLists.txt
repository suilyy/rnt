project(rnapp)
cmake_minimum_required(VERSION 3.4.1)
set(CMAKE_CXX_STANDARD 17)
set(OH_MODULES_DIR "${CMAKE_CURRENT_SOURCE_DIR}/../../../oh_modules")
set(NODE_MODULES "${CMAKE_CURRENT_SOURCE_DIR}/../../../../../node_modules")
set(OH_MODULES "${CMAKE_CURRENT_SOURCE_DIR}/../../../oh_modules")
set(RNOH_APP_DIR "${CMAKE_CURRENT_SOURCE_DIR}")
set(RNOH_CPP_DIR "${CMAKE_CURRENT_SOURCE_DIR}/../../../../oh_modules/@rnoh/react-native-openharmony/src/main/cpp")
set(WITH_HITRACE_SYSTRACE 1)
add_compile_definitions(WITH_HITRACE_SYSTRACE)

add_subdirectory("${RNOH_CPP_DIR}" ./rn)


# RNOH_BEGIN: manual_package_linking_1
add_subdirectory("${OH_MODULES}/@react-native-ohos/react-native-wechat-lib/src/main/cpp" ./wechat-lib)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-image-picker/src/main/cpp" ./image_picker)
# RNOH_END: manual_package_linking_1

file(GLOB GENERATED_CPP_FILES "./generated/*.cpp")

add_library(rnoh_app SHARED
    ${GENERATED_CPP_FILES}
    "./PackageProvider.cpp"
    "${RNOH_CPP_DIR}/RNOHAppNapiBridge.cpp"
)

target_link_libraries(rnoh_app PUBLIC rnoh)

# RNOH_BEGIN: manual_package_linking_2
target_link_libraries(rnoh_app PUBLIC wechat_lib)
target_link_libraries(rnoh_app PUBLIC rnoh_image_picker)
# RNOH_END: link_packages
