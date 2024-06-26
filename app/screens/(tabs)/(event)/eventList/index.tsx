import Header from "@/components/baseComponets/Header";
import EventCard from "@/components/eventComponents/EventCard";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function EventList() {
  return (
    <View style={styles.pageColor}>

      <Header
        userFirstName="Associação"
        userSurename="Betel"
        userProfileImageUrl="../../assets/images/profileImageAssociacaoBetel.png"
      ></Header>
      <ScrollView>
        <View style={styles.container}>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>Meus Eventos</Text>
            <Ionicons name="filter-outline" size={24} color={Colors.black} />
          </View>

          <EventCard
            eventTitle="Sopão Betel no Bairro São Francisco"
            eventDate="12/06/2024"
            eventJobs="25"
            eventFilledJobs="20"
            eventImageUrl="../../assets/images/sopaoImage.png"
            onPress={() => { }}
          ></EventCard>

          <EventCard
            eventTitle="Bazar Missionário"
            eventDate="10/06/2024"
            eventJobs="15"
            eventFilledJobs="7"
            eventImageUrl="../../assets/images/bazarImage.png"
            onPress={() => { }}
          ></EventCard>

          <EventCard
            eventTitle="Distribuição de Cestas Básicas"
            eventDate="25/05/2024"
            eventJobs="25"
            eventFilledJobs="20"
            eventImageUrl="../../assets/images/cestasImage.png"
            onPress={() => { }}
          ></EventCard>

          <EventCard
            eventTitle="Sopão Betel no Bairro Jardim União"
            eventDate="12/05/2024"
            eventJobs="25"
            eventFilledJobs="20"
            eventImageUrl="../../assets/images/sopaoImage.png"
            onPress={() => { }}
          ></EventCard>

        </View>
      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  pageColor: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  container: {
    padding: 30,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  }
})
