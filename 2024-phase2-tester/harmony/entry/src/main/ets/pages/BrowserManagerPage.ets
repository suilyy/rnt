import { BrowserPage } from '@react-native-oh-tpl/react-native-inappbrowser-reborn/Index'

@Entry
@Component
struct ChromeTabsManagerPage {
  build() {
    Row(){
      Column(){
        BrowserPage();
      }
      .width('100%')
    }
    .height('100%')
  }

}