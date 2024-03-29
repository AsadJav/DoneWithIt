import React from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import AppPicker from "./AppPicker";
import ErrorMessage from "./forms/ErrorMessage";
function AppFormPicker({ items, name, placeholder }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({});
export default AppFormPicker;
