import React, { Component } from 'react';
import baseInfo from '../api/baseInfo';
import Android from '../utils/Android';
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
		};
		Mixpanel.trackScreenView();
		baseInfo(Android.getDomain(), Android.getLocale(), Android.getToken())
			.then((res) => {
				this.setState({
					name: `${res.firstName} ${res.surnameName}`,
					country: res.country,
					avatar: res.picture || avatar_default,
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
		const { name, country, avatar, debug } = this.state;
		return (
			<div className={styles.App}>
				<img className={styles.backgroundImage} src={bg} />
				<div className={styles.container}>
					<div className={styles.iconWrapper}>
						<div className={styles.icon} style={{backgroundImage: `url(${avatar})`}}></div>
					</div>
					<div className={styles.name}>{name}</div>
					<div className={styles.location}>{country}</div>
					<img className={styles.logo} src={mini_hi} />
					<button className={styles.debugToggleButton} onClick={this.onDebugClick}></button>
					{debug ?
						<div className={styles.debug}>
							<table>
								<tr>
									<td>get Domain</td>
									<td>{Android.getDomain()}</td>
								</tr>
								<tr>
									<td>get Locale</td>
									<td>{Android.getLocale()}</td>
								</tr>
								<tr>
									<td>get getToken</td>
									<td>{Android.getToken()}</td>
								</tr>
								<tr>
									<td>get getAndroidGlobalProperty</td>
									<td>{JSON.stringify(Android.getAndroidGlobalProperty())}</td>
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
