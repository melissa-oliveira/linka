import Header from "@/components/baseComponets/Header";
import { Text, View } from "react-native";

export default function New() {
    return (
        <View>

            <Header
                userFirstName="Associação"
                userSurename="Betel"
                userProfileImageUrl="../../assets/images/profileImageAssociacaoBetel.png"
            ></Header>

            <Text>New Post and Event</Text>

        </View>
    )
}