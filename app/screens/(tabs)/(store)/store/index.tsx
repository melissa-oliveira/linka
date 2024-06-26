import Button from '@/components/baseComponets/Button';
import Header from '@/components/baseComponets/Header';
import RewardCard from '@/components/storeComponents/RewardCard';
import { Colors } from '@/constants/Colors';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function Store() {
  const rewards = [
    {
      rewardImageUrl: '../../assets/images/storeImage1.png',
      rewardTitle: 'Caneca Rosa',
      rewardPoints: '20',
      rewardQtn: '10',
    },
    {
      rewardImageUrl: '../../assets/images/storeImage2.png',
      rewardTitle: 'Caderno Simples',
      rewardPoints: '5',
      rewardQtn: '15',
    },
    {
      rewardImageUrl: '../../assets/images/storeImage3.png',
      rewardTitle: 'Caneta',
      rewardPoints: '2',
      rewardQtn: '30',
    },
  ];

  return (
    <View style={styles.pageColor}>
      <Header
        userFirstName="Associação"
        userSurename="Betel"
        userProfileImageUrl="../../assets/images/profileImageAssociacaoBetel.png"
      ></Header>

      <ScrollView >
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Minha Loja</Text>
          </View>
          <View style={styles.rewardsContainer}>
            {rewards.map((reward, index) => (
              <RewardCard
                key={index}
                rewardImageUrl={reward.rewardImageUrl}
                rewardTitle={reward.rewardTitle}
                rewardPoints={reward.rewardPoints}
                rewardQtn={reward.rewardQtn}
              />
            ))}
          </View>
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
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rewardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
