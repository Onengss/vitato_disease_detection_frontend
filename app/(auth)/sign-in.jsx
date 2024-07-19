import { View, Text, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link, useRouter } from "expo-router";
import api from "../../services/axios";
import { storeObject } from "../../constants/utils/storage";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const submit = async () => {
    setIsSubmitting(true);
    try {
      const response = await api.post("/signin", form);
      storeObject("token", response.data.token);
      console.log(response.data);
      if (response.data.role === "admin") {
        router.push("admin");
      } else {
        router.push("home");
      }

      // console.log("Sign in successful", response.data);
      // Navigate to the home page upon successful login
    } catch (error) {
      console.error("Error signing in", error.response?.data || error.message);
      // Display an alert or update a state to show an error message
      Alert.alert("Error", error.response?.data?.message || "Error signing in");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Log in to Vitato disease
          </Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            secureTextEntry
          />
          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link href="/sign-up" className="text-lg font-psemibold text-green">
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
