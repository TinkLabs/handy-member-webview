import React, { Component } from 'react';
import baseInfo from '../api/baseInfo';
import AndroidAPI from '../utils/AndroidAPI';
import Mixpanel from '../utils/Mixpanel';
import bg from './bg.png';
import mini_hi from './mini_hi.png';

import avatar_default from './avatar_default.png';
import styles from './index.module.scss';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			country: '',
			avatar: '',
			debug: false,
			response: {},
		};
		Mixpanel.trackScreenView();
		baseInfo(AndroidAPI.getDomain(), AndroidAPI.getLocale(), AndroidAPI.getToken())
			.then((res) => {
				this.setState({
					name: `${res.firstName || ''} ${res.surnameName || ''}`,
					country: res.country,
					avatar: res.picture || avatar_default,
					response: res,
				});
			})
			.catch((err) => {
				console.error(err);
			});
	}
	onDebugClick = () => {
		this.setState({
			debug: !this.state.debug,
		})
	}
	render() {
		const { name, country, avatar, debug, response } = this.state;
		return (
			<div className={styles.App}>
				<img className={styles.backgroundImage} src={bg} alt=""/>
				<div className={styles.container}>
					<div className={styles.iconWrapper}>
						<div className={styles.icon} style={{backgroundImage: `url(${avatar})`}}></div>
					</div>
					<div className={styles.name}>{name}</div>
					<div className={styles.location}>{country}</div>
					<img className={styles.logo} src={mini_hi} alt="" />
					<button className={styles.debugToggleButton} onClick={this.onDebugClick}></button>
					{debug ?
						<div className={styles.debug}>
							<table>
								<tr>
									<td>get Domain</td>
									<td>{AndroidAPI.getDomain()}</td>
								</tr>
								<tr>
									<td>get Locale</td>
									<td>{AndroidAPI.getLocale()}</td>
								</tr>
								<tr>
									<td>get getToken</td>
									<td>{AndroidAPI.getToken()}</td>
								</tr>
								<tr>
									<td>get getAndroidGlobalProperty</td>
									<td>{JSON.stringify(AndroidAPI.getAndroidGlobalProperty())}</td>
								</tr>
								<tr>
									<td>repsonse</td>
									<td>{JSON.stringify(response)}</td>
								</tr>
							</table>
						</div>
						: null}
				</div>
			</div>
		);
	}
}

export default App;
