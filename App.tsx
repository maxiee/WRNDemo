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
import { Styles } from './src/ui/style';

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

interface GridButtonProps {
	icon: string,
	title: string,
	background: string
}
const GridButton = (props: GridButtonProps) => {
	return (
		<View style={[styles.gridButton, {backgroundColor: props.background}]}>
			<Text style={Styles.h1}>{props.title.substr(1, 2)}</Text>
			<Text>{props.title}</Text>
		</View>
	)
}

export default class App extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			data: null
		};
	}
	
	// componentDidMount() {
	// 	fetch("https://rsshub.app/weibo/user/3306934123")
	// 	.then(response => response.text())
	// 	.then(responseData => rssParser.parse(responseData))
	// 	.then(rss => {
	// 		console.log(rss.title)
	// 		console.log(rss.items.length)
	// 		rss.items.forEach((v: any) => {
	// 			console.log(v.title)
	// 		})
	// 		this.setState({data: rss})
	// 	})
	// }
	
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
			<View style={styles.container}>
				<Text style={Styles.h1}>想干啥？</Text>
				<View style={styles.grid}>
					<GridButton title="刷微博" icon="微博" background="gold"/>
					<GridButton title="刷微博" icon="微博" background="gold"/>
					<GridButton title="刷微博" icon="微博" background="gold"/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	grid: {
		flexDirection: 'row',
		justifyContent: "space-evenly",
	},
	gridButton: {
		borderRadius: 6,
		borderColor: 'grey',
		paddingTop: 14,
		paddingBottom: 14,
		paddingLeft: 28,
		paddingRight: 28,
		flexDirection: 'column',
		alignItems: 'center',
		borderWidth: 1
	}
});
