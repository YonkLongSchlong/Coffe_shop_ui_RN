import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const [loaded, error] = useFonts({
        Thin: require("../assets/fonts/Sora-Thin.ttf"),
        Light: require("../assets/fonts/Sora-Light.ttf"),
        Regular: require("../assets/fonts/Sora-Regular.ttf"),
        Medium: require("../assets/fonts/Sora-Medium.ttf"),
        SemiBold: require("../assets/fonts/Sora-SemiBold.ttf"),
        Bold: require("../assets/fonts/Sora-Bold.ttf"),
        ExtraBold: require("../assets/fonts/Sora-ExtraBold.ttf"),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="index" />
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="product" />
            </Stack>
        </>
    );
};

export default RootLayout;

const styles = StyleSheet.create({});
