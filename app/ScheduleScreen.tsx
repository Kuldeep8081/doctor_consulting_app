import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router, useLocalSearchParams } from "expo-router";

const ScheduleScreen = () => {
    const {concern, name, image } = useLocalSearchParams();
    const [selectedType, setSelectedType] = useState<"phone" | "video" | "chat">(
        "video"
    );

    const renderRadio = (selected: boolean) => (
        <View
            style={{
                width: 22,
                height: 22,
                borderRadius: 11,
                borderWidth: 1.5,
                borderColor: selected ? "#2E7D32" : "#B0B0B0",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {selected && (
                <View
                    style={{
                        width: 12,
                        height: 12,
                        borderRadius: 6,
                        backgroundColor: "#2E7D32",
                    }}
                />
            )}
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* Header */}
            <View
                style={{
                    backgroundColor: "#A1BC98",
                    paddingBottom: 30,
                    borderBottomRightRadius: 30,
                    borderBottomLeftRadius: 30,
                }}
            >
                <TouchableOpacity
                    onPress={() => router.back()}
                    style={{ marginTop: 40, marginLeft: 30 }}
                >
                    <ThemedText type="title">
                        <AntDesign name="arrow-left" size={24} />
                    </ThemedText>
                </TouchableOpacity>

                <ThemedText
                    type="subtitle"
                    style={{ fontSize: 25, marginLeft: 30, marginTop: 30 }}
                >
                    Choose Consultation
                </ThemedText>
            </View>

            {/* Content */}
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: 24,
                    paddingTop: 24,
                }}
            >
                {/* Doctor section */}
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    {image ? (
                        <Image
                            source={image as any}
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 25,
                                marginRight: 12,
                            }}
                        />
                    ) : (
                        <View
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 25,
                                marginRight: 12,
                                borderWidth: 1,
                                borderColor: "#CCCCCC",
                            }}
                        />
                    )}

                    <View>
                        <ThemedText style={{ fontSize: 16, fontWeight: "700" }}>
                            {name || "Dr. Drem"}
                        </ThemedText>
                        <ThemedText style={{ fontSize: 13, marginTop: 2 }}>
                            Male-Female Infertility
                        </ThemedText>
                    </View>
                </View>

                {/* Cards */}
                <View style={{ marginTop: 24 }}>
                    {/* Row 1: Phone + Video */}
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginBottom: 16,
                        }}
                    >
                        {/* Phone Consultation */}
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                paddingVertical: 16,
                                paddingHorizontal: 14,
                                borderRadius: 16,
                                borderWidth: 1,
                                borderColor:
                                    selectedType === "phone" ? "#2E7D32" : "#E0E0E0",
                                marginRight: 8,
                            }}
                            onPress={() => setSelectedType("phone")}
                        >
                            <ThemedText
                                style={{ fontSize: 14, fontWeight: "600", marginBottom: 12 }}
                            >
                                Phone Consultation
                            </ThemedText>

                            <ThemedText
                                style={{ fontSize: 20, fontWeight: "700", marginBottom: 4 }}
                            >
                                ₹ 15/min
                            </ThemedText>
                            <ThemedText style={{ fontSize: 12 }}>(20min)</ThemedText>

                            <View
                                style={{ marginTop: 16, alignItems: "flex-start" }}
                            >
                                {renderRadio(selectedType === "phone")}
                            </View>
                        </TouchableOpacity>

                        {/* Video Consultation */}
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                paddingVertical: 16,
                                paddingHorizontal: 14,
                                borderRadius: 16,
                                borderWidth: 1,
                                borderColor:
                                    selectedType === "video" ? "#2E7D32" : "#E0E0E0",
                                marginLeft: 8,
                            }}
                            onPress={() => setSelectedType("video")}
                        >
                            <ThemedText
                                style={{ fontSize: 14, fontWeight: "600", marginBottom: 12 }}
                            >
                                Video Consultation
                            </ThemedText>

                            <ThemedText
                                style={{ fontSize: 20, fontWeight: "700", marginBottom: 4 }}
                            >
                                ₹ 35/min
                            </ThemedText>
                            <ThemedText style={{ fontSize: 12 }}>(30min)</ThemedText>

                            <View
                                style={{ marginTop: 16, alignItems: "flex-start" }}
                            >
                                {renderRadio(selectedType === "video")}
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* Row 2: Chat */}
                    <View style={{ width: "60%" }}>
                        <TouchableOpacity
                            style={{
                                paddingVertical: 16,
                                paddingHorizontal: 14,
                                borderRadius: 16,
                                borderWidth: 1,
                                borderColor:
                                    selectedType === "chat" ? "#2E7D32" : "#E0E0E0",
                            }}
                            onPress={() => setSelectedType("chat")}
                        >
                            <ThemedText
                                style={{ fontSize: 14, fontWeight: "600", marginBottom: 12 }}
                            >
                                Chat Consultation
                            </ThemedText>

                            <ThemedText
                                style={{ fontSize: 20, fontWeight: "700", marginBottom: 4 }}
                            >
                                ₹ 50
                            </ThemedText>

                            <ThemedText style={{ fontSize: 12, marginBottom: 2 }}>
                                (30 conversation texts)
                            </ThemedText>
                            <ThemedText style={{ fontSize: 12 }}>
                                Valid: 72 hours
                            </ThemedText>

                            <View
                                style={{ marginTop: 16, alignItems: "flex-start" }}
                            >
                                {renderRadio(selectedType === "chat")}
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Proceed button at bottom */}
                <View style={{ marginTop: "auto", marginBottom: 16 }}>
                    <TouchableOpacity
                        style={{
                            borderRadius: 10,
                            paddingVertical: 14,
                            alignItems: "center",
                            backgroundColor: "#2E7D32",
                        }}

                        onPress={()=>router.push(
                            {
                                pathname:"/ChooseDateScreen",
                                params:{
                                    concern:concern,
                                    name:name,
                                    image:image,
                                    consultationType:selectedType
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
};

export default ScheduleScreen;
