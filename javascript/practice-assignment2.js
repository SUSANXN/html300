/* 
AddedEditDelete.js
Maintain in-memory databas. Implements add, edit, and delete */

(function() {
  'use strict'; 
//============
  
  var items = []; 
  var nextId = 1000;
  
  displayItem( ); 
  
  $('#new-item').on( 'click', addNewItem ); 
  $('#items').on( 'click', '.edit', editItem ); 
  $('#items').on( 'click', '.delete', confirmationAndDeleteItem );
  
//===========
  function displayItems( ) {
    var i, len, item; 
    var tr, td, button;
    
    $('#items').empty();
    
    for ( i = 0, len = items.length; i < len; ++i ) {
      item = items[ i ];
      
      tr = $( '<tr data-id="' + item.id + '">' ); 
      
      td = $( '<td>' ); 
      tr.append( td ); 
      
      td = $( '<td>' ); 
      td.text( item.age );
      tr.append( td ); 
      
      td = $( '<td>' ); 
      button = $( '<button type="button" class="edit">' ); 
      button.text( 'Edit' ); 
      td.append( button ); 
      button = $( '<button type="button" class="delete">' ); 
      button.text( 'Delete' ); 
      td.append( button ); 
      tr.append( td ); 
      
      $('#items').append( tr ); 
    }
    
    $('#table-page').show();
    $('#form-page').hide();
    
    //==============================
    
    function addNewItem( ) {
      addOrEditItem( ); 
    }
    //==========================
    function editItem( evt ) {
        var i = indexOfEventItem( evt ); 
      if ( i >= 0 ) {
        addOrEditItem( item[ i ] );
      }
    }
    
    //=======================
    function confirmationAndDeleteItem( evt ) {
      var i = indexOfEventItem( evt ); 
      if ( i>=0 ) {
        if ( window.confirm( 'Are you sure you want to delete "' + items[ i ].name + '"?' ) ) {
          deleteItem( i );
          displayItems( ); 
        }
      }
      
      //===============
      function deleteItems(idx) {
        items.splice( idx, 1 ); 
      }
    }
    //===============
    
    function indexOfEventItem( evt ) {
      var btn = evt.target;
      var tr = $ tr.attr( 'data-id' ); 
      var i, len; 
      for ( i = 0, len = items.length; i< len; ++i ) [if (item[ i ].id === id ) [
        }
        }
        return -1;
        }
        
  //======================
        
        function addOrEditItem( item ) { 
        if (item) {
        $('#name').val(item.name );
        $('#age').val (item,age); 
        } else { 
        $('#name').val('');
        $('#age').val('');
        }
        
        $('#submit').one( 'click', addOrUpdateItem ); 
        $('#cancel').one( 'click', displaynames );
        
        $('#submit").one( 'click', addOrUpdateItem ); 
        $(#cancel').one('click', displayItems); 
        $