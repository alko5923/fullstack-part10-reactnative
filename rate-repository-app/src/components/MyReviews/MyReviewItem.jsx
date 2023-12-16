import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    review: {
        flexDirection: 'row',
        margin: 5,
    },
    details: {
        flex: 1,
    },
    rating: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'blue',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    ratingText: {
        color: 'blue',
        fontWeight: 'bold',
    },
    reviewerName: {
        fontWeight: 'bold',
    },
    reviewText: {
        margin: 5,
        flexShrink: 1,
    },
});

const MyReviewItem = ({ myReview }) => {
    console.log("MyReview:", myReview)
    const formattedDate = myReview.createdAt.split('T')[0];
    return (
        <View style={styles.container}>
            <View style={styles.review}>
                <View style={styles.rating}>
                    <Text style={styles.ratingText}>{myReview.rating}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.reviewerName}>{myReview.repository.fullName}</Text>
                    <Text>{formattedDate}</Text>
                    <Text>{myReview.text}</Text>
                </View>
            </View>
        </View>
    );
}

export default MyReviewItem;