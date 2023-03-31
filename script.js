function myFunction() {
    let valor=document.getElementById('tempc').value;
    bloco:{
        if(isNaN(valor)){
            break bloco;
        }
        valor=valor-0;
        if(valor>100){
            valor=100;
        }
        if(valor<-100){
            valor=-100;
        }
        let por=(valor+100)/2;
        let arrcolor=[255,0,255];
        let mudap=-1;
        let x=por;
        x=x-0;
        for(let i=0;i<5;i++){
            if(i>2){
                i=0;
            }
            if(x<=20){
                x=x/20;
                arrcolor[i]=arrcolor[i]+(Math.round(255*x)*mudap);
                i=5;
            }
            if(x>20){
                arrcolor[i]=arrcolor[i]+(255*mudap);
                x=x-20;
            }
            mudap=mudap*-1;
        }
        for(i=0;i<3;i++){
            let d1 = Math.trunc(arrcolor[i]/16);
            let d2= ((arrcolor[i]/16)-d1)*16;
            let arrdg = ["a","b","c","d","e","f"]
            if(d1>9){
                d1=arrdg[d1-10];
            }
            if(d2>9){
                d2=arrdg[d2-10];
            }
            arrcolor[i]=d1.toString()+d2.toString();
            }
        let corf= "#"+arrcolor[0]+arrcolor[1]+arrcolor[2];
        console.log("rgb: ",corf);
        let img=document.getElementById('imagem');
        img.style.background=corf;
    
}
}
function C() {
    let C=document.getElementById('tempc').value;
    C=C-0;
    document.getElementById('tempf').value = (C*9/5+32).toFixed(2);
    document.getElementById('tempk').value = (C+273.15).toFixed(2);
    document.getElementById('tempr').value = (C*9/5+491.67).toFixed(2);
    myFunction()
      }; 
function F(){
    let F=document.getElementById('tempf').value;
    F=F-0;
    document.getElementById('tempc').value = ((F-32)*5/9).toFixed(2);
    document.getElementById('tempk').value = ((F-32)*5/9+273.15).toFixed(2);
    document.getElementById('tempr').value = (F+459.67).toFixed(2);
    myFunction()
}
function K(){
    let K=document.getElementById('tempk').value;
    K=K-0;
    document.getElementById('tempc').value = (K-273.15).toFixed(2);
    document.getElementById('tempf').value = ((K-273.15)*9/5+32).toFixed(2);
    document.getElementById('tempr').value = (K*1.8).toFixed(2);
    myFunction()
}
function R(){
    let R=document.getElementById('tempr').value;
    R=R-0;
    document.getElementById('tempc').value = ((R-491.67)*5/9).toFixed(2);
    document.getElementById('tempf').value = (R-459.67).toFixed(2);
    document.getElementById('tempk').value = (R*5/9).toFixed(2)
    myFunction()
}