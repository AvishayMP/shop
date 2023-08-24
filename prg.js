// assistant functions:
const create = (type, className = "", id = '', content = "") => {
    try {
        const el = document.createElement(type);
        el.id = id;
        el.classList = className;
        el.innerText = content;
        return el;
    } catch (err) {
        console.error(err.message);
    }
}
const createInp = (type, inputContent = '', labeltxt = '') => {
    const lbl = create('label', '', '', labeltxt);
    const inp = document.createElement(type);
    inp.value = inputContent;
    lbl.append(inp);
    return lbl;
}
const createIconDiv = (iObj) => {
    //icons div:
    const iconsDiv = create('div', 'iconsDiv fx-row', 'iconsDiv');

    for (const key in iObj) {
        const icon = create('i', 'material-icons', '', key);
        icon.onclick = () => {
            event.stopPropagation();
            iObj[key]();
        };
        iconsDiv.append(icon);
    }
    return iconsDiv;
}
// end assist.

// data and variables:
let data = [];
const categories = ["All products"];

let chosenCats = "allproducts";
let filterStr = '';
let curId;
// end variables.


// home page deff:

//handle data: 
const fechData = async () => {
    const response = await fetch('https://tiny-gray-alligator-suit.cyclic.cloud/api/products');
    return await response.json();
}
const resetData = async () => {
    data = localStorage.storeData;
    if (!data) {
        data = await fechData();
        data.forEach(el => {
            el.quantity = Math.floor(Math.random() * 10 + 1);
            if (!Object.hasOwn(el, 'category')) { // some data had no category defined.
                el.category = '';
            }
            if (categories.findIndex(c => c == el.category) == -1) {
                categories.push(el.category);
            }
        });
        localStorage.setItem('storeData', JSON.stringify(data))
    } else {
        data = JSON.parse(data);
        data.forEach(el => {
            if (!Object.hasOwn(el, 'category')) { // some data had no category defined.
                el.category = '';
            }
            if (categories.findIndex(c => c == el.category) == -1) {
                categories.push(el.category);
            }
        });
    }
    curId = data[data.length - 1].id + 1;
}

// Delete product:
const deleteProduct = (p) => {
    event.stopPropagation();
    data = data.filter(d => d.id !== p.id);
    localStorage.setItem('storeData', JSON.stringify(data));
    showCards('home');
}
// edit product
const edit = (p) => {
    event.stopPropagation();
    data.push(p);
    localStorage.setItem('storeData', JSON.stringify(data));
    showCards('home');
}
// set product data:
const setProd = (p) => {
    event.stopPropagation();
    data[data.findIndex(d => d.id == p.id)] = JSON.parse(JSON.stringify(p));
    localStorage.setItem('storeData', JSON.stringify(data));
    showCards('home');

}
// end data functions

// this function and the fit css token from w3schools for saving time:
const autocomplete = (inp, arr) => {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = create("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        arr.forEach(el => {
            const EL = el.toUpperCase();
            const foundIndex = EL.indexOf(val.toUpperCase());
            /*check if the item starts with the same letters as the text field value:*/
            if (foundIndex !== -1) {
                /*create a DIV element for each matching element:*/
                b = create("div");
                /*make the matching letters bold:*/
                const strong = create(
                    'strong', '', '',
                    val
                );
                const before = create('span', '', '',
                    el.substr(0, foundIndex));
                const after = create('span', '', '',
                    el.substr(foundIndex + val.length, el.length - foundIndex));

                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                b.append(before, strong, after);
                a.appendChild(b);
            }
        });
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}
const categoryClick = (btn) => {
    const curCat = btn.innerText.replace(' ', '').toLowerCase();
    btn.classList.toggle('chosen');
    if (chosenCats.indexOf(curCat) !== -1) {
        chosenCats = chosenCats.replace(curCat, "");
    } else {
        chosenCats += curCat.toLowerCase();
    }
    showCards(chosenCats);
}
const createCard = (d) => {
    const card = create('div', 'card fx-col bg-lightpink');

    // image div:
    const imageDiv = create('div', 'product-image-container')
    // image:
    const image = create('img', 'product-image');
    image.src = d.image;
    image.alt = `${d.title} image`;
    image.width = 60;

    imageDiv.appendChild(image);
    // title:
    const title = create('h5', 'card-title', '', d.title);
    // hr
    const hr = create('hr');
    // quantity bar
    const quant = create('div', 'quantityBar fx-row');
    const inc1 = create('i', 'material-icons', '', 'plus_one');
    const num = create('span', '', 'quantity', d.rating.count);
    const dec1 = create('i', 'material-icons', '', 'exposure_neg_1');
    const star = create('i', 'material-icons bg-lightpink', 'star', 'star');
    quant.append(inc1, num, dec1);
    //icons div:
    const iconsDiv = createIconDiv({
        delete: () => deleteProduct(d),
        edit: () => showEdit(d)
    });
    if (d.rating.rate > 4.5) {
        iconsDiv.append(star);
    }
    // appending:
    card.append(imageDiv, title, hr, quant, iconsDiv);
    card.onclick = () => showProduct(d);
    return card;
}

const showCards = (filter) => {
    document.getElementsByClassName('mainTitle')[0].innerText = 'Products:';
    const showZone = document.getElementById('show-zone');
    showZone.innerText = '';
    if (filter == 'home') {
        const btns = document.querySelectorAll('.btn-category');
        btns.forEach(b => b.classList.remove('chosen'));
        btns[0].classList.add('chosen');
        chosenCats = 'allproducts';
    }
    data.forEach(d => {
        if (filter == 'home' || filter.includes('allproducts')) {
            const card = createCard(d);
            showZone.appendChild(card);
            return;
        } else if ((filter !== '') && (filter.includes(d.category.replace(' ', '').toLowerCase()) || d.title.includes(filter))) {
            const card = createCard(d);
            showZone.appendChild(card);
        }
    });
}
const inputChange = (e) => {
    filterStr = e.target.value;
}
// end home.


// single product page deff:
const showProduct = (product) => {
    event.stopPropagation();
    const { title, description, category, price, rating: { count } } = product;
    const main = document.getElementsByTagName('main')[0];
    const prodTitle = main.getElementsByTagName('h1')[0];
    //icons divs:
    const iconsDiv = createIconDiv({
        arrow_back: () => showCards('home'),
        edit: () => showEdit(product),
        home: () => showCards('home')
    });
    const tspan = create('span', '', '', 'Product:');
    prodTitle.innerText = '';
    prodTitle.append(iconsDiv, tspan);

    const showZone = document.getElementById('show-zone');
    showZone.innerText = '';

    const prodCard = create('div', 'single-product fx-row');

    // image div:
    const imageDiv = create('div', 'product-image-container')
    // image:
    const image = create('div', 'product-image');
    image.style.backgroundImage = `URL(${product.image})`;

    imageDiv.appendChild(image);

    const describeDiv = create('div', '', 'description');

    describeDiv.append(create('h4', '', '', 'Title:'),
        create('p', '', '', title));
    describeDiv.append(create('h4', '', '', 'Description:'),
        create('p', '', '', description));
    describeDiv.append(create('h4', '', '', 'Category:'),
        create('p', '', '', category));
    describeDiv.append(create('h4', '', '', 'Price:'),
        create('p', '', '', price));
    describeDiv.append(create('h4', '', '', 'Quantity:'),
        create('p', '', '', count));

    prodCard.append(imageDiv, describeDiv);
    showZone.appendChild(prodCard);
}
// end single product.

// add card page:
const addPage = () => {
    const main = document.getElementsByTagName('main')[0];
    const prodTitle = main.getElementsByTagName('h1')[0];
    //icons div:
    const iconsDiv = createIconDiv({
        arrow_back: () => showCards('home')
    });

    const tspan = create('span', '', '', 'Add new product:');
    prodTitle.innerText = '';
    prodTitle.append(iconsDiv, tspan);

    const showZone = document.getElementById('show-zone');
    showZone.innerText = '';

    const inputsDiv = create('div', 'fx-col', 'addProduct');

    const titleInp = createInp('input', '', 'Title:');
    const categoryInp = createInp('input', '', 'Category:');
    const priceInp = createInp('input', '', 'Price:');
    const urlInp = createInp('input', '', 'imageURL:');
    const countInp = createInp('input', '', 'Quantity:');
    const descriptInp = createInp('textarea', '', 'Description:');

    inputsDiv.append(titleInp, categoryInp, priceInp, urlInp, countInp, descriptInp);
    const btnSubmit = create('button', '', '', 'ADD');
    btnSubmit.onclick = () => {
        const p = {
            id: ++curId,
            title: titleInp.value,
            description: descriptInp.value,
            category: categoryInp,
            price: priceInp.value,
            rating: { rate: 0, count: countInp }
        }
        edit(p);
        showCards('home');
    }
    showZone.append(inputsDiv, btnSubmit);
}
// end add card page:

// edit product page:
const showEdit = (product) => {
    event.stopPropagation();
    if (product) {
        const { title, description, category, price, rating: { count } } = product;
        const main = document.getElementsByTagName('main')[0];
        const prodTitle = main.getElementsByTagName('h1')[0];
        //icons div:
        const iconsDiv = createIconDiv({
            arrow_back: () => showCards('home'),
            pageview: () => showProduct(product),
            home: () => showCards('home')
        });

        const tspan = create('span', '', '', 'Edit product:');
        prodTitle.innerText = '';
        prodTitle.append(iconsDiv, tspan);

        const showZone = document.getElementById('show-zone');
        showZone.innerText = '';

        const inputsDiv = create('div', '', 'addProduct');

        const titleInp = createInp('input', title, 'Title:');
        const categoryInp = createInp('input', category, 'Category:');
        const priceInp = createInp('input', price, 'Price:');
        const urlInp = createInp('input', product.image, 'imageURL:');
        const countInp = createInp('input', count, 'Quantity:');
        const descriptInp = createInp('textarea', description, 'Description:');

        inputsDiv.append(titleInp, categoryInp, priceInp, urlInp, countInp, descriptInp);
        const btnSubmit = create('button', '', '', 'EDIT');
        btnSubmit.onclick = () => {
            const p = {
                id: ++curId,
                title: titleInp.value,
                description: descriptInp.value,
                image: urlInp,
                category: categoryInp,
                price: priceInp.value,
                rating: { rate: 0, count: countInp }
            }
            edit(p);
            showCards('home');
        }
        showZone.append(inputsDiv, btnSubmit);
    }
}
// end edit product page:

window.onload = () => {
    document.head.title = "Store";
    resetData();
    const filterLine = document.getElementById('categories');

    categories.forEach(dt => {
        const bt = create('button',
            'btn-category bg-lightpink',
            `filter-${dt.replace(' ', '').toLowerCase()}`,
            dt.charAt(0).toUpperCase() + dt.slice(1));

        if (bt) {
            bt.onclick = () => categoryClick(bt);
            filterLine.appendChild(bt);
        }
    });
    document.getElementById('filter-allproducts').classList.add('chosen');
    document.getElementById('filter-txt').oninput = (e) => inputChange(e);
    document.getElementById('filter-submit').onclick = () => {
        showCards(filterStr);
    }
    /*initiate the autocomplete function on the "filter-txt" element, and pass along the countries array as possible autocomplete values:*/
    autocomplete(document.getElementById("filter-txt"), data.map(d => d.title));

    showCards('allproducts');
}