import mixpanel from 'mixpanel-browser';
import Android from './Android';


export default {
	trackScreenView: () => {
		const properties = Android.getAndroidGlobalProperty();
		if (!properties.device_user_id) return;
		mixpanel.identify(properties.device_user_id);
		mixpanel.track(
			"Screen View",
			Object.assign(Android.getAndroidGlobalProperty(), {
				section: "my-account",
				category: "index",
				subcategory: "index",
				screen_name: "my-account_index_index",
				$user_id: properties.device_user_id,
			})
		);
	},
};