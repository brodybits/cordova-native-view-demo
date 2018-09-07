document.addEventListener('deviceready', function() {
  cordova.exec(null, null, 'SYRPlugin', 'start', [])
})
