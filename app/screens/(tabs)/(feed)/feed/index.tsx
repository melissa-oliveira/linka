import Header from "@/components/baseComponets/Header";
import Post from "@/components/feedComponents/Post";
import { Colors } from "@/constants/Colors";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Feed() {
  return (
    <View style={styles.pageColor}>
      <Header
        userFirstName="Associação"
        userSurename="Betel"
        userProfileImageUrl="../../assets/images/profileImageAssociacaoBetel.png"
      ></Header>

      <ScrollView >
        <View style={styles.container}>
          <Post
            userFirstName="Associação"
            userSurename="Betel"
            userProfileImageUrl="../../assets/images/profileImageAssociacaoBetel.png"
            userType="Entidade"
            postDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            postImageUrl="../../assets/images/postImage1.png"
            postLikesQnt="120"
            postCommentsQnt="20"
          />

          <Post
            userFirstName="Maria"
            userSurename="da Silva"
            userProfileImageUrl="../../assets/images/profileImageMaria.png"
            userType="Voluntário"
            postDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            postImageUrl="../../assets/images/postImage2.png"
            postLikesQnt="120"
            postCommentsQnt="20"
          />
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
    backgroundColor: Colors.white,
    padding: 10,
    marginBottom: 75
  }
})

