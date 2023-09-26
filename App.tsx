/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons/faLightbulb'


import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = true;
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function Header(): JSX.Element {
  return(
    <View style={styles.header}>
      <FontAwesomeIcon icon={faLightbulb} size={100} transform="rotate-30" style={styles.lightBulbLogo} />
      <Text style={styles.headerText}>Wish There Would Be an App</Text>
    </View>
  )

}

function App(): JSX.Element {
  const isDarkMode = true;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Search">
          </Section>
          <Section title="Category">
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  header: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '90%',
    height: 'auto',
    paddingLeft: 20,
    paddingVertical: 20,
    flexDirection: 'row'
  },
  lightBulbLogo: {
    color: 'white',
    padding: 24,
    flex: 1
  },
  headerText: {
    width: '50%',
    justifyContent: 'center',
    fontSize: 25,
    fontFamily: 'sans-serif-medium',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    paddingLeft: 10
  }
});

export default App;
