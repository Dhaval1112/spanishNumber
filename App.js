import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Sound from 'react-native-sound';

const App = () => {
  const soundList = [
    require('./assets/one.wav'),
    require('./assets/two.wav'),
    require('./assets/three.wav'),
    require('./assets/four.wav'),
    require('./assets/five.wav'),
    require('./assets/six.wav'),
    require('./assets/seven.wav'),
    require('./assets/eight.wav'),
    require('./assets/nine.wav'),
    require('./assets/ten.wav'),
  ];

  const playSound = sound => {
    const soundVar = new Sound(sound, Sound.MAIN_BUNDLE, err => {
      if (err) {
        console.log('Failed to play song');
      }
    });

    setTimeout(() => {
      soundVar.play();
    }, 1000);

    soundVar.release();
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <View style={styles.gridContainer}>
        {soundList.map((sound, index) => (
          <TouchableOpacity
            key={sound}
            onPress={() => {
              playSound(sound);
            }}
            style={styles.box}>
            <Text style={styles.text}>{sound}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b262c',
  },
  logo: {
    alignSelf: 'center',
    marginTop: 15,
  },
  gridContainer: {
    flex: 1,
    margin: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  box: {
    height: 110,
    width: '46%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 6,
    backgroundColor: '#0f4c75',
    borderRadius: 5,
    shadowColor: '#393e46',
    elevation: 5,
  },
  text: {
    fontSize: 50,
    color: '#ff4301',
  },
});
