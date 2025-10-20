import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface Props {
  label: string;

  position?: "left" | "right";

  //Methods
  onPress?: () => void;
  onLongPress?: () => void;
}

export default function Fab({
  label,
  onPress,
  onLongPress,
  position = "left",
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={({ pressed }) => [
        styles.floatingButtom,
        position === "right" ? styles.positionRight : styles.positionLeft,
        pressed ? { opacity: 0.7 } : { opacity: 1 },
      ]}
    >
      <Text style={{ color: "white", fontSize: 20 }}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  floatingButtom: {
    position: "absolute",
    bottom: 30,
    backgroundColor: "#5f4b90ff",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    elevation: 3,
    shadowRadius: 4,
  },
  positionRight: {
    right: 20,
  },
  positionLeft: {
    left: 20,
  },
});
