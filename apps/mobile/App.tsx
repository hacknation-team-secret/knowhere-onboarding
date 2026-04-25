import React, { useMemo, useState } from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { launchCity, roadmapPhases } from "@knowhere/config";
import {
  defaultProfileDraft,
  onboardingQuestions,
  travelFrequencyOptions,
  type OnboardingAnswerMap,
  type OnboardingQuestion,
  type ProfileDraft
} from "@knowhere/domain";
import { Button, Card, ProgressDots, TextField } from "@knowhere/ui";

const initialAnswers = onboardingQuestions.reduce<OnboardingAnswerMap>((acc, question) => {
  acc[question.id] = question.options[0]?.id ?? "";
  return acc;
}, {} as OnboardingAnswerMap);

function OptionButton({
  question,
  selected,
  onSelect
}: {
  question: OnboardingQuestion;
  selected: string;
  onSelect: (optionId: string) => void;
}) {
  return (
    <View style={styles.optionGroup}>
      {question.options.map((option) => {
        const active = selected === option.id;
        return (
          <Button
            key={option.id}
            label={option.label}
            description={option.description}
            variant={active ? "primary" : "secondary"}
            onPress={() => onSelect(option.id)}
          />
        );
      })}
    </View>
  );
}

export default function App() {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState(initialAnswers);
  const [profile, setProfile] = useState<ProfileDraft>(defaultProfileDraft);
  const [stage, setStage] = useState<"onboarding" | "profile" | "complete">("onboarding");
  const [complete, setComplete] = useState(false);

  const question = onboardingQuestions[stepIndex];
  const selected = answers[question.id];
  const profileReady =
    profile.firstName.trim().length > 0 &&
    profile.homeCity.trim().length > 0 &&
    profile.email.trim().length > 0;

  const summary = useMemo(() => {
    return onboardingQuestions.map((item) => {
      const answer = item.options.find((option) => option.id === answers[item.id]);
      return {
        label: item.title,
        value: answer?.label ?? "Pending"
      };
    });
  }, [answers]);

  const next = () => {
    if (stepIndex === onboardingQuestions.length - 1) {
      setStage("profile");
      return;
    }

    setStepIndex((current) => current + 1);
  };

  const back = () => {
    if (stage === "profile") {
      setStage("onboarding");
      return;
    }

    setStepIndex((current) => Math.max(0, current - 1));
  };

  const reset = () => {
    setAnswers(initialAnswers);
    setProfile(defaultProfileDraft);
    setStepIndex(0);
    setStage("onboarding");
    setComplete(false);
  };

  const createProfile = () => {
    setStage("complete");
    setComplete(true);
  };

  if (complete || stage === "complete") {
    return (
      <SafeAreaView style={styles.screen}>
        <StatusBar barStyle="dark-content" />
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.eyebrow}>Welcome to {launchCity.displayName}</Text>
          <Text style={styles.title}>Your city copilot is ready to learn in motion.</Text>
          <Text style={styles.subtitle}>
            {profile.firstName || "Your"} profile is set up with the preference and trust signals
            Knowhere needs to personalize discovery, routing, and wallet readiness.
          </Text>

          <Card>
            <Text style={styles.cardTitle}>Profile created</Text>
            <View style={styles.summaryList}>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Name</Text>
                <Text style={styles.summaryValue}>{profile.firstName}</Text>
              </View>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Home city</Text>
                <Text style={styles.summaryValue}>{profile.homeCity}</Text>
              </View>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Email</Text>
                <Text style={styles.summaryValue}>{profile.email}</Text>
              </View>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Travel frequency</Text>
                <Text style={styles.summaryValue}>
                  {travelFrequencyOptions.find((option) => option.id === profile.travelFrequency)?.label}
                </Text>
              </View>
            </View>
          </Card>

          <Card>
            <Text style={styles.cardTitle}>Profile snapshot</Text>
            <View style={styles.summaryList}>
              {summary.map((item) => (
                <View key={item.label} style={styles.summaryRow}>
                  <Text style={styles.summaryLabel}>{item.label}</Text>
                  <Text style={styles.summaryValue}>{item.value}</Text>
                </View>
              ))}
            </View>
          </Card>

          <Card>
            <Text style={styles.cardTitle}>Next product milestones</Text>
            <View style={styles.phaseList}>
              {roadmapPhases.map((phase) => (
                <View key={phase.id} style={styles.phaseRow}>
                  <Text style={styles.phaseName}>{phase.name}</Text>
                  <Text style={styles.phaseDescription}>{phase.focus}</Text>
                </View>
              ))}
            </View>
          </Card>

          <Button label="Restart onboarding" onPress={reset} variant="secondary" />
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.eyebrow}>Know where to go</Text>
        <Text style={styles.title}>Onboarding and profile creation for Knowhere</Text>
        <Text style={styles.subtitle}>
          We start with intent, movement, and trust, then turn those signals into a usable
          profile the product can build on.
        </Text>

        {stage === "onboarding" ? (
          <>
            <ProgressDots total={onboardingQuestions.length} current={stepIndex} />

            <Card>
              <Text style={styles.stepLabel}>
                Step {stepIndex + 1} of {onboardingQuestions.length}
              </Text>
              <Text style={styles.cardTitle}>{question.title}</Text>
              <Text style={styles.cardDescription}>{question.description}</Text>
              <OptionButton
                question={question}
                selected={selected}
                onSelect={(optionId) =>
                  setAnswers((current) => ({
                    ...current,
                    [question.id]: optionId
                  }))
                }
              />
            </Card>

            <View style={styles.navRow}>
              <Button label="Back" onPress={back} disabled={stepIndex === 0} variant="ghost" />
              <Button
                label={stepIndex === onboardingQuestions.length - 1 ? "Create profile" : "Continue"}
                onPress={next}
              />
            </View>
          </>
        ) : (
          <>
            <Card>
              <Text style={styles.stepLabel}>Profile details</Text>
              <Text style={styles.cardTitle}>Create the first version of your Knowhere profile</Text>
              <Text style={styles.cardDescription}>
                These basics turn onboarding answers into a persistent user identity.
              </Text>
              <TextField
                label="First name"
                value={profile.firstName}
                placeholder="Rachel"
                onChangeText={(firstName) =>
                  setProfile((current) => ({
                    ...current,
                    firstName
                  }))
                }
              />
              <TextField
                label="Home city"
                value={profile.homeCity}
                placeholder="Boston"
                onChangeText={(homeCity) =>
                  setProfile((current) => ({
                    ...current,
                    homeCity
                  }))
                }
              />
              <TextField
                label="Email"
                value={profile.email}
                placeholder="you@example.com"
                keyboardType="email-address"
                onChangeText={(email) =>
                  setProfile((current) => ({
                    ...current,
                    email
                  }))
                }
              />

              <Text style={styles.inlineSectionTitle}>How often do you travel through cities like this?</Text>
              <View style={styles.optionGroup}>
                {travelFrequencyOptions.map((option) => (
                  <Button
                    key={option.id}
                    label={option.label}
                    description={option.description}
                    variant={profile.travelFrequency === option.id ? "primary" : "secondary"}
                    onPress={() =>
                      setProfile((current) => ({
                        ...current,
                        travelFrequency: option.id
                      }))
                    }
                  />
                ))}
              </View>
            </Card>

            <View style={styles.navRow}>
              <Button label="Back" onPress={back} variant="ghost" />
              <Button label="Finish profile" onPress={createProfile} disabled={!profileReady} />
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F6F0E8"
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    gap: 20
  },
  eyebrow: {
    fontSize: 14,
    fontWeight: "700",
    textTransform: "uppercase",
    color: "#7A4B2A",
    letterSpacing: 0.5
  },
  title: {
    fontSize: 34,
    lineHeight: 40,
    fontWeight: "700",
    color: "#181411"
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: "#5A4A3D"
  },
  stepLabel: {
    fontSize: 13,
    fontWeight: "700",
    color: "#8B6B52",
    textTransform: "uppercase"
  },
  cardTitle: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: "700",
    color: "#181411"
  },
  cardDescription: {
    fontSize: 15,
    lineHeight: 22,
    color: "#5A4A3D"
  },
  optionGroup: {
    gap: 12
  },
  inlineSectionTitle: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: "700",
    color: "#181411"
  },
  navRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12
  },
  summaryList: {
    gap: 14
  },
  summaryRow: {
    gap: 4,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E9DCCF"
  },
  summaryLabel: {
    fontSize: 13,
    fontWeight: "700",
    color: "#8B6B52",
    textTransform: "uppercase"
  },
  summaryValue: {
    fontSize: 18,
    fontWeight: "600",
    color: "#181411"
  },
  phaseList: {
    gap: 14
  },
  phaseRow: {
    gap: 4
  },
  phaseName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#181411"
  },
  phaseDescription: {
    fontSize: 14,
    lineHeight: 21,
    color: "#5A4A3D"
  }
});
