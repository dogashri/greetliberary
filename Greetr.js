(function(global,$){
    var Greetr=function(firstName,lastName,language){
        return new Greetr.init(firstName,lastName,language)
    }
    
    var supportedLangs=['en','es']
    
    var greeting={
        en:'hello',
        es:'hola'
    }
    
    var formalGreeting={
        en:'Greetings',
        es:'saludos'
    }
    
    var logMessages={
        en:'Logged in',
        es:'inico sesion'
    }
    
    Greetr.prototype={
        fullname:function(){
            return this.firstName+' '+this.lastName
        },
        validate:function(){
            if(supportedLangs.indexOf(this.language)===-1){
                throw "invalid language"
            }
        },
        greeting:function(){
            return greeting[this.language]+' '+this.firstName+" !"
        },
        formalGreeting:function(){
            return formalGreeting[this.language]+', '+this.fullname()
        },
        greet:function(formal){
            var msg;
            if(formal){
                msg=this.formalGreeting()
            }
            else{
                msg=this.greeting()
            }
            if(console){
                console.log(msg)
            }
            return this
        },
        log:function(){
        if(console){
        console.log(logMessages[this.language])+':'+this.fullname()
        }
            return this
        },
        setLang:function(lang){
            this.language=lang
            this.validate()
            return this;
        },
        HTMLGreeting:function(selector,formal){
            if(!$){
                throw "jquery not loaded"
            }
            if(!selector){
                throw "missing jquery selector"
            }
            var msg;
            if(formal){
                msg=this.formalGreeting()
            }
            else{
                msg=this.greeting()
            }
            $(selector).html(msg)
            return this
            
        }
    
 
    }
    
    Greetr.init=function(firstName,lastName,language){
        var self=this
        self.firstName=firstName||'';
        self.lastName=lastName||'';
        self.language=language||'en';
    
    }
    
    Greetr.init.prototype=Greetr.prototype
    global.Greetr=global.G$=Greetr
    
}(window,jQuery))