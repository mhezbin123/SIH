import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native';
import { fetchGlobalHealthNews } from '../../components/newsService';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const defaultImage = 'https://via.placeholder.com/100'; // Default image URL

export default function News() {
  const navigation = useNavigation();
  const [articles, setArticles] = useState([]);
  const [displayedArticles, setDisplayedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(5); // Number of articles to display

  useEffect(() => {
    const getArticles = async () => {
      try {
        const fetchedArticles = await fetchGlobalHealthNews();
        if (fetchedArticles.length === 0) {
          setError('No articles found.');
        }
        setArticles(fetchedArticles);
        setDisplayedArticles(fetchedArticles.slice(0, visibleCount)); // Initialize with limited articles
      } catch (error) {
        setError('Error fetching articles.');
      } finally {
        setLoading(false);
      }
    };
    getArticles();
  }, []);

  const loadMoreArticles = () => {
    const newCount = visibleCount + 5;
    setVisibleCount(newCount);
    setDisplayedArticles(articles.slice(0, newCount)); // Update displayed articles
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image
        source={{ uri: item.image || defaultImage }}
        style={styles.image}
        resizeMode='cover'
      />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
      </View>
    </View>
  );

  if (loading) {
    return <ActivityIndicator style={styles.loading} size="large" color="#4895EF" />;
  }

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButtonWrapper} onPress={() => navigation.goBack()}>
          <Ionicons
            name={"arrow-back-outline"}
            color={"#333"}
            size={25}
          />
        </TouchableOpacity>

        <Text style={styles.heading}>News</Text>
        <Text style={styles.subheading}>Global Health News</Text>

        {/* News List */}
        <FlatList
          data={displayedArticles}
          renderItem={renderItem}
          keyExtractor={item => item.url}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            articles.length > visibleCount && (
              <TouchableOpacity style={styles.loadMoreButton} onPress={loadMoreArticles}>
                <Text style={styles.loadMoreText}>Load More</Text>
              </TouchableOpacity>
            )
          }
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Allows the page to scroll fully
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa', // Light background for modern look
  },
  backButtonWrapper: {
    height: 40,
    width: 40,
    backgroundColor: "#E8E8E8", // Gray background for the back button
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10, // Reduced space below the back button
  },
  heading: {
    fontSize: 28,
    fontFamily: 'montbold', // Bold font for heading
    color: '#333',
    marginBottom: 4,
    paddingHorizontal: 10,
    marginTop: 0, // Reduced the top margin to decrease the gap from the back button
  },
  subheading: {
    fontSize: 18,
    fontFamily: 'montregular', // Regular font for subheading
    color: '#666',
    marginBottom: 10,
    marginLeft: 12,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 10, // Smooth rounded corners
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 1, // No shadows, just borders
    borderColor: '#b9b9b9',//'#e2e8f0', // Light gray border
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontFamily: 'montregular', // Regular font for titles
    color: '#333',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    fontFamily: 'montlight', // Light font for descriptions
    color: '#555',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'red',
    fontSize: 18,
  },
  loadMoreButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#000000', // Black background for the button
    borderRadius: 10,
    alignItems: 'center',
  },
  loadMoreText: {
    fontSize: 16,
    fontFamily: 'montbold', // Bold font for the button text
    color: '#ffffff', // White text for contrast
  },
});