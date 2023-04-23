import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import FormInputGroup from "./FormInputGroup";
import { TitleInput } from "./TitleInput";
import { FormLabel } from "./FormLabel";
import { Textinput } from "./TextInput";
import FormInput from "./FormInput";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      <FormInputGroup >
        <FormInput text="Email" onChangeText={(text) => setEmail(text)} 
        value={email}/>
      </FormInputGroup>

    
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({});
