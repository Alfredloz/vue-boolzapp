let app = new Vue({
    el: '#app',
    data:{
        contacts: [
            {
                name: 'Michele',
                avatar: './assets/img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                    }, 
                    {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                    },
                    {                                
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                    } 
                ]              
            },
            {
                name: 'Alessio',
                avatar: './assets/img/avatar_2.jpg',
                visible: true,
                messages:[
                    {
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                    }, 
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    }, 
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    } 
                ]
            },
            {
                name: 'Carmine',
                avatar: './assets/img/avatar_3.jpg',
                visible: true,
                messages:[
                    {
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received'
                    }, 
                    {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent' 
                    }, 
                    {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                    },
                    {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received'
                    }
                ]     
            },
            {
                name: 'Andrea',
                avatar: './assets/img/avatar_5.jpg',
                visible: true,
                messages:[
                    {
                    date: '10/01/2020 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                    }, 
                    {                 
                    date: '10/01/2020 15:50:00',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                    } 
                ] 
            },
            {
                name: 'Camilla',
                avatar: './assets/img/avatar_6.jpg',
                visible: true,
                messages:[
                    {
                    date: '10/04/2020 17:13:55',
                    text: 'lo sai che ho smesso di fumare',
                    status: 'sent'
                    }, 
                    {                 
                    date: '12/04/2020 15:50:00',
                    text: 'Si, ma preferirei farmi una birra!',
                    status: 'received'
                    } 
                ]     
                },
                {
                name: 'Anna',
                avatar: './assets/img/avatar_7.jpg',
                visible: true,
                messages:[
                        {
                        date: '03/07/2020 11:30:00',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                        }, 
                        {                 
                        date: '03/07/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                        } 
                    ],
          
                },
                {
                    name: 'Aurelio',
                    avatar: './assets/img/avatar_8.jpg',
                    visible: true,
                    messages:[
                        {
                        date: '17/05/2020 15:30:55',
                        text: "andiamo all'Irish pub stasera?! c'è un concerto molto interessante!",
                        status: 'sent'
                        }, 
                        {                 
                        date: '17/05/2020 13:53:03',
                        text: "No, devo studiare per il corso Boolean e consegnare l'essercizio ",
                        status: 'received'
                        } 
                    ],
          
                    },


        ],
        contactProfiles:[],
        userContent:[],
        messageUser:'',
        activeUser: 0,
        
    },
    methods:{
        loadProfile(index) { 
            this.activeUser = index;
         },
        
        // sendingMessage(){
        //     if (this.messageUser.length > 0) {
        //         this.messages.push(this.messageUser);
        //         this.messageUser = '';
        //         console.log(this.messages);
                
        //     }
        //     console.log(this.contacts.visible);
        // },
        // visibleChat (){
        //     this.visible= false;
        //     console.log(this.visible);
        // }
    }
})