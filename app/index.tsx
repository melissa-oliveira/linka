import { Redirect } from "expo-router";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

export default function indexScreen() {

    const [redirect, setRedirect] = React.useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setRedirect(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View>
            {redirect ? <Redirect href="/screens/(feed)/feed" /> :
                <Text>LINKA</Text>}
        </View>
    );
}