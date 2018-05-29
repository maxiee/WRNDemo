/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React from 'react';
import { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	ScrollView
} from 'react-native';
import * as rssParser from 'react-native-rss-parser';
import HTML from 'react-native-render-html';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' +
	'Cmd+D or shake for dev menu',
	android: 'Double tap R on your keyboard to reload,\n' +
	'Shake or press menu button for dev menu',
});

type Props = {};
interface State {
	data: any
}

export default class App extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			data: null
		};
	}
	
	componentDidMount() {
		fetch("https://rsshub.app/weibo/user/3306934123")
		.then(response => response.text())
		.then(responseData => rssParser.parse(responseData))
		.then(rss => {
			console.log(rss.title)
			console.log(rss.items.length)
			rss.items.forEach((v: any) => {
				console.log(v.title)
			})
			this.setState({data: rss})
		})
	}
	
	render() {
		let d = <Text>加载中</Text>;
		if (this.state.data !== null) {
			d = this.state.data.items.map((v: any) => {
				return (
					<View>
						<Text>{v.title}</Text>
						<HTML html={v.description} />
						<Text>{v.content}</Text>
					</View>
				)
			})
		}
		return (
			<ScrollView>{d}</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
