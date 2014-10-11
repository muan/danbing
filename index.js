var fs = require('fs')
var danbing = fs.readFileSync(__dirname + '/danbing.jpg', 'hex')
danbing = new Buffer(danbing.toString(), 'hex').toString('base64')
danbing = 'data:image/jpeg;base64,' + danbing
var img = document.createElement('img')
img.setAttribute('src', danbing)
img.setAttribute('class', 'danbing')
document.body.appendChild(img)
