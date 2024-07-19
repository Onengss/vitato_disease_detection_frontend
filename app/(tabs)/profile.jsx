import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import api from "../../services/axios";

const Profile = () => {
  const [user, setUser] = useState({});
  const [form, setForm] = useState({ feedback: "" });
  const [editMode, setEditMode] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const getUserDetails = async () => {
    try {
      const response = await api.get("/getUser");
      setUser(response.data);
      setUsername(response.data.username);
      setEmail(response.data.email);
    } catch (error) {
      console.error("Error fetching user details:", error);
      Alert.alert("Error fetching user details.");
    }
  };

  const updateUserDetails = async () => {
    try {
      await api.put("/updateUser", { username, email });
      Alert.alert("Profile updated successfully!");
      setEditMode(false);
      getUserDetails(); // Refresh user details
    } catch (error) {
      console.error("Error updating profile:", error);
      Alert.alert("Error updating profile.");
    }
  };

  const submitFeedback = async () => {
    try {
      await api.post("/getFeedback", { form });
      Alert.alert("Feedback sent successfully!");
      setForm({ feedback: "" });
    } catch (error) {
      console.error("Error sending feedback:", error);
      Alert.alert("Error sending feedback.");
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.profileContainer}>
        <Text style={styles.label}>Username</Text>
        {editMode ? (
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />
        ) : (
          <Text style={styles.value}>{user.username}</Text>
        )}
        <Text style={styles.label}>Email</Text>
        {editMode ? (
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        ) : (
          <Text style={styles.value}>{user.email}</Text>
        )}
        <Button
          title={editMode ? "Save" : "Edit Profile"}
          onPress={editMode ? updateUserDetails : () => setEditMode(true)}
          color="#4F8EF7"
        />
      </View>
      <View style={styles.feedbackContainer}>
        <Text style={styles.feedbackTitle}>Feedback</Text>
        <TextInput
          style={styles.feedbackInput}
          value={form.feedback}
          onChangeText={(text) => setForm({ ...form, feedback: text })}
        />
        <Button
          title="Submit Feedback"
          onPress={submitFeedback}
          color="#4F8EF7"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#161622",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20,
    marginTop: 25,
    textAlign: "center",
  },
  profileContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: "#555",
    marginTop: 10,
  },
  value: {
    fontSize: 18,
    color: "#333",
    fontWeight: "bold",
  },
  input: {
    fontSize: 18,
    color: "#333",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  feedbackContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },
  feedbackTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  feedbackInput: {
    height: 100,
    fontSize: 16,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    textAlignVertical: "top",
    marginBottom: 20,
  },
});

export default Profile;
