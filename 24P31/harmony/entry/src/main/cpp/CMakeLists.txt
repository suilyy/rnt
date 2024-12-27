project(rnapp)
cmake_minimum_required(VERSION 3.4.1)
set(OH_MODULES_DIR "${CMAKE_CURRENT_SOURCE_DIR}/../../../oh_modules")
set(NODE_MODULES "${CMAKE_CURRENT_SOURCE_DIR}/../../../../../node_modules")
set(OH_MODULES "${CMAKE_CURRENT_SOURCE_DIR}/../../../oh_modules")
set(RNOH_APP_DIR "${CMAKE_CURRENT_SOURCE_DIR}")
set(RNOH_CPP_DIR "${CMAKE_CURRENT_SOURCE_DIR}/../../../../oh_modules/@rnoh/react-native-openharmony/src/main/cpp")
set(RNOH_GENERATED_DIR "${CMAKE_CURRENT_SOURCE_DIR}/generated")
set(WITH_HITRACE_SYSTRACE 1)
add_compile_definitions(WITH_HITRACE_SYSTRACE)

add_subdirectory("${RNOH_CPP_DIR}" ./rn)


# RNOH_BEGIN: manual_package_linking_1
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-svg/src/main/cpp" ./svg)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-fast-image/src/main/cpp" ./fast-image)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-audio-recorder-player/src/main/cpp" ./audio_recorder_player)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-vision-camera/src/main/cpp" ./vision-camera)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-keys/src/main/cpp" ./rnohkeys)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-gesture-handler/src/main/cpp" ./gesture-handler)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-reanimated/src/main/cpp" ./reanimated)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-quick-base64/src/main/cpp" ./rn_quick_base64)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-safe-area-context/src/main/cpp" ./safe-area)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-incall-manager/src/main/cpp" ./in_call_manager)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-mlkit-ocr/src/main/cpp" ./rn_mlkit_ocr)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-linear-gradient/src/main/cpp" ./linear-gradient)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/async-storage/src/main/cpp" ./async-storage)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-maps/src/main/cpp" ./maps)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-worklets-core/src/main/cpp" ./worklets)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-video/src/main/cpp" ./video)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-zip-archive/src/main/cpp" ./zipArchive-package)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-skia/src/main/cpp" ./skia)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/op-sqlite/src/main/cpp" ./rn_op_sqlite)
# RNOH_END: manual_package_linking_1

file(GLOB GENERATED_CPP_FILES "./generated/*.cpp")
file(GLOB VISION_CAMERA_CPP_FILES "${OH_MODULES}/@react-native-oh-tpl/react-native-vision-camera/src/main/cpp/*.cpp")
add_library(rnoh_app SHARED
    ${GENERATED_CPP_FILES}
    "./PackageProvider.cpp"
    "${RNOH_CPP_DIR}/RNOHAppNapiBridge.cpp"
    ${VISION_CAMERA_CPP_FILES}
)

target_link_libraries(rnoh_app PUBLIC rnoh)

# RNOH_BEGIN: manual_package_linking_2
target_link_libraries(rnoh_app PUBLIC rnoh_svg)
target_link_libraries(rnoh_app PUBLIC rnoh_fast_image)
target_link_libraries(rnoh_app PUBLIC rnoh_audio_recorder_player)
target_link_libraries(rnoh_app PUBLIC rnoh_keys)
target_link_libraries(rnoh_app PUBLIC rnoh_vision_camera)
target_link_libraries(rnoh_app PUBLIC rnoh_gesture_handler)
target_link_libraries(rnoh_app PUBLIC rnoh_reanimated)
target_link_libraries(rnoh_app PUBLIC rnoh_quick_base64)
target_link_libraries(rnoh_app PUBLIC rnoh_safe_area)
target_link_libraries(rnoh_app PUBLIC rnoh_in_call_manager)
target_link_libraries(rnoh_app PUBLIC rnoh_mlkit_ocr)
target_link_libraries(rnoh_app PUBLIC rnoh_linear_gradient)
target_link_libraries(rnoh_app PUBLIC rnoh_async_storage)
target_link_libraries(rnoh_app PUBLIC rnoh_maps)
target_link_libraries(rnoh_app PUBLIC rnoh_worklets)
target_link_libraries(rnoh_app PUBLIC rnoh_video)
target_link_libraries(rnoh_app PUBLIC nativi_minizip)
target_link_libraries(rnoh_app PUBLIC rnoh_skia)
target_link_libraries(rnoh_app PUBLIC rnoh_rn_op_sqlite)
# RNOH_END: link_packages
