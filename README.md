
# BUILD

``` 
npm i 
npm install -g cordova 
npm install ionic-native --save
ionic plugin add cordova-plugin-media

```

# RUN

```
ionic serve --lab
```

# TEST on platforms

## list available platforms 
ionic platform

## add android and plugins
ionic platform remove android && ionic platform add android && ionic plugin add cordova-plugin-media

## emulate on android
ionic emulate android -l -c

## run on android
ionic run android -l -c --device

## emulate on ios
ionic emulate ios -l -c 


## run on ios
ionic run ios -l -c  --device


<preference name="AndroidPersistentFileLocation" value="Internal" />
<preference name="iosPersistentFileLocation" value="Library" />
