import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    zIndex: -999,
    width: 80,
    height: 80,
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#2D2D2D",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    width: "100%",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
  icon: {
    marginRight: 10,
  },
  registerButton: {
    backgroundColor: "#4A5FC1",
    padding: 12,
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
  },
  registerButtonDisabled: {
    backgroundColor: "#ACACE6",
  },
  registerButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  signInButton: {
    borderColor: "#4A5FC1",
    borderWidth: 1,
    padding: 12,
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
  },
  signInButtonText: {
    fontSize: 16,
    color: "#4A5FC1",
    fontWeight: "bold",
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 10,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  orText: {
    fontSize: 16,
    color: "#777",
    marginHorizontal: 10,
  },
  socialButtons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#A0A0A0",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: "45%",
    justifyContent: "center",
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  socialButtonText: {
    fontSize: 16,
    fontWeight: "500",
  },
  passwordToggle: {
    padding: 5,
  },
  noAccountText: {
    fontSize: 14,
    color: "#777",
    marginBottom: 10,
    textAlign: "center",
  },
  toastContainer: {
    position: "absolute",
    top: 50, // Adjust to push it further down if needed
    left: 0,
    right: 0,
    zIndex: 9999, // Ensures it's above everything else
    elevation: 10, // For Android
    alignItems: "center", // Ensures it's centered
  },
});
