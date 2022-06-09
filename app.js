const app = Vue.createApp({
data(){
    return {
    url:'https://www.google.com',
    showBooks:true,
    books:[
        {title:'name of the wind ', author:'partick rothfuss', img:'assets/1.jpg'},
        {title:'the way of the kings', author:'brandon something', img:'assets/2.jpg'},
        {title:'the finale empire', author:'brandon something', img:'assets/3.jpg'},
    ]
    }
},
methods:{
    toggle(){
        this.showBooks = !this.showBooks
    },

}
})

app.mount('#app')