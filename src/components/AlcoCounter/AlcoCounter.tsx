import {
  ControlPanel,
  Display,
  Cleaner,
  AlcoHeader,
} from "./alcoComponents";

export const AlcoCounter = () => {
  return (
    <div className='alcoCounter'>
      <AlcoHeader />
      <ControlPanel />
      <Display />
      <Cleaner />
    </div>
  );
};

// did language crutches for AlcoCounter
// hope it's do compatibility with  previous version

//  TODO:
// write a simple calculator with the next fields that you can change
// volume of liquid drunk
// quantity percent alcohol
// Button enter
// Calculator must adds quantity clear alcohol per month and show:
// volume of drunk clear alcohol per current month
// equivalent volume this alcohol in 40% (vodka) per current month

//extra TODO:
// add info about volume of drunk clear alcohol per current year
// add info about volume of drunk vodka per current year

// how to do:
// one object for one year:

// export const INIT_ALCO_STATE = {
//   year: "2023",
//   volumeDrank: 0,
//   percent: 5,
//   months: [{ month: "1", ethanol: 0 }],
// };

// export const STORE = [INIT_ALCO_STATE];

//trouble:
// after updating node 16->20 I have a problem:
//Node Sass does not yet support your current environment: Windows 64-bit with Unsupported runtime

//troubleshoot:
//uninstall node
//delete the existing npm install location (such as C:\Users\<user>\AppData\Roaming\npm)
//download and install  nvm-setup.exe  from https://github.com/coreybutler/nvm-windows/releases

//nvm install 16.20.0
//nvm use 16.20.0