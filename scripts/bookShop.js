import { featureCategories, latestNews } from "../data/home.js";
import { formatCurrency } from "./utils/money.js";
import { popularProduct } from "../data/products.js";

let featureCatHtml = '';
featureCategories.forEach((feature) => {
    featureCatHtml += `
        <div class="col-md-4 mb-3">
            <div class="card">
                <img src="${feature.image}" alt="Fiction" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${feature.title}</h5>
                    <a href="catalog.html" class="btn btn-primary">Explore</a>
                </div>
            </div>
        </div>
    `
});
document.querySelector('.js-feature-catagories').innerHTML = featureCatHtml;

let popularProHtml = '';
popularProduct.forEach((popular) => {
    popularProHtml += `
        <div class="col-md-3 mb-4">
            <div class="card h-100">
                <div class="card-header w-100 d-flex align-items-center justify-content-center">
                    <img src="${popular.image}" class="card-img-top w-50" alt="Book 1">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${popular.title}</h5>
                    <p class="card-text">By Author: ${popular.author}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="price">$${formatCurrency(popular.priceCents)}</span>
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <button class="btn btn-primary btn-sm">Add to Cart</button>
                    <button class="btn btn-outline-secondary btn-sm">Details</button>
                </div>
            </div>
        </div>
    `
});
document.querySelector('.js-row').innerHTML = popularProHtml;

let latestNewHtml = '';
latestNews.forEach((latestNew) => {
    latestNewHtml += `
        <div class="col-md-4 mb-3">
            <div class="card">
                <img src="${latestNew.image}" class="card-img-top" alt="News 1">
                <div class="card-body">
                    <h5 class="card-title">Author ${latestNew.author}</h5>
                    <p class="card-text">${latestNew.describe}</p>
                    <a href="#" class="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    `
});
document.querySelector('.js-row-section').innerHTML = latestNewHtml;