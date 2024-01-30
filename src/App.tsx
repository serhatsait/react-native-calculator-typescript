/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import type { PropsWithChildren } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text
} from "react-native";
import { handleEqual, handleNumber, initialState } from "./components/Calculator/Calculator.tsx";
import Button from "./components/Buttons/Button.tsx";
import Row from "./components/Row/Row.tsx";

export default class App extends React.Component<PropsWithChildren<{}>> {

  state = initialState;

  HandleNumber = (value: string) => {
    this.setState((state: any) => {
      return handleNumber(value, state);
    });
  };

  handleEqual = () => {
    this.setState((state: any) => {
      return handleEqual(state);
    });
  };

  handleOperator = (value: string) => {
    this.setState((state: any) => {
      return {
        operator: value,
        previousValue: state.currentValue,
        currentValue: "0"
      };
    });
  };

  clearValue = () => {
    this.setState(() => {
      return initialState;
    });
  };

  handleDot = () => {
    this.setState((state: any) => {
      if (!state.currentValue.includes(".")) {
        return { currentValue: `${state.currentValue}.` };
      }

      return {};
    });
  };

  positiveNegative = () => {
    this.setState((state: any) => {
      const currentValue = parseFloat(state.currentValue);

      if (currentValue === 0) {
        return {};
      }

      return { currentValue: -currentValue };
    });
  };

  handlePercentage = () => {
    this.setState((state: any) => {
      const currentValue = parseFloat(state.currentValue);

      if (currentValue === 0) {
        return {};
      }

      return { currentValue: currentValue / 100 };
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>

        <Text style={styles.value}>
          {parseFloat(this.state.currentValue).toLocaleString()}
        </Text>
        <Row>
          <Button text="C" theme="secondary" onPress={() => this.clearValue()} />
          <Button text="+/-" theme="secondary" onPress={() => this.positiveNegative()} />
          <Button text="%" theme="secondary" onPress={() => this.handlePercentage()} />
          <Button text="/" theme="accent" onPress={() => this.handleOperator("/")} />
        </Row>
        <Row>
          <Button text="7" onPress={() => this.HandleNumber("7")} />
          <Button text="8" onPress={() => this.HandleNumber("8")} />
          <Button text="9" onPress={() => this.HandleNumber("9")} />
          <Button text="x" theme="accent" onPress={() => this.handleOperator("*")} />
        </Row>
        <Row>
          <Button text="4" onPress={() => this.HandleNumber("4")} />
          <Button text="5" onPress={() => this.HandleNumber("5")} />
          <Button text="6" onPress={() => this.HandleNumber("6")} />
          <Button text="-" theme="accent" onPress={() => this.handleOperator("-")} />
        </Row>
        <Row>
          <Button text="1" onPress={() => this.HandleNumber("1")} />
          <Button text="2" onPress={() => this.HandleNumber("2")} />
          <Button text="3" onPress={() => this.HandleNumber("3")} />
          <Button text="+" theme="accent" onPress={() => this.handleOperator("+")} />
        </Row>
        <Row>
          <Button text="0" size="double" onPress={() => this.HandleNumber("0")} />
          <Button text="." onPress={() => this.handleDot()} />
          <Button text="=" theme="primary" onPress={() => this.handleEqual()} />
        </Row>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end",
  },
  value: {
    color: "#fff",
    fontSize: 42,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
});
