/**
 * Created by nghinv on Thu Jun 11 2020
 * Copyright (c) 2020 nghinv@lumi.biz
 */

declare module '@nghinv/react-native-splash-screen' {
  interface AnimationType {
    none: String;

    fade: String;

    scale: String;
  }

  interface SplashScreenParam {
    animationType: AnimationType;
    /**
     * Default 850
     */
    duration: Number;
    /**
     * Default 500
     */
    delay: Number;
  }

  interface SplashScreenProps {
    /**
     * Close splash screen
     */
    close: (params?: SplashScreenParam) => void;

    /**
     * Animation type: 'none' | 'fade' | 'scale'
     * Default 'none'
     */
    animationType?: AnimationType;
  }

  const SplashScreen: SplashScreenProps;

  export default SplashScreen;
}
