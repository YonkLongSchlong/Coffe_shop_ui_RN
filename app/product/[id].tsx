import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import Animated, { FadeInLeft } from "react-native-reanimated";
import { ScaledSheet } from "react-native-size-matters";
const height = Dimensions.get("screen").height;

const Product = () => {
    const { id } = useLocalSearchParams();
    const [selectedSize, setSelectedSize] = useState<string>("S");
    const [quantity, setQuantity] = useState<number>(1);
    const [like, setLike] = useState<boolean>(false);

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "white",
            }}
        >
            <ScrollView
                scrollEnabled={true}
                contentContainerStyle={{
                    flexGrow: 1,
                    alignItems: "center",
                    backgroundColor: "white",
                    paddingTop: 20,
                    paddingBottom: 30,
                }}
                showsVerticalScrollIndicator={false}
            >
                {/** PRODUCT IMAGE */}
                <Animated.Image
                    entering={FadeInLeft.duration(500)}
                    sharedTransitionTag="imageTag"
                    style={styles.productImg}
                    source={require("@/assets/images/products/jason-w-kSlL887znkE-unsplash.jpg")}
                />

                {/** PRODUCT NAME */}
                <Animated.View
                    entering={FadeInLeft.duration(500)}
                    style={styles.productNameContainer}
                >
                    <Animated.Text style={styles.productName}>
                        Capucinno
                    </Animated.Text>
                    <Animated.Text style={styles.productSubName}>
                        with Chocolate and Milk Foam
                    </Animated.Text>
                </Animated.View>

                {/** PRODUCT QUANTITY */}
                <Animated.View
                    entering={FadeInLeft.duration(500).delay(200)}
                    style={styles.ratingContainer}
                >
                    <View style={styles.quantityContainer}>
                        <TouchableOpacity
                            onPress={() => setQuantity(quantity - 1)}
                            style={styles.addBtn}
                            disabled={quantity < 2 ? true : false}
                        >
                            <Ionicons name="remove" size={22} color={"white"} />
                        </TouchableOpacity>
                        <View className="w-8  items-center">
                            <Text style={styles.quantityText}>{quantity}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => setQuantity(quantity + 1)}
                            style={styles.addBtn}
                        >
                            <Ionicons name="add" size={22} color={"white"} />
                        </TouchableOpacity>
                    </View>

                    {/** CART AND LIKE BTN */}
                    <View style={styles.utilBtnContainer}>
                        <TouchableOpacity>
                            <Ionicons
                                name="cart-outline"
                                size={30}
                                color={"orange"}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setLike(!like)}>
                            <Ionicons
                                name={!like ? "heart-outline" : "heart"}
                                size={30}
                                color={"orange"}
                            />
                        </TouchableOpacity>
                    </View>
                </Animated.View>

                {/** SEPARATE LINE */}
                <View
                    style={{
                        marginVertical: 35,
                        width: "85%",
                        height: StyleSheet.hairlineWidth,
                        backgroundColor: "gray",
                    }}
                />

                {/** PRODUCT DESCRIPTION */}
                <Animated.View
                    entering={FadeInLeft.duration(500).delay(400)}
                    style={styles.descriptionContainer}
                >
                    <Text style={styles.descriptionHeader}>Description</Text>
                    <Text style={styles.descriptionText}>
                        A cappuccino is an approximately 150 ml (5 oz) beverage,
                        with 25 ml of espresso coffee and 85ml of fresh milk the
                        fo.. <Text style={styles.readMoreText}>Read More</Text>
                    </Text>
                </Animated.View>

                {/** PRODUCT SIZE CHOOSE */}
                <Animated.View
                    entering={FadeInLeft.duration(500).delay(600)}
                    style={styles.sizeContainer}
                >
                    <Text style={styles.sizeHeader}>Size</Text>
                    <View style={styles.sizeBtnContainer}>
                        <ProductSizeButton
                            label={"S"}
                            selectedSize={selectedSize}
                            setSelectedSize={setSelectedSize}
                        />
                        <ProductSizeButton
                            label={"M"}
                            selectedSize={selectedSize}
                            setSelectedSize={setSelectedSize}
                        />
                        <ProductSizeButton
                            label={"L"}
                            selectedSize={selectedSize}
                            setSelectedSize={setSelectedSize}
                        />
                    </View>
                </Animated.View>
            </ScrollView>

            {/** PRODUCT PAYOUT SECTION */}
            <View style={styles.payoutWrapper}>
                <View style={styles.payoutContainer}>
                    <View style={styles.payoutTextContainer}>
                        <Text style={styles.payoutText}>Price</Text>
                        <Text style={styles.payoutPrice}>đ 555.000</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => router.push({ pathname: "../order" })}
                        style={styles.payoutBtn}
                    >
                        <Text style={styles.payoutBtnText}>Buy now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Product;

const ProductSizeButton = ({ label, selectedSize, setSelectedSize }: any) => {
    return (
        <TouchableOpacity
            onPress={() => setSelectedSize(label)}
            style={[
                styles.sizeBtn,
                selectedSize == label ? { borderColor: "orange" } : null,
            ]}
        >
            <Text
                style={[
                    styles.sizeText,
                    selectedSize == label ? { color: "orange" } : null,
                ]}
            >
                {label}
            </Text>
        </TouchableOpacity>
    );
};

const styles = ScaledSheet.create({
    container: {
        flexGrow: 1,
        alignItems: "center",
        backgroundColor: "white",
    },
    productImg: {
        width: "85%",
        height: "250@vs",
        resizeMode: "cover",
        borderRadius: 20,
    },
    productNameContainer: {
        gap: 5,
        marginTop: 15,
        width: "85%",
    },
    productName: {
        fontSize: "18@s",
        fontFamily: "SemiBold",
    },
    productSubName: {
        fontSize: "11@s",
        fontFamily: "Regular",
        color: "gray",
    },
    ratingContainer: {
        paddingTop: 30,
        width: "85%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        gap: 10,
    },
    utilBtnContainer: {
        flexDirection: "row",
        alignItems: "flex-end",
        gap: 20,
    },
    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    quantityText: {
        fontFamily: "SemiBold",
        fontSize: "14@s",
    },
    addBtn: {
        backgroundColor: "orange",
        padding: 5,
        borderRadius: 5,
    },
    descriptionContainer: {
        marginTop: -4,
        width: "85%",
        gap: 10,
    },
    descriptionHeader: {
        fontFamily: "SemiBold",
        fontSize: "14@s",
    },
    descriptionText: {
        fontFamily: "Regular",
        fontSize: "11@s",
        color: "gray",
        lineHeight: "20@s",
    },
    readMoreText: {
        fontFamily: "SemiBold",
        fontSize: "12@s",
        color: "orange",
    },
    sizeContainer: {
        marginTop: 30,
        width: "85%",
        gap: 14,
    },
    sizeHeader: {
        fontFamily: "SemiBold",
        fontSize: "14@s",
    },
    sizeBtnContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    sizeBtn: {
        paddingHorizontal: "39@s",
        paddingVertical: "10@vs",
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 20,
    },
    sizeText: {
        fontFamily: "Regular",
        fontSize: "12@s",
        color: "gray",
    },
    payoutWrapper: {
        width: "100%",
        height: "80@vs",
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderLeftWidth: StyleSheet.hairlineWidth,
        borderRightWidth: StyleSheet.hairlineWidth,
        borderColor: "gray",
    },
    payoutContainer: {
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingHorizontal: "10@s",
    },
    payoutTextContainer: {
        height: "100%",
        justifyContent: "center",
        gap: 3,
    },
    payoutText: {
        fontFamily: "Regular",
        fontSize: "11@s",
        color: "gray",
    },
    payoutPrice: {
        fontFamily: "SemiBold",
        fontSize: "13@s",
        color: "orange",
    },
    payoutBtn: {
        paddingHorizontal: "60@s",
        paddingVertical: "13@vs",
        borderRadius: 20,
        backgroundColor: "orange",
    },
    payoutBtnText: {
        fontFamily: "SemiBold",
        fontSize: "13@s",
        color: "white",
    },
});
