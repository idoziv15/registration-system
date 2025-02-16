# Variables
PROJECT_DIR=frontend-mobile
EXPO_CMD=npx expo

# Install dependencies
install:
	cd $(PROJECT_DIR) && npm install

# Start Expo server with tunnel
start:
	cd $(PROJECT_DIR) && $(EXPO_CMD) start --tunnel

# Start Expo in development mode
start-dev:
	cd $(PROJECT_DIR) && $(EXPO_CMD) start --dev-client

# Start Expo for web
start-web:
	cd $(PROJECT_DIR) && $(EXPO_CMD) start --web

# Start on iOS simulator
start-ios:
	cd $(PROJECT_DIR) && $(EXPO_CMD) start --ios

# Start on Android emulator
start-android:
	cd $(PROJECT_DIR) && adb reverse tcp:8081 tcp:8081 && $(EXPO_CMD) start --android

# Clean project (remove node_modules and reinstall)
clean:
	rm -rf $(PROJECT_DIR)/node_modules $(PROJECT_DIR)/package-lock.json
	cd $(PROJECT_DIR) && npm install

# Linting and formatting
lint:
	cd $(PROJECT_DIR) && npx eslint .

format:
	cd $(PROJECT_DIR) && npx prettier --write .

# Help
help:
	@echo "Makefile for frontend-mobile"
	@echo ""
	@echo "Usage:"
	@echo "  make install       Install dependencies"
	@echo "  make start         Start Expo server with tunnel"
	@echo "  make start-dev     Start Expo in development mode"
	@echo "  make start-web     Start Expo for web"
	@echo "  make start-ios     Start Expo on iOS simulator"
	@echo "  make start-android Start Expo on Android emulator"
	@echo "  make clean         Remove node_modules and reinstall"
	@echo "  make lint          Run ESLint for code quality checks"
	@echo "  make format        Run Prettier to format code"
