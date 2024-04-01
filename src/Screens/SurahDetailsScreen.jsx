import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { surahDetails } from '../Database/QuranData';

const SurahDetailsScreen = ({ navigation, route }) => {
  const { englishName } = route.params;
  const [surahDescription, setSurahDescription] = useState(null);

  React.useLayoutEffect(() => {     
    navigation.setOptions({
    title: englishName,
    })
  }), [navigation];

  useEffect(() => {
    const selectedSurah = surahDetails.find(surah => surah.name.toLowerCase().includes(englishName.toLowerCase()));

    if (selectedSurah) {
      setSurahDescription(selectedSurah);
    }
  }, [englishName]);

  if (!surahDescription) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{surahDescription.name}</Text>
      <Text style={styles.text}>Number: {surahDescription.number}</Text>
      <Text style={styles.text}>Revelation Type: {surahDescription.revelationType}</Text>
      <Text style={styles.text}>Verses: {surahDescription.verses}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default SurahDetailsScreen;
