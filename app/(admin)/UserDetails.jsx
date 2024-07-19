import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, Alert } from "react-native";
import { useRoute } from "@react-navigation/native";
import api, { baseURL } from "../../services/axios";

const UserDetails = () => {
  const route = useRoute();
  const { userId } = route.params;
  const [history, setHistory] = useState([]);

  const getUserHistory = async () => {
    try {
      const response = await api.get(`/prediction/history/${userId}`);
      setHistory(response.data.history);
    } catch (error) {
      console.error("Error fetching user history:", error);
      Alert.alert("Error fetching user history.");
    }
  };

  useEffect(() => {
    getUserHistory();
  }, [userId]);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image
        source={{
          uri: `${baseURL}/static/upload/${item.img_path}`,
        }}
        style={styles.image}
      />
      <Text style={styles.labelText}>Disease: {item.disease_type}</Text>
      <Text style={styles.labelText}>
        Confidence: {item.confidence_accuracy}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User History</Text>
      {history.length > 0 ? (
        <FlatList
          data={history}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.list}
        />
      ) : (
        <Text style={styles.emptyText}>No history available</Text>
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
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 15,
    borderRadius: 10,
  },
  labelText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
    textAlign: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginTop: 20,
  },
});

export default UserDetails;
