// indentificar os elemnto dom (arvore html)
const btntrocar = document.getElementById('btn-trocar')
const lampada = document.getElementById('lampada')
let baseURl = "https://ee8dd834-64cf-461f-b4e3-c8cbf88a97cf-00-2sq81af9z03ar.picard.replit.dev/"

btntrocar.addEventListener('click', function() {
  if (lampada.src == baseURl + "lampada0.png") {
  lampada.src = "lampada2.png"
} else {
  lampada.src = "lampada0.png"
  } 
  })
  
    
  
  
    
  
    
    










