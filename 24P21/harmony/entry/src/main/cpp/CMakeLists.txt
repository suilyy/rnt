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
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-safe-area-context/src/main/cpp" ./safe-area)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-linear-gradient/src/main/cpp" ./linear-gradient)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-hole-view/src/main/cpp" ./rnohkeys)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-gesture-handler/src/main/cpp" ./gesture-handler)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-reanimated/src/main/cpp" ./reanimated)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-pager-view/src/main/cpp" ./pager_view)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-context-menu-view/src/main/cpp" ./context_menu)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/netinfo/src/main/cpp" ./netinfo)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/masked-view/src/main/cpp" ./masked-view)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-unistyles/src/main/cpp" ./unistyles)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-blurhash/src/main/cpp" ./blurhash)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/picker/src/main/cpp" ./picker)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-mmkv-storage/src/main/cpp" ./mmkv-storage)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-text-input-mask/src/main/cpp" ./RNTextInputMask)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-keyboard-controller/src/main/cpp" ./keyboard-controller)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-skia/src/main/cpp" ./skia)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/datetimepicker/src/main/cpp" ./datetimepicker)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/blur/src/main/cpp" ./blur)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-ui-lib/src/main/cpp" ./ui-lib)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-image-picker/src/main/cpp" ./image_picker)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-vision-camera/src/main/cpp" ./vision-camera)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/async-storage/src/main/cpp" ./async-storage)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-shared-element/src/main/cpp" ./shared-element)
add_subdirectory("${OH_MODULES}/@react-native-ohos/react-native-document-picker/src/main/cpp" ./document_picker)
# RNOH_END: manual_package_linking_1

file(GLOB GENERATED_CPP_FILES "./generated/*.cpp")
file(GLOB VISION_CAMERA_CPP_FILES "${OH_MODULES}/@react-native-oh-tpl/react-native-vision-camera/src/main/cpp/*.cpp")

add_library(rnoh_app SHARED
    ${GENERATED_CPP_FILES}
	${VISION_CAMERA_CPP_FILES}
    "./PackageProvider.cpp"
    "${RNOH_CPP_DIR}/RNOHAppNapiBridge.cpp"
)

target_link_libraries(rnoh_app PUBLIC rnoh)

# RNOH_BEGIN: manual_package_linking_2
target_link_libraries(rnoh_app PUBLIC rnoh_svg)
target_link_libraries(rnoh_app PUBLIC rnoh_safe_area)
target_link_libraries(rnoh_app PUBLIC rnoh_linear_gradient)
target_link_libraries(rnoh_app PUBLIC rnoh_holeview)
target_link_libraries(rnoh_app PUBLIC rnoh_gesture_handler)
target_link_libraries(rnoh_app PUBLIC rnoh_reanimated)
target_link_libraries(rnoh_app PUBLIC rnoh_pager_view)
target_link_libraries(rnoh_app PUBLIC rnoh_context_menu)
target_link_libraries(rnoh_app PUBLIC rnoh_netinfo)
target_link_libraries(rnoh_app PUBLIC rnoh_masked_view)
target_link_libraries(rnoh_app PUBLIC rnoh_unistyles)
target_link_libraries(rnoh_app PUBLIC rnoh_blurhash)
target_link_libraries(rnoh_app PUBLIC rnoh_picker)
target_link_libraries(rnoh_app PUBLIC rnoh_mmkv_storage)
target_link_libraries(rnoh_app PUBLIC text_input_mask)
target_link_libraries(rnoh_app PUBLIC rnoh_keyboard_controller)
target_link_libraries(rnoh_app PUBLIC rnoh_skia)
target_link_libraries(rnoh_app PUBLIC rnoh_datetime_picker)
target_link_libraries(rnoh_app PUBLIC rnoh_blur)
target_link_libraries(rnoh_app PUBLIC rnoh_ui_lib)
target_link_libraries(rnoh_app PUBLIC rnoh_image_picker)
target_link_libraries(rnoh_app PUBLIC rnoh_vision_camera)
target_link_libraries(rnoh_app PUBLIC rnoh_async_storage)
target_link_libraries(rnoh_app PUBLIC rnoh_shared_element)
target_link_libraries(rnoh_app PUBLIC rnoh_document_picker)
# RNOH_END: link_packages
