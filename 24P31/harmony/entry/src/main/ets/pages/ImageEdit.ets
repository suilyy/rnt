import { ImageEditInfo } from '@react-native-oh-tpl/react-native-image-crop-picker';
@Entry
@Component
struct ImageEdit {

  build() {
    Row(){
      Column(){
        ImageEditInfo();
      }
      .width('100%')
    }
    .height('100%')
  }
}