const app = Vue.createApp({
data(){
    return {
    showBooks:true,
    books:[
        {title:'name of the wind ', author:'partick rothfuss', },
        {title:'the way of the kings', author:'brandon something', },
        {title:'the finale empire', author:'brandon something', },
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