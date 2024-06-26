import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.orange,
        tabBarInactiveTintColor: Colors.gray,
        tabBarStyle: {
          height: 70,
          paddingTop: 7,
        },
        tabBarLabelStyle: {
          marginBottom: 10,
          backgroundColor: 'transparent'
        },
      }}
    >
      <Tabs.Screen
        name="(feed)/feed/index"
        options={{
          title: "Feed",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(event)"
        options={{
          title: "Eventos",
          tabBarIcon: ({ color }) => (
            <Ionicons name="calendar-outline" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(new)/new"
        options={{
          title: "Novo",
          tabBarIcon: () => (
            <Ionicons name="add-circle" size={52} color={Colors.orange} style={{ marginBottom: -5 }} />
          ),
          tabBarLabelStyle: {
            color: Colors.white
          }
        }}
      />
      <Tabs.Screen
        name="(store)/store/index"
        options={{
          title: "Loja",
          tabBarIcon: ({ color }) => (
            <Ionicons name="cart-outline" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(profile)/profile/index"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
