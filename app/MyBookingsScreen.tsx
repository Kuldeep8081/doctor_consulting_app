import React, { useState } from "react";
import { View, TouchableOpacity, ScrollView, Image, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/themed-text";
import { router, useLocalSearchParams } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const bookings = [
  {
    id: "1",
    doctorName: "Dr. Ratan Tyagi",
    speciality: "Orthodontist",
    status: "Completed",
    date: "Tuesday, 13/09/2023",
    time: "10:30 AM",
    hasPrescription: true,
    doctorImage: require("./../assets/images/doctors/hypertension.png"),
  },
  {
    id: "2",
    doctorName: "Dr. Deepa Godara",
    speciality: "Orthodontist",
    status: "Completed",
    date: "Tuesday, 13/09/2023",
    time: "10:30 AM",
    hasPrescription: false,
    doctorImage: require("./../assets/images/doctors/hypertension.png"),
  },
];

const MyBookingsScreen = () => {
  const { concern, name, image, consultationType, day, weekday, time } =
    useLocalSearchParams<{
      concern?: string;
      name?: string;
      image?: string;
      consultationType?: string;
      day?: string;
      weekday?: string;
      time?: string;
    }>();

  const [visited, setVisited] = useState(false);
  const [details, setDetails] = useState(false);

  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState<string | null>(
    null
  );

  const handleStartCall = (id: string) => {
    setSelectedBookingId(id);
    setShowDisclaimer(true);
  };

  const proceedToCall = () => {
    setShowDisclaimer(false);

    const callId = selectedBookingId ?? "test_call";
    const userId = "user_" + Date.now();
    const userName = (name as string) || "Guest";

    router.push({
      pathname: "/VideoCallScreen",
      params: {
        callId,
        userId,
        userName,
      },
    });
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
          type="title"
          style={{ marginTop: 30, marginLeft: 25 }}
        >
          My Bookings
        </ThemedText>
      </View>

      {/* Tabs */}
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 20,
          marginBottom: 12,
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            paddingVertical: 10,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: visited ? "white" : "green",
          }}
          onPress={() => setVisited(!visited)}
        >
          <ThemedText
            style={{
              textAlign: "center",
              fontSize: 14,
              fontWeight: "600",
            }}
          >
            Appointments
          </ThemedText>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            paddingVertical: 10,
            borderRadius: 20,
            borderWidth: 1,
            marginLeft: 10,
            borderColor: visited ? "green" : "white",
          }}
          onPress={() => setVisited(!visited)}
        >
          <ThemedText
            style={{
              textAlign: "center",
              fontSize: 14,
            }}
          >
            Orders
          </ThemedText>
        </TouchableOpacity>
      </View>

      {/* Filter row */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingHorizontal: 20,
          marginBottom: 8,
        }}
      >
        <ThemedText style={{ fontSize: 13, marginRight: 6 }}>
          Filter Appointments
        </ThemedText>
        <MaterialIcons name="filter-list" size={18} />
      </View>

      {/* Booking from current flow */}
      <View
        style={{
          borderWidth: 1,
          borderRadius: 16,
          padding: 14,
          marginBottom: 16,
          borderColor: "gray",
          marginLeft: 20,
          marginRight: 20,
        }}
      >
        {/* Top row: doc + status + image */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <View style={{ flex: 1 }}>
            <ThemedText
              style={{ fontSize: 15, fontWeight: "700", marginBottom: 2 }}
            >
              {name}
            </ThemedText>

            <ThemedText style={{ fontSize: 12, marginBottom: 6 }}>
              {concern}
            </ThemedText>

            {/* Status pill */}
            <View
              style={{
                alignSelf: "flex-start",
                paddingHorizontal: 10,
                paddingVertical: 4,
                borderRadius: 12,
                borderWidth: 1,
              }}
            >
              <ThemedText
                style={{
                  fontSize: 11,
                  fontWeight: "600",
                }}
              >
                upcoming
              </ThemedText>
            </View>
          </View>

          {/* Doctor image */}
          {image && (
            <Image
              source={image as any}
              style={{
                width: 48,
                height: 48,
                borderRadius: 8,
                marginLeft: 10,
              }}
            />
          )}
        </View>

        {/* Date & time row */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 12,
          }}
        >
          <Ionicons name="calendar-outline" size={16} />
          <ThemedText
            style={{ fontSize: 12, marginLeft: 6, flexShrink: 1 }}
          >
            {day}, {weekday}
          </ThemedText>

          <Ionicons
            name="time-outline"
            size={16}
            style={{ marginLeft: 16 }}
          />
          <ThemedText style={{ fontSize: 12, marginLeft: 6 }}>
            {time}
          </ThemedText>
        </View>

        {/* Buttons row */}
        <View
          style={{
            flexDirection: "row",
            marginTop: 12,
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              borderWidth: 1,
              borderRadius: 20,
              paddingVertical: 8,
              alignItems: "center",
              marginRight: 8,
              borderColor: details ? "green" : "white",
            }}
            onPress={() => (
              setDetails(!details),
              router.push({
                pathname: "/AppointmentDetailsScreen",
                params: {
                  concern,
                  name,
                  image,
                  consultationType,
                  day,
                  weekday,
                  time,
                },
              })
            )}
          >
            <ThemedText
              style={{
                fontSize: 13,
                fontWeight: "600",
              }}
            >
              View Details
            </ThemedText>
          </TouchableOpacity>

          {/* Start Call for current booking */}
          <TouchableOpacity
            style={{
              flex: 1,
              borderWidth: 1,
              borderRadius: 20,
              paddingVertical: 8,
              alignItems: "center",
              marginLeft: 8,
              borderColor: "white",
            }}
            onPress={() => handleStartCall("current")}
          >
            <ThemedText
              style={{
                fontSize: 13,
                fontWeight: "600",
              }}
            >
              Start Call
            </ThemedText>
          </TouchableOpacity>
        </View>
      </View>

      {/* Static "Check Prescription" banner */}
      <TouchableOpacity
        style={{
          marginTop: 12,
          borderRadius: 12,
          borderWidth: 1,
          paddingVertical: 10,
          paddingHorizontal: 12,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderColor: "gray",
          marginLeft: 20,
          marginRight: 20,
          marginBlock: 10,
          backgroundColor: "gray",
        }}
      >
        <View style={{ flex: 1 }}>
          <ThemedText
            style={{ fontSize: 13, fontWeight: "600" }}
          >
            Check Prescription
          </ThemedText>
          <ThemedText
            style={{ fontSize: 11, marginTop: 2 }}
            numberOfLines={1}
          >
            Dr. Deepa has suggested some solution
          </ThemedText>
        </View>
        <AntDesign name="right" size={16} />
      </TouchableOpacity>

      {/* Past bookings list */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        {bookings.map((item) => (
          <View
            key={item.id}
            style={{
              borderWidth: 1,
              borderRadius: 16,
              padding: 14,
              marginBottom: 16,
              borderColor: "gray",
            }}
          >
            {/* Top row: doc + status + image */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
              }}
            >
              <View style={{ flex: 1 }}>
                <ThemedText
                  style={{ fontSize: 15, fontWeight: "700", marginBottom: 2 }}
                >
                  {item.doctorName}
                </ThemedText>

                <ThemedText style={{ fontSize: 12, marginBottom: 6 }}>
                  {item.speciality}
                </ThemedText>

                {/* Status pill */}
                <View
                  style={{
                    alignSelf: "flex-start",
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    borderRadius: 12,
                    borderWidth: 1,
                  }}
                >
                  <ThemedText
                    style={{
                      fontSize: 11,
                      fontWeight: "600",
                    }}
                  >
                    {item.status}
                  </ThemedText>
                </View>
              </View>

              {/* Doctor image */}
              <Image
                source={item.doctorImage}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 8,
                  marginLeft: 10,
                }}
              />
            </View>

            {/* Date & time row */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 12,
              }}
            >
              <Ionicons name="calendar-outline" size={16} />
              <ThemedText
                style={{ fontSize: 12, marginLeft: 6, flexShrink: 1 }}
              >
                {item.date}
              </ThemedText>

              <Ionicons
                name="time-outline"
                size={16}
                style={{ marginLeft: 16 }}
              />
              <ThemedText style={{ fontSize: 12, marginLeft: 6 }}>
                {item.time}
              </ThemedText>
            </View>

            {/* Buttons row */}
            <View
              style={{
                flexDirection: "row",
                marginTop: 12,
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  borderWidth: 1,
                  borderRadius: 20,
                  paddingVertical: 8,
                  alignItems: "center",
                  marginRight: 8,
                  borderColor: details ? "green" : "white",
                }}
                onPress={() => (
                  setDetails(!details),
                  router.push({
                    pathname: "/AppointmentDetailsScreen",
                    params: {
                      concern,
                      name,
                      image,
                      consultationType,
                      day,
                      weekday,
                      time,
                    },
                  })
                )}
              >
                <ThemedText
                  style={{
                    fontSize: 13,
                    fontWeight: "600",
                  }}
                >
                  View Details
                </ThemedText>
              </TouchableOpacity>

              {item.status !== "Completed" && (
                <TouchableOpacity
                  style={{
                    flex: 1,
                    borderWidth: 1,
                    borderRadius: 20,
                    paddingVertical: 8,
                    alignItems: "center",
                    marginLeft: 8,
                    borderColor: "white",
                  }}
                  onPress={() => handleStartCall(item.id)}
                >
                  <ThemedText
                    style={{
                      fontSize: 13,
                      fontWeight: "600",
                    }}
                  >
                    Start Call
                  </ThemedText>
                </TouchableOpacity>
              )}
            </View>

            {/* Prescription section */}
            {item.hasPrescription && (
              <TouchableOpacity
                style={{
                  marginTop: 12,
                  borderRadius: 12,
                  borderWidth: 1,
                  paddingVertical: 10,
                  paddingHorizontal: 12,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderColor: "gray",
                }}
              >
                <View style={{ flex: 1 }}>
                  <ThemedText
                    style={{ fontSize: 13, fontWeight: "600" }}
                  >
                    Check Prescription
                  </ThemedText>
                  <ThemedText
                    style={{ fontSize: 11, marginTop: 2 }}
                    numberOfLines={1}
                  >
                    Dr. Deepa has suggested some solution
                  </ThemedText>
                </View>
                <AntDesign name="right" size={16} />
              </TouchableOpacity>
            )}
          </View>
        ))}
      </ScrollView>

      {/* Disclaimer Modal */}
      <Modal visible={showDisclaimer} transparent animationType="slide">
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <View
            style={{
              paddingHorizontal: 24,
              paddingTop: 20,
              paddingBottom: 24,
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              borderWidth: 1,
              backgroundColor: "#FFFFFF",
            }}
          >
            <ThemedText
              style={{
                fontSize: 16,
                fontWeight: "700",
                textAlign: "center",
                marginBottom: 12,
                color:'gray'
              }}
            >
              Disclaimer
            </ThemedText>

            <ThemedText
              style={{
                fontSize: 13,
                textAlign: "center",
                marginBottom: 20,
                color:'gray'
              }}
            >
              By continuing, you consent to this call being recorded for quality
              and support purposes. Please provide accurate details to help the
              doctor assist you effectively. Read Terms & Conditions...
            </ThemedText>

            {/* Proceed */}
            <TouchableOpacity
              onPress={proceedToCall}
              style={{
                borderRadius: 10,
                paddingVertical: 12,
                alignItems: "center",
                marginBottom: 10,
                borderWidth: 1,
                backgroundColor: "#2E7D32",
              }}
            >
              <ThemedText
                style={{
                  fontSize: 15,
                  fontWeight: "600",
                  color: "#FFFFFF",
                }}
              >
                Proceed
              </ThemedText>
            </TouchableOpacity>

            {/* Cancel */}
            <TouchableOpacity
              onPress={() => setShowDisclaimer(false)}
              style={{
                borderRadius: 10,
                paddingVertical: 12,
                alignItems: "center",
                borderWidth: 1,
              }}
            >
              <ThemedText
                style={{
                  fontSize: 15,
                  fontWeight: "600",
                  color:'gray'
                }}
              >
                Cancel
              </ThemedText>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default MyBookingsScreen;
