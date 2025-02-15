import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Toast from "react-native-toast-message";
import styles from "../styles/RegisterScreenStyles";

const API_URL = "http://localhost";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [repeatPasswordVisible, setRepeatPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  // Email validation function
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // Form validation checks
  const isFormValid = name.trim() !== "" && isValidEmail(email) && password === repeatPassword;

  const handleRegister = async () => {
    if (!isFormValid) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Please fill in all fields correctly.",
      });
      return;
    }

    setLoading(true);

    try {
        const username = name;
        const response = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        Toast.show({
          type: "success",
          text1: "Registered successfully",
          text2: data.rnd_text
        });
      } else {
        throw new Error(data.message || "Registration failed. Try again.");
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Toast />

      {/* Logo */}
      <Image source={require("../assets/images/logo_icon.png")} style={styles.logo} />

      {/* Register Text */}
      <Text style={styles.title}>Sign Up</Text>

      {/* Name Input */}
      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={20} color="#A0A0A0" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#A0A0A0"
        />
      </View>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#A0A0A0" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#A0A0A0"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#A0A0A0" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#A0A0A0"
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity
          onPress={() => setPasswordVisible(!passwordVisible)}
          style={styles.passwordToggle}
        >
          <Ionicons
            name={passwordVisible ? "eye-off-outline" : "eye-outline"}
            size={20}
            color="#A0A0A0"
          />
        </TouchableOpacity>
      </View>

      {/* Repeat Password Input */}
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#A0A0A0" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Repeat Password"
          value={repeatPassword}
          onChangeText={setRepeatPassword}
          placeholderTextColor="#A0A0A0"
          secureTextEntry={!repeatPasswordVisible}
        />
        <TouchableOpacity
          onPress={() => setRepeatPasswordVisible(!repeatPasswordVisible)}
          style={styles.passwordToggle}
        >
          <Ionicons
            name={repeatPasswordVisible ? "eye-off-outline" : "eye-outline"}
            size={20}
            color="#A0A0A0"
          />
        </TouchableOpacity>
      </View>

      {/* Register Button */}
      <TouchableOpacity
        style={[styles.registerButton, !isFormValid && styles.registerButtonDisabled]}
        disabled={!isFormValid || loading}
        onPress={handleRegister}
      >
        <Text style={styles.registerButtonText}>{loading ? "Signing up..." : "Sign Up"}</Text>
      </TouchableOpacity>

      {/* OR Divider */}
        <View style={styles.orContainer}>
            <View style={styles.orLine} />
            <Text style={styles.orText}>Or</Text>
            <View style={styles.orLine} />
        </View>

        {/* Social Logins */}
        <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.socialButton}>
            <Image source={require("../assets/images/google_icon.png")} style={styles.googleIcon} />
            <Text style={styles.socialButtonText}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-facebook" size={20} color="#1877F2" />
            <Text style={styles.socialButtonText}>Facebook</Text>
            </TouchableOpacity>
        </View>

        {/* Already have an account? */}
        <Text style={styles.noAccountText}>Already have an account?</Text>

      {/* Already have an account? (Login Button) */}
      <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
