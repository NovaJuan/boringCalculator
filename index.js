let operation = '';
let screen = document.getElementById('screen');

document.getElementById('buttons').addEventListener('click',(e)=>{
  if(e.target.value == '='){
    screen.value = eval(operation);
    return;
  }else if(e.target.value == 'c'){
    operation = '';
    screen.value = '';
    return;
  }else if (e.target.value == undefined) {
    return;
  }else{
    switch (e.target.value) {
      case '/':
        if (operation.indexOf('/') == -1) {
          if (operation == '') {
            operation += '0' + e.target.value;
            screen.value += '0' + e.target.value;
            return;
          }
          operation += e.target.value;
          screen.value += e.target.value;
          return;
        }else {
          return;
        }
        break;
      case '*':
        if (operation.indexOf('*') == -1) {
          if (operation == '') {
            operation += '0' + e.target.value;
            screen.value += '0' + 'x'
            return;
          }
          operation += e.target.value;
          screen.value += 'x';
          return;
        }else {
          return;
        }
        break;
      case '+':
        if (operation.indexOf('+') == -1) {
          if (operation == '') {
            operation += '0' + e.target.value;
            screen.value += '0' + e.target.value;
            return;
          }
          operation += e.target.value;
          screen.value += e.target.value;
          return;
        }else {
          return;
        }
        break;
      case '-':
        if (operation.indexOf('-') == -1) {
          if (operation == '') {
            operation += '0' + e.target.value;
            screen.value += '0' + e.target.value;
            return;
          }
          operation += e.target.value;
          screen.value += e.target.value;
          return;
        }else {
          return;
        }
        break;
      case '.':
        if (operation.indexOf('.') == -1) {
          if (operation == '') {
            operation += '0' + e.target.value;
            screen.value += '0' + e.target.value;
            return;
          }
          operation += e.target.value;
          screen.value += e.target.value;
          return;
        }else {
          return;
        }
        break;

      default:
        operation += e.target.value;
        screen.value += e.target.value;
        return;
    }
  }
});
