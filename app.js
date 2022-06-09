const app = Vue.createApp({
data(){
    return {
        title:'The Final Empire',
        author:'Brandon Sanderson',
        age:'43',
        showBooks: true,
    }
},
methods:{
    toggle(){
        this.showBooks = !this.showBooks
    }
}
})

app.mount('#app')