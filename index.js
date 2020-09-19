var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello World By Vue.js!',
        seen: true,
        todos: [
            {text: 'errands to run'},
            {text: 'meeting people'},
            {text: 'submit some documents'},
            {text: 'finish'}
        ]
    }
});

app.message = "This world is nonsense";
//app.seen = false;