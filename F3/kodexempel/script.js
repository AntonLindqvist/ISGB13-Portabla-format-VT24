'use strict';

window.addEventListener('load', ()=> {

    window.fetch('https://cors-anywhere.herokuapp.com/https://www3.kau.se/tentamenslista/rss.xml')
    .then(response=>response.text())
    .then(handleData)
});

function handleData(xmlString) {
    
    let parser = new window.DOMParser();
    let xmlDOM = parser.parseFromString(xmlString, 'application/xml');
    //console.log(xmlDOM);
    let items = xmlDOM.querySelectorAll('item');
    let main = document.querySelector('main');
    let ul = document.createElement('ul');
    ul.classList.add('list-group');
    main.appendChild(ul);

    items.forEach(item=> {
        let title = item.querySelector('title').textContent;
        let description = item.querySelector('description').textContent;

        let li = document.createElement('li');
        li.className='list-group-item';
        ul.appendChild(li);

        let titleNode = document.createElement('h5');
        titleNode.textContent=title;
        li.appendChild(titleNode);

        let descriptionNode = document.createElement('div');
        descriptionNode.innerHTML = description;

        li.appendChild(descriptionNode);
    });

}