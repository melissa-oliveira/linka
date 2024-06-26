import Header from "@/components/baseComponets/Header";
import ProfileInfo from "@/components/profileComponents/ProfileInfo";
import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";

export default function Profile() {
  return (
    <View style={styles.pageColor}>
      <View style={styles.container}>
        <ProfileInfo
          usrename="associacaobetel"
          userFirstName="Associação"
          userSurename="Betel"
          userProfileImageUrl="../../assets/images/profileImageAssociacaoBetel.png"
          userType="Entidade"
          userFollowers="127"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageColor: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  container: {
    backgroundColor: Colors.white,
    marginBottom: 75,
    padding: 20,
  }
})