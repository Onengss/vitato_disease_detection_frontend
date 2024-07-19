import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants"; // Ensure you have these images defined in your constants

const Vitato = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.imageContainer}>
          <Image
            source={images.vitato_info}
            style={styles.mainImage}
            resizeMode="cover"
          />
          <Text style={styles.title}>Sweet Potato Vine</Text>
          <Text style={styles.subtitle}>
            A species of{" "}
            <Text style={styles.boldText}>Morning Glories (Ipomoea)</Text>
          </Text>
          <Text style={styles.description}>
            Also known as:{" "}
            <Text style={styles.boldText}>
              Sweetpotato, Kumara, Batate, Yam
            </Text>
          </Text>
          <Text style={styles.description}>
            Botanical name:{" "}
            <Text style={styles.italicText}>Ipomoea batatas</Text>
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Conditions</Text>
          <View style={styles.conditionRow}>
            <View style={styles.conditionBox}>
              <Text style={styles.conditionTitle}>Temperature</Text>
              <Text style={styles.conditionValue}>0 - 43 °C</Text>
            </View>
            <View style={styles.conditionBox}>
              <Text style={styles.conditionTitle}>Hardiness Zones</Text>
              <Text style={styles.conditionValue}>8-12</Text>
            </View>
          </View>
          <View style={styles.conditionRow}>
            <View style={styles.conditionBox}>
              <Text style={styles.conditionTitle}>Sunlight</Text>
              <Text style={styles.conditionValue}>Full sun</Text>
            </View>
            <View style={styles.conditionBox}>
              <Text style={styles.conditionTitle}>Soil</Text>
              <Text style={styles.conditionValue}>Loam, Garden soil</Text>
            </View>
          </View>
          <View style={styles.conditionRow}>
            <View style={styles.conditionBox}>
              <Text style={styles.conditionTitle}>Location</Text>
              <Text style={styles.conditionValue}>Indoor, Outdoor</Text>
            </View>
          </View>
          <View style={styles.recommended}>
            <Text style={styles.recommendedText}>Recommended</Text>
            <View style={styles.recommendedTags}>
              <Text style={styles.tag}>Kitchen</Text>
              <Text style={styles.tag}>Balcony</Text>
              <Text style={styles.tag}>Porch</Text>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Care</Text>
          <View style={styles.row}>
            <Text style={styles.subtitle}>Difficulty</Text>
            <Text style={styles.conditionValue}>Moderate</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.subtitle}>Toughness</Text>
            <Text style={styles.conditionValue}>Medium</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.subtitle}>Maintenance</Text>
            <Text style={styles.conditionValue}>Medium</Text>
          </View>
          <View style={styles.warningBox}>
            <Text style={styles.warningText}>
              Not suitable for beginners and those with less commitment.
            </Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Key Facts</Text>
          <View style={styles.row}>
            <Text style={styles.subtitle}>Toxicity</Text>
            <Text style={styles.conditionValue}>
              Non-toxic to humans & pets
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.subtitle}>Weed or not</Text>
            <Text style={styles.conditionValue}>Not reported as a weed</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.subtitle}>Invasiveness</Text>
            <Text style={styles.conditionValue}>Not reported as invasive</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.subtitle}>Plant Type</Text>
            <Text style={styles.conditionValue}>Vine, Herb</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.subtitle}>Lifespan</Text>
            <Text style={styles.conditionValue}>
              Perennial, Annual, Biennial
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.subtitle}>Planting Time</Text>
            <Text style={styles.conditionValue}>Early spring, Mid spring</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Sweet Potato Vine</Text>
            <Text style={styles.conditionTitle}>
              While most assume that the sweet potato vine is a potato, it is
              not considered nightshade. However, sweet potatoes and potatoes
              both belong to the order of Solanales. Its culinary use is wide
              and can be fried, baked, or boiled.
            </Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How-tos</Text>
          <View style={styles.row}>
            <Text style={styles.subtitle}>Water</Text>
            <Text style={styles.conditionValue}>Every 1 days (In May)</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.subtitle}>Fertilizer</Text>
            <Text style={styles.conditionValue}>Not necessary (In May)</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.subtitle}>Pruning</Text>
            <Text style={styles.conditionValue}>Spring, Summer, Autumn</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.subtitle}>Propagation</Text>
            <Text style={styles.conditionValue}>Use the tubers</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.subtitle}>Repotting</Text>
            <Text style={styles.conditionValue}>Early spring</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#161622", // Leaf green background color
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 20,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  mainImage: {
    width: "100%",
    height: 250,
    borderRadius: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#D3D3D3",
    textAlign: "center",
    marginTop: 7,
  },
  description: {
    fontSize: 14,
    color: "#D3D3D3",
    textAlign: "center",
    marginVertical: 5,
  },
  italicText: {
    fontStyle: "italic",
  },
  boldText: {
    fontWeight: "bold",
  },
  section: {
    marginVertical: 10,
    padding: 15,
    backgroundColor: "#2E8B57",
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },
  conditionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  conditionBox: {
    flex: 1,
    backgroundColor: "#4682B4",
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 5,
    alignItems: "center",
  },
  conditionTitle: {
    fontSize: 14,
    color: "#FFFFFF",
  },
  conditionValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 5,
  },
  recommended: {
    marginTop: 10,
  },
  recommendedText: {
    fontSize: 16,
    color: "#FFFFFF",
    marginBottom: 5,
  },
  recommendedTags: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  tag: {
    backgroundColor: "#32CD32",
    color: "#FFFFFF",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginRight: 10,
    marginBottom: 5,
    fontSize: 14,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  warningBox: {
    backgroundColor: "#FF6347",
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
  },
  warningText: {
    color: "#FFFFFF",
    fontSize: 14,
    textAlign: "center",
  },
});

export default Vitato;
