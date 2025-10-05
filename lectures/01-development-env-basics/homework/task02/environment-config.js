const defaultEnvironmentConfig = {
  baseUrl: "https://demo-qa-site.com/development",
  timeout: 15000,
  debugMode: true,
};

function loadEnvironmentConfig() {
  console.log(`Loading default configuration`);
  console.log(`Configuration details:`, defaultEnvironmentConfig);
  return defaultEnvironmentConfig;
}

loadEnvironmentConfig();
