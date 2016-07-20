``` javascript
"scripts": {
  "start": "electron .",
  "build": "electron-packager . sampleApp",
  "dist": "npm run dist:mac && npm run dist:win32 && npm run dist:win64",
  "dist:mac": "build --platform darwin",
  "dist:win32": "build --platform win32 --arch ia32",
  "dist:win64": "build --platform win32 --arch x64"
},
```
- Use Mac script only on mac!
- The project must be inside a folder called `electron/resources/`
