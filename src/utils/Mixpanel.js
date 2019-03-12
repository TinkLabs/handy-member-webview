import mixpanel from 'mixpanel-browser';
import AndroidAPI from './AndroidAPI';


export default {
	trackScreenView: () => {
		try {
			const properties = AndroidAPI.getAndroidGlobalProperty();
			if (!properties.device_user_id) return;
			mixpanel.init("6c29862add298fba05d9fd796a51e441");

			mixpanel.identify(properties.device_user_id);
			mixpanel.track(
				"Screen View",
				Object.assign(AndroidAPI.getAndroidGlobalProperty(), {
					section: "my-account",
					category: "index",
					subcategory: "index",
					screen_name: "my-account_index_index",
					$user_id: properties.device_user_id,
				})
			);
		} catch (e) {
			console.error(e);
		}
	},
};