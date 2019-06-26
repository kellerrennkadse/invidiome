// Enable chromereload by uncommenting this line:
// import 'chromereload/devonly'

chrome.runtime.onInstalled.addListener((details) => {
  console.log('previousVersion', details.previousVersion)
})
const youtubeRegex = /((www|m)\.)?youtube(-nocookie)?\.com/

chrome.webRequest.onBeforeRequest.addListener(function (details) {
  return {redirectUrl: details.url.replace(youtubeRegex, 'invidio.us')}
}, {
  urls: [
    '*://youtube.com/*',
    '*://www.youtube.com/*',
    '*://youtube-nocookie.com/*',
    '*://www.youtube-nocookie.com/*',
    '*://m.youtube.com/*'
  ],
  types: ['main_frame', 'sub_frame', 'stylesheet', 'script', 'image', 'object', 'xmlhttprequest', 'other']
}, ['blocking', 'requestBody'])

console.log(`'Allo 'Allo! Event Page for Browser Action`)
