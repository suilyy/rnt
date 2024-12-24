import { useState } from "react";
import { StyleSheet, Text } from "react-native";
import RNRestart from "react-native-restart";
import { Tester, TestSuite, TestCase } from "@rnoh/testerino";

export default function RestartDemo() {
  const [restartReason, setRestartReason] = useState("");

  return (
    <Tester>
      <TestSuite name="restart">
        <TestCase tags={["C_API"]} itShould="restart">
          <Text
            style={styles.button}
            onPress={() => RNRestart.restart("restart_a")}
          >
            restart
          </Text>
        </TestCase>
        <TestCase tags={["C_API"]} itShould="Restart">
          <Text
            style={styles.button}
            onPress={() => RNRestart.Restart("restart_b")}
          >
            Restart
          </Text>
        </TestCase>
        <TestCase
          tags={["C_API"]}
          itShould="getReason"
          initialState={"reason"}
          arrange={({ setState }) => {
            return (
              <Text
                style={styles.button}
                onPress={async () => {
                  const reason = await RNRestart.getReason();
                  setRestartReason(reason);
                  setState(reason);
                }}
              >
                getReason{restartReason ? `（原因：${restartReason}）` : ""}
              </Text>
            );
          }}
          assert={async ({ expect, state }) => {
            expect(state).include("restart_");
          }}
        />
      </TestSuite>
    </Tester>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "hsl(193, 95%, 68%)",
    borderWidth: 2,
    borderColor: "hsl(193, 95%, 30%)",
  },
});

export const displayName = "ReactNativeRestartExample";
export const framework = "React";
export const category = "UI";
export const title = "react-native-restart";
export const documentationURL =
  "https://github.com/avishayil/react-native-restart#readme";
export const description = "React Native Restart";

export const examples = [
  {
    title: "react-native-restart",
    render: function (): any {
      return <RestartDemo />;
    },
  },
];
