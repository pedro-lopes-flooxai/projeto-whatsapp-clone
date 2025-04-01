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

    elementsPrototype(){

        Element.prototype.hide = function(){
            this.style.display = 'none';
        }

        Element.prototype.show = function(){
            this.style.display = 'block';
        }

        Element.prototype.toggle = function(){
            this.style.display = (this.style.display === 'none') ? 'block' : 'none';
        }
    }
    
}
