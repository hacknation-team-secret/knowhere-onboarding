import React, { useMemo, useState } from "react";
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { launchCity, roadmapPhases } from "@knowhere/config";
import { buildPassportArtifact, defaultProfileDraft, type ProfileDraft } from "@knowhere/domain";
import { Button, Card, TextField } from "@knowhere/ui";

const PASSPORT_PROMPT = `Help me bottle my travel style for Knowhere.

Knowhere is my AI city passport. It helps me find the places, routes, rituals, and hidden corners I'd actually love when I'm in a new city.

Your job: turn whatever I paste below into a traveler profile I can paste back into Knowhere.

Rules:
- Do not ask follow-up questions.
- Do not interview me.
- Use only the clues I give you.
- Avoid generic travel words unless they are backed by evidence.
- Do not say "hidden gems," "local spots," "authentic," "culture," or "good food" unless you make them specific.
- Every section should include concrete examples, patterns, or contrasts from my clues.
- Prefer "you like tiny wine bars with handwritten menus after a museum" over "you like food and culture."
- Include anti-patterns: what I probably do NOT want.
- If something is inferred, mark it "light signal."
- Make this feel like a tiny field guide to how I move through a city.

CLUES TO READ:
[Paste saved places, travel notes, memories, restaurant names, neighborhoods, map lists, links, social posts, or random vibes here.]

Return only this:

KNOWHERE PASSPORT PROFILE

TRAVEL AURA:
A specific 1-2 sentence portrait of how I move through a city. No generic adjectives.

SIGNATURE PATTERNS:
3-5 recurring patterns from my clues. Each should be specific.
Example: "Bookstore after coffee," "waterfront walks before dinner," "small plates over formal reservations."

MAGNETS:
Specific place types, scenes, textures, or moments I'm pulled toward.

ANTI-MAGNETS:
Specific places, moods, or situations I likely avoid.

PACE + MOVEMENT:
How I like to move, including walking tolerance, spontaneity, friction, transit/bike/rideshare preference, and ideal route shape.

FOOD + DRINK RITUALS:
Specific cuisines, drinks, settings, timing, and ordering patterns.

SOCIAL MODE:
How I seem to like experiencing places alone or with others.

PERFECT 45-90 MINUTE DETOUR:
A concrete recipe for a short city route that would feel made for me.

DETOUR DO NOTS:
What Knowhere should avoid when building my routes.

WEIRDLY SPECIFIC SIGNALS:
5 details that make this profile feel unlike anyone else's.`;

function parseSocialHandle(value: string) {
  return value
    .trim()
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/^instagram\.com\//, "")
    .replace(/^tiktok\.com\/@/, "")
    .replace(/^@/, "")
    .replace(/\/.*$/, "")
    .trim();
}

function getProfileImageUrl(profile: ProfileDraft) {
  const instagramHandle = parseSocialHandle(profile.instagramProfile);
  if (instagramHandle) {
    return `https://unavatar.io/instagram/${instagramHandle}`;
  }

  const tiktokHandle = parseSocialHandle(profile.tiktokProfile);
  if (tiktokHandle) {
    return `https://unavatar.io/tiktok/${tiktokHandle}`;
  }

  return "";
}

export default function App() {
  const [profile, setProfile] = useState<ProfileDraft>(defaultProfileDraft);
  const [complete, setComplete] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");
  const passport = useMemo(() => buildPassportArtifact(profile), [profile]);
  const profileImageUrl = useMemo(() => getProfileImageUrl(profile), [profile]);

  const profileReady =
    profile.firstName.trim().length > 0 &&
    profile.homeCity.trim().length > 0 &&
    profile.email.trim().length > 0 &&
    profile.passportProfile.trim().length > 0;

  const copyPrompt = async () => {
    if (typeof navigator === "undefined" || !navigator.clipboard?.writeText) {
      setCopyStatus("Copy the prompt manually from below.");
      return;
    }

    try {
      await navigator.clipboard.writeText(PASSPORT_PROMPT);
      setCopyStatus("Prompt copied. Paste it into ChatGPT, Claude, or your LLM of choice.");
    } catch {
      setCopyStatus("Copy the prompt manually from below.");
    }
  };

  const reset = () => {
    setProfile(defaultProfileDraft);
    setComplete(false);
    setCopyStatus("");
  };

  const createProfile = () => {
    setComplete(true);
  };

  const passportPreview = (
    <View style={styles.passportShell}>
      <View style={styles.passportTexture} />
      <View style={styles.passportRule} />
      <View style={styles.passportHeader}>
        <View style={styles.passportSeal}>
          <Text style={styles.passportSealText}>◎</Text>
        </View>
        <View style={styles.passportHeaderCenter}>
          <Text style={styles.wordmark}>KNOWHERE</Text>
          <Text style={styles.passportSubhead}>passport</Text>
        </View>
        <View style={styles.airmark}>
          <Text style={styles.airmarkText}>✈</Text>
        </View>
      </View>

      <View style={styles.passportBody}>
        <View style={styles.photoFrame}>
          {profileImageUrl ? (
            <Image source={{ uri: profileImageUrl }} style={styles.photo} resizeMode="cover" />
          ) : (
            <View style={styles.photoFallback}>
              <Text style={styles.photoFallbackInitials}>
                {passport.travelerName
                  .split(" ")
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2)}
              </Text>
              <Text style={styles.photoFallbackText}>add instagram</Text>
            </View>
          )}
        </View>

        <View style={styles.passportMeta}>
          <View style={styles.watermarkStamp}>
            <Text style={styles.watermarkStampText}>THE WORLD IS OPEN</Text>
            <Text style={styles.watermarkStampText}>KNOWHERE</Text>
          </View>
          <View style={styles.passportField}>
            <Text style={styles.passportFieldLabel}>Traveler</Text>
            <Text style={styles.passportFieldValue}>{passport.travelerName}</Text>
          </View>
          <View style={styles.passportField}>
            <Text style={styles.passportFieldLabel}>Brand</Text>
            <Text style={styles.passportFieldValue}>{passport.brandName}</Text>
          </View>
          <View style={styles.passportField}>
            <Text style={styles.passportFieldLabel}>Vibe</Text>
            <Text style={styles.passportFieldBody}>{passport.vibeLine.join(" • ")}</Text>
          </View>
          <View style={styles.passportField}>
            <Text style={styles.passportFieldLabel}>Preferred destination</Text>
            <Text style={styles.passportFieldValue}>{passport.preferredDestination}</Text>
          </View>
          <View style={styles.passportDateRow}>
            <View style={styles.passportFieldCompact}>
              <Text style={styles.passportFieldLabel}>Date of issue</Text>
              <Text style={styles.passportFieldCompactValue}>{passport.issueDate}</Text>
            </View>
            <View style={styles.passportFieldCompact}>
              <Text style={styles.passportFieldLabel}>Expiry date</Text>
                  <Text style={styles.passportFieldCompactValue}>{passport.expiryDate}</Text>
                </View>
              </View>
          <Text style={styles.passportQuote}>"{passport.credo}"</Text>
          <View style={styles.approvalStamp}>
            <Text style={styles.approvalStampText}>Adventure Approved</Text>
          </View>
        </View>
      </View>

      <View style={styles.machineZone}>
        <Text style={styles.machineLine}>{passport.machineLineOne}</Text>
        <Text style={styles.machineLine}>{passport.machineLineTwo}</Text>
      </View>
    </View>
  );

  if (complete) {
    return (
      <SafeAreaView style={styles.screen}>
        <StatusBar barStyle="dark-content" />
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.eyebrow}>Know where to go</Text>
          <Text style={styles.heroTitle}>Your city passport is ready.</Text>
          <Text style={styles.subtitle}>
            {profile.firstName || "Your"} passport now acts as the memory object Knowhere can
            build on across cities, saved places, and future Detours.
          </Text>

          {passportPreview}

          <Card>
            <Text style={styles.cardTitle}>Passport source of truth</Text>
            <Text style={styles.cardDescription}>
              This is where Knowhere starts remembering you: cities visited, favorite rituals,
              saved places, completed Detours, and future stamps.
            </Text>
            <View style={styles.summaryList}>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Visited cities</Text>
                <Text style={styles.summaryValue}>{passport.visitedCities.join(" • ")}</Text>
              </View>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Saved places</Text>
                <Text style={styles.summaryValue}>{passport.savedPlaces.join(" • ")}</Text>
              </View>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Current stamp</Text>
                <Text style={styles.summaryValue}>First Boston Detour</Text>
              </View>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Travel aura snapshot</Text>
                <Text style={styles.summaryValue} numberOfLines={5}>
                  {profile.passportProfile}
                </Text>
              </View>
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
        <Text style={styles.heroTitle}>Boston is new, but your taste is not.</Text>
        <Text style={styles.subtitle}>
          Build your passport by using a prewritten prompt with the LLM you already trust, then
          bring the finished profile back here.
        </Text>

        <Card>
          <Text style={styles.stepLabel}>Passport onboarding</Text>
          <Text style={styles.cardTitle}>Generate your Knowhere Passport Profile</Text>
          <Text style={styles.cardDescription}>
            Gather saved places, notes, screenshots, memories, restaurant lists, and random
            city patterns. Feed those into your LLM, then paste the resulting profile back here.
          </Text>

          {passportPreview}

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

          <View style={styles.promptCard}>
            <Text style={styles.promptCardTitle}>Prompt to use in ChatGPT, Claude, or another LLM</Text>
            <View style={styles.promptBox}>
              <Text style={styles.promptText}>{PASSPORT_PROMPT}</Text>
            </View>
            <View style={styles.promptActions}>
              <Button label="Copy prompt" onPress={copyPrompt} />
            </View>
            {copyStatus ? <Text style={styles.promptStatus}>{copyStatus}</Text> : null}
          </View>

          <TextField
            label="Paste your Knowhere Passport Profile"
            value={profile.passportProfile}
            placeholder="KNOWHERE PASSPORT PROFILE..."
            multiline
            numberOfLines={12}
            onChangeText={(passportProfile) =>
              setProfile((current) => ({
                ...current,
                passportProfile
              }))
            }
          />

          <Text style={styles.sectionTitle}>Connect a social photo</Text>
          <Text style={styles.cardDescription}>
            If you add an Instagram profile, Knowhere will use its avatar as the passport photo
            automatically. TikTok is the fallback if Instagram is blank.
          </Text>
          <TextField
            label="Instagram profile"
            value={profile.instagramProfile}
            placeholder="https://instagram.com/yourhandle"
            keyboardType="url"
            onChangeText={(instagramProfile) =>
              setProfile((current) => ({
                ...current,
                instagramProfile
              }))
            }
          />
          <TextField
            label="TikTok profile"
            value={profile.tiktokProfile}
            placeholder="https://tiktok.com/@yourhandle"
            keyboardType="url"
            onChangeText={(tiktokProfile) =>
              setProfile((current) => ({
                ...current,
                tiktokProfile
              }))
            }
          />
        </Card>

        <View style={styles.navRow}>
          <Button label="Reset" onPress={reset} variant="ghost" />
          <Button label="Create passport" onPress={createProfile} disabled={!profileReady} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F7F2E8"
  },
  container: {
    paddingHorizontal: 18,
    paddingVertical: 24,
    gap: 18
  },
  eyebrow: {
    fontSize: 13,
    fontWeight: "600",
    color: "#68645B",
    fontFamily: "Inter, system-ui, sans-serif"
  },
  heroTitle: {
    fontSize: 40,
    lineHeight: 42,
    color: "#1D1B16",
    fontFamily: "Georgia, serif",
    fontWeight: "700"
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: "#68645B",
    fontFamily: "Inter, system-ui, sans-serif"
  },
  stepLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "#A55436",
    textTransform: "uppercase",
    fontFamily: "Inter, system-ui, sans-serif"
  },
  cardTitle: {
    fontSize: 22,
    lineHeight: 28,
    color: "#1D1B16",
    fontFamily: "Georgia, serif",
    fontWeight: "700"
  },
  cardDescription: {
    fontSize: 15,
    lineHeight: 22,
    color: "#68645B",
    fontFamily: "Inter, system-ui, sans-serif"
  },
  sectionTitle: {
    fontSize: 18,
    lineHeight: 24,
    color: "#1D1B16",
    fontFamily: "Georgia, serif",
    fontWeight: "700"
  },
  promptCard: {
    gap: 10,
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#FFFBF3",
    borderWidth: 1,
    borderColor: "#DDD4C5"
  },
  promptCardTitle: {
    fontSize: 18,
    lineHeight: 24,
    color: "#1D1B16",
    fontFamily: "Georgia, serif",
    fontWeight: "700"
  },
  promptBox: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#DDD4C5",
    backgroundColor: "#F7F2E8",
    padding: 14
  },
  promptText: {
    fontSize: 14,
    lineHeight: 22,
    color: "#1D1B16",
    fontFamily: "Inter, system-ui, sans-serif"
  },
  promptActions: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  promptStatus: {
    fontSize: 14,
    lineHeight: 20,
    color: "#2F7F86",
    fontFamily: "Inter, system-ui, sans-serif"
  },
  passportShell: {
    position: "relative",
    overflow: "hidden",
    borderRadius: 0,
    borderWidth: 1,
    borderColor: "#DDD4C5",
    backgroundColor: "#F7F2E8",
    paddingHorizontal: 22,
    paddingTop: 22,
    paddingBottom: 18,
    gap: 20,
    shadowColor: "#A55436",
    shadowOpacity: 0.08,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 }
  },
  passportTexture: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(255,251,243,0.45)"
  },
  passportRule: {
    position: "absolute",
    top: 110,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: "#DDD4C5"
  },
  passportHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  passportSeal: {
    width: 52,
    height: 52,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#D8A84F",
    alignItems: "center",
    justifyContent: "center"
  },
  passportSealText: {
    fontSize: 26,
    color: "#D8A84F",
    fontFamily: "Georgia, serif"
  },
  passportHeaderCenter: {
    alignItems: "center",
    gap: 2
  },
  wordmark: {
    fontSize: 44,
    color: "#1D1B16",
    fontFamily: "Georgia, serif",
    fontWeight: "700"
  },
  passportSubhead: {
    fontSize: 16,
    color: "#68645B",
    letterSpacing: 3,
    textTransform: "uppercase",
    fontFamily: "Inter, system-ui, sans-serif"
  },
  airmark: {
    minWidth: 52,
    alignItems: "center",
    justifyContent: "center"
  },
  airmarkText: {
    fontSize: 24,
    color: "#D8A84F",
    fontFamily: "Georgia, serif"
  },
  passportBody: {
    flexDirection: "row",
    gap: 20,
    paddingTop: 22
  },
  photoFrame: {
    width: 228,
    minHeight: 340,
    borderRadius: 12,
    backgroundColor: "#FFFBF3",
    padding: 6,
    borderWidth: 1,
    borderColor: "#DDD4C5"
  },
  photo: {
    width: "100%",
    height: 328,
    borderRadius: 8
  },
  photoFallback: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: "#7FA6C7",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: 18
  },
  photoFallbackInitials: {
    fontSize: 38,
    color: "#FFFBF3",
    fontFamily: "Georgia, serif",
    fontWeight: "700"
  },
  photoFallbackText: {
    fontSize: 12,
    color: "#FFFBF3",
    textTransform: "uppercase",
    fontFamily: "Inter, system-ui, sans-serif",
    fontWeight: "600"
  },
  passportMeta: {
    flex: 1,
    gap: 12,
    position: "relative"
  },
  watermarkStamp: {
    position: "absolute",
    top: 6,
    right: 8,
    width: 132,
    height: 132,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "rgba(104,100,91,0.16)",
    alignItems: "center",
    justifyContent: "center",
    transform: [{ rotate: "-14deg" }]
  },
  watermarkStampText: {
    fontSize: 10,
    lineHeight: 14,
    color: "rgba(104,100,91,0.18)",
    fontFamily: "Inter, system-ui, sans-serif",
    fontWeight: "600"
  },
  passportField: {
    gap: 2
  },
  passportFieldCompact: {
    flex: 1,
    gap: 2
  },
  passportFieldLabel: {
    fontSize: 11,
    color: "#A55436",
    letterSpacing: 1,
    textTransform: "uppercase",
    fontFamily: "Inter, system-ui, sans-serif",
    fontWeight: "600"
  },
  passportFieldValue: {
    fontSize: 18,
    lineHeight: 24,
    color: "#1D1B16",
    textTransform: "uppercase",
    fontFamily: "Inter, system-ui, sans-serif",
    fontWeight: "700"
  },
  passportFieldBody: {
    fontSize: 16,
    lineHeight: 24,
    color: "#1D1B16",
    fontFamily: "Inter, system-ui, sans-serif"
  },
  passportDateRow: {
    flexDirection: "row",
    gap: 14
  },
  passportFieldCompactValue: {
    fontSize: 17,
    lineHeight: 20,
    color: "#1D1B16",
    fontFamily: "Inter, system-ui, sans-serif",
    fontWeight: "600"
  },
  passportQuote: {
    marginTop: 10,
    fontSize: 18,
    lineHeight: 26,
    color: "#5E5347",
    fontFamily: "Georgia, serif",
    fontStyle: "italic"
  },
  approvalStamp: {
    alignSelf: "flex-end",
    marginTop: 8,
    borderWidth: 2,
    borderColor: "#B88A4D",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "rgba(216,168,79,0.04)",
    transform: [{ rotate: "-7deg" }]
  },
  approvalStampText: {
    fontSize: 12,
    color: "#8A6330",
    letterSpacing: 1.1,
    textTransform: "uppercase",
    fontFamily: "Inter, system-ui, sans-serif",
    fontWeight: "700"
  },
  machineZone: {
    borderTopWidth: 1,
    borderTopColor: "#DDD4C5",
    paddingTop: 18,
    gap: 4
  },
  machineLine: {
    fontSize: 18,
    lineHeight: 22,
    color: "#68645B",
    fontFamily: "Inter, system-ui, sans-serif"
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
    borderBottomColor: "#DDD4C5"
  },
  summaryLabel: {
    fontSize: 12,
    color: "#68645B",
    textTransform: "uppercase",
    fontFamily: "Inter, system-ui, sans-serif",
    fontWeight: "600"
  },
  summaryValue: {
    fontSize: 16,
    lineHeight: 23,
    color: "#1D1B16",
    fontFamily: "Inter, system-ui, sans-serif"
  },
  phaseList: {
    gap: 14
  },
  phaseRow: {
    gap: 4
  },
  phaseName: {
    fontSize: 17,
    color: "#1D1B16",
    fontFamily: "Inter, system-ui, sans-serif",
    fontWeight: "700"
  },
  phaseDescription: {
    fontSize: 14,
    lineHeight: 21,
    color: "#68645B",
    fontFamily: "Inter, system-ui, sans-serif"
  }
});
