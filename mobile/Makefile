# Detect OS
OS := $(shell uname 2>/dev/null || echo Windows)

# Setup Expo + Expo Router + Dependencies
setup:
	@echo "🔍 Checking dependencies..."
ifeq ($(OS), Windows)
	@where node >nul 2>&1 || (echo "❌ Node.js is not installed. Installing..." && make install_node)
	@where npm >nul 2>&1 || (echo "❌ npm is missing. Installing..." && make install_npm)
	@where expo >nul 2>&1 || (echo "❌ Expo CLI is missing. Installing..." && make install_expo)
else
	@command -v node >/dev/null 2>&1 || (echo "❌ Node.js is not installed. Installing..." && make install_node)
	@command -v npm >/dev/null 2>&1 || (echo "❌ npm is missing. Installing..." && make install_npm)
	@command -v expo >/dev/null 2>&1 || (echo "❌ Expo CLI is missing. Installing..." && make install_expo)
endif
	@echo "✅ All dependencies installed!"
	@echo "🚀 Installing project dependencies..."
	npm install
	@echo "📦 Installing required packages..."
	@make install_dependencies
	@echo "✅ Setup complete! Run 'make start' to launch the app."

# Install Node.js
install_node:
ifeq ($(OS), Windows)
	@echo "🌍 Installing Node.js (Windows)..."
	@powershell -Command "& {Invoke-WebRequest -Uri 'https://nodejs.org/dist/v18.16.1/node-v18.16.1-x64.msi' -OutFile 'node.msi'; Start-Process 'node.msi' -Wait}"
else
	@echo "🌍 Installing Node.js (macOS/Linux)..."
	@curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
	@sudo apt-get install -y nodejs
endif
	@echo "✅ Node.js installed!"

# Install npm (if missing)
install_npm:
	@echo "📦 Installing npm..."
	@npm install -g npm
	@echo "✅ npm installed!"

# Install Expo CLI globally
install_expo:
	@echo "📦 Installing Expo CLI..."
	@npm install -g expo-cli
	@echo "✅ Expo CLI installed!"

# Install Required Dependencies
install_dependencies:
	npm install @react-navigation/native
	npm install @react-navigation/stack
	npm install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons @react-native-community/masked-view
	npm install redux react-redux
	npm install react-native-toast-message
	npm install expo-router
	@echo "✅ All dependencies installed!"

# Run the Expo development server
start:
	@echo "🚀 Starting Expo..."
	@npx expo start

# Run the Expo app on Android Emulator
android:
	@echo "📱 Running on Android..."
	@npx expo run:android

# Run the Expo app on iOS Simulator (macOS only)
ios:
	@echo "🍏 Running on iOS..."
	@npx expo run:ios

# Build APK for Android
build-android:
	@echo "📦 Building APK for Android..."
	@npx expo build:android

# Build IPA for iOS (macOS only)
build-ios:
	@echo "📦 Building IPA for iOS..."
	@npx expo build:ios

# Clean the project (remove node_modules and reinstall)
clean:
	@echo "🧹 Cleaning project..."
	@rm -rf node_modules package-lock.json
	@npm install
	@echo "✅ Project cleaned!"

# Reset Expo cache and Metro Bundler
reset:
	@echo "🧹 Resetting Expo..."
	@npx expo start -c

# Help command to show available options
help:
	@echo "Available commands:"
	@echo "  make setup          - Install dependencies & setup the project"
	@echo "  make install_dependencies - Install React Navigation, Redux, Toast, Expo Router"
	@echo "  make start          - Start the Expo app"
	@echo "  make android        - Run on Android emulator/device"
	@echo "  make ios            - Run on iOS simulator (macOS only)"
	@echo "  make build-android  - Build APK for Android"
	@echo "  make build-ios      - Build IPA for iOS (macOS only)"
	@echo "  make clean          - Remove node_modules and reinstall dependencies"
	@echo "  make reset          - Clear Metro Bundler cache"
	@echo "  make install_expo   - Install Expo CLI globally"
	@echo "  make install_node   - Install Node.js"
	@echo "  make install_npm    - Install npm globally"
