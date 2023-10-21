import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.registrap.app',
  appName: 'registrap',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
