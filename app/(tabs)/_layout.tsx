import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function TabsLayout() {
    return (
        <>
            <StatusBar style="light" />
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        position: "absolute",
                        marginHorizontal: 40,
                        height: 70,
                        bottom: 20,
                        borderRadius: 20,
                        elevation: 3,
                    },
                    tabBarShowLabel: false,
                    tabBarHideOnKeyboard: true,
                }}
            >
                <Tabs.Screen
                    name="home"
                    options={{
                        tabBarIcon: () => (
                            <Ionicons
                                name="home-outline"
                                size={24}
                                color={"gray"}
                            />
                        ),
                    }}
                />
            </Tabs>
        </>
    );
}
