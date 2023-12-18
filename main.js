const counterElement = document.getElementById('counter');
let counterValue = 0;


function increaseCounter() {
  counterValue++;
  updateCounter();
}
function clearCounter() {
    counterValue = 0;
    updateCounter();
  }
function decreaseCounter() {
      counterValue--;
      lowwerzro()
      updateCounter();
    }
function updateCounter() {
  counterElement.textContent = counterValue;
}
function lowwerzro() {
    if (counterValue < 0) {
        alert('ค่าติดลบใช้ไม่ได้')
        clearCounter()
    }
  }