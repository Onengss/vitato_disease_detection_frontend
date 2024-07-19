import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import { useRoute } from "@react-navigation/native";

const DiseaseDetail = () => {
  const route = useRoute();
  const { disease } = route.params;

  const renderImageItem = ({ item }) => (
    <Image source={{ uri: item }} style={styles.image} />
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{disease.name}</Text>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.detailText}>{disease.description}</Text>

        <Text style={styles.sectionTitle}>Symptoms</Text>
        <Text style={styles.detailText}>{disease.symptoms}</Text>

        <Text style={styles.sectionTitle}>Identification</Text>
        <Text style={styles.detailText}>{disease.identification}</Text>

        {disease.commonPests && (
          <>
            <Text style={styles.sectionTitle}>Common Pests</Text>
            <Text style={styles.detailText}>{disease.commonPests}</Text>
          </>
        )}

        <Text style={styles.sectionTitle}>Solutions</Text>
        <Text style={styles.detailText}>{disease.treatment}</Text>

        <Text style={styles.sectionTitle}>Prevention</Text>
        <Text style={styles.detailText}>{disease.prevention}</Text>

        <FlatList
          data={disease.images}
          renderItem={renderImageItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#161622", // Light gray background
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  content: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 24,
    color: "#555",
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  detailText: {
    fontSize: 18,
    color: "#333",
    lineHeight: 24,
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginRight: 10,
    borderRadius: 10,
  },
});

export default DiseaseDetail;
