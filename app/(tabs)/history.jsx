import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import api, { baseURL } from "../../services/axios";

const History = () => {
  const [history, setHistory] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const getHistory = async () => {
    try {
      const response = await api.get("/prediction/history");
      setHistory(response.data.history);
    } catch (error) {
      console.error("Error fetching history data:", error);
    }
  };

  const deleteItem = async (id) => {
    try {
      const response = await api.delete(`/prediction/history/${id}`);
      setHistory((prevHistory) => prevHistory.filter((item) => item.id !== id));
      setSelectedItem(null);
    } catch (error) {
      console.error("Error deleting history item:", error);
      alert("Failed to delete item. Please try again later.");
    }
  };

  useEffect(() => {
    getHistory();
  }, []);

  const handleImagePress = (item) => {
    setSelectedItem(item.id === selectedItem ? null : item.id);
  };

  const handleDeletePress = (item) => {
    Alert.alert(
      "Delete Confirmation",
      "Are you sure you want to delete this item?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => deleteItem(item.id),
          style: "destructive",
        },
      ]
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => handleImagePress(item)}>
        <Image
          source={{
            uri: `${baseURL}static/upload/${item.img_path}`,
          }}
          style={[
            styles.image,
            selectedItem === item.id && styles.selectedImage,
          ]}
        />
      </TouchableOpacity>
      <Text style={styles.labelText}>Disease: {item.disease_type}</Text>
      <Text style={styles.labelText}>
        Confidence: {item.confidence_accuracy}
      </Text>
      {selectedItem === item.id && (
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDeletePress(item)}
        >
          <Ionicons name="trash-outline" size={20} color="#fff" />
          <Text style={[styles.deleteText, { marginLeft: 5 }]}>Delete</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prediction History</Text>
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
  selectedImage: {
    borderWidth: 2,
    borderColor: "#007bff",
  },
  labelText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
    textAlign: "center",
  },
  deleteButton: {
    marginTop: 10,
    backgroundColor: "#dc3545",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  deleteText: {
    color: "#fff",
    textAlign: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginTop: 20,
  },
});

export default History;
