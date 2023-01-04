// get property
const id =window.location.href.split('?')[1];
const URLIdPage = `http://localhost:3000/FeaturedProperties/${id}`
const responseGetIdPage = fetch(URLIdPage);
responseGetIdPage.then(response => response.json()) 
.then(dataIdPage => {
    const htmlIdPage = document.getElementById('idPage');
    htmlIdPage.innerHTML=''; 
    htmlIdPage.innerHTML += `
    <div class="row row-eq-height">
        <div class="col-md-6 bph-image" style="background-image: url(${dataIdPage.image});">        
        </div>
        <div class="col-md-6 bph-meta">
            <span class="bph-type">
                <span class="property-type">${dataIdPage.type} - ${dataIdPage.status}</span>									
            </span>
            <div>
                <h2 class="bph-title">
                    <a href="#">${dataIdPage.name}</a>
                </h2>
                <p>${dataIdPage.location}</p>
                <div class="bph-price">
                    <div class="property-price-wrapper">
                        <span><span class="property-price-number">${dataIdPage.price}</span>
                    </div>

                </div>
                <a href="" class="bph-play-video"></a>
            </div>
            <div class="property-meta">
                <div class="property-meta-item">
                    <img src="./images/Area Icon.png" alt="areaIcon">
                    <span>${dataIdPage.area}</span>
                </div>
                <div class="property-meta-item">
                    <img src="./images/Bedroom Icon.png" alt="bedroomIcon">
                    <span> ${dataIdPage.bedroom} Beds</span>
                </div>
                <div class="property-meta-item">
                    <img src="./images/Bathroom Icon.png" alt="bathroomIcon">
                    <span>${dataIdPage.bathroom} Bath</span>
                </div>
                <div class="property-meta-item">
                    <img src="./images/Garage Icon.png" alt="garageIcon">
                    <span>${dataIdPage.garage} Garage</span>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 property-grid-item">
            <div class="property-grid-card">
                <div class="property-grid-content">
                    <h2 class="bph-title" style="color: black;margin-bottom: 50px;">
                        Data Propietary
                    </h2>
                    
                    <h2><a href="./agent/john-doe/">${dataIdPage.propietary.name}</a></h2>
                    <div class="entry-title agent-contacts">
                        <h5><a href="tel:${dataIdPage.propietary.phoneNumber}">${dataIdPage.propietary.phoneNumber}</a></h5>
                        <h5><a href="mailto:${dataIdPage.propietary.email}">${dataIdPage.propietary.email}</a></h5>                                      
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6 property-grid-item">
            <h2 class="bph-title" style="color: black;margin-bottom: 50px;">
                Description
            </h2>
            <div class="casaroyal-icon-box-content">
                ${dataIdPage.description}				
            </div>
        </div>
    </div>
    `
})
