class Calculator {
  constructor (txtPrev, txtCurr) {
    this.txtPrev = txtPrev
    this.txtCurr = txtCurr
    this.clear()
  }

  clear() {
    this.txtPrev = ''
    this.txtCurr = ''
    this.operation = undefined
  }

  delete() {

  }

  appendNum(number) {
    // console.log('2:',number);
    if (number==='.' && this.txtCurr.includes('.')) return
    this.txtCurr = this.txtCurr.toString() + number.toString()
    // console.log('3:',number);
    // console.log('4:',this.txtCurr);

  }

  chooseOperation(operation){
    this.operation = operation
    this.txtPrev = this.txtCurr
    this.txtCurr = ''
  }

  compute(){

  }

  updateScreen(){
    // console.log('6:',this.txtCurr);
    txtCurr.innerText = this.txtCurr
    txtPrev.innerText = this.txtPrev
  }
}

const btnNums = document.querySelectorAll('[data-num]')
const btnOps  = document.querySelectorAll('[data-op]')
const btnEq = document.querySelector('[data-eq]')
const btnDel = document.querySelector('[data-del]')
const btnAC = document.querySelector('[data-ac]')
const txtPrev = document.querySelector('[data-prev]')
const txtCurr = document.querySelector('[data-curr]')

const calc = new Calculator(txtPrev,txtCurr)

btnNums.forEach(btn => {
  btn.addEventListener('click', () => {
    // console.log('1:',btn.innerText);
    calc.appendNum(btn.innerText)
    // console.log('5:',btn.innerText);
    calc.updateScreen()
  })
})

btnOps.forEach(btn => {
  btn.addEventListener('click', () => {
    // console.log('1:',btn.innerText);
    calc.chooseOperation(btn.innerText)
    // console.log('5:',btn.innerText);
    calc.updateScreen()
  })
})