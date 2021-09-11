class Calculator {
  constructor (txtPrev, txtCurr) {
    this.txtPrev = txtPrev
    this.txtCurr = txtCurr
    this.clear()
  }

  clear() {
    this.txtPrev = ""
    this.txtCurr = ""
    this.operation = undefined
  }
  delete() {

  }
  appendNum() {
    this,txtCurr = number
  }
  chooseOperation(){

  }
  compute(){

  }
  updateScreen(){
    this.txtCurr.innerText = this.txtCurr
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

btnNums.forEach(btn =>{
  btn.addEventListener('click', () => {
    calc.appendNum(btn.innerText)
    calc.updateScreen()
  })
})