// DATA BASE:
const DB = [
    {
        id: 1,
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 109.95,
        description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        rating: { rate: 3.9, count: 120 }
    },
    {
        id: 2,
        title: 'Mens Casual Premium Slim Fit T-Shirts ',
        price: 22.3,
        description: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        rating: { rate: 4.1, count: 259 }
    },
    {
        id: 3,
        title: 'Mens Cotton Jacket',
        price: 55.99,
        description: 'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
        rating: { rate: 4.7, count: 500 }
    },
    {
        id: 4,
        title: 'Mens Casual Slim Fit',
        price: 15.99,
        description: 'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
        rating: { rate: 2.1, count: 430 }
    },
    {
        id: 5,
        title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price: 695,
        description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        category: 'jewelery',
        image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
        rating: { rate: 4.6, count: 400 }
    },
    {
        id: 6,
        title: 'Solid Gold Petite Micropave ',
        price: 168,
        description: 'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
        category: 'jewelery',
        image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
        rating: { rate: 3.9, count: 70 }
    },
    {
        id: 7,
        title: 'White Gold Plated Princess',
        price: 9.99,
        description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        category: 'jewelery',
        image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
        rating: { rate: 3, count: 400 }
    },
    {
        id: 8,
        title: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
        price: 10.99,
        description: 'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
        category: 'jewelery',
        image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
        rating: { rate: 1.9, count: 100 }
    },
    {
        id: 9,
        title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0 ',
        price: 64,
        description: 'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system',
        category: 'electronics',
        image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
        rating: { rate: 3.3, count: 203 }
    },
    {
        id: 10,
        title: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
        price: 109,
        description: 'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/ write speeds of up to 535MB / s / 450MB / s(Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.) ',
        category: 'electronics',
        image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
        rating: { rate: 2.9, count: 470 }
    },
    {
        id: 11,
        title: 'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
        price: 109,
        description: '3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC(Error Checking & Correction) to provide the optimized performance and enhanced reliability.',
        category: 'electronics',
        image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
        rating: { rate: 4.8, count: 319 }
    },
    {
        id: 12,
        title: 'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',
        price: 114,
        description: "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        category: 'electronics',
        image: 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg',
        rating: { rate: 4.8, count: 400 }
    },
    {
        id: 13,
        title: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
        price: 599,
        description: '21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz',
        category: 'electronics',
        image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
        rating: { rate: 2.9, count: 250 }
    },
    {
        id: 14,
        title: 'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ',
        price: 999.99,
        description: '49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag', category: 'electronics',
        image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
        rating: { rate: 2.2, count: 140 }
    },
    {
        id: 15,
        title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        price: 56.99,
        description: 'Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates',
        category: "women's clothing",
        image: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
        rating: { rate: 2.6, count: 235 }
    },
    {
        id: 16,
        title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        price: 29.95,
        description: '100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON',
        category: "women's clothing",
        image: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
        rating: { rate: 2.9, count: 340 }
    },
    {
        id: 17,
        title: 'Rain Jacket Women Windbreaker Striped Climbing Raincoats',
        price: 39.99,
        description: "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.", category: "women's clothing",
        image: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
        rating: { rate: 3.8, count: 679 }
    },
    {
        id: 18,
        title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
        price: 9.85,
        description: '95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem',
        category: "women's clothing",
        image: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
        rating: { rate: 4.7, count: 130 }
    },
    {
        id: 19,
        title: "Opna Women's Short Sleeve Moisture",
        price: 7.95,
        description: '100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort',
        category: "women's clothing",
        image: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
        rating: { rate: 4.5, count: 146 }
    },
    {
        id: 20,
        title: 'DANVOUY Womens T Shirt Casual Cotton Short',
        price: 12.99,
        description: '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual / Office / Beach / School / Home / Street.Season: Spring, Summer, Autumn, Winter.', category: "women's clothing",
        image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
        rating: { rate: 3.6, count: 145 }
    }
];
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
const resetData = () => {
    data = localStorage.storeData;
    if (!data) {
        data = JSON.parse(JSON.stringify(DB));
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