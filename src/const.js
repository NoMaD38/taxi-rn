import VisaLogo from './svg/visa-logo.svg'
import MasterCardLogo from './svg/mastercard-logo.svg'
import AndroidPayLogo from './svg/android-pay-logo.svg'
import ApplePayLogo from './svg/apple-pay-logo.svg'

module.exports.payMethods = [
  { name: 'visa', logo: VisaLogo },
  { name: 'mastercard', logo: MasterCardLogo },
  { name: 'android_pay', logo: AndroidPayLogo },
  { name: 'apple_pay', logo: ApplePayLogo },
  { name: 'Наличные', logo: null },
]
