// app/ChooseDateScreen.tsx
import React, { useState } from "react";
import { View, TouchableOpacity, FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/themed-text";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router, useLocalSearchParams } from "expo-router";

const dates = [
    { id: "1", day: "06 Feb", weekday: "Friday" },
    { id: "2", day: "07 Feb", weekday: "Saturday" },
    { id: "3", day: "08 Feb", weekday: "Sunday" },
    { id: "4", day: "09 Feb", weekday: "Monday" },
    { id: "5", day: "10 Feb", weekday: "Tuesday" },
    { id: "6", day: "11 Feb", weekday: "Wednesday" },
    { id: "7", day: "12 Feb", weekday: "Thursday" },
    { id: "8", day: "13 Feb", weekday: "Friday" },
    { id: "9", day: "14 Feb", weekday: "Saturday" },
    { id: "10", day: "15 Feb", weekday: "Sunday" },
];

export default function ChooseDateScreen() {
    const {concern, name, image, consultationType } = useLocalSearchParams();
    const [selectedDateId, setSelectedDateId] = useState<string>("1");

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
                    Choose Date
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
                            backgroundColor: "#CCCCCC",
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
                    <Image source={image as any} style={{ height: 50, width: 50, borderRadius: 50 }} />
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

                {/* Pick appointment date */}
                <ThemedText
                    style={{ fontSize: 14, marginTop: 24, marginBottom: 12 }}
                >
                    Pick Appointment Date
                </ThemedText>

                <FlatList
                    data={dates}
                    keyExtractor={(item) => item.id}
                    numColumns={3}
                    columnWrapperStyle={{ justifyContent: "space-between", marginBottom: 12 }}
                    renderItem={({ item }) => {
                        const selected = item.id === selectedDateId;
                        return (
                            <TouchableOpacity
                                style={{
                                    width: "31%",
                                    paddingVertical: 12,
                                    borderRadius: 16,
                                    borderWidth: 1,
                                    borderColor: selected ? "#2E7D32" : "#E0E0E0",
                                    alignItems: "center",
                                }}
                                onPress={() => setSelectedDateId(item.id)}
                            >
                                <ThemedText
                                    style={{
                                        fontSize: 14,
                                        fontWeight: "700",
                                    }}
                                >
                                    {item.day}
                                </ThemedText>
                                <ThemedText
                                    style={{
                                        fontSize: 12,
                                        marginTop: 2,
                                    }}
                                >
                                    {item.weekday}
                                </ThemedText>
                            </TouchableOpacity>
                        );
                    }}
                    extraData={selectedDateId}
                />

                {/* Selected date preview (bottom line) */}
                <View
                    style={{
                        marginTop: 16,
                        paddingVertical: 10,
                        borderRadius: 16,
                        borderWidth: 1,
                        borderColor: "#E0E0E0",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <ThemedText style={{ fontSize: 13 }}>
                        06 December 2025
                    </ThemedText>
                </View>

                {/* Confirm button */}
                <View style={{ marginTop: 24 }}>
                    <TouchableOpacity
                        style={{
                            borderRadius: 10,
                            paddingVertical: 14,
                            alignItems: "center",
                            backgroundColor: "#2E7D32",
                        }}
                        onPress={() =>{ 
                            const selectedDate = dates.find((d) => d.id === selectedDateId);
                            router.push({
                                pathname: "/ChooseTimeSlotScreen",
                                params: {
                                    concern:concern,
                                    name: name,
                                    image: image,
                                    consultationType: consultationType,
                                    day: selectedDate?.day,
                                    weekday: selectedDate?.weekday,
                                }
                            })
                        }}
                    >
                        <ThemedText
                            style={{
                                fontSize: 16,
                                fontWeight: "600",
                                color: "#FFFFFF",
                            }}
                        >
                            Confirm Date
                        </ThemedText>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
