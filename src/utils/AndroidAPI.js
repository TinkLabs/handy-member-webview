export default {
	getDomain: () => {
		if (typeof window.Profile === 'undefined' || typeof window.Profile.getSSODomain() === 'undefined') {
			// return 'https://csp-uat.handytravel.tech/profile';
			return '';
		}
		return window.Profile.getSSODomain();
	},
	getLocale: () => {
		if (typeof window.Android === 'undefined' || typeof window.Android.getDeviceCurrentLocale() === 'undefined') {
			return 'en_US';
		}
		return window.Android.getDeviceCurrentLocale();
	},
	getToken: () => {
		if (typeof window.Profile === 'undefined' || typeof window.Profile.getUserToken() === 'undefined') {
			//return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOiIyNzQ4MDU5NDkwMjQ0NjA4MDAifQ.jDM9yjH-iva4j6NGqv07irvprD5wnqfQksLOEUmQdKvXmRQ6iBFHSJDXAWEG3nO8q9lmLEuy7YP2VU5z0tP82sieSp_xaPGMPNKTur2ZpMqeS8MbIu7LKumRcX5aCoAO5VFJiUfoe6qqwYiH4C6u-SynLMIBT3D9UFTqjv6YA-V-teQoxDam_bx3gNHXejiXH1p5gvnGylAsRNIzg13jkZT1Y9WJgj0v0XfCLCBK7SjqV6HWm4OkC0WGTvPqk2vYpkm8kUQdc1zro87r_oBChM6XOAUqsQwowBps73hEm6eYEWxKpLEPe39tYsWTFAkd6-PL95hFscHAEVsZLyxwaA';
			return '';
		}
		return window.Profile.getUserToken();
	},
	getAndroidGlobalProperty: () => {
		if (typeof window.Android === 'undefined' || typeof window.Android.getGlobalProperties === 'undefined') {
			return {};
		}
		// window.Android.showToast(window.Android.getGlobalProperties());
		return JSON.parse(window.Android.getGlobalProperties());
	},
};