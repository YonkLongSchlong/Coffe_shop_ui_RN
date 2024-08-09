import { Stack } from "expo-router";
import React from "react";

const ProductLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="[id]"
                options={{
                    headerTitle: "Details",
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

export default ProductLayout;
