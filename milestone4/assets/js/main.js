// ● Ricerca utenti: ​scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
let app = new Vue({
    el: '#app',
    data:{

        messageUser:'',
        activeUser: 0,
        searchContact: '',
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
                    },
                    
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
        
    },
    methods:{
        loadProfile(index) { 
            this.activeUser = index;
         },
         sendingMessageBot(){
             let msgBot = {
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                text: 'ok',
                status: 'received',
            };
            this.contacts[this.activeUser].messages.push(msgBot);
        },
        // funzione per caricare un messaggio nuovo con risposta!
        sendingMessage(){
            if (this.messageUser.length > 0) {
                let msgObjext = {
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    text: this.messageUser,
                    status: 'sent',
                };
                this.contacts[this.activeUser].messages.push(msgObjext);
                this.messageUser = '';
                setTimeout(this.sendingMessageBot, 1000);
                
            }
            
        },
        //funzioni per visualizzare gli ultimi messaggi e ora
        lastMsg (i){
            let x = this.contacts[i].messages.length - 1;
            return this.contacts[i].messages[x].text;
        },
        lastHour (i){
            let x = this.contacts[i].messages.length - 1;
            return this.contacts[i].messages[x].date
        },
        
    },
    computed:{
        filteredItems(){
            return this.contacts.filter((item)=>{
                return item.name.toLowerCase().includes(this.searchContact.toLowerCase());
            });
        },
        // !da rivedere ultimo messaggio sulla chat di ogni singolo utente
        // userHour(){
        //     let x = this.contacts[i].messages.length - 1;
        //     return this.contacts[i].messages[x].date
        // }
    },
})