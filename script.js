var data=[
         { 
    	     pic:"f.png",
             name: "sam " ,
             designation:"Software Developer",
             address:"Delhi",
             age:45,
             link:"https://www.gmail.com"
         },
         { 
    	     pic:"m.png",
             name: "qwerty " ,
             designation:"Software Developer",
             address:"M.P",
             age:36,
             link:"https://www.gmail.com"
         },
         { 
    	     pic:"y.jpeg",
             name: "jack " ,
             designation:"Software Developer",
             address:"U.P",
             age:34,
             link:"https://www.gmail.com"
         },
         { 
    	     pic:"m.png",
             name: "jon " ,
             designation:"Software Developer",
             address:"goa",
             age:23,
             link:"https://www.gmail.com"
         }
];

var profile_container_1=document.getElementById('container_1');
// console.log(profile_container_1);

var profile_container_1_copy=document.getElementById('container_1_copy');
// console.log(profile_container_1_copy);


for(var i=0;i<data.length;i++)

{
	 var cloned_container=profile_container_1.cloneNode(true);
	 console.log(cloned_container);
	 cloned_container.id="Cloned_container" + i;
	 profile_container_1_copy.append(cloned_container);
     
     cloned_container.getElementsByClassName('name')[0].innerText=data[i].name;
     cloned_container.getElementsByClassName('pic')[0].src=data[i].pic;
     cloned_container.getElementsByClassName('designation')[0].innerText=data[i].designation;
     cloned_container.getElementsByClassName('address')[0].innerText=data[i].address;
     cloned_container.getElementsByClassName('age')[0].innerText=data[i].age;
     cloned_container.getElementsByClassName('submit')[0].href=data[i].link;

     // profile_container_1_copy="";
     // profile_container_1_copy.style.display='block';
}
 
function DataUpdate()
{
	var updateName= document.getElementsByClassName('name1')[0].value;
	console.log(updateName);
	var At_Position=parseInt(document.getElementsByClassName('position')[0].value);
	console.log(At_Position);

	profile_container_1_copy.children[At_Position-1].getElementsByClassName('name')[0].innerText=updateName;
}
