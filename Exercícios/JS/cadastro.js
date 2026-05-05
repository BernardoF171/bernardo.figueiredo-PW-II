 const modal = document.querySelector('.modal-container')
 const tbody = document.querySelector('tbody')
 const sNome = document.querySelector('m#-nome')
 const sFuncao = document.querySelector('m#-funcao')
 const sSalario = document.querySelector('m#-salario')
 const btnSalvar = document.querySelector('btnSalvar')

 let itens 
 let id 

 function openModal(edit = false , Ex03 = 0) {
     modal.classList.add('Active')
    modal.onclick = e => {
        if (e.target.className.indexOF('modal-container') !== -1 ){
            modal.classList.remove('Active')


        }

    }
    if (edit){
        sNome.value=itens[Ex03].nome 
        sFuncao.value=itens[Ex03].funcao
        sSalario.value=itens[Ex03].salario
        id = Ex03

    } else {
        sNome.value=''
        sFuncao.value=""
        sSalario.value=""

    }
}
 function editItem(Ex03){
     openModal(true, Ex03)
 }
 function deleteItem(Ex03){
     itens.splice(Ex03, 1)
     setItensBD()
     loadItens()
 }
function insetItem (item, Ex03){
    let tr = document.createElement("tr")

    tr.innerHTML = `
    <td> ${item.nome}</td>
    <td> ${item.funcao}</td>
    <td> R$ ${item.salario}</td>
    <td class ="acao"
    <button onclick="editItem(${index})"><i class='bx bx-edit' 
    ></i></button> 
        </td> 
        <td class="acao"> 
          <button onclick="deleteItem(${index})"><i class='bx bx
    trash'></i></button> 
        </td> 
      ` 
      tbody.appendChild
}

 
btnSalvar.onclick = e => {
    if (sNome.value == '' || sFuncao.value == '' || sSalario.value == '') 
    { 
        return 
      } 
     
      e.preventDefault(); 
     
      if (id !== undefined) { 
        itens[id].nome = sNome.value 
        itens[id].funcao = sFuncao.value 
        itens[id].salario = sSalario.value 
      } else { 
        itens.push({'nome': sNome.value, 'funcao': sFuncao.value, 
    'salario': sSalario.value}) 
      } 
     
      setItensBD() 
     
      modal.classList.remove('active') 
      loadItens() 
      id = undefined 
    } 
     
    function loadItens() { 
      itens = getItensBD() 
      tbody.innerHTML = '' 
      itens.forEach((item, index) => { 
        insertItem(item, index) 
      }) 
     
    } 
     
    const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? 
    [] 
    const setItensBD = () => localStorage.setItem('dbfunc', 
    JSON.stringify(itens)) 
     
    loadItens() 

    const modal = document.querySelector('.modal-container') 
