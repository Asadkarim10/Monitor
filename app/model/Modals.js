import React, { Component } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
 import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DropD from "../components/DropDown";
import { connect } from "react-redux";

import RestDialogBox from "../components/RestDialogBox";
import { callAPI } from "../api";
import { restAction, API_CONTS } from "../actions/constant";

class Modals extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isVisible: false,
        inventoryName: null,
        inventoryVolumn: null,
        requiredQuantity: null,
        inventoryVolumnD: null
      
    }
}



nextRoutes = () => {
  //let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (this.state.inventoryName === null) {
      this.props.restAction({
          IS_RETURN: true,
          RETURN: false,
          IS_LOADING: false,
          RETURN_MESSAGE: "Please enter inventory name"
      })
  }


  else if (this.state.inventoryVolumn === null) {
      this.props.restAction({
          IS_RETURN: true,
          RETURN: false,
          IS_LOADING: false,
          RETURN_MESSAGE: "Please enter inventory volumn "
      })
  }
 
  else if (this.state.inventoryVolumnD === null) {
    this.props.restAction({
        IS_RETURN: true,
        RETURN: false,
        IS_LOADING: false,
        RETURN_MESSAGE: "Please select the volumn "
    })
}
  
  else if (this.state.requiredQuantity === null) {
      this.props.restAction({
          IS_RETURN: true,
          RETURN: false,
          IS_LOADING: false,
          RETURN_MESSAGE: "Please enter Quantity"
      })
  } 
  

  
  else {
      this.props.restAction({
          IS_RETURN: false,
          RETURN: false,
          IS_LOADING: true,
          RETURN_MESSAGE: "Email address is not valid"
      })
      const postsData = callAPI(API_CONTS.EMAILCHECK, "post", {
          email: this.state.email
      }).then(res => {

          if (res.return === true) {
              this.props.restAction({
                  IS_RETURN: true,
                  RETURN: false,
                  IS_LOADING: false,
                  RETURN_MESSAGE: "Email already registered"
              })
          } else {
              this.props.restAction({
                  IS_RETURN: false,
                  RETURN: false,
                  IS_LOADING: false
              });
              this.props.navigation.navigate("SignIn", this.state)
          }
      });
  }
}


  render() {
    return (
      <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible = {this.state.isVisible}  
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style = {styles.Header}>
            <Text style={styles.modalText}>Add Inventory</Text>
            </View>

            <View style = {styles.Form}>
            <View style = {styles.Invent}>
              <Text style = {styles.Inventtext}>Inventory Name</Text>
            </View>
            <View style = {styles.Input}>
              <TextInput placeholder="Inventory Name" 
              onChangeText={(text) =>
                this.setState({ inventoryName: text })
            }
            value={this.state.inventoryName}
              style = {{
                fontSize:20
              }}/>
            </View>

            <View style = {styles.Invent}>
              <Text style = {styles.Inventtext}>Inventory Volumn</Text>
            </View>

              <View style = {{
                flexDirection:'row',
                justifyContent:'space-around'
              }}>

            <View style = {styles.InputV}>
              <TextInput placeholder="Inventory Volumn"  
                 onChangeText={(text) =>
                  this.setState({ inventoryVolumn: text })
              }
              value={this.state.inventoryVolumn}
              style = {{
                fontSize:20
              }}/>
            </View>

            <View>
              <DropD />
            </View>

            </View>

            <View style = {styles.Invent}>
              <Text style = {styles.Inventtext}>Required Quantity</Text>
            </View>
            <View style = {styles.Input}>
              <TextInput placeholder="Input Your Required Quantity"
               onChangeText={(text) =>
                this.setState({ requiredQuantity: text })
            }
            value={this.state.requiredQuantity}
                          style = {{
                            fontSize:20
                          }} />
            </View>

          <TouchableOpacity onPress={() => { this.nextRoutes() }}
           style = {styles.Sbutton}>
            <Text style = {styles.butText}>Save</Text>
          </TouchableOpacity>
          <RestDialogBox />

           
            </View>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                this.setState({ isVisible:!this.state.isVisible})}
              }
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          {this.setState({ isVisible: true})}     
          this.props.onPress();
        }}

      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight>
    </View>    );
  }
}

const mapStateToProps = state => ({
  rest: state.rest,
});

const mapDispatchToProps = dispatch => ({
  restAction: payload => dispatch(restAction(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modals);


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor:'green',
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    width:wp('90%'),
    height:hp('55%'),
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    marginTop:20,
    //  marginTop:hp('10%'),
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    textAlign: "center",
    color:'white',
    fontWeight:'700',
    letterSpacing:4,
    fontSize:20
  },
  Header : {
    backgroundColor:'#2bc5c1',
    width:wp('90%'),
    // flex:.1,
height:hp('6%'),
    justifyContent:"center",
    alignContent:'center',
    alignItems:'center'
  },
  Form : {
    justifyContent:"center",
  
  },
  Invent : {
    height:hp('6%'),
    width:wp('80%'),
    justifyContent:'center'
  },

  Inventtext: {
fontWeight:'500',
letterSpacing:1,
fontSize:20
  },
  Input: {
    height:hp('6%'),
    justifyContent:'center',
    borderRadius:10,
    borderWidth:1,
    borderColor:'#2bc5c1',
    paddingLeft:10

  },

Sbutton : {
  borderRadius:10,
  width:wp("40%"),
  margin:'5%',
  alignSelf:"center",
  height:hp('5%'),
  backgroundColor:'#2bc5c1',
  justifyContent:'center'
},
butText : {
  textAlign:'center',
  color:'white',
  fontSize:20
},

InputV : {
  width:wp('50%'),
  height:hp('6%'),
 
   justifyContent:'center',
   paddingLeft:10,
    borderRadius:10,
    borderWidth:1,
    borderColor:'#2bc5c1',
},


});





// const Modals = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   return (
//     <View style={styles.centeredView}>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert("Modal has been closed.");
//         }}
//       >
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <View style = {styles.Header}>
//             <Text style={styles.modalText}>Add Inventory</Text>
//             </View>

//             <View style = {styles.Form}>
//             <View style = {styles.Invent}>
//               <Text style = {styles.Inventtext}>Inventory Name</Text>
//             </View>
//             <View style = {styles.Input}>
//               <TextInput placeholder="Inventory Name" 
//               style = {{
//                 fontSize:20
//               }}/>
//             </View>

//             <View style = {styles.Invent}>
//               <Text style = {styles.Inventtext}>Inventory Volumn</Text>
//             </View>

//               <View style = {{
//                 flexDirection:'row',
//                 justifyContent:'space-around'
//               }}>

//             <View style = {styles.InputV}>
//               <TextInput placeholder="Inventory Volumn"  
//               style = {{
//                 fontSize:20
//               }}/>
//             </View>

//             <View>
//               <DropD />
//             </View>

//             </View>

//             <View style = {styles.Invent}>
//               <Text style = {styles.Inventtext}>Required Quantity</Text>
//             </View>
//             <View style = {styles.Input}>
//               <TextInput placeholder="Input Your Required Quantity"
//                           style = {{
//                             fontSize:20
//                           }} />
//             </View>

//           <TouchableOpacity style = {styles.Sbutton}>
//             <Text style = {styles.butText}>Save</Text>
//           </TouchableOpacity>
         
           
//             </View>
//             <TouchableHighlight
//               style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
//               onPress={() => {
//                 setModalVisible(!modalVisible);
//               }}
//             >
//               <Text style={styles.textStyle}>Hide Modal</Text>
//             </TouchableHighlight>
//           </View>
//         </View>
//       </Modal>

//       <TouchableHighlight
//         style={styles.openButton}
//         onPress={() => {
//           setModalVisible(true);
//         }}
//       >
//         <Text style={styles.textStyle}>Show Modal</Text>
//       </TouchableHighlight>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     backgroundColor:'green',
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   modalView: {
//     backgroundColor: "white",
//     borderRadius: 20,
//     width:wp('90%'),
//     height:hp('55%'),
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5
//   },
//   openButton: {
//     backgroundColor: "#F194FF",
//     borderRadius: 20,
//     padding: 10,
//     marginTop:20,
//     //  marginTop:hp('10%'),
//     elevation: 2
//   },
//   textStyle: {
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center"
//   },
//   modalText: {
//     textAlign: "center",
//     color:'white',
//     fontWeight:'700',
//     letterSpacing:4,
//     fontSize:20
//   },
//   Header : {
//     backgroundColor:'#2bc5c1',
//     width:wp('90%'),
//     // flex:.1,
// height:hp('6%'),
//     justifyContent:"center",
//     alignContent:'center',
//     alignItems:'center'
//   },
//   Form : {
//     justifyContent:"center",
  
//   },
//   Invent : {
//     height:hp('6%'),
//     width:wp('80%'),
//     justifyContent:'center'
//   },

//   Inventtext: {
// fontWeight:'500',
// letterSpacing:1,
// fontSize:20
//   },
//   Input: {
//     height:hp('6%'),
//     justifyContent:'center',
//     borderRadius:10,
//     borderWidth:1,
//     borderColor:'#2bc5c1',
//     paddingLeft:10

//   },

// Sbutton : {
//   borderRadius:10,
//   width:wp("40%"),
//   margin:'5%',
//   alignSelf:"center",
//   height:hp('5%'),
//   backgroundColor:'#2bc5c1',
//   justifyContent:'center'
// },
// butText : {
//   textAlign:'center',
//   color:'white',
//   fontSize:20
// },

// InputV : {
//   width:wp('50%'),
//   height:hp('6%'),
 
//    justifyContent:'center',
//    paddingLeft:10,
//     borderRadius:10,
//     borderWidth:1,
//     borderColor:'#2bc5c1',
// },




// });

// export default Modals;
