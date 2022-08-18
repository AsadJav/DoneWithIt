import React from "react";
import { StyleSheet } from "react-native";
import Screen from "../Components/Screen";
import * as Yup from "yup";
import AppForm from "../Components/forms/AppForm";
import AppFormField from "../Components/forms/AppFormField";
import SubmitButton from "../Components/forms/SubmitButton";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
function RegisterScreen(props) {
  return (
    <Screen>
      <AppForm
        initialValues={{ name: "", password: "", email: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        <AppFormField
          name="name"
          placeholder="Name"
          maxLength={25}
          icon="account"
        />
        <AppFormField name="email" placeholder="Email" icon="mail" />
        <AppFormField
          name="password"
          placeholder="Password"
          icon="lock"
          secureTextEntry
        />
        <SubmitButton title="REGISTER" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({});
export default RegisterScreen;
