import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function AppLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: 'blue'
            }}
        >
            <Tabs.Screen
                name="(feed)/feed/index"
                options={{
                    title: 'Feed',
                    tabBarIcon: ({ color }) => <Ionicons name='home-outline' size={28} color={color} />,
                }}
            />
            <Tabs.Screen
                name="(event)/event/index"
                options={{
                    title: 'Eventos',
                    tabBarIcon: ({ color }) => <Ionicons name='calendar-clear-outline' size={28} color={color} />,
                }}
            />
            <Tabs.Screen
                name="(store)/store/index"
                options={{
                    title: 'Loja',
                    tabBarIcon: ({ color }) => <Ionicons name='cart-outline' size={28} color={color} />,
                }}
            />
            <Tabs.Screen
                name="(profile)/profile/index"
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({ color }) => <Ionicons name='person-outline' size={28} color={color} />,
                }}
            />
        </Tabs>
    )
}
