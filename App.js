import React, { Component } from 'react';
import './App.css';

var roIndex
class App extends Component {
  /*constructor(props){
    super(props)
    this.state = {
      rowIndex : "hello "
    }
  }*/
  render() {
    return (
        <div className="App">
          <div className ="appCreate" align="center">
               <h2 align="center" id ="myTitle">CUSTOMER CONTACT SAVER</h2>
            
               <form id = "form">
                   <legend align ="center">Create A Customer Contact Here</legend>
                   <br/>
                   <label>Enter Customer Name: </label><br/>
                   <input type="text" name="cname" id ="cname"/> <br/>
                   <label>Enter Customers Phone Number : </label> <br/>
                   <input type="number" name="pnum" id ="pnum"/><br/>
                   <label>Enter Customer Email:</label><br/>
                   <input type="text" name="eAddress" id ="eAddress"/><br/>
                   <button type="button" id ="mybutton" onClick={this.addRows}>Create Contact</button>
                   
               </form>
            </div>
            <br/><br/>
            <div className ="appRUD">   
               <h2>Retrieve,Update And Delete Customers Contacts Here:</h2>
               <div>
                  <table id="cTable" align ="center">
                      <tbody>
                        <tr>  
                           <th>Name</th>
                           <th>Phone Number</th>
                           <th>Email</th>
                       </tr>
                      </tbody>
                  </table>
               </div><br/>
               <div>
                  <input type="text" name="edname" id="edname"/>
                  <input type="number" name="ednum" id ="ednum"/>
                  <input type="text" name="edAddr" id ="edAddr"/>
                  <button type="button" onClick={this.editContacts}>Save</button>
                  <button type="button" onClick={this.deleteContact}>Delete</button>
                  <p id ="guide">click on the contact row if you want to edit or remove a contact and
                  <br/> use the inputfields and buttons above for editing and deleting contacts</p>
               </div>
            </div>
        </div>
    );
  }
  addRows = () =>{
    /*The following javascript code sets values from the create
    contact form into the retrieve contact table and add new rows
    when the create contact button is clicked*/
        var cTable = document.getElementById("cTable")
        var cname = document.getElementById("cname")
        var pnum = document.getElementById("pnum")
        var eAddress = document.getElementById("eAddress")      
        var name =cname.value
        var number = pnum.value
        var email = eAddress.value  
    /*making sure that the user completely fill the create contact form
    to allow creation of a new contact row in the table*/
    if(name && number && email !== ""){
      var mycontRow = cTable.insertRow(cTable.length)//new row that takes same length as table
      //creating table cells
      var cell1 = mycontRow.insertCell(0)
        var cell2= mycontRow.insertCell(1)
        var cell3 = mycontRow.insertCell(2)
        cell1.innerHTML = name
        cell2.innerHTML = number
        cell3.innerHTML = email
    }else{
      alert("Complete all fields first")
    }

    this.setToUpdate()
    
    }
    setToUpdate =() =>{
        
      var cTable = document.getElementById("cTable")

      var edName = document.getElementById("edname")
      var edNum = document.getElementById("ednum")
      var edAddr = document.getElementById("edAddr")
      
      
      for(let i = 1; i < cTable.rows.length; i++){
        
        
        cTable.rows[i].onclick = function createRow(){
             
              roIndex = this.rowIndex
              edName.value = this.cells[0].innerHTML
              edNum.value = this.cells[1].innerHTML
              edAddr.value = this.cells[2].innerHTML 
                     
          }

        
        }   
  } 

  editContacts =() =>{    
     /*this function will enable update by saving edited content
     from the input fields by using the save button*/  
    var edName = document.getElementById("edname")
      var edNum = document.getElementById("ednum")
      var edAddr = document.getElementById("edAddr")
      var cTable = document.getElementById("cTable")
      
      for(var i = 1; i < cTable.rows.length; i++){
               if(edName.value && edNum.value && edAddr.value !== ""){
               cTable.rows[roIndex].cells[0].innerHTML = edName.value
               cTable.rows[roIndex].cells[1].innerHTML = edNum.value
               cTable.rows[roIndex].cells[2].innerHTML = edAddr.value
                }
               else{
              alert("dont leave an input field blank when editing")
              }
        
        }   
  }
  deleteContact = () =>{

  var edName = document.getElementById("edname")
  var edNum = document.getElementById("ednum")
  var edAddr = document.getElementById("edAddr")
  var cTable = document.getElementById("cTable")
  //this variable will be used in the editContact function to specify the row to be updated
    /*deleting a contact by deleting a contact row and clearing the
    input field in the by the same time*/
      cTable.deleteRow(roIndex)
      edName.value = ""
      edNum.value =  ""
      edAddr.value = ""
  }
}


export default App;
