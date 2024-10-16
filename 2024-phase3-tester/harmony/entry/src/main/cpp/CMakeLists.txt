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
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-svg/src/main/cpp" ./svg)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-fast-image/src/main/cpp" ./fast-image)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-audio-recorder-player/src/main/cpp" ./audio_recorder_player)
add_subdirectory("${OH_MODULES}/@react-native-oh-tpl/react-native-vision-camera/src/main/cpp" ./vision-camera)
# RNOH_END: manual_package_linking_1

file(GLOB GENERATED_CPP_FILES "./generated/*.cpp")
file(GLOB VISION_CAMERA_CPP_FILES "${OH_MODULES}/@react-native-oh-tpl/react-native-vision-camera/src/main/cpp/*.cpp")
add_library(rnoh_app SHARED
    ${GENERATED_CPP_FILES}
    "./PackageProvider.cpp"
    "${RNOH_CPP_DIR}/RNOHAppNapiBridge.cpp",
    ${VISION_CAMERA_CPP_FILES}
)

target_link_libraries(rnoh_app PUBLIC rnoh)

# RNOH_BEGIN: manual_package_linking_2
target_link_libraries(rnoh_app PUBLIC rnoh_svg)
target_link_libraries(rnoh_app PUBLIC rnoh_fast_image)
target_link_libraries(rnoh_app PUBLIC rnoh_audio_recorder_player)
target_link_libraries(rnoh_app PUBLIC rnoh_vision_camera)
# RNOH_END: link_packages
