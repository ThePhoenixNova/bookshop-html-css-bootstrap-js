import { 
    fictions,
    nonFictions, 
    childrens, 
    textbooks, 
    comics 
} from "../data/products.js";
import { formatCurrency } from "./utils/money.js";

let fictiontHtml = '';
fictions.forEach((fiction) => {
    fictiontHtml += `
        <div class="col-md-4 mb-4">
            <div class="card h-100 border-1 shadow-sm">
                <div class="img-container card-header">
                    <img src="${fiction.image}" class="card-img-top img-fluid rounded" alt="Book 1" style="height: 200px; object-fit: cover;">
                </div>
                <div class="card-body">
                    <h5 class="card-title font-weight-bold">${fiction.title}</h5>
                    <p class="card-text text-muted">By Author: ${fiction.author}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="price font-weight-bold">$${formatCurrency(fiction.priceCents)}</span>
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                    </div>
                </div>
                <div class="card-footer border-0">
                    <button class="btn btn-primary btn-sm">Add to Cart</button>
                    <button class="btn btn-outline-secondary btn-sm">Details</button>
                </div>
            </div>
        </div>
    `
});
document.querySelector('.js-row-fiction').innerHTML = fictiontHtml;

let nonFictionHtml = '';
nonFictions.forEach((nonFiction) => {
    nonFictionHtml += `
        <div class="col-md-4 mb-4">
            <div class="card h-100 border-1 shadow-sm">
                <div class="img-container card-header">
                    <img src="${nonFiction.image}" class="card-img-top img-fluid rounded" alt="Book 1" style="height: 200px; object-fit: cover;">
                </div>
                <div class="card-body">
                    <h5 class="card-title font-weight-bold">${nonFiction.title}</h5>
                    <p class="card-text text-muted">By Author: ${nonFiction.author}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="price font-weight-bold">$${formatCurrency(nonFiction.priceCents)}</span>
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                    </div>
                </div>
                <div class="card-footer border-0">
                    <button class="btn btn-primary btn-sm">Add to Cart</button>
                    <button class="btn btn-outline-secondary btn-sm">Details</button>
                </div>
            </div>
        </div>
    `
})
document.querySelector('.js-row-nonFiction').innerHTML = nonFictionHtml;


let childrenHtml = '';
childrens.forEach((children) => {
    childrenHtml += `
        <div class="col-md-4 mb-4">
            <div class="card h-100 border-1 shadow-sm">
                <div class="img-container card-header">
                    <img src="${children.image}" class="card-img-top img-fluid rounded" alt="Book 1" style="height: 200px; object-fit: cover;">
                </div>
                <div class="card-body">
                    <h5 class="card-title font-weight-bold">${children.title}</h5>
                    <p class="card-text text-muted">By Author: ${children.author}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="price font-weight-bold">$${formatCurrency(children.priceCents)}</span>
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                    </div>
                </div>
                <div class="card-footer border-0">
                    <button class="btn btn-primary btn-sm">Add to Cart</button>
                    <button class="btn btn-outline-secondary btn-sm">Details</button>
                </div>
            </div>
        </div>
    `
});
document.querySelector('.js-row-children').innerHTML = childrenHtml;

let textbookHtml = '';
textbooks.forEach((textbook) => {
    textbookHtml += `
        <div class="col-md-4 mb-4">
            <div class="card h-100 border-1 shadow-sm">
                <div class="img-container card-header">
                    <img src="${textbook.image}" class="card-img-top img-fluid rounded" alt="Book 1" style="height: 200px; object-fit: cover;">
                </div>
                <div class="card-body">
                    <h5 class="card-title font-weight-bold">${textbook.title}</h5>
                    <p class="card-text text-muted">By Author: ${textbook.author}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="price font-weight-bold">$${formatCurrency(textbook.priceCents)}</span>
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                    </div>
                </div>
                <div class="card-footer border-0">
                    <button class="btn btn-primary btn-sm">Add to Cart</button>
                    <button class="btn btn-outline-secondary btn-sm">Details</button>
                </div>
            </div>
        </div>
    `
});
document.querySelector('.js-row-textbook').innerHTML = textbookHtml;

let comicHtml = '';
comics.forEach((comic) => {
    comicHtml += `
        <div class="col-md-4 mb-4">
            <div class="card h-100 border-1 shadow-sm">
                <div class="img-container card-header">
                    <img src="${comic.image}" class="card-img-top img-fluid rounded" alt="Book 1" style="height: 200px; object-fit: cover;">
                </div>
                <div class="card-body">
                    <h5 class="card-title font-weight-bold">${comic.title}</h5>
                    <p class="card-text text-muted">By Author: ${comic.author}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="price font-weight-bold">$${formatCurrency(comic.priceCents)}</span>
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                    </div>
                </div>
                <div class="card-footer border-0">
                    <button class="btn btn-primary btn-sm">Add to Cart</button>
                    <button class="btn btn-outline-secondary btn-sm">Details</button>
                </div>
            </div>
        </div>
    `
});
document.querySelector('.js-row-comic').innerHTML = comicHtml;