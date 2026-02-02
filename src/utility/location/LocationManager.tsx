import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';

import Toast from '../toast/Toast';

class LocatioManager {
  watchId?: number;
  position?: GeolocationResponse;

  private static _instance: LocatioManager = new LocatioManager();

  static get shared(): LocatioManager {
    return LocatioManager._instance;
  }

  private constructor() {}

  setup() {
    Geolocation.setRNConfiguration({
      skipPermissionRequests: false,
      enableBackgroundLocationUpdates: false,
    });
    this.watchPosition();
  }

  getCooridnates() {
    return this.position
      ? {
          latitude: this.position.coords.latitude,
          longitude: this.position.coords.longitude,
        }
      : {};
  }

  private watchPosition = () => {
    try {
      this.watchId = Geolocation.watchPosition(
        position => {
          console.log('watchPosition', position);
          this.position = position;
        },
        error => {
          console.log(error);
          //Toast.showToast(JSON.stringify(error), 'Warning');
        },
        {
          maximumAge: 60 * 2 * 1000,
          enableHighAccuracy: true,
          interval: 60 * 2 * 1000,
        },
      );
    } catch (error) {
      Toast.showToast(JSON.stringify(error), 'Warning');
    }
  };

  private clearWatch = () => {
    this.watchId !== undefined && Geolocation.clearWatch(this.watchId);
    this.watchId = undefined;
  };
}

export default LocatioManager;
