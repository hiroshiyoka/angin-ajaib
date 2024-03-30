import { StatusBar } from "expo-status-bar";
import {
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";

const HomeScreen = () => {
  return (
    <View className="flex-1 relative">
      <StatusBar style="light" />
      <Image
        source={require("../assets/images/navy.jpg")}
        className="absolute h-full w-full"
        blurRadius={70}
      />
      <SafeAreaView className="flex flex-1">
        <View style={{ height: "7%" }} className="mx-4 relative z-50">
          <View className="flex justify-end items-center rounded-full">
            <TextInput
              className="pl-6 pb-1 h-10 flex-1 text-base text-white"
              placeholder="Search City"
              placeholderTextColor={"lightgray"}
            />
            <TouchableOpacity className="rounded-full p-3 m-1">
              <MagnifyingGlassIcon size="25" color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
