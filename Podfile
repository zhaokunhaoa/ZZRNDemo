# Uncomment the next line to define a global platform for your project
# platform :ios, '9.0'

target 'ZZRNDemo' do
  # Uncomment the next line if you're using Swift or would like to use dynamic frameworks
  # use_frameworks!

  # Pods for ZZRNDemo

pod 'React', :path => './ReactNative/node_modules/react-native', :subspecs => [
'Core',
'CxxBridge',# 如果RN版本 >= 0.45则加入此行
'DevSupport',# 如果RN版本 >= 0.43，则需要加入此行才能开启开发者菜单
'RCTActionSheet',
'RCTGeolocation',
'RCTImage',
'RCTNetwork',
'RCTPushNotification',
'RCTSettings',
'RCTText',
'RCTVibration',
'RCTWebSocket',
'RCTAnimation',
]
# 如果你的RN版本 >= 0.42.0，则加入下面这行
pod "yoga", :path => "./ReactNative/node_modules/react-native/ReactCommon/yoga"
# 如果RN版本 >= 0.45则加入下面三个第三方编译依赖
pod 'DoubleConversion', :podspec => './ReactNative/node_modules/react-native/third-party-podspecs/DoubleConversion.podspec'
pod 'GLog', :podspec => './ReactNative/node_modules/react-native/third-party-podspecs/GLog.podspec'
pod 'Folly', :podspec => './ReactNative/node_modules/react-native/third-party-podspecs/Folly.podspec'

end
