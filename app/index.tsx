import { Link } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const Index = () => {
    return (
        <View className="flex-1 justify-center items-center">
            <Image
                source={require("../assets/images/rizky-subagja-1k7TnX5GAww-unsplash.jpg")}
                className="flex-1 w-full h-full "
            />

            {/** HEADER */}
            <View className="absolute top-[15%] px-10">
                <Text className="text-white text-center font-[SemiBold] text-3xl mb-5">
                    <Text>Brewed</Text>
                    <Text> Awakenings</Text>
                </Text>
                <Text className="text-white text-center font-[Medium] text-sm">
                    Where every morning begins with a Fresh Brew and a Warm
                    Welcome
                </Text>
            </View>

            {/** SIGN IN BUTTON */}
            <Link href="/home" asChild>
                <Pressable className="absolute bottom-16  bg-white w-[80%] h-[80px] rounded-[25px] justify-center items-center">
                    <Text className="font-[Medium]">Start Explore</Text>
                </Pressable>
            </Link>
        </View>
    );
};

export default Index;

const styles = StyleSheet.create({});
