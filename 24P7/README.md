1.react-native-wechat-lib中的demo需要手动进行修改，即src/constants.ts文件中的APP_ID = "wx7960f233c597c135"需要改成自己微信小程序账号的app_id。详情见小程序官网[小程序 (qq.com)](https://mp.weixin.qq.com/wxamp/devprofile/get_profile?token=374664573&lang=zh_CN)

2.build-profile.json5中的签名需要进行手动修改，不能通过IDE自动生成，可以通过归档的签名文件来进行手动配置

harmony工程下的appscope文件夹中有个app.json5中的包名需要改成com.harmony.wechat.lib.demo（如果使用现有的签名文件，需要固定为这个包名）

或者通过该链接自行申请小程序的config：https://developers.weixin.qq.com/doc/oplatform/Mobile_App/Access_Guide/signature_verify.html 然后通过config来生成签名文件

