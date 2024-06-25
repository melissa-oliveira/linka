import Header from "@/components/baseComponets/Header";
import { Text, View } from "react-native";

export default function Store() {
  return (
    <View>

      <Header
        userFirstName="Associação"
        userSurename="Betel"
        userProfileImageUrl="../../assets/images/profileImageAssociacaoBetel.png"
      ></Header>

      <Text>Store</Text>
    </View>
  );
}
