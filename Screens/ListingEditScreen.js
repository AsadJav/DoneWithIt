import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import useLocation from "../app/hooks/useLocation";
import AppFormPicker from "../Components/AppFormPicker";
import AppForm from "../Components/forms/AppForm";
import AppFormField from "../Components/forms/AppFormField";
import FormImagePicker from "../Components/forms/FormImagePicker";
import SubmitButton from "../Components/forms/SubmitButton";
import Screen from "../Components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select atleast one image"),
});

const categories = [
  { label: "furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];
function ListingEditScreen(props) {
  const Location = useLocation();
  return (
    <Screen>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(Location)}
      >
        <FormImagePicker name="images" />
        <AppFormField name="title" placeholder="Title" maxLength={255} />
        <AppFormField
          name="price"
          placeholder="Price"
          keyboardType="numeric"
          maxLength={8}
        />
        <AppFormPicker
          items={categories}
          placeholder="Category"
          name="category"
        />
        <AppFormField
          name="description"
          placeholder="Description"
          multiline
          numberOfLines={3}
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({});
export default ListingEditScreen;
