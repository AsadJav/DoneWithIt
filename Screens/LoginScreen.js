import React from "react";
import { Image, StyleSheet } from "react-native";

import Screen from "../Components/Screen";
import { Formik } from "formik";
import * as Yup from "yup";

import AppFormField from "../Components/forms/AppFormField";
import SubmitButton from "../Components/forms/SubmitButton";
import AppForm from "../Components/forms/AppForm";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          keybordType="email-address"
          textContentType="emailAddress"
          icon="email"
          name="email"
          placeholder="Email"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          keybordType="password"
          textContentType="password"
          secureTextEntry
          icon="lock"
          placeholder="Password"
          name="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 40,
  },
});
export default LoginScreen;
