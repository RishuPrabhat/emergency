class MainPage{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton('Submit')
        this.input1 = createInput("YOUR COUNTRY")
        this.greeting = createElement('h2');
    }
    hide(){
        

    }

    display(){
    
        this.input.position(displayWidth/2,displayHeight/4)
        this.input1.position(displayWidth/2,displayHeight/3)       
        this.button.position(displayWidth/2,displayHeight/2)
        this.greeting.position(displayWidth/2,diplayHeight/5)
    }

} 