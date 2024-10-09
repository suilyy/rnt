project(rnapp)
cmake_minimum_required(VERSION 3.4.1)
set(OH_MODULES_DIR "${CMAKE_CURRENT_SOURCE_DIR}/../../../oh_modules")
set(OH_MODULES "${CMAKE_CURRENT_SOURCE_DIR}/../../../oh_modules")
set(RNOH_APP_DIR "${CMAKE_CURRENT_SOURCE_DIR}")
set(RNOH_CPP_DIR "${CMAKE_CURRENT_SOURCE_DIR}/../../../../oh_modules/@rnoh/react-native-openharmony/src/main/cpp")
set(WITH_HITRACE_SYSTRACE 1)
add_compile_definitions(WITH_HITRACE_SYSTRACE)

add_subdirectory("${RNOH_CPP_DIR}" ./rn)

# RNOH_BEGIN: manual_package_linking_1
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/progress-bar-android/src/main/cpp" ./progress-bar-android)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/slider/src/main/cpp" ./slider)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-view-shot/src/main/cpp" ./view-shot)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/async-storage/src/main/cpp" ./async-storage)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-permissions/src/main/cpp" ./permissions)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-fs/src/main/cpp" ./fs)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-image-picker/src/main/cpp" ./image_picker)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/geolocation/src/main/cpp" ./geolocation)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/blur/src/main/cpp" ./blur)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/toolbar-android/src/main/cpp" ./toolbar-android)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/cookies/src/main/cpp" ./rn_cookies)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-svg/src/main/cpp" ./svg)
 add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-video/src/main/cpp" ./video)
 add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-webview/src/main/cpp" ./webview)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/checkbox/src/main/cpp" ./checkbox)
# RNOH_END: manual_package_linking_1


file(GLOB GENERATED_CPP_FILES "./generated/*.cpp")

add_library(rnoh_app SHARED
    ${GENERATED_CPP_FILES}
    "./PackageProvider.cpp"
    "${RNOH_CPP_DIR}/RNOHAppNapiBridge.cpp"
)

target_link_libraries(rnoh_app PUBLIC rnoh)

# RNOH_BEGIN: manual_package_linking_2
target_link_libraries(rnoh_app PUBLIC rnoh_svg)
target_link_libraries(rnoh_app PUBLIC rnoh_image_picker)
target_link_libraries(rnoh_app PUBLIC rnoh_blur)
target_link_libraries(rnoh_app PUBLIC rnoh_view_shot)
target_link_libraries(rnoh_app PUBLIC rnoh_video)
target_link_libraries(rnoh_app PUBLIC rnoh_permissions)
target_link_libraries(rnoh_app PUBLIC rnoh_cookies)
target_link_libraries(rnoh_app PUBLIC rnoh_checkbox)
target_link_libraries(rnoh_app PUBLIC rnoh_slider)
target_link_libraries(rnoh_app PUBLIC rnoh_webview)
target_link_libraries(rnoh_app PUBLIC rnoh_async_storage)
target_link_libraries(rnoh_app PUBLIC rnoh_toolbar_android)
target_link_libraries(rnoh_app PUBLIC rnoh_fs)
target_link_libraries(rnoh_app PUBLIC rnoh_geolocation)
target_link_libraries(rnoh_app PUBLIC rnoh_progress_bar_android)
# RNOH_END: link_packages
