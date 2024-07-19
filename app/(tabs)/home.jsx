import React, { useState } from "react";
import {
  View,
  Button,
  Image,
  StyleSheet,
  Alert,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useColorScheme } from "react-native";
import api from "../../services/axios";

export const { height, width } = Dimensions.get("window");

const Home = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState({});
  const isDarkMode = useColorScheme() === "dark";
  const backgroundStyle = {
    backgroundColor: isDarkMode ? "#161622" : "#161622",
  };
  const openCamera = async () => {
    // Request permission to access media library
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }

    // Launch image picker
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    if (!result.canceled) {
      setImage(result.assets[0]);
    }
  };

  const pickImage = async () => {
    // Request permission to access media library
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }

    // Launch image picker
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    if (!result.canceled) {
      setImage(result.assets[0]);
    }
  };

  const uploadImage = async () => {
    if (!image) {
      Alert.alert("No image selected", "Please select an image first");
      return;
    }

    try {
      const response = await api.post("/predict", image, {
        headers: { "Content-Type": "application/json" },
      });
      setResult(response.data.result);
      Alert.alert("Success", "Image uploaded successfully");
    } catch (error) {
      console.error("Error uploading image: ", error);
      Alert.alert("Upload Failed", "Image upload failed");
    }
  };
  const clearOutput = () => {
    setResult("");
    setImage("");
  };

  return (
    <View style={[backgroundStyle, styles.container]}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <ImageBackground
        blurRadius={10}
        source={{ uri: "background" }}
        style={styles.background}
      />
      <Text style={styles.title}>{"Vitato Disease \nPrediction App"}</Text>
      <TouchableOpacity onPress={clearOutput} style={styles.clearStyle}>
        <Image source={{ uri: "clean" }} style={styles.clearImage} />
      </TouchableOpacity>
      {image && <Image source={{ uri: image.uri }} style={styles.image} />}
      <Text style={styles.emptyText}>
        Use the buttons below to select a picture of a Vitato plant leaf.
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Camera" onPress={openCamera} />
        <Button title="Gallery" onPress={pickImage} />
      </View>

      <Button title="Upload Image" onPress={uploadImage} />
      {result?.disease_type && (
        <View style={styles.resultContainer}>
          <Text style={styles.labelText}>Disease: {result.disease_type}</Text>
          <Text style={styles.labelText}>
            Confidence: {result.confidence_accuracy}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300, // Adjust as needed
    height: 300, // Adjust as needed
    resizeMode: "cover", // or "contain" based on your preference
    borderRadius: 10,
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  emptyText: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginVertical: 20,
  },
  resultContainer: {
    marginVertical: 20,
  },
  labelText: {
    color: "#FFFFFF",
    fontSize: 18,
    textAlign: "center",
  },
  clearImage: { height: 40, width: 40, tintColor: "#FFF" },
  mainOuter: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: height / 1.6,
    alignSelf: "center",
  },
  clearStyle: {
    position: "absolute",
    top: 100,
    right: 30,
    tintColor: "#FFF",
    zIndex: 10,
  },
});

export default Home;
