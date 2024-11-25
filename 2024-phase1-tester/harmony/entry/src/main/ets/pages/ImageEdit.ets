import { ImageCrop } from '@react-native-oh-tpl/react-native-syan-image-picker';

@Entry
@Component
struct ImageEdit {

  build() {
    Row(){
      Column(){
        ImageCrop();
      }
      .width('100%')
    }
    .height('100%')
  }
}