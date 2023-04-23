import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  FlatList,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
import { Normalize } from "../../Components/Global/Normalize";

const { width } = Dimensions.get("window");

export const SelectlForm = ({ options, onChangeSelect, text, label }) => {
  const [select, setSelect] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [txt, setTxt] = useState(text);

  function renderOption(item) {
    return (
      <TouchableOpacity
        style={[
          styles.OptionContainer,
          { backgroundColor: item.id === select ? "#eee" : "#fff" },
        ]}
        onPress={() => {
          onChangeSelect(item.name);
          setSelect(item.name);
          setTxt(item.name);
          setModalVisible(false);
          // console.log(item.name);
        }}
      >
        <Text
          style={[
            styles.OptionText,
            { fontWeight: item.id === select ? "900" : "normal" },
          ]}
        >
          {item.name}
        </Text>
        {item.id === select && (
          <Ionicons name="check" size={20} color="green" />
        )}
      </TouchableOpacity>
    );
  }

  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.Text} numberOfLines={1}>
          {txt}
        </Text>
        <View style={styles.Icon}>
          <Ionicons
            name="chevron-down"
            size={30}
            color="rgba(255, 255, 255, 0.5)"
          />
        </View>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.HeaderModal}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Ionicons name="chevron-left" size={26} color="red" />
          </TouchableOpacity>
          <Text style={styles.ModalTitle}>{text}</Text>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={styles.ModalCancel}>Cancelar</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={options}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => renderOption(item)}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Normalize(290),
    height: 66,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 18,
    color: "#C9C9C9",
    paddingRight: 20,
    paddingBottom: 2,
    margin: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 23,
  },
  Icon: {
    marginRight: 10,
  },
  Text: {
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: 14,
    width: 260,
    paddingLeft: 5,
  },
  HeaderModal: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    paddingBottom: 12,
    marginTop: 50,
  },
  ModalTitle: {
    fontSize: 18,
    color: "#555",
  },
  ModalCancel: {
    fontSize: 14,
    color: "blue",
    fontWeight: "bold",
  },
  OptionContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    padding: 10,
  },
  OptionText: {
    fontSize: 16,
    color: "#555",
  },
});
