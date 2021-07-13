import React from "react";
import { Text } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

let customFonts = {
  affinity: require("../fonts/Affinity.otf"),
};

export default class AffinityText extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={[{ fontFamily: "affinity" }, this.props.style]}
        >
          {this.props.children}
        </Text>
      );
    } else {
      return <AppLoading />;
    }
  }
}
