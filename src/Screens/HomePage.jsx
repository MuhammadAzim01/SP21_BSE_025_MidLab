import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { surahNames, surahDetails } from '../Database/QuranData';

const HomePage = ({ navigation }) => {
  const [searchItem, setSearchItem] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [selectedOption, setSelectedOption] = useState('Surah');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (selectedOption === 'Surah') {
      const filteredSurahs = surahNames.filter(surah => {
        return surah.englishName.toLowerCase().includes(searchItem.toLowerCase()) ||
               surah.arabicName.includes(searchItem);
      });
      setFilteredData(filteredSurahs);
    } else {
      // For 'Juz' option, display random data or predefined set of data
      const randomData = Array.from({ length: 5 }, (_, index) => ({
        englishName: `Juz ${index + 1}`,
        arabicName: `جزء ${index + 1}`
      }));
      setFilteredData(randomData);
    }
  }, [selectedOption, searchItem]);

  const onPress = (item) => {
    navigation.navigate('SurahDetail', item);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => onPress(item)}>
      <View style={styles.itemContainer}>
        <Text style={styles.englishName}>{item.englishName}</Text>
        <Text style={styles.arabicName}>{item.arabicName}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const containerStyle = darkMode ? [styles.container, styles.darkContainer] : styles.container;
  const textHeaderStyle = darkMode ? [styles.header, styles.darkText] : styles.header;

  return (
    <View style={containerStyle}>
      <View style={styles.greetingContainer}>
        <Text style={styles.greetingText}>Assalam-o-Alaikum</Text>
      </View>
      <View style={styles.headerContainer}>
        {/* Add header and time/location details here */}
        <Text style={styles.headerTitle}>Isha</Text>
        <View style={styles.timeLocationContainer}>
          <Text style={styles.timeLocationText}>7:30 PM</Text>
          <Text style={styles.timeLocationText}>Location: Masjid</Text>
        </View>
      </View>
      <Text style={textHeaderStyle}>Reading {selectedOption}</Text>
      <TextInput
        style={styles.inputText}
        placeholder="Search..."
        placeholderTextColor="#003f5c"
        onChangeText={value => setSearchItem(value)}
        value={searchItem}
      />
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => handleOptionChange('Surah')} style={[styles.optionButton, selectedOption === 'Surah' && styles.selectedOption]}>
          <Text style={styles.optionButtonText}>Surah</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOptionChange('Juz')} style={[styles.optionButton, selectedOption === 'Juz' && styles.selectedOption]}>
          <Text style={styles.optionButtonText}>Juz</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={toggleDarkMode} style={styles.toggleButton}>
        <Text style={styles.toggleButtonText}>{darkMode ? 'Light Mode' : 'Dark Mode'}</Text>
      </TouchableOpacity>
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  greetingContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  greetingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000', // Default color
  },
  headerContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000', // Default color
  },
  darkText: {
    color: '#fff', // Dark mode color
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  timeLocationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeLocationText: {
    fontSize: 16,
  },
  itemContainer: {
    paddingVertical: 20,
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    height: 60,
  },
  englishName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  arabicName: {
    fontSize: 18,
    fontStyle: 'italic',
    marginRight: 10,
  },
  flatList: {
    flex: 1,
  },
  inputText: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  optionButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
  selectedOption: {
    backgroundColor: '#b3b3b3',
  },
  optionButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  toggleButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  toggleButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomePage;
