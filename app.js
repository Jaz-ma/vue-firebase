const app = Vue.createApp({
data(){
    return {
    url:'https://www.google.com',
    showBooks:true,
    books:[
        {title:'name of the wind ', author:'partick rothfuss', img:'assets/1.jpg', isFav: true,},
        {title:'the way of the kings', author:'brandon something', img:'assets/2.jpg',isFav: false,},
        {title:'the finale empire', author:'brandon something', img:'assets/3.jpg',isFav:true,},
    ]
    }
},
methods:{
    toggle(){
        this.showBooks = !this.showBooks
    },
    toggleFav(book){
        book.isFav=!book.isFav
    }

}
})

app.mount('#app')