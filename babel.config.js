const path = require("path");

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["module:metro-react-native-babel-preset", "babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      [
        "module-resolver",
        {
          root: ["."],
          resolvePath(sourcePath, currentFile) {
            if (
              sourcePath === "react-native" &&
              !(
                (
                  currentFile.includes("node_modules/react-native/") || // macOS/Linux paths
                  currentFile.includes("node_modules\\react-native\\")
                ) // Windows path
              ) &&
              !(
                currentFile.includes("resolver/react-native/") ||
                currentFile.includes("resolver\\react-native\\")
              )
            ) {
              return path.resolve(__dirname, "resolver/react-native");
            }
            return undefined;
          },
        },
      ],
    ],
  };
};
