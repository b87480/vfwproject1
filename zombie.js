/*
 		Joshua Whitney  
 		VFW 1304 
		Assignement 2
 */

window.addEventListener("DOMContentLoaded", function(){


//Global Variables
var weaponChoice = ["--Select Your Weapon of Choice!--", "Gun", "Crowbar", "Grenade", "Crowbar", "Bazooka", "Knife"];
//END Global Variables

	function $(x){
		var myElement = document.getElementById(x);
		return myElement;
	}

	function chooseWeapon(){
			var newTag = document.getElementsByTagName("form"); 
					li = $('select');
					selectIt = document.createElement('select');
					selectIt.setAttribute("id", "weapons");
				for(var i=0, x=weaponChoice.length; i<x; i++){
					var selection = document.createElement('option');
					var txt = weaponChoice[i];
					selection.setAttribute("value", txt);
					selection.innerHTML = txt;
					selectIt.appendChild(selection);
				}	
				li.appendChild(selectIt);
			}
	
	function clearData(){
		if(localStorage.length === 0){
			alert("There are no Zombies to Delete!");
		}else{
			var yes = confirm("Are you sure that you want to delete all Zombies?");
				if(yes==true){
					localStorage.clear();
					alert("All zombies have been deleted!");
				}else{
					alert("No zombies have been deleted");
				}
			
			location.reload();
		}
	}
	function checkValue(){
		for(i=0, x=$('myform').priority.length; i<x; i++){
			if($('myform').priority[i].checked){
				var newCheck = $('myform').priority[i].value;
				return newCheck;

			}
		}
	}
	
	function newRadio(){
		var radio = $('myform').sex.length;
		for(var i=0; i<radio; i++){
			if($('myform').sex[i].checked){
				var newSex = $('myform').sex[i].value;
				return newSex;
			}
		}
	}
	
	function storeData(){
		var keyNum = Math.floor(Math.random()*1000001);
		newRadio();
		checkValue();
		var info = {};
			info.fname		 = ["User First Name", $('fname').value];
			info.lname 		 = ["User Last Name", $('lname').value];
			info.email 		 = ["User Email", $('clientemail').value];
			info.tele 		 = ["User Telephone Number", $('clienttelephone').value];
			info.zname 		 = ["Zombie's First Name", $('firstname').value];
			info.zlast 		 = ["Zombie's Last Name", $('lastname').value];
			info.sex 		 = ["Zombie's Sex", newRadio()];
			info.prior 		 = ["Priority", checkValue()];
			info.weap 		 = ["Your Weapon of Choice", $('weapons').value];
			info.write 		 = ["Users Reason", $('myform').text.value];
			info.rate 		 = ["User's Rating", $('stars').value];
			info.inv 		 = ["Invisible Info", $('customer').value];
			info.date 		 = ["You Want Them Killed On", $('deadLine').value];
	
	var newInfo = localStorage.setItem(keyNum, JSON.stringify(info));
		alert("Zombie Has Been Added to The Hit List!")
		location.reload();
}




	function showZombie(){
		if(localStorage.length === 0){
			alert("There are no Zombies in the Database!");
		}else{
		var newDiv = document.createElement('div');
		newDiv.setAttribute("id", "data");
		var newUl = document.createElement('ul');
		newDiv.appendChild(newUl);
		$('nav1').appendChild(newDiv);
		$('data');
		for(var i=0, x = localStorage.length; i<x; i++){
			var newLi = document.createElement('li');
			newUl.appendChild(newLi);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var json = JSON.parse(value);
			var newList = document.createElement('ul');
			newLi.appendChild(newList);
			for(var n in json){
				var newList = document.createElement('li');
				newList.setAttribute("class", "print");
				newLi.appendChild(newList);
				var optSubText = json[n][0]+": "+json[n][1];
				newList.innerHTML = optSubText;
				$('myform').style.display = "none";
			}
		}
	}
}


chooseWeapon();



var addZombie = $('button');
	addZombie.addEventListener("click", storeData);
var clear = $('clearzombie');
	clear.addEventListener("click", clearData);
var show = $('showzombie');
	show.addEventListener("click", showZombie);






});