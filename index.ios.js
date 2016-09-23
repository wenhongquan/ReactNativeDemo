import React, { Component } from 'react';
import { AppRegistry,StyleSheet,Image, Text, TextInput, View } from 'react-native';
import Dimensions from 'Dimensions';


class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '',focus:false,screen:Dimensions.get('window')};
    console.log('onSearchTextChanged');
  }




  inputfocus(){
    console.log("focus");
    this.setState({focus:true})

  }

  imputoutfocus(){
     console.log("outfocus");
     this.setState({focus:false})
    console.log(this.state.screen.width)
  }



  render() {
   var styletem =   this.state.focus?styles.input_focus:styles.input_outfocus


    return (
      <View style={{paddingTop: 40,  backgroundColor: 'red',height:80,width:this.state.screen.width}}>

        <TextInput ref="textinputs"
          style={styletem}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
          onFocus={() => this.inputfocus()}
          onBlur={() => this.imputoutfocus()}

        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input_focus: {
    height: 40,
    borderWidth:1,
    borderRadius:10,
    marginLeft:10,
    marginRight:10,
    padding:10,
    borderColor:'red',
  },
  input_outfocus: {
    height: 40,
    borderWidth:1,
    borderRadius:10,
    marginLeft:10,
    marginRight:10,
    padding:10,
    borderColor:'green',
  },
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class TEmp extends Component {

setState(state){

  console.log("dsfsdfsdfsdfsdfsdfsdfsd");
}

  render() {
    return (
         <Image source={require('./img/Img.png')} style={styles.container}><PizzaTranslator/></Image>


    );
  }

}

AppRegistry.registerComponent('AwesomeProject', () => TEmp);
