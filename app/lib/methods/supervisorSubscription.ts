import {NativeModules} from 'react-native';
import {Platform} from 'react-native';
import {Supervisor} from '../../definitions';

const {SupervisorSubscriptionModule} = NativeModules;

const supervisorSubscription = Platform.select({
  ios: {
    getSupervisors: () =>
      new Promise(async (resolve, reject) => {
        console.log('error: not available in ios.');
        reject(null);
      }),
    submitEmployee: () =>
      new Promise(async (resolve, reject) => {
        console.log('error: not available in ios.');
        reject(null);
      }),
  },
  android: {
    getSupervisors: () => SupervisorSubscriptionModule.getSupervisors(),
    submitEmployee: (
      fName: string,
      lName: string,
      supervisor: Supervisor | undefined,
      phone: string,
      email: string,
    ) =>
      SupervisorSubscriptionModule.submitEmployee(
        fName,
        lName,
        supervisor,
        phone,
        email,
      ),
  },
});

export default supervisorSubscription;
