import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import firebase from "firebase";
import {
	View, 
	Text,
	Image,
	ScrollView,
	Platform,
	Dimensions,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';

const WIDTH = Dimensions.get('window').width 
const HEIGHT = Dimensions.get('window').height 

export default class MenuDrawer extends React.Component {
	navLink(nav, text) {
		return(
			<TouchableOpacity style={{height: 53}} onPress={() => this.props.navigation.navigate(nav)}>
				<Text style={styles.link}>{text}</Text>
			</TouchableOpacity>
		)
	}
	
	constructor(props) {
        super(props)
        this.state = {
            name: null,
            email: null,
            photoUrl: null,
            hasCameraRollPermission:null,
        }
    }

	_signOutAsync = () => {
        firebase.auth().signOut().then(function () {
            this.props.navigation.navigate('Auth');
        }).catch(function (error) {
            console.log(error)
        });
	};
	
	componentDidMount() {
        this._getCurrentUser();
    }

    _getCurrentUser = async () => {
        let user = await firebase.auth().currentUser;
        console.log(user);
        if (user != null) {
            this.setState({
                name: user.displayName,
                email: user.email,
                photoURL: user.photoURL
            })
        }
	}

	render() {
		return(
<View style={styles.container}>
             <ScrollView style={styles.scroll}>
           
              
             <View style={styles.topLinks}>
             <View style={styles.profile}>
             <TouchableOpacity style={styles.imgView} onPress={this._pickImage}>
                <Image style={styles.img} source={require('../assets/ziyech.png')}/>
             </TouchableOpacity>
             <View style={styles.profileText}>
             <Text style={styles.name}>Hakim Ziyech</Text>
             </View>
             </View>
             </View>
            
            		<View style={styles.bottomLinks}>
<View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
	<Ionicons
      name ="md-home" color ="#8B0000" size={30} style={styles.menuIcon}/>
	  {this.navLink('Home', 'Home')}
						</View>
<View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
	<Ionicons
      name ="md-person" color ="#8B0000" size={30} style={styles.menuIcon}/>
						{this.navLink('Profile', 'Profile')}
						</View>
<View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
	<Ionicons
      name ="md-map" color ="#8B0000" size={30} style={styles.menuIcon}/>
						{this.navLink('Map', 'Map')}
						</View>
<View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
	<Ionicons
      name ="md-folder" color ="#8B0000" size={30} style={styles.menuIcon}/>
						{this.navLink('Todolist', 'Todolist')}
						</View>
<View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}} >
	<Ionicons
      name ="md-exit" color ="#8B0000" size={30} style={styles.menuIcon}/>
						<Text style={styles.link} onPress={this._signOutAsync} size={30}>Logout</Text>
						</View>


					</View>
				</ScrollView>
				<View style={styles.footer}>
					<Text style={styles.teks}>UAS React native</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'lightgray',
	},
	scroll: {
		flex: 1,
	},
	profile: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		paddingTop: 30,
		borderBottomWidth: 1,
		borderBottomColor: '#777777',
	},
	profileText: {
		flex: 3,
		flexDirection: 'column',
		justifyContent: 'center',
	},
	name: {
		fontSize: 20,
		paddingBottom: 5,
		color: 'white',
		textAlign: 'left',
	},
	imgView: {
		flex: 1,
		paddingLeft: 20,
		paddingRight: 20,
	},
	img: {
		height: 70,
		width: 70,
		borderRadius: 50,
	},
	topLinks:{
		height: 160,
		backgroundColor: 'black',
	},
	bottomLinks: {
		flex: 1,
		backgroundColor: '#ecf0f1',
		paddingTop: 15,
		paddingBottom: 450,
	},
	link: {
		flex: 1,
		fontSize: 18,
		padding: 6,
		paddingLeft: 3,
		margin: 9,
		textAlign: 'left',
	},
	menuIcon:  {
		zIndex: 9,
		paddingLeft: 15,
	
	  },
	footer: {
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'gray',
		borderTopWidth: 1,
		borderTopColor: 'white'
	},
	teks: {
		flex: 1, 
		textAlign: 'right',
		marginRight: 20,
		color: '#8B0000'
	}
})