class WhatsAppController {

    constructor(){

        console.log('WhatsAppController OK');

        this.LoadElements();

    }

    LoadElements(){

        this.el = {};
            
        document.querySelectorAll('[id]').forEach(element=>{

            this.el[Format.getCamelCase(element.id)] = element;

        });
    
    } 
}
