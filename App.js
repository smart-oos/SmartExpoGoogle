import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { Button } from 'react-native';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '899448507074-6jfj8ddqbcb24em2okoc37or8osu38s5.apps.googleusercontent.com',
    // iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    androidClientId: '899448507074-nvc4nm3etklekh17e0e1o6c8nrh9vv60.apps.googleusercontent.com',
    webClientId: '899448507074-h9qpchtklmcbt09610bi7m4o4dhvjsot.apps.googleusercontent.com',
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
    }
  }, [response]);

  return (
     <View style={styles.container}>
      <Image source={{ uri: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1637751429711/lBH26c5LJ.png' }} style={styles.logo} />
      <Text style={styles.instructions}>
        To sign in with your Google account, just press the button below!
      </Text>
      {/* <TouchableOpacity disabled={!request} onPress={() => alert('Hello, world!')} style={styles.button}> */}
        {/* <Text style={styles.buttonText}>Pick a photo</Text> */}
      {/* </TouchableOpacity> */}
      <View style={styles.button}>
        <Button 
          disabled={!request}
          title="Login with Google"
          onPress={() => {
          promptAsync();
          }}
        />
      </View>
    </View>   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 375,
    height: 150,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
    alignItems: 'center',
  },
  button: {
    backgroundColor: "lightgreen",
    padding: 20,
    height: 79,
    width: 460,
    borderRadius: 40,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },

});