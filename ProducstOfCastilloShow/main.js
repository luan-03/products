
 
 let span = document.getElementsByTagName('span');
 let banner = document.getElementsByClassName('banner');
 let blockquote = document.querySelector('blockquote');
 let index = 0;

 span[1].onclick = ()=>{
 	if (index == banner.length -1) {
 		index = 0;
 	}
 	else{
 		index++;
 	}
 	show_banner();
 	pas();
 	resetAutoDisplay();
 }
  span[0].onclick = ()=>{
 	if (index == 0) {
 		index = banner.length -1;
 	}
 	else{
 		index--;
 	}
 	show_banner();
 	left_slide();
 	pas();
 	resetAutoDisplay();
 }

 function show_banner(){
 	for(let i=0; i<banner.length; i++)
 	{
 		banner[i].classList.remove('active');
 	}
 	banner[index].classList.add('active');
 }

 let left_slide = ()=>{
 	for(let i=0; i<banner.length; i++)
 	{
 		banner[i].classList.remove('left');
 	}
 	banner[index].classList.add('left');
 }


   function creatEle(){
   	for(let i=0; i<banner.length; i++){
   		let p = document.createElement('p');
   		p.setAttribute('onclick', 'indicate(this)');
   		p.id = i;
   		if (i==0)
   		 {
   		 	p.className = 'actual';
   		 }
   		 blockquote.appendChild(p)
   	  }
   }
   creatEle();

   function pas(){
   	for(let i=0; i<blockquote.children.length; i++){
   		blockquote.children[i].classList.remove('actual');
   	}
   	blockquote.children[index].classList.add('actual');
 }

 function indicate(element){
 	index = element.id;
 	show_banner();
 	pas();
 	}



 	function autoDisplay(){
 		span[1].click();
 	}
 	let x = setInterval(autoDisplay, 4000);

 	function resetAutoDisplay(){
 		clearInterval(x);

 		x = setInterval(autoDisplay, 4000);
 	}

