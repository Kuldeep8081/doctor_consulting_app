// app/AppointmentConfirmedScreen.tsx
import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/themed-text";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router, useLocalSearchParams } from "expo-router";

export default function AppointmentConfirmedScreen() {
    const { concern, name, image, consultationType, day, weekday, time } = useLocalSearchParams();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* Header */}
            <View
                style={{
                    backgroundColor: "#A1BC98",
                    paddingBottom: 24,
                    borderBottomRightRadius: 30,
                    borderBottomLeftRadius: 30,
                }}
            >
                <TouchableOpacity
                    onPress={() => router.back()}
                    style={{ marginTop: 40, marginLeft: 24 }}
                >
                    <ThemedText type="title">
                        <AntDesign name="arrow-left" size={24} />
                    </ThemedText>
                </TouchableOpacity>
            </View>

            <View
                style={{
                    flex: 1,
                    paddingHorizontal: 24,
                    paddingTop: 32,
                    alignItems: "center",
                }}
            >
                {/* Avatar card */}
                <View
                    style={{
                        width: 110,
                        height: 110,
                        borderRadius: 55,
                        borderWidth: 1,
                        borderColor: "#C4C4C4",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 16,

                    }}
                >
                    {/* Doctor image placeholder */}
                    <Image source={image as any} style={{ height: 100, width: 100, borderRadius: 50, position: 'relative' }} />
                </View>
                <ThemedText style={{ backgroundColor: 'green', borderRadius: 50, position: 'absolute', top: 130 }}>
                    <AntDesign name="check-circle" size={24} />
                </ThemedText>

                <ThemedText
                    style={{ fontSize: 18, fontWeight: "700", marginBottom: 6 }}
                >
                    Appointment Confirmed
                </ThemedText>

                <ThemedText
                    style={{
                        fontSize: 13,
                        textAlign: "center",
                        marginBottom: 24,
                    }}
                >
                    Thank you for choosing our Experts to help guide you
                </ThemedText>

                {/* Details */}
                <View style={{ alignSelf: "stretch", marginBottom: 24 }}>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginBottom: 8,
                        }}
                    >
                        <ThemedText style={{ fontSize: 13 }}>Expert</ThemedText>
                        <ThemedText style={{ fontSize: 13, fontWeight: "600" }}>
                            {name}
                        </ThemedText>
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginBottom: 8,
                        }}
                    >
                        <ThemedText style={{ fontSize: 13 }}>Appointment Date</ThemedText>
                        <ThemedText style={{ fontSize: 13 }}>{day}, {weekday}</ThemedText>
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginBottom: 8,
                        }}
                    >
                        <ThemedText style={{ fontSize: 13 }}>Appointment Time</ThemedText>
                        <ThemedText style={{ fontSize: 13 }}>{time}</ThemedText>
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginBottom: 8,
                        }}
                    >
                        <ThemedText style={{ fontSize: 13 }}>
                            Consultation Type
                        </ThemedText>
                        <ThemedText style={{ fontSize: 13 }}>{consultationType} Consultation</ThemedText>
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginBottom: 8,
                        }}
                    >
                        <ThemedText style={{ fontSize: 13 }}>
                            Current Wallet Balance
                        </ThemedText>
                        <ThemedText style={{ fontSize: 13 }}>₹ 660</ThemedText>
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginBottom: 8,
                        }}
                    >
                        <ThemedText style={{ fontSize: 13 }}>Consultation Fee</ThemedText>
                        <ThemedText style={{ fontSize: 13 }}>₹ 50</ThemedText>
                    </View>
                </View>

                {/* Make payment */}
                <TouchableOpacity
                    style={{
                        borderRadius: 10,
                        paddingVertical: 14,
                        paddingHorizontal: 40,
                        alignItems: "center",
                        backgroundColor: "#2E7D32",
                    }}

                    onPress={() => router.push(
                        {
                            pathname: "/PaymentSuccessfull",
                            params: {
                                concern: concern,
                                name: name,
                                image: image,
                                consultationType: consultationType,
                                day: day,
                                weekday: weekday,
                                time: time
                            }
                        }
                    )}
                >
                    <ThemedText
                        style={{
                            fontSize: 16,
                            fontWeight: "600",
                            color: "#FFFFFF",
                        }}
                    >
                        Make payment
                    </ThemedText>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
