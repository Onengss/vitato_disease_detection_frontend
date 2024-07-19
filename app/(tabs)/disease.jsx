import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const diseases = [
  {
    name: "Caterpillar",
    icon: require("../../assets/icons/caterpillar.jpg"),
    description:
      "Caterpillars are fleshy moth or butterfly larvae that come in an array of colors, patterns, and even hairstyles. They chew on leaves and flower petals, creating large, irregular holes.",
    symptoms: "Holes in leaves and eaten edges. Damaged flowers.",
    identification:
      "Look for caterpillars on stems and under leaves. Check for white, yellow, or brown eggs on leaves.",
    treatment:
      "For severe cases: Use Bacillus thuringiensis (Bt) insecticide, spray chili extract on plants, introduce parasitic wasps. For less severe cases: Hand-pick caterpillars and drop them in soapy water, dust plants with diatomaceous earth.",
    prevention:
      "Regularly check plants for eggs. Use insect netting to cover plants. Apply diatomaceous earth early in the season. Encourage plant diversity to attract predatory insects.",
  },
  {
    name: "Sap-Sucking Insects",
    icon: require("../../assets/icons/sucking.jpg"),
    description:
      "Sap-sucking insects can create dense clusters of small yellow or white spots on the leaves.",
    symptoms:
      "Tiny yellow or white spots on leaves. Spots that look like mold or mildew but don't wipe off.",
    identification:
      "Look for small insects on the undersides of leaves. Check for tiny eggs on leaves.",
    commonPests:
      "Aphids, squash bugs, scale bugs, leafhoppers, whiteflies, mites, mealybugs, and more.",
    treatment:
      "Hand-Pick and Remove Eggs: Inspect plants and drop insects in soapy water. Squish egg clusters found on leaves. Use Insecticide: Use insecticidal soap for small infestations. For larger outbreaks, use a stronger spray. Introduce Natural Predators: Release ladybugs or praying mantises near infected plants. Create habitats to attract beneficial insects.",
    prevention:
      "Keep plants healthy with proper water, sunlight, and fertilizer. Avoid over-fertilizing with nitrogen. Remove weeds and tall grasses around plants.",
  },
  {
    name: "Leaf Miners",
    icon: require("../../assets/icons/miner.jpg"),
    description:
      "Leaf miners scar the leaves with curved white streaks or rounded white spots with brown centers.",
    symptoms:
      "Clear or white trails on leaves. Hollow and dry patches on leaves.",
    identification:
      "Look for tiny larvae inside leaves. Trails start narrow and become wide patches.",
    treatment:
      "For severe cases: Spray organic insecticide (azadirachtin from neem seeds), use synthetic insecticide (spinosad products), introduce parasitic wasps or Syrphid flies. For less severe cases: Prune and dispose of infected leaves.",
    prevention:
      "Use floating row covers to exclude adults. Remove weeds and debris from the garden. Inspect new plants for leaf miners before adding them. Avoid broad-spectrum pesticides to protect beneficial insects.",
  },
  {
    name: "Infected",
    icon: require("../../assets/icons/infacted.jpg"),
    description: "Infected plants show symptoms of disease.",
    symptoms: "Discolored leaves, wilting.",
    treatment: "Remove infected parts, apply fungicides.",
    prevention: "Ensure proper drainage, avoid overcrowding plants.",
  },
];

const Disease = () => {
  const navigation = useNavigation();

  const navigateToDetail = (disease) => {
    navigation.navigate("DiseaseDetail", { disease });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Common Plant Diseases</Text>
      <View style={styles.grid}>
        {diseases.map((disease, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => navigateToDetail(disease)}
          >
            <View style={styles.cardInner}>
              <Image source={disease.icon} style={styles.icon} />
              <Text style={styles.cardText}>{disease.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161622",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#FFFFFF",
    marginTop: 40,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    aspectRatio: 1,
    marginBottom: 20,
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "#F5F5F5",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  cardInner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 10,
    resizeMode: "contain",
  },
  cardText: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    color: "#333333",
  },
});

export default Disease;
