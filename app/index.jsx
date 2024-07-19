import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';



import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="grid place-content-center mt-auto mb-auto px-16">
          <View className="relative mt-5 ">
            <Text className="text-3xl text-white font-bold text-center  ">Vitato App</Text>
          </View>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.navigate("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>

      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );

}



// import { Text, View, Button } from "react-native";
// import { router, Link } from "expo-router";
// import React from "react";

// export default function Index() {
//   const testClick = () => {
//     fetch("http://localhost:5000/", {
//       method: "GET",
//     })
//       .then(response => response.json())
//       .then(data => console.log(data))
//       .catch(error => console.error('Error:', error));
//   };

//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text>aif gemok</Text>
//       <Button title="Choose Image" onPress={testClick} />
//       <Link href="/sign-in" >test</Link>
//     </View>
//   );
// }
