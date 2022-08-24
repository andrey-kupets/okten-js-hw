// =================================== THIS ===========================
// -------------------------------this: non-arrow function & arrow function
// В качестве первого аргумента методов call или apply может быть передан объект,
// на который будет указывать this.
var obj = {a: 'Custom'};

// Это свойство принадлежит глобальному объекту
var a = 'Global';

function whatsThis() {
  return this.a;  //значение this зависит от контекста вызова функции
}

const whatsThisArrowFn = () => {
    return this.a;  // this not tied to anything: global only
  }

console.log(whatsThis());  // 'Global'
console.log(whatsThis.call(obj));  // 'Custom'
console.log(whatsThis.apply(obj)); // 'Custom'
console.log(whatsThisArrowFn()); // 'Global'
console.log(whatsThisArrowFn.call(obj)); // 'Global'

// ------------------------ this: defference between outputs depends on how we call a function
var obj = { bar : function() {
    var x = (() => this);
    return x;
  }
};

var fn = obj.bar();

console.log(fn()); // {bar: ƒ}


var fn2 = obj.bar;

console.log(fn2); // fn body
console.log(fn2()); // () => this
console.log(fn2()()); // Window


// ----------------------------- this in DOM-events -------------------
function bluify(e) {
    // Всегда true
    console.log(this === e.currentTarget);
    // true, когда currentTarget и target один объект
    console.log(this === e.target);
    this.style.backgroundColor = '#A5D9F3';
  }
  
  // Получить список каждого элемента в документе
  var elements = document.getElementsByTagName('*');
  console.log(elements);
  
  // Добавить bluify как обработчика кликов, чтобы при
  // нажатии на элемент он становился синим
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', bluify, false);
  }

// ------------- this in non-object call argument  
  function bar() {
    console.log(Object.prototype.toString.call(this));
  }
  
  bar.call(7); // [object Number]


//   ************ class Number & String
  const num = new Number(77);
  console.log(num);

  const str = new String('hello');
  console.log(str);