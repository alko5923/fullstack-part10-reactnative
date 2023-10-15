import {View, StyleSheet, Text} from 'react-native';
import {Link} from "react-router-native";

const styles = StyleSheet.create({
    tab: {
    },
    content: {
        color: "#ffffff",
        fontWeight: "bold",
    }
    // ...
});

const AppBarTab = ({ content, style }) => {
    return (
        <View style={[styles.tab, style]}>
            <Link to={`/${content}`}>
                <Text style={styles.content}>{content}</Text>
            </Link>
        </View>
    );
};

export default AppBarTab;
