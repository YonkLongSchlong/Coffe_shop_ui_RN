import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import PagerView from "react-native-pager-view";
import Animated, { FadeInDown, FadeInRight } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const carasell = [
    {
        key: 1,
        image: require("@/assets/images/alberto-bogo-LpLGzfo1JjY-unsplash.jpg"),
    },
    {
        key: 2,
        image: require("@/assets/images/alex-padurariu-VxtWBOQjGdI-unsplash.jpg"),
    },
    {
        key: 3,
        image: require("@/assets/images/jess-bailey-lZkdoL_qMBA-unsplash.jpg"),
    },
    {
        key: 4,
        image: require("@/assets/images/toa-heftiba-1CAFw4Yz_4w-unsplash.jpg"),
    },
];

const categories = [
    {
        key: 1,
        name: "Expresso",
    },
    {
        key: 2,
        name: "Black",
    },
    {
        key: 3,
        name: "Machiato",
    },
    {
        key: 4,
        name: "Cappuchino",
    },
    {
        key: 5,
        name: "Latte",
    },
    {
        key: 6,
        name: "Frapper",
    },
];

const Home = () => {
    const [selected, SetSelected] = useState("Expresso");

    return (
        <Animated.View className="flex-1" entering={FadeInDown.duration(500)}>
            <SafeAreaView className="bg-neutral-800"></SafeAreaView>
            <View className="flex-1 justify-center items-center">
                <ScrollView
                    contentContainerStyle={{
                        flexGrow: 1,
                        alignItems: "center",
                        paddingBottom: 100,
                    }}
                    showsVerticalScrollIndicator={false}
                >
                    {/** ---------- UPPER PART ----------  */}
                    <View className="w-full h-[310] bg-neutral-800 pt-8 px-8">
                        {/** ---------- HEADER AND AVATAR CONTAINER ---------- */}
                        <Animated.View
                            entering={FadeInDown.duration(500).delay(200)}
                            className="flex-row items-center justify-between"
                        >
                            <View className="flex flex-col gap-1">
                                <Text className="font-[SemiBold] text-lg text-white">
                                    Welcome back
                                </Text>
                                <Text className="font-[Regular] text-xs text-white">
                                    What are you feeling today ?
                                </Text>
                            </View>
                            <Image
                                source={require("@/assets/images/avatar.jpg")}
                                className="w-16 h-16 rounded-2xl"
                            />
                        </Animated.View>

                        {/** ---------- SEARCH BAR CONTAINER ---------- */}
                        <Animated.View
                            entering={FadeInDown.duration(500).delay(300)}
                            className="w-full mt-8"
                        >
                            <View className="flex flex-row w-full h-16 px-8  rounded-2xl bg-neutral-600 ">
                                <TextInput
                                    className="w-[90%] text-white font-[Regular] text-sm"
                                    placeholder="Search coffee"
                                    placeholderTextColor={"white"}
                                />
                                <TouchableOpacity className="absolute right-1 top-1 bottom-1 items-center justify-center h-14 w-14 rounded-xl bg-orange-300">
                                    <Ionicons
                                        name="search"
                                        size={24}
                                        color={"white"}
                                    />
                                </TouchableOpacity>
                            </View>
                        </Animated.View>
                    </View>

                    {/** ---------- CARASELL ---------- */}
                    <Animated.View
                        entering={FadeInDown.duration(500).delay(400)}
                        className="absolute top-[220] w-full px-8 h-[20%] rounded-2xl"
                    >
                        <PagerView
                            className="flex-1 justify-center items-center rounded-2xl"
                            initialPage={0}
                            scrollEnabled={true}
                            overScrollMode={"auto"}
                            overdrag={true}
                        >
                            {carasell.map((item) => (
                                <View
                                    className=" flex-1 rounded-2xl"
                                    key={item.key}
                                >
                                    <Image
                                        source={item.image}
                                        className="w-full h-full rounded-2xl"
                                    />
                                </View>
                            ))}
                        </PagerView>
                    </Animated.View>

                    {/** ---------- LOWER PART ---------- */}
                    <View className="w-full h-full px-8 align-middle pt-[22%]">
                        {/** ---------- CATEGORY HORIZONTAL LIST ---------- */}
                        <Animated.View
                            className="w-full h-12 mb-2"
                            entering={FadeInDown.duration(500).delay(500)}
                        >
                            <FlatList
                                data={categories}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item }) => (
                                    <CategoryCard
                                        item={item}
                                        selected={selected}
                                        setSelected={SetSelected}
                                    />
                                )}
                            />
                        </Animated.View>

                        <Animated.View
                            className="w-full h-10 justify-center"
                            entering={FadeInRight.duration(500).delay(600)}
                        >
                            <Text className="font-[Bold] text-lg">
                                Recommend
                            </Text>
                        </Animated.View>

                        {/** ---------- PRODUCT VERTICAL LIST ---------- */}
                        <View className="flex-row flex-1 rounded-lg justify-center mt-2">
                            <FlatList
                                data={categories}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item }) => (
                                    <RecommendProductCard item={item} />
                                )}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </Animated.View>
    );
};

const CategoryCard = ({ item, selected, setSelected }: any) => {
    return (
        <TouchableOpacity
            className={
                selected == item.name
                    ? "justify-center items-center bg-orange-300 mr-5 px-6 rounded-lg"
                    : "justify-center items-center bg-gray-200 mr-5 px-6 rounded-lg"
            }
            onPress={() => {
                setSelected(item.name);
            }}
        >
            <Text
                className={
                    selected == item.name
                        ? "font-[SemiBold] text-sm"
                        : "font-[Regular] text-sm"
                }
            >
                {item.name}
            </Text>
        </TouchableOpacity>
    );
};

const RecommendProductCard = ({ item }: any) => {
    return (
        <Animated.View
            entering={FadeInRight.duration(500).delay(600)}
            className="bg-white w-56 h-80 mr-5 rounded-lg p-2 pb-4"
        >
            <TouchableOpacity
                onPress={() => {
                    router.navigate({
                        pathname: "../product/[id]",
                        params: { id: item.key },
                    });
                }}
            >
                <Animated.Image
                    source={require("@/assets/images/products/jason-w-kSlL887znkE-unsplash.jpg")}
                    className="w-full h-40 rounded-lg"
                    style={{ resizeMode: "cover" }}
                    sharedTransitionTag="imageTag"
                />
            </TouchableOpacity>
            <Text className="font-[SemiBold] text-[16px] mx-1 mt-3">
                {item.name}
            </Text>
            <Text className="font-[Regular] text-[12px] mx-1 mt-1">
                with Milk foam and Black Choco
            </Text>
            <View className="flex-1 flex-row items-end justify-between">
                <Text className="font-[SemiBold] text-[18px] mx-1 mt-1">
                    $ 4.99
                </Text>
                <TouchableOpacity>
                    <View className="bg-orange-300 w-10 h-10 items-center justify-center rounded-lg">
                        <Ionicons name="add" size={22} color={"white"} />
                    </View>
                </TouchableOpacity>
            </View>
        </Animated.View>
    );
};

export default Home;

const styles = StyleSheet.create({});
