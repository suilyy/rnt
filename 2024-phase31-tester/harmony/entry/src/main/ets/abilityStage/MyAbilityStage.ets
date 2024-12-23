import appRecovery from '@ohos.app.ability.appRecovery';
import AbilityStage from '@ohos.app.ability.AbilityStage';
import { Want } from '@kit.AbilityKit';

export default class MyAbilityStage extends AbilityStage {
  onCreate() {
    appRecovery.enableAppRecovery(
      appRecovery.RestartFlag.ALWAYS_RESTART,
      appRecovery.SaveOccasionFlag.SAVE_WHEN_ERROR,
      appRecovery.SaveModeFlag.SAVE_WITH_FILE
    );

    let wantObj: Want = {
      bundleName: 'com.rnoh.tester',
      abilityName: 'EntryAbility'
    };

    appRecovery.setRestartWant(wantObj)
  }
}