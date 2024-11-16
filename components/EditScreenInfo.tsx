import React from "react";
import { StyleSheet } from "react-native";
import { AppText, AppView } from "@/components/Themed";

import { ExternalLink } from "./ExternalLink";
import { MonoText } from "./StyledText";
import useAppTheme from "@/constants/useAppTheme";

export default function EditScreenInfo({ path }: { path: string }) {
  const { colors } = useAppTheme();
  return (
    <AppView>
      <AppView style={styles.getStartedContainer}>
        <AppText style={styles.getStartedText}>
          Open up the code for this screen:
        </AppText>

        <AppView
          style={[
            styles.codeHighlightContainer,
            styles.homeScreenFilename,
            { backgroundColor: colors.background },
          ]}
        >
          <MonoText>{path}</MonoText>
          <AppText style={styles.getStartedText}>{path}</AppText>
        </AppView>

        <AppText style={styles.getStartedText}>
          Change any of the text, save the file, and your app will automatically
          update.
        </AppText>
      </AppView>

      <AppView style={styles.helpContainer}>
        <ExternalLink
          style={styles.helpLink}
          href="https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet"
        >
          <AppText style={styles.helpLinkText}>
            Tap here if your app doesn't automatically update after making
            changes
          </AppText>
        </ExternalLink>
      </AppView>
    </AppView>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
});
