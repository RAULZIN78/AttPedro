function cadastrar()
{


    let ciencia = document.getElementById("CET");
    let romance = document.getElementById("ROMANCE");
    let autoAjuda = document.getElementById("AJ");
    let economia = document.getElementById("ECO");

    cadastros = [];

    let cienciaVal = ciencia.value;
    let RomanceVal = romance.value;
    let economiaVal = economia.value;
    let autoAjudaVal = autoAjuda.value;

    let contCiencia = 0;
    let contRomance = 0 ;
    let contEconomia = 0;
    let contAutoAjuda = 0;

    let expressao = (contCiencia < 1 || contRomance < 1 || contEconomia < 1 || contAutoAjuda < 1);

    
    while(expressao)
    {

        if(cienciaVal !== null)
        {
            contCiencia = contCiencia + 1;
        
        }else if(RomanceVal !== null)
        
        {
            contRomance = contRomance + 1;
        
        }else if(economiaVal !== null)
        
        {
            contEconomia = contEconomia + 1;
            
        }else if(autoAjudaVal !== null)
        
        {
            contAutoAjuda = contAutoAjuda + 1;
            
        }else
        {
            console.log("Erro no código")
        }
    }
    
    console.log(contAutoAjuda);
    console.log(contCiencia);
    console.log(contEconomia);
    console.log(contRomance);
    console.log(economiaVal)

}


