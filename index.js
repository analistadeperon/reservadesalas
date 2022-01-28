//const newLocal = {
    //false: ,
    //false: ,
    //false: ,
//};
const Ocupação = newLocal;

let SalasLotadas = 0;

    const containerSeats = document.getElementById('seats');
    for(lest i in array){
        let seat = document.createElement("div");
        seat.className="seats"
        if(i < 4){

            seat.style.backgroundcolor="purple";

        }else{
            seat.style.backgroundcolor="yellow";
        }
        containerSeats.appendChild(seat);
    }

const reserve =()=>{
    const reserveBtn = document.getElementById("reserve-btn");
    reserveBtn.addEventListener("click", chooseZone);
}
const reservenova =(indextoPaint)=>{
    const seats= document.querySelector(".seats");
    salas(indextoPaint).style.backgroundcolor="grey";

}
//const clooseZone =(){
    const choine = parseInt(prompt("Em que sala deseja fazer sua reuniao:\n 1. Primeira Sala \2. Segunda Sala \n Escolha sua Sala "));
    //if(choine === 1){
       // PrimeiraSala{};
    //}else{
       // DemaisSalas{};
    //}
    const PrimeiraSala =()=>{
        for(lest i = 0; i < 4; i++){
            if(PrimeiraSala[i]=== false){
                PrimeiraSala[i]=true;
                reservenova(i);

                break;

            }else if(i === 3 && PrimeiraSala[i]=== true){
              tryPrimeiraSala();
            }

        }

    }
    const DemaisSalas =()=>{
        for(lest i = 4; i < 10; i++){
            if(DemaisSalas[i]=== false){
                DemaisSalas[i]=true;
                reservenova(i);

                break;

            }else if(i === 9 && DemaisSalas[i]=== true){
                tryDemaisSalas();
            }
            const tryDemaisSalas =() => {
                const reChoose = confirm("todos  as salas estao resrvadas! desejo que rserve mais tarder outra sala mais");
                if(reChoose){

                }else{
                    nextFligth();
                }
                const nextFligth=() =>{
                    alert("a proxima sala esta disponivel em 2 horas")
                }

            }
        
}
reserve();
creatSeats(DemaisSalas);