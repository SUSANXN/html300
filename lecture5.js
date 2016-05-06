
// -------------closures-------------------

function makeGreeter( ) {
  var greeting = 'Hey whatsup hello!';
  function greet( name ) {
    console.log( greeting + ',' + name );
    
    };
    return greet;
    }

var greeter = makeGreeter( );
greeter( 'Susan' ); 


//--------This - ordinary function calls -------------------

function greet( gretting ) {
  'use strict';
  console.log( greeting + ',' + this.firstname );
}

var person1 = {
  firstname: 'Mary', 
  greet: greetPerson
};

var person2 = { 
  firstname: 'Betty', 
  greet: greetPerson 
}; 

person1.greet( 'Hello' );
person2.greet( 'ELLLOO' ); 

//------Constructors ------- bind objects to function-- see example below

function greetPerson( greeting ) {
  console.log( greeting + ',' + this.firstname ); 
}

var person1 = {
    firstname: 'Mary'
};

var person2 = {
  firstname: 'Betty' 
};

greetPerson.call( person1, 'Hello" );
greetPerson.apply( person2, 'ELLLOO' ); 

// Nested functions --------------------

function Thing( props ) {
    'use string';
    function copyProps( ) {
      for ( var key in props ) {
        this[ key ] = props[ key ];
      }
    }
  copyProps( ); 
}

var thing1 = new Thing( { foo: 1, bar: 'bar' } );
console.log( thing1 ); 

//-------Arguments ----------- 8:46 pm 

function showArgs( ) {
    var i, len; 
    for ( i = 0, len = arguments.length; i < len; ++i ) {
      console.log( i + ':' + argument[ i ] );
    }
}

showArgs( 'Hello' , 'Zoe' , 23 ); 
        
// ---------- Regular expressions, powerful way to dscribe pattersn of chracters that a string may have or contain. Example, writing expression to find valid email address. 
//more examples of regular expressions include: 

string.search()
string.replace()
string.match()

