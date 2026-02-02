export default class Constants {
  static AgeMin = 18;
  headerHeight: number = 0;

  private static _instance: Constants = new Constants();
  static get shared(): Constants {
    return Constants._instance;
  }
  private constructor() {}
}
