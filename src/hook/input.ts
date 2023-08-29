// import {useEffect, useState} from 'react';
// import {ValidHelper, ValidRule} from '../utils/inputValidation';

// const useInput = (initialValue: any, validationRules: ValidRule[] = []) => {
//   const [value, SetValue] = useState(initialValue);
//   const [errorMessage, SetErrorMessage] = useState<string>('');
//   const [valid, SetValid] = useState(false);

//   const updateValue = (newValue: any) => {
//     SetValue(newValue);
//     // if input value change validation
//     isValid();
//   };

//   // useEffect(() => {
//   //   isValid();
//   // }, [value]);

//   const isValid = (): boolean => {
//     const validation = ValidHelper.validate(value, validationRules);
//     if (validation.length === 0) {
//       SetErrorMessage('');
//       SetValid(true);
//       return true;
//     } else {
//       SetErrorMessage(validation[0]);
//       SetValid(false);
//       return false;
//     }
//   };

//   return [value, updateValue, valid, errorMessage] as const;
// };

// export default useInput;
