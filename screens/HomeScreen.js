import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, View } from "react-native";

const HomeScreen = () => {
  return (
    <View className="flex-1 relative">
      <StatusBar style="light" />
      <Image
        source={require("../assets/images/navy.jpg")}
        className="absolute h-full w-full"
        blurRadius={70}
      />
    </View>
  );
};

export default HomeScreen;
