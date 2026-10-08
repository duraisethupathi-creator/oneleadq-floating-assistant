import {SafeAreaView,StyleSheet,Text,Pressable} from 'react-native';
import {useRef} from 'react';
import FloatingAssistant,{FloatingAssistantHandle} from '../src/components/FloatingAssistant';

export default function Home(){
 const assistantRef=useRef<FloatingAssistantHandle>(null);
 return <SafeAreaView style={s.page}>
  <Pressable style={s.touchArea} onPress={()=>assistantRef.current?.handleScreenTouch()}>
   <Text style={s.brand}>ONELEADQ</Text>
   <Text style={s.title}>Floating Assistant</Text>
   <Text style={s.sub}>Standalone Android test build</Text>
   <Text style={s.help}>Touch anywhere on the display to stop the assistant. Tap the assistant to open chat.</Text>
  </Pressable>
  <FloatingAssistant ref={assistantRef}/>
 </SafeAreaView>
}

const s=StyleSheet.create({
 page:{flex:1,backgroundColor:'#F8F4E8'},
 touchArea:{flex:1,padding:28,paddingTop:70},
 brand:{fontSize:15,fontWeight:'900',letterSpacing:2,color:'#C28A2C'},
 title:{fontSize:32,fontWeight:'900',color:'#0B5D4B',marginTop:8},
 sub:{fontSize:17,color:'#61706B',marginTop:6},
 help:{fontSize:14,color:'#61706B',lineHeight:21,marginTop:24}
});
