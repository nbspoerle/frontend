import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function MainMenu({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Robot Explorer</Text>
      <Text style={styles.subtitle}>Select a collection to explore</Text>

      <TouchableOpacity
        style={[styles.button, styles.blue]}
        onPress={() => navigation.navigate('RobotExamples')}
      >
        <Text style={styles.buttonText}>Examples Robots</Text>
        <Text style={styles.buttonSub}>Explore robots with PNG and JPG images</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.green]}
        onPress={() => navigation.navigate('RobotsExamplesSVG')}
      >
        <Text style={styles.buttonText}>Robots SVG</Text>
        <Text style={styles.buttonSub}>Explore robots with SVG images</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#111827',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#6b7280',
    marginBottom: 32,
  },
  button: {
    paddingVertical: 28,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: 'center',
  },
  blue: { backgroundColor: '#2563eb' },
  green: { backgroundColor: '#047857' },
  buttonText: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  buttonSub: { color: '#e5e7eb', fontSize: 13, marginTop: 4 },
});
