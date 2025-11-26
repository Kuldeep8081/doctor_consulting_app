import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/themed-text";
import { router, useLocalSearchParams } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

const PaymentSuccessfull = () => {
  const { concern, name, image, consultationType, day, weekday, time } = useLocalSearchParams();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        paddingTop: 40,
      }}
    >
      {/* Back Button */}
      <TouchableOpacity
        onPress={() => router.back()}
        style={{
          alignSelf: "flex-start",
          marginLeft: 20,
          marginBottom: 20,
        }}
      >
        <ThemedText>
          <AntDesign name="arrow-left" size={24} />
        </ThemedText>
      </TouchableOpacity>

      {/* Avatar + Check Circle */}
      <View
        style={{
          width: 120,
          height: 120,
          borderRadius: 60,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
          backgroundColor: "#E6F3E2",
        }}
      >
        <Image source={image as any} style={{ height: 100, width: 100, borderRadius: 50, position: 'relative' }} />
        {/* Check icon overlay */}
        <ThemedText
          style={{
            position: "absolute",
            bottom: 10,
            right: 8,
            borderRadius: 50,
            backgroundColor: "#2E7D32",
          }}
        >
          <AntDesign name="check-circle" size={25} />
        </ThemedText>
      </View>

      {/* Payment Text */}
      <ThemedText
        style={{
          fontSize: 22,
          fontWeight: "700",
          marginTop: 20,
        }}
      >
        Paid ₹50
      </ThemedText>

      <ThemedText
        style={{
          fontSize: 14,
          marginTop: 6,
        }}
      >
        Chat Consultation Booked Successfully
      </ThemedText>

      {/* Wallet Balance */}
      <ThemedText
        style={{
          fontSize: 14,
          marginTop: 30,
          marginBottom: 4,
        }}
      >
        Available Balance
      </ThemedText>

      <ThemedText
        style={{
          fontSize: 26,
          fontWeight: "700",
        }}
      >
        ₹ 660
      </ThemedText>

      {/* Bottom Button */}
      <View style={{ marginTop: "auto", marginBottom: 30, width: "100%" }}>
        <TouchableOpacity
          style={{
            marginHorizontal: 20,
            borderRadius: 10,
            paddingVertical: 14,
            alignItems: "center",
            backgroundColor: "#2E7D32",
          }}
          onPress={() => router.push(
            {
              pathname: "/MyBookingsScreen",
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
            Check Bookings
          </ThemedText>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default PaymentSuccessfull
