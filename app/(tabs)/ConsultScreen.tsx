import { Image, View,FlatList } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { ThemedText } from '@/components/themed-text';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const Concens = [
  { id:"1",  concern:"Hypertension", img:require("./../../assets/images/concerns/hypertension.png") },
  { id:"2",  concern:"Anxiety",      img:require("./../../assets/images/concerns/anxiety.png") },
  { id:"3",  concern:"Obesity",      img:require("./../../assets/images/concerns/obesity.png") },
  { id:"4",  concern:"Diabetes",     img:require("./../../assets/images/concerns/diabetes.png") },
  { id:"5",  concern:"Obesity",      img:require("./../../assets/images/concerns/obesity.png") },
  { id:"6",  concern:"Hypertension", img:require("./../../assets/images/concerns/hypertension.png") },
  { id:"7",  concern:"Rubella",      img:require("./../../assets/images/concerns/rubella.png") },
  { id:"8",  concern:"Hypertension", img:require("./../../assets/images/concerns/hypertension.png") },
  { id:"9",  concern:"Frostbite",    img:require("./../../assets/images/concerns/frostbite.png") },
  { id:"10", concern:"Anxiety",      img:require("./../../assets/images/concerns/anxiety.png") },
  { id:"11", concern:"Diabetes",     img:require("./../../assets/images/concerns/diabetes.png") },
  { id:"12", concern:"Hypertension", img:require("./../../assets/images/concerns/hypertension.png") },
  { id:"13", concern:"Anxiety",      img:require("./../../assets/images/concerns/anxiety.png") },
  { id:"14", concern:"Hypertension", img:require("./../../assets/images/concerns/hypertension.png") },
  { id:"15", concern:"Diabetes",     img:require("./../../assets/images/concerns/diabetes.png") },
  { id:"16", concern:"Anxiety",      img:require("./../../assets/images/concerns/anxiety.png") },
];

export default function ConsultScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Header */}
      <View style={{ backgroundColor:"#A1BC98", paddingBottom:30, borderBottomRightRadius:30, borderBottomLeftRadius:30 }}>
        <Link href={"/modal"} style={{ marginTop:40, marginLeft:30 }}>
          <ThemedText type='title'>
            <AntDesign name="arrow-left" size={24} />
          </ThemedText>
        </Link>
        <ThemedText type='subtitle' style={{ fontSize:30, marginLeft:30, marginTop:30 }}>
          Select Concern
        </ThemedText>
      </View>

      {/* Content + FlatList (scrollable) */}
      <View style={{flex: 1,paddingHorizontal: 25 }}>
        <ThemedText type='subtitle' style={{ marginVertical: 20 }}>
          Top Concens
        </ThemedText>

        <FlatList
          data={Concens}
          numColumns={3}
          keyExtractor={(item) => item.id}
          style={{ flex: 1 }} // 👈 this plus parent flex:1 makes it scroll
          contentContainerStyle={{ paddingBottom: 20 }}
          columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 16 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Link
              href={{
                pathname: "/Concern2Screen",
                params: { concern: item.concern },
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Image
                  source={item.img}
                  style={{ height: 70, width: 70, borderRadius: 50 }}
                />
                <ThemedText style={{ fontSize: 12 }}>{item.concern}</ThemedText>
              </View>
            </Link>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
