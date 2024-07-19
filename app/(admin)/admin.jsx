import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/axios";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const navigation = useNavigation();

  const getUserDetails = async () => {
    try {
      const response = await api.get("/users");
      setUsers(response.data.users);
    } catch (error) {
      console.error("Error fetching user details:", error);
      Alert.alert("Error fetching user details.");
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const handleUserPress = (userId) => {
    navigation.navigate("UserDetails", { userId });
  };

  const deleteUser = async (userId) => {
    try {
      await api.delete(`/users/${userId}`);
      setUsers(users.filter((user) => user.id !== userId));
      Alert.alert("User deleted successfully.");
    } catch (error) {
      console.error("Error deleting user:", error);
      Alert.alert("Error deleting user.");
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => handleUserPress(item.id)}>
        <Text style={styles.usernameText}>{item.username}</Text>
        <Text style={styles.emailText}>{item.email}</Text>
      </TouchableOpacity>
      <Button
        title="Delete"
        onPress={() => deleteUser(item.id)}
        color="#ff0000"
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Users</Text>
      {users.length > 0 ? (
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.list}
        />
      ) : (
        <Text style={styles.emptyText}>No users available</Text>
      )}
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
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20,
    marginTop: 30,
    textAlign: "center",
  },
  list: {
    paddingBottom: 20,
  },
  itemContainer: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  usernameText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
    textAlign: "center",
  },
  emailText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginTop: 20,
  },
});

export default Admin;
