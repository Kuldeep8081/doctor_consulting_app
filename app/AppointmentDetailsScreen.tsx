import React, { useState } from "react";
import { View, TouchableOpacity, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/themed-text";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router, useLocalSearchParams } from "expo-router";


const Row = ({
    label,
    value,
}: {
    label: string;
    value: string;
}) => (
    <View
        style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 6,
        }}
    >
        <ThemedText style={{ fontSize: 12 }}>{label}</ThemedText>
        <ThemedText style={{ fontSize: 12, fontWeight: "600" }}>
            {value}
        </ThemedText>
    </View>
);

const CollapsibleSection = ({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) => {
    const [open, setOpen] = useState(false);

    return (
        <View
            style={{
                borderWidth: 1,
                borderRadius: 10,
                marginBottom: 12,
                borderColor: 'gray'
            }}
        >
            <TouchableOpacity
                onPress={() => setOpen((prev) => !prev)}
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: 12,
                    paddingVertical: 10,
                }}
            >
                <ThemedText style={{ fontSize: 13, fontWeight: "600" }}>
                    {title}
                </ThemedText>
                <ThemedText>
                    <AntDesign name={open ? "up" : "down"} size={14} />
                </ThemedText>
            </TouchableOpacity>

            {open && (
                <View
                    style={{
                        paddingHorizontal: 12,
                        paddingBottom: 10,
                        paddingTop: 2,
                    }}
                >
                    {children}
                </View>
            )}
        </View>
    );
};

export default function AppointmentDetailsScreen() {
    const { concern, name, image, consultationType, day, time } = useLocalSearchParams<{
  consultationType?: string;
  day?:string;
  time?:string;
  concern?:string;
  name?:string;
  image?:string;

}>();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* Header */}
            <View
                style={{
                    paddingHorizontal: 20,
                    paddingTop: 32,
                    paddingBottom: 12,
                }}
            >
                <TouchableOpacity onPress={() => router.back()}>
                    <ThemedText type="title">
                        <AntDesign name="arrow-left" size={22} />
                    </ThemedText>
                </TouchableOpacity>

                <ThemedText
                    type="subtitle"
                    style={{ fontSize: 22, marginTop: 16 }}
                >
                    Appointment Details
                </ThemedText>
            </View>

            <ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={{
                    paddingHorizontal: 20,
                    paddingBottom: 24,
                }}
                showsVerticalScrollIndicator={false}
            >
                {/* Doctor card */}
                <View
                    style={{
                        borderWidth: 1,
                        borderRadius: 12,
                        paddingHorizontal: 12,
                        paddingVertical: 10,
                        marginBottom: 16,
                        borderColor: 'gray'
                    }}
                >
                    <View
                        style={{
                            alignItems: "center",
                        }}
                    >
                        <Image source={image as any} style={{ height: 100, width: 100, borderRadius: 50 }} />
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: 'space-between',
                            marginTop: 12,
                        }}
                    >
                        <ThemedText style={{ fontSize: 12, marginRight: 4 }}>
                            Doctor name
                        </ThemedText>
                        <ThemedText
                            style={{ fontSize: 12, fontWeight: "600" }}
                        >
                            :
                        </ThemedText>
                        <ThemedText
                            style={{
                                fontSize: 12,
                                marginLeft: 4,
                                fontWeight: "600",
                            }}
                        >
                            {name}
                        </ThemedText>
                    </View>
                </View>

                {/* Collapsible: Appointment Details */}
                <CollapsibleSection title="Appointment Details">
                    <Row label="Appointment ID" value="APPEL02167616" />
                    <Row label="Appointment type" value={consultationType ?? ""} />
                    <Row label="Appointment fee" value="0 (INR)" />
                    <Row label="Duration" value="1 min" />
                    <Row label="Appointment Date" value={day?? ""} />
                    <Row label="Appointment Time" value={time?? ""} />
                    <Row label="Booking Status" value="Completed" />
                    <Row label="Doctor status" value="Not assigned" />
                </CollapsibleSection>

                {/* Collapsible: Symptoms Details */}
                <CollapsibleSection title="Symptoms Details">
                    <Row label="Symptoms" value={concern??""} />
                    <Row label="Description" value="NA" />
                    <Row label="Severity" value="Moderate" />
                    <Row label="Symptoms Duration" value="Weeks" />
                    <Row label="Sleep pattern" value="NA" />
                </CollapsibleSection>

                {/* Collapsible: Coupons Details */}
                <CollapsibleSection title="Coupons Details">
                    <Row label="Coupon Code" value="NA" />
                    <Row label="Coupon Discount" value="NA" />
                    <Row label="Discount amount" value="0" />
                </CollapsibleSection>

                {/* Collapsible: Booking Details */}
                <CollapsibleSection title="Booking Details">
                    <Row label="Booked for" value="Patient" />
                    <Row label="Booking Date" value="19 Nov, 2024" />
                    <Row label="Booking Time" value="01:31 PM" />
                    <Row label="Payment type" value="Online" />
                    <Row label="Payment Time" value="01:35 PM" />
                </CollapsibleSection>

                {/* Collapsible: Medical Report */}
                <CollapsibleSection title="Medical Report">
                    <TouchableOpacity
                        style={{
                            marginTop: 8,
                            borderWidth: 1,
                            borderRadius: 10,
                            paddingVertical: 10,
                            alignItems: "center",
                        }}
                    >
                        <ThemedText
                            style={{
                                fontSize: 14,
                                fontWeight: "600",
                            }}
                        >
                            Attach report
                        </ThemedText>
                    </TouchableOpacity>
                </CollapsibleSection>
            </ScrollView>
        </SafeAreaView>
    );
}
