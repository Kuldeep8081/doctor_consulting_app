// app/YourConcernScreen.tsx
import React, { useState } from "react";
import { View, TouchableOpacity, TextInput, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/themed-text";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router, useLocalSearchParams } from "expo-router";

const severities: ("Mild" | "Moderate" | "Severe")[] = [
    "Mild",
    "Moderate",
    "Severe",
];

const durations = ["Days", "Weeks", "Months", "Year"];

export default function YourConcernScreen() {
    const { concern, name, image, consultationType, day, weekday, time } = useLocalSearchParams();

    const [selectedSeverity, setSelectedSeverity] =
        useState<"Mild" | "Moderate" | "Severe">("Moderate");
    const [durationUnit, setDurationUnit] = useState<string>("Days");
    const [days, setDays] = useState<string>("28");

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
                    Your Concern
                </ThemedText>
            </View>

            <View style={{ flex: 1, paddingHorizontal: 24, paddingTop: 24 }}>
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
                        <ThemedText style={{ fontSize: 13, marginTop: 2 }}>
                            Choosed:{consultationType}
                        </ThemedText>
                    </View>
                </View>

                {/* Concern dropdown-like input */}
                <View style={{ marginTop: 24 }}>
                    <ThemedText style={{ fontSize: 13, marginBottom: 8 }}>
                        Please select a concern
                    </ThemedText>
                    <View
                        style={{
                            borderWidth: 1,
                            borderRadius: 10,
                            borderColor: "#E0E0E0",
                            paddingHorizontal: 12,
                            paddingVertical: 12,
                        }}
                    >
                        <ThemedText style={{ fontSize: 14 }}>{concern}</ThemedText>
                    </View>
                </View>

                {/* Severity slider substitute */}
                <View style={{ marginTop: 24 }}>
                    <ThemedText style={{ fontSize: 13, marginBottom: 8 }}>
                        Select severity of your concern
                    </ThemedText>

                    {/* line */}
                    <View
                        style={{
                            height: 2,
                            backgroundColor: "#E0E0E0",
                            marginVertical: 16,
                        }}
                    />

                    {/* labels */}
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        {severities.map((s) => {
                            const active = s === selectedSeverity;
                            return (
                                <TouchableOpacity
                                    key={s}
                                    onPress={() => setSelectedSeverity(s)}
                                >
                                    <ThemedText
                                        style={{
                                            fontSize: 13,
                                            color: active ? "#2E7D32" : "#777777",
                                            fontWeight: active ? "700" : "400",
                                        }}
                                    >
                                        {s}
                                    </ThemedText>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>

                {/* Duration */}
                <View style={{ marginTop: 24 }}>
                    <ThemedText style={{ fontSize: 13, marginBottom: 8 }}>
                        How long have you been facing?
                    </ThemedText>

                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginBottom: 12,
                        }}
                    >
                        <View
                            style={{
                                flex: 0.3,
                                borderWidth: 1,
                                borderRadius: 10,
                                borderColor: "#E0E0E0",
                                paddingHorizontal: 12,
                                paddingVertical: 10,
                            }}
                        >

                            <TextInput
                                value={days}
                                onChangeText={setDays}
                                keyboardType="numeric"
                                style={{ fontSize: 14, color: 'gray' }}
                            />
                        </View>

                        <View
                            style={{
                                flex: 0.7,
                                marginLeft: 12,
                                borderWidth: 1,
                                borderRadius: 10,
                                borderColor: "#E0E0E0",
                                paddingHorizontal: 12,
                                paddingVertical: 10,
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <ThemedText style={{ fontSize: 14 }}>{durationUnit}</ThemedText>
                            <AntDesign name="down" size={14} />
                        </View>
                    </View>

                    {/* Duration radio-like row */}
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginTop: 8,
                        }}
                    >
                        {durations.map((d) => {
                            const selected = d === durationUnit;
                            return (
                                <TouchableOpacity
                                    key={d}
                                    style={{ flexDirection: "row", alignItems: "center" }}
                                    onPress={() => setDurationUnit(d)}
                                >
                                    <View
                                        style={{
                                            width: 18,
                                            height: 18,
                                            borderRadius: 9,
                                            borderWidth: 1,
                                            borderColor: selected ? "#2E7D32" : "#B0B0B0",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginRight: 6,
                                        }}
                                    >
                                        {selected && (
                                            <View
                                                style={{
                                                    width: 10,
                                                    height: 10,
                                                    borderRadius: 5,
                                                    backgroundColor: "#2E7D32",
                                                }}
                                            />
                                        )}
                                    </View>
                                    <ThemedText style={{ fontSize: 12 }}>{d}</ThemedText>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>

                {/* Proceed button */}
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
                                pathname: "/BasicInfoScreen",
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
                            Proceed
                        </ThemedText>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
