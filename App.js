/**
 * Sample Embrace React Native App
 * CodePush is integrated
 */

 import React from 'react';

 import {
   initialize,
   logBreadcrumb,
   setUsername,
   setUserEmail,
   startMoment,
   endMoment
 } from 'react-native-embrace'
 
 import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   StatusBar,
   Pressable,
   Image,
   TextInput
 } from 'react-native';
 
 import {
   Colors
 } from 'react-native/Libraries/NewAppScreen';
 
 const App: () => React$Node = () => {
   var rnVersion = "0.63.3"
   var sdkVersion = "3.9.1 Android RV Custom build"
   var momentId = "RN-MOMENT-ID"
 
   initialize();
   logBreadcrumb(`Welcome to the BitRise Demo APP RN v${rnVersion}`);
 
   var userName = "rnappuser";
   var userEmail = "rnapp@embrace.io";
 
   const throwWithException = () => {
     logBreadcrumb("Bitrise breadcrumb: before crash");
     throw new Error('This is a crash');
   }

   const onChangeText = (user, email) => {
     userName = user;
     userEmail = email;
   }
   const loginToEmbrace = () => {
     setUsername(userName);
     setUserEmail(userEmail);
   }
 
   return (
     <>
       <StatusBar barStyle="dark-content" />
       <SafeAreaView>
         <ScrollView
           contentInsetAdjustmentBehavior="automatic"
           style={styles.scrollView}>
           {global.HermesInternal == null ? null : (
             <View style={styles.engine}>
               <Text style={styles.footer}>Engine: Hermes</Text>
             </View>
           )}
           <View style={styles.header}>
             <Image source={{ uri: 'https://dash.embrace.io/e0641bb6.png' }}
               style={styles.imageTitle} />
           </View>
           <View style={styles.body}>
             <View>
               <View style={styles.sectionDescription}>
                 <Text style={styles.sectionAction}>App info:</Text>
                 <Text style={{ marginHorizontal: 10 }}>RN v{rnVersion}</Text>
                 <Text style={{ marginHorizontal: 10 }}>Embrace RN SDK v{sdkVersion}</Text>
               </View>
             </View>
             <View style={styles.sectionLogin}>
               <Text style={styles.sectionAction}>Dashboard</Text>
               <View>
                 <TextInput
                   style={styles.input}
                   onChangeText={(user) => {onChangeText(user, userEmail)}}
                   defaultValue={userName}
                 />
               </View>
               <View>
                 <TextInput
                   style={styles.input}
                   onChangeText={(email) => {onChangeText(userName, email)}}
                   defaultValue={userEmail}
                 />
               </View>
               <View style={styles.stdButton}>
                 <Pressable onPress={() => {loginToEmbrace()}}>
                   <Text style={styles.stndButtonText}>Identify me!</Text>
                 </Pressable>
               </View>
             </View>
             <View style={styles.sectionButton}>
               <Text style={styles.sectionAction}>Crash</Text>
               <View style={styles.crashButton}>
                 <Pressable onPress={() => {throwWithException()}}>
                   <Text style={styles.stndButtonText}>Crash the app</Text>
                 </Pressable>
               </View>
               <Text style={styles.sectionAction}>Moments</Text>
               <View style={styles.stdButton}>
                 <Pressable onPress={() => {startMoment(momentId)}}>
                   <Text style={styles.stndButtonText}>Start moment</Text>
                 </Pressable>
               </View>
               <View style={styles.stdButton}>
                 <Pressable onPress={() => {endMoment(momentId)}}>
                   <Text style={styles.stndButtonText}>End moment</Text>
                 </Pressable>
               </View>
             </View>
           </View>
         </ScrollView>
       </SafeAreaView>
     </>
   );
 };
 
 const styles = StyleSheet.create({
   scrollView: {
     backgroundColor: Colors.lighter,
   },
   engine: {
     position: 'absolute',
     right: 0,
   },
   lineDecorator: {
     marginBottom: 1,
     height: 0.2,
     backgroundColor: Colors.lighter,
     elevation: 0.8
   },
   header: {
     backgroundColor: '#35475b',
     padding: 10,
     height: 50
   },
   imageTitle: {
     flex: 1,
     resizeMode: 'contain',
     padding: 5
   },
   headerTitle: {
     fontSize: 24,
     fontWeight: '600',
     textAlign: 'center',
     color: Colors.white
   },
   body: {
     backgroundColor: Colors.white,
   },
   sectionAction: {
     fontSize: 16,
     marginBottom: 5,
     fontWeight: '600',
     color: Colors.black
   },
   sectionDescription: {
     marginTop: 10,
     marginBottom: 10,
     marginHorizontal: 60,
     fontSize: 12,
     fontWeight: '500',
     color: Colors.dark,
     alignItems: 'center'
   },
   highlight: {
     fontWeight: '500',
   },
   sectionLogin: {
     flex: 1,
     marginTop: 30,
     alignItems: 'center'
   },
   input: {
     height: 40,
     width: 300,
     borderWidth: 0.2,
     borderRadius: 100,
     textAlign: 'center',
     marginBottom: 10
   },
   sectionButton: {
     flex: 1,
     marginTop: 10,
     marginBottom: 10,
     alignItems: 'center'
   },
   stndButtonText: {
     color: Colors.white,
     textAlign: 'center'
   },
   crashButton: {
     flex: 1,
     padding: 10,
     width: 300,
     borderRadius: 100,
     marginBottom: 30,
     backgroundColor: '#d87259'
   },
   stdButton: {
     flex: 1,
     padding: 10,
     width: 300,
     borderRadius: 100,
     marginBottom: 30,
     backgroundColor: '#5b7783',
   },
   footer: {
     color: Colors.dark,
     fontSize: 12,
     fontWeight: '600',
     padding: 4,
     paddingRight: 12,
     borderColor: '#38495c',
     borderWidth: 1
   }
 });
 
 export default App;