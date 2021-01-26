var app = new Vue({
 el: '#root',
 data: {
   text: 'testo che cambio colore',
   color: 'blue',
   fontsize: 25,
   input: ''
 },
 methods: {
   changeColor: function() {
     this.color = 'red'
   },
   changeFontSize: function() {
     this.fontsize = 50
   }
 }
});
Vue.config.devtools = true;
