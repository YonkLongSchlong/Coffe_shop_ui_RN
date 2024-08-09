import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";

const Order = () => {
    const [quantity, setQuantity] = useState<number>(1);
    const [orderOption, setOrderOption] = useState<string>("Delivery");

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollView}
                showsVerticalScrollIndicator={false}
            >
                {/** ---------- ORDER OPTION BUTTONS ---------- */}
                <View style={styles.orderBtnContainer}>
                    <TouchableOpacity
                        style={styles.deliveryBtn}
                        onPress={() => setOrderOption("Delivery")}
                    >
                        <Text style={styles.deliveryText}>Delivery</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.pickUpBtn}
                        onPress={() => setOrderOption("Pick up")}
                    >
                        <Text style={[styles.pickUpText]}>Pick up</Text>
                    </TouchableOpacity>
                </View>

                {/** ---------- ADDRESS SECTION ----------  */}
                <View style={styles.addressContainer}>
                    <Text style={styles.header}>Delivery Address</Text>
                    <View style={{ gap: 5 }}>
                        <Text style={styles.username}>Johnathan Doe</Text>
                        <Text style={styles.addressText}>
                            Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.
                        </Text>
                    </View>
                    <View style={styles.utilBtnContainer}>
                        <TouchableOpacity style={styles.editBtn}>
                            <Ionicons name="pencil-outline" size={15} />
                            <Text style={styles.editText}>Edit Address</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.addNoteBtn}>
                            <Ionicons name="newspaper-outline" size={15} />
                            <Text style={styles.addNoteText}>Add Note</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/** ----------  SEPARATE LINE ----------  */}
                <View
                    style={{
                        marginVertical: 25,
                        width: "85%",
                        height: StyleSheet.hairlineWidth,
                        backgroundColor: "gray",
                    }}
                />

                {/** ---------- PRODUCT INFO CARD SECTION ----------  */}
                <View style={styles.productCardContainer}>
                    <View style={styles.productInfoContainer}>
                        <Image
                            style={styles.productImg}
                            source={require("@/assets/images/products/jason-w-kSlL887znkE-unsplash.jpg")}
                        />
                        <View style={styles.productNameContainer}>
                            <Text style={styles.productName}>Capucinno</Text>
                            <Text
                                style={styles.productSubName}
                                numberOfLines={1}
                            >
                                with Chocolate and Milk Foam
                            </Text>
                            <Text style={styles.productSize} numberOfLines={1}>
                                Size: S
                            </Text>
                        </View>
                    </View>
                    <View style={styles.quantityContainer}>
                        <TouchableOpacity
                            onPress={() => setQuantity(quantity - 1)}
                            style={styles.addBtn}
                            disabled={quantity < 2 ? true : false}
                        >
                            <Ionicons name="remove" size={20} color={"black"} />
                        </TouchableOpacity>
                        <View className="w-8  items-center">
                            <Text style={styles.quantityText}>{quantity}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => setQuantity(quantity + 1)}
                            style={styles.addBtn}
                        >
                            <Ionicons name="add" size={20} color={"black"} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/** ----------  SEPARATE LINE ----------  */}
                <View
                    style={{
                        marginBottom: 25,
                        width: "85%",
                        height: StyleSheet.hairlineWidth,
                        backgroundColor: "gray",
                    }}
                />

                {/** ----------  DISCOUNT SECTION ---------- */}
                <View style={styles.discountContainer}>
                    <TouchableOpacity style={styles.discountBtn}>
                        <View style={{ flexDirection: "row", gap: 12 }}>
                            <Ionicons
                                name="card-outline"
                                size={22}
                                color={"black"}
                            />
                            <Text style={styles.discountText}>
                                1 Discount is applied
                            </Text>
                        </View>
                        <Ionicons
                            name="chevron-forward"
                            size={22}
                            color={"black"}
                        />
                    </TouchableOpacity>
                </View>

                {/** ----------  PAYMENT SECTION ----------  */}
                <View style={styles.paymentContainer}>
                    <Text style={styles.header}>Payment Summary</Text>
                    <View className="w-full gap-2">
                        <View style={styles.priceContainer}>
                            <Text style={styles.priceHeader}>Price</Text>
                            <Text style={styles.priceText}>25.000 đ</Text>
                        </View>
                        <View style={styles.priceContainer}>
                            <Text style={styles.priceHeader}>Delivery fee</Text>
                            <Text style={styles.priceText}>10.000 đ</Text>
                        </View>
                        <View style={styles.priceContainer}>
                            <Text style={styles.priceHeader}>
                                Discount apply
                            </Text>
                            <Text style={styles.priceText}>-10.000 đ</Text>
                        </View>
                    </View>
                </View>

                {/** ----------  SEPARATE LINE ---------- */}
                <View
                    style={{
                        marginVertical: 25,
                        width: "85%",
                        height: StyleSheet.hairlineWidth,
                        backgroundColor: "gray",
                    }}
                />

                {/** ---------- TOTAL SECTION ----------  */}
                <View style={styles.totalContainer}>
                    <Text style={styles.header}>Order Total</Text>
                    <Text style={styles.priceText}>25.000 đ</Text>
                </View>

                {/** ----------  PAYMENT METHOD SECTION ----------  */}
            </ScrollView>

            {/** ----------  ORDER BTN ----------  */}
            <View style={styles.payoutWrapper}>
                <View style={styles.payoutContainer}>
                    <TouchableOpacity
                        onPress={() => {}}
                        style={styles.payoutBtn}
                    >
                        <Text style={styles.payoutBtnText}>Place order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Order;

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    scrollView: {
        flexGrow: 1,
        alignItems: "center",
        paddingTop: "15@s",
        paddingBottom: "30@s",
    },

    /** ----- ORDER OPTION SECTION ----- */
    orderBtnContainer: {
        flexDirection: "row",
        gap: 10,
        backgroundColor: "#F0F0F0",
        borderRadius: 15,
        padding: "3@s",
        width: "85%",
    },
    deliveryBtn: {
        justifyContent: "center",
        backgroundColor: "orange",
        paddingVertical: "8@vs",
        paddingHorizontal: "42@s",
        borderRadius: 15,
    },
    deliveryText: {
        fontFamily: "SemiBold",
        fontSize: "12@s",
        color: "white",
    },
    pickUpBtn: {
        justifyContent: "center",
        paddingVertical: "8@vs",
        paddingHorizontal: "42@s",
        borderRadius: 15,
    },
    pickUpText: {
        fontFamily: "SemiBold",
        fontSize: "12@s",
    },

    /** ----- ADDRESS SECTION ----- */
    addressContainer: {
        gap: 15,
        width: "85%",
        paddingTop: "20@vs",
    },
    header: {
        fontFamily: "SemiBold",
        fontSize: "12@s",
    },
    username: {
        fontFamily: "SemiBold",
        fontSize: "10@s",
    },
    addressText: {
        fontFamily: "Regular",
        fontSize: "10@s",
        color: "gray",
    },
    utilBtnContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingTop: "5@vs",
    },
    editBtn: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: "3@s",
        paddingHorizontal: "10@s",
        backgroundColor: "#F0F0F0",
        borderRadius: 20,
        gap: 10,
    },
    editText: {
        fontFamily: "Regular",
        fontSize: "10@s",
    },
    addNoteBtn: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: "3@s",
        paddingHorizontal: "10@s",
        backgroundColor: "#F0F0F0",
        borderRadius: 20,
        gap: 10,
    },
    addNoteText: {
        fontFamily: "Regular",
        fontSize: "10@s",
    },

    /** ----- PRODUCT INFO CARD SECTION  ----- */
    productCardContainer: {
        width: "85%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 25,
    },
    productInfoContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
    },
    productNameContainer: {
        gap: 1,
        width: "130@s",
    },
    productName: {
        fontFamily: "SemiBold",
        fontSize: "12@s",
    },
    productSubName: {
        fontFamily: "Regular",
        fontSize: "10@s",
        color: "gray",
    },
    productSize: {
        fontFamily: "Regular",
        fontSize: "10@s",
        color: "gray",
        marginTop: "5@vs",
    },
    productImg: {
        width: "60@s",
        height: "60@vs",
        borderRadius: 20,
    },
    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    quantityText: {
        fontFamily: "SemiBold",
        fontSize: "12@s",
    },
    addBtn: {
        backgroundColor: "#F0F0F0",
        padding: 5,
        borderRadius: 20,
    },

    /** ----- DISCOUNT SECTION ----- */
    discountContainer: {
        width: "85%",
        marginBottom: 25,
        backgroundColor: "#F0F0F0",
        paddingHorizontal: "10@s",
        borderRadius: 15,
    },
    discountBtn: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: "15@vs",
        paddingHorizontal: "10@vs",
    },
    discountText: {
        fontFamily: "SemiBold",
        fontSize: "10@s",
        color: "black",
    },

    /** ----- PAYMENT SECTION ----- */
    paymentContainer: {
        width: "85%",
        gap: 15,
    },
    priceContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    priceHeader: {
        fontFamily: "Regular",
        fontSize: "10@s",
        color: "gray",
    },
    priceText: {
        fontFamily: "SemiBold",
        fontSize: "10@s",
    },

    /** ----- TOTAL SECTION ----- */
    totalContainer: {
        width: "85%",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    /** ----- ORDER BUTTON SECTION ----- */
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
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    payoutTextContainer: {
        height: "100%",
        justifyContent: "center",
        gap: 3,
    },
    payoutBtn: {
        width: "85%",
        alignItems: "center",
        paddingHorizontal: "60@s",
        paddingVertical: "13@vs",
        borderRadius: 15,
        backgroundColor: "orange",
    },
    payoutBtnText: {
        fontFamily: "SemiBold",
        fontSize: "12@s",
        color: "white",
    },
});
