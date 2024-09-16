const featureCat = [
    {
        featureCatImage: 'assets/slides/newArrivalBooks.jpg',
        featureCatTitle: 'New Arrivals',
    },{
        featureCatImage: 'assets/slides/bestSellerBooks.jpg',
        featureCatTitle: 'Best Sellers',
        
    },{
        featureCatImage: 'assets/slides/specialOfferBooks.jpg',
        featureCatTitle: 'Special Offers',
    }
];

let featureCatHtml = '';
featureCat.forEach((feature) => {
    featureCatHtml += `
        <div class="col-md-4 mb-3">
            <div class="card">
                <img src="${feature.featureCatImage}" alt="Fiction" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${feature.featureCatTitle}</h5>
                    <a href="catalog.html" class="btn btn-primary">Explore</a>
                </div>
            </div>
        </div>
    `
});

console.log(document.querySelector('.js-feature-catagories').innerHTML = featureCatHtml);