const firebaseConfig = {
	apiKey: "AIzaSyDP7EuSs01ojeozuUbJ4aAH1tIFcqkBovY",
	authDomain: "cs-auth-566f7.firebaseapp.com",
	projectId: "cs-auth-566f7",
	storageBucket: "cs-auth-566f7.appspot.com",
	messagingSenderId: "986309390717",
	appId: "1:986309390717:web:200d48deb85c18235b5c14"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
var ui = new firebaseui.auth.AuthUI(firebase.auth());


var uiConfig = {
	callbacks: {
		signInSuccessWithAuthResult: function (authResult, redirectUrl) {
			// User successfully signed in.
			// Return type determines whether we continue the redirect automatically
			// or whether we leave that to developer to handle.
			return true;
		},
		uiShown: function () {
			// The widget is rendered.
			// Hide the loader.
			document.getElementById('loader').style.display = 'none';
		}
	},
	// Will use popup for IDP Providers sign-in flow instead of the default, redirect.
	signInFlow: 'popup',
	signInSuccessUrl: 'https://cs-auth-566f7.web.app/success.html',
	signInOptions: [
		// Leave the lines as is for the providers you want to offer your users.
		firebase.auth.GoogleAuthProvider.PROVIDER_ID,
		firebase.auth.FacebookAuthProvider.PROVIDER_ID,
		firebase.auth.GithubAuthProvider.PROVIDER_ID,
	],
	// Terms of service url.
	tosUrl: '<your-tos-url>',
	// Privacy policy url.
	privacyPolicyUrl: '<your-privacy-policy-url>'
};
ui.start('#firebaseui-auth-container', uiConfig);