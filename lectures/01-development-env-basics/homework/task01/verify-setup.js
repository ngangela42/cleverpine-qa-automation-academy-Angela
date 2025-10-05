function checkNodeVersion() {
  const version = process.version;
  console.log(`Node.js version: ${version}`);
  return version;
}

function checkNpmVersion() {
  const npmVersion = process.env.npm_version || "Not available";
  console.log(`NPM version: ${npmVersion}`);
  return npmVersion;
}

function displayEnvironmentInfo() {
  const nodeVersion = checkNodeVersion();
  const nmpVersion = checkNpmVersion();

  const platform = process.platform;
  const cwd = process.cwd();

  console.log(`Operation system (process.platform): ${platform}`);
  console.log(`Current working directory (process.cwd()): ${cwd}`);

  return { nodeVersion, npmVersion, platform, cwd };
}

displayEnvironmentInfo();
