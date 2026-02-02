import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {
  appleAuth,
  appleAuthAndroid,
} from '@invertase/react-native-apple-authentication';
import {syncUserProfile} from '../../network/service/Auth';
import Config from 'react-native-config';
import 'react-native-get-random-values';
import {v4 as uuid} from 'uuid';
import {Platform} from 'react-native';

class SocialLogin {
  public static configure = () => {
    GoogleSignin.configure({
      webClientId: Config.WEB_CLIENT_ID_ANDROID,
    });
  };

  public static loginWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const result = await auth().signInWithCredential(googleCredential);
      return {
        name: result.user.displayName ?? '',
        email: result.user.email ?? '',
        uid: result.user.uid,
      };
    } catch (error) {
      throw error;
    }
  };

  public static firebaseSignOut = async () => {
    try {
      await syncUserProfile();
      const currentUser = await GoogleSignin.getCurrentUser();
      if (currentUser != null) {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
      }
      if (auth().currentUser != null) {
        await auth().signOut();
      }
    } catch (error) {
      throw error;
    }
  };

  public static appleLogin = async () => {
    if (Platform.OS == 'ios') {
      return SocialLogin.iosAppleLogin();
    } else {
      return SocialLogin.androidAppleLogin();
    }
  };

  private static isApplePrivateEmail(email: string) {
    return email.endsWith('@privaterelay.appleid.com');
  }

  private static iosAppleLogin = async () => {
    try {
      const appleProvider = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });
      if (!appleProvider.identityToken) {
        throw new Error('Apple Sign-In failed - no identify token returned');
      }
      const appleCredential = auth.AppleAuthProvider.credential(
        appleProvider.identityToken,
        appleProvider.nonce,
      );
      const response = await auth().signInWithCredential(appleCredential);
      const user = response.user;
      if (user != null) {
        const firstName = appleProvider.fullName?.givenName;
        const lastName = appleProvider.fullName?.familyName;
        const email = appleProvider.email;
        if (firstName != null) {
          await user.updateProfile({displayName: `${firstName} ${lastName}`});
        }
        if (email != null && !SocialLogin.isApplePrivateEmail(email)) {
          await user.updateEmail(email);
        }
      }
      return auth().currentUser;
    } catch (error) {
      throw error;
    }
  };

  private static androidAppleLogin = async () => {
    const rawNonce = uuid();
    const state = uuid();
    appleAuthAndroid.configure({
      clientId: Config.SERVICE_ID,
      redirectUri: Config.REDIRECT_URL,
      responseType: appleAuthAndroid.ResponseType.ALL,
      scope: appleAuthAndroid.Scope.ALL,
      nonce: rawNonce,
      state,
    });

    try {
      const appleResponse = await appleAuthAndroid.signIn();
      if (appleResponse.state === state && appleResponse.id_token != null) {
        const credentials = auth.AppleAuthProvider.credential(
          appleResponse.id_token,
          rawNonce,
        );
        const response = await auth().signInWithCredential(credentials);
        return response.user;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}

export default SocialLogin;
