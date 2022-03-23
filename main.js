

    function simular() {
        var valor = parseFloat(document.getElementById("valor").value);
        var prazoA = document.getElementById("prazoA").valueAsNumber;
        var jurosA = document.getElementById("jurosA").valueAsNumber;
        var prazoM = prazoA * 12;
      
        var jurosA = Math.pow(1 + jurosA, 1 / 12) - 1;
        var amortizacao = valor/prazoM;

        var tbody = document.querySelector('tbody');

        for (var i = 0; i < 5; i++){
            var saldoDevedor = valor - amortizacao * i;
            var jurosPrestacao = saldoDevedor * jurosA;
            var totalPrestacao = jurosPrestacao + amortizacao;
           
                
            
        
            var tr = tbody.children[i];
            tr.children[0].textContent = i + 1;
            tr.children[1].textContent = amortizacao.toFixed(2);
            tr.children[2].textContent = jurosPrestacao.toFixed(2);
            tr.children[3].textContent = totalPrestacao.toFixed(2);
          }
        
          var jurosTotal = 0;
        
          for (var i = 0; i < prazoM; i++){
            var saldoDevedor = valor - amortizacao * i;
            var jurosPrestacao = saldoDevedor * jurosA;
            jurosTotal += jurosPrestacao;
        
          }
    
          document.getElementById("prazoM").valueAsNumber = prazoM;
          document.getElementById("jurosM").valueAsNumber = jurosA;
          document.querySelector('#JurosAcumulados').value = jurosTotal.toFixed(2);
        }


simular();