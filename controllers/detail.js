function getProductById(id) {
  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product/getbyid?id=" + id,
    method: "GET",
  });

  try {
    promise.then((res) => {
      renderProductById(res.data.content);
    });
    promise.catch((err) => {
      console.log("error: ", err.response?.data);
    });
  } catch (err) {
    console.log('error ',err)
  }
}

function renderProductById(product) {
  console.log(product);
  //Dom to tag by id
  let tableSize = "";
  let arrSize = product.size;
  let image = document.querySelector("#col-left img");
  let productName = document.querySelector("#col-right #title");
  let productDescription = document.querySelector("#col-right #description");
  let tagSize = document.querySelector("#select-size");
  let productPrice = document.querySelector("#col-right #price");

  // Set value for element
  image.src = product.image;
  productName.innerHTML = product.name;
  productDescription.innerHTML = product.description;
  productPrice.innerHTML = product.price + "$";

  for (i = 0; i < arrSize.length; i++) {
    tableSize += `
        <div class="size" id="size-${i + 1}">${arrSize[i]}</div>
    `;
  }
  tagSize.innerHTML = tableSize;
}

function getListProduct() {
  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
  });

  try {
    promise.then((res) => {
      // console.log(res.data.content);
      //   renderProduct(res.data.content, "tbody-realateProduct");
      renderProduct(res.data.content, "tBody-realateProduct");
    });

    promise.catch((err) => {
      console.log(err.response?.data);
    });
  } catch (error) {
    console.log(error);
  }
}

function renderProduct(arrPd, idBody) {
  let html = "";
  let renderProduct = document.getElementById(idBody);
  for (let i = 0; i < 6; i++) {
    let curentProduct = arrPd[i];
    html += `
      <div class="col-md-4 col-sm-6 col-product">
          <div class="item">
              <div class="body-item px-md-4 pb-md-2">
                  <img class="d-block ms-auto me-auto w-50" src="${curentProduct.image}" alt="...">
                  <p class="title-item">${curentProduct.name}</p>
                  <div class="description">${curentProduct.description}</div>
              </div>
              <div class="footer-item d-flex">
                  <a class="btn btn-warning w-50 rounded-0" id="btnBuy" href="../detail.html?productid=${curentProduct.id}">Buy Now</a>
                  <p class="price text-center p-3 w-50">${curentProduct.price}$</p>
              </div>
          </div>
      </div>
      `;
  }

  renderProduct.innerHTML = html;
}

window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('productid');
  // console.log("my param:",myParam)
  getProductById(myParam)
  getListProduct();
};
