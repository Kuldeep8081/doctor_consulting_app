import React, { useMemo, useState } from "react";
import { View, TouchableOpacity, ScrollView, FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router, useLocalSearchParams } from "expo-router";
import { ThemedText } from "@/components/themed-text";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const doctors = [
  {
    id: "1",
    type: "hypertension",
    name: "Dr. Prem",
    specialization: "Gynecology + 2 others",
    languages: "Hindi, English, Tamil",
    experience: "7 years",
    ratings: "4.5",
    image:require("./../assets/images/doctors/hypertension.png"),
  },
  {
    id: "2",
    type: "hypertension",
    name: "Dr. Prem",
    specialization: "Gynecology + 2 others",
    languages: "Hindi, English, Tamil",
    experience: "7 years",
    ratings: "4.5",
    image:require("./../assets/images/doctors/hypertension.png"),
  },
  {
    id: "3",
    type: "anxiety",
    name: "Dr. Prem",
    specialization: "Gynecology + 2 others",
    languages: "Hindi, English, Tamil",
    experience: "7 years",
    ratings: "4.5",
    image:require("./../assets/images/doctors/hypertension.png"),
  },
  {
    id: "4",
    type: "obesity",
    name: "Dr. Prem",
    specialization: "Gynecology + 2 others",
    languages: "Hindi, English, Tamil",
    experience: "7 years",
    ratings: "4.5",
    image:require("./../assets/images/doctors/hypertension.png"),
  },
  {
    id: "5",
    type: "anxiety",
    name: "Dr. Prem",
    specialization: "Gynecology + 2 others",
    languages: "Hindi, English, Tamil",
    experience: "7 years",
    ratings: "4.5",
    image:require("./../assets/images/doctors/hypertension.png"),
  },
  {
    id: "6",
    type: "diabetes",
    name: "Dr. Prem",
    specialization: "Gynecology + 2 others",
    languages: "Hindi, English, Tamil",
    experience: "7 years",
    ratings: "4.5",
    image:require("./../assets/images/doctors/hypertension.png"),
  },
];

const FILTERS = ["All","Diabetes", "Hypertension", "Anxiety", "Obesity"];

const Concern2Screen = () => {
  const { concern } = useLocalSearchParams();
  const [selectedFilter, setSelectedFilter] = useState<any>(concern);

  const filteredDoctors = useMemo(() => {
    if (selectedFilter === "All") return doctors;
    const key = selectedFilter.toLowerCase();
    return doctors.filter((doc) => doc.type === key);
  }, [selectedFilter]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          paddingVertical: 16,
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={()=>router.back()}>
          <ThemedText type="title">
            <AntDesign name="arrow-left" size={22} />
          </ThemedText>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: 6,
          }}
        >
          <ThemedText>
          <Ionicons name="wallet-outline" size={22} />
          </ThemedText>
          <ThemedText>
          <FontAwesome name="rupee" size={14} />
          </ThemedText>
          <ThemedText style={{ fontSize: 15, fontWeight: "600" }}>150</ThemedText>
        </View>
      </View>

      {/* Filter chips row */}
      <View style={{ paddingHorizontal: 16, paddingBottom: 8 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ alignItems: "center" }}
        >
          {FILTERS.map((label) => {
            const isActive = selectedFilter === label;
            return (
              <TouchableOpacity
                key={label}
                onPress={() => setSelectedFilter(label)}
                style={{
                  paddingHorizontal: 14,
                  paddingVertical: 8,
                  borderRadius: 16,
                  borderWidth: 1,
                  borderColor: isActive ? "#2E7D32" : "#CCCCCC",
                  marginRight: 10,
                  backgroundColor:isActive?"green":"#9BB4C0"
                }}
              >
                <ThemedText
                  style={{
                    fontSize: 13,
                    fontWeight: isActive ? "700" : "400",
                  }}
                >
                  {label}
                </ThemedText>
              </TouchableOpacity>
            );
          })}

          {/* Filter icon chip */}
          <TouchableOpacity
            style={{
              paddingHorizontal: 10,
              paddingVertical: 8,
              borderRadius: 16,
              borderWidth: 1,
              borderColor: "#CCCCCC",
            }}
          >
            <Ionicons name="filter-outline" size={18} />
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Doctor list */}
      <FlatList
        data={filteredDoctors}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
        renderItem={({ item }) => (
          <View
            style={{
              borderRadius: 16,
              borderWidth: 1,
              borderColor: "#E0E0E0",
              padding: 14,
              marginBottom: 16,
            }}
          >
            {/* Top row */}
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
              <Image
                  source={item.image}
                  style={{ height: 140, width: 130, borderRadius: 50 }}
                />

              <View style={{ flex: 1, marginLeft: 12 }}>
                <ThemedText
                  style={{ fontSize: 16, fontWeight: "700", marginBottom: 2 }}
                >
                  {item.name}
                </ThemedText>

                <ThemedText style={{ fontSize: 12, marginBottom: 2 }}>
                  {item.specialization}
                </ThemedText>

                <ThemedText style={{ fontSize: 12, marginBottom: 2 }}>
                  {item.languages}
                </ThemedText>

                <ThemedText style={{ fontSize: 12, marginBottom: 2 }}>
                  Exp: {item.experience}
                </ThemedText>

                <ThemedText style={{ fontSize: 12, marginTop: 2 }}>
                  ₹15/min{" "}
                  <ThemedText style={{ fontSize: 12, fontWeight: "600" }}>
                    Free (5min)
                  </ThemedText>
                </ThemedText>
              </View>

              <View style={{flexDirection:'row',gap:3, alignItems: "center",}}>
                <AntDesign name="star" size={14} color="#F5A623" />
                <ThemedText style={{ fontSize: 12, marginTop: 2 }}>
                  {item.ratings}
                </ThemedText>
              </View>
            </View>

            {/* Bottom buttons */}
            <View
              style={{
                flexDirection: "row",
                marginTop: 12,
                justifyContent: "space-between",
              }}
            >
              <Link href={{
                pathname: "/ScheduleScreen",
                params: {concern:concern, name: item.name,image:item.image} ,
              }}
              >
                <View style={{
                  flex: 1,
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: "#2E7D32",
                  padding: 10,
                  alignItems: "center",
                  justifyContent:'center',
                }}>
                <ThemedText>
                  Schedule
                </ThemedText>
                </View>
              </Link>

              <Link href={"/ScheduleScreen"} >
                <View
                style={{
                  flex: 1,
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: "#2E7D32",
                  padding: 10,
                  alignItems: "center",
                }}>
                <ThemedText>
                  Free Call
                </ThemedText>
                </View>
              </Link>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Concern2Screen;
