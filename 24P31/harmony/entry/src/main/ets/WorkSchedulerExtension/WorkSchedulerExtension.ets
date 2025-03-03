import { workScheduler } from "@kit.BackgroundTasksKit";
import RNBackgroundFetchExtensionAbility from "@react-native-oh-tpl/react-native-background-fetch/src/main/ets/WorkSchedulerExtension/WorkSchedulerExtension";

export default class MyWorkSchedulerExtensionAbility extends RNBackgroundFetchExtensionAbility {
  // 延迟任务开始回调
  onWorkStart(workInfo: workScheduler.WorkInfo) {
    super.onWorkStart(workInfo);
  }

  // 延迟任务结束回调
  onWorkStop(workInfo: workScheduler.WorkInfo) {
    super.onWorkStop(workInfo);
  }
}