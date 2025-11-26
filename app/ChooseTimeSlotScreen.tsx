// app/ChooseTimeSlotScreen.tsx
import React, { useState } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/themed-text";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router, useLocalSearchParams } from "expo-router";

const morningSlots = ["09:00AM", "09:35AM", "10:05 AM"];
const afternoonSlots = ["12:00PM", "12:35 AM", "01:05 PM"];
const eveningSlots = ["06:00AM", "7:00 AM", "8:05 AM"];

export default function ChooseTimeSlotScreen() {
    const {concern, name, image, consultationType, day, weekday } = useLocalSearchParams();
    const [selectedSlot, setSelectedSlot] = useState<string>("10:05 AM");

    const renderSlot = (time: string) => {
        const selected = time === selectedSlot;
        return (
            <TouchableOpacity
                key={time}
                onPress={() => setSelectedSlot(time)}
                style={{
                    minWidth: 90,
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                    borderRadius: 12,
                    borderWidth: 1,
                    borderColor: selected ? "#2E7D32" : "#E0E0E0",
                    marginRight: 10,
                    marginBottom: 10,
                    alignItems: "center",
                }}
            >
                <ThemedText
                    style={{
                        fontSize: 13,
                        fontWeight: "600",
                    }}
                >
                    {time}
                </ThemedText>
            </TouchableOpacity>
        );
    };

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

                <ThemedText
                    type="subtitle"
                    style={{ fontSize: 24, marginLeft: 24, marginTop: 24 }}
                >
                    Choose Time Slot
                </ThemedText>
            </View>

            <View style={{ flex: 1, paddingHorizontal: 24, paddingTop: 24 }}>
                {/* Progress bar */}
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 24,
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            height: 4,
                            borderRadius: 2,
                            backgroundColor: "#2E7D32",
                        }}
                    />
                    <View
                        style={{
                            flex: 1,
                            height: 4,
                            borderRadius: 2,
                            marginHorizontal: 6,
                            backgroundColor: "#2E7D32",
                        }}
                    />
                    <View
                        style={{
                            flex: 1,
                            height: 4,
                            borderRadius: 2,
                            backgroundColor: "#CCCCCC",
                        }}
                    />
                </View>

                {/* Doctor row */}
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                    <Image source={image as any}
                        style={{ height: 50, width: 50, borderRadius: 50 }}
                    />
                    <View>
                        <ThemedText style={{ fontSize: 16, fontWeight: "700" }}>
                            {name}
                        </ThemedText>
                        <ThemedText style={{ fontSize: 13, marginTop: 2 }}>
                            Male-Female Infertility
                        </ThemedText>
                        <ThemedText>
                            Choosed: {consultationType}
                        </ThemedText>
                    </View>
                </View>

                <ThemedText type="title"
                    style={{ fontSize: 14, marginTop: 24, marginBottom: 12 }}
                >
                    Pick a time slot
                </ThemedText>

                {/* Morning */}
                <ThemedText style={{ fontSize: 13, marginBottom: 6 }}>
                    Morning
                </ThemedText>
                <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                    {morningSlots.map(renderSlot)}
                </View>

                {/* Afternoon */}
                <ThemedText
                    style={{ fontSize: 13, marginTop: 12, marginBottom: 6 }}
                >
                    Afternoon
                </ThemedText>
                <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                    {afternoonSlots.map(renderSlot)}
                </View>

                {/* Evening */}
                <ThemedText
                    style={{ fontSize: 13, marginTop: 12, marginBottom: 6 }}
                >
                    Evening
                </ThemedText>
                <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                    {eveningSlots.map(renderSlot)}
                </View>

                {/* Confirm button */}
                <View style={{ marginTop: "auto", marginBottom: 16 }}>
                    <TouchableOpacity
                        style={{
                            borderRadius: 10,
                            paddingVertical: 14,
                            alignItems: "center",
                            backgroundColor: "#2E7D32",
                        }}
                        onPress={() => router.push(
                            {
                                pathname: "/YourConcernScreen",
                                params: {
                                    concern:concern,
                                    name:name,
                                    image:image,
                                    consultationType:consultationType,
                                    day:day,
                                    weekday:weekday,
                                    time:selectedSlot
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
                            Confirm Appointment
                        </ThemedText>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
