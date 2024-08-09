import { Stack } from "expo-router";
import React from "react";

const OrderLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="order"
                options={{
                    headerTitle: "Order",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    headerTitleStyle: {
                        fontFamily: "SemiBold",
                    },
                }}
            />
        </Stack>
    );
};

export default OrderLayout;
