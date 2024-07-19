import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Alert } from "react-native";
import api from "../../services/axios";

const AdminFeedback = () => {
  const [feedback, setFeedback] = useState([]);

  const getFeedback = async () => {
    try {
      const response = await api.get("/feedback");
      console.log(response.data);
      setFeedback(response.data.feedback);
    } catch (error) {
      console.error("Error fetching feedback:", error);
      Alert.alert("Error fetching feedback.");
    }
  };

  useEffect(() => {
    getFeedback();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.feedbackText}>{item.feedback}</Text>
      <Text style={styles.dateText}>{item.created_at}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feedback</Text>
      {feedback.length > 0 ? (
        <FlatList
          data={feedback}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.list}
        />
      ) : (
        <Text style={styles.emptyText}>No feedback available</Text>
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
  },
  feedbackText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  dateText: {
    fontSize: 14,
    color: "#666",
  },
  emptyText: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginTop: 20,
  },
});

export default AdminFeedback;
