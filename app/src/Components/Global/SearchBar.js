import React from "react";

import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import { Icon } from "react-native-elements";

import { SearchBar } from "react-native-screens";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFocused: false,
      keyword: "",
    };
    this._input_boxtranslate_x = new Value(width);
    this._back_button_opacity = new Value(0);
    this._content_translate_y = new value(height);
    this._content_opacity = new Value(0);
  }

  render() {
    return (
      <>
        <SafeAreaView style={safe_area}>
          <view style={styles.safe_area}>
            <view style={styles.safe_area_inner}>
              <TouchableHighlight
                activeOpacity={1}
                underlayColor={"#d6ff00"}
                onPress={this._onFocus}
                style={styles.search_icon_box}
              >
                <Icon name="search" size={22} color="#000000" />
              </TouchableHighlight>
            </view>
          </view>
        </SafeAreaView>
      </>
    );
  }
}

export default SearchBar;

const styles = StyleSheet.create({
  safe_area: {
    zIndex: 1000,
  },
});
