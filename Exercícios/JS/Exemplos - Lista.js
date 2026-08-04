// array
const numeros = [10, 20, 30, 40];

numeros.push(50);         
numeros.pop();           
console.log(numeros[1]); 

//////

// Listas Ligadas/Encadeadas (Linked Lists)
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
}

//////

// Lista Dupla 
class DoublyNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new DoublyNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
}

///////

// Lista Circular 
class CircularLinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head; // Aponta para si mesmo
      return;
    }
    let current = this.head;
    while (current.next !== this.head) {
      current = current.next;
    }
    current.next = newNode;
    newNode.next = this.head; // Fecha o ciclo
  }
}

///////

// Pilhas (Stacks)
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) { this.items.push(element); } // Empilhar
  pop() { return this.items.pop(); }          // Desempilhar
  peek() { return this.items[this.items.length - 1]; } // Ver topo
}

const pilha = new Stack();
pilha.push("Página 1");
pilha.push("Página 2");
console.log(pilha.pop()); 

//////

// Filas (Queues)
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) { this.items.push(element); } 
  dequeue() { return this.items.shift(); }        
  front() { return this.items[0]; }               
}

const fila = new Queue();
fila.enqueue("Cliente A");
fila.enqueue("Cliente B");
console.log(fila.dequeue()); 

////////

// Alocação Dinamica 
function criarObjetoDinamico(nome, idade) {
  
  return { nome, idade, timestamp: Date.now() };
}

let pessoa = criarObjetoDinamico("Ana", 28);
pessoa = null; 

////////

// Recursividade 

function fatorial(n) {
  if (n <= 1) return 1;          
  return n * fatorial(n - 1);   
}

console.log(fatorial(5)); 

////////

// Espelhamento (Hash Tables)

const tabelaHash = new Map();


tabelaHash.set("usuario_123", { nome: "Carlos", email: "carlos@email.com" });


console.log(tabelaHash.get("usuario_123")); 

///////

// Arvores (Trees)
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    this._insertNode(this.root, newNode);
  }

  _insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) node.left = newNode;
      else this._insertNode(node.left, newNode);
    } else {
      if (!node.right) node.right = newNode;
      else this._insertNode(node.right, newNode);
    }
  }
}

///////////

// Métodos de Ordenação (Sorting)
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
       
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 1, 4, 2, 8])); 

/////////

// Métodos de Busca (Search)
function buscaBinaria(arrOrdenado, alvo) {
  let inicio = 0;
  let fim = arrOrdenado.length - 1;

  while (inicio <= fim) {
    let meio = Math.floor((inicio + fim) / 2);

    if (arrOrdenado[meio] === alvo) return meio; 
    if (arrOrdenado[meio] < alvo) inicio = meio + 1;
    else fim = meio - 1;
  }
  return -1; 
}

console.log(buscaBinaria([10, 20, 30, 40, 50], 40)); 

////////

// 