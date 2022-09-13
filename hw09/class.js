// 1. =================================== THIS ===========================
// 1.1 non-arrow function & arrow function
// В качестве первого аргумента методов call или apply может быть передан объект,
// на который будет указывать this.

// var obj = {a: 'Custom'};

// // Это свойство принадлежит глобальному объекту
// var a = 'Global';

// function whatsThis() {
//   return this.a;  //значение this зависит от контекста вызова функции
// }

// const whatsThisArrowFn = () => {
//     return this.a;  // this not tied to anything: global only
//   }

// console.log(whatsThis());  // 'Global'
// console.log(whatsThis.call(obj));  // 'Custom'
// console.log(whatsThis.apply(obj)); // 'Custom'
// console.log(whatsThisArrowFn()); // 'Global'
// console.log(whatsThisArrowFn.call(obj)); // 'Global'

// // 1.2 defference between outputs depends on how we call a function
// var obj = { bar : function() {
//     var x = (() => this);
//     return x;
//   }
// };

// var fn = obj.bar();

// console.log(fn()); // {bar: ƒ}


// var fn2 = obj.bar;

// console.log(fn2); // fn body
// console.log(fn2()); // () => this
// console.log(fn2()()); // Window


// // 1.3 this in DOM-events 
// function bluify(e) {
//     // Всегда true
//     console.log(this === e.currentTarget);
//     // true, когда currentTarget и target один объект
//     console.log(this === e.target);
//     this.style.backgroundColor = '#A5D9F3';
//   }
  
//   // Получить список каждого элемента в документе
//   var elements = document.getElementsByTagName('*');
//   console.log(elements);
  
//   // Добавить bluify как обработчика кликов, чтобы при
//   // нажатии на элемент он становился синим
//   for (var i = 0; i < elements.length; i++) {
//     elements[i].addEventListener('click', bluify, false);
//   }

// // ------------- this in non-object call argument  
//   function bar() {
//     console.log(Object.prototype.toString.call(this));
//   }
  
//   bar.call(7); // [object Number]


// //   ************ class Number & String
//   const num = new Number(77);
//   console.log(num);

//   const str = new String('hello');
//   console.log(str);


  // 2. super - By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods:
  // 2.1

  class Animal{

    constructor()
    {
      this.walk = "walk";
    }
  }
  class Dog extends Animal{
  constructor()
  {
    super();
  this.bark = "bark";
  }
  
  }
  
  const dog = new Dog();
  console.log(dog.walk);


  //  2.2

  class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(mod) {
      super("Ford");
      // super(brand, mod);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
  mycar = new Model("Mustang");
  // mycar = new Model("Ford", "Mustang");
  console.log(mycar.show());