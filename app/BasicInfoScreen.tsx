// app/BasicInfoScreen.tsx
import React, { useState } from "react";
import { View, TouchableOpacity, TextInput, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/themed-text";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router, useLocalSearchParams } from "expo-router";

export default function BasicInfoScreen() {
    const {concern, name, image, consultationType,day,weekday,time } = useLocalSearchParams();
    const [gender, setGender] = useState("Prefer not to say");
    const [age, setAge] = useState("28 years");
    const [height, setHeight] = useState("171 cms");
    const [weight, setWeight] = useState("63 kg");

    const renderInput = (label: string, value: string, setValue: (v: string) => void) => (
        <View style={{ marginBottom: 12 }}>
            <ThemedText style={{ fontSize: 13, marginBottom: 4 }}>{label}</ThemedText>
            <View
                style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: "#E0E0E0",
                    paddingHorizontal: 12,
                    paddingVertical: 10,
                }}
            >
                <TextInput
                    value={value}
                    onChangeText={setValue}
                    style={{ fontSize: 14, color: 'gray' }}
                />
            </View>
        </View>
    );

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
                    Basic Info
                </ThemedText>
            </View>

            <View style={{ flex: 1, paddingHorizontal: 24, paddingTop: 24 }}>
                {/* Doctor row */}
                <View style={{ flexDirection: "row", alignItems: "center",gap:10 }}>
                    <Image source={image as any} style={{ height: 50, width: 50, borderRadius: 50 }} />
                    <View>
                        <ThemedText style={{ fontSize: 16, fontWeight: "700" }}>
                            {name}
                        </ThemedText>
                        <ThemedText style={{ fontSize: 13, marginTop: 2 }}>
                            Male-Female Infertility
                        </ThemedText>
                        <ThemedText style={{ fontSize: 12, marginTop: 2 }}>
                            Choosed: {consultationType}
                        </ThemedText>
                    </View>
                </View>

                <ThemedText style={{ fontSize: 13, marginTop: 24, marginBottom: 12 }}>
                    Please confirm your basic information
                </ThemedText>

                {renderInput("Gender", gender, setGender)}
                {renderInput("Age", age, setAge)}
                {renderInput("Height", height, setHeight)}
                {renderInput("Weight", weight, setWeight)}

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
                                pathname: "/AppointmentConfirmedScreen",
                                params: {
                                    concern:concern,
                                    name: name,
                                    image: image,
                                    consultationType: consultationType,
                                    day:day,
                                    weekday:weekday,
                                    time:time
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
                            Confirm
                        </ThemedText>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
