import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export function Card({ children }: { children: React.ReactNode }) {
  return <View style={styles.card}>{children}</View>;
}

export function ProgressDots({ total, current }: { total: number; current: number }) {
  return (
    <View style={styles.progressRow}>
      {Array.from({ length: total }).map((_, index) => {
        const active = index === current;
        return <View key={index} style={[styles.dot, active ? styles.dotActive : undefined]} />;
      })}
    </View>
  );
}

export function Button({
  label,
  description,
  onPress,
  disabled,
  variant = "primary"
}: {
  label: string;
  description?: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "ghost";
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        variantStyles[variant],
        disabled ? styles.disabled : undefined,
        pressed ? styles.pressed : undefined
      ]}
    >
      <Text style={[styles.buttonLabel, labelStyles[variant]]}>{label}</Text>
      {description ? (
        <Text style={[styles.buttonDescription, descriptionStyles[variant]]}>{description}</Text>
      ) : null}
    </Pressable>
  );
}

export function TextField({
  label,
  value,
  placeholder,
  onChangeText,
  keyboardType = "default",
  multiline = false,
  numberOfLines
}: {
  label: string;
  value: string;
  placeholder: string;
  onChangeText: (next: string) => void;
  keyboardType?: "default" | "email-address" | "url";
  multiline?: boolean;
  numberOfLines?: number;
}) {
  return (
    <View style={styles.fieldGroup}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        autoCapitalize={keyboardType === "email-address" || keyboardType === "url" ? "none" : "words"}
        style={[styles.input, multiline ? styles.inputMultiline : undefined]}
        multiline={multiline}
        numberOfLines={numberOfLines}
        textAlignVertical={multiline ? "top" : "center"}
        placeholderTextColor="#8B6B52"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF9F3",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E9DCCF",
    padding: 20,
    gap: 12
  },
  progressRow: {
    flexDirection: "row",
    gap: 8
  },
  dot: {
    flex: 1,
    height: 6,
    borderRadius: 999,
    backgroundColor: "#D6C3B2"
  },
  dotActive: {
    backgroundColor: "#C76A2B"
  },
  button: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    gap: 6
  },
  disabled: {
    opacity: 0.45
  },
  pressed: {
    opacity: 0.85
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: "700"
  },
  buttonDescription: {
    fontSize: 14,
    lineHeight: 20
  },
  fieldGroup: {
    gap: 8
  },
  fieldLabel: {
    fontSize: 13,
    fontWeight: "700",
    color: "#8B6B52",
    textTransform: "uppercase"
  },
  input: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D7B596",
    backgroundColor: "#FFF9F3",
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontSize: 16,
    color: "#181411"
  },
  inputMultiline: {
    minHeight: 132
  }
});

const variantStyles = StyleSheet.create({
  primary: {
    backgroundColor: "#181411"
  },
  secondary: {
    backgroundColor: "#F1E0D0",
    borderWidth: 1,
    borderColor: "#D7B596"
  },
  ghost: {
    backgroundColor: "transparent"
  }
});

const labelStyles = StyleSheet.create({
  primary: {
    color: "#FFF9F3"
  },
  secondary: {
    color: "#181411"
  },
  ghost: {
    color: "#7A4B2A"
  }
});

const descriptionStyles = StyleSheet.create({
  primary: {
    color: "#EADCCF"
  },
  secondary: {
    color: "#5A4A3D"
  },
  ghost: {
    color: "#7A4B2A"
  }
});
