// get FeaturedProperties
const URLFeaturedProperties = 'http://localhost:3000/FeaturedProperties'
const responseGetFeaturedProperties = fetch(URLFeaturedProperties);
responseGetFeaturedProperties.then(response => response.json()) 
.then(dataFeaturedProperties => {
    const dataCardProperties=dataFeaturedProperties
    const htmlFeaturedProperties = document.getElementById('propertiesFeatured');
    htmlFeaturedProperties.innerHTML=''; 
    dataCardProperties.forEach(function(el) {
        htmlFeaturedProperties.innerHTML+= `
        <div class="col-lg-4 col-md-6 property-grid-item">
            <div class="property-grid-card">
                <div class="property-grid-image">
                    <a href="./page.html?${el.id}" class="property-link-over-image" style="background-image: url(${el.image});"></a>
                    <span class="property-status-label">
                        <span class="property-type">
                            ${el.type.toUpperCase()}                    
                        </span>
                        <span class="property-status">
                            ${el.status.toUpperCase()}                    
                        </span>
                    </span>
                </div>
                <div class="property-grid-content">
                    <div class="property-grid-item-holder">
                        <span class="property-grid-price">
                            <span class="property-price-holder"><span class="property-price-number">${el.price}</span>
                            </span>
                        </span>
                        <div class="casaroyal-property-title-holder">
                            <span class="property-location-label">
                                ${el.location}  
                            </span>
                            <h4 class="property-grid-title-v2">
                                <a href="./page.html?${el.id}" class="property-link">
                                    ${el.name}  
                                </a>
                            </h4>
                        </div>
                        <div class="casaroyal-property-agent-name">
                            <img class="property-agent-avatar avatar-agent" src="${el.agent.image}"> 
                            <a href="#">${el.agent.name}</a>
                        </div>                
                        <div class="casaroyal-property-listing-time">
                            ${el.date}
                        </div>
                    </div>
                    <div class="property-meta">
                        <div class="property-meta-item first-item">
                            <img src="./images/AreaIcon.svg" alt="areaIcon">
                            <span>${el.area}</span>
                        </div>
                        <div class="property-meta-item">
                            <img src="./images/GarageIcon.svg" alt="garageIcon">
                            <span>${el.garage}</span>
                        </div>
                        <div class="property-meta-item">
                            <img src="./images/BathroomIcon.svg" alt="bathroomIcon">
                            <span>${el.bathroom}</span>
                        </div>
                        <div class="property-meta-item property-meta-item-garage">
                            <img src="./images/BedroomIcon.svg" alt="bedroomIcon">
                            <span>${el.bedroom}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `; 
    }); 
})
// get HotDeal

const URLHotDeal = 'http://localhost:3000/hotDeal'
const responseGetHotDeal = fetch(URLHotDeal);
responseGetHotDeal.then(response => response.json()) 
.then(dataHotDeal => {
    const dataCard=dataHotDeal[0];
    const htmlHotDeal = document.getElementById('hotDeal');
    htmlHotDeal.innerHTML=''; 
    htmlHotDeal.innerHTML += `
    <div class="row row-eq-height">
        <div class="col-md-6 bph-image" style="background-image: url(${dataCard.image});">        
            <a class="casaroyal-image-gallery" href="#">
                Photos <span>${dataCard.numPhotos}</span>
            </a>
        </div>
        <div class="col-md-6 bph-meta">
            <span class="bph-type">
                <span class="property-type">${dataCard.type}</span>									
            </span>
            <div>
                <h2 class="bph-title">
                    <a href="#">${dataCard.description}</a>
                </h2>
                <p>${dataCard.location}</p>
                <div class="bph-price">
                    <div class="property-price-wrapper">
                        <span><span class="property-price-number">${dataCard.price}</span>
                    </div>

                </div>
                <a href="" class="bph-play-video"></a>
            </div>
            <div class="property-meta">
                <div class="property-meta-item">
                    <img src="./images/Area Icon.png" alt="areaIcon">
                    <span>${dataCard.area}</span>
                </div>
                <div class="property-meta-item">
                    <img src="./images/Bedroom Icon.png" alt="bedroomIcon">
                    <span> ${dataCard.bedroom} Beds</span>
                </div>
                <div class="property-meta-item">
                    <img src="./images/Bathroom Icon.png" alt="bathroomIcon">
                    <span>${dataCard.bathroom} Bath</span>
                </div>
                <div class="property-meta-item">
                    <img src="./images/Garage Icon.png" alt="garageIcon">
                    <span>${dataCard.garage} Garage</span>
                </div>
            </div>
        </div>
    </div>
    `
})

// get PropertiesByArea
const URLPropertiesByArea = 'http://localhost:3000/propertiesByArea'
const responseGetPropertiesByArea = fetch(URLPropertiesByArea);
responseGetPropertiesByArea.then(response => response.json()) 
.then(dataPropertiesByArea => {
    const dataCard=dataPropertiesByArea;
    const htmlPropertiesByArea = document.getElementById('propertiesByArea');
    htmlPropertiesByArea.innerHTML=''; 
    dataCard.forEach(function(el,index) {
        let dataColumn ='';
        if(index>1){
            dataColumn= index%2?'4':'8';
        }else{
            dataColumn= index%2?'8':'4';
        }
        htmlPropertiesByArea.innerHTML+= `
        <div class="col-md-${dataColumn}">
            <div class="property-cat-block casaroyal-banner" onclick="window.location.href='#'">
                <div class="casaroyal-banner-image" style="background-image: url(${el.image});"></div>
                <div class="property-cat-block-content">
                    <span class="property-cat-block-name">${el.location}</span>
                    <span>${el.numberProp}</span>
                </div>
            </div>
        </div>
        `
    })
})

// get agents
const URLAgent = 'http://localhost:3000/agents'
const responseGetAgent = fetch(URLAgent);
responseGetAgent.then(response => response.json()) 
.then(dataAgent => {
    const dataCard=dataAgent;
    const htmlAgent = document.getElementById('agent');
    htmlAgent.innerHTML=''; 
    dataCard.forEach(function(el) {
        htmlAgent.innerHTML+= `
        <div class="col-lg-4 col-md-6">
            <div class="item-agent-container">
                <div class="casaroyal-search-card-body">
                    <div class="casaroyal-search-card-image">
                        <a href="#" title="John Doe">
                            <img src="${el.image}">
                        </a>
                    </div>
                    <div class="entry-title">
                        <span class="casaroyal-agent-position">${el.type}</span> 
                    </div>
                    <h2><a href="./agent/john-doe/">${el.name}</a></h2>
                    <div class="entry-title agent-contacts">
                        <h5><a href="tel:${el.phoneNumber}">${el.phoneNumber}</a></h5>
                        <h5><a href="mailto:${el.email}">${el.email}</a></h5>                                      
                    </div>
                    <ul class="agent-social-link">
                        <li>
                        </li>
                        <li>
                        </li>
                        <li>
                        </li>
                    </ul>  
                </div>
            </div>
        </div>
        `
    })
})
// Search

const handleSubtmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const type = document.querySelector('#select-property-type').value;
    const status = document.querySelector('#select-status').value;
    const inputSearch = document.querySelector('#inputSearch').value;
    const btn = document.getElementById('allProperties');
    btn.classList.add("hide");
    const apiSearch = (filter) =>{
        const URLFilter = `http://localhost:3000/FeaturedProperties?${filter}`
        const responseGetFilter = fetch(URLFilter);
        responseGetFilter.then(response => response.json()) 
        .then(dataFilter => {
            console.log(dataFilter)
            const dataCardFilter=dataFilter
            const htmlFilter = document.getElementById('propertiesFeatured');
            htmlFilter.innerHTML=''; 
            if(dataCardFilter.length > 0){
                dataCardFilter.forEach(function(el) {
                    htmlFilter.innerHTML+= `
                    <div class="col-lg-4 col-md-6 property-grid-item">
                        <div class="property-grid-card">
                            <div class="property-grid-image">
                                <a href="#" class="property-link-over-image" style="background-image: url(${el.image});"></a>
                                <span class="property-status-label">
                                    <span class="property-type">
                                        ${el.type.toUpperCase()}                    
                                    </span>
                                    <span class="property-status">
                                        ${el.status.toUpperCase()}                    
                                    </span>
                                </span>
                            </div>
                            <div class="property-grid-content">
                                <div class="property-grid-item-holder">
                                    <span class="property-grid-price">
                                        <span class="property-price-holder"><span class="property-price-number">${el.price}</span>
                                        </span>
                                    </span>
                                    <div class="casaroyal-property-title-holder">
                                        <span class="property-location-label">
                                            ${el.location}  
                                        </span>
                                        <h4 class="property-grid-title-v2">
                                            <a href="#" class="property-link">
                                                ${el.name}  
                                            </a>
                                        </h4>
                                    </div>
                                    <div class="casaroyal-property-agent-name">
                                        <img class="property-agent-avatar avatar-agent" src="${el.agent.image}"> 
                                        <a href="#">${el.agent.name}</a>
                                    </div>                
                                    <div class="casaroyal-property-listing-time">
                                        ${el.date}
                                    </div>
                                </div>
                                <div class="property-meta">
                                    <div class="property-meta-item first-item">
                                        <img src="./images/AreaIcon.svg" alt="areaIcon">
                                        <span>${el.area}</span>
                                    </div>
                                    <div class="property-meta-item">
                                        <img src="./images/GarageIcon.svg" alt="garageIcon">
                                        <span>${el.garage}</span>
                                    </div>
                                    <div class="property-meta-item">
                                        <img src="./images/BathroomIcon.svg" alt="bathroomIcon">
                                        <span>${el.bathroom}</span>
                                    </div>
                                    <div class="property-meta-item property-meta-item-garage">
                                        <img src="./images/BedroomIcon.svg" alt="bedroomIcon">
                                        <span>${el.bedroom}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `; 
                });
            } else {
                htmlFilter.innerHTML+= `
                        <div class="casaroyal-entry-title-wrapper ">
                            <div class="casaroyal-entry-title">
                                <h3 style="color: red">Without Results</h3>		
                            </div>
                        </div>
                `;
            }
        })
    }

    if(type !== 'any' && status !== 'any' && inputSearch){
        apiSearch(`type=${type}&status=${status}&q=${inputSearch}`)
    }
    else if (type !== 'any' && status !== 'any') {
        apiSearch(`type=${type}&status=${status}`)
    }
    else if (inputSearch){
        apiSearch(`name=${inputSearch}&q='${inputSearch}'`)
    }
    else if(type !== 'any'){
        apiSearch(`type=${type}`)
    } else if(status !== 'any'){
        apiSearch(`status=${status}`)
    }else {
        apiSearch();
        btn.classList.remove("hide");
        alert("ingrese por lo menos un valor a filtrar")
    }
}

addEventListener("submit", handleSubtmit);
