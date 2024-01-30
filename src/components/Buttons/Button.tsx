import { Dimensions, Text, StyleSheet, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from "react-native";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

interface ButtonStyles {
  button: StyleProp<ViewStyle>;
  buttonDouble: StyleProp<ViewStyle>;
  buttonSecondary: StyleProp<ViewStyle>;
  buttonAccent: StyleProp<ViewStyle>;
  text: StyleProp<TextStyle>;
  textSecondary: StyleProp<TextStyle>;
}

const baseButtonStyles: StyleProp<ViewStyle> = {
  backgroundColor: "#333333",
  flex: 1,
  height: Math.floor(buttonWidth - 10),
  alignItems: "center",
  justifyContent: "center",
  borderRadius: Math.floor(buttonWidth),
  margin: 5,
};

export const styles: ButtonStyles = StyleSheet.create({
  button: baseButtonStyles,
  buttonDouble: {
    ...baseButtonStyles,
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 40,
  },
  buttonSecondary: {
    backgroundColor: "#a6a6a6",
  },
  buttonAccent: {
    backgroundColor: "#f09a36",
  },
  text: {
    color: "#fff",
    fontSize: 25,
  },
  textSecondary: {
    color: "#060606",
  },
});

type Props = {
  onPress: () => void;
  text: string;
  size?: string;
  theme?: string;
};

const Button = ({ onPress, text, size, theme }: Props) => {
  const buttonStyles: StyleProp<ViewStyle>[] = [styles.button];
  const textStyles: StyleProp<TextStyle>[] = [styles.text];

  if (size === "double") {
    buttonStyles.push(styles.buttonDouble);
  }

  if (theme === "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === "accent") {
    buttonStyles.push(styles.buttonAccent);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
