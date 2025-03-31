project(rnapp)
cmake_minimum_required(VERSION 3.4.1)
set(NODE_MODULES "${CMAKE_CURRENT_SOURCE_DIR}/../../../../../node_modules")
set(OH_MODULES_DIR "${CMAKE_CURRENT_SOURCE_DIR}/../../../oh_modules")
set(OH_MODULES "${CMAKE_CURRENT_SOURCE_DIR}/../../../oh_modules")
set(RNOH_APP_DIR "${CMAKE_CURRENT_SOURCE_DIR}")
set(RNOH_CPP_DIR "${CMAKE_CURRENT_SOURCE_DIR}/../../../../oh_modules/@rnoh/react-native-openharmony/src/main/cpp")
set(WITH_HITRACE_SYSTRACE 1)
add_compile_definitions(WITH_HITRACE_SYSTRACE)

add_subdirectory("${RNOH_CPP_DIR}" ./rn)


# RNOH_BEGIN: manual_package_linking_1
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-video/src/main/cpp" ./video)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-safe-area-context/src/main/cpp" ./safe-area)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-linear-gradient/src/main/cpp" ./linear-gradient)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-cardview/src/main/cpp" ./card-view)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/lottie-react-native/src/main/cpp" ./lottie)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-spring-scrollview/src/main/cpp" ./spring_scrollview)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-pager-view/src/main/cpp" ./pager_view)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-text-gradient/src/main/cpp" ./text_gradient)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-mjrefresh/src/main/cpp" ./mjrefresh)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-smartrefreshlayout/src/main/cpp" ./smart-refresh-layout)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/masked-view/src/main/cpp" ./masked-view)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-image-picker/src/main/cpp" ./image_picker)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-bindingx/src/main/cpp" ./bindingx)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-gesture-handler/src/main/cpp" ./gesture-handler)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/flash-list/src/main/cpp" ./flah-list)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-clippathview/src/main/cpp" ./clippath)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-color-matrix-image-filters/src/main/cpp" ./color_matrix_image_filters)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-baidu-map/src/main/cpp" ./baidu-map)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-amap3d/src/main/cpp" ./rn_amap3d)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/async-storage/src/main/cpp" ./async-storage)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-reanimated/src/main/cpp" ./reanimated)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-svg/src/main/cpp" ./svg)
# RNOH_END: manual_package_linking_1

file(GLOB GENERATED_CPP_FILES "./generated/*.cpp")

add_library(rnoh_app SHARED
    ${GENERATED_CPP_FILES}
    "./PackageProvider.cpp"
    "${RNOH_CPP_DIR}/RNOHAppNapiBridge.cpp"
)

target_link_libraries(rnoh_app PUBLIC rnoh)

# RNOH_BEGIN: manual_package_linking_2
target_link_libraries(rnoh_app PUBLIC rnoh_video)
target_link_libraries(rnoh_app PUBLIC rnoh_safe_area)
target_link_libraries(rnoh_app PUBLIC rnoh_linear_gradient)
target_link_libraries(rnoh_app PUBLIC rnoh_card_view)
target_link_libraries(rnoh_app PUBLIC rnoh_spring_scrollview)
target_link_libraries(rnoh_app PUBLIC rnoh_lottie)
target_link_libraries(rnoh_app PUBLIC rnoh_pager_view )
target_link_libraries(rnoh_app PUBLIC rnoh_text_gradient)
target_link_libraries(rnoh_app PUBLIC rnoh_mjrefresh)
target_link_libraries(rnoh_app PUBLIC rnoh_smart_refresh_layout)
target_link_libraries(rnoh_app PUBLIC rnoh_masked_view)
target_link_libraries(rnoh_app PUBLIC rnoh_image_picker)
target_link_libraries(rnoh_app PUBLIC rnoh_bindingx)
target_link_libraries(rnoh_app PUBLIC rnoh_gesture_handler)
target_link_libraries(rnoh_app PUBLIC rnoh_flash_list)
target_link_libraries(rnoh_app PUBLIC rnoh_clip_path )
target_link_libraries(rnoh_app PUBLIC rnoh_color_matrix_image_filters )
target_link_libraries(rnoh_app PUBLIC rnoh_amap3d)
target_link_libraries(rnoh_app PUBLIC rnoh_baidu_map)
target_link_libraries(rnoh_app PUBLIC rnoh_async_storage)
target_link_libraries(rnoh_app PUBLIC rnoh_reanimated)
target_link_libraries(rnoh_app PUBLIC rnoh_svg)
# RNOH_END: link_packages
