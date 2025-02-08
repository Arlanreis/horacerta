function carregar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')

        let data = new Date()
            let hora = data.getHours()
            
    
            msg.innerHTML = `agora sao ${hora} horas`
            document.body.style ='text-align: center'
            

            if(hora <= 12){
                // bom dia
                img.src ='dia.webp'
                document.body.style.background ='#b0772c'
                
            }
            else if( hora > 12 && hora <= 18){
                // boa tarde
                img.src ='tarde.jpeg'
                document.body.style.background ='#7099a1'
            }
            else{
                // boa noite
                img.src ='noite.webp'
                document.body.style.background ='#42413c' 
                
            }



}


    


    
        
    
