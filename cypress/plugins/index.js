function setViewPortsAndUserAgent(config) {
  let deviceConfig;
  if (config.env.viewportType === "desktop") {
    deviceConfig = {
      viewportWidth: 1280,
      viewportHeight: 800,
      userAgent:
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    };
  } else if (config.env.viewportType === "mobile") {
    deviceConfig = {
      viewportWidth: 375,
      viewportHeight: 667,
      userAgent:
        "Mozilla/5.0 (iPhone; CPU iPhone OS 16_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/112.0.5615.46 Mobile/15E148 Safari/604.1",
    };
  }
  return deviceConfig;
}
module.exports = (on, config) => {
  const viewportConfig = setViewPortsAndUserAgent(config);

  config = Object.assign({}, viewportConfig);

  return config;
};
