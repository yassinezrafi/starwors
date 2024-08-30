function amis(){
    ch1=document.getElementById("n1").value
    ch2=document.getElementById("n2").value

    if((ch1=="" )|| (ch2=="")){ 
        alert("veiller introdure un nombre ")
        }
    else{n1=Number(ch1)
        n2=Number(ch2)
        s1=0
        s2=0
        for(i=1;i<n1;i++){ if (n1%i==0){s1=s1+i}}
        console.log(s1)
        for(i=1;i<n2;i++){if (n2%i==0){s2=s2+i}
        console.log(s2)
    }
    if ((s1==n2) && (s2==n1))
    alert(n1 +"et"+n2 + "sont des nombre amis")
    else{alert(n1 +"et"+ n2 + "ne sont pas des nombre amis")}    }}
